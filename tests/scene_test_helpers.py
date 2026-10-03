"""Helpers shared by several test modules (Stickers, Cutout, SPLAT, MESH, and the 3D Sticker tests). Import this
after the module's `pytest.importorskip` of the ComfyUI core."""
import json
import struct
from pathlib import Path

import numpy as np
import torch

import folder_paths
from comfy_api.latest import Types
from comfy_extras.nodes_gaussian_splat import _C0

from comfyui_pano_suite.nodes import PanoramaCutoutSceneNode


def temp_entry_path(entry) -> Path:
    """The file of a `ui` entry in ComfyUI's temp directory."""
    assert entry["type"] == "temp"
    return Path(folder_paths.get_temp_directory()) / entry["subfolder"] / entry["filename"]


def glb_accessor(path: Path, accessor_of) -> np.ndarray:
    data = path.read_bytes()
    json_length = struct.unpack_from("<I", data, 12)[0]
    gltf = json.loads(data[20:20 + json_length])
    accessor = gltf["accessors"][accessor_of(gltf["meshes"][0]["primitives"][0])]
    view = gltf["bufferViews"][accessor["bufferView"]]
    offset = 20 + json_length + 8 + view.get("byteOffset", 0) + accessor.get("byteOffset", 0)
    dtype = {5125: np.uint32, 5126: np.float32}[accessor["componentType"]]
    width = {"SCALAR": 1, "VEC3": 3}[accessor["type"]]
    return np.frombuffer(data, dtype, accessor["count"] * width, offset)


def glb_positions(path: Path) -> np.ndarray:
    return glb_accessor(path, lambda primitive: primitive["attributes"]["POSITION"]).reshape(-1, 3)


def splat_of(positions, scales, opacities, colors, seed=0):
    """A SPLAT (3DGS frame: Y down, Z forward) of gaussians with random rotations and base colors."""
    count = positions.shape[0]
    rotations = torch.randn((count, 4), generator=torch.Generator().manual_seed(seed))
    rotations = rotations / rotations.norm(dim=-1, keepdim=True)
    sh = ((colors - 0.5) / _C0)[:, None, :]
    return Types.SPLAT(positions[None], scales[None], rotations[None], opacities.reshape(1, -1, 1), sh[None])


def blob(center, color, opacity=1.0, size=0.3):
    """One round gaussian."""
    return (torch.tensor([center], dtype=torch.float32), torch.full((1, 3), size), torch.tensor([opacity]), torch.tensor([color], dtype=torch.float32))


def blobs(*parts):
    """A one-item SPLAT of `blob`s."""
    return splat_of(*(torch.cat(values) for values in zip(*parts)))


def red_at_center(image, scale):
    """The frame index of a red Sticker (red (i + 1) / `scale`) at the middle of each output frame, where a
    Sticker with the default pose is drawn, or None where it is not drawn."""
    indices = []
    for frame in image:
        red, green, blue = (float(value) for value in frame[frame.shape[0] // 2, frame.shape[1] // 2])
        indices.append(round(red * scale) - 1 if red > 0.03 and green < 0.02 and blue < 0.02 else None)
    return indices


def batch_index_at_center(image):
    return red_at_center(image, 10)


def cutout(source, state=None, **inputs):
    """The outputs of the new Cutout node."""
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_megapixels", 0.01)
    state_json = state if isinstance(state, str) else ("" if state is None else json.dumps(state))
    return PanoramaCutoutSceneNode.execute(source=source, state_json=state_json, **inputs).result


def cutout_frames(result):
    """Every Cutout output frame, as GetVideoComponents reads them from the `video` output."""
    return result[3].get_components().images


def cutout_camera(keyframes=None, fps=24.0, position=None, hFOV_deg=None, **rotation):
    """A Cutout state; `keyframes` maps Camera Lanes to their Keyframes."""
    keyframes = keyframes or {}
    values = {"position": position, "rotation": rotation, "fov": hFOV_deg}
    camera = {name: {"value": value, "keyframes": keyframes.get(name, [])} for name, value in values.items()}
    return {"version": 2, "timeline": {"fps": fps}, "camera": {"aspect": 1.0, **camera}}


def center(image, index=0):
    return image[index, image.shape[1] // 2, image.shape[2] // 2]
