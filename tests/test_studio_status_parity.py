"""Panorama Studio's node surface shows the output size before a run (web_src/pano_studio_status.js `studioOutputSize`);
it must give what the run gives (`_studio_output_size`). Both read tests/fixtures/studio_output_size.json (ADR 0048)."""
import json
import subprocess
import textwrap
from pathlib import Path

import pytest

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.scene_state import load_scene_state

REPO_ROOT = Path(__file__).resolve().parent.parent
TABLE = json.loads((REPO_ROOT / "tests" / "fixtures" / "studio_output_size.json").read_text(encoding="utf-8"))
CASES = TABLE["cases"]

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState } from "./web_src/pano_scene_state.js";
    import { studioOutputSize, studioRunKey } from "./web_src/pano_studio_status.js";

    const { cases, keys } = JSON.parse(readFileSync(0, "utf8"));
    console.log(JSON.stringify({
      sizes: cases.map(({ state, megapixels, multiple }) => studioOutputSize(loadSceneState(state), megapixels, multiple)),
      keys: keys.map((args) => studioRunKey(...args)),
    }));
    """
)
# The widget values as the frontend sends them: a whole megapixels arrives as an int in the prompt JSON, and a
# float that is whole gives the same key.
KEYS = [
    ("", 2, 8, "360", "#00ff00"),
    ('{"version": 2}', 0.3, 12, "180", "#1A2B3C"),
    ('{"name": "パノラマ 🎥 é "}', 16, 128, "360", ""),
    ("{}", 1.5, 8, "180", "#000000"),
]


def _python(case):
    warnings = []
    width, height, reduced_from = nodes._studio_output_size(load_scene_state(case["state"]), case["megapixels"], case["multiple"], warnings)
    return width, height, reduced_from, warnings


@pytest.fixture(scope="module")
def js_results():
    proc = subprocess.run(["node", "--input-type=module", "-e", JS_SCRIPT], cwd=REPO_ROOT, input=json.dumps({"cases": CASES, "keys": KEYS}),
                          text=True, capture_output=True, check=True)
    return json.loads(proc.stdout)


def test_the_cap_is_the_fixtures():
    assert nodes.STUDIO_MAX_OUTPUT_SIDE == TABLE["max_side"] == 8192


@pytest.mark.parametrize("case", CASES, ids=[case["name"] for case in CASES])
def test_the_run_gives_the_fixtures_size(case):
    width, height, reduced_from, warnings = _python(case)

    assert (width, height) == (case["width"], case["height"])
    assert (None if reduced_from is None else list(reduced_from)) == case["reduced_from"]
    # Only a size brought under the cap is told.
    assert len(warnings) == (case["reduced_from"] is not None)


@pytest.mark.parametrize("index", range(len(CASES)), ids=[case["name"] for case in CASES])
def test_the_node_surface_size_matches_the_run(index, js_results):
    case = CASES[index]
    width, height, reduced_from, _warnings = _python(case)
    js = js_results["sizes"][index]

    assert (js["width"], js["height"]) == (width, height)
    assert js["reducedFrom"] == (None if reduced_from is None else list(reduced_from))


def test_the_run_key_matches(js_results):
    assert js_results["keys"] == [nodes._studio_run_key(*args) for args in KEYS]
    # A whole megapixels gives one key whether it came as an int or a float.
    assert nodes._studio_run_key("", 2.0, 8, "360", "#00ff00") == nodes._studio_run_key("", 2, 8, "360", "#00ff00")
