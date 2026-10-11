import assert from "node:assert/strict";
import test from "node:test";

import { FRAME_WHEEL_NOTICE, createFrameView } from "../web_src/editor/frame_view.js";
import { deriveVerticalFovDeg, getCutoutCameraParams, shotFovMaxDeg } from "../web_src/pano_cutout_view_math.js";

// The Frame view's wheel (docs/editor-interaction.md "Frame 表示のホイール") over a 1280 x 720 canvas with the rails'
// safe rect: Panorama Studio's Camera (`studio`) with World content or without, or the legacy Cutout's shot.
function setup({ studio = true, content = false, locked = false, aspect = 16 / 9 } = {}) {
  const timers = [];
  globalThis.window = { setTimeout: (run, ms) => timers.push({ run, ms }), clearTimeout() {} };
  let now = 1000;
  const clock = Object.getOwnPropertyDescriptor(performance, "now");
  Object.defineProperty(performance, "now", { configurable: true, value: () => now });
  const shot = { id: "camera", yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 90, vFOV_deg: deriveVerticalFovDeg(90, aspect), locked };
  if (studio) Object.assign(shot, { curve: 1, position: [0, 0, 0] });
  const calls = [];
  const editor = { mode: "frame" };
  const frameView = createFrameView({
    cameraV2: studio, canvas: { width: 1280, height: 720 }, editor, readOnly: false,
    editorView: { contentRevision: () => 1, pickSurface: () => null },
    runtime: { frameSafeRect: { x: 96, y: 72, w: 1088, h: 576 } }, shotEditor: true, uiState: {},
  });
  frameView.connect({
    contentSphere: () => ({ center: [0, 0, -5], radius: 2 }),
    getActiveCutoutShot: () => shot,
    hasSpaceContent: () => content,
    requestDraw: () => calls.push("draw"),
    shotViewCamera: () => ({ quaternion: { x: 0, y: 0, z: 0, w: 1 }, fovY_deg: 60, aspect }),
    spaceScale: () => 2,
    stopTimelinePlayback: () => calls.push("stop"),
    syncCutoutShot() {},
    updateSidePanel() {},
    // The legacy Cutout's shot takes its FOV pair as it is.
    writePose: (item, pose) => { calls.push("writePose"); Object.assign(item, pose); },
  });
  const restore = () => {
    if (clock) Object.defineProperty(performance, "now", clock);
    else delete performance.now;
  };
  return { frameView, shot, calls, timers, editor, restore, wait: (ms) => { now += ms; } };
}

test("Panorama Studio's Frame view wheel dollies the Camera toward the point under the pointer and keeps its FOV", () => {
  const view = setup({ content: true });
  view.frameView.wheelFrameView({ x: 640, y: 360 }, -1);
  assert.ok(view.shot.position[2] < 0, `moved forward to ${view.shot.position}`);
  assert.equal(view.shot.hFOV_deg, 90);
  view.frameView.wheelFrameView({ x: 640, y: 360 }, 1);
  view.frameView.wheelFrameView({ x: 640, y: 360 }, 1);
  assert.ok(view.shot.position[2] > 0, "and back past where it started");
  assert.equal(view.calls.includes("writePose"), false);
  assert.equal(view.frameView.frameWheelNotice(), "");
  view.restore();
});

test("without World content the wheel leaves the Camera and says how to zoom, for a while", () => {
  const view = setup({ content: false });
  const before = structuredClone(view.shot);
  view.frameView.wheelFrameView({ x: 640, y: 360 }, -1);
  assert.deepEqual(view.shot, before, "the Camera does not move, nor its FOV");
  assert.deepEqual(view.calls, ["draw"], "nothing is written and playback goes on; the stage draws its line");
  assert.equal(view.frameView.frameWheelNotice(), FRAME_WHEEL_NOTICE);
  assert.equal(FRAME_WHEEL_NOTICE, "The wheel moves the Camera; change the H FOV to zoom");
  // It goes 2 seconds after the last wheel, which draws the stage again then.
  view.wait(1500);
  view.frameView.wheelFrameView({ x: 640, y: 360 }, 1);
  view.wait(1500);
  assert.equal(view.frameView.frameWheelNotice(), FRAME_WHEEL_NOTICE);
  view.wait(600);
  assert.equal(view.frameView.frameWheelNotice(), "");
  assert.deepEqual(view.timers.map((timer) => timer.ms), [2000, 2000]);
  // Only the Frame view shows it.
  view.wait(-600);
  view.editor.mode = "pano";
  assert.equal(view.frameView.frameWheelNotice(), "");
  view.restore();
});

// The legacy Cutout's Frame view keeps its FOV wheel (its shots have no position).
for (const [label, aspect] of [["16:9", 16 / 9], ["1:1", 1]]) {
  test(`the legacy Cutout's Frame view wheel widens a ${label} shot from 90° to its limit and narrows it again`, () => {
    const view = setup({ studio: false, aspect });
    for (let steps = 0; steps < 200; steps += 1) view.frameView.wheelFrameView({ x: 640, y: 360 }, 1);
    assert.ok(Math.abs(view.shot.hFOV_deg - shotFovMaxDeg(1)) < 1e-9, `stopped at ${view.shot.hFOV_deg}`);
    assert.ok(Math.abs(getCutoutCameraParams(view.shot).aspect - aspect) < 1e-9);
    view.frameView.wheelFrameView({ x: 640, y: 360 }, -1);
    assert.ok(view.shot.hFOV_deg < shotFovMaxDeg(1));
    assert.equal(view.frameView.frameWheelNotice(), "");
    view.restore();
  });
}

test("the legacy Cutout's wheel leaves a locked shot", () => {
  const view = setup({ studio: false, locked: true });
  view.frameView.wheelFrameView({ x: 640, y: 360 }, 1);
  assert.equal(view.shot.hFOV_deg, 90);
  assert.equal(view.calls.includes("writePose"), false);
  view.restore();
});
