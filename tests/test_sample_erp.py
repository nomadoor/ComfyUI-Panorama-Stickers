import numpy as np
import pytest
from comfyui_pano_suite.core.math import sample_erp_bilinear

def test_sample_erp_bilinear_simple():
    # 2x2 ERP image, 3 channels
    erp = np.array([
        [[1, 0, 0], [0, 1, 0]],
        [[0, 0, 1], [1, 1, 1]]
    ], dtype=np.float32)
    # erp[0, 0] = red
    # erp[0, 1] = green
    # erp[1, 0] = blue
    # erp[1, 1] = white

    # Sample exactly at the centers
    # u=0.5, v=0.5 should be erp[0, 0] if we used nearest, but bilinear with 2x2...
    # Wait, floor(0.5)=0, floor(0.5)=0. fx=0.5, fy=0.5.
    # It will interpolate between all 4 pixels.
    u = np.array([[0.0, 1.0], [0.0, 1.0]], dtype=np.float32)
    v = np.array([[0.0, 0.0], [1.0, 1.0]], dtype=np.float32)

    out = sample_erp_bilinear(erp, u, v)

    # At (0,0), it should be exactly erp[0,0]
    assert np.allclose(out[0, 0], erp[0, 0])
    # At (0,1), it should be exactly erp[0,1]
    assert np.allclose(out[0, 1], erp[0, 1])
    # At (1,0), it should be exactly erp[1,0]
    assert np.allclose(out[1, 0], erp[1, 0])
    # At (1,1), it should be exactly erp[1,1]
    assert np.allclose(out[1, 1], erp[1, 1])

def test_sample_erp_bilinear_interpolation():
    erp = np.array([
        [[0, 0, 0], [1, 1, 1]],
        [[0, 0, 0], [1, 1, 1]]
    ], dtype=np.float32)

    # Sample at u=0.5 (halfway between 0 and 1)
    u = np.array([[0.5]], dtype=np.float32)
    v = np.array([[0.0]], dtype=np.float32)

    out = sample_erp_bilinear(erp, u, v)
    assert np.allclose(out[0, 0], [0.5, 0.5, 0.5])

def test_sample_erp_bilinear_wrapping():
    # 2x1 image (width=2, height=1)
    erp = np.array([
        [[1, 0, 0], [0, 1, 0]]
    ], dtype=np.float32)

    # Sample at u=1.5 (halfway between index 1 and wrapping back to index 0)
    u = np.array([[1.5]], dtype=np.float32)
    v = np.array([[0.0]], dtype=np.float32)

    out = sample_erp_bilinear(erp, u, v)
    # Should be average of [0, 1, 0] and [1, 0, 0] -> [0.5, 0.5, 0]
    assert np.allclose(out[0, 0], [0.5, 0.5, 0.0])

def test_sample_erp_bilinear_height_1():
    # 2x1 image (width=2, height=1)
    erp = np.array([
        [[1, 0, 0], [0, 1, 0]]
    ], dtype=np.float32)

    # Sample at center
    u = np.array([[0.0, 1.0]], dtype=np.float32)
    v = np.array([[0.0, 0.0]], dtype=np.float32)

    out = sample_erp_bilinear(erp, u, v)
    assert out.shape == (1, 2, 3)
    assert np.allclose(out[0, 0], [1, 0, 0])
    assert np.allclose(out[0, 1], [0, 1, 0])

if __name__ == "__main__":
    # Manual run if pytest is missing
    try:
        test_sample_erp_bilinear_simple()
        test_sample_erp_bilinear_interpolation()
        test_sample_erp_bilinear_wrapping()
        test_sample_erp_bilinear_height_1()
        print("All manual tests passed!")
    except Exception as e:
        print(f"Tests failed: {e}")
