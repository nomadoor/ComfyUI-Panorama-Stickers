import pytest

from comfyui_pano_suite.core.paint_state import normalize_painting_state
from comfyui_pano_suite.core.painting import render_painting_to_erp
from comfyui_pano_suite.core.scene_state import load_scene_state


def test_normalize_painting_state_splits_layers_and_geometry():
    state = normalize_painting_state({
        "version": 1,
        "paint": {
            "strokes": [{
                "id": "paint_1",
                "actionGroupId": "ag_1",
                "targetSpace": {"kind": "ERP_GLOBAL"},
                "layerKind": "paint",
                "toolKind": "lasso_fill",
                "brushPresetId": "brush_soft",
                "color": {"r": 1.0, "g": 0.5, "b": 0.25, "a": 0.8},
                "size": 12,
                "opacity": 0.7,
                "hardness": 0.5,
                "flow": 0.3,
                "spacing": 0.2,
                "createdAt": 123,
                "geometry": {
                    "geometryKind": "lasso_fill",
                    "points": [
                        {"u": 0.1, "v": 0.2, "t": 0},
                        {"u": 0.2, "v": 0.25, "t": 1},
                        {"u": 0.18, "v": 0.3, "t": 2},
                    ],
                },
            }],
        },
        "mask": {
            "strokes": [{
                "id": "mask_1",
                "actionGroupId": "ag_2",
                "targetSpace": {"kind": "ERP_GLOBAL"},
                "layerKind": "mask",
                "toolKind": "pen",
                "size": 8,
                "opacity": 1.0,
                "hardness": None,
                "flow": None,
                "spacing": None,
                "createdAt": 456,
                "geometry": {
                    "geometryKind": "freehand_open",
                    "points": [
                        {"u": 0.3, "v": 0.4, "t": 0},
                        {"u": 0.5, "v": 0.4, "t": 1},
                    ],
                },
            }],
        },
    })

    assert state["paint"]["strokes"][0]["geometry"]["geometryKind"] == "lasso_fill"
    assert state["mask"]["strokes"][0]["geometry"]["geometryKind"] == "freehand_open"
    assert state["mask"]["strokes"][0]["color"] is None
    assert state["mask"]["strokes"][0]["targetSpace"] == {"kind": "ERP_GLOBAL"}


def test_normalize_painting_state_rejects_unknown_target_space_and_bad_coords():
    state = normalize_painting_state({
        "paint": {
            "strokes": [{
                "id": "bad_paint",
                "actionGroupId": "ag_1",
                "targetSpace": {"kind": "ERP_GLOBAL"},
                "layerKind": "paint",
                "toolKind": "pen",
                "color": {"r": 1.0, "g": 1.0, "b": 1.0, "a": 1.0},
                "size": 4,
                "opacity": 1.0,
                "createdAt": 0,
                "geometry": {
                    "geometryKind": "freehand_open",
                    # ERP_GLOBAL target but points use x/y instead of u/v → rejected
                    "points": [{"x": 10, "y": 20, "t": 0}],
                },
            }],
        },
        "mask": {"strokes": []},
    })

    assert state["paint"]["strokes"] == []
    assert state["mask"]["strokes"] == []


def test_normalize_painting_state_preserves_frame_local_target_space_and_points():
    state = normalize_painting_state({
        "mask": {
            "strokes": [{
                "id": "frame_mask",
                "actionGroupId": "ag_2",
                "targetSpace": {"kind": "FRAME_LOCAL", "frameId": "frame_a"},
                "layerKind": "mask",
                "toolKind": "pen",
                "size": 4,
                "opacity": 1.0,
                "createdAt": 0,
                "geometry": {
                    "geometryKind": "freehand_open",
                    "points": [{
                        "u": 1.25,
                        "v": -0.5,
                        "t": 0,
                        "targetKind": "FRAME_LOCAL",
                        "frameId": "frame_a",
                        "widthScale": 1.5,
                        "pressureLike": 0.25,
                    }],
                },
            }],
        },
    })

    stroke = state["mask"]["strokes"][0]
    point = stroke["geometry"]["points"][0]
    assert stroke["targetSpace"] == {"kind": "FRAME_LOCAL", "frameId": "frame_a"}
    assert point["targetKind"] == "FRAME_LOCAL"
    assert point["frameId"] == "frame_a"
    assert point["u"] == 1.25
    assert point["v"] == -0.5
    assert point["widthScale"] == 1.5
    assert point["pressureLike"] == 0.25


def test_normalize_painting_state_preserves_raster_object_fractional_z_index():
    state = normalize_painting_state({
        "raster_objects": [{
            "id": "rast_1",
            "type": "raster_frozen",
            "layerKind": "paint",
            "z_index": 4.125,
            "bbox": {"u0": 0.1, "v0": 0.2, "u1": 0.3, "v1": 0.4},
            "rasterDataUrl": "data:image/png;base64,AAAA",
            "transform": {"du": 0.0, "dv": 0.0, "rot_deg": 0.0, "scale": 1.0},
        }],
    })

    assert state["raster_objects"][0]["z_index"] == 4.125


def test_normalize_painting_state_rejects_raster_bbox_that_collapses_after_clamp():
    state = normalize_painting_state({
        "raster_objects": [{
            "id": "rast_bad_bbox",
            "type": "raster_frozen",
            "layerKind": "paint",
            "z_index": 1,
            "bbox": {"u0": 1.1, "v0": 0.2, "u1": 1.2, "v1": 0.6},
            "rasterDataUrl": "data:image/png;base64,AAAA",
            "transform": {"du": 0.0, "dv": 0.0, "rot_deg": 0.0, "scale": 1.0},
        }],
    })

    assert state["raster_objects"] == []


@pytest.mark.parametrize("digits", [400, 5000])
def test_integers_too_large_for_a_double_fall_back_and_the_painting_still_draws(digits):
    # JSON.parse reads such an integer as an infinity, which is invalid, so the field takes its default: a group's
    # z_index its place among the groups, a stroke's createdAt 0. Python keeps them as exact integers unless told.
    huge = "9" * digits
    painting = ('{"version": 1, "groups": [{"id": "g", "actionGroupId": "ag", "z_index": 0}, '
                '{"id": "h", "actionGroupId": "ah", "z_index": ' + huge + '}], '
                '"paint": {"strokes": [{"id": "s", "actionGroupId": "ah", "targetSpace": {"kind": "ERP_GLOBAL"}, "layerKind": "paint", '
                '"toolKind": "pen", "color": {"r": 1, "g": 0, "b": 0, "a": 1}, "size": 8, "opacity": 1, "createdAt": ' + huge + ', '
                '"geometry": {"geometryKind": "freehand_open", "points": [{"u": 0.5, "v": 0.5, "t": 0}, {"u": 0.6, "v": 0.5, "t": 1}]}}]}}')

    state = load_scene_state('{"version": 2, "painting": ' + painting + '}')["painting"]
    paint, _mask = render_painting_to_erp(state, 64, 32)

    assert [group["z_index"] for group in state["groups"]] == [0, 1]
    assert state["paint"]["strokes"][0]["createdAt"] == 0
    assert paint[16, 35, 3] > 0
