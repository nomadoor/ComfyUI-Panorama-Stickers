import hashlib
import json
import math
from collections import OrderedDict
import threading

import numpy as np

from .math import DEG2RAD, dir_to_lon_lat, lon_lat_to_erp, sample_erp_bilinear, yaw_pitch_to_dir, orthonormal_basis_from_forward


_CUTOUT_SAMPLING_MAP_CACHE: "OrderedDict[str, dict]" = OrderedDict()
_CUTOUT_SAMPLING_MAP_CACHE_LIMIT = 8
_CUTOUT_SAMPLING_MAP_CACHE_LOCK = threading.Lock()


def _cutout_sampling_cache_get(key: str) -> dict | None:
    with _CUTOUT_SAMPLING_MAP_CACHE_LOCK:
        entry = _CUTOUT_SAMPLING_MAP_CACHE.get(key)
        if entry is None:
            return None
        _CUTOUT_SAMPLING_MAP_CACHE.move_to_end(key)
        return {
            "u": entry["u"].copy(),
            "v": entry["v"].copy(),
            "valid": entry.get("valid").copy() if isinstance(entry.get("valid"), np.ndarray) else entry.get("valid"),
            "out_w": int(entry["out_w"]),
            "out_h": int(entry["out_h"]),
            "erp_w": int(entry.get("erp_w", 0)),
            "erp_h": int(entry.get("erp_h", 0)),
        }


def _cutout_sampling_cache_put(key: str, sampling_map: dict) -> None:
    with _CUTOUT_SAMPLING_MAP_CACHE_LOCK:
        _CUTOUT_SAMPLING_MAP_CACHE[key] = {
            "u": sampling_map["u"].copy(),
            "v": sampling_map["v"].copy(),
            "valid": sampling_map.get("valid").copy() if isinstance(sampling_map.get("valid"), np.ndarray) else sampling_map.get("valid"),
            "out_w": int(sampling_map["out_w"]),
            "out_h": int(sampling_map["out_h"]),
            "erp_w": int(sampling_map.get("erp_w", 0)),
            "erp_h": int(sampling_map.get("erp_h", 0)),
        }
        _CUTOUT_SAMPLING_MAP_CACHE.move_to_end(key)
        while len(_CUTOUT_SAMPLING_MAP_CACHE) > _CUTOUT_SAMPLING_MAP_CACHE_LIMIT:
            _CUTOUT_SAMPLING_MAP_CACHE.popitem(last=False)


def _cutout_sampling_cache_key(
    erp_shape: tuple[int, ...],
    yaw_deg: float,
    pitch_deg: float,
    h_fov_deg: float,
    v_fov_deg: float,
    roll_deg: float,
    out_w: int,
    out_h: int,
    coverage_deg: int,
) -> str:
    payload = {
        "erp_shape": [int(x) for x in erp_shape],
        "yaw_deg": float(yaw_deg),
        "pitch_deg": float(pitch_deg),
        "h_fov_deg": float(h_fov_deg),
        "v_fov_deg": float(v_fov_deg),
        "roll_deg": float(roll_deg),
        "out_w": int(out_w),
        "out_h": int(out_h),
        "coverage_deg": 180 if int(coverage_deg) == 180 else 360,
    }
    raw = json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=True)
    return hashlib.sha1(raw.encode("utf-8")).hexdigest()


def build_cutout_sampling_map(
    erp_shape: tuple[int, ...],
    yaw_deg: float,
    pitch_deg: float,
    h_fov_deg: float,
    v_fov_deg: float,
    roll_deg: float,
    out_w: int,
    out_h: int,
    coverage_deg: int = 360,
) -> dict:
    out_w = max(8, int(out_w))
    out_h = max(8, int(out_h))
    if len(erp_shape) < 2:
        raise ValueError(f"erp_shape must have at least 2 dimensions, got {len(erp_shape)}")
    erp_h = max(1, int(erp_shape[0]))
    erp_w = max(1, int(erp_shape[1]))
    coverage = 180 if int(coverage_deg) == 180 else 360
    cache_key = _cutout_sampling_cache_key(
        (erp_h, erp_w),
        yaw_deg,
        pitch_deg,
        h_fov_deg,
        v_fov_deg,
        roll_deg,
        out_w,
        out_h,
        coverage,
    )
    cached = _cutout_sampling_cache_get(cache_key)
    if cached is not None:
        return cached

    h_tan = math.tan(max(1e-3, h_fov_deg) * 0.5 * DEG2RAD)
    v_tan = math.tan(max(1e-3, v_fov_deg) * 0.5 * DEG2RAD)

    forward = yaw_pitch_to_dir(yaw_deg, pitch_deg)
    right, up, fwd = orthonormal_basis_from_forward(forward)

    xs = (np.arange(out_w, dtype=np.float32) + 0.5) / out_w * 2.0 - 1.0
    ys = 1.0 - (np.arange(out_h, dtype=np.float32) + 0.5) / out_h * 2.0
    xg, yg = np.meshgrid(xs, ys)

    x = xg * h_tan
    y = yg * v_tan

    if abs(roll_deg) > 1e-6:
        rr = roll_deg * DEG2RAD
        cr = math.cos(rr)
        sr = math.sin(rr)
        xr = x * cr - y * sr
        yr = x * sr + y * cr
        x, y = xr, yr

    dirs = fwd[None, None, :] + x[..., None] * right[None, None, :] + y[..., None] * up[None, None, :]
    norm = np.linalg.norm(dirs, axis=-1, keepdims=True)
    dirs = dirs / np.maximum(norm, 1e-8)

    lon, lat = dir_to_lon_lat(dirs)
    valid = None
    if coverage == 180:
        valid = np.abs(lon) <= (math.pi * 0.5)
        u = (lon / math.pi + 0.5) * erp_w
        v = (0.5 - (lat / math.pi)) * erp_h
        u = np.clip(u, 0.0, max(erp_w - 1.0, 0.0)).astype(np.float32, copy=False)
        v = np.clip(v, 0.0, max(erp_h - 1.0, 0.0)).astype(np.float32, copy=False)
    else:
        u, v = lon_lat_to_erp(lon, lat, erp_w, erp_h)
        u = u.astype(np.float32, copy=False)
        v = v.astype(np.float32, copy=False)

    sampling_map = {
        "u": u,
        "v": v,
        "valid": valid,
        "out_w": out_w,
        "out_h": out_h,
        "erp_w": erp_w,
        "erp_h": erp_h,
    }
    _cutout_sampling_cache_put(cache_key, sampling_map)
    return sampling_map


def sample_cutout_from_sampling_map(erp_layer: np.ndarray, sampling_map: dict) -> np.ndarray:
    if erp_layer.ndim == 2:
        sampled = sample_erp_bilinear(erp_layer[..., None], sampling_map["u"], sampling_map["v"])[..., 0]
        valid = sampling_map.get("valid")
        if valid is not None:
            sampled = sampled.astype(np.float32, copy=False)
            sampled[~valid] = 0.0
        return sampled.astype(np.float32, copy=False)

    sampled = sample_erp_bilinear(erp_layer, sampling_map["u"], sampling_map["v"]).astype(np.float32, copy=False)
    valid = sampling_map.get("valid")
    if valid is not None:
        sampled[~valid] = 0.0
    return sampled


def cutout_from_erp(
    erp_rgb: np.ndarray,
    yaw_deg: float,
    pitch_deg: float,
    h_fov_deg: float,
    v_fov_deg: float,
    roll_deg: float,
    out_w: int,
    out_h: int,
    coverage_deg: int = 360,
) -> np.ndarray:
    sampling_map = build_cutout_sampling_map(
        erp_rgb.shape,
        yaw_deg,
        pitch_deg,
        h_fov_deg,
        v_fov_deg,
        roll_deg,
        out_w,
        out_h,
        coverage_deg,
    )
    return sample_cutout_from_sampling_map(erp_rgb, sampling_map)
