// Timeline edits on state v2 (docs/scene-state-v2.md) by the rules of docs/timeline-ui.md: recording
// Lane values, Keyframe edits on one Lane or on every Lane of a row at once, Clip range edits that keep
// the Keyframes on the content, and Easing edits. Frames passed for an owner (the Camera, scene or a
// Sticker) are in its own time base: Timeline frames for the Camera, Clip frames (from start - in) for
// scene and the Stickers.
import { evaluateLane, FRAME_EPSILON } from "./pano_scene_eval.js";
import {
  CAMERA_LANES,
  DEFAULT_EASING,
  SCENE_LANES,
  SKY_STICKER_LANES,
  TIMELINE_FPS_MAX,
  TIMELINE_LENGTH_MAX,
  timelineFps,
  timelineLength,
  WORLD_STICKER_LANES,
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

// Adds a Keyframe. Between two Keyframes it takes the Easing of the segment it splits, so both halves
// keep it. Before the first it has the default; after the last, the former last Keyframe's stored
// Easing now governs the new segment and the new Keyframe has the default.
function insertKeyframe(lane, frame, value) {
  const index = lane.keyframes.findIndex((item) => item.frame > frame);
  const easing = index > 0 ? copyEasing(lane.keyframes[index - 1].easing) : [...DEFAULT_EASING];
  lane.keyframes.splice(index < 0 ? lane.keyframes.length : index, 0, { frame, value, easing });
}

// An edit of the Lane `name` of `owner` at frame. Without Keyframes it changes the static value. With
// Keyframes it updates the Keyframe at frame, or adds one there from the current value, so a drag adds
// a Keyframe on its first change and updates it after; the static value stays as it is.
export function setLaneValue(owner, name, frame, patch) {
  const lane = owner[name];
  if (!lane.keyframes.length) {
    lane.value = merged(lane.value, patch);
    return;
  }
  const key = keyAt(lane, frame);
  if (key) key.value = merged(key.value, patch);
  else insertKeyframe(lane, frame, merged(evaluateLane(owner, name, frame), patch));
}

// The names of the Lanes an owner of a working state v2 has, in their stored order.
export function laneNames(owner) {
  if (owner.placement === "world") return WORLD_STICKER_LANES.map(([name]) => name);
  if (owner.placement === "sky") return SKY_STICKER_LANES.map(([name]) => name);
  return (owner.clip ? SCENE_LANES : CAMERA_LANES).map(([name]) => name);
}

// The row's key button: every Lane of owner gets a Keyframe at frame holding its current value. This
// also makes the first Keyframe of a Lane.
export function keyAllLanes(owner, frame) {
  for (const name of laneNames(owner)) {
    if (!keyAt(owner[name], frame)) insertKeyframe(owner[name], frame, evaluateLane(owner, name, frame));
  }
}

// The frames of a row's Keyframes, one pin per frame: `full` when every Lane has a Keyframe there.
export function rowKeyframes(owner) {
  const names = laneNames(owner);
  const counts = new Map();
  for (const name of names) {
    for (const key of owner[name].keyframes) counts.set(key.frame, (counts.get(key.frame) || 0) + 1);
  }
  return [...counts].sort((a, b) => a[0] - b[0]).map(([frame, count]) => ({ frame, full: count === names.length }));
}

// Whether every Lane of owner has a Keyframe at frame.
export function rowKeyed(owner, frame) {
  return laneNames(owner).every((name) => !!keyAt(owner[name], frame));
}

// Removes the Keyframes at frames from the Lanes `names` of owner. A Lane left without Keyframes keeps
// the value it had at playhead as its static value, so nothing jumps; deleting a Lane's only Keyframe
// keeps that Keyframe's value.
export function deleteKeyframes(owner, names, frames, playhead) {
  const removed = new Set(frames);
  for (const name of names) {
    const lane = owner[name];
    if (!lane.keyframes.some((item) => removed.has(item.frame))) continue;
    const value = evaluateLane(owner, name, playhead);
    lane.keyframes = lane.keyframes.filter((item) => !removed.has(item.frame));
    if (!lane.keyframes.length) lane.value = value;
  }
}

// Shifts the Keyframes at frames of the Lanes `names` by delta, but not past floor (Timeline frame 0
// in owner's time base), and returns the delta applied. A moved Keyframe replaces one of its own Lane
// that it lands on.
export function moveKeyframes(owner, names, frames, delta, floor) {
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

// The Keyframes whose Easing a selection of Keyframe frames edits: those from the first selected frame
// up to (not including) the last, or the one at a single selected frame. A Lane's last Keyframe is
// left out, as its Easing is not used.
function easedKeyframes(owner, names, frames) {
  const from = Math.min(...frames);
  const to = Math.max(...frames);
  return names.flatMap((name) => owner[name].keyframes
    .slice(0, -1)
    .filter((key) => (frames.length > 1 ? key.frame >= from && key.frame < to : key.frame === from)));
}

// The Easing of the selected segments of the Lanes `names`: { easing, mixed }, with easing null when
// they differ, or null when the selection has no segment.
export function selectedEasing(owner, names, frames) {
  const keys = easedKeyframes(owner, names, frames);
  if (!keys.length) return null;
  const mixed = keys.some((key) => JSON.stringify(key.easing) !== JSON.stringify(keys[0].easing));
  return { easing: mixed ? null : keys[0].easing, mixed };
}

// Sets the Easing of every selected segment of the Lanes `names`.
export function setSegmentEasing(owner, names, frames, easing) {
  for (const key of easedKeyframes(owner, names, frames)) key.easing = copyEasing(easing);
}

// Moving a Clip range keeps `in`, so the material and its Keyframes move with it.
export function moveClip(clip, delta) {
  clip.start = Math.max(0, clip.start + delta);
}

// Trimming the head moves `in` with `start`, so the material's first frame (start - in) and the
// Keyframes on it stay where they are. The head stops at that first frame and one frame before the end.
export function trimClipStart(clip, start) {
  const end = clip.duration === null ? Infinity : clip.start + clip.duration;
  const next = Math.min(Math.max(start, clip.start - clip.in, 0), end - 1);
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

function defaultClip(clip) {
  return clip.start === 0 && clip.in === 0 && clip.duration === null;
}

function ownerLanes(owner) {
  return laneNames(owner).map((name) => owner[name]);
}

// Whether the editor's Timeline opens by itself: something it shows changes over time. The Cutout shows
// only its Camera (`cameraOnly`); Panorama Studio counts its Camera with the rest (`camera`, #89).
export function timelineOpens(state, { cameraOnly = false, camera = false } = {}) {
  if (cameraOnly) return ownerLanes(state.camera).some((lane) => lane.keyframes.length > 0);
  return isTimed(state, { camera });
}

// Whether an owner changes over time: a Keyframe, or a Clip range other than the whole Timeline.
export function ownerTimed(owner) {
  return ownerLanes(owner).some((lane) => lane.keyframes.length > 0) || (!!owner.clip && !defaultClip(owner.clip));
}

// Whether anything in the state changes over time. The Camera's Keyframes count only with `camera`
// (Cutout, Panorama Studio); Stickers has no Camera (ADR 0028).
export function isTimed(state, { camera = false } = {}) {
  return [...(camera && state.camera ? [state.camera] : []), state.scene, ...state.stickers].some(ownerTimed);
}

// The number of Timeline frames the Timeline shows: the Timeline length, or without one `minimum`
// widened to `frames` (the video's frame count), then widened to every Clip range edge and Keyframe
// (the Camera's only with `camera`, as in isTimed). The end of `openClip` counts as open. A span that
// is not a finite number (a broken input) is TIMELINE_LENGTH_MAX.
export function timelineSpan(state, { minimum, frames = 0, openClip = null, camera = false }) {
  let end = state.timeline.length ?? Math.max(minimum, frames);
  if (camera && state.camera) {
    for (const lane of ownerLanes(state.camera)) {
      for (const key of lane.keyframes) end = Math.max(end, key.frame + 1);
    }
  }
  for (const owner of [state.scene, ...state.stickers]) {
    const { clip } = owner;
    end = Math.max(end, clip.duration === null || clip === openClip ? clip.start + 1 : clip.start + clip.duration);
    for (const lane of ownerLanes(owner)) {
      for (const key of lane.keyframes) end = Math.max(end, clip.start - clip.in + key.frame + 1);
    }
  }
  return Number.isFinite(end) ? end : TIMELINE_LENGTH_MAX;
}

// The Timeline fps typed in the fps field sets: brought into the range a state keeps, or null (rejected)
// when it is not a positive number.
export function enteredTimelineFps(value) {
  return value > 0 ? timelineFps(Math.min(value, TIMELINE_FPS_MAX)) : null;
}

// The `timeline.length` typed in the length field sets: null (Auto) for an empty field, brought into
// 1..TIMELINE_LENGTH_MAX, or undefined (rejected) when it is not a number.
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
