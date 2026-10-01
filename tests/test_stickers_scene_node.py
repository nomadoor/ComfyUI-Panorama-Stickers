import json
import shutil
import subprocess
from pathlib import Path

import numpy as np
import pytest
import torch
from PIL import Image


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Stickers node",
)

import folder_paths
from comfy_api.latest import Types

from comfyui_pano_suite.core import render as render_module
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaStickersSceneNode, PanoSceneValue
from test_legacy_goldens import _golden_mismatch
from tools import bake_legacy_goldens
from tools.bake_legacy_goldens import ASSETS, FIXTURE_DIR, _painting, _stroke, build_background_erp
from tools.golden_png import read_png16


def _execute(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_preset", "auto")
    return PanoramaStickersSceneNode.execute(
        state_json="" if state is None else json.dumps(state),
        **inputs,
    ).result


def _run_new_node(coverage: str, stickers=(), painting=None):
    state = {"assets": ASSETS, "stickers": list(stickers)}
    if painting is not None:
        state["painting"] = painting
    result = _execute(state, coverage=coverage, bg_media=build_background_erp())
    return result[0][0].numpy(), result[1][0].numpy()


@pytest.mark.parametrize("name", [name for name in bake_legacy_goldens.CASES if name.startswith("stickers_")])
def test_v1_state_reproduces_legacy_golden(name, monkeypatch):
    # The golden cases call _run_stickers with v1 states; run the same cases through the new node.
    monkeypatch.setattr(bake_legacy_goldens, "_run_stickers", _run_new_node)
    image, mask = bake_legacy_goldens.CASES[name]()

    assert _golden_mismatch(image, read_png16(FIXTURE_DIR / f"{name}.image.png")) is None
    assert _golden_mismatch(mask, read_png16(FIXTURE_DIR / f"{name}.mask.png")) is None


EDITOR_SAVE_JS = """
import { readFileSync } from "node:fs";
import { editorStateText, parsePanoEditorState } from "./web_src/pano_editor_state.js";

process.stdout.write(editorStateText({ __panoSceneStateV2: true }, parsePanoEditorState(readFileSync(0, "utf8"))));
"""


def _save_from_editor(state_json: str) -> str:
    """The state_json the editor writes to PanoramaStickersNode after opening `state_json`."""
    if shutil.which("node") is None:
        pytest.skip("node is required to run the editor's state helpers")
    return subprocess.run(
        ["node", "--input-type=module", "-e", EDITOR_SAVE_JS],
        cwd=Path(__file__).resolve().parent.parent,
        input=state_json,
        text=True,
        capture_output=True,
        check=True,
    ).stdout


def _run_new_node_saved_by_editor(coverage: str, stickers=(), painting=None):
    state = {"assets": ASSETS, "stickers": list(stickers)}
    if painting is not None:
        state["painting"] = painting
    saved = _save_from_editor(json.dumps(state))
    assert json.loads(saved)["version"] == 2
    result = PanoramaStickersSceneNode.execute(
        bg_color="#00ff00", coverage=coverage, output_preset="auto", state_json=saved, bg_media=build_background_erp(),
    ).result
    return result[0][0].numpy(), result[1][0].numpy()


@pytest.mark.parametrize("name", [name for name in bake_legacy_goldens.CASES if name.startswith("stickers_")])
def test_state_saved_by_the_editor_is_v2_and_reproduces_legacy_golden(name, monkeypatch):
    # The editor opens the golden case's v1 state and saves it for the new node; the node renders what the editor shows.
    monkeypatch.setattr(bake_legacy_goldens, "_run_stickers", _run_new_node_saved_by_editor)
    image, mask = bake_legacy_goldens.CASES[name]()

    assert _golden_mismatch(image, read_png16(FIXTURE_DIR / f"{name}.image.png")) is None
    assert _golden_mismatch(mask, read_png16(FIXTURE_DIR / f"{name}.mask.png")) is None


def _solid(rgb, height=4, width=4, batch=1):
    return torch.tensor(rgb, dtype=torch.float32).expand(batch, height, width, 3).clone()


GREEN = torch.tensor([0.0, 1.0, 0.0])
RED = torch.tensor([1.0, 0.0, 0.0])


def test_outputs_are_image_mask_audio_fps_and_pano_scene_in_order():
    image, mask, audio, fps, pano_scene = _execute({"version": 2, "timeline": {"fps": 30.0}}, bg_media=build_background_erp())

    assert image.shape == (1, 256, 512, 3) and image.dtype == torch.float32 and image.device.type == "cpu"
    assert mask.shape == (1, 256, 512) and float(mask.max()) == 0.0
    assert audio is None
    assert fps == 30.0
    assert isinstance(pano_scene, PanoSceneValue)


def test_without_bg_media_the_output_is_bg_color_at_the_preset_size():
    image, _mask, _audio, fps, _scene = _execute(output_preset="1024", bg_color="#ff0000")

    assert image.shape == (1, 512, 1024, 3)
    assert torch.equal(image, RED.expand(1, 512, 1024, 3))
    assert fps == 24.0


def test_image_batch_background_maps_one_to_one_to_output_frames():
    bg = torch.stack([_solid([value, value, value])[0] for value in (0.1, 0.5, 0.9)])

    image = _execute(bg_media=bg)[0]

    assert image.shape == (3, 4, 4, 3)
    assert torch.allclose(image[:, 0, 0, 0], torch.tensor([0.1, 0.5, 0.9]))


def test_length_override_past_the_background_draws_bg_color():
    bg = _solid([0.5, 0.5, 0.5], batch=2)

    image = _execute({"version": 2, "timeline": {"length": 3}}, bg_media=bg)[0]

    assert image.shape[0] == 3
    assert torch.allclose(image[1], bg[1])
    assert torch.equal(image[2], GREEN.expand(4, 4, 3))


def test_single_background_image_stays_for_the_whole_timeline():
    image = _execute({"version": 2, "timeline": {"length": 2}}, bg_media=_solid([0.5, 0.5, 0.5]))[0]

    assert image.shape[0] == 2
    assert torch.allclose(image, torch.full((2, 4, 4, 3), 0.5))


def _column_of_red(image: torch.Tensor) -> float:
    row = image[0, image.shape[1] // 2]
    return float(torch.nonzero(torch.all(torch.isclose(row, RED), dim=-1)).float().mean()) / image.shape[2]


def test_port_sticker_is_appended_with_the_sticker_state_pose():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 90.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 20.0}})

    posed = _execute(output_preset="1024", sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[0]
    default = _execute(output_preset="1024", sticker=_solid([1.0, 0.0, 0.0]))[0]

    assert _column_of_red(posed) == pytest.approx(0.75, abs=0.01)
    assert _column_of_red(default) == pytest.approx(0.5, abs=0.01)
    # hFOV 30 by default: a 30 degree wide Sticker is 1/12 of a 360 ERP.
    assert float(torch.all(torch.isclose(default[0, 256], RED), dim=-1).float().mean()) == pytest.approx(1 / 12, abs=0.005)


def test_port_sticker_in_the_state_keeps_its_pose_and_sticker_state_is_ignored():
    state = {"version": 2, "stickers": [{"id": "p", "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": -90.0}}, "size": {"value": {"hFOV_deg": 20.0}}}]}
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 90.0, "hFOV_deg": 20.0}})

    image = _execute(state, output_preset="1024", sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[0]

    assert _column_of_red(image) == pytest.approx(0.25, abs=0.01)


def test_sticker_state_without_a_sticker_is_ignored():
    image = _execute(output_preset="1024", sticker_state=json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 90.0}}))[0]

    assert torch.equal(image, GREEN.expand(1, 512, 1024, 3))


def _write_png(path, rgb):
    path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(np.full((8, 8, 3), rgb, dtype=np.uint8)).save(path)


def _file_sticker_state(filename, subfolder="panorama_stickers"):
    source = {"kind": "file", "filename": filename, "subfolder": subfolder, "storage": "input"}
    return {"version": 2, "stickers": [{"id": "f", "source": source, "size": {"value": {"hFOV_deg": 20.0, "vFOV_deg": 20.0}}}]}


def test_file_source_is_read_from_the_input_directory(tmp_path, monkeypatch):
    input_dir = tmp_path / "input"
    _write_png(input_dir / "panorama_stickers" / "red.png", (255, 0, 0))
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(input_dir))

    image = _execute(_file_sticker_state("red.png"), output_preset="1024")[0]

    assert _column_of_red(image) == pytest.approx(0.5, abs=0.01)


@pytest.mark.parametrize("filename, subfolder", [("../outside.png", ""), ("outside.png", "../.."), ("missing.png", "panorama_stickers")])
def test_file_source_outside_the_input_directory_is_not_read(tmp_path, monkeypatch, filename, subfolder):
    input_dir = tmp_path / "input" / "nested"
    input_dir.mkdir(parents=True)
    _write_png(tmp_path / "input" / "outside.png", (255, 0, 0))
    _write_png(tmp_path / "outside.png", (255, 0, 0))
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(input_dir))

    image = _execute(_file_sticker_state(filename, subfolder), output_preset="1024")[0]

    assert torch.equal(image, GREEN.expand(1, 512, 1024, 3))


def _mesh():
    return Types.MESH(torch.zeros((1, 3, 3)), torch.tensor([[[0, 1, 2]]]))


def _splat():
    return Types.SPLAT(torch.zeros((1, 1, 3)), torch.ones((1, 1, 3)), torch.tensor([[[1.0, 0.0, 0.0, 0.0]]]), torch.ones((1, 1, 1)), torch.zeros((1, 1, 1, 3)))


@pytest.mark.parametrize("inputs, message", [
    ({"scene": _mesh()}, "MESH on the scene input"),
    ({"scene": _splat()}, "SPLAT on the scene input"),
    ({"scene": Types.File3D("model.glb")}, "3D file on the scene input"),
    ({"scene": {"points": torch.zeros((1, 2, 2, 3))}}, "MOGE_GEOMETRY on the scene input"),
    ({"sticker": _mesh()}, "MESH on the sticker input"),
    ({"sticker": _splat()}, "SPLAT on the sticker input"),
    ({"sticker": Types.File3D("model.ply")}, "3D file on the sticker input"),
])
def test_unsupported_inputs_name_what_is_not_supported(inputs, message):
    with pytest.raises(NotImplementedError, match=f"{message} is not supported yet"):
        _execute(output_preset="1024", **inputs)


def _count_render_calls(monkeypatch):
    counts = {"_render_sky": 0, "_background": 0, "composite_frame": 0}
    for name in counts:
        original = getattr(render_module, name)

        def counted(*args, _name=name, _original=original, **kwargs):
            counts[_name] += 1
            return _original(*args, **kwargs)

        monkeypatch.setattr(render_module, name, counted)
    return counts


def test_static_scene_renders_and_composites_once_for_all_frames(monkeypatch):
    counts = _count_render_calls(monkeypatch)
    state = {"version": 2, "timeline": {"length": 3}, "stickers": [{"id": "p", "source": {"kind": "port"}}]}

    image, mask = _execute(state, bg_media=_solid([0.5, 0.5, 0.5]), sticker=_solid([1.0, 0.0, 0.0]))[:2]

    assert counts == {"_render_sky": 1, "_background": 1, "composite_frame": 1}
    assert torch.equal(image[0], image[1]) and torch.equal(image[0], image[2])
    assert torch.equal(mask[0], mask[2])


def test_background_batch_reuses_the_sky_and_composites_each_frame(monkeypatch):
    counts = _count_render_calls(monkeypatch)
    bg = torch.stack([_solid([value, value, value])[0] for value in (0.1, 0.5, 0.9)])

    _execute({"version": 2, "timeline": {"length": 4}}, bg_media=bg)

    assert counts == {"_render_sky": 1, "_background": 3, "composite_frame": 4}


def test_sticker_state_with_several_camera_keyframes_is_not_supported_yet():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "camera": {"rotation": [
        {"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "auto"},
        {"frame": 10, "value": {"yaw_deg": 40.0}, "easing": "auto"},
    ]}})

    with pytest.raises(NotImplementedError, match="more than one Camera Keyframe"):
        _execute(output_preset="1024", sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)


def _camera_scene(position=None, **rotation):
    sticker = {
        "id": "q",
        "source": {"kind": "port"},
        "direction": {"value": {"yaw_deg": 170.0, "pitch_deg": 20.0}},
        "roll": {"value": 30.0},
        "size": {"value": {"hFOV_deg": 50.0}},
    }
    painting = _painting(
        paint=[_stroke("red", "paint", [(0.9, 0.3), (0.98, 0.35), (0.05, 0.3)], 10, {"r": 1.0, "g": 0.1, "b": 0.1, "a": 1.0})],
        mask=[_stroke("mask", "mask", [(0.3, 0.5), (0.5, 0.45), (0.7, 0.5)], 20)],
    )
    return {"version": 2, "camera": {"position": {"value": position}, "rotation": {"value": rotation}}, "stickers": [sticker], "painting": painting}


def _render_camera_scene(coverage="360", **camera):
    sticker = torch.from_numpy(bake_legacy_goldens._quadrant_sticker()[None])
    image, mask = _execute(_camera_scene(**camera), coverage=coverage, bg_media=build_background_erp(), sticker=sticker)[:2]
    return image[0], mask[0]


def test_camera_yaw_by_whole_columns_shifts_the_erp_image_and_mask():
    columns = 37
    image, mask = _render_camera_scene()
    turned_image, turned_mask = _render_camera_scene(yaw_deg=columns * 360.0 / image.shape[1])

    assert float(mask.max()) > 0.5
    assert torch.allclose(turned_image, torch.roll(image, -columns, dims=1), atol=1e-3)
    assert torch.allclose(turned_mask, torch.roll(mask, -columns, dims=1), atol=1e-3)


@pytest.mark.parametrize("coverage", ["360", "180"])
def test_camera_position_does_not_move_the_background_or_the_sky(coverage):
    image, mask = _render_camera_scene(coverage, yaw_deg=40.0, pitch_deg=-15.0, roll_deg=10.0)
    moved_image, moved_mask = _render_camera_scene(coverage, position=[3.0, -1.0, 2.0], yaw_deg=40.0, pitch_deg=-15.0, roll_deg=10.0)

    assert torch.equal(moved_image, image) and torch.equal(moved_mask, mask)


def _animated_camera_scene(keyframes, **state):
    scene = _camera_scene()
    scene["camera"]["rotation"]["keyframes"] = [
        {"frame": frame, "value": {"yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": 0.0}, "easing": easing}
        for frame, yaw, pitch, easing in keyframes
    ]
    return {**scene, **state}


def _render_state(state):
    sticker = torch.from_numpy(bake_legacy_goldens._quadrant_sticker()[None])
    return _execute(state, bg_media=build_background_erp(), sticker=sticker)[:2]


def test_camera_keyframes_set_the_length_and_turn_the_image_and_mask_per_frame():
    state = _animated_camera_scene([(0, 0.0, 0.0, "auto"), (2, 50.0, -10.0, "auto"), (4, 120.0, 20.0, "auto")])

    image, mask = _render_state(state)

    assert image.shape[0] == 5 and mask.shape[0] == 5
    for index in (1, 3, 4):
        camera = evaluate_scene_state(load_scene_state(json.dumps(state)), index)["camera"]
        still_image, still_mask = _render_camera_scene(**{key: camera[key] for key in ("position", "yaw_deg", "pitch_deg", "roll_deg")})
        assert torch.allclose(image[index], still_image, atol=1e-6)
        assert torch.allclose(mask[index], still_mask, atol=1e-6)
    assert not torch.allclose(mask[1], mask[3], atol=1e-3)


def test_hold_keyframe_cuts_the_camera_at_its_next_keyframe(monkeypatch):
    state = _animated_camera_scene([(0, 30.0, 0.0, "hold"), (2, 150.0, 0.0, "auto")], timeline={"length": 4})
    counts = _count_render_calls(monkeypatch)

    image, mask = _render_state(state)

    # Each held shot is composited once, at its first frame.
    assert counts["composite_frame"] == 2
    before, _ = _render_camera_scene(yaw_deg=30.0)
    after, after_mask = _render_camera_scene(yaw_deg=150.0)
    assert torch.equal(image[0], image[1]) and torch.allclose(image[1], before, atol=1e-6)
    assert torch.equal(image[2], image[3]) and torch.allclose(image[2], after, atol=1e-6)
    assert torch.allclose(mask[2], after_mask, atol=1e-6)


def _sky_sticker_scene(pose_keyframes=(), opacity_keyframes=(), clip=None):
    sticker = {
        "id": "s",
        "source": {"kind": "port"},
        "direction": {"keyframes": [{"frame": frame, "value": {"yaw_deg": yaw}, "easing": easing} for frame, yaw, _hfov, easing in pose_keyframes]},
        "size": {"value": {"hFOV_deg": 40.0}, "keyframes": [
            {"frame": frame, "value": {"hFOV_deg": hfov}, "easing": easing} for frame, _yaw, hfov, easing in pose_keyframes
        ]},
        "opacity": {"value": 1.0, "keyframes": [
            {"frame": frame, "value": value, "easing": easing} for frame, value, easing in opacity_keyframes
        ]},
    }
    if clip is not None:
        sticker["clip"] = clip
    return {"version": 2, "timeline": {"length": 4}, "stickers": [sticker]}


def _render_sticker_scene(state):
    return _execute(state, bg_media=_solid([0.5, 0.5, 0.5], height=64, width=128), sticker=_solid([1.0, 0.0, 0.0]))[0]


def test_sticker_lane_keyframes_are_drawn_per_frame():
    state = _sky_sticker_scene(
        pose_keyframes=[(0, -60.0, 30.0, "auto"), (3, 60.0, 50.0, "auto")],
        opacity_keyframes=[(0, 1.0, "auto"), (3, 0.25, "auto")],
    )

    image = _render_sticker_scene(state)

    assert image.shape[0] == 4
    for index in range(4):
        evaluated = evaluate_scene_state(load_scene_state(json.dumps(state)), index)["stickers"][0]
        still = _render_sticker_scene(_sky_sticker_scene(
            pose_keyframes=[(0, evaluated["yaw_deg"], evaluated["hFOV_deg"], "auto")],
            opacity_keyframes=[(0, evaluated["opacity"], "auto")],
        ))
        assert torch.allclose(image[index], still[0], atol=1e-6)
    assert not torch.allclose(image[0], image[3], atol=1e-3)


def test_held_sticker_keyframes_draw_the_sky_once_per_value(monkeypatch):
    counts = _count_render_calls(monkeypatch)
    state = _sky_sticker_scene(pose_keyframes=[(0, 0.0, 30.0, "hold"), (2, 90.0, 30.0, "auto")], opacity_keyframes=[(0, 0.5, "auto")])

    image = _render_sticker_scene(state)

    assert counts == {"_render_sky": 2, "_background": 1, "composite_frame": 2}
    assert torch.equal(image[0], image[1]) and torch.equal(image[2], image[3])


def test_sticker_moving_outside_its_clip_range_does_not_redraw_the_sky(monkeypatch):
    counts = _count_render_calls(monkeypatch)
    state = _sky_sticker_scene(pose_keyframes=[(0, 0.0, 30.0, "auto"), (3, 90.0, 30.0, "auto")], clip={"start": 0, "in": 0, "duration": 1})

    image = _render_sticker_scene(state)

    assert counts["_render_sky"] == 2
    assert torch.equal(image[1], image[3])


def test_equal_auto_keyframes_do_not_redraw_on_interpolation_noise(monkeypatch):
    # Between equal auto Keyframes the evaluator returns values like 30.00000000000001 instead of 30.0.
    def lane(value):
        return {"keyframes": [{"frame": frame, "value": value, "easing": "auto"} for frame in (0, 3, 6)]}

    state = {
        "version": 2,
        "camera": {"rotation": lane({"yaw_deg": 30.0, "pitch_deg": 10.0, "roll_deg": 0.0})},
        "stickers": [{"id": "s", "source": {"kind": "port"}, "direction": lane({"yaw_deg": 30.0, "pitch_deg": 10.0}), "roll": lane(0.0), "size": lane({"hFOV_deg": 30.0})}],
    }
    assert evaluate_scene_state(load_scene_state(json.dumps(state)), 1)["camera"]["yaw_deg"] != 30.0
    counts = _count_render_calls(monkeypatch)

    image = _render_sticker_scene(state)

    assert image.shape[0] == 7
    assert counts == {"_render_sky": 1, "_background": 1, "composite_frame": 1}
