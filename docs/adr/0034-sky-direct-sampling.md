# ADR 0034: Sky は中間の ERP を通さず、出力の画素から直接標本化する

## Status

Accepted

## Date

2026-10-08

---

Panorama Studio の描画は、Sky（`sky` の Sticker・ペイント・MASK）を、ERP の出力でも透視投影の出力でも中間の ERP に描かない。層ごとに、出力の画素の向きから直接、その層の画素を GPU で標本化して重ねる（`core/render.py` の `_sky_layers`・`_shoot_sky`、`docs/render-contract.md` の「Sky の描き方」）。

考えた別案は、旧ノードと同じく Sky を一度 360 の ERP に描き、それを出力に写す方法である。採らなかった理由：

- 透視投影の狭い画角では、出力の画素の細かさに合わせた中間の ERP が巨大になる（画角 5°・幅 1024 の出力で幅数万）。大きさに上限を置くと、Sticker やペイントがぼける。
- 旧ノードの方法（CPU で ERP に描く）は、4096 × 2048 の出力で Sticker が毎フレーム動くと 1 フレーム約 700 ms かかった。直接の標本化は約 35〜45 ms（`docs/legacy-baselines.md` の「Panorama Studio の描画の計測」）。

## Consequences

- Sticker の縁の画素は、旧ノードの硬い縁ではなく、覆う割合の分だけ混ざる。旧ノードの基準画像とわずかに違い、その差は `docs/legacy-baselines.md` に記録する。
- 出力の画素ごとの向きと footprint を持つので、VRAM の最大が増える（`_render_memory` の見積もりに入れる）。
- 状態だけが持つペイント（アップロードされていないストロークなど）は、バックエンドが ERP に描いてから同じく標本化するので、その ERP の大きさの規則（`_sky_size`）が残る。
