import bisect
import hashlib
import json
import math
import os
from dataclasses import dataclass, replace
from fractions import Fraction
from pathlib import Path
import logging

import numpy as np
import torch
import torch.nn.functional as F
from PIL import Image
import comfy.model_management
import folder_paths
from comfy_api.latest import ComfyExtension, Input, Types, io
from typing_extensions import override

from .comfy_image_resolver import resolve_painting_layer_payload
from .node_runtime import PREVIEW_UI_KEYS, NodeProgress, create_default_runtime
from .progress import loop_progress
from .core.cache import nbytes
from .core.cutout import build_cutout_sampling_map, sample_cutout_from_sampling_map
from .core.display_list import (
    alpha_composite_over_rgba as _alpha_composite_over_rgba,
    build_display_entries,
)
from .core.display_layers import (
    build_visual_paint_only_state as _build_visual_paint_only_state,
    compose_display_list_to_erp as _compose_display_list_to_erp,
    compose_display_list_to_overlay_rgba as _compose_display_list_to_overlay_rgba,
    render_remaining_flat_paint_layer_from_state as _render_remaining_flat_paint_layer_from_state,
    sample_overlay_rgba_from_sampling_map as _sample_overlay_rgba_from_sampling_map,
    should_use_uploaded_group_layers as _should_use_uploaded_group_layers,
)
from .core.math import (
    calculate_dimensions_from_megapixels,
    calculate_output_dimensions,
    finite_float,
    unit_float,
    vfov_from_hfov,
)
from .core.paint_state import empty_painting_state
from .core.painting import (
    alpha_composite_over_rgb,
    painting_state_has_mask_renderables,
    painting_state_has_renderables,
    render_painting_to_erp,
)
from .core.render import Projection, RenderLayer, SceneSources, StickerSource, render_frame
from .core.scene_eval import FRAME_EPSILON, evaluate_scene_state
from .core.scene_state import CAMERA_LANES, DEFAULT_EASING, STICKER_STATE_KIND, load_scene_state, load_sticker_state
from .core.state import merge_state, normalize_coverage, parse_sticker_state
from .core.stickers import load_source_rgba
from .core.video import (
    editor_ready,
    encode_editor_mp4,
    entry_from_path,
    make_frames_ui_payload,
    make_video_ui_payload,
    mp4_has_audio,
    save_editor_frames,
    save_output_png,
    save_video_to_mp4,
)
from .core.video_source import MaterializedVideo, StreamedVideo
from .core.world_render import ContentSource, SceneContent
from .scene_files import write_editor_files
from .scene_mesh import is_mesh_file, mesh_scene_content, moge_scene_content, read_mesh_file
from .scene_video import SceneVideo
from .splat_render import read_splat_file, splat_content
from .sticker_media import OPENED_VIDEOS, PortMedia, batch_index, open_video, stream_video
_log = logging.getLogger(__name__)
NODE_RUNTIME = create_default_runtime(logger=_log)


def _NodeProgress(node_id: str | None, total: float, label: str = "Node") -> NodeProgress:
    return NODE_RUNTIME.progress(node_id, total, label)


def _audio_signature(audio) -> tuple:
    return NODE_RUNTIME.audio_signature(audio)


def _tensor_cache_identity(image) -> tuple | None:
    return NODE_RUNTIME.tensor_identity(image)


def _common_video_preview_inputs(*, default_fps: float = 24.0) -> list:
    return [
        io.Float.Input(
            "fps",
            default=float(default_fps),
            min=1.0,
            max=120.0,
            step=1.0,
            tooltip="Preview playback framerate.",
        ),
        io.Audio.Input(
            "audio",
            optional=True,
            tooltip="Optional audio for preview playback.",
        ),
    ]


def _audio_has_waveform(audio) -> bool:
    return NODE_RUNTIME.audio_has_waveform(audio)


def _save_input_preview(images, key="pano_input_images"):
    return NODE_RUNTIME.save_preview(images, key=key)


def _crop_erp_for_coverage(arr: np.ndarray, coverage: int, out_w: int, out_h: int) -> np.ndarray:
    if arr is None:
        return None
    coverage_value = normalize_coverage(coverage)
    if coverage_value != 180:
        return arr
    src_h = int(arr.shape[0]) if arr.ndim >= 2 else 0
    src_w = int(arr.shape[1]) if arr.ndim >= 2 else 0
    if src_h <= 0 or src_w <= 0:
        return arr
    if src_w <= src_h:
        return arr
    target_aspect = max(1e-6, float(out_w) / max(1.0, float(out_h)))
    crop_w = min(src_w, max(1, int(round(src_h * target_aspect))))
    if crop_w >= src_w:
        return arr
    x0 = max(0, (src_w - crop_w) // 2)
    x1 = min(src_w, x0 + crop_w)
    return arr[:, x0:x1, ...]


def _resize_image_like(arr: np.ndarray, out_w: int, out_h: int, *, mode: str) -> np.ndarray:
    if arr is None:
        return None
    pil = Image.fromarray(arr)
    resample = Image.BILINEAR
    if mode == "mask":
        resample = Image.BILINEAR
    return np.asarray(pil.resize((int(out_w), int(out_h)), resample))


def _apply_coverage_to_rgba(arr, coverage: int, out_w: int, out_h: int):
    if arr is None:
        return None
    rgba = np.clip(arr.astype(np.float32), 0.0, 1.0)
    if int(rgba.shape[0]) != int(out_h) or int(rgba.shape[1]) != int(out_w):
        rgba = _resize_image_like((rgba * 255.0).astype(np.uint8), out_w, out_h, mode="rgba").astype(np.float32) / 255.0
    return rgba


def _apply_coverage_to_mask(arr, coverage: int, out_w: int, out_h: int):
    if arr is None:
        return None
    mask = np.clip(arr.astype(np.float32), 0.0, 1.0)
    if int(mask.shape[0]) != int(out_h) or int(mask.shape[1]) != int(out_w):
        mask = _resize_image_like(np.clip(mask * 255.0, 0.0, 255.0).astype(np.uint8), out_w, out_h, mode="mask").astype(np.float32) / 255.0
    return mask


def _apply_coverage_to_rgb(arr, coverage: int, out_w: int, out_h: int):
    if arr is None:
        return None
    rgb = np.clip(arr.astype(np.float32), 0.0, 1.0)
    if rgb.ndim != 3:
        return None
    if rgb.shape[-1] < 3:
        rgb = np.repeat(rgb[..., :1], 3, axis=-1)
    elif rgb.shape[-1] > 3:
        rgb = rgb[..., :3]
    if int(rgb.shape[0]) != int(out_h) or int(rgb.shape[1]) != int(out_w):
        rgb = _resize_image_like((rgb * 255.0).astype(np.uint8), out_w, out_h, mode="rgb").astype(np.float32) / 255.0
    return rgb


def _apply_overlay_coverage_to_rgba(arr, coverage: int, out_w: int, out_h: int):
    if arr is None:
        return None
    rgba = np.clip(arr.astype(np.float32), 0.0, 1.0)
    rgba = _crop_erp_for_coverage(rgba, coverage, out_w, out_h)
    if int(rgba.shape[0]) != int(out_h) or int(rgba.shape[1]) != int(out_w):
        rgba = _resize_image_like((rgba * 255.0).astype(np.uint8), out_w, out_h, mode="rgba").astype(np.float32) / 255.0
    return rgba


def _apply_overlay_coverage_to_mask(arr, coverage: int, out_w: int, out_h: int):
    if arr is None:
        return None
    mask = np.clip(arr.astype(np.float32), 0.0, 1.0)
    mask = _crop_erp_for_coverage(mask[..., None], coverage, out_w, out_h)[..., 0]
    if int(mask.shape[0]) != int(out_h) or int(mask.shape[1]) != int(out_w):
        mask = _resize_image_like(np.clip(mask * 255.0, 0.0, 255.0).astype(np.uint8), out_w, out_h, mode="mask").astype(np.float32) / 255.0
    return mask


def _push_ui_warning(ui_ret: dict, key: str, message: str):
    NODE_RUNTIME.warn(ui_ret, key, message)


def _iter_external_sticker_payloads(sticker_image=None, sticker_state=None):
    if sticker_image is None:
        return []
    return [{
        "slot_key": "1",
        "image_tensor": sticker_image,
        "state_raw": sticker_state,
    }]


def _external_sticker_id(slot_key: str) -> str:
    return f"sticker_image_{str(slot_key or '').strip() or '1'}"


def _hash_text(value) -> str:
    """The FNV-1a hash of `sticker_state` that the editor stores with the external Sticker and computes the same way
    (`hashStringSimple`), so it must not change. Only for short texts; larger ones are keyed by `hashlib`."""
    text = str(value or "")
    h = 2166136261
    for ch in text:
        h ^= ord(ch)
        h = (h * 16777619) & 0xFFFFFFFF
    return str(h)


def _safe_int(value, default: int = 0) -> int:
    try:
        return int(value)
    except Exception:
        return int(default)


def _hex_color_to_rgb01(value: str) -> np.ndarray:
    text = str(value or "").strip()
    if text.startswith("#"):
        text = text[1:]
    if len(text) != 6:
        text = "00ff00"
    try:
        rgb = [int(text[idx:idx + 2], 16) / 255.0 for idx in (0, 2, 4)]
    except ValueError:
        rgb = [0.0, 1.0, 0.0]
    return np.asarray(rgb, dtype=np.float32)


def _normalize_image_batch_array(arr, *, allow_alpha: bool = False, fallback_shape: tuple[int, int, int, int] | None = None) -> np.ndarray | None:
    if arr.ndim == 3:
        arr = arr[None, ...]
    if arr.ndim != 4 or arr.shape[0] <= 0:
        if fallback_shape is None:
            return None
        return np.zeros(fallback_shape, dtype=np.float32)
    batch = np.clip(arr.astype(np.float32), 0.0, 1.0)
    if batch.shape[-1] < 3:
        batch = np.repeat(batch[..., :1], 3, axis=-1)
    elif not allow_alpha and batch.shape[-1] > 3:
        batch = batch[..., :3]
    elif allow_alpha and batch.shape[-1] == 3:
        alpha = np.ones((batch.shape[0], batch.shape[1], batch.shape[2], 1), dtype=np.float32)
        batch = np.concatenate([batch, alpha], axis=-1)
    elif allow_alpha and batch.shape[-1] > 4:
        batch = batch[..., :4]
    return batch


def _single_image_to_numpy(image, warnings: list[str]) -> np.ndarray | None:
    batch = _images_to_numpy_batch(image, warnings, allow_alpha=True)
    if batch is None:
        return None
    if batch.shape[0] > 1:
        warnings.append("Multiple images received; using the first image only.")
    img = batch[0]
    if img.ndim != 3 or img.shape[0] <= 0 or img.shape[1] <= 0:
        return None
    if img.shape[-1] > 4:
        img = img[..., :4]
    return img


def _images_to_numpy_batch(
    image,
    warnings: list[str] | None,
    *,
    allow_alpha: bool = False,
    fallback_shape: tuple[int, int, int, int] | None = None,
) -> np.ndarray | None:
    if image is None or not hasattr(image, "detach"):
        if fallback_shape is None:
            return None
        return np.zeros(fallback_shape, dtype=np.float32)
    try:
        arr = image.detach().cpu().numpy().astype(np.float32)
    except Exception:
        if fallback_shape is None:
            return None
        return np.zeros(fallback_shape, dtype=np.float32)
    return _normalize_image_batch_array(arr, allow_alpha=allow_alpha, fallback_shape=fallback_shape)


def _repeat_mask_batch(mask_bw: np.ndarray, batch_size: int) -> np.ndarray:
    src = np.clip(np.asarray(mask_bw, dtype=np.float32), 0.0, 1.0)
    target_batch = max(1, int(batch_size))
    if src.ndim == 3:
        if int(src.shape[0]) == target_batch:
            return src
        if int(src.shape[0]) <= 0:
            return np.zeros((target_batch, *src.shape[1:]), dtype=np.float32)
        repeats = int(math.ceil(target_batch / float(src.shape[0])))
        return np.tile(src, (repeats, 1, 1))[:target_batch]
    return np.repeat(src[None, ...], target_batch, axis=0)


def _batch_to_torch(batch: np.ndarray):
    arr = np.asarray(batch, dtype=np.float32)
    if arr.ndim == 2:
        arr = arr[None, ...]
    return torch.from_numpy(arr.astype(np.float32, copy=False))


def _merge_ui_payload(ui_ret: dict, payload: dict | None):
    return NODE_RUNTIME.merge_ui_payload(ui_ret, payload)


def _append_video_payload(
    ui_ret: dict,
    frames: np.ndarray | None,
    fps: float,
    audio,
    *,
    warning_key: str,
    include_comfy_preview: bool = False,
    video_key: str = "pano_videos",
    meta_key: str = "pano_video_meta",
    progress_callback=None,
):
    NODE_RUNTIME.append_video(
        ui_ret,
        frames,
        fps,
        audio,
        warning_key=warning_key,
        include_comfy_preview=include_comfy_preview,
        video_key=video_key,
        meta_key=meta_key,
        progress_callback=progress_callback,
    )


def _init_ui_preview(image, *, key="pano_input_images") -> dict:
    return NODE_RUNTIME.init_preview(image, key=key)


def _flush_warnings(ui_ret: dict, warning_key: str, warnings: list[str] | None):
    NODE_RUNTIME.flush_warnings(ui_ret, warning_key, warnings)


def _make_batched_image_and_mask_outputs(out_batch: np.ndarray, mask_bw: np.ndarray):
    batch = np.asarray(out_batch, dtype=np.float32)
    if batch.ndim == 3:
        batch = batch[None, ...]
    mask_batch = _repeat_mask_batch(mask_bw, int(batch.shape[0]))
    out_t = _batch_to_torch(batch)
    mask_t = _batch_to_torch(mask_batch)
    return out_t, mask_t, batch


def _append_preview_video_from_batch(
    ui_ret: dict,
    out_batch: np.ndarray | None,
    fps: float,
    audio,
    *,
    warning_key: str,
    video_key: str = "pano_videos",
    meta_key: str = "pano_video_meta",
    progress_callback=None,
):
    _append_video_payload(
        ui_ret,
        out_batch,
        fps,
        audio,
        warning_key=warning_key,
        video_key=video_key,
        meta_key=meta_key,
        progress_callback=progress_callback,
    )


def _get_preview_ui_contract(kind: str = "default") -> dict:
    return NODE_RUNTIME.preview_contract(kind)


def _finalize_batched_node_output(
    ui_ret: dict,
    out_batch: np.ndarray,
    mask_bw: np.ndarray,
    *,
    fps: float,
    audio,
    warning_key: str,
    video_key: str = "pano_videos",
    meta_key: str = "pano_video_meta",
    progress_callback=None,
):
    out_t, mask_t, out_batch = _make_batched_image_and_mask_outputs(out_batch, mask_bw)
    _append_preview_video_from_batch(
        ui_ret,
        out_batch,
        fps,
        audio,
        warning_key=warning_key,
        video_key=video_key,
        meta_key=meta_key,
        progress_callback=progress_callback,
    )
    return out_t, mask_t, out_batch


def _resolve_cutout_source_batch(erp_image) -> np.ndarray:
    return _images_to_numpy_batch(erp_image, None, fallback_shape=(1, 512, 1024, 3))


def _estimate_sticker_chunk_size(
    batch_size: int,
    out_h: int,
    out_w: int,
    device: torch.device | None,
    *,
    in_h: int = 0,
    in_w: int = 0,
) -> int:
    if device is None or comfy.model_management.is_device_cpu(device):
        return max(1, int(batch_size))
    free_bytes = comfy.model_management.get_free_memory(device)
    # Account for both input and output tensors: input (float32 BCHW) + output (float32 BCHW)
    # plus overlay broadcast and intermediate buffers. Use 4x multiplier for safety margin.
    eff_in_h = max(int(in_h or out_h), int(out_h))
    eff_in_w = max(int(in_w or out_w), int(out_w))
    bytes_per_frame_in = int(eff_in_h) * int(eff_in_w) * 4 * 4   # float32, 4 channels (BCHW)
    bytes_per_frame_out = int(out_h) * int(out_w) * 4 * 4
    bytes_per_frame = max(1, (bytes_per_frame_in + bytes_per_frame_out) * 2)  # *2 for intermediates
    budget = max(bytes_per_frame, int(free_bytes * 0.45))
    return max(1, min(int(batch_size), int(budget // bytes_per_frame)))


def _render_sticker_output_batches(
    bg_erp,
    *,
    out_h: int,
    out_w: int,
    bg_hex: str,
    overlay_rgba: np.ndarray | None,
    device: torch.device | None,
    progress_callback=None,
):
    if bg_erp is None:
        solid_rgb = np.broadcast_to(_hex_color_to_rgb01(bg_hex), (1, out_h, out_w, 3)).astype(np.float32, copy=True)
        if overlay_rgba is not None:
            alpha = overlay_rgba[None, ..., 3:4].astype(np.float32, copy=False)
            rgb = overlay_rgba[None, ..., :3].astype(np.float32, copy=False)
            out_batch = np.clip(rgb * alpha + solid_rgb * (1.0 - alpha), 0.0, 1.0)
        else:
            out_batch = solid_rgb
        bg_batch = np.clip(solid_rgb * 255.0, 0, 255).astype(np.uint8)
        return out_batch.astype(np.float32, copy=False), bg_batch

    batch_size = int(bg_erp.shape[0]) if hasattr(bg_erp, "shape") and len(bg_erp.shape) == 4 else 1
    in_h = int(bg_erp.shape[1]) if hasattr(bg_erp, "shape") and len(bg_erp.shape) == 4 else out_h
    in_w = int(bg_erp.shape[2]) if hasattr(bg_erp, "shape") and len(bg_erp.shape) == 4 else out_w
    compute_device = device if device is not None else bg_erp.device
    chunk_size = _estimate_sticker_chunk_size(batch_size, out_h, out_w, compute_device, in_h=in_h, in_w=in_w)
    overlay_cache = {}
    start = 0

    try:
        out_batch = np.empty((batch_size, out_h, out_w, 3), dtype=np.float32)
        bg_batch = np.empty((batch_size, out_h, out_w, 3), dtype=np.uint8)
    except MemoryError:
        raise MemoryError(
            f"PanoramaStickers: not enough RAM to pre-allocate output batch "
            f"({batch_size} frames at {out_h}×{out_w}). "
            "Reduce output resolution or batch size."
        ) from None

    while start < batch_size:
        end = min(batch_size, start + chunk_size)
        try:
            chunk = bg_erp[start:end].to(compute_device).permute(0, 3, 1, 2).float()
            if int(chunk.shape[2]) != int(out_h) or int(chunk.shape[3]) != int(out_w):
                chunk = F.interpolate(chunk, size=(out_h, out_w), mode="bilinear", align_corners=False)
            if int(chunk.shape[1]) < 3:
                chunk = chunk[:, :1].expand(-1, 3, -1, -1)
            elif int(chunk.shape[1]) > 3:
                chunk = chunk[:, :3, :, :]

            bg_chunk = chunk.permute(0, 2, 3, 1).clamp(0.0, 1.0)
            bg_batch[start:end] = (bg_chunk * 255.0).clamp(0, 255).to(torch.uint8).cpu().numpy()

            if overlay_rgba is not None:
                overlay_t = overlay_cache.get(str(compute_device))
                if overlay_t is None:
                    overlay_t = torch.from_numpy(overlay_rgba.astype(np.float32, copy=False)).to(compute_device)
                    overlay_cache[str(compute_device)] = overlay_t
                alpha_t = overlay_t[None, ..., 3:4]
                rgb_t = overlay_t[None, ..., :3]
                out_chunk = (rgb_t * alpha_t + bg_chunk * (1.0 - alpha_t)).clamp(0.0, 1.0)
            else:
                out_chunk = bg_chunk

            out_batch[start:end] = out_chunk.contiguous().cpu().numpy()
            del chunk, bg_chunk, out_chunk
            if progress_callback is not None:
                try:
                    progress_callback(end, batch_size)
                except Exception:
                    pass
            start = end
        except torch.OutOfMemoryError:
            on_device = not comfy.model_management.is_device_cpu(compute_device)
            if on_device:
                comfy.model_management.soft_empty_cache()
            if on_device and chunk_size > 1:
                chunk_size = max(1, chunk_size // 2)
                continue
            if on_device:
                logging.getLogger(__name__).warning(
                    "PanoramaStickers background device path ran out of memory; falling back to CPU chunks."
                )
                compute_device = torch.device("cpu")
                chunk_size = 1
                overlay_cache.clear()
                continue
            raise MemoryError(
                f"PanoramaStickers: not enough RAM to process a single frame "
                f"({in_h}×{in_w} input → {out_h}×{out_w} output). "
                "Reduce output resolution or batch size."
            ) from None

    return out_batch, bg_batch


def _first_image_tensor(image):
    return NODE_RUNTIME._first_image(image)


def _default_pose_for_sticker(image_w: int, image_h: int) -> dict:
    hfov = 30.0
    return {
        "yaw_deg": 0.0,
        "pitch_deg": 0.0,
        "hFOV_deg": hfov,
        "vFOV_deg": vfov_from_hfov(hfov, image_w, image_h),
        "rot_deg": 0.0,
    }


def _pose_from_sticker_state(parsed_state: dict | None, image_w: int, image_h: int, warnings: list[str]) -> dict:
    default_pose = _default_pose_for_sticker(image_w, image_h)
    if not isinstance(parsed_state, dict):
        return default_pose
    hfov = float(np.clip(finite_float(parsed_state.get("hFOV_deg", default_pose["hFOV_deg"]), default_pose["hFOV_deg"]), 0.1, 179.0))
    source_aspect = parsed_state.get("source_aspect", None)
    if source_aspect is not None:
        source_aspect_val = finite_float(source_aspect, 0.0)
        current_aspect = float(max(1, image_w)) / float(max(1, image_h))
        if source_aspect_val > 0.0 and abs(source_aspect_val - current_aspect) > 1e-3:
            warnings.append("Image aspect ratio differs from source metadata; using the current image aspect ratio.")
    return {
        "yaw_deg": finite_float(parsed_state.get("yaw_deg", default_pose["yaw_deg"]), default_pose["yaw_deg"]),
        "pitch_deg": finite_float(parsed_state.get("pitch_deg", default_pose["pitch_deg"]), default_pose["pitch_deg"]),
        "hFOV_deg": hfov,
        "vFOV_deg": vfov_from_hfov(hfov, image_w, image_h),
        "rot_deg": finite_float(parsed_state.get("roll_deg", default_pose["rot_deg"]), default_pose["rot_deg"]),
    }


def _build_runtime_external_sticker(
    sticker: dict | None,
    *,
    external_id: str,
    slot_key: str,
    payload_state_hash: str,
    parsed_pose: dict | None,
    image_rgba: np.ndarray,
    image_w: int,
    image_h: int,
    z_index: int = 0,
) -> dict:
    runtime_sticker = dict(sticker) if isinstance(sticker, dict) else {
        "id": external_id,
        "source_kind": "external_image",
        "slot_key": str(slot_key or "1"),
        "visible": True,
        "z_index": _safe_int(z_index, 0),
        "yaw_deg": 0.0,
        "pitch_deg": 0.0,
        "hFOV_deg": 30.0,
        "rot_deg": 0.0,
    }
    if parsed_pose is not None and str(runtime_sticker.get("source_state_hash", "")) != payload_state_hash:
        runtime_sticker.update(parsed_pose)
    else:
        runtime_sticker["vFOV_deg"] = vfov_from_hfov(
            runtime_sticker.get("hFOV_deg", 30.0),
            image_w,
            image_h,
        )
    runtime_sticker["image_rgba"] = image_rgba
    runtime_sticker["source_state_hash"] = payload_state_hash
    runtime_sticker["slot_key"] = str(slot_key or "1")
    return runtime_sticker


def _build_sticker_state_json(shot: dict, frame_w: int, frame_h: int) -> str:
    width = max(1, int(frame_w))
    height = max(1, int(frame_h))
    payload = {
        "kind": "pano_sticker_state",
        "version": 1,
        "pose": {
            "yaw_deg": finite_float(shot.get("yaw_deg", 0.0), 0.0),
            "pitch_deg": finite_float(shot.get("pitch_deg", 0.0), 0.0),
            "roll_deg": finite_float(shot.get("roll_deg", 0.0), 0.0),
            "hFOV_deg": float(np.clip(finite_float(shot.get("hFOV_deg", 90.0), 90.0), 0.1, 179.0)),
        },
        "source_aspect": float(width) / float(height),
    }
    return json.dumps(payload, ensure_ascii=True, separators=(",", ":"))


def _get_display_list_entries(state: dict) -> list[dict]:
    return list(build_display_entries(state))


def _build_overlay_erp_rgba_and_mask(
    state: dict,
    *,
    erp_width: int,
    erp_height: int,
    painting_payload: dict | None = None,
    base_dir: Path | None = None,
    quality: str = "export",
    ui_ret: dict | None = None,
    warning_key: str | None = None,
) -> tuple[np.ndarray | None, np.ndarray | None, dict, bool]:
    if painting_payload is None:
        painting_payload = resolve_painting_layer_payload(
            state.get("painting_layer"),
            erp_width=erp_width,
            erp_height=erp_height,
        )
    overlay_state = dict(state)
    overlay_state["coverage"] = 360
    overlay_rgba, used_group_layers, overlay_stats = _compose_display_list_to_overlay_rgba(
        overlay_state,
        int(erp_width),
        int(erp_height),
        painting_payload=painting_payload,
        base_dir=base_dir,
        quality=quality,
    )
    painting_state = state.get("painting")
    if used_group_layers:
        remaining_flat_rgba = _render_remaining_flat_paint_layer_from_state(
            painting_state,
            int(erp_width),
            int(erp_height),
        )
        if remaining_flat_rgba is not None:
            if overlay_rgba is None:
                overlay_rgba = remaining_flat_rgba.astype(np.float32, copy=False)
            else:
                overlay_rgba = _alpha_composite_over_rgba(overlay_rgba, remaining_flat_rgba)
    else:
        paint_rgba = painting_payload.get("paint") if isinstance(painting_payload, dict) else None
        if paint_rgba is not None:
            paint_rgba = unit_float(paint_rgba)
        else:
            if warning_key and isinstance(ui_ret, dict) and painting_state_has_renderables(painting_state):
                _push_ui_warning(
                    ui_ret,
                    warning_key,
                    "Paint export fell back to backend stroke rendering because uploaded paint layers were unavailable.",
                )
            paint_rgba, _mask_bw_unused = render_painting_to_erp(state.get("painting"), int(erp_width), int(erp_height))
        if paint_rgba is not None:
            if overlay_rgba is None:
                overlay_rgba = paint_rgba.astype(np.float32, copy=False)
            else:
                overlay_rgba = _alpha_composite_over_rgba(overlay_rgba, paint_rgba)

    mask_bw = painting_payload.get("mask") if isinstance(painting_payload, dict) else None
    if mask_bw is not None:
        mask_bw = unit_float(mask_bw)
    else:
        if warning_key and isinstance(ui_ret, dict) and painting_state_has_mask_renderables(painting_state):
            _push_ui_warning(
                ui_ret,
                warning_key,
                "Mask export fell back to backend stroke rendering because uploaded mask layers were unavailable.",
            )
        _paint_rgba_unused, mask_bw = render_painting_to_erp(state.get("painting"), int(erp_width), int(erp_height))
    return overlay_rgba, mask_bw, overlay_stats, used_group_layers


class PanoramaStickersNode(io.ComfyNode):
    MAX_OUTPUT_SIDE = 4096

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaStickers",
            display_name="Panorama Stickers",
            category="Panorama Suite",
            inputs=[
                io.Combo.Input(
                    "output_preset",
                    options=["1024", "2048", "4096", "auto"],
                    default="2048",
                ),
                io.Combo.Input(
                    "coverage",
                    options=["360", "180"],
                    default="360",
                ),
                io.String.Input("bg_color", default="#00ff00", multiline=False),
                io.String.Input(
                    "state_json",
                    default="",
                    multiline=True,
                    dynamic_prompts=False,
                    advanced=True,
                ),
                io.Image.Input("bg_erp", optional=True),
                io.Image.Input("sticker_image", optional=True),
                io.String.Input(
                    "sticker_state",
                    default="",
                    multiline=False,
                    dynamic_prompts=False,
                    optional=True,
                    force_input=True,
                ),
            ] + _common_video_preview_inputs(),
            outputs=[
                io.Image.Output("cond_erp", display_name="cond_erp"),
                io.Mask.Output("mask", display_name="mask"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @staticmethod
    def _parse_output_preset(v, max_val=4096):
        if isinstance(v, str):
            head = v.split("x", 1)[0].strip()
            val = int(float(head))
        else:
            val = int(v)
        return int(np.clip(val, 8, max_val))

    @staticmethod
    def _is_auto_output_preset(v) -> bool:
        return isinstance(v, str) and v.strip().lower() in {"auto", "bg", "background"}

    @staticmethod
    def _bg_erp_size(bg_erp) -> tuple[int, int] | None:
        if bg_erp is None or not hasattr(bg_erp, "shape"):
            return None
        try:
            shape = tuple(int(x) for x in bg_erp.shape)
        except Exception:
            return None
        if len(shape) == 4 and shape[1] > 0 and shape[2] > 0:
            return shape[2], shape[1]
        if len(shape) == 3 and shape[0] > 0 and shape[1] > 0:
            return shape[1], shape[0]
        return None

    @classmethod
    def _resolve_output_size(cls, output_preset, coverage, bg_erp=None) -> tuple[int, int, bool]:
        coverage_value = normalize_coverage(coverage)
        if cls._is_auto_output_preset(output_preset):
            bg_size = cls._bg_erp_size(bg_erp)
            if bg_size is not None:
                out_w = bg_size[0]
                out_h = max(1, out_w if coverage_value == 180 else bg_size[1])
                return out_w, out_h, True
            out_w = cls._parse_output_preset("2048", max_val=cls.MAX_OUTPUT_SIDE)
        else:
            out_w = cls._parse_output_preset(output_preset, max_val=cls.MAX_OUTPUT_SIDE)
        out_h = max(1, out_w if coverage_value == 180 else (out_w // 2))
        return out_w, out_h, False

    @staticmethod
    def _resolve_overlay_workspace_size(out_w: int, out_h: int, coverage) -> tuple[int, int]:
        workspace_w = max(1, int(out_w))
        coverage_value = normalize_coverage(coverage)
        if coverage_value == 180:
            return workspace_w, max(1, workspace_w // 2)
        return workspace_w, max(1, int(out_h))

    @staticmethod
    def _normalize_hex_color(v):
        s = str(v or "").strip()
        if s.startswith("#"):
            s = s[1:]
        if len(s) == 3:
            s = "".join(ch * 2 for ch in s)
        if len(s) != 6:
            return "#00ff00"
        try:
            int(s, 16)
        except ValueError:
            return "#00ff00"
        return f"#{s.lower()}"

    @classmethod
    def execute(cls, output_preset, coverage, bg_color, state_json, bg_erp=None, sticker_image=None, sticker_state="", fps=24.0, audio=None, unique_id=None):
        coverage_value = normalize_coverage(coverage)
        out_w, out_h, output_uses_bg_size = cls._resolve_output_size(output_preset, coverage_value, bg_erp=bg_erp)
        workspace_w, workspace_h = cls._resolve_overlay_workspace_size(out_w, out_h, coverage_value)
        bg_hex = cls._normalize_hex_color(bg_color)
        fps_value = max(1.0, finite_float(fps, 24.0))
        state = merge_state(state_in=None, internal_state=state_json, fallback_preset=out_w, fallback_bg=bg_hex)
        warnings = []
        if cls._is_auto_output_preset(output_preset) and not output_uses_bg_size:
            warnings.append("Output preset is auto, but bg_erp is not connected; using 2048 instead.")
        external_payloads = list(_iter_external_sticker_payloads(sticker_image=sticker_image, sticker_state=sticker_state))
        batch_frames = int(bg_erp.shape[0]) if bg_erp is not None and hasattr(bg_erp, "shape") and len(bg_erp.shape) == 4 else 1
        render_span = max(1, batch_frames if bg_erp is not None else 1)
        video_span = batch_frames if batch_frames > 1 else 0
        progress = _NodeProgress(unique_id, len(external_payloads) + 2 + render_span + video_span + video_span + 1, label="PanoramaStickers")
        progress.set(0)
        progress.stage("Preparing sticker inputs")

        torch_device = comfy.model_management.get_torch_device()
        render_device = None if comfy.model_management.is_device_cpu(torch_device) else torch_device

        state["output_preset"] = out_w
        state["bg_color"] = bg_hex
        state["coverage"] = coverage_value

        render_stickers = []
        for sticker in state.get("stickers", []):
            if isinstance(sticker, dict):
                render_stickers.append(dict(sticker))

        external_pose_ui = None
        external_state_hash_ui = None
        for payload in external_payloads:
            parsed_state = parse_sticker_state(payload.get("state_raw"))
            payload_state_hash = _hash_text(payload.get("state_raw"))
            if external_state_hash_ui is None:
                external_state_hash_ui = payload_state_hash
            if external_pose_ui is None and parsed_state is not None:
                external_pose_ui = {
                    "yaw_deg": float(parsed_state.get("yaw_deg", 0.0)),
                    "pitch_deg": float(parsed_state.get("pitch_deg", 0.0)),
                    "hFOV_deg": float(parsed_state.get("hFOV_deg", 30.0)),
                    "rot_deg": float(parsed_state.get("roll_deg", 0.0)),
                }
            img_np = _single_image_to_numpy(payload.get("image_tensor"), warnings)
            if img_np is None:
                continue
            image_h = int(img_np.shape[0]) if img_np.ndim >= 2 else 1
            image_w = int(img_np.shape[1]) if img_np.ndim >= 2 else 1
            if img_np.shape[-1] == 3:
                alpha = np.ones((image_h, image_w, 1), dtype=np.float32)
                image_rgba = np.concatenate([img_np, alpha], axis=-1)
            else:
                image_rgba = img_np[..., :4]
            parsed_pose = _pose_from_sticker_state(parsed_state, image_w, image_h, warnings) if parsed_state is not None else None
            if external_pose_ui is None and parsed_pose is not None:
                external_pose_ui = dict(parsed_pose)

            external_id = _external_sticker_id(payload.get("slot_key"))
            matched_existing = False
            for idx, sticker in enumerate(render_stickers):
                if str(sticker.get("id", "")) != external_id:
                    continue
                runtime_sticker = _build_runtime_external_sticker(
                    sticker,
                    external_id=external_id,
                    slot_key=str(payload.get("slot_key") or "1"),
                    payload_state_hash=payload_state_hash,
                    parsed_pose=parsed_pose,
                    image_rgba=image_rgba,
                    image_w=image_w,
                    image_h=image_h,
                    z_index=_safe_int(sticker.get("z_index", 0), 0),
                )
                render_stickers[idx] = runtime_sticker
                matched_existing = True
                break
            if not matched_existing:
                next_z = max((_safe_int(st.get("z_index", 0), 0) for st in render_stickers if isinstance(st, dict)), default=-1) + 1
                render_stickers.append(_build_runtime_external_sticker(
                    None,
                    external_id=external_id,
                    slot_key=str(payload.get("slot_key") or "1"),
                    payload_state_hash=payload_state_hash,
                    parsed_pose=parsed_pose,
                    image_rgba=image_rgba,
                    image_w=image_w,
                    image_h=image_h,
                    z_index=next_z,
                ))
            progress.advance(1)

        render_state = dict(state)
        render_state["stickers"] = render_stickers
        stickers_bg_contract = _get_preview_ui_contract("stickers_bg")
        stickers_output_contract = _get_preview_ui_contract("stickers_output")
        stickers_input_contract = _get_preview_ui_contract("stickers_input")
        ui_ret = _init_ui_preview(bg_erp, key=stickers_bg_contract["image"])

        painting_payload = resolve_painting_layer_payload(
            state.get("painting_layer"),
            erp_width=workspace_w,
            erp_height=workspace_h,
        )
        progress.stage("Building overlay and mask layers")
        overlay_rgba, mask_bw, _overlay_stats_unused, _used_group_layers_unused = _build_overlay_erp_rgba_and_mask(
            render_state,
            erp_width=workspace_w,
            erp_height=workspace_h,
            painting_payload=painting_payload,
            base_dir=Path.cwd(),
            quality="export",
            ui_ret=ui_ret,
            warning_key="pano_sticker_warnings",
        )
        overlay_rgba = _apply_overlay_coverage_to_rgba(overlay_rgba, coverage_value, out_w, out_h)
        mask_bw = _apply_overlay_coverage_to_mask(mask_bw, coverage_value, out_w, out_h)
        if mask_bw is None:
            mask_bw = np.zeros((out_h, out_w), dtype=np.float32)
        progress.advance(1)

        render_start = progress.value
        progress.stage("Rendering panorama frames")
        out_batch, bg_batch = _render_sticker_output_batches(
            bg_erp,
            out_h=out_h,
            out_w=out_w,
            bg_hex=bg_hex,
            overlay_rgba=overlay_rgba,
            device=render_device,
            progress_callback=progress.frame_callback(render_start, render_span),
        )
        progress.set(render_start + render_span)
        output_encode_start = progress.value
        if video_span > 0:
            progress.stage("Encoding output preview video")
        out_t, mask_t, out_batch = _finalize_batched_node_output(
            ui_ret,
            out_batch,
            mask_bw,
            fps=fps_value,
            audio=audio,
            warning_key="pano_sticker_warnings",
            video_key=stickers_output_contract["video"],
            meta_key=stickers_output_contract["meta"],
            progress_callback=progress.frame_callback(output_encode_start, video_span) if video_span > 0 else None,
        )
        progress.set(output_encode_start + video_span)
        if sticker_image is not None:
            ui_ret.update(_init_ui_preview(sticker_image, key=stickers_input_contract["image"]))
        if external_pose_ui is not None:
            ui_ret["pano_sticker_input_pose"] = [external_pose_ui]
        if external_state_hash_ui is not None:
            ui_ret["pano_sticker_input_state_hash"] = [external_state_hash_ui]
        input_encode_start = progress.value
        if video_span > 0:
            progress.stage("Encoding background preview video")
        _append_preview_video_from_batch(
            ui_ret,
            bg_batch,
            fps_value,
            audio,
            warning_key="pano_sticker_warnings",
            video_key=stickers_bg_contract["video"],
            meta_key=stickers_bg_contract["meta"],
            progress_callback=progress.frame_callback(input_encode_start, video_span) if video_span > 0 else None,
        )
        progress.set(input_encode_start + video_span)
        _flush_warnings(ui_ret, "pano_sticker_warnings", warnings)
        progress.stage("Done")
        progress.finish()
        return io.NodeOutput(out_t, mask_t, ui=ui_ret)


MoGeGeometry = io.Custom("MOGE_GEOMETRY")
PanoScene = io.Custom("PANO_SCENE")
MESH_FILE_TYPES = [io.File3DGLB, io.File3DGLTF, io.File3DFBX, io.File3DOBJ, io.File3DSTL, io.File3DUSDZ, io.File3DAny]
SPLAT_FILE_TYPES = [io.File3DPLY, io.File3DSPLAT, io.File3DSPZ, io.File3DKSPLAT, io.File3DSplatAny]


@dataclass(frozen=True, eq=False)
class SceneLayer:
    """One Panorama Studio's own part of a Scene (ADR 0029): its state bound to its inputs.

    `state` is the loaded `state_json` with the port Sticker appended when missing, and `sources` its Sticker
    sources read into memory; the port Sticker's source is a template holding the first frame of `port`, the
    media on the sticker input (None without one), whose frames come from `port.frames()` at `port.index_at`.
    3D media has no template: `port.frames()` is its content, and `_port_source_at` the item to draw. `scene` is
    the 3D media on the `scene` input (None without one), a 3D file as the SPLAT or MESH read from it
    (`_read_scene_file`), as is the 3D media in `port`. `media_ui` is the part of the execution `ui` that shows the
    layer's own media in an editor (the `sticker` media and the `scene` and 3D Sticker editor files); the files are
    the producing node's and are not written again.
    """

    state: dict
    sources: SceneSources
    port: PortMedia | None
    scene: object
    media_ui: dict


@dataclass(frozen=True, eq=False)
class PanoSceneValue:
    """The PANO_SCENE output: a Scene derived on each execution from the states and inputs of a chain of nodes
    (ADR 0025, ADR 0029).

    `layers` holds a `SceneLayer` for each node of the chain, from the farthest upstream to the node that made it,
    flat: a PANO_SCENE never holds another. `bg_media` (IMAGE, VIDEO, or None) is the input as given, `coverage`
    its span, and `bg_color` 0..1 RGB, all from the farthest upstream node that has a `bg_media`. `bg_ui` is the
    `ui` that shows that `bg_media` in an editor. The output size is not part of it; each consumer sets its own.
    `rate` is the Timeline fps as the fraction (a)
    decided (`fps` as a float), `times` each output frame's time in seconds (Fraction), and `time_base` the step
    those times are rounded to (0: exact). `frames` holds per output frame the `bg_media` frame to draw and, for
    each layer, the Timeline frame of its state to evaluate, the `port` frame, and the `scene` item, as
    `_decide_timeline` returns them. `media_ui` is the part of the producing node's execution `ui` that shows its
    media in an editor (with the upstream layers, `docs/render-contract.md`); a consumer passes it on in its own
    `ui`. Consumers must not modify it; the same value reaches every node linked to the output.
    """

    layers: tuple
    bg_media: object
    coverage: int
    bg_color: tuple
    rate: Fraction
    times: tuple
    time_base: Fraction
    frames: tuple
    bg_ui: dict
    media_ui: dict

    @property
    def fps(self) -> float:
        return float(self.rate)


def _scene_content(scene) -> SceneContent | None:
    """The `scene` input as World content, or None without one."""
    if scene is None:
        return None
    if isinstance(scene, Types.SPLAT):
        return splat_content(scene)
    if isinstance(scene, Types.MESH):
        return mesh_scene_content(scene)
    return moge_scene_content(scene)


def _read_scene_file(scene, name: str):
    """A 3D file on the `scene` or `sticker` input (`name`) as what is read from it: a splat file (told by its
    contents, as Load3D does) as its SPLAT, else a mesh file (by its format) as its MESH; other inputs as given. A 3D
    file that neither reads (a PLY without 3DGS properties, a non-splat file without a format) is a ValueError.
    What is read is kept per file (on disk by its path and modification, else by the object) in the cache of its
    kind, so the same file is not parsed again and keeps its editor files."""
    if not isinstance(scene, Types.File3D):
        return scene
    if scene.is_disk_backed:
        stat = os.stat(scene.get_source())
        cache_key = (scene.get_source(), stat.st_mtime_ns, stat.st_size)
    else:
        cache_key = NODE_RUNTIME.object_identity(scene)
    for namespace in ("splat_files", "mesh_files"):
        value = NODE_RUNTIME.cache.get(namespace, cache_key)
        if value is not None:
            return value
    splat = read_splat_file(scene)
    if splat is not None:
        NODE_RUNTIME.cache.put("splat_files", cache_key, splat)
        return splat
    if not is_mesh_file(scene):
        raise ValueError(f"Panorama Stickers: the 3D file on the {name} input is neither a splat file (a PLY with 3DGS properties, "
                         "SPLAT, SPZ, KSPLAT) nor a mesh file (GLB, GLTF, OBJ, STL, FBX, USDZ).")
    mesh = read_mesh_file(scene)
    NODE_RUNTIME.cache.put("mesh_files", cache_key, mesh)
    return mesh


def _unused_sticker_id(stickers: list[dict]) -> str:
    used = {sticker["id"] for sticker in stickers}
    index = 1
    while f"sticker_{index}" in used:
        index += 1
    return f"sticker_{index}"


def _nearest_turn(angle: float, previous: float) -> float:
    return previous + (angle - previous + 180.0) % 360.0 - 180.0


def _in_hold(keyframes: list[dict], frame: float) -> bool:
    """Whether `frame` is in a segment that holds its value until the next Keyframe (a cut)."""
    if not keyframes[0]["frame"] - FRAME_EPSILON <= frame < keyframes[-1]["frame"] - FRAME_EPSILON:
        return False
    return [key for key in keyframes if key["frame"] <= frame + FRAME_EPSILON][-1]["easing"] == "hold"


def _lane_numbers(value) -> tuple:
    return tuple(value.values()) if isinstance(value, dict) else (value,)


def _handoff_lanes(sticker_state: dict, fps: float) -> dict:
    """The port Sticker's direction, roll and size Lanes that put it back where the Camera of `sticker_state`
    shot it (Pose handoff), at the Timeline `fps` of the state. The Sticker's clip frame is the time of its media.

    A Camera that moves is read at every Timeline frame over its Keyframes and baked into `auto` Keyframes,
    like a Drone's, because a Camera rotation and a Sticker direction interpolate differently between Keyframes.
    A frame inside a `hold` segment of the Camera is a `hold` Keyframe, so a cut stays a cut. A Lane that the
    Camera does not move is a static value.
    """
    camera = sticker_state["camera"]
    ratio = sticker_state["fps"] / fps
    shot = load_scene_state({"version": 2, "timeline": {"fps": sticker_state["fps"]}, "camera": {name: {"keyframes": keys} for name, keys in camera.items()}})
    first = min(keys[0]["frame"] for keys in camera.values())
    last = max(keys[-1]["frame"] for keys in camera.values())
    frames = range(math.floor(first / ratio), math.ceil(last / ratio) + 1)
    direction, roll, size = [], [], []
    for frame in frames:
        value = evaluate_scene_state(shot, frame * ratio)["camera"]
        # Yaw and roll keep turning past 180 instead of jumping back a whole turn between Keyframes.
        yaw = value["yaw_deg"] if not direction else _nearest_turn(value["yaw_deg"], direction[-1]["yaw_deg"])
        direction.append({"yaw_deg": yaw, "pitch_deg": value["pitch_deg"]})
        roll.append(value["roll_deg"] if not roll else _nearest_turn(value["roll_deg"], roll[-1]))
        size.append({"hFOV_deg": value["hFOV_deg"]})
    lanes = {}
    for name, values, source in (("direction", direction, "rotation"), ("roll", roll, "rotation"), ("size", size, "fov")):
        moves = any(abs(a - b) > 1e-9 for value in values for a, b in zip(_lane_numbers(value), _lane_numbers(values[0])))
        keyframes = [
            {"frame": frame, "value": value, "easing": "hold" if _in_hold(camera[source], frame * ratio) else "auto"}
            for frame, value in zip(frames, values)
        ] if moves else []
        lanes[name] = {"value": values[0], "keyframes": keyframes}
    return lanes


# A 3D Sticker that the node adds has its origin here: 2 World units ahead of the World origin along -Z, the
# center of the ERP output without a Camera, which is taken from the origin at rotation 0.
WORLD_STICKER_POSITION = [0.0, 0.0, -2.0]

# Without a Camera (or with a hidden one), Studio takes its ERP output from the World origin at rotation 0 (ADR 0029).
ORIGIN_CAMERA = {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}


def _world_port_sticker(state: dict, sticker_id: str | None = None) -> dict:
    """The port Sticker for 3D media: `world`, at WORLD_STICKER_POSITION with rotation 0 and scale 1, so the
    content keeps its own orientation and its front (+Z) faces the origin."""
    raw = {"id": sticker_id or _unused_sticker_id(state["stickers"]), "placement": "world", "source": {"kind": "port"}, "position": {"value": WORLD_STICKER_POSITION}}
    return load_scene_state({"version": 2, "stickers": [raw]})["stickers"][0]


def _port_sticker(state: dict, sticker_state) -> dict:
    """The port Sticker appended when the state has none, placed by `sticker_state` when given."""
    lanes = {"direction": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0}}, "roll": {"value": 0.0}, "size": {"value": {"hFOV_deg": 30.0}}}
    parsed = load_sticker_state(sticker_state)
    if parsed is not None:
        lanes = _handoff_lanes(parsed, state["timeline"]["fps"])
    # Above every other sky Sticker, as the legacy node placed it (paint layers are not counted).
    z_index = max((sticker["z_index"] for sticker in state["stickers"] if sticker["placement"] == "sky"), default=-1) + 1
    raw = {"id": _unused_sticker_id(state["stickers"]), "source": {"kind": "port"}, **lanes, "z_index": z_index}
    return load_scene_state({"version": 2, "stickers": [raw]})["stickers"][0]


def _port_rgba(image: torch.Tensor) -> np.ndarray:
    image = image.detach().cpu().float().clamp(0.0, 1.0).numpy()
    alpha = image[..., 3:4] if image.shape[-1] == 4 else np.ones((*image.shape[:2], 1), dtype=np.float32)
    return np.concatenate([image[..., :3], alpha], axis=-1)


def _port_media(state: dict, sticker, sticker_state, warnings: list[str]) -> PortMedia | None:
    """The media on the sticker input, on the port Sticker. Appends the port Sticker to `state` when it is missing:
    a `world` one for 3D media (SPLAT or MESH), which Pose handoff does not place. A stored `sky` port Sticker with
    3D media is replaced in `state` by the `world` one under the same id, keeping its Clip range, visibility and
    lock (its sky Lanes do not apply to a world Sticker)."""
    if sticker is None:
        return None
    is_3d = isinstance(sticker, (Types.SPLAT, Types.MESH))
    index = next((i for i, item in enumerate(state["stickers"]) if item["source"]["kind"] == "port"), None)
    if index is None:
        if is_3d and load_sticker_state(sticker_state) is not None:
            warnings.append("sticker_state places only sky Stickers; the 3D Sticker is placed 2 ahead of the origin.")
        state["stickers"].append(_world_port_sticker(state) if is_3d else _port_sticker(state, sticker_state))
        index = len(state["stickers"]) - 1
    elif is_3d and state["stickers"][index]["placement"] == "sky":
        stored = state["stickers"][index]
        state["stickers"][index] = {**_world_port_sticker(state, stored["id"]), **{key: stored[key] for key in ("clip", "visible", "locked")}}
    port = state["stickers"][index]
    return PortMedia(port["id"], port["clip"], sticker, state["timeline"]["fps"])


def _resolve_sources(state: dict, port: PortMedia | None, warnings: list[str]) -> SceneSources:
    """Read every Sticker source into memory; the port Sticker's source holds the first frame of `port`, and
    3D media has none (`_render_frames` makes it for each pass). A hidden painting (`painting_visible`) is not drawn,
    its mask included. A source that cannot be read adds to `warnings`."""
    stickers = {}
    port_image = None if port is None or port.is_3d else _port_rgba(port.first_frame)
    for item in state["stickers"]:
        source = item["source"]
        if source["kind"] == "port":
            if port_image is not None:
                stickers[item["id"]] = StickerSource(port_image, item["crop"], item.get("z_index", 0), derive_vfov=True)
            continue
        rgba = load_source_rgba(source)
        if rgba is None:
            warnings.append(f"Could not read the source of Sticker {item['id']}; it is not drawn.")
            continue
        stickers[item["id"]] = StickerSource(rgba, item["crop"], item.get("z_index", 0))
    if not state["painting_visible"]:
        return SceneSources(stickers, empty_painting_state())
    return SceneSources(stickers, state["painting"], resolve_painting_layer_payload(state["painting_layer"]))


def _timing_video(bg, port: PortMedia | None):
    """The VIDEO that sets the Timeline fps and the output frames' times (ADR 0024): the opened background VIDEO,
    else the port's VIDEO, else None. Either has `frame_rate`, `times`, and `time_base`."""
    if isinstance(bg, OPENED_VIDEOS):
        return bg
    if port is not None and port.times is not None:
        return port
    return None


def _timeline_rate(state: dict, timing) -> Fraction:
    """The Timeline fps as a fraction: the rate of the VIDEO that sets the Timeline, or the recorded `timeline.fps`."""
    return Fraction(state["timeline"]["fps"] if timing is None else timing.frame_rate).limit_denominator(1_000_000)


def _output_times(given, rate: Fraction, length: int) -> list[Fraction]:
    """Each output frame's time in seconds, which (a) evaluates and the `video` output saves: the `given` times (the
    PTS of the VIDEO that sets the Timeline, or the upstream Scene's times), continuing at the Timeline fps `rate`
    after them, or evenly spaced without any."""
    if not given:
        return [index / rate for index in range(length)]
    times = list(given[:length])
    return times + [times[-1] + index / rate for index in range(1, length - len(times) + 1)]


def _layer_frames(state: dict, port: PortMedia | None, scene: SceneContent | None, times, fps: float, time_base) -> list[tuple]:
    """Per output frame at `times` (seconds), the Timeline frame of `state` to evaluate, the frame of its port media
    (`port.index_at`), and the item of its `scene` content (`batch_index`; None without `scene`). Times are read at
    the state's recorded `timeline.fps`, so its Keyframes keep their seconds at any Timeline `fps`; the state is not
    rebased."""
    stored_fps = state["timeline"]["fps"]
    # PTS are rounded to the time base, so a frame within half of it of a whole Timeline frame is that frame.
    tolerance = float(time_base) / 2 * stored_fps
    clip = state["scene"]["clip"]
    origin = clip["start"] - clip["in"]
    frames = []
    for time in times:
        frame = float(time * Fraction(stored_fps))
        if abs(frame - round(frame)) <= tolerance:
            frame = float(round(frame))
        frames.append((
            frame,
            None if port is None else port.index_at(frame, fps, tolerance),
            None if scene is None else batch_index(frame - origin, scene.count, fps, stored_fps),
        ))
    return frames


def _bg_frames(bg, times, time_base, timing: bool) -> list[int | None]:
    """The bg_media frame to draw at each of `times`, or None. An IMAGE batch maps one to one to the output frames
    and ends there; a single image shows throughout. A VIDEO that set the Timeline (`timing`) maps one to one too;
    another (an upstream Scene set it) shows its last frame that starts at or before each time, within half the time
    base of either, and nothing after its last frame has lasted one frame at its average rate."""
    if bg is None:
        return [None] * len(times)
    if not isinstance(bg, OPENED_VIDEOS):
        batch = int(bg.shape[0])
        return [index if index < batch else (0 if batch == 1 else None) for index in range(len(times))]
    if timing:
        return [index if index < len(bg.times) else None for index in range(len(times))]
    starts = [*bg.times, bg.times[-1] + 1 / bg.frame_rate]
    tolerance = max(Fraction(time_base), Fraction(bg.time_base)) / 2
    indices = [bisect.bisect_right(starts, time + tolerance) - 1 for time in times]
    return [index if 0 <= index < len(bg.times) else None for index in indices]


def _decide_timeline(state: dict, bg, port: PortMedia | None, scene: SceneContent | None = None, *,
                     upstream: PanoSceneValue | None = None) -> tuple[Fraction, list[Fraction], Fraction, tuple]:
    """(a) Timeline: the Timeline fps as a fraction, each output frame's time in seconds, the time base those times
    are rounded to (0: exact), and per output frame the bg_media frame to draw and, for each layer (those of
    `upstream`, then `state` with its `port` and `scene`), the Timeline frame to evaluate, its port media frame, and
    its `scene` item (`_layer_frames`). A `scene` batch, like an IMAGE batch on the port, ends its Clip range without a duration.
    The state's Camera, when it has one, shoots the frames and its Keyframes count for the length.

    `bg` is the bg_media IMAGE batch, an opened VIDEO, or None. Without `upstream`, the output frames follow the PTS
    of the VIDEO that sets the Timeline fps: the background VIDEO, or else the sticker VIDEO. With `upstream` (a
    Scene on the `scene` input, ADR 0029), they follow the upstream Scene's: its fps and times, continued at its fps
    when this state is longer. The length is then the longer of the upstream's and this state's own, or the state's
    `timeline.length` when it has one. Only this node's own `bg_media` counts for its own length; an upstream
    background is already in the upstream's.
    """
    stored_fps = state["timeline"]["fps"]
    if upstream is None:
        timing = _timing_video(bg, port)
        rate = _timeline_rate(state, timing)
        given, time_base = ([], 0) if timing is None else (timing.times, timing.time_base)
    else:
        rate, given, time_base = upstream.rate, upstream.times, upstream.time_base
    fps = float(rate)
    # An upstream background does not set the length: the upstream Scene's length already counts it.
    own_bg = bg if upstream is None or upstream.bg_media is None else None
    video = isinstance(own_bg, OPENED_VIDEOS)
    batch = 0 if own_bg is None or video else int(own_bg.shape[0])

    def output_frames(frame):
        return math.floor(frame * fps / stored_fps + 0.5)

    clips = [state["scene"]["clip"], *(sticker["clip"] for sticker in state["stickers"])]
    clip_ends = [clip["start"] + clip["duration"] for clip in clips if clip["duration"] is not None]
    if port is not None and port.clip["duration"] is None:
        # Without a duration, the port Sticker ends with media that has frames.
        port_end = port.end(fps)
        if port_end is not None:
            clip_ends.append(port_end)
    scene_clip = state["scene"]["clip"]
    if scene is not None and scene.count > 1 and scene_clip["duration"] is None:
        clip_ends.append(scene_clip["start"] - scene_clip["in"] + scene.count * stored_fps / fps)
    # The latest Keyframe over the Camera's Lanes.
    last_key = None
    if state["camera"] is not None:
        last_key = max((state["camera"][name]["keyframes"][-1]["frame"] for name, _value in CAMERA_LANES if state["camera"][name]["keyframes"]), default=None)
    if state["timeline"]["length"]:
        length = max(1, output_frames(state["timeline"]["length"]))
    else:
        if video:
            # A background VIDEO that does not set the Timeline lasts until its last frame ends.
            length = len(own_bg.times) if upstream is None else max(1, math.floor(float(own_bg.times[-1] + 1 / own_bg.frame_rate) * fps + 0.5))
        elif batch > 1:
            length = batch
        elif clip_ends:
            length = max(1, output_frames(max(clip_ends)))
        elif last_key is not None:
            length = max(1, output_frames(last_key) + 1)
        else:
            length = 1
        if upstream is not None:
            length = max(length, len(upstream.frames))

    times = _output_times(given, rate, length)
    layers = [] if upstream is None else [(layer.state, layer.port, _scene_content(layer.scene)) for layer in upstream.layers]
    layers.append((state, port, scene))
    per_layer = [_layer_frames(layer_state, layer_port, content, times, fps, time_base) for layer_state, layer_port, content in layers]
    frames = tuple(zip(_bg_frames(bg, times, time_base, upstream is None), zip(*per_layer)))
    return rate, times, time_base, frames


def _port_source_at(active: bool, index: int | None, frames, template: StickerSource | None, current):
    """The port Sticker's source showing frame `index` of `frames` (item `index` of 3D content), or None where it
    is not drawn. `current` is the previous result, kept while the frame repeats so that it is not converted again."""
    if not active or index is None:
        return None
    if current is not None and current.frame == index:
        return current
    if isinstance(frames, SceneContent):
        return ContentSource(frames, index)
    image = frames[index]
    return None if image is None else replace(template, rgba=_port_rgba(image), frame=index)


# Floats per output pixel that a frame keeps on the device at once beyond its sources: the rays and where they look,
# the Sky's layers' samples with their footprints and filter weights, the background's samples, the World layer, and
# the color, mask, and depth. Measured peaks reach about 25 (ERP 4096 x 2048, the Sky drawn at every pixel) with the
# sources counted as below (`docs/render-contract.md`); 32 leaves a margin.
RENDER_FLOATS_PER_PIXEL = 32
# A source on the device is float32 with the ripmap levels `_sample_filtered` makes, up to three times its size.
DEVICE_SOURCE_FACTOR = 4


def _render_memory(built: PanoSceneValue, bg, size: tuple[int, int]) -> int:
    """The bytes a render pass of `built` at `size` (width, height) needs on the device, by `docs/render-contract.md`:
    the per-pixel working set of a frame, and every source it uploads as float32 with its ripmap levels (one
    background frame, the Sticker sources, the uploaded paint layers) or as given (the 3D media)."""
    sources = 0
    if bg is not None:
        frame = bg.first_frame if isinstance(bg, OPENED_VIDEOS) else bg[0]
        sources += frame.shape[0] * frame.shape[1] * 3 * 4
    media = 0
    for layer in built.layers:
        sources += sum(source.rgba.shape[0] * source.rgba.shape[1] * 4 * 4 for source in layer.sources.stickers.values())
        sources += sum(array.size * 4 for array in _payload_arrays(layer.sources.painting_layer))
        media += nbytes(layer.scene) + (nbytes(layer.port.media) if layer.port is not None and layer.port.is_3d else 0)
    return size[0] * size[1] * RENDER_FLOATS_PER_PIXEL * 4 + sources * DEVICE_SOURCE_FACTOR + media


def _payload_arrays(payload: dict | None) -> list:
    """The rasters of a painting payload (`resolve_painting_layer_payload`)."""
    if not payload:
        return []
    return [array for array in (payload.get("paint"), payload.get("mask"), *payload.get("groups", {}).values()) if array is not None]


def _render_frames(built: PanoSceneValue, bg, capture, device, size: tuple[int, int]):
    """(b) Render each output frame of the Scene `built` with the shared render function: each layer's state evaluated
    at its Timeline frame, its port Sticker's source at the frame of its `port` and its `scene` item that (a) chose,
    as one `RenderLayer` each. `capture` maps the evaluated state of the last layer (the node that shoots) to the
    Camera value and the Projection to draw it with; the Projection's size is the same for every frame.
    `bg` is the bg_media IMAGE, an opened VIDEO, or None; the port media (and its content when 3D) and the
    `scene` content are opened for this pass, so nothing they put on `device` outlives it.
    Yields the color (H, W, 3) and mask (H, W) of each frame on `device`; a frame that `render_frame` reused is
    the same tensors as the previous one. Before the first frame, when `device` has less free memory than the pass
    needs (`_render_memory` at the output `size`), ComfyUI frees that much, unloading models only as far as it takes."""
    if not comfy.model_management.is_device_cpu(device):
        required = _render_memory(built, bg, size)
        if comfy.model_management.get_free_memory(device) < required:
            comfy.model_management.free_memory(required, device)
    bg_width = None
    if bg is not None:
        bg_width = (bg.first_frame if isinstance(bg, OPENED_VIDEOS) else bg).shape[-2]
    opened = []
    for layer in built.layers:
        port = layer.port
        port_frames = None if port is None else port.frames()
        others = layer.sources.stickers if port is None else {key: value for key, value in layer.sources.stickers.items() if key != port.sticker_id}
        opened.append((port_frames, others, _scene_content(layer.scene)))
    cache = {}
    port_sources = [None] * len(built.layers)
    for bg_index, entries in built.frames:
        # Reading the `video` output renders in another node; Cancel stops it between frames.
        comfy.model_management.throw_exception_if_processing_interrupted()
        drawn = []
        for index, (layer, (port_frames, others, content), (frame, port_index, scene_index)) in enumerate(zip(built.layers, opened, entries)):
            evaluated = evaluate_scene_state(layer.state, frame)
            sources = layer.sources
            port = layer.port
            if port is not None:
                active = next(item["active"] for item in evaluated["stickers"] if item["id"] == port.sticker_id)
                port_sources[index] = _port_source_at(active, port_index, port_frames, sources.stickers.get(port.sticker_id), port_sources[index])
                sources = replace(sources, stickers=others if port_sources[index] is None else {**others, port.sticker_id: port_sources[index]})
            drawn.append(RenderLayer(evaluated, sources, content, scene_index))
        camera, projection = capture(drawn[-1].evaluated)
        color, mask, _depth = render_frame(
            drawn,
            camera,
            projection,
            bg=None if bg_index is None else bg[bg_index],
            bg_key=bg_index,
            bg_color=built.bg_color,
            device=device,
            cache=cache,
            bg_width=bg_width,
        )
        yield color, mask


def _open_media(media, name: str):
    """bg_media as `_decide_timeline` and `_render_frames` read it: a VIDEO opened by `open_video`, else as given."""
    return open_video(media, name) if isinstance(media, Input.Video) else media


def _render_outputs(built: PanoSceneValue, bg, capture, size: tuple[int, int]):
    """(c) The first output frame's IMAGE and MASK of the Scene `built`, rendered now from the opened `bg`, and the
    `video` of every frame, rendered when it is read with `bg_media` and the `scene` content opened again for
    each pass."""
    color, mask = next(_render_frames(built, bg, capture, comfy.model_management.get_torch_device(), size))
    audio = bg.audio(len(built.frames) / built.fps) if isinstance(bg, OPENED_VIDEOS) else None

    def render(device):
        return _render_frames(built, _open_media(built.bg_media, "bg_media"), capture, device, size)

    video = SceneVideo(render, *size, built.rate, list(built.times), built.time_base, audio)
    return color[None].to("cpu", copy=True), mask[None].to("cpu", copy=True), video


def _bg_media_ui(bg_media, bg, fps: float) -> dict:
    """The `ui` of `bg_media`: its first frame, and an MP4 when it has two or more frames. `bg` is the opened VIDEO;
    an IMAGE batch plays at `fps`. The MP4 is made once per input and reused while the input stays the same."""
    contract = _get_preview_ui_contract("stickers_bg")
    if isinstance(bg_media, Input.Video):
        return _video_ui(bg_media, bg, float(bg.frame_rate), len(bg.times), contract)
    ui_ret = _init_ui_preview(bg_media, key=contract["image"])
    if bg_media.shape[0] > 1:
        _merge_ui_payload(ui_ret, _batch_mp4_ui(bg_media, "bg_media", fps, contract))
    return ui_ret


def _batch_mp4_ui(images: torch.Tensor, name: str, fps: float, contract: dict) -> dict:
    """The `ui` of the editor MP4 of an IMAGE batch, evenly spaced at `fps`, made once per batch and fps."""
    batch = MaterializedVideo(Types.VideoComponents(images=images, frame_rate=Fraction(round(fps * 1000), 1000)), name)
    cache_key = ("editor_mp4", _tensor_cache_identity(images), float(fps))
    return _editor_mp4_ui(cache_key, lambda: encode_editor_mp4(batch, loop_progress()), fps, len(batch.times), contract)


def _editor_frames_ui(images: torch.Tensor, fps: float, contract: dict) -> dict:
    """The `ui` of an RGBA IMAGE batch as one PNG per image, saved once per batch and reused while the files are
    there. Each image is a file of its own, so a long batch costs a PNG per image in temp."""
    cache_key = ("editor_frames", _tensor_cache_identity(images))
    paths = NODE_RUNTIME.cache.get("video", cache_key)
    if paths is None or not all(path.exists() for path in paths):
        paths = save_editor_frames(images, loop_progress())
        NODE_RUNTIME.cache.put("video", cache_key, paths)
    return make_frames_ui_payload(paths, fps, frames_key=contract["frames"], meta_key=contract["meta"])


def _port_media_ui(port: PortMedia, fps: float, time_base) -> dict:
    """The `ui` of the sticker media: its first frame, and an MP4 for the editor to follow the Timeline with when it
    has two or more frames, made like the bg_media one. An RGBA IMAGE batch is PNGs instead (`_editor_frames_ui`),
    since an MP4 drops the alpha that the `video` output keeps. The meta tells how a Timeline frame maps to the MP4 as
    `PortMedia.index_at` maps it: `kind`, `duration` (where the media ends), and for a VIDEO `pts_tolerance`, the
    seconds before a PTS that count as its frame (half the time base of the media or `time_base`, that of the
    Timeline's times). 3D media is its editor files instead (`_scene_ui`)."""
    if port.is_3d:
        return _scene_ui(port.media, "pano_sticker_files", "pano_sticker_meta")
    contract = _get_preview_ui_contract("stickers_input")
    ui_ret = _init_ui_preview(port.first_frame[None], key=contract["image"])
    video = port.media
    if port.times is None:
        if video.shape[0] < 2:
            return ui_ret
        payload = _editor_frames_ui(video, fps, contract) if video.shape[-1] == 4 else _batch_mp4_ui(video, "sticker", fps, contract)
        payload[contract["meta"]][0]["kind"] = "IMAGE"
    else:
        if len(port.times) < 2:
            return ui_ret
        # The VIDEO is opened again only to make the MP4; PortMedia does not keep it open.
        cache_key = ("editor_mp4", _video_cache_identity(video, port.streamed))
        payload = _editor_mp4_ui(cache_key, lambda: _editor_mp4(video, open_video(video, "sticker")), float(port.frame_rate), len(port.times), contract)
        time_base = max(port.time_base, time_base)
        payload[contract["meta"]][0].update(kind="VIDEO", duration=float(port.times[-1] + 1 / port.frame_rate), pts_tolerance=float(time_base) / 2)
    return _merge_ui_payload(ui_ret, payload)


SCENE_FILE_TYPES = {"ply": "application/ply", "glb": "model/gltf-binary"}


def _scene_ui(scene, files_key: str = "pano_scene_files", meta_key: str = "pano_scene_meta") -> dict:
    """The `ui` of the `scene` input, or of 3D media on the `sticker` input under the given keys: a temp file per
    item for the editor (`write_editor_files`), None for an empty item, and the kind it loads. The files are written
    once per input and reused while they are there, keyed by the input and the tensors it is read from (a
    MOGE_GEOMETRY is a dict), so the same SPLAT or MESH on both inputs shares them."""
    if isinstance(scene, dict):
        cache_key = tuple((key, _tensor_cache_identity(scene[key])) for key in ("points", "mask", "image", "intrinsics") if key in scene)
    else:
        positions = scene.positions if isinstance(scene, Types.SPLAT) else scene.vertices
        cache_key = (NODE_RUNTIME.object_identity(scene), _tensor_cache_identity(positions))
    saved = NODE_RUNTIME.cache.get("scene_files", cache_key)
    if saved is None or not all(path is None or path.exists() for path in saved[1]):
        saved = write_editor_files(scene, loop_progress())
        NODE_RUNTIME.cache.put("scene_files", cache_key, saved)
    kind, paths = saved
    files = [None if path is None else entry_from_path(path, media_type=SCENE_FILE_TYPES[path.suffix[1:]]) for path in paths]
    return {files_key: files, meta_key: [{"kind": kind}]}


def _build_scene(state_json: str, bg_media, scene, sticker, sticker_state, bg_color, coverage, warnings: list[str]):
    """The Scene that Studio builds from its inputs, as the PANO_SCENE value: the state with the port Sticker
    appended when missing, its sources, the Timeline (counting the state's Camera), and the media `ui` for the
    editors. Also returns the opened bg_media and the port Sticker the state stored before (None without one).
    A source that cannot be read adds to `warnings`.

    A Scene on the `scene` input (ADR 0029) puts its layers under this state's, and sets the Timeline fps.
    Its background, when it has one, is used in place of `bg_media`, `coverage`, and `bg_color`, with a warning
    when `bg_media` is connected too."""
    upstream = scene if isinstance(scene, PanoSceneValue) else None
    scene = None if upstream is not None else _read_scene_file(scene, "scene")
    sticker = _read_scene_file(sticker, "sticker")
    state = load_scene_state(state_json)
    stored_port = next((item for item in state["stickers"] if item["source"]["kind"] == "port"), None)
    port = _port_media(state, sticker, sticker_state, warnings)
    sources = _resolve_sources(state, port, warnings)
    upstream_bg = upstream is not None and upstream.bg_media is not None
    if upstream_bg:
        if bg_media is not None:
            warnings.append("bg_media is not used: the scene input has a background of its own.")
        bg_media, coverage, bg_rgb = upstream.bg_media, upstream.coverage, upstream.bg_color
    else:
        coverage = normalize_coverage(coverage)
        bg_rgb = tuple(_hex_color_to_rgb01(PanoramaStickersNode._normalize_hex_color(bg_color)).tolist())
    bg = _open_media(bg_media, "bg_media")
    rate, times, time_base, frames = _decide_timeline(state, bg, port, _scene_content(scene), upstream=upstream)
    fps = float(rate)
    # The `ui` shows the input media in the editor and on the node, under the legacy node's keys.
    layer_ui = {}
    if scene is not None:
        _merge_ui_payload(layer_ui, _scene_ui(scene))
    if port is not None:
        _merge_ui_payload(layer_ui, _port_media_ui(port, fps, time_base))
    if upstream_bg:
        bg_ui = upstream.bg_ui
    else:
        bg_ui = {} if bg_media is None else _bg_media_ui(bg_media, bg, fps)
    media_ui = {**layer_ui}
    if upstream is None:
        _merge_ui_payload(media_ui, bg_ui)
        if _timing_video(bg, port) is not None:
            # The editor rebases the state to this fps and does not let it be edited (ADR 0024).
            media_ui["pano_timeline_fps"] = [fps]
    else:
        _merge_ui_payload(media_ui, _upstream_ui(upstream, bg_ui if upstream_bg else None))
        if not upstream_bg:
            _merge_ui_payload(media_ui, bg_ui)
        # The upstream Scene sets the Timeline fps; the editor shows its length too.
        media_ui["pano_timeline_fps"] = [fps]
        media_ui["pano_timeline_frames"] = [len(frames)]
    layer = SceneLayer(state, sources, port, scene, layer_ui)
    layers = (layer,) if upstream is None else (*upstream.layers, layer)
    built = PanoSceneValue(layers, bg_media, coverage, bg_rgb, rate, tuple(times), time_base, frames, bg_ui, media_ui)
    return built, bg, stored_port


def _upstream_ui(upstream: PanoSceneValue, bg_ui: dict | None) -> dict:
    """The `ui` that shows the layers of the Scene on the `scene` input in the editor, apart from the node's own
    media: `pano_upstream_layers` with each layer's state and media `ui` from the farthest upstream, and the
    upstream background (`bg_ui`, None when it has none) under `pano_upstream_` keys with its coverage and color."""
    ui = {"pano_upstream_layers": [{"state": layer.state, "ui": layer.media_ui} for layer in upstream.layers]}
    if bg_ui is not None:
        ui.update({key.replace("pano_", "pano_upstream_", 1): value for key, value in bg_ui.items()})
        ui["pano_upstream_coverage"] = [upstream.coverage]
        ui["pano_upstream_bg_color"] = [list(upstream.bg_color)]
    return ui


def _scene_output(built: PanoSceneValue) -> PanoSceneValue:
    """The `scene` output of Studio: `built` with its own layer's state without the Camera (ADR 0029)."""
    layer = built.layers[-1]
    return replace(built, layers=(*built.layers[:-1], replace(layer, state={**layer.state, "camera": None})))


def _port_pose_ui(state: dict, port: PortMedia | None, stored_port: dict | None) -> dict:
    """The `ui` with the pose the port Sticker was added at, for the editor to add it to the state the same way:
    with the Keyframes of a Camera that moved (Pose handoff), or the transform of a 3D one, `replace` when it
    replaced the stored sky port Sticker. Empty when the state already had the port Sticker as it is drawn."""
    if port is None:
        return {}
    added = next(item for item in state["stickers"] if item["id"] == port.sticker_id)
    if added is stored_port:
        return {}
    if port.is_3d:
        pose = {"placement": "world", **{name: added[name]["value"] for name in ("position", "rotation", "scale")}}
        if stored_port is not None:
            pose["replace"] = True
    else:
        pose = {
            **added["direction"]["value"],
            "roll_deg": added["roll"]["value"],
            "hFOV_deg": added["size"]["value"]["hFOV_deg"],
            "keyframes": {name: added[name]["keyframes"] for name in ("direction", "roll", "size")},
        }
    return {"pano_sticker_input_pose": [pose]}


def _camera_sticker_state(state: dict, width: int, height: int) -> str:
    """`sticker_state` v2: each Lane of the state's Camera as its Keyframes at the fps the state records them at
    (not rebased to the Timeline fps, which would move them by up to half a frame), or its value as one Keyframe."""
    camera = state["camera"]
    lanes = {
        name: camera[name]["keyframes"] or [{"frame": 0, "value": camera[name]["value"], "easing": list(DEFAULT_EASING)}]
        for name, _value in CAMERA_LANES
    }
    payload = {"kind": STICKER_STATE_KIND, "version": 2, "fps": state["timeline"]["fps"], "camera": lanes, "source_aspect": width / height}
    return json.dumps(payload, ensure_ascii=True, separators=(",", ":"))


STUDIO_OUTPUT_SIZES = ["1024", "1536", "2048", "2560", "3072", "4096", "auto"]
STUDIO_DEFAULT_ERP_WIDTH = 2048
STUDIO_MAX_OUTPUT_SIDE = 4096


def _even_side(value: float) -> int:
    return max(2, 2 * math.floor(value / 2 + 0.5))


def _studio_camera(state: dict) -> dict | None:
    """The Camera that shoots Panorama Studio's output: the state's, or None without one or when it is hidden. A hidden
    Camera stays in the state and shoots as no Camera does."""
    camera = state["camera"]
    return camera if camera is not None and camera["visible"] else None


def _studio_output_size(state: dict, frames, output_size: str, coverage: int, bg, warnings: list[str]) -> tuple[int, int, tuple | None]:
    """The Studio output's size (ADR 0029). `output_size` picks the width of the whole (360) ERP; auto is the
    bg_media width over 360 degrees (twice it for a 180 one), or 2048 with a warning without bg_media. Without a
    Camera (`_studio_camera`), or with an `erp` one, the output is that ERP over `coverage`. A `perspective` Camera is
    2 f tan(hFOV_max / 2) wide with f = width / 2pi (the ERP's pixels per radian at the equator) and hFOV_max the
    widest hFOV over the Timeline's `frames` (of the last layer, `state`), and the width over its aspect high, both even; a longest side past
    STUDIO_MAX_OUTPUT_SIDE is reduced to it, keeping the aspect, with a warning. Returns the width, the height, and the
    size before that reduction (None when it was not reduced)."""
    if output_size != "auto":
        width = int(output_size)
    elif bg is None:
        warnings.append(f"output_size is auto, but bg_media is not connected; using {STUDIO_DEFAULT_ERP_WIDTH} instead.")
        width = STUDIO_DEFAULT_ERP_WIDTH
    else:
        width = (bg.first_frame if isinstance(bg, OPENED_VIDEOS) else bg).shape[-2] * 360 // coverage
    camera = _studio_camera(state)
    if camera is None or camera["projection"] == "erp":
        return width * coverage // 360, width // 2, None
    # Only the Camera is evaluated; the Stickers do not change its hFOV.
    shot = {**state, "stickers": []}
    hfov = max(evaluate_scene_state(shot, layers[-1][0])["camera"]["hFOV_deg"] for _bg_index, layers in frames)
    shot_width = width / math.pi * math.tan(math.radians(hfov) / 2)
    shot_height = shot_width / camera["aspect"]
    size = (_even_side(shot_width), _even_side(shot_height))
    if max(size) <= STUDIO_MAX_OUTPUT_SIDE:
        return *size, None
    scale = STUDIO_MAX_OUTPUT_SIDE / max(shot_width, shot_height)
    reduced = (_even_side(shot_width * scale), _even_side(shot_height * scale))
    warnings.append(f"The Camera output would be {size[0]}x{size[1]}; it is reduced to {reduced[0]}x{reduced[1]} "
                    f"(the longest side is at most {STUDIO_MAX_OUTPUT_SIDE}).")
    return *reduced, size


def _studio_run_key(state_json: str, output_size: str, coverage: str, bg_color: str) -> str:
    """The key of the inputs a Studio run's size and output came from: FNV-1a (32 bit) over the code points of the
    four values joined by NUL, as `studioRunKey` (web_src/pano_studio_status.js) makes it, so that the node surface
    shows the run's size and output only while they are unchanged."""
    value = 0x811C9DC5
    for char in f"{state_json}\0{output_size}\0{coverage}\0{bg_color}":
        value = ((value ^ ord(char)) * 0x01000193) & 0xFFFFFFFF
    return f"{value:08x}"


class PanoramaStudioNode(io.ComfyNode):
    """Builds the Scene and shoots it (ADR 0029): the ERP from the World origin at rotation 0 without a Camera (or with
    a hidden one), else through the state's Camera, by its `projection`."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaStudio",
            display_name="Panorama Studio",
            category="Panorama Suite",
            inputs=[
                io.MultiType.Input(io.Image.Input("bg_media"), types=[io.Video], optional=True),
                io.MultiType.Input(io.Image.Input("sticker"), types=[io.Video, io.Mesh, io.Splat, *MESH_FILE_TYPES, *SPLAT_FILE_TYPES], optional=True),
                io.String.Input("sticker_state", default="", multiline=False, dynamic_prompts=False, optional=True, force_input=True),
                io.MultiType.Input("scene", types=[io.Splat, io.Mesh, *MESH_FILE_TYPES, *SPLAT_FILE_TYPES, MoGeGeometry, PanoScene], optional=True),
                io.Color.Input("bg_color", default="#00ff00"),
                io.Combo.Input("coverage", options=["360", "180"], default="360"),
                io.Combo.Input("output_size", options=STUDIO_OUTPUT_SIZES, default="2048"),
                io.String.Input("state_json", default="", multiline=True, dynamic_prompts=False, advanced=True),
            ],
            outputs=[
                io.Image.Output("first_frame"),
                io.Mask.Output("first_frame_mask"),
                io.Video.Output("video"),
                PanoScene.Output("scene"),
                io.String.Output("sticker_state"),
            ],
            # An output node runs on every queue, so the editor receives the media in the `ui` even
            # when nothing downstream consumes the outputs.
            is_output_node=True,
        )

    @classmethod
    def execute(cls, bg_color, coverage, output_size, state_json, bg_media=None, sticker=None, sticker_state="", scene=None):
        warnings = []
        built, bg, stored_port = _build_scene(state_json, bg_media, scene, sticker, sticker_state, bg_color, coverage, warnings)
        state = built.layers[-1].state
        width, height, reduced_from = _studio_output_size(state, built.frames, output_size, built.coverage, bg, warnings)
        camera = _studio_camera(state)
        if camera is None or camera["projection"] == "erp":
            projection = Projection.erp(width, height, built.coverage)

            def capture(evaluated):
                # Without a Camera, the ERP is taken from the World origin at rotation 0.
                return ORIGIN_CAMERA if camera is None else evaluated["camera"], projection
        else:
            def capture(evaluated):
                return evaluated["camera"], Projection.perspective(width, height, evaluated["camera"]["hFOV_deg"], built.coverage)

        image, mask, video = _render_outputs(built, bg, capture, (width, height))
        # Only a perspective Camera hands its pose to a Sticker (Pose handoff).
        handoff = _camera_sticker_state(state, width, height) if camera is not None and camera["projection"] == "perspective" else ""
        ui_ret = {**built.media_ui, **_port_pose_ui(state, built.layers[-1].port, stored_port)}
        # The node surface shows the size output_size auto gives from it (None: no bg_media); the editor's MP4 may be
        # smaller than the VIDEO, and an upstream Scene's bg_media is not on this node.
        ui_ret["pano_bg_width"] = [None if bg is None else int((bg.first_frame if isinstance(bg, OPENED_VIDEOS) else bg).shape[-2])]
        # The size the run gave, which media and an upstream Scene can make differ from what the surface works out.
        ui_ret["pano_output_size"] = [{"width": width, "height": height, "capped": reduced_from is not None,
                                       "reduced_from": None if reduced_from is None else list(reduced_from),
                                       "key": _studio_run_key(state_json, output_size, coverage, bg_color)}]
        if camera is None or camera["projection"] == "erp":
            # An ERP output holds all the run drew, so the node surface shows it while the run is current.
            ui_ret["pano_output_erp"] = [{**entry_from_path(save_output_png(image[0]), media_type="image/png"),
                                          "coverage": built.coverage}]
        _flush_warnings(ui_ret, "pano_sticker_warnings", warnings)
        # The `scene` output is the World that is shot, without the Camera (ADR 0029).
        return io.NodeOutput(image, mask, video, _scene_output(built), handoff, ui=ui_ret)


CUTOUT_MAX_OUTPUT_SIDE = 4096


class PanoramaCutoutNode(io.ComfyNode):
    DEFAULT_LONG_SIDE = 1024

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaCutout",
            display_name="Panorama Cutout",
            category="Panorama Suite",
            inputs=[
                io.Image.Input("erp_image"),
                io.Combo.Input(
                    "coverage",
                    options=["360", "180"],
                    default="360",
                ),
                io.String.Input(
                    "state_json",
                    default="",
                    multiline=True,
                    dynamic_prompts=False,
                    advanced=True,
                ),
                io.Float.Input("output_megapixels", default=1.0, min=0.01, step=0.05),
            ] + _common_video_preview_inputs(),
            outputs=[
                io.Image.Output("rect_image", display_name="rect_image"),
                io.String.Output("sticker_state_json", display_name="sticker_state"),
                io.Mask.Output("mask", display_name="mask"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @classmethod
    def _derive_output_size_from_fov(cls, hfov_val, vfov_val):
        return calculate_output_dimensions(
            hfov_deg=hfov_val,
            vfov_deg=vfov_val,
            long_side=cls.DEFAULT_LONG_SIDE,
            max_side=CUTOUT_MAX_OUTPUT_SIDE,
        )

    @staticmethod
    def _payload_has_layers(payload: dict | None) -> bool:
        return isinstance(payload, dict) and (
            payload.get("paint") is not None
            or payload.get("mask") is not None
            or bool(payload.get("groups"))
        )

    @classmethod
    def execute(cls, erp_image, coverage, state_json, output_megapixels=1.0, fps=24.0, audio=None, unique_id=None):
        output_megapixels = max(0.01, finite_float(output_megapixels, 1.0))
        fps_value = max(1.0, finite_float(fps, 24.0))
        state = merge_state(state_in=None, internal_state=state_json)
        coverage_value = normalize_coverage(coverage)
        state["coverage"] = coverage_value
        shots = state.get("shots", []) if isinstance(state, dict) else []
        src_batch = _resolve_cutout_source_batch(erp_image)
        src = src_batch[0]
        batch_frames = int(src_batch.shape[0]) if hasattr(src_batch, "shape") and len(src_batch.shape) == 4 else 1

        preview_contract = _get_preview_ui_contract("default")
        input_video_contract = _get_preview_ui_contract("input_video")
        ui_ret = _init_ui_preview(erp_image, key=preview_contract["image"])
        if batch_frames > 1:
            source_identity = _tensor_cache_identity(erp_image)
            input_video_cache_key = (
                "cutout_input_video",
                source_identity,
                float(fps_value),
                _audio_signature(audio),
            )
            NODE_RUNTIME.append_cached_video(
                ui_ret,
                erp_image,
                fps_value,
                audio,
                cache_key=input_video_cache_key,
                warning_key="pano_cutout_warnings",
                video_key=input_video_contract["video"],
                meta_key=input_video_contract["meta"],
            )
        if not shots:
            video_span = batch_frames if batch_frames > 1 else 0
            progress = _NodeProgress(unique_id, 1 + batch_frames + video_span + 1, label="PanoramaCutout")
            progress.advance(1)
            progress.stage("Preparing passthrough frames")
            oh = int(src.shape[0])
            ow = int(src.shape[1])
            painting_payload = resolve_painting_layer_payload(
                state.get("painting_layer"),
                erp_width=ow,
                erp_height=oh,
            )
            painting_state = state.get("painting")
            _has_display_entries = bool(_get_display_list_entries(state))
            _payload_has_content = cls._payload_has_layers(painting_payload)
            _has_renderables = painting_state_has_renderables(painting_state)

            if not _has_display_entries and not _payload_has_content and not _has_renderables:
                # Pure passthrough: nothing to composite — reuse input directly
                out_batch = src_batch.astype(np.float32, copy=False)
                mask_bw = np.zeros((oh, ow), dtype=np.float32)
                progress.set(1 + batch_frames)
            else:
                progress.stage("Compositing passthrough frames")
                overlay_rgba, mask_bw, _overlay_stats_unused, _used_group_layers_unused = _build_overlay_erp_rgba_and_mask(
                    state,
                    erp_width=ow,
                    erp_height=oh,
                    painting_payload=painting_payload,
                    base_dir=Path.cwd(),
                    quality="export",
                    ui_ret=ui_ret,
                    warning_key="pano_cutout_warnings",
                )
                # Pre-allocate to avoid list accumulation + np.stack peak
                out_batch = np.empty((batch_frames, oh, ow, 3), dtype=np.float32)
                for index, frame in enumerate(src_batch):
                    frame_out = frame.astype(np.float32, copy=False)
                    if overlay_rgba is not None:
                        frame_out = alpha_composite_over_rgb(frame_out, overlay_rgba)
                    out_batch[index] = frame_out
                    progress.set(1 + index + 1)
            if mask_bw is None:
                mask_bw = np.zeros((oh, ow), dtype=np.float32)

            encode_start = progress.value
            if video_span > 0:
                progress.stage("Encoding preview video")
            # IMAGE/mask output
            out_t, mask_t, _ = _make_batched_image_and_mask_outputs(out_batch, mask_bw)
            # VIDEO: pass as torch tensor so encode_frames_to_mp4 uses the streaming path
            # (no full-batch np.clip upfront → progress callbacks fire immediately)
            _append_preview_video_from_batch(
                ui_ret,
                torch.from_numpy(np.ascontiguousarray(out_batch, dtype=np.float32)),
                fps_value,
                audio,
                warning_key="pano_cutout_warnings",
                video_key=preview_contract["video"],
                meta_key=preview_contract["meta"],
                progress_callback=progress.frame_callback(encode_start, video_span) if video_span > 0 else None,
            )
            progress.set(encode_start + video_span)
            progress.stage("Done")
            progress.finish()
            return io.NodeOutput(out_t, '{"stickers":[],"version":1}', mask_t, ui=ui_ret)

        shot = shots[0]
        yaw = finite_float(shot.get("yaw_deg", 0.0), 0.0)
        pitch = finite_float(shot.get("pitch_deg", 0.0), 0.0)
        hfov = float(np.clip(finite_float(shot.get("hFOV_deg", 90.0), 90.0), 1.0, 179.0))
        vfov = float(np.clip(finite_float(shot.get("vFOV_deg", 60.0), 60.0), 1.0, 179.0))
        roll = finite_float(shot.get("roll_deg", 0.0), 0.0)
        ow, oh = calculate_dimensions_from_megapixels(
            output_megapixels, hfov, vfov, max_side=CUTOUT_MAX_OUTPUT_SIDE
        )

        sticker_state_json = _build_sticker_state_json(shot, ow, oh)
        try:
            video_span = batch_frames if batch_frames > 1 else 0
            progress = _NodeProgress(unique_id, 1 + batch_frames + video_span + 1, label="PanoramaCutout")
            progress.advance(1)
            source_identity = _tensor_cache_identity(erp_image)
            cutout_render_signature = (
                source_identity,
                hashlib.sha1(str(state_json or "").encode("utf-8")).hexdigest(),
                int(coverage_value),
                int(ow),
                int(oh),
            )
            progress.stage("Sampling cutout frames")
            painting_payload = resolve_painting_layer_payload(
                state.get("painting_layer"),
                erp_width=int(src.shape[1]),
                erp_height=int(src.shape[0]),
            )
            sampling_map = build_cutout_sampling_map(
                src.shape,
                yaw,
                pitch,
                hfov,
                vfov,
                roll,
                ow,
                oh,
                coverage_value,
            )
            out_batch = np.empty((batch_frames, oh, ow, 3), dtype=np.float32)
            for index, frame in enumerate(src_batch):
                out_batch[index] = sample_cutout_from_sampling_map(frame, sampling_map)
                progress.set(1 + index + 1)
            overlay_rgba, overlay_mask_bw, _overlay_stats_unused, _used_group_layers_unused = _build_overlay_erp_rgba_and_mask(
                state,
                erp_width=int(src.shape[1]),
                erp_height=int(src.shape[0]),
                painting_payload=painting_payload,
                base_dir=Path.cwd(),
                quality="export",
                ui_ret=ui_ret,
                warning_key="pano_cutout_warnings",
            )
            if isinstance(overlay_rgba, np.ndarray):
                overlay_cutout = _sample_overlay_rgba_from_sampling_map(overlay_rgba, sampling_map)
                for index in range(batch_frames):
                    out_batch[index] = alpha_composite_over_rgb(out_batch[index], overlay_cutout)
            # The mask is the uploaded one as float (`_build_overlay_erp_rgba_and_mask`), else the state's strokes drawn.
            mask_bw = sample_cutout_from_sampling_map(overlay_mask_bw, sampling_map)
            encode_start = progress.value
            out_t, mask_t, _out_batch_unused = _make_batched_image_and_mask_outputs(out_batch, mask_bw)
            if video_span > 0:
                cutout_video_key = (
                    "cutout_video",
                    cutout_render_signature,
                    float(fps_value),
                    _audio_signature(audio),
                )
                NODE_RUNTIME.append_cached_video(
                    ui_ret,
                    out_batch,
                    fps_value,
                    audio,
                    cache_key=cutout_video_key,
                    warning_key="pano_cutout_warnings",
                    video_key=preview_contract["video"],
                    meta_key=preview_contract["meta"],
                    progress_callback=progress.frame_callback(encode_start, video_span),
                    status_callback=lambda status: progress.stage(
                        "Using cached preview video" if status == "hit" else "Encoding preview video"
                    ),
                )
            progress.set(encode_start + video_span)
            progress.stage("Done")
            progress.finish()
            return io.NodeOutput(out_t, sticker_state_json, mask_t, ui=ui_ret)
        except Exception as ex:
            logging.getLogger(__name__).exception("[PanoramaCutout] strict export failed")
            raise


class PanoramaPreviewNode(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaPreview",
            display_name="Panorama Preview",
            category="Panorama Suite",
            inputs=[
                io.Image.Input("erp_image"),
                io.Combo.Input(
                    "coverage",
                    options=["360", "180"],
                    default="360",
                ),
            ] + _common_video_preview_inputs(),
            outputs=[
                io.Image.Output("image", display_name="image"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, erp_image, coverage="360", fps=24.0, audio=None, unique_id=None):
        ui_ret = {}
        if erp_image is not None:
            ui_ret = _preview_ui(erp_image, max(1.0, finite_float(fps, 24.0)), audio, unique_id)
        return io.NodeOutput(erp_image, ui=ui_ret)


def _preview_ui(images: torch.Tensor, fps: float, audio, unique_id) -> dict:
    """The execution `ui` of a Preview: the first image, and an MP4 of a batch of two or more."""
    preview_contract = _get_preview_ui_contract("default")
    ui_ret = _init_ui_preview(images, key=preview_contract["image"])
    frame_count = int(images.shape[0]) if hasattr(images, "shape") and images.ndim == 4 else 1
    video_span = frame_count if frame_count > 1 else 0
    progress = _NodeProgress(unique_id, 1 + video_span + 1, label="PanoramaPreview")
    progress.advance(1)
    if video_span > 0:
        progress.stage("Encoding preview video")
    _append_preview_video_from_batch(
        ui_ret,
        images,
        fps,
        audio,
        warning_key="pano_preview_warnings",
        video_key=preview_contract["video"],
        meta_key=preview_contract["meta"],
        progress_callback=progress.frame_callback(progress.value, video_span) if video_span > 0 else None,
    )
    progress.set(1 + video_span)
    progress.stage("Done")
    progress.finish()
    return ui_ret


def _video_cache_identity(video, streamed: bool) -> tuple:
    """A VIDEO that `open_video` streams from its file (so without a crop) is its file and trim window; any other
    VIDEO is the object itself."""
    if streamed:
        source = video.get_stream_source()
        if isinstance(source, str):
            return ("file", source, os.stat(source).st_mtime_ns, video.get_active_trim_window())
    return NODE_RUNTIME.object_identity(video)


def _editor_mp4(video, opened) -> tuple[Path, bool]:
    """The MP4 the editor plays for a VIDEO opened by `open_video` as `opened`, and whether it has audio. A file the
    core copies into an MP4 that seeks fast already (`editor_ready`) is copied, or played as it is when it is an MP4
    in the input directory; a Studio `video` shows
    its stream source when that seeks fast. Otherwise a proxy is encoded (`encode_editor_mp4`), from the file
    again for a VIDEO read from its file, since `opened` has moved on, so the frames are never all in memory."""
    if isinstance(video, SceneVideo):
        # Its stream source is an MP4 in temp already, kept by the video itself, and is what SaveVideo copies.
        source = video.get_stream_source()
        if editor_ready(source):
            return Path(source), mp4_has_audio(source)
        return encode_editor_mp4(stream_video(source, 0, 0, "source"), loop_progress())
    if isinstance(opened, StreamedVideo):
        source, trim = video.get_stream_source(), video.get_active_trim_window()
        # The core copies the streams only without a trim window, and reads a file in memory as it is.
        if isinstance(source, str) and not any(trim) and editor_ready(source):
            # An MP4 in the input directory is played from there; the browser is served it by its extension.
            if _input_entry(source) is not None and Path(source).suffix.lower() == ".mp4":
                return Path(source), mp4_has_audio(source)
            return save_video_to_mp4(video, Types.VideoContainer.MP4, Types.VideoCodec.H264)
        return encode_editor_mp4(stream_video(source, *trim, "source"), loop_progress())
    return encode_editor_mp4(opened, loop_progress())


def _input_entry(path) -> dict | None:
    """The `ui` entry of a file in ComfyUI's input directory, or None for a file elsewhere."""
    root = Path(folder_paths.get_input_directory()).resolve()
    try:
        rel = Path(path).resolve().relative_to(root)
    except ValueError:
        return None
    subfolder = rel.parent.as_posix()
    return {"filename": rel.name, "subfolder": "" if subfolder == "." else subfolder, "type": "input", "storage": "input", "format": "video/mp4"}


def _editor_mp4_ui(cache_key: tuple, make, fps: float, frame_count: int, contract: dict) -> dict:
    """The `ui` of the editor MP4 that `make()` saves, made once per `cache_key` and reused while the file is there.
    The MP4 is a temp file, or the input file itself (`_editor_mp4`)."""
    saved = NODE_RUNTIME.cache.get("video", cache_key)
    if saved is None or not saved[0].exists():
        saved = make()
        NODE_RUNTIME.cache.put("video", cache_key, saved)
    path, has_audio = saved
    payload = make_video_ui_payload(path, fps, frame_count, video_key=contract["video"], meta_key=contract["meta"], video_entry=_input_entry(path))
    payload[contract["meta"]][0]["has_audio"] = has_audio
    return payload


def _video_ui(video, opened, fps: float, frame_count: int, contract: dict) -> dict:
    """The `ui` of a VIDEO opened by `open_video`: its first frame, and the editor MP4 (`_editor_mp4`) when it has
    two or more frames. The frames are not read into one batch (ADR 0018), and the MP4 is reused while the VIDEO
    stays the same."""
    ui_ret = _init_ui_preview(opened.first_frame[None], key=contract["image"])
    if frame_count > 1:
        cache_key = ("editor_mp4", _video_cache_identity(video, isinstance(opened, StreamedVideo)))
        _merge_ui_payload(ui_ret, _editor_mp4_ui(cache_key, lambda: _editor_mp4(video, opened), fps, frame_count, contract))
    return ui_ret


def _video_preview_ui(video) -> dict:
    """The Preview `ui` of a VIDEO, with the Timeline fps decided as in Studio."""
    bg = open_video(video, "source")
    rate, _times, _time_base, frames = _decide_timeline(load_scene_state(None), bg, None)
    return _video_ui(video, bg, float(rate), len(frames), _get_preview_ui_contract("default"))


# TODO(#76): when Preview gets its new display, choose a class and display name that can sit beside the legacy
# Preview, which stays registered (ADR 0029: the legacy nodes stay).
class PanoramaPreviewSceneNode(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        template = io.MatchType.Template("source", [io.Image, io.Video, PanoScene])
        return io.Schema(
            node_id="PanoramaPreviewNode",
            display_name="Panorama Preview (new)",  # TODO(#76): a name that can sit beside the legacy Preview (ADR 0029).
            category="Panorama Suite",
            inputs=[
                io.MatchType.Input("source", template=template),
                io.Combo.Input("coverage", options=["360", "180"], default="360"),
            ],
            outputs=[
                io.MatchType.Output(template=template, id="output", display_name="output"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, source, coverage="360", unique_id=None):
        # `coverage` is read by the node's widget on the frontend. A PANO_SCENE carries its own.
        # TODO(#76): show a PANO_SCENE on the node. Until then it passes through without a preview.
        if isinstance(source, PanoSceneValue):
            return io.NodeOutput(source)
        # TODO(#76): bind the editor frontend to this node id; it reads the same `ui` keys as the legacy Preview.
        if isinstance(source, Input.Video):
            return io.NodeOutput(source, ui=_video_preview_ui(source))
        # MatchType is not checked by the backend, so an API prompt can send another type.
        if not isinstance(source, torch.Tensor) or source.ndim != 4:
            shape = f" of shape {tuple(source.shape)}" if isinstance(source, torch.Tensor) else ""
            raise TypeError(f"Panorama Preview: source must be an IMAGE, a VIDEO, or a PANO_SCENE, not {type(source).__name__}{shape}.")
        fps = float(_decide_timeline(load_scene_state(None), source, None)[0])
        return io.NodeOutput(source, ui=_preview_ui(source, fps, None, unique_id))


class PanoramaSeamPrepNode(io.ComfyNode):
    """
    Prepare an ERP image for seam-focused inpainting.

    Expected input shape:
    - image: [B, H, W, C] float tensor in 0..1

    Output shapes:
    - image: [B, H, W, C]
    - mask: [B, H, W]
    - mask_blurred: [B, H, W]

    seam_center_offset_px shifts the seam target center from the image midpoint.
    Positive values move the seam band right, negative values move it left.
    """

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaSeamPrep",
            display_name="Panorama Seam Prep",
            category="Panorama Suite",
            description=(
                "Prepare an ERP image for seam-focused inpainting. "
                "Expected IMAGE input shape is [B,H,W,C]. "
                "Outputs are image [B,H,W,C], mask [B,H,W], and blurred mask [B,H,W]. "
                "Positive seam_center_offset_px moves the seam band right; negative moves it left."
            ),
            inputs=[
                io.Image.Input("image"),
                io.Int.Input("seam_width_px", default=64, min=1, max=2048, step=1),
                io.Int.Input("seam_center_offset_px", default=0, min=-2048, max=2048, step=1),
                io.Int.Input("mask_blur_px", default=10, min=0, max=256, step=1),
            ],
            outputs=[
                io.Image.Output("image", display_name="image"),
                io.Mask.Output("mask", display_name="mask"),
                io.Mask.Output("mask_blurred", display_name="mask_blurred"),
            ],
        )

    @staticmethod
    def _gaussian_kernel_1d(radius: int, dtype: torch.dtype, device: torch.device) -> torch.Tensor:
        radius = max(0, int(radius))
        if radius <= 0:
            return torch.ones((1,), dtype=dtype, device=device)
        sigma = max(0.5, float(radius) / 3.0)
        coords = torch.arange(-radius, radius + 1, dtype=dtype, device=device)
        kernel = torch.exp(-(coords * coords) / (2.0 * sigma * sigma))
        kernel = kernel / torch.clamp(kernel.sum(), min=torch.finfo(dtype).eps)
        return kernel

    @classmethod
    def _blur_mask(cls, mask: torch.Tensor, blur_px: int) -> torch.Tensor:
        radius = max(0, int(blur_px))
        if radius <= 0:
            return mask
        batch, height, width = mask.shape
        kernel = cls._gaussian_kernel_1d(radius, mask.dtype, mask.device)
        kernel_x = kernel.view(1, 1, 1, -1)
        kernel_y = kernel.view(1, 1, -1, 1)
        work = mask.contiguous().unsqueeze(1)
        work = F.pad(work, (radius, radius, 0, 0), mode="replicate")
        work = F.conv2d(work, kernel_x.expand(1, 1, 1, kernel.numel()), groups=1)
        work = F.pad(work, (0, 0, radius, radius), mode="replicate")
        work = F.conv2d(work, kernel_y.expand(1, 1, kernel.numel(), 1), groups=1)
        work = work.view(batch, height, width)
        return work.clamp(0.0, 1.0)

    @classmethod
    def execute(cls, image, seam_width_px=64, seam_center_offset_px=0, mask_blur_px=0):
        if image is None or not hasattr(image, "shape"):
            empty_img = torch.zeros((1, 1, 1, 3), dtype=torch.float32)
            empty_mask = torch.zeros((1, 1, 1), dtype=torch.float32)
            return io.NodeOutput(empty_img, empty_mask, empty_mask)

        img = image.contiguous().to(dtype=torch.float32)
        if img.ndim == 3:
            img = img.unsqueeze(0)
        if img.ndim != 4:
            raise ValueError("PanoramaSeamPrep expects IMAGE input shaped [B,H,W,C].")

        batch, height, width, channels = img.shape
        if width < 1 or height < 1:
            empty_img = torch.zeros(
                (max(batch, 1), max(height, 1), max(width, 1), max(channels, 3)),
                dtype=img.dtype,
                device=img.device,
            )
            empty_mask = torch.zeros((max(batch, 1), max(height, 1), max(width, 1)), dtype=img.dtype, device=img.device)
            return io.NodeOutput(empty_img, empty_mask, empty_mask)

        seam_width_px = max(1, int(seam_width_px))
        seam_center_offset_px = int(seam_center_offset_px)
        mask_blur_px = max(0, int(mask_blur_px))

        doubled = torch.cat((img, img), dim=2)
        start_x = int(width // 2 - seam_center_offset_px)
        start_x = max(0, min(start_x, width))
        prepared = doubled[:, :, start_x:start_x + width, :].contiguous().clamp(0.0, 1.0)

        center_x = float(width) * 0.5 + float(seam_center_offset_px)
        half_width = float(seam_width_px) * 0.5
        x = torch.arange(width, dtype=img.dtype, device=img.device)
        band = ((x >= (center_x - half_width)) & (x < (center_x + half_width))).to(dtype=img.dtype)
        mask = band.view(1, 1, width).expand(batch, height, width).contiguous()
        mask_blurred = cls._blur_mask(mask, mask_blur_px)

        return io.NodeOutput(prepared, mask, mask_blurred)


class PanoramaSuiteExtension(ComfyExtension):
    @override
    async def get_node_list(self) -> list[type[io.ComfyNode]]:
        return [
            PanoramaStickersNode,
            PanoramaCutoutNode,
            PanoramaPreviewNode,
            PanoramaPreviewSceneNode,
            PanoramaStudioNode,
            PanoramaSeamPrepNode,
        ]


async def comfy_entrypoint() -> PanoramaSuiteExtension:
    return PanoramaSuiteExtension()
