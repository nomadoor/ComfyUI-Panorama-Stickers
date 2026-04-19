from __future__ import annotations

import tempfile
import uuid
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


def encode_frames_to_mp4(frames, fps: float, audio=None) -> Path:
    if av is None:
        raise RuntimeError("PyAV is not available in this environment.")

    fps_value = max(1e-3, float(fps or 24.0))
    output_path = _ensure_temp_root() / f"pano_video_{uuid.uuid4().hex[:12]}.mp4"

    batch = _normalize_frames(frames)
    frame_count, height, width, _channels = batch.shape

    container = av.open(str(output_path), mode="w")
    try:
        frame_rate = Fraction(round(fps_value * 1000), 1000)
        # Try hardware encoding first, fall back to software
        video_stream = None
        for _codec in ("h264_nvenc", "h264"):
            try:
                _s = container.add_stream(_codec, rate=frame_rate)
                _s.width = int(width)
                _s.height = int(height)
                _s.pix_fmt = "yuv420p"
                if _codec == "h264_nvenc":
                    _s.options = {"preset": "p4"}
                video_stream = _s
                break
            except Exception:
                continue
        if video_stream is None:
            raise RuntimeError("No usable video encoder found (tried h264_nvenc, h264)")

        audio_stream = None
        planar = None
        sample_rate = 0
        layout = "mono"
        if isinstance(audio, dict) and audio.get("waveform") is not None:
            waveform = audio.get("waveform")
            sample_rate = int(audio.get("sample_rate") or 0)
            if hasattr(waveform, "detach"):
                waveform = waveform.detach().cpu().numpy()
            waveform = np.asarray(waveform, dtype=np.float32)
            if waveform.ndim == 2:
                waveform = waveform[None, ...]
            if waveform.ndim == 3 and waveform.shape[0] > 0 and sample_rate > 0:
                sample = waveform[0]
                channels = int(sample.shape[0]) if sample.ndim >= 2 else 1
                layout = "stereo" if channels >= 2 else "mono"
                audio_stream = container.add_stream("aac", rate=sample_rate)
                audio_stream.layout = layout
                audio_stream.sample_rate = sample_rate
                planar = sample if sample.ndim == 2 else sample.reshape(1, -1)
                planar = np.clip(planar, -1.0, 1.0).astype(np.float32, copy=False)

        _batch_is_u8 = batch.dtype == np.uint8
        _codec_name = video_stream.codec_context.name
        for frame in batch:
            frame_u8 = frame if _batch_is_u8 else np.clip(frame * 255.0, 0.0, 255.0).astype(np.uint8)
            video_frame = av.VideoFrame.from_ndarray(frame_u8, format="rgb24")
            # nvenc does not reliably handle implicit rgb24→yuv420p conversion; reformat explicitly
            if _codec_name == "h264_nvenc":
                video_frame = video_frame.reformat(format="yuv420p")
            for packet in video_stream.encode(video_frame):
                container.mux(packet)
        for packet in video_stream.encode():
            container.mux(packet)

        if audio_stream is not None and planar is not None and sample_rate > 0:
            chunk_size = 1024
            for start in range(0, int(planar.shape[1]), chunk_size):
                chunk = planar[:, start:start + chunk_size]
                if chunk.size <= 0:
                    continue
                audio_frame = av.AudioFrame.from_ndarray(chunk, format="fltp", layout=layout)
                audio_frame.sample_rate = sample_rate
                for packet in audio_stream.encode(audio_frame):
                    container.mux(packet)
            for packet in audio_stream.encode():
                container.mux(packet)
    finally:
        container.close()
    return output_path


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
