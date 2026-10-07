import json
import math
from pathlib import Path

import pytest

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state, load_sticker_state, rebase_scene_state

FIXTURES = Path(__file__).resolve().parent / "fixtures" / "scene_state"

STATE_CASES = ["v2_canonical", "v1_stickers", "v1_cutout", "v2_invalid_fields", "v2_no_camera", "v2_erp_camera", "v2_hidden", "v2_timeline_limits", "v2_upstream"]
STICKER_STATE_CASES = ["sticker_state_v1", "sticker_state_v2"]


def read_fixture(name):
    return (FIXTURES / f"{name}.json").read_text(encoding="utf-8")


def expected_state(name):
    return json.loads(read_fixture(name if name == "v2_canonical" else f"{name}.v2"))


def assert_close(actual, expected, path="$"):
    if isinstance(expected, dict):
        assert isinstance(actual, dict), path
        assert list(actual.keys()) == list(expected.keys()), path
        for key in expected:
            assert_close(actual[key], expected[key], f"{path}.{key}")
    elif isinstance(expected, list):
        assert isinstance(actual, list) and len(actual) == len(expected), path
        for index, (a, e) in enumerate(zip(actual, expected)):
            assert_close(a, e, f"{path}[{index}]")
    elif isinstance(expected, bool) or expected is None or isinstance(expected, str):
        assert actual == expected, path
    else:
        assert not isinstance(actual, bool) and isinstance(actual, (int, float)), path
        assert math.isclose(actual, expected, rel_tol=0.0, abs_tol=1e-9), f"{path}: {actual} != {expected}"


@pytest.mark.parametrize("name", STATE_CASES)
def test_load_scene_state_matches_fixture(name):
    assert_close(load_scene_state(read_fixture(name)), expected_state(name))


@pytest.mark.parametrize("name", STATE_CASES)
def test_load_scene_state_is_idempotent(name):
    once = load_scene_state(read_fixture(name))
    assert load_scene_state(json.dumps(once)) == once


def test_load_scene_state_accepts_parsed_dict():
    raw = json.loads(read_fixture("v1_cutout"))
    assert load_scene_state(raw) == load_scene_state(read_fixture("v1_cutout"))


def test_stored_frames_are_integers():
    state = load_scene_state(read_fixture("v2_invalid_fields"))
    assert [type(k["frame"]) for k in state["camera"]["rotation"]["keyframes"]] == [int, int, int]
    assert type(state["stickers"][0]["clip"]["in"]) is int


def test_empty_state_is_default_v2():
    state = load_scene_state("")
    assert state == load_scene_state(None) == load_scene_state("  ")
    assert state["version"] == 2
    assert state["stickers"] == []
    assert state["camera"] is None


def test_state_without_version_is_read_as_v1():
    state = load_scene_state('{"shots":[{"yaw_deg":30,"hFOV_deg":90,"vFOV_deg":90}]}')
    assert state["version"] == 2
    assert state["camera"]["rotation"]["value"]["yaw_deg"] == 30.0
    assert state["camera"]["aspect"] == pytest.approx(1.0)


@pytest.mark.parametrize("camera", ["", ',"camera":null', ',"camera":"front"', ',"camera":[1]'])
def test_state_without_a_camera_object_has_no_camera(camera):
    assert load_scene_state(f'{{"version":2{camera}}}')["camera"] is None


def test_camera_object_has_the_default_camera_fields():
    assert load_scene_state('{"version":2,"camera":{}}')["camera"] == {
        "aspect": 1.0,
        "projection": "perspective",
        "visible": True,
        "position": {"value": [0.0, 0.0, 0.0], "keyframes": []},
        "rotation": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}, "keyframes": []},
        "fov": {"value": 90.0, "keyframes": []},
    }


@pytest.mark.parametrize("projection, expected", [("erp", "erp"), ("perspective", "perspective"), ("ERP", "perspective"), (None, "perspective"), (1, "perspective")])
def test_camera_projection_is_perspective_or_erp(projection, expected):
    state = load_scene_state({"version": 2, "camera": {"projection": projection}})
    assert state["camera"]["projection"] == expected


def test_v1_cutout_has_a_camera_and_v1_stickers_has_none():
    assert load_scene_state(read_fixture("v1_cutout"))["camera"]["projection"] == "perspective"
    assert load_scene_state(read_fixture("v1_stickers"))["camera"] is None
    assert load_scene_state('{"version":1,"shots":["bad"]}')["camera"] is None


def test_rebase_keeps_no_camera_and_the_projection():
    assert rebase_scene_state(load_scene_state(read_fixture("v2_no_camera")), 60.0)["camera"] is None
    rebased = rebase_scene_state(load_scene_state(read_fixture("v2_erp_camera")), 12.0)
    assert rebased["camera"]["projection"] == "erp"
    assert [key["frame"] for key in rebased["camera"]["position"]["keyframes"]] == [0, 18]


def test_hidden_camera_scene_and_painting_are_kept_by_rebase():
    rebased = rebase_scene_state(load_scene_state(read_fixture("v2_hidden")), 60.0)
    assert rebased["camera"]["visible"] is False
    assert rebased["scene"]["visible"] is False
    assert rebased["painting_visible"] is False
    assert rebased["scene"]["clip"] == {"start": 5, "in": 0, "duration": 15}


@pytest.mark.parametrize(("fps", "length", "expected"), [
    (1e308, 1e308, {"fps": 1000.0, "length": 10_000_000}),
    (300.0, 100000, {"fps": 300.0, "length": 100000}),
    (0, 0, {"fps": 24.0, "length": None}),
    (0.5, 10_000_001, {"fps": 1.0, "length": 10_000_000}),
    (-1, -5, {"fps": 24.0, "length": None}),
    (float("nan"), float("nan"), {"fps": 24.0, "length": None}),
])
def test_timeline_fps_and_length_are_kept_in_range(fps, length, expected):
    assert load_scene_state({"version": 2, "timeline": {"fps": fps, "length": length}})["timeline"] == expected


@pytest.mark.parametrize(("fps", "timeline", "start"), [
    (1e308, {"fps": 1000.0, "length": 10_000_000}, 1000),
    (300.0, {"fps": 300.0, "length": 3_000_000}, 300),
    (0.5, {"fps": 1.0, "length": 10_000}, 1),
    (60.0, {"fps": 60.0, "length": 600_000}, 60),
])
def test_rebase_brings_the_fps_into_range(fps, timeline, start):
    rebased = rebase_scene_state(load_scene_state(read_fixture("v2_timeline_limits")), fps)
    assert rebased["timeline"] == timeline
    assert rebased["stickers"][0]["clip"]["start"] == start


def test_a_length_keeps_its_seconds_when_rebased_to_a_higher_fps():
    state = load_scene_state({"version": 2, "timeline": {"fps": 24.0, "length": 90_000}})
    assert rebase_scene_state(state, 1000.0)["timeline"] == {"fps": 1000.0, "length": 3_750_000}


def test_clip_ranges_and_keyframes_are_kept_within_the_frame_limit():
    far = load_scene_state(read_fixture("v2_timeline_limits"))["stickers"][1]
    assert far["clip"] == {"start": 10_000_000, "in": 10_000_000, "duration": 10_000_000}
    assert [key["frame"] for key in far["opacity"]["keyframes"]] == [-10_000_000, 10_000_000]


def test_a_state_within_the_limits_loads_unchanged():
    raw = {
        "version": 2,
        "timeline": {"fps": 300.0, "length": 100000},
        "scene": {"clip": {"start": 0, "in": 0, "duration": 9_999_999}},
        "stickers": [{"id": "st", "source": {"kind": "port"}, "clip": {"start": 9_000_000, "in": 5, "duration": 1_000_000},
                      "opacity": {"keyframes": [{"frame": -10_000_000, "value": 1.0}, {"frame": 10_000_000, "value": 0.0}]}}],
    }
    state = load_scene_state(raw)
    assert state["timeline"] == raw["timeline"]
    assert state["scene"]["clip"] == raw["scene"]["clip"]
    assert state["stickers"][0]["clip"] == raw["stickers"][0]["clip"]
    assert [key["frame"] for key in state["stickers"][0]["opacity"]["keyframes"]] == [-10_000_000, 10_000_000]
    assert load_scene_state(json.dumps(state)) == state


@pytest.mark.parametrize("fps", [0, -1.0, float("nan"), float("inf")])
def test_rebase_rejects_an_fps_that_is_not_a_positive_number(fps):
    with pytest.raises(ValueError, match="positive number"):
        rebase_scene_state(load_scene_state(""), fps)


def test_a_hidden_scene_is_not_active_and_a_hidden_camera_still_evaluates():
    state = load_scene_state(read_fixture("v2_hidden"))
    evaluated = evaluate_scene_state(state, 3.0)
    assert evaluated["scene"]["active"] is False
    assert [item["active"] for item in evaluated["stickers"]] == [False, True]
    assert evaluated["camera"]["yaw_deg"] == pytest.approx(30.0)
    shown = evaluate_scene_state({**state, "scene": {**state["scene"], "visible": True}}, 3.0)
    assert shown["scene"]["active"] is True


def test_evaluating_a_state_without_camera_gives_no_camera():
    state = load_scene_state(read_fixture("v2_no_camera"))
    evaluated = evaluate_scene_state(state, 30.0)
    assert evaluated["camera"] is None
    assert evaluated["stickers"][0]["yaw_deg"] == pytest.approx(20.0)


@pytest.mark.parametrize("text, fragment", [
    ('{"version":3}', "version 3"),
    ('{"version":"2"}', "version '2'"),
    ('{"version":true}', "version True"),
])
def test_unsupported_version_raises_clear_error(text, fragment):
    with pytest.raises(ValueError, match="state_json") as info:
        load_scene_state(text)
    assert fragment in str(info.value)
    assert "1 and 2" in str(info.value)


@pytest.mark.parametrize("text", ["{not json", "[1,2]", '"text"'])
def test_non_object_state_raises(text):
    with pytest.raises(ValueError, match="state_json"):
        load_scene_state(text)


def test_state_v2_has_no_unread_fields():
    state = load_scene_state(read_fixture("v2_canonical"))
    assert list(state.keys()) == ["version", "id", "timeline", "camera", "scene", "stickers", "next_sticker_id", "painting", "painting_layer", "painting_visible", "upstream"]
    assert list(state["timeline"].keys()) == ["fps", "length"]
    assert list(state["camera"].keys()) == ["aspect", "projection", "visible", "position", "rotation", "fov"]
    assert list(state["scene"].keys()) == ["clip", "visible", "position", "rotation", "scale"]
    lanes = {"sky": ["direction", "roll", "size", "opacity", "z_index"], "world": ["position", "rotation", "scale", "opacity"]}
    for sticker in state["stickers"]:
        port = ["handoff_overrides"] if sticker["source"]["kind"] == "port" else []
        assert list(sticker.keys()) == ["id", "placement", "source", "clip", "visible", "locked", "crop", *lanes[sticker["placement"]], *port]


@pytest.mark.parametrize("name", STICKER_STATE_CASES)
def test_load_sticker_state_matches_fixture(name):
    assert_close(load_sticker_state(read_fixture(name)), json.loads(read_fixture(f"{name}.v2")))


@pytest.mark.parametrize("text", [None, "", "{bad", '{"kind":"other","version":2}', '{"kind":"pano_sticker_state","version":1,"pose":{}}'])
def test_load_sticker_state_ignores_non_sticker_state(text):
    assert load_sticker_state(text) is None


def test_load_sticker_state_rejects_unknown_version():
    with pytest.raises(ValueError, match="sticker_state version 3"):
        load_sticker_state('{"kind":"pano_sticker_state","version":3}')


def test_sticker_state_v2_without_camera_gets_one_default_keyframe_per_lane():
    parsed = load_sticker_state('{"kind":"pano_sticker_state","version":2,"camera":[]}')
    easing = [0.42, 0.0, 0.58, 1.0]
    assert parsed["camera"] == {
        "position": [{"frame": 0, "value": [0.0, 0.0, 0.0], "easing": easing}],
        "rotation": [{"frame": 0, "value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}, "easing": easing}],
        "fov": [{"frame": 0, "value": 90.0, "easing": easing}],
    }


def test_evaluate_canonical_state_matches_fixture():
    state = load_scene_state(read_fixture("v2_canonical"))
    expected = json.loads(read_fixture("v2_canonical.eval"))
    assert_close([evaluate_scene_state(state, case["frame"]) for case in expected], expected)


def test_evaluate_returns_static_values_without_keyframes():
    state = load_scene_state(read_fixture("v1_stickers"))
    out = evaluate_scene_state(state, 3.25)
    assert out["camera"] is None
    camera = evaluate_scene_state(load_scene_state('{"version":2,"camera":{}}'), 3.25)["camera"]
    assert camera == {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 90.0, "aspect": 1.0}
    assert [s["active"] for s in out["stickers"]] == [False, True, True]
    assert out["stickers"][0]["yaw_deg"] == 190.0


def test_evaluate_result_does_not_alias_state():
    state = load_scene_state(read_fixture("v2_canonical"))
    out = evaluate_scene_state(state, 0.0)
    out["camera"]["position"][0] = 99.0
    assert state["camera"]["position"]["keyframes"][0]["value"][0] == 0.0


def _cut_state():
    return load_scene_state({
        "version": 2,
        "timeline": {"fps": 30000 / 1001},
        "camera": {"rotation": {"keyframes": [
            {"frame": 0, "value": {"yaw_deg": 0}, "easing": "hold"},
            {"frame": 24, "value": {"yaw_deg": 90}, "easing": "auto"},
            {"frame": 48, "value": {"yaw_deg": 180}},
        ]}},
    })


def test_hold_cut_lands_on_frame_within_float_rounding():
    state = _cut_state()
    frame = (24 * 1001 / 30000) * state["timeline"]["fps"]
    assert evaluate_scene_state(state, frame)["camera"]["yaw_deg"] == 90.0
    assert evaluate_scene_state(state, 24 - 5e-7)["camera"]["yaw_deg"] == 90.0
    assert evaluate_scene_state(state, 24 + 5e-7)["camera"]["yaw_deg"] == 90.0
    assert evaluate_scene_state(state, 48 - 5e-7)["camera"]["yaw_deg"] == 180.0
    assert evaluate_scene_state(state, 24 - 1e-5)["camera"]["yaw_deg"] == 0.0


@pytest.mark.parametrize("constant", ["NaN", "Infinity", "-Infinity"])
def test_json_non_finite_constants_are_rejected(constant):
    with pytest.raises(ValueError, match="state_json is not a JSON object"):
        load_scene_state(f'{{"version":2,"timeline":{{"fps":{constant}}}}}')
    assert load_sticker_state(f'{{"kind":"pano_sticker_state","version":2,"fps":{constant}}}') is None


def test_sticker_state_v1_accepts_numeric_strings():
    parsed = load_sticker_state('{"kind":"pano_sticker_state","version":"1","pose":{"yaw_deg":"190","pitch_deg":" -100 ","roll_deg":2,"hFOV_deg":"30"},"source_aspect":"1.5"}')
    assert parsed["camera"]["rotation"][0]["value"] == {"yaw_deg": -170.0, "pitch_deg": -89.9, "roll_deg": 2.0}
    assert parsed["camera"]["fov"][0]["value"] == 30.0
    assert parsed["source_aspect"] == 1.5
    assert load_sticker_state('{"kind":"pano_sticker_state","version":1,"pose":{"yaw_deg":"","pitch_deg":0,"roll_deg":0,"hFOV_deg":30}}') is None
    assert load_sticker_state('{"kind":"pano_sticker_state","version":1,"pose":{"yaw_deg":true,"pitch_deg":0,"roll_deg":0,"hFOV_deg":30}}') is None


@pytest.mark.parametrize("easing", [None, "smooth", [0.42, 0.0, 0.58], [0.2, -0.1, 0.8, 1.0], [0.2, 0.0, 0.8, 1.1], [1.2, 0.0, 0.5, 1.0]])
def test_missing_or_invalid_easing_is_ease_in_out(easing):
    key = {"frame": 0, "value": 0.5} if easing is None else {"frame": 0, "value": 0.5, "easing": easing}
    state = load_scene_state({"version": 2, "stickers": [{"source": {"kind": "port"}, "opacity": {"keyframes": [key]}}]})
    assert state["stickers"][0]["opacity"]["keyframes"][0]["easing"] == [0.42, 0.0, 0.58, 1.0]


def test_missing_or_invalid_lane_is_the_default_lane():
    state = load_scene_state({"version": 2, "camera": {"fov": 60, "rotation": None}, "stickers": [{"source": {"kind": "port"}, "size": "big", "roll": {"value": "x"}}]})
    assert state["camera"]["fov"] == {"value": 90.0, "keyframes": []}
    assert state["camera"]["rotation"] == {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}, "keyframes": []}
    sticker = state["stickers"][0]
    assert sticker["size"] == {"value": {"hFOV_deg": 20.0, "vFOV_deg": 20.0}, "keyframes": []}
    assert sticker["roll"] == {"value": 0.0, "keyframes": []}


def test_only_position_keyframes_keep_handles():
    handles = {"in": [0, 1, 0], "out": [1, 0, 0]}
    key = {"frame": 0, "value": None, "easing": "auto", "handles": handles}
    state = load_scene_state({"version": 2, "camera": {name: {"keyframes": [key]} for name in ("position", "rotation", "fov")}})
    assert state["camera"]["position"]["keyframes"][0]["handles"] == {"in": [0.0, 1.0, 0.0], "out": [1.0, 0.0, 0.0]}
    assert "handles" not in state["camera"]["rotation"]["keyframes"][0]
    assert "handles" not in state["camera"]["fov"]["keyframes"][0]


def test_clip_range_edges_use_frame_epsilon():
    state = load_scene_state(read_fixture("v2_canonical"))
    active = lambda frame: evaluate_scene_state(state, frame)["stickers"][0]["active"]
    assert active(10.0 - 1e-7)
    assert not active(10.0 - 1e-5)
    assert active(50.0 - 1e-5)
    assert not active(50.0 - 1e-7)


def _counter(stickers, next_sticker_id=None):
    raw = {"version": 2, "stickers": stickers}
    if next_sticker_id is not None:
        raw["next_sticker_id"] = next_sticker_id
    return load_scene_state(raw)


def _file(sticker_id):
    return {"id": sticker_id, "source": {"kind": "file", "filename": "a.png"}}


@pytest.mark.parametrize("stickers, stored, expected", [
    ([], None, 1),
    ([_file("sticker_2"), _file("st_9"), _file("sticker_x"), _file("sticker_٣")], None, 3),
    ([_file("sticker_2")], 7, 7),
    ([_file("sticker_2")], 1, 3),
    ([_file("sticker_2")], 6.6, 7),
    ([_file("sticker_2")], "7", 3),
    ([_file("sticker_2")], True, 3),
    ([_file("sticker_2")], -4, 3),
    ([_file("sticker_9007199254740991"), _file("sticker_12")], 1e300, 2**53 - 1),
    ([_file("sticker_9007199254740991"), _file("sticker_12")], None, 13),
    # More than 16 digits is not a number (int() raises past 4,300 digits).
    ([_file("sticker_" + "9" * 5000), _file("sticker_" + "0" * 16 + "5"), _file("sticker_" + "0" * 15 + "5")], None, 6),
])
def test_next_sticker_id_is_at_least_one_past_the_largest_sticker_number(stickers, stored, expected):
    assert _counter(stickers, stored)["next_sticker_id"] == expected


def test_a_sticker_without_a_valid_id_takes_the_counter_not_a_smaller_unused_number():
    state = _counter([_file("sticker_3"), _file(""), _file("sticker_3")], 5)

    assert [sticker["id"] for sticker in state["stickers"]] == ["sticker_3", "sticker_5", "sticker_6"]
    assert state["next_sticker_id"] == 7
    assert load_scene_state(state) == state


def test_only_port_stickers_keep_handoff_overrides_of_their_lanes_in_lane_order():
    state = load_scene_state({"version": 2, "stickers": [
        {"id": "p", "placement": "world", "source": {"kind": "port"}, "handoff_overrides": ["opacity", "direction", "position", "position", None]},
        {"id": "f", "source": {"kind": "file", "filename": "a.png"}, "handoff_overrides": ["direction"]},
    ]})

    assert state["stickers"][0]["handoff_overrides"] == ["position", "opacity"]
    assert "handoff_overrides" not in state["stickers"][1]
    assert load_scene_state({"version": 2, "stickers": [{"id": "p", "source": {"kind": "port"}, "handoff_overrides": "size"}]})["stickers"][0]["handoff_overrides"] == []


@pytest.mark.parametrize("value", ["", 3, None, ["a"]])
def test_a_scene_id_is_a_non_empty_string_or_none(value):
    assert load_scene_state({"version": 2, "id": value})["id"] is None
    assert load_scene_state({"version": 2, "id": "scene_a"})["id"] == "scene_a"


def test_upstream_overrides_leave_out_invalid_fields_instead_of_defaulting_them():
    upstream = load_scene_state(read_fixture("v2_upstream"))["upstream"]

    assert [record["layer"] for record in upstream] == ["up_a", "up_c", "up_b"]
    overrides = upstream[0]["stickers"]
    # `locked: "yes"`, `roll: 5` and the world `position` of a sky Sticker are inherited, not set to defaults.
    assert list(overrides[0].keys()) == ["id", "placement", "clip", "visible", "crop", "direction", "z_index"]
    assert overrides[1] == {"id": "sticker_4", "placement": "world", "scale": {"value": 2.0, "keyframes": []}}
    assert upstream[0]["scene"] == {"visible": False, "clip": {"start": 0, "in": 0, "duration": 5}}
    assert "painting_visible" not in upstream[0]


def test_rebase_keeps_the_id_the_counter_and_the_upstream_records():
    state = load_scene_state(read_fixture("v2_upstream"))
    rebased = rebase_scene_state(state, 60.0)

    assert (rebased["id"], rebased["next_sticker_id"], rebased["upstream"]) == (state["id"], state["next_sticker_id"], state["upstream"])
    assert rebased["stickers"][1]["handoff_overrides"] == ["direction", "size", "opacity"]


def test_renumbering_skips_an_uncounted_id_the_counter_reaches():
    state = _counter([_file("sticker_9007199254740991"), _file("")], 1e300)

    assert [sticker["id"] for sticker in state["stickers"]] == ["sticker_9007199254740991", "sticker_9007199254740992"]
    assert state["next_sticker_id"] == 2**53 - 1
    assert load_scene_state(state) == state


@pytest.mark.parametrize("fps", [0, "30", None, -24.0])
def test_an_upstream_record_without_a_valid_fps_is_dropped(fps):
    record = {"layer": "up", "deleted": ["sticker_1"]}
    if fps is not None:
        record["fps"] = fps
    assert load_scene_state({"version": 2, "upstream": [record]})["upstream"] == []
