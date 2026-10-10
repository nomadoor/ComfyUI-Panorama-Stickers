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


def unit_float(array: np.ndarray) -> np.ndarray:
    """An image as float32 in 0..1: an 8-bit one (uint8) divided by 255, any other as float32 (itself when it is)."""
    if array.dtype == np.uint8:
        return array.astype(np.float32) / np.float32(255.0)
    return array.astype(np.float32, copy=False)


def unit_float_tensor(array: np.ndarray, device) -> "torch.Tensor":
    """`unit_float` of `array` as a tensor on `device`; an 8-bit image is uploaded as it is and converted there."""
    tensor = torch.tensor(array, device=device)
    return tensor.float().div_(255.0) if tensor.dtype == torch.uint8 else tensor.float()


def clamp(v: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, v))


def wrap_yaw_deg(yaw: float) -> float:
    return (yaw + 180.0) % 360.0 - 180.0


def camera_basis(
    yaw_deg: float,
    pitch_deg: float,
    roll_deg: float = 0.0,
    dtype=np.float32,
) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Return ERP camera right, up, and forward axes.

    Camera-local axes are +X right, +Y up, and +Z forward. Orientation is
    ``Ry(yaw) @ Rx(-pitch) @ Rz(roll)``: positive yaw looks right, positive
    pitch looks up, and positive roll turns the image clockwise. The explicit
    angle construction stays continuous at the poles and must match the JS
    reference implementation in ``web_src/pano_camera_math.js``. The axes are
    float32 for the renderers; World conversions ask for float64.
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
    ], dtype=dtype)
    up = np.array([
        -cy * sr - sy * sp * cr,
        cp * cr,
        sy * sr - cy * sp * cr,
    ], dtype=dtype)
    forward = np.array([
        sy * cp,
        sp,
        cy * cp,
    ], dtype=dtype)
    return right, up, forward


# The lens curve κ (docs/render-contract.md, "カメラのレンズ"; ADR 0042): a ray at angle θ from the optical axis lands
# r = f·tan(κθ)/κ from the image center (κ = 0: f·θ). web_src/pano_lens.js holds the same pair; tests/fixtures/lens/
# binds both. Below this |κθ| (or |κ·r|) the ratios tan(x)/x and atan(x)/x take their series, so κ near 0 neither
# loses digits nor divides 0 by 0, and κ = 0 is exactly the equidistant fisheye.
_LENS_SERIES = 1e-4
CURVE_MIN, CURVE_MAX = 0.0, 1.5


def _tan_ratio(x):
    """tan(x) / x, 1 at x = 0."""
    if HAS_TORCH and isinstance(x, torch.Tensor):
        small = x.abs() < _LENS_SERIES
        safe = torch.where(small, torch.ones_like(x), x)
        return torch.where(small, 1.0 + x * x / 3.0, torch.tan(safe) / safe)
    return 1.0 + x * x / 3.0 if abs(x) < _LENS_SERIES else math.tan(x) / x


def _atan_ratio(x):
    """atan(x) / x, 1 at x = 0."""
    if HAS_TORCH and isinstance(x, torch.Tensor):
        small = x.abs() < _LENS_SERIES
        safe = torch.where(small, torch.ones_like(x), x)
        return torch.where(small, 1.0 - x * x / 3.0, torch.atan(safe) / safe)
    return 1.0 - x * x / 3.0 if abs(x) < _LENS_SERIES else math.atan(x) / x


def lens_radius(theta, curve: float):
    """Where a ray `theta` radians off the optical axis lands, from the image center in units of f:
    tan(κθ)/κ, θ at κ = 0. Defined for κθ < π/2. A pinhole (κ = 1) is tan θ exactly."""
    if curve == 1.0:
        return torch.tan(theta) if HAS_TORCH and isinstance(theta, torch.Tensor) else math.tan(theta)
    return theta * _tan_ratio(theta * curve)


def lens_angle(radius, curve: float):
    """The angle off the optical axis of the ray through a point `radius` (in units of f) from the image center,
    the inverse of `lens_radius`: atan(κr)/κ, r at κ = 0."""
    if curve == 1.0:
        return torch.atan(radius) if HAS_TORCH and isinstance(radius, torch.Tensor) else math.atan(radius)
    return radius * _atan_ratio(radius * curve)


def lens_fov_limit(curve: float) -> float:
    """The widest hFOV (degrees) a lens of `curve` takes: its edge ray keeps κθ < 90 degrees, at most 360."""
    return 360.0 if curve * 360.0 <= 179.0 else 179.0 / curve


def lens_focal(width: int, hfov_deg: float, curve: float) -> float:
    """f in pixels: the image edge (width / 2 from the center) is the ray hfov / 2 off the axis."""
    return (width * 0.5) / lens_radius(math.radians(hfov_deg) * 0.5, curve)


def _lens_angles(projection, columns: "torch.Tensor", rows: "torch.Tensor"):
    """At pixel coordinates `columns`, `rows` (pixel i spans [i, i + 1)) of a perspective `projection`: the offset
    (x right, y up, in pixels, float64) from the image center and the ray's angle off the optical axis."""
    f = lens_focal(projection.width, projection.hfov_deg, projection.curve)
    x = columns.double() - projection.width * 0.5
    y = projection.height * 0.5 - rows.double()
    return x, y, lens_angle(torch.hypot(x, y) / f, projection.curve)


def _pixel_grid(projection, device):
    columns = (torch.arange(projection.width, dtype=torch.float32, device=device) + 0.5)[None, :]
    rows = (torch.arange(projection.height, dtype=torch.float32, device=device) + 0.5)[:, None]
    return columns, rows


def lens_drawn(projection, device) -> "torch.Tensor | None":
    """Which output pixels (H, W, bool) the lens draws: those whose ray is at most 180 degrees off the axis; the
    others are `bg_color`. None when it draws every pixel (an ERP, a pinhole, or a lens whose corners stay in)."""
    if projection.kind != "perspective" or projection.curve == 1.0:
        return None
    _x, _y, theta = _lens_angles(projection, *_pixel_grid(projection, device))
    drawn = (theta <= math.pi).expand(projection.height, projection.width)
    return None if bool(drawn.all()) else drawn


def pixel_rays(right, up, forward, projection, columns: "torch.Tensor", rows: "torch.Tensor") -> "torch.Tensor":
    """Unit directions (..., 3) through the image points at pixel coordinates `columns` and `rows` (float32 tensors
    that broadcast; pixel i spans [i, i + 1), so its center is i + 0.5) of `projection`, for a Camera with these axes.
    Points off the image get the rays the projection's formula gives there."""
    width, height = projection.width, projection.height
    if projection.kind == "perspective" and projection.curve != 1.0:
        x, y, theta = _lens_angles(projection, columns, rows)
        radius = torch.hypot(x, y)
        # sin(θ)/r, its limit where r is 0 (the axis pixel of an odd image), so that the ray is the axis there.
        f = lens_focal(width, projection.hfov_deg, projection.curve)
        scale = torch.where(radius > 0, torch.sin(theta) / radius.clamp_min(1e-300), torch.full_like(radius, 1.0 / f))
        side, lift, ahead = (x * scale).float(), (y * scale).float(), torch.cos(theta).float()
        return torch.stack([right[i] * side + up[i] * lift + forward[i] * ahead for i in range(3)], dim=-1)
    columns, rows = columns / width, rows / height
    if projection.kind == "erp":
        lon = (columns - 0.5) * (math.pi if projection.coverage == 180 else 2.0 * math.pi)
        lat = (0.5 - rows) * math.pi
        cos_lat, sin_lat = lat.cos(), lat.sin()
        sin_lon, cos_lon = lon.sin(), lon.cos()
        return torch.stack([torch.addcmul(up[i] * sin_lat, cos_lat, right[i] * sin_lon + forward[i] * cos_lon) for i in range(3)], dim=-1)
    tan_x = math.tan(math.radians(projection.hfov_deg) * 0.5)
    x = (columns * 2.0 - 1.0) * tan_x
    y = (1.0 - rows * 2.0) * (tan_x * height / width)
    norm = torch.hypot(torch.hypot(x, y), torch.ones((), device=x.device))
    return torch.stack([(right[i] * x + up[i] * y + forward[i]) / norm for i in range(3)], dim=-1)


def ray_directions(right, up, forward, projection, device) -> "torch.Tensor":
    """Unit directions (H, W, 3) through the output pixel centers of `projection` for a Camera with these axes
    (three floats each, as `camera_basis` returns them or in any other frame).

    An ERP spans longitude -180 to 180 (coverage 180: -90 to 90) left to right and latitude 90 to -90 top to
    bottom. A perspective image spans `hfov_deg` across the width, with square pixels, through the lens curve
    `curve`: 1 is a pinhole, other values bend the image (`lens_angle`); pixels past 180 degrees get a ray all the
    same, and `lens_drawn` tells them apart.
    """
    rays = pixel_rays(right, up, forward, projection, *_pixel_grid(projection, device))
    return rays.expand(projection.height, projection.width, 3)


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
        # Padded horizontally for wrapping, as float32 (H, W + 1, C) -> torch (B, C, H, W). The padding makes a new
        # array, so a read-only (cached) erp is read without another copy.
        t_erp_padded = torch.from_numpy(np.concatenate([erp, erp[:, :1]], axis=1, dtype=np.float32)).permute(2, 0, 1)[None, ...]

        # Grid sample coordinates in [-1, 1]
        # x corresponds to u (width), y corresponds to v (height)
        # padded width is w+1. index 0 maps to -1, index w maps to 1.
        # u and v are the new arrays of np.mod and np.clip above, so torch can share them.
        grid_u = (torch.from_numpy(u).to(torch.float32) / w) * 2.0 - 1.0

        # Avoid division by zero if h=1
        v_denom = float(h - 1) if h > 1 else 1.0
        grid_v = (torch.from_numpy(v).to(torch.float32) / v_denom) * 2.0 - 1.0

        grid = torch.stack([grid_u, grid_v], dim=-1)[None, ...]

        # Note: we use align_corners=True to exactly match pixel center sampling
        out = F.grid_sample(t_erp_padded, grid, mode='bilinear', padding_mode='border', align_corners=True)
        return out[0].permute(1, 2, 0).cpu().numpy().astype(erp.dtype, copy=False)

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


def vfov_from_hfov(hfov_deg: float, image_w: int, image_h: int, curve: float = 1.0) -> float:
    """The vFOV of an image `image_w` x `image_h` with square pixels and hFOV `hfov_deg` through the lens `curve`: its
    edges keep the same f, g(vFOV / 2) = g(hFOV / 2) x height / width with g = `lens_radius` (tan for a pinhole)."""
    width = max(1, int(image_w))
    height = max(1, int(image_h))
    if curve != 1.0:
        limit = lens_fov_limit(curve)
        hfov = min(limit, max(0.1, float(hfov_deg)))
        vfov = 2.0 * math.degrees(lens_angle(lens_radius(math.radians(hfov) * 0.5, curve) * height / width, curve))
        return min(limit, max(0.1, vfov))
    hfov = float(np.clip(hfov_deg, 0.1, 179.0))
    vfov = 2.0 * math.degrees(math.atan(math.tan(math.radians(hfov) * 0.5) * (height / width)))
    return float(np.clip(vfov, 0.1, 179.0))


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
