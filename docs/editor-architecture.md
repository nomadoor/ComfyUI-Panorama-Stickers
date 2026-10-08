# Editor architecture

Panorama のエディタ（Stickers、Cutout、Panorama Studio、Preview のモーダル）のコードの地図と、
依存の向きの決まりを定める：モジュールの形、依存の向きと import の循環、モジュールの一覧、描き直しの入口、
ペイントの層をフロントで並べる部品、ノードごとの実行時の状態の置き場（node bridge）、コードの足し方。

この文書が持たない規則：UI の DOM を Vue に置く決まり（`AGENTS.md` の Non-negotiables 6 と `docs/vue-ui-boundary.md`）、
視点・`world` の Sticker・Camera・上流の Scene の操作（`docs/editor-interaction.md`）、
描画のスケジュール・three.js と Spark で描く仕組み（`docs/threejs-spark-integration.md` の「エディタの描画を直接表示する」ほか）、
タイムラインと Keyframe の記録・再生（`docs/timeline-ui.md`）、Sky の重なり順そのもの（`docs/scene-state-v2.md` の「Sky の重なり順」）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| モジュールの形（`createX(deps)` の factory、`connect()` で受け取る名前と `let` の宣言、誰も渡していない名前は投げる） | — | `web_src/editor/modules.js` `createEditorModules`、`web_src/editor/*.js` の `createX` | `tests/editor_architecture.test.mjs`、`tests/editor_wiring.test.mjs`、`tests/editor_modules.test.mjs` |
| 依存の向き（`pano_editor.js` → `editor/*.js` → ライブラリ。`editor/*.js` は `pano_editor.js`・ComfyUI の `app` / `api`・振る舞いを持つモジュールを import しない） | — | `web_src/editor/*.js` の import | `tests/editor_architecture.test.mjs` |
| `web_src` の静的な import に循環を作らない | — | `web_src` の `*.js`・`*.vue` の import | `tests/web_src_import_cycles.test.mjs` |
| モジュールの一覧と配線（各 factory を `createEditorModules` で一度ずつ作る、配線の名前の過不足がない） | — | `web_src/pano_editor.js` の配線の区画、`web_src/editor/*.js` | `tests/editor_architecture.test.mjs`、`tests/editor_wiring.test.mjs`（下の Module map の責任の欄そのものは test しない） |
| キャンバスのポインターの操作の振り分け（押したときに始める操作を決める順、`editor.interaction.kind` ごとの動き・離す・取り消す、操作ごとのモジュール） | — | `web_src/editor/pointer_input.js`、`web_src/editor/pointer_*.js` | `tests/editor_pointer_input.test.mjs` |
| 描き直しは `requestDraw` からだけ頼む | — | `web_src/editor/render_loop.js` `requestDraw`・`tickFrame`・`drawScene` | — |
| ペイントの層をフロントで並べる部品（3 か所が同じ関数を使う、素材の渡し方、`painting` の正規化） | 比べ先は `core/render.py` `_sky_layers` | `web_src/pano_paint_layers.js` `skyPaintLayers`・`engineMask`、`web_src/editor/paint_layers.js` `buildEditorViewPaintLayers`、`web_src/pano_surface_paint.js` `surfacePaintLayers`、`web_src/editor/upstream.js` `paintLayers` | `tests/pano_paint_layers.test.mjs`、`tests/test_paint_layers_parity.py`、`tests/pano_surface_paint.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs` |
| ノードごとの実行時の状態は node bridge に置く（グループ、片付け、許可する `__pano*` の一覧） | — | `web_src/pano_node_bridge.js`、`web_src/pano_editor_extension.js` の `onRemoved` | `tests/pano_node_bridge.test.mjs`、`tests/pano_editor_extension.test.mjs` |

エディタのソースの形を確かめるテストは、`tests/editor_source.mjs`（`readEditorSource()`）・
`tests/editor_source.py`（`editor_source()`）で `pano_editor.js` と `web_src/editor/*.js` の全部を読む。

## Overview

エディタは `web_src/pano_editor.js` の `showEditor(node, type, options)` が開く。
コードは次の 3 層に分かれている。

| 層 | ファイル | 役割 |
| --- | --- | --- |
| Composition | `web_src/pano_editor.js` | 値を作り、モジュールを作ってつなぎ、イベントを登録し、閉じる・起動する |
| Editor modules | `web_src/editor/*.js` | 責任ごとの振る舞い。`createX(deps)` の factory |
| Libraries | `web_src/pano_*.js` ほか | 状態、評価、数学、描画（three.js）、UI のモデル。エディタを知らない |

`pano_editor.js` に残るのは次だけ。

1. ノードの widget と state の読み込み、`uiState`（Vue に渡す reactive）、Vue のモーダルの mount、
   ブリッジとして使う DOM の参照。
2. エディタの共有の値：`state`、`editor`、`timeline`、`runtime`、`scheduler`、`dragFrames`、
   `editorView`、`viewController`、キャッシュの Map、静止画のキャンバス。
3. 配線の区画（`createEditorModules`）。
4. DOM のイベントの登録（本体はモジュールの関数）、`closeEditor`、起動の手順（`runBootStep`）。

## Module shape

```js
export function createHistory(deps) {
  const {
    editor, readOnly, state,            // showEditor が配線の前に作った値
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let requestDraw, syncPaintUi;         // 他のモジュール・showEditor の関数

  function pushHistory() { ... }        // 本体は deps と connect() の名前だけを使う

  return {
    connect(api) {
      ({ requestDraw, syncPaintUi } = api);
    },
    pushHistory,                        // 他が使う名前
  };
}
```

- `deps` から受け取るのは、配線の区画より前に作られ、その後で別の値に置き換えられない値。
  中身を書き換えるオブジェクト（`state`、`editor`、`runtime` など）はそのまま共有する。
- 他のモジュールの関数は `connect()` で受け取る。`createEditorModules`（`editor/modules.js`）は
  全部の factory を作ってから各 `connect()` を呼ぶので、モジュールは双方向に呼び合える。
- 再代入する `let` は、一つのモジュールが持つ。他のモジュールは関数で読み書きする
  （例：`editorViewFrameInput` は `view_input.js` が持ち、`drawScene` は `endEditorViewFrame()` を呼ぶ）。
- `createEditorModules` は `deps`・`api`・showEditor に返す api を Proxy で包み、
  誰も渡していない名前を読むと、その場で投げる。
- 純粋にできる関数は factory の外に `export function` で置き、Node でテストする
  （`history.js` の `historySnapshot` / `createEditorHistory`、`camera_preview.js` の
  `getCutoutPreviewViewportSize`、`helpers.js`、`ui_settings.js`、`video_thumbnail_cache.js`）。

## Dependency rules

- `web_src` の静的な import に循環を作らない。`tests/web_src_import_cycles.test.mjs` が import のグラフを読み、循環があれば経路を出して落ちる（動的な `import()` と、エディタの `connect()` による結び付けは数えない）。
- `pano_editor.js` → `editor/*.js` → `pano_*.js`（ライブラリ）の向きだけ。
- `editor/*.js` は `pano_editor.js` を import しない。ComfyUI の `app` / `api` も import せず、
  `deps` で受け取る（ビルドは `../../scripts/` だけを外部として扱う）。
- 振る舞いを持つモジュール同士は import しない。呼び合いは `connect()` で行う。
  import してよいのは、振る舞いを持たない `constants.js`、`helpers.js`、`ui_settings.js`、
  `video_thumbnail_cache.js` だけ。
- 準備の文（リスナーの登録、観測の開始）は `showEditor` に置き、その順を変えない。
  例外は `media_session.js`：VIDEO の準備の文はその factory の中にあり、
  `media_session.js` を最初に作るモジュールにしている。
- 配線の区画より前の文は、モジュールの関数を同期で呼ばない（ラムダやリスナーの中で後から呼ぶのはよい）。

`tests/editor_architecture.test.mjs` と `tests/editor_wiring.test.mjs` が、これらの決まりと
配線の名前の過不足を確かめる。

## Module map

| Module | Responsibility |
| --- | --- |
| `pano_editor.js` | Composition：値、`uiState`、Vue、配線、イベントの登録、`closeEditor`、起動 |
| `editor/modules.js` | `createEditorModules`：factory を作ってつなぐ。名前の過不足を投げる |
| `editor/constants.js` | 定数 |
| `editor/helpers.js` | 小さな純粋な関数（easing、ベクトル、2D の幾何、色、ノードの値） |
| `editor/ui_settings.js` | localStorage の設定（視点の反転、ノードごとのグリッド） |
| `editor/video_thumbnail_cache.js` | VIDEO のサムネイルのキャッシュ（直近 12 本） |
| `editor/media_session.js` | 背景（ERP、VIDEO と静止画）、port の VIDEO とフレーム、Sticker の画像、旧 VIDEO トランスポートとサムネイル。`playback` と port の follower を作り、`disposeMediaSession()` で放す |
| `editor/history.js` | Undo の履歴。スナップショットに残すもの（`historySnapshot`）と数（`HISTORY_LIMIT`）。段を積む前に上流の編集を書き戻させ（`syncUpstreamEdits`）、上流で消えた要素の上書きを捨てさせ（`pruneUpstreamRecords`。開いたときの最初の段 `pushHistory({ initial: true })` では捨てない）、戻した状態に合わせて上流の作業コピーを作り直させる（`rebuildUpstreamWorking`） |
| `editor/items.js` | Sticker（上流の作業コピーの Sticker を含む。`stickerById`・`upstreamSkyStickers`）、shot、ストロークのグループ、ラスターの品目の検索・並び・移動 |
| `editor/selection.js` | キャンバスの選択、world Sticker の選択、ロック、インスペクターの品目、z の順 |
| `editor/projection.js` | ビューの射影、Unwrap の矩形、画面・方向・ERP・Frame の変換 |
| `editor/object_geometry.js` | 品目の画面上の形（オーバーレイと当たり判定が読む） |
| `editor/paint_layers.js` | ペイントの表示の層（並びは `pano_paint_layers.js`。下記「Paint layers」）、ラスターの画像とアルファ、消しゴムのプレビュー、ノードへ送る塗りの層 |
| `editor/paint_strokes.js` | 筆跡の点・半径・ラスター化、ペイントエンジンと表示のキャッシュの revision |
| `editor/external_stickers.js` | `sticker` 入力から来る Sticker の姿勢と状態の更新 |
| `editor/space.js` | 3DoF / 6DoF、Viewport のカメラの視点と遷移、空間の操作（キーの移動 `stepKeyMove`）、閉じたときの視点の記憶と復元（`saveView`・`restoreView`） |
| `editor/view_input.js` | three.js のビューが描く入力をフレームに一度作り、ビュー・shot・Unwrap を描く |
| `editor/upstream.js` | Panorama Studio の上流の Scene（ADR 0030）：実行結果の上流の層、自分の上書きを当てた作業コピー（`rebuildUpstreamWorking`、`upstreamStickers`）、その編集の上書きへの書き戻し（`syncUpstreamEdits`）、タイムラインの行（`upstreamTimelineLayers`・`upstreamRow`）と Auto の長さに入る上流の長さ（`upstreamOutput`・`upstreamPortMeta`）、消す・上流に戻す・消したものを戻す・上書きの掃除（`deleteUpstreamStickers`・`revertUpstreamSticker`・`revertUpstreamLayer`・`restoreUpstreamDeleted`・`pruneUpstreamRecords`）、その素材とペイント、実行待ちの表示 |
| `editor/camera_preview.js` | Cutout / Studio のカメラのプレビュー |
| `editor/overlay.js` | 2D のオーバーレイ（グリッド、枠、選択の印、Frame のゲート、投げ縄、ロール） |
| `editor/render_loop.js` | `requestDraw`、`tickFrame`、`drawScene`、キャンバスの大きさ、`stopRenderLoop` |
| `editor/panels.js` | ツールのレール、ビューのボタン、ペイントのドック、サイドパネル、Undo / Redo の同期 |
| `editor/timeline.js` | Timeline のモデル（上流の層の行を含む）、範囲（出力の長さ、`timelineSpanFrames`）、再生位置と再生、owner と Lane（`timelineOwner`・`timelineEditable`・`rowEditable`）、fps |
| `editor/timeline_actions.js` | `onTimelineAction`（上流の層の行も同じ操作で作業コピーを変える。層の見出しの Revert・Restore deleted） |
| `editor/commit.js` | 状態の widget への書き戻し、ノードのプレビューの更新 |
| `editor/commands.js` | 全消去、複製、削除（上流の要素は上書きの消した記録に）と確認、上流の層の Restore deleted と Revert（`restoreUpstreamDeletedCommand`・`revertUpstreamLayerCommand`） |
| `editor/sticker_import.js` | 画像の追加・置き換え・アップロード、drop |
| `editor/camera.js` | Cutout / Studio の Camera（`syncCutoutShot`、追加・削除、アスペクト、ロールのつまみ） |
| `editor/frame_view.js` | Frame のビュー（ゲート、パン・ドラッグ・ホイール、キーの移動 `moveFrameByKeys`・`endFrameKeyMove`） |
| `editor/paint_input.js` | ペイントの入力、カーソル、筆跡と投げ縄の記録、消しゴム |
| `editor/hit_test.js` | ポインターの下の品目（上流の `sky` の Sticker は自分のものの後）、選択の矩形、カーソル |
| `editor/selection_menu.js` | 選択メニューとツールチップ |
| `editor/pointer_input.js` | キャンバスのポインターとホイールの入口：押したときにどのジェスチャーを始めるか（決まった順で確かめ、最初に当てはまったもの。品目のクリックでの選択と空のクリックでの選択の解除、Ctrl / Meta の範囲選択の開始を含む）、動かす・離す・取り消すを `editor.interaction.kind` のジェスチャーへ回す、再生中の編集の最初の動きで止めて止まったフレームからやり直す（`restartEditAtStoppedFrame`）、ホイール |
| `editor/pointer_view.js` | 視点を動かすジェスチャー：見回し（`view`）、6DoF の空間のドラッグ（`space_pan`・`space_orbit`。始めるのは `space.js` の `startSpaceDrag`）、空の場所の左ドラッグ |
| `editor/pointer_frame.js` | Frame のビューで Camera の shot を動かすジェスチャー：中ボタンのパン（`pan_frame`）、Alt / Shift のロール（`roll_frame`）、Frame のビューのジェスチャー（`frame_view.js` のドラッグを含む）の終わりの Undo の段 |
| `editor/pointer_paint.js` | ペイントとマスクの筆跡（`paint_stroke`・`paint_lasso_fill`）の開始・点の追加（Frame のビューの枠の外の点を捨て、戻ったところで区切る）・確定・取り消し |
| `editor/pointer_world.js` | `world` の Sticker のジェスチャー：ギズモのつかみと選択（`world_gizmo`・`world_select`）、ギズモのドラッグとホバー、終わり（Camera のギズモのドラッグと終わりもここ。押したときは `camera.js` の `startCameraPress`） |
| `editor/pointer_marquee.js` | 範囲選択（`marquee_select`）の動きと、離したときの選択 |
| `editor/pointer_transform.js` | 一つの品目の移動・拡大縮小・回転（`move`・`scale`・`scale_x`・`scale_y`・`rotate`、ストロークのグループの `*_stroke_group`、ラスターの品目の `*_raster_object`）の開始と動き、品目の編集を離したときの Undo の段（`endTransform`。複数の選択の移動も）。ペイントの品目の UV（`editUvAt`）、ドラッグの始めのスナップショット、画面の点への姿勢の書き込み（`writePoseAtScreenPoint`）を `pointer_multi_move.js` と共有する |
| `editor/pointer_multi_move.js` | 複数の選択の移動（`move_multi`）の開始と動き |
| `editor/side_panel_events.js` | サイドパネルのクリック・入力・変更 |
| `editor/modal_events.js` | モーダルのボタン、色の選択、VIDEO のトランスポート、全画面 |
| `editor/keyboard.js` | Escape、Delete、Space、6DoF と Frame 表示の移動のキー（WASD / QE、`moveKeys`）、修飾キー、Undo / Redo |

### Pointer gestures

キャンバスのポインターの操作は、`pointer_input.js` が振り分け、操作ごとのモジュール（`pointer_*.js`）が持つ。

- 操作の途中は `editor.interaction = { kind, ... }` に置く。`kind` の名前と項目は、`hit_test.js`（カーソル）、
  `overlay.js`、`panels.js`、`render_loop.js`、`frame_view.js`、`camera.js`、`commands.js`、`paint_layers.js`（`isPaintCompositeInteraction`）
  も読むので変えない。
- 押したときにどの操作を始めるかは `onCanvasPointerDown` の確かめる順だけが決める。操作のモジュールは、
  その操作を始める関数、動きの関数、終わりの関数を返し（名前は操作ごとに違う。例：`startMultiMove`・`moveMulti`、
  `scaleItem`、`dragWorldGizmo`、`endTransform`）、`pointer_input.js` が `kind` で呼び分ける。
- 操作を足すときは、操作のモジュールに始め・動き・終わりを置き、`pointer_input.js` の押したときの順の中の
  一か所と、動き・離す・取り消すの振り分けに一行ずつ足す。再生中に始まる編集の操作なら、
  `pointer_input.js` の `restartEditAtStoppedFrame` にもその `kind` を足す。
- `tests/editor_pointer_input.test.mjs` は `web_src/editor/pointer_*.js` の factory を全部本物で作ってつなぎ、
  ほかの名前を記録するスタブにして、押したときの分かれ道ごとに始まる操作と、動き・離す・取り消す・ホイールの
  呼び出しを確かめる。ポインターの操作のモジュールは `pointer_` で始める。

## Drawing

描き直しは `render_loop.js` の `requestDraw(options)` からだけ頼む。スケジュールと描き直しの理由の規則は
`docs/threejs-spark-integration.md` の「エディタの描画を直接表示する」にある。

1. `requestDraw({ reason, localOnly, cause, externalSync })` が、three.js のキャンバスを描き直すか
   （`runtime.backgroundDirty`）、ボタンを合わせるか、ノードのプレビューに知らせるかを決め、
   `scheduler.requestDraw(reason)`（`pano_frame_scheduler.js`）に渡す。`reason` は `DRAW_REASON` の値。
2. scheduler は次のフレームで `tick` → `tickFrame` を呼ぶ。`tickFrame` はアニメーション
   （視点の慣性と遷移、プレビューの拡大、Cutout の暗がり）を進め、`drawScene` を呼ぶ。
3. `drawScene` は `view_input.js` の入力で three.js のビューを描き（`renderEditorView` など）、
   その上に `overlay.js` が 2D を描く。フレームの終わりに `endEditorViewFrame()` で入力を捨てる。

`requestDraw` を呼ぶのは、`connect()` で `requestDraw` を受け取るモジュールと、`pano_editor.js` の
登録のコード（`editorView` の通知、`canvas.onmouseleave`、起動の最後）だけ。
`grep -ln "requestDraw" web_src/editor` で一覧になる。

## Paint layers

ペイントを Sky の層（ERP のキャンバス）に並べるのは、エディタ、ノード上の面、上流の Scene の層の 3 か所で、
どれも `web_src/pano_paint_layers.js` の `skyPaintLayers(state, { group, raster, mask })` を使う。
どの層があり、どの順と `z_index` で並ぶかはこの関数だけが決め、ノードの描画（`core/render.py` の
`_sky_layers`、`docs/scene-state-v2.md` の「Sky の重なり順」）と同じにする。

- ストロークのグループと `paint` のラスタオブジェクトを `z_index` の順（同じ値ならグループ、ラスタの順、
  それぞれリストの順。ラスタの小数の `z_index` はノードと同じく整数に切り捨てる）。
- どのグループにも属さないストロークは、そのグループごとに全部の上（Sticker の上）。ノードは 1 枚にまとめて描く。
- マスクの表示はさらにその上。
- `painting_visible` が `false` なら何もなく、素材も求めない。
- 戻り値の `zIndex` で、`skyLayers`（`pano_editor_view.js`）が `sky` の Sticker の間に入れる（同じ値なら Sticker が下）。

画素は呼び出し側が自分のペイントエンジン（`pano_paint_engine.js`）とラスタのキャッシュで描き、
`{ media, revision }` を返す関数で渡す（描くものがなければ `null`。エンジンにそのグループの画素がない、
画像が読み込み中など）。エンジンとキャッシュの持ち主と寿命は呼び出し側のまま。

| 呼び出し側 | 関数 | 渡すもの |
| --- | --- | --- |
| エディタ | `editor/paint_layers.js` の `buildEditorViewPaintLayers` | 描き途中のストロークを含むグループ、描き始めたグループを選択に合わせた `z_index` で `painting.groups` に足す（`getOrderedDisplayListObjects`）、消しゴムのプレビューを当てたラスタ、マスク（`engineMask`） |
| ノード上の面 | `pano_surface_paint.js` の `surfacePaintLayers`（`pano_preview_runtime.js` の `surfaceViewInput` が呼ぶ） | 面のエンジン（グループを描くときに作る）、面のラスタのキャッシュ。マスクは見せない |
| 上流の Scene の層 | `editor/upstream.js` の `paintLayers` | 層ごとのエンジンとラスタ、マスク（`engineMask`） |

`skyPaintLayers` は正規化した状態（`normalizePaintingState` の `painting`）を受け取る。ノード上の面のうち旧
Stickers / Cutout ノード（状態 v2 でないもの）は widget の JSON をそのまま読む（`parseState`）ので、`painting` が
無いか欠けていることがある。`surfacePaintLayers` は `painting` を正規化してから渡し、同じ `painting` の間は
正規化の結果を面のレコード（`nodeSurface(node).paintState`）に持つ。面のエンジンは `painting` が変わるたびに
描き直し、`paintRevisionKey` にその回数を数えるので、同じグループにストロークを足しても（キャンバスも数も同じでも）
ビューはキャンバスを上げ直す。ノード上の面でペイントを隠すと、ラスタオブジェクトのキャンバスを手放し
（`rasterCache.retain([])`）、見せたときに作り直す。

既知の問題：

- 投げ縄の塗りを分割したラスタは `z_index` に `index * 0.001` を足す。並びはノードと同じく整数に切り捨てて決めるが、
  当たり判定（`editor/hit_test.js`）は小数のまま並べるので、リストの順と小数の大小が逆のとき、重なりと当たる順が逆になる。
- マスクのラスタオブジェクト（`layerKind: "mask"`）は、エンジンのマスクの表示に入らない（エンジンはマスクのストロークだけを描く）。
  ノードの MASK には入る。
- どのグループにも属さないストロークが複数のグループにあり、ストロークの順が交互になるとき、ノードはストロークの順に
  1 枚に描き、フロントはグループごとに描くので、重なった画素がわずかに違う。

並びがノードと同じことは `tests/test_paint_layers_parity.py`（`_sky_layers` と比べる）、
層の規則は `tests/pano_paint_layers.test.mjs`、ノード上の面は `tests/pano_surface_paint.test.mjs` が確かめる。

## Node bridge

ノードごとの実行時の状態（キャッシュ、タイマー、ノード上の面、Preview の runtime、読み込んだ画像と VIDEO、
作業中の状態）は、LiteGraph のノードには書かず、`web_src/pano_node_bridge.js` が持つ。
ノードを鍵にした WeakMap に 1 ノード 1 レコードを置き、持ち主ごとのグループに分ける。

| Group | 持ち主 | 中身の例 |
| --- | --- | --- |
| `editorSession(node)` | `pano_editor.js`（モーダル）、`editor/space.js` | 実行の前に state_json へ書く関数、閉じたときの視点（`view`、ページの間だけ） |
| `nodeSurface(node)` | `pano_preview_runtime.js`、`pano_editor_extension.js` | DOM の面と `restore`、視点、再生、ペイントとラスターのキャッシュ、タイマー |
| `previewNode(node)` | `pano_preview_previewnode.js`、`pano_editor_extension.js` | Preview ノードの runtime、面、取り付けの待ち |
| `mediaCache(node)` | `pano_preview_runtime.js`、`pano_comfy_media.js` | 入力の画像、出力の VIDEO と ERP、出力の revision |
| `stateSync(node)` | `pano_editor_extension.js`、`pano_preview_runtime.js`、`editor/render_loop.js` | ライブの状態とその解析結果、flusher、Sticker のアップロード待ち |

- グループの関数は、初めて呼ばれたときに既定値でグループを作り、以後は同じオブジェクトを返す。
  `clearX(node)` はそのグループだけを片付けて捨てる。
- `disposeNodeRuntime(node)` は全部のグループを片付ける（`restore` で面を外し Vue を unmount、タイマーを止め、
  画像と VIDEO を放す）。`pano_editor_extension.js` が対象のノード型の `onRemoved` に付ける。
  LiteGraph はノードの削除のほか、`graph.clear()`（ワークフローの読み込み）とサブグラフへの変換でも
  各ノードの `onRemoved` を呼ぶ。`restore` はノード上の面を unmount し、途中のジェスチャーを widget に
  確定する（Stickers。Cutout は取り消す）ので、これらのたびに起きる。面の `onRemoved` のフックも
  同じ `restore` を呼ぶ。`disposeNodeRuntime` は、そのフックが外れていても `restore` が残っていれば呼び、
  `restore` が止めないタイマーと画像も放す。
- レコードはノードの外にあるので、`serialize()` にも `clone()` にも入らない（どちらも LiteGraph の項目だけを書く）。
- 新しい状態はノードに `node.__panoX` と書かず、持ち主のグループに項目を足す。ノードに残すのは
  `__panoSceneStateV2` と `__panoStudio` のフラグだけ（ノード型から一度決まり、`pano_editor_state.js` と
  そのテストが素のオブジェクトで読む）。widget・画像・キャンバスに付ける `__pano*` も含めた許可の一覧は
  `tests/pano_node_bridge.test.mjs` にあり、一覧にない名前が増えるとテストが落ちる。

## Adding code

- 新しい振る舞いは、責任の合うモジュールに置く。どのモジュールにも合わなければ、新しい
  `editor/<name>.js` を作り、`pano_editor.js` で import して `createEditorModules` の一覧に足す。
- モジュールが新しく他の関数を使うなら、`let` の宣言と `connect()` の分割代入の両方に足す。
  showEditor の新しい値を使うなら、`deps` の分割代入と、`pano_editor.js` の配線の区画で渡す
  オブジェクトの両方に足す。足し忘れは、エディタを開いたとき（と `tests/editor_wiring.test.mjs`）に投げる。
- `showEditor` に戻すのは、組み立て（値を作る、モジュールをつなぐ、イベントを登録する）だけ。
