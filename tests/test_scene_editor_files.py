import json
import math
import struct
from pathlib import Path

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_extras.nodes_save_3d",
    reason="ComfyUI core is required to write the editor's scene files",
)

import folder_paths
from comfy_api.latest import Types
from comfy.ldm.moge.panorama import _uv_grid, spherical_uv_to_directions
from comfy_extras.nodes_gaussian_splat import SplatToFile3D
from comfy_extras.nodes_moge import MoGePointMapToMesh

from comfyui_pano_suite import nodes, scene_files
from comfyui_pano_suite.core.math import ray_directions
from comfyui_pano_suite.core.render import Projection
from comfyui_pano_suite.core.world_render import SceneContent


def _path(entry) -> Path:
    assert entry["type"] == "temp"
    return Path(folder_paths.get_temp_directory()) / entry["subfolder"] / entry["filename"]


def _glb_accessor(path: Path, accessor_of) -> np.ndarray:
    data = path.read_bytes()
    json_length = struct.unpack_from("<I", data, 12)[0]
    gltf = json.loads(data[20:20 + json_length])
    accessor = gltf["accessors"][accessor_of(gltf["meshes"][0]["primitives"][0])]
    view = gltf["bufferViews"][accessor["bufferView"]]
    offset = 20 + json_length + 8 + view.get("byteOffset", 0) + accessor.get("byteOffset", 0)
    dtype = {5125: np.uint32, 5126: np.float32}[accessor["componentType"]]
    width = {"SCALAR": 1, "VEC3": 3}[accessor["type"]]
    return np.frombuffer(data, dtype, accessor["count"] * width, offset)


def _glb_positions(path: Path) -> np.ndarray:
    return _glb_accessor(path, lambda primitive: primitive["attributes"]["POSITION"]).reshape(-1, 3)


def _glb_faces(path: Path) -> np.ndarray:
    return _glb_accessor(path, lambda primitive: primitive["indices"]).reshape(-1, 3)


def _ply_positions(path: Path) -> np.ndarray:
    data = path.read_bytes()
    end = data.index(b"end_header\n") + len(b"end_header\n")
    names = [line.split()[2] for line in data[:end].decode("ascii").splitlines() if line.startswith("property float")]
    rows = np.frombuffer(data, np.dtype([(name, "<f4") for name in names]), offset=end)
    return np.stack([rows["x"], rows["y"], rows["z"]], axis=-1)


def _splat(positions, counts=None):
    positions = torch.as_tensor(positions, dtype=torch.float32)
    batch, count = positions.shape[:2]
    rotations = torch.zeros((batch, count, 4))
    rotations[..., 0] = 1.0
    return Types.SPLAT(positions, torch.full((batch, count, 3), 0.1), rotations, torch.full((batch, count, 1), 0.5), torch.zeros((batch, count, 1, 3)), counts)


def _mesh(vertices):
    vertices = torch.as_tensor(vertices, dtype=torch.float32)
    return Types.MESH(vertices, torch.tensor([[[0, 1, 2]]] * vertices.shape[0]))


def _moge(points, mask=None, intrinsics=False):
    points = torch.as_tensor(points, dtype=torch.float32)
    geometry = {"points": points, "image": torch.rand((*points.shape[:3], 3))}
    if mask is not None:
        geometry["mask"] = torch.as_tensor(mask)
    if intrinsics:
        geometry["intrinsics"] = torch.eye(3).repeat(points.shape[0], 1, 1)
    return geometry


def _panorama_points(height, width, distance=2.0):
    """MoGe panorama points as the core makes them: its ERP directions (Z up) times the distance."""
    return torch.from_numpy(spherical_uv_to_directions(_uv_grid(height, width)) * distance)[None]


def test_splat_items_are_written_as_ply_in_their_own_coordinates():
    positions = [[[1.0, 2.0, -3.0], [0.5, 0.0, 0.0], [0.0, 0.0, 0.0]], [[-1.0, 0.0, 4.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0]]]

    ui = nodes._scene_ui(_splat(positions, counts=torch.tensor([2, 1])))

    assert ui["pano_scene_meta"] == [{"kind": "splat"}]
    files = ui["pano_scene_files"]
    assert len(files) == 2
    # The PLY keeps the SPLAT's own (3DGS) coordinates, as the core's SplatToFile3D writes them, each item to its
    # own length; the editor turns it into glTF like the core's Load3D.
    assert np.allclose(_ply_positions(_path(files[0])), positions[0][:2])
    assert np.allclose(_ply_positions(_path(files[1])), positions[1][:1])


def test_splat_files_are_written_as_the_ply_of_their_splat():
    positions = [[[1.0, 2.0, -3.0], [0.5, 0.0, 0.0]]]
    model = SplatToFile3D.execute(_splat(positions), "spz").result[0]

    ui = nodes._scene_ui(nodes._read_splat_file(model))

    assert ui["pano_scene_meta"] == [{"kind": "splat"}]
    assert np.allclose(_ply_positions(_path(ui["pano_scene_files"][0])), positions[0], atol=1e-3)
    # The same file is read once and keeps its PLY.
    assert nodes._read_splat_file(model) is nodes._read_splat_file(model)
    assert nodes._scene_ui(nodes._read_splat_file(model)) == ui


def test_mesh_items_are_written_as_glb_in_their_own_coordinates():
    vertices = [[[0.0, 0.0, -1.0], [1.0, 0.0, -1.0], [0.0, 1.0, -1.0]], [[0.0, 0.0, -2.0], [2.0, 0.0, -2.0], [0.0, 2.0, -2.0]]]

    ui = nodes._scene_ui(_mesh(vertices))

    assert ui["pano_scene_meta"] == [{"kind": "mesh"}]
    assert [np.allclose(_glb_positions(_path(entry)), item) for entry, item in zip(ui["pano_scene_files"], vertices)] == [True, True]


def test_empty_items_keep_their_place_in_the_batch():
    ui = nodes._scene_ui(_splat([[[1.0, 0.0, 0.0]], [[2.0, 0.0, 0.0]]], counts=torch.tensor([0, 1])))

    files = ui["pano_scene_files"]
    assert files[0] is None and np.allclose(_ply_positions(_path(files[1])), [[2.0, 0.0, 0.0]])


def test_moge_panorama_frames_are_grid_meshes_in_world_directions_of_the_erp():
    height, width = 8, 16
    points = _panorama_points(height, width).repeat(3, 1, 1, 1)

    ui = nodes._scene_ui(_moge(points))

    assert ui["pano_scene_meta"] == [{"kind": "mesh"}]
    assert len(ui["pano_scene_files"]) == 3
    vertices = _glb_positions(_path(ui["pano_scene_files"][0]))
    # Each pixel of the ERP MoGe saw lies along the World direction of the same pixel of a Camera at rotation 0
    # (World is glTF, looking down -Z), at its distance.
    rays = ray_directions([1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, -1.0], Projection.erp(width, height), "cpu")
    assert vertices.shape == (height * width, 3)
    assert np.allclose(vertices, rays.reshape(-1, 3).numpy() * 2.0, atol=1e-5)


def test_moge_frames_match_the_core_mesh_conversion():
    # A slanted plane in front of a perspective camera.
    rows, columns = torch.meshgrid(torch.linspace(-1.0, 1.0, 6), torch.linspace(-1.0, 1.0, 6), indexing="ij")
    depth = 2.0 + 0.02 * columns
    perspective = torch.stack([columns * depth, rows * depth, depth], dim=-1)[None]
    panorama = _panorama_points(6, 12)

    for points, intrinsics in ((perspective, True), (panorama, False)):
        geometry = _moge(points, mask=torch.ones(points.shape[:3], dtype=torch.bool), intrinsics=intrinsics)
        if not intrinsics:
            geometry["depth"] = points.norm(dim=-1)
        core = MoGePointMapToMesh.execute(geometry, 0, 1, 0.04, False).result[0]

        path = _path(nodes._scene_ui(geometry)["pano_scene_files"][0])

        assert np.allclose(_glb_positions(path), core.vertices[0].numpy(), atol=1e-6)
        # The same winding: a perspective frame is flipped with its Y and Z, a panorama faces out as in the core.
        assert np.array_equal(_glb_faces(path), core.faces[0].numpy())
    # A point straight ahead of a perspective MoGe camera (OpenCV: +Z forward, +Y down) is ahead in World (-Z).
    assert np.allclose(scene_files.moge_grid_mesh(_moge([[[[0.0, 0.5, 2.0]] * 2] * 2], intrinsics=True), 0)[0][0], [0.0, -0.5, -2.0])


def test_moge_mask_drops_the_pixels_it_excludes():
    mask = torch.ones((1, 8, 16), dtype=torch.bool)
    mask[:, :4] = False

    vertices = _glb_positions(_path(nodes._scene_ui(_moge(_panorama_points(8, 16), mask=mask))["pano_scene_files"][0]))

    # Only the lower half (below the horizon) is left.
    assert vertices.shape == (4 * 16, 3) and (vertices[:, 1] < 0.0).all()


def test_large_moge_frames_are_thinned_for_the_editor():
    size = scene_files.MOGE_EDITOR_GRID * 2

    vertices = _glb_positions(_path(nodes._scene_ui(_moge(_panorama_points(size // 2, size)))["pano_scene_files"][0]))

    assert vertices.shape[0] == (scene_files.MOGE_EDITOR_GRID // 2) * scene_files.MOGE_EDITOR_GRID


def test_same_input_reuses_its_files(monkeypatch):
    splat = _splat([[[1.0, 0.0, 0.0]]])
    first = nodes._scene_ui(splat)
    path = _path(first["pano_scene_files"][0])
    written = path.stat().st_mtime_ns
    calls = []
    original = nodes.write_editor_files
    monkeypatch.setattr(nodes, "write_editor_files", lambda value: calls.append(value) or original(value))

    assert nodes._scene_ui(splat) == first
    assert calls == [] and path.stat().st_mtime_ns == written

    # Another input, or a file gone from temp, writes them again.
    other = nodes._scene_ui(_splat([[[1.0, 0.0, 0.0]]]))
    assert other["pano_scene_files"] != first["pano_scene_files"] and len(calls) == 1
    path.unlink()
    assert _path(nodes._scene_ui(splat)["pano_scene_files"][0]).exists() and len(calls) == 2


def test_moge_reuse_follows_its_tensors(monkeypatch):
    geometry = _moge(_panorama_points(4, 8))
    first = nodes._scene_ui(geometry)

    assert nodes._scene_ui(dict(geometry)) == first
    geometry["points"].mul_(2.0)
    assert nodes._scene_ui(geometry) != first


def test_stickers_node_shows_the_scene_files_after_running(monkeypatch):
    def render(view, index, device):
        height, width = view.projection.height, view.projection.width
        return torch.zeros((height, width, 4), device=device), torch.full((height, width), math.inf, device=device)

    monkeypatch.setattr(nodes, "_scene_content", lambda scene: None if scene is None else SceneContent(2, render))
    mesh = _mesh([[[0.0, 0.0, -1.0], [1.0, 0.0, -1.0], [0.0, 1.0, -1.0]]] * 2)

    output = nodes.PanoramaStickersSceneNode.execute(bg_color="#00ff00", coverage="360", output_preset="1024", state_json="", scene=mesh)
    without = nodes.PanoramaStickersSceneNode.execute(bg_color="#00ff00", coverage="360", output_preset="1024", state_json="")

    assert output.ui["pano_scene_meta"] == [{"kind": "mesh"}] and len(output.ui["pano_scene_files"]) == 2
    assert all(_path(entry).exists() for entry in output.ui["pano_scene_files"])
    assert "pano_scene_files" not in without.ui
