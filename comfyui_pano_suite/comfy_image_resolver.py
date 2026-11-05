from pathlib import Path

import numpy as np
from PIL import UnidentifiedImageError

from .core.cache import file_key
from .core.painting import load_painting_layer_payload
from .core.stickers import comfy_file_path, read_image_file_rgba8


def _resolve_comfy_image_path(asset: dict) -> Path | None:
    if not isinstance(asset, dict) or str(asset.get("type") or "").strip().lower() != "comfy_image":
        return None
    return comfy_file_path(asset.get("filename"), asset.get("subfolder"), asset.get("storage"))


def _resolve_asset_cache_key(asset: dict | None) -> tuple[str, int, int] | None:
    path = _resolve_comfy_image_path(asset)
    if path is None:
        return None
    try:
        return file_key(path)
    except (FileNotFoundError, OSError):
        return None


def _load_comfy_rgba8(asset: dict) -> np.ndarray | None:
    """The `comfy_image` asset as RGBA uint8, read-only (`read_image_file_rgba8`), or None when it cannot be read."""
    path = _resolve_comfy_image_path(asset)
    if path is None:
        return None
    try:
        return read_image_file_rgba8(path)
    except (FileNotFoundError, OSError, UnidentifiedImageError, ValueError):
        return None


def resolve_painting_layer_payload(
    painting_layer: dict | None,
    *,
    erp_width: int | None = None,
    erp_height: int | None = None,
) -> dict | None:
    if not isinstance(painting_layer, dict):
        return None

    asset_keys: list[str] = []
    paint_rgba = _load_comfy_rgba8(painting_layer.get("paint")) if isinstance(painting_layer.get("paint"), dict) else None
    paint_key = _resolve_asset_cache_key(painting_layer.get("paint")) if isinstance(painting_layer.get("paint"), dict) else None
    if paint_key is not None:
        asset_keys.append("|".join(["paint", paint_key[0], str(paint_key[1]), str(paint_key[2])]))
    mask_rgba = _load_comfy_rgba8(painting_layer.get("mask")) if isinstance(painting_layer.get("mask"), dict) else None
    mask_key = _resolve_asset_cache_key(painting_layer.get("mask")) if isinstance(painting_layer.get("mask"), dict) else None
    if mask_key is not None:
        asset_keys.append("|".join(["mask", mask_key[0], str(mask_key[1]), str(mask_key[2])]))
    group_layers = {}

    raw_groups = painting_layer.get("groups")
    if isinstance(raw_groups, list):
        for item in raw_groups:
            if not isinstance(item, dict):
                continue
            action_group_id = str(item.get("actionGroupId") or "").strip()
            if not action_group_id:
                continue
            image_asset = item.get("image") if isinstance(item.get("image"), dict) else None
            layer = _load_comfy_rgba8(image_asset) if image_asset is not None else None
            if layer is not None:
                group_layers[action_group_id] = layer
            group_key = _resolve_asset_cache_key(image_asset) if image_asset is not None else None
            if group_key is not None:
                asset_keys.append("|".join(["group", action_group_id, group_key[0], str(group_key[1]), str(group_key[2])]))

    revision = str(painting_layer.get("revision") or "").strip()
    if asset_keys:
        revision = "::".join(part for part in [revision, *asset_keys] if part)

    return load_painting_layer_payload({
        "revision": revision,
        "paint": paint_rgba,
        "mask": None if mask_rgba is None else mask_rgba[..., 3],
        "groups": group_layers,
    }, erp_width=erp_width, erp_height=erp_height)
