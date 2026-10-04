import gc
import json
import logging
import tracemalloc
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

from comfyui_pano_suite import nodes, scene_video, sticker_media
from comfyui_pano_suite.core.video_source import MaterializedVideo, StreamedVideo
from comfyui_pano_suite.sticker_media import open_video, stream_video
from comfyui_pano_suite.nodes import PanoramaStickersSceneNode


def _execute(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_preset", "auto")
    return PanoramaStickersSceneNode.execute(
        state_json="" if state is None else json.dumps(state),
        **inputs,
    ).result


def _frames(result):
    """Every output frame, as GetVideoComponents reads them from the `video` output."""
    return result[2].get_components().images


def _write_video(path, pts_ms, width=64, height=32, audio_rate=None):
    """Frame i is gray i * 20 / 255, at pts_ms[i] milliseconds. The audio is a ramp of int16 samples."""
    with av.open(str(path), "w") as container:
        stream = container.add_stream("libx264", rate=25)
        stream.width, stream.height, stream.pix_fmt = width, height, "yuv444p"
        stream.codec_context.time_base = Fraction(1, 1000)
        stream.options = {"qp": "0"}
        audio = container.add_stream("pcm_s16le", rate=audio_rate, layout="mono") if audio_rate else None
        for index, pts in enumerate(pts_ms):
            frame = av.VideoFrame.from_ndarray(np.full((height, width, 3), index * 20 % 256, np.uint8), format="rgb24")
            frame.pts, frame.time_base = pts, Fraction(1, 1000)
            for packet in stream.encode(frame):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
        if audio is not None:
            samples = np.arange(int(audio_rate * (pts_ms[-1] + 40) / 1000), dtype=np.int16).reshape(1, -1) % 1000
            frame = av.AudioFrame.from_ndarray(samples, format="s16", layout="mono")
            frame.sample_rate, frame.pts = audio_rate, 0
            for packet in [*audio.encode(frame), *audio.encode()]:
                container.mux(packet)
    return InputImpl.VideoFromFile(str(path))


def _cfr(tmp_path, count=10, **kwargs):
    return _write_video(tmp_path / f"cfr_{count}.mkv", [index * 40 for index in range(count)], **kwargs)


def _gray(image):
    return [round(float(value) * 255 / 20) for value in image[:, 0, 0, 0]]


def _record_evaluated_frames(monkeypatch):
    frames = []
    original = nodes.evaluate_scene_state

    def recording(state, frame):
        frames.append(frame)
        return original(state, frame)

    monkeypatch.setattr(nodes, "evaluate_scene_state", recording)
    return frames


def test_file_video_background_streams_the_same_frames_as_the_core_reader(tmp_path):
    video = _cfr(tmp_path)

    first, mask, output, _scene = _execute(bg_media=video)
    components = output.get_components()

    assert components.images.shape == (10, 32, 64, 3)
    assert torch.equal(components.images, video.get_components().images)
    assert _gray(components.images) == list(range(10))
    assert components.frame_rate == 25 and output.get_frame_rate() == 25 and output.get_frame_count() == 10
    assert components.audio is None
    assert torch.equal(first, components.images[:1]) and mask.shape == (1, 32, 64)


def test_unaligned_width_matches_the_core_reader(tmp_path):
    video = _write_video(tmp_path / "narrow.mkv", [0, 40, 80], width=48, height=24)

    image = _frames(_execute(bg_media=video))

    assert torch.equal(image, video.get_components().images)


def test_rotated_video_is_turned_upright_like_the_core_reader(tmp_path):
    path = tmp_path / "rotated.mov"
    with av.open(str(path), "w") as container:
        stream = container.add_stream("libx264", rate=25)
        stream.width, stream.height, stream.pix_fmt = 64, 32, "yuv444p"
        stream.options = {"qp": "0"}
        gradient = np.repeat(np.linspace(0, 255, 64, dtype=np.uint8)[None, :, None], 32, axis=0).repeat(3, axis=2)
        for packet in [*stream.encode(av.VideoFrame.from_ndarray(gradient, format="rgb24")), *stream.encode()]:
            container.mux(packet)
    # A 90 degree display matrix in the track header, as the core tests write it.
    data = bytearray(path.read_bytes())
    offset = data.index(b"tkhd", data.rindex(b"moov")) + 4 + 40
    values = [0, 1 << 16, 0, -(1 << 16), 0, 0, 0, 0, 1 << 30]
    data[offset:offset + 36] = b"".join(value.to_bytes(4, "big", signed=True) for value in values)
    path.write_bytes(bytes(data))
    video = InputImpl.VideoFromFile(str(path))
    expected = video.get_components().images
    assert expected.shape[1:3] == (64, 32)

    streamed = open_video(video, "bg_media")

    assert isinstance(streamed, StreamedVideo)
    assert torch.equal(streamed[0], expected[0])


def test_trimmed_video_outputs_only_the_trimmed_range(tmp_path):
    trimmed = _cfr(tmp_path).as_trimmed(0.12, 0.2)

    output = _execute(bg_media=trimmed)[2]
    image = output.get_components().images

    assert _gray(image) == [3, 4, 5, 6, 7]
    assert torch.equal(image, trimmed.get_components().images)
    assert output.get_frame_rate() == 25


def test_negative_start_trims_from_the_end_like_the_core_reader(tmp_path):
    tail = InputImpl.VideoFromFile(str(_cfr(tmp_path).get_stream_source()), start_time=-0.2)

    image = _frames(_execute(bg_media=tail))

    assert _gray(image) == [5, 6, 7, 8, 9]
    assert torch.equal(image, tail.get_components().images)


def test_trimmed_frames_are_evaluated_from_the_start_of_the_trim(tmp_path, monkeypatch):
    frames = _record_evaluated_frames(monkeypatch)

    _frames(_execute({"version": 2, "timeline": {"fps": 25.0}}, bg_media=_cfr(tmp_path).as_trimmed(0.12, 0.2)))

    assert frames[1:] == pytest.approx([0.0, 1.0, 2.0, 3.0, 4.0])


def test_variable_frame_rate_frames_are_evaluated_at_their_pts(tmp_path, monkeypatch):
    video = _write_video(tmp_path / "vfr.mkv", [0, 40, 60, 120, 200, 240])
    frames = _record_evaluated_frames(monkeypatch)

    output = _execute({"version": 2, "timeline": {"fps": 25.0}}, bg_media=video)[2]
    components = output.get_components()

    assert frames[1:] == pytest.approx([0.0, 1.0, 1.5, 3.0, 5.0, 6.0])
    assert _gray(components.images) == list(range(6))
    # The frame rate is the stream's average rate, as the core reports it.
    assert components.frame_rate == video.get_frame_rate() == output.get_frame_rate()


def test_recorded_fps_keeps_seconds_when_the_background_fps_differs(tmp_path, monkeypatch):
    frames = _record_evaluated_frames(monkeypatch)
    # Recorded at 50 fps: 10 Timeline frames are 0.2 s, which is 5 frames of the 25 fps background.
    output = _execute({"version": 2, "timeline": {"fps": 50.0, "length": 10}}, bg_media=_cfr(tmp_path))[2]
    output.get_components()

    assert output.get_frame_rate() == 25
    assert output.get_frame_count() == 5
    assert frames[1:] == pytest.approx([0.0, 2.0, 4.0, 6.0, 8.0])


def test_length_override_past_the_background_video_draws_bg_color(tmp_path, monkeypatch):
    frames = _record_evaluated_frames(monkeypatch)

    image = _frames(_execute({"version": 2, "timeline": {"fps": 25.0, "length": 12}}, bg_media=_cfr(tmp_path), bg_color="#ff0000"))

    assert image.shape[0] == 12
    assert _gray(image[:10]) == list(range(10))
    assert torch.equal(image[10:], torch.tensor([1.0, 0.0, 0.0]).expand(2, 32, 64, 3))
    assert frames[1:] == pytest.approx([float(index) for index in range(12)])


def test_audio_is_the_background_audio_cut_to_the_output_length(tmp_path):
    video = _cfr(tmp_path, audio_rate=8000)
    core_audio = video.get_components().audio

    full = _execute(bg_media=video)[2].get_components().audio
    short = _execute({"version": 2, "timeline": {"fps": 25.0, "length": 5}}, bg_media=video)[2].get_components().audio

    assert full["sample_rate"] == 8000 and full["waveform"].shape == (1, 1, 3200)
    assert torch.equal(full["waveform"], core_audio["waveform"][..., :3200])
    assert short["waveform"].shape == (1, 1, 1600)
    assert torch.equal(short["waveform"], full["waveform"][..., :1600])


def test_audio_of_a_trimmed_video_starts_at_the_trim(tmp_path):
    trimmed = _cfr(tmp_path, audio_rate=8000).as_trimmed(0.12, 0.2)

    audio = _execute(bg_media=trimmed)[2].get_components().audio

    assert torch.equal(audio["waveform"], trimmed.get_components().audio["waveform"])
    assert audio["waveform"].shape == (1, 1, 1600)


def test_trimmed_aac_audio_matches_the_core_reader(tmp_path):
    path = tmp_path / "aac.mp4"
    rng = np.random.default_rng(0)
    with av.open(str(path), "w") as container:
        stream = container.add_stream("libx264", rate=25)
        stream.width, stream.height, stream.pix_fmt = 64, 32, "yuv420p"
        audio = container.add_stream("aac", rate=44100, layout="mono")
        for index in range(25):
            frame = av.VideoFrame.from_ndarray(np.full((32, 64, 3), index * 10, np.uint8), format="rgb24")
            for packet in stream.encode(frame):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
        for offset in range(0, 44100, 1024):
            frame = av.AudioFrame.from_ndarray(rng.random((1, 1024), dtype=np.float32) - 0.5, format="fltp", layout="mono")
            frame.sample_rate, frame.pts = 44100, offset
            for packet in audio.encode(frame):
                container.mux(packet)
        for packet in audio.encode():
            container.mux(packet)
    trimmed = InputImpl.VideoFromFile(str(path)).as_trimmed(0.3, 0.4)

    audio = _execute(bg_media=trimmed)[2].get_components().audio

    assert torch.equal(audio["waveform"], trimmed.get_components().audio["waveform"])


def _write_gop_video(path, container_format, codec, options=None, count=30):
    with av.open(str(path), "w", format=container_format) as container:
        stream = container.add_stream(codec, rate=25)
        stream.width, stream.height, stream.pix_fmt = 64, 32, "yuv420p"
        stream.options = options or {}
        for index in range(count):
            frame = av.VideoFrame.from_ndarray(np.full((32, 64, 3), index * 8, np.uint8), format="rgb24")
            for packet in stream.encode(frame):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
    return str(path)


def test_frames_missing_after_a_seek_keep_the_times_of_the_others(tmp_path, caplog):
    # After the seek, the B-frames before the first decodable keyframe cannot be decoded.
    path = _write_gop_video(tmp_path / "bframes.avi", "avi", "mpeg4", {"bf": "2"})
    video = InputImpl.VideoFromFile(path, start_time=0.4)
    decoded = video.get_components().images
    listed = len(open_video(video, "bg_media").times)
    assert listed > decoded.shape[0]

    output = _execute(bg_media=video, bg_color="#ff0000")[2]
    caplog.clear()

    with caplog.at_level(logging.WARNING):
        image = output.get_components().images

    red = torch.all(image == torch.tensor([1.0, 0.0, 0.0]), dim=-1).all(dim=-1).all(dim=-1)
    assert image.shape[0] == listed
    assert int(red.sum()) == listed - decoded.shape[0]
    assert torch.equal(image[~red], decoded)
    assert sum("could not be decoded" in record.getMessage() for record in caplog.records) == listed - decoded.shape[0]


def test_video_whose_trim_decodes_no_frame_is_an_error(tmp_path):
    # MPEG-TS starts its stream at a non-zero time, and this trim decodes no frame.
    path = _write_gop_video(tmp_path / "offset.ts", "mpegts", "libx264")
    video = InputImpl.VideoFromFile(path, start_time=0.5, duration=0.4)

    with pytest.raises(ValueError, match="no frame of the bg_media VIDEO could be decoded"):
        _execute(bg_media=video)


def _components_video(count=3, audio=None):
    images = torch.stack([torch.full((4, 8, 3), index * 0.25) for index in range(count)])
    return InputImpl.VideoFromComponents(Types.VideoComponents(images=images, audio=audio, frame_rate=Fraction(30)))


def test_non_file_video_is_read_through_the_core(monkeypatch):
    waveform = torch.arange(16000, dtype=torch.float32).reshape(1, 1, -1)
    frames = _record_evaluated_frames(monkeypatch)

    components = _execute({"version": 2, "timeline": {"fps": 30.0}}, bg_media=_components_video(audio={"waveform": waveform, "sample_rate": 8000}))[2].get_components()
    image, audio = components.images, components.audio

    assert image.shape == (3, 4, 8, 3)
    assert torch.allclose(image[:, 0, 0, 0], torch.tensor([0.0, 0.25, 0.5]))
    assert components.frame_rate == 30
    assert frames[1:] == pytest.approx([0.0, 1.0, 2.0])
    # 3 frames at 30 fps are 0.1 s.
    assert torch.equal(audio["waveform"], waveform[..., :800]) and audio["sample_rate"] == 8000


def test_cropped_file_video_is_read_through_the_core(tmp_path):
    video = _cfr(tmp_path)
    cropped = video.as_cropped(0, 0, 32, 16)

    image = _frames(_execute(bg_media=cropped))

    assert isinstance(open_video(video, "bg_media"), StreamedVideo)
    assert isinstance(open_video(cropped, "bg_media"), MaterializedVideo)
    assert image.shape == (10, 16, 32, 3)
    assert torch.equal(image, cropped.get_components().images)


def _tensor_count() -> int:
    return sum(type(value) is torch.Tensor for value in gc.get_objects())


def _peak_while_streaming(video) -> int:
    # The frames are numpy arrays shared with torch without a copy, so their memory shows in tracemalloc.
    tracemalloc.start()
    streamed = stream_video(video.get_stream_source(), *video.get_active_trim_window(), "bg_media")
    for index in range(len(streamed.times)):
        assert streamed[index] is not None
    del streamed
    _current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    return peak


def _most_tensors_while_streaming(video) -> int:
    baseline = _tensor_count()
    streamed = stream_video(video.get_stream_source(), *video.get_active_trim_window(), "bg_media")
    most = 0
    for index in range(len(streamed.times)):
        assert streamed[index] is not None
        most = max(most, _tensor_count() - baseline)
    return most


def test_streaming_peak_memory_does_not_grow_with_the_video_length(tmp_path):
    short = _cfr(tmp_path, count=8, width=256, height=128)
    long = _cfr(tmp_path, count=64, width=256, height=128)
    frame_bytes = 256 * 128 * 3 * 4

    short_peak = _peak_while_streaming(short)
    long_peak = _peak_while_streaming(long)

    # Eight times the frames would add at least 56 frames if they were all kept.
    assert long_peak < short_peak + 4 * frame_bytes
    assert long_peak < 8 * frame_bytes
    # The first frame (kept for the output size), the current one, and the one decoded ahead.
    assert _most_tensors_while_streaming(long) <= 3



def _record_progress(monkeypatch, fail_at=None):
    """The updates of each progress bar in the order the bars were made."""
    bars = []

    class ProgressBar:
        def __init__(self, total, node_id=None):
            self.total = total
            self.updates = []
            bars.append(self.updates)

        def update(self, value):
            # The core hook raises here when the queue is interrupted.
            if len(self.updates) == fail_at:
                raise RuntimeError("interrupted")
            self.updates.append((value, self.total))

    monkeypatch.setattr(scene_video.comfy.utils, "ProgressBar", ProgressBar)
    return bars


def _record_pins(monkeypatch, staged_render_bytes=0):
    pins = []
    monkeypatch.setattr(scene_video, "STAGED_RENDER_BYTES", staged_render_bytes)
    monkeypatch.setattr(scene_video.comfy.model_management, "is_device_cpu", lambda device: False)
    monkeypatch.setattr(scene_video.comfy.model_management, "pin_memory", lambda tensor, evict_active=True: pins.append(("pin", tensor.data_ptr())) or True)
    monkeypatch.setattr(scene_video.comfy.model_management, "unpin_memory", lambda tensor: pins.append(("unpin", tensor.data_ptr())) or True)
    return pins


def test_progress_advances_once_per_output_frame(tmp_path, monkeypatch):
    bars = _record_progress(monkeypatch)
    pins = _record_pins(monkeypatch)
    video = _cfr(tmp_path)
    output = _execute(bg_media=video)[2]
    bars.clear()

    image = output.get_components().images

    assert bars == [[(1, 10)] * 10]
    assert torch.equal(image, video.get_components().images)
    assert [kind for kind, _ptr in pins] == ["pin", "unpin"] and pins[0][1] == pins[1][1]


def test_interrupted_render_releases_the_pinned_buffer(tmp_path, monkeypatch):
    pins = _record_pins(monkeypatch)
    output = _execute(bg_media=_cfr(tmp_path))[2]
    _record_progress(monkeypatch, fail_at=3)

    with pytest.raises(RuntimeError, match="interrupted"):
        output.get_components()

    assert [kind for kind, _ptr in pins] == ["pin", "unpin"]


def test_pinning_is_decided_by_the_whole_render(tmp_path, monkeypatch):
    video = _cfr(tmp_path)
    frames, height, width = video.get_components().images.shape[:3]
    render_bytes = frames * height * width * 12

    # Each frame is far below the size, the video as a whole reaches it.
    pins = _record_pins(monkeypatch, staged_render_bytes=render_bytes)
    image = _frames(_execute(bg_media=video))
    assert [kind for kind, _ptr in pins] == ["pin", "unpin"]
    assert torch.equal(image, video.get_components().images)

    pins = _record_pins(monkeypatch, staged_render_bytes=render_bytes + 1)
    image = _frames(_execute(bg_media=video))
    assert pins == []
    assert torch.equal(image, video.get_components().images)


def test_a_buffer_that_cannot_be_pinned_is_not_used(tmp_path, monkeypatch):
    _record_pins(monkeypatch)
    buffers = []

    def refuse(tensor, evict_active=True):
        buffers.append(tensor.fill_(float("nan")))
        return False

    monkeypatch.setattr(scene_video.comfy.model_management, "pin_memory", refuse)
    video = _cfr(tmp_path)

    image = _frames(_execute(bg_media=video))

    # Rows are copied straight from the device, not through the pageable buffer as well.
    assert len(buffers) == 1 and bool(buffers[0].isnan().all())
    assert torch.equal(image, video.get_components().images)


def _clip_sticker(sticker_id, clip):
    source = {"kind": "file", "filename": "missing.png", "subfolder": "panorama_stickers", "storage": "input"}
    return {"id": sticker_id, "source": source, "clip": clip}


def _camera_keyframes(*frames, lane="rotation"):
    return {lane: {"keyframes": [{"frame": frame, "value": None} for frame in frames]}}


def _length(state, **inputs):
    return _execute({"version": 2, **state}, output_preset="1024", **inputs)[2].get_frame_count()


def test_length_comes_from_the_latest_clip_range_end():
    state = {
        "stickers": [_clip_sticker("a", {"start": 2, "duration": 5}), _clip_sticker("b", {"start": 0})],
        "scene": {"clip": {"start": 1, "duration": 3}},
        "camera": _camera_keyframes(0, 20),
    }

    assert _length(state) == 7


def test_camera_keyframes_do_not_set_the_length():
    # Stickers has no Camera (ADR 0028); Cutout counts the Keyframes of its own (test_cutout_scene_node.py).
    assert _length({"camera": _camera_keyframes(0, 9)}) == 1
    assert _length({"camera": {**_camera_keyframes(0, 4), **_camera_keyframes(6, lane="fov"), **_camera_keyframes(2, 3, lane="position")}}) == 1


def test_background_batch_comes_before_clip_ends():
    bg = torch.zeros((3, 4, 8, 3))

    assert _length({"stickers": [_clip_sticker("a", {"start": 0, "duration": 9})]}, bg_media=bg) == 3


def test_background_video_comes_before_clip_ends_and_the_override_before_the_video(tmp_path):
    clip = {"stickers": [_clip_sticker("a", {"start": 0, "duration": 30})], "timeline": {"fps": 25.0}}

    assert _length(clip, bg_media=_cfr(tmp_path)) == 10
    assert _length({**clip, "timeline": {"fps": 25.0, "length": 4}}, bg_media=_cfr(tmp_path)) == 4


def test_override_comes_before_the_background_batch():
    assert _length({"timeline": {"length": 2}}, bg_media=torch.zeros((5, 4, 8, 3))) == 2


def test_hold_cut_is_not_late_on_a_video_frame_just_before_the_keyframe(tmp_path, monkeypatch):
    # At 24.9999975 fps the 40 ms frames fall just short of whole Timeline frames: frame 3 is evaluated at 2.9999997.
    state = {
        "version": 2,
        "timeline": {"fps": 24.9999975},
        "stickers": [{"id": "p", "source": {"kind": "port"}, "direction": {"keyframes": [
            {"frame": 0, "value": {"yaw_deg": 0.0, "pitch_deg": 0.0}, "easing": "hold"},
            {"frame": 3, "value": {"yaw_deg": 180.0, "pitch_deg": 0.0}, "easing": "auto"},
        ]}}],
    }
    frames = _record_evaluated_frames(monkeypatch)
    red = torch.tensor([1.0, 0.0, 0.0]).expand(1, 4, 4, 3).clone()

    image = _frames(_execute(state, bg_media=_cfr(tmp_path, count=5), sticker=red))

    # The 1 ms PTS of frame 3 is snapped to Timeline frame 3 (#56); without the snap it stays just short of it.
    assert 3.0 - 1e-6 < frames[1:][3] <= 3.0
    center = image[:, image.shape[1] // 2, image.shape[2] // 2]
    is_red = [bool(torch.allclose(pixel, torch.tensor([1.0, 0.0, 0.0]), atol=1e-3)) for pixel in center]
    assert is_red == [True, True, True, False, False]


def test_each_video_file_is_scanned_once_per_trim_window(tmp_path, monkeypatch):
    scans = []
    original = sticker_media.scan_video
    monkeypatch.setattr(sticker_media, "scan_video", lambda *args, **kwargs: scans.append(args[:3]) or original(*args, **kwargs))
    bg = _cfr(tmp_path, count=6)
    sticker = _write_video(tmp_path / "sticker.mkv", [index * 40 for index in range(4)])

    result = _execute(bg_media=bg, sticker=sticker)
    result[2].get_components()
    _execute(bg_media=bg, sticker=sticker)
    _execute(bg_media=bg.as_trimmed(0.04, 0.12))

    assert sorted(scans) == sorted([(bg.get_stream_source(), 0.0, 0.0), (sticker.get_stream_source(), 0.0, 0.0), (bg.get_stream_source(), 0.04, 0.12)])
    first, second = open_video(bg, "bg_media"), open_video(bg, "sticker")
    assert first.index is second.index and first is not second
