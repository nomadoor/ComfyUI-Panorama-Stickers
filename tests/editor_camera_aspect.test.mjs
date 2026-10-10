import assert from "node:assert/strict";
import test from "node:test";

import { createCamera } from "../web_src/editor/camera.js";
import { cameraShot } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

// docs/editor-interaction.md (the owner, 2026-10-11): an aspect preset of Panorama Studio's Camera gives its frame
// exactly that aspect, chosen from the Frame view's rail or elsewhere, at any lens curve, every time it is chosen.
function studioCamera(curve, mode = "frame") {
  const state = loadSceneState({ version: 2, camera: { aspect: 1.5, fov: { value: 100 }, curve: { value: curve } } });
  const base = cameraShot(state.camera, 0);
  state.shots = [{ ...base, position: [...base.position] }];
  const camera = createCamera({
    cameraV2: true, studio: true, shotEditor: true, type: "stickers", readOnly: false, state, initialShotBase: base,
    editor: { mode, frame: 0 }, runtime: { frameSafeRect: { x: 24, y: 24, w: 900, h: 500 } }, uiState: {},
  });
  camera.connect({ cameraShoots: () => true, isShotItem: () => true });
  return { state, camera };
}

test("an aspect preset gives the Camera exactly its ratio, from the Frame view or elsewhere, at any lens curve", () => {
  for (const curve of [1, 0.4]) {
    for (const mode of ["frame", "pano"]) {
      const { state, camera } = studioCamera(curve, mode);
      camera.setShotAspect(state.shots[0], "16:9");
      camera.syncCutoutShot();
      assert.equal(state.camera.aspect, 16 / 9, `${curve} ${mode}`);
      // Chosen again after the aspect drifted (an older state), it is exact again.
      state.camera.aspect = 16 / 9 * 1.001;
      camera.syncCutoutShot();
      camera.setShotAspect(state.shots[0], "16:9");
      camera.syncCutoutShot();
      assert.equal(state.camera.aspect, 16 / 9, `${curve} ${mode} again`);
      // The portrait flip and a custom ratio are exact too.
      camera.rotateCutoutAspect90(state.shots[0]);
      camera.syncCutoutShot();
      assert.equal(state.camera.aspect, 9 / 16, `${curve} ${mode} flipped`);
      assert.equal(camera.applyCutoutAspectCustom(state.shots[0], 21, 9), true);
      camera.syncCutoutShot();
      assert.equal(state.camera.aspect, 21 / 9, `${curve} ${mode} custom`);
    }
  }
});
