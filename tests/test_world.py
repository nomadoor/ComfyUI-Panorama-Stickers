import math

import numpy as np
import pytest

from comfyui_pano_suite.core.math import camera_basis
from comfyui_pano_suite.core.world import (
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


def test_camera_looking_straight_down_keeps_yaw_zero():
    # Camera looking down -Y with its up axis toward World -Z: a -90 degree turn about +X.
    straight_down = np.array([[1.0, 0.0, 0.0], [0.0, 0.0, 1.0], [0.0, -1.0, 0.0]])
    assert np.allclose(panorama_angles(straight_down), (0.0, -90.0, 0.0))
