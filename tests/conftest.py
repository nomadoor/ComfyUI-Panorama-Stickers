import tempfile

import pytest

try:
    import folder_paths
except ImportError:
    folder_paths = None


@pytest.fixture(autouse=True)
def isolated_temp_directory(tmp_path, monkeypatch):
    """Keep preview PNG and MP4 writes out of the real ComfyUI temp directory, and start each test with an empty
    shared cache and temp registry, so that no test sees another's files."""
    from comfyui_pano_suite.core.cache import CACHE
    from comfyui_pano_suite.core.temp_files import TEMP_FILES

    monkeypatch.setattr(tempfile, "tempdir", str(tmp_path))
    if folder_paths is not None:
        monkeypatch.setattr(folder_paths, "temp_directory", str(tmp_path))
    CACHE.clear()
    monkeypatch.setattr(TEMP_FILES, "_files", type(TEMP_FILES._files)())
