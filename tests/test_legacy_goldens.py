import json
import subprocess
from pathlib import Path

import numpy as np
import pytest


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the legacy nodes",
)

from comfyui_pano_suite.core.cutout import build_cutout_sampling_map
from comfyui_pano_suite.core.math import dir_to_lon_lat, lon_lat_to_erp, sample_erp_bilinear
from tools.bake_legacy_goldens import (
    BG_HEIGHT,
    BG_WIDTH,
    CASES,
    CUTOUT_SHOT,
    FIXTURE_DIR,
    ROTATED_POSE,
    _run_stickers,
    _sticker,
    build_background_erp,
)
from tools.golden_png import read_png16


REPO_ROOT = Path(__file__).resolve().parent.parent
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


def test_baking_a_case_writes_nothing_to_the_comfyui_temp_directory(tmp_path):
    # conftest points ComfyUI's temp directory at tmp_path; render_only_runtime must keep it empty.
    CASES["stickers_paint_interleaved"]()

    assert list(tmp_path.rglob("*")) == []


# Editor canvases of several widths, so both width- and height-limited gates are covered.
CANVAS_SIZES = [(500, 700), (900, 600), (1600, 600)]


def _editor_frame_view_rays(out_w: int, out_h: int) -> np.ndarray:
    """Pano directions the editor's Frame view draws at the centers of the output pixels in its gate."""
    script = f"""
      import {{ PerspectiveCamera, Vector3 }} from "three";
      import {{ fitFocalPx, gateRectFromFocal }} from "./web_src/pano_cutout_view_math.js";
      import {{ frameViewContext, shotCamera }} from "./web_src/pano_editor_view.js";
      import {{ applyViewportCamera }} from "./web_src/pano_three_view.js";
      import {{ worldToPano }} from "./web_src/pano_world.js";

      const shot = {json.dumps(CUTOUT_SHOT)};
      const [outW, outH] = [{out_w}, {out_h}];
      const camera = new PerspectiveCamera();
      const result = {json.dumps(CANVAS_SIZES)}.map(([width, height]) => {{
        const safeRect = {{ x: 24, y: 24, w: width - 48, h: height - 48 }};
        const gate = gateRectFromFocal(safeRect, shot, fitFocalPx(safeRect, shot));
        const {{ rect, shot: contextShot }} = frameViewContext(shot, gate, {{ width, height }});
        applyViewportCamera(camera, shotCamera(contextShot));
        const rays = [];
        for (let j = 0; j < outH; j += 1) {{
          for (let i = 0; i < outW; i += 1) {{
            const x = gate.x + (i + 0.5) / outW * gate.w;
            const y = gate.y + (j + 0.5) / outH * gate.h;
            const ndc = new Vector3((x - rect.x) / rect.w * 2 - 1, 1 - (y - rect.y) / rect.h * 2, 0.5);
            const d = worldToPano(ndc.unproject(camera).sub(camera.position).normalize());
            rays.push(d.x, d.y, d.z);
          }}
        }}
        return rays;
      }});
      process.stdout.write(JSON.stringify(result));
    """
    completed = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        cwd=REPO_ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    assert completed.returncode == 0, completed.stderr
    return np.asarray(json.loads(completed.stdout), dtype=np.float64).reshape(len(CANVAS_SIZES), out_h, out_w, 3)


def test_editor_frame_view_shows_the_cutout_node_output_of_the_golden():
    expected = read_png16(FIXTURE_DIR / "cutout_single_shot.image.png")
    out_h, out_w = expected.shape[:2]
    backend = build_cutout_sampling_map(
        (BG_HEIGHT, BG_WIDTH),
        CUTOUT_SHOT["yaw_deg"],
        CUTOUT_SHOT["pitch_deg"],
        CUTOUT_SHOT["hFOV_deg"],
        CUTOUT_SHOT["vFOV_deg"],
        CUTOUT_SHOT["roll_deg"],
        out_w,
        out_h,
    )
    erp = build_background_erp()[0].numpy()

    for rays in _editor_frame_view_rays(out_w, out_h):
        lon, lat = dir_to_lon_lat(rays)
        u, v = lon_lat_to_erp(lon, lat, BG_WIDTH, BG_HEIGHT)
        du = np.abs(u - backend["u"])
        du = np.minimum(du, BG_WIDTH - du)
        assert float(du.max()) < 1e-3
        assert float(np.abs(v - backend["v"]).max()) < 1e-3
        shown = sample_erp_bilinear(erp, u.astype(np.float32), v.astype(np.float32))
        assert _golden_mismatch(shown, expected) is None
