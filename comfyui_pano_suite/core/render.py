"""Backend render function shared by Stickers, Cutout, and Preview.

One call draws one frame from the evaluated state at a Timeline frame (`evaluate_scene_state`), the resolved
sources, a Camera, and a Projection. The layers are composited back to front: `bg_color`, `bg_media`, the Sky
(`sky` Stickers in list order, then paint), and World content by depth (`world_render.py`).
"""
import math
from dataclasses import dataclass, replace

import numpy as np
import torch
import torch.nn.functional as F

from .display_layers import compose_display_list_to_overlay_rgba, render_remaining_flat_paint_layer_from_state
from .display_list import alpha_composite_over_rgba
from .math import camera_basis, ray_directions, vfov_from_hfov
from .painting import load_painting_layer_payload, render_painting_to_erp
from .world_render import SceneContent, over_by_depth, world_key, world_layer


@dataclass(frozen=True)
class Projection:
    """How the Camera turns the Scene into a `width` x `height` image.

    `erp` spans `coverage` (360 or 180) degrees of longitude; 180 is the Camera's front hemisphere.
    `perspective` is a pinhole image with horizontal FOV `hfov_deg` and square pixels, so its vertical FOV
    follows from the size. Its `coverage` is the span of the `bg_media` ERP it looks into.
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
    def perspective(cls, width: int, height: int, hfov_deg: float, coverage: int = 360) -> "Projection":
        return cls("perspective", int(width), int(height), coverage=180 if int(coverage) == 180 else 360, hfov_deg=float(hfov_deg))


@dataclass(frozen=True)
class StickerSource:
    """A 2D Sticker source read into memory, straight-alpha RGBA (h, w, 4) in 0..1, with the Sticker's static
    drawing values: its `crop` and its `z_index` among the Sky layers.

    `derive_vfov` is set for `port` sources, whose vFOV follows hFOV and the source aspect because the port
    image can change outside the state. `frame` names which frame of a source with frames `rgba` holds; it is
    part of the Sky's cache key, so the Sky is drawn again only when it changes.
    """

    rgba: np.ndarray
    crop: dict
    z_index: int = 0
    derive_vfov: bool = False
    frame: int = 0


@dataclass(frozen=True)
class SceneSources:
    """Sources for one frame.

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
    `world` is a sequence of (rgba, depth) with depth (H, W), +inf where the layer is empty, folded in list
    order by `over_by_depth`; layers at the same depth keep their list order. Returns color (H, W, 3) and depth
    (H, W): the nearest World layer with alpha > 0, +inf (Sky) elsewhere.
    """
    height, width = sky.shape[:2]
    color = torch.as_tensor(bg_color, dtype=sky.dtype, device=sky.device).expand(height, width, 3)
    if bg is not None:
        color = bg if bg_valid is None else torch.where(bg_valid[..., None], bg, color)
    color = torch.lerp(color, sky[..., :3], sky[..., 3:])
    depth = torch.full((height, width), math.inf, dtype=sky.dtype, device=sky.device)
    if world:
        composite = None
        for layer in world:
            composite = over_by_depth(composite, layer)
        total, depth = composite
        color = torch.addcmul(total[..., :3], color, 1.0 - total[..., 3:])
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
        if sticker["placement"] != "sky" or not sticker["active"] or source is None:
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

    The output turns with the Camera's orientation (`camera_basis`); `ray_directions` gives each pixel's
    direction. The Camera's position does not enter: the background and the Sky are infinitely far away.
    """
    right, up, forward = (axis.tolist() for axis in camera_basis(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]))
    # Contiguous components keep the angles bit-identical for the legacy goldens: atan2 rounds strided input differently.
    x, y, z = ray_directions(right, up, forward, projection, device).movedim(-1, 0).contiguous()
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


def _sky_size(projection: Projection, bg_width: int | None) -> tuple[int, int]:
    """The size of the Sky's 360 ERP.

    For an ERP output it is drawn at the output width over 360 degrees, as the legacy node drew its overlay, so
    that a 360 output without Camera rotation uses it as it is. For a perspective output it is at least as fine
    as the output's pixels at the center, rounded up to a power of two (from 64) so that an animated FOV draws it
    again only when that step changes, and at least as fine as `bg_media` (`bg_width` pixels over its coverage),
    up to 4096 wide as the legacy Cutout drew.
    """
    if projection.kind == "erp":
        return projection.width, projection.height if projection.coverage == 360 else max(1, projection.width // 2)
    width = math.pi * projection.width / math.tan(math.radians(projection.hfov_deg) * 0.5)
    width = 2 ** max(6, math.ceil(math.log2(width)))
    if bg_width is not None:
        width = max(width, bg_width * 360 // projection.coverage)
    width = min(width, 4096)
    return width, width // 2


def _render_sky(evaluated: dict, sources: SceneSources, size: tuple[int, int], device) -> tuple[torch.Tensor, torch.Tensor]:
    """The Sky as a 360 ERP of `size` (`_sky_size`) on `device`: straight-alpha color (h, w, 4) and the paint mask (h, w)."""
    rgba, mask = _sky_erp(evaluated, sources, *size)
    return torch.tensor(rgba, dtype=torch.float32, device=device), torch.tensor(mask, dtype=torch.float32, device=device)


def _project_sky(rgba: torch.Tensor, mask: torch.Tensor, view: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
    # Color is sampled premultiplied so that transparent pixels do not bleed into Sticker edges.
    alpha = rgba[..., 3:]
    sampled = _sample_erp(torch.cat([rgba[..., :3] * alpha, alpha, mask[..., None]], dim=-1), view)
    alpha = sampled[..., 3:4]
    rgb = torch.where(alpha > 1e-6, sampled[..., :3] / alpha.clamp_min(1e-6), 0.0)
    # A copy of the mask so that the sampled layer is not kept alive through it.
    return torch.cat([rgb, alpha], dim=-1), sampled[..., 4].clone()


def _sky_key(evaluated: dict, sources: SceneSources, size: tuple[int, int]) -> tuple:
    # An inactive Sticker is not drawn, so its values changing outside its Clip range keep the Sky. Values are
    # rounded so that interpolation noise between equal Keyframes (30.0 vs 30.00000000000001) keeps it too.
    # A Sticker without a source has no frame (None).
    frames = {sticker_id: source.frame for sticker_id, source in sources.stickers.items()}
    return (size, tuple(
        (sticker["id"], *(round(sticker[key], 9) for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg", "vFOV_deg", "opacity")),
         frames.get(sticker["id"]))
        if sticker["active"] else (sticker["id"],)
        for sticker in evaluated["stickers"] if sticker["placement"] == "sky"
    ))


def _background(bg: torch.Tensor, device) -> torch.Tensor:
    """`bg_media` as opaque RGB on `device`."""
    bg = bg.to(device=device, dtype=torch.float32)
    return (bg[..., :1].expand(-1, -1, 3) if bg.shape[-1] < 3 else bg[..., :3]).clamp(0.0, 1.0)


def _project_background(bg: torch.Tensor, projection: Projection, view: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor | None]:
    """Sample `bg_media` at `view`, and where it has an image (None: everywhere).

    A 360 `coverage` reads it as a 360 ERP. A 180 one reads it as the ERP of the Scene's front hemisphere, as
    the legacy nodes did, so a turned Camera also sees directions it does not cover.
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
    bg_width: int | None = None,
    scene: SceneContent | None = None,
    scene_index: int | None = None,
) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
    """Draw one frame. Returns float32 color (H, W, 3), mask (H, W), and depth (H, W) on `device`.

    `evaluated` is `evaluate_scene_state` at the frame and `camera` the evaluated Camera value; the output
    turns with the Camera's rotation. `bg` is this frame's `bg_media` image (h, w, C) or None, and `bg_key` a
    hashable that names it (the bg_media frame index); without a key the background is not reused. `bg_color`
    is three floats in 0..1. `bg_width` is the width of the `bg_media` images of the execution (None: without
    any), which a perspective output's Sky resolution follows (`_sky_size`). `scene` is the `scene` input's content, of which item `scene_index` (None: none) is
    drawn while `evaluated["scene"]` is active. The mask is the painted mask and the depth is the distance from
    the Camera's position to the nearest World content, +inf where only the Sky is visible.

    `cache` is an optional dict owned by the caller for one execution, in which `bg_color`, `device`, and
    `sources` stay the same apart from the Sticker frames (`StickerSource.frame`). It keeps the previous frame's
    Sky, the Sky turned by the Camera, the background, the World content as one layer (`world_layer`), the drawn
    `world` Sticker sources on `device`, and the result: a frame whose Sky values and Sticker frames, Camera rotation,
    Projection, `bg_key`, and World content with the Camera's position (`world_key`) all repeat returns the previous
    frame's tensors themselves.
    """
    if cache is None:
        cache = {}
    sky_size = _sky_size(projection, bg_width)
    sky_key = _sky_key(evaluated, sources, sky_size)
    # A 360 ERP output without Camera rotation is the Sky and the background as they are.
    turned = projection.kind != "erp" or projection.coverage == 180 or any(abs(math.remainder(camera[key], 360.0)) > 1e-6 for key in ("yaw_deg", "pitch_deg", "roll_deg"))
    view_key = None
    if turned:
        view_key = (replace(projection, hfov_deg=round(projection.hfov_deg, 9)), *(round(camera[key], 9) for key in ("yaw_deg", "pitch_deg", "roll_deg")))
    bg_entry = None if bg is None else ("bg", bg_key)
    # A background without a key cannot be told apart from the previous frame's, so it is never reused.
    reusable = bg is None or bg_key is not None
    world = world_key(evaluated, sources, camera, projection, scene, scene_index)
    frame_key = (sky_key, view_key, bg_entry, world)
    if reusable and cache.get("frame_key") == frame_key:
        return cache["frame"]
    if cache.get("sky_key") != sky_key:
        cache["sky_key"], cache["sky"] = sky_key, _render_sky(evaluated, sources, sky_size, device)
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
    if world is None:
        for key in ("world_key", "world", "world_textures"):
            cache.pop(key, None)
    elif cache.get("world_key") != world:
        # The previous frame's layer is released before the new one is drawn.
        cache.pop("world", None)
        cache["world"] = world_layer(evaluated, sources, camera, projection, scene=scene, scene_index=scene_index,
                                     device=device, textures=cache.setdefault("world_textures", {}))
        cache["world_key"] = world
    layers = () if cache.get("world") is None else (cache["world"],)
    color, depth = composite_frame(bg_color, background, sky, layers, bg_valid=bg_valid)
    if reusable:
        cache["frame_key"], cache["frame"] = frame_key, (color, mask, depth)
    return color, mask, depth
