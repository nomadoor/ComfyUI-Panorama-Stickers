// The Timeline fps a VIDEO input sets (ADR 0024, docs/timeline-ui.md "タイムラインの表示"): the fps the node's current
// result brings (`pano_timeline_fps`), whether the editor's fps field is locked by it, and the state an editor opens
// on, rebased to it. Both editors (the old one, pano_editor.js and editor/timeline.js, and the new one,
// studio/editor.js) use these.
import { isNodeOutputMediaCurrent, videoLinked } from "./pano_preview_video.js";
import { rebaseSceneState, timelineFps } from "./pano_scene_state.js";

// The inputs whose VIDEO sets the Timeline fps (the background is `background`, `bg_media` before ADR 0048).
export const VIDEO_FPS_INPUTS = ["bg_media", "background", "sticker"];

// The Timeline fps a VIDEO input set in the node's current result (ADR 0024), or null. It is brought into the range a
// state keeps, so a faster VIDEO compares equal to the state rebased to it. `media` reads the node's result
// (pano_comfy_media.js: its `uiValue`).
export function videoTimelineFps(node, media) {
  if (!isNodeOutputMediaCurrent(node, "background") || !isNodeOutputMediaCurrent(node, "external-sticker")) return null;
  const fps = media.uiValue(node, "pano_timeline_fps");
  return Array.isArray(fps) ? timelineFps(fps[0]) : null;
}

// Whether the Timeline fps cannot be changed: a VIDEO sets it, known from the result's fps (`resultFps`,
// videoTimelineFps) or from a link of type VIDEO on one of `inputs`.
export function timelineFpsLocked(resultFps, node, inputs = VIDEO_FPS_INPUTS) {
  return resultFps !== null || videoLinked(node, inputs);
}

// The state v2 `scene` at the fps a VIDEO sets (`fps`, brought into the range a state keeps), keeping its times in
// seconds (rebaseSceneState); `scene` itself without one or when it has that fps already.
export function sceneAtVideoFps(scene, fps) {
  const target = timelineFps(fps);
  return target && target !== scene.timeline.fps ? rebaseSceneState(scene, target) : scene;
}
