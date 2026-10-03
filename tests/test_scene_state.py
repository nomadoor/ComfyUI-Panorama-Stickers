import json
import math
from pathlib import Path

import pytest

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import default_camera, load_scene_state, load_sticker_state, rebase_scene_state

FIXTURES = Path(__file__).resolve().parent / "fixtures" / "scene_state"

STATE_CASES = ["v2_canonical", "v1_stickers", "v1_cutout", "v2_invalid_fields", "v2_no_camera", "v2_erp_camera"]
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
    state = load_scene_state('{"version":2,"camera":{}}')
    assert state["camera"] == default_camera()
    assert default_camera()["projection"] == "perspective"
    assert default_camera()["aspect"] == 1.0


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
    assert list(state.keys()) == ["version", "timeline", "camera", "scene", "stickers", "painting", "painting_layer"]
    assert list(state["timeline"].keys()) == ["fps", "length"]
    assert list(state["camera"].keys()) == ["aspect", "projection", "position", "rotation", "fov"]
    assert list(state["scene"].keys()) == ["clip", "position", "rotation", "scale"]
    lanes = {"sky": ["direction", "roll", "size", "opacity", "z_index"], "world": ["position", "rotation", "scale", "opacity"]}
    for sticker in state["stickers"]:
        assert list(sticker.keys()) == ["id", "placement", "source", "clip", "visible", "locked", "crop", *lanes[sticker["placement"]]]


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
