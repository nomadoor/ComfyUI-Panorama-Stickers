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
- カメラプレビューは、エディタのビューを `owner` を分けて共有する（WebGL コンテキストはエディタで一つ）。表示する `<canvas>` は Vue の `PanoFloatingRight.vue` が持つ。描き方は下の「エディタの描画を直接表示する」を参照。
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

Panorama Studio のエディタの Panorama 表示は、World の内容（`scene` 入力の接続・実行結果の `scene` のエディタ用ファイル・`world` の Sticker のどれか）があるとき、World を奥行き付きで描く空間の表示になる（下の 3DoF・6DoF）。内容がなければ、従来どおりの見回しだけの表示のままである。Unwrap 表示と旧ノードは変えていない。

- Camera が無いときの ERP は World の原点から回転 0 で撮る。Viewport camera は、ページを読み込んでから初めてエディタを開くとき World の原点（ERP を撮る位置）から始まり、状態にも設定にも保存しない（同じページの中で開き直したときは、下の「視点の記憶」）。グリッドの原点に黄色の印と「ERP origin」の表示を置く。
- 表示のモード：右下の視点の操作のボタン群（`PanoFloatingRight.vue`）の左端に、2 つのアイコンのボタン（3DoF | 6DoF。Reset View などと同じ大きさ・見た目。アイコンは `icons.js` の `dof_3` が Tabler の `rotate-360`（その場で向きを変える）、`dof_6` が `arrows-move`（空間を動く））と Frame Selected（何も選んでいないときは全体を収める）を並べた空間の群がある。選ばれている側は、他のトグル系のボタン（左のツールのボタンなど）と同じ `.active` の見た目（明るい背景）になるので、今のモードが一目で分かる（押すたびに切り替わるボタンは使わない）。ツールチップは、他のボタン（「Reset view」など）と同じく 1〜2 語にそろえ、「3DoF」「6DoF」「Frame selected」とする。左上の Panorama | Unwrap（Panorama Studio と旧 Cutout では Frame | Panorama | Unwrap）は「何を見るか」の切り替えで、3DoF | 6DoF は Panorama の中で視点をどう動かすかの設定なので、同じ高さには並べない。空間の群は World の内容があり Panorama 表示のときだけ、群ごと出る。部品は右下のボタン群に属し、Camera のある Panorama 表示でも同じものを使う（下の「Camera の編集（#77）」）。ページを読み込んでから初めて開くときは 3DoF から始まり、モードは状態にも設定にも保存しない（同じページの中で開き直したときは、下の「視点の記憶」）。
  - ボタンの位置を動かさない規則：どれかのボタンが出たり消えたりしたせいで、他のボタンの位置が変わってはいけない。右下のボタン群は右端に固定した行で、出たり消えたりするのは左端の空間の群だけ（群ごと）なので、それより右のボタン（Reset View・Hide Grid、プレビューの Fullscreen）は動かない。群の中の 3DoF | 6DoF と Frame Selected は、空間の表示のときは常に同じ位置にあり、Frame Selected は 3DoF では消さずに無効（disabled）にする。表示の条件は `pano_editor_ui_state.js` の `floatingRightState` にまとめ、どの状態でもこの規則が保たれることを `node --test` で確かめている。
  - 以前の小さな「3DoF | 6DoF」の文字のセグメント（`PanoSegments.vue`）は、ボタンの class 名 `pano-segment` がサイドパネルの設定のセグメント（Normal | Inverted）の外枠の class と同じだったため、後に書かれたサイドパネル用の規則（暗い背景・余白 2px・各ボタンに付く左半分の灰色の `::before`）が上書きし、文字が灰色の板に半分隠れて読めなかった。`PanoSegments.vue` の項目は `pano-segments-item` に改め、Move | Rotate | Scale でだけ使う。
  - 3DoF（既定）：視点は World の原点に固定する（Camera があるときは下の「Camera の編集（#77）」）。Camera が無いときの ERP 出力と同じ見え方になる。操作は従来の Panorama 表示と同じ（何もないところの左ドラッグと中ボタンのドラッグで見回し、ホイールで画角）。右ドラッグは使わず、右クリックのメニューも抑止しない。World の内容は原点から奥行き付きで描く（下の 2 パスの描画）。
  - 6DoF：Viewport camera で空間を自由に動く。操作は下の「3D view controls」の割り当てに従う。Frame Selected ボタン（右下）は 6DoF のときだけ押せる（3DoF では無効で、位置は変わらない）。
  - 6DoF から 3DoF に戻すと、視点は原点に戻る（向きと画角は保つ）。注視点の距離も、内容の大きさに戻る。原点へは下の「視点の遷移」で動き、着いてから 3DoF の固定に入る。6DoF のまま World の内容がなくなったときも同じく 3DoF に戻り、内容が再び現れると 3DoF から始まる（`switchSpaceMode`・`spaceModeWithContent`）。
- 6DoF の操作（`web_src/pano_view_controls.js`）：ボタンと修飾キーから動きを決める表をプリセットごとにデータで持ち、`viewDragAction`（ボタンの割り当て）と `emptyLeft`（何もないところの左ドラッグ）が決める。プリセットは ComfyUI の設定の「Panorama Suite › Editor › 3D view controls」（id `PanoramaSuite.Editor.ViewControls`、拡張の `settings` で登録し、保存は ComfyUI のコアが行う）で選ぶ。動きは三つ：オービット（ポインタの下の点のまわりを回る。three.js の OrbitControls・コアの Load3D と同じ向きと速さ）、パン（ポインタの下の点がポインタに付いて動く）、見回し（その場で向きを変える。Unity-like の右ドラッグだけ。慣性あり）。

  | 操作 | Default（既定） | Blender-like | Unity-like |
  |---|---|---|---|
  | 何もないところを左ドラッグ | オービット | —（選択の解除だけ） | —（選択の解除だけ） |
  | オブジェクトの上で左ドラッグ | オブジェクトの操作 | オブジェクトの操作 | オブジェクトの操作 |
  | 中ボタンのドラッグ | パン | オービット | パン |
  | Shift + 中ボタンのドラッグ | — | パン | — |
  | 右ドラッグ | オービット | — | 見回し（フライ） |
  | Shift + 右ドラッグ | パン | — | — |
  | Alt + 左ドラッグ | — | — | オービット |
  | ホイール | ポインタの下の点へのズーム | 同左 | 同左 |

  - Default は、ComfyUI の利用者が知っているコアの Load3D（OrbitControls）と Sketchfab に合わせ、何もないところの左ドラッグと右ドラッグでオービットする。中ボタンと Shift + 右ドラッグでパンする。6DoF のその場の見回しは Default に入れていない。
  - Blender-like は Blender の 3D ビューポートの標準（中ボタンでオービット、Shift + 中ボタンでパン、ホイールでズーム）だけを持つ。以前の右ドラッグの見回しは Blender にない操作なので外し、名前から「(+ right-drag look)」も外した。Blender の何もないところの左ドラッグは範囲選択で、エディタでは Ctrl + ドラッグがそれに当たるので、6DoF の何もないところの左ドラッグは視点を動かさない。
  - Unity-like は Unity のシーンビューにある操作（右ドラッグのフライの見回し、Alt + 左ドラッグのオービット、中ボタンのパン、ホイールのズーム）だけなので、名前に足すものはない（Unity の Alt + 右ドラッグのズームなどは入れていない）。何もないところの左ドラッグは Unity でも範囲選択なので、Blender-like と同じく視点を動かさない。
  - プリセットの表示名は、元のアプリにない操作を足したときはそれを名前に書く。設定に保存される値は `default`・`blender`・`unity` で、表示名を変えても変わらない。
  - 表のボタンの割り当ては、オブジェクトの上でもどのツールでも視点だけを動かす。どのプリセットにも、オブジェクトに触れずに回す・パンする手段（Default は右・中ボタン、Blender-like は中ボタン、Unity-like は右・中ボタンと Alt + 左）がある。修飾キーなしの左ドラッグはどのプリセットでもまずエディタのツールが受け持ち、オブジェクトの上ならオブジェクトの操作になる。Ctrl・Meta との組み合わせ（範囲選択）は表に入れない。6DoF では、表にない中ボタン・右ボタンの組み合わせ（Default の Alt + 中ボタンなど）は何もしない（3DoF の中ボタンの見回しにはならない）。
  - 回る中心（ピボット）・パンの量・ズームの先は、どのプリセットでも同じ規則で決める（`pano_space.js` の `navigationTarget`・`panDepth`）。オービットを始めたとき・ホイールを回したときに、ポインタの下にある World の内容の点を求める（`pano_three_view.js` の `pickSurface`。下の「当たり判定（GPU）」）。SPLAT の箱の当たりは使わない（当たらなかったものとして扱う）。箱の中からは光線が箱を出る点になり、見えているスプラットとは関係のない奥行きになるためである。ポインタの下に何もなければ、視点をまだ動かしていない間は内容の中心（視点の前にあるとき）、それ以外は今のピボット（視点の前方 `distance` の点）を使う。このとき点は、視点から内容の大きさの 5% より近くには置かない（それより近ければ、同じ向きの 5% の距離の点にする）。壁やピボットに寄り切った後でも、何もないところでのパン・ズーム・オービットが止まらないようにするためである。当たったときは、その点そのものを使う。
    - オービット：その点のまわりを回る。点は画面上の同じ位置に留まるので、軸から外れた点のまわりでも視点が跳ばない。ピボットはその点の奥行きに移り、画面の中心の前方に残るので、見回し（Unity-like）でも見えないところへずれない。
    - パン：ポインタの下の点は使わず、ピボットの奥行き（視点の前方 `distance`。内容の大きさの 5% を下限とする）での 1 画素の量で動かす（`panDepth`）。ピボットの面がポインタにぴったりついてくる。Blender の既定（Auto Depth がオフ）と同じ。以前はつかんだ点の奥行きで動かしていたが、その奥行きは数 cm 先の Sticker から SPLAT の箱の向こう側まで変わるので、同じ 100px のドラッグで動く量が 200 倍以上ぶれた（特に、Camera が内容の中に立つ Cutout の Frame 表示）。動く向きは視点の画面の軸（roll を含む）に沿う（`panView` は `viewAxes(yaw, pitch, roll)` を使う）。
    - ホイール：その点へ向かって、視点から点への線の上を進む（zoom to cursor。点はポインタの下に留まる）。一段の量はその点までの距離の 15%（`ZOOM_STEP`）で、近づいても進まなくならないように、内容の大きさの 1% を最小の量にする。ただし点は通り越さず、内容の大きさの 0.1% 手前で止まる。戻すときは一段で 15% 進んだぶんを戻す。以前の、ピボットを押し出して進み続ける挙動はやめた。ピボットはその点の奥行きに移るが、内容の大きさの 5% より近くにはしない。壁に寄り切った後のパンが止まったように遅くならないためである。ホイールでは前回の判定の結果を使い回す（`reuseWheelPick`。Cutout の Frame 表示のホイール `zoomFrameAt` も同じ規則）。使い回すのは、内容（`contentKey`：描いた要素と変形。MoGe VIDEO の次の要素などで変わる）と視点が前回の一段の後のままで、ポインタが判定した位置から 4px 以内のときで、判定から 250ms の間か、判定に 16ms を超えたときはホイールを続けて回している間（一段の間が 250ms 未満）である。当たらなかったときは「当たらなかった」ことを使い回し、点はその都度上の規則で決める。6DoF では、ホイールは画角を変えない。
  - キーボードの移動（WASD / QE）：6DoF の Panorama 表示では、キーを押している間、Viewport camera が動く（Frame 表示では Camera が動く。下の「Camera の編集（#77）」）。どのプリセットでも、ドラッグの途中でも使え、モードの切り替えはない（SuperSplat はキーで Fly に切り替わるが、ここではオービットの中心をドラッグを始めるたびにポインタの下で選ぶので、移動で古くなる値が残らない）。キーはドラッグの動きを変えない。
    - 向き：W / S は視点の向きを水平面に倒した向き（SuperSplat と同じく y = 0）に前後、A / D は水平の右の軸に沿って左右、Q / E は World の下・上（glTF の +Y）。真下を向いていても前に進む。2 つのキーを同時に押しても、1 つのときと同じ速さで斜めに進む。キーは物理的な位置（`KeyboardEvent.code`）で受けるので、他の配列のキーボードと macOS の Option でも同じ位置のキーになる。
    - 速さ：内容の大きさ（ホイールの一段と同じ、World の内容の外接球の半径 `spaceScale`）を 1 秒に進む。Shift で 4 倍、Alt で 1/4（`KEY_MOVE_FAST`・`KEY_MOVE_SLOW`）。エディタのキーに Shift・Alt とキーの組み合わせはなく、Shift・Alt とボタンの組み合わせ（上の表、Frame 表示の roll）はドラッグの修飾で、キーの移動とは別に働く。Ctrl・Meta との組み合わせ（Ctrl + W など）はブラウザと OS に残す。
    - 描画：描画のループ（`tick`）が前のフレームからの時間だけ動かすので、フレームレートによらず同じだけ進む。キーを押している間だけフレームを頼み（`editorAnimating`）、全部のキーを離すと止まる。計算は `pano_view_keys.js`（`keyMoveView`・`createMoveKeys`）にあり、`node --test` で確かめている。
    - 受けないとき：文字や数を入力している欄（`TEXT_INPUT_TYPES` の `input`、`textarea`、`select`、編集できる要素）にフォーカスがあるとき、確認のダイアログが出ているとき、エディタの外（上に重なった ComfyUI のダイアログ）にフォーカスがあるときは、キーを受けない（Space の再生と同じ規則、`stageOwnsKey`）。ステージがキーを受けるときは、動くものがないとき（3DoF・Unwrap 表示）も WASD / QE を ComfyUI とブラウザに渡さない（`preventDefault`・`stopPropagation`。ComfyUI の W はワークフロー、A はアセットのサイドバーをエディタの裏で開くため）。Ctrl・Meta との組み合わせは渡す。
    - 3DoF は原点（Camera があればその位置）に立って向きだけを変えるので、キーでは動かない（6DoF にも切り替えない）。Unwrap 表示も動かない。遷移の間は遷移が視点を動かし、キーを押すと遷移はその場で止まる（つかんだときと同じ）。
    - 止める：ウィンドウがフォーカスを失ったとき、ページが隠れたとき（`visibilitychange`）、Meta を離したとき（macOS は Meta を押している間に離したキーの keyup を送らない）、右クリックのメニューが開いたとき（Chromium はメニューが開いている間 keyup を送らない）は、全部のキーを離したものとし、移動はそこで終わる。押したままのキーのリピートが、フォーカスの移った入力欄などステージのものでない所に来たときは、そのキーを離したものとする（入力欄で打つ文字で視点が動かない）。
    - 記録しない：Panorama 表示でキーが動かすのは Viewport camera（ステージの視点）だけで、状態にも Undo にも入らず、再生も止めない。
  - 慣性：オービットとパンには付けない（Load3D の OrbitControls の既定 `enableDamping: false` と同じ）。見回し（3DoF と Unity-like の右ドラッグ）は、従来の Panorama 表示と同じ慣性を持つ。
  - 右ドラッグを使うプリセット（Default と Unity-like）では、6DoF の間はキャンバスの右クリックのメニューを抑止する。キャンバスには右クリックだけの操作はもともとない。
  - Reset View ボタンは、原点に戻り、従来と同じ向きと画角に戻す（モードは変えない）。Frame Selected ボタンは、一般的な 3D ツール（Blender の View Selected、Unity の F）と同じく、向きを保ったまま、選んでいる `world` の Sticker の外接球が画面に収まる位置へ動く。板は `worldStickerPlane` の四隅から、3D の Sticker は読み込んだ要素の箱に `sceneItemBox` の規則と Sticker の変形を掛けて外接球を求める。要素やメディアがまだ読み込まれていない間は、Sticker の位置を中心に、`scale` を半径とする球を使う。何も選んでいないとき、`sky` の Sticker を選んでいるとき（`sky` は無限遠にあり、寄る対象ではない）、選んだ Sticker が Clip range の外のときは、World の内容全体が収まる位置へ動く。球を決める規則は `pano_space.js` の `frameSphere` にまとめ、`node --test` で確かめている。キーボードのショートカットはない。
  - 視点の遷移：Reset View・Frame Selected・6DoF から 3DoF に戻すとき（と、Cutout の Add Frame や選択の一覧で選んだ要素へ向くとき）は、視点を瞬時に切り替えず、一般的な 3D ツール（Blender の Smooth View、Unity の F）と同じく、始点から終点まで短い時間で動かす。どこにいるのかを見失わないためである。空間の内容がない Panorama の見回しの Reset View も同じ仕組みを使う（位置は原点のまま）。
    - 補間：Viewport camera（position・yaw・pitch・hFOV・distance）を、位置と注視点の距離は直線で、yaw は最短の向き（±180° をまたぐときはそちら回り）で、pitch と画角は線形で補間する。時間の関数は ease-in-out（cubic）。純粋な関数として `pano_view_transition.js` の `blendView`・`viewTransitionFrame` にまとめ、`node --test` で確かめている。
    - 長さ：250〜600ms。回る角度（yaw の最短の差・pitch の差・画角の差の大きい方。180° で最大）と、内容の大きさ（`spaceScale`）を単位にした移動の距離（2 つ分で最大）の割合を足して、その間で決める（`viewTransitionDuration`）。見た目が変わらないときは遷移を作らず、着いたときに当てること（Reset View の注視点の距離を内容の大きさに戻すこと、3DoF に入ること）をすぐに当てる。
    - 描画：遷移は状態（`editor.viewTransition`）だけを持ち、独自の `requestAnimationFrame` やタイマーは使わない。エディタの描画のループ（`tick`）が毎フレームその時点の視点を書き込んで描くので、予約するアニメーションフレームは従来どおり 1 つで、エディタを閉じると（`stopRenderLoop`）遷移も止まる。再生は止めない（見回しと同じ扱い）。
    - 中断：遷移中に視点をつかむ（キャンバスでのポインタの押し下げ・Panorama 表示でのホイール）と、遷移は今描いている視点で止まり、操作はそこから始まる。遷移中に別の遷移が来たら、今描いている視点から新しい遷移を始める（前の遷移は終点も含めて捨てる）。
    - 3DoF に戻る遷移：終点は原点。遷移の間はモードを 6DoF のままにして位置の補間として描き、着いたときに 3DoF に入る（`end` に入れたモードを、着いたときにだけ当てる）。描画・当たり判定・操作は遷移中も 6DoF のものなので、途中でつかめば 6DoF のままその位置から動かせる。3DoF | 6DoF のボタンは遷移中から行き先の 3DoF を示し（`shownSpaceMode`）、Frame Selected もその間は押せない。途中で 6DoF を押すとその位置で止まる。どこで遷移を捨てても（つかむ・ホイール・6DoF・内容がなくなる）、ボタンはすぐに実際のモードを示す。ボタンを押したときの動き（何もしない・原点へ戻る・すぐ切り替える）は、実際のモードと遷移の行き先の両方から `spaceModeChoice` で決める。World の内容がなくなって 3DoF に戻るときは、遷移を捨ててすぐ戻る。

  - 視点の記憶：エディタを閉じたときの視点（Panorama・Unwrap・Frame の表示、3DoF・6DoF、Viewport camera の位置・向き・画角・注視点の距離）をノードごとに覚え、同じページの中で同じノードのエディタを開き直すとそこから始まる（`pano_view_memory.js` の `viewMemory`・`restoredView`、`space.js` の `saveView`・`restoreView`）。遷移の途中で閉じたときは、行き先とそのモードを覚える。
    - 置き場所は `pano_node_bridge.js` の `editorSession(node).view` で、`state_json` にも `node.properties` にも書かない。ノードの削除・ワークフローの読み込み（`disposeNodeRuntime`）とページの読み込みで消え、そのあとは従来どおり原点の 3DoF から始まる。
    - 覚えた値が使えないとき（数でない値・範囲の外の値、Camera を消した・360° にしたなどで Frame 表示が使えないとき）は、全部を既定の視点で開く。6DoF を覚えていても World の内容がなくなっていれば、内容がなくなったときと同じく、最初のフレームで原点の 3DoF に戻る（向きと画角は保つ）。

  注視点（ピボット）は視点の前方 `distance` の点で、内容の大きさが分かると（視点をまだ動かしていなければ）その半径になる。見回し・移動は再生を止めない。計算は `web_src/pano_space.js`（3DoF の原点への固定は `spaceModeView`）にある。
- `sky` の Sticker・ペイント・背景は無限遠にあるので、視点の位置によらず同じ向きに見え、選択・移動・ペイントは従来どおり方向で当たり判定をする（`viewProjection`）。空間の表示では球面の格子の代わりに、地面（World の XZ 平面）のグリッドと軸（X 赤・Y 緑・Z 青）と原点を three.js で描く。グリッドの間隔は内容の大きさに合わせた 10 のべき乗である。
- 描き方：`pano_three_view.js` の `render` に `space` を渡すと、まず従来どおり Sky を回転だけのカメラで描き、深度をクリアしてから、World を視点の位置のカメラで深度を使って重ねる（キャンバスに深度バッファを持たせた）。
  - `scene`：実行結果の `pano_scene_files`・`pano_scene_meta`（#60）を、`scene` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `scene` のチャンネル）。再生ヘッドの Timeline frame で評価した `scene` の Clip range の中だけ、ノードと同じ規則（`batch_index`）で選んだ要素を、`scene` の変形を掛けて描く。MoGe の VIDEO のように要素ごとにファイルがあるものは、次の要素を先に読み込む。
  - 読み込みは `pano_scene_items.js` のキューで、同時に 2 本までにする（`fetch` を `AbortController` 付きで行い、GLB は `GLTFLoader.parse`、PLY は Spark の `SplatMesh` の `fileBytes` で読む）。最新の要求（表示する要素、次にその先読み）を優先し、待っている間に要らなくなった読み込みは始めない。走り始めた読み込みは最後まで読む（中断するのは `scene` 入力が差し替わった・外れたときと、エディタを閉じたときだけ）。同じ URL は二重に読み込まない。スクラブしても読み込みは際限なく増えない。
  - 読み込み中・再生中の表示：そのフレームの要素がまだ読み込めていないときは、入力の要素のうち読み込み済みで、そのフレームの要素より前の最も近いものを出す（前になければ後ろの最も近いもの）。再生中は要素が読み込みに追いつかないので、読み込めた要素だけを間引いて出す（同時に 2 本ずつ新しい要素が届く）。止める・シークすると、そのフレームの要素を最優先で読み、届いたらそのフレームの要素を正確に出す。
  - 読み込んだ要素は、数ではなく大きさの上限で持つ（`pano_scene_items.js` の `SCENE_ITEM_BUDGET`、1.5 GiB）。大きさは要素ごとに読み込んだバイト数（GLB・PLY のファイルの大きさ）で数え、合計が上限を超えたら、使っていない古いものから捨てる（`overBudget`）。表示している要素と、表示や先読みに求められている要素、読み込み中の要素は捨てない。上限は `scene` と 3D の Sticker のキューで別々に持つ。要素は間引かずに全解像度で届く（MoGe のパノラマ 4096 x 2048 の 1 フレームで約 390 MB。`docs/render-contract.md`）ので、MoGe の VIDEO で巨大な要素がいくつも並んでメモリを使い切らないようにするためである。
    - 先読みは、持ち続ける要素（表示している要素と求められている要素）と読み込み中の要素に、もう 1 つ足しても上限に収まるときだけ始める（`aheadFits`）。まだ読み込んでいない要素の大きさは分からないので、読み込み中と次の要素は、読み込み済みの最も大きい要素と同じ大きさとみなす。何も読み込んでいない間は先読みしない。1 つで上限を超える要素は表示するが、その先は読み込まない。
    - 表示する要素は上限によらず必ず読み込む。新しい要素を読み込む間は、前の要素を表示し続けるので、1 つで上限を超える要素なら、その間は一時的に 2 つ分を持つ。
    - 取得した `ArrayBuffer` は、パーサー（GLTFLoader・Spark）に渡したら参照を外す（`pano_scene_loaders.js` の `loadSceneItem`）。残るのはパースした要素だけである。
  - `scene` 入力が差し替わって（再実行）今の要素の一覧にないものは、その場で捨てる。エディタを閉じると全部捨てる。
  - 既知の挙動：サーバーを再起動して temp のファイルが消えた後（404）は、その要素の代わりに、上と同じく前の最も近い読み込み済みの要素を出し続ける（どれも読めなければ何も出さない）。エラーは URL ごとに 1 回だけコンソールに出し、同じ URL は読み直さない。実行し直すと新しいファイルになる。
  - SPLAT の PLY は Spark の `SplatMesh` で読み、コアの Load3D と同じく X 軸まわりに 180° 回してから（`SPLAT_TO_SCENE`）`scene` の変形を掛ける。並べ替えが終わるたびに描き直す。
  - MESH・MoGe の GLB は GLTFLoader で読み、材質を `MeshBasicMaterial`（光源なし、両面、base color・テクスチャ・頂点色を保つ）に置き換える（`makeUnlit`）。素のジオメトリの灰色は glTF の定義どおり（線形の値）に表示するので、ノードの出力（`BARE_COLOR` をそのまま出す）より明るく見える。
  - `world` の Sticker は、評価した位置・回転・`scale` の両面の板として、切り抜いた素材を貼って描く（`worldStickerLayers`）。奥行きで前後する。選択と操作は下の「`world` の Sticker の操作（#72）」。
  - 3D の `world` の Sticker（`sticker` に MESH・SPLAT・3D ファイルをつないだ `port` の Sticker、#63）：実行結果の `pano_sticker_files`・`pano_sticker_meta`（`pano_scene_files` と同じ形）を、`sticker` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `external-sticker` のチャンネル）。Sticker の Clip range の中で表示しているときだけ、Sticker の clip frame から `scene` と同じ規則（ノードの `batch_index`）で要素を選び、評価した位置・回転・`scale` を `scene` の変形と同じ意味で掛けて、不透明度で描く（`pano_space.js` の `stickerContentRequest`）。状態に `world` の `port` の Sticker がない間は要素を持たず、読み込み済みの要素は捨てる（`stickerContentUrls`）。SPLAT は X 軸まわりに 180° 回してから変形を掛け、不透明度は `SplatMesh` の `opacity` にする。メッシュは `scene` と同じく unlit・両面で、不透明度は材質の `opacity` にする。読み込みは `scene` と同じ部品（`pano_scene_items.js`・`pano_scene_loaders.js`）の、Sticker 用の別のキューで行う（`scene` と同じファイルでも、three.js のオブジェクトは一つの親しか持てないので別に読む）。要素の箱は Frame Selected と注視点の距離の内容の大きさに入る。ギズモでの操作は下の「`world` の Sticker の操作（#72）」。
  - ノード上の表示（`pano_stickers_node_surface.js`・Preview）は空間の表示を持たず（`scene` も描かない）、3D の Sticker も描かない。
  - 視点の three.js のカメラの near・far は、内容の外接球とグリッドから決める（`pano_space.js` の `spaceCamera`。far は内容と原点のまわりのグリッドの先まで、near は注視点の距離の 1/100 と内容の大きさの 1/10000 の大きいほう）。注視点の距離の 1/100 より近い内容は切れる。
- ノードの出力との差（意図して残しているもの）：
  - 要素の読み込み中と読めなかったときは、前の最も近い読み込み済みの要素を出す（ノードは必ずそのフレームの要素を描く）。再生中は要素を間引いて出す。要素のないフレーム（バッチの外、頂点や面のない要素）はノードと同じく何も描かない。
  - 3D の Sticker の不透明度：エディタのメッシュは両面のまま、不透明度が 1 より小さい間は深度を書かずに半透明にする（1 に戻すと深度を書く）。そのため不透明度を下げると、裏の面や奥の面も透けて重なって見える（ノードは手前の面だけを描く）。
  - 半透明の重なり：Spark はスプラットを深度を書かずに重ね、板は深度を書く。半透明のスプラットと `world` の Sticker が重なる画素の前後と混ざり方は、ノード（`over_by_depth`、スプラットの奥行きは積算アルファ 0.5 の位置）と一致しない。
- Camera 向けの部品（#77）：Camera の視錐台（`cameraFrustumSegments`）、Timeline 上の軌道（`cameraTrajectory`、評価関数で標本化）、Camera から覗く視点（`cameraView`）と、`render` の `space.lines`（線分の描画）。Camera が無いときは使わない。`cameraView` は使っていない（Frame 表示は Camera の shot から `shotCamera` を作り、`placedCamera` で位置に置く）。

## `world` の Sticker の操作（#72）

Panorama Studio のエディタで、`world` の Sticker（画像・動画の板と、3D の `port` の Sticker の両方）を、空間の表示のギズモとインスペクタで動かす。3DoF・6DoF のどちらでも使える。

- 選択：カーソルのツールで左ボタンを押すと、次の順に決める。
  1. 選んでいる `world` の Sticker のギズモのハンドル（下記）。
  2. 選んでいる `sky` の Sticker（複数選択ならその全体の枠）の拡大縮小・回転のハンドル（従来どおり）。
  3. ポインタの下の `world` の Sticker。`pick` と同じ当たり判定（下の「当たり判定（GPU）」）で最も近い当たりを求め、それが Sticker の板か 3D の Sticker の要素なら、その Sticker を選ぶ（`pano_three_view.js` の `pickSticker`）。World は Sky より手前に描くので、`sky` の Sticker と重なっていれば `world` の Sticker が先になる。
  4. 従来どおり、`sky` の Sticker（選んでいる Sticker の本体を含む）と、何もないところ。最も近い当たりが `scene` の中身なら Sticker ではないので、その奥の `sky` の Sticker が選ばれる（`scene` の中身は選べず、#71 までの `sky` の Sticker の選び方を変えない）。
  - `world` の Sticker の本体を押してドラッグしても選ぶだけで、動かさない（動かすのはギズモ）。視点も動かさない。選ぶだけでは再生は止まらない。
  - タイムラインの `world` の Sticker の行を選んでも選べる（以前は選択を外していた）。キャンバスの選択（`sky` の Sticker）と `world` の Sticker の選択は排他で、どちらかを選ぶともう一方は外れる。何もないところを押すと外れる。選択は状態にもノードのプロパティにも保存しない。
  - Delete キーで、選んでいる `world` の Sticker を消す。`port` の Sticker は `sticker` 入力に従うので、`sky` の `port` の Sticker と同じく非表示にする。
- ギズモ：three.js の `TransformControls`（three に含まれる examples、依存は増やしていない）を、遅延読み込みのチャンク（`pano_three_view.js`）の World のパスに描く。DOM のイベントにはつながず、エディタがポインタを渡す（`gizmoPointer` の `hover`・`down`・`move`・`up`）。ギズモの位置・向き・大きさは、毎回の描画で Sticker の評価した値から作る（`createGizmo`）。ギズモが動かすのは代わりのオブジェクトで、その変化を Sticker の Lane に書き、次の描画がそれを描く。ドラッグの間は代わりのオブジェクトを評価した値で置き直さないので、再生が止まってフレームが変わってもポインタと 1 対 1 で動く。ドラッグの途中でギズモが出なくなった（Clip range の外に出た、Sticker が消えた）ときはドラッグを終え、次に出たときにまたつかめる。ポインタを離したことは、ギズモが出ていなくても必ず伝える。
  - ギズモは、選んでいる `world` の Sticker が再生ヘッドで表示されていて（`visible` かつ Clip range の中）、ロックされておらず、Paint / Images の表示が出ているときだけ出る。
  - モードの切り替えは、選んでいる `world` の Sticker の選択メニュー（`PanoSelectionMenu.vue`、`sky` の Sticker の選択メニューと同じく対象の下に出る）の「Move | Rotate | Scale」のセグメントコントロール（`PanoSegments.vue`）で行う。見方ではなく選んだ物を動かす道具なので、上の切り替えには置かない。メニューは、板（`world` の Sticker）の四隅（板のない 3D の `port` の Sticker では原点）を画面に写した範囲と、ギズモのハンドルが画面上で占める範囲の両方の外に、選択メニューの余白（18px）を取って出し、視点・再生ヘッドの変化に付いていく（`worldSelectionMenuModel`・`buildWorldSelectionMenuModel`）。ギズモの範囲は `pano_space.js` の `gizmoScreenBox` が求める：TransformControls はハンドルの 1 単位を、カメラからの距離 × min(1.9 tan(縦の画角 / 2), 7) / 4（size 1）の大きさにして画面上の大きさを保つので、ハンドルとそのピッカーはモードごとの半径（Move・Scale は 0.64、Rotate は 0.85 単位）の球に収まる。その球に接する、カメラを通る面から画面上の外接の箱を出す。すべてのハンドルの頂点がこの箱に入ることは `node --test` で three.js の TransformControls そのものを使って確かめている。下に入りきらないときは対象の上に、上にも入らないときは画面の中に収まる位置に出し、位置のせいで隠れることはない（`selectionMenuPlacement`。`sky` の Sticker のメニューも同じ）。表示の条件はギズモと同じ（`space.gizmo` があるとき。ロック・読み取り専用・Clip range の外・非表示ではギズモと一緒に出ない）。`world` の Sticker の選択は常に 1 つなので複数選択のメニューにはならない。押している間・ドラッグの間（ギズモのドラッグ・視点の移動）は、キャンバスの選択メニューと同じく隠し、離すと戻る。押すたびに切り替わるボタンは使わない。キー（W / E / R）は割り当てない。W と R は ComfyUI のコアのショートカット（Workflows のサイドバー、ノード定義の再読み込み）と同じキーだからである。モードはエディタを開くたびに Move から始まり、保存しない。
  - 移動と回転の軸は World の軸（`TransformControls` の既定の `space: "world"`）。拡大縮小は一様で、どのハンドルでも、ドラッグで最も変わった軸の倍率を `scale` にする（`uniformScale`。0 以下にはしない）。
  - ギズモのハンドルの上ではカーソルが grab になり、ハンドルが強調される（ドラッグを終えたときとポインタがビューから出たときに外す）。ギズモのドラッグ中は視点を動かさない。
  - 回転で pitch の絶対値が 89.9° を超えると、yaw と roll は同じ軸のまわりの回転になり、読み出した yaw が跳ぶ。そこでは Sticker の yaw を保ち、回転の差を roll で表す（`gizmoDragLanes`）。インスペクタの数値が跳ばない。
- 記録：ギズモのドラッグは、モードの Lane（`position`・`rotation`・`scale` のどれか一つ）だけを、`docs/timeline-ui.md` の記録の規則で書く（`setWorldStickerTransform`、内部は `setLaneValue`）。ドラッグの変化は、つかんだときのギズモからの差として、Sticker のその時点の値に掛ける（`gizmoDragLanes`）。再生中につかむと、最初の動きで再生が止まり、止まったフレームの値から変形を始める。変化のあったドラッグは Undo の 1 段になる。
- インスペクタ（Vue の `PanoSidePanel.vue`、`sky` の Sticker と同じ部品）：`world` の Sticker を選ぶと、X・Y・Z（World の glTF 座標）・Yaw・Pitch・Roll・Scale・Opacity を数値で変えられる（`worldStickerFields`・`setWorldStickerField`）。位置には上限・下限がなく、scale は 0.01 以上で上限がない。Scale のスライダーの範囲は 100 で、値がそれを超えると 10 のべき乗で広がる（`worldFieldRange`）。欄の並びは下の「インスペクタの行」。記録の規則・再生の停止・Undo は `sky` の Sticker のインスペクタと同じ。Copy State は使えない。
- 新しく置く `world` の Sticker：ツールバーの「Add World Image」（Panorama Studio だけ。地球のアイコン）で画像を選ぶと、`world` の画像の Sticker として置く（`newWorldSceneSticker`）。それまでエディタには `world` の Sticker を新しく置く経路がなかった（`port` の 3D の Sticker はノードが置く）。置いた Sticker を選んだ状態にする。
  - 置く場所（`pano_space.js` の `newWorldStickerTransform`）：画面上の点の下に World の内容（`scene` の中身・Sticker）の表面があれば、その点。なければ、Viewport camera の前方の、内容のバウンディング球の半径 × 0.5 の距離の点。内容がなければ前方 2（`NEW_WORLD_STICKER_DISTANCE`。ノードが 3D の `port` の Sticker を置く `WORLD_STICKER_POSITION` と同じ距離）。3DoF では視点は原点なので、原点からの距離になる。
  - ボタンを押すときポインタはビューの上にないので、画面上の点にはビューの中心を使う（照準の代わり）。関数は任意の点を受け取るので、ドロップした位置やクリックした位置に置く経路を後で足せる。
  - 向き：板の前方（ローカルの `-Z`）が視点から置く点への向きになる回転（`facingRotation`、roll 0）。板は視点の方を向き、正立して見える（`docs/render-contract.md` の「回転 0 の板は回転 0 の Camera の正面で Camera を向く」と同じ規則）。
  - 大きさ：視点から見て、新しい `sky` の Sticker（hFOV 30°）と同じ幅に見える `scale`（`2 × 距離 × tan 15°`）。
- Placement：エディタには、既存の Sticker の `placement` を `sky` と `world` の間で切り替える UI も経路もない（テストで、エディタのコードが `placement` を書き換えないこと、Vue の部品が `placement` を扱わないことを確かめている）。`placement` を決めるのは Sticker を作るときだけである。ノードによる `port` の Sticker の置き換え（#63）はそのまま。

## Camera の編集（#77）

Panorama Studio のエディタは、状態 v2 の `camera` を Cutout のエディタの shot と Frame 表示の部品で編集する（#77 で状態 v2 の Cutout（`PanoramaCutoutNode`）のために作り、そのノードは #92 で外した）。空間の表示は上の「空間の表示（#71）」の部品（`pano_space.js`・`pano_three_view.js` の `space`）をそのまま使い、別の描画は持たない。

- 作業状態：`parseSceneEditorState`（`pano_editor_state.js`）の状態 v2。エディタが昔から編集してきた shot（yaw・pitch・roll・H FOV・V FOV）は、再生ヘッドでの Camera を評価関数（`evaluateCamera`、ノードと同じ評価）で求めた値（`cameraShot`）で、id は `camera`。shot を変えると、変えたフィールドだけを Camera の Lane に記録の規則で書く（`setCameraShot`。角度は `rotation`、H FOV は `fov`、位置は `position`。どちらかの FOV を変えると `camera.aspect` を FOV の組から決め直し、これは Keyframe を持たない）。yaw などの角度は、元の値から最短の向きの値で書くので、±180° をまたいでも Camera が逆回りしない。書き戻しは描画のたび・再生ヘッドを動かす前・Undo の記録と保存の前に行い（`syncCutoutShot`）、その後で shot を Camera から求め直すので、再生・Keyframe の編集・Undo に shot が付いていく。
- 空間の内容：World の内容（`scene` のファイル・`world` の Sticker）があるとき、Frame 表示とカメラプレビューは Camera の位置から World も描く（`shotViewCamera`・`placedCamera`。ノードの出力と同じ透視投影・同じ Camera の値）。描くのは内容だけで、グリッド・ギズモ・線は描かない。ギズモを持たない空間の入力（`space.gizmo` のないもの）は、ビューのギズモを隠さない（カメラプレビューの描画が Panorama 表示のドラッグを終わらせないため）。
- Frame 表示（World の内容があるとき）：視点を動かす操作が Camera そのものを動かす（Blender の「カメラをビューに固定」）。3D view controls のプリセットのボタンの割り当て（中ボタン・右ボタン・Alt + 左など）でオービット・パンする。オービットの中心は Camera から見た `pickSurface` の点（`navigationTarget`）。ピボットの距離（`frameViewDistance`）は、前の操作によらず常に内容の大きさ（外接球の半径）にする（Blender の、カメラに固定したビュー）。そのためパンの量は、ポインタの下の物にも、それまでのホイールにもよらない。以前は前の操作が残した距離を使っていたので、壁に寄った後はパンが遅くなった。Camera は Keyframe や再生でも動くので、前の操作が残した距離はそもそも当てにならない。オービットは Camera の roll を保ち、ドラッグは roll した画面の軸で受ける（`orbitView`）。左ドラッグは従来どおりその場で向きを変え（ERP の Frame と同じ）、Shift / Alt + 左ドラッグとノブで roll を変える。ホイールはポインタの下の点へ Camera を進める（`zoomView`。6DoF の Panorama 表示のホイールと同じ）。画角はインスペクタの H FOV・V FOV と枠の比率で変える。World の内容がないときは従来どおりホイールで画角を変える。どの操作も再生を止め（ホイールはすぐに、ドラッグは最初の動きで）、記録の規則で Camera の Lane に入る。WASD / QE（上の「キーボードの移動」）も Camera そのものを動かす。向きと速さは 6DoF と同じ（水平に倒した向き、内容の大きさ／秒、Shift・Alt）で、Camera の roll と pitch で動く向きは傾かない。書くのは Camera の `position` の Lane だけで、ドラッグと同じく shot の位置を変え、`syncCutoutShot`（`setCameraShot`）が記録の規則で書く（Keyframe がなければ静的な値、再生ヘッドが Keyframe の上ならその Keyframe、Keyframe の間なら再生ヘッドに Keyframe を足す）。最初に動いたときに再生を止める。押してから全部のキーを離すまで（ウィンドウがフォーカスを失った・右クリックのメニューなどで離したものとしたときも、エディタを閉じたときも）が Undo の 1 段になる（`frame_view.js` の `moveFrameByKeys`・`endFrameKeyMove`）。読み取り専用のエディタとロックした Camera は動かない。
- Panorama 表示（World の内容があるとき）：3DoF | 6DoF と Frame Selected のボタン群を上の「空間の表示（#71）」と同じ位置に出す。
  - 3DoF の視点は World の原点ではなく、再生ヘッドでの Camera の位置に立つ（`spaceModeView` などの `origin`）。Panorama 上の枠（従来の shot の枠と、その移動・拡大縮小・回転）は方向で描くので、Camera の位置から見てはじめて Camera の写す範囲と一致するためである。6DoF に入ると、その位置から動き始める。Reset View もこの位置に戻る。
  - Timeline 上の Camera の軌道（`cameraTrajectory`）を線で描く（Paint / Images を隠すと消える）。
  - 6DoF では Camera の視錐台（`cameraFrustumSegments`、長さは内容の大きさの 1/5、選んでいる間は枠と同じ黄色）を描き、Panorama 上の枠とその周りの暗がりは描かない。視錐台の線の 6px 以内を押すと Camera を選び（`segmentsHit`）、何もないところを押すと外れる（`world` の Sticker の選択と同じ流儀。タイムラインの Camera の行でも選べる）。選んでいる Camera にはギズモ（`TransformControls`）を出し、選択メニューの Move | Rotate で切り替える（Scale はない）。ギズモのドラッグはモードの Lane（`position` か `rotation`）だけを記録の規則で書く（`gizmoDragLanes`）。Frame Selected と Look At Frame は Camera の視錐台が収まるように寄る（Look At Frame はまず Camera の方を向く）。
- インスペクタ：Camera を選ぶと、従来の Yaw・Pitch・H FOV・V FOV・Roll に加え、World の内容があるときは X・Y・Z（World の glTF 座標、上限なし）を出す（`cameraFields`・`setCameraField`）。欄の並びは下の「インスペクタの行」。
- 出力との一致：エディタの Camera はノードと同じ評価関数の値で、Frame 表示はその位置・向き・画角の透視投影で描く。VIDEO や上流の Scene の fps に再基準化して扱っても、ノードは状態の `timeline.fps` で秒を保って読むので、同じ秒の値になる。既知の差：画角 1° 未満（エディタは 1° に寄せる）、出力の大きさの丸めによる縦の画角のわずかな差（上の「既知の食い違い」と同じ）、World の内容の読み込み中の表示（「空間の表示」と同じ）。

## Panorama Studio のエディタ（#89）

`PanoramaStudio` のエディタは、状態 v2 の Stickers のエディタ（`type` は `stickers`）に、上の「Camera の編集（#77）」の部品を足したものである。分岐は `pano_editor.js` の `studio`（ノードの `__panoStudio`、`pano_editor_extension.js` が付ける）・`cameraV2`（状態 v2 の Camera を shot で編集する。今は Studio だけ）・`shotEditor`（shot と Frame 表示を持つ：旧 Cutout と Studio）と、Camera の有無の `hasCamera()` にまとめた。旧ノードの経路は変えていない。状態 v2 の Stickers・Cutout（`PanoramaStickersNode`・`PanoramaCutoutNode`）は #92 で外し、Cutout だけの分岐（`cutoutV2`、`PANO_SCENE` を撮る `capture`、`cutout_state`、`default_camera`）も消した。

- Camera が無いとき（`camera: null`）：shot は無く（`state.shots` は空）、3DoF は World の原点に立ち、Camera のプレビュー・Panorama 上の枠・タイムラインの Camera の行は出ない。違いは、左のツールバーの「Add Camera」と、無効の Frame タブだけである。
- Add Camera：左のツールバー（`modal_shell_presets.js` の `studio`、`PanoToolRail.vue`）の Add World Image の下にある。Camera があるときは無効にし、消さない（下のボタンが動かない）。押すと Camera を 1 台足して選ぶ（`addStudioCamera`、`newStudioCamera`）。初期値は、今の Viewport camera の位置（3DoF では原点、6DoF ではその位置）、yaw と pitch（roll は 0）、hFOV 90°、`aspect` 16:9（vFOV は約 58.7°）、`projection` は `perspective`、Keyframe なし。視点はそのままで、足した Camera の位置は今の視点の位置なので、3DoF の立ち位置も変わらない。
- 削除：Camera を選んで Delete キーか、選択メニュー（Panorama 表示の枠のメニュー、6DoF のギズモのメニュー）の Delete。状態は `camera: null` になり、保存される。Undo で戻る。
- Camera の出入りと視点（`followCameraChange`）：3DoF は Camera があればその位置に立つので、Camera を消すと原点へ、Undo などで Camera が戻るとその位置へ立ち位置が移る。World の内容があり 3DoF の Panorama 表示のときは、瞬時に飛ばず、6DoF で今の位置から行き先まで遷移し（`pano_view_transition.js`）、着いてから 3DoF に入る（6DoF から 3DoF に戻るときと同じ仕組み）。Frame 表示にいるときに Camera を消すと Panorama 表示に移り、視点は Camera が見ていた向きと画角（6DoF ならその位置も）から始まる（`leaveFrameView`）。
- Frame タブ（`PanoViewToggle.vue`、`frameViewButton`）：常に出す。Camera が無いときと、Camera が 360°（`erp`）のときは無効にし、ツールチップで理由を示す（「Add a camera to use the Frame view」「A 360° camera has no frame」）。無効のタブでもツールチップが出るように、`disabled` ではなく `aria-disabled` にし、エディタがクリックを無視する。無効のタブは Tab キーで止まらず（`tabindex` -1）、ポインタを載せても色が変わらない。旧 Cutout の Frame タブも同じ部品で、ツールチップは出さない。
- 画角のプリセット：Camera の枠の比率のプリセット（選択メニューと Frame 表示のレール、`cameraAspectChoices`）の最後に「360°」（`coverage` が 180 なら「180°」）を足した。選ぶと `projection` を `erp` にし、比率のプリセットを選ぶと `perspective` に戻して、その比率にする（`setShotAspect`）。どちらも Undo の 1 段。`erp` のとき、インスペクタの H FOV と V FOV は無効にし（消さない）、選択メニューの縦横の切り替えも無効にする。Frame 表示は使えない（上）ので、Frame 表示のレールで 360° を選ぶと Panorama 表示に移る。Camera のプレビューも出さない。Panorama 上の枠と 6DoF の視錐台は、`fov` と `aspect` の値のまま描く（Camera を選ぶための印。撮る範囲ではない）。枠には辺と角の大きさのハンドルを出さず（`pano_sticker_affordance.js` の `hitFrameAffordance` の `resize`）、`fov` の Lane を書き換えない。回転（roll）のハンドルと移動は残す。
- Camera があるときの操作は上の「Camera の編集（#77）」のとおり：Panorama 表示の枠（選ぶ・動かす・拡大縮小・回転）、6DoF の視錐台とギズモ、Frame 表示、インスペクタ、タイムラインの Camera の行。インスペクタの Camera には Roll があり、Opacity は無い。インスペクタの選択の一覧の先頭にも Camera が入る。旧 Cutout と違い、Panorama 表示で枠の外を暗くするのは Camera を選んでいる間だけで（Sticker を編集する間は暗くしない）、Camera のプレビューの大きさの切り替えボタン（押すたびに切り替わる）は出さない。
- `state_json`：開いて閉じただけでは書き換えない。Camera の有無によらず、開くときに VIDEO の fps へ再基準化しても、`sameEditorStateText` の `rebased` で同じ意味なら書かない。Camera を足す・消すのは編集で、Camera のオブジェクトか `null` を保存する。
- ノード上の表示は、`attachStickers` が Panorama Studio のときに付ける見回すだけの表示（`PanoStudioNodeSurface.vue`、#91）。
- Camera を隠したとき（タイムラインの Camera の行の目、`camera.visible`。`docs/timeline-ui.md` の「表示（目のアイコン）」）：Camera が無いときと同じに動く（`cameraShoots`）。shot は無く、3DoF は原点に立ち（`followCameraChange` で移る）、Camera のプレビュー・Panorama 上の枠・視錐台・軌跡は出ず、選べない。Frame タブは無効で、ツールチップは「The camera is hidden」。Camera は状態に残るので、Add Camera は無効のまま、タイムラインの Camera の行と Keyframe もそのまま。

### 上流の Scene の表示（#90）

`scene` に別の Panorama Studio の `scene` 出力をつないだとき、エディタは上流の要素を見せるが、選べず、動かせず、消せず、タイムラインにも出さない（ADR 0029）。上流の要素は自分の状態に入れず、実行結果の `pano_upstream_layers`（`docs/render-contract.md` の「上流の Scene（#88）」）から毎フレーム描く。

- 読む：`editor/upstream.js`。`scene` の入力が実行結果を作ったときのままのとき（`isNodeOutputMediaCurrent(node, "scene")`）だけ読む。各層の状態は `pano_upstream.js` の `upstreamLayersOf` で読み込み、自分の状態とは別に持つ。
- 時刻：各層は、再生位置の時刻（秒）をその層の `timeline.fps` の Timeline frame にして評価する（`upstreamFrame`。再基準化しない）。
- 描くもの（`upstreamLayerView`）：`sky` の Sticker とペイント（ストロークのグループ、ラスタ、マスク）を自分の Sky の下に、その層の `z_index` の順で（`upstreamPaintEntries`）。`world` の Sticker の板と、`scene`・3D の `port` の Sticker の 3D の項目は World に。隠した要素は描かない（ノードも描かない）。
  - 素材：ファイルの Source は自分の Sticker と同じ URL の画像。`port` の Sticker は、その層の `ui` の最初のフレーム・MP4・RGBA の PNG を、自分の `port` と同じ仕組み（`createVideoFollower`・`createFrameSequence`）で再生位置に合わせる。ペイントは層ごとのペイントエンジンで、自分のペイントと同じ大きさ（`getDesiredPaintTargetDescriptor`）に描く。どれも縮小しない。
  - 3D の項目は、層と種類ごとの読み込みの組（`pano_three_view.js` の `upstreamItems`）で読み、SPLAT は自分のものと同じくビューごとの Spark（`pano_spark_views.js`）で描く。
- 画像は、結果が変わったときに新しい層が使わないものを手放す。
- 見分け：上流の要素は `UPSTREAM_OPACITY`（0.5）を掛けた不透明度で描く。
- 選べない：上流の要素は自分の状態・タイムライン・選択の一覧に無いので、2D の当たり判定（`hit_test.js`）にも Delete にも掛からない。World の板と 3D の項目は、GPU の当たり判定の対象（`pickable`・`pickBoxes`）に入れないので、当たり判定の描画（`pickPass`）で描かれない。そのため、6DoF の視点の回転の中心や、World の画像を置く位置にも使われない。
- タイムライン：上流の Scene がつながっているとき、`scene` の行を出さない（自分の状態の `scene` は描画に使われない）。上流の要素の行も出さない。長さ（`timeline.length`）が無いときは、表示する範囲を実行結果の `pano_timeline_frames`（上流と自分の長いほう）まで広げ、上流の要素の動きの終わりまで再生位置を動かせるようにする（`upstreamSpanFrames`）。
- 上流がつながっているか：リンクの型（`pano_preview_video.js` の `linkedInputType`。型が `*` か空のリンクは出どころの出力の型を見て、旧 Reroute ノードはさかのぼる）が `PANO_SCENE` か、今の実行結果に `pano_upstream_layers` があるとき（`upstreamLinked`）。
- 実行前：リンクの型が `PANO_SCENE` と分かっているのに実行結果に上流の層が無いとき（実行前、またはつなぎ替えた後）、ステージの下の案内の欄（`PanoModal.vue` の `stageNotice`、文は `upstreamNotice`）に「Run the workflow to show the upstream scene.」と出す。失敗や警告があるときはそちらを出す。
- 上流の背景：`scene` の実行結果が今の入力のまま（`bg_media` をつなぎ替えても変わらない。ノードは自分の `bg_media` を使わない）で `pano_upstream_input_images` か `pano_upstream_input_videos` があれば、それを背景にする（`media_session.js` の `upstreamBackground`。`pano_upstream.js` の `upstreamBackgroundOf`）。VIDEO は自分の背景の VIDEO と同じ要素と再生で、タイムラインに合わせて動く。範囲は `pano_upstream_coverage`（`backgroundCoverage`）。長さが Auto のとき、表示範囲は背景の VIDEO の長さでは広げず、`upstreamSpanFrames` に任せる（上流の長さがすでに背景を含む）。このとき自分の `bg_media` のリンクの画像・VIDEO には戻らない（ノードも使わない）。実行結果の `pano_sticker_warnings` に `bg_media is not used` の警告があれば、ステージ下の案内の欄に出す。

## インスペクタの行

インスペクタ（`PanoSidePanel.vue`）の欄は、組になった値を 1 行に横に並べる（Blender・Unity の Transform と同じ）。行は `pano_editor_ui_state.js` の `inspectorRows` が、欄の並び（`pano_editor.js` の `pushParam` の順）から作る。

| 行 | 欄（短い名前） | 持ち主 |
|---|---|---|
| Position | X・Y・Z | `world` の Sticker、World の内容があるときの Camera |
| Rotation | Y（Yaw）・P（Pitch）・R（Roll） | すべて（`sky` の Sticker の R は `rot_deg`） |
| FOV | H（H FOV）・V（V FOV） | `sky` の Sticker、Camera |
| Scale・Opacity | 1 行に 1 つ | `world` の Sticker（Scale）、Sticker（Opacity） |

- 組の行にはスライダーを置かない。欄の左の短い名前をドラッグすると値が変わる（1 px あたり、位置 0.01、角度 0.5°、画角 0.25°。Shift で 1/10）。動かさずに放すと欄に入力できる。ドラッグは欄の `input`・`change` を出すので、エディタは入力と同じに扱う（`change` で Undo の 1 段、記録の規則・再生の停止も同じ）。
- 組の行の欄は 3 等分の幅（2 つの行も同じ幅で、列がそろう）で、桁が増えても幅は変わらない。1 つだけの行は従来どおりスライダーと幅の決まった数値の欄。
- `scene` の変形（位置・回転・大きさ）を変える欄はまだ無い（`scene` の行は Clip range だけ）。足すときは同じ Position・Rotation の行にする。

## 当たり判定（GPU）

空間の表示と Cutout の Frame 表示で、ポインタの下の World の内容（点と、それがどの Sticker か）を GPU で求める（`pano_three_view.js` の `pickAt`。`pick` が点を、`pickSticker` が Sticker の id を返す）。以前の three.js の Raycaster は CPU で全三角形を調べ、MoGe のパノラマの MESH（約 1,610 万三角形）で 1 回 0.44〜0.52 秒かかっていた。何もない所を押すと 2 回走り（`pickSticker` と、続く視点のドラッグの `pickSpace`）、約 1 秒止まっていた。

- 描き方：直前の描画の World を、ポインタの画素だけを写す 1 x 1 のレンダーターゲットに描き、その 1 画素を `readRenderTargetPixels` で読む。カメラは描画と同じ設定に `setViewOffset` で画素の窓を掛ける（`pano_pick.js` の `pickWindow`。画素の中心がポインタの点の光線になる）。1 画素の視錐台の外の物は three.js の視錐台カリングで描かれない。
  - 書くもの：物の番号（1 から。0 は何もない）と、視線の軸に沿った深度（ビュー空間の -z）。float のターゲットが使えれば（`EXT_color_buffer_float`）RGBA32F の 1 回の描画で赤に番号、緑に深度を書く。使えなければ RGBA8 に 2 回描き、番号と深度（`far` に対する割合）を赤・緑・青の 24 ビットに詰める（`packPick24`。シェーダーの `pack24` と同じ詰め方）。
  - 深度から World の点へ：ポインタの光線を、視線の軸方向に長さ 1 の向きで作り（`pickRay`）、点 = 視点 + 向き × 深度（`pointAt`）。
  - 描く物：`scene` と 3D の Sticker のメッシュ、`world` の Sticker の板。両面を描き、`scene` と Sticker の変形（`world` の行列）をそのまま使う。不透明度 0 の物と非表示の物は当てない。グリッド・軸・線・ギズモ・Spark の描画は、その間だけ隠す（`pickPass`。描いた後に表示とマテリアルを戻す）。板は画像の透明部分も含めた四角に当たる（以前と同じ）。
- SPLAT：Spark の `SplatMesh` は自前のシェーダーで描くので `overrideMaterial` もマテリアルの差し替えも効かない。Spark 2.1 に深度や ID を書き出す手段があるかを調べたが、深度を色にする `setDepthColor`（ブレンドされた 8 ビットの色で、正確な深度ではない。変更子の差し替えでスプラットを作り直し、並べ替えも非同期）と、オフラインのターゲットへの描画（`renderTarget`・非同期の `readTarget`）しかなく、1 画素の深度と ID を同期で得る手段はない。LoD の当たり判定用スプラット（`lodRaycast`）は LoD を使う場合だけである。そこで SPLAT は `raycastable: false`（Spark の `SplatMesh.raycast` はメインスレッドの wasm で全スプラットを走査する）にして、要素の箱（読み込み時の `getBoundingBox`、要素の変形込み）と光線の交点で代用する（`rayBoxDepth`。箱の中からは光線が出る点）。精度は落ちるが、軽さと安全（Spark の raycast の重さ・落ちる疑い）を優先した。
- 最も近い当たり：点は、GPU の当たりと SPLAT の箱の当たりのうち、カメラの near と far の間で最も浅いもの（`nearestHit`）。Sticker（`pickSticker`）は、`world` の Sticker の板の当たりがあれば、より手前の SPLAT の箱より先にする。箱は見えている SPLAT より大きいので、箱の前に見えている板が選べなくならないようにするためである。
- 失敗したとき：描画が例外になったら（WebGL のコンテキストが失われた、RGBA32F への描画を拒まれたなど）、隠した物とマテリアルを必ず戻し（`pickPass` の `finally`）、レンダーターゲットも外す。その呼び出しは GPU の当たりなし（SPLAT の箱だけ）として扱い、結果は使い回さない。float のターゲットで失敗したら次から RGBA8 で描き、RGBA8 でも失敗したら GPU の当たり判定をやめる（SPLAT の箱だけで当てる）。この切り替えはエディタを開き直すまで戻らない。
- 使い回し：同じ画素・同じ視点（カメラの設定）・同じ内容（`contentRevision`：描いた要素と変形、`world` の Sticker の板の位置と大きさが前の描画と値で違うときに 1 つ進む数。不透明度 0 の物は入らない）なら、前の結果を返す（`pickCacheKey`）。当たる物を変える変更（ジオメトリ・変形・表示）を足すときは、比べる `parts` に入れて `contentRevision` も進むようにすること。1 回の押下で `pickSticker` と、何もない所なら続く `pickSpace` の 2 回呼ばれるが、2 回目はこの使い回しで描かない。ホイールの `reuseWheelPick` はこの上に残る（ホイールの一段ごとに視点が変わるため）。
- 境目：`pano_pick.js` は WebGL を使わない純粋な関数（詰め方と戻し方、画素の窓、深度から World、光線と箱、最も近い当たり、使い回しのキー）で、`node --test`（`tests/pano_pick.test.mjs`）で確かめる。`pickPass` の表示とマテリアルの入れ替えと戻しも、three.js のオブジェクトだけで確かめる。描画と読み戻し（`drawPick`）は WebGLRenderer が要るので Node では動かず、実機で確かめる。
- 期待する速さ：GPU の 1 画素の描画は頂点の処理が主で、1,610 万三角形でも数 ms〜数十 ms の見込み（実機で未計測）。CPU の Raycaster の 0.5 秒と比べて 1 桁以上速い。
- Spark の `SparkRenderer` は `enableLod: false` で作る。エディタは SPLAT を LoD・ページングで描かないので、LoD のワーカーを起こさない。

## Spark の描画はビューごとに 1 つ

原則：**1 つの `SparkRenderer` と 1 つの `SplatMesh` は、1 フレームに 1 つのカメラでしか更新しない。** 描く範囲（ビュー）ごとに `SparkRenderer` と `SplatMesh` を持ち、three.js の layers で分ける（`pano_spark_views.js` の `createSparkViews`）。

- 理由：`SparkRenderer` は、描くときのカメラが前に並べ替えたカメラから動いていると（位置 1e-3 か向きの内積 0.999 を超える差）、全スプラットを作り直し（generate）、深度を読み戻し（`readRenderTargetPixelsAsync`）、並べ替え、順序のテクスチャ（RGBA32UI）を送り直して、`onDirty` で次の描画を求める（Spark 2.1 の `updateInternal`・`driveSort`）。以前は 1 つの `SparkRenderer` で、ステージとカメラのプレビューの 2 つのカメラから描いていた。そのため毎フレーム相手のカメラに対してこれが走り、`onDirty` の再描画がまた両方を描くので、何もしていないときも rAF の速さで止まらなかった。表示とソートが別のカメラ由来になるので、並び順も崩れていた。オーナーのタブが落ちたのは、どれも 3DGS がある場面だった。
  - `SplatMesh` も同じ形で巻き込む。球面調和（SH）を持つ `SplatMesh`（3DGS の PLY のほとんど）は、色が視線の向きで変わるので、更新のカメラが前回と違うと版（`version`）を上げる（`SplatMesh.update` の `viewToObject` と `hasRgbDir`）。版が上がると、それを集めている `SparkRenderer` はすべて作り直しと並べ替えをする。そのため、`SparkRenderer` だけをビューごとに分けても、`SplatMesh` を共有したままでは、プレビューを描くたびに両方が作り直し、並べ替えの後の `onDirty` でまた両方を描いて、止まらない。
- ビュー：three.js のビューの `owner`（`render` の `input.owner`）ごとに 1 つ。エディタでは、ステージ（`owner` なし）とカメラのプレビュー（`"camera_preview"`）の 2 つである。Frame 表示は shot のカメラでステージに描き、そのフレームではステージ自身のカメラは描かないので、ステージの `SparkRenderer` を使う（モードを切り替えたフレームだけ、1 回作り直す）。Unwrap は World を描かない。当たり判定の 1 画素の描画（`pickPass`）は Spark を隠し、`pickCamera` は layer 0 しか見ない。ノード上の共有のビューは World を描かない。
- layers：World の物（グリッド・`scene` と 3D の Sticker・`world` の Sticker の板・線・ギズモ）は layer 0 のまま。各ビューの `SparkRenderer` は自分の layer（1〜31。最初に使ったビューから順に割り当てる）に置く。描くたびに、World のカメラ（`worldCamera`）を layer 0 とそのビューの layer だけが見えるようにする（`aim`）。three.js は見えない layer の `SparkRenderer` を描かず、その `onBeforeRender`（= Spark の更新）も呼ばない。
- ビューごとの `SplatMesh`：読み込んだ `SplatMesh` は、どの layer にも置かない（`layers.disableAll()`）。各ビューは、それと同じ `PackedSplats` を使う `SplatMesh` を 1 つ作り（スプラットの配列とテクスチャは複製しない）、読み込んだ物の子として（変形をそのまま受ける）、そのビューの layer に置く（`splat`）。不透明度は描くたびに読み込んだ物から写す。Spark はシーンから生成元を集めるときにカメラの layers で選ぶので（`prepareGenerate` の `camera.layers.test`）、各ビューの `SparkRenderer` は自分のビューの `SplatMesh` だけを集め、各 `SplatMesh` は自分のビューのカメラでだけ更新される。
  - `SplatMesh` を `packedSplats` で作ると、その `PackedSplats` の `splatEncoding` を書き換える（指定がなければ既定値）。作った直後に元の値へ戻す。
  - ビューの `SplatMesh` は読み込んだスプラットを共有しているので、`dispose` しない（親から外すだけ）。ビューを放したとき（`release`）と、読み込んだ要素を捨てたとき（`forget`。`scene` の要素の `dispose`）に外す。
  - 最初の案は「ステージの Spark を layer 0、プレビューの Spark を layer 1、SplatMesh を `enable(1)`、ステージのカメラを `set(0)`、プレビューのカメラを `set(1)`」だった。しかし three.js の layers は子に継がれないので、この形ではプレビューのカメラにグリッド・板・GLB の各メッシュも見えなくなる（すべての物に `enable(1)` が要る）。また、1 つの SplatMesh を両方のカメラから見せると、上の SH の版の問題が残る。そこで共有の物を layer 0 に残し、Spark の描画と SplatMesh をビューごとに 0 以外の layer に分けた。
- 再描画の範囲：`SparkRenderer` の `onDirty` は、そのビューだけを描き直す理由で返す（`createThreeView` の `onSplats(owner)` → エディタの `splatDrawReason`：`DRAW_REASON.SPLAT_STAGE` か `SPLAT_PREVIEW`）。`SPLAT_STAGE` ではカメラのプレビューを描き直さない（`cameraPreviewChanged`）。`SPLAT_PREVIEW` ではステージも描くが（描画バッファが保たれないので、WebGL を描くフレームはキャンバス全体を描く）、ステージの `SparkRenderer` はカメラが動いていないので作り直しも並べ替えもしない。どちらも、並べ替えが終わって 1 回描けば止まる。`scene` の要素と Spark のモジュールの読み込みは、両方に関わるので `MEDIA` のままである。
- 片付け：カメラのプレビューが隠れたとき（Frame 表示、Camera が無い、プレビューを閉じた）と、フレームの取り込みに失敗したときは、プレビューの `SparkRenderer` を放す（`releaseSplats`。テクスチャは残す）。放すときに並べ替えの途中なら、終わるまで待ってから `dispose` する。待つのは 100 ms ごとに最大 50 回（約 5 秒）で、失敗した並べ替え（コンテキストの喪失・ワーカーの終了）は終わらないので、その上限で `dispose` する。待つあいだの `onDirty` は無視する。ビューの `dispose`（エディタを閉じた・コンテキストの喪失）では、すべてをすぐに `dispose` する。
  - 並べ替えの途中の `dispose`：Spark 2.1 の `dispose` はソートのワーカーを終了して `sortWorker` を `null` にするが、進行中の `driveSort` は読み戻しが終わると、`sortWorker` が無ければ新しいワーカー（`SplatWorker`。Web Worker と WebAssembly のメモリ）を作り、それは誰にも終了されずに残る。そこで `dispose` の直後に、`sortWorker` に「並べ替えが終わらない」代わりの物（`call` が解決しない Promise を返し、`dispose` は何もしない）を入れる（`disposeSpark`）。途中の並べ替えはそこで止まり、新しいワーカーは作られない。コンテキストの復帰では新しいビューを作るので、`SparkRenderer` も最初から作り直す。
- 費用：プレビューが出ているあいだは、`SparkRenderer` 1 つ分を余計に持つ。読み込んだスプラットそのもの（`PackedSplats` の配列とテクスチャ）は共有し、ビューの `SplatMesh` は生成の設定だけを持つ。`SparkRenderer` 1 つが持つ物（Spark 2.1、`enableLod: false`）：
  - アキュムレータ 3 つ（表示中・生成中・予備。生成のたびに入れ替わるので、やがて 3 つとも確保される）。それぞれ全スプラット分の生成先のレンダーターゲット（`ensureGenerate`。packed では 1 スプラットあたり RGBA32UI の 16 バイトと、読み戻し用の RGBA8 の 4 バイト）を持つ。N スプラットでおよそ 3 × 20 × N バイト（100 万スプラットで約 60 MB、250 万で約 150 MB。テクスチャの大きさへの切り上げで少し増える）。
  - 順序のテクスチャ（RGBA32UI、幅 4096、16,384 スプラットごとに 1 行）とその CPU 側の `Uint32Array`、深度の読み戻しの `Uint32Array`。どちらも N × 4 バイト程度。
  - ソートのワーカー 1 つ（Web Worker と、その WebAssembly のメモリ。並べ替えのたびに読み戻しと順序の配列を受け渡す）。
  - 品質は落とさない：スプラットを間引く・解像度を下げるといった、データを減らす最適化はしていない。
- 診断：`sources["three.editor"].sparks` に、`SparkRenderer` ごとの直近 1 秒の `generates` と `sorts`、最後に使ったカメラが出る（docs/diagnostics.md）。何もしていないときに 0 であれば、ループは止まっている。
- テスト：`tests/pano_spark_views.test.mjs`。Spark の `SparkRenderer` と SH 付きの `SplatMesh` のスタブと、three.js の描画の layers の扱いを真似た描画で、1 つの `SparkRenderer` と `SplatMesh` が 1 フレームに 2 つのカメラで更新されないこと、`onDirty` の理由がそのビューだけを描き直すこと、並べ替えの後に止まること（`SparkRenderer` を共有しても、`SplatMesh` を共有しても止まらないこと）を確かめる。

## World の組み立て（毎回の描画）

`buildWorld` は毎回の描画で World の中身を並べるが、オブジェクトは使い回す：`scene` と 3D の Sticker の要素のグループ（要素ごと）、`world` の Sticker の板（プール）、グリッド（間隔ごと）、線（`space.lines` の中身が値で変わったときだけ作り直す。`cachedLines`・`sameValue`。JSON の文字列は作らない）、ギズモ。並べたオブジェクトが前と同じ順で同じなら、`world` を空にして付け直すことはしない（`setChildren`）。

## エディタの描画を直接表示する

Chrome のタブが落ちる件の監査で、エディタが描画のたびに WebGL の絵を 2D のキャンバスへ `drawImage` で写していること、何もしていないときも `requestAnimationFrame` を回し続けていること、毎フレーム `JSON.stringify` でキーを作っていることが見つかった。2D のキャンバスがソフトウェア描画に落ちると、写すたびに GPU から読み戻すことになり、メモリの確保の失敗の最も疑わしい原因になる。エディタ（Stickers・Cutout・Panorama Studio・Preview のモーダル）の描画を次のように改めた。ノード上の表示（`pano_preview_view.js` の共有のビュー）は、一つの WebGL を各ノードの 2D のキャンバスへ写す作りのまま変えていない。

- 描画のスケジュール（`pano_frame_scheduler.js`）：エディタが `requestAnimationFrame` を呼ぶのはこの 1 か所だけである。`requestDraw(reason)` を受けたときに次のフレームを 1 回だけ描き、視点の遷移・慣性・ドラッグ・フェード（`editorAnimating`）のあいだだけ続けて回す。何もしていないときはフレームを要求しない。`editorAnimating` が読む物（視点の遷移・慣性・レイアウトの待ち・プレビューの大きさの切り替え）は必ず `startAnimation` を通して始め、そこでスケジューラを起こす。ドラッグはポインタを押したときに起こし、フェードはフレームの中で始まる。1 つのコールバックや描画が例外を投げても、そのフレームの残りと次の予約は止まらない。再生（`createVideoPlayback` の clock）、ドラッグのまとめ（`createFrameBatch`）、選択メニューとツールチップの位置合わせも、このスケジューラの `requestFrame` を使う。理由は列挙型 `DRAW_REASON`（`STATE`・`VIEW`・`PLAYHEAD`・`PAINT`・`OVERLAY`・`MEDIA`・`SPLAT_STAGE`・`SPLAT_PREVIEW`・`RESIZE`・`CONTEXT`）で持ち、描画の入口は `drawScene(reasons)` の 1 つである。
- WebGL のキャンバスをそのまま置く：`PanoModal.vue` のステージの `<canvas data-stage-background>` を three.js のキャンバスそのものにした（`createEditorView({ canvas })`）。上に重なる 2D のキャンバス（ハンドル・枠・グリッドの線・文字）は透明で、CSS ピクセルのまま変えていない。`OVERLAY` だけのフレーム（ホバー・範囲選択など）は WebGL のキャンバスに触れず、ページは前の絵を表示し続ける。WebGL を描くフレームでは、描画バッファが保たれない（`preserveDrawingBuffer: false`）ので、キャンバス全体を描き直す。
  - 何も描くものがないときの背景の色（`#070707`）、Unwrap の外側（`#070707`）、Frame 表示の下地（`#0a0a0a`、shot がまだ描けないときの文脈の範囲は `#111111`）は WebGL の `clear` で塗る。Frame の文脈の範囲も、何も描かれない所は透明でなく `#0a0a0a` にする（`render` の `clearColor`）。グリッド・ERP の格子・文字は以前からオーバーレイに描いていたので、そのままである。
  - Frame 表示は、一つのキャンバスの中で `setViewport`・`setScissor` で描く範囲を分ける（`render` の `rect`）。文脈の範囲はキャンバスの外まで広がるので、キャンバスに入る部分だけを、カメラの `setViewOffset` でその窓として描く（`visibleWindow`）。キャンバスの外は描かない。
  - Unwrap も同じキャンバスの、ERP の矩形に描く。
  - 残した写し：Cutout のカメラプレビューは、ステージの上に浮かぶ別の要素（角の丸み・フェードイン、プレビューの大きさの切り替え、オーバーレイより上の重なり）なので、ステージのキャンバスの一部にはできない。描き方は、同じ WebGL のキャンバスの左下に先に描き、その範囲を `createImageBitmap` で取り（Chrome では GPU 上の複製）、プレビューの `<canvas>` の `bitmaprenderer` に渡す。直後にステージの絵がその範囲を覆う。2D のキャンバスは使わない。描き直すのは、プレビューの大きさが変わったときと、`VIEW`・`OVERLAY`・`SPLAT_STAGE` 以外の理由（状態・再生位置・素材・プレビューの Spark の並べ替え・大きさ・コンテキスト）があるときだけである。`createImageBitmap` が失敗したら、毎フレーム試し直さずにプレビューを止め（「Preview unavailable」）、プレビューを隠して出し直すか、コンテキストが復帰したときにだけもう一度試す。
- 解像度：`MAX_RENDER_SIDE`（2048）を外した。エディタの WebGL のキャンバスは、CSS の大きさ × `devicePixelRatio` で描く。ただし画面に見える大きさ（ウィンドウの `innerWidth`・`innerHeight` × `devicePixelRatio`）を超えるときは、縦横を同じ比でそこまで縮める（`screenRenderSize`）。グラフを大きくズームしたノード上の Preview も同じで（`measurePreviewCanvasSize` の `screen`）、一度に見える画素は画面を超えないので、目に見える画素は減らない。そのほかの上限は GPU の `MAX_RENDERBUFFER_SIZE` と `MAX_TEXTURE_SIZE` の小さい方だけで（`fitRenderSize`）、それを超えるときだけ縮める。`devicePixelRatio` が変わったとき（別の画面へ移したとき）も `matchMedia` で大きさを合わせ直す。ノード上の共有のビューも同じ上限だけになり、Preview ノードのキャンバス（`measurePreviewCanvasSize`）も CSS の大きさ × `devicePixelRatio` になった。
- 毎フレームのキー：`JSON.stringify` のキーをやめた。
  - 状態の変更は、スケジューラの `stateRevision`（`STATE` の要求の数）で数える。理由の付け方の方針：状態が変わりうるときは `STATE`（`requestDraw` で理由を省いたときの既定なので、書き忘れても古い表示は残らない）。状態が変わらないことが確かな所だけが、ほかの理由を渡す：視点（`VIEW`）、ホバー・範囲選択（`OVERLAY`）、再生位置（`PLAYHEAD`）、描いている途中のストロークとストローク・ラスターの移動（`PAINT`。描画用の状態 v2 はペイントを含まないので作り直さない）、素材の読み込み（`MEDIA`）。ギズモのドラッグは Sticker の値を変えるので `STATE` のままである。描画用の状態 v2（`loadSceneState`）と Camera の軌跡は、この数が変わったときだけ作り直す。Timeline の Keyframe と Clip range のドラッグも、1 フレームにまとめたうえで `STATE` で描く（数を進める）。
  - `evaluateSceneState` は 1 フレームに 1 回にした（Sky の Sticker と World で共有。`skyLayers`・`worldStickerLayers` の `evaluated`）。
  - World の当たりの内容は `contentRevision`、線は値の比較（`sameValue`）にした。Unwrap とカメラプレビューのキー（`viewInputKey`）は、上の描き直しの規則に置き換えて削除した。
- 再生中の Vue：再生位置（`frame`）と再生中か（`playing`）は、`uiState` の外の 2 つの `shallowRef`（`timelinePlayhead`）にして、`PanoModal.vue` から `PanoTimeline.vue` にだけ渡す。Timeline の行（`buildTimelineModel`）は状態・選択・レイアウトが変わったときだけ作り直し、再生位置・時刻の文字・キーのボタンの状態（`keyedAt`）は Timeline の部品が refs から求める。ピンの並び（`linePins`）は再生位置が動いても作り直さない。サイドパネルは、選んでいる物に Keyframe か Clip range があるとき（`inspectorTimed`）だけ再生位置ごとに作り直し、選択が変わったときは全体を作り直す。
- WebGL コンテキストの喪失：`webglcontextlost` で `preventDefault` し、ビューの GPU の資源を放す（コンテキストは放さない。`dispose({ lost: true })`）。そのあいだ描画と当たり判定は何もせず、エラーも出さずに待つ。`webglcontextrestored` で、同じキャンバスにビューを作り直し、全体を描き直す（`CONTEXT`）。カメラプレビューも描き直す。診断（`pano_diagnostics.js`）は、失ったビューを復帰まで同じコンテキストとして数えるので、1 回の喪失と復帰は `created` 2・`lost` 1・`restored` 1・`disposed` 1・`alive` 1 になる。
- 旧ノードの動画：旧 Preview ノード（`pano_preview_previewnode.js`）と、旧 Stickers・旧 Cutout のノード上の背景の VIDEO（`createLoopingPreviewVideo`）は、自動で再生しない。`PanoramaStickersNode` のノード上の Timeline と同じく、既定は止めて先頭のフレームを表示し、再生は操作で行い（Preview はダブルクリックか Space、旧 Stickers は再生のボタン）、再生中はループする。画面外（折りたたみ・別のグラフ・サブグラフの中）では止める。旧 Cutout のノード上の表示には再生の操作がないので、先頭のフレームのままである。エディタの Timeline のサムネイル用の `<video>` とキャンバスは、作り終えたら（失敗・中断も）放す。

