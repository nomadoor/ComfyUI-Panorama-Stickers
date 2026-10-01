import assert from "node:assert/strict";
import test from "node:test";

import {
  applyStickersNodeSurfaceAction,
  buildStickersDisplayEntries,
  createStickersNodeSurfaceSession,
  portStickerSyncValue,
  reconcileExternalStickerState,
  reconcilePortStickerState,
  stickersNodeSurfaceModel,
  surfacePoseStickers,
} from "../web_src/pano_stickers_node_surface.js";
import { readFileSync } from "node:fs";
import { editorActive, editorStateText, parseSceneEditorState, setEditorActive } from "../web_src/pano_editor_state.js";

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
    { id: "st_sky", z_index: 2, locked: false, visible: false, external: false, yaw_deg: 30, pitch_deg: 10, hFOV_deg: 20, vFOV_deg: 15, rot_deg: 5 },
    { id: "st_hidden", z_index: 0, locked: false, visible: false, external: false, yaw_deg: -45, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 },
  ]);
  assert.deepEqual(buildStickersDisplayEntries(state).map((entry) => entry.id), ["st_hidden", "st_sky"]);

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
  assert.equal(added.state.active.selected_sticker_id, "st_new");

  const deleted = applyStickersNodeSurfaceAction(added.state, { type: "delete-selected" });
  assert.deepEqual(deleted.state.stickers.map((item) => item.id), ["st_sky", "st_world", "st_hidden"]);
  assert.equal("assets" in deleted.state, false);
});

// PanoramaStickersNode as the ComfyUI frontend exposes it: MultiType sockets, and connectivity
// through isInputConnected(slot). Reading the deprecated input.link fails the test.
function stickersNode(connected = []) {
  const inputs = [
    { name: "bg_media", type: "IMAGE,VIDEO" },
    { name: "scene", type: "SPLAT,MESH,MOGE_GEOMETRY" },
    { name: "sticker", type: "IMAGE,VIDEO,MESH,SPLAT" },
    { name: "sticker_state", type: "STRING" },
  ].map((input) => Object.defineProperty(input, "link", {
    get() { throw new Error("input.link is deprecated"); },
  }));
  return {
    __panoSceneStateV2: true,
    inputs,
    isInputConnected: (slot) => connected.includes(inputs[slot]?.name),
  };
}

function v2EditorState(raw) {
  return parseSceneEditorState(JSON.stringify({ version: 2, ...raw }));
}

function portStickers(state) {
  return state.stickers.filter((item) => item.source.kind === "port");
}

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

  const sync = portStickerSyncValue(stickersNode(["sticker"]), { pose: null, image: null });
  const result = reconcilePortStickerState(state, sync);

  assert.deepEqual(sync, { connected: true, awaitingPose: false, pose: null, imageWidth: 0, imageHeight: 0 });
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
  const after = reconcilePortStickerState(state, portStickerSyncValue(node, { pose, image: { naturalWidth: 200, naturalHeight: 100 } }));

  assert.equal(before.changed, false);
  const [port] = portStickers(after.state);
  assert.deepEqual(poseOf(port).slice(0, 4), [40, -10, 5, 50]);
  assert.ok(Math.abs(port.size.value.vFOV_deg - 26.248536245583416) < 1e-9);
});

test("the port Sticker follows the media aspect, in its value and its Keyframes, and is removed with the input", () => {
  const added = reconcilePortStickerState(v2EditorState({}), portStickerSyncValue(stickersNode(["sticker"]))).state;
  added.active = { selected_sticker_id: "sticker_1" };
  const [port] = added.stickers;
  port.size.value.hFOV_deg = 80;
  port.size.keyframes = [{ frame: 0, value: { hFOV_deg: 40, vFOV_deg: 40 }, easing: [0.42, 0, 0.58, 1] }];

  const sized = reconcilePortStickerState(added, portStickerSyncValue(stickersNode(["sticker"]), { image: { width: 200, height: 100 } }));
  const unchanged = reconcilePortStickerState(sized.state, portStickerSyncValue(stickersNode(["sticker"]), { image: { width: 200, height: 100 } }));
  const removed = reconcilePortStickerState(sized.state, portStickerSyncValue(stickersNode([])));

  const size = sized.state.stickers[0].size;
  assert.equal(size.value.hFOV_deg, 80);
  assert.ok(Math.abs(size.value.vFOV_deg - 45.520952549233265) < 1e-9);
  assert.ok(Math.abs(size.keyframes[0].value.vFOV_deg - 20.62820963123639) < 1e-9);
  assert.equal(port.size.value.vFOV_deg, 30);
  assert.equal(unchanged.changed, false);
  assert.deepEqual(removed.state.stickers, []);
  assert.equal(removed.state.active.selected_sticker_id, null);
});

test("a stored port Sticker survives a reload unchanged and is not added twice", () => {
  const node = stickersNode(["sticker"]);
  const added = reconcilePortStickerState(v2EditorState({}), portStickerSyncValue(node)).state;
  const text = editorStateText(node, added);

  const reloaded = parseSceneEditorState(text);
  const synced = reconcilePortStickerState(reloaded, portStickerSyncValue(node, { image: { width: 300, height: 300 } }));

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
    ["st_dropped", "sky", { kind: "file", filename: "drop.png", subfolder: "panorama_stickers", storage: "input" }],
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
    graph: { links: new Map([[7, { id: 7, origin_id: 3, origin_slot: 0 }]]) },
    properties: {},
    inputs: ["bg_media", "scene", "sticker", "sticker_state"].map((name) => ({ name, link: null })),
    widgets: ["bg_color", "coverage", "output_preset", "state_json"].map((name) => ({ name, value: name === "state_json" ? "" : null })),
    isInputConnected(slot) {
      return !!this.graph && this.inputs[slot]?.link != null;
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
