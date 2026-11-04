# ADR 0062: Panorama Studio をいつも新しいエディタで開き、古い UI から Panorama Studio の道を消す

## Status

Proposed（2026-11-04）

ADR 0044 の「置き換えの進め方」の次の部分を置き換える：

- 「新しい UI が Panorama Studio（または Preview）の今の操作を全部置き換えた時点で」（古い UI の Panorama Studio の道を消す時）。
  新しい UI にまだ無い操作が残っていても消す（下の「決定」）。
- 開発用の入口（後に ComfyUI の設定 `PanoramaSuite.Editor.NewUI` になったもの）を残す期間。古い UI を消す時ではなく、この change で消す。
- 「新旧の境」の古い UI のファイルの一覧から、`PanoUpstreamOrigin`・`PanoEasingGraph`・`PanoTimeline`・`PanoTimelineGroup` を外す
  （ファイルごと消すため）。

## Date

2026-11-04

---

## 背景

ADR 0044 は、新しい UI を作っている間、Panorama Studio と Preview を古い UI で開き続け、新しい UI は使う人には閉じた入口で開くと決めた。
入口は ComfyUI の設定 `PanoramaSuite.Editor.NewUI`（表示名「Panorama Studio: new editor」）になり、2026-10-30 に持ち主が既定をオンにした。
オフにすると古い UI で開く。残した理由は、新しい UI にペイントとマスクがまだ無かったことだった。`docs/studio-ui.md` は「古い UI を消す
change でこの設定を消す」としていた。

今の状態（2026-11-04 に確かめた）：

- ペイントとマスクは新しい UI にそろった。
- 設定が残っている間は、古いエディタの中の Panorama Studio の分岐（26 のファイル（`pano_editor.js`・`modal_shell_presets.js` と `editor/*.js` の 24）で、`studio`・`stateV2`・`sceneV2`・`cameraV2` を
  見る行がおよそ 140 行）と、Panorama Studio だけが使うモジュールと Vue の部品を、ほとんど使われない道として守り続けることになる。
  Preview も、設定がオフのときだけ古いウィンドウ（`pano_scene_viewer_window.js`）と古いエディタの読み取り専用で開く。
- 新しい UI にまだ無いのは、Replace、複数選択のバー、開いている間のリンクの変更の反映、Set ground の 4 つ。Set ground はボタンだけが
  あり、押しても何も起きない。

持ち主の決定（2026-11-04）：設定を消す（「Q1：消す」）。Set ground のボタンは、作るまで画面から消す（「Q2」）。

## 決定

### 開き方

- 設定 `PanoramaSuite.Editor.NewUI` を消す。Panorama Studio のエディタは、いつも新しい UI で開く。古い UI へ戻す道は無い。
- エディタを選ぶ所（`web_src/editor_choice.js` `createEditorChooser`）は、`PanoramaStudio` のノードを、読み取り専用の求めでも新しい UI に
  送る。Panorama Studio のノードは古い UI の `showEditor` に届かない（今、Panorama Studio のノードを読み取り専用で開く入口は無い）。
- 新しい Preview（`PanoramaPreviewNode`）の読み取り専用の開き方も、設定を見ない：
  - `source` に IMAGE か VIDEO をつないだとき、何もつないでいないとき：いつも新しい Preview のウィンドウで開く。ノード上の右上の
    ボタンはいつも `Open viewer`。
  - `source` に `PANO_SCENE` をつないだとき：ノード上の Scene のビューアの `Open viewer` は、いつも新しい Preview のウィンドウを開く。
  - link はあるが型が分からないとき（型の無い Reroute を通したときなど）：今までどおり古いエディタを読み取り専用で開く。この道は
    設定に関係なく今もあり、この ADR では変えない。
- 旧ノード（`PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`（legacy））の開き方は変えない（ADR 0044 の「旧ノードの UI」）。
- 新しいエディタの先読み（three.js のチャンクと stylesheet）は、設定を見ずに、ComfyUI を開いた後の手の空いた時にいつも行う。

### 保存された設定の値

- ComfyUI が保存している `PanoramaSuite.Editor.NewUI` の値は、読まないだけで、消しも書き換えもしない。
  消すには ComfyUI の設定を書く処理が要り（AGENTS.md の「No file I/O」）、読む所が無いので残しても何も変わらない。

### 古い UI から消すもの

- Panorama Studio だけが通る道：`node.__panoStudio`（`__panoSceneStateV2`）を見て分かれる古いエディタの分岐と、その分岐からしか
  呼ばれない関数。古いエディタを開くノードは旧ノードと Preview の読み取り専用だけになり、そこでは `studio`・`stateV2`・`sceneV2`・
  `cameraV2` がいつも偽になるので、これらの分岐は通らない。
- 丸ごと消すモジュールと部品（どれも Panorama Studio の道からしか使われないことを確かめた）：`editor/upstream.js`・
  `editor/pointer_world.js`・`editor/timeline_actions.js`・`editor/timeline.js`、`pano_scene_viewer_window.js`、`PanoTimeline.vue`・`PanoTimelineGroup.vue`・
  `PanoEasingGraph.vue`・`PanoUpstreamOrigin.vue`、`modal_shell_presets.js` の `studio` と `viewer`、`PanoModal.vue` の `viewer` の配置。
- `editor/space.js` は、旧ノードも使う部分（Reset View などの視点の遷移、閉じたときの視点の記憶、ペイントを見せるか）があるので、
  Panorama Studio の部分だけを消す。`editor/timeline.js` のうち旧ノードも使う部分（旧 VIDEO トランスポートの再生と一時停止
  `togglePlayback`、実行結果を受けたときの VIDEO の読み直し `applyRunResult`、背景の `bg_color` の `backgroundColor`）は
  `editor/media_session.js` へ移し、`editor/timeline.js` は丸ごと消す。
- 共有の部品のうち、古い UI の Panorama Studio の道からしか呼ばれなくなる関数も消す（例：`space/guides.js` の `cameraFrustumSegments`・
  `cameraTrajectory`、`pano_editor_state.js` の `newStudioCamera`、`space/placement.js` の `newWorldStickerTransform`・`newWorld3dStickerTransform`、
  `pano_editor_ui_state.js` の `buildTimelineModel`・`buildEasingModel`・`upstreamInspectorModel`）。ノード上の表示が使う `editorActive`・
  `setEditorActive` と、Python との一致を確かめる JS の写し `fit3dPosition` は残す。
- 古い UI に残る旧ノードの UI は、今までどおり凍結する（ADR 0044 の「旧ノードの UI」は変えない）。

### 新しい UI にまだ無いもの

- Replace、複数選択のバー、開いている間のリンクの変更の反映、Set ground は、この change では作らない（次の候補）。
- Set ground は、押しても何も起きない（エディタが受ける所が無い）。押せるのに何も起きないボタンは壊れて見えるので、ボタンだけでなく、
  インスペクタのモデルの `setGround`（`web_src/studio/inspector_model.js`）と編集の種類 `set-ground`（`inspector_actions.js`）ごと消す。
  Ground の行の 2 列目と 3 列目は空けたままにし、ほかの欄は動かさない。spec には未実装として残し、作るときにボタンを戻す。

### 変えないもの

- ノードの id、ポートの意味、パラメータの形、`state_json` の形（AGENTS.md の Non-negotiables 1）。
- Panorama Studio のノードの `properties.pano_editor_active`（選んでいる Sticker）：古いエディタが書く分は無くなるが、ノード上の表示は
  今までどおり読み書きする（`web_src/node_surface/state.js`・`editing.js`、`pano_editor_state.js` の `editorActive`・`setEditorActive`）。
  新しい UI のエディタは読まない。規則の owner は `docs/studio-node-surface.md`。

## 考えた別案

| 案 | 選ばなかった理由 |
|---|---|
| 設定を古い UI ごと消す時まで残す（ADR 0044 と `docs/studio-ui.md` の元の予定） | 古い UI を消すのは旧ノードの登録を外す時で、いつになるか決まっていない。それまでほとんど使われない道を守り続けることになる（持ち主の決定） |
| 新しい UI に 4 つの操作がそろってから消す | 設定を残した理由はペイントとマスクで、それはそろった。残りの 4 つのために古い道を守る理由は弱い |
| 保存された設定の値を消す | 設定を書く処理が要り、読む所が無いので消しても何も変わらない |
| Set ground のボタンを無効にして残す | 作る時期が決まっていない。理由の分からない無効のボタンが残る |
| 型の分からない link の Preview も新しいウィンドウで開く | 設定とは別の決定で、今回の範囲の外。今も設定に関係なく古い開き方をしている |
| 古いエディタを丸ごと消す | 旧ノードのエディタが使っている（ADR 0044） |

## Consequences

- 設定をオフにしていた人も、Panorama Studio を新しい UI で開くようになる。古い UI にだけあったもの（`docs/studio-ui.md` の
  「消すもの」の一覧と、上の 4 つ）は使えなくなる。保存した graph はそのまま読める。
- 設定をオフにしていた人の Preview は、IMAGE・VIDEO・何もつないでいない `source` で、ノード上の右上のボタンが `Fullscreen` から
  `Open viewer` に替わり、新しいウィンドウを開く。`PANO_SCENE` の `Open viewer` も新しいウィンドウを開く。
- 先読みは全員に起きる（今までは設定がオンの人だけ。既定はオンだったので、多くの人には変わらない）。
- ComfyUI の設定の画面から「Panorama Studio: new editor」（Panorama Suite › Editor › New editor）の項目が消える。「3D view controls」の
  項目は残る（Preview のノード上の Scene のビューアが使う）。
- 古い UI の Panorama Studio の振る舞いを守っていた test は消す。その中で共有の下の部品を確かめている case は、同じ change で部品の
  test に移す（`tests/editor_background_clip.test.mjs` の `pano_port_media.js` の case は `tests/pano_port_media.test.mjs` へ、`tests/editor_space_navigation.test.mjs` の視点の操作の case は `createSpaceNavigation` を直に呼ぶ `tests/pano_space_navigation.test.mjs` へ、`tests/editor_upstream.test.mjs` のうち層の素材の手放し方と描くものの case は `createUpstreamLayers` を直に呼ぶ形へ、`tests/editor_animation.test.mjs` のうちインスペクタの Clip・Speed の case を除く 3 つ（要求の姿勢、読み込み、Frame Selected の箱）は `tests/pano_scene_animation.test.mjs` へ。`tests/pano_space.test.mjs` のレンズの Camera の視錐台の case は、消す `cameraFrustumSegments` ではなく `cameraFrustumShape` を確かめる形に直す。`tests/editor_media_session_file_3d.test.mjs` と `tests/editor_frame_outline.test.mjs` は古い UI の Panorama Studio の道だけを確かめているので消す（問い合わせを一度だけ行うことは `tests/pano_file_3d.test.mjs` が確かめている））。
  Python と JS の上流の上書きの一致を確かめる test（`tests/test_upstream_editor_parity.py`）は、古いエディタの部品を使わず、共有の
  下の部品で一致を確かめる形に直す。
- living spec のうち、古い UI の Panorama Studio の code を規則の owner に挙げていた所（`docs/editor-interaction.md` ほか）は、この
  ADR と同じ spec の差分で、新しい UI の code か共有の部品に向け直すか、旧ノードだけの規則にするか、消した。
- 古い UI の Panorama Studio にだけあり、新しい UI に無いもの（使えなくなるもの）：`docs/studio-ui.md` の「消すもの」の一覧（Unwrap、
  3DoF / 6DoF の切り替えと 3D view controls のプリセット、Add to World、Camera の Delete と「Camera が無い」状態、360° の比率の
  プリセット、Roll のノブ、Copy State、Save・Cancel など）と上の 4 つのほかに、次がある。
  - three.js が 3D ファイルを読めないときの「Could not show <ファイル名>: <エラー>」の知らせ（新しい UI では未実装）。
  - Frame 表示で World の内容が無いときのホイールの知らせ「The wheel moves the Camera; change the H FOV to zoom」。
  - タイムラインに沿った Camera の軌道の線。
  - WASD / QE を Alt で遅くすること（ADR 0048 で新しい UI には入れないと決めた）。
  - 開いている間の `sticker` 入力のつなぎ替えをエディタが状態に反映すること（上の「開いている間のリンクの変更の反映」）。
  - 上流の Scene を受けたときの `bg_media is not used` の警告（実行結果の `pano_sticker_warnings`）をステージの下の案内の欄に出すこと
    （新しい UI では出す元がまだ無い。`docs/studio-ui.md` の「読み込み中と空の画面」の行）。
  - 開いたときにすでにある 3D ファイルの Sticker が読めない（経路が失敗を返す）ときに、その理由を一行に出すこと（古い UI の
    `file3dNotice`。新しい UI が出すのは、置いたときの失敗だけ）。
  - Panorama 表示・Unwrap 表示に Camera の枠を、像の縁を標本化した線で描くこと（新しい UI の Panorama 表示には Camera の枠が無く、
    Camera は 3D の印で描く。ADR 0048）。
