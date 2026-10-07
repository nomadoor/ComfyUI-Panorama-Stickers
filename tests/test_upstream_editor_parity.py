"""Panorama Studio's editor draws the upstream layers as the node does (ADR 0030): its working copies
(web_src/pano_upstream.js upstreamWorkingLayers) are the layers `_override_layers` gives, rebased to the editor's fps."""

import json
import math
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
      const ids = sceneState.stickers.map(({ id }) => id);
      sceneState.stickers.forEach((sticker) => {
        sticker.id = sticker.origin.id;
        delete sticker.origin;
      });
      return { key, origins, ids, state: sceneState };
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
        assert item["ids"] == [f"upstream:{item['key']}:{sticker['id']}" for sticker in layer.state["stickers"]]
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


EDIT_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { setStickerPose, setWorldStickerTransform } from "./web_src/pano_editor_state.js";
    import { loadSceneState, rebaseUpstreamRecord } from "./web_src/pano_scene_state.js";
    import { upstreamBaseline, upstreamEditedRecords, upstreamLayersOf, upstreamWorkingLayers } from "./web_src/pano_upstream.js";

    const fixture = JSON.parse(readFileSync("tests/fixtures/scene_inherit/editor_working.json", "utf8"));
    const own = loadSceneState(fixture.own);
    const layers = upstreamLayersOf(fixture.layers.map((state) => ({ state, ui: {} })));
    // With `rebased`, scene_b's record was written by an editor at that layer's 30 fps.
    if (process.argv[1] === "rebased") own.upstream[1] = rebaseUpstreamRecord(own.upstream[1], layers[3].sceneState);
    const fps = own.timeline.fps;
    const working = upstreamWorkingLayers(layers, own.upstream, fps);
    const baseline = upstreamBaseline(working);
    const sticker = (index, id) => working[index].sceneState.stickers.find((item) => item.origin.id === id);
    // scene_a (24 fps): a Lane its record does not hold yet, and Lock on its hidden world Sticker.
    setStickerPose(sticker(1, "sticker_1"), 10, { rot_deg: 12 });
    sticker(1, "sticker_3").locked = true;
    // scene_b (30 fps): a Keyframe more in the Lane its record holds, and its port Sticker hidden and sized.
    setWorldStickerTransform(sticker(3, "sticker_1"), 20, { position: [3, 1, -2] });
    sticker(3, "sticker_2").visible = false;
    setStickerPose(sticker(3, "sticker_2"), 0, { hFOV_deg: 50 });
    // The layers without a Scene id of their own here are only inherited: an edit of theirs is not written (the
    // editor makes none: they are locked), and is taken back before comparing.
    sticker(0, "sticker_1").visible = false;
    sticker(2, "sticker_1").visible = false;
    const records = upstreamEditedRecords(own.upstream, layers, working, baseline, fps);
    sticker(0, "sticker_1").visible = true;
    sticker(2, "sticker_1").visible = true;
    const states = working.map(({ sceneState }) => {
      sceneState.stickers.forEach((item) => {
        item.id = item.origin.id;
        delete item.origin;
      });
      return sceneState;
    });
    console.log(JSON.stringify({ records, states }));
    """
)


@pytest.mark.parametrize("variant", ["own", "rebased"])
def test_the_edits_the_editor_writes_back_draw_in_the_node_as_the_editor_shows_them(variant):
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    case = json.loads(FIXTURE.read_text(encoding="utf-8"))
    edited = json.loads(subprocess.run(
        ["node", "--input-type=module", "-e", EDIT_SCRIPT, variant], cwd=REPO_ROOT, text=True, capture_output=True, check=True,
    ).stdout)
    records = edited["records"]
    assert [record["layer"] for record in records] == ["scene_a", "scene_b"]
    assert all(record["fps"] == 24 for record in records)
    assert "origin" not in json.dumps(records) and "upstream:" not in json.dumps(records)
    # Only what was edited is added to the records: scene_a's sticker_1 gets its roll, the rest stays as it was.
    scene_a = {item["id"]: item for item in records[0]["stickers"]}
    assert sorted(scene_a["sticker_1"]) == ["clip", "crop", "direction", "id", "placement", "roll", "z_index"]
    assert scene_a["sticker_3"] == {"id": "sticker_3", "placement": "world", "visible": False, "locked": True}
    scene_b = {item["id"]: item for item in records[1]["stickers"]}
    assert sorted(scene_b["sticker_2"]) == ["id", "placement", "size", "visible", "z_index"]
    # The node draws the edited state's layers as the editor shows them.
    _, applied = node_layers({**case, "own": {**case["own"], "upstream": records}})
    for layer, state in zip(applied, edited["states"], strict=True):
        expected = layer.state if layer.state["timeline"]["fps"] == 24 else rebase_scene_state(layer.state, 24)
        assert_parity(expected, state)


TIMELINE_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState } from "./web_src/pano_scene_state.js";
    import { keyAllLanes, moveClip, moveKeyframes, trimClipEnd } from "./web_src/pano_timeline.js";
    import { upstreamBaseline, upstreamEditedRecords, upstreamLayersOf, upstreamOverriddenClips, upstreamWorkingLayers } from "./web_src/pano_upstream.js";

    const fixture = JSON.parse(readFileSync("tests/fixtures/scene_inherit/editor_working.json", "utf8"));
    const own = loadSceneState(fixture.own);
    const layers = upstreamLayersOf(fixture.layers.map((state) => ({ state, ui: {} })));
    const fps = own.timeline.fps;
    const working = upstreamWorkingLayers(layers, own.upstream, fps);
    const baseline = upstreamBaseline(working);
    const sticker = (index, id) => working[index].sceneState.stickers.find((item) => item.origin.id === id);
    // The Timeline's operations on the rows, as timeline_actions.js does them.
    if (process.argv[1] === "keyframes") {
      // scene_a's sticker_1: its last direction Keyframe moved 3 frames later (a Lane its record holds).
      const first = sticker(1, "sticker_1");
      moveKeyframes(first, ["direction"], [first.direction.keyframes.at(-1).frame], 3, -(first.clip.start - first.clip.in));
      // scene_b (30 fps) world sticker_1: every Lane keyed at frame 20 of the editor's Timeline (the row's dot).
      const plane = sticker(3, "sticker_1");
      keyAllLanes(plane, 20 - (plane.clip.start - plane.clip.in));
    } else {
      // scene_a: sticker_1's Clip range moved, the `scene`'s end trimmed to 60 and its painting shown again.
      moveClip(sticker(1, "sticker_1").clip, 4);
      trimClipEnd(working[1].sceneState.scene.clip, 60, 1000);
      working[1].sceneState.painting_visible = true;
      // scene_b (30 fps): the port Sticker's Clip range moved and given an end.
      const port = sticker(3, "sticker_2");
      moveClip(port.clip, 6);
      trimClipEnd(port.clip, 50, 1000);
    }
    const records = upstreamEditedRecords(own.upstream, layers, working, baseline, fps);
    // The ends that widen the Timeline, once written back.
    const ends = upstreamOverriddenClips(working, records, upstreamBaseline(working))
      .filter(({ clip }) => clip.duration !== null).map(({ clip }) => clip.start + clip.duration);
    const states = working.map(({ sceneState }) => {
      sceneState.stickers.forEach((item) => {
        item.id = item.origin.id;
        delete item.origin;
      });
      return sceneState;
    });
    console.log(JSON.stringify({ records, states, ends }));
    """
)


@pytest.mark.parametrize("edit", ["keyframes", "clips"])
def test_the_timeline_edits_of_upstream_rows_draw_in_the_node_as_the_editor_shows_them(edit):
    """A Keyframe edit and a Clip range edit made on the upstream rows of the Timeline (ADR 0030 T9) are written as
    records that `_override_layers` applies to the same layers the editor shows, and the ends it widens the output
    to are those the editor's Timeline reaches."""
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    case = json.loads(FIXTURE.read_text(encoding="utf-8"))
    edited = json.loads(subprocess.run(
        ["node", "--input-type=module", "-e", TIMELINE_SCRIPT, edit], cwd=REPO_ROOT, text=True, capture_output=True, check=True,
    ).stdout)
    records = edited["records"]
    assert [record["layer"] for record in records] == ["scene_a", "scene_b"]
    scene_a = {item["id"]: item for item in records[0]["stickers"]}
    scene_b = {item["id"]: item for item in records[1]["stickers"]}
    if edit == "keyframes":
        assert [key["frame"] for key in scene_a["sticker_1"]["direction"]["keyframes"]] == [7]
        assert sorted(scene_b["sticker_1"]) == ["clip", "id", "opacity", "placement", "position", "rotation", "scale"]
        assert records[0]["scene"] == {"visible": False}
    else:
        assert scene_a["sticker_1"]["clip"] == {"start": 10, "in": 2, "duration": 30}
        assert records[0]["scene"] == {"visible": False, "clip": {"start": 0, "in": 0, "duration": 60}}
        assert records[0]["painting_visible"] is True
        assert sorted(scene_b["sticker_2"]) == ["clip", "id", "placement", "z_index"]
    own = load_scene_state({**case["own"], "upstream": records})
    _, applied = node_layers({**case, "own": own})
    for layer, state in zip(applied, edited["states"], strict=True):
        expected = layer.state if layer.state["timeline"]["fps"] == 24 else rebase_scene_state(layer.state, 24)
        assert_parity(expected, state)
    # The node widens its output to the ends of the Clip ranges the records set, as the editor's Timeline does.
    layers = [SceneLayer(load_scene_state(raw), SceneSources({}, empty_painting_state()), None, None, {}) for raw in case["layers"]]
    upstream = PanoSceneValue(tuple(layers), None, 360, (0.0, 0.0, 0.0), Fraction(24), (), Fraction(0), (), {}, {})
    _, ends = _override_layers(upstream, own["upstream"], [])
    assert sorted(math.floor(end * 24 / fps + 0.5) for end, fps in ends) == sorted(edited["ends"])



RECORDS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { createUpstream } from "./web_src/editor/upstream.js";
    import { loadSceneState } from "./web_src/pano_scene_state.js";

    globalThis.Image = class {};
    const fixture = JSON.parse(readFileSync("tests/fixtures/scene_inherit/editor_working.json", "utf8"));
    const state = loadSceneState(fixture.own);
    const ui = { pano_upstream_layers: fixture.layers.map((layer) => ({ state: layer, ui: {} })) };
    const upstream = createUpstream({
      comfyMedia: { uiValue: (node, key) => ui[key] ?? null, uiList: (node, key) => ui[key] ?? [] },
      editor: { frame: 0 },
      mediaAssetSource: () => "",
      mediaSource: () => "",
      node: { id: 1, inputs: [{ name: "scene" }], graph: null },
      state,
      studio: true,
    });
    upstream.connect({ getDesiredPaintTargetDescriptor: () => ({}), getMediaRevisionToken: () => "", playback: {}, requestDraw() {} });
    const sticker = (id) => upstream.upstreamStickers().find((item) => item.id === id);
    // An element with overrides, the port Sticker of a layer at another fps whose record is at the editor's, and an
    // element edited but not yet written back, deleted as Delete does, then written back as an Undo step is.
    sticker("upstream:scene_b:sticker_1").visible = false;
    if (process.argv[1] === "revert-layer") {
      // scene_a's `scene` and painting follow upstream again, as its Timeline header's Revert does.
      upstream.revertUpstreamLayer("scene_a");
    } else {
      upstream.deleteUpstreamStickers(["upstream:scene_a:sticker_1", "upstream:scene_b:sticker_2", "upstream:scene_b:sticker_1"].map(sticker));
    }
    upstream.syncUpstreamEdits();
    upstream.pruneUpstreamRecords();
    const states = upstream.upstreamEntries().map(({ working }) => {
      working.sceneState.stickers.forEach((item) => {
        item.id = item.origin.id;
        delete item.origin;
      });
      return working.sceneState;
    });
    console.log(JSON.stringify({ records: state.upstream, states }));
    """
)


def test_deleted_upstream_elements_are_drawn_by_neither_the_editor_nor_the_node():
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    case = json.loads(FIXTURE.read_text(encoding="utf-8"))
    deleted = json.loads(subprocess.run(
        ["node", "--input-type=module", "-e", RECORDS_SCRIPT], cwd=REPO_ROOT, text=True, capture_output=True, check=True,
    ).stdout)
    records = {record["layer"]: record for record in deleted["records"]}
    # Tombstones are ids only; the deleted elements' overrides are gone, the others' stay.
    assert records["scene_a"]["deleted"] == ["sticker_2", "sticker_1"]
    assert [item["id"] for item in records["scene_a"]["stickers"]] == ["sticker_3"]
    assert records["scene_b"]["deleted"] == ["sticker_3", "sticker_2", "sticker_1"]
    assert records["scene_b"]["stickers"] == []
    _, applied = node_layers({**case, "own": {**case["own"], "upstream": deleted["records"]}})
    for layer, state in zip(applied, deleted["states"], strict=True):
        expected = layer.state if layer.state["timeline"]["fps"] == 24 else rebase_scene_state(layer.state, 24)
        assert_parity(expected, state)
    # The node draws none of them: they have no source.
    assert sorted(applied[1].sources.stickers) == ["sticker_3"]
    assert sorted(applied[3].sources.stickers) == []
    # The other layer with the id scene_b (not the nearest downstream) keeps its element.
    assert sorted(applied[0].sources.stickers) == ["sticker_1"]


def test_a_reverted_layer_draws_its_upstream_scene_and_paint_in_the_editor_and_the_node():
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    case = json.loads(FIXTURE.read_text(encoding="utf-8"))
    reverted = json.loads(subprocess.run(
        ["node", "--input-type=module", "-e", RECORDS_SCRIPT, "revert-layer"], cwd=REPO_ROOT, text=True, capture_output=True, check=True,
    ).stdout)
    records = {record["layer"]: record for record in reverted["records"]}
    # Only the layer's own overrides go; its elements' overrides and deleted ones stay.
    assert records["scene_a"]["scene"] == {} and "painting_visible" not in records["scene_a"]
    assert records["scene_a"]["deleted"] == ["sticker_2"]
    assert [item["id"] for item in records["scene_a"]["stickers"]] == ["sticker_1", "sticker_3"]
    _, applied = node_layers({**case, "own": {**case["own"], "upstream": reverted["records"]}})
    for layer, state in zip(applied, reverted["states"], strict=True):
        expected = layer.state if layer.state["timeline"]["fps"] == 24 else rebase_scene_state(layer.state, 24)
        assert_parity(expected, state)
    assert applied[1].state["scene"]["visible"] is True
    assert applied[1].state["painting_visible"] is True
