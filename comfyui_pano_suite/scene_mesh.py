"""The MESH, mesh 3D files, and MOGE_GEOMETRY on the `scene` input as World content drawn by
`core/mesh_render.py`, in the same glTF frame as their editor files (`scene_files.py`).

A MESH item is drawn as three.js draws its editor GLB, which the core's `save_glb` writes: what that GLB carries
(its maps, its material) is read here from the MESH in the same way (`mesh_material`), and a MESH is lit unless the
core marks it `unlit` (docs/render-contract.md, "光が効く要素", "材質")."""
import logging
from dataclasses import replace

import torch
from comfy_api.latest import Types

from .core.cache import CACHE
from .core.mesh_render import BARE_COLOR, MeshItem, MeshMaterial, mesh_content
from .core_adapters import DA3GeometryToMesh, Get3DComponents, _da3_build_mask, _da3_default_K, _da3_get_K, _da3_unproject, depth_map_edge, depth_map_to_point_map, get_mesh_batch_item
from .node_runtime import NodeRuntime
from .scene_files import moge_grid_mesh

_log = logging.getLogger(__name__)

# The formats of the mesh file types the `scene` input takes; the core reads all but FBX and USDZ, which fail there.
MESH_FILE_FORMATS = ("glb", "gltf", "obj", "stl", "fbx", "usdz")


def is_mesh_file(scene) -> bool:
    return isinstance(scene, Types.File3D) and scene.format in MESH_FILE_FORMATS


def read_mesh_file(file: Types.File3D) -> Types.MESH:
    """A mesh 3D file as the one-item MESH the core reads from it (Get3DComponents)."""
    return Get3DComponents.execute(file).result[0]


def is_unlit(value) -> bool | None:
    """Whether the 3D media's items are drawn without lights: a MESH by the core's mark, MOGE_GEOMETRY and
    DA3_GEOMETRY always; None for a SPLAT, which is never lit."""
    if isinstance(value, Types.SPLAT):
        return None
    if isinstance(value, Types.MESH):
        return bool(value.unlit)
    return True


def _has(tensor) -> bool:
    return tensor is not None and tensor.shape[0] > 0


def mesh_material(mesh: Types.MESH, index: int) -> MeshMaterial:
    """The material of item `index` as the core's `save_glb` writes it to the item's GLB (`comfy_extras/
    nodes_save_3d.py`) and three.js's GLTFLoader reads it: the factors it picks for bare, colored, and textured
    items, the MESH's `material` overrides, and the KHR_materials_unlit material of an unlit item without a texture."""
    _vertices, _faces, colors, uvs, _normals = get_mesh_batch_item(mesh, index)
    has_uv = _has(uvs)
    if mesh.unlit and mesh.texture is None:
        return MeshMaterial((1.0, 1.0, 1.0), 0.0, 1.0)
    painted = (mesh.texture is not None and has_uv) or _has(colors)
    base, metallic, roughness = ((1.0, 1.0, 1.0), 0.0, 1.0) if painted else ((BARE_COLOR,) * 3, 0.0, 0.5)
    mapped = mesh.metallic_roughness is not None and has_uv
    if mapped:
        metallic = roughness = 1.0
    overrides = mesh.material if isinstance(mesh.material, dict) else {}
    if overrides.get("base_color_factor") is not None:
        base = tuple(float(value) for value in overrides["base_color_factor"][:3])
    if overrides.get("metallic_factor", -1.0) >= 0.0:
        metallic = float(overrides["metallic_factor"])
    if overrides.get("roughness_factor", -1.0) >= 0.0:
        roughness = float(overrides["roughness_factor"])
    emissive = [float(value) for value in overrides.get("emissive_factor", [0.0, 0.0, 0.0])]
    glowing = mesh.emissive is not None and has_uv
    if glowing and not any(value > 0.0 for value in emissive):
        emissive = [1.0, 1.0, 1.0]
    emissive = tuple(min(1.0, value) for value in emissive) if glowing or any(value > 0.0 for value in emissive) else (0.0, 0.0, 0.0)
    normal_scale = float(overrides.get("normal_scale", 1.0)) if mesh.normal_map is not None and has_uv else 1.0
    occlusion_strength = float(overrides.get("occlusion_strength", 1.0)) if mesh.occlusion_in_mr and mapped else 1.0
    return MeshMaterial(base, metallic, roughness, emissive, float(overrides.get("emissive_strength", 1.0)), normal_scale, occlusion_strength)


def mesh_item(mesh: Types.MESH, index: int) -> MeshItem:
    """Item `index` of a MESH as its GLB draws: its maps only where the GLB has them (a texture coordinate for each,
    and none on the unlit material), lit unless the MESH is `unlit`."""
    vertices, faces, colors, uvs, normals = get_mesh_batch_item(mesh, index)
    colors = colors if _has(colors) else None
    uvs = uvs if _has(uvs) else None
    material = mesh_material(mesh, index)
    if mesh.unlit and mesh.texture is None:
        return MeshItem(vertices, faces, uvs, colors, None, normals, True, material)

    def image(name):
        tensor = getattr(mesh, name, None)
        return None if tensor is None or uvs is None else tensor[index]

    tangents = None if mesh.tangents is None else mesh.tangents[index, :vertices.shape[0]]
    metallic_roughness = image("metallic_roughness")
    return MeshItem(vertices, faces, uvs, colors, image("texture"), normals, bool(mesh.unlit), material, metallic_roughness, image("normal_map"),
                    tangents, image("emissive"), bool(mesh.occlusion_in_mr) and metallic_roughness is not None)


def mesh_scene_content(mesh: Types.MESH):
    return mesh_content(mesh.vertices.shape[0], lambda index: mesh_item(mesh, index))


def moge_scene_content(geometry: dict):
    """Each frame as its full grid mesh (`moge_grid_mesh`) textured with its `image`, never lit."""
    def item_at(index):
        vertices, faces, uvs = moge_grid_mesh(geometry, index)
        return MeshItem(vertices, faces, uvs, texture=geometry["image"][index], unlit=True)

    return mesh_content(geometry["points"].shape[0], item_at)


# DA3_GEOMETRY (the core's Run Depth Anything 3 output; docs/render-contract.md, "`DA3_GEOMETRY` のメッシュ").
# A dict with `points` is MOGE_GEOMETRY, one with `mode` DA3_GEOMETRY.

# How the core's converter starts the error of a frame whose pixels were all dropped: such a frame is empty.
DA3_EMPTY_MESH = "DA3GeometryToMesh produced an empty mesh."
# Convert DA3 Geometry to Mesh's defaults after `batch_index`: decimation, discontinuity_threshold,
# confidence_threshold, use_sky_mask, texture.
DA3_MESH_DEFAULTS = (1, 0.04, 0.1, True, True)
# The tensors of a DA3_GEOMETRY that its meshes are made from, which key what is made from it.
DA3_KEYS = ("depth", "image", "sky", "confidence", "intrinsics", "extrinsics")


def is_moge(value) -> bool:
    return isinstance(value, dict) and "points" in value


def is_da3(value) -> bool:
    return isinstance(value, dict) and "mode" in value and "points" not in value


def is_multiview(geometry: dict) -> bool:
    return geometry["mode"] == "multiview"


def da3_count(geometry: dict) -> int:
    """The items of a DA3_GEOMETRY: one per frame of `depth` (mono), or one still item of all views (multiview)."""
    return 1 if is_multiview(geometry) else geometry["depth"].shape[0]


def da3_key(geometry: dict) -> tuple:
    """What identifies a DA3_GEOMETRY for what is made from it: its mode and the tensors it is made from (not the
    `intrinsics` that `_with_default_k` adds)."""
    return (geometry["mode"], *((key, NodeRuntime.tensor_identity(geometry[key])) for key in DA3_KEYS if key in geometry))


def needs_default_k(geometry: dict) -> bool:
    """Whether a DA3_GEOMETRY is drawn with the core's default K (a mono one without `intrinsics`)."""
    return not is_multiview(geometry) and "intrinsics" not in geometry


def check_da3(geometry: dict):
    """Refuse a multiview DA3_GEOMETRY of a model that gave no poses (the core then fills every view's `intrinsics`
    with the identity, which flattens its meshes), and a mono one with `extrinsics` (the editor's depth grid does
    not apply them, so it would differ from the output)."""
    if not is_multiview(geometry) and "extrinsics" in geometry:
        raise ValueError("Panorama Stickers: this DA3_GEOMETRY is mono but has extrinsics; a mono DA3_GEOMETRY has none. "
                         "Connect the mono output of Run Depth Anything 3 as it is.")
    if is_multiview(geometry) and "intrinsics" in geometry:
        intrinsics = geometry["intrinsics"].float()
        if bool((intrinsics == torch.eye(3, device=intrinsics.device)).all()):
            raise ValueError("Panorama Stickers: this DA3_GEOMETRY is multiview without camera poses (every view's intrinsics is the "
                             "identity, as the core fills it when the model gives no poses). The model does not estimate multiview poses; "
                             "run Depth Anything 3 in mono mode instead.")


def _with_default_k(geometry: dict) -> dict:
    """A mono DA3_GEOMETRY without `intrinsics` as a shallow copy with the core's default K (`_da3_default_K`) for
    every frame, so that the core's converter reads it instead of warning for each frame. The input is not changed."""
    if not needs_default_k(geometry):
        return geometry
    count, height, width = geometry["depth"].shape
    return {**geometry, "intrinsics": _da3_default_K(height, width)[None, None].expand(1, count, 3, 3)}


def _da3_mesh(geometry: dict, index: int) -> Types.MESH | None:
    """Frame or view `index` as the core's Convert DA3 Geometry to Mesh makes it with its defaults, or None when it
    is empty: the core's empty-mesh error, or a MESH without faces. Other errors are raised."""
    try:
        mesh = DA3GeometryToMesh.execute(_with_default_k(geometry), index, *DA3_MESH_DEFAULTS).result[0]
    except ValueError as error:
        if str(error).startswith(DA3_EMPTY_MESH):
            return None
        raise
    return None if mesh.faces.shape[1] == 0 else mesh


def da3_meshes(geometry: dict, index: int) -> list:
    """The MESHes of item `index` of a DA3_GEOMETRY: its frame's (mono), or every view's (multiview), without the
    empty ones. Made once per input and item and shared by drawing, the editor files, and the content box."""
    def make():
        indices = range(geometry["depth"].shape[0]) if is_multiview(geometry) else [index]
        return [mesh for mesh in (_da3_mesh(geometry, view) for view in indices) if mesh is not None]

    return CACHE.get_or_put("da3_meshes", (da3_key(geometry), index), make)


def _da3_item(mesh: Types.MESH) -> MeshItem:
    return replace(mesh_item(mesh, 0), unlit=True)


def da3_scene_content(geometry: dict):
    """Each item as its meshes (`da3_meshes`): a mono frame's, or a multiview's views drawn each and folded by depth.
    Never lit: the colors are the photos'."""
    return mesh_content(da3_count(geometry), lambda index: [_da3_item(mesh) for mesh in da3_meshes(geometry, index)])


def da3_device_bytes(geometry: dict) -> int:
    """At most the bytes the meshes of a DA3_GEOMETRY take on the device while one item is drawn, from its shape (no
    conversion): a full grid per view, float32 vertices, uvs and linear texture, int64 faces; one frame for mono,
    every view for multiview."""
    count, height, width = geometry["depth"].shape
    grid = height * width * (3 + 2 + 3) * 4 + (height - 1) * (width - 1) * 2 * 3 * 8
    return grid * (count if is_multiview(geometry) else 1)


# The mono depth grid (ADR 0039; docs/render-contract.md, "mono の残す画素"): which pixels the core's converter keeps as
# vertices, composed from the core's parts in its order, without converting.

def da3_keep(geometry: dict, index: int) -> torch.Tensor:
    """The pixels (H, W, bool) of mono frame `index` that the core's converter keeps as vertices, with its defaults
    (DA3_MESH_DEFAULTS): its mask (`_da3_build_mask`, depth > 0 and finite), less the depth discontinuities
    (`depth_map_edge` of the masked depth). Only the order of the core's parts is held here."""
    _decimation, discontinuity, confidence, sky, _texture = DA3_MESH_DEFAULTS
    depth = geometry["depth"][index].detach().cpu()
    height, width = depth.shape
    mask = _da3_build_mask(geometry, index, height, width, confidence, sky) & (depth > 0) & torch.isfinite(depth)
    edge = depth_map_edge(torch.where(mask, depth, torch.zeros_like(depth)), rtol=discontinuity)
    return mask & ~edge


def keep_is_empty(keep: torch.Tensor) -> bool:
    """Whether a frame has no quad of 4 kept corners: the frames the core's converter calls empty (DA3_EMPTY_MESH)."""
    return not bool((keep[:-1, :-1] & keep[:-1, 1:] & keep[1:, 1:] & keep[1:, :-1]).any())


def da3_k(geometry: dict, index: int) -> torch.Tensor:
    """The K (3, 3) the core converts mono frame `index` with: its `intrinsics`, or the core's default K."""
    height, width = geometry["depth"].shape[1:]
    return _da3_get_K(_with_default_k(geometry), index, height, width).float()


def da3_points(geometry: dict, index: int, keep: torch.Tensor) -> torch.Tensor:
    """The glTF points (N, 3) of the kept pixels of mono frame `index`, in row order: the core's unprojection
    (`_da3_unproject`, its non-finite depth zeroed as the converter does), turned from OpenCV to glTF."""
    depth = geometry["depth"][index].detach().cpu()
    depth = torch.where(torch.isfinite(depth), depth, torch.zeros_like(depth))
    points = _da3_unproject(depth, da3_k(geometry, index)).reshape(-1, 3)[keep.reshape(-1)]
    return points * torch.tensor([1.0, -1.0, -1.0], dtype=points.dtype)


# MOGE_GEOMETRY (docs/render-contract.md, "MoGe の残す画素"): the pixels its grid keeps, composed from the parts of the
# core's `triangulate_grid_mesh` in its order, and its axes in glTF.

# The core's discontinuity threshold of MoGePointMapToMesh, which `moge_grid_mesh` keeps.
MOGE_DISCONTINUITY = 0.04


def moge_keep(geometry: dict, index: int) -> torch.Tensor:
    """The pixels (H, W, bool) of frame `index` that the core's `triangulate_grid_mesh` keeps as vertices, as
    `moge_grid_mesh` has called it: finite points inside `mask` (when present), less the discontinuities of the
    edge-check depth (z for a perspective frame, the distance for a panorama) with the non-finite points at 0."""
    points = geometry["points"][index]
    # A panorama's distance is taken where the points are, before they come to the CPU, as `moge_grid_mesh` always did.
    depth = None if "intrinsics" in geometry else points.norm(dim=-1).detach().cpu()
    points = points.detach().cpu()
    finite = torch.isfinite(points).all(dim=-1)
    mask = finite if "mask" not in geometry else geometry["mask"][index].detach().cpu().to(torch.bool) & finite
    depth = points[..., 2] if depth is None else depth
    edge = depth_map_edge(torch.where(finite, depth, torch.zeros_like(depth)), rtol=MOGE_DISCONTINUITY)
    return mask & ~edge


def moge_to_gltf(geometry: dict, vertices: torch.Tensor, faces: torch.Tensor | None = None):
    """MoGe's points (N, 3) in glTF, and the faces turned to match: a panorama from MoGe's Z up (axes [1, 2, 0]), a
    perspective frame from OpenCV ((X, -Y, -Z), faces turned over), as the core's MoGePointMapToMesh does."""
    if "intrinsics" not in geometry:
        return vertices[:, [1, 2, 0]].contiguous(), faces
    vertices = vertices * vertices.new_tensor([1.0, -1.0, -1.0])
    return vertices, None if faces is None else faces[:, [0, 2, 1]].contiguous()


def moge_points(geometry: dict, index: int, keep: torch.Tensor) -> torch.Tensor:
    """The glTF points (N, 3) of the kept pixels of frame `index`, in row order: `moge_grid_mesh`'s vertices without
    making the mesh."""
    return moge_to_gltf(geometry, geometry["points"][index].detach().cpu()[keep])[0]


def moge_pixel_k(intrinsics: torch.Tensor, height: int, width: int) -> torch.Tensor:
    """MoGe's normalized K (x 0..1 across, a pixel's center at (x + 0.5) / W) as the K of pixel numbers, so that
    K⁻¹ (x, y, 1) at the integer pixel is the direction the core's `depth_map_to_point_map` takes:
    [[W fx, 0, W cx - 0.5], [0, H fy, H cy - 0.5], [0, 0, 1]]."""
    to_pixels = torch.tensor([[float(width), 0.0, -0.5], [0.0, float(height), -0.5], [0.0, 0.0, 1.0]], dtype=torch.float64)
    return (to_pixels @ intrinsics.detach().cpu().double()).float()


# How far a kept point may lie from the core's unprojection of its z, relative to its distance (`moge_is_pinhole`).
MOGE_PINHOLE_RTOL = 1e-4


def moge_is_pinhole(geometry: dict) -> tuple[bool, int | None, int]:
    """Whether every kept point of a perspective MOGE_GEOMETRY is the core's unprojection of its own z
    (`depth_map_to_point_map`, as MoGeInference remakes them with `force_projection`) with z > 0, compared by the
    norm (|p - p̂| <= 1e-4 |p|, so that points on the optical axis do not blow up a per-component ratio). Returns
    whether, the first frame that is not, and how many of its kept points are not."""
    for index in range(geometry["points"].shape[0]):
        keep = moge_keep(geometry, index)
        points = geometry["points"][index].detach().cpu().float()
        depth = points[..., 2]
        remade = depth_map_to_point_map(torch.where(torch.isfinite(depth), depth, torch.zeros_like(depth)), geometry["intrinsics"][index].detach().cpu().float())
        # |p - p̂| <= rtol |p|, squared and summed per axis (a norm over a 3-long, strided axis is slow on the CPU).
        x, y, z = points.unbind(-1)
        dx, dy, dz = (points - remade).unbind(-1)
        close = dx * dx + dy * dy + dz * dz <= MOGE_PINHOLE_RTOL ** 2 * (x * x + y * y + z * z)
        good = torch.isfinite(depth) & (depth > 0) & close
        bad = int((keep & ~good).sum())
        if bad:
            return False, index, bad
    return True, None, 0


def moge_key(geometry: dict) -> tuple:
    """What identifies a MOGE_GEOMETRY for what is made from it: the tensors its grid is made from."""
    return tuple((key, NodeRuntime.tensor_identity(geometry[key])) for key in ("points", "mask", "image", "intrinsics") if key in geometry)


def moge_uses_depth_grid(geometry: dict) -> tuple[bool, str | None]:
    """Whether a MOGE_GEOMETRY goes to the editor as a depth grid (ADR 0040): a perspective sequence (`intrinsics`,
    two frames or more) whose kept points are all pinhole (`moge_is_pinhole`); else why it stays GLB. Checked once
    per input (the shared cache)."""
    def decide():
        if "intrinsics" not in geometry:
            return False, "it has no intrinsics (a panorama)"
        if geometry["points"].shape[0] < 2:
            return False, "it has one frame"
        pinhole, frame, count = moge_is_pinhole(geometry)
        if not pinhole:
            return False, (f"its points are not the pinhole unprojection of their depth (frame {frame}: {count} kept points differ), "
                           "as when force_projection is off or the points were edited after inference")
        return True, None

    return CACHE.get_or_put("moge_depth_grid", moge_key(geometry), decide)


def depth_grid_intrinsics(geometry: dict) -> list:
    """Each frame's K of pixel numbers (row order) for the depth grid's meta: DA3 mono's as the core converts it,
    MoGe's normalized K turned into pixel numbers (`moge_pixel_k`)."""
    if is_moge(geometry):
        count, height, width = geometry["points"].shape[:3]
        return [moge_pixel_k(geometry["intrinsics"][index], height, width).reshape(-1).tolist() for index in range(count)]
    return [da3_k(geometry, index).reshape(-1).tolist() for index in range(geometry["depth"].shape[0])]
