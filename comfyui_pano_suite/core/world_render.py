"""World content of a frame: `world` Sticker planes and the `scene` input, each drawn as a straight-alpha layer
(H, W, 4) with its distance from the Camera (H, W) and folded by depth into one such layer for `composite_frame`
(`docs/render-contract.md`).

Positions are World (glTF) and angles the panorama convention; `world_rotation` (ADR 0023) is the only bridge.
"""
import math
from dataclasses import dataclass
from typing import Callable

import numpy as np
import torch
import torch.nn.functional as F

from .math import ray_directions
from .world import world_rotation


@dataclass(frozen=True)
class CameraView:
    """A Camera in a glTF frame (World, or the `scene` input's own frame): `position` (3,) and `rotation` (3, 3)
    whose columns are its right, up, and back axes as `world_rotation` returns them (it looks down -Z)."""

    position: np.ndarray
    rotation: np.ndarray
    projection: object

    def rays(self, device) -> torch.Tensor:
        """Unit directions (H, W, 3) of the output pixels from `position`."""
        right, up, back = self.rotation.T.tolist()
        return ray_directions(right, up, [-value for value in back], self.projection, device)


@dataclass(frozen=True)
class SceneContent:
    """The `scene` input as World content, for the SPLAT, MESH, and MoGe rasterizers to plug in.

    It has `count` items; two or more map one to one to output frames like an IMAGE batch. `render(view, index,
    device)` draws item `index` seen by `view`, a `CameraView` in the content's own frame: the `scene` transform
    is already undone, so `render` never sees it. It returns straight-alpha color (H, W, 4) and the distance from
    `view.position` (H, W) in the content's units, +inf where empty.
    """

    count: int
    render: Callable


@dataclass(frozen=True)
class ContentSource:
    """The source of a 3D (MESH or SPLAT) `world` Sticker: item `frame` of `content`, placed by the Sticker's
    transform as the `scene` transform places the `scene` content. `frame` is part of the World's cache key like
    `StickerSource.frame`. `content` uploads to the device, so it is made for each render pass."""

    content: SceneContent
    frame: int = 0


def _transform_key(value: dict) -> tuple:
    return tuple(round(number, 9) for number in (*value["position"], value["yaw_deg"], value["pitch_deg"], value["roll_deg"], value["scale"]))


def _drawn_content(layer) -> bool:
    return layer.scene is not None and layer.evaluated["scene"]["active"] and layer.scene_index is not None


def world_key(layers, camera: dict, projection) -> tuple | None:
    """What the World layer of a frame depends on, or None when no layer (`RenderLayer`) has World content (the
    Camera's position then does not matter). Values are rounded like the Sky's key."""
    contents = tuple(
        (
            tuple(
                (sticker["id"], *_transform_key(sticker), round(sticker["opacity"], 9), layer.sources.stickers[sticker["id"]].frame)
                for sticker in layer.evaluated["stickers"]
                if sticker["placement"] == "world" and sticker["active"] and sticker["id"] in layer.sources.stickers
            ),
            (layer.scene_index, _transform_key(layer.evaluated["scene"])) if _drawn_content(layer) else None,
        )
        for layer in layers
    )
    if not any(stickers or content for stickers, content in contents):
        return None
    pose = tuple(round(number, 9) for number in (*camera["position"], camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]))
    return projection, pose, contents


def world_layer(layers, camera: dict, projection, *, device, textures: dict):
    """All World content of a frame, over every layer (`RenderLayer`: `evaluated`, `sources`, `scene`,
    `scene_index`), as one layer (rgba, depth), or None without any: the `scene` content of each layer, then the
    active `world` Stickers of all layers together from the farthest center (`position`) to the nearest (layer
    and state order on ties), each folded in by depth (`over_by_depth`) as it is drawn. Planes that do not
    intersect then come out in exact depth order, whichever layer they belong to. A 3D Sticker (`ContentSource`)
    is its content through its transform, with its opacity on the alpha. `textures` keeps each drawn plane's
    source on `device` by (layer index, id) with its frame, so a source is uploaded again only when its frame
    changes and the same id in two layers never shares one; the sources of Stickers not drawn are dropped."""
    view = CameraView(np.asarray(camera["position"], dtype=np.float64), world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]), projection)
    composite = None
    for layer in layers:
        if _drawn_content(layer):
            composite = over_by_depth(composite, _scene_layer(layer.scene, layer.scene_index, layer.evaluated["scene"], view, device))
    rays = None
    drawn = set()
    stickers = [
        (index, sticker) for index, layer in enumerate(layers) for sticker in layer.evaluated["stickers"]
        if sticker["placement"] == "world" and sticker["active"] and sticker["id"] in layer.sources.stickers and sticker["opacity"] > 0.0
    ]
    stickers.sort(key=lambda item: -float(np.linalg.norm(np.asarray(item[1]["position"], dtype=np.float64) - view.position)))
    for index, sticker in stickers:
        source = layers[index].sources.stickers[sticker["id"]]
        if isinstance(source, ContentSource):
            rgba, depth = _scene_layer(source.content, source.frame, sticker, view, device)
            composite = over_by_depth(composite, (torch.cat([rgba[..., :3], rgba[..., 3:] * sticker["opacity"]], dim=-1), depth))
            continue
        if rays is None:
            rays = view.rays(device)
        key = (index, sticker["id"])
        drawn.add(key)
        layer = _sticker_layer(rays, view.position, sticker, _texture(textures, key, source, device), source.crop)
        if layer is not None:
            composite = over_by_depth(composite, layer)
    for key in textures.keys() - drawn:
        del textures[key]
    if composite is None:
        return None
    total, depth = composite
    alpha = total[..., 3:]
    return torch.cat([torch.where(alpha > 1e-6, total[..., :3] / alpha.clamp_min(1e-6), 0.0), alpha], dim=-1), depth


def over_by_depth(composite, layer):
    """Fold the straight-alpha `layer` (rgba, depth) into `composite`, a premultiplied (H, W, 4) with its nearest
    depth (None: empty): over it where the layer is as near or nearer (so later layers win ties), under it
    elsewhere. This is the depth order exactly where each layer is nearer or farther than all folded before; a
    layer between two at a pixel goes under both, so callers fold far to near where they can."""
    rgba, depth = layer
    alpha = rgba[..., 3:]
    premultiplied = torch.cat([rgba[..., :3] * alpha, alpha], dim=-1)
    depth = torch.where(alpha[..., 0] > 0.0, depth, math.inf)
    if composite is None:
        return premultiplied, depth
    total, nearest = composite
    front = (depth <= nearest)[..., None]
    total = torch.where(front, torch.addcmul(premultiplied, total, 1.0 - alpha), torch.addcmul(total, premultiplied, 1.0 - total[..., 3:]))
    return total, torch.minimum(nearest, depth)


def _scene_layer(scene: SceneContent, index: int, transform: dict, view: CameraView, device):
    # The scene transform (or a 3D Sticker's) maps its own frame to World as position + scale * rotation @ x; the content is drawn
    # from the Camera moved into its frame, and its distances are scaled back to World.
    rotation = world_rotation(transform["yaw_deg"], transform["pitch_deg"], transform["roll_deg"])
    scale = transform["scale"]
    local = CameraView(rotation.T @ (view.position - np.asarray(transform["position"])) / scale, rotation.T @ view.rotation, view.projection)
    rgba, depth = scene.render(local, index, device)
    return rgba, depth * scale


def _texture(textures: dict, key, source, device) -> torch.Tensor:
    """The source as premultiplied (1, 4, h, w) on `device`, so that transparent texels do not bleed into edges."""
    entry = textures.get(key)
    if entry is None or entry[0] != source.frame:
        # A copy: a source can be a read-only array, which torch does not take without one.
        rgba = torch.tensor(source.rgba, dtype=torch.float32, device=device)
        alpha = rgba[..., 3:]
        entry = textures[key] = (source.frame, torch.cat([rgba[..., :3] * alpha, alpha], dim=-1).permute(2, 0, 1)[None])
    return entry[1]


def _sticker_layer(rays: torch.Tensor, origin: np.ndarray, sticker: dict, texture: torch.Tensor, crop: dict):
    """A `world` Sticker as a plane: centered at `position`, spanning `scale` World units along its right axis and
    the cropped source's aspect along its up axis, facing its back axis (+Z of `world_rotation`). Both sides
    show the source, mirrored from behind. Returns None for an empty crop."""
    # TODO(#61): limit the work to the plane's screen bounds before many Stickers or SPLAT content share a frame.
    crop_w, crop_h = crop["x1"] - crop["x0"], crop["y1"] - crop["y0"]
    if crop_w < 1e-6 or crop_h < 1e-6:
        return None
    half_w = sticker["scale"] * 0.5
    half_h = half_w * (crop_h * texture.shape[2]) / (crop_w * texture.shape[3])
    right, up, normal = world_rotation(sticker["yaw_deg"], sticker["pitch_deg"], sticker["roll_deg"]).T
    offset = np.asarray(sticker["position"], dtype=np.float64) - origin
    along = rays @ torch.tensor(np.stack([normal, right, up], axis=1), dtype=torch.float32, device=rays.device)
    # Distance to the plane along each ray, and the hit point in half sizes from the center.
    distance = float(offset @ normal) / along[..., 0]
    x = (distance * along[..., 1] - float(offset @ right)) / half_w
    y = (distance * along[..., 2] - float(offset @ up)) / half_h
    inside = (distance > 0.0) & (x.abs() <= 1.0) & (y.abs() <= 1.0)
    # The crop in grid_sample coordinates; texel centers at the corners, as the Sky Stickers sample.
    grid = torch.stack([(crop["x0"] + crop_w * (x + 1.0) * 0.5) * 2.0 - 1.0, (crop["y0"] + crop_h * (1.0 - y) * 0.5) * 2.0 - 1.0], dim=-1)
    grid = torch.where(inside[..., None], grid, 0.0)
    sampled = F.grid_sample(texture, grid[None], mode="bilinear", padding_mode="border", align_corners=True)[0].permute(1, 2, 0)
    alpha = sampled[..., 3:]
    rgb = torch.where(alpha > 1e-6, sampled[..., :3] / alpha.clamp_min(1e-6), 0.0)
    alpha = torch.where(inside[..., None], alpha * sticker["opacity"], 0.0)
    return torch.cat([rgb, alpha], dim=-1), torch.where(alpha[..., 0] > 0.0, distance, math.inf)
