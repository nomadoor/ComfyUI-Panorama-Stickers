"""The 3D media on Panorama Studio's inputs as what is drawn (`docs/studio-node.md`, "3D ファイルの `file` の
Source"): a 3D file read as its SPLAT or MESH once per file, the checks at the entry for DA3_GEOMETRY and
MOGE_GEOMETRY, and the `scene` input as World content. The editor's route (`routes.py`) reads with the same reader."""
import logging

from comfy_api.latest import Types

from .core.cache import file_key
from .core.stickers import comfy_file_path
from .core.world_render import SceneContent
from .node_runtime import NODE_RUNTIME
from .scene_mesh import check_da3, is_da3, is_mesh_file, is_moge, moge_uses_depth_grid, needs_default_k, read_mesh_file
from .splat_render import read_splat_file
from .sticker_media import content_of

_log = logging.getLogger(f"{__package__}.nodes")  # the logger these messages had in nodes.py


def _scene_content(scene) -> SceneContent | None:
    """The `scene` input as World content, or None without one."""
    return None if scene is None else content_of(scene)


# Why a 3D file that neither reader takes is not read (`docs/studio-node.md`, "3D ファイルの `file` の Source").
NEITHER_3D_READER = "neither a splat file (a PLY with 3DGS properties, SPLAT, SPZ, KSPLAT) nor a mesh file (GLB, GLTF, OBJ, STL)"


# Why a 3D file `file` Source outside ComfyUI's folders, or not there, is not read.
FILE_NOT_FOUND = "the file was not found"


def _read_scene_file(scene, name: str | None):
    """A 3D file on the `scene` or `sticker` input (`name`) as what is read from it: a splat file (told by its
    contents, as Load3D does) as its SPLAT, else a mesh file (by its format) as its MESH; other inputs as given. A 3D
    file that neither reads (a PLY without 3DGS properties, a non-splat file without a format) is a ValueError naming
    the input, or for a 3D file `file` Source (`name` None) a ValueError of the reason alone.
    What is read is kept per file (on disk by its path and modification, else by the object) in the cache of its
    kind, so the same file is not parsed again and keeps its editor files; concurrent readers of one file (a prompt
    and the editor's route) read it once."""
    if not isinstance(scene, Types.File3D):
        return scene
    if scene.is_disk_backed:
        cache_key = file_key(scene.get_source())
    else:
        cache_key = NODE_RUNTIME.object_identity(scene)
    mesh = NODE_RUNTIME.cache.get("mesh_files", cache_key)
    if mesh is not None:
        return mesh
    splat = NODE_RUNTIME.cache.get_or_put("splat_files", cache_key, lambda: read_splat_file(scene))
    if splat is not None:
        return splat
    if not is_mesh_file(scene):
        if name is None:
            raise ValueError(f"it is {NEITHER_3D_READER}")
        raise ValueError(f"Panorama Stickers: the 3D file on the {name} input is {NEITHER_3D_READER}.")
    return NODE_RUNTIME.cache.get_or_put("mesh_files", cache_key, lambda: read_mesh_file(scene))


def _check_da3_inputs(*inputs):
    """At the entry, as for an unreadable 3D file: refuse a multiview DA3_GEOMETRY without poses (`check_da3`), and
    say once per run when a mono one is drawn with the core's default K."""
    da3 = [value for value in inputs if is_da3(value)]
    for geometry in da3:
        check_da3(geometry)
    if any(needs_default_k(geometry) for geometry in da3):
        _log.warning("Panorama Stickers: a DA3_GEOMETRY has no intrinsics (a mono model), so its meshes use the core's default "
                     "camera of about 71 degrees across; if the photo's field of view differs, the shapes stretch in depth.")


def _check_moge_inputs(*inputs):
    """Say once per run why a MOGE_GEOMETRY goes to the editor as GLB, not as a depth grid (`moge_uses_depth_grid`):
    it is drawn all the same, the editor only plays it slower."""
    reasons = [reason for value in inputs if is_moge(value) for uses, reason in [moge_uses_depth_grid(value)] if not uses]
    if reasons:
        _log.warning("Panorama Stickers: a MOGE_GEOMETRY goes to the editor as one GLB per frame, not as a depth grid, because "
                     + "; ".join(dict.fromkeys(reasons)) + ". It is drawn the same; the editor plays it slower.")


def _file_3d_error(source: dict, reason: str) -> str:
    """The text that says why a 3D file `file` Source is not read, for the node's warning and the route's error."""
    name = f"{source['subfolder']}/{source['filename']}" if source.get("subfolder") else source["filename"]
    reason = str(reason).strip()
    return f"Could not read the 3D file {name}: {reason}{'' if reason.endswith(('.', '!', '?')) else '.'}"


def _read_file_3d(source: dict) -> tuple[object, str | None]:
    """A 3D file `file` Source read as `scene` and `sticker` read theirs (`_read_scene_file`): its SPLAT or MESH and
    None, or None and why it was not read: a path outside ComfyUI's folders or no file there, or the reader's
    ValueError or OSError. Other errors are raised."""
    path = comfy_file_path(source["filename"], source["subfolder"], source["storage"])
    if path is None:
        return None, FILE_NOT_FOUND
    try:
        return _read_scene_file(Types.File3D(str(path)), None), None
    except (ValueError, OSError) as error:
        return None, str(error)
