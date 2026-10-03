import math

import numpy as np
import pytest
import torch

from comfyui_pano_suite.core import render as render_module
from comfyui_pano_suite.core.render import Projection, RenderLayer, SceneSources, StickerSource, render_frame
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.core.world import world_to_pano
from comfyui_pano_suite.core.world_render import ContentSource, SceneContent, world_layer


GREEN = (0.0, 1.0, 0.0)
RED = (1.0, 0.0, 0.0)
BLUE = (0.0, 0.0, 1.0)
FULL = {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0}
CPU = torch.device("cpu")


def _solid(color, alpha=1.0, size=(4, 4)):
    rgba = np.zeros((*size, 4), dtype=np.float32)
    rgba[..., :3] = color
    rgba[..., 3] = alpha
    return rgba


def _world(sticker_id, position=None, scale=None, **rotation):
    return {
        "id": sticker_id,
        "placement": "world",
        "source": {"kind": "file", "filename": f"{sticker_id}.png"},
        "position": {"value": position},
        "rotation": {"value": rotation},
        "scale": {"value": scale},
    }


def _state(stickers=(), camera=None, **state):
    camera = camera or {}
    return load_scene_state({"version": 2, "stickers": list(stickers), "camera": {"position": {"value": camera.get("position")}, "rotation": {"value": camera}}, **state})


def _render(state, sources, projection, frame=0.0, cache=None, bg=None, scene=None, scene_index=None):
    evaluated = evaluate_scene_state(state, frame)
    return render_frame([RenderLayer(evaluated, SceneSources(sources, state["painting"]), scene, scene_index)], evaluated["camera"], projection,
                        bg=bg, bg_key=None if bg is None else 0, bg_color=GREEN, device=CPU, cache=cache)


def _centroid(color, rgb):
    """The mean (x, y) pixel position of the pixels of `rgb`, in pixels from the top left corner."""
    rows, cols = torch.nonzero((color - torch.tensor(rgb)).abs().amax(dim=-1) < 0.05, as_tuple=True)
    assert rows.numel() > 0
    return float(cols.float().mean()) + 0.5, float(rows.float().mean()) + 0.5


def _erp_pixel(target, camera, projection):
    """Analytic ERP position of the World point `target` seen from `camera` at rotation 0."""
    x, y, z = world_to_pano(np.asarray(target) - np.asarray(camera))
    lon, lat = math.atan2(x, z), math.atan2(y, math.hypot(x, z))
    return (lon / (2.0 * math.pi) + 0.5) * projection.width, (0.5 - lat / math.pi) * projection.height


@pytest.mark.parametrize("camera", [[0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [0.0, 0.5, 1.0]])
def test_world_sticker_is_drawn_where_its_position_projects_and_moves_with_the_camera(camera):
    projection = Projection.erp(512, 256)
    target = [1.0, 0.5, -2.0]
    state = _state([_world("s", position=target, scale=0.2)], camera={"position": camera})

    color, _mask, depth = _render(state, {"s": StickerSource(_solid(RED), FULL)}, projection)

    x, y = _centroid(color, RED)
    expected_x, expected_y = _erp_pixel(target, camera, projection)
    assert abs(x - expected_x) < 0.5 and abs(y - expected_y) < 0.5
    distance = float(np.linalg.norm(np.asarray(target) - np.asarray(camera)))
    assert abs(float(depth[int(y), int(x)]) - distance) < 0.02


def test_world_sticker_at_rotation_zero_faces_a_camera_at_rotation_zero_upright():
    # A source red on the left half and blue on the right, and top half alpha 1, bottom half drawn too.
    rgba = _solid(RED)
    rgba[:, 2:, :3] = BLUE
    rgba[2:, :, :3] = (1.0, 1.0, 1.0)
    state = _state([_world("s", position=[0.0, 0.0, -1.0], scale=1.0)])

    color, _mask, _depth = _render(state, {"s": StickerSource(rgba, FULL)}, Projection.perspective(64, 64, 90.0))

    assert torch.allclose(color[16, 16], torch.tensor(RED), atol=1e-4)
    assert torch.allclose(color[16, 47], torch.tensor(BLUE), atol=1e-4)
    assert torch.allclose(color[47, 16], torch.ones(3), atol=1e-4)


def test_world_sticker_spans_scale_wide_and_the_cropped_source_aspect_tall():
    # Scale 2 at distance 1 spans 90 degrees; a 2:1 crop of a square source is half as tall (2 * atan(0.5)).
    state = _state([_world("s", position=[0.0, 0.0, -1.0], scale=2.0)])
    crop = {"x0": 0.0, "y0": 0.25, "x1": 1.0, "y1": 0.75}
    projection = Projection.perspective(200, 200, 120.0)

    color, _mask, _depth = _render(state, {"s": StickerSource(_solid(RED, size=(8, 8)), crop)}, projection)

    red = (color - torch.tensor(RED)).abs().amax(dim=-1) < 0.05
    focal = 100 / math.tan(math.radians(60.0))
    assert abs(int(red[100].sum()) - 2 * focal * 1.0) <= 2
    assert abs(int(red[:, 100].sum()) - 2 * focal * 0.5) <= 2


def test_world_sticker_in_perspective_projects_like_a_pinhole_camera():
    projection = Projection.perspective(128, 96, 90.0)
    state = _state([_world("s", position=[0.5, 0.25, -2.0], scale=0.1)], camera={"yaw_deg": 0.0})

    color, _mask, _depth = _render(state, {"s": StickerSource(_solid(RED), FULL)}, projection)

    focal = 64.0  # hFOV 90 over 128 pixels
    x, y = _centroid(color, RED)
    assert abs(x - (64 + focal * 0.5 / 2.0)) < 0.5 and abs(y - (48 - focal * 0.25 / 2.0)) < 0.5


def test_world_sticker_follows_the_camera_rotation_in_both_projections():
    target = [2.0, 0.0, -2.0]  # 45 degrees right of the default forward
    state = _state([_world("s", position=target, scale=0.2)], camera={"yaw_deg": 45.0})
    sources = {"s": StickerSource(_solid(RED), FULL)}

    erp, _mask, _depth = _render(state, sources, Projection.erp(256, 128))
    rect, _mask, _depth = _render(state, sources, Projection.perspective(64, 64, 60.0))

    assert all(abs(a - b) < 0.5 for a, b in zip(_centroid(erp, RED), (128.0, 64.0)))
    assert all(abs(a - b) < 0.5 for a, b in zip(_centroid(rect, RED), (32.0, 32.0)))


def test_overlapping_world_stickers_are_ordered_by_depth_and_show_through_transparency():
    near = _solid(RED)
    near[:, :2, 3] = 0.0  # the left half is a hole
    stickers = [_world("far", position=[0.0, 0.0, -3.0], scale=6.0), _world("near", position=[0.0, 0.0, -1.0], scale=1.0)]
    sources = {"near": StickerSource(near, FULL), "far": StickerSource(_solid(BLUE), FULL)}
    projection = Projection.erp(360, 180)

    for order in (stickers, stickers[::-1]):
        color, _mask, depth = _render(_state(order), sources, projection)

        # Columns at longitude -10, +10, +40, and +90 degrees on the horizon.
        assert torch.allclose(color[89, 170], torch.tensor(BLUE), atol=1e-4)
        assert torch.allclose(color[89, 190], torch.tensor(RED), atol=1e-4)
        assert torch.allclose(color[89, 220], torch.tensor(BLUE), atol=1e-4)
        assert torch.allclose(color[89, 270], torch.tensor(GREEN), atol=1e-4)
        assert 3.0 < float(depth[89, 170]) < 3.1 and 1.0 < float(depth[89, 190]) < 1.1
        assert math.isinf(float(depth[89, 270]))


def test_world_sticker_seen_from_behind_is_drawn_mirrored():
    rgba = _solid(RED)
    rgba[:, 2:, :3] = BLUE
    sources = {"s": StickerSource(rgba, FULL)}
    projection = Projection.erp(360, 180)
    front = _state([_world("s", position=[0.0, 0.0, -1.0])])
    # The same plane behind the Camera faces away from it; the Camera turns to see its back.
    back = _state([_world("s", position=[0.0, 0.0, 1.0])], camera={"yaw_deg": 180.0})

    front_color, _mask, _depth = _render(front, sources, projection)
    back_color, _mask, back_depth = _render(back, sources, projection)

    # Columns at longitude -10 and +10 degrees from the output center.
    assert torch.allclose(front_color[89, 170], torch.tensor(RED), atol=1e-4) and torch.allclose(front_color[89, 190], torch.tensor(BLUE), atol=1e-4)
    assert torch.allclose(back_color[89, 170], torch.tensor(BLUE), atol=1e-4) and torch.allclose(back_color[89, 190], torch.tensor(RED), atol=1e-4)
    assert 1.0 < float(back_depth[89, 170]) < 1.1


def test_world_sticker_in_a_180_output_is_drawn_in_the_camera_front_hemisphere_only():
    projection = Projection.erp(180, 180, 180)
    state = _state([_world("s", position=[1.0, 0.0, -1.0], scale=0.1), _world("b", position=[0.0, 0.0, 2.0], scale=1.0)])
    sources = {"s": StickerSource(_solid(RED), FULL), "b": StickerSource(_solid(BLUE), FULL)}

    color, _mask, depth = _render(state, sources, projection)

    # 45 degrees right of the center of a 180 degree span; the Sticker behind the Camera is outside it.
    x, y = _centroid(color, RED)
    assert abs(x - 135.0) < 0.5 and abs(y - 90.0) < 0.5
    assert abs(float(depth[int(y), int(x)]) - math.sqrt(2.0)) < 0.02
    assert not bool(((color - torch.tensor(BLUE)).abs().amax(dim=-1) < 0.05).any())


def test_a_middle_world_sticker_shows_between_a_translucent_near_one_and_an_opaque_far_one():
    # In state order the far opaque B would hide the middle C under the near translucent A.
    stickers = [_world("a", position=[0.0, 0.0, -1.0], scale=1.0), _world("b", position=[0.0, 0.0, -3.0], scale=6.0),
                _world("c", position=[0.0, 0.0, -2.0], scale=2.0)]
    sources = {"a": StickerSource(_solid(RED, alpha=0.5), FULL), "b": StickerSource(_solid(BLUE), FULL), "c": StickerSource(_solid(GREEN), FULL)}

    color, _mask, depth = _render(_state(stickers), sources, Projection.erp(64, 32))

    assert torch.allclose(color[16, 32], torch.tensor([0.5, 0.5, 0.0]), atol=1e-4)
    assert 1.0 <= float(depth[16, 32]) < 1.1


def test_world_sticker_opacity_blends_with_what_is_behind():
    state = _state([_world("s", position=[0.0, 0.0, -1.0], scale=1.0)])
    state["stickers"][0]["opacity"] = {"value": 0.25, "keyframes": []}

    color, _mask, _depth = _render(state, {"s": StickerSource(_solid(RED), FULL)}, Projection.erp(64, 32))

    assert torch.allclose(color[16, 32], torch.tensor([0.25, 0.75, 0.0]), atol=1e-4)


def test_world_sticker_is_drawn_over_the_background_and_sky_stickers_whatever_their_z_index():
    sky = {"id": "sky", "source": {"kind": "file", "filename": "sky.png"}, "z_index": 100, "size": {"value": {"hFOV_deg": 90.0, "vFOV_deg": 90.0}}}
    state = _state([_world("w", position=[0.0, 0.0, -100.0], scale=50.0), sky])
    sources = {"w": StickerSource(_solid(RED), FULL), "sky": StickerSource(_solid(BLUE), FULL, z_index=100)}

    color, _mask, depth = _render(state, sources, Projection.erp(64, 32), bg=torch.full((32, 64, 3), 0.5))

    assert torch.allclose(color[16, 32], torch.tensor(RED), atol=1e-4)
    assert torch.allclose(color[16, 26], torch.tensor(BLUE), atol=1e-4)
    assert torch.allclose(color[16, 2], torch.full((3,), 0.5), atol=1e-4)
    assert math.isfinite(float(depth[16, 32])) and math.isinf(float(depth[16, 26]))


def test_world_sticker_behind_the_camera_or_seen_edge_on_is_not_drawn_in_front():
    state = _state([_world("s", position=[0.0, 0.0, 1.0], scale=1.0)])

    color, _mask, depth = _render(state, {"s": StickerSource(_solid(RED), FULL)}, Projection.perspective(32, 32, 90.0))

    assert torch.allclose(color, torch.tensor(GREEN).expand(32, 32, 3))
    assert torch.isinf(depth).all()


def _counting(monkeypatch):
    counts = {"world_layer": 0, "composite_frame": 0}
    for name in counts:
        original = getattr(render_module, name)

        def counted(*args, _name=name, _original=original, **kwargs):
            counts[_name] += 1
            return _original(*args, **kwargs)

        monkeypatch.setattr(render_module, name, counted)
    return counts


def test_static_world_sticker_with_a_static_camera_returns_the_previous_frame(monkeypatch):
    counts = _counting(monkeypatch)
    state = _state([_world("s", position=[0.0, 0.0, -1.0])])
    sources = {"s": StickerSource(_solid(RED), FULL)}
    cache = {}

    first = _render(state, sources, Projection.erp(64, 32), cache=cache)
    second = _render(state, sources, Projection.erp(64, 32), frame=5.0, cache=cache)

    assert all(a is b for a, b in zip(first, second))
    assert counts == {"world_layer": 1, "composite_frame": 1}


def test_world_layer_is_kept_while_the_background_changes(monkeypatch):
    counts = _counting(monkeypatch)
    state = _state([_world("s", position=[0.0, 0.0, -1.0])])
    sources = {"s": StickerSource(_solid(RED), FULL)}
    cache = {}
    evaluated = evaluate_scene_state(state, 0.0)
    for key in range(3):
        render_frame([RenderLayer(evaluated, SceneSources(sources, state["painting"]))], evaluated["camera"], Projection.erp(64, 32),
                     bg=torch.full((32, 64, 3), key / 4), bg_key=key, bg_color=GREEN, device=CPU, cache=cache)

    assert counts == {"world_layer": 1, "composite_frame": 3}


def test_camera_position_draws_world_content_again_but_not_a_sky_only_frame(monkeypatch):
    counts = _counting(monkeypatch)
    moving = {"position": {"keyframes": [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 10, "value": [1.0, 0.0, 0.0]}]}}
    with_world = load_scene_state({"version": 2, "camera": moving, "stickers": [_world("s", position=[0.0, 0.0, -1.0])]})
    sky_only = load_scene_state({"version": 2, "camera": moving})
    sources = {"s": StickerSource(_solid(RED), FULL)}

    cache = {}
    first, _mask, _depth = _render(with_world, sources, Projection.erp(64, 32), frame=0.0, cache=cache)
    moved, _mask, _depth = _render(with_world, sources, Projection.erp(64, 32), frame=5.0, cache=cache)
    assert counts["world_layer"] == 2 and not torch.equal(first, moved)

    cache = {}
    first = _render(sky_only, {}, Projection.erp(64, 32), frame=0.0, cache=cache)
    moved = _render(sky_only, {}, Projection.erp(64, 32), frame=5.0, cache=cache)
    assert all(a is b for a, b in zip(first, moved))


def test_world_sticker_source_is_uploaded_again_only_when_its_frame_changes():
    state = _state([_world("s", position=[0.0, 0.0, -1.0])])
    evaluated = evaluate_scene_state(state, 0.0)
    textures = {}

    def layers(source):
        return world_layer(evaluated, SceneSources({"s": source}, {}), evaluated["camera"], Projection.erp(32, 16),
                           scene=None, scene_index=None, device=CPU, textures=textures)

    red = layers(StickerSource(_solid(RED), FULL, frame=0))
    uploaded = textures["s"][1]
    layers(StickerSource(_solid(RED), FULL, frame=0))
    assert textures["s"][1] is uploaded
    blue = layers(StickerSource(_solid(BLUE), FULL, frame=1))
    assert textures["s"][1] is not uploaded
    assert torch.allclose(red[0][8, 16, :3], torch.tensor(RED)) and torch.allclose(blue[0][8, 16, :3], torch.tensor(BLUE))


def test_sources_of_world_stickers_no_longer_drawn_are_released():
    state = _state([_world("s", position=[0.0, 0.0, -1.0])])
    state["stickers"][0]["clip"] = {"start": 0, "in": 0, "duration": 1}
    sources = {"s": StickerSource(_solid(RED), FULL)}
    cache = {}

    _render(state, sources, Projection.erp(32, 16), cache=cache)
    assert "s" in cache["layers"][0]["world_textures"] and cache["layers"][0]["world"] is not None
    _render(state, sources, Projection.erp(32, 16), frame=1.0, cache=cache)
    assert "world" not in cache["layers"][0] and "world_textures" not in cache["layers"][0]


# The `scene` common processing, with a test geometry in place of a SPLAT or MESH rasterizer.


def _ball(radius=0.5, center=(0.0, 0.0, -3.0)):
    """Test content: item i is a ball of `radius` at `center` in its own frame, red (i + 1) / 10. It records the
    views it was given."""
    views = []

    def render(view, index, device):
        views.append((view, index))
        rays = view.rays(device)
        offset = torch.tensor(np.asarray(center) - view.position, dtype=torch.float32, device=device)
        along = rays @ offset
        miss = float(offset @ offset) - along * along - radius * radius
        distance = along - torch.sqrt((-miss).clamp_min(0.0))
        hit = (miss <= 0.0) & (distance > 0.0)
        rgba = torch.zeros((*hit.shape, 4), device=device)
        rgba[..., 0] = (index + 1) / 10
        rgba[..., 3] = hit.float()
        return rgba, torch.where(hit, distance, math.inf)

    return SceneContent(3, render), views


def _scene_state(clip=None, position=None, scale=None, **rotation):
    scene = {"position": {"value": position}, "rotation": {"value": rotation}, "scale": {"value": scale}}
    if clip is not None:
        scene["clip"] = clip
    return load_scene_state({"version": 2, "camera": {}, "scene": scene})


def _ball_at(color):
    """The mean (x, y) of the ball's pixels, and its red, or None where it is not drawn."""
    ball = color[..., 1] < 0.5
    if not bool(ball.any()):
        return None
    rows, cols = torch.nonzero(ball, as_tuple=True)
    return float(cols.float().mean()) + 0.5, float(rows.float().mean()) + 0.5, round(float(color[ball][:, 0].mean()) * 10) - 1


def test_scene_content_is_drawn_through_the_scene_transform():
    content, views = _ball()
    projection = Projection.erp(360, 180)
    # Turned 90 degrees right, scaled by 2, and moved 1 up: the ball's center (0, 0, -3) lands at (6, 1, 0).
    state = _scene_state(position=[0.0, 1.0, 0.0], yaw_deg=90.0, scale=2.0)

    color, _mask, depth = _render(state, {}, projection, scene=content, scene_index=0)

    x, y, item = _ball_at(color)
    expected_x, expected_y = _erp_pixel([6.0, 1.0, 0.0], [0.0, 0.0, 0.0], projection)
    assert abs(x - expected_x) < 0.5 and abs(y - expected_y) < 0.5 and item == 0
    # Distances are World units: the ball of radius 1 is 1 nearer than its center.
    assert abs(float(depth[int(y), int(x)]) - (math.hypot(6.0, 1.0) - 1.0)) < 0.02
    view = views[0][0]
    assert np.allclose(view.position, [0.0, -0.5, 0.0]) and np.allclose(view.rotation @ [0.0, 0.0, -1.0], [-1.0, 0.0, 0.0])


def test_scene_content_follows_scene_keyframes_from_its_clip_origin():
    content, _views = _ball()
    keyframes = [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 4, "value": [3.0, 0.0, 3.0], "easing": "auto"}]
    state = load_scene_state({"version": 2, "camera": {}, "scene": {"clip": {"start": 4, "in": 2}, "position": {"keyframes": keyframes}}})
    projection = Projection.erp(360, 180)

    # Frame 6 is 4 frames after the content's start (start - in = 2): the ball's center is at (3, 0, 0).
    color, _mask, _depth = _render(state, {}, projection, frame=6.0, scene=content, scene_index=0)

    x, y, _item = _ball_at(color)
    expected_x, expected_y = _erp_pixel([3.0, 0.0, 0.0], [0.0, 0.0, 0.0], projection)
    assert abs(x - expected_x) < 0.5 and abs(y - expected_y) < 0.5


def test_scene_content_is_drawn_only_inside_its_clip_range_and_with_an_item():
    content, _views = _ball()
    state = _scene_state({"start": 2, "duration": 2})

    drawn = [_ball_at(_render(state, {}, Projection.erp(64, 32), frame=frame, scene=content, scene_index=0)[0]) is not None for frame in range(5)]
    missing = _render(state, {}, Projection.erp(64, 32), frame=2.0, scene=content, scene_index=None)[0]

    assert drawn == [False, False, True, True, False]
    assert _ball_at(missing) is None


def test_scene_content_is_ordered_by_depth_with_world_stickers():
    content, _views = _ball(radius=1.0)
    stickers = [_world("near", position=[0.0, 0.0, -1.0], scale=0.5), _world("far", position=[0.0, 0.0, -10.0], scale=40.0)]
    state = load_scene_state({"version": 2, "camera": {}, "stickers": stickers})
    sources = {"near": StickerSource(_solid(BLUE), FULL), "far": StickerSource(_solid((1.0, 1.0, 1.0)), FULL)}

    color, _mask, depth = _render(state, sources, Projection.erp(360, 180), scene=content, scene_index=0)

    # The near Sticker covers the ball's center, the ball covers the far Sticker around it.
    assert torch.allclose(color[89, 180], torch.tensor(BLUE), atol=1e-4)
    assert torch.allclose(color[89, 195], torch.tensor([0.1, 0.0, 0.0]), atol=1e-4)
    assert torch.allclose(color[89, 240], torch.ones(3), atol=1e-4)
    assert 2.0 < float(depth[89, 195]) < 2.5


def _content_sticker(sticker_id, position=None, scale=None, opacity=None, **rotation):
    sticker = _world(sticker_id, position, scale, **rotation)
    sticker["source"] = {"kind": "port"}
    sticker["opacity"] = {"value": opacity}
    return sticker


def test_3d_world_sticker_is_its_content_through_its_transform():
    content, views = _ball()
    projection = Projection.erp(360, 180)
    # As the scene transform: the ball's center (0, 0, -3) lands at (6, 1, 0).
    state = load_scene_state({"version": 2, "camera": {}, "stickers": [_content_sticker("ball", position=[0.0, 1.0, 0.0], scale=2.0, yaw_deg=90.0)]})

    color, _mask, depth = _render(state, {"ball": ContentSource(content, 1)}, projection)

    x, y, item = _ball_at(color)
    expected_x, expected_y = _erp_pixel([6.0, 1.0, 0.0], [0.0, 0.0, 0.0], projection)
    assert abs(x - expected_x) < 0.5 and abs(y - expected_y) < 0.5 and item == 1
    assert abs(float(depth[int(y), int(x)]) - (math.hypot(6.0, 1.0) - 1.0)) < 0.02
    assert views[0][1] == 1 and np.allclose(views[0][0].position, [0.0, -0.5, 0.0])


def test_3d_world_sticker_opacity_is_on_its_alpha():
    content, _views = _ball()
    state = load_scene_state({"version": 2, "camera": {}, "stickers": [_content_sticker("ball", opacity=0.5)]})

    color, _mask, _depth = _render(state, {"ball": ContentSource(content, 0)}, Projection.erp(360, 180))

    assert torch.allclose(color[89, 180], torch.tensor([0.05, 0.5, 0.0]), atol=1e-4)


def test_3d_world_sticker_is_ordered_by_depth_with_planes_and_drawn_over_the_sky():
    content, _views = _ball()
    sky = {"id": "sky", "source": {"kind": "file", "filename": "sky.png"}, "z_index": 9, "size": {"value": {"hFOV_deg": 60.0, "vFOV_deg": 60.0}}}
    stickers = [sky, _content_sticker("ball"), _world("near", position=[0.0, 0.0, -1.0], scale=0.2)]
    state = load_scene_state({"version": 2, "camera": {}, "stickers": stickers})
    sources = {"sky": StickerSource(_solid((1.0, 1.0, 1.0)), FULL, 9), "ball": ContentSource(content, 0), "near": StickerSource(_solid(BLUE), FULL)}

    color, _mask, depth = _render(state, sources, Projection.erp(360, 180))

    # The near plane covers the ball's center, the ball covers the Sky around it, and the Sky shows past it.
    assert torch.allclose(color[89, 180], torch.tensor(BLUE), atol=1e-4)
    assert torch.allclose(color[89, 188], torch.tensor([0.1, 0.0, 0.0]), atol=1e-4)
    assert torch.allclose(color[89, 200], torch.ones(3), atol=1e-4)
    assert 2.5 < float(depth[89, 188]) < 3.0 and math.isinf(float(depth[89, 200]))
