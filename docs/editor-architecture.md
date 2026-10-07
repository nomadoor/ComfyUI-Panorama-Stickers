# Editor architecture

Panorama のエディタ（Stickers、Cutout、Panorama Studio、Preview のモーダル）のコードの地図と、
依存の向きの決まり。UI の DOM を Vue に置く決まりは `docs/vue-ui-boundary.md` にある。

## Overview

エディタは `web_src/pano_editor.js` の `showEditor(node, type, options)` が開く。
以前は約 11,500 行の 1 ファイルで、`showEditor` の中に 400 以上の関数が入り、どの関数も
`state`・`editor`・`runtime`・`uiState`・キャンバス・`<video>` を閉包から直接読み書きしていた。
今は次の 3 層に分かれている。

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

- `pano_editor.js` → `editor/*.js` → `pano_*.js`（ライブラリ）の向きだけ。
- `editor/*.js` は `pano_editor.js` を import しない。ComfyUI の `app` / `api` も import せず、
  `deps` で受け取る（ビルドは `../../scripts/` だけを外部として扱う）。
- 振る舞いを持つモジュール同士は import しない。呼び合いは `connect()` で行う。
  import してよいのは、振る舞いを持たない `constants.js`、`helpers.js`、`ui_settings.js`、
  `video_thumbnail_cache.js` だけ。
- 準備の文（リスナーの登録、観測の開始）は、元の順のまま `showEditor` に置く。
  例外は `media_session.js`：VIDEO の準備の文は配線の区画の直前にあったので、その順のまま
  factory に入れ、最初に作るモジュールにしている。
- 配線の区画より前の文は、モジュールの関数を同期で呼ばない（ラムダやリスナーの中で後から呼ぶのはよい）。

`tests/editor_architecture.test.mjs` と `tests/editor_wiring.test.mjs` が、これらの決まりと
配線の名前の過不足を確かめる。エディタのソースの形を確かめるテストは、
`tests/editor_source.mjs`（`readEditorSource()`）・`tests/editor_source.py`（`editor_source()`）で
`pano_editor.js` と `web_src/editor/*.js` の全部を読む。

## Module map

行数は分割の後（分割の前は全部が `pano_editor.js` の 11,511 行の中）。

| Module | 行 | Responsibility |
| --- | ---: | --- |
| `pano_editor.js` | 971 | Composition：値、`uiState`、Vue、配線、イベントの登録、`closeEditor`、起動 |
| `editor/modules.js` | 27 | `createEditorModules`：factory を作ってつなぐ。名前の過不足を投げる |
| `editor/constants.js` | 48 | 定数 |
| `editor/helpers.js` | 243 | 小さな純粋な関数（easing、ベクトル、2D の幾何、色、ノードの値） |
| `editor/ui_settings.js` | 77 | localStorage の設定（視点の反転、ノードごとのグリッド） |
| `editor/video_thumbnail_cache.js` | 32 | VIDEO のサムネイルのキャッシュ（直近 12 本） |
| `editor/media_session.js` | 752 | 背景（ERP、VIDEO と静止画）、port の VIDEO とフレーム、Sticker の画像、旧 VIDEO トランスポートとサムネイル。`playback` と port の follower を作り、`disposeMediaSession()` で放す |
| `editor/history.js` | 99 | Undo の履歴。スナップショットに残すもの（`historySnapshot`）と数（`HISTORY_LIMIT`）。段を積む前に上流の編集を書き戻させ（`syncUpstreamEdits`）、戻した状態に合わせて上流の作業コピーを作り直させる（`rebuildUpstreamWorking`） |
| `editor/items.js` | 688 | Sticker（上流の作業コピーの Sticker を含む。`stickerById`・`upstreamSkyStickers`）、shot、ストロークのグループ、ラスターの品目の検索・並び・移動 |
| `editor/selection.js` | 464 | キャンバスの選択、world Sticker の選択、ロック、インスペクターの品目、z の順 |
| `editor/projection.js` | 346 | ビューの射影、Unwrap の矩形、画面・方向・ERP・Frame の変換 |
| `editor/object_geometry.js` | 324 | 品目の画面上の形（オーバーレイと当たり判定が読む） |
| `editor/paint_layers.js` | 564 | ペイントの表示の層、ラスターの画像とアルファ、消しゴムのプレビュー、ノードへ送る塗りの層 |
| `editor/paint_strokes.js` | 587 | 筆跡の点・半径・ラスター化、ペイントエンジンと表示のキャッシュの revision |
| `editor/external_stickers.js` | 242 | `sticker` 入力から来る Sticker の姿勢と状態の更新 |
| `editor/space.js` | 340 | 3DoF / 6DoF、Viewport のカメラの視点と遷移、空間の操作（キーの移動 `stepKeyMove`）、閉じたときの視点の記憶と復元（`saveView`・`restoreView`） |
| `editor/view_input.js` | 269 | three.js のビューが描く入力をフレームに一度作り、ビュー・shot・Unwrap を描く |
| `editor/upstream.js` | 305 | Panorama Studio の上流の Scene（#90、ADR 0030）：実行結果の上流の層、自分の上書きを当てた作業コピー（`rebuildUpstreamWorking`、`upstreamStickers`）、その編集の上書きへの書き戻し（`syncUpstreamEdits`）、その素材とペイント、実行待ちの表示 |
| `editor/camera_preview.js` | 182 | Cutout / Studio のカメラのプレビュー |
| `editor/overlay.js` | 602 | 2D のオーバーレイ（グリッド、枠、選択の印、Frame のゲート、投げ縄、ロール） |
| `editor/render_loop.js` | 422 | `requestDraw`、`tickFrame`、`drawScene`、キャンバスの大きさ、`stopRenderLoop` |
| `editor/panels.js` | 442 | ツールのレール、ビューのボタン、ペイントのドック、サイドパネル、Undo / Redo の同期 |
| `editor/timeline.js` | 203 | Timeline のモデル、再生位置と再生、owner と Lane、fps |
| `editor/timeline_actions.js` | 222 | `onTimelineAction` |
| `editor/commit.js` | 92 | 状態の widget への書き戻し、ノードのプレビューの更新 |
| `editor/commands.js` | 287 | 全消去、複製、削除と確認 |
| `editor/sticker_import.js` | 430 | 画像の追加・置き換え・アップロード、drop |
| `editor/camera.js` | 426 | Cutout / Studio の Camera（`syncCutoutShot`、追加・削除、アスペクト、ロールのつまみ） |
| `editor/frame_view.js` | 372 | Frame のビュー（ゲート、パン・ドラッグ・ホイール、キーの移動 `moveFrameByKeys`・`endFrameKeyMove`） |
| `editor/paint_input.js` | 661 | ペイントの入力、カーソル、筆跡と投げ縄の記録、消しゴム |
| `editor/hit_test.js` | 278 | ポインターの下の品目（上流の `sky` の Sticker は自分のものの後）、選択の矩形、カーソル |
| `editor/selection_menu.js` | 200 | 選択メニューとツールチップ |
| `editor/pointer_input.js` | 1,185 | キャンバスのポインターとホイール |
| `editor/side_panel_events.js` | 223 | サイドパネルのクリック・入力・変更 |
| `editor/modal_events.js` | 553 | モーダルのボタン、色の選択、VIDEO のトランスポート、全画面 |
| `editor/keyboard.js` | 193 | Escape、Delete、Space、6DoF と Frame 表示の移動のキー（WASD / QE、`moveKeys`）、修飾キー、Undo / Redo |

## Drawing

描き直しは `render_loop.js` の `requestDraw(options)` からだけ頼む。

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
  以前から同じ `restore` を呼ぶ。bridge が足したのは、そのフックが外れていても `restore` が残っていれば呼ぶことと、
  `restore` が止めないタイマーと画像を放すこと。
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
