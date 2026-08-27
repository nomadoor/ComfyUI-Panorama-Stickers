import json
import subprocess
import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoSceneCameraContract(unittest.TestCase):
    def test_shared_scene_camera_files_exist(self):
        camera_js = (REPO_ROOT / "web_src" / "pano_scene_camera.js").read_text(encoding="utf-8")
        dom_js = (REPO_ROOT / "web_src" / "pano_scene_camera_dom.js").read_text(encoding="utf-8")
        export_js = (REPO_ROOT / "web_src" / "pano_scene_camera_export.js").read_text(encoding="utf-8")
        cutout_js = (REPO_ROOT / "web_src" / "pano_cutout_camera.js").read_text(encoding="utf-8")

        self.assertIn("export function createPanoramaSceneCamera(options = {})", camera_js)
        self.assertIn("export function normalizePanoramaSceneDescriptor(scene = {})", camera_js)
        self.assertIn("export function mountPanoramaSceneCamera(camera, container, options = {})", dom_js)
        self.assertIn("export async function exportPanoramaSceneCameraFrame(camera, options = {})", export_js)
        self.assertIn("export function createCutoutCamera(options = {})", cutout_js)

    def test_cutout_camera_is_thin_adapter_over_shared_camera(self):
        cutout_js = (REPO_ROOT / "web_src" / "pano_cutout_camera.js").read_text(encoding="utf-8")
        self.assertIn('from "./pano_scene_camera.js"', cutout_js)
        self.assertIn('from "./pano_scene_camera_export.js"', cutout_js)
        self.assertIn('from "./pano_scene_camera_dom.js"', cutout_js)
        self.assertIn("renderShot(shot, output = {})", cutout_js)
        self.assertIn("buildCutoutViewParamsFromShot(shot)", cutout_js)

    def test_scene_camera_accepts_render_descriptor_shape(self):
        script = """
          import { normalizePanoramaSceneDescriptor } from './web_src/pano_scene_camera.js';
          const descriptor = normalizePanoramaSceneDescriptor({
            stateRevision: 'rev-1',
            background: { coverageDeg: 180, revision: 'bg-1' },
            objectPass: {
              selectedId: 'sticker-1',
              hoveredId: 'sticker-2',
              objects: [{
                id: 'sticker-1',
                type: 'sticker',
                opacity: 0.5,
                zIndex: 3,
                transform: { yawDeg: 10, pitchDeg: -5, hFovDeg: 200, vFovDeg: 20 },
                params: { assetId: 'asset-1' },
              }],
            },
            overlay: { showMaskTint: true },
          });
          console.log(JSON.stringify(descriptor));
        """
        result = subprocess.run(
            ["node", "--input-type=module", "-e", script],
            cwd=REPO_ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
        descriptor = json.loads(result.stdout)

        self.assertEqual(descriptor["stateRevision"], "rev-1")
        self.assertEqual(descriptor["background"]["coverageDeg"], 180)
        self.assertEqual(descriptor["background"]["revision"], "bg-1")
        self.assertEqual(descriptor["objectPass"]["selectedId"], "sticker-1")
        self.assertEqual(descriptor["objectPass"]["hoveredId"], "sticker-2")
        self.assertEqual(len(descriptor["objectPass"]["objects"]), 1)
        sticker = descriptor["objectPass"]["objects"][0]
        self.assertEqual(sticker["id"], "sticker-1")
        self.assertEqual(sticker["transform"]["yawDeg"], 10)
        self.assertEqual(sticker["transform"]["hFovDeg"], 179)
        self.assertEqual(sticker["params"]["assetId"], "asset-1")
        self.assertEqual(descriptor["overlay"], {"showMaskTint": True})


if __name__ == "__main__":
    unittest.main()
