from pathlib import Path
import unittest

from editor_source import editor_source


REPO_ROOT = Path(__file__).resolve().parents[1]


def function_block(source: str, name: str) -> str:
    """The code of function `name`, up to its closing brace."""
    start = source.index(f"function {name}(")
    line_start = source.rfind("\n", 0, start) + 1
    line = source[line_start:start]
    indent = line[: len(line) - len(line.lstrip())]
    return source[start : source.index(f"\n{indent}}}\n", start)]


class TestStickersEditorLoadingContract(unittest.TestCase):
    def setUp(self):
        self.editor = editor_source()

    def test_editor_routes_comfy_media_through_the_adapter(self):
        self.assertIn('from "./pano_comfy_media.js"', self.editor)
        self.assertIn("createComfyMediaAdapter({", self.editor)
        self.assertIn("loadPreferredExactLinkedImage", self.editor)
        self.assertIn("mediaUiImage", self.editor)
        self.assertNotIn("function findLinkedInputImageSource", self.editor)
        self.assertNotIn("function loadLinkedInputImageFromSource", self.editor)

    def test_external_sticker_reads_only_its_dedicated_self_preview(self):
        external_loader = function_block(self.editor, "getExternalStickerPreviewImage")
        self.assertIn("getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY", external_loader)
        self.assertNotIn("loadPreferredExactLinkedImage", external_loader)

    def test_failed_self_preview_falls_back_to_linked_background(self):
        connected = function_block(self.editor, "getConnectedErpImage")
        self.assertIn("uiImg && !isImageLoadFailed(uiImg)", connected)
        self.assertIn("return img || uiImg || null", connected)
        self.assertIn("linked && !isImageLoadFailed(linked)", connected)
        self.assertIn("return uiImg || linked || null", connected)

    def test_reopening_editor_retries_only_failed_linked_sources(self):
        show_editor_prefix = function_block(self.editor, "showEditor")
        self.assertIn("comfyMedia.clearFailedLinkedImages(node)", show_editor_prefix)

    def test_render_loop_reschedules_after_frame_errors(self):
        guard = function_block(self.editor, "runGuardedFrame")
        self.assertIn("catch (error)", guard)
        self.assertIn("editor frame failed", guard)
        tick = function_block(self.editor, "tick")
        self.assertIn("runGuardedFrame(() => tickFrame(ts, reasons));", tick)
        # The frame scheduler keeps asking for frames after a failed one (pano_frame_scheduler.js).
        self.assertIn("draw: (ts, reasons) => tick(ts, reasons),", self.editor)

    def test_failed_state_is_rendered_by_the_vue_modal(self):
        modal = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        self.assertIn("uiState.stageStatus === 'failed'", modal)
        # A warning shows once the stage is ready, and so does a note that is not a failure (#90).
        self.assertIn("uiState.stageStatus === 'ready' && (uiState.stageWarningDetail || uiState.stageNotice)", modal)
        self.assertIn('class="pano-stage-failed"', modal)

    def test_boot_warning_does_not_override_image_loading_state(self):
        stage_status = function_block(self.editor, "getStageImageStatus")
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
