"""Helpers shared by several test modules (Panorama Studio, SPLAT, MESH, and the 3D Sticker tests). Import this
after the module's `pytest.importorskip` of the ComfyUI core."""
import json
import math
import struct
from pathlib import Path

import numpy as np
import torch

import folder_paths
from comfy_api.latest import Types
from comfy_extras.nodes_gaussian_splat import _C0

from comfyui_pano_suite.nodes import PanoramaStudioNode, PanoSceneValue


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


def triangle_glb(extensions_used=(), extensions_required=(), quantized=False) -> bytes:
    """A GLB of one triangle (corners (0, 0, 0), (1, 0, 0), (0, 1, 0)) whose JSON lists the given extensions. Its
    positions are float32, or with `quantized` normalized int16 as KHR_mesh_quantization allows."""
    corners = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0]])
    data = (corners * 32767).astype(np.int16).tobytes() if quantized else corners.astype(np.float32).tobytes()
    data += b"\0" * (-len(data) % 4)
    accessor = {"bufferView": 0, "componentType": 5122 if quantized else 5126, "count": 3, "type": "VEC3", "min": [0, 0, 0], "max": [1, 1, 0]}
    if quantized:
        accessor["normalized"] = True
    gltf = {"asset": {"version": "2.0"}, "scene": 0, "scenes": [{"nodes": [0]}], "nodes": [{"mesh": 0}],
            "meshes": [{"primitives": [{"attributes": {"POSITION": 0}}]}], "accessors": [accessor],
            "bufferViews": [{"buffer": 0, "byteLength": len(data)}], "buffers": [{"byteLength": len(data)}]}
    if extensions_used:
        gltf["extensionsUsed"] = list(extensions_used)
    if extensions_required:
        gltf["extensionsRequired"] = list(extensions_required)
    text = json.dumps(gltf).encode()
    text += b" " * (-len(text) % 4)
    body = struct.pack("<II", len(text), 0x4E4F534A) + text + struct.pack("<II", len(data), 0x004E4942) + data
    return struct.pack("<III", 0x46546C67, 2, 12 + len(body)) + body


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


def state_text(state) -> str:
    """`state_json` for a state given as a dict, a JSON text, or None (empty)."""
    return state if isinstance(state, str) else ("" if state is None else json.dumps(state))


def output_size(width: int, height: int | None = None) -> dict:
    """The `megapixels` and `multiple` widgets that give a `width` x `height` output (by default half as high: a 360
    ERP), as `_studio_output_size` works them out (ADR 0048). Small sizes are below the widgets' range, which only
    the frontend holds to."""
    height = width // 2 if height is None else height
    return {"megapixels": width * height / 2**20, "multiple": math.gcd(width, height)}


def shoot(source, state=None, **inputs):
    """The outputs of Panorama Studio shooting `source` through the Camera of `state`: an ERP IMAGE or VIDEO on
    `background` (black where it has no pixels), or a Scene on `scene`. 1024 x 512 unless `megapixels` and
    `multiple` say otherwise."""
    inputs.setdefault("background_color", "#000000")
    inputs.setdefault("background_range", "360")
    if "megapixels" not in inputs:
        inputs.update(output_size(1024))
    media = {"scene" if isinstance(source, PanoSceneValue) else "background": source}
    return PanoramaStudioNode.execute(state_json=state_text(state), **media, **inputs).result


def video_frames(result):
    """Every output frame of Panorama Studio, as GetVideoComponents reads them from the `video` output."""
    return result[3].get_components().images


def camera_state(keyframes=None, fps=24.0, position=None, hFOV_deg=None, **rotation):
    """A state with only a Camera; `keyframes` maps Camera Lanes to their Keyframes."""
    keyframes = keyframes or {}
    values = {"position": position, "rotation": rotation, "fov": hFOV_deg}
    camera = {name: {"value": value, "keyframes": keyframes.get(name, [])} for name, value in values.items()}
    return {"version": 2, "timeline": {"fps": fps}, "camera": {"aspect": 1.0, **camera}}


def center(image, index=0):
    return image[index, image.shape[1] // 2, image.shape[2] // 2]
