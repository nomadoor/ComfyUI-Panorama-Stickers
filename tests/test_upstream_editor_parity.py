"""Panorama Studio's editor draws the upstream layers as the node does (ADR 0030): its working copies
(web_src/pano_upstream.js upstreamWorkingLayers) are the layers `_override_layers` gives, rebased to the editor's fps."""

import json
import shutil
import subprocess
import textwrap
from fractions import Fraction
from pathlib import Path

import pytest


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite.core.paint_state import empty_painting_state
from comfyui_pano_suite.core.render import SceneSources, StickerSource
from comfyui_pano_suite.core.scene_state import load_scene_state, rebase_scene_state
from comfyui_pano_suite.nodes import PanoSceneValue, SceneLayer, _override_layers
from test_scene_state_parity import assert_parity

REPO_ROOT = Path(__file__).resolve().parent.parent
FIXTURE = REPO_ROOT / "tests" / "fixtures" / "scene_inherit" / "editor_working.json"

EDITOR_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState } from "./web_src/pano_scene_state.js";
    import { upstreamLayersOf, upstreamWorkingLayers } from "./web_src/pano_upstream.js";

    const fixture = JSON.parse(readFileSync("tests/fixtures/scene_inherit/editor_working.json", "utf8"));
    const own = loadSceneState(fixture.own);
    const layers = upstreamLayersOf(fixture.layers.map((state) => ({ state, ui: {} })));
    const working = upstreamWorkingLayers(layers, own.upstream, own.timeline.fps).map(({ key, sceneState }) => {
      const origins = sceneState.stickers.map(({ origin }) => origin);
      sceneState.stickers.forEach((sticker) => delete sticker.origin);
      return { key, origins, state: sceneState };
    });
    console.log(JSON.stringify(working));
    """
)


def node_layers(case):
    """The upstream layers of `case` as the node draws them with the own state's overrides (`_override_layers`)."""
    own = load_scene_state(case["own"])
    layers = []
    for raw in case["layers"]:
        state = load_scene_state(raw)
        sources = {item["id"]: StickerSource(None, item["crop"], item.get("z_index", 0)) for item in state["stickers"]}
        layers.append(SceneLayer(state, SceneSources(sources, empty_painting_state()), None, None, {}))
    upstream = PanoSceneValue(tuple(layers), None, 360, (0.0, 0.0, 0.0), Fraction(24), (), Fraction(0), (), {}, {})
    applied, _ = _override_layers(upstream, own["upstream"], [])
    return own, applied


def test_the_editor_working_copies_are_the_layers_the_node_draws():
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    case = json.loads(FIXTURE.read_text(encoding="utf-8"))
    own, applied = node_layers(case)
    working = json.loads(subprocess.run(
        ["node", "--input-type=module", "-e", EDITOR_SCRIPT], cwd=REPO_ROOT, text=True, capture_output=True, check=True,
    ).stdout)
    fps = own["timeline"]["fps"]
    assert [item["key"] for item in working] == ["#0", "scene_a", "#2", "scene_b"]
    for layer, item in zip(applied, working, strict=True):
        # The editor works in its own frames: a layer at another fps is the node's layer rebased.
        expected = layer.state if layer.state["timeline"]["fps"] == fps else rebase_scene_state(layer.state, fps)
        assert_parity(expected, item["state"])
        assert item["origins"] == [{"layer": item["key"], "id": sticker["id"]} for sticker in layer.state["stickers"]]
        # What the node draws `crop` and `z_index` from is what the working copy holds.
        sources = layer.sources.stickers
        assert sorted(sources) == sorted(sticker["id"] for sticker in item["state"]["stickers"])
        for sticker in item["state"]["stickers"]:
            assert (sources[sticker["id"]].crop, sources[sticker["id"]].z_index) == (sticker["crop"], sticker.get("z_index", 0))
    # The overrides took effect: deleted, hidden, moved, z_index, crop, Clip range, painting and `scene`.
    scene_a = working[1]["state"]
    assert [sticker["id"] for sticker in scene_a["stickers"]] == ["sticker_1", "sticker_3"]
    assert scene_a["stickers"][0]["z_index"] == 5
    assert scene_a["stickers"][0]["direction"]["value"] == {"yaw_deg": 45.0, "pitch_deg": 10.0}
    assert scene_a["stickers"][1]["visible"] is False
    assert scene_a["painting_visible"] is False
    assert scene_a["scene"]["visible"] is False
    # Only the nearest downstream of two layers with one id takes the record.
    assert working[0]["state"]["stickers"][0]["placement"] == "sky"
    assert [sticker["id"] for sticker in working[3]["state"]["stickers"]] == ["sticker_1", "sticker_2"]
    assert working[3]["state"]["timeline"]["fps"] == 24
