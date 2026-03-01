# ops.md — Flux.2 パノラマ制作体験（ERP前提）

## 目的

Flux.2向けに「パノラマ画像（主にERP: equirectangular projection）を前提にした制作体験」を一式として形にする。

* Flux.2 パノラマLoRAの強み（360°空間一貫性／パノラマ編集）を活かすため、ERP上に画像（ステッカー）を貼り付けて、位置・回転・FOVなどを直感的に調整できる専用UIを提供する。
* UI自体が主役。投影・計算は“学習/推論側と整合する最低限”でよい。
* 実装先は2本立て。

  * ComfyUIカスタムノードとして提供（制作パイプラインに統合）
  * Hugging Face Spacesでデモ公開（UI + 推論を一体で体験）

## 関連ADR

* `docs/adr/0001-preview-architecture-split.md`
* `docs/preview_regressions.md`（Preview/Cutoutの恒久回帰ログと運用ルール）

## 非目的（スコープ外）

* 物理ベースレンダリングの厳密再現（PBR入力はプレビュー用途の“体験”優先）
* 超高精度の球面レンダラ（必要十分な近似でよい）
* 画像編集ソフト級の完璧なハンドリング（ただし体感の破綻は許容しない）

---

## 成果物（Deliverables）

### A. 共通UI（ステッカー編集UI）

* ERPを基準にした制作キャンバス。
* パノラマビュー（視点でグリグリ）と展開ビュー（ERPの2:1）を切替。
* ステッカーを追加し、選択・移動・拡大縮小・回転・クロップを編集。
* 出力：cond（ERP画像）とメタデータ（JSON）。

### B. ComfyUI カスタムノード（3ノード構成）

1. Panorama Stickers（ステッカー貼り付けUI + cond生成）

* 目的：ERP上でステッカーを配置・編集し、学習/推論に渡す cond（ERP）と meta を確定させる。
* 入力（例）：背景ERP（任意）、ステッカー画像群（任意／UI内で追加でも可）、出力プリセット（1024/2048/4096）。
* 出力：cond_erp（2:1 ERP画像）、cond_meta（JSON文字列またはファイル）、patches（任意）。
* UI：このプロジェクトの主役。パノラマ/展開の切替、選択/移動/回転/FOV/クロップ、Exportと同等の確定処理。
* ノード上プレビュー：**廃止**（Node2/Legacy共通）。`Open Stickers Editor` から編集UIを開く。

2. Panorama Cutout（ERP → 矩形切り出し）

* 目的：yaw/pitch/FOV（+任意roll）で、パノラマから任意領域を矩形に切り出して出力する。
* 入力：erp_image、yaw_deg、pitch_deg、hFOV/vFOV（またはsize_mode）、出力解像度（任意）。
* 出力：rect_image、cutout_meta（再現用）。

3. Panorama Preview

* 目的：Node2.0環境でERPの見回しプレビューを提供する。
* 入力：`erp_image: IMAGE`
* 出力：なし（output node）
* 備考：
  - 公開ノードは1つだけ。
  - Node2では dedicated DOM runtime、Legacyでは canvas draw を内部で使い分ける。
  - editor導線は widget ボタンのみ。
  - DOM attach失敗時は静的ラベル表示で安全終了し、shared runtime へは切り替えない。

（参考）旧・任意プレビュー拡張（PBR/素材 → プレビュー）

* 目的：素材系入力（PBR等）から“見回し用のプレビュー”を作る。厳密物理ではなく体験優先。
* 位置づけ：Stickersの背景/確認用途。必要性が出た段階で追加する。

### C. Hugging Face Spaces デモ

* 同じUIを提供。
* Flux.2 klein + パノラマLoRAによる推論まで一体で体験。
* ZeroGPUを使い、気軽に試せる形。

---

## 運用方針（リポジトリ/デプロイ）

### モノレポ方針

* まずモノレポで進める。
* ComfyUI側とSpaces側で依存を混ぜないように分離する（UI/数式の“共通部分”だけ共有）。
* SpaceはGitHubから同期して公開する。

### 推奨ディレクトリ構成（例）

* repo/

  * packages/

    * pano-core/            # 座標系・投影・ERP合成・メタ生成（言語/実装に依存しない概念を中心に）
    * pano-ui/              # UI（React/Canvas）
  * comfyui/

    * custom_nodes/

      * comfyui_pano_suite/ # ComfyUIノード実装（Python）
  * spaces/

    * pano_demo/            # Hugging Face Spaces（Gradio + 推論 + UI）
  * docs/                   # 使い方、UI説明、座標定義
  * assets/                 # サンプル画像、デモ用

---

## “固定する定義”（最重要）

このプロジェクトの要件は「UIの見た目」ではなく「export（cond生成）の定義が学習側と一致」していること。

最低限の固定ルールは4つ。

### 1) 角度の基準（yaw/pitch）

* 世界座標（固定）

  * +X = RIGHT
  * +Y = UP
  * +Z = FRONT
* yaw（経度）

  * 範囲は [-180, 180)
  * FRONT = 0°
  * RIGHT = +90°
  * LEFT = -90°
  * BACK = ±180°（左右端＝シーム）
* pitch（緯度）

  * 範囲は [-90, +90]
  * 0° が水平線（視線高さ帯）
  * +90° が上（天頂）

（この符号が変わると、ドラッグ方向、切り出し方向、学習整合が全崩壊するため固定。）

### 2) サイズの意味（FOV）

* UIの拡大縮小は「ERP上のピクセル」ではなく「角サイズ（FOV）」として扱う。
* metaに hFOV/vFOV と size_mode を必ず出す。

  * size_mode は "hFOV" または "vFOV"。
  * UI操作の基準が将来変わっても、metaを見れば再現できる状態にする。

### 3) 投影モデル（export時は固定）

* export時は必ず同じ投影モデルでERPへレンダリングする（矩形貼りではない）。
* previewとexportを分ける場合、違いは“サンプル密度（品質）”だけ。

  * モデル自体は同一にする。

### 4) メタデータ（追跡可能性）

* patchesごとに yaw/pitch/FOV/rot/crop/z_index を必ず出す。
* さらに、colorspace/alpha_mode を必ず出す。
* これがないと「学習が効かない理由」が追えない。

---

## UI仕様（操作と見え方）

### 画面構成

* 黒いキャンバスがメイン（プレビューは黒背景、出力背景色とは別）。
* 左上に操作パネル（ビュー切替、読み込み、出力背景、解像度プリセット、Export）。
* 右下に view yaw/pitch 表示。
* 選択時のみ、下中央にフロートUI（Crop / Duplicate / Delete、またはCrop中のZoom+Done）。

### 2つの表示モード

1. パノラマビュー

* 視点をドラッグして見回す。
* グリッド（緯度経度）を表示。水平線を強調。
* 画面中心に小さな十字。

2. 展開ビュー（ERP）

* 2:1のERPをcontainで表示。
* グリッド表示。
* ラベル：LEFT / FRONT / RIGHT / BACK（BACKは左右端）。
* 左右端は連続（wrap）。

### 画像追加

* ファイル選択（ボタン）
* ドラッグ&ドロップ（キャンバスへ）
* ペースト（クリップボード画像）

追加時の初期配置

* 「現在の画面中心」に追加（パノラマ/展開いずれでも）。

### 選択/解除

* ステッカークリックで選択。
* 空白クリックで解除。

### 移動

* ステッカー内部をドラッグして移動。
* “掴んだ点が中心にワープしない”こと（体感破綻の主因なので必須）。

移動の最低限ルール

* pointerdown時に（ポインタ座標 − ステッカー中心のスクリーン座標）をoffsetとして保持し、pointermoveでは「中心をポインタに追従」させる。
* パノラマではスクリーン→球面の逆変換で yaw/pitch を更新。
* 展開ではスクリーン→ERP座標（lon/lat）で更新。

### リサイズ

* 四隅ハンドルで拡大縮小。
* 角サイズ（FOV）を変更する操作として扱う。

### 回転

* 回転ハンドル（上側の点）で回転。
* Shift押下で45°スナップ。
* “時計回りドラッグで時計回り回転”の体感を固定。

### クロップ

* クロップモードは「枠が出力の形」ではなく、「枠は固定で、画像を枠内でドラッグして見え方を決める」方式。
* UI切替

  * 通常：Crop / Duplicate / Delete
  * Crop中：Zoomスライダー + Done（確定）

クロップのパラメータ

* crop_x, crop_y, crop_w, crop_h（0..1正規化）

### フロートUIの位置（適当に置かない）

* 選択ステッカーのスクリーン四隅からbboxを計算し、

  * X = bbox中心
  * Y = bbox下端 + margin
* 画面端に出ないようclamp。
* 何らかの操作中（move/scale/rotate/cropドラッグ中）はフロートUIを非表示。

---

## エクスポート仕様（cond生成）

### 出力画像（cond.png）

* ERPの2:1プリセットのみ

  * 1024x512
  * 2048x1024
  * 4096x2048
* 背景は bg_color で塗りつぶし（デフォルト緑）。
* ステッカーは必ず球面投影→ERP展開して合成。
* シーム跨ぎは破綻させない（左右循環描画または分割描画）。

### メタデータ（cond.meta.json）

* 最低限のトップレベル

  * renderer_version
  * W, H
  * bg_color
  * global_yaw_shift_deg（原則0。混乱するならUI仕様として固定）
  * projection_model（固定文字列）
  * render_quality（preview/export）
  * preview_projection（same_as_export/approx）
  * colorspace（例: sRGB）
  * alpha_mode（例: premultiplied or straight のどちらかに統一）
  * patches[]

* patches[] 1要素の必須項目

  * yaw_deg, pitch_deg
  * hFOV_deg, vFOV_deg, size_mode
  * rot_deg
  * crop {x0,y0,x1,y1}
  * z_index
  * seam_cross

---

## ComfyUIノード仕様（概要）

### ノード1：Panorama Stickers（ステッカーUI + cond生成）

目的

* ERP上でステッカーを配置・編集し、学習/推論に渡す cond（ERP）と meta を確定する。

入出力（例）

* In: bg_erp（任意）
* In: output_preset（1024/2048/4096）
* In: initial_patches / initial_meta（任意。再編集用）
* Out: cond_erp（2:1 ERP）
* Out: cond_meta（JSON）

備考

* ここがUIの本体。Spaces側でも同じ概念を使う。

### ノード2：Panorama Cutout（ERP→矩形）

目的

* パノラマから任意領域をFOV指定で切り出す。

入出力（例）

* In: erp_image
* In: yaw_deg, pitch_deg
* In: hFOV/vFOV（またはsize_modeで指定）
* In: out_w, out_h（任意）
* Out: rect_image
* Out: cutout_meta（再現用）

### ノード3：Panorama Preview

目的

* ERPプレビューを安定提供する（view-only）。

入出力（概要）

* In: erp_image
* Out: なし（output node）

備考

* 公開ノードは1つで、frontendに応じて内部実装を切り替える。
* Node2は dedicated DOM runtime を使う。
* Legacyは canvas 描画を使う。
* editor導線は widget ボタンのみ。
* DOM attachに失敗した場合は静的ラベルのみ表示して停止する（クラッシュしない）。

### （参考）任意拡張：Panorama Preview（PBR/素材→プレビュー）

目的

* “制作体験”として、パノラマの見えを確認できること（厳密な物理は不要）。

入出力（例）

* In: basecolor_erp, normal_erp, roughness_erp, metal_erp（扱える範囲で）
* Out: preview_erp または preview_view

UI連携

* Standalone Previewノードと視点操作を揃える場合は、view-onlyモーダル経路に統合する。

---

## Hugging Face Spaces デモ仕様（概要）

### 公開形式

* UI + 推論を同一デモとして提供。
* ZeroGPUで推論可能（混雑やクォータは前提として受け入れる）。

### “埋め込み”について（Space側の前提）

* Spaceを外部サイトに埋め込むには「公開（public）」である必要がある。
* 既定では埋め込み可能（disable_embedding: false）。

  * ただしSpace側設定で埋め込みを無効化できる。
* 埋め込み手段

  * iframe
  * Gradio WebComponent（Gradio Spaceの場合）

### デモで見せたい一連の流れ

1. ERPキャンバスでステッカー配置（yaw/pitch/FOV/rot/crop）
2. cond（ERP画像）をExport
3. Flux.2 klein + パノラマLoRA で推論
4. 出力を同じUI上で確認（必要なら再編集）

---

## マイルストーン

M0：MVP（UIのみ）

* ステッカー配置/編集
* pano/unwrap切替
* Export（cond.png + meta）

M1：ComfyUI統合（最小）

* ノード1（Panorama Stickers）でcond+metaを出せる
* ノード2（Panorama Cutout）で切り出しを出せる
* ノード3（Panorama Preview）で環境別に安定プレビューできる
* UIで編集→ノード出力へ落とし込める

M2：Spacesデモ

* UI + 推論
* ZeroGPU対応

M3：体験強化

* PBRプレビュー（ノード1）
* 学習/推論の導線をドキュメント化

---

## 受け入れ条件（Definition of Done）

* UIで作ったmetaとcondが、学習/推論パイプラインで“同じ意味”として扱える。
* yaw/pitch/FOV/rot/crop/z_index が再現可能。
* シーム跨ぎで破綻しない。
* Spacesデモが最低限動き、外部共有ができる。
