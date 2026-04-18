from pathlib import Path
import unittest


REPO_ROOT = Path(__file__).resolve().parents[1]


class TestCutoutCameraModalContract(unittest.TestCase):
    def test_cutout_editor_uses_shared_camera_adapter(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn('from "./pano_cutout_camera.js"', editor_js)
        self.assertIn("const cutoutPreviewCamera = type === \"cutout\"", editor_js)
        self.assertIn("cutoutPreviewCamera.renderShotToContext", editor_js)

    def test_cutout_frame_entry_points_are_not_stubbed(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertNotIn("function isShotItem(item) {\n    return false;\n  }", editor_js)
        self.assertNotIn("function getActiveCutoutShot() {\n    if (type !== \"cutout\") return null;\n    return null;\n  }", editor_js)
        self.assertNotIn("function addCutoutFrame() {\n    return;\n  }", editor_js)
        self.assertIn("else if (action === \"add-or-look\") addCutoutFrame();", editor_js)
        self.assertIn("const itemIsShot = isShotItem(item);", editor_js)
        self.assertIn("if (!itemIsSticker && !itemIsShot) {", editor_js)

    def test_vue_shell_hosts_camera_preview(self):
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        floating_vue = (REPO_ROOT / "web_src" / "components" / "PanoFloatingRight.vue").read_text(encoding="utf-8")
        self.assertIn(':preview="uiState.cameraPreview || {}"', modal_vue)
        self.assertIn(':preview-toggle="uiState.outputPreviewToggle || {}"', modal_vue)
        self.assertIn('data-camera-preview-host', floating_vue)
        self.assertIn("preview.visible", floating_vue)
        self.assertIn('data-action="toggle-output-preview-size"', floating_vue)
        self.assertIn("preview.width || (preview.expanded ? 320 : 220)", floating_vue)
        self.assertIn("preview.height || (preview.expanded ? 192 : 132)", floating_vue)


if __name__ == "__main__":
    unittest.main()
