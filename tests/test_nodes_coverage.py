import importlib
import sys
from types import ModuleType, SimpleNamespace
from unittest.mock import MagicMock, patch

import numpy as np


def _load_nodes_module():
    class _NodeOutput:
        def __init__(self, *result, ui=None):
            self.result = result
            self.ui = ui or {}

    class _Port:
        def __init__(self, kind, name, optional=False, **kwargs):
            self.kind = kind
            self.name = name
            self.optional = optional
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
        @classmethod
        def define_schema(cls):
            return _Schema()

    class _IoModule(SimpleNamespace):
        # Port types these tests do not look at, such as the new Stickers node's media ports.
        def __getattr__(self, name):
            return _PortFactory(name)

        def Custom(self, io_type):
            return _PortFactory(io_type)

    io_module = _IoModule(
        ComfyNode=_ComfyNode,
        Schema=_Schema,
        NodeOutput=_NodeOutput,
        Combo=_PortFactory("COMBO"),
        String=_PortFactory("STRING"),
        Image=_PortFactory("IMAGE"),
        Float=_PortFactory("FLOAT"),
        Int=_PortFactory("INT"),
        Mask=_PortFactory("MASK"),
        Hidden=SimpleNamespace(unique_id="UNIQUE_ID"),
    )
    comfy_api_module = ModuleType("comfy_api")
    comfy_api_latest_module = ModuleType("comfy_api.latest")
    comfy_api_latest_module.io = io_module
    comfy_api_latest_module.ComfyExtension = type("ComfyExtension", (), {})
    comfy_api_latest_module.Input = SimpleNamespace(Video=type("VideoInput", (), {}))
    comfy_api_latest_module.Types = SimpleNamespace(MESH=type("MESH", (), {}), SPLAT=type("SPLAT", (), {}), File3D=type("File3D", (), {}))
    fake_nodes = MagicMock()
    fake_nodes.PreviewImage = MagicMock(return_value=MagicMock(save_images=MagicMock(return_value={})))
    package = importlib.import_module("comfyui_pano_suite")
    original_nodes = package.__dict__.get("nodes")
    # Import a separate module instance so the stubs never leak into the real nodes module.
    with patch.dict(
        sys.modules,
        {
            "comfy_api": comfy_api_module,
            "comfy_api.latest": comfy_api_latest_module,
            "nodes": fake_nodes,
        },
    ):
        sys.modules.pop("comfyui_pano_suite.nodes", None)
        nodes_module = importlib.import_module("comfyui_pano_suite.nodes")
    if original_nodes is not None:
        package.nodes = original_nodes
    return nodes_module


def test_compose_display_list_to_overlay_rgba_keeps_workspace_shape():
    nodes_module = _load_nodes_module()
    layer = np.zeros((1024, 2048, 4), dtype=np.float32)
    layer[..., 1] = 1.0
    layer[..., 3] = 1.0
    state = {
        "coverage": 360,
        "painting": {"groups": [{"id": "group_1", "type": "strokeGroup", "actionGroupId": "ag_1", "z_index": 0}]},
    }

    out, used, stats = nodes_module._compose_display_list_to_overlay_rgba(
        state,
        2048,
        1024,
        painting_payload={"groups": {"ag_1": layer}},
    )

    assert used is True
    assert out.shape == (1024, 2048, 4)
    assert float(np.max(out[..., 1])) > 0.9
    assert stats["stroke_groups"] == 1
    assert stats["group_payload_hits"] == 1


def test_apply_overlay_coverage_to_rgba_for_180_crops_center_before_resize():
    nodes_module = _load_nodes_module()
    rgba = np.zeros((4, 8, 4), dtype=np.float32)
    rgba[:, :2, 0] = 1.0
    rgba[:, :2, 3] = 1.0
    rgba[:, 3:5, 1] = 1.0
    rgba[:, 3:5, 3] = 1.0
    rgba[:, 6:, 2] = 1.0
    rgba[:, 6:, 3] = 1.0

    out = nodes_module._apply_overlay_coverage_to_rgba(rgba, 180, 8, 8)

    assert out.shape == (8, 8, 4)
    assert float(np.max(out[..., 1])) > 0.9
    assert float(np.max(out[..., 0])) < 0.2
    assert float(np.max(out[..., 2])) < 0.2
