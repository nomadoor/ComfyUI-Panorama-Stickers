"""The node's own `bg_media` placed on the Timeline by `background.clip` (docs/studio-node.md "背景の Clip range"):
shifted, trimmed at either end, and under a Timeline longer than the VIDEO, with `bg_color` around it. The output
keeps the media's own length whatever the Clip range."""

import json

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite.nodes import PanoramaStudioNode
from test_stickers_scene_video import _cfr, _gray

RED = torch.tensor([1.0, 0.0, 0.0])


def _execute(clip=None, length=None, **inputs):
    state = {"version": 2, "timeline": {"fps": 25.0, "length": length}}
    if clip is not None:
        state["background"] = {"clip": clip}
    inputs.setdefault("bg_color", "#ff0000")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_size", "auto")
    return PanoramaStudioNode.execute(state_json=json.dumps(state), **inputs)


def _frames(output):
    return output.result[2].get_components().images


def _shown(images):
    """Per frame, the gray index of the background VIDEO frame (`_cfr`), or None for `bg_color`."""
    return [None if torch.equal(image, RED.expand(image.shape)) else _gray(image[None])[0] for image in images]


def test_a_shifted_start_shows_bg_color_before_the_video_and_keeps_the_length(tmp_path):
    images = _frames(_execute({"start": 3, "in": 0}, bg_media=_cfr(tmp_path)))

    # The length is the VIDEO's own 10 frames: its last 3 frames fall past the output's end.
    assert _shown(images) == [None] * 3 + list(range(7))


def test_a_trimmed_head_starts_inside_the_video_and_keeps_the_length(tmp_path):
    # Trimming the head in the editor moves `start` and `in` together: the media stays where it was, and the
    # trimmed head shows bg_color.
    assert _shown(_frames(_execute({"start": 4, "in": 4}, bg_media=_cfr(tmp_path)))) == [None] * 4 + list(range(4, 10))
    # With `in` alone, the media starts before the Timeline and ends before the output does.
    assert _shown(_frames(_execute({"start": 0, "in": 4}, bg_media=_cfr(tmp_path)))) == list(range(4, 10)) + [None] * 4


def test_a_trimmed_tail_ends_the_video_but_not_the_length(tmp_path):
    assert _shown(_frames(_execute({"start": 0, "in": 0, "duration": 6}, bg_media=_cfr(tmp_path)))) == list(range(6)) + [None] * 4
    # A length past the Clip range shows bg_color after it.
    images = _frames(_execute({"start": 2, "in": 1, "duration": 4}, length=9, bg_media=_cfr(tmp_path)))
    assert _shown(images) == [None, None, 1, 2, 3, 4, None, None, None]


def test_an_explicit_length_longer_than_the_video(tmp_path):
    images = _frames(_execute({"start": 3, "in": 0}, length=20, bg_media=_cfr(tmp_path)))

    assert _shown(images) == [None] * 3 + list(range(10)) + [None] * 7


def test_the_default_clip_keeps_the_frames_one_to_one(tmp_path):
    output = _execute({"start": 0, "in": 0, "duration": None}, length=12, bg_media=_cfr(tmp_path))

    assert _shown(_frames(output)) == list(range(10)) + [None, None]
    assert [bg_index for bg_index, _layers in output.result[4].frames] == list(range(10)) + [None, None]


def test_an_image_batch_follows_the_clip_range():
    batch = torch.arange(6, dtype=torch.float32).mul(20 / 255).view(6, 1, 1, 1).expand(6, 32, 64, 3).clone()

    # The length is the batch's own 6 images, whatever the Clip range.
    assert _shown(_frames(_execute({"start": 2, "in": 1}, bg_media=batch))) == [None, None, 1, 2, 3, 4]
    assert _shown(_frames(_execute({"start": 0, "in": 0, "duration": 3}, bg_media=batch))) == [0, 1, 2, None, None, None]
    assert _shown(_frames(_execute({"start": 0, "in": 0, "duration": 3}, length=5, bg_media=batch))) == [0, 1, 2, None, None]


def test_a_single_image_shows_inside_the_clip_range_only():
    image = torch.full((1, 32, 64, 3), 40 / 255)

    assert _shown(_frames(_execute({"start": 2, "in": 0, "duration": 3}, length=7, bg_media=image))) == [None, None, 2, 2, 2, None, None]
    # Without a duration it shows to the Timeline's end; it ends no Auto length, and with a duration its end
    # counts like a Sticker's Clip range end.
    assert _shown(_frames(_execute({"start": 2, "in": 0}, length=4, bg_media=image))) == [None, None, 2, 2]
    assert len(_frames(_execute({"start": 2, "in": 0}, bg_media=image))) == 1
    assert len(_frames(_execute({"start": 2, "in": 0, "duration": 3}, bg_media=image))) == 5


def test_the_audio_follows_the_clip_range(tmp_path):
    video = _cfr(tmp_path, audio_rate=8000)
    full = _execute(bg_media=video).result[2].get_components().audio["waveform"]

    # 3 frames at 25 fps are 960 samples at 8 kHz; the head trimmed by 1 frame skips 320.
    audio = _execute({"start": 3, "in": 1, "duration": 4}, length=9, bg_media=video).result[2].get_components().audio
    waveform = audio["waveform"]
    assert audio["sample_rate"] == 8000 and waveform.shape == (1, 1, 2880)
    assert torch.equal(waveform[..., :960], torch.zeros((1, 1, 960)))
    assert torch.equal(waveform[..., 960:2240], full[..., 320:1600])
    assert torch.equal(waveform[..., 2240:], torch.zeros((1, 1, 640)))


def test_an_upstream_background_keeps_the_clip_range_of_its_studio(tmp_path):
    upstream = _execute({"start": 3, "in": 0}, bg_media=_cfr(tmp_path)).result[4]

    # The downstream Studio's own clip does not apply to the upstream background.
    downstream = _execute({"start": 5, "in": 0}, length=15, scene=upstream)
    assert _shown(_frames(downstream)) == [None] * 3 + list(range(10)) + [None, None]
    # The editor places the upstream background by the same Clip range.
    assert downstream.ui["pano_upstream_bg_clip"] == [{"clip": {"start": 3, "in": 0, "duration": None}, "fps": 25.0}]
