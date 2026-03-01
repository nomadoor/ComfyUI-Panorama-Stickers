import json
import uuid
from copy import deepcopy

DEFAULT_STATE = {
    "version": 1,
    "projection_model": "pinhole_rectilinear",
    "alpha_mode": "straight",
    "bg_color": "#00ff00",
    "output_preset": 2048,
    "assets": {},
    "stickers": [],
    "shots": [],
    "active": {
        "selected_sticker_id": None,
        "selected_shot_id": None,
    },
}


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
    if "assets" not in state or not isinstance(state["assets"], dict):
        state["assets"] = {}
    if "stickers" not in state or not isinstance(state["stickers"], list):
        state["stickers"] = []
    if "shots" not in state or not isinstance(state["shots"], list):
        state["shots"] = []
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

