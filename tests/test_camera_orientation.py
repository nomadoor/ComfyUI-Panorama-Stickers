import json
import subprocess
from pathlib import Path

import numpy as np

from comfyui_pano_suite.core.cutout import build_cutout_sampling_map
from comfyui_pano_suite.core.math import camera_basis
from comfyui_pano_suite.core.stickers import compose_single_sticker_to_canvas_erp
from comfyui_pano_suite.core.world import (
    camera_from_camera_info,
    camera_info_from_camera,
    pano_to_world,
    panorama_angles,
    rotation_to_quaternion,
    world_rotation,
)


REPO_ROOT = Path(__file__).resolve().parent.parent


def _normalized_camera_ray(basis, film_x, film_y):
    right, up, forward = basis
    ray = forward + float(film_x) * right + float(film_y) * up
    return ray / np.linalg.norm(ray)


def _reference_camera_basis(yaw_deg, pitch_deg, roll_deg):
    """An independent construction of the camera basis: forward, a level right, then roll.

    This was the previous WebGL shader's construction; it stays as a fixed reference.
    """
    yaw = np.deg2rad(yaw_deg)
    pitch = np.deg2rad(pitch_deg)
    roll = np.deg2rad(roll_deg)
    cy, sy = np.cos(yaw), np.sin(yaw)
    cp, sp = np.cos(pitch), np.sin(pitch)
    cr, sr = np.cos(roll), np.sin(roll)

    forward = np.array([cp * sy, sp, cp * cy], dtype=np.float64)
    forward /= np.linalg.norm(forward)
    right = np.array([cy, 0.0, -sy], dtype=np.float64)
    up = np.cross(forward, right)
    up /= np.linalg.norm(up)
    rolled_right = right * cr + up * sr
    rolled_right /= np.linalg.norm(rolled_right)
    rolled_up = right * -sr + up * cr
    rolled_up /= np.linalg.norm(rolled_up)
    return rolled_right, rolled_up, forward


def test_js_and_python_generate_the_same_camera_rays():
    angles = [
        [0.0, 0.0, 0.0],
        [90.0, 0.0, 0.0],
        [-90.0, 0.0, 0.0],
        [0.0, 45.0, 0.0],
        [0.0, -45.0, 0.0],
        [0.0, 0.0, 45.0],
        [0.0, 0.0, -45.0],
        [37.0, -28.0, 19.0],
        [-123.0, 61.0, -42.0],
        [15.0, 89.0, 23.0],
        [-80.0, -89.0, -31.0],
        [90.0, 89.9999, 0.0],
        [-90.0, -89.9999, 45.0],
        [135.0, 90.0, -20.0],
    ]
    film_points = [
        [0.0, 0.0],
        [-1.0, 0.0],
        [1.0, 0.0],
        [0.0, 1.0],
        [0.0, -1.0],
        [-1.0, 1.0],
        [1.0, 1.0],
        [-1.0, -1.0],
        [1.0, -1.0],
    ]
    payload = json.dumps({"angles": angles, "filmPoints": film_points})
    script = f"""
      import {{ cameraBasis }} from './web_src/pano_camera_math.js';
      const input = {payload};
      const normalize = (v) => {{
        const length = Math.hypot(v.x, v.y, v.z);
        return [v.x / length, v.y / length, v.z / length];
      }};
      const rays = input.angles.map(([yaw, pitch, roll]) => {{
        const basis = cameraBasis(yaw, pitch, roll);
        return input.filmPoints.map(([x, y]) => normalize({{
          x: basis.fwd.x + x * basis.right.x + y * basis.up.x,
          y: basis.fwd.y + x * basis.right.y + y * basis.up.y,
          z: basis.fwd.z + x * basis.right.z + y * basis.up.z,
        }}));
      }});
      process.stdout.write(JSON.stringify(rays));
    """
    result = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        cwd=REPO_ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    assert result.returncode == 0, result.stderr
    js_rays = np.asarray(json.loads(result.stdout), dtype=np.float64)

    python_rays = np.asarray([
        [
            _normalized_camera_ray(camera_basis(yaw, pitch, roll), film_x, film_y)
            for film_x, film_y in film_points
        ]
        for yaw, pitch, roll in angles
    ])
    reference_rays = np.asarray([
        [
            _normalized_camera_ray(
                _reference_camera_basis(yaw, pitch, roll),
                film_x,
                film_y,
            )
            for film_x, film_y in film_points
        ]
        for yaw, pitch, roll in angles
    ])
    assert np.allclose(js_rays, python_rays, atol=2e-6)
    assert np.allclose(reference_rays, python_rays, atol=2e-6)


def test_js_and_python_agree_on_world_camera_rotation():
    angles = [
        [0.0, 0.0, 0.0],
        [90.0, 0.0, 0.0],
        [0.0, 45.0, 30.0],
        [37.0, -28.0, 19.0],
        [-123.0, 61.0, -42.0],
        [170.0, -10.0, 175.0],
        [15.0, 89.0, 23.0],
        [-80.0, -90.0, -31.0],
    ]
    cameras = [
        {"position": [0.5, 1.0, -2.0], "yaw_deg": yaw, "pitch_deg": pitch, "roll_deg": roll, "hFOV_deg": 70.0}
        for yaw, pitch, roll in angles
    ]
    partial_camera_infos = [
        {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "target": {"x": 1.0, "y": 0.5, "z": -2.0}, "cameraType": "perspective"},
        {"position": {"x": 1.0, "y": 0.0, "z": 0.0}, "target": {"x": 0.0, "y": 0.0, "z": 0.0}, "fov": 0, "zoom": 0},
        {"position": {"x": 0.0, "y": 3.0, "z": 0.0}, "target": {"x": 0.0, "y": 0.0, "z": 0.0}, "quaternion": {}, "fov": 60.0, "zoom": 2.0},
        {"position": {"x": 0.0, "y": 0.0, "z": 0.0}, "target": {"x": 0.0, "y": 0.0, "z": 0.0}, "quaternion": {"y": 0.5}, "fov": 45.0},
    ]
    payload = json.dumps({"angles": angles, "cameras": cameras, "partialCameraInfos": partial_camera_infos})
    script = f"""
      import {{ cameraFromCameraInfo, cameraInfoFromCamera, panoramaAngles, rotationToQuaternion, worldRotation }} from './web_src/pano_world.js';
      const input = {payload};
      const rotations = input.angles.map(([yaw, pitch, roll]) => worldRotation(yaw, pitch, roll));
      process.stdout.write(JSON.stringify({{
        rotations,
        quaternions: rotations.map((rotation) => {{
          const q = rotationToQuaternion(rotation);
          return [q.x, q.y, q.z, q.w];
        }}),
        angles: rotations.map((rotation) => {{
          const a = panoramaAngles(rotation);
          return [a.yawDeg, a.pitchDeg, a.rollDeg];
        }}),
        cameraInfos: input.cameras.map((camera) => cameraInfoFromCamera(camera, 1.5)),
        cameras: input.cameras.map((camera) => cameraFromCameraInfo(cameraInfoFromCamera(camera, 1.5), 1.5)),
        partialCameras: input.partialCameraInfos.map((cameraInfo) => cameraFromCameraInfo(cameraInfo, 1.5)),
      }}));
    """
    result = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        cwd=REPO_ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    assert result.returncode == 0, result.stderr
    js = json.loads(result.stdout)

    python_rotations = np.asarray([world_rotation(*a) for a in angles])
    reference_rotations = []
    for yaw, pitch, roll in angles:
        right, up, forward = _reference_camera_basis(yaw, pitch, roll)
        reference_rotations.append(np.stack([pano_to_world(right), pano_to_world(up), -pano_to_world(forward)], axis=1))
    assert np.allclose(js["rotations"], python_rotations, atol=2e-6)
    assert np.allclose(np.asarray(reference_rotations), python_rotations, atol=2e-6)
    assert np.allclose(js["quaternions"], [rotation_to_quaternion(r) for r in python_rotations], atol=2e-6)
    assert np.allclose(js["angles"], [panorama_angles(r) for r in python_rotations], atol=1e-4)

    for camera, js_info, js_camera in zip(cameras, js["cameraInfos"], js["cameras"]):
        info = camera_info_from_camera(camera, 1.5)
        for key in ("position", "target", "quaternion"):
            assert np.allclose(list(js_info[key].values()), list(info[key].values()), atol=2e-6), key
        assert np.isclose(js_info["fov"], info["fov"])
        restored = camera_from_camera_info(info, 1.5)
        for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"):
            assert np.isclose(js_camera[key], restored[key], atol=1e-4), key

    for camera_info, js_camera in zip(partial_camera_infos, js["partialCameras"]):
        camera = camera_from_camera_info(camera_info, 1.5)
        assert np.allclose(js_camera["position"], camera["position"])
        for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg"):
            assert np.isclose(js_camera[key], camera[key], atol=1e-9), key


def test_cutout_sampling_stays_continuous_near_the_north_pole():
    sampling = build_cutout_sampling_map(
        (100, 200, 3),
        yaw_deg=0.0,
        pitch_deg=89.0,
        h_fov_deg=90.0,
        v_fov_deg=90.0,
        roll_deg=0.0,
        out_w=8,
        out_h=8,
    )

    assert np.isclose(sampling["u"][0, 0], 25.323104, atol=1e-5)
    assert np.isclose(sampling["v"][0, 0], 27.974462, atol=1e-5)


def test_sticker_screen_right_keeps_increasing_erp_longitude_near_the_pole():
    sticker_image = np.zeros((2, 2, 4), dtype=np.float32)
    sticker_image[:, 0] = [1.0, 0.0, 0.0, 1.0]
    sticker_image[:, 1] = [0.0, 1.0, 0.0, 1.0]
    canvas = np.zeros((180, 360, 4), dtype=np.float32)

    rendered = compose_single_sticker_to_canvas_erp(
        canvas,
        {
            "image_rgba": sticker_image,
            "yaw_deg": 0.0,
            "pitch_deg": 89.0,
            "hFOV_deg": 20.0,
            "vFOV_deg": 10.0,
            "rot_deg": 0.0,
        },
        {},
    )

    red_pixels = np.argwhere((rendered[..., 0] > rendered[..., 1]) & (rendered[..., 3] > 0.1))
    green_pixels = np.argwhere((rendered[..., 1] > rendered[..., 0]) & (rendered[..., 3] > 0.1))
    assert red_pixels.size > 0
    assert green_pixels.size > 0
    assert float(red_pixels[:, 1].mean()) < float(green_pixels[:, 1].mean())
