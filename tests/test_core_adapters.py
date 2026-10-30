"""The core's internal symbols are imported only by `core_adapters.py`; without them only the 3D features stop."""
import os
import subprocess
import sys
from pathlib import Path

import pytest

pytest.importorskip("comfy_api.latest", reason="ComfyUI's real V3 API is required")

from comfyui_pano_suite import core_adapters, node_runtime

PACKAGE = Path(__file__).resolve().parent.parent / "comfyui_pano_suite"
COMFY_ROOT = Path(sys.modules["comfy.model_management"].__file__).resolve().parent.parent


def test_every_module_but_the_adapter_loads_without_the_core_internals():
    # Without comfy_extras and comfy.ldm at all, each module of the package imports, and only the adapter notices.
    modules = sorted(
        ".".join(("comfyui_pano_suite", *path.relative_to(PACKAGE).with_suffix("").parts)).removesuffix(".__init__")
        for path in PACKAGE.rglob("*.py")
    )
    code = f"""
import importlib
for name in {modules!r}:
    importlib.import_module(name)
from comfyui_pano_suite import core_adapters
print("DISABLED" if hasattr(core_adapters, "FEATURE_3D_UNAVAILABLE") else "ENABLED")
"""
    result = _run_without(["comfy_extras", "comfy.ldm"], code)

    assert result.returncode == 0, result.stderr
    assert result.stdout.strip().endswith("DISABLED")


def test_runtime_uses_the_latest_api():
    import comfy_api.latest

    assert node_runtime.ComfyAPISync is comfy_api.latest.ComfyAPISync


def _run_without(modules, code: str) -> subprocess.CompletedProcess:
    """Runs `code` with `modules` (a name or a list) unimportable: None in sys.modules makes their import fail."""
    blocked = "".join(f"sys.modules[{module!r}] = None\n" for module in ([modules] if isinstance(modules, str) else modules))
    script = f"import sys\n{blocked}{code}"
    env = {**os.environ, "PYTHONPATH": os.pathsep.join([str(COMFY_ROOT), str(PACKAGE.parent)])}
    return subprocess.run([sys.executable, "-c", script], capture_output=True, text=True, env=env, cwd=PACKAGE.parent, timeout=120)


def test_a_missing_core_symbol_disables_only_the_3d_features():
    code = """
import asyncio, logging
logging.basicConfig(level=logging.WARNING)
from comfyui_pano_suite import nodes
from comfyui_pano_suite.splat_render import read_splat_file
from comfy_api.latest import Types
extension = asyncio.run(nodes.comfy_entrypoint())
print(sorted(node.define_schema().node_id for node in asyncio.run(extension.get_node_list())))
try:
    read_splat_file(Types.File3D(__import__("io").BytesIO(b"ply"), file_format="splat"))
except RuntimeError as error:
    print("RAISED", error)
"""
    result = _run_without("comfy_extras.nodes_gaussian_splat", code)

    assert result.returncode == 0, result.stderr
    assert "'PanoramaStudio'" in result.stdout and "'PanoramaPreview'" in result.stdout
    assert "RAISED Panorama Stickers: the 3D features are disabled" in result.stdout
    assert "the 3D features are disabled" in result.stderr


def test_pinning_is_skipped_on_a_core_without_evict_active(monkeypatch):
    calls = []
    monkeypatch.setattr(core_adapters.comfy.model_management, "pin_memory", lambda tensor, evict_active=True: calls.append(evict_active) or True)

    assert core_adapters.pin_memory(object()) is True
    assert calls == [False]
    monkeypatch.setattr(core_adapters, "_PIN_KEEPS_ACTIVE", False)
    assert core_adapters.pin_memory(object()) is False
    assert calls == [False]


def test_sticker_state_hash_stays_the_editors_fnv1a():
    from comfyui_pano_suite.nodes import _hash_text

    def fnv1a(text):
        value = 2166136261
        for symbol in text:
            value = ((value ^ ord(symbol)) * 16777619) & 0xFFFFFFFF
        return str(value)

    for text in ("", '{"kind":"pano_sticker_state"}', "é\U0001f600"):
        assert _hash_text(text) == fnv1a(text)
