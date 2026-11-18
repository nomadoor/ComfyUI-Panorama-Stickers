// The port Sticker that `sticker_state` places (Pose handoff, ADR 0067), as the editor and the node surface show it
// (docs/editor-interaction.md "`port` の Sticker の Pose handoff の表示と記録"). A run hands the sticker_state it read
// (`pano_sticker_handoff`); the evaluation places the port Sticker by it (pano_scene_eval.js, the `shot` argument), so
// the state keeps only the offset Lanes and nothing is copied from the Camera. A stored port Sticker that is not sky
// is shown as the sky one the node draws (port_sticker.py `_sky_port_sticker`) until its offset is first changed.
import { loadSceneState, loadStickerState, PORT_OFFSET_LANES } from "./pano_scene_state.js";

// The sticker_state of a node's result (`pano_sticker_handoff` as the editor reads it, or its first entry as the node
// surface reads it): { state }, read as loadStickerState reads it, or null. The earlier shape (`placement`, `lanes`) is
// not applied (ADR 0063).
export function portHandoff(value) {
  const entry = Array.isArray(value) ? value[0] : value;
  if (!entry || typeof entry !== "object" || !entry.state || typeof entry.state !== "object") return null;
  try {
    return loadStickerState(JSON.stringify(entry.state));
  } catch {
    return null;
  }
}

// Whether the LiteGraph node's input `name` has a link.
export function isInputConnected(node, name) {
  const slot = (Array.isArray(node?.inputs) ? node.inputs : []).findIndex((input) => input?.name === name);
  return slot >= 0 && node.isInputConnected(slot);
}

// Whether the Pose handoff of a node's result can apply: `sticker` and `sticker_state` are connected.
export function portHandoffLinked(node) {
  return isInputConnected(node, "sticker") && isInputConnected(node, "sticker_state");
}

// The sticker_state of a node's current result (`value`, its `pano_sticker_handoff`) while it can apply, or null.
export function nodePortHandoff(node, value) {
  return portHandoffLinked(node) ? portHandoff(value) : null;
}

// The names of the offset Lanes, in the order a state keeps them.
export const PORT_OFFSET_NAMES = PORT_OFFSET_LANES.map(([name]) => name);

// The offset Lanes at their defaults ({ offset_rotation, offset_fov }): no turn from the Camera that shot it, its angle
// of view as it was, no Keyframe.
export function defaultPortOffsets() {
  return Object.fromEntries(PORT_OFFSET_LANES.map(([name, valueOf]) => [name, { value: valueOf(null), keyframes: [] }]));
}

// Whether a port Sticker's offset Lanes are those of `other` (by value and Keyframes).
export function sameOffsets(sticker, other) {
  return PORT_OFFSET_NAMES.every((name) => JSON.stringify(sticker[name]) === JSON.stringify(other[name]));
}

// The port Sticker `stored` that is not sky, as the sky one a sticker_state places in the working `state`: under the
// same id, keeping its Clip range, visibility, lock, loop, crop, opacity and offset Lanes, above the other sky Stickers.
export function skyPortSticker(state, stored) {
  const kept = Object.fromEntries(["id", "source", "clip", "visible", "locked", "loop", "crop", "opacity", ...PORT_OFFSET_NAMES].map((key) => [key, stored[key]]));
  const zIndex = state.stickers.reduce((top, item) => (item.id !== stored.id && item.placement === "sky" ? Math.max(top, item.z_index) : top), -1) + 1;
  return structuredClone(loadSceneState({ version: 2, stickers: [{ ...kept, placement: "sky", z_index: zIndex }] }).stickers[0]);
}

// The working state with its port Sticker as a sticker_state `shot` shows it: a stored one that is not sky is shown as
// sky (skyPortSticker); `state` itself without a shot, without a port Sticker, or with a sky one.
export function showPortHandoff(state, shot) {
  const index = state.stickers.findIndex((item) => item.source.kind === "port");
  if (!shot || index < 0 || state.stickers[index].placement === "sky") return state;
  return { ...state, stickers: state.stickers.map((item, i) => (i === index ? skyPortSticker(state, item) : item)) };
}

// The port Sticker the state keeps for the shown sky one `shown`, over `stored`, the non-sky one it replaced: until an
// offset Lane changed, the stored one (with the shown Clip range, visibility, lock, loop, crop and opacity), so showing the
// handoff writes nothing; after, the shown sky one, as the node keeps it.
export function storedPortSticker(shown, stored) {
  if (!stored || stored.id !== shown.id || !sameOffsets(shown, stored)) return structuredClone(shown);
  const out = structuredClone(stored);
  for (const key of ["clip", "visible", "locked", "loop", "crop", "opacity"]) out[key] = structuredClone(shown[key]);
  return out;
}
