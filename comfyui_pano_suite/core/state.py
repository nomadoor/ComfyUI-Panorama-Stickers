import json
import math
import uuid
from copy import deepcopy

from .paint_state import empty_painting_state, normalize_painting_state

DEFAULT_STATE = {
    "version": 1,
    "projection_model": "pinhole_rectilinear",
    "alpha_mode": "straight",
    "coverage": 360,
    "bg_color": "#00ff00",
    "output_preset": 2048,
    "assets": {},
    "stickers": [],
    "shots": [],
    "painting": empty_painting_state(),
    "painting_layer": None,
    "cutout_render_layer": None,
    "active": {
        "selected_sticker_id": None,
        "selected_shot_id": None,
    },
}


def normalize_coverage(value) -> int:
    try:
        return 180 if int(value) == 180 else 360
    except Exception:
        return 360


def make_id(prefix: str) -> str:
    return f"{prefix}_{uuid.uuid4().hex[:8]}"


def merge_state(state_in: str | None, internal_state: str | None, fallback_preset: int = 2048, fallback_bg: str = "#00ff00") -> dict:
    state = deepcopy(DEFAULT_STATE)
    state["output_preset"] = int(fallback_preset)
    state["bg_color"] = fallback_bg

    for src in (internal_state, state_in):
        parsed = parse_state(src)
        if parsed is None:
            continue
        state.update({k: v for k, v in parsed.items() if k in state})

    state["version"] = 1
    state["projection_model"] = "pinhole_rectilinear"
    state["alpha_mode"] = "straight"
    state["coverage"] = normalize_coverage(state.get("coverage"))
    if "assets" not in state or not isinstance(state["assets"], dict):
        state["assets"] = {}
    if "stickers" not in state or not isinstance(state["stickers"], list):
        state["stickers"] = []
    if "shots" not in state or not isinstance(state["shots"], list):
        state["shots"] = []
    state["painting"] = normalize_painting_state(state.get("painting"))
    if not isinstance(state.get("painting_layer"), dict):
        state["painting_layer"] = None
    if not isinstance(state.get("cutout_render_layer"), dict):
        state["cutout_render_layer"] = None
    if "active" not in state or not isinstance(state["active"], dict):
        state["active"] = deepcopy(DEFAULT_STATE["active"])
    if "selected_sticker_id" not in state["active"]:
        state["active"]["selected_sticker_id"] = None
    if "selected_shot_id" not in state["active"]:
        state["active"]["selected_shot_id"] = None
    return state


def parse_state(state_raw: str | None) -> dict | None:
    if not state_raw:
        return None
    if isinstance(state_raw, str):
        text = state_raw.strip()
        if not text:
            return None
        try:
            parsed = json.loads(text)
            if isinstance(parsed, dict):
                return parsed
        except Exception:
            return None
    return None


def dump_state(state: dict) -> str:
    return json.dumps(state, ensure_ascii=True, separators=(",", ":"))


def _wrap_yaw(yaw_deg: float) -> float:
    return ((float(yaw_deg) + 180.0) % 360.0) - 180.0


def parse_sticker_state(state_raw: str | None) -> dict | None:
    if not isinstance(state_raw, str):
        return None
    text = state_raw.strip()
    if not text:
        return None
    try:
        parsed = json.loads(text)
    except Exception:
        return None
    if not isinstance(parsed, dict):
        return None
    if str(parsed.get("kind") or "") != "pano_sticker_state":
        return None
    version_value = parsed.get("version")
    if isinstance(version_value, bool):
        return None
    if isinstance(version_value, int):
        version = version_value
    elif isinstance(version_value, str) and version_value.isdigit():
        try:
            version = int(version_value)
        except ValueError:
            return None
    else:
        return None
    if version != 1:
        return None
    pose = parsed.get("pose")
    if not isinstance(pose, dict):
        return None

    try:
        yaw_deg = _wrap_yaw(float(pose["yaw_deg"]))
        pitch_deg = max(-89.9, min(89.9, float(pose["pitch_deg"])))
        roll_deg = float(pose["roll_deg"])
        h_fov_deg = max(0.1, min(179.0, float(pose["hFOV_deg"])))
    except Exception:
        return None

    values = [yaw_deg, pitch_deg, roll_deg, h_fov_deg]
    if not all(math.isfinite(v) for v in values):
        return None

    out = {
        "yaw_deg": yaw_deg,
        "pitch_deg": pitch_deg,
        "roll_deg": roll_deg,
        "hFOV_deg": h_fov_deg,
    }

    source_aspect = parsed.get("source_aspect", None)
    if source_aspect is not None:
        try:
            source_aspect_val = float(source_aspect)
        except Exception:
            source_aspect_val = None
        if source_aspect_val is not None and math.isfinite(source_aspect_val) and source_aspect_val > 0.0:
            out["source_aspect"] = source_aspect_val

    return out
