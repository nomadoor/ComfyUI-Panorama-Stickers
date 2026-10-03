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

`PanoramaStickersNode` のエディタの Panorama 表示は、World の内容（`scene` 入力の接続・実行結果の `scene` のエディタ用ファイル・`world` の Sticker のどれか）があるとき、World を奥行き付きで描く空間の表示になる（下の 3DoF・6DoF）。内容がなければ、従来どおりの見回しだけの表示のままである。Unwrap 表示と旧ノードは変えていない。

- Stickers は撮影用の Camera を持たない。Stickers の ERP は常に World の原点から回転 0 で撮る。そのため Viewport camera は、エディタを開くたびに World の原点（ERP を撮る位置）から始まり、保存しない。グリッドの原点に黄色の印と「ERP origin」の表示を置く。
- 表示のモード：右下の視点の操作のボタン群（`PanoFloatingRight.vue`）の左端に、「3」と「6」を図案にした 2 つのアイコンのボタン（3DoF | 6DoF。Reset View などと同じ大きさ・見た目、アイコンは `icons.js` の `dof_3`・`dof_6`）と Frame Content を並べた空間の群がある。選ばれている側は、他のトグル系のボタン（左のツールのボタンなど）と同じ `.active` の見た目（明るい背景）になるので、今のモードが一目で分かる（押すたびに切り替わるボタンは使わない）。ツールチップは「3DoF view (stay at the origin)」「6DoF view (move freely)」。左上の Panorama | Unwrap（Cutout では Frame | Panorama | Unwrap）は「何を見るか」の切り替えで、3DoF | 6DoF は Panorama の中で視点をどう動かすかの設定なので、同じ高さには並べない。空間の群は World の内容があり Panorama 表示のときだけ、群ごと出る。部品は右下のボタン群に属するので Cutout の Panorama 表示でも使えるが、今は Cutout には出さない（プリセットの `spaceButtons` が空、`spaceFrameButton` が null）。エディタを開くたびに 3DoF から始まり、モードは状態にも設定にも保存しない。
  - ボタンの位置を動かさない規則：どれかのボタンが出たり消えたりしたせいで、他のボタンの位置が変わってはいけない。右下のボタン群は右端に固定した行で、出たり消えたりするのは左端の空間の群だけ（群ごと）なので、それより右のボタン（Reset View・Hide Grid、プレビューの Fullscreen）は動かない。群の中の 3DoF | 6DoF と Frame Content は、空間の表示のときは常に同じ位置にあり、Frame Content は 3DoF では消さずに無効（disabled）にする。表示の条件は `pano_editor_ui_state.js` の `floatingRightState` にまとめ、どの状態でもこの規則が保たれることを `node --test` で確かめている。
  - 以前の小さな「3DoF | 6DoF」の文字のセグメント（`PanoSegments.vue`）は、ボタンの class 名 `pano-segment` がサイドパネルの設定のセグメント（Normal | Inverted）の外枠の class と同じだったため、後に書かれたサイドパネル用の規則（暗い背景・余白 2px・各ボタンに付く左半分の灰色の `::before`）が上書きし、文字が灰色の板に半分隠れて読めなかった。`PanoSegments.vue` の項目は `pano-segments-item` に改め、Move | Rotate | Scale でだけ使う。
  - 3DoF（既定）：視点は World の原点に固定する。Stickers の ERP 出力と同じ見え方になる。操作は従来の Panorama 表示と同じ（何もないところの左ドラッグと中ボタンのドラッグで見回し、ホイールで画角）。右ドラッグは使わず、右クリックのメニューも抑止しない。World の内容は原点から奥行き付きで描く（下の 2 パスの描画）。
  - 6DoF：Viewport camera で空間を自由に動く。操作は下の「3D view controls」の割り当てに従う。Frame Content ボタン（右下）は 6DoF のときだけ押せる（3DoF では無効で、位置は変わらない）。
  - 6DoF から 3DoF に戻すと、視点は原点に戻る（向きと画角は保つ）。注視点の距離も、内容の大きさに戻る。6DoF のまま World の内容がなくなったときも同じく 3DoF に戻り、内容が再び現れると 3DoF から始まる（`switchSpaceMode`・`spaceModeWithContent`）。
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
  - 回る中心（ピボット）・パンの量・ズームの先は、どのプリセットでも同じ規則で決める（`pano_space.js` の `navigationTarget`）。ドラッグを始めたとき・ホイールを回したときに、ポインタの下にある World の内容の点を three.js の Raycaster で求める（`pano_three_view.js` の `raycastPoint`。メッシュと `world` の Sticker の板は三角形に当て、SPLAT は Spark の `SplatMesh.raycast`（不透明度 0.2 以上のスプラット）で当てる。グリッドと軸は当てない）。ポインタの下に何もなければ、視点をまだ動かしていない間は内容の中心（視点の前にあるとき）、それ以外は今のピボット（視点の前方 `distance` の点）を使う。このとき点は、視点から内容の大きさの 5% より近くには置かない（それより近ければ、同じ向きの 5% の距離の点にする）。壁やピボットに寄り切った後でも、何もないところでのパン・ズーム・オービットが止まらないようにするためである。当たったときは、その点そのものを使う。
    - オービット：その点のまわりを回る。点は画面上の同じ位置に留まるので、軸から外れた点のまわりでも視点が跳ばない。ピボットはその点の奥行きに移り、画面の中心の前方に残るので、見回し（Unity-like）でも見えないところへずれない。
    - パン：その点の奥行きでの 1 画素の量で動かすので、つかんだ点がポインタにぴったりついてくる。以前の、内容の大きさに対する下限（つかんだ点とずれる）はやめた。
    - ホイール：その点へ向かって、視点から点への線の上を進む（zoom to cursor。点はポインタの下に留まる）。一段の量はその点までの距離の 15%（`ZOOM_STEP`）で、近づいても進まなくならないように、内容の大きさの 1% を最小の量にする。ただし点は通り越さず、内容の大きさの 0.1% 手前で止まる。戻すときは一段で 15% 進んだぶんを戻す。以前の、ピボットを押し出して進み続ける挙動はやめた。当たり判定は大きなメッシュ（210 万三角形で約 70ms）や SPLAT（全件の走査）で重いので、ホイールでは前回の判定の結果を使い回す（`reuseWheelPick`）。使い回すのは、内容（`contentKey`：描いた要素と変形。MoGe VIDEO の次の要素などで変わる）と視点が前回の一段の後のままで、ポインタが判定した位置から 4px 以内のときで、判定から 250ms の間か、判定に 16ms を超えたときはホイールを続けて回している間（一段の間が 250ms 未満）である。当たらなかったときは「当たらなかった」ことを使い回し、点はその都度上の規則で決める。将来、さらに速くするなら、描いた深度バッファを読み戻してポインタの下の奥行きを得る方法がある（今は依存を足さず Raycaster だけで行う）。6DoF では、ホイールは画角を変えない。
  - 慣性：オービットとパンには付けない（Load3D の OrbitControls の既定 `enableDamping: false` と同じ）。見回し（3DoF と Unity-like の右ドラッグ）は、従来の Panorama 表示と同じ慣性を持つ。
  - 右ドラッグを使うプリセット（Default と Unity-like）では、6DoF の間はキャンバスの右クリックのメニューを抑止する。キャンバスには右クリックだけの操作はもともとない。
  - Reset View ボタンは、原点に戻り、従来と同じ向きと画角に戻す（モードは変えない）。Frame Content ボタンは、向きを保ったまま、内容全体が収まる位置へ下がる。

  注視点（ピボット）は視点の前方 `distance` の点で、内容の大きさが分かると（視点をまだ動かしていなければ）その半径になる。見回し・移動は再生を止めない。計算は `web_src/pano_space.js`（3DoF の原点への固定は `spaceModeView`）にある。
- `sky` の Sticker・ペイント・背景は無限遠にあるので、視点の位置によらず同じ向きに見え、選択・移動・ペイントは従来どおり方向で当たり判定をする（`viewProjection`）。空間の表示では球面の格子の代わりに、地面（World の XZ 平面）のグリッドと軸（X 赤・Y 緑・Z 青）と原点を three.js で描く。グリッドの間隔は内容の大きさに合わせた 10 のべき乗である。
- 描き方：`pano_three_view.js` の `render` に `space` を渡すと、まず従来どおり Sky を回転だけのカメラで描き、深度をクリアしてから、World を視点の位置のカメラで深度を使って重ねる（キャンバスに深度バッファを持たせた）。
  - `scene`：実行結果の `pano_scene_files`・`pano_scene_meta`（#60）を、`scene` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `scene` のチャンネル）。再生ヘッドの Timeline frame で評価した `scene` の Clip range の中だけ、ノードと同じ規則（`batch_index`）で選んだ要素を、`scene` の変形を掛けて描く。MoGe の VIDEO のように要素ごとにファイルがあるものは、次の要素を先に読み込む。
  - 読み込みは `pano_scene_items.js` のキューで、同時に 2 本までにする（`fetch` を `AbortController` 付きで行い、GLB は `GLTFLoader.parse`、PLY は Spark の `SplatMesh` の `fileBytes` で読む）。最新の要求（表示する要素、次にその先読み）を優先し、待っている間に要らなくなった読み込みは始めない。走り始めた読み込みは最後まで読む（中断するのは `scene` 入力が差し替わった・外れたときと、エディタを閉じたときだけ）。同じ URL は二重に読み込まない。スクラブしても読み込みは際限なく増えない。
  - 読み込み中・再生中の表示：そのフレームの要素がまだ読み込めていないときは、入力の要素のうち読み込み済みで、そのフレームの要素より前の最も近いものを出す（前になければ後ろの最も近いもの）。再生中は要素が読み込みに追いつかないので、読み込めた要素だけを間引いて出す（同時に 2 本ずつ新しい要素が届く）。止める・シークすると、そのフレームの要素を最優先で読み、届いたらそのフレームの要素を正確に出す。
  - 読み込んだ要素は 8 つまで持ち、使っていない古いものから捨てる。`scene` 入力が差し替わって（再実行）今の要素の一覧にないものは、その場で捨てる。エディタを閉じると全部捨てる。
  - 既知の挙動：サーバーを再起動して temp のファイルが消えた後（404）は、その要素の代わりに、上と同じく前の最も近い読み込み済みの要素を出し続ける（どれも読めなければ何も出さない）。エラーは URL ごとに 1 回だけコンソールに出し、同じ URL は読み直さない。実行し直すと新しいファイルになる。
  - SPLAT の PLY は Spark の `SplatMesh` で読み、コアの Load3D と同じく X 軸まわりに 180° 回してから（`SPLAT_TO_SCENE`）`scene` の変形を掛ける。並べ替えが終わるたびに描き直す。
  - MESH・MoGe の GLB は GLTFLoader で読み、材質を `MeshBasicMaterial`（光源なし、両面、base color・テクスチャ・頂点色を保つ）に置き換える（`makeUnlit`）。素のジオメトリの灰色は glTF の定義どおり（線形の値）に表示するので、ノードの出力（`BARE_COLOR` をそのまま出す）より明るく見える。
  - `world` の Sticker は、評価した位置・回転・`scale` の両面の板として、切り抜いた素材を貼って描く（`worldStickerLayers`）。奥行きで前後する。選択と操作は下の「`world` の Sticker の操作（#72）」。
  - 3D の `world` の Sticker（`sticker` に MESH・SPLAT・3D ファイルをつないだ `port` の Sticker、#63）：実行結果の `pano_sticker_files`・`pano_sticker_meta`（`pano_scene_files` と同じ形）を、`sticker` 入力の接続が実行時と同じ間だけ使う（`pano_preview_video.js` の `external-sticker` のチャンネル）。Sticker の Clip range の中で表示しているときだけ、Sticker の clip frame から `scene` と同じ規則（ノードの `batch_index`）で要素を選び、評価した位置・回転・`scale` を `scene` の変形と同じ意味で掛けて、不透明度で描く（`pano_space.js` の `stickerContentRequest`）。状態に `world` の `port` の Sticker がない間は要素を持たず、読み込み済みの要素は捨てる（`stickerContentUrls`）。SPLAT は X 軸まわりに 180° 回してから変形を掛け、不透明度は `SplatMesh` の `opacity` にする。メッシュは `scene` と同じく unlit・両面で、不透明度は材質の `opacity` にする。読み込みは `scene` と同じ部品（`pano_scene_items.js`・`pano_scene_loaders.js`）の、Sticker 用の別のキューで行う（`scene` と同じファイルでも、three.js のオブジェクトは一つの親しか持てないので別に読む）。要素の箱は Frame Content と注視点の距離の内容の大きさに入る。ギズモでの操作は下の「`world` の Sticker の操作（#72）」。
  - ノード上の表示（`pano_stickers_node_surface.js`・Preview）は空間の表示を持たず（`scene` も描かない）、3D の Sticker も描かない。
  - 視点の three.js のカメラの near・far は、内容の外接球とグリッドから決める（`pano_space.js` の `spaceCamera`。far は内容と原点のまわりのグリッドの先まで、near は注視点の距離の 1/100 と内容の大きさの 1/10000 の大きいほう）。注視点の距離の 1/100 より近い内容は切れる。
- ノードの出力との差（意図して残しているもの）：
  - 要素の読み込み中と読めなかったときは、前の最も近い読み込み済みの要素を出す（ノードは必ずそのフレームの要素を描く）。再生中は要素を間引いて出す。要素のないフレーム（バッチの外、頂点や面のない要素）はノードと同じく何も描かない。
  - 3D の Sticker の不透明度：エディタのメッシュは両面のまま、不透明度が 1 より小さい間は深度を書かずに半透明にする（1 に戻すと深度を書く）。そのため不透明度を下げると、裏の面や奥の面も透けて重なって見える（ノードは手前の面だけを描く）。
  - 半透明の重なり：Spark はスプラットを深度を書かずに重ね、板は深度を書く。半透明のスプラットと `world` の Sticker が重なる画素の前後と混ざり方は、ノード（`over_by_depth`、スプラットの奥行きは積算アルファ 0.5 の位置）と一致しない。
- #77（Cutout）向けの部品：Camera の視錐台（`cameraFrustumSegments`）、Timeline 上の軌道（`cameraTrajectory`、評価関数で標本化）、Camera から覗く視点（`cameraView`）と、`render` の `space.lines`（線分の描画）。Stickers のエディタでは使わない。

## `world` の Sticker の操作（#72）

`PanoramaStickersNode` のエディタで、`world` の Sticker（画像・動画の板と、3D の `port` の Sticker の両方）を、空間の表示のギズモとインスペクタで動かす。3DoF・6DoF のどちらでも使える。

- 選択：カーソルのツールで左ボタンを押すと、次の順に決める。
  1. 選んでいる `world` の Sticker のギズモのハンドル（下記）。
  2. 選んでいる `sky` の Sticker（複数選択ならその全体の枠）の拡大縮小・回転のハンドル（従来どおり）。
  3. ポインタの下の `world` の Sticker。`raycastPoint` と同じ Raycaster で最も近い当たりを求め、それが Sticker の板か 3D の Sticker の要素なら、その Sticker を選ぶ（`pano_three_view.js` の `pickSticker`・`raycastStickerId`。板のメッシュと 3D の Sticker のグループが `userData.stickerId` を持つ）。World は Sky より手前に描くので、`sky` の Sticker と重なっていれば `world` の Sticker が先になる。
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
- インスペクタ（Vue の `PanoSidePanel.vue`、`sky` の Sticker と同じ部品）：`world` の Sticker を選ぶと、X・Y・Z（World の glTF 座標）・Yaw・Pitch・Roll・Scale・Opacity を数値で変えられる（`worldStickerFields`・`setWorldStickerField`）。位置には上限・下限がなく、scale は 0.01 以上で上限がない。スライダーの範囲は 100 で、値がそれを超えると 10 のべき乗で広がる（`worldFieldRange`）。記録の規則・再生の停止・Undo は `sky` の Sticker のインスペクタと同じ。Copy State は使えない。
- 新しく置く `world` の Sticker：ツールバーの「Add World Image」（`PanoramaStickersNode` だけ。地球のアイコン）で画像を選ぶと、`world` の画像の Sticker として置く（`newWorldSceneSticker`）。それまでエディタには `world` の Sticker を新しく置く経路がなかった（`port` の 3D の Sticker はノードが置く）。置いた Sticker を選んだ状態にする。
  - 置く場所（`pano_space.js` の `newWorldStickerTransform`）：画面上の点の下に World の内容（`scene` の中身・Sticker）の表面があれば、その点。なければ、Viewport camera の前方の、内容のバウンディング球の半径 × 0.5 の距離の点。内容がなければ前方 2（`NEW_WORLD_STICKER_DISTANCE`。ノードが 3D の `port` の Sticker を置く `WORLD_STICKER_POSITION` と同じ距離）。3DoF では視点は原点なので、原点からの距離になる。
  - ボタンを押すときポインタはビューの上にないので、画面上の点にはビューの中心を使う（照準の代わり）。関数は任意の点を受け取るので、ドロップした位置やクリックした位置に置く経路を後で足せる。
  - 向き：板の前方（ローカルの `-Z`）が視点から置く点への向きになる回転（`facingRotation`、roll 0）。板は視点の方を向き、正立して見える（`docs/render-contract.md` の「回転 0 の板は回転 0 の Camera の正面で Camera を向く」と同じ規則）。
  - 大きさ：視点から見て、新しい `sky` の Sticker（hFOV 30°）と同じ幅に見える `scale`（`2 × 距離 × tan 15°`）。
- Placement：エディタには、既存の Sticker の `placement` を `sky` と `world` の間で切り替える UI も経路もない（テストで、エディタのコードが `placement` を書き換えないこと、Vue の部品が `placement` を扱わないことを確かめている）。`placement` を決めるのは Sticker を作るときだけである。ノードによる `port` の Sticker の置き換え（#63）はそのまま。
