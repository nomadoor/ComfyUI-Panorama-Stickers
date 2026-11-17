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
//   { type: "easing", keyframes, easing, phase }   a preset (Smooth clears the Easing), the curve or the bezier text
//                                                  of the Easing panel
// (The Look at row's Pick, { type: "look-pick" }, is the editor's: it waits for a click on the stage.)
// `target` is a card's target ({ kind: "sticker" | "camera" | "scene", id }), `keyframes` the selection's
// ({ owner, lane, frames }).
//
// applyInspectorEdit returns { changed, history, stopPlayback, upstreamRevert }: `history` asks for one Undo step
// (a commit), `stopPlayback` for the dot's stop of playback, `upstreamRevert` ({ sticker, lanes }, else null) the reset
// of an upstream object's row, which changes nothing here: the session takes those Lanes' overrides off the records
// (docs/studio-ui.md "上流の物の編集"). An "input" changes the state live without an Undo step; a "cancel" changes
// nothing, and the shell puts back the state it had before the gesture's first input (with `cancel: true` in the
// result). An upstream object's edits change its working copy in place (the session writes it back).
import {
  WORLD_MIN_SCALE,
  setCameraCurveKeepingCenter,
  setCameraField,
  setStickerOpacity,
  setStickerPose,
  setWorldStickerField,
} from "../pano_editor_state.js";
import { clamp } from "../pano_math.js";
import { FRAME_EPSILON, evaluateLane, ownerPeriod } from "../pano_scene_eval.js";
import { ANIMATION_DEFAULT, ANIMATION_SPEED_MAX, ANIMATION_SPEED_MIN, CAMERA_LANES, PORT_OFFSET_LANES, SKY_STICKER_LANES, WORLD_STICKER_LANES } from "../pano_scene_state.js";
import { deleteKeyframes, keyLanes, rowLaneNames, setLaneValue, setSegmentEasing } from "../pano_timeline.js";
import { isUpstreamSticker, upstreamStickerInherited } from "../pano_upstream.js";
import { defaultCamera } from "./defaults.js";
import { ROW_LANES, ownerFrame, skyPlacedSize } from "./inspector_model.js";
import { PORT_ZOOM_MIN, handedOff } from "./port_offset.js";
import { findSticker, keyframeOwner, ownerLength } from "./row_object.js";
import { setLookOffset, shownLookTarget, writeLookTarget } from "./look_at.js";

const SKY_POSE_FIELDS = new Set(["yaw_deg", "pitch_deg", "rot_deg", "hFOV_deg", "vFOV_deg"]);
// The Look at's Offset row's fields, by axis (docs/studio-ui.md "Look at").
const LOOK_OFFSET_FIELDS = ["look_offset_x", "look_offset_y", "look_offset_z"];
// The Offset row's fields of a returned shot and the field of its turn they write.
const OFFSET_FIELDS = { offset_yaw_deg: "yaw_deg", offset_pitch_deg: "pitch_deg", offset_roll_deg: "roll_deg" };

const result = (changed, extra = {}) => ({ changed, history: false, stopPlayback: false, upstreamRevert: null, ...extra });

// What an edit acts on: { kind, owner }, or null when it is not there or not editable (locked, read-only, an
// element of an upstream layer whose overrides are not kept). The port Sticker a sticker_state places is "port": its
// edits write its offset (docs/editor-interaction.md "`port` の Sticker の Pose handoff の表示と記録").
function resolve(state, target, { upstream, readOnly, handoff }) {
  if (readOnly || !target) return null;
  if (target.kind === "scene") return { kind: "scene", owner: state };
  if (target.kind === "camera") {
    if (state.camera.locked === true) return null;
    return { kind: "camera", owner: null };
  }
  const sticker = findSticker(state, upstream, target.id);
  if (!sticker || sticker.locked) return null;
  if (upstreamStickerInherited(sticker)) return null;
  return { kind: handedOff(sticker, handoff) ? "port" : sticker.placement, owner: sticker };
}

function setAnimation(sticker, patch) {
  sticker.animation = { ...(sticker.animation ?? ANIMATION_DEFAULT), ...patch };
}

// The output length whose loop `owner` follows (row_object.js ownerLength).
const lengthOf = (context, owner) => ownerLength(context.upstream, owner, context.length);

function applyField(state, found, edit, context) {
  const { field, value, playhead } = { ...edit, playhead: context.playhead };
  if (found.kind === "scene") {
    if (field !== "ground" || !Number.isFinite(value)) return false;
    state.ground = value;
    return true;
  }
  if (found.kind === "camera") {
    const camera = state.camera;
    const { length } = context;
    const period = ownerPeriod(camera, length);
    const offsetAxis = LOOK_OFFSET_FIELDS.indexOf(field);
    if (offsetAxis >= 0) {
      const { target } = shownLookTarget(camera, playhead, length);
      if (!target?.sticker) return false;
      const offset = [...target.offset];
      offset[offsetAxis] = value;
      return setLookOffset(camera, playhead, offset, length);
    }
    if (field === "curve") setCameraCurveKeepingCenter(camera, playhead, value, edit.start ?? { hFOV_deg: evaluateLane(camera, "fov", playhead, period), curve: evaluateLane(camera, "curve", playhead, period) }, length);
    else setCameraField(camera, playhead, field, value, length);
    return true;
  }
  const sticker = found.owner;
  if (field === "anim_speed") {
    // An upstream object's animation is not overridden (docs/studio-ui.md "上流の物の編集" "作らないもの").
    if (isUpstreamSticker(sticker)) return false;
    setAnimation(sticker, { speed: clamp(value, ANIMATION_SPEED_MIN, ANIMATION_SPEED_MAX) });
    return true;
  }
  if (found.kind === "world") {
    setWorldStickerField(sticker, playhead, field, field === "scale" ? Math.max(value, WORLD_MIN_SCALE) : value, lengthOf(context, sticker));
    return true;
  }
  if (found.kind === "port" && field !== "opacity") {
    const frame = ownerFrame(sticker, playhead);
    if (OFFSET_FIELDS[field]) setLaneValue(sticker, "offset_rotation", frame, { [OFFSET_FIELDS[field]]: value }, lengthOf(context, sticker));
    // The Zoom field is in percent; the state keeps the factor.
    else if (field === "offset_fov") setLaneValue(sticker, "offset_fov", frame, Math.max(PORT_ZOOM_MIN, value / 100), lengthOf(context, sticker));
    else return false;
    return true;
  }
  if (field === "opacity") {
    setStickerOpacity(sticker, playhead, clamp(value, 0, 100) / 100, lengthOf(context, sticker));
    return true;
  }
  if (!SKY_POSE_FIELDS.has(field)) return false;
  setStickerPose(sticker, playhead, { [field]: value }, lengthOf(context, sticker));
  return true;
}

function applyChoice(state, found, { field, value }, context) {
  if (found.kind === "camera") {
    const camera = state.camera;
    if (field === "projection" && (value === "erp" || value === "perspective")) camera.projection = value;
    else if (field === "erp_range" && (value === 360 || value === 180)) camera.erp_range = value;
    else return false;
    return true;
  }
  if (field !== "anim_clip" || !found.owner || isUpstreamSticker(found.owner)) return false;
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
function applyKey(state, found, row, playhead, context = {}) {
  const lanes = rowLanes(found, row);
  if (!lanes) return false;
  const owner = found.kind === "camera" ? state.camera : found.owner;
  const length = lengthOf({ upstream: [], length: null, ...context }, owner);
  const frame = ownerFrame(owner, playhead);
  const at = (name) => owner[name].keyframes.find((key) => Math.abs(key.frame - frame) <= FRAME_EPSILON);
  const keyed = lanes.filter(at);
  if (keyed.length === lanes.length) {
    deleteKeyframes(owner, lanes, [...new Set(lanes.map((name) => at(name).frame))], frame, length);
  } else {
    keyLanes(owner, lanes.filter((name) => !at(name)), frame, length);
  }
  return true;
}

function laneDefault(list, name) {
  return list.find(([lane]) => lane === name)[1](undefined);
}

// The Roll the Camera tab's Roll reset returns to: the rotation Lane's default (frame_layout.js grays the reset there).
export const CAMERA_ROLL_DEFAULT = laneDefault(CAMERA_LANES, "rotation").roll_deg;

function applyReset(state, found, row, context) {
  const { playhead } = context;
  if (found.kind === "scene") {
    if (row !== "ground") return { done: false };
    delete state.ground;
    return { done: true };
  }
  if (found.kind === "camera") {
    const camera = state.camera;
    if (row === "aspect") {
      camera.aspect = defaultCamera().aspect;
      return { done: true };
    }
    // The Look at row's reset: no target from the playhead on, by the recording rule (docs/studio-ui.md "Look at").
    if (row === "look_at") {
      if (!shownLookTarget(camera, playhead, context.length).target) return { done: false };
      return { done: writeLookTarget(camera, playhead, null, context.length) };
    }
    // The Look at's Offset row goes back to the center of the target's content box.
    if (row === "look_offset") return { done: setLookOffset(camera, playhead, [0, 0, 0], context.length) };
    // The Camera tab's Roll ruler resets the Roll alone; the Rotation row's reset returns Yaw and Pitch too.
    if (row === "roll") {
      setCameraField(camera, playhead, "roll_deg", CAMERA_ROLL_DEFAULT, context.length);
      return { done: true };
    }
    const lanes = rowLanes(found, row);
    if (!lanes) return { done: false };
    for (const name of lanes) setLaneValue(camera, name, playhead, laneDefault(CAMERA_LANES, name), context.length);
    return { done: true };
  }
  const sticker = found.owner;
  if (row === "anim_clip" || row === "anim_speed") {
    if (isUpstreamSticker(sticker)) return { done: false };
    setAnimation(sticker, row === "anim_clip" ? { clip: ANIMATION_DEFAULT.clip } : { speed: ANIMATION_DEFAULT.speed });
    return { done: true };
  }
  const lanes = rowLanes(found, row);
  if (!lanes) return { done: false };
  if (isUpstreamSticker(sticker)) return { done: false, upstreamRevert: { sticker, lanes } };
  const frame = ownerFrame(sticker, playhead);
  // A returned shot's offset rows go back to no offset (0°, 1).
  const list = found.kind === "port" ? [...SKY_STICKER_LANES, ...PORT_OFFSET_LANES] : sticker.placement === "world" ? WORLD_STICKER_LANES : SKY_STICKER_LANES;
  for (const name of lanes) {
    let value = laneDefault(list, name);
    // A port sky Sticker's vFOV follows its media: only its hFOV is stored. Another sky image goes back to the size
    // it was placed at (docs/studio-ui.md "種類ごとの中身").
    if (name === "size" && sticker.source.kind === "port") value = { hFOV_deg: value.hFOV_deg };
    else if (name === "size") value = skyPlacedSize(evaluateLane(sticker, "size", frame, ownerPeriod(sticker, lengthOf(context, sticker))), context.imageSizes?.[sticker.id]);
    setLaneValue(sticker, name, frame, value, lengthOf(context, sticker));
  }
  return { done: true };
}

function applyEasing(state, keyframes, easing, upstream, length) {
  if (!keyframes?.frames?.length) return false;
  const owner = keyframes.owner === "camera" ? state.camera : keyframeOwner(state, upstream, keyframes.owner);
  if (!owner || owner.locked) return false;
  if (upstreamStickerInherited(owner)) return false;
  const names = keyframes.lane ? [keyframes.lane] : rowLaneNames(owner);
  setSegmentEasing(owner, names, keyframes.frames, easing, ownerLength(upstream, owner, length));
  return true;
}

// Applies `edit` to the working `state`. `context`: { playhead, length (the output length, the loop period of looping
// owners), readOnly, upstream (working layers), animations
// (clips by Sticker id), handoff (the sticker_state that places the port Sticker, pano_port_handoff.js portHandoff), imageSizes (the
// Stickers' image sizes by id, { width, height } px) }.
export function applyInspectorEdit(state, edit, context = {}) {
  const ctx = { playhead: 0, length: null, readOnly: false, upstream: [], animations: {}, handoff: null, ...context };
  if (edit.phase === "cancel") return result(false, { cancel: true });
  if (ctx.readOnly) return result(false);
  if (edit.type === "easing") {
    const changed = applyEasing(state, edit.keyframes, edit.easing, ctx.upstream, ctx.length);
    return result(changed, { history: changed && edit.phase !== "input" });
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
    const changed = applyKey(state, found, edit.row, ctx.playhead, ctx);
    return result(changed, { history: changed, stopPlayback: changed });
  }
  if (edit.type === "reset") {
    const { done, upstreamRevert = null } = applyReset(state, found, edit.row, ctx);
    return result(done, { history: done, upstreamRevert });
  }
  return result(false);
}
