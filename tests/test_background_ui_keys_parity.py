"""The `ui` keys of a background that Python writes are the ones web_src/pano_background_choice.js reads
(BACKGROUND_UI_KEYS, docs/timeline-ui.md "どの背景を出すか"). Both check against tests/fixtures/background_ui_keys.json."""
import json
from pathlib import Path
from types import SimpleNamespace

from comfyui_pano_suite import nodes
from comfyui_pano_suite.node_runtime import PREVIEW_UI_KEYS

TABLE = json.loads((Path(__file__).resolve().parent / "fixtures" / "background_ui_keys.json").read_text(encoding="utf-8"))


def test_own_background_keys_are_the_preview_contracts():
    # Panorama Studio's own background (`stickers_bg`, nodes.py _bg_media_ui) and the Preview's VIDEO (`default`).
    assert {name: PREVIEW_UI_KEYS["stickers_bg"][name] for name in ("image", "video", "meta")} == TABLE["studio"]
    assert {name: PREVIEW_UI_KEYS["default"][name] for name in ("image", "video", "meta")} == TABLE["preview"]


def test_upstream_background_keys_are_the_own_ones_under_pano_upstream():
    upstream = SimpleNamespace(layers=(), frames=(0,), coverage=360, bg_color=(0.0, 1.0, 0.0), bg_clip=({"start": 0, "in": 0, "duration": None}, 24.0))
    bg_ui = {TABLE["studio"][name]: [name] for name in ("image", "video", "meta")}
    ui = nodes._upstream_ui(upstream, bg_ui)
    for name in ("image", "video", "meta"):
        assert ui[TABLE["upstream"][name]] == [name]
    for name in ("coverage", "color", "clip"):
        assert TABLE["upstream"][name] in ui
