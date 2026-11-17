import json
import math
from pathlib import Path

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state, load_sticker_state
from comfyui_pano_suite.nodes import PanoramaStudioNode
from scene_test_helpers import camera_state as _camera, output_size, shoot as _shoot, state_text, video_frames as _frames
from test_studio_camera import _solid, _upstream
from tools.bake_legacy_goldens import render_only_runtime


def _placed(layer, frame):
    """The port Sticker of a layer as the node evaluates it at a Timeline frame: placed by the shot it is handed."""
    evaluated = evaluate_scene_state(layer.state, frame, layer.length, layer.boxes, layer.shot)
    return next(item for item in evaluated["stickers"] if item["id"] == next(s["id"] for s in layer.state["stickers"] if s["source"]["kind"] == "port"))


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


def _round_trip_error(camera, sticker_state=None, state=None):
    shot = _shoot(_textured_erp(), camera)
    frames = _frames(shot)
    scene = _upstream(state, sticker=frames, sticker_state=shot[4] if sticker_state is None else sticker_state(shot[4]), **output_size(2048))[0]
    again = _frames(_shoot(scene, camera))
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
    shot = _shoot(_textured_erp(), camera)

    # The shot's `video` sets the Timeline fps (12) of the receiving state recorded at 24 fps.
    scene = _upstream(sticker=shot[3], sticker_state=shot[4], **output_size(2048))[0]
    again = _frames(_shoot(scene, camera))

    assert again.shape == _frames(shot).shape == (13, *again.shape[1:])
    assert _interior_error(again, _frames(shot)) < ROUND_TRIP_ERROR


def test_a_moving_camera_is_not_baked_and_the_sticker_follows_it_at_the_media_time():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 3, "fps": 12.0, "camera": {
        "rotation": [
            {"frame": 0, "value": {"yaw_deg": 170.0, "pitch_deg": 0.0, "roll_deg": 175.0}},
            {"frame": 2, "value": {"yaw_deg": 190.0, "pitch_deg": 0.0, "roll_deg": 185.0}},
        ],
        "fov": [{"frame": 0, "value": 40.0}],
    }})

    layer = _upstream({"version": 2}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[0].layers[-1]
    port = layer.state["stickers"][0]

    # The state's own Lanes are not written (ADR 0067): no Keyframes, the default pose.
    assert all(port[name]["keyframes"] == [] for name in ("direction", "roll", "size", "curve"))
    assert layer.shot == load_sticker_state(sticker_state)
    # Frame 2 at the 24 fps of the state is frame 1 of the 12 fps sticker_state: halfway, past 180.
    middle = _placed(layer, 2.0)
    assert (middle["yaw_deg"] % 360.0, middle["roll_deg"] % 360.0) == pytest.approx((180.0, 180.0))
    # vFOV follows the media; evaluated, it is hFOV.
    assert (middle["hFOV_deg"], middle["vFOV_deg"]) == pytest.approx((40.0, 40.0))


def test_camera_cut_stays_a_cut_at_another_fps():
    camera = _camera({"rotation": [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "hold"}, {"frame": 10, "value": {"yaw_deg": 90.0}}]}, fps=30.0)
    shot = _shoot(_textured_erp(), camera)

    # The 30 fps shot's `video` sets the Timeline of the receiving state recorded at 24 fps.
    scene = _upstream(sticker=shot[3], sticker_state=shot[4], **output_size(1024))[0]

    yaws = [_placed(scene.layers[-1], frame)["yaw_deg"] for _bg_index, ((frame, *_rest),) in scene.frames]
    assert yaws == pytest.approx([0.0] * 10 + [90.0])


def test_a_port_sticker_added_without_sticker_state_stores_vfov_as_hfov():
    port = _upstream({"version": 2}, sticker=_solid([1.0, 0.0, 0.0]))[0].layers[-1].state["stickers"][0]

    assert port["size"]["value"] == {"hFOV_deg": 30.0, "vFOV_deg": 30.0}


def _run(state=None, **inputs):
    inputs.setdefault("background_color", "#00ff00")
    inputs.setdefault("background_range", "360")
    if "megapixels" not in inputs:
        inputs.update(output_size(1024))
    return PanoramaStudioNode.execute(state_json=state_text(state), **inputs)


def _port(output):
    return next(item for item in output.result[0].layers[-1].state["stickers"] if item["source"]["kind"] == "port")


def _sticker_state(camera, fps=24.0):
    return json.dumps({"kind": "pano_sticker_state", "version": 3, "fps": fps, "camera": camera})


MOVING = _sticker_state({
    "rotation": [
        {"frame": 0, "value": {"yaw_deg": -30.0, "pitch_deg": 30.0, "roll_deg": 0.0}},
        {"frame": 6, "value": {"yaw_deg": 60.0, "pitch_deg": 10.0, "roll_deg": 15.0}},
    ],
    "fov": [{"frame": 0, "value": 70.0}, {"frame": 6, "value": 50.0}],
})
# A port Sticker as the editor adds it when `sticker` is connected before `sticker_state`.
STORED_PORT = {"id": "sticker_1", "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": -90.0, "pitch_deg": 5.0}},
               "size": {"value": {"hFOV_deg": 20.0, "vFOV_deg": 20.0}}, "clip": {"start": 2, "in": 1, "duration": 30},
               "z_index": 3, "locked": True}


def test_a_stored_port_sticker_still_receives_the_camera_work():
    added = _run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING).result[0].layers[-1]
    output = _run({"version": 2, "stickers": [STORED_PORT]}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING)
    layer = output.result[0].layers[-1]
    port = _port(output)

    # Placed by the same Camera at the same media time (the stored clip starts 1 frame later from media frame 1).
    for frame in (3.0, 5.5, 8.0):
        here, there = _placed(layer, frame), _placed(added, frame - 1.0)
        assert {key: here[key] for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg")} == pytest.approx({key: there[key] for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg")})
    # The stored Sticker is kept as it is, and the editor is not asked to add it again.
    assert port == load_scene_state({"version": 2, "stickers": [STORED_PORT]})["stickers"][0]
    assert "pano_sticker_input_pose" not in output.ui
    # The sticker_state as it was read, which the editor evaluates the same way.
    assert output.ui["pano_sticker_handoff"] == [{"state": load_sticker_state(MOVING)}]


def test_a_stored_port_sticker_returns_where_it_was_shot():
    stored = {"version": 2, "stickers": [{"id": "sticker_1", "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": 120.0}}}]}

    assert _round_trip_error(TRAJECTORY, state=stored) < ROUND_TRIP_ERROR


def test_connection_order_does_not_matter():
    # sticker_state first: the node adds the port Sticker. sticker first: the editor added it at the default pose.
    first = _run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING)
    editor_added = {"version": 2, "stickers": [{"id": "sticker_1", "source": {"kind": "port"}, "z_index": 0,
                                                 "size": {"value": {"hFOV_deg": 30.0, "vFOV_deg": 30.0}}}]}
    second = _run(editor_added, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING)

    assert _port(second) == _port(first)
    assert torch.equal(second.result[1], first.result[1])
    assert torch.equal(_frames(second.result), _frames(first.result))


def test_the_offset_lanes_turn_and_zoom_from_the_shot_camera_and_the_earlier_overrides_are_dropped():
    level = _sticker_state({"rotation": [{"frame": 0, "value": {"yaw_deg": 30.0, "pitch_deg": 0.0, "roll_deg": 0.0}}], "fov": [{"frame": 0, "value": 50.0}]})
    stored = {**STORED_PORT, "handoff_overrides": ["size"], "offset_rotation": {"value": {"yaw_deg": 10.0, "pitch_deg": 0.0, "roll_deg": 0.0}},
              "offset_fov": {"value": 1.2}}

    output = _run({"version": 2, "stickers": [stored]}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=level)
    port, placed = _port(output), _placed(output.result[0].layers[-1], 4.0)

    assert "handoff_overrides" not in port
    assert port["offset_fov"] == {"value": 1.2, "keyframes": []}
    assert (placed["yaw_deg"], placed["pitch_deg"], placed["roll_deg"], placed["hFOV_deg"]) == pytest.approx((40.0, 0.0, 0.0, 60.0))
    # The Sticker's own size Lane is kept but not used while the shot places it.
    assert port["size"]["value"] == {"hFOV_deg": 20.0, "vFOV_deg": 20.0}


def test_without_sticker_state_a_stored_port_sticker_is_unchanged():
    output = _run({"version": 2, "stickers": [STORED_PORT]}, sticker=_solid([1.0, 0.0, 0.0]))

    assert _port(output) == load_scene_state({"version": 2, "stickers": [STORED_PORT]})["stickers"][0]
    assert output.result[0].layers[-1].shot is None
    assert "pano_sticker_handoff" not in output.ui
    assert "pano_sticker_input_pose" not in output.ui


# The Camera leaves the World origin: the handoff is still a sky Sticker (ADR 0059), its position unused.
WORLD_TRAJECTORY = _camera({
    "position": [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 6, "value": [1.0, 0.3, -1.5]}],
    **{name: TRAJECTORY["camera"][name]["keyframes"] for name in ("rotation", "fov")},
})


def test_a_static_camera_away_from_the_origin_hands_a_sky_sticker():
    sticker_state = _sticker_state({
        "position": [{"frame": 0, "value": [1.0, 2.0, 3.0]}],
        "rotation": [{"frame": 0, "value": {"yaw_deg": 90.0, "pitch_deg": 0.0, "roll_deg": 20.0}}],
        "fov": [{"frame": 0, "value": 90.0}],
    })

    output = _run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)
    port, placed = _port(output), _placed(output.result[0].layers[-1], 0.0)

    assert port["placement"] == "sky" and "position" not in port
    assert (placed["yaw_deg"], placed["pitch_deg"], placed["roll_deg"], placed["hFOV_deg"]) == pytest.approx((90.0, 0.0, 20.0, 90.0))


def test_a_moving_camera_hands_a_sky_sticker_its_position_unused():
    sticker_state = _sticker_state({
        "position": [{"frame": 0, "value": [0.0, 0.0, 0.0], "easing": "hold"}, {"frame": 4, "value": [1.0, 0.0, 0.0]}],
        "rotation": [{"frame": 0, "value": {"yaw_deg": 170.0}, "easing": [0, 0, 1, 1]}, {"frame": 4, "value": {"yaw_deg": 190.0}}],
        "fov": [{"frame": 0, "value": 60.0}],
    })

    layer = _run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state).result[0].layers[-1]

    assert layer.state["stickers"][0]["placement"] == "sky" and "position" not in layer.state["stickers"][0]
    # The position's hold does not hold the turn: only the rotation's Keyframes move it, here at one speed.
    yaws = [_placed(layer, frame)["yaw_deg"] % 360.0 for frame in range(5)]
    assert yaws == pytest.approx([170.0, 175.0, 180.0, 185.0, 190.0])


@pytest.mark.parametrize("aspect", [1.0, 16 / 9], ids=["square", "16:9"])
def test_a_shot_away_from_the_origin_returns_seen_from_the_camera_and_from_the_origin(aspect):
    # The background is at infinity: the sky Sticker covers the shot from wherever the same turn and hFOV shoot it.
    camera = _with_aspect(WORLD_TRAJECTORY, aspect)
    at_origin = {**camera, "camera": {**camera["camera"], "position": {"value": [0.0, 0.0, 0.0], "keyframes": []}}}
    with render_only_runtime():
        shot = _shoot(_textured_erp(), camera)
        scene = _upstream(sticker=_frames(shot), sticker_state=shot[4], **output_size(2048))[0]
        again = _frames(_shoot(scene, camera))
        from_origin = _frames(_shoot(scene, at_origin))
    assert scene.layers[-1].state["stickers"][0]["placement"] == "sky"
    assert again.shape == _frames(shot).shape
    assert _interior_error(again, _frames(shot)) < ROUND_TRIP_ERROR
    assert _interior_error(from_origin, _frames(shot)) < ROUND_TRIP_ERROR


def test_a_stored_world_port_sticker_becomes_sky_keeping_its_offsets():
    world = {"id": "sticker_1", "placement": "world", "source": {"kind": "port"}, "clip": STORED_PORT["clip"], "locked": True,
             "visible": False, "crop": {"x0": 0.1, "y0": 0.0, "x1": 0.9, "y1": 1.0}, "opacity": {"value": 0.5},
             "position": {"value": [0.0, 0.0, -1.0]}, "handoff_overrides": ["position", "opacity"], "offset_fov": {"value": 0.5}}
    other = {"id": "sticker_2", "source": {"kind": "file", "filename": "x.png"}, "z_index": 5}
    to_side = _sticker_state({"position": [{"frame": 0, "value": [0.0, 0.0, 1.0]}]})

    output = _run({"version": 2, "stickers": [other, world]}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=to_side)
    port = _port(output)

    assert port["placement"] == "sky" and "position" not in port
    assert (port["id"], port["clip"], port["visible"], port["locked"]) == ("sticker_1", STORED_PORT["clip"], False, True)
    assert (port["crop"], port["opacity"], port["offset_fov"]) == ({"x0": 0.1, "y0": 0.0, "x1": 0.9, "y1": 1.0}, {"value": 0.5, "keyframes": []}, {"value": 0.5, "keyframes": []})
    # Above the other sky Stickers; the earlier overrides are not read.
    assert port["z_index"] == 6 and "handoff_overrides" not in port
    assert output.ui["pano_sticker_input_pose"][0]["replace"] is True


# The lens curve κ (ADR 0042): a shot through a lens hands a sky Sticker of the same lens (`curve`), so that the same
# Camera shoots the same frames again, moving or not (ADR 0059).

def _lens_camera(lanes):
    """A Camera of these Keyframes, its lens curve among them."""
    camera = _camera({name: keys for name, keys in lanes.items() if name != "curve"})
    camera["camera"]["curve"] = {"value": 1.0, "keyframes": lanes["curve"]}
    return camera


MOVING_LENS = {"position": [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 6, "value": [0.6, 0.2, -0.4]}],
               "rotation": [{"frame": 0, "value": {"yaw_deg": -20.0, "pitch_deg": 10.0, "roll_deg": 0.0}}, {"frame": 6, "value": {"yaw_deg": 25.0, "pitch_deg": -5.0, "roll_deg": 8.0}}]}
# κ keyframed up to the pinhole (1) and back down, and a fisheye wider than 180 degrees.
THROUGH_ONE = {"curve": [{"frame": 0, "value": 0.6}, {"frame": 3, "value": 1.0}, {"frame": 6, "value": 0.7}], "fov": [{"frame": 0, "value": 110.0}, {"frame": 6, "value": 100.0}]}


@pytest.mark.parametrize("aspect", [1.0, 16 / 9], ids=["square", "16:9"])
@pytest.mark.parametrize("lanes", [
    {"curve": [{"frame": 0, "value": 0.5}], "fov": [{"frame": 0, "value": 140.0}]},
    {"curve": [{"frame": 0, "value": 0.0}], "fov": [{"frame": 0, "value": 220.0}]},
    {**THROUGH_ONE, "rotation": MOVING_LENS["rotation"]},
    {"curve": [{"frame": 0, "value": 0.5}], "fov": [{"frame": 0, "value": 140.0}], **MOVING_LENS},
    {"curve": [{"frame": 0, "value": 0.0}], "fov": [{"frame": 0, "value": 220.0}], **MOVING_LENS},
    {**THROUGH_ONE, **MOVING_LENS},
], ids=["k0.5", "k0 220", "k through 1", "moving k0.5", "moving k0 220", "moving k through 1"])
def test_a_lens_shot_returns_where_it_was_shot(lanes, aspect):
    # A wide frame also checks the port Sticker's vFOV through the lens (g(vFOV / 2) = g(hFOV / 2) x height / width).
    camera = _with_aspect(_lens_camera(lanes), aspect)
    shot = _shoot(_textured_erp(), camera)
    scene = _upstream(None, sticker=_frames(shot), sticker_state=shot[4], **output_size(2048))[0]

    [port] = scene.layers[-1].state["stickers"]
    again = _frames(_shoot(scene, camera))

    assert port["placement"] == "sky" and "lens" not in port
    assert _placed(scene.layers[-1], 0.0)["curve"] == pytest.approx(lanes["curve"][0]["value"])
    assert _interior_error(again, _frames(shot)) < ROUND_TRIP_ERROR


def test_a_pinhole_only_moving_shot_hands_a_pinhole_sky_sticker():
    camera = _camera(MOVING_LENS)
    shot = _shoot(_textured_erp(), camera)

    layer = _upstream(None, sticker=_frames(shot), sticker_state=shot[4], **output_size(2048))[0].layers[-1]

    assert layer.state["stickers"][0]["placement"] == "sky"
    assert all(_placed(layer, frame)["curve"] == 1.0 for frame in (0.0, 3.0, 6.0))


# A Camera that looks at a moving Sticker hands that relation, not baked turns (ADR 0067): the sticker_state carries its
# Look at Lane and the target's motion on the Timeline, and the receiving Studio places the shot by the same rules.
LOOKING = {**_camera({"position": [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 6, "value": [0.5, 0.2, -0.5]}]}, hFOV_deg=60.0),
           "stickers": [{"id": "target", "placement": "world", "source": {"kind": "file", "filename": "pano_suite_missing_target.png"},
                         "clip": {"start": 2, "in": 0, "duration": None}, "visible": False,
                         "position": {"value": [0.0, 0.0, -3.0], "keyframes": [{"frame": 0, "value": [1.0, 0.0, -3.0]}, {"frame": 4, "value": [-1.0, 0.5, -3.0]}]}}]}
LOOKING["camera"]["look_at"] = {"value": None, "keyframes": [{"frame": 0, "value": {"point": [0.0, 0.3, -2.0]}}, {"frame": 4, "value": {"sticker": "target", "offset": [0.0, 0.0, 0.0]}}]}


def test_a_looking_camera_hands_its_look_at_and_the_targets_motion_on_the_timeline():
    payload = json.loads(_shoot(_textured_erp(), LOOKING)[4])

    assert payload["version"] == 3 and payload["length"] == 7
    assert payload["camera"]["look_at"] == load_scene_state(LOOKING)["camera"]["look_at"]
    [target] = payload["targets"]
    # The target's Keyframes moved onto the Timeline by its Clip range's origin (start - in = 2); no content, no box.
    assert (target["id"], target["loop"], [key["frame"] for key in target["position"]], target["box"]) == ("target", False, [2, 6], None)
    assert target["rotation"] == [{"frame": 0, "value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}, "easing": "smooth"}]


def test_a_looking_shot_returns_where_it_was_shot():
    shot = _shoot(_textured_erp(), LOOKING, **output_size(512))
    frames = _frames(shot)
    scene = _upstream(None, sticker=frames, sticker_state=shot[4], **output_size(2048))[0]
    again = _frames(_shoot(scene, LOOKING, **output_size(512)))

    assert again.shape == frames.shape
    assert _interior_error(again, frames) < ROUND_TRIP_ERROR
