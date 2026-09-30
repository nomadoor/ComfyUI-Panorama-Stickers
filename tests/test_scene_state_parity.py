import json
import shutil
import subprocess
import textwrap
from pathlib import Path

import pytest

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state, load_sticker_state

REPO_ROOT = Path(__file__).resolve().parent.parent
FIXTURES = REPO_ROOT / "tests" / "fixtures" / "scene_state"
TOLERANCE = 1e-4

STATE_CASES = ["v2_canonical", "v1_stickers", "v1_cutout", "v2_invalid_fields"]
STICKER_STATE_CASES = ["sticker_state_v1", "sticker_state_v2"]
EVAL_FRAMES = {
    "v2_canonical": [10.0 - 1e-7, 50.0 - 1e-7] + [case["frame"] for case in json.loads((FIXTURES / "v2_canonical.eval.json").read_text(encoding="utf-8"))] + [0.0, 1.0, 23.999, 24.0 - 5e-7, 24.0 + 5e-7, 48.0, 119.0],
    "v1_stickers": [-1.0, 0.0, 0.5, 7.25, 100.0],
    "v1_cutout": [0.0, 3.5],
    "v2_invalid_fields": [0.0, 2.0, 2.0 - 5e-7, 11.0 - 5e-7, 11.0, 11.5, 30.0],
}
BAD_STATES = ['{"version":3}', '{"version":"2"}', "{not json", "[1]"]

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState, loadStickerState } from "./web_src/pano_scene_state.js";
    import { evaluateSceneState } from "./web_src/pano_scene_eval.js";

    const input = JSON.parse(readFileSync(0, "utf8"));
    const read = (name) => readFileSync(`tests/fixtures/scene_state/${name}.json`, "utf8");
    const out = { states: {}, eval: {}, sticker_states: {}, errors: [] };
    for (const name of input.states) out.states[name] = loadSceneState(read(name));
    for (const [name, frames] of Object.entries(input.eval_frames)) {
      out.eval[name] = frames.map((frame) => evaluateSceneState(out.states[name], frame));
    }
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
    payload = {"states": STATE_CASES, "eval_frames": EVAL_FRAMES, "sticker_states": STICKER_STATE_CASES, "bad_states": BAD_STATES}
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
def test_js_evaluation_matches_python(js_out, name):
    state = load_scene_state(read(name))
    assert_parity([evaluate_scene_state(state, frame) for frame in EVAL_FRAMES[name]], js_out["eval"][name])


@pytest.mark.parametrize("name", STICKER_STATE_CASES)
def test_js_sticker_state_matches_python(js_out, name):
    assert_parity(load_sticker_state(read(name)), js_out["sticker_states"][name])


def test_js_rejects_the_same_states(js_out):
    for text, message in zip(BAD_STATES, js_out["errors"]):
        with pytest.raises(ValueError):
            load_scene_state(text)
        assert message is not None and "state_json" in message
