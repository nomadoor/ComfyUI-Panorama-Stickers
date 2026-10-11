// Timeline edits on state v2 (docs/scene-state-v2.md) by the rules of docs/timeline-ui.md: recording
// Lane values, Keyframe edits on one Lane or on every Lane of a row at once, Clip range edits that keep
// the Keyframes on the content, and Easing edits. Frames passed for an owner (the Camera, scene or a
// Sticker) are in its own time base: Timeline frames for the Camera, Clip frames (from start - in) for
// scene and the Stickers.
import { animationCycleFrames } from "./pano_animation.js";
import { portMediaFrames } from "./pano_port_media.js";
import { evaluateLane, FRAME_EPSILON } from "./pano_scene_eval.js";
import {
  CAMERA_LANES,
  DEFAULT_EASING,
  defaultClip,
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
  if (owner.placement === "world" || owner.placement === "sky") return stickerLanes(owner).map(([name]) => name);
  // The background (state.background) has a Clip range and no Lanes.
  if (owner.clip && !owner.position) return [];
  return (owner.clip ? SCENE_LANES : CAMERA_LANES).map(([name]) => name);
}

// The lens Lanes (ADR 0042): the Camera's `curve`, and the `curve` and `lens` Pose handoff writes on a Sticker. A
// row's key button and its pins leave them out, so a row keyed everywhere stays one full pin and pressing the
// button writes no lens Keyframes; a lens Lane is keyed by its own edits and shows on its own Lane line.
const ROW_EXCLUDED_LANES = new Set(["curve", "lens"]);

// The Lanes a row's key button and pins act on: laneNames() without the lens Lanes.
export function rowLaneNames(owner) {
  return laneNames(owner).filter((name) => !ROW_EXCLUDED_LANES.has(name));
}

// The row's key button: every Lane of owner gets a Keyframe at frame holding its current value. This
// also makes the first Keyframe of a Lane.
export function keyAllLanes(owner, frame) {
  for (const name of rowLaneNames(owner)) {
    if (!keyAt(owner[name], frame)) insertKeyframe(owner[name], frame, evaluateLane(owner, name, frame));
  }
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

// The Timeline's time at frame: the frame and the seconds at fps.
export function timelineTimeLabel(frame, fps) {
  return `${frame}f · ${(frame / fps).toFixed(2)}s`;
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

function ownerLanes(owner) {
  return laneNames(owner).map((name) => owner[name]);
}

// Whether an owner changes over time: a Keyframe, or a Clip range other than the whole Timeline.
export function ownerTimed(owner) {
  return ownerLanes(owner).some((lane) => lane.keyframes.length > 0) || (!!owner.clip && !defaultClip(owner.clip));
}

// Whether anything in the state changes over time; the editor's Timeline opens by itself when it does.
// The Camera's Keyframes count only with `camera` (Panorama Studio, #89); the background's Clip range always.
export function isTimed(state, { camera = false } = {}) {
  return [...(camera && state.camera ? [state.camera] : []), state.background, state.scene, ...state.stickers].some(ownerTimed);
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

// The Auto length: the output length `_decide_timeline` decides without `timeline.length`, by the same rule,
// from the state and what is known of the inputs. Each input is null (or 0) while it is not known, as before a
// run: then the rule goes on to the next step, as if the input had a single frame.
//   bg          the node's own bg_media: { video, frames, duration } (`video` for a VIDEO, `frames` its frame
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
  if (sceneItems > 1 && open(sceneClip)) ends.push(sceneClip.start - sceneClip.in + sceneItems);
  // An animated 3D file without a duration ends with one cycle of its clip (ADR 0043).
  const cycleEnd = (owner, clips) => {
    const frames = animationCycleFrames(clips, owner.animation, fps);
    if (frames !== null && open(owner.clip)) ends.push(owner.clip.start - owner.clip.in + frames);
  };
  if (animations?.scene) cycleEnd(state.scene, animations.scene);
  for (const sticker of state.stickers) {
    const clips = animations?.stickers?.[sticker.id];
    if (clips) cycleEnd(sticker, clips);
  }
  // A single background image ends with its Clip range, as a Sticker's image does.
  const bgClip = state.background.clip;
  if (bg?.frames === 1 && !bg.video && !open(bgClip)) ends.push(bgClip.start + bgClip.duration);
  const keys = camera && state.camera ? ownerLanes(state.camera).flatMap((lane) => lane.keyframes.map((key) => key.frame)) : [];
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
