"""MESH, mesh 3D files, and MoGe content: triangles intersected exactly with the ray of each output pixel, in pure
torch, as a `SceneContent` layer, colored as three.js r184 draws the editor's GLB of the item
(`docs/render-contract.md`).

Each triangle is tested only against the pixels whose centers its directions can reach: the pinhole projection of
its corners for a perspective output, and for an ERP the shortest longitude arc around its corners and the
latitudes of its edges (great circle arcs) and of a pole it surrounds. The nearest hit per pixel wins; both sides
are drawn. An item that is not `unlit` is lit by the default lights with three.js's MeshStandardMaterial; the color
is worked in linear space and returned in sRGB. Intersections and lighting are elementwise sums of products, so
they do not depend on global precision settings such as TF32 matrix products.
"""
import math
from dataclasses import dataclass

import numpy as np
import torch
import torch.nn.functional as F

from .three_dfg_lut import DFG_LUT_HALVES, DFG_LUT_SIZE
from .world_render import CameraView, SceneContent, over_by_depth

# The base color of a mesh with neither a texture nor vertex colors, as the core's GLB writer gives bare geometry.
BARE_COLOR = 0.22
# Pixel-triangle pairs tested, and hit pixels colored, at once.
CHUNK = 1 << 21
# Hit pixels shaded at once; each keeps a few dozen floats while it is lit.
SHADE_CHUNK = 1 << 19
# Triangles prepared at once.
TRIANGLES = 1 << 20
# A perspective output does not see what is nearer than this along its forward axis.
NEAR = 1e-6
# Pixel bounds and the barycentric test are widened by these, so that rounding does not drop a pixel center on a
# shared edge or vertex (as every pixel center is on a MoGe grid drawn at its own size).
PAD = 1e-3
EDGE = 1e-4
# three.js's lower bound of the roughness (`lights_physical_fragment`) and its EPSILON (`common`).
ROUGHNESS_MIN = 0.0525
EPSILON = 1e-6
RECIPROCAL_PI = 0.3183098861837907


@dataclass(frozen=True)
class Light:
    """A light of the default lighting: `type` "ambient" or "directional", its `intensity` on a white `color`, and
    for a directional light the `position` it shines from toward the World origin."""

    type: str
    intensity: float
    position: tuple | None = None
    color: tuple = (1.0, 1.0, 1.0)


# The lighting of every lit item: ComfyUI Load3D's default (docs/render-contract.md, "既定の照明"). Fixed in World;
# tests/fixtures/default_lighting.json holds the same values for the editor.
DEFAULT_LIGHTS = (
    Light("ambient", 1.5),
    Light("directional", 2.4, (0.0, 10.0, 10.0)),
    Light("directional", 1.5, (0.0, 10.0, -10.0)),
    Light("directional", 0.9, (-10.0, 0.0, 0.0)),
    Light("directional", 0.9, (10.0, 0.0, 0.0)),
    Light("directional", 0.6, (0.0, -10.0, 0.0)),
)


@dataclass(frozen=True)
class MeshMaterial:
    """The factors of a lit item's MeshStandardMaterial, as three.js reads them from the item's GLB: base color
    (linear RGB), metalness, roughness, emissive (linear RGB, at most 1, times its strength), the normal map's scale,
    and the occlusion's strength."""

    base_color_factor: tuple = (1.0, 1.0, 1.0)
    metallic_factor: float = 0.0
    roughness_factor: float = 1.0
    emissive_factor: tuple = (0.0, 0.0, 0.0)
    emissive_strength: float = 1.0
    normal_scale: float = 1.0
    occlusion_strength: float = 1.0


@dataclass(frozen=True)
class MeshItem:
    """One item as triangles in its own glTF frame: `vertices` (N, 3), `faces` (M, 3), and optionally `uvs` (N, 2)
    into `texture` (h, w, 3, sRGB), per-vertex `colors` (N, C, linear), and per-vertex `normals` (N, 3). `unlit`
    items show their base color; the others are lit with `material` and its maps: `metallic_roughness` (h, w, 3:
    occlusion when `occlusion_in_mr`, roughness, metalness), a tangent-space `normal_map` (h, w, 3) with optional
    `tangents` (N, 4), and `emissive` (h, w, 3, sRGB). Without a material the factors are 1, and bare geometry is
    BARE_COLOR."""

    vertices: torch.Tensor
    faces: torch.Tensor
    uvs: torch.Tensor | None = None
    colors: torch.Tensor | None = None
    texture: torch.Tensor | None = None
    normals: torch.Tensor | None = None
    unlit: bool = True
    material: MeshMaterial | None = None
    metallic_roughness: torch.Tensor | None = None
    normal_map: torch.Tensor | None = None
    tangents: torch.Tensor | None = None
    emissive: torch.Tensor | None = None
    occlusion_in_mr: bool = False


def mesh_content(count: int, item_at) -> SceneContent:
    """The `scene` content of `count` items, item `index` given by `item_at(index)` as a MeshItem, or as a list of
    them (the views of a DA3_GEOMETRY multiview, none for an empty item) drawn each and folded by depth into one
    straight-alpha layer. The last item drawn stays on the device for the next frame of the same execution, and so
    do the rays of the last view."""
    uploaded = {}
    kept_rays = {}

    def render(view, index, device):
        if uploaded.get("key") != (index, device):
            uploaded.clear()
            item = item_at(index)
            uploaded["item"] = [_upload(part, device) for part in item] if isinstance(item, (list, tuple)) else _upload(item, device)
            uploaded["key"] = (index, device)
        rays = view.cached_rays(device, kept_rays)
        item = uploaded["item"]
        if not isinstance(item, list):
            return _render(view, item, rays)
        composite = None
        for part in item:
            composite = over_by_depth(composite, _render(view, part, rays))
        if composite is None:
            height, width = view.projection.height, view.projection.width
            return torch.zeros((height, width, 4), device=device), torch.full((height, width), math.inf, device=device)
        total, depth = composite
        # over_by_depth gives premultiplied color; a mesh's alpha is 0 or 1, so this is exact.
        alpha = total[..., 3:]
        return torch.cat([torch.where(alpha > 0.0, total[..., :3] / alpha.clamp_min(1e-12), 0.0), alpha], dim=-1), depth

    return SceneContent(count, render)


def srgb_to_linear(value: torch.Tensor) -> torch.Tensor:
    """three.js's `sRGBTransferEOTF`."""
    return torch.where(value <= 0.04045, value * 0.0773993808, (value * 0.9478672986 + 0.0521327014).clamp_min(0.0) ** 2.4)


def linear_to_srgb(value: torch.Tensor) -> torch.Tensor:
    """three.js's `sRGBTransferOETF` (its exponent is 0.41666, not 1 / 2.4)."""
    return torch.where(value <= 0.0031308, value * 12.92, value.clamp_min(0.0) ** 0.41666 * 1.055 - 0.055)


def _upload(item: MeshItem, device) -> MeshItem:
    """The item on `device` as it is drawn: float32, its sRGB maps turned linear, its maps and colors clamped to 0..1
    as the GLB holds them, and its normals and tangents of unit length per vertex as three.js's vertex shader makes
    them. Nothing of `item` is changed."""
    def move(tensor):
        return None if tensor is None else tensor.to(device=device, dtype=torch.float32)

    def texture(tensor, srgb=False):
        tensor = None if tensor is None else move(tensor[..., :3]).clamp(0.0, 1.0)
        return srgb_to_linear(tensor) if srgb and tensor is not None else tensor

    normals = None if item.normals is None else F.normalize(move(item.normals), dim=-1)
    tangents = None
    if item.tangents is not None:
        tangents = move(item.tangents)
        tangents = torch.cat([F.normalize(tangents[:, :3], dim=-1), tangents[:, 3:4]], dim=-1)
    colors = None if item.colors is None else move(item.colors[:, :3]).clamp(0.0, 1.0)
    return MeshItem(move(item.vertices), item.faces.to(device=device, dtype=torch.long), move(item.uvs), colors, texture(item.texture, True), normals,
                    item.unlit, item.material, texture(item.metallic_roughness), texture(item.normal_map), tangents, texture(item.emissive, True),
                    item.occlusion_in_mr)


def _rotate(vectors: torch.Tensor, rotation: torch.Tensor) -> torch.Tensor:
    """`vectors @ rotation` as an elementwise sum, which global precision settings (TF32) do not change."""
    return (vectors[..., :, None] * rotation).sum(-2)


def render_mesh(view: CameraView, item: MeshItem, rays: torch.Tensor | None = None, lights=DEFAULT_LIGHTS):
    """The item seen by `view`: straight-alpha sRGB color (H, W, 4), opaque where a triangle is hit, and the
    distance along the pixel's ray to the nearest hit (H, W), +inf elsewhere. `rays` are `view.rays()` on the item's
    device when the caller keeps them (None: made here). An item that is not `unlit` is lit by `lights`, fixed in
    World (`view.to_world`)."""
    return _render(view, _upload(item, item.vertices.device), rays, lights)


def _render(view: CameraView, item: MeshItem, rays: torch.Tensor | None = None, lights=DEFAULT_LIGHTS):
    """`render_mesh` of an item `_upload` gave."""
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
        bounds.append(bounds_of(_rotate(corners, rotation), projection))
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
    lighting = None if item.unlit else _Lighting(view, rotation, lights, width, height, projection.kind == "erp" and period == width)
    for pixel in torch.nonzero(nearest != torch.iinfo(torch.int64).max)[:, 0].split(SHADE_CHUNK):
        key = nearest[pixel]
        triangle = key & 0xFFFFFFFF
        faces = item.faces[triangle]
        hit = _Hit(planes[triangle], rays, pixel, faces)
        color = _base_color(item, faces, hit.weights)
        if lighting is not None:
            color = _lit(item, lighting, hit, color)
        rgba[pixel, :3] = linear_to_srgb(color).clamp(0.0, 1.0)
        rgba[pixel, 3] = 1.0
        depth[pixel] = (key >> 32).int().view(torch.float32)
    return rgba.reshape(height, width, 4), depth.reshape(height, width)


def _ray_planes(corners: torch.Tensor) -> torch.Tensor:
    """Per triangle, what Moller-Trumbore needs from it for rays from the origin, as (M, 10): for a ray `d`,
    det = d . [0:3], u = d . [3:6] / det, v = d . [6:9] / det, and the distance [9] / det. det > 0 where the ray
    sees the triangle's front (its corners counterclockwise), as a GPU's gl_FrontFacing."""
    v0, v1, v2 = corners.unbind(1)
    e1, e2 = v1 - v0, v2 - v0
    q = torch.linalg.cross(e1, v0)
    return torch.cat([torch.linalg.cross(e2, e1), torch.linalg.cross(v0, e2), q, (e2 * q).sum(-1, keepdim=True)], dim=-1)


def _solve(planes: torch.Tensor, rays: torch.Tensor):
    """det, the barycentric u, v, and the distance of each ray against its triangle's plane, unclamped."""
    det = (planes[:, 0:3] * rays).sum(-1)
    u = (planes[:, 3:6] * rays).sum(-1) / det
    v = (planes[:, 6:9] * rays).sum(-1) / det
    return det, u, v, planes[:, 9] / det


def _intersect(planes: torch.Tensor, rays: torch.Tensor):
    """Distance along each ray to its triangle (not > 0 where it misses) and the barycentric u, v of the hit."""
    _det, u, v, distance = _solve(planes, rays)
    return torch.where((u >= -EDGE) & (v >= -EDGE) & (u + v <= 1.0 + EDGE), distance, -1.0), u, v


def _interp(values: torch.Tensor, faces: torch.Tensor, weights: torch.Tensor) -> torch.Tensor:
    return (values[faces] * weights[..., None]).sum(1)


def _sample(texture: torch.Tensor, uv: torch.Tensor) -> torch.Tensor:
    """A texture (h, w, C) at `uv` (K, 2) as the core's GLB sampler has three.js sample it: uv (0, 0) at the top
    left, texel centers, CLAMP_TO_EDGE, bilinear, no mip levels (docs/render-contract.md, "テクスチャの標本化")."""
    grid = (uv.clamp(0.0, 1.0) * 2.0 - 1.0)[None, None]
    return F.grid_sample(texture.permute(2, 0, 1)[None], grid, mode="bilinear", padding_mode="border", align_corners=False)[0, :, 0].T


def _base_color(item: MeshItem, faces: torch.Tensor, weights: torch.Tensor) -> torch.Tensor:
    """The linear base color at the hits: the texture times the vertex colors times the material's factor."""
    color = None
    if item.texture is not None and item.uvs is not None:
        color = _sample(item.texture, _interp(item.uvs, faces, weights))
    if item.colors is not None:
        colors = _interp(item.colors, faces, weights)
        color = colors if color is None else color * colors
    if item.material is not None:
        factor = torch.tensor(item.material.base_color_factor[:3], dtype=torch.float32, device=faces.device)
        color = factor.expand(faces.shape[0], 3) if color is None else color * factor
    elif color is None:
        color = torch.full((faces.shape[0], 3), BARE_COLOR, device=faces.device)
    return color


class _Hit:
    """The hits of a chunk of pixels: their triangle's ray planes, the pixels' rays, and the barycentric weights, both
    unclamped (`exact`, which a neighbor's extrapolation is compared with) and pulled into the triangle within EDGE
    (`weights`, which values are read at)."""

    def __init__(self, planes, rays, pixel, faces):
        self.planes, self.rays, self.pixel, self.faces = planes, rays, pixel, faces
        self.ray = rays[pixel]
        self.det, u, v, self.distance = _solve(planes, self.ray)
        self.exact = torch.stack([1.0 - u - v, u, v], dim=-1)
        weights = self.exact.clamp_min(0.0)
        self.weights = weights / weights.sum(-1, keepdim=True)

    def at(self, pixel):
        """Barycentric weights, distance, and rays of other pixels against the same triangles' planes, extrapolated
        outside them as a GPU's helper invocation evaluates its quad's attributes."""
        rays = self.rays[pixel]
        _det, u, v, distance = _solve(self.planes, rays)
        return torch.stack([1.0 - u - v, u, v], dim=-1), distance, rays


class _Lighting:
    """What lighting a render needs once: the lights in the Camera's axes (right, up, back), the Camera's axes in
    the content's frame, and how output pixels pair into 2x2 quads for screen derivatives."""

    def __init__(self, view: CameraView, rotation: torch.Tensor, lights, width: int, height: int, wrap: bool):
        device = rotation.device
        camera = view.rotation if view.to_world is None else np.asarray(view.to_world) @ view.rotation
        directions, colors, ambient = [], [], np.zeros(3)
        for light in lights:
            color = np.asarray(light.color, dtype=np.float64) * light.intensity
            if light.type == "ambient":
                ambient += color
                continue
            # From the light's position toward its target, the World origin, in the Camera's axes.
            direction = np.asarray(light.position, dtype=np.float64)
            directions.append(camera.T @ (direction / np.linalg.norm(direction)))
            colors.append(color)
        self.directions = torch.tensor(np.asarray(directions).reshape(-1, 3), dtype=torch.float32, device=device)
        self.colors = torch.tensor(np.asarray(colors).reshape(-1, 3), dtype=torch.float32, device=device)
        self.ambient = torch.tensor(ambient, dtype=torch.float32, device=device)
        self.rotation = rotation
        self.width, self.height, self.wrap = width, height, wrap

    def camera(self, vectors: torch.Tensor) -> torch.Tensor:
        """Directions of the content's frame in the Camera's axes (three.js's view space)."""
        return _rotate(vectors, self.rotation)

    def partners(self, pixel: torch.Tensor):
        """The other pixel of each pixel's 2x2 quad along each output axis and the sign that turns `partner - self`
        into the derivative (`docs/render-contract.md`, "画面の微分"): dFdx is the right pixel's value minus the left
        one's; dFdy the upper one's minus the lower one's, quads paired in window rows counted from the bottom, as GL
        does. Past the image edge the partner is the neighbor on the other side (an ERP of 360 wraps the columns)."""
        width, height = self.width, self.height
        row, column = pixel // width, pixel % width
        across = column ^ 1
        right = across > column
        outside = across >= width
        if self.wrap:
            across = torch.where(outside, across - width, across)
        else:
            across = torch.where(outside, column - 1, across)
            right = right & ~outside
        window = height - 1 - row
        other = window ^ 1
        other = torch.where(other >= height, window - 1, other)
        partner_row = height - 1 - other
        one = torch.ones_like(row, dtype=torch.float32)
        return (row * width + across, torch.where(right, one, -one)), (partner_row * width + column, torch.where(partner_row < row, one, -one))

    def derivatives(self, hit: _Hit, value_at, value):
        """dFdx and dFdy (K, C) of `value_at(weights, distance, rays)`, whose value at the pixel is `value`: each
        partner's ray is met with the same triangle's plane. Where it runs parallel to the plane, the derivative is 0."""
        result = []
        for partner, sign in self.partners(hit.pixel):
            difference = (value_at(*hit.at(partner)) - value) * sign[:, None]
            result.append(torch.where(torch.isfinite(difference), difference, 0.0))
        return result


def _lit(item: MeshItem, lighting: _Lighting, hit: _Hit, base: torch.Tensor) -> torch.Tensor:
    """The linear color of three.js r184's MeshStandardMaterial (double-sided) under `lighting` at the hits:
    its normal (`normal_fragment_begin`, `normal_fragment_maps`), `geometryRoughness`, maps, and `shade_standard`."""
    faces = hit.faces
    # gl_FrontFacing: a double-sided material turns the normal toward the side seen.
    facing = torch.where(hit.det > 0.0, 1.0, -1.0)[:, None]
    view_dir = -lighting.camera(hit.ray)
    flat = item.normals is None
    if flat:
        # Without normals three.js shades flat: the face's normal, toward the Camera; its derivatives are 0.
        corners = item.vertices[faces]
        normal = F.normalize(lighting.camera(torch.linalg.cross(corners[:, 1] - corners[:, 0], corners[:, 2] - corners[:, 0])), dim=-1) * facing
        geometry_roughness = torch.zeros((faces.shape[0], 1), device=base.device)
    else:
        def normal_at(weights, _distance=None, _rays=None):
            return F.normalize(lighting.camera(_interp(item.normals, faces, weights)), dim=-1) * facing

        normal = normal_at(hit.weights)
        dx, dy = lighting.derivatives(hit, normal_at, normal_at(hit.exact))
        geometry_roughness = torch.maximum(dx.abs(), dy.abs()).amax(-1, keepdim=True)
    material = item.material or MeshMaterial()
    uv = None if item.uvs is None else _interp(item.uvs, faces, hit.weights)
    if item.normal_map is not None and uv is not None:
        normal = _mapped_normal(item, lighting, hit, uv, normal, facing, flat, material.normal_scale)
    metalness = torch.full_like(geometry_roughness, material.metallic_factor)
    roughness = torch.full_like(geometry_roughness, material.roughness_factor)
    occlusion = None
    if item.metallic_roughness is not None and uv is not None:
        texel = _sample(item.metallic_roughness, uv)
        roughness = roughness * texel[:, 1:2]
        metalness = metalness * texel[:, 2:3]
        if item.occlusion_in_mr:
            occlusion = (texel[:, 0:1] - 1.0) * material.occlusion_strength + 1.0
    emissive = torch.tensor(material.emissive_factor, dtype=torch.float32, device=base.device) * material.emissive_strength
    if item.emissive is not None and uv is not None:
        emissive = emissive * _sample(item.emissive, uv)
    return shade_standard(base, metalness, roughness, normal, view_dir, lighting.directions, lighting.colors, lighting.ambient,
                          geometry_roughness, occlusion, emissive)


def _mapped_normal(item: MeshItem, lighting: _Lighting, hit: _Hit, uv, normal, facing, flat: bool, scale: float):
    """`normal_fragment_maps` for a tangent-space normal map: the tangent frame from the vertex tangents when the item
    has them (with normals), else from the screen derivatives of the position and uv (`getTangentFrame`, with the
    y scale turned over as GLTFLoader does then)."""
    faces = hit.faces
    if item.tangents is not None and item.normals is not None:
        tangents = item.tangents[faces]
        # The vertex shader's vBitangent: cross(normal, tangent) * w per vertex, then interpolated.
        bitangents = F.normalize(torch.linalg.cross(item.normals[faces], tangents[..., :3]) * tangents[..., 3:4], dim=-1)
        tangent = F.normalize(lighting.camera((tangents[..., :3] * hit.weights[..., None]).sum(1)), dim=-1)
        bitangent = F.normalize(lighting.camera((bitangents * hit.weights[..., None]).sum(1)), dim=-1)
        scale_y = scale
    else:
        def position_uv(weights, distance, rays):
            return torch.cat([lighting.camera(rays * distance[:, None]), _interp(item.uvs, faces, weights)], dim=-1)

        exact = torch.cat([lighting.camera(hit.ray * hit.distance[:, None]), _interp(item.uvs, faces, hit.exact)], dim=-1)
        dx, dy = lighting.derivatives(hit, position_uv, exact)
        q0, q1, st0, st1 = dx[:, :3], dy[:, :3], dx[:, 3:], dy[:, 3:]
        q1perp = torch.linalg.cross(q1, normal)
        q0perp = torch.linalg.cross(normal, q0)
        tangent = q1perp * st0[:, :1] + q0perp * st1[:, :1]
        bitangent = q1perp * st0[:, 1:] + q0perp * st1[:, 1:]
        det = torch.maximum((tangent * tangent).sum(-1, keepdim=True), (bitangent * bitangent).sum(-1, keepdim=True))
        inverse = torch.where(det == 0.0, 0.0, det.clamp_min(1e-30).rsqrt())
        tangent, bitangent = tangent * inverse, bitangent * inverse
        scale_y = -scale
    if not flat:
        tangent, bitangent = tangent * facing, bitangent * facing
    mapped = _sample(item.normal_map, uv) * 2.0 - 1.0
    return F.normalize(tangent * (mapped[:, 0:1] * scale) + bitangent * (mapped[:, 1:2] * scale_y) + normal * mapped[:, 2:3], dim=-1)


_DFG_LUTS = {}


def _dfg_lut(device) -> torch.Tensor:
    """three.js r184's DFG table (16, 16, 2) on `device`, row 0 at t = 0."""
    lut = _DFG_LUTS.get(str(device))
    if lut is None:
        halves = np.asarray(DFG_LUT_HALVES, dtype=np.uint16).view(np.float16).astype(np.float32)
        lut = _DFG_LUTS[str(device)] = torch.tensor(halves.reshape(DFG_LUT_SIZE, DFG_LUT_SIZE, 2), device=device)
    return lut


def _sample_dfg(lut: torch.Tensor, s: torch.Tensor, t: torch.Tensor) -> torch.Tensor:
    """`texture2D(dfgLUT, vec2(s, t)).rg`: LINEAR, CLAMP_TO_EDGE."""
    size = DFG_LUT_SIZE
    x = (s * size - 0.5).clamp(0.0, size - 1.0)
    y = (t * size - 0.5).clamp(0.0, size - 1.0)
    x0, y0 = x.floor().long().clamp_max(size - 2), y.floor().long().clamp_max(size - 2)
    fx, fy = (x - x0)[:, None], (y - y0)[:, None]
    top = lut[y0, x0] * (1.0 - fx) + lut[y0, x0 + 1] * fx
    bottom = lut[y0 + 1, x0] * (1.0 - fx) + lut[y0 + 1, x0 + 1] * fx
    return top * (1.0 - fy) + bottom * fy


def _dot(a: torch.Tensor, b: torch.Tensor) -> torch.Tensor:
    return (a * b).sum(-1, keepdim=True)


def shade_standard(base, metalness, roughness, normal, view, directions, colors, ambient, geometry_roughness=None, occlusion=None, emissive=None):
    """The linear color (K, 3) of three.js r184's MeshStandardMaterial lit by directional lights and an ambient light
    (`meshphysical.glsl.js`): for each light `RE_Direct_Physical` (BRDF_GGX_Multiscatter and Lambert), the ambient
    light's `RE_IndirectDiffuse_Physical` times `occlusion`, and `emissive`. Without an environment map the indirect
    specular is 0. `base` (K, 3) is the linear diffuse color; `metalness` and `roughness` (K, 1) the material's
    values before the roughness is bounded and `geometry_roughness` (K, 1) added; `normal` and `view` (K, 3, unit)
    point out of the surface and toward the Camera; `directions` (L, 3, unit) toward each light with its `colors`
    (L, 3, intensity included) in the same frame; `ambient` (3,); `occlusion` (K, 1) and `emissive` (K or 1, 3)."""
    roughness = roughness.clamp_min(ROUGHNESS_MIN)
    if geometry_roughness is not None:
        roughness = roughness + geometry_roughness
    roughness = roughness.clamp_max(1.0)
    diffuse = base * (1.0 - metalness)
    specular = 0.04 * (1.0 - metalness) + base * metalness
    lut = _dfg_lut(base.device)
    dot_nv = _dot(normal, view).clamp(0.0, 1.0)
    dfg_v = _sample_dfg(lut, roughness[:, 0], dot_nv[:, 0])
    energy_v = specular * dfg_v[:, :1] + dfg_v[:, 1:]
    lost_v = 1.0 - (dfg_v[:, :1] + dfg_v[:, 1:])
    average = specular + (1.0 - specular) * 0.047619
    alpha = roughness * roughness
    a2 = alpha * alpha
    color = torch.zeros_like(base)
    for direction, light in zip(directions, colors):
        dot_nl = _dot(normal, direction).clamp(0.0, 1.0)
        irradiance = dot_nl * light
        half = F.normalize(direction + view, dim=-1)
        dot_nh = _dot(normal, half).clamp(0.0, 1.0)
        dot_vh = _dot(view, half).clamp(0.0, 1.0)
        fresnel = torch.exp2((-5.55473 * dot_vh - 6.98316) * dot_vh)
        f = specular * (1.0 - fresnel) + fresnel
        gv = dot_nl * torch.sqrt(a2 + (1.0 - a2) * dot_nv * dot_nv)
        gl = dot_nv * torch.sqrt(a2 + (1.0 - a2) * dot_nl * dot_nl)
        visibility = 0.5 / (gv + gl).clamp_min(EPSILON)
        denominator = dot_nh * dot_nh * (a2 - 1.0) + 1.0
        distribution = RECIPROCAL_PI * a2 / (denominator * denominator)
        dfg_l = _sample_dfg(lut, roughness[:, 0], dot_nl[:, 0])
        energy_l = specular * dfg_l[:, :1] + dfg_l[:, 1:]
        lost_l = 1.0 - (dfg_l[:, :1] + dfg_l[:, 1:])
        multiple = energy_v * energy_l * average / (1.0 - lost_v * lost_l * average + EPSILON) * (lost_v * lost_l)
        color = color + irradiance * (f * (visibility * distribution) + multiple) + irradiance * diffuse * RECIPROCAL_PI
    indirect = ambient * diffuse * RECIPROCAL_PI
    if occlusion is not None:
        indirect = indirect * occlusion
    color = color + indirect
    return color if emissive is None else color + emissive


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
