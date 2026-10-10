"""Backend render function of Panorama Studio, with or without a Camera.

One call draws one frame from the layers of a Scene (`RenderLayer`: a state evaluated at a Timeline frame by
`evaluate_scene_state` and its resolved sources), a Camera, and a Projection. They are composited back to front:
`bg_color`, `bg_media`, the Sky of each layer from the bottom (`sky` Stickers in list order, then paint), and the
World content of all layers by depth (`world_render.py`).
"""
import math
from dataclasses import dataclass, field, replace

import numpy as np
import torch
import torch.nn.functional as F

from .display_layers import render_group_layer_from_state, render_raster_layer_from_state, render_remaining_flat_paint_layer_from_state
from .display_list import build_display_entries
from .math import camera_basis, lens_drawn, lens_radius, ray_directions, unit_float_tensor, vfov_from_hfov
from .painting import load_painting_layer_payload, render_painting_to_erp
from .world_render import SceneContent, over_by_depth, world_key, world_layer


@dataclass(frozen=True)
class Projection:
    """How the Camera turns the Scene into a `width` x `height` image.

    `erp` spans `coverage` (360 or 180) degrees of longitude; 180 is the Camera's front hemisphere.
    `perspective` is a Camera image with horizontal FOV `hfov_deg` and square pixels through the lens curve `curve`
    (1: a pinhole; docs/render-contract.md, "カメラのレンズ"), so its vertical FOV follows from the size. Its
    `coverage` is the span of the `bg_media` ERP it looks into.
    """

    kind: str
    width: int
    height: int
    coverage: int = 360
    hfov_deg: float = 90.0
    curve: float = 1.0

    @classmethod
    def erp(cls, width: int, height: int, coverage: int = 360) -> "Projection":
        return cls("erp", int(width), int(height), coverage=180 if int(coverage) == 180 else 360)

    @classmethod
    def perspective(cls, width: int, height: int, hfov_deg: float, coverage: int = 360, curve: float = 1.0) -> "Projection":
        return cls("perspective", int(width), int(height), coverage=180 if int(coverage) == 180 else 360, hfov_deg=float(hfov_deg), curve=float(curve))


@dataclass(frozen=True)
class StickerSource:
    """A 2D Sticker source read into memory, straight-alpha RGBA (h, w, 4), read-only: uint8 when read from an 8-bit
    image, float in 0..1 from an IMAGE input. With it, the Sticker's static drawing values: its `crop` and its
    `z_index` among the Sky layers.

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
    painting and `painting_layer` its uploaded rasters from `resolve_painting_layer_payload`. `contents` maps the ids
    of `world` Stickers whose `file` Source is a 3D file to the SPLAT or MESH read from it; it holds no device
    tensors, and the caller turns each into a `ContentSource` in `stickers` for a render pass (`render_frame` reads
    only `stickers`).
    """

    stickers: dict
    painting: dict
    painting_layer: dict | None = None
    contents: dict = field(default_factory=dict)


@dataclass(frozen=True)
class RenderLayer:
    """One layer of a frame: `evaluate_scene_state` of its state at the frame (`evaluated`), its `SceneSources`,
    and its `scene` content (`SceneContent` or None), of which item `scene_index` (None: none) is drawn while
    `evaluated["scene"]` is active. Each Panorama Studio of a chain of `scene` inputs is one layer."""

    evaluated: dict
    sources: SceneSources
    scene: SceneContent | None = None
    scene_index: int | None = None


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


def _drawn_sky_stickers(evaluated: dict, sources: SceneSources):
    """The active `sky` Stickers with a source, in list order, as (evaluated Sticker, `StickerSource`, vFOV)."""
    for sticker in evaluated["stickers"]:
        source = sources.stickers.get(sticker["id"])
        if sticker["placement"] != "sky" or not sticker["active"] or source is None:
            continue
        vfov = sticker["vFOV_deg"]
        if source.derive_vfov:
            vfov = vfov_from_hfov(sticker["hFOV_deg"], source.rgba.shape[1], source.rgba.shape[0], sticker["curve"])
        yield sticker, source, vfov


def _sky_layers(evaluated: dict, sources: SceneSources, size: tuple[int, int], device, textures: dict, paint: dict) -> tuple[list, tuple | None]:
    """The Sky as its layers, for `_shoot_sky` to sample each from its own pixels along the output's rays, and the
    paint mask. The layers are in display-list order: `sky` Stickers, paint groups, and rasters by `z_index` (Stickers
    first on ties, as the legacy display list ordered them), then the paint strokes outside any group on top.

    A `sky` Sticker is ("sticker", its source as premultiplied RGBA on `device`, its ripmap levels, its values). A
    paint layer is ("erp", premultiplied RGBA 360 ERP on `device`, its ripmap levels): the rasters the editor
    uploaded (`painting_layer`) at their own size, and the paint only the state holds (strokes without an uploaded
    raster, raster objects) drawn at `size`. The mask is (360 ERP (h, w, 1), its levels) in the same way, or None
    when nothing is masked. The levels are filled by `_sample_filtered`.

    `textures` keeps each Sticker's source on `device` while its frame (`StickerSource.frame`) stays, and `paint`
    the paint layers and the mask for this `size`, so a new Sky only orders the Stickers among them again.
    """
    width, height = size
    painting = sources.painting

    def payload():
        if "payload" not in paint:
            paint["payload"] = load_painting_layer_payload(sources.painting_layer) or {}
        return paint["payload"]

    def paint_layer(key, draw):
        # (whether the layer exists, the layer on `device` with its levels or None when it is empty)
        if key not in paint:
            layer = draw()
            paint[key] = (layer is not None, None if layer is None or not np.any(layer[..., 3] > 0.0) else (_premultiplied(layer, device), {}))
        return paint[key]

    def group_layer(group_id):
        layer = payload().get("groups", {}).get(group_id)
        return render_group_layer_from_state(painting, group_id, width, height) if layer is None else layer

    def flat_layer(used_layers):
        if used_layers:
            return render_remaining_flat_paint_layer_from_state(painting, width, height)
        flat = payload().get("paint")
        return render_painting_to_erp(painting, width, height)[0] if flat is None else flat

    stickers = [
        {"z_index": source.z_index, "sticker": sticker, "source": source, "vfov": vfov}
        for sticker, source, vfov in _drawn_sky_stickers(evaluated, sources)
    ]
    layers = []
    used_layers = False
    for index, entry in enumerate(build_display_entries({"stickers": stickers, "painting": painting})):
        if entry["type"] == "sticker":
            item = entry["item"]
            layers.append(("sticker", *_sticker_texture(item["sticker"]["id"], item["source"], textures, device), item))
            used_layers = True
            continue
        if entry["type"] == "strokeGroup":
            exists, layer = paint_layer(("group", entry["actionGroupId"]), lambda: group_layer(entry["actionGroupId"]))
        else:
            # Raster objects keep their order among the paint entries whichever Stickers are drawn between them.
            exists, layer = paint_layer(("raster", id(entry["item"])), lambda: render_raster_layer_from_state(entry["item"], width, height))
        used_layers = used_layers or exists
        if layer is not None:
            layers.append(("erp", *layer))
    _exists, flat = paint_layer(("flat", used_layers), lambda: flat_layer(used_layers))
    if flat is not None:
        layers.append(("erp", *flat))
    if "mask" not in paint:
        mask = payload().get("mask")
        if mask is None:
            _paint, mask = render_painting_to_erp(painting, width, height)
        paint["mask"] = (unit_float_tensor(mask, device)[..., None], {}) if np.any(mask > 0) else None
    return layers, paint["mask"]


def _premultiplied(rgba: np.ndarray, device) -> torch.Tensor:
    """Straight-alpha RGBA (uint8, or float in 0..1) as premultiplied float32 on `device`."""
    rgba = unit_float_tensor(rgba, device).clamp_(0.0, 1.0)
    return torch.cat([rgba[..., :3] * rgba[..., 3:], rgba[..., 3:]], dim=-1)


def _sticker_texture(sticker_id: str, source: StickerSource, textures: dict, device) -> tuple[torch.Tensor, dict]:
    """The Sticker's source on `device` and its ripmap levels, kept in `textures` while its frame stays."""
    entry = textures.get(sticker_id)
    if entry is None or entry[0] != source.frame:
        textures.pop(sticker_id, None)
        entry = textures[sticker_id] = (source.frame, _premultiplied(source.rgba[..., :4], device), {})
    return entry[1:]


def _rays(camera: dict, projection: Projection, device) -> torch.Tensor:
    """The Scene direction (H, W, 3) each output pixel looks in.

    The output turns with the Camera's orientation (`camera_basis`); `ray_directions` gives each pixel's
    direction. The Camera's position does not enter: the background and the Sky are infinitely far away.
    """
    right, up, forward = (axis.tolist() for axis in camera_basis(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]))
    return ray_directions(right, up, forward, projection, device)


def _view(rays: torch.Tensor) -> torch.Tensor:
    """Where `rays` (H, W, 3) look, as `grid_sample` coordinates (H, W, 2) in a 360 ERP of the Scene
    (align_corners=False): x from longitude -180 to 180 and y from the zenith to the nadir."""
    # Contiguous components keep the angles bit-identical for the legacy goldens: atan2 rounds strided input differently.
    x, y, z = rays.movedim(-1, 0).contiguous()
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


def _pixel_steps(values: torch.Tensor, wrap: bool = False) -> torch.Tensor:
    """How far `values` (H, W, 2) move from each output pixel to its neighbors (H, W, 2): the length of the step
    along the output's x and y together, each the larger of its two sides. `wrap` takes the first value as an ERP
    `grid_sample` x, so a step across the seam is the short way around."""
    def steps(dim):
        count = values.shape[dim]
        if count < 2:
            return torch.zeros_like(values)
        step = values.diff(dim=dim)
        if wrap:
            step[..., 0] = torch.remainder(step[..., 0] + 1.0, 2.0) - 1.0
        step = step.abs()
        return torch.maximum(torch.cat([step.narrow(dim, 0, 1), step], dim=dim), torch.cat([step, step.narrow(dim, count - 2, 1)], dim=dim))

    return torch.hypot(steps(1), steps(0))


def _footprint(grid: torch.Tensor, size: tuple[int, int], wrap: bool) -> torch.Tensor:
    """How many pixels of an image of `size` (h, w) each output pixel covers along its x and y (H, W, 2), from how
    far `grid` moves to the neighboring output pixels (`_pixel_steps`)."""
    return _pixel_steps(grid, wrap) * grid.new_tensor([size[1] * 0.5, size[0] * 0.5])


def _sample_filtered(image: torch.Tensor, grid: torch.Tensor, *, wrap: bool = False, select: torch.Tensor | None = None,
                     levels: dict | None = None) -> torch.Tensor:
    """Samples of `image` (h, w, C) at `grid` (H, W, 2) as `_sample` (`_sample_erp` with `wrap`) takes them, from
    copies of the image averaged down to each output pixel's footprint where it covers more than one image pixel.

    The copies halve the width and the height separately (a ripmap), and each pixel blends the two widths and the
    two heights around its footprint along x and y (`_footprint`), so the long, thin footprints near the poles of
    an ERP are not blurred across. Each copy is the previous one shrunk with a triangle filter, which keeps where a
    small feature is (a box filter moves it to the center of its pair of pixels). A footprint of at most one image
    pixel samples the image itself. `select` (H, W) limits the samples to its pixels; the others are 0.

    `levels` is an optional dict owned by the caller in which the shrunk copies of this `image` are kept, so that
    they are made once while the image stays. The copies a sampling needs are made as it needs them; all of them
    together are at most three times the image.
    """
    sample = _sample_erp if wrap else _sample
    footprint = _footprint(grid, image.shape[:2], wrap)
    if select is not None:
        footprint = footprint[select]
        if footprint.numel() == 0:
            return image.new_zeros((*grid.shape[:2], image.shape[-1]))
    if float(footprint.max()) <= 1.0 + 1e-3:
        sampled = sample(image, grid)
        return sampled if select is None else torch.where(select[..., None], sampled, 0.0)
    height, width = image.shape[:2]
    top = grid.new_tensor([width.bit_length() - 1, height.bit_length() - 1])
    lod = torch.log2(footprint.clamp_min(1.0)).minimum(top)
    base = lod.floor()
    fraction = lod - base
    base = base.long()
    points = grid if select is None else grid[select]
    lod_shape = lod.shape[:-1]
    base, fraction, points = base.reshape(-1, 2), fraction.reshape(-1, 2), points.reshape(-1, 2)
    if levels is None:
        levels = {}

    def level(i, j):
        if i == j == 0:
            return image
        if (i, j, wrap) not in levels:
            source = level(i - 1, j) if i > 0 else level(i, j - 1)
            levels[i, j, wrap] = _shrink(source, max(1, height >> j), max(1, width >> i), wrap)
        return levels[i, j, wrap]

    def weights(axis):
        values = {}
        for index in torch.cat([base[:, axis], base[:, axis][fraction[:, axis] > 0] + 1]).unique().tolist():
            values[index] = torch.where(base[:, axis] == index, 1.0 - fraction[:, axis], 0.0) + torch.where(base[:, axis] + 1 == index, fraction[:, axis], 0.0)
        return values

    total = image.new_zeros((points.shape[0], image.shape[-1]))
    for i, along_x in weights(0).items():
        for j, along_y in weights(1).items():
            weight = along_x * along_y
            picked = weight > 0
            if bool(picked.any()):
                total[picked] += weight[picked, None] * sample(level(i, j), points[picked][:, None])[:, 0]
    if select is None:
        return total.reshape(*lod_shape, -1)
    result = image.new_zeros((*grid.shape[:2], image.shape[-1]))
    result[select] = total
    return result


def _shrink(image: torch.Tensor, height: int, width: int, wrap: bool) -> torch.Tensor:
    """`image` (h, w, C) made smaller with a triangle filter as wide as the pixels it is shrunk to (`antialias`).

    With `wrap`, x is a longitude and the filter reaches across the seam. Only the first and the last columns
    reach that far (the filter is one output pixel to each side), and `interpolate` cuts the filter at the edge
    there, so those two are taken again from the columns around the seam with the same weights.
    """
    work = F.interpolate(image.permute(2, 0, 1)[None], size=(height, width), mode="bilinear", align_corners=False, antialias=True)[0].permute(1, 2, 0)
    if not wrap or width >= image.shape[1]:
        return work
    scale = image.shape[1] / width
    for column in {0, width - 1}:
        center = (column + 0.5) * scale
        source = torch.arange(math.floor(center - scale), math.ceil(center + scale) + 1, device=image.device)
        weight = (1.0 - ((source + 0.5) - center).abs() / scale).clamp_min(0.0)
        picked = image[:, source.remainder(image.shape[1])]
        # The columns keep their count, so this only filters along y as `interpolate` does above.
        picked = F.interpolate(picked.permute(2, 0, 1)[None], size=(height, picked.shape[1]), mode="bilinear", align_corners=False, antialias=True)[0].permute(1, 2, 0)
        work[:, column] = (picked * (weight / weight.sum())[:, None].to(picked.dtype)).sum(dim=1)
    return work


def _resize(image: torch.Tensor, height: int, width: int) -> torch.Tensor:
    """A 360 ERP (h, w, C) at `height` x `width`: averaged over each output pixel where that is smaller, and
    bilinear where it is only larger."""
    if image.shape[0] == height and image.shape[1] == width:
        return image
    if height < image.shape[0] or width < image.shape[1]:
        return _shrink(image, height, width, wrap=True)
    work = F.interpolate(image.permute(2, 0, 1)[None], size=(height, width), mode="bilinear", align_corners=False)
    return work[0].permute(1, 2, 0)


def _sky_size(projection: Projection, bg_width: int | None) -> tuple[int, int]:
    """The size of the 360 ERP into which the backend draws the paint that only the state holds (`_sky_layers`); the
    Stickers and the uploaded paint are sampled from their own pixels.

    For an ERP output it is the output width over 360 degrees, as the legacy node drew its overlay, so that a 360
    output without Camera rotation samples it pixel for pixel. For a perspective output it is at least as fine as the output's pixels at the center, rounded up to
    a power of two (from 64) so that an animated FOV draws it again only when that step changes, and at least as
    fine as `bg_media` (`bg_width` pixels over its coverage), up to 4096 wide, as drawing strokes into a larger
    ERP costs seconds and gigabytes each time.
    """
    if projection.kind == "erp":
        return projection.width, projection.height if projection.coverage == 360 else max(1, projection.width // 2)
    width = math.pi * projection.width / lens_radius(math.radians(projection.hfov_deg) * 0.5, projection.curve)
    width = 2 ** max(6, math.ceil(math.log2(width)))
    if bg_width is not None:
        width = max(width, bg_width * 360 // projection.coverage)
    width = min(width, 4096)
    return width, width // 2


def _shoot_sticker(texture: torch.Tensor, levels: dict, item: dict, rays: torch.Tensor) -> torch.Tensor:
    """A `sky` Sticker seen along `rays` (H, W, 3), premultiplied (H, W, 4) and 0 outside it, sampled from its source
    `texture` (`_sky_layers`) at the place `core/stickers.py` draws into the Sky ERP (`_compose_sticker_patch`).
    Its edges cover the output pixels they cross by how much of each pixel is inside them."""
    sticker = item["sticker"]
    x0, y0, x1, y1 = (float(item["source"].crop.get(key, default)) for key, default in (("x0", 0.0), ("y0", 0.0), ("x1", 1.0), ("y1", 1.0)))
    left, top = max(0.0, min(1.0, min(x0, x1))), max(0.0, min(1.0, min(y0, y1)))
    right_edge, bottom = max(0.0, min(1.0, max(x0, x1))), max(0.0, min(1.0, max(y0, y1)))
    if right_edge - left < 1e-6 or bottom - top < 1e-6:
        return rays.new_zeros((*rays.shape[:2], 4))
    right, up, forward = (rays.new_tensor(axis) for axis in camera_basis(sticker["yaw_deg"], sticker["pitch_deg"], sticker["roll_deg"], dtype=np.float64))
    depth = rays @ forward
    curve = sticker["curve"]
    if curve == 1.0:
        distance = depth.clamp_min(1e-6)
        across = (rays @ right) / distance / math.tan(math.radians(max(0.1, sticker["hFOV_deg"])) * 0.5)
        down = (rays @ up) / distance / math.tan(math.radians(max(0.1, item["vfov"])) * 0.5)
        seen = depth > 1e-6
    else:
        # The Sticker as the image of a lens of `curve` (ADR 0042): a direction θ off its forward axis, at azimuth φ on
        # its right and up axes, lands lens_radius(θ) from its center, which the hFOV and vFOV edges scale to 1.
        side, lift = rays @ right, rays @ up
        off_axis = torch.hypot(side, lift)
        theta = torch.atan2(off_axis, depth)
        seen = (theta * curve < 0.5 * math.pi) & (theta <= math.pi)
        radius = lens_radius(torch.where(seen, theta, 0.0), curve)
        # radius / sin θ as the scale of (side, lift); its limit on the axis is 1.
        scale_r = torch.where(off_axis > 1e-12, radius / off_axis.clamp_min(1e-12), 1.0)
        across = side * scale_r / lens_radius(math.radians(max(0.1, sticker["hFOV_deg"])) * 0.5, curve)
        down = lift * scale_r / lens_radius(math.radians(max(0.1, item["vfov"])) * 0.5, curve)
    plane = torch.stack([across, down], dim=-1)
    # A pixel covers at most the Sticker's whole width (2) of the plane: across the plane's horizon (depth 0), where
    # the plane runs off to infinity between neighbors, the step would otherwise give the pixels there half coverage.
    steps = _pixel_steps(plane).clamp(1e-12, 2.0)
    coverage = ((1.0 - plane.abs()) / steps + 0.5).clamp(0.0, 1.0).prod(dim=-1)
    coverage = torch.where(seen, coverage, 0.0)
    inside = coverage > 0.0
    # The legacy drawing puts u = 0 and 1 on the centers of the first and last source pixels.
    height, width = texture.shape[:2]
    u = (left + (right_edge - left) * (across * 0.5 + 0.5)) * (width - 1)
    v = (top + (bottom - top) * (0.5 - down * 0.5)) * (height - 1)
    grid = torch.stack([(u * 2.0 + 1.0) / width - 1.0, (v * 2.0 + 1.0) / height - 1.0], dim=-1)
    return _sample_filtered(texture, grid, select=inside, levels=levels) * (coverage * sticker["opacity"])[..., None]


def _shoot_sky(layers: list, mask: tuple | None, rays: torch.Tensor, view: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
    """The Sky layers of `_sky_layers` seen along `rays` (`view` in the 360 ERP), composited over each other in
    order, as straight-alpha color (H, W, 4) and the mask (H, W)."""
    total = rays.new_zeros((*rays.shape[:2], 4))
    for kind, layer, levels, *item in layers:
        color = _shoot_sticker(layer, levels, item[0], rays) if kind == "sticker" else _sample_filtered(layer, view, wrap=True, levels=levels)
        total = torch.addcmul(color, total, 1.0 - color[..., 3:])
    alpha = total[..., 3:]
    rgb = torch.where(alpha > 1e-6, total[..., :3] / alpha.clamp_min(1e-6), 0.0)
    shot_mask = rays.new_zeros(rays.shape[:2]) if mask is None else _sample_filtered(mask[0], view, wrap=True, levels=mask[1])[..., 0]
    return torch.cat([rgb.clamp(0.0, 1.0), alpha], dim=-1), shot_mask


def _sky_key(evaluated: dict, sources: SceneSources, size: tuple[int, int]) -> tuple:
    # An inactive Sticker is not drawn, so its values changing outside its Clip range keep the Sky. Values are
    # rounded so that interpolation noise between equal Keyframes (30.0 vs 30.00000000000001) keeps it too.
    # A Sticker without a source has no frame (None).
    frames = {sticker_id: source.frame for sticker_id, source in sources.stickers.items()}
    return (size, tuple(
        (sticker["id"], *(round(sticker[key], 9) for key in ("yaw_deg", "pitch_deg", "roll_deg", "hFOV_deg", "vFOV_deg", "opacity", "curve")),
         frames.get(sticker["id"]))
        if sticker["active"] else (sticker["id"],)
        for sticker in evaluated["stickers"] if sticker["placement"] == "sky"
    ))


def _background(bg: torch.Tensor, device) -> torch.Tensor:
    """`bg_media` as opaque RGB on `device`."""
    bg = bg.to(device=device, dtype=torch.float32)
    return (bg[..., :1].expand(-1, -1, 3) if bg.shape[-1] < 3 else bg[..., :3]).clamp(0.0, 1.0)


def _project_background(bg: torch.Tensor, projection: Projection, view: torch.Tensor, levels: dict | None = None) -> tuple[torch.Tensor, torch.Tensor | None]:
    """Sample `bg_media` at `view`, and where it has an image (None: everywhere).

    A 360 `coverage` reads it as a 360 ERP. A 180 one reads it as the ERP of the Scene's front hemisphere, as
    the legacy nodes did, so a turned Camera also sees directions it does not cover.
    """
    if projection.coverage == 360:
        return _sample_filtered(bg, view, wrap=True, levels=levels), None
    grid = view.clone()
    grid[..., 0] *= 2.0
    valid = grid[..., 0].abs() <= 1.0
    return _sample_filtered(bg, grid, select=valid, levels=levels), valid


def render_frame(
    layers,
    camera: dict,
    projection: Projection,
    *,
    bg: torch.Tensor | None,
    bg_key=None,
    bg_color,
    device,
    cache: dict | None = None,
    bg_width: int | None = None,
) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
    """Draw one frame. Returns float32 color (H, W, 3), mask (H, W), and depth (H, W) on `device`.

    `layers` is a sequence of `RenderLayer`, from the bottom: each one's Sky is drawn over the Skies before it, and
    the World content of all of them meets by depth. `camera` is the evaluated Camera value; the output turns with
    the Camera's rotation. `bg` is this frame's `bg_media` image (h, w, C) or None, and `bg_key` a hashable that
    names it (the bg_media frame index); without a key the background is not reused. `bg_color` is three floats in
    0..1. `bg_width` is the width of the `bg_media` images of the execution (None: without any), which a perspective
    output's Sky resolution follows (`_sky_size`). The mask is the painted masks of all layers (the largest at each
    pixel) and the depth is the distance from the Camera's position to the nearest World content, +inf where only
    the Sky is visible.

    `cache` is an optional dict owned by the caller for one execution, in which `bg_color`, `device`, the number of
    layers, and each layer's `sources` stay the same apart from the Sticker frames (`StickerSource.frame`). It keeps
    the background, the ripmap levels `_sample_filtered` made of it, the World content of all layers as one layer
    (`world_layer`) with the drawn `world` Sticker sources on `device` by layer and id and the rays it was drawn
    along, the output's rays and where they look while the Camera rotation and the Projection stay, and the result, and for each
    layer apart (so Sticker ids of different layers never meet) the previous frame's Sky (its layers, with the `sky`
    Sticker sources and the paint layers of its size on `device`), the Sky shot along the output's rays, and the ripmap levels of the Sticker sources and the paint layers (released with them). A frame whose
    Sky values and Sticker frames in every layer, Camera rotation, Projection, `bg_key`, and World content with the
    Camera's position (`world_key`) all repeat returns the previous frame's tensors themselves.
    """
    if cache is None:
        cache = {}
    sky_size = _sky_size(projection, bg_width)
    # A 360 ERP output without Camera rotation is the background as it is.
    turned = projection.kind != "erp" or projection.coverage == 180 or any(abs(math.remainder(camera[key], 360.0)) > 1e-6 for key in ("yaw_deg", "pitch_deg", "roll_deg"))
    view_key = None
    if turned:
        view_key = (replace(projection, hfov_deg=round(projection.hfov_deg, 9), curve=round(projection.curve, 9)), *(round(camera[key], 9) for key in ("yaw_deg", "pitch_deg", "roll_deg")))
    bg_entry = None if bg is None else ("bg", bg_key)
    # A background without a key cannot be told apart from the previous frame's, so it is never reused.
    reusable = bg is None or bg_key is not None
    sky_keys = tuple(_sky_key(layer.evaluated, layer.sources, sky_size) for layer in layers)
    world = world_key(layers, camera, projection)
    frame_key = (sky_keys, view_key, bg_entry, world)
    if reusable and cache.get("frame_key") == frame_key:
        return cache["frame"]
    caches = cache.setdefault("layers", [])
    caches.extend({} for _ in range(len(layers) - len(caches)))
    look_key = (projection, *(camera[key] for key in ("yaw_deg", "pitch_deg", "roll_deg")))
    looked = False

    def look():
        # The direction of each output pixel and where it looks in the 360 ERP, made when needed and kept while the
        # Camera rotation and the Projection stay (exactly: unlike `view_key`, the values are not rounded).
        nonlocal looked
        looked = True
        if cache.get("look_key") != look_key:
            # The previous rays are released before the new ones are made.
            cache.pop("look", None)
            rays = _rays(camera, projection, device)
            cache["look"] = rays, _view(rays)
            cache["look_key"] = look_key
        return cache["look"]

    sky = mask = None
    for layer, layer_cache, sky_key in zip(layers, caches, sky_keys):
        layer_sky = _layer_sky(layer, layer_cache, sky_key, sky_size, view_key, look, device)
        sky, mask = layer_sky if sky is None else (_sky_over(sky, layer_sky[0]), torch.maximum(mask, layer_sky[1]))
    if world is None:
        for key in ("world_key", "world", "world_textures", "world_rays"):
            cache.pop(key, None)
    elif cache.get("world_key") != world:
        # The previous frame's layer is released before the new one is drawn.
        cache.pop("world", None)
        cache["world"] = world_layer(layers, camera, projection, device=device, textures=cache.setdefault("world_textures", {}),
                                     kept_rays=cache.setdefault("world_rays", {}))
        cache["world_key"] = world
    background = bg_valid = None
    if bg is not None:
        levels = None
        if reusable and cache.get("bg_key") == bg_entry:
            background, levels = cache["bg"], cache["bg_levels"]
        else:
            # The previous background and its ripmap levels are released before the new one is read.
            for key in ("bg_key", "bg", "bg_levels"):
                cache.pop(key, None)
            background = _background(bg, device)
            if reusable:
                levels = {}
                cache["bg_key"], cache["bg"], cache["bg_levels"] = bg_entry, background, levels
        if not turned:
            background = _resize(background, projection.height, projection.width)
        else:
            background, bg_valid = _project_background(background, projection, look()[1], levels)
    if not looked:
        # A frame that does not look along the rays does not keep them.
        for key in ("look_key", "look"):
            cache.pop(key, None)
    world_layers = () if cache.get("world") is None else (cache["world"],)
    color, depth = composite_frame(bg_color, background, sky, world_layers, bg_valid=bg_valid)
    # A lens that sees past 180 degrees off its axis (a wide fisheye's corners) draws those pixels as `bg_color`.
    if cache.get("drawn_key") != projection:
        cache["drawn"], cache["drawn_key"] = lens_drawn(projection, device), projection
    drawn = cache["drawn"]
    if drawn is not None:
        color = torch.where(drawn[..., None], color, torch.tensor(bg_color, dtype=color.dtype, device=device))
        mask = torch.where(drawn, mask, 0.0)
        depth = torch.where(drawn, depth, math.inf)
    if reusable:
        cache["frame_key"], cache["frame"] = frame_key, (color, mask, depth)
    return color, mask, depth


def _layer_sky(layer: RenderLayer, cache: dict, sky_key: tuple, sky_size: tuple[int, int], view_key, look, device) -> tuple[torch.Tensor, torch.Tensor]:
    """A layer's Sky in the output (straight-alpha color (H, W, 4)) and its paint mask (H, W): its layers
    (`_sky_layers`) kept in the layer's `cache` while its `sky_key` stays, and shot along the output's rays
    (`_shoot_sky`) while `view_key` (None: a 360 ERP not turned) stays too."""
    if cache.get("sky_key") != sky_key:
        # The previous Sky is released before the new one is drawn.
        cache.pop("sky", None)
        if cache.get("sky_paint", {}).get("size") != sky_size:
            # The paint of the previous size is released before the new one is drawn.
            cache.pop("sky_paint", None)
            cache["sky_paint"] = {"size": sky_size}
        cache["sky"] = _sky_layers(layer.evaluated, layer.sources, sky_size, device, cache.setdefault("sky_textures", {}), cache["sky_paint"])
        cache["sky_key"] = sky_key
    if cache.get("shot_sky_key") != (sky_key, view_key):
        # The previous shot is released before the new one is taken.
        cache.pop("shot_sky", None)
        rays, view = look()
        cache["shot_sky"] = _shoot_sky(*cache["sky"], rays, view)
        cache["shot_sky_key"] = (sky_key, view_key)
    return cache["shot_sky"]


def _sky_over(below: torch.Tensor, above: torch.Tensor) -> torch.Tensor:
    """The straight-alpha Sky `above` (H, W, 4) composited over `below`, straight-alpha."""
    alpha = above[..., 3:]
    total = alpha + below[..., 3:] * (1.0 - alpha)
    rgb = above[..., :3] * alpha + below[..., :3] * below[..., 3:] * (1.0 - alpha)
    return torch.cat([torch.where(total > 1e-6, rgb / total.clamp_min(1e-6), 0.0), total], dim=-1)
