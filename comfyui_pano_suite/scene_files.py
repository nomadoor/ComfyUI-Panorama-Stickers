"""Files the editor (three.js and Spark) loads for the `scene` input: one temp file per item, a PLY for a SPLAT
and a GLB for a MESH or a frame of `MOGE_GEOMETRY`, in the item's own glTF frame (World before the `scene`
transform, ADR 0023). They are written with the core's writers and do not depend on the rasterizers."""
import math
import uuid
from pathlib import Path

import torch
from PIL import Image
from comfy.ldm.moge.geometry import triangulate_grid_mesh
from comfy_api.latest import Types
from comfy_extras.nodes_gaussian_splat import SplatToFile3D
from comfy_extras.nodes_save_3d import get_mesh_batch_item, mesh_item_to_glb_bytes, save_glb

from .core.video import temp_file_path

# A MoGe frame is thinned to at most this many grid points along its longer side; the editor only previews it,
# and a video writes one GLB per frame. A MESH that MoGePointMapToMesh made is thinned the same way.
MOGE_EDITOR_GRID = 512
# Any other MESH is thinned to at most this many triangles for the editor (the node renders it in full).
MESH_EDITOR_FACES = 1_000_000
# A vertex cluster of a thinned MESH also stays within one cell across its uvs, of at most this many (and no more
# than its grid has across the box), so the two sides of a texture seam stay apart.
MESH_EDITOR_UV_CELLS = 64
# How far, in grid cells, a uv may be from a grid point and still be on it.
GRID_TOLERANCE = 1e-2


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
    return save_glb(vertices, faces, uvs=uvs, texture_image=_image(geometry["image"][index, ::decimation, ::decimation]))


def _grid_cells(faces, uvs, texture):
    """The pixel (rows, columns) of each vertex and the grid's (height, width) of a MESH that MoGePointMapToMesh
    made from a point map at decimation 1: its uvs are (x / (W - 1), y / (H - 1)) of the vertex's pixel, a
    texture (when there is one) is the W x H image, no two vertices share a pixel and each face lies in a cell
    of the grid. None for any other MESH."""
    if uvs is None:
        return None
    if texture is not None:
        height, width = texture.shape[:2]
    else:
        height, width = uvs[:, 1].unique().numel(), uvs[:, 0].unique().numel()
    if height < 2 or width < 2:
        return None
    position = uvs.double() * uvs.new_tensor([width - 1, height - 1], dtype=torch.float64)
    cell = position.round()
    if (position - cell).abs().max() > GRID_TOLERANCE or cell.min() < 0 or cell[:, 0].max() >= width or cell[:, 1].max() >= height:
        return None
    columns, rows = cell.long().unbind(-1)
    if (rows * width + columns).unique().numel() != rows.numel():
        return None
    for axis in (rows.int()[faces], columns.int()[faces]):
        if (axis.max(dim=1).values - axis.min(dim=1).values).max() > 1:
            return None
    return rows, columns, height, width


def _thin_grid(vertices, faces, grid, decimation):
    """A grid MESH (_grid_cells) thinned as moge_grid_mesh thins its frame: the core's triangulate_grid_mesh on
    the grid of the vertices it has, every `decimation`-th row and column, in the MESH's own winding. Returns the
    kept vertices' indices, the faces and the uvs."""
    rows, columns, height, width = grid
    # Each pixel holds its vertex's index; a pixel without one is not finite, which drops it as the mask did.
    points = torch.full((height, width, 3), math.nan, dtype=torch.float64)
    points[rows, columns, 0] = torch.arange(rows.numel(), dtype=torch.float64)
    points[rows, columns, 1:] = 0.0
    kept, thinned, uvs = triangulate_grid_mesh(points, decimation=decimation, discontinuity_threshold=0.0)
    # The core's faces turn from right to down across the grid; a MESH flipped with its Y and Z turns back.
    a, b, c = (torch.stack([rows[faces[0, k]], columns[faces[0, k]]]) for k in range(3))
    if (b[1] - a[1]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[1] - a[1]) < 0:
        thinned = thinned[:, [0, 2, 1]].contiguous()
    return kept[:, 0].long(), thinned, uvs


def _cluster(vertices, faces, uvs, limit):
    """Vertex clustering to at most `limit` faces: the vertices in one cell of a grid over the mesh's box (and in
    one cell across the uvs, MESH_EDITOR_UV_CELLS) become one vertex at their mean, and the faces left with
    fewer than three vertices or twice over are dropped. The grid gets coarser until the faces fit; a grid that
    leaves no face gets finer again, and a coarser one stays finer than that. Returns each vertex's cluster, the
    cluster count and the faces (none only when no grid up to 4095 cells keeps a face)."""
    low = vertices.min(dim=0).values
    extent = float((vertices.max(dim=0).values - low).max().clamp_min(1e-12))
    cells = min(4095, max(1, int(math.sqrt(limit / 2))))
    # The most cells known to leave no face.
    empty = 0
    while True:
        cell = ((vertices - low) / (extent / cells)).floor().long().clamp(0, cells)
        key = (cell[:, 0] * 4096 + cell[:, 1]) * 4096 + cell[:, 2]
        if uvs is not None:
            uv_cells = min(MESH_EDITOR_UV_CELLS, cells)
            uv = (uvs * uv_cells).floor().long().clamp(0, uv_cells)
            key = (key * (uv_cells + 1) + uv[:, 0]) * (uv_cells + 1) + uv[:, 1]
        _, cluster = key.unique(return_inverse=True)
        count = int(cluster.max()) + 1
        clustered = cluster[faces]
        whole = (clustered[:, 0] != clustered[:, 1]) & (clustered[:, 1] != clustered[:, 2]) & (clustered[:, 0] != clustered[:, 2])
        clustered = clustered[whole]
        clustered = clustered[_first_faces(clustered.sort(dim=1).values, count)]
        if clustered.shape[0] == 0 and cells < 4095:
            empty = cells
            cells = min(4095, cells * 2)
            continue
        if clustered.shape[0] <= limit:
            return cluster, count, clustered
        coarser = max(empty + 1, int(cells * math.sqrt(limit / clustered.shape[0]) * 0.9))
        if coarser >= cells:
            return cluster, count, clustered
        cells = coarser


def _first_faces(faces, count):
    """The index of the first of each distinct face (rows of vertex indices below `count`), in their order. Two
    flat keys stay within int64 where one of three indices would not."""
    if faces.shape[0] == 0:
        return faces.new_zeros(0)
    _, pair = (faces[:, 0] * count + faces[:, 1]).unique(return_inverse=True)
    _, inverse = (pair * count + faces[:, 2]).unique(return_inverse=True)
    first = torch.full((int(inverse.max()) + 1,), faces.shape[0], dtype=torch.long)
    return first.scatter_reduce(0, inverse, torch.arange(faces.shape[0]), "amin").sort().values


def _mean(values, cluster, count):
    total = values.new_zeros((count, values.shape[1])).index_add_(0, cluster, values)
    return total / torch.bincount(cluster, minlength=count).unsqueeze(1).to(values.dtype)


def _image(tensor):
    return Image.fromarray(tensor.clamp(0.0, 1.0).mul(255.0).byte().cpu().numpy(), mode="RGB")


def _mesh_glb(mesh: Types.MESH, index: int) -> bytes | None:
    """An item of a MESH for the editor. A MoGe grid MESH is thinned like a MOGE_GEOMETRY frame and any other
    MESH over MESH_EDITOR_FACES triangles by vertex clustering; either keeps its texture and uvs, and what the
    editor draws without lights (base color, texture, vertex colors; pano_scene_loaders.js makeUnlit). A smaller
    MESH is written as it is."""
    vertices, faces, colors, uvs, _ = get_mesh_batch_item(mesh, index)
    if vertices.shape[0] == 0 or faces.shape[0] == 0:
        return None
    vertices, faces = vertices.cpu(), faces.cpu().long()
    uvs = uvs.cpu() if uvs is not None else None
    colors = colors.cpu() if colors is not None else None
    texture = mesh.texture[index].cpu() if mesh.texture is not None else None
    grid = _grid_cells(faces, uvs, texture)
    if grid is not None:
        decimation = max(1, math.ceil(max(grid[2], grid[3]) / MOGE_EDITOR_GRID))
        if decimation == 1:
            return mesh_item_to_glb_bytes(mesh, index)
        kept, faces, uvs = _thin_grid(vertices, faces, grid, decimation)
        vertices = vertices[kept]
        colors = colors[kept] if colors is not None else None
        texture = texture[::decimation, ::decimation] if texture is not None else None
    elif faces.shape[0] > MESH_EDITOR_FACES:
        cluster, count, faces = _cluster(vertices, faces, uvs, MESH_EDITOR_FACES)
        vertices = _mean(vertices.float(), cluster, count)
        uvs = _mean(uvs.float(), cluster, count) if uvs is not None else None
        colors = _mean(colors.float(), cluster, count) if colors is not None else None
    else:
        return mesh_item_to_glb_bytes(mesh, index)
    # Nothing left to see, as a MOGE_GEOMETRY frame without faces.
    if faces.shape[0] == 0:
        return None
    return save_glb(
        vertices, faces, uvs=uvs, vertex_colors=colors, texture_image=_image(texture) if texture is not None else None,
        unlit=mesh.unlit, material=mesh.material,
    )


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
        kind, extension, count, item = "mesh", "glb", value.vertices.shape[0], _mesh_glb
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
