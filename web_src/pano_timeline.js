// Timeline edits on state v2 (docs/scene-state-v2.md) by the rules of docs/timeline-ui.md: recording
// Lane values, Keyframe edits on one Lane or on every Lane of a row at once, Clip range edits that keep
// the Keyframes on the content, and Easing edits. Frames passed for an owner (the Camera, scene or a
// Sticker) are in its own time base: Timeline frames for the Camera, Clip frames (from start - in) for
// scene and the Stickers.
import { animationCycleFrames } from "./pano_animation.js";
import { portMediaFrames } from "./pano_port_media.js";
import { clipOrigin, evaluateLane, FRAME_EPSILON, laneView, ownerPeriod, positionSplit, splitEasing } from "./pano_scene_eval.js";
import {
  CAMERA_LANES,
  DEFAULT_EASING,
  defaultClip,
  EASE_IN_OUT,
  SCENE_LANES,
  TIMELINE_FPS_MAX,
  TIMELINE_LENGTH_MAX,
  timelineFps,
  timelineLength,
  stickerLanes,
} from "./pano_scene_state.js";

function merged(value, patch) {
  return value && typeof value === "object" && !Array.isArray(value) ? { ...value, ...patch } : patch;
}

function copyEasing(easing) {
  return Array.isArray(easing) ? [...easing] : easing;
}

function keyAt(lane, frame) {
  return lane.keyframes.find((item) => Math.abs(item.frame - frame) <= FRAME_EPSILON);
}

// Linear, the cubic-bezier that moves at one speed.
export const LINEAR_EASING = Object.freeze([0, 0, 1, 1]);

// The Easing presets of the panels (docs/timeline-ui.md "Easing"): Smooth (the default, no Easing written), `hold`
// and the cubic-bezier curves. The panels show their own selection of them.
export const EASING_PRESETS = Object.freeze([
  Object.freeze({ label: "Smooth", easing: DEFAULT_EASING }),
  Object.freeze({ label: "Hold", easing: "hold" }),
  Object.freeze({ label: "Linear", easing: LINEAR_EASING }),
  Object.freeze({ label: "Ease in-out", easing: EASE_IN_OUT }),
  Object.freeze({ label: "Ease in", easing: Object.freeze([0.42, 0, 1, 1]) }),
  Object.freeze({ label: "Ease out", easing: Object.freeze([0, 0, 0.58, 1]) }),
]);

function isLinear(easing) {
  return Array.isArray(easing) && easing.every((value, i) => value === LINEAR_EASING[i]);
}

// The segment of a Lane that a frame not on a Keyframe falls in: { k, u } of a laneView (in a looping Lane, a frame
// before the first Keyframe or after the last is in the segment from the last back to the first), or null outside.
function segmentAt(view, frame) {
  const keys = view.keyframes;
  const first = keys[0].frame;
  const last = keys[keys.length - 1].frame;
  let time = frame;
  if (view.loop && (frame < first || frame > last)) {
    time = frame < first ? frame + view.period : frame;
    if (time <= last || time >= first + view.period) return null;
    return { k: view.n - 1, u: (time - last) / (first + view.period - last) };
  }
  if (frame <= first || frame >= last) return null;
  const k = keys.findIndex((item) => item.frame > frame) - 1;
  return { k, u: (frame - keys[k].frame) / (keys[k + 1].frame - keys[k].frame) };
}

// Adds a Keyframe of the Lane `name` of owner at frame holding value, without changing the motion
// (docs/timeline-ui.md "記録の規則"): inside a segment, Smooth, `hold` and Linear stay on both sides, another
// cubic-bezier is split at that time into the two halves that move as it did, and a position segment with handles has
// them split so the path keeps its shape. Outside every segment the new Keyframe is Smooth. `period` is the owner's
// loop period (ownerPeriod).
function insertKeyframe(owner, name, frame, value, period) {
  const keys = owner[name].keyframes;
  const index = keys.findIndex((item) => item.frame > frame);
  const at = keys.length >= 2 ? segmentAt(laneView(keys, period), frame) : null;
  const added = { frame, value, easing: DEFAULT_EASING };
  let split = null;
  if (at) {
    const previous = keys[at.k];
    const { easing } = previous;
    // The handles split where the value was read: with the segment's Easing as it was, before it is split.
    if (name === "position") split = positionSplit(laneView(keys, period), at.k, at.u);
    if (easing === "hold" || isLinear(easing)) added.easing = copyEasing(easing);
    else if (Array.isArray(easing)) [previous.easing, added.easing] = splitEasing(easing, at.u);
  }
  keys.splice(index < 0 ? keys.length : index, 0, added);
  if (!split) return;
  const at2 = keys.indexOf(added);
  const before = keys[(at2 - 1 + keys.length) % keys.length];
  const after = keys[(at2 + 1) % keys.length];
  before.handles = { ...(before.handles ?? {}), out: split.prevOut };
  added.handles = { in: split.newIn, out: split.newOut };
  after.handles = { ...(after.handles ?? {}), in: split.nextIn };
}

// An edit of the Lane `name` of `owner` at frame. Without Keyframes it changes the static value. With
// Keyframes it updates the Keyframe at frame, or adds one there from the current value, so a drag adds
// a Keyframe on its first change and updates it after; the static value stays as it is. `length` is the output
// length, the loop period of a looping owner (docs/scene-state-v2.md "ループ").
export function setLaneValue(owner, name, frame, patch, length = null) {
  const lane = owner[name];
  if (!lane.keyframes.length) {
    lane.value = merged(lane.value, patch);
    return;
  }
  const key = keyAt(lane, frame);
  const period = ownerPeriod(owner, length);
  if (key) key.value = merged(key.value, patch);
  else insertKeyframe(owner, name, frame, merged(evaluateLane(owner, name, frame, period), patch), period);
}

// The Lanes of the port Sticker a sticker_state places, which the editor marks `placedByShot` (studio/session.js):
// its offset from the Camera that shot it and its opacity (docs/timeline-ui.md "`sticker_state` で届く `port` の
// Sticker"); the Camera's own Keyframes are the upstream node's.
const SHOT_PLACED_LANES = ["offset_rotation", "offset_fov", "opacity"];

// The recording rule (setLaneValue) for a Lane whose values do not mix, the Camera's Look at (docs/studio-ui.md "Look
// at"): `value` replaces the Lane's value without Keyframes, else the Keyframe at `frame`, added when there is none.
export function setLaneTarget(owner, name, frame, value, length = null) {
  const lane = owner[name];
  if (!lane.keyframes.length) {
    lane.value = value;
    return;
  }
  const key = keyAt(lane, frame);
  if (key) key.value = value;
  else insertKeyframe(owner, name, frame, value, ownerPeriod(owner, length));
}

// The names of the Lanes an owner of a working state v2 has, in their stored order.
export function laneNames(owner) {
  if (owner.placedByShot === true) return SHOT_PLACED_LANES;
  if (owner.placement === "world" || owner.placement === "sky") return stickerLanes(owner).map(([name]) => name);
  // The background (state.background) has a Clip range and no Lanes.
  if (owner.clip && !owner.position) return [];
  return (owner.clip ? SCENE_LANES : CAMERA_LANES).map(([name]) => name);
}

// The lens Lanes (ADR 0042): the Camera's `curve`, and the `curve` and `lens` Pose handoff writes on a Sticker. A
// row's key button and its pins leave them out, so a row keyed everywhere stays one full pin and pressing the
// button writes no lens Keyframes; a lens Lane is keyed by its own edits and shows on its own Lane line.
// The Camera's Look at Lane (ADR 0065) is left out too, so changing the target never asks to key every Keyframe.
const ROW_EXCLUDED_LANES = new Set(["curve", "lens", "look_at"]);

// The Lanes a row's key button and pins act on: laneNames() without the lens Lanes.
export function rowLaneNames(owner) {
  return laneNames(owner).filter((name) => !ROW_EXCLUDED_LANES.has(name));
}

// Each of the Lanes `names` of owner without a Keyframe at frame gets one there holding its current value. This
// also makes the first Keyframe of a Lane.
export function keyLanes(owner, names, frame, length = null) {
  const period = ownerPeriod(owner, length);
  for (const name of names) {
    if (!keyAt(owner[name], frame)) insertKeyframe(owner, name, frame, evaluateLane(owner, name, frame, period), period);
  }
}

// The row's key button: every Lane of the row (rowLaneNames) gets a Keyframe at frame (keyLanes).
export function keyAllLanes(owner, frame, length = null) {
  keyLanes(owner, rowLaneNames(owner), frame, length);
}

// The frames of a row's Keyframes, one pin per frame: `full` when every Lane has a Keyframe there.
export function rowKeyframes(owner) {
  const names = rowLaneNames(owner);
  const counts = new Map();
  for (const name of names) {
    for (const key of owner[name].keyframes) counts.set(key.frame, (counts.get(key.frame) || 0) + 1);
  }
  return [...counts].sort((a, b) => a[0] - b[0]).map(([frame, count]) => ({ frame, full: count === names.length }));
}

// Whether every Lane of a row has a Keyframe at frame, from the row's pins (rowKeyframes(), in the frames
// they are shown at).
export function keyedAt(keys, frame) {
  return keys.some((key) => key.full && key.frame === frame);
}

// Removes the Keyframes at frames from the Lanes `names` of owner. A Lane left without Keyframes keeps
// the value it had at playhead as its static value, so nothing jumps; deleting a Lane's only Keyframe
// keeps that Keyframe's value.
export function deleteKeyframes(owner, names, frames, playhead, length = null) {
  const removed = new Set(frames);
  for (const name of names) {
    const lane = owner[name];
    if (!lane.keyframes.some((item) => removed.has(item.frame))) continue;
    const value = evaluateLane(owner, name, playhead, ownerPeriod(owner, length));
    lane.keyframes = lane.keyframes.filter((item) => !removed.has(item.frame));
    if (!lane.keyframes.length) lane.value = value;
  }
}

// Shifts the Keyframes at frames of the Lanes `names` by delta, but not past floor (Timeline frame 0
// in owner's time base) nor past ceiling (the Timeline's last frame in it), and returns the delta applied.
// Keyframes already past either are not pushed further, nor pulled back. A moved Keyframe replaces one of
// its own Lane that it lands on.
export function moveKeyframes(owner, names, frames, delta, floor, ceiling = Infinity) {
  delta = Math.min(delta, Math.max(0, ceiling - Math.max(...frames)));
  delta = Math.max(delta, Math.min(0, floor - Math.min(...frames)));
  const moving = new Set(frames);
  for (const name of names) {
    const lane = owner[name];
    const moved = lane.keyframes
      .filter((item) => moving.has(item.frame))
      .map((item) => ({ ...item, frame: item.frame + delta }));
    const landed = new Set(moved.map((item) => item.frame));
    lane.keyframes = [
      ...lane.keyframes.filter((item) => !moving.has(item.frame) && !landed.has(item.frame)),
      ...moved,
    ].sort((a, b) => a.frame - b.frame);
  }
  return delta;
}

// The segments a selection of Keyframe frames edits the Easing of (docs/timeline-ui.md "Easing"), Lane by Lane, as
// { name, index } (the segment from Keyframe `index` to the next): one selected Keyframe owns the segment up to the
// next one; two or more own every segment from the leftmost selected to the rightmost, the unselected ones between
// included. A Lane's last Keyframe has no segment after it, unless the owner loops (its segment runs back to the
// first); a range of two or more does not cross that seam. `length` is the output length, the loop period of a
// looping owner.
export function easingSegments(owner, names, frames, length = null) {
  const selected = new Set(frames);
  const period = ownerPeriod(owner, length);
  return names.flatMap((name) => {
    const keys = owner[name].keyframes;
    const picked = keys.flatMap((key, index) => (selected.has(key.frame) ? [index] : []));
    if (!picked.length) return [];
    if (picked.length === 1) {
      const loops = keys.length >= 2 && laneView(keys, period).loop;
      return picked[0] < keys.length - 1 || loops ? [{ name, index: picked[0] }] : [];
    }
    const out = [];
    for (let index = picked[0]; index < picked[picked.length - 1]; index += 1) out.push({ name, index });
    return out;
  });
}

function easedKeyframes(owner, names, frames, length = null) {
  return easingSegments(owner, names, frames, length).map(({ name, index }) => owner[name].keyframes[index]);
}

// The Easing of the segments an Easing edit of the Lanes `names` sets (easedKeyframes): { easing, mixed }, with
// easing null when they differ, or null when the selection has no segment.
export function selectedEasing(owner, names, frames, length = null) {
  const keys = easedKeyframes(owner, names, frames, length);
  if (!keys.length) return null;
  const mixed = keys.some((key) => JSON.stringify(key.easing) !== JSON.stringify(keys[0].easing));
  return { easing: mixed ? null : keys[0].easing, mixed };
}

// Sets the Easing of every segment an Easing edit of the Lanes `names` sets (easedKeyframes). Smooth clears it.
export function setSegmentEasing(owner, names, frames, easing, length = null) {
  for (const key of easedKeyframes(owner, names, frames, length)) key.easing = copyEasing(easing);
}

// Moving a Clip range keeps `in`, so the material and its Keyframes move with it.
export function moveClip(clip, delta) {
  clip.start = Math.max(0, clip.start + delta);
}

// Trimming the head moves `in` with `start`, so the material's first frame (start - in) and the
// Keyframes on it stay where they are. The head stops at that first frame and one frame before the end.
export function trimClipStart(clip, start) {
  const end = clip.duration === null ? Infinity : clip.start + clip.duration;
  const next = Math.min(Math.max(start, clipOrigin(clip), 0), end - 1);
  const delta = next - clip.start;
  clip.start = next;
  clip.in += delta;
  if (clip.duration !== null) clip.duration -= delta;
}

// An end trimmed up to span (where the rest of the Timeline ends) opens the Clip range again. A
// Clip range that already ends past it stays fixed, as it sets the Timeline's end itself.
export function trimClipEnd(clip, end, span) {
  const reopen = end >= span && (clip.duration === null || clip.start + clip.duration < span);
  clip.duration = reopen ? null : Math.max(1, end - clip.start);
}

function ownerLanes(owner) {
  return laneNames(owner).map((name) => owner[name]);
}

// Whether an owner changes over time: a Keyframe, or a Clip range other than the whole Timeline.
export function ownerTimed(owner) {
  return ownerLanes(owner).some((lane) => lane.keyframes.length > 0) || (!!owner.clip && !defaultClip(owner.clip));
}

// The span timelineSpan gives a broken input (a length or frame that is not a finite number).
export const BROKEN_SPAN = 100000;

// The number of Timeline frames the Timeline shows: exactly the output's length, as `_decide_timeline`
// (nodes.py) decides it (docs/studio-node.md): `timeline.length`, else the Auto length
// (autoTimelineLength of `media`). Nothing past it is in the output, so the Timeline does not reach it. A span
// that is not a finite number (a broken input) is BROKEN_SPAN.
export function timelineSpan(state, media = {}) {
  const { length } = state.timeline;
  const span = length ? Math.max(1, Math.round(length)) : autoTimelineLength(state, media);
  return Number.isFinite(span) ? span : BROKEN_SPAN;
}

// Whether the Timeline plays (docs/timeline-ui.md "再生できるか"): its span (timelineSpan) is longer than one frame. The
// editor's Timeline bar (studio/timeline_model.js) and Panorama Studio's node surface (pano_node_playback.js) both ask
// this, so a node plays on its surface exactly when its editor plays.
export function timelinePlayable(span) {
  return span > 1;
}

// The Auto length: the output length `_decide_timeline` decides without `timeline.length`, by the same rule,
// from the state and what is known of the inputs. Each input is null (or 0) while it is not known, as before a
// run: then the rule goes on to the next step, as if the input had a single frame.
//   bg          the node's own background: { video, frames, duration } (`video` for a VIDEO, `frames` its frame
//               count, `duration` the seconds where its last frame ends), { frames: 1 } for a single image
//   port        the port Sticker's media with two or more frames or items, as its meta
//               (`pano_sticker_input_video_meta`: { kind, frames, duration }; 3D items are kind "IMAGE")
//   sceneItems  the number of items of the `scene` input's content
//   upstream    the upstream Scene: { frames, ends }, its output frame count and the ends of the Clip ranges
//               this node overrides in it (pano_upstream.js upstreamOverriddenEnds)
//   openClip    a Clip range counted as one without a duration (the one being dragged)
//   camera      whether the Camera's Keyframes count (Panorama Studio shoots with it)
//   animations  the clips of the animated 3D files ({ scene: [{ name, duration }] or null, stickers: { id: clips } },
//               the meta's `animation.clips`): an animated `scene` or 3D Sticker without a duration ends one cycle of
//               its clip after its material starts (start − in + animationCycleFrames), as a VIDEO ends with its media
// The state is at the Timeline fps (the editor rebases it to a VIDEO's or the upstream Scene's), so its frames
// are output frames.
export function autoTimelineLength(state, { bg = null, port = null, sceneItems = 0, upstream = null, openClip = null, camera = false, animations = null } = {}) {
  const fps = state.timeline.fps;
  const open = (clip) => clip.duration === null || clip === openClip;
  const ends = [state.scene.clip, ...state.stickers.map((sticker) => sticker.clip)]
    .filter((clip) => !open(clip))
    .map((clip) => clip.start + clip.duration);
  // Without a duration, the port Sticker ends with its media, and the `scene` with its items.
  const portSticker = state.stickers.find((sticker) => sticker.source.kind === "port");
  if (port && portSticker && open(portSticker.clip)) ends.push(portMediaFrames({ ...portSticker.clip, duration: null }, fps, port));
  const sceneClip = state.scene.clip;
  if (sceneItems > 1 && open(sceneClip)) ends.push(clipOrigin(sceneClip) + sceneItems);
  // An animated 3D file without a duration ends with one cycle of its clip (ADR 0043).
  const cycleEnd = (owner, clips) => {
    const frames = animationCycleFrames(clips, owner.animation, fps);
    if (frames !== null && open(owner.clip)) ends.push(clipOrigin(owner.clip) + frames);
  };
  if (animations?.scene) cycleEnd(state.scene, animations.scene);
  for (const sticker of state.stickers) {
    const clips = animations?.stickers?.[sticker.id];
    if (clips) cycleEnd(sticker, clips);
  }
  // A single background image ends with its Clip range, as a Sticker's image does.
  const bgClip = state.background.clip;
  if (bg?.frames === 1 && !bg.video && !open(bgClip)) ends.push(bgClip.start + bgClip.duration);
  const keys = camera ? ownerLanes(state.camera).flatMap((lane) => lane.keyframes.map((key) => key.frame)) : [];
  let length = 1;
  // A background with frames sets the length by its media's own frames, whatever its Clip range. A background
  // VIDEO that does not set the Timeline (an upstream Scene does) lasts until its last frame ends.
  if (bg?.video) length = upstream ? Math.max(1, Math.round(bg.duration * fps)) : bg.frames;
  else if (bg?.frames > 1) length = bg.frames;
  else if (ends.length) length = Math.max(1, Math.round(Math.max(...ends)));
  else if (keys.length) length = Math.max(1, Math.round(Math.max(...keys)) + 1);
  if (upstream) length = Math.max(length, upstream.frames, ...upstream.ends.map(Math.round));
  return length;
}

// The Timeline fps typed in the fps field sets: brought into the range a state keeps, or null (rejected)
// when it is not a positive number.
export function enteredTimelineFps(value) {
  return value > 0 ? timelineFps(Math.min(value, TIMELINE_FPS_MAX)) : null;
}

// The `timeline.length` a length action sets: null (the reset button: the length the inputs give), a number
// brought into 1..TIMELINE_LENGTH_MAX, or undefined (rejected) when it is not a number.
export function enteredTimelineLength(value) {
  if (value === null) return null;
  return Number.isNaN(value) ? undefined : timelineLength(Math.max(1, Math.min(value, TIMELINE_LENGTH_MAX)));
}

const TICK_STEPS = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000];
// The ruler never has more labels than this, however long the Timeline is.
export const MAX_TICKS = 2000;

// The frames the ruler labels: the smallest step that leaves minGapPx between labels at pxPerFrame,
// at most MAX_TICKS of them.
export function timelineTicks(span, pxPerFrame, minGapPx = 56) {
  const step = TICK_STEPS.find((item) => item * pxPerFrame >= minGapPx) || TICK_STEPS[TICK_STEPS.length - 1];
  const out = [];
  for (let frame = 0; frame < span && out.length < MAX_TICKS; frame += step) out.push(frame);
  return out;
}

// Groups sorted frames whose gaps are below minGap into one pin, so dense Keyframes show as one
// mark. Each pin has the frames it stands for and the frame it is drawn at.
export function clusterFrames(frames, minGap) {
  const pins = [];
  for (const frame of frames) {
    const last = pins[pins.length - 1];
    if (last && frame - last.frames[last.frames.length - 1] < minGap) last.frames.push(frame);
    else pins.push({ frames: [frame] });
  }
  for (const pin of pins) pin.frame = (pin.frames[0] + pin.frames[pin.frames.length - 1]) / 2;
  return pins;
}

// The id of the painting's Timeline row.
export const PAINTING_ROW = "painting";
// The id of the Timeline row of the node's own background (state.background).
export const BACKGROUND_ROW = "background";

// Whether the painting holds anything (strokes, mask strokes or rasters); its Timeline row shows while it does.
export function hasPainting(painting) {
  return painting.paint.strokes.length > 0 || painting.mask.strokes.length > 0 || painting.raster_objects.length > 0;
}

// The name each Lane has on its Timeline line.
export const LANE_LABELS = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  curve: "Lens curve",
  look_at: "Look at",
  lens: "Lens",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity",
  offset_rotation: "Offset",
  offset_fov: "Zoom",
};
