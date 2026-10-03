import io
from fractions import Fraction

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Stickers node",
)

import av
from comfy_api.latest import InputImpl, Types

from comfyui_pano_suite.core import render as render_module
from comfyui_pano_suite.core.video_source import StreamedVideo
from test_stickers_scene_video import _cfr, _execute, _frames
from scene_test_helpers import batch_index_at_center as _batch_index_at_center, red_at_center as _red_at_center


def _reds(count):
    """An IMAGE batch whose frame i is red (i + 1) / 10, unlike the green bg_color and the gray backgrounds."""
    return torch.stack([torch.zeros((4, 8, 3)).index_fill_(-1, torch.tensor([0]), (index + 1) / 10) for index in range(count)])


def _write_red_video(path, pts_ms, rate, red=True):
    """A VIDEO whose frame i is red (i + 1) * 20 / 255 (gray 128 when not `red`), at pts_ms[i] milliseconds of a
    `rate` fps stream."""
    with av.open(str(path), "w") as container:
        stream = container.add_stream("libx264", rate=rate)
        stream.width, stream.height, stream.pix_fmt = 64, 32, "yuv444p"
        stream.codec_context.time_base = Fraction(1, 1000)
        stream.options = {"qp": "0"}
        for index, pts in enumerate(pts_ms):
            array = np.zeros((32, 64, 3), np.uint8)
            if red:
                array[..., 0] = (index + 1) * 20
            else:
                array[...] = 128
            frame = av.VideoFrame.from_ndarray(array, format="rgb24")
            frame.pts, frame.time_base = pts, Fraction(1, 1000)
            for packet in stream.encode(frame):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
    return InputImpl.VideoFromFile(str(path))


def _ntsc_pts(count):
    """Millisecond PTS of 29.97 fps frames, rounded as a 1 ms timebase (mkv, webm) stores them."""
    return [round(index * 1001 / 30) for index in range(count)]




def _video_index_at_center(image):
    return _red_at_center(image, 255 / 20)


def _port_state(clip=None, **timeline):
    sticker = {"id": "p", "source": {"kind": "port"}}
    if clip is not None:
        sticker["clip"] = clip
    return {"version": 2, "timeline": timeline, "stickers": [sticker]}


def _run(state=None, **inputs):
    return _execute(state, output_preset="1024", **inputs)


def test_image_batch_sticker_maps_one_to_one_to_output_frames():
    video = _run(sticker=_reds(4))[2]
    components = video.get_components()
    image, fps = components.images, float(components.frame_rate)

    # Without anything else that sets the length, the Sticker ends with its last image.
    assert _batch_index_at_center(image) == [0, 1, 2, 3]
    assert fps == 24.0


def test_image_batch_sticker_is_not_drawn_past_its_last_image():
    image = _frames(_run(_port_state(length=6), sticker=_reds(4)))

    assert _batch_index_at_center(image) == [0, 1, 2, 3, None, None]


def test_image_batch_sticker_follows_the_output_frames_of_a_background_video(tmp_path):
    # Recorded at 50 fps, the Timeline runs at the 25 fps of the background; the batch still maps to output frames.
    image = _frames(_run(_port_state(fps=50.0), bg_media=_cfr(tmp_path, count=5), sticker=_reds(3)))

    assert _batch_index_at_center(image) == [0, 1, 2, None, None]


def test_single_image_sticker_is_drawn_only_inside_its_clip_range():
    image = _frames(_run(_port_state({"start": 2, "duration": 3}, length=7), sticker=_reds(3)[2:]))

    assert _batch_index_at_center(image) == [None, None, 2, 2, 2, None, None]


def test_clip_in_skips_the_head_of_an_image_batch_sticker():
    image = _frames(_run(_port_state({"start": 2, "in": 1, "duration": 3}, length=6), sticker=_reds(5)))

    assert _batch_index_at_center(image) == [None, None, 1, 2, 3, None]


def test_clip_range_end_comes_before_the_end_of_the_sticker_media():
    image = _frames(_run(_port_state({"start": 1, "duration": 2}), sticker=_reds(5)))

    # The media starts at start - in, so frame 1 shows its first image.
    assert _batch_index_at_center(image) == [None, 0, 1]


def test_video_sticker_plays_in_real_time_at_a_different_fps(tmp_path):
    background = _cfr(tmp_path, count=10)
    # 10 fps against the 25 fps Timeline: each output frame shows the last Sticker frame at or before its time.
    sticker = _write_red_video(tmp_path / "slow.mkv", [0, 100, 200, 300], 10)

    video = _run(bg_media=background, sticker=sticker)[2]
    components = video.get_components()
    image, fps = components.images, float(components.frame_rate)

    assert fps == 25.0
    # Output times 0, 0.04, ..., 0.36 s; the Sticker ends 0.1 s after its last frame.
    assert _video_index_at_center(image) == [0, 0, 0, 1, 1, 2, 2, 2, 3, 3]


def test_video_sticker_is_not_drawn_after_it_ends(tmp_path):
    sticker = _write_red_video(tmp_path / "short.mkv", [0, 100], 10)

    image = _frames(_run(bg_media=_cfr(tmp_path, count=8), sticker=sticker))

    assert _video_index_at_center(image) == [0, 0, 0, 1, 1, None, None, None]


def test_trimmed_video_sticker_starts_at_the_trim(tmp_path):
    sticker = _write_red_video(tmp_path / "cfr.mkv", [index * 40 for index in range(10)], 25).as_trimmed(0.12, 0.2)

    video = _run(sticker=sticker)[2]
    components = video.get_components()
    image, fps = components.images, float(components.frame_rate)

    assert fps == 25.0
    assert _video_index_at_center(image) == [3, 4, 5, 6, 7]


def test_timeline_fps_comes_from_the_sticker_video_without_a_background_video():
    sticker = InputImpl.VideoFromComponents(Types.VideoComponents(images=_reds(3), frame_rate=Fraction(10)))

    video = _run(sticker=sticker)[2]
    components = video.get_components()
    image, audio, fps = components.images, components.audio, float(components.frame_rate)

    assert fps == 10.0
    assert _batch_index_at_center(image) == [0, 1, 2]
    assert audio is None


def test_recorded_length_keeps_its_seconds_at_the_fps_of_the_sticker_video():
    sticker = InputImpl.VideoFromComponents(Types.VideoComponents(images=_reds(3), frame_rate=Fraction(12)))

    # 48 Timeline frames at 24 fps are 2 s, 24 frames at the 12 fps of the Sticker.
    video = _run(_port_state(fps=24.0, length=48), sticker=sticker)[2]
    components = video.get_components()
    image, fps = components.images, float(components.frame_rate)

    assert fps == 12.0
    assert image.shape[0] == 24
    assert _batch_index_at_center(image)[:4] == [0, 1, 2, None]


def test_background_video_fps_comes_before_the_sticker_video_fps(tmp_path):
    sticker = InputImpl.VideoFromComponents(Types.VideoComponents(images=_reds(3), frame_rate=Fraction(10)))

    video = _run(bg_media=_cfr(tmp_path, count=4), sticker=sticker)[2]

    assert video.get_frame_rate() == 25


def _count_sky_renders(monkeypatch):
    calls = []
    original = render_module._render_sky

    def counted(*args, **kwargs):
        calls.append(1)
        return original(*args, **kwargs)

    monkeypatch.setattr(render_module, "_render_sky", counted)
    return calls


def test_static_scene_with_a_single_image_sticker_renders_the_sky_once(monkeypatch):
    video = _run(_port_state(length=100), sticker=_reds(1))[2]
    calls = _count_sky_renders(monkeypatch)

    image = video.get_components().images

    assert len(calls) == 1
    assert image.shape[0] == 100


def test_video_sticker_renders_the_sky_only_when_its_source_frame_changes(tmp_path, monkeypatch):
    background = _cfr(tmp_path, count=10)
    sticker = _write_red_video(tmp_path / "slow.mkv", [0, 100, 200, 300], 10)
    video = _run(bg_media=background, sticker=sticker)[2]
    calls = _count_sky_renders(monkeypatch)

    video.get_components()

    assert len(calls) == 4


def test_video_sticker_renders_the_sky_once_before_and_after_its_clip_range(tmp_path, monkeypatch):
    sticker = InputImpl.VideoFromComponents(Types.VideoComponents(images=_reds(3), frame_rate=Fraction(24)))
    video = _run(_port_state({"start": 4, "duration": 3}, length=10), sticker=sticker)[2]
    calls = _count_sky_renders(monkeypatch)

    image = video.get_components().images

    assert _batch_index_at_center(image) == [None] * 4 + [0, 1, 2] + [None] * 3
    # Before the clip, inside it (three frames), and after it.
    assert len(calls) == 5


def test_ntsc_sticker_video_with_millisecond_pts_shows_every_frame_once(tmp_path):
    sticker = _write_red_video(tmp_path / "ntsc.mkv", _ntsc_pts(12), Fraction(30000, 1001))

    video = _run(sticker=sticker)[2]
    components = video.get_components()
    image, fps = components.images, float(components.frame_rate)

    assert fps == pytest.approx(30000 / 1001)
    assert _video_index_at_center(image) == list(range(12))


def test_image_batch_sticker_maps_one_to_one_to_a_background_video_with_millisecond_pts(tmp_path):
    background = _write_red_video(tmp_path / "ntsc.mkv", _ntsc_pts(9), Fraction(30000, 1001), red=False)

    image = _frames(_run(bg_media=background, sticker=_reds(9)))

    assert _batch_index_at_center(image) == list(range(9))


def test_variable_frame_rate_sticker_shows_each_frame_from_its_pts(tmp_path):
    sticker = _write_red_video(tmp_path / "vfr.mkv", [0, 40, 60, 120, 200], 25)

    image = _frames(_run(bg_media=_cfr(tmp_path, count=8), sticker=sticker))

    # Output times 0, 0.04, ..., 0.28 s; the last frame lasts 0.04 s.
    assert _video_index_at_center(image) == [0, 1, 2, 3, 3, 4, None, None]


def test_video_sticker_clip_can_end_before_its_media(tmp_path):
    sticker = _write_red_video(tmp_path / "red.mkv", [index * 40 for index in range(8)], 25)

    image = _frames(_run(_port_state({"start": 0, "duration": 3}, fps=25.0), bg_media=_cfr(tmp_path, count=6), sticker=sticker))

    assert _video_index_at_center(image) == [0, 1, 2, None, None, None]


def test_clip_in_skips_the_head_of_a_video_sticker(tmp_path):
    sticker = _write_red_video(tmp_path / "red.mkv", [index * 40 for index in range(8)], 25)

    image = _frames(_run(_port_state({"start": 1, "in": 2}, fps=25.0), bg_media=_cfr(tmp_path, count=8), sticker=sticker))

    assert _video_index_at_center(image) == [None, 2, 3, 4, 5, 6, 7, None]


def test_one_bytesio_video_on_both_inputs_decodes_like_the_file(tmp_path):
    # About 12 MB of noise, so that the two readers need many reads of the same buffer.
    path = tmp_path / "noise.mkv"
    generator = np.random.default_rng(0)
    with av.open(str(path), "w") as container:
        stream = container.add_stream("libx264", rate=24)
        stream.width, stream.height, stream.pix_fmt = 256, 128, "yuv444p"
        stream.options = {"qp": "0"}
        for index in range(120):
            frame = av.VideoFrame.from_ndarray(generator.integers(0, 256, (128, 256, 3), dtype=np.uint8), format="rgb24")
            frame.pts = index
            for packet in stream.encode(frame):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
    assert path.stat().st_size > 10_000_000
    from_file = InputImpl.VideoFromFile(str(path))
    shared = InputImpl.VideoFromFile(io.BytesIO(path.read_bytes()))

    expected = _frames(_run(bg_media=from_file, sticker=from_file))
    image = _frames(_run(bg_media=shared, sticker=shared))

    assert torch.equal(image, expected)


def test_streamed_video_rejects_reading_back():
    buffer = io.BytesIO()
    with av.open(buffer, "w", format="matroska") as container:
        stream = container.add_stream("libx264", rate=25)
        stream.width, stream.height, stream.pix_fmt = 16, 16, "yuv444p"
        for index in range(3):
            frame = av.VideoFrame.from_ndarray(np.full((16, 16, 3), index * 60, np.uint8), format="rgb24")
            frame.pts = index
            for packet in stream.encode(frame):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
    video = StreamedVideo(buffer, 0.0, 0.0, "sticker")
    video[2]

    with pytest.raises(ValueError, match="must be read in order"):
        video[1]


NTSC = 30000 / 1001


def test_ntsc_sticker_video_that_sets_the_grid_keeps_its_frames_after_a_clip_start(tmp_path):
    sticker = _write_red_video(tmp_path / "ntsc.mkv", _ntsc_pts(12), Fraction(30000, 1001))

    image = _frames(_run(_port_state({"start": 3}, fps=NTSC), sticker=sticker))

    assert _video_index_at_center(image) == [None] * 3 + list(range(12))


def test_clip_range_on_an_ntsc_background_with_millisecond_pts_starts_on_its_frame(tmp_path):
    background = _write_red_video(tmp_path / "ntsc.mkv", _ntsc_pts(10), Fraction(30000, 1001), red=False)

    image = _frames(_run(_port_state({"start": 3, "duration": 4}, fps=NTSC), bg_media=background, sticker=_reds(1)))

    assert _batch_index_at_center(image) == [None] * 3 + [0] * 4 + [None] * 3
