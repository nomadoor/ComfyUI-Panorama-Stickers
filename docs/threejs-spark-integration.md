# three.js と Spark による 3D の表示

エディタとノード上の表示が three.js と Spark で描く規則を定める：three.js と Spark の版と遅延読み込み、Preview の表示、Cutout エディタの描画、投影と当たり判定のカメラ、空間の表示の描き方（Sky と World の 2 パス、`scene` と 3D の Sticker の読み込み、Camera から見た表示）、GPU の当たり判定、Spark の描画をビューごとに分けること、レイヤのテクスチャの共有、World の組み立て、エディタの描画を直接表示すること、WebGL の unpack 状態、リリース前に確かめること、意図した差と既知の食い違い。用語は `CONTEXT.md` に従う。決めた理由は ADR 0021（Frame 表示）、0031（three.js と Spark の版）、0038（既定の照明）にある。

この文書が持たない規則：視点の操作・`world` の Sticker と Camera の編集・ギズモ・Panorama Studio のエディタ・上流の Scene の表示と編集・`port` の Sticker の同期と Pose handoff の表示・インスペクタ（`docs/editor-interaction.md`）、タイムラインと Keyframe の記録の規則（`docs/timeline-ui.md`）、状態 v2 と評価関数（`docs/scene-state-v2.md`）、ノードの出力と実行結果の `ui`（`docs/studio-node.md`）、描画関数（`docs/render-contract.md`）、ノード上の表示の規則（`docs/studio-node-surface.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 版の固定と遅延読み込みのチャンク（three.js は即時のバンドルに入れない、Spark は SPLAT を初めて読むときだけ） | — | `package.json` の devDependencies、`vite.lib.config.js` の `chunkFileNames`、`web_src/pano_editor_view.js`、`web_src/pano_scene_loaders.js` `loadSpark` | `tests/pano_editor_view.test.mjs`、`tests/check_panorama_bundle.test.mjs`、`tests/test_three_spark_core_pin.py` |
| Preview の表示（共有のビュー、チャンクの読み込み、使えないときの表示） | — | `web_src/pano_preview_view.js` `VIEW_UNAVAILABLE_MESSAGE`、`pano_editor_view.js` `createEditorView` | `tests/pano_preview_view.test.mjs` |
| Cutout エディタの描画（Frame 表示のカメラと文脈の範囲、Unwrap） | — | `pano_editor_view.js` `shotCamera`・`frameViewContext`、`web_src/pano_three_view.js` `renderUnwrap` | `tests/pano_editor_view.test.mjs`、`tests/test_legacy_goldens.py`、`tests/pano_editor_direct_view.test.mjs` |
| 投影と方向の当たり判定、描かない Sticker | — | `pano_editor_view.js` `viewProjection`・`workingSkyLayers`、`web_src/pano_sticker_geometry.js` | `tests/pano_editor_view.test.mjs`、`tests/pano_sticker_geometry.test.mjs`、`tests/pano_stickers_node_surface.test.mjs` |
| 空間の表示の描き方（2 パス、`world` の Sticker の板、3D の Sticker の要素（3D ファイルの Sticker は Sticker の `id` をキーに読む）、near・far） | — | `pano_three_view.js` `createThreeView`・`buildWorld`、`pano_editor_view.js` `worldStickerLayers`、`web_src/pano_space.js` `stickerContentRequest`・`stickerContentUrls`・`fileStickerRequests`・`fileStickerKey`・`spaceCamera`・`SPLAT_TO_SCENE`、`pano_three_view.js` `stickerItemInputs`、`pano_scene_loaders.js` `makeUnlit` | `tests/pano_editor_view.test.mjs`、`tests/pano_space.test.mjs`、`tests/pano_scene_items.test.mjs`、`tests/pano_editor_direct_view.test.mjs` |
| 3D ファイルの Sticker のエディタ用ファイル（Source ごとの問い合わせ、404 の後の問い合わせ直し、読めないときの知らせ） | — | `web_src/pano_file_3d.js` `createFile3dEditorFiles`・`FILE_3D_REFRESHES`、`web_src/editor/media_session.js` `file3dEditorFile`・`file3dNotice`、`web_src/editor/view_input.js`（404 で `refreshFile3d`） | `tests/pano_file_3d.test.mjs`、`tests/editor_media_session_file_3d.test.mjs` |
| 光が効く要素の材質と既定の照明（値と式の owner は `docs/render-contract.md`） | — | `pano_scene_loaders.js` `loadSceneItem`（`unlit` で材質を分ける）・`makeUnlit`・`makeLit`、`pano_space.js` `sceneFilesOf`（メタの `unlit`）、`pano_three_view.js` `DEFAULT_LIGHTS`・`createDefaultLights` | `tests/pano_scene_loaders.test.mjs`（値は `tests/fixtures/default_lighting.json` を読む）、`tests/pano_space.test.mjs`、`tests/browser/file_3d.spec.js` |
| `scene` の要素の読み込みと大きさの上限（複数の視点の要素を含む） | — | `web_src/pano_scene_items.js` `createSceneItems`・`SCENE_ITEM_BUDGET`・`overBudget`・`aheadFits`、`pano_scene_loaders.js` `loadSceneItem`、`pano_space.js` `sceneFilesOf`・`multiviewKey`・`sceneRequest` の `sources` | `tests/pano_scene_items.test.mjs`、`tests/pano_scene_loaders.test.mjs`、`tests/pano_space.test.mjs`、`tests/pano_upstream.test.mjs` |
| `DA3_GEOMETRY` mono の深度のグリッド（読み込み、頂点シェーダー、色のプロキシ、先読みの数） | — | `web_src/pano_depth_grid.js` `DEPTH_GRID_VERTEX`・`depthGridGeometry`・`inverseIntrinsics`・`readDepthGrid`・`depthGridBox`・`depthGridTooLarge`・`createDepthGridMaterial`・`createDepthGridPickMaterial`、`web_src/pano_depth_color.js` `createDepthColors`・`depthGridNotice`・`DEPTH_VIDEO_LOADING`、`pano_scene_loaders.js` `loadSceneItem` の `depth_grid` の枝、`pano_space.js` `sceneFilesOf`・`sceneRequest` の `depth_grid` の枝と `DEPTH_GRID_PREFETCH`、`pano_three_view.js` `depthColorTexture`・`createDepthColorTextures`、`editor/view_input.js` `depthVideoNotice` | `tests/pano_depth_grid.test.mjs`（fixture `tests/fixtures/da3_depth_grid/`）、`tests/pano_depth_color.test.mjs`、`tests/pano_scene_loaders.test.mjs`、`tests/pano_space.test.mjs`、`tests/pano_scene_items.test.mjs`、`tests/browser/three_view.spec.js` の深度のグリッドの場面（`tests/browser/pages/depth_grid.html`・`depth_grid.js`）、`docs/render-contract.md` の「エディタとの一致（DA3 mono の場面）」 |
| Camera 向けの部品と Camera から見た空間の表示 | — | `pano_space.js` `cameraFrustumSegments`・`cameraTrajectory`・`placedCamera`、`web_src/editor/view_input.js` `shotViewCamera` | `tests/pano_space.test.mjs`、`tests/pano_editor_view.test.mjs` |
| GPU の当たり判定 | — | `pano_three_view.js` `pickAt`・`pickPass`・`pickSticker`・`pickSurface`・`pickMaterial`（深度のグリッドには `createDepthGridPickMaterial`）、`web_src/pano_pick.js` `pickWindow`・`packPick24`・`rayBoxDepth`・`nearestHit`・`pickCacheKey` | `tests/pano_pick.test.mjs`、`tests/pano_editor_view.test.mjs` |
| Spark の描画はビューごとに 1 つ | — | `web_src/pano_spark_views.js` `createSparkViews`・`disposeSpark`、`pano_three_view.js` `releaseSplats` | `tests/pano_spark_views.test.mjs` |
| レイヤのテクスチャの共有（変わった矩形だけを送ること） | — | `pano_three_view.js` `createLayerTextures`・`uploadTextureRegions` | `tests/pano_editor_view.test.mjs`、`tests/pano_paint_damage.test.mjs`、`tests/browser/paint_regions.spec.js` |
| World の組み立て | — | `pano_three_view.js` `buildWorld`・`setChildren`・`cachedLines` | `tests/pano_pick.test.mjs` |
| エディタの描画を直接表示する（スケジュール、キャンバス、解像度、コンテキストの喪失） | — | `web_src/pano_frame_scheduler.js` `createFrameScheduler`、`pano_editor_view.js` `screenRenderSize`、`pano_three_view.js` `fitRenderSize`、`web_src/components/PanoModal.vue` | `tests/pano_frame_scheduler.test.mjs`、`tests/pano_editor_direct_view.test.mjs`、`tests/pano_preview_view.test.mjs` |
| WebGL の unpack 状態 | — | `pano_three_view.js` `settleUnpack` | `tests/pano_editor_view.test.mjs`、`tests/test_three_spark_core_pin.py`、`tests/browser/three_view.spec.js` |

## 版と同梱

エディタの 3D 表示のため、`three@0.184.0` と `@sparkjsdev/spark@2.1.0` を devDependencies に固定して持つ。版はコアのフロントエンド（comfyui_frontend_package 1.53.6）に同梱されている版と一致させている。その sourcemap のパスは `three@0.184.0` と `@sparkjsdev+spark@2.1.0_three@0.184.0` で、バンドル内の three の revision は `184` である。バンドル内に見える `REVISION = "180"` は、Spark の worker に埋め込まれた three のものである。

Spark 2.1.0 の dist は、WebAssembly を `data:application/wasm;base64` で埋め込み、worker を blob URL で起動する。別ファイルを参照しないので、現在の単一ファイルのビルド（vite の lib モード）のままで動き、拡張の配信パスにも `import.meta.url` にも依存しない。ただし、`worker-src` で blob を許可しない CSP のもとでは動かない。

同梱した場合の大きさは約 5.8MB（gzip で約 1.9MB）で、大半は Spark が占める。ComfyUI は `web/` の `**/*.js` をすべて拡張として読み込むので（`server.py` の `get_extensions`）、`.js` のチャンクに分けても遅延読み込みにはならない。そのため、three.js と Spark は、ComfyUI が自動では読み込まないドットで始まるフォルダに `.js` として出力し、エディタを開いたときに読み込む方針とする。`.mjs` も `**/*.js` の対象外になるが、コアが明示的に MIME を登録しているのは `.js` だけで（`utils/mime_types.py`）、`.mjs` は Python の既定の対応表と OS の設定に依存するため、今は使わない。

`package-lock.json` は git で管理する。devDependencies は完全固定し、`npm ci` からのビルドで `web/panorama_suite.js` がバイト単位で一致する。

## 遅延読み込み

ComfyUI の `get_extensions` は `glob.glob(os.path.join(dir, "**/*.js"), recursive=True)` で拡張を集める。Python の `glob` は `include_hidden` を指定しない限りドットで始まるフォルダに入らないので、`web/.lazy/` の `.js` は自動では読み込まれない（Python 3.12 で確認）。一方、配信は aiohttp の `web.static` で、ドットで始まるパスも返す。そのため今は `.mjs` を使わず、`.js` とする（下の「リリース前に確かめること」の結果次第で変わる）。

- `vite.lib.config.js` の `chunkFileNames` で、動的 import したモジュールを `web/.lazy/<名前>-<ハッシュ>.js` に出力する。ハッシュを付けるのは、更新後にブラウザが古いチャンクを使わないようにするためである。エディタを開いたときに `pano_editor_view.js` がこれを読み込む。
- `npm run build:web` は古いチャンクを消さない。ハッシュが変わったら古いファイルを消す（`check:web` が報告する）。
- チャンクの読み込みか WebGL の初期化に失敗したときは、コンソールにエラーを出し、画面にもそのことを表示する。
- `pano_three_view.js` が import するのは、three.js（`TransformControls` を含む）と、チャンクの中だけで使うモジュール（`pano_pick.js`・`pano_scene_items.js`・`pano_scene_loaders.js`・`pano_spark_views.js`・`pano_depth_grid.js`・`pano_lens_glsl.js`）だけである。GLTFLoader と Spark は `pano_scene_loaders.js` が読み込む（Spark は動的 import の `loadSpark`）。計算は即時に読み込まれる側（`pano_editor_view.js`）で行い、チャンクが `panorama_suite.js` から import し返さないようにしている。
- `npm run check:web` は `panorama_suite.js` と `web/.lazy/` の全チャンクを再ビルドした結果と比べ、ビルドが出力しない古いチャンクも報告する。
- three.js の GLTFLoader は同じチャンクに静的に入れる（チャンクは約 1.0MB、gzip で約 0.22MB）。Spark は別のチャンク（`web/.lazy/spark.module-<ハッシュ>.js`、約 5.2MB、gzip で約 1.8MB）で、SPLAT の `scene` を初めて読み込むときだけ `import()` する（`pano_scene_loaders.js` の `loadSpark`）。3D を使わないエディタとノード上の表示は Spark を読まない。Spark のチャンクは three.js を最初のチャンクから import する。

### リリース前に確かめること

- Comfy Registry の配布物（zip）に、ドットで始まるフォルダ `web/.lazy/` が含まれるか。まだ確かめていない。含まれなければ、チャンクを `web/` 直下の `.mjs` に出力する案に移る（`**/*.js` の対象外になるが、MIME はコアではなく Python と OS の対応表に依存する）。

### 意図した差：画像の色空間

three.js は `colorSpace` が `NoColorSpace` のテクスチャを `UNPACK_COLORSPACE_CONVERSION_WEBGL = NONE` で読み込む。ブラウザの既定（変換あり）とは違うので、ICC プロファイル付きの画像（Display P3 の写真など）は、エディタでの色味が変わりうる。PIL はプロファイルを適用しないので、ノードの出力にはむしろ近くなる。コードでは対処しない。

## Preview の表示

- Preview の読み取り専用のモーダル（「Open Preview」と全画面の代わりに開くもの）は、Stickers のエディタと同じ `createEditorView` で描く。モーダルを開いている間だけ WebGL コンテキストを一つ使い、閉じると `forceContextLoss` で解放する。
- ノード上の Preview は、グラフ上のすべての Preview ノードで three.js のビューを一つ共有する（`pano_preview_view.js`）。各ノードは描いた直後の画面を自分の 2D の canvas に `drawImage` で写す。WebGL コンテキストはノードの数によらず一つである。テクスチャはビューで共有し（下の「レイヤのテクスチャの共有」）、素材が外れたときとノードを消したときに解放し、最後のノードが消えるとコンテキストも解放する。共有の canvas は使っているノードの中で最大の大きさに保ち、各ノードは左下から自分の大きさの範囲だけに描いて、その矩形を写す。
- チャンクは、ノード上に描くものが初めてできたときに読み込む。Preview では表示する IMAGE / VIDEO、ノード上の Stickers と Cutout の表示では背景・Sticker・ペイントのどれかである。`LoadImage` などにつながった Preview があるワークフローでは、グラフを開いた直後に読み込まれる。描くものがない Stickers の表示は、view を呼ばずに格子だけを描く。Preview は読み込みが終わるまで、画像のない状態と同じ格子を表示する。
- チャンクか WebGL が使えないときは、ノード上の Preview もモーダルもそのことを表示する。ノード上の Preview は、すべての Preview ノードが消えたあと、次に描くときに読み込みをやり直す。

## Cutout エディタ

Cutout のエディタも、Stickers と同じ `pano_editor_view.js` / `pano_three_view.js` で描く。新しい描画系統は作らない。

- Panorama タブは Stickers と同じ描画を使う。
- Frame タブは `shotCamera` で shot から覗く three.js のカメラを作り、`frameViewContext` が ADR 0021 のとおりゲートの外まで同じ焦点距離で描く範囲を決める。presentation scale・ゲート・FOV の関係も ADR 0021 のとおり。表示する撮影範囲が Cutout ノードの出力と一致することは、`tests/test_legacy_goldens.py` が Cutout の基準画像で確かめている。
- カメラプレビューは、エディタのビューを `owner` を分けて共有する（WebGL コンテキストはエディタで一つ）。表示する `<canvas>` は Vue の `PanoFloatingRight.vue` が持つ。描き方は下の「エディタの描画を直接表示する」を参照。
- Unwrap 表示も three.js で描く（`renderUnwrap`）。Stickers のエディタと Preview のモーダルの Unwrap も同じ経路になる。180 の ERP は横幅いっぱいに引き伸ばす。
- three.js を読み込めないときは、Stickers と同じく失敗を表示する。

### 既知の食い違い

- shot の FOV が 0 のとき、エディタの `getCutoutCameraParams` は互換のため 90° / 60° とみなす。状態 v2 への移行（`pano_scene_state.js` の `v1Camera`）とノード（`nodes.py`）は最小値（1° または 0.1°）に丸めるので、この場合だけエディタの表示とノードの出力が一致しない。また `v1Camera` は shot の `rot_deg` を roll として読まない。

## 投影と当たり判定のカメラ

投影と当たり判定は、three.js のカメラの一系統で行う。

- `pano_editor_view.js` の `viewProjection(camera, width, height)` は、`viewportCamera` / `shotCamera` のカメラ（three.js に渡すものと同じ）から、方向を画面上の点に移す `project` と、画面上の点の方向を返す `ray` を作る。
- エディタの Panorama 表示は、`sky` の Sticker の選択・移動・拡大縮小・回転、ペイントの座標、グリッドと枠の重ね描きを、描画と同じカメラの `viewProjection` で計算する。Frame 表示は上の「Cutout エディタ」のとおり `shotCamera` と一致する Cutout の計算を使う。
- ノード上の Stickers と Cutout の表示も、Preview ノードと共有する three.js のビュー（`pano_preview_view.js`）で描く。Stickers の表示の Sticker の選択と操作は、描いたビューの `viewProjection` で当たり判定をする（`pano_sticker_geometry.js`）。
- three.js のチャンクか WebGL が使えないときは、黒い画面のままにせず、エディタとモーダルはステージに失敗の表示（`PanoModal.vue`）を出す。ノード上の Preview・Stickers・Cutout の表示は、それぞれの Vue のノード面（`PanoViewUnavailable.vue`、文言は `pano_preview_view.js` の `VIEW_UNAVAILABLE_MESSAGE`）に「3D view unavailable」を出す。
- エディタの設定に Render Quality（`ui_settings.preview_quality`）は無い。状態や localStorage に残っている値は、知らないキーとして読み捨てる。
- ノード上の表示の Sticker は、状態 v2 への読み込みで id が付け替えられたもの（id がない・文字列でない・重複した 2 つめ以降）は描かない（`workingSkyLayers`）。エディタも同じ規則で描く。

## 空間の表示

Panorama Studio のエディタの Panorama 表示は、World の内容（`scene` 入力の接続・実行結果の `scene` のエディタ用ファイル・`world` の Sticker のどれか）があるとき、World を奥行き付きで描く空間の表示になる（3DoF・6DoF は `docs/editor-interaction.md` の「視点の操作」）。内容がなければ、見回しだけの表示である。Unwrap 表示と旧ノードは空間の表示を持たない。

- Camera が無いときの ERP は World の原点から回転 0 で撮る。グリッドの原点に黄色の印と「ERP origin」の表示を置く。
- `sky` の Sticker・ペイント・背景は無限遠にあるので、視点の位置によらず同じ向きに見え、選択・移動・ペイントは方向で当たり判定をする（`viewProjection`）。空間の表示では球面の格子の代わりに、地面（World の XZ 平面）のグリッドと軸（X 赤・Y 緑・Z 青）と原点を three.js で描く。グリッドの間隔は内容の大きさに合わせた 10 のべき乗である。
- 描き方：`pano_three_view.js` の `render` に `space` を渡すと、まず Sky を回転だけのカメラで描き、深度をクリアしてから、World を視点の位置のカメラで深度を使って重ねる（キャンバスに深度バッファを持たせた）。
  - `scene`：実行結果の `pano_scene_files`・`pano_scene_meta` を、`scene` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `scene` のチャンネル）。再生ヘッドの Timeline frame で評価した `scene` の Clip range の中だけ、ノードと同じ規則（`batch_index`）で選んだ要素を、`scene` の変形を掛けて描く。MoGe の VIDEO のように要素ごとにファイルがあるものは、次の要素を先に読み込む。`DA3_GEOMETRY` mono の深度のグリッドは、次の `DEPTH_GRID_PREFETCH`（8）個の要素を先に読み込む（要素が小さいので、再生が読み込みに追いつくため。下の「`DA3_GEOMETRY` mono の深度のグリッド」）。
  - 読み込みは `pano_scene_items.js` のキューで、同時に 2 本までにする（`fetch` を `AbortController` 付きで行い、GLB は `GLTFLoader.parse`、PLY は Spark の `SplatMesh` の `fileBytes` で読む）。最新の要求（表示する要素、次にその先読み）を優先し、待っている間に要らなくなった読み込みは始めない。走り始めた読み込みは最後まで読む（中断するのは `scene` 入力が差し替わった・外れたときと、エディタを閉じたときだけ）。同じ URL は二重に読み込まない。スクラブしても読み込みは際限なく増えない。
  - 読み込み中・再生中の表示：そのフレームの要素がまだ読み込めていないときは、入力の要素のうち読み込み済みで、そのフレームの要素より前の最も近いものを出す（前になければ後ろの最も近いもの）。再生中は要素が読み込みに追いつかないので、読み込めた要素だけを間引いて出す（同時に 2 本ずつ新しい要素が届く）。止める・シークすると、そのフレームの要素を最優先で読み、届いたらそのフレームの要素を正確に出す。
  - `pano_scene_files`（`pano_sticker_files`）の値がパスのリストの要素（`DA3_GEOMETRY` の multiview。`docs/render-contract.md` の「`DA3_GEOMETRY` のメッシュ」）は、リストの全視点の GLB を読んで 1 つの組（three.js の `Group`）にした 1 つの要素として扱う。要素のキーは視点の URL の並び（`pano_space.js` の `multiviewKey`）で、読む先の URL のリストは要求の `sources`（キー → 視点の URL）に持つ（`sceneFilesOf`・`sceneRequest`、`pano_scene_items.js`）。全視点が読み込めてから表示し、箱は全視点を囲み、大きさは全視点のバイト数の和で数える（`pano_scene_loaders.js` の `loadSceneItem`）。1 つの視点でも読み込めなければ要素全体を読めなかったものとし、読めた視点も捨てる。上流の Scene の層の要素も同じに扱う（`pano_upstream.js`）。値が `[null]`（すべての視点が空）の要素は、空の要素と同じく何も描かない。
  - 読み込んだ要素は、数ではなく大きさの上限で持つ（`pano_scene_items.js` の `SCENE_ITEM_BUDGET`。値は `docs/runtime-resources.md` の「エディタのメモリの目安」）。大きさは要素ごとに読み込んだバイト数（GLB・PLY のファイルの大きさ）で数え、合計が上限を超えたら、使っていない古いものから捨てる（`overBudget`）。表示している要素と、表示や先読みに求められている要素、読み込み中の要素は捨てない。上限は `scene` と 3D の Sticker のキューで別々に持つ。深度のグリッドの要素も同じ上限で数える（下の「`DA3_GEOMETRY` mono の深度のグリッド」）。要素は間引かずに全解像度で届く（MoGe のパノラマ 4096 x 2048 の 1 フレームで約 390 MB。`docs/studio-node.md`）ので、MoGe の VIDEO で巨大な要素がいくつも並んでメモリを使い切らないようにするためである。
  - 要素を捨てるときは、材質ごとに、材質が持つすべてのテクスチャ（`map` だけでなく法線・粗さ・発光なども）を `dispose` してから材質を `dispose` する（`pano_scene_loaders.js` の `disposeMaterials`・`disposeObject`。材質を置き換えたとき（光の効かない材質にした、静止の GLB の材質を使う）は、残る材質がまだ使うテクスチャだけを残す）。
    - 先読みは、持ち続ける要素（表示している要素と求められている要素）と読み込み中の要素に、もう 1 つ足しても上限に収まるときだけ始める（`aheadFits`）。まだ読み込んでいない要素の大きさは分からないので、読み込み中と次の要素は、読み込み済みの最も大きい要素と同じ大きさとみなす。何も読み込んでいない間は先読みしない。1 つで上限を超える要素は表示するが、その先は読み込まない。
    - 表示する要素は上限によらず必ず読み込む。新しい要素を読み込む間は、前の要素を表示し続けるので、1 つで上限を超える要素なら、その間は一時的に 2 つ分を持つ。
    - 取得した `ArrayBuffer` は、パーサー（GLTFLoader・Spark）に渡したら参照を外す（`pano_scene_loaders.js` の `loadSceneItem`）。残るのはパースした要素だけである。
  - `scene` 入力が差し替わって（再実行）今の要素の一覧にないものは、その場で捨てる。エディタを閉じると全部捨てる。
  - 既知の挙動：サーバーを再起動して temp のファイルが消えた後（404）は、その要素の代わりに、上と同じく前の最も近い読み込み済みの要素を出し続ける（どれも読めなければ何も出さない）。エラーは URL ごとに 1 回だけコンソールに出し、同じ URL は読み直さない。実行し直すと新しいファイルになる。
  - SPLAT の PLY は Spark の `SplatMesh` で読み、コアの Load3D と同じく X 軸まわりに 180° 回してから（`SPLAT_TO_SCENE`）`scene` の変形を掛ける。並べ替えが終わるたびに描き直す。
  - `DA3_GEOMETRY` mono と `MOGE_GEOMETRY` の透視投影の列（`pano_scene_meta` の `kind` が `depth_grid`）は GLB ではなく、下の「`DA3_GEOMETRY` mono の深度のグリッド」で描く。
  - MESH・MoGe・DA3 multiview の GLB は GLTFLoader で読み、`pano_scene_meta`（3D の Sticker は `pano_sticker_meta`）の `unlit` で材質を分ける（`sceneFilesOf`）。GLB の `KHR_materials_unlit` は使わない（理由は `docs/render-contract.md` の「光が効く要素」）。`unlit` が偽のメッシュだけを照らし、`unlit` を持たないメタ（古い実行の結果）は光が効かない要素として扱う。
    - `unlit` が真：材質を `MeshBasicMaterial`（光源なし、両面、base color・テクスチャ・頂点色を保つ）に置き換える（`makeUnlit`）。base color は glTF の定義どおり線形の値として表示し、ノードも同じ色空間で描く（`docs/render-contract.md` の「色」）。
    - `unlit` が偽：GLTFLoader が作った `MeshStandardMaterial` をそのまま使い、`side` だけを `DoubleSide` にする（`makeLit`。ノードと同じく両面に描く。`docs/render-contract.md` の「材質」）。法線の無い GLB は GLTFLoader が `flatShading` にする。
    - テクスチャ：GLTFLoader は GLB の sampler に従う。ノードが書くエディタ用の GLB（コアの `save_glb`）の sampler は、wrap が `CLAMP_TO_EDGE`、filter が拡大・縮小とも `LINEAR`（mip を使わない）である（`comfy_extras/nodes_save_3d.py:363-365`、three r184 の `GLTFLoader.js:3265-3267`）。sRGB のテクスチャは `SRGB8_ALPHA8` で上げるので、補間は線形の空間で行われる（`WebGLTextures.js:234`）。エディタは sampler を置き換えない。出力がこの標本化を写す（`docs/render-contract.md` の「テクスチャの標本化」）。
    - 照明：World のパスの three.js の Scene に、`docs/render-contract.md` の「既定の照明」の光源（AmbientLight 1 つと DirectionalLight 5 つ、`target` は原点）を置く。光源は World に固定し、`scene` と Sticker の変形の下には置かない。影は描かない（`castShadow` は偽のまま）。レンダラーは three.js の既定の `NoToneMapping` と `SRGBColorSpace` の出力のまま使う。光源は `MeshBasicMaterial` と Spark の描画には効かないので、光が効かない要素の見た目は変わらない。
  - `world` の Sticker は、評価した位置・回転・`scale` の両面の板として、切り抜いた素材を貼って描く（`worldStickerLayers`）。奥行きで前後する。選択と操作は`docs/editor-interaction.md` の「`world` の Sticker の操作」。
  - 3D の `world` の Sticker（`sticker` に MESH・SPLAT・3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY` をつないだ `port` の Sticker）：実行結果の `pano_sticker_files`・`pano_sticker_meta`（`pano_scene_files` と同じ形）を、`sticker` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `external-sticker` のチャンネル）。Sticker の Clip range の中で表示しているときだけ、Sticker の clip frame から `scene` と同じ規則（ノードの `batch_index`）で要素を選び、評価した位置・回転・`scale` を `scene` の変形と同じ意味で掛けて、不透明度で描く（`pano_space.js` の `stickerContentRequest`）。`DA3_GEOMETRY` の multiview と、深度のグリッドの条件を満たさない `MOGE_GEOMETRY` は MESH と同じ GLB で、`DA3_GEOMETRY` の mono と `MOGE_GEOMETRY` の透視投影の列は `scene` と同じ深度のグリッドで届く（色のプロキシの follower は Sticker ごとに 1 つ）。状態に `world` の `port` の Sticker がない間は要素を持たず、読み込み済みの要素は捨てる（`stickerContentUrls`）。Sticker を表示していない間（非表示、Clip range の外）は、読み込んだ要素を描かずに持ち、表示に戻っても読み直さない（`pano_three_view.js` の `stickerItemInputs` が、持つ要素のキーを `pano_scene_items.js` の `requestMany` の持つだけの入力 `{ urls }` にして渡す）。SPLAT は X 軸まわりに 180° 回してから変形を掛け、不透明度は `SplatMesh` の `opacity` にする。メッシュは `scene` と同じく `unlit` で材質を分けて両面に描き、不透明度は材質の `opacity` にする。読み込みは `scene` と同じ部品（`pano_scene_items.js`・`pano_scene_loaders.js`）の、Sticker 用の別のキューで行う（`scene` と同じファイルでも、three.js のオブジェクトは一つの親しか持てないので別に読む）。要素の箱は Frame Selected と注視点の距離の内容の大きさに入る。ギズモでの操作は `docs/editor-interaction.md` の「`world` の Sticker の操作」。
  - 3D ファイルの `file` の Source の `world` の Sticker（Add to World で置いたもの。`pano_space.js` の `fileStickerRequests`、`pano_three_view.js` の `buildWorld`）：`is3dFileSource`（`docs/scene-state-v2.md` の「3D ファイルの `file` の Source」）が真の Sticker は板にせず、画像として読まない（`getStickerImage` を呼ばない）。`docs/studio-node.md` の「3D ファイルの `file` の Source のエディタ用ファイル」が返すファイルと `kind`・`unlit` を、`port` の 3D の Sticker と同じ部品と同じ描き方（要素 1 つ、評価した位置・回転・`scale`、不透明度、`unlit` で材質を分ける、既定の照明）で描く。実行の結果を待たないので、置いた直後から出力と同じ見た目になる。
    - 問い合わせ：Source（`storage`・`subfolder`・`filename`）ごとに、エディタを開いている間に 1 回だけ問い合わせ、応答を持つ（`pano_file_3d.js` の `createFile3dEditorFiles`。1 回の問い合わせは `requestFile3dEditorFile`）。失敗した応答も持ち、フレームごとに問い合わせ直さない。ファイルが 404 になったら（`editor/view_input.js`）、もう一度問い合わせる。問い合わせ直しは 1 つの Source につき 3 回まで（`FILE_3D_REFRESHES`）で、サーバーが消し続けるファイルを際限なく問い合わせない。問い合わせ直した応答は新しい世代になり、要素のキー（`fileStickerKey`）が変わるので読み直す。応答が失敗なら、その Sticker は何も描かない（置いた直後の失敗は `docs/editor-interaction.md` のとおり Sticker を消す。開いたときにすでにある Sticker は消さず、ノードと同じ文を `stageNotice` に出す）。
    - 読み込み：3D の Sticker のキュー（`stickerItems`。大きさの上限は `port` の 3D の Sticker と共有）で、Sticker の `id` とエディタ用ファイルの世代をキーにして読む（`fileStickerKey`。URL をキーにしない）。同じファイルを使う Sticker が複数あっても別々に読む（three.js のオブジェクトは一つの親しか持てず、不透明度は材質に掛けるため）。表示していない Sticker（非表示、Clip range の外）の要素は、`port` の 3D の Sticker と同じく持ち続け、戻っても読み直さない（`fileStickerRequests` はその Sticker の要求を `null` にしてキーだけを返す）。状態から消えた Sticker の要素は捨てる。
    - 問い合わせの応答か読み込みを待つ間は、中身を描かない（前の見た目も、板も出さない）。
    - 経路が応答しても three.js が読み込めない（404 のほかの読み込みのエラー）ときは、中身を描かないが、Sticker は消さない（出力は経路とは別にファイルを読むので描ける）。そのときの知らせは `docs/editor-interaction.md` の「3D ファイルを置く流れ」。
    - 当たり判定、Frame Selected、注視点の距離の内容の大きさ、ギズモは、`port` の 3D の Sticker と同じく要素とその箱を使う。
    - 上流の Scene の層の 3D ファイルの Sticker も、同じ問い合わせと同じ描き方で描く（`pano_upstream.js` の層の項目。キーは層のキーと Sticker の `id`）。
    - test：`tests/pano_space.test.mjs`（`fileStickerRequests` が Sticker の `id` ごとの要求を返す）、`tests/pano_scene_items.test.mjs`（表示していない 3D の Sticker の要素を持ち続け、戻っても読み直さない）、`tests/pano_file_3d.test.mjs`（問い合わせ、失敗を持つ、問い合わせ直しの上限）、`tests/editor_media_session_file_3d.test.mjs`（エディタ用ファイルと読めないときの文）、`tests/pano_editor_view.test.mjs`（板にせず画像として読まない）、`tests/pano_scene_loaders.test.mjs`（`unlit` で材質を分ける）、`tests/browser/file_3d.spec.js`（smoke の test。ページの中で three.js の GLTFExporter で市松の箱の GLB を作り、既定の照明の下に描いて、コンソールのエラーが無い、WebGL context が失われない、空でない、`unlit` が偽なら光源の側の面が反対の面より明るく、`unlit` が真なら面の明るさが同じ、を確かめる。renderer の種類によらない。エディタと出力の一致は `docs/render-contract.md` の「3D ファイルの Sticker の場面」の道具で milestone ごとに確かめる）。
  - ノード上の表示（`pano_stickers_node_surface.js`・旧 Preview・Panorama Studio）は空間の表示を持たず（`scene` も描かない）、3D の Sticker も描かない。例外は新しい Preview の `PANO_SCENE` のビューア（`docs/preview-node.md` の「`PANO_SCENE` を見る」。`pano_scene_viewer.js`）で、この節の空間の表示をエディタと同じ部品で、編集の UI なしに描く（ギズモ・選択・Camera の線を出さず、当たり判定は視点の操作の `pickSurface` だけ）。ノード上では今ある共有のビュー（`pano_preview_view.js`）で描き、描き直すのは最後に操作した Preview のノードだけ（ほかは写した絵のまま）。大きなウィンドウはエディタと同じく自分の WebGL の context で描く。出力との差は下の「ノードの出力との差」と同じ。
  - 視点の three.js のカメラの near・far は、内容の外接球とグリッドから決める（`pano_space.js` の `spaceCamera`。far は内容と原点のまわりのグリッドの先まで、near は注視点の距離の 1/100 と内容の大きさの 1/10000 の大きいほう）。注視点の距離の 1/100 より近い内容は切れる。
- ノードの出力との差（意図して残しているもの）：
  - 要素の読み込み中と読めなかったときは、前の最も近い読み込み済みの要素を出す（ノードは必ずそのフレームの要素を描く）。`DA3_GEOMETRY` mono の深度のグリッドでは、前の要素が代わりに出ているあいだ、形はその要素の深度で、色は再生ヘッドの時刻の動画なので、形と色が食い違うことがある。要素が読み込めると揃う。再生中は要素を間引いて出す。要素のないフレーム（バッチの外、頂点や面のない要素）はノードと同じく何も描かない。
  - `DA3_GEOMETRY` mono の色（下の「`DA3_GEOMETRY` mono の深度のグリッド」）：色はプロキシの MP4（H.264 crf 23、4:2:0）から取るので、ノードの `image` より量子化と色差の間引きの分だけずれる。長辺が `EDITOR_MAX_SIZE`（2048）を超える入力（4K など）は、色が縮んだプロキシから来るので細部がぼける（形は全解像度のまま）。再生中は、色の動画が再生ヘッドから ±1 フレームまでずれてよい（follower の規則）ので、形と色が 1 フレームずれることがある。止めると同じフレームに揃う。
  - 3D の Sticker の不透明度：エディタのメッシュは両面のまま、不透明度が 1 より小さい間は深度を書かずに半透明にする（1 に戻すと深度を書く）。そのため不透明度を下げると、裏の面や奥の面も透けて重なって見える（ノードは手前の面だけを描く）。
  - κ ≠ 1 のスプラットの暗い色：レンズの面（余白付きの描画と立方体の面）では、Spark の `encodeLinear`（`pow(2.2)` の近似）でスプラットを線形にし、後処理は正確な sRGB で戻すので、エディタの表示だけでスプラットの暗い色が最大で約 7 段ずれる。ノードの出力は変わらない。スプラットを別のレンダーターゲットに分けないのは、メッシュとの深度の前後が崩れるためである。
  - レンズの Sticker の標本化：エディタのレンズの Sticker のシェーダ（`sky` のドーム、`world` の球面の一部）は双線形に標本化し、縮めて写すときの平均を取らない。ノードは面積で平均するので、細かい模様はエディタのほうが鋭く見える（ちらつくことがある）。次の候補。
  - 半透明の重なり：Spark はスプラットを深度を書かずに重ね、板は深度を書く。半透明のスプラットと `world` の Sticker が重なる画素の前後と混ざり方は、ノード（`over_by_depth`、スプラットの奥行きは積算アルファ 0.5 の位置）と一致しない。
- Camera 向けの部品：Camera の視錐台（`cameraFrustumSegments`）、Timeline 上の軌道（`cameraTrajectory`、評価関数で標本化）と、`render` の `space.lines`（線分の描画）。Camera が無いときは使わない。Frame 表示は Camera の shot から `shotCamera` を作り、`placedCamera` で位置に置く。

### glTF のアニメーション

アニメーションを持つ 3D ファイル（メタに `animation`。`docs/studio-node.md` の「glTF のアニメーションのエディタ用ファイル」）を、出力と同じ形で描く（ADR 0043。`pano_scene_loaders.js` の `loadAnimated`・`poseAnimation`。規則の owner は `docs/render-contract.md` の「glTF のアニメーション」）。

- 読み込み（`loadAnimated`。要求の `animation` に元のファイルの URL を持つ）：元のファイルを GLTFLoader で読み、その既定の scene（`scene` の番号。無ければ最初。コアの読み手と同じ）の `SkinnedMesh`・morph・node の階層をそのまま描く。材質は、今の静止の GLB（コアの MESH を `save_glb` が書いたもの）を GLTFLoader で読んだ材質を一つ取り、元のファイルのすべての mesh に当てる。コアは `alphaMode`・テクスチャの変形・`TEXCOORD_1`・遮蔽・PBR の拡張を落とし、sampler を書き直すので、静止の GLB の材質がすでに出力と同じであり、静止の場面と同じ理由で一致する。その材質が `vertexColors` を使い、元の形に `color` が無ければ、1 の `color` の属性を足す。光が効くかは静止の要素と同じ `unlit` で分ける。skin の mesh は three.js r184 の既定の `AttachedBindMode` のままで、`bindMatrixInverse` が毎フレーム `matrixWorld` の逆になるので、skin の頂点では mesh の node の行列が打ち消し合う（出力の式と同じ。`docs/render-contract.md` の「glTF のアニメーション」）。大きさは静止の GLB と元のファイルのバイト数の和で数える。
- 時刻：再生ヘッドの Sticker の clip frame から出力と同じ式で秒を求め（`pano_animation.js` の `animationPose`）、選んだ clip の `AnimationAction`（`LoopRepeat`、`timeScale = speed`）で `mixer.setTime(clip frame ÷ timeline.fps)`（`poseAnimation`）。実時間では進めない（`mixer.update` を時計で呼ばない）。
- 補間：three.js r184 の規則（`LINEAR` の回転は `Quaternion.slerpFlat`、`CUBICSPLINE` の回転は Hermite の後に正規化、`STEP` は `InterpolateDiscrete`）。Python がこれに合わせる（fixture で縛る）。
- 当たり判定：今の物ごとの当たり判定のマテリアル（`ShaderMaterial`）の頂点の部品（`pano_pick.js` の `PICK_VERTEX`）に、three.js の skin と morph の部品（`#include <skinning_pars_vertex>`・`<morphtarget_pars_vertex>`・`<skinbase_vertex>`・`<morphtarget_vertex>`・`<skinning_vertex>`）を足す。three.js は `ShaderMaterial` でも、描く物が `SkinnedMesh` か morph を持つときだけ `USE_SKINNING`・`USE_MORPHTARGETS` を定義した別の program を作るので、静止の物の当たり判定は今と同じで、動いた形にも当たる。別の組み立ては要らない。
- 箱（Frame Selected、注視点の距離の内容の大きさ）は、読み込んだ静止の GLB の箱（bind の形）ではなく、メタの `animation.box`（`pano_scene_meta`・`pano_sticker_meta`、3D ファイルの経路の応答の `animation`）を使う。最初の clip の時刻 0 の姿勢の箱で、出力の中身の箱（`content_box`）・経路の応答の `box` と同じ値であり、すでに `scene` の glTF の座標なので `sceneItemBox` を掛けない（`pano_animation.js` の `animationMetaOf` が残して要求の `animation.box` に載せ、`pano_space.js` の `sceneContentBox` が読み込んだ箱の代わりに使う。規則の owner は `docs/studio-node.md` の「中身の箱」）。メタに `box` が無ければ、読み込んだ GLB の箱を使う。test は `tests/editor_animation.test.mjs`。
- 一致：`docs/render-contract.md` の「エディタとの一致（glTF のアニメーションの場面）」。test は `tests/editor_animation.test.mjs`（要求の姿勢、読み込み）と `tests/browser/gltf_animation.spec.js`（再生ヘッドの clip の姿勢で描かれ、当たる）。
- 外部の `.bin` を持つ `.gltf` と、`/view` で読めない場所のファイルは、メタに `animation` が無いので静止の GLB で描く（出力はアニメーションを描く）。

### `DA3_GEOMETRY` mono の深度のグリッド

`DA3_GEOMETRY` mono のエディタ用ファイル（形式は `docs/studio-node.md` の「`DA3_GEOMETRY` mono のエディタ用ファイル」）を、three.js の 1 つの静的なグリッドと、フレームごとの深度のテクスチャで描く（`web_src/pano_depth_grid.js`）。決めた理由は ADR 0039。`MOGE_GEOMETRY` の透視投影の列（`docs/studio-node.md` の「`MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル」、ADR 0040）も同じ形式で届き、この節のとおりに描く。エディタは二つを区別しない（MoGe の画素の中心の決まりは、Python がメタの `intrinsics` に織り込む）。大きすぎる要素の知らせの文は、DA3 に限らない言い方にする（`depthGridTooLarge`）。WebGL2 を前提にする（`gl_VertexID`・`gl_InstanceID`・`texelFetch`・頂点シェーダーのテクスチャ）。

- 読み込み：要素のキーは深度のファイルの URL。`loadSceneItem` は `depth_grid` の要素で深度（`.f32`）を取得し（`readDepthGrid`）、R32F（`FloatType`・`RedFormat`）の `DataTexture` にする（`NearestFilter`、mip なし、`flipY` なし。テクスチャの行 0 がファイルの行 0＝像の上）。取得した `ArrayBuffer` はテクスチャに渡したら参照を外す。要素の大きさ（上限で数える値）は `W × H × 4` バイト。
- 上限：深度のグリッドの要素も、ほかの要素と同じ `SCENE_ITEM_BUDGET` で、要素の大きさ `W × H × 4` を数える。別の上限は持たない（量の目安は `docs/runtime-resources.md` の「エディタのメモリの目安」）。色のテクスチャは入力（`scene`・3D の Sticker・上流の層）ごとに 1 つで（`pano_three_view.js` の `createDepthColorTextures`。同じ入力の要素はすべてそれを `colorMap` に指し、画像が変わると作り直し、描かなくなった入力の分はその描画の終わりに捨てる）、`SCENE_ITEM_BUDGET` には数えない。
- 取得した大きさがメタの `depth.bytes`（`W × H × 4`）と違うか、メタの `depth.dtype` が `float32`、`depth.byte_order` が `little` でなければ、要素を読めなかったものとする。
- 大きすぎる要素：テクスチャの一辺が GPU の `MAX_TEXTURE_SIZE` を超える要素（WebGL2 が保証するのは 2048。4K の入力は 4096 以上の GPU が要る）は、読めなかったものとして扱い、GPU の上限（`MAX_TEXTURE_SIZE` の値と要素の大きさ）を示す知らせを出す（`depthGridTooLarge`。文は `DA3_GEOMETRY` と `MOGE_GEOMETRY` に共通で、どちらの型の名前も入れない。知らせは下の「色」の `depthVideoNotice`）。
- グリッド：`(W − 1) × (H − 1)` 個の四角を、四角ごとに 6 頂点で描く。頂点ごとの値は持たず、四角の番号を `gl_InstanceID`（`InstancedBufferGeometry` の `instanceCount`）、四角の中の角を `gl_VertexID`（0〜5）から決める（四角ごとの頂点の配列を持つと、1080p で約 149 MB になるため）。ジオメトリの `drawRange` の数は 6。位置はシェーダーで作るので three.js の境界球は使えず、ジオメトリは要素の間で共有するので要素の箱からも作れない。そのためメッシュは `frustumCulled = false` にする。三角形は `docs/render-contract.md` の「mono の残す画素」と同じ `(a, b, c)` と `(a, c, d)`。ジオメトリは同じ `W`・`H` の要素で共有し、要素を替えるときはテクスチャと uniform だけを替える。
- 頂点シェーダー（`DEPTH_GRID_VERTEX`。表示と当たり判定で同じ部品）：角の画素 `(x, y)`（整数の番号）の深度 `d` を `texelFetch` で読み、`p = d × K⁻¹ · (x, y, 1)`、glTF の位置を `(p.x, −p.y, −p.z)` にする。`K⁻¹` は JS が要素のメタの `intrinsics` から倍精度で求め（`inverseIntrinsics`）、`mat3` の uniform で渡す。四角の 4 隅のどれかの深度が 0 以下（`keep` の外。形式の決まり）なら、その四角の 6 頂点をすべて同じ切り取り空間の外の点にして描かない。色の uv は `(x ÷ (W − 1), y ÷ (H − 1))` で、像の上が 0（コアの uv と同じ）。色のテクスチャは、画像の種類（再生中の動画、止めたときの静止画の canvas、`ImageBitmap`）によらず上下を反転しない（`flipY` は偽。`pano_three_view.js` の `depthColorTexture`）ので、シェーダーは `v = y ÷ (H − 1)` をそのまま読む。深度のテクスチャと同じ規則である。three.js は `ImageBitmap` を `flipY` で反転できないので、反転を使うと画像の種類で上下が食い違うためである。`tests/browser/three_view.spec.js` が、上が赤・下が青の動画・canvas・`ImageBitmap` をそれぞれ描き、赤が上に出ることを確かめる。
- 先読み：次の `DEPTH_GRID_PREFETCH`（8）個の要素を先に読み込む（深度のグリッドだけ。ほかの要素は次の 1 つのまま）。`SCENE_ITEM_BUDGET` の `aheadFits` の中だけ。
- 色：`pano_scene_meta` の `video` の MP4 を、`createVideoFollower` で再生ヘッドに合わせる（`pano_depth_color.js` の `createDepthColors`。`DA3_GEOMETRY` mono の入力ごとに 1 つ。`scene`、3D の Sticker、上流の層）。要素 `i` を表示するときの動画の時刻は `i ÷ video_fps`。止めているときは follower がその時刻にシークして写した静止画を、再生中は再生中の動画をテクスチャにする。テクスチャは sRGB（`SRGBColorSpace`）、`LinearFilter`、`ClampToEdgeWrapping`、mip なしで、GLB の sampler（`docs/render-contract.md` の「テクスチャの標本化」）と同じ標本化にする。再生中の動画のテクスチャ（`VideoTexture`）は、three.js が sRGB でも RGBA8 で上げる（`node_modules/three/src/renderers/webgl/WebGLTextures.js` の `getInternalFormat` に `isVideoTexture` を渡す）ので、深度のグリッドのシェーダーは、動画のときだけ 4 つの texel を `texelFetch` で読み（端は ClampToEdge と同じく clamp）、それぞれ `sRGBTransferEOTF` で線形に戻してから線形の空間で双線形に補間する（uniform `decodeVideoSrgb`。three 自身の材質の `DECODE_VIDEO_TEXTURE` と同じ判定）。静止画は SRGB8_ALPHA8 で上がり、ハードウェアが同じ補間をする。`tests/browser/three_view.spec.js` が、同じ色と拡大した白黒の境を再生中の動画と静止画で描いて一致することを確かめる。動画が届く前は、その要素を描かず（色のない形も出さない）、ステージに一行の状態「Loading depth video…」を出す（`docs/agents/ux-principles.md` の「待たせるときは、何を待っているかを簡素に示す」。3D ファイルの「Loading 3D model…」と同じ書き方）。この文は `editor/render_loop.js` の `stageNotice` に、3D ファイルの知らせ（`file3dImportNotice`・`file3dNotice`）と同じ並びで出す（`frameWheelNotice() || file3dImportNotice() || file3dNotice() || depthVideoNotice() || upstreamNotice()`。先頭の `frameWheelNotice` は `editor/frame_view.js` の Frame 表示のホイールの知らせ）。`editor/view_input.js` の `depthVideoNotice` は、直前に組み立てたフレームの深度のグリッドについて `pano_depth_color.js` の `depthGridNotice` の文を返す。GPU の上限を超えた要素があればその知らせ（上の「大きすぎる要素」）を、なければ色の届いていない要素があるあいだ「Loading depth video…」（`DEPTH_VIDEO_LOADING`）を出す。表示している深度のグリッドの要素の色がすべて届いたら消す。
- 材質：光が効かない（`unlit` が真。`MeshBasicMaterial` と同じく base color をそのまま出す）、両面（`DoubleSide`）。不透明度は 3D の Sticker と同じく材質に掛ける。
- 箱：要素の箱（Frame Selected、注視点の距離の内容の大きさ、near・far）は、読み込んだとき JS で深度が 0 より大きい画素の点から求める（ノードの中身の箱と同じ点。`docs/studio-node.md` の「中身の箱」）。
- 大きさの目安：1080p の 1 要素は、取得もテクスチャも約 8.3 MB。
- test：`tests/pano_depth_grid.test.mjs`（`DA3_GEOMETRY` mono と `MOGE_GEOMETRY` の透視投影の fixture（`tests/fixtures/da3_depth_grid/` の `case.json`・`case_moge.json`）で、ファイルの読み方、`K⁻¹`、角と四角の対応、深度 0 の角で四角が消えることを Python が書いた fixture と比べる。Node で動く純粋な関数だけ）、`tests/pano_scene_loaders.test.mjs`（深度のテクスチャと共有のグリッド、深度が 0 より大きい画素の箱、`W × H × 4` の大きさ）、`tests/pano_scene_items.test.mjs`（描くたびに作り直す要求でも同じ読み込み先として読み直さない）、`tests/pano_depth_color.test.mjs`（色の動画と知らせ）、`tests/browser/three_view.spec.js` の深度のグリッドの場面（`tests/browser/pages/depth_grid.*`。ページの中で深度と動画を作り、空でなく描ける、深度 0 の角の四角が描かれない、当たり判定の点が表示の面にある、色の画像の上が上に出る、を headless Chromium で確かめる）、出力との一致は `docs/render-contract.md` の「エディタとの一致（DA3 mono の場面）」。GPU に依存する振る舞い（実機の再生の速さ、`MAX_TEXTURE_SIZE`）は、milestone ごとにユーザーの実機で確かめる。

## Camera から見た空間の表示

Panorama Studio のエディタの Camera の編集は `docs/editor-interaction.md` の「Camera の編集」。

- 空間の内容：World の内容（`scene` のファイル・`world` の Sticker）があるとき、Frame 表示とカメラプレビューは Camera の位置から World も描く（`shotViewCamera`・`placedCamera`。ノードの出力と同じ透視投影・同じ Camera の値）。描くのは内容だけで、グリッド・ギズモ・線は描かない。ギズモを持たない空間の入力（`space.gizmo` のないもの）は、ビューのギズモを隠さない（カメラプレビューの描画が Panorama 表示のドラッグを終わらせないため）。
- 出力との一致：エディタの Camera はノードと同じ評価関数の値で、Frame 表示はその位置・向き・画角の透視投影で描く。VIDEO や上流の Scene の fps に再基準化して扱っても、ノードは状態の `timeline.fps` で秒を保って読むので、同じ秒の値になる。既知の差：画角 1° 未満（エディタは 1° に寄せる）、出力の大きさの丸めによる縦の画角のわずかな差（上の「既知の食い違い」と同じ）、World の内容の読み込み中の表示（「空間の表示」と同じ）。

- レンズ（ADR 0042。光線の規則は `docs/render-contract.md` の「カメラのレンズ」、式と標本の点は `web_src/pano_lens.js` が Python と同じ fixture で持ち、シェーダの写しは `web_src/pano_lens_glsl.js`）：Frame 表示とカメラプレビューは、Camera のレンズの値を次のとおり見せる。Panorama 表示（Viewport camera）には掛けない。
  - κ = 1 なら、直接描く。
  - κ ≠ 1：画像の隅の光線の角度 `θ_max` から、それを覆うピンホールで描いたときの画素の数を求める。ピンホールの `f` は像の中心の `f` で、κ ≤ 1 では後処理の拡大はどこでも 1 以下になる（κ の範囲は 0〜1。糸巻き型の κ > 1 は外した）。それが出力の画素の数の `LENS_OVERSCAN_MAX_AREA`（4 倍）以下なら、そのピンホールで余白（overscan）付きに描き、後処理のシェーダで出力の画素ごとに `lens_angle` と同じ式で標本化する（線形の補間）。超えるとき（`θ_max` が 90° に近いか超えるとき。κ が小さく画角が広い）は、Camera の位置に World の軸にそろえた立方体の面を描き、後処理のシェーダで同じ式の向き（Camera の回転を掛けて World の向きにしたもの）から標本化する。立方体の面は、像が標本化しない面を描かない：Camera の前方を軸に半角 `θ_max` の円錐が面（の正方形）と交わらなければ省く（`pano_lens.js` の `lensRenderPlan` の `seen`）。描いた面は、Camera の位置・面の大きさ・World の内容（`contentRevision` と、描く物の値と画像の revision。VIDEO はその時刻）・Sky の層の並びと画像・`clearColor`・背景が同じで、その面の Spark が並べ替え直していない（dirty の知らせが無い）あいだ使い回し、描き直さない。Camera の回転だけが変わるフレームは後処理の pass だけになる（余白付きのピンホールは Camera の向きの像なので、回すたびに描く）。分け方はこの一つの規則で、κ と画角と比から決まる（`pano_lens.js` の `lensRenderPlan`。描く像は `pano_editor_view.js` の `shotLensImage`、デバイスの画素への倍率は `deviceLens`、描くのは `pano_three_view.js` の `drawLens`）。θ が 180° を超える画素は `bg_color`。Spark はビューごとの描画なので、立方体では描く面それぞれで並べ替える（面ごとの描画。面は World の軸にそろうので、回転だけでは並べ替え直さない）。余白付きのピンホールは Camera の向きの像で、レンズの無い直接の描画と同じ向きなので、ビュー自身の Spark で描く（並べ替えの結果をそのまま使えるので、κ が 1 から離れた最初のフレームにもスプラットが出る）。立方体の面の Spark は、そのビューがレンズ無しやピンホールで描くあいだも残し、ビューが描くのをやめるかスプラットを隠すときに放す（新しい Spark は並べ替えが返るまでスプラットを描かず、その面がスプラット無しで一瞬出るため）。一度ピンホールから立方体に移ったビューは、ピンホールの画素の数が `LENS_OVERSCAN_MAX_AREA` の `LENS_PINHOLE_RETURN`（0.75）倍以下になるまで立方体のままにする（`lensRenderPlan` の `previous`。前のビューの種類は `editor/view_input.js` の `drawEditorViewShot` が覚える）。境のあたりの編集で行き来しないようにするためで、スプラットは面ごとの平面に写すので、ピンホールと立方体では見え方が違う（同じ κ でも平均 5.5/255、llvmpipe で計測）。Frame 表示の当たり判定（`lensPickWindow`）も、同じ World の軸の面とその画素を使う。後処理の再標本化のぼけがあるので、一致の許容差は別に置く（`docs/render-contract.md` の「エディタとの一致（レンズの場面）」）。
  - 色空間：余白付きの描画と立方体の面は、線形の光を `SRGBColorSpace` のレンダーターゲットに書く。three.js の材質はそのまま線形を書き、独自のシェーダは共有の uniform `linearOutput`（`drawLens` の間だけ真）で sRGB を線形に戻して書き、Spark は `encodeLinear` で線形を書く。後処理のシェーダが sRGB に戻して出す。そのため、面の中の半透明の重なりは線形の光で混ざる（κ = 1 の直接の描画は sRGB で混ざる）。
  - `sky` の Sticker の κ ≠ 1：板のメッシュ（ピンホールの写し方）では描けないので、Sticker の範囲を覆う形（Panorama 表示ではドーム）を描き、断片のシェーダで画素の向きから `lens_radius` と同じ式で素材の座標を求める（`pano_lens_glsl.js` の部品。κ = 1 は板のまま）。Sticker の選択の枠と当たり判定（`pano_sticker_geometry.js`、`editor/projection.js`）も同じ写し方（`lensAxesDirection`・`lensAxesFilm`）で枠の縁を求める。
  - `lens` を持つ `world` の Sticker：板の代わりに、球面の一部を覆う細かい球の帯のメッシュ（代わりの形）を描き、断片のシェーダでレンズの中心からの向きを求めて `lens_radius` と同じ式で素材の座標にし、板の外は捨てる（`discard`）。奥行きはメッシュのもので、形の近似の誤差は分割を細かくして抑える。当たり判定は同じ代わりの形と同じ捨て方の当たり判定のマテリアルで描き（深度のグリッドと同じく物ごとのマテリアル）、選択の枠は素材の縁を同じ写し方で球面に移した線にする（`pano_three_view.js` の `addWorldLensSticker`）。
  - Frame 表示の重ね描き（ペイント、Sticker の枠、選択の輪郭）：κ ≠ 1 の像の上では、`pano_lens.js` の `lensAxesDirection`（像の点から向き）と `lensAxesFilm`（向きから像の点）を通して描く（`pano_cutout_view_math.js`・`editor/projection.js`・`editor/overlay.js`）。縁は細かく標本化して曲がりに沿わせ、像の外に出る点（レンズが届かない向き）は `null` にして線を切る。
  - Panorama 表示・Unwrap 表示の Camera の枠と Sticker の輪郭：四隅を直線で結ぶのではなく、像の縁（フィルムの四辺）をレンズの写し方とビューの写し方を通して標本化した線（`editor/object_geometry.js` の `outline`、一辺 24 点）で描き、中を動かす当たり判定もその線を使う。四隅・辺の中点の印とハンドルはこの線の上に乗る（κ = 1 も含む。`tests/editor_frame_outline.test.mjs`）。
  - 当たり判定：Frame 表示でのオービットの中心・ホイールの先・キーの移動の基準を求めるとき、ポインタの画素を `lens_angle` と同じ逆の写し方でピンホールの画素（立方体なら面とその画素）に戻してから `pickAt` に渡す（`pano_lens.js` の `lensPickWindow`、`editor/frame_view.js`。`tests/pano_lens.test.mjs` の「a pointer on the bent image picks through a cube face pixel on the same ray」）。
  - Panorama 表示の Camera の視錐台（`cameraFrustumSegments`）は、隅の光線が 90° を超えると四角錐にならないので、κ ≠ 1 では画像の縁の光線の向きの線にする（`pano_space.js` の `lensFrustumSegments`）。
  - test：`tests/pano_lens.test.mjs`（写し方、光線、焦点距離、`lensRenderPlan` の分け方、当たり判定）、`tests/browser/lens_view.spec.js`（`tests/browser/pages/lens_view.*`。余白付きのピンホールと立方体の後処理が光線に沿って描き、180° の先が `bg_color`）、`tests/browser/lens_stickers.spec.js`（`tests/browser/pages/lens_stickers.*`。κ の `sky` の Sticker が軸から 90° の先まで描け、`lens` の `world` の Sticker が球面の一部として描かれて当たる）。

## 当たり判定（GPU）

空間の表示と Cutout の Frame 表示で、ポインタの下の World の内容（点と、それがどの Sticker か）を GPU で求める（`pano_three_view.js` の `pickAt`。`pick` が点を、`pickSticker` が Sticker の id を返す）。three.js の Raycaster は CPU で全三角形を調べ、MoGe のパノラマの MESH（約 1,610 万三角形）で 1 回 0.44〜0.52 秒かかるので使わない。

- 描き方：直前の描画の World を、ポインタの画素だけを写す 1 x 1 のレンダーターゲットに描き、その 1 画素を `readRenderTargetPixels` で読む。カメラは描画と同じ設定に `setViewOffset` で画素の窓を掛ける（`pano_pick.js` の `pickWindow`。画素の中心がポインタの点の光線になる）。1 画素の視錐台の外の物は three.js の視錐台カリングで描かれない。
  - 書くもの：物の番号（1 から。0 は何もない）と、視線の軸に沿った深度（ビュー空間の -z）。float のターゲットが使えれば（`EXT_color_buffer_float`）RGBA32F の 1 回の描画で赤に番号、緑に深度を書く。使えなければ RGBA8 に 2 回描き、番号と深度（`far` に対する割合）を赤・緑・青の 24 ビットに詰める（`packPick24`。シェーダーの `pack24` と同じ詰め方）。
  - 深度から World の点へ：ポインタの光線を、視線の軸方向に長さ 1 の向きで作り（`pickRay`）、点 = 視点 + 向き × 深度（`pointAt`）。
  - 描く物：`scene` と 3D の Sticker のメッシュ（深度のグリッドを含む）、`world` の Sticker の板。深度のグリッドは位置を頂点シェーダーで作るので、`pickPass` は深度のグリッドの物に `PICK_VERTEX` ではなく、表示と同じ頂点の部品（`DEPTH_GRID_VERTEX`）と同じ uniform（深度のテクスチャ、`K⁻¹`、大きさ）を持つ当たり判定のマテリアル（`createDepthGridPickMaterial`）を使う。uniform（深度のテクスチャと `K⁻¹`）が要素ごとに違うので、深度のグリッドの当たり判定のマテリアルは `pickMaterial` の番号ごとではなく、物ごとに持つ（物が捨てられたら一緒に捨てる）。オービットとホイールの先（`docs/editor-interaction.md` の `pickSurface` の点）は、この当たりの点を使うので、表示と同じ面に当たる必要がある。両面を描き、`scene` と Sticker の変形（`world` の行列）をそのまま使う。不透明度 0 の物と非表示の物は当てない。グリッド・軸・線・ギズモ・Spark の描画は、その間だけ隠す（`pickPass`。描いた後に表示とマテリアルを戻す）。板は画像の透明部分も含めた四角に当たる。
- SPLAT：Spark の `SplatMesh` は自前のシェーダーで描くので `overrideMaterial` もマテリアルの差し替えも効かない。Spark 2.1 で深度や ID を書き出せるのは、深度を色にする `setDepthColor`（ブレンドされた 8 ビットの色で、正確な深度ではない。変更子の差し替えでスプラットを作り直し、並べ替えも非同期）と、オフラインのターゲットへの描画（`renderTarget`・非同期の `readTarget`）だけで、1 画素の深度と ID を同期で得る手段はない。LoD の当たり判定用スプラット（`lodRaycast`）は LoD を使う場合だけである。そこで SPLAT は `raycastable: false`（Spark の `SplatMesh.raycast` はメインスレッドの wasm で全スプラットを走査する）にして、要素の箱（読み込み時の `getBoundingBox`、要素の変形込み）と光線の交点で代用する（`rayBoxDepth`。箱の中からは光線が出る点）。精度は落ちるが、軽さと安全（Spark の raycast の重さ・落ちる疑い）を優先した。
- 最も近い当たり：点は、GPU の当たりと SPLAT の箱の当たりのうち、カメラの near と far の間で最も浅いもの（`nearestHit`）。Sticker（`pickSticker`）は、`world` の Sticker の板の当たりがあれば、より手前の SPLAT の箱より先にする。箱は見えている SPLAT より大きいので、箱の前に見えている板が選べなくならないようにするためである。
- 失敗したとき：描画が例外になったら（WebGL のコンテキストが失われた、RGBA32F への描画を拒まれたなど）、隠した物とマテリアルを必ず戻し（`pickPass` の `finally`）、レンダーターゲットも外す。その呼び出しは GPU の当たりなし（SPLAT の箱だけ）として扱い、結果は使い回さない。float のターゲットで失敗したら次から RGBA8 で描き、RGBA8 でも失敗したら GPU の当たり判定をやめる（SPLAT の箱だけで当てる）。この切り替えはエディタを開き直すまで戻らない。
- 使い回し：同じ画素・同じ視点（カメラの設定）・同じ内容（`contentRevision`：描いた要素と変形、`world` の Sticker の板の位置と大きさが前の描画と値で違うときに 1 つ進む数。不透明度 0 の物は入らない）なら、前の結果を返す（`pickCacheKey`）。当たる物を変える変更（ジオメトリ・変形・表示）を足すときは、比べる `parts` に入れて `contentRevision` も進むようにすること。1 回の押下で `pickSticker` と、何もない所なら続く `pickSpace` の 2 回呼ばれるが、2 回目はこの使い回しで描かない。ホイールの `reuseWheelPick` はこの上に残る（ホイールの一段ごとに視点が変わるため）。
- 境目：`pano_pick.js` は WebGL を使わない純粋な関数（詰め方と戻し方、画素の窓、深度から World、光線と箱、最も近い当たり、使い回しのキー）で、`node --test`（`tests/pano_pick.test.mjs`）で確かめる。`pickPass` の表示とマテリアルの入れ替えと戻しも、three.js のオブジェクトだけで確かめる。描画と読み戻し（`drawPick`）は WebGLRenderer が要るので Node では動かず、実機で確かめる。
- 期待する速さ：GPU の 1 画素の描画は頂点の処理が主で、1,610 万三角形でも数 ms〜数十 ms の見込み（実機で未計測）。CPU の Raycaster の 0.5 秒と比べて 1 桁以上速い。
- Spark の `SparkRenderer` は `enableLod: false` で作る。エディタは SPLAT を LoD・ページングで描かないので、LoD のワーカーを起こさない。

## Spark の描画はビューごとに 1 つ

原則：**1 つの `SparkRenderer` と 1 つの `SplatMesh` は、1 フレームに 1 つのカメラでしか更新しない。** 描く範囲（ビュー）ごとに `SparkRenderer` と `SplatMesh` を持ち、three.js の layers で分ける（`pano_spark_views.js` の `createSparkViews`）。

- 理由：`SparkRenderer` は、描くときのカメラが前に並べ替えたカメラから動いていると（位置 1e-3 か向きの内積 0.999 を超える差）、全スプラットを作り直し（generate）、深度を読み戻し（`readRenderTargetPixelsAsync`）、並べ替え、順序のテクスチャ（RGBA32UI）を送り直して、`onDirty` で次の描画を求める（Spark 2.1 の `updateInternal`・`driveSort`）。1 つの `SparkRenderer` をステージとカメラのプレビューの 2 つのカメラから描くと、毎フレーム相手のカメラに対してこれが走り、`onDirty` の再描画がまた両方を描くので、何もしていないときも rAF の速さで止まらない。表示とソートが別のカメラ由来になるので、並び順も崩れる。
  - `SplatMesh` も同じ形で巻き込む。球面調和（SH）を持つ `SplatMesh`（3DGS の PLY のほとんど）は、色が視線の向きで変わるので、更新のカメラが前回と違うと版（`version`）を上げる（`SplatMesh.update` の `viewToObject` と `hasRgbDir`）。版が上がると、それを集めている `SparkRenderer` はすべて作り直しと並べ替えをする。そのため、`SparkRenderer` だけをビューごとに分けても、`SplatMesh` を共有したままでは、プレビューを描くたびに両方が作り直し、並べ替えの後の `onDirty` でまた両方を描いて、止まらない。
- ビュー：three.js のビューの `owner`（`render` の `input.owner`）ごとに 1 つ。エディタでは、ステージ（`owner` なし）とカメラのプレビュー（`"camera_preview"`）の 2 つである。Frame 表示は shot のカメラでステージに描き、そのフレームではステージ自身のカメラは描かないので、ステージの `SparkRenderer` を使う（モードを切り替えたフレームだけ、1 回作り直す）。Unwrap は World を描かない。当たり判定の 1 画素の描画（`pickPass`）は Spark を隠し、`pickCamera` は layer 0 しか見ない。ノード上の共有のビューは World を描かない。
- layers：World の物（グリッド・`scene` と 3D の Sticker・`world` の Sticker の板・線・ギズモ）は layer 0 のまま。各ビューの `SparkRenderer` は自分の layer（1〜31。最初に使ったビューから順に割り当てる）に置く。描くたびに、World のカメラ（`worldCamera`）を layer 0 とそのビューの layer だけが見えるようにする（`aim`）。three.js は見えない layer の `SparkRenderer` を描かず、その `onBeforeRender`（= Spark の更新）も呼ばない。
- ビューごとの `SplatMesh`：読み込んだ `SplatMesh` は、どの layer にも置かない（`layers.disableAll()`）。各ビューは、それと同じ `PackedSplats` を使う `SplatMesh` を 1 つ作り（スプラットの配列とテクスチャは複製しない）、読み込んだ物の子として（変形をそのまま受ける）、そのビューの layer に置く（`splat`）。不透明度は描くたびに読み込んだ物から写す。Spark はシーンから生成元を集めるときにカメラの layers で選ぶので（`prepareGenerate` の `camera.layers.test`）、各ビューの `SparkRenderer` は自分のビューの `SplatMesh` だけを集め、各 `SplatMesh` は自分のビューのカメラでだけ更新される。
  - `SplatMesh` を `packedSplats` で作ると、その `PackedSplats` の `splatEncoding` を書き換える（指定がなければ既定値）。作った直後に元の値へ戻す。
  - ビューの `SplatMesh` は読み込んだスプラットを共有しているので、`dispose` しない（親から外すだけ）。ビューを放したとき（`release`）と、読み込んだ要素を捨てたとき（`forget`。`scene` の要素の `dispose`）に外す。
  - 共有の物は layer 0 に残し、Spark の描画と SplatMesh だけをビューごとに 0 以外の layer に分ける。three.js の layers は子に継がれないので、共有の物をビューごとの layer に置くとすべての物に `enable` が要り、1 つの SplatMesh を両方のカメラから見せると上の SH の版の問題が残るためである。
- 再描画の範囲：`SparkRenderer` の `onDirty` は、そのビューだけを描き直す理由で返す（`createThreeView` の `onSplats(owner)` → エディタの `splatDrawReason`：`DRAW_REASON.SPLAT_STAGE` か `SPLAT_PREVIEW`）。`SPLAT_STAGE` ではカメラのプレビューを描き直さない（`cameraPreviewChanged`）。`SPLAT_PREVIEW` ではステージも描くが（描画バッファが保たれないので、WebGL を描くフレームはキャンバス全体を描く）、ステージの `SparkRenderer` はカメラが動いていないので作り直しも並べ替えもしない。どちらも、並べ替えが終わって 1 回描けば止まる。`scene` の要素と Spark のモジュールの読み込みは、両方に関わるので `MEDIA` のままである。
- 片付け：カメラのプレビューが隠れたとき（Frame 表示、Camera が無い、プレビューを閉じた）と、フレームの取り込みに失敗したときは、プレビューの `SparkRenderer` を放す（`releaseSplats`。プレビューだけが使っていたテクスチャも放す）。放すときに並べ替えの途中なら、終わるまで待ってから `dispose` する。待つのは 100 ms ごとに最大 50 回（約 5 秒）で、失敗した並べ替え（コンテキストの喪失・ワーカーの終了）は終わらないので、その上限で `dispose` する。待つあいだの `onDirty` は無視する。ビューの `dispose`（エディタを閉じた・コンテキストの喪失）では、すべてをすぐに `dispose` する。
  - 並べ替えの途中の `dispose`：Spark 2.1 の `dispose` はソートのワーカーを終了して `sortWorker` を `null` にするが、進行中の `driveSort` は読み戻しが終わると、`sortWorker` が無ければ新しいワーカー（`SplatWorker`。Web Worker と WebAssembly のメモリ）を作り、それは誰にも終了されずに残る。そこで `dispose` の直後に、`sortWorker` に「並べ替えが終わらない」代わりの物（`call` が解決しない Promise を返し、`dispose` は何もしない）を入れる（`disposeSpark`）。途中の並べ替えはそこで止まり、新しいワーカーは作られない。コンテキストの復帰では新しいビューを作るので、`SparkRenderer` も最初から作り直す。
- 費用：プレビューが出ているあいだは、`SparkRenderer` 1 つ分を余計に持つ。読み込んだスプラットそのもの（`PackedSplats` の配列とテクスチャ）は共有し、ビューの `SplatMesh` は生成の設定だけを持つ。`SparkRenderer` 1 つが持つ物（Spark 2.1、`enableLod: false`）：
  - アキュムレータ 3 つ（表示中・生成中・予備。生成のたびに入れ替わるので、やがて 3 つとも確保される）。それぞれ全スプラット分の生成先のレンダーターゲット（`ensureGenerate`。packed では 1 スプラットあたり RGBA32UI の 16 バイトと、読み戻し用の RGBA8 の 4 バイト）を持つ。N スプラットでおよそ 3 × 20 × N バイト（100 万スプラットで約 60 MB、250 万で約 150 MB。テクスチャの大きさへの切り上げで少し増える）。
  - 順序のテクスチャ（RGBA32UI、幅 4096、16,384 スプラットごとに 1 行）とその CPU 側の `Uint32Array`、深度の読み戻しの `Uint32Array`。どちらも N × 4 バイト程度。
  - ソートのワーカー 1 つ（Web Worker と、その WebAssembly のメモリ。並べ替えのたびに読み戻しと順序の配列を受け渡す）。
  - 品質は落とさない：スプラットを間引く・解像度を下げるといった、データを減らす最適化はしていない。
- 診断：`sources["three.editor"].sparks` に、`SparkRenderer` ごとの直近 1 秒の `generates` と `sorts`、最後に使ったカメラが出る（docs/diagnostics.md）。何もしていないときに 0 であれば、ループは止まっている。
- テスト：`tests/pano_spark_views.test.mjs`。Spark の `SparkRenderer` と SH 付きの `SplatMesh` のスタブと、three.js の描画の layers の扱いを真似た描画で、1 つの `SparkRenderer` と `SplatMesh` が 1 フレームに 2 つのカメラで更新されないこと、`onDirty` の理由がそのビューだけを描き直すこと、並べ替えの後に止まること（`SparkRenderer` を共有しても、`SplatMesh` を共有しても止まらないこと）を確かめる。

## レイヤのテクスチャの共有

同じメディアを GPU に何重にも載せない。解像度や品質は落とさず、重複と使っていない複製だけを持たない（1080p の背景 VIDEO と 3DGS の Sticker で、ComfyUI が 12 GB 中 9〜11 GB の VRAM を使っている状態で Chrome の GPU プロセスが落ちる件への対処）。

- ビューの中での共有（`pano_three_view.js` の `createLayerTextures`）：テクスチャを `owner`（ステージとカメラのプレビュー（`"camera_preview"`）など）ごとではなくビュー全体で、メディア・`flipY`・`wrapS` の組ごとに 1 つ持ち（`revision` と `source` はレイヤごとの値で、キーには入れない）、各 `owner` は描画ごとに使った物に印を付ける。どの `owner` も使わなくなったテクスチャは `dispose` する。同じ WebGL コンテキストなので、どの `owner` からも描ける。
  - 費用：1080p の RGBA は 1 枚約 8 MB。再生中の VIDEO は送る回数も 1 フレームに 1 回になる。
  - 保つこと：`source` が同じで新しいメディアにまだ絵が無いあいだ（読み込み中・シーク中）は、その `owner` の前の描画のテクスチャを使う。別の `source` の絵は出さない。`revision` が変わったら送り直し（レイヤが `changed` で変わった矩形を言えるとき（ペイントの表示。`docs/editor-architecture.md` の「Paint layers」）は、その矩形だけを `uploadTextureRegions` で送る。three r184 の `WebGLRenderer.copyTextureToTexture` が、three が送っていない同じキャンバスのテクスチャから、`UNPACK_ROW_LENGTH`・`UNPACK_SKIP_PIXELS`・`UNPACK_SKIP_ROWS` を付けた `texSubImage2D` で送る。`Texture.updateRanges` は `DataTexture` だけのもので、キャンバスには効かない。まだ送っていないテクスチャ、VIDEO、`flipY`、色の変換のあるもの、GPU のテクスチャの上限より大きいキャンバスは全体を送る。同じレイヤが同じ大きさの別のキャンバスに移り、`changed` が前の `revision` からの矩形を言えるとき（ペイントのグループの表示が、ストロークを重ねたキャンバスに移るときと戻るとき）は、テクスチャを作り直さずにそのキャンバスに付け替え、その矩形だけを送る）、大きさか `source` が変わったら、書き換えずに新しいテクスチャを作る。前の物は、それで描いた owner が次の描画で離れるまで残し、誰も使わなくなったら `dispose` する（`VideoTexture` の `dispose` が `requestVideoFrameCallback` を取り消す）。そのため、まだ新しい `source` の絵を描いていない owner が、それを前の絵として使うことはない。描画の途中で例外が出ても、`end()` は `finally` で必ず呼ぶので、印の無いテクスチャは残らない。
  - カメラのプレビューが隠れたとき（`releaseSplats`）は、Spark に加えてプレビューの印も外すので、プレビューだけが使っていたテクスチャは解放される。
  - 診断：`sources["three.editor"].layerTextures` と `sources["three.node"].layerTextures` に、ビューが持つレイヤのテクスチャの数が出る。
- ノード上の表示との重複：そのノードのエディタを開いているあいだ、ノード上の Panorama Studio の表示は VIDEO を外し、静止画を放し、描かずにテクスチャを放す（エディタのモーダルがノードを覆っているので、同じ VIDEO の 2 つ目のデコーダ、その静止画、ノード上の共有ビューのテクスチャを持たない。`docs/studio-node-surface.md` の「見えないときとエディタを開いている間」）。

## World の組み立て（毎回の描画）

`buildWorld` は毎回の描画で World の中身を並べるが、オブジェクトは使い回す：`scene` と 3D の Sticker の要素のグループ（要素ごと）、`world` の Sticker の板（プール）、グリッド（間隔ごと）、線（`space.lines` の中身が値で変わったときだけ作り直す。`cachedLines`・`sameValue`。JSON の文字列は作らない）、ギズモ。並べたオブジェクトが前と同じ順で同じなら、`world` を空にして付け直すことはしない（`setChildren`）。

## エディタの描画を直接表示する

エディタ（Stickers・Cutout・Panorama Studio・Preview のモーダル）は、描画のたびに WebGL の絵を 2D のキャンバスへ `drawImage` で写さず、何もしていないときに `requestAnimationFrame` を回さず、毎フレーム `JSON.stringify` でキーを作らない。2D のキャンバスがソフトウェア描画に落ちると、写すたびに GPU から読み戻すことになり、メモリの確保の失敗（Chrome のタブが落ちる件）の最も疑わしい原因になるためである。ノード上の表示（`pano_preview_view.js` の共有のビュー）は、一つの WebGL を各ノードの 2D のキャンバスへ写す作りである。

- 描画のスケジュール（`pano_frame_scheduler.js`）：エディタが `requestAnimationFrame` を呼ぶのはこの 1 か所だけである。`requestDraw(reason)` を受けたときに次のフレームを 1 回だけ描き、視点の遷移・慣性・ドラッグ・フェード（`editor/render_loop.js` の `editorAnimating`）のあいだだけ続けて回す。何もしていないときはフレームを要求しない。`editorAnimating` が読む物（視点の遷移・慣性・レイアウトの待ち・プレビューの大きさの切り替え）は必ず `editor/render_loop.js` の `startAnimation` を通して始め、そこでスケジューラを起こす。ドラッグはポインタを押したときに起こし、フェードはフレームの中で始まる。1 つのコールバックや描画が例外を投げても、そのフレームの残りと次の予約は止まらない。再生（`createVideoPlayback` の clock）、ドラッグのまとめ（`createFrameBatch`）、選択メニューとツールチップの位置合わせも、このスケジューラの `requestFrame` を使う。理由は列挙型 `DRAW_REASON`（`STATE`・`VIEW`・`PLAYHEAD`・`PAINT`・`OVERLAY`・`MEDIA`・`SPLAT_STAGE`・`SPLAT_PREVIEW`・`RESIZE`・`CONTEXT`）で持ち、描画の入口は `drawScene(reasons)` の 1 つである。
- WebGL のキャンバスをそのまま置く：`PanoModal.vue` のステージの `<canvas data-stage-background>` を three.js のキャンバスそのものにした（`createEditorView({ canvas })`）。上に重なる 2D のキャンバス（ハンドル・枠・グリッドの線・文字）は透明で、CSS ピクセルで描く。`OVERLAY` だけのフレーム（ホバー・範囲選択など）は WebGL のキャンバスに触れず、ページは前の絵を表示し続ける。WebGL を描くフレームでは、描画バッファが保たれない（`preserveDrawingBuffer: false`）ので、キャンバス全体を描き直す。
  - 何も描くものがないときの背景の色（`#070707`）、Unwrap の外側（`#070707`）、Frame 表示の下地（`#0a0a0a`、shot がまだ描けないときの文脈の範囲は `#111111`）は WebGL の `clear` で塗る。Frame の文脈の範囲も、何も描かれない所は透明でなく `#0a0a0a` にする（`render` の `clearColor`）。グリッド・ERP の格子・文字はオーバーレイに描く。
  - Frame 表示は、一つのキャンバスの中で `setViewport`・`setScissor` で描く範囲を分ける（`render` の `rect`）。文脈の範囲はキャンバスの外まで広がるので、キャンバスに入る部分だけを、カメラの `setViewOffset` でその窓として描く（`visibleWindow`）。キャンバスの外は描かない。
  - Unwrap も同じキャンバスの、ERP の矩形に描く。
  - 残した写し：Cutout のカメラプレビューは、ステージの上に浮かぶ別の要素（角の丸み・フェードイン、プレビューの大きさの切り替え、オーバーレイより上の重なり）なので、ステージのキャンバスの一部にはできない。描き方は、同じ WebGL のキャンバスの左下に先に描き、その範囲を `createImageBitmap` で取り（Chrome では GPU 上の複製）、プレビューの `<canvas>` の `bitmaprenderer` に渡す。直後にステージの絵がその範囲を覆う。2D のキャンバスは使わない。描き直すのは、プレビューの大きさが変わったときと、`VIEW`・`OVERLAY`・`SPLAT_STAGE` 以外の理由（状態・再生位置・素材・プレビューの Spark の並べ替え・大きさ・コンテキスト）があるときだけである。`createImageBitmap` が失敗したら、毎フレーム試し直さずにプレビューを止め（「Preview unavailable」）、プレビューを隠して出し直すか、コンテキストが復帰したときにだけもう一度試す。
- 解像度：エディタの WebGL のキャンバスは、CSS の大きさ × `devicePixelRatio` で描く。ただし画面に見える大きさ（ウィンドウの `innerWidth`・`innerHeight` × `devicePixelRatio`）を超えるときは、縦横を同じ比でそこまで縮める（`screenRenderSize`）。グラフを大きくズームしたノード上の Preview も同じで（`measurePreviewCanvasSize` の `screen`）、一度に見える画素は画面を超えないので、目に見える画素は減らない。そのほかの上限は GPU の `MAX_RENDERBUFFER_SIZE` と `MAX_TEXTURE_SIZE` の小さい方だけで（`fitRenderSize`）、それを超えるときだけ縮める。`devicePixelRatio` が変わったとき（別の画面へ移したとき）も `matchMedia` で大きさを合わせ直す。ノード上の共有のビューも同じ上限だけで、Preview ノードのキャンバス（`measurePreviewCanvasSize`）も CSS の大きさ × `devicePixelRatio` である。
- 毎フレームのキー：`JSON.stringify` のキーは使わない。
  - 状態の変更は、スケジューラの `stateRevision`（`STATE` の要求の数）で数える。理由の付け方の方針：状態が変わりうるときは `STATE`（`requestDraw` で理由を省いたときの既定なので、書き忘れても古い表示は残らない）。状態が変わらないことが確かな所だけが、ほかの理由を渡す：視点（`VIEW`）、ホバー・範囲選択（`OVERLAY`）、再生位置（`PLAYHEAD`）、描いている途中のストロークとストローク・ラスターの移動（`PAINT`。描画用の状態 v2 はペイントを含まないので作り直さない）、素材の読み込み（`MEDIA`）。ギズモのドラッグは Sticker の値を変えるので `STATE` のままである。描画用の状態 v2（`loadSceneState`）と Camera の軌跡は、この数が変わったときだけ作り直す。Timeline の Keyframe と Clip range のドラッグも、1 フレームにまとめたうえで `STATE` で描く（数を進める）。
  - `evaluateSceneState` は 1 フレームに 1 回である（Sky の Sticker と World で共有。`skyLayers`・`worldStickerLayers` の `evaluated`）。
  - World の当たりの内容は `contentRevision`、線は値の比較（`sameValue`）で比べる。Unwrap とカメラプレビューはキーを持たず、上の描き直しの規則で描き直す。
- 再生中の Vue：再生位置（`frame`）と再生中か（`playing`）は、`uiState` の外の 2 つの `shallowRef`（`timelinePlayhead`）にして、`PanoModal.vue` から `PanoTimeline.vue` にだけ渡す。Timeline の行（`buildTimelineModel`）は状態・選択・レイアウトが変わったときだけ作り直し、再生位置・時刻の文字・キーのボタンの状態（`keyedAt`）は Timeline の部品が refs から求める。ピンの並び（`linePins`）は再生位置が動いても作り直さない。サイドパネルは、選んでいる物に Keyframe か Clip range があるとき（`inspectorTimed`）だけ再生位置ごとに作り直し、選択が変わったときは全体を作り直す。
- WebGL コンテキストの喪失：`webglcontextlost` で `preventDefault` し、ビューの GPU の資源を放す（コンテキストは放さない。`dispose({ lost: true })`）。そのあいだ描画と当たり判定は何もせず、エラーも出さずに待つ。`webglcontextrestored` で、同じキャンバスにビューを作り直し、全体を描き直す（`CONTEXT`）。カメラプレビューも描き直す。診断（`pano_diagnostics.js`）は、失ったビューを復帰まで同じコンテキストとして数えるので、1 回の喪失と復帰は `created` 2・`lost` 1・`restored` 1・`disposed` 1・`alive` 1 になる。
- 旧ノードの動画（旧 Preview と、旧 `PanoramaStickers`・`PanoramaCutout` のノード上の背景の VIDEO）の再生の規則は `docs/legacy-node-surfaces.md` にある。エディタの Timeline のサムネイル用の `<video>` とキャンバスは、作り終えたら（失敗・中断も）放す。

## WebGL の unpack 状態（Spark の並び順のアップロード）

three はテクスチャをアップロードするたびに `UNPACK_PREMULTIPLY_ALPHA_WEBGL` と `UNPACK_FLIP_Y_WEBGL` を
そのテクスチャの値にして、戻さない。Spark 2.1 は 2 回目以降の並べ直しの結果（RGBA32UI の並び順のテクスチャ）を、
render の外で生の `texSubImage2D(RGBA_INTEGER, UNSIGNED_INT, Uint32Array)` でアップロードし、`UNPACK_FLIP_Y_WEBGL`
だけを false にする。直前に three が premultiply の Sky の層（背景・Sticker・ペイント）をアップロードしていると
`UNPACK_PREMULTIPLY_ALPHA_WEBGL` が true のまま残り、Chrome はこの整数のアップロードでタブを落とす
（STATUS_BREAKPOINT。背景が VIDEO で 3DGS がある Scene で、視点を動かした瞬間に起きる）。
`pano_three_view.js` の `draw` は、描き終わるたびに `settleUnpack` で両方を three の状態を通して false に戻す。
three のアップロードは render の中でしか起きないので、Spark のアップロードは常に両方 false で走り、three の
キャッシュも実際の値と揃う。render の外で送るペイントの矩形（`uploadTextureRegions`）は、送り終えるたびに同じく両方を three の状態を通して false に戻す。Spark 2.2.0 以降は自分で両方を戻すので、コアのフロントエンドに合わせて Spark を上げたら、この回避を消す（ADR 0031、`tests/test_three_spark_core_pin.py` が知らせる）。
この場面（再生中の VIDEO の背景、3DGS の Sticker、視点の回転）は `tests/browser/three_view.spec.js` が headless Chromium で描き、
タブが落ちないことを確かめる。`settleUnpack` を外すと、このテストはクラッシュで落ちる（SwiftShader で確認）。
