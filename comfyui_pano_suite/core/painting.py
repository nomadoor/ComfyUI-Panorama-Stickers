import base64
import hashlib
import io
import json
import math

import numpy as np
from PIL import Image, ImageDraw

from .cache import CACHE
from .cutout import build_cutout_sampling_map, cutout_from_erp, sample_cutout_from_sampling_map
from .math import unit_float
from .paint_state import normalize_painting_state


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
        src = np.clip(unit_float(src), 0.0, 1.0)
        dst = canvas
        sa = src[..., 3:4]
        da = dst[..., 3:4]
        out_a = sa + da * (1.0 - sa)
        safe = np.where(out_a > 0, out_a, 1.0)
        dst[..., :3] = (src[..., :3] * sa + dst[..., :3] * da * (1.0 - sa)) / safe
        dst[..., 3:4] = out_a
    return canvas


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


# --- A stroke drawn on the sphere (docs/render-contract.md "ペイントのストロークの描き方"; JS: web_src/pano_paint_sphere.js
# strokeErpPath, stampHalfWidthPx, held together by tests/fixtures/paint_stroke_sphere.json).


def _short_u(a: float, b: float) -> float:
    d = a - b
    while d > 0.5:
        d -= 1.0
    while d < -0.5:
        d += 1.0
    return d


def _erp_direction(u: float, v: float) -> tuple[float, float, float]:
    lon = (u - 0.5) * 2.0 * math.pi
    lat = (0.5 - v) * math.pi
    c = math.cos(lat)
    return (c * math.sin(lon), math.sin(lat), c * math.cos(lon))


def stroke_erp_path(points: list[dict], radius_px: float, width: int, height: int) -> list[dict]:
    """The points a drawer walks for the stroke `points`, its base radius and a width x height ERP: u continuous across
    the seam (each next one the short way from the one before), with a great circle's midpoint put between two
    neighbours wherever their ERP line's midpoint lies farther from it than half the brush's vertical radius (as an
    angle), again on each half (depth 16 at most; not between about the same directions, opposite ones, or ones under
    a pixel apart). Points put in take the means of their neighbours' t, widthScale and pressureLike."""
    continuous = []
    for point in points or []:
        raw = float(point.get("u") or 0.0)
        u = raw if not continuous else continuous[-1]["u"] + _short_u(raw, continuous[-1]["u"] % 1.0)
        continuous.append({**point, "u": u, "v": float(point.get("v") or 0.0)})
    out: list[dict] = []
    if not continuous:
        return out
    half_angle = float(radius_px) / max(1, height) * math.pi * 0.5

    def between(a: dict, b: dict, depth: int) -> None:
        if depth >= 16:
            return
        if math.hypot((b["u"] - a["u"]) * width, (b["v"] - a["v"]) * height) < 1:
            return
        da = _erp_direction(a["u"], a["v"])
        db = _erp_direction(b["u"], b["v"])
        if math.dist(da, db) < 1e-12:
            return
        if abs(sum(x * y for x, y in zip(da, db)) + 1.0) < 1e-12:
            return
        s = [x + y for x, y in zip(da, db)]
        n = math.sqrt(sum(x * x for x in s))
        g = [x / n for x in s]
        mu, mv = (a["u"] + b["u"]) * 0.5, (a["v"] + b["v"]) * 0.5
        dm = _erp_direction(mu, mv)
        cross = math.sqrt((dm[1] * g[2] - dm[2] * g[1]) ** 2 + (dm[2] * g[0] - dm[0] * g[2]) ** 2 + (dm[0] * g[1] - dm[1] * g[0]) ** 2)
        if math.atan2(cross, sum(x * y for x, y in zip(dm, g))) <= half_angle:
            return
        lat = math.asin(max(-1.0, min(1.0, g[1])))
        if abs(lat) >= math.pi / 2 - 1e-9:
            u = mu
        else:
            u = mu + _short_u(math.atan2(g[0], g[2]) / (2.0 * math.pi) + 0.5, mu % 1.0)
        point = {**a, "u": u, "v": 0.5 - lat / math.pi, "t": (float(a.get("t") or 0.0) + float(b.get("t") or 0.0)) * 0.5}
        for key in ("widthScale", "pressureLike"):
            if key in a or key in b:
                point[key] = (float(a.get(key, 1.0)) + float(b.get(key, 1.0))) * 0.5
            else:
                point.pop(key, None)
        between(a, point, depth + 1)
        out.append(point)
        between(point, b, depth + 1)

    out.append(continuous[0])
    for i in range(1, len(continuous)):
        between(continuous[i - 1], continuous[i], 0)
        out.append(continuous[i])
    return out


def stamp_half_width_px(rv: float, aspect: float, v: float, width: int) -> float:
    """A brush stamp's horizontal radius in pixels on an ERP of `width`, for its vertical radius rv and aspect, at the
    row v: rv · aspect ÷ cos(latitude), the whole width's half where it reaches that."""
    across = float(rv) * float(aspect)
    c = math.cos((0.5 - float(v)) * math.pi)
    return width * 0.5 if across >= c * width * 0.5 else across / c


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
    # On the sphere: great-circle points between neighbours (a lasso's closing edge too), in continuous u, before the
    # seam's copies.
    radius_px = _stroke_radius_px(stroke, width, height)
    closed = kind == "lasso_fill" and len(source_points) >= 3
    path = stroke_erp_path(list(source_points) + ([source_points[0]] if closed else []), radius_px, width, height)
    if closed:
        path = path[:-1]
    for group in [path] if path else []:
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


def _stroke_point_paths_for_erp_geometry(stroke: dict, width: int, height: int) -> list[list[dict]]:
    """The path a freehand stroke's stamps walk (stroke_erp_path: on the sphere, u continuous across the seam)."""
    geometry = stroke.get("geometry") or {}
    kind = str(geometry.get("geometryKind") or "")
    if kind not in {"freehand_open", "freehand_closed"}:
        return []
    processed = geometry.get("processedPoints")
    raw = geometry.get("points") or []
    source_points = processed if isinstance(processed, list) and len(processed) >= 1 else raw
    path = stroke_erp_path(source_points, _stroke_radius_px(stroke, width, height), width, height)
    return [path] if path else []


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


def _build_round_stamp_alpha(radius_px: float, hardness: float, aspect: float = 1.0, angle_rad: float = 0.0,
                             stretch: float = 1.0) -> np.ndarray:
    """The stamp turned by angle_rad, then drawn `stretch` times wider along the ERP's x (stamp_half_width_px)."""
    rx = max(1.0, float(radius_px) * max(0.1, float(aspect)))
    ry = max(1.0, float(radius_px))
    pad = 1.0
    reach_x = rx if abs(angle_rad) <= 1e-6 else max(rx, ry)
    half_w = int(math.ceil(reach_x * stretch + pad))
    half_h = int(math.ceil((ry if abs(angle_rad) <= 1e-6 else max(rx, ry)) + pad))
    yy, xx = np.mgrid[-half_h:half_h + 1, -half_w:half_w + 1].astype(np.float32)
    xx = xx / np.float32(stretch)
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


def _build_chisel_stamp_alpha(radius_px: float, hardness: float, aspect: float = 1.0, angle_rad: float = 0.0,
                              stretch: float = 1.0) -> np.ndarray:
    """The nib turned by angle_rad, then drawn `stretch` times wider along the ERP's x (stamp_half_width_px)."""
    ry = max(1.0, float(radius_px))
    rx = max(ry, float(radius_px) * max(1.0, float(aspect)))
    pad = 1.0
    reach_x = rx if abs(angle_rad) <= 1e-6 else max(rx, ry)
    half_w = int(math.ceil(reach_x * stretch + pad))
    half_h = int(math.ceil((ry if abs(angle_rad) <= 1e-6 else max(rx, ry)) + pad))
    yy, xx = np.mgrid[-half_h:half_h + 1, -half_w:half_w + 1].astype(np.float32)
    xx = xx / np.float32(stretch)
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


def _brush_value(stroke: dict, key: str, default: float) -> float:
    """A stroke's brush value, `default` only when it is missing or None (as the editor's paint engine reads it: 0 is
    a value, not the default)."""
    value = stroke.get(key)
    return default if value is None else float(value)


def _get_stamp_alpha(stroke: dict, radius_px: float, stretch: float = 1.0) -> np.ndarray:
    stamp_kind = str(stroke.get("stampKind") or "round")
    hardness = max(0.0, min(1.0, _brush_value(stroke, "hardness", 0.9)))
    aspect = max(0.1, _brush_value(stroke, "aspect", 1.0))
    angle = stroke.get("angle") or {}
    angle_rad = float(angle.get("value", 0.0)) if str(angle.get("kind") or "fixed") == "fixed" else 0.0
    if stamp_kind == "chisel":
        key = ("chisel", round(radius_px, 2), round(hardness, 2), round(aspect, 2), round(angle_rad, 4), round(stretch, 4))
        return _cached_stamp_alpha(key, lambda: _build_chisel_stamp_alpha(radius_px, hardness, aspect, angle_rad, stretch))
    key = ("round", stamp_kind, round(radius_px, 2), round(hardness, 2), round(aspect, 2), round(angle_rad, 4), round(stretch, 4))
    return _cached_stamp_alpha(key, lambda: _build_round_stamp_alpha(radius_px, hardness, aspect, angle_rad, stretch))


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
    flow = max(0.0, min(1.0, _brush_value(stroke, "flow", 1.0)))
    aspect = max(0.1, _brush_value(stroke, "aspect", 1.0)) if str(stroke.get("stampKind") or "round") != "chisel" else max(1.0, _brush_value(stroke, "aspect", 1.0))
    stroke_alpha = np.zeros((height, width), dtype=np.float32)
    for group in _stroke_point_paths_for_erp_geometry(stroke, width, height):
        coords = [(float(pt["u"]) * width, float(pt["v"]) * height) for pt in group]
        for x, y in _stamp_positions_for_path(coords, spacing_px):
            # Wider across by 1 / cos(latitude) (stamp_half_width_px), rounded to half a pixel for the stamp cache.
            half_width = round(stamp_half_width_px(radius_px, aspect, y / height, width) * 2.0) / 2.0
            stamp_alpha = np.clip(_get_stamp_alpha(stroke, radius_px, half_width / max(1e-6, radius_px * aspect)) * flow, 0.0, 1.0)
            half_h = stamp_alpha.shape[0] // 2
            half_w = stamp_alpha.shape[1] // 2
            # The stamp's center goes on the pixel whose center (i + 0.5) is nearest to (x, y).
            left = math.floor(x) - half_w
            top = math.floor(y) - half_h
            _blend_alpha_mask(stroke_alpha, stamp_alpha, left, top)
            _blend_alpha_mask(stroke_alpha, stamp_alpha, left - width, top)
            _blend_alpha_mask(stroke_alpha, stamp_alpha, left + width, top)
    return stroke_alpha


def _polygon_alpha_mask(segments: list[list[tuple[float, float]]], width: int, height: int) -> np.ndarray:
    # Pillow floors the vertices and fills the pixels on them, which already puts point x on pixel floor(x), as the stamps.
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


def _finite(value, fallback: float = 0.0) -> float:
    """A finite float of `value`, else `fallback` (the editor's `finite`)."""
    try:
        number = float(value)
    except (TypeError, ValueError):
        return fallback
    return number if math.isfinite(number) else fallback


# --- Where a raster object lies (docs/render-contract.md "ペイントのラスタの置き方"; JS: web_src/pano_paint_display.js
# placeRasterObjectErp, rasterObjectCornersUv, rasterObjectPixelRanges, held together by
# tests/fixtures/paint_raster_place.json).
#
# The paint turns and scales on the plane that measures longitude and latitude in the same degrees: an ERP offset
# (du, dv) is the point (2 du, dv) there. Positive degrees turn clockwise on the ERP picture (v grows downwards).

# A pixel bound within this much of a whole pixel counts as on it, so Python's and the browser's last bits of a sine
# take the same pixels.
_PIXEL_EDGE_EPS = 1e-6


def _raster_box(obj: dict) -> dict | None:
    """The raster object's box and transform as the placement reads them, or None without a box or with an empty one:
    the scale at least 0.01 (the floor the painting is read with)."""
    bbox = obj.get("bbox") if isinstance(obj, dict) else None
    if not isinstance(bbox, dict):
        return None
    u0, v0 = _finite(bbox.get("u0")), _finite(bbox.get("v0"))
    u1, v1 = _finite(bbox.get("u1")), _finite(bbox.get("v1"))
    if u1 <= u0 or v1 <= v0:
        return None
    tf = obj.get("transform") if isinstance(obj.get("transform"), dict) else {}
    return {
        "u0": u0, "v0": v0, "u1": u1, "v1": v1,
        "du": _finite(tf.get("du")),
        "dv": _finite(tf.get("dv")),
        "rotation_deg": _finite(tf.get("rot_deg")),
        "scale": max(0.01, _finite(tf.get("scale"), 1.0)),
    }


def _turn_paint_offset(du: float, dv: float, scale: float, rotation_deg: float) -> tuple[float, float]:
    """The ERP offset (du, dv) turned by rotation_deg and scaled by `scale` on the paint plane."""
    rad = rotation_deg * (math.pi / 180)
    cos, sin = math.cos(rad), math.sin(rad)
    x = 2 * du
    return (scale * (x * cos - dv * sin)) / 2, scale * (x * sin + dv * cos)


def _raster_corners_unwrapped(obj: dict) -> list[tuple[float, float]]:
    """The four corners of the raster object's transformed box (top left, top right, bottom right, bottom left) with u
    not wrapped, about its box's center moved by du and dv; none without a box."""
    box = _raster_box(obj)
    if box is None:
        return []
    half_w = (box["u1"] - box["u0"]) * 0.5
    half_h = (box["v1"] - box["v0"]) * 0.5
    center_u = box["u0"] + half_w + box["du"]
    center_v = box["v0"] + half_h + box["dv"]
    corners = []
    for du, dv in ((-half_w, -half_h), (half_w, -half_h), (half_w, half_h), (-half_w, half_h)):
        tu, tv = _turn_paint_offset(du, dv, box["scale"], box["rotation_deg"])
        corners.append((center_u + tu, center_v + tv))
    return corners


def raster_object_corners_uv(obj: dict) -> list[tuple[float, float]]:
    """The four ERP corners (u, v) of the raster object's transformed box (top left, top right, bottom right, bottom
    left; u in 0..1, v not clamped), none without a box. The box is not grown to a pixel."""
    return [(u % 1.0, v) for u, v in _raster_corners_unwrapped(obj)]


def _raster_pixel_span(obj: dict, width: int, height: int) -> tuple[int, int, int, int] | None:
    """(x0, x1, y0, y1) of the pixels the raster object covers, ends exclusive, x not wrapped and y cut to the ERP, or
    None when it covers none."""
    corners = _raster_corners_unwrapped(obj)
    if not corners or width < 1 or height < 1:
        return None
    xs = [u * width for u, _ in corners]
    ys = [v * height for _, v in corners]
    x0 = math.floor(min(xs) + _PIXEL_EDGE_EPS)
    x1 = math.ceil(max(xs) - _PIXEL_EDGE_EPS)
    y0 = max(0, math.floor(min(ys) + _PIXEL_EDGE_EPS))
    y1 = min(height, math.ceil(max(ys) - _PIXEL_EDGE_EPS))
    if x1 <= x0 or y1 <= y0:
        return None
    return x0, x1, y0, y1


def raster_object_pixel_ranges(obj: dict, width: int, height: int) -> list[tuple[int, int, int, int]]:
    """The pixels the raster object covers on a width x height ERP: the box around its transformed corners, cut to the
    ERP's top and bottom, as (x0, y0, x1, y1) (ends exclusive): one, or two across the seam (the whole width when it is
    as wide)."""
    span = _raster_pixel_span(obj, width, height)
    if span is None:
        return []
    x0, x1, y0, y1 = span
    turns = x0 // width
    x0, x1 = x0 - turns * width, x1 - turns * width
    if x1 - x0 >= width:
        return [(0, y0, width, y1)]
    if x1 > width:
        return [(x0, y0, width, y1), (0, y0, x1 - width, y1)]
    return [(x0, y0, x1, y1)]


def raster_object_placement(obj: dict, width: int, height: int, min_pixel: float = 1.0) -> dict | None:
    """Where the raster object lies on a width x height ERP: its center and box size in pixels (at least `min_pixel`
    each way, grown from its top left), rotation, scale and `matrix` (a, b, c, d): a pixel offset (x, y) of the box from
    its center lands at (a x + c y, b x + d y), the paint plane's turn and scale mapped to the ERP's pixels (width / 360
    across, height / 180 down), and `wrap_offsets`: the seam's three copies a turn apart, one of them putting the center
    on the ERP however many turns du has gathered. None without a box, with an empty one, or on an ERP with no size."""
    box = _raster_box(obj)
    if box is None or width < 1 or height < 1:
        return None
    box_width = max(min_pixel, (box["u1"] - box["u0"]) * width)
    box_height = max(min_pixel, (box["v1"] - box["v0"]) * height)
    rad = box["rotation_deg"] * (math.pi / 180)
    cos = box["scale"] * math.cos(rad)
    sin = box["scale"] * math.sin(rad)
    # Pixels per degree down over across.
    aspect = (height / 180) / (width / 360)
    center_x = box["u0"] * width + box_width * 0.5 + box["du"] * width
    # The whole turns du has gathered: the copies sit around the one whose center is on the ERP.
    turns = math.floor(center_x / width)
    return {
        "center_x": center_x,
        "center_y": box["v0"] * height + box_height * 0.5 + box["dv"] * height,
        "width": box_width,
        "height": box_height,
        "rotation_deg": box["rotation_deg"],
        "scale": box["scale"],
        "matrix": (cos, sin * aspect, -sin / aspect, cos),
        "wrap_offsets": tuple(offset - turns * width for offset in (-width, 0, width)),
    }


def _premultiplied_texels(image: np.ndarray) -> np.ndarray:
    """The straight RGBA `image` (H, W, 4) with its alpha multiplied in, as (H * W, 4) float32 texels."""
    return np.concatenate([image[..., :3] * image[..., 3:4], image[..., 3:4]], axis=-1).astype(np.float32).reshape(-1, 4)


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


def _composite_raster_patch(paint: np.ndarray, mask: np.ndarray, patch: np.ndarray, layer_kind: str,
                            y0: int, y1: int, x0: int, x1: int) -> None:
    """Lays the straight RGBA `patch` over paint[y0:y1, x0:x1] (or its alpha over the mask)."""
    src_alpha = patch[..., 3:4]
    if layer_kind == "mask":
        dst = mask[y0:y1, x0:x1]
        mask[y0:y1, x0:x1] = np.clip(dst + src_alpha[..., 0] * (1.0 - dst), 0.0, 1.0)
        return
    dst = paint[y0:y1, x0:x1]
    da = dst[..., 3:4]
    out_a = src_alpha + da * (1.0 - src_alpha)
    safe = np.where(out_a > 0, out_a, 1.0)
    paint[y0:y1, x0:x1, :3] = (patch[..., :3] * src_alpha + dst[..., :3] * da * (1.0 - src_alpha)) / safe
    paint[y0:y1, x0:x1, 3:4] = out_a


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
    # Each ERP pixel's center as an offset from the box's center, the same for every seam copy (a copy moves the pixels
    # and the center alike), read once.
    px = (np.arange(x0, x1, dtype=np.float32) + np.float32(0.5 - placement["center_x"]))[None, :]
    py = (np.arange(y0, y1, dtype=np.float32) + np.float32(0.5 - placement["center_y"]))[:, None]
    local_u = (np.float32(d / det) * px - np.float32(c / det) * py) / np.float32(placement["width"]) + np.float32(0.5)
    local_v = (np.float32(-b / det) * px + np.float32(a / det) * py) / np.float32(placement["height"]) + np.float32(0.5)
    patch = _sample_box(_premultiplied_texels(image), image.shape[:2], local_u, local_v)
    layer_kind = str(obj.get("layerKind") or "paint")
    for offset in placement["wrap_offsets"]:
        left = max(0, x0 + offset)
        right = min(width, x1 + offset)
        if right > left:
            _composite_raster_patch(paint, mask, patch[:, left - offset - x0:right - offset - x0], layer_kind, y0, y1, left, right)


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


def _stroke_opacity(stroke: dict) -> float:
    """The stroke's opacity, 0 to 1, as the editor's paint engine reads it (`stroke.opacity ?? 1`): only a missing one is
    1, so an opacity of 0 draws nothing."""
    opacity = stroke.get("opacity")
    return 1.0 if opacity is None else max(0.0, min(1.0, float(opacity)))


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
                _composite_mask_layer(mask, alpha, _stroke_opacity(stroke))
            return
        stroke_alpha = _stroke_freehand_alpha(stroke, width, height)
        if tool_kind == "eraser":
            _erase_from_mask(mask, stroke_alpha)
        else:
            _composite_mask_layer(mask, stroke_alpha, _stroke_opacity(stroke))
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
        _composite_color_layer(paint, alpha * color_alpha, color_rgb, _stroke_opacity(stroke))
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
    _composite_color_layer(paint, stroke_alpha * color_alpha, color_rgb, _stroke_opacity(stroke))


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


def _resize_layer(layer: np.ndarray, width: int, height: int, mode: str) -> np.ndarray:
    """A layer (0..1 float, or uint8 as an 8-bit image is read) at `width` x `height`, bilinear through 8 bits as the
    editor's uploads are. An 8-bit layer stays 8-bit (the same size is the layer itself); a float one is float."""
    target_w = max(1, int(width))
    target_h = max(1, int(height))
    if layer.dtype == np.uint8:
        if layer.shape[1] == target_w and layer.shape[0] == target_h:
            return layer
        return np.asarray(Image.fromarray(layer, mode=mode).resize((target_w, target_h), Image.BILINEAR))
    if layer.shape[1] == target_w and layer.shape[0] == target_h:
        return np.clip(layer.astype(np.float32), 0.0, 1.0)
    resized = Image.fromarray((np.clip(layer, 0.0, 1.0) * 255.0).astype(np.uint8), mode=mode).resize(
        (target_w, target_h),
        Image.BILINEAR,
    )
    return np.asarray(resized, dtype=np.float32) / 255.0


def _resize_rgba_layer(layer: np.ndarray | None, width: int, height: int) -> np.ndarray | None:
    if layer is None or layer.ndim != 3 or layer.shape[-1] != 4:
        return None
    return _resize_layer(layer, width, height, "RGBA")


def _resize_mask_layer(layer: np.ndarray | None, width: int, height: int) -> np.ndarray | None:
    if layer is None or layer.ndim != 2:
        return None
    return _resize_layer(layer, width, height, "L")


def load_painting_layer_payload(
    painting_layer: dict | None,
    *,
    erp_width: int | None = None,
    erp_height: int | None = None,
) -> dict | None:
    """The uploaded paint rasters of `painting_layer` (`paint` RGBA, `mask`, and `groups` RGBA by action group), at
    `erp_width` x `erp_height` when given. Rasters read from 8-bit images stay uint8 (`unit_float` reads them); the
    arrays are those of `painting_layer` when no size changes and must not be written to."""
    if not isinstance(painting_layer, dict):
        return None
    revision = str(painting_layer.get("revision") or "").strip()
    target_w = int(erp_width) if erp_width is not None else None
    target_h = int(erp_height) if erp_height is not None else None
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
    return {
        "paint": paint_erp,
        "mask": mask_erp,
        "groups": groups,
        "revision": revision,
    }


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
        paint_erp = None if payload.get("paint") is None else unit_float(payload["paint"])
        mask_erp = None if payload.get("mask") is None else unit_float(payload["mask"])
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
    return paint.astype(np.float32), mask.astype(np.float32)


def alpha_composite_over_rgb(base_rgb: np.ndarray, paint_rgba: np.ndarray) -> np.ndarray:
    if base_rgb is None:
        return _empty_rgba(paint_rgba.shape[1], paint_rgba.shape[0])[..., :3]
    src = np.clip(base_rgb.astype(np.float32), 0.0, 1.0)
    overlay = np.clip(paint_rgba.astype(np.float32), 0.0, 1.0)
    alpha = overlay[..., 3:4]
    out = overlay[..., :3] * alpha + src * (1.0 - alpha)
    return np.clip(out, 0.0, 1.0).astype(np.float32)
