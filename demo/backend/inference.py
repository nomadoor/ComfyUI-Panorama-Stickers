from __future__ import annotations

import inspect
import json
from pathlib import Path

import numpy as np
from PIL import Image

from comfyui_pano_suite.core.cutout import cutout_from_erp
from comfyui_pano_suite.core.math import calculate_dimensions_from_megapixels, finite_float, finite_int
from comfyui_pano_suite.core.stickers import compose_stickers_to_erp

from demo import config
from .bridge import materialize_state_assets_for_demo, parse_state_json


_DIFFUSERS_RUNTIME = None


def _compose_erp_input(stickers_state_json: str, progress_cb=None) -> np.ndarray:
    if callable(progress_cb):
        progress_cb("prepare")
    state = materialize_state_assets_for_demo(parse_state_json(stickers_state_json))
    output_preset = int(np.clip(finite_int(state.get("output_preset", 2048), 2048), 8, 4096))
    output_w = max(8, output_preset)
    output_h = max(8, output_preset // 2)
    return compose_stickers_to_erp(
        state=state,
        output_w=output_w,
        output_h=output_h,
        bg_erp=None,
        base_dir=None,
        quality="export",
    )


def parse_advanced_settings(advanced_settings: str) -> dict:
    try:
        raw = json.loads(advanced_settings) if advanced_settings else {}
    except Exception:
        raw = {}
    if not isinstance(raw, dict):
        raw = {}
    return {
        "seed": max(0, finite_int(raw.get("seed", config.DEFAULT_SEED), config.DEFAULT_SEED)),
        "cfg_scale": float(
            np.clip(finite_float(raw.get("cfg_scale", config.DEFAULT_CFG_SCALE), config.DEFAULT_CFG_SCALE), 1.0, 20.0)
        ),
        "steps": int(np.clip(finite_int(raw.get("steps", config.DEFAULT_STEPS), config.DEFAULT_STEPS), 1, 60)),
        "lora_strength": float(
            np.clip(
                finite_float(raw.get("lora_strength", config.DEFAULT_LORA_STRENGTH), config.DEFAULT_LORA_STRENGTH),
                0.0,
                2.0,
            )
        ),
    }


def _load_diffusers_runtime(progress_cb=None):
    global _DIFFUSERS_RUNTIME
    if _DIFFUSERS_RUNTIME is not None:
        return _DIFFUSERS_RUNTIME

    model_id = str(config.MODEL_ID).strip()
    if not model_id:
        raise RuntimeError(
            "MODEL_ID is not set. Set it in demo/config_local.py before using Generate."
        )
    if "\n" in model_id or "\r" in model_id:
        raise RuntimeError(
            "MODEL_ID is malformed. Use a single-line Hugging Face repo ID or a local diffusers model directory."
        )
    if model_id.lower().endswith(".safetensors"):
        raise RuntimeError(
            "MODEL_ID must be a Hugging Face repo ID or a local diffusers model directory. "
            "Single .safetensors file paths are not supported in this code path."
        )

    model_path = Path(model_id)
    if model_path.exists() and model_path.is_file():
        raise RuntimeError(
            "MODEL_ID points to a file. Use a Hugging Face repo ID or a local diffusers model directory instead."
        )

    try:
        import transformers
        import torch
        from diffusers import FlowMatchEulerDiscreteScheduler, Flux2KleinPipeline
    except Exception as exc:
        raise RuntimeError(
            "Diffusers runtime is unavailable. Use the pinned demo requirements. "
            "The installed diffusers build must provide Flux2KleinPipeline."
        ) from exc
    if int(str(getattr(transformers, "__version__", "0")).split(".", 1)[0] or "0") >= 5:
        raise RuntimeError(
            f"Unsupported transformers version {transformers.__version__}. This demo currently requires transformers<5."
        )

    device = "cuda" if torch.cuda.is_available() else "cpu"
    if device == "cuda":
        capability = torch.cuda.get_device_capability(0)
        dtype = torch.bfloat16 if capability[0] >= 8 else torch.float16
    else:
        dtype = torch.float32
    local_only = bool(config.LOCAL_FILES_ONLY)

    try:
        if callable(progress_cb):
            progress_cb("load")
        pipe = Flux2KleinPipeline.from_pretrained(
            model_id,
            torch_dtype=dtype,
            local_files_only=local_only,
        )
        if getattr(pipe, "scheduler", None) is not None:
            pipe.scheduler = FlowMatchEulerDiscreteScheduler.from_config(pipe.scheduler.config)
        if device == "cuda" and hasattr(pipe, "enable_model_cpu_offload"):
            pipe.enable_model_cpu_offload()
        else:
            pipe = pipe.to(device)

        lora_source = str(config.LORA_SOURCE).strip()
        lora_adapter = str(config.LORA_ADAPTER).strip() or "pano_demo"
        if lora_source:
            if "\n" in lora_source or "\r" in lora_source:
                raise RuntimeError(
                    "LORA_SOURCE is malformed. Use a single-line Hugging Face repo ID or a local directory."
                )
            try:
                pipe.load_lora_weights(lora_source, adapter_name=lora_adapter, local_files_only=local_only)
            except TypeError:
                try:
                    pipe.load_lora_weights(lora_source, adapter_name=lora_adapter)
                except Exception as exc:
                    raise RuntimeError(
                        f"Failed to load LoRA weights from '{lora_source}'."
                    ) from exc
            except Exception as exc:
                raise RuntimeError(
                    f"Failed to load LoRA weights from '{lora_source}'."
                ) from exc

        _DIFFUSERS_RUNTIME = {
            "pipe": pipe,
            "torch": torch,
            "device": device,
            "lora_source": lora_source,
            "lora_adapter": lora_adapter,
        }
        return _DIFFUSERS_RUNTIME
    except Exception as exc:
        raise RuntimeError(f"Failed to initialize diffusers runtime for model '{model_id}'.") from exc


def _generate_erp_with_diffusers(prompt: str, settings: dict, stickers_state_json: str, progress_cb=None) -> np.ndarray:
    runtime = _load_diffusers_runtime(progress_cb=progress_cb)

    base_erp = _compose_erp_input(stickers_state_json, progress_cb=progress_cb)
    rgb = np.clip(base_erp.astype(np.float32), 0.0, 1.0)
    image = Image.fromarray((rgb * 255.0).astype(np.uint8), mode="RGB")
    image = image.resize((base_erp.shape[1], base_erp.shape[0]), Image.Resampling.BICUBIC)

    pipe = runtime["pipe"]
    torch = runtime["torch"]
    generator = torch.Generator(device=runtime["device"]).manual_seed(int(settings["seed"]))

    if runtime["lora_source"]:
        pipe.set_adapters([runtime["lora_adapter"]], adapter_weights=[float(settings["lora_strength"])])

    total_steps = int(settings["steps"])
    call_kwargs = {
        "prompt": prompt,
        "image": image,
        "num_inference_steps": total_steps,
        "guidance_scale": float(settings["cfg_scale"]),
        "generator": generator,
    }
    if callable(progress_cb):
        progress_cb("generate", 0, total_steps)
    try:
        signature = inspect.signature(pipe.__call__)
    except Exception:
        signature = None
    if signature and "callback_on_step_end" in signature.parameters:
        def _on_step_end(_pipe, step_index, _timestep, callback_kwargs):
            if callable(progress_cb):
                progress_cb("generate", int(step_index) + 1, total_steps)
            return callback_kwargs

        call_kwargs["callback_on_step_end"] = _on_step_end
        if "callback_on_step_end_tensor_inputs" in signature.parameters:
            call_kwargs["callback_on_step_end_tensor_inputs"] = []

    try:
        result = pipe(**call_kwargs)
    except Exception as exc:
        raise RuntimeError("Diffusers image generation failed.") from exc

    out = getattr(result, "images", None)
    if not out:
        raise RuntimeError("Diffusers pipeline returned no images.")
    if callable(progress_cb):
        progress_cb("finalize")
    img = out[0].convert("RGB")
    arr = np.asarray(img, dtype=np.float32) / 255.0
    return arr


def generate_erp(prompt: str, advanced_settings: str, stickers_state_json: str, progress_cb=None) -> np.ndarray:
    settings = parse_advanced_settings(advanced_settings)
    return _generate_erp_with_diffusers(prompt, settings, stickers_state_json, progress_cb=progress_cb)


def render_cutout(erp: np.ndarray, cutout_state_json: str, output_megapixels: float) -> np.ndarray:
    if not isinstance(erp, np.ndarray) or erp.ndim != 3:
        return np.zeros((512, 512, 3), dtype=np.float32)

    state = parse_state_json(cutout_state_json)
    shots = state.get("shots", []) if isinstance(state, dict) else []
    if shots:
        first_shot = shots[0]
        shot = first_shot if isinstance(first_shot, dict) else next((s for s in shots if isinstance(s, dict)), {})
    else:
        shot = {}

    yaw = finite_float(shot.get("yaw_deg", 0.0), 0.0)
    pitch = finite_float(shot.get("pitch_deg", 0.0), 0.0)
    hfov = float(np.clip(finite_float(shot.get("hFOV_deg", 90.0), 90.0), 1.0, 179.0))
    vfov = float(np.clip(finite_float(shot.get("vFOV_deg", 60.0), 60.0), 1.0, 179.0))
    roll = finite_float(shot.get("roll_deg", 0.0), 0.0)
    ow_raw = finite_int(shot.get("out_w", 1024), 1024)
    oh_raw = finite_int(shot.get("out_h", 1024), 1024)
    megapixels = max(0.01, finite_float(output_megapixels, 1.0))

    use_megapixels = (ow_raw <= 0 or oh_raw <= 0 or (ow_raw == 1024 and oh_raw == 1024))
    if use_megapixels:
        out_w, out_h = calculate_dimensions_from_megapixels(megapixels, hfov, vfov, max_side=4096)
    else:
        out_w = int(np.clip(ow_raw, 8, 4096))
        out_h = int(np.clip(oh_raw, 8, 4096))

    frame = cutout_from_erp(erp, yaw, pitch, hfov, vfov, roll, out_w, out_h)
    return np.clip(np.asarray(frame, dtype=np.float32), 0.0, 1.0)
