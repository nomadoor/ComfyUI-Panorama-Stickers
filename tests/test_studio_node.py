import base64
import io
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
from comfyui_pano_suite.core.scene_state import STICKER_NUMBER_MAX, load_scene_state
from comfyui_pano_suite.nodes import PanoramaStudioNode, PanoSceneValue
from comfyui_pano_suite.scene_video import SceneVideo
from scene_test_helpers import blob, blobs, center as _center, output_size
from test_legacy_goldens import _golden_mismatch
from tools import bake_legacy_goldens
from tools.bake_legacy_goldens import ASSETS, FIXTURE_DIR, _painting, _stroke, build_background_erp
from tools.golden_png import read_png16


def _studio(state=None, **inputs):
    """Panorama Studio's NodeOutput; 64 x 32 (a 360 ERP) unless `megapixels` and `multiple` say otherwise."""
    inputs.setdefault("background_color", "#00ff00")
    inputs.setdefault("background_range", "360")
    if "megapixels" not in inputs:
        inputs.update(output_size(64))
    state_json = state if isinstance(state, str) else ("" if state is None else json.dumps(state))
    return PanoramaStudioNode.execute(state_json=state_json, **inputs)


def _outputs(state=None, **inputs):
    """first_frame, first_frame_mask, video, sticker_state, scene: the outputs in the order before ADR 0048, which
    put `scene` first."""
    scene, *rest = _studio(state, **inputs).result
    return (*rest, scene)


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


# --- The default Camera: the ERP from the World origin (Studio's own goldens where it differs from the legacy Stickers).

@pytest.mark.parametrize("name", [name for name in bake_legacy_goldens.CASES if name.startswith("stickers_")])
def test_the_default_camera_reproduces_the_golden(name, monkeypatch):
    # The golden cases run the legacy Stickers node on v1 states (no Camera, the default Camera since ADR 0048); run
    # the same cases through Studio. The 180 case shoots with a Panorama 180 Camera and a 180 background.
    monkeypatch.setattr(bake_legacy_goldens, "_run_stickers", bake_legacy_goldens._run_studio)
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


def test_a_hidden_camera_still_shoots():
    # ADR 0048: hiding the Camera is for the view only; it shoots, sizes and hands its pose as when shown.
    camera = _camera(fov=60.0, aspect=2.0, yaw_deg=90.0)
    state = {**_world_and_keyframed_state(), "camera": camera}
    hidden = {**state, "camera": {**camera, "visible": False}}
    inputs = {"background": build_background_erp(), "sticker": _solid([1.0, 0.0, 0.0]), **output_size(64, 32)}

    shown = _outputs(state, **inputs)
    shot = _outputs(hidden, **inputs)

    assert shot[0].shape == (1, 32, 64, 3)
    assert torch.equal(shot[0], shown[0]) and torch.equal(shot[1], shown[1])
    assert torch.equal(shot[2].get_components().images, shown[2].get_components().images)
    assert shot[3] == shown[3] != ""
    assert _size({"camera": {**camera, "visible": False}}, 2.0) == _size({"camera": camera}, 2.0) == ((2048, 1024), [])


def test_hidden_painting_and_stickers_are_not_drawn():
    state = _world_and_keyframed_state()
    hidden = {**state, "painting_visible": False, "stickers": [{**item, "visible": False} for item in state["stickers"]]}
    inputs = {"background": build_background_erp(), "sticker": _solid([1.0, 0.0, 0.0]), **output_size(1024)}

    shown = _outputs(state, **inputs)
    # A hidden port Sticker stays in the state, so the node does not add the `sticker` input as a new one.
    empty = _outputs({"version": 2, "timeline": {"fps": 24.0, "length": 3}, "stickers": [{"id": "s", "source": {"kind": "port"}, "visible": False}]}, **inputs)
    drawn = _outputs(hidden, **inputs)

    assert not torch.equal(shown[0], empty[0]) and shown[1].any()
    assert torch.equal(drawn[0], empty[0]) and torch.equal(drawn[1], empty[1])


def test_a_port_sticker_added_by_the_node_is_in_the_ui():
    ui = _studio(sticker=_solid([1.0, 0.0, 0.0])).ui

    assert ui["pano_sticker_input_pose"] == [{"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 30.0,
                                              "keyframes": {"direction": [], "roll": [], "size": []}}]


def test_a_port_sticker_added_by_the_node_takes_its_id_from_the_counter():
    # sticker_2 was deleted: the counter is past it, so the port Sticker does not take its id again.
    state = {"version": 2, "stickers": [{"id": "sticker_1", "source": {"kind": "file", "filename": "missing.png"}}], "next_sticker_id": 3}

    scene = _outputs(state, sticker=_solid([1.0, 0.0, 0.0]))[4]

    assert [item["id"] for item in scene.layers[-1].state["stickers"]] == ["sticker_1", "sticker_3"]
    assert scene.layers[-1].state["next_sticker_id"] == 4


def test_a_port_sticker_added_at_the_largest_number_skips_an_id_in_use():
    # Ids past STICKER_NUMBER_MAX are not counted, so the counter can stop on one in use.
    used = f"sticker_{STICKER_NUMBER_MAX}"
    state = {"version": 2, "stickers": [{"id": used, "source": {"kind": "file", "filename": "missing.png"}}], "next_sticker_id": STICKER_NUMBER_MAX}

    scene = _outputs(state, sticker=_solid([1.0, 0.0, 0.0]))[4]

    assert [item["id"] for item in scene.layers[-1].state["stickers"]] == [used, f"sticker_{STICKER_NUMBER_MAX + 1}"]
    assert scene.layers[-1].state["next_sticker_id"] == STICKER_NUMBER_MAX


def test_the_outputs_mirror_the_inputs_with_scene_first():
    scene, image, mask, video, sticker_state = _studio(**output_size(1024), background_color="#ff0000").result

    assert isinstance(scene, PanoSceneValue)
    assert image.shape == (1, 512, 1024, 3) and torch.equal(image, torch.tensor([1.0, 0.0, 0.0]).expand(1, 512, 1024, 3))
    assert mask.shape == (1, 512, 1024) and isinstance(video, SceneVideo)
    # The default Camera is a Panorama one, which hands no pose.
    assert sticker_state == ""


def test_the_camera_shoots_the_scene_and_keyframes_set_the_length():
    camera = _camera(yaw_deg=180.0)
    camera["rotation"]["keyframes"] = [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "hold"}, {"frame": 2, "value": {"yaw_deg": 180.0}, "easing": "hold"}]
    image, _mask, video, _sticker_state, _scene = _outputs({"version": 2, "camera": camera}, background=_halves_erp(), **output_size(64, 64))

    frames = video.get_components().images
    assert frames.shape[0] == 3
    assert torch.allclose(_center(image), torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(_center(frames, 2), torch.tensor([0.0, 0.0, 1.0]))


# --- With an erp Camera.

@pytest.mark.parametrize("background_range", ["360", "180"])
def test_the_default_camera_is_an_erp_camera_at_the_origin_without_rotation(background_range):
    without = _world_and_keyframed_state()
    with_camera = {**without, "camera": _camera("erp", fov=30.0, aspect=3.0)}
    inputs = {"background": build_background_erp(), "sticker": _solid([1.0, 0.0, 0.0]), "background_range": background_range}

    plain = _outputs(without, **inputs)
    erp = _outputs(with_camera, **inputs)

    assert torch.equal(erp[0], plain[0]) and torch.equal(erp[1], plain[1])
    assert torch.equal(erp[2].get_components().images, plain[2].get_components().images)
    assert erp[3] == plain[3] == ""


def test_an_erp_camera_turns_the_erp_with_its_rotation():
    image = _outputs({"version": 2, "camera": _camera("erp", yaw_deg=180.0)}, background=_halves_erp())[0]

    assert image.shape == (1, 32, 64, 3)
    assert torch.allclose(_center(image), torch.tensor([0.0, 0.0, 1.0]))


def _drawn_column(image):
    """The mean column (0..1) of the pixels that are not the green bg_color."""
    drawn = ~torch.all(torch.isclose(image[0], torch.tensor([0.0, 1.0, 0.0])), dim=-1)
    return float(torch.nonzero(drawn)[:, 1].float().mean()) / image.shape[2]


def test_an_erp_camera_sees_the_world_from_its_position():
    board = {"id": "w", "placement": "world", "source": _quadrants(), "position": {"value": [0.0, 0.0, -2.0]}}
    camera = _camera("erp")

    at_origin = _outputs({"version": 2, "camera": camera, "stickers": [board]}, **output_size(1024))[0]
    camera["position"] = {"value": [1.0, 0.0, 0.0]}
    moved = _outputs({"version": 2, "camera": camera, "stickers": [board]}, **output_size(1024))[0]

    # The board ahead stays in the middle from the origin, and is to the left of a Camera moved to the right.
    assert _drawn_column(at_origin) == pytest.approx(0.5, abs=0.01)
    assert _drawn_column(moved) < 0.45


def test_an_erp_camera_with_erp_range_180_takes_its_front_hemisphere():
    behind = {"id": "b", "source": _quadrants(), "direction": {"value": {"yaw_deg": 180.0}}, "size": {"value": {"hFOV_deg": 40.0}}}
    state = {"version": 2, "camera": {**_camera("erp", yaw_deg=180.0), "erp_range": 180}, "stickers": [behind]}
    bg = _solid([1.0, 0.0, 0.0], height=32, width=32)

    image = _outputs(state, background=bg, background_range="180", **output_size(32, 32))[0]

    # The Camera faces away from the 180 background: the Sticker behind is in the middle and the background is not drawn.
    assert image.shape == (1, 32, 32, 3)
    assert not torch.any(torch.all(torch.isclose(image[0], torch.tensor([1.0, 0.0, 0.0])), dim=-1))
    assert not torch.allclose(_center(image), torch.tensor([0.0, 1.0, 0.0]))


def _halves(image):
    """The mean color of the left and the right half of the first frame."""
    width = image.shape[2]
    return image[0, :, : width // 2].mean(dim=(0, 1)), image[0, :, width // 2:].mean(dim=(0, 1))


def test_the_output_range_and_the_background_range_are_apart():
    # ADR 0048: the Camera's erp_range is what it shoots, background_range how far the background covers.
    green = torch.tensor([0.0, 1.0, 0.0])
    gray = _solid([0.5, 0.5, 0.5], height=16, width=16)
    panorama_180 = {"version": 2, "camera": {"projection": "erp", "erp_range": 180}}

    # A 180 output of a 360 background: the background's front half fills it.
    front = _outputs(panorama_180, background=_halves_erp(32, 64), background_range="360", **output_size(32, 32))[0]
    assert front.shape == (1, 32, 32, 3)
    assert torch.allclose(front[0, :, 4:-4], torch.tensor([1.0, 0.0, 0.0]).expand(32, 24, 3))
    # A 360 output of a 180 background: background_color behind it.
    full = _outputs(None, background=gray, background_range="180", **output_size(64))[0]
    assert full.shape == (1, 32, 64, 3)
    assert torch.allclose(full[0, :, 16:48], torch.full((32, 32, 3), 0.5))
    assert torch.equal(full[0, :, :16], green.expand(32, 16, 3)) and torch.equal(full[0, :, 48:], green.expand(32, 16, 3))
    # Both 180: the 180 background fills the 180 output, as the legacy nodes' 180 did.
    both = _outputs(panorama_180, background=gray, background_range="180", **output_size(32, 32))[0]
    assert torch.allclose(both[0], torch.full((32, 32, 3), 0.5))
    # Both 360: as before.
    assert torch.allclose(_halves(_outputs(None, background=_halves_erp(), **output_size(64))[0])[0], torch.tensor([0.5, 0.0, 0.5]), atol=0.02)


def test_warnings_of_a_3d_sticker_with_sticker_state_come_in_order():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": 24, "camera": {"rotation": [{"frame": 0, "value": {"yaw_deg": 90.0}}]}})

    ui = _studio(sticker=blobs(blob((0.0, 0.0, -2.0), (1.0, 0.0, 0.0), size=0.3)), sticker_state=sticker_state).ui

    assert ui["pano_sticker_warnings"] == ["sticker_state places only 2D Stickers; the 3D Sticker is placed in front of the origin to fit the view."]


# --- The output size (ADR 0048; the cases both sides read are in tests/fixtures/studio_output_size.json).

def _size(state=None, megapixels=2.0, multiple=8):
    warnings = []
    loaded = load_scene_state(json.dumps({"version": 2, **(state or {})}))
    width, height, _reduced_from = nodes._studio_output_size(loaded, megapixels, multiple, warnings)
    return (width, height), warnings


@pytest.mark.parametrize("state, megapixels, multiple, expected, warnings", [
    # The examples of docs/studio-node.md.
    (None, 2.0, 8, (2048, 1024), []),
    (None, 1.0, 8, (1456, 728), []),
    (None, 0.3, 8, (800, 400), []),
    ({"camera": _camera(aspect=16 / 9)}, 2.0, 8, (1928, 1088), []),
    ({"camera": {**_camera("erp"), "erp_range": 180}}, 2.0, 8, (1448, 1448), []),
    # The background does not count (there is no auto any more), nor the FOV.
    ({"camera": _camera(fov=150.0, aspect=16 / 9)}, 2.0, 8, (1928, 1088), []),
    # The longest side is brought to 8192, keeping the aspect.
    ({"camera": _camera(aspect=5.0)}, 16.0, 8, (8192, 1640),
     ["The output would be 9160x1832; it is reduced to 8192x1640 (the longest side is at most 8192)."]),
])
def test_output_size_table(state, megapixels, multiple, expected, warnings):
    assert _size(state, megapixels, multiple) == (expected, warnings)


def test_the_background_does_not_set_the_size():
    image = _outputs(None, background=_solid([0.5, 0.5, 0.5], height=16, width=48), megapixels=0.5, multiple=8)[0]

    assert image.shape == (1, 512, 1024, 3)


def test_the_ui_reports_the_output_size_with_the_inputs_it_was_made_from():
    state_json = json.dumps({"version": 2, "camera": _camera(aspect=2.0)})
    result = _studio(state_json, megapixels=0.125, multiple=8, background=_solid([0.5, 0.5, 0.5], height=16, width=32, batch=3))

    assert result.result[1].shape == (1, 256, 512, 3)
    assert result.ui["pano_output_size"] == [{"width": 512, "height": 256, "capped": False, "reduced_from": None,
                                              "key": nodes._studio_run_key(state_json, 0.125, 8, "360", "#00ff00")}]
    # The width that output_size auto read is gone with it (ADR 0048).
    assert "pano_bg_width" not in result.ui


def test_the_run_key_changes_with_the_state_and_the_widgets():
    key = nodes._studio_run_key("{}", 2.0, 8, "360", "#00ff00")

    assert key == nodes._studio_run_key("{}", 2, 8, "360", "#00ff00")
    # background_color changes the output.
    others = [("{ }", 2.0, 8, "360", "#00ff00"), ("{}", 2.5, 8, "360", "#00ff00"), ("{}", 2.0, 16, "360", "#00ff00"),
              ("{}", 2.0, 8, "180", "#00ff00"), ("{}", 2.0, 8, "360", "#ff0000")]
    assert len({key, *(nodes._studio_run_key(*args) for args in others)}) == 6


@pytest.mark.parametrize("projection", ["erp", "perspective"])
def test_a_run_writes_no_output_image_for_the_node_surface(projection):
    # The node surface draws the Camera's output live (ADR 0049), so the run returns no picture of its output.
    result = _studio({"version": 2, "camera": _camera(projection)}, **output_size(64, 32))

    assert "pano_output_erp" not in result.ui and "pano_output_frame" not in result.ui


def test_the_output_erp_takes_the_range_of_the_camera_not_of_an_upstream_scene():
    upstream = _outputs(background_range="180", **output_size(64), background=_solid([0.5, 0.5, 0.5], height=16, width=16))
    scene = next(value for value in upstream if isinstance(value, PanoSceneValue))
    result = _studio(**output_size(1024), scene=scene)

    assert tuple(result.result[1].shape) == (1, 512, 1024, 3)


# --- Outputs.

def test_sticker_state_holds_the_camera_only_for_a_perspective_camera():
    state = {"version": 2, "timeline": {"fps": 30.0}, "camera": _camera(fov=80.0, aspect=2.0, yaw_deg=40.0)}

    sticker_state = json.loads(_outputs(state, **output_size(272, 136))[3])

    assert sticker_state["fps"] == 30.0 and sticker_state["source_aspect"] == 272 / 136
    assert sticker_state["camera"]["rotation"][0]["value"]["yaw_deg"] == 40.0
    assert sticker_state["camera"]["fov"][0]["value"] == 80.0
    assert _outputs({"version": 2, "camera": _camera("erp")})[3] == ""
    # The default Camera is a Panorama one.
    assert _outputs({"version": 2})[3] == ""


def test_scene_output_is_the_built_scene_without_the_camera():
    state = {**_world_and_keyframed_state(), "camera": _camera(yaw_deg=90.0)}
    bg = build_background_erp()

    scene = _outputs(state, background=bg, sticker=_solid([1.0, 0.0, 0.0]))[4]

    assert isinstance(scene, PanoSceneValue)
    assert scene.layers[-1].state["camera"] is None
    assert [item["id"] for item in scene.layers[-1].state["stickers"]] == ["s", "w"]
    assert scene.bg_media is bg and scene.coverage == 360 and scene.bg_color == (0.0, 1.0, 0.0)
    assert scene.fps == 24.0 and len(scene.frames) == 3
    assert scene.media_ui["pano_input_images"]


def _png_data_url(width, height):
    buffer = io.BytesIO()
    Image.new("RGBA", (width, height)).save(buffer, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buffer.getvalue()).decode("ascii")


@pytest.mark.parametrize("data_url", [
    "data:image/png;base64",  # no comma
    "data:image/png;base64,abc",  # bad base64 padding
    "bomb",  # past PIL's decompression bomb limit
])
def test_a_data_url_that_cannot_be_decoded_is_not_drawn_with_a_warning(data_url, monkeypatch):
    if data_url == "bomb":
        data_url = _png_data_url(64, 64)
        monkeypatch.setattr(Image, "MAX_IMAGE_PIXELS", 64)
    state = {"version": 2, "stickers": [{"id": "sticker_1", "source": {"kind": "file", "data_url": data_url}}]}

    ui = _studio(state).ui

    assert ui["pano_sticker_warnings"] == ["Could not read the source of Sticker sticker_1; it is not drawn."]
