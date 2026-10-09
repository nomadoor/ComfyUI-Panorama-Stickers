import gc
import json
import logging
import math
import struct
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
from comfy_extras.nodes_depth_anything_3 import DA3GeometryToMesh
from comfy_extras.nodes_save_3d import mesh_item_to_glb_bytes, save_glb

from comfyui_pano_suite import nodes
from comfyui_pano_suite import scene_mesh, sticker_media
from comfyui_pano_suite.core import mesh_render
from comfyui_pano_suite.core.mesh_render import DEFAULT_LIGHTS, linear_to_srgb, shade_standard, srgb_to_linear
from comfyui_pano_suite.core.render import Projection
from comfyui_pano_suite.core.world import world_rotation
from comfyui_pano_suite.core.world_render import CameraView
from scene_test_helpers import state_text, temp_entry_path
from scene_test_helpers import camera_state as _camera, center as _center, shoot as _shoot, video_frames as _shot_frames
from test_studio_camera import _upstream as _studio
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
        # Only the points, the mask, and the image are read; the intrinsics only tell a perspective frame apart, and
        # `points` (against DA3_GEOMETRY's `mode`) tells the dict apart.
        assert recording.read == {"points", "mask", "image"} and recording.asked <= {"points", "mask", "intrinsics"}


def test_moge_panorama_seen_from_its_center_is_its_own_erp(monkeypatch):
    image = _gradient(16, 32)
    geometry = _moge_panorama(image, monkeypatch)

    rgba, depth = nodes._scene_content(geometry).render(_origin(Projection.erp(32, 16)), 0, torch.device("cpu"))

    # Each pixel center of the ERP is a vertex of the grid; the texture is sampled at texel centers as glTF does,
    # up to half a texel off at the image edges (interpolated in linear light).
    assert bool((rgba[..., 3] == 1.0).all())
    assert (rgba[..., :3] - image[0]).abs().amax() < 0.06
    assert torch.allclose(depth, geometry["points"][0].norm(dim=-1), rtol=1e-4)


def test_moge_mask_drops_its_pixels():
    geometry = _moge(torch.rand((1, 8, 8, 3)))
    geometry["mask"][:, :, :4] = False

    rgba, _depth = nodes._scene_content(geometry).render(_origin(Projection.perspective(8, 8, 90.0)), 0, torch.device("cpu"))

    # The left half of the 90 degree MoGe camera is gone; the right half is drawn from the edge column on.
    assert not bool(rgba[:, :4, 3].any()) and bool(rgba[:, 5:, 3].all())


def test_moge_video_draws_each_frame_at_its_time():
    reds = torch.stack([torch.zeros((12, 16, 3)).index_fill_(-1, torch.tensor([0]), (index + 1) / 10) for index in range(3)])

    image = _frames(_studio(scene=_moge(reds)))

    assert _batch_index_at_center(image) == [0, 1, 2]


def test_mesh_is_drawn_and_written_for_the_editor():
    texture = torch.tensor([[[[1.0, 0.0, 0.0], [0.0, 1.0, 0.0]], [[0.0, 0.0, 1.0], [1.0, 1.0, 1.0]]]])
    mesh = Types.MESH(torch.tensor([QUAD]), torch.tensor([QUAD_FACES]), uvs=torch.tensor([QUAD_UVS]), texture=texture, unlit=True)

    output = nodes.PanoramaStudioNode.execute(bg_color="#00ff00", coverage="360", output_size="1024", state_json="", scene=mesh)

    image = output.result[0][0]
    # The quad spans 53 degrees around the ERP center: its top left corner shows the red texel alone (past the
    # texel's center the edge texel is clamped), its bottom right corner the white one.
    assert torch.allclose(image[200, 450], torch.tensor([1.0, 0.0, 0.0]), atol=0.02)
    assert torch.allclose(image[312, 575], torch.ones(3), atol=0.02)
    assert torch.allclose(image[100, 100], torch.tensor([0.0, 1.0, 0.0]))
    assert output.ui["pano_scene_meta"] == [{"kind": "mesh", "unlit": True}] and _path(output.ui["pano_scene_files"][0]).exists()


def test_mesh_batch_items_follow_the_output_frames():
    # Two items of different lengths, red 0.1 and 0.2.
    vertices = torch.zeros((2, 5, 3))
    vertices[0, :4], vertices[1, :3] = torch.tensor(QUAD), torch.tensor([[-1.0, 1.0, -2.0], [1.0, 1.0, -2.0], [0.0, -2.0, -2.0]])
    faces = torch.tensor([QUAD_FACES, [[0, 2, 1], [0, 0, 0]]])
    colors = torch.zeros((2, 5, 3))
    # Linear values that show as red 0.1 and 0.2.
    colors[0, :, 0], colors[1, :, 0] = srgb_to_linear(torch.tensor([0.1, 0.2]))
    mesh = Types.MESH(vertices, faces, vertex_colors=colors, vertex_counts=torch.tensor([4, 3]), face_counts=torch.tensor([2, 1]), unlit=True)

    assert _batch_index_at_center(_frames(_studio(scene=mesh))) == [0, 1]


def _write_obj(path):
    lines = [f"v {x} {y} {z}" for x, y, z in QUAD] + [f"f {a + 1} {b + 1} {c + 1}" for a, b, c in QUAD_FACES]
    path.write_text("\n".join(lines) + "\n")
    return path


def _lit_center(base, metalness, roughness, normal=(0.0, 0.0, 1.0)):
    """The sRGB color three.js gives a MeshStandardMaterial facing the Camera at the middle of a 1024 x 512 ERP,
    under the default lights."""
    directional = [light for light in DEFAULT_LIGHTS if light.type == "directional"]
    directions = torch.tensor(np.stack([np.asarray(light.position) / np.linalg.norm(light.position) for light in directional]), dtype=torch.float32)
    colors = torch.tensor([[light.intensity] * 3 for light in directional])
    view = torch.tensor([[-math.sin(math.pi / 1024), math.sin(math.pi / 1024), math.cos(math.pi / 1024)]])
    color = shade_standard(torch.tensor([base]), torch.tensor([[metalness]]), torch.tensor([[roughness]]), torch.tensor([normal]), view,
                           directions, colors, torch.full((3,), 1.5))
    return linear_to_srgb(color[0]).clamp(0.0, 1.0)


def test_mesh_files_are_drawn_and_written_for_the_editor(tmp_path):
    texture = Image.fromarray(np.full((2, 2, 3), (255, 0, 0), np.uint8), mode="RGB")
    (tmp_path / "quad.glb").write_bytes(save_glb(torch.tensor(QUAD), torch.tensor(QUAD_FACES), uvs=torch.tensor(QUAD_UVS), texture_image=texture))

    # Neither has KHR_materials_unlit, so both are lit; neither has normals, so they shade flat. The textured GLB's
    # material is rough (1.0), the bare OBJ's is save_glb's gray at roughness 0.5.
    for name, color in (("quad.glb", _lit_center([1.0, 0.0, 0.0], 0.0, 1.0)), (_write_obj(tmp_path / "quad.obj").name, _lit_center([0.22] * 3, 0.0, 0.5))):
        result = _studio(scene=Types.File3D(str(tmp_path / name)))
        ui = nodes._scene_ui(result[4].layers[-1].scene)

        assert torch.allclose(result[0][0, 256, 512], color, atol=2e-3)
        assert ui["pano_scene_meta"] == [{"kind": "mesh", "unlit": False}]
        assert np.allclose(np.sort(_glb_positions(_path(ui["pano_scene_files"][0])), axis=0), np.sort(np.asarray(QUAD), axis=0))


def test_a_glb_marked_unlit_shows_its_vertex_colors(tmp_path):
    colors = torch.tensor([[0.2, 0.6, 0.9]] * 4)
    (tmp_path / "unlit.glb").write_bytes(save_glb(torch.tensor(QUAD), torch.tensor(QUAD_FACES), vertex_colors=colors, unlit=True))

    result = _studio(scene=Types.File3D(str(tmp_path / "unlit.glb")))

    assert result[4].layers[-1].scene.unlit is True
    assert torch.allclose(result[0][0, 256, 512], linear_to_srgb(colors[0]), atol=1e-5)
    assert nodes._scene_ui(result[4].layers[-1].scene)["pano_scene_meta"] == [{"kind": "mesh", "unlit": True}]


def test_same_mesh_file_is_read_once_and_keeps_its_editor_files(tmp_path, monkeypatch):
    path = _write_obj(tmp_path / "quad.obj")
    reads, writes = [], []
    read, write = nodes.read_mesh_file, nodes.write_editor_files
    monkeypatch.setattr(nodes, "read_mesh_file", lambda file: reads.append(file) or read(file))
    monkeypatch.setattr(nodes, "write_editor_files", lambda value, progress=None: writes.append(value) or write(value, progress))

    first = nodes.PanoramaStudioNode.execute(bg_color="#00ff00", coverage="360", output_size="1024", state_json="", scene=Types.File3D(str(path)))
    again = nodes.PanoramaStudioNode.execute(bg_color="#00ff00", coverage="360", output_size="1024", state_json="", scene=Types.File3D(str(path)))

    assert len(reads) == 1 and len(writes) == 1
    assert again.ui["pano_scene_files"] == first.ui["pano_scene_files"]
    # A changed file is read again.
    path.write_text(path.read_text() + "v 0 0 0\n")
    nodes.PanoramaStudioNode.execute(bg_color="#00ff00", coverage="360", output_size="1024", state_json="", scene=Types.File3D(str(path)))
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
    result = _studio(scene=mesh)
    video = result[2]

    video.get_components()
    video.save_to(str(tmp_path / "out.mp4"))
    gc.collect()

    # The first frame and both reads of the VIDEO uploaded the items; none is still held by the outputs.
    assert len(uploaded) >= 5 and all(ref() is None for ref in uploaded)


def test_mesh_files_the_core_cannot_read_fail_clearly(tmp_path):
    (tmp_path / "model.fbx").write_bytes(b"")

    with pytest.raises(ValueError, match="fbx"):
        _studio(scene=Types.File3D(str(tmp_path / "model.fbx")))


def test_a_camera_shoots_the_mesh_of_an_upstream_scene():
    mesh = Types.MESH(torch.tensor([QUAD]), torch.tensor([QUAD_FACES]), vertex_colors=torch.tensor([[[1.0, 0.0, 0.0]] * 4]), unlit=True)
    pano_scene = _studio(scene=mesh)[4]

    ahead = _shot_frames(_shoot(pano_scene, _camera(hFOV_deg=30.0), bg_color="#00ff00"))
    behind = _shot_frames(_shoot(pano_scene, _camera(yaw_deg=180.0, hFOV_deg=30.0), bg_color="#00ff00"))

    assert torch.allclose(_center(ahead), torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(_center(behind), torch.tensor([0.0, 1.0, 0.0]))


def _glb_json(data: bytes) -> dict:
    length = struct.unpack_from("<I", data, 12)[0]
    return json.loads(data[20:20 + length])


def _material_cases():
    """MESHes covering the material choices of the core's save_glb."""
    vertices, faces, uvs = torch.tensor([QUAD]), torch.tensor([QUAD_FACES]), torch.tensor([QUAD_UVS])
    image = torch.rand((1, 4, 4, 3), generator=torch.Generator().manual_seed(0))
    colors = torch.rand((1, 4, 3), generator=torch.Generator().manual_seed(1))
    normals = torch.tensor([[[0.0, 0.0, 1.0]] * 4])
    tangents = torch.tensor([[[1.0, 0.0, 0.0, 1.0]] * 4])
    return {
        "bare": Types.MESH(vertices, faces),
        "colored": Types.MESH(vertices, faces, vertex_colors=colors, normals=normals),
        "textured": Types.MESH(vertices, faces, uvs=uvs, texture=image),
        "texture without uvs": Types.MESH(vertices, faces, texture=image),
        "metallic roughness": Types.MESH(vertices, faces, uvs=uvs, texture=image, metallic_roughness=image),
        "occlusion in mr": Types.MESH(vertices, faces, uvs=uvs, metallic_roughness=image, occlusion_in_mr=True, material={"occlusion_strength": 0.4}),
        "normal map": Types.MESH(vertices, faces, uvs=uvs, normals=normals, tangents=tangents, normal_map=image, material={"normal_scale": 0.7}),
        "emissive map": Types.MESH(vertices, faces, uvs=uvs, emissive=image, material={"emissive_strength": 2.5}),
        "emissive factor": Types.MESH(vertices, faces, material={"emissive_factor": [0.3, 1.5, 0.0]}),
        "overrides": Types.MESH(vertices, faces, vertex_colors=colors, material={"base_color_factor": [0.5, 0.6, 0.7, 1.0], "metallic_factor": 0.8, "roughness_factor": 0.3, "double_sided": False}),
        "auto factors": Types.MESH(vertices, faces, uvs=uvs, texture=image, material={"metallic_factor": -1.0, "roughness_factor": -1.0}),
        "unlit colored": Types.MESH(vertices, faces, vertex_colors=colors, unlit=True),
        "unlit textured": Types.MESH(vertices, faces, uvs=uvs, texture=image, unlit=True, material={"base_color_factor": [0.5, 1.0, 1.0, 1.0]}),
    }


@pytest.mark.parametrize("case", list(_material_cases()))
def test_mesh_material_is_the_material_of_the_items_glb(case):
    mesh = _material_cases()[case]
    gltf = _glb_json(mesh_item_to_glb_bytes(mesh, 0))
    written = gltf["materials"][0]
    pbr = written["pbrMetallicRoughness"]
    attributes = gltf["meshes"][0]["primitives"][0]["attributes"]

    material = scene_mesh.mesh_material(mesh, 0)
    item = scene_mesh.mesh_item(mesh, 0)

    # The values three.js's GLTFLoader puts on the MeshStandardMaterial (its defaults where the GLB has none).
    assert material.base_color_factor == pytest.approx(tuple(pbr.get("baseColorFactor", [1.0] * 4)[:3]))
    assert material.metallic_factor == pytest.approx(pbr.get("metallicFactor", 1.0))
    assert material.roughness_factor == pytest.approx(pbr.get("roughnessFactor", 1.0))
    assert material.emissive_factor == pytest.approx(tuple(written.get("emissiveFactor", [0.0] * 3)))
    strength = written.get("extensions", {}).get("KHR_materials_emissive_strength", {}).get("emissiveStrength", 1.0)
    assert np.allclose(np.asarray(material.emissive_factor) * material.emissive_strength, np.asarray(written.get("emissiveFactor", [0.0] * 3)) * strength)
    assert material.normal_scale == pytest.approx(written.get("normalTexture", {}).get("scale", 1.0))
    assert material.occlusion_strength == pytest.approx(written.get("occlusionTexture", {}).get("strength", 1.0))
    # The item draws with the maps and attributes the GLB has.
    assert (item.texture is not None) == ("baseColorTexture" in pbr)
    assert (item.metallic_roughness is not None) == ("metallicRoughnessTexture" in pbr)
    assert item.occlusion_in_mr == ("occlusionTexture" in written)
    assert (item.normal_map is not None) == ("normalTexture" in written)
    assert (item.emissive is not None) == ("emissiveTexture" in written)
    assert (item.normals is not None) == ("NORMAL" in attributes) and (item.colors is not None) == ("COLOR_0" in attributes)
    assert (item.tangents is not None) == ("TANGENT" in attributes)
    # The mark comes from the MESH, whether or not the GLB carries KHR_materials_unlit.
    assert item.unlit == bool(mesh.unlit) and scene_mesh.is_unlit(mesh) == bool(mesh.unlit)
    assert ("KHR_materials_unlit" in written.get("extensions", {})) == (bool(mesh.unlit) and mesh.texture is None)


def test_a_glb_read_back_keeps_its_material(tmp_path):
    # A file's material comes from the core's reader: its factors, with glTF's defaults where the file has none.
    mesh = _material_cases()["overrides"]
    (tmp_path / "model.glb").write_bytes(mesh_item_to_glb_bytes(mesh, 0))

    read = nodes._read_scene_file(Types.File3D(str(tmp_path / "model.glb")), "scene")

    assert scene_mesh.mesh_material(read, 0) == scene_mesh.mesh_material(mesh, 0)
    assert _glb_json(mesh_item_to_glb_bytes(read, 0))["materials"][0]["pbrMetallicRoughness"] == _glb_json(mesh_item_to_glb_bytes(mesh, 0))["materials"][0]["pbrMetallicRoughness"]


def test_moge_frames_and_marked_meshes_are_not_lit_and_others_are():
    geometry = _moge(torch.rand((1, 8, 8, 3)))
    lit = Types.MESH(torch.tensor([QUAD]), torch.tensor([QUAD_FACES]))
    marked = Types.MESH(torch.tensor([QUAD]), torch.tensor([QUAD_FACES]), unlit=True)
    view = _origin(Projection.perspective(16, 16, 90.0))

    assert scene_mesh.is_unlit(geometry) is True and scene_mesh.mesh_item(lit, 0).unlit is False and scene_mesh.mesh_item(marked, 0).unlit is True
    shown_lit = nodes._scene_content(lit).render(view, 0, torch.device("cpu"))[0][8, 8, :3]
    shown_marked = nodes._scene_content(marked).render(view, 0, torch.device("cpu"))[0][8, 8, :3]
    # The marked one is save_glb's unlit material: white; the lit one is gray under the lights.
    assert torch.allclose(shown_marked, torch.ones(3), atol=1e-6)
    assert float(shown_lit[0]) < 0.95


# DA3_GEOMETRY (the core's Run Depth Anything 3 output; docs/render-contract.md, "`DA3_GEOMETRY` のメッシュ"). The dicts
# are small and synthetic: there is no DA3 model in the tests.

H, W = 6, 8
DEFAULTS = (1, 0.04, 0.1, True, True)


def _mono(count=2, depth=2.0, **extra):
    """A mono DA3_GEOMETRY of `count` frames of a plane `depth` ahead, frame i red (i + 1) / 10 (an sRGB photo)."""
    image = torch.zeros((count, H, W, 3))
    for index in range(count):
        image[index, ..., 0] = (index + 1) / 10.0
    return {"depth": torch.full((count, H, W), depth), "image": image, "mode": "mono", **extra}


def _k():
    return torch.tensor([[0.7 * W, 0.0, (W - 1) / 2.0], [0.0, 0.7 * W, (H - 1) / 2.0], [0.0, 0.0, 1.0]])


def _multiview(intrinsics=None, sky=None):
    """Two views of planes 2 ahead; view 1's camera stands 3 to the right (+X) of view 0's."""
    extrinsics = torch.zeros((1, 2, 3, 4))
    extrinsics[0, :, :3, :3] = torch.eye(3)
    extrinsics[0, 1, :3, 3] = torch.tensor([-3.0, 0.0, 0.0])
    geometry = {
        "depth": torch.full((2, H, W), 2.0), "image": torch.rand((2, H, W, 3), generator=torch.Generator().manual_seed(0)), "mode": "multiview",
        "extrinsics": extrinsics, "intrinsics": _k()[None, None].expand(1, 2, 3, 3).clone() if intrinsics is None else intrinsics,
    }
    if sky is not None:
        geometry["sky"] = sky
    return geometry


def _da3_view(projection, position=(0.0, 0.0, 0.0)):
    return CameraView(np.asarray(position, dtype=np.float64), world_rotation(0.0, 0.0, 0.0), projection)


def _da3_execute(**inputs):
    return nodes.PanoramaStudioNode.execute(bg_color="#00ff00", coverage="360", output_size="1024", state_json=state_text(inputs.pop("state", None)), **inputs)


def test_the_core_names_an_all_empty_frame_by_the_text_da3_scene_content_takes():
    # Everything is sky: the core's converter refuses with the text that marks an empty frame.
    geometry = _mono(count=1, sky=torch.ones((1, H, W)), intrinsics=_k()[None, None])

    with pytest.raises(ValueError) as raised:
        DA3GeometryToMesh.execute(geometry, 0, *DEFAULTS)

    assert str(raised.value).startswith(scene_mesh.DA3_EMPTY_MESH)


def test_mono_frames_are_the_cores_meshes_with_its_default_k_and_one_warning_per_run(caplog):
    geometry = _mono()
    caplog.set_level(logging.WARNING)

    meshes = [scene_mesh.da3_meshes(geometry, index) for index in range(2)]

    # The core's own conversion without intrinsics (which warns for each frame) gives the same meshes.
    with caplog.at_level(logging.WARNING):
        caplog.clear()
        meshes = [scene_mesh.da3_meshes(geometry, index) for index in range(2)]
        assert not any("has no intrinsics" in record.getMessage() for record in caplog.records)
        core = [DA3GeometryToMesh.execute(geometry, index, *DEFAULTS).result[0] for index in range(2)]
    for [mine], theirs in zip(meshes, core):
        assert torch.equal(mine.vertices, theirs.vertices) and torch.equal(mine.faces, theirs.faces) and torch.equal(mine.uvs, theirs.uvs)
    # The input is not changed.
    assert "intrinsics" not in geometry
    caplog.clear()
    _da3_execute(scene=_mono(), sticker=_mono())
    studio = [record for record in caplog.records if "intrinsics" in record.getMessage()]
    assert len(studio) == 1 and "Panorama Stickers" in studio[0].getMessage() and studio[0].name.startswith("comfyui_pano_suite")


def test_mono_frames_follow_the_output_frames_and_are_not_lit():
    output = _da3_execute(scene=_mono(count=3))
    frames = output.result[2].get_components().images

    assert [round(float(frame[256, 512, 0]) * 10) for frame in frames] == [1, 2, 3]
    assert output.ui["pano_scene_meta"] == [{"kind": "mesh", "unlit": True}]
    assert len(output.ui["pano_scene_files"]) == 3 and all(temp_entry_path(entry).exists() for entry in output.ui["pano_scene_files"])


def test_empty_frames_are_drawn_empty_and_have_no_editor_file(monkeypatch):
    sky = torch.zeros((2, H, W))
    sky[1] = 1.0
    geometry = _mono(sky=sky)
    content = nodes._scene_content(geometry)

    rgba, depth = content.render(_da3_view(Projection.perspective(16, 16, 60.0)), 1, torch.device("cpu"))

    assert float(rgba[..., 3].max()) == 0.0 and bool(torch.isinf(depth).all())
    files = nodes._scene_ui(geometry)["pano_scene_files"]
    assert files[0] is not None and files[1] is None
    # A MESH the core returns without faces is empty too; other errors stop the run.
    from comfy_api.latest import Types

    monkeypatch.setattr(scene_mesh, "DA3GeometryToMesh", type("Fake", (), {"execute": staticmethod(
        lambda *args: type("Out", (), {"result": [Types.MESH(torch.zeros((1, 3, 3)), torch.zeros((1, 0, 3), dtype=torch.long))]})())}))
    assert scene_mesh.da3_meshes(_mono(count=1), 0) == []

    def broken(*args):
        raise ValueError("DA3GeometryToMesh: something else")

    monkeypatch.setattr(scene_mesh, "DA3GeometryToMesh", type("Broken", (), {"execute": staticmethod(broken)}))
    with pytest.raises(ValueError, match="something else"):
        scene_mesh.da3_meshes(_mono(count=1), 0)


def test_multiview_is_one_still_item_of_every_view_folded_by_depth():
    geometry = _multiview()
    content = nodes._scene_content(geometry)

    # From between the two cameras: both planes, each about 2.9 wide around x 0 and 3, show side by side.
    rgba, depth = content.render(_da3_view(Projection.perspective(64, 32, 120.0), position=(1.5, 0.0, 0.0)), 0, torch.device("cpu"))

    assert content.count == 1
    row = rgba[16, :, 3]
    assert bool(row[7:20].all()) and bool(row[-20:-7].all()) and not bool(row[:3].any())
    # Straight alpha: the folded layer's colors are not darkened where it is opaque.
    alone, _depth = nodes._scene_content({**geometry, "depth": geometry["depth"][:1], "image": geometry["image"][:1], "extrinsics": geometry["extrinsics"][:, :1], "intrinsics": geometry["intrinsics"][:, :1]}).render(
        _da3_view(Projection.perspective(64, 32, 120.0), position=(1.5, 0.0, 0.0)), 0, torch.device("cpu"))
    both = alone[..., 3] > 0
    assert torch.allclose(rgba[both], alone[both], atol=1e-6)
    assert bool(torch.isfinite(depth[16, 7:20]).all())


def test_multiview_editor_files_are_one_item_of_the_views_glbs_and_empty_views_are_left_out():
    sky = torch.zeros((2, H, W))
    sky[1] = 1.0

    both = nodes._scene_ui(_multiview())
    one = nodes._scene_ui(_multiview(sky=sky))
    none = nodes._scene_ui(_multiview(sky=torch.ones((2, H, W))))

    assert both["pano_scene_meta"] == [{"kind": "mesh", "unlit": True}]
    [views] = both["pano_scene_files"]
    assert isinstance(views, list) and len(views) == 2 and all(temp_entry_path(entry).exists() for entry in views)
    assert len(one["pano_scene_files"][0]) == 1
    assert none["pano_scene_files"] == [None]


def test_multiview_without_poses_stops_at_the_entry():
    geometry = _multiview(intrinsics=torch.eye(3)[None, None].expand(1, 2, 3, 3).clone())

    for name in ("scene", "sticker"):
        with pytest.raises(ValueError, match="multiview.*mono"):
            _da3_execute(**{name: geometry})


def test_editor_files_are_written_once_per_input_dict(monkeypatch):
    geometry = _mono()
    writes = []
    write = nodes.write_editor_files
    monkeypatch.setattr(nodes, "write_editor_files", lambda value, progress=None: writes.append(value) or write(value, progress))

    first = _da3_execute(scene=geometry)
    again = _da3_execute(scene=geometry, state={"version": 2, "timeline": {"fps": 12}})

    assert len(writes) == 1 and again.ui["pano_scene_files"] == first.ui["pano_scene_files"]


@pytest.mark.parametrize("make", ["mono", "moge"])
def test_dicts_on_the_sticker_input_are_3d_stickers(make):
    media = _mono(count=1) if make == "mono" else _moge(torch.full((1, 12, 16, 3), 0.5))

    output = _da3_execute(sticker=media)

    layer = output.result[4].layers[-1]
    assert layer.port.is_3d and layer.state["stickers"][0]["placement"] == "world"
    assert output.ui["pano_sticker_meta"] == [{"kind": "mesh", "unlit": True}]
    assert "pano_sticker_input_images" not in output.ui
    box = sticker_media.content_box(media)
    assert box is not None and np.isfinite(box["min"]).all()
    assert not torch.allclose(output.result[0][0, 256, 512], torch.tensor([0.0, 1.0, 0.0]))


def test_the_content_box_of_da3_is_the_cores_vertices_over_every_view():
    geometry = _multiview()

    box = sticker_media.content_box(geometry)

    vertices = torch.cat([mesh.vertices[0] for mesh in scene_mesh.da3_meshes(geometry, 0)])
    assert box == {"min": vertices.amin(0).tolist(), "max": vertices.amax(0).tolist()}
    # View 1 stands 3 to the right.
    assert box["max"][0] > 3.0 and box["min"][2] == pytest.approx(-2.0)
    assert sticker_media.content_box(_mono(count=1, sky=torch.ones((1, H, W)))) is None


def test_the_memory_estimate_counts_the_converted_meshes_not_the_dict():
    mono, multiview = _mono(count=3), _multiview()

    one, both = scene_mesh.da3_device_bytes(mono), scene_mesh.da3_device_bytes(multiview)

    # One frame's full grid on the device (float32 vertices, uvs, linear texture; int64 faces), all views for multiview.
    grid = H * W * (3 + 2 + 3) * 4 + (H - 1) * (W - 1) * 2 * 3 * 8
    assert one == grid and both == 2 * grid


def test_each_da3_frame_is_converted_once_for_the_render_the_editor_files_and_the_box(monkeypatch):
    converted = []
    execute = DA3GeometryToMesh.execute

    class Counting:
        @staticmethod
        def execute(geometry, index, *args):
            converted.append(index)
            return execute(geometry, index, *args)

    monkeypatch.setattr(scene_mesh, "DA3GeometryToMesh", Counting)
    geometry = _mono(count=3)

    # The sticker input places by the content box, then the run draws and writes the editor files; the video reads again.
    output = _da3_execute(sticker=geometry)
    output.result[2].get_components()

    assert sorted(converted) == [0, 1, 2]
