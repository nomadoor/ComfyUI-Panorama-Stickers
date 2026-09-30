"""State v2 (`state_json`) and `sticker_state` loading.

The contract is documented in docs/scene-state-v2.md. web_src/pano_scene_state.js
must produce the same result for the same input.
"""

import json
import math
from copy import deepcopy

from .paint_state import normalize_painting_state

STATE_VERSION = 2
STICKER_STATE_KIND = "pano_sticker_state"
PLACEMENTS = ("sky", "world")
FILE_STORAGES = ("input", "output", "temp")


def _reject_constant(name):
    raise ValueError(f"JSON constant {name} is not allowed.")


def _parse_json(text):
    return json.loads(text, parse_constant=_reject_constant)


def _number(value, default):
    if isinstance(value, bool) or not isinstance(value, (int, float)) or not math.isfinite(value):
        return default
    return float(value)


def _positive(value, default):
    out = _number(value, default)
    return out if out is not None and out > 0.0 else default


def _clamp(value, lo, hi):
    return max(lo, min(hi, value))


def _frame(value):
    out = _number(value, None)
    return None if out is None else int(math.floor(out + 0.5))


def _bool(value, default):
    return value if isinstance(value, bool) else default


def _vec3(value):
    if not isinstance(value, list) or len(value) != 3:
        return None
    out = [_number(v, None) for v in value]
    return None if None in out else out


def _camera_value(raw):
    raw = raw if isinstance(raw, dict) else {}
    return {
        "position": _vec3(raw.get("position")) or [0.0, 0.0, 0.0],
        "yaw_deg": _number(raw.get("yaw_deg"), 0.0),
        "pitch_deg": _clamp(_number(raw.get("pitch_deg"), 0.0), -90.0, 90.0),
        "roll_deg": _number(raw.get("roll_deg"), 0.0),
        "hFOV_deg": _clamp(_number(raw.get("hFOV_deg"), 90.0), 0.1, 179.0),
    }


def _world_value(raw):
    raw = raw if isinstance(raw, dict) else {}
    return {
        "position": _vec3(raw.get("position")) or [0.0, 0.0, 0.0],
        "yaw_deg": _number(raw.get("yaw_deg"), 0.0),
        "pitch_deg": _clamp(_number(raw.get("pitch_deg"), 0.0), -90.0, 90.0),
        "roll_deg": _number(raw.get("roll_deg"), 0.0),
        "scale": _positive(raw.get("scale"), 1.0),
    }


def _sky_value(raw):
    raw = raw if isinstance(raw, dict) else {}
    return {
        "yaw_deg": _number(raw.get("yaw_deg"), 0.0),
        "pitch_deg": _clamp(_number(raw.get("pitch_deg"), 0.0), -90.0, 90.0),
        "roll_deg": _number(raw.get("roll_deg"), 0.0),
        "hFOV_deg": _clamp(_number(raw.get("hFOV_deg"), 20.0), 0.1, 179.0),
        "vFOV_deg": _clamp(_number(raw.get("vFOV_deg"), 20.0), 0.1, 179.0),
    }


def _opacity_value(raw):
    return _clamp(_number(raw, 1.0), 0.0, 1.0)


def _easing(raw):
    if raw in ("auto", "hold"):
        return raw
    if isinstance(raw, list) and len(raw) == 4:
        values = [_number(v, None) for v in raw]
        if None not in values and 0.0 <= values[0] <= 1.0 and 0.0 <= values[2] <= 1.0:
            return values
    return "auto"


def _handles(raw):
    if not isinstance(raw, dict):
        return None
    out = {}
    for key in ("in", "out"):
        offset = _vec3(raw.get(key))
        if offset is not None:
            out[key] = offset
    return out or None


def _keyframes(raw, value_fn, has_position):
    by_frame = {}
    for item in raw if isinstance(raw, list) else []:
        if not isinstance(item, dict):
            continue
        frame = _frame(item.get("frame"))
        if frame is None:
            continue
        key = {"frame": frame, "value": value_fn(item.get("value")), "easing": _easing(item.get("easing"))}
        handles = _handles(item.get("handles")) if has_position else None
        if handles:
            key["handles"] = handles
        by_frame[frame] = key
    return [by_frame[frame] for frame in sorted(by_frame)]


def _group(raw, value_fn, has_position):
    raw = raw if isinstance(raw, dict) else {}
    return {
        "value": value_fn(raw.get("value")),
        "keyframes": _keyframes(raw.get("keyframes"), value_fn, has_position),
    }


def _clip(raw):
    raw = raw if isinstance(raw, dict) else {}
    start = _frame(raw.get("start"))
    clip_in = _frame(raw.get("in"))
    duration = _frame(raw.get("duration"))
    return {
        "start": 0 if start is None else max(0, start),
        "in": 0 if clip_in is None else max(0, clip_in),
        "duration": None if duration is None else max(1, duration),
    }


def _crop(raw):
    raw = raw if isinstance(raw, dict) else {}
    x0, y0, x1, y1 = (
        _clamp(_number(raw.get(key), default), 0.0, 1.0)
        for key, default in (("x0", 0.0), ("y0", 0.0), ("x1", 1.0), ("y1", 1.0))
    )
    return {"x0": min(x0, x1), "y0": min(y0, y1), "x1": max(x0, x1), "y1": max(y0, y1)}


def _source(raw):
    if not isinstance(raw, dict):
        return None
    kind = raw.get("kind")
    if kind == "port":
        return {"kind": "port"}
    if kind != "file":
        return None
    filename = raw.get("filename")
    if isinstance(filename, str) and filename.strip():
        subfolder = raw.get("subfolder")
        storage = raw.get("storage")
        return {
            "kind": "file",
            "filename": filename,
            "subfolder": subfolder if isinstance(subfolder, str) else "",
            "storage": storage if storage in FILE_STORAGES else "input",
        }
    data_url = raw.get("data_url")
    if isinstance(data_url, str) and data_url.startswith("data:image"):
        return {"kind": "file", "data_url": data_url}
    return None


def _sticker(raw):
    source = _source(raw.get("source"))
    if source is None:
        return None
    placement = raw.get("placement") if raw.get("placement") in PLACEMENTS else "sky"
    world = placement == "world"
    return {
        "id": raw.get("id"),
        "placement": placement,
        "source": source,
        "clip": _clip(raw.get("clip")),
        "visible": _bool(raw.get("visible"), True),
        "locked": _bool(raw.get("locked"), False),
        "crop": _crop(raw.get("crop")),
        "transform": _group(raw.get("transform"), _world_value if world else _sky_value, world),
        "opacity": _group(raw.get("opacity"), _opacity_value, False),
    }


def _stickers(raw):
    stickers = []
    has_port = False
    for item in raw if isinstance(raw, list) else []:
        sticker = _sticker(item) if isinstance(item, dict) else None
        if sticker is None:
            continue
        if sticker["source"]["kind"] == "port":
            if has_port:
                continue
            has_port = True
        stickers.append(sticker)

    used = set()
    for sticker in stickers:
        sticker_id = sticker["id"]
        if isinstance(sticker_id, str) and sticker_id and sticker_id not in used:
            used.add(sticker_id)
        else:
            sticker["id"] = None
    n = 1
    for sticker in stickers:
        if sticker["id"] is None:
            while f"sticker_{n}" in used:
                n += 1
            sticker["id"] = f"sticker_{n}"
            used.add(sticker["id"])
    return stickers


def _normalize_v2(raw):
    timeline = raw.get("timeline") if isinstance(raw.get("timeline"), dict) else {}
    camera = raw.get("camera") if isinstance(raw.get("camera"), dict) else {}
    scene = raw.get("scene") if isinstance(raw.get("scene"), dict) else {}
    length = _frame(timeline.get("length"))
    painting_layer = raw.get("painting_layer")
    return {
        "version": STATE_VERSION,
        "timeline": {
            "fps": _positive(timeline.get("fps"), 24.0),
            "length": length if length is not None and length >= 1 else None,
        },
        "camera": {
            "aspect": _positive(camera.get("aspect"), 1.0),
            "transform": _group(camera.get("transform"), _camera_value, True),
        },
        "scene": {
            "clip": _clip(scene.get("clip")),
            "transform": _group(scene.get("transform"), _world_value, True),
        },
        "stickers": _stickers(raw.get("stickers")),
        "painting": normalize_painting_state(raw.get("painting")),
        "painting_layer": deepcopy(painting_layer) if isinstance(painting_layer, dict) else None,
    }


def _v1_source(sticker, assets):
    if sticker.get("source_kind") == "external_image":
        return {"kind": "port"}
    asset_id = sticker.get("asset_id")
    asset = assets.get(asset_id) if isinstance(asset_id, str) else None
    if not isinstance(asset, dict):
        return None
    asset_type = str(asset.get("type") or "").strip().lower()
    if asset_type == "comfy_image":
        return {
            "kind": "file",
            "filename": str(asset.get("filename") or "").strip(),
            "subfolder": str(asset.get("subfolder") or "").strip().strip("/\\"),
            "storage": str(asset.get("storage") or "input").strip().lower(),
        }
    if asset_type == "dataurl":
        return {"kind": "file", "data_url": asset.get("value")}
    return None


def _v1_camera(shots):
    shot = shots[0] if isinstance(shots, list) and shots else None
    if not isinstance(shot, dict):
        return {}
    h_fov = _clamp(_number(shot.get("hFOV_deg"), 90.0), 1.0, 179.0)
    v_fov = _clamp(_number(shot.get("vFOV_deg"), 60.0), 1.0, 179.0)
    return {
        "aspect": math.tan(math.radians(h_fov) * 0.5) / math.tan(math.radians(v_fov) * 0.5),
        "transform": {"value": {
            "yaw_deg": shot.get("yaw_deg"),
            "pitch_deg": shot.get("pitch_deg"),
            "roll_deg": shot.get("roll_deg"),
            "hFOV_deg": h_fov,
        }},
    }


def _migrate_v1(raw):
    assets = raw.get("assets") if isinstance(raw.get("assets"), dict) else {}
    v1_stickers = [item for item in raw.get("stickers") if isinstance(item, dict)] if isinstance(raw.get("stickers"), list) else []
    v1_stickers.sort(key=lambda item: _number(item.get("z_index"), 0.0))
    stickers = [
        {
            "id": item.get("id"),
            "placement": "sky",
            "source": _v1_source(item, assets),
            "visible": item.get("visible"),
            "locked": item.get("locked"),
            "crop": item.get("crop"),
            "transform": {"value": {
                "yaw_deg": item.get("yaw_deg"),
                "pitch_deg": item.get("pitch_deg"),
                "roll_deg": item.get("rot_deg"),
                "hFOV_deg": item.get("hFOV_deg"),
                "vFOV_deg": item.get("vFOV_deg"),
            }},
        }
        for item in v1_stickers
    ]
    return _normalize_v2({
        "camera": _v1_camera(raw.get("shots")),
        "stickers": stickers,
        "painting": raw.get("painting"),
        "painting_layer": raw.get("painting_layer"),
    })


def load_scene_state(raw) -> dict:
    """Read `state_json` (text or parsed dict) of version 1 or 2 as a normalized v2 state."""
    if raw is None or (isinstance(raw, str) and not raw.strip()):
        return _normalize_v2({})
    if isinstance(raw, str):
        try:
            raw = _parse_json(raw)
        except ValueError:
            raw = None
    if not isinstance(raw, dict):
        raise ValueError("state_json is not a JSON object.")
    version = raw.get("version", 1)
    if isinstance(version, bool) or version not in (1, 2):
        raise ValueError(f"Unsupported state_json version {version!r}; supported versions are 1 and 2.")
    return _migrate_v1(raw) if version == 1 else _normalize_v2(raw)


def _v1_pose_number(value):
    if isinstance(value, bool) or not isinstance(value, (int, float, str)):
        return math.nan
    try:
        return float(value)
    except ValueError:
        return math.nan


def _v1_sticker_state_camera(pose):
    if not isinstance(pose, dict):
        return None
    yaw, pitch, roll, h_fov = (_v1_pose_number(pose.get(key)) for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"))
    if not all(math.isfinite(v) for v in (yaw, pitch, roll, h_fov)):
        return None
    return _camera_value({
        "yaw_deg": ((yaw + 180.0) % 360.0) - 180.0,
        "pitch_deg": _clamp(pitch, -89.9, 89.9),
        "roll_deg": roll,
        "hFOV_deg": _clamp(h_fov, 0.1, 179.0),
    })


def _default_camera_keyframe():
    return {"frame": 0, "value": _camera_value(None), "easing": "auto"}


def load_sticker_state(text) -> dict | None:
    """Read `sticker_state` v1 or v2 as a normalized v2 sticker_state.

    Returns None when the text is not a sticker_state, which callers ignore as before.
    """
    if not isinstance(text, str) or not text.strip():
        return None
    try:
        raw = _parse_json(text)
    except ValueError:
        return None
    if not isinstance(raw, dict) or raw.get("kind") != STICKER_STATE_KIND:
        return None
    version = raw.get("version")
    if not isinstance(version, bool) and version in (1, "1"):
        value = _v1_sticker_state_camera(raw.get("pose"))
        if value is None:
            return None
        camera = [{"frame": 0, "value": value, "easing": "auto"}]
        aspect = _v1_pose_number(raw.get("source_aspect"))
        source_aspect = aspect if math.isfinite(aspect) and aspect > 0.0 else None
        fps = 24.0
    elif not isinstance(version, bool) and version == 2:
        camera = _keyframes(raw.get("camera"), _camera_value, True) or [_default_camera_keyframe()]
        source_aspect = _positive(raw.get("source_aspect"), None)
        fps = _positive(raw.get("fps"), 24.0)
    else:
        raise ValueError(f"Unsupported sticker_state version {version!r}; supported versions are 1 and 2.")
    return {
        "kind": STICKER_STATE_KIND,
        "version": STATE_VERSION,
        "fps": fps,
        "camera": camera,
        "source_aspect": source_aspect,
    }
