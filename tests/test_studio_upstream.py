import json
from fractions import Fraction

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import nodes
from comfyui_pano_suite.nodes import PanoramaCutoutSceneNode, PanoramaPreviewSceneNode, PanoramaStudioNode
from test_stickers_scene_video import _cfr
from tools.bake_legacy_goldens import _painting, _stroke


RED, GREEN, BLUE, WHITE = [1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0], [1.0, 1.0, 1.0]


def _studio(state=None, **inputs):
    inputs.setdefault("bg_color", "#000000")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_size", "1024")
    return PanoramaStudioNode.execute(state_json=json.dumps({"version": 2, **(state or {})}), **inputs)


def _solid(rgb, height=8, width=8):
    return torch.tensor(rgb, dtype=torch.float32).expand(1, height, width, 3).clone()


def _sky_port(yaw_deg=0.0, sticker_id="p", **sticker):
    return {"id": sticker_id, "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": yaw_deg, "pitch_deg": 0.0}},
            "size": {"value": {"hFOV_deg": 30.0}}, **sticker}


def _world_port(z, sticker_id="p", x=0.0, opacity=1.0):
    return {"id": sticker_id, "placement": "world", "source": {"kind": "port"}, "position": {"value": [x, 0.0, z]}, "scale": {"value": 1.0},
            "opacity": {"value": opacity}}


def _center(image):
    """The color at yaw 0 on the horizon of each frame of an ERP batch."""
    return image[:, image.shape[1] // 2, image.shape[2] // 2]


def _shows(image, rgb):
    return bool((image - torch.tensor(rgb)).abs().amax(dim=-1).lt(1e-3).any())


def test_a_chain_draws_the_elements_of_every_upstream_studio():
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[3]
    b = _studio({"stickers": [_sky_port(90.0)]}, sticker=_solid(GREEN), scene=a).result[3]
    image = _studio(scene=b).result[0]

    assert torch.allclose(_center(image)[0], torch.tensor(RED))
    assert _shows(image, GREEN)
    # The `scene` output holds the layers flat, from the farthest upstream.
    assert len(b.layers) == 2 and b.layers[0] is a.layers[0]


def test_the_own_sky_is_drawn_over_the_upstream_sky_with_the_same_id_and_port():
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[3]

    over = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(BLUE), scene=a).result[0]

    assert torch.allclose(_center(over)[0], torch.tensor(BLUE))
    # The upstream Sticker with the same id and `port` is still drawn where the own one does not cover it.
    wider = _studio({"stickers": [_sky_port(0.0, size={"value": {"hFOV_deg": 10.0}})]}, sticker=_solid(BLUE), scene=a).result[0]
    assert torch.allclose(_center(wider)[0], torch.tensor(BLUE)) and _shows(wider, RED)


@pytest.mark.parametrize("upstream_z, own_z, expected", [(-1.0, -2.0, RED), (-2.0, -1.0, BLUE)])
def test_world_content_of_the_layers_meets_by_depth(upstream_z, own_z, expected):
    a = _studio({"stickers": [_world_port(upstream_z)]}, sticker=_solid(RED)).result[3]

    image = _studio({"stickers": [_world_port(own_z)]}, sticker=_solid(BLUE), scene=a).result[0]

    assert torch.allclose(_center(image)[0], torch.tensor(expected))


def test_world_planes_of_three_layers_meet_by_depth_together():
    a = _studio({"stickers": [_world_port(-3.0)]}, sticker=_solid(GREEN)).result[3]
    b = _studio({"stickers": [_world_port(-1.0, opacity=0.5)]}, sticker=_solid(RED), scene=a).result[3]

    image = _studio({"stickers": [_world_port(-2.0)]}, sticker=_solid(BLUE), scene=b).result[0]

    # The half transparent red is nearest, over the blue between it and the green.
    assert torch.allclose(_center(image)[0], torch.tensor([0.5, 0.0, 0.5]), atol=1e-3)


def test_world_planes_with_the_same_id_in_two_layers_keep_their_own_sources():
    a = _studio({"stickers": [_world_port(-2.0, x=-1.0)]}, sticker=_solid(RED)).result[3]

    image = _studio({"stickers": [_world_port(-2.0, x=1.0)]}, sticker=_solid(BLUE), scene=a).result[0]

    assert _shows(image, RED) and _shows(image, BLUE)


def test_one_upstream_scene_is_shared_by_two_downstream_studios():
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[3]

    b = _studio({"stickers": [_sky_port(90.0)]}, sticker=_solid(GREEN), scene=a).result
    c = _studio({"stickers": [_sky_port(-90.0)]}, sticker=_solid(BLUE), scene=a).result

    assert len(a.layers) == 1 and b[3].layers[0] is c[3].layers[0] is a.layers[0]
    assert _shows(b[0], RED) and _shows(b[0], GREEN) and not _shows(b[0], BLUE)
    assert _shows(c[0], RED) and _shows(c[0], BLUE) and not _shows(c[0], GREEN)


def _frames(output):
    return output.result[2].get_frame_count()


def test_the_length_is_the_longer_one_and_timeline_length_sets_it():
    a = _studio({"timeline": {"length": 3}}).result[3]

    assert _frames(_studio(scene=a)) == 3
    # A Clip range that ends later extends it.
    assert _frames(_studio({"stickers": [_sky_port(clip={"start": 0, "duration": 5})]}, sticker=_solid(RED), scene=a)) == 5
    assert _frames(_studio({"timeline": {"length": 6}}, scene=a)) == 6
    assert _frames(_studio({"timeline": {"length": 2}}, scene=a)) == 2


def test_an_upstream_background_does_not_undo_the_upstream_timeline_length(tmp_path):
    a = _studio({"timeline": {"length": 2}}, bg_media=_cfr(tmp_path, count=4)).result[3]

    assert _frames(_studio(scene=a)) == 2
    # Extended downstream, the upstream background VIDEO goes on by its times.
    scene = _studio({"timeline": {"length": 6}}, scene=a).result[3]
    assert [bg_index for bg_index, _layers in scene.frames] == [0, 1, 2, 3, None, None]


def test_the_port_video_of_an_upstream_layer_keeps_its_frames(tmp_path):
    # Recorded at 24 fps, the 25 fps sticker VIDEO sets the Timeline of the upstream Studio.
    a = _studio({"timeline": {"fps": 24.0}, "stickers": [_sky_port()]}, sticker=_cfr(tmp_path, count=4)).result[3]

    b = _studio({"timeline": {"fps": 30.0, "length": 9}}, scene=a).result[3]

    # 9 frames at 30 fps are 0.3 seconds, 7.5 frames at 25 fps.
    assert b.rate == 25 and len(b.frames) == 8
    upstream = [layers[0][1] for _bg, layers in b.frames]
    assert upstream[:len(a.frames)] == [layers[0][1] for _bg, layers in a.frames] == [0, 1, 2, 3]
    assert upstream[4:] == [None] * 4


def test_the_upstream_fps_is_used_and_own_keyframes_keep_their_seconds():
    a = _studio({"timeline": {"fps": 30.0, "length": 30}}).result[3]

    # Recorded at 24 fps: frame 12 is 0.5 seconds, frame 15 at 30 fps.
    output = _studio({"timeline": {"fps": 24.0}, "stickers": [_sky_port(clip={"start": 12})]}, sticker=_solid(RED), scene=a)
    scene, video = output.result[3], output.result[2]

    assert scene.fps == 30.0 and video.get_frame_rate() == 30
    assert [layers[-1][0] for _bg, layers in scene.frames[14:16]] == [11.2, 12.0]
    centers = _center(video.get_components().images)
    assert not torch.allclose(centers[14], torch.tensor(RED)) and torch.allclose(centers[15], torch.tensor(RED))
    assert output.ui["pano_timeline_fps"] == [30.0] and output.ui["pano_timeline_frames"] == [30]


def test_the_upstream_background_is_used_with_a_warning_and_its_paint_mask_is_kept():
    mask = _painting(mask=[_stroke("mask", "mask", [(0.4, 0.5), (0.6, 0.5)], 40)])
    a = _studio({"painting": mask}, bg_media=_solid(WHITE, 16, 32), bg_color="#ff0000").result[3]

    output = _studio(scene=a, bg_media=_solid(BLUE, 16, 32), bg_color="#0000ff", output_size="auto")
    image, first_mask = output.result[0], output.result[1]

    assert image.shape == (1, 16, 32, 3) and torch.allclose(image, torch.tensor(WHITE))
    assert float(first_mask.max()) > 0.5
    assert output.ui["pano_sticker_warnings"] == ["bg_media is not used: the scene input has a background of its own."]
    assert output.result[3].bg_media is a.bg_media and output.result[3].bg_color == (1.0, 0.0, 0.0)


def test_without_an_upstream_background_the_own_one_is_drawn_and_a_video_follows_the_upstream_times(tmp_path):
    a = _studio({"timeline": {"fps": 50.0, "length": 6}}).result[3]

    # A 25 fps background under a 50 fps Timeline shows each of its frames for two output frames.
    scene = _studio(scene=a, bg_media=_cfr(tmp_path, count=4)).result[3]

    assert [bg_index for bg_index, _layers in scene.frames] == [0, 0, 1, 1, 2, 2, 3, 3]


def test_the_ui_keeps_the_upstream_media_apart_from_the_own():
    a = _studio({"stickers": [_sky_port()]}, sticker=_solid(RED), bg_media=_solid(WHITE, 16, 32), coverage="180").result[3]

    ui = _studio({"stickers": [_sky_port()]}, sticker=_solid(BLUE), scene=a).ui

    [upstream] = ui["pano_upstream_layers"]
    assert upstream["state"] is a.layers[0].state and upstream["state"]["camera"] is None
    assert upstream["ui"]["pano_sticker_input_images"] != ui["pano_sticker_input_images"]
    assert ui["pano_upstream_input_images"] == a.media_ui["pano_input_images"] and "pano_input_images" not in ui
    assert ui["pano_upstream_coverage"] == [180] and ui["pano_upstream_bg_color"] == [[0.0, 0.0, 0.0]]
    json.dumps(ui)


def test_preview_passes_a_scene_of_several_layers_through():
    a = _studio({"stickers": [_sky_port()]}, sticker=_solid(RED)).result[3]
    b = _studio(scene=a).result[3]

    output = PanoramaPreviewSceneNode.execute(source=b, coverage="360")

    # Showing it is #76.
    assert output.result[0] is b and not output.ui


def test_the_new_cutout_shoots_a_scene_of_several_layers():
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[3]
    b = _studio({"stickers": [_sky_port(0.0, size={"value": {"hFOV_deg": 10.0}})]}, sticker=_solid(BLUE), scene=a).result[3]
    cutout = {"version": 2, "camera": {"aspect": 1.0, "fov": {"value": 60.0}}}

    image = PanoramaCutoutSceneNode.execute(source=b, coverage="360", output_megapixels=0.01, state_json=json.dumps(cutout)).result[0]

    assert torch.allclose(_center(image)[0], torch.tensor(BLUE)) and _shows(image, RED)


def test_a_scene_is_timed_at_its_fps_as_a_fraction():
    a = _studio({"timeline": {"fps": 30000 / 1001, "length": 2}}).result[3]

    video = _studio(scene=a).result[2]

    assert video.get_frame_rate() == Fraction(30000, 1001)
