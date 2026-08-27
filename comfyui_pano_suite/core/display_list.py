from __future__ import annotations

import numpy as np


def _safe_int(value, default: int = 0) -> int:
    try:
        return int(value)
    except Exception:
        return int(default)


def build_display_entries(state: dict) -> tuple[dict, ...]:
    stickers = []
    for item in state.get("stickers", []):
        if not isinstance(item, dict):
            continue
        stickers.append({
            "type": "sticker",
            "z_index": _safe_int(item.get("z_index", 0), 0),
            "item": item,
        })

    painting = state.get("painting") if isinstance(state.get("painting"), dict) else {}
    groups = []
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

    entries = stickers + groups + raster_objects
    return tuple(sorted(entries, key=lambda entry: float(entry.get("z_index", 0))))


def alpha_composite_over_rgba(base_rgba: np.ndarray, overlay_rgba: np.ndarray) -> np.ndarray:
    if base_rgba is None:
        return np.clip(overlay_rgba.astype(np.float32), 0.0, 1.0)
    destination = base_rgba.astype(np.float32, copy=False)
    source = overlay_rgba.astype(np.float32, copy=False)
    if source.ndim != 3 or source.shape[-1] != 4:
        return destination
    if destination.shape[0] != source.shape[0] or destination.shape[1] != source.shape[1]:
        return destination

    alpha_pixels = np.argwhere(source[..., 3] > 1e-6)
    if alpha_pixels.size == 0:
        return destination
    y0, x0 = alpha_pixels.min(axis=0)
    y1, x1 = alpha_pixels.max(axis=0) + 1
    destination_roi = destination[y0:y1, x0:x1]
    source_roi = source[y0:y1, x0:x1]
    source_alpha = np.clip(source_roi[..., 3:4], 0.0, 1.0)
    if float(np.max(source_alpha)) <= 1e-6:
        return destination
    source_rgb = np.clip(source_roi[..., :3], 0.0, 1.0)
    destination_alpha = np.clip(destination_roi[..., 3:4], 0.0, 1.0)
    destination_rgb = np.clip(destination_roi[..., :3], 0.0, 1.0)
    output_alpha = source_alpha + destination_alpha * (1.0 - source_alpha)
    numerator_rgb = source_rgb * source_alpha + destination_rgb * destination_alpha * (1.0 - source_alpha)
    safe_output_alpha = np.maximum(output_alpha, 1e-6)
    output_rgb = np.where(output_alpha > 1e-6, numerator_rgb / safe_output_alpha, 0.0)
    destination_roi[..., :3] = output_rgb
    destination_roi[..., 3:4] = output_alpha
    return destination
