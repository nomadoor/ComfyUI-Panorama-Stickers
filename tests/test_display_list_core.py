import numpy as np

from comfyui_pano_suite.core.display_list import (
    alpha_composite_over_rgba,
    build_display_entries,
)


def test_display_entries_preserve_stable_cross_type_order_and_filter_invalid_items():
    sticker = {"id": "sticker", "z_index": 1.9}
    group = {"id": "group", "actionGroupId": "action", "z_index": "1"}
    raster = {"id": "raster", "type": "raster_frozen", "layerKind": "paint", "z_index": 1}
    state = {
        "stickers": [None, sticker],
        "painting": {
            "groups": ["invalid", group],
            "raster_objects": [
                {"id": "mask", "layerKind": "mask", "z_index": -10},
                raster,
            ],
        },
    }

    assert build_display_entries(state) == (
        {"type": "sticker", "z_index": 1, "item": sticker},
        {"type": "strokeGroup", "z_index": 1, "actionGroupId": "action"},
        {"type": "rasterObject", "z_index": 1, "item": raster},
    )


def test_straight_alpha_composition_mutates_and_returns_the_destination():
    base = np.asarray([[[0.0, 0.0, 1.0, 0.5]]], dtype=np.float32)
    overlay = np.asarray([[[1.0, 0.0, 0.0, 0.5]]], dtype=np.float32)

    result = alpha_composite_over_rgba(base, overlay)

    assert result is base
    np.testing.assert_allclose(result, [[[(2.0 / 3.0), 0.0, (1.0 / 3.0), 0.75]]], atol=1e-6)


def test_alpha_composition_ignores_transparent_invalid_and_mismatched_overlays():
    base = np.ones((2, 2, 4), dtype=np.float32)
    original = base.copy()

    assert alpha_composite_over_rgba(base, np.zeros((2, 2, 4), dtype=np.float32)) is base
    assert alpha_composite_over_rgba(base, np.zeros((2, 2, 3), dtype=np.float32)) is base
    assert alpha_composite_over_rgba(base, np.zeros((1, 2, 4), dtype=np.float32)) is base
    np.testing.assert_array_equal(base, original)
