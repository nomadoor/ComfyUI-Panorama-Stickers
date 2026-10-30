import assert from "node:assert/strict";
import test from "node:test";

import { shotCamera } from "../web_src/pano_editor_view.js";
import { cameraShot } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { liveErpView } from "../web_src/studio/erp_preview.js";
import { outputErpInput, outputFrameInput } from "../web_src/studio/output_picture.js";
import { STAGE_CLEAR_COLOR } from "../web_src/studio/stage_view.js";

const state = loadSceneState({
  version: 2,
  camera: { projection: "perspective", aspect: 16 / 9, yaw_deg: { value: 30 }, pitch_deg: { value: -10 }, hFOV_deg: { value: 70 }, position: { value: [1, 1.5, -2] } },
});
const shot = cameraShot(state.camera, 0);
const content = { layers: [{ kind: "sticker", id: "a" }], space: { stickers: [{ id: "w" }] } };
const background = { media: {}, revision: "bg", coverage: 360 };

test("the Frame picture looks through the Camera, without the ground grid, with the stage's content", () => {
  const input = outputFrameInput({ shot, ground: -1.5, radius: 50, width: 320, height: 180, background, content, backgroundColor: "#00ff00", owner: "node" });
  assert.deepEqual(input.camera.quaternion, shotCamera(shot).quaternion);
  assert.deepEqual(input.camera.position, shot.position);
  assert.ok(input.camera.near > 0 && input.camera.far > input.camera.near);
  assert.equal(input.space.ground, null);
  assert.deepEqual(input.space.stickers, content.space.stickers);
  assert.equal(input.layers, content.layers);
  assert.equal(input.background, background);
  assert.equal(input.owner, "node");
  // Without a rect it is drawn at its own size (the shared view's canvas); a pinhole Camera has no lens image.
  assert.equal(input.rect, null);
  assert.equal(input.width, 320);
  assert.equal(input.height, 180);
  assert.equal(input.lens, undefined);
});

test("the Frame picture in a rect of the stage's canvas keeps that rect", () => {
  const rect = { x: 0, y: 400, w: 320, h: 180 };
  const input = outputFrameInput({ shot, ground: -1.5, radius: 50, width: 320, height: 180, background: null, content: null, backgroundColor: "#000000", owner: "studio-output", rect, canvasWidth: 1920, canvasHeight: 1080 });
  assert.deepEqual(input.rect, rect);
  assert.equal(input.width, undefined);
});

test("a lens Camera draws through its lens image, past its reach the background color", () => {
  const lensShot = { ...shot, curve: 0.5 };
  const input = outputFrameInput({ shot: lensShot, ground: -1.5, radius: 50, width: 320, height: 180, background: null, content: null, backgroundColor: "#00ff00", owner: "node" });
  assert.ok(input.lens);
  assert.equal(input.lens.background, "#00ff00");
  assert.ok(input.lens.kind);
});

test("the Panorama picture is the live ERP from the Camera's position, over its range", () => {
  const canvas = {};
  const input = outputErpInput({ shot, erpRange: 180, ground: -1.5, radius: 50, width: 200, height: 200, background, content, owner: "node", canvas });
  assert.deepEqual(input.view, liveErpView(shot, 180));
  assert.equal(input.canvas, canvas);
  assert.equal(input.width, 200);
  assert.equal(input.space.ground, null);
  assert.deepEqual(input.space.stickers, content.space.stickers);
  assert.equal(input.clearColor, STAGE_CLEAR_COLOR);
  assert.ok(input.near > 0 && input.far > input.near);
  // The Camera tab's frame draws the grid.
  assert.ok(outputErpInput({ shot, erpRange: 360, ground: -1.5, radius: 50, width: 2, height: 1, background, content, owner: "tab", canvas, gridHidden: false }).space.ground);
});
