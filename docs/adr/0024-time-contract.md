# ADR 0024: 時間の契約

## Status

Accepted

## Date

2026-09-30

## Supersedes

- ADR 0018 の Graph / Data Contract のうち、`fps` 入力

---

状態に保存する時刻はすべて Timeline frame（整数）とし、Timeline fps を状態に記録する。評価時の時刻は Timeline frame ÷ Timeline fps で求める。Timeline fps は入力から決める。背景が VIDEO ならその fps、なければ `sticker` ポートの VIDEO の fps、それもなければ 24（エディタで変更可）とし、ノード入力には fps を持たない。

出力フレームは Timeline fps を決めた VIDEO（背景、なければ `sticker` の VIDEO）の PTS に合わせ（可変フレームレートを保持）、状態はその時刻で評価する。fps の異なる素材は実時間を保ち、PTS ≤ t の最後のフレームを使う。IMAGE バッチは出力フレームと 1 対 1 で対応させる。音声は背景の音声だけを使う。

VIDEO は全フレームを展開せず、`get_stream_source()` を PyAV で直接読んでフレーム単位で処理する。要件の「PyAV を直接扱わない」から外れるが、コアにフレームを逐次読む API がないためである。コアの PR #16413（遅延の空間編集）がマージされたら、その API に移行する。

## Consequences

ノードは出力の接続状態を知れないため、IMAGE を出力する以上、全フレームを描画する。VIDEO 出力は必要になった時点で出力の末尾に追加する。
