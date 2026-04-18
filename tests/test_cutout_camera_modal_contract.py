from pathlib import Path
import unittest


REPO_ROOT = Path(__file__).resolve().parents[1]


class TestCutoutCameraModalContract(unittest.TestCase):
    def test_cutout_editor_uses_shared_camera_adapter(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn('from "./pano_cutout_camera.js"', editor_js)
        self.assertIn("const cutoutPreviewCamera = type === \"cutout\"", editor_js)
        self.assertIn("cutoutPreviewCamera.renderShotToContext", editor_js)
        self.assertIn('uiState.outputPreviewToggle.visible = editor.mode !== "frame" && !!getActiveCutoutShot();', editor_js)
        self.assertIn('const drew = renderCutoutPreviewToContext(ctx, rect, shot, { quality: previewQuality }) === true;', editor_js)

    def test_cutout_frame_entry_points_are_not_stubbed(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertNotIn("function isShotItem(item) {\n    return false;\n  }", editor_js)
        self.assertNotIn("function getActiveCutoutShot() {\n    if (type !== \"cutout\") return null;\n    return null;\n  }", editor_js)
        self.assertNotIn("function addCutoutFrame() {\n    return;\n  }", editor_js)
        self.assertIn("else if (action === \"add-or-look\") addCutoutFrame();", editor_js)
        self.assertIn("const itemIsShot = isShotItem(item);", editor_js)
        self.assertIn("if (!itemIsSticker && !itemIsShot) {", editor_js)
        self.assertIn('const activeShot = editor.mode === "frame" && supportsFramePainting() ? getActiveCutoutShot() : null;', editor_js)
        self.assertIn('editor.interaction = { kind: "pan_frame", last: p };', editor_js)

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

    def test_cutout_node_preview_uses_live_camera_render_before_output_exists(self):
        preview_js = (REPO_ROOT / "web_src" / "pano_preview_runtime.js").read_text(encoding="utf-8")
        self.assertIn('buildPanoramaCompositeDescriptor', preview_js)
        self.assertIn('buildCutoutViewParamsFromShot(shot)', preview_js)
        self.assertIn('const liveCutoutDrawn = node.__panoRuntimeCore.renderToContext(', preview_js)
        self.assertNotIn('} else if (bgReady) {\n        statusType = "empty";\n        hintText = "Open editor or run node";', preview_js)

    def test_linked_input_preview_cache_keeps_ready_image_during_reload(self):
        preview_js = (REPO_ROOT / "web_src" / "pano_preview_runtime.js").read_text(encoding="utf-8")
        self.assertIn('pendingSrcRaw', preview_js)
        self.assertIn('pendingImg', preview_js)
        self.assertIn('return (cacheEntry.img && (cacheEntry.img.complete || cacheEntry.img.naturalWidth || cacheEntry.img.width))', preview_js)

    def test_cutout_preview_paint_workspace_does_not_follow_linked_image_aspect(self):
        preview_js = (REPO_ROOT / "web_src" / "pano_preview_runtime.js").read_text(encoding="utf-8")
        self.assertIn("function getDesiredPreviewPaintDescriptor(node, state) {", preview_js)
        self.assertIn("const presetWidth = Math.max(1, Number(state?.output_preset || 2048));", preview_js)
        self.assertIn("height: Math.max(1, Math.round(presetWidth * 0.5)),", preview_js)
        self.assertNotIn("const connectedWidth = Number(connected?.naturalWidth || connected?.width || 0);", preview_js)
        self.assertNotIn("const connectedHeight = Number(connected?.naturalHeight || connected?.height || 0);", preview_js)
        self.assertNotIn("width: Math.max(1, Math.round(connectedWidth)),", preview_js)
        self.assertNotIn("height: Math.max(1, Math.round(connectedHeight)),", preview_js)


if __name__ == "__main__":
    unittest.main()
