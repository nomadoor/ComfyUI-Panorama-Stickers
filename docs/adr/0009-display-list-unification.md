# ADR 0009: Display List 統一 / stroke-group を object として管理

## Status

Accepted

一部（3 の「Python はストロークを再解釈せず、受け取ったビットマップを PIL で順に合成する」）は今のコードと違う。アップロードされていないストロークはバックエンドが ERP に描き、Sky は出力の画素から直接標本化して重ねる（ADR 0034、`docs/render-contract.md` の「Sky の描き方」）（2026-10-11 に記す）。

## Date

2026-03-09

## Context

ADR 0008 で ERP_GLOBAL 統一を完了したが、ペイントは依然として `displayPaint` という単一 ERP ラスタに全ストロークを潰している。この構造では以下の要件を満たせない。

- **画像 A と画像 B の間にストロークを置く**（フリーボード型の object 前後調整）
- bring front / send back をストロークにも適用する
- 画像とストロークを同一の z-order で管理する

また、ADR 0005 / 0008 で確認された通り、Python 側でストロークを再レンダリングすると黒フリンジ・ギザギザが発生する（premultiplied alpha 不整合）。ストロークを再解釈する経路は今後も作らない。

## Decision

### 1. stroke-group = actionGroup 単位で object 化

`actionGroupId` を単位として、1 ブラシ操作 = 1 stroke-group object。
`objects[]` に `{ type: "strokeGroup", id, actionGroupId, z_index }` エントリを追加する。

既存の `{ type: "image" / "sticker" / "frame" }` エントリと同列に並ぶ。

### 2. 各 stroke-group は独自の ERP ラスタキャッシュを持つ

`pano_paint_engine.js` の `erpTarget` (単体) を `Map<actionGroupId, erpTarget>` に変更する。
各 `erpTarget` は `{ committedPaint, currentStroke, displayPaint }` を独自に持つ。

`rebuildCommitted(state)` はグループごとに独立したサーフェスに再レンダリングする。

### 3. 出力も object z-order を保持

`objects[]` の順に各 object の ERP ビットマップ（画像は画像 ERP、stroke-group は renderred ERP）を Python へ渡す。
Python はストロークを再解釈せず、受け取ったビットマップを PIL で順に合成するだけ。

### 4. mask / frame は display list に入れない

- **mask**: 特殊な non-destructive レイヤー。引き続き独立した `erpTarget.committedMask` として管理。
- **frame**: ビューポート概念。display list には不参加。

## Consequences

### Positive
- 画像 A と画像 B の間にストロークを置ける
- bring front / send back が画像とストロークで統一される
- Python の再レンダリング経路が消え、黒フリンジ・ギザギザが構造的に再発しない
- z-order 変更時に再レンダリング不要（ビットマップを並び替えるだけ）

### Negative / Tradeoffs
- `pano_paint_engine.js` の `erpTarget` が Map になり、管理コストが上がる
- 各 stroke-group が独自の ERP サーフェス（2048×1024 RGBA ≈ 8MB）を持つため、メモリが group 数に比例して増える
- Python への出力形式が「stroke records」→「rendered ERP bitmaps の z-ordered list」に変わり、backend 側の変更が必要

## Rejected Alternatives

### 単一ラスタのまま under/over 2層に分ける
paint under / paint over の 2 層では「画像 A と画像 B の間にストローク」を表現できない。

### stroke を pixel-perfect に Python で再レンダリング
ADR 0005 で確認済み。premultiplied alpha 不整合により黒フリンジが不可避。
