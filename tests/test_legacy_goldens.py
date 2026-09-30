import numpy as np
import pytest


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the legacy nodes",
)

from tools.bake_legacy_goldens import CASES, FIXTURE_DIR, ROTATED_POSE, _run_stickers, _sticker
from tools.golden_png import read_png16


MAX_MEAN_ABS_ERROR = 0.5 / 255.0
# The mean hides small local shifts, so also bound how many pixels may differ visibly.
PIXEL_ERROR_THRESHOLD = 8.0 / 255.0
MAX_DIFFERING_PIXEL_FRACTION = 0.001


def _golden_mismatch(actual: np.ndarray, expected: np.ndarray) -> str | None:
    if actual.shape != expected.shape:
        return f"shape {actual.shape} != {expected.shape}"
    error = np.abs(actual - expected)
    mean_error = float(np.mean(error))
    if mean_error > MAX_MEAN_ABS_ERROR:
        return f"mean abs error {mean_error * 255.0:.3f}/255"
    pixel_error = error.max(axis=-1) if error.ndim == 3 else error
    differing = float(np.mean(pixel_error > PIXEL_ERROR_THRESHOLD))
    if differing > MAX_DIFFERING_PIXEL_FRACTION:
        return f"{differing:.3%} of pixels differ by more than 8/255"
    return None


@pytest.mark.parametrize("name", CASES)
def test_legacy_node_output_matches_golden(name):
    image, mask = CASES[name]()

    assert _golden_mismatch(image, read_png16(FIXTURE_DIR / f"{name}.image.png")) is None
    assert _golden_mismatch(mask, read_png16(FIXTURE_DIR / f"{name}.mask.png")) is None


@pytest.mark.parametrize("yaw_offset, matches", [(0.0, True), (0.25, False), (1.0, False)])
def test_golden_comparison_detects_small_sticker_shifts(yaw_offset, matches):
    pose = dict(ROTATED_POSE, yaw_deg=ROTATED_POSE["yaw_deg"] + yaw_offset)
    image, _mask = _run_stickers("360", [_sticker("rotated", "quadrants", 0, **pose)])

    assert (_golden_mismatch(image, read_png16(FIXTURE_DIR / "stickers_sky_rotation.image.png")) is None) is matches
