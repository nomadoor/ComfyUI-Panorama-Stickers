"""Conversions between the panorama convention and World (ADR 0023).

World is glTF: right-handed, +X right, +Y up, forward -Z. The panorama
convention of ``camera_basis`` is +X right, +Y up, +Z forward, so the two differ
by a single Z flip ``S = diag(1, 1, -1)``. Keep this module in parity with
``web_src/pano_world.js``; no other code flips Z.

Angles always stay in the panorama convention. ``world_rotation`` maps a glTF
local frame (+X right, +Y up, looking down local -Z, as three.js cameras do)
into World, which is ``S @ R @ S`` for the panorama rotation ``R``.

FOV: the state Camera stores the horizontal ``hFOV_deg`` like the existing
cutout pose. Core ``camera_info`` stores the vertical ``fov`` narrowed by
``zoom``. Converting between them needs the capture aspect (width / height).
Core RenderSplat uses ``fov`` as the angle across the image's shorter side, so
it is the horizontal angle when ``aspect < 1``.

Optional ``camera_info`` keys take core's defaults: a missing or zero ``fov`` is
35, a missing or zero ``zoom`` is 1, an empty ``quaternion`` falls back to the
look-at target, and a missing ``cameraType`` is perspective.
"""

import math

import numpy as np

from .math import DEG2RAD, RAD2DEG, camera_basis


_FLIP_Z = np.array([1.0, 1.0, -1.0])


def pano_to_world(v) -> np.ndarray:
    """Convert panorama positions or directions (..., 3) to World."""
    return np.asarray(v, dtype=np.float64) * _FLIP_Z


def world_to_pano(v) -> np.ndarray:
    """Convert World positions or directions (..., 3) to the panorama convention."""
    return np.asarray(v, dtype=np.float64) * _FLIP_Z


def world_rotation(yaw_deg: float, pitch_deg: float, roll_deg: float = 0.0) -> np.ndarray:
    right, up, forward = camera_basis(yaw_deg, pitch_deg, roll_deg, dtype=np.float64)
    return np.stack([pano_to_world(right), pano_to_world(up), -pano_to_world(forward)], axis=1)


def panorama_angles(rotation) -> tuple[float, float, float]:
    """Inverse of ``world_rotation``. At the poles yaw and roll share an axis."""
    rotation = np.asarray(rotation, dtype=np.float64)
    right = world_to_pano(rotation[:, 0])
    up = world_to_pano(rotation[:, 1])
    forward = -world_to_pano(rotation[:, 2])
    # + 0.0 turns -0.0 into 0.0 so a camera looking straight up or down keeps yaw 0, not 180.
    yaw = math.atan2(forward[0] + 0.0, forward[2] + 0.0)
    pitch = math.atan2(forward[1], math.hypot(forward[0], forward[2]))
    # Undo yaw before reading roll so a noisy yaw near the poles is absorbed by roll.
    cy, sy = math.cos(yaw), math.sin(yaw)
    roll = math.atan2(sy * up[2] - cy * up[0], cy * right[0] - sy * right[2])
    return yaw * RAD2DEG, pitch * RAD2DEG, roll * RAD2DEG


def quaternion_to_rotation(quaternion) -> np.ndarray:
    """Rotation matrix from a quaternion in glTF ``[x, y, z, w]`` order."""
    x, y, z, w = np.asarray(quaternion, dtype=np.float64) / np.linalg.norm(quaternion)
    return np.array([
        [1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y - z * w), 2.0 * (x * z + y * w)],
        [2.0 * (x * y + z * w), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z - x * w)],
        [2.0 * (x * z - y * w), 2.0 * (y * z + x * w), 1.0 - 2.0 * (x * x + y * y)],
    ])


def rotation_to_quaternion(rotation) -> np.ndarray:
    """Quaternion ``[x, y, z, w]`` of a rotation matrix, as three.js setFromRotationMatrix."""
    (m11, m12, m13), (m21, m22, m23), (m31, m32, m33) = np.asarray(rotation, dtype=np.float64)
    trace = m11 + m22 + m33
    if trace > 0.0:
        s = 0.5 / math.sqrt(trace + 1.0)
        q = [(m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s]
    elif m11 > m22 and m11 > m33:
        s = 2.0 * math.sqrt(1.0 + m11 - m22 - m33)
        q = [0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s]
    elif m22 > m33:
        s = 2.0 * math.sqrt(1.0 + m22 - m11 - m33)
        q = [(m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s]
    else:
        s = 2.0 * math.sqrt(1.0 + m33 - m11 - m22)
        q = [(m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s]
    return np.array(q)


def _vector(xyz: dict) -> np.ndarray:
    return np.array([float(xyz["x"]), float(xyz["y"]), float(xyz["z"])])


def _xyz(v) -> dict:
    return {"x": float(v[0]), "y": float(v[1]), "z": float(v[2])}


def camera_from_camera_info(camera_info: dict, aspect: float) -> dict:
    """State Camera from core ``camera_info`` (LOAD3D_CAMERA).

    Without a quaternion the camera looks at ``target`` with World +Y up, like
    three.js ``lookAt``. ``aspect`` is the capture's width / height.
    """
    if camera_info.get("cameraType") == "orthographic":
        raise ValueError("An orthographic camera_info cannot be used as a Camera; use a perspective camera.")
    position = _vector(camera_info["position"])
    quaternion = camera_info.get("quaternion")
    if quaternion:
        rotation = quaternion_to_rotation([
            quaternion.get("x", 0.0), quaternion.get("y", 0.0), quaternion.get("z", 0.0), quaternion.get("w", 1.0),
        ])
        yaw, pitch, roll = panorama_angles(rotation)
    else:
        forward = world_to_pano(_vector(camera_info["target"]) - position)
        yaw = math.atan2(forward[0] + 0.0, forward[2] + 0.0) * RAD2DEG
        pitch = math.atan2(forward[1], math.hypot(forward[0], forward[2])) * RAD2DEG
        roll = 0.0
    fov = float(camera_info.get("fov") or 35.0)
    zoom = float(camera_info.get("zoom") or 1.0)
    tan_half_v = math.tan(fov * 0.5 * DEG2RAD) / zoom
    return {
        "position": position.tolist(),
        "yaw_deg": yaw,
        "pitch_deg": pitch,
        "roll_deg": roll,
        "hFOV_deg": 2.0 * math.atan(tan_half_v * aspect) * RAD2DEG,
    }


def camera_info_from_camera(camera: dict, aspect: float) -> dict:
    """Core ``camera_info`` (LOAD3D_CAMERA) from a state Camera; the target is one unit ahead."""
    rotation = world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"])
    position = np.asarray(camera["position"], dtype=np.float64)
    x, y, z, w = rotation_to_quaternion(rotation)
    tan_half_h = math.tan(float(camera["hFOV_deg"]) * 0.5 * DEG2RAD)
    return {
        "position": _xyz(position),
        "target": _xyz(position - rotation[:, 2]),
        "zoom": 1.0,
        "cameraType": "perspective",
        "quaternion": {"x": float(x), "y": float(y), "z": float(z), "w": float(w)},
        "fov": 2.0 * math.atan(tan_half_h / aspect) * RAD2DEG,
        "aspect": float(aspect),
    }
