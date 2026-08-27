from __future__ import annotations

from pathlib import Path
import time

import numpy as np

from .cutout import sample_cutout_from_sampling_map
from .display_list import alpha_composite_over_rgba, build_display_entries
from .painting import alpha_composite_over_rgb, render_painting_to_erp
from .stickers import compose_single_sticker_to_canvas_erp, render_stickers_to_rgba_erp


def render_group_layer_from_state(
    painting: dict | None,
    action_group_id: str,
    width: int,
    height: int,
):
    group_id = str(action_group_id or "").strip()
    if not group_id or not isinstance(painting, dict):
        return None
    paint_layer = painting.get("paint") if isinstance(painting.get("paint"), dict) else {}
    all_paint_strokes = paint_layer.get("strokes") if isinstance(paint_layer.get("strokes"), list) else []
    strokes = []
    for stroke in all_paint_strokes:
        if not isinstance(stroke, dict):
            continue
        stroke_group_id = str(stroke.get("actionGroupId") or "").strip()
        tool_kind = str(stroke.get("toolKind") or stroke.get("tool") or stroke.get("mode") or "").strip().lower()
        eraser_flag = stroke.get("eraser") is True or tool_kind in {"eraser", "erase"}
        if stroke_group_id == group_id or (eraser_flag and not stroke_group_id):
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


def render_raster_layer_from_state(item: dict | None, width: int, height: int):
    if not isinstance(item, dict):
        return None
    layer, _mask = render_painting_to_erp({
        "paint": {"strokes": []},
        "mask": {"strokes": []},
        "groups": [],
        "raster_objects": [item],
    }, width, height)
    return layer


def build_remaining_flat_painting_state(painting: dict | None) -> dict | None:
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
        group_id = str(group.get("actionGroupId") or group.get("id") or "").strip()
        if group_id:
            known_group_ids.add(group_id)
    strokes = []
    for stroke in all_paint_strokes:
        if not isinstance(stroke, dict):
            continue
        stroke_group_id = str(stroke.get("actionGroupId") or "").strip()
        tool_kind = str(stroke.get("toolKind") or stroke.get("tool") or stroke.get("mode") or "").strip().lower()
        eraser_flag = stroke.get("eraser") is True or tool_kind in {"eraser", "erase"}
        if eraser_flag and stroke_group_id and stroke_group_id in known_group_ids:
            continue
        if not stroke_group_id or stroke_group_id not in known_group_ids:
            strokes.append(stroke)
    if not strokes:
        return None
    return {
        "paint": {"strokes": strokes},
        "mask": {"strokes": []},
        "groups": [],
        "raster_objects": [],
    }


def build_visual_paint_only_state(painting: dict | None) -> dict | None:
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


def render_remaining_flat_paint_layer_from_state(
    painting: dict | None,
    width: int,
    height: int,
):
    remainder = build_remaining_flat_painting_state(painting)
    if remainder is None:
        return None
    layer, _mask = render_painting_to_erp(remainder, width, height)
    return layer


def compose_display_list_to_erp(
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
    for entry in build_display_entries(state):
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
            layer = render_raster_layer_from_state(
                entry.get("item"),
                int(canvas.shape[1]),
                int(canvas.shape[0]),
            )
            stats["rasters"] += 1
            stats["raster_ms"] += (time.perf_counter() - item_start) * 1000.0
        if layer is None:
            continue
        canvas = alpha_composite_over_rgb(canvas, layer)
        used_paint_entries = True
    return canvas, used_paint_entries, stats


def compose_display_list_to_overlay_rgba(
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
    for entry in build_display_entries(state):
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
                layer = render_group_layer_from_state(painting, action_group_id, width, height)
                stats["group_fallback_renders"] += 1
            else:
                stats["group_payload_hits"] += 1
            stats["stroke_groups"] += 1
            stats["stroke_group_ms"] += (time.perf_counter() - item_start) * 1000.0
        elif entry_type == "rasterObject":
            item_start = time.perf_counter()
            layer = render_raster_layer_from_state(entry.get("item"), width, height)
            stats["rasters"] += 1
            stats["raster_ms"] += (time.perf_counter() - item_start) * 1000.0
        if layer is None:
            continue
        canvas = alpha_composite_over_rgba(canvas, layer)
        used_paint_entries = True
    return canvas, used_paint_entries, stats


def sample_overlay_rgba_from_sampling_map(
    overlay_rgba: np.ndarray,
    sampling_map: dict,
) -> np.ndarray:
    if overlay_rgba is None or overlay_rgba.ndim != 3 or overlay_rgba.shape[-1] != 4:
        return np.zeros((int(sampling_map["out_h"]), int(sampling_map["out_w"]), 4), dtype=np.float32)
    source = np.clip(overlay_rgba.astype(np.float32, copy=False), 0.0, 1.0)
    alpha = np.clip(source[..., 3], 0.0, 1.0)
    premultiplied = source[..., :3] * alpha[..., None]
    warped_premultiplied = sample_cutout_from_sampling_map(premultiplied, sampling_map)
    warped_alpha = sample_cutout_from_sampling_map(alpha, sampling_map)
    safe_alpha = np.maximum(warped_alpha[..., None], 1e-6)
    warped_rgb = np.where(
        warped_alpha[..., None] > 1e-6,
        warped_premultiplied / safe_alpha,
        0.0,
    )
    return np.dstack([
        np.clip(warped_rgb, 0.0, 1.0),
        np.clip(warped_alpha, 0.0, 1.0),
    ]).astype(np.float32)


def should_use_uploaded_group_layers(state: dict, painting_payload: dict | None) -> bool:
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
