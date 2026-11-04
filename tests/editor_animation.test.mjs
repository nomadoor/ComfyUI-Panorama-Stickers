import assert from "node:assert/strict";
import test from "node:test";

import { createSidePanelEvents } from "../web_src/editor/side_panel_events.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

// ADR 0043: the old editor's inspector Clip and Speed rows of an animated 3D file.
const clips = [{ name: "Walking", duration: 2 }, { name: "Idle", duration: 4 }];

function studio(animation, clip = { start: 12, in: 2 }) {
  return loadSceneState({
    version: 2,
    timeline: { fps: 24 },
    scene: { clip, animation },
    stickers: [{ id: "robot", placement: "world", source: { kind: "file", filename: "robot.glb" }, clip, animation }],
  });
}

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
