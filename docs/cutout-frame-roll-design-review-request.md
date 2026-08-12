# Cutout Frame view: Roll 操作 UI の設計レビュー依頼

## 依頼

Cutout ノードの Frame view には、カメラの yaw / pitch / FOV をキャンバス上で直接操作する手段があるが、
Roll を直接操作する UI がない。現行コードと ADR を確認し、**Frame view 内で Roll を一段の操作として直感的に変更する UI**を設計してほしい。

まだ実装はしない。まず候補を比較し、推奨案と操作契約を確定すること。

## 必ず読むもの

- `docs/adr/0021-cutout-frame-crop-view.md`
- `docs/cutout-frame-panorama-return-brief.md`
- `web_src/components/PanoFrameRail.vue`
- `web_src/pano_editor.js`
  - Frame pointer interaction
  - `syncViewToggleState()`
  - `applySidePanelParam()`
  - `roll_deg` の既存利用箇所
- `web/pano_editor.css` の `.pano-frame-rail` と safe rect 関連

## 現在の Frame view

- 背景とゲートは ADR 0021 の同一カメラ／クロップ座標契約で描画される
- 左ドラッグまたは中ドラッグ: yaw / pitch
- wheel: FOV（背景をズームし、ゲートの画面サイズは維持）
- 右側のフロートレール:
  - アスペクト比
  - portrait / landscape 入れ替え
- Inspector:
  - Yaw / Pitch / H FOV / V FOV / Roll の数値・range編集
- `roll_deg` は既存の永続値で、投影・ゲート・ドラッグ変換・Inspectorに既に使われている

## 却下済みの案

右レールに Roll アイコンを追加し、押すと横スライダーの popover が開く案は却下。

理由:

- 「ボタンを押してからスライダー」という二段階操作
- カメラを見ながら連続的に調整する操作として直感的でない
- Roll の常用操作を隠している

同じ案を形だけ変えて再提案しないこと。

## 設計上の制約

1. Roll の操作開始までを一段にする。モード切替後に別コントロールを操作させない
2. キャンバスを見ながら連続調整できること
3. yaw / pitch のドラッグ、wheel の FOV、ペイント操作と衝突しないこと
4. 右レール、左ツールレール、上部タブ、下部UIを含む safe rect を壊さないこと
5. ゲートやERPのスケールを Roll 操作の副作用として変更しないこと
6. 権威は既存の `shot.roll_deg`。別の presentation state を作らないこと
7. 操作中は draft、pointer-up / 操作終了時に一度だけ history と widget state をcommitすること
8. Inspector の Roll と双方向に同期すること
9. Vueで表現するUIはVueコンポーネントに置くこと。`pano_editor.js` にDOMを手組みしないこと
10. 新しい依存関係、保存形式、ノードschema変更は不可
11. Panorama viewやFrame→Panorama復帰動作には影響を与えないこと

## 検討してほしい観点

- カメラ／写真／3D DCC／360°ビューアで、Rollを直接操作する一般的な慣習
- ゲートの外周または専用ハンドルをドラッグする案
- 修飾キー＋既存ドラッグの案
- 常時露出したコンパクトなダイヤル／スクラバーの案
- マウス、ペン、タッチでの操作性
- 0°へのスナップ、細密操作、±180°境界の扱い
- 誤操作防止と発見可能性の両立
- read-only、undo/redo、Cancel復帰の契約
- Frame railの予約領域を増やす必要があるか

## 求める回答

1. 推奨案を1つ
2. 次点案を最大2つ
3. 各案の長所・短所と、現行UIとの衝突
4. 推奨案の詳細なpointer操作契約
5. 状態更新・履歴commit・Inspector同期の契約
6. 必要なVue/JS/CSS変更箇所。ただしコード実装はしない
7. 自動テストと手動受け入れ条件

見た目の新奇さより、直接性、可逆性、既存カメラ操作との一貫性を優先すること。
