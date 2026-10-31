# ComfyUI Panorama Stickers

[![English](https://img.shields.io/badge/README-English-3b82f6.svg)](./README.md)
[![日本語](https://img.shields.io/badge/README-日本語-e11d48.svg)](./README_JA.md)
[![中文](https://img.shields.io/badge/README-中文-16a34a.svg)](./README_ZH.md)
[![ガイド](https://img.shields.io/badge/Guide-日本語-3b82f6.svg)](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/)

360度パノラマに、画像・動画・3D を置いて、好きな視点から撮る ComfyUI のノードセットです。

撮った絵を画像生成モデルで直し、元の位置へ戻す。この往復を ComfyUI のワークフローの中で行えます。

https://github.com/user-attachments/assets/bf74e953-8ceb-4c7f-afa2-1c805f12c7af

## Panorama Studio

このノードセットの中心です。

パノラマを遠くの景色（Sky）として、3D を奥行きのある空間（World）として、一緒に扱います。Sky に貼った物は、Camera がどこへ動いても同じ方向に見えます。World に置いた物は、Camera の位置によって見え方が変わります。

ノードの入力は次の四つです。

- `background`：背景のパノラマ（画像・動画）
- `world`：土台になる 3D（メッシュ、Gaussian splat、MoGe などで推定した形）
- `sticker`：場面に置く画像・動画・3D。エディタにドロップして足すこともできます
- `scene`：別の Panorama Studio の場面を引き継ぐ

エディタでは、ステッカーと Camera をタイムラインの Keyframe で動かし、ペイントやマスクを描き、Camera で撮ります。撮り方は、パノラマ（360°／180°）か、普通のカメラの絵（Frame）です。

## 主な使い方

### 画像を貼ってパノラマを作る

1. Panorama Studio のエディタに画像をドロップし、パノラマの好きな場所に貼ります。何枚でも貼れます。
2. Camera をパノラマにして撮ると、貼った画像の周りが背景色のパノラマができます。
3. それをパノラマ用の LoRA を使った生成モデルに渡し、周りを描き足します。

### パノラマの一部を直す

1. Camera を Frame にして、直したい所を撮ります。
2. 撮った絵を生成モデルで直します。
3. 直した絵を `sticker_state` と一緒に次の Panorama Studio の `sticker` へつなぐと、撮った位置にそのまま戻ります。

### 画像・動画を別の角度から撮り直す

1. MoGe などで画像・動画を 3D にし、`world` につなぎます。
2. エディタで Camera を動かし、別の角度から撮ります。
3. 撮った絵の欠けた所を、生成モデルで仕上げます。

### 動画にする

背景に動画をつなぐか、ステッカーや Camera を Keyframe で動かすと、`video` 出力に全フレームが入ります。

## そのほかのノード

- **Panorama Preview**：パノラマの画像・動画や、Studio の `scene` を別のウィンドウで見回します。
- **Panorama Seam Prep**：パノラマの左右の継ぎ目を中央へ移し、継ぎ目を直すためのマスクを作ります。
- 以前のノード（Panorama Stickers・Panorama Cutout・Panorama Preview (legacy)）も、そのまま使えます。

## インストール

- ComfyUI Manager から「Panorama Stickers」を検索してインストールしてください。
- ComfyUI 0.35.0 以降が必要です。

## ワークフロー

| ワークフロー | 内容 |
|---|---|
| [qwen-image-2.1-360-erp-outpaint.json](./example_workflows/qwen-image-2.1-360-erp-outpaint.json) | 画像を貼ってパノラマを作る（Qwen-Image 2.1） |
| [qwen-image-2.1-moge3-anyangle.json](./example_workflows/qwen-image-2.1-moge3-anyangle.json) | 画像を MoGe 3 で 3D にし、別の角度から撮って Qwen-Image 2.1 で仕上げる |
| [LTX-2.3_360vr_distilled_3stage.json](./example_workflows/LTX-2.3_360vr_distilled_3stage.json) | テキストから 360° 動画を作る（LTX-2.3 と、モデル作者による [LTX2.3_360vr](https://civitai.com/models/2327337/360-degree-panoramic-shot-ltx-23) LoRA） |

以前のワークフロー：FLUX.2 Klein [4B](./example_workflows/flux-2-klein-4B-360-erp-outpaint.json)・[9B](./example_workflows/flux-2-klein-9B-360-erp-outpaint.json)（[4B LoRA](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)・[9B LoRA](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)）

## ガイド

詳しい使い方はガイドにまとめています。

- [日本語](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/)・[English](https://comfyui.nomadoor.net/en/notes/panorama-stickers/)・[中文](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

## 困ったとき

エディタだけが極端に重いときは、ブラウザで `chrome://gpu`（Edge は `edge://gpu`）を開き、WebGL が「Hardware accelerated」になっているか確かめてください。「Software only」なら、ブラウザを完全に終了して開き直してください。

## 更新履歴

- **2.0.2**：レンズの付いた Camera でも Camera タブで物を動かせるようにしました。Output の小窓はバー全体で開閉できます。深度の格子の動画（MoGe・DA3）は、遅い回線でも形と色がずれず、止まっている間に先読みします。ほか不具合の修正。
- **2.0.1**：Studio のエディタで出力の大きさをいつも表示し、タブを切り替えてもインスペクタが変わらないようにしました。Camera タブでも物を動かせます。ノード上で深度の格子（MoGe・DA3）と上流の Scene を表示し、再生できるようにしました。ペイントをつかんで動かせます。ほか不具合の修正。
- **2.0.0**：Panorama Studio と、新しい Panorama Preview を追加しました。
- **1.5.0**：Stickers・Cutout・Preview に、ノード上の軽い UI を足しました。
- **1.4.0**：Cutout のフレームの編集を、切り抜きの形のカメラエディタに作り直しました。
- **1.3.0**：動画と 180° パノラマに対応しました。
- **1.2.0**：ペイントとマスクを追加しました。
- **1.1.0**：描画を WebGL にし、Cutout で作った絵を Stickers で戻せるようにしました。

## 謝辞

このプロジェクトは、[ProGamerGov](https://github.com/ProGamerGov) さんの次の成果から影響を受けています。

- [ComfyUI_pytorch360convert](https://github.com/ProGamerGov/ComfyUI_pytorch360convert)
- [html-360-viewer](https://github.com/ProGamerGov/html-360-viewer)（ERP 画像をブラウザですぐ見たいときにも便利です：[デモ](https://progamergov.github.io/html-360-viewer/)）

## ライセンス

MIT
