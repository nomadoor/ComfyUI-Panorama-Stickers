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
