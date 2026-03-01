import numpy as np
import pytest
from comfyui_pano_suite.core.math import (
    calculate_output_dimensions,
    calculate_dimensions_from_megapixels,
    derive_rectilinear_aspect_ratio,
    orthonormal_basis_from_forward,
    round_to_multiple,
    finite_float,
    finite_int,
    dir_to_lon_lat,
    yaw_pitch_to_dir,
)


def is_orthonormal(right, up, forward, tol=1e-6):
    # Check unit lengths
    assert np.isclose(np.linalg.norm(right), 1.0, atol=tol)
    assert np.isclose(np.linalg.norm(up), 1.0, atol=tol)
    assert np.isclose(np.linalg.norm(forward), 1.0, atol=tol)

    # Check orthogonality
    assert np.isclose(np.dot(right, up), 0.0, atol=tol)
    assert np.isclose(np.dot(right, forward), 0.0, atol=tol)
    assert np.isclose(np.dot(up, forward), 0.0, atol=tol)

    # Check right-handedness: right x up = forward
    assert np.allclose(np.cross(right, up), forward, atol=tol)


def test_orthonormal_basis_normal():
    forward = np.array([1.0, 0.0, 0.0])
    right, up, f = orthonormal_basis_from_forward(forward)
    assert not np.isnan(right).any()
    assert not np.isnan(up).any()
    assert not np.isnan(f).any()
    is_orthonormal(right, up, f)


def test_orthonormal_basis_singularity_up():
    forward = np.array([0.0, 1.0, 0.0])
    right, up, f = orthonormal_basis_from_forward(forward)
    assert not np.isnan(right).any()
    assert not np.isnan(up).any()
    assert not np.isnan(f).any()
    is_orthonormal(right, up, f)


def test_orthonormal_basis_singularity_down():
    forward = np.array([0.0, -1.0, 0.0])
    right, up, f = orthonormal_basis_from_forward(forward)
    assert not np.isnan(right).any()
    assert not np.isnan(up).any()
    assert not np.isnan(f).any()
    is_orthonormal(right, up, f)


def test_orthonormal_basis_near_singularity():
    # Vector very close to [0, 1, 0]
    # dot([0, 0.9995, 0.0316], [0, 1, 0]) = 0.9995 > 0.999
    forward = np.array([0.0, 0.9995, 0.0316])
    right, up, f = orthonormal_basis_from_forward(forward)
    assert not np.isnan(right).any()
    assert not np.isnan(up).any()
    assert not np.isnan(f).any()
    is_orthonormal(right, up, f)


def test_orthonormal_basis_zero_vector():
    forward = np.array([0.0, 0.0, 0.0])
    right, up, f = orthonormal_basis_from_forward(forward)
    assert not np.isnan(right).any()
    assert not np.isnan(up).any()
    assert not np.isnan(f).any()

    # orthonormal_basis_from_forward yields zero vectors for zero input due to its
    # epsilon-normalization logic (v / (norm(v) + 1e-8)).
    # We assert this contract instead of calling is_orthonormal.
    assert np.allclose(right, 0.0)
    assert np.allclose(up, 0.0)
    assert np.allclose(f, 0.0)


def test_orthonormal_basis_random():
    for _ in range(100):
        forward = np.random.randn(3)
        right, up, f = orthonormal_basis_from_forward(forward)
        assert not np.isnan(right).any()
        assert not np.isnan(up).any()
        assert not np.isnan(f).any()
        is_orthonormal(right, up, f)


def test_round_to_multiple():
    assert round_to_multiple(10, 8) == 8
    assert round_to_multiple(12, 8) == 16
    assert round_to_multiple(7, 8) == 8  # min_val
    assert round_to_multiple(0, 8, min_val=0) == 0
    assert round_to_multiple(100, 64) == 128


def test_derive_rectilinear_aspect_ratio():
    # 90 degrees horizontal and vertical should be 1.0 aspect ratio
    assert np.isclose(derive_rectilinear_aspect_ratio(90, 90), 1.0)
    # 90 degrees h, ~53.13 degrees v should be ~2.0 aspect ratio (tan(45)/tan(26.56))
    # h_tan = tan(45) = 1.0
    # v_tan = tan(26.565) = 0.5
    # ratio = 2.0
    assert np.isclose(derive_rectilinear_aspect_ratio(90, 53.13010235), 2.0, atol=1e-4)

    # Extreme FOVs
    assert derive_rectilinear_aspect_ratio(179, 1) > 10.0
    assert derive_rectilinear_aspect_ratio(1, 179) < 0.1


def test_calculate_output_dimensions():
    # Square landscape
    w, h = calculate_output_dimensions(90, 90, long_side=1024)
    assert w == 1024
    assert h == 1024

    # Wide landscape (2:1)
    w, h = calculate_output_dimensions(90, 53.1301, long_side=1024)
    assert w == 1024
    assert h == 512

    # Tall portrait (1:2)
    w, h = calculate_output_dimensions(53.1301, 90, long_side=1024)
    assert w == 512
    assert h == 1024

    # Max side clipping
    w, h = calculate_output_dimensions(90, 90, long_side=8192, max_side=4096)
    assert w == 4096
    assert h == 4096


def test_round_to_multiple_guards():
    with pytest.raises(ValueError, match="multiple must be > 0"):
        round_to_multiple(10, 0)
    with pytest.raises(ValueError, match="multiple must be > 0"):
        round_to_multiple(10, -1)


def test_calculate_output_dimensions_guards():
    # max_side < 8 should be normalized to 8
    w, h = calculate_output_dimensions(90, 90, long_side=1024, max_side=4)
    assert w == 8
    assert h == 8

    # long_side < 8 should be clamped to 8
    w, h = calculate_output_dimensions(90, 90, long_side=2, max_side=1024)
    assert w == 8
    assert h == 8


def test_finite_float():
    assert finite_float(1.0) == 1.0
    assert finite_float("1.5") == 1.5
    assert finite_float(float("inf")) == 0.0
    assert finite_float(float("-inf")) == 0.0
    assert finite_float(float("nan")) == 0.0
    assert finite_float("invalid") == 0.0
    assert finite_float("invalid", default=5.0) == 5.0
    assert finite_float(float("inf"), default=5.0) == 5.0


def test_finite_int():
    assert finite_int(1) == 1
    assert finite_int(1.5) == 1
    assert finite_int("1") == 1
    assert finite_int("1.5") == 1
    assert finite_int("invalid") == 0
    assert finite_int("invalid", default=5) == 5
    assert finite_int(float("inf"), default=5) == 5
    assert finite_int(float("nan"), default=5) == 5


def test_dir_to_lon_lat_axes():
    # Forward: yaw=0, pitch=0
    d = np.array([0.0, 0.0, 1.0])
    lon, lat = dir_to_lon_lat(d)
    assert np.isclose(lon, 0.0)
    assert np.isclose(lat, 0.0)

    # Right: yaw=90, pitch=0
    d = np.array([1.0, 0.0, 0.0])
    lon, lat = dir_to_lon_lat(d)
    assert np.isclose(lon, np.pi / 2)
    assert np.isclose(lat, 0.0)

    # Up: yaw=0, pitch=90
    d = np.array([0.0, 1.0, 0.0])
    lon, lat = dir_to_lon_lat(d)
    assert np.isclose(lon, 0.0)
    assert np.isclose(lat, np.pi / 2)

    # Down: yaw=0, pitch=-90
    d = np.array([0.0, -1.0, 0.0])
    lon, lat = dir_to_lon_lat(d)
    assert np.isclose(lon, 0.0)
    assert np.isclose(lat, -np.pi / 2)


def test_dir_to_lon_lat_roundtrip():
    for yaw_deg in [-179, -90, 0, 90, 179]:  # Avoid 180/-180 ambiguity
        for pitch_deg in [-89, -45, 0, 45, 89]:  # Avoid poles where lon is undefined
            d = yaw_pitch_to_dir(yaw_deg, pitch_deg)
            lon, lat = dir_to_lon_lat(d)

            lon_deg = lon * 180.0 / np.pi
            lat_deg = lat * 180.0 / np.pi

            assert np.isclose(lat_deg, pitch_deg, atol=1e-5)
            assert np.isclose(lon_deg, yaw_deg, atol=1e-5)


def test_dir_to_lon_lat_clipping():
    # y slightly outside [-1, 1]
    d = np.array([0.0, 1.1, 0.0])
    _lon, lat = dir_to_lon_lat(d)
    assert np.isclose(lat, np.pi / 2)

    d = np.array([0.0, -1.1, 0.0])
    _lon, lat = dir_to_lon_lat(d)
    assert np.isclose(lat, -np.pi / 2)


def test_dir_to_lon_lat_vectorized():
    ds = np.array([
        [0.0, 0.0, 1.0],
        [1.0, 0.0, 0.0],
        [0.0, 1.0, 0.0],
    ])
    lons, lats = dir_to_lon_lat(ds)
    assert lons.shape == (3,)
    assert lats.shape == (3,)
    assert np.allclose(lons, [0.0, np.pi / 2, 0.0])
    assert np.allclose(lats, [0.0, 0.0, np.pi / 2])


def test_calculate_dimensions_from_megapixels():
    # 1.0 MP, 90x90 FOV (1:1 aspect) -> sqrt(1,000,000) = 1000x1000
    w, h = calculate_dimensions_from_megapixels(1.0, 90, 90, multiple_of=8)
    assert w == 1000
    assert h == 1000

    # 1.0 MP, 90x53.13 FOV (2:1 aspect)
    # H^2 = 1,000,000 / 2 = 500,000 -> H ~ 707.1
    # W = H * 2 ~ 1414.2
    # Round to multiple of 8
    # 707.1 -> 704 or 712? 707.1 / 8 = 88.38 -> 88 * 8 = 704
    # 1414.2 / 8 = 176.77 -> 177 * 8 = 1416
    w, h = calculate_dimensions_from_megapixels(1.0, 90, 53.13010235, multiple_of=8)
    # Allow small rounding diffs
    assert 1400 < w < 1430
    assert 690 < h < 720
    assert w % 8 == 0
    assert h % 8 == 0

    # Max side clamping
    # 100 MP -> 10000x10000 -> clamp to max_side
    w, h = calculate_dimensions_from_megapixels(100.0, 90, 90, max_side=4096)
    assert w == 4096
    assert h == 4096
