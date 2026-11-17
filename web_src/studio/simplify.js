// Simplify (docs/timeline-ui.md "Simplify", ADR 0064): fewer Keyframes over a stretch of one row that keep the shape and
// the times it passes. The Keyframes kept never move in time; it only removes Keyframes and writes the kept ones'
// handles and Easing again. Pure: an owner and its Lanes in, plans and new Lanes out (pano_scene_eval.js evaluates).
import { cubicProgress, laneSampler, laneView } from "../pano_scene_eval.js";
import { DEFAULT_EASING } from "../pano_scene_state.js";
import { worldRotation } from "../pano_world.js";
import { eyeHeight } from "./view_scale.js";

// The amounts of docs/timeline-ui.md "Simplify".
export const SIMPLIFY_TOLERANCE = 0.012;
export const SIMPLIFY_MIN_TURN_DEG = 5;
const LINEAR = Object.freeze([0, 0, 1, 1]);
const DEG = Math.PI / 180;

// A deep copy of plain state data (the editor hands state through Vue, whose proxies structuredClone refuses).
const copy = (value) => JSON.parse(JSON.stringify(value));

const dist3 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

// The angle (radians) between two turns, from the trace of their relative rotation.
function turnBetween(a, b) {
  const ma = worldRotation(a.yaw_deg, a.pitch_deg, a.roll_deg);
  const mb = worldRotation(b.yaw_deg, b.pitch_deg, b.roll_deg);
  let trace = 0;
  for (let i = 0; i < 3; i += 1) for (let j = 0; j < 3; j += 1) trace += ma[j][i] * mb[j][i];
  return Math.acos(Math.min(1, Math.max(-1, (trace - 1) / 2)));
}

function directionVector(value) {
  const yaw = value.yaw_deg * DEG;
  const pitch = value.pitch_deg * DEG;
  return [Math.cos(pitch) * Math.sin(yaw), Math.sin(pitch), Math.cos(pitch) * Math.cos(yaw)];
}

function angleBetween(a, b) {
  const cross = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  return Math.atan2(Math.hypot(...cross), a[0] * b[0] + a[1] * b[1] + a[2] * b[2]);
}

const logRatio = (a, b) => Math.abs(Math.log(Math.max(a, 1e-9) / Math.max(b, 1e-9)));

// How far apart two values of the Lane `name` are, and the measure that divides it (docs/timeline-ui.md "Simplify"
// "ずれの測り方"), from the original values over the stretch (`values`).
export function laneMeasure(name, values, { camera, ground, hfov }) {
  if (name === "position") {
    const min = [0, 1, 2].map((axis) => Math.min(...values.map((value) => value[axis])));
    const max = [0, 1, 2].map((axis) => Math.max(...values.map((value) => value[axis])));
    return { distance: dist3, scale: Math.max(dist3(min, max), eyeHeight(ground)) };
  }
  // A returned shot's offset turn is measured as a turn (the least as a World object's), its zoom as a ratio.
  if (name === "rotation" || name === "offset_rotation") {
    const moved = Math.max(0, ...values.map((value) => turnBetween(values[0], value)));
    const least = camera && name === "rotation" ? hfov * DEG : SIMPLIFY_MIN_TURN_DEG * DEG;
    return { distance: turnBetween, scale: Math.max(moved, least) };
  }
  if (name === "direction") {
    const distance = (a, b) => angleBetween(directionVector(a), directionVector(b));
    const moved = Math.max(0, ...values.map((value) => distance(values[0], value)));
    return { distance, scale: Math.max(moved, hfov * DEG) };
  }
  if (name === "roll") {
    const distance = (a, b) => Math.abs(a - b) * DEG;
    const moved = Math.max(0, ...values.map((value) => distance(values[0], value)));
    return { distance, scale: Math.max(moved, SIMPLIFY_MIN_TURN_DEG * DEG) };
  }
  // A port Sticker's vFOV follows its media and may be left out: the vFOV counts only where both have it.
  if (name === "size") {
    const distance = (a, b) => (Number.isFinite(a.vFOV_deg) && Number.isFinite(b.vFOV_deg)
      ? Math.max(logRatio(a.hFOV_deg, b.hFOV_deg), logRatio(a.vFOV_deg, b.vFOV_deg))
      : logRatio(a.hFOV_deg, b.hFOV_deg));
    return { distance, scale: 1 };
  }
  if (name === "lens") return { distance: (a, b) => Math.max(Math.abs(a.curve - b.curve), logRatio(a.hFOV_deg, b.hFOV_deg)), scale: 1 };
  if (name === "fov" || name === "scale" || name === "offset_fov") return { distance: logRatio, scale: 1 };
  return { distance: (a, b) => Math.abs(a - b), scale: 1 };
}

// How far along the shape the original moved at each frame of a segment from frame `a` to `b` (0..1), the share a
// fitted cubic-bezier follows: by the measure of the Lane between consecutive frames.
function progressSamples(frames, values, distance) {
  const steps = [0];
  for (let i = 1; i < values.length; i += 1) steps.push(steps[i - 1] + distance(values[i - 1], values[i]));
  const total = steps[steps.length - 1];
  const span = frames[frames.length - 1] - frames[0];
  return frames.map((frame, i) => ({ u: span > 0 ? (frame - frames[0]) / span : 0, p: total > 1e-12 ? steps[i] / total : (span > 0 ? (frame - frames[0]) / span : 0) }));
}

// The cubic-bezier (each value 0..1) nearest the progress samples by least squares: a grid, then a narrowing search.
export function fitEasing(samples) {
  const cost = (e) => samples.reduce((sum, { u, p }) => sum + (cubicProgress(e, u) - p) ** 2, 0);
  let best = [...LINEAR];
  let bestCost = cost(best);
  // A coarse grid finds the basin, the narrowing search the curve in it.
  const grid = [0, 0.25, 0.5, 0.75, 1];
  for (const x1 of grid) for (const y1 of grid) for (const x2 of grid) for (const y2 of grid) {
    const e = [x1, y1, x2, y2];
    const c = cost(e);
    if (c < bestCost) [best, bestCost] = [e, c];
  }
  for (let step = 0.125; step >= 1 / 1024; step /= 2) {
    let moved = true;
    while (moved) {
      moved = false;
      for (let i = 0; i < 4; i += 1) {
        for (const sign of [-1, 1]) {
          const e = [...best];
          e[i] = Math.min(1, Math.max(0, e[i] + sign * step));
          const c = cost(e);
          if (c < bestCost - 1e-15) {
            [best, bestCost] = [e, c];
            moved = true;
          }
        }
      }
    }
  }
  return best;
}

// The plan of a Simplify of the Lanes `names` of `owner` over the stretch from the leftmost selected Keyframe frame to
// the rightmost (`frames`, its own time base): which Keyframe frames it may remove, the order they come back in, and
// the deviation of each count (docs/timeline-ui.md "Simplify"). `period` is the owner's loop period, `ground` the
// ground height (the eye height E is the least position measure), `camera` whether the owner is the Camera, `hfov` the
// Camera's H FOV or a sky image's (the least turn measure). Null without three Keyframes in the stretch.
//   { start, end, candidates, mustKeep, order, errors, original, least, fallback, build(n) }
// order lists the frames kept first (the ends and the must-keeps) then each added back; errors[n] is the deviation with
// the first n kept; build(n) gives the Lanes (by name) with the first n kept, their handles and Easing written again.
export function planSimplify(owner, names, frames, { period = null, ground = -1.6, camera = false, hfov = 90, lookAt = null, memo: memoAsked = true } = {}) {
  if (!frames.length) return null;
  const start = Math.min(...frames);
  const end = Math.max(...frames);
  const lanes = names.filter((name) => owner[name]?.keyframes);
  const candidates = [...new Set(lanes.flatMap((name) => owner[name].keyframes.map((key) => key.frame)))]
    .filter((frame) => frame >= start && frame <= end).sort((a, b) => a - b);
  if (candidates.length < 3) return null;
  // The Keyframes it never removes: the ends, a hold's start and end, corners, a loop's seam, and the Camera's Look at
  // Keyframes.
  const mustKeep = new Set([start, end]);
  for (const name of lanes) {
    const keys = owner[name].keyframes;
    keys.forEach((key, index) => {
      if (key.easing === "hold" && index + 1 < keys.length) {
        mustKeep.add(key.frame);
        mustKeep.add(keys[index + 1].frame);
      }
      if (key.corner === true) mustKeep.add(key.frame);
    });
    const view = laneView(keys, period);
    if (view.loop) {
      mustKeep.add(keys[0].frame);
      mustKeep.add(keys[keys.length - 1].frame);
    }
  }
  for (const key of lookAt?.keyframes ?? []) mustKeep.add(key.frame);
  // A looping Lane's first segments read its last Keyframes across the seam, which the memo's context (the kept
  // Keyframes from the stretch's start) does not hold: a looping row is made again every time, as without the memo.
  const memo = memoAsked && !lanes.some((name) => laneView(owner[name].keyframes, period).loop);
  const kept0 = candidates.filter((frame) => mustKeep.has(frame));
  // The original values at each frame of the stretch, and each Lane's measure.
  const sampleFrames = [];
  for (let frame = Math.ceil(start); frame <= end; frame += 1) sampleFrames.push(frame);
  // Each Lane is read through one laneSampler: its shapes are measured once, not at every frame.
  const original = Object.fromEntries(lanes.map((name) => {
    const read = laneSampler(owner, name, period);
    return [name, sampleFrames.map((frame) => read(frame))];
  }));
  const ownPosition = lanes.includes("position") ? laneSampler(owner, "position", period) : null;
  // What depends on the original only, made once for each segment from Keyframe frame a to b: the fitted Easing
  // (fitEasing) and the handles from the original path.
  const fitted = new Map();
  const bent = new Map();
  // Each segment's handles and Easing, by the kept Keyframes around it (buildKept).
  const decided = new Map();
  const measures = Object.fromEntries(lanes.map((name) => [name, laneMeasure(name, original[name], { camera, ground, hfov })]));

  // The deviation per frame of Lanes `built` from the original, the largest over the Lanes.
  // Only the frames from `from` on are measured again when given (the earlier ones are kept from `previous`).
  const deviations = (built, previous = null, from = -Infinity) => {
    const reads = Object.fromEntries(lanes.map((name) => [name, laneSampler({ [name]: built[name] }, name, period)]));
    return sampleFrames.map((frame, i) => {
      if (previous && frame < from) return previous[i];
      return Math.max(0, ...lanes.map((name) => {
        const { distance, scale } = measures[name];
        return distance(original[name][i], reads[name](frame)) / scale;
      }));
    });
  };

  // The Lanes with the frames `kept` (a Set) kept in the stretch, their handles and Easing written again.
  function buildKept(kept) {
    const out = {};
    for (const name of lanes) {
      const keys = owner[name].keyframes.filter((key) => key.frame < start || key.frame > end || kept.has(key.frame)).map((key) => copy(key));
      const lane = { value: copy(owner[name].value), keyframes: keys };
      const inside = keys.map((key, index) => ({ key, index })).filter(({ key }) => key.frame >= start && key.frame <= end);
      // Clear the handles within the stretch (corners keep theirs).
      if (name === "position") {
        for (const { key } of inside) {
          if (key.corner === true || !key.handles) continue;
          const handles = { ...key.handles };
          if (key.frame > start) delete handles.in;
          if (key.frame < end) delete handles.out;
          if (Object.keys(handles).length) key.handles = handles;
          else delete key.handles;
        }
      }
      for (let j = 0; j + 1 < inside.length; j += 1) {
        const a = inside[j].key;
        const b = inside[j + 1].key;
        if (a.easing === "hold") continue;
        // A segment's handles and Easing are decided in order from the left: they read what was decided before them
        // and the kept Keyframes up to three on their right. With the same kept Keyframes from the stretch's start to
        // there, they come out the same, so they are decided once (`memo`; without it, every time).
        // (Near the end the slice is the whole list for several segments: the segment's own index tells them apart.)
        const context = `${name}|${j}|${inside.slice(0, j + 4).map((item) => item.key.frame).join(",")}`;
        const known = memo ? decided.get(context) : null;
        if (known) {
          if (known.bend) {
            const { out, into } = bent.get(`${name}:${a.frame}:${b.frame}`);
            if (out) a.handles = { ...(a.handles ?? {}), out };
            if (into) b.handles = { ...(b.handles ?? {}), in: into };
          }
          a.easing = copy(known.easing);
          continue;
        }
        let bend = false;
        const segFrames = sampleFrames.filter((frame) => frame >= a.frame && frame <= b.frame);
        const segIndex = segFrames.map((frame) => sampleFrames.indexOf(frame));
        const { distance, scale } = measures[name];
        // The Lane changes between the tries (its Easing, its handles): each try reads it afresh.
        const segDeviation = () => {
          const read = laneSampler({ [name]: lane }, name, period);
          return Math.max(0, ...segFrames.map((frame, i) => distance(original[name][segIndex[i]], read(frame)) / scale));
        };
        const segKey = `${name}:${a.frame}:${b.frame}`;
        if (name === "position" && a.corner !== true && b.corner !== true) {
          a.easing = DEFAULT_EASING;
          if (segDeviation() > SIMPLIFY_TOLERANCE) {
            // The original path's direction at each end and a third of its length between them.
            if (!bent.has(segKey)) {
              const values = segIndex.map((i) => original[name][i]);
              let length = 0;
              for (let i = 1; i < values.length; i += 1) length += dist3(values[i - 1], values[i]);
              const along = (frame, sign) => {
                const p0 = ownPosition(frame - 0.25);
                const p1 = ownPosition(frame + 0.25);
                const d = p1.map((c, axis) => c - p0[axis]);
                const size = Math.hypot(...d);
                return size > 1e-12 ? d.map((c) => sign * c / size * length / 3) : null;
              };
              bent.set(segKey, { out: along(a.frame, 1), into: along(b.frame, -1) });
            }
            const { out, into } = bent.get(segKey);
            if (out) a.handles = { ...(a.handles ?? {}), out };
            if (into) b.handles = { ...(b.handles ?? {}), in: into };
            bend = true;
          }
        }
        // The Easing: Smooth, then Linear, then the curve nearest the original progress.
        a.easing = DEFAULT_EASING;
        if (segDeviation() > SIMPLIFY_TOLERANCE) {
          a.easing = [...LINEAR];
          if (segDeviation() > SIMPLIFY_TOLERANCE) {
            if (!fitted.has(segKey)) fitted.set(segKey, fitEasing(progressSamples(segFrames, segIndex.map((i) => original[name][i]), distance)));
            a.easing = [...fitted.get(segKey)];
          }
        }
        decided.set(context, { bend, easing: copy(a.easing) });
      }
      out[name] = lane;
    }
    return out;
  }

  // The order the removed Keyframes come back in: each time the one nearest the frame of the largest deviation.
  const order = [...kept0];
  const errors = [];
  const kept = new Set(kept0);
  let built = buildKept(kept);
  let devs = deviations(built);
  errors[kept.size] = Math.max(0, ...devs);
  while (kept.size < candidates.length) {
    const worst = sampleFrames[devs.indexOf(Math.max(...devs))] ?? start;
    let pick = null;
    for (const frame of candidates) {
      if (kept.has(frame)) continue;
      if (pick === null || Math.abs(frame - worst) < Math.abs(pick - worst)) pick = frame;
    }
    kept.add(pick);
    order.push(pick);
    built = buildKept(kept);
    // A Keyframe brought back changes the decisions of the segments from three before it in its Lane on (they read
    // the kept Keyframes up to three on their right, and every decision before them), and what a segment shows reads
    // its neighbors' decisions: the frames from four kept Keyframes before it, in each Lane, on are measured again.
    const from = Math.min(...lanes.map((name) => {
      const frames = built[name].keyframes.map((key) => key.frame).filter((frame) => frame >= start && frame <= end);
      const at = frames.findIndex((frame) => frame >= pick);
      return frames[Math.max(0, (at < 0 ? frames.length : at) - 4)] ?? start;
    }));
    devs = memo ? deviations(built, devs, from) : deviations(built);
    errors[kept.size] = Math.max(0, ...devs);
  }
  const least = kept0.length;
  let fallback = candidates.length;
  for (let n = least; n <= candidates.length; n += 1) {
    if (errors[n] <= SIMPLIFY_TOLERANCE) {
      fallback = n;
      break;
    }
  }
  return {
    start,
    end,
    candidates,
    mustKeep,
    order,
    errors,
    original: candidates.length,
    least,
    fallback,
    // The Lanes with the first n of the order kept (n from `least` to `original`; the original count gives the Lanes as
    // they were).
    build(n) {
      if (n >= candidates.length) return Object.fromEntries(lanes.map((name) => [name, copy(owner[name])]));
      return buildKept(new Set(order.slice(0, Math.max(least, n))));
    },
  };
}
