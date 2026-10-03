# three.js と Spark の導入（#51）

エディタの 3D 表示のため、`three@0.184.0` と `@sparkjsdev/spark@2.1.0` を devDependencies に固定して加えた。版はコアのフロントエンド（comfyui_frontend_package 1.53.6）に同梱されている版と一致させている。その sourcemap のパスは `three@0.184.0` と `@sparkjsdev+spark@2.1.0_three@0.184.0` で、バンドル内の three の revision は `184` である。バンドル内に見える `REVISION = "180"` は、Spark の worker に埋め込まれた three のものである。

Spark 2.1.0 の dist は、WebAssembly を `data:application/wasm;base64` で埋め込み、worker を blob URL で起動する。別ファイルを参照しないので、現在の単一ファイルのビルド（vite の lib モード）のままで動き、拡張の配信パスにも `import.meta.url` にも依存しない。ただし、`worker-src` で blob を許可しない CSP のもとでは動かない。確認のため、生成したスプラットをエディタのモーダル内に描く一時的なデモを作った。ユーザーが実際の ComfyUI で描画を確認したあと、デモは削除した。

同梱した場合の大きさは約 5.8MB（gzip で約 1.9MB）で、大半は Spark が占める。ComfyUI は `web/` の `**/*.js` をすべて拡張として読み込むので（`server.py` の `get_extensions`）、`.js` のチャンクに分けても遅延読み込みにはならない。そのため、three.js と Spark は、ComfyUI が自動では読み込まないドットで始まるフォルダに `.js` として出力し、エディタを開いたときに読み込む方針とする。`.mjs` も `**/*.js` の対象外になるが、コアが明示的に MIME を登録しているのは `.js` だけで（`utils/mime_types.py`）、`.mjs` は Python の既定の対応表と OS の設定に依存するため、第一案にはしない。ドットで始まるフォルダが実際に読み込みの対象外になるかは #66 で確認し、問題があれば `.mjs` を次の候補とする。

`package-lock.json` は git で管理する。devDependencies は完全固定し、`npm ci` からのビルドで `web/panorama_suite.js` がバイト単位で一致することを確認した。

## 遅延読み込み（#66）

ComfyUI の `get_extensions` は `glob.glob(os.path.join(dir, "**/*.js"), recursive=True)` で拡張を集める。Python の `glob` は `include_hidden` を指定しない限りドットで始まるフォルダに入らないので、`web/.lazy/` の `.js` は自動では読み込まれない（Python 3.12 で確認）。一方、配信は aiohttp の `web.static` で、ドットで始まるパスも返す。そのため `.mjs` は使わず、`.js` のままとした。

- `vite.lib.config.js` の `chunkFileNames` で、動的 import したモジュールを `web/.lazy/<名前>-<ハッシュ>.js` に出力する。ハッシュを付けるのは、更新後にブラウザが古いチャンクを使わないようにするためである。エディタを開いたときに `pano_editor_view.js` がこれを読み込む。
- `npm run build:web` は古いチャンクを消さない。ハッシュが変わったら古いファイルを消す（`check:web` が報告する）。
- チャンクの読み込みか WebGL の初期化に失敗したときは、コンソールにエラーを出し、画面にもそのことを表示する（#69）。
- `pano_three_view.js` は three.js（GLTFLoader を含む）、Spark（動的 import）、チャンクの中だけで使うモジュール（`pano_scene_items.js`・`pano_scene_loaders.js`）以外を import しない。計算は即時に読み込まれる側（`pano_editor_view.js`）で行い、チャンクが `panorama_suite.js` から import し返さないようにしている。
- `npm run check:web` は `panorama_suite.js` と `web/.lazy/` の全チャンクを再ビルドした結果と比べ、ビルドが出力しない古いチャンクも報告する。
- three.js の GLTFLoader は #71 で同じチャンクに静的に入れた（チャンクは約 1.0MB、gzip で約 0.22MB）。Spark は別のチャンク（`web/.lazy/spark.module-<ハッシュ>.js`、約 5.2MB、gzip で約 1.8MB）で、SPLAT の `scene` を初めて読み込むときだけ `import()` する（`pano_scene_loaders.js` の `loadSpark`）。3D を使わないエディタとノード上の表示は Spark を読まない。Spark のチャンクは three.js を最初のチャンクから import する。

### リリース前に確かめること

- Comfy Registry の配布物（zip）に、ドットで始まるフォルダ `web/.lazy/` が含まれるか。まだ確かめていない。含まれなければ、チャンクを `web/` 直下の `.mjs` に出力する案に移る（`**/*.js` の対象外になるが、MIME はコアではなく Python と OS の対応表に依存する）。

### 意図した差：画像の色空間

three.js は `colorSpace` が `NoColorSpace` のテクスチャを `UNPACK_COLORSPACE_CONVERSION_WEBGL = NONE` で読み込む。以前の WebGL 描画はブラウザの既定（変換あり）だったため、ICC プロファイル付きの画像（Display P3 の写真など）は、エディタでの色味が変わりうる。PIL はプロファイルを適用しないので、ノードの出力にはむしろ近くなる。コードでは対処しない。

## Preview の表示（#68）

- Preview の読み取り専用のモーダル（「Open Preview」と全画面の代わりに開くもの）は、Stickers のエディタと同じ `createEditorView` で描く。モーダルを開いている間だけ WebGL コンテキストを一つ使い、閉じると `forceContextLoss` で解放する。
- ノード上の Preview は、グラフ上のすべての Preview ノードで three.js のビューを一つ共有する（`pano_preview_view.js`）。各ノードは描いた直後の画面を自分の 2D の canvas に `drawImage` で写す。以前は Preview ノードごとに WebGL コンテキストを一つ持っていたが、ノードの数によらず一つになる。テクスチャはノードごとに持ち（`render` の `owner`）、素材が外れたときとノードを消したときに解放し、最後のノードが消えるとコンテキストも解放する。共有の canvas は使っているノードの中で最大の大きさに保ち、各ノードは左下から自分の大きさの範囲だけに描いて、その矩形を写す。
- チャンクは、ノード上に描くものが初めてできたときに読み込む。Preview では表示する IMAGE / VIDEO、ノード上の Stickers と Cutout の表示では背景・Sticker・ペイントのどれかである（#69）。`LoadImage` などにつながった Preview があるワークフローでは、グラフを開いた直後に読み込まれる。描くものがない Stickers の表示は、view を呼ばずに格子だけを描く。Preview は読み込みが終わるまで、画像のない状態と同じ格子を表示する。
- チャンクか WebGL が使えないときは、ノード上の Preview もモーダルもそのことを表示する（#69）。ノード上の Preview は、すべての Preview ノードが消えたあと、次に描くときに読み込みをやり直す。

## Cutout エディタ（#67）

Cutout のエディタも、Stickers と同じ `pano_editor_view.js` / `pano_three_view.js` で描く。新しい描画系統は作らない。

- Panorama タブは Stickers と同じ描画を使う。
- Frame タブは `shotCamera` で shot から覗く three.js のカメラを作り、`frameViewContext` が ADR 0021 のとおりゲートの外まで同じ焦点距離で描く範囲を決める。presentation scale・ゲート・FOV の関係は変えていない。表示する撮影範囲が Cutout ノードの出力と一致することは、`tests/test_legacy_goldens.py` が #48 の Cutout の基準画像で確かめている。
- カメラプレビューは、エディタのビューを `owner` を分けて共有する（WebGL コンテキストはエディタで一つ）。描画先の 2D の canvas は Vue の `PanoFloatingRight.vue` が持つ。shot・背景・レイヤーが変わらない tick では描き直さない。
- Unwrap 表示も three.js で描く（`renderUnwrap`）。Stickers のエディタと Preview のモーダルの Unwrap も同じ経路になる。180 の ERP を横幅いっぱいに引き伸ばす点は以前の描画と同じにしている。
- three.js を読み込めないときは、Stickers と同じく失敗を表示する（#69）。

### 既知の食い違い（変更していない）

- shot の FOV が 0 のとき、エディタの `getCutoutCameraParams` は以前からの互換で 90° / 60° とみなす。状態 v2 への移行（`pano_scene_state.js` の `v1Camera`）とノード（`nodes.py`）は最小値（1° または 0.1°）に丸めるので、この場合だけエディタの表示とノードの出力が一致しない。また `v1Camera` は shot の `rot_deg` を roll として読まない。

## 当たり判定の移行と以前の描画経路の削除（#69）

投影と当たり判定を、three.js のカメラの一系統にした。

- `pano_editor_view.js` の `viewProjection(camera, width, height)` は、`viewportCamera` / `shotCamera` のカメラ（three.js に渡すものと同じ）から、方向を画面上の点に移す `project` と、画面上の点の方向を返す `ray` を作る。
- エディタの Panorama 表示は、`sky` の Sticker の選択・移動・拡大縮小・回転、ペイントの座標、グリッドと枠の重ね描きを、描画と同じカメラの `viewProjection` で計算する。Frame 表示は #67 のとおり `shotCamera` と一致する Cutout の計算を使う。
- ノード上の Stickers と Cutout の表示も、Preview ノードと共有する three.js のビュー（`pano_preview_view.js`）で描く。Stickers の表示の Sticker の選択と操作は、描いたビューの `viewProjection` で当たり判定をする（`pano_sticker_geometry.js`）。
- 以前の WebGL の描画経路（`pano_render_core.js`、`pano_gl_renderer.js`、`pano_gl_scene.js`、`pano_render_*` の記述子とパス、`pano_scene_camera*.js`、`pano_cutout_camera.js`）と、それにしか使われていなかったコード（`pano_preview_runtime.js` の standalone 系、エディタの 2D のノード描画など）を削除した。
- three.js のチャンクか WebGL が使えないときは、黒い画面のままにせず、エディタとモーダルはステージに失敗の表示（`PanoModal.vue`）を出す。ノード上の Preview・Stickers・Cutout の表示は、それぞれの Vue のノード面（`PanoViewUnavailable.vue`、文言は `pano_preview_view.js` の `VIEW_UNAVAILABLE_MESSAGE`）に「3D view unavailable」を出す。
- エディタの設定の Render Quality（`ui_settings.preview_quality`）は、以前の描画のメッシュ分割にだけ使われていたので、UI・保存とも削除した。以前の状態や localStorage に残っている値は、知らないキーとして読み捨てる。
- ノード上の表示の Sticker は、状態 v2 への読み込みで id が付け替えられたもの（id がない・文字列でない・重複した 2 つめ以降）は描かない（`workingSkyLayers`）。エディタも同じ規則で描く。

## 空間の表示（#71）

`PanoramaStickersNode` のエディタの Panorama 表示は、World の内容（`scene` 入力の接続・実行結果の `scene` のエディタ用ファイル・`world` の Sticker のどれか）があるとき、Viewport camera で空間内を移動できる表示になる。内容がなければ、従来どおりの見回しだけの表示のままである。Unwrap 表示と旧ノードは変えていない。

- Stickers は撮影用の Camera を持たない。Stickers の ERP は常に World の原点から回転 0 で撮る。そのため Viewport camera は、エディタを開くたびに World の原点（ERP を撮る位置）から始まり、保存しない。グリッドの原点に黄色の印と「ERP origin」の表示を置く。
- 操作（Unity のシーンビューに近い組み合わせ。左ドラッグの見回しは従来どおり）：

  | 操作 | 動き |
  |---|---|
  | 何もないところを左ドラッグ | その場で見回す（従来と同じ。慣性あり） |
  | 右ドラッグ | その場で見回す（ペイントのツールを選んでいても効く） |
  | 中ボタンのドラッグ | 平行移動（パン）。注視点の距離の面がポインタに付いて動く |
  | Alt + 左ドラッグ | 注視点のまわりを回る（オービット。three.js の OrbitControls・コアの Load3D と同じ向きと速さ） |
  | ホイール | 注視点へ近づく・離れる（ドリー）。注視点より手前の最小の距離に来ると、注視点ごと前へ進む |
  | 右上の Frame Content ボタン | 向きを保ったまま、内容全体が収まる位置へ下がる |
  | Reset View ボタン | 原点に戻り、従来と同じ向きと画角に戻す |

  空間の表示では、ホイールは画角を変えない。注視点は視点の前方 `distance` の点で、内容の大きさが分かると（視点をまだ動かしていなければ）その半径になる。見回し・移動は再生を止めない。計算は `web_src/pano_space.js` にある。
- `sky` の Sticker・ペイント・背景は無限遠にあるので、視点の位置によらず同じ向きに見え、選択・移動・ペイントは従来どおり方向で当たり判定をする（`viewProjection`）。空間の表示では球面の格子の代わりに、地面（World の XZ 平面）のグリッドと軸（X 赤・Y 緑・Z 青）と原点を three.js で描く。グリッドの間隔は内容の大きさに合わせた 10 のべき乗である。
- 描き方：`pano_three_view.js` の `render` に `space` を渡すと、まず従来どおり Sky を回転だけのカメラで描き、深度をクリアしてから、World を視点の位置のカメラで深度を使って重ねる（キャンバスに深度バッファを持たせた）。
  - `scene`：実行結果の `pano_scene_files`・`pano_scene_meta`（#60）を、`scene` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `scene` のチャンネル）。再生ヘッドの Timeline frame で評価した `scene` の Clip range の中だけ、ノードと同じ規則（`batch_index`）で選んだ要素を、`scene` の変形を掛けて描く。MoGe の VIDEO のように要素ごとにファイルがあるものは、次の要素を先に読み込み、読み込み中は直前に表示した要素を出す。
  - 読み込みは `pano_scene_items.js` のキューで、同時に 2 本までにする（`fetch` を `AbortController` 付きで行い、GLB は `GLTFLoader.parse`、PLY は Spark の `SplatMesh` の `fileBytes` で読む）。最新の要求（表示する要素、次にその先読み）を優先し、待っている間に要らなくなった読み込みは始めず、走っている読み込みも要らなくなった時点で中断する。同じ URL は二重に読み込まない。スクラブしても読み込みは際限なく増えない。
  - 読み込んだ要素は 8 つまで持ち、使っていない古いものから捨てる。`scene` 入力が差し替わって（再実行）今の要素の一覧にないものは、その場で捨てる。エディタを閉じると全部捨てる。
  - 既知の挙動：サーバーを再起動して temp のファイルが消えた後（404）は、その要素を表示せず、エラーを URL ごとに 1 回だけコンソールに出す。同じ URL は読み直さない。実行し直すと新しいファイルになる。
  - SPLAT の PLY は Spark の `SplatMesh` で読み、コアの Load3D と同じく X 軸まわりに 180° 回してから（`SPLAT_TO_SCENE`）`scene` の変形を掛ける。並べ替えが終わるたびに描き直す。
  - MESH・MoGe の GLB は GLTFLoader で読み、材質を `MeshBasicMaterial`（光源なし、両面、base color・テクスチャ・頂点色を保つ）に置き換える（`makeUnlit`）。素のジオメトリの灰色は glTF の定義どおり（線形の値）に表示するので、ノードの出力（`BARE_COLOR` をそのまま出す）より明るく見える。
  - `world` の Sticker は、評価した位置・回転・`scale` の両面の板として、切り抜いた素材を貼って描く（`worldStickerLayers`）。奥行きで前後する。選択と操作は #72 で加える。3D の `world` の Sticker（#63）はまだ描かない（#72）。
  - 視点の three.js のカメラの near・far は、内容の外接球とグリッドから決める（`pano_space.js` の `spaceCamera`。far は内容と原点のまわりのグリッドの先まで、near は注視点の距離の 1/100 と内容の大きさの 1/10000 の大きいほう）。注視点の距離の 1/100 より近い内容は切れる。
- ノードの出力との差（意図して残しているもの）：
  - 要素の読み込み中は、直前に表示した要素を出す（ノードは必ずそのフレームの要素を描く）。要素のないフレーム（バッチの外、頂点や面のない要素）はノードと同じく何も描かない。
  - 半透明の重なり：Spark はスプラットを深度を書かずに重ね、板は深度を書く。半透明のスプラットと `world` の Sticker が重なる画素の前後と混ざり方は、ノード（`over_by_depth`、スプラットの奥行きは積算アルファ 0.5 の位置）と一致しない。
- #77（Cutout）向けの部品：Camera の視錐台（`cameraFrustumSegments`）、Timeline 上の軌道（`cameraTrajectory`、評価関数で標本化）、Camera から覗く視点（`cameraView`）と、`render` の `space.lines`（線分の描画）。Stickers のエディタでは使わない。
