from pathlib import Path
from types import SimpleNamespace

import numpy as np
import pytest
import torch


def test_progress_clamps_and_prefers_progress_bar_over_api_fallback():
    from comfyui_pano_suite.node_runtime import NodeRuntime

    progress_updates = []
    api_updates = []

    class ProgressBar:
        def __init__(self, total):
            assert total == 10.0

        def update_absolute(self, value, total):
            progress_updates.append((value, total))

    api_sync = SimpleNamespace(
        execution=SimpleNamespace(
            set_progress=lambda value, total, *, node_id: api_updates.append((value, total, node_id))
        )
    )
    runtime = NodeRuntime(progress_bar_factory=ProgressBar, api_sync=api_sync)

    progress = runtime.progress(42, 10, label="Example")
    progress.set(99)

    assert progress_updates == [(10.0, 10.0)]
    assert api_updates == []
    assert progress.value == 10.0
    assert progress.node_id == "42"


def test_manual_cache_store_applies_namespace_specific_eviction_rules():
    from comfyui_pano_suite.node_runtime import ManualCacheStore

    store = ManualCacheStore(
        stickers_bg_limit=1,
        video_limit=2,
    )
    first_background = np.zeros((1, 1, 1, 3), dtype=np.uint8)
    second_background = np.ones((1, 1, 1, 3), dtype=np.uint8)
    store.put("stickers_bg", ("first",), first_background)
    store.put("stickers_bg", ("second",), second_background)

    assert store.get("stickers_bg", ("first",)) is None
    assert store.get("stickers_bg", ("second",)) is second_background

def test_manual_cache_store_does_not_retain_cutout_node_outputs():
    from comfyui_pano_suite.node_runtime import ManualCacheStore

    store = ManualCacheStore()

    with pytest.raises(ValueError, match="Unknown cache namespace"):
        store.put(
            "cutout_output",
            ("cutout",),
            (
                np.zeros((1, 1, 1, 3), dtype=np.float32),
                np.zeros((1, 1), dtype=np.float32),
            ),
        )


def test_runtime_initializes_preview_with_first_frame_and_custom_contract_key():
    from comfyui_pano_suite.node_runtime import NodeRuntime

    saved = []

    def save_preview(images):
        saved.append(images)
        return {"ui": {"images": [{"filename": "preview.png", "type": "temp"}]}}

    runtime = NodeRuntime(preview_saver=save_preview)
    images = np.zeros((3, 2, 4, 3), dtype=np.float32)

    ui = runtime.init_preview(images, key="pano_sticker_input_images")

    assert len(saved) == 1
    assert saved[0].shape == (1, 2, 4, 3)
    assert np.shares_memory(saved[0], images)
    assert ui == {
        "pano_sticker_input_images": [{"filename": "preview.png", "type": "temp"}]
    }
    first_contract = runtime.preview_contract("stickers_output")
    first_contract["video"] = "changed"
    assert runtime.preview_contract("stickers_output") == {
        "image": "pano_input_images",
        "video": "pano_videos",
        "meta": "pano_video_meta",
    }


def test_runtime_appends_video_without_losing_uint8_or_audio_metadata():
    from comfyui_pano_suite.node_runtime import NodeRuntime

    encoded = []

    def encode_video(frames, fps, *, audio=None, progress_callback=None):
        encoded.append((frames, fps, audio, progress_callback))
        return Path("preview.mp4")

    def make_video_payload(path, fps, frame_count, **kwargs):
        return {
            kwargs["video_key"]: [{"filename": str(path)}],
            kwargs["meta_key"]: [{"fps": fps, "frame_count": frame_count}],
        }

    runtime = NodeRuntime(
        encode_video=encode_video,
        make_video_payload=make_video_payload,
    )
    frames = np.full((2, 2, 4, 3), 255, dtype=np.uint8)
    audio = {"waveform": np.ones((1, 4), dtype=np.float32), "sample_rate": 48_000}
    ui = {}

    runtime.append_video(
        ui,
        frames,
        24.0,
        audio,
        warning_key="warnings",
        video_key="videos",
        meta_key="meta",
    )

    assert encoded == [(frames, 24.0, audio, None)]
    assert encoded[0][0].dtype == np.uint8
    assert ui == {
        "videos": [{"filename": "preview.mp4"}],
        "meta": [{"fps": 24.0, "frame_count": 2, "has_audio": True}],
    }


def test_runtime_reuses_cached_video_for_the_exact_caller_supplied_key(tmp_path):
    from comfyui_pano_suite.node_runtime import ManualCacheStore, NodeRuntime

    encoded = []
    video_path = tmp_path / "cached.mp4"
    video_path.write_bytes(b"video")

    def encode_video(frames, fps, *, audio=None, progress_callback=None):
        encoded.append((frames, fps, audio, progress_callback))
        return video_path

    def make_video_payload(path, fps, frame_count, **kwargs):
        return {
            kwargs["video_key"]: [{"filename": path.name}],
            kwargs["meta_key"]: [{"frame_count": frame_count}],
        }

    store = ManualCacheStore()
    runtime = NodeRuntime(
        encode_video=encode_video,
        make_video_payload=make_video_payload,
        cache_store=store,
    )
    frames = np.zeros((2, 2, 4, 3), dtype=np.float32)
    key = ("cutout_video", ("render", 7), 24.0, ("no-audio",))

    first_ui = {}
    runtime.append_cached_video(
        first_ui,
        frames,
        24.0,
        None,
        cache_key=key,
        warning_key="warnings",
        video_key="videos",
        meta_key="meta",
    )
    second_ui = {}
    runtime.append_cached_video(
        second_ui,
        frames,
        24.0,
        None,
        cache_key=key,
        warning_key="warnings",
        video_key="videos",
        meta_key="meta",
    )

    assert len(encoded) == 1
    assert store.get("video", key) == video_path
    assert first_ui == second_ui == {
        "videos": [{"filename": "cached.mp4"}],
        "meta": [{"frame_count": 2, "has_audio": False}],
    }


def test_runtime_identity_helpers_track_tensor_object_and_in_place_version():
    from comfyui_pano_suite.node_runtime import NodeRuntime

    runtime = NodeRuntime()
    image = torch.zeros((2, 3, 4, 3), dtype=torch.float16)
    same_storage_view = image.view_as(image)
    waveform = torch.ones((1, 2, 8), dtype=torch.float32)
    same_storage_waveform = waveform.view_as(waveform)

    original_identity = runtime.tensor_identity(image)
    assert runtime.tensor_identity(image) == original_identity
    assert runtime.tensor_identity(same_storage_view) != original_identity

    image.add_(1)
    assert runtime.tensor_identity(image) != original_identity

    original_audio_signature = runtime.audio_signature(
        {"waveform": waveform, "sample_rate": 44_100}
    )
    assert runtime.audio_signature(
        {"waveform": waveform, "sample_rate": 44_100}
    ) == original_audio_signature
    assert runtime.audio_signature(
        {"waveform": same_storage_waveform, "sample_rate": 44_100}
    ) != original_audio_signature
    waveform.add_(1)
    assert runtime.audio_signature(
        {"waveform": waveform, "sample_rate": 44_100}
    ) != original_audio_signature
    assert runtime.audio_signature(None) == ("no-audio",)


def test_progress_falls_back_to_api_and_keeps_stage_messages_out_of_warning_logs():
    from comfyui_pano_suite.node_runtime import NodeRuntime

    api_updates = []
    debug_messages = []
    warning_messages = []

    class BrokenProgressBar:
        def __init__(self, total):
            pass

        def update_absolute(self, value, total):
            raise RuntimeError("bar unavailable")

    class Logger:
        def debug(self, template, *args):
            debug_messages.append(template % args)

        def warning(self, template, *args):
            warning_messages.append(template % args)

    runtime = NodeRuntime(
        progress_bar_factory=BrokenProgressBar,
        api_sync=SimpleNamespace(
            execution=SimpleNamespace(
                set_progress=lambda value, total, *, node_id: api_updates.append((value, total, node_id))
            )
        ),
        logger=Logger(),
    )
    progress = runtime.progress("node", 8, label="Render")

    progress.frame_callback(2, 4)(3, 2)
    progress.stage("Working")
    progress.stage("Working")
    progress.stage("  ")

    assert api_updates == [(6.0, 8.0, "node")]
    assert debug_messages == ["[Render] Working"]
    assert warning_messages == []


def test_video_failure_is_a_deduplicated_warning_and_single_frame_is_skipped():
    from comfyui_pano_suite.node_runtime import NodeRuntime

    calls = []

    def fail_encode(frames, fps, *, audio=None, progress_callback=None):
        calls.append(frames)
        raise RuntimeError("encoder unavailable")

    runtime = NodeRuntime(encode_video=fail_encode, make_video_payload=lambda *args, **kwargs: {})
    ui = {}

    runtime.append_video(
        ui,
        np.zeros((1, 2, 4, 3), dtype=np.float32),
        24.0,
        None,
        warning_key="warnings",
    )
    two_frames = np.zeros((2, 2, 4, 3), dtype=np.float32)
    runtime.append_video(ui, two_frames, 24.0, None, warning_key="warnings")
    runtime.append_video(ui, two_frames, 24.0, None, warning_key="warnings")

    assert calls == [two_frames, two_frames]
    assert ui == {"warnings": ["Video UI cache generation failed: encoder unavailable"]}


def test_video_cache_access_refreshes_lru_and_deletes_only_evicted_path(tmp_path):
    from comfyui_pano_suite.node_runtime import ManualCacheStore

    first = tmp_path / "first.mp4"
    second = tmp_path / "second.mp4"
    third = tmp_path / "third.mp4"
    for path in (first, second, third):
        path.write_bytes(b"video")
    store = ManualCacheStore(video_limit=2)
    store.put("video", ("first",), first)
    store.put("video", ("second",), second)

    assert store.get("video", ("first",)) == first
    store.put("video", ("third",), third)

    assert first.exists()
    assert not second.exists()
    assert third.exists()
