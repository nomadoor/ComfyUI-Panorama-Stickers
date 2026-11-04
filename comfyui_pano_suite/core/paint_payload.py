"""The uploaded paint rasters of a painting (`painting_layer`): the paint, the mask, and the groups as arrays at the
ERP size they are drawn at (`load_painting_layer_payload`). `core/painting.py` re-exports it for its readers."""
import numpy as np
from PIL import Image


def _resize_layer(layer: np.ndarray, width: int, height: int, mode: str) -> np.ndarray:
    """A layer (0..1 float, or uint8 as an 8-bit image is read) at `width` x `height`, bilinear through 8 bits as the
    editor's uploads are. An 8-bit layer stays 8-bit (the same size is the layer itself); a float one is float."""
    target_w = max(1, int(width))
    target_h = max(1, int(height))
    if layer.dtype == np.uint8:
        if layer.shape[1] == target_w and layer.shape[0] == target_h:
            return layer
        return np.asarray(Image.fromarray(layer, mode=mode).resize((target_w, target_h), Image.BILINEAR))
    if layer.shape[1] == target_w and layer.shape[0] == target_h:
        return np.clip(layer.astype(np.float32), 0.0, 1.0)
    resized = Image.fromarray((np.clip(layer, 0.0, 1.0) * 255.0).astype(np.uint8), mode=mode).resize(
        (target_w, target_h),
        Image.BILINEAR,
    )
    return np.asarray(resized, dtype=np.float32) / 255.0


def _resize_rgba_layer(layer: np.ndarray | None, width: int, height: int) -> np.ndarray | None:
    if layer is None or layer.ndim != 3 or layer.shape[-1] != 4:
        return None
    return _resize_layer(layer, width, height, "RGBA")


def _resize_mask_layer(layer: np.ndarray | None, width: int, height: int) -> np.ndarray | None:
    if layer is None or layer.ndim != 2:
        return None
    return _resize_layer(layer, width, height, "L")


def load_painting_layer_payload(
    painting_layer: dict | None,
    *,
    erp_width: int | None = None,
    erp_height: int | None = None,
) -> dict | None:
    """The uploaded paint rasters of `painting_layer` (`paint` RGBA, `mask`, and `groups` RGBA by action group), at
    `erp_width` x `erp_height` when given. Rasters read from 8-bit images stay uint8 (`unit_float` reads them); the
    arrays are those of `painting_layer` when no size changes and must not be written to."""
    if not isinstance(painting_layer, dict):
        return None
    revision = str(painting_layer.get("revision") or "").strip()
    target_w = int(erp_width) if erp_width is not None else None
    target_h = int(erp_height) if erp_height is not None else None
    paint_erp = painting_layer.get("paint") if isinstance(painting_layer.get("paint"), np.ndarray) else None
    mask_erp = painting_layer.get("mask") if isinstance(painting_layer.get("mask"), np.ndarray) else None
    if target_w is not None and target_h is not None:
        paint_erp = _resize_rgba_layer(paint_erp, target_w, target_h)
        mask_erp = _resize_mask_layer(mask_erp, target_w, target_h)

    groups = {}
    raw_groups = painting_layer.get("groups")
    if isinstance(raw_groups, dict):
        for action_group_id, layer in raw_groups.items():
            key = str(action_group_id or "").strip()
            if not key or not isinstance(layer, np.ndarray):
                continue
            resized = _resize_rgba_layer(layer, target_w, target_h) if target_w is not None and target_h is not None else _resize_rgba_layer(layer, layer.shape[1], layer.shape[0])
            if resized is not None:
                groups[key] = resized

    if paint_erp is None and mask_erp is None and not groups:
        return None
    return {
        "paint": paint_erp,
        "mask": mask_erp,
        "groups": groups,
        "revision": revision,
    }
