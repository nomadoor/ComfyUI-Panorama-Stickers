# ADR 0049: Panorama Studio のノード上の表示は、撮る Camera の出力をその場で描く

## Status

Proposed（2026-10-30）

## Date

2026-10-30

---

## 背景

ADR 0029 の追記（2026-10-05）は、ノード上の表示が「一度実行すると常に直近の実行の出力を示し、実行前は今の状態（背景と sky の
Sticker）を描いて見回す」と決めた。ADR 0048 で Camera はいつもあり、出力は Camera が撮ったもの（Panorama モードの ERP か Frame
モードの絵）だけになった。新しいエディタは、Camera の出力をその場で描く部品（Output の小窓、`web_src/pano_live_erp.js`）を持つ。

持ち主が実際の ComfyUI で試し、「ノード上のプレビューがほとんど上手く動いていない。リアルタイムで Camera の映像を出してほしい。
出力の大きさもリアルタイムで計算されない（`megapixels` を変えても変わらない）」と報告した（2026-10-30）。
調べると、実行前の表示は Camera の映像ではなく背景と sky の Sticker を見回すもので、出力と違う絵だった（背景が無いときは
`background_color` でなく格子を描いた）。また、ノードの widget の callback を包む関数が元の callback を `this` と引数なしで呼んでいたため、
ComfyUI の数値の widget の callback が例外を投げ、その後の再描画の要求まで届いていなかった。

## 決定

- ノード上の表示は、実行の前も後も、今の状態と入力から撮る Camera の出力をその場で描く（Panorama モードは Camera の位置からの
  ERP、Frame モードは Camera の枠の絵）。描く部品はエディタの Output の小窓と同じもの一つ（`web_src/studio/output_picture.js`）。
- 実行の出力の画像（`pano_output_erp`・`pano_output_frame`）を表示に使うのをやめ、ノードもそれを書かない。
  `Not run yet`・`Edited — run to update`・`Run output unavailable — run again` の注記も無くなる。
- 見回し（drag と wheel）はやめる。絵は出力そのものなので、見回す対象が無い。wheel は ComfyUI のグラフに渡る。
- 見た目は持ち主が下書き `design-drafts/node-1.html` の案 B から選んだ（2026-10-30）：上端の bar をやめ、絵の下の中央に新しい UI と
  同じ浮かせたボタン「Open Studio」を置き、撮り方と出力の大きさは絵の下の一行に出す。ノード上の表示は新しい UI の stylesheet と値を使う。

## 選ばなかった案

| 案 | 選ばなかった理由 |
|---|---|
| 実行の後は実行の出力の画像を示し、編集したらその場の絵に替える | 実行するたびに絵が替わり、どちらが出力か分かりにくい。その場の絵がまだ描かないもの（上流の Scene の層）があるときだけ意味があり、その差は描ける物を増やして埋める |
| 見回せるパノラマとして描く | 出力の ERP と違う絵になる。Frame モードとの見せ方も揃わない |
| ボタンをポインタを載せたときだけ出す（案 C） | 気づきにくい（持ち主の判断） |

## Consequences

- その場の絵は、エディタの Output の小窓と同じ部品で、同じ物の作り方（`web_src/studio/stage_content.js` の `stageContent`）から描く。
  ペイントは描く（エディタの新しい UI はまだ描かない）。上流の Scene（`scene` 入力の `PANO_SCENE`）の層はまだ描かず（エディタは描く）、
  深度の格子の 3D はエディタと同じく描かない。どちらも、描くまでは実行の結果と違う。
- 実行の出力の画像を temp に書く処理（`save_output_png`）が無くなり、実行ごとの PNG の書き出しが減る。
- ADR 0029 の Consequences の「見回せるパノラマの表示」と追記（2026-10-05）のノード上の表示の段落は、この ADR が置き換える。
