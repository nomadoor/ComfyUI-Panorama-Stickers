import assert from "node:assert/strict";
import test from "node:test";

import { surfacePaintLayers } from "../web_src/pano_surface_paint.js";

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

test("a hidden painting draws nothing and lets go of the raster objects' canvases", () => {
  const { made, create } = engines();
  const retained = [];
  const surface = { rasterCache: { retain: (ids) => retained.push(ids) } };
  const state = legacyState({ painting_visible: false, painting: { paint: { strokes: [stroke("a", "g0")] } } });
  assert.deepEqual(surfacePaintLayers(surface, state, create), []);
  assert.equal(made.length, 0);
  assert.deepEqual(retained, [[]]);
});
