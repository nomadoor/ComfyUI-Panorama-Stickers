# 見た目（デザインの値と共有のスタイル）

エディタのモーダルとノード上の表示（node surface）の見た目の値を定める：色と役割、文字、余白、角丸、
コントロールの高さ、影、動き、フォーカスと無効の見た目、重なり順、スクリム、共有の部品の class（`pano-*`）、
アイコン。「新しい UI の見た目」より前の節に書く値はすべて今の `web/pano_editor.css` と `web_src/` にある値で、見た目はダークのみ（ライトの表示は無い）。
新しい UI の値は下の「新しい UI の見た目」が持つ。

古い UI とノード上の表示のスタイルは一つの手書きの stylesheet `web/pano_editor.css` にあり、`web_src/pano_styles.js` の
`installPanoSuiteStylesheet` が `<link id="pano-suite-style-link">` として一度だけ読み込む。新しい UI のスタイルは別の手書きの
stylesheet `web/pano_studio.css` にあり、`web_src/studio/stylesheet.js` の `installStudioStylesheet` が
`<link id="pano-studio-style-link">` として、新しい UI のエディタを初めて開くときに一度だけ読み込む（どちらも `pano_styles.js` の `installStylesheet` を使う）。
Vue のコンポーネント（`web_src/components/*.vue`）は `<style>` を持たず、class と、位置・大きさ・色を渡す
inline の `style` と custom property（`--pano-segment-count`・`--pano-timeline-rows`・`--pano-video-shell-max`・`--v`・`--swatch` など）だけを使う。

この文書が持たない規則：どのボタンがどこに出て何をするか・ツールチップの文言・ボタンの位置を動かさない規則
（`docs/editor-interaction.md`）、タイムラインの行と再生の振る舞い（`docs/timeline-ui.md`）、Panorama Studio の
ノード上の表示の構成と bar の中身（`docs/studio-node-surface.md`）、旧ノードの toolbar の寸法と色と layout
（`docs/legacy-node-surfaces.md` の Layout Contract。`.pano-cutout-node-toolbar`・`.pano-stickers-node-toolbar` の値はそちらが owner）、どの UI を Vue のコンポーネントが持つか（`docs/vue-ui-boundary.md`）。

## この文書が owner である規則

| 規則 | Python | JS / CSS | test |
|---|---|---|---|
| デザインの値の custom property（`--pano-*`。ノード上の表示だけの値の `--pano-node-*` を含む）とその値。一つの名前は一つの値を持ち、どこでも定義し直さない | — | `web/pano_editor.css` の `:root` | — |
| ノード上の表示の枠（`.pano-node-frame`） | — | `web/pano_editor.css` の `.pano-node-frame`、`web_src/pano_preview_runtime.js` の `attachPanoramaPreviewImpl` と `web_src/pano_preview_previewnode.js` の `attachDom`（class を付ける） | — |
| stylesheet の読み込み | — | `web_src/pano_styles.js` `installStylesheet`・`installPanoSuiteStylesheet`、新しい UI は `web_src/studio/stylesheet.js` `installStudioStylesheet` | — |
| 共有のボタン（`.pano-btn` 系）の大きさと状態の見た目 | — | `web/pano_editor.css` の `.pano-btn`・`.pano-btn-icon`・`.pano-btn-texticon`・`.pano-btn-primary`・`.pano-btn.subtle`、`web_src/components/shared/PanoIconButton.vue` | — |
| 共有の部品（モーダル、HUD、切り替え、サイドパネル、値の行、選択肢、ツールチップ、確認のダイアログ、ペイント）の値と、部品の中だけの custom property（`.pano-segments` の `--pano-segment-pad: 3px`、`.pano-modal` の `--pano-side-w: 300px`） | — | `web/pano_editor.css` | — |
| 状態の class に ComfyUI の Tailwind の utility 名を使わない | — | `web_src/components/*.vue` | `tests/pano_css_class_safety.test.mjs` |
| アイコン（Tabler の線画、線の太さ、大きさ） | — | `web_src/icons.js` `ICON`・`ICON_PATHS`、`web_src/components/shared/SvgIcon.vue`、`web/pano_editor.css` の `.icon-tabler`・`.pano-btn-icon svg` | — |
| 重なり順（`z-index`）とスクリム | — | `web/pano_editor.css`、`web_src/components/PanoPaintOverlays.vue`（ペイントのカーソル） | — |

## 色

### custom property（`:root` で定義）

デザインの値の `--pano-*` は `web/pano_editor.css` の `:root` で一度だけ定義し、モーダルとノード上の表示の両方に届く。部品の中だけで使う custom property（`.pano-modal` の `--pano-side-w`、`.pano-segments` の `--pano-segment-pad`、コンポーネントが inline で渡す `--pano-segment-count` など）は、その部品が定義する。

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
| `--pano-divider` | `rgba(255,255,255,0.08)` | `.pano-divider`、`.pano-side-footer` の上の線、色のポップオーバー・SV の面・hue の帯の内側の線、ノードの注記の枠 |
| `--pano-accent` | `var(--pano-theme-accent, #0070f3)` | フォーカスの輪、スライダーの塗り、チェックボックス、タイムラインの再生位置・clip・上書きの印、Easing の曲線 |
| `--pano-emphasis-bg` | `#185fb8` | 強調のボタン（`.pano-btn-primary`、左のツール群の accent のボタン、ノードの Full Editor と Open） |
| `--pano-emphasis-bg-hover` | `#2672d2` | 強調のボタンの hover（`.pano-btn-primary` は `:focus-visible` も） |
| `--pano-emphasis-bg-active` | `#114f9d` | 強調のボタンの `:active` |
| `--pano-emphasis-text` | `#ffffff` | 強調のボタンの文字 |
| `--pano-float-bg` | `rgba(10,10,10,0.88)` | ステージの上に浮く群（HUD）の地 |
| `--pano-popover-bg` | `rgba(10,10,10,0.92)` | HUD の上のポップオーバー（音量、aspect）の地 |
| `--pano-keyframe` | `#f5b544` | Keyframe のある鍵のボタン、選んだ Keyframe の印、Easing の腕と handle |
| `--pano-frame-yellow` | `rgb(255,221,87)` | Frame のツール群（`.pano-frame-rail`）の地の混色、roll の knob の armed |
| `--pano-frame-yellow-edge` | `rgba(255,221,87,0.62)` | Frame のツール群の内側の 2px の線 |

`--pano-theme-accent` はこのリポジトリのどこでも設定しておらず、既定の値が使われる。

### ノード上の表示の値（`--pano-node-*`）

ノード上の表示がモーダルと違う値を使うところは、別の名前の token を使う。surface の root は token を定義し直さない。

| property | 値 | 使われ方 |
|---|---|---|
| `--pano-node-text-secondary` | `#a1a1aa` | `PanoramaCutout` の help のポップオーバーの文字、Studio の bar の注記（`.pano-studio-node-note`） |
| `--pano-node-text-tertiary` | `#71717a` | `PanoramaCutout` の aspect の trigger の caret |
| `--pano-node-float-bg` | `rgba(10,10,10,0.82)` | `PanoramaCutout` の toolbar の aspect のポップオーバーの地 |
| `--pano-node-float-radius` | `8px` | `PanoramaCutout` の aspect のポップオーバー、`PanoramaStickers`・`PanoramaCutout` の help のポップオーバーの角丸 |
| `--pano-node-frame-bg` | `#070707` | ノード上の表示の枠の地、`PanoramaPreview` の fullscreen の地 |
| `--pano-node-frame-border` | `rgba(63,63,70,1)` | ノード上の表示の枠の線 |

`PanoramaStickers` の help のポップオーバーの文字はモーダルと同じ `--pano-text-secondary`（`#787878`）。

ノード上の表示の枠（`.pano-node-frame`。`attachPanoramaPreviewImpl` の wrap と `PanoramaPreview` の root に JS が付ける）は
角丸 `--pano-radius-md`（8px）、`1px solid var(--pano-node-frame-border)`、地 `--pano-node-frame-bg`。位置と `overflow` は inline の style。
ノードの小さいボタン（`.pano-preview-node-fullscreen`・`.pano-stickers-node-play`）は 26×26、角丸 6px、地 `rgba(27,30,37,0.9)`、
文字 `rgba(255,255,255,0.72)`、hover と `:focus-visible` で `rgba(37,41,50,0.96)` と `rgba(255,255,255,0.96)`。
ノードの注記（`.pano-*-node-empty-note`）は角丸 999px、`1px solid var(--pano-divider)`、地 `rgba(10,10,10,0.85)`、10px / 550。
旧ノードの toolbar（`.pano-stickers-node-toolbar`・`.pano-cutout-node-toolbar`）、help（`.pano-*-node-help*`）、注記、
小さいボタンは、同じ宣言を一つの rule に selector を並べて共有し、違う宣言（toolbar の列、help の幅と文字の色、ボタンの位置）だけを別の rule に持つ。

### custom property を使わない色

直に色を書く箇所は多く、次の表は主なものの例で、全部ではない（ペイントの色の部品、動画の操作、Camera の出力のプレビュー、旧ノードの toolbar などにも直の値がある）。

| 値 | 使われ方 |
|---|---|
| `#d0d0d0` | `.pano-section-title` |
| `#b0b0b0` | 確認のダイアログの本文 |
| `#111` | 確認のダイアログの地、Keyframe の集まりの文字、Easing の handle の線 |
| `rgba(255,255,255,0.08)`（`--pano-divider` と同じ値） | 色のポップオーバーの虹色の点の輪（`radial-gradient` の色の区切り） |
| `#d4d4d8` | Keyframe の印 |
| `rgba(251,191,36,0.5)`・`rgba(24,18,8,0.9)`・`#fde68a` | ステージの読み込みの失敗（枠・地・文字） |
| `rgba(10,10,10,0.58)` | ドロップの案内（`.pano-stage-drop-hint-text`）の地 |
| `rgba(255,255,255,0.84)` | 動画の時刻（`.pano-video-time`） |
| `rgba(0,112,243,0.88)`・`rgba(0,32,72,0.58)` | `PanoramaStickers` の drop の案内（`.pano-stickers-node-drop-cue`）の破線と地 |
| `rgba(10,10,10,0.72)` | Studio の bar の状態（`.pano-studio-node-status`）の地 |
| `rgba(236,236,242,0.92)` | `.pano-view-unavailable` の文字 |

## 文字

- 書体：三つの token があり、書体の並びが違う（computed の値を変えないため一つにまとめていない）。

  | property | 値 | 使われ方 |
  |---|---|---|
  | `--pano-font-family` | `"Plus Jakarta Sans", "Geist", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, sans-serif` | `.pano-modal` |
  | `--pano-node-font-family` | `"Plus Jakarta Sans", Geist, system-ui, sans-serif` | ノード上の表示の root（`font: 500 11px/1 var(--pano-node-font-family)`） |
  | `--pano-font-family-compact` | `"Plus Jakarta Sans", Geist, sans-serif` | `.pano-view-unavailable`（`600 13px`）、`attachPanoramaPreviewImpl` の「Connect ERP image」の inline の style（`600 15px`） |

  canvas に描く文字（`ctx.font`）は CSS の custom property を使えないので、各 JS が書体を直に持つ。
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

角丸の custom property は `--pano-radius-xs`（4px）・`--pano-radius-md`（8px）・`--pano-radius-lg`（12px）・`--pano-float-radius`（10px）・
`--pano-node-float-radius`（8px）で、他は各 class が値を持つ。余白の token を角丸に使わない。

| 値 | 使われ方 |
|---|---|
| 4px | `.pano-aspect-choice`（`--pano-radius-xs`）、タイムラインの小さいボタンと clip |
| 6px | HUD の中のアイコンのボタン・roll の knob・`.pano-segments`（`calc(var(--pano-float-radius) - var(--pano-float-pad))`）、Studio の bar、ノードの小さいボタン、`.pano-segment` の印と Easing の項目（`calc(var(--pano-radius-md) - 2px)`） |
| 8px | `.pano-btn`・入力・選択肢の trigger と項目・ツールチップ・設定・`.pano-segment`・タイムラインの本体（`--pano-radius-md`）、表示の切り替えの印、ステージの読み込みの失敗、ノード上の表示の枠（`--pano-radius-md`）、`PanoramaCutout` の aspect のポップオーバーとノードの help（`--pano-node-float-radius`） |
| 10px | HUD（`--pano-float-radius`）、ステージ、サイドパネル、確認のダイアログ、ドロップの案内、aspect のポップオーバー、色の SV の面 |
| 12px | モーダル本体、選択肢のポップオーバー（`--pano-radius-lg`）、音量のポップオーバー |
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

ぼかし（`backdrop-filter`・`filter: blur`）は使わない。後ろの絵（エディタのステージ、裏の ComfyUI のグラフ）は毎フレーム変わるので、
その上のぼかしは毎フレーム計算し直しになり、GPU の合成が詰まる（2026-10-18、実機の記録で確認）。重ねる部品は、ぼかしの代わりに
不透明に近い地で読みやすくする。

### モーダル

- スクリム（`.pano-modal-overlay`）：`rgba(0,0,0,0.7)`、`z-index: 99999`。
- 本体（`.pano-modal`）：幅 `max(720px, 80vw)`、高さ `max(520px, 82vh)`、最大 `96vw` × `94vh`。地 `--pano-bg-panel`、枠なし、
  角丸 12px、影 `0 28px 80px rgba(0,0,0,0.66)`、padding と gap は `--pano-space-lg`、`overflow: hidden`。
  格子は `minmax(0,1fr)` と `var(--pano-side-w)`（300px）の 2 列。左の列（`.pano-stage-column`）はステージとタイムラインを
  `--pano-space-md` の間隔で縦に並べる。
- fullscreen（`.pano-modal-fullscreen`）：100vw × 100vh、角丸・padding・gap は 0、格子は 1 列、ステージの角丸は 0。
  サイドパネル、左上の群、右下の群、Camera の出力のプレビュー、選択メニュー、ツールチップを `display: none` にする。
- ステージ（`.pano-stage`）：地 `--pano-bg-base`、枠なし、角丸 10px。ファイルを持ち込む間は `brightness(0.76)`。
  読み込み中は地の上を明るい帯が 1.6s で流れる。

### HUD（ステージの上に浮く群）

地 `--pano-float-bg`、枠なし、角丸 `--pano-float-radius`、padding `--pano-float-pad`。

| class | 位置 | gap | 影 | z-index |
|---|---|---|---|---|
| `.pano-floating-top`（中の `.pano-view-toggle`） | 左上 | `--pano-float-gap` | `--pano-float-shadow`（切り替え） | 2 |
| `.pano-floating-left` | 左の縦の中央 | 4px | `--pano-float-shadow` | 4 |
| `.pano-frame-rail` | 右の縦の中央 | 4px | 内側の 2px の `--pano-frame-yellow-edge` の線と `--pano-float-shadow` | 4 |
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

文字は選ばれていない側が `--pano-muted`、選ばれている側が `--pano-text`。
`.pano-view-toggle` と `.pano-segments` の選ばれていない側の hover は `--pano-muted-strong`、表示の切り替えの無効の項目は
`--pano-text-tertiary` と opacity 0.5。

### ボタン（`.pano-btn`）

| 状態 | 見た目 |
|---|---|
| 既定 | 地 `--pano-bg-control`、文字 `--pano-text-secondary`、枠なし、角丸 `--pano-radius-md`、高さ 40px、左右の padding `--pano-space-lg`、12px / 500 |
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
- `.pano-divider`：高さ 1px、`--pano-divider`、左右に `--pano-space-lg` はみ出してパネルの幅いっぱい。
- `.pano-inspector`：gap `--pano-space-sm`、上下の padding `--pano-space-lg`。
- `.pano-section-title`：11px / 600 / `#d0d0d0`、字間 0.01em、margin `2px 0 8px`。meta は 11px / 500 / `--pano-text-tertiary`。
- `.pano-side-footer`：右寄せ、gap `--pano-space-md`、padding `--pano-space-lg 0 --pano-space-xl`、上に `1px solid var(--pano-divider)`。
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
  （ペイントの太さの thumb は 19px の中に半径 5.5px の accent の点）。三つのスライダーは同じ宣言を selector を並べた rule で共有する。

### 選択肢（`.pano-picker`）

- trigger：地 `--pano-bg-control`、文字 `--pano-text`、角丸 8px、高さ 30px、11px / 500。hover の見た目は無い。無効は opacity 0.62。
- ポップオーバー（`.pano-picker-pop`）：地 `--pano-surface-1`、枠なし、角丸 12px、影 `0 18px 54px rgba(0,0,0,0.5)`、padding 6px、最大の高さ 240px、`z-index: 6`。
- 項目：高さ 32px、文字 `--pano-muted`、11px / 500、アイコン 14px。hover は地 `--pano-surface-2` と文字 `--pano-text`、`.active` は地 `--pano-surface-3` と文字 `--pano-text`。

### ツールチップ（`.pano-tooltip`）

地 `color-mix(in srgb, var(--pano-surface-1) 92%, black)`、文字 `--pano-text`、11px、padding `6px 8px`、角丸 8px、
影 `0 8px 24px rgba(0,0,0,0.34)`、`z-index: 8`、出入りは opacity 160ms。左右のツール群の版（`.pano-tooltip-tool-rail`・`-frame-rail`）は
padding `7px 10px`、地 94%、影 `0 12px 28px rgba(0,0,0,0.34)`。footer の版（`.pano-tooltip-footer`）は地も影も無く 10px / `--pano-text-secondary`。

### 確認のダイアログ（`.pano-canvas-confirm`）

ステージの上に `rgba(0,0,0,0.5)` を敷く（`z-index: 5`）。カードは幅 `min(340px, calc(100% - 32px))`、地 `#111`、
角丸 10px、padding 14px、影 `0 16px 44px rgba(0,0,0,0.45)`、gap 10px。見出しは 13px / 600、本文は 12px / `#b0b0b0`、ボタンは右寄せで gap 8px。

### ペイント

- 色の float（`.pano-paint-color-float`）：角丸 999px、地 `rgba(18,20,26,0.88)`、影 `--pano-float-shadow`。
  色の点は 20px、選ばれた点は内側に 2.5px の輪。無効は opacity 0.42 と `saturate(0.55)`。
- 色のポップオーバー（`.pano-paint-color-pop`）：最小の幅 220px、padding 12px、角丸 14px、地 `rgba(20,20,23,0.98)`、
  影 `0 16px 40px rgba(0,0,0,0.42), inset 0 0 0 1px var(--pano-divider)`、`z-index: 6`。
- 太さの行は左右に `1px solid rgba(255,255,255,0.12)`、無効は opacity 0.45。

### HUD の上のポップオーバー

音量（`.pano-video-volume-pop`、角丸 12px）と aspect（`.pano-aspect-popover`、角丸 10px）は地 `--pano-popover-bg`、
影 `0 14px 38px rgba(0,0,0,0.42)`。Frame の aspect（`.pano-frame-aspect-popover`）は HUD の地と影。

## 影

| 値 | 使われ方 |
|---|---|
| `0 28px 80px rgba(0,0,0,0.66)` | モーダル本体 |
| `0 18px 54px rgba(0,0,0,0.5)` | 選択肢のポップオーバー |
| `0 16px 44px rgba(0,0,0,0.45)` | 確認のダイアログ |
| `0 16px 40px rgba(0,0,0,0.42), inset 0 0 0 1px var(--pano-divider)` | 色のポップオーバー |
| `0 14px 40px rgba(0,0,0,0.34)` | 動画の操作 |
| `0 14px 38px rgba(0,0,0,0.42)` | 音量と aspect のポップオーバー |
| `0 12px 30px rgba(0,0,0,0.32)` | ドロップの案内 |
| `0 12px 28px rgba(0,0,0,0.34)` | ツール群のツールチップ |
| `--pano-float-shadow`（`0 8px 30px rgba(0,0,0,0.35)`） | 表示の切り替え、左のツール群、Frame のツール群、Frame の aspect、色の float |
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
  ノード上の表示のボタンにも輪を出さない（toolbar のボタンは `box-shadow: none`、小さいボタンと Studio の Open Editor は `:focus-visible` で `box-shadow: none`）。
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

- Tabler の outline のアイコンを `web_src/icons.js` が持つ（`ICON` の名前 68 個と、Tabler の名前と SVG の中身を持つ `ICON_PATHS`）。
  `SvgIcon.vue` が `viewBox="0 0 24 24"`、`fill="none"`、`stroke="currentColor"`、`stroke-linecap` と `stroke-linejoin` は `round`、
  class `icon icon-tabler icons-tabler-outline` で描く。
- 線の太さ：`.pano-modal` の中の Tabler のアイコンと、`.pano-btn-icon`・`.pano-btn-texticon` の中の SVG は `var(--pano-icon-stroke, 2.3)`
  （`--pano-icon-stroke` はどこでも設定しておらず 2.3）。タイムラインのアイコンは 1.75、ノードの小さいボタンは 2.3px。
- 大きさ：ツールバーと HUD のボタン 18px、サイドパネルの見出し・選択肢・タイムライン・ノードの文字つきボタン 14px、
  ノードの小さいボタン 16px、aspect の trigger 15px。
- どのボタンにどのアイコンを使うかは `web_src/modal_shell_presets.js` と各コンポーネントが持ち、ボタンの並びと意味は `docs/editor-interaction.md`。


## 新しい UI の見た目

新しい UI の層（ADR 0044。Panorama Studio のエディタと新しい Preview のウィンドウ、画面の規則は `docs/studio-ui.md`）の見た目の値を定める。
旧ノード（`PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`（legacy））のエディタとノード上の表示は、この文書の上の節の値のまま
変えない（ADR 0044 の「旧ノードの UI」）。新しい UI の値は、上の節の `--pano-*` を書き換えず、新しい UI の部品の中だけで使う名前で持つ
（置き場所は新しい UI の stylesheet `web/pano_studio.css` の `.pano-studio` が持つ `--studio-*`。新しい UI の部品はすべて `.pano-studio` の中に置く。
stylesheet の読み込みは上の「この文書が owner である規則」の表）。値はどれも、`design-drafts` の見本でオーナーが選んだものである。

### 色

- 地・文字・線の色は、`design-drafts` の見本（`specimen-11.html`・`timeline-2.html`・`frame-4.html`）の値をそのまま持つ。ComfyUI の
  フロントエンドの役割の色（`--interface-stroke` など）には乗せない（ComfyUI のダークの線は明るく、窓と浮かせる部品の縁が目立ったため。
  持ち主の決定、2026-10-30）。ライトとダークは ComfyUI のテーマ（`<html>` の `.dark-theme`）で切り替える。値の置き場所は一か所
  （`web/pano_studio.css` の `.pano-studio` と `.dark-theme .pano-studio`）。
- 灰の段は Geist の色の段の役目に倣う：部品の地 / hover / 押したとき / 線 / 線の hover / 強い塗り / 二次の文字 / 主の文字。
  選ばれている状態は、色ではなく灰の強い塗りで示す。

  | 役目 | ダーク | ライト |
  |---|---|---|
  | 枠の地（エディタ全体を包む地） | `#121314` | `#f6f6f7` |
  | 窓の地（ステージの窓の外の 2 つの窓、浮かせる部品の地の元） | `#1b1c1e` | `#ffffff` |
  | 値の箱の地（部品の地） | `#2c2c2e` | `#f1f1f2` |
  | hover | `#343436` | `#e9e9eb` |
  | 押したとき | `#3c3c3f` | `#e0e0e3` |
  | 線（タイムラインの行の間だけ） | `#2a2b2d` | `#e2e2e5` |
  | 強い線（スライダーの線、目盛り、空の Keyframe のポチ） | `#48484c` | `#cfcfd4` |
  | 強い塗り（選ばれている部品） | `#d6d6da` | `#1b1b1d` |
  | 強い塗りの上の文字 | `#111112` | `#ffffff` |
  | 二次の文字 | `#8e8f93` | `#6b6b72` |
  | 主の文字 | `#dcdce0` | `#161618` |

- 色は意味のある一点にだけ使う。このノードの意味の色（ライトでは暗めの値を持つ）：

  | 色 | ダークの値 | ライトの値（仮。下の「まだ決めていないこと」） | 使う所 |
  |---|---|---|---|
  | 珊瑚 | `#f37159` | `#d9573f` | 再生位置、一行の知らせの丸（できなかった・止まった）、ギズモの X 軸 |
  | 氷 | `#aecedb` | `#5f8fa3` | Keyframe のポチ（インスペクタ・Camera タブ・タイムライン）、範囲選択、ギズモの Z 軸と XY の平面の四角、Sky の行き先（ドロップの Sky の印とラベル、選んでいる空の画像の枠とハンドル） |
  | ライム | `#d6e797` | `#7f9a3a` | ギズモの Y 軸 |
  | 落ち着いた黄 | `#e8cf74` | `#a8861f` | 選んでいる World の物のガイド、選んでいる Camera の線、World の行き先（ドロップの World の印とラベル）、一行の知らせの丸（気をつけてほしい） |

  Sky と World の行き先は、ドロップの印・ラベル・選んだときの枠で同じ色にそろえ、色で着く先を覚えられるようにする（Sky は氷、World は
  落ち着いた黄。持ち主の決定、2026-10-30。それまでは Sky も黄で、Sky と World の印が見分けられなかった）。ステージの上に描く印と枠は
  テーマで変えず、ダークの値を使う。ラベルの縁とアイコンはテーマの値（`--studio-ice`・`--studio-yellow`）を使う。

  新しい意味が要るときは、同じトーンで色相を変えた色を足す。機能ごとに色を塗り分けることはしない。

### 形と重なり

- フラットにする。影は使わない。
- エディタはモーダル（旧エディタと同じ）。画面の真ん中に、幅 `max(720px, 80vw)`・高さ `max(520px, 82vh)`（どちらも最大で幅 `96vw`・
  高さ `94vh`）の枠を出し、その後ろの画面を黒の 70% で暗くする（旧エディタのスクリムと同じ）。全画面にはしない。
- 枠：全体を一枚の地（上の表の「枠の地」）で包み、角丸 `16px`、内側の余白 `8px`。
- 窓：枠の上に 3 つの窓を `8px` の間で浮かせる。ステージの窓（左上）、インスペクタの窓（右の列。幅 320px、上から下まで）、タイムラインの
  窓（ステージの窓の下だけ）。角丸 `12px`。窓に縁の線を付けない。窓どうしと枠は、地の色の段の差だけで分ける（窓の地と枠の地）。
  ステージとタイムラインの間の `8px` の間は、タイムラインの高さを変えるドラッグの場所を兼ね、真ん中に 36×3px の握り（強い線の色、
  角丸 2px）を出す。
- インスペクタの中のセクション（カード）は線で区切らず、間の余白で分ける（カードの余白は上 `12px`・左右 `14px`・下 `8px`、次のカードは上の余白を `20px` にする）。上端の行
  （ノードの名前と ✕）の下にも線を引かない。
- ステージの上に浮かせる部品（タブ、左の列、視点の操作のつまみの列と「?」、右下のボタンの群、Output の小窓、下の中央のバーの席、
  上端の中央の一行）は、ステージの窓の端から `16px` に置く。地は窓の地の 85% の不透明、縁の線は付けない。その上の文字とアイコンには
  二次の灰を使わず、主の文字の色にする（地が透けると二次の灰との差が縮み、アイコンまで透けて見えるため）。背景のぼかし
  （`backdrop-filter`）は使わない（上の節の決定と同じ理由）。
- 角丸：部品（ボタン、アイコンのボタン、切り替え、浮かせる群）は完全に丸く（`999px`、アイコンのボタンは正円）、入れ物（窓、
  ダイアログ、Output の小窓）は `12px`、値の箱と入力欄は `6px`、枠は `16px`。
- Camera タブの枠の外は、同じ絵に黒（`rgb(8 8 9)`）を 90% 重ねて暗くし、枠の境目に明るい 1px の線。枠の外の上の文字と目盛りは白を透かした色にする。

### フォーカス

- キーボードで移ったフォーカス（`:focus-visible`）は、縁の線（outline や枠）で示さない。hover と同じ地（上の表の「hover」）と主の文字の
  色にする。ボタン・欄・切り替え・辺の目盛り・タイムラインの部品で同じ規則を使い、規則は一か所（`web/pano_studio.css` の `.pano-studio` の
  `:focus-visible` の規則）に置く。選ばれている部品（強い塗り）と無効の部品は、フォーカスがあっても地を変えない。
- Camera タブの枠の外の上（辺の目盛り）では、同じ規則の地を白 10%、文字とアイコンを白に替える（暗くした絵の上では hover の灰が浮き、
  ライトの主の文字の色が沈むため）。
- スクリプトでフォーカスを受けるだけの入れ物（`tabindex="-1"`。タイムラインの窓など）は、地を変えない。
- ポインタで押した後は、フォーカスの見た目を出さない。エディタは、ポインタを押すと「ポインタの操作中」、Tab・矢印・Home・End・PageUp・
  PageDown・Enter・Space のキーを押すと「キーボードの操作中」と覚え（`web_src/studio/input_modality.js`）、ポインタの操作中は
  `:focus-visible` でも地を変えない。ファイルを選ぶ窓やダイアログから戻った直後に出ないようにするためである（Chromium は、戻ったときの
  フォーカスを `:focus-visible` とみなす）。ほかのキー（Ctrl+Z など）は、どちらの操作中かを変えない。

### 文字

- 書体は Plus Jakarta Sans。このノードが自分で読み込む（SIL OFL 1.1、本文は `web/fonts/OFL.txt`）。ファイルは
  `web/fonts/PlusJakartaSans-Latin.woff2`（27,348 bytes）：Google Fonts がラテン文字の範囲に配る可変フォント一つで、500・600・700 の
  太さをまかなう。`web/pano_studio.css` の `@font-face` が読み込み、範囲の外の文字は次の書体で出す。
- 大きさは 4 段：11px（注記、タイムライン）、12px（欄の名前、ボタン、本文）、13px（セクションの見出し、値の数字）、15px（ダイアログの見出し）。
- 太さは 500（本文）、600（見出し）、700（数字の強調だけ）。
- 数字は `font-variant-numeric: tabular-nums`。
- 大きさの違う文字を一行に並べるとき（値の数字・軸の文字・単位・行の名前）は、`text-box: trim-both cap alphabetic` で大文字の高さを
  上下の中央にそろえる。`text-box` を持たないブラウザ（Firefox など。実装のときに対応を確かめる）では、`line-height: 1` と、数字の
  大きさに合わせた欄の高さで上下の中央に寄せる。
- 値の箱の中は左にそろえる（軸の文字・値・単位の順。規則は `docs/studio-ui.md` の「欄」）。見本 `specimen-11.html` の右そろえは
  持ち主の決定（2026-10-30）で改めた。
- `text-box` で上下を削った文字の箱には `overflow: hidden` を付けない（削った箱の外にはみ出す字形の上端が切れるため）。値の箱と欄は、
  高さ 26px・上下の余白 0 で、中の文字を flex で上下の中央に置く。文字が上下で切れる所を作らない。

### 大きさ

| 対象 | 値 |
|---|---|
| インスペクタの幅 | 320px |
| インスペクタの行の格子 | 名前 62px ／ 1・2・3 は等分 ／ Keyframe のポチ 16px ／ リセット 22px、列の間 4px |
| 行の間 | 8px |
| 値の箱の高さ | 26px（ふだん地なし、hover で値の箱の地） |
| Keyframe のポチ | 6px の菱形、線 1.25px（無し：二次の灰の線、キーあり：氷の線、今のフレーム：氷の塗り） |
| タイムラインの Keyframe のポチの当たり | 幅 18px・高さは行の高さいっぱい（28px）の透明な当たり。見える菱形（9px）はその真ん中。Clip range のバーより上に置く（`docs/timeline-ui.md` の「Clip range のバー（新しい UI）」） |
| スライダー | 2px の線と 12px の丸のつまみ |
| Camera のカードの撮り方の札 | 2 枚を横に等分、間 6px、見出しとの間 8px、下の行との間 12px。札は高さ 68px（上の余白 10px・絵 64×32px・間 6px・名前 12px・下の余白 8px）、角丸 8px、縁の線なし。選んでいない札は地なし・二次の文字、hover で値の箱の地（`#2c2c2e`）と主の文字、選んでいる札は押したときの地（`#3c3c3f`）と主の文字。絵の線は 1.5px、格子と十字の細い線は 1px・不透明度 0.6（見本 `mode-3.html` の M1） |
| 左上のタブ | 3D・Camera を同じ幅 108px・高さ 34px（Camera のアイコン 18px・間 6px・文字 13px の左右に約 16px） |
| 一行の知らせの印 | 丸は 7px。読み込み中の輪は 10px、線 1.5px（線の 1/4 を主の文字の色、残りを強い線の色） |
| 下の中央のバーの名前の欄 | 140px（どの名前、どの種類でも同じ。12px・600 の文字でおよそ 20 字）。収まらない名前は末尾を「…」で切る（`web/pano_studio.css` の `--studio-bar-name-width`、使うのは `.pano-studio-bar-name`） |
| 左の列・視点の操作のつまみ・右下のボタン | 34px の正円、アイコン 18px（Add のアイコンだけ 22px）。見本 `controls-2.html` の R1 |
| Easing のグラフ | 縦横 1:1（インスペクタの幅いっぱい）。上の領域が `EASING_MIN_ABOVE` より狭くなるときは、一辺を縮めて 1:1 のまま小さくする |
| `EASING_MIN_ABOVE` | 180px（行 5 つ分）。Easing のパネルを出している間に、上の領域に残す最小の高さ |
| Camera タブのフレームの余白 | 左右 150px、上 88px、下 84px。上は、左上のタブ（ステージの窓の端から 16px、群の高さ 42px で下端が 58px）の下に 30px の空きを取る。左右は、辺の目盛りの数字が左の列と右の視点のつまみに隠れない幅から求める：浮かせる部品の端の余白 16px ＋ 左の列（右のつまみ）の幅 46px ＋ 間 12px ＋ 辺の目盛りの数字を含めた幅（Lens で 61px。FOV は 51px で、左右とも大きい方を使う）＋ 目盛りとフレームの間 14px ＝ 149px を、切りのよい 150px にする。左の列・つまみ・目盛りの幅を変えたら、この値を求め直す |
| Camera タブの辺の目盛りの置き場所 | フレームとの間：FOV・Lens 14px、Roll 12px。目盛りの線の帯の決まった長さ：FOV・Lens 200px、Roll 320px。フレームの辺がそれより短いときは、Roll はフレームの幅、FOV・Lens はフレームの高さから頭の分 46px を上下とも除いた長さに縮める。46px は上下の頭の大きい方：上の頭 38px（名前と値 30px 以内 ＋ 間 8px）と下の頭 46px（ポチとリセット 42px ＋ 間 4px）。1440×860 の画面では、16:9 の FOV・Lens が 194px に縮み、1:1・9:16 は 200px、Roll は 16:9・1:1 で 320px、9:16 で 187px |
| Camera タブの辺の目盛りの頭 | 名前と値を帯の一方の端に、Keyframe のポチとリセットを反対の端に置く。FOV・Lens：帯の上 8px に、名前の行と値の行を間 6px で縦に積む（名前が上。12px の文字で、二行の高さは 30px 以内）。帯の下 4px に、ポチ（幅 22px・高さ 18px の当たり）とリセット（22px 角）を間 2px で縦に積む（ポチが上。高さ 42px）。ポチの印の見える端は帯から約 8px。Roll：帯の左 10px に名前と値を間 8px で横に並べ、帯の右 8px にポチ（幅 12px・高さ 22px の当たり）とリセット（22px 角）を間 2px で横に並べる（ポチの印の見える端は帯から約 10px）。値の文字（12px・太さ 600）の幅は数字で FOV 4 字・Lens 4 字・Roll 5 字（`ch`）、FOV・Lens は真ん中、Roll は左にそろえる |
| Camera タブの辺の目盛りの当たり | 目盛りの線の帯（22px）の両側に 12px ずつ透明な当たりを足し、太さ 46px（Roll は上下、FOV・Lens は左右）。フレームの中には入らない（フレームとの間は 12px 以上） |
| Camera タブの辺の目盛りのキーボードのフォーカス | 上の「フォーカス」の規則で、帯（角丸 6px）の地を白 10% にする |
| Camera タブの辺の目盛りの縮尺 | 仮：小さい目盛り 8px ごと、数値 80px ごと（FOV 2° と 20°、Lens 0.02 と 0.2、Roll 1° と 10°）。目盛りは幅 22px、数値は 11px |
| Camera タブの Output の小窓 | 畳んだ形を不透明度 0.4 で出し、hover でも変えない |
| カメラの見た目 | 見本 `camera-1.html`。面は白 10% の塗り（面ごとに重ねる）。線は白 85% の 1.5px の下に黒 30% の 3.5px。奥に隠れる辺は白 35% の 1.5px と黒 12% の 3.5px。上の向きの三角は白 35% の塗り。錐の頂点と球の中心に半径 3px の白い点。選択は線を落ち着いた黄 `#e8cf74` の 2px（下の黒は同じ）、面を同じ黄の 18%（`web_src/studio/camera_marker.js` `MARKER_LOOKS`） |
| ドロップの印 | 見本 `drop-3.html`。行き先の色（World は落ち着いた黄 `#e8cf74`、Sky は氷 `#aecedb`）の角のかぎ括弧（2.5px、端と角は丸）と、同じ色の 25% の塗り。かぎ括弧の下に黒 28% の 4.5px の線。かぎ括弧の長さは、画像の板と Sky の枠では辺の 20%（Sky の枠は曲がった辺に沿って測る）、3D ファイルの仮の箱では辺の 25%（`docs/space-and-view.md`）。箱は見える面を塗る（`web_src/studio/landing.js` `DROP_LOOK`） |
| ドロップのラベル | 見本 `drop-3.html`。高さ 26px の丸い札、左右の余白 8px と 10px、アイコン 15px（行き先の色）と文字 12px・600 の間 6px。地は窓の地の 92%、縁は行き先の色の 1px。印の外接の矩形から `DROP_LABEL_GAP` 12px 離し、ステージの端から `DROP_LABEL_MARGIN` 8px の内に置く（置き方は `docs/space-and-view.md` の「ドラッグ中の印」、`web_src/studio/landing.js` `DROP_LOOK`） |
| Add の二択 | ステージの窓の全体に黒 55% の幕（窓の角丸に合わせる）。その中央に札を二枚横に並べ、間 16px。札は 180×150px、角丸 12px、縁の線なし、地は窓の地（不透明。後ろの絵が透けると札の形が読みにくいため）。中は上の余白 22px・絵 96×56px・間 14px・名前 15px・600（主の文字）。絵の線は 1.75px、細い線（グリッド、球の緯線）は 1px・不透明度 0.6、色は行き先の色（Sky は氷 `--studio-ice`、World は落ち着いた黄 `--studio-yellow`）。ポインタの下とフォーカスの札は、行き先の色の 16% を地に重ねる。押したときは 24% |
| ショートカットの一覧 | 浮かせる部品の地（窓の地の 85%）、縁の線なし、角丸 12px（入れ物）、内側の余白 上 12px・左右 14px・下 12px。群を 2 列に流す（1 列の幅 248px、列の間 24px、群の間 16px）。幅はステージの窓の幅から左右の浮かせる部品の分を除いた幅を超えず、2 列が入らなければ 1 列。高さはステージの窓から上下 16px を除いた高さまでで、超えたら一覧の中だけスクロール。群の名前は 13px・600、行は 12px・500 の名前を左、キーを右寄せ、行の高さ 24px。キーの札は高さ 18px・最小の幅 18px・左右の余白 5px・角丸 5px、地は値の箱の地（`--studio-fill`）、文字 11px・600、札の間 3px、`+` は 11px。添える一行は 12px。開くと閉じるに動きは付けない |
| World の物のガイド | 平常は白 32% の 1px と黒 32%、ホバーは白 90% の 1.5px と黒 60%、選択は落ち着いた黄 `#e8cf74` の 1.5px と黒 70%。暗い線は明るい線より 2px 太い（`web_src/studio/world_guides.js` `GUIDE_LOOKS`） |
| 読み込み中のガイドの光の帯 | ガイドの見え方の上に、箱の画面の外接の矩形を左上から右下へ斜めに横切る白の帯。帯の幅は矩形の対角の 35%、真ん中が白 90%（線）と白 18%（見える面の塗り）で両側へ透明に。線は見え方の線より 1px 太い。帯は `LOAD_SHIMMER_MS` で一度横切り、繰り返す（`web_src/studio/load_reveal.js` `LOAD_LOOK`、描くのは `stage_overlay.js`） |
| ギズモ | 見本 `specimen-11.html`。X は珊瑚、Y はライム、Z は氷。ポインタの下とドラッグしている取っ手は、その軸の色を白へ 35% 寄せた色で、線 3.5px・玉の半径 6.5px・Scale の四角の一辺 11px（白にはしない）。届く長さ（中心から棒の先、輪の半径）52px、線 2.5px で端は丸。Move の玉は半径 5px、中心の白い点は半径 4px（Move の中心の点のドラッグ中は 5.5px）。Rotate の輪の奥の半分は 35% の不透明。Scale の先は一辺 9px・角丸 2px の四角。棒・玉・四角・輪・平面の四角の下に黒 40% の下敷き（線は取っ手の線より 2px 太く、玉と四角は 1px ずつ外へ広い）、中心の白い点には黒 40% の 1.5px の縁。視線とほぼ平行な軸を隠す `GIZMO_HIDE_RATIO` は 0.2。当たりの幅は玉・四角・中心の点が 9px、棒と輪が 6px。Move の平面の四角は、二つの軸の届く長さの `GIZMO_PLANE_FROM` 0.28 から `GIZMO_PLANE_TO` 0.52 まで（正面から見て一辺約 12.5px）。色はその面に垂直な軸の色（Blender にならう：XY は氷、YZ は珊瑚、XZ はライム）の 40% の塗りと、同じ色の 1px の縁（下に黒 40% の 3px の縁）。ポインタの下とドラッグしている四角は、その色を白へ 35% 寄せた色の 60% の塗りと同じ色の縁。当たりは写した四角の中。ドラッグ中の軸のガイドの線は、その軸の色の 1.5px・不透明度 80%・端は丸、2D の層でなめらかに描く（`web_src/studio/gizmo_overlay.js` `GIZMO_LOOK`・`GIZMO_COLORS`） |
| 地面のグリッドの軸 | X 軸はギズモの X と同じ珊瑚 `#f37159`、Z 軸は氷 `#aecedb`、どちらも不透明度 75%（Y 軸の線は描かない。`web_src/studio/grid.js` `GRID_COLORS`。古い UI のグリッドは変えない） |
| Sky の画像のハンドル | 枠は選択のガイドと同じ太さで色は氷 `#aecedb`（下に黒 70%）、四隅は半径 5px・辺の中点は 3.5px・回転は 6px の氷の丸に黒 70% の 1.5px の縁（`web_src/studio/world_guides.js` `GUIDE_LOOKS.skySelected`、描くのは `web_src/studio/stage_overlay.js`） |
| ツールチップ | 見本 `specimen-11.html` の `.tip`。地は強い塗り（`--studio-strong`）、文字は強い塗りの上の文字（`--studio-on-strong`）の 12px・500、行の高さ 16px、角丸 6px、余白 上下 4px・左右 8px、縁の線と影なし。文が 280px を超えるときだけ折り返す。ショートカットの印は 11px・600・不透明度 0.6、文との間 6px。部品との間 8px、エディタの枠の内側 8px より外に出さない（置き方の規則は `docs/studio-ui.md` の「ツールチップ」） |
| タイムラインのスクロールバー | 縦だけ。幅 6px、溝は透明、つまみは主の文字の色の 22%（hover で 40%）、角丸 3px。Firefox は `scrollbar-width: thin` と同じ色 |
| タイムラインの最小の高さ | 未定 |
| ステージの最小の高さ | 未定 |
| Output の小窓の最小と最大の大きさ | 未定 |
| スライダーを付ける値の上限（Scale のように上限の無い値のスライダーの範囲） | 未定 |

### 動き

| 値 | 使われ方 |
|---|---|
| `140ms`、opacity と 6px の translate、ease-out | Easing のパネルの出入り（高さは動かさない） |
| `120ms ease`、地の色と文字の色 | ボタン・行・欄の hover（入るときも出るときも）。押したとき（`:active`）は動きを付けず即座に変える |
| `160ms ease-out`、選んだ側の地（つまみ）の横の位置と、項目の文字の色 | 切り替え（segmented control）の選んだ側が変わるとき、つまみが左右に滑って移り、文字の色も同じ時間で変わる。すべての切り替えが共通の部品で同じ動き |
| `160ms ease-out`、大きさと opacity | Output の小窓の開く・畳む（中の絵は描き直さず、縮めて見せる） |
| `900ms linear` で 1 回転、繰り返し | 一行の知らせの読み込み中の輪 |
| `160ms ease-out`、opacity | Add の二択の幕と札が出るとき |
| `LOAD_SHIMMER_MS` 1400ms linear で一度横切る、繰り返し | 置いた 3D ファイルの読み込み中のガイドの光の帯 |
| `LOAD_REVEAL_MS` 250ms ease-out（二次） | 置いた 3D ファイルが描けたとき：光の帯が消え、中身の不透明度が 0 から上がる。一つの描画で進むのは `LOAD_REVEAL_STEP_MS` 40ms まで（描き始めのシェーダーの準備で描画が止まっても、現れる動きを飛ばさない） |
| `120ms ease-out`、opacity | ツールチップが出るとき（消えるときは動きを付けず即座に消す） |

ほかの動きの値は、部品を作るときにこの表へ足す。頻繁に使う操作には動きを付けない（hover と切り替えの短い動きは持ち主の決定、2026-10-30）。
OS で動きを減らす設定（`prefers-reduced-motion: reduce`）のときは、上の動きをすべて付けない（読み込み中の輪は回さずに出す。読み込み中の
ガイドは光の帯を流さずに描き、描けた中身はすぐに出す）。

### アイコン

- Tabler の outline のアイコン（`web_src/icons.js`）を使う。線の太さは 1.75（見本の値。まだ決めていないこと）。
- Sky の印は `view-360`、World の印は `box`。Add のアイコンは写真と立方体を重ね、立方体を手前にして重なる所の写真の線を切り取る
  （見本 `controls-2.html` の A4。写真は 0.78 倍で左上、立方体は見本より少し大きい 0.72 倍で右下）。左の列の Paint の印は `palette`、
  Camera の印は `camera-plus`（見本 `specimen-11.html`）。
- ループ（タイムラインのバー）とグリッド（ステージの右下）は、一つのアイコンのボタンで、今の状態をアイコンの形で示す（ループ
  `repeat` ／ `repeat-off`、グリッド `table` ／ `table-off`）。オンでも強い塗りにしない（`docs/agents/ux-principles.md` の例外）。
- 下の中央のバーの前面へ・背面へ（空に貼った画像）は、Tabler の線の形にならって描いた二つの角丸の四角（`web_src/icons.js`
  `order_front`・`order_back`。一辺 11・角丸 2 の四角を左上と右下に 4 だけ重ね、右下を動かす物にする）。前面へは右下を塗りの四角に
  して手前に描き、左上の線の四角は右下に隠れる所を間 3.5 を空けて切る。背面へは左上の線の四角を手前に描き、右下の塗りは左上の四角に
  隠れる所を同じ間で切った L の形にする。16〜18px で、塗りの四角が一つ見えるか L が見えるかで見分ける。古い UI の `stack-front`・
  `stack-back`（`bring_front`・`send_back`）は変えない。

### 描画のくっきりさ

- 地面のグリッドの線は、シェーダーの中で画面の 1 画素の幅（`fwidth`）を使ってなめらかに描く（線の端を 1 画素でぼかす）。線の幅は
  描く先の `STAGE_RENDER_SCALE` 画素（縮めて出したときに端末の 1 画素）、X と Z の軸はその 1.5 倍。
- 新しい UI のステージは、描く先を端末の画素の `STAGE_RENDER_SCALE`（1.5）倍の大きさで描き、ブラウザが縮めて出す（3D の物の縁の
  ぎざぎざを減らす）。一辺は WebGL の最大のテクスチャの大きさと 4096px の小さい方を超えない。古い UI の描画は変えない。

### まだ決めていないこと（spec ではない）

- 二次の文字の濃さ（主の文字を `#dcdce0` にしたのに合わせて見直す）。今はダーク `#8e8f93`・ライト `#6b6b72`（見本の値）。
- 地面のグリッドの線（軸の色を除く）の色・太さ・濃さ（`docs/space-and-view.md` の「地面のグリッド」が値をここに預けている）。
- アイコンの線の太さ（今は見本の 1.75）。
- ライトモードの意味の色（珊瑚・氷・ライム・落ち着いた黄・すみれ）の値。今の表のライトの値は仮：珊瑚・氷・ライムは見本の値、落ち着いた黄の
  `#a8861f` は実装のときに仮に選んだ値（見本に無い）。すみれは値が無い。見本で並べて決める。
