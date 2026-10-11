"""glTF skin, morph, and node animation (docs/render-contract.md, "glTF のアニメーション"; ADR 0043): the clips, poses,
and shapes three.js r184 makes of tests/fixtures/gltf_anim/anim.glb (tools/bake_gltf_animation.mjs bakes them), the
value check against the core's reading, and an animated 3D file through Panorama Studio and the editor's route."""
import json
import shutil
from pathlib import Path

import numpy as np
import pytest
import torch

pytest.importorskip("comfy_extras.mesh3d.fileio.gltf_read", reason="ComfyUI core is required to read glTF files")

import folder_paths
from comfy_api.latest import Types

from comfyui_pano_suite import nodes, routes
from comfyui_pano_suite.core import gltf_animation
from comfyui_pano_suite.core_adapters import load_gltf, read_accessor
from comfyui_pano_suite.scene_mesh import mesh_animation, read_mesh_file
from scene_test_helpers import state_text

FIXTURES = Path(__file__).resolve().parent / "fixtures" / "gltf_anim"
GLB = FIXTURES / "anim.glb"
BAKED = json.loads((FIXTURES / "three_r184.json").read_text(encoding="utf-8"))
TOLERANCE = BAKED["tolerance"]
SAMPLES = [(index, sample) for index, clip in enumerate(BAKED["clips"]) for sample in clip["samples"]]


@pytest.fixture(scope="module")
def mesh():
    return read_mesh_file(Types.File3D(str(GLB)))


def _matrix(elements):
    return np.array(elements, dtype=np.float64).reshape(4, 4).T


def test_the_clips_are_three_js_s_in_the_files_order(mesh):
    animation = mesh_animation(mesh)

    assert [(clip.name, clip.duration) for clip in animation.clips] == [(clip["name"], clip["duration"]) for clip in BAKED["clips"]]
    # The unnamed clip takes three.js's name; a state picks a clip by it, the first one without a name.
    assert animation.clips[2].name == "animation_2"
    assert animation.clip_index(None) == 0 and animation.clip_index("wave") == 1 and animation.clip_index("Wave") is None


@pytest.mark.parametrize("clip, sample", SAMPLES, ids=lambda value: str(value) if isinstance(value, int) else f"{value['seconds']}s-x{value['speed']}")
def test_a_frame_is_three_js_s_pose_and_shape(mesh, clip, sample):
    animation = mesh_animation(mesh)
    time = gltf_animation.clip_time(sample["seconds"], sample["speed"], animation.clips[clip].duration)
    pose = gltf_animation.evaluate(animation, clip, time)
    vertices, normals, _tangents = gltf_animation.deform(animation, gltf_animation.upload(animation, "cpu"), pose)

    assert time == pytest.approx(sample["clip_time"], abs=1e-12)
    for node, elements in enumerate(sample["nodes"]):
        np.testing.assert_allclose(pose.world[node], _matrix(elements), atol=TOLERANCE)
    for skin, joints in enumerate(sample["skins"]):
        for joint, elements in enumerate(joints):
            np.testing.assert_allclose(pose.skins[skin][joint], _matrix(elements), atol=TOLERANCE)
    for node, weights in sample["weights"].items():
        # A mesh without morph targets has no weights (an empty list for three.js).
        assert (int(node) in pose.weights) == bool(weights)
        if weights:
            np.testing.assert_allclose(pose.weights[int(node)], weights, atol=TOLERANCE)
    # Every vertex where three.js's own skinning and morphing put it, in the core's merged order.
    for node, primitive, start, end in animation.primitives:
        np.testing.assert_allclose(vertices[start:end].numpy(), np.reshape(sample["vertices"][str(node)][primitive], (-1, 3)), atol=TOLERANCE)
    assert torch.allclose(normals.norm(dim=-1), torch.ones(1))


def test_the_rest_values_are_the_core_s_mesh(mesh):
    """Tied by value: each primitive's own positions under its rest world matrix are the core's merged vertices."""
    animation = mesh_animation(mesh)
    gltf, buffers, prims = load_gltf(GLB.read_bytes(), None, lambda _key, _message: None)

    assert animation.positions.shape[0] == mesh.vertices.shape[1] == sum(prim["positions"].shape[0] for prim in prims)
    assert [end - start for _node, _primitive, start, end in animation.primitives] == [prim["positions"].shape[0] for prim in prims]


def test_a_reading_that_differs_from_the_core_s_is_refused():
    gltf, buffers, prims = load_gltf(GLB.read_bytes(), None, lambda _key, _message: None)
    prims[1] = {**prims[1], "positions": np.nextafter(prims[1]["positions"], np.float32(np.inf))}

    with pytest.raises(ValueError, match="primitive 1 .* cannot be drawn"):
        gltf_animation.read_animation(gltf, buffers, prims, read_accessor)


@pytest.mark.parametrize("seconds, speed, duration, expected", [
    (0.5, 1.0, 2.0, 0.5),
    (2.0, 1.0, 2.0, 0.0),
    (2.5, 1.0, 2.0, 0.5),
    (1.0, 1.5, 2.0, 1.5),
    (3.0, 1.5, 2.0, 0.5),
    (0.3, 1.0, 0.0, 0.0),
])
def test_clip_time_repeats_the_clip(seconds, speed, duration, expected):
    assert gltf_animation.clip_time(seconds, speed, duration) == pytest.approx(expected)


# --- Through Panorama Studio.

@pytest.fixture
def input_dir(tmp_path, monkeypatch):
    directory = tmp_path / "input"
    (directory / "3d").mkdir(parents=True)
    shutil.copyfile(GLB, directory / "3d" / "anim.glb")
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(directory))
    return directory


def _sticker(**extra):
    return {
        "id": "a", "placement": "world", "source": {"kind": "file", "filename": "anim.glb", "subfolder": "3d", "storage": "input"},
        "position": {"value": [0.0, -0.6, -3.0]}, "scale": {"value": 1.0}, **extra,
    }


def _run(item, length=10, **inputs):
    state = {"version": 2, "timeline": {"fps": 10, "length": length}, "camera": {"aspect": 1.0, "fov": {"value": 70.0}}, "stickers": [item]}
    output = nodes.PanoramaStudioNode.execute(state_json=state_text(state), bg_color="#000000", coverage="360", output_size="256", **inputs)
    return output, output.result[2].get_components().images


def test_a_placed_animated_file_plays_its_first_clip_along_the_timeline(input_dir):
    _output, frames = _run(_sticker())
    _output, named = _run(_sticker(animation={"clip": "walk", "speed": 1}))

    assert not torch.equal(frames[0], frames[4])
    assert torch.equal(frames, named)


def test_the_speed_scales_the_clip_time_and_the_clip_repeats(input_dir):
    _output, slow = _run(_sticker(animation={"clip": "wave", "speed": 1}))
    _output, fast = _run(_sticker(animation={"clip": "wave", "speed": 2}))

    # 0.6 s of the clip: frame 3 at speed 2, frame 6 at speed 1.
    assert torch.equal(fast[3], slow[6])
    # The 0.7 s clip repeats: 0.9 s shows what 0.2 s does.
    assert (slow[9] - slow[2]).abs().mean() < 1e-3 and not torch.equal(slow[2], slow[5])


def test_a_clip_name_the_file_lacks_plays_the_first_clip_and_warns(input_dir):
    output, missing = _run(_sticker(animation={"clip": "nope", "speed": 1}))
    _output, first = _run(_sticker())

    assert torch.equal(missing, first)
    assert any("no clip named 'nope'" in warning for warning in output.ui["pano_sticker_warnings"])


def test_the_scene_input_and_the_sticker_input_play_the_file_as_a_sticker_does(input_dir):
    file = Types.File3D(str(input_dir / "3d" / "anim.glb"))
    _output, placed = _run(_sticker(animation={"clip": "wave", "speed": 1.5}))
    port = {**_sticker(animation={"clip": "wave", "speed": 1.5}), "id": "p", "source": {"kind": "port"}}
    _output, on_port = _run(port, sticker=file)

    assert torch.equal(placed, on_port)
    output, scene = _run({**_sticker(), "visible": False}, scene=file)
    assert not torch.equal(scene[0], scene[4])
    assert output.ui["pano_scene_meta"][0]["animation"]["clips"][1] == {"name": "wave", "duration": BAKED["clips"][1]["duration"]}


def test_the_route_gives_the_editor_the_original_file_and_its_clips(input_dir):
    status, payload = routes._file_3d_response({"filename": "anim.glb", "subfolder": "3d", "storage": "input"})

    assert status == 200 and payload["kind"] == "mesh"
    assert payload["animation"] == {
        "source": {"filename": "anim.glb", "subfolder": "3d", "type": "input", "storage": "input", "format": "model/gltf-binary"},
        "clips": [{"name": clip["name"], "duration": clip["duration"]} for clip in BAKED["clips"]],
    }
