// The path line of the selected object's position on the new UI's stage (docs/studio-ui.md "軌道の線"): the points it
// is drawn through (the evaluator's shape, pano_scene_eval.js: the line has no shape of its own), its Keyframe points
// and handles, the speed dots, what the pointer is over, and what a handle drag and the point types write. Pure: World
// points in, screen points and Lane edits out; stage_objects.js presses and drags, stage_overlay.js draws.
import { laneView, positionOffsets, positionPoints, positionsAt } from "../pano_scene_eval.js";
import { easingSegments } from "../pano_timeline.js";
import { projectPoint } from "../space/camera.js";
import { planeHit, pointerRay } from "./gizmo_overlay.js";

// The amounts of docs/space-and-view.md "量の一覧".
export const PATH_HIT = 7;
export const PATH_POINT_HIT = 9;
export const PATH_TICK_FRAMES = 2;
// The points a segment is drawn through, evenly in its shape parameter.
const SEGMENT_STEPS = 32;
// The most Timeline frames sampled for the speed dots and the line's frames; a longer path samples every few frames.
const MAX_FRAME_SAMPLES = 4000;
// A handle shorter than this is none.
const HANDLE_EPSILON = 1e-12;

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const length = (a) => Math.sqrt(dot(a, a));

// The point type of a position Keyframe (docs/scene-state-v2.md "Keyframe"): "corner", "bezier" (it has handles) or
// "auto".
export function pointType(key) {
  if (key.corner === true) return "corner";
  return key.handles && (key.handles.in || key.handles.out) ? "bezier" : "auto";
}

function hasSegment(view, k) {
  return view.loop || (k >= 0 && k <= view.n - 2);
}

// The path of the `position` Lane of `owner` with the loop period `period`, its Keyframes in its own time base and
// `offset` the Timeline frame of its time base's 0 (a Sticker's Clip range origin), or null with fewer than two
// Keyframes: { view, loop, keys [{ index, frame, value, type }], segments [{ k, hold, points }], frames [{ frame (a
// Timeline frame), point }] }. `frames` holds the position at each Timeline frame along the path (every few frames on a
// very long one), from its first Keyframe to its last (around one period when it loops).
export function pathOf(owner, period = null, offset = 0) {
  const keyframes = owner?.position?.keyframes ?? [];
  if (keyframes.length < 2) return null;
  const view = laneView(keyframes, period);
  const count = view.loop ? view.n : view.n - 1;
  const taus = [];
  for (let i = 0; i <= SEGMENT_STEPS; i += 1) taus.push(i / SEGMENT_STEPS);
  const segments = [];
  for (let k = 0; k < count; k += 1) {
    const hold = view.at(k).easing === "hold";
    segments.push({ k, hold, points: hold ? [view.at(k).value, view.at(k + 1).value] : positionPoints(view, k, taus) });
  }
  const first = keyframes[0].frame + offset;
  const last = view.loop ? first + view.period : keyframes[keyframes.length - 1].frame + offset;
  const step = Math.max(1, Math.ceil((last - first) / MAX_FRAME_SAMPLES));
  const frames = [];
  let k = 0;
  const end = view.loop ? last - 1e-6 : last;
  for (let frame = Math.ceil(first); frame <= end; frame += step) {
    const own = frame - offset;
    while (k < count - 1 && view.at(k + 1).frame <= own) k += 1;
    const span = view.at(k + 1).frame - view.at(k).frame;
    frames.push({ frame, k, u: Math.min(1, Math.max(0, (own - view.at(k).frame) / span)) });
  }
  // The positions, segment by segment, each segment's shape measured once.
  const bySegment = new Map();
  frames.forEach((item, i) => {
    if (!bySegment.has(item.k)) bySegment.set(item.k, []);
    bySegment.get(item.k).push(i);
  });
  for (const [segment, indices] of bySegment) {
    const points = positionsAt(view, segment, indices.map((i) => frames[i].u));
    indices.forEach((i, j) => { frames[i] = { frame: frames[i].frame, point: points[j] }; });
  }
  return {
    view,
    loop: view.loop,
    keys: keyframes.map((key, index) => ({ index, frame: key.frame, value: key.value, type: pointType(key) })),
    segments,
    frames,
  };
}

// The handles of the Keyframe `index` of a path (pathOf): [{ side ("in" | "out"), offset, tip (a World point), written }]
// for each side with a segment that is not a hold and moves (the shape's control-point offsets, pano_scene_eval.js
// positionOffsets: the written ones or the automatic ones).
export function pathHandles(path, index) {
  const { view } = path;
  const key = view.at(index);
  const out = [];
  const add2 = (side, k, which) => {
    if (!hasSegment(view, k) || view.at(k).easing === "hold") return;
    const offset = positionOffsets(view, k)[which];
    if (length(offset) <= HANDLE_EPSILON) return;
    out.push({ side, offset, tip: add(key.value, offset), written: !!key.handles?.[side] });
  };
  add2("in", index - 1, 1);
  add2("out", index, 0);
  return out;
}

// A path's screen points on `camera` ({ width, height } CSS px): { keys [{ x, y } | null], segments [{ k, hold, runs
// [[{ x, y }]] }], frames [{ frame, x, y }] }, each segment cut into runs where its points are behind the view.
export function pathScreen(path, camera, width, height) {
  if (!path) return null;
  const at = (point) => projectPoint(camera, point, width, height);
  const runsOf = (points) => {
    const runs = [];
    let run = [];
    for (const point of points) {
      const p = at(point);
      if (!p) {
        if (run.length > 1) runs.push(run);
        run = [];
        continue;
      }
      run.push({ x: p.x, y: p.y });
    }
    if (run.length > 1) runs.push(run);
    return runs;
  };
  return {
    keys: path.keys.map((key) => {
      const p = at(key.value);
      return p ? { x: p.x, y: p.y } : null;
    }),
    segments: path.segments.map((segment) => ({ k: segment.k, hold: segment.hold, runs: runsOf(segment.points) })),
    frames: path.frames.flatMap((item) => {
      const p = at(item.point);
      return p ? [{ frame: item.frame, x: p.x, y: p.y }] : [];
    }),
  };
}

// The Keyframe point of the path on the screen under `point` (CSS px), the nearest within PATH_POINT_HIT: its index,
// or null.
export function keyUnder(screen, point) {
  let best = null;
  screen?.keys.forEach((key, index) => {
    if (!key) return;
    const distance = Math.hypot(key.x - point.x, key.y - point.y);
    if (distance <= PATH_POINT_HIT && (!best || distance < best.distance)) best = { index, distance };
  });
  return best ? best.index : null;
}

// The handle under `point` among the screen handles [{ side, x, y }], the nearest within PATH_POINT_HIT, or null.
export function handleUnder(handles, point) {
  let best = null;
  for (const handle of handles ?? []) {
    const distance = Math.hypot(handle.x - point.x, handle.y - point.y);
    if (distance <= PATH_POINT_HIT && (!best || distance < best.distance)) best = { handle, distance };
  }
  return best ? best.handle : null;
}

function distanceToRun(run, point) {
  let best = Infinity;
  for (let i = 0; i < run.length - 1; i += 1) {
    const a = run[i];
    const b = run[i + 1];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const span = dx * dx + dy * dy;
    const t = span > 0 ? Math.min(1, Math.max(0, ((point.x - a.x) * dx + (point.y - a.y) * dy) / span)) : 0;
    best = Math.min(best, Math.hypot(point.x - (a.x + dx * t), point.y - (a.y + dy * t)));
  }
  return best;
}

// Whether `point` is within PATH_HIT of the path line on the screen.
export function onLine(screen, point) {
  if (!screen) return false;
  return screen.segments.some((segment) => segment.runs.some((run) => distanceToRun(run, point) <= PATH_HIT));
}

// The Timeline frame of the path nearest to `point` on the screen (the line's frames), or null.
export function frameNear(screen, point) {
  let best = null;
  for (const item of screen?.frames ?? []) {
    const distance = Math.hypot(item.x - point.x, item.y - point.y);
    if (!best || distance < best.distance) best = { frame: item.frame, distance };
  }
  return best ? best.frame : null;
}

// Where the ray through `point` meets the plane through `grabbed` facing the view, or null (a drag of a point or a
// handle moves on that plane).
export function dragPoint(camera, point, width, height, grabbed) {
  const toward = sub(grabbed, camera.position);
  const size = length(toward);
  if (!(size > 0)) return null;
  return planeHit(pointerRay(camera, point, width, height), grabbed, scale(toward, 1 / size));
}

// The Easing segments of the selected Keyframes of the position Lane (`frames` in its own time base), as the path's
// segment indices: they are drawn white (docs/studio-ui.md "軌道の線" "Easing の対象の強調"). `length` is the output
// length.
export function easedSegments(owner, frames, length = null) {
  return new Set(easingSegments(owner, ["position"], frames, length).map((item) => item.index));
}

// Writes the handle `side` of the position Keyframe `index` of `owner` (changed in place) as the World `offset` from
// its value: the Keyframe becomes Bezier. One that is not a corner keeps a straight line through it: the other side is
// written opposite, as long as it was (its written length, else the automatic one); a corner moves that side alone.
// `period` is the owner's loop period.
export function writeHandle(owner, index, side, offset, period = null) {
  const keys = owner.position.keyframes;
  const key = keys[index];
  const other = side === "out" ? "in" : "out";
  const before = pathOf(owner, period);
  const otherHandle = before ? pathHandles(before, index).find((handle) => handle.side === other) : null;
  key.handles = { ...(key.handles ?? {}), [side]: [...offset] };
  if (key.corner === true || !otherHandle) return;
  const size = length(offset);
  if (!(size > HANDLE_EPSILON)) return;
  key.handles[other] = scale(offset, -length(otherHandle.offset) / size);
}

// Sets the point type of the position Keyframes at `frames` (their own time base) of `owner` (changed in place;
// docs/studio-ui.md "軌道の線" "点の種類"): Auto takes the corner mark and the handles off, Bezier takes the corner off
// and writes the handles of the shape now (the path does not change), Corner sets the mark and takes the handles off
// (straight to the next Keyframes). Returns whether anything changed.
export function setPointType(owner, frames, type, period = null) {
  const keys = owner.position.keyframes;
  const wanted = new Set(frames);
  const indices = keys.flatMap((key, index) => (wanted.has(key.frame) && pointType(key) !== type ? [index] : []));
  if (!indices.length) return false;
  // Bezier writes the shape as it is before any of them changes.
  const path = type === "bezier" ? pathOf(owner, period) : null;
  const written = new Map(indices.map((index) => [index, path ? pathHandles(path, index) : []]));
  for (const index of indices) {
    const key = keys[index];
    delete key.corner;
    delete key.handles;
    if (type === "corner") key.corner = true;
    if (type === "bezier") {
      const handles = Object.fromEntries(written.get(index).map((handle) => [handle.side, [...handle.offset]]));
      if (Object.keys(handles).length) key.handles = handles;
    }
  }
  return true;
}

// The point-type double click on the Keyframe `index` (docs/studio-ui.md "軌道の線"): a corner back to Auto, any other
// to Corner. Returns the type it set.
export function togglePointCorner(owner, index, period = null) {
  const key = owner.position.keyframes[index];
  const type = key.corner === true ? "auto" : "corner";
  setPointType(owner, [key.frame], type, period);
  return type;
}

// The position Keyframes the point types act on (docs/studio-ui.md "軌道の線" "点の種類"): the selected ones
// (`frames`, their own time base) that the Lane has, else the one at the playhead (`at`, its own time base), as frames.
export function pointTargets(owner, frames, at) {
  const keys = owner?.position?.keyframes ?? [];
  const selected = keys.filter((key) => frames.includes(key.frame)).map((key) => key.frame);
  if (selected.length) return selected;
  const here = keys.find((key) => Math.abs(key.frame - at) <= 1e-6);
  return here ? [here.frame] : [];
}
