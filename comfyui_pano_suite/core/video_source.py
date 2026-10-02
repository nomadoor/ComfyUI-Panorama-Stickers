"""Read a VIDEO input one frame at a time (ADR 0024)."""

from __future__ import annotations

import io
import logging
from fractions import Fraction

import av
import numpy as np
import torch

# Pixel formats that the core VIDEO reader converts through 8-bit RGB instead of float planes.
_BYTE_FORMATS = ("yuvj420p", "yuvj422p", "yuvj444p", "rgb24", "rgba", "pal8")

_log = logging.getLogger(__name__)


def _open(source):
    # Each container reads a BytesIO through a reader of its own, so containers open on one source at once do not
    # move each other's position. A BytesIO made from bytes shares them; one filled by writes is copied once.
    if isinstance(source, io.BytesIO):
        source = io.BytesIO(source.getvalue())
    return av.open(source, mode="r")


def _trim_pts(stream, start_time: float, duration: float) -> tuple[int, int | None]:
    start_pts = int(start_time / stream.time_base)
    end_pts = int((start_time + duration) / stream.time_base) if duration else None
    return start_pts, end_pts


def coded_size(source) -> tuple[int, int]:
    """The (width, height) of the first video stream as coded, before rotation."""
    with _open(source) as container:
        stream = container.streams.video[0]
        return stream.width, stream.height


class StreamedVideo:
    """The frames of a video file inside its trim window, decoded in order and one at a time.

    `source` is `VideoInput.get_stream_source()` and `start_time`/`duration` its `get_active_trim_window()`;
    `name` is the input it came from, for messages.
    `times` holds each frame's presentation time in seconds from the first frame, `time_base` the step those
    times are rounded to, `frame_rate` the stream's average rate, and `first_frame` the first frame that decodes, which sets the output size. Frames are
    float32 RGB (h, w, 3) in 0..1 like `get_components()`, possibly not contiguous, and must be requested in non-decreasing order.
    Unlike the core reader, a decode error is raised instead of skipped.
    """

    def __init__(self, source, start_time: float, duration: float, name: str):
        self._source = source
        self._name = name
        self._start_time = start_time
        self._duration = duration
        with _open(source) as container:
            stream = container.streams.video[0]
            self.frame_rate = Fraction(stream.average_rate) if stream.average_rate else Fraction(1)
            self.time_base = Fraction(stream.time_base)
            start_pts, end_pts = _trim_pts(stream, start_time, duration)
            if start_pts != 0:
                container.seek(start_pts, stream=stream)
            # Packets carry the presentation times, so the timing is known without decoding.
            pts = sorted(
                packet.pts for packet in container.demux(stream)
                if packet.pts is not None and packet.pts >= start_pts and (end_pts is None or packet.pts < end_pts)
            )
            if not pts:
                raise ValueError(f"Panorama Stickers: the {name} VIDEO has no frames in its trim window.")
            self.times = [(value - pts[0]) * stream.time_base for value in pts]
        self._pts = pts
        self._frames = self._decode()
        self._next = next(self._frames, None)
        if self._next is None:
            raise ValueError(f"Panorama Stickers: no frame of the {name} VIDEO could be decoded in its trim window.")
        self.first_frame = self._next[1]
        self._index = -1
        self._current = None

    def __getitem__(self, index: int) -> torch.Tensor | None:
        """The frame at `index` of `times`, or None when the decoder never yields a frame with its pts."""
        if index < self._index:
            raise ValueError(f"Panorama Stickers: frames of the {self._name} VIDEO must be read in order; frame {index} was requested after frame {self._index}.")
        while self._index < index:
            self._index += 1
            self._current = self._frame_at(self._pts[self._index])
        return self._current

    def _frame_at(self, pts: int) -> torch.Tensor | None:
        # A seek can leave the decoder without the references of some frames the packets list; decoded frames
        # are matched by pts so the ones after a gap keep their times, and the ones the scan did not list are dropped.
        while self._next is not None and self._next[0] < pts:
            self._next = next(self._frames, None)
        if self._next is not None and self._next[0] == pts:
            image = self._next[1]
            self._next = next(self._frames, None)
            return image
        _log.warning("Panorama Stickers: frame %d of the %s VIDEO could not be decoded; it is not drawn.", self._index, self._name)
        return None

    def decoded_frames(self):
        """The PyAV frames of the trim window as they decode, in order and not rotated, each with its time in
        seconds from the first frame as in `times`."""
        for frame in self._decoded():
            yield (frame.pts - self._pts[0]) * self.time_base, frame

    def _decoded(self):
        with _open(self._source) as container:
            stream = container.streams.video[0]
            stream.thread_type = "AUTO"
            start_pts, end_pts = _trim_pts(stream, self._start_time, self._duration)
            if start_pts != 0:
                container.seek(start_pts, stream=stream)
            for packet in container.demux(stream):
                for frame in packet.decode():
                    if frame.pts < start_pts:
                        continue
                    if end_pts is not None and frame.pts >= end_pts:
                        return
                    yield frame

    def _decode(self):
        align = None
        for frame in self._decoded():
            if frame.format.name in _BYTE_FORMATS:
                image = torch.from_numpy(frame.to_ndarray(format="rgb24")).float() / 255.0
            else:
                # Same as the core reader: an unaligned width is padded to 32 with smeared borders so the
                # float conversion is deterministic.
                if frame.width % 32:
                    if align is None:
                        align = _alignment_graph(frame, self.time_base)
                    align[1].push(frame)
                    planes = align[2].pull().reformat(format="gbrpf32le").planes
                else:
                    planes = frame.reformat(format="gbrpf32le").planes
                # The planes are copied as they are and viewed as (h, w, 3): interleaving them on the CPU, as
                # `to_ndarray` does, costs about as much as the conversion.
                array = np.stack([np.frombuffer(planes[index], np.float32).reshape(planes[index].height, -1) for index in (2, 0, 1)])
                image = torch.from_numpy(array[:, :frame.height, :frame.width].transpose(1, 2, 0))
            quadrant = int(round(frame.rotation // 90)) % 4 if frame.rotation else 0
            yield frame.pts, torch.rot90(image, k=quadrant, dims=(0, 1)).contiguous() if quadrant else image

    def audio(self, seconds: float) -> dict | None:
        """The audio of the trim window, cut to `seconds` from its start, or None without an audio stream."""
        with _open(self._source) as container:
            # Streams FFmpeg cannot decode have no codec context, as in the core reader.
            stream = next((s for s in reversed(container.streams.audio) if s.codec_context is not None), None)
            if stream is None:
                return None
            end = min(seconds, self._duration) if self._duration else seconds
            # Seek on the video stream as the core reader does, so the audio decodes from the same packet.
            video = container.streams.video[0]
            start_pts = _trim_pts(video, self._start_time, self._duration)[0]
            if start_pts != 0:
                container.seek(start_pts, stream=video)
            resampler = av.audio.resampler.AudioResampler(format="fltp")
            chunks = []
            frames = (resampled for packet in container.demux(stream) for decoded in packet.decode() for resampled in resampler.resample(decoded))
            for frame in frames:
                if frame.time > self._start_time + end:
                    break
                if not chunks:
                    skip = max(0, int((self._start_time - frame.pts * stream.time_base) * stream.sample_rate))
                    if skip >= frame.samples:
                        continue
                    chunks.append(frame.to_ndarray()[..., skip:])
                else:
                    chunks.append(frame.to_ndarray())
            if not chunks:
                return None
            waveform = np.concatenate(chunks, axis=1)[..., :int(end * stream.sample_rate)]
            return {"waveform": torch.from_numpy(waveform).unsqueeze(0), "sample_rate": int(stream.sample_rate)}


def _alignment_graph(frame, time_base):
    pad_w = (frame.width + 31) // 32 * 32
    pad_h = (frame.height + 31) // 32 * 32
    graph = av.filter.Graph()
    src = graph.add_buffer(width=frame.width, height=frame.height, format=frame.format.name, time_base=time_base)
    pad = graph.add("pad", f"{pad_w}:{pad_h}:0:0")
    fill = graph.add("fillborders", f"left=0:right={pad_w - frame.width}:top=0:bottom={pad_h - frame.height}:mode=smear")
    sink = graph.add("buffersink")
    src.link_to(pad)
    pad.link_to(fill)
    fill.link_to(sink)
    graph.configure()
    # The graph is kept with its ends; the ends alone do not keep it alive.
    return graph, src, sink


class MaterializedVideo:
    """A VIDEO read whole through `get_components()`, with the same interface as `StreamedVideo`. Its times are
    exact, so `time_base` is 0."""

    def __init__(self, components, name: str):
        self._images = components.images
        self._audio = components.audio
        self.frame_rate = components.frame_rate
        self.time_base = Fraction(0)
        self.times = [Fraction(index) / self.frame_rate for index in range(self._images.shape[0])]
        if not self.times:
            raise ValueError(f"Panorama Stickers: the {name} VIDEO has no frames.")
        self.first_frame = self._images[0]

    def __getitem__(self, index: int) -> torch.Tensor:
        return self._images[index]

    def audio(self, seconds: float) -> dict | None:
        if self._audio is None:
            return None
        sample_rate = int(self._audio["sample_rate"])
        return {"waveform": self._audio["waveform"][..., :int(seconds * sample_rate)], "sample_rate": sample_rate}
