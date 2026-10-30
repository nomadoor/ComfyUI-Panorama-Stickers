import math

import numpy as np
import pytest

from comfyui_pano_suite.core.math import camera_basis
from comfyui_pano_suite.core.world import (
    camera_from_camera_info,
    camera_info_from_camera,
    pano_to_world,
    panorama_angles,
    quaternion_to_rotation,
    rotation_to_quaternion,
    world_rotation,
    world_to_pano,
)


ANGLES = [
    (0.0, 0.0, 0.0),
    (90.0, 0.0, 0.0),
    (-90.0, 0.0, 0.0),
    (0.0, 45.0, 0.0),
    (0.0, 0.0, 30.0),
    (37.0, -28.0, 19.0),
    (-123.0, 61.0, -42.0),
    (170.0, -10.0, 175.0),
    (15.0, 89.0, 23.0),
    (40.0, 90.0, 0.0),
    (-80.0, -90.0, -31.0),
]


def _same_rotation(a, b, atol=2e-6):
    return np.allclose(np.asarray(a), np.asarray(b), atol=atol)


def test_positions_and_directions_flip_only_z():
    assert np.allclose(pano_to_world([1.0, 2.0, 3.0]), [1.0, 2.0, -3.0])
    assert np.allclose(world_to_pano([1.0, 2.0, -3.0]), [1.0, 2.0, 3.0])
    points = np.array([[0.5, -1.0, 4.0], [2.0, 3.0, -7.0]])
    assert np.allclose(world_to_pano(pano_to_world(points)), points)


def test_zero_rotation_is_the_gltf_camera_looking_down_minus_z():
    rotation = world_rotation(0.0, 0.0, 0.0)
    assert np.allclose(rotation, np.eye(3), atol=1e-6)
    forward = -rotation[:, 2]
    assert np.allclose(forward, pano_to_world(camera_basis(0.0, 0.0, 0.0)[2]), atol=1e-6)
    assert np.allclose(forward, [0.0, 0.0, -1.0], atol=1e-6)


def test_panorama_angles_keep_their_screen_meaning_in_world():
    screen_right = world_rotation(0.0, 0.0, 0.0)[:, 0]

    yaw_right = world_rotation(90.0, 0.0, 0.0)
    assert np.allclose(-yaw_right[:, 2], screen_right, atol=1e-6)

    pitch_up = world_rotation(0.0, 90.0, 0.0)
    assert np.allclose(-pitch_up[:, 2], [0.0, 1.0, 0.0], atol=1e-6)

    # Positive roll turns the image clockwise: the camera's right axis tilts up.
    roll = world_rotation(0.0, 0.0, 30.0)
    assert roll[1, 0] > 0.0
    assert np.isclose(roll[1, 0], math.sin(math.radians(30.0)), atol=1e-6)


@pytest.mark.parametrize("yaw,pitch,roll", ANGLES)
def test_world_rotation_is_the_z_mirror_of_the_panorama_rotation(yaw, pitch, roll):
    right, up, forward = camera_basis(yaw, pitch, roll)
    panorama = np.stack([right, up, forward], axis=1).astype(np.float64)
    mirror = np.diag([1.0, 1.0, -1.0])
    rotation = world_rotation(yaw, pitch, roll)

    assert np.allclose(rotation, mirror @ panorama @ mirror, atol=1e-6)
    assert np.isclose(np.linalg.det(rotation), 1.0, atol=1e-6)
    assert np.allclose(rotation.T @ rotation, np.eye(3), atol=1e-6)


@pytest.mark.parametrize("yaw,pitch,roll", ANGLES)
def test_rotation_round_trips_through_angles_and_quaternions(yaw, pitch, roll):
    rotation = world_rotation(yaw, pitch, roll)
    quaternion = rotation_to_quaternion(rotation)

    assert np.isclose(np.linalg.norm(quaternion), 1.0, atol=1e-6)
    assert _same_rotation(quaternion_to_rotation(quaternion), rotation)
    assert _same_rotation(world_rotation(*panorama_angles(rotation)), rotation)


def test_panorama_angles_return_the_original_angles_away_from_the_poles():
    assert np.allclose(panorama_angles(world_rotation(37.0, -28.0, 19.0)), (37.0, -28.0, 19.0), atol=1e-4)
    assert np.allclose(panorama_angles(world_rotation(-123.0, 61.0, -42.0)), (-123.0, 61.0, -42.0), atol=1e-4)


def test_quaternion_matches_a_rotation_about_world_y():
    # A three.js camera turned +90 degrees about +Y looks toward -X; panorama yaw is the opposite turn.
    half = math.radians(-90.0) / 2.0
    quaternion = [0.0, math.sin(half), 0.0, math.cos(half)]
    assert _same_rotation(quaternion_to_rotation(quaternion), world_rotation(90.0, 0.0, 0.0))


def test_camera_info_round_trips_through_the_state_camera():
    camera = {
        "position": [1.5, -0.25, 3.0],
        "yaw_deg": 37.0,
        "pitch_deg": -28.0,
        "roll_deg": 19.0,
        "hFOV_deg": 90.0,
    }
    camera_info = camera_info_from_camera(camera, aspect=16.0 / 9.0)

    assert camera_info["cameraType"] == "perspective"
    assert camera_info["zoom"] == 1.0
    assert np.isclose(camera_info["aspect"], 16.0 / 9.0)
    assert camera_info["position"] == {"x": 1.5, "y": -0.25, "z": 3.0}
    target = np.array([camera_info["target"][axis] for axis in "xyz"])
    forward = -world_rotation(37.0, -28.0, 19.0)[:, 2]
    assert np.allclose(target, np.array(camera["position"]) + forward, atol=1e-6)
    expected_vfov = math.degrees(2.0 * math.atan(math.tan(math.radians(45.0)) * 9.0 / 16.0))
    assert np.isclose(camera_info["fov"], expected_vfov)

    restored = camera_from_camera_info(camera_info, aspect=16.0 / 9.0)
    assert np.allclose(restored["position"], camera["position"])
    for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"):
        assert np.isclose(restored[key], camera[key], atol=1e-4), key


def test_camera_info_vertical_fov_and_zoom_become_the_horizontal_fov_for_the_capture_aspect():
    camera_info = {
        "position": {"x": 0.0, "y": 0.0, "z": 0.0},
        "target": {"x": 0.0, "y": 0.0, "z": -1.0},
        "zoom": 2.0,
        "cameraType": "perspective",
        "fov": 60.0,
    }
    camera = camera_from_camera_info(camera_info, aspect=2.0)

    vertical_half = math.atan(math.tan(math.radians(30.0)) / 2.0)
    expected = math.degrees(2.0 * math.atan(math.tan(vertical_half) * 2.0))
    assert np.isclose(camera["hFOV_deg"], expected)


def test_camera_info_without_quaternion_looks_at_its_target_with_world_up():
    camera_info = {
        "position": {"x": 1.0, "y": 2.0, "z": 3.0},
        "target": {"x": 2.0, "y": 2.0, "z": 3.0},
        "zoom": 1.0,
        "cameraType": "perspective",
        "fov": 50.0,
    }
    camera = camera_from_camera_info(camera_info, aspect=1.0)

    assert camera["position"] == [1.0, 2.0, 3.0]
    # World +X is screen right at zero rotation, so looking at +X is yaw +90.
    assert np.allclose(
        (camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]),
        (90.0, 0.0, 0.0),
        atol=1e-6,
    )
    assert np.isclose(camera["hFOV_deg"], 50.0)


def test_orthographic_camera_info_is_rejected():
    camera_info = {
        "position": {"x": 0.0, "y": 0.0, "z": 5.0},
        "target": {"x": 0.0, "y": 0.0, "z": 0.0},
        "zoom": 1.0,
        "cameraType": "orthographic",
    }
    with pytest.raises(ValueError):
        camera_from_camera_info(camera_info, aspect=1.0)


OPTIONAL_KEY_CASES = [
    # Missing fov and zoom take core's 35 degrees and 1.
    (
        {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "target": {"x": 0.0, "y": 0.0, "z": -1.0}, "cameraType": "perspective"},
        (0.0, 0.0, 0.0, 35.0),
    ),
    # Zero fov and zoom are treated as missing, as core does.
    (
        {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "target": {"x": 1.0, "y": 0.0, "z": 0.0}, "fov": 0, "zoom": 0, "cameraType": "perspective"},
        (90.0, 0.0, 0.0, 35.0),
    ),
    # An empty quaternion falls back to the look-at target; a missing cameraType is perspective.
    (
        {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "target": {"x": -1.0, "y": 0.0, "z": 0.0}, "quaternion": {}, "fov": 50.0, "zoom": 1.0},
        (-90.0, 0.0, 0.0, 50.0),
    ),
    # A null quaternion also uses the target.
    (
        {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "target": {"x": 0.0, "y": 1.0, "z": -1.0}, "quaternion": None, "zoom": 1.0, "cameraType": "perspective", "fov": 40.0},
        (0.0, 45.0, 0.0, 40.0),
    ),
]


@pytest.mark.parametrize("camera_info,expected", OPTIONAL_KEY_CASES)
def test_optional_camera_info_keys_take_core_defaults(camera_info, expected):
    camera = camera_from_camera_info(camera_info, aspect=1.0)
    assert np.allclose(
        (camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"], camera["hFOV_deg"]),
        expected,
        atol=1e-6,
    )


def test_camera_looking_straight_down_keeps_yaw_zero():
    look_at = camera_from_camera_info(
        {"position": {"x": 0.0, "y": 2.0, "z": 0.0}, "target": {"x": 0.0, "y": 0.0, "z": 0.0}, "cameraType": "perspective"},
        aspect=1.0,
    )
    assert (look_at["yaw_deg"], look_at["pitch_deg"], look_at["roll_deg"]) == (0.0, -90.0, 0.0)

    # Camera looking down -Y with its up axis toward World -Z: a -90 degree turn about +X.
    straight_down = np.array([[1.0, 0.0, 0.0], [0.0, 0.0, 1.0], [0.0, -1.0, 0.0]])
    assert np.allclose(panorama_angles(straight_down), (0.0, -90.0, 0.0))
