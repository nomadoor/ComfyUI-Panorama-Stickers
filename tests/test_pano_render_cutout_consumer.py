import unittest
from pathlib import Path

from editor_source import editor_source


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderCutoutConsumer(unittest.TestCase):
    def test_modal_background_uses_mask_display_canvas_layer(self):
        editor_js = editor_source()
        paint_layers_js = (REPO_ROOT / "web_src" / "pano_paint_layers.js").read_text(encoding="utf-8")
        self.assertIn("mask: () => engineMask(engine),", editor_js)
        self.assertIn("const media = engine?.getMaskDisplayCanvas() ?? null;", paint_layers_js)
        self.assertIn('add("mask_display", top, mask());', paint_layers_js)
        self.assertNotIn("maskSource: erpTarget?.committedMask?.canvas || null,", editor_js)


if __name__ == "__main__":
    unittest.main()
