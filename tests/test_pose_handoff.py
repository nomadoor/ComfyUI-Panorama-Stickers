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
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaStudioNode, _inherit_handoff
from scene_test_helpers import camera_state as _camera, shoot as _shoot, state_text, video_frames as _frames
from test_studio_camera import _solid, _upstream
from tools.bake_legacy_goldens import render_only_runtime


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
    scene = _upstream(state, sticker=frames, sticker_state=shot[3] if sticker_state is None else sticker_state(shot[3]), output_size="2048")[4]
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
    scene = _upstream(sticker=shot[2], sticker_state=shot[3], output_size="2048")[4]
    again = _frames(_shoot(scene, camera))

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

    port = _upstream({"version": 2}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[4].layers[-1].state["stickers"][0]

    # Two frames at 12 fps are four at the 24 fps of the state; the Camera is read between its Keyframes too.
    assert [key["frame"] for key in port["direction"]["keyframes"]] == [0, 1, 2, 3, 4]
    assert all(key["easing"] == "auto" for lane in ("direction", "roll") for key in port[lane]["keyframes"])
    # Yaw and roll turn on past 180 instead of jumping back a whole turn.
    yaws = [key["value"]["yaw_deg"] for key in port["direction"]["keyframes"]]
    rolls = [key["value"] for key in port["roll"]["keyframes"]]
    assert yaws[0] == pytest.approx(170.0) and yaws[-1] == pytest.approx(190.0)
    assert rolls[0] == pytest.approx(175.0) and rolls[-1] == pytest.approx(185.0)
    assert all(b > a for a, b in zip(yaws, yaws[1:])) and all(b > a for a, b in zip(rolls, rolls[1:]))
    # A Lane the Camera does not move stays a static value. vFOV follows the media; stored, it is hFOV.
    assert port["size"] == {"value": {"hFOV_deg": 40.0, "vFOV_deg": 40.0}, "keyframes": []}


def test_camera_cut_stays_a_cut_at_another_fps():
    camera = _camera({"rotation": [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "hold"}, {"frame": 10, "value": {"yaw_deg": 90.0}}]}, fps=30.0)
    shot = _shoot(_textured_erp(), camera)

    # The 30 fps shot's `video` sets the Timeline of the receiving state recorded at 24 fps.
    scene = _upstream(sticker=shot[2], sticker_state=shot[3], output_size="1024")[4]

    yaws = [evaluate_scene_state(scene.layers[-1].state, frame)["stickers"][0]["yaw_deg"] for _bg_index, ((frame, *_rest),) in scene.frames]
    assert yaws == pytest.approx([0.0] * 10 + [90.0])


def test_camera_keyframes_of_one_rotation_keep_the_direction_static():
    rotation = {"yaw_deg": 33.0, "pitch_deg": 21.0, "roll_deg": 7.0}
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "camera": {
        "rotation": [{"frame": 0, "value": rotation}, {"frame": 10, "value": rotation}],
        "fov": [{"frame": 0, "value": 60.0}, {"frame": 10, "value": 40.0}],
    }})

    port = _upstream({"version": 2}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)[4].layers[-1].state["stickers"][0]

    assert (port["direction"]["keyframes"], port["roll"]["keyframes"]) == ([], [])
    assert port["direction"]["value"] == pytest.approx({"yaw_deg": 33.0, "pitch_deg": 21.0})
    assert len(port["size"]["keyframes"]) == 11
    assert all(key["value"]["vFOV_deg"] == key["value"]["hFOV_deg"] for key in port["size"]["keyframes"])


def test_a_port_sticker_added_without_sticker_state_stores_vfov_as_hfov():
    port = _upstream({"version": 2}, sticker=_solid([1.0, 0.0, 0.0]))[4].layers[-1].state["stickers"][0]

    assert port["size"]["value"] == {"hFOV_deg": 30.0, "vFOV_deg": 30.0}


def _run(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_size", "1024")
    return PanoramaStudioNode.execute(state_json=state_text(state), **inputs)


def _port(output):
    return next(item for item in output.result[4].layers[-1].state["stickers"] if item["source"]["kind"] == "port")


def _sticker_state(camera, fps=24.0):
    return json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": fps, "camera": camera})


MOVING = _sticker_state({
    "rotation": [
        {"frame": 0, "value": {"yaw_deg": -30.0, "pitch_deg": 30.0, "roll_deg": 0.0}},
        {"frame": 6, "value": {"yaw_deg": 60.0, "pitch_deg": 10.0, "roll_deg": 15.0}},
    ],
    "fov": [{"frame": 0, "value": 70.0}, {"frame": 6, "value": 50.0}],
})
SKY_LANES = ("direction", "roll", "size", "curve")
# A port Sticker as the editor adds it when `sticker` is connected before `sticker_state`.
STORED_PORT = {"id": "sticker_1", "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": -90.0, "pitch_deg": 5.0}},
               "size": {"value": {"hFOV_deg": 20.0, "vFOV_deg": 20.0}}, "clip": {"start": 2, "in": 1, "duration": 30},
               "z_index": 3, "locked": True}


def test_a_stored_port_sticker_still_receives_the_camera_work():
    added = _port(_run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING))
    output = _run({"version": 2, "stickers": [STORED_PORT]}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING)
    port = _port(output)

    assert {name: port[name] for name in SKY_LANES} == {name: added[name] for name in SKY_LANES}
    assert len(port["direction"]["keyframes"]) == 7
    # The rest of the stored Sticker is kept, and the editor is not asked to add it again.
    assert (port["id"], port["clip"], port["z_index"], port["locked"]) == ("sticker_1", {"start": 2, "in": 1, "duration": 30}, 3, True)
    assert "pano_sticker_input_pose" not in output.ui
    # At the state's recorded Timeline fps, which the editor rebases it from.
    assert output.ui["pano_sticker_handoff"] == [{"placement": "sky", "lanes": {name: added[name] for name in SKY_LANES}, "fps": 24.0}]


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
    assert torch.equal(second.result[0], first.result[0])
    assert torch.equal(_frames(second.result), _frames(first.result))


def test_an_overridden_lane_keeps_its_stored_value():
    stored = {**STORED_PORT, "handoff_overrides": ["size", "opacity"], "opacity": {"value": 0.5}}
    added = _port(_run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING))

    port = _port(_run({"version": 2, "stickers": [stored]}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING))

    assert port["size"] == {"value": {"hFOV_deg": 20.0, "vFOV_deg": 20.0}, "keyframes": []}
    assert port["opacity"] == {"value": 0.5, "keyframes": []}
    assert (port["direction"], port["roll"]) == (added["direction"], added["roll"])
    assert port["handoff_overrides"] == ["size", "opacity"]


def test_without_sticker_state_a_stored_port_sticker_is_unchanged():
    output = _run({"version": 2, "stickers": [STORED_PORT]}, sticker=_solid([1.0, 0.0, 0.0]))

    assert _port(output) == load_scene_state({"version": 2, "stickers": [STORED_PORT]})["stickers"][0]
    assert "pano_sticker_handoff" not in output.ui
    assert "pano_sticker_input_pose" not in output.ui


# The Camera leaves the World origin (ADR 0030): the handoff is a world Sticker 2 ahead of it.
WORLD_TRAJECTORY = _camera({
    "position": [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 6, "value": [1.0, 0.3, -1.5]}],
    **{name: TRAJECTORY["camera"][name]["keyframes"] for name in ("rotation", "fov")},
})


def test_a_static_camera_away_from_the_origin_hands_a_world_sticker():
    sticker_state = _sticker_state({
        "position": [{"frame": 0, "value": [1.0, 2.0, 3.0]}],
        "rotation": [{"frame": 0, "value": {"yaw_deg": 90.0, "pitch_deg": 0.0, "roll_deg": 20.0}}],
        "fov": [{"frame": 0, "value": 90.0}],
    })

    output = _run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state)
    port = _port(output)

    # Yaw 90 faces World +X; hFOV 90 is 2 * 2 * tan(45) = 4 wide at distance 2.
    assert port["placement"] == "world"
    assert port["position"]["value"] == pytest.approx([3.0, 2.0, 3.0])
    assert port["rotation"]["value"] == pytest.approx({"yaw_deg": 90.0, "pitch_deg": 0.0, "roll_deg": 20.0})
    assert port["scale"]["value"] == pytest.approx(4.0)
    assert all(port[name]["keyframes"] == [] for name in ("position", "rotation", "scale"))
    assert output.ui["pano_sticker_handoff"][0]["placement"] == "world"
    [pose] = output.ui["pano_sticker_input_pose"]
    assert pose["placement"] == "world" and "replace" not in pose
    assert pose["keyframes"] == {"position": [], "rotation": [], "scale": []}


def test_a_camera_at_the_origin_in_every_frame_still_hands_a_sky_sticker():
    sticker_state = _sticker_state({
        "position": [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 4, "value": [0.0, 0.0, 0.0]}],
        "rotation": [{"frame": 0, "value": {"yaw_deg": 10.0}}, {"frame": 4, "value": {"yaw_deg": 50.0}}],
    })

    port = _port(_run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state))

    assert port["placement"] == "sky" and len(port["direction"]["keyframes"]) == 5


def test_a_moving_camera_is_baked_into_world_keyframes_and_a_cut_stays_a_cut():
    sticker_state = _sticker_state({
        "position": [{"frame": 0, "value": [0.0, 0.0, 0.0], "easing": "hold"}, {"frame": 4, "value": [1.0, 0.0, 0.0]}],
        "rotation": [{"frame": 0, "value": {"yaw_deg": 170.0}}, {"frame": 4, "value": {"yaw_deg": 190.0}}],
        "fov": [{"frame": 0, "value": 60.0}],
    })

    port = _port(_run(sticker=_solid([1.0, 0.0, 0.0]), sticker_state=sticker_state))

    assert port["placement"] == "world"
    positions = port["position"]["keyframes"]
    assert [key["frame"] for key in positions] == [0, 1, 2, 3, 4]
    assert [key["easing"] for key in positions] == ["hold"] * 4 + ["auto"]
    # Yaw turns on past 180; a Lane the Camera does not move stays a static value.
    yaws = [key["value"]["yaw_deg"] for key in port["rotation"]["keyframes"]]
    assert yaws[0] == pytest.approx(170.0) and yaws[-1] == pytest.approx(190.0) and all(b > a for a, b in zip(yaws, yaws[1:]))
    assert all(key["easing"] == "auto" for key in port["rotation"]["keyframes"])
    assert port["scale"] == {"value": pytest.approx(4.0 * math.tan(math.radians(30.0))), "keyframes": []}


@pytest.mark.parametrize("aspect", [1.0, 16 / 9], ids=["square", "16:9"])
def test_world_handoff_returns_the_shot_seen_from_the_camera(aspect):
    camera = _with_aspect(WORLD_TRAJECTORY, aspect)
    with render_only_runtime():
        shot = _shoot(_textured_erp(), camera)
        scene = _upstream(sticker=_frames(shot), sticker_state=shot[3], output_size="2048")[4]
        again = _frames(_shoot(scene, camera))
    assert scene.layers[-1].state["stickers"][0]["placement"] == "world"
    assert again.shape == _frames(shot).shape
    assert _interior_error(again, _frames(shot)) < ROUND_TRIP_ERROR


def test_world_round_trip_tolerance_catches_a_camera_moved_away():
    camera = _with_aspect(WORLD_TRAJECTORY, 1.0)
    with render_only_runtime():
        shot = _shoot(_textured_erp(), camera)
        scene = _upstream(sticker=_frames(shot), sticker_state=shot[3], output_size="2048")[4]
        moved = {**camera, "camera": {**camera["camera"], "position": {"value": [0.3, 0.0, 0.0], "keyframes": []}}}
        again = _frames(_shoot(scene, moved))
    assert _interior_error(again, _frames(shot)) > ROUND_TRIP_ERROR


def test_the_placement_follows_the_handoff_and_drops_the_other_placements_overrides():
    stored = {**STORED_PORT, "crop": {"x0": 0.1, "y0": 0.0, "x1": 0.9, "y1": 1.0}, "opacity": {"value": 0.5},
              "visible": False, "handoff_overrides": ["direction", "opacity"]}
    to_world = _sticker_state({"position": [{"frame": 0, "value": [0.0, 0.0, 1.0]}]})

    output = _run({"version": 2, "stickers": [stored]}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=to_world)
    port = _port(output)

    assert port["placement"] == "world" and "direction" not in port and "z_index" not in port
    assert port["position"]["value"] == pytest.approx([0.0, 0.0, -1.0])
    assert (port["id"], port["clip"], port["visible"], port["locked"]) == ("sticker_1", stored["clip"], False, True)
    assert (port["crop"], port["opacity"]) == ({"x0": 0.1, "y0": 0.0, "x1": 0.9, "y1": 1.0}, {"value": 0.5, "keyframes": []})
    assert port["handoff_overrides"] == ["opacity"]
    assert output.ui["pano_sticker_input_pose"][0]["replace"] is True

    # Back at the origin, it is a sky Sticker again (above the other sky Stickers), without the world overrides.
    world = {**port, "handoff_overrides": ["position", "opacity"]}
    other = {"id": "sticker_2", "source": {"kind": "file", "filename": "x.png"}, "z_index": 5}
    back = _port(_run({"version": 2, "stickers": [other, world]}, sticker=_solid([1.0, 0.0, 0.0]), sticker_state=MOVING))
    assert back["placement"] == "sky" and "position" not in back
    assert back["z_index"] == 6 and back["handoff_overrides"] == ["opacity"] and back["opacity"]["value"] == 0.5


# The editor shows the handoff by the same rule (web_src/pano_port_handoff.js `inheritPortHandoff`), held to these
# fixtures by tests/pano_port_handoff.test.mjs too (ADR 0030 T11).
HANDOFF_FIXTURES = Path(__file__).resolve().parent / "fixtures" / "scene_inherit"


@pytest.mark.parametrize("name", ["handoff_same_placement", "handoff_sky_to_world", "handoff_world_to_sky", "handoff_sky_curve", "handoff_world_drop_lens"])
def test_inheriting_the_handoff_matches_the_fixture_the_editor_shares(name):
    case = json.loads((HANDOFF_FIXTURES / f"{name}.json").read_text(encoding="utf-8"))
    state = load_scene_state(case["state"])
    port = next(item for item in state["stickers"] if item["source"]["kind"] == "port")

    assert _inherit_handoff(state, port, case["handoff"]["placement"], case["handoff"]["lanes"]) == case["expected"]


# The lens curve κ (ADR 0042): a shot through a lens hands a Sticker of the same lens, so that the same Camera shoots
# the same frames again; a still Camera's `sky` Sticker carries a `curve`, a moving one's `world` Sticker a `lens`.

def _lens_camera(lanes):
    """A Camera of these Keyframes, its lens curve among them."""
    camera = _camera({name: keys for name, keys in lanes.items() if name != "curve"})
    camera["camera"]["curve"] = {"value": 1.0, "keyframes": lanes["curve"]}
    return camera


MOVING_LENS = {"position": [{"frame": 0, "value": [0.0, 0.0, 0.0]}, {"frame": 6, "value": [0.6, 0.2, -0.4]}],
               "rotation": [{"frame": 0, "value": {"yaw_deg": -20.0, "pitch_deg": 10.0, "roll_deg": 0.0}}, {"frame": 6, "value": {"yaw_deg": 25.0, "pitch_deg": -5.0, "roll_deg": 8.0}}]}
# κ keyframed through 1 (with an hFOV the pincushion end can hold), and a fisheye wider than 180 degrees.
THROUGH_ONE = {"curve": [{"frame": 0, "value": 0.6}, {"frame": 6, "value": 1.3}], "fov": [{"frame": 0, "value": 110.0}, {"frame": 6, "value": 100.0}]}


@pytest.mark.parametrize("aspect", [1.0, 16 / 9], ids=["square", "16:9"])
@pytest.mark.parametrize("lanes, placement", [
    ({"curve": [{"frame": 0, "value": 0.5}], "fov": [{"frame": 0, "value": 140.0}]}, "sky"),
    ({"curve": [{"frame": 0, "value": 0.0}], "fov": [{"frame": 0, "value": 220.0}]}, "sky"),
    ({**THROUGH_ONE, "rotation": MOVING_LENS["rotation"]}, "sky"),
    ({"curve": [{"frame": 0, "value": 0.5}], "fov": [{"frame": 0, "value": 140.0}], **MOVING_LENS}, "world"),
    ({"curve": [{"frame": 0, "value": 0.0}], "fov": [{"frame": 0, "value": 220.0}], **MOVING_LENS}, "world"),
    ({**THROUGH_ONE, **MOVING_LENS}, "world"),
], ids=["sky k0.5", "sky k0 220", "sky k through 1", "world k0.5", "world k0 220", "world k through 1"])
def test_a_lens_shot_returns_where_it_was_shot(lanes, placement, aspect):
    # A wide frame also checks the port Sticker's vFOV through the lens (g(vFOV / 2) = g(hFOV / 2) x height / width).
    camera = _with_aspect(_lens_camera(lanes), aspect)
    shot = _shoot(_textured_erp(), camera)
    scene = _upstream(None, sticker=_frames(shot), sticker_state=shot[3], output_size="2048")[4]

    [port] = scene.layers[-1].state["stickers"]
    again = _frames(_shoot(scene, camera))

    assert port["placement"] == placement
    if placement == "sky":
        assert port["curve"]["keyframes"] or port["curve"]["value"] != 1.0
    else:
        assert "lens" in port
    assert _interior_error(again, _frames(shot)) < ROUND_TRIP_ERROR


def test_a_pinhole_only_moving_shot_hands_todays_plane():
    camera = _camera(MOVING_LENS)
    shot = _shoot(_textured_erp(), camera)

    [port] = _upstream(None, sticker=_frames(shot), sticker_state=shot[3], output_size="2048")[4].layers[-1].state["stickers"]

    assert port["placement"] == "world" and "lens" not in port
