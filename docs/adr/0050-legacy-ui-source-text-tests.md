# ADR 0050: 旧ノードの UI の source-text test も消し、振る舞いの test に置き換える

## Status

Accepted（2026-10-31）

ADR 0044 の一部（「旧ノードの UI」の節の「それまでは古い UI を守る test も残す」と、「test」の節の「旧ノードの UI を守るものは旧ノードと一緒に残る」）を置き換える。

## Date

2026-10-31

---

## 背景

ADR 0044 は、古い UI の source-text test（ソースの文字列を正規表現で照らす test）のうち、旧ノード（`PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`）の UI を守るものは、旧ノードの登録を外すまで残すと決めた。

test の棚卸し（2026-10-31）で次が分かった。

- 古い UI の source-text test は、関数の中身、呼ぶ順、変数名を固めていて、振る舞いを変えない書き換えでも落ちる。実際に、エディタのコードの変更で壊れた source-text test が 1 本あった。
- 守っている規則の多くは、同じファイルや別のファイルの振る舞いの test がすでに守っているか、文字列では確かめられない（ボタンが関数につながっているか、などは開いて押さないと分からない）。
- 古いエディタを実際に開く browser の場面は無かった。旧ノードの UI の配線の誤りを検知するのは、エディタを開いたときに投げること（`tests/editor_wiring.test.mjs`）と、手で確かめることだけだった。

オーナーの決定（2026-10-31）：「いらんもんは消してくれ」。旧ノードの UI の source-text test も消す。

## 決定

- 旧ノードの UI（古いエディタ、旧ノードのノード上の表示）を守る source-text test は消す。実装の文字列を固める assert は消し、同じ test の中の振る舞いの assert は残す。
- 消す前に、古いエディタを開いて主な配線を通す browser の場面を置く（`tests/browser/legacy_editors.spec.js`）：
  - 旧 Panorama Stickers：ノード上の `Full Editor` で開き、Add Image で画像を選ぶと Sticker になり、閉じると `state_json` に Sticker と素材が書かれている。
  - 旧 Panorama Cutout：ノード上の `Full Editor` で開き、Add Frame を押し、閉じると `state_json` に Frame が書かれている。
  - 旧 Panorama Preview：ブラウザの fullscreen が使えないとき、ノード上のボタンで古いエディタが読み取り専用で開き、編集の道具が無い。
- 構造の規則を守る否定の assert（DOM を探さない、非推奨の API を使わない、一つの規則に一つの持ち主、など）のうち、`tests/architecture.test.mjs` がまだ持たないものは消さずに残し、`tests/architecture.test.mjs` へ移すかどうかは別に決める。
- 構造の lint（`tests/architecture.test.mjs`、`tests/editor_wiring.test.mjs`）は source-text test に数えず、残す。
- 新しい UI の source-text test を作らないこと（ADR 0044 の「test」の節）は変わらない。

## 考えた別案

| 案 | 選ばなかった理由 |
|---|---|
| ADR 0044 のとおり、旧ノードの登録を外すまで残す | 書き換えのたびに落ち、守るものは少ない。凍結した UI のために保守の手間だけが続く |
| browser の場面を足さずに消す | 旧ノードの UI の配線の誤りを検知するものが無くなる（ADR 0044 は、下の部品の変更で旧ノードが壊れたら直すと決めている） |
| 否定の assert もまとめて消す | Vue の境や非推奨の API の規則は、まだ `tests/architecture.test.mjs` にない。消すと機械で守られなくなる |

## Consequences

- 旧ノードの UI の回帰は、`tests/browser/legacy_editors.spec.js` の場面、残った振る舞いの test、エディタを開いたときに投げること（`tests/editor_wiring.test.mjs`）で検知する。
- 文字列でしか守られていなかった規則（旧ノードのノード上の表示の再描画の範囲など、performance の規則）は、守る test が無くなる。living spec の表の「守っている test」は、場面か残った test に向け直し、どれも守らない行はそう書く。
- 部品を下の層へ移す commit が、旧ノードの test の読む先を直すことは少なくなる。
