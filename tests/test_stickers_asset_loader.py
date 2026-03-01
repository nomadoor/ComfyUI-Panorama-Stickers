import base64
import io
from pathlib import Path

from PIL import Image

from comfyui_pano_suite.core import stickers as stickers_mod


def _write_png(path: Path, color=(255, 0, 0, 255)):
    path.parent.mkdir(parents=True, exist_ok=True)
    img = Image.new("RGBA", (4, 4), color=color)
    img.save(path, format="PNG")


def _dataurl_from_png(color=(10, 20, 30, 255)):
    bio = io.BytesIO()
    Image.new("RGBA", (3, 2), color=color).save(bio, format="PNG")
    payload = base64.b64encode(bio.getvalue()).decode("ascii")
    return f"data:image/png;base64,{payload}"


class _DummyFolderPaths:
    def __init__(self, input_dir: Path, output_dir: Path, temp_dir: Path):
        self._input = str(input_dir)
        self._output = str(output_dir)
        self._temp = str(temp_dir)

    def get_input_directory(self):
        return self._input

    def get_output_directory(self):
        return self._output

    def get_temp_directory(self):
        return self._temp


def test_comfy_image_without_value_loads(monkeypatch, tmp_path):
    input_dir = tmp_path / "input"
    output_dir = tmp_path / "output"
    temp_dir = tmp_path / "temp"
    _write_png(input_dir / "asset.png", color=(128, 64, 32, 255))
    monkeypatch.setattr(
        stickers_mod,
        "folder_paths",
        _DummyFolderPaths(input_dir=input_dir, output_dir=output_dir, temp_dir=temp_dir),
    )
    arr = stickers_mod._load_asset_rgba({
        "type": "comfy_image",
        "filename": "asset.png",
        "subfolder": "",
        "storage": "input",
    })
    assert arr is not None
    assert arr.shape == (4, 4, 4)
    assert 0.0 <= float(arr[0, 0, 1]) <= 1.0


def test_dataurl_valid_loads():
    arr = stickers_mod._load_asset_rgba({
        "type": "dataurl",
        "value": _dataurl_from_png(),
    })
    assert arr is not None
    assert arr.shape == (2, 3, 4)
    assert float(arr[..., 3].min()) > 0.99


def test_path_accepts_value_and_path_key(tmp_path):
    file_path = tmp_path / "assets" / "a.png"
    _write_png(file_path, color=(5, 10, 15, 255))
    rel = str(file_path.relative_to(tmp_path))

    arr_value = stickers_mod._load_asset_rgba(
        {"type": "path", "value": rel},
        base_dir=tmp_path,
    )
    arr_path = stickers_mod._load_asset_rgba(
        {"type": "path", "path": rel},
        base_dir=tmp_path,
    )

    assert arr_value is not None
    assert arr_path is not None
    assert arr_value.shape == arr_path.shape == (4, 4, 4)


def test_comfy_image_path_traversal_rejected(monkeypatch, tmp_path):
    input_dir = tmp_path / "input"
    output_dir = tmp_path / "output"
    temp_dir = tmp_path / "temp"
    input_dir.mkdir(parents=True, exist_ok=True)
    _write_png(tmp_path / "outside.png", color=(200, 100, 50, 255))
    monkeypatch.setattr(
        stickers_mod,
        "folder_paths",
        _DummyFolderPaths(input_dir=input_dir, output_dir=output_dir, temp_dir=temp_dir),
    )

    arr = stickers_mod._load_asset_rgba({
        "type": "comfy_image",
        "filename": "../outside.png",
        "subfolder": "",
        "storage": "input",
    })
    assert arr is None


def test_invalid_inputs_return_none(monkeypatch, tmp_path):
    monkeypatch.setattr(stickers_mod, "folder_paths", None)
    cases = [
        None,
        {},
        {"type": "unknown", "value": "x"},
        {"type": "dataurl"},
        {"type": "dataurl", "value": "not-a-data-url"},
        {"type": "path"},
        {"type": "path", "value": ""},
        {"type": "comfy_image", "filename": ""},
    ]
    for asset in cases:
        assert stickers_mod._load_asset_rgba(asset, base_dir=tmp_path) is None
