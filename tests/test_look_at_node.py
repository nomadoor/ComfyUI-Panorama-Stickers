"""The node's side of the Camera's Look at (docs/studio-node.md "Look at の相手の箱", docs/scene-state-v2.md "Look at"):
the content boxes it hands the evaluation, and an output that faces the target."""
import numpy as np
import pytest

from comfyui_pano_suite.core.paint_state import empty_painting_state
from comfyui_pano_suite.core.render import SceneSources, StickerSource
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.core.world import world_rotation
from comfyui_pano_suite.scene_build import look_at_boxes


def _state(target):
    return load_scene_state({"version": 2, "camera": {"position": {"value": [0.0, 0.0, 4.0]}, "look_at": {"value": target}},
                             "stickers": [{"id": "board", "placement": "world", "source": {"kind": "file", "filename": "a.png"},
                                           "crop": {"x0": 0.0, "y0": 0.0, "x1": 0.5, "y1": 1.0}},
                                          {"id": "sky", "placement": "sky", "source": {"kind": "file", "filename": "b.png"}}]})


def _sources(width, height):
    rgba = np.zeros((height, width, 4), dtype=np.uint8)
    return SceneSources({"board": StickerSource(rgba, {"x0": 0.0, "y0": 0.0, "x1": 0.5, "y1": 1.0}), "sky": StickerSource(rgba, {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0})}, empty_painting_state())


def test_an_image_plane_s_box_is_one_wide_and_as_tall_as_its_cropped_image():
    state = _state({"sticker": "board", "offset": [0.0, 0.5, 0.0]})
    # 200 x 100 cropped to its left half: 100 x 100, a square.
    assert look_at_boxes(state, _sources(200, 100), None) == {"board": {"center": [0.0, 0.0, 0.0], "size": [1.0, 1.0, 0.0]}}
    # A sky image, a point and no target have no box.
    assert look_at_boxes(_state({"sticker": "sky", "offset": [0, 0, 0]}), _sources(200, 100), None) == {}
    assert look_at_boxes(_state({"point": [0, 0, 0]}), _sources(200, 100), None) == {}
    assert look_at_boxes(_state(None), _sources(200, 100), None) == {}


def test_the_camera_looks_at_the_offset_point_of_the_box():
    state = _state({"sticker": "board", "offset": [0.0, 0.5, 0.0]})
    boxes = look_at_boxes(state, _sources(200, 100), None)
    camera = evaluate_scene_state(state, 0.0, None, boxes)["camera"]
    forward = world_rotation(camera["yaw_deg"], camera["pitch_deg"], camera["roll_deg"]) @ np.array([0.0, 0.0, -1.0])
    toward = np.array([0.0, 0.5, 0.0]) - np.array([0.0, 0.0, 4.0])
    assert forward == pytest.approx(toward / np.linalg.norm(toward), abs=1e-9)
