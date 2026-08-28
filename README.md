# ComfyUI Panorama Stickers

[![English](https://img.shields.io/badge/README-English-3b82f6.svg)](./README.md)
[![日本語](https://img.shields.io/badge/README-日本語-e11d48.svg)](./README_JA.md)
[![中文](https://img.shields.io/badge/README-中文-16a34a.svg)](./README_ZH.md)

[![LoRA 4B](https://img.shields.io/badge/LoRA-4B-f0b429.svg)](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)
[![LoRA 9B](https://img.shields.io/badge/LoRA-9B-f59e0b.svg)](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)
[![Guide](https://img.shields.io/badge/Guide-English-3b82f6.svg)](https://comfyui.nomadoor.net/en/notes/panorama-stickers/)

ComfyUI Panorama Stickers is a small node set and frontend extension for handling 360 equirectangular panoramas inside ComfyUI, including interactive preview, framed cutouts, and compositing.

It was built around my FLUX.2 Klein panorama workflow and can be used with both 4B and 9B variants.

This workflow was built to support my FLUX.2 Klein 4B 360 ERP outpaint LoRA:

- [nomadoor/flux-2-klein-4B-360-erp-outpaint-lora](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)
- [nomadoor/flux-2-klein-9B-360-erp-outpaint-lora](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)

Usage details are documented here:

- English: [comfyui.nomadoor.net/en/notes/panorama-stickers/](https://comfyui.nomadoor.net/en/notes/panorama-stickers/)
- 日本語: [comfyui.nomadoor.net/ja/notes/panorama-stickers/](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/)
- 中文: [comfyui.nomadoor.net/zh/notes/panorama-stickers/](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

## Installation

- Install via ComfyUI Manager.

## Demo

https://github.com/user-attachments/assets/bf74e953-8ceb-4c7f-afa2-1c805f12c7af

- v1.2.0 demo: https://gyazo.com/d4c2517589d7c96d27942af76a1ead27
- v1.3.0 demo: https://gyazo.com/3da5973bb661df8fb1d11dd1e71a2b1f
- v1.4.0 demo: https://gyazo.com/26ceba6dcc3516ce6b8c461fcfde4dad
- v1.5.0 demo: https://gyazo.com/954d9a4acee41a13e6aebfcb125b9a48

## Nodes

- `Panorama Stickers`: Place and adjust sticker images on an ERP canvas, then output the composited panorama.
- `Panorama Cutout`: Compose and extract a framed perspective view from an ERP image.
- `Panorama Preview`: Inspect still or animated ERP inputs in an interactive panorama viewer.
- `Panorama Seam Prep`: Shift an ERP seam into the center and generate hard / blurred vertical seam masks for seam-focused inpainting.

### On-node panorama controls

`Panorama Stickers`, `Panorama Cutout`, and `Panorama Preview` now include lightweight on-node UIs for completing common interactions without opening the Full Editor. Both the legacy canvas and Node 2.0 are supported.

## Workflow

- Panorama image workflows
  - [flux-2-klein-4B-360-erp-outpaint.json](./example_workflows/flux-2-klein-4B-360-erp-outpaint.json)
  - [flux-2-klein-9B-360-erp-outpaint.json](./example_workflows/flux-2-klein-9B-360-erp-outpaint.json)
- 360 panoramic video workflow
  - By using the [LTX2.3_360vr](https://civitai.com/models/2327337/360-degree-panoramic-shot-ltx-23) LoRA created by the author of that model, you can generate 360 panoramic video from text.
  - [LTX-2.3_360vr_distilled_3stage.json](./example_workflows/LTX-2.3_360vr_distilled_3stage.json)

## Changelog

### 1.5.0

- Added lightweight on-node UIs to `Panorama Cutout`, `Panorama Preview`, and `Panorama Stickers`, allowing common interactions to be completed without opening the Full Editor.
- Improved preview performance and reliability across the legacy canvas and Node 2.0.

### 1.4.0

- Rebuilt the Panorama Cutout Frame view as an interactive crop-style camera editor.
- Added direct camera framing, aspect-ratio, orientation, and roll controls while keeping the Panorama view state independent.

### 1.3.0

- Added video support.
- Added 180 panorama support.
- Large performance improvements through refactoring.

### 1.2.0

- Added Paint / Mask tools to the modal panorama editor.

### 1.1.0

- Switched panorama rendering to a WebGL-first pipeline.
- Added support for compositing images produced by `Panorama Cutout` back into the panorama through the `Panorama Stickers` node.

## ToDo

- Add tools to split panoramas into multiple images for external upscaling and merge them back afterward.
- Estimate camera intrinsics automatically from input images.
- Add 3D scene support.
- Add integration with Hugin.

## Acknowledgements

This project was partly influenced by work from [ProGamerGov](https://github.com/ProGamerGov), especially:

- [ProGamerGov/ComfyUI_pytorch360convert](https://github.com/ProGamerGov/ComfyUI_pytorch360convert)
- [ProGamerGov/html-360-viewer](https://github.com/ProGamerGov/html-360-viewer)

## Useful Tools

If you want a quick way to preview an ERP image as a panorama in the browser, this viewer is handy:

- [html-360-viewer demo](https://progamergov.github.io/html-360-viewer/)

## License

MIT
