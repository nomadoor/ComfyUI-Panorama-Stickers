"""ComfyUI runtime adaptation for panorama nodes.

The rendering nodes depend on this module for host progress, preview UI, video
payloads, and process-local caches.  Rendering and coordinate math stay out of
this boundary.
"""

from __future__ import annotations

import logging
from collections import OrderedDict
from pathlib import Path
import threading
import weakref

import numpy as np

from .core.video import encode_frames_to_mp4, make_video_ui_payload

try:
    from comfy_api.v0_0_2 import ComfyAPISync
except Exception:
    ComfyAPISync = None

try:
    from comfy.utils import ProgressBar as ComfyProgressBar
except Exception:
    ComfyProgressBar = None


PREVIEW_UI_KEYS = {
    "default": {
        "image": "pano_input_images",
        "video": "pano_videos",
        "meta": "pano_video_meta",
    },
    "input_video": {
        "image": "pano_input_images",
        "video": "pano_input_videos",
        "meta": "pano_input_video_meta",
    },
    "stickers_bg": {
        "image": "pano_input_images",
        "video": "pano_input_videos",
        "meta": "pano_input_video_meta",
    },
    "stickers_output": {
        "image": "pano_input_images",
        "video": "pano_videos",
        "meta": "pano_video_meta",
    },
    "stickers_input": {
        "image": "pano_sticker_input_images",
    },
}


class _ObjectIdentityRegistry:
    """Assign stable process-local tokens without retaining input tensors."""

    def __init__(self):
        self._entries = {}
        self._next_token = 0
        self._lock = threading.Lock()

    def token(self, value) -> tuple:
        object_id = id(value)
        with self._lock:
            entry = self._entries.get(object_id)
            if entry is not None and entry[0]() is value:
                return ("object", entry[1])

            self._next_token += 1
            token = self._next_token
            try:
                reference = weakref.ref(
                    value,
                    lambda released, key=object_id: self._discard(key, released),
                )
            except TypeError:
                return ("object-id", object_id)
            self._entries[object_id] = (reference, token)
            return ("object", token)

    def _discard(self, object_id: int, released):
        with self._lock:
            entry = self._entries.get(object_id)
            if entry is not None and entry[0] is released:
                self._entries.pop(object_id, None)


_OBJECT_IDENTITIES = _ObjectIdentityRegistry()


class ManualCacheStore:
    """Thread-safe LRU storage with the existing node-specific limits."""

    def __init__(
        self,
        *,
        stickers_bg_limit: int = 1,
        video_limit: int = 8,
    ):
        self._stickers_bg = OrderedDict()
        self._video = OrderedDict()
        self._lock = threading.Lock()
        self._stickers_bg_limit = max(1, int(stickers_bg_limit))
        self._video_limit = int(video_limit)

    def _cache_for(self, namespace: str):
        if namespace == "stickers_bg":
            return self._stickers_bg
        if namespace == "video":
            return self._video
        raise ValueError(f"Unknown cache namespace: {namespace}")

    def get(self, namespace: str, key: tuple):
        with self._lock:
            cache = self._cache_for(namespace)
            value = cache.get(key)
            if value is None:
                return None
            cache.move_to_end(key)
            return value

    def put(self, namespace: str, key: tuple, value):
        with self._lock:
            cache = self._cache_for(namespace)
            cache[key] = value
            cache.move_to_end(key)
            limit = self._stickers_bg_limit if namespace == "stickers_bg" else self._video_limit
            while len(cache) > limit:
                _old_key, old_value = cache.popitem(last=False)
                if namespace == "video":
                    try:
                        if isinstance(old_value, Path):
                            old_value.unlink(missing_ok=True)
                    except Exception:
                        pass

class NodeProgress:
    def __init__(
        self,
        node_id: str | None,
        total: float,
        label: str = "Node",
        *,
        progress_bar_factory=None,
        api_sync=None,
        logger=None,
    ):
        self.node_id = str(node_id) if node_id is not None else None
        self.total = max(1.0, float(total))
        self.value = 0.0
        self.label = str(label or "Node")
        self._progress_bar = progress_bar_factory(self.total) if progress_bar_factory is not None else None
        self._api_sync = api_sync
        self._logger = logger or logging.getLogger(__name__)
        self._last_stage = None

    def set(self, value: float):
        self.value = max(0.0, min(self.total, float(value)))
        if self._progress_bar is not None:
            try:
                self._progress_bar.update_absolute(self.value, self.total)
                return
            except Exception:
                pass
        if self._api_sync is None:
            return
        try:
            self._api_sync.execution.set_progress(self.value, self.total, node_id=self.node_id)
        except Exception:
            pass

    def advance(self, delta: float = 1.0):
        self.set(self.value + float(delta))

    def frame_callback(self, start: float, span: float):
        span_value = max(0.0, float(span))
        start_value = float(start)

        def _cb(done: int, total: int):
            denom = max(1, int(total))
            self.set(start_value + (min(max(int(done), 0), denom) / denom) * span_value)

        return _cb

    def finish(self):
        self.set(self.total)

    def stage(self, text: str):
        text_value = str(text or "").strip()
        if not text_value or text_value == self._last_stage:
            return
        self._last_stage = text_value
        self._logger.debug("[%s] %s", self.label, text_value)


class NodeRuntime:
    def __init__(
        self,
        *,
        progress_bar_factory=None,
        api_sync=None,
        preview_saver=None,
        encode_video=None,
        make_video_payload=None,
        cache_store=None,
        logger=None,
    ):
        self._progress_bar_factory = progress_bar_factory
        self._api_sync = api_sync
        self._preview_saver = preview_saver
        self._encode_video = encode_video
        self._make_video_payload = make_video_payload
        self.cache = cache_store or ManualCacheStore()
        self._logger = logger or logging.getLogger(__name__)

    def progress(self, node_id: str | None, total: float, label: str = "Node") -> NodeProgress:
        return NodeProgress(
            node_id,
            total,
            label,
            progress_bar_factory=self._progress_bar_factory,
            api_sync=self._api_sync,
            logger=self._logger,
        )

    def preview_contract(self, kind: str = "default") -> dict:
        return dict(PREVIEW_UI_KEYS.get(kind, PREVIEW_UI_KEYS["default"]))

    @staticmethod
    def _first_image(image):
        if image is None or not hasattr(image, "shape"):
            return image
        try:
            if len(image.shape) >= 4 and int(image.shape[0]) > 1:
                return image[:1]
        except Exception:
            return image
        return image

    def save_preview(self, images, *, key: str = "pano_input_images") -> dict:
        if self._preview_saver is None or images is None:
            return {}
        try:
            result = self._preview_saver(images)
            if "ui" in result and "images" in result["ui"]:
                return {key: result["ui"]["images"]}
        except Exception:
            self._logger.exception("Failed to save preview image for %s", key)
        return {}

    def init_preview(self, image, *, key: str = "pano_input_images") -> dict:
        return self.save_preview(self._first_image(image), key=key) if image is not None else {}

    @staticmethod
    def audio_has_waveform(audio) -> bool:
        if audio is None or not hasattr(audio, "get"):
            return False
        try:
            return audio.get("waveform") is not None and int(audio.get("sample_rate") or 0) > 0
        except Exception:
            return False

    @staticmethod
    def tensor_identity(image) -> tuple | None:
        if image is None or not hasattr(image, "shape"):
            return None
        try:
            shape = tuple(int(x) for x in image.shape)
        except Exception:
            return None
        dtype = str(getattr(image, "dtype", ""))
        device = str(getattr(image, "device", ""))
        data_ptr = None
        try:
            data_ptr = int(image.data_ptr())
        except Exception:
            data_ptr = None
        try:
            version = int(image._version)
        except Exception:
            version = None
        return (_OBJECT_IDENTITIES.token(image), version, data_ptr, shape, dtype, device)

    def audio_signature(self, audio) -> tuple:
        if not self.audio_has_waveform(audio):
            return ("no-audio",)
        waveform = None
        sample_rate = 0
        try:
            waveform = audio.get("waveform")
            sample_rate = int(audio.get("sample_rate") or 0)
        except Exception:
            return ("audio", "unknown")
        return ("audio", sample_rate, self.tensor_identity(waveform))

    def warn(self, ui_ret: dict, key: str, message: str):
        if not isinstance(ui_ret, dict):
            return
        text = str(message or "").strip()
        if not text:
            return
        bucket = ui_ret.get(key)
        if not isinstance(bucket, list):
            bucket = []
            ui_ret[key] = bucket
        if text not in bucket:
            bucket.append(text)
        self._logger.warning(text)

    def flush_warnings(self, ui_ret: dict, warning_key: str, warnings):
        if not warnings:
            return
        for warning in warnings:
            self.warn(ui_ret, warning_key, str(warning))

    @staticmethod
    def merge_ui_payload(ui_ret: dict, payload: dict | None):
        if not isinstance(ui_ret, dict) or not isinstance(payload, dict):
            return ui_ret
        for key, value in payload.items():
            ui_ret[key] = value
        return ui_ret

    def append_video(
        self,
        ui_ret: dict,
        frames,
        fps: float,
        audio,
        *,
        warning_key: str,
        include_comfy_preview: bool = False,
        video_key: str = "pano_videos",
        meta_key: str = "pano_video_meta",
        progress_callback=None,
    ):
        if frames is None:
            return
        try:
            import torch as _torch

            is_tensor = isinstance(frames, _torch.Tensor)
        except ImportError:
            is_tensor = False
        if is_tensor:
            if frames.ndim == 3:
                frames = frames.unsqueeze(0)
            if frames.ndim != 4 or int(frames.shape[0]) <= 1:
                return
            batch = frames
        else:
            batch = np.asarray(frames)
            if batch.dtype not in (np.uint8, np.float32, np.float16):
                batch = batch.astype(np.float32)
            if batch.ndim == 3:
                batch = batch[None, ...]
            if batch.ndim != 4 or batch.shape[0] <= 1:
                return
        try:
            if self._encode_video is None or self._make_video_payload is None:
                return
            mp4_path = self._encode_video(
                batch,
                fps,
                audio=audio,
                progress_callback=progress_callback,
            )
            payload = self._make_video_payload(
                mp4_path,
                fps,
                int(batch.shape[0]),
                include_comfy_preview=include_comfy_preview,
                video_key=video_key,
                meta_key=meta_key,
            )
            meta = payload.get(meta_key)
            if isinstance(meta, list) and meta:
                meta[0]["has_audio"] = self.audio_has_waveform(audio)
            self.merge_ui_payload(ui_ret, payload)
        except Exception as ex:
            self.warn(ui_ret, warning_key, f"Video UI cache generation failed: {ex}")

    def append_cached_video(
        self,
        ui_ret: dict,
        frames,
        fps: float,
        audio,
        *,
        cache_key: tuple,
        warning_key: str,
        video_key: str = "pano_videos",
        meta_key: str = "pano_video_meta",
        progress_callback=None,
        status_callback=None,
        unavailable_message: str = "MP4 preview encoding unavailable; install PyAV/encoders for preview",
    ):
        if frames is None or not hasattr(frames, "shape"):
            return
        frame_count = int(frames.shape[0]) if len(frames.shape) == 4 else 1
        if frame_count <= 1:
            return
        mp4_path = self.cache.get("video", cache_key)
        if not isinstance(mp4_path, Path) or not mp4_path.exists():
            if status_callback is not None:
                status_callback("encode")
            try:
                if self._encode_video is None:
                    return
                mp4_path = self._encode_video(
                    frames,
                    fps,
                    audio=audio,
                    progress_callback=progress_callback,
                )
            except Exception as ex:
                self.warn(ui_ret, warning_key, f"{unavailable_message} ({ex})")
                return
            self.cache.put("video", cache_key, mp4_path)
        elif status_callback is not None:
            status_callback("hit")
        if self._make_video_payload is None:
            return
        payload = self._make_video_payload(
            mp4_path,
            fps,
            frame_count,
            video_key=video_key,
            meta_key=meta_key,
        )
        meta = payload.get(meta_key)
        if isinstance(meta, list) and meta:
            meta[0]["has_audio"] = self.audio_has_waveform(audio)
        self.merge_ui_payload(ui_ret, payload)


def create_default_runtime(*, logger=None) -> NodeRuntime:
    try:
        import nodes as comfy_nodes
    except ImportError:
        comfy_nodes = None

    def save_preview(images):
        if comfy_nodes is None:
            return {}
        return comfy_nodes.PreviewImage().save_images(images)

    return NodeRuntime(
        progress_bar_factory=ComfyProgressBar,
        api_sync=ComfyAPISync() if ComfyAPISync is not None else None,
        preview_saver=save_preview if comfy_nodes is not None else None,
        encode_video=encode_frames_to_mp4,
        make_video_payload=make_video_ui_payload,
        logger=logger,
    )
