"""Python reads `painting` as the editor's normalizePaintingState does, for the cases of
tests/fixtures/painting_normalize.json (JS: tests/pano_paint_state_parity.test.mjs)."""
import json
from pathlib import Path

import pytest

from comfyui_pano_suite.core.paint_state import normalize_painting_state

CASES = json.loads((Path(__file__).parent / "fixtures" / "painting_normalize.json").read_text(encoding="utf-8"))["cases"]


@pytest.mark.parametrize("name", sorted(CASES))
def test_painting_version_and_z_index_are_read_as_the_editor_reads_them(name):
    case = CASES[name]

    painting = normalize_painting_state(case["painting"])

    assert painting["version"] == case["expected"]["version"]
    assert [group["z_index"] for group in painting["groups"]] == case["expected"]["group_z_index"]
    assert [item["z_index"] for item in painting["raster_objects"]] == case["expected"].get("raster_z_index", [])


BRUSH = json.loads((Path(__file__).parent / "fixtures" / "paint_stroke_brush.json").read_text(encoding="utf-8"))


@pytest.mark.parametrize("name", sorted(BRUSH["cases"]))
def test_stroke_brush_values_are_kept_as_the_editor_keeps_them(name):
    case = BRUSH["cases"][name]
    stroke = {**BRUSH["stroke"], **case["brush"]}
    layer = stroke["layerKind"]

    painting = normalize_painting_state({layer: {"strokes": [stroke]}})

    [out] = painting[layer]["strokes"]
    assert {key: out[key] for key in BRUSH["brush_keys"] if key in out} == case["expected"]


NUMBERS = json.loads((Path(__file__).parent / "fixtures" / "painting_numbers.json").read_text(encoding="utf-8"))


def _numbers_case_painting(case):
    painting, part = _numbers_case_patched(case)
    drop = case.get("drop", {})
    items = painting["raster_objects"] if part == "raster_objects" else painting["paint"]["strokes"]
    targets = {"stroke": items[0], "raster": items[0]}
    if part == "raster_objects":
        targets.update(bbox=items[0]["bbox"], transform=items[0]["transform"])
    else:
        targets.update(point=items[0]["geometry"]["points"][0], color=items[0]["color"])
    for name, keys in drop.items():
        for key in keys:
            targets[name].pop(key)
    return painting, part


def _numbers_case_patched(case):
    if any(part in case or part in case.get("drop", {}) for part in ("raster", "bbox", "transform")):
        raster = {**NUMBERS["raster"], **case.get("raster", {})}
        raster["bbox"] = {**raster["bbox"], **case.get("bbox", {})}
        raster["transform"] = {**raster["transform"], **case.get("transform", {})}
        return {"raster_objects": [raster]}, "raster_objects"
    stroke = {**NUMBERS["stroke"], **case.get("stroke", {})}
    stroke["color"] = {**stroke["color"], **case.get("color", {})}
    points = [dict(point) for point in stroke["geometry"]["points"]]
    points[0].update(case.get("point", {}))
    stroke["geometry"] = {**stroke["geometry"], "points": points}
    return {"paint": {"strokes": [stroke]}}, "paint"


@pytest.mark.parametrize("name", sorted(NUMBERS["cases"]))
def test_painting_numbers_are_read_as_the_editor_reads_them(name):
    case = NUMBERS["cases"][name]
    painting, part = _numbers_case_painting(case)

    out = normalize_painting_state(painting)

    items = out["raster_objects"] if part == "raster_objects" else out["paint"]["strokes"]
    if case["expected"] is None:
        assert items == []
        return
    [item] = items
    actual = {key: item["geometry"]["points"][0] if key == "point" else item[key] for key in case["expected"]}
    assert actual == case["expected"]
