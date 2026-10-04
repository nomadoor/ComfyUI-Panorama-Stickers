# ADR 0011: Inspector 内の editor-only visibility toggles

## Status

Superseded（インスペクタの `Layers` の節と `showPanorama`・`showObjects`・`showMask` は削除した。表示の切り替えは、状態 v2 に保存するタイムラインの行の目のアイコンに置き換えた。`docs/timeline-ui.md` の「表示（目のアイコン）」）

## Date

2026-03-10

## Context

インスペクタに、描画順を変えずに editor 上の確認だけを助ける簡易 visibility controls が必要になった。

要件は以下。

- `Transform` と `UI Settings` の間に独立した小セクションを置く
- 対象は display list の並び替えではなく、editor 上の表示/非表示だけ
- 対象レイヤーは 3 つ
  - `Panorama`
  - `Paint / Images`
  - `Mask`
- UI は大きいボタンではなく、細いレイヤー風の行にする
- トグルは `eye / eye-off`
- 実体が無いものは最初から操作不可にする
  - ERP 入力が無いなら `Panorama` は disabled
  - paint/image が空なら `Paint / Images` は disabled
  - mask stroke が空なら `Mask` は disabled

## Decision

### 1. editor state に view-only flags を持つ

`web/pano_editor.js` の editor state に以下を追加する。

- `showPanorama`
- `showObjects`
- `showMask`

これらは editor の描画制御専用であり、workflow state の意味は変えない。

### 2. インスペクタに `Layers` セクションを追加する

`Transform` の直後、`UI Settings` の前に独立セクションとして追加する。

見た目は以下。

- 行ベースの簡易リスト
- 左にラベルと小アイコン
- 右に `eye / eye-off`
- ボタン背景や外枠は作らない

### 3. 無効条件を UI に反映する

利用できないレイヤーは、暗くして `disabled` にする。

- `Panorama`: linked ERP input が無い時
- `Paint / Images`: sticker も paint stroke も無い時
- `Mask`: mask stroke が無い時

### 4. 影響範囲は editor preview のみ

この toggle は以下にだけ効く。

- modal editor の表示

以下は対象外。

- workflow state の schema
- z-order
- Python backend の出力順
- 永続 visibility state

## Consequences

### Positive

- editor 上で背景・オブジェクト・マスクの見比べがしやすくなる
- z-order の概念を増やさずに確認 UX を追加できる
- 実体が無い対象を押せないため、操作のノイズが減る

### Negative / Tradeoffs

- editor-only 状態が増えるため、描画分岐は少し複雑になる
- node thumbnail / backend 出力には効かないため、visibility の意味は限定的

## Rejected Alternatives

### display list の並び替え UI を追加する

今回必要なのは確認用途であり、順番操作ではない。display list 編集まで入れると UI が重くなる。

### eye ボタンを大きい独立ボタンにする

インスペクタ全体の密度と揃わず、他の `Yaw / Pitch / H FOV` などより目立ちすぎるため採用しない。
