import time
import numpy as np
import math

# Try to import the current implementation
try:
    from comfyui_pano_suite.core.math import sample_erp_bilinear
except ImportError:
    # Fallback to a copy of the original implementation if import fails
    def sample_erp_bilinear(erp: np.ndarray, u: np.ndarray, v: np.ndarray) -> np.ndarray:
        h, w, c = erp.shape
        x0 = np.floor(u).astype(np.int32)
        y0 = np.floor(v).astype(np.int32)
        x1 = (x0 + 1) % w
        y1 = np.clip(y0 + 1, 0, h - 1)

        fx = (u - x0)[..., None]
        fy = (v - y0)[..., None]

        c00 = erp[y0, x0]
        c10 = erp[y0, x1]
        c01 = erp[y1, x0]
        c11 = erp[y1, x1]

        c0 = c00 * (1.0 - fx) + c10 * fx
        c1 = c01 * (1.0 - fx) + c11 * fx
        return c0 * (1.0 - fy) + c1 * fy

def benchmark():
    # Setup
    H, W = 2048, 4096
    out_H, out_W = 1024, 1024
    erp = np.random.rand(H, W, 3).astype(np.float32)
    u = np.random.rand(out_H, out_W).astype(np.float32) * W
    v = np.random.rand(out_H, out_W).astype(np.float32) * (H - 1)

    print(f"Benchmarking sample_erp_bilinear with ERP {W}x{H} and output {out_W}x{out_H}...")

    # Warmup
    _ = sample_erp_bilinear(erp, u, v)

    # Measure
    start = time.perf_counter()
    iters = 10
    for _ in range(iters):
        _ = sample_erp_bilinear(erp, u, v)
    end = time.perf_counter()

    avg_time = (end - start) / iters
    print(f"Average time over {iters} iterations: {avg_time:.4f} seconds")

if __name__ == "__main__":
    try:
        benchmark()
    except Exception as e:
        print(f"Benchmark failed: {e}")
        print("This is expected if dependencies (numpy) are missing in the environment.")
