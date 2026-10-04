"""Cancel stops the long loops of an execution at their next step and leaves no partial file in temp."""
import json
from fractions import Fraction

import numpy as np
import pytest
import torch

pytest.importorskip("comfy_api.latest", reason="ComfyUI's real V3 API is required")

import comfy.model_management
from comfy.model_management import InterruptProcessingException
from comfy_api.latest import Types

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core import video as core_video
from comfyui_pano_suite.core.video_source import MaterializedVideo, scan_video
from comfyui_pano_suite.node_runtime import NodeRuntime
from comfyui_pano_suite.progress import loop_progress
from comfyui_pano_suite.scene_files import write_editor_files
from comfyui_pano_suite.scene_video import SceneVideo
from test_stickers_scene_video import _cfr


def _cancel_at(step: int):
    """A `progress(done, total)` that records its calls and is cancelled at the `step`-th call."""
    calls = []

    def report(done, total=None):
        calls.append((done, total))
        if len(calls) == step:
            raise InterruptProcessingException()

    return report, calls


def _files(tmp_path):
    return sorted(path.name for path in tmp_path.rglob("*") if path.is_file())


def _batch(count=4):
    return MaterializedVideo(Types.VideoComponents(images=torch.rand(count, 16, 32, 3), frame_rate=Fraction(24)), "batch")


def test_loop_progress_raises_the_interrupt_of_the_queue():
    report = loop_progress()
    report(1, 4)
    comfy.model_management.interrupt_current_processing(True)
    with pytest.raises(InterruptProcessingException):
        report(2, 4)


def test_cancelled_editor_mp4_leaves_no_file(tmp_path):
    report, calls = _cancel_at(2)

    with pytest.raises(InterruptProcessingException):
        core_video.encode_editor_mp4(_batch(), report)

    assert calls == [(1, 4), (2, 4)]
    assert _files(tmp_path) == []


def test_editor_mp4_reports_each_frame(tmp_path):
    calls = []
    path, _audio = core_video.encode_editor_mp4(_batch(), lambda done, total: calls.append((done, total)))

    assert calls == [(1, 4), (2, 4), (3, 4), (4, 4)]
    assert path.exists()


def test_cancelled_preview_mp4_leaves_no_file(tmp_path):
    report, _calls = _cancel_at(2)

    with pytest.raises(InterruptProcessingException):
        core_video.encode_frames_to_mp4(torch.rand(4, 16, 32, 3), 24.0, progress_callback=report)

    assert _files(tmp_path) == []


def test_cancelled_editor_frames_leave_no_png(tmp_path):
    report, calls = _cancel_at(3)

    with pytest.raises(InterruptProcessingException):
        core_video.save_editor_frames(torch.rand(4, 8, 8, 4), report)

    assert len(calls) == 3
    assert _files(tmp_path) == []


def test_cancelled_editor_files_leave_no_file(tmp_path):
    splat = Types.SPLAT(torch.rand(3, 5, 3), torch.full((3, 5, 3), 0.1), torch.nn.functional.normalize(torch.rand(3, 5, 4), dim=-1),
                        torch.rand(3, 5, 1), torch.rand(3, 5, 1, 3))
    report, _calls = _cancel_at(2)

    with pytest.raises(InterruptProcessingException):
        write_editor_files(splat, report)

    assert _files(tmp_path) == []


def test_cancelled_scan_of_the_presentation_times_stops(tmp_path):
    video = _cfr(tmp_path, count=6)
    report, calls = _cancel_at(3)

    with pytest.raises(InterruptProcessingException):
        scan_video(video.get_stream_source(), 0, 0, "bg_media", report)

    assert len(calls) == 3


def test_scan_reports_the_packets_against_the_frame_count(tmp_path):
    video = _cfr(tmp_path, count=6)
    calls = []

    scan_video(video.get_stream_source(), 0, 0, "bg_media", lambda done, total: calls.append((done, total)))

    assert calls[-1][0] == 6


def test_cancelled_save_of_the_video_output_removes_the_partial_file(tmp_path):
    def render(device):
        for index in range(4):
            if index == 2:
                raise InterruptProcessingException()
            yield torch.rand(16, 32, 3), torch.zeros(16, 32)

    video = SceneVideo(render, 32, 16, Fraction(24), [Fraction(index, 24) for index in range(4)], Fraction(0), None)
    output = tmp_path / "out" / "saved.mp4"
    output.parent.mkdir()

    with pytest.raises(InterruptProcessingException):
        video.save_to(str(output), crf=20)

    assert not output.exists()
    with pytest.raises(InterruptProcessingException):
        video.get_stream_source()
    assert _files(tmp_path) == []


def test_node_progress_checks_the_interrupt_at_each_step():
    checks = []

    def check():
        checks.append(1)
        if len(checks) == 3:
            raise InterruptProcessingException()

    progress = NodeRuntime(interrupt_check=check).progress("1", 10)
    callback = progress.frame_callback(0, 10)
    callback(1, 10)
    callback(2, 10)
    with pytest.raises(InterruptProcessingException):
        callback(3, 10)


def test_cancelled_legacy_stickers_batch_leaves_no_preview_mp4(tmp_path, monkeypatch):
    calls = []

    def check():
        calls.append(1)
        if len(calls) == 6:
            raise InterruptProcessingException()

    monkeypatch.setattr(nodes.NODE_RUNTIME, "_interrupt_check", check)

    with pytest.raises(InterruptProcessingException):
        nodes.PanoramaStickersNode.execute("256", "360", "#00ff00", json.dumps({"version": 1, "stickers": []}),
                                           bg_erp=torch.rand(4, 64, 128, 3), fps=24.0)

    assert not [name for name in _files(tmp_path) if name.endswith(".mp4")]
