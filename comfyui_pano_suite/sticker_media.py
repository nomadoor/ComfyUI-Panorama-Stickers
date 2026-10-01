"""The media on the `sticker` input, placed on the Timeline by the port Sticker's Clip range (ADR 0024)."""

import bisect
import math

import torch
from comfy_api.latest import InputImpl

from .core.scene_eval import FRAME_EPSILON
from .core.video_source import MaterializedVideo, StreamedVideo, coded_size


def open_video(video, name: str) -> StreamedVideo | MaterializedVideo:
    """Stream a file-backed VIDEO without a crop; read any other VIDEO whole through the core."""
    # The crop of a VideoFromFile is private; only an uncropped one reports the stream's own size.
    if isinstance(video, InputImpl.VideoFromFile) and video.get_dimensions() == coded_size(video.get_stream_source()):
        return StreamedVideo(video.get_stream_source(), *video.get_active_trim_window(), name)
    return MaterializedVideo(video.get_components(), name)


class PortMedia:
    """The `sticker` input's media for the port Sticker `sticker_id` with the Clip range `clip`: which of its
    frames shows at a Timeline frame.

    `media` is the IMAGE tensor or the VIDEO input itself. Its first frame is at `start - in` of the Clip range.
    A single IMAGE shows for the whole Clip range. An IMAGE batch is a sequence at the Timeline fps without
    PTS, so each Timeline frame shows its nearest image. A VIDEO plays in real time: each Timeline frame shows
    its last frame that starts at or before it (PTS <= t), and the last frame lasts one frame at the average
    rate. `frame_rate`, `times` (seconds from the first frame of the trim window), and `time_base` are the
    VIDEO's, None for an IMAGE. Timeline frames are those of the state, at `stored_fps`.
    """

    def __init__(self, sticker_id: str, clip: dict, media, stored_fps: float):
        self.sticker_id = sticker_id
        self.clip = clip
        self.media = media
        self._origin = clip["start"] - clip["in"]
        self._stored_fps = stored_fps
        if isinstance(media, torch.Tensor):
            self.frame_rate = self.times = self.time_base = self._starts = None
            self.first_frame = media[0]
            return
        video = open_video(media, "sticker")
        self.frame_rate, self.times, self.time_base, self.first_frame = video.frame_rate, video.times, video.time_base, video.first_frame
        # Half the step its PTS are rounded to, in Timeline frames.
        self._tolerance = float(video.time_base) / 2 * stored_fps
        # Where each frame starts and where the last one ends, in Timeline frames from the first frame.
        self._starts = [float(time) * stored_fps for time in [*video.times, video.times[-1] + 1 / video.frame_rate]]

    def end(self, fps: float) -> float | None:
        """The Timeline frame where the media ends at the Timeline `fps`, or None for a single IMAGE."""
        if self._starts is not None:
            return self._origin + self._starts[-1]
        if self.media.shape[0] > 1:
            return self._origin + self.media.shape[0] * self._stored_fps / fps
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
        count = self.media.shape[0]
        if count == 1:
            return 0
        index = math.floor(clip_frame * fps / self._stored_fps + 0.5)
        return index if 0 <= index < count else None

    def frames(self):
        """The frames to index with `index_at`, in non-decreasing order. A VIDEO is opened again for each pass
        over the Timeline, since an opened `StreamedVideo` reads forward once."""
        return self.media if self._starts is None else open_video(self.media, "sticker")
