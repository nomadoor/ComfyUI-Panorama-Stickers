"""The one cache across executions is bounded by bytes, holds 8-bit sources as uint8, and copies nothing."""
import base64
import io
import json

import numpy as np
import pytest
import torch
from PIL import Image

pytest.importorskip("comfy_api.latest", reason="ComfyUI's real V3 API is required")

import folder_paths

from comfyui_pano_suite import nodes
from comfyui_pano_suite.comfy_image_resolver import resolve_painting_layer_payload
from comfyui_pano_suite.core import cache as cache_module
from comfyui_pano_suite.core.cache import CACHE, MemoryCache, nbytes
from comfyui_pano_suite.core.cutout import build_cutout_sampling_map
from comfyui_pano_suite.core.math import unit_float
from comfyui_pano_suite.core.painting import render_painting_to_erp
from comfyui_pano_suite.core.render import Projection, RenderLayer, SceneSources, StickerSource, render_frame
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.core.stickers import load_source_rgba
from tools.bake_legacy_goldens import _painting, _stroke


def _array(megabytes: int) -> np.ndarray:
    return np.zeros(megabytes * 1024 ** 2, dtype=np.uint8)


def test_the_cache_evicts_the_least_recent_entries_past_its_bytes():
    cache = MemoryCache(max_bytes=3 * 1024 ** 2)
    first, second, third = _array(1), _array(1), _array(2)
    cache.put("a", 1, first)
    cache.put("b", 2, second)
    assert cache.get("a", 1) is first
    cache.put("a", 3, third)

    assert cache.get("b", 2) is None
    assert cache.get("a", 1) is first and cache.get("a", 3) is third
    assert cache.bytes == 3 * 1024 ** 2


def test_the_limit_is_a_share_of_the_free_ram_counting_what_is_held():
    free = [8 * 1024 ** 2]
    cache = MemoryCache(max_bytes=1024 ** 3, free_share=0.25, free_memory=lambda: free[0])
    assert cache.limit() == 2 * 1024 ** 2
    cache.put("a", 1, _array(1))
    free[0] -= 1024 ** 2
    assert cache.limit() == 2 * 1024 ** 2
    cache.put("a", 2, _array(2))
    assert cache.get("a", 1) is None and cache.bytes == 2 * 1024 ** 2


def test_a_value_larger_than_the_limit_is_returned_but_not_kept():
    cache = MemoryCache(max_bytes=1024 ** 2)
    value = _array(2)

    assert cache.put("a", 1, value) is value
    assert cache.get("a", 1) is None and cache.bytes == 0


def test_kept_arrays_are_read_only_and_not_copied():
    pair = (np.zeros((2, 2), np.float32), np.ones((2, 2), np.float32))
    kept = CACHE.put("test", 1, pair)

    assert kept is pair and CACHE.get("test", 1) is pair
    with pytest.raises(ValueError):
        pair[0][0, 0] = 1.0


def test_nbytes_counts_the_tensors_of_a_splat():
    splat = nodes.Types.SPLAT(torch.zeros(1, 10, 3), torch.zeros(1, 10, 3), torch.zeros(1, 10, 4), torch.zeros(1, 10, 1), torch.zeros(1, 10, 1, 3))

    assert nbytes(splat) == 10 * (3 + 3 + 4 + 1 + 3) * 4
    assert nbytes((np.zeros(4, np.uint8), {"a": torch.zeros(2)}, "text")) == 4 + 8


def _png(rgba: np.ndarray) -> bytes:
    buffer = io.BytesIO()
    Image.fromarray(rgba, "RGBA").save(buffer, format="PNG")
    return buffer.getvalue()


def _image(height=6, width=8):
    return np.random.default_rng(1).integers(0, 256, (height, width, 4), dtype=np.uint8)


def test_a_data_url_source_is_kept_as_its_uint8_pixels_once():
    image = _image()
    source = {"kind": "file", "data_url": "data:image/png;base64," + base64.b64encode(_png(image)).decode()}

    first = load_source_rgba(source)
    second = load_source_rgba(dict(source))

    assert first.dtype == np.uint8 and np.array_equal(first, image)
    assert second is first and not first.flags.writeable
    # The URL itself is not kept as a key.
    assert all(len(str(key)) < 200 for key in CACHE._entries)


def test_a_file_source_is_read_once_per_version(tmp_path, monkeypatch):
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(tmp_path))
    image = _image()
    (tmp_path / "s.png").write_bytes(_png(image))
    source = {"kind": "file", "filename": "s.png", "subfolder": "", "storage": "input"}

    first = load_source_rgba(source)
    assert load_source_rgba(source) is first and np.array_equal(first, image)
    (tmp_path / "s.png").write_bytes(_png(255 - image))
    assert np.array_equal(load_source_rgba(source), 255 - image)


def test_uploaded_paint_stays_uint8_until_it_is_drawn(tmp_path, monkeypatch):
    monkeypatch.setattr(folder_paths, "get_temp_directory", lambda: str(tmp_path))
    image = _image(4, 8)
    (tmp_path / "paint.png").write_bytes(_png(image))
    (tmp_path / "mask.png").write_bytes(_png(image[..., ::-1].copy()))
    asset = {"type": "comfy_image", "filename": "paint.png", "subfolder": "", "storage": "temp"}

    payload = resolve_painting_layer_payload({"paint": asset, "mask": {**asset, "filename": "mask.png"}})

    assert payload["paint"].dtype == np.uint8 and np.array_equal(payload["paint"], image)
    assert payload["mask"].dtype == np.uint8 and np.array_equal(payload["mask"], image[..., 0])
    resized = resolve_painting_layer_payload({"paint": asset}, erp_width=16, erp_height=8)
    assert resized["paint"].dtype == np.uint8 and resized["paint"].shape == (8, 16, 4)


def _sky_state():
    return load_scene_state({"version": 2, "stickers": [{"id": "s", "source": {"kind": "port"}, "direction": {"value": {"yaw_deg": 10.0, "pitch_deg": 5.0}},
                                                          "size": {"value": {"hFOV_deg": 70.0, "vFOV_deg": 50.0}}}]})


@pytest.mark.parametrize("projection", [Projection.erp(128, 64), Projection.perspective(64, 48, 80.0)])
def test_an_8bit_source_draws_exactly_as_its_float_values(projection):
    state = _sky_state()
    evaluated = evaluate_scene_state(state, 0)
    image = _image(20, 30)
    camera = {**evaluated["camera"], "yaw_deg": 0.0} if evaluated["camera"] else {"position": [0, 0, 0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}

    def draw(rgba):
        sources = SceneSources({"s": StickerSource(rgba, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, state["painting"])
        return render_frame([RenderLayer(evaluated, sources)], camera, projection, bg=None, bg_color=(0.0, 1.0, 0.0), device=torch.device("cpu"))[0]

    assert torch.equal(draw(image), draw(unit_float(image)))


def test_painting_render_is_shared_and_read_only():
    painting = _painting(paint=[_stroke("a", "paint", [(0.2, 0.5), (0.4, 0.5)], 10, {"r": 1.0, "g": 0.1, "b": 0.1, "a": 1.0})])

    first = render_painting_to_erp(painting, 64, 32)
    second = render_painting_to_erp(painting, 64, 32)

    assert first[0][..., 3].any()
    assert second is first and not first[0].flags.writeable


def test_cutout_sampling_map_is_shared_and_read_only():
    first = build_cutout_sampling_map((32, 64), 10.0, 0.0, 90.0, 60.0, 0.0, 16, 12)

    assert build_cutout_sampling_map((32, 64), 10.0, 0.0, 90.0, 60.0, 0.0, 16, 12) is first
    assert not first["u"].flags.writeable


def test_legacy_stickers_keeps_no_background_batch():
    nodes.PanoramaStickersNode.execute("256", "360", "#00ff00", json.dumps({"version": 1, "stickers": []}), bg_erp=torch.rand(3, 32, 64, 3))

    assert not [key for key in CACHE._entries if key[0] == "stickers_bg"]
    assert CACHE.bytes == 0


def test_the_default_limit_is_documented_constants():
    assert cache_module.CACHE_MAX_BYTES == 4 * 1024 ** 3 and cache_module.CACHE_FREE_SHARE == 0.25


def test_a_video_index_counts_its_presentation_times(tmp_path):
    from comfyui_pano_suite.core.video_source import scan_video
    from test_stickers_scene_video import _cfr

    index = scan_video(_cfr(tmp_path, count=6).get_stream_source(), 0, 0, "bg_media")

    assert index.pts.dtype == np.int64
    assert nbytes(index) == index.pts.nbytes + index.first_frame.numel() * 4
    assert len(index.times()) == 6


def test_sampling_a_read_only_erp_warns_nothing():
    import warnings

    from comfyui_pano_suite.core.cutout import sample_cutout_from_sampling_map

    erp = CACHE.put("test", 1, np.zeros((32, 64, 3), np.float32))
    sampling_map = build_cutout_sampling_map((32, 64), 0.0, 0.0, 90.0, 60.0, 0.0, 16, 12)
    with warnings.catch_warnings():
        warnings.simplefilter("error")
        sample_cutout_from_sampling_map(erp, sampling_map)
