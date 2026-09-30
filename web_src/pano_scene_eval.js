// State v2 evaluation: normalized state and a Timeline frame -> values at that time.
// The contract is documented in docs/scene-state-v2.md. comfyui_pano_suite/core/scene_eval.py
// must return the same values within 1e-4.
import { panoramaAngles, quaternionToRotation, rotationToQuaternion, worldRotation } from "./pano_world.js";

function copyValue(value) {
  if (!value || typeof value !== "object") return value;
  const out = {};
  for (const [key, item] of Object.entries(value)) out[key] = Array.isArray(item) ? [...item] : item;
  return out;
}

// Fractional frames within this distance of a Keyframe or Clip range edge count as that frame, so a Cut
// lands on the output frame whose time (seconds x fps) misses the Keyframe only by float rounding.
export const FRAME_EPSILON = 1e-6;

const ROTATION_FIELDS = ["yaw_deg", "pitch_deg", "roll_deg"];
// Interpolation may overshoot a key; these fields are brought back into the range the state allows.
const FIELD_RANGES = { hFOV_deg: [0.1, 179], vFOV_deg: [0.1, 179], scale: [1e-6, Infinity] };
// Quaternion dot products within this of zero are exact half turns, whose direction a fixed rule picks.
const HALF_TURN_EPSILON = 1e-6;

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
  const positions = keyframes.map((key) => key.value.position);
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

function interpolate(keyframes, k, frame) {
  const frames = keyframes.map((key) => key.frame);
  const p = ease(keyframes[k].easing, (frame - frames[k]) / (frames[k + 1] - frames[k]));
  const value = keyframes[k].value;
  if (!value || typeof value !== "object") return scalar(keyframes, frames, keyframes.map((key) => key.value), k, p);
  const rotated = "yaw_deg" in value ? rotation(keyframes, frames, k, p) : {};
  const out = {};
  for (const field of Object.keys(value)) {
    if (field === "position") {
      out[field] = position(keyframes, frames, k, p);
    } else if (ROTATION_FIELDS.includes(field)) {
      out[field] = rotated[field];
    } else {
      out[field] = scalar(keyframes, frames, keyframes.map((key) => key.value[field]), k, p);
      if (field in FIELD_RANGES) {
        const [lo, hi] = FIELD_RANGES[field];
        out[field] = Math.min(hi, Math.max(lo, out[field]));
      }
    }
  }
  return out;
}

function evaluateGroup(group, frame) {
  const keyframes = group.keyframes;
  if (!keyframes.length) return copyValue(group.value);
  if (frame <= keyframes[0].frame + FRAME_EPSILON) return copyValue(keyframes[0].value);
  const last = keyframes[keyframes.length - 1];
  if (frame >= last.frame - FRAME_EPSILON) return copyValue(last.value);
  let k = 0;
  while (keyframes[k + 1].frame <= frame + FRAME_EPSILON) k += 1;
  const left = keyframes[k];
  if (Math.abs(frame - left.frame) <= FRAME_EPSILON || left.easing === "hold") return copyValue(left.value);
  return interpolate(keyframes, k, frame);
}

function clipFrame(clip, frame) {
  return frame - (clip.start - clip.in);
}

function clipActive(clip, frame) {
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
    camera: { ...evaluateGroup(camera.transform, time), aspect: camera.aspect },
    scene: {
      active: clipActive(scene.clip, time),
      clip_frame: sceneClipFrame,
      ...evaluateGroup(scene.transform, sceneClipFrame),
    },
    stickers: state.stickers.map((sticker) => {
      const stickerClipFrame = clipFrame(sticker.clip, time);
      return {
        id: sticker.id,
        placement: sticker.placement,
        active: sticker.visible && clipActive(sticker.clip, time),
        clip_frame: stickerClipFrame,
        ...evaluateGroup(sticker.transform, stickerClipFrame),
        opacity: Math.min(1, Math.max(0, evaluateGroup(sticker.opacity, stickerClipFrame))),
      };
    }),
  };
}
