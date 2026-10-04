import json
from fractions import Fraction

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Stickers and Preview nodes",
)

import av
from PIL import Image
from comfy_api.latest import InputImpl

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core import video as core_video
from comfyui_pano_suite.nodes import PanoramaPreviewSceneNode

# A variable frame rate: the gaps are 40, 60 and 20 ms.
VFR_MS = [0, 40, 100, 120, 160, 220, 240, 280, 340, 360, 400, 460, 480, 520, 580, 600, 640, 700, 720, 760]


def _file(tmp_path, name, gop, pts_ms=VFR_MS, width=64, height=32, audio_rate=None, pix_fmt="yuv420p", colors=None, codec="libx264", container_format=None):
    path = tmp_path / name
    with av.open(str(path), "w", format=container_format) as container:
        stream = container.add_stream(codec, rate=25)
        stream.width, stream.height, stream.pix_fmt = width, height, pix_fmt
        for key, value in (colors or {}).items():
            setattr(stream.codec_context, key, value)
        stream.codec_context.gop_size = gop
        stream.codec_context.time_base = Fraction(1, 1000)
        if codec.startswith("libx264"):
            stream.options = {"preset": "ultrafast", "x264-params": "scenecut=0"}
        audio = container.add_stream("aac", rate=audio_rate, layout="mono") if audio_rate else None
        for index, pts in enumerate(pts_ms):
            frame = av.VideoFrame.from_ndarray(np.full((height, width, 3), index * 10 % 256, np.uint8), format="rgb24").reformat(format=pix_fmt)
            frame.pts, frame.time_base = pts, Fraction(1, 1000)
            container.mux(stream.encode(frame))
        container.mux(stream.encode(None))
        if audio is not None:
            frame = av.AudioFrame.from_ndarray(np.zeros((1, audio_rate), np.float32), format="fltp", layout="mono")
            frame.sample_rate, frame.pts = audio_rate, 0
            container.mux([*audio.encode(frame), *audio.encode(None)])
    return InputImpl.VideoFromFile(str(path))


def _packets(path):
    """The video packets of a file in decode order: (seconds, keyframe, bytes)."""
    with av.open(str(path)) as container:
        stream = container.streams.video[0]
        return [(packet.pts * stream.time_base, packet.is_keyframe, bytes(packet)) for packet in container.demux(stream) if packet.size]


def _keyframe_gaps(packets):
    keyframes = [index for index, (_time, keyframe, _data) in enumerate(packets) if keyframe]
    return [after - before for before, after in zip(keyframes, keyframes[1:] + [len(packets)])]


def _preview_mp4(video, tmp_path):
    ui = PanoramaPreviewSceneNode.execute(source=video, coverage="360").ui
    entry = ui["pano_videos"][0]
    return tmp_path / entry["subfolder"] / entry["filename"], ui["pano_video_meta"][0]


def _times(video):
    times = sorted(time for time, _keyframe, _data in _packets(video.get_stream_source()))
    return [time - times[0] for time in times]


def test_a_video_that_seeks_fast_is_copied(tmp_path, monkeypatch):
    video = _file(tmp_path, "short.mp4", gop=10)
    encoded = []
    monkeypatch.setattr(nodes, "encode_editor_mp4", lambda opened, progress=None: encoded.append(opened))

    path, _meta = _preview_mp4(video, tmp_path)

    assert not encoded
    assert _packets(path) == _packets(video.get_stream_source())


def test_a_long_gop_video_gets_a_proxy_with_short_gops_and_its_times(tmp_path):
    video = _file(tmp_path, "long.mp4", gop=250, audio_rate=8000)
    assert max(_keyframe_gaps(_packets(video.get_stream_source()))) == len(VFR_MS)

    path, meta = _preview_mp4(video, tmp_path)

    packets = _packets(path)
    assert max(_keyframe_gaps(packets)) <= core_video.EDITOR_KEYINT
    # Without B-frames, packets are in presentation order.
    assert [time for time, _keyframe, _data in packets] == _times(video)
    assert core_video.editor_ready(path)
    assert meta["has_audio"] is True
    with av.open(str(path)) as container:
        assert container.streams.audio[0].codec_context.name == "aac"
        assert (container.streams.video[0].width, container.streams.video[0].height) == (64, 32)


def test_a_trimmed_video_gets_a_proxy_of_its_trim_window(tmp_path):
    source = _file(tmp_path, "short.mp4", gop=10).get_stream_source()
    video = InputImpl.VideoFromFile(source, start_time=0.1)

    path, meta = _preview_mp4(video, tmp_path)

    times = [time for time, _keyframe, _data in _packets(path)]
    assert meta["frames"] == len(times) == len([pts for pts in VFR_MS if pts >= 100])
    assert times == [Fraction(pts - 100, 1000) for pts in VFR_MS if pts >= 100]


def test_a_large_video_gets_a_proxy_capped_in_size(tmp_path, monkeypatch):
    monkeypatch.setattr(core_video, "EDITOR_MAX_SIZE", 32)
    wide = _file(tmp_path, "wide.mp4", gop=10)
    tall = _file(tmp_path, "tall.mp4", gop=10, width=16, height=64)

    sizes = []
    for video in (wide, tall):
        path, _meta = _preview_mp4(video, tmp_path)
        with av.open(str(path)) as container:
            sizes.append((container.streams.video[0].width, container.streams.video[0].height))

    assert sizes == [(32, 16), (8, 32)]


def test_the_proxy_is_encoded_once_per_video(tmp_path, monkeypatch):
    encoded = []
    encode = nodes.encode_editor_mp4
    monkeypatch.setattr(nodes, "encode_editor_mp4", lambda opened, progress=None: encoded.append(opened) or encode(opened, progress))
    video = _file(tmp_path, "long.mp4", gop=250)

    first, _meta = _preview_mp4(video, tmp_path)
    second, _meta = _preview_mp4(InputImpl.VideoFromFile(video.get_stream_source()), tmp_path)

    assert len(encoded) == 1
    assert first == second


def test_an_image_batch_gets_short_gops(tmp_path):
    ui = nodes.PanoramaStickersSceneNode.execute(
        bg_color="#000000", coverage="360", output_preset="1024", state_json="", bg_media=torch.rand((30, 16, 32, 3))
    ).ui

    entry = ui["pano_input_videos"][0]
    packets = _packets(tmp_path / entry["subfolder"] / entry["filename"])
    assert len(packets) == 30
    assert max(_keyframe_gaps(packets)) <= core_video.EDITOR_KEYINT


def test_a_preview_image_batch_gets_short_gops(tmp_path):
    path, meta = _preview_mp4(torch.rand((30, 16, 32, 3)), tmp_path)

    packets = _packets(path)
    assert meta["frames"] == len(packets) == 30
    assert max(_keyframe_gaps(packets)) <= core_video.EDITOR_KEYINT


def _colors(path):
    with av.open(str(path)) as container:
        codec = container.streams.video[0].codec_context
        frame = next(container.decode(video=0))
        return (codec.colorspace, codec.color_primaries, codec.color_trc, codec.color_range), frame.to_ndarray()[0, 0]


def test_a_proxy_of_a_file_keeps_its_color_tags(tmp_path):
    # BT.601 (SMPTE 170M) at TV range.
    bt601 = {"colorspace": 6, "color_primaries": 6, "color_trc": 6, "color_range": 1}
    video = _file(tmp_path, "sd.mp4", gop=250, colors=bt601)

    path, _meta = _preview_mp4(video, tmp_path)

    assert _colors(path)[0] == (6, 6, 6, 1)
    assert _colors(path)[1] == _colors(video.get_stream_source())[1]


def test_a_proxy_of_a_full_range_file_is_at_tv_range(tmp_path):
    video = _file(tmp_path, "full.mp4", gop=250, pts_ms=[0, 40], pix_fmt="yuvj420p", colors={"colorspace": 1, "color_range": 2})
    assert _colors(video.get_stream_source())[1] == 0

    path, _meta = _preview_mp4(video, tmp_path)

    tags, luma = _colors(path)
    assert (tags[0], tags[3]) == (1, 1)
    assert luma == 16


# libx264rgb decodes to gbrp.
@pytest.mark.parametrize("codec, pix_fmt, decoded", [("libx264rgb", "rgb24", "gbrp"), ("ffv1", "bgra", "bgra")])
def test_a_proxy_of_an_rgb_file_is_tagged_as_srgb(tmp_path, codec, pix_fmt, decoded):
    video = _file(tmp_path, f"{pix_fmt}.mkv", gop=250, pts_ms=[0, 40, 80], pix_fmt=pix_fmt, codec=codec)
    with av.open(video.get_stream_source()) as container:
        assert next(container.decode(video=0)).format.name == decoded

    path, _meta = _preview_mp4(video, tmp_path)

    # BT.709 primaries and matrix, sRGB transfer, TV range; the black frame is black.
    assert _colors(path) == ((1, 1, 13, 1), 16)


def test_an_image_batch_with_alpha_or_gray_gets_an_editor_mp4(tmp_path):
    for channels in (4, 1):
        ui = nodes.PanoramaStickersSceneNode.execute(
            bg_color="#000000", coverage="360", output_preset="1024", state_json="", bg_media=torch.rand((3, 16, 32, channels))
        ).ui

        entry = ui["pano_input_videos"][0]
        assert len(_packets(tmp_path / entry["subfolder"] / entry["filename"])) == 3


def _sticker_ui(sticker, state_json=""):
    return nodes.PanoramaStickersSceneNode.execute(
        bg_color="#000000", coverage="360", output_preset="1024", state_json=state_json, sticker=sticker
    ).ui


def _sticker_mp4(ui, tmp_path):
    entry = ui["pano_sticker_input_videos"][0]
    return tmp_path / entry["subfolder"] / entry["filename"], ui["pano_sticker_input_video_meta"][0]


def test_a_sticker_video_gets_a_proxy_with_its_times_beside_its_first_frame(tmp_path):
    video = _file(tmp_path, "sticker.mp4", gop=250)

    ui = _sticker_ui(video)

    path, meta = _sticker_mp4(ui, tmp_path)
    packets = _packets(path)
    assert max(_keyframe_gaps(packets)) <= core_video.EDITOR_KEYINT
    assert [time for time, _keyframe, _data in packets] == _times(video)
    # The media ends one frame at the average rate after its last PTS, as PortMedia.end(); the MP4 time base is 1/16000.
    assert meta == {"kind": "VIDEO", "fps": 25.0, "frames": len(VFR_MS), "duration": 0.8, "pts_tolerance": 1 / 32000, "has_audio": False}
    assert ui["pano_sticker_input_images"]


def test_a_sticker_video_that_seeks_fast_is_copied(tmp_path, monkeypatch):
    video = _file(tmp_path, "sticker.mp4", gop=10)
    encoded = []
    monkeypatch.setattr(nodes, "encode_editor_mp4", lambda opened, progress=None: encoded.append(opened))

    path, _meta = _sticker_mp4(_sticker_ui(video), tmp_path)

    assert not encoded
    assert _packets(path) == _packets(video.get_stream_source())


def test_a_sticker_image_batch_gets_an_mp4_at_the_timeline_fps(tmp_path):
    ui = _sticker_ui(torch.rand((30, 16, 32, 3)), json.dumps({"version": 2, "timeline": {"fps": 12}}))

    path, meta = _sticker_mp4(ui, tmp_path)
    packets = _packets(path)
    assert [time for time, _keyframe, _data in packets] == [Fraction(index, 12) for index in range(30)]
    assert max(_keyframe_gaps(packets)) <= core_video.EDITOR_KEYINT
    assert meta == {"kind": "IMAGE", "fps": 12.0, "frames": 30, "duration": 2.5, "has_audio": False}


def test_a_single_image_or_frame_sticker_has_no_mp4(tmp_path):
    for sticker in (torch.rand((1, 16, 32, 3)), _file(tmp_path, "one.mp4", gop=10, pts_ms=[0])):
        ui = _sticker_ui(sticker)

        assert ui["pano_sticker_input_images"]
        assert "pano_sticker_input_videos" not in ui and "pano_sticker_input_video_meta" not in ui


def test_the_sticker_proxy_is_encoded_once_while_its_input_stays_the_same(tmp_path, monkeypatch):
    encoded = []
    encode = nodes.encode_editor_mp4
    monkeypatch.setattr(nodes, "encode_editor_mp4", lambda opened, progress=None: encoded.append(opened) or encode(opened, progress))
    video = _file(tmp_path, "sticker.mp4", gop=250)
    batch = torch.rand((3, 16, 32, 3))

    first = _sticker_mp4(_sticker_ui(video), tmp_path)
    moved = json.dumps({"version": 2, "stickers": [{"id": "p", "source": {"kind": "port"}, "clip": {"start": 5, "in": 2}}]})
    second = _sticker_mp4(_sticker_ui(InputImpl.VideoFromFile(video.get_stream_source()), moved), tmp_path)
    _sticker_ui(batch)
    _sticker_ui(batch, moved)

    assert len(encoded) == 2
    assert first == second


def test_an_rgba_sticker_image_batch_keeps_its_alpha_as_pngs(tmp_path, monkeypatch):
    saved = []
    save = nodes.save_editor_frames
    monkeypatch.setattr(nodes, "save_editor_frames", lambda images, progress=None: saved.append(images) or save(images, progress))
    batch = torch.rand((3, 16, 32, 4))
    state = json.dumps({"version": 2, "timeline": {"fps": 12}})

    ui = _sticker_ui(batch, state)
    again = _sticker_ui(batch, json.dumps({"version": 2, "timeline": {"fps": 12}, "stickers": [{"id": "p", "source": {"kind": "port"}, "clip": {"start": 4}}]}))

    assert "pano_sticker_input_videos" not in ui
    assert ui["pano_sticker_input_video_meta"][0] == {"kind": "IMAGE", "fps": 12.0, "frames": 3, "duration": 0.25, "has_audio": False}
    entries = ui["pano_sticker_input_frames"]
    for index, entry in enumerate(entries):
        with Image.open(tmp_path / entry["subfolder"] / entry["filename"]) as image:
            assert image.mode == "RGBA"
            expected = (batch[index].clamp(0, 1) * 255 + 0.5).byte().numpy()
            assert np.array_equal(np.asarray(image), expected)
    assert len(saved) == 1
    assert again["pano_sticker_input_frames"] == entries
