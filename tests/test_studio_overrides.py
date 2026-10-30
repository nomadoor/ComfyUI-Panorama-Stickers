"""Panorama Studio applies its overrides of the upstream layers (`upstream`, ADR 0030) to the Scene it shoots and
passes on."""

import base64
import io

import pytest
import torch
from PIL import Image


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import sticker_media
from test_stickers_scene_video import _cfr
from test_studio_upstream import BLUE, GREEN, RED, _center, _frames, _shows, _sky_port, _solid, _studio
from tools.bake_legacy_goldens import _painting, _stroke


def _file(*colors):
    """A `file` Source one pixel high with a column per color from the left."""
    image = Image.new("RGB", (len(colors), 1))
    for x, rgb in enumerate(colors):
        image.putpixel((x, 0), tuple(round(value * 255) for value in rgb))
    buf = io.BytesIO()
    image.save(buf, format="PNG")
    return {"kind": "file", "data_url": "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("ascii")}


def _sky(sticker_id, rgb, yaw_deg=0.0, **sticker):
    source = _file(*rgb) if isinstance(rgb[0], list) else _file(rgb)
    return {"id": sticker_id, "source": source, "direction": {"value": {"yaw_deg": yaw_deg, "pitch_deg": 0.0}},
            "size": {"value": {"hFOV_deg": 30.0}}, **sticker}


def _record(layer="scene_a", deleted=(), stickers=(), **fields):
    return {"layer": layer, "fps": 24.0, "deleted": list(deleted), "stickers": [{"placement": "sky", **sticker} for sticker in stickers], **fields}


def _three():
    return {"id": "scene_a", "stickers": [_sky("s1", RED, 0.0), _sky("s2", GREEN, 90.0), _sky("s3", BLUE, -90.0)]}


def _ids(layer):
    return [item["id"] for item in layer.state["stickers"]]


def test_moved_hidden_and_deleted_upstream_stickers_change_the_output():
    a = _studio(_three()).result[0]
    assert _shows(_studio(scene=a).result[1], GREEN)

    record = _record(deleted=["s3"], stickers=[{"id": "s1", "direction": {"value": {"yaw_deg": 180.0, "pitch_deg": 0.0}}},
                                               {"id": "s2", "visible": False}])
    output = _studio({"upstream": [record]}, scene=a)
    image = output.result[1]

    assert not torch.allclose(_center(image)[0], torch.tensor(RED)) and _shows(image, RED)
    assert not _shows(image, GREEN) and not _shows(image, BLUE)
    assert _ids(output.result[0].layers[0]) == ["s1", "s2"]
    assert "s3" not in output.result[0].layers[0].sources.stickers
    # The editor reads the upstream as it came, to show what the overrides change.
    assert output.ui["pano_upstream_layers"][0]["state"] is a.layers[0].state


def test_z_index_and_crop_overrides_take_effect():
    a = _studio({"id": "scene_a", "stickers": [_sky("s1", RED, z_index=0), _sky("s2", [GREEN] * 4 + [BLUE] * 4, z_index=1)]}).result[0]
    assert _shows(_studio(scene=a).result[1], GREEN)

    raised = _studio({"upstream": [_record(stickers=[{"id": "s1", "z_index": 5}])]}, scene=a).result[1]
    cropped = _studio({"upstream": [_record(stickers=[{"id": "s2", "crop": {"x0": 0.5, "y0": 0.0, "x1": 1.0, "y1": 1.0}}])]}, scene=a).result[1]

    assert torch.allclose(_center(raised)[0], torch.tensor(RED))
    assert _shows(cropped, BLUE) and not _shows(cropped, GREEN)


def test_a_hidden_upstream_painting_is_not_drawn():
    mask = _painting(mask=[_stroke("mask", "mask", [(0.4, 0.5), (0.6, 0.5)], 40)])
    a = _studio({"id": "scene_a", "painting": mask}).result[0]
    assert float(_studio(scene=a).result[2].max()) > 0.5

    first_mask = _studio({"upstream": [_record(painting_visible=False)]}, scene=a).result[2]

    assert float(first_mask.max()) == 0.0


def test_deleting_the_upstream_port_sticker_does_not_raise():
    a = _studio({"id": "scene_a", "stickers": [_sky_port(0.0)]}, sticker=_solid(RED)).result[0]

    output = _studio({"upstream": [_record(deleted=["p"])]}, scene=a)

    assert not _shows(output.result[3].get_components().images, RED)
    assert output.result[0].layers[0].port is None and a.layers[0].port is not None


def test_an_overridden_clip_extends_the_length_and_a_deletion_does_not_shorten_it():
    a = _studio({"id": "scene_a", "timeline": {"length": 3}, "stickers": [_sky("s1", RED, clip={"start": 0, "duration": 2}),
                                                                          _sky("s2", GREEN, clip={"start": 0, "duration": 8})]}).result[0]
    assert _frames(_studio(scene=a)) == 3

    assert _frames(_studio({"upstream": [_record(stickers=[{"id": "s1", "clip": {"start": 0, "duration": 10}}])]}, scene=a)) == 10
    # The own `timeline.length` still decides.
    assert _frames(_studio({"timeline": {"length": 4}, "upstream": [_record(stickers=[{"id": "s1", "clip": {"start": 0, "duration": 10}}])]}, scene=a)) == 4
    longer = _studio({"id": "scene_a", "stickers": [_sky("s1", RED, clip={"start": 0, "duration": 8})]}).result[0]
    assert _frames(_studio({"upstream": [_record(deleted=["s1"])]}, scene=longer)) == 8


def test_an_overridden_clip_counts_at_the_layer_fps(tmp_path):
    # Recorded at 24 fps, the 25 fps sticker VIDEO sets the Timeline of the upstream Studio.
    a = _studio({"id": "scene_a", "timeline": {"fps": 24.0}, "stickers": [_sky_port(), _sky("s1", RED)]}, sticker=_cfr(tmp_path, count=4)).result[0]

    # 48 frames at 24 fps are 2 seconds, 50 output frames at 25 fps.
    b = _studio({"upstream": [_record(stickers=[{"id": "s1", "clip": {"start": 0, "duration": 48}}])]}, scene=a)

    assert b.result[0].rate == 25 and _frames(b) == 50


def test_downstream_receives_the_applied_layers_and_its_own_overrides_win():
    a = _studio(_three()).result[0]
    moved = {"id": "s1", "direction": {"value": {"yaw_deg": 180.0, "pitch_deg": 0.0}}}
    b = _studio({"id": "scene_b", "upstream": [_record(deleted=["s3"], stickers=[moved])]}, scene=a).result[0]

    c = _studio(scene=b)
    assert c.result[0].layers[0] is b.layers[0] and _ids(b.layers[0]) == ["s1", "s2"]
    assert not torch.allclose(_center(c.result[1])[0], torch.tensor(RED)) and not _shows(c.result[1], BLUE)
    assert c.ui["pano_upstream_layers"][0]["state"] is b.layers[0].state

    back = {"id": "s1", "direction": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0}}}
    image = _studio({"upstream": [_record(stickers=[back])]}, scene=b).result[1]
    assert torch.allclose(_center(image)[0], torch.tensor(RED))


def test_an_untouched_lane_follows_the_upstream():
    record = _record(stickers=[{"id": "s1", "size": {"value": {"hFOV_deg": 60.0}}}])

    for yaw in (0.0, 90.0):
        a = _studio({"id": "scene_a", "stickers": [_sky("s1", RED, yaw)]}).result[0]
        [s1] = _studio({"upstream": [record]}, scene=a).result[0].layers[0].state["stickers"]
        assert s1["direction"]["value"]["yaw_deg"] == yaw and s1["size"]["value"]["hFOV_deg"] == 60.0


def test_a_duplicated_id_in_the_chain_takes_the_overrides_at_the_nearest_layer_with_a_warning():
    a = _studio(_three()).result[0]
    copy = _studio(_three(), scene=a).result[0]

    output = _studio({"upstream": [_record(deleted=["s1"])]}, scene=copy)

    layers = output.result[0].layers
    assert layers[0] is copy.layers[0] and _ids(layers[1]) == ["s2", "s3"]
    assert output.ui["pano_sticker_warnings"] == [
        "Scene id scene_a is on 2 upstream Panorama Studio nodes; its overrides apply to the nearest one only."]


def test_layers_without_an_applied_record_keep_their_objects():
    a = _studio(_three()).result[0]
    x = _studio({"id": "scene_x", "stickers": [_sky("s1", GREEN)]}, scene=a).result[0]
    unknown = {"id": "s9", "visible": False}

    output = _studio({"upstream": [_record(stickers=[{"id": "s1", "visible": False}]), _record("scene_x", stickers=[unknown])]}, scene=x)

    layers = output.result[0].layers
    assert layers[0] is not x.layers[0] and layers[1] is x.layers[1]
    # A layer without an id is inherited only.
    plain = _studio({"stickers": [_sky("s1", RED)]}).result[0]
    assert _studio({"upstream": [_record(stickers=[{"id": "s1", "visible": False}])]}, scene=plain).result[0].layers[0] is plain.layers[0]


def test_the_upstream_port_media_moves_with_its_overridden_clip():
    batch = torch.cat([_solid(RED), _solid(GREEN), _solid(BLUE)])
    a = _studio({"id": "scene_a", "timeline": {"length": 6}, "stickers": [_sky_port()]}, sticker=batch).result[0]

    output = _studio({"upstream": [_record(stickers=[{"id": "p", "clip": {"start": 2, "duration": 3}}])]}, scene=a)

    centers = _center(output.result[3].get_components().images)
    assert [torch.allclose(centers[index], torch.tensor(rgb)) for index, rgb in ((2, RED), (3, GREEN), (4, BLUE))] == [True] * 3


def test_a_moved_upstream_port_clip_without_a_duration_extends_the_output_to_its_media():
    batch = torch.cat([_solid(RED), _solid(GREEN), _solid(BLUE)])
    a = _studio({"id": "scene_a", "stickers": [_sky_port()]}, sticker=batch).result[0]
    assert _frames(_studio(scene=a)) == 3

    output = _studio({"upstream": [_record(stickers=[{"id": "p", "clip": {"start": 4}}])]}, scene=a)

    centers = _center(output.result[3].get_components().images)
    assert len(centers) == 7
    assert [torch.allclose(centers[index], torch.tensor(rgb)) for index, rgb in ((4, RED), (5, GREEN), (6, BLUE))] == [True] * 3


def test_overrides_that_set_no_clip_do_not_extend_the_length():
    a = _studio({"id": "scene_a", "timeline": {"length": 3}, "stickers": [_sky("s1", RED), _sky("s2", GREEN, clip={"start": 0, "duration": 8})]}).result[0]

    assert _frames(_studio({"upstream": [_record(stickers=[{"id": "s1", "visible": False}])]}, scene=a)) == 3


def test_an_upstream_hidden_painting_is_drawn_when_shown_downstream():
    mask = _painting(mask=[_stroke("mask", "mask", [(0.4, 0.5), (0.6, 0.5)], 40)])
    a = _studio({"id": "scene_a", "painting": mask, "painting_visible": False}).result[0]
    assert float(_studio(scene=a).result[2].max()) == 0.0

    first_mask = _studio({"upstream": [_record(painting_visible=True)]}, scene=a).result[2]

    assert float(first_mask.max()) > 0.5


def test_port_media_with_another_clip_does_not_open_the_video_again(tmp_path, monkeypatch):
    port = sticker_media.PortMedia("p", {"start": 0, "in": 0, "duration": None}, _cfr(tmp_path, count=4), 25.0)
    monkeypatch.setattr(sticker_media, "open_video", None)

    moved = port.with_clip({"start": 2, "in": 0, "duration": None})

    assert moved.times is port.times and moved.first_frame is port.first_frame and moved.media is port.media
    assert [moved.index_at(frame, 25.0, 0.0) for frame in range(7)] == [None, None, 0, 1, 2, 3, None]
    assert moved.end(25.0) == port.end(25.0) + 2 and port.clip["start"] == 0
