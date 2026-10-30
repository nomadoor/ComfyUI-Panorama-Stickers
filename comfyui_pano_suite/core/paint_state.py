import copy
import math


EMPTY_PAINTING_STATE = {
    "version": 1,
    "groups": [],
    "paint": {"strokes": []},
    "mask": {"strokes": []},
    "raster_objects": [],
}

PAINT_TOOL_KINDS = {"pen", "marker", "brush", "eraser", "lasso_fill"}
MASK_TOOL_KINDS = {"pen", "eraser", "lasso_fill"}
GEOMETRY_KINDS = {"freehand_open", "freehand_closed", "lasso_fill"}


def empty_painting_state() -> dict:
    return copy.deepcopy(EMPTY_PAINTING_STATE)


def _finite_float(value):
    """A finite JSON number (not a boolean, not text, not a list) as a float, or None: every number of `painting` is
    read so (docs/scene-state-v2.md, 共通の規則), as the editor's finiteNumber does. An integer too large for a double
    is an infinity in JSON.parse, so it is None too."""
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    try:
        out = float(value)
    except OverflowError:
        return None
    if not math.isfinite(out):
        return None
    return out


def _finite_int(value):
    """An integer as JS reads the number (a double, truncated): one too large for a double is an infinity there, so
    it is invalid (None) here too, rather than an exact integer that a later float() cannot hold."""
    out = _finite_float(value)
    return None if out is None else int(out)


def _z_index(item: dict):
    """The first finite JSON number (not a boolean, not text) of `z_index`, then `zIndex`, or None."""
    for key in ("z_index", "zIndex"):
        out = _finite_float(item.get(key))
        if out is not None:
            return out
    return None


def _js_round(value: float) -> int:
    """Math.round: the nearest integer, halves toward +infinity (-2.5 is -2), unlike Python's round()."""
    out = math.floor(value)
    return int(out + 1 if value - out >= 0.5 else out)


def _normalize_target_space(raw):
    if not isinstance(raw, dict):
        return None
    kind = str(raw.get("kind") or "").strip()
    if kind == "ERP_GLOBAL":
        return {"kind": "ERP_GLOBAL"}
    if kind == "FRAME_LOCAL":
        frame_id_raw = raw.get("frameId")
        if isinstance(frame_id_raw, (str, int)):
            frame_id = str(frame_id_raw).strip()
            if frame_id:
                return {"kind": "FRAME_LOCAL", "frameId": frame_id}
    return None


def _normalize_target_point(raw, target_space):
    if not isinstance(raw, dict):
        return None
    target_kind = str((target_space or {}).get("kind") or raw.get("targetKind") or "").strip()
    if target_kind not in {"ERP_GLOBAL", "FRAME_LOCAL"}:
        return None
    frame_id = None
    if target_kind == "FRAME_LOCAL":
        frame_id_raw = (target_space or {}).get("frameId")
        if frame_id_raw is None:
            frame_id_raw = raw.get("frameId")
        if isinstance(frame_id_raw, (str, int)):
            frame_id = str(frame_id_raw).strip()
        if not frame_id:
            return None
    t = _finite_float(raw.get("t"))
    t = 0.0 if t is None else t
    u = _finite_float(raw.get("u"))
    v = _finite_float(raw.get("v"))
    if u is None or v is None:
        return None
    if target_kind == "ERP_GLOBAL":
        u = float(u % 1.0)
        if abs(u - 1.0) < 1e-9:
            u = 0.0
        v = max(0.0, min(1.0, float(v)))
    else:
        u = float(u)
        v = float(v)
    out = {"targetKind": target_kind, "u": u, "v": v, "t": float(t)}
    if frame_id is not None:
        out["frameId"] = frame_id
    width_scale = _finite_float(raw.get("widthScale"))
    pressure_like = _finite_float(raw.get("pressureLike"))
    if width_scale is not None:
        out["widthScale"] = max(0.0, float(width_scale))
    if pressure_like is not None:
        out["pressureLike"] = max(0.0, float(pressure_like))
    return out


def _normalize_point_list(raw_points, target_space, min_points=1):
    if not isinstance(raw_points, list):
        return None
    out = []
    for item in raw_points:
        point = _normalize_target_point(item, target_space)
        if point is None:
            return None
        out.append(point)
    if len(out) < int(min_points):
        return None
    return out


def _normalize_geometry(raw, target_space, tool_kind, allow_lasso):
    if not isinstance(raw, dict):
        return None
    geometry_kind = str(raw.get("geometryKind") or "").strip()
    if geometry_kind not in GEOMETRY_KINDS:
        return None
    if geometry_kind == "lasso_fill":
        if tool_kind != "lasso_fill" or not allow_lasso:
            return None
        points = _normalize_point_list(raw.get("points"), target_space, min_points=3)
        if points is None:
            return None
        return {"geometryKind": "lasso_fill", "points": points}
    if geometry_kind not in {"freehand_open", "freehand_closed"}:
        return None
    if tool_kind in {"lasso_fill"}:
        return None
    points = _normalize_point_list(raw.get("points"), target_space, min_points=1)
    if points is None:
        return None
    raw_points = _normalize_point_list(raw.get("rawPoints"), target_space, min_points=1)
    processed_points = _normalize_point_list(raw.get("processedPoints"), target_space, min_points=1)
    return {
        "geometryKind": geometry_kind,
        "points": points,
        "rawPoints": raw_points if raw_points is not None else copy.deepcopy(points),
        "processedPoints": processed_points if processed_points is not None else copy.deepcopy(points),
    }


def _resolve_stroke_color(raw_color, layer_kind, tool_kind):
    """Return (color, is_valid). is_valid=False means color was required but missing."""
    if layer_kind == "mask":
        return None, True
    color = _normalize_color(raw_color, allow_color=True)
    if tool_kind != "eraser" and color is None:
        return None, False
    return color, True


def _normalize_stroke_scalars(raw):
    """Return (stroke_id, action_group_id, size, opacity, created_at) or None."""
    stroke_id = str(raw.get("id") or "").strip()
    action_group_id = str(raw.get("actionGroupId") or "").strip()
    if not stroke_id or not action_group_id:
        return None
    size = _finite_float(raw.get("size"))
    opacity = _finite_float(raw.get("opacity"))
    if size is None or opacity is None:
        return None
    created_at = _finite_int(raw.get("createdAt"))
    return stroke_id, action_group_id, size, opacity, 0 if created_at is None else created_at


def _normalize_color(raw, allow_color):
    if not allow_color:
        return None
    if not isinstance(raw, dict):
        return None

    def component(key, default):
        value = _finite_float(raw.get(key))
        return default if value is None else value

    r, g, b, a = component("r", 0.0), component("g", 0.0), component("b", 0.0), component("a", 1.0)
    return {
        "r": max(0.0, min(1.0, float(r))),
        "g": max(0.0, min(1.0, float(g))),
        "b": max(0.0, min(1.0, float(b))),
        "a": max(0.0, min(1.0, float(a))),
    }


def _clamp(value: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, value))


STAMP_KINDS = {"round", "chisel", "crayon"}


def _normalize_brush(raw: dict) -> dict:
    """The brush-shape values a stroke keeps (docs/scene-state-v2.md 「ペイントのストロークの筆の値」), each only when it
    differs from its default, the value the editor's paint engine uses when it is missing. Hardness, flow and spacing
    are always kept, None (the engine's default) unless a JSON number: None is never read as 0."""
    out = {
        "hardness": _finite_float(raw.get("hardness")),
        "flow": _finite_float(raw.get("flow")),
        "spacing": _finite_float(raw.get("spacing")),
    }
    stamp_kind = raw.get("stampKind")
    stamp_kind = stamp_kind if isinstance(stamp_kind, str) and stamp_kind in STAMP_KINDS else "round"
    if stamp_kind != "round":
        out["stampKind"] = stamp_kind
    aspect = _finite_float(raw.get("aspect"))
    if aspect is not None and _clamp(aspect, 0.1, 10.0) != 1.0:
        out["aspect"] = _clamp(aspect, 0.1, 10.0)
    angle = raw.get("angle") if isinstance(raw.get("angle"), dict) else {}
    angle_value = _finite_float(angle.get("value"))
    if angle.get("kind") == "stroke_dir":
        out["angle"] = {"kind": "stroke_dir"}
    elif angle_value is not None and angle_value != 0.0:
        out["angle"] = {"kind": "fixed", "value": angle_value}

    def keep(key, default, lo, hi):
        value = _finite_float(raw.get(key))
        if value is not None and _clamp(value, lo, hi) != default:
            out[key] = _clamp(value, lo, hi)

    if stamp_kind == "chisel":
        keep("chiselEdgeLift", 0.4, 0.0, math.inf)
        keep("chiselCenterDip", 0.3, 0.0, math.inf)
        keep("chiselFiber", 0.0, 0.0, 1.0)
    if stamp_kind == "crayon":
        keep("crayonGrain", 0.65, 0.0, 1.0)
    scatter = raw.get("scatter")
    if isinstance(scatter, dict):
        radius = _finite_float(scatter.get("radius"))
        count = _finite_float(scatter.get("count"))
        out["scatter"] = {
            "radius": max(0.0, 1.5 if radius is None else radius),
            "count": int(_clamp(_js_round(6.0 if count is None else count), 1, 64)),
        }
    return out


def _normalize_stroke(raw, layer_kind):
    if not isinstance(raw, dict):
        return None
    if str(raw.get("layerKind") or "") != layer_kind:
        return None
    tool_kind = str(raw.get("toolKind") or "").strip()
    valid_tools = PAINT_TOOL_KINDS if layer_kind == "paint" else MASK_TOOL_KINDS
    if tool_kind not in valid_tools:
        return None
    target_space = _normalize_target_space(raw.get("targetSpace"))
    if target_space is None:
        return None
    geometry = _normalize_geometry(raw.get("geometry"), target_space, tool_kind, allow_lasso=(layer_kind in {"paint", "mask"}))
    if geometry is None:
        return None
    color, color_ok = _resolve_stroke_color(raw.get("color"), layer_kind, tool_kind)
    if not color_ok:
        return None
    scalars = _normalize_stroke_scalars(raw)
    if scalars is None:
        return None
    stroke_id, action_group_id, size, opacity, created_at = scalars
    radius_value = _finite_float(raw.get("radiusValue"))
    radius_model = str(raw.get("radiusModel") or "").strip() or None
    return {
        "id": stroke_id,
        "actionGroupId": action_group_id,
        "targetSpace": target_space,
        "layerKind": layer_kind,
        "toolKind": tool_kind,
        "brushPresetId": str(raw.get("brushPresetId") or "").strip() or None,
        "color": color,
        "size": max(0.0, float(size)),
        "opacity": max(0.0, min(1.0, float(opacity))),
        **_normalize_brush(raw),
        "createdAt": int(created_at),
        "radiusModel": radius_model,
        "radiusValue": None if radius_value is None else max(0.0, float(radius_value)),
        "geometry": geometry,
    }


def _normalize_layer(raw, layer_kind):
    out = {"strokes": []}
    if not isinstance(raw, dict):
        return out
    strokes = raw.get("strokes")
    if not isinstance(strokes, list):
        return out
    for item in strokes:
        normalized = _normalize_stroke(item, layer_kind)
        if normalized is not None:
            out["strokes"].append(normalized)
    return out


def _normalize_groups(raw_groups):
    if not isinstance(raw_groups, list):
        return []
    out = []
    seen = set()
    for item in raw_groups:
        if not isinstance(item, dict):
            continue
        action_group_id = str(item.get("actionGroupId") or item.get("id") or "").strip()
        if not action_group_id or action_group_id in seen:
            continue
        seen.add(action_group_id)
        z_index = _z_index(item)
        out.append({
            "id": str(item.get("id") or action_group_id),
            "type": "strokeGroup",
            "actionGroupId": action_group_id,
            "z_index": max(0, len(out) if z_index is None else _js_round(z_index)),
        })
    return out


def _normalize_raster_bbox(raw):
    if not isinstance(raw, dict):
        return None
    u0 = _finite_float(raw.get("u0"))
    v0 = _finite_float(raw.get("v0"))
    u1 = _finite_float(raw.get("u1"))
    v1 = _finite_float(raw.get("v1"))
    if None in (u0, v0, u1, v1):
        return None
    clamp = lambda v: max(0.0, min(1.0, float(v)))
    u0 = clamp(u0)
    v0 = clamp(v0)
    u1 = clamp(u1)
    v1 = clamp(v1)
    if None in (u0, v0, u1, v1):
        return None
    if u1 <= u0 or v1 <= v0:
        return None
    return {"u0": u0, "v0": v0, "u1": u1, "v1": v1}


def _normalize_raster_transform(raw):
    tf = raw if isinstance(raw, dict) else {}
    def number(key, default):
        value = _finite_float(tf.get(key))
        return default if value is None else value

    return {"du": number("du", 0.0), "dv": number("dv", 0.0), "rot_deg": number("rot_deg", 0.0),
            "scale": max(0.01, number("scale", 1.0))}


def _normalize_raster_object(item, fallback_z):
    if not isinstance(item, dict):
        return None
    if str(item.get("type") or "") != "raster_frozen":
        return None
    obj_id = str(item.get("id") or "").strip()
    if not obj_id:
        return None
    layer_kind = str(item.get("layerKind") or "paint")
    if layer_kind not in {"paint", "mask"}:
        return None
    raster_data_url = str(item.get("rasterDataUrl") or "").strip()
    if not raster_data_url.startswith("data:"):
        return None
    bbox = _normalize_raster_bbox(item.get("bbox"))
    if bbox is None:
        return None
    z_raw = _z_index(item)
    z_index = max(0.0, float(z_raw)) if z_raw is not None else float(fallback_z)
    return {
        "id": obj_id,
        "type": "raster_frozen",
        "layerKind": layer_kind,
        "z_index": z_index,
        "locked": item.get("locked") is True,
        "bbox": bbox,
        "rasterDataUrl": raster_data_url,
        "transform": _normalize_raster_transform(item.get("transform")),
    }


def _normalize_raster_objects(raw):
    if not isinstance(raw, list):
        return []
    out = []
    seen = set()
    for item in raw:
        normalized = _normalize_raster_object(item, len(out))
        if normalized is None or normalized["id"] in seen:
            continue
        seen.add(normalized["id"])
        out.append(normalized)
    return out


def normalize_painting_state(raw) -> dict:
    out = empty_painting_state()
    if not isinstance(raw, dict):
        return out
    out["groups"] = _normalize_groups(raw.get("groups"))
    out["paint"] = _normalize_layer(raw.get("paint"), "paint")
    out["mask"] = _normalize_layer(raw.get("mask"), "mask")
    out["raster_objects"] = _normalize_raster_objects(raw.get("raster_objects"))
    return out
