# ADR 0027: 時間のある出力は VIDEO で出す

## Status

Accepted

## Date

2026-10-02

## Supersedes

- ADR 0024 の Consequences（IMAGE で全フレームを出力し、VIDEO 出力は後で足す）
- ADR 0025 の「出力ポートの先頭の並び（IMAGE・MASK、Cutout は rect_image・sticker_state・mask）を維持する」

---

新しい Stickers・Cutout・Preview は、時間のある結果を VIDEO の出力 `video` で出す。`video` はフレーム・fps・音声を持ち、出力した時点では描画しない。下流が保存・プレビュー・エンコードに使うときに 1 フレームずつ描いて書き出し、全フレームを RAM に置かない。下流が全フレームを IMAGE として要るときは、コアの GetVideoComponents につなぐ。そのときだけ全フレームが RAM に載る。

IMAGE と MASK の出力は 1 枚だけとし、名前を `first_frame`・`first_frame_mask` にして、全フレームではないことを名前で示す。中身は Timeline の最初の出力フレームである。`audio` と `fps` の出力は `video` に含まれるので持たない。

| ノード | 出力 |
|---|---|
| Stickers | `first_frame`（IMAGE）、`first_frame_mask`（MASK）、`video`（VIDEO）、`pano_scene`（PANO_SCENE） |
| Cutout | `first_frame`（IMAGE）、`sticker_state`（STRING）、`first_frame_mask`（MASK）、`video`（VIDEO） |

ノードは出力の接続状態を知れない。IMAGE で全フレームを出すと、`video` しか使わないときも毎回全フレームを描いて RAM に置くことになり、1080p の 300 フレームで約 7 GB、4096 幅で約 29 GB を使う。ComfyUI は再実行の間も前回の出力を保持するので、この倍が載る。入力の型に合わせて IMAGE を 1 枚かバッチにする案は、同じ出力の中身が入力で変わり、名前で表せないので退けた。

IMAGE バッチの入力は従来どおり Timeline fps（既定 24、エディタで変更）で出力フレームと 1 対 1 に対応させ、fps の入力は足さない（ADR 0024）。IMAGE バッチに fps や音声を付けたいときは、コアの CreateVideo で VIDEO にしてからつなぐ。

フレームごとに変わるマスク（追従するマスクなど）が要るようになったら、コアの VideoComponents の `alpha` に入れて `video` で出す。その時点でコアが `alpha` を取り出せないなら、白黒の VIDEO の出力 `mask_video` を末尾に足す。今は使わない出力を置かない。

`video` の遅延描画は、コアの PR #16413（遅延の空間編集）と同じ方向である。コアにフレーム単位で生成する VIDEO の仕組みが入ったら、それに移る。

## Consequences

IMAGE バッチのまま下流で処理していたワークフローは、`video` → GetVideoComponents を挟む。旧ノードの置き換え（#78）では、旧 `image`・`mask`（Cutout は `rect_image`・`mask`）を `first_frame`・`first_frame_mask` に移し、旧ノードでバッチを出していた接続は 1 枚になることを移行の注意に書く。`video` を使う下流が複数あると、それぞれで描画が走る。
