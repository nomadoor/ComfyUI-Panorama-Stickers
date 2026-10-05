import json
from io import BytesIO
import shutil
import subprocess
from pathlib import Path

import numpy as np
import pytest
import torch
from PIL import Image


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

import folder_paths
from comfy_api.latest import Types

from comfyui_pano_suite.core import render as render_module
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaStudioNode, PanoSceneValue
from comfyui_pano_suite.scene_video import SceneVideo
from test_legacy_goldens import _golden_mismatch
from test_stickers_scene_video import _frames
from tools import bake_legacy_goldens
from tools.bake_legacy_goldens import ASSETS, FIXTURE_DIR, _painting, _stroke, build_background_erp


# Panorama Studio without a Camera: the Scene it builds, shot as the ERP from the World origin.
from tools.golden_png import read_png16


def _execute(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_size", "auto")
    return PanoramaStudioNode.execute(
        state_json="" if state is None else json.dumps(state),
        **inputs,
    ).result


EDITOR_SAVE_JS = """
import { readFileSync } from "node:fs";
import { editorStateText, parsePanoEditorState } from "./web_src/pano_editor_state.js";

process.stdout.write(editorStateText({ __panoSceneStateV2: true }, parsePanoEditorState(readFileSync(0, "utf8"))));
"""


def _save_from_editor(state_json: str) -> str:
    """The state_json the editor writes to Panorama Studio after opening `state_json`."""
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


def _run_saved_by_editor(coverage: str, stickers=(), painting=None):
    state = {"assets": ASSETS, "stickers": list(stickers)}
    if painting is not None:
        state["painting"] = painting
    saved = _save_from_editor(json.dumps(state))
    assert json.loads(saved)["version"] == 2
    result = PanoramaStudioNode.execute(
        bg_color="#00ff00", coverage=coverage, output_size="auto", state_json=saved, bg_media=build_background_erp(),
    ).result
    return result[0][0].numpy(), result[1][0].numpy()


@pytest.mark.parametrize("name", [name for name in bake_legacy_goldens.CASES if name.startswith("stickers_")])
def test_state_saved_by_the_editor_is_v2_and_reproduces_the_golden(name, monkeypatch):
    # The editor opens the golden case's v1 state and saves it as v2; the node renders what the editor shows.
    monkeypatch.setattr(bake_legacy_goldens, "_run_stickers", _run_saved_by_editor)
    image, mask = bake_legacy_goldens.CASES[name]()
    golden = bake_legacy_goldens.studio_golden(name)

    assert _golden_mismatch(image, read_png16(FIXTURE_DIR / f"{golden}.image.png")) is None
    assert _golden_mismatch(mask, read_png16(FIXTURE_DIR / f"{golden}.mask.png")) is None


def _solid(rgb, height=2, width=4, batch=1):
    return torch.tensor(rgb, dtype=torch.float32).expand(batch, height, width, 3).clone()


GREEN = torch.tensor([0.0, 1.0, 0.0])
RED = torch.tensor([1.0, 0.0, 0.0])


def test_outputs_are_first_frame_first_frame_mask_video_sticker_state_and_scene_in_order():
    image, mask, video, sticker_state, pano_scene = _execute({"version": 2, "timeline": {"fps": 30.0}}, bg_media=build_background_erp())

    assert image.shape == (1, 256, 512, 3) and image.dtype == torch.float32 and image.device.type == "cpu"
    assert mask.shape == (1, 256, 512) and float(mask.max()) == 0.0
    assert isinstance(video, SceneVideo)
    assert video.get_frame_rate() == 30 and video.get_frame_count() == 1 and video.get_dimensions() == (512, 256)
    assert isinstance(pano_scene, PanoSceneValue) and sticker_state == ""


def test_without_bg_media_the_output_is_bg_color_at_the_output_size():
    image, _mask, video, *_rest = _execute(output_size="1024", bg_color="#ff0000")

    assert image.shape == (1, 512, 1024, 3)
    assert torch.equal(image, RED.expand(1, 512, 1024, 3))
    assert video.get_frame_rate() == 24


def test_image_batch_background_maps_one_to_one_to_output_frames():
    bg = torch.stack([_solid([value, value, value])[0] for value in (0.1, 0.5, 0.9)])

    first, _mask, video, *_rest = _execute(bg_media=bg)
    image = video.get_components().images

    assert image.shape == (3, 2, 4, 3)
    assert torch.equal(first, image[:1])
    assert torch.allclose(image[:, 0, 0, 0], torch.tensor([0.1, 0.5, 0.9]))


def test_length_override_past_the_background_draws_bg_color():
    bg = _solid([0.5, 0.5, 0.5], batch=2)

    image = _frames(_execute({"version": 2, "timeline": {"length": 3}}, bg_media=bg))

    assert image.shape[0] == 3
    assert torch.allclose(image[1], bg[1])
    assert torch.equal(image[2], GREEN.expand(2, 4, 3))


def test_single_background_image_stays_for_the_whole_timeline():
    image = _frames(_execute({"version": 2, "timeline": {"length": 2}}, bg_media=_solid([0.5, 0.5, 0.5])))

    assert image.shape[0] == 2
    assert torch.allclose(image, torch.full((2, 2, 4, 3), 0.5))


def _column_of_red(image: torch.Tensor) -> float:
    row = image[0, image.shape[1] // 2]
    return float(torch.nonzero(torch.all(torch.isclose(row, RED), dim=-1)).float().mean()) / image.shape[2]


def test_port_sticker_is_appended_with_the_sticker_state_pose():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 90.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 20.0}})

    posed = _execute(output_size="1024", sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[0]
    default = _execute(output_size="1024", sticker=_solid([1.0, 0.0, 0.0]))[0]

    assert _column_of_red(posed) == pytest.approx(0.75, abs=0.01)
    assert _column_of_red(default) == pytest.approx(0.5, abs=0.01)
    # hFOV 30 by default: a 30 degree wide Sticker is 1/12 of a 360 ERP (its edge pixels are covered in part).
    assert float(torch.all(torch.isclose(default[0, 256], RED, atol=1 / 255), dim=-1).float().mean()) == pytest.approx(1 / 12, abs=0.005)


def test_port_sticker_in_the_state_keeps_its_pose_and_sticker_state_is_ignored():
    state = {"version": 2, "stickers": [{"id": "p", "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": -90.0}}, "size": {"value": {"hFOV_deg": 20.0}}}]}
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 90.0, "hFOV_deg": 20.0}})

    image = _execute(state, output_size="1024", sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[0]

    assert _column_of_red(image) == pytest.approx(0.25, abs=0.01)


def test_sticker_state_without_a_sticker_is_ignored():
    image = _execute(output_size="1024", sticker_state=json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 90.0}}))[0]

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

    image = _execute(_file_sticker_state("red.png"), output_size="1024")[0]

    assert _column_of_red(image) == pytest.approx(0.5, abs=0.01)


@pytest.mark.parametrize("filename, subfolder", [("../outside.png", ""), ("outside.png", "../.."), ("missing.png", "panorama_stickers")])
def test_file_source_outside_the_input_directory_is_not_read(tmp_path, monkeypatch, filename, subfolder):
    input_dir = tmp_path / "input" / "nested"
    input_dir.mkdir(parents=True)
    _write_png(tmp_path / "input" / "outside.png", (255, 0, 0))
    _write_png(tmp_path / "outside.png", (255, 0, 0))
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(input_dir))

    image = _execute(_file_sticker_state(filename, subfolder), output_size="1024")[0]

    assert torch.equal(image, GREEN.expand(1, 512, 1024, 3))


@pytest.mark.parametrize("name", ["scene", "sticker"])
def test_3d_files_neither_reader_takes_name_the_input(name):
    with pytest.raises(ValueError, match=f"3D file on the {name} input is neither a splat file .* nor a mesh file"):
        _execute(output_size="1024", **{name: Types.File3D(BytesIO(b"not a model"))})


def _count_render_calls(monkeypatch):
    counts = {"_sky_layers": 0, "_background": 0, "composite_frame": 0}
    for name in counts:
        original = getattr(render_module, name)

        def counted(*args, _name=name, _original=original, **kwargs):
            counts[_name] += 1
            return _original(*args, **kwargs)

        monkeypatch.setattr(render_module, name, counted)
    return counts


def test_execute_renders_only_the_first_frame(monkeypatch):
    counts = _count_render_calls(monkeypatch)
    bg = torch.stack([_solid([value, value, value])[0] for value in (0.1, 0.5, 0.9)])

    _execute({"version": 2, "timeline": {"length": 4}}, bg_media=bg)

    assert counts == {"_sky_layers": 1, "_background": 1, "composite_frame": 1}


def test_static_scene_renders_and_composites_once_for_all_frames(monkeypatch):
    state = {"version": 2, "timeline": {"length": 3}, "stickers": [{"id": "p", "source": {"kind": "port"}}]}
    video = _execute(state, bg_media=_solid([0.5, 0.5, 0.5]), sticker=_solid([1.0, 0.0, 0.0]))[2]
    counts = _count_render_calls(monkeypatch)

    image = video.get_components().images

    assert counts == {"_sky_layers": 1, "_background": 1, "composite_frame": 1}
    assert torch.equal(image[0], image[1]) and torch.equal(image[0], image[2])


def test_background_batch_reuses_the_sky_and_composites_each_frame(monkeypatch):
    bg = torch.stack([_solid([value, value, value])[0] for value in (0.1, 0.5, 0.9)])
    video = _execute({"version": 2, "timeline": {"length": 4}}, bg_media=bg)[2]
    counts = _count_render_calls(monkeypatch)

    video.get_components()

    assert counts == {"_sky_layers": 1, "_background": 3, "composite_frame": 4}


def _painted_scene(*direction_keyframes):
    sticker = {
        "id": "q",
        "source": {"kind": "port"},
        "direction": {"value": {"yaw_deg": 170.0, "pitch_deg": 20.0}, "keyframes": [
            {"frame": frame, "value": {"yaw_deg": yaw, "pitch_deg": 20.0}, "easing": "auto"} for frame, yaw in direction_keyframes
        ]},
        "roll": {"value": 30.0},
        "size": {"value": {"hFOV_deg": 50.0}},
    }
    painting = _painting(
        paint=[_stroke("red", "paint", [(0.9, 0.3), (0.98, 0.35), (0.05, 0.3)], 10, {"r": 1.0, "g": 0.1, "b": 0.1, "a": 1.0})],
        mask=[_stroke("mask", "mask", [(0.3, 0.5), (0.5, 0.45), (0.7, 0.5)], 20)],
    )
    return {"version": 2, "stickers": [sticker], "painting": painting}


def _render_state(state):
    sticker = torch.from_numpy(bake_legacy_goldens._quadrant_sticker()[None])
    return _execute(state, bg_media=build_background_erp(), sticker=sticker)


def test_first_frame_mask_is_the_mask_of_the_first_output_frame():
    first, mask, video = _render_state({**_painted_scene((0, 30.0), (2, 150.0)), "timeline": {"length": 3}})[:3]

    image = video.get_components().images
    still_image, still_mask = _render_state(_painted_scene((0, 30.0)))[:2]
    assert image.shape[0] == 3 and not torch.allclose(image[0], image[2], atol=1e-3)
    assert first.shape[0] == 1 and mask.shape[0] == 1
    assert float(mask.max()) > 0.5
    assert torch.allclose(first, still_image, atol=1e-6) and torch.allclose(mask, still_mask, atol=1e-6)


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


def _sticker_scene_video(state):
    return _execute(state, bg_media=_solid([0.5, 0.5, 0.5], height=64, width=128), sticker=_solid([1.0, 0.0, 0.0]))[2]


def _render_sticker_scene(state):
    return _sticker_scene_video(state).get_components().images


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
    state = _sky_sticker_scene(pose_keyframes=[(0, 0.0, 30.0, "hold"), (2, 90.0, 30.0, "auto")], opacity_keyframes=[(0, 0.5, "auto")])
    video = _sticker_scene_video(state)
    counts = _count_render_calls(monkeypatch)

    image = video.get_components().images

    assert counts == {"_sky_layers": 2, "_background": 1, "composite_frame": 2}
    assert torch.equal(image[0], image[1]) and torch.equal(image[2], image[3])


def test_sticker_moving_outside_its_clip_range_does_not_redraw_the_sky(monkeypatch):
    state = _sky_sticker_scene(pose_keyframes=[(0, 0.0, 30.0, "auto"), (3, 90.0, 30.0, "auto")], clip={"start": 0, "in": 0, "duration": 1})
    video = _sticker_scene_video(state)
    counts = _count_render_calls(monkeypatch)

    image = video.get_components().images

    assert counts["_sky_layers"] == 2
    assert torch.equal(image[1], image[3])


def test_equal_auto_keyframes_do_not_redraw_on_interpolation_noise(monkeypatch):
    # Between equal auto Keyframes the evaluator returns values like 30.00000000000001 instead of 30.0.
    def lane(value):
        return {"keyframes": [{"frame": frame, "value": value, "easing": "auto"} for frame in (0, 3, 6)]}

    state = {
        "version": 2,
        "timeline": {"length": 7},
        "stickers": [{"id": "s", "source": {"kind": "port"}, "direction": lane({"yaw_deg": 30.0, "pitch_deg": 10.0}), "roll": lane(0.0), "size": lane({"hFOV_deg": 30.0})}],
    }
    assert evaluate_scene_state(load_scene_state(json.dumps(state)), 1)["stickers"][0]["yaw_deg"] != 30.0
    video = _sticker_scene_video(state)
    counts = _count_render_calls(monkeypatch)

    image = video.get_components().images

    assert image.shape[0] == 7
    assert counts == {"_sky_layers": 1, "_background": 1, "composite_frame": 1}
