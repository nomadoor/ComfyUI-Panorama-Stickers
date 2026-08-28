# ComfyUI Panorama Stickers

[![English](https://img.shields.io/badge/README-English-3b82f6.svg)](./README.md)
[![日本語](https://img.shields.io/badge/README-日本語-e11d48.svg)](./README_JA.md)
[![中文](https://img.shields.io/badge/README-中文-16a34a.svg)](./README_ZH.md)

[![LoRA 4B](https://img.shields.io/badge/LoRA-4B-f0b429.svg)](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)
[![LoRA 9B](https://img.shields.io/badge/LoRA-9B-f59e0b.svg)](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)
[![指南](https://img.shields.io/badge/Guide-中文-3b82f6.svg)](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

ComfyUI Panorama Stickers 是一套小型 ComfyUI 节点与前端扩展，用于在 ComfyUI 中处理 360° 等距柱状投影（ERP）全景图，包括交互式预览、带画框的透视裁切和图像合成。

本项目围绕 FLUX.2 Klein 全景图 workflow 开发，可用于 4B 和 9B 两种版本。

此 workflow 旨在配合以下 FLUX.2 Klein 360 ERP outpaint LoRA 使用：

- [nomadoor/flux-2-klein-4B-360-erp-outpaint-lora](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)
- [nomadoor/flux-2-klein-9B-360-erp-outpaint-lora](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)

详细使用说明：

- English: [comfyui.nomadoor.net/en/notes/panorama-stickers/](https://comfyui.nomadoor.net/en/notes/panorama-stickers/)
- 日本語: [comfyui.nomadoor.net/ja/notes/panorama-stickers/](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/)
- 中文: [comfyui.nomadoor.net/zh/notes/panorama-stickers/](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

## 安装

- 通过 ComfyUI Manager 安装。

## 演示

https://github.com/user-attachments/assets/bf74e953-8ceb-4c7f-afa2-1c805f12c7af

- v1.2.0 demo: https://gyazo.com/d4c2517589d7c96d27942af76a1ead27
- v1.3.0 demo: https://gyazo.com/3da5973bb661df8fb1d11dd1e71a2b1f
- v1.4.0 demo: https://gyazo.com/26ceba6dcc3516ce6b8c461fcfde4dad
- v1.5.0 demo: https://gyazo.com/954d9a4acee41a13e6aebfcb125b9a48

## 节点

- `Panorama Stickers`：在 ERP 画布上放置和调整贴图，并输出合成后的全景图。
- `Panorama Cutout`：从 ERP 图像构建并提取带画框的透视视图。
- `Panorama Preview`：通过交互式全景查看器预览静态或动态 ERP 输入。
- `Panorama Seam Prep`：将 ERP 接缝移至中心，并生成用于接缝局部 inpainting 的硬边／模糊竖向遮罩。

### 节点内全景控制

`Panorama Stickers`、`Panorama Cutout` 和 `Panorama Preview` 现已提供轻量级节点内 UI，无需打开 Full Editor 即可完成常用操作。Legacy canvas 和 Node 2.0 均受支持。

## Workflow

- 全景静态图 workflow
  - [flux-2-klein-4B-360-erp-outpaint.json](./example_workflows/flux-2-klein-4B-360-erp-outpaint.json)
  - [flux-2-klein-9B-360-erp-outpaint.json](./example_workflows/flux-2-klein-9B-360-erp-outpaint.json)
- 360° 全景视频 workflow
  - 使用该模型作者制作的 [LTX2.3_360vr](https://civitai.com/models/2327337/360-degree-panoramic-shot-ltx-23) LoRA，可以通过文本生成 360° 全景视频。
  - [LTX-2.3_360vr_distilled_3stage.json](./example_workflows/LTX-2.3_360vr_distilled_3stage.json)

## 更新日志

### 1.5.0

- 为 `Panorama Cutout`、`Panorama Preview` 和 `Panorama Stickers` 添加轻量级节点内 UI，无需打开 Full Editor 即可完成常用操作。
- 改善了 Legacy canvas 和 Node 2.0 中预览的性能与可靠性。

### 1.4.0

- 将 Panorama Cutout 的 Frame view 重构为交互式裁切风格的 camera editor。
- 在保持 Panorama view 状态独立的同时，加入直接调整 camera framing、aspect ratio、orientation 和 roll 的功能。

### 1.3.0

- 添加视频支持。
- 添加 180° 全景支持。
- 通过重构大幅提升性能。

### 1.2.0

- 在模态全景 editor 中加入 Paint／Mask 工具。

### 1.1.0

- 将全景渲染切换为 WebGL 优先 pipeline。
- 支持通过 `Panorama Stickers` 将 `Panorama Cutout` 生成的图像重新合成至全景图。

## ToDo

- 添加将全景图拆分为多张图像以便外部 upscaling，并在处理后重新合并的工具。
- 根据输入图像自动估算 camera intrinsics。
- 添加 3D scene 支持。
- 添加 Hugin 集成。

## 致谢

本项目部分受到 [ProGamerGov](https://github.com/ProGamerGov) 以下项目的启发：

- [ProGamerGov/ComfyUI_pytorch360convert](https://github.com/ProGamerGov/ComfyUI_pytorch360convert)
- [ProGamerGov/html-360-viewer](https://github.com/ProGamerGov/html-360-viewer)

## 实用工具

如果需要在浏览器中快速将 ERP 图像作为全景图预览，可以使用此查看器：

- [html-360-viewer demo](https://progamergov.github.io/html-360-viewer/)

## 许可证

MIT
