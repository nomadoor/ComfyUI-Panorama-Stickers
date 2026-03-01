# ADR-0001: Preview Architecture (Single Public Node + Dedicated Preview Runtime)

- Status: Accepted
- Date: 2026-02-24
- Owners: ComfyUI-Panorama-Stickers maintainers

## Context

Node上プレビューで、以下の再発が継続した。

- Legacyでノード高さが固定化し、拡大後に縮小不能になる。
- DOM系とlegacy描画系が同一ノードで重複attachし、挙動が不安定になる。
- Legacy/Node2の公開ノード分岐がレビュー負荷を増加させ、修正時の影響範囲が読みにくい。

特に `PanoramaStickers` は編集UI本体であり、ノード上プレビューの複雑化が安定性を損ねていた。

## Decision

1. Previewの公開I/Fは `PanoramaPreview` 1ノードに統一する。
   - `PanoramaPreview_Legacy` は公開しない。
   - Legacy/DOMの分岐は内部実装に閉じ込める。

2. `PanoramaStickers` は既定でノード上プレビューをOFFにする。
   - 既定は `Open Stickers Editor` ボタン中心。
   - 将来ON時はPreviewと同一runtime/render基盤を再利用する。

3. Preview実装は分割する。
   - attach層: `web/pano_node_preview.js`
   - shared runtime層: `web/pano_preview_runtime.js`
   - dedicated preview runtime層: `web/pano_preview_previewnode.js`
   - hooks層: `web/pano_preview_hooks.js`
   - render API層: `web/pano_preview_render.js`

4. モーダルUIは既存 `showEditor(...)` を共通利用し、preview経路は read-only 強制とする。
   - state_json更新禁止
   - 履歴保存禁止
   - 編集系操作無効
   - サイドバー非表示

## Consequences

- 利点
  - 公開ノードが単純化され、レビューと運用が容易になる。
  - Preview系のattach/hook/描画を分離し、変更影響を限定できる。
  - Stickers内プレビュー復活時にも共通基盤を流用できる。

- トレードオフ
  - 既存Legacyノード名を直接参照する古いワークフロー互換は維持しない。
  - 内部fallback実装の保守責務は残る。

## Non-Goals

- 高度な編集機能をPreviewモーダルに追加することは対象外（view-only）。

## Guardrails

- `PanoramaPreview` は単一登録のみ。Legacy公開名を再導入しない。
- `computeSize` は最小必要サイズのみ返す。`node.size[1]` を算出入力に使わない。
- install/updateはidempotentに実装し、重複DOM/listenerを許容しない。
- teardown時は restoreハンドルを必ず実行し、hook上書きを残さない。

## 2026-02-28 Amendment

The stable implementation that finally held was stricter than the original fallback-heavy plan.

### Additional decisions

1. `PanoramaPreview` uses a dedicated runtime.
   - `web/pano_preview_previewnode.js`
   - It no longer routes through the shared stickers/cutout preview controller.

2. `PanoramaCutout` remains on the shared runtime.
   - `web/pano_preview_runtime.js`
   - Preview fixes for `PanoramaPreview` must not change Cutout attach policy.

3. Editor entry is widget-only.
   - `PanoramaStickers`, `PanoramaCutout`, and `PanoramaPreview` all open their editor/modal via standard LiteGraph button widgets.
   - Embedded editor buttons inside preview surfaces are not part of the stable architecture.

4. The Node2 `PanoramaPreview` path is DOM-first without automatic route switching.
   - No automatic DOM-to-legacy fallback based on transient zero-size probes.
   - Failure should stay visible instead of silently changing runtime path.

5. Runtime `node.size` mutation is not a valid steady-state layout mechanism.
   - Node preview sizing must be expressed through widget layout contracts, not live size correction.

### Why this amendment exists

The original “single public node + internal fallback” direction was correct at the public API level, but too loose operationally.
What actually stabilized the feature was not more fallback; it was stricter separation of responsibilities.
