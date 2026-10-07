import assert from "node:assert/strict";
import test from "node:test";

import { setStickerPose, setWorldStickerTransform } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import {
  PANO_SCENE_TYPE,
  isUpstreamSticker,
  upstreamBackgroundOf,
  upstreamBaseline,
  upstreamEditedRecords,
  upstreamStickerEditable,
  upstreamLayerKeys,
  upstreamLayersOf,
  upstreamLayerView,
  upstreamOverriddenClips,
  upstreamPaintEntries,
  upstreamPending,
  upstreamRowId,
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

// The working copy of a single upstream layer for an editor at 24 fps, without overrides.
function workingOf(state, ui = {}) {
  return upstreamWorkingLayers([layerOf(state, ui)], [], 24)[0];
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
  // Each working Sticker has an id apart from the node's own and other layers', and its origin.
  assert.deepEqual(working[0].sceneState.stickers.map((item) => item.id), ["upstream:scene_a:sticker_1"]);
  assert.deepEqual(working[1].sceneState.stickers.map((item) => item.id), ["upstream:#1:sticker_1"]);
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
  const layer = workingOf({
    stickers: [
      sky("front", { z_index: 5, opacity: { value: 0.8, keyframes: [] } }),
      sky("hidden", { z_index: 0, visible: false }),
      // The node does not draw a hidden port Sticker; only the node's own shows faintly to be found again.
      sky("port", { z_index: 1, visible: false, source: { kind: "port" } }),
      sky("back", { z_index: 0 }),
      world("plane"),
    ],
  });
  const view = upstreamLayerView(layer, layer.key, 0, {
    media: () => ({ media: image, revision: 1 }),
    paintLayers: [{ id: "paint_group:g", media: image, revision: "r", opacity: 1, zIndex: 3 }],
    source,
  });
  assert.deepEqual(view.sky.map((item) => [item.kind, item.id, item.opacity]), [
    ["sticker", "upstream:#0:back", 1],
    ["erp", "upstream:#0:paint_group:g", 1],
    ["sticker", "upstream:#0:front", 0.8],
  ]);
  assert.deepEqual(view.stickers.map((item) => [item.id, item.opacity]), [["upstream:#0:plane", 1]]);
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
  const layer = workingOf({ id: "Scene_id-1", stickers: [sky("s1"), world("w1")] }, ui);
  const view = upstreamLayerView(layer, layer.key, 0, { media: () => ({ media: image, revision: 1 }), paintLayers: [], source });
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

// ADR 0030 T8: the edits of the working copies are written back as the node's own overrides.
const keyed = (frames) => ({ value: { yaw_deg: 0, pitch_deg: 0 }, keyframes: frames.map(([frame, yaw]) => ({ frame, value: { yaw_deg: yaw, pitch_deg: 0 } })) });

function editing(layerStates, records = [], fps = 24) {
  const layers = upstreamLayersOf(layerStates.map((state) => ({ state: { version: 2, ...state } })));
  const { upstream } = loadSceneState({ version: 2, upstream: records });
  const working = upstreamWorkingLayers(layers, upstream, fps);
  let baseline = upstreamBaseline(working);
  let current = upstream;
  return {
    layers,
    working,
    sticker: (layer, id) => working[layer].sceneState.stickers.find((item) => item.origin.id === id),
    // Writes back as the editor does at an Undo step, and returns the records.
    write() {
      const next = upstreamEditedRecords(current, layers, working, baseline, fps);
      if (next !== current) baseline = upstreamBaseline(working);
      current = next;
      return next;
    },
  };
}

test("an edit of one Lane writes that whole Lane into the layer's record at the editor's fps; the other Lanes stay inherited", () => {
  const edit = editing([{ id: "scene_a", stickers: [sky("sticker_1", { direction: keyed([[0, 10], [12, 40]]), roll: { value: 15 } }), sky("sticker_2")] }]);
  const sticker = edit.sticker(0, "sticker_1");
  assert.equal(sticker.id, "upstream:scene_a:sticker_1");
  assert.ok(isUpstreamSticker(sticker) && upstreamStickerEditable(sticker));
  setStickerPose(sticker, 6, { yaw_deg: 30 });
  const records = edit.write();
  assert.deepEqual(records, [{
    layer: "scene_a",
    fps: 24,
    deleted: [],
    stickers: [{ id: "sticker_1", placement: "sky", direction: sticker.direction }],
    scene: {},
  }]);
  // The whole Lane, with the Keyframes that came from upstream and the new one.
  assert.deepEqual(records[0].stickers[0].direction.keyframes.map((key) => [key.frame, key.value.yaw_deg]), [[0, 10], [6, 30], [12, 40]]);
  assert.notEqual(records[0].stickers[0].direction, sticker.direction);
  // Nothing of the editor's own (origin, the working ids) is written.
  assert.doesNotMatch(JSON.stringify(records), /origin|upstream:/);
  // Applied again, the record gives the working copy as it is.
  const again = upstreamWorkingLayers(edit.layers, records, 24);
  assert.deepEqual(again[0].sceneState.stickers, edit.working[0].sceneState.stickers);
});

test("a second edit updates the same record, and nothing is written without an edit", () => {
  const edit = editing([{ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2")] }]);
  setStickerPose(edit.sticker(0, "sticker_1"), 0, { yaw_deg: 20 });
  const first = edit.write();
  assert.equal(edit.write(), first);
  setStickerPose(edit.sticker(0, "sticker_1"), 0, { rot_deg: 5 });
  setStickerPose(edit.sticker(0, "sticker_2"), 0, { hFOV_deg: 40 });
  const second = edit.write();
  assert.equal(second.length, 1);
  assert.deepEqual(second[0].stickers.map((item) => [item.id, Object.keys(item)]), [
    ["sticker_1", ["id", "placement", "direction", "roll"]],
    ["sticker_2", ["id", "placement", "size"]],
  ]);
  assert.equal(second[0].stickers[0].direction.value.yaw_deg, 20);
});

test("Visible and Lock are written as overrides of an upstream element, a world one's Lanes too", () => {
  const edit = editing([{ id: "scene_a", stickers: [sky("sticker_1"), world("sticker_2")] }]);
  const skySticker = edit.sticker(0, "sticker_1");
  skySticker.visible = false;
  skySticker.locked = true;
  setWorldStickerTransform(edit.sticker(0, "sticker_2"), 0, { position: [1, 2, -3] });
  const [record] = edit.write();
  assert.deepEqual(record.stickers, [
    { id: "sticker_1", placement: "sky", visible: false, locked: true },
    { id: "sticker_2", placement: "world", position: { value: [1, 2, -3], keyframes: [] } },
  ]);
});

test("an element of a layer that is only inherited is not editable, and its edits are never written", () => {
  const edit = editing([{ stickers: [sky("sticker_1")] }, { id: "dup", stickers: [sky("sticker_1")] }, { id: "dup", stickers: [sky("sticker_1")] }]);
  assert.deepEqual(edit.working.map((layer) => [layer.key, upstreamStickerEditable(layer.sceneState.stickers[0])]), [["#0", false], ["#1", false], ["dup", true]]);
  const records = edit.write();
  edit.sticker(0, "sticker_1").visible = false;
  edit.sticker(1, "sticker_1").visible = false;
  assert.equal(edit.write(), records);
});

test("a record at another fps than the editor's is rebased to it when an edit is written in", () => {
  // The layer at 30 fps, its record written at 30 fps; the editor now works at 24 fps.
  const layer = { id: "scene_a", timeline: { fps: 30 }, stickers: [sky("sticker_1", { clip: { start: 15, in: 0 } })] };
  const record = { layer: "scene_a", fps: 30, stickers: [{ id: "sticker_1", placement: "sky", direction: keyed([[0, 0], [30, 60]]) }] };
  const edit = editing([layer], [record], 24);
  setStickerPose(edit.sticker(0, "sticker_1"), 12, { rot_deg: 9 });
  const [written] = edit.write();
  assert.equal(written.fps, 24);
  // 1 s after the Clip range's start is frame 24 at 24 fps.
  assert.deepEqual(written.stickers[0].direction.keyframes.map((key) => key.frame), [0, 24]);
  assert.deepEqual(written.stickers[0].roll, { value: 9, keyframes: [] });
  const again = upstreamWorkingLayers(edit.layers, [written], 24);
  assert.deepEqual(again[0].sceneState.stickers, edit.working[0].sceneState.stickers);
});

// ADR 0030 T9: an upstream layer's own rows (its `scene` and painting) are written back as overrides too.
test("a layer's scene visible and Clip range and its painting_visible are written as the layer's overrides, each alone", () => {
  const scene = { clip: { start: 0, in: 0, duration: 48 } };
  const edit = editing([{ id: "scene_a", scene, stickers: [sky("sticker_1")] }]);
  const [{ sceneState }] = edit.working;
  sceneState.scene.clip = { start: 4, in: 0, duration: 48 };
  assert.deepEqual(edit.write(), [{ layer: "scene_a", fps: 24, deleted: [], stickers: [], scene: { clip: { start: 4, in: 0, duration: 48 } } }]);
  sceneState.scene.visible = false;
  assert.deepEqual(edit.write()[0].scene, { visible: false, clip: { start: 4, in: 0, duration: 48 } });
  sceneState.painting_visible = false;
  const records = edit.write();
  assert.equal(records[0].painting_visible, false);
  assert.deepEqual(records[0].stickers, []);
  // Showing again is an override too (the field was touched), and the records apply back to the working copy.
  sceneState.painting_visible = true;
  assert.equal(edit.write()[0].painting_visible, true);
  const again = upstreamWorkingLayers(edit.layers, edit.write(), 24)[0].sceneState;
  assert.deepEqual([again.scene.visible, again.scene.clip, again.painting_visible], [false, sceneState.scene.clip, true]);
  // A layer that is only inherited gets no record for them.
  const inherited = editing([{ scene }]);
  inherited.working[0].sceneState.painting_visible = false;
  assert.deepEqual(inherited.write(), []);
  assert.equal(upstreamRowId("scene_a", "scene"), "upstream:scene_a:scene");
});

test("the overridden Clip ranges are those a record sets or an edit since the write-back changed, never an inherited layer's", () => {
  const records = [{ layer: "scene_a", fps: 24, stickers: [{ id: "sticker_1", placement: "sky", clip: { start: 10, in: 0, duration: 100 } }] }];
  const edit = editing([
    { id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2", { clip: { start: 0, in: 0, duration: 500 } })] },
    { stickers: [sky("sticker_1")] },
  ], records);
  const { upstream } = loadSceneState({ version: 2, upstream: records });
  let baseline = upstreamBaseline(edit.working);
  const clips = () => upstreamOverriddenClips(edit.working, upstream, baseline).map(({ index, clip, sticker }) => [index, sticker?.origin.id ?? "scene", clip.start + (clip.duration ?? 0)]);
  // sticker_2 is not overridden: its end is in the upstream Scene's length already.
  assert.deepEqual(clips(), [[0, "sticker_1", 110]]);
  // A drag not yet written back counts; so does the layer's `scene`; an inherited layer never does.
  edit.sticker(0, "sticker_2").clip.start = 5;
  edit.working[0].sceneState.scene.clip = { start: 0, in: 0, duration: 30 };
  edit.working[1].sceneState.stickers[0].clip = { start: 0, in: 0, duration: 999 };
  assert.deepEqual(clips(), [[0, "scene", 30], [0, "sticker_1", 110], [0, "sticker_2", 505]]);
  baseline = upstreamBaseline(edit.working);
  assert.deepEqual(clips(), [[0, "sticker_1", 110]]);
});
