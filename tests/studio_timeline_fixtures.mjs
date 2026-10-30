// Shared states for tests/studio_timeline_*.test.mjs.
import { loadSceneState } from "../web_src/pano_scene_state.js";

export const EASE = [0.42, 0, 0.58, 1];

export function keys(...items) {
  return items.map(([frame, value]) => ({ frame, value, easing: EASE }));
}

// A Studio state: a Camera with Keyframes at 0 and 48 on position, a world Sticker (chair.glb, Clip range from 10,
// `in` 0, Keyframes on position at 0 and 20 and on rotation at 20), a sky Sticker (poster.png, no Keyframes).
export function studioState(patch = {}) {
  return loadSceneState({
    version: 2,
    timeline: { fps: 24, length: 100 },
    camera: {
      aspect: 16 / 9,
      position: { value: [0, 0, 0], keyframes: keys([0, [0, 0, 0]], [48, [1, 0, 0]]) },
    },
    stickers: [
      {
        id: "sticker_1",
        placement: "world",
        source: { kind: "file", filename: "chair.glb" },
        clip: { start: 10, in: 0, duration: 60 },
        position: { value: [0, 0, 0], keyframes: keys([0, [0, 0, 0]], [20, [1, 0, 0]]) },
        rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, keyframes: keys([20, { yaw_deg: 30, pitch_deg: 0, roll_deg: 0 }]) },
      },
      { id: "sticker_2", source: { kind: "file", filename: "poster.png" }, z_index: 1 },
    ],
    ...patch,
  });
}

// An upstream layer as the shell gives it (editor/upstream.js upstreamTimelineLayers plus the node's title).
export function upstreamLayer({ key = "scene_up", name = "Studio #4", editable = true, record = null, deleted = 0, scene = false, readOnly = false } = {}) {
  const sceneState = loadSceneState({
    version: 2,
    timeline: { fps: 24, length: null },
    stickers: [{
      id: `upstream:${key}:sticker_1`,
      placement: "world",
      source: { kind: "file", filename: "room.ply" },
      position: { value: [0, 0, 0], keyframes: keys([0, [0, 0, 0]], [50, [0, 1, 0]]) },
    }],
  });
  sceneState.stickers[0].origin = { layer: key, id: "sticker_1" };
  return { key, name, sceneState, editable, record, scene, deleted, readOnly };
}

export function ctxOf(state, extra = {}) {
  return { state, upstream: [], media: {}, background: null, sceneRow: false, fpsLocked: false, readOnly: false, ...extra };
}
