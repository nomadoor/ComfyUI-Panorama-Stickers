import math

import numpy as np
import pytest
import torch

from comfyui_pano_suite.core import render as render_module
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
    with pytest.raises(NotImplementedError, match="Camera rotation"):
        _render(Projection.erp(32, 16), {"camera": {"transform": {"value": {"yaw_deg": 30.0}}}})


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


def test_render_frame_skips_inactive_stickers_and_rejects_world_stickers():
    hidden = _sticker_state()
    hidden["stickers"][0]["visible"] = False
    color, _mask, _depth = _render(Projection.erp(64, 32), hidden, _red_source())
    assert torch.allclose(color, torch.tensor(GREEN).expand(32, 64, 3))

    world = _sticker_state()
    world["stickers"][0]["placement"] = "world"
    world["stickers"][0]["transform"] = {"value": {}}
    with pytest.raises(NotImplementedError, match="world Stickers"):
        _render(Projection.erp(64, 32), world, _red_source())


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
