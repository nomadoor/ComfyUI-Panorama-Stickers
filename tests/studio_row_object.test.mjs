// What the selection's row names (web_src/studio/row_object.js; docs/studio-ui.md, the owner table's row of the selected
// row's object): own Stickers, upstream working copies when the caller looks in the layers, the Camera and the scene.
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { upstreamWorkingLayers } from "../web_src/pano_upstream.js";
import { findSticker, keyframeOwner } from "../web_src/studio/row_object.js";

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
const world = (id) => ({ id, placement: "world", source: file(`${id}.png`) });
const load = (raw = {}) => loadSceneState({ version: 2, ...raw });

function withUpstream() {
  const state = load({ stickers: [world("own_1")] });
  const upstream = upstreamWorkingLayers([{ sceneState: load({ id: "up", stickers: [world("st_1")] }), ui: {} }], [], state.timeline.fps);
  return { state, upstream, upstreamId: upstream[0].sceneState.stickers[0].id };
}

test("an own Sticker is found with or without the upstream layers", () => {
  const { state, upstream } = withUpstream();
  assert.equal(findSticker(state, upstream, "own_1"), state.stickers[0]);
  assert.equal(findSticker(state, [], "own_1"), state.stickers[0]);
});

test("an upstream element is found by its working id only when the caller looks in the layers", () => {
  const { state, upstream, upstreamId } = withUpstream();
  assert.ok(upstreamId.startsWith("upstream:"));
  assert.equal(findSticker(state, upstream, upstreamId), upstream[0].sceneState.stickers[0]);
  assert.equal(findSticker(state, [], upstreamId), null, "the bar and the stage do not look there");
  assert.equal(findSticker(state, upstream, "gone"), null);
});

test("the Keyframe owner: the Camera (a default one for a state whose Camera is null), the scene, or a Sticker", () => {
  const { state, upstream, upstreamId } = withUpstream();
  assert.equal(keyframeOwner(state, upstream, "camera"), state.camera);
  assert.deepEqual(keyframeOwner({ ...load(), camera: null }, [], "camera"), load().camera);
  assert.equal(keyframeOwner(state, upstream, "scene"), state.scene);
  assert.equal(keyframeOwner(state, upstream, upstreamId), upstream[0].sceneState.stickers[0]);
  assert.equal(keyframeOwner(state, upstream, "own_1"), state.stickers[0]);
});
