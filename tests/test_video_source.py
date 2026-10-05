"""A streamed VIDEO's times are read from its presentation time stamps, not made up front."""
import tracemalloc
from fractions import Fraction

import numpy as np
import torch

from comfyui_pano_suite.core.video_source import PtsTimes, StreamedVideo, VideoIndex


def _index(pts, time_base=Fraction(1001, 30000)):
    return VideoIndex(0.0, 0.0, Fraction(30000, 1001), time_base, np.asarray(pts, dtype=np.int64), torch.zeros((2, 2, 3)))


def test_times_are_each_pts_from_the_first_in_seconds():
    pts = [7, 1000, 1999, 3001, 10 ** 12 + 3]
    times = StreamedVideo("unused.mp4", _index(pts), "bg_media").times
    expected = [(value - 7) * Fraction(1001, 30000) for value in pts]

    assert isinstance(times, PtsTimes)
    assert len(times) == 5 and list(times) == expected
    assert times[1] == expected[1] and times[-1] == expected[-1] and times[1:3] == expected[1:3]
    assert times.seconds() == [float(time) for time in expected]


def test_opening_a_long_video_makes_nothing_per_frame():
    # An hour at 60 fps in a 1/15360 time base.
    index = _index(np.arange(216000) * 256, Fraction(1, 15360))

    tracemalloc.start()
    video = StreamedVideo("unused.mp4", index, "bg_media")
    _current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    assert peak < 64 * 1024
    assert video.times[-1] == Fraction(215999 * 256, 15360)
