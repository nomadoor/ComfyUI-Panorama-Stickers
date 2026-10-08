# 見た目（デザインの値と共有のスタイル）

エディタのモーダルとノード上の表示（node surface）の見た目の値を定める：色と役割、文字、余白、角丸、
コントロールの高さ、影、動き、フォーカスと無効の見た目、重なり順、スクリム、共有の部品の class（`pano-*`）、
アイコン。ここに書く値はすべて今の `web/pano_editor.css` と `web_src/` にある値で、見た目はダークのみ（ライトの表示は無い）。

スタイルは一つの手書きの stylesheet `web/pano_editor.css` にあり、`web_src/pano_styles.js` の
`installPanoSuiteStylesheet` が `<link id="pano-suite-style-link">` として一度だけ読み込む。
Vue のコンポーネント（`web_src/components/*.vue`）は `<style>` を持たず、class と、位置・大きさ・色を渡す
inline の `style` と custom property（`--pano-segment-count`・`--pano-timeline-rows`・`--pano-video-shell-max`・`--v`・`--swatch` など）だけを使う。

この文書が持たない規則：どのボタンがどこに出て何をするか・ツールチップの文言・ボタンの位置を動かさない規則
（`docs/editor-interaction.md`）、タイムラインの行と再生の振る舞い（`docs/timeline-ui.md`）、Panorama Studio の
ノード上の表示の構成と bar の中身（`docs/studio-node-surface.md`）、旧ノードの toolbar の寸法と色と layout
（`docs/legacy-node-surfaces.md` の Layout Contract。`.pano-cutout-node-toolbar`・`.pano-stickers-node-toolbar` の値はそちらが owner）、どの UI を Vue のコンポーネントが持つか（`docs/vue-ui-boundary.md`）。

## この文書が owner である規則

| 規則 | Python | JS / CSS | test |
|---|---|---|---|
| デザインの値の custom property（`--pano-*`）とその値 | — | `web/pano_editor.css` の `.pano-modal` | — |
| ノード上の表示での custom property の定義し直し | — | `web/pano_editor.css` の `.pano-cutout-node-surface`・`.pano-stickers-node-surface`・`.pano-studio-node-surface`・`.pano-preview-node-surface` | — |
| stylesheet の読み込み | — | `web_src/pano_styles.js` `installPanoSuiteStylesheet` | — |
| 共有のボタン（`.pano-btn` 系）の大きさと状態の見た目 | — | `web/pano_editor.css` の `.pano-btn`・`.pano-btn-icon`・`.pano-btn-texticon`・`.pano-btn-primary`・`.pano-btn.subtle`、`web_src/components/PanoIconButton.vue` | — |
| 共有の部品（モーダル、HUD、切り替え、サイドパネル、値の行、選択肢、ツールチップ、確認のダイアログ、ペイント）の値と、部品の中だけの custom property（`.pano-segments` の `--pano-segment-pad: 3px`、`.pano-modal` の `--pano-side-w: 300px`） | — | `web/pano_editor.css` | — |
| 状態の class に ComfyUI の Tailwind の utility 名を使わない | — | `web_src/components/*.vue` | `tests/pano_css_class_safety.test.mjs` |
| アイコン（Tabler の線画、線の太さ、大きさ） | — | `web_src/icons.js` `ICON`・`ICON_PATHS`、`web_src/components/SvgIcon.vue`、`web/pano_editor.css` の `.icon-tabler`・`.pano-btn-icon svg` | — |
| 重なり順（`z-index`）とスクリム | — | `web/pano_editor.css`、`web_src/components/PanoPaintOverlays.vue`（ペイントのカーソル） | — |

## 色

### custom property（`.pano-modal` で定義）

| property | 値 | 使われ方 |
|---|---|---|
| `--pano-surface-0` | `#0a0a0a` | モーダル本体（`--pano-bg-panel`）、ステージ（`--pano-bg-base`）、サイドパネル、サイドパネルの footer |
| `--pano-surface-1` | `#0f0f10` | 選択肢のポップオーバー、サイドパネルの設定（`.pano-ui-settings`）、`.pano-segment`、タイムラインの本体、Easing の切り替えと graph の地、ツールチップの地の元 |
| `--pano-surface-2` | `#1a1a1a` | コントロールの地（`--pano-bg-control`）、選択肢の項目の hover、タイムラインの目盛りの行 |
| `--pano-surface-3` | `#3d3d3f` | 選ばれている側（`.pano-btn.active`、切り替えの印、選択肢の `.active`）、タイムラインの目盛りの線、Easing の枠 |
| `--pano-surface-hover` | `#222224` | `.pano-btn:hover` の地 |
| `--pano-bg-base` | `var(--pano-surface-0)` | ステージ、読み込み中の地 |
| `--pano-bg-panel` | `var(--pano-surface-0)` | モーダル本体 |
| `--pano-bg-control` | `var(--pano-surface-2)` | ボタン、入力、選択肢の trigger、`.pano-segments` |
| `--pano-text` | `#f5f5f5` | 主な文字、選ばれている側の文字、hover の文字 |
| `--pano-muted` | `#787878` | 二次の文字（ラベル、選ばれていない切り替え、選択肢の項目） |
| `--pano-text-secondary` | `var(--pano-muted)` | ボタンの文字、右下の群の文字、注記 |
| `--pano-muted-strong` | `#a0a0a0` | 選ばれていない切り替えの hover、設定の行のラベル、開いた caret |
| `--pano-text-tertiary` | `#5e5e5e` | 無効の切り替え、caret、section title の meta、タイムラインの目・開閉・鍵のボタン |
| `--pano-border` | `rgba(255,255,255,0.09)` | タイムラインの行の境界 |
| `--pano-accent` | `var(--pano-theme-accent, #0070f3)` | フォーカスの輪、スライダーの塗り、チェックボックス、タイムラインの再生位置・clip・上書きの印、Easing の曲線 |
| `--pano-accent-dimmed` | `color-mix(in srgb, var(--pano-accent) 34%, transparent)` | `.is-selected` の地（`.is-selected` を付ける code は無い） |
| `--pano-accent-dark` | `var(--pano-theme-accent-dark, #0366d6)` | 参照なし |
| `--pano-accent-extra-dark` | `var(--pano-theme-accent-extra-dark, #0059bc)` | 参照なし |
| `--pano-text-reversed` | `#ffffff` | 参照なし |
| `--pano-emphasis-bg` | `#185fb8` | 強調のボタン（`.pano-btn-primary`、左のツール群の accent のボタン、ノードの Full Editor と Open） |
| `--pano-emphasis-bg-hover` | `#2672d2` | 強調のボタンの hover（`.pano-btn-primary` は `:focus-visible` も） |
| `--pano-emphasis-bg-active` | `#114f9d` | 強調のボタンの `:active` |
| `--pano-emphasis-text` | `#ffffff` | 強調のボタンの文字 |
| `--pano-float-bg` | `rgba(10,10,10,0.74)` | ステージの上に浮く群（HUD）の地 |

`--pano-theme-accent`・`--pano-theme-accent-dark`・`--pano-theme-accent-extra-dark` はこのリポジトリのどこでも設定しておらず、
既定の値が使われる。

### ノード上の表示での定義し直し

ノード上の表示は `.pano-modal` の外にあるので、各 surface の root が使う property を定義し直す。

| surface | 定義し直す値 |
|---|---|
| `.pano-cutout-node-surface` | `--pano-surface-0`〜`3`・`--pano-bg-control`・`--pano-text`・`--pano-emphasis-*` はモーダルと同じ値（`--pano-emphasis-text` は `#fff`）。`--pano-text-secondary: #a1a1aa`、`--pano-text-tertiary: #71717a`、`--pano-space-md` / `lg` / `xl`（8 / 12 / 14px）、`--pano-float-bg: rgba(10,10,10,0.82)`、`--pano-float-radius: 8px` |
| `.pano-stickers-node-surface` | `--pano-text: #f5f5f5`、`--pano-text-secondary: #787878`、`--pano-emphasis-bg`・`-hover`・`-active`、`--pano-float-bg: rgba(10,10,10,0.82)`、`--pano-float-radius: 8px` |
| `.pano-studio-node-surface` | `--pano-text: #f5f5f5`、`--pano-text-secondary: #a1a1aa`、`--pano-emphasis-bg: #185fb8` |
| `.pano-preview-node-surface` | `--pano-text: #f5f5f5` |

ノード上の表示の枠（`web_src/pano_preview_runtime.js` の `attachPanoramaPreviewImpl` と `web_src/pano_preview_previewnode.js` の
inline の style）は角丸 8px、`1px solid rgba(63,63,70,1)`、地 `#070707`。`PanoramaPreview` の fullscreen の地も `#070707`。
ノードの小さいボタン（`.pano-preview-node-fullscreen`・`.pano-stickers-node-play`）は 26×26、角丸 6px、地 `rgba(27,30,37,0.9)`、
文字 `rgba(255,255,255,0.72)`、hover と `:focus-visible` で `rgba(37,41,50,0.96)` と `rgba(255,255,255,0.96)`。
ノードの注記（`.pano-*-node-empty-note`）は角丸 999px、`1px solid rgba(255,255,255,0.08)`、地 `rgba(10,10,10,0.7)`、10px / 550、`blur(8px)`。

### custom property を使わない色

直に色を書く箇所は多く、次の表は主なものの例で、全部ではない（ペイントの色の部品、動画の操作、Camera の出力のプレビュー、旧ノードの toolbar などにも直の値がある）。

| 値 | 使われ方 |
|---|---|
| `#d0d0d0` | `.pano-section-title` |
| `#f5f5f5`（`--pano-text` と同じ値） | `.pano-canvas-confirm-title`、`.pano-picker-item.active`、設定の summary、`.pano-segment-btn[aria-pressed="true"]`、`.pano-easing-mode[aria-pressed="true"]` |
| `#b0b0b0` | 確認のダイアログの本文 |
| `#111` | 確認のダイアログの地、Keyframe の集まりの文字、Easing の handle の線 |
| `rgba(255,255,255,0.08)` | `.pano-divider`、`.pano-side-footer` の上の線、色のポップオーバーの内側の線 |
| `rgb(255,221,87)` | Frame のツール群（`.pano-frame-rail`）の地の混色と内側の 2px の線、roll の knob の armed |
| `#f5b544` | Keyframe のある鍵のボタン、選んだ Keyframe の印、Easing の腕と handle |
| `#d4d4d8` | Keyframe の印 |
| `rgba(251,191,36,0.5)`・`rgba(24,18,8,0.9)`・`#fde68a` | ステージの読み込みの失敗（枠・地・文字） |
| `rgba(10,10,10,0.58)` | ドロップの案内（`.pano-stage-drop-hint-text`）の地 |
| `rgba(255,255,255,0.84)` | 動画の時刻（`.pano-video-time`） |
| `rgba(0,112,243,0.88)`・`rgba(0,32,72,0.58)` | `PanoramaStickers` の drop の案内（`.pano-stickers-node-drop-cue`）の破線と地 |
| `rgba(10,10,10,0.72)` | Studio の bar の状態（`.pano-studio-node-status`）の地 |
| `rgba(236,236,242,0.92)` | `.pano-view-unavailable` の文字 |

## 文字

- 書体：`"Plus Jakarta Sans", "Geist", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, sans-serif`（`.pano-modal`）。
  ノード上の表示は `font: 500 11px/1 "Plus Jakarta Sans", Geist, system-ui, sans-serif`（各 surface の root）。
  `.pano-view-unavailable` は `600 13px "Plus Jakarta Sans", Geist, sans-serif`。
- 大きさと太さ（大きさの custom property は無く、各 class が値を持つ）。`.pano-modal` は太さを指定しないので、
  太さを書かない class は親から継承する（表の「継承」）。ノード上の表示は root の `font` が 500 を与える。

| 大きさ | 太さ | 使われ方 |
|---|---|---|
| 9px | 700 | Keyframe の集まりの数 |
| 10px | 継承 | footer のツールチップ（`.pano-tooltip-footer`）、軸のラベル（`.pano-axis`） |
| 10px | 550 | ノードの注記 |
| 10.5px | 500（`.pano-btn` から） | `.pano-btn.subtle` |
| 11px | 500 | 値の行のラベル（`.pano-field label`・`.pano-field-wide label`）、選択肢の trigger と項目、`.pano-segment-btn`、section title の meta、色の欄のラベル、ノード上の表示の既定 |
| 11px | 継承 | ツールチップ、値の行の入力、`.pano-param-note`、タイムライン、Easing の項目と注記、設定の行のラベル |
| 11px | 600 | `.pano-section-title`、設定の summary |
| 11px | 650 | ノードの help の見出し、`PanoramaStickers` の drop の案内 |
| 12px | 500 | `.pano-btn`、表示の切り替えのラベル、`.pano-segments` の項目、`.pano-btn-texticon` のラベル |
| 12px | 継承 | 右下の群（`.pano-floating-right`）、動画の時刻、カメラの出力のプレビューのラベル、確認のダイアログの本文 |
| 12px | 600 | `.pano-side-title`、ドロップの案内、色のポップオーバーの見出し |
| 13px | 600 | 確認のダイアログの見出し、`.pano-view-unavailable` |
| 14px | 500（`.pano-btn` から） | `.pano-aspect-choice` |

- 数字が揺れない表示：`font-variant-numeric: tabular-nums`（入力の数値、動画の時刻、タイムラインの時刻・目盛り・設定、aspect の trigger、roll の値、ノードの出力の大きさ）。
- 字間：ラベル系は `letter-spacing: 0.01em`。
- 行の高さ：`line-height: 1` は `.pano-btn`、選択肢の trigger と項目、`.pano-tooltip`、`.pano-floating-right`、`.pano-video-time`、ノードの注記と、ノード上の表示の root（`font` の `/1`）。他は継承する。

## 余白

| property | 値 | 使われ方 |
|---|---|---|
| `--pano-space-xs` | 4px | `--pano-float-pad`、タイムラインの gap |
| `--pano-space-sm` | 6px | `--pano-float-gap`、インスペクタの gap、選択肢のポップオーバーの padding |
| `--pano-space-md` | 8px | コントロールの中の padding、行の gap、ステージの列の gap |
| `--pano-space-lg` | 12px | モーダルの padding と gap、サイドパネルの左右の padding、左上と左と右の HUD の位置 |
| `--pano-space-xl` | 14px | 文字とアイコンのボタンの左右の padding、右下の群と Camera の出力のプレビューの位置、サイドパネルの footer の下 |
| `--pano-space-2xl` | 24px | 下の HUD（ペイントの群、動画の操作）と右下の群の下からの位置 |
| `--pano-float-pad` | `var(--pano-space-xs)` | HUD の内側の padding |
| `--pano-float-gap` | `var(--pano-space-sm)` | HUD の中の gap |

このほか、各 class が px の値（2・3・5・7・9・10・16px など）を直に持つ。

## 角丸

角丸の custom property は `--pano-float-radius`（10px）だけで、他は各 class が値を持つ。`--pano-space-xs`（4px）・
`--pano-space-md`（8px）・`--pano-space-lg`（12px）を角丸に使う class がある。

| 値 | 使われ方 |
|---|---|
| 4px | `.pano-aspect-choice`（`--pano-space-xs`）、タイムラインの小さいボタンと clip |
| 6px | HUD の中のアイコンのボタン・roll の knob・`.pano-segments`（`calc(var(--pano-float-radius) - var(--pano-float-pad))`）、Studio の bar、ノードの小さいボタン、`.pano-segment` の印と Easing の項目（`calc(var(--pano-space-md) - 2px)`） |
| 8px | `.pano-btn`・入力・選択肢の trigger と項目・ツールチップ・設定・`.pano-segment`・タイムラインの本体（`--pano-space-md`）、表示の切り替えの印、ステージの読み込みの失敗、ノード上の表示の枠と `--pano-float-radius` |
| 10px | HUD（`--pano-float-radius`）、ステージ、サイドパネル、確認のダイアログ、ドロップの案内、aspect のポップオーバー、色の SV の面 |
| 12px | モーダル本体、選択肢のポップオーバー（`--pano-space-lg`）、音量のポップオーバー |
| 14px | 色のポップオーバー |
| 16px | Camera の出力のプレビュー |
| 999px | 色の点、スライダーの track と thumb、色の float、ノードの注記、Camera の出力のプレビューの大きさの切り替え |

## コントロールの高さ

| 高さ | 対象 |
|---|---|
| 40px | `.pano-btn` と `.pano-btn-icon`（40×40）の既定、左のツール群と Frame のツール群のボタン、表示の切り替えのボタン（`.pano-view-btn`、幅 124px）、`.pano-segments`、右下の群と動画の操作の最小の高さ、動画の filmstrip、roll の knob |
| 35px | 選択メニュー（`.pano-selection-menu`）のアイコンのボタン（35×35）と `.pano-segments` |
| 32px | 選択肢の項目、`.pano-btn.subtle`、設定の summary、Frame の aspect の選択肢の最小の高さ |
| 30px | 選択肢の trigger、`.pano-field-wide`、aspect の trigger |
| 28px | `.pano-field` とその入力、`.pano-segment-btn`、aspect の自由入力とそのボタン、タイムラインの再生・消音・開閉のボタン |
| 26px | Easing の項目、ノードの小さいボタン |
| 24px | タイムラインの設定の入力と長さを戻すボタン、Studio の bar のコントロール |
| 20px / 18px | タイムラインの行（20px）、行の目・開閉・鍵のボタン（20×18） |

## 共有の部品

### モーダル

- スクリム（`.pano-modal-overlay`）：`rgba(0,0,0,0.62)`、`backdrop-filter: blur(12px)`、`z-index: 99999`。
- 本体（`.pano-modal`）：幅 `max(720px, 80vw)`、高さ `max(520px, 82vh)`、最大 `96vw` × `94vh`。地 `--pano-bg-panel`、枠なし、
  角丸 12px、影 `0 28px 80px rgba(0,0,0,0.66)`、padding と gap は `--pano-space-lg`、`overflow: hidden`。
  格子は `minmax(0,1fr)` と `var(--pano-side-w)`（300px）の 2 列。左の列（`.pano-stage-column`）はステージとタイムラインを
  `--pano-space-md` の間隔で縦に並べる。
- fullscreen（`.pano-modal-fullscreen`）：100vw × 100vh、角丸・padding・gap は 0、格子は 1 列、ステージの角丸は 0。
  サイドパネル、左上の群、右下の群、Camera の出力のプレビュー、選択メニュー、ツールチップを `display: none` にする。
- ステージ（`.pano-stage`）：地 `--pano-bg-base`、枠なし、角丸 10px。ファイルを持ち込む間は `blur(2px) brightness(0.76)`。
  読み込み中は地の上を明るい帯が 1.6s で流れる。

### HUD（ステージの上に浮く群）

地 `--pano-float-bg`、`backdrop-filter: blur(12px)`、枠なし、角丸 `--pano-float-radius`、padding `--pano-float-pad`。

| class | 位置 | gap | 影 | z-index |
|---|---|---|---|---|
| `.pano-floating-top`（中の `.pano-view-toggle`） | 左上 | `--pano-float-gap` | `0 8px 30px rgba(0,0,0,0.35)`（切り替え） | 2 |
| `.pano-floating-left` | 左の縦の中央 | 4px | `0 8px 30px rgba(0,0,0,0.35)` | 4 |
| `.pano-frame-rail` | 右の縦の中央 | 4px | 内側の 2px の黄色の線と `0 8px 30px rgba(0,0,0,0.35)` | 4 |
| `.pano-floating-right` | 右下 | `--pano-float-gap` | なし | 2 |
| `.pano-paint-footer`（`.pano-paint-dock` の中） | 下の中央 | 4px | なし | 4（dock） |
| `.pano-video-transport-shell` | 下の中央（幅は最大 `--pano-video-shell-max`） | `--pano-float-gap` | `0 14px 40px rgba(0,0,0,0.34)` | 4 |
| `.pano-selection-menu` | JS が置く | 4px | `0 2px 4px rgba(0,0,0,0.15)` | 3 |

左のツール群の accent のボタン（`.pano-btn-icon-accent`）は emphasis の地と文字で、hover と `.active` は `--pano-emphasis-bg-hover`。

幅 860px 以下（`@media (max-width: 860px)`）では、動画の操作の幅が `min(100%, calc(100% - 24px))`、下の位置が `calc(var(--pano-space-2xl) + env(safe-area-inset-bottom))`、
中の gap が 8px、時刻の最小の幅が 2.35rem、filmstrip の thumb の最小の幅が 32px になる。

### 切り替え（segmented）

| class | 使われ方 | 高さ（外側 / 項目） | 外側 | 印 | 動き |
|---|---|---|---|---|---|
| `.pano-view-toggle` | Panorama / Unwrap / Frame | 48px / 40px（`.pano-view-btn`） | HUD の地、padding 4px | `--pano-surface-3`、角丸 8px | `transform` 170ms |
| `.pano-segments`（`--pano-segment-pad: 3px`） | 選択メニューの Move / Rotate / Scale | 40px（選択メニューの中は 35px）/ 外側から padding を引いた高さ | `--pano-bg-control`、padding `--pano-segment-pad` | `--pano-surface-3` | `transform` 170ms |
| `.pano-segment` | サイドパネルの設定（2 択） | 32px / 28px（`.pano-segment-btn`） | `--pano-surface-1`、padding 2px | `--pano-surface-3` | `transform` 170ms |
| `.pano-easing-modes` | Easing の 3 択 | 30px / 26px（`.pano-easing-mode`） | `--pano-surface-1`、padding 2px | 押された項目の地が `--pano-surface-3` | なし |

文字は選ばれていない側が `--pano-muted`、選ばれている側が `--pano-text`（`.pano-segment` と Easing は `#f5f5f5`）。
`.pano-view-toggle` と `.pano-segments` の選ばれていない側の hover は `--pano-muted-strong`、表示の切り替えの無効の項目は
`--pano-text-tertiary` と opacity 0.5。

### ボタン（`.pano-btn`）

| 状態 | 見た目 |
|---|---|
| 既定 | 地 `--pano-bg-control`、文字 `--pano-text-secondary`、枠なし、角丸 `--pano-space-md`、高さ 40px、左右の padding `--pano-space-lg`、12px / 500 |
| hover | 地 `--pano-surface-hover`、文字 `--pano-text` |
| 選ばれている（`.active`） | 地 `--pano-surface-3`、文字 `--pano-text` |
| フォーカス | `box-shadow: 0 0 0 1px var(--pano-accent)`、outline なし |
| 無効 | opacity 0.46、`pointer-events: none` |
| 動き | 地・文字・影・opacity が `120ms cubic-bezier(0.2,0,0,1)` |

- `.pano-btn-primary`：地 `--pano-emphasis-bg`、文字 `--pano-emphasis-text`、hover と `:focus-visible` は `-hover`、`:active` は `-active`、無効は opacity 0.5。
  サイドパネルの footer の Save と Close、確認のダイアログが使う。
- `.pano-btn-icon`：40×40、padding 0。HUD の中では角丸 `calc(var(--pano-float-radius) - var(--pano-float-pad))`。
- `.pano-btn-texticon`：アイコンと文字、gap `--pano-space-md`、左右の padding `--pano-space-xl`。
- `.pano-btn.subtle`：地なし、文字 `--pano-muted`、32px、10.5px。hover は文字 `--pano-text` と地 `color-mix(in srgb, var(--pano-bg-control) 55%, transparent)`、無効は opacity 0.38。

### サイドパネル（`.pano-side`）

- 地 `--pano-surface-0`、枠なし、角丸 10px、左右の padding `--pano-space-lg`、`overflow: hidden`。
  中身は `.pano-side-scroll`（`overflow-y: auto`、scrollbar を出さない）がスクロールし、footer は下に残る。
- `.pano-side-head`：高さ 42px。`.pano-side-title` は 12px / 600 / `--pano-text`、アイコンは 14px。
- `.pano-divider`：高さ 1px、`rgba(255,255,255,0.08)`、左右に `--pano-space-lg` はみ出してパネルの幅いっぱい。
- `.pano-inspector`：gap `--pano-space-sm`、上下の padding `--pano-space-lg`。
- `.pano-section-title`：11px / 600 / `#d0d0d0`、字間 0.01em、margin `2px 0 8px`。meta は 11px / 500 / `--pano-text-tertiary`。
- `.pano-side-footer`：右寄せ、gap `--pano-space-md`、padding `--pano-space-lg 0 --pano-space-xl`、上に `1px solid rgba(255,255,255,0.08)`。
- `.pano-params.disabled`：opacity 0.42、`saturate(0.7)`、160ms。
- 設定（`.pano-ui-settings`）：地 `--pano-surface-1`、角丸 8px。summary は 32px、11px / 600。caret は開くと 180° 回る（140ms）。
  行のラベルは 11px / `--pano-muted-strong`、チェックボックスは 16px で `accent-color: var(--pano-accent)`。

### 値の行（`.pano-field`）

- `.pano-field`：格子 `58px minmax(0,1fr) auto`、gap `--pano-space-md`、高さ 28px。ラベルは 11px / 500 / `--pano-muted`。
- 入力：地 `--pano-bg-control`、文字 `--pano-text`、枠なし、角丸 8px、高さ 28px、11px、tabular-nums。
  数値の入力は右寄せで幅 `calc(6ch + 12px)`、spin button を出さない。無効は opacity 0.62。
- 並べる行（`.pano-field-group`）：格子 `58px minmax(0,1fr)`、値は 3 等分の列（gap 4px）。軸のラベル（`.pano-axis`、幅 16px、10px）が入力の左に重なる。
  行の組み方は `docs/editor-interaction.md` の「インスペクタの行」。
- `.pano-field-wide`：格子 `66px 1fr`、高さ 30px。
- スライダー（`input[type="range"]`）：track 3px、塗りは `--pano-accent`、残りは `rgba(255,255,255,0.16)`（Firefox の track は値の行とペイントの太さが `rgba(255,255,255,0.1)`、動画の音量が 0.16）。
  thumb は 11px の白い円と `0 0 0 1px rgba(0,0,0,0.45)`、hover と押下で 1.2 倍。ペイントの太さと動画の音量のスライダーも同じ track を持つ
  （ペイントの太さの thumb は 19px の中に半径 5.5px の accent の点）。

### 選択肢（`.pano-picker`）

- trigger：地 `--pano-bg-control`、文字 `--pano-text`、角丸 8px、高さ 30px、11px / 500。hover の見た目は無い。無効は opacity 0.62。
- ポップオーバー（`.pano-picker-pop`）：地 `--pano-surface-1`、枠なし、角丸 12px、影 `0 18px 54px rgba(0,0,0,0.5)`、padding 6px、最大の高さ 240px、`z-index: 6`。
- 項目：高さ 32px、文字 `--pano-muted`、11px / 500、アイコン 14px。hover は地 `--pano-surface-2` と文字 `--pano-text`、`.active` は地 `--pano-surface-3` と文字 `#f5f5f5`。

### ツールチップ（`.pano-tooltip`）

地 `color-mix(in srgb, var(--pano-surface-1) 92%, black)`、文字 `--pano-text`、11px、padding `6px 8px`、角丸 8px、
影 `0 8px 24px rgba(0,0,0,0.34)`、`z-index: 8`、出入りは opacity 160ms。左右のツール群の版（`.pano-tooltip-tool-rail`・`-frame-rail`）は
padding `7px 10px`、地 94%、影 `0 12px 28px rgba(0,0,0,0.34)`。footer の版（`.pano-tooltip-footer`）は地も影も無く 10px / `--pano-text-secondary`。

### 確認のダイアログ（`.pano-canvas-confirm`）

ステージの上に `rgba(0,0,0,0.35)` と `blur(2px)` を敷く（`z-index: 5`）。カードは幅 `min(340px, calc(100% - 32px))`、地 `#111`、
角丸 10px、padding 14px、影 `0 16px 44px rgba(0,0,0,0.45)`、gap 10px。見出しは 13px / 600、本文は 12px / `#b0b0b0`、ボタンは右寄せで gap 8px。

### ペイント

- 色の float（`.pano-paint-color-float`）：角丸 999px、地 `rgba(18,20,26,0.4)`、`blur(12px)`、影 `0 8px 30px rgba(0,0,0,0.35)`。
  色の点は 20px、選ばれた点は内側に 2.5px の輪。無効は opacity 0.42 と `saturate(0.55)`。
- 色のポップオーバー（`.pano-paint-color-pop`）：最小の幅 220px、padding 12px、角丸 14px、地 `rgba(20,20,23,0.98)`、
  影 `0 16px 40px rgba(0,0,0,0.42), inset 0 0 0 1px rgba(255,255,255,0.08)`、`z-index: 6`。
- 太さの行は左右に `1px solid rgba(255,255,255,0.12)`、無効は opacity 0.45。

### HUD の上のポップオーバー

音量（`.pano-video-volume-pop`、角丸 12px）と aspect（`.pano-aspect-popover`、角丸 10px）は地 `rgba(10,10,10,0.92)`、`blur(12px)`、
影 `0 14px 38px rgba(0,0,0,0.42)`。Frame の aspect（`.pano-frame-aspect-popover`）は HUD の地と影。

## 影

| 値 | 使われ方 |
|---|---|
| `0 28px 80px rgba(0,0,0,0.66)` | モーダル本体 |
| `0 18px 54px rgba(0,0,0,0.5)` | 選択肢のポップオーバー |
| `0 16px 44px rgba(0,0,0,0.45)` | 確認のダイアログ |
| `0 16px 40px rgba(0,0,0,0.42), inset 0 0 0 1px rgba(255,255,255,0.08)` | 色のポップオーバー |
| `0 14px 40px rgba(0,0,0,0.34)` | 動画の操作 |
| `0 14px 38px rgba(0,0,0,0.42)` | 音量と aspect のポップオーバー |
| `0 12px 30px rgba(0,0,0,0.32)` | ドロップの案内 |
| `0 12px 28px rgba(0,0,0,0.34)` | ツール群のツールチップ |
| `0 8px 30px rgba(0,0,0,0.35)` | 表示の切り替え、左のツール群、Frame のツール群、Frame の aspect、色の float |
| `0 8px 24px rgba(0,0,0,0.34)` | ツールチップ |
| `0 8px 24px rgba(0,0,0,0.46)` | ノードの help と aspect のポップオーバー |
| `0 4px 14px rgba(0,0,0,0.28)` | ノードの小さいボタン |
| `0 2px 4px rgba(0,0,0,0.15)` | 選択メニュー |

## 動き

| 値 | 使われ方 |
|---|---|
| `120ms cubic-bezier(0.2,0,0,1)` | `.pano-btn` の状態 |
| `170ms cubic-bezier(0.2,0,0,1)` | 切り替えの印 |
| `100ms ease` | 表示の切り替えの文字、値の行と選択肢の状態 |
| `160ms ease` | ツールチップ、`.pano-params` の無効 |
| `130ms ease` | ステージの filter |
| `140ms` | 設定と aspect の caret、ペイントの太さのプレビュー |
| `150ms ease` | タイムラインの開閉のアイコン |
| `180ms ease` | ペイントの pane の切り替え、タイムラインの本体の開閉（`ease-out`。`prefers-reduced-motion: reduce` では動かさない） |
| `180ms cubic-bezier(0.2,0,0,1)` | 動画の filmstrip と thumb |
| `220ms ease` | ペイントの群・Frame のツール群・動画の操作の出入り、読み込み中の表示 |
| `220ms cubic-bezier(0.2,0,0,1)` | 音量のポップオーバー（出るまで 120ms 待つ）、Camera の出力のプレビューの canvas |
| `320ms cubic-bezier(0.2,0,0,1)` | Camera の出力のプレビューの出入り |

## フォーカスと無効

- フォーカスの輪：ボタンと `.pano-segments` の項目は `box-shadow: 0 0 0 1px var(--pano-accent)`、入力と選択肢の trigger は
  `inset 0 0 0 1px var(--pano-accent)`、タイムラインのボタンと印は `outline: 2px solid var(--pano-accent)`（offset 1px）。
  表示の切り替えのボタンとスライダーには輪を出さない（値の行のスライダーは thumb の影が `0 0 0 1.5px rgba(0,0,0,0.5)` になる）。
- 無効の opacity は class ごとに違う：`.pano-btn` 0.46、`.pano-btn-primary` と表示の切り替え 0.5、入力・選択肢の trigger・軸 0.62、
  `.pano-btn.subtle` とタイムラインの層の操作 0.38、`.pano-params` と色の float 0.42、ペイントの太さ 0.45、
  タイムラインの小さいボタン 0.35、音声の無い音量 0.48。

## 重なり順

モーダルの中（ステージの wrap の上）：

| z-index | 要素 |
|---|---|
| 0 / 1 | ステージの背景 / ステージの overlay |
| 2 | 読み込み中、ドロップの案内、左上の群、右下の群、Camera の出力のプレビュー |
| 3 | 選択メニュー |
| 4 | 左のツール群、Frame のツール群、ペイントの群、動画の操作、aspect のポップオーバー |
| 5 | 確認のダイアログ、ステージの読み込みの失敗、色の float |
| 6 | 色のポップオーバー、選択肢のポップオーバー |
| 8 | ツールチップ |
| 11 | ペイントの太さのプレビュー |
| 12 | ペイントのカーソル（`PanoPaintOverlays.vue` の inline の style）、`.pano-cutout-aspect-pop` |

スクリム（`.pano-modal-overlay`）は 99999。ノード上の表示は host が 3、toolbar と bar が 4、注記と drop の案内が 3。

## 状態の class

状態は `.active`・`.show`・`.open`・`.disabled`・`.selected`・`[aria-pressed]`・`[aria-disabled]`・`data-*` と、`is-` の接頭辞の class
（`is-hidden`・`is-ready`・`is-active`・`is-loaded`・`is-pinned` など）で表す。ComfyUI のフロントエンドは同じ document に
Tailwind の utility（`.hidden { display: none }` など）を持つので、Vue のコンポーネントは `hidden`・`block`・`flex`・`grid`・
`invisible`・`visible`・`contents` を状態の class として `:class` に結ばない（`tests/pano_css_class_safety.test.mjs`）。

## アイコン

- Tabler の outline のアイコンを `web_src/icons.js` が持つ（`ICON` の名前 50 個と、Tabler の名前と SVG の中身を持つ `ICON_PATHS`）。
  `SvgIcon.vue` が `viewBox="0 0 24 24"`、`fill="none"`、`stroke="currentColor"`、`stroke-linecap` と `stroke-linejoin` は `round`、
  class `icon icon-tabler icons-tabler-outline` で描く。
- 線の太さ：`.pano-modal` の中の Tabler のアイコンと、`.pano-btn-icon`・`.pano-btn-texticon` の中の SVG は `var(--pano-icon-stroke, 2.3)`
  （`--pano-icon-stroke` はどこでも設定しておらず 2.3）。タイムラインのアイコンは 1.75、ノードの小さいボタンは 2.3px。
- 大きさ：ツールバーと HUD のボタン 18px、サイドパネルの見出し・選択肢・タイムライン・ノードの文字つきボタン 14px、
  ノードの小さいボタン 16px、aspect の trigger 15px。
- どのボタンにどのアイコンを使うかは `web_src/modal_shell_presets.js` と各コンポーネントが持ち、ボタンの並びと意味は `docs/editor-interaction.md`。

## 参照されていない定義

次の定義は `web/pano_editor.css` にあるが、`web_src/` の Vue と JS のどこからも使われていない（grep で確かめた）。

- class：`.pano-floating-bottom`、`.pano-output-preview-toggle`、`.pano-aspect-row`、`.pano-inline-tools`、`.pano-cutout-aspect-inline`、
  `.pano-cutout-aspect-label`、`.pano-cutout-aspect-rotate`、`.pano-frame-aspect-trigger`、`.pano-paint-footer-note`、`.is-selected`。
- custom property：`--pano-accent-dark`、`--pano-accent-extra-dark`、`--pano-text-reversed`（定義だけで参照なし）。
  `--pano-text-primary` は逆に参照（`.pano-paint-size-value`）だけで定義が無く、fallback の `#fff` になる。
