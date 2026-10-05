import json

import numpy as np
import pytest
import torch
from PIL import Image


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaStudioNode, PanoSceneValue
from comfyui_pano_suite.scene_video import SceneVideo
from scene_test_helpers import blob, blobs, center as _center
from test_legacy_goldens import _golden_mismatch
from test_stickers_scene_video import _cfr
from tools import bake_legacy_goldens
from tools.bake_legacy_goldens import ASSETS, FIXTURE_DIR, _painting, _stroke, build_background_erp
from tools.golden_png import read_png16


def _studio(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_size", "auto")
    state_json = state if isinstance(state, str) else ("" if state is None else json.dumps(state))
    return PanoramaStudioNode.execute(state_json=state_json, **inputs)


def _outputs(state=None, **inputs):
    return _studio(state, **inputs).result


def _solid(rgb, height=8, width=16, batch=1):
    return torch.tensor(rgb, dtype=torch.float32).expand(batch, height, width, 3).clone()


def _halves_erp(height=32, width=64):
    """Red facing yaw 0 (the middle of the ERP), blue behind."""
    erp = torch.zeros((1, height, width, 3))
    erp[..., 2] = 1.0
    erp[:, :, width // 4:3 * width // 4] = torch.tensor([1.0, 0.0, 0.0])
    return erp


def _camera(projection="perspective", aspect=1.0, fov=90.0, fov_keyframes=(), **rotation):
    camera = {"aspect": aspect, "rotation": {"value": rotation}, "fov": {"value": fov, "keyframes": list(fov_keyframes)}}
    if projection != "perspective":
        camera["projection"] = projection
    return camera


# --- Without a Camera: the ERP from the World origin (Studio's own goldens where it differs from the legacy Stickers).

def _run_studio(coverage: str, stickers=(), painting=None):
    state = {"assets": ASSETS, "stickers": list(stickers)}
    if painting is not None:
        state["painting"] = painting
    result = _outputs(state, coverage=coverage, bg_media=build_background_erp())
    return result[0][0].numpy(), result[1][0].numpy()


@pytest.mark.parametrize("name", [name for name in bake_legacy_goldens.CASES if name.startswith("stickers_")])
def test_without_a_camera_the_output_reproduces_the_golden(name, monkeypatch):
    # The golden cases run the legacy Stickers node on v1 states (no Camera); run the same cases through Studio.
    monkeypatch.setattr(bake_legacy_goldens, "_run_stickers", _run_studio)
    image, mask = bake_legacy_goldens.CASES[name]()
    golden = bake_legacy_goldens.studio_golden(name)

    assert _golden_mismatch(image, read_png16(FIXTURE_DIR / f"{golden}.image.png")) is None
    assert _golden_mismatch(mask, read_png16(FIXTURE_DIR / f"{golden}.mask.png")) is None


def _quadrants():
    return {"kind": "file", "data_url": ASSETS["quadrants"]["value"]}


def _world_and_keyframed_state():
    painting = _painting(mask=[_stroke("mask", "mask", [(0.3, 0.5), (0.5, 0.45), (0.7, 0.5)], 20)])
    return {
        "version": 2,
        "timeline": {"fps": 24.0, "length": 3},
        "stickers": [
            {"id": "s", "source": {"kind": "port"}, "direction": {"keyframes": [
                {"frame": 0, "value": {"yaw_deg": 20.0}, "easing": "auto"}, {"frame": 2, "value": {"yaw_deg": 80.0}, "easing": "auto"},
            ]}, "size": {"value": {"hFOV_deg": 40.0}}},
            {"id": "w", "placement": "world", "source": _quadrants(), "position": {"value": [0.5, 0.2, -2.0]}, "rotation": {"value": {"yaw_deg": 20.0}}},
        ],
        "painting": painting,
    }


def test_a_hidden_camera_shoots_as_no_camera():
    without = _world_and_keyframed_state()
    hidden = {**without, "camera": {**_camera(fov=60.0, aspect=2.0, yaw_deg=90.0), "visible": False}}
    inputs = {"bg_media": build_background_erp(), "sticker": _solid([1.0, 0.0, 0.0]), "output_size": "1024"}

    plain = _outputs(without, **inputs)
    shot = _outputs(hidden, **inputs)

    assert shot[0].shape == (1, 512, 1024, 3)
    assert torch.equal(shot[0], plain[0]) and torch.equal(shot[1], plain[1])
    assert torch.equal(shot[2].get_components().images, plain[2].get_components().images)
    assert shot[3] == ""
    # The Camera stays in the state; only the `scene` output drops it, as for a shown one.
    assert _size({"camera": {**_camera(fov=90.0), "visible": False}}, "1024") == ((1024, 512), [])


def test_hidden_painting_and_stickers_are_not_drawn():
    state = _world_and_keyframed_state()
    hidden = {**state, "painting_visible": False, "stickers": [{**item, "visible": False} for item in state["stickers"]]}
    inputs = {"bg_media": build_background_erp(), "sticker": _solid([1.0, 0.0, 0.0]), "output_size": "1024"}

    shown = _outputs(state, **inputs)
    # A hidden port Sticker stays in the state, so the node does not add the `sticker` input as a new one.
    empty = _outputs({"version": 2, "timeline": {"fps": 24.0, "length": 3}, "stickers": [{"id": "s", "source": {"kind": "port"}, "visible": False}]}, **inputs)
    drawn = _outputs(hidden, **inputs)

    assert not torch.equal(shown[0], empty[0]) and shown[1].any()
    assert torch.equal(drawn[0], empty[0]) and torch.equal(drawn[1], empty[1])


def test_a_port_sticker_added_by_the_node_is_in_the_ui():
    ui = _studio(output_size="1024", sticker=_solid([1.0, 0.0, 0.0])).ui

    assert ui["pano_sticker_input_pose"] == [{"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 30.0,
                                              "keyframes": {"direction": [], "roll": [], "size": []}}]


def test_an_empty_state_has_no_camera():
    image, mask, video, sticker_state, scene = _outputs(output_size="1024", bg_color="#ff0000")

    assert image.shape == (1, 512, 1024, 3) and torch.equal(image, torch.tensor([1.0, 0.0, 0.0]).expand(1, 512, 1024, 3))
    assert mask.shape == (1, 512, 1024) and isinstance(video, SceneVideo)
    assert isinstance(scene, PanoSceneValue) and sticker_state == ""


def test_the_camera_shoots_the_scene_and_keyframes_set_the_length():
    camera = _camera(yaw_deg=180.0)
    camera["rotation"]["keyframes"] = [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "hold"}, {"frame": 2, "value": {"yaw_deg": 180.0}, "easing": "hold"}]
    image, _mask, video, _scene, _sticker_state = _outputs({"version": 2, "camera": camera}, bg_media=_halves_erp(), output_size="1024")

    frames = video.get_components().images
    assert frames.shape[0] == 3
    assert torch.allclose(_center(image), torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(_center(frames, 2), torch.tensor([0.0, 0.0, 1.0]))


# --- With an erp Camera.

@pytest.mark.parametrize("coverage", ["360", "180"])
def test_an_erp_camera_at_the_origin_without_rotation_is_the_output_without_a_camera(coverage):
    without = _world_and_keyframed_state()
    with_camera = {**without, "camera": _camera("erp", fov=30.0, aspect=3.0)}
    inputs = {"bg_media": build_background_erp(), "sticker": _solid([1.0, 0.0, 0.0]), "coverage": coverage}

    plain = _outputs(without, **inputs)
    erp = _outputs(with_camera, **inputs)

    assert torch.equal(erp[0], plain[0]) and torch.equal(erp[1], plain[1])
    assert torch.equal(erp[2].get_components().images, plain[2].get_components().images)
    assert erp[3] == ""


def test_an_erp_camera_turns_the_erp_with_its_rotation():
    image = _outputs({"version": 2, "camera": _camera("erp", yaw_deg=180.0)}, bg_media=_halves_erp())[0]

    assert image.shape == (1, 32, 64, 3)
    assert torch.allclose(_center(image), torch.tensor([0.0, 0.0, 1.0]))


def _drawn_column(image):
    """The mean column (0..1) of the pixels that are not the green bg_color."""
    drawn = ~torch.all(torch.isclose(image[0], torch.tensor([0.0, 1.0, 0.0])), dim=-1)
    return float(torch.nonzero(drawn)[:, 1].float().mean()) / image.shape[2]


def test_an_erp_camera_sees_the_world_from_its_position():
    board = {"id": "w", "placement": "world", "source": _quadrants(), "position": {"value": [0.0, 0.0, -2.0]}}
    camera = _camera("erp")

    at_origin = _outputs({"version": 2, "camera": camera, "stickers": [board]}, output_size="1024")[0]
    camera["position"] = {"value": [1.0, 0.0, 0.0]}
    moved = _outputs({"version": 2, "camera": camera, "stickers": [board]}, output_size="1024")[0]

    # The board ahead stays in the middle from the origin, and is to the left of a Camera moved to the right.
    assert _drawn_column(at_origin) == pytest.approx(0.5, abs=0.01)
    assert _drawn_column(moved) < 0.45


def test_an_erp_camera_with_coverage_180_takes_its_front_hemisphere():
    behind = {"id": "b", "source": _quadrants(), "direction": {"value": {"yaw_deg": 180.0}}, "size": {"value": {"hFOV_deg": 40.0}}}
    state = {"version": 2, "camera": _camera("erp", yaw_deg=180.0), "stickers": [behind]}
    bg = _solid([1.0, 0.0, 0.0], height=32, width=32)

    image = _outputs(state, bg_media=bg, coverage="180")[0]

    # The Camera faces away from the 180 bg_media: the Sticker behind is in the middle and the background is not drawn.
    assert image.shape == (1, 32, 32, 3)
    assert not torch.any(torch.all(torch.isclose(image[0], torch.tensor([1.0, 0.0, 0.0])), dim=-1))
    assert not torch.allclose(_center(image), torch.tensor([0.0, 1.0, 0.0]))


def test_auto_takes_the_width_of_a_video_bg_media(tmp_path):
    video = _cfr(tmp_path, count=3)

    image, _mask, output, _scene, _sticker_state = _outputs(bg_media=video)
    shot = _outputs({"version": 2, "camera": _camera(fov=90.0)}, bg_media=video)[0]

    assert image.shape == (1, 32, 64, 3) and output.get_frame_count() == 3
    # f = 64 / 2pi: 2 f tan(45) = 20.4.
    assert shot.shape == (1, 20, 20, 3)


def test_warnings_of_a_3d_sticker_with_sticker_state_and_auto_come_in_order():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": 24, "camera": {"rotation": [{"frame": 0, "value": {"yaw_deg": 90.0}}]}})

    ui = _studio(sticker=blobs(blob((0.0, 0.0, -2.0), (1.0, 0.0, 0.0), size=0.3)), sticker_state=sticker_state).ui

    assert ui["pano_sticker_warnings"] == ["sticker_state places only sky Stickers; the 3D Sticker is placed 2 ahead of the origin.", AUTO_WARNING]


# --- The output size (ADR 0029).

def _size(state=None, output_size="auto", coverage="360", bg=None):
    warnings = []
    loaded = load_scene_state(json.dumps({"version": 2, **(state or {})}))
    frames = [(None, ((float(frame), None, None),)) for frame in range(3)]
    width, height, _reduced_from = nodes._studio_output_size(loaded, frames, output_size, int(coverage), bg, warnings)
    return (width, height), warnings


LINEAR = [0.0, 0.0, 1.0, 1.0]
AUTO_WARNING = "output_size is auto, but bg_media is not connected; using 2048 instead."


@pytest.mark.parametrize("state, output_size, coverage, bg, expected, warnings", [
    # The ERP is as wide as the whole (360) ERP that output_size picks.
    (None, "1024", "360", None, (1024, 512), []),
    (None, "1536", "360", None, (1536, 768), []),
    (None, "4096", "360", None, (4096, 2048), []),
    (None, "2048", "180", None, (1024, 1024), []),
    # auto: the bg_media width over 360 degrees, or 2048 without bg_media. A 360 ERP is W/2 high and does not take
    # the bg_media height, so a background that is not 2:1 gives another height than the legacy Stickers.
    (None, "auto", "360", (300, 600), (600, 300), []),
    (None, "auto", "360", (200, 600), (600, 300), []),
    (None, "auto", "180", (512, 512), (512, 512), []),
    (None, "auto", "360", None, (2048, 1024), [AUTO_WARNING]),
    (None, "auto", "180", None, (1024, 1024), [AUTO_WARNING]),
    # An erp Camera follows the same rule.
    ({"camera": _camera("erp", fov=150.0)}, "2560", "360", None, (2560, 1280), []),
    ({"camera": _camera("erp")}, "auto", "180", (256, 256), (256, 256), []),
    # perspective: 2 f tan(hFOV_max / 2) with f = width / 2pi, height by the aspect, even.
    ({"camera": _camera(fov=90.0)}, "1024", "360", None, (326, 326), []),
    ({"camera": _camera(fov=90.0, aspect=16 / 9)}, "2048", "360", None, (652, 366), []),
    ({"camera": _camera(fov=60.0, aspect=0.5)}, "auto", "180", (512, 512), (188, 376), []),
    ({"camera": _camera(fov=90.0)}, "auto", "360", None, (652, 652), [AUTO_WARNING]),
    # hFOV_max is the widest hFOV over the Timeline's frames.
    ({"camera": _camera(fov_keyframes=[{"frame": 0, "value": 60.0, "easing": "auto"}, {"frame": 2, "value": 120.0, "easing": "auto"}])},
     "1024", "360", None, (564, 564), []),
    ({"camera": _camera(fov_keyframes=[{"frame": 0, "value": 60.0, "easing": LINEAR}, {"frame": 4, "value": 120.0, "easing": LINEAR}])},
     "1024", "360", None, (326, 326), []),
    # The long side is capped at 4096, keeping the aspect.
    ({"camera": _camera(fov=150.0, aspect=4.0)}, "4096", "360", None, (4096, 1024),
     ["The Camera output would be 4866x1216; it is reduced to 4096x1024 (the longest side is at most 4096)."]),
    ({"camera": _camera(fov=1.0, aspect=100.0)}, "1024", "360", None, (2, 2), []),
])
def test_output_size_table(state, output_size, coverage, bg, expected, warnings):
    bg_image = None if bg is None else torch.zeros((1, bg[0], bg[1], 3))

    assert _size(state, output_size, coverage, bg_image) == (expected, warnings)


def test_auto_without_bg_media_warns_in_the_result():
    result = _studio(output_size="auto")

    assert result.result[0].shape == (1, 1024, 2048, 3)
    assert result.ui["pano_sticker_warnings"] == [AUTO_WARNING]


def test_the_ui_reports_the_bg_media_width_that_auto_reads():
    # The node surface shows the size before a run; the editor's MP4 of a VIDEO may be smaller than the VIDEO.
    assert _studio(output_size="1024", bg_media=_solid([0.5, 0.5, 0.5], height=16, width=48)).ui["pano_bg_width"] == [48]
    assert _studio(output_size="1024").ui["pano_bg_width"] == [None]


def test_the_ui_reports_the_output_size_with_the_inputs_it_was_made_from():
    # An IMAGE batch of 3 sets the Timeline: the run reads hFOV_max at frame 2 (82.5), not at the Keyframe at 8 that
    # the node surface sees in the state alone.
    keys = [{"frame": 0, "value": 60.0, "easing": LINEAR}, {"frame": 8, "value": 150.0, "easing": LINEAR}]
    state_json = json.dumps({"version": 2, "camera": _camera(fov_keyframes=keys)})
    result = _studio(state_json, output_size="1024", bg_media=_solid([0.5, 0.5, 0.5], height=16, width=32, batch=3))

    assert result.result[0].shape == (1, 286, 286, 3)
    assert result.ui["pano_output_size"] == [{"width": 286, "height": 286, "capped": False, "reduced_from": None,
                                              "key": nodes._studio_run_key(state_json, "1024", "360", "#00ff00")}]


def test_the_run_key_changes_with_the_state_and_the_widgets():
    key = nodes._studio_run_key("{}", "1024", "360", "#00ff00")

    assert key == nodes._studio_run_key("{}", "1024", "360", "#00ff00")
    # bg_color is in the output ERP the node surface shows.
    assert len({key, nodes._studio_run_key("{ }", "1024", "360", "#00ff00"), nodes._studio_run_key("{}", "2048", "360", "#00ff00"),
                nodes._studio_run_key("{}", "1024", "180", "#00ff00"), nodes._studio_run_key("{}", "1024", "360", "#ff0000")}) == 5


def _output_erp(result, key="pano_output_erp"):
    """The ui entry of the run's output ERP (or, with `key`, its perspective first frame) and its PNG, read from temp."""
    from comfyui_pano_suite.core.temp_files import TEMP_FILES, ensure_temp_root

    (entry,) = result.ui[key]
    path = ensure_temp_root() / entry["subfolder"] / entry["filename"]
    assert TEMP_FILES.is_registered(path)
    with Image.open(path) as png:
        return entry, np.asarray(png.convert("RGB"))


@pytest.mark.parametrize("coverage", ["360", "180"])
def test_an_erp_run_returns_its_output_at_full_size_for_the_node_surface(coverage):
    # The node surface shows the run's output in place of drawing the Scene again; a 180 output is the front half.
    result = _studio(coverage=coverage, output_size="1024", bg_media=build_background_erp())
    entry, png = _output_erp(result)

    assert entry["type"] == "temp" and entry["format"] == "image/png" and entry["coverage"] == int(coverage)
    image = result.result[0][0]
    assert png.shape == tuple(image.shape) == (512, 1024 * int(coverage) // 360, 3)
    assert np.array_equal(png, (image.clamp(0, 1) * 255 + 0.5).byte().numpy())


def test_an_erp_camera_returns_its_output_and_a_perspective_one_its_first_frame():
    erp = _studio({"version": 2, "camera": _camera("erp", yaw_deg=30.0)}, output_size="1024")
    entry, png = _output_erp(erp)
    assert entry["coverage"] == 360 and png.shape == (512, 1024, 3)
    assert "pano_output_frame" not in erp.ui

    # A perspective Camera's output is no ERP: the node surface shows its first frame as a flat image, at full size.
    shot = _studio({"version": 2, "camera": _camera(fov=90.0, aspect=2.0)}, output_size="1024", bg_media=build_background_erp())
    assert "pano_output_erp" not in shot.ui
    entry, png = _output_erp(shot, "pano_output_frame")
    image = shot.result[0][0]
    assert entry["type"] == "temp" and entry["format"] == "image/png" and "coverage" not in entry
    assert png.shape == tuple(image.shape) == (162, 326, 3)
    assert np.array_equal(png, (image.clamp(0, 1) * 255 + 0.5).byte().numpy())


@pytest.mark.parametrize("coverage", ["360", "180"])
def test_a_hidden_camera_returns_the_output_erp_as_no_camera_does(coverage):
    camera = {**_camera(fov=90.0, yaw_deg=30.0), "visible": False}
    entry, png = _output_erp(_studio({"version": 2, "camera": camera}, coverage=coverage, output_size="1024"))

    assert entry["coverage"] == int(coverage) and png.shape == (512, 1024 * int(coverage) // 360, 3)


def test_the_output_erp_takes_the_coverage_of_an_upstream_scene():
    upstream = _outputs(coverage="180", output_size="1024", bg_media=_solid([0.5, 0.5, 0.5], height=16, width=16))
    scene = next(value for value in upstream if isinstance(value, PanoSceneValue))
    entry, png = _output_erp(_studio(coverage="360", output_size="1024", scene=scene))

    assert entry["coverage"] == 180 and png.shape == (512, 512, 3)


def test_auto_with_a_180_bg_media_doubles_its_width_for_the_whole_erp():
    camera = {"version": 2, "camera": _camera(fov=90.0)}

    image = _outputs(camera, bg_media=_solid([0.5, 0.5, 0.5], height=64, width=64), coverage="180")[0]

    # f = 128 / 2pi: 2 f tan(45) = 40.7.
    assert image.shape == (1, 40, 40, 3)


# --- Outputs.

def test_sticker_state_holds_the_camera_only_for_a_perspective_camera():
    state = {"version": 2, "timeline": {"fps": 30.0}, "camera": _camera(fov=80.0, aspect=2.0, yaw_deg=40.0)}

    sticker_state = json.loads(_outputs(state, output_size="1024")[3])

    assert sticker_state["fps"] == 30.0 and sticker_state["source_aspect"] == 274 / 136
    assert sticker_state["camera"]["rotation"][0]["value"]["yaw_deg"] == 40.0
    assert sticker_state["camera"]["fov"][0]["value"] == 80.0
    assert _outputs({"version": 2, "camera": _camera("erp")}, output_size="1024")[3] == ""


def test_scene_output_is_the_built_scene_without_the_camera():
    state = {**_world_and_keyframed_state(), "camera": _camera(yaw_deg=90.0)}
    bg = build_background_erp()

    scene = _outputs(state, bg_media=bg, sticker=_solid([1.0, 0.0, 0.0]), output_size="1024")[4]

    assert isinstance(scene, PanoSceneValue)
    assert scene.layers[-1].state["camera"] is None
    assert [item["id"] for item in scene.layers[-1].state["stickers"]] == ["s", "w"]
    assert scene.bg_media is bg and scene.coverage == 360 and scene.bg_color == (0.0, 1.0, 0.0)
    assert scene.fps == 24.0 and len(scene.frames) == 3
    assert scene.media_ui["pano_input_images"]
