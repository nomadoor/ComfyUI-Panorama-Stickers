from functools import lru_cache
from pathlib import Path

import numpy as np
from PIL import Image, UnidentifiedImageError

from .core.painting import load_painting_layer_payload


def _resolve_comfy_image_path(asset: dict) -> Path | None:
    try:
        import folder_paths
    except ImportError:
        return None
    if not isinstance(asset, dict) or str(asset.get("type") or "").strip().lower() != "comfy_image":
        return None
    filename = str(asset.get("filename") or "").strip()
    if not filename:
        return None
    subfolder = str(asset.get("subfolder") or "").strip().strip("/\\")
    storage = str(asset.get("storage") or "input").strip().lower()
    if storage == "output":
        base = Path(folder_paths.get_output_directory())
    elif storage == "temp":
        base = Path(folder_paths.get_temp_directory())
    else:
        base = Path(folder_paths.get_input_directory())
    path = (base / subfolder / filename).resolve() if subfolder else (base / filename).resolve()
    try:
        path.relative_to(base.resolve())
    except Exception:
        return None
    return path if path.exists() and path.is_file() else None


def _resolve_asset_cache_key(asset: dict | None) -> tuple[str, int, int] | None:
    path = _resolve_comfy_image_path(asset)
    if path is None:
        return None
    try:
        stat = path.stat()
    except (FileNotFoundError, OSError):
        return None
    return (str(path), int(stat.st_mtime_ns), int(stat.st_size))


@lru_cache(maxsize=64)
def _load_comfy_rgba_cached(path_str: str, mtime_ns: int, size_bytes: int) -> np.ndarray | None:
    try:
        with Image.open(path_str) as img:
            arr = np.asarray(img.convert("RGBA"), dtype=np.float32) / 255.0
        arr.flags.writeable = False
        return arr
    except (FileNotFoundError, OSError, UnidentifiedImageError, ValueError):
        return None


def _load_comfy_rgba(asset: dict) -> np.ndarray | None:
    cache_key = _resolve_asset_cache_key(asset)
    if cache_key is None:
        return None
    cached = _load_comfy_rgba_cached(*cache_key)
    return cached.copy() if cached is not None else None


def resolve_comfy_image_rgba(asset: dict | None) -> np.ndarray | None:
    if not isinstance(asset, dict):
        return None
    return _load_comfy_rgba(asset)


def resolve_painting_layer_payload(
    painting_layer: dict | None,
    *,
    erp_width: int | None = None,
    erp_height: int | None = None,
) -> dict | None:
    if not isinstance(painting_layer, dict):
        return None

    asset_keys: list[str] = []
    paint_rgba = _load_comfy_rgba(painting_layer.get("paint")) if isinstance(painting_layer.get("paint"), dict) else None
    paint_key = _resolve_asset_cache_key(painting_layer.get("paint")) if isinstance(painting_layer.get("paint"), dict) else None
    if paint_key is not None:
        asset_keys.append("|".join(["paint", paint_key[0], str(paint_key[1]), str(paint_key[2])]))
    mask_rgba = _load_comfy_rgba(painting_layer.get("mask")) if isinstance(painting_layer.get("mask"), dict) else None
    mask_key = _resolve_asset_cache_key(painting_layer.get("mask")) if isinstance(painting_layer.get("mask"), dict) else None
    if mask_key is not None:
        asset_keys.append("|".join(["mask", mask_key[0], str(mask_key[1]), str(mask_key[2])]))
    group_layers = {}

    raw_groups = painting_layer.get("groups")
    if isinstance(raw_groups, list):
        for item in raw_groups:
            if not isinstance(item, dict):
                continue
            action_group_id = str(item.get("actionGroupId") or item.get("id") or "").strip()
            if not action_group_id:
                continue
            image_asset = item.get("image") if isinstance(item.get("image"), dict) else None
            layer = _load_comfy_rgba(image_asset) if image_asset is not None else None
            if layer is not None:
                group_layers[action_group_id] = layer
            group_key = _resolve_asset_cache_key(image_asset) if image_asset is not None else None
            if group_key is not None:
                asset_keys.append("|".join(["group", action_group_id, group_key[0], str(group_key[1]), str(group_key[2])]))

    revision = str(painting_layer.get("revision") or "").strip()
    if not revision:
        revision_parts = []
        for key in ("paint", "mask"):
            asset = painting_layer.get(key)
            if isinstance(asset, dict):
                revision_parts.append(
                    "|".join([
                        key,
                        str(asset.get("filename") or "").strip(),
                        str(asset.get("subfolder") or "").strip(),
                        str(asset.get("storage") or asset.get("type") or "").strip(),
                    ])
                )
        if isinstance(raw_groups, list):
            for item in raw_groups:
                if not isinstance(item, dict):
                    continue
                image = item.get("image")
                if not isinstance(image, dict):
                    continue
                revision_parts.append(
                    "|".join([
                        "group",
                        str(item.get("actionGroupId") or item.get("id") or "").strip(),
                        str(image.get("filename") or "").strip(),
                        str(image.get("subfolder") or "").strip(),
                        str(image.get("storage") or image.get("type") or "").strip(),
                    ])
                )
        revision = "::".join(part for part in revision_parts if part)
    if asset_keys:
        revision = "::".join(part for part in [revision, *asset_keys] if part)

    return load_painting_layer_payload({
        "revision": revision,
        "paint": paint_rgba,
        "mask": None if mask_rgba is None else mask_rgba[..., 3],
        "groups": group_layers,
    }, erp_width=erp_width, erp_height=erp_height)
