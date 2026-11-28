// docs/studio-ui.md "エディタの中の Camera" (web_src/studio/camera_ui.js): the left column's Camera button, whether it
// can be pressed and its tooltip, and how it brings the Camera to the view (position, Yaw and Pitch only; Panorama mode
// switches to Frame; Keyframed Lanes are keyed at the playhead by the recording rule).
import assert from "node:assert/strict";
import test from "node:test";

import { evaluateLane } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { cameraButton, cameraToView } from "../web_src/studio/camera_ui.js";

const load = (camera) => loadSceneState({ version: 2, camera }).camera;
const pose = { position: [1, 2, 3], yaw_deg: 30, pitch_deg: -10, roll_deg: 0, target: [0, 0, 0] };

test("the Camera button says what it does, and why it cannot be pressed", () => {
  assert.deepEqual(cameraButton({ projection: "perspective" }), { disabled: false, tip: "Camera to view" });
  assert.deepEqual(cameraButton({ projection: "erp" }), { disabled: false, tip: "Camera to view · Switches to Frame mode" });
  assert.deepEqual(cameraButton({ projection: "erp", locked: true }), { disabled: true, tip: "Camera to view · Locked" });
  assert.deepEqual(cameraButton({ projection: "perspective", readOnly: true, locked: true }), { disabled: true, tip: "Camera to view · Read-only" });
});

test("in Frame mode it brings the Camera's position, Yaw and Pitch to the view; Roll, FOV, Lens and Aspect stay", () => {
  const camera = load({ projection: "perspective", aspect: 1.5, rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 12 } }, fov: { value: 50 }, curve: { value: 0.8 } });
  assert.equal(cameraToView(camera, 0, pose), true);
  assert.deepEqual(evaluateLane(camera, "position", 0), [1, 2, 3]);
  const rotation = evaluateLane(camera, "rotation", 0);
  assert.deepEqual([rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg], [30, -10, 12]);
  assert.equal(evaluateLane(camera, "fov", 0), 50);
  assert.equal(evaluateLane(camera, "curve", 0), 0.8);
  assert.equal(camera.aspect, 1.5);
  assert.equal(camera.projection, "perspective");
  assert.equal(cameraToView(camera, 0, pose), false, "already at the view: nothing changes");
});

test("in Panorama mode it switches to Frame mode and brings the Camera to the view", () => {
  const camera = load({ projection: "erp" });
  assert.equal(cameraToView(camera, 0, pose), true);
  assert.equal(camera.projection, "perspective");
  assert.deepEqual(evaluateLane(camera, "position", 0), [1, 2, 3]);
  // The mode alone is a change, even at the view.
  const there = load({ projection: "erp", position: { value: [1, 2, 3] }, rotation: { value: { yaw_deg: 30, pitch_deg: -10, roll_deg: 0 } } });
  assert.equal(cameraToView(there, 0, pose), true);
  assert.equal(there.projection, "perspective");
});

test("a Lane with Keyframes gets one at the playhead (the recording rule), a Lane without changes its value", () => {
  const camera = load({
    projection: "perspective",
    position: { value: [0, 0, 0], keyframes: [{ frame: 0, value: [0, 0, 0] }, { frame: 20, value: [5, 0, 0] }] },
    rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } },
  });
  assert.equal(cameraToView(camera, 8, pose), true);
  assert.deepEqual(camera.position.keyframes.map((key) => key.frame), [0, 8, 20]);
  assert.deepEqual(camera.position.keyframes[1].value, [1, 2, 3]);
  assert.equal(camera.rotation.keyframes.length, 0, "no Keyframe on a Lane that had none");
  assert.equal(camera.rotation.value.yaw_deg, 30);
});

// Fable review: a Look at target that is gone (its id kept for Undo) or sky is no target, as the inspector reads it, so
// the Camera button turns the Camera as without Look at.
test("the Camera button turns the Camera when its Look at target is gone or sky", () => {
  const camera = load({ projection: "perspective", look_at: { value: { sticker: "gone", offset: [0, 0, 0] } }, rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } } });
  assert.equal(cameraToView(camera, 0, pose, null, []), true);
  assert.equal(camera.rotation.value.yaw_deg, 30);
  const sky = load({ projection: "perspective", look_at: { value: { sticker: "s", offset: [0, 0, 0] } }, rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } } });
  assert.equal(cameraToView(sky, 0, pose, null, [{ id: "s", placement: "sky" }]), true);
  assert.equal(sky.rotation.value.yaw_deg, 30);
});

// The H FOV unit (docs/studio-ui.md "H FOV の単位").
test("formatFocalMm: one decimal under 100 mm, whole from 100 mm", async () => {
  const { formatFocalMm } = await import("../web_src/studio/camera_ui.js");
  assert.equal(formatFocalMm(50), "50.0");
  assert.equal(formatFocalMm(5.73), "5.7");
  assert.equal(formatFocalMm(99.94), "99.9");
  assert.equal(formatFocalMm(99.96), "100");
  assert.equal(formatFocalMm(135.4), "135");
  assert.equal(formatFocalMm(2062.6), "2063");
});

test("the H FOV unit is kept per browser, degrees when unset or unreadable", async () => {
  const { FOV_UNIT_SETTING_KEY, readFovUnitSetting, writeFovUnitSetting } = await import("../web_src/studio/camera_ui.js");
  const items = new Map();
  const storage = { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => items.set(key, value) };
  assert.equal(readFovUnitSetting(storage), "deg");
  writeFovUnitSetting(storage, "mm");
  assert.equal(items.get(FOV_UNIT_SETTING_KEY), "mm");
  assert.equal(readFovUnitSetting(storage), "mm");
  writeFovUnitSetting(storage, "anything");
  assert.equal(readFovUnitSetting(storage), "deg");
  const blocked = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); } };
  assert.equal(readFovUnitSetting(blocked), "deg");
  writeFovUnitSetting(blocked, "mm");
  assert.equal(readFovUnitSetting(null), "deg");
});

test("the H FOV box's mm text and a typed mm: unrounded degrees in the field's range, no positive number keeps the value", async () => {
  const { focalFieldText, focalFieldValue, FOCAL_WIDEST_TEXT } = await import("../web_src/studio/camera_ui.js");
  const { CAMERA_HFOV_MIN, lensFovLimit } = await import("../web_src/pano_lens.js");
  assert.equal(focalFieldText(2 * Math.atan(18 / 50) * 180 / Math.PI, 1), "50.0");
  assert.equal(focalFieldValue("400", 1), 2 * Math.atan(18 / 400) * 180 / Math.PI);
  assert.equal(focalFieldValue("85mm", 1), 2 * Math.atan(18 / 85) * 180 / Math.PI);
  assert.equal(focalFieldValue("15", 0), 2.4 * 180 / Math.PI);
  assert.equal(focalFieldValue("99999", 1), CAMERA_HFOV_MIN);
  assert.equal(focalFieldValue("0.01", 0.5), lensFovLimit(0.5));
  for (const text of ["0", "-5", "", "mm"]) assert.equal(focalFieldValue(text, 1), null, text);
  // The widest mm the head and the FOV number keep room for is the field's 1°, the same text at any κ.
  for (const kappa of [1, 0.5, 0]) assert.equal(FOCAL_WIDEST_TEXT, focalFieldText(CAMERA_HFOV_MIN, kappa), `κ ${kappa}`);
});
