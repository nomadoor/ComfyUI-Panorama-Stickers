// State v2 evaluation: normalized state and a Timeline frame -> values at that time.
// The contract is documented in docs/scene-state-v2.md. comfyui_pano_suite/core/scene_eval.py
// must return the same values within 1e-4.
import { lookRotation, panoramaAngles, quaternionToRotation, rotationToQuaternion, worldRotation } from "./pano_world.js";
import { LENS_CURVE_MAX, LENS_CURVE_MIN, lensFovLimit } from "./pano_lens.js";

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
// The number of steps a segment's shape is measured in, to read progress as a share of its length
// (docs/scene-state-v2.md "長さと τ"). comfyui_pano_suite/core/scene_eval.py has the same value.
export const PATH_SAMPLES = 64;
// Lengths, vectors and rates at most this are zero.
const LENGTH_EPSILON = 1e-12;
// Two chord directions this close to opposite are an exact turn back.
const TURN_BACK_EPSILON = 1e-9;
// A dot product below this share of the two lengths' product, negated, is a turn back.
const TURN_DOT_EPSILON = 1e-9;
// The step of τ a shape's speed at a sample is measured over (SPEED_STEP).
const SPEED_STEP = 1e-6;
// A looping Lane whose last value is within this of its first (each number) closes at a seam.
const SEAM_EPSILON = 1e-9;
// The Easing a Smooth segment that stops at both ends moves by: ease-in-out, the default before Smooth.
const EASE_IN_OUT = [0.42, 0, 0.58, 1];

function bezier(p0, p1, p2, p3, t) {
  const s = 1 - t;
  return s * s * s * p0 + 3 * s * s * t * p1 + 3 * s * t * t * p2 + t * t * t * p3;
}

// Progress of a cubic-bezier segment for the segment time u in [0, 1], like CSS cubic-bezier.
export function cubicProgress(easing, u) {
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

// The slope of a cubic-bezier Easing at its start or end. A zero run over a rise is 3; a zero run over no rise
// reads the next control point (docs/scene-state-v2.md "進み具合" 2).
function easingSlope(easing, atEnd) {
  const [x1, y1, x2, y2] = easing;
  const ratio = (rise, run, next) => (run !== 0 ? rise / run : rise !== 0 ? 3 : next());
  if (atEnd) return ratio(1 - y2, 1 - x2, () => ratio(1 - y1, 1 - x1, () => 1));
  return ratio(y1, x1, () => ratio(y2, x2, () => 1));
}

// Cubic Hermite progress with the end slopes a0 and a1 (1 is the segment's average speed).
function hermite(a0, a1, u) {
  return (u * u * u - 2 * u * u + u) * a0 + (3 * u * u - 2 * u * u * u) + (u * u * u - u * u) * a1;
}

function dot(a, b) {
  return a.reduce((sum, c, i) => sum + c * b[i], 0);
}

function norm(v) {
  return Math.sqrt(dot(v, v));
}

function plus(a, b) {
  return a.map((c, i) => c + b[i]);
}

function minus(a, b) {
  return a.map((c, i) => c - b[i]);
}

function times(v, k) {
  return v.map((c) => c * k);
}

// The shape velocity of a turn (rotation, direction) at a key, per length of chord (docs/scene-state-v2.md "形（回転・
// direction）"): the speed rule with the two chords' lengths in place of the segments' times, so the shape does not
// depend on when the keys are. Zero when a side does not move.
function shapeTangent(back, ahead) {
  const l0 = norm(back);
  const l1 = norm(ahead);
  if (l0 <= LENGTH_EPSILON || l1 <= LENGTH_EPSILON) return back.map(() => 0);
  return tangent(l0, l1, back, ahead);
}

// Velocity per frame at a key from the offsets to its neighbors (arrays of equal length) and the two segment
// lengths: the slope of the parabola through the three keys, limited like Fritsch-Carlson. Zero when the two sides
// turn back (a negative dot product beyond rounding), and at most three times the slower side's slope, which is
// zero when a side does not move.
function tangent(dt0, dt1, back, ahead) {
  const s0 = back.map((c) => -c / dt0);
  const s1 = ahead.map((c) => c / dt1);
  if (dot(s0, s1) < -TURN_DOT_EPSILON * norm(s0) * norm(s1)) return back.map(() => 0);
  const m = s0.map((c, j) => (c * dt1 + s1[j] * dt0) / (dt0 + dt1));
  const limit = 3 * Math.min(norm(s0), norm(s1));
  const length = norm(m);
  return length <= limit ? m : m.map((c) => c * limit / length);
}

// Whether two Lane values are the same within SEAM_EPSILON, each number; a Look at target (a Sticker id and its offset,
// a point, or null) is the same one with the same numbers.
function sameValue(a, b) {
  if (typeof a === "number" && typeof b === "number") return Math.abs(a - b) <= SEAM_EPSILON;
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object") return a === b;
  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every((c, i) => sameValue(c, b[i]));
  const keys = Object.keys(a);
  return !Array.isArray(b) && keys.length === Object.keys(b).length && keys.every((key) => Object.hasOwn(b, key) && sameValue(a[key], b[key]));
}

// A Lane's Keyframes by an index that, in a looping Lane, runs past both ends: key i + n is key i one period later
// (docs/scene-state-v2.md "ループ"). A looping Lane whose last value is its first closes at a seam: the segment
// from the last key back to the first does not move, and the keys on either side of it take their neighbors
// across it, so the shape and speed run on through the seam.
export function laneView(keyframes, period = null) {
  const n = keyframes.length;
  const loop = period !== null && period !== undefined && n >= 2 && keyframes[n - 1].frame - keyframes[0].frame < period;
  const at = (i) => {
    if (!loop) return keyframes[i];
    const turns = Math.floor(i / n);
    const key = keyframes[i - turns * n];
    return turns ? { ...key, frame: key.frame + turns * period } : key;
  };
  const seam = loop && sameValue(keyframes[0].value, keyframes[n - 1].value);
  return { n, loop, seam, period: loop ? period : null, at, keyframes };
}

function wrap(lane, i) {
  return ((i % lane.n) + lane.n) % lane.n;
}

function span(lane, k) {
  return lane.at(k + 1).frame - lane.at(k).frame;
}

// Whether the segment k exists: in a looping Lane every index does.
function hasSegment(lane, k) {
  return lane.loop || (k >= 0 && k <= lane.n - 2);
}

// Whether the segment k is the seam segment of a closing loop (from the last key back to the first).
function seamSegment(lane, k) {
  return lane.seam && wrap(lane, k) === lane.n - 1;
}

// The segments before and after key i that its neighbors are read from: the adjacent ones, except across a seam.
function segmentBefore(lane, i) {
  return seamSegment(lane, i - 1) ? i - 2 : i - 1;
}

function segmentAfter(lane, i) {
  return seamSegment(lane, i) ? i + 1 : i;
}

// Whether the shape passes smoothly through key i: it has segments on both sides and none of them is a hold.
function passes(lane, i) {
  const before = segmentBefore(lane, i);
  const after = segmentAfter(lane, i);
  if (!hasSegment(lane, before) || !hasSegment(lane, after)) return false;
  for (let k = before; k <= after; k += 1) {
    if (lane.at(k).easing === "hold") return false;
  }
  return true;
}

// The keys before and after key i that its tangent reads, and the lengths of time to them.
function neighbors(lane, i) {
  const before = segmentBefore(lane, i);
  const after = segmentAfter(lane, i);
  return { previous: lane.at(before), next: lane.at(after + 1), dt0: span(lane, before), dt1: span(lane, after) };
}

// The end slope a Smooth segment k takes at its start (atStart) or end, over its average speed: from the speed S at
// that key (docs/scene-state-v2.md "進み具合"). `kind` gives the segment rates (signed for a scalar), the speed a
// key shares between two Smooth segments, and whether the shape stops at a key.
function smoothSlope(lane, k, atStart, kind) {
  const average = kind.rate(k);
  if (Math.abs(average) <= LENGTH_EPSILON) return 1;
  const key = atStart ? k : k + 1;
  let speed = 0;
  if (!kind.stalls(key)) {
    let other = atStart ? k - 1 : k + 1;
    // A Smooth seam segment does not move; the speed reads the segment past it, so a loop runs on through the seam.
    if (hasSegment(lane, other) && seamSegment(lane, other) && lane.at(other).easing === "smooth") other = atStart ? other - 1 : other + 1;
    if (hasSegment(lane, other)) {
      const easing = lane.at(other).easing;
      if (easing === "smooth") speed = kind.shared(key);
      else if (easing !== "hold") speed = easingSlope(easing, atStart) * kind.rate(other);
    }
  }
  return Math.min(3, Math.max(0, speed / average));
}

// The progress p of the segment k at the segment time u: a cubic-bezier as written, a Smooth one by its end speeds.
function progress(lane, k, u, kind) {
  const easing = lane.at(k).easing;
  if (easing !== "smooth") return cubicProgress(easing, u);
  const a0 = smoothSlope(lane, k, true, kind);
  const a1 = smoothSlope(lane, k, false, kind);
  if (a0 === 0 && a1 === 0) return cubicProgress(EASE_IN_OUT, u);
  return hermite(a0, a1, u);
}

// The cubic-bezier a Smooth segment moves by now (its Hermite as control points), for the Easing panel; ease-in-out
// when it stops at both ends. Null for a segment that is not Smooth.
export function smoothEasing(owner, name, k, period = null, scene = null) {
  const lane = laneView(owner[name].keyframes, period);
  if (!hasSegment(lane, k) || lane.at(k).easing !== "smooth") return null;
  const kind = panelKind(owner, name, lane, period, scene);
  const a0 = smoothSlope(lane, k, true, kind);
  const a1 = smoothSlope(lane, k, false, kind);
  if (a0 === 0 && a1 === 0) return [...EASE_IN_OUT];
  return [1 / 3, a0 / 3, 2 / 3, 1 - a1 / 3];
}

// The length of the segment k of the Lane `name` of `owner` along its shape (a shaped Lane's measured length, a
// number's change, the first number of a Lane of several), and its progress at the segment time u: what the Easing
// panel draws for a range of segments (docs/studio-ui.md "Easing のパネル").
export function segmentLength(owner, name, k, period = null, scene = null) {
  const lane = laneView(owner[name].keyframes, period);
  if (name === "look_at") return lookKind(owner, lane, scene ?? {}, period).length(k);
  if (SHAPED[name]) return shapedKind(SHAPED[name], lane).shapeOf(k).measured.lengths[PATH_SAMPLES];
  const kind = laneKind(name, lane);
  return Math.abs(kind.v(k + 1) - kind.v(k));
}

export function segmentProgress(owner, name, k, u, period = null, scene = null) {
  const lane = laneView(owner[name].keyframes, period);
  if (lane.at(k).easing === "hold") return 0;
  return progress(lane, k, u, panelKind(owner, name, lane, period, scene));
}

// The kind the Easing panel reads a Lane's segments by: the Camera's Look at Lane by the turns toward its targets
// (lookKind, `scene` its { stickers, boxes, length }), any other by laneKind.
function panelKind(owner, name, lane, period, scene) {
  return name === "look_at" ? lookKind(owner, lane, scene ?? {}, period) : laneKind(name, lane);
}

// The shape parameter τ at which a segment's measured length reaches the share p (docs/scene-state-v2.md
// "長さと τ"): inside a step, a cubic Hermite in the length with the slopes the speeds at its ends give.
function tauAt({ lengths, speeds }, p) {
  const total = lengths[PATH_SAMPLES];
  if (total <= LENGTH_EPSILON) return p;
  if (p <= 0) return 0;
  if (p >= 1) return 1;
  const target = p * total;
  let j = 0;
  while (j < PATH_SAMPLES - 1 && lengths[j + 1] < target) j += 1;
  const step = lengths[j + 1] - lengths[j];
  if (step <= LENGTH_EPSILON) return j / PATH_SAMPLES;
  const slope = (speed) => (speed > LENGTH_EPSILON ? Math.min(3, step * PATH_SAMPLES / speed) : 3);
  const x = (target - lengths[j]) / step;
  return (j + hermite(slope(speeds[j]), slope(speeds[j + 1]), x)) / PATH_SAMPLES;
}

// The lengths along a shape at its samples (summed in order) and its speeds there (length per unit of τ).
function measure(shape, distance) {
  const points = [];
  for (let j = 0; j <= PATH_SAMPLES; j += 1) points.push(shape.point(j / PATH_SAMPLES));
  const lengths = [0];
  for (let j = 1; j <= PATH_SAMPLES; j += 1) lengths.push(lengths[j - 1] + distance(points[j - 1], points[j]));
  const speeds = points.map((point, j) => {
    const t = j / PATH_SAMPLES;
    const from = j === 0 ? t : t - SPEED_STEP;
    const to = j === PATH_SAMPLES ? t : t + SPEED_STEP;
    return distance(j === 0 ? point : shape.point(from), j === PATH_SAMPLES ? point : shape.point(to)) / (to - from);
  });
  return { lengths, speeds };
}

// The angle between two unit vectors, precise near 0 and π.
function turnAngle(e0, e1) {
  return 2 * Math.atan2(norm(minus(e0, e1)), norm(plus(e0, e1)));
}

// A handle's length over its chord that follows a circular arc turning by φ: a third of the chord when straight.
function arcFactor(phi) {
  return phi <= 1e-9 ? 1 / 3 : (2 / 3) * Math.tan(phi / 4) / Math.sin(phi / 2);
}

// Shrinks handles smoothly to zero as a turn nears a turn back, so it does not swing out into a loop.
function turnFade(phi) {
  if (phi <= 2 * Math.PI / 3) return 1;
  const x = (Math.PI - phi) / (Math.PI / 3);
  return x * x * (3 - 2 * x);
}

function positionHandle(lane, i, side) {
  const h = lane.at(i).handles?.[side];
  return h && norm(h) > LENGTH_EPSILON ? h : null;
}

function isCorner(lane, i) {
  return lane.at(i).corner === true;
}

// The chords into and out of key i, from the neighbors its tangent reads.
function positionChords(lane, i) {
  const { previous, next } = neighbors(lane, i);
  const value = lane.at(i).value;
  return [minus(value, previous.value), minus(next.value, value)];
}

// Whether key i has an automatic tangent: it passes, is not a corner, and both of its chords move.
function tangentKey(lane, i) {
  if (!passes(lane, i) || isCorner(lane, i)) return false;
  const [c0, c1] = positionChords(lane, i);
  return norm(c0) > LENGTH_EPSILON && norm(c1) > LENGTH_EPSILON;
}

// The automatic offset out of ("out") or into ("in") a key with a tangent: along the bisector of its chords (or
// against its handle on the other side), as long as a circular arc needs, at most twice the shorter chord.
function automaticOffset(lane, i, side) {
  const [c0, c1] = positionChords(lane, i);
  const l0 = norm(c0);
  const l1 = norm(c1);
  const e0 = times(c0, 1 / l0);
  const e1 = times(c1, 1 / l1);
  const sum = plus(e0, e1);
  if (norm(sum) <= TURN_BACK_EPSILON) return [0, 0, 0];
  const phi = turnAngle(e0, e1);
  const factor = arcFactor(phi) * turnFade(phi);
  let travel = times(sum, 1 / norm(sum));
  const otherSide = positionHandle(lane, i, side === "out" ? "in" : "out");
  if (otherSide) travel = times(otherSide, (side === "out" ? -1 : 1) / norm(otherSide));
  return side === "out" ? times(travel, factor * Math.min(l1, 2 * l0)) : times(travel, -factor * Math.min(l0, 2 * l1));
}

// The control-point offsets [out of key k, into key k + 1] of the position segment k (docs/scene-state-v2.md
// "形（位置）"): from the order of the key values only, not their times; handles and corners replace them.
export function positionOffsets(lane, k) {
  const c = minus(lane.at(k + 1).value, lane.at(k).value);
  const length = norm(c);
  if (length <= LENGTH_EPSILON) return [[0, 0, 0], [0, 0, 0]];
  const actual = (i, side, straight) => {
    const handle = positionHandle(lane, i, side);
    if (handle) return handle;
    if (isCorner(lane, i)) return straight;
    return tangentKey(lane, i) ? automaticOffset(lane, i, side) : null;
  };
  const start = actual(k, "out", times(c, 1 / 3));
  const end = actual(k + 1, "in", times(c, -1 / 3));
  const e = times(c, 1 / length);
  // This end's offset mirrored across the chord from the other end's actual offset, travelling `outward` (+1 or -1)
  // along it; null when that offset is zero.
  const mirrored = (offset, outward) => {
    const size = norm(offset);
    if (size <= LENGTH_EPSILON) return null;
    const travel = times(offset, outward / size);
    const phi = Math.min(Math.PI, 2 * turnAngle(e, travel));
    return times(minus(times(e, 2 * dot(e, travel)), travel), arcFactor(phi) * turnFade(phi) * length);
  };
  const out = start ?? (end ? mirrored(end, -1) : null) ?? times(c, 1 / 3);
  const into = end ?? (start ? (mirrored(start, 1) ? times(mirrored(start, 1), -1) : null) : null) ?? times(c, -1 / 3);
  return [out, into];
}

// Whether a position shape stops at key i (the speed there is zero): a chord on either side does not move, or,
// for a key that is not a corner and has no handle, the path turns straight back.
function positionStalls(lane, i) {
  if (!passes(lane, i)) return false;
  const [c0, c1] = positionChords(lane, i);
  if (norm(c0) <= LENGTH_EPSILON || norm(c1) <= LENGTH_EPSILON) return true;
  if (isCorner(lane, i) || positionHandle(lane, i, "in") || positionHandle(lane, i, "out")) return false;
  return norm(plus(times(c0, 1 / norm(c0)), times(c1, 1 / norm(c1)))) <= TURN_BACK_EPSILON;
}

const POSITION = {
  shape(lane, k) {
    const p0 = lane.at(k).value;
    const p1 = lane.at(k + 1).value;
    const [out, into] = positionOffsets(lane, k);
    return {
      point: (t) => [0, 1, 2].map((axis) => bezier(p0[axis], p0[axis] + out[axis], p1[axis] + into[axis], p1[axis], t)),
      value: (point) => point,
    };
  },
  distance: (a, b) => norm(minus(a, b)),
  stalls: positionStalls,
};

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
  const size = Math.sqrt(x * x + y * y + z * z);
  const k = size > 1e-12 ? Math.atan2(size, w) / size : 1;
  return [x * k, y * k, z * k];
}

function qexp(v) {
  const angle = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  const k = angle > 1e-12 ? Math.sin(angle) / angle : 1;
  return [v[0] * k, v[1] * k, v[2] * k, Math.cos(angle)];
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
  const d = qdot(earlier, later);
  if (Math.abs(d) > HALF_TURN_EPSILON) return d < 0;
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

// The turn of angle nearest to the stored angles a -> b blended by t; a tie takes the lower one.
function unwrapNearBlend(angle, a, b, t) {
  const blend = a + (b - a) * t;
  return angle + 360 * Math.ceil((blend - 180 - 1e-6 - angle) / 360);
}

// The rotation's shape velocity (half-angle vector per length of chord) at key i, from its neighbors turned the
// shortest way.
function rotationTangent(lane, i) {
  const { previous: before, next: after } = neighbors(lane, i);
  const q = quaternion(lane.at(i).value);
  let previous = quaternion(before.value);
  if (shortest(previous, q)) previous = qneg(previous);
  let next = quaternion(after.value);
  if (shortest(q, next)) next = qneg(next);
  return shapeTangent(qdelta(q, previous), qdelta(q, next));
}

// SQUAD with tangents from the chords' lengths, not the keys' times. Where the shape does not pass a key, the tangent
// is the segment's own, so a segment that passes neither end is a slerp; a segment that does not turn does not move.
const ROTATION = {
  shape(lane, k) {
    const q0 = quaternion(lane.at(k).value);
    let q1 = quaternion(lane.at(k + 1).value);
    if (shortest(q0, q1)) q1 = qneg(q1);
    const chord = qdelta(q0, q1);
    const length = norm(chord);
    const start = passes(lane, k) ? times(rotationTangent(lane, k), length) : chord;
    const end = passes(lane, k + 1) ? times(rotationTangent(lane, k + 1), length) : chord;
    const a = qmul(q0, qexp(start.map((s, i) => 0.5 * (s - chord[i]))));
    const b = qmul(q1, qexp(chord.map((c, i) => 0.5 * (c - end[i]))));
    const left = lane.at(k).value;
    const right = lane.at(k + 1).value;
    return {
      point: (t) => slerp(slerp(q0, q1, t), slerp(a, b, t), 2 * t * (1 - t)),
      value: ([x, y, z, w], t) => {
        const { yawDeg, pitchDeg, rollDeg } = panoramaAngles(quaternionToRotation({ x, y, z, w }));
        // Output yaw and roll follow the stored numbers, so they do not wrap mid-segment and meet each key's own number at its ends.
        return {
          yaw_deg: unwrapNearBlend(yawDeg, left.yaw_deg, right.yaw_deg, t),
          pitch_deg: pitchDeg,
          roll_deg: unwrapNearBlend(rollDeg, left.roll_deg, right.roll_deg, t),
        };
      },
    };
  },
  distance: (a, b) => norm(qdelta(a, qdot(a, b) < 0 ? qneg(b) : b)),
  stalls: (lane, i) => passes(lane, i) && norm(rotationTangent(lane, i)) <= LENGTH_EPSILON,
};

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
  const k = length > 1e-12 ? Math.atan2(length, d) / length : 1;
  return w.map((c) => c * k);
}

function sphereExp(a, v) {
  const angle = norm(v);
  const k = angle > 1e-12 ? Math.sin(angle) / angle : 1;
  return a.map((c, i) => Math.cos(angle) * c + k * v[i]);
}

function sphereSlerp(a, b, t) {
  return sphereExp(a, sphereLog(a, b).map((c) => t * c));
}

// The velocity (per unit of τ) of the great circle from key k to key k + 1, at its start and at its end, and
// whether the two directions are exactly opposite. Exactly opposite directions turn right from key k: toward
// increasing yaw of its stored value, defined at a pole too.
function greatCircle(lane, k) {
  const a = directionVector(lane.at(k).value);
  const b = directionVector(lane.at(k + 1).value);
  const d = dot(a, b);
  const opposite = d < 0 && norm(b.map((c, i) => c - d * a[i])) <= HALF_TURN_EPSILON;
  let start;
  if (opposite) {
    const yaw = lane.at(k).value.yaw_deg * Math.PI / 180;
    start = [Math.PI * Math.cos(yaw), 0, -Math.PI * Math.sin(yaw)];
  } else {
    start = sphereLog(a, b);
  }
  const angle = norm(start);
  return [start, start.map((c, i) => Math.cos(angle) * c - angle * Math.sin(angle) * a[i]), opposite];
}

// The shape velocity (per length of chord) at key i in its tangent plane: the shape rule on the chord of the segment
// before it carried along its great circle to the key, and the chord of the segment after it.
function directionTangent(lane, i) {
  return shapeTangent(greatCircle(lane, segmentBefore(lane, i))[1].map((c) => -c), greatCircle(lane, segmentAfter(lane, i))[0]);
}

// A sky Sticker's direction: a spherical Bezier (de Casteljau with slerps) from key k to key k + 1. The control
// points lie a third of the start and end velocities away, as for a position. Where the shape does not pass a key
// they are the great circle's own.
const DIRECTION = {
  shape(lane, k) {
    const a = directionVector(lane.at(k).value);
    const b = directionVector(lane.at(k + 1).value);
    const [chordStart, chordEnd, opposite] = greatCircle(lane, k);
    const length = norm(chordStart);
    const start = passes(lane, k) ? times(directionTangent(lane, k), length) : chordStart;
    const end = passes(lane, k + 1) ? times(directionTangent(lane, k + 1), length) : chordEnd;
    const left = lane.at(k).value.yaw_deg;
    const right = lane.at(k + 1).value.yaw_deg;
    // The control points of opposite keys can be opposite too, with no great circle between them, so the segment
    // is its own great circle.
    const point = opposite
      ? (t) => sphereExp(a, chordStart.map((c) => t * c))
      : (t) => {
        const middle = sphereSlerp(sphereExp(a, start.map((c) => c / 3)), sphereExp(b, end.map((c) => -c / 3)), t);
        const first = sphereSlerp(sphereExp(a, start.map((c) => t * c / 3)), middle, t);
        const second = sphereSlerp(middle, sphereExp(b, end.map((c) => -(1 - t) * c / 3)), t);
        return sphereSlerp(first, second, t);
      };
    return {
      point,
      value: ([x, y, z], t) => {
        const horizontal = Math.hypot(x, z);
        // At a pole the yaw follows the stored numbers; elsewhere it is the turn nearest to them, like a rotation's.
        const yaw = horizontal <= POLE_EPSILON
          ? left + (right - left) * t
          : unwrapNearBlend(Math.atan2(x, z) * 180 / Math.PI, left, right, t);
        return { yaw_deg: yaw, pitch_deg: Math.atan2(y, horizontal) * 180 / Math.PI };
      },
    };
  },
  distance: (a, b) => {
    const cross = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    return Math.atan2(norm(cross), dot(a, b));
  },
  stalls: (lane, i) => passes(lane, i) && norm(directionTangent(lane, i)) <= LENGTH_EPSILON,
};

// A port Sticker's offset turn moves as a rotation Lane does (docs/scene-state-v2.md "受け渡しの置き方").
const SHAPED = { position: POSITION, rotation: ROTATION, direction: DIRECTION, offset_rotation: ROTATION };
// Lanes whose value is an object of numbers, each moving as a number; the other Lanes (fov, roll, scale,
// opacity, curve) are one number.
const FIELDS = { size: ["hFOV_deg", "vFOV_deg"], lens: ["curve", "hFOV_deg"] };

// The shapes of a shaped Lane's segments and their measured lengths, made once per evaluation.
function shapedKind(shaped, lane) {
  const made = new Map();
  const shapeOf = (index) => {
    if (!made.has(index)) {
      const shape = shaped.shape(lane, index);
      made.set(index, { shape, measured: measure(shape, shaped.distance) });
    }
    return made.get(index);
  };
  const rate = (index) => shapeOf(index).measured.lengths[PATH_SAMPLES] / span(lane, index);
  return {
    shapeOf,
    rate,
    // The speed at a key between two Smooth segments, read across a seam.
    shared: (key) => {
      const before = segmentBefore(lane, key);
      const after = segmentAfter(lane, key);
      const r0 = rate(before);
      const r1 = rate(after);
      const dt0 = span(lane, before);
      const dt1 = span(lane, after);
      return Math.min((r0 * dt1 + r1 * dt0) / (dt0 + dt1), 3 * Math.min(r0, r1));
    },
    stalls: (key) => shaped.stalls(lane, key),
  };
}

// A number of a Lane value read by `of`: no shape, the value moves from one key to the next by progress.
function scalarKind(lane, of) {
  const v = (i) => of(lane.at(i).value);
  return {
    v,
    rate: (index) => (v(index + 1) - v(index)) / span(lane, index),
    shared: (key) => {
      const { previous, next, dt0, dt1 } = neighbors(lane, key);
      return tangent(dt0, dt1, [of(previous.value) - v(key)], [of(next.value) - v(key)])[0];
    },
    stalls: () => false,
  };
}

function laneKind(name, lane) {
  if (SHAPED[name]) return shapedKind(SHAPED[name], lane);
  // smoothEasing reads the first field of a Lane of several numbers.
  if (FIELDS[name]) return scalarKind(lane, (value) => value[FIELDS[name][0]]);
  return scalarKind(lane, (value) => value);
}

// The shape parameter τ of a shaped Lane at the segment time u of the segment k, and the segment's shape. `kind` is the
// Lane's shapedKind when the caller keeps one (its shapes measured once), else one is made.
function shapedAt(name, lane, k, u, kind = shapedKind(SHAPED[name], lane)) {
  const { shape, measured } = kind.shapeOf(k);
  return { shape, tau: tauAt(measured, progress(lane, k, u, kind)) };
}

// A view of a Lane at a fractional frame of its own time base: { key } when the value is that key's, else the
// segment k and the segment time u.
export function laneSegment(lane, frame) {
  const { keyframes } = lane;
  let time = frame;
  if (lane.loop) {
    const first = keyframes[0].frame;
    let r = (frame - first) - lane.period * Math.floor((frame - first) / lane.period);
    if (r < 0 || r >= lane.period - FRAME_EPSILON) r = 0;
    time = first + r;
  } else {
    if (time <= keyframes[0].frame + FRAME_EPSILON) return { key: 0 };
    if (time >= keyframes[keyframes.length - 1].frame - FRAME_EPSILON) return { key: keyframes.length - 1 };
  }
  // The last Keyframe at or before the time (within FRAME_EPSILON), by bisection: a Lane may have thousands.
  let lo = 0;
  let hi = lane.n - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (keyframes[mid].frame <= time + FRAME_EPSILON) lo = mid;
    else hi = mid - 1;
  }
  const left = lane.at(lo);
  if (Math.abs(time - left.frame) <= FRAME_EPSILON || left.easing === "hold") return { key: lo };
  return { k: lo, u: (time - left.frame) / span(lane, lo) };
}

// The value of the Lane `name` at the segment time u of the segment k of a laneView. `kinds` (laneSampler's) gives the
// Lane's kinds made once: the shapedKind of a shaped Lane, kinds(field) a number's (field null for a Lane of one
// number); without it they are made here.
export function segmentValue(name, lane, k, u, kinds = null) {
  if (SHAPED[name]) {
    const { shape, tau } = shapedAt(name, lane, k, u, kinds?.shaped ?? shapedKind(SHAPED[name], lane));
    return shape.value(shape.point(tau), tau);
  }
  const scalarAt = (field) => {
    const kind = kinds ? kinds.scalar(field) : scalarKind(lane, field === null ? (value) => value : (value) => value[field]);
    return kind.v(k) + (kind.v(k + 1) - kind.v(k)) * progress(lane, k, u, kind);
  };
  if (FIELDS[name]) return Object.fromEntries(FIELDS[name].map((field) => [field, scalarAt(field)]));
  return scalarAt(null);
}

// The points of the position segment k at the shape parameters `taus` (the path line draws the shape itself).
export function positionPoints(lane, k, taus) {
  const shape = POSITION.shape(lane, k);
  return taus.map((tau) => shape.point(tau));
}

// The positions of the segment k at the segment times `us`, its shape measured once (the path line's speed dots).
export function positionsAt(lane, k, us) {
  const kind = shapedKind(POSITION, lane);
  const { shape, measured } = kind.shapeOf(k);
  if (lane.at(k).easing === "hold") return us.map(() => [...lane.at(k).value]);
  return us.map((u) => shape.point(tauAt(measured, progress(lane, k, u, kind))));
}

// The shape parameter τ of the position segment k at the segment time u.
export function positionTau(lane, k, u) {
  return shapedAt("position", lane, k, u).tau;
}

const lerp = (a, b, t) => a.map((value, i) => value + (b[i] - value) * t);

// De Casteljau: the cubic Bezier (p0, p1, p2, p3) of points split at t into its two halves.
function splitBezier(p0, p1, p2, p3, t) {
  const q0 = lerp(p0, p1, t);
  const q1 = lerp(p1, p2, t);
  const q2 = lerp(p2, p3, t);
  const r0 = lerp(q0, q1, t);
  const r1 = lerp(q1, q2, t);
  const middle = lerp(r0, r1, t);
  return [[p0, q0, r0, middle], [middle, r1, q2, p3]];
}

// A cubic-bezier Easing split at the segment time u into the Easings of its two halves, each in its own unit square,
// which together move exactly as the whole (docs/timeline-ui.md "記録の規則"). The values are not rounded. A half with
// no time or no progress moves Linear (it has nothing to ease).
export function splitEasing(easing, u) {
  const [x1, y1, x2, y2] = easing;
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 50; i += 1) {
    const mid = 0.5 * (lo + hi);
    if (bezier(0, x1, x2, 1, mid) < u) lo = mid;
    else hi = mid;
  }
  const [first, second] = splitBezier([0, 0], [x1, y1], [x2, y2], [1, 1], 0.5 * (lo + hi));
  const unit = ([start, a, b, end]) => {
    const w = end[0] - start[0];
    const h = end[1] - start[1];
    if (w <= LENGTH_EPSILON || h <= LENGTH_EPSILON) return [0, 0, 1, 1];
    const fit = (point) => [Math.min(1, Math.max(0, (point[0] - start[0]) / w)), Math.min(1, Math.max(0, (point[1] - start[1]) / h))];
    return [...fit(a), ...fit(b)];
  };
  return [unit(first), unit(second)];
}

// The handles that keep a position Lane's path when a Keyframe is added at the segment time u of the segment k of a
// laneView, a segment with a handle at either end (docs/timeline-ui.md "記録の規則"): the segment's Bezier split at
// the shape parameter of that time. { prevOut, newIn, newOut, nextIn } as offsets from their keys (the new key's from
// the shape's point there), or null for a segment without handles, whose new key stays automatic.
export function positionSplit(lane, k, u) {
  const start = lane.at(k);
  const end = lane.at(k + 1);
  if (!positionHandle(lane, k, "out") && !positionHandle(lane, k + 1, "in")) return null;
  const tau = positionTau(lane, k, u);
  const [out, into] = positionOffsets(lane, k);
  const [first, second] = splitBezier(start.value, plus(start.value, out), plus(end.value, into), end.value, tau);
  const middle = first[3];
  return { prevOut: minus(first[1], start.value), newIn: minus(first[2], middle), newOut: minus(second[1], middle), nextIn: minus(second[2], end.value) };
}

// The value of the Lane `name` of `owner` at a fractional frame of its own time base; `period` is the loop period of
// a looping owner (docs/scene-state-v2.md "ループ"), else null.
export function evaluateLane(owner, name, frame, period = null) {
  return laneSampler(owner, name, period)(frame);
}

// A reader of the Lane `name` of `owner` at many fractional frames, as evaluateLane reads each: the Lane's view, and
// its segments' shapes and measured lengths, are made once for all of them. The Lane must not change while it is used.
export function laneSampler(owner, name, period = null) {
  const { keyframes } = owner[name];
  if (!keyframes.length) return () => copyValue(owner[name].value);
  const lane = laneView(keyframes, period);
  const scalars = new Map();
  const kinds = {
    shaped: SHAPED[name] ? shapedKind(SHAPED[name], lane) : null,
    scalar(field) {
      if (!scalars.has(field)) scalars.set(field, scalarKind(lane, field === null ? (value) => value : (value) => value[field]));
      return scalars.get(field);
    },
  };
  return (frame) => {
    const at = laneSegment(lane, frame);
    if (at.key !== undefined) return copyValue(keyframes[at.key].value);
    // A Look at target does not move as a number: the one of the segment's start (the turn between targets is the
    // Camera's, evaluateCamera).
    if (name === "look_at") return copyValue(lane.at(at.k).value);
    return segmentValue(name, lane, at.k, at.u, kinds);
  };
}

// The loop period of an owner (the Camera or a Sticker) for the output length `length`: the length when the owner
// loops and a length is known, else null.
export function ownerPeriod(owner, length) {
  return owner.loop === true && length !== null && length !== undefined ? length : null;
}

// Interpolation may leave a range by rounding; these bring values back into the range the state allows.
function opacity(value) {
  return Math.min(1, Math.max(0, value));
}

function scale(value) {
  return Math.max(1e-6, value);
}

// Where a Clip range's material starts on the Timeline: start − in (docs/scene-state-v2.md "時間").
export function clipOrigin(clip) {
  return clip.start - clip.in;
}

// A Timeline frame as the frame from the Clip range's material start, as the evaluation's clip_frame
// (core/scene_eval.py _clip_frame).
export function clipFrame(clip, frame) {
  return frame - clipOrigin(clip);
}

// Whether a Timeline frame is in the Clip range.
export function clipActive(clip, frame) {
  return frame >= clip.start - FRAME_EPSILON
    && (clip.duration === null || frame < clip.start + clip.duration - FRAME_EPSILON);
}

// --- Look at (docs/scene-state-v2.md "Look at", ADR 0065).

// A content box not known: its center and size zero, so the point is the Sticker's position.
const NO_BOX = Object.freeze({ center: [0, 0, 0], size: [0, 0, 0] });

// The World point of a Look at target at a Timeline frame, or null for none: a point as it is; a Sticker's point, its
// content box's center plus the offset times the box's size, scaled, turned and moved by the Sticker evaluated there.
// `scene` is { stickers (the state's own), boxes (by Sticker id), length }.
function lookTargetPoint(target, frame, scene) {
  if (!target) return null;
  if (target.point) return target.point;
  const sticker = scene?.stickers?.find((item) => item.id === target.sticker);
  if (!sticker || sticker.placement !== "world") return null;
  const period = ownerPeriod(sticker, scene.length ?? null);
  const own = clipFrame(sticker.clip, frame);
  const position = evaluateLane(sticker, "position", own, period);
  const rotation = evaluateLane(sticker, "rotation", own, period);
  const size = Math.max(1e-6, evaluateLane(sticker, "scale", own, period));
  const box = scene.boxes?.[sticker.id] ?? NO_BOX;
  const local = box.center.map((c, axis) => (c + target.offset[axis] * box.size[axis]) * size);
  const turn = worldRotation(rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg);
  return position.map((c, axis) => c + turn[axis][0] * local[0] + turn[axis][1] * local[1] + turn[axis][2] * local[2]);
}

// The World point of the Camera's Look at target at a Timeline frame (the target of its Lane there, the one a segment
// starts from), or null without one; `scene` is { stickers, boxes }. The editor's mark shows it.
export function lookAtPoint(camera, frame, length = null, scene = null) {
  if (!camera?.look_at) return null;
  return lookTargetPoint(evaluateLane(camera, "look_at", frame, ownerPeriod(camera, length)), frame, { ...scene, length });
}

// The yaw and pitch toward a target from the Camera at a frame: { yaw, pitch }, { pole } straight over or under it, or
// null for no target or the Camera on it.
function lookAngles(camera, target, frame, scene, period) {
  const point = lookTargetPoint(target, frame, scene);
  if (!point) return null;
  const position = evaluateLane(camera, "position", frame, period);
  const d = point.map((c, axis) => c - position[axis]);
  const size = norm(d);
  if (size <= 1e-9) return null;
  if (Math.hypot(d[0], d[2]) <= 1e-9 * size) return { pole: d[1] > 0 ? 90 : -90 };
  const { yawDeg, pitchDeg } = lookRotation(d);
  return { yaw: yawDeg, pitch: pitchDeg };
}

// The frames a pole's yaw is searched over: from the first Keyframe of the Camera's and the target's Lanes (and 0) to the
// last (and the output's last frame).
function poleRange(camera, target, scene) {
  let lo = 0;
  let hi = scene?.length ? scene.length - 1 : 0;
  const take = (owner, offset) => {
    for (const lane of Object.values(owner)) {
      if (!lane || !Array.isArray(lane.keyframes) || !lane.keyframes.length) continue;
      lo = Math.min(lo, lane.keyframes[0].frame + offset);
      hi = Math.max(hi, lane.keyframes[lane.keyframes.length - 1].frame + offset);
    }
  };
  take(camera, 0);
  const sticker = target?.sticker ? scene?.stickers?.find((item) => item.id === target.sticker) : null;
  if (sticker) take(sticker, clipOrigin(sticker.clip));
  return [lo, hi];
}

// The Camera's turn toward a target at a frame ({ yaw_deg, pitch_deg, roll_deg }): up is World +Y and the Roll is the
// rotation Lane's. Without a target, or on it, the rotation Lane's turn. Straight over or under it, the yaw of the frame
// just before that is not, else just after, else the rotation Lane's.
function lookToward(camera, target, frame, scene, period) {
  const rotation = evaluateLane(camera, "rotation", frame, period);
  const angles = lookAngles(camera, target, frame, scene, period);
  if (!angles) return rotation;
  if (angles.pole === undefined) return { yaw_deg: angles.yaw, pitch_deg: angles.pitch, roll_deg: rotation.roll_deg };
  // A Camera that does not move looking at a point: every frame is on the pole, so no frame gives a yaw.
  if (!camera.position.keyframes.length && target.point) return { yaw_deg: rotation.yaw_deg, pitch_deg: angles.pole, roll_deg: rotation.roll_deg };
  const [lo, hi] = poleRange(camera, target, scene);
  let yaw = null;
  for (let g = Math.ceil(frame) - 1; g >= lo && yaw === null; g -= 1) {
    const other = lookAngles(camera, target, g, scene, period);
    if (other && other.pole === undefined) yaw = other.yaw;
  }
  for (let g = Math.floor(frame) + 1; g <= hi && yaw === null; g += 1) {
    const other = lookAngles(camera, target, g, scene, period);
    if (other && other.pole === undefined) yaw = other.yaw;
  }
  return { yaw_deg: yaw ?? rotation.yaw_deg, pitch_deg: angles.pole, roll_deg: rotation.roll_deg };
}

function quaternionTurn([x, y, z, w]) {
  const { yawDeg, pitchDeg, rollDeg } = panoramaAngles(quaternionToRotation({ x, y, z, w }));
  return { yaw_deg: yawDeg, pitch_deg: pitchDeg, roll_deg: rollDeg };
}

// The angle (radians) between two turns, the Look at Lane's segment length.
function turnSeparation(a, b) {
  const qa = quaternion(a);
  const qb = quaternion(b);
  return 2 * Math.acos(Math.min(1, Math.abs(qdot(qa, qb))));
}

// The Camera's turn with a Look at Lane that has a target (docs/scene-state-v2.md "Look at"): its one target's, else
// between two Keyframes the slerp, by the segment's progress, of the turns toward the two targets at the same frame.
function lookTurn(camera, frame, scene, period) {
  const lane = camera.look_at;
  if (!lane.keyframes.length) return lookToward(camera, lane.value, frame, scene, period);
  const view = laneView(lane.keyframes, period);
  const at = laneSegment(view, frame);
  if (at.key !== undefined) return lookToward(camera, lane.keyframes[at.key].value, frame, scene, period);
  const { k, u } = at;
  const kind = lookKind(camera, view, scene, period);
  const [a, b] = kind.turnsAt(k, frame);
  const qa = quaternion(a);
  let qb = quaternion(b);
  if (qdot(qa, qb) < 0) qb = qneg(qb);
  return quaternionTurn(slerp(qa, qb, progress(view, k, u, kind)));
}

// How the Look at Lane's segments move (the kind progress() reads): a Smooth segment's length is the angle between the
// turns toward its two targets where it starts; turnsAt(index, time) gives those turns at a Timeline frame. `scene` is
// { stickers, boxes, length }.
function lookKind(camera, view, scene, period) {
  const turnsAt = (index, time) => [lookToward(camera, view.at(index).value, time, scene, period), lookToward(camera, view.at(index + 1).value, time, scene, period)];
  const length = (index) => turnSeparation(...turnsAt(index, view.at(index).frame));
  const rate = (index) => length(index) / span(view, index);
  return {
    turnsAt,
    length,
    rate,
    shared: (key) => {
      const before = segmentBefore(view, key);
      const after = segmentAfter(view, key);
      const r0 = rate(before);
      const r1 = rate(after);
      const dt0 = span(view, before);
      const dt1 = span(view, after);
      return Math.min((r0 * dt1 + r1 * dt0) / (dt0 + dt1), 3 * Math.min(r0, r1));
    },
    stalls: () => false,
  };
}

// The Camera of a state at a fractional Timeline frame, as evaluateSceneState() gives it; `length` is the output
// length (the loop period). Its hFOV is held under the limit of its evaluated lens curve κ (ADR 0042). With a Look at
// target its turn faces it; `scene` ({ stickers, boxes }) gives the target Stickers and their content boxes.
export function evaluateCamera(camera, frame, length = null, scene = null) {
  const period = ownerPeriod(camera, length);
  const curve = Math.min(LENS_CURVE_MAX, Math.max(LENS_CURVE_MIN, evaluateLane(camera, "curve", frame, period)));
  const looking = camera.look_at && (camera.look_at.value !== null || camera.look_at.keyframes.length > 0);
  return {
    position: evaluateLane(camera, "position", frame, period),
    ...(looking ? lookTurn(camera, frame, { ...scene, length }, period) : evaluateLane(camera, "rotation", frame, period)),
    hFOV_deg: Math.min(lensFovLimit(curve), Math.max(0.1, evaluateLane(camera, "fov", frame, period))),
    curve,
    aspect: camera.aspect,
  };
}

// --- Pose handoff (docs/scene-state-v2.md "受け渡しの置き方", ADR 0067).

// A sticker_state's Lane (its Keyframes, never empty once loaded) as a state's Lane.
function shotLane(keys) {
  return { value: keys[0].value, keyframes: keys };
}

// The Camera that shot what a sticker_state (`shot`, loadStickerState()) hands, at the sticker_state's frame `time`: its
// Lanes, Look at and targets evaluated by the same rules, the targets as World Stickers of their own Timeline.
export function shotCamera(shot, time) {
  const { camera } = shot;
  const owner = { aspect: 1, loop: camera.loop, look_at: camera.look_at };
  for (const name of ["position", "rotation", "fov", "curve"]) owner[name] = shotLane(camera[name]);
  const stickers = shot.targets.map((target) => ({
    id: target.id,
    placement: "world",
    clip: { start: 0, in: 0, duration: null },
    loop: target.loop,
    position: shotLane(target.position),
    rotation: shotLane(target.rotation),
    scale: shotLane(target.scale),
  }));
  const boxes = Object.fromEntries(shot.targets.filter((target) => target.box).map((target) => [target.id, target.box]));
  return evaluateCamera(owner, time, shot.length, { stickers, boxes });
}

// The hFOV a handed-off port Sticker is drawn with: the Camera `taken`'s hFOV times the zoom `k`, kept within its lens
// curve's limit (docs/scene-state-v2.md "受け渡しの置き方").
export function handoffHfov(taken, k) {
  return Math.min(lensFovLimit(taken.curve), Math.max(0.1, taken.hFOV_deg * k));
}

// A port Sticker placed by the Camera that shot what `shot` hands, at its clip frame `own` (the media's time) on a
// Timeline of `fps`: that Camera's turn turned by the offset in its own axes, its hFOV times the offset factor, its lens
// curve. The vFOV is the hFOV, as a stored port Sticker's (its media's aspect gives the drawn one).
function handoffValues(sticker, own, period, shot, fps) {
  const taken = shotCamera(shot, (own * shot.fps) / fps);
  const offset = evaluateLane(sticker, "offset_rotation", own, period);
  const k = Math.max(1e-6, evaluateLane(sticker, "offset_fov", own, period));
  const a = worldRotation(taken.yaw_deg, taken.pitch_deg, taken.roll_deg);
  const b = worldRotation(offset.yaw_deg, offset.pitch_deg, offset.roll_deg);
  const turn = a.map((row) => [0, 1, 2].map((j) => row[0] * b[0][j] + row[1] * b[1][j] + row[2] * b[2][j]));
  const { yawDeg, pitchDeg, rollDeg } = panoramaAngles(turn);
  const hFov = handoffHfov(taken, k);
  return { yaw_deg: yawDeg, pitch_deg: pitchDeg, roll_deg: rollDeg, hFOV_deg: hFov, vFOV_deg: hFov, curve: taken.curve };
}

// Whether `shot` places this Sticker: a sky port Sticker of a state handed a sticker_state.
function handedOff(sticker, shot) {
  return Boolean(shot) && sticker.source?.kind === "port" && sticker.placement === "sky";
}

// Evaluates a state returned by loadSceneState at a fractional Timeline frame; `length` is the output length, the
// loop period of looping owners, `boxes` the content boxes of the Stickers by id, which the Camera's Look at target
// point reads, and `shot` the sticker_state handed to its port Sticker, which places it (docs/scene-state-v2.md
// "評価関数").
export function evaluateSceneState(state, frame, length = null, boxes = null, shot = null) {
  const time = Number(frame);
  const { camera, scene } = state;
  const sceneClipFrame = clipFrame(scene.clip, time);
  return {
    frame: time,
    camera: evaluateCamera(camera, time, length, { stickers: state.stickers, boxes }),
    scene: {
      active: scene.visible && clipActive(scene.clip, time),
      clip_frame: sceneClipFrame,
      position: evaluateLane(scene, "position", sceneClipFrame),
      ...evaluateLane(scene, "rotation", sceneClipFrame),
      scale: scale(evaluateLane(scene, "scale", sceneClipFrame)),
    },
    stickers: state.stickers.map((sticker) => evaluateSticker(sticker, time, length, shot, state.timeline.fps)),
  };
}

function curveOf(value) {
  return Math.min(LENS_CURVE_MAX, Math.max(LENS_CURVE_MIN, value));
}

// A world Sticker with a `lens` has it evaluated ({ curve, hFOV_deg } under the limit of its curve); a sky Sticker
// has its lens curve, and its size under that curve's limit (ADR 0042).
function stickerValues(sticker, frame, period) {
  if (sticker.placement === "world") {
    const out = {
      position: evaluateLane(sticker, "position", frame, period),
      ...evaluateLane(sticker, "rotation", frame, period),
      scale: scale(evaluateLane(sticker, "scale", frame, period)),
    };
    if (sticker.lens) {
      const value = evaluateLane(sticker, "lens", frame, period);
      const curve = curveOf(value.curve);
      out.lens = { curve, hFOV_deg: Math.min(lensFovLimit(curve), Math.max(0.1, value.hFOV_deg)) };
    }
    return out;
  }
  const angles = evaluateLane(sticker, "size", frame, period);
  const curve = sticker.curve ? curveOf(evaluateLane(sticker, "curve", frame, period)) : 1;
  const limit = lensFovLimit(curve);
  return {
    ...evaluateLane(sticker, "direction", frame, period),
    roll_deg: evaluateLane(sticker, "roll", frame, period),
    hFOV_deg: Math.min(limit, Math.max(0.1, angles.hFOV_deg)),
    vFOV_deg: Math.min(limit, Math.max(0.1, angles.vFOV_deg)),
    curve,
  };
}

// One Sticker of evaluateSceneState(); `length` is the output length (the loop period), `shot` the sticker_state handed
// to a port Sticker and `fps` the Timeline fps it is read at.
export function evaluateSticker(sticker, frame, length = null, shot = null, fps = null) {
  const period = ownerPeriod(sticker, length);
  const stickerClipFrame = clipFrame(sticker.clip, frame);
  return {
    id: sticker.id,
    placement: sticker.placement,
    active: sticker.visible && clipActive(sticker.clip, frame),
    clip_frame: stickerClipFrame,
    ...(handedOff(sticker, shot) ? handoffValues(sticker, stickerClipFrame, period, shot, fps) : stickerValues(sticker, stickerClipFrame, period)),
    opacity: opacity(evaluateLane(sticker, "opacity", stickerClipFrame, period)),
  };
}
