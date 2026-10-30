import io
import json
import math
import struct
from pathlib import Path

import numpy as np
import pytest
import torch
from PIL import Image


pytest.importorskip(
    "comfy_extras.nodes_save_3d",
    reason="ComfyUI core is required to write the editor's scene files",
)

from comfy_api.latest import Types
from comfy.ldm.moge.panorama import _uv_grid, spherical_uv_to_directions
from comfy_extras.nodes_gaussian_splat import SplatToFile3D
from comfy_extras.nodes_moge import MoGePointMapToMesh
from comfy_extras.nodes_save_3d import mesh_item_to_glb_bytes

from comfyui_pano_suite import nodes, scene_files
from comfyui_pano_suite.core.math import ray_directions
from comfyui_pano_suite.core.render import Projection
from comfyui_pano_suite.core.world_render import SceneContent
from scene_test_helpers import glb_accessor as _glb_accessor, glb_positions as _glb_positions, temp_entry_path as _path





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

    ui = nodes._scene_ui(nodes._read_scene_file(model, "scene"))

    assert ui["pano_scene_meta"] == [{"kind": "splat"}]
    assert np.allclose(_ply_positions(_path(ui["pano_scene_files"][0])), positions[0], atol=1e-3)
    # The same file is read once and keeps its PLY.
    assert nodes._read_scene_file(model, "scene") is nodes._read_scene_file(model, "scene")
    assert nodes._scene_ui(nodes._read_scene_file(model, "scene")) == ui


def test_mesh_items_are_written_as_glb_in_their_own_coordinates():
    vertices = [[[0.0, 0.0, -1.0], [1.0, 0.0, -1.0], [0.0, 1.0, -1.0]], [[0.0, 0.0, -2.0], [2.0, 0.0, -2.0], [0.0, 2.0, -2.0]]]

    ui = nodes._scene_ui(_mesh(vertices))

    assert ui["pano_scene_meta"] == [{"kind": "mesh", "unlit": False}]
    assert [np.allclose(_glb_positions(_path(entry)), item) for entry, item in zip(ui["pano_scene_files"], vertices)] == [True, True]


def test_the_editor_meta_carries_the_mesh_unlit_mark_even_where_the_glb_does_not():
    # The core's save_glb writes KHR_materials_unlit only without a texture, so the editor reads the mark from here.
    vertices = torch.tensor([[[0.0, 0.0, -1.0], [1.0, 0.0, -1.0], [0.0, 1.0, -1.0]]])
    uvs = torch.tensor([[[0.0, 0.0], [1.0, 0.0], [0.0, 1.0]]])
    textured = Types.MESH(vertices, torch.tensor([[[0, 1, 2]]]), uvs=uvs, texture=torch.rand((1, 2, 2, 3)), unlit=True)

    ui = nodes._scene_ui(textured)

    assert ui["pano_scene_meta"] == [{"kind": "mesh", "unlit": True}]
    assert b"KHR_materials_unlit" not in _path(ui["pano_scene_files"][0]).read_bytes()


def test_empty_items_keep_their_place_in_the_batch():
    ui = nodes._scene_ui(_splat([[[1.0, 0.0, 0.0]], [[2.0, 0.0, 0.0]]], counts=torch.tensor([0, 1])))

    files = ui["pano_scene_files"]
    assert files[0] is None and np.allclose(_ply_positions(_path(files[1])), [[2.0, 0.0, 0.0]])


def test_moge_panorama_frames_are_grid_meshes_in_world_directions_of_the_erp():
    height, width = 8, 16
    points = _panorama_points(height, width).repeat(3, 1, 1, 1)

    ui = nodes._scene_ui(_moge(points))

    # MoGe's frames are photos: never lit (docs/render-contract.md, "光が効く要素").
    assert ui["pano_scene_meta"] == [{"kind": "mesh", "unlit": True}]
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


def test_moge_frames_keep_every_pixel_and_the_whole_image():
    height, width = 24, 48
    geometry = _moge(_panorama_points(height, width))

    path = _path(nodes._scene_ui(geometry)["pano_scene_files"][0])

    assert _glb_positions(path).shape[0] == height * width
    data = path.read_bytes()
    image = _glb_json(path)["bufferViews"][_glb_json(path)["images"][0]["bufferView"]]
    start = 20 + struct.unpack_from("<I", data, 12)[0] + 8 + image.get("byteOffset", 0)
    assert Image.open(io.BytesIO(data[start:start + image["byteLength"]])).size == (width, height)


def test_moge_frames_without_faces_are_empty_items():
    mask = torch.zeros((2, 4, 8), dtype=torch.bool)
    mask[1] = True

    files = nodes._scene_ui(_moge(_panorama_points(4, 8).repeat(2, 1, 1, 1), mask=mask))["pano_scene_files"]

    assert files[0] is None and _path(files[1]).exists()


def test_same_input_reuses_its_files(monkeypatch):
    splat = _splat([[[1.0, 0.0, 0.0]]])
    first = nodes._scene_ui(splat)
    path = _path(first["pano_scene_files"][0])
    written = path.stat().st_mtime_ns
    calls = []
    original = nodes.write_editor_files
    monkeypatch.setattr(nodes, "write_editor_files", lambda value, progress=None: calls.append(value) or original(value, progress))

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


def test_studio_shows_the_scene_files_after_running(monkeypatch):
    def render(view, index, device):
        height, width = view.projection.height, view.projection.width
        return torch.zeros((height, width, 4), device=device), torch.full((height, width), math.inf, device=device)

    monkeypatch.setattr(nodes, "_scene_content", lambda scene: None if scene is None else SceneContent(2, render))
    mesh = _mesh([[[0.0, 0.0, -1.0], [1.0, 0.0, -1.0], [0.0, 1.0, -1.0]]] * 2)

    output = nodes.PanoramaStudioNode.execute(background_color="#00ff00", background_range="360", megapixels=0.5, multiple=8, state_json="", world=mesh)
    without = nodes.PanoramaStudioNode.execute(background_color="#00ff00", background_range="360", megapixels=0.5, multiple=8, state_json="")

    assert output.ui["pano_scene_meta"] == [{"kind": "mesh", "unlit": False}] and len(output.ui["pano_scene_files"]) == 2
    assert all(_path(entry).exists() for entry in output.ui["pano_scene_files"])
    assert "pano_scene_files" not in without.ui


def _glb_json(path: Path) -> dict:
    data = path.read_bytes()
    return json.loads(data[20:20 + struct.unpack_from("<I", data, 12)[0]])


def _stepped_panorama(height, width):
    """MoGe panorama points with a depth step across them, so the core's edge check drops pixels along it."""
    distance = torch.where(torch.arange(width) < width // 2, 2.0, 5.0).expand(height, width)
    return _panorama_points(height, width, 1.0) * distance[None, :, :, None]


def test_moge_grid_meshes_are_written_like_their_moge_geometry():
    rows, columns = torch.meshgrid(torch.linspace(-1.0, 1.0, 12), torch.linspace(-1.0, 1.0, 20), indexing="ij")
    depth = 2.0 + 0.02 * columns + torch.where(columns > 0.3, 1.0, 0.0)
    perspective = torch.stack([columns * depth, rows * depth, depth], dim=-1)[None]

    for points, intrinsics in ((_stepped_panorama(12, 24), False), (perspective, True)):
        geometry = _moge(points, intrinsics=intrinsics)
        if not intrinsics:
            geometry["depth"] = points.norm(dim=-1)
        mesh = MoGePointMapToMesh.execute(geometry, 0, 1, 0.04, True).result[0]
        assert mesh.vertices.shape[1] < points.shape[1] * points.shape[2]

        grid = _path(nodes._scene_ui(mesh)["pano_scene_files"][0])
        moge = _path(nodes._scene_ui(geometry)["pano_scene_files"][0])

        # The same vertices, faces, uvs and texture as the MOGE_GEOMETRY's file, each at full resolution.
        assert grid.read_bytes() == moge.read_bytes() == mesh_item_to_glb_bytes(mesh, 0)


def test_meshes_are_written_as_the_core_writes_them():
    # A sphere with a texture, vertex colors and normals: the editor gets all that the core's SaveGLB writes.
    rows, columns = torch.meshgrid(torch.linspace(0.05, 0.95, 40), torch.linspace(0.0, 1.0, 40), indexing="ij")
    theta, phi = rows * math.pi, columns * 2.0 * math.pi
    vertices = torch.stack([theta.sin() * phi.cos(), theta.cos(), theta.sin() * phi.sin()], dim=-1).reshape(-1, 3)
    uvs = torch.stack([columns, rows ** 2], dim=-1).reshape(-1, 2)
    index = torch.arange(40 * 40).reshape(40, 40)
    a, b, c, d = index[:-1, :-1], index[:-1, 1:], index[1:, 1:], index[1:, :-1]
    faces = torch.cat([torch.stack([a, b, c], -1).reshape(-1, 3), torch.stack([a, c, d], -1).reshape(-1, 3)])
    mesh = Types.MESH(
        vertices[None], faces[None], uvs=uvs[None], vertex_colors=torch.rand((1, 1600, 3)), texture=torch.rand((1, 16, 32, 3)),
        normals=vertices[None],
    )

    path = _path(nodes._scene_ui(mesh)["pano_scene_files"][0])

    assert path.read_bytes() == mesh_item_to_glb_bytes(mesh, 0)
    assert _glb_faces(path).shape[0] == faces.shape[0]


def test_meshes_without_faces_are_empty_items():
    mesh = Types.MESH(torch.zeros((2, 3, 3)), torch.tensor([[[0, 1, 2]], [[0, 1, 2]]]), vertex_counts=torch.tensor([3, 3]), face_counts=torch.tensor([0, 1]))

    files = nodes._scene_ui(mesh)["pano_scene_files"]

    assert files[0] is None and _path(files[1]).exists()



def test_da3_mono_editor_files_are_depth_with_keep_as_positive():
    from test_scene_mesh import _keep_case

    from comfyui_pano_suite import scene_mesh

    geometry = _keep_case(False)
    height, width = geometry["depth"].shape[1:]

    ui = nodes._scene_ui(geometry, fps=12.5)

    [meta] = ui["pano_scene_meta"]
    files = ui["pano_scene_files"]
    # Frames 1 and 2 are empty: no file, and the numbers do not shift.
    assert files[1] is None and files[2] is None and files[0]["format"] == "application/octet-stream"
    path = _path(files[0])
    assert path.suffix == ".f32" and path.name.startswith("pano_scene_") and path.name.endswith("_0.f32")
    data = path.read_bytes()
    assert len(data) == width * height * 4 == meta["depth"]["bytes"]
    values = np.frombuffer(data, dtype="<f4").reshape(height, width)
    keep = scene_mesh.da3_keep(geometry, 0).numpy()
    assert np.isfinite(values).all() and np.array_equal(values > 0, keep)
    assert np.array_equal(values[keep], geometry["depth"][0].numpy().astype(np.float32)[keep]) and (values[~keep] == 0).all()
    k = [scene_mesh.da3_k(geometry, index).reshape(-1).tolist() for index in range(3)]
    assert {key: meta[key] for key in meta if key != "video"} == {
        "kind": "depth_grid", "unlit": True, "width": width, "height": height,
        "depth": {"dtype": "float32", "byte_order": "little", "bytes": width * height * 4},
        "intrinsics": k, "video_fps": 12.5, "frames": 3,
    }
    # The color proxy: the frames' image as the editor MP4.
    assert meta["video"]["format"] == "video/mp4" and _path(meta["video"]).exists()
    assert k[0][0] == pytest.approx(0.7 * width) and k[0][2] == pytest.approx((width - 1) / 2)


def test_the_depth_grid_fixture_is_what_python_writes():
    """tests/fixtures/da3_depth_grid/ is the small case the JS reader is checked with; Python writes it."""
    from comfyui_pano_suite import scene_mesh

    root = Path(__file__).resolve().parent / "fixtures" / "da3_depth_grid"
    case = json.loads((root / "case.json").read_text(encoding="utf-8"))
    def tensor(rows):
        return torch.tensor([[float("nan") if value is None else value for value in row] for row in rows], dtype=torch.float32)[None]

    raw = case["input"]
    geometry = {"depth": tensor(raw["depth"]), "sky": tensor(raw["sky"]), "confidence": tensor(raw["confidence"]), "mode": "mono",
                "image": torch.zeros((1, len(raw["depth"]), len(raw["depth"][0]), 3))}
    keep = scene_mesh.da3_keep(geometry, 0)

    values = np.frombuffer((root / "depth_0.f32").read_bytes(), dtype="<f4").reshape(case["meta"]["height"], case["meta"]["width"])
    assert np.array_equal(values > 0, keep.numpy()) and case["keep"] == keep.int().tolist()
    assert case["meta"]["intrinsics"] == [scene_mesh.da3_k(geometry, 0).reshape(-1).tolist()]
    points = scene_mesh.da3_points(geometry, 0, keep)
    assert np.allclose(np.asarray(case["points"])[:, 2:], points.numpy(), atol=0) and [row[:2] for row in case["points"]] == keep.nonzero()[:, [1, 0]].tolist()
    quads = keep[:-1, :-1] & keep[:-1, 1:] & keep[1:, 1:] & keep[1:, :-1]
    assert case["quads"] == quads.nonzero()[:, [1, 0]].tolist()


def test_moge_sequences_are_depth_grids_with_the_pixel_k(caplog):
    import logging

    from test_scene_mesh import _moge_panorama_points, _moge_sequence

    from comfyui_pano_suite import scene_mesh

    geometry = _moge_sequence(count=3)
    # Frame 1 all masked: empty.
    geometry["mask"][1] = False
    count, height, width = geometry["points"].shape[:3]

    ui = nodes._scene_ui(geometry, fps=10.0)

    [meta] = ui["pano_scene_meta"]
    files = ui["pano_scene_files"]
    assert files[1] is None and all(_path(files[index]).suffix == ".f32" for index in (0, 2))
    for index in (0, 2):
        values = np.frombuffer(_path(files[index]).read_bytes(), dtype="<f4").reshape(height, width)
        keep = scene_mesh.moge_keep(geometry, index).numpy()
        assert np.array_equal(values > 0, keep) and (values[~keep] == 0).all()
        assert np.array_equal(values[keep], geometry["points"][index][..., 2].numpy()[keep])
    expected_k = [scene_mesh.moge_pixel_k(geometry["intrinsics"][index], height, width).reshape(-1).tolist() for index in range(count)]
    assert {key: meta[key] for key in meta if key != "video"} == {
        "kind": "depth_grid", "unlit": True, "width": width, "height": height,
        "depth": {"dtype": "float32", "byte_order": "little", "bytes": width * height * 4},
        "intrinsics": expected_k, "video_fps": 10.0, "frames": count,
    }
    assert _path(meta["video"]).exists()

    # What does not qualify stays GLB, with one warning per run that says why.
    single = _moge_sequence(count=1)
    projected_off = _moge_sequence(count=2)
    projected_off["points"] = projected_off["points"].clone()
    projected_off["points"][1, 5:8, 2:6, 0] += 0.05
    mixed = {key: torch.cat([_moge_sequence(count=1)[key], projected_off[key][1:]]) for key in ("points", "depth", "intrinsics", "image", "mask")}
    cases = {
        "a panorama": (_moge_panorama_points(), "no intrinsics"),
        "one frame": (single, "one frame"),
        "force_projection off": (projected_off, "frame 1"),
        "mixed dicts": (mixed, "frame 1"),
    }
    for name, (value, reason) in cases.items():
        assert nodes._scene_ui(value, fps=10.0)["pano_scene_meta"] == [{"kind": "mesh", "unlit": True}], name
        caplog.clear()
        with caplog.at_level(logging.WARNING):
            nodes.PanoramaStudioNode.execute(background_color="#000000", background_range="360", megapixels=0.5, multiple=8, state_json="", world=value, sticker=value)
        warned = [record.getMessage() for record in caplog.records if "MOGE_GEOMETRY" in record.getMessage()]
        assert len(warned) == 1 and reason in warned[0], (name, warned)
    caplog.clear()
    with caplog.at_level(logging.WARNING):
        nodes.PanoramaStudioNode.execute(background_color="#000000", background_range="360", megapixels=0.5, multiple=8, state_json="", world=_moge_sequence(count=2))
    assert not [record for record in caplog.records if "MOGE_GEOMETRY" in record.getMessage()]


def test_the_moge_depth_grid_fixture_is_what_python_writes():
    """tests/fixtures/da3_depth_grid/case_moge.json: a MoGe frame the JS reader takes as a DA3 mono frame."""
    from comfy.ldm.moge.geometry import depth_map_to_point_map

    from comfyui_pano_suite import scene_mesh

    root = Path(__file__).resolve().parent / "fixtures" / "da3_depth_grid"
    case = json.loads((root / "case_moge.json").read_text(encoding="utf-8"))
    depth, k = torch.tensor(case["input"]["depth"]), torch.tensor(case["input"]["intrinsics"])
    mask = torch.tensor(case["input"]["mask"], dtype=torch.bool)
    points = depth_map_to_point_map(depth, k)
    geometry = {"points": points[None].repeat(2, 1, 1, 1), "mask": mask[None].repeat(2, 1, 1), "intrinsics": k[None].repeat(2, 1, 1), "image": torch.zeros((2, *depth.shape, 3))}
    keep = scene_mesh.moge_keep(geometry, 0)

    assert scene_mesh.moge_uses_depth_grid(geometry)[0]
    values = np.frombuffer((root / "moge_depth_0.f32").read_bytes(), dtype="<f4").reshape(case["meta"]["height"], case["meta"]["width"])
    assert np.array_equal(values > 0, keep.numpy()) and case["keep"] == keep.int().tolist()
    assert case["meta"]["intrinsics"] == [scene_mesh.moge_pixel_k(k, *depth.shape).reshape(-1).tolist()]
    assert np.allclose(np.asarray(case["points"])[:, 2:], scene_mesh.moge_points(geometry, 0, keep).numpy(), atol=0)
    quads = keep[:-1, :-1] & keep[:-1, 1:] & keep[1:, 1:] & keep[1:, :-1]
    assert case["quads"] == quads.nonzero()[:, [1, 0]].tolist()
