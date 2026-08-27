import json
from pathlib import Path

import pytest


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required for workflow contract tests",
)

from comfyui_pano_suite.nodes import NODE_CLASS_MAPPINGS


WORKFLOW_DIR = Path(__file__).resolve().parents[1] / "example_workflows"
WORKFLOW_PATHS = tuple(sorted(WORKFLOW_DIR.glob("*.json")))
WIDGET_INPUTS = {
    "PanoramaStickers": [
        "output_preset",
        "coverage",
        "bg_color",
        "state_json",
        "fps",
    ],
    "PanoramaCutout": [
        "coverage",
        "state_json",
        "output_megapixels",
        "fps",
    ],
    "PanoramaPreview": ["coverage", "fps"],
}


def _load_workflow(path):
    with path.open(encoding="utf-8") as workflow_file:
        return json.load(workflow_file)


def _validate_widget_value(input_, value):
    if input_.io_type == "COMBO":
        assert value in input_.options
    elif input_.io_type == "STRING":
        assert isinstance(value, str)
    elif input_.io_type == "FLOAT":
        assert isinstance(value, (int, float)) and not isinstance(value, bool)
        if input_.min is not None:
            assert value >= input_.min
        if input_.max is not None:
            assert value <= input_.max


def _port_accepts_link(port_type, link_type):
    return (
        port_type == "*"
        or link_type == "*"
        or link_type in {candidate.strip() for candidate in port_type.split(",")}
    )


@pytest.mark.parametrize("workflow_path", WORKFLOW_PATHS, ids=lambda path: path.name)
def test_workflow_links_reference_compatible_slots(workflow_path):
    workflow = _load_workflow(workflow_path)
    nodes_by_id = {node["id"]: node for node in workflow["nodes"]}
    assert len(nodes_by_id) == len(workflow["nodes"])

    link_ids = set()
    for link_id, source_id, source_slot, target_id, target_slot, link_type in workflow["links"]:
        assert link_id not in link_ids
        link_ids.add(link_id)

        source = nodes_by_id[source_id]
        target = nodes_by_id[target_id]
        source_output = source["outputs"][source_slot]
        target_input = target["inputs"][target_slot]

        assert _port_accepts_link(source_output["type"], link_type)
        assert _port_accepts_link(target_input["type"], link_type)
        assert link_id in (source_output.get("links") or [])
        assert target_input.get("link") == link_id


@pytest.mark.parametrize("workflow_path", WORKFLOW_PATHS, ids=lambda path: path.name)
def test_saved_custom_nodes_match_current_v3_schemas(workflow_path):
    workflow = _load_workflow(workflow_path)
    custom_nodes = [
        node for node in workflow["nodes"] if node["type"] in NODE_CLASS_MAPPINGS
    ]
    assert custom_nodes

    for saved_node in custom_nodes:
        schema = NODE_CLASS_MAPPINGS[saved_node["type"]].define_schema()
        inputs_by_name = {input_.id: input_ for input_ in schema.inputs}
        schema_input_positions = {
            input_.id: position for position, input_ in enumerate(schema.inputs)
        }

        saved_input_positions = []
        for saved_input in saved_node.get("inputs", []):
            assert saved_input["name"] in inputs_by_name
            current_input = inputs_by_name[saved_input["name"]]
            assert saved_input["type"] == current_input.io_type
            saved_input_positions.append(schema_input_positions[current_input.id])
        assert saved_input_positions == sorted(saved_input_positions)

        assert len(saved_node.get("outputs", [])) == len(schema.outputs)
        for saved_output, current_output in zip(saved_node.get("outputs", []), schema.outputs):
            assert saved_output["name"] == (current_output.display_name or current_output.id)
            assert saved_output["type"] == current_output.io_type

        widget_ids = WIDGET_INPUTS[saved_node["type"]]
        widget_values = saved_node.get("widgets_values", [])
        assert len(widget_values) >= len(widget_ids)
        for input_id, value in zip(widget_ids, widget_values):
            _validate_widget_value(inputs_by_name[input_id], value)
