// Constant speed (docs/timeline-ui.md "Constant speed"): the Keyframes of a stretch of one row moved in time so that
// the motion goes at one speed, its shape kept. Pure: the owner's Lanes in, new Lanes out. The measure of each Lane is
// Simplify's (simplify.js laneMeasure).
import { laneSampler, laneView } from "../pano_scene_eval.js";
import { DEFAULT_EASING } from "../pano_scene_state.js";
import { laneMeasure } from "./simplify.js";

// How finely the distance is measured: steps per frame.
const STEPS_PER_FRAME = 4;

// The Lane whose motion the distance is measured on (docs/timeline-ui.md "Constant speed" "距離の測り方"): position,
// else the turn (rotation, direction), else the first Lane with Keyframes.
function measuredLane(owner, names) {
  for (const name of ["position", "rotation", "direction"]) if (names.includes(name) && owner[name]?.keyframes.length) return name;
  return names.find((name) => owner[name]?.keyframes.length) ?? null;
}

// The Keyframe frames of the Lanes `names` of `owner` in the stretch from the leftmost of `frames` to the rightmost,
// moved for one speed: { moves (Map from old frame to new frame, only the moved ones), lanes (by name, the new
// Lanes) }, or null when nothing changes. `period` is the owner's loop period; `ground`, `camera` and `hfov` give the
// measure as Simplify's do.
export function planConstantSpeed(owner, names, frames, { period = null, ground = -1.6, camera = false, hfov = 90 } = {}) {
  if (frames.length < 3) return null;
  const start = Math.min(...frames);
  const end = Math.max(...frames);
  const lanes = names.filter((name) => owner[name]?.keyframes);
  const candidates = [...new Set(lanes.flatMap((name) => owner[name].keyframes.map((key) => key.frame)))]
    .filter((frame) => frame >= start && frame <= end).sort((a, b) => a - b);
  if (candidates.length < 3) return null;
  const measured = measuredLane(owner, lanes);
  if (!measured) return null;
  // A looping row with all its Keyframes selected is one turn of the loop: from the first Keyframe to the first one a
  // period later, the segment back to it included; only the first Keyframe (and a hold's ends) stays.
  const all = [...new Set(lanes.flatMap((name) => owner[name].keyframes.map((key) => key.frame)))].sort((a, b) => a - b);
  const cycle = laneView(owner[measured].keyframes, period).loop && all.length === candidates.length;
  const until = cycle ? start + period : end;
  // The Keyframes that stay: the ends, a hold's start and end, and a loop's seam (one turn: its first only).
  const fixed = new Set(cycle ? [start] : [start, end]);
  for (const name of lanes) {
    const keys = owner[name].keyframes;
    keys.forEach((key, index) => {
      if (key.easing === "hold" && index + 1 < keys.length) {
        fixed.add(key.frame);
        fixed.add(keys[index + 1].frame);
      }
    });
    if (laneView(keys, period).loop && !cycle) {
      fixed.add(keys[0].frame);
      fixed.add(keys[keys.length - 1].frame);
    }
  }
  // The distance gone along the original motion from `start`, at each step.
  const read = laneSampler(owner, measured, period);
  const times = [];
  for (let t = start; t <= until + 1e-9; t += 1 / STEPS_PER_FRAME) times.push(t);
  const values = times.map((t) => read(t));
  const { distance } = laneMeasure(measured, values, { camera, ground, hfov });
  const gone = [0];
  for (let i = 1; i < values.length; i += 1) gone.push(gone[i - 1] + distance(values[i - 1], values[i]));
  const goneAt = (frame) => gone[Math.round((frame - start) * STEPS_PER_FRAME)];
  // Each stretch between two Keyframes that stay: the ones between go where their distance puts them.
  const moves = new Map();
  // One turn ends at the first Keyframe a period later (not a Keyframe of its own).
  const stays = [...candidates.filter((frame) => fixed.has(frame)), ...(cycle ? [until] : [])];
  for (let s = 0; s + 1 < stays.length; s += 1) {
    const from = stays[s];
    const to = stays[s + 1];
    const inner = candidates.filter((frame) => frame > from && frame < to);
    const total = goneAt(to) - goneAt(from);
    if (!inner.length || !(total > 1e-9)) continue;
    let previous = from;
    inner.forEach((frame, i) => {
      const room = to - (inner.length - i);
      const target = Math.round(from + ((to - from) * (goneAt(frame) - goneAt(from))) / total);
      const next = Math.min(room, Math.max(previous + 1, target));
      if (next !== frame) moves.set(frame, next);
      previous = next;
    });
  }
  // The Easing of the segments in the stretch becomes Smooth (a hold stays).
  const out = {};
  let changed = moves.size > 0;
  for (const name of lanes) {
    const keyframes = owner[name].keyframes.map((key) => {
      const moved = moves.has(key.frame) ? { ...structuredClone(key), frame: moves.get(key.frame) } : structuredClone(key);
      if (key.frame >= start && (key.frame < end || cycle) && key.easing !== "hold" && key.easing !== DEFAULT_EASING) {
        moved.easing = DEFAULT_EASING;
        changed = true;
      }
      return moved;
    });
    out[name] = { value: structuredClone(owner[name].value), keyframes };
  }
  return changed ? { moves, lanes: out } : null;
}
