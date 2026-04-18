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
        camera_js = (REPO_ROOT / "web_src" / "pano_scene_camera.js").read_text(encoding="utf-8")
        self.assertIn("scene?.background && scene?.objectPass && Array.isArray(scene.objectPass.objects)", camera_js)
        self.assertIn("selectedId: scene?.objectPass?.selectedId ?? null", camera_js)
        self.assertIn("transform: entry?.transform || null", camera_js)
        self.assertIn("params: entry?.params || null", camera_js)


if __name__ == "__main__":
    unittest.main()
