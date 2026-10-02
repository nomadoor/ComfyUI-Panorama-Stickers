import base64
import io

import numpy as np
import pytest
from PIL import Image

from comfyui_pano_suite.core.painting import alpha_composite_over_rgb, render_painting_to_erp


def _png_data_url(rgba: np.ndarray) -> str:
    image = Image.fromarray(rgba.astype(np.uint8), "RGBA")
    buf = io.BytesIO()
    image.save(buf, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("ascii")


def test_render_painting_to_erp_returns_independent_paint_and_mask():
    painting = {
        "version": 1,
        "paint": {
            "strokes": [{
                "id": "paint_1",
                "actionGroupId": "ag_1",
                "targetSpace": {"kind": "ERP_GLOBAL"},
                "layerKind": "paint",
                "toolKind": "pen",
                "brushPresetId": None,
                "color": {"r": 1.0, "g": 0.0, "b": 0.0, "a": 1.0},
                "size": 8,
                "opacity": 1.0,
                "hardness": None,
                "flow": None,
                "spacing": None,
                "createdAt": 0,
                "geometry": {
                    "geometryKind": "freehand_open",
                    "points": [{"u": 0.1, "v": 0.2, "t": 0}, {"u": 0.3, "v": 0.2, "t": 1}],
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
                "brushPresetId": None,
                "color": None,
                "size": 20,
                "opacity": 1.0,
                "hardness": None,
                "flow": None,
                "spacing": None,
                "createdAt": 1,
                "geometry": {
                    "geometryKind": "freehand_open",
                    "points": [{"u": 0.6, "v": 0.3, "t": 0}, {"u": 0.8, "v": 0.3, "t": 1}],
                },
            }],
        },
    }

    paint_rgba, mask_bw = render_painting_to_erp(painting, 256, 128)

    assert paint_rgba.shape == (128, 256, 4)
    assert mask_bw.shape == (128, 256)
    assert float(np.max(paint_rgba[..., 3])) > 0.0
    assert float(np.max(mask_bw)) > 0.0

    base = np.zeros((128, 256, 3), dtype=np.float32)
    composited = alpha_composite_over_rgb(base, paint_rgba)
    assert composited.shape == base.shape
    assert float(np.max(composited[..., 0])) > 0.0
    assert float(np.max(composited[..., 1])) < 1e-6


def test_render_painting_to_erp_composites_raster_objects():
    rgba = np.zeros((16, 16, 4), dtype=np.uint8)
    rgba[..., 1] = 255
    rgba[..., 3] = 255
    painting = {
        "version": 1,
        "paint": {"strokes": []},
        "mask": {"strokes": []},
        "raster_objects": [{
            "id": "rast_1",
            "type": "raster_frozen",
            "layerKind": "paint",
            "z_index": 0,
            "bbox": {"u0": 0.25, "v0": 0.25, "u1": 0.5, "v1": 0.5},
            "rasterDataUrl": _png_data_url(rgba),
            "transform": {"du": 0.0, "dv": 0.0, "rot_deg": 0.0, "scale": 1.0},
        }],
    }

    paint_rgba, mask_bw = render_painting_to_erp(painting, 128, 64)

    assert paint_rgba.shape == (64, 128, 4)
    assert float(np.max(mask_bw)) == 0.0
    assert float(np.max(paint_rgba[..., 1])) > 0.9
    alpha_nonzero = np.argwhere(paint_rgba[..., 3] > 0.5)
    assert alpha_nonzero.size > 0
    min_y, min_x = alpha_nonzero.min(axis=0)
    max_y, max_x = alpha_nonzero.max(axis=0)
    assert 14 <= min_x <= 36
    assert 10 <= min_y <= 22
    assert 40 <= max_x <= 68
    assert 18 <= max_y <= 38


def test_render_painting_to_erp_respects_mixed_stroke_and_raster_z_order():
    rgba = np.zeros((16, 16, 4), dtype=np.uint8)
    rgba[..., 1] = 255
    rgba[..., 3] = 255
    painting = {
        "version": 1,
        "groups": [{
            "id": "group_1",
            "type": "strokeGroup",
            "actionGroupId": "ag_top",
            "z_index": 2,
        }],
        "paint": {
            "strokes": [{
                "id": "paint_top",
                "actionGroupId": "ag_top",
                "targetSpace": {"kind": "ERP_GLOBAL"},
                "layerKind": "paint",
                "toolKind": "pen",
                "brushPresetId": None,
                "color": {"r": 1.0, "g": 0.0, "b": 0.0, "a": 1.0},
                "size": 32,
                "opacity": 1.0,
                "hardness": None,
                "flow": None,
                "spacing": None,
                "createdAt": 0,
                "geometry": {
                    "geometryKind": "freehand_open",
                    "points": [{"u": 0.3, "v": 0.35, "t": 0}, {"u": 0.45, "v": 0.35, "t": 1}],
                },
            }],
        },
        "mask": {"strokes": []},
        "raster_objects": [{
            "id": "rast_bottom",
            "type": "raster_frozen",
            "layerKind": "paint",
            "z_index": 1,
            "bbox": {"u0": 0.25, "v0": 0.25, "u1": 0.5, "v1": 0.5},
            "rasterDataUrl": _png_data_url(rgba),
            "transform": {"du": 0.0, "dv": 0.0, "rot_deg": 0.0, "scale": 1.0},
        }],
    }

    paint_rgba, _ = render_painting_to_erp(painting, 128, 64)

    sample = paint_rgba[22, 48]
    assert sample[3] > 0.5
    assert sample[0] > sample[1]


def _mask_painting(geometry_kind: str, points: list[tuple[float, float]], width: int, height: int) -> dict:
    """A painting with one mask stroke through `points`, given in ERP pixels (u * width, v * height)."""
    return {"version": 1, "paint": {"strokes": []}, "groups": [], "mask": {"strokes": [{
        "id": "m", "actionGroupId": "ag_m", "targetSpace": {"kind": "ERP_GLOBAL"}, "layerKind": "mask",
        "toolKind": "lasso_fill" if geometry_kind == "lasso_fill" else "pen", "size": 6, "color": None, "opacity": 1.0, "createdAt": 0,
        "geometry": {"geometryKind": geometry_kind, "points": [{"u": x / width, "v": y / height, "t": t} for t, (x, y) in enumerate(points)]},
    }]}}


def _centroid(mask: np.ndarray) -> tuple[float, float]:
    rows, columns = np.mgrid[0:mask.shape[0], 0:mask.shape[1]] + 0.5
    return float((mask * columns).sum() / mask.sum()), float((mask * rows).sum() / mask.sum())


@pytest.mark.parametrize("geometry_kind,shape", [
    ("freehand_open", [(0.0, 0.0), (1e-6, 0.0)]),
    ("lasso_fill", [(-5.0, -4.0), (5.0, -4.0), (5.0, 4.0), (-5.0, 4.0)]),
])
def test_paint_lands_on_pixel_centers_like_stickers_and_the_background(geometry_kind, shape):
    # Point (x, y) is where ERP pixel (i, j) is, with i + 0.5 = x, as the editor and the Sticker and background
    # sampling place it. Snapping to whole pixels is off by at most half a pixel, and by nothing on average.
    width, height = 64, 32
    errors = []
    for step in range(8):
        x, y = 30.0 + (step + 0.5) / 8, 15.0 + (7.5 - step) / 8
        mask = render_painting_to_erp(_mask_painting(geometry_kind, [(x + dx, y + dy) for dx, dy in shape], width, height), width, height)[1]
        found = _centroid(mask)
        errors += [found[0] - x, found[1] - y]
    assert max(abs(error) for error in errors) < 0.5
    assert abs(sum(errors) / len(errors)) < 1e-6
