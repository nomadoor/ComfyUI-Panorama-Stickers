import asyncio
import importlib.util
from pathlib import Path

import pytest


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required for schema contract tests",
)

from comfy_api.latest import ComfyExtension, io

from comfyui_pano_suite.nodes import comfy_entrypoint


REPO_ROOT = Path(__file__).resolve().parent.parent


async def _load_extension_nodes():
    extension = await comfy_entrypoint()
    assert isinstance(extension, ComfyExtension)
    await extension.on_load()
    return await extension.get_node_list()


REGISTERED_NODES = {
    node_class.GET_SCHEMA().node_id: node_class
    for node_class in asyncio.run(_load_extension_nodes())
}


EXPECTED_SCHEMAS = {
    "PanoramaStickers": {
        "display_name": "Panorama Stickers",
        "inputs": [
            ("output_preset", "COMBO", False),
            ("coverage", "COMBO", False),
            ("bg_color", "STRING", False),
            ("state_json", "STRING", False),
            ("bg_erp", "IMAGE", True),
            ("sticker_image", "IMAGE", True),
            ("sticker_state", "STRING", True),
            ("fps", "FLOAT", False),
            ("audio", "AUDIO", True),
        ],
        "input_metadata": {
            "output_preset": {
                "default": "2048",
                "options": ["1024", "2048", "4096", "auto"],
                "force_input": None,
            },
            "coverage": {
                "default": "360",
                "options": ["360", "180"],
                "force_input": None,
            },
            "bg_color": {
                "default": "#00ff00",
                "multiline": False,
                "dynamic_prompts": None,
                "force_input": None,
            },
            "state_json": {
                "default": "",
                "multiline": True,
                "dynamic_prompts": False,
                "force_input": None,
            },
            "bg_erp": {},
            "sticker_image": {},
            "sticker_state": {
                "default": "",
                "multiline": False,
                "dynamic_prompts": False,
                "force_input": True,
            },
            "fps": {
                "default": 24.0,
                "min": 1.0,
                "max": 120.0,
                "step": 1.0,
                "force_input": None,
            },
            "audio": {},
        },
        "outputs": [
            ("cond_erp", "cond_erp", "IMAGE"),
            ("mask", "mask", "MASK"),
        ],
        "hidden": ["UNIQUE_ID"],
        "is_output_node": True,
    },
    "PanoramaCutout": {
        "display_name": "Panorama Cutout",
        "inputs": [
            ("erp_image", "IMAGE", False),
            ("coverage", "COMBO", False),
            ("state_json", "STRING", False),
            ("output_megapixels", "FLOAT", False),
            ("fps", "FLOAT", False),
            ("audio", "AUDIO", True),
        ],
        "input_metadata": {
            "erp_image": {},
            "coverage": {
                "default": "360",
                "options": ["360", "180"],
                "force_input": None,
            },
            "state_json": {
                "default": "",
                "multiline": True,
                "dynamic_prompts": False,
                "force_input": None,
            },
            "output_megapixels": {
                "default": 1.0,
                "min": 0.01,
                "max": None,
                "step": 0.05,
                "force_input": None,
            },
            "fps": {
                "default": 24.0,
                "min": 1.0,
                "max": 120.0,
                "step": 1.0,
                "force_input": None,
            },
            "audio": {},
        },
        "outputs": [
            ("rect_image", "rect_image", "IMAGE"),
            ("sticker_state_json", "sticker_state", "STRING"),
            ("mask", "mask", "MASK"),
        ],
        "hidden": ["UNIQUE_ID"],
        "is_output_node": True,
    },
    "PanoramaPreview": {
        "display_name": "Panorama Preview",
        "inputs": [
            ("erp_image", "IMAGE", False),
            ("coverage", "COMBO", False),
            ("fps", "FLOAT", False),
            ("audio", "AUDIO", True),
        ],
        "input_metadata": {
            "erp_image": {},
            "coverage": {
                "default": "360",
                "options": ["360", "180"],
                "force_input": None,
            },
            "fps": {
                "default": 24.0,
                "min": 1.0,
                "max": 120.0,
                "step": 1.0,
                "force_input": None,
            },
            "audio": {},
        },
        "outputs": [
            ("image", "image", "IMAGE"),
        ],
        "hidden": ["UNIQUE_ID"],
        "is_output_node": True,
    },
    "PanoramaSeamPrep": {
        "display_name": "Panorama Seam Prep",
        "inputs": [
            ("image", "IMAGE", False),
            ("seam_width_px", "INT", False),
            ("seam_center_offset_px", "INT", False),
            ("mask_blur_px", "INT", False),
        ],
        "input_metadata": {
            "image": {},
            "seam_width_px": {
                "default": 64,
                "min": 1,
                "max": 2048,
                "step": 1,
                "force_input": None,
            },
            "seam_center_offset_px": {
                "default": 0,
                "min": -2048,
                "max": 2048,
                "step": 1,
                "force_input": None,
            },
            "mask_blur_px": {
                "default": 10,
                "min": 0,
                "max": 256,
                "step": 1,
                "force_input": None,
            },
        },
        "outputs": [
            ("image", "image", "IMAGE"),
            ("mask", "mask", "MASK"),
            ("mask_blurred", "mask_blurred", "MASK"),
        ],
        "hidden": [],
        "is_output_node": False,
    },
}

COMPATIBILITY_METADATA_FIELDS = (
    "default",
    "options",
    "min",
    "max",
    "step",
    "multiline",
    "dynamic_prompts",
    "force_input",
)


def _public_input_metadata(input_):
    return {
        field: getattr(input_, field)
        for field in COMPATIBILITY_METADATA_FIELDS
        if hasattr(input_, field)
    }


def test_public_node_registration_remains_stable():
    assert set(REGISTERED_NODES) == set(EXPECTED_SCHEMAS)
    assert {
        node_id: node_class.GET_SCHEMA().display_name
        for node_id, node_class in REGISTERED_NODES.items()
    } == {
        node_id: expected["display_name"]
        for node_id, expected in EXPECTED_SCHEMAS.items()
    }

    for node_class in REGISTERED_NODES.values():
        assert issubclass(node_class, io.ComfyNode)


def test_package_root_registers_only_through_the_extension():
    spec = importlib.util.spec_from_file_location("panorama_stickers_root", REPO_ROOT / "__init__.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)

    # ComfyUI prefers NODE_CLASS_MAPPINGS over comfy_entrypoint when both exist.
    assert not hasattr(module, "NODE_CLASS_MAPPINGS")
    assert module.comfy_entrypoint is comfy_entrypoint
    assert (REPO_ROOT / module.WEB_DIRECTORY).is_dir()


@pytest.mark.parametrize("node_id", EXPECTED_SCHEMAS)
def test_v3_schema_preserves_public_ports(node_id):
    schema = REGISTERED_NODES[node_id].define_schema()
    expected = EXPECTED_SCHEMAS[node_id]

    assert schema.display_name == expected["display_name"]
    assert schema.category == "Panorama Suite"
    assert schema.is_output_node is expected["is_output_node"]
    assert [
        (input_.id, input_.io_type, input_.optional)
        for input_ in schema.inputs
    ] == expected["inputs"]
    assert {
        input_.id: _public_input_metadata(input_)
        for input_ in schema.inputs
    } == expected["input_metadata"]
    assert [
        (output.id, output.display_name, output.io_type)
        for output in schema.outputs
    ] == expected["outputs"]
    assert [hidden.value for hidden in schema.hidden] == expected["hidden"]


@pytest.mark.parametrize("node_id", ["PanoramaStickers", "PanoramaCutout"])
def test_internal_state_widget_is_advanced_in_v3_schema(node_id):
    schema = REGISTERED_NODES[node_id].define_schema()
    state_input = next(input_ for input_ in schema.inputs if input_.id == "state_json")

    assert state_input.advanced is True
    assert state_input.multiline is True
