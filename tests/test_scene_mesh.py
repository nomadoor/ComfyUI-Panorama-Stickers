import gc
import math
import weakref

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_extras.nodes_moge",
    reason="ComfyUI core is required to read MESH, 3D files, and MOGE_GEOMETRY",
)

import comfy.model_management
from PIL import Image
from comfy.ldm.moge.geometry import depth_map_to_point_map, intrinsics_from_focal_center
from comfy_api.latest import Types
from comfy_extras import nodes_moge
from comfy_extras.nodes_save_3d import save_glb

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core import mesh_render
from comfyui_pano_suite.core.render import Projection
from comfyui_pano_suite.core.world import world_rotation
from comfyui_pano_suite.core.world_render import CameraView
from test_cutout_scene_node import _camera, _center, _cutout, _stickers
from test_cutout_scene_node import _frames as _cutout_frames
from test_scene_editor_files import _glb_positions, _path
from test_stickers_scene_video import _frames
from test_stickers_timed_sticker import _batch_index_at_center


# A quad 2 ahead of a Camera at the origin, 2 wide, its uv (0, 0) at the top left.
QUAD = [[-1.0, 1.0, -2.0], [1.0, 1.0, -2.0], [1.0, -1.0, -2.0], [-1.0, -1.0, -2.0]]
QUAD_FACES = [[0, 3, 2], [0, 2, 1]]
QUAD_UVS = [[0.0, 0.0], [1.0, 0.0], [1.0, 1.0], [0.0, 1.0]]


class _FakeMoGe:
    """Stands in for a loaded MoGe model: `infer` returns what the core's MoGe model returns (`comfy/ldm/moge/
    model.py`), a plane `depth` ahead of a 90 degree camera seen through every pixel."""

    patcher = None
    load_device = torch.device("cpu")
    dtype = torch.float32

    def __init__(self, depth=2.0):
        self.depth = depth

    def infer(self, image, resolution_level=9, fov_x=None, force_projection=True, apply_mask=True, apply_metric_scale=True, refine_steps=3):
        batch, _channels, height, width = image.shape
        depth = torch.full((batch, height, width), self.depth)
        focal = torch.full((batch,), 0.5)
        intrinsics = intrinsics_from_focal_center(focal, focal, torch.tensor(0.5), torch.tensor(0.5))
        return {"points": depth_map_to_point_map(depth, intrinsics=intrinsics), "depth": depth, "intrinsics": intrinsics,
                "mask": torch.ones((batch, height, width), dtype=torch.bool)}


def _moge(image):
    """MOGE_GEOMETRY as the core's MoGeInference node outputs it for an IMAGE batch."""
    return nodes_moge.MoGeInference.execute(_FakeMoGe(), image, 9, 0.0, 2, True, True, 3).result[0]


def _moge_panorama(image, monkeypatch):
    """MOGE_GEOMETRY as the core's MoGePanoramaInference node outputs it for an ERP: its views merged into one
    distance per pixel."""
    monkeypatch.setattr(comfy.model_management, "load_model_gpu", lambda *args, **kwargs: None)
    return nodes_moge.MoGePanoramaInference.execute(_FakeMoGe(), image, 9, 64, image.shape[2], 2, 3).result[0]


class _Recording(dict):
    def __init__(self, value):
        super().__init__(value)
        self.read, self.asked = set(), set()

    def __getitem__(self, key):
        self.read.add(key)
        return super().__getitem__(key)

    def __contains__(self, key):
        self.asked.add(key)
        return super().__contains__(key)


def _origin(projection):
    return CameraView(np.zeros(3), world_rotation(0.0, 0.0, 0.0), projection)


def _gradient(height, width):
    """A smooth ERP image, so that half a texel of sampling difference stays small."""
    rows, columns = torch.meshgrid(torch.linspace(0.0, 1.0, height), torch.linspace(0.0, 1.0, width), indexing="ij")
    return torch.stack([columns, rows, 0.5 + 0.5 * torch.sin(columns * 2.0 * math.pi)], dim=-1)[None]


def test_core_moge_nodes_output_the_shape_the_renderer_reads(monkeypatch):
    perspective = _moge(torch.rand((3, 12, 16, 3)))
    panorama = _moge_panorama(torch.rand((1, 16, 32, 3)), monkeypatch)

    # The keys the renderer reads are there with these shapes; others (depth, normal) may come and go.
    def shapes(geometry, keys):
        return {key: (tuple(geometry[key].shape), geometry[key].dtype) for key in keys}

    assert shapes(perspective, ("image", "points", "mask", "intrinsics")) == {
        "image": ((3, 12, 16, 3), torch.float32), "points": ((3, 12, 16, 3), torch.float32), "mask": ((3, 12, 16), torch.bool),
        "intrinsics": ((3, 3, 3), torch.float32),
    }
    assert "intrinsics" not in panorama and shapes(panorama, ("image", "points", "mask")) == {
        "image": ((1, 16, 32, 3), torch.float32), "points": ((1, 16, 32, 3), torch.float32), "mask": ((1, 16, 32), torch.bool),
    }
    for geometry in (perspective, panorama):
        recording = _Recording(geometry)
        content = nodes._scene_content(recording)
        content.render(_origin(Projection.erp(32, 16)), content.count - 1, torch.device("cpu"))
        # Only the points, the mask, and the image are read; the intrinsics only tell a perspective frame apart.
        assert recording.read == {"points", "mask", "image"} and recording.asked <= {"mask", "intrinsics"}


def test_moge_panorama_seen_from_its_center_is_its_own_erp(monkeypatch):
    image = _gradient(16, 32)
    geometry = _moge_panorama(image, monkeypatch)

    rgba, depth = nodes._scene_content(geometry).render(_origin(Projection.erp(32, 16)), 0, torch.device("cpu"))

    # Each pixel center of the ERP is a vertex of the grid; the texture is sampled at texel centers as glTF does,
    # up to half a texel off at the image edges.
    assert bool((rgba[..., 3] == 1.0).all())
    assert (rgba[..., :3] - image[0]).abs().amax() < 0.05
    assert torch.allclose(depth, geometry["points"][0].norm(dim=-1), rtol=1e-4)


def test_moge_mask_drops_its_pixels():
    geometry = _moge(torch.rand((1, 8, 8, 3)))
    geometry["mask"][:, :, :4] = False

    rgba, _depth = nodes._scene_content(geometry).render(_origin(Projection.perspective(8, 8, 90.0)), 0, torch.device("cpu"))

    # The left half of the 90 degree MoGe camera is gone; the right half is drawn from the edge column on.
    assert not bool(rgba[:, :4, 3].any()) and bool(rgba[:, 5:, 3].all())


def test_moge_video_draws_each_frame_at_its_time():
    reds = torch.stack([torch.zeros((12, 16, 3)).index_fill_(-1, torch.tensor([0]), (index + 1) / 10) for index in range(3)])

    image = _frames(_stickers(scene=_moge(reds)))

    assert _batch_index_at_center(image) == [0, 1, 2]


def test_mesh_is_drawn_and_written_for_the_editor():
    texture = torch.tensor([[[[1.0, 0.0, 0.0], [0.0, 1.0, 0.0]], [[0.0, 0.0, 1.0], [1.0, 1.0, 1.0]]]])
    mesh = Types.MESH(torch.tensor([QUAD]), torch.tensor([QUAD_FACES]), uvs=torch.tensor([QUAD_UVS]), texture=texture)

    output = nodes.PanoramaStickersSceneNode.execute(bg_color="#00ff00", coverage="360", output_preset="1024", state_json="", scene=mesh)

    image = output.result[0][0]
    # The quad spans 53 degrees around the ERP center: its top left quadrant is the red texel.
    assert torch.allclose(image[217, 472], torch.tensor([1.0, 0.0, 0.0]), atol=0.02)
    assert torch.allclose(image[295, 552], torch.ones(3), atol=0.02)
    assert torch.allclose(image[100, 100], torch.tensor([0.0, 1.0, 0.0]))
    assert output.ui["pano_scene_meta"] == [{"kind": "mesh"}] and _path(output.ui["pano_scene_files"][0]).exists()


def test_mesh_batch_items_follow_the_output_frames():
    # Two items of different lengths, red 0.1 and 0.2.
    vertices = torch.zeros((2, 5, 3))
    vertices[0, :4], vertices[1, :3] = torch.tensor(QUAD), torch.tensor([[-1.0, 1.0, -2.0], [1.0, 1.0, -2.0], [0.0, -2.0, -2.0]])
    faces = torch.tensor([QUAD_FACES, [[0, 2, 1], [0, 0, 0]]])
    colors = torch.zeros((2, 5, 3))
    colors[0, :, 0], colors[1, :, 0] = 0.1, 0.2
    mesh = Types.MESH(vertices, faces, vertex_colors=colors, vertex_counts=torch.tensor([4, 3]), face_counts=torch.tensor([2, 1]))

    assert _batch_index_at_center(_frames(_stickers(scene=mesh))) == [0, 1]


def _write_obj(path):
    lines = [f"v {x} {y} {z}" for x, y, z in QUAD] + [f"f {a + 1} {b + 1} {c + 1}" for a, b, c in QUAD_FACES]
    path.write_text("\n".join(lines) + "\n")
    return path


def test_mesh_files_are_drawn_and_written_for_the_editor(tmp_path):
    texture = Image.fromarray(np.full((2, 2, 3), (255, 0, 0), np.uint8), mode="RGB")
    (tmp_path / "quad.glb").write_bytes(save_glb(torch.tensor(QUAD), torch.tensor(QUAD_FACES), uvs=torch.tensor(QUAD_UVS), texture_image=texture))

    for name, color in (("quad.glb", [1.0, 0.0, 0.0]), (_write_obj(tmp_path / "quad.obj").name, [0.22] * 3)):
        result = _stickers(scene=Types.File3D(str(tmp_path / name)))
        ui = nodes._scene_ui(result[3].scene)

        assert torch.allclose(result[0][0, 256, 512], torch.tensor(color), atol=1e-3)
        assert np.allclose(np.sort(_glb_positions(_path(ui["pano_scene_files"][0])), axis=0), np.sort(np.asarray(QUAD), axis=0))


def test_same_mesh_file_is_read_once_and_keeps_its_editor_files(tmp_path, monkeypatch):
    path = _write_obj(tmp_path / "quad.obj")
    reads, writes = [], []
    read, write = nodes.read_mesh_file, nodes.write_editor_files
    monkeypatch.setattr(nodes, "read_mesh_file", lambda file: reads.append(file) or read(file))
    monkeypatch.setattr(nodes, "write_editor_files", lambda value: writes.append(value) or write(value))

    first = nodes.PanoramaStickersSceneNode.execute(bg_color="#00ff00", coverage="360", output_preset="1024", state_json="", scene=Types.File3D(str(path)))
    again = nodes.PanoramaStickersSceneNode.execute(bg_color="#00ff00", coverage="360", output_preset="1024", state_json="", scene=Types.File3D(str(path)))

    assert len(reads) == 1 and len(writes) == 1
    assert again.ui["pano_scene_files"] == first.ui["pano_scene_files"]
    # A changed file is read again.
    path.write_text(path.read_text() + "v 0 0 0\n")
    nodes.PanoramaStickersSceneNode.execute(bg_color="#00ff00", coverage="360", output_preset="1024", state_json="", scene=Types.File3D(str(path)))
    assert len(reads) == 2


def test_nothing_uploaded_outlives_its_render_pass(tmp_path, monkeypatch):
    uploaded = []
    upload = mesh_render._upload

    def recording(item, device):
        item = upload(item, device)
        uploaded.append(weakref.ref(item))
        return item

    monkeypatch.setattr(mesh_render, "_upload", recording)
    mesh = Types.MESH(torch.tensor([QUAD] * 2), torch.tensor([QUAD_FACES] * 2), vertex_colors=torch.rand((2, 4, 3)))
    result = _stickers(scene=mesh)
    video = result[2]

    video.get_components()
    video.save_to(str(tmp_path / "out.mp4"))
    gc.collect()

    # The first frame and both reads of the VIDEO uploaded the items; none is still held by the outputs.
    assert len(uploaded) >= 5 and all(ref() is None for ref in uploaded)


def test_mesh_files_the_core_cannot_read_fail_clearly(tmp_path):
    (tmp_path / "model.fbx").write_bytes(b"")

    with pytest.raises(ValueError, match="fbx"):
        _stickers(scene=Types.File3D(str(tmp_path / "model.fbx")))


def test_cutout_shoots_the_mesh_of_the_pano_scene():
    mesh = Types.MESH(torch.tensor([QUAD]), torch.tensor([QUAD_FACES]), vertex_colors=torch.tensor([[[1.0, 0.0, 0.0]] * 4]))
    pano_scene = _stickers(scene=mesh)[3]

    ahead = _cutout_frames(_cutout(pano_scene, _camera(hFOV_deg=30.0)))
    behind = _cutout_frames(_cutout(pano_scene, _camera(yaw_deg=180.0, hFOV_deg=30.0)))

    assert torch.allclose(_center(ahead), torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(_center(behind), torch.tensor([0.0, 1.0, 0.0]))
