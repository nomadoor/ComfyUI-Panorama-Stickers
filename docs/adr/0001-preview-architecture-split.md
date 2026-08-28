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

## 2026-08-27 Amendment

`PanoramaCutout` には、widget-only のeditor導線ルールに対する例外を1つ設ける。

1. Cutoutはshared runtimeと既存のDOM preview mountを維持する。
2. Vue node surfaceは、そのpreview上にframe shape controlと`Full Editor` actionを配置してよい。
   これは第二のeditorではない。詳細なcamera編集は引き続き既存modalが担当する。
3. 標準LiteGraph editor buttonはmount失敗時のfallbackとして残す。Vue surfaceのmount成功後に
   限って非表示にし、editorへの導線を失わないようにする。
4. `PanoramaStickers`と`PanoramaPreview`はwidget-onlyを維持する。このamendmentは、それらの
   preview surfaceへのeditor action埋め込みを許可しない。

interactionとstateの契約は
[`docs/cutout-node-frame-surface-spec.md`](../cutout-node-frame-surface-spec.md)に記録する。

## 2026-08-28 Amendment

`PanoramaPreview` のdedicated runtimeを維持したまま、Node2 DOM pathへ最小のVue surfaceを許可する。

1. PreviewをCutout shared runtimeへ統合しない。image / video、interaction、lifecycle、Legacy fallbackは
   `web_src/pano_preview_previewnode.js` が引き続き所有する。
2. Vue surfaceはfullscreen toggle 1つだけを持つ。editor、FOV、playback、camera parameterなどの
   actionはnode surfaceへ追加しない。
3. fullscreen actionはDOM preview rootを直接fullscreen表示する。read-only modalを第二のnode surfaceとして
   埋め込まない。
4. 標準 `Open Preview` buttonはLegacyとVue mount失敗時のfallbackとして維持し、mount成功後だけ非表示にする。
5. node id、port semantics、cameraの非永続契約を変更しない。

詳細は [`docs/panorama-preview-node-surface-spec.md`](../panorama-preview-node-surface-spec.md) に記録する。

## 2026-08-29 Amendment

`PanoramaStickers` の未使用preview実装を互換対象から外し、Cutout / Previewと同じDOM surface構成へ置き換える。

1. Node 2.0とLegacy node rendererの両方で、同じDOM widget、canvas、Vue overlayを使う。
   renderer別に編集UIを二重実装しない。
2. 旧Stickers previewの自動backend切替、probe、Legacy canvas描画は廃止する。
   DOM surfaceをmountできない場合は標準 `Open Stickers Editor` widgetだけをfallbackとして残す。
3. node surfaceは既存modalを置き換えない。画像file picker / dropによる追加と、単一stickerの選択・基本変形を担当する。
   画像追加はmodalと同じ共有upload seamを使う。replace、paint、multi-selectionなどの高度な操作はmodalへ残す。
4. surface内の `Full Editor` actionは、Vue mount成功後に標準buttonを隠す場合に限って許可する。
   mount失敗時は標準buttonを表示したままにする。
5. shared render core、camera interaction、state queue barrierを再利用する。node id、port semantics、
   `state_json` format、backend出力を変更しない。
6. stickerの選択affordanceとcursor判定はmodalとnode surfaceで共有し、renderer別の見た目・操作差を作らない。

詳細は [`docs/panorama-stickers-node-surface-spec.md`](../panorama-stickers-node-surface-spec.md) に記録する。
