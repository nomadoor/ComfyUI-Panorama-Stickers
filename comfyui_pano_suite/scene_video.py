"""The `video` output of Stickers and Cutout: a VIDEO whose frames are rendered when it is read (ADR 0027)."""

import json
import os
from fractions import Fraction

import av
import torch
import comfy.model_management
import comfy.utils
from comfy_api.latest import Input, InputImpl, Types

from .core.video import _BT709, _set_srgb, _temp_mp4_path, removed_on_failure

# The size of a whole video (the color of every frame) from which `get_components` copies the frames from the
# device through a pinned buffer.
STAGED_RENDER_BYTES = 16 * 1024 ** 2

_CONTAINER_FORMATS = {Types.VideoContainer.MP4: "mp4", Types.VideoContainer.MKV: "matroska", Types.VideoContainer.WEBM: "webm"}
_ENCODERS = {Types.VideoCodec.H264: "h264", Types.VideoCodec.AV1: "libsvtav1"}


def _container_and_codec(path, format, codec) -> tuple[Types.VideoContainer, Types.VideoCodec]:
    """The container and codec `save_to` writes, resolving `auto` as the core does."""
    format, codec = Types.VideoContainer(format), Types.VideoCodec(codec)
    if format == Types.VideoContainer.AUTO:
        extension = os.path.splitext(path)[1].lower() if isinstance(path, (str, os.PathLike)) else ""
        format = {".mkv": Types.VideoContainer.MKV, ".webm": Types.VideoContainer.WEBM}.get(extension, Types.VideoContainer.MP4)
    if codec == Types.VideoCodec.AUTO:
        codec = Types.VideoCodec.AV1 if format == Types.VideoContainer.WEBM else Types.VideoCodec.H264
    if format == Types.VideoContainer.WEBM and codec != Types.VideoCodec.AV1:
        raise ValueError("WebM output requires the AV1 codec")
    return format, codec


class SceneVideo(Input.Video):
    """A VIDEO whose frames are rendered one at a time each time it is read, so that saving it never holds every
    frame (ADR 0027). Only `get_components` renders all frames into memory.

    `render(device)` returns a new iterator over the output frames' color (H, W, 3) and mask (H, W) on `device`,
    opening its media for that pass; a frame equal to the previous one is the same tensor. `times` holds each
    frame's presentation time in seconds: PTS rounded to `time_base` when a VIDEO decides the Timeline, or exact
    times with a `time_base` of 0. `frame_rate` is the Timeline fps and `audio` the AUDIO of the background or
    None. The frames are sRGB.
    """

    def __init__(self, render, width: int, height: int, frame_rate: Fraction, times: list[Fraction], time_base: Fraction, audio):
        self._render = render
        self._width = width
        self._height = height
        self._frame_rate = frame_rate
        self._times = times
        self._time_base = time_base
        self._audio = audio
        self._stream_path = None

    def get_components(self) -> Types.VideoComponents:
        device = comfy.model_management.get_torch_device()
        images = torch.empty((len(self._times), self._height, self._width, 3), dtype=torch.float32)
        staging = None
        if not comfy.model_management.is_device_cpu(device) and images.numel() * 4 >= STAGED_RENDER_BYTES:
            # The frames of a large video reach the output through one pinned buffer: copying from the device
            # straight into fresh pageable rows is several times slower. A small video is copied directly, since
            # pinning can release ComfyUI's RAM cache and other pins for little gain. Without a pin (no CUDA/ROCm or
            # no budget), the buffer would only add a copy.
            staging = torch.empty(images.shape[1:], dtype=torch.float32)
            if not comfy.model_management.pin_memory(staging, evict_active=False):
                staging = None
        progress = comfy.utils.ProgressBar(len(self._times))
        previous = None
        try:
            for index, (color, _mask) in enumerate(self._render(device)):
                # A reused frame is copied from the previous row instead of transferred from the device again.
                if color is previous:
                    images[index] = images[index - 1]
                elif staging is None:
                    images[index] = color
                else:
                    staging.copy_(color)
                    images[index] = staging
                previous = color
                progress.update(1)
        finally:
            if staging is not None:
                comfy.model_management.unpin_memory(staging)
        return Types.VideoComponents(images=images, frame_rate=self._frame_rate, audio=self._audio)

    def save_to(self, path, format=Types.VideoContainer.AUTO, codec=Types.VideoCodec.AUTO, metadata=None,
                bit_depth=None, crf=None, color_space=None, preset=None):
        if (bit_depth, crf, color_space, preset) == (None, None, None, None) and _container_and_codec(path, format, codec) == (Types.VideoContainer.MP4, Types.VideoCodec.H264):
            # The default encoding is that of the stream source, so it is rendered once and copied for each save.
            InputImpl.VideoFromFile(self.get_stream_source()).save_to(path, format=format, codec=codec, metadata=metadata)
            return
        self._encode(path, format, codec, metadata, bit_depth, crf, color_space, preset)

    def _encode(self, path, format, codec, metadata, bit_depth, crf, color_space, preset):
        """Render and encode one frame at a time, with each frame at its time and the audio after the video. A file
        written by path is removed when this fails or is cancelled."""
        if color_space not in (None, "sRGB"):
            raise ValueError(f"Cannot save sRGB video as {color_space} without color conversion; use auto or sRGB")
        format, codec = _container_and_codec(path, format, codec)
        ten_bit = bit_depth is not None and bit_depth >= 10
        pix_fmt = "yuv420p10le" if ten_bit else "yuv420p"
        options = {}
        if format == Types.VideoContainer.MP4:
            # FFmpeg's faststart pass reopens the output by name, so a file-like output cannot use it.
            options["movflags"] = "use_metadata_tags+faststart" if isinstance(path, (str, os.PathLike)) else "use_metadata_tags"
        encoder_options = {}
        if preset is not None and codec == Types.VideoCodec.H264:
            encoder_options["preset"] = preset
        if crf is not None:
            encoder_options.update({"svtav1-params": "lossless=1"} if codec == Types.VideoCodec.AV1 and crf == 0 else {"crf": str(crf)})
        # 4:2:0 needs even sizes; like the core's transcode, the odd last row or column is cropped.
        width, height = self._width - self._width % 2, self._height - self._height % 2
        device = comfy.model_management.get_torch_device()
        progress = comfy.utils.ProgressBar(len(self._times))
        partial = [os.fspath(path)] if isinstance(path, (str, os.PathLike)) else []
        with removed_on_failure(partial), av.open(path, mode="w", format=_CONTAINER_FORMATS[format], options=options) as output:
            for key, value in (metadata or {}).items():
                output.metadata[key] = json.dumps(value)
            stream = output.add_stream(_ENCODERS[codec], rate=self._frame_rate)
            stream.width, stream.height, stream.pix_fmt = width, height, pix_fmt
            stream.options = encoder_options
            time_base = self._time_base or 1 / self._frame_rate
            stream.codec_context.time_base = time_base
            if self._time_base:
                # A VIDEO decides the Timeline: the frames keep its PTS, as the core keeps a file's when it
                # transcodes it, and like the core no B-frames are used, since their reordering shortens irregular spans.
                stream.codec_context.max_b_frames = 0
            _set_srgb(stream.codec_context)
            audio_stream = None
            if self._audio is not None:
                waveform = self._audio["waveform"][0].float().cpu().contiguous().numpy()
                sample_rate = int(self._audio["sample_rate"])
                layout = {1: "mono", 2: "stereo", 6: "5.1"}.get(waveform.shape[0], "stereo")
                webm = format == Types.VideoContainer.WEBM
                audio_stream = output.add_stream("libopus" if webm else "aac", rate=48000 if webm else sample_rate, layout=layout)
            previous = None
            for time, (color, _mask) in zip(self._times, self._render(device)):
                if color is not previous:
                    previous = color
                    color = color[:height, :width]
                    if ten_bit:
                        # 16-bit RGB keeps float precision through the conversion to 10-bit YUV.
                        pixels = (color * 65535).clamp(0, 65535).cpu().numpy().astype("uint16")
                    else:
                        pixels = (color * 255).clamp(0, 255).byte().cpu().numpy()
                frame = av.VideoFrame.from_ndarray(pixels, format="rgb48le" if ten_bit else "rgb24")
                frame = frame.reformat(format=pix_fmt, dst_colorspace=_BT709)
                _set_srgb(frame)
                frame.pts = round(time / time_base)
                frame.time_base = time_base
                output.mux(stream.encode(frame))
                progress.update(1)
            output.mux(stream.encode(None))
            if audio_stream is not None:
                frame = av.AudioFrame.from_ndarray(waveform, format="fltp", layout=layout)
                frame.sample_rate = sample_rate
                frame.pts = 0
                frames = [frame]
                if audio_stream.rate != sample_rate:
                    resampler = av.audio.resampler.AudioResampler(format="fltp", layout=layout, rate=audio_stream.rate)
                    frames = [*resampler.resample(frame), *resampler.resample(None)]
                for frame in frames:
                    output.mux(audio_stream.encode(frame))
                output.mux(audio_stream.encode(None))

    def get_stream_source(self) -> str:
        """An MP4 of the video, rendered on the first call and reused while the file is there."""
        if self._stream_path is None or not os.path.exists(self._stream_path):
            path = str(_temp_mp4_path())
            self._encode(path, Types.VideoContainer.MP4, Types.VideoCodec.H264, None, None, None, None, None)
            self._stream_path = path
        return self._stream_path

    def as_trimmed(self, start_time=0.0, duration=0.0, strict_duration=True):
        return InputImpl.VideoFromFile(self.get_stream_source()).as_trimmed(start_time, duration, strict_duration)

    def as_cropped(self, x=0, y=0, width=0, height=0):
        video = InputImpl.VideoFromFile(self.get_stream_source())
        cropped = video.as_cropped(x, y, width, height)
        return self if cropped is video else cropped

    def get_dimensions(self) -> tuple[int, int]:
        return self._width, self._height

    def get_color_space(self) -> str:
        return "sRGB"

    def get_duration(self) -> float:
        return float(self._times[-1] + 1 / self._frame_rate)

    def get_frame_count(self) -> int:
        return len(self._times)

    def get_frame_rate(self) -> Fraction:
        return self._frame_rate


class RenderedVideo:
    """A `SceneVideo` read inside this package, as `open_video` returns it: its frames rendered in order, with the
    interface of `StreamedVideo`, so that they keep their exact values instead of passing through the encoded
    stream source. Frames are on the render device; `first_frame` is on the CPU."""

    def __init__(self, video: SceneVideo):
        self.frame_rate = video._frame_rate
        self.times = video._times
        self.time_base = video._time_base
        self._audio = video._audio
        self._frames = video._render(comfy.model_management.get_torch_device())
        self._index = 0
        self._current = next(self._frames)[0]
        self.first_frame = self._current.to("cpu", copy=True)

    def __getitem__(self, index: int) -> torch.Tensor:
        if index < self._index:
            raise ValueError(f"Panorama Stickers: frames of a rendered VIDEO must be read in order; frame {index} was requested after frame {self._index}.")
        while self._index < index:
            self._current = next(self._frames)[0]
            self._index += 1
        return self._current

    def audio(self, seconds: float) -> dict | None:
        if self._audio is None:
            return None
        sample_rate = int(self._audio["sample_rate"])
        return {"waveform": self._audio["waveform"][..., :int(seconds * sample_rate)], "sample_rate": sample_rate}
