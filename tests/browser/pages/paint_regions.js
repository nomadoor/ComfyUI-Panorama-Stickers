// A stroke step uploads only the region it painted (docs/editor-architecture.md "Paint layers",
// docs/threejs-spark-integration.md "レイヤのテクスチャの共有"): the paint engine's displays drawn by two
// pano_three_view.js views as the Unwrap (one texel to one pixel), one uploading the changed rectangles
// (uploadTextureRegions), the other the whole canvas each time (the layers without `changed`). After every step
// both pictures are compared byte for byte, and the first view uploads no canvas whole after its first draw:
// not when a stroke starts or ends, nor in the rebuilds the editor runs after a stroke, for an eraser over many
// groups and for each move of a dragged group. The page reports through window.__check;
// tests/browser/paint_regions.spec.js reads it.
import { createThreeView } from "../../../web_src/pano_three_view.js";
import { createPaintEngineManager } from "../../../web_src/pano_paint_engine.js";

const check = (window.__check = { done: false, error: null, renderer: null, contextLost: false, cases: [] });
const W = 512;
const H = 256;
const color = { r: 0.9, g: 0.3, b: 0.1, a: 1 };

function stroke(layerKind, toolKind, points, extra = {}) {
  return {
    targetSpace: { kind: "ERP_GLOBAL" }, layerKind, toolKind, size: 10, hardness: 0.6, color,
    geometry: { geometryKind: "freehand", rawPoints: points.map(([u, v]) => ({ u, v })) }, ...extra,
  };
}
const line = (u0, v0, u1, v1, count = 20) => Array.from({ length: count }, (_, index) => [
  (u0 + ((u1 - u0) * index) / (count - 1) + 1) % 1, v0 + ((v1 - v0) * index) / (count - 1),
]);
// Two groups and a mask before each stroke.
const committed = { painting: {
  paint: { strokes: [
    stroke("paint", "pen", line(0.2, 0.4, 0.35, 0.5, 4), { actionGroupId: "g1" }),
    stroke("paint", "pen", line(0.3, 0.6, 0.5, 0.45, 4), { actionGroupId: "g2", opacity: 0.6 }),
  ] },
  mask: { strokes: [stroke("mask", "pen", line(0.6, 0.3, 0.7, 0.4, 4))] },
} };
const cases = [
  ["brush", stroke("paint", "brush", line(0.1, 0.3, 0.45, 0.7), { actionGroupId: "g1", opacity: 0.7 })],
  ["brush across the seam", stroke("paint", "brush", line(0.92, 0.5, 1.08, 0.55), { actionGroupId: "g2" })],
  ["rotated chisel", stroke("paint", "pen", line(0.2, 0.2, 0.5, 0.3), { actionGroupId: "g1", stampKind: "chisel", aspect: 2.6, angle: { value: 0.7 } })],
  ["mask pen", stroke("mask", "pen", line(0.5, 0.2, 0.8, 0.6))],
  ["paint eraser", stroke("paint", "eraser", line(0.15, 0.45, 0.55, 0.5))],
];

// A view and its WebGL context, counting the uploads of part of a texture (texSubImage2D with a size) and of a
// whole canvas (texSubImage2D or texImage2D of the canvas itself).
function makeView() {
  const view = createThreeView({ createCanvas: () => document.body.appendChild(document.createElement("canvas")) });
  view.resize(W, H);
  view.canvas.addEventListener("webglcontextlost", () => (check.contextLost = true));
  const gl = view.canvas.getContext("webgl2");
  const counts = { regions: 0, regionPixels: 0, whole: 0 };
  const upload = gl.texSubImage2D.bind(gl);
  gl.texSubImage2D = (...args) => {
    if (args.length === 9) {
      counts.regions += 1;
      counts.regionPixels += args[4] * args[5];
    } else if (args.length === 7 && args[6]?.width === W) {
      counts.whole += 1;
    }
    return upload(...args);
  };
  const create = gl.texImage2D.bind(gl);
  gl.texImage2D = (...args) => {
    if (args.at(-1)?.width === W) counts.whole += 1;
    return create(...args);
  };
  return { view, gl, counts };
}

function picture({ view, gl }, layers) {
  view.clear();
  view.renderUnwrap({ rect: { x: 0, y: 0, w: W, h: H }, background: null, layers });
  const pixels = new Uint8Array(W * H * 4);
  gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  const error = gl.getError();
  return { pixels, error };
}

function layersOf(engine, ids) {
  const layers = ids.map((id, index) => ({ kind: "erp", id, opacity: 1, zIndex: index, ...engine.getGroupDisplay(id) })).filter((layer) => layer.media);
  const mask = engine.getMaskDisplay();
  if (mask) layers.push({ kind: "erp", id: "mask", opacity: 1, zIndex: ids.length, ...mask });
  return layers;
}

// A stroke as the editor runs it: perFrame points a frame, then its end (the eraser's: cancelled, and the state
// with it rebuilt) and the rebuild with the stroke in the state.
function strokeOps(state, live, perFrame = 1) {
  const points = live.geometry.rawPoints;
  const frames = [(engine) => engine.beginStroke(live)];
  for (let index = 0; index < points.length; index += perFrame) {
    frames.push((engine) => points.slice(index, index + perFrame).forEach(({ u, v }) => engine.appendStrokePoint(engine.ensureTarget(), u, v, live)));
  }
  const after = { painting: { ...state.painting, paint: { strokes: [...state.painting.paint.strokes, live] } } };
  if (live.layerKind === "mask") after.painting = { ...state.painting, mask: { strokes: [...state.painting.mask.strokes, live] } };
  frames.push((engine) => {
    if (live.toolKind === "eraser" && live.layerKind === "paint") engine.cancelActiveStroke();
    else engine.commitActiveStroke(live);
  });
  frames.push((engine) => engine.rebuildCommitted(after));
  return frames;
}

// A group dragged: each move rebuilds with the group's strokes moved.
function dragOps(state, gid, moves = 8) {
  return Array.from({ length: moves }, (_, index) => (engine) => engine.rebuildCommitted({ painting: { ...state.painting, paint: { strokes: state.painting.paint.strokes.map((item) => (item.actionGroupId === gid
    ? { ...item, geometry: { ...item.geometry, rawPoints: item.geometry.rawPoints.map(({ u, v }) => ({ u: u + (index + 1) * 0.01, v })) } }
    : item)) } } }));
}

// Many groups, as many strokes give.
const many = { painting: {
  paint: { strokes: Array.from({ length: 12 }, (_, index) => stroke("paint", "pen",
    line((index % 6) / 6 + 0.02, 0.3 + Math.floor(index / 6) * 0.3, (index % 6) / 6 + 0.1, 0.35 + Math.floor(index / 6) * 0.3, 4), { actionGroupId: `m${index}` })) },
  mask: { strokes: [] },
} };
const manyIds = many.painting.paint.strokes.map((item) => item.actionGroupId);

const flows = [
  ...cases.map(([name, live]) => ({ name, state: committed, ids: ["g1", "g2"], ops: strokeOps(committed, live) })),
  { name: "fast brush", state: committed, ids: ["g1", "g2"], ops: strokeOps(committed, stroke("paint", "brush", line(0.1, 0.8, 0.6, 0.85, 120), { actionGroupId: "g1" }), 40) },
  { name: "eraser over many groups", state: many, ids: manyIds, ops: strokeOps(many, stroke("paint", "eraser", line(0.0, 0.32, 0.4, 0.34))) },
  { name: "dragged group", state: many, ids: manyIds, ops: dragOps(many, "m3") },
];

try {
  const regions = makeView();
  const whole = makeView();
  const info = regions.gl.getExtension("WEBGL_debug_renderer_info");
  check.renderer = info ? regions.gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : regions.gl.getParameter(regions.gl.RENDERER);
  for (const { name, state, ids, ops } of flows) {
    const engine = createPaintEngineManager({ width: W, height: H });
    engine.rebuildCommitted(state);
    const result = { name, steps: 0, differentSteps: 0, differentBytes: 0, glErrors: 0, painted: 0, regions: 0, whole: 0 };
    const step = () => {
      const layers = layersOf(engine, ids);
      const a = picture(regions, layers);
      const b = picture(whole, layers.map(({ changed, ...layer }) => layer));
      let different = 0;
      for (let index = 0; index < a.pixels.length; index += 1) if (a.pixels[index] !== b.pixels[index]) different += 1;
      result.steps += 1;
      if (different) result.differentSteps += 1;
      result.differentBytes += different;
      if (a.error || b.error) result.glErrors += 1;
      return a.pixels;
    };
    const first = step();
    const before = { ...regions.counts };
    let last = first;
    for (const op of ops) {
      op(engine);
      last = step();
    }
    for (let index = 0; index < first.length; index += 1) if (first[index] !== last[index]) result.painted += 1;
    result.regions = regions.counts.regions - before.regions;
    result.whole = regions.counts.whole - before.whole;
    regions.view.release(undefined);
    whole.view.release(undefined);
    check.cases.push(result);
  }
  check.wholeRegions = whole.counts.regions;
} catch (error) {
  check.error = String(error?.stack || error);
}
check.done = true;
