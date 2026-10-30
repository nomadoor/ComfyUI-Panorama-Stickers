import json
import shutil
import subprocess
import textwrap
from copy import deepcopy
from pathlib import Path

import pytest

from comfyui_pano_suite.core.scene_inherit import apply_upstream_overrides
from comfyui_pano_suite.core.scene_state import SKY_STICKER_LANES, WORLD_STICKER_LANES, load_scene_state, rebase_scene_state, rebase_upstream_record
from test_scene_state_parity import assert_parity

REPO_ROOT = Path(__file__).resolve().parent.parent
FIXTURES = REPO_ROOT / "tests" / "fixtures" / "scene_inherit"
CASES = ["lanes", "delete", "placement_mismatch", "fps_rebase", "layer_anchor", "chained", "chained_anchor"]

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState } from "./web_src/pano_scene_state.js";
    import { applyUpstreamOverrides } from "./web_src/pano_scene_inherit.js";

    const out = {};
    for (const name of JSON.parse(readFileSync(0, "utf8"))) {
      const fixture = JSON.parse(readFileSync(`tests/fixtures/scene_inherit/${name}.json`, "utf8"));
      const records = fixture.records.map((raw) => loadSceneState({ version: 2, upstream: [raw] }).upstream[0]);
      out[name] = records.reduce(applyUpstreamOverrides, loadSceneState(fixture.layer));
    }
    console.log(JSON.stringify(out));
    """
)


def fixture(name):
    return json.loads((FIXTURES / f"{name}.json").read_text(encoding="utf-8"))


def record(raw):
    return load_scene_state({"version": 2, "upstream": [raw]})["upstream"][0]


def apply_all(case):
    state = load_scene_state(case["layer"])
    for raw in case["records"]:
        state = apply_upstream_overrides(state, record(raw))
    return state


@pytest.mark.parametrize("name", CASES)
def test_the_fixture_records_give_the_expected_normalized_state(name):
    case = fixture(name)
    result = apply_all(case)
    assert result == load_scene_state(case["expected"])
    assert load_scene_state(result) == result


def test_overridden_lanes_replace_whole_lanes_and_the_other_lanes_follow_the_layer():
    case = fixture("lanes")
    layer = load_scene_state(case["layer"])
    result = apply_upstream_overrides(layer, record(case["records"][0]))
    sticker = result["stickers"][0]
    assert sticker["direction"]["keyframes"] == [{"frame": 3, "value": {"yaw_deg": -20.0, "pitch_deg": 5.0}, "easing": "auto"}]
    assert sticker["roll"] is layer["stickers"][0]["roll"]
    assert sticker["size"] is layer["stickers"][0]["size"]
    assert result["stickers"][2] is layer["stickers"][2]
    # A change upstream reaches the Lanes the record does not override.
    layer["stickers"][0]["roll"] = {"value": 99.0, "keyframes": []}
    assert apply_upstream_overrides(layer, record(case["records"][0]))["stickers"][0]["roll"]["value"] == 99.0


def test_deleted_stickers_are_removed_and_the_result_has_no_records_of_its_own():
    case = fixture("delete")
    result = apply_all(case)
    assert [sticker["id"] for sticker in result["stickers"]] == ["sticker_1", "sticker_4"]
    assert result["upstream"] == []
    assert result["id"] == "scene_a"


def test_an_override_for_the_other_placement_does_not_apply():
    case = fixture("placement_mismatch")
    layer = load_scene_state(case["layer"])
    assert apply_upstream_overrides(layer, record(case["records"][0])) is layer


def test_a_record_of_another_fps_is_rebased_to_the_layer_fps():
    case = fixture("fps_rebase")
    layer = load_scene_state(case["layer"])
    raw = record(case["records"][0])
    result = apply_all(case)
    assert result["timeline"]["fps"] == 24.0
    # The overridden Clip range's origin (start - in = 6 at 30 fps) is 4.8 at 24 fps: Keyframes follow its rounding.
    assert result["stickers"][0]["clip"] == {"start": 8, "in": 3, "duration": 16}
    assert [key["frame"] for key in result["stickers"][0]["direction"]["keyframes"]] == [0, 5]
    assert [key["frame"] for key in result["stickers"][1]["rotation"]["keyframes"]] == [1, 2, 12]
    assert rebase_upstream_record(raw, layer)["fps"] == 24.0
    assert rebase_upstream_record(raw, {**layer, "timeline": {**layer["timeline"], "fps": 30.0}}) == raw


def test_lane_keyframes_without_a_clip_override_are_relative_to_the_layer_sticker_origin():
    # The layer Sticker's origin is frame 7 at 24 fps, frame 9 at 30 fps: 9 + 3 at 30 fps is 7 + 3 at 24 fps.
    result = apply_all(fixture("layer_anchor"))
    assert result["stickers"][0]["roll"]["keyframes"][0]["frame"] == 3
    # In a chain, the origin is the one the earlier record's Clip range override gave.
    assert apply_all(fixture("chained_anchor"))["stickers"][0]["roll"]["keyframes"][0]["frame"] == 3


@pytest.mark.parametrize("fps", [24.0, 30000 / 1001, 30.0, 60.0, 120.0, 1000.0])
def test_lanes_written_back_unchanged_from_an_editor_at_the_same_or_a_higher_fps_do_not_move(fps):
    layer = load_scene_state({
        "version": 2,
        "id": "scene_a",
        "timeline": {"fps": 24},
        "stickers": [
            {"id": "sticker_1", "placement": "sky", "source": {"kind": "file", "filename": "a.png"}, "clip": {"start": 8, "in": 1},
             "roll": {"keyframes": [{"frame": f, "value": f} for f in (0, 1, 2, 3, 5, 13, 41)]}},
            {"id": "sticker_2", "placement": "world", "source": {"kind": "file", "filename": "b.png"}, "clip": {"start": 17, "in": 6, "duration": 50},
             "opacity": {"keyframes": [{"frame": f, "value": 0.5} for f in (-3, 0, 1, 7, 11, 100)]}},
        ],
    })
    editor = rebase_scene_state(layer, fps)
    overrides = [
        {"id": sticker["id"], "placement": sticker["placement"], **{name: sticker[name] for name, _ in (WORLD_STICKER_LANES if sticker["placement"] == "world" else SKY_STICKER_LANES)}}
        for sticker in editor["stickers"]
    ]
    result = apply_upstream_overrides(layer, record({"layer": "scene_a", "fps": fps, "stickers": overrides}))
    assert result == layer


def test_the_inputs_are_not_changed():
    for name in CASES:
        case = fixture(name)
        layer = load_scene_state(case["layer"])
        records = [record(raw) for raw in case["records"]]
        before = deepcopy((layer, records))
        for item in records:
            apply_upstream_overrides(layer, item)
        assert (layer, records) == before


def test_no_record_or_a_record_of_another_layer_returns_the_layer_itself():
    layer = load_scene_state(fixture("lanes")["layer"])
    assert apply_upstream_overrides(layer, None) is layer
    assert apply_upstream_overrides(layer, record({"layer": "scene_b", "fps": 24, "deleted": ["sticker_1"]})) is layer
    assert apply_upstream_overrides(layer, record({"layer": "scene_a", "fps": 24, "deleted": ["sticker_9"]})) is layer
    unnamed = load_scene_state({"version": 2, "stickers": [{"source": {"kind": "port"}}]})
    assert apply_upstream_overrides(unnamed, record({"layer": "scene_a", "fps": 24, "deleted": ["sticker_1"]})) is unnamed


def test_chained_records_apply_in_order_and_the_later_record_wins():
    case = fixture("chained")
    layer = load_scene_state(case["layer"])
    first = apply_upstream_overrides(layer, record(case["records"][0]))
    assert [sticker["id"] for sticker in first["stickers"]] == ["sticker_1", "sticker_3"]
    assert first["stickers"][0]["roll"]["value"] == 10.0
    second = apply_upstream_overrides(first, record(case["records"][1]))
    assert second["stickers"][0]["roll"] == {"value": 20.0, "keyframes": [{"frame": 10, "value": 20.0, "easing": [0.42, 0.0, 0.58, 1.0]}]}
    assert second["stickers"][0]["opacity"]["value"] == 0.5
    assert second["painting_visible"] is False


@pytest.fixture(scope="module")
def js_out():
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", JS_SCRIPT],
        cwd=REPO_ROOT,
        input=json.dumps(CASES),
        text=True,
        capture_output=True,
        check=True,
    )
    return json.loads(proc.stdout)


@pytest.mark.parametrize("name", CASES)
def test_js_application_matches_python(js_out, name):
    assert_parity(apply_all(fixture(name)), js_out[name])
