import importlib
import json
import sys
import unittest
from unittest.mock import MagicMock, patch
from pathlib import Path
from types import ModuleType, SimpleNamespace

import torch


_MISSING = object()


class TestNodesPreview(unittest.TestCase):
    def _web_source_path(self, *parts):
        repo_root = Path(__file__).resolve().parent.parent
        return repo_root / "web_src" / Path(*parts)

    def _web_runtime_path(self, *parts):
        repo_root = Path(__file__).resolve().parent.parent
        return repo_root / "web" / Path(*parts)

    def setUp(self):
        class _NodeOutput:
            def __init__(self, *result, ui=None):
                self.result = result
                self.ui = ui or {}

        class _Port:
            def __init__(self, kind, name, optional=False, **kwargs):
                self.kind = kind
                self.id = name
                self.name = name
                self.optional = optional
                self.options = kwargs.pop("options", None)
                self.kwargs = kwargs

        class _PortFactory:
            def __init__(self, kind):
                self.kind = kind

            def Input(self, name, optional=False, **kwargs):
                return _Port(self.kind, name, optional=optional, **kwargs)

            def Output(self, name, **kwargs):
                return _Port(self.kind, name, optional=False, **kwargs)

        class _Schema:
            def __init__(self, **kwargs):
                self.__dict__.update(kwargs)
                self.inputs = list(kwargs.get("inputs", []))
                self.outputs = list(kwargs.get("outputs", []))
                self.hidden = list(kwargs.get("hidden", []))
                self.is_output_node = bool(kwargs.get("is_output_node", False))

        class _ComfyNode:
            pass

        io_module = SimpleNamespace(
            ComfyNode=_ComfyNode,
            Schema=_Schema,
            NodeOutput=_NodeOutput,
            Combo=_PortFactory("COMBO"),
            String=_PortFactory("STRING"),
            Image=_PortFactory("IMAGE"),
            Float=_PortFactory("FLOAT"),
            Int=_PortFactory("INT"),
            Mask=_PortFactory("MASK"),
            Audio=_PortFactory("AUDIO"),
            Hidden=SimpleNamespace(unique_id="UNIQUE_ID"),
        )
        comfy_api_module = ModuleType("comfy_api")
        comfy_api_latest_module = ModuleType("comfy_api.latest")
        comfy_api_latest_module.io = io_module

        self.mock_nodes = MagicMock()
        self.mock_preview_image = MagicMock()
        self.mock_nodes.PreviewImage = MagicMock(return_value=self.mock_preview_image)
        self.mock_preview_image.save_images.return_value = {
            "ui": {"images": [{"filename": "test.png", "type": "temp"}]}
        }

        self.package_module = importlib.import_module("comfyui_pano_suite")
        self.original_nodes_module = sys.modules.pop("comfyui_pano_suite.nodes", None)
        self.original_package_nodes = self.package_module.__dict__.pop("nodes", _MISSING)

        # Create a dictionary of modules to patch
        self.modules_patch = {
            "nodes": self.mock_nodes,
            "comfy_api": comfy_api_module,
            "comfy_api.latest": comfy_api_latest_module,
        }

        # Start the patcher
        self.patcher = patch.dict("sys.modules", self.modules_patch)
        self.patcher.start()

        # Import an isolated module instance *after* patching sys.modules.
        self.nodes_module = importlib.import_module("comfyui_pano_suite.nodes")

    def tearDown(self):
        sys.modules.pop("comfyui_pano_suite.nodes", None)
        self.package_module.__dict__.pop("nodes", None)
        self.patcher.stop()
        if self.original_nodes_module is not None:
            sys.modules["comfyui_pano_suite.nodes"] = self.original_nodes_module
        if self.original_package_nodes is not _MISSING:
            self.package_module.nodes = self.original_package_nodes

    def test_preview_tests_use_an_isolated_nodes_module(self):
        if self.original_nodes_module is not None:
            assert self.nodes_module is not self.original_nodes_module

    def test_stickers_node_saves_preview(self):
        PanoramaStickersNode = self.nodes_module.PanoramaStickersNode
        schema = PanoramaStickersNode.define_schema()
        assert schema.node_id == "PanoramaStickers"
        assert schema.is_output_node is True
        assert [(port.id, port.kind) for port in schema.outputs] == [
            ("cond_erp", "IMAGE"),
            ("mask", "MASK"),
        ]
        dummy_erp = torch.zeros((1, 4, 8, 3), dtype=torch.float32)

        res = PanoramaStickersNode.execute(
            output_preset="1024",
            coverage="360",
            bg_color="#000000",
            state_json="",
            bg_erp=dummy_erp,
        )

        self.mock_preview_image.save_images.assert_called_once()
        args, _ = self.mock_preview_image.save_images.call_args
        assert args[0] is dummy_erp
        assert tuple(res.result[0].shape) == (1, 512, 1024, 3)
        assert tuple(res.result[1].shape) == (1, 512, 1024)
        assert res.ui["pano_input_images"] == [{"filename": "test.png", "type": "temp"}]

    def test_stickers_node_no_input(self):
        PanoramaStickersNode = self.nodes_module.PanoramaStickersNode
        res = PanoramaStickersNode.execute(
            output_preset="1024",
            coverage="360",
            bg_color="#000000",
            state_json="",
            bg_erp=None,
        )

        self.mock_preview_image.save_images.assert_not_called()
        assert res.ui == {}
        assert tuple(res.result[0].shape) == (1, 512, 1024, 3)
        assert tuple(res.result[1].shape) == (1, 512, 1024)

    def test_stickers_node_reports_the_exact_external_state_hash_to_the_editor(self):
        PanoramaStickersNode = self.nodes_module.PanoramaStickersNode
        state_raw = '{"kind":"pano_sticker_state","version":1,"pose":{"yaw_deg":12,"pitch_deg":-3,"roll_deg":4,"hFOV_deg":55},"source_aspect":1.5}'

        res = PanoramaStickersNode.execute(
            output_preset="1024",
            coverage="360",
            bg_color="#000000",
            state_json="",
            sticker_image=torch.zeros((1, 2, 3, 3), dtype=torch.float32),
            sticker_state=state_raw,
        )

        assert res.ui["pano_sticker_input_state_hash"] == ["575416577"]

    def test_stickers_auto_180_keeps_overlay_workspace_2_to_1(self):
        PanoramaStickersNode = self.nodes_module.PanoramaStickersNode
        bg_erp = SimpleNamespace(shape=(1, 2048, 4096, 3))

        out_w, out_h, output_uses_bg_size = PanoramaStickersNode._resolve_output_size(
            "auto",
            "180",
            bg_erp=bg_erp,
        )
        workspace_w, workspace_h = PanoramaStickersNode._resolve_overlay_workspace_size(out_w, out_h, "180")

        assert (out_w, out_h) == (4096, 4096)
        assert output_uses_bg_size is True
        assert workspace_w == 4096
        assert workspace_h == 2048

    def test_cutout_node_saves_preview(self):
        PanoramaCutoutNode = self.nodes_module.PanoramaCutoutNode
        schema = PanoramaCutoutNode.define_schema()
        assert schema.node_id == "PanoramaCutout"
        assert schema.is_output_node is True
        assert [(port.id, port.kind) for port in schema.outputs] == [
            ("rect_image", "IMAGE"),
            ("sticker_state_json", "STRING"),
            ("mask", "MASK"),
        ]
        dummy_erp = torch.zeros((1, 4, 8, 3), dtype=torch.float32)

        res = PanoramaCutoutNode.execute(
            erp_image=dummy_erp,
            coverage="360",
            state_json="",
        )

        self.mock_preview_image.save_images.assert_called_once()
        assert tuple(res.result[0].shape) == (1, 4, 8, 3)
        assert res.result[1] == '{"stickers":[],"version":1}'
        assert tuple(res.result[2].shape) == (1, 4, 8)
        assert "pano_input_images" in res.ui

    def test_cutout_node_preserves_each_frame_in_a_sampled_batch(self):
        PanoramaCutoutNode = self.nodes_module.PanoramaCutoutNode
        dummy_erp = torch.stack([
            torch.zeros((8, 16, 3), dtype=torch.float32),
            torch.ones((8, 16, 3), dtype=torch.float32),
        ])
        state_json = json.dumps({
            "shots": [{
                "yaw_deg": 0.0,
                "pitch_deg": 0.0,
                "roll_deg": 0.0,
                "hFOV_deg": 90.0,
                "vFOV_deg": 60.0,
            }],
        })

        res = PanoramaCutoutNode.execute(
            erp_image=dummy_erp,
            coverage="360",
            state_json=state_json,
            output_megapixels=0.01,
        )

        assert res.result[0].shape[0] == 2
        assert torch.allclose(res.result[0][0], torch.zeros_like(res.result[0][0]))
        assert torch.allclose(res.result[0][1], torch.ones_like(res.result[0][1]))

    def test_preview_node_saves_preview(self):
        PanoramaPreviewNode = self.nodes_module.PanoramaPreviewNode
        dummy_erp = torch.zeros((1, 4, 8, 3), dtype=torch.float32)

        res = PanoramaPreviewNode.execute(erp_image=dummy_erp, coverage="360")

        self.mock_preview_image.save_images.assert_called_once()
        assert res.result == ()
        assert "pano_input_images" in res.ui
        # Should NOT have standard images to prevent double preview
        assert "images" not in res.ui

    def test_preview_node_contract_stable(self):
        PanoramaPreviewNode = self.nodes_module.PanoramaPreviewNode
        schema = PanoramaPreviewNode.define_schema()
        inputs = {port.id: port for port in schema.inputs}

        assert schema.node_id == "PanoramaPreview"
        assert schema.is_output_node is True
        assert schema.outputs == []
        assert [(port.id, port.kind, port.optional) for port in schema.inputs] == [
            ("erp_image", "IMAGE", False),
            ("coverage", "COMBO", False),
            ("fps", "FLOAT", False),
            ("audio", "AUDIO", True),
        ]
        assert inputs["coverage"].options == ["360", "180"]
        assert schema.hidden == ["UNIQUE_ID"]

    def test_preview_frontend_route_is_isolated(self):
        preview_wire = self._web_source_path("pano_node_preview.js").read_text(encoding="utf-8")
        assert 'from "./pano_preview_previewnode.js"' in preview_wire
        assert "attachPreviewNodeRuntime" in preview_wire
        assert "attachStandalonePreviewAuto" not in preview_wire
        assert 'mode: "stickers"' not in preview_wire.split("export function attachPreviewNode", 1)[1].split("export function attachStickersNodePreview", 1)[0]
        assert "runtimeAttachPanoramaPreview(target" not in preview_wire

    def test_preview_editor_attach_is_node_created_only(self):
        lifecycle_js = self._web_source_path("pano_editor_extension.js").read_text(encoding="utf-8")
        install_block = lifecycle_js.split("function installStandalonePreviewNode", 1)[1].split("function installStandalonePreviewInstance", 1)[0]
        assert "attachPreviewNode(nodeType" not in install_block
        instance_block = lifecycle_js.split("function installStandalonePreviewInstance", 1)[1].split("export function createPanoEditorExtension", 1)[0]
        assert "attachPreview(node, {" in instance_block

    def test_editor_lifecycle_is_delegated_to_the_extension_boundary(self):
        editor_js = self._web_source_path("pano_editor.js").read_text(encoding="utf-8")
        assert 'from "./pano_editor_extension.js";' in editor_js
        assert "createPanoEditorExtension" in editor_js
        assert "queuePendingStickerOperation" in editor_js
        assert "app.registerExtension(createPanoEditorExtension({" in editor_js
        assert "function installEditorButton" not in editor_js
        assert "function installStandalonePreviewInstance" not in editor_js

    def test_preview_runtime_has_no_embedded_button(self):
        preview_js = self._web_source_path("pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'document.createElement("button")' not in preview_js
        assert "getLegacyButtonRect" not in preview_js

    def test_preview_node_prefers_self_rendered_input_over_upstream_preview(self):
        preview_js = self._web_source_path("pano_preview_previewnode.js").read_text(encoding="utf-8")
        candidate_block = preview_js.split("const candidateGroups = [", 1)[1].split("];", 1)[0]
        assert candidate_block.index("selfOutput?.ui?.pano_input_images") < candidate_block.index("outputs?.ui?.pano_input_images")
        assert candidate_block.index("selfOutput?.pano_input_images") < candidate_block.index("outputs?.pano_input_images")

    def test_webgl_preview_renderer_is_present(self):
        gl_renderer_js = self._web_source_path("pano_gl_renderer.js").read_text(encoding="utf-8")
        gl_scene_js = self._web_source_path("pano_gl_scene.js").read_text(encoding="utf-8")
        render_core_js = self._web_source_path("pano_render_core.js").read_text(encoding="utf-8")
        assert "export function createPanoGlRenderer(" in gl_renderer_js
        assert "export function createPanoramaRenderCore" in render_core_js
        assert "export function buildStickerSceneFromState" in gl_scene_js

    def test_modal_runtime_and_preview_use_shared_scene_builder(self):
        editor_js = self._web_source_path("pano_editor.js").read_text(encoding="utf-8")
        runtime_js = self._web_source_path("pano_preview_runtime.js").read_text(encoding="utf-8")
        preview_node_js = self._web_source_path("pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'from "./pano_gl_scene.js"' in editor_js
        assert 'from "./pano_gl_scene.js"' in runtime_js
        assert 'from "./pano_gl_scene.js"' in preview_node_js
        assert "buildStickerSceneFromState" in editor_js
        assert "buildStickerSceneFromState" in runtime_js
        assert "buildStickerSceneFromState" in preview_node_js
        assert "buildCutoutViewParamsFromShot" in editor_js
        assert "buildCutoutViewParamsFromShot" in runtime_js

    def test_modal_runtime_and_preview_use_render_core_not_legacy_viewport(self):
        editor_js = self._web_source_path("pano_editor.js").read_text(encoding="utf-8")
        runtime_js = self._web_source_path("pano_preview_runtime.js").read_text(encoding="utf-8")
        preview_node_js = self._web_source_path("pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'from "./pano_gl_viewport.js"' not in editor_js
        assert 'from "./pano_gl_viewport.js"' not in runtime_js
        assert 'from "./pano_gl_viewport.js"' not in preview_node_js
        assert "createPanoramaRenderCore" in editor_js
        assert "createPanoramaRenderCore" in runtime_js
        assert "createPanoramaRenderCore" in preview_node_js
        assert "renderToTarget(" in editor_js
        assert "renderToTarget(" in runtime_js
        assert "renderToTarget(" in preview_node_js

    def test_preview_node_grid_is_fallback_only(self):
        preview_js = self._web_source_path("pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert "if (!isRenderableMediaReady(img) || width <= 1 || height <= 1) {" in preview_js
        assert "if (!drawn) {" in preview_js
        assert preview_js.count("drawGrid(ctx, width, height);") == 2

    def test_editor_debug_probe_is_removed_from_normal_path(self):
        editor_js = self._web_source_path("pano_editor.js").read_text(encoding="utf-8")
        assert "function panoEditorDebug(" not in editor_js

    def test_preview_runtime_wheel_and_scheduler_guards(self):
        preview_js = self._web_source_path("pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'root.addEventListener("wheel"' in preview_js
        assert 'canvas.addEventListener("wheel"' not in preview_js
        assert "mousewheel" not in preview_js
        assert "DOMMouseScroll" not in preview_js
        assert "app?.canvas?.setDirty?.(true, true)" not in preview_js
        assert "lockGraphViewportSnapshot" not in preview_js
        assert "restoreGraphViewportSnapshot" not in preview_js
        assert "if (this.controller.applyWheelEvent(ev)) this.requestDraw();" not in preview_js
        assert 'this.root.setAttribute("data-capture-wheel", "true");' in preview_js
        assert 'this.root.setAttribute("tabindex", "0");' in preview_js
        assert "root.focus?.({ preventScroll: true });" in preview_js
        assert "this.inTick = false;" in preview_js
        assert "this.queuedDuringTick = false;" in preview_js

    def test_shared_runtime_discards_the_dormant_legacy_stickers_surface(self):
        runtime_js = self._web_source_path("pano_preview_runtime.js").read_text(encoding="utf-8")
        assert "function attachLegacyStickersPreview" not in runtime_js
        assert "legacy_draw_auto" not in runtime_js

    def test_stickers_without_preview_do_not_force_large_node_size(self):
        lifecycle_js = self._web_source_path("pano_editor_extension.js").read_text(encoding="utf-8")
        stickers_block = lifecycle_js.split('if (matchType === "PanoramaStickers") {', 1)[1].split(
            'ensureActionButtonWidget(node, buttonText, () => openEditor(node, "cutout"))',
            1,
        )[0]
        preview_block = stickers_block.split("if (enableStickersPreview) {", 1)[1]
        assert "attachStickers(node" in preview_block
        assert "node.size = [360, 260]" in preview_block

    def test_external_input_preview_contract_strings(self):
        from comfyui_pano_suite.node_runtime import NodeRuntime

        repo_root = Path(__file__).resolve().parent.parent
        editor_js = self._web_source_path("pano_editor.js").read_text(encoding="utf-8")
        nodes_py = (repo_root / "comfyui_pano_suite" / "nodes.py").read_text(encoding="utf-8")
        assert 'pano_sticker_input_images' in editor_js
        assert 'getLinkedInputImage(node, ["sticker_image"])' not in editor_js
        assert NodeRuntime().preview_contract("stickers_input")["image"] == "pano_sticker_input_images"
        assert 'pano_sticker_input_pose' in nodes_py
        assert 'pano_sticker_input_state_hash' in nodes_py
        assert 'comfyMedia.externalStateHash(node, stateRaw)' in editor_js
        assert 'hashStringSimple(JSON.stringify(inputPose))' not in editor_js
        assert 'sticker_state_json' in nodes_py

    def test_paint_rebuild_ui_scaffold_strings(self):
        editor_js = self._web_source_path("pano_editor.js").read_text(encoding="utf-8")
        css = self._web_runtime_path("pano_editor.css").read_text(encoding="utf-8")
        assert 'data-tool-rail' in editor_js
        assert 'data-tool-mode' in editor_js
        assert '.pano-paint-footer' in css
        assert 'pano-floating-bottom' not in editor_js
        assert '.pano-floating-left' in css
        assert '.pano-paint-footer' in css
        assert 'top: 50%;' in css
        assert 'Clear All Paint Data' in editor_js

    def test_no_new_active_preview_dependency_on_editor_core(self):
        editor_js = self._web_source_path("pano_editor.js").read_text(encoding="utf-8")
        runtime_js = self._web_source_path("pano_preview_runtime.js").read_text(encoding="utf-8")
        preview_node_js = self._web_source_path("pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'from "./pano_editor_core.js"' not in editor_js
        assert 'from "./pano_editor_core.js"' not in runtime_js
        assert 'from "./pano_editor_core.js"' not in preview_node_js

    def test_runtime_bundle_exists_and_has_content(self):
        bundle_js = self._web_runtime_path("panorama_suite.js").read_text(encoding="utf-8")
        self.assertGreater(len(bundle_js), 1000)

if __name__ == '__main__':
    unittest.main()
