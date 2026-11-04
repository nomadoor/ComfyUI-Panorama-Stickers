"""A painting (its strokes and raster objects) drawn on the ERP in the editor's order (`render_painting_to_erp`), and
the entry its readers import from. The strokes are drawn by `paint_strokes.py`, the raster objects placed by
`paint_rasters.py`, and the uploaded paint rasters read by `paint_payload.py`; the names readers use from those
are re-exported here. Each raster object is composited here (`_composite_one_raster_object`, which reads its pixels
with `_sample_box`)."""
import hashlib
import json

import numpy as np

from .cache import CACHE
from .math import over_rgb
from .paint_rasters import (
    _composite_raster_patch,
    _decode_raster_data_url,
    _premultiplied_texels,
    _raster_pixel_span,
    raster_object_placement,
)
from .paint_state import normalize_painting_state
from .paint_strokes import _composite_one_erp_stroke

# Read from here by the renderers, the legacy nodes, and the tests.
from .paint_payload import load_painting_layer_payload  # noqa: F401
from .paint_rasters import raster_object_corners_uv, raster_object_pixel_ranges  # noqa: F401
from .paint_strokes import stamp_half_width_px, stroke_erp_path  # noqa: F401


def _hash_render_payload(payload) -> str:
    raw = json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=True)
    return hashlib.sha1(raw.encode("utf-8")).hexdigest()


def _empty_rgba(width: int, height: int) -> np.ndarray:
    return np.zeros((max(1, height), max(1, width), 4), dtype=np.float32)


def _empty_mask(width: int, height: int) -> np.ndarray:
    return np.zeros((max(1, height), max(1, width)), dtype=np.float32)


def _sample_box(texels: np.ndarray, size: tuple[int, int], local_u: np.ndarray, local_v: np.ndarray) -> np.ndarray:
    """The image of `size` (H, W) whose premultiplied texels are `texels` (_premultiplied_texels), read as straight RGBA
    at the points (local_u, local_v) of its box (0..1 across, an image pixel k's center at (k + 0.5) / its size):
    bilinearly with alpha multiplied in while it is mixed, the edge pixels held out to the box's edge, and transparent
    outside the box (only the points inside are read)."""
    h, w = size
    out = np.zeros(local_u.shape + (4,), dtype=np.float32)
    inside = np.flatnonzero((local_u >= 0.0) & (local_u <= 1.0) & (local_v >= 0.0) & (local_v <= 1.0))
    if not inside.size:
        return out
    sx = np.clip(local_u.ravel()[inside] * w - 0.5, 0.0, w - 1.0)
    sy = np.clip(local_v.ravel()[inside] * h - 0.5, 0.0, h - 1.0)
    x0 = sx.astype(np.int64)
    y0 = sy.astype(np.int64)
    fx = (sx - x0)[:, None]
    fy = (sy - y0)[:, None]
    right = np.minimum(x0 + 1, w - 1) - x0
    row = y0 * w + x0
    below = (np.minimum(y0 + 1, h - 1) - y0) * w
    top = np.take(texels, row, axis=0)
    top += (np.take(texels, row + right, axis=0) - top) * fx
    bottom = np.take(texels, row + below, axis=0)
    bottom += (np.take(texels, row + below + right, axis=0) - bottom) * fx
    top += (bottom - top) * fy
    alpha = top[:, 3:4]
    top[:, :3] = np.where(alpha > 1e-6, top[:, :3] / np.maximum(alpha, 1e-6), 0.0)
    out.reshape(-1, 4)[inside] = top
    return out


def _composite_one_raster_object(
    paint: np.ndarray, mask: np.ndarray, obj: dict, width: int, height: int
) -> None:
    """Draws the raster object over paint (or the mask) as the editor places it: each pixel of the ERP it covers
    (raster_object_pixel_ranges, with the seam's copies at the placement's wrap_offsets) reads its image (_sample_box) at the
    point of its box under the pixel's center, through the inverse of the placement's matrix."""
    placement = raster_object_placement(obj, width, height)
    span = _raster_pixel_span(obj, width, height)
    if placement is None or span is None:
        return
    raster = _decode_raster_data_url(obj.get("rasterDataUrl") or "")
    if raster is None:
        return
    image = np.clip(raster, 0.0, 1.0)
    a, b, c, d = placement["matrix"]
    det = a * d - b * c
    x0, x1, y0, y1 = span
    texels = _premultiplied_texels(image)
    layer_kind = str(obj.get("layerKind") or "paint")
    py = (np.arange(y0, y1, dtype=np.float32) + np.float32(0.5 - placement["center_y"]))[:, None]
    # Each seam copy reads only its columns that land on the ERP ([0, width)): a raster scaled up can span many ERP
    # widths, and only these are drawn. A column's offset from the box's center is the same in every copy (a copy moves
    # the pixels and the center alike).
    for offset in placement["wrap_offsets"]:
        left = max(0, x0 + offset)
        right = min(width, x1 + offset)
        if right <= left:
            continue
        px = (np.arange(left - offset, right - offset, dtype=np.float32) + np.float32(0.5 - placement["center_x"]))[None, :]
        local_u = (np.float32(d / det) * px - np.float32(c / det) * py) / np.float32(placement["width"]) + np.float32(0.5)
        local_v = (np.float32(-b / det) * px + np.float32(a / det) * py) / np.float32(placement["height"]) + np.float32(0.5)
        patch = _sample_box(texels, image.shape[:2], local_u, local_v)
        _composite_raster_patch(paint, mask, patch, layer_kind, y0, y1, left, right)


def _ordered_erp_composite_items(normalized: dict) -> list[dict]:
    group_order = {}
    for idx, group in enumerate(normalized.get("groups") or []):
        if not isinstance(group, dict):
            continue
        action_group_id = str(group.get("actionGroupId") or group.get("id") or "").strip()
        if not action_group_id:
            continue
        group_order[action_group_id] = (float(group.get("z_index") or 0.0), idx)

    strokes = []
    seq = 0
    for stroke in list(normalized.get("paint", {}).get("strokes") or []) + list(normalized.get("mask", {}).get("strokes") or []):
        if not isinstance(stroke, dict):
            continue
        if (stroke.get("targetSpace") or {}).get("kind") != "ERP_GLOBAL":
            continue
        action_group_id = str(stroke.get("actionGroupId") or "").strip()
        z_index, group_seq = group_order.get(action_group_id, (float(seq), seq))
        strokes.append({
            "kind": "stroke",
            "z_index": z_index,
            "group_seq": group_seq,
            "seq": seq,
            "item": stroke,
        })
        seq += 1

    rasters = []
    for obj in normalized.get("raster_objects") or []:
        if not isinstance(obj, dict):
            continue
        rasters.append({
            "kind": "raster",
            "z_index": float(obj.get("z_index") or 0.0),
            "group_seq": seq,
            "seq": seq,
            "item": obj,
        })
        seq += 1

    rasters.sort(key=lambda entry: (entry["z_index"], entry["seq"]))

    ordered = []
    raster_idx = 0
    for stroke_entry in strokes:
        while raster_idx < len(rasters) and rasters[raster_idx]["z_index"] < stroke_entry["z_index"]:
            ordered.append(rasters[raster_idx])
            raster_idx += 1
        ordered.append(stroke_entry)
    while raster_idx < len(rasters):
        ordered.append(rasters[raster_idx])
        raster_idx += 1
    return ordered


def painting_state_has_renderables(painting_state: dict | None) -> bool:
    if not isinstance(painting_state, dict):
        return False
    paint = painting_state.get("paint")
    if isinstance(paint, dict) and isinstance(paint.get("strokes"), list) and paint.get("strokes"):
        return True
    mask = painting_state.get("mask")
    if isinstance(mask, dict) and isinstance(mask.get("strokes"), list) and mask.get("strokes"):
        return True
    raster_objects = painting_state.get("raster_objects")
    if isinstance(raster_objects, list) and raster_objects:
        return True
    return False


def painting_state_has_mask_renderables(painting_state: dict | None) -> bool:
    if not isinstance(painting_state, dict):
        return False
    mask = painting_state.get("mask")
    if isinstance(mask, dict) and isinstance(mask.get("strokes"), list) and mask.get("strokes"):
        return True
    raster_objects = painting_state.get("raster_objects")
    if isinstance(raster_objects, list):
        for item in raster_objects:
            if not isinstance(item, dict):
                continue
            if str(item.get("layerKind") or "paint") == "mask":
                return True
    return False


def render_painting_to_erp(painting_state: dict, width: int, height: int) -> tuple[np.ndarray, np.ndarray]:
    """The paint (RGBA) and mask of the strokes and raster objects of `painting_state` drawn into an ERP, read-only.

    The result is kept in the shared cache (`cache.py`): one render pass draws the same paint more than once (the
    paint and the mask are asked for apart, as are the groups), and an execution renders more than one pass (the
    first frame, then each read of the `video` output)."""
    if not painting_state_has_renderables(painting_state):
        return _empty_rgba(width, height), _empty_mask(width, height)
    normalized = normalize_painting_state(painting_state)
    cache_key = _hash_render_payload({
        "kind": "erp",
        "width": int(width),
        "height": int(height),
        "painting": normalized,
    })
    cached = CACHE.get("painting_erp", cache_key)
    if cached is not None:
        return cached
    paint = _empty_rgba(width, height)
    mask = _empty_mask(width, height)
    for entry in _ordered_erp_composite_items(normalized):
        if entry["kind"] == "raster":
            _composite_one_raster_object(paint, mask, entry["item"], width, height)
        else:
            _composite_one_erp_stroke(paint, mask, entry["item"], width, height)
    return CACHE.put("painting_erp", cache_key, (
        np.clip(paint, 0.0, 1.0).astype(np.float32),
        np.clip(mask, 0.0, 1.0).astype(np.float32),
    ))


def alpha_composite_over_rgb(base_rgb: np.ndarray, paint_rgba: np.ndarray) -> np.ndarray:
    if base_rgb is None:
        return _empty_rgba(paint_rgba.shape[1], paint_rgba.shape[0])[..., :3]
    src = np.clip(base_rgb.astype(np.float32), 0.0, 1.0)
    overlay = np.clip(paint_rgba.astype(np.float32), 0.0, 1.0)
    out = over_rgb(src, overlay[..., :3], overlay[..., 3:4])
    return np.clip(out, 0.0, 1.0).astype(np.float32)
