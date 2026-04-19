import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderCutoutConsumer(unittest.TestCase):
    def test_cutout_preview_uses_mask_display_canvas_for_visual_mask_preview(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn("function getModalLayerMaskDisplaySource()", editor_js)
        self.assertIn("return editor.paintEngine?.getMaskDisplayCanvas?.() || null;", editor_js)

    def test_modal_background_uses_mask_display_canvas_layer(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn("function getModalLayerMaskDisplaySource()", editor_js)
        self.assertIn("return editor.paintEngine?.getMaskDisplayCanvas?.() || null;", editor_js)
        self.assertIn("function appendMaskDisplayLayerEntry(entries)", editor_js)
        self.assertIn('id: "mask_display",', editor_js)
        self.assertIn("const topLayerZ = entries.reduce((max, entry) => Math.max(max, Number(entry?.zIndex || 0)), -1);", editor_js)
        self.assertIn("const topStickerZ = (Array.isArray(state.stickers) ? state.stickers : [])", editor_js)
        self.assertIn("const topZ = Math.max(topLayerZ, topStickerZ);", editor_js)
        self.assertIn("zIndex: topZ + 1,", editor_js)
        self.assertNotIn("maskSource: erpTarget?.committedMask?.canvas || null,", editor_js)

    def test_cutout_preview_resource_revision_does_not_include_whole_shot(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn("function getCutoutPreviewSurfaceRevision(shot, options = {}) {", editor_js)
        self.assertNotIn("JSON.stringify(shot || null)", editor_js)
        self.assertIn("getCutoutPreviewObjectRevision()", editor_js)
        self.assertIn("isCutoutTransformInteractionActive()", editor_js)

    def test_cutout_preview_context_path_is_explicitly_stubbed(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn("function renderCutoutPreviewToContext(targetCtx, rect, shot, options = {}) {", editor_js)
        self.assertIn("return false;", editor_js)


if __name__ == "__main__":
    unittest.main()
