import base64
import io
import math
from functools import lru_cache
from pathlib import Path

import numpy as np
from PIL import Image

from .math import DEG2RAD, orthonormal_basis_from_forward, yaw_pitch_to_dir

try:
    import folder_paths
except Exception:  # pragma: no cover - optional in non-Comfy test environments
    folder_paths = None


def _hex_to_rgb01(hex_color: str) -> np.ndarray:
    s = (hex_color or "#00ff00").strip().lstrip("#")
    if len(s) != 6:
        s = "00ff00"
    r = int(s[0:2], 16)
    g = int(s[2:4], 16)
    b = int(s[4:6], 16)
    return np.array([r, g, b], dtype=np.float32) / 255.0


@lru_cache(maxsize=32)
def _load_dataurl_cached(v: str) -> np.ndarray:
    payload = v.split(",", 1)[1]
    raw = base64.b64decode(payload)
    img = Image.open(io.BytesIO(raw)).convert("RGBA")
    arr = np.asarray(img, dtype=np.float32) / 255.0
    arr.flags.writeable = False
    return arr


def _load_asset_rgba(asset_info: dict, base_dir: Path | None = None) -> np.ndarray | None:
    if not isinstance(asset_info, dict):
        return None
    t = str(asset_info.get("type") or "").strip().lower()

    try:
        if t == "dataurl":
            v = str(asset_info.get("value") or "")
            if not v.startswith("data:image"):
                return None
            return _load_dataurl_cached(v)

        if t == "path":
            v = str(asset_info.get("value") or asset_info.get("path") or "").strip()
            if not v:
                return None
            p = Path(v)
            if base_dir is not None:
                p = (base_dir / p).resolve()
                try:
                    p.relative_to(base_dir.resolve())
                except Exception:
                    return None
            elif p.is_absolute():
                return None
            else:
                p = p.resolve()
                try:
                    p.relative_to(Path.cwd().resolve())
                except Exception:
                    return None

            if not p.exists() or not p.is_file():
                return None
            img = Image.open(p).convert("RGBA")
            return np.asarray(img, dtype=np.float32) / 255.0

        if t == "comfy_image" and folder_paths is not None:
            filename = str(asset_info.get("filename") or "").strip()
            if not filename:
                return None
            subfolder = str(asset_info.get("subfolder") or "").strip().strip("/\\")
            storage = str(asset_info.get("storage") or "input").strip().lower()
            if storage == "output":
                base = Path(folder_paths.get_output_directory())
            elif storage == "temp":
                base = Path(folder_paths.get_temp_directory())
            else:
                base = Path(folder_paths.get_input_directory())
            p = (base / subfolder / filename).resolve() if subfolder else (base / filename).resolve()
            try:
                p.relative_to(base.resolve())
            except Exception:
                return None
            if not p.exists() or not p.is_file():
                return None
            img = Image.open(p).convert("RGBA")
            return np.asarray(img, dtype=np.float32) / 255.0
    except Exception:
        return None
    return None


def _sample_rgba_bilinear(img: np.ndarray, x: np.ndarray, y: np.ndarray) -> np.ndarray:
    h, w, _ = img.shape
    x = np.clip(x, 0.0, w - 1.0)
    y = np.clip(y, 0.0, h - 1.0)

    x0 = np.floor(x).astype(np.int32)
    y0 = np.floor(y).astype(np.int32)
    x1 = np.clip(x0 + 1, 0, w - 1)
    y1 = np.clip(y0 + 1, 0, h - 1)

    fx = (x - x0)[..., None]
    fy = (y - y0)[..., None]

    c00 = img[y0, x0]
    c10 = img[y0, x1]
    c01 = img[y1, x0]
    c11 = img[y1, x1]

    c0 = c00 * (1.0 - fx) + c10 * fx
    c1 = c01 * (1.0 - fx) + c11 * fx
    return c0 * (1.0 - fy) + c1 * fy


def _alpha_over_straight(dst_rgb: np.ndarray, src_rgba: np.ndarray) -> np.ndarray:
    src_a = src_rgba[..., 3:4]
    src_rgb = src_rgba[..., :3]
    return src_rgb * src_a + dst_rgb * (1.0 - src_a)


def _iter_u_ranges(center_u: float, half_u: int, w: int):
    start = int(math.floor(center_u - half_u))
    end = int(math.ceil(center_u + half_u))
    if start < 0:
        yield (start + w, w)
        yield (0, end)
    elif end >= w:
        yield (start, w)
        yield (0, end - w)
    else:
        yield (start, end)


def compose_stickers_to_erp(
    state: dict,
    output_w: int,
    output_h: int,
    bg_erp: np.ndarray | None = None,
    base_dir: Path | None = None,
    quality: str = "export",
) -> np.ndarray:
    if bg_erp is not None:
        canvas = np.clip(bg_erp.astype(np.float32), 0.0, 1.0)
        if canvas.shape[0] != output_h or canvas.shape[1] != output_w:
            canvas = np.asarray(
                Image.fromarray((canvas * 255.0).astype(np.uint8)).resize((output_w, output_h), Image.BILINEAR),
                dtype=np.float32,
            ) / 255.0
    else:
        bg = _hex_to_rgb01(state.get("bg_color", "#00ff00"))
        canvas = np.ones((output_h, output_w, 3), dtype=np.float32) * bg[None, None, :]

    stickers = state.get("stickers", [])
    assets = state.get("assets", {})
    stickers_sorted = sorted(stickers, key=lambda s: float(s.get("z_index", 0)))

    for st in stickers_sorted:
        asset_id = st.get("asset_id")
        if asset_id not in assets:
            continue
        img = _load_asset_rgba(assets[asset_id], base_dir=base_dir)
        if img is None:
            continue

        yaw = float(st.get("yaw_deg", 0.0))
        pitch = float(st.get("pitch_deg", 0.0))
        h_fov = max(0.1, float(st.get("hFOV_deg", 20.0)))
        v_fov = max(0.1, float(st.get("vFOV_deg", 20.0)))
        rot = float(st.get("rot_deg", 0.0))
        crop = st.get("crop", {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})

        x0 = float(crop.get("x0", 0.0))
        y0 = float(crop.get("y0", 0.0))
        x1 = float(crop.get("x1", 1.0))
        y1 = float(crop.get("y1", 1.0))
        cx0 = max(0.0, min(1.0, min(x0, x1)))
        cy0 = max(0.0, min(1.0, min(y0, y1)))
        cx1 = max(0.0, min(1.0, max(x0, x1)))
        cy1 = max(0.0, min(1.0, max(y0, y1)))
        if cx1 - cx0 < 1e-6 or cy1 - cy0 < 1e-6:
            continue

        cdir = yaw_pitch_to_dir(yaw, pitch)
        right, up, fwd = orthonormal_basis_from_forward(cdir)

        max_fov = max(h_fov, v_fov)
        half_u = int(math.ceil(output_w * (max_fov / 360.0) * (1.5 if quality == "preview" else 1.2)))
        half_v = int(math.ceil(output_h * (max_fov / 180.0) * (1.5 if quality == "preview" else 1.2)))

        center_u = ((yaw / 360.0) + 0.5) * output_w
        center_v = (0.5 - (pitch / 180.0)) * output_h

        y_min = max(0, int(center_v - half_v))
        y_max = min(output_h, int(center_v + half_v))
        if y_max <= y_min:
            continue

        xs_lin = np.arange(output_w, dtype=np.float32) + 0.5
        ys_lin = np.arange(y_min, y_max, dtype=np.float32) + 0.5

        for ux0, ux1 in _iter_u_ranges(center_u, half_u, output_w):
            ux0 = max(0, ux0)
            ux1 = min(output_w, ux1)
            if ux1 <= ux0:
                continue

            xs = xs_lin[ux0:ux1]
            ys = ys_lin
            xg, yg = np.meshgrid(xs, ys)

            lon = (xg / output_w - 0.5) * (2.0 * math.pi)
            lat = (0.5 - yg / output_h) * math.pi
            dirs = np.stack([
                np.cos(lat) * np.sin(lon),
                np.sin(lat),
                np.cos(lat) * np.cos(lon),
            ], axis=-1).astype(np.float32)

            z = np.sum(dirs * fwd[None, None, :], axis=-1)
            front = z > 1e-6
            if not np.any(front):
                continue

            local_x = np.sum(dirs * right[None, None, :], axis=-1) / np.maximum(z, 1e-6)
            local_y = np.sum(dirs * up[None, None, :], axis=-1) / np.maximum(z, 1e-6)

            rr = -rot * DEG2RAD
            cr = math.cos(rr)
            sr = math.sin(rr)
            xr = local_x * cr - local_y * sr
            yr = local_x * sr + local_y * cr

            xn = xr / math.tan(h_fov * 0.5 * DEG2RAD)
            yn = yr / math.tan(v_fov * 0.5 * DEG2RAD)

            inside = front & (np.abs(xn) <= 1.0) & (np.abs(yn) <= 1.0)
            if not np.any(inside):
                continue

            su = (xn * 0.5 + 0.5)
            sv = (0.5 - yn * 0.5)
            su = cx0 + (cx1 - cx0) * su
            sv = cy0 + (cy1 - cy0) * sv

            ih, iw, _ = img.shape
            px = su * (iw - 1)
            py = sv * (ih - 1)
            rgba = _sample_rgba_bilinear(img, px, py)

            patch = canvas[y_min:y_max, ux0:ux1, :]
            blended = _alpha_over_straight(patch, rgba)
            patch[inside] = blended[inside]
            canvas[y_min:y_max, ux0:ux1, :] = patch

    return np.clip(canvas, 0.0, 1.0).astype(np.float32)
