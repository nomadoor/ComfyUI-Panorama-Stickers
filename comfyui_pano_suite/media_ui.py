"""The execution `ui` that shows a node's media in the editors and on the node (`docs/studio-node.md`, "実行結果の
`ui` とエディタ用ファイル"): the first frame and editor MP4 of IMAGE batches and VIDEOs, the PNGs of an RGBA batch,
the editor files of 3D media, and the runtime's preview, warning, and video payload helpers they are built with."""
import logging
from fractions import Fraction
from pathlib import Path

import folder_paths
import numpy as np
import torch
from comfy_api.latest import Input, Types

from .core.cache import file_key
from .core.video import (
    editor_ready,
    encode_editor_mp4,
    entry_from_path,
    make_frames_ui_payload,
    make_video_ui_payload,
    mp4_has_audio,
    save_editor_frames,
    save_video_to_mp4,
)
from .core.video_source import MaterializedVideo, StreamedVideo, pts_tolerance
from .node_runtime import NODE_RUNTIME, _tensor_cache_identity
from .progress import loop_progress
from .scene_files import write_editor_files
from .scene_mesh import da3_key, depth_grid_intrinsics, is_da3, is_moge, is_unlit, mesh_animation
from .scene_video import SceneVideo
from .sticker_media import PortMedia, content_box, open_video, stream_video

_log = logging.getLogger(f"{__package__}.nodes")  # the logger these messages had in nodes.py


def _push_ui_warning(ui_ret: dict, key: str, message: str):
    NODE_RUNTIME.warn(ui_ret, key, message)


def _merge_ui_payload(ui_ret: dict, payload: dict | None):
    return NODE_RUNTIME.merge_ui_payload(ui_ret, payload)


def _append_video_payload(
    ui_ret: dict,
    frames: np.ndarray | None,
    fps: float,
    audio,
    *,
    warning_key: str,
    include_comfy_preview: bool = False,
    video_key: str = "pano_videos",
    meta_key: str = "pano_video_meta",
    progress_callback=None,
):
    NODE_RUNTIME.append_video(
        ui_ret,
        frames,
        fps,
        audio,
        warning_key=warning_key,
        include_comfy_preview=include_comfy_preview,
        video_key=video_key,
        meta_key=meta_key,
        progress_callback=progress_callback,
    )


def _init_ui_preview(image, *, key="pano_input_images") -> dict:
    return NODE_RUNTIME.init_preview(image, key=key)


def _flush_warnings(ui_ret: dict, warning_key: str, warnings: list[str] | None):
    NODE_RUNTIME.flush_warnings(ui_ret, warning_key, warnings)


def _append_preview_video_from_batch(
    ui_ret: dict,
    out_batch: np.ndarray | None,
    fps: float,
    audio,
    *,
    warning_key: str,
    video_key: str = "pano_videos",
    meta_key: str = "pano_video_meta",
    progress_callback=None,
):
    _append_video_payload(
        ui_ret,
        out_batch,
        fps,
        audio,
        warning_key=warning_key,
        video_key=video_key,
        meta_key=meta_key,
        progress_callback=progress_callback,
    )


def _get_preview_ui_contract(kind: str = "default") -> dict:
    return NODE_RUNTIME.preview_contract(kind)


def _bg_media_ui(bg_media, bg, fps: float) -> dict:
    """The `ui` of `bg_media`: its first frame, and an MP4 when it has two or more frames. `bg` is the opened VIDEO;
    an IMAGE batch plays at `fps`. The MP4 is made once per input and reused while the input stays the same."""
    contract = _get_preview_ui_contract("stickers_bg")
    if isinstance(bg_media, Input.Video):
        return _video_ui(bg_media, bg, float(bg.frame_rate), len(bg.times), contract)
    ui_ret = _init_ui_preview(bg_media, key=contract["image"])
    if bg_media.shape[0] > 1:
        _merge_ui_payload(ui_ret, _batch_mp4_ui(bg_media, "bg_media", fps, contract))
    return ui_ret


def _batch_mp4_ui(images: torch.Tensor, name: str, fps: float, contract: dict) -> dict:
    """The `ui` of the editor MP4 of an IMAGE batch, evenly spaced at `fps`, made once per batch and fps."""
    batch = MaterializedVideo(Types.VideoComponents(images=images, frame_rate=Fraction(round(fps * 1000), 1000)), name)
    cache_key = ("editor_mp4", _tensor_cache_identity(images), float(fps))
    return _editor_mp4_ui(cache_key, lambda: encode_editor_mp4(batch, loop_progress()), fps, len(batch.times), contract)


def _editor_frames_ui(images: torch.Tensor, fps: float, contract: dict) -> dict:
    """The `ui` of an RGBA IMAGE batch as one PNG per image, saved once per batch and reused while the files are
    there. Each image is a file of its own, so a long batch costs a PNG per image in temp."""
    cache_key = ("editor_frames", _tensor_cache_identity(images))
    paths = NODE_RUNTIME.cache.get("video", cache_key)
    if paths is None or not all(path.exists() for path in paths):
        paths = save_editor_frames(images, loop_progress())
        NODE_RUNTIME.cache.put("video", cache_key, paths)
    return make_frames_ui_payload(paths, fps, frames_key=contract["frames"], meta_key=contract["meta"])


def _port_media_ui(port: PortMedia, fps: float, time_base) -> dict:
    """The `ui` of the sticker media: its first frame, and an MP4 for the editor to follow the Timeline with when it
    has two or more frames (a one-frame VIDEO has the meta only), made like the bg_media one. An RGBA IMAGE batch is PNGs instead (`_editor_frames_ui`),
    since an MP4 drops the alpha that the `video` output keeps. The meta tells how a Timeline frame maps to the MP4 as
    `PortMedia.index_at` maps it: `kind`, `duration` (where the media ends), and for a VIDEO `pts_tolerance`, the
    seconds before a PTS that count as its frame (half the time base of the media or `time_base`, that of the
    Timeline's times). 3D media is its editor files instead (`_scene_ui`)."""
    if port.is_3d:
        return _scene_ui(port.media, "pano_sticker_files", "pano_sticker_meta", fps=fps)
    contract = _get_preview_ui_contract("stickers_input")
    ui_ret = _init_ui_preview(port.first_frame[None], key=contract["image"])
    video = port.media
    if port.times is None:
        if video.shape[0] < 2:
            return ui_ret
        payload = _editor_frames_ui(video, fps, contract) if video.shape[-1] == 4 else _batch_mp4_ui(video, "sticker", fps, contract)
        payload[contract["meta"]][0]["kind"] = "IMAGE"
    else:
        if len(port.times) < 2:
            # No MP4 for one frame, but the meta tells the editor where the media ends (`PortMedia.end`).
            end = float(port.times[-1] + 1 / port.frame_rate)
            meta = {"kind": "VIDEO", "fps": float(port.frame_rate), "frames": 1, "duration": end, "has_audio": False}
            return {**ui_ret, contract["meta"]: [meta]}
        # The VIDEO is opened again only to make the MP4; PortMedia does not keep it open.
        cache_key = ("editor_mp4", _video_cache_identity(video, port.streamed))
        payload = _editor_mp4_ui(cache_key, lambda: _editor_mp4(video, open_video(video, "sticker")), float(port.frame_rate), len(port.times), contract)
        time_base = max(port.time_base, time_base)
        payload[contract["meta"]][0].update(kind="VIDEO", duration=float(port.times[-1] + 1 / port.frame_rate), pts_tolerance=pts_tolerance(time_base))
    return _merge_ui_payload(ui_ret, payload)


SCENE_FILE_TYPES = {"ply": "application/ply", "glb": "model/gltf-binary", "f32": "application/octet-stream"}


def _editor_paths(paths: list) -> list:
    """Every file of the items' editor files: an item is None, a path, or a list of paths (DA3_GEOMETRY multiview)."""
    return [view for path in paths if path is not None for view in (path if isinstance(path, list) else [path])]


def _scene_ui(scene, files_key: str = "pano_scene_files", meta_key: str = "pano_scene_meta", *, in_execution: bool = True, fps: float | None = None) -> dict:
    """The `ui` of the `scene` input, or of 3D media on the `sticker` input under the given keys: a temp file per
    item for the editor (`write_editor_files`; a list of files for a DA3_GEOMETRY multiview), None for an empty item,
    and the kind it loads with, for a mesh,
    whether it is `unlit`. The files are written once per input and reused while they are there, keyed by the input
    and the tensors it is read from (a MOGE_GEOMETRY is a dict), so the same SPLAT or MESH on both inputs, or read
    for the editor's route, shares them; concurrent callers write them once. Outside an execution (the route) the
    writing reports no progress and checks no Cancel."""
    if is_da3(scene):
        cache_key = da3_key(scene)
    elif isinstance(scene, dict):
        cache_key = tuple((key, _tensor_cache_identity(scene[key])) for key in ("points", "mask", "image", "intrinsics") if key in scene)
    else:
        positions = scene.positions if isinstance(scene, Types.SPLAT) else scene.vertices
        cache_key = (NODE_RUNTIME.object_identity(scene), _tensor_cache_identity(positions))
    saved = NODE_RUNTIME.cache.get_or_put(
        "scene_files", cache_key,
        lambda: write_editor_files(scene, loop_progress() if in_execution else None),
        valid=lambda saved: all(path.exists() for path in _editor_paths(saved[1])),
    )
    kind, paths = saved

    def entry(path):
        return entry_from_path(path, media_type=SCENE_FILE_TYPES[path.suffix[1:]])

    # A DA3_GEOMETRY multiview item is the list of its views' files.
    files = [None if path is None else [entry(view) for view in path] if isinstance(path, list) else entry(path) for path in paths]
    meta = {"kind": kind} if kind == "splat" else {"kind": kind, "unlit": is_unlit(scene)}
    if kind == "depth_grid":
        meta.update(_depth_grid_meta(scene, fps))
    animation = _animation_meta(scene)
    if animation is not None:
        meta["animation"] = animation
    return {files_key: files, meta_key: [meta]}


# The media types of the original glTF the editor plays an animation from.
GLTF_TYPES = {".glb": "model/gltf-binary", ".gltf": "model/gltf+json"}


def _animation_meta(media) -> dict | None:
    """What the editor plays the glTF clips of `media` with (docs/studio-node.md, "glTF のアニメーションのエディタ用ファイル"):
    the original file's `ui` entry, the clips in the file's order, and the content's box (`content_box`: the first
    clip's pose at time 0), `{"source", "clips": [{"name", "duration"}], "box": {"min", "max"}}`;
    None without clips, or when the browser cannot load the original whole (outside ComfyUI's folders, or a GLTF with
    an external buffer, which also logs a warning). The editor then draws the still GLB."""
    animation = mesh_animation(media)
    if animation is None or not animation.clips:
        return None
    if not media.self_contained:
        _log.warning("Panorama Stickers: %s keeps its data in another file, so the editor shows it still; the output plays its animation.",
                     Path(media.source).name if media.source else "a glTF")
        return None
    entry = None if media.source is None else _view_entry(media.source, GLTF_TYPES.get(Path(media.source).suffix.lower(), "model/gltf-binary"))
    if entry is None:
        return None
    return {"source": entry, "clips": [{"name": clip.name, "duration": clip.duration} for clip in animation.clips], "box": content_box(media)}


def _view_entry(path, media_type: str) -> dict | None:
    """The `ui` entry of a file in ComfyUI's input, output, or temp directory, which `/view` serves, or None for a
    file elsewhere."""
    target = Path(path).resolve()
    for storage, directory in (("input", folder_paths.get_input_directory), ("output", folder_paths.get_output_directory), ("temp", folder_paths.get_temp_directory)):
        try:
            rel = target.relative_to(Path(directory()).resolve())
        except ValueError:
            continue
        subfolder = rel.parent.as_posix()
        return {"filename": rel.name, "subfolder": "" if subfolder == "." else subfolder, "type": storage, "storage": storage, "format": media_type}
    return None


def _depth_grid_meta(geometry: dict, fps: float) -> dict:
    """The meta of the depth files of a DA3_GEOMETRY mono or a MOGE_GEOMETRY perspective sequence (docs/studio-node.md,
    "`DA3_GEOMETRY` mono のエディタ用ファイル"): the grid's size, the files' layout, each frame's K of pixel numbers
    (row order, `depth_grid_intrinsics`), and the color proxy MP4 of the frames' `image` at the Timeline `fps` (frame
    i at i / fps), made as an IMAGE batch's."""
    if fps is None:
        raise ValueError("_scene_ui needs the Timeline fps for a depth grid: its color proxy plays at that fps.")
    # The size of the depth files: the points' (MoGe) or the depth's (DA3), not the image's.
    count, height, width = (geometry["points"] if is_moge(geometry) else geometry["depth"]).shape[:3]
    proxy = _batch_mp4_ui(geometry["image"], "scene", fps, {"video": "video", "meta": "meta"})
    return {
        "width": int(width), "height": int(height),
        "depth": {"dtype": "float32", "byte_order": "little", "bytes": int(width * height * 4)},
        "intrinsics": depth_grid_intrinsics(geometry),
        "video": proxy["video"][0], "video_fps": float(fps), "frames": int(count),
    }


def _video_cache_identity(video, streamed: bool) -> tuple:
    """A VIDEO that `open_video` streams from its file (so without a crop) is its file and trim window; any other
    VIDEO is the object itself."""
    if streamed:
        source = video.get_stream_source()
        if isinstance(source, str):
            path, mtime_ns, _size = file_key(source)
            return ("file", path, mtime_ns, video.get_active_trim_window())
    return NODE_RUNTIME.object_identity(video)


def _editor_mp4(video, opened) -> tuple[Path, bool]:
    """The MP4 the editor plays for a VIDEO opened by `open_video` as `opened`, and whether it has audio. A file the
    core copies into an MP4 that seeks fast already (`editor_ready`) is copied, or played as it is when it is an MP4
    in the input directory; a Studio `video` shows
    its stream source when that seeks fast. Otherwise a proxy is encoded (`encode_editor_mp4`), from the file
    again for a VIDEO read from its file, since `opened` has moved on, so the frames are never all in memory."""
    if isinstance(video, SceneVideo):
        # Its stream source is an MP4 in temp already, kept by the video itself, and is what SaveVideo copies.
        source = video.get_stream_source()
        if editor_ready(source):
            return Path(source), mp4_has_audio(source)
        return encode_editor_mp4(stream_video(source, 0, 0, "source"), loop_progress())
    if isinstance(opened, StreamedVideo):
        source, trim = video.get_stream_source(), video.get_active_trim_window()
        # The core copies the streams only without a trim window, and reads a file in memory as it is.
        if isinstance(source, str) and not any(trim) and editor_ready(source):
            # An MP4 in the input directory is played from there; the browser is served it by its extension.
            if _input_entry(source) is not None and Path(source).suffix.lower() == ".mp4":
                return Path(source), mp4_has_audio(source)
            return save_video_to_mp4(video, Types.VideoContainer.MP4, Types.VideoCodec.H264)
        return encode_editor_mp4(stream_video(source, *trim, "source"), loop_progress())
    return encode_editor_mp4(opened, loop_progress())


def _input_entry(path) -> dict | None:
    """The `ui` entry of an MP4 in ComfyUI's input directory, or None for a file elsewhere."""
    entry = _view_entry(path, "video/mp4")
    return entry if entry is not None and entry["type"] == "input" else None


def _editor_mp4_ui(cache_key: tuple, make, fps: float, frame_count: int, contract: dict) -> dict:
    """The `ui` of the editor MP4 that `make()` saves, made once per `cache_key` and reused while the file is there.
    The MP4 is a temp file, or the input file itself (`_editor_mp4`)."""
    saved = NODE_RUNTIME.cache.get("video", cache_key)
    if saved is None or not saved[0].exists():
        saved = make()
        NODE_RUNTIME.cache.put("video", cache_key, saved)
    path, has_audio = saved
    payload = make_video_ui_payload(path, fps, frame_count, video_key=contract["video"], meta_key=contract["meta"], video_entry=_input_entry(path))
    payload[contract["meta"]][0]["has_audio"] = has_audio
    return payload


def _video_ui(video, opened, fps: float, frame_count: int, contract: dict) -> dict:
    """The `ui` of a VIDEO opened by `open_video`: its first frame, and the editor MP4 (`_editor_mp4`) when it has
    two or more frames. The frames are not read into one batch (ADR 0018), and the MP4 is reused while the VIDEO
    stays the same."""
    ui_ret = _init_ui_preview(opened.first_frame[None], key=contract["image"])
    if frame_count > 1:
        cache_key = ("editor_mp4", _video_cache_identity(video, isinstance(opened, StreamedVideo)))
        _merge_ui_payload(ui_ret, _editor_mp4_ui(cache_key, lambda: _editor_mp4(video, opened), fps, frame_count, contract))
    return ui_ret
