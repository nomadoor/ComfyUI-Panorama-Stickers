import json
from fractions import Fraction

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio and Preview nodes",
)

import av
import folder_paths
from comfy_api.latest import InputImpl

from comfyui_pano_suite import nodes, sticker_media
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import PanoramaPreviewSceneNode, PanoramaStudioNode, PanoSceneValue
from scene_test_helpers import output_size


STATE = {"version": 2, "timeline": {"fps": 30.0}}


def _studio(state=STATE, **inputs):
    """Panorama Studio's outputs: scene, first_frame, first_frame_mask, video, sticker_state."""
    inputs.setdefault("background_color", "#ff0000")
    inputs.setdefault("background_range", "180")
    if "megapixels" not in inputs:
        inputs.update(output_size(64))
    return PanoramaStudioNode.execute(state_json=json.dumps(state), **inputs).result


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

    pano_scene, _image, _mask, video, _sticker_state = _studio(background=bg, sticker=sticker)

    assert isinstance(pano_scene, PanoSceneValue)
    expected_state = load_scene_state(json.dumps(STATE))
    assert pano_scene.layers[-1].state["camera"] is None
    assert pano_scene.layers[-1].state["timeline"] == expected_state["timeline"]
    assert [item["source"]["kind"] for item in pano_scene.layers[-1].state["stickers"]] == ["port"]
    assert pano_scene.bg_media is bg
    assert pano_scene.layers[-1].scene is None
    assert pano_scene.coverage == 180
    assert pano_scene.bg_color == (1.0, 0.0, 0.0)
    assert pano_scene.fps == float(video.get_frame_rate()) == 30.0
    assert pano_scene.frames == ((0, ((0.0, 0, None),)), (1, ((1.0, 0, None),)), (2, ((2.0, 0, None),)))
    assert pano_scene.layers[-1].port.media is sticker
    port_id = pano_scene.layers[-1].state["stickers"][0]["id"]
    assert np.array_equal(pano_scene.layers[-1].sources.stickers[port_id].rgba[..., :3], sticker[0].numpy())


def test_pano_scene_state_is_plain_json_without_a_nested_scene():
    pano_scene = _studio()[0]

    assert json.loads(json.dumps(pano_scene.layers[-1].state)) == pano_scene.layers[-1].state
    for value in vars(pano_scene).values():
        assert not isinstance(value, PanoSceneValue)
    assert pano_scene.layers[-1].port is None
    assert pano_scene.frames == ((None, ((0.0, None, None),)),)


def test_pano_scene_keeps_the_video_handle_as_given(tmp_path):
    video = _video(tmp_path)

    pano_scene, _image, _mask, output, _sticker_state = _studio({"version": 2}, background=video)

    assert pano_scene.bg_media is video
    assert pano_scene.fps == float(output.get_frame_rate()) == 25.0
    assert len(pano_scene.frames) == output.get_frame_count() == 4
    assert [bg_index for bg_index, _layers in pano_scene.frames] == [0, 1, 2, 3]


def test_pano_scene_is_the_same_for_identical_inputs():
    bg = _solid([0.5, 0.5, 0.5], batch=2)
    sticker = _solid([0.0, 0.0, 1.0])

    first = _studio(background=bg, sticker=sticker)[0]
    second = _studio(background=bg, sticker=sticker)[0]

    assert first.layers[-1].state == second.layers[-1].state
    assert (first.fps, first.frames, first.coverage, first.bg_color) == (second.fps, second.frames, second.coverage, second.bg_color)
    assert first.layers[-1].sources.stickers.keys() == second.layers[-1].sources.stickers.keys()
    for sticker_id, source in first.layers[-1].sources.stickers.items():
        assert np.array_equal(source.rgba, second.layers[-1].sources.stickers[sticker_id].rgba)


def _preview(source):
    return PanoramaPreviewSceneNode.execute(source=source, background_range="360")


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


@pytest.mark.parametrize("background", [True, False])
def test_a_pano_scene_preview_gives_the_upstream_keys(monkeypatch, background):
    # ADR 0041: the Preview shows a PANO_SCENE with the keys Studio gives for the same Scene upstream, and draws nothing.
    inputs = {"background": _solid([0.5, 0.5, 0.5], batch=3)} if background else {}
    pano_scene = _studio(**inputs)[0]
    downstream = PanoramaStudioNode.execute(background_color="#00ff00", background_range="360", **output_size(64), state_json="", scene=pano_scene).ui
    rendered = []
    monkeypatch.setattr(nodes, "render_frame", lambda *args, **kwargs: rendered.append(1))
    monkeypatch.setattr(nodes, "_render_frames", lambda *args, **kwargs: rendered.append(1))
    monkeypatch.setattr(nodes, "write_editor_files", lambda *args, **kwargs: rendered.append(1))

    output = _preview(pano_scene)

    assert output.result[0] is pano_scene and rendered == []
    upstream_keys = {key for key in downstream if key.startswith("pano_upstream_")} | {"pano_timeline_fps", "pano_timeline_frames"}
    assert set(output.ui) == upstream_keys
    assert {key: output.ui[key] for key in upstream_keys} == {key: downstream[key] for key in upstream_keys}
    # Even without a background, the Scene's coverage and color are given, for the Preview to draw with.
    assert output.ui["pano_upstream_coverage"] == [pano_scene.coverage] and output.ui["pano_upstream_bg_color"] == [list(pano_scene.bg_color)]
    assert ("pano_upstream_input_images" in output.ui) == background
    assert output.ui["pano_timeline_frames"] == [len(pano_scene.frames)] and output.ui["pano_timeline_fps"] == [pano_scene.fps]


def test_preview_image_ui_is_the_keys_the_legacy_runtime_reads():
    single = _preview(_solid([0.2, 0.4, 0.6])).ui
    batch = _preview(_solid([0.2, 0.4, 0.6], batch=2)).ui

    assert set(single) == {"pano_input_images"}
    assert set(batch) == {"pano_input_images", "pano_videos", "pano_video_meta"}


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


def _studio_ui(state=STATE, **inputs):
    inputs.setdefault("background_color", "#ff0000")
    inputs.setdefault("background_range", "360")
    if "megapixels" not in inputs:
        inputs.update(output_size(64))
    return PanoramaStudioNode.execute(state_json=json.dumps(state), **inputs).ui


def _ui_mp4(ui, key, tmp_path):
    entry = ui[key][0]
    return tmp_path / entry["subfolder"] / entry["filename"]


def test_studio_ui_shows_an_image_background_and_an_image_sticker():
    ui = _studio_ui(background=_solid([0.5, 0.5, 0.5]), sticker=_solid([0.0, 0.0, 1.0]))

    assert ui["pano_input_images"]
    assert ui["pano_sticker_input_images"]
    assert "pano_input_videos" not in ui
    assert "pano_sticker_input_videos" not in ui


def test_studio_ui_has_no_media_without_inputs():
    ui = _studio_ui()

    assert not any(key.startswith(("pano_input", "pano_sticker_input")) for key in ui)


def test_studio_ui_encodes_image_batches_at_the_timeline_fps(tmp_path):
    ui = _studio_ui(background=_solid([0.5, 0.5, 0.5], batch=3), sticker=_solid([0.0, 0.0, 1.0], batch=2))

    assert ui["pano_input_video_meta"][0]["fps"] == 30.0
    assert ui["pano_input_video_meta"][0]["frames"] == 3
    assert ui["pano_sticker_input_images"]
    assert ui["pano_sticker_input_video_meta"][0]["fps"] == 30.0
    with av.open(str(_ui_mp4(ui, "pano_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 3
    with av.open(str(_ui_mp4(ui, "pano_sticker_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 2


def test_studio_ui_saves_video_media_without_reading_it_whole(tmp_path, monkeypatch):
    bg = _video(tmp_path, count=30, audio_rate=8000)
    sticker = _video(tmp_path, count=12)

    def fail(self):
        raise AssertionError("Studio must not read a whole VIDEO for its ui")

    monkeypatch.setattr(InputImpl.VideoFromFile, "get_components", fail)
    ui = _studio_ui({"version": 2}, background=bg, sticker=sticker)

    assert ui["pano_input_images"]
    assert ui["pano_input_video_meta"][0] == {"fps": 25.0, "frames": 30, "duration": 1.2, "has_audio": True}
    assert ui["pano_sticker_input_images"]
    assert ui["pano_sticker_input_video_meta"][0]["frames"] == 12
    with av.open(str(_ui_mp4(ui, "pano_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 30
        assert container.streams.audio
    with av.open(str(_ui_mp4(ui, "pano_sticker_input_videos", tmp_path))) as container:
        assert container.streams.video[0].frames == 12


def test_studio_ui_makes_the_background_mp4_once_per_input(tmp_path, monkeypatch):
    encoded = []
    encode_editor_mp4 = nodes.encode_editor_mp4
    monkeypatch.setattr(nodes, "encode_editor_mp4", lambda opened, progress=None: encoded.append(opened) or encode_editor_mp4(opened, progress))
    video = _video(tmp_path, count=6)
    images = _solid([0.5, 0.5, 0.5], batch=3)

    first = [_studio_ui(background=media) for media in (video, images)]
    moved = {**STATE, "camera": {"rotation": {"value": {"yaw_deg": 30.0}}}}
    second = [_studio_ui(moved, background=media) for media in (video, images)]
    reloaded = _studio_ui(background=InputImpl.VideoFromFile(video.get_stream_source()))

    assert len(encoded) == 2
    assert [ui["pano_input_videos"] for ui in first] == [ui["pano_input_videos"] for ui in second]
    assert reloaded["pano_input_videos"] == first[0]["pano_input_videos"]


def test_studio_ui_opens_the_background_video_file_once(tmp_path, monkeypatch):
    opened = []
    coded_size = sticker_media.coded_size
    for module in (sticker_media, nodes):
        monkeypatch.setattr(module, "coded_size", lambda source: opened.append(source) or coded_size(source), raising=False)
    video = _video(tmp_path, count=6)

    _studio_ui(background=video)
    _studio_ui(background=video)

    # The coded size is read once per file, also across executions.
    assert opened == [video.get_stream_source()]


def test_studio_ui_reports_warnings(tmp_path, monkeypatch):
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(tmp_path))
    state = {"version": 2, "stickers": [{"id": "missing", "source": {"kind": "file", "filename": "missing.png"}}]}

    ui = _studio_ui(state)

    assert ui["pano_sticker_warnings"] == ["Could not read the source of Sticker missing; it is not drawn."]


def test_studio_ui_reports_the_pose_of_an_added_port_sticker():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 1, "pose": {"yaw_deg": 40, "pitch_deg": -10, "roll_deg": 5, "hFOV_deg": 50}})

    added = _studio_ui({"version": 2}, sticker=_solid([0.0, 0.0, 1.0]), sticker_state=sticker_state)
    stored = _studio_ui(
        {"version": 2, "stickers": [{"id": "sticker_1", "source": {"kind": "port"}}]},
        sticker=_solid([0.0, 0.0, 1.0]),
        sticker_state=sticker_state,
    )

    assert added["pano_sticker_input_pose"] == [{
        "yaw_deg": 40.0, "pitch_deg": -10.0, "roll_deg": 5.0, "hFOV_deg": 50.0,
        "keyframes": {"direction": [], "roll": [], "size": []},
    }]
    assert "pano_sticker_input_pose" not in stored


def test_studio_ui_reports_the_timeline_fps_a_video_sets(tmp_path):
    video = _video(tmp_path, count=3)

    assert _studio_ui(background=video)["pano_timeline_fps"] == [25.0]
    assert _studio_ui(sticker=video)["pano_timeline_fps"] == [25.0]
    assert "pano_timeline_fps" not in _studio_ui(background=_solid([0.0, 0.0, 1.0], batch=3), sticker=_solid([1.0, 0.0, 0.0]))


def test_studio_ui_reports_the_keyframes_of_a_port_sticker_added_from_a_moving_camera():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "fps": 24.0, "camera": {
        "rotation": [{"frame": 0, "value": {"yaw_deg": 0.0}}, {"frame": 2, "value": {"yaw_deg": 20.0}}],
    }})

    ui = _studio_ui({"version": 2}, sticker=_solid([0.0, 0.0, 1.0]), sticker_state=sticker_state)

    (pose,) = ui["pano_sticker_input_pose"]
    port = load_scene_state({"version": 2, "stickers": [{"id": "p", "source": {"kind": "port"}, "direction": {"keyframes": pose["keyframes"]["direction"]}}]})["stickers"][0]
    assert [key["frame"] for key in port["direction"]["keyframes"]] == [0, 1, 2]
    assert port["direction"]["keyframes"][2]["value"] == {"yaw_deg": 20.0, "pitch_deg": 0.0}
    assert (pose["keyframes"]["roll"], pose["keyframes"]["size"]) == ([], [])
