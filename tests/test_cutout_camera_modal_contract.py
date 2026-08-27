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
        self.assertIn('disabled: readOnly || frameMode,', editor_js)
        self.assertIn('if (editor.mode === "frame") return;\n      startViewTween', editor_js)
        self.assertIn('if (editor.mode === "frame") return;\n      editor.showGrid = !editor.showGrid;', editor_js)
        self.assertIn("function drawCutoutPanoPassepartout()", editor_js)
        dim_target_body = editor_js.split("function getCutoutPanoDimTarget()", 1)[1].split("function drawCutoutPanoPassepartout()", 1)[0]
        self.assertNotIn('editor.mode !== "pano"', dim_target_body)
        self.assertNotIn("CUTOUT_PANO_DRAG_DIM_ALPHA", editor_js)
        self.assertIn('ctx.fill("evenodd")', editor_js)
        self.assertIn("cutoutPanoDimCorners: null", editor_js)
        self.assertIn("editor.cutoutPanoDimCorners = liveCorners", editor_js)
        self.assertIn("cutoutPanoFrameVisual: null", editor_js)
        self.assertIn("cutoutPanoFrameAlpha: 0", editor_js)
        self.assertIn('const nextFrameTarget = type === "cutout" && getActiveCutoutShot() ? 1 : 0;', editor_js)
        self.assertIn("drawCameraFrameBody(visual.geom, visual.selected, visual.locked)", editor_js)
        self.assertIn('kind: "roll_frame"', editor_js)
        self.assertIn('shortestAngleDeltaRad(angle, interaction.lastAngle)', editor_js)
        self.assertIn('editor.interaction?.kind === "pan_frame" || editor.interaction?.kind === "roll_frame"', editor_js)
        roll_overlay = editor_js.split("function drawFrameRollOverlay", 1)[1].split("function ", 1)[0]
        self.assertNotIn("fillText", roll_overlay)
        self.assertNotIn("function drawFrameRollHandles", editor_js)
        self.assertIn("frameRollKnob:", editor_js)
        self.assertIn("frameRollAngleForEvent(event, center)", editor_js)
        self.assertIn('uiState.tooltip.variant = "roll"', editor_js)
        self.assertIn("clearTimeout(tooltip.timer)", editor_js)
        self.assertIn('if (it.source === "knob") return;', editor_js)
        self.assertIn('ended?.kind === "roll_frame" && ended.source === "knob"', editor_js)
        self.assertIn("frameRollOverlayAlpha:", editor_js)
        self.assertIn("FRAME_ROLL_OVERLAY_TRANSITION_MS", editor_js)
        self.assertIn("frameCanvasScale: 1", editor_js)
        self.assertIn("frameGateCssRadius * radiusScale", editor_js)
        self.assertIn("visual.shot.roll_deg ?? visual.shot.rot_deg ?? 0", editor_js)
        self.assertIn("shot.roll_deg ?? shot.rot_deg ?? 0", editor_js)
        self.assertIn("editor.altModifier", editor_js)
        self.assertIn("altStarted ? false : event.altKey", editor_js)
        self.assertIn('window.addEventListener("blur", onWindowBlur)', editor_js)
        self.assertIn('closest(".pano-frame-rail")', editor_js)
        self.assertIn('variant = "frame-rail"', editor_js)

    def test_panorama_view_is_never_moved_by_tab_switch(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        view_branch = editor_js.split('const viewTarget = ev.target.closest("[data-view]");', 1)[1]
        view_branch = view_branch.split("const actionTarget", 1)[0]
        # A tab switch is navigation, not an edit; a round trip must be a no-op.
        for forbidden in ("editor.viewYaw", "editor.viewPitch", "editor.viewFov", "startViewTween"):
            self.assertNotIn(forbidden, view_branch)

    def test_offscreen_frame_indicator_is_not_reintroduced(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        # Look At Frame already provides this action; do not duplicate it.
        self.assertNotIn("offscreenFrameIndicator", editor_js)
        self.assertNotIn("look-at-offscreen-frame", editor_js)
        self.assertNotIn("PanoOffscreenFrameIndicator", modal_vue)
        self.assertFalse((REPO_ROOT / "web_src" / "components" / "PanoOffscreenFrameIndicator.vue").exists())

    def test_panorama_passepartout_does_not_reuse_stale_corners(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        body = editor_js.split("function drawCutoutPanoPassepartout", 1)[1]
        body = body.split("function ", 1)[0]
        # Stale corners would leave a bright hole when the live frame is offscreen.
        self.assertNotIn("(geom?.visible ? liveCorners : null) || editor.cutoutPanoDimCorners", body)
        self.assertIn("fadingOut", body)

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
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        frame_rail_vue = (REPO_ROOT / "web_src" / "components" / "PanoFrameRail.vue").read_text(encoding="utf-8")
        roll_knob_vue = (REPO_ROOT / "web_src" / "components" / "PanoFrameRollKnob.vue").read_text(encoding="utf-8")
        floating_vue = (REPO_ROOT / "web_src" / "components" / "PanoFloatingRight.vue").read_text(encoding="utf-8")
        self.assertIn('PanoFrameRail :model="uiState.frameRail || {}"', modal_vue)
        self.assertIn('data-frame-rail', frame_rail_vue)
        self.assertIn("'is-hidden': model.visible !== true", frame_rail_vue)
        self.assertNotIn('v-show="model.visible === true"', frame_rail_vue)
        self.assertIn("frame-aspect-set", frame_rail_vue)
        self.assertIn("frame-rotate-90", frame_rail_vue)
        self.assertIn("data-frame-roll-knob", roll_knob_vue)
        self.assertIn('aria-hidden="true"', roll_knob_vue)
        self.assertNotIn('role="slider"', roll_knob_vue)
        self.assertIn('PanoFrameRollKnob :model="model.rollKnob || {}"', frame_rail_vue)
        self.assertFalse((REPO_ROOT / "web_src" / "components" / "PanoFrameRollHandles.vue").exists())
        self.assertNotIn("PanoFrameRollHandles", modal_vue)
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
        self.assertIn('const liveCutoutDrawn = runtimeCore.renderToContext(', preview_js)
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
