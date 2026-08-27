import json
import math
from pathlib import Path
import logging

import numpy as np
import torch
import torch.nn.functional as F
from PIL import Image
from comfy_api.latest import io

from .comfy_image_resolver import resolve_painting_layer_payload
from .node_runtime import PREVIEW_UI_KEYS, NodeProgress, create_default_runtime
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
)
from .core.painting import (
    alpha_composite_over_rgb,
    painting_state_has_mask_renderables,
    painting_state_has_renderables,
    render_painting_to_erp,
)
from .core.state import merge_state, normalize_coverage, parse_sticker_state
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


def _estimate_sticker_cuda_chunk_size(
    batch_size: int,
    out_h: int,
    out_w: int,
    device: torch.device | None,
    *,
    in_h: int = 0,
    in_w: int = 0,
) -> int:
    if device is None or device.type != "cuda":
        return max(1, int(batch_size))
    device_index = device.index if device.index is not None else torch.cuda.current_device()
    free_bytes, _total_bytes = torch.cuda.mem_get_info(device_index)
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
    cuda_device: torch.device | None,
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
    bg_cache_identity = _tensor_cache_identity(bg_erp)
    bg_cache_key = ("stickers_bg", bg_cache_identity, int(out_h), int(out_w))
    if bg_cache_identity is not None:
        cached_bg_batch = NODE_RUNTIME.cache.get("stickers_bg", bg_cache_key)
        if cached_bg_batch is not None:
            bg_batch = cached_bg_batch
            bg_rgb_batch = bg_batch.astype(np.float32) / 255.0
            if overlay_rgba is not None:
                alpha = overlay_rgba[None, ..., 3:4].astype(np.float32, copy=False)
                rgb = overlay_rgba[None, ..., :3].astype(np.float32, copy=False)
                out_batch = np.clip(rgb * alpha + bg_rgb_batch * (1.0 - alpha), 0.0, 1.0)
            else:
                out_batch = bg_rgb_batch
            if progress_callback is not None:
                try:
                    progress_callback(batch_size, batch_size)
                except Exception:
                    pass
            return out_batch.astype(np.float32, copy=False), bg_batch
    compute_device = cuda_device if cuda_device is not None else bg_erp.device
    chunk_size = _estimate_sticker_cuda_chunk_size(batch_size, out_h, out_w, compute_device, in_h=in_h, in_w=in_w)
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
            if compute_device.type == "cuda":
                torch.cuda.empty_cache()
            if progress_callback is not None:
                try:
                    progress_callback(end, batch_size)
                except Exception:
                    pass
            start = end
        except torch.OutOfMemoryError:
            if compute_device.type == "cuda" and chunk_size > 1:
                chunk_size = max(1, chunk_size // 2)
                torch.cuda.empty_cache()
                continue
            if compute_device.type == "cuda":
                logging.getLogger(__name__).warning(
                    "PanoramaStickers background CUDA path ran out of memory; falling back to CPU chunks."
                )
                compute_device = torch.device("cpu")
                chunk_size = 1
                overlay_cache.clear()
                torch.cuda.empty_cache()
                continue
            raise MemoryError(
                f"PanoramaStickers: not enough RAM to process a single frame "
                f"({in_h}×{in_w} input → {out_h}×{out_w} output). "
                "Reduce output resolution or batch size."
            ) from None

    if bg_cache_identity is not None:
        NODE_RUNTIME.cache.put("stickers_bg", bg_cache_key, bg_batch)
    return out_batch, bg_batch


def _first_image_tensor(image):
    return NODE_RUNTIME._first_image(image)


def _vfov_from_hfov(hfov_deg: float, image_w: int, image_h: int) -> float:
    width = max(1, int(image_w))
    height = max(1, int(image_h))
    hfov = float(np.clip(hfov_deg, 0.1, 179.0))
    vfov = 2.0 * math.degrees(math.atan(math.tan(math.radians(hfov) * 0.5) * (height / width)))
    return float(np.clip(vfov, 0.1, 179.0))


def _default_pose_for_sticker(image_w: int, image_h: int) -> dict:
    hfov = 30.0
    return {
        "yaw_deg": 0.0,
        "pitch_deg": 0.0,
        "hFOV_deg": hfov,
        "vFOV_deg": _vfov_from_hfov(hfov, image_w, image_h),
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
        "vFOV_deg": _vfov_from_hfov(hfov, image_w, image_h),
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
        runtime_sticker["vFOV_deg"] = _vfov_from_hfov(
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
        if paint_rgba is None:
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
    if mask_bw is None:
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
                    multiline=False,
                    dynamic_prompts=False,
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

        _cuda_device = torch.device("cuda") if torch.cuda.is_available() else None

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
            cuda_device=_cuda_device,
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


class PanoramaCutoutNode(io.ComfyNode):
    MAX_OUTPUT_SIDE = 4096
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
            max_side=cls.MAX_OUTPUT_SIDE,
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
            output_megapixels, hfov, vfov, max_side=cls.MAX_OUTPUT_SIDE
        )

        sticker_state_json = _build_sticker_state_json(shot, ow, oh)
        try:
            video_span = batch_frames if batch_frames > 1 else 0
            progress = _NodeProgress(unique_id, 1 + batch_frames + video_span + 1, label="PanoramaCutout")
            progress.advance(1)
            source_identity = _tensor_cache_identity(erp_image)
            cutout_render_signature = (
                source_identity,
                _hash_text(state_json),
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
            selected_mask = overlay_mask_bw if isinstance(overlay_mask_bw, np.ndarray) else (
                painting_payload.get("mask") if isinstance(painting_payload, dict) else None
            )
            if isinstance(selected_mask, np.ndarray):
                mask_bw = sample_cutout_from_sampling_map(selected_mask, sampling_map)
            else:
                mask_bw = np.zeros((oh, ow), dtype=np.float32)
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
            outputs=[],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, erp_image, coverage="360", fps=24.0, audio=None, unique_id=None):
        ui_ret = {}
        warnings = []
        fps_value = max(1.0, finite_float(fps, 24.0))
        if erp_image is not None:
            preview_contract = _get_preview_ui_contract("default")
            ui_ret = _init_ui_preview(erp_image, key=preview_contract["image"])
            frame_count = int(erp_image.shape[0]) if hasattr(erp_image, "shape") and erp_image.ndim == 4 else 1
            video_span = frame_count if frame_count > 1 else 0
            progress = _NodeProgress(unique_id, 1 + video_span + 1, label="PanoramaPreview")
            progress.advance(1)
            if video_span > 0:
                progress.stage("Encoding preview video")
            _append_preview_video_from_batch(
                ui_ret,
                erp_image,
                fps_value,
                audio,
                warning_key="pano_preview_warnings",
                video_key=preview_contract["video"],
                meta_key=preview_contract["meta"],
                progress_callback=progress.frame_callback(progress.value, video_span) if video_span > 0 else None,
            )
            progress.set(1 + video_span)
            progress.stage("Done")
            progress.finish()
        _flush_warnings(ui_ret, "pano_preview_warnings", warnings)
        return io.NodeOutput(ui=ui_ret)


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


NODE_CLASS_MAPPINGS = {
    "PanoramaStickers": PanoramaStickersNode,
    "PanoramaCutout": PanoramaCutoutNode,
    "PanoramaPreview": PanoramaPreviewNode,
    "PanoramaSeamPrep": PanoramaSeamPrepNode,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "PanoramaStickers": "Panorama Stickers",
    "PanoramaCutout": "Panorama Cutout",
    "PanoramaPreview": "Panorama Preview",
    "PanoramaSeamPrep": "Panorama Seam Prep",
}
