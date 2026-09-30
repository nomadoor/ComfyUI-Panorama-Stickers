import json
import math
from pathlib import Path

import pytest

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state, load_sticker_state

FIXTURES = Path(__file__).resolve().parent / "fixtures" / "scene_state"

STATE_CASES = ["v2_canonical", "v1_stickers", "v1_cutout", "v2_invalid_fields"]
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
    assert [type(k["frame"]) for k in state["camera"]["transform"]["keyframes"]] == [int, int]
    assert type(state["stickers"][0]["clip"]["in"]) is int


def test_empty_state_is_default_v2():
    state = load_scene_state("")
    assert state == load_scene_state(None) == load_scene_state("  ")
    assert state["version"] == 2
    assert state["stickers"] == []
    assert state["camera"]["transform"]["keyframes"] == []


def test_state_without_version_is_read_as_v1():
    state = load_scene_state('{"shots":[{"yaw_deg":30,"hFOV_deg":90,"vFOV_deg":90}]}')
    assert state["version"] == 2
    assert state["camera"]["transform"]["value"]["yaw_deg"] == 30.0
    assert state["camera"]["aspect"] == pytest.approx(1.0)


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
    assert list(state["camera"].keys()) == ["aspect", "transform"]
    assert list(state["scene"].keys()) == ["clip", "transform"]
    for sticker in state["stickers"]:
        assert list(sticker.keys()) == ["id", "placement", "source", "clip", "visible", "locked", "crop", "transform", "opacity"]


@pytest.mark.parametrize("name", STICKER_STATE_CASES)
def test_load_sticker_state_matches_fixture(name):
    assert_close(load_sticker_state(read_fixture(name)), json.loads(read_fixture(f"{name}.v2")))


@pytest.mark.parametrize("text", [None, "", "{bad", '{"kind":"other","version":2}', '{"kind":"pano_sticker_state","version":1,"pose":{}}'])
def test_load_sticker_state_ignores_non_sticker_state(text):
    assert load_sticker_state(text) is None


def test_load_sticker_state_rejects_unknown_version():
    with pytest.raises(ValueError, match="sticker_state version 3"):
        load_sticker_state('{"kind":"pano_sticker_state","version":3}')


def test_sticker_state_v2_without_camera_gets_one_default_keyframe():
    parsed = load_sticker_state('{"kind":"pano_sticker_state","version":2,"camera":[]}')
    assert parsed["camera"] == [{
        "frame": 0,
        "value": {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 90.0},
        "easing": "auto",
    }]


def test_evaluate_canonical_state_matches_fixture():
    state = load_scene_state(read_fixture("v2_canonical"))
    expected = json.loads(read_fixture("v2_canonical.eval"))
    assert_close([evaluate_scene_state(state, case["frame"]) for case in expected], expected)


def test_evaluate_returns_static_values_without_keyframes():
    state = load_scene_state(read_fixture("v1_stickers"))
    out = evaluate_scene_state(state, 3.25)
    assert out["camera"] == {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 90.0, "aspect": 1.0}
    assert [s["active"] for s in out["stickers"]] == [False, True, True]
    assert out["stickers"][0]["yaw_deg"] == 190.0


def test_evaluate_result_does_not_alias_state():
    state = load_scene_state(read_fixture("v2_canonical"))
    out = evaluate_scene_state(state, 0.0)
    out["camera"]["position"][0] = 99.0
    assert state["camera"]["transform"]["keyframes"][0]["value"]["position"][0] == 0.0


def _cut_state():
    return load_scene_state({
        "version": 2,
        "timeline": {"fps": 30000 / 1001},
        "camera": {"transform": {"keyframes": [
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
    assert parsed["camera"][0]["value"] == {"position": [0.0, 0.0, 0.0], "yaw_deg": -170.0, "pitch_deg": -89.9, "roll_deg": 2.0, "hFOV_deg": 30.0}
    assert parsed["source_aspect"] == 1.5
    assert load_sticker_state('{"kind":"pano_sticker_state","version":1,"pose":{"yaw_deg":"","pitch_deg":0,"roll_deg":0,"hFOV_deg":30}}') is None
    assert load_sticker_state('{"kind":"pano_sticker_state","version":1,"pose":{"yaw_deg":true,"pitch_deg":0,"roll_deg":0,"hFOV_deg":30}}') is None


def test_clip_range_edges_use_frame_epsilon():
    state = load_scene_state(read_fixture("v2_canonical"))
    active = lambda frame: evaluate_scene_state(state, frame)["stickers"][0]["active"]
    assert active(10.0 - 1e-7)
    assert not active(10.0 - 1e-5)
    assert active(50.0 - 1e-5)
    assert not active(50.0 - 1e-7)
