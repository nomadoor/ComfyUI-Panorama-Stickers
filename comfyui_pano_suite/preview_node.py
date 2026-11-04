"""The Panorama Preview node (`docs/preview-node.md`): the `ui` that shows an IMAGE, a VIDEO, or a PANO_SCENE on the
node and in its window, with nothing drawn or written for a PANO_SCENE. The legacy Preview (`PanoramaPreviewNode` in
`nodes.py`) shares the IMAGE `ui`."""
import torch
from comfy_api.latest import Input, io

from .core.scene_state import load_scene_state
from .media_ui import _append_preview_video_from_batch, _get_preview_ui_contract, _init_ui_preview, _video_ui
from .node_runtime import _NodeProgress
from .pano_scene import PanoScene, PanoSceneValue
from .scene_build import _timeline_ui, _upstream_ui
from .scene_timeline import _decide_timeline
from .sticker_media import open_video


def _preview_ui(images: torch.Tensor, fps: float, audio, unique_id) -> dict:
    """The execution `ui` of a Preview: the first image, and an MP4 of a batch of two or more."""
    preview_contract = _get_preview_ui_contract("default")
    ui_ret = _init_ui_preview(images, key=preview_contract["image"])
    frame_count = int(images.shape[0]) if hasattr(images, "shape") and images.ndim == 4 else 1
    video_span = frame_count if frame_count > 1 else 0
    progress = _NodeProgress(unique_id, 1 + video_span + 1, label="PanoramaPreview")
    progress.advance(1)
    if video_span > 0:
        progress.stage("Encoding preview video")
    _append_preview_video_from_batch(
        ui_ret,
        images,
        fps,
        audio,
        warning_key="pano_preview_warnings",
        video_key=preview_contract["video"],
        meta_key=preview_contract["meta"],
        progress_callback=progress.frame_callback(progress.value, video_span) if video_span > 0 else None,
    )
    progress.set(1 + video_span)
    progress.stage("Done")
    progress.finish()
    return ui_ret


def _preview_scene_ui(scene: PanoSceneValue) -> dict:
    """The Preview `ui` of a PANO_SCENE (ADR 0041; docs/preview-node.md, "`PANO_SCENE` を見る"): the keys Studio gives
    for the same Scene upstream (`_upstream_ui`), and its Timeline (`pano_timeline_fps`, `pano_timeline_frames`).
    Nothing is drawn or written; the files are those the Studio that made the Scene wrote."""
    ui = _upstream_ui(scene, scene.bg_ui if scene.bg_media is not None else None)
    ui.update(_timeline_ui(scene.fps, len(scene.frames)))
    return ui


def _video_preview_ui(video) -> dict:
    """The Preview `ui` of a VIDEO, with the Timeline fps decided as in Studio."""
    bg = open_video(video, "source")
    rate, _times, _time_base, frames = _decide_timeline(load_scene_state(None), bg, None)
    return _video_ui(video, bg, float(rate), len(frames), _get_preview_ui_contract("default"))


class PanoramaPreviewSceneNode(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        template = io.MatchType.Template("source", [io.Image, io.Video, PanoScene])
        return io.Schema(
            node_id="PanoramaPreviewNode",
            display_name="Panorama Preview",
            category="Panorama Suite",
            inputs=[
                io.MatchType.Input("source", template=template),
                io.Combo.Input("background_range", options=["360", "180"], default="360"),
            ],
            outputs=[
                io.MatchType.Output(template=template, id="output", display_name="output"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, source, background_range="360", unique_id=None):
        # `background_range` is read by the node's widget on the frontend (ADR 0048). A PANO_SCENE carries its own.
        if isinstance(source, PanoSceneValue):
            return io.NodeOutput(source, ui=_preview_scene_ui(source))
        # IMAGE and VIDEO give the legacy Preview's keys, which its node display reads.
        if isinstance(source, Input.Video):
            return io.NodeOutput(source, ui=_video_preview_ui(source))
        # MatchType is not checked by the backend, so an API prompt can send another type.
        if not isinstance(source, torch.Tensor) or source.ndim != 4:
            shape = f" of shape {tuple(source.shape)}" if isinstance(source, torch.Tensor) else ""
            raise TypeError(f"Panorama Preview: source must be an IMAGE, a VIDEO, or a PANO_SCENE, not {type(source).__name__}{shape}.")
        fps = float(_decide_timeline(load_scene_state(None), source, None)[0])
        return io.NodeOutput(source, ui=_preview_ui(source, fps, None, unique_id))
