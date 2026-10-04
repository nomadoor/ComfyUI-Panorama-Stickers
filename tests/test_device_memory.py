"""The device and its free memory come from ComfyUI's model management, and a render pass asks it for room first."""
import json

import pytest
import torch

pytest.importorskip("comfy_api.latest", reason="ComfyUI's real V3 API is required")

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.cache import nbytes
from comfyui_pano_suite.nodes import RENDER_FLOATS_PER_PIXEL, PanoramaStickersNode, PanoramaStickersSceneNode


def _record_free_memory(monkeypatch, device=torch.device("cpu")):
    """Run the render on `device` (the CPU, so no GPU is used) while ComfyUI reports it as a GPU."""
    calls = []
    monkeypatch.setattr(nodes.comfy.model_management, "get_torch_device", lambda: device)
    monkeypatch.setattr(nodes.comfy.model_management, "is_device_cpu", lambda value: False)
    monkeypatch.setattr(nodes.comfy.model_management, "free_memory", lambda required, value, *args, **kwargs: calls.append((required, value)))
    return calls


def test_each_render_pass_frees_its_estimate_once(monkeypatch):
    calls = _record_free_memory(monkeypatch)
    sticker = torch.rand(1, 40, 30, 4)
    bg = torch.rand(3, 64, 128, 3)

    result = PanoramaStickersSceneNode.execute("#00ff00", "360", "256", "", bg_media=bg, sticker=sticker).result

    assert len(calls) == 1
    required, device = calls[0]
    assert device == torch.device("cpu")
    pixels = 256 * 128
    sources = 64 * 128 * 3 * 4 + 40 * 30 * 4 * 4
    assert required == pixels * RENDER_FLOATS_PER_PIXEL * 4 + sources * nodes.DEVICE_SOURCE_FACTOR
    result[2].get_components()
    assert len(calls) == 2


def test_the_estimate_counts_the_3d_media(monkeypatch, tmp_path):
    calls = _record_free_memory(monkeypatch)
    splat = nodes.Types.SPLAT(torch.zeros(1, 50, 3), torch.full((1, 50, 3), 0.01), torch.tensor([[[1.0, 0, 0, 0]]]).expand(1, 50, 4),
                              torch.zeros(1, 50, 1), torch.zeros(1, 50, 1, 3))

    PanoramaStickersSceneNode.execute("#00ff00", "360", "256", "", scene=splat)

    assert calls[0][0] == 256 * 128 * RENDER_FLOATS_PER_PIXEL * 4 + nbytes(splat)


def test_cpu_renders_do_not_free_device_memory(monkeypatch):
    calls = []
    monkeypatch.setattr(nodes.comfy.model_management, "get_torch_device", lambda: torch.device("cpu"))
    monkeypatch.setattr(nodes.comfy.model_management, "free_memory", lambda *args, **kwargs: calls.append(args))

    PanoramaStickersSceneNode.execute("#00ff00", "360", "256", json.dumps({"version": 2}))

    assert calls == []


def test_legacy_stickers_chunks_by_comfys_free_memory(monkeypatch):
    seen = []
    monkeypatch.setattr(nodes.comfy.model_management, "get_torch_device", lambda: torch.device("cpu"))

    def chunk_size(batch_size, out_h, out_w, device, **kwargs):
        seen.append(device)
        return 1

    monkeypatch.setattr(nodes, "_estimate_sticker_chunk_size", chunk_size)
    PanoramaStickersNode.execute("256", "360", "#00ff00", json.dumps({"version": 1, "stickers": []}), bg_erp=torch.rand(2, 32, 64, 3))

    # The legacy path follows ComfyUI's device instead of picking CUDA by itself.
    assert seen == [torch.device("cpu")]


def test_legacy_chunk_size_reads_free_memory_from_comfy(monkeypatch):
    monkeypatch.setattr(nodes.comfy.model_management, "is_device_cpu", lambda device: False)
    monkeypatch.setattr(nodes.comfy.model_management, "get_free_memory", lambda device: 10 * (64 * 32 * 16 * 2 * 2) / 0.45)

    assert nodes._estimate_sticker_chunk_size(100, 32, 64, torch.device("cuda")) == 10
    assert nodes._estimate_sticker_chunk_size(4, 32, 64, torch.device("cuda")) == 4


def test_legacy_stickers_does_not_empty_the_cache_per_chunk(monkeypatch):
    emptied = []
    monkeypatch.setattr(nodes.comfy.model_management, "get_torch_device", lambda: torch.device("cpu"))
    monkeypatch.setattr(torch.cuda, "empty_cache", lambda: emptied.append(1))
    monkeypatch.setattr(nodes, "_estimate_sticker_chunk_size", lambda *args, **kwargs: 1)

    PanoramaStickersNode.execute("256", "360", "#00ff00", json.dumps({"version": 1, "stickers": []}), bg_erp=torch.rand(3, 32, 64, 3))

    assert emptied == []
