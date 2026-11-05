"""The helpers of the legacy nodes `PanoramaStickers` and `PanoramaCutout` (`docs/legacy-node-surfaces.md`): output
sizes and coverage, image batches, the external Sticker on their port, the overlay ERP of their Stickers and
painting, and the batched outputs with their preview. The node classes are in `nodes.py`."""
import json
import logging
import math

import comfy.model_management
import numpy as np
import torch
import torch.nn.functional as F
from PIL import Image

from .comfy_image_resolver import resolve_painting_layer_payload
from .core.display_list import (
    alpha_composite_over_rgba as _alpha_composite_over_rgba,
    build_display_entries,
)
from .core.display_layers import (
    compose_display_list_to_overlay_rgba as _compose_display_list_to_overlay_rgba,
    render_remaining_flat_paint_layer_from_state as _render_remaining_flat_paint_layer_from_state,
)
from .core.math import finite_float, unit_float, vfov_from_hfov
from .core.painting import painting_state_has_mask_renderables, painting_state_has_renderables, render_painting_to_erp
from .core.state import hex_to_rgb01, normalize_coverage
from .media_ui import _append_preview_video_from_batch, _push_ui_warning


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


def _make_batched_image_and_mask_outputs(out_batch: np.ndarray, mask_bw: np.ndarray):
    batch = np.asarray(out_batch, dtype=np.float32)
    if batch.ndim == 3:
        batch = batch[None, ...]
    mask_batch = _repeat_mask_batch(mask_bw, int(batch.shape[0]))
    out_t = _batch_to_torch(batch)
    mask_t = _batch_to_torch(mask_batch)
    return out_t, mask_t, batch


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
        solid_rgb = np.broadcast_to(hex_to_rgb01(bg_hex), (1, out_h, out_w, 3)).astype(np.float32, copy=True)
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
                logging.getLogger(f"{__package__}.nodes").warning(
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


CUTOUT_MAX_OUTPUT_SIDE = 4096
