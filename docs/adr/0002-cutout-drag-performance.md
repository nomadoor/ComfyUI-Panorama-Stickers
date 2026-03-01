# ADR-0002: Cutout Drag Performance (Keep Live Tracking, Reduce External Invalidations)

- Status: Accepted
- Date: 2026-03-01
- Owners: ComfyUI-Panorama-Stickers maintainers

## Context

`PanoramaCutout` のフレーム移動・回転・スケール中に、モーダル UI の追従が重く感じられた。

調査時点で、ドラッグ中は以下が高頻度で走っていた。

- モーダル内の canvas 再描画
- ComfyUI 側プレビュー/グラフへの dirty 伝播
  - `node.__panoDomPreview?.requestDraw?.()`
  - `node.setDirtyCanvas(...)`
  - `node.graph?.setDirtyCanvas(...)`
  - `app?.canvas?.setDirty(...)`
- サイドバー入力群への DOM 同期
  - `syncSidePanelControls()`

右上の出力プレビューも重いが、単純な 30fps 制限では「1フレームあたりの処理量」が変わらず、体感改善が薄かった。

また、ドラッグ中に品質を落とす案は、停止時に見え方が微妙に跳ぶ可能性があり、UX 上望ましくない。

## Decision

1. ドラッグ中も、cutout の見た目は live tracking を維持する。
   - フレーム位置・回転・サイズは、操作中も連続追従させる。
   - 「止まるまで更新しない」方式は採らない。

2. ドラッグ中の ComfyUI 側 dirty 伝播を止める。
   - 対象:
     - `move`
     - `scale`
     - `scale_x`
     - `scale_y`
     - `rotate`
   - モーダル内再描画は維持するが、外側のノードプレビュー/グラフ再描画は抑制する。

3. ドラッグ中の `syncSidePanelControls()` を止める。
   - サイドバーの数値同期は pointerup 時に 1 回反映する。
   - 毎フレームの DOM 更新は行わない。

4. 30fps 制限は採用しない。
   - ボトルネックは描画回数より、1回あたりの処理量と外側への無駄な伝播にあると判断した。

## Consequences

- 利点
  - ドラッグ中の live tracking は維持される。
  - 停止時に表示が跳ぶ（品質差によるズレ）問題を避けられる。
  - モーダル外の ComfyUI 再描画と DOM 同期コストを削減できる。

- トレードオフ
  - ドラッグ中、サイドバー数値はリアルタイム更新されない。
  - 数値の最終反映は pointerup 時点になる。

## Non-Goals

- 右上 cutout 出力プレビューの投影アルゴリズム自体を簡略化することは、今回の判断対象外。
- 画質を下げて見た目を変える最適化は採らない。

## Guardrails

- ドラッグ中も canvas 内のフレーム表示は連続追従させる。
- `requestDraw()` の抑制対象は、cutout 変形操作時の外部 invalidation のみ。
- pointerup 時には必ず:
  - `syncSidePanelControls()`
  - 通常の dirty 反映
  を再開する。
