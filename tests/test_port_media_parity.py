"""The editor and the node surface show the port Sticker's MP4 at the time web_src/pano_port_media.js gives for a
Timeline frame. The frame the MP4 shows there (PTS <= t, as a browser shows a sought time) is the frame the
`video` output draws (#83)."""

import bisect
from fractions import Fraction
import json
import shutil
import subprocess
import textwrap
from pathlib import Path

import pytest
import torch


pytest.importorskip(
    "comfy_api.latest",
    reason="ComfyUI's real V3 API is required to run the Panorama Studio node",
)

from comfyui_pano_suite import nodes
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.sticker_media import open_video
from test_stickers_timed_sticker import _ntsc_pts, _write_red_video

REPO_ROOT = Path(__file__).resolve().parent.parent

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { portImageIndex, portMediaTime } from "./web_src/pano_port_media.js";

    // A VIDEO's time to seek; an IMAGE batch's image.
    const cases = JSON.parse(readFileSync(0, "utf8"));
    console.log(JSON.stringify(cases.map(({ clip, frames, fps, meta }) => frames.map((frame) => {
      const time = portMediaTime(clip, frame, fps, meta);
      return time === null || meta.kind !== "IMAGE" ? time : portImageIndex(time, meta);
    }))));
    """
)


def _drawn(state, bg, port, frames):
    """The port media's frame that the `video` output draws at each Timeline frame (`PortMedia.index_at` inside the
    Clip range), None where it draws none."""
    fps = float(nodes._decide_timeline(state, bg, port)[0])
    timing = nodes._timing_video(bg, port)
    tolerance = 0 if timing is None else float(timing.time_base) / 2 * state["timeline"]["fps"]
    drawn = []
    for frame in frames:
        active = next(item["active"] for item in evaluate_scene_state(state, frame)["stickers"] if item["id"] == port.sticker_id)
        drawn.append(port.index_at(frame, fps, tolerance) if active else None)
    return drawn


def _case(state_json, sticker, bg=None):
    state = load_scene_state(json.dumps(state_json))
    port, _handoff = nodes._port_media(state, sticker, "", [])
    rate, _times, time_base, _frames = nodes._decide_timeline(state, bg, port)
    fps = float(rate)
    meta = nodes._port_media_ui(port, fps, time_base)["pano_sticker_input_video_meta"][0]
    # The editor's playhead is on whole Timeline frames.
    frames = list(range(24))
    times = None if port.times is None else [float(time) for time in port.times]
    clip = next(item for item in state["stickers"] if item["source"]["kind"] == "port")["clip"]
    return {"clip": clip, "frames": frames, "fps": state["timeline"]["fps"], "meta": meta}, times, _drawn(state, bg, port, frames)


def _shown(time, times, meta):
    if time is None:
        return None
    # A browser shows the last frame with PTS <= the sought time. The image of an IMAGE batch is the one of its PNGs
    # (createFrameSequence), and the one an MP4 of them evenly spaced shows at the time.
    if times is None:
        return time
    return bisect.bisect_right(times, time) - 1


@pytest.fixture
def cases(tmp_path):
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    vfr = _write_red_video(tmp_path / "vfr.mkv", [0, 40, 100, 120, 160, 220, 240, 280, 340, 360], 25)
    ntsc = _write_red_video(tmp_path / "ntsc.mkv", _ntsc_pts(12), Fraction(30000, 1001))
    bg = _write_red_video(tmp_path / "bg.mkv", [index * 40 for index in range(40)], 25, red=False)
    port = {"id": "p", "source": {"kind": "port"}}
    return [
        # A VFR VIDEO sets the Timeline; its Clip range starts later and skips its head.
        _case({"version": 2, "timeline": {"fps": 25}, "stickers": [{**port, "clip": {"start": 5, "in": 3}}]}, vfr),
        # An NTSC VIDEO with millisecond PTS in a Clip range with a duration.
        _case({"version": 2, "timeline": {"fps": 30000 / 1001}, "stickers": [{**port, "clip": {"start": 4, "in": 0, "duration": 8}}]}, ntsc),
        # The NTSC VIDEO on the 25 fps Timeline of a background VIDEO.
        _case({"version": 2, "timeline": {"fps": 25}, "stickers": [{**port, "clip": {"start": 2, "in": 5}}]}, ntsc, open_video(bg, "bg_media")),
        # An IMAGE batch in a Clip range that skips its head.
        _case({"version": 2, "timeline": {"fps": 24}, "stickers": [{**port, "clip": {"start": 3, "in": 2}}]}, torch.rand((10, 4, 8, 3))),
        # An RGBA IMAGE batch, shown as PNGs instead of an MP4, picks the same images.
        _case({"version": 2, "timeline": {"fps": 24}, "stickers": [{**port, "clip": {"start": 1, "in": 3, "duration": 12}}]}, torch.rand((10, 4, 8, 4))),
    ]


def test_the_mp4_shows_the_frame_the_video_output_draws(cases):
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", JS_SCRIPT],
        cwd=REPO_ROOT,
        input=json.dumps([case for case, _times, _drawn in cases]),
        text=True,
        capture_output=True,
        check=True,
    )
    for (case, times, drawn), js in zip(cases, json.loads(proc.stdout)):
        assert [_shown(time, times, case["meta"]) for time in js] == drawn
        assert any(index is None for index in drawn) and any(index is not None for index in drawn)
