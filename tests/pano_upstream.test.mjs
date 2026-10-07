import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import {
  PANO_SCENE_TYPE,
  upstreamBackgroundOf,
  upstreamLayerKeys,
  upstreamLayersOf,
  upstreamLayerView,
  upstreamPaintEntries,
  upstreamPending,
  upstreamWorkingLayers,
} from "../web_src/pano_upstream.js";

const sky = (id, extra = {}) => ({ id, placement: "sky", source: { kind: "file", filename: `${id}.png` }, ...extra });
const world = (id, extra = {}) => ({
  id,
  placement: "world",
  source: { kind: "file", filename: `${id}.png` },
  position: { value: [0, 0, -2], keyframes: [] },
  scale: { value: 1, keyframes: [] },
  ...extra,
});
const image = { naturalWidth: 200, naturalHeight: 100 };
const source = (entry) => `/view?filename=${entry.filename}`;

function layerOf(state, ui = {}) {
  return upstreamLayersOf([{ state: { version: 2, ...state }, ui }])[0];
}

test("the upstream layers are read from the result as loaded states with their media ui", () => {
  const layers = upstreamLayersOf([
    { state: { version: 2, timeline: { fps: 30 }, stickers: [sky("a")] }, ui: { pano_scene_meta: [{ kind: "splat" }] } },
    { state: { version: 2 } },
    null,
    { ui: {} },
  ]);
  assert.equal(layers.length, 2);
  assert.equal(layers[0].sceneState.timeline.fps, 30);
  assert.deepEqual(layers[0].sceneState.stickers.map((item) => item.id), ["a"]);
  assert.deepEqual(layers[0].ui, { pano_scene_meta: [{ kind: "splat" }] });
  assert.deepEqual(layers[1].ui, {});
});

test("a layer at another fps is rebased to the editor's fps and shows at the editor's frame, at the same time in seconds", () => {
  const layer = layerOf({
    id: "scene_a",
    timeline: { fps: 30 },
    stickers: [sky("a", { clip: { start: 15, in: 0, duration: 45 }, direction: { value: { yaw_deg: 0, pitch_deg: 0 }, keyframes: [
      { frame: 0, value: { yaw_deg: 0, pitch_deg: 0 }, easing: "auto" },
      { frame: 30, value: { yaw_deg: 60, pitch_deg: 0 }, easing: "auto" },
    ] } })],
  });
  const [working] = upstreamWorkingLayers([layer], [], 24);
  assert.equal(working.sceneState.timeline.fps, 24);
  assert.deepEqual(working.sceneState.stickers[0].clip, { start: 12, in: 0, duration: 36 });
  assert.deepEqual(working.sceneState.stickers[0].direction.keyframes.map((key) => key.frame), [0, 24]);
  // The layer as it came is not rebased.
  assert.equal(layer.sceneState.timeline.fps, 30);
  // 1 s into the node's 24 fps Timeline is 0.5 s into the Clip range: halfway between its Keyframes.
  const view = upstreamLayerView(working, working.key, 24, { media: () => ({ media: image, revision: 1 }), paintLayers: [], source });
  assert.ok(Math.abs(view.evaluated.stickers[0].yaw_deg - 30) < 1e-6);
});

test("the working copies apply the node's own record for each layer's Scene id, and share nothing with the layers", () => {
  const layers = upstreamLayersOf([
    { state: { version: 2, id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2")] } },
    { state: { version: 2, stickers: [sky("sticker_1")] } },
    { state: { version: 2, id: "scene_b", stickers: [sky("sticker_1"), sky("sticker_2", { z_index: 1 })] }, ui: { k: [1] } },
  ]);
  const { upstream: records } = loadSceneState({
    version: 2,
    upstream: [
      { layer: "scene_a", fps: 24, deleted: ["sticker_2"] },
      { layer: "scene_b", fps: 24, stickers: [{ id: "sticker_2", placement: "sky", visible: false, z_index: 7 }], painting_visible: false },
      { layer: "scene_gone", fps: 24, deleted: ["sticker_1"] },
    ],
  });
  const before = structuredClone({ layers, records });
  const working = upstreamWorkingLayers(layers, records, 24);
  assert.deepEqual(working.map((item) => item.key), ["scene_a", "#1", "scene_b"]);
  assert.deepEqual(working[0].sceneState.stickers.map((item) => item.id), ["sticker_1"]);
  assert.deepEqual(working[1].sceneState.stickers.map((item) => item.id), ["sticker_1"]);
  const hidden = working[2].sceneState.stickers[1];
  assert.equal(hidden.visible, false);
  assert.equal(hidden.z_index, 7);
  assert.equal(working[2].sceneState.painting_visible, false);
  assert.deepEqual(hidden.origin, { layer: "scene_b", id: "sticker_2" });
  assert.deepEqual(working[1].sceneState.stickers[0].origin, { layer: "#1", id: "sticker_1" });
  assert.equal(working[2].ui, layers[2].ui);
  // The painting, which no override changes, is shared rather than copied, also when rebased.
  assert.equal(working[2].sceneState.painting, layers[2].sceneState.painting);
  assert.equal(upstreamWorkingLayers(layers, records, 30)[2].sceneState.painting, layers[2].sceneState.painting);
  // Changing a working copy changes neither the layers nor the records.
  for (const item of working) item.sceneState.stickers.forEach((sticker) => { sticker.direction.value.yaw_deg = 99; });
  assert.deepEqual({ layers, records }, before);
});

test("a record applies only to the nearest downstream of the layers with its Scene id", () => {
  const layers = upstreamLayersOf([
    { state: { version: 2, id: "scene_a", stickers: [sky("sticker_1")] } },
    { state: { version: 2, id: "scene_a", stickers: [sky("sticker_1")] } },
  ]);
  const { upstream: records } = loadSceneState({ version: 2, upstream: [{ layer: "scene_a", fps: 24, deleted: ["sticker_1"] }] });
  const working = upstreamWorkingLayers(layers, records, 24);
  assert.deepEqual(working.map((item) => [item.key, item.sceneState.stickers.length]), [["#0", 1], ["scene_a", 0]]);
});

test("upstream Sky layers keep their own order with their paint, are drawn opaque as the node draws them, and have ids apart from the node's", () => {
  const layer = layerOf({
    stickers: [
      sky("front", { z_index: 5, opacity: { value: 0.8, keyframes: [] } }),
      sky("hidden", { z_index: 0, visible: false }),
      // The node does not draw a hidden port Sticker; only the node's own shows faintly to be found again.
      sky("port", { z_index: 1, visible: false, source: { kind: "port" } }),
      sky("back", { z_index: 0 }),
      world("plane"),
    ],
  });
  const view = upstreamLayerView(layer, 2, 0, {
    media: () => ({ media: image, revision: 1 }),
    paintLayers: [{ id: "paint_group:g", media: image, revision: "r", opacity: 1, zIndex: 3 }],
    source,
  });
  assert.deepEqual(view.sky.map((item) => [item.kind, item.id, item.opacity]), [
    ["sticker", "upstream:2:back", 1],
    ["erp", "upstream:2:paint_group:g", 1],
    ["sticker", "upstream:2:front", 0.8],
  ]);
  assert.deepEqual(view.stickers.map((item) => [item.id, item.opacity]), [["upstream:2:plane", 1]]);
});

test("upstream 3D content is asked for per layer and kind at its own opacity, and the Stickers it shows by", () => {
  const ui = {
    pano_scene_files: [{ filename: "a.ply" }, { filename: "b.ply" }],
    pano_scene_meta: [{ kind: "splat" }],
    pano_sticker_files: [{ filename: "c.glb" }],
    pano_sticker_meta: [{ kind: "mesh" }],
  };
  const layer = layerOf({
    stickers: [world("port3d", { source: { kind: "port" }, opacity: { value: 0.5, keyframes: [] } })],
  }, ui);
  const view = upstreamLayerView(layer, 1, 1, { media: () => null, paintLayers: [], source });
  assert.deepEqual(view.items.map((item) => [item.slot, item.urls, item.request?.url, item.opacity]), [
    ["1:scene", ["/view?filename=a.ply", "/view?filename=b.ply"], "/view?filename=b.ply", 1],
    ["1:sticker", ["/view?filename=c.glb"], "/view?filename=c.glb", 0.5],
  ]);
  // A hidden `scene` keeps its items loaded but shows none of them.
  const hidden = upstreamLayerView(layerOf({ scene: { visible: false } }, ui), 1, 0, { media: () => null, paintLayers: [], source });
  assert.equal(hidden.items[0].request, null);
  assert.deepEqual(hidden.items[0].urls, ["/view?filename=a.ply", "/view?filename=b.ply"]);
  // The node's overrides hide the `scene` and delete the 3D port Sticker: neither shows, and the Sticker's
  // items are let go, as the node draws neither.
  const { upstream: records } = loadSceneState({
    version: 2,
    upstream: [{ layer: "scene_a", fps: 24, deleted: ["port3d"], scene: { visible: false } }],
  });
  const [working] = upstreamWorkingLayers([layerOf({ id: "scene_a", stickers: [world("port3d", { source: { kind: "port" } })] }, ui)], records, 24);
  const overridden = upstreamLayerView(working, working.key, 1, { media: () => null, paintLayers: [], source });
  assert.deepEqual(overridden.items.map((item) => [item.slot, item.urls.length, item.request]), [
    ["scene_a:scene", 2, null],
    ["scene_a:sticker", 0, null],
  ]);
  // Without its files a layer asks for nothing, so what it loaded before is let go.
  assert.deepEqual(upstreamLayerView(layerOf({}), 0, 0, { media: () => null, paintLayers: [], source }).items, []);
});

// ADR 0030: what is drawn of an upstream layer is keyed by its Scene id, so a key stays with the layer when
// layers are added or removed upstream; a layer whose state was never written has no id and keeps its index.
test("upstream layers are keyed by their Scene id, else their index, and a repeated id by the nearest downstream", () => {
  const layers = upstreamLayersOf([
    { state: { version: 2, id: "aaaa" } },
    { state: { version: 2 } },
    { state: { version: 2, id: "bbbb" } },
    { state: { version: 2, id: "aaaa" } },
  ]);
  assert.deepEqual(upstreamLayerKeys(layers), ["#0", "#1", "bbbb", "aaaa"]);
  assert.deepEqual(upstreamLayerKeys([]), []);

  const ui = { pano_scene_files: [{ filename: "a.ply" }], pano_scene_meta: [{ kind: "splat" }] };
  const layer = layerOf({ id: "Scene_id-1", stickers: [sky("s1"), world("w1")] }, ui);
  const [key] = upstreamLayerKeys([layer]);
  const view = upstreamLayerView(layer, key, 0, { media: () => ({ media: image, revision: 1 }), paintLayers: [], source });
  assert.deepEqual(view.sky.map((item) => item.id), ["upstream:Scene_id-1:s1"]);
  assert.deepEqual(view.stickers.map((item) => item.id), ["upstream:Scene_id-1:w1"]);
  assert.deepEqual(view.items.map((item) => item.slot), ["Scene_id-1:scene"]);
});

test("the editor waits for a run only while a Scene is linked and no upstream layers came with the result", () => {
  assert.equal(upstreamPending(PANO_SCENE_TYPE, null), true);
  assert.equal(upstreamPending(PANO_SCENE_TYPE, []), false);
  assert.equal(upstreamPending("SPLAT", null), false);
  assert.equal(upstreamPending("", null), false);
});

test("upstream paint is ordered by z_index with the Stickers, loose strokes and the mask over all, and hidden with the painting", () => {
  const raster = (id, z, layerKind = "paint") => ({
    id, type: "raster_frozen", layerKind, z_index: z, rasterDataUrl: "data:image/png;base64,AA", bbox: { u0: 0, v0: 0, u1: 0.1, v1: 0.1 },
  });
  const state = {
    stickers: [sky("s", { z_index: 4 })],
    painting: {
      version: 1,
      groups: [{ id: "g1", actionGroupId: "g1", z_index: 2 }, { id: "g0", actionGroupId: "g0", z_index: 0 }],
      raster_objects: [raster("r1", 1), raster("m1", 3, "mask")],
    },
  };
  const entries = upstreamPaintEntries(layerOf(state).sceneState, ["g0", "g1", "loose"], true);
  assert.deepEqual(entries.map((entry) => [entry.kind, entry.id, entry.zIndex]), [
    ["group", "g1", 2],
    ["group", "g0", 0],
    ["raster", "r1", 1],
    ["group", "loose", 5],
    ["mask", "mask", 5],
  ]);
  assert.deepEqual(upstreamPaintEntries(layerOf({ ...state, painting_visible: false }).sceneState, ["g0"], true), []);
});

test("the upstream background is the result's pano_upstream_ media with its coverage, or none", () => {
  const ui = (values) => (key) => values[key] ?? [];
  assert.equal(upstreamBackgroundOf(ui({})), null);
  assert.deepEqual(upstreamBackgroundOf(ui({ pano_upstream_input_images: [{ filename: "bg.png" }], pano_upstream_coverage: [180] })), {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: 180,
  });
  // A VIDEO alone is a background too; a coverage that is not 180 is 360.
  assert.equal(upstreamBackgroundOf(ui({ pano_upstream_input_videos: [{ filename: "bg.mp4" }] })).coverage, 360);
});
