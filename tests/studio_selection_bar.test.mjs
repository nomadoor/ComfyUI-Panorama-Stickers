// docs/studio-ui.md "下の中央のバー" (web_src/studio/selection_bar.js): the bar's contents per kind of selected object,
// the gizmo's modes and their keys 1, 2, 3.
import assert from "node:assert/strict";
import test from "node:test";

import { ICON } from "../web_src/icons.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { gizmoModeOfKey, selectedKind, selectionBar, shownGizmoMode } from "../web_src/studio/selection_bar.js";

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
const state = loadSceneState({
  version: 2,
  stickers: [
    { id: "sky_1", placement: "sky", source: file("poster.png") },
    { id: "plane_1", placement: "world", source: file("board.png") },
    { id: "chair_1", placement: "world", source: file("chair.glb"), locked: true },
    { id: "port_1", placement: "world", source: { kind: "port" } },
  ],
});
const keys = (bar) => bar.groups.map((group) => group.map((button) => button.key));

test("each kind of object has its own bar, with its icon and name at the left", () => {
  assert.equal(selectionBar({ state, row: null }), null, "nothing selected: no bar");
  assert.equal(selectionBar({ state, row: "gone" }), null);
  const skyBar = selectionBar({ state, row: "sky_1" });
  assert.deepEqual([skyBar.kind, skyBar.icon, skyBar.name], ["sky", ICON.pano, "poster.png"]);
  assert.deepEqual(keys(skyBar), [["front", "back"], ["duplicate", "replace"], ["lock", "delete"]]);
  const plane = selectionBar({ state, row: "plane_1" });
  assert.deepEqual([plane.kind, plane.icon], ["world-image", ICON.box]);
  assert.deepEqual(keys(plane), [["gizmo:translate", "gizmo:rotate", "gizmo:scale"], ["duplicate", "replace"], ["lock", "delete"]]);
  assert.deepEqual(keys(selectionBar({ state, row: "chair_1" })), keys(plane));
  const camera = selectionBar({ state, row: "camera" });
  assert.deepEqual([camera.kind, camera.icon, camera.name], ["camera", ICON.camera, "Camera"]);
  assert.deepEqual(keys(camera), [["gizmo:translate", "gizmo:rotate"], ["lock"]], "the Camera cannot be deleted: no Delete");
});

test("the gizmo's buttons say their keys, and the one of the mode is chosen", () => {
  const bar = selectionBar({ state, row: "plane_1", mode: "rotate" });
  assert.deepEqual(bar.groups[0].map((button) => [button.tip, button.active]), [["Move (1)", false], ["Rotate (2)", true], ["Scale (3)", false]]);
  // The Camera has no Scale: Scale shows as Move.
  assert.deepEqual(selectionBar({ state, row: "camera", mode: "scale" }).groups[0].map((button) => button.active), [true, false]);
  assert.equal(shownGizmoMode("camera", "scale"), "translate");
});

test("1, 2, 3 choose Move, Rotate, Scale for an object that has them", () => {
  assert.equal(gizmoModeOfKey("world-3d", "1"), "translate");
  assert.equal(gizmoModeOfKey("world-image", "2"), "rotate");
  assert.equal(gizmoModeOfKey("world-image", "3"), "scale");
  assert.equal(gizmoModeOfKey("camera", "3"), null);
  assert.equal(gizmoModeOfKey("camera", "2"), "rotate");
  assert.equal(gizmoModeOfKey("sky", "1"), null);
  assert.equal(gizmoModeOfKey(null, "1"), null);
  assert.equal(gizmoModeOfKey("world-3d", "4"), null);
});

test("Lock shows its state by its icon; a locked object's edits are disabled, Lock itself is not", () => {
  const locked = selectionBar({ state, row: "chair_1" });
  const lock = locked.groups[2][0];
  assert.deepEqual([lock.icon, lock.label, lock.disabled], [ICON.lock_closed, "Unlock", false]);
  assert.equal(locked.groups[2][1].disabled, true, "Delete");
  const open = selectionBar({ state, row: "plane_1" }).groups[2][0];
  assert.deepEqual([open.icon, open.label], [ICON.lock_open, "Lock"]);
  assert.ok(selectionBar({ state, row: "plane_1", readOnly: true }).groups.flat().filter((button) => !button.key.startsWith("gizmo:")).every((button) => button.disabled));
});

test("an input's object adds the one Back to source, and cannot be duplicated or deleted", () => {
  const bar = selectionBar({ state, row: "port_1" });
  assert.deepEqual(keys(bar).at(-1), ["revert"]);
  assert.equal(bar.groups.flat().find((button) => button.key === "duplicate").disabled, true);
  assert.equal(bar.groups.flat().find((button) => button.key === "delete").disabled, true);
  assert.equal(keys(selectionBar({ state, row: "plane_1" })).flat().includes("revert"), false);
});

test("the kinds", () => {
  assert.deepEqual(["sky_1", "plane_1", "chair_1", "port_1", "camera", null].map((row) => selectedKind(state, row)), ["sky", "world-image", "world-3d", "world-3d", "camera", null]);
});
