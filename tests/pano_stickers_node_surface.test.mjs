import assert from "node:assert/strict";
import test from "node:test";

import {
  stickerMediaKind,
  applyStickersNodeSurfaceAction,
  buildStickersDisplayEntries,
  createStickersNodeSurfaceSession,
  nodePortHandoff,
  portStickerSyncValue,
  reconcileExternalStickerState,
  reconcilePortStickerState,
  stickersNodeSurfaceModel,
  surfacePoseStickers,
} from "../web_src/pano_stickers_node_surface.js";
import { readFileSync } from "node:fs";
import { editorActive, editorStateText, parseSceneEditorState, setEditorActive } from "../web_src/pano_editor_state.js";
import { studioRunKey } from "../web_src/pano_studio_status.js";
import { workingSkyLayers } from "../web_src/pano_editor_view.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

function sampleState() {
  return {
    assets: {
      asset_a: { name: "A" },
      asset_b: { name: "B" },
    },
    stickers: [
      { id: "a", asset_id: "asset_a", z_index: 3, yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 20 },
      { id: "b", asset_id: "asset_b", z_index: 1, yaw_deg: 10, pitch_deg: 5, hFOV_deg: 25, vFOV_deg: 15 },
    ],
    painting: {
      groups: [{ id: "group", actionGroupId: "group", z_index: 0 }],
      raster_objects: [
        { id: "mask", layerKind: "mask", z_index: -1 },
        { id: "raster", layerKind: "paint", z_index: 2 },
      ],
    },
    active: { selected_sticker_id: "a" },
  };
}

test("surface model resolves the active sticker and exposes fixed toolbar state", () => {
  const model = stickersNodeSurfaceModel(sampleState());

  assert.deepEqual(model, {
    hasStickers: true,
    hasSelection: true,
    isExternalSelection: false,
    canRestoreInitial: false,
    selectedId: "a",
    locked: false,
    canDelete: true,
    canMoveForward: false,
    canMoveBackward: true,
  });
});

test("external selection exposes restore only after its pose diverges", () => {
  const initial = sampleState();
  initial.stickers[0] = {
    ...initial.stickers[0],
    id: "sticker_image_1",
    source_kind: "external_image",
    yaw_deg: 12,
    pitch_deg: -3,
    hFOV_deg: 30,
    vFOV_deg: 20,
    rot_deg: 4,
    initial_pose: { yaw_deg: 12, pitch_deg: -3, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 4 },
  };
  initial.active.selected_sticker_id = "sticker_image_1";

  const atInitial = stickersNodeSurfaceModel(initial);
  initial.stickers[0].yaw_deg = 42;
  const moved = stickersNodeSurfaceModel(initial);

  assert.equal(atInitial.isExternalSelection, true);
  assert.equal(atInitial.canRestoreInitial, false);
  assert.equal(moved.canRestoreInitial, true);
});

test("restore initial resets all external pose fields without changing its other state", () => {
  const initial = sampleState();
  initial.stickers[0] = {
    ...initial.stickers[0],
    id: "sticker_image_1",
    source_kind: "external_image",
    yaw_deg: 90,
    pitch_deg: 20,
    hFOV_deg: 80,
    vFOV_deg: 60,
    rot_deg: 45,
    visible: true,
    initial_pose: { yaw_deg: 12, pitch_deg: -3, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 4 },
  };
  initial.active.selected_sticker_id = "sticker_image_1";

  const result = applyStickersNodeSurfaceAction(initial, { type: "restore-initial" });
  const restored = result.state.stickers[0];

  assert.equal(result.changed, true);
  assert.deepEqual(
    [restored.yaw_deg, restored.pitch_deg, restored.hFOV_deg, restored.vFOV_deg, restored.rot_deg],
    [12, -3, 30, 20, 4],
  );
  assert.equal(restored.visible, true);
});

test("restore initial is rejected for internal stickers and unchanged external poses", () => {
  const internal = sampleState();
  assert.equal(applyStickersNodeSurfaceAction(internal, { type: "restore-initial" }).changed, false);

  const external = sampleState();
  external.stickers[0] = {
    ...external.stickers[0],
    id: "sticker_image_1",
    source_kind: "external_image",
    rot_deg: 0,
    initial_pose: { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 0 },
  };
  external.active.selected_sticker_id = "sticker_image_1";
  assert.equal(applyStickersNodeSurfaceAction(external, { type: "restore-initial" }).changed, false);
});

test("surface model reports an empty visible sticker stage", () => {
  const empty = sampleState();
  empty.stickers = [{ ...empty.stickers[0], visible: false }];
  empty.active.selected_sticker_id = null;

  assert.equal(stickersNodeSurfaceModel(empty).hasStickers, false);
});

test("display entries preserve backend cross-type order and ignore mask raster objects", () => {
  const entries = buildStickersDisplayEntries(sampleState());

  assert.deepEqual(entries.map((entry) => `${entry.type}:${entry.id}`), [
    "strokeGroup:group",
    "sticker:b",
    "rasterObject:raster",
    "sticker:a",
  ]);
});

test("selection and lock actions update only the selected sticker contract", () => {
  const initial = sampleState();
  const selected = applyStickersNodeSurfaceAction(initial, { type: "select-sticker", id: "b" });
  const locked = applyStickersNodeSurfaceAction(selected.state, { type: "toggle-lock" });

  assert.equal(selected.changed, true);
  assert.equal(selected.state.active.selected_sticker_id, "b");
  assert.equal(locked.changed, true);
  assert.equal(locked.state.stickers[1].locked, true);
  assert.equal(initial.stickers[1].locked, undefined);
});

test("add image creates and selects a topmost sticker at the current view center", () => {
  const initial = sampleState();
  const result = applyStickersNodeSurfaceAction(initial, {
    type: "add-sticker",
    value: {
      stickerId: "new_sticker",
      assetId: "new_asset",
      asset: { type: "comfy_image", filename: "new.png" },
      imageWidth: 400,
      imageHeight: 200,
      yaw_deg: 32,
      pitch_deg: -7,
    },
  });

  assert.equal(result.changed, true);
  assert.deepEqual(result.state.assets.new_asset, { type: "comfy_image", filename: "new.png" });
  assert.equal(result.state.active.selected_sticker_id, "new_sticker");
  const added = result.state.stickers.at(-1);
  assert.equal(added.yaw_deg, 32);
  assert.equal(added.pitch_deg, -7);
  assert.equal(added.hFOV_deg, 30);
  assert.ok(Math.abs(added.vFOV_deg - 15.261480424860114) < 1e-9);
  assert.equal(added.rot_deg, 0);
  assert.equal(added.z_index, 4);
});

test("front and back actions reorder against paint and raster entries", () => {
  const initial = sampleState();
  const toBack = applyStickersNodeSurfaceAction(initial, { type: "send-back" });
  const toFront = applyStickersNodeSurfaceAction(toBack.state, { type: "bring-front" });

  assert.deepEqual(
    buildStickersDisplayEntries(toBack.state).map((entry) => `${entry.type}:${entry.id}`),
    ["sticker:a", "strokeGroup:group", "sticker:b", "rasterObject:raster"],
  );
  assert.deepEqual(
    buildStickersDisplayEntries(toFront.state).map((entry) => `${entry.type}:${entry.id}`),
    ["strokeGroup:group", "sticker:b", "rasterObject:raster", "sticker:a"],
  );
});

test("delete prunes unused internal assets while external input delete only hides", () => {
  const internal = applyStickersNodeSurfaceAction(sampleState(), { type: "delete-selected" });
  assert.equal(internal.changed, true);
  assert.deepEqual(internal.state.stickers.map((item) => item.id), ["b"]);
  assert.deepEqual(Object.keys(internal.state.assets), ["asset_b"]);
  assert.equal(internal.state.active.selected_sticker_id, "b");

  const externalState = sampleState();
  externalState.stickers[0] = {
    ...externalState.stickers[0],
    id: "sticker_image_1",
    source_kind: "external_image",
  };
  externalState.active.selected_sticker_id = "sticker_image_1";
  const external = applyStickersNodeSurfaceAction(externalState, { type: "delete-selected" });
  assert.equal(external.changed, true);
  assert.equal(external.state.stickers.length, 2);
  assert.equal(external.state.stickers[0].visible, false);
});

test("locked selection rejects delete and transform actions", () => {
  const initial = sampleState();
  initial.stickers[0].locked = true;

  assert.equal(applyStickersNodeSurfaceAction(initial, { type: "delete-selected" }).changed, false);
  assert.equal(applyStickersNodeSurfaceAction(initial, {
    type: "set-transform",
    value: { yaw_deg: 20 },
  }).changed, false);
});

test("surface session publishes a live draft and commits once", () => {
  let stored = sampleState();
  const live = [];
  const commits = [];
  const session = createStickersNodeSurfaceSession({
    readState: () => stored,
    publishLiveState: (state) => live.push(state),
    commitState: (state) => {
      commits.push(state);
      stored = state;
    },
  });

  session.beginGesture();
  session.updateGesture({ type: "set-transform", value: { yaw_deg: 20 } });
  session.updateGesture({ type: "set-transform", value: { pitch_deg: 12 } });
  assert.equal(commits.length, 0);
  assert.equal(live.length, 2);
  assert.equal(session.hasGestureChanges(), true);
  assert.equal(session.commitGesture(), true);
  assert.equal(commits.length, 1);
  assert.equal(stored.stickers[0].yaw_deg, 20);
  assert.equal(stored.stickers[0].pitch_deg, 12);
});

test("an immediate action commits the active gesture before applying the action", () => {
  let stored = sampleState();
  const commits = [];
  const session = createStickersNodeSurfaceSession({
    readState: () => stored,
    commitState: (state) => {
      commits.push(state);
      stored = state;
    },
  });

  session.beginGesture();
  session.updateGesture({ type: "set-transform", value: { yaw_deg: 45 } });
  const added = session.apply({
    type: "add-sticker",
    value: {
      stickerId: "new_sticker",
      assetId: "new_asset",
      asset: { type: "comfy_image", filename: "new.png" },
      imageWidth: 100,
      imageHeight: 100,
    },
  });

  assert.equal(added, true);
  assert.equal(stored.stickers.find((item) => item.id === "a").yaw_deg, 45);
  assert.deepEqual(stored.stickers.map((item) => item.id), ["a", "b", "new_sticker"]);
  assert.equal(commits.length, 2);
});

test("a destroyed surface session rejects late async actions", () => {
  let stored = sampleState();
  const commits = [];
  const session = createStickersNodeSurfaceSession({
    readState: () => stored,
    commitState: (state) => {
      commits.push(state);
      stored = state;
    },
  });

  session.destroy();
  const applied = session.apply({ type: "delete-selected" });

  assert.equal(applied, false);
  assert.equal(commits.length, 0);
  assert.deepEqual(stored.stickers.map((item) => item.id), ["a", "b"]);
});

test("external input is added without opening the modal and replaced from its execution identity", () => {
  const initial = sampleState();
  const first = reconcileExternalStickerState(initial, {
    connected: true,
    linkId: 41,
    stateHash: "first",
    pose: { yaw_deg: 12, pitch_deg: -3, hFOV_deg: 50, rot_deg: 4 },
    imageWidth: 300,
    imageHeight: 200,
  });
  assert.equal(first.changed, true);
  const external = first.state.stickers.at(-1);
  assert.equal(external.id, "sticker_image_1");
  assert.equal(external.source_link_id, 41);
  assert.equal(external.source_state_hash, "first");
  assert.equal(external.yaw_deg, 12);
  assert.ok(Math.abs(external.vFOV_deg - 34.53798914089611) < 1e-9);

  const replaced = reconcileExternalStickerState(first.state, {
    connected: true,
    linkId: 41,
    stateHash: "second",
    pose: { yaw_deg: -8, pitch_deg: 7, hFOV_deg: 30, rot_deg: 2 },
    imageWidth: 100,
    imageHeight: 100,
  });
  assert.equal(replaced.changed, true);
  assert.equal(replaced.state.stickers.at(-1).source_state_hash, "second");
  assert.equal(replaced.state.stickers.at(-1).yaw_deg, -8);
  assert.ok(Math.abs(replaced.state.stickers.at(-1).vFOV_deg - 30) < 1e-9);
});

test("disconnect removes the external item and clears its selection", () => {
  const initial = sampleState();
  initial.stickers.push({ id: "sticker_image_1", source_kind: "external_image", z_index: 4 });
  initial.active.selected_sticker_id = "sticker_image_1";

  const result = reconcileExternalStickerState(initial, { connected: false });

  assert.equal(result.changed, true);
  assert.equal(result.state.stickers.some((item) => item.id === "sticker_image_1"), false);
  assert.equal(result.state.active.selected_sticker_id, null);
});

test("late image sizing preserves an edited external sticker horizontal FOV", () => {
  const initial = sampleState();
  initial.stickers.push({
    id: "sticker_image_1",
    source_kind: "external_image",
    source_link_id: 41,
    source_state_hash: "same",
    hFOV_deg: 80,
    vFOV_deg: 80,
    initial_pose: { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 },
    z_index: 4,
  });

  const result = reconcileExternalStickerState(initial, {
    connected: true,
    linkId: 41,
    stateHash: "same",
    pose: { hFOV_deg: 30 },
    imageWidth: 200,
    imageHeight: 100,
  });

  assert.equal(result.changed, true);
  assert.equal(result.state.stickers.at(-1).hFOV_deg, 80);
  assert.ok(Math.abs(result.state.stickers.at(-1).vFOV_deg - 45.520952549233265) < 1e-9);
  assert.ok(Math.abs(result.state.stickers.at(-1).initial_pose.vFOV_deg - 15.261480424860114) < 1e-9);
});

test("the node shows the sky Stickers of state v2 at Timeline frame 0", () => {
  const state = parseSceneEditorState(readFileSync(new URL("./fixtures/scene_state/v2_canonical.json", import.meta.url), "utf8"));
  // st_sky starts at frame 10, so the node shows it hidden; the world Sticker is not on the node.
  assert.deepEqual(surfacePoseStickers(state), [
    { id: "st_sky", z_index: 2, locked: false, visible: false, external: false, yaw_deg: 30, pitch_deg: 10, hFOV_deg: 20, vFOV_deg: 15, rot_deg: 5, curve: 1 },
    { id: "st_hidden", z_index: 0, locked: false, visible: false, external: false, yaw_deg: -45, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0, curve: 1 },
  ]);
  assert.deepEqual(buildStickersDisplayEntries(state).map((entry) => entry.id), ["st_hidden", "st_sky"]);
  // While the node plays, the Stickers are posed at the played frame.
  assert.deepEqual(surfacePoseStickers(state, 12).map((item) => [item.id, item.visible]), [["st_sky", true], ["st_hidden", false]]);

  const added = applyStickersNodeSurfaceAction(state, {
    type: "add-sticker",
    value: {
      stickerId: "st_new",
      assetId: "asset_new",
      asset: { type: "comfy_image", filename: "new.png", subfolder: "panorama_stickers", storage: "input" },
      imageWidth: 200,
      imageHeight: 100,
      yaw_deg: 12,
      pitch_deg: 3,
    },
  });
  assert.equal(added.changed, true);
  const sticker = added.state.stickers.at(-1);
  assert.deepEqual(sticker.source, { kind: "file", filename: "new.png", subfolder: "panorama_stickers", storage: "input" });
  assert.deepEqual([sticker.z_index, sticker.direction.value.yaw_deg, sticker.roll.value], [3, 12, 0]);
  assert.equal("assets" in added.state, false);
  // The id comes from the state's counter, not the one the caller made up.
  assert.equal(sticker.id, "sticker_1");
  assert.equal(added.state.next_sticker_id, 2);
  assert.equal(state.next_sticker_id, 1);
  assert.equal(added.state.active.selected_sticker_id, "sticker_1");

  const deleted = applyStickersNodeSurfaceAction(added.state, { type: "delete-selected" });
  assert.deepEqual(deleted.state.stickers.map((item) => item.id), ["st_sky", "st_world", "st_hidden"]);
  assert.equal("assets" in deleted.state, false);
});

// Panorama Studio as the ComfyUI frontend exposes it: MultiType sockets, and connectivity
// through isInputConnected(slot). Reading the deprecated input.link fails the test.
// `types` maps connected inputs to their link type; the sticker input carries an IMAGE by default.
function stickersNode(connected = [], types = {}) {
  const linkTypes = { sticker: "IMAGE", ...types };
  const inputs = [
    { name: "bg_media", type: "IMAGE,VIDEO" },
    { name: "scene", type: "SPLAT,MESH,MOGE_GEOMETRY" },
    { name: "sticker", type: "IMAGE,VIDEO,MESH,SPLAT" },
    { name: "sticker_state", type: "STRING" },
  ].map((input) => Object.defineProperty(input, "link", {
    get() { throw new Error("input.link is deprecated"); },
  }));
  const node = {
    __panoSceneStateV2: true,
    inputs,
    graph: { getNodeById: () => null },
    isInputConnected: (slot) => connected.includes(inputs[slot]?.name),
    getInputLink: (slot) => (node.isInputConnected(slot) ? { type: linkTypes[inputs[slot].name] ?? "STRING", origin_id: 1, origin_slot: 0 } : null),
  };
  return node;
}

function v2EditorState(raw) {
  return parseSceneEditorState(JSON.stringify({ version: 2, ...raw }));
}

function portStickers(state) {
  return state.stickers.filter((item) => item.source.kind === "port");
}

test("a port Sticker added after a deletion takes a new id from the counter, not the deleted one", () => {
  // sticker_2 was deleted: the saved counter is 3, though the largest id left is sticker_1.
  const state = v2EditorState({ stickers: [{ id: "sticker_1", source: { kind: "file", filename: "a.png" } }], next_sticker_id: 3 });

  const result = reconcilePortStickerState(state, portStickerSyncValue(stickersNode(["sticker"]), { pose: null }));

  const [port] = portStickers(result.state);
  assert.deepEqual([port.id, port.handoff_overrides, result.state.next_sticker_id, state.next_sticker_id], ["sticker_3", [], 4, 3]);
  // The counter is one past the largest id again, so the text leaves it out.
  assert.equal("next_sticker_id" in JSON.parse(editorStateText(stickersNode(["sticker"]), result.state)), false);
});

function poseOf(sticker) {
  return [sticker.direction.value.yaw_deg, sticker.direction.value.pitch_deg, sticker.roll.value, sticker.size.value.hFOV_deg, sticker.size.value.vFOV_deg];
}

test("connecting the sticker input adds a port Sticker as the node does, shown as a frame until a result", () => {
  const state = v2EditorState({
    stickers: [
      { id: "sticker_1", source: { kind: "file", filename: "a.png" }, z_index: 3 },
      { id: "sticker_2", placement: "world", source: { kind: "file", filename: "b.png" } },
    ],
  });

  const sync = portStickerSyncValue(stickersNode(["sticker"]), { pose: null });
  const result = reconcilePortStickerState(state, sync);

  assert.deepEqual(sync, { connected: true, awaitingPose: false, pose: null, handoff: false });
  assert.equal(result.changed, true);
  const [port] = portStickers(result.state);
  assert.deepEqual([port.id, port.placement, port.z_index, port.visible, port.locked], ["sticker_3", "sky", 4, true, false]);
  assert.deepEqual(poseOf(port), [0, 0, 0, 30, 30]);
  const scene = JSON.parse(editorStateText(stickersNode(["sticker"]), result.state));
  assert.deepEqual(scene.stickers.map((item) => [item.id, item.source.kind]), [["sticker_1", "file"], ["sticker_2", "file"], ["sticker_3", "port"]]);
});

test("with sticker_state connected the port Sticker waits for the pose of the node's result", () => {
  const state = v2EditorState({});
  const node = stickersNode(["sticker", "sticker_state"]);

  const before = reconcilePortStickerState(state, portStickerSyncValue(node));
  const pose = { yaw_deg: 40, pitch_deg: -10, roll_deg: 5, hFOV_deg: 50 };
  const after = reconcilePortStickerState(state, portStickerSyncValue(node, { pose }));

  assert.equal(before.changed, false);
  const [port] = portStickers(after.state);
  // vFOV follows the media where the Sticker is drawn; the state keeps hFOV as its default.
  assert.deepEqual(poseOf(port), [40, -10, 5, 50, 50]);
});

test("a port Sticker added from a moving Camera keeps the Keyframes of the node's pose", () => {
  const node = stickersNode(["sticker", "sticker_state"]);
  const direction = [
    { frame: 0, value: { yaw_deg: 0, pitch_deg: 0 }, easing: "auto" },
    { frame: 1, value: { yaw_deg: 10, pitch_deg: 5 }, easing: "auto" },
  ];
  const size = [
    { frame: 0, value: { hFOV_deg: 60, vFOV_deg: 20 }, easing: "auto" },
    { frame: 1, value: { hFOV_deg: 40, vFOV_deg: 20 }, easing: "auto" },
  ];
  const pose = { yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 60, keyframes: { direction, roll: [], size } };

  const [port] = portStickers(reconcilePortStickerState(v2EditorState({}), portStickerSyncValue(node, { pose })).state);

  assert.deepEqual(port.direction.keyframes, direction);
  assert.deepEqual(port.roll.keyframes, []);
  assert.deepEqual(port.size.keyframes.map((key) => [key.value.hFOV_deg, key.value.vFOV_deg]), [[60, 60], [40, 40]]);
  const saved = JSON.parse(editorStateText(node, { ...v2EditorState({}), stickers: [port] })).stickers[0];
  assert.deepEqual(saved.direction.keyframes, direction);
});

test("the port Sticker's stored vFOV is not rewritten from the media, and the Sticker is removed with the input", () => {
  const added = reconcilePortStickerState(v2EditorState({}), portStickerSyncValue(stickersNode(["sticker"]))).state;
  added.active = { selected_sticker_id: "sticker_1" };
  const [port] = added.stickers;
  port.size.value.hFOV_deg = 80;
  port.size.keyframes = [{ frame: 0, value: { hFOV_deg: 40, vFOV_deg: 40 }, easing: [0.42, 0, 0.58, 1] }];

  // The image loading syncs the port again; its vFOV is derived where the Sticker is drawn (skyStickerVfov), from
  // the hFOV at frame 0 (its Keyframe, 40).
  const loaded = reconcilePortStickerState(added, portStickerSyncValue(stickersNode(["sticker"])));
  const removed = reconcilePortStickerState(added, portStickerSyncValue(stickersNode([])));

  assert.equal(port.size.value.vFOV_deg, 30);
  assert.equal(loaded.changed, false);
  assert.equal(loaded.state, added);
  assert.ok(Math.abs(drawnHalfHeight(added, { naturalWidth: 200, naturalHeight: 100 }) - Math.tan(20 * Math.PI / 180) / 2) < 1e-12);
  assert.deepEqual(removed.state.stickers, []);
  assert.equal(removed.state.active.selected_sticker_id, null);
});

// tan(vFOV / 2) of the port Sticker as the surface and the editor draw it at frame 0 with `media` loaded.
function drawnHalfHeight(state, media) {
  const [layer] = workingSkyLayers(loadSceneState({ ...state, painting: null }), 0, state.stickers, { media: () => ({ media, revision: "" }), paintLayers: [] });
  return layer.rect.y1;
}

// A run's output shows on Panorama Studio's surface as current only while state_json is the text it ran with
// (studioRunKey). The port Sticker's media loading after the run must not change that text.
test("a non-square port image loading after a run leaves state_json unchanged, so the run stays current", () => {
  const node = stickersNode(["sticker"]);
  const stateWidget = { value: "" };
  const session = createStickersNodeSurfaceSession({
    readState: () => parseSceneEditorState(stateWidget.value || JSON.stringify({ version: 2 }), { active: editorActive(node) }),
    commitState: (next) => {
      stateWidget.value = editorStateText(node, next);
    },
  });
  session.apply({ type: "sync-port", value: portStickerSyncValue(node) });
  const ran = stateWidget.value;
  const run = { width: 1024, height: 512, capped: false, reduced_from: null, key: studioRunKey(ran, 0.5, 8, "360", "#00ff00") };

  // executed: the result names the media; image-loaded: the 200 x 100 image of the port is ready, the port is
  // synced again (runExternalStickerSync "image-loaded") and the surface draws it.
  session.apply({ type: "sync-port", value: portStickerSyncValue(node, { pose: null }) });
  session.apply({ type: "sync-port", value: portStickerSyncValue(node, { pose: null }) });
  const drawn = drawnHalfHeight(parseSceneEditorState(stateWidget.value), { naturalWidth: 200, naturalHeight: 100 });

  assert.equal(stateWidget.value, ran);
  assert.equal(JSON.parse(ran).stickers[0].size.value.vFOV_deg, 30);
  assert.ok(Math.abs(drawn - Math.tan(15 * Math.PI / 180) / 2) < 1e-12);
  // The run still matches: its size stays the one the line shows.
  assert.equal(studioRunKey(stateWidget.value, 0.5, 8, "360", "#00ff00"), run.key);
});

test("a stored port Sticker survives a reload unchanged and is not added twice", () => {
  const node = stickersNode(["sticker"]);
  const added = reconcilePortStickerState(v2EditorState({}), portStickerSyncValue(node)).state;
  const text = editorStateText(node, added);

  const reloaded = parseSceneEditorState(text);
  const synced = reconcilePortStickerState(reloaded, portStickerSyncValue(node));

  assert.deepEqual(JSON.parse(text).stickers.map((item) => item.source), [{ kind: "port" }]);
  assert.deepEqual(portStickers(reloaded).map((item) => item.id), ["sticker_1"]);
  assert.equal(synced.changed, false);
  assert.equal(reconcilePortStickerState(reloaded, portStickerSyncValue(node)).changed, false);
});

test("an image added in the editor and the port media are the same Sticker shape in state v2", () => {
  const node = stickersNode(["sticker"]);
  const withPort = reconcilePortStickerState(v2EditorState({}), portStickerSyncValue(node)).state;
  const result = applyStickersNodeSurfaceAction(withPort, {
    type: "add-sticker",
    value: {
      stickerId: "st_dropped",
      assetId: "asset_dropped",
      asset: { type: "comfy_image", filename: "drop.png", subfolder: "panorama_stickers", storage: "input", name: "drop.png" },
      imageWidth: 100,
      imageHeight: 100,
    },
  });

  const scene = JSON.parse(editorStateText(node, result.state));
  assert.deepEqual(scene.stickers.map((item) => [item.id, item.placement, item.source]), [
    ["sticker_1", "sky", { kind: "port" }],
    ["sticker_2", "sky", { kind: "file", filename: "drop.png", subfolder: "panorama_stickers", storage: "input" }],
  ]);
});

test("the port sync action goes through the node surface session", () => {
  const result = applyStickersNodeSurfaceAction(v2EditorState({}), {
    type: "sync-port",
    value: portStickerSyncValue(stickersNode(["sticker"])),
  });

  assert.equal(result.changed, true);
  assert.equal(portStickers(result.state).length, 1);
});

// Loading a workflow, LiteGraph's LGraphNode.configure restores the properties, then the inputs with
// their links, calling onConnectionsChange(INPUT, slot, true, ...) for each one, and only then the
// widget values. The node surface syncs the sticker input there at once and again in a microtask
// (pano_preview_runtime.js), with the node's state read from and written to state_json as it does.
test("loading a workflow keeps its port Sticker as saved with the sticker input connected", async () => {
  const INPUT = 1;
  const savedState = parseSceneEditorState(JSON.stringify({
    version: 2,
    stickers: [
      { id: "st_file", source: { kind: "file", filename: "a.png" }, z_index: 0 },
      {
        id: "sticker_2",
        source: { kind: "port" },
        direction: { value: { yaw_deg: 40, pitch_deg: -10 } },
        roll: { value: 5 },
        size: { value: { hFOV_deg: 50, vFOV_deg: 26 } },
        z_index: 1,
      },
    ],
  }));
  const saved = {
    properties: { pano_editor_active: { selected_sticker_id: "sticker_2" } },
    inputs: [null, null, 7, null],
    widgets_values: ["#00ff00", "360", "2048", editorStateText({ __panoSceneStateV2: true }, savedState)],
  };
  const node = {
    __panoSceneStateV2: true,
    graph: { links: new Map([[7, { id: 7, origin_id: 3, origin_slot: 0, type: "IMAGE" }]]) },
    properties: {},
    inputs: ["bg_media", "scene", "sticker", "sticker_state"].map((name) => ({ name, link: null })),
    widgets: ["bg_color", "coverage", "output_preset", "state_json"].map((name) => ({ name, value: name === "state_json" ? "" : null })),
    isInputConnected(slot) {
      return !!this.graph && this.inputs[slot]?.link != null;
    },
    getInputLink(slot) {
      return this.graph.links.get(this.inputs[slot]?.link) ?? null;
    },
  };
  const stateWidget = node.widgets[3];
  const commits = [];
  const session = createStickersNodeSurfaceSession({
    readState: () => parseSceneEditorState(stateWidget.value, { active: editorActive(node) }),
    commitState: (next) => {
      setEditorActive(node, next.active);
      stateWidget.value = editorStateText(node, next);
      commits.push(stateWidget.value);
    },
  });
  const sync = () => session.apply({ type: "sync-port", value: portStickerSyncValue(node) });
  node.onConnectionsChange = (type, slot) => {
    if (type !== INPUT || node.inputs[slot].name !== "sticker") return;
    sync();
    queueMicrotask(sync);
  };

  Object.assign(node.properties, saved.properties);
  node.inputs.forEach((input, slot) => {
    input.link = saved.inputs[slot];
    node.onConnectionsChange(INPUT, slot, true, node.graph.links.get(input.link) ?? null, input);
  });
  saved.widgets_values.forEach((value, index) => { node.widgets[index].value = value; });
  await new Promise((resolve) => setTimeout(resolve, 0));

  assert.equal(stateWidget.value, saved.widgets_values[3]);
  const loaded = parseSceneEditorState(stateWidget.value);
  assert.deepEqual(loaded.stickers.map((item) => [item.id, item.source.kind]), [["st_file", "file"], ["sticker_2", "port"]]);
  assert.deepEqual(poseOf(loaded.stickers[1]), [40, -10, 5, 50, 26]);
  assert.equal(node.properties.pano_editor_active.selected_sticker_id, "sticker_2");
  // The sync before the widget values ran on the empty state; the restored state_json replaced it.
  assert.deepEqual(commits.map((text) => JSON.parse(text).stickers.map((item) => item.id)), [["sticker_1"]]);
});

test("3D media on the sticker input waits for the node and adds the world Sticker it placed", () => {
  const node = stickersNode(["sticker"], { sticker: "MESH" });
  const state = v2EditorState({ stickers: [{ id: "sticker_1", source: { kind: "file", filename: "a.png" } }] });

  const before = reconcilePortStickerState(state, portStickerSyncValue(node));
  const pose = { placement: "world", position: [0, 0, -2], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 1 };
  const after = reconcilePortStickerState(state, portStickerSyncValue(node, { pose }));
  const [port] = portStickers(after.state);
  // Synced again (the media loading, say), the world Sticker stays as it is.
  const unchanged = reconcilePortStickerState(after.state, portStickerSyncValue(node, { pose }));

  assert.equal(before.changed, false);
  assert.deepEqual([port.id, port.placement, port.z_index], ["sticker_2", "world", undefined]);
  assert.deepEqual([port.position.value, port.rotation.value, port.scale.value, port.opacity.value], [[0, 0, -2], pose.rotation, 1, 1]);
  assert.equal(unchanged.changed, false);
  const saved = JSON.parse(editorStateText(node, after.state)).stickers[1];
  assert.deepEqual([saved.placement, saved.source, saved.position.value], ["world", { kind: "port" }, [0, 0, -2]]);
});

test("a replace pose keeps the crop, the opacity and the overrides of Lanes the new placement has, as the node does", () => {
  const node = stickersNode(["sticker"], { sticker: "IMAGE" });
  const state = v2EditorState({ stickers: [{
    id: "sticker_4", source: { kind: "port" }, clip: { start: 2, duration: 5 }, visible: false, locked: true, z_index: 2,
    crop: { x0: 0.1, y0: 0.2, x1: 0.9, y1: 0.8 }, opacity: { value: 0.5, keyframes: [{ frame: 3, value: 0.25 }] },
    handoff_overrides: ["direction", "opacity"],
  }] });
  const pose = { placement: "world", position: [0, 0, -1], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 2, replace: true };

  const [port] = portStickers(reconcilePortStickerState(state, portStickerSyncValue(node, { pose })).state);

  assert.deepEqual([port.id, port.placement, port.visible, port.locked, port.clip.start], ["sticker_4", "world", false, true, 2]);
  assert.deepEqual(port.crop, { x0: 0.1, y0: 0.2, x1: 0.9, y1: 0.8 });
  assert.deepEqual([port.opacity.value, port.opacity.keyframes.map((key) => [key.frame, key.value])], [0.5, [[3, 0.25]]]);
  assert.deepEqual(port.handoff_overrides, ["opacity"]);
});

test("a link that does not tell its type is read from the output it comes from, else waits for the node", () => {
  const state = v2EditorState({});
  const throughReroute = (outputType) => {
    const node = stickersNode(["sticker"], { sticker: "*" });
    node.graph.getNodeById = (id) => (id === 1 && outputType ? { outputs: [{ type: outputType }] } : null);
    return node;
  };

  const image = reconcilePortStickerState(state, portStickerSyncValue(throughReroute("IMAGE")));
  const mesh = reconcilePortStickerState(state, portStickerSyncValue(throughReroute("FILE_3D_GLB")));
  const unknown = throughReroute(null);
  const waiting = reconcilePortStickerState(state, portStickerSyncValue(unknown));
  // The node's pose decides: without a placement it is a sky Sticker.
  const sky = reconcilePortStickerState(state, portStickerSyncValue(unknown, { pose: { yaw_deg: 10, pitch_deg: 0, roll_deg: 0, hFOV_deg: 30 } }));

  assert.deepEqual(portStickers(image.state).map((item) => item.placement), ["sky"]);
  assert.deepEqual([mesh.changed, waiting.changed], [false, false]);
  assert.deepEqual(portStickers(sky.state).map((item) => [item.placement, item.direction.value.yaw_deg]), [["sky", 10]]);
});

test("the node's replace pose turns a sky port Sticker into a world one under the same id, once", () => {
  const node = stickersNode(["sticker"], { sticker: "SPLAT" });
  const state = v2EditorState({ stickers: [{ id: "sticker_4", source: { kind: "port" }, clip: { start: 2, duration: 5 }, locked: true, z_index: 2 }] });
  const pose = { placement: "world", position: [0, 0, -2], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 1, replace: true };

  const replaced = reconcilePortStickerState(state, portStickerSyncValue(node, { pose }));
  const again = reconcilePortStickerState(replaced.state, portStickerSyncValue(node, { pose }));

  const [port] = portStickers(replaced.state);
  assert.deepEqual([port.id, port.placement, port.clip.start, port.clip.duration, port.locked, port.direction], ["sticker_4", "world", 2, 5, true, undefined]);
  assert.equal(again.changed, false);
});

test("with a Pose handoff, the node's replace pose is not written: the handoff is shown over the stored Sticker", () => {
  const node = stickersNode(["sticker", "sticker_state"], { sticker: "IMAGE" });
  const state = v2EditorState({ stickers: [{ id: "sticker_4", source: { kind: "port" }, z_index: 2 }] });
  const pose = { placement: "world", position: [0, 0, -1], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 2, replace: true };
  const handoff = [{ placement: "world", lanes: {}, fps: 24 }];

  const result = reconcilePortStickerState(state, portStickerSyncValue(node, { pose, handoff }));

  assert.equal(result.changed, false);
  assert.equal(nodePortHandoff(node, handoff).placement, "world");
  assert.equal(nodePortHandoff(stickersNode(["sticker"]), handoff), null, "sticker_state is no longer connected");
});

test("a world port Sticker the node adds comes with the Keyframes of the Camera that moved", () => {
  const node = stickersNode(["sticker", "sticker_state"], { sticker: "IMAGE" });
  const keyframes = { position: [{ frame: 0, value: [0, 0, -2] }, { frame: 6, value: [1, 0, -2] }], rotation: [], scale: [] };
  const pose = { placement: "world", position: [0, 0, -2], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 4, keyframes };

  const [port] = portStickers(reconcilePortStickerState(v2EditorState({}), portStickerSyncValue(node, { pose })).state);

  assert.deepEqual(port.position.keyframes.map((key) => [key.frame, key.value]), [[0, [0, 0, -2]], [6, [1, 0, -2]]]);
});

// docs/editor-interaction.md: MOGE_GEOMETRY and DA3_GEOMETRY on `sticker` are 3D media, a world port Sticker the
// node places, as MESH and SPLAT are.
test("a MOGE_GEOMETRY or DA3_GEOMETRY sticker is 3D media, added as a world Sticker once the node placed it", () => {
  for (const type of ["MOGE_GEOMETRY", "DA3_GEOMETRY"]) {
    assert.equal(stickerMediaKind(type), "3d");
    const node = stickersNode(["sticker"], { sticker: type });
    const state = v2EditorState({});
    assert.equal(reconcilePortStickerState(state, portStickerSyncValue(node)).changed, false);
    const pose = { placement: "world", position: [0, 0, -2], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 1 };
    assert.deepEqual(portStickers(reconcilePortStickerState(state, portStickerSyncValue(node, { pose })).state).map((item) => item.placement), ["world"]);
  }
  assert.equal(stickerMediaKind("MESH,SPLAT,DA3_GEOMETRY"), "3d");
  assert.equal(stickerMediaKind("IMAGE,DA3_GEOMETRY"), null);
  assert.equal(stickerMediaKind("IMAGE"), "2d");
});
