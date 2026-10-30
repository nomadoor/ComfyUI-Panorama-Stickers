import assert from "node:assert/strict";
import test from "node:test";

import { createDamageLog } from "../web_src/pano_paint_damage.js";
import { createPaintEngineManager } from "../web_src/pano_paint_engine.js";
import { createLayerTextures } from "../web_src/pano_three_view.js";
import { fakeGpu, resetStats, stats, withRasterCanvas } from "./raster_canvas.mjs";

const W = 256;
const H = 128;
const AREA = W * H;

test("a damage log gives where a canvas changed since a revision, or null when it does not know", () => {
  const log = createDamageLog();
  const start = log.revision;
  assert.deepEqual(log.since(start), []);
  log.mark([{ x0: 0, y0: 0, x1: 4, y1: 4 }]);
  const one = log.revision;
  log.mark([{ x0: 4, y0: 0, x1: 8, y1: 4 }, { x0: 20, y0: 20, x1: 24, y1: 24 }]);
  assert.deepEqual(log.since(one), [{ x0: 4, y0: 0, x1: 8, y1: 4 }, { x0: 20, y0: 20, x1: 24, y1: 24 }]);
  // Rectangles that touch are one.
  const byX = (rects) => [...rects].sort((a, b) => a.x0 - b.x0);
  assert.deepEqual(byX(log.since(start)), [{ x0: 0, y0: 0, x1: 8, y1: 4 }, { x0: 20, y0: 20, x1: 24, y1: 24 }]);
  assert.equal(log.since(createDamageLog().revision), null, "another canvas's revision");
  assert.equal(log.since(undefined), null);
  log.mark(null);
  assert.equal(log.since(one), null, "a change anywhere since");
  assert.deepEqual(log.since(log.revision), []);
  // However far behind, a reader gets rectangles that cover every change since.
  const later = log.revision;
  for (let index = 0; index < 3000; index += 1) log.mark([{ x0: index % 50, y0: 0, x1: index % 50 + 1, y1: 1 }]);
  assert.deepEqual(log.since(later), [{ x0: 0, y0: 0, x1: 50, y1: 1 }]);
});

const color = { r: 0.9, g: 0.3, b: 0.1, a: 1 };
function stroke(layerKind, toolKind, points, extra = {}) {
  return {
    targetSpace: { kind: "ERP_GLOBAL" },
    layerKind,
    toolKind,
    size: 9,
    hardness: 0.5,
    color,
    geometry: { geometryKind: "freehand", rawPoints: points.map(([u, v]) => ({ u, v })) },
    ...extra,
  };
}

// The painting before the live stroke: two groups and a mask.
const committed = {
  painting: {
    paint: { strokes: [
      stroke("paint", "pen", [[0.2, 0.4], [0.35, 0.5]], { actionGroupId: "g1" }),
      stroke("paint", "pen", [[0.3, 0.6], [0.5, 0.45]], { actionGroupId: "g2", opacity: 0.6 }),
    ] },
    mask: { strokes: [stroke("mask", "pen", [[0.6, 0.3], [0.7, 0.4]])] },
  },
};
const GROUPS = ["g1", "g2"];

// The layers a view draws from the engine: each group's display and the mask display.
function layersOf(engine) {
  const layers = GROUPS.map((id) => ({ id, ...engine.getGroupDisplay(id) }));
  const mask = engine.getMaskDisplay();
  if (mask) layers.push({ id: "mask", ...mask });
  return layers;
}

// Paints `live` into an engine with the committed painting, point by point. With `view`, each step is drawn as
// a view draws it (the layers, their textures through a fake GPU) and checked; the engine is returned with what
// each step drew.
function paint(live, { view = false, commit = false } = {}) {
  const engine = createPaintEngineManager({ width: W, height: H });
  engine.rebuildCommitted(committed);
  const gpu = fakeGpu();
  const textures = createLayerTextures({ uploadRegions: (texture, rects) => gpu.uploadRegions(texture, rects) });
  const steps = [];
  const draw = () => {
    resetStats();
    gpu.uploaded = 0;
    const owned = textures.draw("stage");
    const layers = layersOf(engine);
    const bound = layers.map((layer) => owned.texture(layer, 0, false));
    owned.end();
    gpu.render(bound);
    // Every texture holds exactly its canvas's pixels.
    layers.forEach((layer, index) => assert.deepEqual(gpu.pixels(bound[index]), layer.media.pixels, `${layer.id} texture`));
    steps.push({ composed: stats.drawn + stats.filled + stats.cleared, uploaded: gpu.uploaded, textures: bound });
  };
  if (view) draw();
  engine.beginStroke(live);
  for (const { u, v } of live.geometry.rawPoints) {
    engine.appendStrokePoint(engine.ensureTarget(), u, v, live);
    if (view) draw();
  }
  if (commit) {
    engine.commitActiveStroke(live);
    if (view) draw();
  }
  return { engine, steps };
}

// The pixels of every display canvas.
function displayPixels(engine) {
  return layersOf(engine).map((layer) => [layer.id, Array.from(layer.media.pixels)]);
}

// A stroke of many short steps across the canvas.
function line(u0, v0, u1, v1, count = 24) {
  return Array.from({ length: count }, (_, index) => [u0 + ((u1 - u0) * index) / (count - 1), v0 + ((v1 - v0) * index) / (count - 1)]);
}

const cases = [
  ["a brush stroke in a group", stroke("paint", "pen", line(0.1, 0.3, 0.45, 0.7), { actionGroupId: "g1", opacity: 0.7 })],
  ["a stroke across the seam", stroke("paint", "pen", line(0.9, 0.5, 1.1, 0.55).map(([u, v]) => [u % 1, v]), { actionGroupId: "g2" })],
  ["a rotated chisel stroke", stroke("paint", "pen", line(0.2, 0.2, 0.5, 0.3), { actionGroupId: "g1", stampKind: "chisel", aspect: 2.5, angle: { value: 0.6 } })],
  ["the paint eraser", stroke("paint", "eraser", line(0.15, 0.45, 0.55, 0.5))],
  ["a mask stroke", stroke("mask", "pen", line(0.5, 0.2, 0.8, 0.6))],
  ["the mask eraser", stroke("mask", "eraser", line(0.55, 0.3, 0.75, 0.4))],
];

for (const [name, live] of cases) {
  test(`${name}: each step draws and uploads only where it painted, with the pixels of a whole redraw`, () => withRasterCanvas(() => {
    for (const commit of [false, true]) {
      const { engine, steps } = paint(live, { view: true, commit });
      // The engine drawn whole once at the end, without drawing the steps.
      const whole = paint(live, { commit }).engine;
      assert.deepEqual(displayPixels(engine), displayPixels(whole), commit ? "after the commit" : "before the commit");
      // After the first draw, no step uploads a canvas whole: not when the stroke starts showing on a group, nor
      // when it ends.
      const between = steps.slice(1);
      assert.ok(between.length > 10);
      for (const step of between) assert.ok(step.uploaded < AREA * 0.25, `uploaded ${step.uploaded} of ${AREA}`);
      // A layer keeps its texture when its display moves to the canvas with the stroke and back.
      for (const step of steps) assert.deepEqual(step.textures.slice(0, GROUPS.length), steps[0].textures.slice(0, GROUPS.length));
      // The canvas with the stroke is drawn whole once per group it shows on.
      assert.ok(between.filter((step) => step.composed >= AREA * 0.25).length <= GROUPS.length);
      assert.ok(between.some((step) => step.uploaded > 0), "the steps upload what they painted");
    }
  }));
}

// A view of an engine through createLayerTextures and a fake GPU: draw() checks every texture against its canvas
// and returns the pixels uploaded.
function viewOf(engine) {
  const gpu = fakeGpu();
  const textures = createLayerTextures({ uploadRegions: (texture, rects) => gpu.uploadRegions(texture, rects) });
  return () => {
    gpu.uploaded = 0;
    const owned = textures.draw("stage");
    const layers = layersOf(engine);
    const bound = layers.map((layer) => owned.texture(layer, 0, false));
    owned.end();
    gpu.render(bound);
    layers.forEach((layer, index) => assert.deepEqual(gpu.pixels(bound[index]), layer.media.pixels, layer.id));
    return gpu.uploaded;
  };
}

// The committed painting with `extra` paint strokes, and with g2's strokes moved by du.
function paintingWith(extra = [], du = 0) {
  const strokes = committed.painting.paint.strokes.map((item) => (item.actionGroupId === "g2" && du
    ? { ...item, geometry: { ...item.geometry, rawPoints: item.geometry.rawPoints.map(({ u, v }) => ({ u: u + du, v })) } }
    : item));
  return { painting: { ...committed.painting, paint: { strokes: [...strokes, ...extra] } } };
}

// What a rebuild from scratch draws (the committed canvases of a new engine).
function rebuiltPixels(state) {
  const engine = createPaintEngineManager({ width: W, height: H });
  engine.rebuildCommitted(state);
  return displayPixels(engine);
}

test("a rebuild draws again only the groups whose strokes changed, uploading only where they are", () => withRasterCanvas(() => {
  const live = cases[0][1];
  const { engine } = paint(live, { commit: true });
  const draw = viewOf(engine);
  draw();
  // The editor rebuilds after a stroke ends (the stroke is in the state now).
  engine.rebuildCommitted(paintingWith([live]));
  assert.deepEqual(displayPixels(engine), rebuiltPixels(paintingWith([live])));
  const afterStroke = draw();
  assert.ok(afterStroke < AREA * 0.3, `uploaded ${afterStroke}`);
  engine.rebuildCommitted(paintingWith([live]));
  assert.equal(draw(), 0, "the same strokes upload nothing");
  // Dragging g2: each move rebuilds with g2's strokes moved; g1 and the mask stay.
  for (const du of [0.01, 0.02, 0.03]) {
    engine.rebuildCommitted(paintingWith([live], du));
    assert.deepEqual(displayPixels(engine), rebuiltPixels(paintingWith([live], du)), `moved ${du}`);
    const moved = draw();
    assert.ok(moved > 0 && moved < AREA * 0.3, `uploaded ${moved} for a move`);
  }
  // An Undo back to the painting before.
  engine.rebuildCommitted(committed);
  assert.deepEqual(displayPixels(engine), rebuiltPixels(committed));
  draw();
}));

test("with many groups, the paint eraser draws and uploads only the groups it reaches", () => withRasterCanvas(() => {
  const many = { painting: { paint: { strokes: Array.from({ length: 30 }, (_, index) => stroke("paint", "pen",
    [[(index % 10) / 10 + 0.02, 0.2 + Math.floor(index / 10) * 0.25], [(index % 10) / 10 + 0.07, 0.25 + Math.floor(index / 10) * 0.25]],
    { actionGroupId: `m${index}` })) }, mask: { strokes: [] } } };
  const ids = many.painting.paint.strokes.map((item) => item.actionGroupId);
  const engine = createPaintEngineManager({ width: W, height: H });
  engine.rebuildCommitted(many);
  const gpu = fakeGpu();
  const textures = createLayerTextures({ uploadRegions: (texture, rects) => gpu.uploadRegions(texture, rects) });
  const layers = () => ids.map((id) => ({ id, ...engine.getGroupDisplay(id) }));
  const draw = () => {
    resetStats();
    gpu.uploaded = 0;
    const owned = textures.draw("stage");
    const shown = layers();
    const bound = shown.map((layer) => owned.texture(layer, 0, false));
    owned.end();
    gpu.render(bound);
    shown.forEach((layer, index) => assert.deepEqual(gpu.pixels(bound[index]), layer.media.pixels, layer.id));
    return { uploaded: gpu.uploaded, composed: stats.drawn + stats.filled + stats.cleared };
  };
  draw();
  const media = layers().map((layer) => layer.media);
  const revisions = layers().map((layer) => layer.revision);
  const eraser = stroke("paint", "eraser", line(0.0, 0.22, 0.25, 0.24));
  engine.beginStroke(eraser);
  let copies = 0;
  for (const { u, v } of eraser.geometry.rawPoints) {
    engine.appendStrokePoint(engine.ensureTarget(), u, v, eraser);
    const step = draw();
    assert.ok(step.uploaded < AREA * 0.1, `uploaded ${step.uploaded}`);
    // A step draws only near the eraser, besides drawing the eraser's canvas of each group it reaches (made,
    // cleared, the paint and the eraser drawn: four times the canvas).
    copies += Math.round(step.composed / (AREA * 4));
    assert.ok(step.composed % (AREA * 4) < AREA * 0.25, `composed ${step.composed}`);
  }
  // Only the few groups the eraser reaches show it; the others stay as they are.
  const reached = layers().filter((layer, index) => layer.revision !== revisions[index]).length;
  assert.ok(reached > 0 && reached <= 5, `reached ${reached}`);
  assert.equal(copies, reached);
  // The editor ends an eraser stroke by cancelling it and rebuilding with the eraser in the state.
  engine.cancelActiveStroke();
  engine.rebuildCommitted({ painting: { ...many.painting, paint: { strokes: [...many.painting.paint.strokes, eraser] } } });
  const end = draw();
  assert.ok(end.uploaded < AREA * 0.3, `uploaded ${end.uploaded} at the end`);
  assert.deepEqual(layers().map((layer) => layer.media), media, "every group shows its committed paint again");
  const fresh = createPaintEngineManager({ width: W, height: H });
  fresh.rebuildCommitted({ painting: { ...many.painting, paint: { strokes: [...many.painting.paint.strokes, eraser] } } });
  for (const id of ids) assert.deepEqual(Array.from(engine.getGroupDisplay(id).media.pixels), Array.from(fresh.getGroupDisplay(id).media.pixels), id);
}));

test("a fast stroke (many points between two draws) still uploads only where it painted", () => withRasterCanvas(() => {
  const engine = createPaintEngineManager({ width: W, height: H });
  engine.rebuildCommitted(committed);
  const draw = viewOf(engine);
  draw();
  const live = stroke("paint", "pen", line(0.1, 0.3, 0.2, 0.35, 300), { actionGroupId: "g1" });
  engine.beginStroke(live);
  const points = live.geometry.rawPoints;
  for (let index = 0; index < points.length; index += 100) {
    for (const { u, v } of points.slice(index, index + 100)) engine.appendStrokePoint(engine.ensureTarget(), u, v, live);
    const uploaded = draw();
    assert.ok(uploaded < AREA * 0.25, `uploaded ${uploaded}`);
  }
}));

test("a group the stroke does not touch keeps its revision and is not uploaded again", () => withRasterCanvas(() => {
  const engine = createPaintEngineManager({ width: W, height: H });
  engine.rebuildCommitted(committed);
  const before = engine.getGroupDisplay("g2");
  const live = cases[0][1];
  engine.beginStroke(live);
  for (const { u, v } of live.geometry.rawPoints) engine.appendStrokePoint(engine.ensureTarget(), u, v, live);
  const during = engine.getGroupDisplay("g2");
  assert.equal(during.media, before.media);
  assert.equal(during.revision, before.revision);
  assert.notEqual(engine.getGroupDisplay("g1").revision, before.revision);
}));

test("two views of a group (the stage and a camera preview that draws less often) share one texture through a stroke", () => withRasterCanvas(() => {
  const engine = createPaintEngineManager({ width: W, height: H });
  engine.rebuildCommitted(committed);
  const gpu = fakeGpu();
  const textures = createLayerTextures({ uploadRegions: (texture, rects) => gpu.uploadRegions(texture, rects) });
  const groupTextures = new Set();
  const draw = (owner) => {
    const owned = textures.draw(owner);
    const layers = layersOf(engine);
    const bound = layers.map((layer) => owned.texture(layer, 0, false));
    owned.end();
    gpu.render(bound);
    layers.forEach((layer, index) => assert.deepEqual(gpu.pixels(bound[index]), layer.media.pixels, `${owner} ${layer.id}`));
    groupTextures.add(bound[0]);
  };
  draw("stage");
  draw("camera_preview");
  const live = cases[0][1];
  engine.beginStroke(live);
  live.geometry.rawPoints.forEach(({ u, v }, index) => {
    engine.appendStrokePoint(engine.ensureTarget(), u, v, live);
    if (index === 12) textures.release("camera_preview");
    if (index % 3 === 0 || index === 13) draw("camera_preview");
    draw("stage");
  });
  engine.commitActiveStroke(live);
  draw("stage");
  draw("camera_preview");
  assert.equal(groupTextures.size, 1, "the group has one texture");
  assert.equal(textures.size, layersOf(engine).length, "one texture per layer");
}));
