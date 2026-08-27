import numpy as np

from comfyui_pano_suite.core.display_layers import (
    build_remaining_flat_painting_state,
    compose_display_list_to_erp,
    compose_display_list_to_overlay_rgba,
    should_use_uploaded_group_layers,
)


def test_remaining_flat_paint_keeps_only_legacy_and_unknown_groups():
    painting = {
        "groups": [{"actionGroupId": "known"}],
        "paint": {
            "strokes": [
                {"actionGroupId": "known", "toolKind": "brush"},
                {"actionGroupId": "known", "toolKind": "eraser"},
                {"actionGroupId": "missing", "toolKind": "brush"},
                {"toolKind": "brush"},
            ],
        },
    }

    remainder = build_remaining_flat_painting_state(painting)

    assert remainder == {
        "paint": {
            "strokes": [
                {"actionGroupId": "missing", "toolKind": "brush"},
                {"toolKind": "brush"},
            ],
        },
        "mask": {"strokes": []},
        "groups": [],
        "raster_objects": [],
    }


def test_overlay_composition_uses_uploaded_group_layer_and_reports_stats():
    group_layer = np.zeros((1, 2, 4), dtype=np.float32)
    group_layer[..., 0] = 1.0
    group_layer[..., 3] = 0.5
    state = {
        "painting": {
            "groups": [{"actionGroupId": "g1", "z_index": 3}],
            "paint": {"strokes": []},
            "raster_objects": [],
        },
    }

    canvas, used, stats = compose_display_list_to_overlay_rgba(
        state,
        2,
        1,
        painting_payload={"groups": {"g1": group_layer}},
    )

    assert used is True
    np.testing.assert_allclose(canvas, group_layer)
    assert stats["entries"] == 1
    assert stats["stroke_groups"] == 1
    assert stats["group_payload_hits"] == 1
    assert stats["group_fallback_renders"] == 0


def test_rgb_composition_applies_uploaded_group_layer_without_mutating_shape():
    base = np.zeros((1, 2, 3), dtype=np.float32)
    group_layer = np.zeros((1, 2, 4), dtype=np.float32)
    group_layer[..., 1] = 1.0
    group_layer[..., 3] = 0.25
    state = {
        "painting": {
            "groups": [{"actionGroupId": "g1", "z_index": 0}],
            "raster_objects": [],
        },
    }

    canvas, used, stats = compose_display_list_to_erp(
        state,
        base,
        painting_payload={"groups": {"g1": group_layer}},
    )

    assert canvas.shape == base.shape
    assert used is True
    np.testing.assert_allclose(canvas[..., 1], 0.25)
    assert stats["entries"] == 1
    assert stats["stroke_groups"] == 1


def test_uploaded_group_layers_require_complete_groups_and_no_rasters():
    state = {
        "painting": {
            "groups": [{"actionGroupId": "g1"}, {"actionGroupId": "g2"}],
            "raster_objects": [],
        },
    }

    assert should_use_uploaded_group_layers(state, {"groups": {"g1": object()}}) is False
    assert should_use_uploaded_group_layers(
        state,
        {"groups": {"g1": object(), "g2": object()}},
    ) is True

    state["painting"]["raster_objects"] = [{"layerKind": "paint"}]
    assert should_use_uploaded_group_layers(
        state,
        {"groups": {"g1": object(), "g2": object()}},
    ) is False
