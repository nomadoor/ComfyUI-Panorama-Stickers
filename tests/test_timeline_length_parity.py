"""The editor's Timeline spans exactly the output's length (docs/timeline-ui.md): web_src/pano_timeline.js
`timelineSpan`, fed what the editor knows of the inputs from the node's `ui`, must give the number of frames
`_decide_timeline` decides for the same state and media."""

import json
import shutil
import subprocess
import textwrap
from fractions import Fraction
from pathlib import Path

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.core.world_render import SceneContent
from comfyui_pano_suite.scene_mesh import read_mesh_file
from comfyui_pano_suite.sticker_media import content_of, open_video
from comfy_api.latest import Types
from test_stickers_timed_sticker import _write_red_video

REPO_ROOT = Path(__file__).resolve().parent.parent
# A glTF with clips: walk 1.2 s, wave 0.7 s, animation_2 0.9 s (tests/fixtures/gltf_anim, ADR 0043).
ANIMATED = REPO_ROOT / "tests" / "fixtures" / "gltf_anim" / "anim.glb"

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { loadSceneState } from "./web_src/pano_scene_state.js";
    import { timelineSpan } from "./web_src/pano_timeline.js";

    const cases = JSON.parse(readFileSync(0, "utf8"));
    console.log(JSON.stringify(cases.map(({ state, media }) => timelineSpan(loadSceneState(state), { ...media, camera: true }))));
    """
)

LINEAR = [0.0, 0.0, 1.0, 1.0]


def _sticker(sticker_id, clip, **extra):
    return {"id": sticker_id, "source": {"kind": "file", "filename": f"{sticker_id}.png"}, "clip": clip, **extra}


def _port(clip):
    return {"id": "p", "source": {"kind": "port"}, "clip": clip}


def _camera_keys(*frames):
    keys = [{"frame": frame, "value": {"yaw_deg": float(frame), "pitch_deg": 0.0, "roll_deg": 0.0}, "easing": LINEAR} for frame in frames]
    return {"projection": "perspective", "rotation": {"value": {}, "keyframes": keys}}


def _state(fps=24, length=None, **extra):
    return {"version": 2, "timeline": {"fps": fps, "length": length}, **extra}


def _upstream(frames, fps=24):
    """An upstream Scene of `frames` output frames at `fps`, without layers or a background."""
    times = tuple(Fraction(index) / fps for index in range(frames))
    return nodes.PanoSceneValue((), None, 360, (0.0, 0.0, 0.0), Fraction(fps), times, Fraction(0), tuple((None, ()) for _ in range(frames)), {}, {})


def _bg_media(bg_media, fps):
    """The opened bg_media and what the editor knows of it: the meta of its editor MP4 in the node's `ui`."""
    bg = open_video(bg_media, "bg_media") if not isinstance(bg_media, torch.Tensor) else bg_media
    meta = nodes._bg_media_ui(bg_media, bg, fps)["pano_input_video_meta"][0]
    return bg, {"video": not isinstance(bg_media, torch.Tensor), "frames": meta["frames"], "duration": meta["duration"]}


def _cases(tmp_path):
    """(name, state, Python inputs of `_decide_timeline`, the editor's media for `timelineSpan`)."""
    video = _write_red_video(tmp_path / "bg.mkv", [index * 40 for index in range(40)], 25, red=False)
    port_video = _write_red_video(tmp_path / "port.mkv", [round(index * 1000 / 24) for index in range(30)], 24, red=False)
    # One frame: no editor MP4, but the meta still tells the editor where the media ends.
    port_still = _write_red_video(tmp_path / "still.mkv", [0], 24, red=False)
    cases = [
        ("a still", _state(), {}, {}),
        ("a Clip end", _state(stickers=[_sticker("a", {"start": 4, "in": 0, "duration": 20})]), {}, {}),
        ("Camera Keyframes", _state(camera=_camera_keys(0, 33)), {}, {}),
        ("a Clip end before the Camera", _state(camera=_camera_keys(0, 33), scene={"clip": {"start": 0, "in": 0, "duration": 9}}), {}, {}),
        ("a hidden Sticker's Clip end", _state(stickers=[_sticker("a", {"start": 0, "in": 0, "duration": 15}, visible=False)]), {}, {}),
        ("Sticker Keyframes do not count", _state(stickers=[_sticker("a", {"start": 0, "in": 0}, opacity={"value": 1, "keyframes": [
            {"frame": 0, "value": 1.0, "easing": LINEAR}, {"frame": 80, "value": 0.0, "easing": LINEAR}]})]), {}, {}),
        ("a length shorter than the Clip ranges", _state(length=7, stickers=[_sticker("a", {"start": 0, "in": 0, "duration": 40})]), {}, {}),
        ("a length longer than everything", _state(length=500, camera=_camera_keys(0, 12)), {}, {}),
    ]
    batch = torch.rand((12, 4, 8, 3))
    bg, media = _bg_media(batch, 24.0)
    cases.append(("an IMAGE batch", _state(stickers=[_sticker("a", {"start": 0, "in": 0, "duration": 40})]), {"bg": bg}, {"bg": media}))
    cases.append(("a length over an IMAGE batch", _state(length=30), {"bg": bg}, {"bg": media}))
    bg, media = _bg_media(video, 25.0)
    cases.append(("a background VIDEO", _state(fps=25, camera=_camera_keys(0, 90)), {"bg": bg}, {"bg": media}))
    cases.append(("a background VIDEO under an upstream Scene", _state(), {"bg": bg, "upstream": _upstream(20)},
                  {"bg": media, "upstream": {"frames": 20, "ends": []}}))
    # The background's Clip range (background.clip) moves or trims the media inside the output; the length is still
    # the media's own frames.
    for name, clip in [
        ("a shifted background VIDEO", {"start": 3, "in": 1}),
        ("a background VIDEO trimmed at the tail", {"start": 2, "in": 0, "duration": 7}),
        ("a background VIDEO with its head trimmed", {"start": 0, "in": 6}),
    ]:
        cases.append((name, _state(fps=25, background={"clip": clip}, camera=_camera_keys(0, 90)), {"bg": bg}, {"bg": media}))
    cases.append(("a length over a shifted background VIDEO", _state(fps=25, length=80, background={"clip": {"start": 3, "in": 0}}), {"bg": bg}, {"bg": media}))
    cases.append(("a shifted background VIDEO under an upstream Scene", _state(background={"clip": {"start": 30, "in": 0}}), {"bg": bg, "upstream": _upstream(20)},
                  {"bg": media, "upstream": {"frames": 20, "ends": []}}))
    batch_bg, batch_media = _bg_media(batch, 24.0)
    cases.append(("a shifted IMAGE batch", _state(background={"clip": {"start": 4, "in": 2}}), {"bg": batch_bg}, {"bg": batch_media}))
    cases.append(("an IMAGE batch trimmed at the tail", _state(background={"clip": {"start": 0, "in": 0, "duration": 5}}), {"bg": batch_bg}, {"bg": batch_media}))
    # A single image ends no length without a duration; with one, its end counts as a Sticker's Clip range end.
    image = torch.rand((1, 4, 8, 3))
    sticker = _sticker("a", {"start": 0, "in": 0, "duration": 9})
    cases.append(("a shifted single image", _state(background={"clip": {"start": 4, "in": 0}}, stickers=[sticker]), {"bg": image}, {"bg": {"frames": 1}}))
    cases.append(("a single image with a duration", _state(background={"clip": {"start": 4, "in": 0, "duration": 20}}, stickers=[sticker]), {"bg": image}, {"bg": {"frames": 1}}))
    cases.append(("a single image ending before a Sticker", _state(background={"clip": {"start": 0, "in": 0, "duration": 3}}, stickers=[sticker]), {"bg": image}, {"bg": {"frames": 1}}))
    for name, sticker, clip in [
        ("an IMAGE batch on the port", torch.rand((10, 4, 8, 3)), {"start": 3, "in": 1}),
        ("a VIDEO on the port", port_video, {"start": 5, "in": 2}),
        ("a VIDEO on the port in a Clip range with a duration", port_video, {"start": 5, "in": 2, "duration": 9}),
        ("a one-frame VIDEO on the port", port_still, {"start": 5, "in": 0}),
    ]:
        state = load_scene_state(json.dumps(_state(stickers=[_port(clip)])))
        port, _handoff = nodes._port_media(state, sticker, "", [])
        rate, _times, time_base, _frames = nodes._decide_timeline(state, None, port)
        meta = nodes._port_media_ui(port, float(rate), time_base)["pano_sticker_input_video_meta"][0]
        cases.append((name, _state(stickers=[_port(clip)]), {"port_input": sticker}, {"port": meta}))
    # An animated 3D file without a duration ends one cycle of its clip after its material starts (ADR 0043); the
    # editor knows the clips from the meta's `animation.clips`.
    animated = read_mesh_file(Types.File3D(str(ANIMATED)))
    clips = [{"name": clip.name, "duration": clip.duration} for clip in animated.animation.clips]
    glb = {"kind": "file", "filename": "anim.glb", "subfolder": "3d", "storage": "input"}
    cases += [
        ("an animated scene", _state(scene={"clip": {"start": 2, "in": 1}}), {"scene": content_of(animated)}, {"animations": {"scene": clips}}),
        ("an animated scene with a duration", _state(scene={"clip": {"start": 2, "in": 1, "duration": 9}}), {"scene": content_of(animated)},
         {"animations": {"scene": clips}}),
        ("an animated 3D file Sticker at a speed", _state(stickers=[{"id": "a", "source": glb, "placement": "world", "clip": {"start": 5, "in": 0},
                                                                     "animation": {"clip": "wave", "speed": 1.5}}]),
         {"contents": {"a": animated}}, {"animations": {"scene": None, "stickers": {"a": clips}}}),
        ("a clip the file lacks counts the first", _state(stickers=[{"id": "a", "source": glb, "placement": "world", "clip": {"start": 0, "in": 3},
                                                                     "animation": {"clip": "nope", "speed": 0.5}}]),
         {"contents": {"a": animated}}, {"animations": {"scene": None, "stickers": {"a": clips}}}),
        ("a long VIDEO wins over a clip", _state(stickers=[{"id": "a", "source": glb, "placement": "world", "clip": {"start": 0, "in": 0}}]),
         {"contents": {"a": animated}, "bg": _bg_media(video, 25.0)[0]}, {"animations": {"scene": None, "stickers": {"a": clips}}, "bg": _bg_media(video, 25.0)[1]}),
        ("an animated 3D file on the port", _state(stickers=[{**_port({"start": 3, "in": 1}), "animation": {"clip": "animation_2", "speed": 2}}]),
         {"port_input": animated}, {"animations": {"scene": None, "stickers": {"p": clips}}}),
    ]
    cases += [
        ("the scene items", _state(scene={"clip": {"start": 2, "in": 1}}), {"scene": SceneContent(30, None)}, {"sceneItems": 30}),
        ("an upstream Scene", _state(stickers=[_sticker("a", {"start": 0, "in": 0, "duration": 20})]), {"upstream": _upstream(48)},
         {"upstream": {"frames": 48, "ends": []}}),
        ("a Clip range overridden upstream", _state(), {"upstream": _upstream(48), "overridden_ends": [(70, 24.0)]},
         {"upstream": {"frames": 48, "ends": [70]}}),
        ("a length under an upstream Scene", _state(length=12), {"upstream": _upstream(48), "overridden_ends": [(70, 24.0)]},
         {"upstream": {"frames": 48, "ends": [70]}}),
    ]
    return cases


def _python(state_json, inputs):
    state = load_scene_state(json.dumps(state_json))
    port = None
    if "port_input" in inputs:
        port, _handoff = nodes._port_media(state, inputs["port_input"], "", [])
    _rate, _times, _time_base, frames = nodes._decide_timeline(
        state, inputs.get("bg"), port, inputs.get("scene"), upstream=inputs.get("upstream"), overridden_ends=inputs.get("overridden_ends", ()),
        contents=inputs.get("contents"),
    )
    return len(frames)


def test_the_timeline_spans_the_length_the_node_outputs(tmp_path):
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    cases = _cases(tmp_path)
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", JS_SCRIPT],
        cwd=REPO_ROOT,
        input=json.dumps([{"state": state, "media": media} for _name, state, _inputs, media in cases]),
        text=True,
        capture_output=True,
        check=True,
    )
    spans = json.loads(proc.stdout)
    expected = {name: _python(state, inputs) for name, state, inputs, _media in cases}
    assert dict(zip(expected, spans)) == expected
    # The table reaches each step of the rule.
    assert expected["a still"] == 1
    assert expected["Sticker Keyframes do not count"] == 1
    assert expected["a length shorter than the Clip ranges"] == 7
    assert expected["an IMAGE batch"] == 12
    assert expected["a background VIDEO"] == 40
    assert expected["a Clip range overridden upstream"] == 70
    assert expected["a shifted background VIDEO"] == 40
    assert expected["a background VIDEO trimmed at the tail"] == 40
    assert expected["a background VIDEO with its head trimmed"] == 40
    assert expected["a length over a shifted background VIDEO"] == 80
    assert expected["a shifted background VIDEO under an upstream Scene"] == 38
    assert expected["a shifted IMAGE batch"] == 12
    assert expected["an IMAGE batch trimmed at the tail"] == 12
    assert expected["a single image with a duration"] == 24
    assert expected["a single image ending before a Sticker"] == 9
    # ⌈1.2 × 24⌉ = 29 after 2 − 1; ⌈0.7 ÷ 1.5 × 24⌉ = 12 after 5; ⌈1.2 ÷ 0.5 × 24⌉ = 58 after −3; ⌈0.9 ÷ 2 × 24⌉ = 11 after 2.
    assert expected["an animated scene"] == 30
    assert expected["an animated scene with a duration"] == 11
    assert expected["an animated 3D file Sticker at a speed"] == 17
    assert expected["a clip the file lacks counts the first"] == 55
    assert expected["a long VIDEO wins over a clip"] == 40
    assert expected["an animated 3D file on the port"] == 13
