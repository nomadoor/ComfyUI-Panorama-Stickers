import json
import pytest

from comfyui_pano_suite.core.state import DEFAULT_STATE, merge_state, normalize_coverage, parse_sticker_state


def test_merge_state_handles_none_inputs():
    state = merge_state(None, None)

    assert state["version"] == 1
    assert state["projection_model"] == "pinhole_rectilinear"
    assert state["alpha_mode"] == "straight"
    assert state["output_preset"] == DEFAULT_STATE["output_preset"]
    assert state["coverage"] == DEFAULT_STATE["coverage"]
    assert state["bg_color"] == DEFAULT_STATE["bg_color"]
    assert isinstance(state["assets"], dict)
    assert isinstance(state["stickers"], list)
    assert isinstance(state["shots"], list)
    assert state["painting"]["version"] == 1
    assert state["painting"]["paint"]["strokes"] == []
    assert state["painting"]["mask"]["strokes"] == []
    assert isinstance(state["active"], dict)
    assert state["active"]["selected_sticker_id"] is None
    assert state["active"]["selected_shot_id"] is None


def test_merge_state_handles_empty_dict_inputs_and_fallbacks():
    state = merge_state("{}", "{}", fallback_preset=1024, fallback_bg="#112233")

    assert state["output_preset"] == 1024
    assert state["coverage"] == 360
    assert state["bg_color"] == "#112233"
    assert state["assets"] == {}
    assert state["stickers"] == []
    assert state["shots"] == []
    assert state["painting"]["paint"]["strokes"] == []
    assert state["painting"]["mask"]["strokes"] == []
    assert state["active"]["selected_sticker_id"] is None
    assert state["active"]["selected_shot_id"] is None


def test_merge_state_normalizes_invalid_container_types():
    internal = '{"assets":[],"stickers":{},"shots":"bad","active":[]}'
    state = merge_state(None, internal)

    assert state["assets"] == {}
    assert state["stickers"] == []
    assert state["shots"] == []
    assert state["active"]["selected_sticker_id"] is None
    assert state["active"]["selected_shot_id"] is None


def test_merge_state_fills_missing_active_keys():
    state = merge_state(None, '{"active":{"selected_sticker_id":"st_1"}}')

    assert state["active"]["selected_sticker_id"] == "st_1"
    assert state["active"]["selected_shot_id"] is None


def test_merge_state_normalizes_coverage():
    state_180 = merge_state(None, '{"coverage":180}')
    state_invalid = merge_state(None, '{"coverage":"weird"}')

    assert state_180["coverage"] == 180
    assert state_invalid["coverage"] == 360


def test_normalize_coverage_accepts_only_180_or_360():
    assert normalize_coverage(180) == 180
    assert normalize_coverage("180") == 180
    assert normalize_coverage(360) == 360
    assert normalize_coverage("360") == 360
    assert normalize_coverage("foo") == 360


def test_parse_sticker_state_reads_canonical_format():
    parsed = parse_sticker_state(
        '{"kind":"pano_sticker_state","version":1,"pose":{"yaw_deg":190,"pitch_deg":100,"roll_deg":15,"hFOV_deg":200},"source_aspect":1.5}'
    )

    assert parsed is not None
    assert parsed["yaw_deg"] == -170.0
    assert parsed["pitch_deg"] == 89.9
    assert parsed["roll_deg"] == 15.0
    assert parsed["hFOV_deg"] == 179.0
    assert parsed["source_aspect"] == 1.5


def test_parse_sticker_state_rejects_invalid_kind_or_version():
    assert parse_sticker_state('{"kind":"wrong","version":1,"pose":{"yaw_deg":0,"pitch_deg":0,"roll_deg":0,"hFOV_deg":30}}') is None
    assert parse_sticker_state('{"kind":"pano_sticker_state","version":2,"pose":{"yaw_deg":0,"pitch_deg":0,"roll_deg":0,"hFOV_deg":30}}') is None


def test_an_integer_too_long_for_python_falls_back_alone_and_keeps_the_rest_of_the_state():
    # Python's int() refuses more than 4300 digits; JSON.parse reads such a number as an infinity (an invalid value),
    # so only that field takes its default, as load_scene_state does (docs/scene-state-v2.md, 共通の規則).
    huge = "9" * 5000
    state = merge_state(None, '{"bg_color": "#123456", "coverage": ' + huge + '}')

    assert state["bg_color"] == "#123456"
    assert state["coverage"] == 360


def test_a_sticker_state_with_an_integer_too_long_for_python_is_still_read():
    huge = "9" * 5000
    text = ('{"kind": "pano_sticker_state", "version": 1, "extra": ' + huge + ', '
            '"pose": {"yaw_deg": 10, "pitch_deg": 5, "roll_deg": 0, "hFOV_deg": 30}}')

    assert parse_sticker_state(text) == {"yaw_deg": 10.0, "pitch_deg": 5.0, "roll_deg": 0.0, "hFOV_deg": 30.0}


@pytest.mark.parametrize("literal", ["NaN", "Infinity", "-Infinity"])
def test_a_state_with_a_nan_or_infinity_literal_is_not_json_as_in_json_parse(literal):
    # JSON.parse throws on these literals, so the text is not read at all (docs/scene-state-v2.md, 共通の規則).
    state = merge_state(None, '{"bg_color": "#123456", "coverage": ' + literal + '}')
    sticker = parse_sticker_state('{"kind": "pano_sticker_state", "version": 1, "extra": ' + literal + ', '
                                  '"pose": {"yaw_deg": 10, "pitch_deg": 5, "roll_deg": 0, "hFOV_deg": 30}}')

    assert state["bg_color"] == DEFAULT_STATE["bg_color"]
    assert sticker is None


def _red_png_data_url():
    import base64
    import io

    from PIL import Image

    buf = io.BytesIO()
    Image.new("RGBA", (4, 4), (255, 0, 0, 255)).save(buf, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("ascii")


@pytest.mark.parametrize("field", ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg", "z_index"])
def test_a_non_finite_legacy_sticker_value_takes_its_default_and_the_sticker_still_draws(field):
    # parse_json reads an integer too long for a double as an infinity (as JSON.parse does); the renderer reads the
    # field with its default instead of failing on it (docs/scene-state-v2.md, 共通の規則).
    from comfyui_pano_suite.core.stickers import render_stickers_to_rgba_erp

    huge = "9" * 5000
    sticker = {"id": "s", "asset_id": "a", "yaw_deg": 0, "pitch_deg": 0, "hFOV_deg": 40, "vFOV_deg": 40, "rot_deg": 0, "z_index": 0}
    text = json.dumps({"assets": {"a": {"type": "dataurl", "value": _red_png_data_url()}}, "stickers": [sticker]})
    text = text.replace(f'"{field}": {sticker[field]}', f'"{field}": {huge}')

    state = merge_state(None, text)
    canvas = render_stickers_to_rgba_erp(state, 64, 32)

    assert canvas[16, 32, 3] > 0.5


def test_a_non_finite_legacy_crop_and_shot_value_is_dropped_so_readers_use_their_default():
    huge = "9" * 5000
    state = merge_state(None, '{"stickers": [{"id": "s", "crop": {"x0": 0, "x1": ' + huge + '}}], '
                              '"shots": [{"id": "c", "yaw_deg": ' + huge + ', "pitch_deg": 5}]}')

    assert state["stickers"][0]["crop"] == {"x0": 0}
    assert state["shots"][0] == {"id": "c", "pitch_deg": 5}


@pytest.mark.parametrize("field", ["yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"])
def test_a_sticker_state_pose_with_an_infinite_value_is_not_read(field):
    # The clamps of pitch and hFOV used to turn an infinity into a finite edge before the finiteness check.
    pose = {"yaw_deg": 10, "pitch_deg": 5, "roll_deg": 0, "hFOV_deg": 30}
    text = json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": pose}).replace(
        f'"{field}": {pose[field]}', f'"{field}": 1e400')

    assert parse_sticker_state(text) is None
