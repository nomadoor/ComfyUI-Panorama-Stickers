"""Panorama Studio's node surface shows the output size before a run (web_src/pano_studio_status.js); it must give
what the run gives (`_studio_output_size` over the frames `_decide_timeline` decides) for a state without media."""
import json
import subprocess
import textwrap
from pathlib import Path

import pytest
import torch

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.scene_state import load_scene_state

REPO_ROOT = Path(__file__).resolve().parent.parent
LINEAR = [0.0, 0.0, 1.0, 1.0]

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState } from "./web_src/pano_scene_state.js";
    import { studioOutputSize, studioRunKey, studioTimelineFrames } from "./web_src/pano_studio_status.js";

    const { cases, keys } = JSON.parse(readFileSync(0, "utf8"));
    console.log(JSON.stringify({
      sizes: cases.map(([state, outputSize, coverage, bgWidth]) => {
        const loaded = loadSceneState(state);
        const frames = studioTimelineFrames(loaded);
        return { frames, ...studioOutputSize(loaded, frames, outputSize, coverage, bgWidth) };
      }),
      keys: keys.map((args) => studioRunKey(...args)),
    }));
    """
)


def _camera(projection="perspective", aspect=1.0, fov=90.0, fov_keyframes=(), visible=True, **lanes):
    return {"projection": projection, "aspect": aspect, "visible": visible, "fov": {"value": fov, "keyframes": list(fov_keyframes)}, **lanes}


def _keys(*pairs, easing=LINEAR):
    return [{"frame": frame, "value": value, "easing": easing} for frame, value in pairs]


CASES = [
    ({}, "1024", 360, None),
    ({}, "1536", 360, None),
    ({}, "4096", 360, None),
    ({}, "2048", 180, None),
    ({}, "auto", 360, 600),
    ({}, "auto", 360, 601),
    ({}, "auto", 180, 512),
    ({}, "auto", 180, 333),
    ({}, "auto", 360, None),
    ({}, "auto", 180, None),
    ({"camera": _camera("erp", fov=150.0)}, "2560", 360, None),
    ({"camera": _camera("erp")}, "auto", 180, 256),
    ({"camera": _camera(fov=90.0)}, "1024", 360, None),
    ({"camera": _camera(fov=90.0, visible=False)}, "1024", 360, None),
    ({"camera": _camera(fov=90.0, aspect=16 / 9)}, "2048", 360, None),
    ({"camera": _camera(fov=60.0, aspect=0.5)}, "auto", 180, 512),
    ({"camera": _camera(fov=37.3, aspect=2.39)}, "3072", 360, None),
    ({"camera": _camera(fov=90.0)}, "auto", 360, None),
    ({"camera": _camera(fov=150.0, aspect=4.0)}, "4096", 360, None),
    ({"camera": _camera(fov=170.0, aspect=0.25)}, "4096", 360, None),
    ({"camera": _camera(fov=1.0, aspect=100.0)}, "1024", 360, None),
    # hFOV_max over the Timeline: the Keyframes, a length that cuts them, a Clip end that sets the length, easings.
    ({"camera": _camera(fov_keyframes=_keys((0, 60.0), (4, 120.0)))}, "1024", 360, None),
    ({"camera": _camera(fov_keyframes=_keys((0, 60.0), (4, 120.0))), "timeline": {"fps": 24, "length": 3}}, "1024", 360, None),
    ({"camera": _camera(fov_keyframes=_keys((0, 60.0), (4, 120.0), easing="auto"))}, "2048", 360, None),
    ({"camera": _camera(fov_keyframes=_keys((0, 120.0), (6, 30.0), (9, 100.0), easing="auto"))}, "2048", 360, None),
    ({"camera": _camera(fov_keyframes=_keys((0, 60.0), (5, 150.0), easing="hold"))}, "2048", 360, None),
    ({"camera": _camera(fov_keyframes=_keys((0, 60.0), (8, 150.0))), "scene": {"clip": {"start": 0, "duration": 3}}}, "2048", 360, None),
    ({"camera": _camera(fov_keyframes=_keys((0, 60.0), (8, 150.0))), "timeline": {"fps": 30000 / 1001, "length": 5}}, "2048", 360, None),
    # Only a rotation or position Keyframe sets the length; the fov holds after its last Keyframe.
    ({"camera": _camera(fov_keyframes=_keys((0, 60.0), (2, 100.0)), rotation={"value": {}, "keyframes": _keys((7, {"yaw_deg": 90.0}))})},
     "2048", 360, None),
    ({"camera": _camera(fov=70.0, position={"value": [0, 0, 0], "keyframes": _keys((3, [0.0, 0.0, -1.0]), (11, [1.0, 0.0, 0.0]))})},
     "2048", 360, None),
]
KEYS = [("", "2048", "360", "#00ff00"), ('{"version": 2}', "1024", "180", "#1A2B3C"), ('{"name": "パノラマ 🎥 é\u2028"}', "auto", "360", "")]


def _python(state, output_size, coverage, bg_width):
    loaded = load_scene_state(json.dumps({"version": 2, **state}))
    _rate, _times, _time_base, frames = nodes._decide_timeline(loaded, None, None, camera=True)
    bg = None if bg_width is None else torch.zeros((1, max(1, bg_width // 2), bg_width, 3))
    warnings = []
    width, height, reduced_from = nodes._studio_output_size(loaded, frames, output_size, coverage, bg, warnings)
    return [layers[-1][0] for _bg_index, layers in frames], (width, height), reduced_from, warnings


def _js(cases):
    payload = {"cases": [[{"version": 2, **state}, output_size, coverage, bg_width] for state, output_size, coverage, bg_width in cases],
               "keys": KEYS}
    proc = subprocess.run(["node", "--input-type=module", "-e", JS_SCRIPT], cwd=REPO_ROOT, input=json.dumps(payload),
                          text=True, capture_output=True, check=True)
    return json.loads(proc.stdout)


@pytest.fixture(scope="module")
def js_results():
    return _js(CASES)


def test_a_rotation_or_position_keyframe_sets_the_length(js_results):
    assert [len(js_results["sizes"][index]["frames"]) for index in (-2, -1)] == [8, 12]


@pytest.mark.parametrize("index", range(len(CASES)))
def test_the_node_surface_size_matches_the_run(index, js_results):
    state, output_size, coverage, bg_width = CASES[index]
    frames, size, reduced_from, warnings = _python(state, output_size, coverage, bg_width)
    js = js_results["sizes"][index]

    assert js["frames"] == pytest.approx(frames, abs=1e-6)
    assert (js["width"], js["height"]) == size
    assert js["reducedFrom"] == (None if reduced_from is None else list(reduced_from))
    assert js["defaulted"] == any("not connected" in warning for warning in warnings)


def test_the_run_key_matches(js_results):
    assert js_results["keys"] == [nodes._studio_run_key(*args) for args in KEYS]
