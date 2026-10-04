import unittest
from pathlib import Path

from editor_source import editor_source


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderCutoutConsumer(unittest.TestCase):
    def test_cutout_preview_uses_mask_display_canvas_for_visual_mask_preview(self):
        editor_js = editor_source()
        self.assertIn("const source = editor.paintEngine?.getMaskDisplayCanvas() || null;", editor_js)

    def test_modal_background_uses_mask_display_canvas_layer(self):
        editor_js = editor_source()
        self.assertIn("const source = editor.paintEngine?.getMaskDisplayCanvas() || null;", editor_js)
        self.assertIn("function appendMaskDisplayLayerEntry(entries)", editor_js)
        self.assertIn('id: "mask_display",', editor_js)
        self.assertIn("const topLayerZ = entries.reduce((max, entry) => Math.max(max, Number(entry?.zIndex || 0)), -1);", editor_js)
        self.assertIn("const topStickerZ = (Array.isArray(state.stickers) ? state.stickers : [])", editor_js)
        self.assertIn("const topZ = Math.max(topLayerZ, topStickerZ);", editor_js)
        self.assertIn("zIndex: topZ + 1,", editor_js)
        self.assertNotIn("maskSource: erpTarget?.committedMask?.canvas || null,", editor_js)


if __name__ == "__main__":
    unittest.main()
