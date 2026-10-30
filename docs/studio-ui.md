# 新しい画面（Panorama Studio のエディタと Preview のウィンドウ）

新しい UI の層（ADR 0044）の、Panorama Studio のエディタと新しい Preview ノード（`PanoramaPreviewNode`）の大きなウィンドウについて、
画面に何がどこにあり、どう見えるかの規則を定める：目指すもの、画面の区画、インスペクタ、下の中央のバー、エディタの中の Camera の見せ方、
Camera タブ、Add とドロップの見せ方、読み込み中と空の画面、タイムラインのバー、ショートカットの一覧、閉じ方、Preview のウィンドウ。
画面に出す言葉は `CONTEXT.md` の「画面の言葉」に従う。決めた理由は ADR 0045（目的と視点）、ADR 0047（視点の操作と置き方）、
ADR 0048（撮る Camera・入口の役割・画面の組み直し）にある。

見た目の下書き（`design-drafts/*.html`。リポジトリには入れない）とこの文書が食い違うときは、この文書が正である。

新しい UI に切り替えるまで、Panorama Studio と Preview は古い UI で開き、その画面の規則は `docs/editor-interaction.md`・
`docs/preview-node.md`・`docs/vue-ui-boundary.md` が持つ（ADR 0044 の「置き換えの進め方」）。

この文書が持たない規則：視点の動かし方・注視点・カーソル・視点の操作のつまみの働き・地面のグリッド・World の物のガイド・
Add とドロップの着く所（`docs/space-and-view.md`）、Keyframe の記録・範囲選択・再生・タイムラインの行（`docs/timeline-ui.md`）、
撮る Camera と撮り方のモード・ノードの入力と出力の大きさ（`docs/studio-node.md`）、状態の形（`docs/scene-state-v2.md`）、
Panorama モードの ERP をブラウザで描く仕組み（`docs/threejs-spark-integration.md`）、色・文字・余白・角丸・動きの値（`docs/design.md` の
「新しい UI の見た目」）、Vue と JS の境界（`docs/vue-ui-boundary.md`）、押すたびに反転するボタンと隠す部品の例外（`docs/agents/ux-principles.md`）。

## この文書が owner である規則

Python はこの文書の規則を持たない（列は `—`）。「（新しい UI、未実装）」は ADR 0044 の置き場所（`web_src/studio/`、
`web_src/components/studio/`）に作る予定のもの、「（未作成）」は作る予定の test である。印の無いものは今ある。作ってあるが規則の
一部がまだ動かないものは、その部分を「未実装」と書く。

開発の間の入口：新しい UI は、ComfyUI の設定 `PanoramaSuite.Editor.NewUI`（既定はオフ）がオンのときだけ Panorama Studio を開く。
オフなら今までどおり古い UI で開く（`web_src/editor_choice.js` `NEW_UI_SETTING`。組み立ては `web_src/main.js`、新しい UI のエディタは
`web_src/studio/editor.js`）。切り替えの change でこの設定を消す（ADR 0044 の「置き換えの進め方」）。

| 規則 | Python | JS | test |
|---|---|---|---|
| 画面の区画（ステージ、タブ、左の列、右の中央の列、右下、右上、上端の中央、インスペクタ、タイムラインの領域と境界） | — | `web_src/components/studio/StudioEditor.vue`、大きさの規則は `web_src/studio/layout.js`（タイムラインの高さ、Output の小窓の大きさとその記憶）、開くのは `web_src/studio/editor.js` | `tests/studio_stage_view.test.mjs`（`layout.js`）、`tests/browser/studio_editor.spec.js` |
| 左の列の中身と並び、タブごとの無効 | — | `web_src/components/studio/StudioToolRail.vue`（今は Cursor・Add・Undo・Redo が働き、ほかは席に置いて無効。Undo・Redo は `web_src/studio/session.js` の履歴、Add は `web_src/studio/add_files.js`）。タブごとの無効は（未実装） | `tests/browser/studio_editor.spec.js`、（未作成）タブごとの無効の test |
| インスペクタの組み立て（タブと選択で何を出すか）、行の格子、欄、スライダー、リセット、Keyframe のポチの置き場所、Easing のパネル、種類ごとの中身 | — | データは `web_src/studio/inspector_model.js` `buildInspectorModel`、編集を状態に当てるのは `web_src/studio/inspector_actions.js` `applyInspectorEdit`、画面は `web_src/components/studio/StudioInspector.vue`・`StudioInspectorCard.vue`・`StudioInspectorRow.vue`・`StudioEasingPanel.vue`（欄とスライダーの部品は `StudioNumberField.vue`・`StudioSlider.vue`・`StudioAspectSlider.vue`・`StudioResetButton.vue`・`StudioKeyDot.vue`、Camera のカードの撮り方の札は `StudioModeTiles.vue`）。Aspect のスライダーが止まる既定の比は `web_src/studio/ui_aspect.js` `ASPECT_PRESETS`・`snapAspectPos`、矢印キーの移り先は `stepAspect`。Sky の画像の FOV の行のリセット先は `inspector_model.js` `skyPlacedSize`。エディタの中でインスペクタとタイムラインが共有する選択は `web_src/studio/session.js` `inspectorSelection` | `tests/studio_inspector_model.test.mjs`、`tests/studio_inspector_actions.test.mjs`、`tests/studio_ui_helpers.test.mjs`（Aspect のスライダーの止まる所）、`tests/browser/studio_inspector.spec.js`、`tests/browser/studio_ui.spec.js`、`tests/studio_session.test.mjs`、`tests/browser/studio_session.spec.js` |
| 右の中央の列（視点の操作のつまみ）と右下のボタン群（Frame Selected、Reset View、グリッドのボタン）の並び | — | `web_src/components/studio/StudioNavWidget.vue`、`StudioViewButtons.vue`（つまみの働きは `docs/space-and-view.md`） | `tests/browser/studio_editor.spec.js` |
| 下の中央のバーの中身 | — | `web_src/studio/selection_bar.js` `selectionBar`・`gizmoModeOfKey`、`web_src/components/studio/StudioSelectionBar.vue`、ボタンの働きは `web_src/studio/session.js`（`toggleLock`・`duplicateSelected`・`orderSelected`・`revertSelected`・`deleteSelectedObject`）、ステージの選択とギズモと Sky の画像のハンドルは `web_src/studio/stage_objects.js`（ギズモの形・当たり・ドラッグの動きは `web_src/studio/gizmo_overlay.js`、ギズモの中心はガイドの中心 `web_src/studio/world_guides.js` `worldGuideItems`、描くのは `web_src/studio/stage_overlay.js`）。未実装：Replace（古い UI の下にファイルを選ぶ部品が無い）、Camera の Lock（`camera.locked` を読み込みがまだ読まない、`docs/scene-state-v2.md`）、ペイントのまとまりと複数選択のバー | `tests/studio_selection_bar.test.mjs`、`tests/studio_session.test.mjs`、`tests/studio_stage_objects.test.mjs`、`tests/studio_gizmo_overlay.test.mjs`、`tests/browser/studio_select.spec.js` |
| エディタの中の Camera の見せ方（Camera のボタン、Camera のカード、3D の見た目） | — | 3D の見た目は `web_src/studio/camera_marker.js`（形・塗り・見え方）、描くのは `web_src/studio/stage_overlay.js`。Camera のボタンとカードは（新しい UI、未実装）`web_src/studio/camera_ui.js` | `tests/studio_camera_marker.test.mjs`、`tests/browser/studio_select.spec.js`、（未作成）`tests/studio_camera_ui.test.mjs` |
| Camera タブの画面（フレームの収め方、枠の外、辺の目盛り、無効にする部品） | — | 収め方と目盛りの計算は `web_src/studio/frame_layout.js`（`frameRect`・`rulerStrips`（目盛りの長さと置き場所）・`rulerMarks`・`rulerDragValue`、目盛りの縮尺と長さと値の幅 `CAMERA_RULERS`）、画面の部品は `web_src/components/studio/StudioCameraFrame.vue`（枠と枠の外）・`StudioEdgeRuler.vue`（辺の目盛り）、無効にする部品は `StudioToolRail.vue` の `cameraTab`・`StudioViewButtons.vue` の `resetDisabled`・`frameTip`・`frameDisabled`（Panorama モードの Frame Selected）・`StudioNavWidget.vue` の `disabled`。辺の目盛りは Camera のカードの行（`frame_layout.js` `cameraRulers`）で、編集とリセットはインスペクタと同じ `inspector_actions.js` `applyInspectorEdit`（`rulerEdit`、Roll だけのリセットは行 `roll`）。ステージへの組み込み（タブ、フレームの中の絵、目盛り、Camera タブで Output の小窓を畳むこと）は `StudioEditor.vue`、タブと Camera の動きを状態に書くのは `web_src/studio/editor.js`、描くのと操作は `web_src/studio/stage.js`（Frame 表示は `stage_view.js` `cameraFrameView`、Panorama モードの ERP は `pano_three_view.js` `renderLiveErp`） | `tests/studio_frame_layout.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/studio_inspector_actions.test.mjs`（Roll だけのリセット）、`tests/browser/studio_camera_tab.spec.js`、`tests/browser/studio_camera_wired.spec.js`、`tests/browser/studio_camera_fixes.spec.js` |
| Add のアイコンと、Add とドロップの流れ（選ぶファイル、画像の Sky / World の二択とその取り消し、置く間、失敗の知らせ）、ドラッグ中の印の見た目とラベル | — | 流れは `web_src/studio/add_files.js` `createAddFiles`（下の部品 `pano_sticker_file_import.js` のアップロード、`pano_file_3d.js` の経路）、ファイルを選ぶ画面は `web_src/components/studio/StudioEditor.vue`、二択は `web_src/components/studio/StudioPlaceChoice.vue`、ドラッグの事象は `web_src/studio/drop_input.js` `createDropInput`、印とラベルを描くのは `web_src/components/studio/StudioDropMarker.vue`（印の形と色、ラベルの置き場所 `dropLabelPlace`、着く所は `web_src/studio/landing.js`、`docs/space-and-view.md`）。読み込み中のガイドと現れる動きの時間は `web_src/studio/load_reveal.js` `createLoadReveal`（置いた 3D ファイルを知らせるのは `add_files.js`、中身の不透明度に掛けるのは `web_src/studio/editor.js`、光の帯を描くのは `stage_overlay.js`） | `tests/studio_add_files.test.mjs`、`tests/studio_landing.test.mjs`、`tests/studio_load_reveal.test.mjs`、`tests/browser/studio_add.spec.js` |
| 読み込み中と空の画面、一行の知らせとその種類 | — | どれを出すかと種類は `web_src/studio/notice_line.js` `topLine`（シェルの `StudioEditor.vue` が呼ぶ）、画面は `web_src/components/studio/StudioNotice.vue`。開く前に three.js のチャンクと stylesheet を読んでおくのは `web_src/pano_editor_view.js` `preloadEditorView`・`web_src/studio/editor.js` `preloadStudioEditor`、いつ始めるかは `web_src/editor_choice.js` `createStudioPreloader`（組み立ては `web_src/main.js`）。Add とドロップの失敗と 3D ファイルの読み込み中は `web_src/studio/add_files.js` が `ui` に書く。上流の警告と、経路が答えた後に three.js が 3D ファイルを読めないときの知らせは、出す元がまだ無い（未実装） | `tests/studio_notice_line.test.mjs`、`tests/editor_choice.test.mjs`、`tests/browser/studio_editor.spec.js` |
| タイムラインのバーの並びと、行の頭の並び | — | `web_src/components/studio/StudioTimelineBar.vue`・`StudioTimelineHead.vue`（組み立ては `StudioTimeline.vue`、データは `web_src/studio/timeline_model.js`） | `tests/browser/studio_timeline.spec.js` |
| ショートカットの一覧の中身 | — | （新しい UI、未実装）`web_src/components/studio/StudioShortcuts.vue` | （未作成）`tests/studio_ui_model.test.mjs` |
| 閉じ方 | — | `web_src/components/studio/StudioEditor.vue`、Escape を受けるのは `web_src/studio/stage.js`（ドキュメントの捕捉で受け、欄のドラッグの Escape は先に欄が取る）、枠の外のクリックは `web_src/studio/backdrop.js` `createBackdropClose`、閉じるのと保存は `web_src/studio/editor.js`（書く文字は `web_src/studio/session.js` `stateText`、下の部品 `pano_editor_state.js` `editorStateWrite`）、Escape の順の 3 段は `web_src/studio/add_files.js` `escape`、5・6 段は `session.js` `escape`、下の部品 `pano_node_bridge.js`。Escape の順の表の 2・4 段（地面を拾う待ち、ショートカットの一覧）は、その部品がまだ無い（未実装） | `tests/studio_backdrop.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_ui.spec.js`（欄のドラッグの Escape）、`tests/studio_session.test.mjs`、`tests/browser/studio_session.spec.js` |
| Preview のウィンドウの画面 | — | （新しい UI、未実装）`web_src/components/studio/StudioPreviewWindow.vue` | （未作成）`tests/browser/` の場面 |
| Output の小窓（折りたたみとその動き、大きさ、記憶） | — | `web_src/components/studio/StudioOutputPreview.vue`、大きさと記憶は `web_src/studio/layout.js` `outputWindowSize`・`loadOutputWindow`・`saveOutputWindow`、Camera タブで畳んで触れなくするのは `outputWindowView`。中の絵の canvas は `StudioEditor.vue` が小窓の slot に置き、描くのは `web_src/studio/stage.js`（Frame モードはステージの canvas の隅に描いて `createImageBitmap`、Panorama モードは `pano_three_view.js` `renderLiveErp`。描き方は `docs/threejs-spark-integration.md`） | `tests/studio_stage_view.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_camera_wired.spec.js`、`tests/browser/studio_camera_fixes.spec.js` |

## 目指すもの

画像か動画を 3D に持ち上げた空間を Panorama Studio で開き、**見て回り、物を置き、撮る**。撮った絵や動画は、下流の生成 AI で
リファインする。画面は、この「見る・置く・撮る」を何より気持ちよくする。

- 置く：物（Sticker）を空間に置き、位置・向き・大きさを合わせる。モデリングはしない。
- 動かす：置いた物を時間に沿って動かせる（歩くモーションの人を道に沿って進ませる、など）。凝ったアニメーションの道具にはしない。
- 使う人は、画像や動画の編集に慣れていない ComfyUI の利用者を主に考える。説明を読まなくても分かることを一番にする。プロの使い方は、
  近道（ショートカット）と細かい設定で足し、初めての人の道をふさがない。
- 撮ったものを空間に戻す流れは、今は Sky だけでできる。3D の切り抜き（Box、ADR 0045）は、後から足すための場所だけを取る。

## 画面の区画

一つの画面に全部を置き、選んだ物と今している操作に合わせて出す部品を変える（作業ごとの段は作らない）。ヘッダーは置かない。

画面は旧エディタと同じモーダルで、全画面にはしない。数は `docs/design.md` の「新しい UI の見た目」の「形と重なり」が持ち、ここに写す：

| 対象 | 値 |
|---|---|
| 枠の大きさ | 幅 `max(720px, 80vw)`・高さ `max(520px, 82vh)`、最大で幅 `96vw`・高さ `94vh`。画面の真ん中 |
| 枠の後ろ | 黒の 70% で暗くする（旧エディタのスクリムと同じ） |
| 枠 | 一枚の地で全体を包む。角丸 16px、内側の余白 8px |
| 窓 | ステージの窓（左上）、インスペクタの窓（右、幅 320px、上から下まで）、タイムラインの窓（ステージの窓の下だけ）。間 8px、角丸 12px、縁の線なし（地の色の段だけで分ける） |
| ステージの上に浮かせる部品 | ステージの窓の端から 16px。地は 85%、縁の線なし |
| 浮かせる部品の内側の余白 | 左の列・右の中央の列・右下・下の中央のバー 6px（下のバーの左は 14px）、左上のタブ 4px |
| 左上のタブ | 3D・Camera を同じ幅 108px（Camera のアイコンと文字の左右に約 16px）・高さ 34px、文字 13px、アイコン 18px |
| タイムラインの高さ | 既定 176px（覚えた高さがあればそれ）。最小 120px、ステージは最小 240px |

| 区画 | 置くもの |
|---|---|
| ステージ | 3D の空間。ステージの窓の端まで使う。下の部品はステージの上に浮かせる |
| ステージの左上 | タブ `3D` / `Camera`（アイコンと文字、二つは同じ幅の segmented control） |
| ステージの左（上下の中央） | 左の列（下の「左の列」） |
| ステージの右（上下の中央） | 視点の操作のつまみ（球・パン・前後）を縦に並べ、その下に「?」（ショートカットの一覧） |
| ステージの右下 | ボタンの群（3D タブ：Frame Selected・Reset View・グリッドのボタン。Camera タブ：同じ席に Frame Selected・Reset View（無効）・グリッドのボタン）。グリッドのボタンは状態をアイコンの形で示す（`docs/agents/ux-principles.md` の例外） |
| ステージの右上 | Output の小窓（下の「Output の小窓」）。3D タブで出す。Camera タブでは畳んだ形で薄く出し、触れない |
| ステージの上端の中央 | 一行の知らせ（左に種類の印。下の「一行の知らせの種類」）と、読み込み中の一行。一度に一つだけ出す。タイムコードは置かない（時刻はいつも出ているタイムラインのバーにある） |
| ステージの下の中央 | 下の中央のバー（下の「下の中央のバー」） |
| 右の列 | インスペクタの窓（幅は `docs/design.md`）。上から下まで伸びる |
| ステージの下 | タイムラインの窓（中身は `docs/timeline-ui.md`、バーの並びは下の「タイムラインのバー」）。ステージの窓の幅だけで、インスペクタの下には入らない |

- 3D タブは空間を自由に見る表示、Camera タブは撮る Camera から出力をそのまま見る表示（下の「Camera タブ」）。Unwrap の表示は無い。
- ステージの上に浮かせる部品は、置き場所が決まっていて、出たり消えたりしても他の部品を動かさない（`docs/agents/ux-principles.md`）。
  タブを切り替えても、部品の席は変わらない。Camera タブで使えない部品は、同じ席に出したまま無効にし、tooltip で理由を示す。
- 視点の操作のつまみの働きと、操作の最中に光る規則は `docs/space-and-view.md` の「視点の操作の部品」が持つ（光り方の見た目は
  `docs/design.md`）。この文書は置き場所だけを持つ。
- タイムラインは既定で開き、高さの決まった領域を取る。ステージとの境界をドラッグして高さを変え、ブラウザごとに覚える。ステージと
  タイムラインの両方に最小の高さを持たせる。畳む操作もあり、畳んでもタイムラインのバー（再生・時刻など）は出す。行が収まらないときは
  タイムラインの中だけでスクロールする。

### 左の列

上から次の 3 つの群を並べ、群の間を空ける。

1. 道具：Cursor・Paint・Mask（Paint と Mask は別の道具。道具の中身は今のペイントの道具と同じ）
2. 足す：Add（画像と 3D ファイル。アイコンは写真と立方体を重ね、立方体を手前にして、重なる所の写真の線を切り取る）・Camera
3. 一番下に Undo・Redo

Clear All は無い。ペイントとマスクを消すのはペイントの道具の Clear paint・Clear mask、Sky の画像を消すのは範囲選択と Delete。

Camera タブでは、Undo・Redo のほかは同じ席に出したまま無効にする（tooltip「Not available in the Camera view」のように理由を示す）。

### Output の小窓

- 撮る Camera の出力を右上に小さく出す。絵は小窓の端まで広げ、周りに地の縁を残さない（角丸だけで切る）。折りたたみのボタンだけを持つ（状態はアイコンの形で示す。`docs/agents/ux-principles.md` の例外）。
- 既定では畳んでおく。使う人が開けば開き、その状態をブラウザごとに覚える（持ち主の決定、2026-10-30）。
- 開く・畳むときは、大きさと透明度をすっと変える（値は `docs/design.md` の「動き」）。動いている間、中の絵は描き直さず、
  今の絵をそのまま縮めたり広げたりして見せる。
- 大きさは左下の角をドラッグして変え、ブラウザごとに覚える。最小と最大を持ち、縦横比は出力の比に合わせる。ポインタを載せたときだけ
  角のつまみをはっきり見せる。
- Frame モード：撮る Camera から描いた絵を、その場で出す。描き直すのは Panorama モードと同じく何かが変わったときだけで、小窓の
  大きさの解像度で描く（`docs/threejs-spark-integration.md` の「Panorama モードの ERP の表示」の描き直しの条件と同じ）。
- Panorama モード：撮る Camera の位置から描いた ERP を、開いた絵としてその場で出す。描き方（何かが変わったときだけ、小窓の大きさの低い
  解像度で描き直す）は `docs/threejs-spark-integration.md` の「Panorama モードの ERP の表示」。直近の実行の出力は使わない（編集とずれるため）。
- Camera タブでは使わない（ステージそのものが出力の絵のため）。開いていても畳んだ形にし、その間は中の絵を描かない。畳んだ形の
  「Output」は同じ席に薄く出したまま触れない（押しても開かず、hover でも変わらない。tooltip は「Not available in the Camera view」）。
  覚えた開閉の状態は書き換えず、3D タブに戻ると前の状態（開いていれば開く）に戻る。

## インスペクタ

インスペクタは「今その画面で触っているもの」を映す。

| 画面 | 出すもの |
|---|---|
| 3D タブ | 選んだ物のカード（Camera を選べば Camera のカード）。何も選んでいなければ Scene のカード |
| Camera タブ | Camera のカードだけ。Camera タブで物を選んでも（下の「Camera タブ」）、インスペクタには出さない |

- 一番上の行：ノードの名前と、閉じる ✕（下の「閉じ方」）。
- カードの中が収まらないときはスクロールする。スクロールバーは出さない。
- タイムラインで Keyframe を選んでいる間だけ、インスペクタの下端に Easing のパネルを固定して出す（下の「Easing のパネル」）。出ている間は、
  その上の領域だけがスクロールする。

### 行の格子

すべての行を一つの格子に乗せる：名前 ／ 1 ／ 2 ／ 3 ／ Keyframe のポチ ／ リセット（幅は `docs/design.md`）。値の箱とポチとリセットは、
すべての行で縦一列にそろう。

- 値が複数の行（Position の X・Y・Z、Rotation の Y・P・R など）：名前を左、値の箱を 1〜3 列目に置く。値が二つの行は 1〜2 列目に置き、
  3 列目は空ける。
- 値が一つの行（Scale・Opacity・H FOV・Lens など）：名前を左、スライダーを 1〜2 列目、値の箱を 3 列目に置く（DaVinci Resolve と同じ
  並び）。上限と下限のある値に付ける。
- Aspect の行：スライダーは横 16:9 から縦 9:16 までで、中央が 1:1。位置は log₂(比) で等間隔にとり（1:1 が中央、横と縦が対称）、
  3:2・4:3・1:1・3:4・2:3 に目盛りを引く。スライダーは既定の比（両端の 16:9・9:16 と目盛りの 5 つ、合わせて 7 つ）を選ぶためのもので、
  押しても引いても一番近い既定の比にだけ止まり、その間の値を取らない。矢印キーは隣の既定の比へ一つずつ移る。既定の比の間の値や
  スライダーの外の比は、隣の箱に打ち込んで（または箱をドラッグして）決める。箱に入る比は 0.25〜4（`CAMERA_ASPECT_MIN`・
  `CAMERA_ASPECT_MAX`。持ち主は `docs/scene-state-v2.md` の `camera.aspect`）。今の比が既定の比でないときは、つまみをその比の位置に
  出し（スライダーの外の比は端に出す）、次にスライダーを動かすと既定の比に止まる。
- 選ぶ値（範囲など）：segmented control を 1〜3 列目に置く。撮り方のモードだけは格子に乗せず、Camera のカードの見出しのすぐ下に
  絵の付いた 2 枚の札で置く（下の「Camera のカード」）。
- 使わない行（撮り方のモードで効かない行など）は、隠さずに灰色にして触れないようにする。行の位置は動かさない。

### 欄

- 値の箱はふだん地の色を持たず、ポインタを載せた欄にだけ地の色を出す。そのときカーソルは左右の矢印にする。
- 欄そのものを左右にドラッグすると値が変わる。ドラッグの間はカーソルを消し（ポインタロック）、画面の端でも止まらない。Shift で
  1/10 の細かさ。動かさずに放すと、その欄に文字で入力できる。名前の部分はドラッグしない。
  - ポインタロックが取れない（ブラウザが断った、ページがフォーカスを持っていない）ときは、カーソルを出したまま同じドラッグで値を変える
    （画面の端で止まる）。
  - ドラッグ中の Escape は、ドラッグを取り消して値を押す前に戻す（エディタは閉じない）。ブラウザが Escape でポインタロックを解いたときも
    同じに扱う。
- 箱の中は左にそろえる：軸の文字（X・Y・Z など）、値、単位（°・% など）の順に左から並べる。右にそろえると単位の幅のぶん値の位置が
  行ごとにずれるため、単位があってもなくても値の左端が縦にそろうようにする（持ち主の決定、2026-10-30）。
- 文字は大文字の高さで上下の中央にそろえる（`docs/design.md`）。

### リセットと Keyframe のポチ

- リセット：各行の右端。押すとその行の値だけを既定に戻す。上流から受け取った物では上流の値、ノードの入力から来た物（`port`）では入力の
  値に戻す。今が戻す先と同じ行では、隠さずに無効にする。押すと Undo の 1 段で、Keyframe のある Lane では記録の規則に従う
  （`docs/timeline-ui.md` の「記録の規則」）。
- Keyframe のポチ：値の箱とリセットの間に置く。どの行に置くか、三つの状態、押したときの動き、無効になる条件は `docs/timeline-ui.md` の
  「インスペクタの Keyframe のポチ」が持つ。この文書は置き場所だけを持ち、形と色は `docs/design.md`。
- 上流から受け取った物で、上書きした行には、名前の横にタイムラインと同じ小さな点を付ける。

### 種類ごとの中身

3D タブのインスペクタに出すカード。

| 選んだ物 | カード |
|---|---|
| 空に貼った画像（Sky） | 見出し（Sky のアイコンと名前）、Rotation（Y・P・R）、FOV（H・V）、Opacity |
| World に置いた画像の板 | 見出し（World のアイコンと名前）、Position（X・Y・Z）、Rotation（Y・P・R）、Scale、Opacity |
| World に置いた 3D | 上と同じ。アニメーションを持つときは、その下に小見出し Animation を置き、Clip（1〜3 列目の選択）と Speed |
| Camera | Camera のカード（下の「Camera のカード」） |
| 複数選択 | 見出しに数とアイコン（例：`3 stickers`）だけ。操作は下の中央のバー |
| ペイントのまとまり | 見出し `Paint` だけ。操作は下の中央のバー |
| 何も選んでいない | Scene のカード：Ground（地面の高さの値、`Set ground` のボタン、リセット）。`Set ground` は値の 2 列目と 3 列目を使う（1 列では名前が収まらない）。地面の自動推定のボタンは、置くときに席を決め直す |

- 空に貼った画像（Sky）の FOV の行のリセットは、置いたときの大きさに戻す：H は `NEW_STICKER_HFOV`（30°、`pano_space.js`）、V は画像の
  縦横比から求めた値（縦横比を崩さない）。上流から受け取った物とノードの入力から来た物（`port`）は、上の「リセットと Keyframe のポチ」のとおり。
- 土台の 3D（`world` の入力、`docs/studio-node.md`）は選べないので、カードは無い。土台を合わせるのは地面の高さだけ。
- 画像の側のレンズの値（Sky の画像の `curve`、World の物の `lens`）はインスペクタに出さない。往復（Pose handoff）が撮った Camera の値を
  入れ、描くときに逆に戻して貼る（ADR 0042、`docs/scene-state-v2.md`）。
- `Set ground` を押すと、次の一回のクリックだけ地面にしたい面を拾う状態になり、カーソルを地面を拾う形に変える。Escape で取り消す。
  拾った点の高さの規則は `docs/space-and-view.md`（ADR 0046）。

### Camera のカード

3D タブで Camera を選んだとき、と Camera タブで出す。Camera はいつも一台あるので、無いときの表示は無い（撮る Camera の規則は
`docs/studio-node.md`）。行の並びはどちらの撮り方でも同じで、効かない行は灰色にして触れないようにする（上の「行の格子」）。

撮り方のモード（Mode）は、カードの見出しのすぐ下に、横に並べた 2 枚の札で選ぶ（見本 `design-drafts/mode-3.html` の M1）。札には
出来上がる絵の形の小さな絵（Panorama は 2:1 の展開図の格子、Frame は枠で切り取った 1 枚と中央の小さな十字）と、その下に名前を出す。
説明の文は付けない。押すと撮り方が変わる。行の名前（Mode）、リセット、Keyframe のポチは持たない。見た目の値は `docs/design.md` の
「新しい UI の見た目」。

| 行 | Panorama モード | Frame モード |
|---|---|---|
| Range | 360° / 180° | 灰色・触れない |
| Aspect | 灰色・触れない | スライダー（上の「行の格子」） |
| H FOV | 灰色・触れない | スライダー |
| Lens | 灰色・触れない | スライダー（κ） |
| Position | X・Y・Z。リセットは原点（0, 0, 0）へ | 同じ |
| Rotation | Y・P・R。リセットは向き 0 へ。Panorama モードの Yaw は ERP の正面の向き | 同じ |

- 「原点に戻す」の専用のボタンは置かない。Position と Rotation の行のリセットで戻す。
- 出力の大きさ（`megapixels`・`multiple`）はノードの上の設定で、Camera のカードには出さない（`docs/studio-node.md`）。

### Easing のパネル

- タイムラインで Keyframe を選んでいる間だけ、インスペクタの下端に置く。選んでいないときは消す。
- 中身：見出し `Easing` と既定に戻すボタン、プリセット 5 つ（Hold・Linear・Ease in-out・Ease in・Ease out）の segmented control
  （アイコンだけを出し、名前は tooltip に出す。名前の文字はパネルの幅に収まらないため）、
  縦横 1:1 の曲線のグラフ、ベジェの 4 つの値の入力欄（例 `0.42, 0, 0.58, 1`。選んでコピーでき、貼り付けもできる）。
- グラフはいつも 1:1。上の領域が 5 行分（約 180 px、値は `docs/design.md`）より狭くなるときは、グラフの一辺を縮めて 1:1 のまま小さくする。
- 出し方：パネルの高さを伸ばして出さず、下端に重ねて透明から出す（値は `docs/design.md`）。上の領域の下の余白は動かさずに一度で取る。
- 選んだ Keyframe の Easing が混ざっているときの表示と、変えたときの規則は `docs/timeline-ui.md` の「Easing」。

## 下の中央のバー

ステージの下の中央の決まった場所に、一本のバーとして固定する。Cursor の道具のときは選んだ物のバー、Paint・Mask の道具のときは
ペイントの道具を出す（二つは同時に出ない）。何も選んでいないときと、Camera タブでは出さない（ビューの上に重ねる情報は状況で出し入れして
よい。`docs/agents/ux-principles.md`）。

- 左端に、選んだ物のアイコン（Sky / World の印、Camera、Paint）と名前。
- ギズモの切り替えは Move・Rotate・Scale のアイコンで並べ、`1`・`2`・`3` のキーでも切り替える（tooltip に「Move (1)」のように出す）。

| 選んだ物 | 並び（／は群の区切り） |
|---|---|
| 空に貼った画像 | 前面へ・背面へ ／ Duplicate・Replace ／ Lock・Delete |
| World に置いた画像の板 | Move・Rotate・Scale ／ Duplicate・Replace ／ Lock・Delete |
| World に置いた 3D | Move・Rotate・Scale ／ Duplicate・Replace ／ Lock・Delete |
| Camera | Move・Rotate ／ Lock |
| ペイントのまとまり、複数選択 | 前面へ・背面へ ／ Lock・Delete |
| ノードの入力から来た物（`port`）、上流から受け取った物 | 上の並びに「元に戻す」を足す（その物の全部の値を元の値へ。`port` の Back to Initial と上流の Revert を一つにしたもの） |

- 表示・非表示の切り替えはバーに置かない（タイムラインの目のアイコン、`docs/timeline-ui.md` の「表示（目のアイコン）」）。
- Lock は押すたびに切り替わるボタンで、状態を鍵のアイコンの形で示す（`docs/agents/ux-principles.md` の例外）。
- Camera は消せないので Delete を置かない。Delete キーを押したときは一行の知らせ「The camera can't be deleted」を出す。
- 空に貼った画像にはギズモを出さない。ステージの上で、本体のドラッグで向き、四隅のハンドルで画角（縦横比を保つ）、辺のハンドルで
  縦か横の画角だけ、回転のハンドルで Roll を変える（今の動きのまま、新しい UI でも変えない。今の動きは `web_src/editor/pointer_input.js` の
  `startMove`・`startScale`・`startAxisScale`・`startRotate` にあり、当たりの順は `docs/editor-interaction.md` の「`world` の Sticker の操作」の
  選択の順。古い UI の文書には独立した節が無いので、切り替えのときにこの文書へ規則として書き起こす。見た目の値は `docs/design.md`）。
  ただし回転のハンドルの Shift の止め方は、古い UI の 45° ではなく、ギズモの Rotate と同じ `ROTATE_SNAP_DEG` の倍数（絶対の Roll）にする。
  選んだ空の画像の枠とハンドルは、World の物の選択の黄ではなく氷の色で描く（ドロップの Sky の印と同じ色。Sky と World の行き先を色で
  見分けられるようにする。値は `docs/design.md` の「新しい UI の見た目」）。

### ギズモ

選んだ World の物（画像の板、3D）と Camera に、3D タブでだけ出す（出す条件は `web_src/studio/stage_objects.js`）。ステージの上の 2D の層に、
物の中心から画面の上で決まった大きさで描く（物が遠くても近くても同じ px）。

- 物の中心：その物の World のガイド（`docs/space-and-view.md` の「World の物のガイド」）の中心。3D の Sticker は回した要素の箱の中心、
  画像の板は板の中心、Camera は位置。3D の Sticker の箱がまだ分からない間（置いて読み込んでいる間）は、読み込み中のガイドの箱の中心。
  ガイドの無い 3D の Sticker（箱がまだ分からず、読み込み中のガイドも無い）は、中身の原点。中心はギズモと同じ値の一か所
  （`web_src/studio/world_guides.js` `worldGuideItems` の `center`）から取り、ギズモとガイドが別の点を使わない。
  3D ファイルの中身の原点は箱の外にあることがある（原点が離れたファイル）ので、原点には描かない。
- Rotate と Scale は、この中心を動かさずに回し、大きさを変える。中心が中身の原点と違う 3D の Sticker では、回すと大きさを変える
  ドラッグが `position` の Lane も書く（中心が原点と同じ物、画像の板、Camera では書かない）。形は見本 `specimen-11.html` の Move に揃え、Rotate と Scale は
同じ線の太さと色で作る（値は `docs/design.md` の「新しい UI の見た目」）。古い UI のギズモ（`docs/editor-interaction.md`）は変えない。

- Move：中心から World の X・Y・Z の向きに三本の棒、棒の先に丸い玉、中心に白い点。棒か玉をドラッグすると、物はその軸の上だけを動く
  （ポインタの光線に最も近い軸の上の点へ。つかんだ点との差を保つ）。その点が視点の前に無いとき（軸の消失点より先を指したとき）は
  動かさず、前の位置に留める。中心の白い点をドラッグすると、つかんだときの視線に垂直な面の上を
  ポインタについて動く。
- Move の平面の取っ手：二つの軸の間に小さな四角を三つ置く（XY・YZ・XZ の面）。四角は、中心から二つの軸の向きにそれぞれ届く長さの
  `GIZMO_PLANE_FROM` から `GIZMO_PLANE_TO` までの範囲を、World の中の面として画面に写したもの（面を斜めに見れば四角も斜めになる）。
  色は Blender にならい、その面に垂直な軸の色（XY は Z の氷、YZ は X の珊瑚、XZ は Y のライム）を薄く塗り、縁を同じ色の線で描く。
  四角をドラッグすると、物はつかんだときの中心を通るその面の上だけを動く（ポインタの光線と面の交わる点へ。つかんだ点との差を保つ）。
  光線が面とほぼ平行なときと、交わる点が視点の前に無いときは動かさず、前の位置に留める。面を縁から見るとき（面に垂直な軸と、
  視点から中心への向きのなす角の余弦の絶対値が `GIZMO_HIDE_RATIO` 未満）は描かず、当たりにも数えない。平面のドラッグでは軸の
  ガイドの線を描かない。
- Rotate：World の X・Y・Z の軸のまわりの三つの輪。輪の手前の半分を濃く、奥の半分を薄く描き、当たりは手前の半分だけ。輪をドラッグ
  すると、物はその軸のまわりに回る（つかんだ点の輪の接線の向きにポインタを動かした px を、輪の半径の px で割った角度）。
  Shift を押している間は、その輪の軸に当たる角度（Y の輪は yaw、X の輪は pitch、Z の輪は roll）を、回し始めの値からの差ではなく
  絶対の角度で `ROTATE_SNAP_DEG`（`docs/space-and-view.md` の「量の一覧」）の倍数に止める（ほかの二つの角度は止めない）。中心が
  中身の原点と違う物は、止めた向きで上の「物の中心」を保つ。
- Scale：物の向きの三本の棒、棒の先に小さな角丸の四角、中心に白い点。棒の当たりは中心から `pointHit` より外だけ（中心の近くで
  つかむと比が乱れるため）。棒か四角をドラッグすると、つかんだ点と中心の、その軸の上の
  画面の距離の比で、大きさを一様に変える（`pano_space.js` `uniformScale`）。
- Rotate と Scale の中心の白い点は形だけで、当たらない。
- 視線とほぼ平行になった軸（Move と Scale の棒の画面の長さが届く長さの `GIZMO_HIDE_RATIO` 未満）は描かず、当たりにも数えない。
- 軸の取っ手（Move と Scale の棒と玉と四角、Rotate の輪）をドラッグしている間は、つかんだときの物の中心を通る、その軸の向きの
  ガイドの線をステージの端から端まで描く（色はその軸の色。Move の中心の点のドラッグでは描かない）。
- ポインタの下の取っ手と、ドラッグしている取っ手は、軸の色のまま明るく（白へ寄せ）、太く描く（白にはしない。明るい背景で消えるため）。
  Alt を押している間は明るくしない（Alt のドラッグは必ずオービット）。
- 棒・玉・四角・輪・平面の四角・中心の点の下に、ガイドと同じ考えの暗い下敷きを描き、明るい背景（白い空の画像など）の上でも
  見えるようにする（値は `docs/design.md` の「新しい UI の見た目」）。
- 重なり：平面の四角を先に、次に奥の取っ手から描く。当たりは、玉・四角（Scale の先）・中心の点を先に見て、その中で画面の上で最も
  近いものを選ぶ。どれにも当たらなければ平面の四角（写した四角の中か）、次に棒と輪を見る。
- ドラッグはモードの Lane だけを記録の規則で書く（`pano_space.js` `gizmoDragLanes`。上の「物の中心」の Rotate と Scale の `position` を除く）。一つのドラッグが Undo の 1 段で、Escape と
  ウィンドウのフォーカスを失ったときは取り消す。ドラッグの間、取っ手の軸と比べる元の値は、つかんだときのものを使う。

## エディタの中の Camera

- Camera はいつも一台あり、消せない。撮り方は Panorama / Frame のモードで、既定は Panorama（規則は `docs/studio-node.md`）。
- 左の列の Camera のボタン：
  - Panorama モードで押すと、Frame モードに切り替え、今見ている構図（視点の位置と向き）に Camera を持ってくる。
  - Frame モードで押すと、今見ている構図に Camera を持ってくる。ボタンは 3D タブでいつも押せる。
  - どちらも編集で、Undo の 1 段。Camera の Lane に Keyframe があれば記録の規則で打ち、打った瞬間を一瞬知らせる。
  - Camera をロックしている間と、読み取り専用のエディタでは、隠さずに無効にし、tooltip で理由を示す。
- 撮り方のモードを変えても、Camera は動かさない。
- 目のアイコンで Camera を隠すのは表示だけで、出力は変えない。
- 3D タブでの見た目（見本 `camera-1.html`。値は `docs/design.md`）：
  - Frame モード：視錐台（三角錐）の面を薄く塗り、辺を線で描く。枠の上辺に、上の向きを示す小さな塗った三角。三角の形は枠の幅だけから決め、アスペクト比を変えても歪まない（`pano_space.js` `cameraFrustumShape`）。錐の頂点（Camera の
    位置）に白い点。奥に隠れる辺は薄く描く。
  - Panorama モード：Camera の位置に小さな球を薄く塗って輪郭を線で描き、赤道に輪を一本、正面（出来上がる ERP の中心）の向きに
    球の外へ短い矢印、球の中心に白い点。
  - 線は明るい線の下に暗い線を重ね、明るい背景でも地面のグリッドの上でもまぎれないようにする。
  - 選んでいるときは、線を選択の色にし、塗りを少し濃くする。
  - 塗った面のどこを押しても選べる（線の上だけではない。当たりは `docs/space-and-view.md` の「ホバーの判定」）。
- 3D タブで Camera を選んでからオービットすると、Camera の位置のまわりを回る（`docs/space-and-view.md` の「回る中心」）。

## Camera タブ

撮る Camera から出力をそのまま見る画面。どのドラッグもカメラを動かす（割り当ては `docs/space-and-view.md` の「Frame 表示」）。
物はクリックで選べるが、ギズモは出さず、ドラッグで物は動かない。選んだ物は回る中心と Frame Selected にだけ使い、インスペクタには出さない。
選んだ物には、3D タブと同じ選んだ物のガイド（落ち着いた黄の輪郭。規則は `docs/space-and-view.md` の「World の物のガイド」）を描き、
選んだことが見て分かるようにする。

- フレームは、ステージから決まった余白（左右・上・下。値は `docs/design.md`）を除いた残りに、出力の比を保って収める。比が変わると
  収まり直す。
- 枠の外：同じ絵を暗くして見せ、枠の境目に細い明るい線を引く。枠の外の絵は、同じレンズ（κ）をそのまま外へ延ばして描き、レンズの
  画角の上限（`docs/render-contract.md` の「カメラのレンズ」、`lens_fov_limit`）を越える画素は `background_color` で塗る（今の 180° を越えた所と同じ）。
- 辺の目盛り：フレームの左に FOV、右に Lens（縦の目盛り）、下に Roll（横の目盛り）。目盛りに数値を振る。真ん中の印は動かず、目盛りを
  左右（上下）にドラッグして値を変える。目盛りはフレームの辺について動く。枠の外の上に描く文字と線は、明るい色にする（`docs/design.md`）。
  - Shift：FOV と Lens は動きを細かくする（`FINE_FACTOR`）。Roll は回転なので、ギズモの Rotate と同じく `ROTATE_SNAP_DEG` の倍数（絶対の
    角度）に止める。ドラッグでも矢印キーでも同じ（矢印キーは今の値からその向きの次の倍数へ）。
  - 長さ：目盛りの線の帯は、ステージの大きさで伸び縮みしない決まった長さ（値は `docs/design.md` の「大きさ」）。帯の真ん中（真ん中の印）を、
    Roll はフレームの左右の中央に、FOV と Lens はフレームの上下の中央に合わせる。フレームの辺が決まった長さより短いときだけ、辺に収まる
    長さに縮める（縦の目盛りは、上下の頭のうち大きい方の分を上下とも辺から除いた長さ。帯の真ん中を辺の真ん中に保ったまま、上の頭が
    フレームの上端より上に出て左上のタブにぶつからず、下の頭がフレームの下端より下に出ないようにするため）。1 目盛りの px（縮尺）は
    長さによらず同じ。
  - 頭：目盛りの帯の両端の外に、二つに分けて置く。一方の端に名前と値、反対の端に Keyframe のポチ（どの Lane に打つかは
    `docs/timeline-ui.md` の「インスペクタの Keyframe のポチ」）とリセット。縦の目盛り（FOV・Lens）は、帯の上に名前、その下に値を
    縦に積み、帯の下にポチ、その下にリセットを縦に積む。Roll は、帯の左に名前と値を横に並べ、帯の右にポチとリセットを横に並べる。
    頭は帯の位置と長さを動かさない。値の文字は、その目盛りで一番幅をとる値（FOV `360°`、Lens `0.00`、Roll `-180°`）が収まる決まった幅を
    持ち、数字が変わっても頭の幅は変わらない。間の値は `docs/design.md` の「大きさ」。
  - リセット：Keyframe のポチの隣（縦の目盛りはポチの下、Roll はポチの右）に、インスペクタの行と同じアイコンで置く。FOV と Lens はインスペクタの H FOV・Lens の行のリセットと同じ
    働き（既定に戻す。上流から受け取った Camera では上流の値）。Roll は Roll だけを既定の 0° に戻す（インスペクタの Rotation の行のリセットは
    Yaw・Pitch も戻すため、それとは分ける）。どれも Undo の 1 段で、Keyframe のある Lane では記録の規則に従う。今が戻す先と同じとき、
    インスペクタと同じく隠さずに無効にする。Panorama モードの FOV と Lens は、目盛りと一緒に無効。
  - 当たり：ドラッグを受ける所は、目盛りの線の帯より太い透明な帯にする（Roll は上下に、FOV と Lens は左右に広げる。値は `docs/design.md`）。
    見た目は変えない。フレームの中（枠の内側）には広げない。
  - フォーカス：ポインタで押したときは何も出さない。キーボードで移ったときだけ、帯の地を薄く明るくして示す（縁の線は使わない。規則は
    `docs/design.md` の「フォーカス」）。
- Camera タブ（Frame モードと Panorama モード）でも地面のグリッドを描き、右下のグリッドのボタンで出し入れする。何も無い空間でも、
  自分がどこにいてどちらを向いているかが分かるようにするためである。Camera に張り付いた目安（三分割・水平の目安など）は置かない
  （持ち主の決定、2026-10-30）。グリッドは出力にも Output の小窓にも写さない。何をどこに描くか、3D タブとスイッチを共有することは
  `docs/space-and-view.md` の「地面のグリッド」。
- 無効にするもの（同じ席に出したまま灰色にし、tooltip で理由を示す）：左の列（Undo・Redo を除く）、Reset View。出さないもの：下の中央の
  バー。Output の小窓は畳んだ形で薄く無効にする（上の「Output の小窓」）。タイムコードは出さない（タイムラインのバーにある）。シャッターのボタンは無い（カメラの値は各値のポチか、タイムラインの行のポチで打つ）。
- Panorama モードのときは、撮る Camera の位置から描いた ERP を開いた絵として見せる（描き方は Output の小窓と同じ）。ステージの操作では
  何も動かない（見るだけ）。Frame に切り替える入口は、インスペクタの Camera のカードの Mode だけで、Camera タブに別のボタンや案内の
  一行は足さない（ADR 0048。使い方は README で見せる）。辺の目盛りは同じ席に出したまま、FOV と Lens は灰色で触れない（Panorama では効かない）。Roll は効く
  （ERP が Camera の向きで回るため）ので、触れる。
- Camera タブの右下の Frame Selected は、視点ではなく Camera を動かす（Undo の 1 段。`docs/space-and-view.md` の「Frame 表示」）。tooltip は
  「Frame selected · Moves the camera」。Panorama モードでは Camera を枠に収める意味が無いので、同じ席に出したまま無効にし、tooltip は
  「Not available in Panorama mode」（左の列の「Not available in the Camera view」と言い方をそろえる）。視点の操作のつまみも同じ tooltip で
  無効にする。ロックした Camera と読み取り専用のエディタでは、Frame Selected とつまみを無効にし、tooltip は「Locked」「Read-only」。

## Add とドロップの見せ方

着く所の規則（光線の当たり、境界、置く大きさと向き）は `docs/space-and-view.md` の「Add とドロップ」が持つ。

- Add：左の列の Add を押すと、ファイルを選ぶ画面を開く（選べるファイルは `docs/space-and-view.md` の「Add とドロップ」）。一度に一つの
  ファイルを置く。読み取り専用のエディタでは、Add を席に出したまま無効にし、ドロップを受けない。Camera タブでも、Add は左の列の
  ほかのボタンと同じく無効で（上の「左の列」）、ドロップを受けない。二択はタブを切り替えると閉じる（何も置かない）。
- Add で画像を選んだとき：読み込んだ後、ステージ全体に暗い幕を被せ、その中央に二枚の大きな札（Sky、World）を出し、押したほうに
  置く。Escape か、札の外（幕の上を含む）を押すと取り消し、何も置かない。外を押したときは、取り消した後もその押下がいつもどおり働く
  （視点のドラッグなど。幕は押下を受けない）。開いたときは Sky の札にフォーカスを置き、左右の矢印キーで札を移り、Enter か Space で
  選ぶ。二択を出している間に、ファイルをステージにドラッグしたときと、次のファイルを選んだときも取り消す。3D ファイルは
  選ばせない。二択の見せ方と取り消しの条件はこの文書が持ち、選んだ後の置き場所は `docs/space-and-view.md` の「Add とドロップ」が持つ。
  - 二択の見た目：Camera のカードの撮り方の札（`StudioModeTiles.vue`、見本 `mode-3.html` の M1）と同じ言葉の、ずっと大きな札を
    横に二枚並べる。札は上に絵、下に名前。絵は線で描き、Sky は空（球の上の半分）に画像を貼る様子、World は地面のグリッドの上に立つ
    板と箱の様子。絵の線と、ポインタの下・フォーカスの札の地は行き先の色（Sky は氷、World は落ち着いた黄。上の「ドラッグ中の印」と
    同じ色）。幕と札は出るときにフェードする。値は `docs/design.md` の「大きさ」の「Add の二択」と「動き」。
- ドロップ：離した点で行き先が決まり、選ばせない。いくつものファイルを落としたときは、画像があれば最初の画像を、無ければ最初の
  3D ファイルを一つだけ置く（古い UI と同じ）。
- ファイルをドラッグしている間の印：着く所に角のかぎ括弧と薄い塗りを描く（色と大きさは `docs/design.md`）。Sky の枠は、球に写した枠の
  曲がった辺に沿ってかぎ括弧を描く。3D ファイルの仮の箱は、すべての見える頂点から辺に沿って短い線を出す。印の色は行き先で変える：
  Sky は氷、World は落ち着いた黄（色で着く先を覚えられるようにする）。ポインタの近くに、行き先のラベル（Sky のアイコン＋`Sky`、または
  World のアイコン＋`World`）を出す。ラベルのアイコンと縁は印と同じ行き先の色にする。ラベルは印に重ねない（置き方は
  `docs/space-and-view.md` の「ドラッグ中の印」）。ドラッグの間はファイル名が読めないので、
  最初のファイルの項目の種類が `image/` で始まれば画像の印、それ以外（種類が空、`model/`、`application/octet-stream`）は
  3D ファイルの印を出す。
- 置く間：置いた物はすぐ状態に入り、選んだ状態になる。画像は読み込んだ絵をすぐ描き、裏でアップロードする。3D ファイルは、アップロード
  から中身が描けるまで、上端の中央に読み込み中の一行「Loading 3D model…」を出す（待つ間のほかの規則は `docs/editor-interaction.md` の
  「3D ファイルを置く流れ」の 2・4・5 と同じ）。
  - 読み込み中のガイド：その間も、置いた所にその物のガイドの箱（形と箱の決め方は `docs/space-and-view.md` の「World の物のガイド」）を
    描き、箱の線と面を光の帯が斜めに流れ続ける（何も出てこないと心配になるため）。ガイドの見え方（選んでいれば選択の色）はいつもどおり。
  - 描けたとき：中身が描けた瞬間から `LOAD_REVEAL_MS` の間に、光の帯が消えてガイドがいつもの見え方に戻り、同時に中身が不透明度 0 から
    その物の不透明度まで ease-out で現れる。
  - OS で動きを減らす設定のときは、光の帯を流さず（ガイドは止まったまま描く）、中身はすぐに出す。
  - 読み込み中のガイドと現れる動きは、この間に置いた 3D ファイルだけのもの。エディタを開いたときに読み込む 3D の Sticker には付けない。
- 失敗：画像を読めない・アップロードできない、3D ファイルが上限より大きい・アップロードできない・経路が読めないときは、置いていた物を
  消し（Undo の段は残さない）、上端の中央に「気をつけてほしい」の一行で理由を出す（文は「3D ファイルを置く流れ」の 6 と同じ。画像は
  `Could not read <ファイル名>`・`Could not upload <ファイル名> (...)`）。この一行は、次のファイルを置くかエディタを閉じるまで出す。
  「There is no ground to place it on」は「できなかった・止まった」の知らせ（`docs/space-and-view.md` の「着く所」）。
- Sky / World の印（アイコン）は、ドラッグ中のラベル、二択のボタン、下の中央のバーの左端、タイムラインの行のアイコンで同じものを使う。

## 読み込み中と空の画面

- エディタを開いたら、地面のグリッドをすぐに描く。読み込みの画面や、流れるグラデーション・ゆっくり現れる動きは出さない（例外は、
  置いた 3D ファイルの読み込み中のガイドと現れる動きだけ。上の「Add とドロップの見せ方」の「置く間」）。まだ来ていない
  中身（背景、3D の内容）の所はステージの地のままにし、来たものから描く。何を待っているかを、上端の中央に一行で出す（下の「一行の知らせの種類」の
  読み込み中）。
- すぐに描けるように、新しいエディタの設定がオンのとき、ComfyUI を開いた後の手の空いた時に、ステージの three.js のチャンクと新しい UI の
  stylesheet を読んでおく（設定をオンに切り替えたときも同じ）。Spark は SPLAT を描くときに読む（今のまま）。
- 空の画面（背景も物も無い）：上端の中央の場所に「画像か 3D ファイルをドロップするか、Add を押す」の一行を出す。
- 効かない操作の知らせ（境界で止まった、何もない所へのダブルクリックなど）も、上端の中央の一行に出す（どの操作で出すかは
  `docs/space-and-view.md`）。

### 一行の知らせの種類

上端の中央の一行は、種類で左の印を変える（色の値は `docs/design.md` の「色」、大きさと動きは「大きさ」「動き」）。

| 種類 | 印 | 出すとき |
|---|---|---|
| できなかった・止まった | 珊瑚の丸 | 効かなかった操作（境界で止まった、何もない所へのダブルクリック、Frame Selected で囲むものが無い、Camera を消そうとした） |
| 気をつけてほしい | 落ち着いた黄の丸 | 背景を読めない、3D の表示を作れない（three.js のチャンクか WebGL が使えない）、上流の警告、Add とドロップの失敗（3D ファイルの読み込みの失敗を含む。上の「Add とドロップの見せ方」） |
| 知らせるだけ | なし | 空の画面の案内 |
| 読み込み中 | 小さく回る輪 | 3D の表示や背景、置いた 3D ファイルを読み込んでいる |

- 3D の表示を作れないときは、ステージの真ん中ではなく、この一行に出す。
- 出すものが重なったときは、できなかった・止まった ＞ 読み込み中（3D の表示 ＞ 背景 ＞ 置いた 3D ファイル）＞ 気をつけてほしい
  （3D の表示 ＞ 背景 ＞ Add とドロップの失敗）＞ 空の画面の案内 の順で、前のものだけを出す（`web_src/studio/notice_line.js` `topLine`）。

## タイムラインのバー

タイムラインの上端のバー。並びと見た目だけを持ち、それぞれの働きは `docs/timeline-ui.md` が持つ。畳んでもこのバーは出す。

| 並び（左から） | 働きの持ち主 |
|---|---|
| 再生と一時停止（メディアの再生のボタン 1 つ。`docs/agents/ux-principles.md` の例外） | `docs/timeline-ui.md` の「タイムラインの表示」 |
| 前の Keyframe へ、次の Keyframe へ | `docs/timeline-ui.md` の「前後の Keyframe へ飛ぶ」 |
| ループのボタン（一つのアイコンのボタンで、オンとオフをアイコンの形 `repeat` ／ `repeat-off` で示す。`docs/agents/ux-principles.md` の例外。既定はオン） | `docs/timeline-ui.md` の「タイムラインの長さ」 |
| 時刻とフレーム（例 `00:03.12  78 / 240`） | `docs/timeline-ui.md` の「タイムラインの表示」 |
| （ここから右寄せ）fps の欄、Length の欄とそのリセット、畳むボタン（状態はアイコンの形で示す） | `docs/timeline-ui.md` の「タイムラインの表示」 |

- 再生位置は、ルーラーの上の ▼ の印と、トラックを縦に貫く 2 px の線で示す（色は `docs/design.md`。▼ はルーラーにだけ出す）。
- 行の頭の並び（左から）：目のアイコン、▶（開閉）、アイコン（Sky / World の印、Camera、Paint、Background）、名前、行のポチ。目を持たない
  行も同じ幅を空ける（`docs/timeline-ui.md` の「表示（目のアイコン）」）。
- 上流の層の見出しは「From ＜元のノードの名前＞」（`docs/timeline-ui.md` の「上流の層の行」）。

## ショートカットの一覧

右の中央の「?」を押すと、ステージの上に一覧を出す（もう一度押すか Escape で閉じる）。中身は、今の画面で効くものだけを
次の群で並べる。それぞれの割り当ての持ち主は括弧の中の文書で、一覧はそれを表示するだけである。

- 視点（`docs/space-and-view.md` の「マウスとキー」）：左ドラッグ・右ドラッグ（見回し）、中ボタン（パン）、Alt＋ドラッグ（オービット）、
  Alt＋中ボタン（前後）、ホイール、W/S・A/D・Q/E（Shift で速く）、ダブルクリック（そこを中心にして向く）。
  Camera タブでは同じ操作が Camera を動かすことを一行で添える。
- 物（`docs/editor-interaction.md`、切り替えの後はこの文書の「下の中央のバー」）：クリック（選ぶ）、1・2・3（Move・Rotate・Scale）、
  Delete、Ctrl / Cmd＋Z・Shift＋Ctrl / Cmd＋Z。
- 時間（`docs/timeline-ui.md`）：Space（再生と一時停止）、Shift＋クリック（Keyframe を選び足す）。
- 閉じる：Escape（内側のものから一つずつ）。

## 消すもの（新しい UI に作らないもの）

古い UI にあり、新しい UI に作らないもの。ADR 0044 の切り替えで、古い UI の Panorama Studio・Preview の分岐からも消す手引きになる。
決めた理由は ADR 0045・0047・0048。

- Unwrap の表示、3DoF / 6DoF の切り替え、3D view controls のプリセット（Default・Blender-like・Unity-like）、ERP origin の文字。
- Save・Cancel のボタン（閉じるのは ✕ だけ）、インスペクタの物を選ぶプルダウン、Copy State、UI Settings の Drag X / Y（ComfyUI の設定へ移す）。
- 左の列の Clear All と Add to World（Add は一つ）。
- `output_size` と Auto の大きさ、インスペクタの Coverage（ノードの `background_range`）。
- Camera の Delete と「Camera が無い」状態、比率のプリセットの「360°」（撮り方のモードに置き換え）、Frame 表示の Roll のノブと
  Alt / Shift＋左ドラッグの Roll、シャッターのボタン、「Shot」という呼び方（Camera に一本化）。
- いつも出ている撮影のカード（インスペクタは今触っているものだけを出す）、「原点に戻す」の専用のボタン（行のリセットで戻す）。
- 下の中央のバーの Hide / Show（タイムラインの目のアイコン）と、Camera の比率のメニュー（インスペクタの Aspect）。
- 画面に出す言葉の ERP・Equirectangular・Perspective（Panorama・Frame にそろえる。`CONTEXT.md`）。

## 閉じ方

- 閉じるのはインスペクタの一番上の行の ✕ と、Escape と、枠の外（後ろの暗い所）のクリックだけ。Save・Cancel のボタンは無い。
- 枠の外のクリックは ✕ と同じ（同じように保存して閉じる。Escape の順の表は通さない）。押したのも離したのも枠の外のとき（左ボタン）だけ
  閉じる。枠の中で押して枠の外で離したドラッグ（欄やタイムラインの境界のドラッグなど）では閉じない。
- Escape は内側のものから一つずつ戻す。一回の Escape は、次の表の上から最初に当たる一つだけを戻す。**何も選ばず、何も開いていない
  ときだけ、エディタを閉じる**（閉じる＝保存なので、選択を外すつもりの Escape でエディタが閉じないようにする）。

  | 順 | そのときの状態 | Escape でしたこと |
  |---|---|---|
  | 1 | 欄のドラッグの最中 | ドラッグを取り消し、値を押したときに戻す（上の「欄」） |
  | 2 | 「Set ground」の後、地面を拾う待ち | 待ちを取り消す |
  | 3 | Add の画像の二択（Sky / World）を出している | 二択を閉じ、何も置かない |
  | 4 | ショートカットの一覧を開いている | 一覧を閉じる |
  | 5 | Keyframe を選んでいる | Keyframe の選択を外す（Easing のパネルが消える） |
  | 6 | 物を選んでいる | 物の選択を外す |
  | 7 | 上のどれでもない | エディタを閉じる |

  視点のドラッグやギズモのドラッグの最中の Escape（取り消し）は、今の規則（`docs/editor-interaction.md` の「ポインタの取り消しとフォーカスの
  喪失」）のまま、表より先に当たる。
- 閉じると編集はいつも保存する。開いて閉じただけなら `state_json` を書かない（今の規則のまま。`docs/timeline-ui.md`）。

## Preview のウィンドウ

新しい Preview ノードの大きなウィンドウ（読み取り専用）。視点の規則は `docs/space-and-view.md` の「Preview のウィンドウ」。

- ステージをウィンドウいっぱいに置く。インスペクタ・タイムライン・左の列・下の中央のバーは無い。
- 右上に閉じる ✕、右の中央に視点の操作のつまみと「?」、右下に Reset View・グリッドのスイッチ・Fullscreen（状態はアイコンの形で示す。
  `docs/agents/ux-principles.md` の例外）。
- 下端に再生の帯：再生と一時停止、ループのスイッチ、シークの帯、時刻（並びはノード上の表示と同じ。`docs/preview-node.md`）。
- 見た目はエディタと同じ（`docs/design.md` の「新しい UI の見た目」）。

## まだ決めていないこと（spec ではない）

- 次の候補：Output の小窓（Frame モード）は、3D ファイルの Sticker を読み込んでいる間、ステージを描くたびに描き直されることがある（内容の
  cache が読み込み中は毎フレーム作り直されるため）。

- 二次の文字の濃さと、地面のグリッドの見た目の値（最初の画面を作るときに実際の画面で決める）。
- ペイントの道具の見た目の細部（中身は今のまま）。
- 右の中央に縦に置いたつまみの列（試してから、右下にまとめる形に戻すことがある）。
- 地面の自動推定（Scene のカードに席だけを取る。やるなら ADR 0046 の「開くたびに測り直さない」と合わせ、押したときに一度だけ推定して
  保存する形。次の候補）。
- 次の候補：Panorama モードでは `sticker_state` が出ないことを、ノード上の一行に添える（例「· no sticker_state」）。
- Sticker を複数つなげる入力（Autogrow。`sticker` と `sticker_state` を組で増やす必要があり、今は作らない。`docs/studio-node.md`）。
