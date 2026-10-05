import pytest


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.world_render import SceneContent
from test_stickers_scene_video import _cfr, _frames
from test_stickers_timed_sticker import _batch_index_at_center, _reds, _run, _video_index_at_center, _write_red_video
from test_world_render import _ball


def _world_port_state(**timeline):
    # A plane 2 wide at distance 1 spans 90 degrees around the output center.
    sticker = {"id": "p", "placement": "world", "source": {"kind": "port"}, "position": {"value": [0.0, 0.0, -1.0]}, "scale": {"value": 2.0}}
    return {"version": 2, "timeline": timeline, "stickers": [sticker]}


def test_image_batch_world_sticker_maps_one_to_one_to_output_frames():
    image = _frames(_run(_world_port_state(), sticker=_reds(4)))

    assert _batch_index_at_center(image) == [0, 1, 2, 3]


def test_video_world_sticker_plays_in_real_time_at_a_different_fps(tmp_path):
    sticker = _write_red_video(tmp_path / "slow.mkv", [0, 100, 200, 300], 10)

    image = _frames(_run(_world_port_state(), bg_media=_cfr(tmp_path, count=10), sticker=sticker))

    assert _video_index_at_center(image) == [0, 0, 0, 1, 1, 2, 2, 2, 3, 3]


def _with_ball(monkeypatch, count=3):
    content, views = _ball()
    content = SceneContent(count, content.render)
    monkeypatch.setattr(nodes, "_scene_content", lambda scene: None if scene is None else content)
    # The stand-in input has no editor files.
    monkeypatch.setattr(nodes, "_scene_ui", lambda scene: {})
    return views


def test_scene_batch_maps_one_to_one_to_output_frames_and_sets_the_length(monkeypatch):
    _with_ball(monkeypatch)

    image = _frames(_run(scene=object()))

    assert _batch_index_at_center(image) == [0, 1, 2]


def test_scene_batch_follows_its_clip_range(monkeypatch):
    _with_ball(monkeypatch, count=5)

    result = _run({"version": 2, "scene": {"clip": {"start": 2, "in": 1, "duration": 3}}, "timeline": {"length": 6}}, scene=object())
    pano_scene = result[4]

    assert _batch_index_at_center(_frames(result)) == [None, None, 1, 2, 3, None]
    # The item is decided in (a) from the content's start (start - in = 1), outside the Clip range too.
    assert [layers[-1][2] for _bg_index, layers in pano_scene.frames] == [None, 0, 1, 2, 3, 4]


def test_frames_carry_the_scene_item_only_with_scene_content(monkeypatch):
    _with_ball(monkeypatch, count=1)

    with_scene = _run({"version": 2, "timeline": {"length": 2}}, scene=object())[4]
    without = _run({"version": 2, "timeline": {"length": 2}})[4]

    assert with_scene.frames == ((None, ((0.0, None, 0),)), (None, ((1.0, None, 0),)))
    assert without.frames == ((None, ((0.0, None, None),)), (None, ((1.0, None, None),)))


def test_single_scene_item_shows_for_the_whole_timeline(monkeypatch):
    views = _with_ball(monkeypatch, count=1)

    video = _run({"version": 2, "timeline": {"length": 4}}, scene=object())[2]
    views.clear()

    assert _batch_index_at_center(video.get_components().images) == [0, 0, 0, 0]
    # The static scene and Camera are drawn once.
    assert len(views) == 1
