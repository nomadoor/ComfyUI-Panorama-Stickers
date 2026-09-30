"""State v2 evaluation: normalized state and a Timeline frame -> values at that time.

The contract is documented in docs/scene-state-v2.md. web_src/pano_scene_eval.js
must return the same values within 1e-4.
"""

import math
from bisect import bisect_right

from .world import panorama_angles, quaternion_to_rotation, rotation_to_quaternion, world_rotation


def _copy_value(value):
    if isinstance(value, dict):
        return {key: list(item) if isinstance(item, list) else item for key, item in value.items()}
    return value


# Fractional frames within this distance of a Keyframe or Clip range edge count as that frame, so a Cut
# lands on the output frame whose time (seconds x fps) misses the Keyframe only by float rounding.
FRAME_EPSILON = 1e-6


ROTATION_FIELDS = ("yaw_deg", "pitch_deg", "roll_deg")
# Interpolation may overshoot a key; these fields are brought back into the range the state allows.
FIELD_RANGES = {"hFOV_deg": (0.1, 179.0), "vFOV_deg": (0.1, 179.0), "scale": (1e-6, math.inf)}
# Quaternion dot products within this of zero are exact half turns, whose direction a fixed rule picks.
HALF_TURN_EPSILON = 1e-6


def _bezier(p0, p1, p2, p3, t):
    s = 1.0 - t
    return s * s * s * p0 + 3.0 * s * s * t * p1 + 3.0 * s * t * t * p2 + t * t * t * p3


def _ease(easing, u):
    """Segment progress for the segment time u in [0, 1], like CSS cubic-bezier."""
    if easing == "auto":
        return u
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


def _smooth(keyframes, i):
    """Whether the auto spline passes through key i, so both of its segments share one velocity."""
    return 0 < i < len(keyframes) - 1 and keyframes[i - 1]["easing"] == "auto" and keyframes[i]["easing"] == "auto"


def _tangent(frames, i, back, ahead):
    """Velocity per frame at key i from the offsets to its neighbours (tuples of equal length).

    The slope of the parabola through the three keys, limited like Fritsch-Carlson: zero when the
    two sides turn back (negative dot product), and at most three times the slower side's slope, which
    is zero when a side does not move. A vector turning a right angle or less keeps moving.
    """
    dt0 = frames[i] - frames[i - 1]
    dt1 = frames[i + 1] - frames[i]
    s0 = [-c / dt0 for c in back]
    s1 = [c / dt1 for c in ahead]
    if sum(a * b for a, b in zip(s0, s1)) < 0.0:
        return [0.0] * len(back)
    m = [(a * dt1 + b * dt0) / (dt0 + dt1) for a, b in zip(s0, s1)]
    limit = 3.0 * min(math.sqrt(sum(c * c for c in s0)), math.sqrt(sum(c * c for c in s1)))
    norm = math.sqrt(sum(c * c for c in m))
    return m if norm <= limit else [c * limit / norm for c in m]


def _control_offsets(keyframes, frames, values, k):
    """Bezier control offsets out of key k and into key k + 1; values holds one tuple per key.

    Where the auto spline passes through a key, the offset is its velocity x dt / 3, so both
    segments meet with the same velocity. Elsewhere it is a third of the segment's own change.
    """
    v0, v1 = values[k], values[k + 1]
    dt = frames[k + 1] - frames[k]
    chord = [b - a for a, b in zip(v0, v1)]
    start = chord
    if _smooth(keyframes, k):
        start = [c * dt for c in _tangent(frames, k, [a - b for a, b in zip(values[k - 1], v0)], chord)]
    end = chord
    if _smooth(keyframes, k + 1):
        end = [c * dt for c in _tangent(frames, k + 1, [-c for c in chord], [a - b for a, b in zip(values[k + 2], v1)])]
    return [c / 3.0 for c in start], [-c / 3.0 for c in end]


def _scalar(keyframes, frames, values, k, p):
    (out_offset,), (in_offset,) = _control_offsets(keyframes, frames, [(v,) for v in values], k)
    return _bezier(values[k], values[k] + out_offset, values[k + 1] + in_offset, values[k + 1], p)


def _position(keyframes, frames, k, p):
    """Position as one vector, so the automatic path does not depend on the World axes; handles replace its offsets."""
    positions = [key["value"]["position"] for key in keyframes]
    out_offset, in_offset = _control_offsets(keyframes, frames, positions, k)
    out_offset = keyframes[k].get("handles", {}).get("out", out_offset)
    in_offset = keyframes[k + 1].get("handles", {}).get("in", in_offset)
    p0, p1 = positions[k], positions[k + 1]
    return [_bezier(p0[axis], p0[axis] + out_offset[axis], p1[axis] + in_offset[axis], p1[axis], p) for axis in range(3)]


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
    norm = math.sqrt(x * x + y * y + z * z)
    scale = math.atan2(norm, w) / norm if norm > 1e-12 else 1.0
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


def _unwrap_near_blend(angle, a, b, p):
    """The turn of `angle` nearest to the stored angles a -> b blended by progress; a tie takes the lower one."""
    blend = a + (b - a) * p
    return angle + 360.0 * math.ceil((blend - 180.0 - 1e-6 - angle) / 360.0)


def _rotation(keyframes, frames, k, p):
    """SQUAD with time-aware tangents. Where the spline stops, the tangent is the segment's own, so it is a slerp."""
    q0 = _quaternion(keyframes[k]["value"])
    q1 = _quaternion(keyframes[k + 1]["value"])
    if _shortest(q0, q1):
        q1 = _qneg(q1)
    dt = frames[k + 1] - frames[k]
    chord = _qdelta(q0, q1)
    start = chord
    if _smooth(keyframes, k):
        prev = _quaternion(keyframes[k - 1]["value"])
        if _shortest(prev, q0):
            prev = _qneg(prev)
        start = tuple(c * dt for c in _tangent(frames, k, _qdelta(q0, prev), chord))
    end = chord
    if _smooth(keyframes, k + 1):
        nxt = _quaternion(keyframes[k + 2]["value"])
        if _shortest(q1, nxt):
            nxt = _qneg(nxt)
        end = tuple(c * dt for c in _tangent(frames, k + 1, _qdelta(q1, q0), _qdelta(q1, nxt)))
    a = _qmul(q0, _qexp(tuple(0.5 * (s - c) for s, c in zip(start, chord))))
    b = _qmul(q1, _qexp(tuple(0.5 * (c - e) for c, e in zip(chord, end))))
    q = _slerp(_slerp(q0, q1, p), _slerp(a, b, p), 2.0 * p * (1.0 - p))
    yaw, pitch, roll = panorama_angles(quaternion_to_rotation([q[0], q[1], q[2], q[3]]))
    # Output yaw and roll follow the stored numbers, so they do not wrap mid-segment and meet each key's own number at its ends.
    left, right = keyframes[k]["value"], keyframes[k + 1]["value"]
    return {
        "yaw_deg": _unwrap_near_blend(yaw, left["yaw_deg"], right["yaw_deg"], p),
        "pitch_deg": pitch,
        "roll_deg": _unwrap_near_blend(roll, left["roll_deg"], right["roll_deg"], p),
    }


def _interpolate(keyframes, k, frame):
    frames = [key["frame"] for key in keyframes]
    p = _ease(keyframes[k]["easing"], (frame - frames[k]) / (frames[k + 1] - frames[k]))
    value = keyframes[k]["value"]
    if not isinstance(value, dict):
        return _scalar(keyframes, frames, [key["value"] for key in keyframes], k, p)
    rotation = _rotation(keyframes, frames, k, p) if "yaw_deg" in value else {}
    out = {}
    for field in value:
        if field == "position":
            out[field] = _position(keyframes, frames, k, p)
        elif field in ROTATION_FIELDS:
            out[field] = rotation[field]
        else:
            out[field] = _scalar(keyframes, frames, [key["value"][field] for key in keyframes], k, p)
            if field in FIELD_RANGES:
                lo, hi = FIELD_RANGES[field]
                out[field] = min(hi, max(lo, out[field]))
    return out


def _evaluate_group(group, frame):
    keyframes = group["keyframes"]
    if not keyframes:
        return _copy_value(group["value"])
    if frame <= keyframes[0]["frame"] + FRAME_EPSILON:
        return _copy_value(keyframes[0]["value"])
    if frame >= keyframes[-1]["frame"] - FRAME_EPSILON:
        return _copy_value(keyframes[-1]["value"])
    k = bisect_right([key["frame"] for key in keyframes], frame + FRAME_EPSILON) - 1
    left = keyframes[k]
    if abs(frame - left["frame"]) <= FRAME_EPSILON or left["easing"] == "hold":
        return _copy_value(left["value"])
    return _interpolate(keyframes, k, frame)


def _clip_frame(clip, frame):
    return frame - (clip["start"] - clip["in"])


def _clip_active(clip, frame):
    end = None if clip["duration"] is None else clip["start"] + clip["duration"]
    return frame >= clip["start"] - FRAME_EPSILON and (end is None or frame < end - FRAME_EPSILON)


def evaluate_scene_state(state: dict, frame: float) -> dict:
    """Evaluate a state returned by `load_scene_state` at a fractional Timeline frame."""
    frame = float(frame)
    camera = state["camera"]
    scene = state["scene"]
    stickers = []
    for sticker in state["stickers"]:
        clip = sticker["clip"]
        clip_frame = _clip_frame(clip, frame)
        stickers.append({
            "id": sticker["id"],
            "placement": sticker["placement"],
            "active": sticker["visible"] and _clip_active(clip, frame),
            "clip_frame": clip_frame,
            **_evaluate_group(sticker["transform"], clip_frame),
            "opacity": min(1.0, max(0.0, _evaluate_group(sticker["opacity"], clip_frame))),
        })
    scene_clip_frame = _clip_frame(scene["clip"], frame)
    return {
        "frame": frame,
        "camera": {**_evaluate_group(camera["transform"], frame), "aspect": camera["aspect"]},
        "scene": {
            "active": _clip_active(scene["clip"], frame),
            "clip_frame": scene_clip_frame,
            **_evaluate_group(scene["transform"], scene_clip_frame),
        },
        "stickers": stickers,
    }
