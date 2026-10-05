"""MESH and MoGe content of the `scene` input: triangles intersected exactly with the ray of each output pixel,
in pure torch, as a `SceneContent` layer (`docs/render-contract.md`).

Each triangle is tested only against the pixels whose centers its directions can reach: the pinhole projection of
its corners for a perspective output, and for an ERP the shortest longitude arc around its corners and the
latitudes of its edges (great circle arcs) and of a pole it surrounds. The nearest hit per pixel wins; both sides
are drawn and nothing is lit.
"""
import math
from dataclasses import dataclass

import torch
import torch.nn.functional as F

from .world_render import CameraView, SceneContent

# The base color of a mesh with neither a texture nor vertex colors, as the core's GLB writer gives bare geometry.
BARE_COLOR = 0.22
# Pixel-triangle pairs tested, and hit pixels colored, at once.
CHUNK = 1 << 21
# Triangles prepared at once.
TRIANGLES = 1 << 20
# A perspective output does not see what is nearer than this along its forward axis.
NEAR = 1e-6
# Pixel bounds and the barycentric test are widened by these, so that rounding does not drop a pixel center on a
# shared edge or vertex (as every pixel center is on a MoGe grid drawn at its own size).
PAD = 1e-3
EDGE = 1e-4


@dataclass(frozen=True)
class MeshItem:
    """One item of the `scene` input as triangles in its own glTF frame: `vertices` (N, 3), `faces` (M, 3), and
    optionally `uvs` (N, 2) into `texture` (h, w, 3) and per-vertex `colors` (N, C), multiplied as glTF's base
    color is."""

    vertices: torch.Tensor
    faces: torch.Tensor
    uvs: torch.Tensor | None = None
    colors: torch.Tensor | None = None
    texture: torch.Tensor | None = None


def mesh_content(count: int, item_at) -> SceneContent:
    """The `scene` content of `count` items, item `index` given by `item_at(index)` as a MeshItem. The last item
    drawn stays on the device for the next frame of the same execution, and so do the rays of the last view."""
    uploaded = {}
    kept_rays = {}

    def render(view, index, device):
        if uploaded.get("key") != (index, device):
            uploaded.clear()
            uploaded["item"] = _upload(item_at(index), device)
            uploaded["key"] = (index, device)
        return render_mesh(view, uploaded["item"], view.cached_rays(device, kept_rays))

    return SceneContent(count, render)


def _upload(item: MeshItem, device) -> MeshItem:
    def move(tensor):
        return None if tensor is None else tensor.to(device=device, dtype=torch.float32)

    return MeshItem(move(item.vertices), item.faces.to(device=device, dtype=torch.long), move(item.uvs), move(item.colors), move(item.texture))


def render_mesh(view: CameraView, item: MeshItem, rays: torch.Tensor | None = None):
    """The item seen by `view`: straight-alpha color (H, W, 4), opaque where a triangle is hit, and the distance
    along the pixel's ray to the nearest hit (H, W), +inf elsewhere. `rays` are `view.rays()` on the item's device
    when the caller keeps them (None: made here)."""
    projection = view.projection
    width, height = projection.width, projection.height
    device = item.vertices.device
    rays = (view.rays(device) if rays is None else rays).reshape(-1, 3)
    origin = torch.tensor(view.position, dtype=torch.float32, device=device)
    rotation = torch.tensor(view.rotation, dtype=torch.float32, device=device)
    bounds_of = _erp_bounds if projection.kind == "erp" else _perspective_bounds
    # Per triangle only its ray planes and its pixel bounds are kept: first and last column (unwrapped for an ERP,
    # which repeats every `period` columns), first and last row.
    planes, bounds = [], []
    for faces in item.faces.split(TRIANGLES):
        corners = item.vertices[faces] - origin
        planes.append(_ray_planes(corners))
        bounds.append(bounds_of(corners @ rotation, projection))
    planes, bounds = torch.cat(planes), torch.cat(bounds)
    period = 2 * width if projection.kind == "erp" and projection.coverage == 180 else width
    ends = ((bounds[:, 1] - bounds[:, 0] + 1).clamp_min(0).long() * (bounds[:, 3] - bounds[:, 2] + 1).clamp_min(0)).cumsum(0)
    total = int(ends[-1]) if ends.numel() else 0
    # Per pixel the nearest hit, as the distance's bits over the triangle index; positive floats order as their bits.
    nearest = torch.full((height * width,), torch.iinfo(torch.int64).max, dtype=torch.int64, device=device)
    for start in range(0, total, CHUNK):
        pair = torch.arange(start, min(start + CHUNK, total), device=device)
        triangle = torch.searchsorted(ends, pair, right=True)
        box = bounds[triangle].long()
        span = box[:, 1] - box[:, 0] + 1
        offset = pair - ends[triangle] + span * (box[:, 3] - box[:, 2] + 1)
        column = torch.remainder(box[:, 0] + offset % span, period)
        pixel = (box[:, 2] + offset // span) * width + column
        seen = column < width
        triangle, pixel = triangle[seen], pixel[seen]
        distance, _u, _v = _intersect(planes[triangle], rays[pixel])
        hit = (distance > 0.0) & torch.isfinite(distance)
        key = (distance[hit].view(torch.int32).long() << 32) | triangle[hit]
        nearest.scatter_reduce_(0, pixel[hit], key, "amin")
    rgba = torch.zeros((height * width, 4), device=device)
    depth = torch.full((height * width,), math.inf, device=device)
    for pixel in torch.nonzero(nearest != torch.iinfo(torch.int64).max)[:, 0].split(CHUNK):
        key = nearest[pixel]
        triangle = key & 0xFFFFFFFF
        _distance, u, v = _intersect(planes[triangle], rays[pixel])
        # Hits within EDGE outside the triangle take the values of its nearest edge.
        weights = torch.stack([1.0 - u - v, u, v], dim=-1).clamp_min(0.0)
        weights = weights / weights.sum(-1, keepdim=True)
        rgba[pixel, :3] = _base_color(item, item.faces[triangle], weights)
        rgba[pixel, 3] = 1.0
        depth[pixel] = (key >> 32).int().view(torch.float32)
    return rgba.reshape(height, width, 4), depth.reshape(height, width)


def _ray_planes(corners: torch.Tensor) -> torch.Tensor:
    """Per triangle, what Moller-Trumbore needs from it for rays from the origin, as (M, 10): for a ray `d`,
    det = d . [0:3], u = d . [3:6] / det, v = d . [6:9] / det, and the distance [9] / det."""
    v0, v1, v2 = corners.unbind(1)
    e1, e2 = v1 - v0, v2 - v0
    q = torch.linalg.cross(e1, v0)
    return torch.cat([torch.linalg.cross(e2, e1), torch.linalg.cross(v0, e2), q, (e2 * q).sum(-1, keepdim=True)], dim=-1)


def _intersect(planes: torch.Tensor, rays: torch.Tensor):
    """Distance along each ray to its triangle (not > 0 where it misses) and the barycentric u, v of the hit."""
    det, u, v = (planes[:, :9].reshape(-1, 3, 3) @ rays[..., None])[..., 0].unbind(-1)
    u, v = u / det, v / det
    distance = planes[:, 9] / det
    return torch.where((u >= -EDGE) & (v >= -EDGE) & (u + v <= 1.0 + EDGE), distance, -1.0), u, v


def _base_color(item: MeshItem, faces: torch.Tensor, weights: torch.Tensor) -> torch.Tensor:
    color = None
    if item.texture is not None and item.uvs is not None:
        # glTF's uv (0, 0) is the top left of the image; texels are sampled at their centers. Outside 0..1 the
        # texture repeats (glTF's default wrap); bilinear samples clamp at the image edges.
        uv = (item.uvs[faces] * weights[..., None]).sum(1)
        uv = torch.where((uv < 0.0) | (uv > 1.0), uv - uv.floor(), uv)
        texture = item.texture[..., :3].permute(2, 0, 1)[None]
        color = F.grid_sample(texture, (uv * 2.0 - 1.0)[None, None], mode="bilinear", padding_mode="border", align_corners=False)[0, :, 0].T
    if item.colors is not None:
        colors = (item.colors[faces, :3] * weights[..., None]).sum(1)
        color = colors if color is None else color * colors
    if color is None:
        color = torch.full((faces.shape[0], 3), BARE_COLOR, device=faces.device)
    return color


def _pixel_range(low: torch.Tensor, high: torch.Tensor, size: int | None = None):
    """The first and last integer pixels whose centers lie in [low, high], in pixel units from the first center,
    within `size` pixels when given."""
    first, last = torch.ceil(low - PAD).int(), torch.floor(high + PAD).int()
    if size is not None:
        first, last = first.clamp_min(0), last.clamp_max(size - 1)
    return torch.stack([first, last], dim=-1)


def _erp_bounds(corners: torch.Tensor, projection):
    """Columns (unwrapped) and rows per triangle for an ERP, as (M, 4) int32. `corners` (M, 3, 3) are in the
    Camera's axes: x right, y up, z back."""
    width, height = projection.width, projection.height
    span = math.pi if projection.coverage == 180 else 2.0 * math.pi
    directions = F.normalize(corners, dim=-1)
    x, y, z = directions.unbind(-1)
    lon, _order = torch.atan2(x, -z).sort(dim=-1)
    lat = torch.asin(y.clamp(-1.0, 1.0))
    # The shortest arc holding the three longitudes starts after the widest gap between them.
    gaps = torch.cat([lon[:, 1:] - lon[:, :-1], lon[:, :1] + 2.0 * math.pi - lon[:, 2:]], dim=-1)
    widest, after = gaps.max(dim=-1)
    lon_min = lon.gather(1, ((after + 1) % 3)[:, None])[:, 0]
    lon_max = lon_min + (2.0 * math.pi - widest)
    # A pole is inside the triangle where it is a nonnegative mix of the corners.
    a, b = directions, directions.roll(-1, dims=1)
    normals = torch.linalg.cross(a, b)
    volume = (directions[:, 0] * normals[:, 1]).sum(-1, keepdim=True)
    north = (normals[..., 1] * volume >= 0.0).all(dim=-1) & (volume[:, 0] != 0.0)
    south = (normals[..., 1] * volume <= 0.0).all(dim=-1) & (volume[:, 0] != 0.0)
    # The highest point of each edge's great circle, where it lies on the edge, and its opposite, the lowest.
    unit = F.normalize(normals, dim=-1)
    top = F.normalize(torch.stack([-unit[..., 0] * unit[..., 1], 1.0 - unit[..., 1] ** 2, -unit[..., 2] * unit[..., 1]], dim=-1), dim=-1)
    before = (torch.linalg.cross(a, top) * normals).sum(-1)
    behind = (torch.linalg.cross(top, b) * normals).sum(-1)
    edge_lat = torch.asin(top[..., 1].clamp(-1.0, 1.0))
    lat_max = torch.maximum(lat.amax(-1), torch.where((before > 0.0) & (behind > 0.0), edge_lat, -math.pi).amax(-1))
    lat_min = torch.minimum(lat.amin(-1), torch.where((before < 0.0) & (behind < 0.0), -edge_lat, math.pi).amin(-1))
    lat_max = torch.where(north, 0.5 * math.pi, lat_max)
    lat_min = torch.where(south, -0.5 * math.pi, lat_min)
    # An arc of half a turn or more (as around a pole) may hide any longitude between its corners.
    around = lon_max - lon_min >= math.pi
    lon_min = torch.where(around, -math.pi, lon_min)
    lon_max = torch.where(around, math.pi, lon_max)
    columns = _pixel_range((lon_min / span + 0.5) * width - 0.5, (lon_max / span + 0.5) * width - 0.5)
    rows = _pixel_range((0.5 - lat_max / math.pi) * height - 0.5, (0.5 - lat_min / math.pi) * height - 0.5, height)
    return torch.cat([columns, rows], dim=-1)


def _perspective_bounds(corners: torch.Tensor, projection):
    """Columns and rows per triangle for a pinhole output, as (M, 4) int32, from its corners in front of the Camera
    and the points where its edges cross the near plane."""
    width, height = projection.width, projection.height
    tan_x = math.tan(math.radians(projection.hfov_deg) * 0.5)
    tan_y = tan_x * height / width
    forward = -corners[..., 2]
    ahead = forward.roll(-1, dims=1)
    crossing = corners + (corners.roll(-1, dims=1) - corners) * ((forward - NEAR) / (forward - ahead))[..., None]
    points = torch.cat([corners, crossing], dim=1)
    valid = torch.cat([forward > NEAR, (forward > NEAR) != (ahead > NEAR)], dim=1)
    depth = (-points[..., 2]).clamp_min(NEAR)
    column = (points[..., 0] / depth / tan_x + 1.0) * 0.5 * width - 0.5
    row = (1.0 - points[..., 1] / depth / tan_y) * 0.5 * height - 0.5
    # Bounds far outside the image only need to reach past its edge.
    columns = _pixel_range(torch.where(valid, column, math.inf).amin(-1).clamp(-1.0, width), torch.where(valid, column, -math.inf).amax(-1).clamp(-1.0, width), width)
    rows = _pixel_range(torch.where(valid, row, math.inf).amin(-1).clamp(-1.0, height), torch.where(valid, row, -math.inf).amax(-1).clamp(-1.0, height), height)
    return torch.cat([columns, rows], dim=-1)
