import binascii
import struct
import zlib
from pathlib import Path

import numpy as np


PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"
COLOR_TYPES = {1: 0, 3: 2}
PNG_FILTER_UP = 2


def _chunk(chunk_type: bytes, data: bytes) -> bytes:
    crc = binascii.crc32(data, binascii.crc32(chunk_type)) & 0xFFFFFFFF
    return struct.pack(">I", len(data)) + chunk_type + data + struct.pack(">I", crc)


def to_u16(values: np.ndarray) -> np.ndarray:
    return np.round(np.clip(values, 0.0, 1.0) * 65535.0).astype(np.uint16)


def write_png16(path: str | Path, values: np.ndarray) -> None:
    """Write a float image in [0, 1] as a 16-bit grayscale (H, W) or RGB (H, W, 3) PNG."""
    arr = to_u16(values)
    if arr.ndim == 2:
        arr = arr[..., None]
    h, w, channels = arr.shape
    rows = arr.astype(">u2").view(np.uint8).reshape(h, w * channels * 2)
    # Up filtering keeps the smooth synthetic fixtures small and stays vectorized.
    up = np.diff(rows, axis=0, prepend=np.zeros((1, rows.shape[1]), dtype=np.uint8))
    raw = np.concatenate([np.full((h, 1), PNG_FILTER_UP, dtype=np.uint8), up], axis=1).tobytes()
    ihdr = struct.pack(">IIBBBBB", w, h, 16, COLOR_TYPES[channels], 0, 0, 0)
    Path(path).write_bytes(
        PNG_SIGNATURE
        + _chunk(b"IHDR", ihdr)
        + _chunk(b"IDAT", zlib.compress(raw, level=9))
        + _chunk(b"IEND", b"")
    )


def read_png16(path: str | Path) -> np.ndarray:
    """Read a PNG written by write_png16 back to float32 in [0, 1]."""
    data = Path(path).read_bytes()
    if not data.startswith(PNG_SIGNATURE):
        raise ValueError(f"not a PNG: {path}")

    pos = len(PNG_SIGNATURE)
    header = None
    idat_parts = []
    while pos < len(data):
        size, chunk_type = struct.unpack(">I4s", data[pos : pos + 8])
        chunk_data = data[pos + 8 : pos + 8 + size]
        pos += 12 + size
        if chunk_type == b"IHDR":
            header = struct.unpack(">IIBBBBB", chunk_data)
        elif chunk_type == b"IDAT":
            idat_parts.append(chunk_data)
        elif chunk_type == b"IEND":
            break

    channels = {color_type: c for c, color_type in COLOR_TYPES.items()}.get(header[3]) if header else None
    if channels is None or header[2] != 16 or header[6] != 0:
        raise ValueError(f"expected a non-interlaced 16-bit grayscale or RGB PNG: {path}")
    w, h = header[0], header[1]
    raw = np.frombuffer(zlib.decompress(b"".join(idat_parts)), dtype=np.uint8).reshape(h, 1 + w * channels * 2)
    if np.any(raw[:, 0] != PNG_FILTER_UP):
        raise ValueError(f"expected Up-filtered rows as written by write_png16: {path}")
    rows = np.cumsum(raw[:, 1:], axis=0, dtype=np.uint8)
    values = rows.view(">u2").reshape(h, w, channels).astype(np.float32) / 65535.0
    return values[..., 0] if channels == 1 else values
