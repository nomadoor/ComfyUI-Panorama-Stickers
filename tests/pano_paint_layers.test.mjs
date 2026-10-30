import assert from "node:assert/strict";
import test from "node:test";

import { engineMask, skyPaintLayers } from "../web_src/pano_paint_layers.js";

// The order against the node's own (core/render.py `_sky_layers`) is in tests/test_paint_layers_parity.py.

const group = (id, z) => ({ id, type: "strokeGroup", actionGroupId: id, z_index: z, locked: false });
const stroke = (id, actionGroupId, toolKind = "pen") => ({ id, actionGroupId, layerKind: "paint", toolKind });
const raster = (id, z, layerKind = "paint") => ({ id, type: "raster_frozen", layerKind, z_index: z });

function stateOf({ stickers = [], groups = [], strokes = [], mask = [], rasters = [], visible = true } = {}) {
  return {
    stickers: stickers.map((z, index) => ({ id: `s${index}`, z_index: z })),
    painting: { version: 1, groups, paint: { strokes }, mask: { strokes: mask }, raster_objects: rasters },
    painting_visible: visible,
  };
}

// As a paint engine draws the state: a canvas for each group with a paint stroke, and the mask display with a
// mask stroke. Records the sources asked for.
function sourcesOf(state, { mask = true } = {}) {
  const asked = [];
  const drawn = new Set(state.painting.paint.strokes.filter((item) => item.toolKind !== "eraser").map((item) => item.actionGroupId));
  return {
    asked,
    group: (id) => {
      asked.push(`group:${id}`);
      return drawn.has(id) ? { media: `canvas:${id}`, revision: `r:${id}` } : null;
    },
    raster: (item) => {
      asked.push(`raster:${item.id}`);
      return item.loading ? null : { media: `canvas:${item.id}`, revision: `r:${item.id}` };
    },
    mask: mask ? () => (state.painting.mask.strokes.length ? { media: "canvas:mask", revision: "r:mask" } : null) : undefined,
  };
}

function layersOf(state, options) {
  return skyPaintLayers(state, sourcesOf(state, options)).map((layer) => [layer.id, layer.zIndex]);
}

test("an empty painting has no paint layers", () => {
  assert.deepEqual(layersOf(stateOf()), []);
  assert.deepEqual(layersOf(stateOf({ stickers: [0, 3], groups: [group("g0", 1)] })), []);
});

test("a paint layer is its source's media and revision, opaque", () => {
  const state = stateOf({ groups: [group("g0", 2)], strokes: [stroke("a", "g0")] });
  assert.deepEqual(skyPaintLayers(state, sourcesOf(state)), [
    { id: "paint_group:g0", media: "canvas:g0", revision: "r:g0", opacity: 1, zIndex: 2 },
  ]);
});

test("stroke groups are ordered by z_index, to be put among the sky Stickers at it", () => {
  const state = stateOf({
    stickers: [0, 2, 4],
    groups: [group("g3", 3), group("g1", 1), group("g2", 2), group("g0", 0)],
    strokes: [stroke("a", "g0"), stroke("b", "g1"), stroke("c", "g2"), stroke("d", "g3")],
  });
  assert.deepEqual(layersOf(state), [["paint_group:g0", 0], ["paint_group:g1", 1], ["paint_group:g2", 2], ["paint_group:g3", 3]]);
});

test("the strokes of no group of the painting are drawn by their groups over everything, the Stickers too", () => {
  const state = stateOf({
    stickers: [5],
    groups: [group("g0", 0)],
    strokes: [stroke("a", "free1"), stroke("b", "g0"), stroke("c", "free2"), stroke("d", "free1")],
  });
  assert.deepEqual(layersOf(state), [["paint_group:g0", 0], ["paint_group:free1", 6], ["paint_group:free2", 6]]);
  assert.deepEqual(layersOf(stateOf({ strokes: [stroke("a", "free")] })), [["paint_group:free", 0]]);
});

test("a group without strokes has no layer", () => {
  const state = stateOf({
    stickers: [1],
    groups: [group("g0", 0), group("empty", 7), group("erased", 2), group("g3", 3)],
    strokes: [stroke("a", "g0"), stroke("b", "g3"), stroke("c", "erased", "eraser")],
  });
  assert.deepEqual(layersOf(state), [["paint_group:g0", 0], ["paint_group:g3", 3]]);
  // The layers over everything are over the layers there are.
  assert.deepEqual(layersOf({ ...state, painting: { ...state.painting, paint: { strokes: [...state.painting.paint.strokes, stroke("d", "free")] } } }).at(-1), ["paint_group:free", 4]);
});

test("paint raster objects are ordered with the groups, groups first on ties, at the z_index the node reads", () => {
  const state = stateOf({
    stickers: [1, 3],
    groups: [group("g0", 1), group("g1", 3)],
    strokes: [stroke("a", "g0"), stroke("b", "g1")],
    rasters: [raster("r3", 3), raster("r0", 0), raster("rm", 2, "mask"), raster("r1", 1), raster("r1b", 1.7), raster("r1c", 1.2)],
  });
  assert.deepEqual(layersOf(state), [
    ["raster:r0", 0],
    ["paint_group:g0", 1],
    ["raster:r1", 1],
    ["raster:r1b", 1],
    ["raster:r1c", 1],
    ["paint_group:g1", 3],
    ["raster:r3", 3],
  ]);
  // A raster object whose canvas is not ready yet (its image loads) is left out.
  const loading = stateOf({ rasters: [{ ...raster("r0", 0), loading: true }, raster("r1", 1)] });
  assert.deepEqual(layersOf(loading), [["raster:r1", 1]]);
});

test("the mask is over everything, where the caller shows it", () => {
  const state = stateOf({
    stickers: [4],
    groups: [group("g0", 0)],
    strokes: [stroke("a", "g0"), stroke("b", "free")],
    mask: [{ id: "m", actionGroupId: "mg", layerKind: "mask", toolKind: "pen" }],
  });
  assert.deepEqual(layersOf(state), [["paint_group:g0", 0], ["paint_group:free", 5], ["mask_display", 5]]);
  // The on-node surfaces do not show the mask.
  assert.deepEqual(layersOf(state, { mask: false }), [["paint_group:g0", 0], ["paint_group:free", 5]]);
  assert.deepEqual(layersOf(stateOf({ mask: state.painting.mask.strokes })), [["mask_display", 0]]);
});

test("a hidden painting has no layers and asks for no source", () => {
  const state = stateOf({
    stickers: [1],
    groups: [group("g0", 0)],
    strokes: [stroke("a", "g0"), stroke("b", "free")],
    mask: [{ id: "m", actionGroupId: "mg", layerKind: "mask", toolKind: "pen" }],
    rasters: [raster("r0", 2)],
    visible: false,
  });
  const sources = sourcesOf(state);
  assert.deepEqual(skyPaintLayers(state, sources), []);
  assert.deepEqual(sources.asked, []);
  // A state without painting_visible (the legacy Stickers node) shows its painting.
  const { painting_visible: _shown, ...legacy } = { ...state, painting_visible: true };
  assert.deepEqual(layersOf(legacy).map(([id]) => id), ["paint_group:g0", "raster:r0", "paint_group:free", "mask_display"]);
});

test("a group the caller adds to the painting (the editor's stroke being drawn) is drawn at its z_index", () => {
  const state = stateOf({ stickers: [2], groups: [group("g0", 0), group("g1", 1)], strokes: [stroke("a", "g0"), stroke("b", "g1")] });
  const drawing = { ...state, painting: { ...state.painting, groups: [...state.painting.groups, group("new", 1)] } };
  const sources = sourcesOf(state);
  const engineGroup = sources.group;
  sources.group = (id) => (id === "new" ? { media: "canvas:new", revision: "r:new" } : engineGroup(id));
  assert.deepEqual(skyPaintLayers(drawing, sources).map((layer) => [layer.id, layer.zIndex]), [
    ["paint_group:g0", 0],
    ["paint_group:g1", 1],
    ["paint_group:new", 1],
  ]);
});

test("engineMask is the paint engine's mask display, or none", () => {
  const changed = () => [];
  const display = { media: "canvas", revision: "damage1:3", changed };
  const engine = (shown) => ({ getMaskDisplay: () => shown });
  assert.equal(engineMask(null), null);
  assert.equal(engineMask(engine(null)), null);
  assert.equal(engineMask(engine(display)), display);
});

test("a source that says where its media changed passes it on with the layer", () => {
  const changed = () => [];
  const state = stateOf({ groups: [group("g0", 0)] });
  const [layer] = skyPaintLayers(state, { group: () => ({ media: "canvas:g0", revision: "r", changed }), raster: () => null });
  assert.equal(layer.changed, changed);
});
