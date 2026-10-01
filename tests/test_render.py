import math

import numpy as np
import pytest
import torch

from comfyui_pano_suite.core import render as render_module
from comfyui_pano_suite.core.math import camera_basis
from comfyui_pano_suite.core.render import Projection, SceneSources, StickerSource, composite_frame, render_frame
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
    loaded = load_scene_state({"version": 2, **state})
    return loaded, evaluate_scene_state(loaded, 0.0)


def _render(projection, state=None, sources=None, bg=None, cache=None):
    loaded, evaluated = _scene(**(state or {}))
    sources = sources or SceneSources({}, loaded["painting"])
    return render_frame(
        evaluated,
        sources,
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

    outputs = render_frame(evaluated, SceneSources({}, loaded["painting"]), evaluated["camera"], Projection.erp(16, 8),
                           bg=torch.rand(8, 16, 3), bg_color=GREEN, device=device)

    assert all(output.device.type == "cuda" for output in outputs)


def test_projection_represents_erp_and_perspective():
    assert Projection.erp(512, 512, coverage="180") == Projection("erp", 512, 512, coverage=180)
    assert Projection.erp(512, 256, coverage=90).coverage == 360
    perspective = Projection.perspective(640, 360, 75)
    assert (perspective.kind, perspective.width, perspective.height, perspective.hfov_deg) == ("perspective", 640, 360, 75.0)


def test_render_frame_rejects_what_later_tickets_draw():
    with pytest.raises(NotImplementedError, match="perspective"):
        _render(Projection.perspective(32, 32, 90))


def _sticker_state(**transform):
    return {"stickers": [{"id": "s", "source": {"kind": "port"}, "transform": {"value": {"hFOV_deg": 90.0, "vFOV_deg": 90.0, **transform}}}]}


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
    sky = cache["sky"]
    second = _render(Projection.erp(64, 32), _sticker_state(), _red_source(), cache=cache)
    moved = _render(Projection.erp(64, 32), _sticker_state(yaw_deg=90.0), _red_source(), cache=cache)

    assert cache["sky"] is not sky
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
    return render_frame(evaluated, SceneSources({}, loaded["painting"]), evaluated["camera"], Projection.erp(16, 8),
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


def _camera(**value):
    return {"camera": {"transform": {"value": value}}}


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


POSE = {"yaw_deg": 130.0, "pitch_deg": 35.0, "roll_deg": 25.0}


@pytest.mark.parametrize("projection", [Projection.erp(128, 64), Projection.erp(64, 64, coverage=180)])
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
    # Each quadrant is sampled about 10 degrees from the center.
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
