import assert from "node:assert/strict";
import test from "node:test";

import { createSidePanelEvents } from "../web_src/editor/side_panel_events.js";
import { createSceneItems } from "../web_src/pano_scene_items.js";
import { evaluateSceneState } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { fileStickerRequests, sceneFilesOf, sceneRequest, stateAnimationClips } from "../web_src/pano_space.js";

// ADR 0043: an animated 3D file in the editor — what the views are asked to draw, where its item loads from, and the
// inspector's Clip and Speed rows.
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

// The inspector of a selected world Sticker, edited through the side panel's input and change events.
function inspector(sticker, { upstream = false } = {}) {
  const uiState = { sidePanel: { params: [{ key: "animation_clip", enabled: true }, { key: "animation_speed", enabled: true }] } };
  const steps = { history: 0, timeline: 0 };
  const target = upstream ? { ...sticker, origin: { layer: "up" } } : sticker;
  const events = createSidePanelEvents({ cameraV2: true, coverageWidget: null, editor: { frame: 0 }, node: {}, previewMode: false, runtime: {}, shotEditor: true, state: {}, studio: true, type: "stickers", uiState });
  events.connect({
    animationClipsOf: () => clips, getActiveCutoutShot: () => null, getSelected: () => null, getSelectedKind: () => null, isItemLocked: () => false,
    markObjectVisualsDirty() {}, pushHistory: () => { steps.history += 1; }, requestDraw() {}, selectedWorldSticker: () => target,
    stopTimelinePlayback() {}, syncTimeline: () => { steps.timeline += 1; }, updateSidePanel() {}, worldStickerEditable: () => true,
  });
  const send = (handler, key, value) => handler({ target: { closest: () => ({ value: String(value), getAttribute: (name) => (name === "data-param-key" ? key : null) }) } });
  return { target, steps, input: (key, value) => send(events.onSidePanelInput, key, value), change: (key, value) => send(events.onSidePanelChange, key, value) };
}

test("the inspector's Clip picks a clip by its name and Speed sets the speed in range, each change one Undo step", () => {
  const sticker = studio(undefined).stickers[0];
  const view = inspector(sticker);
  view.change("animation_clip", "1");
  assert.deepEqual(sticker.animation, { clip: "Idle", speed: 1 });
  view.input("animation_speed", 25);
  assert.deepEqual(sticker.animation, { clip: "Idle", speed: 10 });
  view.change("animation_speed", 0);
  assert.deepEqual(sticker.animation, { clip: "Idle", speed: 0.1 });
  assert.equal(view.steps.history, 2, "the two changes, not the input");
  // Each edit refreshes the timeline, whose Auto length counts the clip's cycle at its Speed.
  assert.equal(view.steps.timeline, 3);
  // A clip the file does not have changes nothing.
  view.change("animation_clip", "7");
  assert.deepEqual(sticker.animation, { clip: "Idle", speed: 0.1 });
  // An upstream element's animation is not edited (its override is a later step).
  const upstream = inspector(studio(undefined).stickers[0], { upstream: true });
  upstream.change("animation_clip", "1");
  assert.equal(upstream.target.animation, undefined);
  assert.equal(upstream.steps.history, 0);
});
