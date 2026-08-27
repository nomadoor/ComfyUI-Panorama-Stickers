import pytest


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required for schema contract tests",
)

from comfy_api.latest import io

from comfyui_pano_suite.nodes import (
    NODE_CLASS_MAPPINGS,
    NODE_DISPLAY_NAME_MAPPINGS,
)


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
        "outputs": [],
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
    assert set(NODE_CLASS_MAPPINGS) == set(EXPECTED_SCHEMAS)
    assert NODE_DISPLAY_NAME_MAPPINGS == {
        node_id: expected["display_name"]
        for node_id, expected in EXPECTED_SCHEMAS.items()
    }

    for node_id, node_class in NODE_CLASS_MAPPINGS.items():
        assert issubclass(node_class, io.ComfyNode)
        assert node_class.define_schema().node_id == node_id


@pytest.mark.parametrize("node_id", EXPECTED_SCHEMAS)
def test_v3_schema_preserves_public_ports(node_id):
    schema = NODE_CLASS_MAPPINGS[node_id].define_schema()
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
    schema = NODE_CLASS_MAPPINGS[node_id].define_schema()
    state_input = next(input_ for input_ in schema.inputs if input_.id == "state_json")

    assert state_input.advanced is True
    assert state_input.multiline is True
