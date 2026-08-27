import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestVueModalBoundary(unittest.TestCase):
    def test_modal_shell_owns_paint_overlay_structure_and_exposes_refs(self):
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        overlays_vue = (REPO_ROOT / "web_src" / "components" / "PanoPaintOverlays.vue").read_text(encoding="utf-8")

        self.assertIn('import PanoPaintOverlays from "./PanoPaintOverlays.vue";', modal_vue)
        self.assertIn('<PanoPaintOverlays ref="paintOverlaysRef" />', modal_vue)
        self.assertIn("getPaintOverlayRefs", modal_vue)
        self.assertIn('class="pano-paint-size-preview"', overlays_vue)
        self.assertIn('class="pano-paint-size-preview-sample"', overlays_vue)
        self.assertIn("cursorRef", overlays_vue)
        self.assertIn("sizePreviewRef", overlays_vue)
        self.assertIn("sizeSampleRef", overlays_vue)

    def test_modal_shell_owns_image_picker_and_forwards_intent_with_file_events(self):
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        picker_vue = (REPO_ROOT / "web_src" / "components" / "PanoImageFilePicker.vue").read_text(encoding="utf-8")

        self.assertIn('import PanoImageFilePicker from "./PanoImageFilePicker.vue";', modal_vue)
        self.assertIn("openImagePicker", modal_vue)
        self.assertIn('emit("image-file-selected", payload)', modal_vue)
        self.assertIn('emit("image-file-cancelled", payload)', modal_vue)
        self.assertIn('type="file"', picker_vue)
        self.assertIn('accept="image/*"', picker_vue)
        self.assertIn("input.value = \"\"", picker_vue)
        self.assertIn('emit("file-selected", { intent, file })', picker_vue)
        self.assertIn('emit("file-cancelled", { intent })', picker_vue)
        self.assertIn("defineExpose({ open })", picker_vue)

    def test_editor_consumes_vue_paint_refs_and_routes_image_picker_intents(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")

        self.assertIn("vueModal = vueApp.mount(mountHost)", editor_js)
        self.assertIn("vueModal?.getPaintOverlayRefs?.()", editor_js)
        self.assertNotIn('paintCursorEl = document.createElement("div")', editor_js)
        self.assertNotIn('paintSizePreviewEl = document.createElement("div")', editor_js)
        self.assertNotIn('paintSizePreviewSampleEl = document.createElement("div")', editor_js)
        self.assertIn("onImageFileSelected", editor_js)
        self.assertIn("onImageFileCancelled", editor_js)
        self.assertIn('if (intent === "add")', editor_js)
        self.assertIn("void addImageStickerFromFile(file)", editor_js)
        self.assertIn('if (intent === "replace") void replaceSelectedImageFromFile(file)', editor_js)
        self.assertIn('vueModal?.openImagePicker?.("add")', editor_js)
        self.assertIn('vueModal?.openImagePicker?.("replace")', editor_js)
        self.assertNotIn("function pickImageFile(", editor_js)
        self.assertNotIn('document.createElement("input")', editor_js)

    def test_editor_no_longer_builds_side_panel_or_selection_menu_html(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertNotIn("side.innerHTML =", editor_js)
        self.assertNotIn("selectionMenu.innerHTML =", editor_js)
        self.assertNotIn('layer.className = "pano-canvas-confirm"', editor_js)
        self.assertNotIn("installTooltipHandlers(", editor_js)
        self.assertNotIn("selectionMenu.addEventListener(", editor_js)
        self.assertNotIn(".onclick =", editor_js)
        self.assertIn("uiState.sidePanel =", editor_js)
        self.assertIn("uiState.selectionMenu =", editor_js)
        self.assertIn("uiState.tooltip", editor_js)
        self.assertIn("uiState.confirmDialog =", editor_js)

    def test_modal_shell_uses_vue_components_for_side_panel_and_selection_menu(self):
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        self.assertIn('import PanoSelectionMenu from "./PanoSelectionMenu.vue";', modal_vue)
        self.assertIn('import PanoConfirmDialog from "./PanoConfirmDialog.vue";', modal_vue)
        self.assertIn('import PanoTooltip from "./PanoTooltip.vue";', modal_vue)
        self.assertIn('<PanoSelectionMenu :model="uiState.selectionMenu || {}" />', modal_vue)
        self.assertIn('<PanoConfirmDialog :model="uiState.confirmDialog || {}" />', modal_vue)
        self.assertIn('<PanoTooltip :model="uiState.tooltip || {}" />', modal_vue)
        self.assertIn('<PanoSidePanel v-if="!hideSidebar" :node-title="nodeTitle" :model="uiState.sidePanel || {}" />', modal_vue)

    def test_editor_uses_dedicated_ui_state_builder_module(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        builder_js = (REPO_ROOT / "web_src" / "pano_editor_ui_state.js").read_text(encoding="utf-8")
        self.assertIn('from "./pano_editor_ui_state.js"', editor_js)
        self.assertIn("export function buildPaintDockModel(", builder_js)
        self.assertIn("export function buildEditorSidePanelModel(", builder_js)
        self.assertIn("export function buildSelectionMenuModel(", builder_js)


if __name__ == "__main__":
    unittest.main()
