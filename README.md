# ComfyUI Panorama Stickers

[![English](https://img.shields.io/badge/README-English-3b82f6.svg)](./README.md)
[![日本語](https://img.shields.io/badge/README-日本語-e11d48.svg)](./README_JA.md)
[![中文](https://img.shields.io/badge/README-中文-16a34a.svg)](./README_ZH.md)
[![Guide](https://img.shields.io/badge/Guide-English-3b82f6.svg)](https://comfyui.nomadoor.net/en/notes/panorama-stickers/)

A ComfyUI node set for placing images, videos and 3D in a 360° panorama and shooting it from any viewpoint.

Fix the shot with an image generation model, then put it back where it was. You can do this round trip inside a ComfyUI workflow.

https://github.com/user-attachments/assets/bf74e953-8ceb-4c7f-afa2-1c805f12c7af

## Panorama Studio

This is the core of the node set.

It handles a panorama as a distant view (Sky) and 3D as a space with depth (World), together. Things pasted on the Sky stay in the same direction wherever the Camera moves. Things placed in the World look different depending on the Camera's position.

The node has four inputs.

- `background`: the background panorama (image or video)
- `world`: the base 3D (a mesh, a Gaussian splat, or a shape estimated with MoGe or similar)
- `sticker`: images, videos and 3D to place in the scene. You can also add them by dropping them into the editor
- `scene`: carries over the scene of another Panorama Studio

In the editor, you move stickers and the Camera with Keyframes on the timeline, paint and draw masks, and shoot with the Camera. You can shoot a panorama (360° / 180°) or a normal camera view (Frame).

## Main uses

### Paste images to make a panorama

1. Drop images into the Panorama Studio editor and paste them anywhere on the panorama. You can paste as many as you like.
2. Set the Camera to panorama and shoot. You get a panorama with the pasted images surrounded by the background color.
3. Pass it to a generation model that uses a panorama LoRA, and it fills in the surroundings.

### Fix part of a panorama

1. Set the Camera to Frame and shoot the part you want to fix.
2. Fix the shot with a generation model.
3. Connect the fixed image, together with `sticker_state`, to the `sticker` of the next Panorama Studio. It goes back to exactly where it was shot.

### Re-shoot an image or video from another angle

1. Turn the image or video into 3D with MoGe or similar, and connect it to `world`.
2. In the editor, move the Camera and shoot from another angle.
3. Finish the missing parts of the shot with a generation model.

### Make a video

Connect a video to the background, or move stickers or the Camera with Keyframes, and the `video` output holds all the frames.

## Other nodes

- **Panorama Preview**: look around panorama images and videos, or a Studio `scene`, in a separate window.
- **Panorama Seam Prep**: moves the left-right seam of a panorama to the center, and makes a mask for fixing the seam.
- The earlier nodes (Panorama Stickers, Panorama Cutout, Panorama Preview (legacy)) still work as before.

## Installation

- Search for "Panorama Stickers" in ComfyUI Manager and install it.
- Requires ComfyUI 0.35.0 or later.

## Workflows

| Workflow | What it does |
|---|---|
| [qwen-image-2.1-360-erp-outpaint.json](./example_workflows/qwen-image-2.1-360-erp-outpaint.json) | Paste images to make a panorama (Qwen-Image 2.1) |
| [qwen-image-2.1-moge3-anyangle.json](./example_workflows/qwen-image-2.1-moge3-anyangle.json) | Turn an image into 3D with MoGe 3, shoot it from another angle, and finish it with Qwen-Image 2.1 |
| [LTX-2.3_360vr_distilled_3stage.json](./example_workflows/LTX-2.3_360vr_distilled_3stage.json) | Make a 360° video from text (LTX-2.3 and the [LTX2.3_360vr](https://civitai.com/models/2327337/360-degree-panoramic-shot-ltx-23) LoRA by the model's author) |

Earlier workflows: FLUX.2 Klein [4B](./example_workflows/flux-2-klein-4B-360-erp-outpaint.json) / [9B](./example_workflows/flux-2-klein-9B-360-erp-outpaint.json) ([4B LoRA](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora) / [9B LoRA](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora))

## Guide

The guide explains how to use it in detail.

- [日本語](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/) / [English](https://comfyui.nomadoor.net/en/notes/panorama-stickers/) / [中文](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

## Troubleshooting

If only the editor is extremely slow, open `chrome://gpu` (`edge://gpu` for Edge) in the browser and check that WebGL says "Hardware accelerated". If it says "Software only", fully quit the browser and open it again.

## Changelog

- **2.0.1**: The Studio editor shows the output size at all times and keeps the inspector the same across tabs; objects can be moved in the Camera tab; the node shows depth grids (MoGe, DA3) and the upstream scene, and can play; paint can be grabbed and moved; fixes.
- **2.0.0**: Added Panorama Studio and the new Panorama Preview.
- **1.5.0**: Added light on-node UIs to Stickers, Cutout and Preview.
- **1.4.0**: Rebuilt Cutout's Frame editing as a crop-style camera editor.
- **1.3.0**: Added support for video and 180° panoramas.
- **1.2.0**: Added paint and mask.
- **1.1.0**: Moved rendering to WebGL, and made it possible to put images made with Cutout back with Stickers.

## Acknowledgements

This project was influenced by the work of [ProGamerGov](https://github.com/ProGamerGov):

- [ComfyUI_pytorch360convert](https://github.com/ProGamerGov/ComfyUI_pytorch360convert)
- [html-360-viewer](https://github.com/ProGamerGov/html-360-viewer) (also handy for quickly viewing an ERP image in the browser: [demo](https://progamergov.github.io/html-360-viewer/))

## License

MIT
