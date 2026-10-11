import json
import math
from pathlib import Path

import numpy as np
import pytest
import torch
import torch.nn.functional as F

from comfyui_pano_suite.core import mesh_render
from comfyui_pano_suite.core import world_render as world_render_module
from comfyui_pano_suite.core.math import ray_directions
from comfyui_pano_suite.core.mesh_render import (
    BARE_COLOR,
    DEFAULT_LIGHTS,
    EDGE,
    MeshItem,
    MeshMaterial,
    linear_to_srgb,
    mesh_content,
    render_mesh,
    shade_standard,
)
from comfyui_pano_suite.core.render import Projection, RenderLayer, SceneSources, StickerSource, render_frame
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.core.world import world_rotation
from comfyui_pano_suite.core.world_render import CameraView


CPU = torch.device("cpu")
FULL = {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0}


def _view(projection, position=(0.0, 0.0, 0.0), yaw=0.0, pitch=0.0, roll=0.0):
    return CameraView(np.asarray(position, dtype=np.float64), world_rotation(yaw, pitch, roll), projection)


def _brute_force(view, vertices, faces):
    """Every pixel ray against every triangle in float64, with the renderer's tolerance at the edges: whether it
    hits and the nearest distance."""
    right, up, back = view.rotation.T.tolist()
    rays = ray_directions(right, up, [-value for value in back], view.projection, CPU).double().reshape(-1, 3)
    corners = (torch.as_tensor(vertices, dtype=torch.float64) - torch.as_tensor(view.position))[torch.as_tensor(faces)]
    v0, e1, e2 = corners[:, 0], corners[:, 1] - corners[:, 0], corners[:, 2] - corners[:, 0]
    p = torch.linalg.cross(rays[:, None], e2[None])
    det = (e1[None] * p).sum(-1)
    u = (-v0[None] * p).sum(-1) / det
    q = torch.linalg.cross(-v0, e1)
    v = (rays[:, None] * q[None]).sum(-1) / det
    t = (e2 * q).sum(-1)[None] / det
    hit = (u >= -EDGE) & (v >= -EDGE) & (u + v <= 1 + EDGE) & (t > 0)
    depth = torch.where(hit, t, math.inf).amin(-1)
    height, width = view.projection.height, view.projection.width
    return torch.isfinite(depth).reshape(height, width), depth.reshape(height, width)


def _random_triangles(seed, count=40):
    generator = torch.Generator().manual_seed(seed)
    centers = torch.randn((count, 1, 3), generator=generator, dtype=torch.float64) * 2.0
    vertices = (centers + torch.randn((count, 3, 3), generator=generator, dtype=torch.float64) * 1.5).reshape(-1, 3)
    return vertices, torch.arange(count * 3).reshape(count, 3)


@pytest.mark.parametrize("projection", [
    Projection.erp(96, 48), Projection.erp(49, 50, coverage=180), Projection.perspective(64, 40, 100.0),
    # Lens curves (ADR 0042): a stereographic, a fisheye that sees behind the Camera, a mild barrel.
    Projection.perspective(64, 40, 140.0, curve=0.5), Projection.perspective(63, 41, 250.0, curve=0.0), Projection.perspective(64, 40, 100.0, curve=0.8),
])
@pytest.mark.parametrize("seed", range(4))
def test_triangles_cover_exactly_the_pixels_whose_rays_hit_them_at_the_ray_length(projection, seed):
    # Large random triangles around the Camera cross the ERP seam, surround the poles, and cross the
    # perspective Camera's plane.
    vertices, faces = _random_triangles(seed)
    view = _view(projection, position=(0.3, -0.2, 0.1), yaw=30.0, pitch=-20.0, roll=10.0)

    rgba, depth = render_mesh(view, MeshItem(vertices.float(), faces))

    expected, expected_depth = _brute_force(view, vertices, faces)
    hit = rgba[..., 3] > 0.0
    # Only pixel centers on an edge may come out either way.
    assert int((hit != expected).sum()) <= 2
    both = hit & expected
    assert torch.allclose(depth[both].double(), expected_depth[both], rtol=1e-4, atol=1e-4)
    assert torch.isinf(depth[~hit]).all()


def test_a_triangle_around_the_zenith_covers_the_top_rows():
    # Above the Camera, around the straight-up direction.
    vertices = torch.tensor([[1.0, 1.0, 0.0], [-0.5, 1.0, 0.8], [-0.5, 1.0, -0.8]])
    projection = Projection.erp(64, 32)

    rgba, depth = render_mesh(_view(projection), MeshItem(vertices, torch.tensor([[0, 1, 2]])))

    assert bool((rgba[0, :, 3] == 1.0).all())
    assert torch.allclose(depth[0], torch.ones(64) / math.sin(math.radians(90.0 - 180.0 / 64)), atol=1e-3)


def test_a_quad_behind_the_camera_is_one_piece_across_the_erp_seam():
    # 4 wide, 2 behind the Camera: it spans 90 degrees around longitude 180.
    vertices = torch.tensor([[-2.0, -1.0, 2.0], [2.0, -1.0, 2.0], [2.0, 1.0, 2.0], [-2.0, 1.0, 2.0]])
    projection = Projection.erp(80, 40)

    rgba, _depth = render_mesh(_view(projection), MeshItem(vertices, torch.tensor([[0, 1, 2], [0, 2, 3]])))

    row = rgba[20, :, 3] > 0.0
    assert row[:10].all() and row[-10:].all() and not row[11:-11].any()


# A quad facing the Camera, 2 ahead, its uv (0, 0) at the top left as in glTF.
QUAD = torch.tensor([[-1.0, 1.0, -2.0], [1.0, 1.0, -2.0], [1.0, -1.0, -2.0], [-1.0, -1.0, -2.0]])
QUAD_UVS = torch.tensor([[0.0, 0.0], [1.0, 0.0], [1.0, 1.0], [0.0, 1.0]])
QUAD_FACES = torch.tensor([[0, 3, 2], [0, 2, 1]])
FIXTURES = Path(__file__).resolve().parent / "fixtures"


def _srgb(linear) -> torch.Tensor:
    return linear_to_srgb(torch.as_tensor(linear, dtype=torch.float32))


def test_texture_is_sampled_through_the_uvs_and_vertex_colors_multiply_it():
    texture = torch.tensor([[[1.0, 0.0, 0.0], [0.0, 1.0, 0.0]], [[0.0, 0.0, 1.0], [1.0, 1.0, 1.0]]])
    projection = Projection.perspective(40, 40, 90.0)

    textured, depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, QUAD_UVS, texture=texture))
    tinted, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, QUAD_UVS, torch.tensor([[0.5, 1.0, 1.0, 0.2]] * 4), texture))
    colored, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, colors=torch.tensor([[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0], [0.0, 0.0, 1.0]])))
    bare, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES))
    factored, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, QUAD_UVS, texture=texture, material=MeshMaterial(base_color_factor=(0.5, 1.0, 1.0, 1.0))))

    # The quad fills the middle half; its quadrants show the texels.
    assert torch.allclose(textured[12, 12], torch.tensor([1.0, 0.0, 0.0, 1.0]), atol=1e-6)
    assert torch.allclose(textured[12, 27], torch.tensor([0.0, 1.0, 0.0, 1.0]), atol=1e-6)
    assert torch.allclose(textured[27, 12], torch.tensor([0.0, 0.0, 1.0, 1.0]), atol=1e-6)
    assert torch.allclose(textured[27, 27], torch.ones(4), atol=1e-6)
    assert float(textured[5, 5, 3]) == 0.0 and math.isinf(float(depth[5, 5]))
    assert abs(float(depth[19, 19]) - 2.0 * math.hypot(1.0, 0.025, 0.025)) < 1e-4
    # Vertex colors and the base color factor are linear and multiply the texture; the colors' alpha is not read.
    assert torch.allclose(tinted[27, 27, :3], _srgb([0.5, 1.0, 1.0]), atol=1e-6) and float(tinted[27, 27, 3]) == 1.0
    assert torch.allclose(factored[27, 27, :3], _srgb([0.5, 1.0, 1.0]), atol=1e-6)
    # Without a texture the vertex colors are interpolated, and bare geometry is gray (linear 0.22, about 0.51 in sRGB).
    assert [int(colored[row, column, :3].argmax()) for row, column in ((10, 10), (10, 29), (29, 29))] == [0, 1, 2]
    assert torch.allclose(bare[20, 20, :3], _srgb([BARE_COLOR] * 3)) and abs(float(bare[20, 20, 0]) - 0.51) < 0.01


def test_texels_are_interpolated_in_linear_space():
    # Black and white texels; the pixel at the quad's horizontal middle samples halfway between their centers.
    texture = torch.tensor([[[0.0, 0.0, 0.0], [1.0, 1.0, 1.0]]])
    projection = Projection.perspective(40, 40, 90.0)

    rgba, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, QUAD_UVS, texture=texture))

    # Column 20's center is at u = 0.5 + 0.5 / 20 * ...: sample it as three.js does from SRGB8 texels.
    u = ((20.5 / 40.0) * 2.0 - 1.0) * 2.0 * 0.5 + 0.5
    weight = min(max(u * 2.0 - 0.5, 0.0), 1.0)
    assert torch.allclose(rgba[20, 20, :3], _srgb([weight] * 3), atol=1e-5)
    # sRGB values interpolated as they are would be darker.
    assert float(rgba[20, 20, 0]) > weight + 0.1


def test_uvs_outside_0_to_1_take_the_edge_texels_and_no_mip_level_is_used():
    texture = torch.tensor([[[1.0, 0.0, 0.0], [0.0, 1.0, 0.0]], [[0.0, 0.0, 1.0], [1.0, 1.0, 1.0]]])
    projection = Projection.perspective(40, 40, 90.0)

    clamped, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, QUAD_UVS * 3.0 - 1.0, texture=texture))

    # CLAMP_TO_EDGE: past the edges each corner of the quad shows its corner texel, not a repeat.
    assert torch.allclose(clamped[11, 11, :3], torch.tensor([1.0, 0.0, 0.0]), atol=1e-6)
    assert torch.allclose(clamped[28, 28, :3], torch.ones(3), atol=1e-6)
    # A fine checker seen small: each pixel is the bilinear sample at its own uv, not an average of the texels it
    # covers (three.js samples the editor's GLB without mip levels).
    rows, columns = torch.meshgrid(torch.arange(64), torch.arange(64), indexing="ij")
    checker = ((rows // 2 + columns // 2) % 2).float()[..., None].expand(64, 64, 3).contiguous()
    small, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, QUAD_UVS, texture=checker))
    centers = (torch.arange(10, 30, dtype=torch.float32) + 0.5) / 40.0
    uv = (centers * 2.0 - 1.0) * 2.0 * 0.5 + 0.5
    grid = torch.stack(torch.meshgrid(uv, uv, indexing="xy"), dim=-1) * 2.0 - 1.0
    expected = F.grid_sample(checker.permute(2, 0, 1)[None], grid[None], mode="bilinear", padding_mode="border", align_corners=False)[0].permute(1, 2, 0)
    assert torch.allclose(small[10:30, 10:30, :3], linear_to_srgb(expected), atol=1e-4)
    assert float(small[10:30, 10:30, 0].std()) > 0.2


def test_default_lights_are_the_shared_fixture():
    fixture = json.loads((FIXTURES / "default_lighting.json").read_text(encoding="utf-8"))

    lights = [{"type": light.type, "color": list(light.color), "intensity": light.intensity, **({} if light.position is None else {"position": list(light.position)})}
              for light in DEFAULT_LIGHTS]
    assert lights == fixture["lights"]


def _default_lights_in(frame=np.eye(3)):
    """The default lights' directions and colors, and the ambient light, in the axes `frame` (columns)."""
    directional = [light for light in DEFAULT_LIGHTS if light.type == "directional"]
    directions = np.stack([frame.T @ (np.asarray(light.position) / np.linalg.norm(light.position)) for light in directional])
    colors = np.stack([np.asarray(light.color) * light.intensity for light in directional])
    ambient = sum(np.asarray(light.color) * light.intensity for light in DEFAULT_LIGHTS if light.type == "ambient")
    return torch.tensor(directions, dtype=torch.float32), torch.tensor(colors, dtype=torch.float32), torch.tensor(ambient, dtype=torch.float32)


def test_the_standard_material_is_three_r184():
    # Baked by tools/bake_standard_material.mjs from three.js r184's MeshStandardMaterial under the default lights.
    baked = json.loads((FIXTURES / "standard_material_r184.json").read_text(encoding="utf-8"))
    directions, colors, ambient = _default_lights_in()

    def column(name, width):
        return torch.tensor([case[name] for case in baked["cases"]], dtype=torch.float32).reshape(-1, width)

    color = shade_standard(column("base", 3), column("metalness", 1), column("roughness", 1), column("normal", 3), column("view", 3),
                           directions, colors, ambient, emissive=column("emissive", 3))

    expected = column("expected", 3)
    assert baked["three"] == "0.184.0"
    # Near a sharp highlight the GPU's own interpolation of the view direction moves the value by up to about 1%.
    assert bool(((color - expected).abs() <= 2e-3 + 1e-2 * expected).all())
    assert float(((color - expected).abs() / expected.clamp_min(1e-3)).mean()) < 1e-3


def test_occlusion_darkens_only_the_ambient_light_and_emission_adds():
    directions, colors, ambient = _default_lights_in()
    base, metal, rough = torch.tensor([[0.6, 0.4, 0.2]]), torch.tensor([[0.0]]), torch.tensor([[0.7]])
    normal, view = torch.tensor([[0.0, 0.6, 0.8]]), torch.tensor([[0.0, 0.0, 1.0]])

    full = shade_standard(base, metal, rough, normal, view, directions, colors, ambient)
    occluded = shade_standard(base, metal, rough, normal, view, directions, colors, ambient, occlusion=torch.tensor([[0.0]]))
    dark = shade_standard(base, metal, rough, normal, view, directions, colors, torch.zeros(3))
    glowing = shade_standard(base, metal, rough, normal, view, directions, colors, ambient, emissive=torch.tensor([0.1, 0.2, 0.3]))

    assert torch.allclose(occluded, dark) and torch.allclose(full - dark, ambient * base / math.pi)
    assert torch.allclose(glowing - full, torch.tensor([[0.1, 0.2, 0.3]]))


def _lit_quad(**fields):
    return MeshItem(QUAD, QUAD_FACES, QUAD_UVS, normals=torch.tensor([[0.0, 0.0, 1.0]] * 4), unlit=False, **fields)


def test_an_unlit_item_shows_its_base_color_and_a_lit_one_the_standard_material():
    projection = Projection.perspective(16, 16, 90.0)
    colors = torch.tensor([[0.2, 0.5, 0.8]] * 4)

    unlit, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, colors=colors))
    lit, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES, colors=colors, unlit=False, material=MeshMaterial(roughness_factor=0.6)))

    assert torch.allclose(unlit[8, 8, :3], _srgb([0.2, 0.5, 0.8]))
    # Without normals the quad is flat, its normal toward the Camera (+Z), seen along its center's ray.
    directions, light_colors, ambient = _default_lights_in()
    ray = F.normalize(torch.tensor([[0.5 / 8.0 * 2.0, -0.5 / 8.0 * 2.0, -2.0]]), dim=-1)
    expected = shade_standard(torch.tensor([[0.2, 0.5, 0.8]]), torch.tensor([[0.0]]), torch.tensor([[0.6]]), torch.tensor([[0.0, 0.0, 1.0]]), -ray,
                              directions, light_colors, ambient)
    assert torch.allclose(lit[8, 8, :3], linear_to_srgb(expected[0]).clamp(0.0, 1.0), atol=1e-5)


def test_a_back_face_is_lit_with_its_normal_turned_toward_the_camera():
    projection = Projection.perspective(16, 16, 90.0)

    front, _depth = render_mesh(_view(projection), _lit_quad())
    back, _depth = render_mesh(_view(projection), MeshItem(QUAD, QUAD_FACES[:, [0, 2, 1]], QUAD_UVS, normals=torch.tensor([[0.0, 0.0, -1.0]] * 4), unlit=False))

    assert torch.allclose(front, back, atol=1e-6)


def test_lights_stay_in_the_world_when_the_content_turns():
    # The same lit quad turned by its own vertices, or by the scene transform: the light comes from the same World
    # directions either way.
    turn = world_rotation(40.0, 25.0, 10.0)
    turned_vertices = torch.tensor((QUAD.double().numpy() @ turn.T), dtype=torch.float32)
    turned_normals = torch.tensor(np.tile(turn @ np.array([0.0, 0.0, 1.0]), (4, 1)), dtype=torch.float32)
    projection = Projection.perspective(32, 32, 60.0)
    camera_rotation = turn

    by_vertices, _depth = render_mesh(world_render_module.CameraView(np.zeros(3), camera_rotation, projection),
                                      MeshItem(turned_vertices, QUAD_FACES, normals=turned_normals, unlit=False))
    content = mesh_content(1, lambda index: _lit_quad())
    transform = {"position": [0.0, 0.0, 0.0], "yaw_deg": 40.0, "pitch_deg": 25.0, "roll_deg": 10.0, "scale": 1.0}
    by_transform, _depth = world_render_module._scene_layer(content, 0, transform, world_render_module.CameraView(np.zeros(3), camera_rotation, projection), CPU)
    unturned, _depth = render_mesh(_view(projection), _lit_quad())

    assert torch.allclose(by_vertices, by_transform, atol=1e-5)
    # Seen the same way from the Camera, but lit from elsewhere.
    assert float((unturned[16, 16, :3] - by_transform[16, 16, :3]).abs().max()) > 0.02


def test_maps_scale_the_factors_and_a_flat_normal_map_keeps_the_normal():
    projection = Projection.perspective(16, 16, 90.0)
    material = MeshMaterial(metallic_factor=1.0, roughness_factor=1.0, emissive_factor=(0.2, 0.0, 0.0), emissive_strength=2.0)

    plain, _depth = render_mesh(_view(projection), _lit_quad(material=MeshMaterial(metallic_factor=0.5, roughness_factor=0.4, emissive_factor=(0.2, 0.0, 0.0), emissive_strength=1.0)))
    mapped, _depth = render_mesh(_view(projection), _lit_quad(
        material=material,
        metallic_roughness=torch.tensor([[[1.0, 0.4, 0.5]]]),
        emissive=torch.full((1, 1, 3), float(linear_to_srgb(torch.tensor(0.5)))),
        normal_map=torch.tensor([[[0.5, 0.5, 1.0]]]),
    ))

    assert torch.allclose(plain, mapped, atol=2e-3)


def test_vertex_tangents_and_the_screen_derivative_frame_agree_on_a_flat_quad():
    # A tilted normal map on a quad whose uv runs right and down: three.js derives the same frame from the screen
    # when the GLB has no tangents (GLTFLoader turns the normal scale's y over then).
    projection = Projection.perspective(32, 32, 90.0)
    normal_map = torch.tensor([[[1.0, 0.2, 0.6]]])

    derived, _depth = render_mesh(_view(projection), _lit_quad(normal_map=normal_map))
    given, _depth = render_mesh(_view(projection), _lit_quad(normal_map=normal_map, tangents=torch.tensor([[1.0, 0.0, 0.0, 1.0]] * 4)))
    flat, _depth = render_mesh(_view(projection), _lit_quad())

    assert torch.allclose(derived, given, atol=1e-4)
    assert float((derived - flat).abs().max()) > 0.05


def _hit_quad(projection, pixel):
    view = _view(projection)
    rays = view.rays(CPU).reshape(-1, 3)
    corners = QUAD[QUAD_FACES]
    planes = mesh_render._ray_planes(corners)
    # Every pixel of the 90 degree view of the quad 2 ahead hits its first triangle's plane.
    triangle = torch.zeros_like(pixel)
    lighting = mesh_render._Lighting(view, torch.tensor(view.rotation, dtype=torch.float32), DEFAULT_LIGHTS, projection.width, projection.height,
                                     projection.kind == "erp")
    return lighting, mesh_render._Hit(planes[triangle], rays, pixel, QUAD_FACES[triangle])


def test_screen_derivatives_are_taken_along_the_output_pixel_axes_in_2x2_quads():
    projection = Projection.perspective(8, 8, 90.0)
    pixel = torch.arange(64)
    lighting, hit = _hit_quad(projection, pixel)

    def position(weights, distance, rays):
        return rays * distance[:, None]

    dx, dy = lighting.derivatives(hit, position, hit.ray * hit.distance[:, None])

    # The plane 2 ahead spans 4 across 8 pixels: dFdx is +0.5 along +X (right), dFdy +0.5 along +Y (up), at every
    # pixel of every quad.
    assert torch.allclose(dx, torch.tensor([0.5, 0.0, 0.0]).expand(64, 3), atol=1e-5)
    assert torch.allclose(dy, torch.tensor([0.0, 0.5, 0.0]).expand(64, 3), atol=1e-5)
    # Quads pair columns 2k, 2k + 1 and, counted from the bottom as GL does, the rows above and below.
    (across, _sign_x), (partner_row, sign_y) = lighting.partners(torch.tensor([0, 1, 9, 63]))
    assert across.tolist() == [1, 0, 8, 62] and partner_row.tolist() == [8, 9, 1, 55] and sign_y.tolist() == [-1.0, -1.0, 1.0, 1.0]


def test_partners_past_the_edge_are_the_other_neighbor_or_across_the_erp_seam():
    erp = mesh_render._Lighting(_view(Projection.erp(5, 3)), torch.eye(3), DEFAULT_LIGHTS, 5, 3, True)
    perspective = mesh_render._Lighting(_view(Projection.perspective(5, 3, 90.0)), torch.eye(3), DEFAULT_LIGHTS, 5, 3, False)
    # Column 4 of 5 pairs with the column past the edge; row 0 of 3 with the row above the top (window row 3), so
    # they take the column to the left (or column 0 across the ERP seam) and the row below.
    pixel = torch.tensor([4, 0])

    (erp_across, erp_sign), (erp_row, erp_sign_y) = erp.partners(pixel)
    (across, sign), (row, sign_y) = perspective.partners(pixel)

    assert erp_across.tolist() == [0, 1] and erp_sign.tolist() == [1.0, 1.0]
    assert across.tolist() == [3, 1] and sign.tolist() == [-1.0, 1.0]
    assert (erp_row // 5).tolist() == (row // 5).tolist() == [1, 1] and sign_y.tolist() == [-1.0, -1.0]


@pytest.mark.parametrize("device", ["cpu", "cuda"])
def test_lit_meshes_do_not_depend_on_the_matmul_precision(device):
    if device == "cuda" and not torch.cuda.is_available():
        pytest.skip("CUDA is not available")
    vertices, faces = _random_triangles(3, count=60)
    normals = F.normalize(torch.randn(vertices.shape, generator=torch.Generator().manual_seed(1)), dim=-1)
    item = MeshItem(vertices.float().to(device), faces.to(device), normals=normals.to(device), unlit=False, material=MeshMaterial(roughness_factor=0.3, metallic_factor=0.5))
    view = _view(Projection.erp(256, 128), position=(0.3, -0.2, 0.1), yaw=30.0, pitch=-20.0, roll=10.0)
    precision, allow_tf32 = torch.get_float32_matmul_precision(), torch.backends.cuda.matmul.allow_tf32
    try:
        torch.set_float32_matmul_precision("highest")
        exact = render_mesh(view, item)
        torch.set_float32_matmul_precision("medium")
        torch.backends.cuda.matmul.allow_tf32 = True
        fast = render_mesh(view, item)
    finally:
        torch.set_float32_matmul_precision(precision)
        torch.backends.cuda.matmul.allow_tf32 = allow_tf32

    assert all(torch.equal(a, b) for a, b in zip(exact, fast))


def test_both_sides_are_drawn():
    front = torch.tensor([[-1.0, -1.0, -2.0], [1.0, -1.0, -2.0], [0.0, 1.0, -2.0]])
    projection = Projection.perspective(16, 16, 90.0)

    for faces in (torch.tensor([[0, 1, 2]]), torch.tensor([[0, 2, 1]])):
        rgba, _depth = render_mesh(_view(projection), MeshItem(front, faces))
        assert float(rgba[8, 8, 3]) == 1.0


def test_content_keeps_the_last_item_on_the_device_and_draws_the_requested_item():
    calls = []
    items = [MeshItem(torch.tensor([[-1.0, -1.0, -2.0], [1.0, -1.0, -2.0], [0.0, 1.0, -2.0]]), torch.tensor([[0, 1, 2]]), colors=torch.tensor([[float(index), 0.0, 0.0]] * 3)) for index in range(2)]
    content = mesh_content(2, lambda index: calls.append(index) or items[index])
    view = _view(Projection.perspective(8, 8, 90.0))

    reds = [float(content.render(view, index, CPU)[0][4, 4, 0]) for index in (0, 0, 1, 1, 0)]

    assert content.count == 2 and reds == pytest.approx([0.0, 0.0, 1.0, 1.0, 0.0], abs=1e-6)
    assert calls == [0, 1, 0]


def test_mesh_is_ordered_by_depth_with_world_stickers():
    # A wall 3 ahead between a small Sticker 1 ahead and a large one 10 ahead.
    vertices = torch.tensor([[-2.0, -2.0, -3.0], [2.0, -2.0, -3.0], [2.0, 2.0, -3.0], [-2.0, 2.0, -3.0]])
    content = mesh_content(1, lambda index: MeshItem(vertices, torch.tensor([[0, 1, 2], [0, 2, 3]]), colors=torch.tensor([[1.0, 0.0, 0.0]] * 4)))
    stickers = [
        {"id": id_, "placement": "world", "source": {"kind": "file", "filename": f"{id_}.png"}, "position": {"value": position}, "scale": {"value": scale}}
        for id_, position, scale in (("near", [0.0, 0.0, -1.0], 0.5), ("far", [0.0, 0.0, -10.0], 40.0))
    ]
    state = load_scene_state({"version": 2, "camera": {}, "stickers": stickers})
    blue = np.zeros((4, 4, 4), dtype=np.float32)
    blue[..., 2:] = 1.0
    white = np.ones((4, 4, 4), dtype=np.float32)
    evaluated = evaluate_scene_state(state, 0.0)

    color, _mask, depth = render_frame([RenderLayer(evaluated, SceneSources({"near": StickerSource(blue, FULL), "far": StickerSource(white, FULL)}, state["painting"]), content, 0)],
                                       evaluated["camera"], Projection.erp(360, 180), bg=None, bg_color=(0.0, 1.0, 0.0), device=CPU)

    assert torch.allclose(color[89, 180], torch.tensor([0.0, 0.0, 1.0]))
    assert torch.allclose(color[89, 210], torch.tensor([1.0, 0.0, 0.0]), atol=1e-6)
    assert torch.allclose(color[89, 235], torch.ones(3))
    assert abs(float(depth[89, 210]) - 3.0 / math.cos(math.radians(30.5))) < 1e-3


def test_mesh_content_keeps_the_rays_while_its_view_does_not_turn(monkeypatch):
    made = []
    original = world_render_module.ray_directions
    monkeypatch.setattr(world_render_module, "ray_directions", lambda *args: made.append(args) or original(*args))
    vertices, faces = _random_triangles(0)
    item = MeshItem(vertices.float(), faces)
    content = mesh_content(1, lambda index: item)
    view = _view(Projection.erp(48, 24), yaw=30.0)

    first = content.render(view, 0, torch.device("cpu"))
    second = content.render(_view(Projection.erp(48, 24), position=(0.1, 0.0, 0.0), yaw=30.0), 0, torch.device("cpu"))
    assert len(made) == 1
    content.render(_view(Projection.erp(48, 24), yaw=40.0), 0, torch.device("cpu"))
    assert len(made) == 2
    assert all(torch.equal(a, b) for a, b in zip(first, render_mesh(view, item)))
    assert all(torch.equal(a, b) for a, b in zip(second, render_mesh(_view(Projection.erp(48, 24), position=(0.1, 0.0, 0.0), yaw=30.0), item)))


def test_flat_shading_has_no_geometry_roughness_even_at_a_face_edge():
    # A GPU shades a 2x2 quad per triangle: the partner pixel is a helper invocation of the same face, so the flat
    # normal (from dFdx/dFdy of the view position) is the same in all four, and its derivative is 0, also where the
    # partner pixel lies on another face. A box corner seen at an angle: the pixels next to its edge shade exactly as
    # their own face's flat normal with geometryRoughness 0.
    projection = Projection.perspective(32, 32, 90.0)
    vertices = torch.tensor([[-1.0, 1.0, -2.0], [0.0, 1.0, -1.5], [0.0, -1.0, -1.5], [-1.0, -1.0, -2.0], [1.0, 1.0, -2.0], [1.0, -1.0, -2.0]])
    faces = torch.tensor([[0, 3, 2], [0, 2, 1], [1, 2, 5], [1, 5, 4]])
    rgba, _depth = render_mesh(_view(projection), MeshItem(vertices, faces, unlit=False, material=MeshMaterial(roughness_factor=0.1)))
    directions, colors, ambient = _default_lights_in()
    rays = _view(projection).rays(CPU)
    for column, normal in ((15, [-0.5, 0.0, 1.0]), (16, [0.5, 0.0, 1.0])):
        view_dir = -rays[16, column][None]
        expected = shade_standard(torch.ones((1, 3)), torch.tensor([[0.0]]), torch.tensor([[0.1]]), F.normalize(torch.tensor([normal]), dim=-1),
                                  view_dir, directions, colors, ambient, geometry_roughness=torch.zeros((1, 1)))
        assert torch.allclose(rgba[16, column, :3], linear_to_srgb(expected[0]).clamp(0.0, 1.0), atol=1e-5)
