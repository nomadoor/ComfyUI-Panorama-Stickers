"""The MESH, mesh 3D files, and MOGE_GEOMETRY on the `scene` input as World content drawn by
`core/mesh_render.py`, in the same glTF frame as their editor files (`scene_files.py`).

A MESH item is drawn as three.js draws its editor GLB, which the core's `save_glb` writes: what that GLB carries
(its maps, its material) is read here from the MESH in the same way (`mesh_material`), and a MESH is lit unless the
core marks it `unlit` (docs/render-contract.md, "光が効く要素", "材質")."""
from comfy_api.latest import Types

from .core.mesh_render import BARE_COLOR, MeshItem, MeshMaterial, mesh_content
from .core_adapters import Get3DComponents, get_mesh_batch_item
from .scene_files import moge_grid_mesh

# The formats of the mesh file types the `scene` input takes; the core reads all but FBX and USDZ, which fail there.
MESH_FILE_FORMATS = ("glb", "gltf", "obj", "stl", "fbx", "usdz")


def is_mesh_file(scene) -> bool:
    return isinstance(scene, Types.File3D) and scene.format in MESH_FILE_FORMATS


def read_mesh_file(file: Types.File3D) -> Types.MESH:
    """A mesh 3D file as the one-item MESH the core reads from it (Get3DComponents)."""
    return Get3DComponents.execute(file).result[0]


def is_unlit(value) -> bool | None:
    """Whether the 3D media's items are drawn without lights: a MESH by the core's mark, MOGE_GEOMETRY always; None
    for a SPLAT, which is never lit."""
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
