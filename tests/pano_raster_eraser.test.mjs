import assert from "node:assert/strict";
import test from "node:test";

import { createDamageLog } from "../web_src/pano_paint_damage.js";
import { rasterEraserDisplay } from "../web_src/pano_raster_eraser.js";
import { createLayerTextures } from "../web_src/pano_three_view.js";
import { createRasterCanvas, fakeGpu, withRasterCanvas } from "./raster_canvas.mjs";

const W = 256;
const H = 128;

// A raster object's ERP canvas: its picture over its bbox, offset by du.
function rasterCanvas(du = 0) {
  const canvas = createRasterCanvas(W, H);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(40,160,220,0.8)";
  ctx.fillRect(100 + du * W, 40, 60, 40);
  return canvas;
}
// Its bbox is wider than its picture, so an eraser can reach the bbox without taking any pixel.
const item = (du = 0) => ({ id: "r1", bbox: { u0: 84 / W, v0: 30 / H, u1: 176 / W, v1: 90 / H }, transform: { du, dv: 0, rot_deg: 0, scale: 1 } });
const surface = (width, height) => {
  const canvas = createRasterCanvas(width, height);
  return { canvas, ctx: canvas.getContext("2d") };
};

// The live eraser's preview as editor/paint_layers.js makes it: the whole stroke so far drawn again on one canvas
// (squares of side 12 at the points), with the box it drew in and the bounds of its pixels.
function previewer() {
  const eraser = surface(W, H);
  let box = null;
  let count = 0;
  return (points) => {
    if (box) eraser.ctx.clearRect(box.x0, box.y0, box.x1 - box.x0, box.y1 - box.y0);
    eraser.ctx.fillStyle = "rgba(255,255,255,1)";
    for (const [x, y] of points) eraser.ctx.fillRect(x - 6, y - 6, 12, 12);
    const xs = points.map(([x]) => x);
    const ys = points.map(([, y]) => y);
    box = { x0: Math.min(...xs) - 8, y0: Math.min(...ys) - 8, x1: Math.max(...xs) + 8, y1: Math.max(...ys) + 8 };
    count += 1;
    return {
      surface: eraser, box,
      bounds: { minX: Math.min(...xs) - 6, minY: Math.min(...ys) - 6, maxX: Math.max(...xs) + 5, maxY: Math.max(...ys) + 5 },
      key: `step${count}`,
    };
  };
}

// The steps of an eraser: the preview's points at each step (null: no eraser), with the raster object's offset.
// The preview is the whole stroke drawn again, so it can move off the raster object (its points smoothed) and on.
const left = (n) => Array.from({ length: n }, (_, index) => [20 + index * 4, 60]);
const steps = [
  { points: null },
  { points: left(5) }, // outside
  { points: left(20) }, // enters
  { points: left(30) }, // crosses
  { points: left(40) },
  { points: left(40).map(([x, y]) => [x - 100, y]) }, // the smoothed stroke leaves it
  { points: left(40) }, // and enters again
  { points: [[84, 60], [88, 60]] }, // within the bbox, but off the picture
  { points: left(40) },
  { points: null }, // the eraser ends while it shows
  { points: left(30) }, // another stroke
  { points: left(35), du: 0.05 }, // the raster object moves while it shows
  { points: left(40), du: 0.05 },
  { points: null, du: 0.05 },
];

test("a raster object shows the live eraser where it takes its pixels, uploading only where it changed", () => withRasterCanvas(() => {
  const display = { log: createDamageLog(), base: null };
  const gpu = fakeGpu();
  const textures = createLayerTextures({ uploadRegions: (texture, rects) => gpu.uploadRegions(texture, rects) });
  const preview = previewer();
  const sources = new Map();
  const shown = [];

  steps.forEach(({ points, du = 0 }, index) => {
    if (!sources.has(du)) sources.set(du, rasterCanvas(du));
    const source = sources.get(du);
    const info = points ? preview(points) : null;
    const layer = { id: "raster:r1", ...rasterEraserDisplay(display, source, item(du), info, surface) };
    // What a new record draws whole at this step.
    const whole = rasterEraserDisplay({ log: createDamageLog(), base: null }, source, item(du), info, surface);
    assert.deepEqual(layer.media.pixels, whole.media.pixels, `step ${index}`);
    gpu.uploaded = 0;
    const owned = textures.draw("stage");
    const texture = owned.texture(layer, 0, false);
    owned.end();
    gpu.render([texture]);
    assert.deepEqual(gpu.pixels(texture), layer.media.pixels, `texture at step ${index}`);
    // Only a new picture (the first, or the moved raster object's canvas) uploads whole.
    if (index > 0 && (du === 0 || steps[index - 1].du === du)) assert.ok(gpu.uploaded < W * H * 0.5, `uploaded ${gpu.uploaded} at step ${index}`);
    shown.push(layer.media === source ? "base" : "erased");

  });
  assert.deepEqual(shown, ["base", "base", "erased", "erased", "erased", "base", "erased", "base", "erased", "base", "erased", "erased", "erased", "base"]);
}));
