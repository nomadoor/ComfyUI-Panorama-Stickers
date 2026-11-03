# ADR 0059: Pose handoff はいつも `sky` の Sticker にする

## Status

Proposed（2026-11-03）

ADR 0030 の「上流の Camera の位置がどこかのフレームで原点から離れるとき、届く Sticker は `world` の Sticker とする」を置き換える。
ADR 0036（フレームごとの値を焼き込む）は変えない。

## Context

上流の Studio の Camera が原点から少しでも離れると、Pose handoff は Sticker を Camera の 2 前の `world` の板にしていた。その板が撮った
絵と重なるのは、上流の Camera の位置から見たときだけである。下流の Studio が原点から撮ると、板は視差でずれ、上流が撮った背景の同じ所には
重ならない（上流の Scene が背景だけで 3D が無くても同じ）。持ち主は実機で「position が 1 でもずれると world になるのはややこしい、world の
方はずれて直っていない」と挙げた（2026-11-03）。

ADR 0045 は、往復が成り立つ範囲を無限遠の層（背景・Sky）だけとしている。`sky` の Sticker は無限遠にあるので、上流の Camera の向きと画角で
置けば、どの位置から見ても無限遠の物とぴったり重なり、上流の Camera の位置から見ても `world` の板と同じ絵になる。

## Decision

- Pose handoff は、上流の Camera の位置によらず、いつも `sky` の Sticker にする。Camera の向き（`direction`・`roll`）、画角（`size`）、
  レンズの曲線（`curve`）をフレームごとに焼く（ADR 0036 のまま）。Camera の位置は使わない。
- 持ち主の決定「sky にして合うなら sky でいい」（2026-11-03）。

## Consequences

- 上流の Camera が原点から離れた往復も、原点から撮ると背景に重なる。
- 撮った物が上流の World の 3D の物だった場合、`sky` の Sticker はその 3D の物より奥に描かれるので、3D の物の後ろに隠れる（今までの
  `world` の板は、2 より遠い物の手前に出た）。そのような往復は 6DoF では 2D に落ちて正直に成り立たない（ADR 0045）。
- 既存のグラフ：上流の Camera が原点から離れていた往復の出力は、`world` の板から `sky` の Sticker に変わる。状態の形式と `sticker_state`
  の形式は変えない。状態に保存してある `port` の Sticker の置き方は書き換えず、実行と表示で Pose handoff の `sky` を当てる
  （置き方が違うときの扱いは今までどおり）。
- Pose handoff の `world` の Lane（`position`・`rotation`・`scale`・`lens`）を求める処理と、その test は消す。
