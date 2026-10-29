# Engineering workflow

`AGENTS.md` の Working principles を実行する手順を定める。原則は `AGENTS.md` に書き、ここでは言い直さない。

## Language

- Project prose language: Japanese

`AGENTS.md` と skill の本文は English で記述する。schema、identifier、template heading、tool keyword、
canonical term は English を維持する。Issue、commit message、PR、ADR、この文書を含む repository documentation など、
人間が review する文章には Japanese を使用する。

## Branch

- default branch 上では repository file を変更しない。最初の repository 変更の前に、default branch から work branch を作る。
- 一つの作業は work branch から切った branch（worktree）で行い、終わったら work branch に merge する。
  main への PR は work branch から出す。

## 三種類の文書

| 文書 | 役割 | 変わり方 |
|---|---|---|
| Issue の specification | 変更の提案と承認の記録 | 承認後は履歴。現在の振る舞いの正ではない |
| living spec（`docs/`） | 今どう振る舞うか | 承認された差分でだけ変わる |
| ADR（`docs/adr/`） | なぜそう決めたか | 覆すときは新しい ADR を書き、古い方に superseded と記す。過去の ADR の本文は直さない |

- new feature と behavior change には、Issue の specification か、承認された living spec の差分を必要とする。
  一つの節に収まる変更は living spec の差分だけでよい。
- Issue の specification が承認されたら、その差分を living spec に反映する。実装は `GO` の後に行う。
- 経緯、review 依頼、作業指示は living spec に書かない（commit、PR、Issue、ADR に書く）。
- 複数 session、複数 agent、または単一 context window に安全に収まらない作業には ticket を使用する。
- specification と ticket の GitHub 公開には、それぞれ明示的な承認を必要とする。
- domain-doc approval は、承認された glossary または ADR の変更だけを許可する。

## Living specs

各 living spec は次の形を取る。

- 冒頭に「この spec が owner である規則」の表：規則 / 持っている code / 守っている test。
- その後に、今の振る舞いの短い説明。他の spec の規則は書き写さず、owner の節を参照する。
- Python と JS の両方が使う規則の parity fixture は `tests/fixtures/` に置く。

| subsystem | spec | code |
|---|---|---|
| state v2、評価関数、上流の上書き、Python/JS の一致 | `docs/scene-state-v2.md` | `core/scene_state.py`・`core/scene_eval.py`・`core/scene_inherit.py`、`web_src/pano_scene_state.js`・`pano_scene_eval.js`・`pano_scene_inherit.js` |
| 描画関数、3D ファイルの読み分け | `docs/render-contract.md` | `core/render.py`・`world_render.py`・`mesh_render.py`、`splat_render.py`・`scene_mesh.py`・`core_adapters.py` |
| Panorama Studio のノード（Timeline、素材の時間、出力、`ui`、`PANO_SCENE`、上流の Scene、Pose handoff） | `docs/studio-node.md` | `comfyui_pano_suite/nodes.py`・`scene_video.py`・`sticker_media.py`、`core/video_source.py` |
| Panorama Studio のノード上の表示（上端の bar と状態、実行の出力の表示、見回し、表示フレームと VIDEO） | `docs/studio-node-surface.md` | `web_src/pano_preview_runtime.js` の `attachPanoramaPreviewImpl`（Panorama Studio の表示）・`studioRunPicture`・`studioStatusOptions`・`surfaceTimelineMedia`、`pano_studio_status.js`・`pano_node_playback.js`、`components/PanoStudioNodeSurface.vue`、`nodes.py` の `PanoramaStudioNode.execute` の `pano_output_*`・`_studio_run_key` |
| 旧ノード（`PanoramaStickers`・`PanoramaPreview`・`PanoramaCutout`）のノード上の表示 | `docs/legacy-node-surfaces.md` | `web_src/pano_stickers_node_surface.js`・`pano_cutout_node_surface.js`・`pano_preview_previewnode.js`・`pano_preview_node_surface.js`・`pano_sticker_file_import.js`、`components/PanoStickersNodeSurface.vue`・`PanoCutoutNodeSurface.vue`・`PanoCutoutAspectPicker.vue`・`PanoPreviewNodeSurface.vue`、`pano_preview_video.js` の `createLoopingPreviewVideo` |
| Preview ノード | `docs/preview-node.md` | `nodes.py` の `PanoramaPreviewSceneNode`、`core/video.py` の `_fit_audio_to_frame_count` |
| メモリ・中断・キャッシュ・一時ファイル | `docs/runtime-resources.md` | `nodes.py` の `_render_memory`、`progress.py`、`core/cache.py`・`temp_files.py` |
| timeline、keyframe、背景の行、再生 | `docs/timeline-ui.md` | `web_src/pano_timeline.js`・`pano_video_playback.js`・`pano_node_playback.js`・`pano_port_media.js`・`pano_frame_batch.js`、`pano_editor_ui_state.js` の `buildTimelineModel`、`editor/timeline.js`・`timeline_actions.js`・`keyboard.js`、`components/PanoTimeline.vue`・`PanoTimelineGroup.vue`・`PanoEasingGraph.vue`、上流の層の行は `pano_upstream.js`・`editor/upstream.js`、Keyframe のない Lane の扱いは `pano_editor_state.js` の `unkeyedPose` |
| editor のコード構造と依存 | `docs/editor-architecture.md` | `web_src/pano_editor.js`（組み立てと配線の区画）、`editor/modules.js`、`editor/*.js` の factory の形と import、`editor/render_loop.js` の `requestDraw`、`pano_paint_layers.js`・`pano_surface_paint.js`・`editor/paint_layers.js`（ペイントの層の部品）、`pano_node_bridge.js` |
| three.js / Spark（3D の表示、エディタでの描画） | `docs/threejs-spark-integration.md` | `web_src/pano_three_view.js`・`pano_editor_view.js`・`pano_spark_views.js`・`pano_pick.js`・`pano_scene_items.js`・`pano_scene_loaders.js`・`pano_frame_scheduler.js`・`pano_preview_view.js`、`pano_space.js` の描画の部品（`spaceCamera`・`stickerContentRequest`・`cameraFrustumSegments` など）、`vite.lib.config.js` |
| editor の操作と視点（視点の操作、`world` の Sticker と Camera の編集、Panorama Studio のエディタ、上流の Scene の編集、`port` の Sticker の同期と Pose handoff の表示、インスペクタの行） | `docs/editor-interaction.md` | `web_src/pano_space.js`・`pano_view_controls.js`・`pano_view_keys.js`・`pano_view_transition.js`・`pano_view_memory.js`・`pano_upstream.js`・`pano_port_handoff.js`・`pano_external_sticker_sync.js`、`pano_editor_state.js`（`setWorldStickerTransform`・`setCameraShot`・`newStudioCamera` など）、`pano_editor_ui_state.js`（`floatingRightState`・`inspectorRows` など）、`editor/space.js`・`camera.js`・`frame_view.js`・`upstream.js`・`external_stickers.js`・`selection.js`、`components/PanoFloatingRight.vue`・`PanoSidePanel.vue`・`PanoUpstreamOrigin.vue` |
| 空間と視点（新しい UI の Panorama Studio のエディタと Preview のウィンドウ：視点が一つ、開いたときの視点と Reset View、目の高さ `E` から求める上限、世界の境界、注視点 `T`、注視点までの距離で決めるパン・ホイール・前後の量、マウスとキーの割り当て、カーソル、視点の操作の部品、地面のグリッドと原点の印、World の物のガイド、Add とドロップの着く所、Preview のウィンドウの手触り） | `docs/space-and-view.md` | （新しい UI、未実装）`web_src/studio/view_scale.js`・`view_camera.js`・`view_input.js`・`world_guides.js`・`landing.js`・`preview_motion.js`、`web_src/components/studio/StudioNavWidget.vue`。使う下の部品は `pano_space.js`（`viewAxes`・`orbitView`・`frameView`・`fitDistance`・`frameSphere`・`projectPoint`）、`pano_three_view.js` の `pick`、`pano_view_keys.js`、`pano_wheel.js`、`pano_view_memory.js`、`pano_interaction_controller.js` の慣性 |
| Vue と JS の境界 | `docs/vue-ui-boundary.md` | `web_src/components/PanoModal.vue` とその部品（`PanoPaintOverlays.vue`・`PanoImageFilePicker.vue`・`PanoSidePanel.vue`・`PanoSelectionMenu.vue`・`PanoConfirmDialog.vue`・`PanoTooltip.vue`・`PanoTimeline.vue` など）、`pano_editor.js` の Vue の mount と ref の受け取り、`pano_editor_ui_state.js` の data builder |
| 見た目（色・文字・余白・角丸・高さ・影・動き・重なり順、共有の部品の class、アイコン） | `docs/design.md` | `web/pano_editor.css`、`web_src/pano_styles.js` の `installPanoSuiteStylesheet`、`web_src/icons.js`・`components/SvgIcon.vue`・`PanoIconButton.vue` |

### 整理

登録した spec は、2026-10-09 に上の形に揃えた。spec の間で重複している規則が見つかったら、owner を一つに決め、
ほかの spec からは参照する。

`docs/` 直下に置くのは、登録された living spec と、手順・計測の文書（`diagnostics.md`、`legacy-baselines.md`）だけとする。

## 作業の始め方

一つの作業を始める前に、Issue か `AGENT_STATE.md` に次の 3 行を書く。

- 狙い：この変更で使う人が何を得るか（一文。「〜のような」で済ませず、何が嬉しいのかまで分解する）
- 作らないもの
- 最初に端から端まで動かす 1 本（準備の層ではなく、狙いを体験できる瞬間を選ぶ）

狙いそのものを変えるときは、今の作業に継ぎ足さず、別の作業にする。方向を探るのは Prototype の中で行う。
UI を変える作業は、`docs/agents/ux-principles.md` に照らす。

作業中に浮かんだ新しい案はすぐ作らず、「次の候補」として積む。積む先は Issue とし、公開の承認を得るまでは
`AGENT_STATE.md` に置く。今の作業が終わってからまとめて検討する。

## 方向を変えるとき

ユーザーは完成形を見てから発想することが多い。方向の変更は前提とし、部分を継ぎ足さない。
behavior change ごとに、agent は次のどちらかを理由を一言添えて提案する。ユーザーは切り替えられる。

- **Spec-first（既定）**：要望を living spec の差分にして見せる。差分は追記の行だけでなく、変更後の節全体で見せる。
  spec の他の箇所との矛盾は一問ずつ質問する。差分の承認は spec の編集だけを許可する。
- **Prototype**：見て触らないと決められないもの（配置、操作感、見た目）は、試作であることを明示して別 branch で作る。
  tests と review は要らない。決まったら、分かったことを living spec の差分と test にしてから作る。

歯止め：

- 一問には一つの決定だけを入れる。選択肢の中に別の決定を混ぜない。一度に聞くのも一問にし、残りは答えの後で聞く。
- 質問には推奨案を一つと根拠を添え、すぐ答えられる形にする。
- 実装の都合で操作や見た目を妥協するときは、spec の差分の中でそれを明示する。
- 見た目と操作感の提案と結果は、言葉ではなく画面（`tests/browser/` の場面の画像など）で見せる。直しは、印を付けた画像か
  数値（px・ms・frame）で受け取る。同じ指摘を 2 回受けたら、spec か `docs/design.md` に書く。
- 操作感と見た目に効く数値は、spec では名前で書き、code では一か所の定数に置く。Prototype では、離れた値を並べて
  比べてから絞る。
- 見つかった bug は、まず spec と照らす。code が違うのか、spec が違うのか、spec が書いていないのか。
- 一つの Issue の中で同じ節を 3 回目に変えるときは、継ぎ足しではなく節の作り直しを提案する。
- 一つの Issue の中で同じ症状を 2 回目に直すときは、手を止めて原因の設計を見直す。
- 回数は agent が `AGENT_STATE.md` に記録して数える。

## 境界をまたぐ変更の設計

`AGENTS.md` の原則 4 に当たる変更は、code の前に次を Issue か spec の節に書いて合意する。

- 作らないもの
- どの規則をどこが持つか（owner）
- data の流れ
- 一致を守る test（parity fixture の有無）
- 考えた別案と、選ばなかった理由

## Authorization

- `GO` は implementation、tests、internal review、および review で見つかった安全な修正を許可する。
- `GO` は commit、push、Issue/PR 投稿（監査結果の投稿を含む）を許可しない。
- authorization boundary を広げる必要が生じた場合は、変更前に停止して承認を求める。

## Implementation

- new behavior と bug fix は、事前に合意した public seam に対する TDD で実装する。
- documentation、comment、behavior-preserving mechanical change、generated file、external configuration では例外を認める。
- emergency change は理由を記録して先に入れてよいが、regression test が入るまで Issue は閉じない。
- node ID、port semantics、parameter format、ERP coordinate convention は `AGENTS.md` の stop condition に従う。
- refactor の commit では test を変えないことを目安にする。
- bug fix の commit message には `原因:` と `同じ原因の他の箇所:` の行を入れる。

## 並列作業

- 並列で agent に作業を出すときは、各 agent が担当する範囲を `AGENT_STATE.md` に書く。
  Living specs の表の code 列が埋まるまでは、ファイルの一覧で書く。
- work branch に merge する前に、`git diff --name-only` が担当の範囲に収まっていることを確かめる。
- ComfyUI-dev の起動と停止は main session だけが行う。subagent は server を起動しない。

## Verification

- 描画、WebGL、動画再生、pointer 入力に触れる変更は、review の前に `npm run test:browser` を通す。Playwright が
  Vite の開発サーバーを 127.0.0.1 で起動し、`tests/browser/pages/` のページを headless Chromium で開いて、
  コンソールのエラーが無い、タブが落ちない、WebGL context が失われない、決まった場面が空でなく描ける、を確かめる。
  場面に使う動画や 3DGS はページの中で作り、リポジトリに素材のファイルを置かない。
- 走った描画方式（GPU か SwiftShader か）は test の出力の `renderer:` 行に出る。review に渡す検証結果に書く。
- Chromium は Playwright が `~/.cache/ms-playwright` に置くものを使う。無ければ、初回だけ `npx playwright install chromium`
  で入れる。これはネットワークからの download なので、ユーザーの承認を得て行う。
- 触れた振る舞いを確かめる場面が無ければ、`tests/browser/` に足す。足した場面は、守る対象を外すと落ちることを一度確かめる。
- `npm run test:browser` と ComfyUI-dev を相手にする検証は main session が回す（どちらも server を起動する）。
- 見た目を変えないはずの変更（CSS の整理など）は、`node tools/ui_snapshot.mjs <dir>` で動いている ComfyUI-dev の
  Panorama Studio と旧ノードのノード上の表示、エディタのいくつかの状態の computed style と画面を記録し、
  `--web <worktree>/web` を付けた記録と `node tools/ui_snapshot_diff.mjs` で比べて、差が無いことを確かめる。
  Node 2.0 の on と off の両方で比べる（`--vue-nodes`）。この道具は ComfyUI の設定や作業データに書き込まない。
- milestone（Review 節で定義）ごとに、GPU に依存する振る舞いをユーザーの実機の GPU で確かめる。

## Review

- milestone は、一つの Issue を閉じる前と、main への PR の前とする。
- complete uncommitted working tree を Standards と approved Spec の両方に対して review する。
- severity は P0 / P1 / P2 / P3 を使用し、P0 と P1 は commit blocker とする。
- behavior-changing commit の前に、approved requirements、存在する spec と tickets、関連 domain docs、diff、verification results を使った独立した read-only AI review を行う。
- finding は implementation session へ返し、P0 または P1 の修正後は再 review する。
- review は diff だけでなく、変更したファイル全体と、関係する living spec を読む。
- milestone ごとに、会話の文脈を持たない reviewer が、影響した subsystem の code 全体を living spec と突き合わせて監査する。
  範囲は正しさと spec とのずれ（同じ規則の重複、使われていない code を含む）に限り、好みの改善は挙げない。
  監査は work branch に merge した後に行い、living spec と work branch の code が一致していることを確かめる。結果は承認を得て Issue に残す。
- milestone ごとに、次の候補と開いている Issue を見直す。作らないものは理由を一行書いて閉じる。途中で止めた Issue と
  spec の差分を、開いたまま残さない。
- milestone ごとに、実際の ComfyUI-dev で、新しい graph に node を置いて最初の結果を得るまでを、内部を知らない人の
  つもりで通す。詰まった所と、反応のない操作を記録する。
- milestone ごとに、機能を足さずに見た目と操作の粗を一覧にして直す回を入れてよい。

## Commit, push, and PR

- commit packet を提示した後、commit には明示的な承認を必要とする。
- work branch への merge は、何を merge するか（作業の要約、変わるファイル、検証の結果）を示し、merge ごとに明示的な承認を得る。
- 試作 branch への commit は承認を要らない。
- push と PR creation には、commit とは別の承認を必要とする。
- PR は Draft を既定とする。
- Draft PR を ready にするのは、CI 成功後かつユーザー承認後だけとする。
- main への merge は初期 workflow の範囲外とする。
