# Vue UI Boundary

エディタのモーダルの UI のうち、どれを Vue のコンポーネントが持ち、どの JS のモジュールが DOM に触れてよいかの具体的な一覧を定める。
原則（モーダルの DOM の UI は `web_src/components/` の Vue のコンポーネントにし、描画・数学・ポインタのブリッジは JS に置く、
DOM を組み立てる書き方の禁止）は `AGENTS.md` の Non-negotiables 6 にあり、ここでは言い直さない。

この文書が持たない規則：エディタのコードの層と依存の向き、`pano_editor.js` に残すもの（`docs/editor-architecture.md`）、
各コンポーネントが見せる中身と操作（`docs/editor-interaction.md`、`docs/timeline-ui.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| モーダルの外枠と部品は Vue のコンポーネント（ペイントのオーバーレイ、画像の選択、サイドパネル、選択メニュー、確認のダイアログ、ツールチップ、タイムライン） | — | `web_src/components/PanoModal.vue`・`PanoPaintOverlays.vue`・`PanoImageFilePicker.vue`・`PanoSidePanel.vue`・`PanoSelectionMenu.vue`・`PanoConfirmDialog.vue`・`PanoTooltip.vue`・`PanoTimeline.vue` | `tests/test_vue_modal_boundary.py` |
| エディタはそれらを DOM で作らず、Vue の ref と `uiState` を通して使う | — | `web_src/pano_editor.js`、`web_src/editor/*.js`（`getPaintOverlayRefs`・`openImagePicker`・`uiState.sidePanel` など） | `tests/test_vue_modal_boundary.py`（`tests/editor_source.py` で `pano_editor.js` と `web_src/editor/*.js` を読む） |
| Vue に渡す UI のモデルは `pano_editor_ui_state.js` の data builder に置く | — | `web_src/pano_editor_ui_state.js` `buildPaintDockModel`・`buildEditorSidePanelModel`・`buildSelectionMenuModel` | `tests/test_vue_modal_boundary.py`、`tests/pano_editor_ui_state.test.mjs` |

## Vue-only UI surface

The following must be rendered from Vue components under `web_src/components/`:

- modal shell chrome (`PanoModal.vue`)
  - Preview のビューアの `viewer` の配置（ステージと右下の視点の操作のボタン群と閉じるボタンだけ。`docs/preview-node.md`。作る）も `PanoModal.vue` の中に持ち、別のモーダルを作らない。
- toolbars and button groups (e.g. `PanoToolRail.vue`, `PanoFrameRail.vue`, `PanoViewToggle.vue`, `PanoFloatingRight.vue`, `PanoPaintDock.vue`, `PanoVideoTransport.vue`)
- inspector panels (`PanoSidePanel.vue`)
- selection menus (`PanoSelectionMenu.vue`)
- pickers and popovers (e.g. `PanoImageFilePicker.vue`, `PanoCutoutAspectPicker.vue`, `PanoTooltip.vue`)
- confirmation dialogs (`PanoConfirmDialog.vue`) and other structured DOM UI (e.g. `PanoPaintOverlays.vue`, `PanoTimeline.vue`)

## JS bridge surface

Besides what `AGENTS.md` (Non-negotiables 6) keeps in JS, the following may remain in plain JS modules:

- interaction state machines (pointer input)
- image uploads, preview surfaces, and non-DOM rendering resources
- ComfyUI node wiring and data normalization

The editor's behavior lives in the modules of `web_src/editor/` (see `docs/editor-architecture.md`); the
rules of `AGENTS.md` (Non-negotiables 6) apply to them as they do to `pano_editor.js`.
Derived Vue-facing UI models should live in `web_src/pano_editor_ui_state.js` when they can be expressed as plain data builders.

## Beyond AGENTS.md

- The ban on assembling DOM (`AGENTS.md`, Non-negotiables 6) covers editor UI as well as modal UI.
- Bridge code must not build or own UI structure through `querySelector(...)` trees either. It may still locate Vue-rendered elements when needed for canvas mounting, size measurement, or low-level pointer integration.
