import json
import subprocess
import textwrap
import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


def run_node_json(script: str):
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        cwd=REPO_ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    if proc.returncode != 0:
        raise AssertionError(f"node failed\nSTDOUT:\n{proc.stdout}\nSTDERR:\n{proc.stderr}")
    return json.loads(proc.stdout.strip())


class TestPanoRenderObjectPass(unittest.TestCase):
    def test_background_descriptor_normalizes_type_and_coverage(self):
        script = textwrap.dedent(
            """
            import { normalizeBackgroundPassDescriptor } from "./web_src/pano_render_object_pass.js";

            const result = normalizeBackgroundPassDescriptor({
              type: "video",
              source: { id: "clip" },
              revision: 42,
              coverageDeg: 123,
              opacity: "0.25",
              visible: false,
            });
            console.log(JSON.stringify(result));
            """
        )
        result = run_node_json(script)
        self.assertEqual(result["type"], "video")
        self.assertEqual(result["revision"], "42")
        self.assertEqual(result["coverageDeg"], 360)
        self.assertEqual(result["opacity"], 0.25)
        self.assertFalse(result["visible"])

    def test_object_pass_filters_unknown_types_and_sorts(self):
        script = textwrap.dedent(
            """
            import { buildPanoramaObjectPassState } from "./web_src/pano_render_object_pass.js";

            const result = buildPanoramaObjectPassState({
              selectedId: "paint-1",
              objects: [
                { id: "z-last", type: "sticker", zIndex: 10, source: { id: "s" } },
                { id: "skip", type: "weird", zIndex: 0 },
                { id: "paint-1", type: "paint", zIndex: 2, source: { id: "p" } },
                { id: "mask-1", type: "mask", zIndex: 2, source: { id: "m" } },
              ],
            });

            console.log(JSON.stringify({
              selectedId: result.selectedId,
              ids: result.objects.map((item) => item.id),
              types: result.objects.map((item) => item.type),
            }));
            """
        )
        result = run_node_json(script)
        self.assertEqual(result["selectedId"], "paint-1")
        self.assertEqual(result["ids"], ["paint-1", "mask-1", "z-last"])
        self.assertEqual(result["types"], ["paint", "mask", "sticker"])

    def test_paint_mask_raster_are_not_coverage_aware(self):
        script = textwrap.dedent(
            """
            import { normalizeRenderObjectDescriptor } from "./web_src/pano_render_object_pass.js";

            const paint = normalizeRenderObjectDescriptor({ id: "p", type: "paint", coverageAware: true });
            const mask = normalizeRenderObjectDescriptor({ id: "m", type: "mask", coverageAware: true });
            const raster = normalizeRenderObjectDescriptor({ id: "r", type: "raster", coverageAware: true });
            const sticker = normalizeRenderObjectDescriptor({ id: "s", type: "sticker", coverageAware: true });

            console.log(JSON.stringify({
              paint: paint.coverageAware,
              mask: mask.coverageAware,
              raster: raster.coverageAware,
              sticker: sticker.coverageAware,
            }));
            """
        )
        result = run_node_json(script)
        self.assertFalse(result["paint"])
        self.assertFalse(result["mask"])
        self.assertFalse(result["raster"])
        self.assertTrue(result["sticker"])

    def test_supported_types_include_future_3d(self):
        script = textwrap.dedent(
            """
            import {
              listSupportedPanoramaBackgroundTypes,
              listSupportedPanoramaObjectTypes,
            } from "./web_src/pano_render_object_pass.js";

            console.log(JSON.stringify({
              background: listSupportedPanoramaBackgroundTypes(),
              objects: listSupportedPanoramaObjectTypes(),
            }));
            """
        )
        result = run_node_json(script)
        self.assertIn("3d", result["background"])
        self.assertIn("3d_object", result["objects"])
        self.assertIn("video", result["background"])


if __name__ == "__main__":
    unittest.main()
