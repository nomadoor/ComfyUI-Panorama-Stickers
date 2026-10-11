import json
import shutil
import subprocess
import textwrap
from pathlib import Path

import pytest

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state, load_sticker_state, rebase_scene_state

REPO_ROOT = Path(__file__).resolve().parent.parent
FIXTURES = REPO_ROOT / "tests" / "fixtures" / "scene_state"
TOLERANCE = 1e-4

STATE_CASES = ["v2_canonical", "v1_stickers", "v1_cutout", "v2_invalid_fields", "v2_interpolation", "v2_half_turns", "v2_no_camera", "v2_erp_camera", "v2_hidden", "v2_timeline_limits", "v2_upstream", "v2_background", "v2_animation"]
STICKER_STATE_CASES = ["sticker_state_v1", "sticker_state_v2"]
EVAL_FRAMES = {
    "v2_canonical": [10.0 - 1e-7, 50.0 - 1e-7] + [case["frame"] for case in json.loads((FIXTURES / "v2_canonical.eval.json").read_text(encoding="utf-8"))] + [0.0, 1.0, 23.999, 24.0 - 5e-7, 24.0 + 5e-7, 48.0, 119.0],
    "v1_stickers": [-1.0, 0.0, 0.5, 7.25, 100.0],
    "v1_cutout": [0.0, 3.5],
    "v2_invalid_fields": [0.0, 2.0, 2.0 - 5e-7, 11.0 - 5e-7, 11.0, 11.5, 30.0],
    # Every segment kind of every Lane type, key edges, the camera's zenith crossing at frame 50 approached from both
    # sides, the sky direction's pole keys (20, 50, 60), opposite segments (30-40, 50-60) and pole crossing at 75, and
    # opposite segments between keys that turn back (st_turn_back_*, frames 0-30).
    "v2_interpolation": [-2.0 + 0.37 * i for i in range(417)] + [12.0 - 1e-7, 12.0 + 1e-7, 49.9, 50.1, 75.0 + 1e-3, 90.0 - 1e-3, 19.99, 20.01, 59.99, 60.01, 74.99, 75.0, 75.01, 15.0, 25.0, 9.99, 10.01],
    # Exact half turns (their direction and the yaw tie at frame 10), a fast move that stops, and uneven spacing.
    "v2_half_turns": [0.25 * i for i in range(410)],
    "v2_no_camera": [0.0, 5.0, 6.0, 10.0, 20.0, 36.0, 44.9, 45.0],
    "v2_erp_camera": [0.0, 12.0, 18.0, 23.999, 24.0, 30.0, 36.0, 40.0],
    "v2_hidden": [0.0, 2.0, 3.0, 8.0],
    "v2_timeline_limits": [0.0, 1000.0, 1250.0, 1500.0, 2000.0, 1e7],
    "v2_upstream": [0.0, 5.0],
    "v2_background": [0.0, 12.0, 58.0, 59.0],
    "v2_animation": [0.0, 30.0],
}
REBASE_CASES = [[name, fps] for name in STATE_CASES for fps in (30000 / 1001, 12.0, 60.0)] + [["v2_timeline_limits", fps] for fps in (1e308, 300.0, 0.5)]
# States that probe the edges of the Sticker id counter and the upstream records.
PROBE_STATES = [
    {"version": 2, "stickers": [{"id": f"sticker_{digits}", "source": {"kind": "port"}}, {"id": "sticker_3", "source": {"kind": "file", "filename": "a.png"}}]}
    for digits in ("9" * 5000, "9" * 17, "0" * 16 + "5", "9" * 16, "9007199254740990", "9007199254740991")
] + [
    {"version": 2, "next_sticker_id": 1e300, "stickers": [{"id": "sticker_9007199254740991", "source": {"kind": "port"}}, {"id": "", "source": {"kind": "file", "filename": "a.png"}}]},
    {"version": 2, "upstream": [{"layer": "a", "fps": fps, "deleted": ["x"]} for fps in (0, "30", None, 1e300, 0.5)]},
] + [{"version": 2, "background": raw} for raw in (5, [], {"clip": 3}, {"clip": {"start": -3, "in": "x", "duration": 0}}, {"clip": {"start": 1e300, "in": 2.5, "duration": None}})]
BAD_STATES = ['{"version":3}', '{"version":"2"}', "{not json", "[1]"]

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState, loadStickerState, rebaseSceneState, sceneStateText } from "./web_src/pano_scene_state.js";
    import { evaluateSceneState } from "./web_src/pano_scene_eval.js";

    const input = JSON.parse(readFileSync(0, "utf8"));
    const read = (name) => readFileSync(`tests/fixtures/scene_state/${name}.json`, "utf8");
    const out = { states: {}, texts: {}, eval: {}, rebased: [], sticker_states: {}, errors: [] };
    for (const name of input.states) out.states[name] = loadSceneState(read(name));
    for (const name of input.states) out.texts[name] = sceneStateText(out.states[name]);
    for (const [name, frames] of Object.entries(input.eval_frames)) {
      out.eval[name] = frames.map((frame) => evaluateSceneState(out.states[name], frame));
    }
    for (const [name, fps] of input.rebase) out.rebased.push(rebaseSceneState(out.states[name], fps));
    out.probes = input.probes.map((raw) => loadSceneState(raw));
    for (const name of input.sticker_states) out.sticker_states[name] = loadStickerState(read(name));
    for (const text of input.bad_states) {
      try {
        loadSceneState(text);
        out.errors.push(null);
      } catch (error) {
        out.errors.push(String(error.message));
      }
    }
    console.log(JSON.stringify(out));
    """
)


def run_js():
    payload = {"states": STATE_CASES, "eval_frames": EVAL_FRAMES, "rebase": REBASE_CASES, "sticker_states": STICKER_STATE_CASES, "bad_states": BAD_STATES, "probes": PROBE_STATES}
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", JS_SCRIPT],
        cwd=REPO_ROOT,
        input=json.dumps(payload),
        text=True,
        capture_output=True,
        check=True,
    )
    return json.loads(proc.stdout)


def assert_parity(py, js, path="$"):
    if isinstance(py, dict):
        assert isinstance(js, dict) and list(js.keys()) == list(py.keys()), path
        for key in py:
            assert_parity(py[key], js[key], f"{path}.{key}")
    elif isinstance(py, list):
        assert isinstance(js, list) and len(js) == len(py), path
        for index, (a, b) in enumerate(zip(py, js)):
            assert_parity(a, b, f"{path}[{index}]")
    elif isinstance(py, bool) or py is None or isinstance(py, str):
        assert js == py, f"{path}: py={py!r} js={js!r}"
    else:
        assert isinstance(js, (int, float)) and not isinstance(js, bool), path
        assert abs(py - js) <= TOLERANCE, f"{path}: py={py} js={js}"


@pytest.fixture(scope="module")
def js_out():
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    return run_js()


def read(name):
    return (FIXTURES / f"{name}.json").read_text(encoding="utf-8")


@pytest.mark.parametrize("name", STATE_CASES)
def test_js_load_matches_python(js_out, name):
    assert_parity(load_scene_state(read(name)), js_out["states"][name])


@pytest.mark.parametrize("name", STATE_CASES)
def test_the_js_state_text_reads_back_as_the_same_state_in_python(js_out, name):
    assert load_scene_state(js_out["texts"][name]) == load_scene_state(read(name))


@pytest.mark.parametrize("name", STATE_CASES)
def test_js_evaluation_matches_python(js_out, name):
    state = load_scene_state(read(name))
    assert_parity([evaluate_scene_state(state, frame) for frame in EVAL_FRAMES[name]], js_out["eval"][name])


def test_js_probes_match_python(js_out):
    for raw, js in zip(PROBE_STATES, js_out["probes"], strict=True):
        assert_parity(load_scene_state(raw), js)


def test_js_rebase_matches_python(js_out):
    for (name, fps), js in zip(REBASE_CASES, js_out["rebased"]):
        assert_parity(rebase_scene_state(load_scene_state(read(name)), fps), js, f"{name}@{fps}")


@pytest.mark.parametrize("name", STICKER_STATE_CASES)
def test_js_sticker_state_matches_python(js_out, name):
    assert_parity(load_sticker_state(read(name)), js_out["sticker_states"][name])


def test_js_rejects_the_same_states(js_out):
    for text, message in zip(BAD_STATES, js_out["errors"]):
        with pytest.raises(ValueError):
            load_scene_state(text)
        assert message is not None and "state_json" in message


def test_3d_file_sources_are_told_by_the_extension_table():
    # The table both Python and JS read (pano_scene_state.test.mjs reads it on its own); it is not a state.
    from comfyui_pano_suite.core.scene_state import FILE_3D_EXTENSIONS, is_3d_file_source

    table = json.loads((FIXTURES / "file_3d_formats.json").read_text(encoding="utf-8"))

    assert list(FILE_3D_EXTENSIONS) == table["extensions"]
    for case in table["cases"]:
        source = {"kind": "file", "filename": case["filename"], "subfolder": "3d", "storage": "input"}
        assert is_3d_file_source(source) is case["is_3d"], case["filename"]
    # A data URL is an image, and so is the port.
    assert is_3d_file_source({"kind": "file", "data_url": "data:image/png;base64,AAAA"}) is False
    assert is_3d_file_source({"kind": "port"}) is False
