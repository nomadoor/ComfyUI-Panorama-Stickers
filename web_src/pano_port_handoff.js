// The port Sticker that `sticker_state` places (Pose handoff, ADR 0030), as the editor and the node surface
// show it. Every run hands it Lanes (`pano_sticker_handoff`); the Lanes in its `handoff_overrides` keep their
// stored value, the others follow the handoff, and its placement follows the handoff (nodes.py
// `_inherit_handoff`). The state keeps the stored Lanes: showing the handoff never changes state_json, and an
// edit of an inherited Lane makes it an override (docs/editor-interaction.md).
import { loadSceneState, timelineFps } from "./pano_scene_state.js";

// The Lanes a handoff of each placement hands.
export const HANDOFF_LANES = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] };

// The fields a port Sticker keeps when the handoff replaces it by one of the other placement.
const KEPT_FIELDS = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];

// The handoff of a node's result (`pano_sticker_handoff`, or its first entry): { placement, lanes, fps }, or null.
// `fps` is the Timeline fps its Keyframes are at (the run's state_json); a result without it is taken to be at
// the fps it is shown at.
export function portHandoff(value) {
  const entry = Array.isArray(value) ? value[0] : value;
  if (!entry || typeof entry !== "object" || !HANDOFF_LANES[entry.placement] || !entry.lanes || typeof entry.lanes !== "object") return null;
  return { placement: entry.placement, lanes: entry.lanes, fps: timelineFps(entry.fps) };
}

function clone(value) {
  return structuredClone(value);
}

function sameValue(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// The Lanes of `handoff` at `fps`, for a port Sticker whose Clip range is `clip` at that fps. Keyframes are on
// the Sticker's media, from its origin (start - in); the run put that origin where rebaseSceneState puts it at
// the handoff's fps, so they round to `fps` as the whole state does (rebaseUpstreamRecord, docs/scene-state-v2.md).
function handoffLanes(handoff, fps, clip) {
  const from = handoff.fps ?? fps;
  if (from === fps) return handoff.lanes;
  const origin = clip.start - clip.in;
  const runOrigin = Math.floor(origin * from / fps + 0.5);
  return Object.fromEntries(Object.entries(handoff.lanes).map(([name, lane]) => [name, {
    value: lane.value,
    keyframes: (lane.keyframes ?? []).map((key) => ({ ...key, frame: Math.floor((runOrigin + key.frame) * fps / from + 0.5) - origin })),
  }]));
}

// The port Sticker `stored` as the run draws it with `handoff` in the working state `state` (at its Timeline
// fps): the handoff's Lanes for those not in its `handoff_overrides`. A Sticker of the other placement is
// replaced under the same id, keeping KEPT_FIELDS (and the overrides of Lanes the new placement has), above
// the other sky Stickers when it turns sky. Like nodes.py `_inherit_handoff`.
export function inheritPortHandoff(state, stored, handoff) {
  const lanes = handoffLanes(handoff, state.timeline.fps, stored.clip);
  let raw;
  if (stored.placement === handoff.placement) {
    raw = { ...stored };
    for (const name of HANDOFF_LANES[handoff.placement]) if (!stored.handoff_overrides.includes(name)) raw[name] = lanes[name];
  } else {
    raw = { ...Object.fromEntries(KEPT_FIELDS.map((key) => [key, stored[key]])), placement: handoff.placement, ...lanes };
    if (handoff.placement === "sky") {
      raw.z_index = state.stickers.reduce((top, item) => (item.id !== stored.id && item.placement === "sky" ? Math.max(top, item.z_index) : top), -1) + 1;
    }
  }
  return clone(loadSceneState({ version: 2, stickers: [raw] }).stickers[0]);
}

// The working state with its port Sticker shown with `handoff` (inheritPortHandoff), or `state` itself without one.
export function showPortHandoff(state, handoff) {
  const index = state.stickers.findIndex((item) => item.source.kind === "port");
  if (!handoff || index < 0) return state;
  return { ...state, stickers: state.stickers.map((item, i) => (i === index ? inheritPortHandoff(state, item, handoff) : item)) };
}

// The Lanes of the shown port Sticker `sticker` that an edit changed since it was `shown` (the last write-back),
// among those the handoff gives: they become its overrides (ADR 0030, touched = changed by this edit). Added to
// its `handoff_overrides` in Lane order, which it returns.
export function recordHandoffEdits(sticker, shown) {
  const names = HANDOFF_LANES[sticker.placement];
  if (shown.id !== sticker.id || shown.placement !== sticker.placement) return sticker.handoff_overrides;
  const touched = names.filter((name) => !sameValue(sticker[name], shown[name]));
  if (touched.length) {
    const overrides = new Set([...sticker.handoff_overrides, ...touched]);
    sticker.handoff_overrides = [...names, "opacity"].filter((name) => overrides.has(name));
  }
  return sticker.handoff_overrides;
}

// The port Sticker the state keeps for the shown one `shown`, over `stored`, what the state kept before: the
// inherited Lanes go back to their stored values, so showing the handoff writes nothing. A Sticker the handoff
// turned to the other placement is kept in its stored placement (with the shown Clip range, visibility, lock,
// crop and opacity) until a Lane of the new placement is overridden; then the shown one is kept, as the run
// keeps it, and the stored placement's Lanes and overrides are dropped (ADR 0030 C1).
export function storedPortSticker(shown, stored) {
  if (!stored || stored.id !== shown.id) return clone(shown);
  if (shown.placement === stored.placement) {
    const out = clone(shown);
    for (const name of HANDOFF_LANES[shown.placement]) if (!shown.handoff_overrides.includes(name)) out[name] = clone(stored[name]);
    return out;
  }
  if (shown.handoff_overrides.some((name) => HANDOFF_LANES[shown.placement].includes(name))) return clone(shown);
  const out = clone(stored);
  for (const key of ["clip", "visible", "locked", "crop", "opacity"]) out[key] = clone(shown[key]);
  return out;
}

// "Revert to upstream" of the Lane `name` of the shown port Sticker `sticker`: it follows `handoff` again (at
// the fps of `state`, the working state). Returns whether it was an override.
export function revertHandoffLane(state, sticker, handoff, name) {
  if (!sticker.handoff_overrides.includes(name) || sticker.placement !== handoff.placement) return false;
  sticker.handoff_overrides = sticker.handoff_overrides.filter((item) => item !== name);
  sticker[name] = clone(inheritPortHandoff(state, sticker, handoff)[name]);
  return true;
}
