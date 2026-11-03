"""The node draws a paint stroke on the sphere as the editor does (docs/render-contract.md "ペイントのストロークの描き方"):
the same path and stamp widths for the cases of tests/fixtures/paint_stroke_sphere.json
(JS: tests/pano_paint_stroke_sphere_parity.test.mjs)."""
import json
from pathlib import Path

import numpy as np
import pytest

from comfyui_pano_suite.core.painting import render_painting_to_erp, stamp_half_width_px, stroke_erp_path

FIXTURE = json.loads((Path(__file__).parent / "fixtures" / "paint_stroke_sphere.json").read_text(encoding="utf-8"))


@pytest.mark.parametrize("name", sorted(FIXTURE["paths"]))
def test_stroke_path_on_the_sphere(name):
    case = FIXTURE["paths"][name]
    points = [{"u": u, "v": v, "t": index} for index, (u, v) in enumerate(case["points"])]

    out = stroke_erp_path(points, case["radius_px"], case["width"], case["height"])

    assert len(out) == len(case["path"])
    assert [value for point in out for value in (point["u"], point["v"])] == pytest.approx(
        [value for point in case["path"] for value in point], abs=1e-6)


@pytest.mark.parametrize("name", sorted(FIXTURE["widths"]))
def test_stamp_half_width_on_the_sphere(name):
    case = FIXTURE["widths"][name]
    for v, rh in case["rows"]:
        assert stamp_half_width_px(case["rv"], case["aspect"], v, case["width"]) == pytest.approx(rh, abs=1e-6)


def _stroke(points, size=10):
    return {"id": "s", "actionGroupId": "g", "layerKind": "paint", "toolKind": "pen", "targetSpace": {"kind": "ERP_GLOBAL"},
            "size": size, "radiusValue": size * 0.5 / 2048, "opacity": 1, "color": {"r": 1, "g": 0, "b": 0, "a": 1},
            "geometry": {"geometryKind": "freehand_open", "points": points, "processedPoints": points}}


def test_a_stroke_away_from_the_equator_is_drawn_wider_across_by_one_over_the_cosine():
    width, height = 1024, 512
    # A dot at latitude 60°: twice as wide as tall.
    paint, _mask = render_painting_to_erp({"paint": {"strokes": [_stroke([{"u": 0.5, "v": 1 / 6}], size=40)]}}, width, height)
    rows, cols = np.nonzero(paint[..., 3] > 0.5)
    assert (cols.max() - cols.min() + 1) == pytest.approx(2 * (rows.max() - rows.min() + 1), rel=0.15)


def test_a_stroke_across_the_seam_gets_its_points_before_its_copies_and_shows_on_both_sides():
    width, height = 1024, 512
    paint, _mask = render_painting_to_erp({"paint": {"strokes": [_stroke([{"u": 0.97, "v": 0.15}, {"u": 0.06, "v": 0.1}])]}}, width, height)
    _rows, cols = np.nonzero(paint[..., 3] > 0.5)
    assert cols.min() == 0 and cols.max() == width - 1
    # Nothing in the middle of the ERP.
    assert not ((cols > 200) & (cols < 800)).any()
