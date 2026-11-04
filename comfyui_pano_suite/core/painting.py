import base64
import hashlib
import io
import json
import math

import numpy as np
from PIL import Image

from .cache import CACHE
from .math import over_rgb
from .paint_state import normalize_painting_state
from .paint_strokes import _composite_one_erp_stroke, stamp_half_width_px, stroke_erp_path  # noqa: F401


def _hash_render_payload(payload) -> str:
    raw = json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=True)
    return hashlib.sha1(raw.encode("utf-8")).hexdigest()


def _empty_rgba(width: int, height: int) -> np.ndarray:
    return np.zeros((max(1, height), max(1, width), 4), dtype=np.float32)


def _empty_mask(width: int, height: int) -> np.ndarray:
    return np.zeros((max(1, height), max(1, width)), dtype=np.float32)


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


def alpha_composite_over_rgb(base_rgb: np.ndarray, paint_rgba: np.ndarray) -> np.ndarray:
    if base_rgb is None:
        return _empty_rgba(paint_rgba.shape[1], paint_rgba.shape[0])[..., :3]
    src = np.clip(base_rgb.astype(np.float32), 0.0, 1.0)
    overlay = np.clip(paint_rgba.astype(np.float32), 0.0, 1.0)
    out = over_rgb(src, overlay[..., :3], overlay[..., 3:4])
    return np.clip(out, 0.0, 1.0).astype(np.float32)
