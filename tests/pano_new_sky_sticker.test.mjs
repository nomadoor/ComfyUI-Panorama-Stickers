import assert from "node:assert/strict";
import test from "node:test";
import { newSceneSticker } from "../web_src/pano_editor_state.js";
import { LENS_CURVE_DEFAULT } from "../web_src/pano_lens.js";
import { SKY_STICKER_LANES } from "../web_src/pano_scene_state.js";
import { isTimed, ownerTimed } from "../web_src/pano_timeline.js";

const pose = { yaw_deg: 30, pitch_deg: -10, rot_deg: 5, hFOV_deg: 40, vFOV_deg: 30 };

test("a new sky Sticker has every Lane a loaded one has, so the Timeline can read it", () => {
  const sticker = newSceneSticker("sticker_1", { kind: "file", file: "a.png" }, pose, 0);
  for (const [name] of SKY_STICKER_LANES) {
    assert.ok(sticker[name], `lane ${name}`);
    assert.deepEqual(sticker[name].keyframes, []);
  }
  assert.equal(ownerTimed(sticker), false);
  assert.equal(isTimed({ background: { clip: { start: 0, in: 0, duration: null } }, scene: { clip: { start: 0, in: 0, duration: null } }, stickers: [sticker] }), false);
});

test("a new sky Sticker keeps the editor's pose", () => {
  const sticker = newSceneSticker("sticker_1", { kind: "file", file: "a.png" }, pose, 3);
  assert.deepEqual(sticker.direction.value, { yaw_deg: 30, pitch_deg: -10 });
  assert.equal(sticker.roll.value, 5);
  assert.deepEqual(sticker.size.value, { hFOV_deg: 40, vFOV_deg: 30 });
  assert.equal(sticker.opacity.value, 1);
  assert.equal(sticker.curve.value, LENS_CURVE_DEFAULT);
  assert.equal(sticker.z_index, 3);
});
