# Panorama Studio のノード上の表示

Panorama Studio（`PanoramaStudio`）のノード上の表示（node surface）の規則を定める：表示の構成、上端の bar と状態、
実行前の表示と実行の出力の表示、見回し、表示フレームと背景の VIDEO・`port` の素材、見えないときとエディタを開いている間の扱い、
描画と後始末。ノード上の表示は見るためのもので、編集は Open Editor で開くエディタで行う。用語は `CONTEXT.md` に従う。
決めた理由は ADR 0029（Panorama Studio）にある。

この文書が持たない規則：ノードの入出力・Timeline の長さ・出力の大きさ（`_studio_output_size`）・実行結果の `ui` の入力の素材のキー（`docs/studio-node.md`）、
エディタのタイムライン・再生の状態機械・タイムラインの長さ・背景の行（`docs/timeline-ui.md`）、
エディタの操作・インスペクタ・`port` の Sticker の同期（`docs/editor-interaction.md`）、
共有の three.js ビュー・テクスチャ・エディタでの描画（`docs/threejs-spark-integration.md`）、
状態 v2・`port` の Sticker の vFOV の求め方（`docs/scene-state-v2.md`）、
旧ノード（`PanoramaStickers`・`PanoramaPreview`・`PanoramaCutout`）の表示（`docs/legacy-node-surfaces.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 表示の構成（DOM canvas、Vue overlay、Node 2.0 と Legacy renderer、標準の `Open Studio Editor` widget、見回すだけ） | — | `web_src/pano_editor_extension.js` `createPanoEditorExtension`（`PanoramaStudio`）、`web_src/pano_preview_runtime.js` `attachPanoramaPreviewImpl`（`studioSurface`）、`web_src/components/PanoStudioNodeSurface.vue` | `tests/pano_editor_extension.test.mjs`、`tests/pano_studio_node_surface_contract.test.mjs` |
| 上端の bar の状態（撮るもの、出力の画素数、上限、注記） | `nodes.py` `PanoramaStudioNode.execute`（`pano_output_size`・`pano_bg_width`）・`_studio_run_key` | `web_src/pano_studio_status.js` `studioNodeStatus`・`studioOutputSize`・`studioTimelineFrames`・`studioRunKey`・`createStudioStatus`、`pano_preview_runtime.js` `studioStatusOptions`・`studioBgWidth` | `tests/pano_studio_status.test.mjs`、`tests/test_studio_status_parity.py`、`tests/test_studio_node.py` |
| 実行の出力を示す（`pano_output_erp`・`pano_output_frame`、注記、読み込み） | `nodes.py` `PanoramaStudioNode.execute`、`core/video.py` `save_output_png` | `pano_studio_status.js` `studioRunOutput`、`pano_preview_runtime.js` `studioRunPicture`・`studioRunDisplay` | `tests/pano_studio_status.test.mjs`、`tests/pano_studio_node_surface_contract.test.mjs`、`tests/test_studio_node.py` |
| 実行の ERP の向き | `nodes.py` `PanoramaStudioNode.execute`（`rotation`）、`core/render.py` `_rays` | `pano_studio_status.js` `studioRunQuaternion` | `tests/test_studio_run_erp_orientation.py`、`tests/pano_studio_node_surface_contract.test.mjs` |
| 見回し（drag、wheel、wheel の捕捉） | — | `web_src/pano_interaction_controller.js` `createPanoInteractionController`、`web_src/pano_wheel.js` `PANO_FOV_WHEEL_STEP_DEG`・`bindWheelCaptureRoot` | `tests/pano_stickers_node_surface_contract.test.mjs`、`tests/pano_wheel.test.mjs` |
| 表示フレームと背景の VIDEO・`port` の素材 | — | `web_src/pano_node_playback.js` `createNodePlayback`、`web_src/pano_stickers_node_surface.js` `NODE_SURFACE_FRAME`、`pano_preview_runtime.js` `backgroundVideoSources`・`portStickerMedia`・`surfaceTimelineMedia` | `tests/pano_node_playback.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs` |
| 見えないときとエディタを開いている間 | — | `pano_node_playback.js` `surfaceShown`、`web_src/pano_node_bridge.js` `editorOpen`、`pano_preview_runtime.js` `attachPanoramaPreviewImpl`（`syncSurfacePlayback`） | `tests/pano_node_playback.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs`、`tests/pano_node_bridge.test.mjs` |
| 描画と後始末（animation frame、DOM canvas だけの再描画、revision、media の失効、teardown、raster object の大きさ） | — | `pano_preview_runtime.js` `attachPanoramaPreviewImpl`、`web_src/pano_preview_video.js` `isNodeOutputMediaCurrent`・`isTrackedMediaInputConnectionChange`、`web_src/pano_surface_paint.js` `surfacePaintLayers`、`web_src/pano_raster_object_surface.js` `resolveRasterPreviewSize`・`createRasterObjectSurfaceCache` | `tests/pano_cutout_node_surface_contract.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs`、`tests/pano_preview_video.test.mjs`、`tests/pano_raster_object_surface.test.mjs` |
| `port` の Sticker の素材の読み込みと実行の一致 | — | `pano_stickers_node_surface.js` `reconcilePortStickerState`、`web_src/pano_editor_ui_state.js` `stickerParamEnabled`、`web_src/editor/external_stickers.js`（素材の読み込みでインスペクタを更新） | `tests/pano_stickers_node_surface.test.mjs`、`tests/pano_editor_ui_state.test.mjs`、`tests/pano_studio_node_surface_contract.test.mjs` |

## 表示の構成

`PanoramaStudio` は旧 `PanoramaStickers` と同じDOM canvas、shared three.js view、teardownを使い、Vue overlayだけを
`PanoStudioNodeSurface.vue` に替える（ADR 0029）。

- Node 2.0とLegacy node rendererで同じDOM surface実装を使う。
- canvasはnodeの利用可能領域を満たし、縦横resizeへ追従する。surface の大きさは出力の比で変わらない。
- Vue mount成功後だけ標準 `Open Studio Editor` widgetを隠す。mount失敗時は標準widgetを表示したままとし、editorへの導線を失わない。
- hidden overlay領域はcanvas操作を遮らない。
- 置くのは上端の bar（状態と `Open Editor`）だけで、Sticker の選択・drag・削除、画像の追加と drop、Delete / Backspace、再生ボタンは持たない（ADR 0029）。
- camera viewは一時状態とし、workflowへ保存しない。

## 上端の bar と状態

- 上端の固定高さのbarに、状態と `Open Editor` を置く。状態は撮るもの（`ERP`、`Camera · Perspective`、
  `Camera · 360°` / `180°`）、出力の画素数、上限（4096）に収めたときの元の大きさ、auto で `bg_media` が
  無いときの注記を示す。注記の欄は空でも場所を保ち、controlを動かさない。
- 状態は実行前から `state_json` と `output_size`・`coverage` で決める（`web_src/pano_studio_status.js`、
  Python の `_studio_output_size` と `tests/test_studio_status_parity.py` で一致させる）。`hFOV_max` は
  media を読まない Timeline の frame で求める（見積もり）。
- 実行後は、実行が返した大きさ（`ui` の `pano_output_size`）を見積もりより優先する。VIDEO・IMAGE batch・
  port の media・上流の Scene は Timeline の長さや coverage を変えるため。使うのは、実行時の media の接続
  （background・sticker・scene）が今と同じで、かつ `pano_output_size.key`（`state_json`・`output_size`・
  `coverage`・`bg_color` の hash、`_studio_run_key` / `studioRunKey`）が今の値と一致するときだけで、実行後に
  編集したら見積もりに戻る。状態はこれらの入力が変わったときだけ計算し直す。接続（link）を変えずに上流の
  中身を変えたとき（LoadImage で別の画像を選ぶ、上流のノードの widget を変えるなど）は検出しないので、
  実行し直すまで前の実行の結果を示す。
- auto の `bg_media` の幅は、直近の実行結果の `pano_bg_width`、無ければ接続した画像、または node が
  再生用に読む VIDEO file の幅とする。実行前は frontend が preview に読む画像の幅に従うため、それが
  `bg_media` の実際の幅と違えば、実行までは表示が実行結果と違うことがある。わからない間は大きさを
  `auto` と示す。上流の Scene の `bg_media` は実行結果からだけわかる。

### 新しい UI の撮り方と出力の大きさに合わせた変更（ADR 0048。ノードと状態の変更と同じ change で入れる）

上の規則のうち、次を置き換える（撮り方と出力の大きさの規則は `docs/studio-node.md`）。

- 状態の一行：撮るものと出る大きさを一行で出す。例 `Panorama 360° · 2048 × 1024`、`Panorama 180° · 1448 × 1448`、`Frame 16:9 · 1928 × 1088`
  （Frame の比は、`camera.aspect` との差が 1% 以内のプリセット（16:9・3:2・4:3・1:1・3:4・2:3・9:16）があればその比、無ければ
  `W:H`（出る大きさの幅と高さ）で出す）。画面に `ERP`・`Perspective`・`Camera ·` の語は出さない
  （`CONTEXT.md` の「画面の言葉」）。「Camera が無い」に当たる表示は無くなる（Camera はいつもある）。この一行が、ノードの上で出る大きさを
  先に見せる唯一の場所である（`io.ResolutionPreview` は使わない。`docs/studio-node.md`）。
- 出力の画素数は `megapixels`・`multiple` と状態の比から、`pano_studio_status.js` の `studioOutputSize`（新しい式）で求める。上限
  （`STUDIO_MAX_OUTPUT_SIDE`）に収めたときは元の大きさを示す。`auto` と「`bg_media` が無いときの注記」は無くなる（`auto` が無いため）。
  注記の欄の場所は、ほかの注記のために保つ。
- 実行結果を使う条件の `pano_output_size.key`（`_studio_run_key` / `studioRunKey`）は、`state_json`・`megapixels`・`multiple`・
  `background_range`・`background_color` の hash にする（`output_size`・`coverage` を外す）。
- 実行の出力の分け方：`pano_output_erp` を返すのは `projection` が `erp`（Panorama モード）のときだけで、上の「Camera が無いか、隠したか」
  の分岐は無くなる（Camera はいつもあり、隠しても撮る）。`pano_output_erp` に添える `rotation` はいつも Camera の frame 0 の値で、`null` に
  ならない。
- `pano_bg_width` は、`auto` の幅を求めるためだけにある（読むのは `pano_preview_runtime.js` の `studioBgWidth` だけ）。`auto` が無くなるので、
  ノードの `ui` の `pano_bg_width` と `studioBgWidth` を消す。

## 実行前の表示

- 実行前は、背景と sky Sticker・paint を Timeline の最初の frame で描き（live の描画）、drag / wheel で
  見回すだけとする。world Sticker と 3D の素材（`scene`）は描かない。注記の欄の先頭に `Not run yet` と示す。
- background、paint / raster、stickerはbackendと同じdisplay orderで描画する。

## 実行の出力の表示

- 一度実行すると、surface は常に直近の実行の出力を示す（ADR 0029）。実行は出力（`first_frame`、動画なら最初の
  frame）を元の大きさの PNG で temp に書き（`TEMP_FILES` に登録、縮小しない）、`ui` で返す。出力が ERP のとき
  （Camera が無いか、隠したか、`projection` が `erp`）は `pano_output_erp` に `coverage` を添えて返し、
  パノラマはその画像だけを背景に描いて見回す。sky Sticker と paint は重ねない（3D・world・上流の Scene も
  すでに入っている）。`coverage` 180 なら前半球として描く。`perspective` の Camera のときは `pano_output_frame`
  で返し、surface はそれを平らな画像として、比を保ったまま上端の bar の下（surface の上から 38px より下）に
  収めて描く（余白は黒、切り取らない、surface の大きさは変えない）。見回しはしない。
- 実行の後に入力が実行と合わなくなっても（上の `pano_output_size` と同じ条件：media の接続と
  `pano_output_size.key`）、出力を示し続け、注記の欄の先頭に `Edited — run to update` と示す。合っている間は
  この注記を出さない。どちらの注記も同じ欄に入り、長ければ省略記号で切る（layout shift なし）。
- 画像を読み込めるまでは live の描画を示す。読み込めなかったとき（再起動で temp が消えたなど）は live の描画に
  戻し、注記を `Run output unavailable — run again` にする。読み込みに失敗した file は、次にこの node が実行
  される（`executed` が届く。cache から同じ `ui` が送り直されたときも含む）まで読み直さない。実行のたびに一度だけ
  読み直す。画像は結果の file ごとに一度だけ読んで decode し、node を外すと手放す。collapse や非表示の間は
  読まない。
- Camera の ERP は Camera の向きで撮った ERP なので、実行は `pano_output_erp` に撮った回転（Camera の frame 0 の
  `yaw_deg`・`pitch_deg`・`roll_deg`、Camera が無いか隠したときは `null`）を `rotation` として添える。パノラマは
  その回転（`studioRunQuaternion`）で ERP の球を回して World の向きに戻して描く。run が `core/render.py` の
  `_rays` で回したものの逆で（`tests/test_studio_run_erp_orientation.py`）、二つの描き方を切り替えても向きは
  跳ばない。実行の後に Camera を回しても、示す出力の向きは変わらない。
- `port` の Sticker の vFOV は状態に書かない派生値なので（`docs/scene-state-v2.md`）、実行の後に port の
  素材が読み込まれても `state_json` は変わらず、実行と合ったままになる。エディタの inspector は、`port` の
  Sticker の V FOV を素材から求めた値で示し、無効にする（`stickerParamEnabled`）。Sticker には上下の辺の
  handle がないので、vFOV だけを変える操作もない。

## 見回し

- 空所primary dragはcameraをpanする。wheelは共有controllerで横FOVを1イベント3度変更する。
- 空所drag / wheelはCutout / Previewと同じcamera感度で動く。
- Node 2.0ではDOM widget rootを`tabindex="0"`かつ`data-capture-wheel="true"`とし、surfaceへのpointer enterで
  rootへfocusを移してからwheelを受け取る（`pano_wheel.js` の `bindWheelCaptureRoot`）。wheelを受けるにはこの2つの両方が要る。
  この捕捉の規則は旧ノードと Preview の Scene のビューアも使い、この節だけが持つ。
- Space キーは割り当てない（canvas上の Space は ComfyUI の pan）。

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
- `Open Editor` を押すと、先に再生を一時停止する。

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
- teardownはVue app、RAF、ResizeObserver、media callback、render core、listener、widget hookを破棄・復元する。
  remove / reconfigure / re-addで二重mount、listener、RAF、media callbackを残さない。
- raster objectのnode preview用surfaceは最大1024×512とし、objectごとに最新revisionだけを保持する。
