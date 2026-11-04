"""The `port` Sticker of Panorama Studio (`docs/studio-node.md`, "Pose handoff"): the media on the `sticker` input
placed on it, the Pose handoff from `sticker_state` (the Lanes of an upstream Camera), and the pose the editor is
told it was added at."""
import math

import comfy.model_management
import numpy as np
import torch

from .core.scene_eval import evaluate_scene_state, segment_easing
from .core.scene_state import STICKER_NUMBER_MAX, load_scene_state, load_sticker_state
from .core.world import FIT_3D_MIN_DISTANCE, box_sphere, fit_3d_position
from .sticker_media import PortMedia, content_box, is_3d_media


def _take_sticker_id(state: dict) -> str:
    """A new Sticker id from the state's `next_sticker_id` counter, which it advances, as the editor does. Like the
    normalization of the ids (`_stickers`, core/scene_state.py), a number whose id is in use is skipped (ids past
    STICKER_NUMBER_MAX are not counted, so the counter can stop on one), and the counter stays at most
    STICKER_NUMBER_MAX."""
    used = {sticker["id"] for sticker in state["stickers"]}
    number = state["next_sticker_id"]
    while f"sticker_{number}" in used:
        number += 1
    state["next_sticker_id"] = min(number + 1, STICKER_NUMBER_MAX)
    return f"sticker_{number}"


def _nearest_turn(angle: float, previous: float) -> float:
    return previous + (angle - previous + 180.0) % 360.0 - 180.0


def _in_hold(keyframes: list[dict], frame: float) -> bool:
    """Whether `frame` is in a segment that holds its value until the next Keyframe (a cut)."""
    return segment_easing(keyframes, frame) == "hold"


def _lane_numbers(value) -> tuple:
    if isinstance(value, dict):
        return tuple(value.values())
    return tuple(value) if isinstance(value, list) else (value,)


def _handoff_lanes(sticker_state: dict, fps: float) -> tuple[str, dict]:
    """The placement and Lanes of the port Sticker that put it back where the Camera of `sticker_state` shot it
    (Pose handoff), at the Timeline `fps` of the state. The Sticker's clip frame is the time of its media.

    It is always a `sky` Sticker (direction, roll, size and lens curve), wherever the Camera stands (ADR 0059): at
    infinity it covers what was at infinity from any position, and seen from the Camera it covers the shot.

    A Camera that moves is read at every Timeline frame over its Keyframes and baked into `auto` Keyframes,
    because a Camera rotation and a Sticker direction interpolate differently between Keyframes.
    A frame inside a `hold` segment of the Camera is a `hold` Keyframe, so a cut stays a cut. A Lane that the
    Camera does not move is a static value.
    """
    camera = sticker_state["camera"]
    ratio = sticker_state["fps"] / fps
    shot = load_scene_state({"version": 2, "timeline": {"fps": sticker_state["fps"]}, "camera": {name: {"keyframes": keys} for name, keys in camera.items()}})
    first = min(keys[0]["frame"] for keys in camera.values())
    last = max(keys[-1]["frame"] for keys in camera.values())
    frames = range(math.floor(first / ratio), math.ceil(last / ratio) + 1)
    shots = []
    for frame in frames:
        # A long bake stops at Cancel.
        comfy.model_management.throw_exception_if_processing_interrupted()
        value = evaluate_scene_state(shot, frame * ratio)["camera"]
        if shots:
            # Yaw and roll keep turning past 180 instead of jumping back a whole turn between Keyframes.
            value = {**value, "yaw_deg": _nearest_turn(value["yaw_deg"], shots[-1]["yaw_deg"]), "roll_deg": _nearest_turn(value["roll_deg"], shots[-1]["roll_deg"])}
        shots.append(value)
    placement = "sky"
    direction = [{"yaw_deg": value["yaw_deg"], "pitch_deg": value["pitch_deg"]} for value in shots]
    roll = [value["roll_deg"] for value in shots]
    # A port Sticker's vFOV follows its media (`derive_vfov`); stored, it is hFOV (docs/scene-state-v2.md).
    size = [{"hFOV_deg": value["hFOV_deg"], "vFOV_deg": value["hFOV_deg"]} for value in shots]
    curve = [value["curve"] for value in shots]
    series = [("direction", direction, ("rotation",)), ("roll", roll, ("rotation",)), ("size", size, ("fov",)), ("curve", curve, ("curve",))]
    lanes = {}
    for name, values, sources in series:
        moves = any(abs(a - b) > 1e-9 for value in values for a, b in zip(_lane_numbers(value), _lane_numbers(values[0])))
        keyframes = [
            {"frame": frame, "value": value, "easing": "hold" if any(_in_hold(camera[source], frame * ratio) for source in sources) else "auto"}
            for frame, value in zip(frames, values)
        ] if moves else []
        lanes[name] = {"value": values[0], "keyframes": keyframes}
    return placement, lanes


# The view a 3D port Sticker that the node adds is fitted to (docs/editor-interaction.md, "3D の Sticker を収めて
# 置く"): the editor's default horizontal 100 degrees on a 16:9 view, vertically. The node has no view of its own.
PORT_3D_FIT_FOV_DEG = math.degrees(2.0 * math.atan(math.tan(math.radians(50.0)) * 9.0 / 16.0))


def _world_port_sticker(state: dict, media, sticker_id: str | None = None) -> dict:
    """The port Sticker for 3D media: `world`, with rotation 0 and scale 1 (the content keeps its own orientation
    and its front (+Z) faces the origin), placed so that the whole content (`content_box`, every item) fits the
    front of the ERP taken from the World origin at rotation 0 (`fit_3d_position` with PORT_3D_FIT_FOV_DEG);
    without content its origin goes NEW_WORLD_STICKER_DISTANCE ahead along -Z."""
    sphere = box_sphere(content_box(media))
    center, radius = sphere if sphere is not None else (None, None)
    rotation = {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}
    position = fit_3d_position([0.0, 0.0, 0.0], [0.0, 0.0, -1.0], center, radius, rotation, PORT_3D_FIT_FOV_DEG, FIT_3D_MIN_DISTANCE, PORT_3D_FIT_FOV_DEG)
    raw = {"id": sticker_id or _take_sticker_id(state), "placement": "world", "source": {"kind": "port"}, "position": {"value": position}}
    return load_scene_state({"version": 2, "stickers": [raw]})["stickers"][0]


def _top_sky_z_index(state: dict) -> int:
    """Above every other sky Sticker, as the legacy node placed the port Sticker (paint layers are not counted)."""
    return max((sticker["z_index"] for sticker in state["stickers"] if sticker["placement"] == "sky"), default=-1) + 1


def _port_sticker(state: dict, handoff: tuple[str, dict] | None) -> dict:
    """The port Sticker appended when the state has none, placed by the `handoff` (`_handoff_lanes`) when given."""
    placement, lanes = handoff or ("sky", {"direction": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0}}, "roll": {"value": 0.0}, "size": {"value": {"hFOV_deg": 30.0, "vFOV_deg": 30.0}}})
    raw = {"id": _take_sticker_id(state), "placement": placement, "source": {"kind": "port"}, **lanes}
    if placement == "sky":
        raw["z_index"] = _top_sky_z_index(state)
    return load_scene_state({"version": 2, "stickers": [raw]})["stickers"][0]


def _inherit_handoff(state: dict, stored: dict, placement: str, lanes: dict) -> dict:
    """The stored port Sticker with the Lanes of the handoff (`_handoff_lanes`), except those in its
    `handoff_overrides`, which keep their stored value (ADR 0030). The placement follows the handoff: a stored
    Sticker of the other placement is replaced under the same id, keeping its Clip range, visibility, lock, crop,
    opacity, and the `handoff_overrides` of Lanes the new placement has; its other Lanes and overrides are dropped."""
    if stored["placement"] == placement:
        raw = {**stored, **{name: lane for name, lane in lanes.items() if name not in stored["handoff_overrides"]}}
        if "lens" not in lanes:
            # A shot through a pinhole alone hands today's plane, whatever lens an earlier shot handed.
            raw.pop("lens", None)
    else:
        kept = {key: stored[key] for key in ("id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides")}
        raw = {**kept, "placement": placement, **lanes}
        if placement == "sky":
            raw["z_index"] = _top_sky_z_index(state)
    return load_scene_state({"version": 2, "stickers": [raw]})["stickers"][0]


def _port_rgba(image: torch.Tensor) -> np.ndarray:
    image = image.detach().cpu().float().clamp(0.0, 1.0).numpy()
    alpha = image[..., 3:4] if image.shape[-1] == 4 else np.ones((*image.shape[:2], 1), dtype=np.float32)
    return np.concatenate([image[..., :3], alpha], axis=-1)


def _port_media(state: dict, sticker, sticker_state, warnings: list[str]) -> tuple[PortMedia | None, tuple[str, dict] | None]:
    """The media on the sticker input, on the port Sticker, and the handoff (`_handoff_lanes`) it got from
    `sticker_state` (None without one, or for 3D media).

    With 2D media and a `sticker_state`, the handoff is computed on every run and placed on the port Sticker,
    appended to `state` when it is missing, else inherited by the stored one (`_inherit_handoff`).
    Without a `sticker_state`, a missing port Sticker is appended at the default pose, and a stored one is kept.
    3D media (SPLAT or MESH), which Pose handoff does not place, appends a `world` port Sticker when it is missing;
    a stored `sky` port Sticker with 3D media is replaced in `state` by the `world` one under the same id, keeping
    its Clip range, visibility and lock (its sky Lanes do not apply to a world Sticker)."""
    if sticker is None:
        return None, None
    is_3d = is_3d_media(sticker)
    parsed = load_sticker_state(sticker_state)
    handoff = None if is_3d or parsed is None else _handoff_lanes(parsed, state["timeline"]["fps"])
    index = next((i for i, item in enumerate(state["stickers"]) if item["source"]["kind"] == "port"), None)
    if index is None:
        if is_3d and parsed is not None:
            warnings.append("sticker_state places only 2D Stickers; the 3D Sticker is placed in front of the origin to fit the view.")
        state["stickers"].append(_world_port_sticker(state, sticker) if is_3d else _port_sticker(state, handoff))
        index = len(state["stickers"]) - 1
    elif handoff is not None:
        state["stickers"][index] = _inherit_handoff(state, state["stickers"][index], *handoff)
    elif is_3d and state["stickers"][index]["placement"] == "sky":
        stored = state["stickers"][index]
        state["stickers"][index] = {**_world_port_sticker(state, sticker, stored["id"]), **{key: stored[key] for key in ("clip", "visible", "locked", "animation") if key in stored}}
    port = state["stickers"][index]
    return PortMedia(port["id"], port["clip"], sticker, state["timeline"]["fps"]), handoff


def _port_pose_ui(state: dict, port: PortMedia | None, stored_port: dict | None) -> dict:
    """The `ui` with the pose the port Sticker was added at, for the editor to add it to the state the same way:
    with the Keyframes of a Camera that moved (Pose handoff), or the transform of a 3D one, `replace` when it
    replaced a stored port Sticker of the other placement. Empty when the state already had the port Sticker in
    the placement it is drawn in (an inherited handoff is in `pano_sticker_handoff`)."""
    if port is None:
        return {}
    added = next(item for item in state["stickers"] if item["id"] == port.sticker_id)
    if stored_port is not None and stored_port["placement"] == added["placement"]:
        return {}
    if added["placement"] == "world":
        # Only 3D media add a world port Sticker: the Pose handoff hands a sky one (ADR 0059).
        pose = {"placement": "world", **{name: added[name]["value"] for name in ("position", "rotation", "scale")}}
    else:
        pose = {
            **added["direction"]["value"],
            "roll_deg": added["roll"]["value"],
            "hFOV_deg": added["size"]["value"]["hFOV_deg"],
            "keyframes": {name: added[name]["keyframes"] for name in ("direction", "roll", "size")},
        }
    if stored_port is not None:
        pose["replace"] = True
    return {"pano_sticker_input_pose": [pose]}
