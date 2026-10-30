# ADR 0028: 撮影は Cutout だけが受け持つ

## Status

Accepted

一部（Drone への言及）を ADR 0038 が置き換えた（2026-10-09）。

全体を ADR 0029 が置き換えた（2026-10-03）。

## Date

2026-10-03

## Supersedes

- ADR 0023 の「ERP 出力には Camera の回転も反映する」
- `docs/timeline-ui.md` の「Camera のタイムラインは Stickers（ERP 出力の向き）と Cutout の両方が持つ」

---

Stickers は Scene を組み立てるノードで、撮影の Camera を持たない。Stickers の ERP 出力は、World の原点から回転 0 で撮った 360° に固定する。背景 ERP と `sky` の Sticker・ペイントはそのままの向きで出し、`world` の Sticker と `scene` は原点から見た位置に描く。

撮影は Cutout だけが受け持つ。Camera の位置・回転・画角とその Keyframe、Drone は Cutout の状態に置く。視点が動く 360° の映像（ドローンに付けた 360° カメラなど）は、Cutout に ERP の Projection を足して撮る。

ADR 0025 は Scene を組み立てるノードと撮るノードを分けた。Stickers が Camera を持つと、同じ「どこから撮るか」が二つのノードに分かれ、Stickers で Camera が原点にあることに気づかず 3D の素材の中から撮ってしまう、という混乱が実際に起きた。Scene の素材は置かれた位置のまま描き、原点に置かれた 3D の素材を確かめるときは、エディタの Viewport camera で見回すか Cutout で撮る。

## Consequences

Stickers の状態の `camera` は使わず、エディタは Stickers で Camera の行とインスペクタを出さない。状態 v2 の `camera` は Cutout の状態の項目として残る。`sticker_state` の Pose handoff は Cutout の Camera だけを扱うので変わらない。Drone（#81）は Cutout の機能になる。
