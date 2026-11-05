# ADR 0063: 古い形の読み込みを捨てる（後方互換は最低限）

## Status

Proposed（2026-11-05）

ADR 0021 の「未知／レガシーのストローク（`FRAME_LOCAL` を含む）は JSON ラウンドトリップで保持する」を置き換える。

## Date

2026-11-05

---

## 背景

Issue #135 の整理の中で、今のエディタとノードがもう書かない形を読むための道が、Python と JS の両方に残っていた。
どれも、使う人が今の版で作ったワークフローでは通らず、守るためのコードと test とパリティのフィクスチャだけが増えていた。

持ち主の決定（2026-11-05）：「いらないものは徹底的に捨ててほしい　後方互換は最低限」。古い保存のワークフローについては
「workflowを組み直せばいいんだろ？」（組み直してもらうことを受け入れる）。

## 決定

次の古い形は、読み込みで捨てるか、読めないものとして扱う。読み替えの道は作らない。

- ペイントの `targetSpace.kind` が `ERP_GLOBAL` でないストローク（旧 `FRAME_LOCAL`）：読み込みで捨てる。
- 埋め込み画像の Sticker（v1 の `type: "dataurl"` の資産、状態 v2 の `{"kind": "file", "data_url": ...}` の Source）：Sticker を捨てる。
- v1 の `type: "path"` の資産（相対パスで ComfyUI の外のファイルを読みうるもの）：Sticker を捨てる。旧ノードも描かない。
- `sticker_state`：`version` の文字列（`"1"`）、`pose`・`source_aspect` の数値の文字列、v2 の読めない `fps`（欠け・0 以下・数値でない）は
  読めない値とする。Panorama Studio では未対応の版として実行のエラーにし、旧ノードでは無視する（`docs/scene-state-v2.md`）。
- 実行結果の `pano_sticker_handoff`：`placement` が `sky` でない値（ADR 0059 の前の実行）、`fps` の無い値は当てない。
- ノードへ送るペイントの層（`painting_layer`）：今のエディタが書くキー（group の `actionGroupId`、資産の `storage`、`revision`）だけを読む。

守るもの：ノードの id、ポートの意味、今の版が書く状態 v2・`sticker_state` v2・v1 の `sticker_state`（旧 Cutout が今も出す）の形。

## 結果

- 古い形を含む保存済みのワークフローは、その部分が消えた状態で開く（Sticker やストロークが無くなる）。組み直してもらう。
- 古い実行結果を持つノードは、実行し直すまで Pose handoff を表示しない。
- 消した形を試していた test とフィクスチャは一緒に消す。
