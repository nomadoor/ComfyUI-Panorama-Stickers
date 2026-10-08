"""ADR 0031: three.js and Spark follow the ComfyUI frontend's versions, and the Spark 2.1 workaround
(`settleUnpack`) goes once Spark is 2.2.0 or later."""

import json
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[1]
# Spark 2.2.0 uploads its sort order through this function, with both unpack flags off.
SPARK_FIX = "uploadU32DataTextureRows"


def _version(text):
    return tuple(int(part) for part in text.split("."))


def _own_spark():
    return _version(json.loads((ROOT / "package.json").read_text())["devDependencies"]["@sparkjsdev/spark"])


def test_the_spark_2_1_workaround_goes_with_spark_2_2():
    workaround = "function settleUnpack()" in (ROOT / "web_src" / "pano_three_view.js").read_text()
    if _own_spark() >= (2, 2, 0):
        assert not workaround, "Spark is 2.2.0 or later: remove settleUnpack and its docs (ADR 0031)"
    else:
        assert workaround, "Spark 2.1 needs settleUnpack (ADR 0031)"


def test_the_package_spark_follows_the_frontend_spark():
    frontend = pytest.importorskip("comfyui_frontend_package", reason="the ComfyUI frontend is not installed")
    bundles = list((Path(frontend.__file__).parent / "static" / "assets").glob("vendor-three-*.js"))
    if not bundles:
        pytest.skip("the ComfyUI frontend has no three.js bundle")
    frontend_fixed = any(SPARK_FIX in bundle.read_text(errors="ignore") for bundle in bundles)
    if frontend_fixed:
        assert _own_spark() >= (2, 2, 0), (
            "the ComfyUI frontend now ships Spark 2.2.0 or later: raise @sparkjsdev/spark to its version and "
            "remove settleUnpack (ADR 0031)"
        )
