import gc
import json
import math
import weakref
from io import BytesIO

import numpy as np
import pytest
import torch
from PIL import Image


pytest.importorskip(
    "comfy_extras.nodes_gaussian_splat",
    reason="ComfyUI core is required to read MESH, SPLAT, and 3D files",
)

import folder_paths
from comfy_api.latest import Types
from comfy_extras.nodes_gaussian_splat import SplatToFile3D

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core import mesh_render
from comfyui_pano_suite.core.mesh_render import srgb_to_linear
from comfyui_pano_suite.core.world_render import ContentSource
from scene_test_helpers import batch_index_at_center, blob, blobs, camera_state, center, glb_positions, shoot, state_text, temp_entry_path, video_frames
from tools.bake_legacy_goldens import _painting, _stroke


RED = [1.0, 0.0, 0.0]
GREEN = [0.0, 1.0, 0.0]
BLUE = [0.0, 0.0, 1.0]
# A square 1 wide around its own origin, facing +Z.
SQUARE = [[-0.5, 0.5, 0.0], [0.5, 0.5, 0.0], [0.5, -0.5, 0.0], [-0.5, -0.5, 0.0]]
SQUARE_FACES = [[0, 3, 2], [0, 2, 1]]
# Where the World direction +X (yaw 90) is in the 1024 x 512 ERP of a Camera at rotation 0.
RIGHT = (256, 768)
# Where the node puts a new port Sticker of `_square()`: its bounding sphere (radius sqrt(0.5) around its origin)
# fitted to the node's view ahead of the origin (docs/editor-interaction.md, "3D の Sticker を収めて置く").
SQUARE_FIT = [0.0, 0.0, -math.sqrt(0.5) / math.sin(math.radians(nodes.PORT_3D_FIT_FOV_DEG) / 2.0) * 1.1]


def _square(rgb=RED, size=1.0, unlit=True):
    """A colored square; unlit (as a splat-derived MESH is marked), so that it shows its color where it is placed."""
    return Types.MESH(torch.tensor([SQUARE]) * size, torch.tensor([SQUARE_FACES]), vertex_colors=torch.tensor([[rgb] * 4]), unlit=unlit)


def _execute(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_size", "1024")
    return nodes.PanoramaStudioNode.execute(state_json=state_text(state), **inputs)


def _port(position=None, scale=None, keyframes=None, opacity=None, **rotation):
    keyframes = keyframes or {}
    values = {"position": position, "rotation": rotation, "scale": scale, "opacity": opacity}
    lanes = {name: {"value": value, "keyframes": keyframes.get(name, [])} for name, value in values.items()}
    return {"id": "p", "placement": "world", "source": {"kind": "port"}, **lanes}


def _frames(output):
    return output.result[2].get_components().images


def _close(pixel, rgb, atol=1e-3):
    return torch.allclose(pixel, torch.tensor(rgb), atol=atol)


def test_mesh_on_the_sticker_input_becomes_a_world_sticker_ahead_of_the_camera():
    output = _execute(sticker=_square())

    [port] = output.result[4].layers[-1].state["stickers"]
    assert port["placement"] == "world" and port["source"] == {"kind": "port"} and "z_index" not in port
    assert np.allclose(port["position"]["value"], SQUARE_FIT) and abs(SQUARE_FIT[2] + 1.397) < 1e-3
    assert port["rotation"]["value"] == {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0} and port["scale"]["value"] == 1.0
    image = output.result[0][0]
    # 1 wide at 1.397 ahead: about 39 degrees (112 pixels) around the output center.
    assert _close(image[256, 512], RED) and _close(image[256, 512 + 50], RED) and _close(image[256, 512 + 62], GREEN)
    # The editor adds the same Sticker, and loads the media from its editor file.
    [pose] = output.ui["pano_sticker_input_pose"]
    assert pose["placement"] == "world" and np.allclose(pose["position"], SQUARE_FIT)
    assert pose["rotation"] == port["rotation"]["value"] and pose["scale"] == 1.0
    assert output.ui["pano_sticker_meta"] == [{"kind": "mesh", "unlit": True}]
    assert np.allclose(np.sort(glb_positions(temp_entry_path(output.ui["pano_sticker_files"][0])), axis=0), np.sort(np.asarray(SQUARE), axis=0))
    assert "pano_sticker_input_images" not in output.ui


def test_a_new_3d_sticker_is_placed_from_the_origin_whatever_the_camera_lanes():
    camera = {"position": {"value": [1.0, 0.0, 0.0]}, "rotation": {"value": {"yaw_deg": 90.0, "pitch_deg": 30.0, "roll_deg": 10.0}}}

    port = _execute({"version": 2, "camera": camera}, sticker=_square()).result[4].layers[-1].state["stickers"][0]

    assert np.allclose(port["position"]["value"], SQUARE_FIT)
    assert port["rotation"]["value"] == {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}


def _state_camera():
    keys = [{"frame": 0, "value": {"yaw_deg": 70.0, "pitch_deg": 20.0, "roll_deg": 10.0}}, {"frame": 5, "value": {"yaw_deg": -40.0}}]
    return {
        "aspect": 1.5,
        "position": {"value": [1.0, 2.0, 3.0], "keyframes": [{"frame": 0, "value": [1.0, 2.0, 3.0]}, {"frame": 8, "value": [-2.0, 0.0, 1.0]}]},
        "rotation": {"value": {"yaw_deg": 70.0, "pitch_deg": 20.0, "roll_deg": 10.0}, "keyframes": keys},
        "fov": {"value": 40.0, "keyframes": [{"frame": 0, "value": 40.0}, {"frame": 3, "value": 70.0}]},
    }


def test_without_a_camera_the_output_is_taken_from_the_origin_at_rotation_0(tmp_path, monkeypatch):
    # ADR 0029: without a Camera, the ERP is taken from the World origin at rotation 0.
    input_dir = tmp_path / "input"
    (input_dir / "panorama_stickers").mkdir(parents=True)
    Image.fromarray(np.full((8, 8, 3), 255, dtype=np.uint8)).save(input_dir / "panorama_stickers" / "white.png")
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(input_dir))
    sky = {
        "id": "s",
        "source": {"kind": "file", "filename": "white.png", "subfolder": "panorama_stickers", "storage": "input"},
        "direction": {"value": {"yaw_deg": -90.0, "pitch_deg": 0.0}},
        "size": {"value": {"hFOV_deg": 20.0, "vFOV_deg": 20.0}},
    }
    painting = _painting(
        paint=[_stroke("paint", "paint", [(0.1, 0.3), (0.15, 0.3)], 10, {"r": 1.0, "g": 1.0, "b": 0.0, "a": 1.0})],
        mask=[_stroke("mask", "mask", [(0.9, 0.7), (0.95, 0.7)], 10)],
    )
    scene = Types.MESH(torch.tensor([SQUARE]) + torch.tensor([3.0, 0.0, -3.0]), torch.tensor([SQUARE_FACES]), vertex_colors=torch.tensor([[BLUE] * 4]), unlit=True)
    bg = torch.zeros((1, 64, 128, 3))
    bg[:, 32:] = 0.5
    state = {"version": 2, "stickers": [sky], "painting": painting}

    output = _execute(state, bg_media=bg, scene=scene, sticker=_square()).result

    assert output[2].get_frame_count() == 1
    image, mask = output[0][0], output[1][0]
    # From the origin at rotation 0: the world Sticker 2 ahead at the center, the `scene` square ahead and right (yaw 45).
    assert _close(image[256, 512], RED) and _close(image[256, 640], BLUE)
    # The sky Sticker, the paint, the mask, and the background stay where they are stored.
    assert _close(image[256, 256], [1.0, 1.0, 1.0]) and _close(image[154, 128], [1.0, 1.0, 0.0])
    assert float(mask[358, 947]) > 0.5 and float(mask[154, 128]) == 0.0
    assert _close(image[100, 900], [0.0, 0.0, 0.0]) and _close(image[400, 100], [0.5, 0.5, 0.5])


def _splat_file():
    return SplatToFile3D.execute(blobs(blob((0.0, 0.0, 0.0), RED, size=0.2)), "ply").result[0]


def _obj_file(path):
    lines = [f"v {x} {y} {z}" for x, y, z in SQUARE] + [f"f {a + 1} {b + 1} {c + 1}" for a, b, c in SQUARE_FACES]
    path.write_text("\n".join(lines) + "\n")
    return Types.File3D(str(path))


@pytest.mark.parametrize("kind", ["mesh", "splat", "mesh file", "splat file"])
def test_3d_stickers_are_drawn_at_their_transform(kind, tmp_path):
    sticker = {
        "mesh": lambda: _square(),
        "splat": lambda: blobs(blob((0.0, 0.0, 0.0), RED, size=0.2)),
        "mesh file": lambda: _obj_file(tmp_path / "square.obj"),
        "splat file": _splat_file,
    }[kind]()

    # Turned to face the Camera from +X.
    output = _execute({"version": 2, "stickers": [_port(position=[2.0, 0.0, 0.0], yaw_deg=-90.0)]}, sticker=sticker)

    image = output.result[0][0]
    red, green, blue = image[RIGHT].tolist()
    # An OBJ has no colors and no material: the core's bare gray, lit by the default lights.
    if kind == "mesh file":
        assert red == pytest.approx(green, abs=1e-6) and red == pytest.approx(blue, abs=1e-6) and 0.2 < red < 0.95
    else:
        assert red > 0.8 and green < 0.2 and blue < 0.2
    assert _close(image[256, 512], GREEN)
    assert output.ui["pano_sticker_meta"] == [{"kind": "splat"} if "splat" in kind else {"kind": "mesh", "unlit": kind == "mesh"}]


def test_3d_sticker_follows_its_keyframes():
    keyframes = {"position": [{"frame": 0, "value": [0.0, 0.0, -2.0]}, {"frame": 1, "value": [2.0, 0.0, 0.0]}],
                 "rotation": [{"frame": 0, "value": {"yaw_deg": 0.0}}, {"frame": 1, "value": {"yaw_deg": -90.0}}]}

    frames = _frames(_execute({"version": 2, "timeline": {"length": 2}, "stickers": [_port(keyframes=keyframes)]}, sticker=_square()))

    assert _close(frames[0, 256, 512], RED) and _close(frames[0][RIGHT], GREEN)
    assert _close(frames[1, 256, 512], GREEN) and _close(frames[1][RIGHT], RED)


def test_3d_sticker_opacity_blends_with_what_is_behind():
    image = _execute({"version": 2, "stickers": [_port(position=[0.0, 0.0, -2.0], opacity=0.5)]}, sticker=_square()).result[0][0]

    assert _close(image[256, 512], [0.5, 0.5, 0.0])


@pytest.mark.parametrize("distance, center", [(2.0, RED), (4.0, BLUE)])
def test_3d_sticker_is_ordered_by_depth_with_the_scene_content(distance, center):
    # The scene is a blue square 4 wide, 3 ahead.
    state = {"version": 2, "scene": {"position": {"value": [0.0, 0.0, -3.0]}}, "stickers": [_port(position=[0.0, 0.0, -distance])]}

    image = _execute(state, scene=_square(BLUE, size=4.0), sticker=_square()).result[0][0]

    assert _close(image[256, 512], center)
    # Beside the red square, inside the blue one.
    assert _close(image[256, 512 + 50], BLUE)


def test_3d_sticker_items_follow_the_output_frames():
    vertices = torch.tensor([SQUARE] * 2)
    colors = torch.zeros((2, 4, 3))
    # Linear values that show as red 0.1 and 0.2.
    colors[0, :, 0], colors[1, :, 0] = srgb_to_linear(torch.tensor([0.1, 0.2]))
    mesh = Types.MESH(vertices, torch.tensor([SQUARE_FACES] * 2), vertex_colors=colors, unlit=True)

    output = _execute(sticker=mesh)

    # Like an IMAGE batch: one item per output frame, and the Sticker ends with its last item.
    assert batch_index_at_center(_frames(output)) == [0, 1]
    assert [port_index for _bg, ((_frame, port_index, _scene),) in output.result[4].frames] == [0, 1]


def test_a_camera_shoots_the_3d_sticker_of_an_upstream_scene():
    pano_scene = _execute(sticker=_square()).result[4]

    ahead = video_frames(shoot(pano_scene, camera_state(hFOV_deg=10.0)))
    behind = video_frames(shoot(pano_scene, camera_state(yaw_deg=180.0, hFOV_deg=10.0), bg_color="#00ff00"))

    assert _close(center(ahead), RED) and _close(center(behind), GREEN)


def test_nothing_the_3d_sticker_uploads_outlives_its_render_pass(tmp_path, monkeypatch):
    uploaded = []
    upload = mesh_render._upload

    def recording(item, device):
        item = upload(item, device)
        uploaded.append(weakref.ref(item))
        return item

    monkeypatch.setattr(mesh_render, "_upload", recording)
    output = _execute({"version": 2, "timeline": {"length": 2}}, sticker=_square())
    video, pano_scene = output.result[2], output.result[4]

    video.get_components()
    video.save_to(str(tmp_path / "out.mp4"))
    gc.collect()

    # The first frame and both reads of the VIDEO uploaded the item; none is still held by the outputs.
    assert len(uploaded) >= 3 and all(ref() is None for ref in uploaded)
    assert not any(isinstance(source, ContentSource) for source in pano_scene.layers[-1].sources.stickers.values())


def test_same_3d_file_on_the_sticker_input_is_read_once_and_keeps_its_editor_files(tmp_path, monkeypatch):
    file = _obj_file(tmp_path / "square.obj")
    reads, writes = [], []
    read, write = nodes.read_mesh_file, nodes.write_editor_files
    monkeypatch.setattr(nodes, "read_mesh_file", lambda model: reads.append(model) or read(model))
    monkeypatch.setattr(nodes, "write_editor_files", lambda value, progress=None: writes.append(value) or write(value, progress))

    first = _execute(sticker=file)
    again = _execute(sticker=Types.File3D(str(tmp_path / "square.obj")))

    assert len(reads) == 1 and len(writes) == 1
    assert again.ui["pano_sticker_files"] == first.ui["pano_sticker_files"]
    assert again.result[4].layers[-1].port.media is first.result[4].layers[-1].port.media


def test_3d_media_replaces_a_stored_sky_port_sticker_by_a_world_one_and_then_stays():
    sky = {"id": "p", "source": {"kind": "port"}, "clip": {"start": 0, "duration": 5}, "locked": True,
           "direction": {"value": {"yaw_deg": 90.0}, "keyframes": [{"frame": 0, "value": {"yaw_deg": 90.0}}]}}

    output = _execute({"version": 2, "stickers": [sky]}, sticker=_square())

    [port] = output.result[4].layers[-1].state["stickers"]
    assert [port["id"], port["placement"], port["clip"]["duration"], port["locked"]] == ["p", "world", 5, True]
    assert np.allclose(port["position"]["value"], SQUARE_FIT)
    assert "direction" not in port
    assert _close(output.result[0][0, 256, 512], RED)
    # The editor replaces its Sticker the same way; run again with that state, the node changes nothing more.
    [pose] = output.ui["pano_sticker_input_pose"]
    assert pose["placement"] == "world" and pose["replace"] is True
    again = _execute({"version": 2, "stickers": [port]}, sticker=_square())
    assert "pano_sticker_input_pose" not in again.ui
    assert again.result[4].layers[-1].state["stickers"] == [port]


def test_sticker_state_does_not_place_a_3d_sticker():
    # A Camera that leaves the origin would hand a 2D Sticker a world pose; a 3D one still ignores it.
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": 24, "camera": {
        "rotation": [{"frame": 0, "value": {"yaw_deg": 90.0}}],
        "position": [{"frame": 0, "value": [1.0, 0.0, 0.0]}],
    }})

    output = _execute(sticker=_square(), sticker_state=sticker_state)

    [port] = output.result[4].layers[-1].state["stickers"]
    assert port["placement"] == "world" and np.allclose(port["position"]["value"], SQUARE_FIT)
    assert port["rotation"]["value"] == {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0} and port["scale"]["value"] == 1.0
    assert any("sticker_state places only 2D Stickers; the 3D Sticker is placed in front of the origin to fit the view." == message for message in output.ui["pano_sticker_warnings"])
    assert "pano_sticker_handoff" not in output.ui


def test_3d_files_neither_reader_takes_fail_on_the_sticker_input():
    with pytest.raises(ValueError, match="3D file on the sticker input is neither"):
        _execute(sticker=Types.File3D(BytesIO(b"not a model")))


def _two_splat_items():
    """Two items of one red gaussian, red 0.1 and 0.2, at the sticker's origin."""
    first, second = (blobs(blob((0.0, 0.0, 0.0), (red, 0.0, 0.0), size=0.3)) for red in (0.1, 0.2))
    return Types.SPLAT(*(torch.cat([getattr(first, name), getattr(second, name)]) for name in ("positions", "scales", "rotations", "opacities", "sh")))


def test_splat_sticker_items_follow_the_output_frames_through_the_video():
    output = _execute(sticker=_two_splat_items())

    assert [port_index for _bg, ((_frame, port_index, _scene),) in output.result[4].frames] == [0, 1]
    # The gaussian's center is opaque enough to read the item from its red.
    reds = [round(float(frame[256, 512, 0]) * 10) for frame in _frames(output)]
    assert reds == [1, 2]


def test_a_camera_shoots_the_splat_sticker_of_an_upstream_scene():
    pano_scene = _execute(sticker=blobs(blob((0.0, 0.0, 0.0), RED, size=0.3))).result[4]

    frames = video_frames(shoot(pano_scene, camera_state(hFOV_deg=10.0)))

    red, green, blue = center(frames).tolist()
    assert red > 0.8 and green < 0.2 and blue < 0.2


# 3D file `file` Sources (docs/studio-node.md, "3D ファイルの `file` の Source").

@pytest.fixture
def input_dir(tmp_path, monkeypatch):
    directory = tmp_path / "input"
    (directory / "3d").mkdir(parents=True)
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(directory))
    return directory


def _lit_glb(path):
    """A lit square GLB (colors and normals, no KHR_materials_unlit), as the core's save_glb writes it."""
    from comfy_extras.nodes_save_3d import save_glb

    colors = torch.tensor([[0.8, 0.3, 0.2]] * 4)
    normals = torch.tensor([[0.0, 0.0, 1.0]] * 4)
    path.write_bytes(save_glb(torch.tensor(SQUARE), torch.tensor(SQUARE_FACES), vertex_colors=colors, normals=normals))
    return path


def _file_sticker(filename, sticker_id="f", placement="world", position=(2.0, 0.0, 0.0), clip=None, **rotation):
    sticker = {"id": sticker_id, "placement": placement, "source": {"kind": "file", "filename": filename, "subfolder": "3d", "storage": "input"}}
    if placement == "world":
        sticker.update(position={"value": list(position)}, rotation={"value": rotation or {"yaw_deg": -90.0, "pitch_deg": 10.0}}, scale={"value": 1.5})
    if clip is not None:
        sticker["clip"] = clip
    return sticker


@pytest.mark.parametrize("make", ["glb", "splat"])
def test_a_3d_file_source_is_drawn_as_the_same_file_on_the_sticker_input(make, input_dir):
    name = "model.glb" if make == "glb" else "blob.ply"
    if make == "glb":
        _lit_glb(input_dir / "3d" / name)
    else:
        _splat_file().save_to(str(input_dir / "3d" / name))
    placed = _file_sticker(name)
    port = {**placed, "id": "p", "source": {"kind": "port"}}

    from_file = _execute({"version": 2, "stickers": [placed]})
    from_input = _execute({"version": 2, "stickers": [port]}, sticker=Types.File3D(str(input_dir / "3d" / name)))

    assert torch.equal(from_file.result[0], from_input.result[0])
    assert not _close(from_file.result[0][0][RIGHT], GREEN)
    # The editor asks the route for its file; the run shows none, and warns of nothing.
    assert "pano_sticker_files" not in from_file.ui and "pano_sticker_warnings" not in from_file.ui
    layer = from_file.result[4].layers[-1]
    assert set(layer.sources.contents) == {"f"} and "f" not in layer.sources.stickers
    assert layer.sources.contents["f"] is nodes._read_scene_file(Types.File3D(str(input_dir / "3d" / name)), "sticker")


def test_a_3d_file_source_is_read_once_across_runs(input_dir, monkeypatch):
    _lit_glb(input_dir / "3d" / "model.glb")
    reads = []
    read = nodes.read_mesh_file
    monkeypatch.setattr(nodes, "read_mesh_file", lambda file: reads.append(file) or read(file))
    state = {"version": 2, "stickers": [_file_sticker("model.glb")]}

    first = _execute(state)
    again = _execute(state)

    assert len(reads) == 1
    assert again.result[4].layers[-1].sources.contents["f"] is first.result[4].layers[-1].sources.contents["f"]


def test_a_3d_file_source_follows_its_clip_range_through_the_video(input_dir):
    _lit_glb(input_dir / "3d" / "model.glb")
    state = {"version": 2, "timeline": {"length": 3}, "stickers": [_file_sticker("model.glb", clip={"start": 1, "duration": 1})]}

    frames = _frames(_execute(state))

    assert [_close(frame[RIGHT], GREEN) for frame in frames] == [True, False, True]


def test_unreadable_3d_file_sources_are_not_drawn_and_warn(input_dir):
    (input_dir / "3d" / "model.fbx").write_bytes(b"Kaydara FBX Binary")
    (input_dir / "3d" / "points.ply").write_bytes(b"ply\nformat ascii 1.0\nelement vertex 1\nproperty float x\nproperty float y\nproperty float z\nend_header\n0 0 0\n")
    _lit_glb(input_dir / "3d" / "model.glb")
    stickers = [
        _file_sticker("missing.glb", "a"),
        _file_sticker("model.fbx", "b"),
        _file_sticker("points.ply", "c"),
        {**_file_sticker("model.glb", "d", placement="sky"), "direction": {"value": {"yaw_deg": 90.0}}},
        {**_file_sticker("model.glb", "e"), "source": {"kind": "file", "filename": "model.glb", "subfolder": "../input/3d", "storage": "output"}},
    ]

    output = _execute({"version": 2, "stickers": stickers})

    warnings = output.ui["pano_sticker_warnings"]
    assert "Could not read the 3D file 3d/missing.glb: the file was not found. Sticker a is not drawn." in warnings
    assert any(text.startswith("Could not read the 3D file 3d/model.fbx: Get3DComponents: .fbx parsing is not supported") and text.endswith(" Sticker b is not drawn.") for text in warnings)
    assert ("Could not read the 3D file 3d/points.ply: it is neither a splat file (a PLY with 3DGS properties, SPLAT, SPZ, KSPLAT) nor a mesh file "
            "(GLB, GLTF, OBJ, STL). Sticker c is not drawn.") in warnings
    assert "Could not read the 3D file 3d/model.glb: a sky Sticker cannot show a 3D file. Sticker d is not drawn." in warnings
    assert "Could not read the 3D file ../input/3d/model.glb: the file was not found. Sticker e is not drawn." in warnings
    assert output.result[4].layers[-1].sources.contents == {}
    assert _close(output.result[0][0][RIGHT], GREEN)


def test_other_errors_of_the_reader_stop_the_run(input_dir, monkeypatch):
    _lit_glb(input_dir / "3d" / "model.glb")

    def broken(file):
        raise RuntimeError("broken reader")

    monkeypatch.setattr(nodes, "read_mesh_file", broken)
    with pytest.raises(RuntimeError, match="broken reader"):
        _execute({"version": 2, "stickers": [_file_sticker("model.glb")]})


def test_a_downstream_scene_draws_the_3d_file_and_an_override_that_deletes_it_drops_it(input_dir):
    _lit_glb(input_dir / "3d" / "model.glb")
    upstream = _execute({"version": 2, "id": "up", "stickers": [_file_sticker("model.glb", position=(0.0, 0.0, -2.0), yaw_deg=0.0)]}).result[4]

    kept = shoot(upstream, camera_state(hFOV_deg=20.0), bg_color="#00ff00")
    deleted = shoot(upstream, {**camera_state(hFOV_deg=20.0), "upstream": [{"layer": "up", "fps": 24.0, "deleted": ["f"]}]}, bg_color="#00ff00")

    assert not _close(center(video_frames(kept)), GREEN)
    assert _close(center(video_frames(deleted)), GREEN)
    assert deleted[4].layers[0].sources.contents == {} and upstream.layers[0].sources.contents.keys() == {"f"}


def test_a_port_3d_sticker_and_a_3d_file_sticker_render_together_in_one_layer(input_dir):
    # `_render_frames` puts the port's content and the file's content in the same layer's sources for every frame.
    _lit_glb(input_dir / "3d" / "model.glb")
    state = {"version": 2, "timeline": {"length": 2}, "stickers": [_port(position=[0.0, 0.0, -2.0]), _file_sticker("model.glb")]}

    output = _execute(state, sticker=_square())

    for frame in (output.result[0][0], *_frames(output)):
        assert _close(frame[256, 512], RED) and not _close(frame[RIGHT], GREEN)
    layer = output.result[4].layers[-1]
    assert layer.port.is_3d and set(layer.sources.contents) == {"f"}


# The content box (docs/studio-node.md, "中身の箱").

def test_the_content_box_spans_every_item_of_a_mesh_without_the_padding():
    from comfyui_pano_suite.sticker_media import content_box

    vertices = torch.zeros((2, 4, 3))
    vertices[0, :3] = torch.tensor([[0.0, 0.0, -1.0], [1.0, 0.0, -1.0], [0.0, 1.0, -1.0]])
    vertices[1] = torch.tensor([[-2.0, 0.5, 3.0], [0.5, -1.0, 0.0], [0.0, 0.0, 0.5], [1.5, 0.0, 0.0]])
    # Item 0 has 3 vertices; its padding vertex at the origin is not content.
    vertices[1] += torch.tensor([0.0, 0.0, -5.0])
    mesh = Types.MESH(vertices, torch.tensor([[[0, 1, 2]], [[0, 1, 2]]]), vertex_counts=torch.tensor([3, 4]), face_counts=torch.tensor([1, 1]))

    assert content_box(mesh) == {"min": [-2.0, -1.0, -5.0], "max": [1.5, 1.0, -1.0]}


def test_the_content_box_of_a_splat_is_in_gltf_coordinates():
    from comfyui_pano_suite.sticker_media import content_box

    # 3DGS is Y down and Z forward; glTF turns it half a turn about X.
    splat = blobs(blob((1.0, 2.0, 3.0), RED), blob((-1.0, -2.0, 1.0), RED))

    assert content_box(splat) == {"min": [-1.0, -2.0, -3.0], "max": [1.0, 2.0, -1.0]}


def test_the_content_box_of_moge_frames_leaves_out_masked_pixels_and_empty_content_has_none():
    from comfyui_pano_suite.scene_files import moge_grid_mesh
    from comfyui_pano_suite.sticker_media import content_box

    points = torch.stack(torch.meshgrid(torch.linspace(-1.0, 1.0, 4), torch.linspace(-1.0, 1.0, 4), indexing="xy"), dim=-1)
    points = torch.cat([points, torch.full((4, 4, 1), 2.0)], dim=-1)[None]
    mask = torch.ones((1, 4, 4), dtype=torch.bool)
    mask[0, :, 0] = False
    geometry = {"points": points, "mask": mask, "image": torch.rand((1, 4, 4, 3)), "intrinsics": torch.eye(3)[None]}
    vertices = moge_grid_mesh(geometry, 0)[0]

    assert content_box(geometry) == {"min": vertices.amin(0).tolist(), "max": vertices.amax(0).tolist()}
    assert content_box(geometry)["min"][0] > -1.0
    empty = Types.MESH(torch.zeros((1, 3, 3)), torch.tensor([[[0, 1, 2]]]), vertex_counts=torch.tensor([0]), face_counts=torch.tensor([0]))
    assert content_box(empty) is None


def test_a_new_port_sticker_of_off_center_content_is_fitted_and_without_content_goes_2_ahead():
    # Content 4 wide around (3, 0, 0) of its own frame: the sphere's center goes ahead of the origin.
    shifted = _square(size=4.0)
    shifted.vertices = shifted.vertices + torch.tensor([3.0, 0.0, 0.0])
    empty = Types.MESH(torch.zeros((1, 3, 3)), torch.tensor([[[0, 1, 2]]]), vertex_counts=torch.tensor([0]), face_counts=torch.tensor([0]))

    fitted = _execute(sticker=shifted).result[4].layers[-1].state["stickers"][0]["position"]["value"]
    nothing = _execute(sticker=empty).result[4].layers[-1].state["stickers"][0]["position"]["value"]

    distance = math.sqrt(8.0) / math.sin(math.radians(nodes.PORT_3D_FIT_FOV_DEG) / 2.0) * 1.1
    assert np.allclose(fitted, [-3.0, 0.0, -distance])
    assert np.allclose(nothing, [0.0, 0.0, -2.0])
