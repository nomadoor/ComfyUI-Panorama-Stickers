import assert from "node:assert/strict";
import test from "node:test";

import { createFrameView } from "../web_src/editor/frame_view.js";
import { cameraShot, setCameraShot } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

// The Frame view of Panorama Studio with World content, its Camera's shot and what it calls.
function setup({ readOnly = false, locked = false, shot = true } = {}) {
  const calls = [];
  const current = shot ? { yaw_deg: 90, pitch_deg: 30, roll_deg: 10, hFOV_deg: 60, vFOV_deg: 40, position: [1, 2, 3], locked } : null;
  const frameView = createFrameView({ cameraV2: true, canvas: {}, editor: { mode: "frame" }, readOnly, runtime: {}, shotEditor: true, uiState: {} });
  frameView.connect({
    commitAndRefreshNode: () => calls.push("commit"),
    getActiveCutoutShot: () => current,
    hasSpaceContent: () => true,
    pushHistory: () => calls.push("history"),
    stopTimelinePlayback: () => calls.push("stop"),
    updateSidePanel: () => calls.push("panel"),
  });
  return { frameView, calls, shot: current };
}

const forward = { forward: 1, right: 0, up: 0 };

test("the keys move the Camera's shot itself, level, and only its position", () => {
  const { frameView, calls, shot } = setup();
  assert.equal(frameView.isFreeFrameView(), true);
  assert.equal(frameView.moveFrameByKeys(forward, 2), true);
  // Yaw 90 faces +X; the pitch and the roll do not tilt the move.
  assert.deepEqual(shot.position.map((value) => Math.round(value * 1e9) / 1e9), [3, 2, 3]);
  assert.deepEqual([shot.yaw_deg, shot.pitch_deg, shot.roll_deg, shot.hFOV_deg], [90, 30, 10, 60]);
  assert.deepEqual(calls, ["stop"], "it stops playback as a drag does, and makes no Undo step yet");
});

test("a key press is one Undo step, taken when it ends", () => {
  const { frameView, calls } = setup();
  frameView.moveFrameByKeys(forward, 1);
  frameView.moveFrameByKeys(forward, 1);
  calls.length = 0;
  assert.equal(frameView.endFrameKeyMove(), true);
  assert.deepEqual(calls, ["history", "commit", "panel"]);
  assert.equal(frameView.endFrameKeyMove(), false, "once");
  assert.deepEqual(calls, ["history", "commit", "panel"]);
  const idle = setup();
  assert.equal(idle.frameView.endFrameKeyMove(), false, "keys that moved nothing make no step");
  assert.deepEqual(idle.calls, []);
});

test("a read-only editor, a locked Camera, no Camera or no move leaves the Camera", () => {
  for (const options of [{ readOnly: true }, { locked: true }, { shot: false }]) {
    const { frameView, calls, shot } = setup(options);
    assert.equal(frameView.moveFrameByKeys(forward, 1), false, JSON.stringify(options));
    if (shot) assert.deepEqual(shot.position, [1, 2, 3]);
    assert.deepEqual(calls, []);
  }
  const { frameView, calls } = setup();
  assert.equal(frameView.moveFrameByKeys({ forward: 0, right: 0, up: 0 }, 1), false);
  assert.equal(frameView.moveFrameByKeys(forward, 0), false);
  assert.deepEqual(calls, []);
});

// The shot goes to the Camera the way a drag's does (camera.js syncCutoutShot -> setCameraShot): the
// position Lane alone, by the recording rule.
test("the moved shot records the position Lane alone, by the recording rule", () => {
  const moved = (camera, frame) => {
    const base = cameraShot(camera, frame);
    const { frameView } = setup();
    const shot = { ...base, position: [...base.position] };
    frameView.connect({ getActiveCutoutShot: () => shot, hasSpaceContent: () => true, stopTimelinePlayback() {} });
    frameView.moveFrameByKeys({ forward: 0, right: 0, up: 1 }, 1);
    setCameraShot(camera, frame, shot, base);
    return camera;
  };
  const keys = (lane) => lane.keyframes.map((key) => [key.frame, key.value.map((value) => Math.round(value * 1e9) / 1e9)]);
  const rotation = { keyframes: [{ frame: 0, value: { yaw_deg: 0 } }, { frame: 10, value: { yaw_deg: 90 } }] };
  // Without Keyframes the static value changes; the rotation's Keyframes stay as they are.
  const still = moved(loadSceneState({ version: 2, camera: { position: { value: [0, 0, 0] }, rotation } }).camera, 5);
  assert.deepEqual(still.position, { value: [0, 1, 0], keyframes: [] });
  assert.deepEqual(still.rotation.keyframes.map((key) => key.frame), [0, 10]);
  // With Keyframes, between them a Keyframe is added at the playhead from the evaluated value.
  const keyed = moved(loadSceneState({ version: 2, camera: { position: { keyframes: [{ frame: 0, value: [0, 0, 0] }, { frame: 10, value: [10, 0, 0] }] } } }).camera, 5);
  assert.deepEqual(keys(keyed.position), [[0, [0, 0, 0]], [5, [5, 1, 0]], [10, [10, 0, 0]]]);
  // On a Keyframe, that Keyframe changes.
  const onKey = moved(loadSceneState({ version: 2, camera: { position: { keyframes: [{ frame: 0, value: [0, 0, 0] }, { frame: 10, value: [10, 0, 0] }] } } }).camera, 10);
  assert.deepEqual(keys(onKey.position), [[0, [0, 0, 0]], [10, [10, 1, 0]]]);
});
