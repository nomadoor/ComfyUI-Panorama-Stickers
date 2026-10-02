import json
from fractions import Fraction

import numpy as np
import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Cutout node",
)

import av
from comfy_api.latest import InputImpl

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core import render as render_module
from comfyui_pano_suite.core.scene_state import load_scene_state, load_sticker_state
from comfyui_pano_suite.core.world_render import SceneContent
from comfyui_pano_suite.nodes import PanoramaCutoutNode, PanoramaCutoutSceneNode, PanoramaStickersSceneNode
from comfyui_pano_suite.scene_video import SceneVideo
from test_legacy_goldens import _golden_mismatch
from test_world_render import _ball
from tools.bake_legacy_goldens import CUTOUT_SHOT, FIXTURE_DIR, build_background_erp
from tools.golden_png import read_png16


def _cutout(source, state=None, **inputs):
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_megapixels", 0.01)
    state_json = state if isinstance(state, str) else ("" if state is None else json.dumps(state))
    return PanoramaCutoutSceneNode.execute(source=source, state_json=state_json, **inputs).result


def _frames(result):
    """Every output frame, as GetVideoComponents reads them from the `video` output."""
    return result[3].get_components().images


def _solid(rgb, height=8, width=16, batch=1):
    return torch.tensor(rgb, dtype=torch.float32).expand(batch, height, width, 3).clone()


def _camera(keyframes=None, fps=24.0, position=None, hFOV_deg=None, **rotation):
    """A Cutout state; `keyframes` maps Camera Lanes to their Keyframes."""
    keyframes = keyframes or {}
    values = {"position": position, "rotation": rotation, "fov": hFOV_deg}
    camera = {name: {"value": value, "keyframes": keyframes.get(name, [])} for name, value in values.items()}
    return {"version": 2, "timeline": {"fps": fps}, "camera": {"aspect": 1.0, **camera}}


def _halves_erp(height=32, width=64):
    """Red facing yaw 0 (the middle of the ERP), blue behind."""
    erp = torch.zeros((1, height, width, 3))
    erp[..., 2] = 1.0
    erp[:, :, width // 4:3 * width // 4] = torch.tensor([1.0, 0.0, 0.0])
    return erp


def _center(image, index=0):
    return image[index, image.shape[1] // 2, image.shape[2] // 2]


V1_STATE = json.dumps({"shots": [CUTOUT_SHOT]})


@pytest.mark.parametrize("state_json", [V1_STATE, json.dumps(load_scene_state(V1_STATE))], ids=["v1", "v2"])
def test_static_erp_image_matches_the_new_cutout_golden(state_json):
    image, _sticker_state, mask, _video = _cutout(build_background_erp(), state_json, output_megapixels=0.03)

    assert _golden_mismatch(image[0].numpy(), read_png16(FIXTURE_DIR / "cutout_node_single_shot.image.png")) is None
    assert _golden_mismatch(mask[0].numpy(), read_png16(FIXTURE_DIR / "cutout_node_single_shot.mask.png")) is None


def _legacy_error(image):
    legacy = read_png16(FIXTURE_DIR / "cutout_single_shot.image.png")
    assert image.shape == legacy.shape
    return float(np.abs(image - legacy).mean()) * 255.0


def test_new_cutout_differs_from_the_legacy_golden_by_sampling_pixel_centers(monkeypatch):
    # The legacy Cutout sampled ERP pixel i at u = i, half a pixel off its center. On this grid of sharp lines
    # that is most of the 9.7/255 mean error; the rest is the vertical FOV following square pixels
    # (59.5 rather than 60 degrees at 224x128). docs/legacy-baselines.md
    image = _cutout(build_background_erp(), V1_STATE, output_megapixels=0.03)[0][0].numpy()
    assert _legacy_error(image) < 10.5

    sample_erp = render_module._sample_erp
    monkeypatch.setattr(render_module, "_sample_erp", lambda erp, view: sample_erp(erp, view + view.new_tensor([1.0 / erp.shape[1], 1.0 / erp.shape[0]])))
    shifted = _cutout(build_background_erp(), V1_STATE, output_megapixels=0.03)[0][0].numpy()
    assert _legacy_error(shifted) < 2.5


def test_legacy_cutout_still_reproduces_its_golden():
    result = PanoramaCutoutNode.execute(erp_image=build_background_erp(), coverage="360", state_json=V1_STATE, output_megapixels=0.03).result

    assert _golden_mismatch(result[0][0].numpy(), read_png16(FIXTURE_DIR / "cutout_single_shot.image.png")) is None
    assert json.loads(result[1])["version"] == 1


def test_outputs_are_first_frame_sticker_state_first_frame_mask_and_video():
    image, sticker_state, mask, video = _cutout(_solid([0.5, 0.5, 0.5]), _camera(hFOV_deg=60.0), output_megapixels=0.01)

    assert image.shape == (1, 96, 96, 3) and mask.shape == (1, 96, 96)
    assert isinstance(sticker_state, str)
    assert isinstance(video, SceneVideo) and video.get_dimensions() == (96, 96)
    assert video.get_frame_rate() == 24 and video.get_components().audio is None


def test_output_size_follows_the_camera_aspect_and_megapixels():
    state = _camera()
    state["camera"]["aspect"] = 2.0

    image = _cutout(_solid([0.5, 0.5, 0.5]), state, output_megapixels=0.02)[0]

    assert image.shape[1:3] == (96, 200)


def test_erp_image_is_world_aligned_and_the_camera_turns_into_it():
    erp = _halves_erp()

    front = _cutout(erp, _camera())[0]
    behind = _cutout(erp, _camera(yaw_deg=180.0))[0]

    assert torch.allclose(_center(front), torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(_center(behind), torch.tensor([0.0, 0.0, 1.0]))


def test_180_erp_is_black_outside_its_hemisphere():
    erp = _solid([0.5, 0.5, 0.5], height=32, width=32)

    behind = _cutout(erp, _camera(yaw_deg=180.0), coverage="180")[0]

    assert torch.equal(behind, torch.zeros_like(behind))


def test_camera_keyframes_animate_the_cutout():
    keyframes = [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "hold"}, {"frame": 2, "value": {"yaw_deg": 180.0}}]

    image = _frames(_cutout(_halves_erp(), _camera({"rotation": keyframes})))

    assert image.shape[0] == 3
    assert [tuple(_center(image, index).tolist()) for index in range(3)] == [(1.0, 0.0, 0.0), (1.0, 0.0, 0.0), (0.0, 0.0, 1.0)]


def test_sticker_state_holds_the_camera_value_as_one_keyframe_and_the_source_aspect():
    image, sticker_state, *_rest = _cutout(_solid([0.5, 0.5, 0.5]), _camera(yaw_deg=30.0, pitch_deg=10.0, roll_deg=5.0, hFOV_deg=60.0))

    payload = json.loads(sticker_state)
    assert payload == {
        "kind": "pano_sticker_state",
        "version": 2,
        "fps": 24.0,
        "camera": {
            "position": [{"frame": 0, "value": [0.0, 0.0, 0.0], "easing": [0.42, 0.0, 0.58, 1.0]}],
            "rotation": [{"frame": 0, "value": {"yaw_deg": 30.0, "pitch_deg": 10.0, "roll_deg": 5.0}, "easing": [0.42, 0.0, 0.58, 1.0]}],
            "fov": [{"frame": 0, "value": 60.0, "easing": [0.42, 0.0, 0.58, 1.0]}],
        },
        "source_aspect": image.shape[2] / image.shape[1],
    }
    assert load_sticker_state(sticker_state)["camera"] == payload["camera"]


def test_legacy_shot_becomes_the_sticker_state_camera():
    payload = json.loads(_cutout(build_background_erp(), V1_STATE, output_megapixels=0.03)[1])

    assert {name: [key["value"] for key in keys] for name, keys in payload["camera"].items()} == {
        "position": [[0.0, 0.0, 0.0]],
        "rotation": [{"yaw_deg": 30.0, "pitch_deg": 10.0, "roll_deg": 15.0}],
        "fov": [90.0],
    }
    assert payload["source_aspect"] == 224 / 128


def _video(tmp_path, count=4, audio_rate=None):
    """Frame i is gray i * 20 / 255 at 25 fps. The audio is a ramp of int16 samples."""
    path = tmp_path / f"source_{count}.mkv"
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
            samples = np.arange(audio_rate * 2, dtype=np.int16).reshape(1, -1) % 1000
            frame = av.AudioFrame.from_ndarray(samples, format="s16", layout="mono")
            frame.sample_rate, frame.pts = audio_rate, 0
            for packet in [*audio.encode(frame), *audio.encode()]:
                container.mux(packet)
    return InputImpl.VideoFromFile(str(path))


def test_video_source_sets_the_timeline_fps_and_cuts_its_audio_to_the_length(tmp_path):
    components = _cutout(_video(tmp_path, count=4, audio_rate=8000))[3].get_components()
    image, audio = components.images, components.audio

    assert components.frame_rate == 25
    assert image.shape[0] == 4
    assert [round(float(_center(image, index)[0]) * 255 / 20) for index in range(4)] == [0, 1, 2, 3]
    assert audio["sample_rate"] == 8000 and audio["waveform"].shape[-1] == int(4 / 25 * 8000)


def test_video_source_rebases_the_camera_keyframes_to_the_timeline_fps(tmp_path):
    keyframes = [{"frame": 0, "value": {"yaw_deg": 0.0}}, {"frame": 24, "value": {"yaw_deg": 90.0}}]

    payload = json.loads(_cutout(_video(tmp_path), _camera({"rotation": keyframes}))[1])

    assert payload["fps"] == 25.0
    assert {name: [key["frame"] for key in keys] for name, keys in payload["camera"].items()} == {"position": [0], "rotation": [0, 25], "fov": [0]}


def _stickers(state=None, **inputs):
    inputs.setdefault("bg_color", "#00ff00")
    inputs.setdefault("coverage", "360")
    inputs.setdefault("output_preset", "1024")
    return PanoramaStickersSceneNode.execute(state_json="" if state is None else json.dumps(state), **inputs).result


def _record_projections(monkeypatch):
    projections = []
    original = nodes.render_frame

    def recording(evaluated, sources, camera, projection, **kwargs):
        projections.append((camera, projection))
        return original(evaluated, sources, camera, projection, **kwargs)

    monkeypatch.setattr(nodes, "render_frame", recording)
    return projections


def test_pano_scene_is_shot_from_the_cutout_camera_with_a_perspective_projection(monkeypatch):
    # The Stickers Camera looks elsewhere; only the Cutout Camera decides the shot.
    scene = _stickers({"version": 2, "camera": {"rotation": {"value": {"yaw_deg": 180.0}}}}, bg_media=_halves_erp())[3]
    cutout_state = _camera(yaw_deg=180.0, hFOV_deg=50.0)
    cutout_state["camera"]["aspect"] = 1.5
    projections = _record_projections(monkeypatch)

    image = _cutout(scene, cutout_state)[0]

    ((camera, projection),) = projections
    assert (camera["yaw_deg"], camera["hFOV_deg"]) == (180.0, 50.0)
    assert (projection.kind, projection.hfov_deg, projection.coverage) == ("perspective", 50.0, 360)
    assert (projection.width, projection.height) == (image.shape[2], image.shape[1]) == (120, 80)
    assert torch.allclose(_center(image), torch.tensor([0.0, 0.0, 1.0]))


def test_pano_scene_draws_its_sky_stickers_and_bg_color():
    sticker_state = json.dumps({"kind": "pano_sticker_state", "version": 2, "camera": {"rotation": [{"frame": 0, "value": {"yaw_deg": 90.0}}], "fov": [{"frame": 0, "value": 40.0}]}})
    scene = _stickers(sticker=_solid([0.0, 0.0, 1.0]), sticker_state=sticker_state)[3]

    at_sticker = _cutout(scene, _camera(yaw_deg=90.0, hFOV_deg=10.0))[0]
    away = _cutout(scene, _camera(yaw_deg=-90.0, hFOV_deg=20.0))[0]

    assert torch.allclose(at_sticker[0], torch.tensor([0.0, 0.0, 1.0]).expand_as(at_sticker[0]))
    assert torch.allclose(away[0], torch.tensor([0.0, 1.0, 0.0]).expand_as(away[0]))


def test_pano_scene_paint_mask_is_the_mask_output():
    painting = {"version": 1, "paint": {"strokes": []}, "groups": [], "mask": {"strokes": [{
        "id": "m", "actionGroupId": "ag_m", "targetSpace": {"kind": "ERP_GLOBAL"}, "layerKind": "mask", "toolKind": "pen",
        "size": 40, "color": None, "opacity": 1.0, "createdAt": 0,
        "geometry": {"geometryKind": "freehand_open", "points": [{"u": 0.5, "v": 0.5, "t": 0}, {"u": 0.5001, "v": 0.5, "t": 1}]},
    }]}}
    scene = _stickers({"version": 2, "painting": painting})[3]

    front = _cutout(scene, _camera(hFOV_deg=20.0))[2]
    behind = _cutout(scene, _camera(yaw_deg=180.0, hFOV_deg=20.0))[2]

    assert float(_center(front)) > 0.5
    assert float(behind.max()) == 0.0


def test_pano_scene_uses_its_timeline_and_its_background_frames():
    bg = torch.cat([_solid([value, value, value], height=32, width=64) for value in (0.2, 0.4, 0.6)])
    scene = _stickers({"version": 2, "timeline": {"fps": 12.0}}, bg_media=bg)[3]

    components = _cutout(scene, _camera())[3].get_components()
    cut = components.images

    assert components.frame_rate == 12 and components.audio is None
    assert cut.shape[0] == 3
    assert [round(float(_center(cut, index)[0]), 3) for index in range(3)] == [0.2, 0.4, 0.6]


def test_pano_scene_reads_the_cutout_camera_at_its_own_recorded_fps():
    scene = _stickers({"version": 2, "timeline": {"fps": 12.0}}, bg_media=torch.cat([_halves_erp()] * 3))[3]
    # Cutout frame 2 at 24 fps is 1/12 s: the second frame of the 12 fps Timeline.
    keyframes = [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "hold"}, {"frame": 2, "value": {"yaw_deg": 180.0}}]

    result = _cutout(scene, _camera({"rotation": keyframes}, fps=24.0))
    cut, sticker_state = _frames(result), result[1]

    assert [tuple(_center(cut, index).tolist()) for index in range(3)] == [(1.0, 0.0, 0.0), (0.0, 0.0, 1.0), (0.0, 0.0, 1.0)]
    payload = json.loads(sticker_state)
    assert payload["fps"] == 12.0 and [key["frame"] for key in payload["camera"]["rotation"]] == [0, 1]


def test_pano_scene_with_a_video_background_outputs_its_audio(tmp_path):
    scene = _stickers({"version": 2}, bg_media=_video(tmp_path, count=4, audio_rate=8000))[3]

    components = _cutout(scene, _camera())[3].get_components()
    cut, audio = components.images, components.audio

    assert components.frame_rate == 25 and cut.shape[0] == 4
    assert [round(float(_center(cut, index)[0]) * 255 / 20) for index in range(4)] == [0, 1, 2, 3]
    assert audio["waveform"].shape[-1] == int(4 / 25 * 8000)


def _marker_erp(width=512, height=256, columns=(294, 304), rows=(123, 133)):
    """A black ERP with a white rectangle, and the direction and FOV of that rectangle at pixel centers."""
    erp = torch.zeros((1, height, width, 3))
    erp[:, rows[0]:rows[1], columns[0]:columns[1]] = 1.0
    pose = {
        "yaw_deg": (sum(columns) / 2 / width - 0.5) * 360.0,
        "pitch_deg": (0.5 - sum(rows) / 2 / height) * 180.0,
        "hFOV_deg": (columns[1] - columns[0]) / width * 360.0,
        "vFOV_deg": (rows[1] - rows[0]) / height * 180.0,
    }
    return erp, pose


def _weighted_center(values):
    """The (x, y) centroid of `values` (H, W), in pixels from the top left corner."""
    rows, columns = torch.meshgrid(torch.arange(values.shape[0]) + 0.5, torch.arange(values.shape[1]) + 0.5, indexing="ij")
    total = float(values.sum())
    return float((values * columns).sum()) / total, float((values * rows).sum()) / total


def test_perspective_sky_content_lines_up_with_the_background():
    erp, pose = _marker_erp()
    camera = _camera(yaw_deg=pose["yaw_deg"], pitch_deg=pose["pitch_deg"], hFOV_deg=20.0)
    sticker = {
        "id": "s",
        "source": {"kind": "port"},
        "direction": {"value": {key: pose[key] for key in ("yaw_deg", "pitch_deg")}},
        "size": {"value": {key: pose[key] for key in ("hFOV_deg", "vFOV_deg")}},
    }
    scene = _stickers({"version": 2, "stickers": [sticker]}, sticker=_solid([1.0, 0.0, 0.0], height=16, width=16))[3]
    camera["camera"]["aspect"] = 1.5

    background = _cutout(erp, camera, output_megapixels=0.04)[0][0]
    on_sky = _cutout(scene, camera, output_megapixels=0.04)[0][0]

    # The rectangle and the Sticker over the same directions land on the same pixels, at the output center.
    center = (background.shape[1] / 2, background.shape[0] / 2)
    for found in (_weighted_center(background[..., 0]), _weighted_center(on_sky[..., 0])):
        assert all(abs(a - b) < 0.05 for a, b in zip(found, center))


def test_perspective_paint_lines_up_with_the_background():
    erp, pose = _marker_erp()
    camera = _camera(yaw_deg=pose["yaw_deg"], pitch_deg=pose["pitch_deg"], hFOV_deg=20.0)
    u, v = pose["yaw_deg"] / 360.0 + 0.5, 0.5 - pose["pitch_deg"] / 180.0
    painting = {"version": 1, "paint": {"strokes": []}, "groups": [], "mask": {"strokes": [{
        "id": "m", "actionGroupId": "ag_m", "targetSpace": {"kind": "ERP_GLOBAL"}, "layerKind": "mask", "toolKind": "pen",
        "size": 6, "color": None, "opacity": 1.0, "createdAt": 0,
        "geometry": {"geometryKind": "freehand_open", "points": [{"u": u, "v": v, "t": 0}, {"u": u + 1e-6, "v": v, "t": 1}]},
    }]}}

    background = _cutout(erp, camera, output_megapixels=0.04)[0][0]
    mask = _cutout(erp, {**camera, "painting": painting}, output_megapixels=0.04)[2][0]

    # Paint is rasterized with point (u * w, v * h) on the center of Sky ERP pixel (u * w, v * h), half a pixel of
    # the 4096 wide Sky ERP (0.43 output pixels here) to the lower right of where a Sticker or the background is.
    found, expected = _weighted_center(mask), _weighted_center(background[..., 0])
    assert all(abs(a - b) < 0.5 for a, b in zip(found, expected))


def test_sticker_state_round_trips_camera_keyframes_with_easing_and_handles():
    keyframes = {
        "position": [
            {"frame": 0, "value": [0.0, 0.0, 0.0], "easing": [0.25, 0.1, 0.25, 1.0], "handles": {"out": [1.0, 0.0, 0.0]}},
            {"frame": 6, "value": [2.0, 0.5, -1.0], "easing": "hold", "handles": {"in": [-1.0, 0.0, 0.5]}},
        ],
        "rotation": [{"frame": 0, "value": {"yaw_deg": 0.0}, "easing": "auto"}, {"frame": 6, "value": {"yaw_deg": 90.0}}],
        "fov": [{"frame": 3, "value": 70.0, "easing": "hold"}, {"frame": 6, "value": 60.0}],
    }
    state = _camera(keyframes, fps=12.0)
    image, sticker_state, *_rest = _cutout(_halves_erp(), state)

    loaded = load_sticker_state(sticker_state)
    assert loaded["fps"] == 12.0
    camera = load_scene_state(state)["camera"]
    assert loaded["camera"] == {name: camera[name]["keyframes"] for name in ("position", "rotation", "fov")}
    # A Cutout state made from the sticker_state shoots the same frames.
    again = _cutout(_halves_erp(), _camera(loaded["camera"], fps=loaded["fps"]))[0]
    assert torch.equal(again, image)


def test_pano_scene_with_coverage_180_reads_its_bg_media_as_the_front_hemisphere():
    erp = torch.zeros((1, 32, 32, 3))
    erp[..., :16, 0] = 1.0
    erp[..., 16:, 2] = 1.0
    scene = _stickers({"version": 2}, bg_media=erp, coverage="180")[3]

    # The Cutout coverage input does not apply to a PANO_SCENE.
    left, right, behind = (_cutout(scene, _camera(yaw_deg=yaw, hFOV_deg=20.0), coverage="360")[0][0] for yaw in (-45.0, 45.0, 180.0))

    assert torch.allclose(_center(left[None]), torch.tensor([1.0, 0.0, 0.0]))
    assert torch.allclose(_center(right[None]), torch.tensor([0.0, 0.0, 1.0]))
    assert torch.equal(behind, torch.tensor([0.0, 1.0, 0.0]).expand_as(behind))


def test_world_sticker_is_shot_from_the_cutout_camera_position():
    # A square plane 2 wide at distance 1, facing the Camera at rotation 0.
    sticker = {"id": "p", "placement": "world", "source": {"kind": "port"}, "position": {"value": [0.0, 0.0, -1.0]}, "scale": {"value": 2.0}}
    scene = _stickers({"version": 2, "stickers": [sticker]}, sticker=_solid([1.0, 0.0, 0.0], height=16, width=16))[3]

    near = _cutout(scene, _camera(hFOV_deg=60.0))[0][0]
    far = _cutout(scene, _camera(position=[0.0, 0.0, 3.0], hFOV_deg=90.0))[0][0]
    behind = _cutout(scene, _camera(yaw_deg=180.0, hFOV_deg=60.0))[0][0]

    assert torch.allclose(near, torch.tensor([1.0, 0.0, 0.0]).expand_as(near), atol=1e-6)
    # From 4 away the plane spans 2 * atan(1 / 4); a 90 degree view of 96 pixels shows it 96 / 4 pixels wide.
    red = (far - torch.tensor([1.0, 0.0, 0.0])).abs().amax(dim=-1) < 0.05
    assert abs(int(red[48].sum()) - 24) <= 1
    assert torch.equal(behind, torch.tensor([0.0, 1.0, 0.0]).expand_as(behind))


def test_pano_scene_content_is_shot_at_the_scene_item_of_each_frame(monkeypatch):
    content, _views = _ball()
    monkeypatch.setattr(nodes, "_scene_content", lambda scene: None if scene is None else SceneContent(3, content.render))
    # The stand-in input has no editor files.
    monkeypatch.setattr(nodes, "_scene_ui", lambda scene: {})
    scene = _stickers({"version": 2}, scene=object())[3]

    cut = _frames(_cutout(scene, _camera(hFOV_deg=30.0)))

    # The ball in front of the Camera is red (item + 1) / 10.
    assert [round(float(_center(cut, index)[0]) * 10) - 1 for index in range(3)] == [0, 1, 2]


def test_sky_resolution_follows_the_bg_media_of_the_execution_not_of_each_frame(monkeypatch):
    sizes = []
    render_sky = render_module._render_sky

    def recording(evaluated, sources, size, device):
        sizes.append(size)
        return render_sky(evaluated, sources, size, device)

    monkeypatch.setattr(render_module, "_render_sky", recording)
    state = _camera()
    state["timeline"]["length"] = 4

    # The two-image batch ends before the Timeline does.
    video = _cutout(_solid([0.5, 0.5, 0.5], height=512, width=1024, batch=2), state)[3]
    sizes.clear()

    image = video.get_components().images

    assert image.shape[0] == 4
    assert sizes == [(1024, 512)]
