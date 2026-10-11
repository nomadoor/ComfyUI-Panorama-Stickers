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
