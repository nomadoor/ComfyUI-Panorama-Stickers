"""The MESH, mesh 3D files, and MOGE_GEOMETRY on the `scene` input as World content drawn by
`core/mesh_render.py`, in the same glTF frame as their editor files (`scene_files.py`)."""
from comfy_api.latest import Types
from comfy_extras.nodes_mesh_io import Get3DComponents
from comfy_extras.nodes_save_3d import get_mesh_batch_item

from .core.mesh_render import MeshItem, mesh_content
from .scene_files import moge_grid_mesh

# The formats of the mesh file types the `scene` input takes; the core reads all but FBX and USDZ, which fail there.
MESH_FILE_FORMATS = ("glb", "gltf", "obj", "stl", "fbx", "usdz")


def is_mesh_file(scene) -> bool:
    return isinstance(scene, Types.File3D) and scene.format in MESH_FILE_FORMATS


def read_mesh_file(file: Types.File3D) -> Types.MESH:
    """A mesh 3D file as the one-item MESH the core reads from it (Get3DComponents)."""
    return Get3DComponents.execute(file).result[0]


def mesh_scene_content(mesh: Types.MESH):
    def item_at(index):
        vertices, faces, colors, uvs, _normals = get_mesh_batch_item(mesh, index)
        return MeshItem(vertices, faces, uvs, colors, None if mesh.texture is None else mesh.texture[index])

    return mesh_content(mesh.vertices.shape[0], item_at)


def moge_scene_content(geometry: dict):
    """Each frame as its full grid mesh (`moge_grid_mesh`) textured with its `image`."""
    def item_at(index):
        vertices, faces, uvs = moge_grid_mesh(geometry, index)
        return MeshItem(vertices, faces, uvs, texture=geometry["image"][index])

    return mesh_content(geometry["points"].shape[0], item_at)
