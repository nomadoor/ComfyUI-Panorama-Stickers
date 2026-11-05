import assert from "node:assert/strict";
import test from "node:test";

import { createFrameView } from "../web_src/editor/frame_view.js";
import { deriveVerticalFovDeg, getCutoutCameraParams, shotFovMaxDeg } from "../web_src/pano_cutout_view_math.js";

// The Frame view's wheel (docs/editor-interaction.md "Frame 表示のホイール") over a 1280 x 720 canvas with the rails'
// safe rect: the legacy Cutout's shot.
function setup({ locked = false, aspect = 16 / 9 } = {}) {
  const timers = [];
  let now = 1000;
  const clock = Object.getOwnPropertyDescriptor(performance, "now");
  Object.defineProperty(performance, "now", { configurable: true, value: () => now });
  const shot = { id: "shot_1", yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 90, vFOV_deg: deriveVerticalFovDeg(90, aspect), locked };
  const calls = [];
  const editor = { mode: "frame" };
  const frameView = createFrameView({
    canvas: { width: 1280, height: 720 }, editor, readOnly: false,
    runtime: { frameSafeRect: { x: 96, y: 72, w: 1088, h: 576 } }, shotEditor: true, uiState: {},
    timers: { set: (run, ms) => timers.push({ run, ms }), clear() {} },
  });
  frameView.connect({
    getActiveCutoutShot: () => shot,
    requestDraw: () => calls.push("draw"),
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

// The legacy Cutout's Frame view keeps its FOV wheel (its shots have no position).
for (const [label, aspect] of [["16:9", 16 / 9], ["1:1", 1]]) {
  test(`the legacy Cutout's Frame view wheel widens a ${label} shot from 90° to its limit and narrows it again`, () => {
    const view = setup({ aspect });
    for (let steps = 0; steps < 200; steps += 1) view.frameView.wheelFrameView({ x: 640, y: 360 }, 1);
    assert.ok(Math.abs(view.shot.hFOV_deg - shotFovMaxDeg(1)) < 1e-9, `stopped at ${view.shot.hFOV_deg}`);
    assert.ok(Math.abs(getCutoutCameraParams(view.shot).aspect - aspect) < 1e-9);
    view.frameView.wheelFrameView({ x: 640, y: 360 }, -1);
    assert.ok(view.shot.hFOV_deg < shotFovMaxDeg(1));
    view.restore();
  });
}

test("the legacy Cutout's wheel leaves a locked shot", () => {
  const view = setup({ locked: true });
  view.frameView.wheelFrameView({ x: 640, y: 360 }, 1);
  assert.equal(view.shot.hFOV_deg, 90);
  assert.equal(view.calls.includes("writePose"), false);
  view.restore();
});
