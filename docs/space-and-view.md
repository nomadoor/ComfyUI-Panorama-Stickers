# 空間と視点

新しい UI の層（ADR 0044）の、Panorama Studio のエディタと新しい Preview のウィンドウで、使う人が空間の中をどう見て
どう動くかの規則を定める：視点が一つであること、開いたときの視点と Reset View、量の一覧（目の高さ `E` の倍数の上限と、
注視点までの距離から求める操作の量）、世界の境界、注視点 `T`、マウスとキーの割り当て（Panorama 表示と Frame 表示）、
直接の操作となめらかに動く操作、カーソル、視点の操作の部品、地面のグリッド、World の物のガイドとホバー、
Add とドロップの着く所、Preview のウィンドウの違い、ウィンドウがフォーカスを失ったとき。用語は `CONTEXT.md` に従う。
決めた理由は ADR 0045（目的と視点）、0046（地面の高さ）、0047（`docs/adr/0047-view-navigation-and-placement.md`。一つの視点の動かし方と、
新しく置く物の行き先）にある。

新しい UI に切り替えるまで、Panorama Studio と Preview は古い UI で開き、その視点の規則は `docs/editor-interaction.md` の
「視点の操作」と `docs/preview-node.md` の「`PANO_SCENE` を見る」が持つ（ADR 0044 の「置き換えの進め方」）。

この文書が持たない規則：`ground` の状態の形・欠けたときの読み方・上流からの受け継ぎ（`docs/scene-state-v2.md`。ADR 0046）、
選択・ギズモ・選択メニュー・インスペクタ・Camera の Lane の記録（新しい UI の「選択と編集」の画面の spec。それまでは
`docs/editor-interaction.md`）、Keyframe の記録の規則と再生（`docs/timeline-ui.md`）、three.js と Spark で描く仕組み・GPU の
当たり判定・視点のカメラの near と far（`docs/threejs-spark-integration.md`）、3D ファイルのアップロードと経路と待つ間の表示
（`docs/editor-interaction.md` の「3D ファイルを置く流れ」）、見た目の値（`docs/design.md`）、Preview ノードの入力と `ui` と
ノード上の表示（`docs/preview-node.md`）。

## この文書が owner である規則

Python はこの文書の規則を持たない（列は `—`）。「（未実装）」は、ADR 0044 の置き場所（`web_src/studio/`、
`web_src/components/studio/`）に作る予定のモジュールで、「（未作成）」は作る予定の test である。印の無いものは今ある。
新しい UI のステージ（`web_src/studio/stage.js`）は、今は Panorama 表示だけを動かす。World の内容（`web_src/studio/stage_content.js`）と、
タイムラインで選んだ物（回る中心と Frame Selected）はステージにつないである。ステージの上で物を選ぶこと（クリック、World の物のガイド、ギズモ、Sky の画像のハンドル）は
`web_src/studio/stage_objects.js` にある。Camera タブ（Frame 表示と Panorama モード）も `stage.js` につないである。まだ動かない部分を各行に「未実装」と書く。

| 規則 | Python | JS | test |
|---|---|---|---|
| 目の高さ `E` と量の一覧 | — | `web_src/studio/view_scale.js` | `tests/studio_view_scale.test.mjs` |
| 視点が一つであること、開いたときの視点、Reset View、視点の記憶 | — | `web_src/studio/view_camera.js` `openingView`・`rememberView`・`recallView`、開くと閉じるは `web_src/studio/editor.js`、出力の視点は `web_src/studio/stage_view.js` `outputView`、下の部品 `web_src/pano_view_memory.js` `viewMemory`・`restoredView`、`web_src/pano_node_bridge.js` `editorSession` | `tests/studio_view_camera.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/pano_view_memory.test.mjs`、`tests/browser/studio_editor.spec.js` |
| 世界の境界と、止まったときの知らせ、黙って何もしない操作の知らせ | — | `web_src/studio/view_scale.js` `worldBoundRadius`、`web_src/studio/view_camera.js` `clipToBound`・`createNotice`・`VIEW_NOTICES`、一行の知らせを出すのは `web_src/components/studio/StudioNotice.vue` | `tests/studio_view_scale.test.mjs`、`tests/studio_view_camera.test.mjs`、`tests/browser/studio_editor.spec.js` |
| 注視点 `T`（初めの `T`、付いて動くこと、距離の範囲、決め直す操作、回る中心） | — | `web_src/studio/view_camera.js` `initialTarget`・`orbitCenter`・`createViewCamera`、ポインタの下の当たりは `web_src/studio/stage_view.js` `surfaceHit`（GPU の当たりと地面の近い方）、下の部品 `pano_space.js` `orbitView`・`viewAxes`・`frameView`・`frameSphere`、`pano_three_view.js` `pick`、`web_src/pano_ray_box.js`。選んだ物（タイムラインで選んだ行の物）の中心は `web_src/studio/stage_content.js` `stickerFrameSphere`、つなぐのは `web_src/studio/editor.js` | `tests/studio_view_camera.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/browser/studio_editor.spec.js` |
| マウスとキーの割り当て、直接の操作となめらかに動く操作（Panorama 表示と Frame 表示） | — | `web_src/studio/view_input.js` `navigationAction`・`createViewInput`・`createWheelSteps`、`web_src/studio/view_camera.js` `createViewCamera`、事象を受けるのは `web_src/studio/stage.js`、下の部品 `web_src/pano_view_keys.js` `keyMoveView`・`createMoveKeys`、`web_src/pano_wheel.js` `readWheelDirection`。Frame 表示の視点（`view_camera.js` `createViewCamera` の `frame`）と Camera の Lane への記録はステージ（`stage.js`）と `web_src/studio/editor.js`（`pano_editor_state.js` `setCameraShot`）、続けて回したホイールを Undo の 1 段にまとめる待ちは `view_scale.js` `FRAME_WHEEL_REST_MS`。レンズの Camera（κ ≠ 1）の当たりと、パンでポインタの動きを写す点は `web_src/studio/stage_view.js` `lensPickView`・`lensPinholePoint`・`frameViewFov`（下の部品 `pano_lens.js` `lensPickWindow`・`lensAngle`）、使うのは `stage.js`、クリックで選ぶのは `stage_objects.js` `press`。 | `tests/studio_view_input.test.mjs`、`tests/studio_view_camera.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/pano_view_keys.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_camera_wired.spec.js` |
| カーソル | — | `web_src/studio/view_input.js` `stageCursor`・`LOOK_CURSOR`・`ORBIT_CURSOR`・`KNOB_CURSOR` | `tests/studio_view_input.test.mjs` |
| 視点の操作の部品（球・手・矢印、操作中に光ること） | — | `web_src/components/studio/StudioNavWidget.vue`、光る規則は `web_src/studio/view_input.js` `knobAction`・`litKnobs` | `tests/studio_view_input.test.mjs`、`tests/browser/studio_editor.spec.js` |
| 地面のグリッド（何をどの高さに描き、どこで薄れるか） | — | `web_src/studio/grid.js` `groundGrid`（量は `view_scale.js`）、描く部品は `web_src/pano_ground_grid.js`（`docs/threejs-spark-integration.md`）、スイッチは `web_src/components/studio/StudioViewButtons.vue` | `tests/studio_stage_view.test.mjs`、`tests/browser/studio_editor.spec.js` |
| World の物のガイドと、CPU のホバーとクリックの判定 | — | `web_src/studio/world_guides.js`（形・中心・箱の判定・見え方。読み込み中のガイドの箱は `web_src/studio/load_reveal.js` が渡す）、Camera の印の形と当たりは `web_src/studio/camera_marker.js`、3D の Sticker の粗い占有グリッドとその光線は `web_src/pano_coarse_grid.js`・`web_src/studio/hit_test.js`、ステージにつなぐのは `web_src/studio/stage_objects.js`、描くのは `web_src/studio/stage_overlay.js`、下の部品 `pano_space.js` `projectPoint`・`boxCorners`。Camera タブ（Frame 表示）では `stage.js` が Frame 表示の枠の箱で描く（`stage_overlay.js` の `origin`）。レンズの Camera（κ ≠ 1）の上には描かず、ホバーも判定しない（未実装。「レンズの Camera の当たり」） | `tests/studio_world_guides.test.mjs`、`tests/studio_camera_marker.test.mjs`、`tests/studio_stage_objects.test.mjs`、`tests/studio_hit_test.test.mjs`、`tests/browser/studio_select.spec.js`、`tests/browser/studio_hit.spec.js`、`tests/browser/studio_camera_wired.spec.js` |
| Add とドロップの着く所（Add の画像の二択の後の置き場所を含む）と、ドラッグ中の印の形 | — | `web_src/studio/landing.js`（着く所 `landingHit`・`landingBoxes`・`groundLanding`・`groundBelow`、置く値 `skyPose`・`worldImageTransform`・`file3dTransform`・`file3dPosition`・`facingYaw`、印 `dropMarker`、ラベルの置き場所 `dropLabelPlace`）、置くのは `web_src/studio/add_files.js`、下の部品 `pano_three_view.js` `pick`（板を除く当たり）、CPU の箱の当たりは `web_src/studio/view_camera.js` `boxDepth`、`pano_sticker_geometry.js` `buildStickerGeometry`（Sky の枠） | `tests/studio_landing.test.mjs`、`tests/studio_add_files.test.mjs`、`tests/browser/studio_add.spec.js` |
| Preview のウィンドウの視点（エディタとの違い、引き継ぎ、地面の高さ、減衰と慣性、グリッドの既定） | — | 減衰と慣性は `web_src/studio/preview_motion.js` `createPreviewMotion`（ステージの `follow`、`web_src/studio/stage.js`）、引き継ぎと地面の高さは `preview_motion.js` `previewOpening`・`previewOpeningPose`・`previewHandBack`・`previewGround`（地面の規則は `pano_scene_state.js` `sceneGround`）、つなぐのは `web_src/studio/preview_window.js`、慣性の減り方の値は `web_src/pano_interaction_controller.js`（ADR 0010） | `tests/studio_preview_motion.test.mjs`、`tests/browser/preview_window.spec.js` |
| ウィンドウがフォーカスを失ったとき、Meta を離したときと右クリックのメニューが開いたときにキーを離すこと | — | `web_src/studio/view_input.js` `createViewInput().lostFocus`、事象を受けるのは `web_src/studio/stage.js`（`blur`・`visibilitychange`・Meta の `keyup`・エディタの中の `contextmenu`）、下の部品 `pano_view_keys.js` `createMoveKeys` | `tests/studio_view_input.test.mjs`、`tests/pano_view_keys.test.mjs`、`tests/browser/studio_editor.spec.js`（`blur`・右クリックのメニュー）、`tests/studio_stage.test.mjs`（Meta・右クリックのメニュー） |

## 量の一覧

操作の手触りと上限に効く数は、すべてこの表の名前で持ち、code では一つの定数に置く。長さの単位は World の単位（ADR 0023）。
どの量も World の内容の大きさでは変えない（ADR 0047）。量は三つの尺度のどれかで決まる。

- `E`：目の高さ。`E` ＝ max(`|ground|`, `EYE_HEIGHT_MIN`)（`ground` は状態の地面の高さ。既定の -1.6 なら `E` は 1.6。地面を 0 の近くに
  しても、境界と置く大きさが 0 にならないように下限を持つ。ADR 0048）。原点はパノラマを撮った目の位置
  なので、`E` は目から地面までの高さになる。上限と置く大きさ（世界の境界、`T` の距離の範囲と既定の距離、グリッド、
  World の画像の高さ、Camera の Frame Selected）はこれで決まり、`ground` を変えると一緒に変わる。表の括弧の中は `E` が 1.6 の
  ときの値。
- `d`：視点から注視点までの距離 `|P − T|`。パン・ホイール・前後の移動（ジョイスティック、WASD / QE）の量はこれと、パンと
  ホイールではポインタの下の点で決まる（Blender の式。下の「直接の操作」「なめらかに動く操作」）。近くを見ていれば細かく、
  遠くを見ていれば大きく動く。
- 絶対：画素・角度・秒・World の単位で決まった量。

| 名前 | 尺度 | 値 | 意味 |
|---|---|---|---|
| `EYE_HEIGHT_MIN` | 絶対 | 0.5（World の単位） | `E` の下限（上の「`E`」） |
| `WORLD_BOUND_RADIUS` | `E` | 30 `E`（48） | 世界の境界の基本の半径（下の「世界の境界」） |
| `WORLD_BOUND_MARGIN` | `E` | 2 `E`（3.2） | 境界を広げるときの余白 |
| `TARGET_DEFAULT_DISTANCE` | `E` | 5 `E`（8） | 初めの `T` が何にも当たらないときの距離。初めの `T` で数える地面の当たりの遠さの上限も兼ねる |
| `TARGET_MIN_DISTANCE` | `E` | 0.005 `E`（0.008） | `d` の下限 |
| `TARGET_MAX_DISTANCE` | `E` | 30 `E`（48） | `d` の上限。パンで掴む深さとホイールの中心までの距離の上限も兼ねる |
| `CAMERA_FRAME_RADIUS` | `E` | 1 `E`（1.6） | Camera を選んで Frame Selected するときの球の半径（中心は Camera の位置） |
| `CAMERA_GUIDE_LENGTH` | `E` | 0.5 `E`（0.8） | 3D タブの Camera の印の基本の長さ（Frame モードの視錐台の奥行き。Panorama モードの球の直径はその半分）。視点がこの距離より Camera に近いときは、印を描かず当たりにも数えない（開いたときの視点は Camera の位置にあり、印が視点を包んでしまうため） |
| `ROTATE_SNAP_DEG` | 絶対 | 15° | Shift を押して回すときに止める角度の刻み（ギズモの Rotate、空の画像の回転のハンドル。絶対の角度の倍数に止める。`docs/studio-ui.md` の「ギズモ」「下の中央のバー」）。Camera タブの Roll の目盛りも同じ値を使う |
| `CAMERA_GUIDE_MIN_PIXELS` | 絶対 | 80 px | Camera の印の長さの画面の下限。印の長さは、`CAMERA_GUIDE_LENGTH` と、Camera の位置の深さでこの CSS px に写る長さの大きい方にする（遠くから見ても、地面のグリッドの 1 マスほどに縮んでまぎれないため） |
| `WORLD_IMAGE_HEIGHT` | `E` | 1 `E`（1.6） | World に置く画像の板の高さ |
| `GRID_MINOR_FADE` | `E` | 8 `E` → 24 `E`（12.8 → 38.4） | 1 単位の線が薄れ始める距離と消える距離（視点からの水平の距離） |
| `GRID_MAJOR_FADE` | `E` | 16 `E` → 30 `E`（25.6 → 48） | 10 単位の線と軸が薄れ始める距離と消える距離 |
| `JOYSTICK_PIXELS` | `d`（絶対の px） | 100 px | 前後のジョイスティックで、1 秒に `d` 進むずれ |
| `WHEEL_FACTOR` | `d`（絶対の比） | 1.2 | ホイールの一段の縮尺（Blender の一段と同じ） |
| `PITCH_LIMIT` | 絶対 | 89.9° | 視点の pitch の上限と下限（±） |
| `ORBIT_DEG_PER_PIXEL` | 絶対 | 0.3° | オービットの 1 CSS px あたりの角度（yaw と pitch で同じ） |
| `WHEEL_EASE_SECONDS` | 絶対 | 0.4 秒 | ホイールの一段の動きの長さ |
| `ACTION_EASE_SECONDS` | 絶対 | 0.4 秒 | ダブルクリックの向き直し・Frame Selected・Reset View の動きの長さ |
| `FRAME_GAP_LIMIT` | 絶対 | 0.1 秒 | 続けて動く操作（ジョイスティック、WASD / QE、Preview の減衰と慣性）が一つのフレームに数える時間の上限。前のフレームからの時間がこれ以上なら（タブが止まっていた、など）、`FRAME_FALLBACK_SECONDS` として数える |
| `FRAME_FALLBACK_SECONDS` | 絶対 | 1/60 秒 | 上のときに数える時間 |
| `BOUND_NOTICE_SECONDS` | 絶対 | 2 秒 | 止まったときの知らせと、黙って何もしない操作の知らせ（下の「黙って何もしない操作」）を出しておく長さ（最後に出したときから） |
| `WHEEL_STEP_PIXELS` | 絶対 | 100 px（仮。試作で詰める） | ピクセル単位の細かいホイールの事象（トラックパッド）を溜めて一段にする量（下の「ホイール」） |
| `FRAME_WHEEL_REST_MS` | 絶対 | 180 ms（旧 UI の Frame 表示と同じ） | Frame 表示で続けて回したホイールを Undo の 1 段にまとめる待ち。最後の一段からこの時間ホイールが止まったら 1 段にする（下の「Frame 表示」の「記録」） |
| `DROP_PREVIEW_BOX` | 絶対 | 横 1・高さ 1・奥 1（World の単位）、底の中央が原点 | 箱の大きさが分かる前の 3D ファイルの印と、経路が答える前の読み込み中のガイド |
| `PREVIEW_DAMPING` | 絶対 | 0.95 | Preview のウィンドウの減衰（下の「Preview のウィンドウ」） |

ほかの spec と code が持つ値で、ここでは参照するだけのもの：

| 名前 | 値 | 持ち主 |
|---|---|---|
| `DEFAULT_VIEW_HFOV`（参照） | 100° | `pano_space.js`、`docs/editor-interaction.md`。Panorama 表示と Preview の視点の横の画角で、どの操作も変えない |
| `KEY_MOVE_FAST`（参照） | 4 | `pano_view_keys.js`、`docs/editor-interaction.md`。WASD / QE の速さに Shift で掛ける数。新しい UI では Alt で遅くする `KEY_MOVE_SLOW` を使わない（下の「直接の操作」の WASD / QE。ADR 0048） |
| `NEW_STICKER_HFOV`（参照） | 30° | `pano_space.js`。新しい Sky の Sticker の横の画角 |
| `CAMERA_HIT_PIXELS` | 6 px | `web_src/studio/camera_marker.js`。Camera の印の線の当たりの幅（下の「ホバーの判定」。古い UI の `pano_space.js` `segmentsHit` と同じ値） |
| `COARSE_GRID_CELLS` | 16 | `web_src/pano_coarse_grid.js`。3D の Sticker の当たりの粗い占有グリッドの、各辺のマスの数（下の「ホバーの判定」） |
| `COARSE_GRID_SLICE_MS` | 4 ms | `web_src/pano_coarse_grid.js`。そのグリッドを手の空いた時間に作るとき、1 回に使う時間の上限 |
| `COARSE_GRID_IDLE_TIMEOUT_MS` | 100 ms | `web_src/pano_coarse_grid.js`。手が空かなくても、グリッドを作る次の 1 回が呼ばれるまでの最長の待ち |

視点の roll はいつも 0。Frame 表示の画角は Camera の H FOV である。

## 視点は一つ

- Panorama Studio のエディタにも Preview のウィンドウにも、3DoF | 6DoF の切り替えは無い（ADR 0045）。視点はいつも空間を
  自由に動ける。Sky だけの場面（World の内容が無い）、IMAGE・VIDEO を見る Preview も同じ操作で動き、モードを内容で
  切り替えない。前に進んでも絵が変わらない場面でも、そのことを知らせる文は出さない（エディタでは地面のグリッドが動いて
  見える。Preview でグリッドを隠しているときも知らせない。ADR 0047）。
- Sky・背景・ペイントは無限遠にあるので、どこに立っていても同じ方向に見え、方向で触れる（`docs/threejs-spark-integration.md`
  の「空間の表示」）。
- 視点は、位置 `P`（World の glTF の座標）、向き（`yaw`・`pitch`。軸は `pano_space.js` の `viewAxes`。前方を `forward` と書く）と、
  注視点 `T`（下の「注視点 `T`」）を持つ。
- Panorama 表示で視点を動かしても、状態にも Undo にも入らず、再生も止めない。Frame 表示では視点が Camera そのもので、
  動かすと Camera の Lane に入る（下の「Frame 表示」）。
- Camera はいつも一台あり、消せない（ADR 0048。`docs/studio-node.md` の「Panorama Studio」）。Camera のボタンでカメラを今の視点へ
  持ってくる・隠す・Undo しても、視点は動かさない（ADR 0045）。
- ComfyUI の設定「3D view controls」（`PanoramaSuite.Editor.ViewControls`）のプリセットは、新しい UI では読まない。切り替えで、
  Panorama Studio と Preview はこの設定を使わなくなる。

### 開いたときの視点と Reset View

- 開いたとき：同じページで同じノードの視点を覚えていればそこから（下の「視点の記憶」）。無ければ出力の視点から始める：
  再生ヘッドでの Camera の位置と yaw（Camera はいつもあり、隠していても撮る。ADR 0048。既定の Camera は World の原点と yaw 0）。
  pitch はどちらも 0（水平。ADR 0046）。`T` は下の「初めの `T`」。
- Reset View：開いたときの出力の視点（覚えた視点ではない）へ、`ACTION_EASE_SECONDS` で動く。`T` は行き先の視点で求めた
  「初めの `T`」になる。Frame 表示では使えない（ボタンは隠さずに無効）。
- 視点の記憶：エディタを閉じたときの表示（Panorama・Frame）、`P`・`yaw`・`pitch`・`d` をノードごとに覚え、同じページで
  開き直すとそこから始まる（`T` は前方 `d` の点。置き場所と消える時は今の `editorSession(node).view` のまま）。なめらかに
  動いている途中で閉じたときは、行き先を覚える。覚えた値が使えないとき（数でない、Frame 表示が使えない）は、全部を出力の
  視点で開く。

## 世界の境界

視点が出られない球。原点を中心に、半径 `R` は次の大きいほう：

- `WORLD_BOUND_RADIUS`
- 表示しているフレームの World の内容の外接球が収まる半径（原点から球の中心までの距離 ＋ 球の半径 ＋ `WORLD_BOUND_MARGIN`）
- 原点から Camera までの距離 ＋ `WORLD_BOUND_MARGIN`（Camera はいつもある）。Frame 表示で Camera を動かしている間は、
  ジェスチャーを始めたとき（ドラッグの押下、ホイールの一段、キーを押し始めたとき）の Camera の位置で数える
- 下の「なめらかに動く操作」の行き先の視点の、原点からの距離 ＋ `WORLD_BOUND_MARGIN`（次にその種類の操作で行き先を決めるまで持つ）

規則：

- 視点を動かす直接の操作（パン、ジョイスティック、WASD / QE）とホイールは、動いた先が境界の外なら、境界に出る点で止める。
  止まったときは、ステージの一行の知らせに「The view can't go farther」を出し、最後に止まってから `BOUND_NOTICE_SECONDS` で消す。
  ホイールが距離の範囲で止まったとき（下の「ホイール」）も同じ知らせを出す。
- 視点が境界の外にいるとき（内容が消えて境界が縮んだ、オービットで外へ出たなど）は、境界に近づく動きだけを通し、遠ざかる
  動きは止める（知らせは同じ）。
- オービットと見回しは境界で止めない。オービットは境界の外へ出ることがあり、その後の動きには上の「外にいるとき」を当てる。
- なめらかに動く操作（ダブルクリック、Frame Selected、Reset View）の行き先は境界で切らない。境界が行き先を含むように広がる
  （上の 4 つ目）。
- Add とドロップの着く所も、この境界の中だけで探す（下の「Add とドロップ」）。
- 視点のカメラの far は `docs/threejs-spark-integration.md` の「空間の表示」が決める（境界の中の物と地平線までのグリッドが
  切れないように、`R` から決める）。

### 黙って何もしない操作

効かない操作を黙って無視しない（`docs/agents/ux-principles.md`）。次の操作は何も動かさず、ステージの上端の中央の一行の知らせに出し、
`BOUND_NOTICE_SECONDS` で消す（ADR 0048）。

| 操作 | 知らせ |
|---|---|
| 空（何にも当たらない所）へのダブルクリック | 「Nothing to focus on」 |
| World の内容も選んだ物も無いときの Frame Selected | 「Nothing to frame」 |

## 注視点 `T`

視点が持ち続ける一つの点で、オービットの中心になる。SuperSplat の焦点、Blender のビューの中心と同じ考え。画面に印は
出さない。

- 表面の当たり：この文書で「表面の当たり」は、光線と World の 3D の物（`scene` の中身、3D の Sticker）と地面（y = `ground`）の
  当たりのうち、視点に最も近いものをいう。`world` の画像の板は素通りする（板を当たりに数えない）。パン、ホイール、Add と
  ドロップがこれを使う。GPU の当たり（`pano_three_view.js` の `pick` の、板を除く当たり）で求める。
- 初めの `T`（開いたとき、Reset View、Frame 表示に入ったとき）：画面の中心の線（`P` から `forward`）の表面の当たりを、CPU で
  求める（GPU はまだ描いていない視点の当たりを読めないため）。CPU の当たりは、地面と、3D の物の箱（3D の Sticker の回した
  要素の箱と、`scene` の要素の箱）に光線が入る点で、世界の境界の中のものだけを数える。地面の当たりは、`TARGET_DEFAULT_DISTANCE`
  より遠ければ数えない（水平に近くわずかに下を向くと、地面の当たりは何十 `E` も先になる。それを `T` にすると、何にも当たらない
  所（空、背景だけの所）でのパンとホイールが `T` の深さで動くので、少しのドラッグで何十の単位も跳ぶ。3D の物の箱は遠くても
  数える）。当たらなければ、その線の上の `TARGET_DEFAULT_DISTANCE` の点。どちらも下の距離の範囲に寄せる。後から内容が
  読み込まれても、`T` を求め直さない。
- 付いて動く：見回し・パン・ジョイスティック・WASD / QE では、`T` を画面の中心の線の上の、動く前の距離 `d` の点に置き直す。
  オービットでは `T` は World の中でも画面の上でも動かない。ホイールは下の「ホイール」。
  - 選んだ物のまわりのオービット（下の「回る中心」）の後は、`T` は画面の中心から外れている。次の見回し・パン・ジョイスティック・
    WASD / QE が、`T` を画面の中心の線の上の距離 `d` の点に戻す（そのとき `T` は World の中で跳ぶが、画面には印が無い）。
    `T` が外れたまま空でホイールを回すと、外れた `T` を中心に縮尺するので、絵がずれて動く。
- 距離の範囲：`d` はいつも `TARGET_MIN_DISTANCE` 以上 `TARGET_MAX_DISTANCE` 以下にする。範囲の外の点を `T` にするときは、
  `P` からその点への線の上で範囲に寄せる。なめらかに動く操作の行き先にも当てる。
- 黙って探し直さない：押したとき・ホイールのたびに、`T` を求め直すことはしない（求め直すと、回る量と動く量が毎回変わる）。
  `T` が変わるのは、上の「付いて動く」とホイールと、次の操作だけである。
  - ダブルクリック（Panorama 表示と Preview）：ポインタの下の当たりを GPU で求める。表面の当たりと違い、`world` の画像の板にも
    当てる（唯一の例外。見えている物に焦点を合わせる操作なので、見えている板も数える）。その点を `T` にして、視点を `T` が画面の中心に来る向きへ `ACTION_EASE_SECONDS` で
    向ける（位置は動かさない）。当たりが無い（空）ときは動かさず、上の「黙って何もしない操作」の知らせを出す。
  - Frame Selected：下の「Frame Selected」。
  - Reset View：上の「開いたときの視点と Reset View」と「初めの `T`」。
  - オービットを始めるとき：下の「回る中心」。
- 回る中心：オービットを始めたとき（ドラッグでも部品の球でも）、World の物（`world` の Sticker、上流の要素を含む）を選んで
  いて、それが表示されていて中心が分かる（再生ヘッドで表示中、要素が読み込み済み）なら、その中心（Frame Selected の球の
  中心、`frameSphere`）を `T` にして回る。視点は向け直さない（`T` はその物の画面の位置のまま）。それ以外は今の `T` のまわりを
  回る。Camera を選んでいるとき（3D タブ）は、Camera の位置を中心にして回る（ADR 0048 が ADR 0047 の「Camera は数えない」を置き換える。
  Camera を今の視点へ持ってきた直後は中心までの距離がほぼ 0 になり、`d` に比例する WASD・ジョイスティック・空へのホイールが遅く
  なりうる。試作で確かめ、起きたら直し方を決める）。選んだ時点ではなく回し始めに求めるので、どの
  経路で選んだか（ステージ、タイムラインの行、ドロップ、Add）と、その後に `T` を動かした操作によらない。

## マウスとキー

Panorama 表示と Frame 表示（Camera から見る）で同じ割り当てを使う。Frame 表示では、下の操作が Viewport camera ではなく
Camera そのものを動かす。

| 操作 | 動き |
|---|---|
| 何もないところを左ドラッグ | 見回し（その場で向きを変える） |
| 右ドラッグ（どこでも） | 見回し。物の上でも選ばず、編集しない |
| 中ボタンのドラッグ | パン |
| Alt + 左ドラッグ、Alt + 右ドラッグ（どこでも、物やギズモの上でも） | `T`（回る中心）のまわりのオービット |
| Alt + 中ボタンのドラッグ | 前後のジョイスティック |
| ホイール | ポインタの下の点へ近づく・離れる一段 |
| W / S・A / D・Q / E のキー | 前後・左右・下上（近道。同じことはマウスでもできる） |
| ダブルクリック（Panorama 表示） | そこを `T` にして向く（上の「注視点 `T`」） |

- 物に触るのは Alt なしの左ボタンだけ。物の上の左ボタンは選択と編集（「選択と編集」の画面の spec。それまでは
  `docs/editor-interaction.md`）。動かさずに離した何もないところの左クリックは、今と同じく選択を外す。
- Alt を押している間は、物とギズモのホバーの強調をしない（押した瞬間に今の強調も消す）。Alt + ドラッグは必ずオービット
  なので、強調は誤った合図になる。
- ステージは右クリックのメニューを出さない（右ドラッグを使うため。キャンバスに右クリックだけの操作は無い）。
- 表に無いボタンと修飾キーの組み合わせは何もしない。Ctrl・Meta との組み合わせは範囲選択とブラウザに残す。

### 直接の操作

ドラッグ・ジョイスティック・キーは、ポインタとキーに 1 対 1 で、その場で当たる。エディタでは遅れ（追従）も慣性も付けない
（ADR 0047）。

- 見回し：`P` は動かない。ドラッグの (dx, dy) 画素で `yaw` を dx ÷ 幅 × 横の画角だけ減らし、`pitch` を dy ÷ 高さ × 縦の画角
  だけ増やす（`PITCH_LIMIT` で止める）。絵はおおよそポインタに付いて動く（画面の端と pitch の大きいところでは、角度を画素に
  比例させる近似の分だけずれる）。`T` は付いて動く。
- オービット：`T` のまわりを、yaw に dx × `ORBIT_DEG_PER_PIXEL`、pitch に −dy × `ORBIT_DEG_PER_PIXEL`（`PITCH_LIMIT` で止める）
  回る。向きは three.js の OrbitControls と同じ（`pano_space.js` の `orbitView`）。`T` は動かない。
- パン（Blender の `viewmove_apply` と、Auto Depth のときの `ED_view3d_win_to_delta`）：押したときに、ポインタの下の表面の当たりを
  掴み、その点の視線の軸に沿った深さ `z`（`P` からの距離ではなく、`forward` への射影）を覚える。当たりが無い（空）か `z` が 0 以下
  なら `T` の深さを使う。`z` は `TARGET_MAX_DISTANCE` で頭打ちにする。ドラッグの間、`P` と `T` を一緒に画面の右と上の軸に沿って
  動かし、掴んだ点がポインタの下に留まるようにする。
  - 式：ピンホールの視点では、深さ `z` で画面の右の軸に `X` ずれた点は x = W ÷ 2 × (1 + X ÷ (z × tan(横の画角 ÷ 2))) に写る
    （W は画面の幅の画素）。よって 1 画素は深さ `z` で s = 2 × `z` × tan(横の画角 ÷ 2) ÷ W にあたり、ドラッグの (dx, dy) 画素で
    `P` を右の軸に −dx × s、上の軸に dy × s 動かす。`P` は視線の軸と直交に動くので、ドラッグの間 `z` は変わらない。
  - 世界の境界で止める。
- ジョイスティック：押した点からの縦のずれ（上が前）を速さにし、ボタンを押している間、ポインタを止めていても動き続ける。
  速さは 1 秒に `d` × ずれ ÷ `JOYSTICK_PIXELS`（下へずらすと後ろへ）で、`forward`（pitch を含む）に沿って進む。`T` は付いて動く
  ので、進んでも `d` は変わらない。描画のループが前のフレームからの時間（`FRAME_GAP_LIMIT` まで）だけ動かす。世界の境界で止める。
- WASD / QE：向きと受けないときは今の規則（`docs/editor-interaction.md` の「キーボードの移動」：W / S は水平に倒した向き、
  A / D は水平の右、Q / E は World の下・上、`KeyboardEvent.code`、`stageOwnsKey`）。速さは 1 秒に `d`（Shift で
  `KEY_MOVE_FAST` 倍。Alt は遅くしない：Alt はオービットの近道なので、二つの意味を持たせない。ADR 0048）。時間の数え方はジョイスティックと同じ。`P` と `T` を一緒に動かす。世界の境界で止める。
- GPU の当たりを読むのは、パンを押したとき、ホイールの一段、ダブルクリック、ドロップを離したときだけ。見回し・オービット・
  ジョイスティックの押下、ホバー、ファイルのドラッグ中は読まない。

### なめらかに動く操作

一回で行き先が決まる操作だけを、短く ease-out（`1 − (1 − t)³`）で動かす。位置と `T` は直線で、yaw は最短の向き、pitch は
線形で補間する。

| 操作 | 長さ |
|---|---|
| ホイールの一段 | `WHEEL_EASE_SECONDS` |
| ダブルクリックの向き直し、Frame Selected、Reset View | `ACTION_EASE_SECONDS` |

- ホイール（Blender の、ポインタの位置へのズームと Auto Depth）：一回のホイールの事象が一段（`pano_wheel.js` の `deltaY` の
  符号。奥へ回すと近づく）。ただしピクセル単位で細かく届く事象（トラックパッド。`deltaMode` が 0 で、一回の `|deltaY|` が
  `WHEEL_STEP_PIXELS` より小さいもの）は、同じ向きの `deltaY` を溜め、`WHEEL_STEP_PIXELS` に達するごとに一段にする（向きが変わったら
  溜めた分を捨てる。ADR 0048）。ポインタの下の表面の当たり `G` を中心に、視点を縮尺する：`P' = G + k (P − G)`、`T' = G + k (T − G)`。
  `P` から `G` を通る線の上の点はどれも画面の同じ位置に留まるので、`G` はポインタの下に留まり、`d` も `k` 倍になる。
  - `G` の代わりに `T` を使うとき：当たりが無い（空）、当たりが視点から `TARGET_MAX_DISTANCE` より遠い、当たりが世界の境界の外。
    `G` ＝ `T` のときは、`T` を動かさずに `d` を `k` 倍する Blender のふつうのズームになる。
  - `k`：近づくときは 1 ÷ `WHEEL_FACTOR` 以上 1 以下、離れるときは 1 以上 `WHEEL_FACTOR` 以下で、そのうえ
    `TARGET_MIN_DISTANCE` ÷ `d` 以上 `TARGET_MAX_DISTANCE` ÷ `d` 以下（`d` が範囲に収まる）。この中で `WHEEL_FACTOR` の一段に最も
    近い値にする。範囲の端にいて `k` が 1 になるときは動かず、上の「世界の境界」と同じ一行の知らせを出す。
  - 世界の境界で `P'` が止められたときは、`T` も同じ割合だけ動かす（知らせを出す）。
  - 動いている途中の一段は、今見えている視点から求める（行き先からではない）。`G` は今見えている視点でポインタの下に拾うので、
    縮尺の元の `P`・`T` も同じ視点にそろえる。そこから新しい行き先へ `WHEEL_EASE_SECONDS` で動く。
- 動いている途中で直接の操作をすると、今見えている所で止め、そこから操作が始まる。別のなめらかな操作が来たら、今見えて
  いる所から新しい行き先へ動く。
- 描画のループが動かし、独自のタイマーを持たない。エディタを閉じると止まる。
- Frame Selected：向きを保ったまま、収める球が画面に収まる位置へ動き（`pano_space.js` の `frameView`。距離は `fitDistance`）、
  `T` を球の中心にする（`d` は距離の範囲に寄せる）。球は、選んでいる World の物の外接球（今の `frameSphere`。
  `docs/editor-interaction.md`）、何も選んでいない・Sky の Sticker かペイントのまとまりを選んでいるときは World の内容の全体、Camera を選んでいる
  ときは Camera の位置を中心に半径 `CAMERA_FRAME_RADIUS` の球。World の内容が無く、球が決まらないときは動かさず、「黙って何もしない
  操作」の知らせを出す。

### Frame 表示

この節は撮り方のモードが Frame のときの Camera タブ（Camera から見る）の規則である。Panorama モードの Camera タブは出力の ERP を
平らに開いて見せるだけで、どの操作も何も動かさない（ADR 0048。画面の形は `docs/studio-ui.md` の「Camera タブ」）。Camera タブで
動かすのは Camera だけである（左ボタンのどのドラッグも Camera を動かす）。物は動かさずにクリックで選べる（ギズモは出さない）。選んだ物は
回る中心と Frame Selected にだけ使う（インスペクタには出さない。`docs/studio-ui.md` の「インスペクタ」）。

- 上の表の操作が Camera を動かす。見回しは Camera の向き、パン・ジョイスティック・ホイール・WASD / QE は Camera の位置を変え、
  オービットは回る中心のまわりに Camera を回す。Camera の roll は保ち、roll を変えるのはフレームの下の Roll の目盛りだけ（Alt / Shift + 左ドラッグの
  roll は無い。ADR 0047。目盛りの形は `docs/studio-ui.md` の「Camera タブ」）。
- 量の式は Panorama 表示と同じで、`d` は Camera から Frame 表示の `T` までの距離。ホイールの距離の範囲と `k` の決め方、世界の境界
  も同じに当てる（境界の Camera の項は上の「世界の境界」）。
  - パンの `W` は、ステージの上の Camera の枠の幅の画素。
  - roll した Camera では、パンとオービットのドラッグは roll した画面の軸で受ける（`orbitView`）。見回しも roll した画面の軸で
    受け、絵はおおよそポインタに付いて動く。
  - レンズの Camera（κ ≠ 1）：下の「レンズの Camera の当たり」。
- `T`：Frame 表示の `T` は Camera の画面の中心の線の上にあり、上の「注視点 `T`」と同じ規則で付いて動く。Frame 表示に入ったとき
  は、Camera の位置と向きで求めた「初めの `T`」から始める。回る中心は上の「回る中心」と同じ（Camera タブで物を選んでいれば、オービットを始めたときにその中心を `T` にする。Camera そのものは数えない）。Panorama 表示の `T` は Frame 表示の
  間も変えず、Panorama 表示に戻るとそのまま使う。
- ホイールの一段は、なめらかにせずその場で当てる（Lane に書く値をフレームごとに変えないため）。World の内容が無くても
  同じに動く。
- Frame Selected は Camera を動かす（選んだ物、または World の内容の全体が枠に収まる位置へ、向きを保って）。ホイールと同じ理由で
  なめらかにせずその場で当て、Undo の 1 段にする。Reset View は Camera タブでは無効（`docs/studio-ui.md` の「Camera タブ」）。
- 記録：どの操作も最初の動きで再生を止め、Camera の Lane に記録の規則で書く（`docs/editor-interaction.md` の「Camera の編集」と
  `docs/timeline-ui.md`）。一つのドラッグ、続けて回したホイール（`FRAME_WHEEL_REST_MS` 止まるまで）、押してから全部のキーを離すまでが、それぞれ Undo の 1 段。
  ドラッグの途中のキーとホイールは、そのドラッグの 1 段に入る。
  読み取り専用のエディタとロックした Camera は動かない。
- ダブルクリックで `T` を決め直す操作は Frame 表示には無い。

#### レンズの Camera の当たり

レンズの Camera（κ ≠ 1）の Frame 表示でも、クリックで物を選び、パンとホイールはポインタの下の表面の当たりを使う。

- 当たり：ポインタの画素を、像の中心と `f`（像の中心の縮尺）でフィルムの点にし、レンズの逆の写し方（`lens_angle`）で光線に戻す。
  その光線が通る World の軸にそろえた立方体の面を 90° の正方形のピンホールとし、その面の画素で当たりを求める（`pano_lens.js` の
  `lensPickWindow`。描く像と同じ面。`docs/threejs-spark-integration.md` の「当たり判定」）。求める物はピンホールの Frame 表示と同じ：
  クリックは World の物（下の「ホバーの判定」と同じ CPU の判定を、その面のピンホールで）と Sky の画像（その面のピンホールに写した形）、パンとホイールは上の「表面の当たり」（GPU の当たりと地面の
  近い方）。光線が像の軸から 180° を超える画素（`bg_color` の所）は何にも当たらない。
- パン：掴んだ点の深さ `z` で動かすのは上の式のまま。ポインタの動きは画素の差ではなく、ポインタの光線を同じ縮尺 `f` のピンホールの
  画素に写した点（`f·tan θ`）の差で受ける（`lensPinholePoint`）。向きが変わらないパンでは、深さ `z` の掴んだ点がこれでポインタの下に
  付いて動く。光線が軸から `LENS_PAN_MAX_DEG`（89°）を超える所ではピンホールの点が無いので、その間の動きは受けない。
- ホイール：`G` の向きは `P' = G + k (P - G)` で変わらないので、`G` はポインタの下に残る。
- 量の `W` と H FOV：Frame 表示の視点は、像の中心の縮尺のピンホール（H FOV は `2·atan(W ÷ 2f)`、`frameViewFov`）として量を求める
  （パン、見回し、Frame Selected）。レンズの H FOV は 180° を超えることがあり、そのままではピンホールの式が使えないため。
- 当たりを読むのは押したとき（パンの始まり、クリック）とホイールの一段だけで、ポインタの動きでは読まない（パンの動きは CPU の計算だけ）。
- 見回しは像の中心の縮尺で受ける（像の端では、絵はポインタからずれる）。
- 作らないもの（未実装として残す）：レンズの Camera の上の World の物のガイドと CPU のホバー（ガイドの線を曲がった像に写す描き方が
  要る）。

## カーソル

| 場所と状態 | カーソル |
|---|---|
| ステージの上（既定） | 見回しのカーソル（目の形。使えなければ `grab`） |
| 触れる物の上（ギズモのハンドル、Sky の Sticker の取っ手と本体、ペイントのまとまりの四隅のハンドルと本体（当たりは `docs/studio-ui.md` の「ペイントのまとまり」）、`world` の Sticker、Camera の印（塗った面の中と、線から当たりの幅の中）） | 物のカーソル（今の `hit_test.js` の規則） |
| Alt を押している間（ステージのどこでも、物の上でも） | オービットのカーソル（輪の形。使えなければ `move`） |
| 見回しのドラッグ中 | `grabbing` |
| オービットのドラッグ中 | オービットのカーソル |
| パンのドラッグ中 | `move` |
| ジョイスティックのドラッグ中 | `ns-resize` |

触れる物の判定は下の「ホバーの判定」の CPU の判定（クリックと同じ）で、GPU の当たりを読まない。

## 視点の操作の部品

ステージの右の縦の中央（左の道具の列と左右対称。ADR 0048。置き場所の全体は `docs/studio-ui.md` の「画面の区画」）に、三つのつまみを
縦に並べる。どれもドラッグするつまみで、押すたびに切り替わるボタンではない。つまみの列のすぐ下に、ショートカットの一覧を開く
「?」のボタンを置く（中身は `docs/studio-ui.md`）。

| つまみ | ドラッグの動き | tooltip |
|---|---|---|
| 球 | オービット（キャンバスの Alt + ドラッグと同じ。回る中心も同じ） | 「Drag to orbit · Alt+drag in the view」 |
| 手 | パン（中ボタンのドラッグと同じ。掴む点は画面の中心の表面の当たり） | 「Drag to pan · middle-drag in the view」 |
| 上下の矢印 | 前後のジョイスティック（Alt + 中ボタンと同じ） | 「Drag to move forward/back · Alt+middle-drag」 |

- ポインタを載せるとカーソルは `grab`、ドラッグ中は `grabbing`。
- 操作の最中は、どの手段で動かしていても、その操作に当たるつまみを光らせる（選ばれた状態と同じ灰の強い塗り。色は使わない）：
  オービット（Alt + ドラッグ、球のドラッグ）は球、パン（中ボタン、手のドラッグ）は手、前後（Alt + 中ボタン、矢印のドラッグ、
  WASD / QE の移動）は矢印。見回しには当たるつまみが無いので光らせない。Alt を押している間は、Alt のドラッグに当たるつまみ
  （球と矢印）も光らせる。光らせるのは表示だけで、状態にも Undo にも入らない。
- つまみの上のホイールと右クリックのメニューは、ステージに渡さない。
- つまみの席は 3D タブでも Camera タブでも Preview のウィンドウでも同じで、出たり消えたりしない。操作できないとき（読み取り
  専用の Camera タブ、ロックした Camera、Panorama モードの Camera タブ）は隠さずに無効にする。右下のボタン群と、Camera タブで無効に
  する部品（Reset View・左の道具）は `docs/studio-ui.md` の「画面の区画」と「Camera タブ」が持つ。

## 地面のグリッド

- 地面は y = `ground` の水平の面。グリッドはその面に、地平線まで描く（内容の大きさで間隔を変えない）：
  - 1 単位ごとの線。視点からの水平の距離で `GRID_MINOR_FADE` のあいだに薄れて消える。
  - 10 単位ごとの、より薄い線と、X 軸と Z 軸（ギズモの同じ軸と同じ色。X は珊瑚、Z は氷。値は `docs/design.md`）。`GRID_MAJOR_FADE` のあいだに薄れて消える。
  - 1 画素より細くなる線は、ちらつかないように薄くする。グリッドは深度を書かず、World の物はその上に前後どおり描く。
- 原点に印は描かない。X 軸と Z 軸の線が原点で交わるので原点はそれで分かり、既定の Camera の位置（Camera の印）とも重なるため
  （持ち主の決定、2026-10-30。ADR 0047 の「原点の印」を改める）。「ERP origin」の文字も出さない。原点はパノラマを撮った点で、
  既定の Camera の位置（Camera を動かしていないときの出力の視点）である。
- グリッドは Camera タブ（Frame モードと Panorama モード。Panorama モードでは開いた ERP の上に）にも描く。何も無い空間でも、地面と地平線で Camera の向きと高さが分かるように
  するためである（ADR 0048）。編集の目印なので出力には写らない。
- グリッドのスイッチ（右下のボタン群。`docs/studio-ui.md` の「画面の区画」）はグリッドを隠す。3D タブと Camera タブで同じ一つの設定である
  （World の物のガイドについては下）。
- グリッドの線の色・太さ・濃さの値は `docs/design.md` が持つ。

## World の物のガイド

Panorama 表示で、表示している World の物（`world` の Sticker の板、3D の Sticker（3D ファイル、`port` の 3D の素材、上流の要素））に
輪郭を描く。どこにあるか、どれが触れるかを、選ばなくても分かるようにする。

- 形：3D の Sticker は、回した要素の箱の 12 本の辺（3D の箱）。画像の板は、板の四隅を結ぶ輪郭。
- 置いて読み込んでいる 3D ファイル（`docs/studio-ui.md` の「Add とドロップの見せ方」の「置く間」）は、要素の箱がまだ無いので、代わりの
  箱でガイドを描く：経路が答えるまでは `DROP_PREVIEW_BOX`（ドラッグ中の印と同じ箱）、答えた後は経路の応答の `box`。どちらも
  その Sticker の今の値で回して置く。要素が描けたら、要素の箱に替わる。
- ガイドの中心（ギズモの中心。`docs/studio-ui.md` の「ギズモ」）：3D の Sticker は回した箱の中心、画像の板は板の中心。
- 見え方：いつも薄く、ポインタの下（ホバー）では明るく、選んでいるものは落ち着いた黄。明るい線の下に暗い線を重ね、明るい背景でも
  暗い背景でも見えるようにする（`docs/agents/ux-principles.md` の「見やすさ」）。値は `docs/design.md` に足す（平常は白 32% と
  黒 32%・1px、ホバーは白 90% と黒 60%・1.5px、選択は落ち着いた黄 `#e8cf74`（ドロップの印と同じ色。ADR 0048）と黒 70%・1.5px、暗い線は明るい線より 2px 太い）。
- ガイドを描かないもの：非表示の物、再生ヘッドで Clip range の外の物、`scene` の中身、Camera（Camera は視錐台で示す）。
- ロックした物は、ガイドは描くがホバーで明るくしない（そこでは動かせないため）。
- Hide Grid の間は、選んでいる物のガイドだけを描く。
- Alt を押している間はホバーで明るくしない（上の「マウスとキー」）。
- Camera タブ（Frame 表示）では、選んでいる物のガイドだけを描く（平常とホバーの輪郭は描かない）。物はクリックで選べるが動かせないので、
  選んだことと回る中心が変わったことを見せるためである（画面の側は `docs/studio-ui.md` の「Camera タブ」）。

### ホバーの判定

ホバー（カーソルを決める「触れる物の上か」）とクリックは、ポインタの下の World の物を同じ一つの CPU の判定で決める
（`web_src/studio/stage_objects.js` `objectUnder`、中身は `web_src/studio/hit_test.js` `coarseUnder`）。明るくなった物はクリックで選ばれ、
明るくならない所のクリックは物を選ばない。ポインタが動くたびに GPU の当たりを読まない（読み戻しは同期で、1 回が描画より重いことがある）。

- 3D の Sticker：要素ごとの粗い占有グリッド（要素の箱を各辺 `COARSE_GRID_CELLS`（16）に分け、メッシュの三角形・深度のグリッドの点・
  SPLAT の中心を含むマスを埋めたもの。`web_src/pano_coarse_grid.js`）を、ポインタの光線が進む。最初に入る埋まったマスで当たり、
  その深さで比べる。箱の中の何もない所は当たらず、光線はその奥の物に届く。near より手前の当たりは数えない。
- グリッドがまだ無い 3D の Sticker（読み込み中で代わりの箱のガイドのもの、グリッドを作っている途中のもの）は、画面に写した箱の 8 隅を
  囲む画面の矩形の中なら当たり（箱より少し広い）。深さは箱の中心のもの。
- 板：画面に写した板の輪郭の中にポインタがあれば当たり。深さは板の中心のもの。
- 隅が一つでも視点の後ろ（深さが 0 以下）にある板と、グリッドの無い箱は、当たりに数えない（画面に正しく写らないため）。
- 重なっているときは、上の深さが最も浅いものを選ぶ。
- 判定の対象はガイドを描く物と同じ（非表示・Clip range の外は当たらない）。
- 押したときと、カーソルを決めるときの勝つ順は、ギズモ → Sky のハンドル → World の物 → Camera の印 → Sky の本体 → 空
  （`web_src/studio/stage_objects.js` の冒頭）。
- Camera の印（3D タブ）：画面に写した塗りの面（Frame モードは錐の側面 4 つと奥の枠の面と上の向きの三角、Panorama モードは球の
  輪郭の円）のどれかの中か、印の線から `CAMERA_HIT_PIXELS`（6 CSS px）の中なら当たり。面の中のどこでも当たり、線の上だけではない。
  印を描かないとき（隠している、視点が `CAMERA_GUIDE_LENGTH` より近い）は当たらない。

グリッドを作るとき（`web_src/pano_coarse_grid.js` `createCoarseGridBuilds`、つなぐのは `pano_three_view.js` `buildWorld`・`sceneGrid`）：

- ガイドを持つ 3D の Sticker（3D ファイルの Sticker と、`port` の 3D の素材の Sticker）ごとに、その要素が読み込まれて初めて描かれた
  ときに一度だけ作る（`pano_coarse_grid.js` `coarseGridKey`：Sticker・種類・読み込み元・最初の要素）。毎フレームは作らず、問われた
  とき（ホバー・クリック）にも作らない。できるまではその物は上の箱の判定で当たる。
- 描画を止めないよう、手の空いた時間に少しずつ作る：`requestIdleCallback`（無ければ `setTimeout`）で呼ばれた 1 回につき
  `COARSE_GRID_SLICE_MS`（4 ms）まで進め、残りは次の回に回す。手が空かなくても `COARSE_GRID_IDLE_TIMEOUT_MS`（100 ms）で呼ばれる。
  いくつもの要素は読み込まれた順に作る。
- 形は初めて描かれたときのもの：メッシュの節の位置は、その時（アニメーションのある 3D ファイルは、アニメーションの姿勢を当てる前の
  静止の姿勢）のものを先に控えて使い、作る途中で再生が進んでも変えない。スキンのメッシュは元の頂点（バインドの姿勢）を使う。
- コマごとに要素が変わるもの（`port` の 3D の素材が MoGe の VIDEO などのバッチのとき）は、最初に描かれた要素（1 コマ）のグリッドを
  全部のコマで使い、コマが変わっても作り直さない。`scene` 入力の中身（動画の深度のグリッドなど）はガイドも当たりも無く、グリッドを
  作らない。

## Add とドロップ

ツールバーの Add は一つで、画像も 3D ファイルも選べる（選べるファイルは今の `WORLD_FILE_ACCEPT`：`image/*` と 3D ファイルの 9 つの
拡張子）。「Add to World」は無い。

- ドロップ：ドロップした点を通る光線の着く所（下の「着く所」）が行き先を決め、使う人に Sky か World かを選ばせない（ADR 0045）。
  指した場所が意思を表すためである。
- Add で画像：読み込んだ後、ステージの中央に Sky と World の二択を出し、押したほうに置く（ADR 0048 が ADR 0047 の「Add も画面の中心の
  光線で決める」を置き換える。Add には狙う手段が無く、水平に見ていると画面の中心は空を向くので、光線で決めると黙って Sky になる
  ため）。二択の見せ方と取り消しの条件は `docs/studio-ui.md` の「Add とドロップの見せ方」が持つ。置く場所は、画面の中心の光線を、選んだ行き先として扱って決める：World なら下の
  「着く所」の当たりあり（当たりが無ければ `T` の真下の地面の点 (`T`.x, `ground`, `T`.z) を着く点にする）、Sky なら光線の向きに
  Sky の画像を置く。
- Add で 3D ファイル：いつも World。画面の中心の光線の着く所に置き、当たりが無ければ `T` の真下の地面の点に置く（世界の境界の
  端には置かない。ADR 0048）。

### 着く所

視点 `P` から画面の点を通る光線の、表面の当たり（上の「注視点 `T`」。`world` の画像の板は素通りする）を求める。当たりの点が
世界の境界の外（原点からの距離が `R` を超える）なら、当たり無しとして扱う（遠くへのドロップは Sky に置きたい意思とみる。
ADR 0047）。

| 着く所 | 画像 | 3D ファイル |
|---|---|---|
| 当たりあり | World の板（下の「World の画像」） | その点に置く（下の「3D ファイル」） |
| 当たり無し | Sky の Sticker。光線の向きに、横の画角 `NEW_STICKER_HFOV`（縦は画像の縦横比から。今の Sky の Sticker の規則） | ドロップ：地面の上の、光線の水平の向きで世界の境界の中の最も遠い点に置く（光線が真上か真下なら視点の yaw の向き）。`P` の真下の地面の点が境界の外にあるときは、その向きで境界の中に入る最も近い地面の点。その向きの線が境界の中の地面を通らないときは置かず、上端の中央に「There is no ground to place it on」と知らせる。Add：`T` の真下の地面の点（上） |

- 3D ファイル：着く点を `A` とする。
  - 向き：yaw は視点から `A` を水平に向いた向き（`atan2(x, −z)`。中身の前の glTF の `+Z` が視点の側を向く。`A` が視点の真上か
    真下なら視点の yaw）、pitch と roll は 0、`scale` は 1。
  - 位置：回した箱（経路の応答の `box`）の一番下を `A` の高さに、水平の真ん中を `A` に合わせる。箱が分かるまでは中身の原点を
    `A` に置き（仮の位置）、経路が答えたときに `position` の Lane が仮の位置のままならこの位置にする（待つ間の規則は今の
    「3D ファイルを置く流れ」）。
- World の画像：
  - 大きさは空間の中で固定し、距離で変えない（ADR 0047）。高さ `WORLD_IMAGE_HEIGHT`、幅は縦横比から（`scale` ＝ 幅）。
  - 着く点の真下の地面に立てる：底を `ground` に付け、中心を（着く点の x, `ground` ＋ 高さ ÷ 2, 着く点の z）に置く。浮かせない。
  - 向きは視点の方を水平に向く（yaw だけ。pitch と roll は 0）。
- 置いた物は選んだ状態になる。置くことが Undo の 1 段になる（今の規則のまま）。

### ドラッグ中の印

ファイルをステージの上でドラッグしている間、離したときに着く所を印で見せる。Sky か World かが離す前に分かる（ADR 0048）。

- 形：着く所の輪郭の角にかぎ括弧を置き、内側を薄く塗る。色は行き先で変える：World は落ち着いた黄 `#e8cf74`（選んだ World の物の
  ガイドと同じ色）、Sky は氷 `#aecedb`（選んだ空の画像の枠と同じ色）。塗りはその色の 25%、かぎ括弧の下に暗い線を重ねて明るい背景でも
  見えるようにする。値の owner は `docs/design.md`。破線は使わない。
  - 画像で当たりあり：その点に立つ板の輪郭の 4 つの角（縦横比は離すまで分からないので 1:1 で、高さと位置は上の規則のまま）。
  - 画像で当たり無し：光線の向きの、横の画角 `NEW_STICKER_HFOV` の Sky の枠。枠は球に写すので辺が曲がる。かぎ括弧も平面の L 字では
    なく、写した枠の辺に沿って描く。
  - 3D ファイル：着く点に置いた `DROP_PREVIEW_BOX` の各頂点から、辺に沿って短い線（辺の長さの 25%）。
- ラベル：ポインタの近くに、行き先のラベル（空のアイコン `view-360`＋「Sky」、立方体のアイコン `box`＋「World」）を出す。アイコンと
  縁は印と同じ行き先の色。同じアイコンを、置いた後の下の中央のバーの左端とタイムラインの行のアイコンにも使う（`docs/studio-ui.md`）。
- ラベルの置き場所：印に重ねない。印の画面の上の外接の矩形（塗りとかぎ括弧のすべての点を囲む矩形）から `DROP_LABEL_GAP` 離して、
  右（縦はポインタの高さに中央）、左、下（横はポインタに中央）、上の順に置いてみて、ステージの端から `DROP_LABEL_MARGIN` の内に
  収まる最初の所に置く（ステージの端の近くでは反対の側へ回る）。縦か横のはみ出しは、矩形と重ならない向きにだけ端の内へ寄せる。
  どこにも収まらない（印がステージのほとんどを占める）ときは、ステージの内に寄せたうちで印との重なりが最も小さい所に置く
  （`web_src/studio/landing.js` `dropLabelPlace`）。
- ドラッグの間の当たりは CPU だけで求める：地面と、3D の Sticker の箱（ガイドの箱）。GPU の当たりを読むのは離したときだけで、
  そのときは `scene` の中身も含めて求める。そのため、`scene` の中身の上では印と結果が食い違うことがある（下の「まだ決めて
  いないこと」）。
- 印はエディタだけのもので、状態に入らない。ドラッグがステージを出たとき・離したときに消す。

## Preview のウィンドウ

新しい Preview（`PanoramaPreviewNode`）の大きなウィンドウ（ADR 0044 の新しい外枠）は、IMAGE・VIDEO・`PANO_SCENE` のどれでも、
この文書の視点の規則で見る。読み取り専用である。ノード上の表示はこの文書の範囲に入れない（ADR 0044。`docs/preview-node.md`）。

- 割り当てはエディタと同じ（上の「マウスとキー」の表。Space の再生と Escape は `docs/preview-node.md`）。視点の操作の部品も
  同じ席に置く。
- 無いもの：選択、ガイドとホバーの強調、ドロップ、Add、ギズモ、Frame 表示、Frame Selected。物が無いので、左ドラッグはいつも
  見回しで、カーソルは物のカーソルにならない。
- `T` を決め直すのはダブルクリックと Reset View だけ（Preview には選択が無いので、回る中心はいつも `T`）。
- 開いたとき：ノード上の表示から `P`・`yaw`・`pitch` を引き継ぐ（`docs/preview-node.md` の「大きなウィンドウ」）。画角は
  `DEFAULT_VIEW_HFOV`、`T` は「初めの `T`」で求める。引き継ぐものが無ければ原点、yaw 0、pitch 0。閉じると、ノード上の表示が
  ウィンドウの最後の `P`・`yaw`・`pitch` を引き継ぐ（今と同じ。なめらかに動いている途中や慣性で動いている途中なら、その時の
  行き先の視点）。Preview は Camera を使わない。Reset View は原点、yaw 0、pitch 0 へ動く。
  - `PANO_SCENE`：ノード上の Scene のビューアの視点（位置・yaw・pitch）をそのまま引き継ぎ、閉じると返す。
  - IMAGE・VIDEO：ノード上の表示は見回しだけ（3DoF）なので、yaw・pitch を引き継ぎ、`P` は原点から始める。閉じると yaw・pitch
    だけを返す（ウィンドウで動いた `P` は返さない）。ノード上の画角は変えない。
- 地面の高さ `ground`（グリッドの高さと `E`）：`PANO_SCENE` は、その層の状態から `docs/scene-state-v2.md` の `ground` の規則で読む
  （自分の層は無いので、最も下流で `ground` を持つ層のもの、無ければ `GROUND_DEFAULT`）。IMAGE・VIDEO は `GROUND_DEFAULT`。
- 世界の境界は上と同じ（Camera の項は無い）。
- 手触り：見るための場所なので、エディタと違って減衰と慣性を付ける（ADR 0047）。
  - 減衰：操作は行き先の視点を動かし、表示の視点はそれを追う。追い方は、フレームごとに、行き先との差に
    `PREVIEW_DAMPING` ^ (1000 × dt)（dt はフレームの秒。`FRAME_GAP_LIMIT` の規則で数える）を掛ける（差が半分になるまで約 14 ms）。
    なめらかに動く操作（上の表）は、その長さのまま。
  - 慣性：見回し・オービット・パンのドラッグを離すと、離す直前の速さ（ADR 0010 の時間窓の速さ）で動き続け、今の見回しと
    同じ減り方（`pano_interaction_controller.js` の `PANO_INERTIA_DAMPING`・`PANO_INERTIA_START_SPEED`・`PANO_INERTIA_STOP_SPEED`）で
    止まる。止めて離したときは慣性を付けない。ジョイスティック・ホイール・キーには慣性を付けない。慣性で動いている間に押すと、
    その場で止まる。慣性の動きにも世界の境界を当てる。
  - 慣性の速さの単位：ポインタの速さ（CSS px / 秒）で測り、始めと止めの閾値（角度 / 秒）とは `ORBIT_DEG_PER_PIXEL` を掛けて比べる
    （見回し・オービット・パンで同じ。パンは角度を持たないため、一つの換算にそろえる）。慣性の一フレームは、そのフレームの秒だけ
    その速さでドラッグしたのと同じに動く（パンは離したときに掴んでいた深さのまま）。
  - 慣性は、ほかの視点の操作（押す、ホイール、ダブルクリック、WASD / QE、Reset View）を始めたときにも止まる。慣性で動いている間に
    別の操作が足されることはない。
- 地面のグリッドは、既定で隠す。出すかどうかは見る人が右下のボタン群の決まった席のスイッチ（on / off）で決める
  （押すたびに状態が反転するボタンにしない。`docs/agents/ux-principles.md`）。席は出たり消えたりしない。World の内容の有無で
  自動で出し入れせず、隠している間に絵が変わらない移動をしても知らせない（スイッチがいつも見えているため。ADR 0047）。

## ウィンドウがフォーカスを失ったとき

ウィンドウがフォーカスを失ったとき（`blur`）とページが隠れたとき（`visibilitychange`）は、次を消す。戻って最初の操作を、
きれいな状態から始めるためである。

- 修飾キーの状態（Alt を押していないものとする）。
- 押しているキー（全部を離したものとする。下の「キーを離したものとするとき」）。
- ホバーの状態（ガイドのホバー、ギズモのハンドルの強調、部品のつまみの強調）。
- 進んでいるジェスチャー（ドラッグ、ジョイスティック）は、その時点で離したものとして終える。Frame 表示で Camera を動かして
  いたときは、そこまでを Undo の 1 段にする。

### キーを離したものとするとき

上の二つのほかに、次のときも押している WASD / QE を全部離したものとし、キーの移動はそこで終わる（keyup が届かず、キーが
押されたままになるのを防ぐ）。

- Meta を離したとき：macOS は Meta を押している間に離したキーの keyup を送らない。
- エディタの中で右クリックのメニューが開いたとき：Chromium はメニューが開いている間 keyup を送らない。ステージ自身は
  メニューを出さない（上の「マウスとキー」）が、欄の上などでは開く。

押したままのキーのリピートが、フォーカスの移った入力欄などステージのものでない所に来たときは、そのキーを離したものとする
（入力欄で打つ文字で視点が動かない）。

## まだ決めていないこと（spec ではない、次の候補）

- 次の候補：レンズの Camera（κ ≠ 1）の Frame 表示の World の物のガイドと CPU のホバー（上の「レンズの Camera の当たり」）。今は選んだ物の
  ガイドを描かず、物の上でカーソルが変わらない。
- 次の候補：Camera タブで閉じたときに Camera タブで開き直すこと（視点の記憶は今は 3D タブの視点だけを覚える）。

2026-10-30 に次を決めた（ADR 0048）：`E` の下限（`EYE_HEIGHT_MIN`）、Frame 表示の `T`（上の規則のまま）、水平に開いた視点での Add
（上の「Add とドロップ」）、黙って何もしない操作の知らせ、Alt の二つの意味（WASD の Alt で遅くしない）、トラックパッド
（`WHEEL_STEP_PIXELS`）、ノードが置く 3D の `port` の Sticker（ADR 0046 の「地面の上に収めて置く」のまま。入口が光線を持たないので、
置き場所の規則が二つになることを受け入れる）、Look At Frame（作らない。Camera タブが役目を持つ）、Alt なしのオービット（作らない。
右のつまみの球で足りる）、Camera を Camera の位置以外から見ているときの見た目（`docs/studio-ui.md` の「エディタの中の Camera」）。

残るもの：

- 歩くモード（SuperSplat の Walk のように、床と壁に当たりながら歩く）。
- Claude Desktop から戻った直後の Alt + ドラッグが固まる件（原因は分かっていない。フォーカスを失ったときの処理の不具合を疑い、
  実装のときに調べる）。
- ドラッグ中の印と、離したときの結果の食い違い：`scene` の中身は CPU の印に出ない。SPLAT の箱が離したときの当たりになる（今は受け入れる）。
- グリッドの線の色と濃さ（新しい見た目の値は `docs/design.md`。見本の画面で決める）。
- 3D タブで Camera を回る中心にしたときの遅さ（上の「回る中心」。試作で確かめる）。
- 床の高さを持ち上げた 3D から自動で見つけること（「ここを地面にする」の補助。`docs/studio-ui.md`）。
