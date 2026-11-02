"""The node places a paint raster object on an ERP as the editor does (docs/render-contract.md "ペイントのラスタの置き方"),
for the cases of tests/fixtures/paint_raster_place.json (JS: tests/pano_paint_raster_place_parity.test.mjs)."""
import base64
import io
import json
from pathlib import Path

import numpy as np
import pytest
from PIL import Image

from comfyui_pano_suite.core.painting import (
    raster_object_corners_uv,
    raster_object_pixel_ranges,
    raster_object_placement,
    render_painting_to_erp,
)

CASES = json.loads((Path(__file__).parent / "fixtures" / "paint_raster_place.json").read_text(encoding="utf-8"))["cases"]


@pytest.mark.parametrize("name", sorted(CASES))
def test_raster_object_is_placed_as_the_editor_places_it(name):
    case = CASES[name]
    item, width, height = case["item"], case["width"], case["height"]

    placement = raster_object_placement(item, width, height)

    expected = case["placement"]
    for key, field in (("centerX", "center_x"), ("centerY", "center_y"), ("width", "width"), ("height", "height"),
                       ("rotationDeg", "rotation_deg"), ("scale", "scale")):
        assert placement[field] == pytest.approx(expected[key], abs=1e-4), key
    assert placement["matrix"] == pytest.approx(expected["matrix"], abs=1e-4)
    corners = raster_object_corners_uv(item)
    assert len(corners) == 4
    assert [value for corner in corners for value in corner] == pytest.approx([value for corner in case["corners"] for value in corner], abs=1e-4)
    assert [list(r) for r in raster_object_pixel_ranges(item, width, height)] == case["ranges"]


def _png(width, height, rgba=(255, 0, 0, 255)):
    buffer = io.BytesIO()
    Image.new("RGBA", (width, height), rgba).save(buffer, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buffer.getvalue()).decode("ascii")


def _raster(bbox, transform, data_url):
    return {"id": "r1", "type": "raster_frozen", "layerKind": "paint", "rasterDataUrl": data_url, "bbox": bbox,
            "transform": transform, "z_index": 0}


def test_a_quarter_turned_raster_draws_its_pixels_inside_the_frame_its_corners_make():
    width, height = 400, 200
    # 0.1 of u by 0.1 of v: 40 x 20 px, standing 20 x 40 px once turned.
    item = _raster({"u0": 0.3, "v0": 0.4, "u1": 0.4, "v1": 0.5}, {"du": 0, "dv": 0, "rot_deg": 90, "scale": 1}, _png(40, 20))

    paint, _mask = render_painting_to_erp({"paint": {"strokes": []}, "raster_objects": [item]}, width, height)

    corners = raster_object_corners_uv(item)
    xs = [u * width for u, _ in corners]
    ys = [v * height for _, v in corners]
    rows, cols = np.nonzero(paint[..., 3] > 0.5)
    assert len(rows)
    assert cols.min() >= min(xs) - 1 and cols.max() + 1 <= max(xs) + 1
    assert rows.min() >= min(ys) - 1 and rows.max() + 1 <= max(ys) + 1
    # It stands: 20 px wide and 40 px tall.
    assert cols.max() - cols.min() + 1 == pytest.approx(20, abs=1)
    assert rows.max() - rows.min() + 1 == pytest.approx(40, abs=1)


def test_a_scaled_raster_draws_at_the_size_the_editor_draws():
    width, height = 400, 200
    item = _raster({"u0": 0.45, "v0": 0.45, "u1": 0.55, "v1": 0.55}, {"du": 0, "dv": 0, "rot_deg": 0, "scale": 2}, _png(40, 20))

    paint, _mask = render_painting_to_erp({"paint": {"strokes": []}, "raster_objects": [item]}, width, height)

    rows, cols = np.nonzero(paint[..., 3] > 0.5)
    # 40 x 20 px scaled 2 about its center (200, 100).
    assert (cols.min(), cols.max() + 1, rows.min(), rows.max() + 1) == (160, 240, 80, 120)
    assert paint[100, 200, :4].tolist() == pytest.approx([1, 0, 0, 1])


def test_a_raster_across_the_seam_draws_on_both_sides():
    width, height = 400, 200
    item = _raster({"u0": 0.0, "v0": 0.4, "u1": 0.1, "v1": 0.5}, {"du": 0.95, "dv": 0, "rot_deg": 0, "scale": 1}, _png(40, 20))

    paint, _mask = render_painting_to_erp({"paint": {"strokes": []}, "raster_objects": [item]}, width, height)

    _rows, cols = np.nonzero(paint[..., 3] > 0.5)
    assert sorted(set(cols.tolist())) == list(range(0, 20)) + list(range(380, 400))
