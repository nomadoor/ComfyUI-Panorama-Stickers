"""Files the editor (three.js and Spark) loads for the `scene` input: one temp file per item, a PLY for a SPLAT
and a GLB for a MESH or a frame of `MOGE_GEOMETRY`, in the item's own glTF frame (World before the `scene`
transform, ADR 0023). They are written with the core's writers and do not depend on the rasterizers."""
import math
import uuid
from pathlib import Path

from PIL import Image
from comfy.ldm.moge.geometry import triangulate_grid_mesh
from comfy_api.latest import Types
from comfy_extras.nodes_gaussian_splat import SplatToFile3D
from comfy_extras.nodes_save_3d import mesh_item_to_glb_bytes, save_glb

from .core.video import temp_file_path

# A MoGe frame is thinned to at most this many grid points along its longer side; the editor only previews it,
# and a video writes one GLB per frame.
MOGE_EDITOR_GRID = 512


def moge_grid_mesh(geometry: dict, index: int, decimation: int = 1):
    """Frame `index` of a MOGE_GEOMETRY as a grid mesh (vertices, faces, uvs) in glTF, as the core's
    MoGePointMapToMesh converts it: a panorama (no `intrinsics`) from MoGe's Z up, a perspective frame from
    OpenCV. Reads `points`, `mask` when present, and whether there are `intrinsics`; pixels outside the mask
    are dropped."""
    points = geometry["points"][index]
    mask = geometry["mask"][index] if "mask" in geometry else None
    if "intrinsics" not in geometry:
        # Radial depth for the edge check, as the core passes it for panoramas.
        vertices, faces, uvs = triangulate_grid_mesh(points, mask, decimation, depth=points.norm(dim=-1))
        return vertices[:, [1, 2, 0]].contiguous(), faces, uvs
    vertices, faces, uvs = triangulate_grid_mesh(points, mask, decimation)
    return vertices * vertices.new_tensor([1.0, -1.0, -1.0]), faces[:, [0, 2, 1]].contiguous(), uvs


def _moge_glb(geometry: dict, index: int) -> bytes | None:
    height, width = geometry["points"].shape[1:3]
    decimation = max(1, math.ceil(max(height, width) / MOGE_EDITOR_GRID))
    vertices, faces, uvs = moge_grid_mesh(geometry, index, decimation)
    if faces.shape[0] == 0:
        return None
    texture = geometry["image"][index, ::decimation, ::decimation].clamp(0.0, 1.0).mul(255.0).byte().numpy()
    return save_glb(vertices, faces, uvs=uvs, texture_image=Image.fromarray(texture, mode="RGB"))


def _splat_ply(splat: Types.SPLAT, index: int) -> bytes | None:
    end = splat.positions.shape[1] if splat.counts is None else int(splat.counts[index])
    if end == 0:
        return None
    return SplatToFile3D.FORMAT_WRITERS["ply"](
        splat.positions[index, :end], splat.scales[index, :end], splat.rotations[index, :end], splat.opacities[index, :end], splat.sh[index, :end]
    )


def write_editor_files(value) -> tuple[str, list[Path | None]]:
    """Write each item of a SPLAT, MESH, or MOGE_GEOMETRY to temp. Returns the kind the editor loads ("splat" or
    "mesh") and the paths in item order, None for an empty item."""
    if isinstance(value, Types.SPLAT):
        kind, extension, count, item = "splat", "ply", value.positions.shape[0], _splat_ply
    elif isinstance(value, Types.MESH):
        kind, extension, count, item = "mesh", "glb", value.vertices.shape[0], mesh_item_to_glb_bytes
    else:
        kind, extension, count, item = "mesh", "glb", value["points"].shape[0], _moge_glb
    name = uuid.uuid4().hex[:12]
    paths = []
    for index in range(count):
        data = item(value, index)
        path = None
        if data is not None:
            path = temp_file_path(f"pano_scene_{name}_{index}.{extension}")
            path.write_bytes(data)
        paths.append(path)
    return kind, paths
