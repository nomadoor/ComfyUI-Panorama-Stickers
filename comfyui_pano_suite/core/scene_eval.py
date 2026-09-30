"""State v2 evaluation: normalized state and a Timeline frame -> values at that time.

The contract is documented in docs/scene-state-v2.md. web_src/pano_scene_eval.js
must return the same values within 1e-4.
"""

from bisect import bisect_right


def _copy_value(value):
    if isinstance(value, dict):
        return {key: list(item) if isinstance(item, list) else item for key, item in value.items()}
    return value


# Fractional frames within this distance of a Keyframe or Clip range edge count as that frame, so a Cut
# lands on the output frame whose time (seconds x fps) misses the Keyframe only by float rounding.
FRAME_EPSILON = 1e-6


def _evaluate_group(group, frame):
    keyframes = group["keyframes"]
    if not keyframes:
        return _copy_value(group["value"])
    if frame <= keyframes[0]["frame"] + FRAME_EPSILON:
        return _copy_value(keyframes[0]["value"])
    if frame >= keyframes[-1]["frame"] - FRAME_EPSILON:
        return _copy_value(keyframes[-1]["value"])
    left = keyframes[bisect_right([key["frame"] for key in keyframes], frame + FRAME_EPSILON) - 1]
    if abs(frame - left["frame"]) <= FRAME_EPSILON or left["easing"] == "hold":
        return _copy_value(left["value"])
    raise NotImplementedError(f"Keyframe easing {left['easing']!r} is not implemented yet.")


def _clip_frame(clip, frame):
    return frame - (clip["start"] - clip["in"])


def _clip_active(clip, frame):
    end = None if clip["duration"] is None else clip["start"] + clip["duration"]
    return frame >= clip["start"] - FRAME_EPSILON and (end is None or frame < end - FRAME_EPSILON)


def evaluate_scene_state(state: dict, frame: float) -> dict:
    """Evaluate a state returned by `load_scene_state` at a fractional Timeline frame."""
    frame = float(frame)
    camera = state["camera"]
    scene = state["scene"]
    stickers = []
    for sticker in state["stickers"]:
        clip = sticker["clip"]
        clip_frame = _clip_frame(clip, frame)
        stickers.append({
            "id": sticker["id"],
            "placement": sticker["placement"],
            "active": sticker["visible"] and _clip_active(clip, frame),
            "clip_frame": clip_frame,
            **_evaluate_group(sticker["transform"], clip_frame),
            "opacity": _evaluate_group(sticker["opacity"], clip_frame),
        })
    scene_clip_frame = _clip_frame(scene["clip"], frame)
    return {
        "frame": frame,
        "camera": {**_evaluate_group(camera["transform"], frame), "aspect": camera["aspect"]},
        "scene": {
            "active": _clip_active(scene["clip"], frame),
            "clip_frame": scene_clip_frame,
            **_evaluate_group(scene["transform"], scene_clip_frame),
        },
        "stickers": stickers,
    }
