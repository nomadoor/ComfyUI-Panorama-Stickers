import math

import numpy as np
import pytest

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state, rebase_scene_state
from comfyui_pano_suite.core.world import world_rotation


def camera_state(keyframes, fps=24.0):
    return load_scene_state({"version": 2, "timeline": {"fps": fps}, "camera": {"transform": {"keyframes": keyframes}}})


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


# Non-uniform key spacing: a fast short segment followed by a slow long one.
SPLINE_KEYS = [
    {"frame": 0, "value": {"position": [0, 0, 0], "yaw_deg": 0, "pitch_deg": 0, "roll_deg": 0, "hFOV_deg": 60}},
    {"frame": 8, "value": {"position": [2, 1, -1], "yaw_deg": 40, "pitch_deg": 20, "roll_deg": 5, "hFOV_deg": 90}},
    {"frame": 40, "value": {"position": [3, 0, -6], "yaw_deg": 120, "pitch_deg": -10, "roll_deg": 0, "hFOV_deg": 70}},
    {"frame": 50, "value": {"position": [1, 2, -7], "yaw_deg": 150, "pitch_deg": 30, "roll_deg": -20, "hFOV_deg": 40}},
]


def with_easing(keys, easing):
    return [{**key, "easing": easing} for key in keys]


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
        {"frame": frame, "value": {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": roll}}
        for frame, (yaw, pitch, roll) in zip(frames, values)
    ])
    h = 1e-5
    for frame in frames[1:3]:
        left = angular_velocity(state, frame - h, frame)
        right = angular_velocity(state, frame, frame + h)
        assert np.linalg.norm(left) > 1e-3
        assert np.linalg.norm(left - right) < 1e-3 * np.linalg.norm(left) + 1e-6


def test_fast_move_then_stop_does_not_overshoot():
    state = camera_state([
        {"frame": 0, "value": {"position": [0, 0, 0], "yaw_deg": 0, "hFOV_deg": 90}},
        {"frame": 2, "value": {"position": [5, 1, 0], "yaw_deg": 90, "hFOV_deg": 60}},
        {"frame": 102, "value": {"position": [5, 1, 0], "yaw_deg": 90, "hFOV_deg": 60}},
    ])
    for frame in np.arange(0.0, 102.0, 0.25):
        camera = camera_at(state, frame)
        assert 60.0 - 1e-9 <= camera["hFOV_deg"] <= 90.0 + 1e-9
        assert -1e-9 <= camera["position"][0] <= 5.0 + 1e-9
        assert -1e-9 <= camera["position"][1] <= 1.0 + 1e-9
        assert -1e-6 <= camera["yaw_deg"] <= 90.0 + 1e-6
        assert camera["pitch_deg"] == pytest.approx(0.0, abs=1e-6)


def test_scale_stays_positive_after_interpolation():
    state = load_scene_state({"version": 2, "scene": {"transform": {"keyframes": [
        {"frame": 0, "value": {"scale": 1.0}, "easing": [0.0, 0.0, 0.5, 3.0]},
        {"frame": 10, "value": {"scale": 0.01}},
    ]}}})
    scales = [evaluate_scene_state(state, frame)["scene"]["scale"] for frame in np.arange(0.0, 10.0, 0.25)]
    assert min(scales) == 1e-6


@pytest.mark.parametrize("start, end, field, expected", [
    # Exact half turns: right, then up, then clockwise.
    ({"yaw_deg": 0}, {"yaw_deg": 180}, "yaw_deg", 90.0),
    ({"yaw_deg": 0}, {"yaw_deg": 180, "roll_deg": 180}, "pitch_deg", 90.0),
    ({"roll_deg": 0}, {"roll_deg": 180}, "roll_deg", 90.0),
])
def test_exact_half_turns_take_a_fixed_direction(start, end, field, expected):
    state = camera_state([{"frame": 0, "value": start}, {"frame": 20, "value": end}])
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
    state = camera_state([{"frame": 0, "value": {"yaw_deg": 0}}, {"frame": 20, "value": {"yaw_deg": 350}}])
    assert camera_at(state, 10)["yaw_deg"] == pytest.approx(-5.0, abs=1e-9)
    assert camera_at(state, 19)["yaw_deg"] == pytest.approx(350.5, abs=1e-9)


def css_cubic_bezier(x1, y1, x2, y2, u):
    t = np.linspace(0.0, 1.0, 200001)
    x = 3 * (1 - t) ** 2 * t * x1 + 3 * (1 - t) * t ** 2 * x2 + t ** 3
    y = 3 * (1 - t) ** 2 * t * y1 + 3 * (1 - t) * t ** 2 * y2 + t ** 3
    return float(np.interp(u, x, y))


@pytest.mark.parametrize("curve", [[0.42, 0.0, 0.58, 1.0], [0.0, 0.0, 1.0, 1.0], [0.9, -0.5, 0.1, 1.5], [1.0, 0.0, 1.0, 0.0]])
def test_cubic_bezier_distributes_time_like_css(curve):
    state = camera_state([
        {"frame": 0, "value": {"yaw_deg": 0, "hFOV_deg": 40}, "easing": curve},
        {"frame": 20, "value": {"yaw_deg": 60, "hFOV_deg": 80}},
    ])
    for u in (0.1, 0.25, 0.5, 0.8, 0.95):
        progress = css_cubic_bezier(*curve, u)
        camera = camera_at(state, 20 * u)
        assert camera["hFOV_deg"] == pytest.approx(min(179.0, max(0.1, 40 + 40 * progress)), abs=1e-4)
        # Slerp about the vertical axis: the yaw follows the eased progress.
        assert camera["yaw_deg"] == pytest.approx(60 * progress, abs=1e-3)
        assert camera["pitch_deg"] == pytest.approx(0.0, abs=1e-4)


def bezier_point(p0, c1, c2, p1, t):
    p0, c1, c2, p1 = (np.asarray(v, dtype=np.float64) for v in (p0, c1, c2, p1))
    return (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * c1 + 3 * (1 - t) * t ** 2 * c2 + t ** 3 * p1


def test_position_path_is_smooth_without_handles_and_follows_handles():
    keys = [
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}},
    ]
    state = camera_state(keys)
    assert camera_at(state, 2.5)["position"] == pytest.approx([1.0, 0.0, 0.0])
    keys[0]["handles"] = {"out": [0, 3, 0]}
    keys[1]["handles"] = {"in": [0, 0, 2]}
    state = camera_state(keys)
    for t in (0.2, 0.5, 0.7):
        expected = bezier_point([0, 0, 0], [0, 3, 0], [4, 0, 2], [4, 0, 0], t)
        assert camera_at(state, 10 * t)["position"] == pytest.approx(expected.tolist(), abs=1e-9)
    # Only the handle that is present overrides; the other end keeps the automatic tangent.
    three = camera_state([
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}, "handles": {"out": [0, 1, 0]}},
        {"frame": 20, "value": {"position": [4, 4, 0]}},
    ])
    auto = camera_state([
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}},
        {"frame": 20, "value": {"position": [4, 4, 0]}},
    ])
    assert camera_at(three, 5)["position"] == camera_at(auto, 5)["position"]
    assert camera_at(three, 15)["position"] != camera_at(auto, 15)["position"]
    # Without handles the auto path curves through a right-angle key instead of stopping at the corner.
    velocity = (np.array(camera_at(auto, 10 + 1e-4)["position"]) - np.array(camera_at(auto, 10 - 1e-4)["position"])) / 2e-4
    assert velocity == pytest.approx([0.2, 0.2, 0.0], abs=1e-6)


def test_position_stops_only_where_it_turns_back():
    state = camera_state([
        {"frame": 0, "value": {"position": [0, 0, 0]}},
        {"frame": 10, "value": {"position": [4, 0, 0]}},
        {"frame": 20, "value": {"position": [0, 0, 0]}},
    ])
    velocity = (np.array(camera_at(state, 10 + 1e-4)["position"]) - np.array(camera_at(state, 10 - 1e-4)["position"])) / 2e-4
    assert velocity == pytest.approx([0.0, 0.0, 0.0], abs=1e-6)


def test_looking_up_then_panning_keeps_turning_through_the_key():
    state = camera_state([
        {"frame": 0, "value": {"pitch_deg": -30}},
        {"frame": 3, "value": {"pitch_deg": 0}},
        {"frame": 30, "value": {"yaw_deg": 150}},
    ])
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
        {"frame": 0, "value": {"yaw_deg": 0, "pitch_deg": 80}},
        {"frame": 20, "value": {"yaw_deg": 180, "pitch_deg": 80, "roll_deg": 180}},
    ])
    assert camera_at(state, 10)["pitch_deg"] == pytest.approx(90.0, abs=1e-3)
    assert angle_between(rotation_at(state, 0), rotation_at(state, 20)) == pytest.approx(math.radians(20), abs=1e-5)


def sticker_state(clip, keyframes):
    return load_scene_state({
        "version": 2,
        "scene": {"clip": clip, "transform": {"keyframes": keyframes}},
        "stickers": [{
            "placement": "world",
            "source": {"kind": "port"},
            "clip": clip,
            "transform": {"keyframes": keyframes},
            "opacity": {"keyframes": [{"frame": 0, "value": 0.2}, {"frame": 30, "value": 1.0}]},
        }],
    })


CONTENT_KEYS = [
    {"frame": 0, "value": {"position": [0, 0, 0], "yaw_deg": 0, "scale": 1}},
    {"frame": 12, "value": {"position": [1, 2, 0], "yaw_deg": 30, "scale": 2}},
    {"frame": 30, "value": {"position": [3, 2, -1], "yaw_deg": 10, "scale": 1}},
]


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


def timeline_events(state):
    """Every stored time as a Timeline frame: Keyframes (content Keyframes shifted by start - in) and clip edges."""
    events = [key["frame"] for key in state["camera"]["transform"]["keyframes"]]
    owners = [(state["scene"]["clip"], [state["scene"]["transform"]])]
    owners += [(sticker["clip"], [sticker["transform"], sticker["opacity"]]) for sticker in state["stickers"]]
    for clip, groups in owners:
        anchor = clip["start"] - clip["in"]
        events += [clip["start"], anchor] + ([] if clip["duration"] is None else [clip["start"] + clip["duration"]])
        events += [anchor + key["frame"] for group in groups for key in group["keyframes"]]
    return events + [state["timeline"]["length"]]


@pytest.mark.parametrize("fps", [30000 / 1001, 25.0, 60.0, 12.0])
def test_rebase_rounds_every_timeline_event_within_half_a_frame(fps):
    state = load_scene_state({
        "version": 2,
        "timeline": {"fps": 24.0, "length": 241},
        "camera": {"transform": {"keyframes": [{"frame": f, "value": {"yaw_deg": f}} for f in (0, 7, 13, 50, 101, 239)]}},
        "scene": {"clip": {"start": 3, "in": 17, "duration": 55}, "transform": {"keyframes": [{"frame": 5, "value": {}}, {"frame": 9, "value": {}}]}},
        "stickers": [{"source": {"kind": "port"}, "clip": {"start": 11, "in": 1, "duration": 29}, "opacity": {"keyframes": [{"frame": 2, "value": 0.5}, {"frame": 19, "value": 1.0}]}}],
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
        "camera": {"transform": {"keyframes": [{"frame": 40, "value": {}}]}},
        "stickers": [{"source": {"kind": "port"}, "clip": {"start": 11, "in": 1}, "opacity": {"keyframes": [{"frame": 30, "value": 0.5}]}}],
    })
    rebased = rebase_scene_state(state, 30000 / 1001)
    sticker = rebased["stickers"][0]
    camera_frame = rebased["camera"]["transform"]["keyframes"][0]["frame"]
    sticker_frame = sticker["clip"]["start"] - sticker["clip"]["in"] + sticker["opacity"]["keyframes"][0]["frame"]
    assert camera_frame == sticker_frame == 50
    assert sticker["clip"] == {"start": 14, "in": 2, "duration": None}


def test_rebase_to_a_lower_fps_keeps_the_later_of_colliding_keys():
    state = camera_state([{"frame": 0, "value": {"yaw_deg": 0}}, {"frame": 1, "value": {"yaw_deg": 5}}, {"frame": 2, "value": {"yaw_deg": 9}}], fps=24.0)
    state["timeline"]["length"] = 1
    rebased = rebase_scene_state(state, 8.0)
    assert [(key["frame"], key["value"]["yaw_deg"]) for key in rebased["camera"]["transform"]["keyframes"]] == [(0, 5.0), (1, 9.0)]
    assert rebased["timeline"]["length"] == 1


@pytest.mark.parametrize("fps", [0, -24.0, math.nan, True])
def test_rebase_rejects_a_non_positive_fps(fps):
    with pytest.raises(ValueError, match="fps"):
        rebase_scene_state(load_scene_state(None), fps)
