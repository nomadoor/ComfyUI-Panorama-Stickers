import assert from "node:assert/strict";
import test from "node:test";

import { resolveRasterPreviewSize, surfacePaintLayers } from "../web_src/pano_surface_paint.js";

const stroke = (id, actionGroupId, u = 0.5) => ({
  id,
  actionGroupId,
  layerKind: "paint",
  toolKind: "pen",
  targetSpace: { kind: "ERP_GLOBAL" },
  size: 10,
  opacity: 1,
  color: { r: 1, g: 0, b: 0, a: 1 },
  geometry: { geometryKind: "freehand_open", points: [{ u, v: 0.5 }, { u: u + 0.01, v: 0.5 }] },
});

// The state a legacy Stickers / Cutout node surface reads (pano_preview_runtime.js parseState): the widget's JSON
// as it is, with no painting or a partial one.
function legacyState(extra = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: 360,
    bg_color: "#00ff00",
    output_preset: 2048,
    assets: {},
    stickers: [],
    shots: [],
    active: { selected_sticker_id: null },
    ...extra,
  };
}

// A paint engine (pano_paint_engine.js) that has a canvas for each group with a stroke, counting its rebuilds.
function engines() {
  const made = [];
  const create = (descriptor) => {
    const engine = {
      descriptor,
      rebuilds: 0,
      groups: new Set(),
      rebuildCommitted(state) {
        engine.rebuilds += 1;
        engine.groups = new Set(state.painting.paint.strokes.map((item) => item.actionGroupId));
      },
      getGroupDisplayCanvas: (id) => (engine.groups.has(id) ? `canvas:${id}` : null),
    };
    made.push(engine);
    return engine;
  };
  return { made, create };
}

test("a legacy node surface's state without a whole painting draws its paint without throwing", () => {
  const { made, create } = engines();
  const surface = {};
  assert.deepEqual(surfacePaintLayers(surface, legacyState(), create), []);
  assert.deepEqual(surfacePaintLayers(surface, legacyState({ painting: null }), create), []);
  assert.deepEqual(surfacePaintLayers(surface, legacyState({ painting: { groups: [{ id: "g0", actionGroupId: "g0", z_index: 0 }] } }), create), []);
  assert.deepEqual(surfacePaintLayers(surface, legacyState({ painting: { raster_objects: [{ id: "r0" }] } }), create), []);
  assert.equal(made.length, 0);
  const layers = surfacePaintLayers(surface, legacyState({ painting: { paint: { strokes: [stroke("a", "g0")] } } }), create);
  assert.deepEqual(layers.map((layer) => [layer.id, layer.media]), [["paint_group:g0", "canvas:g0"]]);
});

test("the painting is read once while the state stays the same", () => {
  const { made, create } = engines();
  const surface = {};
  const state = legacyState({ painting: { groups: [{ id: "g0", actionGroupId: "g0", z_index: 0 }], paint: { strokes: [stroke("a", "g0")] } } });
  const first = surfacePaintLayers(surface, state, create);
  assert.deepEqual(surfacePaintLayers(surface, state, create), first);
  assert.equal(made.length, 1);
  assert.equal(made[0].rebuilds, 1);
  assert.deepEqual(made[0].descriptor, { kind: "ERP_GLOBAL", width: 2048, height: 1024 });
});

test("a stroke added to a group changes the group's revision, so its canvas is uploaded again", () => {
  const { made, create } = engines();
  const surface = {};
  const group = { id: "g0", actionGroupId: "g0", z_index: 0 };
  const before = surfacePaintLayers(surface, legacyState({ painting: { groups: [group], paint: { strokes: [stroke("a", "g0")] } } }), create);
  const after = surfacePaintLayers(surface, legacyState({ painting: { groups: [group], paint: { strokes: [stroke("a", "g0"), stroke("b", "g0", 0.2)] } } }), create);
  assert.equal(made.length, 1);
  assert.equal(after[0].media, before[0].media);
  assert.notEqual(after[0].revision, before[0].revision);
});

test("a hidden painting draws nothing and lets go of the raster objects' canvases, drawn again when it shows", () => {
  const previous = { Image: globalThis.Image, document: globalThis.document };
  const canvases = [];
  globalThis.Image = class ReadyImage {
    complete = true;
    naturalWidth = 64;
    naturalHeight = 32;
  };
  globalThis.document = {
    createElement() {
      const canvas = { width: 0, height: 0, getContext: () => new Proxy({}, { get: () => () => {} }) };
      canvases.push(canvas);
      return canvas;
    },
  };
  try {
    const { made, create } = engines();
    const surface = {};
    const raster = { id: "r0", type: "raster_frozen", layerKind: "paint", rasterDataUrl: "data:image/png;base64,AA", bbox: { u0: 0, v0: 0, u1: 0.5, v1: 0.5 } };
    const painting = { paint: { strokes: [stroke("a", "g0")] }, raster_objects: [raster] };
    const shown = surfacePaintLayers(surface, legacyState({ painting }), create);
    assert.deepEqual(shown.map((layer) => layer.id), ["raster:r0", "paint_group:g0"]);
    assert.deepEqual(surfacePaintLayers(surface, legacyState({ painting, painting_visible: false }), create), []);
    const again = surfacePaintLayers(surface, legacyState({ painting }), create);
    assert.notEqual(again[0].media, shown[0].media);
    assert.equal(canvases.length, 2);
    assert.equal(made.length, 1);
  } finally {
    globalThis.Image = previous.Image;
    globalThis.document = previous.document;
  }
});

test("node preview raster surfaces are capped independently from output resolution", () => {
  assert.deepEqual(resolveRasterPreviewSize(512), { width: 512, height: 256 });
  assert.deepEqual(resolveRasterPreviewSize(2048), { width: 1024, height: 512 });
  assert.deepEqual(resolveRasterPreviewSize(4096), { width: 1024, height: 512 });
});
