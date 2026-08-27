from pathlib import Path
import unittest


REPO_ROOT = Path(__file__).resolve().parents[1]


def function_block(source: str, name: str, next_name: str) -> str:
    return source.split(f"function {name}", 1)[1].split(f"function {next_name}", 1)[0]


class TestStickersEditorLoadingContract(unittest.TestCase):
    def setUp(self):
        self.editor = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")

    def test_editor_routes_comfy_media_through_the_adapter(self):
        self.assertIn('from "./pano_comfy_media.js"', self.editor)
        self.assertIn("createComfyMediaAdapter({", self.editor)
        self.assertIn("loadPreferredExactLinkedImage", self.editor)
        self.assertIn("mediaUiImage", self.editor)
        self.assertNotIn("function findLinkedInputImageSource", self.editor)
        self.assertNotIn("function loadLinkedInputImageFromSource", self.editor)

    def test_external_sticker_reads_only_its_dedicated_self_preview(self):
        external_loader = function_block(
            self.editor,
            "getExternalStickerPreviewImage",
            "computeStickerVFov",
        )
        self.assertIn("getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY", external_loader)
        self.assertNotIn("loadPreferredExactLinkedImage", external_loader)

    def test_failed_self_preview_falls_back_to_linked_background(self):
        connected = function_block(self.editor, "getConnectedErpImage", "isDecodedImageReady")
        self.assertIn("uiImg && !isImageLoadFailed(uiImg)", connected)
        self.assertIn("return img || uiImg || null", connected)
        self.assertIn("linked && !isImageLoadFailed(linked)", connected)
        self.assertIn("return uiImg || linked || null", connected)

    def test_reopening_editor_retries_only_failed_linked_sources(self):
        show_editor_prefix = function_block(self.editor, "showEditor", "getWidget")
        self.assertIn("comfyMedia.clearFailedLinkedImages(node)", show_editor_prefix)

    def test_render_loop_reschedules_after_frame_errors(self):
        tick = function_block(self.editor, "tick", "stopRenderLoop")
        self.assertIn("finally", tick)
        self.assertIn("requestAnimationFrame(tick)", tick)
        self.assertIn("editor frame failed", tick)

    def test_failed_state_is_rendered_by_the_vue_modal(self):
        modal = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        self.assertIn("uiState.stageStatus === 'failed'", modal)
        self.assertIn("uiState.stageStatus === 'ready' && uiState.stageWarningDetail", modal)
        self.assertIn('class="pano-stage-failed"', modal)

    def test_boot_warning_does_not_override_image_loading_state(self):
        stage_status = function_block(self.editor, "getStageImageStatus", "drawErpBackgroundUnwrap")
        self.assertNotIn("stageWarningDetail", stage_status)
        boot = self.editor.split("function runBootStep", 1)[1].split(
            "\napp.registerExtension(",
            1,
        )[0]
        self.assertIn("uiState.stageWarningDetail", boot)
        self.assertIn("if (!readOnly) commitState()", boot)
        self.assertIn('uiState.stageWarningDetail = "boot:asset-migration"', boot)


if __name__ == "__main__":
    unittest.main()
