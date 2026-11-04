"""(b) and (c) of Panorama Studio (`docs/studio-node.md`, "描画"): each output frame of a Scene rendered with the shared
render function, the device memory a pass needs (`docs/runtime-resources.md`), the background's audio, and the
first frame and `video` outputs."""
import math
from dataclasses import replace
from fractions import Fraction

import comfy.model_management

from . import file_3d
from .core.cache import nbytes
from .core.render import RenderLayer, StickerSource, render_frame
from .core.scene_eval import evaluate_scene_state
from .core.scene_state import DEFAULT_CLIP
from .core.world_render import ContentSource, SceneContent
from .pano_scene import PanoSceneValue
from .port_sticker import _port_rgba
from .scene_mesh import da3_device_bytes, is_da3
from .scene_timeline import _animation_pose, _open_media
from .scene_video import SceneVideo
from .sticker_media import OPENED_VIDEOS


def _port_source_at(active: bool, index: int | None, frames, template: StickerSource | None, current):
    """The port Sticker's source showing frame `index` of `frames` (item `index` of 3D content), or None where it
    is not drawn. `current` is the previous result, kept while the frame repeats so that it is not converted again."""
    if not active or index is None:
        return None
    if current is not None and current.frame == index:
        return current
    if isinstance(frames, SceneContent):
        return ContentSource(frames, index)
    image = frames[index]
    return None if image is None else replace(template, rgba=_port_rgba(image), frame=index)


# Floats per output pixel that a frame keeps on the device at once beyond its sources: the rays and where they look,
# the Sky's layers' samples with their footprints and filter weights, the background's samples, the World layer, and
# the color, mask, and depth. The value is a measured peak with a margin: the measurement is in docs/legacy-baselines.md,
# "デバイスのメモリの見積もり（`_render_memory`）".
RENDER_FLOATS_PER_PIXEL = 32


# A source on the device is float32 with the ripmap levels `_sample_filtered` makes, up to three times its size.
DEVICE_SOURCE_FACTOR = 4


def _render_memory(built: PanoSceneValue, bg, size: tuple[int, int]) -> int:
    """The bytes a render pass of `built` at `size` (width, height) needs on the device, by `docs/runtime-resources.md`:
    the per-pixel working set of a frame, and every source it uploads as float32 with its ripmap levels (one
    background frame, the Sticker sources, the uploaded paint layers) or as given (the 3D media, the 3D files of
    Stickers included)."""
    sources = 0
    if bg is not None:
        frame = bg.first_frame if isinstance(bg, OPENED_VIDEOS) else bg[0]
        sources += frame.shape[0] * frame.shape[1] * 3 * 4
    media = 0
    for layer in built.layers:
        sources += sum(source.rgba.shape[0] * source.rgba.shape[1] * 4 * 4 for source in layer.sources.stickers.values())
        sources += sum(array.size * 4 for array in _payload_arrays(layer.sources.painting_layer))
        media += _media_bytes(layer.scene) + (_media_bytes(layer.port.media) if layer.port is not None and layer.port.is_3d else 0)
        media += sum(nbytes(content) for content in layer.sources.contents.values())
    return size[0] * size[1] * RENDER_FLOATS_PER_PIXEL * 4 + sources * DEVICE_SOURCE_FACTOR + media


def _media_bytes(media) -> int:
    """What 3D media takes on the device: its tensors, but for a DA3_GEOMETRY the meshes made from it
    (`da3_device_bytes`)."""
    return da3_device_bytes(media) if is_da3(media) else nbytes(media)


def _payload_arrays(payload: dict | None) -> list:
    """The rasters of a painting payload (`resolve_painting_layer_payload`)."""
    if not payload:
        return []
    return [array for array in (payload.get("paint"), payload.get("mask"), *payload.get("groups", {}).values()) if array is not None]


def _render_frames(built: PanoSceneValue, bg, capture, device, size: tuple[int, int]):
    """(b) Render each output frame of the Scene `built` with the shared render function: each layer's state evaluated
    at its Timeline frame, its port Sticker's source at the frame of its `port` and its `scene` item that (a) chose,
    as one `RenderLayer` each. `capture` maps the evaluated state of the last layer (the node that shoots) to the
    Camera value and the Projection to draw it with; the Projection's size is the same for every frame.
    `bg` is the bg_media IMAGE, an opened VIDEO, or None; the port media (and its content when 3D), the 3D files of
    `world` Stickers (`SceneSources.contents`, item 0 drawn at every frame), and the `scene` content are opened for
    this pass, so nothing they put on `device` outlives it.
    Yields the color (H, W, 3) and mask (H, W) of each frame on `device`; a frame that `render_frame` reused is
    the same tensors as the previous one. Before the first frame, when `device` has less free memory than the pass
    needs (`_render_memory` at the output `size`), ComfyUI frees that much, unloading models only as far as it takes."""
    if not comfy.model_management.is_device_cpu(device):
        required = _render_memory(built, bg, size)
        if comfy.model_management.get_free_memory(device) < required:
            comfy.model_management.free_memory(required, device)
    bg_width = None
    if bg is not None:
        bg_width = (bg.first_frame if isinstance(bg, OPENED_VIDEOS) else bg).shape[-2]
    opened = []
    for layer in built.layers:
        port = layer.port
        port_frames = None if port is None else port.frames()
        others = layer.sources.stickers if port is None else {key: value for key, value in layer.sources.stickers.items() if key != port.sticker_id}
        world = {item["id"] for item in layer.state["stickers"] if item["placement"] == "world"}
        files = {key: ContentSource(file_3d._scene_content(value), 0) for key, value in layer.sources.contents.items() if key in world}
        if files:
            others = {**others, **files}
        # The 3D file Stickers with glTF clips, posed at each frame.
        animated = {key: source for key, source in files.items() if source.content.animation is not None}
        opened.append((port_frames, others, file_3d._scene_content(layer.scene), animated))
    cache = {}
    port_sources = [None] * len(built.layers)
    for bg_index, entries in built.frames:
        # Reading the `video` output renders in another node; Cancel stops it between frames.
        comfy.model_management.throw_exception_if_processing_interrupted()
        drawn = []
        for index, (layer, (port_frames, others, content, animated), (frame, port_index, scene_index)) in enumerate(zip(built.layers, opened, entries)):
            evaluated = evaluate_scene_state(layer.state, frame)
            stored_fps = layer.state["timeline"]["fps"]
            if animated:
                items = {item["id"]: item for item in layer.state["stickers"]}
                clip_frames = {item["id"]: item["clip_frame"] for item in evaluated["stickers"]}
                posed = {**others, **{key: replace(source, pose=_animation_pose(source.content.animation, items[key].get("animation"), clip_frames[key], stored_fps))
                                      for key, source in animated.items()}}
            else:
                posed = others
            sources = layer.sources if posed is layer.sources.stickers else replace(layer.sources, stickers=posed)
            port = layer.port
            if port is not None:
                item = next(item for item in evaluated["stickers"] if item["id"] == port.sticker_id)
                port_sources[index] = _port_source_at(item["active"], port_index, port_frames, layer.sources.stickers.get(port.sticker_id), port_sources[index])
                if isinstance(port_sources[index], ContentSource) and port_frames.animation is not None:
                    setting = next(stored.get("animation") for stored in layer.state["stickers"] if stored["id"] == port.sticker_id)
                    port_sources[index] = replace(port_sources[index], pose=_animation_pose(port_frames.animation, setting, item["clip_frame"], stored_fps))
                sources = replace(sources, stickers=posed if port_sources[index] is None else {**posed, port.sticker_id: port_sources[index]})
            scene_pose = None
            if content is not None and content.animation is not None:
                scene_pose = _animation_pose(content.animation, layer.state["scene"].get("animation"), evaluated["scene"]["clip_frame"], stored_fps)
            drawn.append(RenderLayer(evaluated, sources, content, scene_index, scene_pose))
        camera, projection = capture(drawn[-1].evaluated)
        color, mask, _depth = render_frame(
            drawn,
            camera,
            projection,
            bg=None if bg_index is None else bg[bg_index],
            bg_key=bg_index,
            bg_color=built.bg_color,
            device=device,
            cache=cache,
            bg_width=bg_width,
        )
        yield color, mask


def _bg_audio(bg, bg_clip: tuple | None, frames: int, rate: Fraction) -> dict | None:
    """The audio of the opened background VIDEO `bg` under an output of `frames` at the Timeline fps `rate`, or None
    without one: from the start of its trim window, or placed by its Clip range (`PanoSceneValue.bg_clip`) other
    than the default as its frames are, silent outside the Clip range and outside the media."""
    if not isinstance(bg, OPENED_VIDEOS):
        return None
    if bg_clip is None or bg_clip[0] == DEFAULT_CLIP:
        return bg.audio(frames / float(rate))
    clip, stored_fps = bg_clip
    seconds, stored_fps = frames / rate, Fraction(stored_fps)
    start = clip["start"] / stored_fps
    end = seconds if clip["duration"] is None else min(seconds, (clip["start"] + clip["duration"]) / stored_fps)
    origin = (clip["start"] - clip["in"]) / stored_fps
    audio = bg.audio(float(end - origin)) if end > start else None
    if audio is None:
        return None
    sample_rate = audio["sample_rate"]
    waveform = audio["waveform"]
    placed = waveform.new_zeros((*waveform.shape[:-1], int(seconds * sample_rate)))
    # The media's sample i plays at output sample i + shift.
    shift = math.floor(origin * sample_rate + Fraction(1, 2))
    first = max(int(start * sample_rate), shift)
    last = min(int(end * sample_rate), shift + waveform.shape[-1], placed.shape[-1])
    if last > first:
        placed[..., first:last] = waveform[..., first - shift:last - shift]
    return {"waveform": placed, "sample_rate": sample_rate}


def _render_outputs(built: PanoSceneValue, bg, capture, size: tuple[int, int]):
    """(c) The first output frame's IMAGE and MASK of the Scene `built`, rendered now from the opened `bg`, and the
    `video` of every frame, rendered when it is read with `bg_media` and the `scene` content opened again for
    each pass."""
    color, mask = next(_render_frames(built, bg, capture, comfy.model_management.get_torch_device(), size))
    audio = _bg_audio(bg, built.bg_clip, len(built.frames), built.rate)

    def render(device):
        return _render_frames(built, _open_media(built.bg_media, "bg_media"), capture, device, size)

    video = SceneVideo(render, *size, built.rate, list(built.times), built.time_base, audio)
    return color[None].to("cpu", copy=True), mask[None].to("cpu", copy=True), video
