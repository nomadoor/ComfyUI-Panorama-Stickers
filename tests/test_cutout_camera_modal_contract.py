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
        self.assertIn('const drew = renderCutoutPreviewToContext(ctx, contextRect, contextShot, { quality: previewQuality }) === true;', editor_js)

    def test_cutout_frame_entry_points_are_not_stubbed(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertNotIn("function isShotItem(item) {\n    return false;\n  }", editor_js)
        self.assertNotIn("function getActiveCutoutShot() {\n    if (type !== \"cutout\") return null;\n    return null;\n  }", editor_js)
        self.assertNotIn("function addCutoutFrame() {\n    return;\n  }", editor_js)
        self.assertIn("else if (action === \"add-or-look\") addCutoutFrame();", editor_js)
        self.assertIn("const itemIsShot = isShotItem(item);", editor_js)
        self.assertIn("if (!itemIsSticker && !itemIsShot) {", editor_js)
        self.assertIn('const activeShot = editor.mode === "frame" && supportsFramePainting() ? getActiveCutoutShot() : null;', editor_js)
        self.assertIn('kind: "pan_frame",', editor_js)
        self.assertIn('shot.hFOV_deg = next.hFOV_deg;', editor_js)
        self.assertNotIn('frameView: { zoom: 1, panX: 0, panY: 0 }', editor_js)
        frame_rect_body = editor_js.split("function getFrameViewRect", 1)[1].split("function supportsFramePainting", 1)[0]
        self.assertNotIn("getBoundingClientRect", frame_rect_body)
        self.assertIn("runtime.frameSafeRect = measureFrameSafeRect();", editor_js)
        # The gate is derived, never stored: no presentation scale may live on
        # `editor`, or it can go stale, ratchet, or fight the aspect fit.
        self.assertNotIn("frameScalePx", editor_js)
        self.assertNotIn("frameGateFocalPx", editor_js)
        layout_body = editor_js.split("function getFrameViewLayout", 1)[1].split("function getFrameViewRect", 1)[0]
        self.assertIn("FRAME_GATE_OCCUPANCY * fitFocalPx(safeRect, shot)", layout_body)
        # Aspect edits must resize the crop at the current scale, never hold the
        # FOV and let the scale follow the aspect.
        self.assertIn("function applyGateAspectAtCurrentScale(selected, ratio)", editor_js)
        self.assertIn("applyGateAspectAtCurrentScale(selected, inverted)", editor_js)
        self.assertIn("frameRailBounds.width > 0 && frameRailBounds.height > 0", editor_js)

    def test_frame_safe_rect_is_independent_of_the_active_shot(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        measure_body = editor_js.split("function measureFrameSafeRect", 1)[1].split("function getFrameViewLayout", 1)[0]
        # The gate scale is derived from the safe rect, so measuring any chrome
        # whose size follows the shot closes a feedback loop and makes the ERP
        # zoom whenever the aspect changes.
        self.assertIn("[paintDockEl, videoTransportEl].forEach", measure_body)
        self.assertNotIn("floatingRightEl].forEach", measure_body)
        self.assertIn("FLOATING_RIGHT_RESERVED_PX", measure_body)
        self.assertIn('uiState.cameraPreview.visible = editor.mode !== "frame";', editor_js)

    def test_vue_shell_hosts_camera_preview(self):
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        frame_rail_vue = (REPO_ROOT / "web_src" / "components" / "PanoFrameRail.vue").read_text(encoding="utf-8")
        floating_vue = (REPO_ROOT / "web_src" / "components" / "PanoFloatingRight.vue").read_text(encoding="utf-8")
        self.assertIn('PanoFrameRail :model="uiState.frameRail || {}"', modal_vue)
        self.assertIn('data-frame-rail', frame_rail_vue)
        self.assertIn("frame-aspect-set", frame_rail_vue)
        self.assertIn("frame-rotate-90", frame_rail_vue)
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
        self.assertIn('return (preserveReadyWhilePending && cacheEntry.img && (cacheEntry.img.complete || cacheEntry.img.naturalWidth || cacheEntry.img.width))', preview_js)

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
