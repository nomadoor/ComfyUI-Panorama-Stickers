"""The ComfyUI core's internal symbols this package uses, imported in this one module.

They are the core's own readers, writers, and math for 3D media: they are not part of `comfy_api`, so an update of
the core can rename or remove them. If any is missing, the 3D features (SPLAT, MESH, 3D files, MOGE_GEOMETRY, DA3_GEOMETRY) are
disabled with a warning in the log (DA3_GEOMETRY included), and every other node still loads; using a 3D feature then raises
`FEATURE_3D_UNAVAILABLE`. `pin_memory` is the core's public function, adapted to cores without `evict_active`.
"""
import inspect
import logging

import comfy.model_management

try:
    from comfy.ldm.moge.geometry import depth_map_edge, triangulate_grid_mesh
    from comfy_extras.nodes_gaussian_splat import (
        _C0,
        File3DToSplat,
        SplatToFile3D,
        _detect_splat_format,
        _gaussian_item,
        _linear_to_srgb,
        _quantile,
        _quat_to_mat,
        _srgb_to_linear,
    )
    from comfy_extras.nodes_depth_anything_3 import DA3GeometryToMesh, _da3_build_mask, _da3_default_K, _da3_get_K, _da3_unproject
    from comfy_extras.nodes_mesh_io import Get3DComponents
    from comfy_extras.nodes_save_3d import get_mesh_batch_item, mesh_item_to_glb_bytes, save_glb
except ImportError as error:
    FEATURE_3D_UNAVAILABLE = (
        f"Panorama Stickers: the 3D features are disabled because an internal of ComfyUI they use could not be imported ({error}). "
        "Update ComfyUI, or this extension, to use SPLAT, MESH, 3D files, MOGE_GEOMETRY, and DA3_GEOMETRY."
    )
    logging.getLogger(__name__).warning(FEATURE_3D_UNAVAILABLE)

    class _Unavailable:
        """Stands for a missing core symbol: calling it or reading from it raises the reason."""

        def __call__(self, *args, **kwargs):
            raise RuntimeError(FEATURE_3D_UNAVAILABLE)

        def __getattr__(self, name):
            raise RuntimeError(FEATURE_3D_UNAVAILABLE)

    triangulate_grid_mesh = _C0 = File3DToSplat = SplatToFile3D = _detect_splat_format = _gaussian_item = _Unavailable()
    _linear_to_srgb = _quantile = _quat_to_mat = _srgb_to_linear = Get3DComponents = _Unavailable()
    get_mesh_batch_item = mesh_item_to_glb_bytes = save_glb = DA3GeometryToMesh = _da3_default_K = _Unavailable()
    depth_map_edge = _da3_build_mask = _da3_get_K = _da3_unproject = _Unavailable()
else:
    FEATURE_3D_UNAVAILABLE = None

# Cores before `evict_active` would release ComfyUI's RAM cache to pin; there the buffer is not pinned.
_PIN_KEEPS_ACTIVE = "evict_active" in inspect.signature(comfy.model_management.pin_memory).parameters


def pin_memory(tensor) -> bool:
    """Pin `tensor` without releasing ComfyUI's active RAM cache for it, as `comfy.model_management.pin_memory` does
    with `evict_active=False`. Whether it was pinned."""
    return _PIN_KEEPS_ACTIVE and comfy.model_management.pin_memory(tensor, evict_active=False)
