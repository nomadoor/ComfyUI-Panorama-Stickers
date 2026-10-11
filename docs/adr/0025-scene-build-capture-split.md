# ADR 0025: シーンの構築と撮影の分離、ノードの移行

## Status

Accepted

一部（出力ポートの先頭の並びを保つこと）を ADR 0027 が、（Stickers が組み立て Cutout と Preview が撮る分け方、新しい ID の `PanoramaStickersNode`・`PanoramaCutoutNode`）を ADR 0029 が置き換えた（2026-10-02、2026-10-03）。

## Date

2026-09-30

---

Stickers は Scene を組み立てて描画し、Scene の派生値として `PANO_SCENE` を出力する。Cutout と Preview は ERP の IMAGE / VIDEO か `PANO_SCENE` を受け取って撮影・表示する。Scene の正は Stickers の `state_json` だけとし、`PANO_SCENE` やエディタが別の Scene 表現を持つことを禁じる。上流の要素をロックする場合も、同じ Sticker のリストの中に印を付けるだけにする。V2 は同じシーンを二つの表現で持ち、描画専用の z オフセットを持ち込んだことで停止した。その反省に基づく。

入出力の意味が変わるため、新しい ID（`PanoramaStickersNode`・`PanoramaCutoutNode`・`PanoramaPreviewNode`）で作り直す。旧 ID は `io.NodeReplace` で置き換え、旧 `state_json` v1 は新しいパーサーで読む。

## Considered Options

V2 のように旧ノードを凍結して新旧を並存させる案は退けた。同じ操作に二つの経路が残るためである。置き換え後も既存の接続が移るよう、出力ポートの先頭の並び（IMAGE・MASK、Cutout は rect_image・sticker_state・mask）を維持する。
