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
# How the Camera shoots; the first is the default.
PROJECTIONS = ("perspective", "erp")
FILE_STORAGES = ("input", "output", "temp")
# ease-in-out, the Easing of a Keyframe without a valid one.
DEFAULT_EASING = (0.42, 0.0, 0.58, 1.0)
# The range of `timeline.fps` and the largest `timeline.length` (Timeline frames) a state keeps.
TIMELINE_FPS_MIN = 1.0
TIMELINE_FPS_MAX = 240.0
TIMELINE_LENGTH_MAX = 100000


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


def _timeline_fps(value):
    """A Timeline fps brought into range, or None when it is not a positive number."""
    out = _positive(value, None)
    return None if out is None else _clamp(out, TIMELINE_FPS_MIN, TIMELINE_FPS_MAX)


def _timeline_length(value):
    """A `timeline.length` rounded to a frame and brought under TIMELINE_LENGTH_MAX, or None below 1."""
    out = _frame(value)
    return min(out, TIMELINE_LENGTH_MAX) if out is not None and out >= 1 else None


def _bool(value, default):
    return value if isinstance(value, bool) else default


def _vec3(value):
    if not isinstance(value, list) or len(value) != 3:
        return None
    out = [_number(v, None) for v in value]
    return None if None in out else out


def _position_value(raw):
    return _vec3(raw) or [0.0, 0.0, 0.0]


def _rotation_value(raw):
    raw = raw if isinstance(raw, dict) else {}
    return {
        "yaw_deg": _number(raw.get("yaw_deg"), 0.0),
        "pitch_deg": _clamp(_number(raw.get("pitch_deg"), 0.0), -90.0, 90.0),
        "roll_deg": _number(raw.get("roll_deg"), 0.0),
    }


def _fov_value(raw):
    return _clamp(_number(raw, 90.0), 0.1, 179.0)


def _scale_value(raw):
    return _positive(raw, 1.0)


def _direction_value(raw):
    raw = raw if isinstance(raw, dict) else {}
    return {
        "yaw_deg": _number(raw.get("yaw_deg"), 0.0),
        "pitch_deg": _clamp(_number(raw.get("pitch_deg"), 0.0), -90.0, 90.0),
    }


def _roll_value(raw):
    return _number(raw, 0.0)


def _size_value(raw):
    raw = raw if isinstance(raw, dict) else {}
    return {
        "hFOV_deg": _clamp(_number(raw.get("hFOV_deg"), 20.0), 0.1, 179.0),
        "vFOV_deg": _clamp(_number(raw.get("vFOV_deg"), 20.0), 0.1, 179.0),
    }


def _opacity_value(raw):
    return _clamp(_number(raw, 1.0), 0.0, 1.0)


# The Lanes of each owner, in the order they are stored.
CAMERA_LANES = (("position", _position_value), ("rotation", _rotation_value), ("fov", _fov_value))
SCENE_LANES = (("position", _position_value), ("rotation", _rotation_value), ("scale", _scale_value))
SKY_STICKER_LANES = (("direction", _direction_value), ("roll", _roll_value), ("size", _size_value), ("opacity", _opacity_value))
WORLD_STICKER_LANES = (*SCENE_LANES, ("opacity", _opacity_value))


def _easing(raw):
    if raw in ("auto", "hold"):
        return raw
    if isinstance(raw, list) and len(raw) == 4:
        values = [_number(v, None) for v in raw]
        if None not in values and all(0.0 <= v <= 1.0 for v in values):
            return values
    return list(DEFAULT_EASING)


def _handles(raw):
    if not isinstance(raw, dict):
        return None
    out = {}
    for key in ("in", "out"):
        offset = _vec3(raw.get(key))
        if offset is not None:
            out[key] = offset
    return out or None


def _keyframes(raw, value_fn, has_handles):
    by_frame = {}
    for item in raw if isinstance(raw, list) else []:
        if not isinstance(item, dict):
            continue
        frame = _frame(item.get("frame"))
        if frame is None:
            continue
        key = {"frame": frame, "value": value_fn(item.get("value")), "easing": _easing(item.get("easing"))}
        handles = _handles(item.get("handles")) if has_handles else None
        if handles:
            key["handles"] = handles
        by_frame[frame] = key
    return [by_frame[frame] for frame in sorted(by_frame)]


def _lanes(raw, lanes):
    """The normalized Lanes of an owner; only `position` Keyframes keep Motion path handles."""
    out = {}
    for name, value_fn in lanes:
        lane = raw.get(name) if isinstance(raw.get(name), dict) else {}
        out[name] = {"value": value_fn(lane.get("value")), "keyframes": _keyframes(lane.get("keyframes"), value_fn, name == "position")}
    return out


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
        # Same rules as the v1 migration, so a migrated source reads back unchanged.
        subfolder = raw.get("subfolder")
        storage = raw.get("storage")
        storage = storage.strip().lower() if isinstance(storage, str) else None
        return {
            "kind": "file",
            "filename": filename.strip(),
            "subfolder": subfolder.strip().strip("/\\") if isinstance(subfolder, str) else "",
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
    sticker = {
        "id": raw.get("id"),
        "placement": placement,
        "source": source,
        "clip": _clip(raw.get("clip")),
        "visible": _bool(raw.get("visible"), True),
        "locked": _bool(raw.get("locked"), False),
        "crop": _crop(raw.get("crop")),
        **_lanes(raw, WORLD_STICKER_LANES if world else SKY_STICKER_LANES),
    }
    if not world:
        z_index = _frame(raw.get("z_index"))
        sticker["z_index"] = 0 if z_index is None else z_index
    return sticker


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


def _camera(raw):
    """The Camera, or None when the state has none (`camera` missing, null or not an object)."""
    if not isinstance(raw, dict):
        return None
    projection = raw.get("projection") if raw.get("projection") in PROJECTIONS else PROJECTIONS[0]
    return {
        "aspect": _positive(raw.get("aspect"), 1.0),
        "projection": projection,
        "visible": _bool(raw.get("visible"), True),
        **_lanes(raw, CAMERA_LANES),
    }


def default_camera() -> dict:
    """The Camera of a state that has none, for the nodes that always shoot through one (PanoramaCutoutNode)."""
    return _camera({})


def _normalize_v2(raw):
    timeline = raw.get("timeline") if isinstance(raw.get("timeline"), dict) else {}
    scene = raw.get("scene") if isinstance(raw.get("scene"), dict) else {}
    painting_layer = raw.get("painting_layer")
    return {
        "version": STATE_VERSION,
        "timeline": {
            "fps": _timeline_fps(timeline.get("fps")) or 24.0,
            "length": _timeline_length(timeline.get("length")),
        },
        "camera": _camera(raw.get("camera")),
        "scene": {"clip": _clip(scene.get("clip")), "visible": _bool(scene.get("visible"), True), **_lanes(scene, SCENE_LANES)},
        "stickers": _stickers(raw.get("stickers")),
        "painting": normalize_painting_state(raw.get("painting")),
        "painting_layer": deepcopy(painting_layer) if isinstance(painting_layer, dict) else None,
        "painting_visible": _bool(raw.get("painting_visible"), True),
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
    """The Cutout's shot as the Camera; a state without one (Stickers) has no Camera."""
    shot = shots[0] if isinstance(shots, list) and shots else None
    if not isinstance(shot, dict):
        return None
    h_fov = _clamp(_number(shot.get("hFOV_deg"), 90.0), 1.0, 179.0)
    v_fov = _clamp(_number(shot.get("vFOV_deg"), 60.0), 1.0, 179.0)
    return {
        "aspect": math.tan(math.radians(h_fov) * 0.5) / math.tan(math.radians(v_fov) * 0.5),
        "rotation": {"value": {"yaw_deg": shot.get("yaw_deg"), "pitch_deg": shot.get("pitch_deg"), "roll_deg": shot.get("roll_deg")}},
        "fov": {"value": h_fov},
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
            "z_index": item.get("z_index"),
            "direction": {"value": {"yaw_deg": item.get("yaw_deg"), "pitch_deg": item.get("pitch_deg")}},
            "roll": {"value": item.get("rot_deg")},
            "size": {"value": {"hFOV_deg": item.get("hFOV_deg"), "vFOV_deg": item.get("vFOV_deg")}},
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


def _rebase_lanes(owner, lanes, rebase, anchor, new_anchor):
    return {
        name: {
            "value": owner[name]["value"],
            "keyframes": [{**key, "frame": rebase(anchor + key["frame"]) - new_anchor} for key in owner[name]["keyframes"]],
        }
        for name, _value_fn in lanes
    }


def _rebase_clip(clip, rebase):
    """Round the clip's Timeline events (start, content anchor start - in, end) and rebuild in and duration from them."""
    start = rebase(clip["start"])
    anchor = rebase(clip["start"] - clip["in"])
    duration = None if clip["duration"] is None else rebase(clip["start"] + clip["duration"]) - start
    return {"clip": {"start": start, "in": start - anchor, "duration": duration}, "anchor": clip["start"] - clip["in"], "new_anchor": anchor}


def rebase_scene_state(state: dict, fps: float) -> dict:
    """Rescale every stored frame of a loaded state from its `timeline.fps` to `fps`.

    Every Timeline event (Keyframe, Clip range start and end, content anchor) rounds to the nearest
    frame of the new fps, so it moves by at most half a new frame and events at one time stay together.
    """
    rate = _timeline_fps(fps)
    if rate is None:
        raise ValueError(f"Cannot rebase state_json to fps {fps!r}; fps must be a positive number.")
    ratio = rate / state["timeline"]["fps"]

    def rebase(frame):
        return _frame(frame * ratio)

    length = state["timeline"]["length"]
    camera = state["camera"]
    scene = _rebase_clip(state["scene"]["clip"], rebase)
    stickers = []
    for sticker in state["stickers"]:
        clip = _rebase_clip(sticker["clip"], rebase)
        lanes = WORLD_STICKER_LANES if sticker["placement"] == "world" else SKY_STICKER_LANES
        stickers.append({**sticker, "clip": clip["clip"], **_rebase_lanes(sticker, lanes, rebase, clip["anchor"], clip["new_anchor"])})
    return _normalize_v2({
        "timeline": {"fps": rate, "length": None if length is None else max(1, rebase(length))},
        "camera": None if camera is None else {**camera, **_rebase_lanes(camera, CAMERA_LANES, rebase, 0, 0)},
        "scene": {"clip": scene["clip"], "visible": state["scene"]["visible"], **_rebase_lanes(state["scene"], SCENE_LANES, rebase, scene["anchor"], scene["new_anchor"])},
        "stickers": stickers,
        "painting": state["painting"],
        "painting_layer": state["painting_layer"],
        "painting_visible": state["painting_visible"],
    })


def _v1_pose_number(value):
    if isinstance(value, bool) or not isinstance(value, (int, float, str)):
        return math.nan
    try:
        return float(value)
    except ValueError:
        return math.nan


def _sticker_state_camera(raw):
    """Each Camera Lane's Keyframes; an empty or invalid Lane is one Keyframe of its default value at frame 0."""
    raw = raw if isinstance(raw, dict) else {}
    return {
        name: _keyframes(raw.get(name), value_fn, name == "position") or [{"frame": 0, "value": value_fn(None), "easing": list(DEFAULT_EASING)}]
        for name, value_fn in CAMERA_LANES
    }


def _v1_sticker_state_camera(pose):
    if not isinstance(pose, dict):
        return None
    yaw, pitch, roll, h_fov = (_v1_pose_number(pose.get(key)) for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"))
    if not all(math.isfinite(v) for v in (yaw, pitch, roll, h_fov)):
        return None
    return _sticker_state_camera({
        "rotation": [{"frame": 0, "value": {"yaw_deg": ((yaw + 180.0) % 360.0) - 180.0, "pitch_deg": _clamp(pitch, -89.9, 89.9), "roll_deg": roll}}],
        "fov": [{"frame": 0, "value": _clamp(h_fov, 0.1, 179.0)}],
    })


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
        camera = _v1_sticker_state_camera(raw.get("pose"))
        if camera is None:
            return None
        aspect = _v1_pose_number(raw.get("source_aspect"))
        source_aspect = aspect if math.isfinite(aspect) and aspect > 0.0 else None
        fps = 24.0
    elif not isinstance(version, bool) and version == 2:
        camera = _sticker_state_camera(raw.get("camera"))
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
