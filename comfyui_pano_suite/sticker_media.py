"""The media on the `sticker` input, placed on the Timeline by the port Sticker's Clip range (ADR 0024)."""

import bisect
import math

import torch
from comfy_api.latest import InputImpl, Types

from .core.scene_eval import FRAME_EPSILON
from .core.video_source import MaterializedVideo, StreamedVideo, coded_size
from .core.world_render import SceneContent
from .progress import loop_progress
from .scene_mesh import mesh_scene_content
from .scene_video import RenderedVideo, SceneVideo
from .splat_render import splat_content

# What `open_video` returns; each has `frame_rate`, `times`, `time_base`, `first_frame`, frames read in order by
# index, and `audio(seconds)`.
OPENED_VIDEOS = (StreamedVideo, MaterializedVideo, RenderedVideo)


def open_video(video, name: str) -> StreamedVideo | MaterializedVideo | RenderedVideo:
    """Render the `video` output of Stickers and Cutout frame by frame, stream a file-backed VIDEO without a crop,
    and read any other VIDEO whole through the core."""
    if isinstance(video, SceneVideo):
        return RenderedVideo(video)
    # The crop of a VideoFromFile is private; only an uncropped one reports the stream's own size.
    if isinstance(video, InputImpl.VideoFromFile) and video.get_dimensions() == coded_size(video.get_stream_source()):
        return StreamedVideo(video.get_stream_source(), *video.get_active_trim_window(), name, loop_progress())
    return MaterializedVideo(video.get_components(), name)


def content_of(model: Types.SPLAT | Types.MESH) -> SceneContent:
    """A SPLAT or MESH as World content. What it uploads lives as long as it, so it is made for each render pass."""
    return splat_content(model) if isinstance(model, Types.SPLAT) else mesh_scene_content(model)


def item_count(model: Types.SPLAT | Types.MESH) -> int:
    """The number of items of a SPLAT or MESH."""
    return (model.positions if isinstance(model, Types.SPLAT) else model.vertices).shape[0]


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

    `media` is the IMAGE tensor, the VIDEO input itself, or a SPLAT or MESH (`is_3d`; a 3D file is read into
    one before). Its first frame is at `start - in` of the Clip range. A single IMAGE or 3D item shows for the
    whole Clip range. An IMAGE batch, like the items of a SPLAT or MESH, is a sequence at the Timeline fps without
    PTS, so each Timeline frame shows its nearest image. A VIDEO plays in real time: each Timeline frame shows
    its last frame that starts at or before it (PTS <= t), and the last frame lasts one frame at the average
    rate. `frame_rate`, `times` (seconds from the first frame of the trim window), and `time_base` are the
    VIDEO's, None otherwise; `first_frame` is None for 3D media; `streamed` is whether `open_video` streams the
    VIDEO from its file. Timeline frames are those of the state, at `stored_fps`.
    """

    def __init__(self, sticker_id: str, clip: dict, media, stored_fps: float):
        self.sticker_id = sticker_id
        self.clip = clip
        self.media = media
        self.is_3d = isinstance(media, (Types.SPLAT, Types.MESH))
        self._origin = clip["start"] - clip["in"]
        self._stored_fps = stored_fps
        if isinstance(media, torch.Tensor) or self.is_3d:
            self.frame_rate = self.times = self.time_base = self._starts = None
            self.streamed = False
            self.first_frame = None if self.is_3d else media[0]
            self._count = item_count(media) if self.is_3d else media.shape[0]
            return
        self._count = None
        video = open_video(media, "sticker")
        self.frame_rate, self.times, self.time_base, self.first_frame = video.frame_rate, video.times, video.time_base, video.first_frame
        self.streamed = isinstance(video, StreamedVideo)
        # Half the step its PTS are rounded to, in Timeline frames.
        self._tolerance = float(video.time_base) / 2 * stored_fps
        # Where each frame starts and where the last one ends, in Timeline frames from the first frame.
        self._starts = [float(time) * stored_fps for time in [*video.times, video.times[-1] + 1 / video.frame_rate]]

    def end(self, fps: float) -> float | None:
        """The Timeline frame where the media ends at the Timeline `fps`, or None for a single IMAGE or 3D item."""
        if self._starts is not None:
            return self._origin + self._starts[-1]
        if self._count > 1:
            return self._origin + self._count * self._stored_fps / fps
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
        return batch_index(clip_frame, self._count, fps, self._stored_fps)

    def frames(self):
        """The frames to index with `index_at`, in non-decreasing order, or for 3D media its `SceneContent`. A
        VIDEO and the content are made again for each pass over the Timeline, since an opened `StreamedVideo`
        reads forward once and the content keeps what it uploads."""
        if self.is_3d:
            return content_of(self.media)
        return self.media if self._starts is None else open_video(self.media, "sticker")
