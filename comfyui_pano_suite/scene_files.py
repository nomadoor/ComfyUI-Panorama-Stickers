"""Files the editor (three.js and Spark) loads for the `scene` input: one temp file per item, a PLY for a SPLAT
and a GLB for a MESH or a frame of `MOGE_GEOMETRY`, in the item's own glTF frame (World before the `scene`
transform, ADR 0023). They are written with the core's writers and do not depend on the rasterizers."""
import uuid
from pathlib import Path

from PIL import Image
from comfy_api.latest import Types

from .core.video import removed_on_failure, temp_file_path
from .core_adapters import SplatToFile3D, mesh_item_to_glb_bytes, save_glb, triangulate_grid_mesh


def moge_grid_mesh(geometry: dict, index: int):
    """Frame `index` of a MOGE_GEOMETRY as a grid mesh (vertices, faces, uvs) in glTF, as the core's
    MoGePointMapToMesh converts it: a panorama (no `intrinsics`) from MoGe's Z up, a perspective frame from
    OpenCV. Reads `points`, `mask` when present, and whether there are `intrinsics`; pixels outside the mask
    are dropped."""
    points = geometry["points"][index]
    mask = geometry["mask"][index] if "mask" in geometry else None
    if "intrinsics" not in geometry:
        # Radial depth for the edge check, as the core passes it for panoramas.
        vertices, faces, uvs = triangulate_grid_mesh(points, mask, depth=points.norm(dim=-1))
        return vertices[:, [1, 2, 0]].contiguous(), faces, uvs
    vertices, faces, uvs = triangulate_grid_mesh(points, mask)
    return vertices * vertices.new_tensor([1.0, -1.0, -1.0]), faces[:, [0, 2, 1]].contiguous(), uvs


def _moge_glb(geometry: dict, index: int) -> bytes | None:
    """A frame of a MOGE_GEOMETRY at full resolution, every pixel a vertex and its `image` the texture, as the
    core's MoGePointMapToMesh (decimation 1) and SaveGLB write it."""
    vertices, faces, uvs = moge_grid_mesh(geometry, index)
    if faces.shape[0] == 0:
        return None
    texture = geometry["image"][index].clamp(0.0, 1.0).mul(255.0).byte().numpy()
    return save_glb(vertices, faces, uvs=uvs, texture_image=Image.fromarray(texture, mode="RGB"))


def _splat_ply(splat: Types.SPLAT, index: int) -> bytes | None:
    end = splat.positions.shape[1] if splat.counts is None else int(splat.counts[index])
    if end == 0:
        return None
    return SplatToFile3D.FORMAT_WRITERS["ply"](
        splat.positions[index, :end], splat.scales[index, :end], splat.rotations[index, :end], splat.opacities[index, :end], splat.sh[index, :end]
    )


def write_editor_files(value, progress=None) -> tuple[str, list[Path | None]]:
    """Write each item of a SPLAT, MESH, or MOGE_GEOMETRY to temp. Returns the kind the editor loads ("splat" or
    "mesh") and the paths in item order, None for an empty item. `progress(done, total)` is called after each item
    and may raise to stop; the files written so far are then removed."""
    if isinstance(value, Types.SPLAT):
        kind, extension, count, item = "splat", "ply", value.positions.shape[0], _splat_ply
    elif isinstance(value, Types.MESH):
        kind, extension, count, item = "mesh", "glb", value.vertices.shape[0], mesh_item_to_glb_bytes
    else:
        kind, extension, count, item = "mesh", "glb", value["points"].shape[0], _moge_glb
    name = uuid.uuid4().hex[:12]
    paths = []
    written = []
    with removed_on_failure(written):
        for index in range(count):
            data = item(value, index)
            path = None
            if data is not None:
                path = temp_file_path(f"pano_scene_{name}_{index}.{extension}")
                written.append(path)
                path.write_bytes(data)
            paths.append(path)
            if progress is not None:
                progress(index + 1, count)
    return kind, paths
