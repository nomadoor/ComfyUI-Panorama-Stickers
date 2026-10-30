// The inspector's edits of the new UI (components/studio/StudioInspector.vue sends them as `edit`), applied to the
// working state v2 through the lower state functions, by docs/timeline-ui.md "記録の規則" and "インスペクタの
// Keyframe のポチ" and docs/studio-ui.md "リセットと Keyframe のポチ" and "Easing のパネル". Pure apart from the
// working state (and the upstream working layers) it changes in place.
//
// An edit is one of:
//   { type: "field", target, field, value, phase: "input" | "commit" | "cancel", start? }  a value box or slider
//   { type: "choice", target, field, value }       the Camera's Mode (projection) and Range (erp_range), a 3D's Clip
//   { type: "key", target, row }                   a row's Keyframe dot
//   { type: "reset", target, row }                 a row's reset (the Camera's "roll": its Roll alone)
//   { type: "set-ground" }                         Set ground: the shell starts picking the ground (no state change)
//   { type: "easing", keyframes, easing, phase }   a preset, the curve or the bezier text of the Easing panel
//   { type: "easing-reset", keyframes }            the Easing panel's reset
// `target` is a card's target ({ kind: "sticker" | "camera" | "scene", id }), `keyframes` the selection's
// ({ owner, lane, frames }).
//
// applyInspectorEdit returns { changed, history, stopPlayback, upstreamChanged }: `history` asks for one Undo step
// (a commit), `stopPlayback` for the dot's stop of playback, `upstreamChanged` that the node's `upstream` records
// changed so the working layers are made again from them (pano_upstream.js upstreamWorkingLayers). An "input" changes
// the state live without an Undo step; a "cancel" changes nothing, and the shell puts back the state it had before
// the gesture's first input (with `cancel: true` in the result).
import {
  WORLD_MIN_SCALE,
  setCameraCurveKeepingCenter,
  setCameraField,
  setStickerOpacity,
  setStickerPose,
  setWorldStickerField,
} from "../pano_editor_state.js";
import { FRAME_EPSILON, evaluateLane } from "../pano_scene_eval.js";
import { ANIMATION_DEFAULT, ANIMATION_SPEED_MAX, ANIMATION_SPEED_MIN, CAMERA_LANES, DEFAULT_EASING, SKY_STICKER_LANES, WORLD_STICKER_LANES } from "../pano_scene_state.js";
import { deleteKeyframes, keyLanes, rowLaneNames, setLaneValue, setSegmentEasing } from "../pano_timeline.js";
import { isUpstreamSticker, upstreamRevertedRecords, upstreamStickerEditable } from "../pano_upstream.js";
import { revertHandoffLane } from "../pano_port_handoff.js";
import { DEFAULT_CAMERA_RAW, defaultCamera } from "./defaults.js";
import { ROW_LANES, findSticker, inheritedSticker, keyframeOwner, ownerFrame, skyPlacedSize } from "./inspector_model.js";

const SKY_POSE_FIELDS = new Set(["yaw_deg", "pitch_deg", "rot_deg", "hFOV_deg", "vFOV_deg"]);

const result = (changed, extra = {}) => ({ changed, history: false, stopPlayback: false, upstreamChanged: false, ...extra });

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// The Camera to edit: a state without one gets the default Camera first (docs/scene-state-v2.md "既定の Camera").
function editedCamera(state) {
  if (!state.camera) state.camera = defaultCamera();
  return state.camera;
}

// What an edit acts on: { kind, owner }, or null when it is not there or not editable (locked, read-only, an
// element of an upstream layer whose overrides are not kept).
function resolve(state, target, { upstream, readOnly }) {
  if (readOnly || !target) return null;
  if (target.kind === "scene") return { kind: "scene", owner: state };
  if (target.kind === "camera") {
    if (state.camera?.locked === true) return null;
    return { kind: "camera", owner: null };
  }
  const sticker = findSticker(state, upstream, target.id);
  if (!sticker || sticker.locked) return null;
  if (isUpstreamSticker(sticker) && !upstreamStickerEditable(sticker)) return null;
  return { kind: sticker.placement, owner: sticker };
}

function setAnimation(sticker, patch) {
  sticker.animation = { ...(sticker.animation ?? ANIMATION_DEFAULT), ...patch };
}

function applyField(state, found, edit, context) {
  const { field, value, playhead } = { ...edit, playhead: context.playhead };
  if (found.kind === "scene") {
    if (field !== "ground" || !Number.isFinite(value)) return false;
    state.ground = value;
    return true;
  }
  if (found.kind === "camera") {
    const camera = editedCamera(state);
    if (field === "curve") setCameraCurveKeepingCenter(camera, playhead, value, edit.start ?? { hFOV_deg: evaluateLane(camera, "fov", playhead), curve: evaluateLane(camera, "curve", playhead) });
    else setCameraField(camera, playhead, field, value);
    return true;
  }
  const sticker = found.owner;
  if (field === "anim_speed") {
    setAnimation(sticker, { speed: clamp(value, ANIMATION_SPEED_MIN, ANIMATION_SPEED_MAX) });
    return true;
  }
  if (found.kind === "world") {
    setWorldStickerField(sticker, playhead, field, field === "scale" ? Math.max(value, WORLD_MIN_SCALE) : value);
    return true;
  }
  if (field === "opacity") {
    setStickerOpacity(sticker, playhead, clamp(value, 0, 100) / 100);
    return true;
  }
  if (!SKY_POSE_FIELDS.has(field)) return false;
  setStickerPose(sticker, playhead, { [field]: value });
  return true;
}

function applyChoice(state, found, { field, value }, context) {
  if (found.kind === "camera") {
    const camera = editedCamera(state);
    if (field === "projection" && (value === "erp" || value === "perspective")) camera.projection = value;
    else if (field === "erp_range" && (value === 360 || value === 180)) camera.erp_range = value;
    else return false;
    return true;
  }
  if (field !== "anim_clip" || !found.owner) return false;
  const clip = context.animations?.[found.owner.id]?.[value];
  if (!clip) return false;
  setAnimation(found.owner, { clip: clip.name });
  return true;
}

function rowLanes(found, row) {
  return ROW_LANES[found.kind]?.[row] ?? null;
}

// The Keyframe dot: with every Lane of the row keyed at the playhead it removes those Keyframes; otherwise it keys
// the Lanes that have none there, at their current value.
function applyKey(state, found, row, playhead) {
  const lanes = rowLanes(found, row);
  if (!lanes) return false;
  const owner = found.kind === "camera" ? editedCamera(state) : found.owner;
  const frame = ownerFrame(owner, playhead);
  const at = (name) => owner[name].keyframes.find((key) => Math.abs(key.frame - frame) <= FRAME_EPSILON);
  const keyed = lanes.filter(at);
  if (keyed.length === lanes.length) {
    deleteKeyframes(owner, lanes, [...new Set(lanes.map((name) => at(name).frame))], frame);
  } else {
    keyLanes(owner, lanes.filter((name) => !at(name)), frame);
  }
  return true;
}

function laneDefault(list, name) {
  return list.find(([lane]) => lane === name)[1](undefined);
}

// An upstream element's reset: the override of the row's Lanes goes, so it inherits them again, and its working copy
// shows the upstream value at once.
function resetUpstream(state, sticker, lanes, upstream) {
  const base = inheritedSticker(upstream, sticker, state.timeline.fps);
  let records = state.upstream ?? [];
  for (const name of lanes) records = upstreamRevertedRecords(records, sticker, name);
  state.upstream = records;
  if (base) for (const name of lanes) sticker[name] = structuredClone(base[name]);
}

// A port Sticker's reset of a Lane the Pose handoff gives (docs/studio-ui.md "リセットと Keyframe のポチ": the input's
// value): it follows the handoff again. Returns the Lanes it did not revert.
function resetHandoff(state, sticker, lanes, handoff) {
  if (sticker.source.kind !== "port" || !handoff) return lanes;
  return lanes.filter((name) => !revertHandoffLane(state, sticker, handoff, name));
}

function applyReset(state, found, row, context) {
  const { playhead } = context;
  if (found.kind === "scene") {
    if (row !== "ground") return { done: false };
    delete state.ground;
    return { done: true };
  }
  if (found.kind === "camera") {
    const camera = editedCamera(state);
    if (row === "aspect") {
      camera.aspect = DEFAULT_CAMERA_RAW.aspect;
      return { done: true };
    }
    // The Camera tab's Roll ruler resets the Roll alone; the Rotation row's reset returns Yaw and Pitch too.
    if (row === "roll") {
      setCameraField(camera, playhead, "roll_deg", laneDefault(CAMERA_LANES, "rotation").roll_deg);
      return { done: true };
    }
    const lanes = rowLanes(found, row);
    if (!lanes) return { done: false };
    for (const name of lanes) setLaneValue(camera, name, playhead, laneDefault(CAMERA_LANES, name));
    return { done: true };
  }
  const sticker = found.owner;
  if (row === "anim_clip" || row === "anim_speed") {
    setAnimation(sticker, row === "anim_clip" ? { clip: ANIMATION_DEFAULT.clip } : { speed: ANIMATION_DEFAULT.speed });
    return { done: true };
  }
  const lanes = rowLanes(found, row);
  if (!lanes) return { done: false };
  if (isUpstreamSticker(sticker)) {
    resetUpstream(state, sticker, lanes, context.upstream);
    return { done: true, upstreamChanged: true };
  }
  const frame = ownerFrame(sticker, playhead);
  const list = sticker.placement === "world" ? WORLD_STICKER_LANES : SKY_STICKER_LANES;
  for (const name of resetHandoff(state, sticker, lanes, context.handoff)) {
    let value = laneDefault(list, name);
    // A port sky Sticker's vFOV follows its media: only its hFOV is stored. Another sky image goes back to the size
    // it was placed at (docs/studio-ui.md "種類ごとの中身").
    if (name === "size" && sticker.source.kind === "port") value = { hFOV_deg: value.hFOV_deg };
    else if (name === "size") value = skyPlacedSize(evaluateLane(sticker, "size", frame), context.imageSizes?.[sticker.id]);
    setLaneValue(sticker, name, frame, value);
  }
  return { done: true };
}

function applyEasing(state, keyframes, easing, upstream) {
  if (!keyframes?.frames?.length) return false;
  const owner = keyframes.owner === "camera" ? (state.camera ?? null) : keyframeOwner(state, upstream, keyframes.owner);
  if (!owner || owner.locked) return false;
  if (isUpstreamSticker(owner) && !upstreamStickerEditable(owner)) return false;
  const names = keyframes.lane ? [keyframes.lane] : rowLaneNames(owner);
  setSegmentEasing(owner, names, keyframes.frames, easing);
  return true;
}

// Applies `edit` to the working `state`. `context`: { playhead, readOnly, upstream (working layers), animations
// (clips by Sticker id), handoff (the port Sticker's Pose handoff, pano_port_handoff.js portHandoff), imageSizes (the
// Stickers' image sizes by id, { width, height } px) }.
export function applyInspectorEdit(state, edit, context = {}) {
  const ctx = { playhead: 0, readOnly: false, upstream: [], animations: {}, handoff: null, ...context };
  if (edit.phase === "cancel") return result(false, { cancel: true });
  if (ctx.readOnly) return result(false);
  if (edit.type === "set-ground") return result(false);
  if (edit.type === "easing" || edit.type === "easing-reset") {
    const easing = edit.type === "easing-reset" ? [...DEFAULT_EASING] : edit.easing;
    const changed = applyEasing(state, edit.keyframes, easing, ctx.upstream);
    return result(changed, { history: changed && (edit.type === "easing-reset" || edit.phase !== "input") });
  }
  const found = resolve(state, edit.target, ctx);
  if (!found) return result(false);
  if (edit.type === "field") {
    const changed = applyField(state, found, edit, ctx);
    return result(changed, { history: changed && edit.phase === "commit" });
  }
  if (edit.type === "choice") {
    const changed = applyChoice(state, found, edit, ctx);
    return result(changed, { history: changed });
  }
  if (edit.type === "key") {
    const changed = applyKey(state, found, edit.row, ctx.playhead);
    return result(changed, { history: changed, stopPlayback: changed });
  }
  if (edit.type === "reset") {
    const { done, upstreamChanged = false } = applyReset(state, found, edit.row, ctx);
    return result(done, { history: done, upstreamChanged });
  }
  return result(false);
}
