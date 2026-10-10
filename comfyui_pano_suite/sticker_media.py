"""The media on the `sticker` input, placed on the Timeline by the port Sticker's Clip range (ADR 0024)."""

import bisect
import copy
import math
import os

import torch
from comfy_api.latest import InputImpl, Types

from .core.cache import CACHE
from .core.scene_eval import FRAME_EPSILON
from .core.video_source import MaterializedVideo, PtsTimes, StreamedVideo, coded_size, scan_video
from .core.world_render import SceneContent
from .core_adapters import _gaussian_item, get_mesh_batch_item
from .node_runtime import NodeRuntime
from .progress import loop_progress
from .scene_mesh import da3_count, da3_keep, keep_is_empty, moge_keep, moge_points, da3_meshes, da3_points, is_multiview, da3_scene_content, is_da3, is_moge, mesh_scene_content, moge_scene_content
from .scene_video import RenderedVideo, SceneVideo
from .splat_render import _GLTF_TO_SPLAT, splat_content

# What `open_video` returns; each has `frame_rate`, `times`, `time_base`, `first_frame`, frames read in order by
# index, and `audio(seconds)`.
OPENED_VIDEOS = (StreamedVideo, MaterializedVideo, RenderedVideo)


def _source_key(source) -> tuple:
    """A video source: a file by its path, modification time, and size, a file in memory by the object."""
    if isinstance(source, str):
        stat = os.stat(source)
        return ("file", source, stat.st_mtime_ns, stat.st_size)
    return NodeRuntime.object_identity(source)


def stream_video(source, start_time: float, duration: float, name: str) -> StreamedVideo:
    """A `StreamedVideo` of the trim window of `source`. Its `VideoIndex` (the scan of the times, the first frame) is
    made once per file and trim window and kept in the shared cache, so the opens of an execution (the Timeline, the
    port media, each render pass, the editor MP4) and the next executions do not scan it again."""
    key = (_source_key(source), start_time, duration)
    index = CACHE.get_or_put("video_index", key, lambda: scan_video(source, start_time, duration, name, loop_progress()))
    return StreamedVideo(source, index, name)


def open_video(video, name: str) -> StreamedVideo | MaterializedVideo | RenderedVideo:
    """Render the `video` output of Panorama Studio frame by frame, stream a file-backed VIDEO without a crop,
    and read any other VIDEO whole through the core."""
    if isinstance(video, SceneVideo):
        return RenderedVideo(video)
    if isinstance(video, InputImpl.VideoFromFile):
        source = video.get_stream_source()
        # The crop of a VideoFromFile is private; only an uncropped one reports the stream's own size.
        size = CACHE.get_or_put("video_size", _source_key(source), lambda: coded_size(source))
        if video.get_dimensions() == size:
            return stream_video(source, *video.get_active_trim_window(), name)
    return MaterializedVideo(video.get_components(), name)


def content_of(model) -> SceneContent:
    """3D media (`is_3d_media`) as World content. What it uploads lives as long as it, so it is made for each render
    pass."""
    if isinstance(model, Types.SPLAT):
        return splat_content(model)
    if isinstance(model, Types.MESH):
        return mesh_scene_content(model)
    return moge_scene_content(model) if is_moge(model) else da3_scene_content(model)


def is_3d_media(media) -> bool:
    """Whether media on the `sticker` or `scene` input is 3D: a SPLAT, a MESH, or a dict, which is MOGE_GEOMETRY
    with `points` and DA3_GEOMETRY with `mode`."""
    return isinstance(media, (Types.SPLAT, Types.MESH)) or is_moge(media) or is_da3(media)


def item_count(model) -> int:
    """The number of items of 3D media (`is_3d_media`)."""
    if isinstance(model, Types.SPLAT):
        return model.positions.shape[0]
    if isinstance(model, Types.MESH):
        return model.vertices.shape[0]
    return model["points"].shape[0] if is_moge(model) else da3_count(model)


def batch_index(clip_frame: float, count: int, fps: float, stored_fps: float) -> int | None:
    """The item of a batch of `count` (an IMAGE batch, or the `scene` content) that shows `clip_frame` Timeline
    frames after its first item, or None outside the batch. A batch is a sequence at the Timeline `fps` without
    PTS, so each Timeline frame shows its nearest item; a single item shows throughout. Timeline frames are those
    of the state, at `stored_fps`."""
    if count == 1:
        return 0
    index = math.floor(clip_frame * fps / stored_fps + 0.5)
    return index if 0 <= index < count else None


class PortMedia:
    """The `sticker` input's media for the port Sticker `sticker_id` with the Clip range `clip`: which of its
    frames shows at a Timeline frame.

    `media` is the IMAGE tensor, the VIDEO input itself, or 3D media (`is_3d`: a SPLAT or MESH, a 3D file read into
    one before, MOGE_GEOMETRY, or DA3_GEOMETRY). Its first frame is at `start - in` of the Clip range. A single IMAGE or 3D item shows for the
    whole Clip range. An IMAGE batch, like the items of a SPLAT or MESH, is a sequence at the Timeline fps without
    PTS, so each Timeline frame shows its nearest image. A VIDEO plays in real time: each Timeline frame shows
    its last frame that starts at or before it (PTS <= t), and the last frame lasts one frame at the average
    rate. `frame_rate`, `times` (seconds from the first frame of the trim window), and `time_base` are the
    VIDEO's, None otherwise; `first_frame` is None for 3D media; `streamed` is whether `open_video` streams the
    VIDEO from its file. Timeline frames are those of the state, at `stored_fps`. A VIDEO already opened by
    `open_video` can be given as `video`; Panorama Studio places its `bg_media` this way too (`_bg_place`).
    """

    def __init__(self, sticker_id: str, clip: dict, media, stored_fps: float, video=None):
        self.sticker_id = sticker_id
        self.clip = clip
        self.media = media
        self.is_3d = is_3d_media(media)
        self._origin = clip["start"] - clip["in"]
        self.stored_fps = stored_fps
        if isinstance(media, torch.Tensor) or self.is_3d:
            self.frame_rate = self.times = self.time_base = self._starts = None
            self.streamed = False
            self.first_frame = None if self.is_3d else media[0]
            self._count = item_count(media) if self.is_3d else media.shape[0]
            return
        self._count = None
        if video is None:
            video = open_video(media, "sticker")
        self.frame_rate, self.times, self.time_base, self.first_frame = video.frame_rate, video.times, video.time_base, video.first_frame
        self.streamed = isinstance(video, StreamedVideo)
        # Half the step its PTS are rounded to, in Timeline frames.
        self._tolerance = float(video.time_base) / 2 * stored_fps
        # Where each frame starts and where the last one ends, in Timeline frames from the first frame.
        seconds = video.times.seconds() if isinstance(video.times, PtsTimes) else [float(time) for time in video.times]
        self._starts = [second * stored_fps for second in [*seconds, float(video.times[-1] + 1 / video.frame_rate)]]

    def with_clip(self, clip: dict) -> "PortMedia":
        """This media placed by the Clip range `clip`, sharing what was read from it (the VIDEO is not opened again)."""
        moved = copy.copy(self)
        moved.clip = clip
        moved._origin = clip["start"] - clip["in"]
        return moved

    def end(self, fps: float) -> float | None:
        """The Timeline frame where the media ends at the Timeline `fps`, or None for a single IMAGE or 3D item."""
        if self._starts is not None:
            return self._origin + self._starts[-1]
        if self._count > 1:
            return self._origin + self._count * self.stored_fps / fps
        return None

    def index_at(self, frame: float, fps: float, tolerance: float) -> int | None:
        """The index of the frame that shows at the Timeline `frame` at the Timeline `fps`, or None outside the media.

        `tolerance` is the half PTS step of the VIDEO that sets the output frames, in Timeline frames; a VIDEO frame
        starts at `frame` when its PTS is within that or its own half step. The Clip range is not checked; the
        evaluated Sticker's `active` decides whether it is drawn.
        """
        clip_frame = frame - self._origin
        if self._starts is not None:
            index = bisect.bisect_right(self._starts, clip_frame + max(FRAME_EPSILON, self._tolerance, tolerance)) - 1
            return index if 0 <= index < len(self._starts) - 1 else None
        return batch_index(clip_frame, self._count, fps, self.stored_fps)

    def frames(self):
        """The frames to index with `index_at`, in non-decreasing order, or for 3D media its `SceneContent`. A
        VIDEO and the content are made again for each pass over the Timeline, since an opened `StreamedVideo`
        reads forward once and the content keeps what it uploads."""
        if self.is_3d:
            return content_of(self.media)
        return self.media if self._starts is None else open_video(self.media, "sticker")


def content_box(media) -> dict | None:
    """The axis-aligned box `{"min": [x, y, z], "max": [x, y, z]}` of 3D media in its own (`scene`) glTF frame, over
    all its items, from the points that are drawn: a MESH's vertices (`get_mesh_batch_item`, without the batch's
    padding), a SPLAT's gaussian centers (`_gaussian_item`) turned from 3DGS to glTF, a MOGE_GEOMETRY's kept points
    (`moge_keep`, `moge_points`: `moge_grid_mesh`'s vertices without making the mesh), a DA3_GEOMETRY multiview's meshes of every view (`da3_meshes`), a mono one's kept pixels' points of every non-empty frame (`da3_keep`, `da3_points`; no conversion). None when it has no point (docs/studio-node.md, "中身の箱"). The
    one owner of the box: the node's 3D port Sticker and the editor's route both use it."""
    points = []
    if isinstance(media, Types.SPLAT):
        turn = torch.tensor(_GLTF_TO_SPLAT, dtype=torch.float32)
        for index in range(media.positions.shape[0]):
            centers = _gaussian_item(media, index, torch.device("cpu"))[0]
            points.append((centers[:, :, None] * turn.T[None]).sum(1))
    elif isinstance(media, Types.MESH):
        for index in range(media.vertices.shape[0]):
            points.append(get_mesh_batch_item(media, index)[0].float().cpu())
    elif is_moge(media):
        # The kept pixels' points of every frame, without making the meshes (ADR 0040).
        for index in range(media["points"].shape[0]):
            points.append(moge_points(media, index, moge_keep(media, index)).float())
    elif is_da3(media) and is_multiview(media):
        points += [mesh.vertices[0].float().cpu() for mesh in da3_meshes(media, 0)]
    elif is_da3(media):
        # Mono: the kept pixels' points of every non-empty frame, without converting (ADR 0039).
        for index in range(da3_count(media)):
            keep = da3_keep(media, index)
            if not keep_is_empty(keep):
                points.append(da3_points(media, index, keep).float())
    else:
        raise TypeError(f"content_box takes a SPLAT, MESH, MOGE_GEOMETRY, or DA3_GEOMETRY, not {type(media).__name__}")
    points = torch.cat(points) if points else torch.zeros((0, 3))
    # A point that is not finite is never drawn, and JSON (the route's `box`) cannot hold it.
    points = points[torch.isfinite(points).all(-1)]
    if points.shape[0] == 0:
        return None
    return {"min": points.amin(0).tolist(), "max": points.amax(0).tolist()}
