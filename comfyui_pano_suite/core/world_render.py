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

from .math import lens_radius, ray_directions, unit_float_tensor
from .world import world_rotation


@dataclass(frozen=True)
class CameraView:
    """A Camera in a glTF frame (World, or the `scene` input's own frame): `position` (3,) and `rotation` (3, 3)
    whose columns are its right, up, and back axes as `world_rotation` returns them (it looks down -Z).
    `to_world` (3, 3) turns directions of this frame into World ones (None: this frame is World), so that what is
    fixed in World, such as the default lights, can be brought into the content's frame."""

    position: np.ndarray
    rotation: np.ndarray
    projection: object
    to_world: np.ndarray | None = None

    def rays(self, device) -> torch.Tensor:
        """Unit directions (H, W, 3) of the output pixels from `position`."""
        right, up, back = self.rotation.T.tolist()
        return ray_directions(right, up, [-value for value in back], self.projection, device)

    def cached_rays(self, device, kept: dict) -> torch.Tensor:
        """`rays(device)`, kept in `kept` (a dict owned by one render pass) while the rotation and the Projection stay,
        so that a Camera that does not turn does not make them again for each frame."""
        key = (self.projection, self.rotation.tobytes(), str(device))
        if kept.get("key") != key:
            # The previous rays are released before the new ones are made.
            kept.clear()
            kept["rays"] = self.rays(device)
            kept["key"] = key
        return kept["rays"]


@dataclass(frozen=True)
class SceneContent:
    """The `scene` input as World content, for the SPLAT, MESH, and MoGe rasterizers to plug in.

    It has `count` items; two or more map one to one to output frames like an IMAGE batch. `render(view, index,
    device)` draws item `index` seen by `view`, a `CameraView` in the content's own frame: the `scene` transform
    is already undone, so `render` never sees it. It returns straight-alpha color (H, W, 4) and the distance from
    `view.position` (H, W) in the content's units, +inf where empty.

    Content with glTF clips (`animation`, a `GltfAnimation`, ADR 0043) also takes a `pose`, (clip index, seconds in
    the clip), as `render(view, index, device, pose)`; without one it is drawn at rest.
    """

    count: int
    render: Callable
    animation: object = None


@dataclass(frozen=True)
class ContentSource:
    """The source of a 3D (MESH or SPLAT) `world` Sticker: item `frame` of `content`, placed by the Sticker's
    transform as the `scene` transform places the `scene` content. `frame` is part of the World's cache key like
    `StickerSource.frame`. `content` uploads to the device, so it is made for each render pass. `pose` is the
    (clip index, seconds in the clip) of content with glTF clips (None: at rest), part of the key as `frame` is."""

    content: SceneContent
    frame: int = 0
    pose: tuple | None = None


def _transform_key(value: dict) -> tuple:
    return tuple(round(number, 9) for number in (*value["position"], value["yaw_deg"], value["pitch_deg"], value["roll_deg"], value["scale"]))


def _pose_key(pose) -> tuple | None:
    return None if pose is None else (pose[0], round(pose[1], 9))


def _drawn_content(layer) -> bool:
    return layer.scene is not None and layer.evaluated["scene"]["active"] and layer.scene_index is not None


def world_key(layers, camera: dict, projection) -> tuple | None:
    """What the World layer of a frame depends on, or None when no layer (`RenderLayer`) has World content (the
    Camera's position then does not matter). Values are rounded like the Sky's key."""
    contents = tuple(
        (
            tuple(
                (sticker["id"], *_transform_key(sticker), round(sticker["opacity"], 9), layer.sources.stickers[sticker["id"]].frame,
                 None if "lens" not in sticker else (round(sticker["lens"]["curve"], 9), round(sticker["lens"]["hFOV_deg"], 9)),
                 _pose_key(getattr(layer.sources.stickers[sticker["id"]], "pose", None)))
                for sticker in layer.evaluated["stickers"]
                if sticker["placement"] == "world" and sticker["active"] and sticker["id"] in layer.sources.stickers
            ),
            (layer.scene_index, _transform_key(layer.evaluated["scene"]), _pose_key(layer.scene_pose)) if _drawn_content(layer) else None,
        )
        for layer in layers
    )
    if not any(stickers or content for stickers, content in contents):
        return None
    pose = tuple(round(number, 9) for number in (*camera["position"], camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]))
    return projection, pose, contents


def world_layer(layers, camera: dict, projection, *, device, textures: dict, kept_rays: dict):
    """All World content of a frame, over every layer (`RenderLayer`: `evaluated`, `sources`, `scene`,
    `scene_index`), as one layer (rgba, depth), or None without any: the `scene` content of each layer, then the
    active `world` Stickers of all layers together from the farthest center (`position`) to the nearest (layer
    and state order on ties), each folded in by depth (`over_by_depth`) as it is drawn. Planes that do not
    intersect then come out in exact depth order, whichever layer they belong to. A 3D Sticker (`ContentSource`)
    is its content through its transform, with its opacity on the alpha. `textures` keeps each drawn plane's
    source on `device` by (layer index, id) with its frame, so a source is uploaded again only when its frame
    changes and the same id in two layers never shares one; the sources of Stickers not drawn are dropped.
    `kept_rays` keeps the Camera's rays for the planes (`CameraView.cached_rays`)."""
    view = CameraView(np.asarray(camera["position"], dtype=np.float64), world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]), projection)
    composite = None
    for layer in layers:
        if _drawn_content(layer):
            composite = over_by_depth(composite, _scene_layer(layer.scene, layer.scene_index, layer.evaluated["scene"], view, device, layer.scene_pose))
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
            rgba, depth = _scene_layer(source.content, source.frame, sticker, view, device, source.pose)
            composite = over_by_depth(composite, (torch.cat([rgba[..., :3], rgba[..., 3:] * sticker["opacity"]], dim=-1), depth))
            continue
        if rays is None:
            rays = view.cached_rays(device, kept_rays)
        key = (index, sticker["id"])
        drawn.add(key)
        draw = _sticker_layer if "lens" not in sticker else _lens_sticker_layer
        layer = draw(rays, view.position, sticker, _texture(textures, key, source, device), source.crop)
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


def _scene_layer(scene: SceneContent, index: int, transform: dict, view: CameraView, device, pose=None):
    # The scene transform (or a 3D Sticker's) maps its own frame to World as position + scale * rotation @ x; the content is drawn
    # from the Camera moved into its frame, and its distances are scaled back to World.
    rotation = world_rotation(transform["yaw_deg"], transform["pitch_deg"], transform["roll_deg"])
    scale = transform["scale"]
    local = CameraView(rotation.T @ (view.position - np.asarray(transform["position"])) / scale, rotation.T @ view.rotation, view.projection, rotation)
    rgba, depth = scene.render(local, index, device) if pose is None else scene.render(local, index, device, pose)
    return rgba, depth * scale


def _texture(textures: dict, key, source, device) -> torch.Tensor:
    """The source as premultiplied (1, 4, h, w) on `device`, so that transparent texels do not bleed into edges."""
    entry = textures.get(key)
    if entry is None or entry[0] != source.frame:
        rgba = unit_float_tensor(source.rgba, device)
        alpha = rgba[..., 3:]
        entry = textures[key] = (source.frame, torch.cat([rgba[..., :3] * alpha, alpha], dim=-1).permute(2, 0, 1)[None])
    return entry[1]


def _sticker_layer(rays: torch.Tensor, origin: np.ndarray, sticker: dict, texture: torch.Tensor, crop: dict):
    """A `world` Sticker as a plane: centered at `position`, spanning `scale` World units along its right axis and
    the cropped source's aspect along its up axis, facing its back axis (+Z of `world_rotation`). Both sides
    show the source, mirrored from behind. Returns None for an empty crop."""
    # TODO: every output pixel is tested against the plane, not only those it covers (docs/render-contract.md, "`world`
    # の Sticker の板"); limit the work to the plane's screen bounds before many Stickers or SPLAT content share a frame.
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


def _lens_sticker_layer(rays: torch.Tensor, origin: np.ndarray, sticker: dict, texture: torch.Tensor, crop: dict):
    """A `world` Sticker with a `lens` (ADR 0042; docs/render-contract.md, "`world` の Sticker の板"): its source as the
    image of a lens of `lens.curve` and `lens.hFOV_deg` on part of the sphere around the lens center
    L = position + ρ · back, ρ = scale / (2 g(hFOV / 2)), g = `lens_radius`. A point of the sphere whose direction from L
    is θ off the Sticker's forward axis at azimuth φ shows the image at (g(θ) cos φ / g(hFOV / 2), g(θ) sin φ /
    g(vFOV / 2)), the vFOV keeping f with the cropped source's aspect, as a `sky` Sticker of that curve is drawn. Each
    ray takes its nearest crossing ahead (t > 0) that is on the patch, from either side. Returns None for an empty
    crop."""
    crop_w, crop_h = crop["x1"] - crop["x0"], crop["y1"] - crop["y0"]
    if crop_w < 1e-6 or crop_h < 1e-6:
        return None
    curve, hfov = sticker["lens"]["curve"], sticker["lens"]["hFOV_deg"]
    half_w = lens_radius(math.radians(max(0.1, hfov)) * 0.5, curve)
    half_h = half_w * (crop_h * texture.shape[2]) / (crop_w * texture.shape[3])
    radius = sticker["scale"] / (2.0 * half_w)
    right, up, back = world_rotation(sticker["yaw_deg"], sticker["pitch_deg"], sticker["roll_deg"]).T
    center = np.asarray(sticker["position"], dtype=np.float64) + radius * back
    offset = torch.tensor(origin - center, dtype=torch.float32, device=rays.device)
    # |offset + t d|^2 = radius^2 for unit rays d.
    b = (rays * offset).sum(-1)
    discriminant = b * b - (float((offset * offset).sum()) - radius * radius)
    root = discriminant.clamp_min(0.0).sqrt()
    axes = torch.tensor(np.stack([right, up, -back], axis=1), dtype=torch.float32, device=rays.device)
    best = None
    for t in (-b - root, -b + root):
        point = (offset + rays * t[..., None]) / radius
        side, lift, ahead = (point @ axes).unbind(-1)
        off_axis = torch.hypot(side, lift)
        theta = torch.atan2(off_axis, ahead)
        valid = (discriminant >= 0.0) & (t > 0.0) & (theta * curve < 0.5 * math.pi) & (theta <= math.pi)
        scale_r = torch.where(off_axis > 1e-12, lens_radius(torch.where(valid, theta, 0.0), curve) / off_axis.clamp_min(1e-12), 1.0)
        x, y = side * scale_r / half_w, lift * scale_r / half_h
        inside = valid & (x.abs() <= 1.0) & (y.abs() <= 1.0)
        if best is None:
            best = (inside, x, y, t)
        else:
            take = ~best[0] & inside
            best = (best[0] | inside, torch.where(take, x, best[1]), torch.where(take, y, best[2]), torch.where(take, t, best[3]))
    inside, x, y, distance = best
    grid = torch.stack([(crop["x0"] + crop_w * (x + 1.0) * 0.5) * 2.0 - 1.0, (crop["y0"] + crop_h * (1.0 - y) * 0.5) * 2.0 - 1.0], dim=-1)
    grid = torch.where(inside[..., None], grid, 0.0)
    sampled = F.grid_sample(texture, grid[None], mode="bilinear", padding_mode="border", align_corners=True)[0].permute(1, 2, 0)
    alpha = sampled[..., 3:]
    rgb = torch.where(alpha > 1e-6, sampled[..., :3] / alpha.clamp_min(1e-6), 0.0)
    alpha = torch.where(inside[..., None], alpha * sticker["opacity"], 0.0)
    return torch.cat([rgb, alpha], dim=-1), torch.where(alpha[..., 0] > 0.0, distance, math.inf)
