"""The Camera's lens curve κ (docs/render-contract.md, "カメラのレンズ"; ADR 0042): the mapping, the rays, what a wide
fisheye does not draw, the Camera Lane, and the output size. The numbers come from tests/fixtures/lens/, which the
JS side reads too."""
import json
import math
from pathlib import Path

import numpy as np
import pytest
import torch

from comfyui_pano_suite.core.math import lens_angle, lens_drawn, lens_fov_limit, lens_radius, ray_directions
from comfyui_pano_suite.core.render import Projection, RenderLayer, SceneSources, render_frame
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state

FIXTURE = json.loads((Path(__file__).resolve().parent / "fixtures" / "lens" / "lens.json").read_text(encoding="utf-8"))
TOLERANCE = FIXTURE["tolerance"]
CAMERA_AXES = ([1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0])


def test_the_mapping_and_its_inverse_are_the_fixtures_and_stable_near_a_flat_curve():
    for case in FIXTURE["mapping"]:
        radius = lens_radius(case["theta"], case["curve"])
        assert radius == pytest.approx(case["radius"], abs=TOLERANCE * 1e-2)
        assert lens_angle(radius, case["curve"]) == pytest.approx(case["theta"], abs=1e-9)
        tensor = lens_radius(torch.tensor([case["theta"]], dtype=torch.float32), case["curve"])
        assert bool(torch.isfinite(tensor).all()) and float(tensor) == pytest.approx(case["radius"], rel=1e-5, abs=1e-6)
    # κ = 0 is the equidistant fisheye exactly; κ = 1 the pinhole exactly.
    theta = torch.linspace(0.0, 3.0, 7)
    assert torch.equal(lens_radius(theta, 0.0), theta) and torch.equal(lens_angle(theta, 0.0), theta)
    assert torch.equal(lens_radius(theta[:4], 1.0), torch.tan(theta[:4]))
    for limit in FIXTURE["limits"]:
        assert lens_fov_limit(limit["curve"]) == pytest.approx(limit["hfov_max_deg"])


@pytest.mark.parametrize("case", FIXTURE["cases"], ids=lambda case: f"k{case['curve']}-fov{case['hfov_deg']}")
def test_rays_are_the_fixtures_and_pixels_past_180_degrees_are_not_drawn(case):
    projection = Projection.perspective(case["width"], case["height"], case["hfov_deg"], curve=case["curve"])

    rays = ray_directions(*CAMERA_AXES, projection, "cpu")
    drawn = lens_drawn(projection, "cpu")

    expected = torch.tensor([pixel["ray"] for pixel in case["pixels"]]).reshape(case["height"], case["width"], 3)
    assert torch.allclose(rays, expected, atol=TOLERANCE)
    expected_drawn = torch.tensor([pixel["drawn"] for pixel in case["pixels"]]).reshape(case["height"], case["width"])
    assert (drawn is None and bool(expected_drawn.all())) or torch.equal(drawn, expected_drawn)
    if torch.cuda.is_available():
        assert torch.allclose(ray_directions(*CAMERA_AXES, projection, "cuda").cpu(), rays, atol=1e-6)


def test_a_wide_fisheye_draws_bg_color_where_it_looks_past_180_degrees():
    state = load_scene_state({"version": 2})
    evaluated = evaluate_scene_state(state, 0.0)
    camera = {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}
    background = torch.full((16, 32, 3), 0.25)

    color, mask, depth = render_frame([RenderLayer(evaluated, SceneSources({}, state["painting"]))], camera,
                                      Projection.perspective(32, 32, 300.0, curve=0.0), bg=background, bg_color=(0.0, 1.0, 0.0), device="cpu")

    assert torch.allclose(color[0, 0], torch.tensor([0.0, 1.0, 0.0])) and torch.allclose(color[16, 16], torch.full((3,), 0.25))
    assert float(mask[0, 0]) == 0.0 and math.isinf(float(depth[0, 0]))


def test_the_camera_curve_lane_interpolates_clamps_and_limits_the_fov():
    state = load_scene_state({"version": 2, "camera": {
        "fov": {"value": 300.0},
        "curve": {"value": 1.0, "keyframes": [{"frame": 0, "value": 0.25, "easing": [0.0, 0.0, 1.0, 1.0]}, {"frame": 10, "value": 2.0, "easing": [0.0, 0.0, 1.0, 1.0]}]},
    }})

    # Saved up to its range: hFOV to 360, κ to 1 (the pinhole; no pincushion past it).
    assert state["camera"]["fov"]["value"] == 300.0 and state["camera"]["curve"]["keyframes"][1]["value"] == 1.0
    start, middle, end = (evaluate_scene_state(state, frame)["camera"] for frame in (0.0, 5.0, 10.0))
    assert (start["curve"], start["hFOV_deg"]) == (0.25, 300.0)
    assert middle["curve"] == pytest.approx(0.625) and middle["hFOV_deg"] == pytest.approx(179.0 / 0.625)
    assert (end["curve"], end["hFOV_deg"]) == (1.0, pytest.approx(179.0))
    # A sky Sticker's curve and a world Sticker's lens keep the same range.
    stickers = load_scene_state({"version": 2, "stickers": [
        {"id": "s", "source": {"kind": "port"}, "curve": {"value": 1.4}},
        {"id": "w", "placement": "world", "source": {"kind": "file", "filename": "w.png"}, "lens": {"value": {"curve": 1.4, "hFOV_deg": 90.0}}},
    ]})["stickers"]
    assert stickers[0]["curve"]["value"] == 1.0 and stickers[1]["lens"]["value"]["curve"] == 1.0
    assert evaluate_scene_state(load_scene_state({"version": 2, "camera": {}}), 0.0)["camera"]["curve"] == 1.0


@pytest.mark.parametrize("curve, hfov", [(1.0, 90.0), (0.5, 140.0), (0.0, 220.0)])
def test_the_output_size_does_not_follow_the_lens(curve, hfov):
    # ADR 0048: the size comes from megapixels, multiple and the aspect; the FOV and the lens curve do not count.
    from comfyui_pano_suite import nodes

    state = {"version": 2, "camera": {"aspect": 1.5, "fov": {"value": hfov}, "curve": {"value": curve}}}

    image = nodes.PanoramaStudioNode.execute(background_color="#000000", background_range="360", megapixels=96 * 64 / 2**20, multiple=32,
                                             state_json=json.dumps(state)).result[1]

    assert image.shape[1:3] == (64, 96)


def test_a_world_stickers_lens_is_part_of_what_the_frame_is_drawn_from():
    # A `world` Sticker whose lens alone changes between two frames: the second frame is drawn anew, not reused.
    sticker = {"id": "w", "placement": "world", "source": {"kind": "file", "filename": "w.png"}, "position": {"value": [0.0, 0.0, -2.0]},
               "scale": {"value": 2.0}, "lens": {"value": {"curve": 0.5, "hFOV_deg": 90.0},
                                                  "keyframes": [{"frame": 0, "value": {"curve": 0.5, "hFOV_deg": 90.0}, "easing": [0.0, 0.0, 1.0, 1.0]},
                                                                {"frame": 1, "value": {"curve": 0.5, "hFOV_deg": 150.0}, "easing": [0.0, 0.0, 1.0, 1.0]}]}}
    state = load_scene_state({"version": 2, "stickers": [sticker]})
    from comfyui_pano_suite.core.render import StickerSource

    texture = np.ones((8, 8, 4), dtype=np.float32)
    sources = SceneSources({"w": StickerSource(texture, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, state["painting"])
    camera = {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}
    cache = {}

    frames = [render_frame([RenderLayer(evaluate_scene_state(state, frame), sources)], camera, Projection.perspective(64, 64, 120.0),
                           bg=None, bg_color=(0.0, 0.0, 0.0), device="cpu", cache=cache)[0] for frame in (0.0, 1.0)]

    assert "lens" in state["stickers"][0] and not torch.equal(frames[0], frames[1])


def test_a_world_sticker_with_a_lens_is_the_sphere_patch_around_its_lens_center():
    # κ 0.5, hFOV 120, scale 2 on a Sticker 3 ahead (rotation 0): its lens center L is ρ = 2 / (2 g(60°)) behind it,
    # toward the Camera. The patch's middle is the Sticker's position, and its side edge is where L sees 60 degrees.
    curve, half = 0.5, math.radians(60.0)
    radius = 2.0 / (2.0 * lens_radius(half, curve))
    sticker = {"id": "w", "placement": "world", "source": {"kind": "file", "filename": "w.png"}, "position": {"value": [0.0, 0.0, -3.0]},
               "scale": {"value": 2.0}, "lens": {"value": {"curve": curve, "hFOV_deg": 120.0}}}
    state = load_scene_state({"version": 2, "stickers": [sticker]})
    from comfyui_pano_suite.core.render import StickerSource

    # Left half red, right half blue, square.
    texture = np.zeros((16, 16, 4), dtype=np.float32)
    texture[..., 3] = 1.0
    texture[:, :8, 0] = 1.0
    texture[:, 8:, 2] = 1.0
    sources = SceneSources({"w": StickerSource(texture, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, state["painting"])
    camera = {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}
    projection = Projection.perspective(129, 65, 120.0)

    color, _mask, depth = render_frame([RenderLayer(evaluate_scene_state(state, 0.0), sources)], camera, projection, bg=None, bg_color=(0.0, 1.0, 0.0), device="cpu")

    # The middle pixel looks straight at the Sticker's position: its nearer crossing of the sphere is behind L's view
    # (180 degrees off the patch's axis), so it takes the farther one, 3 away.
    assert float(depth[32, 64]) == pytest.approx(3.0, abs=1e-4)
    # Its side edge: L + ρ (sin 60°, 0, -cos 60°), seen from the Camera.
    lens_z = -3.0 + radius
    edge_x, edge_z = radius * math.sin(half), lens_z - radius * math.cos(half)
    edge_column = (edge_x / -edge_z / math.tan(math.radians(60.0)) + 1.0) * 0.5 * 129 - 0.5
    inside, outside = math.floor(edge_column) - 1, math.ceil(edge_column) + 1
    assert torch.allclose(color[32, inside], torch.tensor([0.0, 0.0, 1.0]), atol=1e-4)
    assert torch.allclose(color[32, outside], torch.tensor([0.0, 1.0, 0.0]))
    # The left half of the source is on the left.
    assert torch.allclose(color[32, 128 - inside], torch.tensor([1.0, 0.0, 0.0]), atol=1e-4)
