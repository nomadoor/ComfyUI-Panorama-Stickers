import math

import numpy as np
import pytest
import torch

from comfyui_pano_suite.core.math import ray_directions
from comfyui_pano_suite.core.mesh_render import BARE_COLOR, EDGE, MeshItem, mesh_content, render_mesh
from comfyui_pano_suite.core.render import Projection, SceneSources, StickerSource, render_frame
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


@pytest.mark.parametrize("projection", [Projection.erp(96, 48), Projection.erp(49, 50, coverage=180), Projection.perspective(64, 40, 100.0)])
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


def test_texture_is_sampled_through_the_uvs_and_vertex_colors_multiply_it():
    # A quad facing the Camera, 2 ahead, its uv (0, 0) at the top left as in glTF.
    vertices = torch.tensor([[-1.0, 1.0, -2.0], [1.0, 1.0, -2.0], [1.0, -1.0, -2.0], [-1.0, -1.0, -2.0]])
    uvs = torch.tensor([[0.0, 0.0], [1.0, 0.0], [1.0, 1.0], [0.0, 1.0]])
    texture = torch.tensor([[[1.0, 0.0, 0.0], [0.0, 1.0, 0.0]], [[0.0, 0.0, 1.0], [1.0, 1.0, 1.0]]])
    faces = torch.tensor([[0, 3, 2], [0, 2, 1]])
    projection = Projection.perspective(40, 40, 90.0)

    textured, depth = render_mesh(_view(projection), MeshItem(vertices, faces, uvs, texture=texture))
    tinted, _depth = render_mesh(_view(projection), MeshItem(vertices, faces, uvs, torch.tensor([[0.5, 1.0, 1.0, 0.2]] * 4), texture))
    colored, _depth = render_mesh(_view(projection), MeshItem(vertices, faces, colors=torch.tensor([[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0], [0.0, 0.0, 1.0]])))
    bare, _depth = render_mesh(_view(projection), MeshItem(vertices, faces))
    repeated, _depth = render_mesh(_view(projection), MeshItem(vertices, faces, uvs * 2.0 - 0.5, texture=texture))

    # The quad fills the middle half; its quadrants show the texels.
    assert torch.allclose(textured[12, 12], torch.tensor([1.0, 0.0, 0.0, 1.0]))
    assert torch.allclose(textured[12, 27], torch.tensor([0.0, 1.0, 0.0, 1.0]))
    assert torch.allclose(textured[27, 12], torch.tensor([0.0, 0.0, 1.0, 1.0]))
    assert torch.allclose(textured[27, 27], torch.ones(4))
    assert float(textured[5, 5, 3]) == 0.0 and math.isinf(float(depth[5, 5]))
    assert abs(float(depth[19, 19]) - 2.0 * math.hypot(1.0, 0.025, 0.025)) < 1e-4
    # Vertex colors multiply the texture; their alpha is not read.
    assert torch.allclose(tinted[27, 27], torch.tensor([0.5, 1.0, 1.0, 1.0]))
    # Without a texture the vertex colors are interpolated, and bare geometry is gray.
    assert [int(colored[row, column, :3].argmax()) for row, column in ((10, 10), (10, 29), (29, 29))] == [0, 1, 2]
    assert torch.allclose(bare[20, 20], torch.tensor([BARE_COLOR, BARE_COLOR, BARE_COLOR, 1.0]))
    # Outside 0..1 the texture repeats: uv -0.25 is 0.75, the second texel; 1.25 is 0.25, the first.
    assert torch.allclose(repeated[12, 12], torch.ones(4), atol=1e-5)
    assert torch.allclose(repeated[27, 27], torch.tensor([1.0, 0.0, 0.0, 1.0]), atol=1e-5)


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

    assert content.count == 2 and reds == [0.0, 0.0, 1.0, 1.0, 0.0]
    assert calls == [0, 1, 0]


def test_mesh_is_ordered_by_depth_with_world_stickers():
    # A wall 3 ahead between a small Sticker 1 ahead and a large one 10 ahead.
    vertices = torch.tensor([[-2.0, -2.0, -3.0], [2.0, -2.0, -3.0], [2.0, 2.0, -3.0], [-2.0, 2.0, -3.0]])
    content = mesh_content(1, lambda index: MeshItem(vertices, torch.tensor([[0, 1, 2], [0, 2, 3]]), colors=torch.tensor([[1.0, 0.0, 0.0]] * 4)))
    stickers = [
        {"id": id_, "placement": "world", "source": {"kind": "file", "filename": f"{id_}.png"}, "position": {"value": position}, "scale": {"value": scale}}
        for id_, position, scale in (("near", [0.0, 0.0, -1.0], 0.5), ("far", [0.0, 0.0, -10.0], 40.0))
    ]
    state = load_scene_state({"version": 2, "stickers": stickers})
    blue = np.zeros((4, 4, 4), dtype=np.float32)
    blue[..., 2:] = 1.0
    white = np.ones((4, 4, 4), dtype=np.float32)
    evaluated = evaluate_scene_state(state, 0.0)

    color, _mask, depth = render_frame(evaluated, SceneSources({"near": StickerSource(blue, FULL), "far": StickerSource(white, FULL)}, state["painting"]),
                                       evaluated["camera"], Projection.erp(360, 180), bg=None, bg_color=(0.0, 1.0, 0.0), device=CPU, scene=content, scene_index=0)

    assert torch.allclose(color[89, 180], torch.tensor([0.0, 0.0, 1.0]))
    assert torch.allclose(color[89, 210], torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(color[89, 235], torch.ones(3))
    assert abs(float(depth[89, 210]) - 3.0 / math.cos(math.radians(30.5))) < 1e-3
