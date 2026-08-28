# ComfyUI Panorama Stickers

[![English](https://img.shields.io/badge/README-English-3b82f6.svg)](./README.md)
[![日本語](https://img.shields.io/badge/README-日本語-e11d48.svg)](./README_JA.md)
[![中文](https://img.shields.io/badge/README-中文-16a34a.svg)](./README_ZH.md)

[![LoRA 4B](https://img.shields.io/badge/LoRA-4B-f0b429.svg)](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)
[![LoRA 9B](https://img.shields.io/badge/LoRA-9B-f59e0b.svg)](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)
[![ガイド](https://img.shields.io/badge/Guide-日本語-3b82f6.svg)](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/)

ComfyUI Panorama Stickersは、ComfyUI上で360度正距円筒図法（ERP）パノラマを扱うための小規模なノードセット兼フロントエンド拡張です。インタラクティブなプレビュー、フレーム付き切り抜き、画像合成に対応しています。

FLUX.2 Kleinのパノラマworkflowを中心に開発しており、4B・9Bの両方で利用できます。

このworkflowは、以下のFLUX.2 Klein 360 ERP outpaint LoRAを支援するために作成しました。

- [nomadoor/flux-2-klein-4B-360-erp-outpaint-lora](https://huggingface.co/nomadoor/flux-2-klein-4B-360-erp-outpaint-lora)
- [nomadoor/flux-2-klein-9B-360-erp-outpaint-lora](https://huggingface.co/nomadoor/flux-2-klein-9B-360-erp-outpaint-lora)

詳しい使い方はこちらです。

- English: [comfyui.nomadoor.net/en/notes/panorama-stickers/](https://comfyui.nomadoor.net/en/notes/panorama-stickers/)
- 日本語: [comfyui.nomadoor.net/ja/notes/panorama-stickers/](https://comfyui.nomadoor.net/ja/notes/panorama-stickers/)
- 中文: [comfyui.nomadoor.net/zh/notes/panorama-stickers/](https://comfyui.nomadoor.net/zh/notes/panorama-stickers/)

## インストール

- ComfyUI Managerからインストールしてください。

## デモ

https://github.com/user-attachments/assets/bf74e953-8ceb-4c7f-afa2-1c805f12c7af

- v1.2.0 demo: https://gyazo.com/d4c2517589d7c96d27942af76a1ead27
- v1.3.0 demo: https://gyazo.com/3da5973bb661df8fb1d11dd1e71a2b1f
- v1.4.0 demo: https://gyazo.com/26ceba6dcc3516ce6b8c461fcfde4dad
- v1.5.0 demo: https://gyazo.com/954d9a4acee41a13e6aebfcb125b9a48

## ノード

- `Panorama Stickers`: ERPキャンバス上へステッカー画像を配置・調整し、合成済みパノラマを出力します。
- `Panorama Cutout`: ERP画像からフレーム付きの透視投影ビューを構成して切り出します。
- `Panorama Preview`: 静止画または動画のERP入力を、インタラクティブなパノラマビューアーで確認します。
- `Panorama Seam Prep`: ERPの継ぎ目を中央へ移動し、継ぎ目のinpainting用にハード／ぼかし付きの縦マスクを生成します。

### ノード上パノラマ操作

`Panorama Stickers`、`Panorama Cutout`、`Panorama Preview`には、Full Editorを開かずに一般的な操作を完結できる軽量なノード上UIがあります。Legacy canvasとNode 2.0の両方に対応しています。

## Workflow

- パノラマ静止画workflow
  - [flux-2-klein-4B-360-erp-outpaint.json](./example_workflows/flux-2-klein-4B-360-erp-outpaint.json)
  - [flux-2-klein-9B-360-erp-outpaint.json](./example_workflows/flux-2-klein-9B-360-erp-outpaint.json)
- 360度パノラマ動画workflow
  - モデル作者が作成した[LTX2.3_360vr](https://civitai.com/models/2327337/360-degree-panoramic-shot-ltx-23) LoRAを使うことで、テキストから360度パノラマ動画を生成できます。
  - [LTX-2.3_360vr_distilled_3stage.json](./example_workflows/LTX-2.3_360vr_distilled_3stage.json)

## 更新履歴

### 1.5.0

- `Panorama Cutout`、`Panorama Preview`、`Panorama Stickers`に軽量なノード上UIを追加し、Full Editorを開かずに一般的な操作を完結できるようにしました。
- Legacy canvasとNode 2.0の両方で、プレビューのパフォーマンスと信頼性を改善しました。

### 1.4.0

- Panorama CutoutのFrame viewを、インタラクティブなcrop形式のcamera editorとして再構築しました。
- Panorama viewの状態を独立させたまま、camera framing、aspect ratio、orientation、rollを直接操作できるようにしました。

### 1.3.0

- 動画に対応しました。
- 180度パノラマに対応しました。
- リファクタリングによりパフォーマンスを大幅に改善しました。

### 1.2.0

- モーダルパノラマeditorにPaint／Maskツールを追加しました。

### 1.1.0

- パノラマ描画をWebGL優先のpipelineへ移行しました。
- `Panorama Cutout`で生成した画像を`Panorama Stickers`でパノラマへ再合成できるようにしました。

## ToDo

- 外部upscaling用にパノラマを複数画像へ分割し、処理後に再結合するツールを追加する。
- 入力画像からcamera intrinsicsを自動推定する。
- 3D sceneに対応する。
- Huginと連携する。

## 謝辞

このプロジェクトは、特に以下の[ProGamerGov](https://github.com/ProGamerGov)氏の成果から一部影響を受けています。

- [ProGamerGov/ComfyUI_pytorch360convert](https://github.com/ProGamerGov/ComfyUI_pytorch360convert)
- [ProGamerGov/html-360-viewer](https://github.com/ProGamerGov/html-360-viewer)

## 便利なツール

ERP画像をブラウザ上ですばやくパノラマ表示したい場合は、こちらのviewerが便利です。

- [html-360-viewer demo](https://progamergov.github.io/html-360-viewer/)

## ライセンス

MIT
