import math
import struct
from io import BytesIO

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_extras.nodes_gaussian_splat",
    reason="ComfyUI core is required for the SPLAT renderer",
)

from comfy_api.latest import Types
from comfy_extras.nodes_gaussian_splat import _C0, _linear_to_srgb, _quat_mul, _srgb_to_linear, RenderSplat, SplatToFile3D

from comfyui_pano_suite import nodes, splat_render
from comfyui_pano_suite.core.render import Projection, SceneSources, StickerSource, render_frame
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.core.world import world_rotation
from comfyui_pano_suite.core.world_render import CameraView
from comfyui_pano_suite.splat_render import splat_content
from scene_test_helpers import blob as _blob, blobs as _blobs, splat_of as _splat


CPU = torch.device("cpu")
BLACK = (0.0, 0.0, 0.0)
GREEN = (0.0, 1.0, 0.0)
FULL = {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0}



def _shell(count, center, radius, seed=0):
    """Gaussians on a sphere, colored by their direction from its center."""
    generator = torch.Generator().manual_seed(seed)
    direction = torch.randn((count, 3), generator=generator)
    direction = direction / direction.norm(dim=-1, keepdim=True)
    scales = torch.rand((count, 3), generator=generator) * 0.04 * radius + 0.02 * radius
    opacities = torch.rand(count, generator=generator) * 0.5 + 0.5
    return _splat(direction * radius + torch.tensor(center), scales, opacities, 0.5 + 0.4 * direction, seed)




def _render(splat, projection, state=None, sources=None, bg=None, bg_color=BLACK):
    state = state or load_scene_state({"version": 2})
    evaluated = evaluate_scene_state(state, 0.0)
    return render_frame(evaluated, SceneSources(sources or {}, state["painting"]), evaluated["camera"], projection,
                        bg=bg, bg_key=None if bg is None else 0, bg_color=bg_color, device=CPU, scene=splat_content(splat), scene_index=0)


def _core(splat, size, fov, quaternion=(0.0, 0.0, 0.0, 1.0)):
    camera = {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "target": {"x": 0.0, "y": 0.0, "z": -1.0},
              "quaternion": dict(zip("xyzw", quaternion)), "fov": fov, "zoom": 1.0, "cameraType": "perspective"}
    image, _mask = RenderSplat.execute(splat, size, size, 1, 1.0, 2.0, 0.0, 0.0, "#000000", "color", camera_info=camera).result
    return image[0].float().cpu()


def test_perspective_matches_the_core_render_splat_from_the_same_camera():
    # A ball of gaussians 4 units ahead (+Z in the SPLAT's 3DGS frame), seen by a Camera at the origin at rotation 0
    # and by the core's camera at the origin looking down -Z (Load3D's World, which is glTF as ours).
    splat = _shell(20000, (0.0, 0.0, 4.0), 1.0)

    color, _mask, _depth = _render(splat, Projection.perspective(256, 256, 60.0))

    assert float((color - _core(splat, 256, 60.0)).abs().mean()) * 255 <= 2.0


def test_the_math_is_the_core_s_up_to_the_pixel_centers():
    # The core centers pixel i at i, this package at i + 0.5: turning the core's camera half a pixel right and down
    # lines the two up, and the splat layer composited over black in linear light, as the core does, is its image.
    splat = _shell(20000, (0.0, 0.0, 4.0), 1.0)
    half = math.atan(0.5 / (128.0 / math.tan(math.radians(30.0))))
    turn = _quat_mul(torch.tensor([[math.cos(-half / 2), 0.0, math.sin(-half / 2), 0.0]]), torch.tensor([[math.cos(-half / 2), math.sin(-half / 2), 0.0, 0.0]]))[0]

    rgba, _depth = splat_content(splat).render(CameraView(np.zeros(3), world_rotation(0.0, 0.0, 0.0), Projection.perspective(256, 256, 60.0)), 0, CPU)

    image = _linear_to_srgb(_srgb_to_linear(rgba[..., :3]) * rgba[..., 3:])
    core = _core(splat, 256, 60.0, (*turn[1:].tolist(), float(turn[0])))
    assert float((image - core).abs().mean()) * 255 <= 0.25


@pytest.mark.parametrize("coverage", [360, 180])
def test_erp_turned_by_whole_columns_is_the_same_image_shifted(coverage):
    # The Camera sits inside a ball of gaussians, so they cross the seam and every cube face would have content.
    splat = _shell(20000, (0.0, 0.0, 0.0), 2.0, seed=1)
    width = 128
    base = _render(splat, Projection.erp(width, 64, coverage))

    for columns in (1, 37):
        state = load_scene_state({"version": 2, "camera": {"rotation": {"value": {"yaw_deg": columns * coverage / width}}}})
        turned = _render(splat, Projection.erp(width, 64, coverage), state)
        # Turning right moves the content left; a 180 image keeps only the columns both halves see. Near its
        # poles they differ slightly: wide gaussians crossing the seam behind reach in from the other side.
        tolerances = (1e-4, 0.0, 1e-4) if coverage == 360 else (3e-3, 0.0, 1e-2)
        for value, expected, atol in zip(turned, base, tolerances):
            assert torch.allclose(torch.roll(value, columns, dims=1)[:, columns:], expected[:, columns:], atol=atol)
        if coverage == 360:
            assert torch.allclose(torch.roll(turned[0], columns, dims=1), base[0], atol=1e-4)


def test_splat_frame_is_a_half_turn_of_gltf_about_x():
    # (0, -1, -3) in the 3DGS frame is (0, 1, 3) in glTF: behind the Camera at rotation 0, and above it.
    color, _mask, depth = _render(_blobs(_blob((0.0, -1.0, -3.0), (1.0, 0.0, 0.0), size=0.2)), Projection.erp(360, 180))

    rows, cols = torch.nonzero(color[..., 0] > 0.5, as_tuple=True)
    # glTF +Z is behind (longitude 180, the seam), +Y up: latitude atan(1 / 3).
    assert set(cols.tolist()) <= set(range(0, 20)) | set(range(340, 360))
    assert abs(float(rows.float().mean()) + 0.5 - (90.0 - math.degrees(math.atan2(1.0, 3.0)))) < 1.0
    assert abs(float(depth[rows, cols].min()) - math.sqrt(10.0)) < 0.3


def _copies(blob, count):
    return tuple(part.repeat(count, *([1] * (part.dim() - 1))) for part in blob)


def test_depth_is_where_the_accumulated_alpha_first_exceeds_half():
    # Faint gaussians in front of opaque ones, 1000 each so that they fall in two depth slabs (the depth is
    # resolved per slab, as the core composites). The faint ones alone never reach 0.5, so the depth is the far ones'.
    faint = _copies(_blob((0.0, 0.0, 2.0), (1.0, 0.0, 0.0), opacity=0.0003, size=0.5), 1000)
    solid = _copies(_blob((0.0, 0.0, 4.0), (0.0, 0.0, 1.0), opacity=0.5, size=1.0), 1000)
    projection = Projection.perspective(64, 64, 30.0)
    view = CameraView(np.zeros(3), world_rotation(0.0, 0.0, 0.0), projection)

    _rgba, both = splat_content(_blobs(faint, solid)).render(view, 0, CPU)
    rgba, alone = splat_content(_blobs(faint)).render(view, 0, CPU)

    # The density peaks along each ray; at the center that is the gaussian's own distance.
    assert abs(float(both[32, 32]) - 4.0) < 0.05
    # Where the alpha never exceeds 0.5 the depth is the alpha-weighted mean, and +inf where nothing is drawn.
    assert 0.0 < float(rgba[32, 32, 3]) < 0.5 and abs(float(alone[32, 32]) - 2.0) < 0.05
    assert math.isinf(float(alone[0, 0])) and float(rgba[0, 0, 3]) == 0.0


def _seen_from_both_sides(splat):
    """The color at the center of a 30 degree view of the SPLAT's origin from 3 units along glTF +Z and -Z."""
    colors = []
    for z, yaw in ((3.0, 0.0), (-3.0, 180.0)):
        view = CameraView(np.array([0.0, 0.0, z]), world_rotation(yaw, 0.0, 0.0), Projection.perspective(16, 16, 30.0))
        rgba, _depth = splat_content(splat).render(view, 0, CPU)
        colors.append(rgba[8, 8, :3])
    return colors


def _with_sh(splat, rest):
    return Types.SPLAT(splat.positions, splat.scales, splat.rotations, splat.opacities, torch.cat([splat.sh, rest], dim=2))


def test_degree_1_harmonics_change_the_color_with_the_view_direction():
    # The direction from the Camera to the center in the 3DGS frame is +Z from glTF +Z (SPLAT -Z) and -Z from the
    # other side; the degree 1 harmonic along Z (the third coefficient) adds or takes away 0.3 there.
    base = _blobs(_blob((0.0, 0.0, 0.0), (0.5, 0.5, 0.5), size=0.2))
    rest = torch.zeros((1, 1, 3, 3))
    rest[0, 0, 1] = 0.3 / splat_render._SH_C1

    front, back = _seen_from_both_sides(_with_sh(base, rest))

    assert torch.allclose(front, torch.full((3,), 0.8), atol=1e-3)
    assert torch.allclose(back, torch.full((3,), 0.2), atol=1e-3)


def test_base_color_alone_is_the_same_from_every_side():
    base = _blobs(_blob((0.0, 0.0, 0.0), (0.7, 0.4, 0.2), size=0.2))

    front, back = _seen_from_both_sides(base)
    padded = _seen_from_both_sides(_with_sh(base, torch.zeros((1, 1, 15, 3))))

    assert torch.equal(front, back)
    assert torch.allclose(front, torch.tensor([0.7, 0.4, 0.2]), atol=1e-3)
    assert all(torch.allclose(value, front, atol=1e-6) for value in padded)


@pytest.mark.parametrize("position, rotation, coefficient, expected", [
    # From glTF +X (the 3DGS frame's +X too) the Camera looks along -X: x = -1 and -C1 x = +C1.
    ((3.0, 0.0, 0.0), (-90.0, 0.0), 3, 0.8),
    # From glTF +Y (the 3DGS frame's -Y, which points down) it looks along +Y of the 3DGS frame: -C1 y = -C1.
    ((0.0, 3.0, 0.0), (0.0, -90.0), 1, 0.2),
])
def test_degree_1_harmonics_follow_the_3dgs_frame(position, rotation, coefficient, expected):
    base = _blobs(_blob((0.0, 0.0, 0.0), (0.5, 0.5, 0.5), size=0.2))
    rest = torch.zeros((1, 1, 3, 3))
    rest[0, 0, coefficient - 1] = 0.3 / splat_render._SH_C1
    view = CameraView(np.array(position), world_rotation(*rotation, 0.0), Projection.perspective(16, 16, 30.0))

    rgba, _depth = splat_content(_with_sh(base, rest)).render(view, 0, CPU)

    assert torch.allclose(rgba[8, 8, :3], torch.full((3,), expected), atol=1e-3)


# Each degree 2 and 3 harmonic at the direction (1, 2, 2) / 3, from the real spherical harmonics of 3DGS:
# x = 1/3, y = z = 2/3.
DEGREE_2_AND_3 = {
    4: 1.0925484305920792 * 2 / 9,                    # xy
    5: -1.0925484305920792 * 4 / 9,                   # yz
    6: 0.31539156525252005 * 3 / 9,                   # 2zz - xx - yy
    7: -1.0925484305920792 * 2 / 9,                   # xz
    8: 0.5462742152960396 * -3 / 9,                   # xx - yy
    9: -0.5900435899266435 * 2 / 3 * -1 / 9,          # y (3xx - yy)
    10: 2.890611442640554 * 4 / 27,                   # xyz
    11: -0.4570457994644658 * 2 / 3 * 11 / 9,         # y (4zz - xx - yy)
    12: 0.3731763325901154 * 2 / 3 * -7 / 9,          # z (2zz - 3xx - 3yy)
    13: -0.4570457994644658 * 1 / 3 * 11 / 9,         # x (4zz - xx - yy)
    14: 1.445305721320277 * 2 / 3 * -3 / 9,           # z (xx - yy)
    15: -0.5900435899266435 * 1 / 3 * -11 / 9,        # x (xx - 3yy)
}


@pytest.mark.parametrize("index", sorted(DEGREE_2_AND_3))
def test_degree_2_and_3_harmonics_are_in_the_3dgs_order(index):
    sh = torch.zeros((1, 16, 3))
    sh[0, index] = 0.2

    color = splat_render._view_colors(sh, torch.tensor([[1.0, 2.0, 2.0]]))

    assert torch.allclose(color[0], torch.full((3,), 0.5 + 0.2 * DEGREE_2_AND_3[index]), atol=1e-6)


def _world_sticker(sticker_id, distance, scale=0.6):
    return {"id": sticker_id, "placement": "world", "source": {"kind": "file", "filename": f"{sticker_id}.png"},
            "position": {"value": [0.0, 0.0, -distance]}, "scale": {"value": scale}}


def _solid(color):
    rgba = np.ones((4, 4, 4), dtype=np.float32)
    rgba[..., :3] = color
    return rgba


@pytest.mark.parametrize("distance, front", [(1.0, True), (3.0, False)])
def test_splat_and_world_stickers_are_ordered_by_depth(distance, front):
    # A solid red ball of gaussians 2 ahead (the Camera looks down glTF -Z, the SPLAT's +Z), a blue Sticker in
    # front of or behind it, and nothing else but the bg_color.
    splat = _blobs(_blob((0.0, 0.0, 2.0), (1.0, 0.0, 0.0), size=0.15))
    state = load_scene_state({"version": 2, "stickers": [_world_sticker("s", distance, scale=0.1 * distance)]})
    sources = {"s": StickerSource(_solid((0.0, 0.0, 1.0)), FULL)}

    color, _mask, depth = _render(splat, Projection.perspective(64, 64, 30.0), state, sources, bg_color=GREEN)

    assert torch.allclose(color[32, 32], torch.tensor((0.0, 0.0, 1.0) if front else (1.0, 0.0, 0.0)), atol=0.02)
    assert abs(float(depth[32, 32]) - (distance if front else 2.0)) < 0.05
    # The holes show bg_color.
    assert torch.allclose(color[0, 0], torch.tensor(GREEN)) and math.isinf(float(depth[0, 0]))


def test_holes_show_the_bg_media():
    splat = _blobs(_blob((0.0, 0.0, 2.0), (1.0, 0.0, 0.0), size=0.5))
    bg = torch.full((90, 180, 3), 0.25)

    color, _mask, _depth = _render(splat, Projection.erp(180, 90), bg=bg, bg_color=GREEN)

    assert torch.allclose(color[45, 90], torch.tensor((1.0, 0.0, 0.0)), atol=0.02)
    assert torch.allclose(color[10, 10], torch.full((3,), 0.25))


def _splat_file_bytes(splat):
    """The antimatter15 .splat records of a one-item SPLAT, which the core reads but cannot write."""
    rgb = (splat.sh[0, :, 0] * _C0 + 0.5).clamp(0.0, 1.0)
    rows = []
    for position, scale, rotation, alpha, color in zip(splat.positions[0], splat.scales[0], splat.rotations[0], splat.opacities[0, :, 0], rgb):
        rgba = (torch.cat([color, alpha[None]]) * 255).round().byte().tolist()
        quaternion = (rotation * 128 + 128).round().clamp(0, 255).byte().tolist()
        rows.append(struct.pack("<3f3f4B4B", *position.tolist(), *scale.tolist(), *rgba, *quaternion))
    return b"".join(rows)


def _execute(scene):
    return nodes.PanoramaStickersSceneNode.execute(bg_color="#00ff00", coverage="360", output_preset="1024", state_json="", scene=scene)


@pytest.mark.parametrize("file_format", ["ply", "spz", "ksplat", "splat"])
def test_splat_files_on_the_scene_input_are_drawn_and_written_for_the_editor(file_format):
    splat = _shell(2000, (0.0, 0.0, 4.0), 1.0)
    if file_format == "splat":
        model = Types.File3D(BytesIO(_splat_file_bytes(splat)), file_format="splat")
    else:
        model = SplatToFile3D.execute(splat, file_format).result[0]

    output = _execute(model)

    # The lossy formats quantize the gaussians, so the image is close to the SPLAT's rather than equal.
    expected = _execute(splat).result[0]
    assert float((output.result[0] - expected).abs().mean()) * 255 < 2.0
    assert float((expected - torch.tensor(GREEN)).abs().amax(dim=-1).gt(0.1).float().mean()) > 0.01
    assert output.ui["pano_scene_meta"] == [{"kind": "splat"}]
    assert [entry["filename"].endswith(".ply") for entry in output.ui["pano_scene_files"]] == [True]
    # PANO_SCENE holds the SPLAT read from the file, so its consumers do not read the file again.
    assert isinstance(output.result[3].scene, Types.SPLAT)


def test_a_splat_file_is_read_once_while_it_does_not_change(monkeypatch, tmp_path):
    path = tmp_path / "scene.ply"
    path.write_bytes(SplatToFile3D.execute(_shell(200, (0.0, 0.0, 4.0), 1.0), "ply").result[0].get_bytes())
    reads = []
    original = splat_render.File3DToSplat.execute
    monkeypatch.setattr(splat_render.File3DToSplat, "execute", lambda model: reads.append(model) or original(model))

    first = _execute(Types.File3D(str(path)))
    second = _execute(Types.File3D(str(path)))

    assert len(reads) == 1 and second.result[3].scene is first.result[3].scene


def test_splat_files_are_told_by_their_contents():
    splat = _shell(200, (0.0, 0.0, 4.0), 1.0)
    ply = SplatToFile3D.execute(splat, "ply").result[0].get_bytes()
    mesh_ply = b"ply\nformat binary_little_endian 1.0\nelement vertex 1\nproperty float x\nproperty float y\nproperty float z\nend_header\n" + bytes(12)

    # A stream without a format is read as the core reads it; a PLY without 3DGS properties is a mesh (#62).
    assert isinstance(splat_render.read_splat_file(Types.File3D(BytesIO(ply))), Types.SPLAT)
    assert isinstance(splat_render.read_splat_file(Types.File3D(BytesIO(_splat_file_bytes(splat)))), Types.SPLAT)
    assert splat_render.read_splat_file(Types.File3D(BytesIO(mesh_ply), file_format="ply")) is None
    assert splat_render.read_splat_file(Types.File3D("model.glb")) is None
    with pytest.raises(ValueError, match="3D file on the scene input is neither"):
        _execute(Types.File3D(BytesIO(mesh_ply), file_format="ply"))


def test_cutout_shoots_the_splat_of_a_pano_scene():
    # A red ball 4 ahead of the Stickers Camera; the Cutout Camera at the same place sees it in its center.
    splat = _blobs(_blob((0.0, 0.0, 4.0), (1.0, 0.0, 0.0), size=0.5))
    pano_scene = _execute(splat).result[3]

    image = nodes.PanoramaCutoutSceneNode.execute(source=pano_scene, coverage="360", output_megapixels=0.05, state_json="").result[0][0]

    height, width = image.shape[:2]
    assert torch.allclose(image[height // 2, width // 2], torch.tensor((1.0, 0.0, 0.0)), atol=0.02)
    assert torch.allclose(image[0, 0], torch.tensor(GREEN))
