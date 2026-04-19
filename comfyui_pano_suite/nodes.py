import json
import math
from pathlib import Path
import logging
import time

import numpy as np
import torch
import torch.nn.functional as F
from PIL import Image
from comfy_api.latest import io

try:
    import nodes
except ImportError:
    nodes = None

from .comfy_image_resolver import resolve_painting_layer_payload
from .core.cutout import build_cutout_sampling_map, cutout_from_erp, sample_cutout_from_sampling_map
from .core.math import (
    calculate_dimensions_from_megapixels,
    calculate_output_dimensions,
    finite_float,
    finite_int,
)
from .core.painting import (
    alpha_composite_over_rgb,
    painting_state_has_mask_renderables,
    painting_state_has_renderables,
    render_painting_to_cutout,
    render_painting_to_erp,
)
from .core.state import merge_state, normalize_coverage, parse_sticker_state
from .core.stickers import compose_single_sticker_to_canvas_erp, compose_stickers_to_erp
from .core.stickers import render_stickers_to_rgba_erp


def _save_input_preview(images, key="pano_input_images"):
    if nodes is None or images is None:
        return {}
    try:
        res = nodes.PreviewImage().save_images(images)
        if "ui" in res and "images" in res["ui"]:
            return {key: res["ui"]["images"]}
    except Exception:
        logging.getLogger(__name__).exception("Failed to save preview image for %s", key)
    return {}


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
    logging.getLogger(__name__).warning(text)


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


def _single_image_to_numpy(image, warnings: list[str]) -> np.ndarray | None:
    if image is None or not hasattr(image, "detach"):
        return None
    try:
        arr = image.detach().cpu().numpy().astype(np.float32)
    except Exception:
        return None
    if arr.ndim == 3:
        arr = arr[None, ...]
    if arr.ndim != 4 or arr.shape[0] <= 0:
        return None
    if arr.shape[0] > 1:
        warnings.append("Multiple images received; using the first image only.")
    img = arr[0]
    if img.ndim != 3 or img.shape[0] <= 0 or img.shape[1] <= 0:
        return None
    if img.shape[-1] < 3:
        img = np.repeat(img[..., :1], 3, axis=-1)
    elif img.shape[-1] > 4:
        img = img[..., :4]
    return np.clip(img.astype(np.float32), 0.0, 1.0)


def _first_image_tensor(image):
    if image is None or not hasattr(image, "shape"):
        return image
    try:
        if len(image.shape) >= 4 and int(image.shape[0]) > 1:
            return image[:1]
    except Exception:
        return image
    return image


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
    stickers = []
    for item in state.get("stickers", []):
        if not isinstance(item, dict):
            continue
        stickers.append({
            "type": "sticker",
            "z_index": _safe_int(item.get("z_index", 0), 0),
            "item": item,
        })
    groups = []
    painting = state.get("painting") if isinstance(state.get("painting"), dict) else {}
    for item in painting.get("groups", []):
        if not isinstance(item, dict):
            continue
        groups.append({
            "type": "strokeGroup",
            "z_index": _safe_int(item.get("z_index", 0), 0),
            "actionGroupId": str(item.get("actionGroupId") or item.get("id") or "").strip(),
        })
    raster_objects = []
    for item in painting.get("raster_objects", []):
        if not isinstance(item, dict):
            continue
        if str(item.get("layerKind") or "paint") != "paint":
            continue
        raster_objects.append({
            "type": "rasterObject",
            "z_index": _safe_int(item.get("z_index", 0), 0),
            "item": item,
        })
    return sorted(stickers + groups + raster_objects, key=lambda entry: float(entry.get("z_index", 0)))


def _render_group_layer_from_state(painting: dict | None, action_group_id: str, width: int, height: int):
    gid = str(action_group_id or "").strip()
    if not gid or not isinstance(painting, dict):
        return None
    paint_layer = painting.get("paint") if isinstance(painting.get("paint"), dict) else {}
    all_paint_strokes = paint_layer.get("strokes") if isinstance(paint_layer.get("strokes"), list) else []
    strokes = []
    for stroke in all_paint_strokes:
        if not isinstance(stroke, dict):
            continue
        stroke_gid = str(stroke.get("actionGroupId") or "").strip()
        tool_kind = str(stroke.get("toolKind") or stroke.get("tool") or stroke.get("mode") or "").strip().lower()
        eraser_flag = stroke.get("eraser") is True or tool_kind in {"eraser", "erase"}
        if stroke_gid == gid or (eraser_flag and not stroke_gid):
            strokes.append(stroke)
    if not strokes:
        return None
    groups = painting.get("groups") if isinstance(painting.get("groups"), list) else []
    layer, _mask = render_painting_to_erp({
        "paint": {"strokes": strokes},
        "mask": {"strokes": []},
        "groups": groups,
        "raster_objects": [],
    }, width, height)
    return layer


def _render_raster_layer_from_state(item: dict | None, width: int, height: int):
    if not isinstance(item, dict):
        return None
    layer, _mask = render_painting_to_erp({
        "paint": {"strokes": []},
        "mask": {"strokes": []},
        "groups": [],
        "raster_objects": [item],
    }, width, height)
    return layer


def _build_remaining_flat_painting_state(painting: dict | None) -> dict | None:
    if not isinstance(painting, dict):
        return None
    paint_layer = painting.get("paint") if isinstance(painting.get("paint"), dict) else {}
    all_paint_strokes = paint_layer.get("strokes") if isinstance(paint_layer.get("strokes"), list) else []
    if not all_paint_strokes:
        return None
    known_group_ids = set()
    for group in painting.get("groups", []):
        if not isinstance(group, dict):
            continue
        gid = str(group.get("actionGroupId") or group.get("id") or "").strip()
        if gid:
            known_group_ids.add(gid)
    strokes = []
    for stroke in all_paint_strokes:
        if not isinstance(stroke, dict):
            continue
        stroke_gid = str(stroke.get("actionGroupId") or "").strip()
        tool_kind = str(stroke.get("toolKind") or stroke.get("tool") or stroke.get("mode") or "").strip().lower()
        eraser_flag = stroke.get("eraser") is True or tool_kind in {"eraser", "erase"}
        # Group display-list composition already applies group-owned paint. Keep only legacy or
        # ungrouped flat paint here, and avoid replaying group-owned erasers twice.
        if eraser_flag and stroke_gid and stroke_gid in known_group_ids:
            continue
        if not stroke_gid or stroke_gid not in known_group_ids:
            strokes.append(stroke)
    if not strokes:
        return None
    return {
        "paint": {"strokes": strokes},
        "mask": {"strokes": []},
        "groups": [],
        "raster_objects": [],
    }


def _build_visual_paint_only_state(painting: dict | None) -> dict | None:
    if not isinstance(painting, dict):
        return None
    paint_layer = painting.get("paint") if isinstance(painting.get("paint"), dict) else {}
    paint_strokes = paint_layer.get("strokes") if isinstance(paint_layer.get("strokes"), list) else []
    raster_objects = painting.get("raster_objects") if isinstance(painting.get("raster_objects"), list) else []
    groups = painting.get("groups") if isinstance(painting.get("groups"), list) else []
    if not paint_strokes and not raster_objects:
        return None
    return {
        "paint": {"strokes": [stroke for stroke in paint_strokes if isinstance(stroke, dict)]},
        "mask": {"strokes": []},
        "groups": [group for group in groups if isinstance(group, dict)],
        "raster_objects": [item for item in raster_objects if isinstance(item, dict)],
    }


def _render_remaining_flat_paint_layer_from_state(painting: dict | None, width: int, height: int):
    remainder = _build_remaining_flat_painting_state(painting)
    if remainder is None:
        return None
    layer, _mask = render_painting_to_erp(remainder, width, height)
    return layer


def _compose_display_list_to_erp(
    state: dict,
    base_rgb: np.ndarray,
    *,
    painting_payload: dict | None = None,
    base_dir: Path | None = None,
    quality: str = "export",
) -> tuple[np.ndarray, bool, dict]:
    canvas = np.clip(base_rgb.astype(np.float32), 0.0, 1.0)
    payload = painting_payload if isinstance(painting_payload, dict) else None
    group_layers = payload.get("groups", {}) if payload else {}
    used_paint_entries = False
    allow_backend_paint_fallback = bool(payload and (
        payload.get("paint") is not None
        or payload.get("mask") is not None
        or group_layers
    ))
    assets = state.get("assets") if isinstance(state.get("assets"), dict) else {}
    coverage = state.get("coverage", 360)
    stats = {
        "entries": 0,
        "stickers": 0,
        "stroke_groups": 0,
        "rasters": 0,
        "sticker_ms": 0.0,
        "stroke_group_ms": 0.0,
        "raster_ms": 0.0,
    }
    for entry in _get_display_list_entries(state):
        stats["entries"] += 1
        entry_type = str(entry.get("type") or "")
        if entry_type == "sticker":
            item_start = time.perf_counter()
            compose_single_sticker_to_canvas_erp(
                canvas,
                entry.get("item"),
                assets,
                base_dir=base_dir,
                quality=quality,
                coverage=coverage,
            )
            stats["stickers"] += 1
            stats["sticker_ms"] += (time.perf_counter() - item_start) * 1000.0
            continue
        if not allow_backend_paint_fallback:
            continue
        layer = None
        if entry_type == "strokeGroup":
            item_start = time.perf_counter()
            action_group_id = str(entry.get("actionGroupId") or "").strip()
            layer = group_layers.get(action_group_id)
            stats["stroke_groups"] += 1
            stats["stroke_group_ms"] += (time.perf_counter() - item_start) * 1000.0
        elif entry_type == "rasterObject":
            item_start = time.perf_counter()
            layer = _render_raster_layer_from_state(entry.get("item"), int(canvas.shape[1]), int(canvas.shape[0]))
            stats["rasters"] += 1
            stats["raster_ms"] += (time.perf_counter() - item_start) * 1000.0
        if layer is None:
            continue
        canvas = alpha_composite_over_rgb(canvas, layer)
        used_paint_entries = True
    return canvas, used_paint_entries, stats


def _alpha_composite_over_rgba(base_rgba: np.ndarray, overlay_rgba: np.ndarray) -> np.ndarray:
    if base_rgba is None:
        return np.clip(overlay_rgba.astype(np.float32), 0.0, 1.0)
    dst = base_rgba.astype(np.float32, copy=False)
    src = overlay_rgba.astype(np.float32, copy=False)
    if src.ndim != 3 or src.shape[-1] != 4:
        return dst
    if dst.shape[0] != src.shape[0] or dst.shape[1] != src.shape[1]:
        return dst
    src_alpha = src[..., 3]
    alpha_pixels = np.argwhere(src_alpha > 1e-6)
    if alpha_pixels.size == 0:
        return dst
    y0, x0 = alpha_pixels.min(axis=0)
    y1, x1 = alpha_pixels.max(axis=0) + 1
    dst_roi = dst[y0:y1, x0:x1]
    src_roi = src[y0:y1, x0:x1]
    src_a = np.clip(src_roi[..., 3:4], 0.0, 1.0)
    if float(np.max(src_a)) <= 1e-6:
        return dst
    src_rgb = np.clip(src_roi[..., :3], 0.0, 1.0)
    dst_a = np.clip(dst_roi[..., 3:4], 0.0, 1.0)
    dst_rgb = np.clip(dst_roi[..., :3], 0.0, 1.0)
    out_a = src_a + dst_a * (1.0 - src_a)
    numer_rgb = src_rgb * src_a + dst_rgb * dst_a * (1.0 - src_a)
    safe_out_a = np.maximum(out_a, 1e-6)
    out_rgb = np.where(out_a > 1e-6, numer_rgb / safe_out_a, 0.0)
    dst_roi[..., :3] = out_rgb
    dst_roi[..., 3:4] = out_a
    return dst


def _sample_overlay_rgba_from_sampling_map(overlay_rgba: np.ndarray, sampling_map: dict) -> np.ndarray:
    if overlay_rgba is None or overlay_rgba.ndim != 3 or overlay_rgba.shape[-1] != 4:
        return np.zeros((int(sampling_map["out_h"]), int(sampling_map["out_w"]), 4), dtype=np.float32)
    src = np.clip(overlay_rgba.astype(np.float32, copy=False), 0.0, 1.0)
    alpha = np.clip(src[..., 3], 0.0, 1.0)
    premult = src[..., :3] * alpha[..., None]
    warped_premult = sample_cutout_from_sampling_map(premult, sampling_map)
    warped_alpha = sample_cutout_from_sampling_map(alpha, sampling_map)
    safe_alpha = np.maximum(warped_alpha[..., None], 1e-6)
    warped_rgb = np.where(warped_alpha[..., None] > 1e-6, warped_premult / safe_alpha, 0.0)
    return np.dstack([np.clip(warped_rgb, 0.0, 1.0), np.clip(warped_alpha, 0.0, 1.0)]).astype(np.float32)


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


def _compose_display_list_to_overlay_rgba(
    state: dict,
    width: int,
    height: int,
    *,
    painting_payload: dict | None = None,
    base_dir: Path | None = None,
    quality: str = "export",
) -> tuple[np.ndarray, bool, dict]:
    canvas = np.zeros((height, width, 4), dtype=np.float32)
    payload = painting_payload if isinstance(painting_payload, dict) else None
    group_layers = payload.get("groups", {}) if payload else {}
    painting = state.get("painting") if isinstance(state.get("painting"), dict) else {}
    used_paint_entries = False
    sticker_state = dict(state)
    sticker_state["coverage"] = 360
    stats = {
        "entries": 0,
        "stickers": 0,
        "stroke_groups": 0,
        "rasters": 0,
        "sticker_ms": 0.0,
        "stroke_group_ms": 0.0,
        "raster_ms": 0.0,
        "group_payload_hits": 0,
        "group_fallback_renders": 0,
    }
    for entry in _get_display_list_entries(state):
        stats["entries"] += 1
        entry_type = str(entry.get("type") or "")
        layer = None
        if entry_type == "sticker":
            item_start = time.perf_counter()
            layer = render_stickers_to_rgba_erp(
                sticker_state,
                width,
                height,
                base_dir=base_dir,
                quality=quality,
                stickers_override=[entry.get("item")],
                coverage_override=360,
            )
            stats["stickers"] += 1
            stats["sticker_ms"] += (time.perf_counter() - item_start) * 1000.0
        elif entry_type == "strokeGroup":
            item_start = time.perf_counter()
            action_group_id = str(entry.get("actionGroupId") or "").strip()
            layer = group_layers.get(action_group_id)
            if layer is None:
                layer = _render_group_layer_from_state(painting, action_group_id, width, height)
                stats["group_fallback_renders"] += 1
            else:
                stats["group_payload_hits"] += 1
            stats["stroke_groups"] += 1
            stats["stroke_group_ms"] += (time.perf_counter() - item_start) * 1000.0
        elif entry_type == "rasterObject":
            item_start = time.perf_counter()
            layer = _render_raster_layer_from_state(entry.get("item"), width, height)
            stats["rasters"] += 1
            stats["raster_ms"] += (time.perf_counter() - item_start) * 1000.0
        if layer is None:
            continue
        canvas = _alpha_composite_over_rgba(canvas, layer)
        used_paint_entries = True
    return canvas, used_paint_entries, stats


def _should_use_uploaded_group_layers(state: dict, painting_payload: dict | None) -> bool:
    if not isinstance(painting_payload, dict):
        return False
    groups = painting_payload.get("groups")
    if not isinstance(groups, dict) or not groups:
        return False
    painting = state.get("painting") if isinstance(state.get("painting"), dict) else {}
    raster_objects = painting.get("raster_objects")
    if isinstance(raster_objects, list) and raster_objects:
        return False
    state_groups = painting.get("groups")
    expected = len(state_groups) if isinstance(state_groups, list) else 0
    return expected > 0 and len(groups) >= expected


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
                    options=["1024", "2048", "4096"],
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
            ],
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
    def execute(cls, output_preset, coverage, bg_color, state_json, bg_erp=None, sticker_image=None, sticker_state=""):
        out_w = cls._parse_output_preset(output_preset, max_val=cls.MAX_OUTPUT_SIDE)
        coverage_value = normalize_coverage(coverage)
        out_h = max(1, out_w if coverage_value == 180 else (out_w // 2))
        workspace_w = out_w
        workspace_h = max(1, workspace_w // 2)
        bg_hex = cls._normalize_hex_color(bg_color)
        state = merge_state(state_in=None, internal_state=state_json, fallback_preset=out_w, fallback_bg=bg_hex)
        warnings = []

        bg_np = None
        if bg_erp is not None:
            bg_np = _single_image_to_numpy(bg_erp, warnings)
            bg_np = _apply_coverage_to_rgb(bg_np, coverage_value, out_w, out_h)
        if bg_np is None:
            bg_np = np.broadcast_to(_hex_color_to_rgb01(bg_hex), (out_h, out_w, 3)).copy()

        state["output_preset"] = out_w
        state["bg_color"] = bg_hex
        state["coverage"] = coverage_value

        render_stickers = []
        for sticker in state.get("stickers", []):
            if isinstance(sticker, dict):
                render_stickers.append(dict(sticker))

        external_pose_ui = None
        for payload in _iter_external_sticker_payloads(sticker_image=sticker_image, sticker_state=sticker_state):
            parsed_state = parse_sticker_state(payload.get("state_raw"))
            payload_state_hash = _hash_text(payload.get("state_raw"))
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

        render_state = dict(state)
        render_state["stickers"] = render_stickers
        ui_ret = _save_input_preview(bg_erp) if bg_erp is not None else {}

        painting_payload = resolve_painting_layer_payload(
            state.get("painting_layer"),
            erp_width=workspace_w,
            erp_height=workspace_h,
        )
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
        out = alpha_composite_over_rgb(bg_np, overlay_rgba) if overlay_rgba is not None else bg_np
        mask_bw = _apply_overlay_coverage_to_mask(mask_bw, coverage_value, out_w, out_h)
        if mask_bw is None:
            mask_bw = np.zeros((out_h, out_w), dtype=np.float32)

        out_t = torch.from_numpy(out)[None, ...]
        mask_t = torch.from_numpy(np.clip(mask_bw.astype(np.float32), 0.0, 1.0))[None, ...]
        if sticker_image is not None:
            ui_ret.update(_save_input_preview(_first_image_tensor(sticker_image), key="pano_sticker_input_images"))
        if external_pose_ui is not None:
            ui_ret["pano_sticker_input_pose"] = [external_pose_ui]
        if warnings:
            for warning in warnings:
                _push_ui_warning(ui_ret, "pano_sticker_warnings", str(warning))
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
            ],
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
    def execute(cls, erp_image, coverage, state_json, output_megapixels=1.0):
        output_megapixels = max(0.01, finite_float(output_megapixels, 1.0))
        state = merge_state(state_in=None, internal_state=state_json)
        coverage_value = normalize_coverage(coverage)
        state["coverage"] = coverage_value
        shots = state.get("shots", []) if isinstance(state, dict) else []
        src = None
        try:
            if erp_image is not None and hasattr(erp_image, "detach"):
                arr = erp_image.detach().cpu().numpy().astype(np.float32)
                if arr.ndim == 4 and arr.shape[0] > 0:
                    src = arr[0]
                elif arr.ndim == 3:
                    src = arr
        except Exception:
            src = None

        if src is None:
            src = np.zeros((512, 1024, 3), dtype=np.float32)

        if src.ndim != 3:
            src = np.zeros((512, 1024, 3), dtype=np.float32)
        else:
            h, w, c = src.shape
            if h <= 1 or w <= 1:
                src = np.zeros((512, 1024, 3), dtype=np.float32)
            elif c < 3:
                src = np.repeat(src[..., :1], 3, axis=-1)
            elif c > 3:
                src = src[..., :3]

        ui_ret = _save_input_preview(erp_image) if erp_image is not None else {}
        if not shots:
            oh = int(src.shape[0])
            ow = int(src.shape[1])
            painting_payload = resolve_painting_layer_payload(
                state.get("painting_layer"),
                erp_width=ow,
                erp_height=oh,
            )
            out, used_group_layers, _compose_stats_unused = _compose_display_list_to_erp(
                state,
                src,
                painting_payload=painting_payload,
                base_dir=Path.cwd(),
                quality="export",
            )
            painting_state = state.get("painting")
            paint_rgba = None
            if used_group_layers:
                paint_rgba = _render_remaining_flat_paint_layer_from_state(painting_state, ow, oh)
            else:
                paint_rgba = painting_payload.get("paint") if isinstance(painting_payload, dict) else None
                if paint_rgba is None:
                    if painting_state_has_renderables(painting_state):
                        _push_ui_warning(
                            ui_ret,
                            "pano_cutout_warnings",
                            "Cutout passthrough fell back to backend stroke rendering because uploaded paint layers were unavailable.",
                        )
                    paint_rgba, _mask_bw = render_painting_to_erp(state.get("painting"), ow, oh)
            if paint_rgba is not None:
                out = alpha_composite_over_rgb(out, paint_rgba)
            mask_bw = painting_payload.get("mask") if isinstance(painting_payload, dict) else None
            if mask_bw is None:
                if painting_state_has_renderables(painting_state):
                    _push_ui_warning(
                        ui_ret,
                        "pano_cutout_warnings",
                        "Cutout passthrough mask fell back to backend stroke rendering because uploaded mask layers were unavailable.",
                    )
                _paint_rgba, mask_bw = render_painting_to_erp(state.get("painting"), ow, oh)
            if mask_bw is None:
                mask_bw = np.zeros((oh, ow), dtype=np.float32)
            _push_ui_warning(
                ui_ret,
                "pano_cutout_warnings",
                "Panorama Cutout has no frame, so the ERP geometry was passed through unchanged while display-list layers, paint, and mask output were still applied.",
            )
            out_t = torch.from_numpy(out.astype(np.float32, copy=False))[None, ...]
            mask_t = torch.from_numpy(np.clip(mask_bw.astype(np.float32), 0.0, 1.0))[None, ...]
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
        empty_mask = torch.zeros((1, oh, ow), dtype=torch.float32)

        try:
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
            out = sample_cutout_from_sampling_map(src, sampling_map)
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
                out = alpha_composite_over_rgb(out, overlay_cutout)
            selected_mask = overlay_mask_bw if isinstance(overlay_mask_bw, np.ndarray) else (
                painting_payload.get("mask") if isinstance(painting_payload, dict) else None
            )
            if isinstance(selected_mask, np.ndarray):
                mask_bw = sample_cutout_from_sampling_map(selected_mask, sampling_map)
            else:
                mask_bw = np.zeros((oh, ow), dtype=np.float32)
            out_t = torch.from_numpy(out)[None, ...]
            mask_t = torch.from_numpy(mask_bw.astype(np.float32))[None, ...]
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
            ],
            outputs=[],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, erp_image, coverage="360"):
        ui_ret = {}
        if erp_image is not None:
            ui_ret = _save_input_preview(erp_image)
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
