import json
from fractions import Fraction

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Stickers and Preview nodes",
)

import av
from comfy_api.latest import InputImpl

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaPreviewSceneNode, PanoramaStickersSceneNode, PanoSceneValue


STATE = {
    "version": 2,
    "timeline": {"fps": 30.0},
    "camera": {"transform": {"keyframes": [
        {"frame": 0, "value": {"yaw_deg": 0.0}},
        {"frame": 5, "value": {"yaw_deg": 90.0}},
    ]}},
}


def _stickers(state=STATE, **inputs):
    inputs.setdefault("bg_color", "#ff0000")
    inputs.setdefault("coverage", "180")
    inputs.setdefault("output_preset", "1024")
    return PanoramaStickersSceneNode.execute(state_json=json.dumps(state), **inputs).result


def _solid(rgb, height=4, width=8, batch=1):
    return torch.tensor(rgb, dtype=torch.float32).expand(batch, height, width, 3).clone()


def _video(tmp_path, count=4, audio_rate=None):
    path = tmp_path / f"bg_{count}.mkv"
    with av.open(str(path), "w") as container:
        stream = container.add_stream("libx264", rate=25)
        stream.width, stream.height, stream.pix_fmt = 64, 32, "yuv444p"
        stream.options = {"qp": "0"}
        audio = container.add_stream("pcm_s16le", rate=audio_rate, layout="mono") if audio_rate else None
        for index in range(count):
            frame = av.VideoFrame.from_ndarray(np.full((32, 64, 3), index * 20 % 256, np.uint8), format="rgb24")
            frame.pts, frame.time_base = index * 40, Fraction(1, 1000)
            for packet in stream.encode(frame):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
        if audio is not None:
            samples = np.arange(audio_rate * count // 25, dtype=np.int16).reshape(1, -1) % 1000
            frame = av.AudioFrame.from_ndarray(samples, format="s16", layout="mono")
            frame.sample_rate, frame.pts = audio_rate, 0
            for packet in [*audio.encode(frame), *audio.encode()]:
                container.mux(packet)
    return InputImpl.VideoFromFile(str(path))


def _mp4(output, tmp_path):
    entry = output.ui["pano_videos"][0]
    return tmp_path / entry["subfolder"] / entry["filename"]


def test_pano_scene_binds_the_loaded_state_the_inputs_and_the_timeline():
    bg = _solid([0.5, 0.5, 0.5], batch=3)
    sticker = _solid([0.0, 0.0, 1.0])

    fps, pano_scene = _stickers(bg_media=bg, sticker=sticker)[3:]

    assert isinstance(pano_scene, PanoSceneValue)
    expected_state = load_scene_state(json.dumps(STATE))
    assert pano_scene.state["camera"] == expected_state["camera"]
    assert pano_scene.state["timeline"] == expected_state["timeline"]
    assert [item["source"]["kind"] for item in pano_scene.state["stickers"]] == ["port"]
    assert pano_scene.bg_media is bg
    assert pano_scene.scene is None
    assert pano_scene.coverage == 180
    assert pano_scene.bg_color == (1.0, 0.0, 0.0)
    assert pano_scene.fps == fps == 30.0
    assert pano_scene.frames == ((0.0, 0, 0, None), (1.0, 1, 0, None), (2.0, 2, 0, None))
    assert pano_scene.port.media is sticker
    port_id = pano_scene.state["stickers"][0]["id"]
    assert np.array_equal(pano_scene.sources.stickers[port_id].rgba[..., :3], sticker[0].numpy())


def test_pano_scene_state_is_plain_json_without_a_nested_scene():
    pano_scene = _stickers()[4]

    assert json.loads(json.dumps(pano_scene.state)) == pano_scene.state
    for value in vars(pano_scene).values():
        assert not isinstance(value, PanoSceneValue)
    assert pano_scene.port is None
    assert pano_scene.frames == tuple((float(frame), None, None, None) for frame in range(6))


def test_pano_scene_keeps_the_video_handle_as_given(tmp_path):
    video = _video(tmp_path)

    image, _mask, _audio, fps, pano_scene = _stickers({"version": 2}, bg_media=video)

    assert pano_scene.bg_media is video
    assert pano_scene.fps == fps == 25.0
    assert len(pano_scene.frames) == image.shape[0] == 4
    assert [bg_index for _frame, bg_index, _port_index, _scene_index in pano_scene.frames] == [0, 1, 2, 3]


def test_pano_scene_is_the_same_for_identical_inputs():
    bg = _solid([0.5, 0.5, 0.5], batch=2)
    sticker = _solid([0.0, 0.0, 1.0])

    first = _stickers(bg_media=bg, sticker=sticker)[4]
    second = _stickers(bg_media=bg, sticker=sticker)[4]

    assert first.state == second.state
    assert (first.fps, first.frames, first.coverage, first.bg_color) == (second.fps, second.frames, second.coverage, second.bg_color)
    assert first.sources.stickers.keys() == second.sources.stickers.keys()
    for sticker_id, source in first.sources.stickers.items():
        assert np.array_equal(source.rgba, second.sources.stickers[sticker_id].rgba)


def _preview(source):
    return PanoramaPreviewSceneNode.execute(source=source, coverage="360")


def test_preview_passes_an_image_through_with_the_legacy_ui():
    image = _solid([0.2, 0.4, 0.6], batch=3)

    output = _preview(image)

    assert output.result[0] is image
    assert output.ui["pano_input_images"]
    assert output.ui["pano_video_meta"][0]["fps"] == 24.0
    assert output.ui["pano_video_meta"][0]["frames"] == 3


def test_preview_passes_a_video_through_with_the_timeline_fps(tmp_path):
    video = _video(tmp_path)

    output = _preview(video)

    assert output.result[0] is video
    assert output.ui["pano_input_images"]
    assert output.ui["pano_video_meta"][0]["fps"] == 25.0
    assert output.ui["pano_video_meta"][0]["frames"] == 4
    assert output.ui["pano_video_meta"][0]["has_audio"] is False


def test_preview_video_keeps_its_audio(tmp_path):
    output = _preview(_video(tmp_path, count=10, audio_rate=8000))

    assert output.ui["pano_video_meta"][0]["has_audio"] is True
    with av.open(str(_mp4(output, tmp_path))) as container:
        assert container.streams.audio
        assert container.streams.video[0].frames == 10


def test_preview_video_does_not_read_all_frames_into_memory(tmp_path, monkeypatch):
    video = _video(tmp_path, count=120)

    def fail(self):
        raise AssertionError("Preview must not read the whole VIDEO")

    monkeypatch.setattr(InputImpl.VideoFromFile, "get_components", fail)
    output = _preview(video)

    assert output.result[0] is video
    assert output.ui["pano_input_images"]
    assert output.ui["pano_video_meta"][0]["frames"] == 120
    with av.open(str(_mp4(output, tmp_path))) as container:
        assert container.streams.video[0].frames == 120


def test_preview_rejects_a_source_of_another_type():
    with pytest.raises(TypeError, match="IMAGE, a VIDEO, or a PANO_SCENE"):
        _preview(torch.zeros((1, 4, 8)))


def test_preview_passes_a_pano_scene_through_without_rendering(monkeypatch):
    pano_scene = _stickers(bg_media=_solid([0.5, 0.5, 0.5], batch=3))[4]

    def fail(*args, **kwargs):
        raise AssertionError("Preview must not render a PANO_SCENE")

    monkeypatch.setattr(nodes, "render_frame", fail)
    monkeypatch.setattr(nodes, "evaluate_scene_state", fail)
    output = _preview(pano_scene)

    assert output.result[0] is pano_scene
    assert not output.ui


def test_preview_decides_its_timeline_with_the_stickers_rules(monkeypatch, tmp_path):
    decided = []
    original = nodes._decide_timeline

    def recording(state, bg, port):
        result = original(state, bg, port)
        decided.append(result[0])
        return result

    monkeypatch.setattr(nodes, "_decide_timeline", recording)
    _preview(_solid([0.2, 0.4, 0.6], batch=2))
    _preview(_video(tmp_path))

    assert decided == [24.0, 25.0]
