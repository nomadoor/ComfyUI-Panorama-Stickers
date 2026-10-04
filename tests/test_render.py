import math

import numpy as np
import pytest
import torch

from comfyui_pano_suite.core import render as render_module
from comfyui_pano_suite.core.math import camera_basis, ray_directions
from comfyui_pano_suite.core.painting import load_painting_layer_payload
from comfyui_pano_suite.core.render import Projection, RenderLayer, SceneSources, StickerSource, composite_frame, render_frame
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state


def _pixel(rgba, height=2, width=3):
    return torch.tensor(rgba, dtype=torch.float32).expand(height, width, len(rgba)).clone()


def _depth(value, height=2, width=3):
    return torch.full((height, width), float(value))


GREEN = (0.0, 1.0, 0.0)


def test_composite_draws_bg_color_where_nothing_covers_it():
    color, depth = composite_frame(GREEN, None, _pixel([0.0, 0.0, 0.0, 0.0]))

    assert torch.equal(color, _pixel(list(GREEN)))
    assert torch.isinf(depth).all() and (depth > 0).all()


def test_composite_bg_media_replaces_bg_color():
    bg = _pixel([0.2, 0.4, 0.6])

    color, _depth = composite_frame(GREEN, bg, _pixel([0.0, 0.0, 0.0, 0.0]))

    assert torch.allclose(color, bg)


def test_composite_sky_is_straight_alpha_over_bg_media():
    color, depth = composite_frame(GREEN, _pixel([0.2, 0.4, 0.6]), _pixel([1.0, 0.0, 0.0, 0.25]))

    assert torch.allclose(color, _pixel([0.25 + 0.75 * 0.2, 0.75 * 0.4, 0.75 * 0.6]))
    assert torch.isinf(depth).all()


def test_composite_world_is_drawn_over_the_sky_by_depth_not_list_order():
    near = (_pixel([1.0, 0.0, 0.0, 0.5]), _depth(2.0))
    far = (_pixel([0.0, 0.0, 1.0, 1.0]), _depth(5.0))
    sky = _pixel([0.0, 1.0, 0.0, 1.0])

    color, depth = composite_frame(GREEN, None, sky, [near, far])
    swapped_color, swapped_depth = composite_frame(GREEN, None, sky, [far, near])

    assert torch.allclose(color, _pixel([0.5, 0.0, 0.5]))
    assert torch.allclose(swapped_color, color)
    assert torch.equal(depth, _depth(2.0)) and torch.equal(swapped_depth, depth)


def test_composite_world_layers_at_the_same_depth_keep_list_order():
    first = (_pixel([1.0, 0.0, 0.0, 1.0]), _depth(3.0))
    second = (_pixel([0.0, 0.0, 1.0, 1.0]), _depth(3.0))

    color, _depth_out = composite_frame(GREEN, None, _pixel([0.0, 0.0, 0.0, 0.0]), [first, second])

    assert torch.allclose(color, _pixel([0.0, 0.0, 1.0]))


def test_composite_depth_ignores_fully_transparent_world_pixels():
    empty = (_pixel([1.0, 0.0, 0.0, 0.0]), _depth(1.0))
    solid = (_pixel([0.0, 0.0, 1.0, 1.0]), _depth(4.0))

    color, depth = composite_frame(GREEN, None, _pixel([0.0, 0.0, 0.0, 0.0]), [empty, solid])

    assert torch.allclose(color, _pixel([0.0, 0.0, 1.0]))
    assert torch.equal(depth, _depth(4.0))


def _scene(**state):
    loaded = load_scene_state({"version": 2, "camera": {}, **state})
    return loaded, evaluate_scene_state(loaded, 0.0)


def _render(projection, state=None, sources=None, bg=None, cache=None):
    loaded, evaluated = _scene(**(state or {}))
    sources = sources or SceneSources({}, loaded["painting"])
    return render_frame(
        [RenderLayer(evaluated, sources)],
        evaluated["camera"],
        projection,
        bg=bg,
        bg_color=GREEN,
        device=torch.device("cpu"),
        cache=cache,
    )


@pytest.mark.parametrize("projection, size", [
    (Projection.erp(64, 32), (32, 64)),
    (Projection.erp(64, 64, coverage=180), (64, 64)),
])
def test_render_frame_returns_color_mask_and_sky_depth(projection, size):
    color, mask, depth = _render(projection)

    assert color.shape == (*size, 3) and mask.shape == size and depth.shape == size
    assert color.dtype == mask.dtype == depth.dtype == torch.float32
    assert color.device == mask.device == depth.device
    assert torch.isposinf(depth).all()
    assert torch.allclose(color, torch.tensor(GREEN).expand(*size, 3))


@pytest.mark.skipif(not torch.cuda.is_available(), reason="needs a second device")
def test_render_frame_keeps_every_output_on_the_requested_device():
    loaded, evaluated = _scene()
    device = torch.device("cuda")

    outputs = render_frame([RenderLayer(evaluated, SceneSources({}, loaded["painting"]))], evaluated["camera"], Projection.erp(16, 8),
                           bg=torch.rand(8, 16, 3), bg_color=GREEN, device=device)

    assert all(output.device.type == "cuda" for output in outputs)


def test_projection_represents_erp_and_perspective():
    assert Projection.erp(512, 512, coverage="180") == Projection("erp", 512, 512, coverage=180)
    assert Projection.erp(512, 256, coverage=90).coverage == 360
    perspective = Projection.perspective(640, 360, 75)
    assert (perspective.kind, perspective.width, perspective.height, perspective.hfov_deg, perspective.coverage) == ("perspective", 640, 360, 75.0, 360)
    assert Projection.perspective(640, 360, 75, coverage="180").coverage == 180


def test_perspective_rays_pass_through_the_pixel_centers_of_a_square_pixel_image_plane():
    projection = Projection.perspective(5, 3, 90.0)
    right, up, forward = camera_basis(POSE["yaw_deg"], POSE["pitch_deg"], POSE["roll_deg"], dtype=np.float64)

    rays = ray_directions(right.tolist(), up.tolist(), forward.tolist(), projection, torch.device("cpu")).double().numpy()

    # The image plane at distance 1 spans tan(45) = 1 to each side and 3 / 5 up and down.
    corner = forward + (0.5 / 5 * 2 - 1) * right + (1 - 0.5 / 3 * 2) * 0.6 * up
    assert rays.shape == (3, 5, 3)
    assert np.allclose(np.linalg.norm(rays, axis=-1), 1.0, atol=1e-6)
    assert np.allclose(rays[1, 2], forward, atol=1e-6)
    assert np.allclose(rays[0, 0], corner / np.linalg.norm(corner), atol=1e-6)


def _sticker_state(yaw_deg=0.0, pitch_deg=0.0, roll_deg=0.0, hFOV_deg=90.0, vFOV_deg=90.0):
    return {"stickers": [{
        "id": "s",
        "source": {"kind": "port"},
        "direction": {"value": {"yaw_deg": yaw_deg, "pitch_deg": pitch_deg}},
        "roll": {"value": roll_deg},
        "size": {"value": {"hFOV_deg": hFOV_deg, "vFOV_deg": vFOV_deg}},
    }]}


def _red_source(**kwargs):
    rgba = np.zeros((4, 4, 4), dtype=np.float32)
    rgba[..., 0] = 1.0
    rgba[..., 3] = 1.0
    return SceneSources({"s": StickerSource(rgba, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0}, **kwargs)}, {})


def test_render_frame_draws_sky_stickers_facing_the_camera_at_the_erp_center():
    color, mask, depth = _render(Projection.erp(64, 32), _sticker_state(), _red_source())

    assert torch.allclose(color[16, 32], torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(color[16, 0], torch.tensor(GREEN))
    assert torch.isposinf(depth).all()
    assert float(mask.max()) == 0.0


def test_render_frame_applies_sticker_opacity():
    state = _sticker_state()
    state["stickers"][0]["opacity"] = {"value": 0.25}

    color, _mask, _depth = _render(Projection.erp(64, 32), state, _red_source())

    assert torch.allclose(color[16, 32], torch.tensor([0.25, 0.75, 0.0]))


def test_render_frame_derives_port_vfov_from_the_source_aspect():
    state = _sticker_state(hFOV_deg=90.0, vFOV_deg=20.0)
    wide = _red_source(derive_vfov=True)
    wide.stickers["s"] = StickerSource(np.ones((4, 4, 4), dtype=np.float32), wide.stickers["s"].crop, derive_vfov=True)

    derived, _mask, _depth = _render(Projection.erp(64, 32), state, wide)
    stored, _mask, _depth = _render(Projection.erp(64, 32), state, _red_source())

    # A square source at hFOV 90 is also 90 degrees tall, so it reaches 30 degrees above the horizon.
    row_30_up = 16 - round(30 / 180 * 32)
    assert torch.allclose(derived[row_30_up, 32], torch.tensor([1.0, 1.0, 1.0]))
    assert torch.allclose(stored[row_30_up, 32], torch.tensor(GREEN))


def test_render_frame_reuses_the_sky_of_an_unchanged_frame():
    cache = {}
    first = _render(Projection.erp(64, 32), _sticker_state(), _red_source(), cache=cache)
    sky = cache["layers"][0]["sky"]
    second = _render(Projection.erp(64, 32), _sticker_state(), _red_source(), cache=cache)
    moved = _render(Projection.erp(64, 32), _sticker_state(yaw_deg=90.0), _red_source(), cache=cache)

    assert cache["layers"][0]["sky"] is not sky
    assert torch.equal(first[0], second[0])
    assert not torch.equal(first[0], moved[0])


def test_render_frame_skips_inactive_stickers():
    hidden = _sticker_state()
    hidden["stickers"][0]["visible"] = False
    color, _mask, _depth = _render(Projection.erp(64, 32), hidden, _red_source())
    assert torch.allclose(color, torch.tensor(GREEN).expand(32, 64, 3))


def test_render_frame_180_reads_bg_as_the_front_hemisphere():
    bg = torch.zeros((8, 16, 3))
    bg[:, 8:] = 1.0

    color, _mask, _depth = _render(Projection.erp(32, 32, coverage=180), bg=bg)

    assert color.shape == (32, 32, 3)
    assert torch.allclose(color[:, 0], torch.zeros(32, 3)) and torch.allclose(color[:, -1], torch.ones(32, 3))
    assert math.isclose(float(color.mean()), 0.5, abs_tol=0.05)


def _count_calls(monkeypatch, *names):
    counts = dict.fromkeys(names, 0)
    for name in names:
        original = getattr(render_module, name)

        def counted(*args, _name=name, _original=original, **kwargs):
            counts[_name] += 1
            return _original(*args, **kwargs)

        monkeypatch.setattr(render_module, name, counted)
    return counts


def _render_bg(cache, bg, bg_key, state=None):
    loaded, evaluated = _scene(**(state or {}))
    return render_frame([RenderLayer(evaluated, SceneSources({}, loaded["painting"]))], evaluated["camera"], Projection.erp(16, 8),
                        bg=bg, bg_key=bg_key, bg_color=GREEN, device=torch.device("cpu"), cache=cache)


def test_render_frame_returns_the_previous_frame_when_sky_and_background_repeat(monkeypatch):
    counts = _count_calls(monkeypatch, "_render_sky", "_background", "composite_frame")
    cache = {}
    bg = torch.rand(8, 16, 3)

    first = _render_bg(cache, bg, 0)
    second = _render_bg(cache, bg, 0)

    assert all(a is b for a, b in zip(first, second))
    assert counts == {"_render_sky": 1, "_background": 1, "composite_frame": 1}


def test_render_frame_reuses_the_sky_but_composites_a_new_background(monkeypatch):
    counts = _count_calls(monkeypatch, "_render_sky", "_background", "composite_frame")
    cache = {}

    first = _render_bg(cache, torch.zeros(8, 16, 3), 0)
    second = _render_bg(cache, torch.ones(8, 16, 3), 1)

    assert not torch.equal(first[0], second[0])
    assert counts == {"_render_sky": 1, "_background": 2, "composite_frame": 2}


def test_render_frame_never_reuses_a_background_without_a_key(monkeypatch):
    counts = _count_calls(monkeypatch, "_background", "composite_frame")
    cache = {}

    first = _render_bg(cache, torch.zeros(8, 16, 3), None)
    second = _render_bg(cache, torch.ones(8, 16, 3), None)

    assert torch.equal(second[0], torch.ones(8, 16, 3)) and not torch.equal(first[0], second[0])
    assert counts == {"_background": 2, "composite_frame": 2}


def _camera(**rotation):
    return {"camera": {"rotation": {"value": rotation}}}


def _zenith_bg():
    # Red around the zenith, blue elsewhere.
    bg = torch.zeros((16, 32, 3))
    bg[..., 2] = 1.0
    bg[:2] = torch.tensor([1.0, 0.0, 0.0])
    return bg


def test_camera_pitch_90_looks_at_the_zenith():
    color, _mask, _depth = _render(Projection.erp(64, 32), _camera(pitch_deg=90.0), bg=_zenith_bg())

    assert torch.allclose(color[16, 32], torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(color[0, 32], torch.tensor([0.0, 0.0, 1.0]))


@pytest.mark.parametrize("roll, column", [(90.0, 48), (-90.0, 16)])
def test_positive_camera_roll_turns_the_image_clockwise(roll, column):
    # Turned a quarter clockwise, the zenith that was above the center is now right of it.
    color, _mask, _depth = _render(Projection.erp(64, 32), _camera(roll_deg=roll), bg=_zenith_bg())

    assert torch.allclose(color[16, column], torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(color[16, 64 - column], torch.tensor([0.0, 0.0, 1.0]))


def test_180_output_draws_bg_color_outside_the_hemisphere_of_the_bg_media():
    bg = torch.full((16, 16, 3), 0.5)

    front, _mask, _depth = _render(Projection.erp(32, 32, coverage=180), bg=bg)
    turned, _mask, _depth = _render(Projection.erp(32, 32, coverage=180), _camera(yaw_deg=90.0), bg=bg)

    assert torch.allclose(front, torch.full((32, 32, 3), 0.5))
    assert torch.allclose(turned[:, :16], torch.full((32, 16, 3), 0.5))
    assert torch.equal(turned[:, 16:], torch.tensor(GREEN).expand(32, 16, 3))


def test_180_output_draws_the_sky_in_every_direction():
    state = {**_sticker_state(yaw_deg=135.0, hFOV_deg=20.0, vFOV_deg=20.0), **_camera(yaw_deg=90.0)}

    color, _mask, _depth = _render(Projection.erp(64, 64, coverage=180), state, _red_source(), bg=torch.full((16, 16, 3), 0.5))

    assert torch.allclose(color[32, 48], torch.tensor([1.0, 0.0, 0.0]))
    assert torch.equal(color[32, 60], torch.tensor(GREEN))


def test_rotating_camera_reuses_the_sky_and_composites_each_view(monkeypatch):
    counts = _count_calls(monkeypatch, "_render_sky", "_background", "composite_frame")
    cache = {}

    first = _render_bg(cache, torch.rand(8, 16, 3), 0)
    turned = _render_bg(cache, None, None, _camera(yaw_deg=45.0))
    again = _render_bg(cache, None, None, _camera(yaw_deg=45.0))

    assert not torch.equal(first[0], turned[0])
    assert all(a is b for a, b in zip(turned, again))
    assert counts == {"_render_sky": 1, "_background": 1, "composite_frame": 2}


def _painted_sky(position=None, **rotation):
    painting = {"version": 1, "paint": {"strokes": []}, "mask": {"strokes": [_mask_dot((0.6, 0.0, -0.8)), _mask_dot((-0.6, 0.48, -0.64))]}, "groups": []}
    state = {**_sticker_state(yaw_deg=170.0, pitch_deg=20.0, roll_deg=30.0, hFOV_deg=50.0, vFOV_deg=30.0), "painting": painting}
    state["camera"] = {"position": {"value": position}, "rotation": {"value": rotation}}
    bg = torch.rand((64, 128, 3), generator=torch.Generator().manual_seed(0))
    sources = SceneSources(_red_source().stickers, load_scene_state({"version": 2, "painting": painting})["painting"])
    return _render(Projection.erp(128, 64), state, sources, bg=bg)[:2]


def test_erp_camera_yaw_by_whole_columns_shifts_the_image_and_mask():
    columns = 11
    image, mask = _painted_sky()
    turned_image, turned_mask = _painted_sky(yaw_deg=columns * 360.0 / image.shape[1])

    assert float(mask.max()) > 0.5
    assert torch.allclose(turned_image, torch.roll(image, -columns, dims=1), atol=1e-3)
    assert torch.allclose(turned_mask, torch.roll(mask, -columns, dims=1), atol=1e-3)


def test_camera_position_does_not_move_the_background_or_the_sky():
    image, mask = _painted_sky(yaw_deg=40.0, pitch_deg=-15.0, roll_deg=10.0)
    moved_image, moved_mask = _painted_sky([3.0, -1.0, 2.0], yaw_deg=40.0, pitch_deg=-15.0, roll_deg=10.0)

    assert torch.equal(moved_image, image) and torch.equal(moved_mask, mask)


POSE = {"yaw_deg": 130.0, "pitch_deg": 35.0, "roll_deg": 25.0}


@pytest.mark.parametrize("projection", [Projection.erp(128, 64), Projection.erp(64, 64, coverage=180), Projection.perspective(32, 32, 90.0)])
def test_sky_sticker_posed_like_the_camera_is_upright_at_the_output_center(projection):
    rgba = np.ones((4, 4, 4), dtype=np.float32)
    rgba[:2, :2, :3] = (1.0, 0.0, 0.0)
    rgba[:2, 2:, :3] = (0.0, 1.0, 0.0)
    rgba[2:, :2, :3] = (0.0, 0.0, 1.0)
    rgba[2:, 2:, :3] = (1.0, 1.0, 0.0)
    sources = SceneSources({"s": StickerSource(rgba, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, {})
    state = {**_sticker_state(hFOV_deg=40.0, vFOV_deg=40.0, **POSE), **_camera(**POSE)}

    color, _mask, _depth = _render(projection, state, sources)

    row, column = projection.height // 2, projection.width // 2
    # Each quadrant is sampled 10 to 12 degrees from the center.
    assert torch.allclose(color[row - 4, column - 4], torch.tensor([1.0, 0.0, 0.0]), atol=0.05)
    assert torch.allclose(color[row - 4, column + 3], torch.tensor([0.0, 1.0, 0.0]), atol=0.05)
    assert torch.allclose(color[row + 3, column - 4], torch.tensor([0.0, 0.0, 1.0]), atol=0.05)
    assert torch.allclose(color[row + 3, column + 3], torch.tensor([1.0, 1.0, 0.0]), atol=0.05)


def _mask_dot(direction):
    x, y, z = direction
    u = math.atan2(x, z) / (2.0 * math.pi) + 0.5
    v = 0.5 - math.asin(y) / math.pi
    points = [{"u": u, "v": v, "t": 0}, {"u": u + 1e-4, "v": v, "t": 1}]
    return {"id": f"dot_{u}", "actionGroupId": f"ag_{u}", "targetSpace": {"kind": "ERP_GLOBAL"}, "layerKind": "mask", "toolKind": "pen", "size": 48, "radiusValue": 0.012,
            "color": None, "opacity": 1.0, "createdAt": 0, "geometry": {"geometryKind": "freehand_open", "points": points}}


def test_mask_follows_the_camera_upright_at_the_output_center():
    _right, up, forward = camera_basis(POSE["yaw_deg"], POSE["pitch_deg"], POSE["roll_deg"], dtype=np.float64)
    above = forward * math.cos(math.radians(25.0)) + up * math.sin(math.radians(25.0))
    painting = {"version": 1, "paint": {"strokes": []}, "mask": {"strokes": [_mask_dot(forward), _mask_dot(above)]}, "groups": []}

    _color, mask, _depth = _render(Projection.erp(128, 64), {"painting": painting, **_camera(**POSE)})

    # 2.8 degrees per pixel: the center dot, and the other 25 degrees straight above it.
    assert float(mask[31:34, 63:66].max()) > 0.5
    assert float(mask[22:25, 63:66].max()) > 0.5
    assert float(mask[40:43, 63:66].max()) == 0.0
    assert float(mask[22:25, 55:59].max()) == 0.0 and float(mask[22:25, 70:74].max()) == 0.0


def test_perspective_output_draws_bg_color_outside_the_hemisphere_of_the_bg_media():
    bg = torch.full((16, 16, 3), 0.5)

    # Turned 90 degrees, the left half of a 90 degree view still looks into the front hemisphere.
    color, _mask, _depth = _render(Projection.perspective(32, 16, 90.0, coverage=180), _camera(yaw_deg=90.0), bg=bg)

    assert torch.allclose(color[:, :15], torch.full((16, 15, 3), 0.5))
    assert torch.equal(color[:, 17:], torch.tensor(GREEN).expand(16, 15, 3))


def test_perspective_output_reuses_the_sky_while_an_animated_fov_keeps_its_resolution(monkeypatch):
    counts = _count_calls(monkeypatch, "_render_sky", "_sky_layers", "_shoot_sky")
    cache = {}

    for hfov in (60.0, 61.0, 20.0):
        _render(Projection.perspective(32, 32, hfov), _sticker_state(), _red_source(), cache=cache)

    # The Sky is not drawn into an ERP. 60 and 61 degrees draw the state's paint at the same size; 20 degrees
    # needs a finer one.
    assert counts == {"_render_sky": 0, "_sky_layers": 2, "_shoot_sky": 3}


@pytest.mark.parametrize("projection, bg_width, size", [
    (Projection.perspective(32, 32, 60.0), None, (256, 128)),
    (Projection.perspective(32, 32, 60.0), 2048, (2048, 1024)),
    (Projection.perspective(32, 32, 60.0, coverage=180), 1024, (2048, 1024)),
    (Projection.perspective(32, 32, 60.0, coverage=180), 4096, (4096, 2048)),
    (Projection.perspective(1024, 1024, 1.0), None, (4096, 2048)),
    (Projection.perspective(32, 32, 60.0), 10000, (4096, 2048)),
])
def test_perspective_sky_is_as_fine_as_the_output_center_and_the_bg_media(projection, bg_width, size):
    assert render_module._sky_size(projection, bg_width) == size


def _through_the_capped_sky_erp(evaluated, sources, projection):
    """The Sky as perspective outputs drew it before, through a 360 ERP at most 4096 wide."""
    sky_erp = render_module._render_sky(evaluated, sources, (4096, 2048), torch.device("cpu"))
    return render_module._project_sky(*sky_erp, render_module._view(render_module._rays(evaluated["camera"], projection, torch.device("cpu"))))


def test_narrow_perspective_sky_sticker_keeps_the_lines_of_its_source():
    # Stripes 4 source pixels wide on a Sticker 2 degrees wide, shot by a 2 degree Camera at one source pixel per
    # output pixel. A 4096 ERP has 23 pixels over the Sticker, so it blurs the 64 stripes away.
    rgba = np.ones((256, 256, 4), dtype=np.float32)
    rgba[:, (np.arange(256) // 4) % 2 == 1, :3] = 0.0
    sources = SceneSources({"s": StickerSource(rgba, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, {})
    projection = Projection.perspective(256, 256, 2.0)
    state = _sticker_state(hFOV_deg=2.0, vFOV_deg=2.0)

    color, _mask, _depth = _render(projection, state, sources)
    _loaded, evaluated = _scene(**state)
    capped, _capped_mask = _through_the_capped_sky_erp(evaluated, sources, projection)

    # Only the pixels across each edge between stripes differ from the source; through the ERP the stripes are lost.
    source = torch.tensor(rgba[128, 8:248, 0])
    assert float((color[128, 8:248, 0] - source).abs().mean()) < 0.1
    assert float((capped[128, 8:248, 0] - source).abs().mean()) > 0.4


def test_narrow_perspective_paint_samples_the_uploaded_raster_at_its_own_resolution():
    # An uploaded mask 8192 wide with stripes one pixel wide; at 0.5 degrees each covers 5.7 output pixels. Resized
    # to a 4096 ERP, each pair of stripes becomes one gray pixel.
    mask = np.zeros((64, 8192), dtype=np.float32)
    mask[:, 1::2] = 1.0
    sources = SceneSources({}, load_scene_state({"version": 2})["painting"], load_painting_layer_payload({"revision": "stripes", "mask": mask}))
    projection = Projection.perspective(64, 16, 0.5)

    _color, shot, _depth = _render(projection, sources=sources)
    _loaded, evaluated = _scene()
    _capped, capped = _through_the_capped_sky_erp(evaluated, sources, projection)

    assert float(shot[8].min()) < 0.05 and float(shot[8].max()) > 0.95
    assert float(capped[8].max() - capped[8].min()) < 0.05


def test_minified_bg_media_is_averaged_over_each_output_pixel():
    # Columns alternating black and white, 10 ERP pixels to each output pixel: point samples would land on either.
    bg = torch.zeros((512, 1024, 3))
    bg[:, 1::2] = 1.0

    for projection, state in ((Projection.perspective(48, 32, 90.0), None), (Projection.erp(96, 48), _camera(pitch_deg=30.0))):
        color, _mask, _depth = _render(projection, state, bg=bg)
        # The ERP's top and bottom rows are slivers narrower than a column of the bg_media.
        color = color[1:-1]
        assert torch.allclose(color, torch.full_like(color, 0.5), atol=0.05)


def test_magnified_bg_media_is_sampled_bilinearly_as_before():
    bg = torch.rand((32, 64, 3), generator=torch.Generator().manual_seed(1))
    projection = Projection.perspective(64, 48, 60.0)
    _loaded, evaluated = _scene()

    color, _mask, _depth = _render(projection, bg=bg)

    view = render_module._view(render_module._rays(evaluated["camera"], projection, torch.device("cpu")))
    assert torch.equal(color, render_module._sample_erp(bg, view))


def test_bg_media_shrunk_to_an_unturned_erp_output_is_averaged():
    # Every fourth column is white; a 4x smaller output is a quarter gray, where a bilinear sample between two
    # black columns would be black.
    bg = torch.zeros((64, 128, 3))
    bg[:, ::4] = 1.0

    color, _mask, _depth = _render(Projection.erp(32, 16), bg=bg)

    assert torch.allclose(color, torch.full_like(color, 0.25), atol=0.02)


def test_direct_sky_sticker_matches_the_sky_erp_inside_and_covers_its_edges_partly():
    # A rolled, pitched, cropped Sticker with a smooth source: inside it both ways sample the same color; across its
    # edges the direct one covers the pixels in part.
    rows, columns = np.mgrid[0:48, 0:64].astype(np.float32)
    rgba = np.ones((48, 64, 4), dtype=np.float32)
    rgba[..., 0], rgba[..., 1], rgba[..., 2] = columns / 63.0, rows / 47.0, 0.5
    sources = SceneSources({"s": StickerSource(rgba, {"x0": 0.1, "y0": 0.2, "x1": 0.9, "y1": 0.7})}, {})
    pose = {"yaw_deg": 30.0, "pitch_deg": 20.0, "roll_deg": 25.0}
    state = {**_sticker_state(hFOV_deg=40.0, vFOV_deg=30.0, **pose), **_camera(**pose)}
    projection = Projection.perspective(96, 64, 50.0)

    color, _mask, _depth = _render(projection, state, sources)
    _loaded, evaluated = _scene(**state)
    sky = render_module._shoot_sky(*render_module._sky_layers(evaluated, sources, (64, 32), torch.device("cpu"), {}, {"size": (64, 32)}),
                                   render_module._rays(evaluated["camera"], projection, torch.device("cpu")),
                                   render_module._view(render_module._rays(evaluated["camera"], projection, torch.device("cpu"))))[0]
    through_erp, _capped_mask = _through_the_capped_sky_erp(evaluated, sources, projection)

    inside = (sky[..., 3] > 0.999) & (through_erp[..., 3] > 0.999)
    assert int(inside.sum()) > 2000
    assert torch.allclose(sky[..., :3][inside], through_erp[..., :3][inside], atol=0.02)
    assert torch.allclose(color[inside], sky[..., :3][inside])
    assert int(((sky[..., 3] > 0.1) & (sky[..., 3] < 0.9)).sum()) > 50


@pytest.mark.parametrize("width", [64, 100])
def test_shrinking_a_wrapped_erp_reaches_across_the_seam_symmetrically(width):
    # Two bright columns on either side of the seam: the shrunk image is the same mirrored about the seam, and
    # (when the seam is on a whole number of output columns from the middle) the same as the pair in the middle.
    image = torch.zeros((4, width, 1))
    image[:, [0, width - 1]] = 1.0
    image[:, [width // 2 - 1, width // 2]] = 1.0

    shrunk = render_module._shrink(image, 2, 16, wrap=True)[0, :, 0]
    clamped = render_module._shrink(image, 2, 16, wrap=False)[0, :, 0]

    assert torch.allclose(shrunk, shrunk.flip(0), atol=1e-6)
    if width == 64:
        assert torch.allclose(shrunk, torch.roll(shrunk, 8), atol=1e-6)
        assert not torch.allclose(clamped, torch.roll(clamped, 8), atol=1e-3)


def test_perspective_sky_keeps_its_paint_and_ripmaps_while_only_stickers_and_the_camera_move(monkeypatch):
    counts = _count_calls(monkeypatch, "_sky_layers", "_premultiplied", "_shrink")
    stroke = {**_mask_dot((0.0, 0.0, 1.0)), "layerKind": "paint", "color": {"r": 1.0, "g": 0.0, "b": 0.0, "a": 1.0}}
    painting = {"version": 1, "paint": {"strokes": [stroke]}, "mask": {"strokes": []}, "groups": []}
    rgba = np.random.default_rng(0).random((256, 256, 4), dtype=np.float32)
    bg = torch.rand((256, 512, 3), generator=torch.Generator().manual_seed(0))
    cache = {}
    shrunk = []

    for yaw in (0.0, 5.0, 10.0):
        state = {**_sticker_state(yaw_deg=yaw, hFOV_deg=30.0, vFOV_deg=30.0), **_camera(yaw_deg=yaw), "painting": painting}
        loaded, evaluated = _scene(**state)
        sources = SceneSources({"s": StickerSource(rgba, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, loaded["painting"])
        render_frame([RenderLayer(evaluated, sources)], evaluated["camera"], Projection.perspective(24, 16, 120.0), bg=bg, bg_key=0, bg_color=GREEN,
                     device=torch.device("cpu"), cache=cache)
        shrunk.append(counts["_shrink"])

    # Each frame orders the Sky again, but the Sticker source and the paint go to the device once, and the shrunk
    # copies of the background and the Sticker are made on the first frame only.
    assert counts["_sky_layers"] == 3
    assert counts["_premultiplied"] == 2
    assert shrunk[0] > 0 and shrunk[0] == shrunk[-1]


def test_a_sky_sticker_beside_the_camera_draws_nothing_along_its_planes_horizon():
    # The Sticker faces yaw 90; its plane's horizon (depth 0) is the meridian at yaw 0, through the middle of the view.
    sources = SceneSources({"s": StickerSource(np.ones((8, 8, 4), dtype=np.float32), {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, {})
    state = _sticker_state(yaw_deg=90.0, hFOV_deg=40.0, vFOV_deg=40.0)
    loaded, evaluated = _scene(**state)
    projection = Projection.perspective(64, 48, 120.0)
    rays = render_module._rays(evaluated["camera"], projection, torch.device("cpu"))
    layers = render_module._sky_layers(evaluated, sources, (64, 32), torch.device("cpu"), {}, {"size": (64, 32)})

    sky = render_module._shoot_sky(*layers, rays, render_module._view(rays))[0]

    # Yaw 90 is past the right edge of a 120 degree view, so nothing of the Sticker is in it.
    assert float(sky[..., 3].max()) == 0.0
