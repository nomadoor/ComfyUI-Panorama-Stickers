from __future__ import annotations

import math
import tempfile
import uuid
import logging
from fractions import Fraction
from pathlib import Path

import numpy as np

try:
    import av
except Exception:  # pragma: no cover - optional at import time
    av = None

try:
    import folder_paths
except Exception:  # pragma: no cover - optional in tests
    folder_paths = None

_log = logging.getLogger(__name__)


def _resolve_temp_root() -> Path:
    if folder_paths is not None:
        try:
            return Path(folder_paths.get_temp_directory())
        except Exception:
            pass
    return Path(tempfile.gettempdir()) / "comfyui_panorama_stickers"


def _ensure_temp_root() -> Path:
    root = _resolve_temp_root()
    root.mkdir(parents=True, exist_ok=True)
    return root


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


def _stretch_audio_to_frame_count(audio, frame_count: int, frame_rate) -> tuple[np.ndarray | None, int]:
    waveform, sample_rate = _extract_audio_tensor(audio)
    if waveform is None or sample_rate <= 0:
        return None, 0
    target_samples = _target_audio_sample_count(frame_count, frame_rate, sample_rate)
    if target_samples <= 0:
        return np.zeros((int(waveform.shape[0]), 0), dtype=np.float32), sample_rate

    source_samples = int(waveform.shape[-1])
    tolerance = max(1, int(round(sample_rate * 0.002)))
    if abs(source_samples - target_samples) <= tolerance:
        fitted = _trim_or_pad_audio(waveform, target_samples)
        return np.ascontiguousarray(fitted.cpu().numpy(), dtype=np.float32), sample_rate

    try:
        import torch
        import torchaudio.functional as AF

        # Keep preview pitch stable while fitting audio to the preview duration.
        n_fft = 2048
        win_length = 2048
        hop_length = 512
        rate = max(1e-6, float(source_samples) / float(target_samples))
        window = torch.hann_window(win_length, dtype=waveform.dtype, device=waveform.device)
        spec = torch.stft(
            waveform,
            n_fft=n_fft,
            hop_length=hop_length,
            win_length=win_length,
            window=window,
            center=True,
            return_complex=True,
        )
        phase_advance = torch.linspace(
            0,
            math.pi * hop_length,
            spec.size(-2),
            dtype=waveform.dtype,
            device=waveform.device,
        )[..., None]
        stretched_spec = AF.phase_vocoder(spec, rate=rate, phase_advance=phase_advance)
        stretched = torch.istft(
            stretched_spec,
            n_fft=n_fft,
            hop_length=hop_length,
            win_length=win_length,
            window=window,
            center=True,
            length=target_samples,
        )
        stretched = _trim_or_pad_audio(stretched, target_samples)
        return np.ascontiguousarray(stretched.cpu().numpy(), dtype=np.float32), sample_rate
    except Exception:
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


def _entry_from_path(path: Path, *, media_type: str) -> dict:
    root = _ensure_temp_root().resolve()
    target = path.resolve()
    try:
        rel = target.relative_to(root)
        subfolder = str(rel.parent).replace("\\", "/")
    except Exception:
        subfolder = ""
    return {
        "filename": target.name,
        "subfolder": subfolder,
        "type": "temp",
        "storage": "temp",
        "format": media_type,
    }


def encode_frames_to_mp4(frames, fps: float, audio=None, progress_callback=None) -> Path:
    if av is None:
        raise RuntimeError("PyAV is not available in this environment.")

    fps_value = max(1e-3, float(fps or 24.0))
    output_path = _ensure_temp_root() / f"pano_video_{uuid.uuid4().hex[:12]}.mp4"
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
        waveform_np, sample_rate = _stretch_audio_to_frame_count(audio, frame_count, frame_rate)
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
    raise last_error if last_error is not None else RuntimeError("No usable video encoder found (tried h264_nvenc, h264)")


def make_video_ui_payload(
    mp4_path: Path,
    fps: float,
    frame_count: int,
    *,
    include_comfy_preview: bool = False,
    video_key: str = "pano_videos",
    meta_key: str = "pano_video_meta",
) -> dict:
    video_entry = _entry_from_path(Path(mp4_path), media_type="video/mp4")
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
