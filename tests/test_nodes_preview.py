import sys
import unittest
from unittest.mock import MagicMock, patch
from pathlib import Path

class TestNodesPreview(unittest.TestCase):
    def setUp(self):
        # Prepare mocks
        self.mock_torch = MagicMock()
        self.mock_torch.from_numpy = MagicMock(return_value=MagicMock())
        self.mock_torch.zeros = MagicMock(return_value=MagicMock())

        self.mock_numpy = MagicMock()
        self.mock_pil = MagicMock()
        self.mock_pil_image = MagicMock()
        self.mock_cv2 = MagicMock()

        self.mock_nodes = MagicMock()
        self.mock_preview_image = MagicMock()
        self.mock_nodes.PreviewImage = MagicMock(return_value=self.mock_preview_image)
        self.mock_preview_image.save_images.return_value = {
            "ui": {"images": [{"filename": "test.png", "type": "temp"}]}
        }

        # Create a dictionary of modules to patch
        self.modules_patch = {
            "torch": self.mock_torch,
            "torch.nn": MagicMock(),
            "torch.nn.functional": MagicMock(),
            "numpy": self.mock_numpy,
            "PIL": self.mock_pil,
            "PIL.Image": self.mock_pil_image,
            "cv2": self.mock_cv2,
            "nodes": self.mock_nodes
        }

        # Start the patcher
        self.patcher = patch.dict("sys.modules", self.modules_patch)
        self.patcher.start()

        # Import the module under test *after* patching sys.modules
        import comfyui_pano_suite.nodes
        self.nodes_module = comfyui_pano_suite.nodes
        # Force reload if it was already imported to ensure it picks up mocks if needed,
        # though standard `import` caches. Since this is a new process/execution context per test file usually,
        # but locally here we want to be safe. If we were using `reload`, we'd need `importlib`.
        # However, since we are patching sys.modules, if the module wasn't imported yet, it will use the mocks.
        # If it WAS imported (e.g. by another test), it might still hold references to real modules if they existed.
        # But here we assume we are simulating an environment where these might be missing or we just want control.

    def tearDown(self):
        self.patcher.stop()

    def test_stickers_node_saves_preview(self):
        PanoramaStickersNode = self.nodes_module.PanoramaStickersNode
        assert PanoramaStickersNode.OUTPUT_NODE is True
        node = PanoramaStickersNode()
        # Create dummy input tensor
        dummy_erp = MagicMock()

        with patch("comfyui_pano_suite.nodes.compose_stickers_to_erp") as mock_compose:
            mock_compose.return_value = MagicMock()

            res = node.run(
                output_preset="1024 x 512",
                bg_color="#000000",
                state_json="",
                bg_erp=dummy_erp
            )

            # Check if PreviewImage().save_images was called with dummy_erp
            self.mock_preview_image.save_images.assert_called_once()
            args, _ = self.mock_preview_image.save_images.call_args
            assert args[0] is dummy_erp

            # Check return structure
            assert isinstance(res, dict)
            assert "ui" in res
            assert "result" in res
            assert "pano_input_images" in res["ui"]
            assert res["ui"]["pano_input_images"] == [{"filename": "test.png", "type": "temp"}]

    def test_stickers_node_no_input(self):
        PanoramaStickersNode = self.nodes_module.PanoramaStickersNode
        node = PanoramaStickersNode()
        with patch("comfyui_pano_suite.nodes.compose_stickers_to_erp") as mock_compose:
            mock_compose.return_value = MagicMock()

            res = node.run(
                output_preset="1024 x 512",
                bg_color="#000000",
                state_json="",
                bg_erp=None
            )

            self.mock_preview_image.save_images.assert_not_called()
            assert isinstance(res, dict)
            assert res["ui"] == {}

    def test_cutout_node_saves_preview(self):
        PanoramaCutoutNode = self.nodes_module.PanoramaCutoutNode
        assert PanoramaCutoutNode.OUTPUT_NODE is True
        node = PanoramaCutoutNode()
        dummy_erp = MagicMock()
        # Setup detach logic for cutout logic in nodes.py which does:
        # arr = erp_image.detach().cpu().numpy().astype(np.float32)
        dummy_erp.detach.return_value.cpu.return_value.numpy.return_value.astype.return_value = MagicMock(ndim=4, shape=(1, 512, 1024, 3))

        with patch("comfyui_pano_suite.nodes.cutout_from_erp") as mock_cutout:
            # Return a valid numpy array mock so it doesn't fail
            mock_cutout.return_value = MagicMock(ndim=3, shape=(512, 512, 3))

            res = node.run(
                erp_image=dummy_erp,
                state_json=""
            )

            self.mock_preview_image.save_images.assert_called_once()
            assert isinstance(res, dict)
            assert "pano_input_images" in res["ui"]

    def test_preview_node_saves_preview(self):
        PanoramaPreviewNode = self.nodes_module.PanoramaPreviewNode
        node = PanoramaPreviewNode()
        dummy_erp = MagicMock()

        res = node.run(erp_image=dummy_erp)

        self.mock_preview_image.save_images.assert_called_once()
        assert isinstance(res, dict)
        assert "ui" in res
        assert "pano_input_images" in res["ui"]
        # Should NOT have standard images to prevent double preview
        assert "images" not in res["ui"]

    def test_preview_node_contract_stable(self):
        PanoramaPreviewNode = self.nodes_module.PanoramaPreviewNode
        assert PanoramaPreviewNode.OUTPUT_NODE is True
        assert PanoramaPreviewNode.RETURN_TYPES == ()
        input_types = PanoramaPreviewNode.INPUT_TYPES()
        assert "required" in input_types
        assert set(input_types["required"].keys()) == {"erp_image"}
        assert input_types["required"]["erp_image"] == ("IMAGE",)

    def test_preview_frontend_route_is_isolated(self):
        repo_root = Path(__file__).resolve().parent.parent
        preview_wire = (repo_root / "web" / "pano_node_preview.js").read_text(encoding="utf-8")
        assert "attachPreviewNodeRuntime" in preview_wire
        assert 'mode: "stickers"' not in preview_wire.split("export function attachPreviewNode", 1)[1].split("export function attachStickersNodePreview", 1)[0]
        assert "runtimeAttachPanoramaPreview(target" not in preview_wire

    def test_preview_editor_attach_is_node_created_only(self):
        repo_root = Path(__file__).resolve().parent.parent
        editor_js = (repo_root / "web" / "pano_editor.js").read_text(encoding="utf-8")
        install_block = editor_js.split("function installStandalonePreviewNode", 1)[1].split("function installStandalonePreviewInstance", 1)[0]
        assert "attachPreviewNode(nodeType" not in install_block
        assert "attachPreviewNode(node, {" in editor_js

    def test_editor_buttons_use_widget_route(self):
        repo_root = Path(__file__).resolve().parent.parent
        editor_js = (repo_root / "web" / "pano_editor.js").read_text(encoding="utf-8")
        assert 'ensureActionButtonWidget(node, buttonText, () => showEditor(node, "stickers"))' in editor_js
        assert 'ensureActionButtonWidget(node, buttonText, () => showEditor(node, "cutout"))' in editor_js
        assert 'ensureActionButtonWidget(node, "Open Preview", () => showEditor(node, "stickers", { readOnly: true, hideSidebar: false }))' in editor_js

    def test_preview_runtime_has_no_embedded_button(self):
        repo_root = Path(__file__).resolve().parent.parent
        preview_js = (repo_root / "web" / "pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'document.createElement("button")' not in preview_js
        assert "getLegacyButtonRect" not in preview_js

    def test_preview_runtime_wheel_and_scheduler_guards(self):
        repo_root = Path(__file__).resolve().parent.parent
        preview_js = (repo_root / "web" / "pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'root.addEventListener("wheel"' in preview_js
        assert 'canvas.addEventListener("wheel"' not in preview_js
        assert "mousewheel" not in preview_js
        assert "DOMMouseScroll" not in preview_js
        assert "window.devicePixelRatio" not in preview_js
        assert "app?.canvas?.setDirty?.(true, true)" not in preview_js
        assert "lockGraphViewportSnapshot" not in preview_js
        assert "restoreGraphViewportSnapshot" not in preview_js
        assert "if (this.controller.applyWheelEvent(ev)) this.requestDraw();" not in preview_js
        assert 'this.root.setAttribute("data-capture-wheel", "true");' in preview_js
        assert 'this.root.setAttribute("tabindex", "0");' in preview_js
        assert "root.focus?.({ preventScroll: true });" in preview_js
        assert "this.inTick = false;" in preview_js
        assert "this.queuedDuringTick = false;" in preview_js

    def test_shared_runtime_has_no_embedded_editor_button_for_cutout(self):
        repo_root = Path(__file__).resolve().parent.parent
        runtime_js = (repo_root / "web" / "pano_preview_runtime.js").read_text(encoding="utf-8")
        legacy_block = runtime_js.split("function attachLegacyStickersPreview", 1)[1].split("function drawCanvas", 1)[0]
        assert "drawNodeEditorButton(this, ctx);" not in legacy_block
        assert "if (pointInRect(p.x, p.y, btn))" not in legacy_block

    def test_stickers_without_preview_do_not_force_large_node_size(self):
        repo_root = Path(__file__).resolve().parent.parent
        editor_js = (repo_root / "web" / "pano_editor.js").read_text(encoding="utf-8")
        assert "Without node preview, let LiteGraph size the node from widgets only." in editor_js

if __name__ == '__main__':
    unittest.main()
