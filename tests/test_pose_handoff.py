import json
import math

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Stickers and Cutout nodes",
)

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from test_cutout_scene_node import _camera, _cutout, _frames, _solid, _stickers


def _textured_erp(height=256, width=512):
    """Smooth and different in every direction, periodic in yaw."""
    v, u = torch.meshgrid(torch.linspace(0.0, 1.0, height), torch.linspace(0.0, 1.0, width), indexing="ij")
    return torch.stack([
        0.5 + 0.5 * torch.sin(2.0 * math.pi * 3.0 * u + 4.0 * v),
        0.5 + 0.5 * torch.cos(2.0 * math.pi * 2.0 * v + 2.0 * math.pi * u),
        u * (1.0 - u) * 4.0 * v,
    ], dim=-1)[None]


STATIC = _camera(yaw_deg=30.0, pitch_deg=20.0, roll_deg=10.0, hFOV_deg=60.0)
TRAJECTORY = _camera({
    "rotation": [
        {"frame": 0, "value": {"yaw_deg": -30.0, "pitch_deg": 30.0, "roll_deg": 0.0}},
        {"frame": 6, "value": {"yaw_deg": 60.0, "pitch_deg": 10.0, "roll_deg": 15.0}},
    ],
    "fov": [{"frame": 0, "value": 70.0}, {"frame": 6, "value": 50.0}],
})


def _interior_error(a, b, margin=3):
    return float((a - b)[:, margin:-margin, margin:-margin].abs().mean())


# A round trip differs by about 0.0015 from resampling; a yaw 1 degree or an hFOV 2 degrees off is above 0.005.
ROUND_TRIP_ERROR = 0.004


def _with_aspect(camera, aspect):
    return {**camera, "camera": {**camera["camera"], "aspect": aspect}}


def _round_trip_error(camera, sticker_state=None):
    shot = _cutout(_textured_erp(), camera, output_megapixels=0.02)
    frames = _frames(shot)
    scene = _stickers(sticker=frames, sticker_state=shot[1] if sticker_state is None else sticker_state(shot[1]), output_preset="2048")[3]
    again = _frames(_cutout(scene, camera, output_megapixels=0.02))
    assert again.shape == frames.shape
    return _interior_error(again, frames)


@pytest.mark.parametrize("aspect", [1.0, 16 / 9], ids=["square", "16:9"])
@pytest.mark.parametrize("camera", [STATIC, TRAJECTORY], ids=["static", "trajectory"])
def test_cut_out_frames_return_where_they_were_shot(camera, aspect):
    assert _round_trip_error(_with_aspect(camera, aspect)) < ROUND_TRIP_ERROR


def _shifted(yaw_deg=0.0, hfov_deg=0.0):
    def shift(text):
        payload = json.loads(text)
        for key in payload["camera"]["rotation"]:
            key["value"]["yaw_deg"] += yaw_deg
        for key in payload["camera"]["fov"]:
            key["value"] += hfov_deg
        return json.dumps(payload)
    return shift


@pytest.mark.parametrize("shift", [_shifted(yaw_deg=1.0), _shifted(hfov_deg=2.0)], ids=["yaw+1", "hFOV+2"])
def test_round_trip_tolerance_catches_a_slightly_wrong_pose(shift):
    assert _round_trip_error(TRAJECTORY, shift) > ROUND_TRIP_ERROR


def test_trajectory_returns_through_the_sticker_video_at_another_fps():
    # The same trajectory at 12 fps: its Keyframes at frames 0 and 12.
    camera = _camera({name: [{**key, "frame": key["frame"] * 2} for key in TRAJECTORY["camera"][name]["keyframes"]] for name in ("rotation", "fov")}, fps=12.0)
    shot = _cutout(_textured_erp(), camera, output_megapixels=0.02)

    # The Cutout `video` sets the Timeline fps (12) of a Stickers state recorded at 24 fps.
    scene = _stickers(sticker=shot[3], sticker_state=shot[1], output_preset="2048")[3]
    again = _frames(_cutout(scene, camera, output_megapixels=0.02))

    assert again.shape == _frames(shot).shape == (13, *again.shape[1:])
    assert _interior_error(again, _frames(shot)) < ROUND_TRIP_ERROR


def test_moving_camera_is_baked_into_auto_keyframes_at_every_timeline_frame():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": 12.0, "camera": {
        "rotation": [
            {"frame": 0, "value": {"yaw_deg": 170.0, "pitch_deg": 0.0, "roll_deg": 175.0}},
            {"frame": 2, "value": {"yaw_deg": 190.0, "pitch_deg": 0.0, "roll_deg": 185.0}},
        ],
        "fov": [{"frame": 0, "value": 40.0}],
    }})

    port = _stickers({"version": 2}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[3].layers[-1].state["stickers"][0]

    # Two frames at 12 fps are four at the 24 fps of the state; the Camera is read between its Keyframes too.
    assert [key["frame"] for key in port["direction"]["keyframes"]] == [0, 1, 2, 3, 4]
    assert all(key["easing"] == "auto" for lane in ("direction", "roll") for key in port[lane]["keyframes"])
    # Yaw and roll turn on past 180 instead of jumping back a whole turn.
    yaws = [key["value"]["yaw_deg"] for key in port["direction"]["keyframes"]]
    rolls = [key["value"] for key in port["roll"]["keyframes"]]
    assert yaws[0] == pytest.approx(170.0) and yaws[-1] == pytest.approx(190.0)
    assert rolls[0] == pytest.approx(175.0) and rolls[-1] == pytest.approx(185.0)
    assert all(b > a for a, b in zip(yaws, yaws[1:])) and all(b > a for a, b in zip(rolls, rolls[1:]))
    # A Lane the Camera does not move stays a static value.
    assert port["size"] == {"value": {"hFOV_deg": 40.0, "vFOV_deg": 20.0}, "keyframes": []}


def test_camera_cut_stays_a_cut_at_another_fps():
    camera = _camera({"rotation": [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "hold"}, {"frame": 10, "value": {"yaw_deg": 90.0}}]}, fps=30.0)
    shot = _cutout(_textured_erp(), camera, output_megapixels=0.02)

    # The 30 fps Cutout `video` sets the Timeline of a Stickers state recorded at 24 fps.
    scene = _stickers(sticker=shot[3], sticker_state=shot[1], output_preset="1024")[3]

    yaws = [evaluate_scene_state(scene.layers[-1].state, frame)["stickers"][0]["yaw_deg"] for _bg_index, ((frame, *_rest),) in scene.frames]
    assert yaws == pytest.approx([0.0] * 10 + [90.0])


def test_camera_keyframes_of_one_rotation_keep_the_direction_static():
    rotation = {"yaw_deg": 33.0, "pitch_deg": 21.0, "roll_deg": 7.0}
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "camera": {
        "rotation": [{"frame": 0, "value": rotation}, {"frame": 10, "value": rotation}],
        "fov": [{"frame": 0, "value": 60.0}, {"frame": 10, "value": 40.0}],
    }})

    port = _stickers({"version": 2}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[3].layers[-1].state["stickers"][0]

    assert (port["direction"]["keyframes"], port["roll"]["keyframes"]) == ([], [])
    assert port["direction"]["value"] == pytest.approx({"yaw_deg": 33.0, "pitch_deg": 21.0})
    assert len(port["size"]["keyframes"]) == 11
