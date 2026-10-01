// State v2 evaluation: normalized state and a Timeline frame -> values at that time.
// The contract is documented in docs/scene-state-v2.md. comfyui_pano_suite/core/scene_eval.py
// must return the same values within 1e-4.
import { panoramaAngles, quaternionToRotation, rotationToQuaternion, worldRotation } from "./pano_world.js";

function copyValue(value) {
  if (Array.isArray(value)) return [...value];
  return value && typeof value === "object" ? { ...value } : value;
}

// Fractional frames within this distance of a Keyframe or Clip range edge count as that frame, so a Cut
// lands on the output frame whose time (seconds x fps) misses the Keyframe only by float rounding.
export const FRAME_EPSILON = 1e-6;

// Quaternion dot products within this of zero are exact half turns, whose direction a fixed rule picks.
// Directions this close to exactly opposite also are.
const HALF_TURN_EPSILON = 1e-6;
// A direction this close to a pole has no yaw of its own.
const POLE_EPSILON = 1e-9;

function bezier(p0, p1, p2, p3, t) {
  const s = 1 - t;
  return s * s * s * p0 + 3 * s * s * t * p1 + 3 * s * t * t * p2 + t * t * t * p3;
}

// Segment progress for the segment time u in [0, 1], like CSS cubic-bezier.
function ease(easing, u) {
  if (easing === "auto") return u;
  const [x1, y1, x2, y2] = easing;
  let lo = 0;
  let hi = 1;
  // x(t) is monotonic because x1 and x2 are in [0, 1]; bisection never fails on flat or steep curves.
  for (let i = 0; i < 50; i += 1) {
    const mid = 0.5 * (lo + hi);
    if (bezier(0, x1, x2, 1, mid) < u) lo = mid;
    else hi = mid;
  }
  return bezier(0, y1, y2, 1, 0.5 * (lo + hi));
}

// Whether the auto spline passes through key i, so both of its segments share one velocity.
function smooth(keyframes, i) {
  return i > 0 && i < keyframes.length - 1 && keyframes[i - 1].easing === "auto" && keyframes[i].easing === "auto";
}

// Velocity per frame at key i from the offsets to its neighbours (arrays of equal length). The slope
// of the parabola through the three keys, limited like Fritsch-Carlson: zero when the two sides turn
// back (negative dot product), and at most three times the slower side's slope, which is zero when a
// side does not move. A vector turning a right angle or less keeps moving.
function tangent(frames, i, back, ahead) {
  const dt0 = frames[i] - frames[i - 1];
  const dt1 = frames[i + 1] - frames[i];
  const s0 = back.map((c) => -c / dt0);
  const s1 = ahead.map((c) => c / dt1);
  if (s0.reduce((sum, c, j) => sum + c * s1[j], 0) < 0) return back.map(() => 0);
  const m = s0.map((c, j) => (c * dt1 + s1[j] * dt0) / (dt0 + dt1));
  const length = (v) => Math.sqrt(v.reduce((sum, c) => sum + c * c, 0));
  const limit = 3 * Math.min(length(s0), length(s1));
  const norm = length(m);
  return norm <= limit ? m : m.map((c) => c * limit / norm);
}

// Bezier control offsets out of key k and into key k + 1; values holds one array per key. Where the
// auto spline passes through a key, the offset is its velocity x dt / 3, so both segments meet with
// the same velocity. Elsewhere it is a third of the segment's own change.
function controlOffsets(keyframes, frames, values, k) {
  const v0 = values[k];
  const v1 = values[k + 1];
  const dt = frames[k + 1] - frames[k];
  const chord = v0.map((a, i) => v1[i] - a);
  let start = chord;
  if (smooth(keyframes, k)) {
    start = tangent(frames, k, values[k - 1].map((a, i) => a - v0[i]), chord).map((c) => c * dt);
  }
  let end = chord;
  if (smooth(keyframes, k + 1)) {
    end = tangent(frames, k + 1, chord.map((c) => -c), values[k + 2].map((a, i) => a - v1[i])).map((c) => c * dt);
  }
  return [start.map((c) => c / 3), end.map((c) => -c / 3)];
}

function scalar(keyframes, frames, values, k, p) {
  const [[outOffset], [inOffset]] = controlOffsets(keyframes, frames, values.map((v) => [v]), k);
  return bezier(values[k], values[k] + outOffset, values[k + 1] + inOffset, values[k + 1], p);
}

// Position as one vector, so the automatic path does not depend on the World axes; handles replace its offsets.
function position(keyframes, frames, k, p) {
  const positions = keyframes.map((key) => key.value);
  let [outOffset, inOffset] = controlOffsets(keyframes, frames, positions, k);
  outOffset = keyframes[k].handles?.out ?? outOffset;
  inOffset = keyframes[k + 1].handles?.in ?? inOffset;
  const p0 = positions[k];
  const p1 = positions[k + 1];
  return [0, 1, 2].map((axis) => bezier(p0[axis], p0[axis] + outOffset[axis], p1[axis] + inOffset[axis], p1[axis], p));
}

// Quaternions are [x, y, z, w] arrays here.
function qmul([ax, ay, az, aw], [bx, by, bz, bw]) {
  return [
    aw * bx + ax * bw + ay * bz - az * by,
    aw * by - ax * bz + ay * bw + az * bx,
    aw * bz + ax * by - ay * bx + az * bw,
    aw * bw - ax * bx - ay * by - az * bz,
  ];
}

function qdot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

function qneg(q) {
  return [-q[0], -q[1], -q[2], -q[3]];
}

function qlog([x, y, z, w]) {
  const norm = Math.sqrt(x * x + y * y + z * z);
  const scale = norm > 1e-12 ? Math.atan2(norm, w) / norm : 1;
  return [x * scale, y * scale, z * scale];
}

function qexp(v) {
  const angle = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  const scale = angle > 1e-12 ? Math.sin(angle) / angle : 1;
  return [v[0] * scale, v[1] * scale, v[2] * scale, Math.cos(angle)];
}

// log(a^-1 b): the half-angle rotation vector from a to b in a's frame.
function qdelta(a, b) {
  return qlog(qmul([-a[0], -a[1], -a[2], a[3]], b));
}

function slerp(a, b, t) {
  return qmul(a, qexp(qdelta(a, b).map((c) => t * c)));
}

// Whether later must be negated so earlier -> later is the shortest turn. An exact half turn has two
// shortest turns; it turns right, else up, else clockwise, read from the first rotation-vector
// component in earlier's glTF frame (-y, x, z) that is not zero.
function shortest(earlier, later) {
  const dot = qdot(earlier, later);
  if (Math.abs(dot) > HALF_TURN_EPSILON) return dot < 0;
  const [x, y, z] = qdelta(earlier, later);
  for (const component of [-y, x, z]) {
    if (Math.abs(component) > HALF_TURN_EPSILON) return component < 0;
  }
  return false;
}

function quaternion(value) {
  const { x, y, z, w } = rotationToQuaternion(worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg));
  return [x, y, z, w];
}

// The turn of angle nearest to the stored angles a -> b blended by progress; a tie takes the lower one.
function unwrapNearBlend(angle, a, b, p) {
  const blend = a + (b - a) * p;
  return angle + 360 * Math.ceil((blend - 180 - 1e-6 - angle) / 360);
}

// SQUAD with time-aware tangents. Where the spline stops, the tangent is the segment's own, so it is a slerp.
function rotation(keyframes, frames, k, p) {
  const q0 = quaternion(keyframes[k].value);
  let q1 = quaternion(keyframes[k + 1].value);
  if (shortest(q0, q1)) q1 = qneg(q1);
  const dt = frames[k + 1] - frames[k];
  const chord = qdelta(q0, q1);
  let start = chord;
  if (smooth(keyframes, k)) {
    let prev = quaternion(keyframes[k - 1].value);
    if (shortest(prev, q0)) prev = qneg(prev);
    start = tangent(frames, k, qdelta(q0, prev), chord).map((c) => c * dt);
  }
  let end = chord;
  if (smooth(keyframes, k + 1)) {
    let next = quaternion(keyframes[k + 2].value);
    if (shortest(q1, next)) next = qneg(next);
    end = tangent(frames, k + 1, qdelta(q1, q0), qdelta(q1, next)).map((c) => c * dt);
  }
  const a = qmul(q0, qexp(start.map((s, i) => 0.5 * (s - chord[i]))));
  const b = qmul(q1, qexp(chord.map((c, i) => 0.5 * (c - end[i]))));
  const [x, y, z, w] = slerp(slerp(q0, q1, p), slerp(a, b, p), 2 * p * (1 - p));
  const { yawDeg, pitchDeg, rollDeg } = panoramaAngles(quaternionToRotation({ x, y, z, w }));
  // Output yaw and roll follow the stored numbers, so they do not wrap mid-segment and meet each key's own number at its ends.
  const left = keyframes[k].value;
  const right = keyframes[k + 1].value;
  return {
    yaw_deg: unwrapNearBlend(yawDeg, left.yaw_deg, right.yaw_deg, p),
    pitch_deg: pitchDeg,
    roll_deg: unwrapNearBlend(rollDeg, left.roll_deg, right.roll_deg, p),
  };
}

function dot(a, b) {
  return a.reduce((sum, c, i) => sum + c * b[i], 0);
}

function norm(v) {
  return Math.sqrt(dot(v, v));
}

// The unit vector of a direction: x right, y up, z ahead at yaw 0.
function directionVector(value) {
  const yaw = value.yaw_deg * Math.PI / 180;
  const pitch = value.pitch_deg * Math.PI / 180;
  return [Math.cos(pitch) * Math.sin(yaw), Math.sin(pitch), Math.cos(pitch) * Math.cos(yaw)];
}

// The tangent at a toward b along the great circle, as long as the angle. Exactly opposite points give zero.
function sphereLog(a, b) {
  const d = dot(a, b);
  const w = b.map((c, i) => c - d * a[i]);
  const length = norm(w);
  const scale = length > 1e-12 ? Math.atan2(length, d) / length : 1;
  return w.map((c) => c * scale);
}

function sphereExp(a, v) {
  const angle = norm(v);
  const scale = angle > 1e-12 ? Math.sin(angle) / angle : 1;
  return a.map((c, i) => Math.cos(angle) * c + scale * v[i]);
}

function sphereSlerp(a, b, t) {
  return sphereExp(a, sphereLog(a, b).map((c) => t * c));
}

// The velocity (per unit of progress) of the great circle from key k to key k + 1, at its start and at
// its end, and whether the two directions are exactly opposite. Exactly opposite directions turn right
// from key k: toward increasing yaw of its stored value, defined at a pole too.
function greatCircle(keyframes, k) {
  const a = directionVector(keyframes[k].value);
  const b = directionVector(keyframes[k + 1].value);
  const d = dot(a, b);
  const opposite = d < 0 && norm(b.map((c, i) => c - d * a[i])) <= HALF_TURN_EPSILON;
  let start;
  if (opposite) {
    const yaw = keyframes[k].value.yaw_deg * Math.PI / 180;
    start = [Math.PI * Math.cos(yaw), 0, -Math.PI * Math.sin(yaw)];
  } else {
    start = sphereLog(a, b);
  }
  const angle = norm(start);
  return [start, start.map((c, i) => Math.cos(angle) * c - angle * Math.sin(angle) * a[i]), opposite];
}

// A sky Sticker's direction: a spherical Bezier (de Casteljau with slerps) from key k to key k + 1. The
// control points lie a third of the start and end velocities away, as for a position. Where the spline
// stops they are the great circle's own, so the segment is the great-circle slerp. A passing key's
// velocity follows the speed rule in its tangent plane, from the chord of the segment before it carried
// along its great circle to the key, and the chord of the segment after it.
function direction(keyframes, frames, k, p) {
  const a = directionVector(keyframes[k].value);
  const b = directionVector(keyframes[k + 1].value);
  const [chordStart, chordEnd, opposite] = greatCircle(keyframes, k);
  let start = chordStart;
  let end = chordEnd;
  const dt = frames[k + 1] - frames[k];
  if (smooth(keyframes, k)) {
    start = tangent(frames, k, greatCircle(keyframes, k - 1)[1].map((c) => -c), start).map((c) => c * dt);
  }
  if (smooth(keyframes, k + 1)) {
    end = tangent(frames, k + 1, end.map((c) => -c), greatCircle(keyframes, k + 1)[0]).map((c) => c * dt);
  }
  let x;
  let y;
  let z;
  if (opposite) {
    // The control points of opposite keys can be opposite too, with no great circle between them, so the
    // segment runs along its own great circle: the arc length is a cubic Bezier in p with the end speeds
    // along the circle.
    const angle = Math.PI;
    const arc = bezier(0, dot(start, chordStart) / angle / 3, angle - dot(end, chordEnd) / angle / 3, angle, p);
    [x, y, z] = sphereExp(a, chordStart.map((c) => arc * c / angle));
  } else {
    const middle = sphereSlerp(sphereExp(a, start.map((c) => c / 3)), sphereExp(b, end.map((c) => -c / 3)), p);
    const first = sphereSlerp(sphereExp(a, start.map((c) => p * c / 3)), middle, p);
    const second = sphereSlerp(middle, sphereExp(b, end.map((c) => -(1 - p) * c / 3)), p);
    [x, y, z] = sphereSlerp(first, second, p);
  }
  const horizontal = Math.hypot(x, z);
  const left = keyframes[k].value.yaw_deg;
  const right = keyframes[k + 1].value.yaw_deg;
  // At a pole the yaw follows the stored numbers; elsewhere it is the turn nearest to them, like a rotation's.
  const yaw = horizontal <= POLE_EPSILON
    ? left + (right - left) * p
    : unwrapNearBlend(Math.atan2(x, z) * 180 / Math.PI, left, right, p);
  return { yaw_deg: yaw, pitch_deg: Math.atan2(y, horizontal) * 180 / Math.PI };
}

function size(keyframes, frames, k, p) {
  const out = {};
  for (const field of ["hFOV_deg", "vFOV_deg"]) out[field] = scalar(keyframes, frames, keyframes.map((key) => key.value[field]), k, p);
  return out;
}

function scalarLane(keyframes, frames, k, p) {
  return scalar(keyframes, frames, keyframes.map((key) => key.value), k, p);
}

// How each Lane interpolates inside a segment; the other Lanes (fov, roll, scale, opacity) are scalars.
const INTERPOLATIONS = { position, rotation, direction, size };

// The value of the Lane `name` of `owner` at a fractional frame of its own time base.
export function evaluateLane(owner, name, frame) {
  const { keyframes } = owner[name];
  if (!keyframes.length) return copyValue(owner[name].value);
  if (frame <= keyframes[0].frame + FRAME_EPSILON) return copyValue(keyframes[0].value);
  const last = keyframes[keyframes.length - 1];
  if (frame >= last.frame - FRAME_EPSILON) return copyValue(last.value);
  let k = 0;
  while (keyframes[k + 1].frame <= frame + FRAME_EPSILON) k += 1;
  const left = keyframes[k];
  if (Math.abs(frame - left.frame) <= FRAME_EPSILON || left.easing === "hold") return copyValue(left.value);
  const frames = keyframes.map((key) => key.frame);
  const p = ease(left.easing, (frame - frames[k]) / (frames[k + 1] - frames[k]));
  return (INTERPOLATIONS[name] ?? scalarLane)(keyframes, frames, k, p);
}

// Interpolation may leave a range by rounding; these bring values back into the range the state allows.
function fov(value) {
  return Math.min(179, Math.max(0.1, value));
}

function opacity(value) {
  return Math.min(1, Math.max(0, value));
}

function scale(value) {
  return Math.max(1e-6, value);
}

function clipFrame(clip, frame) {
  return frame - (clip.start - clip.in);
}

// Whether a Timeline frame is in the Clip range.
export function clipActive(clip, frame) {
  return frame >= clip.start - FRAME_EPSILON
    && (clip.duration === null || frame < clip.start + clip.duration - FRAME_EPSILON);
}

// Evaluates a state returned by loadSceneState at a fractional Timeline frame.
export function evaluateSceneState(state, frame) {
  const time = Number(frame);
  const { camera, scene } = state;
  const sceneClipFrame = clipFrame(scene.clip, time);
  return {
    frame: time,
    camera: {
      position: evaluateLane(camera, "position", time),
      ...evaluateLane(camera, "rotation", time),
      hFOV_deg: fov(evaluateLane(camera, "fov", time)),
      aspect: camera.aspect,
    },
    scene: {
      active: clipActive(scene.clip, time),
      clip_frame: sceneClipFrame,
      position: evaluateLane(scene, "position", sceneClipFrame),
      ...evaluateLane(scene, "rotation", sceneClipFrame),
      scale: scale(evaluateLane(scene, "scale", sceneClipFrame)),
    },
    stickers: state.stickers.map((sticker) => evaluateSticker(sticker, time)),
  };
}

function stickerValues(sticker, frame) {
  if (sticker.placement === "world") {
    return {
      position: evaluateLane(sticker, "position", frame),
      ...evaluateLane(sticker, "rotation", frame),
      scale: scale(evaluateLane(sticker, "scale", frame)),
    };
  }
  const angles = evaluateLane(sticker, "size", frame);
  return {
    ...evaluateLane(sticker, "direction", frame),
    roll_deg: evaluateLane(sticker, "roll", frame),
    hFOV_deg: fov(angles.hFOV_deg),
    vFOV_deg: fov(angles.vFOV_deg),
  };
}

// One Sticker of evaluateSceneState().
export function evaluateSticker(sticker, frame) {
  const stickerClipFrame = clipFrame(sticker.clip, frame);
  return {
    id: sticker.id,
    placement: sticker.placement,
    active: sticker.visible && clipActive(sticker.clip, frame),
    clip_frame: stickerClipFrame,
    ...stickerValues(sticker, stickerClipFrame),
    opacity: opacity(evaluateLane(sticker, "opacity", stickerClipFrame)),
  };
}
