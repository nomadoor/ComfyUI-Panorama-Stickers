import assert from "node:assert/strict";
import test from "node:test";

import { createFrameView } from "../web_src/editor/frame_view.js";
import { deriveVerticalFovDeg, getCutoutCameraParams, shotFovMaxDeg } from "../web_src/pano_cutout_view_math.js";

// The Frame view of Panorama Studio's Camera without World content, where the wheel changes the angle of view
// (docs/editor-interaction.md), over a 1280 x 720 canvas with the rails' safe rect.
function setup(curve, aspect) {
  globalThis.window ??= { setTimeout: () => 1, clearTimeout() {} };
  const shot = { id: "camera", yaw_deg: 0, pitch_deg: 0, roll_deg: 0, curve, hFOV_deg: 90, vFOV_deg: deriveVerticalFovDeg(90, aspect, curve) };
  const frameView = createFrameView({
    cameraV2: true, canvas: { width: 1280, height: 720 }, editor: { mode: "frame" }, readOnly: false,
    runtime: { frameSafeRect: { x: 96, y: 72, w: 1088, h: 576 } }, shotEditor: true, uiState: {},
  });
  frameView.connect({
    getActiveCutoutShot: () => shot,
    hasSpaceContent: () => false,
    stopTimelinePlayback() {},
    syncCutoutShot() {},
    updateSidePanel() {},
    // items.js writePose writes the angle of view to the Camera's fov, from which the shot is derived again.
    writePose: (item, pose) => Object.assign(item, { hFOV_deg: pose.hFOV_deg, vFOV_deg: deriveVerticalFovDeg(pose.hFOV_deg, aspect, curve) }),
  });
  return { frameView, shot };
}

for (const curve of [1, 0.5]) {
  for (const [label, aspect] of [["16:9", 16 / 9], ["1:1", 1]]) {
    test(`the Frame view's wheel widens a κ ${curve} ${label} Camera from 90° to the inspector's limit`, () => {
      const { frameView, shot } = setup(curve, aspect);
      let steps = 0;
      while (steps < 200 && frameView.zoomFrameViewAt({ x: 640, y: 360 }, 1)) steps += 1;
      assert.ok(Math.abs(shot.hFOV_deg - shotFovMaxDeg(curve)) < 1e-9, `stopped at ${shot.hFOV_deg}`);
      assert.ok(Math.abs(getCutoutCameraParams(shot).aspect - aspect) < 1e-9);
      assert.equal(frameView.zoomFrameViewAt({ x: 640, y: 360 }, 1), false, "at the limit the wheel does nothing");
      assert.equal(frameView.zoomFrameViewAt({ x: 640, y: 360 }, -1), true, "and it narrows again");
    });
  }
}
