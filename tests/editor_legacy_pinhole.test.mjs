// docs/legacy-node-surfaces.md: the legacy editor does not read `curve` and always draws a pinhole, as Python's legacy
// nodes do. A v1 Sticker or shot with curve 0.5 is placed and hit tested as with curve 1.
import assert from "node:assert/strict";
import test from "node:test";

import { createProjection } from "../web_src/editor/projection.js";
import { parsePanoEditorState } from "../web_src/pano_editor_state.js";

function projection(shots = []) {
  const canvas = { width: 800, height: 600 };
  const made = createProjection({ backgroundCanvas: canvas, canvas, editor: { mode: "pano", viewYaw: 0, viewPitch: 0, viewFov: 90 } });
  made.connect({ getActiveCutoutShot: () => null, getFrameViewRect: () => null, isShotItem: (item) => shots.includes(item), poseOf: (item) => item, projectSceneItemDir: () => null, shortestWrappedDelta: (a, b) => b - a });
  return made;
}

const sticker = { id: "s", yaw_deg: 20, pitch_deg: 10, rot_deg: 15, hFOV_deg: 70, vFOV_deg: 50 };
const shot = { id: "shot", yaw_deg: -30, pitch_deg: 5, roll_deg: 0, hFOV_deg: 90, vFOV_deg: 60 };

test("the legacy editor's Sticker and shot frames ignore a lens curve", () => {
  const p = projection();
  for (const item of [sticker, shot]) {
    const lens = { ...item, curve: 0.5 };
    assert.deepEqual(p.getStickerFrame(lens), p.getStickerFrame(item));
    assert.deepEqual(p.stickerCornersDir(lens), p.stickerCornersDir(item));
    assert.deepEqual(p.stickerSampleDir(lens, 0.9, 0.2), p.stickerSampleDir(item, 0.9, 0.2));
    // Hit testing maps a direction into the frame: a point far off the axis lands where the pinhole puts it.
    const dir = p.stickerSampleDir(item, 0.95, 0.05);
    assert.deepEqual(p.worldDirToFrameLocalPoint(lens, dir), p.worldDirToFrameLocalPoint(item, dir));
  }
});

test("a v1 state is read without its Stickers' and shots' curve", () => {
  const text = JSON.stringify({
    version: 1,
    stickers: [{ ...sticker, asset_id: "a", curve: 0.5, initial_pose: { ...sticker, curve: 0.5 } }],
    shots: [{ ...shot, curve: 0.5 }],
  });
  const lensState = parsePanoEditorState(text);
  const pinState = parsePanoEditorState(JSON.stringify({
    version: 1,
    stickers: [{ ...sticker, asset_id: "a", initial_pose: { ...sticker } }],
    shots: [{ ...shot }],
  }));
  assert.deepEqual(lensState.stickers, pinState.stickers);
  assert.deepEqual(lensState.shots, pinState.shots);
});

// docs/threejs-spark-integration.md "Cutout エディタ": a shot's roll is its roll_deg only; a Sticker keeps its rot_deg.
test("the legacy editor turns a shot's frame by its roll_deg only, and a Sticker's by its rot_deg", () => {
  const oldShot = { ...shot, rot_deg: 30 };
  const rolled = { ...shot, roll_deg: 30 };
  const p = projection([oldShot, rolled, shot]);
  assert.deepEqual(p.getStickerFrame(oldShot), p.getStickerFrame(shot));
  assert.notDeepEqual(p.getStickerFrame(rolled), p.getStickerFrame(shot));
  const turned = { ...sticker, rot_deg: 30 };
  assert.notDeepEqual(p.getStickerFrame(turned), p.getStickerFrame({ ...sticker, rot_deg: 0 }));
});
