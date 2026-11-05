"""The strokes of a painting drawn on the ERP (docs/render-contract.md "ペイントのストロークの描き方"; JS:
web_src/pano_paint_sphere.js strokeErpPath, stampHalfWidthPx, held together by tests/fixtures/paint_stroke_sphere.json):
a stroke's path on the sphere, its brush stamps, and how one stroke is composited onto the paint and mask layers.
`core/painting.py` draws a whole painting with them."""
import math

import numpy as np
from PIL import Image, ImageDraw

from .math import over_rgba


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
    # Without a radiusValue (a lasso fill): from its size.
    base = max(1.0, float(stroke.get("size") or 1.0))
    scale = max(1.0, min(width, height) / 512.0)
    return max(1, int(round(base * scale)))


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


def _stroke_segments_for_erp_geometry(stroke: dict, width: int, height: int) -> list[list[tuple[float, float]]]:
    """The polygons a lasso fill covers on the ERP: its closed path on the sphere and the seam's copies."""
    geometry = stroke.get("geometry") or {}
    if str(geometry.get("geometryKind") or "") != "lasso_fill":
        return []
    # ADR 0006: processedPoints is the durable dense point list written by JS on commit.
    processed = geometry.get("processedPoints")
    source_points = processed if isinstance(processed, list) and len(processed) >= 1 else geometry.get("points") or []
    # On the sphere: great-circle points between neighbours (the closing edge too), in continuous u, before the
    # seam's copies.
    closed = len(source_points) >= 3
    path = stroke_erp_path(list(source_points) + ([source_points[0]] if closed else []), _stroke_radius_px(stroke, width, height), width, height)
    if closed:
        path = path[:-1]
    if not path:
        return []
    return [[((float(pt["u"]) + shift) * width, float(pt["v"]) * height) for pt in path] for shift in (0.0, -1.0, 1.0)]


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
    out_rgb, out_a = over_rgba(dst[..., :3], dst[..., 3:4], color_rgb[None, None, :], src_a[..., None])
    dst[..., :3] = out_rgb
    dst[..., 3] = out_a[..., 0]


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
            # Wider across by 1 / cos(latitude) (stamp_half_width_px): the stamp's own half width (at least a pixel, as
            # the stamp is made) times that, rounded to half a pixel (at least half) for the stamp cache.
            across = radius_px * aspect
            base = max(1.0, across)
            factor = stamp_half_width_px(radius_px, aspect, y / height, width) / across
            half_width = max(0.5, round(base * factor * 2.0) / 2.0)
            stamp_alpha = np.clip(_get_stamp_alpha(stroke, radius_px, half_width / base) * flow, 0.0, 1.0)
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
