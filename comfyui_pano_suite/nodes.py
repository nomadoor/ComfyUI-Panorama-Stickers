"""The package's nodes as ComfyUI registers them (`PanoramaSuiteExtension`, `comfy_entrypoint`), and the legacy nodes
`PanoramaStickers`, `PanoramaCutout`, and `PanoramaPreview`.

The other nodes are in `studio_node.py`, `preview_node.py`, and `seam_prep.py`, each built from the modules beside
them. The three legacy node classes are defined here, with their helpers in `legacy_nodes.py`, because
`tests/test_nodes_preview.py` builds them from a fresh import of this module with a stand-in ComfyUI API."""
import hashlib
import logging
from pathlib import Path

# Also read as `nodes.comfy.model_management` by the tests that replace ComfyUI's device functions.
import comfy.model_management
import numpy as np
import torch
from comfy_api.latest import ComfyExtension, io
from typing_extensions import override

from .comfy_image_resolver import resolve_painting_layer_payload
from .core.cutout import build_cutout_sampling_map, sample_cutout_from_sampling_map
from .core.display_layers import sample_overlay_rgba_from_sampling_map as _sample_overlay_rgba_from_sampling_map
from .core.math import calculate_dimensions_from_megapixels, finite_float
from .core.painting import alpha_composite_over_rgb, painting_state_has_renderables
from .core.state import _normalize_hex_color, merge_state, normalize_coverage, parse_sticker_state
from .legacy_nodes import (
    CUTOUT_MAX_OUTPUT_SIDE,
    _apply_overlay_coverage_to_mask,
    _apply_overlay_coverage_to_rgba,
    _build_overlay_erp_rgba_and_mask,
    _build_runtime_external_sticker,
    _build_sticker_state_json,
    _external_sticker_id,
    _finalize_batched_node_output,
    _get_display_list_entries,
    _hash_text,
    _iter_external_sticker_payloads,
    _make_batched_image_and_mask_outputs,
    _pose_from_sticker_state,
    _render_sticker_output_batches,
    _resolve_cutout_source_batch,
    _safe_int,
    _single_image_to_numpy,
)
from .media_ui import _append_preview_video_from_batch, _flush_warnings, _get_preview_ui_contract, _init_ui_preview
from .node_runtime import NODE_RUNTIME, _NodeProgress, _audio_signature, _tensor_cache_identity
from .preview_node import PanoramaPreviewSceneNode, _preview_ui
from .seam_prep import PanoramaSeamPrepNode
from .studio_node import PanoramaStudioNode


def _common_video_preview_inputs(*, default_fps: float = 24.0) -> list:
    return [
        io.Float.Input(
            "fps",
            default=float(default_fps),
            min=1.0,
            max=120.0,
            step=1.0,
            tooltip="Preview playback framerate.",
        ),
        io.Audio.Input(
            "audio",
            optional=True,
            tooltip="Optional audio for preview playback.",
        ),
    ]


class PanoramaStickersNode(io.ComfyNode):
    MAX_OUTPUT_SIDE = 4096

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaStickers",
            display_name="Panorama Stickers",
            category="Panorama Suite",
            inputs=[
                io.Combo.Input(
                    "output_preset",
                    options=["1024", "2048", "4096", "auto"],
                    default="2048",
                ),
                io.Combo.Input(
                    "coverage",
                    options=["360", "180"],
                    default="360",
                ),
                io.String.Input("bg_color", default="#00ff00", multiline=False),
                io.String.Input(
                    "state_json",
                    default="",
                    multiline=True,
                    dynamic_prompts=False,
                    advanced=True,
                ),
                io.Image.Input("bg_erp", optional=True),
                io.Image.Input("sticker_image", optional=True),
                io.String.Input(
                    "sticker_state",
                    default="",
                    multiline=False,
                    dynamic_prompts=False,
                    optional=True,
                    force_input=True,
                ),
            ] + _common_video_preview_inputs(),
            outputs=[
                io.Image.Output("cond_erp", display_name="cond_erp"),
                io.Mask.Output("mask", display_name="mask"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @staticmethod
    def _parse_output_preset(v, max_val=4096):
        if isinstance(v, str):
            head = v.split("x", 1)[0].strip()
            val = int(float(head))
        else:
            val = int(v)
        return int(np.clip(val, 8, max_val))

    @staticmethod
    def _is_auto_output_preset(v) -> bool:
        return isinstance(v, str) and v.strip().lower() in {"auto", "bg", "background"}

    @staticmethod
    def _bg_erp_size(bg_erp) -> tuple[int, int] | None:
        if bg_erp is None or not hasattr(bg_erp, "shape"):
            return None
        try:
            shape = tuple(int(x) for x in bg_erp.shape)
        except Exception:
            return None
        if len(shape) == 4 and shape[1] > 0 and shape[2] > 0:
            return shape[2], shape[1]
        if len(shape) == 3 and shape[0] > 0 and shape[1] > 0:
            return shape[1], shape[0]
        return None

    @classmethod
    def _resolve_output_size(cls, output_preset, coverage, bg_erp=None) -> tuple[int, int, bool]:
        coverage_value = normalize_coverage(coverage)
        if cls._is_auto_output_preset(output_preset):
            bg_size = cls._bg_erp_size(bg_erp)
            if bg_size is not None:
                out_w = bg_size[0]
                out_h = max(1, out_w if coverage_value == 180 else bg_size[1])
                return out_w, out_h, True
            out_w = cls._parse_output_preset("2048", max_val=cls.MAX_OUTPUT_SIDE)
        else:
            out_w = cls._parse_output_preset(output_preset, max_val=cls.MAX_OUTPUT_SIDE)
        out_h = max(1, out_w if coverage_value == 180 else (out_w // 2))
        return out_w, out_h, False

    @staticmethod
    def _resolve_overlay_workspace_size(out_w: int, out_h: int, coverage) -> tuple[int, int]:
        workspace_w = max(1, int(out_w))
        coverage_value = normalize_coverage(coverage)
        if coverage_value == 180:
            return workspace_w, max(1, workspace_w // 2)
        return workspace_w, max(1, int(out_h))

    @classmethod
    def execute(cls, output_preset, coverage, bg_color, state_json, bg_erp=None, sticker_image=None, sticker_state="", fps=24.0, audio=None, unique_id=None):
        coverage_value = normalize_coverage(coverage)
        out_w, out_h, output_uses_bg_size = cls._resolve_output_size(output_preset, coverage_value, bg_erp=bg_erp)
        workspace_w, workspace_h = cls._resolve_overlay_workspace_size(out_w, out_h, coverage_value)
        bg_hex = _normalize_hex_color(bg_color)
        fps_value = max(1.0, finite_float(fps, 24.0))
        state = merge_state(state_json, fallback_preset=out_w, fallback_bg=bg_hex)
        warnings = []
        if cls._is_auto_output_preset(output_preset) and not output_uses_bg_size:
            warnings.append("Output preset is auto, but bg_erp is not connected; using 2048 instead.")
        external_payloads = list(_iter_external_sticker_payloads(sticker_image=sticker_image, sticker_state=sticker_state))
        batch_frames = int(bg_erp.shape[0]) if bg_erp is not None and hasattr(bg_erp, "shape") and len(bg_erp.shape) == 4 else 1
        render_span = max(1, batch_frames if bg_erp is not None else 1)
        video_span = batch_frames if batch_frames > 1 else 0
        progress = _NodeProgress(unique_id, len(external_payloads) + 2 + render_span + video_span + video_span + 1, label="PanoramaStickers")
        progress.set(0)
        progress.stage("Preparing sticker inputs")

        torch_device = comfy.model_management.get_torch_device()
        render_device = None if comfy.model_management.is_device_cpu(torch_device) else torch_device

        state["output_preset"] = out_w
        state["bg_color"] = bg_hex
        state["coverage"] = coverage_value

        render_stickers = []
        for sticker in state.get("stickers", []):
            if isinstance(sticker, dict):
                render_stickers.append(dict(sticker))

        external_pose_ui = None
        external_state_hash_ui = None
        for payload in external_payloads:
            parsed_state = parse_sticker_state(payload.get("state_raw"))
            payload_state_hash = _hash_text(payload.get("state_raw"))
            if external_state_hash_ui is None:
                external_state_hash_ui = payload_state_hash
            if external_pose_ui is None and parsed_state is not None:
                external_pose_ui = {
                    "yaw_deg": float(parsed_state.get("yaw_deg", 0.0)),
                    "pitch_deg": float(parsed_state.get("pitch_deg", 0.0)),
                    "hFOV_deg": float(parsed_state.get("hFOV_deg", 30.0)),
                    "rot_deg": float(parsed_state.get("roll_deg", 0.0)),
                }
            img_np = _single_image_to_numpy(payload.get("image_tensor"), warnings)
            if img_np is None:
                continue
            image_h = int(img_np.shape[0]) if img_np.ndim >= 2 else 1
            image_w = int(img_np.shape[1]) if img_np.ndim >= 2 else 1
            if img_np.shape[-1] == 3:
                alpha = np.ones((image_h, image_w, 1), dtype=np.float32)
                image_rgba = np.concatenate([img_np, alpha], axis=-1)
            else:
                image_rgba = img_np[..., :4]
            parsed_pose = _pose_from_sticker_state(parsed_state, image_w, image_h, warnings) if parsed_state is not None else None
            if external_pose_ui is None and parsed_pose is not None:
                external_pose_ui = dict(parsed_pose)

            external_id = _external_sticker_id(payload.get("slot_key"))
            matched_existing = False
            for idx, sticker in enumerate(render_stickers):
                if str(sticker.get("id", "")) != external_id:
                    continue
                runtime_sticker = _build_runtime_external_sticker(
                    sticker,
                    external_id=external_id,
                    slot_key=str(payload.get("slot_key") or "1"),
                    payload_state_hash=payload_state_hash,
                    parsed_pose=parsed_pose,
                    image_rgba=image_rgba,
                    image_w=image_w,
                    image_h=image_h,
                    z_index=_safe_int(sticker.get("z_index", 0), 0),
                )
                render_stickers[idx] = runtime_sticker
                matched_existing = True
                break
            if not matched_existing:
                next_z = max((_safe_int(st.get("z_index", 0), 0) for st in render_stickers if isinstance(st, dict)), default=-1) + 1
                render_stickers.append(_build_runtime_external_sticker(
                    None,
                    external_id=external_id,
                    slot_key=str(payload.get("slot_key") or "1"),
                    payload_state_hash=payload_state_hash,
                    parsed_pose=parsed_pose,
                    image_rgba=image_rgba,
                    image_w=image_w,
                    image_h=image_h,
                    z_index=next_z,
                ))
            progress.advance(1)

        render_state = dict(state)
        render_state["stickers"] = render_stickers
        stickers_bg_contract = _get_preview_ui_contract("stickers_bg")
        stickers_output_contract = _get_preview_ui_contract("stickers_output")
        stickers_input_contract = _get_preview_ui_contract("stickers_input")
        ui_ret = _init_ui_preview(bg_erp, key=stickers_bg_contract["image"])

        painting_payload = resolve_painting_layer_payload(
            state.get("painting_layer"),
            erp_width=workspace_w,
            erp_height=workspace_h,
        )
        progress.stage("Building overlay and mask layers")
        overlay_rgba, mask_bw, _overlay_stats_unused, _used_group_layers_unused = _build_overlay_erp_rgba_and_mask(
            render_state,
            erp_width=workspace_w,
            erp_height=workspace_h,
            painting_payload=painting_payload,
            base_dir=Path.cwd(),
            quality="export",
            ui_ret=ui_ret,
            warning_key="pano_sticker_warnings",
        )
        overlay_rgba = _apply_overlay_coverage_to_rgba(overlay_rgba, coverage_value, out_w, out_h)
        mask_bw = _apply_overlay_coverage_to_mask(mask_bw, coverage_value, out_w, out_h)
        if mask_bw is None:
            mask_bw = np.zeros((out_h, out_w), dtype=np.float32)
        progress.advance(1)

        render_start = progress.value
        progress.stage("Rendering panorama frames")
        out_batch, bg_batch = _render_sticker_output_batches(
            bg_erp,
            out_h=out_h,
            out_w=out_w,
            bg_hex=bg_hex,
            overlay_rgba=overlay_rgba,
            device=render_device,
            progress_callback=progress.frame_callback(render_start, render_span),
        )
        progress.set(render_start + render_span)
        output_encode_start = progress.value
        if video_span > 0:
            progress.stage("Encoding output preview video")
        out_t, mask_t, out_batch = _finalize_batched_node_output(
            ui_ret,
            out_batch,
            mask_bw,
            fps=fps_value,
            audio=audio,
            warning_key="pano_sticker_warnings",
            video_key=stickers_output_contract["video"],
            meta_key=stickers_output_contract["meta"],
            progress_callback=progress.frame_callback(output_encode_start, video_span) if video_span > 0 else None,
        )
        progress.set(output_encode_start + video_span)
        if sticker_image is not None:
            ui_ret.update(_init_ui_preview(sticker_image, key=stickers_input_contract["image"]))
        if external_pose_ui is not None:
            ui_ret["pano_sticker_input_pose"] = [external_pose_ui]
        if external_state_hash_ui is not None:
            ui_ret["pano_sticker_input_state_hash"] = [external_state_hash_ui]
        input_encode_start = progress.value
        if video_span > 0:
            progress.stage("Encoding background preview video")
        _append_preview_video_from_batch(
            ui_ret,
            bg_batch,
            fps_value,
            audio,
            warning_key="pano_sticker_warnings",
            video_key=stickers_bg_contract["video"],
            meta_key=stickers_bg_contract["meta"],
            progress_callback=progress.frame_callback(input_encode_start, video_span) if video_span > 0 else None,
        )
        progress.set(input_encode_start + video_span)
        _flush_warnings(ui_ret, "pano_sticker_warnings", warnings)
        progress.stage("Done")
        progress.finish()
        return io.NodeOutput(out_t, mask_t, ui=ui_ret)


class PanoramaCutoutNode(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaCutout",
            display_name="Panorama Cutout",
            category="Panorama Suite",
            inputs=[
                io.Image.Input("erp_image"),
                io.Combo.Input(
                    "coverage",
                    options=["360", "180"],
                    default="360",
                ),
                io.String.Input(
                    "state_json",
                    default="",
                    multiline=True,
                    dynamic_prompts=False,
                    advanced=True,
                ),
                io.Float.Input("output_megapixels", default=1.0, min=0.01, step=0.05),
            ] + _common_video_preview_inputs(),
            outputs=[
                io.Image.Output("rect_image", display_name="rect_image"),
                io.String.Output("sticker_state_json", display_name="sticker_state"),
                io.Mask.Output("mask", display_name="mask"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @staticmethod
    def _payload_has_layers(payload: dict | None) -> bool:
        return isinstance(payload, dict) and (
            payload.get("paint") is not None
            or payload.get("mask") is not None
            or bool(payload.get("groups"))
        )

    @classmethod
    def execute(cls, erp_image, coverage, state_json, output_megapixels=1.0, fps=24.0, audio=None, unique_id=None):
        output_megapixels = max(0.01, finite_float(output_megapixels, 1.0))
        fps_value = max(1.0, finite_float(fps, 24.0))
        state = merge_state(state_json)
        coverage_value = normalize_coverage(coverage)
        state["coverage"] = coverage_value
        shots = state.get("shots", []) if isinstance(state, dict) else []
        src_batch = _resolve_cutout_source_batch(erp_image)
        src = src_batch[0]
        batch_frames = int(src_batch.shape[0]) if hasattr(src_batch, "shape") and len(src_batch.shape) == 4 else 1

        preview_contract = _get_preview_ui_contract("default")
        input_video_contract = _get_preview_ui_contract("input_video")
        ui_ret = _init_ui_preview(erp_image, key=preview_contract["image"])
        if batch_frames > 1:
            source_identity = _tensor_cache_identity(erp_image)
            input_video_cache_key = (
                "cutout_input_video",
                source_identity,
                float(fps_value),
                _audio_signature(audio),
            )
            NODE_RUNTIME.append_cached_video(
                ui_ret,
                erp_image,
                fps_value,
                audio,
                cache_key=input_video_cache_key,
                warning_key="pano_cutout_warnings",
                video_key=input_video_contract["video"],
                meta_key=input_video_contract["meta"],
            )
        if not shots:
            video_span = batch_frames if batch_frames > 1 else 0
            progress = _NodeProgress(unique_id, 1 + batch_frames + video_span + 1, label="PanoramaCutout")
            progress.advance(1)
            progress.stage("Preparing passthrough frames")
            oh = int(src.shape[0])
            ow = int(src.shape[1])
            painting_payload = resolve_painting_layer_payload(
                state.get("painting_layer"),
                erp_width=ow,
                erp_height=oh,
            )
            painting_state = state.get("painting")
            _has_display_entries = bool(_get_display_list_entries(state))
            _payload_has_content = cls._payload_has_layers(painting_payload)
            _has_renderables = painting_state_has_renderables(painting_state)

            if not _has_display_entries and not _payload_has_content and not _has_renderables:
                # Pure passthrough: nothing to composite — reuse input directly
                out_batch = src_batch.astype(np.float32, copy=False)
                mask_bw = np.zeros((oh, ow), dtype=np.float32)
                progress.set(1 + batch_frames)
            else:
                progress.stage("Compositing passthrough frames")
                overlay_rgba, mask_bw, _overlay_stats_unused, _used_group_layers_unused = _build_overlay_erp_rgba_and_mask(
                    state,
                    erp_width=ow,
                    erp_height=oh,
                    painting_payload=painting_payload,
                    base_dir=Path.cwd(),
                    quality="export",
                    ui_ret=ui_ret,
                    warning_key="pano_cutout_warnings",
                )
                # Pre-allocate to avoid list accumulation + np.stack peak
                out_batch = np.empty((batch_frames, oh, ow, 3), dtype=np.float32)
                for index, frame in enumerate(src_batch):
                    frame_out = frame.astype(np.float32, copy=False)
                    if overlay_rgba is not None:
                        frame_out = alpha_composite_over_rgb(frame_out, overlay_rgba)
                    out_batch[index] = frame_out
                    progress.set(1 + index + 1)
            if mask_bw is None:
                mask_bw = np.zeros((oh, ow), dtype=np.float32)

            encode_start = progress.value
            if video_span > 0:
                progress.stage("Encoding preview video")
            # IMAGE/mask output
            out_t, mask_t, _ = _make_batched_image_and_mask_outputs(out_batch, mask_bw)
            # VIDEO: pass as torch tensor so encode_frames_to_mp4 uses the streaming path
            # (no full-batch np.clip upfront → progress callbacks fire immediately)
            _append_preview_video_from_batch(
                ui_ret,
                torch.from_numpy(np.ascontiguousarray(out_batch, dtype=np.float32)),
                fps_value,
                audio,
                warning_key="pano_cutout_warnings",
                video_key=preview_contract["video"],
                meta_key=preview_contract["meta"],
                progress_callback=progress.frame_callback(encode_start, video_span) if video_span > 0 else None,
            )
            progress.set(encode_start + video_span)
            progress.stage("Done")
            progress.finish()
            return io.NodeOutput(out_t, '{"stickers":[],"version":1}', mask_t, ui=ui_ret)

        shot = shots[0]
        yaw = finite_float(shot.get("yaw_deg", 0.0), 0.0)
        pitch = finite_float(shot.get("pitch_deg", 0.0), 0.0)
        hfov = float(np.clip(finite_float(shot.get("hFOV_deg", 90.0), 90.0), 1.0, 179.0))
        vfov = float(np.clip(finite_float(shot.get("vFOV_deg", 60.0), 60.0), 1.0, 179.0))
        roll = finite_float(shot.get("roll_deg", 0.0), 0.0)
        ow, oh = calculate_dimensions_from_megapixels(
            output_megapixels, hfov, vfov, max_side=CUTOUT_MAX_OUTPUT_SIDE
        )

        sticker_state_json = _build_sticker_state_json(shot, ow, oh)
        try:
            video_span = batch_frames if batch_frames > 1 else 0
            progress = _NodeProgress(unique_id, 1 + batch_frames + video_span + 1, label="PanoramaCutout")
            progress.advance(1)
            source_identity = _tensor_cache_identity(erp_image)
            cutout_render_signature = (
                source_identity,
                hashlib.sha1(str(state_json or "").encode("utf-8")).hexdigest(),
                int(coverage_value),
                int(ow),
                int(oh),
            )
            progress.stage("Sampling cutout frames")
            painting_payload = resolve_painting_layer_payload(
                state.get("painting_layer"),
                erp_width=int(src.shape[1]),
                erp_height=int(src.shape[0]),
            )
            sampling_map = build_cutout_sampling_map(
                src.shape,
                yaw,
                pitch,
                hfov,
                vfov,
                roll,
                ow,
                oh,
                coverage_value,
            )
            out_batch = np.empty((batch_frames, oh, ow, 3), dtype=np.float32)
            for index, frame in enumerate(src_batch):
                out_batch[index] = sample_cutout_from_sampling_map(frame, sampling_map)
                progress.set(1 + index + 1)
            overlay_rgba, overlay_mask_bw, _overlay_stats_unused, _used_group_layers_unused = _build_overlay_erp_rgba_and_mask(
                state,
                erp_width=int(src.shape[1]),
                erp_height=int(src.shape[0]),
                painting_payload=painting_payload,
                base_dir=Path.cwd(),
                quality="export",
                ui_ret=ui_ret,
                warning_key="pano_cutout_warnings",
            )
            if isinstance(overlay_rgba, np.ndarray):
                overlay_cutout = _sample_overlay_rgba_from_sampling_map(overlay_rgba, sampling_map)
                for index in range(batch_frames):
                    out_batch[index] = alpha_composite_over_rgb(out_batch[index], overlay_cutout)
            # The mask is the uploaded one as float (`_build_overlay_erp_rgba_and_mask`), else the state's strokes drawn.
            mask_bw = sample_cutout_from_sampling_map(overlay_mask_bw, sampling_map)
            encode_start = progress.value
            out_t, mask_t, _out_batch_unused = _make_batched_image_and_mask_outputs(out_batch, mask_bw)
            if video_span > 0:
                cutout_video_key = (
                    "cutout_video",
                    cutout_render_signature,
                    float(fps_value),
                    _audio_signature(audio),
                )
                NODE_RUNTIME.append_cached_video(
                    ui_ret,
                    out_batch,
                    fps_value,
                    audio,
                    cache_key=cutout_video_key,
                    warning_key="pano_cutout_warnings",
                    video_key=preview_contract["video"],
                    meta_key=preview_contract["meta"],
                    progress_callback=progress.frame_callback(encode_start, video_span),
                    status_callback=lambda status: progress.stage(
                        "Using cached preview video" if status == "hit" else "Encoding preview video"
                    ),
                )
            progress.set(encode_start + video_span)
            progress.stage("Done")
            progress.finish()
            return io.NodeOutput(out_t, sticker_state_json, mask_t, ui=ui_ret)
        except Exception as ex:
            logging.getLogger(__name__).exception("[PanoramaCutout] strict export failed")
            raise


class PanoramaPreviewNode(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaPreview",
            display_name="Panorama Preview (legacy)",
            category="Panorama Suite",
            # Replaced by Panorama Preview (`PanoramaPreviewNode`): it stays registered, so saved workflows load it,
            # but the node search no longer offers it (docs/preview-node.md).
            is_deprecated=True,
            inputs=[
                io.Image.Input("erp_image"),
                io.Combo.Input(
                    "coverage",
                    options=["360", "180"],
                    default="360",
                ),
            ] + _common_video_preview_inputs(),
            outputs=[
                io.Image.Output("image", display_name="image"),
            ],
            hidden=[io.Hidden.unique_id],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, erp_image, coverage="360", fps=24.0, audio=None, unique_id=None):
        ui_ret = {}
        if erp_image is not None:
            ui_ret = _preview_ui(erp_image, max(1.0, finite_float(fps, 24.0)), audio, unique_id)
        return io.NodeOutput(erp_image, ui=ui_ret)


class PanoramaSuiteExtension(ComfyExtension):
    @override
    async def get_node_list(self) -> list[type[io.ComfyNode]]:
        return [
            PanoramaStickersNode,
            PanoramaCutoutNode,
            PanoramaPreviewNode,
            PanoramaPreviewSceneNode,
            PanoramaStudioNode,
            PanoramaSeamPrepNode,
        ]


async def comfy_entrypoint() -> PanoramaSuiteExtension:
    return PanoramaSuiteExtension()
