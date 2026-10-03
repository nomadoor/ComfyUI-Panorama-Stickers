import json

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaCutoutSceneNode, PanoramaStickersSceneNode, PanoramaStudioNode, PanoSceneValue
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


# --- Without a Camera: the ERP the new Stickers made (its goldens are the legacy Stickers' ones).

def _run_studio(coverage: str, stickers=(), painting=None):
    state = {"assets": ASSETS, "stickers": list(stickers)}
    if painting is not None:
        state["painting"] = painting
    result = _outputs(state, coverage=coverage, bg_media=build_background_erp())
    return result[0][0].numpy(), result[1][0].numpy()


@pytest.mark.parametrize("name", [name for name in bake_legacy_goldens.CASES if name.startswith("stickers_")])
def test_without_a_camera_the_output_reproduces_the_stickers_golden(name, monkeypatch):
    # The golden cases run the Stickers node on v1 states (no Camera); run the same cases through Studio.
    monkeypatch.setattr(bake_legacy_goldens, "_run_stickers", _run_studio)
    image, mask = bake_legacy_goldens.CASES[name]()

    assert _golden_mismatch(image, read_png16(FIXTURE_DIR / f"{name}.image.png")) is None
    assert _golden_mismatch(mask, read_png16(FIXTURE_DIR / f"{name}.mask.png")) is None


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


@pytest.mark.parametrize("output_size", ["1024", "auto"])
def test_without_a_camera_every_output_frame_matches_the_new_stickers(output_size):
    # The new Stickers is removed by #92; until then Studio without a Camera is the same node.
    inputs = {"bg_color": "#00ff00", "coverage": "360", "bg_media": build_background_erp(), "sticker": _solid([1.0, 0.0, 0.0])}
    state_json = json.dumps(_world_and_keyframed_state())
    stickers = PanoramaStickersSceneNode.execute(state_json=state_json, output_preset=output_size, **inputs)
    studio = PanoramaStudioNode.execute(state_json=state_json, output_size=output_size, **inputs)

    for index in range(3):
        assert torch.equal(studio.result[index] if index < 2 else studio.result[2].get_components().images,
                           stickers.result[index] if index < 2 else stickers.result[2].get_components().images)
    assert set(studio.ui) == set(stickers.ui)
    assert studio.result[4] == ""


def test_a_port_sticker_added_by_the_node_is_in_the_ui_as_for_stickers():
    ui = _studio(output_size="1024", sticker=_solid([1.0, 0.0, 0.0])).ui

    assert ui["pano_sticker_input_pose"] == [{"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 30.0,
                                              "keyframes": {"direction": [], "roll": [], "size": []}}]


def test_an_empty_state_has_no_camera():
    image, mask, video, scene, sticker_state = _outputs(output_size="1024", bg_color="#ff0000")

    assert image.shape == (1, 512, 1024, 3) and torch.equal(image, torch.tensor([1.0, 0.0, 0.0]).expand(1, 512, 1024, 3))
    assert mask.shape == (1, 512, 1024) and isinstance(video, SceneVideo)
    assert isinstance(scene, PanoSceneValue) and sticker_state == ""


# --- With a perspective Camera: the new Cutout given the same size.

def _cutout_like_state(camera):
    return {**_world_and_keyframed_state(), "stickers": [
        {"id": "q", "source": _quadrants(), "direction": {"value": {"yaw_deg": 30.0, "pitch_deg": 10.0}},
         "size": {"value": {"hFOV_deg": 50.0}}},
    ], "camera": camera}


@pytest.mark.parametrize("coverage", ["360", "180"])
def test_with_a_perspective_camera_the_output_matches_the_new_cutout_of_the_same_size(coverage, monkeypatch):
    camera = _camera(aspect=1.5, fov=60.0, yaw_deg=30.0, pitch_deg=10.0, roll_deg=15.0)
    camera["rotation"]["keyframes"] = [
        {"frame": 0, "value": {"yaw_deg": 30.0, "pitch_deg": 10.0, "roll_deg": 15.0}, "easing": "auto"},
        {"frame": 2, "value": {"yaw_deg": 60.0, "pitch_deg": 0.0, "roll_deg": 0.0}, "easing": "auto"},
    ]
    state_json = json.dumps(_cutout_like_state(camera))
    bg = build_background_erp()
    studio = _outputs(state_json, bg_media=bg, bg_color="#000000", coverage=coverage, output_size="1024")
    size = tuple(studio[0].shape[2:0:-1])
    # f = 1024 / 2pi; width 2 f tan(30), height width / 1.5, both even.
    assert size == (188, 126)
    monkeypatch.setattr(nodes, "calculate_dimensions_from_megapixels", lambda *_args, **_kwargs: size)
    cutout = PanoramaCutoutSceneNode.execute(source=bg, coverage=coverage, output_megapixels=1.0, state_json=state_json).result

    assert torch.equal(studio[0], cutout[0]) and torch.equal(studio[1], cutout[2])
    assert torch.equal(studio[2].get_components().images, cutout[3].get_components().images)
    assert studio[4] == cutout[1] and json.loads(studio[4])["source_aspect"] == pytest.approx(188 / 126)


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
    assert erp[4] == ""


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
    size = nodes._studio_output_size(loaded, frames, output_size, int(coverage), bg, warnings)
    return size, warnings


LINEAR = [0.0, 0.0, 1.0, 1.0]
AUTO_WARNING = "output_size is auto, but bg_media is not connected; using 2048 instead."


@pytest.mark.parametrize("state, output_size, coverage, bg, expected, warnings", [
    # The ERP is as wide as the whole (360) ERP that output_size picks.
    (None, "1024", "360", None, (1024, 512), []),
    (None, "1536", "360", None, (1536, 768), []),
    (None, "4096", "360", None, (4096, 2048), []),
    (None, "2048", "180", None, (1024, 1024), []),
    # auto: the bg_media width over 360 degrees, or 2048 without bg_media. A 360 ERP is W/2 high and does not take
    # the bg_media height, so a background that is not 2:1 gives another height than the new Stickers.
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


def test_auto_with_a_180_bg_media_doubles_its_width_for_the_whole_erp():
    camera = {"version": 2, "camera": _camera(fov=90.0)}

    image = _outputs(camera, bg_media=_solid([0.5, 0.5, 0.5], height=64, width=64), coverage="180")[0]

    # f = 128 / 2pi: 2 f tan(45) = 40.7.
    assert image.shape == (1, 40, 40, 3)


# --- Outputs.

def test_sticker_state_is_the_cutout_one_only_for_a_perspective_camera():
    state = {"version": 2, "timeline": {"fps": 30.0}, "camera": _camera(fov=80.0, aspect=2.0, yaw_deg=40.0)}

    sticker_state = json.loads(_outputs(state, output_size="1024")[4])

    assert sticker_state["fps"] == 30.0 and sticker_state["source_aspect"] == 274 / 136
    assert sticker_state["camera"]["rotation"][0]["value"]["yaw_deg"] == 40.0
    assert sticker_state["camera"]["fov"][0]["value"] == 80.0
    assert _outputs({"version": 2, "camera": _camera("erp")}, output_size="1024")[4] == ""


def test_scene_output_is_the_stickers_pano_scene_without_the_camera():
    state = {**_world_and_keyframed_state(), "camera": _camera(yaw_deg=90.0)}
    bg = build_background_erp()

    scene = _outputs(state, bg_media=bg, sticker=_solid([1.0, 0.0, 0.0]), output_size="1024")[3]

    assert isinstance(scene, PanoSceneValue)
    assert scene.layers[-1].state["camera"] is None
    assert [item["id"] for item in scene.layers[-1].state["stickers"]] == ["s", "w"]
    assert scene.bg_media is bg and scene.coverage == 360 and scene.bg_color == (0.0, 1.0, 0.0)
    assert scene.fps == 24.0 and len(scene.frames) == 3
    assert scene.media_ui["pano_input_images"]
