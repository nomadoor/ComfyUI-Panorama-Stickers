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
from .math import vfov_from_hfov
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


def composite_frame(bg_color, bg: torch.Tensor | None, sky: torch.Tensor, world=()) -> tuple[torch.Tensor, torch.Tensor]:
    """Composite one frame back to front: `bg_color`, `bg`, `sky`, then the `world` layers from far to near.

    `bg` is an opaque (H, W, 3) image or None. `sky` and each World layer's color are straight-alpha (H, W, 4);
    `world` is a sequence of (rgba, depth) with depth (H, W), +inf where the layer is empty. Layers at the same
    depth keep their list order. Returns color (H, W, 3) and depth (H, W): the nearest World layer with
    alpha > 0, +inf (Sky) elsewhere.
    """
    height, width = sky.shape[:2]
    if bg is None:
        color = torch.as_tensor(bg_color, dtype=sky.dtype, device=sky.device).expand(height, width, 3)
    else:
        color = bg
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


def _to_projection(layer: np.ndarray, projection: Projection, device) -> torch.Tensor:
    """Map a 360 ERP layer, straight-alpha (h, w, 4) or a mask (h, w), onto an ERP projection.

    180 keeps the center half of the longitudes. Color is resized premultiplied so that transparent pixels
    do not bleed into Sticker edges.
    """
    layer = torch.from_numpy(np.ascontiguousarray(layer, dtype=np.float32)).to(device)
    if projection.coverage == 180:
        width = layer.shape[1]
        x0 = (width - width // 2) // 2
        layer = layer[:, x0:x0 + width // 2]
    if layer.ndim == 2 or (layer.shape[0] == projection.height and layer.shape[1] == projection.width):
        return _resize(layer, projection.height, projection.width)
    alpha = layer[..., 3:]
    premultiplied = _resize(torch.cat([layer[..., :3] * alpha, alpha], dim=-1), projection.height, projection.width)
    alpha = premultiplied[..., 3:]
    rgb = torch.where(alpha > 1e-6, premultiplied[..., :3] / alpha.clamp_min(1e-6), 0.0)
    return torch.cat([rgb, alpha], dim=-1)


def _resize(image: torch.Tensor, height: int, width: int) -> torch.Tensor:
    if image.shape[0] == height and image.shape[1] == width:
        return image
    channels_last = image.ndim == 3
    work = image.permute(2, 0, 1)[None] if channels_last else image[None, None]
    work = F.interpolate(work, size=(height, width), mode="bilinear", align_corners=False)
    return work[0].permute(1, 2, 0) if channels_last else work[0, 0]


def _render_sky(evaluated: dict, sources: SceneSources, projection: Projection, device) -> tuple[torch.Tensor, torch.Tensor]:
    # The Sky is drawn as a 360 ERP and then projected, as the legacy node drew its overlay.
    width = projection.width
    height = projection.height if projection.coverage == 360 else max(1, width // 2)
    rgba, mask = _sky_erp(evaluated, sources, width, height)
    return _to_projection(rgba, projection, device), _to_projection(mask, projection, device)


def _sky_key(evaluated: dict, projection: Projection) -> tuple:
    return (projection, tuple(
        (sticker["id"], sticker["active"], sticker["yaw_deg"], sticker["pitch_deg"], sticker["roll_deg"],
         sticker["hFOV_deg"], sticker["vFOV_deg"], sticker["opacity"])
        for sticker in evaluated["stickers"] if sticker["placement"] == "sky"
    ))


def _background(bg: torch.Tensor, projection: Projection, device) -> torch.Tensor:
    # A 180 output reads bg_media as the front-hemisphere ERP, as the legacy node did.
    bg = bg.to(device=device, dtype=torch.float32)
    bg = bg[..., :1].expand(-1, -1, 3) if bg.shape[-1] < 3 else bg[..., :3]
    return _resize(bg, projection.height, projection.width).clamp(0.0, 1.0)


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

    `evaluated` is `evaluate_scene_state` at the frame and `camera` the evaluated Camera value. `bg` is this
    frame's `bg_media` image (h, w, C) or None, and `bg_key` a hashable that names it (the bg_media frame
    index); without a key the background is not reused. `bg_color` is three floats in 0..1. The mask is the
    painted mask and the depth is +inf where only the Sky is visible.

    `cache` is an optional dict owned by the caller for one execution, in which `sources`, `bg_color`, and
    `device` stay the same. It keeps the previous frame's Sky, projected background, and result: a frame whose
    Sky values and `bg_key` both repeat returns the previous frame's tensors themselves.
    """
    if projection.kind != "erp":
        raise NotImplementedError("Panorama Stickers: perspective projection is not supported yet.")
    if any(abs(math.remainder(camera[key], 360.0)) > 1e-6 for key in ("yaw_deg", "pitch_deg", "roll_deg")):
        raise NotImplementedError("Panorama Stickers: Camera rotation is not supported in ERP output yet.")
    if any(sticker["active"] and sticker["placement"] == "world" for sticker in evaluated["stickers"]):
        raise NotImplementedError("Panorama Stickers: world Stickers are not supported yet.")
    if cache is None:
        cache = {}
    sky_key = _sky_key(evaluated, projection)
    bg_entry = None if bg is None else ("bg", bg_key)
    # A background without a key cannot be told apart from the previous frame's, so it is never reused.
    reusable = bg is None or bg_key is not None
    if reusable and cache.get("frame_key") == (sky_key, bg_entry):
        return cache["frame"]
    if cache.get("sky_key") == sky_key:
        sky, mask = cache["sky"]
    else:
        sky, mask = _render_sky(evaluated, sources, projection, device)
        cache["sky_key"], cache["sky"] = sky_key, (sky, mask)
    background = None
    if bg is not None:
        if reusable and cache.get("bg_key") == bg_entry:
            background = cache["bg"]
        else:
            background = _background(bg, projection, device)
            if reusable:
                cache["bg_key"], cache["bg"] = bg_entry, background
    color, depth = composite_frame(bg_color, background, sky)
    if reusable:
        cache["frame_key"], cache["frame"] = (sky_key, bg_entry), (color, mask, depth)
    return color, mask, depth
