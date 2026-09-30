#!/usr/bin/env python3
"""Time Stickers rendering on a static 100-frame IMAGE batch.

Run from the repository root with ComfyUI on PYTHONPATH:
    PYTHONPATH=/path/to/ComfyUI python tools/benchmark_legacy_stickers.py

Preview images, preview MP4 encoding, and host progress are swapped out, so only
rendering is timed and nothing is written to ComfyUI's temp directory. Every
entry in CANDIDATES is timed in turn within each round (ABAB) in this process.
"""
from __future__ import annotations

import argparse
import json
import platform
import sys
import time
from pathlib import Path

import torch
import torch.nn.functional as F

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from comfyui_pano_suite.nodes import PanoramaStickersNode, PanoramaStickersSceneNode
from tools.bake_legacy_goldens import ASSETS, ROTATED_POSE, _painting, _sticker, _stroke, build_background_erp, render_only_runtime


STATE_JSON = json.dumps({
    "assets": ASSETS,
    "stickers": [
        _sticker("rotated", "quadrants", 0, **ROTATED_POSE),
        _sticker("front", "disc", 1, yaw_deg=40.0, pitch_deg=10.0, hFOV_deg=40.0, vFOV_deg=40.0, rot_deg=0.0),
    ],
    "painting": _painting(paint=[
        _stroke("red", "paint", [(0.1, 0.3), (0.25, 0.35), (0.4, 0.3)], 10, {"r": 1.0, "g": 0.1, "b": 0.1, "a": 1.0}),
    ]),
})


def run_legacy(bg_erp: torch.Tensor) -> None:
    PanoramaStickersNode.execute(
        output_preset="auto",
        coverage="360",
        bg_color="#00ff00",
        state_json=STATE_JSON,
        bg_erp=bg_erp,
        fps=24.0,
    )


def run_new(bg_erp: torch.Tensor) -> None:
    PanoramaStickersSceneNode.execute(
        bg_color="#00ff00",
        coverage="360",
        output_preset="auto",
        state_json=STATE_JSON,
        bg_media=bg_erp,
    )


CANDIDATES = {"legacy": run_legacy, "new": run_new}


def _static_batch(frames: int, width: int) -> torch.Tensor:
    frame = F.interpolate(build_background_erp().permute(0, 3, 1, 2), size=(width // 2, width), mode="bilinear", align_corners=False)
    return frame.permute(0, 2, 3, 1).contiguous().expand(frames, -1, -1, -1).clone()


def _synchronize() -> None:
    if torch.cuda.is_available():
        torch.cuda.synchronize()


def _time_once(run, frames: int, width: int) -> float:
    # A fresh tensor per run keeps the node's background cache from being hit.
    bg_erp = _static_batch(frames, width)
    _synchronize()
    start = time.perf_counter()
    run(bg_erp)
    _synchronize()
    return time.perf_counter() - start


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--frames", type=int, default=100)
    parser.add_argument("--width", type=int, default=2048)
    parser.add_argument("--rounds", type=int, default=10)
    args = parser.parse_args()

    times = {name: [] for name in CANDIDATES}
    with render_only_runtime():
        for run in CANDIDATES.values():
            _time_once(run, args.frames, args.width)
        for _ in range(args.rounds):
            for name, run in CANDIDATES.items():
                times[name].append(_time_once(run, args.frames, args.width))

    device = torch.cuda.get_device_name(0) if torch.cuda.is_available() else "cpu"
    print(f"python {platform.python_version()}, torch {torch.__version__}, device {device}, cpu {platform.processor() or platform.machine()}")
    print(f"frames {args.frames}, output {args.width}x{args.width // 2}, rounds {args.rounds}")
    for name, values in times.items():
        print(f"{name}: min {min(values):.2f} s, runs {', '.join(f'{t:.2f}' for t in values)} s")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
