"""The legacy Preview's MP4 keeps its audio as it is: cut or padded with silence to the frames, never stretched."""
import ast
from pathlib import Path

import av
import numpy as np
import pytest
import torch

from comfyui_pano_suite.core import video as core_video


def _decoded_audio(path) -> np.ndarray:
    with av.open(str(path)) as container:
        return np.concatenate([frame.to_ndarray() for frame in container.decode(audio=0)], axis=1)


@pytest.mark.parametrize("seconds", [0.5, 2.0])
def test_audio_is_cut_or_padded_to_the_frames(seconds):
    rate = 8000
    waveform = torch.sin(torch.arange(int(seconds * rate)) * (2 * np.pi * 440 / rate))[None, None]

    fitted, sample_rate = core_video._fit_audio_to_frame_count({"waveform": waveform, "sample_rate": rate}, 24, 24)

    assert sample_rate == rate and fitted.shape == (1, rate)
    kept = min(rate, waveform.shape[-1])
    assert np.array_equal(fitted[0, :kept], waveform[0, 0, :kept].numpy())
    assert not fitted[0, kept:].any()


def test_preview_mp4_with_longer_audio_keeps_its_first_seconds_as_they_are(tmp_path):
    # 440 Hz for the first second, then 880 Hz: cut to one second of frames, the end of the MP4 is still 440 Hz (a
    # stretch to fit would have brought the 880 Hz part into it).
    rate = 16000
    t = torch.arange(3 * rate) / rate
    waveform = torch.where(t < 1.0, torch.sin(2 * np.pi * 440 * t), torch.sin(2 * np.pi * 880 * t))[None, None]

    path = core_video.encode_frames_to_mp4(torch.rand(24, 16, 32, 3), 24.0, audio={"waveform": waveform, "sample_rate": rate})

    decoded = _decoded_audio(path)[0]
    tail = decoded[int(0.6 * rate):int(0.95 * rate)]
    spectrum = np.abs(np.fft.rfft(tail))
    assert abs(np.argmax(spectrum) * rate / tail.shape[0] - 440) < 10


def test_the_video_module_does_not_use_torchaudio():
    tree = ast.parse(Path(core_video.__file__).read_text())
    imported = {alias.name for node in ast.walk(tree) if isinstance(node, (ast.Import, ast.ImportFrom)) for alias in node.names}
    imported |= {node.module for node in ast.walk(tree) if isinstance(node, ast.ImportFrom) and node.module}
    assert not any(name.startswith("torchaudio") for name in imported)
