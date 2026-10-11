"""Placing a new 3D Sticker so that its content fits the view: Python and JS read the same cases
(docs/editor-interaction.md, "3D の Sticker を収めて置く")."""
import json
import math
import shutil
import subprocess
import textwrap
from pathlib import Path

import pytest

from comfyui_pano_suite.core.world import FIT_3D_MIN_DISTANCE, FIT_MARGIN, NEW_WORLD_STICKER_DISTANCE, box_sphere, fit_3d_position, fit_distance

REPO_ROOT = Path(__file__).resolve().parent.parent
FIXTURE = json.loads((REPO_ROOT / "tests" / "fixtures" / "place_3d" / "fit.json").read_text(encoding="utf-8"))
TOLERANCE = 1e-9


def _case_ids():
    return [case["name"] for case in FIXTURE["cases"]]


@pytest.mark.parametrize("case", FIXTURE["cases"], ids=_case_ids())
def test_python_places_each_case(case):
    from comfyui_pano_suite.nodes import PORT_3D_FIT_FOV_DEG

    position = fit_3d_position(case["eye"], case["dir"], case["center"], case["radius"], case["rotation"], case["fov_deg"], case["min_distance"], PORT_3D_FIT_FOV_DEG)

    assert position == pytest.approx(case["position"], abs=TOLERANCE)
    if case["fit_distance"] is not None:
        assert fit_distance(case["radius"], case["fov_deg"] if case["fov_deg"] and case["fov_deg"] > 0 else FIXTURE["node_fov_deg"]) == pytest.approx(case["fit_distance"], abs=TOLERANCE)


def test_the_constants_are_the_fixtures():
    from comfyui_pano_suite.nodes import PORT_3D_FIT_FOV_DEG

    assert (FIT_MARGIN, FIT_3D_MIN_DISTANCE, NEW_WORLD_STICKER_DISTANCE) == (FIXTURE["fit_margin"], FIXTURE["fit_3d_min_distance"], FIXTURE["new_world_sticker_distance"])
    # The editor's default horizontal 100 degrees on a 16:9 view, vertically.
    assert PORT_3D_FIT_FOV_DEG == pytest.approx(math.degrees(2.0 * math.atan(math.tan(math.radians(50.0)) * 9.0 / 16.0)), abs=1e-12)
    assert PORT_3D_FIT_FOV_DEG == pytest.approx(FIXTURE["node_fov_deg"], abs=1e-12)
    front = FIXTURE["cases"][0]
    assert (front["eye"], front["dir"], front["fov_deg"], front["min_distance"]) == ([0.0, 0.0, 0.0], [0.0, 0.0, -1.0], PORT_3D_FIT_FOV_DEG, FIT_3D_MIN_DISTANCE)


@pytest.mark.parametrize("box, sphere", [
    ({"min": [-1.0, 0.0, 2.0], "max": [1.0, 2.0, 4.0]}, ([0.0, 1.0, 3.0], math.sqrt(3.0))),
    ({"min": [1.0, 1.0, 1.0], "max": [1.0, 1.0, 1.0]}, ([1.0, 1.0, 1.0], 0.0)),
    (None, None),
    ({"min": [0.0, 0.0], "max": [1.0, 1.0, 1.0]}, None),
    ({"min": [0.0, 0.0, 0.0], "max": [1.0, "1", 1.0]}, None),
    ({"min": [0.0, 0.0, math.inf], "max": [1.0, 1.0, 1.0]}, None),
    ({"min": [0.0, 2.0, 0.0], "max": [1.0, 1.0, 1.0]}, None),
    ({"max": [1.0, 1.0, 1.0]}, None),
])
def test_a_box_gives_the_sphere_of_its_corners_or_none(box, sphere):
    result = box_sphere(box)

    if sphere is None:
        assert result is None
    else:
        assert result[0] == pytest.approx(sphere[0]) and result[1] == pytest.approx(sphere[1])


JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { fit3dPosition, fitDistance } from "./web_src/pano_space.js";

    const fixture = JSON.parse(readFileSync("tests/fixtures/place_3d/fit.json", "utf8"));
    const out = fixture.cases.map((c) => ({
      position: fit3dPosition(c.eye, c.dir, c.center === null ? null : { center: c.center, radius: c.radius }, c.rotation, c.fov_deg, c.min_distance),
      fit_distance: c.fit_distance === null ? null : fitDistance(c.radius, c.fov_deg),
    }));
    process.stdout.write(JSON.stringify(out));
    """
)


@pytest.mark.skipif(shutil.which("node") is None, reason="Node.js is required for the JS half")
def test_js_places_each_case_as_python_does():
    result = subprocess.run(["node", "--input-type=module", "-e", JS_SCRIPT], cwd=REPO_ROOT, capture_output=True, text=True)
    assert result.returncode == 0, result.stderr

    for case, js in zip(FIXTURE["cases"], json.loads(result.stdout)):
        assert js["position"] == pytest.approx(case["position"], abs=1e-9), case["name"]
        if case["fit_distance"] is not None:
            assert js["fit_distance"] == pytest.approx(case["fit_distance"], abs=1e-9), case["name"]
