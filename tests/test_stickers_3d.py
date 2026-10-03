import gc
import json
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
from comfyui_pano_suite.core.world_render import ContentSource
from scene_test_helpers import batch_index_at_center, blob, blobs, center, cutout, cutout_camera, cutout_frames, glb_positions, temp_entry_path
from tools.bake_legacy_goldens import _painting, _stroke


RED = [1.0, 0.0, 0.0]
GREEN = [0.0, 1.0, 0.0]
BLUE = [0.0, 0.0, 1.0]
# A square 1 wide around its own origin, facing +Z.
SQUARE = [[-0.5, 0.5, 0.0], [0.5, 0.5, 0.0], [0.5, -0.5, 0.0], [-0.5, -0.5, 0.0]]
SQUARE_FACES = [[0, 3, 2], [0, 2, 1]]
# Where the World direction +X (yaw 90) is in the 1024 x 512 ERP of a Camera at rotation 0.
RIGHT = (256, 768)


def _square(rgb=RED, size=1.0):
    return Types.MESH(torch.tensor([SQUARE]) * size, torch.tensor([SQUARE_FACES]), vertex_colors=torch.tensor([[rgb] * 4]))


def _execute(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_preset", "1024")
    return nodes.PanoramaStickersSceneNode.execute(state_json="" if state is None else json.dumps(state), **inputs)


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

    [port] = output.result[3].state["stickers"]
    assert port["placement"] == "world" and port["source"] == {"kind": "port"} and "z_index" not in port
    assert np.allclose(port["position"]["value"], [0.0, 0.0, -2.0])
    assert port["rotation"]["value"] == {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0} and port["scale"]["value"] == 1.0
    image = output.result[0][0]
    # 1 wide at 2 ahead: about 28 degrees (80 pixels) around the output center.
    assert _close(image[256, 512], RED) and _close(image[256, 512 + 30], RED) and _close(image[256, 512 + 50], GREEN)
    # The editor adds the same Sticker, and loads the media from its editor file.
    [pose] = output.ui["pano_sticker_input_pose"]
    assert pose["placement"] == "world" and np.allclose(pose["position"], [0.0, 0.0, -2.0])
    assert pose["rotation"] == port["rotation"]["value"] and pose["scale"] == 1.0
    assert output.ui["pano_sticker_meta"] == [{"kind": "mesh"}]
    assert np.allclose(np.sort(glb_positions(temp_entry_path(output.ui["pano_sticker_files"][0])), axis=0), np.sort(np.asarray(SQUARE), axis=0))
    assert "pano_sticker_input_images" not in output.ui


def test_a_new_3d_sticker_is_placed_from_the_origin_whatever_the_camera_lanes():
    camera = {"position": {"value": [1.0, 0.0, 0.0]}, "rotation": {"value": {"yaw_deg": 90.0, "pitch_deg": 30.0, "roll_deg": 10.0}}}

    port = _execute({"version": 2, "camera": camera}, sticker=_square()).result[3].state["stickers"][0]

    assert port["position"]["value"] == [0.0, 0.0, -2.0]
    assert port["rotation"]["value"] == {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}


def _state_camera():
    keys = [{"frame": 0, "value": {"yaw_deg": 70.0, "pitch_deg": 20.0, "roll_deg": 10.0}}, {"frame": 5, "value": {"yaw_deg": -40.0}}]
    return {
        "aspect": 1.5,
        "position": {"value": [1.0, 2.0, 3.0], "keyframes": [{"frame": 0, "value": [1.0, 2.0, 3.0]}, {"frame": 8, "value": [-2.0, 0.0, 1.0]}]},
        "rotation": {"value": {"yaw_deg": 70.0, "pitch_deg": 20.0, "roll_deg": 10.0}, "keyframes": keys},
        "fov": {"value": 40.0, "keyframes": [{"frame": 0, "value": 40.0}, {"frame": 3, "value": 70.0}]},
    }


def test_stickers_output_is_taken_from_the_origin_at_rotation_0_whatever_the_state_camera(tmp_path, monkeypatch):
    # ADR 0028: Stickers has no Camera; the `camera` of its state is neither drawn with nor counted for the length.
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
    scene = Types.MESH(torch.tensor([SQUARE]) + torch.tensor([3.0, 0.0, -3.0]), torch.tensor([SQUARE_FACES]), vertex_colors=torch.tensor([[BLUE] * 4]))
    bg = torch.zeros((1, 64, 128, 3))
    bg[:, 32:] = 0.5
    state = {"version": 2, "timeline": {"length": 2}, "stickers": [sky], "painting": painting}

    def run(state):
        return _execute(state, bg_media=bg, scene=scene, sticker=_square()).result

    plain = run(state)
    shot = run({**state, "camera": _state_camera()})
    del state["timeline"]
    lengths = [run(item)[2].get_frame_count() for item in (state, {**state, "camera": _state_camera()})]

    assert torch.equal(shot[0], plain[0]) and torch.equal(shot[1], plain[1])
    assert torch.equal(shot[2].get_components().images, plain[2].get_components().images)
    assert lengths == [1, 1]
    image, mask = plain[0][0], plain[1][0]
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
    # An OBJ has no colors: the core's bare gray.
    if kind == "mesh file":
        assert np.allclose([red, green, blue], [mesh_render.BARE_COLOR] * 3, atol=1e-3)
    else:
        assert red > 0.8 and green < 0.2 and blue < 0.2
    assert _close(image[256, 512], GREEN)
    assert output.ui["pano_sticker_meta"] == [{"kind": "splat" if "splat" in kind else "mesh"}]


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
    colors[0, :, 0], colors[1, :, 0] = 0.1, 0.2
    mesh = Types.MESH(vertices, torch.tensor([SQUARE_FACES] * 2), vertex_colors=colors)

    output = _execute(sticker=mesh)

    # Like an IMAGE batch: one item per output frame, and the Sticker ends with its last item.
    assert batch_index_at_center(_frames(output)) == [0, 1]
    assert [port_index for _frame, _bg, port_index, _scene in output.result[3].frames] == [0, 1]


def test_cutout_shoots_the_3d_sticker_of_a_pano_scene():
    pano_scene = _execute(sticker=_square()).result[3]

    ahead = cutout_frames(cutout(pano_scene, cutout_camera(hFOV_deg=10.0)))
    behind = cutout_frames(cutout(pano_scene, cutout_camera(yaw_deg=180.0, hFOV_deg=10.0)))

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
    video, pano_scene = output.result[2], output.result[3]

    video.get_components()
    video.save_to(str(tmp_path / "out.mp4"))
    gc.collect()

    # The first frame and both reads of the VIDEO uploaded the item; none is still held by the outputs.
    assert len(uploaded) >= 3 and all(ref() is None for ref in uploaded)
    assert not any(isinstance(source, ContentSource) for source in pano_scene.sources.stickers.values())


def test_same_3d_file_on_the_sticker_input_is_read_once_and_keeps_its_editor_files(tmp_path, monkeypatch):
    file = _obj_file(tmp_path / "square.obj")
    reads, writes = [], []
    read, write = nodes.read_mesh_file, nodes.write_editor_files
    monkeypatch.setattr(nodes, "read_mesh_file", lambda model: reads.append(model) or read(model))
    monkeypatch.setattr(nodes, "write_editor_files", lambda value: writes.append(value) or write(value))

    first = _execute(sticker=file)
    again = _execute(sticker=Types.File3D(str(tmp_path / "square.obj")))

    assert len(reads) == 1 and len(writes) == 1
    assert again.ui["pano_sticker_files"] == first.ui["pano_sticker_files"]
    assert again.result[3].port.media is first.result[3].port.media


def test_3d_media_replaces_a_stored_sky_port_sticker_by_a_world_one_and_then_stays():
    sky = {"id": "p", "source": {"kind": "port"}, "clip": {"start": 0, "duration": 5}, "locked": True,
           "direction": {"value": {"yaw_deg": 90.0}, "keyframes": [{"frame": 0, "value": {"yaw_deg": 90.0}}]}}

    output = _execute({"version": 2, "stickers": [sky]}, sticker=_square())

    [port] = output.result[3].state["stickers"]
    assert [port["id"], port["placement"], port["position"]["value"], port["clip"]["duration"], port["locked"]] == ["p", "world", [0.0, 0.0, -2.0], 5, True]
    assert "direction" not in port
    assert _close(output.result[0][0, 256, 512], RED)
    # The editor replaces its Sticker the same way; run again with that state, the node changes nothing more.
    [pose] = output.ui["pano_sticker_input_pose"]
    assert pose["placement"] == "world" and pose["replace"] is True
    again = _execute({"version": 2, "stickers": [port]}, sticker=_square())
    assert "pano_sticker_input_pose" not in again.ui
    assert again.result[3].state["stickers"] == [port]


def test_sticker_state_does_not_place_a_3d_sticker():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": 24, "camera": {"rotation": [{"frame": 0, "value": {"yaw_deg": 90.0}}]}})

    output = _execute(sticker=_square(), sticker_state=sticker_state)

    [port] = output.result[3].state["stickers"]
    assert port["placement"] == "world" and np.allclose(port["position"]["value"], [0.0, 0.0, -2.0])
    assert any("sticker_state places only sky Stickers" in message for message in output.ui["pano_sticker_warnings"])


def test_3d_files_neither_reader_takes_fail_on_the_sticker_input():
    with pytest.raises(ValueError, match="3D file on the sticker input is neither"):
        _execute(sticker=Types.File3D(BytesIO(b"not a model")))


def _two_splat_items():
    """Two items of one red gaussian, red 0.1 and 0.2, at the sticker's origin."""
    first, second = (blobs(blob((0.0, 0.0, 0.0), (red, 0.0, 0.0), size=0.3)) for red in (0.1, 0.2))
    return Types.SPLAT(*(torch.cat([getattr(first, name), getattr(second, name)]) for name in ("positions", "scales", "rotations", "opacities", "sh")))


def test_splat_sticker_items_follow_the_output_frames_through_the_video():
    output = _execute(sticker=_two_splat_items())

    assert [port_index for _frame, _bg, port_index, _scene in output.result[3].frames] == [0, 1]
    # The gaussian's center is opaque enough to read the item from its red.
    reds = [round(float(frame[256, 512, 0]) * 10) for frame in _frames(output)]
    assert reds == [1, 2]


def test_cutout_shoots_the_splat_sticker_of_a_pano_scene():
    pano_scene = _execute(sticker=blobs(blob((0.0, 0.0, 0.0), RED, size=0.3))).result[3]

    frames = cutout_frames(cutout(pano_scene, cutout_camera(hFOV_deg=10.0)))

    red, green, blue = center(frames).tolist()
    assert red > 0.8 and green < 0.2 and blue < 0.2
