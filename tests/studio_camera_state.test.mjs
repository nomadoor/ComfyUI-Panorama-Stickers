// How the new UI reads and writes the state's Camera (web_src/studio/camera_state.js; docs/studio-ui.md, the owner
// table's Camera row): the default Camera for a state without one, the Camera at a frame, and the two ways to write it.
import assert from "node:assert/strict";
import test from "node:test";

import { cameraShot } from "../web_src/pano_editor_state.js";
import { evaluateCamera, evaluateLane } from "../web_src/pano_scene_eval.js";
import { defaultCamera, loadSceneState } from "../web_src/pano_scene_state.js";
import { cameraAt, cameraOf, editableCamera, moveCameraPose, setCameraLanes } from "../web_src/studio/camera_state.js";

const load = (camera) => loadSceneState({ version: 2, camera });

test("a state without a Camera reads as the default Camera; a state with one reads its own", () => {
  const state = load({ projection: "perspective" });
  assert.equal(cameraOf(state), state.camera);
  assert.deepEqual(cameraOf({ ...state, camera: null }), defaultCamera());
  assert.deepEqual(cameraOf({ ...state, camera: undefined }), defaultCamera());
  assert.notEqual(cameraOf({ camera: null }), cameraOf({ camera: null }), "a new default each time");
});

test("the Camera at a frame is its evaluated values with the fields that do not change in time, and only those", () => {
  const state = load({
    projection: "erp",
    erp_range: 180,
    aspect: 1.5,
    visible: false,
    locked: true,
    position: { value: [0, 0, 0], keyframes: [{ frame: 0, value: [0, 0, 0] }, { frame: 10, value: [10, 0, 0] }] },
    rotation: { value: { yaw_deg: 30, pitch_deg: 5, roll_deg: 2 } },
    fov: { value: 70 },
  });
  const value = cameraAt(state, 5);
  assert.deepEqual(value, { ...evaluateCamera(state.camera, 5), projection: "erp", erp_range: 180, visible: false, locked: true });
  assert.deepEqual(Object.keys(value).sort(), ["aspect", "curve", "erp_range", "hFOV_deg", "locked", "pitch_deg", "position", "projection", "roll_deg", "visible", "yaw_deg"]);
  assert.deepEqual(cameraAt({ ...state, camera: null }, 3), { ...evaluateCamera(defaultCamera(), 3), projection: "erp", erp_range: 360, visible: true, locked: false });
});

test("a write to a draft without a Camera puts the default Camera there first; one that has one keeps it", () => {
  const draft = { ...load({}), camera: null };
  const camera = editableCamera(draft);
  assert.equal(draft.camera, camera);
  assert.deepEqual(camera, defaultCamera());
  assert.equal(editableCamera(draft), camera);
  const missing = load({});
  delete missing.camera;
  assert.deepEqual(editableCamera(missing), defaultCamera(), "undefined is filled as null is");
  // Only null and undefined are filled (??=). Other falsy values cannot come from loadSceneState, so they are not
  // a case: a draft's `camera` is a Camera object, null or missing.
});

test("a move to a pose writes only the Lanes that change by the recording rule, keeping the nearest turn, and says whether it changed", () => {
  const camera = load({
    projection: "perspective",
    position: { value: [1, 2, 3] },
    rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 7 }, keyframes: [{ frame: 0, value: { yaw_deg: 175, pitch_deg: 0, roll_deg: 7 } }] },
  }).camera;
  const base = cameraShot(camera, 4);
  assert.equal(moveCameraPose(camera, 4, { position: [...base.position], yaw_deg: base.yaw_deg, pitch_deg: base.pitch_deg }), false, "at the pose already");
  assert.equal(moveCameraPose(camera, 4, { position: [1, 2, 3], yaw_deg: -175, pitch_deg: 0 }), true);
  assert.deepEqual(camera.position, { value: [1, 2, 3], keyframes: [] }, "the position did not change: not written");
  assert.deepEqual(camera.rotation.keyframes.map((key) => [key.frame, key.value]), [[0, { yaw_deg: 175, pitch_deg: 0, roll_deg: 7 }], [4, { yaw_deg: 185, pitch_deg: 0, roll_deg: 7 }]], "the yaw keeps the turn of its base");
  assert.equal(moveCameraPose(camera, 4, { position: [4, 5, 6], yaw_deg: -175, pitch_deg: 0 }), true);
  assert.deepEqual(evaluateLane(camera, "position", 4), [4, 5, 6]);
});

test("a gizmo write sets each Lane it is given as it is given", () => {
  const camera = load({ rotation: { value: { yaw_deg: 175, pitch_deg: 0, roll_deg: 0 }, keyframes: [{ frame: 0, value: { yaw_deg: 175, pitch_deg: 0, roll_deg: 0 } }] } }).camera;
  setCameraLanes(camera, 0, { rotation: { yaw_deg: -178, pitch_deg: 1, roll_deg: 0 }, position: [1, 0, 0] });
  assert.deepEqual(camera.rotation.keyframes.map((key) => key.value), [{ yaw_deg: -178, pitch_deg: 1, roll_deg: 0 }]);
  assert.deepEqual(camera.position.value, [1, 0, 0]);
});
