import io
import os
from fractions import Fraction
from pathlib import Path

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

import av
from comfy_api.latest import InputImpl, Types
from comfy_extras.nodes_video import GetVideoComponents

from comfyui_pano_suite import nodes
from comfyui_pano_suite.nodes import PanoramaPreviewSceneNode
from comfyui_pano_suite.scene_video import RenderedVideo, SceneVideo, _container_and_codec
from comfyui_pano_suite.sticker_media import open_video
from scene_test_helpers import shoot, video_frames
from test_stickers_scene_video import _cfr, _execute, _write_video


def _count_renders(monkeypatch):
    """The passes over the Timeline that start from now on."""
    passes = []
    original = nodes._render_frames

    def counted(*args, **kwargs):
        passes.append(1)
        return original(*args, **kwargs)

    monkeypatch.setattr(nodes, "_render_frames", counted)
    return passes


def _forbid_components(monkeypatch):
    def fail(self):
        raise AssertionError("the video must not be read whole")

    monkeypatch.setattr(SceneVideo, "get_components", fail)


def _probe(path):
    """The seconds of each video packet, the frame rate, and the audio codec names of a saved file."""
    with av.open(str(path)) as container:
        stream = container.streams.video[0]
        times = sorted(packet.pts * stream.time_base for packet in container.demux(stream) if packet.pts is not None)
        return times, stream.average_rate, [audio.codec_context.name for audio in container.streams.audio]


def test_get_video_components_reads_every_frame_and_the_audio(tmp_path):
    background = _cfr(tmp_path, audio_rate=8000)
    video = _execute({"version": 2, "timeline": {"fps": 25.0, "length": 12}}, bg_media=background)[2]

    images, audio, fps, bit_depth, color_space = GetVideoComponents.execute(video).result

    assert images.shape == (12, 32, 64, 3)
    assert torch.equal(images[:10], background.get_components().images)
    assert fps == 25.0 and (bit_depth, color_space) == (8, "sRGB")
    # The audio is cut to the 0.48 s of 12 frames, but the background's ends at 0.4 s.
    assert audio["sample_rate"] == 8000 and torch.equal(audio["waveform"], background.get_components().audio["waveform"])
    assert audio["waveform"].shape == (1, 1, 3200)


def test_each_read_renders_the_same_frames_again(monkeypatch):
    video = _execute({"version": 2}, bg_media=torch.rand((4, 16, 32, 3)))[2]
    passes = _count_renders(monkeypatch)

    first = video.get_components().images
    second = video.get_components().images

    assert len(passes) == 2
    assert torch.equal(first, second) and first.data_ptr() != second.data_ptr()


@pytest.mark.parametrize("format, codec, audio_codec", [("mp4", "h264", "aac"), ("mkv", "h264", "aac"), ("webm", "av1", "opus")])
def test_save_keeps_the_pts_of_a_variable_frame_rate_background_and_its_audio(tmp_path, monkeypatch, format, codec, audio_codec):
    background = _write_video(tmp_path / "vfr.mkv", [0, 40, 50, 130, 170], audio_rate=8000)
    video = _execute({"version": 2, "timeline": {"length": 7}}, bg_media=background)[2]
    _forbid_components(monkeypatch)
    path = tmp_path / f"out.{format}"

    video.save_to(str(path), format=Types.VideoContainer(format), codec=Types.VideoCodec(codec))

    times, _rate, audio = _probe(path)
    # After the background ends, the frames continue at the Timeline fps (25).
    assert times == [Fraction(value, 1000) for value in (0, 40, 50, 130, 170, 210, 250)]
    assert audio == [audio_codec]


def test_save_without_a_video_spaces_the_frames_at_the_timeline_fps(tmp_path):
    video = _execute({"version": 2, "timeline": {"fps": 12.0, "length": 3}}, output_size="1024")[2]
    path = tmp_path / "out.mp4"

    video.save_to(str(path), crf=10)

    times, rate, audio = _probe(path)
    assert times == [Fraction(0), Fraction(1, 12), Fraction(2, 12)] and rate == 12
    assert audio == []


def test_saved_frames_are_the_rendered_frames_within_the_encoding(tmp_path):
    gradient = torch.linspace(0.2, 0.8, 128).expand(64, 128)
    background = torch.stack([torch.stack([gradient, gradient.flip(-1), torch.full_like(gradient, shade)], dim=-1) for shade in (0.1, 0.5, 0.9)])
    video = _execute({"version": 2}, bg_media=background)[2]
    path = tmp_path / "out.mp4"

    video.save_to(str(path), crf=0)

    decoded = InputImpl.VideoFromFile(str(path)).get_components().images
    assert decoded.shape == (3, 64, 128, 3)
    assert float((decoded - video.get_components().images).abs().amax()) < 0.02


def test_default_saves_and_the_stream_source_share_one_render(tmp_path, monkeypatch):
    video = _execute({"version": 2, "timeline": {"length": 3}}, output_size="1024")[2]
    passes = _count_renders(monkeypatch)
    _forbid_components(monkeypatch)

    source = video.get_stream_source()
    video.save_to(str(tmp_path / "a.mp4"))
    video.save_to(str(tmp_path / "b.mp4"), format=Types.VideoContainer.MP4, codec=Types.VideoCodec.H264)

    assert video.get_stream_source() == source
    assert len(passes) == 1
    assert _probe(tmp_path / "a.mp4")[0] == _probe(source)[0] == [Fraction(index, 24) for index in range(3)]
    # Other encodings are rendered for themselves.
    video.save_to(str(tmp_path / "c.mkv"))
    video.save_to(str(tmp_path / "d.mp4"), crf=30)
    assert len(passes) == 3


def test_stream_source_is_rendered_again_when_its_file_is_gone(monkeypatch):
    video = _execute({"version": 2, "timeline": {"length": 2}}, output_size="1024")[2]
    passes = _count_renders(monkeypatch)
    first = video.get_stream_source()

    os.remove(first)
    second = video.get_stream_source()

    assert len(passes) == 2 and os.path.exists(second)


def test_trim_and_crop_read_the_stream_source(monkeypatch):
    video = _execute({"version": 2, "timeline": {"length": 6}}, output_size="1024")[2]
    _forbid_components(monkeypatch)

    trimmed = video.as_trimmed(2 / 24, 3 / 24)
    cropped = video.as_cropped(0, 0, 64, 32)

    assert trimmed.get_frame_count() == 3
    assert cropped.get_dimensions() == (64, 32)
    assert video.as_cropped(0, 0, 1024, 512) is video


def _forbid_encoding(monkeypatch):
    def fail(self, *args, **kwargs):
        raise AssertionError("the video must not be encoded")

    monkeypatch.setattr(SceneVideo, "_encode", fail)


def _shot_frames(bg_media):
    state = {"version": 2, "camera": {"aspect": 1.0, "rotation": {"keyframes": [
        {"frame": 0, "value": {"yaw_deg": 0.0}}, {"frame": 3, "value": {"yaw_deg": 120.0, "pitch_deg": 20.0}},
    ]}}}
    return video_frames(shoot(bg_media, state))


def test_a_camera_shot_of_the_studio_video_renders_its_frames_exactly(monkeypatch):
    studio_video = _execute({"version": 2, "timeline": {"length": 4}}, bg_media=torch.rand((4, 32, 64, 3)), output_size="1024")[2]
    expected = _shot_frames(studio_video.get_components().images)
    _forbid_encoding(monkeypatch)
    # The editor still receives the MP4 of the video; the frames are rendered.
    monkeypatch.setattr(nodes, "_bg_media_ui", lambda *args: {})

    assert isinstance(open_video(studio_video, "bg_media"), RenderedVideo)
    assert torch.equal(_shot_frames(studio_video), expected)


def test_stickers_video_as_the_background_of_stickers_keeps_its_frames():
    first = _execute({"version": 2, "timeline": {"length": 3}}, bg_media=torch.rand((3, 32, 64, 3)))[2]
    expected = first.get_components().images

    # The editor still receives the MP4 of `first`, but the frames are rendered, not decoded from it.
    second = _execute(bg_media=first)[2]

    assert second.get_frame_rate() == 24 and second.get_frame_count() == 3
    assert torch.equal(second.get_components().images, expected)


def test_preview_shows_the_stream_source_of_the_stickers_video(tmp_path):
    video = _execute({"version": 2, "timeline": {"length": 3}}, output_size="1024")[2]

    output = PanoramaPreviewSceneNode.execute(source=video, coverage="360")

    assert output.result[0] is video
    assert output.ui["pano_video_meta"][0]["frames"] == 3
    entry = output.ui["pano_videos"][0]
    assert tmp_path / entry["subfolder"] / entry["filename"] == Path(video.get_stream_source())
    assert len(list(tmp_path.rglob("*.mp4"))) == 1
    assert len(_probe(video.get_stream_source())[0]) == 3


def test_preview_shows_a_proxy_of_a_long_stickers_video_and_keeps_its_stream_source(tmp_path):
    video = _execute({"version": 2, "timeline": {"length": 30}}, output_size="1024")[2]
    source = Path(video.get_stream_source())
    stream_source = source.read_bytes()

    output = PanoramaPreviewSceneNode.execute(source=video, coverage="360")

    entry = output.ui["pano_videos"][0]
    proxy = tmp_path / entry["subfolder"] / entry["filename"]
    assert proxy != source
    assert nodes.editor_ready(proxy)
    assert _probe(proxy)[0] == _probe(source)[0]
    # SaveVideo still copies the stream source as it was encoded.
    assert source.read_bytes() == stream_source
    with av.open(str(source)) as container:
        assert sum(packet.is_keyframe for packet in container.demux(video=0) if packet.size) == 1


def test_reading_the_video_stops_when_the_queue_is_interrupted(monkeypatch):
    video = _execute({"version": 2, "timeline": {"length": 3}}, output_size="1024")[2]
    calls = []

    def interrupted():
        calls.append(1)
        if len(calls) == 2:
            raise RuntimeError("interrupted")

    monkeypatch.setattr(nodes.comfy.model_management, "throw_exception_if_processing_interrupted", interrupted)

    with pytest.raises(RuntimeError, match="interrupted"):
        video.get_components()


def test_odd_sizes_are_saved_without_their_last_row_and_column(tmp_path):
    # output_size auto: the bg_media width, and half of it high.
    video = _execute({"version": 2, "timeline": {"length": 2}}, bg_media=torch.rand((1, 17, 35, 3)))[2]
    path = tmp_path / "odd.mkv"

    video.save_to(str(path))

    assert video.get_dimensions() == (35, 17)
    assert InputImpl.VideoFromFile(str(path)).get_dimensions() == (34, 16)


@pytest.mark.parametrize("path", ["out.mp4", "out.mkv", "out.webm", "out.mov", io.BytesIO()], ids=["mp4", "mkv", "webm", "mov", "buffer"])
@pytest.mark.parametrize("format", list(Types.VideoContainer))
@pytest.mark.parametrize("codec", list(Types.VideoCodec))
def test_container_and_codec_resolve_auto_as_the_core_does(path, format, codec):
    core = pytest.importorskip("comfy_api.latest._input_impl.video_types")
    if not hasattr(core, "video_output_config"):
        pytest.skip("the core has no video_output_config")
    try:
        expected = core.video_output_config(path, format, codec)[1:]
    except ValueError:
        with pytest.raises(ValueError):
            _container_and_codec(path, format, codec)
        return

    assert _container_and_codec(path, format, codec) == expected


@pytest.mark.parametrize("format, channels", [("mp4", 3), ("webm", 8)])
def test_save_downmixes_audio_without_its_own_layout_to_stereo(tmp_path, format, channels):
    def render(device):
        for _index in range(4):
            yield torch.rand(16, 32, 3), torch.zeros(16, 32)

    audio = {"waveform": torch.rand(1, channels, 8000) * 0.1, "sample_rate": 8000}
    video = SceneVideo(render, 32, 16, Fraction(4), [Fraction(index, 4) for index in range(4)], Fraction(0), audio)
    path = tmp_path / f"out.{format}"

    video.save_to(str(path), crf=20)

    with av.open(str(path)) as container:
        assert container.streams.audio[0].codec_context.channels == 2
