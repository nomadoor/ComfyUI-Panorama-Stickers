from __future__ import annotations

import uuid
import logging
from fractions import Fraction
from pathlib import Path

import numpy as np
from PIL import Image

try:
    import av
    from av.video.reformatter import ColorPrimaries, ColorRange, ColorTrc
except Exception:  # pragma: no cover - optional at import time
    av = None

from .temp_files import TEMP_FILES, ensure_temp_root, entry_from_path, temp_file_path
from .video_source import StreamedVideo

_log = logging.getLogger(__name__)


def _normalize_frames(frames) -> np.ndarray:
    arr = np.asarray(frames)
    if arr.ndim == 3:
        arr = arr[None, ...]
    if arr.ndim != 4:
        raise ValueError(f"Expected IMAGE batch shaped [B,H,W,C], got {arr.shape}")
    if arr.dtype == np.uint8:
        # Already [0, 255] uint8 — skip float conversion, just fix channels
        if arr.shape[-1] < 3:
            arr = np.repeat(arr[..., :1], 3, axis=-1)
        elif arr.shape[-1] > 3:
            arr = arr[..., :3]
        return arr  # uint8, encode loop handles it
    arr = arr.astype(np.float32, copy=False)
    arr = np.clip(arr, 0.0, 1.0)
    if arr.shape[-1] < 3:
        arr = np.repeat(arr[..., :1], 3, axis=-1)
    elif arr.shape[-1] > 3:
        arr = arr[..., :3]
    return arr


def _pad_to_even_dimensions(frames):
    height = int(frames.shape[-3])
    width = int(frames.shape[-2])
    padded_height = height + (height % 2)
    padded_width = width + (width % 2)
    if padded_height == height and padded_width == width:
        return frames, height, width

    pad_h = padded_height - height
    pad_w = padded_width - width

    try:
        import torch as _torch
        if isinstance(frames, _torch.Tensor):
            return _torch.nn.functional.pad(frames, (0, 0, 0, pad_w, 0, pad_h)), padded_height, padded_width
    except Exception:
        pass

    padded = np.pad(
        np.asarray(frames),
        ((0, 0), (0, pad_h), (0, pad_w), (0, 0)),
        mode="edge",
    )
    return padded, padded_height, padded_width


def _audio_has_waveform(audio) -> bool:
    if audio is None or not hasattr(audio, "get"):
        return False
    try:
        return audio.get("waveform") is not None and int(audio.get("sample_rate") or 0) > 0
    except Exception:
        return False


def _audio_get(audio, key, default=None):
    if audio is None or not hasattr(audio, "get"):
        return default
    try:
        return audio.get(key)
    except TypeError:
        try:
            return audio.get(key, default)
        except Exception:
            return default
    except Exception:
        return default


def _extract_audio_tensor(audio):
    # ComfyUI V3 audio inputs can arrive as LazyAudioMap instead of a plain dict.
    if not _audio_has_waveform(audio):
        return None, 0
    waveform = _audio_get(audio, "waveform")
    sample_rate = int(_audio_get(audio, "sample_rate") or 0)
    if waveform is None or sample_rate <= 0:
        return None, 0
    try:
        import torch
    except Exception:
        return None, 0
    if isinstance(waveform, np.ndarray):
        waveform = torch.from_numpy(waveform)
    if hasattr(waveform, "detach"):
        waveform = waveform.detach()
    if hasattr(waveform, "cpu"):
        waveform = waveform.cpu()
    waveform = waveform.float().contiguous()
    if waveform.ndim == 1:
        waveform = waveform[None, :]
    elif waveform.ndim == 3 and int(waveform.shape[0]) > 0:
        waveform = waveform[0]
    elif waveform.ndim != 2:
        return None, 0
    if waveform.numel() <= 0:
        return None, 0
    return waveform, sample_rate


def _trim_or_pad_audio(waveform, target_samples: int):
    target = max(0, int(target_samples))
    if waveform is None:
        return None
    current = int(waveform.shape[-1])
    if current == target:
        return waveform.contiguous()
    if current > target:
        return waveform[..., :target].contiguous()
    if target <= 0:
        return waveform[..., :0].contiguous()
    try:
        import torch
    except Exception:
        return waveform.contiguous()
    pad = torch.zeros((int(waveform.shape[0]), target - current), dtype=waveform.dtype, device=waveform.device)
    return torch.cat([waveform, pad], dim=-1).contiguous()


def _target_audio_sample_count(frame_count: int, frame_rate, sample_rate: int) -> int:
    return max(0, int(round((float(frame_count) / float(frame_rate)) * sample_rate)))


def _fit_audio_to_frame_count(audio, frame_count: int, frame_rate) -> tuple[np.ndarray | None, int]:
    """The audio cut, or padded with silence, to the length of `frame_count` frames at `frame_rate`. It is not
    stretched, so it keeps its speed and pitch and stays in sync with the frames from the start."""
    waveform, sample_rate = _extract_audio_tensor(audio)
    if waveform is None or sample_rate <= 0:
        return None, 0
    target_samples = _target_audio_sample_count(frame_count, frame_rate, sample_rate)
    fitted = _trim_or_pad_audio(waveform, target_samples)
    return np.ascontiguousarray(fitted.cpu().numpy(), dtype=np.float32), sample_rate


def _prepare_audio_layout(waveform_np: np.ndarray, sample_rate: int) -> tuple[np.ndarray | None, int, str]:
    if waveform_np is None or sample_rate <= 0:
        return None, 0, "mono"
    waveform_np = np.ascontiguousarray(waveform_np, dtype=np.float32)
    if waveform_np.ndim != 2 or waveform_np.shape[0] <= 0:
        return None, 0, "mono"

    channels = int(waveform_np.shape[0])
    explicit_layout = {
        1: "mono",
        2: "stereo",
        6: "5.1",
    }.get(channels)
    if explicit_layout:
        return waveform_np, sample_rate, explicit_layout

    if channels == 1:
        return waveform_np, sample_rate, "mono"

    # Unsupported channel counts are downmixed so frame data and advertised
    # layout stay consistent for AudioFrame.from_ndarray.
    left_indices = np.arange(0, channels, 2)
    right_indices = np.arange(1, channels, 2)
    left = waveform_np[left_indices].mean(axis=0, dtype=np.float32) if left_indices.size else waveform_np.mean(axis=0, dtype=np.float32)
    right = waveform_np[right_indices].mean(axis=0, dtype=np.float32) if right_indices.size else left
    downmixed = np.stack([left, right], axis=0).astype(np.float32, copy=False)
    return np.ascontiguousarray(downmixed), sample_rate, "stereo"


def _temp_mp4_path() -> Path:
    return temp_file_path(f"pano_video_{uuid.uuid4().hex[:12]}.mp4")


def save_video_to_mp4(video, container_format, codec) -> tuple[Path, bool]:
    """Save a core VIDEO to a temp MP4 with its own `save_to`, which copies the streams when they already fit and
    otherwise transcodes them frame by frame. Returns the path and whether the MP4 has audio."""
    output_path = _temp_mp4_path()
    with TEMP_FILES.writing(output_path):
        video.save_to(str(output_path), format=container_format, codec=codec)
    return output_path, mp4_has_audio(output_path)


# The editor seeks its MP4 by decoding from the keyframe before the frame, so the MP4 it plays has a keyframe at
# least every EDITOR_KEYINT frames, and its longer side is at most EDITOR_MAX_SIZE, enough to show it.
EDITOR_KEYINT = 12
EDITOR_MAX_SIZE = 2048

# AVCOL_SPC_BT709, the matrix of the core's sRGB video.
_BT709 = 1


def _set_srgb(target):
    target.color_primaries = ColorPrimaries.BT709
    target.color_trc = ColorTrc.IEC61966_2_1
    target.colorspace = _BT709
    target.color_range = ColorRange.MPEG


def editor_ready(path) -> bool:
    """Whether the core's stream copy of the file at `path` into an MP4 seeks fast in the editor: an MP4 of H.264
    4:2:0 with its longer side at most EDITOR_MAX_SIZE, with a keyframe at least every EDITOR_KEYINT frames. Only packets are read."""
    with av.open(str(path)) as container:
        stream = container.streams.video[0]
        codec = stream.codec_context
        if "mp4" not in container.format.name.split(",") or codec.name != "h264" or codec.pix_fmt != "yuv420p" or max(stream.width, stream.height) > EDITOR_MAX_SIZE:
            return False
        since_keyframe = 0
        for packet in container.demux(stream):
            # The demuxer ends with an empty packet.
            if packet.size:
                since_keyframe = 0 if packet.is_keyframe else since_keyframe + 1
                if since_keyframe >= EDITOR_KEYINT:
                    return False
        return True


def _editor_frames(video):
    """The frames of an opened VIDEO as PyAV frames, with their times in seconds. A file's frames go to the encoder
    as they decode, without the conversion to float RGB of reading them."""
    if isinstance(video, StreamedVideo):
        for time, frame in video.decoded_frames():
            if frame.rotation:
                # Upright, as `StreamedVideo` reads it.
                quadrant = int(round(frame.rotation // 90)) % 4
                frame = av.VideoFrame.from_ndarray(np.ascontiguousarray(np.rot90(frame.to_ndarray(format="rgb24"), k=quadrant)), format="rgb24")
            yield time, frame
        return
    for index, time in enumerate(video.times):
        image = video[index]
        # An IMAGE batch can be gray or have alpha; it shows as opaque RGB, as `render_frame` draws it.
        image = image[..., :1].expand(-1, -1, 3) if image.shape[-1] < 3 else image[..., :3]
        yield time, av.VideoFrame.from_ndarray((image * 255).clamp(0, 255).byte().cpu().numpy(), format="rgb24")


def encode_editor_mp4(video, progress=None) -> tuple[Path, bool]:
    """Encode a VIDEO opened for reading (`StreamedVideo`, `MaterializedVideo`) one frame at a time into a temp MP4
    for the editor: H.264 with a keyframe every EDITOR_KEYINT frames and no B-frames, its longer side at most
    EDITOR_MAX_SIZE, each frame at its time, and the audio as AAC. Returns the path and whether the MP4 has audio.
    `progress(done, total)` is called after each frame and may raise to stop; the partial MP4 is then removed."""
    height, width = video.first_frame.shape[:2]
    scale = min(1, EDITOR_MAX_SIZE / max(width, height))
    width, height = max(2, round(width * scale / 2) * 2), max(2, round(height * scale / 2) * 2)
    time_base = video.time_base or 1 / video.frame_rate
    audio = video.audio(float(video.times[-1] + 1 / video.frame_rate))
    output_path = _temp_mp4_path()
    with TEMP_FILES.writing(output_path), av.open(str(output_path), mode="w", options={"movflags": "faststart"}) as output:
        stream = output.add_stream("h264", rate=video.frame_rate)
        stream.width, stream.height, stream.pix_fmt = width, height, "yuv420p"
        # fastdecode halves the decode time for about 10% more size.
        stream.options = {"preset": "veryfast", "crf": "23", "tune": "fastdecode"}
        stream.codec_context.gop_size = EDITOR_KEYINT
        stream.codec_context.max_b_frames = 0
        # PyAV asks for slice threads by default, about three times slower than frame threads here.
        stream.codec_context.thread_type = "AUTO"
        stream.codec_context.time_base = time_base
        audio_stream = None
        if audio is not None:
            waveform = audio["waveform"][0].float().cpu().contiguous().numpy()
            sample_rate = int(audio["sample_rate"])
            layout = {1: "mono", 2: "stereo", 6: "5.1"}.get(waveform.shape[0], "stereo")
            audio_stream = output.add_stream("aac", rate=sample_rate, layout=layout)
        codec = stream.codec_context
        done = 0
        for time, frame in _editor_frames(video):
            # Any RGB or paletted frame (its alpha dropped) is converted with the BT.709 matrix.
            if frame.format.is_rgb or frame.format.has_palette:
                if not codec.is_open:
                    _set_srgb(codec)
                if frame.format.has_palette:
                    # swscale turns a palette into YUV with BT.601 whatever dst_colorspace says.
                    frame = frame.reformat(format="rgb24")
                frame = frame.reformat(width=width, height=height, format="yuv420p", dst_colorspace=_BT709, dst_color_range=ColorRange.MPEG, interpolation="AREA")
            else:
                # A file's YUV keeps its matrix and is only scaled, and brought to TV range, so it keeps its colors.
                if not codec.is_open:
                    codec.colorspace, codec.color_primaries, codec.color_trc = frame.colorspace, frame.color_primaries, frame.color_trc
                    codec.color_range = ColorRange.MPEG
                frame = frame.reformat(
                    width=width, height=height, format="yuv420p", src_color_range=frame.color_range, dst_color_range=ColorRange.MPEG, interpolation="AREA"
                )
            frame.pts = round(time / time_base)
            frame.time_base = time_base
            output.mux(stream.encode(frame))
            done += 1
            if progress is not None:
                progress(done, len(video.times))
        output.mux(stream.encode(None))
        if audio_stream is not None:
            frame = av.AudioFrame.from_ndarray(waveform, format="fltp", layout=layout)
            frame.sample_rate = sample_rate
            frame.pts = 0
            output.mux(audio_stream.encode(frame))
            output.mux(audio_stream.encode(None))
    return output_path, audio is not None


def mp4_has_audio(path) -> bool:
    with av.open(str(path)) as container:
        return bool(container.streams.audio)


def encode_frames_to_mp4(frames, fps: float, audio=None, progress_callback=None) -> Path:
    if av is None:
        raise RuntimeError("PyAV is not available in this environment.")

    fps_value = max(1e-3, float(fps or 24.0))
    output_path = _temp_mp4_path()
    frame_rate = Fraction(round(fps_value * 1000), 1000)

    # Streaming mode: torch tensor → process one frame at a time (no full-batch numpy allocation)
    # Batch mode: numpy array → existing fast path (uint8 fast path preserved)
    try:
        import torch as _torch
        _streaming = isinstance(frames, _torch.Tensor)
    except ImportError:
        _streaming = False

    if _streaming:
        if frames.ndim == 3:
            frames = frames.unsqueeze(0)
        frames, height, width = _pad_to_even_dimensions(frames)
        frame_count = int(frames.shape[0])
        batch = None
    else:
        batch = _normalize_frames(frames)
        batch, height, width = _pad_to_even_dimensions(batch)
        frame_count, _height, _width, _channels = batch.shape

    waveform_np = None
    sample_rate = 0
    layout = "mono"
    if _audio_has_waveform(audio):
        waveform_np, sample_rate = _fit_audio_to_frame_count(audio, frame_count, frame_rate)
        waveform_np, sample_rate, layout = _prepare_audio_layout(waveform_np, sample_rate)

    _log.debug(
        "[video] Encoding preview mp4: frames=%d fps=%.3f size=%dx%d audio=%s",
        frame_count,
        fps_value,
        width,
        height,
        "yes" if waveform_np is not None and sample_rate > 0 else "no",
    )

    last_error = None
    for codec_name in ("h264_nvenc", "h264"):
        _log.debug("[video] Trying encoder: %s", codec_name)
        container = av.open(str(output_path), mode="w")
        try:
            video_stream = container.add_stream(codec_name, rate=frame_rate)
            video_stream.width = int(width)
            video_stream.height = int(height)
            video_stream.pix_fmt = "yuv420p"
            # Seekable in the editor like `encode_editor_mp4`.
            video_stream.codec_context.gop_size = EDITOR_KEYINT
            video_stream.codec_context.max_b_frames = 0
            video_stream.codec_context.thread_type = "AUTO"
            if codec_name == "h264_nvenc":
                video_stream.options = {"preset": "p4"}

            audio_stream = None
            if waveform_np is not None and sample_rate > 0:
                audio_stream = container.add_stream("aac", rate=sample_rate, layout=layout)

            if _streaming:
                for index in range(frame_count):
                    frame_tensor = frames[index].detach().cpu()
                    frame_is_u8 = str(getattr(frame_tensor, "dtype", "")) == "torch.uint8"
                    f = frame_tensor.numpy()
                    if f.shape[-1] < 3:
                        f = np.repeat(f[..., :1], 3, axis=-1)
                    elif f.shape[-1] > 3:
                        f = f[..., :3]
                    if frame_is_u8:
                        frame_u8 = np.clip(f, 0, 255).astype(np.uint8, copy=False)
                    else:
                        f = np.asarray(f, dtype=np.float32)
                        frame_u8 = np.clip(f * 255.0, 0.0, 255.0).astype(np.uint8)
                    video_frame = av.VideoFrame.from_ndarray(frame_u8, format="rgb24")
                    if codec_name == "h264_nvenc":
                        video_frame = video_frame.reformat(format="yuv420p")
                    for packet in video_stream.encode(video_frame):
                        container.mux(packet)
                    if progress_callback is not None:
                        try:
                            progress_callback(index + 1, frame_count)
                        except Exception:
                            pass
            else:
                _batch_is_u8 = batch.dtype == np.uint8
                for index, frame in enumerate(batch):
                    frame_u8 = frame if _batch_is_u8 else np.clip(frame * 255.0, 0.0, 255.0).astype(np.uint8)
                    video_frame = av.VideoFrame.from_ndarray(frame_u8, format="rgb24")
                    if codec_name == "h264_nvenc":
                        video_frame = video_frame.reformat(format="yuv420p")
                    for packet in video_stream.encode(video_frame):
                        container.mux(packet)
                    if progress_callback is not None:
                        try:
                            progress_callback(index + 1, frame_count)
                        except Exception:
                            pass
            for packet in video_stream.encode():
                container.mux(packet)

            if audio_stream is not None:
                audio_frame = av.AudioFrame.from_ndarray(waveform_np, format="fltp", layout=layout)
                audio_frame.sample_rate = sample_rate
                audio_frame.pts = 0
                for packet in audio_stream.encode(audio_frame):
                    container.mux(packet)
                for packet in audio_stream.encode(None):
                    container.mux(packet)

            container.close()
            _log.debug("[video] Encoded preview mp4 with %s -> %s", codec_name, output_path)
            TEMP_FILES.add(output_path)
            return output_path
        except Exception as ex:
            last_error = ex
            _log.debug("[video] Encoder %s failed, trying fallback: %s", codec_name, ex)
            try:
                container.close()
            except Exception:
                pass
            try:
                output_path.unlink(missing_ok=True)
            except Exception:
                pass
            continue
        except BaseException:
            # Cancelled from `progress_callback`: no partial MP4 is left.
            container.close()
            output_path.unlink(missing_ok=True)
            raise
    raise last_error if last_error is not None else RuntimeError("No usable video encoder found (tried h264_nvenc, h264)")


def save_editor_frames(images, progress=None) -> list[Path]:
    """Each image of an RGBA IMAGE batch as a PNG in temp, with its alpha, which an MP4 cannot hold, for the editor
    to show the image of the playhead. One image at a time, its longer side at most EDITOR_MAX_SIZE.
    `progress(done, total)` is called after each image and may raise to stop; the PNGs saved so far are then removed."""
    stem = f"pano_frames_{uuid.uuid4().hex[:12]}"
    root = ensure_temp_root()
    paths = []
    with TEMP_FILES.writing(paths):
        for index, image in enumerate(images):
            picture = Image.fromarray((image.clamp(0.0, 1.0) * 255 + 0.5).byte().cpu().numpy(), "RGBA")
            scale = min(1, EDITOR_MAX_SIZE / max(picture.size))
            if scale < 1:
                picture = picture.resize((max(1, round(picture.width * scale)), max(1, round(picture.height * scale))), Image.BILINEAR)
            path = root / f"{stem}_{index:05d}.png"
            paths.append(path)
            picture.save(path, compress_level=1)
            if progress is not None:
                progress(index + 1, len(images))
    return paths


def make_frames_ui_payload(paths: list[Path], fps: float, *, frames_key: str, meta_key: str) -> dict:
    """The `ui` of the PNGs `save_editor_frames` saved, with the meta of an MP4 of them at `fps`."""
    return {
        frames_key: [entry_from_path(path, media_type="image/png") for path in paths],
        meta_key: [{"fps": float(fps), "frames": len(paths), "duration": len(paths) / float(fps), "has_audio": False}],
    }


def make_video_ui_payload(
    mp4_path: Path,
    fps: float,
    frame_count: int,
    *,
    include_comfy_preview: bool = False,
    video_key: str = "pano_videos",
    meta_key: str = "pano_video_meta",
    video_entry: dict | None = None,
) -> dict:
    """The `ui` of an MP4: its entry (`video_entry`, else that of the temp file `mp4_path`) and its meta."""
    video_entry = video_entry or entry_from_path(Path(mp4_path), media_type="video/mp4")
    payload = {
        video_key: [video_entry],
        meta_key: [{
            "fps": float(fps or 24.0),
            "frames": int(frame_count),
            "duration": float(frame_count) / max(1e-6, float(fps or 24.0)),
            "has_audio": False,
        }],
    }
    if include_comfy_preview:
        payload["images"] = [video_entry]
        payload["animated"] = (True,)
    return payload
