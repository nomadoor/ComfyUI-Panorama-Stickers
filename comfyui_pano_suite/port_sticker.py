"""The `port` Sticker of Panorama Studio (`docs/studio-node.md`, "Pose handoff"): the media on the `sticker` input
placed on it, the `sticker_state` it is handed (the Camera that shot it, which places it: docs/scene-state-v2.md
"受け渡しの置き方"), and the pose the editor is told it was added at."""
import math

import numpy as np
import torch

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


def _port_sticker(state: dict) -> dict:
    """The sky port Sticker appended when the state has none, at the default pose and with no offset."""
    raw = {"id": _take_sticker_id(state), "placement": "sky", "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0}},
           "roll": {"value": 0.0}, "size": {"value": {"hFOV_deg": 30.0, "vFOV_deg": 30.0}}, "z_index": _top_sky_z_index(state)}
    return load_scene_state({"version": 2, "stickers": [raw]})["stickers"][0]


def _sky_port_sticker(state: dict, stored: dict) -> dict:
    """A stored port Sticker that is not `sky` as the sky one a `sticker_state` places, under the same id, keeping its
    Clip range, visibility, lock, loop, crop, opacity and offset Lanes (docs/studio-node.md "Pose handoff")."""
    kept = {key: stored[key] for key in ("id", "source", "clip", "visible", "locked", "loop", "crop", "opacity", "offset_rotation", "offset_fov")}
    return load_scene_state({"version": 2, "stickers": [{**kept, "placement": "sky", "z_index": _top_sky_z_index(state)}]})["stickers"][0]


def _port_rgba(image: torch.Tensor) -> np.ndarray:
    image = image.detach().cpu().float().clamp(0.0, 1.0).numpy()
    alpha = image[..., 3:4] if image.shape[-1] == 4 else np.ones((*image.shape[:2], 1), dtype=np.float32)
    return np.concatenate([image[..., :3], alpha], axis=-1)


def _port_media(state: dict, sticker, sticker_state, warnings: list[str]) -> tuple[PortMedia | None, dict | None]:
    """The media on the sticker input, on the port Sticker, and the `sticker_state` it is handed (the shot, as
    `load_sticker_state` reads it; None without a readable one, or for 3D media), which the evaluation places the
    sky port Sticker by (docs/scene-state-v2.md "受け渡しの置き方"). Nothing is baked into the state's Lanes.

    A missing port Sticker is appended: `world` for 3D media, else `sky` at the default pose with no offset. With 2D
    media and a shot, a stored port Sticker that is not `sky` is replaced by the sky one (`_sky_port_sticker`).
    3D media (SPLAT or MESH), which Pose handoff does not place, replace a stored `sky` port Sticker by the `world`
    one under the same id, keeping its Clip range, visibility and lock (its sky Lanes do not apply to a world
    Sticker)."""
    if sticker is None:
        return None, None
    is_3d = is_3d_media(sticker)
    parsed = load_sticker_state(sticker_state)
    shot = None if is_3d else parsed
    index = next((i for i, item in enumerate(state["stickers"]) if item["source"]["kind"] == "port"), None)
    if index is None:
        if is_3d and parsed is not None:
            warnings.append("sticker_state places only 2D Stickers; the 3D Sticker is placed in front of the origin to fit the view.")
        state["stickers"].append(_world_port_sticker(state, sticker) if is_3d else _port_sticker(state))
        index = len(state["stickers"]) - 1
    elif shot is not None and state["stickers"][index]["placement"] != "sky":
        state["stickers"][index] = _sky_port_sticker(state, state["stickers"][index])
    elif is_3d and state["stickers"][index]["placement"] == "sky":
        stored = state["stickers"][index]
        state["stickers"][index] = {**_world_port_sticker(state, sticker, stored["id"]), **{key: stored[key] for key in ("clip", "visible", "locked", "animation") if key in stored}}
    port = state["stickers"][index]
    return PortMedia(port["id"], port["clip"], sticker, state["timeline"]["fps"]), shot


def _port_pose_ui(state: dict, port: PortMedia | None, stored_port: dict | None) -> dict:
    """The `ui` with the pose the port Sticker was added at, for the editor to add it to the state the same way: its
    sky Lanes' values and Keyframes, or the transform of a 3D one, `replace` when it replaced a stored port Sticker of
    the other placement. Empty when the state already had the port Sticker in the placement it is drawn in (a
    `sticker_state` it is handed is in `pano_sticker_handoff`)."""
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
