"""Where a raster object of a painting lies on the ERP (docs/render-contract.md "ペイントのラスタの置き方"; JS:
web_src/pano_paint_display.js placeRasterObjectErp, rasterObjectCornersUv, rasterObjectPixelRanges, held together by
tests/fixtures/paint_raster_place.json), its decoded pixels, and how a drawn patch is composited onto the paint or
mask layer. `core/painting.py` draws each raster object with them (`_composite_one_raster_object`).

The paint turns and scales on the plane that measures longitude and latitude in the same degrees: an ERP offset
(du, dv) is the point (2 du, dv) there. Positive degrees turn clockwise on the ERP picture (v grows downwards)."""
import base64
import io
import math

import numpy as np
from PIL import Image

from .math import over_rgba


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


def _composite_raster_patch(paint: np.ndarray, mask: np.ndarray, patch: np.ndarray, layer_kind: str,
                            y0: int, y1: int, x0: int, x1: int) -> None:
    """Lays the straight RGBA `patch` over paint[y0:y1, x0:x1] (or its alpha over the mask)."""
    src_alpha = patch[..., 3:4]
    if layer_kind == "mask":
        dst = mask[y0:y1, x0:x1]
        mask[y0:y1, x0:x1] = np.clip(dst + src_alpha[..., 0] * (1.0 - dst), 0.0, 1.0)
        return
    dst = paint[y0:y1, x0:x1]
    paint[y0:y1, x0:x1, :3], paint[y0:y1, x0:x1, 3:4] = over_rgba(dst[..., :3], dst[..., 3:4], patch[..., :3], src_alpha)
