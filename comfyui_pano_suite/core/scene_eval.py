"""State v2 evaluation: normalized state and a Timeline frame -> values at that time.

The contract is documented in docs/scene-state-v2.md. web_src/pano_scene_eval.js
must return the same values within 1e-4.
"""

import math
from bisect import bisect_right

from .math import CURVE_MAX, CURVE_MIN, lens_fov_limit
from .world import look_rotation, panorama_angles, quaternion_to_rotation, rotation_to_quaternion, world_rotation


def _copy_value(value):
    if isinstance(value, (dict, list)):
        return value.copy()
    return value


# Fractional frames within this distance of a Keyframe or Clip range edge count as that frame, so a Cut
# lands on the output frame whose time (seconds x fps) misses the Keyframe only by float rounding.
FRAME_EPSILON = 1e-6


# Quaternion dot products within this of zero are exact half turns, whose direction a fixed rule picks.
# Directions this close to exactly opposite also are.
HALF_TURN_EPSILON = 1e-6
# A direction this close to a pole has no yaw of its own.
POLE_EPSILON = 1e-9


# The number of steps a segment's shape is measured in, to read progress as a share of its length
# (docs/scene-state-v2.md "長さと τ"). web_src/pano_scene_eval.js has the same value.
PATH_SAMPLES = 64
# Lengths, vectors and rates at most this are zero.
LENGTH_EPSILON = 1e-12
# Two chord directions this close to opposite are an exact turn back.
TURN_BACK_EPSILON = 1e-9
# A dot product below this share of the two lengths' product, negated, is a turn back.
TURN_DOT_EPSILON = 1e-9
# The step of τ a shape's speed at a sample is measured over (SPEED_STEP).
SPEED_STEP = 1e-6
# A looping Lane whose last value is within this of its first (each number) closes at a seam.
SEAM_EPSILON = 1e-9
# The Easing a Smooth segment that stops at both ends moves by: ease-in-out, the default before Smooth.
EASE_IN_OUT = (0.42, 0.0, 0.58, 1.0)


def _bezier(p0, p1, p2, p3, t):
    s = 1.0 - t
    return s * s * s * p0 + 3.0 * s * s * t * p1 + 3.0 * s * t * t * p2 + t * t * t * p3


def _cubic_progress(easing, u):
    """Progress of a cubic-bezier segment for the segment time u in [0, 1], like CSS cubic-bezier."""
    x1, y1, x2, y2 = easing
    lo, hi = 0.0, 1.0
    # x(t) is monotonic because x1 and x2 are in [0, 1]; bisection never fails on flat or steep curves.
    for _ in range(50):
        mid = 0.5 * (lo + hi)
        if _bezier(0.0, x1, x2, 1.0, mid) < u:
            lo = mid
        else:
            hi = mid
    return _bezier(0.0, y1, y2, 1.0, 0.5 * (lo + hi))


def _easing_slope(easing, at_end):
    """The slope of a cubic-bezier Easing at its start or end (docs/scene-state-v2.md "進み具合" 2)."""
    x1, y1, x2, y2 = easing

    def ratio(rise, run, nxt):
        if run != 0:
            return rise / run
        return 3.0 if rise != 0 else nxt()

    if at_end:
        return ratio(1.0 - y2, 1.0 - x2, lambda: ratio(1.0 - y1, 1.0 - x1, lambda: 1.0))
    return ratio(y1, x1, lambda: ratio(y2, x2, lambda: 1.0))


def _hermite(a0, a1, u):
    """Cubic Hermite progress with the end slopes a0 and a1 (1 is the segment's average speed)."""
    return (u * u * u - 2.0 * u * u + u) * a0 + (3.0 * u * u - 2.0 * u * u * u) + (u * u * u - u * u) * a1


def _dot(a, b):
    total = 0.0
    for x, y in zip(a, b):
        total += x * y
    return total


def _norm(v):
    return math.sqrt(_dot(v, v))


def _plus(a, b):
    return [x + y for x, y in zip(a, b)]


def _minus(a, b):
    return [x - y for x, y in zip(a, b)]


def _times(v, k):
    return [c * k for c in v]


def _tangent(dt0, dt1, back, ahead):
    """Velocity per frame at a key from the offsets to its neighbors and the two segment lengths.

    The slope of the parabola through the three keys, limited like Fritsch-Carlson: zero when the two sides
    turn back (a negative dot product beyond rounding), and at most three times the slower side's slope.
    """
    s0 = [-c / dt0 for c in back]
    s1 = [c / dt1 for c in ahead]
    if _dot(s0, s1) < -TURN_DOT_EPSILON * _norm(s0) * _norm(s1):
        return [0.0] * len(back)
    m = [(a * dt1 + b * dt0) / (dt0 + dt1) for a, b in zip(s0, s1)]
    limit = 3.0 * min(_norm(s0), _norm(s1))
    length = _norm(m)
    return m if length <= limit else [c * limit / length for c in m]


def _same_value(a, b):
    """Whether two Lane values are the same within SEAM_EPSILON, each number; a Look at target (a Sticker id and its
    offset, a point, or None) is the same one with the same numbers."""
    if a is None or b is None or isinstance(a, str) or isinstance(b, str):
        return a == b
    if isinstance(a, dict):
        return isinstance(b, dict) and a.keys() == b.keys() and all(_same_value(a[key], b[key]) for key in a)
    if isinstance(a, (list, tuple)):
        return isinstance(b, (list, tuple)) and len(a) == len(b) and all(_same_value(x, y) for x, y in zip(a, b))
    return abs(a - b) <= SEAM_EPSILON


class _Lane:
    """A Lane's Keyframes by an index that, in a looping Lane, runs past both ends: key i + n is key i one period
    later (docs/scene-state-v2.md "ループ"). A looping Lane whose last value is its first closes at a seam."""

    def __init__(self, keyframes, period=None):
        self.keyframes = keyframes
        self.n = len(keyframes)
        self.loop = period is not None and self.n >= 2 and keyframes[-1]["frame"] - keyframes[0]["frame"] < period
        self.period = period if self.loop else None
        self.seam = self.loop and _same_value(keyframes[0]["value"], keyframes[-1]["value"])

    def at(self, i):
        if not self.loop:
            return self.keyframes[i]
        turns = i // self.n
        key = self.keyframes[i - turns * self.n]
        return {**key, "frame": key["frame"] + turns * self.period} if turns else key


def _span(lane, k):
    return lane.at(k + 1)["frame"] - lane.at(k)["frame"]


def _has_segment(lane, k):
    return lane.loop or 0 <= k <= lane.n - 2


def _seam_segment(lane, k):
    return lane.seam and k % lane.n == lane.n - 1


def _segment_before(lane, i):
    return i - 2 if _seam_segment(lane, i - 1) else i - 1


def _segment_after(lane, i):
    return i + 1 if _seam_segment(lane, i) else i


def _passes(lane, i):
    """Whether the shape passes smoothly through key i: segments on both sides and none of them a hold."""
    before, after = _segment_before(lane, i), _segment_after(lane, i)
    if not _has_segment(lane, before) or not _has_segment(lane, after):
        return False
    return all(lane.at(k)["easing"] != "hold" for k in range(before, after + 1))


def _neighbors(lane, i):
    """The keys before and after key i that its tangent reads, and the lengths of time to them."""
    before, after = _segment_before(lane, i), _segment_after(lane, i)
    return lane.at(before), lane.at(after + 1), _span(lane, before), _span(lane, after)


def _smooth_slope(lane, k, at_start, kind):
    """The end slope of the Smooth segment k at its start or end over its average speed (docs "進み具合")."""
    average = kind.rate(k)
    if abs(average) <= LENGTH_EPSILON:
        return 1.0
    key = k if at_start else k + 1
    speed = 0.0
    if not kind.stalls(key):
        other = k - 1 if at_start else k + 1
        # A Smooth seam segment does not move; the speed reads the segment past it.
        if _has_segment(lane, other) and _seam_segment(lane, other) and lane.at(other)["easing"] == "smooth":
            other = other - 1 if at_start else other + 1
        if _has_segment(lane, other):
            easing = lane.at(other)["easing"]
            if easing == "smooth":
                speed = kind.shared(key)
            elif easing != "hold":
                speed = _easing_slope(easing, at_start) * kind.rate(other)
    return min(3.0, max(0.0, speed / average))


def _progress(lane, k, u, kind):
    easing = lane.at(k)["easing"]
    if easing != "smooth":
        return _cubic_progress(easing, u)
    a0 = _smooth_slope(lane, k, True, kind)
    a1 = _smooth_slope(lane, k, False, kind)
    if a0 == 0.0 and a1 == 0.0:
        return _cubic_progress(EASE_IN_OUT, u)
    return _hermite(a0, a1, u)


def _tau_at(measured, p):
    """The shape parameter τ at which a segment's measured length reaches the share p (docs "長さと τ")."""
    lengths, speeds = measured
    total = lengths[PATH_SAMPLES]
    if total <= LENGTH_EPSILON:
        return p
    if p <= 0.0:
        return 0.0
    if p >= 1.0:
        return 1.0
    target = p * total
    j = 0
    while j < PATH_SAMPLES - 1 and lengths[j + 1] < target:
        j += 1
    step = lengths[j + 1] - lengths[j]
    if step <= LENGTH_EPSILON:
        return j / PATH_SAMPLES

    def slope(speed):
        return min(3.0, step * PATH_SAMPLES / speed) if speed > LENGTH_EPSILON else 3.0

    x = (target - lengths[j]) / step
    return (j + _hermite(slope(speeds[j]), slope(speeds[j + 1]), x)) / PATH_SAMPLES


def _measure(point, distance):
    """The lengths along a shape at its samples (summed in order) and its speeds there (length per unit of τ)."""
    points = [point(j / PATH_SAMPLES) for j in range(PATH_SAMPLES + 1)]
    lengths = [0.0]
    for j in range(1, PATH_SAMPLES + 1):
        lengths.append(lengths[j - 1] + distance(points[j - 1], points[j]))
    speeds = []
    for j, at in enumerate(points):
        t = j / PATH_SAMPLES
        lo = t if j == 0 else t - SPEED_STEP
        hi = t if j == PATH_SAMPLES else t + SPEED_STEP
        speeds.append(distance(at if j == 0 else point(lo), at if j == PATH_SAMPLES else point(hi)) / (hi - lo))
    return lengths, speeds


def _turn_angle(e0, e1):
    return 2.0 * math.atan2(_norm(_minus(e0, e1)), _norm(_plus(e0, e1)))


def _arc_factor(phi):
    return 1.0 / 3.0 if phi <= 1e-9 else (2.0 / 3.0) * math.tan(phi / 4.0) / math.sin(phi / 2.0)


def _turn_fade(phi):
    if phi <= 2.0 * math.pi / 3.0:
        return 1.0
    x = (math.pi - phi) / (math.pi / 3.0)
    return x * x * (3.0 - 2.0 * x)


def _position_handle(lane, i, side):
    handle = lane.at(i).get("handles", {}).get(side)
    return handle if handle is not None and _norm(handle) > LENGTH_EPSILON else None


def _is_corner(lane, i):
    return lane.at(i).get("corner") is True


def _position_chords(lane, i):
    previous, nxt, _dt0, _dt1 = _neighbors(lane, i)
    value = lane.at(i)["value"]
    return _minus(value, previous["value"]), _minus(nxt["value"], value)


def _tangent_key(lane, i):
    if not _passes(lane, i) or _is_corner(lane, i):
        return False
    c0, c1 = _position_chords(lane, i)
    return _norm(c0) > LENGTH_EPSILON and _norm(c1) > LENGTH_EPSILON


def _automatic_offset(lane, i, side):
    c0, c1 = _position_chords(lane, i)
    l0, l1 = _norm(c0), _norm(c1)
    e0, e1 = _times(c0, 1.0 / l0), _times(c1, 1.0 / l1)
    total = _plus(e0, e1)
    if _norm(total) <= TURN_BACK_EPSILON:
        return [0.0, 0.0, 0.0]
    phi = _turn_angle(e0, e1)
    factor = _arc_factor(phi) * _turn_fade(phi)
    travel = _times(total, 1.0 / _norm(total))
    other = _position_handle(lane, i, "in" if side == "out" else "out")
    if other is not None:
        travel = _times(other, (-1.0 if side == "out" else 1.0) / _norm(other))
    if side == "out":
        return _times(travel, factor * min(l1, 2.0 * l0))
    return _times(travel, -factor * min(l0, 2.0 * l1))


def position_offsets(lane, k):
    """The control-point offsets (out of key k, into key k + 1) of the position segment k (docs "形（位置）")."""
    c = _minus(lane.at(k + 1)["value"], lane.at(k)["value"])
    length = _norm(c)
    if length <= LENGTH_EPSILON:
        return [0.0, 0.0, 0.0], [0.0, 0.0, 0.0]

    def actual(i, side, straight):
        handle = _position_handle(lane, i, side)
        if handle is not None:
            return list(handle)
        if _is_corner(lane, i):
            return straight
        return _automatic_offset(lane, i, side) if _tangent_key(lane, i) else None

    start = actual(k, "out", _times(c, 1.0 / 3.0))
    end = actual(k + 1, "in", _times(c, -1.0 / 3.0))
    e = _times(c, 1.0 / length)

    def mirrored(offset, outward):
        size = _norm(offset)
        if size <= LENGTH_EPSILON:
            return None
        travel = _times(offset, outward / size)
        phi = min(math.pi, 2.0 * _turn_angle(e, travel))
        return _times(_minus(_times(e, 2.0 * _dot(e, travel)), travel), _arc_factor(phi) * _turn_fade(phi) * length)

    out = start
    if out is None and end is not None:
        out = mirrored(end, -1.0)
    if out is None:
        out = _times(c, 1.0 / 3.0)
    into = end
    if into is None and start is not None:
        back = mirrored(start, 1.0)
        into = None if back is None else _times(back, -1.0)
    if into is None:
        into = _times(c, -1.0 / 3.0)
    return out, into


def _position_stalls(lane, i):
    if not _passes(lane, i):
        return False
    c0, c1 = _position_chords(lane, i)
    if _norm(c0) <= LENGTH_EPSILON or _norm(c1) <= LENGTH_EPSILON:
        return True
    if _is_corner(lane, i) or _position_handle(lane, i, "in") is not None or _position_handle(lane, i, "out") is not None:
        return False
    return _norm(_plus(_times(c0, 1.0 / _norm(c0)), _times(c1, 1.0 / _norm(c1)))) <= TURN_BACK_EPSILON


class _PositionShape:
    def __init__(self, lane, k):
        self.p0 = lane.at(k)["value"]
        self.p1 = lane.at(k + 1)["value"]
        self.out, self.into = position_offsets(lane, k)

    def point(self, t):
        p0, p1, out, into = self.p0, self.p1, self.out, self.into
        return [_bezier(p0[a], p0[a] + out[a], p1[a] + into[a], p1[a], t) for a in range(3)]

    def value(self, point, _t):
        return point


def _qmul(a, b):
    ax, ay, az, aw = a
    bx, by, bz, bw = b
    return (
        aw * bx + ax * bw + ay * bz - az * by,
        aw * by - ax * bz + ay * bw + az * bx,
        aw * bz + ax * by - ay * bx + az * bw,
        aw * bw - ax * bx - ay * by - az * bz,
    )


def _qdot(a, b):
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]


def _qneg(q):
    return (-q[0], -q[1], -q[2], -q[3])


def _qlog(q):
    x, y, z, w = q
    size = math.sqrt(x * x + y * y + z * z)
    scale = math.atan2(size, w) / size if size > 1e-12 else 1.0
    return (x * scale, y * scale, z * scale)


def _qexp(v):
    angle = math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])
    scale = math.sin(angle) / angle if angle > 1e-12 else 1.0
    return (v[0] * scale, v[1] * scale, v[2] * scale, math.cos(angle))


def _qdelta(a, b):
    """log(a^-1 b): the half-angle rotation vector from a to b in a's frame."""
    return _qlog(_qmul((-a[0], -a[1], -a[2], a[3]), b))


def _slerp(a, b, t):
    return _qmul(a, _qexp(tuple(t * c for c in _qdelta(a, b))))


def _shortest(earlier, later):
    """Whether `later` must be negated so earlier -> later is the shortest turn.

    An exact half turn has two shortest turns; it turns right, else up, else clockwise, read from the
    first rotation-vector component in earlier's glTF frame (-y, x, z) that is not zero.
    """
    dot = _qdot(earlier, later)
    if abs(dot) > HALF_TURN_EPSILON:
        return dot < 0.0
    x, y, z = _qdelta(earlier, later)
    for component in (-y, x, z):
        if abs(component) > HALF_TURN_EPSILON:
            return component < 0.0
    return False


def _quaternion(value):
    return tuple(float(c) for c in rotation_to_quaternion(world_rotation(value["yaw_deg"], value["pitch_deg"], value["roll_deg"])))


def _shape_tangent(back, ahead):
    """The shape velocity of a turn (rotation, direction) at a key, per length of chord.

    docs/scene-state-v2.md "形（回転・direction）": the speed rule with the two chords' lengths in place of the
    segments' times, so the shape does not depend on when the keys are. Zero when a side does not move.
    """
    l0, l1 = _norm(back), _norm(ahead)
    if l0 <= LENGTH_EPSILON or l1 <= LENGTH_EPSILON:
        return [0.0] * len(back)
    return _tangent(l0, l1, back, ahead)


def _unwrap_near_blend(angle, a, b, t):
    """The turn of `angle` nearest to the stored angles a -> b blended by t; a tie takes the lower one."""
    blend = a + (b - a) * t
    return angle + 360.0 * math.ceil((blend - 180.0 - 1e-6 - angle) / 360.0)


def _rotation_tangent(lane, i):
    before, after, _dt0, _dt1 = _neighbors(lane, i)
    q = _quaternion(lane.at(i)["value"])
    previous = _quaternion(before["value"])
    if _shortest(previous, q):
        previous = _qneg(previous)
    nxt = _quaternion(after["value"])
    if _shortest(q, nxt):
        nxt = _qneg(nxt)
    return _shape_tangent(_qdelta(q, previous), _qdelta(q, nxt))


class _RotationShape:
    """SQUAD with tangents from the chords' lengths, not the keys' times; a segment that passes neither end is a slerp."""

    def __init__(self, lane, k):
        q0 = _quaternion(lane.at(k)["value"])
        q1 = _quaternion(lane.at(k + 1)["value"])
        if _shortest(q0, q1):
            q1 = _qneg(q1)
        chord = _qdelta(q0, q1)
        length = _norm(chord)
        start = _times(_rotation_tangent(lane, k), length) if _passes(lane, k) else chord
        end = _times(_rotation_tangent(lane, k + 1), length) if _passes(lane, k + 1) else chord
        self.q0, self.q1 = q0, q1
        self.a = _qmul(q0, _qexp(tuple(0.5 * (s - c) for s, c in zip(start, chord))))
        self.b = _qmul(q1, _qexp(tuple(0.5 * (c - e) for c, e in zip(chord, end))))
        self.left, self.right = lane.at(k)["value"], lane.at(k + 1)["value"]

    def point(self, t):
        return _slerp(_slerp(self.q0, self.q1, t), _slerp(self.a, self.b, t), 2.0 * t * (1.0 - t))

    def value(self, q, t):
        yaw, pitch, roll = panorama_angles(quaternion_to_rotation([q[0], q[1], q[2], q[3]]))
        # Output yaw and roll follow the stored numbers, so they do not wrap mid-segment.
        return {
            "yaw_deg": _unwrap_near_blend(yaw, self.left["yaw_deg"], self.right["yaw_deg"], t),
            "pitch_deg": pitch,
            "roll_deg": _unwrap_near_blend(roll, self.left["roll_deg"], self.right["roll_deg"], t),
        }


def _rotation_distance(a, b):
    return _norm(_qdelta(a, _qneg(b) if _qdot(a, b) < 0.0 else b))


def _direction_vector(value):
    """The unit vector of a direction: x right, y up, z ahead at yaw 0."""
    yaw, pitch = math.radians(value["yaw_deg"]), math.radians(value["pitch_deg"])
    return [math.cos(pitch) * math.sin(yaw), math.sin(pitch), math.cos(pitch) * math.cos(yaw)]


def _sphere_log(a, b):
    """The tangent at a toward b along the great circle, as long as the angle. Exactly opposite points give zero."""
    dot = _dot(a, b)
    w = [y - dot * x for x, y in zip(a, b)]
    length = _norm(w)
    scale = math.atan2(length, dot) / length if length > 1e-12 else 1.0
    return [c * scale for c in w]


def _sphere_exp(a, v):
    angle = _norm(v)
    scale = math.sin(angle) / angle if angle > 1e-12 else 1.0
    return [math.cos(angle) * x + scale * c for x, c in zip(a, v)]


def _sphere_slerp(a, b, t):
    return _sphere_exp(a, [t * c for c in _sphere_log(a, b)])


def _great_circle(lane, k):
    """The velocity (per unit of τ) of the great circle from key k to key k + 1 at its start and end, and whether
    the two directions are exactly opposite (which turn right from key k, toward increasing stored yaw)."""
    a = _direction_vector(lane.at(k)["value"])
    b = _direction_vector(lane.at(k + 1)["value"])
    dot = _dot(a, b)
    opposite = dot < 0.0 and _norm([y - dot * x for x, y in zip(a, b)]) <= HALF_TURN_EPSILON
    if opposite:
        yaw = math.radians(lane.at(k)["value"]["yaw_deg"])
        start = [math.pi * math.cos(yaw), 0.0, -math.pi * math.sin(yaw)]
    else:
        start = _sphere_log(a, b)
    angle = _norm(start)
    return start, [math.cos(angle) * c - angle * math.sin(angle) * x for c, x in zip(start, a)], opposite


def _direction_tangent(lane, i):
    back = [-c for c in _great_circle(lane, _segment_before(lane, i))[1]]
    return _shape_tangent(back, _great_circle(lane, _segment_after(lane, i))[0])


class _DirectionShape:
    """A sky Sticker's direction: a spherical Bezier (de Casteljau with slerps) from key k to key k + 1."""

    def __init__(self, lane, k):
        self.a = _direction_vector(lane.at(k)["value"])
        self.b = _direction_vector(lane.at(k + 1)["value"])
        chord_start, chord_end, self.opposite = _great_circle(lane, k)
        length = _norm(chord_start)
        self.chord_start = chord_start
        self.start = _times(_direction_tangent(lane, k), length) if _passes(lane, k) else chord_start
        self.end = _times(_direction_tangent(lane, k + 1), length) if _passes(lane, k + 1) else chord_end
        self.left = lane.at(k)["value"]["yaw_deg"]
        self.right = lane.at(k + 1)["value"]["yaw_deg"]

    def point(self, t):
        a, b, start, end = self.a, self.b, self.start, self.end
        if self.opposite:
            # Opposite keys can have opposite control points with no great circle between them: the segment is its
            # own great circle.
            return _sphere_exp(a, [t * c for c in self.chord_start])
        middle = _sphere_slerp(_sphere_exp(a, [c / 3.0 for c in start]), _sphere_exp(b, [-c / 3.0 for c in end]), t)
        first = _sphere_slerp(_sphere_exp(a, [t * c / 3.0 for c in start]), middle, t)
        second = _sphere_slerp(middle, _sphere_exp(b, [-(1.0 - t) * c / 3.0 for c in end]), t)
        return _sphere_slerp(first, second, t)

    def value(self, point, t):
        x, y, z = point
        horizontal = math.hypot(x, z)
        left, right = self.left, self.right
        # At a pole the yaw follows the stored numbers; elsewhere it is the turn nearest to them.
        yaw = left + (right - left) * t if horizontal <= POLE_EPSILON else _unwrap_near_blend(math.degrees(math.atan2(x, z)), left, right, t)
        return {"yaw_deg": yaw, "pitch_deg": math.degrees(math.atan2(y, horizontal))}


def _direction_distance(a, b):
    cross = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    return math.atan2(_norm(cross), _dot(a, b))


def _rotation_stalls(lane, i):
    return _passes(lane, i) and _norm(_rotation_tangent(lane, i)) <= LENGTH_EPSILON


def _direction_stalls(lane, i):
    return _passes(lane, i) and _norm(_direction_tangent(lane, i)) <= LENGTH_EPSILON


# Shaped Lanes: their segment shape, the distance along it, and whether the shape stops at a key.
SHAPED = {
    "position": (_PositionShape, lambda a, b: _norm(_minus(a, b)), _position_stalls),
    "rotation": (_RotationShape, _rotation_distance, _rotation_stalls),
    "direction": (_DirectionShape, _direction_distance, _direction_stalls),
}
# A port Sticker's offset turn moves as a rotation Lane does (docs/scene-state-v2.md "受け渡しの置き方").
SHAPED["offset_rotation"] = SHAPED["rotation"]
# Lanes whose value is an object of numbers, each moving as a number.
FIELDS = {"size": ("hFOV_deg", "vFOV_deg"), "lens": ("curve", "hFOV_deg")}


class _ShapedKind:
    """The shapes of a shaped Lane's segments and their measured lengths, made once per evaluation."""

    def __init__(self, name, lane):
        self.shape_class, self.distance, self.stalls_fn = SHAPED[name]
        self.lane = lane
        self.made = {}

    def shape_of(self, index):
        if index not in self.made:
            shape = self.shape_class(self.lane, index)
            self.made[index] = (shape, _measure(shape.point, self.distance))
        return self.made[index]

    def rate(self, index):
        return self.shape_of(index)[1][0][PATH_SAMPLES] / _span(self.lane, index)

    def shared(self, key):
        lane = self.lane
        before, after = _segment_before(lane, key), _segment_after(lane, key)
        r0, r1 = self.rate(before), self.rate(after)
        dt0, dt1 = _span(lane, before), _span(lane, after)
        return min((r0 * dt1 + r1 * dt0) / (dt0 + dt1), 3.0 * min(r0, r1))

    def stalls(self, key):
        return self.stalls_fn(self.lane, key)


class _ScalarKind:
    """A number of a Lane value read by `of`: no shape, the value moves from one key to the next by progress."""

    def __init__(self, lane, of):
        self.lane = lane
        self.of = of

    def v(self, i):
        return self.of(self.lane.at(i)["value"])

    def rate(self, index):
        return (self.v(index + 1) - self.v(index)) / _span(self.lane, index)

    def shared(self, key):
        previous, nxt, dt0, dt1 = _neighbors(self.lane, key)
        return _tangent(dt0, dt1, [self.of(previous["value"]) - self.v(key)], [self.of(nxt["value"]) - self.v(key)])[0]

    def stalls(self, _key):
        return False


def _segment_value(name, lane, k, u):
    if name in SHAPED:
        kind = _ShapedKind(name, lane)
        shape, measured = kind.shape_of(k)
        tau = _tau_at(measured, _progress(lane, k, u, kind))
        return shape.value(shape.point(tau), tau)

    def scalar_at(of):
        kind = _ScalarKind(lane, of)
        return kind.v(k) + (kind.v(k + 1) - kind.v(k)) * _progress(lane, k, u, kind)

    if name in FIELDS:
        return {field: scalar_at(lambda value, field=field: value[field]) for field in FIELDS[name]}
    return scalar_at(lambda value: value)


def _lane_segment(lane, frame):
    """(key, None) when the value at `frame` is that key's, else (k, u): the segment and the segment time."""
    keyframes = lane.keyframes
    time = frame
    if lane.loop:
        first = keyframes[0]["frame"]
        r = (frame - first) - lane.period * math.floor((frame - first) / lane.period)
        if r < 0.0 or r >= lane.period - FRAME_EPSILON:
            r = 0.0
        time = first + r
    else:
        if time <= keyframes[0]["frame"] + FRAME_EPSILON:
            return 0, None
        if time >= keyframes[-1]["frame"] - FRAME_EPSILON:
            return lane.n - 1, None
    k = _left_keyframe([key["frame"] for key in keyframes], time)
    left = lane.at(k)
    if abs(time - left["frame"]) <= FRAME_EPSILON or left["easing"] == "hold":
        return k, None
    return k, (time - left["frame"]) / _span(lane, k)


def _left_keyframe(frames, frame):
    """The index of the last of the sorted Keyframe `frames` at or before `frame` (within FRAME_EPSILON): the one
    that starts the segment `frame` is in."""
    return bisect_right(frames, frame + FRAME_EPSILON) - 1


def _evaluate_lane(owner, name, frame, period=None):
    """The value of the Lane `name` of `owner` at a fractional frame of its own time base; `period` is the loop
    period of a looping owner (docs/scene-state-v2.md "ループ"), else None."""
    keyframes = owner[name]["keyframes"]
    if not keyframes:
        return _copy_value(owner[name]["value"])
    lane = _Lane(keyframes, period)
    k, u = _lane_segment(lane, frame)
    if u is None:
        return _copy_value(keyframes[k]["value"])
    if name == "look_at":
        # A Look at target does not move as a number: the one of the segment's start.
        return _copy_value(lane.at(k)["value"])
    return _segment_value(name, lane, k, u)


def owner_period(owner, length):
    """The loop period of an owner (the Camera or a Sticker) for the output length: the length when it loops."""
    return length if owner.get("loop") is True and length is not None else None


# --- Look at (docs/scene-state-v2.md "Look at", ADR 0065).

_NO_BOX = {"center": [0.0, 0.0, 0.0], "size": [0.0, 0.0, 0.0]}


def _look_target_point(target, frame, scene):
    """The World point of a Look at target at a Timeline frame, or None for none (scene: stickers, boxes, length)."""
    if target is None:
        return None
    if "point" in target:
        return list(target["point"])
    sticker = next((item for item in scene["stickers"] if item["id"] == target["sticker"]), None)
    if sticker is None or sticker["placement"] != "world":
        return None
    period = owner_period(sticker, scene["length"])
    own = _clip_frame(sticker["clip"], frame)
    position = _evaluate_lane(sticker, "position", own, period)
    rotation = _evaluate_lane(sticker, "rotation", own, period)
    size = max(1e-6, _evaluate_lane(sticker, "scale", own, period))
    box = (scene["boxes"] or {}).get(sticker["id"]) or _NO_BOX
    local = [(c + target["offset"][axis] * box["size"][axis]) * size for axis, c in enumerate(box["center"])]
    turn = world_rotation(rotation["yaw_deg"], rotation["pitch_deg"], rotation["roll_deg"])
    return [c + float(turn[axis][0]) * local[0] + float(turn[axis][1]) * local[1] + float(turn[axis][2]) * local[2] for axis, c in enumerate(position)]


def _look_angles(camera, target, frame, scene, period):
    """(yaw, pitch, None) toward a target, (None, None, ±90) straight over or under it, or None (no target, on it)."""
    point = _look_target_point(target, frame, scene)
    if point is None:
        return None
    position = _evaluate_lane(camera, "position", frame, period)
    d = [c - position[axis] for axis, c in enumerate(point)]
    size = _norm(d)
    if size <= 1e-9:
        return None
    if math.hypot(d[0], d[2]) <= 1e-9 * size:
        return None, None, (90.0 if d[1] > 0 else -90.0)
    yaw, pitch = look_rotation(d)
    return yaw, pitch, None


def _pole_range(camera, target, scene):
    lo, hi = 0.0, (scene["length"] - 1 if scene["length"] else 0.0)

    def take(owner, offset):
        nonlocal lo, hi
        for lane in owner.values():
            if not isinstance(lane, dict) or not isinstance(lane.get("keyframes"), list) or not lane["keyframes"]:
                continue
            lo = min(lo, lane["keyframes"][0]["frame"] + offset)
            hi = max(hi, lane["keyframes"][-1]["frame"] + offset)

    take(camera, 0)
    sticker = next((item for item in scene["stickers"] if item["id"] == target.get("sticker")), None) if target and "sticker" in target else None
    if sticker is not None:
        take(sticker, sticker["clip"]["start"] - sticker["clip"]["in"])
    return lo, hi


def _look_toward(camera, target, frame, scene, period):
    """The Camera's turn toward a target at a frame: up is World +Y, the Roll the rotation Lane's (docs "Look at")."""
    rotation = _evaluate_lane(camera, "rotation", frame, period)
    angles = _look_angles(camera, target, frame, scene, period)
    if angles is None:
        return rotation
    yaw, pitch, pole = angles
    if pole is None:
        return {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": rotation["roll_deg"]}
    lo, hi = _pole_range(camera, target, scene)
    found = None
    g = math.ceil(frame) - 1
    while g >= lo and found is None:
        other = _look_angles(camera, target, g, scene, period)
        if other is not None and other[2] is None:
            found = other[0]
        g -= 1
    g = math.floor(frame) + 1
    while g <= hi and found is None:
        other = _look_angles(camera, target, g, scene, period)
        if other is not None and other[2] is None:
            found = other[0]
        g += 1
    return {"yaw_deg": rotation["yaw_deg"] if found is None else found, "pitch_deg": pole, "roll_deg": rotation["roll_deg"]}


def _quaternion_turn(q):
    yaw, pitch, roll = panorama_angles(quaternion_to_rotation([q[0], q[1], q[2], q[3]]))
    return {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": roll}


def _turn_separation(a, b):
    return 2.0 * math.acos(min(1.0, abs(_qdot(_quaternion(a), _quaternion(b)))))


class _LookKind:
    """The progress rules' view of a Look at Lane: a segment's length is the angle between its targets' turns."""

    def __init__(self, camera, view, scene, period):
        self.camera, self.view, self.scene, self.period = camera, view, scene, period

    def turns(self, index, time):
        return (_look_toward(self.camera, self.view.at(index)["value"], time, self.scene, self.period),
                _look_toward(self.camera, self.view.at(index + 1)["value"], time, self.scene, self.period))

    def rate(self, index):
        return _turn_separation(*self.turns(index, self.view.at(index)["frame"])) / _span(self.view, index)

    def shared(self, key):
        view = self.view
        before, after = _segment_before(view, key), _segment_after(view, key)
        r0, r1 = self.rate(before), self.rate(after)
        dt0, dt1 = _span(view, before), _span(view, after)
        return min((r0 * dt1 + r1 * dt0) / (dt0 + dt1), 3.0 * min(r0, r1))

    def stalls(self, _key):
        return False


def _look_turn(camera, frame, scene, period):
    lane = camera["look_at"]
    if not lane["keyframes"]:
        return _look_toward(camera, lane["value"], frame, scene, period)
    view = _Lane(lane["keyframes"], period)
    k, u = _lane_segment(view, frame)
    if u is None:
        return _look_toward(camera, lane["keyframes"][k]["value"], frame, scene, period)
    kind = _LookKind(camera, view, scene, period)
    a, b = kind.turns(k, frame)
    qa, qb = _quaternion(a), _quaternion(b)
    if _qdot(qa, qb) < 0.0:
        qb = _qneg(qb)
    return _quaternion_turn(_slerp(qa, qb, _progress(view, k, u, kind)))


def _looking(camera):
    lane = camera.get("look_at")
    return lane is not None and (lane["value"] is not None or bool(lane["keyframes"]))


# Interpolation may leave a range by rounding; these bring values back into the range the state allows.
def _camera_lens(camera: dict, frame: float, period) -> dict:
    """The Camera's lens curve κ (0..1) and hFOV, held under the limit κ sets (`lens_fov_limit`, ADR 0042)."""
    curve = _curve(_evaluate_lane(camera, "curve", frame, period))
    return {"hFOV_deg": min(lens_fov_limit(curve), max(0.1, _evaluate_lane(camera, "fov", frame, period))), "curve": curve}


def _opacity(value):
    return min(1.0, max(0.0, value))


def _scale(value):
    return max(1e-6, value)


def _clip_frame(clip, frame):
    return frame - (clip["start"] - clip["in"])


def clip_active(clip, frame):
    """Whether the Timeline `frame` is inside the Clip range `clip` (docs/scene-state-v2.md "Clip range")."""
    end = None if clip["duration"] is None else clip["start"] + clip["duration"]
    return frame >= clip["start"] - FRAME_EPSILON and (end is None or frame < end - FRAME_EPSILON)


def _curve(value):
    return min(CURVE_MAX, max(CURVE_MIN, value))


def _sticker_values(sticker, frame, period):
    if sticker["placement"] == "world":
        values = {
            "position": _evaluate_lane(sticker, "position", frame, period),
            **_evaluate_lane(sticker, "rotation", frame, period),
            "scale": _scale(_evaluate_lane(sticker, "scale", frame, period)),
        }
        if "lens" in sticker:
            # Its lens curve and hFOV (ADR 0042), the hFOV held under the curve's limit as a Camera's is.
            lens = _evaluate_lane(sticker, "lens", frame, period)
            curve = _curve(lens["curve"])
            values["lens"] = {"curve": curve, "hFOV_deg": min(lens_fov_limit(curve), max(0.1, lens["hFOV_deg"]))}
        return values
    size = _evaluate_lane(sticker, "size", frame, period)
    curve = _curve(_evaluate_lane(sticker, "curve", frame, period))
    limit = lens_fov_limit(curve)
    return {
        **_evaluate_lane(sticker, "direction", frame, period),
        "roll_deg": _evaluate_lane(sticker, "roll", frame, period),
        "hFOV_deg": min(limit, max(0.1, size["hFOV_deg"])),
        "vFOV_deg": min(limit, max(0.1, size["vFOV_deg"])),
        "curve": curve,
    }


def _evaluate_camera(camera, frame, length, stickers, boxes):
    """The Camera at a fractional Timeline frame; with a Look at target its turn faces it (`stickers` and `boxes`
    give the target Stickers and their content boxes)."""
    period = owner_period(camera, length)
    return {
        "position": _evaluate_lane(camera, "position", frame, period),
        **(_look_turn(camera, frame, {"stickers": stickers, "boxes": boxes, "length": length}, period)
           if _looking(camera) else _evaluate_lane(camera, "rotation", frame, period)),
        **_camera_lens(camera, frame, period),
        "aspect": camera["aspect"],
    }


def _shot_lane(keys):
    """A sticker_state's Lane (its Keyframes, never empty once loaded) as a state's Lane."""
    return {"value": keys[0]["value"], "keyframes": keys}


def shot_camera(shot: dict, time: float) -> dict:
    """The Camera that shot what a sticker_state (`shot`, `load_sticker_state`) hands, at the sticker_state's frame
    `time`: its Lanes, Look at and targets evaluated by the same rules, the targets as World Stickers of their own
    Timeline (docs/scene-state-v2.md "受け渡しの置き方")."""
    camera = shot["camera"]
    owner = {"aspect": 1.0, "loop": camera["loop"], "look_at": camera["look_at"], **{name: _shot_lane(camera[name]) for name in ("position", "rotation", "fov", "curve")}}
    stickers = [{
        "id": target["id"],
        "placement": "world",
        "clip": {"start": 0, "in": 0, "duration": None},
        "loop": target["loop"],
        **{name: _shot_lane(target[name]) for name in ("position", "rotation", "scale")},
    } for target in shot["targets"]]
    boxes = {target["id"]: target["box"] for target in shot["targets"] if target["box"] is not None}
    return _evaluate_camera(owner, time, shot["length"], stickers, boxes)


def _handoff_values(sticker, own, period, shot, fps):
    """A port Sticker placed by the Camera that shot what `shot` hands, at its clip frame `own` (the media's time) on
    a Timeline of `fps`: that Camera's turn turned by the offset in its own axes, its hFOV times the offset factor,
    its lens curve. The vFOV is the hFOV, as a stored port Sticker's (its media's aspect gives the drawn one)."""
    taken = shot_camera(shot, own * shot["fps"] / fps)
    offset = _evaluate_lane(sticker, "offset_rotation", own, period)
    k = max(1e-6, _evaluate_lane(sticker, "offset_fov", own, period))
    turn = world_rotation(taken["yaw_deg"], taken["pitch_deg"], taken["roll_deg"]) @ world_rotation(offset["yaw_deg"], offset["pitch_deg"], offset["roll_deg"])
    yaw, pitch, roll = panorama_angles(turn)
    h_fov = min(lens_fov_limit(taken["curve"]), max(0.1, taken["hFOV_deg"] * k))
    return {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": roll, "hFOV_deg": h_fov, "vFOV_deg": h_fov, "curve": taken["curve"]}


def _handed_off(sticker, shot):
    """Whether `shot` places this Sticker: a sky port Sticker of a state handed a sticker_state."""
    return shot is not None and sticker["source"]["kind"] == "port" and sticker["placement"] == "sky"


def evaluate_scene_state(state: dict, frame: float, length: float | None = None, boxes: dict | None = None, shot: dict | None = None) -> dict:
    """Evaluate a state returned by `load_scene_state` at a fractional Timeline frame; `length` is the output length,
    the loop period of looping owners, `boxes` the content boxes of the Stickers by id, which the Camera's Look at
    target point reads, and `shot` the sticker_state handed to its port Sticker, which places it
    (docs/scene-state-v2.md "評価関数")."""
    frame = float(frame)
    camera = state.get("camera")
    scene = state["scene"]
    fps = state["timeline"]["fps"]
    stickers = []
    for sticker in state["stickers"]:
        clip = sticker["clip"]
        clip_frame = _clip_frame(clip, frame)
        period = owner_period(sticker, length)
        stickers.append({
            "id": sticker["id"],
            "placement": sticker["placement"],
            "active": sticker["visible"] and clip_active(clip, frame),
            "clip_frame": clip_frame,
            **(_handoff_values(sticker, clip_frame, period, shot, fps) if _handed_off(sticker, shot) else _sticker_values(sticker, clip_frame, period)),
            "opacity": _opacity(_evaluate_lane(sticker, "opacity", clip_frame, period)),
        })
    scene_clip_frame = _clip_frame(scene["clip"], frame)
    return {
        "frame": frame,
        "camera": None if camera is None else _evaluate_camera(camera, frame, length, state["stickers"], boxes),
        "scene": {
            "active": scene["visible"] and clip_active(scene["clip"], frame),
            "clip_frame": scene_clip_frame,
            "position": _evaluate_lane(scene, "position", scene_clip_frame),
            **_evaluate_lane(scene, "rotation", scene_clip_frame),
            "scale": _scale(_evaluate_lane(scene, "scale", scene_clip_frame)),
        },
        "stickers": stickers,
    }
