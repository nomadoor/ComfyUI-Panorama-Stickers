"""Backend render function shared by Stickers, Cutout, and Preview.

One call draws one frame from the evaluated state at a Timeline frame (`evaluate_scene_state`), the resolved
sources, a Camera, and a Projection. The layers are composited back to front: `bg_color`, `bg_media`, the Sky
(`sky` Stickers in list order, then paint), and World content by depth.
"""
import math
from dataclasses import dataclass

import numpy as np
import torch
import torch.nn.functional as F

from .display_layers import compose_display_list_to_overlay_rgba, render_remaining_flat_paint_layer_from_state
from .display_list import alpha_composite_over_rgba
from .math import camera_basis, vfov_from_hfov
from .painting import load_painting_layer_payload, render_painting_to_erp


@dataclass(frozen=True)
class Projection:
    """How the Camera turns the Scene into a `width` x `height` image.

    `erp` spans `coverage` (360 or 180) degrees of longitude; 180 is the Camera's front hemisphere.
    `perspective` is a pinhole image with horizontal FOV `hfov_deg`; its vertical FOV follows from the size.
    """

    kind: str
    width: int
    height: int
    coverage: int = 360
    hfov_deg: float = 90.0

    @classmethod
    def erp(cls, width: int, height: int, coverage: int = 360) -> "Projection":
        return cls("erp", int(width), int(height), coverage=180 if int(coverage) == 180 else 360)

    @classmethod
    def perspective(cls, width: int, height: int, hfov_deg: float) -> "Projection":
        return cls("perspective", int(width), int(height), hfov_deg=float(hfov_deg))


@dataclass(frozen=True)
class StickerSource:
    """A 2D Sticker source read into memory, straight-alpha RGBA (h, w, 4) in 0..1, with the Sticker's static
    drawing values: its `crop` and its `z_index` among the Sky layers.

    `derive_vfov` is set for `port` sources, whose vFOV follows hFOV and the source aspect because the port
    image can change outside the state.
    """

    rgba: np.ndarray
    crop: dict
    z_index: int = 0
    derive_vfov: bool = False


@dataclass(frozen=True)
class SceneSources:
    """Sources that stay the same for every frame of one execution.

    `stickers` maps Sticker ids to their sources; a Sticker without one is not drawn. `painting` is the state's
    painting and `painting_layer` its uploaded rasters from `resolve_painting_layer_payload`.
    """

    stickers: dict
    painting: dict
    painting_layer: dict | None = None


def composite_frame(bg_color, bg: torch.Tensor | None, sky: torch.Tensor, world=(), bg_valid: torch.Tensor | None = None) -> tuple[torch.Tensor, torch.Tensor]:
    """Composite one frame back to front: `bg_color`, `bg`, `sky`, then the `world` layers from far to near.

    `bg` is an opaque (H, W, 3) image or None, and `bg_valid` an optional bool (H, W) of where `bg` has an
    image; `bg_color` shows elsewhere. `sky` and each World layer's color are straight-alpha (H, W, 4);
    `world` is a sequence of (rgba, depth) with depth (H, W), +inf where the layer is empty. Layers at the same
    depth keep their list order. Returns color (H, W, 3) and depth (H, W): the nearest World layer with
    alpha > 0, +inf (Sky) elsewhere.
    """
    height, width = sky.shape[:2]
    color = torch.as_tensor(bg_color, dtype=sky.dtype, device=sky.device).expand(height, width, 3)
    if bg is not None:
        color = bg if bg_valid is None else torch.where(bg_valid[..., None], bg, color)
    color = torch.lerp(color, sky[..., :3], sky[..., 3:])
    depth = torch.full((height, width), math.inf, dtype=sky.dtype, device=sky.device)
    if world:
        layers = torch.stack([rgba for rgba, _ in world])
        depths = torch.stack([layer_depth for _, layer_depth in world])
        depths, order = torch.sort(depths, dim=0, descending=True, stable=True)
        layers = layers.gather(0, order[..., None].expand_as(layers))
        for layer in layers:
            color = torch.lerp(color, layer[..., :3], layer[..., 3:])
        depth = torch.where(layers[..., 3] > 0.0, depths, depth).amin(dim=0)
    return color.clamp(0.0, 1.0), depth


def _sky_erp(evaluated: dict, sources: SceneSources, width: int, height: int) -> tuple[np.ndarray, np.ndarray]:
    """The Sky as a 360 ERP: `sky` Stickers, paint groups, and rasters by `z_index` (Stickers first on ties,
    as the legacy display list ordered them), then the paint strokes outside any group on top."""
    painting = sources.painting
    payload = load_painting_layer_payload(sources.painting_layer, erp_width=width, erp_height=height)
    overlay, used_layers, _stats = compose_display_list_to_overlay_rgba(
        {"stickers": _sky_stickers(evaluated, sources), "painting": painting},
        width,
        height,
        painting_payload=payload,
    )
    if used_layers:
        flat = render_remaining_flat_paint_layer_from_state(painting, width, height)
    else:
        flat = payload.get("paint") if payload else None
        if flat is None:
            flat, _mask = render_painting_to_erp(painting, width, height)
    if flat is not None:
        overlay = alpha_composite_over_rgba(overlay, flat)
    mask = payload.get("mask") if payload else None
    if mask is None:
        _paint, mask = render_painting_to_erp(painting, width, height)
    return overlay, mask


def _sky_stickers(evaluated: dict, sources: SceneSources) -> list[dict]:
    stickers = []
    for sticker in evaluated["stickers"]:
        source = sources.stickers.get(sticker["id"])
        if not sticker["active"] or source is None:
            continue
        rgba = source.rgba
        if sticker["opacity"] < 1.0:
            rgba = rgba.copy()
            rgba[..., 3] *= sticker["opacity"]
        vfov = sticker["vFOV_deg"]
        if source.derive_vfov:
            vfov = vfov_from_hfov(sticker["hFOV_deg"], rgba.shape[1], rgba.shape[0])
        stickers.append({
            "yaw_deg": sticker["yaw_deg"],
            "pitch_deg": sticker["pitch_deg"],
            "rot_deg": sticker["roll_deg"],
            "hFOV_deg": sticker["hFOV_deg"],
            "vFOV_deg": vfov,
            "crop": source.crop,
            "z_index": source.z_index,
            "image_rgba": rgba,
        })
    return stickers


def _view(camera: dict, projection: Projection, device) -> torch.Tensor:
    """Where each output pixel looks, as `grid_sample` coordinates (H, W, 2) in a 360 ERP of the Scene
    (align_corners=False): x from longitude -180 to 180 and y from the zenith to the nadir.

    The output is an ERP around the Camera's orientation (`camera_basis`); 180 spans its front hemisphere. The
    Camera's position does not enter: the background and the Sky are infinitely far away.
    """
    span = math.pi if projection.coverage == 180 else 2.0 * math.pi
    lon = ((torch.arange(projection.width, dtype=torch.float32, device=device) + 0.5) / projection.width - 0.5) * span
    lat = (0.5 - (torch.arange(projection.height, dtype=torch.float32, device=device) + 0.5) / projection.height) * math.pi
    cos_lat, sin_lat = lat.cos()[:, None], lat.sin()[:, None]
    sin_lon, cos_lon = lon.sin(), lon.cos()
    # A direction (x, y, z) seen from the Camera is x * right + y * up + z * forward in the Scene.
    right, up, forward = (axis.tolist() for axis in camera_basis(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]))
    x, y, z = (torch.addcmul(up[i] * sin_lat, cos_lat, right[i] * sin_lon + forward[i] * cos_lon) for i in range(3))
    return torch.stack([torch.atan2(x, z).div_(math.pi), torch.atan2(y, torch.hypot(x, z)).mul_(-2.0 / math.pi)], dim=-1)


def _sample(image: torch.Tensor, grid: torch.Tensor) -> torch.Tensor:
    """Bilinear samples of `image` (h, w, C) at `grid` (H, W, 2), clamped at the edges."""
    sampled = F.grid_sample(image.permute(2, 0, 1)[None], grid[None], mode="bilinear", padding_mode="border", align_corners=False)
    return sampled[0].permute(1, 2, 0)


def _sample_erp(erp: torch.Tensor, view: torch.Tensor) -> torch.Tensor:
    """Sample a 360 ERP (h, w, C) at `view`, wrapping around the seam through a column copied from the
    opposite side at each edge."""
    width = erp.shape[1]
    grid = view.clone()
    grid[..., 0] *= width / (width + 2)
    return _sample(torch.cat([erp[:, -1:], erp, erp[:, :1]], dim=1), grid)


def _resize(image: torch.Tensor, height: int, width: int) -> torch.Tensor:
    if image.shape[0] == height and image.shape[1] == width:
        return image
    work = F.interpolate(image.permute(2, 0, 1)[None], size=(height, width), mode="bilinear", align_corners=False)
    return work[0].permute(1, 2, 0)


def _render_sky(evaluated: dict, sources: SceneSources, projection: Projection, device) -> tuple[torch.Tensor, torch.Tensor]:
    """The Sky as a 360 ERP on `device`: straight-alpha color (h, w, 4) and the paint mask (h, w).

    It is drawn at the output width over 360 degrees, as the legacy node drew its overlay, so that a 360 output
    without Camera rotation uses it as it is.
    """
    width = projection.width
    height = projection.height if projection.coverage == 360 else max(1, width // 2)
    rgba, mask = _sky_erp(evaluated, sources, width, height)
    return torch.tensor(rgba, dtype=torch.float32, device=device), torch.tensor(mask, dtype=torch.float32, device=device)


def _project_sky(rgba: torch.Tensor, mask: torch.Tensor, view: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
    # Color is sampled premultiplied so that transparent pixels do not bleed into Sticker edges.
    alpha = rgba[..., 3:]
    sampled = _sample_erp(torch.cat([rgba[..., :3] * alpha, alpha, mask[..., None]], dim=-1), view)
    alpha = sampled[..., 3:4]
    rgb = torch.where(alpha > 1e-6, sampled[..., :3] / alpha.clamp_min(1e-6), 0.0)
    # A copy of the mask so that the sampled layer is not kept alive through it.
    return torch.cat([rgb, alpha], dim=-1), sampled[..., 4].clone()


def _sky_key(evaluated: dict, projection: Projection) -> tuple:
    # An inactive Sticker is not drawn, so its values changing outside its Clip range keep the Sky. Values are
    # rounded so that interpolation noise between equal Keyframes (30.0 vs 30.00000000000001) keeps it too.
    return (projection, tuple(
        (sticker["id"], *(round(sticker[key], 9) for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg", "vFOV_deg", "opacity")))
        if sticker["active"] else (sticker["id"],)
        for sticker in evaluated["stickers"] if sticker["placement"] == "sky"
    ))


def _background(bg: torch.Tensor, device) -> torch.Tensor:
    """`bg_media` as opaque RGB on `device`."""
    bg = bg.to(device=device, dtype=torch.float32)
    return (bg[..., :1].expand(-1, -1, 3) if bg.shape[-1] < 3 else bg[..., :3]).clamp(0.0, 1.0)


def _project_background(bg: torch.Tensor, projection: Projection, view: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor | None]:
    """Sample `bg_media` at `view`, and where it has an image (None: everywhere).

    A 360 output reads it as a 360 ERP. A 180 output reads it as the ERP of the Scene's front hemisphere, as
    the legacy node did, so a turned Camera also sees directions it does not cover.
    """
    if projection.coverage == 360:
        return _sample_erp(bg, view), None
    grid = view.clone()
    grid[..., 0] *= 2.0
    return _sample(bg, grid), grid[..., 0].abs() <= 1.0


def render_frame(
    evaluated: dict,
    sources: SceneSources,
    camera: dict,
    projection: Projection,
    *,
    bg: torch.Tensor | None,
    bg_key=None,
    bg_color,
    device,
    cache: dict | None = None,
) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
    """Draw one frame. Returns float32 color (H, W, 3), mask (H, W), and depth (H, W) on `device`.

    `evaluated` is `evaluate_scene_state` at the frame and `camera` the evaluated Camera value; the ERP output
    turns with the Camera's rotation. `bg` is this frame's `bg_media` image (h, w, C) or None, and `bg_key` a
    hashable that names it (the bg_media frame index); without a key the background is not reused. `bg_color`
    is three floats in 0..1. The mask is the painted mask and the depth is +inf where only the Sky is visible.

    `cache` is an optional dict owned by the caller for one execution, in which `sources`, `bg_color`, and
    `device` stay the same. It keeps the previous frame's Sky, the Sky turned by the Camera, the background, and
    the result: a frame whose Sky values, Camera rotation, and `bg_key` all repeat returns the previous frame's
    tensors themselves.
    """
    if projection.kind != "erp":
        raise NotImplementedError("Panorama Stickers: perspective projection is not supported yet.")
    if any(sticker["active"] and sticker["placement"] == "world" for sticker in evaluated["stickers"]):
        raise NotImplementedError("Panorama Stickers: world Stickers are not supported yet.")
    if cache is None:
        cache = {}
    sky_key = _sky_key(evaluated, projection)
    # A 360 output without Camera rotation is the Sky and the background as they are.
    turned = projection.coverage == 180 or any(abs(math.remainder(camera[key], 360.0)) > 1e-6 for key in ("yaw_deg", "pitch_deg", "roll_deg"))
    view_key = tuple(round(camera[key], 9) for key in ("yaw_deg", "pitch_deg", "roll_deg")) if turned else None
    bg_entry = None if bg is None else ("bg", bg_key)
    # A background without a key cannot be told apart from the previous frame's, so it is never reused.
    reusable = bg is None or bg_key is not None
    frame_key = (sky_key, view_key, bg_entry)
    if reusable and cache.get("frame_key") == frame_key:
        return cache["frame"]
    if cache.get("sky_key") != sky_key:
        cache["sky_key"], cache["sky"] = sky_key, _render_sky(evaluated, sources, projection, device)
    view = None
    if not turned:
        sky, mask = cache["sky"]
    else:
        if cache.get("turned_sky_key") != (sky_key, view_key):
            view = _view(camera, projection, device)
            cache["turned_sky_key"], cache["turned_sky"] = (sky_key, view_key), _project_sky(*cache["sky"], view)
        sky, mask = cache["turned_sky"]
    background = bg_valid = None
    if bg is not None:
        if reusable and cache.get("bg_key") == bg_entry:
            background = cache["bg"]
        else:
            background = _background(bg, device)
            if reusable:
                cache["bg_key"], cache["bg"] = bg_entry, background
        if not turned:
            background = _resize(background, projection.height, projection.width)
        else:
            background, bg_valid = _project_background(background, projection, _view(camera, projection, device) if view is None else view)
    color, depth = composite_frame(bg_color, background, sky, bg_valid=bg_valid)
    if reusable:
        cache["frame_key"], cache["frame"] = frame_key, (color, mask, depth)
    return color, mask, depth
