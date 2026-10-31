# ComfyUI Panorama Stickers

[![English](https://img.shields.io/badge/README-English-3b82f6.svg)](./README.md)
[![日本語](https://img.shields.io/badge/README-日本語-e11d48.svg)](./README_JA.md)
[![中文](https://img.shields.io/badge/README-中文-16a34a.svg)](./README_ZH.md)
[![指南](https://img.shields.io/badge/Guide-中文-3b82f6.svg)](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

这是一套 ComfyUI 节点，可以把图像、视频和 3D 放进 360° 全景，再从任意视角拍摄。

用图像生成模型修改拍下的画面，再放回原来的位置。这一往返流程都可以在 ComfyUI 的 workflow 中完成。

https://github.com/user-attachments/assets/bf74e953-8ceb-4c7f-afa2-1c805f12c7af

## Panorama Studio

这是本节点集的核心。

它把全景当作远处的景色（Sky），把 3D 当作有纵深的空间（World），一起处理。贴在 Sky 上的东西，无论 Camera 移动到哪里，看起来都在同一个方向。放在 World 里的东西，会随 Camera 的位置不同而呈现不同的样子。

节点有四个输入。

- `background`：背景全景（图像、视频）
- `world`：作为基础的 3D（网格、Gaussian splat，或用 MoGe 等估计出的形状）
- `sticker`：放进场景的图像、视频、3D。也可以拖放到编辑器中添加
- `scene`：继承另一个 Panorama Studio 的场景

在编辑器中，可以用时间轴上的 Keyframe 让贴纸和 Camera 动起来，进行绘画、绘制遮罩，并用 Camera 拍摄。拍摄方式有全景（360°／180°）和普通相机画面（Frame）。

## 主要用法

### 贴上图像，制作全景

1. 把图像拖放到 Panorama Studio 的编辑器中，贴在全景的任意位置。可以贴任意多张。
2. 把 Camera 设为全景并拍摄，就会得到贴上的图像周围是背景色的全景。
3. 把它交给使用全景 LoRA 的生成模型，补画周围的部分。

### 修改全景的一部分

1. 把 Camera 设为 Frame，拍下想修改的地方。
2. 用生成模型修改拍下的画面。
3. 把修改后的画面连同 `sticker_state` 一起连到下一个 Panorama Studio 的 `sticker`，就会原样回到拍摄的位置。

### 从别的角度重新拍摄图像、视频

1. 用 MoGe 等把图像、视频转成 3D，连到 `world`。
2. 在编辑器中移动 Camera，从别的角度拍摄。
3. 用生成模型补全拍下画面中缺失的部分。

### 制作视频

给 `background` 连接视频，或用 Keyframe 让贴纸、Camera 动起来，`video` 输出中就包含全部帧。

## 其他节点

- **Panorama Preview**：在单独的窗口中环视全景图像、视频，或 Studio 的 `scene`。
- **Panorama Seam Prep**：把全景左右两端的接缝移到中央，并生成用于修复接缝的遮罩。
- 以前的节点（Panorama Stickers、Panorama Cutout、Panorama Preview (legacy)）也可以照常使用。

## 安装

- 在 ComfyUI Manager 中搜索 "Panorama Stickers" 并安装。
- 需要 ComfyUI 0.35.0 或更高版本。

## Workflow

| Workflow | 内容 |
|---|---|
| [qwen-image-2.1-360-erp-outpaint.json](./example_workflows/qwen-image-2.1-360-erp-outpaint.json) | 贴上图像，制作全景（Qwen-Image 2.1） |
| [qwen-image-2.1-moge3-anyangle.json](./example_workflows/qwen-image-2.1-moge3-anyangle.json) | 用 MoGe 3 把图像转成 3D，从别的角度拍摄，再用 Qwen-Image 2.1 完善画面 |
| [minimax-h3-moge3-crossview.json](./example_workflows/minimax-h3-moge3-crossview.json) | 用 MoGe 3 把视频转成 3D，用新的相机拍摄，再用 MiniMax H3 和 Cseti 制作的 [CrossView-Warp](https://huggingface.co/Cseti/MiniMax-H3_Ref2VA-LoRA-CrossView-Warp_v1) LoRA 补全原相机没有拍到的部分 |
| [LTX-2.3_360vr_distilled_3stage.json](./example_workflows/LTX-2.3_360vr_distilled_3stage.json) | 通过文本制作 360° 视频（LTX-2.3，以及该模型作者制作的 [LTX2.3_360vr](https://civitai.com/models/2327337/360-degree-panoramic-shot-ltx-23) LoRA） |

以前的 workflow：FLUX.2 Klein [4B](./example_workflows/flux-2-klein-4B-360-erp-outpaint.json)・[9B](./example_workflows/flux-2-klein-9B-360-erp-outpaint.json)（[4B LoRA](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)・[9B LoRA](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)）

## 指南

详细用法整理在指南中。

- [日本語](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/)・[English](https://comfyui.nomadoor.net/en/notes/panorama-stickers/)・[中文](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

## 故障排除

如果只有编辑器特别卡，请在浏览器中打开 `chrome://gpu`（Edge 使用 `edge://gpu`），确认 WebGL 显示为 "Hardware accelerated"。如果显示 "Software only"，请完全退出浏览器后重新打开。

## 更新日志

- **2.0.2**：带镜头的 Camera 也可以在 Camera 标签页中移动物体；Output 小窗口可点击整个标题栏展开或收起；深度网格视频（MoGe、DA3）在慢速连接下形状与颜色保持同步，并在暂停时预先加载；以及若干修复。
- **2.0.1**：Studio 编辑器始终显示输出尺寸，切换标签页时检查器保持不变；在 Camera 标签页中也可以移动物体；节点上显示深度网格（MoGe、DA3）和上游场景，并可播放；可以抓取并移动绘画；以及若干修复。
- **2.0.0**：新增 Panorama Studio 和新的 Panorama Preview。
- **1.5.0**：为 Stickers、Cutout、Preview 加入节点上的轻量 UI。
- **1.4.0**：把 Cutout 的 Frame 编辑重做为裁切式的相机编辑器。
- **1.3.0**：支持视频和 180° 全景。
- **1.2.0**：新增绘画和遮罩工具。
- **1.1.0**：渲染改用 WebGL，并支持用 Stickers 把 Cutout 生成的画面放回去。

## 致谢

本项目受到 [ProGamerGov](https://github.com/ProGamerGov) 以下成果的启发：

- [ComfyUI_pytorch360convert](https://github.com/ProGamerGov/ComfyUI_pytorch360convert)
- [html-360-viewer](https://github.com/ProGamerGov/html-360-viewer)（想在浏览器中快速查看 ERP 图像时也很方便：[演示](https://progamergov.github.io/html-360-viewer/)）

## 许可证

MIT
