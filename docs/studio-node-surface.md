# Panorama Studio のノード上の表示

Panorama Studio（`PanoramaStudio`）のノード上の表示（node surface）の規則を定める：表示の構成、撮る Camera の出力をその場で描く絵、
絵の下の一行（撮り方と出力の大きさ）、Open Studio のボタン、表示フレームと背景の VIDEO・`port` の素材、見えないときとエディタを
開いている間の扱い、描画と後始末。ノード上の表示は見るためのもので、編集は Open Studio で開くエディタで行う。用語は `CONTEXT.md` に従う。
決めた理由は ADR 0029（Panorama Studio）と ADR 0049（撮る Camera の出力をその場で描く）にある。

この文書が持たない規則：ノードの入出力・Timeline の長さ・撮り方と出力の大きさの式（`_studio_output_size`）・実行結果の `ui` の入力の素材のキー（`docs/studio-node.md`）、
エディタのタイムライン・再生の状態機械・タイムラインの長さ・背景の行（`docs/timeline-ui.md`）、
エディタの操作・インスペクタ・`port` の Sticker の同期（`docs/editor-interaction.md`）、
共有の three.js ビュー・テクスチャ・その場の ERP（`docs/threejs-spark-integration.md`）、
エディタの Output の小窓（`docs/studio-ui.md`）、
状態 v2・`port` の Sticker の vFOV の求め方（`docs/scene-state-v2.md`）、
色・文字・大きさの値（`docs/design.md` の「新しい UI の見た目」の「Panorama Studio のノード上の表示」）、
旧ノード（`PanoramaStickers`・`PanoramaPreview`・`PanoramaCutout`）の表示（`docs/legacy-node-surfaces.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 表示の構成（DOM canvas、Vue overlay、Node 2.0 と Legacy renderer、標準の `Open Studio Editor` widget、絵と一行の置き方） | — | `web_src/pano_editor_extension.js` `createPanoEditorExtension`（`PanoramaStudio`）、`web_src/pano_preview_runtime.js` `attachPanoramaPreviewImpl`（`studioSurface`）、`web_src/pano_studio_surface.js` `studioSurfaceLayout`、`web_src/components/PanoStudioNodeSurface.vue` | `tests/pano_editor_extension.test.mjs`、`tests/pano_studio_node_surface_contract.test.mjs`、`tests/pano_studio_surface.test.mjs`、`tests/browser/studio_node_surface.spec.js` |
| 撮る Camera の出力をその場で描く（描く物、描く部品、いつ描き直すか） | — | `pano_preview_runtime.js` `drawStudioPicture`、`web_src/studio/output_picture.js` `outputFrameInput`・`outputErpInput`（エディタの Output の小窓と共有）、`web_src/pano_preview_view.js` の `renderLiveErp` | `tests/output_picture.test.mjs`、`tests/browser/studio_node_surface.spec.js` |
| 一行の状態（撮り方、出力の大きさ、上限） | `nodes.py` `PanoramaStudioNode.execute`（`pano_output_size`）・`_studio_run_key` | `web_src/pano_studio_status.js` `studioNodeStatus`・`studioOutputSize`・`studioRunKey`・`createStudioStatus`、`pano_preview_runtime.js` `studioStatusOptions` | `tests/pano_studio_status.test.mjs`、`tests/test_studio_status_parity.py`、`tests/test_studio_node.py`、`tests/browser/studio_node_surface.spec.js` |
| widget の変更を受けて描き直す（callback の連ね方） | — | `web_src/pano_widget_callback.js` `chainWidgetCallback` | `tests/pano_widget_callback.test.mjs`、`tests/browser/studio_node_surface.spec.js` |
| wheel の捕捉（旧ノードと Preview の Scene のビューアが使う） | — | `web_src/pano_interaction_controller.js` `createPanoInteractionController`、`web_src/pano_wheel.js` `PANO_FOV_WHEEL_STEP_DEG`・`bindWheelCaptureRoot` | `tests/pano_stickers_node_surface_contract.test.mjs`、`tests/pano_wheel.test.mjs` |
| 表示フレームと背景の VIDEO・`port` の素材 | — | `web_src/pano_node_playback.js` `createNodePlayback`、`web_src/pano_stickers_node_surface.js` `NODE_SURFACE_FRAME`、`pano_preview_runtime.js` `backgroundVideoSources`・`portStickerMedia`・`surfaceTimelineMedia` | `tests/pano_node_playback.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs` |
| 見えないときとエディタを開いている間 | — | `pano_node_playback.js` `surfaceShown`、`web_src/pano_node_bridge.js` `editorOpen`、`pano_preview_runtime.js` `attachPanoramaPreviewImpl`（`syncSurfacePlayback`） | `tests/pano_node_playback.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs`、`tests/pano_node_bridge.test.mjs` |
| 描画と後始末（animation frame、DOM canvas だけの再描画、revision、media の失効、teardown、raster object の大きさ） | — | `pano_preview_runtime.js` `attachPanoramaPreviewImpl`、`web_src/pano_preview_video.js` `isNodeOutputMediaCurrent`・`isTrackedMediaInputConnectionChange`、`web_src/pano_surface_paint.js` `surfacePaintLayers`、`web_src/pano_raster_object_surface.js` `resolveRasterPreviewSize`・`createRasterObjectSurfaceCache` | `tests/pano_cutout_node_surface_contract.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs`、`tests/pano_preview_video.test.mjs`、`tests/pano_raster_object_surface.test.mjs` |
| `port` の Sticker の素材の読み込みと実行の一致 | — | `pano_stickers_node_surface.js` `reconcilePortStickerState`、`web_src/pano_editor_ui_state.js` `stickerParamEnabled`、`web_src/editor/external_stickers.js`（素材の読み込みでインスペクタを更新） | `tests/pano_stickers_node_surface.test.mjs`、`tests/pano_editor_ui_state.test.mjs`、`tests/pano_studio_node_surface_contract.test.mjs` |

## 表示の構成

`PanoramaStudio` は旧 `PanoramaStickers` と同じ DOM canvas、shared three.js view、teardown を使い、Vue overlay だけを
`PanoStudioNodeSurface.vue` に替える（ADR 0029）。見た目は持ち主が下書き `design-drafts/node-1.html` の案 B から選んだ（ADR 0049）。

- Node 2.0 と Legacy node renderer で同じ DOM surface 実装を使う。
- canvas は node の利用可能領域を満たし、縦横 resize へ追従する。surface の大きさは出力の比で変わらない。
- 置くのは三つだけ：撮る Camera の出力の絵、絵の下の中央に浮かせた `Open Studio` のボタン、絵の下の一行（左に撮り方、右に出力の大きさ）。
  Sticker の選択・drag・削除、画像の追加と drop、Delete / Backspace、再生ボタン、見回しは持たない（ADR 0029・0049）。
- 置き方（`web_src/pano_studio_surface.js` の `studioSurfaceLayout`、値の名前は `docs/design.md`）：surface（widget の下からノードの下の端まで）
  を一つの箱とする。絵は出力の比（Panorama 360° は 2 : 1、180° は 1 : 1、Frame は出る大きさの幅 : 高さ）のまま、箱の幅と、高さから一行の分
  （`STUDIO_LINE_HEIGHT` と `STUDIO_LINE_GAP`）を除いた高さに収まる最大の大きさにする（contain）。絵と一行をひとまとまりとして、箱の上下と
  左右の中央に置く（絵は箱から一行の分を除いた所の中央に来る）。一行は絵のすぐ下（間 `STUDIO_LINE_GAP`）に、絵と同じ幅で置き、絵から離れない。
  箱の残り（絵と一行の外）は surface の暗い地（`STUDIO_SURFACE_FILL`、角丸 `STUDIO_PICTURE_RADIUS`）で、ノードの地は見せない。
  絵の角は丸める。ノードを縦にも横にも大きくすると、絵は箱に収まる最大の大きさに広がり、中央に留まる。
- 一行は surface の暗い地の上に出るので、ComfyUI のテーマがライトでもダークの文字の値で書く（読めるように）。
- ボタンは絵の下の辺から `STUDIO_BUTTON_INSET` 上、左右の中央に、いつも出す（ポインタを載せたときだけ出すことはしない）。
  アイコン（maximize）と `Open Studio` の文字。押すとエディタを開く（先に再生を一時停止する）。
- 一行の左は撮り方のアイコン（Panorama は 360° のアイコン、Frame は比のアイコン）と撮り方の名前、右は出力の大きさ。長いときは
  左の名前を省略記号で切り、大きさは切らない。
- Vue mount 成功後だけ標準 `Open Studio Editor` widget を隠す。mount 失敗時は標準 widget を表示したままとし、editor への導線を失わない。
- overlay のうちボタンと出力の大きさ（上限の tooltip を出す）以外は canvas の操作を遮らない（`pointer-events: none`）。
- ノード上の表示は新しい UI の stylesheet（`web/pano_studio.css`）を読み込み、overlay の root に `.pano-studio` を付けてその値を使う。
  ライトとダークは ComfyUI のテーマに従う（`docs/design.md`）。

## 撮る Camera の出力をその場で描く

- 絵は、今の状態（`state_json`）と入力と widget から、撮る Camera の表示フレームでの出力をその場で描いたもの（ADR 0049）。実行の前も後も
  同じで、実行の出力の画像は使わない。描く部品はエディタの Output の小窓と同じ `web_src/studio/output_picture.js`：
  - Panorama モード：Camera の位置からの ERP（`outputErpInput`、`pano_three_view.js` の `renderLiveErp`。`docs/threejs-spark-integration.md`
    の「Panorama モードの ERP の表示」）。Camera の `erp_range` の範囲で、平らな ERP として描く（見回さない）。
  - Frame モード：Camera の枠の絵（`outputFrameInput`）。レンズの曲線 κ ≠ 1 の Camera はレンズの像として描く。
  - どちらも地面のグリッドは描かない（編集の印なので、出力に無い）。
- 描く物は、エディタと同じ作り方（`web_src/studio/stage_content.js` の `stageContent`）で、表示フレームの次のものとする：背景
  （Clip range の外と素材が終わった先は `background_color`、背景が無いときも `background_color`。出力と同じ）、sky の Sticker とペイント
  （同じ表示順）、`world` の画像の Sticker、3D ファイルの Sticker（エディタと同じ route で読む）、`world` 入力の 3D（実行結果の
  `pano_scene_files`）、`port` の Sticker（画像と、実行結果の 3D）。
  上流の Scene（`scene` 入力の `PANO_SCENE`）の層と深度の格子の 3D はまだ描かない（ADR 0049。描くまでは実行の結果と違う）。
- 描く大きさは絵の箱の大きさ（canvas の画素）で、出力の大きさでは描かない。
- 描き直すのは、描く物が変わりうるときだけ：`state_json` の変更、widget（`background_color`・`background_range`・`megapixels`・`multiple`）
  の変更、入力の接続の変更、実行結果（`executed`）、素材の読み込み、表示フレームの VIDEO の絵、surface の大きさの変更。それ以外の
  animation frame は持たない。Panorama モードの ERP は、Camera の位置と描く物が変わらなければ面を描き直さない（`pano_live_erp.js`）。
- three.js の view を読み込む前と、読み込めないときは、絵の箱は surface の地（`STUDIO_SURFACE_FILL`）のままである。読み込めないときは
  `PanoViewUnavailable` を重ねる。

## 一行の状態

- 撮り方と出る大きさを一行で出す。例 左 `Panorama 360°`・右 `2048 × 1024`、左 `Panorama 180°`・右 `1448 × 1448`、左 `Frame 16:9`・右 `1928 × 1088`
  （Frame の比は、`camera.aspect` との差が 1% 以内のプリセット（16:9・3:2・4:3・1:1・3:4・2:3・9:16）があればその比、無ければ
  `W:H`（出る大きさの幅と高さ）で出す）。画面に `ERP`・`Perspective`・`Camera ·` の語は出さない（`CONTEXT.md` の「画面の言葉」）。
  この一行が、ノードの上で出る大きさを先に見せる唯一の場所である（`io.ResolutionPreview` は使わない。`docs/studio-node.md`）。
- 出力の画素数は `megapixels`・`multiple` と状態の比から、`pano_studio_status.js` の `studioOutputSize` で求める（式の owner は
  `docs/studio-node.md`。Python の `_studio_output_size` と `tests/fixtures/studio_output_size.json` で一致させる）。上限
  （`STUDIO_MAX_OUTPUT_SIDE`）に収めたときは、大きさに元の大きさを添えた tooltip（`Capped at 8192 (W × H)`）を付ける。
- 一行は、`megapixels`・`multiple`・`background_range`・`background_color` の widget を変えたとき（ComfyUI が widget の callback を呼んだとき）と
  `state_json` が変わったとき（Camera のモード・`erp_range`・`aspect`）に、実行せずにすぐ変わる。callback は
  `web_src/pano_widget_callback.js` の `chainWidgetCallback` で連ね、元の callback を同じ `this` と引数で呼び、元の callback が例外を
  投げても描き直しを要求する（ComfyUI の数値の widget の callback は `this` を読む）。
- 実行後は、実行が返した大きさ（`ui` の `pano_output_size`）を見積もりより優先する。使うのは、実行時の media の接続
  （background・sticker・scene）が今と同じで、かつ `pano_output_size.key`（`state_json`・`megapixels`・`multiple`・`background_range`・
  `background_color` の hash、`_studio_run_key` / `studioRunKey`）が今の値と一致するときだけで、実行後に編集したら見積もりに戻る。
  一行はこれらの入力が変わったときだけ計算し直す。

## 見回し（旧ノードと Preview の Scene のビューアの規則）

Panorama Studio の表示は見回さない（ADR 0049）。drag と wheel を受けず、wheel は ComfyUI のグラフに渡る（root に
`data-capture-wheel` を付けない）。次の規則は旧ノードと Preview の Scene のビューアが使い、この節だけが持つ。

- 空所primary dragはcameraをpanする。wheelは共有controllerで横FOVを1イベント3度変更する。
- 空所drag / wheelはCutout / Previewと同じcamera感度で動く。
- Node 2.0ではDOM widget rootを`tabindex="0"`かつ`data-capture-wheel="true"`とし、surfaceへのpointer enterで
  rootへfocusを移してからwheelを受け取る（`pano_wheel.js` の `bindWheelCaptureRoot`）。wheelを受けるにはこの2つの両方が要る。
- Space キーは割り当てない（canvas上の Space は ComfyUI の pan）。
- camera view は一時状態とし、workflow へ保存しない。

## 表示フレームと VIDEO

ノード上の表示は、状態 v2 の再生の部品（`web_src/pano_node_playback.js` の `createNodePlayback`）で、表示する
Timeline のフレーム（表示フレーム）の背景の VIDEO と `port` の素材のフレームを出す。

- node surfaceが表示するフレーム（表示フレーム）はノードごとの一時状態で、`state_json` にも
  `node.properties` にも保存しない。最初は frame 0 で、reloadやworkflowを開き直すと frame 0 に戻る。
  再生ボタンが無いので（ADR 0029）、表示フレームは frame 0 のままである。
- 背景のVIDEOは、ノードの実行結果の `pano_input_videos`（`bg_media` が2フレーム以上のとき）か、上流の
  LoadVideoが読むファイルで、エディタと同じ候補順で選ぶ（`backgroundVideoSources`）。読めないVIDEOは次の候補へ進む。シークバーや時刻表示は出さない。
  読めなかったVIDEOのURLは、候補から一度消えたら（再実行や接続変更）もう一度試す。
- 背景のVIDEOはエディタと同じ状態機械 `pano_video_playback.js` で表示フレームに合わせ、音は出さない（muted）。
  表示フレームの背景は、そのフレームのVIDEOの静止画（最大幅2048）を描く。
- 各フレームのStickerは共有evaluator（エディタの `workingSkyLayers` / `surfacePoseStickers` と同じ）で評価する。
  `port` のStickerの素材のMP4（`pano_sticker_input_videos`、RGBA の IMAGE バッチは PNG の列 `pano_sticker_input_frames`）は、
  エディタと同じく再生ヘッドに従う（`createVideoFollower`）。
- Timelineの長さはエディタと同じく出力の長さちょうどで（最小の長さは無い）、Auto の長さは実行結果が示す入力の長さ
  （背景の `pano_input_video_meta`、`port` の素材、`scene` の要素、上流の `pano_upstream_frames` と上書きした
  Clip range の終わり。`pano_preview_runtime.js` の `surfaceTimelineMedia`）から求める。実行結果に背景が無い間は、
  読み込んだ VIDEO の長さを背景のフレーム数とする（`docs/timeline-ui.md` の「タイムラインの長さ」）。
- 背景の Clip range の外と、背景の素材が終わった先（既定の Clip range でも）は `bg_color` を出す（エディタ・出力と同じ。
  `docs/timeline-ui.md` の「背景の行」）。
- 表示フレームが frame 0 に戻るのは、背景のVIDEOが別のものに替わったとき、Timelineが短くなって
  表示フレームに届かなくなったとき、再生できるもの（時間・VIDEO）がなくなったとき。
- VIDEO要素（背景と `port` のStickerの素材の2つ）はsurfaceの中に置き、`opacity:0` で隠す（`visibility:hidden` や `display:none` では
  requestVideoFrameCallback が来ない）。

### 再生の部品

`createNodePlayback` は再生と一時停止を持つが、Panorama Studio の表示には再生ボタンが無く、表示は再生（`toggle`）を呼ばない（`follow`・`pause` は呼ぶ）。
部品の規則は次のとおり（`tests/pano_node_playback.test.mjs`）。

- 再生できるのは、sceneが時間を持つとき（エディタのタイムラインと同じ `isTimed`）か、背景のVIDEOがあるとき、
  `port` のStickerの素材があるときだけ。1 フレームの Timeline では再生しない。
- 再生は表示フレームから Timeline fps で進み、Timeline の終わりで frame 0 に戻って繰り返す。
- 一時停止は画面に出ているフレームで止まる（エディタの停止と同じ規則：一時停止したVIDEOが表示する
  PTS ≤ currentTime のフレームに再生ヘッドと静止画を合わせ、シークしない。ADR 0024）。もう一度再生するとそのフレームから続ける。
- 再生していないときはrAFもvideo frame callbackも持たない。再生中は表示されたVIDEOフレーム（VIDEOがないときは
  時計）ごとに1回描く。
- `Open Studio` を押すと、先に再生を一時停止する。

## 見えないときとエディタを開いている間

- surfaceが見えなくなったノード（collapse、subgraphの中や別のgraphを表示中、widgetが隠れたとき。
  surfaceの要素がpageにないか幅0）は、一時停止してVIDEOのsrcを外す（表示フレームは保つ）。
  見えるようになると同じVIDEOを読み直し、表示フレームを出す。ResizeObserverで
  すぐに、また描画のたびに確かめる。node remove / graph clear では状態機械、VIDEO要素、
  rAF / video frame callbackを破棄する。VIDEO要素は src を外して `load()` し、デコーダをすぐ放す
  （要素そのものはGCまで残り、診断の `video.alive` に数えられるが、`video.loaded` には入らない）。
  静止画のキャンバス2つも大きさを0にする。
- そのノードのエディタを開いている間（`pano_node_bridge.js` の `editorSession(node).open`、`editorOpen(node)`）も、
  モーダルがsurfaceを覆うので見えないものとして扱う。エディタが同じ1080pのVIDEOを自分で再生するので、
  surfaceはVIDEOのsrcを外し、静止画を放し、描かずに共有ビューのテクスチャを放す（`surfaceView.release()`）。
  collapse したsurfaceも描かないので、同じくテクスチャを放す。エディタを閉じると同じ表示フレームから読み直す。
  解像度や品質は落とさない（重複を持たないだけ）。

## 描画と後始末

- 表示のレイアウトを、実行時に `node.size` を書き換えて直さない。`node.size` を書くのは、大きさが不正なとき（10 未満）の初期化だけ（`pano_preview_runtime.js` の `initNodeSizeIfInvalid`・`ensureStandalonePreviewBootstrapSize`）。
- shared render coreとdescriptorを使い、第二rendererを作らない。
- image / video、state、paint、external inputを独立したrevisionとして扱い、draw loop内でstateを再生成しない。
- image / video replacement、connection change、executeで古いmedia cacheを無効化する。replace、disconnect、
  re-execute後に古い画像や動画が復活しない。
- backgroundと `port` のStickerの実行結果鮮度は独立して管理し、`bg_media` の接続変更で `port` のSticker textureを失効させない。
- animation frameは同時に1件だけ予約する。
- camera frameとresizeはDOM canvasだけを更新し、host graph canvas全体を継続再描画しない。
- Panorama Studio の surface の大きさが変わったら（ノードの resize。ResizeObserver）、次の animation frame を待たずに、その callback の中で
  置き方を求め直して絵を描き直す。canvas の大きさを変えると絵が消え、ResizeObserver の callback はその frame の animation frame の
  callback より後に来るので、次の frame に回すと、消えた絵か伸びた古い絵が一度出る（新しい UI のステージの resize と同じ。
  `web_src/pano_frame_scheduler.js` の `flush`）。
- Panorama モードのその場の ERP は node ごとの 2D canvas に描いてから surface の canvas に写す。その canvas は teardown で大きさを 0 にして放す。Panorama と Frame を切り替えたときは、使わなくなった側（その場の ERP と canvas、レンズの面）を放す。
- teardownはVue app、RAF、ResizeObserver、media callback、render core、listener、widget hookを破棄・復元する。
  remove / reconfigure / re-addで二重mount、listener、RAF、media callbackを残さない。
- raster objectのnode preview用surfaceは最大1024×512とし、objectごとに最新revisionだけを保持する。
