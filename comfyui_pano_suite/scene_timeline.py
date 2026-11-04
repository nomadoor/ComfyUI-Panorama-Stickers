"""(a) Timeline of Panorama Studio (`docs/studio-node.md`, "Timeline"): the Timeline fps, each output frame's time,
and per output frame the background frame and, for each layer, the Timeline frame, port media frame, and `scene`
item to draw; with the glTF clip poses those frames are evaluated at."""
import bisect
import math
from fractions import Fraction

import comfy.model_management
import torch
from comfy_api.latest import Input

from . import file_3d
from .core.gltf_animation import clip_time
from .core.scene_eval import clip_active
from .core.scene_state import CAMERA_LANES, DEFAULT_ANIMATION, DEFAULT_CLIP, round_frame
from .core.video_source import pts_tolerance_frames
from .core.world_render import SceneContent
from .pano_scene import PanoSceneValue
from .scene_mesh import mesh_animation
from .sticker_media import OPENED_VIDEOS, PortMedia, batch_index, open_video


def _timing_video(bg, port: PortMedia | None):
    """The VIDEO that sets the Timeline fps and the output frames' times (ADR 0024): the opened background VIDEO,
    else the port's VIDEO, else None. Either has `frame_rate`, `times`, and `time_base`."""
    if isinstance(bg, OPENED_VIDEOS):
        return bg
    if port is not None and port.times is not None:
        return port
    return None


def _timeline_rate(state: dict, timing) -> Fraction:
    """The Timeline fps as a fraction: the rate of the VIDEO that sets the Timeline, or the recorded `timeline.fps`."""
    return Fraction(state["timeline"]["fps"] if timing is None else timing.frame_rate).limit_denominator(1_000_000)


def _output_times(given, rate: Fraction, length: int) -> list[Fraction]:
    """Each output frame's time in seconds, which (a) evaluates and the `video` output saves: the `given` times (the
    PTS of the VIDEO that sets the Timeline, or the upstream Scene's times), continuing at the Timeline fps `rate`
    after them, or evenly spaced without any."""
    if not given:
        return [index / rate for index in range(length)]
    times = list(given[:length])
    return times + [times[-1] + index / rate for index in range(1, length - len(times) + 1)]


def _timeline_frame(time, stored_fps: float, time_base) -> float:
    """The Timeline frame of a state recorded at `stored_fps` at `time` seconds. PTS are rounded to the time base,
    so a frame within half of it of a whole Timeline frame is that frame."""
    frame = float(time * Fraction(stored_fps))
    return float(round(frame)) if abs(frame - round(frame)) <= pts_tolerance_frames(time_base, stored_fps) else frame


def _layer_frames(state: dict, port: PortMedia | None, scene: SceneContent | None, times, fps: float, time_base) -> list[tuple]:
    """Per output frame at `times` (seconds), the Timeline frame of `state` to evaluate, the frame of its port media
    (`port.index_at`), and the item of its `scene` content (`batch_index`; None without `scene`). Times are read at
    the state's recorded `timeline.fps`, so its Keyframes keep their seconds at any Timeline `fps`; the state is not
    rebased."""
    stored_fps = state["timeline"]["fps"]
    tolerance = pts_tolerance_frames(time_base, stored_fps)
    clip = state["scene"]["clip"]
    origin = clip["start"] - clip["in"]
    frames = []
    for time in times:
        # A long Timeline stops at Cancel while it is decided.
        comfy.model_management.throw_exception_if_processing_interrupted()
        frame = _timeline_frame(time, stored_fps, time_base)
        frames.append((
            frame,
            None if port is None else port.index_at(frame, fps, tolerance),
            None if scene is None else batch_index(frame - origin, scene.count, fps, stored_fps),
        ))
    return frames


def _bg_place(bg, clip: dict, stored_fps: float) -> PortMedia | None:
    """The opened bg_media placed on the Timeline by its Clip range `clip` (`background.clip` of the state recorded at
    `stored_fps`) as the port Sticker's media is placed (`PortMedia`), or None for the default Clip range, with which
    its frames map as they did before the Clip range (`_bg_frames`)."""
    if bg is None or clip == DEFAULT_CLIP:
        return None
    return PortMedia("background", clip, bg, stored_fps, video=None if isinstance(bg, torch.Tensor) else bg)


def _bg_frames(bg, times, time_base, timing: bool, place: PortMedia | None, fps: float) -> list[int | None]:
    """The bg_media frame to draw at each of `times`, or None. An IMAGE batch maps one to one to the output frames
    and ends there; a single image shows throughout. A VIDEO that set the Timeline (`timing`) maps one to one too;
    another (an upstream Scene set it) shows its last frame that starts at or before each time, within half the time
    base of either, and nothing after its last frame has lasted one frame at its average rate.

    With a `place` (`_bg_place`), each time shows the frame `place` shows at the Timeline frame of the state that
    owns bg_media, at the Timeline `fps`, and nothing outside its Clip range."""
    if bg is None:
        return [None] * len(times)
    if place is not None:
        stored_fps = place.stored_fps
        tolerance = pts_tolerance_frames(time_base, stored_fps)
        frames = [_timeline_frame(time, stored_fps, time_base) for time in times]
        return [place.index_at(frame, fps, tolerance) if clip_active(place.clip, frame) else None for frame in frames]
    if not isinstance(bg, OPENED_VIDEOS):
        batch = int(bg.shape[0])
        return [index if index < batch else (0 if batch == 1 else None) for index in range(len(times))]
    if timing:
        return [index if index < len(bg.times) else None for index in range(len(times))]
    starts = [*bg.times, bg.times[-1] + 1 / bg.frame_rate]
    tolerance = max(Fraction(time_base), Fraction(bg.time_base)) / 2
    indices = [bisect.bisect_right(starts, time + tolerance) - 1 for time in times]
    return [index if 0 <= index < len(bg.times) else None for index in indices]


def _clip_of(animation, setting: dict | None):
    """The clip (`Clip`) that the stored `animation` setting plays of the glTF `animation`: the one it names, else
    the first."""
    index = animation.clip_index((setting or DEFAULT_ANIMATION)["clip"])
    return animation.clips[0 if index is None else index]


def _animation_pose(animation, setting: dict | None, clip_frame: float, stored_fps: float) -> tuple | None:
    """(clip index, seconds in the clip) of the glTF `animation` at `clip_frame` (the element's material time in
    Timeline frames of a state at `stored_fps`), played as the stored `setting` says (`clip_time`); None without one."""
    if animation is None or not animation.clips:
        return None
    setting = setting or DEFAULT_ANIMATION
    clip = _clip_of(animation, setting)
    return animation.clips.index(clip), clip_time(clip_frame / stored_fps, setting["speed"], clip.duration)


def _animation_end(animation, owner: dict, stored_fps: float) -> float | None:
    """Where an animated element (`owner`: a Sticker or `scene` of the state, at `stored_fps`) without a duration ends:
    one cycle of its clip after its material starts, `start − in + ⌈duration ÷ speed × timeline.fps⌉`; None without
    clips or for a clip of no duration."""
    if animation is None or not animation.clips:
        return None
    setting = owner.get("animation") or DEFAULT_ANIMATION
    duration = _clip_of(animation, setting).duration
    if duration <= 0.0:
        return None
    clip = owner["clip"]
    return clip["start"] - clip["in"] + math.ceil(duration / setting["speed"] * stored_fps)


def _decide_timeline(state: dict, bg, port: PortMedia | None, scene: SceneContent | None = None, *,
                     upstream: PanoSceneValue | None = None, overridden_ends=(), contents=None,
                     inherited_bg: bool = False) -> tuple[Fraction, list[Fraction], Fraction, tuple]:
    """(a) Timeline: the Timeline fps as a fraction, each output frame's time in seconds, the time base those times
    are rounded to (0: exact), and per output frame the bg_media frame to draw and, for each layer (those of
    `upstream`, then `state` with its `port` and `scene`), the Timeline frame to evaluate, its port media frame, and
    its `scene` item (`_layer_frames`). A `scene` batch, like an IMAGE batch on the port, ends its Clip range without a duration.
    The state's Camera shoots the frames and its Keyframes count for the length.

    `bg` is the bg_media IMAGE batch, an opened VIDEO, or None; `inherited_bg` says it is the upstream Scene's
    (ADR 0048: the node's own background, when connected, takes its place). Without `upstream`, the output frames follow the PTS
    of the VIDEO that sets the Timeline fps: the background VIDEO, or else the sticker VIDEO. With `upstream` (a
    Scene on the `scene` input, ADR 0029), they follow the upstream Scene's: its fps and times, continued at its fps
    when this state is longer. The length is then the longer of the upstream's and this state's own, or the state's
    `timeline.length` when it has one. Only this node's own `bg_media` counts for its own length; an upstream
    background is already in the upstream's. Without the `timeline.length`, the Clip ranges this state overrides in
    the upstream layers (`overridden_ends`, from `_override_layers`) count too; the others are already in the
    upstream's length. `upstream` holds the layers with the overrides applied.

    The own `bg_media` is placed by the state's `background.clip`, an upstream background by the Clip range of the
    Studio it came from (`PanoSceneValue.bg_clip`); a Clip range other than the default ends the background where it
    ends (`_bg_place`, `_bg_frames`), but the length still counts the media's own frames.

    An animated 3D file (ADR 0043) without a duration, the `scene`, the port's 3D media, or a 3D file Sticker read into
    `contents` (Sticker id -> its SPLAT or MESH), ends one cycle of its clip after its material starts
    (`_animation_end`).
    """
    stored_fps = state["timeline"]["fps"]
    if upstream is None:
        timing = _timing_video(bg, port)
        rate = _timeline_rate(state, timing)
        given, time_base = ([], 0) if timing is None else (timing.times, timing.time_base)
    else:
        rate, given, time_base = upstream.rate, upstream.times, upstream.time_base
    fps = float(rate)
    # An upstream background does not set the length: the upstream Scene's length already counts it.
    own_bg = None if inherited_bg else bg
    video = isinstance(own_bg, OPENED_VIDEOS)
    batch = 0 if own_bg is None or video else int(own_bg.shape[0])
    bg_clip = state["background"]["clip"]
    if own_bg is not None:
        place = _bg_place(own_bg, bg_clip, stored_fps)
    else:
        place = None if bg is None or upstream.bg_clip is None else _bg_place(bg, *upstream.bg_clip)

    def output_frames(frame):
        return round_frame(frame * fps / stored_fps)

    clips = [state["scene"]["clip"], *(sticker["clip"] for sticker in state["stickers"])]
    clip_ends = [clip["start"] + clip["duration"] for clip in clips if clip["duration"] is not None]
    if port is not None and port.clip["duration"] is None:
        # Without a duration, the port Sticker ends with media that has frames.
        port_end = port.end(fps)
        if port_end is not None:
            clip_ends.append(port_end)
    if batch == 1 and bg_clip["duration"] is not None:
        # A single background image ends with its Clip range, as a Sticker's image does.
        clip_ends.append(bg_clip["start"] + bg_clip["duration"])
    scene_clip = state["scene"]["clip"]
    if scene is not None and scene.count > 1 and scene_clip["duration"] is None:
        clip_ends.append(scene_clip["start"] - scene_clip["in"] + scene.count * stored_fps / fps)
    # One cycle of an animated 3D file's clip, as a VIDEO's media.
    animated = [(state["scene"], None if scene is None else scene.animation)]
    for sticker in state["stickers"]:
        if sticker["source"]["kind"] == "port":
            animated.append((sticker, None if port is None or not port.is_3d else mesh_animation(port.media)))
        elif contents and sticker["id"] in contents:
            animated.append((sticker, mesh_animation(contents[sticker["id"]])))
    for owner, animation in animated:
        end = None if owner["clip"]["duration"] is not None else _animation_end(animation, owner, stored_fps)
        if end is not None:
            clip_ends.append(end)
    # The latest Keyframe over the Camera's Lanes.
    last_key = max((state["camera"][name]["keyframes"][-1]["frame"] for name, _value in CAMERA_LANES if state["camera"][name]["keyframes"]), default=None)
    if state["timeline"]["length"]:
        length = max(1, output_frames(state["timeline"]["length"]))
    else:
        # The background media's own frames set the length whatever its Clip range: moving or trimming it keeps
        # the length, and the frames it leaves show bg_color.
        if video:
            # A background VIDEO that does not set the Timeline lasts until its last frame ends.
            length = len(own_bg.times) if upstream is None else max(1, round_frame(float(own_bg.times[-1] + 1 / own_bg.frame_rate) * fps))
        elif batch > 1:
            length = batch
        elif clip_ends:
            length = max(1, output_frames(max(clip_ends)))
        elif last_key is not None:
            length = max(1, output_frames(last_key) + 1)
        else:
            length = 1
        if upstream is not None:
            length = max([length, len(upstream.frames), *(round_frame(end * fps / layer_fps) for end, layer_fps in overridden_ends)])

    times = _output_times(given, rate, length)
    layers = [] if upstream is None else [(layer.state, layer.port, file_3d._scene_content(layer.scene)) for layer in upstream.layers]
    layers.append((state, port, scene))
    per_layer = [_layer_frames(layer_state, layer_port, content, times, fps, time_base) for layer_state, layer_port, content in layers]
    frames = tuple(zip(_bg_frames(bg, times, time_base, upstream is None, place, fps), zip(*per_layer)))
    return rate, times, time_base, frames


def _open_media(media, name: str):
    """bg_media as `_decide_timeline` and `_render_frames` read it: a VIDEO opened by `open_video`, else as given."""
    return open_video(media, name) if isinstance(media, Input.Video) else media
