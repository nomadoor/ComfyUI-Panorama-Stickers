"""Files the editor (three.js and Spark) loads for the `scene` input: one temp file per item, a PLY for a SPLAT
and a GLB for a MESH or a frame of `MOGE_GEOMETRY`, in the item's own glTF frame (World before the `scene`
transform, ADR 0023). They are written with the core's writers and do not depend on the rasterizers."""
import uuid
from pathlib import Path

import torch
from PIL import Image
from comfy_api.latest import Types

from .core.temp_files import TEMP_FILES, temp_file_path
from .core_adapters import SplatToFile3D, mesh_item_to_glb_bytes, save_glb, triangulate_grid_mesh


def moge_grid_mesh(geometry: dict, index: int):
    """Frame `index` of a MOGE_GEOMETRY as a grid mesh (vertices, faces, uvs) in glTF, as the core's
    MoGePointMapToMesh converts it: a panorama (no `intrinsics`) from MoGe's Z up, a perspective frame from
    OpenCV. Reads `points`, `mask` when present, and whether there are `intrinsics`; pixels outside the mask
    are dropped. The kept pixels are `moge_keep`'s (the core's parts in its order), so the core's
    `triangulate_grid_mesh` gets them as its mask with no discontinuity check of its own, and `moge_to_gltf` turns
    the result into glTF."""
    # scene_mesh reads this module's grid for drawing, so it is imported here.
    from .scene_mesh import moge_keep, moge_to_gltf

    vertices, faces, uvs = triangulate_grid_mesh(geometry["points"][index], moge_keep(geometry, index), discontinuity_threshold=0.0)
    vertices, faces = moge_to_gltf(geometry, vertices, faces)
    return vertices, faces, uvs


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


def _da3_glbs(geometry: dict, index: int):
    """Item `index` of a DA3_GEOMETRY as the GLB of its frame's mesh (mono) or a list of its views' GLBs (multiview),
    written from the same MESHes that are drawn (`da3_meshes`); None when it is empty."""
    # scene_mesh reads this module's MoGe grid, so it is imported here.
    from .scene_mesh import da3_meshes, is_multiview

    glbs = [mesh_item_to_glb_bytes(mesh, 0) for mesh in da3_meshes(geometry, index)]
    if not glbs:
        return None
    return glbs if is_multiview(geometry) else glbs[0]


def _da3_depth_files(geometry: dict, progress=None) -> list:
    """The editor files of a DA3_GEOMETRY mono (ADR 0039; docs/studio-node.md, "`DA3_GEOMETRY` mono のエディタ用ファイル"):
    per frame `pano_scene_<name>_<i>.f32`, its depth as headerless little-endian float32, H x W in row order, with the
    pixels outside `da3_keep` set to 0 (a kept pixel's depth is always > 0), or None for an empty frame. Nothing is
    converted."""
    from .scene_mesh import da3_count, da3_keep, da3_keep_is_empty

    name = uuid.uuid4().hex[:12]
    count = da3_count(geometry)
    paths, written = [], []
    with TEMP_FILES.writing(written):
        for index in range(count):
            keep = da3_keep(geometry, index)
            path = None
            if not da3_keep_is_empty(keep):
                depth = geometry["depth"][index].detach().cpu().float()
                values = torch.where(keep, depth, torch.zeros_like(depth)).numpy().astype("<f4", copy=False)
                path = temp_file_path(f"pano_scene_{name}_{index}.f32")
                written.append(path)
                path.write_bytes(values.tobytes())
            paths.append(path)
            if progress is not None:
                progress(index + 1, count)
    return paths


def write_editor_files(value, progress=None) -> tuple[str, list]:
    """Write each item of a SPLAT, MESH, MOGE_GEOMETRY, or DA3_GEOMETRY to temp. Returns the kind the editor loads
    ("splat", "mesh", or "depth_grid" for a DA3_GEOMETRY mono, `_da3_depth_files`) and per item, in order, its path,
    None for an empty item, or for a DA3_GEOMETRY multiview the list of its views' paths (one GLB each; the core's GLB writer holds one material). `progress(done, total)` is
    called after each item and may raise to stop; the files written so far are then removed."""
    if isinstance(value, Types.SPLAT):
        kind, extension, count, item = "splat", "ply", value.positions.shape[0], _splat_ply
    elif isinstance(value, Types.MESH):
        kind, extension, count, item = "mesh", "glb", value.vertices.shape[0], mesh_item_to_glb_bytes
    else:
        # scene_mesh reads this module's MoGe grid, so it is imported here; it owns how the dicts are told apart.
        from .scene_mesh import da3_count, is_da3, is_moge, is_multiview

        if is_moge(value):
            kind, extension, count, item = "mesh", "glb", value["points"].shape[0], _moge_glb
        elif is_da3(value) and not is_multiview(value):
            return "depth_grid", _da3_depth_files(value, progress)
        elif is_da3(value):
            kind, extension, count, item = "mesh", "glb", da3_count(value), _da3_glbs
        else:
            raise TypeError("write_editor_files takes a SPLAT, MESH, MOGE_GEOMETRY, or DA3_GEOMETRY")
    name = uuid.uuid4().hex[:12]
    paths = []
    written = []
    with TEMP_FILES.writing(written):
        for index in range(count):
            data = item(value, index)
            path = None
            if isinstance(data, list):
                path = []
                for view, part in enumerate(data):
                    path.append(temp_file_path(f"pano_scene_{name}_{index}_{view}.{extension}"))
                    written.append(path[-1])
                    path[-1].write_bytes(part)
            elif data is not None:
                path = temp_file_path(f"pano_scene_{name}_{index}.{extension}")
                written.append(path)
                path.write_bytes(data)
            paths.append(path)
            if progress is not None:
                progress(index + 1, count)
    return kind, paths
