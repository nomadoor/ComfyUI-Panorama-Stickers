from __future__ import annotations

import base64
import io
from copy import deepcopy

import numpy as np
from PIL import Image

from comfyui_pano_suite.core.state import merge_state


def parse_state_json(text: str, fallback_preset: int = 2048, fallback_bg: str = "#00ff00") -> dict:
    return merge_state(
        state_in=None,
        internal_state=text,
        fallback_preset=fallback_preset,
        fallback_bg=fallback_bg,
    )


def decode_dataurl_asset(asset: dict) -> np.ndarray:
    value = str(asset.get("value") or "")
    if not value.startswith("data:image"):
        raise ValueError("asset is not a data url image")
    payload = value.split(",", 1)[1]
    raw = base64.b64decode(payload)
    img = Image.open(io.BytesIO(raw)).convert("RGBA")
    return np.asarray(img, dtype=np.float32) / 255.0


def materialize_state_assets_for_demo(state: dict) -> dict:
    result = deepcopy(state if isinstance(state, dict) else {})
    assets = result.get("assets")
    if not isinstance(assets, dict):
        result["assets"] = {}
        return result
    cleaned = {}
    for asset_id, asset in assets.items():
        if not isinstance(asset, dict):
            continue
        asset_type = str(asset.get("type") or "").strip().lower()
        if asset_type == "dataurl":
            try:
                rgba = decode_dataurl_asset(asset)
            except Exception:
                continue
            next_asset = dict(asset)
            next_asset["w"] = int(rgba.shape[1])
            next_asset["h"] = int(rgba.shape[0])
            cleaned[str(asset_id)] = next_asset
            continue
        if asset_type == "external_url":
            cleaned[str(asset_id)] = dict(asset)
    result["assets"] = cleaned
    return result
