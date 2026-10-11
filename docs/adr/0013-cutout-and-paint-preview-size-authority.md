# ADR 0013: Cutout と Paint Preview のサイズ authority 整理

## Status

Accepted

一部（2 の「`bg_erp` があれば `output_preset` ではなく背景画像の実サイズを使う」）は、今のコードでは `output_preset` が `auto` のときだけ当たる。固定の値では `output_preset` が勝つ（`nodes.py` の `PanoramaStickersNode._resolve_output_size`。置き換えた ADR も spec も無い）（2026-10-11 に記す）。

## Date

2026-03-12

## Context

`PanoramaCutout` と `PanoramaStickers` まわりで、出力サイズと preview サイズの authority が分散していた。

実際に起きていた問題は以下。

- cutout frame が長方形でも、`state` と backend 出力が 1:1 に戻る
- `bg_erp` を接続した `PanoramaStickers` で、background と paint layer の shape が一致せず合成エラーになる
- 2:1 ではない ERP を使うと、paint stroke の live preview だけ古い 2048x1024 前提で描かれ、pointer release 後にだけ正しい結果が見える
- repo 内に `web/pano_editor.js` と `web/pano_editor_core.js` の二重線が残っており、どちらが authority か曖昧だった

根本原因は同じで、`hFOV/vFOV`、`out_w/out_h`、`output_preset`、接続中の `bg_erp` 実サイズ、preview の temp canvas がそれぞれ別の truth を持っていた。

## Decision

### 1. cutout の shape authority は `hFOV_deg / vFOV_deg` に寄せる

`PanoramaCutout` では shape を `out_w/out_h` ではなく `hFOV_deg / vFOV_deg` から決める。

- frontend state 正規化時に cutout の `out_w/out_h` は保持しない
- cutout の `aspect_id` は FOV から再導出する
- backend 出力サイズは `output_megapixels + hFOV/vFOV` から計算する

つまり、cutout では

- shape: `hFOV/vFOV`
- pixel count: `output_megapixels`

を正とする。

### 2. stickers の raster size authority は `bg_erp` 実サイズを優先する

`PanoramaStickers` に `bg_erp` が入っている場合、出力キャンバスサイズは `output_preset` ではなく背景画像の実サイズを使う。

これにより、background / paint / mask / sticker 合成の全レイヤを同じ shape に揃える。

`bg_erp` が無い場合のみ `output_preset` を使う。

### 3. paint engine の live preview surfaces は descriptor と常に一致させる

paint engine の temp surface は「必要なら拡大」ではなく「毎回 descriptor に resize」する。

対象は以下。

- `_groupPreviewTmp`
- `_maskPreviewTmp`
- `_eraserTmp`

これにより、以前の 2048x1024 surface が残留して、非 2:1 ERP で live stroke だけ壊れる状態を防ぐ。

### 4. active editor authority は `web/pano_editor.js` に一本化する

`web/pano_editor_core.js` は削除する。

現行の共通 editor / preview 実装は `web/pano_editor.js` を authority とする。

## Consequences

### Positive

- cutout の UI frame と backend 出力 shape が一致する
- `PanoramaStickers` の `bg_erp` 入力で shape mismatch 例外が起きにくくなる
- 非 2:1 ERP でも live stroke と commit 後の描画が同じ descriptor を使う
- editor 実装の authority が一つになる

### Negative / Tradeoffs

- 既存の cutout state に入っている `out_w/out_h` は実質無視される
- preview 系ではまだ `drawImage()` と WebGL/2D 混在 path が残っており、境界品質の責務は複雑なまま
- `pano_editor.js` への責務集中は継続している

## Follow-up

次の作業は以下を前提に進める。

- preview の黒縁問題を、サイズ authority 問題とは別件として扱う
- transparent paint canvas を縮小する path を洗い出し、premultiplied 相当の合成へ寄せる
- modal preview と node preview の paint compositing path をさらに共通化する

## Rejected Alternatives

### cutout で `out_w/out_h` を残し続ける

shape authority が二重化したままで、今回の 1:1 regression を再発させやすい。不採用。

### `bg_erp` が来ても常に `output_preset` へリサイズする

ユーザー入力画像の shape を捨てるため、preview/backend の整合がさらに悪くなる。不採用。

### live preview temp surface を「大きい方にだけ伸ばす」ままにする

一度 2:1 surface を作ると、非 2:1 ERP へ戻った際に stale shape が残る。不採用。
