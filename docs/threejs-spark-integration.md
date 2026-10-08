# three.js と Spark による 3D の表示

エディタとノード上の表示が three.js と Spark で描く規則を定める：three.js と Spark の版と遅延読み込み、Preview の表示、Cutout エディタの描画、投影と当たり判定のカメラ、空間の表示の描き方（Sky と World の 2 パス、`scene` と 3D の Sticker の読み込み、Camera から見た表示）、GPU の当たり判定、Spark の描画をビューごとに分けること、レイヤのテクスチャの共有、World の組み立て、エディタの描画を直接表示すること、WebGL の unpack 状態、リリース前に確かめること、意図した差と既知の食い違い。用語は `CONTEXT.md` に従う。決めた理由は ADR 0021（Frame 表示）、0031（three.js と Spark の版）にある。

この文書が持たない規則：視点の操作・`world` の Sticker と Camera の編集・ギズモ・Panorama Studio のエディタ・上流の Scene の表示と編集・`port` の Sticker の同期と Pose handoff の表示・インスペクタ（`docs/editor-interaction.md`）、タイムラインと Keyframe の記録の規則（`docs/timeline-ui.md`）、状態 v2 と評価関数（`docs/scene-state-v2.md`）、ノードの出力と実行結果の `ui`（`docs/studio-node.md`）、描画関数（`docs/render-contract.md`）、ノード上の UI の細かい規則（`docs/panorama-stickers-node-surface-spec.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 版の固定と遅延読み込みのチャンク（three.js は即時のバンドルに入れない、Spark は SPLAT を初めて読むときだけ） | — | `package.json` の devDependencies、`vite.lib.config.js` の `chunkFileNames`、`web_src/pano_editor_view.js`、`web_src/pano_scene_loaders.js` `loadSpark` | `tests/pano_editor_view.test.mjs`、`tests/check_panorama_bundle.test.mjs`、`tests/test_three_spark_core_pin.py` |
| Preview の表示（共有のビュー、チャンクの読み込み、使えないときの表示） | — | `web_src/pano_preview_view.js` `VIEW_UNAVAILABLE_MESSAGE`、`pano_editor_view.js` `createEditorView` | `tests/pano_preview_view.test.mjs` |
| Cutout エディタの描画（Frame 表示のカメラと文脈の範囲、Unwrap） | — | `pano_editor_view.js` `shotCamera`・`frameViewContext`、`web_src/pano_three_view.js` `renderUnwrap` | `tests/pano_editor_view.test.mjs`、`tests/test_legacy_goldens.py`、`tests/pano_editor_direct_view.test.mjs` |
| 投影と方向の当たり判定、描かない Sticker | — | `pano_editor_view.js` `viewProjection`・`workingSkyLayers`、`web_src/pano_sticker_geometry.js` | `tests/pano_editor_view.test.mjs`、`tests/pano_sticker_geometry.test.mjs`、`tests/pano_stickers_node_surface.test.mjs` |
| 空間の表示の描き方（2 パス、`world` の Sticker の板、3D の Sticker の要素、near・far） | — | `pano_three_view.js` `createThreeView`、`pano_editor_view.js` `worldStickerLayers`、`web_src/pano_space.js` `stickerContentRequest`・`stickerContentUrls`・`spaceCamera`・`SPLAT_TO_SCENE`、`pano_scene_loaders.js` `makeUnlit` | `tests/pano_editor_view.test.mjs`、`tests/pano_space.test.mjs`、`tests/pano_editor_direct_view.test.mjs` |
| `scene` の要素の読み込みと大きさの上限 | — | `web_src/pano_scene_items.js` `createSceneItems`・`SCENE_ITEM_BUDGET`・`overBudget`・`aheadFits`、`pano_scene_loaders.js` `loadSceneItem` | `tests/pano_scene_items.test.mjs`、`tests/pano_scene_loaders.test.mjs` |
| Camera 向けの部品と Camera から見た空間の表示 | — | `pano_space.js` `cameraFrustumSegments`・`cameraTrajectory`・`placedCamera`、`web_src/editor/view_input.js` `shotViewCamera` | `tests/pano_space.test.mjs`、`tests/pano_editor_view.test.mjs` |
| GPU の当たり判定 | — | `pano_three_view.js` `pickAt`・`pickPass`・`pickSticker`・`pickSurface`、`web_src/pano_pick.js` `pickWindow`・`packPick24`・`rayBoxDepth`・`nearestHit`・`pickCacheKey` | `tests/pano_pick.test.mjs`、`tests/pano_editor_view.test.mjs` |
| Spark の描画はビューごとに 1 つ | — | `web_src/pano_spark_views.js` `createSparkViews`・`disposeSpark`、`pano_three_view.js` `releaseSplats` | `tests/pano_spark_views.test.mjs` |
| レイヤのテクスチャの共有 | — | `pano_three_view.js` `createLayerTextures` | `tests/pano_editor_view.test.mjs` |
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
- `pano_three_view.js` は three.js（GLTFLoader を含む）、Spark（動的 import）、チャンクの中だけで使うモジュール（`pano_scene_items.js`・`pano_scene_loaders.js`）以外を import しない。計算は即時に読み込まれる側（`pano_editor_view.js`）で行い、チャンクが `panorama_suite.js` から import し返さないようにしている。
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
  - `scene`：実行結果の `pano_scene_files`・`pano_scene_meta` を、`scene` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `scene` のチャンネル）。再生ヘッドの Timeline frame で評価した `scene` の Clip range の中だけ、ノードと同じ規則（`batch_index`）で選んだ要素を、`scene` の変形を掛けて描く。MoGe の VIDEO のように要素ごとにファイルがあるものは、次の要素を先に読み込む。
  - 読み込みは `pano_scene_items.js` のキューで、同時に 2 本までにする（`fetch` を `AbortController` 付きで行い、GLB は `GLTFLoader.parse`、PLY は Spark の `SplatMesh` の `fileBytes` で読む）。最新の要求（表示する要素、次にその先読み）を優先し、待っている間に要らなくなった読み込みは始めない。走り始めた読み込みは最後まで読む（中断するのは `scene` 入力が差し替わった・外れたときと、エディタを閉じたときだけ）。同じ URL は二重に読み込まない。スクラブしても読み込みは際限なく増えない。
  - 読み込み中・再生中の表示：そのフレームの要素がまだ読み込めていないときは、入力の要素のうち読み込み済みで、そのフレームの要素より前の最も近いものを出す（前になければ後ろの最も近いもの）。再生中は要素が読み込みに追いつかないので、読み込めた要素だけを間引いて出す（同時に 2 本ずつ新しい要素が届く）。止める・シークすると、そのフレームの要素を最優先で読み、届いたらそのフレームの要素を正確に出す。
  - 読み込んだ要素は、数ではなく大きさの上限で持つ（`pano_scene_items.js` の `SCENE_ITEM_BUDGET`、1.5 GiB）。大きさは要素ごとに読み込んだバイト数（GLB・PLY のファイルの大きさ）で数え、合計が上限を超えたら、使っていない古いものから捨てる（`overBudget`）。表示している要素と、表示や先読みに求められている要素、読み込み中の要素は捨てない。上限は `scene` と 3D の Sticker のキューで別々に持つ。要素は間引かずに全解像度で届く（MoGe のパノラマ 4096 x 2048 の 1 フレームで約 390 MB。`docs/studio-node.md`）ので、MoGe の VIDEO で巨大な要素がいくつも並んでメモリを使い切らないようにするためである。
    - 先読みは、持ち続ける要素（表示している要素と求められている要素）と読み込み中の要素に、もう 1 つ足しても上限に収まるときだけ始める（`aheadFits`）。まだ読み込んでいない要素の大きさは分からないので、読み込み中と次の要素は、読み込み済みの最も大きい要素と同じ大きさとみなす。何も読み込んでいない間は先読みしない。1 つで上限を超える要素は表示するが、その先は読み込まない。
    - 表示する要素は上限によらず必ず読み込む。新しい要素を読み込む間は、前の要素を表示し続けるので、1 つで上限を超える要素なら、その間は一時的に 2 つ分を持つ。
    - 取得した `ArrayBuffer` は、パーサー（GLTFLoader・Spark）に渡したら参照を外す（`pano_scene_loaders.js` の `loadSceneItem`）。残るのはパースした要素だけである。
  - `scene` 入力が差し替わって（再実行）今の要素の一覧にないものは、その場で捨てる。エディタを閉じると全部捨てる。
  - 既知の挙動：サーバーを再起動して temp のファイルが消えた後（404）は、その要素の代わりに、上と同じく前の最も近い読み込み済みの要素を出し続ける（どれも読めなければ何も出さない）。エラーは URL ごとに 1 回だけコンソールに出し、同じ URL は読み直さない。実行し直すと新しいファイルになる。
  - SPLAT の PLY は Spark の `SplatMesh` で読み、コアの Load3D と同じく X 軸まわりに 180° 回してから（`SPLAT_TO_SCENE`）`scene` の変形を掛ける。並べ替えが終わるたびに描き直す。
  - MESH・MoGe の GLB は GLTFLoader で読み、材質を `MeshBasicMaterial`（光源なし、両面、base color・テクスチャ・頂点色を保つ）に置き換える（`makeUnlit`）。素のジオメトリの灰色は glTF の定義どおり（線形の値）に表示するので、ノードの出力（`BARE_COLOR` をそのまま出す）より明るく見える。
  - `world` の Sticker は、評価した位置・回転・`scale` の両面の板として、切り抜いた素材を貼って描く（`worldStickerLayers`）。奥行きで前後する。選択と操作は`docs/editor-interaction.md` の「`world` の Sticker の操作」。
  - 3D の `world` の Sticker（`sticker` に MESH・SPLAT・3D ファイルをつないだ `port` の Sticker）：実行結果の `pano_sticker_files`・`pano_sticker_meta`（`pano_scene_files` と同じ形）を、`sticker` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `external-sticker` のチャンネル）。Sticker の Clip range の中で表示しているときだけ、Sticker の clip frame から `scene` と同じ規則（ノードの `batch_index`）で要素を選び、評価した位置・回転・`scale` を `scene` の変形と同じ意味で掛けて、不透明度で描く（`pano_space.js` の `stickerContentRequest`）。状態に `world` の `port` の Sticker がない間は要素を持たず、読み込み済みの要素は捨てる（`stickerContentUrls`）。SPLAT は X 軸まわりに 180° 回してから変形を掛け、不透明度は `SplatMesh` の `opacity` にする。メッシュは `scene` と同じく unlit・両面で、不透明度は材質の `opacity` にする。読み込みは `scene` と同じ部品（`pano_scene_items.js`・`pano_scene_loaders.js`）の、Sticker 用の別のキューで行う（`scene` と同じファイルでも、three.js のオブジェクトは一つの親しか持てないので別に読む）。要素の箱は Frame Selected と注視点の距離の内容の大きさに入る。ギズモでの操作は `docs/editor-interaction.md` の「`world` の Sticker の操作」。
  - ノード上の表示（`pano_stickers_node_surface.js`・Preview）は空間の表示を持たず（`scene` も描かない）、3D の Sticker も描かない。
  - 視点の three.js のカメラの near・far は、内容の外接球とグリッドから決める（`pano_space.js` の `spaceCamera`。far は内容と原点のまわりのグリッドの先まで、near は注視点の距離の 1/100 と内容の大きさの 1/10000 の大きいほう）。注視点の距離の 1/100 より近い内容は切れる。
- ノードの出力との差（意図して残しているもの）：
  - 要素の読み込み中と読めなかったときは、前の最も近い読み込み済みの要素を出す（ノードは必ずそのフレームの要素を描く）。再生中は要素を間引いて出す。要素のないフレーム（バッチの外、頂点や面のない要素）はノードと同じく何も描かない。
  - 3D の Sticker の不透明度：エディタのメッシュは両面のまま、不透明度が 1 より小さい間は深度を書かずに半透明にする（1 に戻すと深度を書く）。そのため不透明度を下げると、裏の面や奥の面も透けて重なって見える（ノードは手前の面だけを描く）。
  - 半透明の重なり：Spark はスプラットを深度を書かずに重ね、板は深度を書く。半透明のスプラットと `world` の Sticker が重なる画素の前後と混ざり方は、ノード（`over_by_depth`、スプラットの奥行きは積算アルファ 0.5 の位置）と一致しない。
- Camera 向けの部品：Camera の視錐台（`cameraFrustumSegments`）、Timeline 上の軌道（`cameraTrajectory`、評価関数で標本化）、Camera から覗く視点（`cameraView`）と、`render` の `space.lines`（線分の描画）。Camera が無いときは使わない。`cameraView` は使っていない（Frame 表示は Camera の shot から `shotCamera` を作り、`placedCamera` で位置に置く）。

## Camera から見た空間の表示

Panorama Studio のエディタの Camera の編集は `docs/editor-interaction.md` の「Camera の編集」。

- 空間の内容：World の内容（`scene` のファイル・`world` の Sticker）があるとき、Frame 表示とカメラプレビューは Camera の位置から World も描く（`shotViewCamera`・`placedCamera`。ノードの出力と同じ透視投影・同じ Camera の値）。描くのは内容だけで、グリッド・ギズモ・線は描かない。ギズモを持たない空間の入力（`space.gizmo` のないもの）は、ビューのギズモを隠さない（カメラプレビューの描画が Panorama 表示のドラッグを終わらせないため）。
- 出力との一致：エディタの Camera はノードと同じ評価関数の値で、Frame 表示はその位置・向き・画角の透視投影で描く。VIDEO や上流の Scene の fps に再基準化して扱っても、ノードは状態の `timeline.fps` で秒を保って読むので、同じ秒の値になる。既知の差：画角 1° 未満（エディタは 1° に寄せる）、出力の大きさの丸めによる縦の画角のわずかな差（上の「既知の食い違い」と同じ）、World の内容の読み込み中の表示（「空間の表示」と同じ）。

## 当たり判定（GPU）

空間の表示と Cutout の Frame 表示で、ポインタの下の World の内容（点と、それがどの Sticker か）を GPU で求める（`pano_three_view.js` の `pickAt`。`pick` が点を、`pickSticker` が Sticker の id を返す）。three.js の Raycaster は CPU で全三角形を調べ、MoGe のパノラマの MESH（約 1,610 万三角形）で 1 回 0.44〜0.52 秒かかるので使わない。

- 描き方：直前の描画の World を、ポインタの画素だけを写す 1 x 1 のレンダーターゲットに描き、その 1 画素を `readRenderTargetPixels` で読む。カメラは描画と同じ設定に `setViewOffset` で画素の窓を掛ける（`pano_pick.js` の `pickWindow`。画素の中心がポインタの点の光線になる）。1 画素の視錐台の外の物は three.js の視錐台カリングで描かれない。
  - 書くもの：物の番号（1 から。0 は何もない）と、視線の軸に沿った深度（ビュー空間の -z）。float のターゲットが使えれば（`EXT_color_buffer_float`）RGBA32F の 1 回の描画で赤に番号、緑に深度を書く。使えなければ RGBA8 に 2 回描き、番号と深度（`far` に対する割合）を赤・緑・青の 24 ビットに詰める（`packPick24`。シェーダーの `pack24` と同じ詰め方）。
  - 深度から World の点へ：ポインタの光線を、視線の軸方向に長さ 1 の向きで作り（`pickRay`）、点 = 視点 + 向き × 深度（`pointAt`）。
  - 描く物：`scene` と 3D の Sticker のメッシュ、`world` の Sticker の板。両面を描き、`scene` と Sticker の変形（`world` の行列）をそのまま使う。不透明度 0 の物と非表示の物は当てない。グリッド・軸・線・ギズモ・Spark の描画は、その間だけ隠す（`pickPass`。描いた後に表示とマテリアルを戻す）。板は画像の透明部分も含めた四角に当たる。
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
  - 保つこと：`source` が同じで新しいメディアにまだ絵が無いあいだ（読み込み中・シーク中）は、その `owner` の前の描画のテクスチャを使う。別の `source` の絵は出さない。`revision` が変わったら送り直し、大きさか `source` が変わったら、書き換えずに新しいテクスチャを作る。前の物は、それで描いた owner が次の描画で離れるまで残し、誰も使わなくなったら `dispose` する（`VideoTexture` の `dispose` が `requestVideoFrameCallback` を取り消す）。そのため、まだ新しい `source` の絵を描いていない owner が、それを前の絵として使うことはない。描画の途中で例外が出ても、`end()` は `finally` で必ず呼ぶので、印の無いテクスチャは残らない。
  - カメラのプレビューが隠れたとき（`releaseSplats`）は、Spark に加えてプレビューの印も外すので、プレビューだけが使っていたテクスチャは解放される。
  - 診断：`sources["three.editor"].layerTextures` と `sources["three.node"].layerTextures` に、ビューが持つレイヤのテクスチャの数が出る。
- ノード上の表示との重複：そのノードのエディタを開いているあいだ、ノード上の Panorama Studio の表示は VIDEO を外し、静止画を放し、描かずにテクスチャを放す（エディタのモーダルがノードを覆っているので、同じ VIDEO の 2 つ目のデコーダ、その静止画、ノード上の共有ビューのテクスチャを持たない。docs/panorama-stickers-node-surface-spec.md）。

## World の組み立て（毎回の描画）

`buildWorld` は毎回の描画で World の中身を並べるが、オブジェクトは使い回す：`scene` と 3D の Sticker の要素のグループ（要素ごと）、`world` の Sticker の板（プール）、グリッド（間隔ごと）、線（`space.lines` の中身が値で変わったときだけ作り直す。`cachedLines`・`sameValue`。JSON の文字列は作らない）、ギズモ。並べたオブジェクトが前と同じ順で同じなら、`world` を空にして付け直すことはしない（`setChildren`）。

## エディタの描画を直接表示する

エディタ（Stickers・Cutout・Panorama Studio・Preview のモーダル）は、描画のたびに WebGL の絵を 2D のキャンバスへ `drawImage` で写さず、何もしていないときに `requestAnimationFrame` を回さず、毎フレーム `JSON.stringify` でキーを作らない。2D のキャンバスがソフトウェア描画に落ちると、写すたびに GPU から読み戻すことになり、メモリの確保の失敗（Chrome のタブが落ちる件）の最も疑わしい原因になるためである。ノード上の表示（`pano_preview_view.js` の共有のビュー）は、一つの WebGL を各ノードの 2D のキャンバスへ写す作りである。

- 描画のスケジュール（`pano_frame_scheduler.js`）：エディタが `requestAnimationFrame` を呼ぶのはこの 1 か所だけである。`requestDraw(reason)` を受けたときに次のフレームを 1 回だけ描き、視点の遷移・慣性・ドラッグ・フェード（`editorAnimating`）のあいだだけ続けて回す。何もしていないときはフレームを要求しない。`editorAnimating` が読む物（視点の遷移・慣性・レイアウトの待ち・プレビューの大きさの切り替え）は必ず `startAnimation` を通して始め、そこでスケジューラを起こす。ドラッグはポインタを押したときに起こし、フェードはフレームの中で始まる。1 つのコールバックや描画が例外を投げても、そのフレームの残りと次の予約は止まらない。再生（`createVideoPlayback` の clock）、ドラッグのまとめ（`createFrameBatch`）、選択メニューとツールチップの位置合わせも、このスケジューラの `requestFrame` を使う。理由は列挙型 `DRAW_REASON`（`STATE`・`VIEW`・`PLAYHEAD`・`PAINT`・`OVERLAY`・`MEDIA`・`SPLAT_STAGE`・`SPLAT_PREVIEW`・`RESIZE`・`CONTEXT`）で持ち、描画の入口は `drawScene(reasons)` の 1 つである。
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
- 旧ノードの動画：旧 Preview ノード（`pano_preview_previewnode.js`）と、旧 Stickers・旧 Cutout のノード上の背景の VIDEO（`createLoopingPreviewVideo`）は、自動で再生しない。`PanoramaStickersNode` のノード上の Timeline と同じく、既定は止めて先頭のフレームを表示し、再生は操作で行い（Preview はダブルクリックか Space、旧 Stickers は再生のボタン）、再生中はループする。画面外（折りたたみ・別のグラフ・サブグラフの中）では止める。旧 Cutout のノード上の表示には再生の操作がないので、先頭のフレームのままである。エディタの Timeline のサムネイル用の `<video>` とキャンバスは、作り終えたら（失敗・中断も）放す。

## WebGL の unpack 状態（Spark の並び順のアップロード）

three はテクスチャをアップロードするたびに `UNPACK_PREMULTIPLY_ALPHA_WEBGL` と `UNPACK_FLIP_Y_WEBGL` を
そのテクスチャの値にして、戻さない。Spark 2.1 は 2 回目以降の並べ直しの結果（RGBA32UI の並び順のテクスチャ）を、
render の外で生の `texSubImage2D(RGBA_INTEGER, UNSIGNED_INT, Uint32Array)` でアップロードし、`UNPACK_FLIP_Y_WEBGL`
だけを false にする。直前に three が premultiply の Sky の層（背景・Sticker・ペイント）をアップロードしていると
`UNPACK_PREMULTIPLY_ALPHA_WEBGL` が true のまま残り、Chrome はこの整数のアップロードでタブを落とす
（STATUS_BREAKPOINT。背景が VIDEO で 3DGS がある Scene で、視点を動かした瞬間に起きる）。
`pano_three_view.js` の `draw` は、描き終わるたびに `settleUnpack` で両方を three の状態を通して false に戻す。
three のアップロードは render の中でしか起きないので、Spark のアップロードは常に両方 false で走り、three の
キャッシュも実際の値と揃う。Spark 2.2.0 以降は自分で両方を戻すので、コアのフロントエンドに合わせて Spark を上げたら、この回避を消す（ADR 0031、`tests/test_three_spark_core_pin.py` が知らせる）。
この場面（再生中の VIDEO の背景、3DGS の Sticker、視点の回転）は `tests/browser/three_view.spec.js` が headless Chromium で描き、
タブが落ちないことを確かめる。`settleUnpack` を外すと、このテストはクラッシュで落ちる（SwiftShader で確認）。
