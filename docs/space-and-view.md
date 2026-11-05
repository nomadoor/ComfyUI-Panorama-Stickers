# 空間と視点

新しい UI の層（ADR 0044）の、Panorama Studio のエディタと新しい Preview のウィンドウで、使う人が空間の中をどう見て
どう動くかの規則を定める：視点が一つであること、開いたときの視点と Reset View、量の一覧（目の高さ `E` の倍数の上限と、
注視点までの距離から求める操作の量）、世界の境界、注視点 `T`、マウスとキーの割り当て（Panorama 表示と Frame 表示）、
直接の操作となめらかに動く操作、寄る操作（視点の画角）、カーソル、視点の操作の部品、オービットの中心の印、地面のグリッドと空のグリッド、World の物のガイドとホバー、
Add とドロップの着く所、Preview のウィンドウの違い、ウィンドウがフォーカスを失ったとき。用語は `CONTEXT.md` に従う。
決めた理由は ADR 0045（目的と視点）、0046（地面の高さ）、0047（`docs/adr/0047-view-navigation-and-placement.md`。一つの視点の動かし方と、
新しく置く物の行き先）、0058（`docs/adr/0058-orbit-center-mark-and-sky-grid.md`。オービットの中心を見せて決めること、Reset View の行き先、
空のグリッド）、0060（`docs/adr/0060-right-drag-pans-middle-drag-looks.md`。右ドラッグのパンと中ボタンの見回し）、0061（`docs/adr/0061-view-zoom.md`。
寄る操作と Sky だけのときのホイールの知らせ）にある。

Panorama Studio のエディタと新しい Preview のウィンドウは、いつも新しい UI で開く（ADR 0062）。この文書の規則は
その二つのもので、`docs/editor-interaction.md` の「視点の操作」は、旧ノードのエディタと Preview のノード上の Scene のビューア
（`docs/preview-node.md` の「`PANO_SCENE` を見る」）に当てはまる。

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
| 目の高さ `E` と量の一覧 | — | `web_src/studio/view_scale.js`（`WHEEL_STEP_PIXELS` は Preview のノードと共有する `web_src/pano_wheel.js`） | `tests/studio_view_scale.test.mjs`、`tests/pano_wheel.test.mjs` |
| 視点が一つであること、開いたときの視点、Reset View（World の原点へ。ADR 0058）、視点の記憶 | — | `web_src/studio/view_camera.js` `openingView`・`rememberView`・`recallView`・`RESET_VIEW`（Reset View の行き先）、行き先と記憶の画角（`RESET_VIEW` の画角、`rememberView` が今の画角を書き、`recallView` が読む。持つ値の桁は `viewFovValue`）、始めの視点にいるか `atResetView`（Reset View を無効にする。始めの視点は `web_src/space/view.js` `START_VIEW` で `RESET_VIEW` はこれ、比べ方は同じ所の `sameViewpoint`。Preview のノードの Scene のビューアも同じ二つを使う。状態を `ui.atStart` に書くのは `stage.js`）、開くと閉じるは `web_src/studio/editor.js`・`editor_controller.js`、出力の視点は `web_src/studio/stage_view.js` `outputView`、下の部品 `web_src/pano_view_memory.js` `viewMemory`・`restoredView`、`web_src/pano_node_bridge.js` `editorSession` | `tests/studio_view_camera.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/pano_view_memory.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_orbit_center.spec.js`（Reset View）、`tests/browser/studio_editor.spec.js`（画角の記憶と、始めの視点で Reset View が無効になること） |
| 世界の境界と、止まったときの知らせ、黙って何もしない操作の知らせ、Sky だけのときのホイールの知らせ | — | `web_src/studio/view_scale.js` `worldBoundRadius`、`web_src/studio/view_camera.js` `clipToBound`・`createNotice`・`VIEW_NOTICES`（Panorama モードの Alt + ホイールの知らせ `fov-panorama`、Sky だけの知らせ `sky-only`・`sky-only-frame`）、Sky だけの知らせを出すかは `web_src/studio/view_camera.js` `skyOnlyNotice`（`ui.skyOnly` に書くのは `stage.js` `skyWheel`。`source` に何もつないでいない Preview のウィンドウで出さないのは `web_src/studio/preview_window.js` が渡す `skyOnlyNotice`）、一行の知らせを出すのは `web_src/components/studio/StudioNotice.vue` | `tests/studio_view_scale.test.mjs`、`tests/studio_view_camera.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_camera_wired.spec.js`・`tests/browser/preview_window.spec.js`（Sky だけの知らせ） |
| 注視点 `T`（初めの `T`、付いて動くこと、距離の範囲と遠い `T` を範囲に戻すこと、決め直す操作（ダブルクリック、Set orbit center）、回る中心） | — | `web_src/studio/view_camera.js` `initialTarget`・`orbitCenter`・`createViewCamera`、ポインタの下の当たりは `web_src/studio/stage_view.js` `surfaceHit`（GPU の当たりと地面の近い方）、下の部品 `space/view.js` `orbitView`・`viewAxes`・`frameView`、`space/bounds.js` `frameSphere`、`three_view/picker.js` `pick`、`web_src/pano_ray_box.js`。選んだ物（タイムラインで選んだ行の物）の中心は `web_src/studio/stage_content.js` `stickerFrameSphere`、つなぐのは `web_src/studio/editor_content.js` | `tests/studio_view_camera.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/browser/studio_editor.spec.js` |
| マウスとキーの割り当て、直接の操作となめらかに動く操作（Panorama 表示と Frame 表示） | — | `web_src/studio/view_input.js` `navigationAction`・`createViewInput`、ホイールの一段は `web_src/pano_wheel.js` `createWheelSteps`、`web_src/studio/view_camera.js` `createViewCamera`、事象を受けるのは `web_src/studio/stage_input.js`、下の部品 `web_src/pano_view_keys.js` `keyMoveView`・`createMoveKeys`、`web_src/pano_wheel.js` `readWheelDirection`。Frame 表示の視点（`view_camera.js` `createViewCamera` の `frame`）と Camera の Lane への記録はステージ（`stage_frame_view.js`）と `web_src/studio/editor_edits.js`（`web_src/studio/camera_state.js` `moveCameraPose`。下の記録は `pano_editor_state.js` `setCameraShot`）、続けて回したホイールを Undo の 1 段にまとめる待ちは `view_scale.js` `FRAME_WHEEL_REST_MS`。レンズの Camera（κ ≠ 1）のパンとホイールの GPU の当たりと、パンでポインタの動きを写す点は `web_src/studio/stage_view.js` `lensPickView`・`lensPinholePoint`・`frameViewFov`（下の部品 `pano_lens.js` `lensPickWindow`・`lensAngle`）、使うのは `stage_input.js`。クリックで選ぶのは `stage_objects.js` `press`（レンズの Camera では写した像で。下の「World の物のガイドと、CPU のホバーとクリックの判定」の行）。 | `tests/studio_view_input.test.mjs`、`tests/studio_view_camera.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/pano_view_keys.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_camera_wired.spec.js` |
| 寄る操作（Alt + ホイールとピンチで視点の画角を変えること、一段と範囲、右下の画角の数字のドラッグと画角のリセット、Frame 表示で Camera の H FOV を変えること） | — | ホイールの意味（前へ進むか寄るか）は `web_src/pano_wheel.js` `wheelMeaning`、溜めた分を捨てる時は `pano_wheel.js` `createWheelSteps`（Preview のノードの上も同じ関数）、視点の画角を持つのは `web_src/studio/view_camera.js` `createViewCamera`（`zoom`・`setFov`。値の桁は `viewFovValue` で、なめらかに動いている途中を直接の操作が止めたときも丸める）、描く画角は `web_src/studio/stage_view.js` `stageCamera`、事象を受けるのは `web_src/studio/stage_input.js`（`zoom`）、Preview のウィンドウで減衰で追わないのは `web_src/studio/preview_motion.js`。一段の値とドラッグの縮尺は、FOV の目盛りと共有する `web_src/pano_camera_math.js` `VIEW_FOV_STEP_DEG`（2°）・`VIEW_FOV_DRAG_PX_PER_DEG`（4 px で 1°）と一段を求める `fovStepValue`（向き・範囲・値の桁・Shift の細かさを受け取る）、寄る操作の向き（奥へ回すと小さく）は `fovZoomStep` で、視点・Frame 表示の Camera・Preview のノード（Scene のビューアと IMAGE・VIDEO）の寄る操作がどれもこれを呼ぶ。`CAMERA_RULERS.fov` はこの二つを読む。目盛りの矢印キーはどの目盛りも `pano_camera_math.js` `stepWithin` で小さい目盛り一つ動き（`StudioEdgeRuler.vue`）、FOV の目盛りの小さい目盛りは `VIEW_FOV_STEP_DEG` なので `fovStepValue`（同じ `stepWithin` を呼ぶ）と同じ値になる。右下の数字の Shift + 矢印キーの一段は `VIEW_FOV_FINE_STEP_DEG`（`view_camera.js` `viewFovKeyStep`）、ドラッグの式は `frame_layout.js` `rulerDragValue`（縮尺は `CAMERA_RULERS.fov.unitPx`）、範囲は `web_src/pano_camera_math.js` `VIEW_HFOV_MIN_DEG`・`VIEW_HFOV_MAX_DEG`。右下の画角の数字のドラッグと矢印キーは `web_src/components/studio/StudioFovNumber.vue`（Alt を押している間の見た目は `lit`。光る規則は `web_src/studio/view_input.js` `fovNumberLit`、`stage.js` が `ui.fovNumberLit` に書き、`StudioEditor.vue`・`StudioPreviewWindow.vue` が `StudioViewButtons.vue` に渡す）、画角のリセットとともに視点に当てるのは `stage.js` `setFov`・`resetFov`。Frame 表示の Camera の H FOV は目盛りと同じ道で書く（`frame_layout.js` `rulerEdit` を `web_src/studio/editor_edits.js` の `cameraTab.fov` が `session.js` `applyInspector` に渡す）。続けて回した分を Undo の 1 段にまとめ、ドラッグとキーの移動の間は何もしないのは `web_src/studio/stage_frame_view.js` `zoomFrame`（段を閉じるのは `commitFrame`・`cancelFrame`）、Panorama モードの知らせは `stage_input.js` `zoom` | `tests/pano_camera_math.test.mjs`（`fovStepValue`）、`tests/studio_frame_layout.test.mjs`（`CAMERA_RULERS.fov` が同じ値を読むこと）、`tests/studio_view_input.test.mjs`、`tests/studio_view_camera.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/studio_preview_motion.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_camera_wired.spec.js`（Frame 表示の Alt + ホイール）、`tests/browser/preview_window.spec.js` |
| カーソル | — | `web_src/studio/view_input.js` `stageCursor`・`LOOK_CURSOR`・`ORBIT_CURSOR`・`KNOB_CURSOR` | `tests/studio_view_input.test.mjs` |
| 視点の操作の部品（球・四方向の矢印・道の矢印、操作中に光ること、Set orbit center のボタンとその待ち） | — | `web_src/components/studio/StudioNavWidget.vue`、光る規則は `web_src/studio/view_input.js` `knobAction`・`litKnobs`、待ちとステージのクリックは `web_src/studio/stage.js`（`pickCenter`・`toolbarHover`）と `stage_input.js`、待ちの一行は `web_src/studio/notice_line.js` `topLine` | `tests/studio_view_input.test.mjs`、`tests/studio_notice_line.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_orbit_center.spec.js` |
| オービットの中心の印（出すとき、置く点、消え方、描く箱） | — | 出すとき・強さ・置く点・描く箱は `web_src/studio/orbit_marker.js` `orbitMarkerAlpha`・`orbitMarkPoint`・`markOnView`（長さは `view_scale.js`）、状態を集めるのは `web_src/studio/stage.js` `orbitMark`（印だけが変わるフレームは重ね描きだけを描く）、描くのは `web_src/studio/stage_overlay.js` | `tests/studio_orbit_marker.test.mjs`、`tests/studio_stage.test.mjs`（重ね描きだけのフレーム）、`tests/browser/studio_orbit_center.spec.js` |
| 地面のグリッド（何をどの高さに描き、どこで薄れるか）と空のグリッド（何をどの角度に描き、どこで薄れるか、どちらの半球か） | — | `web_src/studio/grid.js` `groundGrid`・`skyGrid`（量は `view_scale.js`）、描く部品は `web_src/pano_ground_grid.js` と `web_src/pano_sky_grid.js`（`docs/threejs-spark-integration.md`）、スイッチは `web_src/components/studio/StudioViewButtons.vue` | `tests/studio_stage_view.test.mjs`、`tests/output_picture.test.mjs`（Panorama モードの目と前方、出力の絵に描かないこと）、`tests/browser/studio_editor.spec.js`、`tests/browser/ground_grid.spec.js`、`tests/browser/studio_sky_grid.spec.js` |
| World の物のガイドと、CPU のホバーとクリックの判定 | — | `web_src/studio/world_guides.js`（形・中心・箱の判定・見え方。読み込み中のガイドの箱は `web_src/studio/load_reveal.js` が渡す）、Camera の印の形と当たりは `web_src/studio/camera_marker.js`、3D の Sticker の粗い占有グリッドとその光線は `web_src/pano_coarse_grid.js`・`web_src/studio/hit_test.js`、ステージにつなぐのは `web_src/studio/stage_objects.js`、描くのは `web_src/studio/stage_overlay.js`、下の部品 `space/camera.js` `projectPoint`、`space/bounds.js` `boxCorners`。Camera タブ（Frame 表示）では `stage.js` が Frame 表示の枠の箱で描く（`stage_overlay.js` の `origin`）。レンズの Camera（κ ≠ 1）では、`stage.js` が像を持たせた camera（`pano_lens.js` `withLensImage`。κ を丸めて 1 なら持たせない：`stage_view.js` `cameraFrameHit`）を渡し、3D の点の写し方は `pano_lens.js` `lensProjectPoint`、ポインタの光線は `lensStageRay`、線を分けて写すのは `lensPolylines`（`world_guides.js` `screenLines`）。`projectPoint`・`pano_editor_view.js` `viewProjection`・`hit_test.js` `cameraRay` はその camera のときこれらを通る（「レンズの Camera の当たり」） | `tests/studio_world_guides.test.mjs`、`tests/studio_camera_marker.test.mjs`、`tests/studio_stage_objects.test.mjs`、`tests/studio_hit_test.test.mjs`、`tests/pano_lens.test.mjs`、`tests/browser/studio_select.spec.js`、`tests/browser/studio_hit.spec.js`、`tests/browser/studio_camera_wired.spec.js`、`tests/browser/studio_camera_select.spec.js` |
| Add とドロップの着く所（Add の画像の二択の後の置き場所を含む）と、ドラッグ中の印の形 | — | `web_src/studio/landing.js`（着く所 `landingHit`・`landingBoxes`・`groundLanding`・`groundBelow`、置く値 `skyPose`・`worldImageTransform`・`file3dTransform`・`file3dPosition`・`facingYaw`、印 `dropMarker`、ラベルの置き場所 `dropLabelPlace`）、置くのは `web_src/studio/add_files.js`、下の部品 `three_view/picker.js` `pick`（板を除く当たり）、CPU の箱の当たりは `web_src/studio/view_camera.js` `boxDepth`、`pano_sticker_geometry.js` `buildStickerGeometry`（Sky の枠） | `tests/studio_landing.test.mjs`、`tests/studio_add_files.test.mjs`、`tests/browser/studio_add.spec.js` |
| Preview のウィンドウの視点（エディタとの違い、引き継ぎ、地面の高さ、減衰と慣性、グリッドの既定） | — | 減衰と慣性は `web_src/studio/preview_motion.js` `createPreviewMotion`（ステージの `follow`、`web_src/studio/stage.js`）、引き継ぎと地面の高さは `preview_motion.js` `previewOpening`・`previewOpeningPose`・`previewHandBack`・`previewGround`（画角も引き継ぐ。持つ値の桁は `view_camera.js` `viewFovValue`）（地面の規則は `pano_scene_state.js` `sceneGround`）、つなぐのは `web_src/studio/preview_window.js`、慣性の減り方の値は `web_src/pano_interaction_controller.js`（ADR 0010） | `tests/studio_preview_motion.test.mjs`、`tests/browser/preview_window.spec.js` |
| ウィンドウがフォーカスを失ったとき、Meta を離したときと右クリックのメニューが開いたときにキーを離すこと。Alt だけの押し離しでブラウザのメニューに移らないこと | — | `web_src/studio/view_input.js` `createViewInput().lostFocus`、事象を受けるのは `web_src/studio/stage_input.js`（`blur`・`visibilitychange`・Meta の `keyup`・エディタの中の `contextmenu`、Alt だけの既定の動きを止めるのは `holdBareAlt`）、下の部品 `pano_view_keys.js` `createMoveKeys` | `tests/studio_view_input.test.mjs`、`tests/pano_view_keys.test.mjs`、`tests/browser/studio_editor.spec.js`（`blur`・右クリックのメニュー）、`tests/studio_stage.test.mjs`（Meta・右クリックのメニュー・Alt だけの押し離し） |

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
| `GRID_MAJOR_FADE` | `E` | 16 `E` → 30 `E`（25.6 → 48） | 10 単位の線が薄れ始める距離と消える距離。X 軸と Z 軸は薄れない（下の「地面のグリッド」） |
| `SKY_GRID_STEP_DEG` | 絶対 | 30° | 空のグリッドの経線と緯線の間隔（下の「空のグリッド」） |
| `SKY_LINE_FADE_DEG` | 絶対 | 35° → 72° | 空のグリッドの経線と緯線（軸の経線を除く）が薄れ始める高さと消える高さ（地平線からの角度。極へ向けて薄れる） |
| `SKY_AXIS_RISE_DEG` | 絶対 | 4° → 40° | 空の軸の経線が現れ始める高さと最も濃くなる高さ（地平線からの角度。これより地平線に近いと薄れ、4° より近くでは描かない） |
| `SKY_POLE_NEAR_DEG` | 絶対 | 25° → 8° | 極の点が現れ始める、視線と極の間の角度と、最も濃くなる角度 |
| `SKY_POLE_DOT_DEG` | 絶対 | 0.45° | 極の点の半径（角度） |
| `ORBIT_MARK_HOLD_SECONDS` | 絶対 | 0.6 秒 | ダブルクリックと Set orbit center で `T` を決めた後、オービットの中心の印をそのまま出しておく長さ（下の「オービットの中心の印」） |
| `ORBIT_MARK_FADE_SECONDS` | 絶対 | 0.5 秒 | その後、印が消えるまでの長さ（線形に薄れる） |
| `JOYSTICK_PIXELS` | `d`（絶対の px） | 100 px | 前後のジョイスティックで、1 秒に `d` 進むずれ |
| `WHEEL_FACTOR` | `d`（絶対の比） | 1.2 | ホイールの一段の縮尺（Blender の一段と同じ） |
| `PITCH_LIMIT` | 絶対 | 89.9° | 視点の pitch の上限と下限（±）。値は古いエディタとノード上の視点と共通で、`web_src/pano_camera_math.js` `VIEW_PITCH_LIMIT_DEG` が持つ |
| `ORBIT_DEG_PER_PIXEL` | 絶対 | 0.3° | オービットの 1 CSS px あたりの角度（yaw と pitch で同じ） |
| `WHEEL_EASE_SECONDS` | 絶対 | 0.4 秒 | ホイールの一段の動きの長さ |
| `ACTION_EASE_SECONDS` | 絶対 | 0.4 秒 | ダブルクリックの向き直し・Frame Selected・Reset View の動きの長さ |
| `FRAME_GAP_LIMIT` | 絶対 | 0.1 秒 | 続けて動く操作（ジョイスティック、WASD / QE、Preview の減衰と慣性）が一つのフレームに数える時間の上限。前のフレームからの時間がこれ以上なら（タブが止まっていた、など）、`FRAME_FALLBACK_SECONDS` として数える |
| `FRAME_FALLBACK_SECONDS` | 絶対 | 1/60 秒 | 上のときに数える時間 |
| `BOUND_NOTICE_SECONDS` | 絶対 | 2 秒 | 止まったときの知らせと、黙って何もしない操作の知らせ（下の「黙って何もしない操作」）を出しておく長さ（最後に出したときから） |
| `WHEEL_STEP_PIXELS`（`web_src/pano_wheel.js`） | 絶対 | 100 px（仮。試作で詰める） | ピクセル単位の細かいホイールの事象（トラックパッド）を溜めて一段にする量（下の「ホイール」） |
| `FRAME_WHEEL_REST_MS` | 絶対 | 180 ms（旧 UI の Frame 表示と同じ） | Frame 表示で続けて回したホイールを Undo の 1 段にまとめる待ち。最後の一段からこの時間ホイールが止まったら 1 段にする（下の「Frame 表示」の「記録」） |
| `DROP_PREVIEW_BOX` | 絶対 | 横 1・高さ 1・奥 1（World の単位）、底の中央が原点 | 箱の大きさが分かる前の 3D ファイルの印と、経路が答える前の読み込み中のガイド |
| `PREVIEW_DAMPING` | 絶対 | 0.95 | Preview のウィンドウの減衰（下の「Preview のウィンドウ」） |

ほかの spec と code が持つ値で、ここでは参照するだけのもの：

| 名前 | 値 | 持ち主 |
|---|---|---|
| `DEFAULT_VIEW_HFOV`（参照） | 100° | `space/fit.js`、`docs/editor-interaction.md`。Panorama 表示と Preview の視点の横の画角の既定（開いたとき、Reset View と画角のリセットの行き先）。寄る操作で変わる（下の「寄る」） |
| `VIEW_HFOV_MIN_DEG`・`VIEW_HFOV_MAX_DEG`（参照） | 35°・140° | `web_src/pano_camera_math.js`。視点の画角の範囲（下の「寄る」。古い UI の視点と同じ値） |
| `VIEW_FOV_STEP_DEG`・`VIEW_FOV_DRAG_PX_PER_DEG`（参照） | `docs/design.md` の「Camera タブの辺の目盛りの縮尺」 | 置き場所は `web_src/pano_camera_math.js`。右下の画角の数字の Shift + 矢印キーの一段 `VIEW_FOV_FINE_STEP_DEG`（1°。視点の画角が持つ最小の桁）も同じ所。FOV の目盛り、寄る操作の一段、画角の数字のドラッグと矢印キー、Preview のノードの上の寄る操作が同じ値を読み、一段は `fovStepValue` で求める（下の「寄る」） |
| `KEY_MOVE_FAST` | 4 | `pano_view_keys.js`。WASD / QE の速さに Shift で掛ける数。Alt では遅くしない（下の「直接の操作」の WASD / QE。ADR 0048） |
| `NEW_STICKER_HFOV`（参照） | 30° | `space/placement.js`。新しい Sky の Sticker の横の画角 |
| `CAMERA_HIT_PIXELS` | 6 px | `web_src/studio/camera_marker.js`。Camera の印の線の当たりの幅（下の「ホバーの判定」） |
| `COARSE_GRID_CELLS` | 16 | `web_src/pano_coarse_grid.js`。3D の Sticker の当たりの粗い占有グリッドの、各辺のマスの数（下の「ホバーの判定」） |
| `COARSE_GRID_SLICE_MS` | 4 ms | `web_src/pano_coarse_grid.js`。そのグリッドを手の空いた時間に作るとき、1 回に使う時間の上限 |
| `COARSE_GRID_IDLE_TIMEOUT_MS` | 100 ms | `web_src/pano_coarse_grid.js`。手が空かなくても、グリッドを作る次の 1 回が呼ばれるまでの最長の待ち |

視点の roll はいつも 0。Panorama 表示と Preview の画角は視点の画角（下の「寄る」）、Frame 表示の画角は Camera の H FOV である。

## 視点は一つ

- Panorama Studio のエディタにも Preview のウィンドウにも、3DoF | 6DoF の切り替えは無い（ADR 0045）。視点はいつも空間を
  自由に動ける。Sky だけの場面（World の内容が無い）、IMAGE・VIDEO を見る Preview も同じ操作で動き、モードを内容で
  切り替えない。ホイールの意味も、内容でもポインタの下の物でも変えない（ADR 0061）。前に進んでも絵が変わらない場面で、
  そのことを知らせるのはホイールだけで、動いたうえで寄る操作を一行で知らせる（下の「Sky だけのときのホイール」。ADR 0061）。
  パン・ジョイスティック・WASD / QE では知らせない（エディタでは地面のグリッドが動いて見える。Preview でグリッドを隠している
  ときも知らせない。ADR 0047）。
- Sky・背景・ペイントは無限遠にあるので、どこに立っていても同じ方向に見え、方向で触れる（`docs/threejs-spark-integration.md`
  の「空間の表示」）。
- 視点は、位置 `P`（World の glTF の座標）、向き（`yaw`・`pitch`。軸は `pano_space.js` の `viewAxes`。前方を `forward` と書く）、
  横の画角（下の「寄る」）と、注視点 `T`（下の「注視点 `T`」）を持つ。
- Panorama 表示で視点を動かしても、状態にも Undo にも入らず、再生も止めない。Frame 表示では視点が Camera そのもので、
  動かすと Camera の Lane に入る（下の「Frame 表示」）。
- Camera はいつも一台あり、消せない（ADR 0048。`docs/studio-node.md` の「Panorama Studio」）。Camera のボタンでカメラを今の視点へ
  持ってくる・隠す・Undo しても、視点は動かさない（ADR 0045）。視点の画角と Camera の H FOV は、どちら向きにも合わせない：
  Camera のボタンが持ってくるのは視点の位置と向きだけで（`docs/studio-ui.md` の「エディタの中の Camera」）、Camera の H FOV を
  変えても視点の画角は変わらない（ADR 0061）。
- ComfyUI の設定「3D view controls」（`PanoramaSuite.Editor.ViewControls`）のプリセットは、新しい UI では読まない。切り替えで、
  Panorama Studio と Preview はこの設定を使わなくなる。

### 開いたときの視点と Reset View

- 開いたとき：同じページで同じノードの視点を覚えていればそこから（下の「視点の記憶」）。無ければ出力の視点から始める：
  再生ヘッドでの Camera の位置と yaw（Camera はいつもあり、隠していても撮る。ADR 0048。既定の Camera は World の原点と yaw 0）。
  pitch はどちらも 0（水平。ADR 0046）。画角は `DEFAULT_VIEW_HFOV`（Camera の H FOV は使わない）。`T` は下の「初めの `T`」。
- Reset View：いつも World の原点・水平（pitch 0）・yaw 0・画角 `DEFAULT_VIEW_HFOV` へ、`ACTION_EASE_SECONDS` で動く（持ち主の決定、
  2026-11-03。ADR 0058。画角は ADR 0061）。画角は位置と向きと同じ動きの中で線形に補間する。
  Camera の位置ではない（開いたときの出力の視点とも、覚えた視点とも違うことがある）。原点はパノラマを撮った点で、Camera をどこへ
  動かしても同じ所へ戻れる。`T` は行き先の視点で求めた「初めの `T`」になる。Frame 表示では使えない（ボタンは隠さずに無効）。
  開いたときの視点は上のまま（出力の視点）。
  - 始めの視点：位置・yaw・pitch・画角がすべて Reset View の行き先と同じ（数の誤差は数えない。yaw は 360° の回りを同じとみる）
    間は、ボタンを隠さずに無効にする（tooltip は `docs/studio-ui.md` の「画面の区画」）。なめらかに動いている途中と、Preview の
    減衰で追っている途中は、行き先の視点で比べる。`T` は比べない。
- 視点の記憶：エディタを閉じたときの表示（Panorama・Frame）、`P`・`yaw`・`pitch`・画角・`d` をノードごとに覚え、同じページで
  開き直すとそこから始まる（`T` は前方 `d` の点。置き場所と消える時は今の `editorSession(node).view` のまま）。なめらかに
  動いている途中で閉じたときは、行き先を覚える。覚えた値が使えないとき（数でない、画角が範囲の外、Frame 表示が使えない）は、
  全部を出力の視点で開く。ページを読み込み直すと消え（画角は `DEFAULT_VIEW_HFOV` に戻る）、状態にもワークフローにも保存しない。

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
| 空（何にも当たらない所、または世界の境界の外の当たり）へのダブルクリックと、Set orbit center の待ちのクリック | 「Nothing to focus on」 |
| World の内容も選んだ物も無いときの Frame Selected | 「Nothing to frame」 |
| Camera タブの Panorama モードでの Alt + ホイールとピンチ | 「Not available in Panorama mode」（Panorama モードではどの操作も黙って何も動かさないが、Alt + ホイールは画角を変える操作として一覧で教えているので、効かないことを知らせる。ADR 0061） |

### Sky だけのときのホイール

World の内容が無い（Frame Selected が World の内容の全体に使う球が無い）ときに、Alt なしのホイール（トラックパッドの二本指でなぞるのを
含む）の一段が実際に視点（Frame 表示では Camera）を動かしたら、今までどおり動かしたうえで、ステージの上端の中央の一行の知らせに次の文を出し、最後の一段から `BOUND_NOTICE_SECONDS`
で消す（ADR 0061）。前に進んでも Sky・背景・ペイントは大きくならないので、寄る操作（下の「寄る」）の在りかをその場で示す。印は
「知らせるだけ」（`docs/studio-ui.md` の「一行の知らせの種類」）。

| 場所 | 知らせ |
|---|---|
| 3D タブ、Preview のウィンドウ | 「Sky only · Alt+wheel zooms」 |
| Camera タブの Frame 表示 | 「Sky only · Alt+wheel changes the FOV」 |

- その一段が世界の境界か距離の範囲で止まったときは、止まったときの知らせ（上の「世界の境界」）を出す。何も動かなかった一段
  （ロックした Camera、読み取り専用のエディタ、ドラッグ中などで受けなかった一段）では出さない。
- Camera タブの Panorama モード（ホイールで何も動かない）と、`source` に何もつないでいない Preview のウィンドウ（寄って見る物が無い）
  では出さない。
- Preview のノードの上には出さない（ノードの上の UI は足さない。持ち主の決定、2026-11-05。ADR 0061）。

## 注視点 `T`

視点が持ち続ける一つの点で、オービットの中心になる。SuperSplat の焦点、Blender のビューの中心と同じ考え。ふだん画面に印は
出さず、使う人が中心を気にするときだけ出す（下の「オービットの中心の印」。ADR 0058）。

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
    WASD / QE が、`T` を画面の中心の線の上の距離 `d` の点に戻す（そのとき `T` は World の中で跳ぶ。印を出していれば、印も新しい `T` へ移る）。
    `T` が外れたまま空でホイールを回すと、外れた `T` を中心に縮尺するので、絵がずれて動く。
- 距離の範囲：`d` は `TARGET_MIN_DISTANCE` 以上 `TARGET_MAX_DISTANCE` 以下にする。範囲の外の点を `T` にするときは、
  `P` からその点への線の上で範囲に寄せる（初めの `T`、Frame Selected、付いて動くときの置き直し）。
  - 例外は、使う人が点を指した `T`：ダブルクリックと Set orbit center の当たり、オービットを始めるときの回る中心（選んだ物の中心、
    Camera の位置）。これらは指した点そのものを `T` にし、`TARGET_MIN_DISTANCE` の下限だけを当てる（`P` と同じ点なら `forward` へ
    `TARGET_MIN_DISTANCE` の点）。遠い地面を指しても `T` は宙に浮かず、指した所のまわりを回る（ADR 0058）。
  - 範囲の外にある `T` は、オービットではそのまま使う。ホイール・ジョイスティック・WASD / QE は、動かす前に `T` を `P` から `T` への
    同じ線の上で範囲に戻し、戻した `T` で量を求める（`T` は画面の同じ位置に残り、近づくだけ）。戻すのと動かすのは同じ一段（ホイール）・
    同じフレーム（ジョイスティック、WASD / QE）の中で行い、戻しただけの段やフレームは作らない。これらの量は `d` に比例するので、
    遠い `T` のまま求めると一度に何十の単位も跳ぶためである。見回し・パンは今までどおり `T` を範囲の中に置き直す（上の「付いて動く」）。
    パンの深さの頭打ちは下の「直接の操作」のまま。
- 黙って探し直さない：押したとき・ホイールのたびに、`T` を求め直すことはしない（求め直すと、回る量と動く量が毎回変わる）。
  `T` が変わるのは、上の「付いて動く」とホイールと、次の操作だけである。
  - ダブルクリック（Panorama 表示と Preview。Alt を押していても同じ。Camera タブの Frame 表示は下の「Camera タブ」）：ポインタの下の当たりを GPU で求める。表面の当たりと違い、`world` の画像の板にも
    当てる（唯一の例外。見えている物に焦点を合わせる操作なので、見えている板も数える）。その点をそのまま `T` にして（上の「距離の範囲」の例外）、視点を `T` が画面の中心に来る向きへ `ACTION_EASE_SECONDS` で
    向ける（位置は動かさない）。当たりが無い（空）とき、または当たりが世界の境界の外のときは動かさず、上の「黙って何もしない操作」の知らせを出す
    （境界の外の当たりはホイールと同じく空として扱う）。`T` を決めると、オービットの中心の印をその点に出して消す（下の「オービットの中心の印」）。
    ペイントの道具（Paint・Mask）を選んでいる間は、ダブルクリックは何もしない（ストロークのための押下を奪わないため）。
  - Set orbit center（右の視点の操作の部品のボタン。下の「視点の操作の部品」）：待っている間の左クリックが、ダブルクリックと同じことをする。
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
| 右ドラッグ（どこでも） | パン。物の上でも選ばず、編集しない（ADR 0060） |
| 中ボタンのドラッグ（どこでも） | 見回し。物の上でも選ばず、編集しない（ADR 0060） |
| Alt + 左ドラッグ、Alt + 中ボタンのドラッグ（どこでも、物やギズモの上でも） | `T`（回る中心）のまわりのオービット（ADR 0060） |
| Alt + 右ドラッグ（どこでも、物やギズモの上でも） | 前後のジョイスティック（ADR 0060） |
| ホイール、トラックパッドの二本指でなぞる | ポインタの下の点へ近づく・離れる一段（前へ進む） |
| Alt + ホイール、トラックパッドのピンチ | 寄る：視点の画角を変える一段（下の「寄る」。Frame 表示では Camera の H FOV。下の「Frame 表示」） |
| W / S・A / D・Q / E のキー | 前後・左右・下上（近道。同じことはマウスでもできる） |
| ダブルクリック（Panorama 表示と Camera タブの Frame 表示。Alt を押していても同じ） | そこを `T` にして向く（上の「注視点 `T`」。Frame 表示は Camera が向く。下の「Frame 表示」） |

- 物に触るのは Alt なしの左ボタンだけ。物の上の左ボタンは選択と編集（`docs/studio-ui.md`）。動かさずに離した何もないところの左クリックは、今と同じく選択を外す。
- Alt を押している間は、物とギズモのホバーの強調をしない（押した瞬間に今の強調も消す）。Alt + ドラッグは必ず視点の
  操作（オービットか前後）なので、強調は誤った合図になる。
- ステージは右クリックのメニューを出さない（右ドラッグを使うため。キャンバスに右クリックだけの操作は無い）。
- 表に無いボタンと修飾キーの組み合わせは何もしない。Ctrl・Meta との組み合わせは範囲選択とブラウザに残す。ただし Ctrl + ホイールは
  寄る操作にする：トラックパッドのピンチはブラウザに Ctrl + ホイールとして届き、マウスの Ctrl + ホイールと見分けられないため
  （ADR 0061）。ステージの上ではブラウザのページの拡大にしない。一覧と tooltip には Ctrl + ホイールを出さない（ピンチと書く）。

### 直接の操作

ドラッグ・ジョイスティック・キーは、ポインタとキーに 1 対 1 で、その場で当たる。エディタでは遅れ（追従）も慣性も付けない
（ADR 0047）。ドラッグの動きを 0.2 秒かけて追う追従（SuperSplat の `TweenValue` と同じ quintic の ease-out）は 2026-11-03 の試作で
もう一度試し、持ち主が「ラグい」として捨てた（ADR 0058）。

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
- WASD / QE：キーを押している間、視点（Camera タブでは Camera）が動く。ドラッグの途中でも使え、キーはドラッグの動きを変えない。
  - 向き：W / S は視点の向きを水平面に倒した向き（y = 0）に前後、A / D は水平の右の軸に沿って左右、Q / E は World の下・上（glTF の +Y）。
    真下を向いていても前に進む。2 つのキーを同時に押しても、1 つのときと同じ速さで斜めに進む。キーは物理的な位置（`KeyboardEvent.code`）で
    受けるので、他の配列のキーボードと macOS の Option でも同じ位置のキーになる（`pano_view_keys.js` の `keyMoveView`・`createMoveKeys`）。
  - 受けないとき：文字や数を入力している欄、確認のダイアログが出ているとき、エディタの外にフォーカスがあるときは受けない（`pano_key_focus.js` の
    `stageOwnsKey`）。ステージがキーを受けるときは WASD / QE を ComfyUI とブラウザに渡さない（`preventDefault`・`stopPropagation`。
    ComfyUI の W はワークフロー、A はアセットのサイドバーをエディタの裏で開くため）。Ctrl・Meta との組み合わせは渡す。
  - 止める：ウィンドウがフォーカスを失ったとき、ページが隠れたとき（`visibilitychange`）、Meta を離したとき（macOS は Meta を押している間に
    離したキーの keyup を送らない）、右クリックのメニューが開いたときは、全部のキーを離したものとする。押したままのキーのリピートが
    ステージのものでない所（入力欄など）に来たときは、そのキーを離したものとする（`web_src/studio/stage_input.js`・`view_input.js`）。
  - 速さは 1 秒に `d`（Shift で `KEY_MOVE_FAST` 倍。Alt は遅くしない：Alt はオービットの近道なので、二つの意味を持たせない。ADR 0048）。時間の数え方はジョイスティックと同じ。`P` と `T` を一緒に動かす。世界の境界で止める。
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
  - 一段の前に、`T` が距離の範囲の外にあれば範囲に戻してから（上の「注視点 `T`」の「距離の範囲」）、`d` と `k` を求める。
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
  `T` を球の中心にする（`d` は距離の範囲に寄せる）。球は、選んでいる World の物の外接球（`frameSphere`。
  `docs/editor-interaction.md` の「視点の操作」の「Frame Selected の外接球」）、何も選んでいない・Sky の Sticker かペイントのまとまりを選んでいるときは World の内容の全体、Camera を選んでいる
  ときは Camera の位置を中心に半径 `CAMERA_FRAME_RADIUS` の球。World の内容が無く、球が決まらないときは動かさず、「黙って何もしない
  操作」の知らせを出す。

### 寄る

視点の画角（横の画角）を変える操作（ADR 0061）。Sky・背景・ペイント・Preview の画像と動画は無限遠にあり、前に進んでも大きく
ならないので、画角で寄る。3D タブと Preview のウィンドウで同じに働く。Frame 表示は下の「Frame 表示」（Camera の H FOV を変える）。

- 入口：Alt + ホイール、トラックパッドのピンチ（Ctrl + ホイール。上の「マウスとキー」）。Alt + 二本指でなぞるのも同じ。右下の画角の
  数字のドラッグと、その隣の画角のリセット（置き場所と見た目は `docs/studio-ui.md` の「画面の区画」）。
- 中心：いつも画面の真ん中。`P`・`yaw`・`pitch`・`T` は変えない。ポインタの位置は使わない。
- 一段：FOV の目盛りの矢印キー（Shift なし）の一回と同じ量（`VIEW_FOV_STEP_DEG`。上の「量の一覧」の参照の行）。奥へ回す一段（ホイールで近づく向き。ピンチで指を広げる向き）は画角を小さく（寄る）、手前へ回す一段は大きくする。
  Shift は見ない（ブラウザによっては Shift + ホイールを横のスクロールに変えるため）。Meta を押している間のホイールは、上の「マウスとキー」の
  Ctrl・Meta の規則のままブラウザに残し、寄る操作にしない（寄る操作は Meta なしの Alt + ホイール）。
- トラックパッドの細かい事象の溜め方はホイールと同じ（上の「なめらかに動く操作」のホイール、`WHEEL_STEP_PIXELS`）。ホイールの意味
  （前へ進むか寄るか）が変わったら溜めた分を捨てる（Alt を押した・離した、Ctrl が付いた・外れた）。
- 範囲：`VIEW_HFOV_MIN_DEG` 以上 `VIEW_HFOV_MAX_DEG` 以下。端で止まった一段は何も変えず、知らせも出さない（目盛りの矢印キーと同じ。
  右下の数字に端の値が見えている）。
- なめらかに動く操作との関係：寄る一段は直接の操作として扱う。Reset View・ダブルクリックの向き直し・Frame Selected で動いている途中なら、
  上の「なめらかに動く操作」のとおり今見えている所で止め、そこから一段を当てる。
- 当て方：なめらかにせず、その場で当てる（目盛りの矢印キーと同じ）。Preview のウィンドウでも減衰で追わない。ドラッグの途中でも効く
  （見回しとパンの量は、その時の画角で求める）。状態にも Undo にも入らず、再生も止めない。
- 値の桁：視点の画角は整数の度に丸めて持つ（右下の数字に見えない桁を持たせない。Camera タブの目盛りの「値の桁」と同じ考え）。
- 右下の画角の数字のドラッグ：左右のドラッグで変え、右へ動かすと大きくなる。式は FOV の目盛りのドラッグと同じ `rulerDragValue`
  （縮尺 `VIEW_FOV_DRAG_PX_PER_DEG`）を、ずれの符号を逆にして使う（目盛りは、右・下へ動かすと小さい値が真ん中に来るため）。Shift で細かくする
  （`FINE_FACTOR`）。ドラッグは丸める前の値を溜め、当てるときに上の「値の桁」に丸めるので、Shift の細かいドラッグでも
  整数の度ずつ動く。範囲は上と同じ。動かさずに離したときは何もしない。
- 右下の画角の数字の矢印キー：数字はキーボードのフォーカスを受け、フォーカスがある間の矢印キー（→・↑ で大きく、←・↓ で小さく）は
  FOV の目盛りの矢印キーと同じく一回で一段（`fovStepValue`）、Shift では `VIEW_FOV_FINE_STEP_DEG`（1°。視点の画角が持つ最小の桁。上の「値の桁」。
  `FINE_FACTOR` の一段は整数の度に丸めると動かないため）。フォーカスの見た目は
  `docs/design.md` の「フォーカス」。
- Alt を押している間の右下の画角の数字：3D タブと Preview のウィンドウで、Alt を押していてドラッグが無い間は、数字の地を hover と
  同じにし、Alt + ホイールで変わるのがそこだと示す（Camera タブの FOV の目盛りと同じ考え。持ち主、2026-11-05）。ドラッグの間は
  Alt + ホイールが効かないので見せない。Camera タブでは数字が無効なので光らせない（光るのは FOV の目盛り）。見せるだけで、状態にも
  Undo にも入らない。見た目は `docs/design.md` の「右下の画角の数字と画角のリセット」。
- 画角のリセット：画角だけを `DEFAULT_VIEW_HFOV` にする（その場で当てる）。`P`・向き・`T` は変えない。
- 画角を使う式（見回し、パン、Frame Selected の距離）は、今の画角で求める。なめらかに動いている途中の Frame Selected は、ほかの値と同じく
  行き先の視点から始めるので、行き先の画角で求める。
- 覚えること：エディタは上の「視点の記憶」、Preview のウィンドウは下の「Preview のウィンドウ」の引き継ぎ。

### Frame 表示

この節は撮り方のモードが Frame のときの Camera タブ（Camera から見る）の規則である。Panorama モードの Camera タブは出力の ERP を
平らに開いて見せるだけで、どの操作も何も動かさない（ADR 0048。画面の形は `docs/studio-ui.md` の「Camera タブ」）。Camera タブで
物はクリックで選べ、選んだ物のギズモ（空に貼った画像はハンドル）を 3D タブと同じに出す（ADR 0051）。押したときの当たりは、選んだ物の
ギズモ・ハンドル・本体が先で、そこを押したドラッグは物を動かす（3D タブと同じ）。それ以外の所を押した左ボタンのドラッグは Camera を
動かす。選んだ物は回る中心と Frame Selected にも使い、インスペクタにもそのカードを出す（`docs/studio-ui.md` の「インスペクタ」「Camera タブ」）。

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
  同じに動き、そのうえで上の「Sky だけのときのホイール」の知らせを出す。
- Alt + ホイールとピンチ：Camera の H FOV を変える一段（ADR 0061）。Camera の位置と向きは動かさず、ポインタの位置も使わない。
  視点の画角（上の「寄る」）は変えない。
  - 一段の値は、FOV の目盛りの矢印キー（Shift なし）の一回と同じに決める（量・範囲・値の桁。`docs/studio-ui.md` の「Camera タブ」の
    辺の目盛り）。向き、Shift を見ないこと、トラックパッドの溜め方は上の「寄る」と同じ。
  - 端で止まった一段は何も変えず、知らせも出さない（目盛りの矢印キーと同じ。Alt を押している間の目盛りに端の値が見えている）。
  - 記録は目盛りの矢印キーと同じ道で、Camera の Lane に記録の規則で書く。続けて回した分（`FRAME_WHEEL_REST_MS` 止まるまで）を
    Undo の 1 段にする。Alt なしのホイールと Alt + ホイールは別の 1 段にする（続けて回していても、切り替えた所で分ける）。
  - ドラッグの途中と物のドラッグの間は何もしない（Camera の位置と H FOV を同じ 1 段に書かないため）。キーで Camera を動かしている
    途中も何もしない（キーの動きは離すまでフレームごとに Camera を書き続けるので、H FOV の段と入り混じるため）。読み取り専用の
    エディタとロックした Camera では、ホイールと同じく何もしない。
  - Alt を押している間の FOV の目盛りの見た目と、右下の数字（Camera の H FOV を出し、無効）は `docs/studio-ui.md` の「Camera タブ」。
  - Panorama モードの Alt + ホイールは何も変えず、上の「黙って何もしない操作」の知らせを出す。
- Frame Selected は Camera を動かす（選んだ物、または World の内容の全体が枠に収まる位置へ、向きを保って）。ホイールと同じ理由で
  なめらかにせずその場で当て、Undo の 1 段にする。Reset View は Camera タブでは無効（`docs/studio-ui.md` の「Camera タブ」）。
- 記録：どの操作も最初の動きで再生を止め、Camera の Lane に記録の規則で書く（`docs/editor-interaction.md` の「Camera の記録」と
  `docs/timeline-ui.md`）。一つのドラッグ、続けて回したホイール（`FRAME_WHEEL_REST_MS` 止まるまで。Alt + ホイールは別の段）、押してから全部のキーを離すまでが、それぞれ Undo の 1 段。
  ドラッグの途中のキーとホイールは、そのドラッグの 1 段に入る。物のドラッグ（選んだ物のギズモ・ハンドル・本体）の間は、キーとホイールで
  Camera は動かない（物と Camera が同じ 1 段に書かれないように）。キーで Camera を動かしている途中に物をドラッグすると、キーの 1 段は
  その前と後に分かれる。
  読み取り専用のエディタとロックした Camera は動かない。
- ダブルクリック（Alt を押していても同じ）：Panorama 表示と同じく、ポインタの下の当たり（`world` の画像の板にも当てる。レンズの
  Camera は下の「レンズの Camera の当たり」）をそのまま Frame 表示の `T` にし、Camera を `T` が枠の中心に来る向きへ回す（位置と roll は
  保つ）。ホイールと同じ理由でなめらかにせずその場で当て、Camera の Rotation の Lane に記録の規則で書き、Undo の 1 段にする。
  `T` を決めると、オービットの中心の印をその点に出して消す（Panorama 表示と同じ）。当たりが無い（空）とき、または当たりが世界の境界の
  外のときは動かさず、上の「黙って何もしない操作」の知らせを出す。読み取り専用のエディタ、ロックした Camera、ペイントの道具を選んでいる
  間は何もしない。Set orbit center は Camera タブでは今までどおり無効（持ち主の決定「無いと操作しにくい」、2026-11-03）。

#### レンズの Camera の当たり

この節（と Camera タブの当たり・ガイド・ギズモ）でいうレンズの Camera は、κ を 0.01 の桁（インスペクタの表示と同じ）に丸めて 1 と違う
Camera である（表示が 1.00 なら pinhole と同じに扱う。保存した κ が 1 からわずかにずれていても、見えない差で操作が変わらないように）。
描く像（ステージ、出力、Output の小窓）の κ は丸めない（`web_src/pano_lens.js` `lensCurveBent`）。

レンズの Camera（κ ≠ 1）の Frame 表示でも、クリックで物を選び、パンとホイールはポインタの下の表面の当たりを使う。

- 当たり：求める物はピンホールの Frame 表示と同じ。
  - クリックとホバー：World の物（下の「ホバーの判定」と同じ CPU の判定）も Sky の画像も、下の「ガイド・ホバー・ギズモ・ハンドル」の
    写した像で判定する（ホバーとクリックは一つの判定）。光線が要る所（3D の Sticker の粗いグリッド）は `lensStageRay` の光線で引く。
  - パンとホイール：上の「表面の当たり」（GPU の当たりと地面の近い方）。ポインタの画素を、像の中心と `f`（像の中心の縮尺）でフィルムの
    点にし、レンズの逆の写し方（`lens_angle`）で光線に戻す。その光線が通る World の軸にそろえた立方体の面を 90° の正方形のピンホールとし、
    その面の画素で GPU の当たりを求める（`pano_lens.js` の `lensPickWindow`。描く像と同じ面。`docs/threejs-spark-integration.md` の
    「当たり判定」）。立方体の面を使うのはこの GPU の当たりだけ。
  - 光線が像の軸から 180° を超える画素（`bg_color` の所）は何にも当たらない。
- パン：掴んだ点の深さ `z` で動かすのは上の式のまま。ポインタの動きは画素の差ではなく、ポインタの光線を同じ縮尺 `f` のピンホールの
  画素に写した点（`f·tan θ`）の差で受ける（`lensPinholePoint`）。向きが変わらないパンでは、深さ `z` の掴んだ点がこれでポインタの下に
  付いて動く。光線が軸から `LENS_PAN_MAX_DEG`（89°）を超える所ではピンホールの点が無いので、その間の動きは受けない。
- ホイール：`G` の向きは `P' = G + k (P - G)` で変わらないので、`G` はポインタの下に残る。
- 量の `W` と H FOV：Frame 表示の視点は、像の中心の縮尺のピンホール（H FOV は `2·atan(W ÷ 2f)`、`frameViewFov`）として量を求める
  （パン、見回し、Frame Selected）。レンズの H FOV は 180° を超えることがあり、そのままではピンホールの式が使えないため。
- 当たりを読むのは押したとき（パンの始まり、クリック）とホイールの一段だけで、ポインタの動きでは読まない（パンの動きは CPU の計算だけ）。
- 見回しは像の中心の縮尺で受ける（像の端では、絵はポインタからずれる）。
- ガイド・ホバー・ギズモ・ハンドル（持ち主、2026-10-31：レンズの Camera でもピンホールと同じに触れるようにする）：
  - 写し方は一つ：3D の点を、描く像と同じレンズの写し方（`docs/render-contract.md` の「カメラのレンズ」）でステージの点にする関数を
    `web_src/pano_lens.js` に一つ置き、描くことと当たりの両方がそれを使う。レンズの式を二か所に書かない。κ を 0.01 の桁で丸めて 1 の
    Camera では、この関数はピンホールの写し方と同じ点を返す。
  - ガイドと CPU のホバー：3D でまっすぐな辺を細かく分け（1920×1080 で曲がりが角ばって見えない数）、分けた点を上の関数で写して曲線として
    描く。ホバーは同じ写した輪郭で判定する。
  - ギズモと空の画像のハンドル：取っ手の基点を上の関数で写した点に置き、各軸は基点から、軸に沿って先端（ギズモの reach）まで進んだ
    3D の点を上の関数で写した点へ直線で結ぶ（Rotate の輪は輪の点を一つずつ写す。空の画像の枠とハンドルは、その向きを写す。曲がった像の
    上で物に乗って見える）。ギズモの大きさ（reach の World の長さ）は、基点でのレンズの縮尺で画面の長さが 3D タブと同じになるように決める。
    当たりは写した後の画面で判定し、ドラッグの動きはポインタの画素をレンズの逆の写し方
    （`lens_angle`）で戻した正確な光線（`pano_lens.js` `lensStageRay`）で受け、つかんだ点がピンホールのときと同じくポインタの下に付いて
    動く（パンの `lensPinholePoint` と違い、軸から 89° を超える所でも受ける）。
  - レンズの画角の上限：軸からの角度が `lens_fov_limit(κ) ÷ 2` を越える点は描かず、線はそこで切る（`lensPolylines` が分けて探す）。
    そこにある取っ手は当たらず、その先のポインタの光線も無い。
  - ペイントのまとまりの枠：四隅を結ぶ辺も、ガイドと同じく分けて写し、曲げて描く（`pano_lens.js` `lensPolylines`、`stage_objects.js`
    `paintFrame` の `outline`）。ラスタの本体の当たりも同じ曲がった枠で判定する。辺がレンズの上限を越えるときは、ピンホールで隅が後ろに
    回ったときと同じく枠とハンドルを描かない。
  - Camera 自身のギズモは、ピンホールと同じく Camera タブでは描かない。

## カーソル

| 場所と状態 | カーソル |
|---|---|
| ステージの上（既定） | 見回しのカーソル（目の形。使えなければ `grab`） |
| 触れる物の上（ギズモのハンドル、Sky の Sticker の取っ手と本体、ペイントのまとまりの四隅と回転のハンドルと本体（当たりは `docs/studio-ui.md` の「ペイントのまとまり」）、`world` の Sticker、Camera の印（塗った面の中と、線から当たりの幅の中）） | 物のカーソル（今の `hit_test.js` の規則） |
| Alt を押している間（ステージのどこでも、物の上でも） | オービットのカーソル（輪の形。使えなければ `move`） |
| 見回しのドラッグ中 | `grabbing` |
| オービットのドラッグ中 | オービットのカーソル |
| パンのドラッグ中 | `move` |
| ジョイスティックのドラッグ中 | `ns-resize` |
| Set orbit center の待ち（ステージのどこでも、物の上でも。下の「視点の操作の部品」） | `crosshair` |

触れる物の判定は下の「ホバーの判定」の CPU の判定（クリックと同じ）で、GPU の当たりを読まない。

## 視点の操作の部品

ステージの右の縦の中央（左の道具の列と左右対称。ADR 0048。置き場所の全体は `docs/studio-ui.md` の「画面の区画」）に、三つのつまみを
縦に並べる。どれもドラッグするつまみで、押すたびに切り替わるボタンではない。つまみの列の下に区切りの線を置き、その下に、押す
ボタンを二つ縦に並べる：Set orbit center（下）と、ショートカットの一覧を開く「?」（中身は `docs/studio-ui.md`）。ドラッグするつまみと
押すボタンを区切りで分ける（ADR 0058）。

| つまみ | ドラッグの動き | tooltip |
|---|---|---|
| 球 | オービット（キャンバスの Alt + 左ドラッグと同じ。回る中心も同じ） | 「Orbit (Alt+Drag)」 |
| 四方向の矢印 | パン（右ドラッグと同じ。掴む点は画面の中心の表面の当たり） | 「Pan (Right-drag)」 |
| 道の矢印 | 前後のジョイスティック（Alt + 右ドラッグと同じ） | 「Move forward/back (Alt+Right-drag)」 |

- ポインタを載せるとカーソルは `grab`、ドラッグ中は `grabbing`。
- 操作の最中は、どの手段で動かしていても、その操作に当たるつまみを光らせる（選ばれた状態と同じ灰の強い塗り。色は使わない）：
  オービット（Alt + ドラッグ、球のドラッグ）は球、パン（右ドラッグ、四方向の矢印のドラッグ）は四方向の矢印、前後（Alt + 右ドラッグ、道の矢印のドラッグ、
  WASD / QE の移動）は道の矢印。見回しには当たるつまみが無いので光らせない。Alt を押している間は、Alt のドラッグに当たるつまみ
  （球と道の矢印）も光らせる。光らせるのは表示だけで、状態にも Undo にも入らない。
- Studio を開いている間は、Alt だけを押した・離したときのブラウザの既定の動きを止める（Alt の `keydown`・`keyup` で `preventDefault`）。
  Windows のブラウザは、Alt だけを押して離すとブラウザのメニューにフォーカスを移し、その後の Alt がページに届かなくなる。
  そのため、光ったままになったり、押しても光らなくなったりした（持ち主、2026-11-05）。Alt と組み合わせたキーは止めない。
- 球にポインタを載せている間は、オービットの中心の印を出す（下の「オービットの中心の印」）。
- つまみの上のホイールと右クリックのメニューは、ステージに渡さない。
- つまみの席は 3D タブでも Camera タブでも Preview のウィンドウでも同じで、出たり消えたりしない。操作できないとき（読み取り
  専用の Camera タブ、ロックした Camera、Panorama モードの Camera タブ）は隠さずに無効にする。右下のボタン群と、Camera タブで無効に
  する部品（Reset View・左の道具）は `docs/studio-ui.md` の「画面の区画」と「Camera タブ」が持つ。

### Set orbit center

オービットの中心を、ステージの一点をクリックして決めるボタン（ADR 0058）。ダブルクリックと同じことを、知らなくても見つけられる
入口として置く。

- 押すと、次の一回の左ボタンの押下を待つ状態に入る。待っている間：
  - ボタンは待っている見た目にする（選ばれた状態の灰の強い塗りではなく、操作を待っていると分かる形。値は `docs/design.md` の「大きさ」の
    「Set orbit center の待ち」）。
  - ステージのカーソルは `crosshair`（上の「カーソル」）。
  - 上端の中央の一行に「Click a spot to orbit around · Esc to cancel」を出す（`docs/studio-ui.md` の「一行の知らせの種類」の知らせるだけ）。
    この文を出すのは待っている間だけで、Alt を押したときなどほかの時には出さない（Alt のたびに文が出るのはうるさい。ADR 0058）。
  - オービットの中心の印を出す（下の「オービットの中心の印」）。
- 決めるのは、待っている間のステージの左ボタンの押下（`pointerdown`）。押した点の当たりを、ダブルクリックと同じく `T` にしてそちらへ向く
  （上の「注視点 `T`」）。押した後にポインタを動かしても見回しにならない。Alt を押していても、物の上でも、ペイントの道具（Paint・Mask）を
  選んでいても、待ちの押下が先に取る（物を選ばず、編集せず、ストロークを描かない）。当たりが無いか境界の外なら動かさず、
  「Nothing to focus on」を出す。どちらでも待ちは終わる。
- 待っている間も、右ボタン・中ボタンのドラッグ、ホイール、WASD / QE はふだんどおり効く。Reset View と Frame Selected も効き、待ちは続く。
- 待ちをやめる（何も動かさない）：Escape（`docs/studio-ui.md` の「閉じ方」の表。視点のドラッグの最中なら、Escape は先にそのドラッグが取る）、
  ボタンをもう一度押す、タブを変える（撮り方のモードを変えたときも）、ウィンドウがフォーカスを失う（下の「ウィンドウがフォーカスを失ったとき」）。
  `Set ground` の待ち（`docs/studio-ui.md` の「種類ごとの中身」。まだ作っておらず、ボタンも出していない）ができたら、待ちは一度に一つにする：`Set ground` の待ちを
  始めると Set orbit center の待ちをやめ、逆も同じ。
- tooltip：ふだんは「Set orbit center (Double-click)」、待っている間は「Click a spot to orbit around · Esc to cancel」。
- Camera タブでは使えない（Camera タブで `T` を決め直すのはダブルクリックだけにする。上の「Frame 表示」）。同じ席に出したまま無効にし、
  tooltip は「Not available in the Camera view」。Preview のウィンドウでは 3D タブと同じに働く（下の「Preview のウィンドウ」）。

## オービットの中心の印

`T`（回る中心）を画面に示す、小さな点と細い輪の印（ADR 0058）。中心がどこか分からないまま回ると、目が遠い腕で振り回されて
「速すぎる」と感じるため、中心を気にする時だけ見せる。

- 出すとき（どれか一つでも当てはまる間）：
  - Alt を押している間。
  - オービットの間（Alt + ドラッグ、球のつまみのドラッグ。オービットの途中で Alt を離しても出し続ける）。
  - 球のつまみにポインタを載せている間。
  - Set orbit center にポインタを載せている間と、待っている間。
  - ダブルクリックか Set orbit center で `T` を決めた直後：`ORBIT_MARK_HOLD_SECONDS` そのまま出し、`ORBIT_MARK_FADE_SECONDS` で消す。
- 置く点：World の中の点に置き、画面の点には置かない（視点が動けば、印は World と一緒に画面の上を動く）。
  - 次のオービットが回る中心（上の「回る中心」：選んだ物の中心、3D タブで選んだ Camera の位置、どちらも無ければ `T`）：Alt を押している間と、
    球のつまみに載せている間。オービットの間でも、Set orbit center の待ちでもなければ、これがほかより先に当たる（Alt を押しながら
    Set orbit center に載せていれば、こちら）。
  - そのほか（オービットの間、Set orbit center に載せている間・待っている間、`T` を決めた直後）は、今の `T`。`T` を決めた直後の `T` は決めた点
    （クリックした点）で、決めた瞬間からその点に出し、視点がそちらへ向く間も World のその点に留まる（画面では視点と一緒に動き、最後に
    画面の中心に着く）。前の `T` から滑ってこない（なめらかに動く途中の補間した `T` には置かない。行き先の `T` に置く）。
  - 見回し・パン・ジョイスティック・WASD / QE が `T` を置き直せば（上の「付いて動く」）、印も新しい `T` へ移る。
- 3D タブ、Camera タブの Frame 表示（`T` は Camera の Frame 表示の `T`）、Preview のウィンドウで出す。Panorama モードの Camera タブでは
  出さない（何も動かないため）。Camera タブで出すのは Alt・オービット・球に載せている間と、ダブルクリックで `T` を決めた直後（Set orbit center は無い）。
  操作できない Camera タブ（読み取り専用、ロックした Camera）では出さない。
- 視点の後ろにある点や、画面の外の点には描かない。
- 印は表示だけで、当たりに数えず、状態にも Undo にも入らない。見た目の値は `docs/design.md` の「大きさ」の「オービットの中心の印」。

## 地面のグリッド

- 地面は y = `ground` の水平の面。グリッドはその面に、地平線まで描く（内容の大きさで間隔を変えない）：
  - 1 単位ごとの線。視点からの水平の距離で `GRID_MINOR_FADE` のあいだに薄れて消える。
  - 10 単位ごとの、より薄い線。`GRID_MAJOR_FADE` のあいだに薄れて消える。
  - X 軸と Z 軸（ギズモの同じ軸と同じ色。X は珊瑚、Z は氷。値は `docs/design.md`）。距離で薄れず、同じ濃さで地平線まで描く（ADR 0058。
    薄れると、どちらが X か分からなくなった）。グリッドの板の外（視点から `GRID_MAJOR_FADE` の消える距離より先）は、空のグリッドを描く
    層が同じ地面の上の続きとして地平線まで描く（下の「空のグリッド」、描き方は `docs/threejs-spark-integration.md`）。地平線の近くでも
    一本の線のままで、地平線に沿ってにじまない。
  - 1 画素より細くなる線は、ちらつかないように薄くする。グリッドは深度を書かず、World の物はその上に前後どおり描く。
- 原点に印は描かない。X 軸と Z 軸の線が原点で交わるので原点はそれで分かり、既定の Camera の位置（Camera の印）とも重なるため
  （持ち主の決定、2026-10-30。ADR 0047 の「原点の印」を改める）。「ERP origin」の文字も出さない。原点はパノラマを撮った点で、
  既定の Camera の位置（Camera を動かしていないときの出力の視点）である。
- グリッドは Camera タブ（Frame モードと Panorama モード。Panorama モードでは開いた ERP の上に）にも描く。何も無い空間でも、地面と地平線で Camera の向きと高さが分かるように
  するためである（ADR 0048）。編集の目印なので出力には写らない。
- グリッドのスイッチ（右下のボタン群。`docs/studio-ui.md` の「画面の区画」。tooltip は「Grid: shown」「Grid: hidden」）は地面のグリッドと空のグリッドを一緒に隠す。3D タブと Camera タブで同じ一つの設定である
  （World の物のガイドについては下）。
- グリッドの線の色・太さ・濃さの値は `docs/design.md` が持つ。

### 空のグリッド

無限遠の Sky の球に描く経緯線（ADR 0058）。地面の無い向き（空を見上げたとき、空だけの場面）でも、どちらを向いているかが分かるように
する。無限遠にあるので、視点がどこにいても同じ向きに見え、視点の向きだけで動く。

- 描く物：
  - 経線と緯線を `SKY_GRID_STEP_DEG` ごとに描く。地平線（赤道）から極へ向けて、`SKY_LINE_FADE_DEG` のあいだに薄れて消える（経線が極に
    集まって星の形にならないように）。線どうしが数画素より近づく所は、ちらつかないように薄くする。
  - 軸の経線：+X と −X の向きを通る経線（X 軸、珊瑚）と、+Z と −Z の向きを通る経線（Z 軸、氷）を、ほかの線より太く描く。地面の X 軸と
    Z 軸を見上げた続きで、極で十字に交わる。地平線から遠いほど濃く、地平線へ下りるほど薄くし（`SKY_AXIS_RISE_DEG`）、地平線のそばでは
    描かない。地平線では地面の軸が続きを持ち、空の軸と二重にならない。
  - 地平線：細い中立の線（帯やぼかし、色の付いた光は付けない）。
  - 極の点：見えている半球の極（地面より上にいれば天頂）に小さな点を描く。視線が極に `SKY_POLE_NEAR_DEG` より近づいたときだけ現れ、
    離れると消える。輪は描かない（真上・真下を見たときに視界を塞ぐため）。
- 半球は目のいる側に従う：目が地面の高さ以上（y ≥ `ground`）なら上の半球だけを、下（y < `ground`）なら下の半球だけを描き、反対の半球には
  描かない（そちらは地面のグリッドが受け持つ）。下の半球も同じ見た目を上下に写した形で描く（軸の経線は地平線から遠いほど濃く、極の点は天底）。
  地平線の線はどちらでも描く。地面の軸の続き（上の「地面のグリッド」）も、目のいる側の地面に描く。目がちょうど地面の高さにあるときは、
  地面の軸の続きを描かない（地面が線にしか見えないため）。
- 目：3D タブと Preview のウィンドウでは視点の位置、Camera タブ（Frame 表示と Panorama モードの開いた ERP）では撮る Camera の位置。半球と
  地面の軸の続きはこの目で決める。
- 描く順：背景の上、Sky の層（Sky の Sticker、ペイント）と World の物の下。World の物と Sky の層は空のグリッドを隠す。
- 描く所と出し入れは地面のグリッドと同じ（3D タブ、Camera タブ、Preview のウィンドウ。同じスイッチで一緒に隠す）。編集の目印なので、
  出力、Output の小窓、ノード上の表示には写さない。
- 線の色・太さ・濃さの値は `docs/design.md` の「大きさ」の「空のグリッド」。

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
- 上流の World の物も、自分の物と同じにガイドを描き、ホバー・クリック・回る中心・Frame Selected に数える。上書きを持てない層の物は
  ロックした物と同じに扱う（`docs/studio-ui.md` の「上流の物の編集」）。
- Hide Grid の間は、選んでいる物のガイドだけを描く。
- Alt を押している間はホバーで明るくしない（上の「マウスとキー」）。
- Camera タブ（Frame 表示）でも、ガイドの描き方は 3D タブと同じ（ADR 0051。Camera タブでも選んだ物をギズモで動かすため。画面の側は
  `docs/studio-ui.md` の「Camera タブ」）。レンズの Camera（κ ≠ 1）でも描く（曲がった像に合わせて写す。下の「レンズの Camera の当たり」）。

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
- `T` を決め直すのはダブルクリック、Set orbit center と Reset View だけ（Preview には選択が無いので、回る中心はいつも `T`）。
- 開いたとき：ノード上の表示から `P`・`yaw`・`pitch`・画角を引き継ぐ（`docs/preview-node.md` の「大きなウィンドウ」）。`T` は
  「初めの `T`」で求める。引き継ぐものが無ければ原点、yaw 0、pitch 0、画角 `DEFAULT_VIEW_HFOV`。閉じると、ノード上の表示が
  ウィンドウの最後の `P`・`yaw`・`pitch`・画角を引き継ぐ（なめらかに動いている途中や慣性で動いている途中なら、その時の
  行き先の視点）。Preview は Camera を使わない。Reset View は原点、yaw 0、pitch 0、画角 `DEFAULT_VIEW_HFOV` へ動く。
  - `PANO_SCENE`：ノード上の Scene のビューアの視点（位置・yaw・pitch・画角）をそのまま引き継ぎ、閉じると返す。
  - IMAGE・VIDEO：ノード上の表示は見回しだけ（3DoF）なので、yaw・pitch・画角を引き継ぎ、`P` は原点から始める。閉じると yaw・pitch・
    画角だけを返す（ウィンドウで動いた `P` は返さない）。
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
- グリッド（地面と空）は、エディタと同じく既定で出す（ADR 0058 が ADR 0047 の「Preview では既定で隠す」を置き換える。空のグリッドで向きが
  分かるのは、見るための場所でも役に立つため）。隠すかどうかは見る人が右下のボタン群の決まった席のスイッチ（on / off）で決める
  （押すたびに状態が反転するボタンにしない。`docs/agents/ux-principles.md`）。席は出たり消えたりしない。World の内容の有無で
  自動で出し入れせず、隠している間に絵が変わらない移動をしても知らせない（スイッチがいつも見えているため。ADR 0047）。ホイールだけは、
  グリッドによらず上の「Sky だけのときのホイール」の知らせを出す（ADR 0061）。
- オービットの中心の印と Set orbit center はエディタと同じに働く（上の「オービットの中心の印」「Set orbit center」）。Preview のウィンドウには
  ふだん一行の知らせが無いので、Set orbit center の待ちの文と、上の「Sky だけのときのホイール」の知らせだけを、エディタと同じ上端の中央の
  席に出す（`docs/studio-ui.md` の「Preview のウィンドウ」）。
- 寄る操作と右下の画角の数字はエディタの 3D タブと同じ（上の「寄る」）。

## ウィンドウがフォーカスを失ったとき

ウィンドウがフォーカスを失ったとき（`blur`）とページが隠れたとき（`visibilitychange`）は、次を消す。戻って最初の操作を、
きれいな状態から始めるためである。

- 修飾キーの状態（Alt を押していないものとする）。
- 押しているキー（全部を離したものとする。下の「キーを離したものとするとき」）。
- ホバーの状態（ガイドのホバー、ギズモのハンドルの強調、部品のつまみの強調）。
- Set orbit center の待ち（何も動かさずにやめる）。
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
