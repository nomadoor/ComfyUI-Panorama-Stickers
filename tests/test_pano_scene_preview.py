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
import folder_paths
from comfy_api.latest import InputImpl

from comfyui_pano_suite import nodes, sticker_media
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaPreviewSceneNode, PanoramaStickersSceneNode, PanoSceneValue


STATE = {
    "version": 2,
    "timeline": {"fps": 30.0},
    "camera": {"rotation": {"keyframes": [
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

    video, pano_scene = _stickers(bg_media=bg, sticker=sticker)[2:]

    assert isinstance(pano_scene, PanoSceneValue)
    expected_state = load_scene_state(json.dumps(STATE))
    assert pano_scene.state["camera"] == expected_state["camera"]
    assert pano_scene.state["timeline"] == expected_state["timeline"]
    assert [item["source"]["kind"] for item in pano_scene.state["stickers"]] == ["port"]
    assert pano_scene.bg_media is bg
    assert pano_scene.scene is None
    assert pano_scene.coverage == 180
    assert pano_scene.bg_color == (1.0, 0.0, 0.0)
    assert pano_scene.fps == float(video.get_frame_rate()) == 30.0
    assert pano_scene.frames == ((0.0, 0, 0, None), (1.0, 1, 0, None), (2.0, 2, 0, None))
    assert pano_scene.port.media is sticker
    port_id = pano_scene.state["stickers"][0]["id"]
    assert np.array_equal(pano_scene.sources.stickers[port_id].rgba[..., :3], sticker[0].numpy())


def test_pano_scene_state_is_plain_json_without_a_nested_scene():
    pano_scene = _stickers()[3]

    assert json.loads(json.dumps(pano_scene.state)) == pano_scene.state
    for value in vars(pano_scene).values():
        assert not isinstance(value, PanoSceneValue)
    assert pano_scene.port is None
    # The Keyframes of the state's Camera do not set the length of Stickers (ADR 0028).
    assert pano_scene.frames == ((0.0, None, None, None),)


def test_pano_scene_keeps_the_video_handle_as_given(tmp_path):
    video = _video(tmp_path)

    output, pano_scene = _stickers({"version": 2}, bg_media=video)[2:]

    assert pano_scene.bg_media is video
    assert pano_scene.fps == float(output.get_frame_rate()) == 25.0
    assert len(pano_scene.frames) == output.get_frame_count() == 4
    assert [bg_index for _frame, bg_index, _port_index, _scene_index in pano_scene.frames] == [0, 1, 2, 3]


def test_pano_scene_is_the_same_for_identical_inputs():
    bg = _solid([0.5, 0.5, 0.5], batch=2)
    sticker = _solid([0.0, 0.0, 1.0])

    first = _stickers(bg_media=bg, sticker=sticker)[3]
    second = _stickers(bg_media=bg, sticker=sticker)[3]

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
    pano_scene = _stickers(bg_media=_solid([0.5, 0.5, 0.5], batch=3))[3]

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


def _stickers_ui(state=STATE, **inputs):
    inputs.setdefault("bg_color", "#ff0000")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_preset", "1024")
    return PanoramaStickersSceneNode.execute(state_json=json.dumps(state), **inputs).ui


def _ui_mp4(ui, key, tmp_path):
    entry = ui[key][0]
    return tmp_path / entry["subfolder"] / entry["filename"]


def test_stickers_ui_shows_an_image_background_and_an_image_sticker():
    ui = _stickers_ui(bg_media=_solid([0.5, 0.5, 0.5]), sticker=_solid([0.0, 0.0, 1.0]))

    assert ui["pano_input_images"]
    assert ui["pano_sticker_input_images"]
    assert "pano_input_videos" not in ui
    assert "pano_sticker_input_videos" not in ui


def test_stickers_ui_has_no_media_without_inputs():
    ui = _stickers_ui()

    assert not any(key.startswith(("pano_input", "pano_sticker_input")) for key in ui)


def test_stickers_ui_encodes_image_batches_at_the_timeline_fps(tmp_path):
    ui = _stickers_ui(bg_media=_solid([0.5, 0.5, 0.5], batch=3), sticker=_solid([0.0, 0.0, 1.0], batch=2))

    assert ui["pano_input_video_meta"][0]["fps"] == 30.0
    assert ui["pano_input_video_meta"][0]["frames"] == 3
    assert ui["pano_sticker_input_images"]
    assert ui["pano_sticker_input_video_meta"][0]["fps"] == 30.0
    with av.open(str(_ui_mp4(ui, "pano_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 3
    with av.open(str(_ui_mp4(ui, "pano_sticker_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 2


def test_stickers_ui_saves_video_media_without_reading_it_whole(tmp_path, monkeypatch):
    bg = _video(tmp_path, count=30, audio_rate=8000)
    sticker = _video(tmp_path, count=12)

    def fail(self):
        raise AssertionError("Stickers must not read a whole VIDEO for its ui")

    monkeypatch.setattr(InputImpl.VideoFromFile, "get_components", fail)
    ui = _stickers_ui({"version": 2}, bg_media=bg, sticker=sticker)

    assert ui["pano_input_images"]
    assert ui["pano_input_video_meta"][0] == {"fps": 25.0, "frames": 30, "duration": 1.2, "has_audio": True}
    assert ui["pano_sticker_input_images"]
    assert ui["pano_sticker_input_video_meta"][0]["frames"] == 12
    with av.open(str(_ui_mp4(ui, "pano_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 30
        assert container.streams.audio
    with av.open(str(_ui_mp4(ui, "pano_sticker_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 12


def test_stickers_ui_makes_the_background_mp4_once_per_input(tmp_path, monkeypatch):
    encoded = []
    encode_editor_mp4 = nodes.encode_editor_mp4
    monkeypatch.setattr(nodes, "encode_editor_mp4", lambda opened: encoded.append(opened) or encode_editor_mp4(opened))
    video = _video(tmp_path, count=6)
    images = _solid([0.5, 0.5, 0.5], batch=3)

    first = [_stickers_ui(bg_media=media) for media in (video, images)]
    moved = {**STATE, "camera": {"rotation": {"value": {"yaw_deg": 30.0}}}}
    second = [_stickers_ui(moved, bg_media=media) for media in (video, images)]
    reloaded = _stickers_ui(bg_media=InputImpl.VideoFromFile(video.get_stream_source()))

    assert len(encoded) == 2
    assert [ui["pano_input_videos"] for ui in first] == [ui["pano_input_videos"] for ui in second]
    assert reloaded["pano_input_videos"] == first[0]["pano_input_videos"]


def test_stickers_ui_opens_the_background_video_file_once(tmp_path, monkeypatch):
    opened = []
    coded_size = sticker_media.coded_size
    for module in (sticker_media, nodes):
        monkeypatch.setattr(module, "coded_size", lambda source: opened.append(source) or coded_size(source), raising=False)
    video = _video(tmp_path, count=6)

    _stickers_ui(bg_media=video)
    _stickers_ui(bg_media=video)

    assert opened == [video.get_stream_source()] * 2


def test_stickers_ui_reports_warnings(tmp_path, monkeypatch):
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(tmp_path))
    state = {"version": 2, "stickers": [{"id": "missing", "source": {"kind": "file", "filename": "missing.png"}}]}

    ui = _stickers_ui(state, output_preset="auto")

    assert ui["pano_sticker_warnings"] == [
        "Could not read the source of Sticker missing; it is not drawn.",
        "Output preset is auto, but bg_media is not connected; using 2048 instead.",
    ]


def test_stickers_ui_reports_the_pose_of_an_added_port_sticker():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 40, "pitch_deg": -10, "roll_deg": 5, "hFOV_deg": 50}})

    added = _stickers_ui({"version": 2}, sticker=_solid([0.0, 0.0, 1.0]), sticker_state=sticker_state)
    stored = _stickers_ui(
        {"version": 2, "stickers": [{"id": "sticker_1", "source": {"kind": "port"}}]},
        sticker=_solid([0.0, 0.0, 1.0]),
        sticker_state=sticker_state,
    )

    assert added["pano_sticker_input_pose"] == [{
        "yaw_deg": 40.0, "pitch_deg": -10.0, "roll_deg": 5.0, "hFOV_deg": 50.0,
        "keyframes": {"direction": [], "roll": [], "size": []},
    }]
    assert "pano_sticker_input_pose" not in stored


def test_stickers_ui_reports_the_timeline_fps_a_video_sets(tmp_path):
    video = _video(tmp_path, count=3)

    assert _stickers_ui(bg_media=video)["pano_timeline_fps"] == [25.0]
    assert _stickers_ui(sticker=video)["pano_timeline_fps"] == [25.0]
    assert "pano_timeline_fps" not in _stickers_ui(bg_media=_solid([0.0, 0.0, 1.0], batch=3), sticker=_solid([1.0, 0.0, 0.0]))


def test_stickers_ui_reports_the_keyframes_of_a_port_sticker_added_from_a_moving_camera():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": 24.0, "camera": {
        "rotation": [{"frame": 0, "value": {"yaw_deg": 0.0}}, {"frame": 2, "value": {"yaw_deg": 20.0}}],
    }})

    ui = _stickers_ui({"version": 2}, sticker=_solid([0.0, 0.0, 1.0]), sticker_state=sticker_state)

    (pose,) = ui["pano_sticker_input_pose"]
    port = load_scene_state({"version": 2, "stickers": [{"id": "p", "source": {"kind": "port"}, "direction": {"keyframes": pose["keyframes"]["direction"]}}]})["stickers"][0]
    assert [key["frame"] for key in port["direction"]["keyframes"]] == [0, 1, 2]
    assert port["direction"]["keyframes"][2]["value"] == {"yaw_deg": 20.0, "pitch_deg": 0.0}
    assert (pose["keyframes"]["roll"], pose["keyframes"]["size"]) == ([], [])
