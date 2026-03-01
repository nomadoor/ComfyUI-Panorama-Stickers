from comfyui_pano_suite.core.state import DEFAULT_STATE, merge_state


def test_merge_state_handles_none_inputs():
    state = merge_state(None, None)

    assert state["version"] == 1
    assert state["projection_model"] == "pinhole_rectilinear"
    assert state["alpha_mode"] == "straight"
    assert state["output_preset"] == DEFAULT_STATE["output_preset"]
    assert state["bg_color"] == DEFAULT_STATE["bg_color"]
    assert isinstance(state["assets"], dict)
    assert isinstance(state["stickers"], list)
    assert isinstance(state["shots"], list)
    assert isinstance(state["active"], dict)
    assert state["active"]["selected_sticker_id"] is None
    assert state["active"]["selected_shot_id"] is None


def test_merge_state_handles_empty_dict_inputs_and_fallbacks():
    state = merge_state("{}", "{}", fallback_preset=1024, fallback_bg="#112233")

    assert state["output_preset"] == 1024
    assert state["bg_color"] == "#112233"
    assert state["assets"] == {}
    assert state["stickers"] == []
    assert state["shots"] == []
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
