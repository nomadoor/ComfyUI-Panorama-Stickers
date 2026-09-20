import json
import subprocess
from pathlib import Path

import numpy as np

from comfyui_pano_suite.core.cutout import build_cutout_sampling_map
from comfyui_pano_suite.core.math import camera_basis
from comfyui_pano_suite.core.stickers import compose_single_sticker_to_canvas_erp


REPO_ROOT = Path(__file__).resolve().parent.parent


def _normalized_camera_ray(basis, film_x, film_y):
    right, up, forward = basis
    ray = forward + float(film_x) * right + float(film_y) * up
    return ray / np.linalg.norm(ray)


def _glsl_reference_camera_basis(yaw_deg, pitch_deg, roll_deg):
    """Mirror CAMERA_BASIS_GLSL for algebraic parity, not GPU highp precision.

    Keep this reference in sync with web_src/pano_gl_renderer.js.
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


def test_js_glsl_and_python_generate_the_same_camera_rays():
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
    glsl_reference_rays = np.asarray([
        [
            _normalized_camera_ray(
                _glsl_reference_camera_basis(yaw, pitch, roll),
                film_x,
                film_y,
            )
            for film_x, film_y in film_points
        ]
        for yaw, pitch, roll in angles
    ])
    assert np.allclose(js_rays, python_rays, atol=2e-6)
    assert np.allclose(glsl_reference_rays, python_rays, atol=2e-6)


def test_glsl_uses_the_same_explicit_rotation_without_changing_its_scalar_uniform_contract():
    source = (REPO_ROOT / "web_src" / "pano_gl_renderer.js").read_text(encoding="utf-8")
    camera_glsl_start = source.index("const CAMERA_BASIS_GLSL")
    camera_glsl_end = source.index("`;", camera_glsl_start) + 2
    camera_glsl = source[camera_glsl_start:camera_glsl_end]

    assert 'import { cameraBasis } from "./pano_camera_math.js";' in source
    assert "const CAMERA_BASIS_GLSL" in source
    assert camera_glsl.count("mat3 cameraBasis(float yaw, float pitch, float roll)") == 1
    assert "vec3 fwd = normalize(vec3(cp * sy, sp, cp * cy));" in camera_glsl
    assert "vec3 right = vec3(cy, 0.0, -sy);" in camera_glsl
    assert "vec3 up = normalize(cross(fwd, right));" in camera_glsl
    assert "vec3 rolledRight = normalize(right * cr + up * sr);" in camera_glsl
    assert "vec3 rolledUp = normalize(right * (-sr) + up * cr);" in camera_glsl
    assert "return mat3(rolledRight, rolledUp, fwd);" in camera_glsl
    assert source.count("${CAMERA_BASIS_GLSL}") == 2
    assert source.count("uniform float u_yaw;") == 2
    assert source.count("uniform float u_pitch;") == 2
    assert source.count("uniform float u_roll;") == 2
    assert "gl.uniform1f(backgroundUniforms.yaw" in source
    assert "gl.uniform1f(layerUniforms.yaw" in source
    assert "worldUp" not in camera_glsl
    assert "> 0.999" not in camera_glsl


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
