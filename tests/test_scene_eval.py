import json
import math

import numpy as np
import pytest

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state, shot_camera
from comfyui_pano_suite.core.scene_state import load_scene_state, load_sticker_state, rebase_scene_state
from comfyui_pano_suite.core.world import world_rotation


LANE_FIELDS = {"position": "position", "rotation": ("yaw_deg", "pitch_deg", "roll_deg"), "fov": "hFOV_deg", "scale": "scale"}


def split_lanes(keyframes, names):
    """Keys holding a whole pose, as the Lanes `names`; a key sets each Lane whose fields it has."""
    lanes = {name: {"keyframes": []} for name in names}
    for key in keyframes:
        rest = {field: item for field, item in key.items() if field not in ("value", "handles")}
        for name in names:
            fields = LANE_FIELDS[name]
            if isinstance(fields, tuple):
                if any(field in key["value"] for field in fields):
                    lanes[name]["keyframes"].append({**rest, "value": {field: key["value"][field] for field in fields if field in key["value"]}})
            elif fields in key["value"]:
                handles = {"handles": key["handles"]} if name == "position" and "handles" in key else {}
                lanes[name]["keyframes"].append({**rest, "value": key["value"][fields], **handles})
    return lanes


def camera_state(keyframes, fps=24.0):
    return load_scene_state({"version": 2, "timeline": {"fps": fps}, "camera": split_lanes(keyframes, ("position", "rotation", "fov"))})


def camera_at(state, frame):
    return evaluate_scene_state(state, frame)["camera"]


def rotation_at(state, frame):
    camera = camera_at(state, frame)
    return world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"])


def angle_between(a, b):
    return math.acos(max(-1.0, min(1.0, (np.trace(a.T @ b) - 1.0) * 0.5)))


def angular_velocity(state, t0, t1):
    """World angular velocity (rad / frame) between two times."""
    relative = rotation_at(state, t1) @ rotation_at(state, t0).T
    skew = 0.5 * (relative - relative.T)
    return np.array([skew[2, 1], skew[0, 2], skew[1, 0]]) / (t1 - t0)


def with_easing(keys, easing):
    return [{**key, "easing": easing} for key in keys]


# Non-uniform key spacing: a fast short segment followed by a slow long one.
SPLINE_KEYS = with_easing([
    {"frame": 0, "value": {"position": [0, 0, 0], "yaw_deg": 0, "pitch_deg": 0, "roll_deg": 0, "hFOV_deg": 60}},
    {"frame": 8, "value": {"position": [2, 1, -1], "yaw_deg": 40, "pitch_deg": 20, "roll_deg": 5, "hFOV_deg": 90}},
    {"frame": 40, "value": {"position": [3, 0, -6], "yaw_deg": 120, "pitch_deg": -10, "roll_deg": 0, "hFOV_deg": 70}},
    {"frame": 50, "value": {"position": [1, 2, -7], "yaw_deg": 150, "pitch_deg": 30, "roll_deg": -20, "hFOV_deg": 40}},
], "auto")


@pytest.mark.parametrize("frame", [8, 40])
def test_auto_passes_through_keys_with_continuous_velocity(frame):
    state = camera_state(SPLINE_KEYS)
    h = 1e-3
    before, at, after = (camera_at(state, frame + d) for d in (-h, 0.0, h))
    left = (at["hFOV_deg"] - before["hFOV_deg"]) / h
    right = (after["hFOV_deg"] - at["hFOV_deg"]) / h
    assert left == pytest.approx(right, abs=1e-2)
    for axis in range(3):
        left = (at["position"][axis] - before["position"][axis]) / h
        right = (after["position"][axis] - at["position"][axis]) / h
        assert left == pytest.approx(right, abs=1e-3)
    h = 1e-2
    left = angular_velocity(state, frame - h, frame)
    right = angular_velocity(state, frame, frame + h)
    assert np.linalg.norm(left) > 5e-3
    assert np.linalg.norm(left - right) < 5e-4


def test_linear_timing_has_a_velocity_jump_that_the_test_above_would_catch():
    state = camera_state(with_easing(SPLINE_KEYS, [1 / 3, 1 / 3, 2 / 3, 2 / 3]))
    h = 1e-2
    assert np.linalg.norm(angular_velocity(state, 8 - h, 8) - angular_velocity(state, 8, 8 + h)) > 1e-2


def test_hold_jumps_at_the_next_key_and_breaks_the_spline():
    keys = with_easing(SPLINE_KEYS, "auto")
    keys[1] = {**keys[1], "easing": "hold"}
    state = camera_state(keys)
    assert camera_at(state, 8 + 1e-6)["hFOV_deg"] == 90.0
    assert camera_at(state, 40 - 1e-3)["hFOV_deg"] == 90.0
    assert camera_at(state, 40)["hFOV_deg"] == 70.0
    moved = [dict(key) for key in keys]
    moved[1] = {**moved[1], "value": {**moved[1]["value"], "hFOV_deg": 10, "yaw_deg": -90, "position": [9, 9, 9]}}
    moved_state = camera_state(moved)
    # Segments after the hold do not see the key before it.
    for frame in (41.0, 45.5, 49.0):
        assert camera_at(moved_state, frame) == camera_at(state, frame)


@pytest.mark.parametrize("frames", [(0, 3, 60, 70), (0, 30, 33, 90)])
def test_rotation_velocity_is_continuous_with_very_uneven_spacing(frames):
    values = [(0, 0, 0), (20, 5, 0), (100, 20, 10), (110, 25, 10)]
    state = camera_state([
        {"frame": frame, "value": {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": roll}, "easing": "auto"}
        for frame, (yaw, pitch, roll) in zip(frames, values)
    ])
    h = 1e-5
    for frame in frames[1:3]:
        left = angular_velocity(state, frame - h, frame)
        right = angular_velocity(state, frame, frame + h)
        assert np.linalg.norm(left) > 1e-3
        # Progress is read along the measured length (65 samples), so a segment whose shape bunches up near a key
        # (here 3 frames between 30 and 57 frame segments) keeps the speed only to a few percent there
        # (docs/scene-state-v2.md "長さと τ").
        assert np.linalg.norm(left - right) < 5e-2 * np.linalg.norm(left) + 1e-6


def test_fast_move_then_stop_does_not_overshoot():
    state = camera_state(with_easing([
        {"frame": 0, "value": {"position": [0, 0, 0], "yaw_deg": 0, "hFOV_deg": 90}},
        {"frame": 2, "value": {"position": [5, 1, 0], "yaw_deg": 90, "hFOV_deg": 60}},
        {"frame": 102, "value": {"position": [5, 1, 0], "yaw_deg": 90, "hFOV_deg": 60}},
    ], "auto"))
    for frame in np.arange(0.0, 102.0, 0.25):
        camera = camera_at(state, frame)
        assert 60.0 - 1e-9 <= camera["hFOV_deg"] <= 90.0 + 1e-9
        assert -1e-9 <= camera["position"][0] <= 5.0 + 1e-9
        assert -1e-9 <= camera["position"][1] <= 1.0 + 1e-9
        assert -1e-6 <= camera["yaw_deg"] <= 90.0 + 1e-6
        assert camera["pitch_deg"] == pytest.approx(0.0, abs=1e-6)


def test_scale_does_not_pass_the_smaller_key():
    state = load_scene_state({"version": 2, "scene": {"scale": {"keyframes": [
        {"frame": 0, "value": 1.0, "easing": "auto"},
        {"frame": 1, "value": 0.01, "easing": "auto"},
        {"frame": 100, "value": 0.01, "easing": "auto"},
    ]}}})
    scales = [evaluate_scene_state(state, frame)["scene"]["scale"] for frame in np.arange(0.0, 100.0, 0.25)]
    assert min(scales) >= 0.01 - 1e-12


@pytest.mark.parametrize("start, end, field, expected", [
    # Exact half turns: right, then up, then clockwise.
    ({"yaw_deg": 0}, {"yaw_deg": 180}, "yaw_deg", 90.0),
    ({"yaw_deg": 0}, {"yaw_deg": 180, "roll_deg": 180}, "pitch_deg", 90.0),
    ({"roll_deg": 0}, {"roll_deg": 180}, "roll_deg", 90.0),
])
def test_exact_half_turns_take_a_fixed_direction(start, end, field, expected):
    state = camera_state([{"frame": 0, "value": start, "easing": "auto"}, {"frame": 20, "value": end}])
    assert camera_at(state, 10)[field] == pytest.approx(expected, abs=1e-6)


def test_half_turn_through_the_view_axis_is_deterministic():
    state = camera_state([
        {"frame": 0, "value": {"yaw_deg": 45, "pitch_deg": 30}},
        {"frame": 20, "value": {"yaw_deg": -135, "pitch_deg": -30, "roll_deg": 180}},
    ])
    rotations = [rotation_at(state, frame) for frame in np.arange(0.0, 20.01, 0.05)]
    assert max(angle_between(a, b) for a, b in zip(rotations, rotations[1:])) < math.radians(1.0)
    assert angle_between(rotations[0], rotations[-1]) == pytest.approx(math.pi, abs=1e-6)


def test_yaw_tie_between_stored_numbers_and_shortest_turn_takes_the_lower_value():
    # The shortest turn from 0 to 350 is -10 degrees; halfway the blend of the numbers (175) is exactly
    # 180 degrees from the true yaw (-5), and the tie takes the lower value.
    state = camera_state([{"frame": 0, "value": {"yaw_deg": 0}, "easing": [0.0, 0.0, 1.0, 1.0]}, {"frame": 20, "value": {"yaw_deg": 350}}])
    assert camera_at(state, 10)["yaw_deg"] == pytest.approx(-5.0, abs=1e-9)
    assert camera_at(state, 19)["yaw_deg"] == pytest.approx(350.5, abs=1e-9)


def css_cubic_bezier(x1, y1, x2, y2, u):
    t = np.linspace(0.0, 1.0, 200001)
    x = 3 * (1 - t) ** 2 * t * x1 + 3 * (1 - t) * t ** 2 * x2 + t ** 3
    y = 3 * (1 - t) ** 2 * t * y1 + 3 * (1 - t) * t ** 2 * y2 + t ** 3
    return float(np.interp(u, x, y))


@pytest.mark.parametrize("curve", [[0.42, 0.0, 0.58, 1.0], [0.0, 0.0, 1.0, 1.0], [0.9, 0.0, 0.1, 1.0], [1.0, 0.0, 1.0, 0.0]])
def test_cubic_bezier_distributes_time_like_css(curve):
    state = camera_state([
        {"frame": 0, "value": {"yaw_deg": 0, "hFOV_deg": 40}, "easing": curve},
        {"frame": 20, "value": {"yaw_deg": 60, "hFOV_deg": 80}},
    ])
    for u in (0.1, 0.25, 0.5, 0.8, 0.95):
        progress = css_cubic_bezier(*curve, u)
        camera = camera_at(state, 20 * u)
        assert camera["hFOV_deg"] == pytest.approx(40 + 40 * progress, abs=1e-4)
        # Slerp about the vertical axis: the yaw follows the eased progress.
        assert camera["yaw_deg"] == pytest.approx(60 * progress, abs=1e-3)
        assert camera["pitch_deg"] == pytest.approx(0.0, abs=1e-4)


def bezier_point(p0, c1, c2, p1, t):
    p0, c1, c2, p1 = (np.asarray(v, dtype=np.float64) for v in (p0, c1, c2, p1))
    return (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * c1 + 3 * (1 - t) * t ** 2 * c2 + t ** 3 * p1


def test_position_path_is_smooth_without_handles_and_follows_handles():
    keys = [
        {"frame": 0, "value": {"position": [0, 0, 0]}, "easing": [0.0, 0.0, 1.0, 1.0]},
        {"frame": 10, "value": {"position": [4, 0, 0]}},
    ]
    state = camera_state(keys)
    assert camera_at(state, 2.5)["position"] == pytest.approx([1.0, 0.0, 0.0])
    keys[0]["handles"] = {"out": [0, 3, 0]}
    keys[1]["handles"] = {"in": [0, 0, 2]}
    state = camera_state(keys)
    # Handles shape the path; Linear runs along it at an even speed (docs/scene-state-v2.md "長さと τ").
    curve = [bezier_point([0, 0, 0], [0, 3, 0], [4, 0, 2], [4, 0, 0], t) for t in np.linspace(0.0, 1.0, 4001)]
    points = [np.array(camera_at(state, frame)["position"]) for frame in np.arange(0.0, 10.01, 0.5)]
    for point in points:
        assert min(np.linalg.norm(point - c) for c in curve) < 2e-3
    steps = [np.linalg.norm(b - a) for a, b in zip(points, points[1:])]
    assert max(steps) == pytest.approx(min(steps), rel=2e-2)
    # A handle on one side of a passing key turns the automatic side to its opposite, so the path does not fold.
    three = camera_state([
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}, "handles": {"out": [0, 1, 0]}},
        {"frame": 20, "value": {"position": [4, 4, 0]}},
    ])
    before = np.array(camera_at(three, 10)["position"]) - np.array(camera_at(three, 10 - 1e-4)["position"])
    after = np.array(camera_at(three, 10 + 1e-4)["position"]) - np.array(camera_at(three, 10)["position"])
    assert before / np.linalg.norm(before) == pytest.approx([0.0, 1.0, 0.0], abs=1e-3)
    assert after / np.linalg.norm(after) == pytest.approx([0.0, 1.0, 0.0], abs=1e-3)
    # Without handles the path curves through a right-angle key along the bisector, at the shared speed of the two
    # Smooth segments: three keys on a circle of radius 2√2, so each segment is a quarter of it.
    smooth = camera_state([
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}},
        {"frame": 20, "value": {"position": [4, 4, 0]}},
    ])
    velocity = (np.array(camera_at(smooth, 10 + 1e-4)["position"]) - np.array(camera_at(smooth, 10 - 1e-4)["position"])) / 2e-4
    speed = 2 * math.sqrt(2) * math.pi / 2 / 10
    assert velocity == pytest.approx([speed / math.sqrt(2), speed / math.sqrt(2), 0.0], rel=1e-3)
    # The shape does not depend on the key times.
    slow = camera_state([
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}},
        {"frame": 110, "value": {"position": [4, 4, 0]}},
    ])
    path = [np.array(camera_at(smooth, frame)["position"]) for frame in np.arange(10.0, 20.0, 0.002)]
    for frame in (30.0, 60.0, 90.0):
        point = np.array(camera_at(slow, frame)["position"])
        assert min(np.linalg.norm(point - q) for q in path) < 1e-3


def test_position_stops_only_where_it_turns_back():
    state = camera_state(with_easing([
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}},
        {"frame": 20, "value": {"position": [0, 0, 0]}},
    ], "auto"))
    velocity = (np.array(camera_at(state, 10 + 1e-4)["position"]) - np.array(camera_at(state, 10 - 1e-4)["position"])) / 2e-4
    assert velocity == pytest.approx([0.0, 0.0, 0.0], abs=1e-6)


def test_looking_up_then_panning_keeps_turning_through_the_key():
    state = camera_state(with_easing([
        {"frame": 0, "value": {"pitch_deg": -30}},
        {"frame": 3, "value": {"pitch_deg": 0}},
        {"frame": 30, "value": {"yaw_deg": 150}},
    ], "auto"))
    h = 1e-5
    left = angular_velocity(state, 3 - h, 3)
    right = angular_velocity(state, 3, 3 + h)
    assert np.linalg.norm(left) > 1e-2
    assert np.linalg.norm(left - right) < 1e-3 * np.linalg.norm(left)


@pytest.mark.parametrize("easing", ["auto", [0.42, 0.0, 0.58, 1.0]])
@pytest.mark.parametrize("keys", [
    # Over the zenith: pitch 80 -> 90 -> 80 facing back, which is yaw 180 with roll 180.
    [(0, 80, 0, 0), (20, 80, 180, 180)],
    [(0, -85, -90, 0), (20, -85, 90, 180)],
    [(0, -85, -90, 0), (20, -60, 80, 10)],
    [(0, 60, 0, 0), (10, 89, 170, 0), (20, 70, -120, 30), (30, -89.5, 10, 0), (40, -60, 180, 0)],
])
def test_rotation_has_no_jump_across_zenith_and_nadir(easing, keys):
    state = camera_state([
        {"frame": frame, "value": {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": roll}, "easing": easing}
        for frame, pitch, yaw, roll in keys
    ])
    frames = np.arange(-1.0, keys[-1][0] + 1.0, 0.01)
    rotations = [rotation_at(state, frame) for frame in frames]
    steps = [angle_between(a, b) for a, b in zip(rotations, rotations[1:])]
    # These paths turn less than 50 degrees per frame even at the eased peak, so 0.01 frame turns less
    # than 0.5 degrees; a flip of yaw or roll near a pole would turn tens of degrees in one step.
    assert max(steps) < math.radians(0.5)


def test_two_keys_over_the_zenith_take_the_short_way():
    state = camera_state([
        {"frame": 0, "value": {"yaw_deg": 0, "pitch_deg": 80}, "easing": "auto"},
        {"frame": 20, "value": {"yaw_deg": 180, "pitch_deg": 80, "roll_deg": 180}},
    ])
    assert camera_at(state, 10)["pitch_deg"] == pytest.approx(90.0, abs=1e-3)
    assert angle_between(rotation_at(state, 0), rotation_at(state, 20)) == pytest.approx(math.radians(20), abs=1e-5)


def sticker_state(clip, keyframes):
    lanes = split_lanes(keyframes, ("position", "rotation", "scale"))
    return load_scene_state({
        "version": 2,
        "scene": {"clip": clip, **lanes},
        "stickers": [{
            "placement": "world",
            "source": {"kind": "port"},
            "clip": clip,
            **lanes,
            "opacity": {"keyframes": [{"frame": 0, "value": 0.2}, {"frame": 30, "value": 1.0}]},
        }],
    })


CONTENT_KEYS = with_easing([
    {"frame": 0, "value": {"position": [0, 0, 0], "yaw_deg": 0, "scale": 1}},
    {"frame": 12, "value": {"position": [1, 2, 0], "yaw_deg": 30, "scale": 2}},
    {"frame": 30, "value": {"position": [3, 2, -1], "yaw_deg": 10, "scale": 1}},
], "auto")


def content(out):
    sticker = dict(out["stickers"][0])
    scene = dict(out["scene"])
    return sticker.pop("active"), scene.pop("active"), sticker, scene


def test_moving_or_trimming_a_clip_keeps_keyframes_on_the_content():
    base = sticker_state({"start": 10, "in": 0, "duration": 40}, CONTENT_KEYS)
    moved = sticker_state({"start": 25, "in": 0, "duration": 40}, CONTENT_KEYS)
    trimmed = sticker_state({"start": 16, "in": 6, "duration": 34}, CONTENT_KEYS)
    for frame in (16.0, 19.5, 27.25, 40.0, 49.0):
        expected = content(evaluate_scene_state(base, frame))[2:]
        assert content(evaluate_scene_state(moved, frame + 15))[2:] == expected
        assert content(evaluate_scene_state(trimmed, frame)) == content(evaluate_scene_state(base, frame))
    assert content(evaluate_scene_state(trimmed, 12.0))[:2] == (False, False)


def lanes_of(owner):
    return [value for value in owner.values() if isinstance(value, dict) and "keyframes" in value]


def timeline_events(state):
    """Every stored time as a Timeline frame: Keyframes (content Keyframes shifted by start - in) and clip edges."""
    events = [key["frame"] for lane in lanes_of(state["camera"]) for key in lane["keyframes"]]
    for owner in [state["scene"], *state["stickers"]]:
        clip = owner["clip"]
        anchor = clip["start"] - clip["in"]
        events += [clip["start"], anchor] + ([] if clip["duration"] is None else [clip["start"] + clip["duration"]])
        events += [anchor + key["frame"] for lane in lanes_of(owner) for key in lane["keyframes"]]
    return events + [state["timeline"]["length"]]


@pytest.mark.parametrize("fps", [30000 / 1001, 25.0, 60.0, 12.0])
def test_rebase_rounds_every_timeline_event_within_half_a_frame(fps):
    state = load_scene_state({
        "version": 2,
        "timeline": {"fps": 24.0, "length": 241},
        "camera": {"rotation": {"keyframes": [{"frame": f, "value": {"yaw_deg": f}} for f in (0, 7, 13, 50, 101, 239)]}, "fov": {"keyframes": [{"frame": 33, "value": 60}]}},
        "scene": {"clip": {"start": 3, "in": 17, "duration": 55}, "position": {"keyframes": [{"frame": 5, "value": None}, {"frame": 9, "value": None}]}},
        "stickers": [
            {"source": {"kind": "port"}, "clip": {"start": 11, "in": 1, "duration": 29}, "opacity": {"keyframes": [{"frame": 2, "value": 0.5}, {"frame": 19, "value": 1.0}]}},
            {"source": {"kind": "file", "filename": "a.png"}, "clip": {"start": 7, "in": 3}, "direction": {"keyframes": [{"frame": 4, "value": None}]}, "roll": {"keyframes": [{"frame": 6, "value": 3}]}, "size": {"keyframes": [{"frame": 8, "value": None}]}},
            {"placement": "world", "source": {"kind": "file", "filename": "b.png"}, "clip": {"start": 5, "in": 0}, "rotation": {"keyframes": [{"frame": 13, "value": None}]}, "scale": {"keyframes": [{"frame": 17, "value": 2}]}},
        ],
    })
    rebased = rebase_scene_state(state, fps)
    assert rebased["timeline"]["fps"] == fps
    ratio = fps / 24.0
    for old, new in zip(timeline_events(state), timeline_events(rebased)):
        assert type(new) is int
        assert new == math.floor(old * ratio + 0.5)
        assert abs(new / fps - old / 24.0) <= 0.5 / fps + 1e-12
    assert load_scene_state(rebased) == rebased
    assert rebase_scene_state(state, 24.0) == state


def test_rebase_keeps_camera_and_sticker_keys_at_one_time_on_one_frame():
    # Timeline frame 40 is 49.95 at 29.97 fps. Rounding the sticker's anchor (10 -> 12.49) and its
    # Keyframe (30 -> 37.46) separately would land on 12 + 37 = 49, a frame before the camera's 50.
    state = load_scene_state({
        "version": 2,
        "timeline": {"fps": 24.0},
        "camera": {"rotation": {"keyframes": [{"frame": 40, "value": {}}]}},
        "stickers": [{"source": {"kind": "port"}, "clip": {"start": 11, "in": 1}, "opacity": {"keyframes": [{"frame": 30, "value": 0.5}]}}],
    })
    rebased = rebase_scene_state(state, 30000 / 1001)
    sticker = rebased["stickers"][0]
    camera_frame = rebased["camera"]["rotation"]["keyframes"][0]["frame"]
    sticker_frame = sticker["clip"]["start"] - sticker["clip"]["in"] + sticker["opacity"]["keyframes"][0]["frame"]
    assert camera_frame == sticker_frame == 50
    assert sticker["clip"] == {"start": 14, "in": 2, "duration": None}


def test_rebase_to_a_lower_fps_keeps_the_later_of_colliding_keys():
    state = camera_state([{"frame": 0, "value": {"yaw_deg": 0}}, {"frame": 1, "value": {"yaw_deg": 5}}, {"frame": 2, "value": {"yaw_deg": 9}}], fps=24.0)
    state["timeline"]["length"] = 1
    rebased = rebase_scene_state(state, 8.0)
    assert [(key["frame"], key["value"]["yaw_deg"]) for key in rebased["camera"]["rotation"]["keyframes"]] == [(0, 5.0), (1, 9.0)]
    assert rebased["timeline"]["length"] == 1


@pytest.mark.parametrize("fps", [0, -24.0, math.nan, True])
def test_rebase_rejects_a_non_positive_fps(fps):
    with pytest.raises(ValueError, match="fps"):
        rebase_scene_state(load_scene_state(None), fps)


def sky_state(**lanes):
    return load_scene_state({"version": 2, "stickers": [{"source": {"kind": "port"}, **{name: {"keyframes": keys} for name, keys in lanes.items()}}]})


def sky_at(state, frame):
    return evaluate_scene_state(state, frame)["stickers"][0]


def direction_vector(value):
    yaw, pitch = math.radians(value["yaw_deg"]), math.radians(value["pitch_deg"])
    return np.array([math.cos(pitch) * math.sin(yaw), math.sin(pitch), math.cos(pitch) * math.cos(yaw)])


def direction_keys(*keys, easing="auto"):
    return [{"frame": frame, "value": {"yaw_deg": yaw, "pitch_deg": pitch}, "easing": easing} for frame, yaw, pitch in keys]


@pytest.mark.parametrize("curve", ["smooth", [0.0, 0.0, 1.0, 1.0], [0.42, 0.0, 0.58, 1.0], [0.9, 0.0, 0.1, 1.0]])
def test_direction_follows_the_great_circle_with_the_eased_progress(curve):
    state = sky_state(direction=direction_keys((0, -40, 10), (20, 70, 50), easing=curve))
    a, b = direction_vector({"yaw_deg": -40, "pitch_deg": 10}), direction_vector({"yaw_deg": 70, "pitch_deg": 50})
    normal = np.cross(a, b) / np.linalg.norm(np.cross(a, b))
    total = math.acos(a @ b)
    for u in (0.1, 0.3, 0.5, 0.85):
        d = direction_vector(sky_at(state, 20 * u))
        # Two Smooth keys stop at both ends, so they move as ease-in-out.
        progress = css_cubic_bezier(*([0.42, 0.0, 0.58, 1.0] if curve == "smooth" else curve), u)
        assert d @ normal == pytest.approx(0.0, abs=1e-9)
        assert math.acos(min(1.0, d @ a)) == pytest.approx(total * progress, abs=1e-4)


def test_exactly_opposite_directions_turn_right_from_the_earlier_key():
    state = sky_state(direction=direction_keys((0, 30, 0), (20, 210, 0)))
    assert sky_at(state, 10)["yaw_deg"] == pytest.approx(120.0, abs=1e-6)
    assert sky_at(state, 10)["pitch_deg"] == pytest.approx(0.0, abs=1e-6)
    # From a pole the stored yaw gives the way: right of yaw 90 is yaw 180 on the horizon.
    poles = sky_state(direction=direction_keys((0, 90, -90), (20, 0, 90)))
    mid = sky_at(poles, 10)
    assert mid["pitch_deg"] == pytest.approx(0.0, abs=1e-6)
    assert direction_vector(mid) == pytest.approx(direction_vector({"yaw_deg": 180, "pitch_deg": 0}), abs=1e-9)


def test_direction_velocity_is_continuous_through_passing_keys():
    state = sky_state(direction=direction_keys((0, -30, 10), (6, 40, 30), (20, 100, 90), (50, 280, 60), (60, 300, 0)))
    h = 1e-5
    for frame in (6, 20, 50):
        at = direction_vector(sky_at(state, frame))
        left = (at - direction_vector(sky_at(state, frame - h))) / h
        right = (direction_vector(sky_at(state, frame + h)) - at) / h
        assert np.linalg.norm(left) > 1e-3
        assert np.linalg.norm(left - right) < 1e-3 * np.linalg.norm(left)
    for frame in np.arange(0.0, 60.0, 0.1):
        assert -90.0 <= sky_at(state, frame)["pitch_deg"] <= 90.0


def test_direction_stops_where_it_turns_back():
    state = sky_state(direction=direction_keys((0, 0, 0), (10, 40, 0), (20, 0, 0)))
    h = 1e-4
    velocity = (direction_vector(sky_at(state, 10 + h)) - direction_vector(sky_at(state, 10 - h))) / (2 * h)
    assert velocity == pytest.approx([0.0, 0.0, 0.0], abs=1e-6)


def test_direction_over_a_pole_takes_the_stored_yaws_there():
    state = sky_state(direction=direction_keys((0, 0, 80), (20, 180, 80), easing=[0.42, 0.0, 0.58, 1.0]))
    assert sky_at(state, 10)["pitch_deg"] == pytest.approx(90.0, abs=1e-6)
    assert sky_at(state, 10)["yaw_deg"] == pytest.approx(90.0, abs=1e-6)
    assert sky_at(state, 9.9)["yaw_deg"] == pytest.approx(0.0, abs=1e-9)
    assert sky_at(state, 10.1)["yaw_deg"] == pytest.approx(180.0, abs=1e-9)
    # Two keys on one pole turn only the yaw, following the stored numbers.
    pole = sky_state(direction=direction_keys((0, 0, 90), (20, 90, 90)))
    assert sky_at(pole, 5)["yaw_deg"] == pytest.approx(22.5, abs=1e-9)


def test_roll_is_a_number_without_the_shortest_turn():
    state = sky_state(roll=[{"frame": 0, "value": 0, "easing": "auto"}, {"frame": 20, "value": 350}])
    assert sky_at(state, 10)["roll_deg"] == pytest.approx(175.0, abs=1e-9)


def test_size_angles_and_lanes_move_independently():
    state = sky_state(
        direction=direction_keys((0, 0, 0), (10, 40, 0)),
        size=[{"frame": 0, "value": {"hFOV_deg": 20, "vFOV_deg": 10}, "easing": [0.0, 0.0, 1.0, 1.0]}, {"frame": 30, "value": {"hFOV_deg": 50, "vFOV_deg": 10}}],
    )
    out = sky_at(state, 20)
    assert out["yaw_deg"] == 40.0
    assert out["hFOV_deg"] == pytest.approx(40.0, abs=1e-9)
    assert out["vFOV_deg"] == 10.0
    assert out["roll_deg"] == 0.0


def test_two_keys_without_easing_move_as_ease_in_out():
    state = load_scene_state({"version": 2, "camera": {"fov": {"keyframes": [{"frame": 0, "value": 40}, {"frame": 20, "value": 80}]}}})
    for u in (0.25, 0.5, 0.75):
        assert camera_at(state, 20 * u)["hFOV_deg"] == pytest.approx(40 + 40 * css_cubic_bezier(0.42, 0.0, 0.58, 1.0, u), abs=1e-4)


@pytest.mark.parametrize("keys", [
    [(0, 90, 0), (10, 0, 0), (20, 180, 0), (30, 90, 0)],
    [(0, 0, -90), (10, 0, 90), (20, 0, -90), (30, 0, 90)],
])
def test_opposite_keys_that_turn_back_move_along_their_great_circle(keys):
    # Every key turns back, so every segment starts and ends at rest; the opposite segments must still move.
    state = sky_state(direction=direction_keys(*keys))
    frames = np.arange(0.0, 30.0, 0.01)
    vectors = [direction_vector(sky_at(state, frame)) for frame in frames]
    steps = [math.acos(min(1.0, a @ b)) for a, b in zip(vectors, vectors[1:])]
    assert max(steps) < math.radians(1.0)
    for start, end in ((10, 20), (20, 30)) if keys[0][2] == 0 else ((0, 10), (10, 20), (20, 30)):
        a = direction_vector({"yaw_deg": keys[start // 10][1], "pitch_deg": keys[start // 10][2]})
        yaw = math.radians(keys[start // 10][1])
        normal = np.cross(a, [math.cos(yaw), 0.0, -math.sin(yaw)])
        for frame in np.arange(start + 0.5, end, 0.5):
            assert direction_vector(sky_at(state, frame)) @ normal == pytest.approx(0.0, abs=1e-9)
    # 10 -> 20 is opposite and at rest at both ends: halfway it is a quarter turn from either key.
    halfway = direction_vector(sky_at(state, 15))
    assert math.acos(min(1.0, halfway @ direction_vector({"yaw_deg": keys[1][1], "pitch_deg": keys[1][2]}))) == pytest.approx(math.pi / 2, abs=1e-9)


def test_segments_that_do_not_pass_a_key_are_the_great_circle_slerp():
    rng = np.random.default_rng(73)
    pairs = [((rng.uniform(-180, 180), rng.uniform(-90, 90)), (rng.uniform(-180, 180), rng.uniform(-90, 90))) for _ in range(20)]
    pairs += [((30.0, 20.0), (210.0, -20.0)), ((0.0, 90.0), (45.0, -90.0)), ((10.0, 0.0), (10.0, 0.0))]
    for (yaw0, pitch0), (yaw1, pitch1) in pairs:
        state = sky_state(direction=direction_keys((0, yaw0, pitch0), (10, yaw1, pitch1), easing=[0.0, 0.0, 1.0, 1.0]))
        a = direction_vector({"yaw_deg": yaw0, "pitch_deg": pitch0})
        b = direction_vector({"yaw_deg": yaw1, "pitch_deg": pitch1})
        w = b - (a @ b) * a
        if a @ b < 0 and np.linalg.norm(w) <= 1e-6:
            chord = math.pi * np.array([math.cos(math.radians(yaw0)), 0.0, -math.sin(math.radians(yaw0))])
        else:
            chord = w * math.atan2(np.linalg.norm(w), a @ b) / np.linalg.norm(w) if np.linalg.norm(w) > 1e-12 else w
        for p in (0.1, 0.37, 0.5, 0.83):
            v = p * chord
            angle = np.linalg.norm(v)
            expected = math.cos(angle) * a + (math.sin(angle) / angle if angle > 1e-12 else 1.0) * v
            assert direction_vector(sky_at(state, 10 * p)) == pytest.approx(expected, abs=1e-9)


# Shapes apart from Easing, Smooth, corners and loops (docs/scene-state-v2.md "補間" and "ループ", ADR 0064).

FIXTURES = __import__("pathlib").Path(__file__).resolve().parent / "fixtures" / "scene_state"


def motion_cases(name):
    return json.loads((FIXTURES / f"{name}.json").read_text(encoding="utf-8"))["cases"]


def close(py, expected, path="$"):
    if isinstance(expected, dict):
        assert list(py.keys()) == list(expected.keys()), path
        for key in expected:
            close(py[key], expected[key], f"{path}.{key}")
    elif isinstance(expected, list):
        assert len(py) == len(expected), path
        for index, (a, b) in enumerate(zip(py, expected)):
            close(a, b, f"{path}[{index}]")
    elif isinstance(expected, (bool, str)) or expected is None:
        assert py == expected, path
    else:
        assert abs(py - expected) <= 1e-4, f"{path}: {py} != {expected}"


@pytest.mark.parametrize("fixture", ["v2_shape_progress", "v2_loop"])
def test_motion_fixtures_evaluate_as_the_js_side_does(fixture):
    for case in motion_cases(fixture):
        state = load_scene_state(case["state"])
        got = [evaluate_scene_state(state, frame, case["length"]) for frame in case["frames"]]
        close(got, case["expected"], case["name"])


def circle_keys(count, easing=None, step=12, radius=5.0):
    keys = []
    for i in range(count):
        angle = 2 * math.pi * i / count
        key = {"frame": step * i, "value": [radius * math.sin(angle), 1.6, radius * math.cos(angle)]}
        if easing is not None:
            key["easing"] = easing
        keys.append(key)
    return keys


def position_state(keys, loop=False):
    return load_scene_state({"version": 2, "timeline": {"fps": 24.0}, "camera": {"loop": loop, "position": {"keyframes": keys}}})


def position_at(state, frame, length=None):
    return np.array(evaluate_scene_state(state, frame, length)["camera"]["position"])


def radius_of(point):
    return math.hypot(point[0], point[2])


@pytest.mark.parametrize("easing", [[0.0, 0.0, 1.0, 1.0], [0.42, 0.0, 0.58, 1.0], None])
def test_four_keys_on_a_circle_follow_it_whatever_the_easing(easing):
    state = position_state(circle_keys(4, easing), loop=True)
    radii = [radius_of(position_at(state, frame, 48)) for frame in np.arange(0.0, 48.0, 0.25)]
    assert max(abs(r - 5.0) for r in radii) < 5.0 * 2e-3
    # Without the loop the first and last segments are arcs of the same circle too.
    open_state = position_state(circle_keys(4, easing))
    radii = [radius_of(position_at(open_state, frame)) for frame in np.arange(0.0, 36.0, 0.25)]
    assert max(abs(r - 5.0) for r in radii) < 5.0 * 2e-3


def test_linear_runs_at_an_even_speed_along_a_curved_path_and_through_the_seam():
    state = position_state(circle_keys(4, [0.0, 0.0, 1.0, 1.0]), loop=True)
    steps = [np.linalg.norm(position_at(state, f + 0.25, 48) - position_at(state, f, 48)) for f in np.arange(-6.0, 54.0, 0.25)]
    assert max(steps) == pytest.approx(min(steps), rel=1e-2)
    # One period: frame 48 is frame 0, and the last frame is not a copy of the first.
    assert position_at(state, 48.0, 48) == pytest.approx(position_at(state, 0.0, 48), abs=1e-9)
    assert np.linalg.norm(position_at(state, 47.0, 48) - position_at(state, 0.0, 48)) > 0.1


def test_smooth_passes_middle_keys_and_eases_out_of_the_first_and_into_the_last():
    state = position_state([{"frame": 0, "value": [0, 0, 0]}, {"frame": 10, "value": [4, 0, 0]}, {"frame": 30, "value": [4, 0, 6]}, {"frame": 36, "value": [8, 0, 6]}])
    h = 1e-4
    assert np.linalg.norm(position_at(state, h) - position_at(state, 0)) / h < 1e-3
    assert np.linalg.norm(position_at(state, 36) - position_at(state, 36 - h)) / h < 1e-3
    for frame in (10, 30):
        left = (position_at(state, frame) - position_at(state, frame - h)) / h
        right = (position_at(state, frame + h) - position_at(state, frame)) / h
        assert np.linalg.norm(left) > 0.1
        assert np.linalg.norm(left - right) < 1e-2 * np.linalg.norm(left)


def test_a_corner_turns_sharply_on_straight_segments_and_does_not_stop():
    state = position_state([{"frame": 0, "value": [0, 0, 0]}, {"frame": 10, "value": [4, 0, 0], "corner": True}, {"frame": 20, "value": [4, 0, 4]}])
    for frame in np.arange(0.0, 10.0, 0.5):
        assert position_at(state, frame)[2] == pytest.approx(0.0, abs=1e-9)
    for frame in np.arange(10.0, 20.0, 0.5):
        assert position_at(state, frame)[0] == pytest.approx(4.0, abs=1e-9)
    h = 1e-4
    assert np.linalg.norm(position_at(state, 10) - position_at(state, 10 - h)) / h > 0.1


def test_smooth_joins_the_speed_of_a_cubic_bezier_neighbor():
    state = position_state([
        {"frame": 0, "value": [0, 0, 0], "easing": [0.42, 0.0, 1.0, 1.0]},
        {"frame": 10, "value": [5, 0, 0]},
        {"frame": 20, "value": [10, 0, 0], "easing": [0.0, 0.0, 0.58, 1.0]},
        {"frame": 30, "value": [15, 0, 0]},
    ])
    h = 1e-4
    for frame in (10, 20):
        left = np.linalg.norm(position_at(state, frame) - position_at(state, frame - h)) / h
        right = np.linalg.norm(position_at(state, frame + h) - position_at(state, frame)) / h
        assert left == pytest.approx(right, rel=1e-3)
        assert left > 0.5


def test_a_near_turn_back_does_not_swing_out_into_a_loop():
    for degrees in (150.0, 170.0, 179.99):
        turn = math.radians(180.0 - degrees)
        state = position_state([
            {"frame": 0, "value": [0, 0, 0]}, {"frame": 10, "value": [10, 0, 0]},
            {"frame": 20, "value": [10 - 10 * math.cos(turn), 0, 10 * math.sin(turn)]},
        ])
        sideways = min(position_at(state, frame)[2] for frame in np.arange(0.0, 20.0, 0.05))
        assert sideways > -2.0, degrees


def test_only_lanes_shorter_than_the_period_loop_and_only_with_a_length():
    keys = circle_keys(4, [0.0, 0.0, 1.0, 1.0])
    looping = position_state(keys, loop=True)
    assert position_at(looping, 60.0, 48) == pytest.approx(position_at(looping, 12.0, 48), abs=1e-9)
    # No length: the loop does nothing, the last value holds.
    assert position_at(looping, 60.0) == pytest.approx(position_at(looping, 36.0), abs=1e-9)
    # The mark off: the same.
    assert position_at(position_state(keys), 60.0, 48) == pytest.approx(position_at(looping, 36.0), abs=1e-9)
    # Keys spanning the whole period: that Lane does not loop.
    spanning = position_state(keys + [{"frame": 48, "value": keys[0]["value"], "easing": [0.0, 0.0, 1.0, 1.0]}], loop=True)
    assert position_at(spanning, 60.0, 48) == pytest.approx(position_at(spanning, 48.0, 48), abs=1e-9)


def test_a_last_key_that_repeats_the_first_stays_at_its_frame_and_the_seam_does_not_fold():
    keys = circle_keys(4) + [{"frame": 48, "value": circle_keys(4)[0]["value"]}]
    state = position_state(keys, loop=True)
    # Frames 48..60 hold the first value: the key stays at its own frame.
    for frame in (48.0, 52.0, 59.5):
        assert position_at(state, frame, 60) == pytest.approx(position_at(state, 0.0, 60), abs=1e-9)
    # Into the last key and out of the first, the path runs along one direction.
    h = 1e-3
    into = position_at(state, 48.0, 60) - position_at(state, 48.0 - h, 60)
    out = position_at(state, 60.0 + h, 60) - position_at(state, 60.0, 60)
    assert into / np.linalg.norm(into) == pytest.approx(out / np.linalg.norm(out), abs=1e-3)
    # The Smooth speed carries across the seam: it does not stop at the last key and the first.
    assert np.linalg.norm(into) / h > 0.5 and np.linalg.norm(out) / h > 0.5


def test_a_one_way_fade_returns_over_the_rest_of_a_loop():
    state = load_scene_state({"version": 2, "timeline": {"fps": 24.0}, "stickers": [{
        "id": "st", "placement": "sky", "source": {"kind": "port"}, "loop": True,
        "opacity": {"keyframes": [{"frame": 0, "value": 0.0, "easing": [0.0, 0.0, 1.0, 1.0]}, {"frame": 10, "value": 1.0, "easing": [0.0, 0.0, 1.0, 1.0]}]},
    }]})
    opacity = [evaluate_scene_state(state, frame, 48)["stickers"][0]["opacity"] for frame in (5.0, 10.0, 29.0, 48.0)]
    assert opacity == pytest.approx([0.5, 1.0, 0.5, 0.0], abs=1e-9)


def test_the_scene_never_loops():
    state = load_scene_state({"version": 2, "scene": {"loop": True, "scale": {"keyframes": [{"frame": 0, "value": 1.0}, {"frame": 10, "value": 2.0}]}}})
    assert evaluate_scene_state(state, 30.0, 20)["scene"]["scale"] == pytest.approx(2.0)


# Look at (docs/scene-state-v2.md "Look at", ADR 0065).

def test_the_look_at_fixture_evaluates_as_the_js_side_does():
    for case in motion_cases("v2_look_at"):
        state = load_scene_state(case["state"])
        got = [evaluate_scene_state(state, frame, case["length"], case["boxes"]) for frame in case["frames"]]
        close(got, case["expected"], case["name"])


def forward_of(camera):
    return world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]) @ np.array([0.0, 0.0, -1.0])


def test_the_camera_faces_its_target_keeps_its_roll_and_world_up():
    state = load_scene_state({"version": 2, "camera": {
        "position": {"keyframes": [{"frame": 0, "value": [0, 1, 6]}, {"frame": 30, "value": [5, 2, 3]}]},
        "rotation": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 12.0}},
        "look_at": {"value": {"point": [1.0, 0.5, -2.0]}},
    }})
    for frame in (0.0, 7.5, 18.0, 30.0):
        camera = evaluate_scene_state(state, frame)["camera"]
        toward = np.array([1.0, 0.5, -2.0]) - np.array(camera["position"])
        assert forward_of(camera) == pytest.approx(toward / np.linalg.norm(toward), abs=1e-9)
        assert camera["roll_deg"] == pytest.approx(12.0)


def test_a_sticker_target_point_is_its_box_share_scaled_turned_and_moved():
    box = {"center": [0.0, 0.5, 0.0], "size": [2.0, 1.0, 0.0]}
    state = load_scene_state({"version": 2, "camera": {"position": {"value": [0.0, 0.0, 5.0]}, "look_at": {"value": {"sticker": "s", "offset": [0.5, 0.5, 0.0]}}},
                              "stickers": [{"id": "s", "placement": "world", "source": {"kind": "file", "filename": "a.png"},
                                            "position": {"value": [1.0, 0.0, -1.0]}, "rotation": {"value": {"yaw_deg": 90.0}}, "scale": {"value": 2.0}}]})
    camera = evaluate_scene_state(state, 0.0, None, {"s": box})["camera"]
    # The box's point (0.5 * 2 + 0, 0.5 + 0.5 * 1) = (1, 1, 0), scaled by 2 and turned 90° to the right: (0, 2, 2) in World.
    local = np.array([2.0, 2.0, 0.0])
    point = np.array([1.0, 0.0, -1.0]) + world_rotation(90.0, 0.0, 0.0) @ local
    toward = point - np.array([0.0, 0.0, 5.0])
    assert forward_of(camera) == pytest.approx(toward / np.linalg.norm(toward), abs=1e-9)
    # Without the box the point is the Sticker's position.
    camera = evaluate_scene_state(state, 0.0)["camera"]
    toward = np.array([1.0, 0.0, -1.0]) - np.array([0.0, 0.0, 5.0])
    assert forward_of(camera) == pytest.approx(toward / np.linalg.norm(toward), abs=1e-9)


def test_over_the_target_the_yaw_is_the_frame_before_else_after_else_the_rotation_lane():
    def at(keys, frame, yaw=77.0):
        state = load_scene_state({"version": 2, "timeline": {"fps": 24.0}, "camera": {
            "position": {"keyframes": keys}, "rotation": {"value": {"yaw_deg": yaw}}, "look_at": {"value": {"point": [0.0, 0.0, 0.0]}}}})
        return evaluate_scene_state(state, frame, 20)["camera"]
    keys = [{"frame": 0, "value": [0, 5, 2]}, {"frame": 10, "value": [0, 5, 0]}, {"frame": 19, "value": [3, 5, -1]}]
    over = at(keys, 10.0)
    assert over["pitch_deg"] == -90.0
    assert over["yaw_deg"] == pytest.approx(at(keys, 9.0)["yaw_deg"])
    # Over it from the start: the frame just after.
    first = [{"frame": 0, "value": [0, 5, 0]}, {"frame": 10, "value": [3, 5, 0]}]
    assert at(first, 0.0)["yaw_deg"] == pytest.approx(at(first, 1.0)["yaw_deg"])
    # Over it the whole time: the rotation Lane's.
    always = [{"frame": 0, "value": [0, 3, 0]}, {"frame": 9, "value": [0, 1, 0]}]
    assert at(always, 4.0)["yaw_deg"] == 77.0


def test_between_two_targets_the_turn_slerps_by_the_segment_s_progress():
    state = load_scene_state({"version": 2, "camera": {"position": {"value": [0.0, 0.0, 0.0]}, "look_at": {"keyframes": [
        {"frame": 0, "value": {"point": [0.0, 0.0, -1.0]}, "easing": [0.0, 0.0, 1.0, 1.0]},
        {"frame": 10, "value": {"point": [1.0, 0.0, 0.0]}},
    ]}}})
    assert evaluate_scene_state(state, 0.0)["camera"]["yaw_deg"] == pytest.approx(0.0, abs=1e-9)
    assert evaluate_scene_state(state, 5.0)["camera"]["yaw_deg"] == pytest.approx(45.0, abs=1e-6)
    assert evaluate_scene_state(state, 10.0)["camera"]["yaw_deg"] == pytest.approx(90.0, abs=1e-9)


# Pose handoff (docs/scene-state-v2.md "受け渡しの置き方", ADR 0067).

def test_the_handoff_fixture_evaluates_as_the_js_side_does():
    for case in motion_cases("v2_handoff"):
        state = load_scene_state(case["state"])
        shot = load_sticker_state(json.dumps(case["shot"]))
        got = [evaluate_scene_state(state, frame, case["length"], None, shot) for frame in case["frames"]]
        close(got, case["expected"], case["name"])


def _handoff_case(name):
    case = next(item for item in motion_cases("v2_handoff") if item["name"] == name)
    return load_scene_state(case["state"]), load_sticker_state(json.dumps(case["shot"]))


def test_without_an_offset_the_sticker_is_the_shot_camera_at_the_media_time():
    state, shot = _handoff_case("moving_camera_no_offset")
    for frame in (6.0, 17.5, 40.0):
        sticker = evaluate_scene_state(state, frame, None, None, shot)["stickers"][0]
        camera = shot_camera(shot, sticker["clip_frame"] * shot["fps"] / state["timeline"]["fps"])
        assert np.allclose(world_rotation(sticker["yaw_deg"], sticker["pitch_deg"], sticker["roll_deg"]), world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]), atol=1e-9)
        assert (sticker["hFOV_deg"], sticker["vFOV_deg"], sticker["curve"]) == pytest.approx((camera["hFOV_deg"], camera["hFOV_deg"], camera["curve"]))


def test_the_offset_turns_in_the_shot_cameras_own_axes_and_scales_its_angle_of_view():
    # The Camera that shot it is rolled a quarter turn: a pitch of the offset (up in that Camera's own axes) moves the
    # Sticker sideways in the World, not up.
    shot = load_sticker_state(json.dumps({"kind": "pano_sticker_state", "version": 3, "fps": 24, "camera": {
        "rotation": [{"frame": 0, "value": {"yaw_deg": 0, "pitch_deg": 0, "roll_deg": 90}}], "fov": [{"frame": 0, "value": 50}]}}))
    state = load_scene_state({"version": 2, "stickers": [{"id": "p", "placement": "sky", "source": {"kind": "port"},
        "offset_rotation": {"value": {"yaw_deg": 0, "pitch_deg": 10, "roll_deg": 0}}, "offset_fov": {"value": 1.2}}]})
    sticker = evaluate_scene_state(state, 0.0, None, None, shot)["stickers"][0]
    forward = world_rotation(sticker["yaw_deg"], sticker["pitch_deg"], sticker["roll_deg"]) @ np.array([0.0, 0.0, -1.0])
    assert abs(forward[1]) < 1e-9
    assert abs(forward[0]) == pytest.approx(math.sin(math.radians(10.0)))
    assert (sticker["hFOV_deg"], sticker["vFOV_deg"]) == pytest.approx((60.0, 60.0))


def test_a_shot_places_only_the_sky_port_sticker():
    case = next(item for item in motion_cases("v2_handoff") if item["name"] == "not_a_port_or_world")
    state = load_scene_state(case["state"])
    shot = load_sticker_state(json.dumps(case["shot"]))
    assert evaluate_scene_state(state, 10.0, None, None, shot) == evaluate_scene_state(state, 10.0)


def test_a_looping_look_at_lane_closes_at_a_seam_when_it_ends_on_its_first_target():
    from comfyui_pano_suite.core.scene_eval import _Lane

    a = {"sticker": "s", "offset": [0.0, 0.5, 0.0]}
    keys = lambda last: [{"frame": 0, "value": a, "easing": "smooth"}, {"frame": 10, "value": {"point": [0.0, 0.0, -1.0]}, "easing": "smooth"}, {"frame": 20, "value": last, "easing": "smooth"}]
    assert _Lane(keys(dict(a)), 40).seam
    assert not _Lane(keys({"sticker": "s", "offset": [0.0, 0.25, 0.0]}), 40).seam
    assert not _Lane(keys({"point": [0.0, 0.5, 0.0]}), 40).seam
    assert not _Lane(keys(None), 40).seam


def _rotation_keys(frames):
    values = [(0.0, 0.0), (40.0, 30.0), (80.0, -20.0), (120.0, 10.0)]
    return load_scene_state({"version": 2, "camera": {"rotation": {"keyframes": [
        {"frame": frame, "value": {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": 0.0}} for frame, (yaw, pitch) in zip(frames, values)
    ]}}})


def _turn_path(state, end, samples=400):
    return [rotation_at(state, end * j / samples) for j in range(samples + 1)]


def _farthest(path, other):
    # The largest angle from a point of `path` to the nearest point of `other` (degrees).
    return max(min(angle_between(a, b) for b in other) for a in path)


def test_the_turn_shape_does_not_depend_on_the_keys_times():
    # docs/scene-state-v2.md "形（回転・direction）": the same keys at other times pass the same orientations.
    even = _turn_path(_rotation_keys([0, 12, 24, 36]), 36)
    uneven = _turn_path(_rotation_keys([0, 4, 40, 48]), 48)
    # Within the samples' own spacing (about a degree at 400 samples); the time-aware shape strayed by about 20°.
    assert math.degrees(_farthest(even, uneven)) < 2.0
    assert math.degrees(_farthest(uneven, even)) < 2.0


@pytest.mark.parametrize("lane", ["rotation", "direction"])
def test_a_looping_turn_back_to_its_first_value_stays_still_through_the_seam(lane):
    # docs/scene-state-v2.md "ループ": the segment from the last key (the first's value) to the period's end does not move.
    if lane == "rotation":
        keys = [{"frame": f, "value": {"yaw_deg": y, "pitch_deg": 0.0, "roll_deg": 0.0}} for f, y in zip([0, 10, 20, 30, 40], [0, 90, 180, 270, 0])]
        state = load_scene_state({"version": 2, "camera": {"loop": True, "rotation": {"keyframes": keys}}})
        read = lambda frame: evaluate_scene_state(state, frame, 60)["camera"]
    else:
        keys = [{"frame": f, "value": {"yaw_deg": y, "pitch_deg": p}} for f, y, p in zip([0, 10, 20, 40], [0, 60, 120, 0], [0, 30, 0, 0])]
        state = load_scene_state({"version": 2, "stickers": [{"id": "s", "placement": "sky", "source": {"kind": "port"}, "loop": True, "direction": {"keyframes": keys}}]})
        read = lambda frame: evaluate_scene_state(state, frame, 60)["stickers"][0]
    for frame in [40, 43, 47.5, 50, 55, 59.5]:
        got = read(frame)
        assert abs(math.remainder(got["yaw_deg"], 360.0)) < 1e-6 and abs(got["pitch_deg"]) < 1e-6, (frame, got)


def test_a_still_camera_straight_under_a_point_keeps_the_rotation_lane_s_yaw():
    # CodeRabbit review: no frame gives a yaw, so the search is skipped; the result is the rotation Lane's yaw.
    state = load_scene_state({"version": 2, "camera": {"rotation": {"value": {"yaw_deg": 30.0, "pitch_deg": 0.0, "roll_deg": 5.0}},
                                                       "look_at": {"value": {"point": [0.0, 5.0, 0.0]}}}})
    camera = evaluate_scene_state(state, 12.0, 2000)["camera"]
    assert (camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]) == (30.0, 90.0, 5.0)
