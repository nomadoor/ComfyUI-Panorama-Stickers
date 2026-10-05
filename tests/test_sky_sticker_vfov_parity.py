"""A port Sticker's vFOV follows its hFOV and its media's aspect: the run derives it with `vfov_from_hfov`
(core/render.py `derive_vfov`), and the editor and the node surface draw and hit test it with `skyStickerVfov`
(web_src/pano_editor_state.js). The two must give the same value."""
import json
import subprocess
import textwrap
from pathlib import Path

import pytest

from comfyui_pano_suite.core.math import vfov_from_hfov

REPO_ROOT = Path(__file__).resolve().parent.parent

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { skyStickerVfov } from "./web_src/pano_editor_state.js";

    const cases = JSON.parse(readFileSync(0, "utf8"));
    console.log(JSON.stringify(cases.map(([hfov, width, height]) =>
      skyStickerVfov({ source: { kind: "port" } }, { hFOV_deg: hfov, vFOV_deg: 1 }, { width, height }))));
    """
)

CASES = [
    (30.0, 200, 100),
    (0.1, 1920, 1080),
    (179.0, 1080, 1920),
    (179.0, 1, 10000),
    (0.1, 10000, 1),
    (90.0, 1, 10000),
    (60.0, 10000, 1),
    (45.0, 640, 640),
    (0.05, 100, 100),
    (200.0, 100, 50),
]


def test_sky_sticker_vfov_matches_the_run():
    proc = subprocess.run(["node", "--input-type=module", "-e", JS_SCRIPT], cwd=REPO_ROOT, input=json.dumps(CASES),
                          text=True, capture_output=True, check=True)
    js = json.loads(proc.stdout)

    assert js == pytest.approx([vfov_from_hfov(*case) for case in CASES], rel=1e-12, abs=1e-12)
