import base64
import hashlib
import io
import json
import math
from collections import OrderedDict
import threading

import numpy as np
from PIL import Image, ImageDraw

from .cutout import build_cutout_sampling_map, cutout_from_erp, sample_cutout_from_sampling_map
from .paint_state import normalize_painting_state


_ERP_RENDER_CACHE: "OrderedDict[str, tuple[np.ndarray, np.ndarray]]" = OrderedDict()
_CUTOUT_RENDER_CACHE: "OrderedDict[str, tuple[np.ndarray, np.ndarray]]" = OrderedDict()
_PAINTING_LAYER_PAYLOAD_CACHE: "OrderedDict[str, dict]" = OrderedDict()
_RENDER_CACHE_LIMIT = 8
_PAYLOAD_CACHE_LOCK = threading.Lock()


def _clone_render_pair(pair: tuple[np.ndarray, np.ndarray]) -> tuple[np.ndarray, np.ndarray]:
    paint, mask = pair
    return paint.copy(), mask.copy()


def _clone_painting_layer_payload(payload: dict) -> dict:
    paint = payload.get("paint")
    mask = payload.get("mask")
    groups = payload.get("groups")
    return {
        "paint": paint.copy() if isinstance(paint, np.ndarray) else None,
        "mask": mask.copy() if isinstance(mask, np.ndarray) else None,
        "groups": {
            key: value.copy()
            for key, value in (groups.items() if isinstance(groups, dict) else [])
            if isinstance(value, np.ndarray)
        },
        "revision": str(payload.get("revision") or ""),
    }


def _composite_group_layers_to_rgba(groups: dict | None, width: int, height: int) -> np.ndarray | None:
    if not isinstance(groups, dict) or not groups:
        return None
    canvas = None
    for layer in groups.values():
        if not isinstance(layer, np.ndarray):
            continue
        src = _resize_rgba_layer(layer, width, height)
        if src is None:
            continue
        if canvas is None:
            canvas = _empty_rgba(width, height)
        src = np.clip(src.astype(np.float32), 0.0, 1.0)
        dst = canvas
        sa = src[..., 3:4]
        da = dst[..., 3:4]
        out_a = sa + da * (1.0 - sa)
        safe = np.where(out_a > 0, out_a, 1.0)
        dst[..., :3] = (src[..., :3] * sa + dst[..., :3] * da * (1.0 - sa)) / safe
        dst[..., 3:4] = out_a
    return canvas


def _cache_get(cache: "OrderedDict[str, tuple[np.ndarray, np.ndarray]]", key: str) -> tuple[np.ndarray, np.ndarray] | None:
    pair = cache.get(key)
    if pair is None:
        return None
    cache.move_to_end(key)
    return _clone_render_pair(pair)


def _cache_put(cache: "OrderedDict[str, tuple[np.ndarray, np.ndarray]]", key: str, pair: tuple[np.ndarray, np.ndarray]) -> None:
    cache[key] = _clone_render_pair(pair)
    cache.move_to_end(key)
    while len(cache) > _RENDER_CACHE_LIMIT:
        cache.popitem(last=False)


def _payload_cache_get(cache: "OrderedDict[str, dict]", key: str) -> dict | None:
    with _PAYLOAD_CACHE_LOCK:
        value = cache.get(key)
        if value is None:
            return None
        cache.move_to_end(key)
        return _clone_painting_layer_payload(value)


def _payload_cache_put(cache: "OrderedDict[str, dict]", key: str, value: dict) -> None:
    with _PAYLOAD_CACHE_LOCK:
        cache[key] = _clone_painting_layer_payload(value)
        cache.move_to_end(key)
        while len(cache) > _RENDER_CACHE_LIMIT:
            cache.popitem(last=False)


def _hash_render_payload(payload) -> str:
    raw = json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=True)
    return hashlib.sha1(raw.encode("utf-8")).hexdigest()


def _empty_rgba(width: int, height: int) -> np.ndarray:
    return np.zeros((max(1, height), max(1, width), 4), dtype=np.float32)


def _empty_mask(width: int, height: int) -> np.ndarray:
    return np.zeros((max(1, height), max(1, width)), dtype=np.float32)


def _stroke_width_px(stroke: dict, width: int, height: int) -> int:
    # radiusValue is stored as ERP-normalised radius (fraction of ERP width).
    # JS sets it to  size * 0.5 / 2048.  Pixel diameter = radiusValue * 2 * output_width.
    radius_value = stroke.get("radiusValue")
    if radius_value is not None:
        try:
            rv = float(radius_value)
            if rv > 0:
                return max(1, int(round(rv * 2.0 * width)))
        except (TypeError, ValueError):
            pass
    # Fallback for strokes that pre-date radiusValue
    base = max(1.0, float(stroke.get("size") or 1.0))
    scale = max(1.0, min(width, height) / 512.0)
    return max(1, int(round(base * scale)))


def _unwrap_erp_points(points: list[dict]) -> list[list[dict]]:
    if not points:
        return []
    group = [dict(points[0])]
    offset = 0.0
    out = []
    prev_u = float(points[0]["u"])
    for point in points[1:]:
        cur_u = float(point["u"])
        delta = cur_u - prev_u
        if delta > 0.5:
            offset -= 1.0
        elif delta < -0.5:
            offset += 1.0
        next_point = dict(point)
        next_point["u"] = cur_u + offset
        group.append(next_point)
        prev_u = cur_u
    out.append(group)
    return out


def _catmull_rom_resample(coords: list[tuple[float, float]], spacing: float = 2.0) -> list[tuple[float, float]]:
    """Densify a polyline via Catmull-Rom spline so PIL draws smooth curves."""
    n = len(coords)
    if n < 2:
        return coords
    # Phantom end-points mirror the first/last segment.
    pts = [
        (2 * coords[0][0] - coords[1][0], 2 * coords[0][1] - coords[1][1]),
        *coords,
        (2 * coords[-1][0] - coords[-2][0], 2 * coords[-1][1] - coords[-2][1]),
    ]
    out: list[tuple[float, float]] = [coords[0]]
    for i in range(1, len(pts) - 2):
        p0, p1, p2, p3 = pts[i - 1], pts[i], pts[i + 1], pts[i + 2]
        seg_len = math.hypot(p2[0] - p1[0], p2[1] - p1[1])
        steps = max(1, int(math.ceil(seg_len / max(spacing, 0.5))))
        for j in range(1, steps + 1):
            t = j / steps
            t2 = t * t
            t3 = t2 * t
            x = 0.5 * (
                2 * p1[0]
                + (-p0[0] + p2[0]) * t
                + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2
                + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3
            )
            y = 0.5 * (
                2 * p1[1]
                + (-p0[1] + p2[1]) * t
                + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2
                + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3
            )
            out.append((x, y))
    return out


def _stroke_segments_for_erp_geometry(stroke: dict, width: int, height: int) -> list[list[tuple[float, float]]]:
    geometry = stroke.get("geometry") or {}
    kind = str(geometry.get("geometryKind") or "")
    if kind not in {"freehand_open", "freehand_closed", "lasso_fill"}:
        return []
    # ADR 0006: processedPoints is the durable dense point list written by JS on commit.
    # Fall back to points (= rawPoints) with Catmull-Rom densification for old strokes.
    processed = geometry.get("processedPoints")
    raw = geometry.get("points") or []
    use_processed = isinstance(processed, list) and len(processed) >= 1
    source_points = processed if use_processed else raw
    segments = []
    for group in _unwrap_erp_points(source_points):
        coords = [(float(pt["u"]) * width, float(pt["v"]) * height) for pt in group]
        shift_neg = [((float(pt["u"]) - 1.0) * width, float(pt["v"]) * height) for pt in group]
        shift_pos = [((float(pt["u"]) + 1.0) * width, float(pt["v"]) * height) for pt in group]
        if not use_processed and kind in {"freehand_open", "freehand_closed"} and len(coords) >= 2:
            # Old strokes without processedPoints: densify via Catmull-Rom as fallback.
            brush_px = _stroke_width_px(stroke, width, height)
            spacing = max(1.0, brush_px * 0.5)
            coords = _catmull_rom_resample(coords, spacing)
            shift_neg = _catmull_rom_resample(shift_neg, spacing)
            shift_pos = _catmull_rom_resample(shift_pos, spacing)
        segments.append(coords)
        segments.append(shift_neg)
        segments.append(shift_pos)
    return segments


def _stroke_point_paths_for_erp_geometry(stroke: dict) -> list[list[dict]]:
    geometry = stroke.get("geometry") or {}
    kind = str(geometry.get("geometryKind") or "")
    if kind not in {"freehand_open", "freehand_closed"}:
        return []
    processed = geometry.get("processedPoints")
    raw = geometry.get("points") or []
    source_points = processed if isinstance(processed, list) and len(processed) >= 1 else raw
    return _unwrap_erp_points(source_points)


def _stroke_radius_px(stroke: dict, width: int, height: int) -> float:
    return max(0.5, _stroke_width_px(stroke, width, height) * 0.5)


def _stroke_spacing_px(stroke: dict, radius_px: float) -> float:
    spacing = stroke.get("spacing")
    try:
        spacing_val = float(spacing)
        if spacing_val > 0:
            return max(1.0, spacing_val * radius_px * 2.0)
    except (TypeError, ValueError):
        pass
    tool_kind = str(stroke.get("toolKind") or "pen")
    fraction = 0.15 if tool_kind in {"brush", "eraser"} else 0.2
    return max(1.0, fraction * radius_px * 2.0)


_STAMP_ALPHA_CACHE: dict[tuple, np.ndarray] = {}


def _cached_stamp_alpha(cache_key: tuple, builder):
    stamp = _STAMP_ALPHA_CACHE.get(cache_key)
    if stamp is not None:
        return stamp
    stamp = builder()
    if len(_STAMP_ALPHA_CACHE) >= 128:
        _STAMP_ALPHA_CACHE.pop(next(iter(_STAMP_ALPHA_CACHE)))
    _STAMP_ALPHA_CACHE[cache_key] = stamp
    return stamp


def _build_round_stamp_alpha(radius_px: float, hardness: float, aspect: float = 1.0, angle_rad: float = 0.0) -> np.ndarray:
    rx = max(1.0, float(radius_px) * max(0.1, float(aspect)))
    ry = max(1.0, float(radius_px))
    pad = 1.0
    half_w = int(math.ceil(rx + pad))
    half_h = int(math.ceil(ry + pad))
    yy, xx = np.mgrid[-half_h:half_h + 1, -half_w:half_w + 1].astype(np.float32)
    if abs(angle_rad) > 1e-6:
        ca = math.cos(angle_rad)
        sa = math.sin(angle_rad)
        xr = xx * ca + yy * sa
        yr = -xx * sa + yy * ca
    else:
        xr = xx
        yr = yy
    dist = np.sqrt((xr / rx) ** 2 + (yr / ry) ** 2)
    inner = max(0.0, min(1.0, float(hardness)))
    alpha = np.zeros_like(dist, dtype=np.float32)
    alpha[dist <= inner] = 1.0
    feather = (dist > inner) & (dist < 1.0)
    denom = max(1e-6, 1.0 - inner)
    alpha[feather] = 1.0 - ((dist[feather] - inner) / denom)
    return np.clip(alpha, 0.0, 1.0)


def _build_chisel_stamp_alpha(radius_px: float, hardness: float, aspect: float = 1.0, angle_rad: float = 0.0) -> np.ndarray:
    ry = max(1.0, float(radius_px))
    rx = max(ry, float(radius_px) * max(1.0, float(aspect)))
    pad = 1.0
    half_w = int(math.ceil(rx + pad))
    half_h = int(math.ceil(ry + pad))
    yy, xx = np.mgrid[-half_h:half_h + 1, -half_w:half_w + 1].astype(np.float32)
    if abs(angle_rad) > 1e-6:
        ca = math.cos(angle_rad)
        sa = math.sin(angle_rad)
        xr = xx * ca + yy * sa
        yr = -xx * sa + yy * ca
    else:
        xr = xx
        yr = yy
    half_flat = max(0.0, rx - ry)
    qx = np.maximum(np.abs(xr) - half_flat, 0.0)
    qy = np.abs(yr)
    dist = np.sqrt(qx * qx + qy * qy) / max(ry, 1e-6)
    inner = max(0.0, min(1.0, float(hardness)))
    alpha = np.zeros_like(dist, dtype=np.float32)
    alpha[dist <= inner] = 1.0
    feather = (dist > inner) & (dist < 1.0)
    denom = max(1e-6, 1.0 - inner)
    alpha[feather] = 1.0 - ((dist[feather] - inner) / denom)
    return np.clip(alpha, 0.0, 1.0)


def _get_stamp_alpha(stroke: dict, radius_px: float) -> np.ndarray:
    stamp_kind = str(stroke.get("stampKind") or "round")
    hardness = max(0.0, min(1.0, float(stroke.get("hardness") or 0.9)))
    aspect = max(0.1, float(stroke.get("aspect") or 1.0))
    angle = stroke.get("angle") or {}
    angle_rad = float(angle.get("value", 0.0)) if str(angle.get("kind") or "fixed") == "fixed" else 0.0
    if stamp_kind == "chisel":
        key = ("chisel", round(radius_px, 2), round(hardness, 2), round(aspect, 2), round(angle_rad, 4))
        return _cached_stamp_alpha(key, lambda: _build_chisel_stamp_alpha(radius_px, hardness, aspect, angle_rad))
    key = ("round", stamp_kind, round(radius_px, 2), round(hardness, 2), round(aspect, 2), round(angle_rad, 4))
    return _cached_stamp_alpha(key, lambda: _build_round_stamp_alpha(radius_px, hardness, aspect, angle_rad))


def _blend_alpha_mask(dst: np.ndarray, src_alpha: np.ndarray, left: int, top: int):
    h, w = dst.shape[:2]
    sh, sw = src_alpha.shape[:2]
    x0 = max(0, int(left))
    y0 = max(0, int(top))
    x1 = min(w, int(left) + sw)
    y1 = min(h, int(top) + sh)
    if x0 >= x1 or y0 >= y1:
        return
    sx0 = x0 - int(left)
    sy0 = y0 - int(top)
    sx1 = sx0 + (x1 - x0)
    sy1 = sy0 + (y1 - y0)
    src = np.clip(src_alpha[sy0:sy1, sx0:sx1], 0.0, 1.0)
    region = dst[y0:y1, x0:x1]
    region[...] = src + region * (1.0 - src)


def _composite_color_layer(dst: np.ndarray, stroke_alpha: np.ndarray, color_rgb: np.ndarray, opacity: float):
    src_a = np.clip(stroke_alpha * max(0.0, min(1.0, float(opacity))), 0.0, 1.0)
    if not np.any(src_a > 1e-6):
        return
    dst_a = dst[..., 3]
    out_a = src_a + dst_a * (1.0 - src_a)
    out_rgb_num = (
        color_rgb[None, None, :] * src_a[..., None]
        + dst[..., :3] * dst_a[..., None] * (1.0 - src_a[..., None])
    )
    safe_out_a = np.where(out_a > 1e-6, out_a, 1.0)
    dst[..., :3] = np.where(
        out_a[..., None] > 1e-6,
        out_rgb_num / safe_out_a[..., None],
        0.0,
    )
    dst[..., 3] = out_a


def _erase_from_rgba(dst: np.ndarray, erase_alpha: np.ndarray):
    erase = 1.0 - np.clip(erase_alpha, 0.0, 1.0)
    dst[..., :3] *= erase[..., None]
    dst[..., 3] *= erase


def _composite_mask_layer(dst: np.ndarray, stroke_alpha: np.ndarray, opacity: float):
    src_a = np.clip(stroke_alpha * max(0.0, min(1.0, float(opacity))), 0.0, 1.0)
    dst[...] = src_a + dst * (1.0 - src_a)


def _erase_from_mask(dst: np.ndarray, erase_alpha: np.ndarray):
    dst[...] = dst * (1.0 - np.clip(erase_alpha, 0.0, 1.0))


def _stamp_positions_for_path(coords: list[tuple[float, float]], spacing_px: float) -> list[tuple[float, float]]:
    if not coords:
        return []
    out = [coords[0]]
    dist_since = 0.0
    for i in range(1, len(coords)):
        ax, ay = coords[i - 1]
        bx, by = coords[i]
        dx = bx - ax
        dy = by - ay
        seg_len = math.hypot(dx, dy)
        if seg_len < 1e-6:
            continue
        ux = dx / seg_len
        uy = dy / seg_len
        to_next = spacing_px - dist_since
        while to_next <= seg_len + 1e-6:
            out.append((ax + ux * to_next, ay + uy * to_next))
            to_next += spacing_px
        dist_since = seg_len - (to_next - spacing_px)
    return out


def _stroke_freehand_alpha(stroke: dict, width: int, height: int) -> np.ndarray:
    radius_px = _stroke_radius_px(stroke, width, height)
    spacing_px = _stroke_spacing_px(stroke, radius_px)
    base_alpha = _get_stamp_alpha(stroke, radius_px)
    stamp_alpha = np.clip(base_alpha * max(0.0, min(1.0, float(stroke.get("flow") or 1.0))), 0.0, 1.0)
    stroke_alpha = np.zeros((height, width), dtype=np.float32)
    half_h = stamp_alpha.shape[0] // 2
    half_w = stamp_alpha.shape[1] // 2
    for group in _stroke_point_paths_for_erp_geometry(stroke):
        coords = [(float(pt["u"]) * width, float(pt["v"]) * height) for pt in group]
        for x, y in _stamp_positions_for_path(coords, spacing_px):
            left = int(round(x)) - half_w
            top = int(round(y)) - half_h
            _blend_alpha_mask(stroke_alpha, stamp_alpha, left, top)
            _blend_alpha_mask(stroke_alpha, stamp_alpha, left - width, top)
            _blend_alpha_mask(stroke_alpha, stamp_alpha, left + width, top)
    return stroke_alpha


def _polygon_alpha_mask(segments: list[list[tuple[float, float]]], width: int, height: int) -> np.ndarray:
    img = Image.new("L", (max(1, width), max(1, height)), 0)
    draw = ImageDraw.Draw(img, "L")
    for coords in segments:
        if len(coords) >= 3:
            draw.polygon(coords, fill=255, outline=255)
    return np.asarray(img, dtype=np.float32) / 255.0


def _decode_raster_data_url(data_url: str) -> np.ndarray | None:
    """Decode a PNG data URL to a float32 RGBA numpy array, or None on failure."""
    try:
        header, encoded = data_url.split(",", 1)
        if "base64" not in header:
            return None
        raw = base64.b64decode(encoded)
        img = Image.open(io.BytesIO(raw)).convert("RGBA")
        return np.asarray(img, dtype=np.float32) / 255.0
    except Exception:
        return None


def _blend_rgba_band(paint: np.ndarray, src: np.ndarray, src_alpha: np.ndarray,
                     y0: int, y1: int, x0: int, x1: int, sx0: int, sx1: int) -> None:
    sh, sw = y1 - y0, x1 - x0
    if sh <= 0 or sw <= 0:
        return
    sc = src[:sh, sx0:sx1]
    sa = src_alpha[:sh, sx0:sx1]
    dst = paint[y0:y1, x0:x1]
    da = dst[..., 3:4]
    out_a = sa + da * (1.0 - sa)
    safe = np.where(out_a > 0, out_a, 1.0)
    paint[y0:y1, x0:x1, :3] = (sc[..., :3] * sa + dst[..., :3] * da * (1.0 - sa)) / safe
    paint[y0:y1, x0:x1, 3:4] = out_a


def _blend_mask_band(mask: np.ndarray, src_alpha: np.ndarray,
                     y0: int, y1: int, x0: int, x1: int, sx0: int, sx1: int) -> None:
    sh, sw = y1 - y0, x1 - x0
    if sh <= 0 or sw <= 0:
        return
    sa = src_alpha[:sh, sx0:sx1, 0]
    mask[y0:y1, x0:x1] = np.clip(mask[y0:y1, x0:x1] + sa * (1.0 - mask[y0:y1, x0:x1]), 0.0, 1.0)


def _composite_raster_band(paint: np.ndarray, mask: np.ndarray, src: np.ndarray, src_alpha: np.ndarray,
                            layer_kind: str, y0: int, y1: int, x0: int, x1: int, sx0: int, sx1: int) -> None:
    if layer_kind == "mask":
        _blend_mask_band(mask, src_alpha, y0, y1, x0, x1, sx0, sx1)
    else:
        _blend_rgba_band(paint, src, src_alpha, y0, y1, x0, x1, sx0, sx1)


def _place_raster_object(paint: np.ndarray, mask: np.ndarray, src: np.ndarray,
                         layer_kind: str, x0: int, y0: int, x1: int, y1: int,
                         dst_w: int, width: int, height: int) -> None:
    y0c = max(0, min(height, y0))
    y1c = max(0, min(height, y1))
    if y1c <= y0c:
        return
    sy0 = max(0, y0c - y0)
    sy1 = sy0 + (y1c - y0c)
    src = src[sy0:sy1, ...]
    src_alpha = src[..., 3:4]
    if x1 > x0:
        # No horizontal wrap.
        _composite_raster_band(paint, mask, src, src_alpha, layer_kind,
                                y0c, y1c, max(0, x0), min(width, x1), 0, min(width, x1) - max(0, x0))
    else:
        # Horizontal wrap: right band then left band.
        right_w = width - x0
        _composite_raster_band(paint, mask, src, src_alpha, layer_kind,
                                y0c, y1c, x0, width, 0, right_w)
        _composite_raster_band(paint, mask, src, src_alpha, layer_kind,
                                y0c, y1c, 0, x1, right_w, dst_w)


def _uv_bbox_to_pixels(bbox: dict, tf: dict, width: int, height: int) -> tuple[int, int, int, int, int, int]:
    """Return (x0, y0, x1, y1, dst_w, dst_h) after applying translation transform."""
    du = float(tf.get("du") or 0.0)
    dv = float(tf.get("dv") or 0.0)
    u0 = ((float(bbox.get("u0", 0.0)) + du) % 1.0 + 1.0) % 1.0
    v0 = float(bbox.get("v0", 0.0)) + dv
    u1 = ((float(bbox.get("u1", 1.0)) + du) % 1.0 + 1.0) % 1.0
    v1 = float(bbox.get("v1", 1.0)) + dv
    wraps = u1 <= u0
    x0, y0 = int(round(u0 * width)), int(round(v0 * height))
    x1, y1 = int(round(u1 * width)), int(round(v1 * height))
    dst_w = (width - x0 + x1) if wraps else max(1, x1 - x0)
    dst_w = max(1, dst_w)
    dst_h = max(1, y1 - y0)
    return x0, y0, x1, y1, dst_w, dst_h


def _composite_one_raster_object(
    paint: np.ndarray, mask: np.ndarray, obj: dict, width: int, height: int
) -> None:
    raster = _decode_raster_data_url(obj.get("rasterDataUrl") or "")
    if raster is None:
        return
    x0, y0, x1, y1, dst_w, dst_h = _uv_bbox_to_pixels(
        obj.get("bbox") or {}, obj.get("transform") or {}, width, height
    )
    if dst_h <= 0:
        return
    src_img = Image.fromarray((np.clip(raster, 0.0, 1.0) * 255).astype(np.uint8), "RGBA")
    src = np.asarray(src_img.resize((dst_w, dst_h), Image.LANCZOS), dtype=np.float32) / 255.0
    _place_raster_object(paint, mask, src, str(obj.get("layerKind") or "paint"),
                         x0, y0, x1, y1, dst_w, width, height)


def _composite_raster_objects(
    paint: np.ndarray, mask: np.ndarray, raster_objects: list, width: int, height: int
) -> None:
    """Composite raster_frozen objects onto paint/mask ERP arrays in-place."""
    ordered = sorted(
        [obj for obj in raster_objects if isinstance(obj, dict)],
        key=lambda obj: float(obj.get("z_index") or 0.0),
    )
    for obj in ordered:
        _composite_one_raster_object(paint, mask, obj, width, height)


def _composite_one_erp_stroke(paint: np.ndarray, mask: np.ndarray, stroke: dict, width: int, height: int) -> None:
    if (stroke.get("targetSpace") or {}).get("kind") != "ERP_GLOBAL":
        return
    geometry_kind = str((stroke.get("geometry") or {}).get("geometryKind") or "")
    tool_kind = str(stroke.get("toolKind") or "")
    layer_kind = str(stroke.get("layerKind") or "paint")
    if layer_kind == "mask":
        if geometry_kind == "lasso_fill":
            segments = _stroke_segments_for_erp_geometry(stroke, width, height)
            alpha = _polygon_alpha_mask(segments, width, height)
            if tool_kind == "eraser":
                _erase_from_mask(mask, alpha)
            else:
                _composite_mask_layer(mask, alpha, max(0.0, min(1.0, float(stroke.get("opacity") or 1.0))))
            return
        stroke_alpha = _stroke_freehand_alpha(stroke, width, height)
        if tool_kind == "eraser":
            _erase_from_mask(mask, stroke_alpha)
        else:
            _composite_mask_layer(mask, stroke_alpha, max(0.0, min(1.0, float(stroke.get("opacity") or 1.0))))
        return

    if geometry_kind == "lasso_fill":
        segments = _stroke_segments_for_erp_geometry(stroke, width, height)
        alpha = _polygon_alpha_mask(segments, width, height)
        color = stroke.get("color") or {}
        color_rgb = np.array([
            max(0.0, min(1.0, float(color.get("r", 0.0)))),
            max(0.0, min(1.0, float(color.get("g", 0.0)))),
            max(0.0, min(1.0, float(color.get("b", 0.0)))),
        ], dtype=np.float32)
        color_alpha = max(0.0, min(1.0, float(color.get("a", 1.0))))
        _composite_color_layer(paint, alpha * color_alpha, color_rgb, max(0.0, min(1.0, float(stroke.get("opacity") or 1.0))))
        return
    stroke_alpha = _stroke_freehand_alpha(stroke, width, height)
    if tool_kind == "eraser":
        _erase_from_rgba(paint, stroke_alpha)
        return
    color = stroke.get("color") or {}
    color_rgb = np.array([
        max(0.0, min(1.0, float(color.get("r", 0.0)))),
        max(0.0, min(1.0, float(color.get("g", 0.0)))),
        max(0.0, min(1.0, float(color.get("b", 0.0)))),
    ], dtype=np.float32)
    color_alpha = max(0.0, min(1.0, float(color.get("a", 1.0))))
    _composite_color_layer(paint, stroke_alpha * color_alpha, color_rgb, max(0.0, min(1.0, float(stroke.get("opacity") or 1.0))))


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
    if not painting_state_has_renderables(painting_state):
        return _empty_rgba(width, height), _empty_mask(width, height)
    normalized = normalize_painting_state(painting_state)
    cache_key = _hash_render_payload({
        "kind": "erp",
        "width": int(width),
        "height": int(height),
        "painting": normalized,
    })
    cached = _cache_get(_ERP_RENDER_CACHE, cache_key)
    if cached is not None:
        return cached
    paint = _empty_rgba(width, height)
    mask = _empty_mask(width, height)
    for entry in _ordered_erp_composite_items(normalized):
        if entry["kind"] == "raster":
            _composite_one_raster_object(paint, mask, entry["item"], width, height)
        else:
            _composite_one_erp_stroke(paint, mask, entry["item"], width, height)
    result = (
        np.clip(paint, 0.0, 1.0).astype(np.float32),
        np.clip(mask, 0.0, 1.0).astype(np.float32),
    )
    _cache_put(_ERP_RENDER_CACHE, cache_key, result)
    return _clone_render_pair(result)


def _warp_erp_layer_to_cutout(
    erp_layer: np.ndarray,
    shot: dict,
    width: int,
    height: int,
    coverage: int = 360,
    sampling_map: dict | None = None,
) -> np.ndarray:
    yaw = float(shot.get("yaw_deg", 0.0))
    pitch = float(shot.get("pitch_deg", 0.0))
    roll = float(shot.get("roll_deg", 0.0))
    h_fov = max(0.1, float(shot.get("hFOV_deg", 90.0)))
    v_fov = max(0.1, float(shot.get("vFOV_deg", 60.0)))
    coverage_value = 180 if int(coverage) == 180 else 360
    active_sampling_map = sampling_map
    if active_sampling_map is None:
        active_sampling_map = build_cutout_sampling_map(
            erp_layer.shape,
            yaw,
            pitch,
            h_fov,
            v_fov,
            roll,
            width,
            height,
            coverage_value,
        )
    if erp_layer.ndim == 2:
        rgb = np.repeat(np.clip(erp_layer[..., None].astype(np.float32), 0.0, 1.0), 3, axis=2)
        warped = sample_cutout_from_sampling_map(rgb, active_sampling_map)
        return np.clip(warped[..., 0], 0.0, 1.0).astype(np.float32)
    if erp_layer.ndim == 3 and erp_layer.shape[2] in {3, 4}:
        src = np.clip(erp_layer[..., :3].astype(np.float32), 0.0, 1.0)
        if erp_layer.shape[2] == 4:
            alpha = np.clip(erp_layer[..., 3].astype(np.float32), 0.0, 1.0)
            premult = src * alpha[..., None]
            warped_premult = sample_cutout_from_sampling_map(premult, active_sampling_map)
            warped_alpha = _warp_erp_layer_to_cutout(alpha, shot, width, height, coverage_value, sampling_map=active_sampling_map)
            safe_alpha = np.maximum(warped_alpha[..., None], 1e-6)
            warped_rgb = np.where(warped_alpha[..., None] > 1e-6, warped_premult / safe_alpha, 0.0)
            return np.dstack([np.clip(warped_rgb, 0.0, 1.0), np.clip(warped_alpha, 0.0, 1.0)]).astype(np.float32)
        warped_rgb = sample_cutout_from_sampling_map(src, active_sampling_map)
        return np.clip(warped_rgb, 0.0, 1.0).astype(np.float32)
    return _empty_rgba(width, height) if erp_layer.ndim == 3 else _empty_mask(width, height)


def _resize_rgba_layer(layer: np.ndarray | None, width: int, height: int) -> np.ndarray | None:
    if layer is None:
        return None
    if layer.ndim != 3 or layer.shape[-1] != 4:
        return None
    target_w = max(1, int(width))
    target_h = max(1, int(height))
    if layer.shape[1] == target_w and layer.shape[0] == target_h:
        return np.clip(layer.astype(np.float32), 0.0, 1.0)
    resized = Image.fromarray((np.clip(layer, 0.0, 1.0) * 255.0).astype(np.uint8), mode="RGBA").resize(
        (target_w, target_h),
        Image.BILINEAR,
    )
    return np.asarray(resized, dtype=np.float32) / 255.0


def _resize_mask_layer(layer: np.ndarray | None, width: int, height: int) -> np.ndarray | None:
    if layer is None:
        return None
    if layer.ndim != 2:
        return None
    target_w = max(1, int(width))
    target_h = max(1, int(height))
    if layer.shape[1] == target_w and layer.shape[0] == target_h:
        return np.clip(layer.astype(np.float32), 0.0, 1.0)
    resized = Image.fromarray((np.clip(layer, 0.0, 1.0) * 255.0).astype(np.uint8), mode="L").resize(
        (target_w, target_h),
        Image.BILINEAR,
    )
    return np.asarray(resized, dtype=np.float32) / 255.0


def load_painting_layer_payload(
    painting_layer: dict | None,
    *,
    erp_width: int | None = None,
    erp_height: int | None = None,
) -> dict | None:
    if not isinstance(painting_layer, dict):
        return None
    revision = str(painting_layer.get("revision") or "").strip()
    target_w = int(erp_width) if erp_width is not None else None
    target_h = int(erp_height) if erp_height is not None else None
    cache_key = ""
    if revision:
        cache_key = _hash_render_payload({
            "kind": "painting_layer_payload",
            "revision": revision,
            "width": target_w,
            "height": target_h,
        })
        cached_payload = _payload_cache_get(_PAINTING_LAYER_PAYLOAD_CACHE, cache_key)
        if cached_payload is not None:
            return cached_payload
    paint_erp = painting_layer.get("paint") if isinstance(painting_layer.get("paint"), np.ndarray) else None
    mask_erp = painting_layer.get("mask") if isinstance(painting_layer.get("mask"), np.ndarray) else None
    if target_w is not None and target_h is not None:
        paint_erp = _resize_rgba_layer(paint_erp, target_w, target_h)
        mask_erp = _resize_mask_layer(mask_erp, target_w, target_h)

    groups = {}
    raw_groups = painting_layer.get("groups")
    if isinstance(raw_groups, dict):
        for action_group_id, layer in raw_groups.items():
            key = str(action_group_id or "").strip()
            if not key or not isinstance(layer, np.ndarray):
                continue
            resized = _resize_rgba_layer(layer, target_w, target_h) if target_w is not None and target_h is not None else _resize_rgba_layer(layer, layer.shape[1], layer.shape[0])
            if resized is not None:
                groups[key] = resized

    if paint_erp is None and mask_erp is None and not groups:
        return None
    result = {
        "paint": paint_erp,
        "mask": mask_erp,
        "groups": groups,
        "revision": revision,
    }
    if cache_key:
        _payload_cache_put(_PAINTING_LAYER_PAYLOAD_CACHE, cache_key, result)
    return result


def render_painting_to_cutout(
    painting_state: dict,
    shot: dict,
    width: int,
    height: int,
    *,
    erp_width: int = 2048,
    erp_height: int = 1024,
    painting_layer_payload: dict | None = None,
    coverage: int = 360,
    sampling_map: dict | None = None,
) -> tuple[np.ndarray, np.ndarray]:
    def _sampling_map_matches_erp_shape(active_map: dict | None, expected_w: int, expected_h: int) -> bool:
        if not isinstance(active_map, dict):
            return False
        return (
            int(active_map.get("erp_w", 0)) == int(expected_w)
            and int(active_map.get("erp_h", 0)) == int(expected_h)
        )

    coverage_value = 180 if int(coverage) == 180 else 360
    active_sampling_map = sampling_map
    if active_sampling_map is None:
        active_sampling_map = build_cutout_sampling_map(
            (erp_height, erp_width),
            float(shot.get("yaw_deg", 0.0)),
            float(shot.get("pitch_deg", 0.0)),
            float(shot.get("hFOV_deg", 90.0)),
            float(shot.get("vFOV_deg", 60.0)),
            float(shot.get("roll_deg", 0.0)),
            width,
            height,
            coverage_value,
        )
    payload = load_painting_layer_payload(
        painting_layer_payload,
        erp_width=erp_width,
        erp_height=erp_height,
    )
    payload_has_layers = payload is not None and (
        payload.get("paint") is not None
        or payload.get("mask") is not None
        or bool(payload.get("groups"))
    )
    if payload_has_layers:
        paint_erp = payload.get("paint")
        mask_erp = payload.get("mask")
        group_paint_erp = _composite_group_layers_to_rgba(payload.get("groups"), erp_width, erp_height)
        if paint_erp is None and isinstance(group_paint_erp, np.ndarray):
            paint_erp = group_paint_erp
        if paint_erp is None:
            paint_erp = _empty_rgba(erp_width, erp_height)
        if mask_erp is None:
            mask_erp = _empty_mask(erp_width, erp_height)
        paint = _warp_erp_layer_to_cutout(paint_erp, shot, width, height, coverage_value, sampling_map=active_sampling_map)
        mask = _warp_erp_layer_to_cutout(mask_erp, shot, width, height, coverage_value, sampling_map=active_sampling_map)
        return paint, mask
    if not painting_state_has_renderables(painting_state):
        return _empty_rgba(width, height), _empty_mask(width, height)
    normalized = normalize_painting_state(painting_state)
    cache_key = _hash_render_payload({
        "kind": "cutout",
        "width": int(width),
        "height": int(height),
        "erp_width": int(erp_width),
        "erp_height": int(erp_height),
        "shot": {
            "yaw_deg": float(shot.get("yaw_deg", 0.0)),
            "pitch_deg": float(shot.get("pitch_deg", 0.0)),
            "roll_deg": float(shot.get("roll_deg", 0.0)),
            "hFOV_deg": float(shot.get("hFOV_deg", 90.0)),
            "vFOV_deg": float(shot.get("vFOV_deg", 60.0)),
        },
        "painting": normalized,
    })
    cached = _cache_get(_CUTOUT_RENDER_CACHE, cache_key)
    if cached is not None:
        return cached
    # Render from stroke records with 2× supersampling for antialiasing.
    ss_w = min(max(64, int(erp_width)) * 2, 8192)
    ss_h = min(max(32, int(erp_height)) * 2, 4096)
    ss_sampling_map = active_sampling_map
    if not _sampling_map_matches_erp_shape(ss_sampling_map, ss_w, ss_h):
        ss_sampling_map = build_cutout_sampling_map(
            (ss_h, ss_w),
            float(shot.get("yaw_deg", 0.0)),
            float(shot.get("pitch_deg", 0.0)),
            float(shot.get("hFOV_deg", 90.0)),
            float(shot.get("vFOV_deg", 60.0)),
            float(shot.get("roll_deg", 0.0)),
            width,
            height,
            coverage_value,
        )
    paint_erp, mask_erp = render_painting_to_erp(normalized, ss_w, ss_h)
    paint = _warp_erp_layer_to_cutout(paint_erp, shot, width, height, coverage_value, sampling_map=ss_sampling_map)
    mask = _warp_erp_layer_to_cutout(mask_erp, shot, width, height, coverage_value, sampling_map=ss_sampling_map)
    result = (paint.astype(np.float32), mask.astype(np.float32))
    _cache_put(_CUTOUT_RENDER_CACHE, cache_key, result)
    return _clone_render_pair(result)


def alpha_composite_over_rgb(base_rgb: np.ndarray, paint_rgba: np.ndarray) -> np.ndarray:
    if base_rgb is None:
        return _empty_rgba(paint_rgba.shape[1], paint_rgba.shape[0])[..., :3]
    src = np.clip(base_rgb.astype(np.float32), 0.0, 1.0)
    overlay = np.clip(paint_rgba.astype(np.float32), 0.0, 1.0)
    alpha = overlay[..., 3:4]
    out = overlay[..., :3] * alpha + src * (1.0 - alpha)
    return np.clip(out, 0.0, 1.0).astype(np.float32)
