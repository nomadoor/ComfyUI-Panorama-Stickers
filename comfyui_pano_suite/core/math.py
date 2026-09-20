import math
import numpy as np

try:
    import torch
    import torch.nn.functional as F
    HAS_TORCH = True
except ImportError:
    HAS_TORCH = False

try:
    import cv2
    HAS_CV2 = True
except ImportError:
    HAS_CV2 = False


DEG2RAD = math.pi / 180.0
RAD2DEG = 180.0 / math.pi


def clamp(v: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, v))


def wrap_yaw_deg(yaw: float) -> float:
    return (yaw + 180.0) % 360.0 - 180.0


def camera_basis(
    yaw_deg: float,
    pitch_deg: float,
    roll_deg: float = 0.0,
) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Return ERP camera right, up, and forward axes.

    Camera-local axes are +X right, +Y up, and +Z forward. Orientation is
    ``Ry(yaw) @ Rx(-pitch) @ Rz(roll)``: positive yaw looks right, positive
    pitch looks up, and positive roll turns the image clockwise. The explicit
    angle construction stays continuous at the poles and must match the JS
    reference implementation in ``web_src/pano_camera_math.js``.
    """
    yaw = float(yaw_deg) * DEG2RAD
    pitch = float(pitch_deg) * DEG2RAD
    roll = float(roll_deg) * DEG2RAD
    cy, sy = math.cos(yaw), math.sin(yaw)
    cp, sp = math.cos(pitch), math.sin(pitch)
    cr, sr = math.cos(roll), math.sin(roll)

    right = np.array([
        cy * cr - sy * sp * sr,
        cp * sr,
        -sy * cr - cy * sp * sr,
    ], dtype=np.float32)
    up = np.array([
        -cy * sr - sy * sp * cr,
        cp * cr,
        sy * sr - cy * sp * cr,
    ], dtype=np.float32)
    forward = np.array([
        sy * cp,
        sp,
        cy * cp,
    ], dtype=np.float32)
    return right, up, forward


def dir_to_lon_lat(d: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    x = d[..., 0]
    y = np.clip(d[..., 1], -1.0, 1.0)
    z = d[..., 2]
    lon = np.arctan2(x, z)
    lat = np.arcsin(y)
    return lon, lat


def lon_lat_to_erp(lon: np.ndarray, lat: np.ndarray, w: int, h: int) -> tuple[np.ndarray, np.ndarray]:
    u = ((lon / (2.0 * math.pi)) + 0.5) * w
    v = (0.5 - (lat / math.pi)) * h
    u = np.mod(u, w)
    v = np.clip(v, 0.0, h - 1.0)
    return u, v


def sample_erp_bilinear(erp: np.ndarray, u: np.ndarray, v: np.ndarray) -> np.ndarray:
    """Samples an Equirectangular image using bilinear interpolation with horizontal wrapping."""
    h, w, c = erp.shape
    # Normalize coordinates to ensure correct wrapping and clipping across all paths
    u = np.mod(u, w)
    v = np.clip(v, 0.0, h - 1.0)

    if HAS_TORCH:
        # Ensure contiguous and correct dtype for torch
        # erp is (H, W, C) -> torch needs (B, C, H, W)
        t_erp = torch.from_numpy(np.ascontiguousarray(erp)).to(torch.float32).permute(2, 0, 1)[None, ...]
        # Pad horizontally for wrapping
        t_erp_padded = torch.cat([t_erp, t_erp[:, :, :, :1]], dim=3)

        # Grid sample coordinates in [-1, 1]
        # x corresponds to u (width), y corresponds to v (height)
        # padded width is w+1. index 0 maps to -1, index w maps to 1.
        grid_u = (torch.from_numpy(np.ascontiguousarray(u)).to(torch.float32) / w) * 2.0 - 1.0

        # Avoid division by zero if h=1
        v_denom = float(h - 1) if h > 1 else 1.0
        grid_v = (torch.from_numpy(np.ascontiguousarray(v)).to(torch.float32) / v_denom) * 2.0 - 1.0

        grid = torch.stack([grid_u, grid_v], dim=-1)[None, ...]

        # Note: we use align_corners=True to exactly match pixel center sampling
        out = F.grid_sample(t_erp_padded, grid, mode='bilinear', padding_mode='border', align_corners=True)
        return out[0].permute(1, 2, 0).cpu().numpy().astype(erp.dtype)

    if HAS_CV2:
        # Optimize by using cv2.remap. To handle horizontal wrapping (longitude),
        # we pad the image by 1 pixel on the right side.
        erp_padded = np.concatenate([erp, erp[:, :1, :]], axis=1)
        # Using BORDER_REPLICATE for the vertical axis (latitude) to match np.clip.
        # The horizontal axis wrapping is handled by the padding + u coordinates in [0, w].
        return cv2.remap(
            erp_padded,
            u.astype(np.float32),
            v.astype(np.float32),
            interpolation=cv2.INTER_LINEAR,
            borderMode=cv2.BORDER_REPLICATE,
        )

    # Manual NumPy fallback
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


def round_to_multiple(x: float, multiple: int = 8, min_val: int = 8) -> int:
    if multiple <= 0:
        raise ValueError("multiple must be > 0")
    return int(max(min_val, round(float(x) / float(multiple)) * multiple))


def derive_rectilinear_aspect_ratio(hfov_deg: float, vfov_deg: float) -> float:
    # Geometry source of truth: output aspect follows tangent ratio of FOV (rectilinear).
    h_tan = math.tan(max(0.1, float(hfov_deg)) * 0.5 * DEG2RAD)
    v_tan = math.tan(max(0.1, float(vfov_deg)) * 0.5 * DEG2RAD)
    return max(0.05, min(20.0, h_tan / max(v_tan, 1e-6)))


def calculate_output_dimensions(
    hfov_deg: float,
    vfov_deg: float,
    long_side: int = 1024,
    max_side: int = 4096,
) -> tuple[int, int]:
    max_side = max(int(max_side), 8)
    long_side = int(np.clip(long_side, 8, max_side))
    ratio = derive_rectilinear_aspect_ratio(hfov_deg, vfov_deg)
    if ratio >= 1.0:
        ow_val = round_to_multiple(long_side)
        oh_val = round_to_multiple(long_side / ratio)
    else:
        oh_val = round_to_multiple(long_side)
        ow_val = round_to_multiple(long_side * ratio)

    return (
        int(np.clip(ow_val, 8, max_side)),
        int(np.clip(oh_val, 8, max_side)),
    )


def calculate_dimensions_from_megapixels(
    megapixels: float,
    hfov_deg: float,
    vfov_deg: float,
    multiple_of: int = 8,
    max_side: int = 8192,
) -> tuple[int, int]:
    target_pixels = megapixels * 1_000_000.0

    # Calculate aspect ratio (width / height)
    # aspect = tan(hfov/2) / tan(vfov/2)
    t_h = math.tan(max(0.01, float(hfov_deg)) * 0.5 * DEG2RAD)
    t_v = math.tan(max(0.01, float(vfov_deg)) * 0.5 * DEG2RAD)
    aspect = t_h / max(t_v, 1e-6)

    # Solve W * H = target, W / H = aspect
    # H^2 * aspect = target -> H = sqrt(target / aspect)
    if aspect <= 1e-6:
        aspect = 1.0

    h_float = math.sqrt(target_pixels / aspect)
    w_float = h_float * aspect

    w_int = round_to_multiple(w_float, multiple_of)
    h_int = round_to_multiple(h_float, multiple_of)

    # Safety clamp
    w_final = max(multiple_of, min(max_side, w_int))
    h_final = max(multiple_of, min(max_side, h_int))

    return w_final, h_final


def finite_float(value, default: float = 0.0) -> float:
    try:
        out = float(value)
    except Exception:
        return float(default)
    if not np.isfinite(out):
        return float(default)
    return out


def finite_int(value, default: int = 0) -> int:
    try:
        out = int(float(value))
    except Exception:
        return int(default)
    return int(out)
