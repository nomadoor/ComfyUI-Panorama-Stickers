"""The SPLAT `scene` content (#61): gaussians drawn the way the core's RenderSplat draws them, through any
Projection.

Each gaussian is weighted by the peak of its 3D density along each pixel's ray and composited front to back over
depth slabs in linear light, as the core's `_render_gaussian` does. The rays are the output pixels' own
(`ray_directions`), so an ERP is drawn directly on the sphere with its slabs ordered by distance from the Camera;
nothing depends on where a cube face or the seam would be. Apart from how the windows are sized, the result differs
from the core's only in that pixel i is centered at i + 0.5, as everywhere in this package, where the core centers
it at i.
"""
import math
from io import BytesIO

import numpy as np
import torch
from comfy_api.latest import Types

from .core.math import lens_focal, lens_radius, pixel_rays, ray_directions
from .core.world_render import CameraView, SceneContent
from .core_adapters import _C0, File3DToSplat, _detect_splat_format, _gaussian_item, _linear_to_srgb, _quantile, _quat_to_mat, _srgb_to_linear

SPLAT_FILE_FORMATS = ("ply", "splat", "spz", "ksplat")
# RenderSplat's default: biases each pixel's color toward its dominant gaussian.
SHARPEN = 2.0
# A SPLAT is in the 3DGS frame (Y down, Z forward); its glTF frame is a half turn about X, as the core's Load3D
# and RenderSplat place it.
_GLTF_TO_SPLAT = np.diag([1.0, -1.0, -1.0])
# The constants of the real spherical harmonics of degrees 1 to 3, in the order 3DGS stores their coefficients.
_SH_C1 = 0.4886025119029199
_SH_C2 = (1.0925484305920792, -1.0925484305920792, 0.31539156525252005, -1.0925484305920792, 0.5462742152960396)
_SH_C3 = (-0.5900435899266435, 2.890611442640554, -0.4570457994644658, 0.3731763325901154, -0.4570457994644658, 1.445305721320277, -0.5900435899266435)


def read_splat_file(model_3d: Types.File3D) -> Types.SPLAT | None:
    """The SPLAT the core's File3DToSplat reads from a splat 3D file, or None for any other 3D file. A PLY is a
    splat when its vertices carry 3DGS properties, as Load3D tells them apart; a file without a format is told by
    its contents, as File3DToSplat does."""
    if model_3d.format not in ("", *SPLAT_FILE_FORMATS):
        return None
    data = model_3d.get_bytes()
    file_format = model_3d.format
    if not file_format:
        try:
            file_format = _detect_splat_format(data)
        except ValueError:
            return None
    if file_format == "ply" and not _is_gaussian_ply(data):
        return None
    return File3DToSplat.execute(Types.File3D(BytesIO(data), file_format=file_format)).result[0]


def _is_gaussian_ply(data: bytes) -> bool:
    header = data[:max(0, data.find(b"end_header"))].split()
    return b"f_dc_0" in header or (b"scale_0" in header and b"rot_0" in header)


def splat_content(splat: Types.SPLAT) -> SceneContent:
    # The harmonics of the item last drawn, on its device, while the same item is drawn again.
    harmonics = {}
    # The output pixels' rays in the Camera's own axes, while the Projection stays.
    rays = {}

    def render(view: CameraView, index: int, device):
        xyz, rgb, opacity, scale, rot = _gaussian_item(splat, index, device)
        if rays.get("key") != (view.projection, str(device)):
            rays.clear()
            rays["rays"] = ray_directions([1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0], view.projection, device)
            rays["key"] = (view.projection, str(device))
        if splat.sh.shape[2] > 1:
            if harmonics.get("key") != (index, device):
                harmonics.clear()
                harmonics["sh"] = splat.sh[index, :xyz.shape[0]].to(device=device, dtype=torch.float32)
                harmonics["key"] = (index, device)
            eye = torch.tensor(_GLTF_TO_SPLAT @ view.position, dtype=torch.float32, device=device)
            rgb = _view_colors(harmonics["sh"], xyz - eye)
        return render_gaussians(xyz, rgb, opacity, scale, rot, view, rays["rays"])

    return SceneContent(splat.positions.shape[0], render)


def _view_colors(sh: torch.Tensor, offset: torch.Tensor) -> torch.Tensor:
    """The colors (N, 3) of gaussians with spherical harmonics `sh` (N, K, 3) seen along `offset` (N, 3), from the
    Camera to their centers, by the formula of 3DGS: the harmonics up to degree 3 at that direction, plus 0.5. Both
    are in the SPLAT's own 3DGS frame, as its harmonics were fitted. The colors are clamped to 0..1, as the core's
    `_gaussian_item` clamps the base color it uses alone."""
    x, y, z = torch.nn.functional.normalize(offset, dim=-1).unbind(-1)
    basis = [torch.full_like(x, _C0), -_SH_C1 * y, _SH_C1 * z, -_SH_C1 * x]
    if sh.shape[1] >= 9:
        xx, yy, zz = x * x, y * y, z * z
        basis += [_SH_C2[0] * x * y, _SH_C2[1] * y * z, _SH_C2[2] * (2.0 * zz - xx - yy), _SH_C2[3] * x * z, _SH_C2[4] * (xx - yy)]
        if sh.shape[1] >= 16:
            basis += [
                _SH_C3[0] * y * (3.0 * xx - yy), _SH_C3[1] * x * y * z, _SH_C3[2] * y * (4.0 * zz - xx - yy),
                _SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy), _SH_C3[4] * x * (4.0 * zz - xx - yy),
                _SH_C3[5] * z * (xx - yy), _SH_C3[6] * x * (xx - 3.0 * yy),
            ]
    count = min(len(basis), sh.shape[1])
    return (torch.einsum("nk,nkc->nc", torch.stack(basis[:count], dim=-1), sh[:, :count]) + 0.5).clamp(0, 1)


def _analytic_jacobian(projection, mu, distance):
    """The center (u, v) in pixels (pixel i spans [i, i + 1)) of each gaussian at `mu` (Camera axes: right, up, forward)
    and the Jacobian (N, 2, 3) of the projection there, by the formulas of a pinhole and of an ERP."""
    width, height = projection.width, projection.height
    x, y, z = mu.unbind(-1)
    jacobian = torch.zeros((x.shape[0], 2, 3), device=mu.device)
    if projection.kind == "perspective":
        focal = width / (2.0 * math.tan(math.radians(projection.hfov_deg) * 0.5))
        invz = 1.0 / z
        u, v = width * 0.5 + focal * x * invz, height * 0.5 - focal * y * invz
        jacobian[:, 0, 0], jacobian[:, 0, 2] = focal * invz, -focal * x * invz.square()
        jacobian[:, 1, 1], jacobian[:, 1, 2] = -focal * invz, focal * y * invz.square()
        return u, v, jacobian
    span = math.pi if projection.coverage == 180 else 2.0 * math.pi
    rho2 = (x.square() + z.square()).clamp_min(1e-12)
    rho = rho2.sqrt()
    u = (torch.atan2(x, z) / span + 0.5) * width
    v = (0.5 - torch.atan2(y, rho) / math.pi) * height
    per_lon, per_lat = width / span, height / math.pi / (rho * distance.square())
    jacobian[:, 0, 0], jacobian[:, 0, 2] = per_lon * z / rho2, -per_lon * x / rho2
    jacobian[:, 1, 0], jacobian[:, 1, 1], jacobian[:, 1, 2] = per_lat * x * y, -per_lat * rho2, per_lat * z * y
    return u, v, jacobian


def _lens_jacobian(projection, mu, distance):
    """`_analytic_jacobian` for a Camera image through a lens curve other than 1: the center by the lens's formula
    (`lens_radius`), and the Jacobian from the ray field there (`_ray_field_jacobian`, ADR 0037)."""
    width, height = projection.width, projection.height
    x, y, z = mu.unbind(-1)
    side = torch.hypot(x, y)
    radius = lens_focal(width, projection.hfov_deg, projection.curve) * lens_radius(torch.atan2(side, z), projection.curve)
    scale_r = torch.where(side > 0, radius / side.clamp_min(1e-30), torch.zeros_like(side))
    u, v = width * 0.5 + scale_r * x, height * 0.5 - scale_r * y
    return u, v, _ray_field_jacobian(projection, u, v, mu, distance)


def _center_and_jacobian(projection, mu, distance):
    """The window's center and Jacobian: analytic for a pinhole and an ERP, as before the lens curve; from the ray
    field for a lens curve other than 1."""
    if projection.kind == "perspective" and projection.curve != 1.0:
        return _lens_jacobian(projection, mu, distance)
    return _analytic_jacobian(projection, mu, distance)


def _ray_field_jacobian(projection, u, v, mu, distance) -> torch.Tensor:
    """The Jacobian (N, 2, 3) of output pixel coordinates by Camera-space position at each gaussian center `mu`,
    from the ray field (ADR 0037): the change of the rays across a pixel at the center's image point (u, v)
    (`pixel_rays` half a pixel to each side, so it is the same wherever the center falls, on or off the image) is
    d ray / d pixel (3 x 2); its pseudo-inverse maps the change of the direction to the center, (I - d d^T) / |mu|,
    to pixels."""
    axes = ([1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0])
    along_x = pixel_rays(*axes, projection, u + 0.5, v) - pixel_rays(*axes, projection, u - 0.5, v)
    along_y = pixel_rays(*axes, projection, u, v + 0.5) - pixel_rays(*axes, projection, u, v - 0.5)
    field = torch.stack([along_x, along_y], dim=-1)
    inverse = torch.linalg.pinv(field.transpose(1, 2) @ field) @ field.transpose(1, 2)
    direction = mu / distance[:, None]
    tangent = (torch.eye(3, device=mu.device) - direction[:, :, None] * direction[:, None, :]) / distance[:, None, None]
    return inverse @ tangent


def _levels(half: torch.Tensor) -> list[int]:
    """Window half sizes for `half`: from 4, doubling, up to its largest value. The core uses 16, 64, and 256; the
    finer steps keep small gaussians in small windows (twice as fast at 4K)."""
    top = max(1, math.ceil(float(half.max())))
    levels = [4]
    while levels[-1] < top:
        levels.append(levels[-1] * 2)
    return levels[:-1] + [top]


def render_gaussians(xyz, rgb, opacity, scale, rot, view: CameraView, rays: torch.Tensor):
    """Straight-alpha color (H, W, 4) and ray length (H, W) of the gaussians seen by `view`; the depth of a pixel
    is where the alpha accumulated front to back first exceeds 0.5, or the alpha-weighted mean where it never
    does, and +inf where empty. `rays` are the output pixels' directions (H, W, 3) in the Camera's own axes
    (right, up, forward), on the device of `xyz`."""
    projection = view.projection
    width, height = projection.width, projection.height
    device = xyz.device
    flat = width * height
    rays = rays.reshape(flat, 3)
    # Rows: the Camera's right, up, and forward axes in the SPLAT frame.
    axes = torch.tensor((_GLTF_TO_SPLAT @ view.rotation * [1.0, 1.0, -1.0]).T, dtype=torch.float32, device=device)
    eye = torch.tensor(_GLTF_TO_SPLAT @ view.position, dtype=torch.float32, device=device)
    offset = xyz - eye
    # Measured before turning into the Camera's axes, so that the order of the slabs does not change as it turns.
    distance = offset.norm(dim=-1)
    mu = offset @ axes.T
    perspective = projection.kind == "perspective"
    pinhole = perspective and projection.curve == 1.0
    # The slabs follow the depth along the view axis in a pinhole image, as in the core, and the distance in an ERP,
    # which does not change as the Camera turns, and through a lens curve, which may see behind the Camera.
    depth_key = mu[:, 2] if pinhole else distance
    keep = depth_key > 1e-2
    if perspective and not pinhole:
        # Inside the lens's domain (κθ < 90 degrees) and at most 180 degrees off the axis.
        theta = torch.atan2(mu[:, :2].norm(dim=-1), mu[:, 2])
        keep &= theta < min(math.pi, 0.5 * math.pi / max(projection.curve, 1e-12) - 1e-6)
    if not bool(keep.any()):
        return torch.zeros((height, width, 4), device=device), torch.full((height, width), math.inf, device=device)
    mu, distance, depth_key, rgb, opacity, scale, rot = (value[keep] for value in (mu, distance, depth_key, rgb, opacity, scale, rot))
    rgb = _srgb_to_linear(rgb)

    # Camera-space covariance with the core's small relative regularizer, and the terms of the density peak
    # along a ray d through the Camera: q = mu Si mu - (d Si mu)^2 / (d Si d).
    rotation = axes[None] @ _quat_to_mat(rot)
    cov = (rotation * scale.square()[:, None, :]) @ rotation.transpose(1, 2)
    cov = cov + (cov.diagonal(dim1=-2, dim2=-1).mean(-1) * 1e-3)[:, None, None] * torch.eye(3, device=device)
    si = torch.linalg.inv(cov)
    simu = (si @ mu[:, :, None])[:, :, 0]
    musimu = (mu * simu).sum(-1)

    # The center in pixels and the Jacobian of the projection there, which sizes the window each gaussian is evaluated in.
    u, v, jacobian = _center_and_jacobian(projection, mu, distance)
    if not perspective:
        rho = (mu[:, 0].square() + mu[:, 2].square()).clamp_min(1e-12).sqrt()
    wrap = not perspective and projection.coverage != 180
    cov2 = jacobian @ cov @ jacobian.transpose(1, 2)
    a, b, c = cov2[:, 0, 0], cov2[:, 0, 1], cov2[:, 1, 1]
    radius = 3.0 * ((a + c) * 0.5 + (((a - c) * 0.5).square() + b * b).clamp_min(0).sqrt()).clamp_min(1e-8).sqrt()
    cap = int(min(max(24, min(width, height) // 16), max(2, math.ceil(_quantile(radius, 0.995).item()))))
    # Each gaussian is evaluated in the box around its 4-sigma ellipse, its half size capped as the core caps its
    # windows. Along the rows of an ERP the cap widens as the rows shrink toward the poles, up to the whole row
    # (a wider window would wrap onto its own pixels), so a gaussian near a pole is not cut off at a place that
    # depends on where its center falls as the Camera turns.
    half_x, half_y = 4.0 * a.clamp_min(1e-8).sqrt(), (4.0 * c.clamp_min(1e-8).sqrt()).clamp(max=cap)
    if perspective:
        half_x = half_x.clamp(max=cap)
    else:
        half_x = torch.minimum(half_x, (cap * distance / rho).clamp(max=(width - 1) // 2 if wrap else width))
    if perspective and not pinhole:
        # A window wholly off the image adds nothing; through a lens a gaussian far off its axis can land far off
        # the image with a wide window, so it is left out before any pixel is evaluated. (A pinhole keeps them: its
        # slabs count them, and its output stays as it was.)
        seen = (u + half_x >= 0) & (u - half_x < width) & (v + half_y >= 0) & (v - half_y < height)
        if not bool(seen.any()):
            return torch.zeros((height, width, 4), device=device), torch.full((height, width), math.inf, device=device)
        u, v, half_x, half_y, depth_key, si, simu, musimu, opacity, rgb = (
            value[seen] for value in (u, v, half_x, half_y, depth_key, si, simu, musimu, opacity, rgb))
    levels_x, levels_y = _levels(half_x), _levels(half_y)
    level_x = torch.bucketize(half_x, torch.tensor(levels_x, device=device, dtype=torch.float32)).clamp_(max=len(levels_x) - 1)
    level_y = torch.bucketize(half_y, torch.tensor(levels_y, device=device, dtype=torch.float32)).clamp_(max=len(levels_y) - 1)

    # Group by depth slab, then by window size, as the core does; within a slab the sums are order free.
    count = depth_key.shape[0]
    slabs = int(min(256, max(1, count // 1000)))
    rank = torch.empty(count, dtype=torch.long, device=device)
    rank[torch.argsort(depth_key)] = torch.arange(count, device=device)
    bounds = torch.linspace(0, count, slabs + 1, device=device).round().long()
    slab_of = (torch.searchsorted(bounds, rank, right=True) - 1).clamp_(0, slabs - 1)
    windows = len(levels_x) * len(levels_y)
    key = slab_of * windows + level_x * len(levels_y) + level_y
    order = torch.argsort(key)
    key = key[order]
    s00, s11, s22 = si[:, 0, 0], si[:, 1, 1], si[:, 2, 2]
    params = torch.stack([
        u.floor(), v.floor(), s00, s11, s22, si[:, 0, 1] * 2, si[:, 0, 2] * 2, si[:, 1, 2] * 2, opacity, *simu.unbind(-1), musimu,
    ])[:, order]
    rgb = rgb[order]
    starts = torch.cat([torch.zeros(1, dtype=torch.long, device=device), (key[1:] != key[:-1]).nonzero().flatten() + 1])
    run_keys = key[starts]
    run_lo = starts.tolist() + [count]
    slab_runs = [[] for _ in range(slabs)]
    for run, (slab, window) in enumerate(zip((run_keys // windows).tolist(), (run_keys % windows).tolist())):
        slab_runs[slab].append((run_lo[run], run_lo[run + 1], levels_x[window // len(levels_y)], levels_y[window % len(levels_y)]))
    grids = {}

    def splat(lo, hi, ox, oy):
        cx, cy, a00, a11, a22, b01, b02, b12, opa, su0, su1, su2, mus = params[:, lo:hi, None].unbind(0)
        px, py = cx + ox, cy + oy
        valid = (py >= 0) & (py < height)
        if wrap:
            px = px.remainder(width)
        else:
            valid &= (px >= 0) & (px < width)
        index = py.long().clamp(0, height - 1) * width + px.long().clamp(0, width - 1)
        dx, dy, dz = rays[index].unbind(-1)
        dsid = dx * torch.addcmul(torch.addcmul(b02 * dz, b01, dy), a00, dx)
        dsid = dsid.addcmul_(dy, torch.addcmul(b12 * dz, a11, dy)).addcmul_(a22 * dz, dz).clamp_min_(1e-12)
        dsimu = torch.addcmul(su2 * dz, su0, dx).addcmul_(su1, dy)
        q = torch.addcdiv(mus, dsimu * dsimu, dsid, value=-1).clamp_min_(0)
        alpha = (opa * torch.exp(-0.5 * q) * valid).clamp_(0, 0.999)
        # The rays are unit length, so this is the distance to the density peak along the ray.
        return index, alpha, dsimu / dsid

    color = torch.zeros((flat, 3), device=device)
    trans = torch.ones((flat,), device=device)
    mean_depth = torch.zeros((flat,), device=device)
    depth = torch.full((flat,), math.inf, device=device)
    alpha_sum = torch.zeros((flat,), device=device)
    tau = torch.zeros((flat,), device=device)
    slab_rgb = torch.zeros((flat, 3), device=device)
    weight = torch.zeros((flat,), device=device)
    slab_depth = torch.zeros((flat,), device=device)
    stale = 0
    for slab in range(slabs):
        if not slab_runs[slab]:
            continue
        for buffer in (alpha_sum, tau, slab_rgb, weight, slab_depth):
            buffer.zero_()
        for first, last, reach_x, reach_y in slab_runs[slab]:
            if (reach_x, reach_y) not in grids:
                gy, gx = torch.meshgrid(torch.arange(-reach_y, reach_y + 1, device=device, dtype=torch.float32),
                                        torch.arange(-reach_x, reach_x + 1, device=device, dtype=torch.float32), indexing="ij")
                grids[reach_x, reach_y] = gx.reshape(-1), gy.reshape(-1)
            ox, oy = grids[reach_x, reach_y]
            # About 10M (gaussian, pixel) pairs at a time, or one gaussian when its window alone is larger.
            chunk = max(1, 10_000_000 // ox.shape[0])
            for lo in range(first, last, chunk):
                hi = min(lo + chunk, last)
                index, alpha, along = splat(lo, hi, ox, oy)
                index, flat_alpha = index.reshape(-1), alpha.reshape(-1)
                alpha_sum.index_add_(0, index, flat_alpha)
                tau.index_add_(0, index, (-torch.log1p(-alpha)).reshape(-1))
                sharpened = alpha.pow(SHARPEN)
                slab_rgb.index_add_(0, index, (sharpened[:, :, None] * rgb[lo:hi, None, :]).reshape(-1, 3))
                weight.index_add_(0, index, sharpened.reshape(-1))
                slab_depth.index_add_(0, index, (alpha * along).reshape(-1))
        slab_alpha = 1 - torch.exp(-tau)
        front = trans * slab_alpha
        color.addcmul_(front[:, None], slab_rgb / weight.clamp_min(1e-8)[:, None])
        slab_depth /= alpha_sum.clamp_min(1e-8)
        mean_depth.addcmul_(front, slab_depth)
        crossed = (trans >= 0.5) & (trans * (1 - slab_alpha) < 0.5)
        depth = torch.where(crossed, slab_depth, depth)
        trans.mul_(1 - slab_alpha)
        if slab % 8 == 7:
            if float(front.max()) < 1e-3:
                stale += 1
                if stale >= 2:
                    break
            else:
                stale = 0

    coverage = 1 - trans
    color = _linear_to_srgb(color / coverage.clamp_min(1e-6)[:, None]).clamp(0, 1)
    depth = torch.where(trans < 0.5, depth, mean_depth / coverage.clamp_min(1e-6))
    depth = torch.where(coverage > 0, depth, math.inf)
    return torch.cat([color, coverage[:, None]], dim=-1).reshape(height, width, 4), depth.reshape(height, width)
