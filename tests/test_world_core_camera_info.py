import numpy as np
import pytest

gaussian_splat = pytest.importorskip(
    "comfy_extras.nodes_gaussian_splat",
    reason="ComfyUI core is required for CreateCameraInfo parity",
)

from comfyui_pano_suite.core.world import camera_from_camera_info, camera_info_from_camera, world_rotation


def _create_camera_info(mode, target=(0.0, 0.0, 0.0), roll=0.0, fov=35.0, zoom=1.0):
    output = gaussian_splat.CreateCameraInfo.execute(
        mode,
        *target,
        roll,
        fov,
        zoom=zoom,
        camera_type="perspective",
    )
    return output.args[0]


def test_core_look_at_roll_is_panorama_roll():
    camera_info = _create_camera_info(
        {"mode": "look_at", "position_x": 0.0, "position_y": 0.0, "position_z": 0.0},
        target=(0.0, 0.0, -1.0),
        roll=25.0,
    )
    camera = camera_from_camera_info(camera_info, aspect=1.0)

    assert np.allclose(
        (camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]),
        (0.0, 0.0, 25.0),
        atol=1e-4,
    )


def test_core_look_at_camera_faces_its_target():
    camera_info = _create_camera_info(
        {"mode": "look_at", "position_x": 4.0, "position_y": 3.0, "position_z": 2.0},
        target=(1.0, -1.0, -3.0),
        roll=-40.0,
    )
    camera = camera_from_camera_info(camera_info, aspect=1.0)

    forward = -world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"])[:, 2]
    expected = np.array([1.0 - 4.0, -1.0 - 3.0, -3.0 - 2.0])
    assert np.allclose(forward, expected / np.linalg.norm(expected), atol=1e-5)
    assert np.isclose(camera["roll_deg"], -40.0, atol=1e-4)


def test_state_camera_survives_the_core_quaternion_mode():
    camera = {
        "position": [0.5, 1.0, -2.0],
        "yaw_deg": -123.0,
        "pitch_deg": 61.0,
        "roll_deg": -42.0,
        "hFOV_deg": 70.0,
    }
    exported = camera_info_from_camera(camera, aspect=1.5)
    quaternion = exported["quaternion"]
    camera_info = _create_camera_info(
        {
            "mode": "quaternion",
            "position_x": exported["position"]["x"],
            "position_y": exported["position"]["y"],
            "position_z": exported["position"]["z"],
            "quat_x": quaternion["x"],
            "quat_y": quaternion["y"],
            "quat_z": quaternion["z"],
            "quat_w": quaternion["w"],
        },
        fov=exported["fov"],
    )

    target = np.array([camera_info["target"][axis] for axis in "xyz"])
    exported_target = np.array([exported["target"][axis] for axis in "xyz"])
    assert np.allclose(target, exported_target, atol=1e-5)

    restored = camera_from_camera_info(camera_info, aspect=1.5)
    assert np.allclose(restored["position"], camera["position"], atol=1e-6)
    for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"):
        assert np.isclose(restored[key], camera[key], atol=1e-3), key
