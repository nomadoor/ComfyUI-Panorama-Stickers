import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { sceneAtVideoFps, timelineFpsLocked, videoTimelineFps } from "../web_src/pano_video_fps.js";

// A node with inputs linked by type (pano_preview_video.js videoLinked reads node.getInputLink(slot).type).
function nodeWith(links) {
  const inputs = Object.keys(links).map((name) => ({ name, link: 1 }));
  return { graph: {}, inputs, getInputLink: (slot) => ({ type: links[inputs[slot].name] }) };
}

test("a VIDEO's fps from the node's result is brought into the range a state keeps", () => {
  assert.equal(videoTimelineFps({}, { uiValue: () => [30] }), 30);
  assert.equal(videoTimelineFps({}, { uiValue: () => [2400] }), 1000);
  // No VIDEO in the result: no fps.
  assert.equal(videoTimelineFps({}, { uiValue: () => undefined }), null);
});

test("the fps field is locked by a VIDEO's fps in the result or by a VIDEO link on background, bg_media or sticker", () => {
  assert.equal(timelineFpsLocked(24, nodeWith({})), true);
  assert.equal(timelineFpsLocked(null, nodeWith({ bg_media: "VIDEO" })), true);
  assert.equal(timelineFpsLocked(null, nodeWith({ sticker: "VIDEO" })), true);
  assert.equal(timelineFpsLocked(null, nodeWith({ bg_media: "IMAGE" })), false);
  // Panorama Studio's background input is `background` since ADR 0048.
  assert.equal(timelineFpsLocked(null, nodeWith({ background: "VIDEO" })), true);
  assert.equal(timelineFpsLocked(null, nodeWith({ background: "IMAGE" })), false);
});

test("an opened state is rebased to the VIDEO's fps, keeping its times in seconds", () => {
  const scene = loadSceneState({ version: 2, timeline: { fps: 24, length: 48 } });
  const rebased = sceneAtVideoFps(scene, 12);
  assert.equal(rebased.timeline.fps, 12);
  assert.equal(rebased.timeline.length, 24);
  // The same fps, no fps or one out of range brought to the same: the state itself.
  assert.equal(sceneAtVideoFps(scene, 24), scene);
  assert.equal(sceneAtVideoFps(scene, null), scene);
  const fast = loadSceneState({ version: 2, timeline: { fps: 1000 } });
  assert.equal(sceneAtVideoFps(fast, 2400), fast);
});
