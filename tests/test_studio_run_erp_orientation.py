"""Panorama Studio's node surface lays the run's output ERP back in World (web_src/pano_studio_status.js
`studioRunQuaternion` of the `rotation` the run returns with `pano_output_erp`, applied to the ERP dome in
pano_three_view.js): it must undo the Camera rotation the run shot the ERP with (core/render.py `_rays`), so that a
direction of the background shows where the background has it."""
import json
import math
import subprocess
import textwrap
from pathlib import Path

import numpy as np
import pytest
import torch

pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite.nodes import PanoramaStudioNode

REPO_ROOT = Path(__file__).resolve().parent.parent
# The ERP shader reads the dome's local direction p as the panorama direction S p, and three.js shows p at R p for
# the dome's rotation R; World (three.js, glTF) is S times the panorama convention (ADR 0023).
S = np.diag([1.0, 1.0, -1.0])

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { studioRunQuaternion } from "./web_src/pano_studio_status.js";
    import { quaternionToRotation } from "./web_src/pano_world.js";

    const rotations = JSON.parse(readFileSync(0, "utf8"));
    console.log(JSON.stringify(rotations.map((rotation) => quaternionToRotation(studioRunQuaternion(rotation)))));
    """
)


def _js_rotations(rotations):
    proc = subprocess.run(["node", "--input-type=module", "-e", JS_SCRIPT], cwd=REPO_ROOT, input=json.dumps(rotations),
                          text=True, capture_output=True, check=True)
    return [np.array(rotation) for rotation in json.loads(proc.stdout)]


def _direction(lon, lat):
    lon, lat = np.broadcast_arrays(lon, lat)
    return np.stack([np.cos(lat) * np.sin(lon), np.sin(lat), np.cos(lat) * np.cos(lon)], axis=-1)


def _erp_directions(height, width, coverage=360):
    """The panorama direction of each ERP pixel center (`ray_directions` without a Camera)."""
    lon = ((np.arange(width) + 0.5) / width - 0.5) * math.radians(coverage)
    lat = (0.5 - (np.arange(height) + 0.5) / height) * math.pi
    return _direction(lon[None, :], lat[:, None])


MARKER = _direction(math.radians(60.0), math.radians(20.0))


def _marker_erp(coverage):
    """A black ERP over `coverage` (bg_media takes the same coverage) with a white disc 5 degrees wide around MARKER."""
    inside = _erp_directions(256, 512 * coverage // 360, coverage) @ MARKER > math.cos(math.radians(5.0))
    return torch.from_numpy(np.repeat(inside[None, ..., None], 3, axis=-1).astype(np.float32))


def _camera(**rotation):
    return {"projection": "erp", "aspect": 1.0, "rotation": {"value": rotation}, "fov": {"value": 90.0}}


@pytest.mark.parametrize("coverage", ["360", "180"])
@pytest.mark.parametrize("state", [
    {"version": 2},
    {"version": 2, "camera": _camera(yaw_deg=30.0, pitch_deg=10.0, roll_deg=5.0)},
    {"version": 2, "camera": _camera(yaw_deg=50.0, pitch_deg=-15.0, roll_deg=60.0)},
    # A hidden Camera shoots as no Camera does.
    {"version": 2, "camera": {**_camera(yaw_deg=30.0, pitch_deg=10.0, roll_deg=5.0), "visible": False}},
], ids=["no-camera", "yaw30-pitch10-roll5", "yaw50-pitch-15-roll60", "hidden-camera"])
def test_the_surface_lays_the_output_erp_back_where_the_background_has_it(state, coverage):
    result = PanoramaStudioNode.execute(state_json=json.dumps(state), bg_color="#000000", coverage=coverage,
                                        output_size="1024", bg_media=_marker_erp(int(coverage)))
    output = result.result[0][0].numpy()
    # Where the marker landed in the output, as a direction in the output ERP's own frame.
    weight = output.mean(axis=-1)
    assert weight.sum() > 0
    local = (_erp_directions(*weight.shape, int(coverage)) * weight[..., None]).sum(axis=(0, 1))
    local /= np.linalg.norm(local)
    (entry,) = result.ui["pano_output_erp"]
    (rotation,) = _js_rotations([entry["rotation"]])

    shown = S @ rotation @ S @ local
    assert math.degrees(math.acos(float(np.clip(shown @ MARKER, -1.0, 1.0)))) < 0.5


def test_the_output_erp_carries_the_camera_rotation_at_frame_0_or_none():
    keyed = {**_camera(), "rotation": {"value": {"yaw_deg": 0.0}, "keyframes": [
        {"frame": 0, "value": {"yaw_deg": 20.0, "pitch_deg": 5.0, "roll_deg": -3.0}, "easing": [0, 0, 1, 1]},
        {"frame": 4, "value": {"yaw_deg": 80.0, "pitch_deg": 0.0, "roll_deg": 0.0}}]}}
    rotations = [
        PanoramaStudioNode.execute(state_json=json.dumps(state), bg_color="#000000", coverage="360", output_size="1024").ui["pano_output_erp"][0]["rotation"]
        for state in ({"version": 2}, {"version": 2, "camera": {**_camera(yaw_deg=30.0), "visible": False}}, {"version": 2, "camera": keyed})
    ]

    assert rotations == [None, None, {"yaw_deg": 20.0, "pitch_deg": 5.0, "roll_deg": -3.0}]
