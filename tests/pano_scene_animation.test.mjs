import assert from "node:assert/strict";
import test from "node:test";

import { createSceneItems } from "../web_src/pano_scene_items.js";
import { evaluateSceneState } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { animationMetaOf } from "../web_src/pano_animation.js";
import { fileStickerRequests, frameSphere, sceneContentBox, sceneFilesOf, sceneRequest, stateAnimationClips } from "../web_src/pano_space.js";

// ADR 0043: an animated 3D file in the views — what they are asked to draw, where its item loads from, and the box
// Frame Selected fits.
const clips = [{ name: "Walking", duration: 2 }, { name: "Idle", duration: 4 }];
const url = (entry) => `/view?filename=${entry.filename}`;

function studio(animation, clip = { start: 12, in: 2 }) {
  return loadSceneState({
    version: 2,
    timeline: { fps: 24 },
    scene: { clip, animation },
    stickers: [{ id: "robot", placement: "world", source: { kind: "file", filename: "robot.glb" }, clip, animation }],
  });
}

test("an animated file's request carries its original and the pose at the clip frame", () => {
  const state = studio({ clip: "Idle", speed: 1.5 });
  const evaluated = evaluateSceneState(state, 34);
  // A 3D file Sticker, with its editor file's animation (pano_file_3d.js file3dEditorFileOf).
  const editorFile = () => ({ kind: "mesh", unlit: false, url: "/view?filename=e.glb", generation: 0, animation: { src: "/view?filename=robot.glb", clips } });
  const [{ request }] = fileStickerRequests(state, evaluated, editorFile);
  // Clip frame 34 − (12 − 2) = 24 is 1 s; the mixer plays the clip at index 1 at timeScale 1.5.
  assert.deepEqual(request.animation, { src: "/view?filename=robot.glb", clip: 1, speed: 1.5, time: 1 });
  // A static file's has none.
  assert.equal("animation" in fileStickerRequests(state, evaluated, () => ({ kind: "mesh", unlit: true, url: "/e.glb", generation: 0 }))[0].request, false);
  // The `scene` input's comes from its meta; a name it does not have plays the first clip.
  const files = sceneFilesOf([{ filename: "scene.glb" }], [{ kind: "mesh", unlit: false, animation: { source: { filename: "orig.glb" }, clips } }], url);
  assert.deepEqual(files.animation, { src: "/view?filename=orig.glb", clips });
  const scene = sceneRequest(files, evaluated.scene, { clip: "Run", speed: 1 }, 24);
  assert.deepEqual(scene.animation, { src: "/view?filename=orig.glb", clip: 0, speed: 1, time: 1 });
  // A batch of several items is not an animated file.
  assert.equal("animation" in sceneFilesOf([{ filename: "a.glb" }, { filename: "b.glb" }], [{ kind: "mesh", animation: { source: { filename: "o.glb" }, clips } }], url), false);
  // The clips the Auto length counts.
  assert.deepEqual(stateAnimationClips(state, { sceneFiles: files, editorFile }), { scene: clips, stickers: { robot: clips } });
});

test("an animated file's item loads from its editor GLB with its original, and anew when the original changes", async () => {
  const loads = [];
  const items = createSceneItems({ load: async (kind, src) => { loads.push(src); return { object: {}, box: null, size: 1 }; }, dispose() {} });
  const input = (src) => ({ kind: "mesh", url: "e.glb", urls: ["e.glb"], animation: { src, clip: 0, speed: 1, time: 0 } });
  items.request(input("robot.glb"));
  await new Promise((resolve) => setTimeout(resolve, 0));
  // Another pose is the same item.
  items.request({ ...input("robot.glb"), animation: { src: "robot.glb", clip: 1, speed: 2, time: 3 } });
  await new Promise((resolve) => setTimeout(resolve, 0));
  items.request(input("other.glb"));
  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.deepEqual(loads, [{ url: "e.glb", animation: "robot.glb" }, { url: "e.glb", animation: "other.glb" }]);
});

// docs/studio-node.md「中身の箱」: Frame Selected of an animated 3D file frames its meta's content box (the first clip's
// pose at time 0, in the `scene` glTF frame), not the box of the bind pose its editor GLB loads with.
test("an animated item's Frame Selected frames the meta box, not the bind GLB's box", () => {
  const box = { min: [-1, 0, -1], max: [1, 2, 1] };
  const meta = { source: { filename: "robot.glb" }, clips, box };
  assert.deepEqual(animationMetaOf(meta, url).box, box);
  assert.equal("box" in animationMetaOf({ ...meta, box: { min: [0, 0], max: [1, 1, 1] } }, url), false, "not a box");
  const state = studio({ clip: "Idle", speed: 1 });
  const evaluated = evaluateSceneState(state, 12);
  const editorFile = () => ({ kind: "mesh", unlit: false, url: "/view?filename=e.glb", generation: 0, animation: animationMetaOf(meta, url) });
  const [{ request }] = fileStickerRequests(state, evaluated, editorFile);
  // The editor GLB's own box: the bind pose, a hundredth of the posed model (Xbot).
  const bind = { min: [-0.01, 0, -0.01], max: [0.01, 0.02, 0.01] };
  const value = { ...evaluated.stickers[0], position: [0, 0, 0], scale: 1 };
  const sphere = frameSphere(null, {
    sticker: state.stickers[0], value, plane: null,
    box: sceneContentBox(request, bind),
  });
  assert.deepEqual(sphere.center, [0, 1, 0]);
  // A static file keeps its loaded box.
  assert.deepEqual(sceneContentBox({ kind: "mesh" }, bind), bind);
  assert.ok(Math.abs(sphere.radius - Math.sqrt(3)) < 1e-9, `radius ${sphere.radius}`);
});
