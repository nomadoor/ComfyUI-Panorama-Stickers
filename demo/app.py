from __future__ import annotations

import json
import sys
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import gradio as gr
import numpy as np

from demo import config
from demo.backend.inference import generate_erp, render_cutout


DEMO_DIR = Path(__file__).resolve().parent
STATIC_DIR = DEMO_DIR / "static"


def _file_url(path: Path) -> str:
    resolved = path.resolve()
    stamp = int(resolved.stat().st_mtime) if resolved.exists() else 0
    return f"/gradio_api/file={quote(str(resolved))}?v={stamp}"


def _head_html() -> str:
    core_url = _file_url(STATIC_DIR / "pano_editor_demo_core.js")
    editor_css_url = _file_url(STATIC_DIR / "pano_editor_demo.css")
    demo_css_url = _file_url(STATIC_DIR / "pano_demo.css")
    demo_js_url = _file_url(STATIC_DIR / "pano_demo_host.js")
    return f"""
<link id="pano-demo-style-link" rel="stylesheet" href="{editor_css_url}">
<link rel="stylesheet" href="{demo_css_url}">
<script>
window.__PANO_DEMO_CORE_URL__ = "{core_url}";
window.__PANO_DEMO_CSS_URL__ = "{editor_css_url}";
</script>
<script type="module" src="{demo_js_url}"></script>
"""


def _mount_html(elem_id: str) -> str:
    return f'<div id="{elem_id}" class="pano-demo-editor"></div>'


def _update_generate_progress(progress: gr.Progress, stage: str, current: int | None = None, total: int | None = None):
    if stage == "prepare":
        progress(0.1, desc="Preparing panorama input...")
        return
    if stage == "load":
        progress(0.25, desc="Loading model...")
        return
    if stage == "generate":
        if current is None or total in (None, 0):
            progress(0.5, desc="Generating panorama...")
            return
        frac = min(max(float(current) / float(total), 0.0), 1.0)
        progress(0.3 + frac * 0.6, desc=f"Generating panorama ({current}/{total})...")
        return
    if stage == "finalize":
        progress(0.95, desc="Finalizing panorama...")


def on_generate(
    prompt: str,
    seed: int,
    cfg_scale: float,
    steps: int,
    lora_strength: float,
    stickers_state_json: str,
    progress=gr.Progress(track_tqdm=False),
):
    advanced_settings = json.dumps(
        {
            "seed": int(seed),
            "cfg_scale": float(cfg_scale),
            "steps": int(steps),
            "lora_strength": float(lora_strength),
        }
    )
    erp = generate_erp(
        prompt,
        advanced_settings,
        stickers_state_json,
        progress_cb=lambda stage, current=None, total=None: _update_generate_progress(progress, stage, current, total),
    )
    progress(1.0, desc="Panorama ready")
    return erp, "Panorama ready"


def _normalize_gradio_rgb_image(value) -> np.ndarray | None:
    if value is None:
        return None
    arr = value if isinstance(value, np.ndarray) else np.asarray(value)
    if arr.ndim != 3:
        return None
    if arr.shape[2] > 3:
        arr = arr[:, :, :3]
    arr = np.asarray(arr)
    if np.issubdtype(arr.dtype, np.integer):
        return arr.astype(np.float32) / 255.0
    rgb = arr.astype(np.float32)
    finite = rgb[np.isfinite(rgb)]
    if finite.size == 0:
        return None
    if finite.max() > 1.0:
        rgb = rgb / 255.0
    return np.clip(rgb, 0.0, 1.0)


def on_render_cutout(generated_erp_image, cutout_state_json: str, output_megapixels: float):
    erp = _normalize_gradio_rgb_image(generated_erp_image)
    if erp is None:
        raise RuntimeError("Generated panorama is missing. Please run Generate again.")
    frame = render_cutout(erp, cutout_state_json, output_megapixels)
    return frame, "Frame ready"


with gr.Blocks(title="FLUX.2 Klein 4B 360 ERP Outpaint LoRA Demo", head=_head_html()) as demo:
    with gr.Column(elem_id="pano-demo-root"):
        gr.Markdown(
            """
# 🌐 FLUX.2 Klein 4B 360 ERP Outpaint LoRA Demo

This is a standalone demo for **FLUX.2 Klein 4B 360 ERP Outpaint LoRA**.  
Arrange one or more source images on the panorama canvas, generate an ERP panorama, then frame a cutout shot inside it.

The first **Generate** may download the base model from Hugging Face into your local cache. Model weights are not stored in this git repo.
"""
        )

        gr.Markdown("---")

        with gr.Row():
            with gr.Column(scale=7):
                gr.HTML(_mount_html("pano-stickers-mount"))
            with gr.Column(scale=3):
                gr.Markdown(
                    """
## 🖼️ Generate a 360 Panorama

1. Use **+Add Image** or drag-and-drop images into the stickers editor.
2. Position, scale, and rotate them until the panorama layout looks right.
3. Enter the required trigger phrase and any extra prompt text, then click **Generate**.
"""
                )
                prompt = gr.Textbox(
                    label="Prompt",
                    value=config.DEFAULT_PROMPT,
                    lines=4,
                    max_lines=4,
                    elem_id="pano-prompt",
                    scale=0,
                )
                with gr.Accordion("Advanced settings", open=False):
                    seed = gr.Number(
                        label="Seed",
                        value=config.DEFAULT_SEED,
                        precision=0,
                        elem_id="pano-seed",
                    )
                    cfg_scale = gr.Slider(
                        minimum=1.0,
                        maximum=20.0,
                        value=config.DEFAULT_CFG_SCALE,
                        step=0.5,
                        label="CFG Scale",
                        elem_id="pano-cfg-scale",
                    )
                    steps = gr.Slider(
                        minimum=1,
                        maximum=60,
                        value=config.DEFAULT_STEPS,
                        step=1,
                        label="Steps",
                        elem_id="pano-steps",
                    )
                    lora_strength = gr.Slider(
                        minimum=0.0,
                        maximum=2.0,
                        value=config.DEFAULT_LORA_STRENGTH,
                        step=0.05,
                        label="LoRA Strength",
                        elem_id="pano-lora-strength",
                    )
                generate_btn = gr.Button("Generate", elem_id="pano-generate-btn", variant="primary")
                status = gr.Textbox(
                    value="Ready",
                    label="Status",
                    elem_id="pano-status",
                    lines=1,
                    max_lines=1,
                    interactive=False,
                )
                generated_erp_image = gr.Image(
                    value=None,
                    type="numpy",
                    image_mode="RGB",
                    interactive=False,
                    show_label=False,
                    elem_id="pano-generated-erp-image",
                )

        gr.Markdown("---")

        with gr.Row():
            with gr.Column(scale=7):
                gr.HTML(_mount_html("pano-cutout-mount"))
            with gr.Column(scale=3):
                gr.Markdown(
                    """
## 🎯 Frame a Shot Inside the Panorama

4. Click **Add frame** in the cutout editor to place a camera frame.
5. Adjust the frame position, size, and roll to choose the shot.
6. Click **Render Frame** to update the extracted view, then use **Save Frame** or **Save ERP**.
"""
                )
                frame_preview = gr.Image(
                    value=None,
                    type="numpy",
                    image_mode="RGB",
                    label="Frame Preview",
                    interactive=False,
                    elem_id="pano-frame-preview",
                    scale=0,
                )
                render_btn = gr.Button("Render Frame", elem_id="pano-render-cutout-btn", variant="primary")
                gr.Markdown("`Render Frame` updates the cutout preview using the current frame placement and output resolution.")
                output_megapixels = gr.Slider(
                    minimum=0.01,
                    maximum=8.0,
                    value=1.0,
                    step=0.05,
                    label="output_megapixels",
                    elem_id="pano-output-megapixels",
                    scale=0,
                )
                with gr.Row():
                    gr.Button("Save Frame", elem_id="pano-save-frame-btn", variant="primary")
                    gr.Button("Save ERP", elem_id="pano-save-erp-btn", variant="primary")

        stickers_state_json = gr.Textbox(
            value="",
            visible=True,
            container=True,
            show_label=False,
            lines=1,
            max_lines=1,
            elem_id="pano-stickers-state",
        )
        cutout_state_json = gr.Textbox(
            value="",
            visible=True,
            container=True,
            show_label=False,
            lines=1,
            max_lines=1,
            elem_id="pano-cutout-state",
        )

        generate_btn.click(
            fn=on_generate,
            inputs=[prompt, seed, cfg_scale, steps, lora_strength, stickers_state_json],
            outputs=[generated_erp_image, status],
        )
        render_btn.click(
            fn=on_render_cutout,
            inputs=[generated_erp_image, cutout_state_json, output_megapixels],
            outputs=[frame_preview, status],
        )


demo.queue()


if __name__ == "__main__":
    demo.launch(server_name="127.0.0.1", server_port=7860, allowed_paths=[str(STATIC_DIR)])
