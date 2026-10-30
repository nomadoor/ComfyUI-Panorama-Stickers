import json
from fractions import Fraction

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import nodes
from comfyui_pano_suite.nodes import PanoramaPreviewSceneNode, PanoramaStudioNode
from scene_test_helpers import blob, blobs, output_size
from test_stickers_scene_video import _cfr
from tools.bake_legacy_goldens import _painting, _stroke


RED, GREEN, BLUE, WHITE = [1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0], [1.0, 1.0, 1.0]


def _studio(state=None, **inputs):
    """Panorama Studio's NodeOutput, whose `result` is scene, first_frame, first_frame_mask, video, sticker_state;
    1024 x 512 unless `megapixels` and `multiple` say otherwise."""
    inputs.setdefault("background_color", "#000000")
    inputs.setdefault("background_range", "360")
    if "megapixels" not in inputs:
        inputs.update(output_size(1024))
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
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[0]
    b = _studio({"stickers": [_sky_port(90.0)]}, sticker=_solid(GREEN), scene=a).result[0]
    image = _studio(scene=b).result[1]

    assert torch.allclose(_center(image)[0], torch.tensor(RED))
    assert _shows(image, GREEN)
    # The `scene` output holds the layers flat, from the farthest upstream.
    assert len(b.layers) == 2 and b.layers[0] is a.layers[0]


def test_the_own_sky_is_drawn_over_the_upstream_sky_with_the_same_id_and_port():
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[0]

    over = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(BLUE), scene=a).result[1]

    assert torch.allclose(_center(over)[0], torch.tensor(BLUE))
    # The upstream Sticker with the same id and `port` is still drawn where the own one does not cover it.
    wider = _studio({"stickers": [_sky_port(0.0, size={"value": {"hFOV_deg": 10.0}})]}, sticker=_solid(BLUE), scene=a).result[1]
    assert torch.allclose(_center(wider)[0], torch.tensor(BLUE)) and _shows(wider, RED)


@pytest.mark.parametrize("upstream_z, own_z, expected", [(-1.0, -2.0, RED), (-2.0, -1.0, BLUE)])
def test_world_content_of_the_layers_meets_by_depth(upstream_z, own_z, expected):
    a = _studio({"stickers": [_world_port(upstream_z)]}, sticker=_solid(RED)).result[0]

    image = _studio({"stickers": [_world_port(own_z)]}, sticker=_solid(BLUE), scene=a).result[1]

    assert torch.allclose(_center(image)[0], torch.tensor(expected))


def test_world_planes_of_three_layers_meet_by_depth_together():
    a = _studio({"stickers": [_world_port(-3.0)]}, sticker=_solid(GREEN)).result[0]
    b = _studio({"stickers": [_world_port(-1.0, opacity=0.5)]}, sticker=_solid(RED), scene=a).result[0]

    image = _studio({"stickers": [_world_port(-2.0)]}, sticker=_solid(BLUE), scene=b).result[1]

    # The half transparent red is nearest, over the blue between it and the green.
    assert torch.allclose(_center(image)[0], torch.tensor([0.5, 0.0, 0.5]), atol=1e-3)


def test_world_planes_with_the_same_id_in_two_layers_keep_their_own_sources():
    a = _studio({"stickers": [_world_port(-2.0, x=-1.0)]}, sticker=_solid(RED)).result[0]

    image = _studio({"stickers": [_world_port(-2.0, x=1.0)]}, sticker=_solid(BLUE), scene=a).result[1]

    assert _shows(image, RED) and _shows(image, BLUE)


def test_one_upstream_scene_is_shared_by_two_downstream_studios():
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[0]

    b = _studio({"stickers": [_sky_port(90.0)]}, sticker=_solid(GREEN), scene=a).result
    c = _studio({"stickers": [_sky_port(-90.0)]}, sticker=_solid(BLUE), scene=a).result

    assert len(a.layers) == 1 and b[0].layers[0] is c[0].layers[0] is a.layers[0]
    assert _shows(b[1], RED) and _shows(b[1], GREEN) and not _shows(b[1], BLUE)
    assert _shows(c[1], RED) and _shows(c[1], BLUE) and not _shows(c[1], GREEN)


def _frames(output):
    return output.result[3].get_frame_count()


def test_the_length_is_the_longer_one_and_timeline_length_sets_it():
    a = _studio({"timeline": {"length": 3}}).result[0]

    assert _frames(_studio(scene=a)) == 3
    # A Clip range that ends later extends it.
    assert _frames(_studio({"stickers": [_sky_port(clip={"start": 0, "duration": 5})]}, sticker=_solid(RED), scene=a)) == 5
    assert _frames(_studio({"timeline": {"length": 6}}, scene=a)) == 6
    assert _frames(_studio({"timeline": {"length": 2}}, scene=a)) == 2


def test_an_upstream_background_does_not_undo_the_upstream_timeline_length(tmp_path):
    a = _studio({"timeline": {"length": 2}}, background=_cfr(tmp_path, count=4)).result[0]

    assert _frames(_studio(scene=a)) == 2
    # Extended downstream, the upstream background VIDEO goes on by its times.
    scene = _studio({"timeline": {"length": 6}}, scene=a).result[0]
    assert [bg_index for bg_index, _layers in scene.frames] == [0, 1, 2, 3, None, None]


def test_the_port_video_of_an_upstream_layer_keeps_its_frames(tmp_path):
    # Recorded at 24 fps, the 25 fps sticker VIDEO sets the Timeline of the upstream Studio.
    a = _studio({"timeline": {"fps": 24.0}, "stickers": [_sky_port()]}, sticker=_cfr(tmp_path, count=4)).result[0]

    b = _studio({"timeline": {"fps": 30.0, "length": 9}}, scene=a).result[0]

    # 9 frames at 30 fps are 0.3 seconds, 7.5 frames at 25 fps.
    assert b.rate == 25 and len(b.frames) == 8
    upstream = [layers[0][1] for _bg, layers in b.frames]
    assert upstream[:len(a.frames)] == [layers[0][1] for _bg, layers in a.frames] == [0, 1, 2, 3]
    assert upstream[4:] == [None] * 4


def test_the_upstream_fps_is_used_and_own_keyframes_keep_their_seconds():
    a = _studio({"timeline": {"fps": 30.0, "length": 30}}).result[0]

    # Recorded at 24 fps: frame 12 is 0.5 seconds, frame 15 at 30 fps.
    output = _studio({"timeline": {"fps": 24.0}, "stickers": [_sky_port(clip={"start": 12})]}, sticker=_solid(RED), scene=a)
    scene, video = output.result[0], output.result[3]

    assert scene.fps == 30.0 and video.get_frame_rate() == 30
    assert [layers[-1][0] for _bg, layers in scene.frames[14:16]] == [11.2, 12.0]
    centers = _center(video.get_components().images)
    assert not torch.allclose(centers[14], torch.tensor(RED)) and torch.allclose(centers[15], torch.tensor(RED))
    assert output.ui["pano_timeline_fps"] == [30.0] and output.ui["pano_timeline_frames"] == [30]
    # The editor's Auto length counts the upstream Scene's own length, apart from this node's output length.
    assert output.ui["pano_upstream_frames"] == [30]
    longer = _studio({"timeline": {"fps": 30.0, "length": 45}}, scene=a)
    assert longer.ui["pano_timeline_frames"] == [45] and longer.ui["pano_upstream_frames"] == [30]


def test_without_an_own_background_the_upstream_one_is_used_and_its_paint_mask_is_kept():
    mask = _painting(mask=[_stroke("mask", "mask", [(0.4, 0.5), (0.6, 0.5)], 40)])
    a = _studio({"painting": mask}, background=_solid(WHITE, 16, 32), background_color="#ff0000").result[0]

    output = _studio(scene=a, background_color="#0000ff", **output_size(32))
    image, first_mask = output.result[1], output.result[2]

    assert image.shape == (1, 16, 32, 3) and torch.allclose(image, torch.tensor(WHITE))
    assert float(first_mask.max()) > 0.5
    assert "pano_sticker_warnings" not in output.ui
    assert output.result[0].bg_media is a.bg_media and output.result[0].bg_color == (1.0, 0.0, 0.0)


def test_the_own_background_replaces_the_upstream_one_and_is_passed_on():
    # ADR 0048: a corrected panorama on `background` replaces the upstream background, with no warning.
    mask = _painting(mask=[_stroke("mask", "mask", [(0.4, 0.5), (0.6, 0.5)], 40)])
    a = _studio({"painting": mask}, background=_solid(WHITE, 16, 32), background_color="#ff0000", background_range="180").result[0]
    own = _solid(BLUE, 16, 32)

    output = _studio(scene=a, background=own, background_color="#00ff00", **output_size(32))
    image, first_mask, b = output.result[1], output.result[2], output.result[0]

    assert torch.allclose(image, torch.tensor(BLUE))
    # The upstream layers are still drawn over it: here the upstream paint mask.
    assert float(first_mask.max()) > 0.5
    assert "pano_sticker_warnings" not in output.ui
    # The PANO_SCENE carries the most downstream background, with its range and color.
    assert b.bg_media is own and b.coverage == 360 and b.bg_color == (0.0, 1.0, 0.0)
    assert b.bg_clip == ({"start": 0, "in": 0, "duration": None}, 24.0)
    # The editor shows the own background as the node's own, and the upstream one not at all.
    assert output.ui["pano_input_images"] and "pano_upstream_input_images" not in output.ui
    assert output.ui["pano_upstream_coverage"] == [180]
    # Three Studios: the background replaced on the way stays downstream.
    c = _studio(scene=b, **output_size(32))
    assert c.result[0].bg_media is own and torch.allclose(c.result[1], torch.tensor(BLUE))
    assert c.ui["pano_upstream_input_images"] == b.media_ui["pano_input_images"]


def test_the_world_input_is_drawn_together_with_an_upstream_scene():
    # ADR 0048: the upstream base 3D and the own `world` meet by depth; neither replaces the other.
    a = _studio({"stickers": [_world_port(-2.0, x=-1.0)]}, sticker=_solid(RED)).result[0]
    near = blobs(blob((0.0, 0.0, 1.0), BLUE, size=0.2))

    output = _studio(scene=a, world=near)
    image, b = output.result[1], output.result[0]

    assert torch.allclose(_center(image)[0], torch.tensor(BLUE), atol=0.05) and _shows(image, RED)
    assert b.layers[0] is a.layers[0] and b.layers[-1].scene is near
    assert output.ui["pano_scene_files"] and output.ui["pano_upstream_layers"]


def test_the_scene_input_takes_only_a_pano_scene():
    with pytest.raises(TypeError, match="scene takes only the scene output"):
        _studio(scene=blobs(blob((0.0, 0.0, -1.0), BLUE)))


def test_without_an_upstream_background_the_own_one_is_drawn_and_a_video_follows_the_upstream_times(tmp_path):
    a = _studio({"timeline": {"fps": 50.0, "length": 6}}).result[0]

    # A 25 fps background under a 50 fps Timeline shows each of its frames for two output frames.
    scene = _studio(scene=a, background=_cfr(tmp_path, count=4)).result[0]

    assert [bg_index for bg_index, _layers in scene.frames] == [0, 0, 1, 1, 2, 2, 3, 3]


def test_the_ui_keeps_the_upstream_media_apart_from_the_own():
    a = _studio({"stickers": [_sky_port()]}, sticker=_solid(RED), background=_solid(WHITE, 16, 32), background_range="180").result[0]

    ui = _studio({"stickers": [_sky_port()]}, sticker=_solid(BLUE), scene=a).ui

    [upstream] = ui["pano_upstream_layers"]
    assert upstream["state"] is a.layers[0].state and upstream["state"]["camera"] is None
    assert upstream["ui"]["pano_sticker_input_images"] != ui["pano_sticker_input_images"]
    assert ui["pano_upstream_input_images"] == a.media_ui["pano_input_images"] and "pano_input_images" not in ui
    assert ui["pano_upstream_coverage"] == [180] and ui["pano_upstream_bg_color"] == [[0.0, 0.0, 0.0]]
    json.dumps(ui)


def test_the_upstream_layers_carry_their_scene_id_and_not_their_overrides():
    a = _studio({"id": "scene_a"}).result[0]
    override = {"layer": "scene_a", "fps": 24.0, "deleted": ["sticker_9"]}
    b = _studio({"id": "scene_b", "upstream": [override]}, scene=a).result[0]

    output = _studio({"id": "scene_c"}, scene=b)

    # ADR 0030: the editor keys the upstream layers by their Scene id; a state never written has none.
    assert [layer["state"]["id"] for layer in output.ui["pano_upstream_layers"]] == ["scene_a", "scene_b"]
    assert [layer.state["id"] for layer in output.result[0].layers] == ["scene_a", "scene_b", "scene_c"]
    assert _studio(scene=b).result[0].layers[-1].state["id"] is None
    # Downstream receives the applied form: the `scene` output leaves out the own overrides.
    assert b.layers[-1].state["upstream"] == []
    json.dumps(output.ui)


def test_preview_passes_a_scene_of_several_layers_through():
    a = _studio({"stickers": [_sky_port()]}, sticker=_solid(RED)).result[0]
    b = _studio(scene=a).result[0]

    output = PanoramaPreviewSceneNode.execute(source=b, background_range="360")

    # It passes through, and gives every layer for the viewer (ADR 0041).
    assert output.result[0] is b
    assert [layer["state"] for layer in output.ui["pano_upstream_layers"]] == [layer.state for layer in b.layers] and len(b.layers) == 2


def test_a_camera_downstream_shoots_a_scene_of_several_layers():
    a = _studio({"stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[0]
    b = _studio({"stickers": [_sky_port(0.0, size={"value": {"hFOV_deg": 10.0}})]}, sticker=_solid(BLUE), scene=a).result[0]

    image = _studio({"camera": {"aspect": 1.0, "fov": {"value": 60.0}}}, scene=b).result[1]

    assert torch.allclose(_center(image)[0], torch.tensor(BLUE)) and _shows(image, RED)


def test_a_scene_is_timed_at_its_fps_as_a_fraction():
    a = _studio({"timeline": {"fps": 30000 / 1001, "length": 2}}).result[0]

    video = _studio(scene=a).result[3]

    assert video.get_frame_rate() == Fraction(30000, 1001)
