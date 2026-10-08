# ADR 0036: Pose handoff は Camera の Keyframe を写さず、フレームごとの値を焼き込む

## Status

Accepted

## Date

2026-10-08

---

`sticker_state` から `port` の Sticker の Lane を求めるとき（Pose handoff、ADR 0030）、上流の Camera の Keyframe をそのまま Sticker の Keyframe に写さない。Camera の Keyframe の範囲の Timeline frame の整数ごとに Camera を評価し、その値を `easing: "auto"` の Keyframe として焼き込む（Camera の `hold` の区間は `hold`）。すべての値が同じ Lane は Keyframe を置かず、静的な値にする（`docs/render-contract.md` の「`port` の Sticker と Pose handoff」）。

考えた別案は、Camera の Keyframe と Easing を、そのまま Sticker の Keyframe に写す方法である。採らなかった理由は、Camera の回転は四元数で補間し、Sticker の `direction` は球面上の方向と `roll` に分けて補間するので（`docs/scene-state-v2.md` の「補間」）、Keyframe をそのまま写すと間のフレームで撮った絵とずれるためである。

## Consequences

- 上流の Camera の位置と向きで撮れば、撮った絵と一致する（`tests/test_pose_handoff.py`）。
- Camera が長く動くほど Keyframe が増え、実行のたびの前処理も長くなる（結果はキャッシュしない）。
- 引き継いだ Lane をエディタで直すと、焼き込んだ Keyframe ごと上書き（`handoff_overrides`）になる。
