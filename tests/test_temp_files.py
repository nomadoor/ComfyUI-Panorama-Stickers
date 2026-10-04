"""The editor's temp files are registered and bounded by bytes; an input MP4 the editor can play is not copied."""
from fractions import Fraction
from pathlib import Path

import pytest
import torch

pytest.importorskip("comfy_api.latest", reason="ComfyUI's real V3 API is required")

import folder_paths
from comfy_api.latest import Types

from comfyui_pano_suite.core import temp_files
from comfyui_pano_suite.core import video as core_video
from comfyui_pano_suite.core.temp_files import TEMP_FILES, TempFiles, entry_from_path, temp_file_path
from comfyui_pano_suite.core.video_source import MaterializedVideo
from comfyui_pano_suite.nodes import PanoramaPreviewSceneNode
from test_editor_mp4 import _file


@pytest.fixture(autouse=True)
def fresh_registry(monkeypatch):
    registry = TempFiles()
    monkeypatch.setattr(temp_files, "TEMP_FILES", registry)
    monkeypatch.setattr(core_video, "TEMP_FILES", registry)
    return registry


def _write(name: str, size: int):
    path = temp_file_path(name)
    path.write_bytes(b"x" * size)
    return path


def test_the_oldest_files_past_the_limit_are_deleted(fresh_registry):
    fresh_registry.max_bytes = 250
    first, second = _write("a.mp4", 100), _write("b.mp4", 100)
    fresh_registry.add(first)
    fresh_registry.add(second)
    fresh_registry.use(first)
    third = _write("c.mp4", 100)
    fresh_registry.add(third)

    assert not second.exists() and first.exists() and third.exists()
    assert fresh_registry.bytes == 200


def test_files_of_the_current_run_are_kept_past_the_limit(fresh_registry):
    run = ["prompt-1"]
    fresh_registry.current_run = lambda: run[0]
    fresh_registry.max_bytes = 150
    shown = _write("shown.mp4", 100)
    fresh_registry.add(shown)
    run[0] = "prompt-2"
    entry_from_path(shown, media_type="video/mp4")
    written = _write("new.mp4", 100)
    fresh_registry.add(written)

    assert shown.exists() and written.exists()
    run[0] = "prompt-3"
    fresh_registry.add(_write("next.mp4", 100))
    assert not shown.exists() and not written.exists()


def test_the_entry_of_a_registered_file_is_marked_evictable(fresh_registry):
    path = _write("a.png", 10)
    assert "pano_evictable" not in entry_from_path(path, media_type="image/png")
    fresh_registry.add(path)
    assert entry_from_path(path, media_type="image/png")["pano_evictable"] is True


def test_written_editor_files_are_registered(fresh_registry):
    batch = MaterializedVideo(Types.VideoComponents(images=torch.rand(3, 16, 32, 3), frame_rate=Fraction(24)), "batch")
    path, _audio = core_video.encode_editor_mp4(batch)
    frames = core_video.save_editor_frames(torch.rand(2, 8, 8, 4))
    preview = core_video.encode_frames_to_mp4(torch.rand(2, 16, 32, 3), 24.0)

    assert all(fresh_registry.is_registered(item) for item in (path, *frames, preview))
    assert fresh_registry.bytes == sum(item.stat().st_size for item in (path, *frames, preview))


def test_an_input_mp4_that_seeks_fast_is_shown_from_the_input_directory(tmp_path, monkeypatch, fresh_registry):
    input_dir = tmp_path / "input"
    (input_dir / "clips").mkdir(parents=True)
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(input_dir))
    video = _file(input_dir / "clips", "short.mp4", gop=10, audio_rate=8000)

    ui = PanoramaPreviewSceneNode.execute(source=video, coverage="360").ui

    assert ui["pano_videos"] == [{"filename": "short.mp4", "subfolder": "clips", "type": "input", "storage": "input", "format": "video/mp4"}]
    assert ui["pano_video_meta"][0]["has_audio"] is True
    assert not list(tmp_path.glob("*.mp4"))
    assert fresh_registry.bytes == 0


def test_an_input_file_of_another_container_is_still_copied(tmp_path, monkeypatch):
    input_dir = tmp_path / "input"
    input_dir.mkdir()
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(input_dir))
    video = _file(input_dir, "short.mov", gop=10, container_format="mp4")

    entry = PanoramaPreviewSceneNode.execute(source=video, coverage="360").ui["pano_videos"][0]

    assert entry["type"] == "temp" and entry["filename"].endswith(".mp4")


def _lock(monkeypatch, *locked):
    """Make `unlink` of the `locked` paths fail as Windows fails it for a file a browser still has open."""
    unlink = Path.unlink

    def guarded(self, missing_ok=False):
        if self in locked:
            raise PermissionError(13, "The process cannot access the file because it is being used by another process", str(self))
        return unlink(self, missing_ok=missing_ok)

    monkeypatch.setattr(Path, "unlink", guarded)


def test_a_file_that_cannot_be_deleted_stays_registered_and_is_tried_again(fresh_registry, monkeypatch):
    fresh_registry.max_bytes = 150
    playing, older = _write("playing.mp4", 100), _write("older.mp4", 100)
    fresh_registry.add(playing)
    _lock(monkeypatch, playing)
    fresh_registry.add(older)

    # The locked file is skipped without failing the write, and the next one is deleted in its place.
    assert playing.exists() and not older.exists()
    assert fresh_registry.is_registered(playing) and fresh_registry.bytes == 100
    monkeypatch.undo()
    fresh_registry.add(_write("next.mp4", 100))
    assert not playing.exists()


def test_a_locked_old_file_does_not_fail_the_preview_encoder(fresh_registry, monkeypatch):
    run = ["prompt-1"]
    fresh_registry.current_run = lambda: run[0]
    fresh_registry.max_bytes = 1
    locked = _write("shown.mp4", 100)
    fresh_registry.add(locked)
    run[0] = "prompt-2"
    _lock(monkeypatch, locked)

    path = core_video.encode_frames_to_mp4(torch.rand(2, 16, 32, 3), 24.0)

    assert path.exists() and fresh_registry.is_registered(path)
    assert locked.exists() and fresh_registry.is_registered(locked)


def test_cleanup_that_cannot_delete_raises_the_original_error(monkeypatch):
    partial = _write("partial.mp4", 10)
    _lock(monkeypatch, partial)

    with pytest.raises(RuntimeError, match="encoder"):
        with temp_files.removed_on_failure(partial):
            raise RuntimeError("encoder")
