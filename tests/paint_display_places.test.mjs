import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import test from "node:test";

import { createPaintLayers } from "../web_src/editor/paint_layers.js";
import { normalizePaintingState } from "../web_src/pano_paint_types.js";
import { surfacePaintLayers } from "../web_src/pano_surface_paint.js";
import { createUpstreamLayers } from "../web_src/pano_upstream_layers.js";
import { createStudioPaint } from "../web_src/studio/paint.js";

// What the four places that show paint on the Sky (docs/editor-architecture.md "Paint layers": the new UI's stage,
// the old editor's views, a node surface, an upstream Scene's layer) do with the paint's raster objects and the
// read-only paint engines, step by step: which canvases they make, give again, let go (width 0), the images they make,
// when a layer's revision changes, how they place a raster object, and when they ask for a draw. The trace was taken
// from the code before web_src/pano_paint_display.js took these over; the module keeps each place's own rules
// (PAINT_DISPLAY_PLACES), so the trace stays the same. UPDATE_TRACE=1 writes it again.

const TRACE_PATH = new URL("./fixtures/paint_display_places_trace.json", import.meta.url);
const IMAGE_SIZE = { width: 64, height: 32 };

// --- A browser of fakes: canvases that log their drawing, images that load when flush() says so (an image of a data
// URL loaded before is complete at once, as Chromium's memory cache gives it, but its onload still comes later).

function fakeBrowser() {
  const log = { canvases: [], images: [], released: 0 };
  const loaded = new Set();
  const pending = [];
  const context = (canvas) => new Proxy({}, {
    get(target, name) {
      if (name in target) return target[name];
      if (name === "canvas") return canvas;
      if (name === "getImageData" || name === "createImageData") {
        return (...args) => {
          const width = Math.max(1, Math.round(Number(args.length >= 4 ? args[2] : args[0]) || 1));
          const height = Math.max(1, Math.round(Number(args.length >= 4 ? args[3] : args[1]) || 1));
          return { width, height, data: new Uint8ClampedArray(width * height * 4) };
        };
      }
      if (name === "measureText") return () => ({ width: 0 });
      if (name === "createLinearGradient" || name === "createRadialGradient" || name === "createPattern") return () => ({ addColorStop() {} });
      if (name === "drawImage") {
        return (image, ...args) => {
          canvas.draws.push([image?.serial ?? image?.src ?? "?", ...args.map((value) => Number(value))]);
        };
      }
      if (name === "translate" || name === "rotate" || name === "scale") {
        return (...args) => canvas.draws.push([name, ...args.map((value) => Number(value))]);
      }
      return () => {};
    },
    set(target, name, value) {
      target[name] = value;
      return true;
    },
  });
  const document = {
    createElement(tag) {
      if (String(tag).toLowerCase() !== "canvas") return { style: {}, setAttribute() {}, appendChild() {} };
      let width = 300;
      let height = 150;
      const canvas = {
        serial: `c${log.canvases.length}`,
        draws: [],
        style: {},
        get width() { return width; },
        set width(value) {
          if (Number(value) === 0 && width !== 0) log.released += 1;
          width = Number(value);
        },
        get height() { return height; },
        set height(value) { height = Number(value); },
      };
      const ctx = context(canvas);
      canvas.getContext = () => ctx;
      log.canvases.push(canvas);
      return canvas;
    },
  };
  class FakeImage {
    constructor() {
      this.serial = `i${log.images.length}`;
      this.complete = false;
      this.naturalWidth = 0;
      this.naturalHeight = 0;
      this.width = 0;
      this.height = 0;
      this.onload = null;
      this.onerror = null;
      log.images.push(this);
    }
    set src(value) {
      this._src = value;
      if (loaded.has(value) && !value.includes("broken")) this.settle(true);
      pending.push(this);
    }
    get src() {
      return this._src;
    }
    settle(ok) {
      this.complete = true;
      this.naturalWidth = ok ? IMAGE_SIZE.width : 0;
      this.naturalHeight = ok ? IMAGE_SIZE.height : 0;
      this.width = this.naturalWidth;
      this.height = this.naturalHeight;
    }
    removeAttribute() {}
  }
  function flush() {
    for (const image of pending.splice(0)) {
      const ok = !String(image._src).includes("broken");
      if (!image.complete) image.settle(ok);
      loaded.add(image._src);
      if (ok) image.onload?.();
      else image.onerror?.();
    }
  }
  const saved = { document: globalThis.document, Image: globalThis.Image };
  globalThis.document = document;
  globalThis.Image = FakeImage;
  return {
    log,
    flush,
    restore() {
      globalThis.document = saved.document;
      globalThis.Image = saved.Image;
    },
  };
}

// --- The painting each place is shown, step by step.

const png = (name) => `data:image/png;base64,${name}AAAA${"x".repeat(40)}${name}`;
const raster = (id, extra = {}) => ({
  id,
  type: "raster_frozen",
  layerKind: "paint",
  z_index: 1,
  locked: false,
  bbox: { u0: 0.1, v0: 0.2, u1: 0.3, v1: 0.5 },
  rasterDataUrl: png(id),
  transform: { du: 0, dv: 0, rot_deg: 0, scale: 1 },
  ...extra,
});
// A wide one turned and grown across the seam, a thin one (0.4 px at 1024 wide), a mask one, one whose image is broken.
const R1 = raster("r1", { transform: { du: 0.95, dv: 0.05, rot_deg: 30, scale: 1.7 } });
const R2 = raster("r2", { z_index: 2, bbox: { u0: 0.5, v0: 0.4, u1: 0.5 + 0.4 / 1024, v1: 0.45 } });
const RM = raster("rm", { layerKind: "mask", z_index: 3 });
const RB = raster("rb", { z_index: 4, rasterDataUrl: "data:image/png;base64,broken" });
const stroke = (id, actionGroupId, layerKind = "paint") => ({
  id,
  actionGroupId,
  layerKind,
  toolKind: "pen",
  targetSpace: { kind: "ERP_GLOBAL" },
  size: 10,
  opacity: 1,
  color: { r: 1, g: 0, b: 0, a: 1 },
  geometry: { geometryKind: "freehand_open", points: [{ u: 0.5, v: 0.5 }, { u: 0.51, v: 0.5 }] },
});
const painting = ({ rasters = [], strokes = [], mask = [], groups = [] } = {}) => normalizePaintingState({
  version: 1,
  groups,
  paint: { strokes },
  mask: { strokes: mask },
  raster_objects: rasters,
});
const moved = (item, du) => ({ ...item, transform: { ...item.transform, du } });

// The steps: [name, painting, visible, size]. `size` is the paint's width where a place takes one.
function steps() {
  const base = painting({ rasters: [R1, R2, RM, RB] });
  const out = [
    ["first", base, true, 2048],
    ["loaded", base, true, 2048],
    ["same", base, true, 2048],
    ["moved", painting({ rasters: [moved(R1, 0.5), R2, RM, RB] }), true, 2048],
    ["back", painting({ rasters: [R1, R2, RM, RB] }), true, 2048],
    ["r2 gone", painting({ rasters: [R1, RM, RB] }), true, 2048],
    ["hidden", painting({ rasters: [R1, RM, RB] }), false, 2048],
    ["shown", painting({ rasters: [R1, RM, RB] }), true, 2048],
    ["resized", painting({ rasters: [R1, RM, RB] }), true, 1024],
  ];
  for (let index = 0; index < 70; index += 1) out.push([`drag ${index}`, painting({ rasters: [moved(R1, index / 100), RM] }), true, 1024]);
  out.push(["empty", painting({}), true, 1024]);
  return out;
}

// One step's record: the paint layers (id, media, whether the revision changed since the layer was last seen), the
// canvases made and let go so far, the images made, the draws asked for.
function recorder(env) {
  const revisions = new Map();
  const rows = [];
  let readies = 0;
  // A canvas is named by the order it first shows in the layers, so the trace says which layer shows the same canvas
  // again without depending on when other canvases (a paint engine's) were made.
  const names = new Map();
  const media = (value) => {
    if (value == null) return null;
    if (typeof value === "string") return value;
    if (!names.has(value)) names.set(value, `m${names.size}`);
    return names.get(value);
  };
  return {
    ready() {
      readies += 1;
    },
    record(name, layers, extra = {}) {
      // The views keep a texture per media and upload it again when its revision is not the one before
      // (pano_three_view.js), so a revision is compared only while the media is the same.
      const shown = layers.map((layer) => {
        const before = revisions.get(layer.id);
        const changed = !before ? null : before.media !== layer.media ? "new media" : before.revision !== layer.revision;
        revisions.set(layer.id, { media: layer.media, revision: layer.revision });
        return [layer.id, media(layer.media), changed];
      });
      rows.push({ name, layers: shown, canvases: env.log.canvases.length, released: env.log.released, images: env.log.images.length, readies, ...extra });
    },
    media,
    rows,
  };
}

// How the canvases of raster objects were drawn: per canvas made for a raster object, its size and transforms.
function rasterDraws(env) {
  return env.log.canvases
    .filter((canvas) => canvas.draws.some((draw) => String(draw[0]).startsWith("i")))
    .slice(0, 6)
    .map((canvas) => ({ size: [canvas.width, canvas.height], draws: canvas.draws }));
}

// --- The places.

function studioTrace() {
  const env = fakeBrowser();
  try {
    const rec = recorder(env);
    let scene = null;
    const paint = createStudioPaint({ state: () => scene, tools: () => ({}), edit: () => ({}), onChange: () => rec.ready() });
    for (const [name, value, visible] of steps()) {
      if (name === "loaded") env.flush();
      scene = { painting: value, painting_visible: visible, stickers: [] };
      rec.record(name, paint.layers(), { alpha: paint.rasterAlpha(R1, 0.5, 0.5) });
      env.flush();
    }
    paint.dispose();
    rec.record("disposed", []);
    return { rows: rec.rows, draws: rasterDraws(env) };
  } finally {
    env.restore();
  }
}

function editorTrace() {
  const env = fakeBrowser();
  try {
    const rec = recorder(env);
    let size = 2048;
    const state = { painting: painting(), painting_visible: true, stickers: [] };
    const editor = {
      interaction: null,
      get paintEngine() {
        return { descriptor: { width: size, height: size / 2 }, getGroupDisplay: () => null, getMaskDisplay: () => null };
      },
    };
    const layers = createPaintLayers({
      api: {}, editor, node: { id: 1 }, rasterImageAlphaCache: new Map(), rasterImageCache: new Map(), state,
    });
    layers.connect({
      commitState() {}, createRasterSurface: () => null, getActivePaintTargetDescriptor: () => ({ width: size, height: size / 2 }),
      getDesiredPaintTargetDescriptor: () => ({ width: size, height: size / 2 }), getOrderedDisplayListObjects: () => [],
      getOrderedPaintGroupIds: () => [], getPaintingCompositeRevisionKey: () => "", parseRasterObjectSelectionId: (id) => String(id || "").replace(/^raster:/, ""),
      processFreehandPoints: (points) => points, rasterizeStrokeToSurface: () => null, rebuildPaintEngineIfNeeded() {},
      requestDraw: () => rec.ready(), screenPosToErpPoint: () => null,
    });
    for (const [name, value, visible, width] of steps()) {
      if (name === "loaded") env.flush();
      Object.assign(state, { painting: value, painting_visible: visible });
      size = width;
      // The eraser's source (editor/paint_input.js paintEraserSources) asks with no callback and a selection id.
      const erased = layers.buildRasterObjectEditCanvas({ ...R1, rasterObjectId: `raster:${R1.id}` }, null);
      rec.record(name, layers.buildEditorViewPaintLayers(), { eraser: rec.media(erased) });
      env.flush();
    }
    return { rows: rec.rows, draws: rasterDraws(env) };
  } finally {
    env.restore();
  }
}

function surfaceTrace({ mask = false } = {}) {
  const env = fakeBrowser();
  try {
    const rec = recorder(env);
    const surface = { dom: { requestDraw: () => rec.ready() } };
    const engines = [];
    const createEngine = (descriptor) => {
      const engine = {
        serial: `e${engines.length}`,
        descriptor,
        rebuilds: 0,
        groups: new Set(),
        rebuildCommitted(state) {
          engine.rebuilds += 1;
          engine.groups = new Set(state.painting.paint.strokes.map((item) => item.actionGroupId));
        },
        getGroupDisplayCanvas: (id) => (engine.groups.has(id) ? `${engine.serial}:${id}` : null),
        getMaskDisplay: () => ({ media: `${engine.serial}:mask`, revision: "m" }),
      };
      engines.push(engine);
      return engine;
    };
    const strokes = mask ? { mask: [stroke("m1", "gm", "mask")] } : { strokes: [stroke("s1", "g1")], groups: [{ id: "g1", actionGroupId: "g1", z_index: 0 }] };
    let index = 0;
    for (const [name, value, visible, width] of steps()) {
      if (name === "loaded") env.flush();
      // The legacy node surfaces read the widget's JSON as it is (pano_preview_runtime.js parseState).
      const withStrokes = index++ < 5 ? { ...value, ...normalizePaintingState({ ...value, paint: { strokes: strokes.strokes ?? [] }, mask: { strokes: strokes.mask ?? [] }, groups: strokes.groups ?? [] }) } : value;
      const state = { output_preset: width, painting: structuredClone(withStrokes), painting_visible: visible, stickers: [] };
      rec.record(name, surfacePaintLayers(surface, state, createEngine), { engines: engines.map((engine) => [engine.descriptor.width, engine.rebuilds]) });
      env.flush();
    }
    surface.paintDisplay?.dispose?.();
    return { rows: rec.rows, draws: rasterDraws(env) };
  } finally {
    env.restore();
  }
}

function upstreamTrace({ mask = false } = {}) {
  const env = fakeBrowser();
  try {
    const rec = recorder(env);
    let list = null;
    let size = { width: 2048, height: 1024 };
    const upstream = createUpstreamLayers({
      list: () => list, fps: () => 24, records: () => [], mediaSource: () => null, mediaAssetSource: () => null,
      revisionOf: () => 0, paintTarget: () => size, playing: () => false, onMedia: () => rec.ready(),
    });
    const strokes = mask ? { mask: [stroke("m1", "gm", "mask")] } : { strokes: [stroke("s1", "g1")], groups: [{ id: "g1", actionGroupId: "g1", z_index: 0 }] };
    let previous = null;
    let index = 0;
    for (const [name, value, visible, width] of steps()) {
      if (name === "loaded") env.flush();
      const withStrokes = index++ < 5 ? normalizePaintingState({ ...value, paint: { strokes: strokes.strokes ?? [] }, mask: { strokes: strokes.mask ?? [] }, groups: strokes.groups ?? [] }) : value;
      // A new result is a new list; the same painting and visibility keep the list (the working copies stay).
      const key = JSON.stringify([withStrokes, visible]);
      if (key !== previous) list = [{ state: { version: 2, painting: withStrokes, painting_visible: visible }, ui: {} }];
      previous = key;
      size = { width, height: width / 2 };
      const sky = upstream.viewInput(0).sky.filter((layer) => /^(raster:|paint_group:|mask_display)/.test(String(layer.id).replace(/^upstream:[^:]*:/, "")));
      rec.record(name, sky);
      env.flush();
    }
    upstream.dispose();
    rec.record("disposed", []);
    return { rows: rec.rows, draws: rasterDraws(env) };
  } finally {
    env.restore();
  }
}

function traces() {
  return {
    studio: studioTrace(),
    editor: editorTrace(),
    surface: surfaceTrace(),
    surfaceMaskOnly: surfaceTrace({ mask: true }),
    upstream: upstreamTrace(),
    upstreamMaskOnly: upstreamTrace({ mask: true }),
  };
}

test("each place makes, gives again and lets go of its raster canvases, images and paint engines as before", () => {
  const now = JSON.parse(JSON.stringify(traces()));
  if (process.env.UPDATE_TRACE === "1") writeFileSync(TRACE_PATH, `${JSON.stringify(now, null, 1)}\n`);
  const before = JSON.parse(readFileSync(TRACE_PATH, "utf8"));
  for (const place of Object.keys(before)) assert.deepEqual(now[place], before[place], place);
});

test("an upstream layer's painting of mask strokes only shows its mask", () => {
  const { rows } = traces().upstreamMaskOnly;
  assert.ok(rows.find((row) => row.name === "first").layers.some(([id]) => String(id).endsWith("mask_display")));
});

test("a normalized painting keeps no raster object with an empty box, a zero scale or a URL that is no data URL", () => {
  const value = normalizePaintingState({
    raster_objects: [
      raster("empty", { bbox: { u0: 0.3, v0: 0.2, u1: 0.3, v1: 0.5 } }),
      raster("zero", { transform: { du: 0, dv: 0, rot_deg: 0, scale: 0 } }),
      raster("nan", { transform: { du: Number.NaN, dv: Infinity, rot_deg: Number.NaN, scale: Number.NaN } }),
      raster("url", { rasterDataUrl: "/view?filename=a.png" }),
      raster("hidden", { visible: false }),
    ],
  });
  assert.deepEqual(value.raster_objects.map((item) => item.id), ["zero", "nan", "hidden"]);
  assert.deepEqual(value.raster_objects.map((item) => item.transform), [
    { du: 0, dv: 0, rot_deg: 0, scale: 0.01 },
    { du: 0, dv: 0, rot_deg: 0, scale: 1 },
    { du: 0, dv: 0, rot_deg: 0, scale: 1 },
  ]);
  assert.equal("visible" in value.raster_objects[2], false);
});
