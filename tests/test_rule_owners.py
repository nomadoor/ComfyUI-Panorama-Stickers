"""The one owner of each small rule that several modules use (Issue #135, stage 2)."""
import os
from fractions import Fraction

import numpy as np
import pytest
import torch

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.cache import file_key
from comfyui_pano_suite.core.math import over_rgb, over_rgba, unpremultiply
from comfyui_pano_suite.core.scene_eval import segment_easing
from comfyui_pano_suite.core.scene_state import round_frame
from comfyui_pano_suite.core.state import coverage_span, normalize_coverage
from comfyui_pano_suite.core.video_source import cut_audio, pts_half_step, pts_tolerance, pts_tolerance_frames


def test_coverage_span_is_180_or_else_360_and_raises_on_what_int_cannot_read():
    assert [coverage_span(value) for value in (180, "180", 180.7, 360, 90, "0")] == [180, 180, 180, 360, 360, 360]
    with pytest.raises(TypeError):
        coverage_span(None)
    assert normalize_coverage(None) == 360


def test_over_rgba_zeroes_the_color_at_an_alpha_of_1e_6_or_less():
    rgb, alpha = over_rgba(np.array([[0.2, 0.4, 0.6]]), np.array([[0.5]]), np.array([[1.0, 0.0, 0.0]]), np.array([[0.5]]))
    assert alpha.tolist() == [[0.75]]
    assert np.allclose(rgb, [[(0.5 + 0.2 * 0.25) / 0.75, 0.4 * 0.25 / 0.75, 0.6 * 0.25 / 0.75]])
    rgb, alpha = over_rgba(np.ones((1, 3)), np.array([[0.0]]), np.ones((1, 3)), np.array([[1e-6]]))
    assert rgb.tolist() == [[0.0, 0.0, 0.0]] and alpha.tolist() == [[1e-6]]
    assert over_rgb(np.zeros(3), np.ones(3), np.array([0.25])).tolist() == [0.25, 0.25, 0.25]


def test_over_rgba_gives_the_same_bits_on_torch_tensors_as_on_numpy_arrays():
    rng = np.random.default_rng(3)
    dst, src = rng.random((64, 4), dtype=np.float32), rng.random((64, 4), dtype=np.float32)
    src[:8, 3] = [0.0, 1e-7, 1e-6, 2e-6, 0.0, 0.0, 1.0, 0.5]
    dst[:8, 3] = [0.0, 0.0, 0.0, 0.0, 1e-7, 1.0, 0.0, 0.0]
    rgb, alpha = over_rgba(dst[:, :3], dst[:, 3:], src[:, :3], src[:, 3:])
    t_rgb, t_alpha = over_rgba(*(torch.from_numpy(part) for part in (dst[:, :3], dst[:, 3:], src[:, :3], src[:, 3:])))
    assert np.array_equal(t_rgb.numpy(), rgb) and np.array_equal(t_alpha.numpy(), alpha)
    assert np.array_equal(unpremultiply(torch.from_numpy(src[:, :3]), torch.from_numpy(src[:, 3:])).numpy(), unpremultiply(src[:, :3], src[:, 3:]))


def test_pts_tolerance_is_half_the_time_base_in_seconds_or_timeline_frames():
    assert pts_tolerance(Fraction(1, 1000)) == 0.0005
    assert pts_tolerance_frames(Fraction(1, 1000), 24.0) == float(Fraction(1, 1000)) / 2 * 24.0


def test_round_frame_rounds_half_up():
    assert [round_frame(value) for value in (0.5, 1.5, -0.5, -1.5, 2.4999)] == [1, 2, 0, -1, 2]


def test_pts_half_step_is_exact_and_pts_tolerance_is_its_float():
    assert pts_half_step(Fraction(1, 30000)) == Fraction(1, 60000)
    assert pts_half_step(0) == 0
    for time_base in (Fraction(1, 1000), Fraction(1001, 30000), Fraction(1, 90000), 0.04):
        assert pts_tolerance(time_base) == float(time_base) / 2


def test_round_frame_rounds_a_fraction_exactly():
    just_under_half = Fraction(1, 2) - Fraction(1, 10**20)
    assert float(just_under_half) + 0.5 == 1.0
    assert round_frame(just_under_half) == 0
    assert round_frame(Fraction(5, 2)) == 3 and round_frame(Fraction(-1, 2)) == 0
    assert round_frame(Fraction(5, 2)) == 3


def test_segment_easing_is_the_easing_of_the_keyframe_that_starts_the_segment():
    keys = [{"frame": 0, "easing": "hold"}, {"frame": 10, "easing": "linear"}, {"frame": 20, "easing": "auto"}]
    assert [segment_easing(keys, frame) for frame in (-1, 0, 9.5, 10, 15, 20 - 1e-7, 20, 25)] == [None, "hold", "hold", "linear", "linear", None, None, None]
    assert nodes._in_hold(keys, 5) and not nodes._in_hold(keys, 15)


def test_file_key_is_the_path_modification_time_and_size(tmp_path):
    path = tmp_path / "a.png"
    path.write_bytes(b"abc")
    stat = os.stat(path)
    assert file_key(path) == (str(path), stat.st_mtime_ns, 3)
    with pytest.raises(FileNotFoundError):
        file_key(tmp_path / "missing.png")


def test_cut_audio_keeps_the_first_seconds():
    audio = {"waveform": torch.arange(10.0).reshape(1, 1, 10), "sample_rate": 4}
    cut = cut_audio(audio, 1.5)
    assert cut["sample_rate"] == 4 and cut["waveform"].tolist() == [[[0.0, 1.0, 2.0, 3.0, 4.0, 5.0]]]
    assert cut_audio(None, 1.0) is None


def test_hex_to_rgb01_expands_three_digits_and_falls_back_to_green():
    assert nodes.hex_to_rgb01("#abc").tolist() == nodes.hex_to_rgb01("#aabbcc").tolist()
    assert nodes.hex_to_rgb01("FF0000").tolist() == [1.0, 0.0, 0.0]
    assert nodes.hex_to_rgb01("nope").tolist() == [0.0, 1.0, 0.0]
    assert nodes._normalize_hex_color(" #ABC ") == "#aabbcc"
