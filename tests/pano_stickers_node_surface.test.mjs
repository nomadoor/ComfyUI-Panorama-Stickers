import assert from "node:assert/strict";
import test from "node:test";

import {
  applyStickersNodeSurfaceAction,
  buildStickersDisplayEntries,
  createStickersNodeSurfaceSession,
  reconcileExternalStickerState,
  stickersNodeSurfaceModel,
} from "../web_src/pano_stickers_node_surface.js";

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
