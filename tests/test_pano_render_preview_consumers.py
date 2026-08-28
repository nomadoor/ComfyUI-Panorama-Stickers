import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderPreviewConsumers(unittest.TestCase):
    def test_runtime_preview_uses_render_core_descriptor(self):
        runtime_js = (REPO_ROOT / "web_src" / "pano_preview_runtime.js").read_text(encoding="utf-8")
        self.assertIn('import { createPanoramaRenderCore } from "./pano_render_core.js";', runtime_js)
        self.assertIn('from "./pano_render_descriptors.js";', runtime_js)
        self.assertIn("buildStickerRenderDescriptor", runtime_js)
        self.assertIn("if (!node.__panoRuntimeCore) node.__panoRuntimeCore = createPanoramaRenderCore();", runtime_js)
        self.assertIn("if (!node.__panoBackgroundCore) node.__panoBackgroundCore = createPanoramaRenderCore();", runtime_js)
        self.assertIn("if (!node.__panoStandaloneCore) node.__panoStandaloneCore = createPanoramaRenderCore();", runtime_js)
        self.assertIn("function buildStickerPreviewDescriptor(", runtime_js)
        self.assertIn("return buildStickerRenderDescriptor({", runtime_js)
        self.assertIn("node.__panoRuntimeCore.syncState(descriptor)", runtime_js)
        self.assertIn('node.__panoRuntimeCore.renderToTarget("runtime_preview", view, {', runtime_js)
        self.assertIn("node.__panoBackgroundCore.syncState(", runtime_js)
        self.assertIn("node.__panoStandaloneCore.syncState(descriptor)", runtime_js)

    def test_preview_node_uses_render_core_descriptor(self):
        preview_js = (REPO_ROOT / "web_src" / "pano_preview_previewnode.js").read_text(encoding="utf-8")
        self.assertIn('import { createPanoramaRenderCore } from "./pano_render_core.js";', preview_js)
        self.assertIn('import { buildStickerRenderDescriptor } from "./pano_render_descriptors.js";', preview_js)
        self.assertIn("if (!node.__panoStandaloneCore) node.__panoStandaloneCore = createPanoramaRenderCore();", preview_js)
        self.assertIn("const descriptor = buildStickerRenderDescriptor({", preview_js)
        self.assertIn("node.__panoStandaloneCore.syncState(descriptor)", preview_js)
        self.assertIn('node.__panoStandaloneCore.renderToTarget(', preview_js)


if __name__ == "__main__":
    unittest.main()
