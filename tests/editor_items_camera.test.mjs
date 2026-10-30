import assert from "node:assert/strict";
import test from "node:test";

import { createItems } from "../web_src/editor/items.js";
import { cameraShot } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

// docs/editor-interaction.md (the owner, 2026-10-11): an edit of Panorama Studio's Camera's shot writes the state's
// own fields: its angle of view to `fov`, its pose to the shot (which syncCutoutShot writes back); its V FOV is
// computed, never written.
test("a pose written to the Camera's shot puts its angle of view in the Camera's fov and leaves its aspect", () => {
  const state = loadSceneState({ version: 2, camera: { aspect: 1.5, fov: { value: 80 } } });
  const shot = cameraShot(state.camera, 0);
  const items = createItems({ cameraV2: true, editor: { frame: 0 }, sceneV2: true, state, stateV2: true, type: "stickers" });
  items.writePose(shot, { hFOV_deg: 70, vFOV_deg: 10, yaw_deg: 5 });
  assert.deepEqual([state.camera.fov.value, state.camera.aspect], [70, 1.5]);
  assert.deepEqual([shot.yaw_deg, shot.hFOV_deg], [5, 80]);
  // A legacy Cutout shot keeps its pair.
  const legacy = { id: "shot_1", hFOV_deg: 60, vFOV_deg: 40 };
  createItems({ cameraV2: false, editor: { frame: 0 }, sceneV2: false, state: { shots: [legacy] }, stateV2: false, type: "cutout" }).writePose(legacy, { hFOV_deg: 70, vFOV_deg: 50 });
  assert.deepEqual([legacy.hFOV_deg, legacy.vFOV_deg], [70, 50]);
});
