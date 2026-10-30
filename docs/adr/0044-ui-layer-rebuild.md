# ADR 0044: Panorama Studio と Preview の UI の層を組み直す

## Status

Accepted（2026-10-14。ノードは一つのまま組み直す）

一部を置き換える：ADR 0041 の「ウィンドウでは `PanoModal.vue` の `viewer` の配置で描く」（新しい Preview のウィンドウは新しい UI の外枠で描く）。

一部（「旧ノードの UI」の節の「それまでは古い UI を守る test も残す」と、「test」の節の「旧ノードの UI を守るものは旧ノードと一緒に残る」）を ADR 0050 が置き換えた（2026-10-31。旧ノードの UI の source-text test も消し、振る舞いの test と browser の場面に置き換える）。

## Date

2026-10-14

---

## 背景

機能の段（3D ファイル、DA3、Preview の `PANO_SCENE`、レンズ、glTF のアニメーション）と締め（段階 1〜3）が終わり、UI/UX の段に入る。
今のエディタの UI は、旧 Stickers のエディタに Cutout、Panorama Studio、Preview を継ぎ足して育った。

- エディタは一つ（`web_src/pano_editor.js` の `showEditor(node, type)`）で、旧 `PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`（legacy、読み取り専用）と Panorama Studio を開く。
  Panorama Studio は `type === "stickers"` に `node.__panoStudio` を足した分岐で、旧ノードの分岐と同じファイルに混ざっている。
- 新しい Preview（`PanoramaPreviewNode`、表示名 Panorama Preview）は、`PANO_SCENE` を受けたときは別の組み立てのウィンドウ
  （`web_src/pano_scene_viewer_window.js`、ADR 0041）を開き、IMAGE と VIDEO を受けたときは旧エディタを読み取り専用で開く
  （`web_src/pano_editor_extension.js` の `openMedia`）。ウィンドウも外枠の `PanoModal.vue`・`modal_shell_presets.js`・
  `pano_editor_ui_state.js` を旧エディタと共有する。
- 入口は一つ：bundle の entry は `web_src/pano_editor.js`（`vite.lib.config.js`）で、ノードの登録（`createPanoEditorExtension`）もここから行う。
- UI の層の量：`pano_editor.js` 1018 行、`web_src/editor/*.js` 約 13300 行、`web_src/components/*.vue` 30 本。UI を確かめる test の多くは
  ソースの文字列を読む test である。
- 実機で積み残した UI の問題（Camera の欄が使いにくい、どちらの空間にいるか分からない、3DoF に戻ると Camera の枠が邪魔、
  ERP origin の意味、読み込み中の見せ方、イージングの UI など）は、継ぎ足しでは直らない形のものが多い。

オーナーの決定：

- repo は作り直さない。UI の層（モーダル、インスペクタ、操作の配線、`pano_editor.js` の bridge）を新しく組み直し、
  下の部品（状態、タイムライン、3D の表示と pick、レンズ、アニメーション、履歴）は使い続ける。古い UI と UI の source-text test は、
  作り直しと一緒に消す（2026-10-11）。
- 旧ノードのエディタは古い UI のまま残す。新しい UI は Panorama Studio と新しい Preview にだけ作る。
  「昔のノードは昔のまま、新しいものは新しいものでスッキリ」（2026-10-14）。この決定は 2026-10-11 の「古い UI を消す」を狭める：
  古い UI のうち旧ノードも使う部分は、旧ノードの登録を外すまで残る。

## 決定

### 範囲

- 新しい UI の層が受け持つのは、Panorama Studio のエディタと、新しい Preview のウィンドウの UI 全体：外枠、ツールとボタンの群、
  インスペクタ、メニューとピッカー、ダイアログ、タイムラインの表示と操作、ポインタとキーの配線、それらを組み立てる bridge。
- Panorama Studio のペイントとマスク（今の Paint・Mask の道具。`first_frame_mask` はペイントのマスク）は、新しい UI でも作る。
  下のペイントの部品はそのまま使う（オーナーの決定、2026-10-14）。
- 新しい Preview のウィンドウは IMAGE と VIDEO を受けたときも新しい UI で開き、旧エディタを使わない（オーナーの決定、2026-10-14）。
- ノード上の表示（`docs/studio-node-surface.md`、`pano_preview_runtime.js` と `*NodeSurface.vue`）はこの ADR の範囲に入れない。
  変えるときは通常の spec の差分で扱う。切り替えでは、ノード上の表示がエディタを開く callback だけを新しい入口に向ける。

### 下の部品（使い続ける）

次は作り直さず、新しい UI から呼ぶ。振る舞いを変えるときは、これまでどおり各 living spec の差分による。

| 部品 | 主な code | spec |
|---|---|---|
| 状態、評価、上流の上書き、状態を編集する関数 | `pano_scene_state.js`・`pano_scene_eval.js`・`pano_scene_inherit.js`・`pano_editor_state.js`・`pano_upstream.js`・`pano_upstream_layers.js` | `docs/scene-state-v2.md`、`docs/editor-interaction.md` |
| タイムラインの模型と Keyframe の記録、再生 | `pano_timeline.js`・`pano_video_playback.js`・`pano_node_playback.js`・`pano_port_media.js` | `docs/timeline-ui.md` |
| 3D の表示と pick、視点の数学 | `pano_three_view.js`・`pano_editor_view.js`・`pano_spark_views.js`・`pano_pick.js`・`pano_scene_items.js`・`pano_scene_loaders.js`・`pano_frame_scheduler.js`・`pano_frame_batch.js`・`pano_space.js`・`pano_space_navigation.js`・`pano_view_*.js`・`pano_interaction_controller.js`・`pano_wheel.js`・`pano_scene_viewer.js`・`pano_preview_view.js`、幾何と数学（`pano_math.js`・`pano_camera_math.js`・`pano_cutout_view_math.js`・`pano_sticker_geometry.js`・`pano_sticker_affordance.js`・`pano_world.js`・`pano_depth_grid.js`・`pano_depth_color.js`） | `docs/threejs-spark-integration.md`、`docs/editor-interaction.md` |
| レンズ、アニメーション | `pano_lens.js`・`pano_lens_glsl.js`・`pano_animation.js` | `docs/render-contract.md` ほか |
| ペイント | `pano_paint_engine.js`・`pano_paint_layers.js`・`pano_paint_history.js`・`pano_paint_types.js`・`pano_surface_paint.js`・`pano_brush_presets.js`・`pano_raster_object_surface.js` | `docs/editor-architecture.md`、`docs/scene-state-v2.md` |
| 履歴 | `editor/history.js` の `historySnapshot`・`createEditorHistory`、`pano_paint_history.js` | `docs/editor-architecture.md` |
| `port` の Sticker の同期と Pose handoff | `pano_port_handoff.js`・`pano_external_sticker_sync.js` | `docs/editor-interaction.md`、`docs/studio-node.md` |
| 素材の読み込みとアップロード | `pano_comfy_media.js`・`pano_sticker_file_import.js`・`pano_file_3d.js`・`pano_image_state.js`・`pano_shared_image_cache.js` | `docs/editor-interaction.md`、`docs/threejs-spark-integration.md` |
| ノードとの橋渡し、寿命、診断 | `pano_node_bridge.js`・`pano_timers.js`・`pano_diagnostics.js` | `docs/editor-architecture.md`、`docs/diagnostics.md` |

「タイムライン」は模型・記録・再生を指す。タイムラインの Vue の部品（`PanoTimeline.vue`・`PanoTimelineGroup.vue`・`PanoEasingGraph.vue`）と、
`editor/timeline*.js` の操作の配線は UI の層に数える。

古い UI の側にも、spec の表で規則の owner に挙がっている関数がある（`editor/*.js` の `render_loop.js` の `requestDraw`、
`media_session.js`、`external_stickers.js`、`upstream.js`、`items.js`、`projection.js`、`object_geometry.js`、`paint_layers.js`、`commit.js`、
`sticker_import.js`、`timeline.js`、`camera.js`、`pointer_transform.js` のジェスチャーの写し、`pano_editor_ui_state.js` の `inspectorRows`・
`buildTimelineModel`・`buildEasingModel`・`cameraAspectChoices` など）。最初の画面の作業の前に、これらを棚卸しし、下の部品へ移すもの
と UI として作り直すものに分けた一覧を Issue にする。

### 新旧の境

- 新しい UI の JS は `web_src/studio/` に、Vue の部品は `web_src/components/studio/` に置く（AGENTS.md の Non-negotiables 6 の
  `web_src/components/` に従う）。
- 新しい UI は古い UI のファイルを import しない。古い UI も新しい UI を import しない。この向きは、今の
  `tests/web_src_import_cycles.test.mjs` と同じく静的な import をたどる test で守る。
  - 古い UI のファイル：`pano_editor.js`、`web_src/editor/*.js`、`pano_editor_ui_state.js`、`modal_shell_presets.js`、
    エディタのモーダルの Vue の部品（`PanoModal`・`PanoToolRail`・`PanoFrameRail`・`PanoFrameRollKnob`・`PanoPaintDock`・
    `PanoPaintOverlays`・`PanoSidePanel`・`PanoSelectionMenu`・`PanoSegments`・`PanoConfirmDialog`・`PanoTooltip`・`PanoImageFilePicker`・
    `PanoFloatingRight`・`PanoViewToggle`・`PanoUpstreamOrigin`・`PanoEasingGraph`・`PanoTimeline`・`PanoTimelineGroup`・`PanoCutoutAspectPicker`）。
  - どちらでもないもの：ノード上の表示（`pano_preview_runtime.js` ほか、`*NodeSurface.vue`・`*NodeHelp.vue`）と、新旧とノード上の表示が
    共有する部品（`SvgIcon.vue`・`PanoIconButton.vue`・`PanoViewUnavailable.vue`・`PanoVideoTransport.vue`、`icons.js`、`pano_styles.js`）。
    共有の Vue の部品は `web_src/components/shared/` に移す。
- bundle の入口とノードの登録は、新旧のどちらでもない薄い組み立てのモジュール（`web_src/main.js`）に移し、`vite.lib.config.js` の entry に
  する。ここだけが新旧の両方を import し、ノードの種類ごとにどちらのエディタを開くかを決める。`pano_editor_extension.js`
  （ノードの登録、エディタを開く配線）は橋渡しの層に数える。
- 新しい UI が使いたい部品が古い UI の側にあるときは、写さずに、先に下の部品の層（または共有の部品）へ移す。移すのは振る舞いを
  変えない commit とし、古い UI もその移した先を使う。写しを二つ持たない（AGENTS.md の Working principles 1）。
- 見た目の値（`docs/design.md`）は共有する。新しい UI で値を決め直すときは token を足し、古い UI の見た目は変えない。

### 旧ノードの UI

- 旧 `PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`（legacy）のエディタとノード上の表示は、今の UI のまま凍結する。
  直すのは壊れたとき（下の部品の変更で落ちたときを含む）だけで、改善はしない。
- 古い UI を消すのは、旧ノードの登録を外すとき（別の ADR）。それまでは古い UI を守る test も残す。

### 置き換えの進め方

- 新しい UI は画面ごとに作る：空間と視点 → 選択と編集 → タイムライン → 反応と分かりやすさ（2026-10-09 に承認した UI の段の順）。
  各画面は、持ち主に目的を確かめ、living spec の差分を承認してから作る。
- 作っている間、Panorama Studio と Preview は古い UI で開き続ける。新しい UI は開発の間だけの入口で開く。入口は、使う人には既定で
  閉じていて（ComfyUI の設定など）、閉じているときは今の UI を何も変えない。形は最初の画面の作業で決める。
- 新旧が並ぶのは work branch（`feat/scene-timeline`）の上だけとする。Panorama Studio と Preview の両方を新しい UI に切り替えてから main に出す。片方だけ先に main に出すことはしない（オーナーの決定、2026-10-14）。
- 新しい UI が Panorama Studio（または Preview）の今の操作を全部置き換えた時点で、`web_src/main.js` の配線を新しい UI に向け、
  同じ change で、古い UI から Panorama Studio（Preview）だけの分岐（`node.__panoStudio`、`modal_shell_presets.js` の `studio` と `viewer`、
  `pano_scene_viewer_window.js`（外枠。中身の `pano_scene_viewer.js` は残る）など）、それだけが使う code・Vue の部品・test・spec の記述と、開発用の入口を消す。

### test

- 新しい UI の test は、public な継ぎ目での振る舞いの test と、`tests/browser/` の場面にする。ソースの文字列を読む test は作らない。
- 古い UI の source-text test は、守る対象が消える change で一緒に消す。旧ノードの UI を守るものは旧ノードと一緒に残る。
  部品を下の層へ移す commit は、これらの test の読む先を直すことがある。

### living spec

- `docs/editor-interaction.md`・`docs/timeline-ui.md`・`docs/vue-ui-boundary.md`・`docs/editor-architecture.md`・`docs/preview-node.md` の
  「大きなウィンドウ」は、今は古い UI を書いている。新しい UI の画面ごとに、その画面の規則を新しい UI の code に向けて書き直し、
  旧ノードだけの規則は新しい文書 `docs/legacy-editor.md` へ移して `docs/agents/workflow.md` の Living specs の表に登録する。
- `docs/vue-ui-boundary.md` の「Vue に渡す UI のモデルは `pano_editor_ui_state.js` の data builder に置く」は、新しい UI では
  `web_src/studio/` の中の data builder に置き換える。
- 下の部品の規則は今の spec のまま owner を変えない。

## 考えた別案

| 案 | 選ばなかった理由 |
|---|---|
| repo を作り直す | 状態、評価、描画、レンズ、アニメーションは実機で確かめ、Python との一致を test で守っている。作り直すとそれを失う（オーナーの決定） |
| 今の UI を画面ごとに直していく | Panorama Studio の分岐が旧ノードの分岐と同じファイルに混ざり、直すたびに旧ノードを壊す恐れがある。積み残しの多くは継ぎ足しの形から来ている |
| 旧ノードも新しい UI に移す | Cutout の枠や旧 Stickers の画面など旧ノードだけの画面まで作り直すことになり、UI の段の範囲が倍になる（オーナーが A を選んだ） |
| 旧ノードのエディタを開けなくする | 既存の graph の使い方を壊す（AGENTS.md の Non-negotiables 1） |
| 新旧で部品を写して持つ | 規則の写しが二つになり、ずれる（Working principles 1） |
| 新しい UI を古い UI と同じ `web_src/editor/` に足す | 新旧の境が import の test で守れず、古い UI を消すときに切り分けが要る |
| 新しい Preview のウィンドウを `PanoModal.vue` の `viewer` の配置のまま残す | `PanoModal.vue` は古いエディタの外枠で、新しい UI がそれを import すると新旧の境が無くなる |
| 入口を `pano_editor.js` に残す | 古い UI のファイルが新しい UI を import することになり、境の test が成り立たない |

## Consequences

- しばらく二つのエディタの UI が work branch の上に並ぶ。下の部品を変える change は、新旧両方の test を通す。
- 切り替えで消えるのは、古い UI のうち Panorama Studio と Preview だけが使う分岐で、量は少ない。`editor/*.js` の大部分と
  エディタのモーダルの Vue の部品は旧ノードが使うので、旧ノードの登録を外すまで凍結して残る。
- 部品を下の層へ移す commit が、新しい UI の作業の前に入る。振る舞いは変えない。最初の commit は入口の `web_src/main.js` と
  共有の部品の `web_src/components/shared/` である。
- AGENTS.md の Non-negotiables 6（モーダルの UI は Vue、`web_src/components/`）は新しい UI にもそのまま当てはまる。
- `docs/agents/workflow.md` の Living specs の表は、新しい UI の画面ができるごとに code の列を書き換える。
