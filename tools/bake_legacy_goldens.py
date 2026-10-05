#!/usr/bin/env python3
"""Bake golden images from the legacy PanoramaStickers and PanoramaCutout nodes, and from Panorama Studio where
its output differs from the legacy one on purpose (`STUDIO_CASES`).

Run from the repository root with ComfyUI on PYTHONPATH, optionally naming the cases to bake:
    PYTHONPATH=/path/to/ComfyUI python tools/bake_legacy_goldens.py [case ...]
"""
from __future__ import annotations

import base64
import io
import json
import sys
from contextlib import contextmanager
from pathlib import Path

import numpy as np
import torch
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from comfyui_pano_suite import nodes
from comfyui_pano_suite.node_runtime import NodeRuntime
from comfyui_pano_suite.nodes import PanoramaCutoutNode, PanoramaStickersNode, PanoramaStudioNode
from tools.golden_png import write_png16


FIXTURE_DIR = ROOT / "tests" / "fixtures" / "legacy_goldens"
BG_WIDTH = 512
BG_HEIGHT = 256
CUTOUT_SHOT = {"id": "shot_1", "yaw_deg": 30.0, "pitch_deg": 10.0, "roll_deg": 15.0, "hFOV_deg": 90.0, "vFOV_deg": 60.0}
ROTATED_POSE = {"yaw_deg": 172.0, "pitch_deg": 20.0, "hFOV_deg": 50.0, "vFOV_deg": 38.0, "rot_deg": 30.0}


@contextmanager
def render_only_runtime():
    """Run the nodes without preview images, preview MP4 encoding, or host progress.

    Those paths write into ComfyUI's temp directory and are not part of the rendered output.
    """
    host_runtime = nodes.NODE_RUNTIME
    nodes.NODE_RUNTIME = NodeRuntime()
    try:
        yield
    finally:
        nodes.NODE_RUNTIME = host_runtime


def build_background_erp() -> torch.Tensor:
    """Synthetic 8-bit ERP with a lon/lat grid and colored seam/equator/pole markers."""
    u = (np.arange(BG_WIDTH, dtype=np.float32) + 0.5) / BG_WIDTH
    v = (np.arange(BG_HEIGHT, dtype=np.float32) + 0.5) / BG_HEIGHT
    uu, vv = np.meshgrid(u, v)
    rgb = np.stack([0.1 + 0.7 * uu, 0.1 + 0.7 * (1.0 - vv), 0.45 + 0.2 * np.sin(uu * 10.0 * np.pi)], axis=-1)
    rgb[(np.mod(uu * 24.0, 1.0) < 0.06)] = (1.0, 0.9, 0.2)
    rgb[(np.mod(vv * 12.0, 1.0) < 0.06)] = (0.1, 0.9, 1.0)
    rgb[np.abs(vv - 0.5) < 0.004] = (1.0, 1.0, 1.0)
    rgb[(uu < 0.01) | (uu > 0.99)] = (1.0, 0.0, 0.0)
    rgb[vv < 0.03] = (0.0, 0.0, 0.0)
    rgb8 = np.round(np.clip(rgb, 0.0, 1.0) * 255.0) / 255.0
    return torch.from_numpy(rgb8.astype(np.float32))[None]


def _png_data_url(rgba: np.ndarray) -> str:
    buf = io.BytesIO()
    Image.fromarray(np.round(rgba * 255.0).astype(np.uint8), "RGBA").save(buf, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("ascii")


def _quadrant_sticker() -> np.ndarray:
    """Opaque 64x48 sticker with distinct quadrants and a diagonal so rotation and crop are visible."""
    rgba = np.ones((48, 64, 4), dtype=np.float32)
    rgba[:24, :32, :3] = (1.0, 0.2, 0.2)
    rgba[:24, 32:, :3] = (0.2, 1.0, 0.2)
    rgba[24:, :32, :3] = (0.2, 0.2, 1.0)
    rgba[24:, 32:, :3] = (1.0, 1.0, 0.2)
    ys, xs = np.mgrid[0:48, 0:64]
    rgba[np.abs(xs * 48 - ys * 64) < 64, :3] = 0.0
    return rgba


def _soft_disc_sticker() -> np.ndarray:
    """48x48 magenta disc whose alpha falls off toward the rim."""
    ys, xs = np.mgrid[0:48, 0:48].astype(np.float32)
    radius = np.hypot(xs - 23.5, ys - 23.5) / 24.0
    rgba = np.zeros((48, 48, 4), dtype=np.float32)
    rgba[..., :3] = (0.9, 0.1, 0.8)
    rgba[..., 3] = np.clip(1.2 - radius, 0.0, 1.0)
    return rgba


ASSETS = {
    "quadrants": {"type": "dataurl", "value": _png_data_url(_quadrant_sticker())},
    "disc": {"type": "dataurl", "value": _png_data_url(_soft_disc_sticker())},
}


def _sticker(sticker_id: str, asset_id: str, z_index: int, **pose) -> dict:
    return {"id": sticker_id, "asset_id": asset_id, "z_index": z_index, "visible": True, **pose}


def _stroke(stroke_id: str, layer_kind: str, points: list[tuple[float, float]], size: float, color=None) -> dict:
    return {
        "id": stroke_id,
        "actionGroupId": f"ag_{stroke_id}",
        "targetSpace": {"kind": "ERP_GLOBAL"},
        "layerKind": layer_kind,
        "toolKind": "pen",
        "color": color,
        "size": size,
        "opacity": 1.0,
        "createdAt": 0,
        "geometry": {
            "geometryKind": "freehand_open",
            "points": [{"u": u, "v": v, "t": index} for index, (u, v) in enumerate(points)],
        },
    }


def _painting(paint=(), mask=(), groups=()) -> dict:
    return {"version": 1, "paint": {"strokes": list(paint)}, "mask": {"strokes": list(mask)}, "groups": list(groups)}


def _group(stroke_id: str, z_index: int) -> dict:
    return {"id": f"group_{stroke_id}", "type": "strokeGroup", "actionGroupId": f"ag_{stroke_id}", "z_index": z_index}


def _run_stickers(coverage: str, stickers=(), painting=None):
    state = {"assets": ASSETS, "stickers": list(stickers)}
    if painting is not None:
        state["painting"] = painting
    with render_only_runtime():
        result = PanoramaStickersNode.execute(
            output_preset="auto",
            coverage=coverage,
            bg_color="#00ff00",
            state_json=json.dumps(state),
            bg_erp=build_background_erp(),
        ).result
    return result[0][0].numpy(), result[1][0].numpy()


def _run_cutout(shot: dict):
    with render_only_runtime():
        result = PanoramaCutoutNode.execute(
            erp_image=build_background_erp(),
            coverage="360",
            state_json=json.dumps({"shots": [shot]}),
            output_megapixels=0.03,
        ).result
    return result[0][0].numpy(), result[2][0].numpy()


# The size of the Camera output of `studio_camera_single_shot`, the legacy Cutout's `cutout_single_shot` at
# output_megapixels 0.03. output_size does not give it, so the golden is shot at this size.
STUDIO_SHOT_SIZE = (224, 128)


@contextmanager
def studio_shot_size(size: tuple[int, int]):
    """Panorama Studio with its Camera output at `size`, whatever output_size gives."""
    output_size = nodes._studio_output_size
    nodes._studio_output_size = lambda *_args, **_kwargs: (*size, None)
    try:
        yield
    finally:
        nodes._studio_output_size = output_size


def _run_studio_shot(shot: dict):
    """The legacy Cutout case's shot (a v1 state, read as its Camera) and background through Panorama Studio."""
    with render_only_runtime(), studio_shot_size(STUDIO_SHOT_SIZE):
        result = PanoramaStudioNode.execute(
            bg_color="#000000", coverage="360", output_size="1024", state_json=json.dumps({"shots": [shot]}), bg_media=build_background_erp(),
        ).result
    return result[0][0].numpy(), result[1][0].numpy()


# sky Stickers are the legacy direction-only stickers (yaw/pitch/FOV on the sphere).
CASES = {
    "stickers_background_only": lambda: _run_stickers("360"),
    "stickers_sky_rotation": lambda: _run_stickers("360", [
        _sticker("rotated", "quadrants", 0, **ROTATED_POSE),
    ]),
    "stickers_sky_crop": lambda: _run_stickers("360", [
        _sticker("cropped", "quadrants", 0, yaw_deg=-60.0, pitch_deg=-10.0, hFOV_deg=60.0, vFOV_deg=40.0, rot_deg=0.0,
                 crop={"x0": 0.2, "y0": 0.1, "x1": 0.8, "y1": 0.7}),
    ]),
    "stickers_sky_overlap": lambda: _run_stickers("360", [
        _sticker("front", "disc", 2, yaw_deg=40.0, pitch_deg=10.0, hFOV_deg=40.0, vFOV_deg=40.0, rot_deg=0.0),
        _sticker("back", "quadrants", 1, yaw_deg=25.0, pitch_deg=0.0, hFOV_deg=50.0, vFOV_deg=38.0, rot_deg=-15.0),
    ]),
    "stickers_paint": lambda: _run_stickers("360", painting=_painting(paint=[
        _stroke("red", "paint", [(0.1, 0.3), (0.25, 0.35), (0.4, 0.3)], 10, {"r": 1.0, "g": 0.1, "b": 0.1, "a": 1.0}),
        _stroke("blue", "paint", [(0.6, 0.7), (0.7, 0.55), (0.9, 0.6)], 6, {"r": 0.1, "g": 0.2, "b": 1.0, "a": 0.7}),
    ])),
    "stickers_paint_mask": lambda: _run_stickers("360", painting=_painting(mask=[
        _stroke("mask", "mask", [(0.3, 0.5), (0.5, 0.45), (0.7, 0.5)], 20),
    ])),
    # Stroke group z=0 under the Sticker (z=1), another group z=2 over it.
    "stickers_paint_interleaved": lambda: _run_stickers("360", [
        _sticker("middle", "quadrants", 1, yaw_deg=0.0, pitch_deg=0.0, hFOV_deg=60.0, vFOV_deg=45.0, rot_deg=0.0),
    ], painting=_painting(paint=[
        _stroke("under", "paint", [(0.35, 0.45), (0.5, 0.5), (0.65, 0.55)], 14, {"r": 1.0, "g": 0.1, "b": 0.1, "a": 1.0}),
        _stroke("over", "paint", [(0.35, 0.55), (0.5, 0.5), (0.65, 0.45)], 8, {"r": 0.1, "g": 0.2, "b": 1.0, "a": 0.8}),
    ], groups=[_group("under", 0), _group("over", 2)])),
    "stickers_coverage_180": lambda: _run_stickers("180", [
        _sticker("front", "quadrants", 0, yaw_deg=45.0, pitch_deg=15.0, hFOV_deg=40.0, vFOV_deg=30.0, rot_deg=10.0),
    ]),
    "cutout_single_shot": lambda: _run_cutout(CUTOUT_SHOT),
}

def _run_studio(coverage: str, stickers=(), painting=None):
    """A legacy Stickers case's v1 state (without a Camera) and background through Panorama Studio."""
    state = {"assets": ASSETS, "stickers": list(stickers)}
    if painting is not None:
        state["painting"] = painting
    with render_only_runtime():
        result = PanoramaStudioNode.execute(
            bg_color="#00ff00", coverage=coverage, output_size="auto", state_json=json.dumps(state), bg_media=build_background_erp(),
        ).result
    # The outputs need not be contiguous (a 180 one is not); the PNG writer needs contiguous rows.
    return np.ascontiguousarray(result[0][0].numpy()), np.ascontiguousarray(result[1][0].numpy())


def _on_studio(name: str):
    """The legacy Stickers case `name` run through Panorama Studio instead of the legacy node."""
    def run():
        global _run_stickers
        legacy = _run_stickers
        _run_stickers = _run_studio
        try:
            return CASES[name]()
        finally:
            _run_stickers = legacy

    return run


# The legacy Stickers cases whose Panorama Studio output differs on purpose, with the name of Studio's golden: it
# draws a sky Sticker's edge pixels covered in part (the legacy one cuts them), and a 180 output samples the Sticker
# at the output's pixels instead of from a 360 ERP as wide as the output (`docs/legacy-baselines.md`).
STUDIO_GOLDENS = {
    name: name.replace("stickers_", "studio_", 1)
    for name in ("stickers_sky_rotation", "stickers_sky_crop", "stickers_sky_overlap", "stickers_paint_interleaved", "stickers_coverage_180")
}

# Studio's Camera samples at pixel centers with square pixels, so it does not reproduce `cutout_single_shot`.
STUDIO_CASES = {
    "studio_camera_single_shot": lambda: _run_studio_shot(CUTOUT_SHOT),
    **{studio: _on_studio(name) for name, studio in STUDIO_GOLDENS.items()},
}


def studio_golden(name: str) -> str:
    """The golden Panorama Studio's output (without a Camera) of the legacy Stickers case `name` is compared with."""
    return STUDIO_GOLDENS.get(name, name)


def main(names: list[str]) -> int:
    FIXTURE_DIR.mkdir(parents=True, exist_ok=True)
    cases = {**CASES, **STUDIO_CASES}
    for name in names or cases:
        image, mask = cases[name]()
        write_png16(FIXTURE_DIR / f"{name}.image.png", image)
        write_png16(FIXTURE_DIR / f"{name}.mask.png", mask)
        print(f"{name}: image {image.shape[1]}x{image.shape[0]}, mask max {float(mask.max()):.3f}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
