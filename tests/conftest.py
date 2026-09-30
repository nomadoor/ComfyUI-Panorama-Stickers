import tempfile

import pytest

try:
    import folder_paths
except ImportError:
    folder_paths = None


@pytest.fixture(autouse=True)
def isolated_temp_directory(tmp_path, monkeypatch):
    """Keep preview PNG and MP4 writes out of the real ComfyUI temp directory."""
    monkeypatch.setattr(tempfile, "tempdir", str(tmp_path))
    if folder_paths is not None:
        monkeypatch.setattr(folder_paths, "temp_directory", str(tmp_path))
