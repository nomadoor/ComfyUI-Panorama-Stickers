# 新しい画面（Panorama Studio のエディタと Preview のウィンドウ）

新しい UI の層（ADR 0044）の、Panorama Studio のエディタと新しい Preview ノード（`PanoramaPreviewNode`）の大きなウィンドウについて、
画面に何がどこにあり、どう見えるかの規則を定める：目指すもの、画面の区画、インスペクタ、下の中央のバー、エディタの中の Camera の見せ方、
Camera タブ、Add とドロップの見せ方、読み込み中と空の画面、タイムラインのバー、ツールチップ、ショートカットの一覧、閉じ方、Preview のウィンドウ。
画面に出す言葉は `CONTEXT.md` の「画面の言葉」に従う。決めた理由は ADR 0045（目的と視点）、ADR 0047（視点の操作と置き方）、
ADR 0048（撮る Camera・入口の役割・画面の組み直し）にある。

見た目の下書き（`design-drafts/*.html`。リポジトリには入れない）とこの文書が食い違うときは、この文書が正である。

新しい UI に切り替えるまで、Panorama Studio と Preview は古い UI で開き、その画面の規則は `docs/editor-interaction.md`・
`docs/preview-node.md`・`docs/vue-ui-boundary.md` が持つ（ADR 0044 の「置き換えの進め方」）。

この文書が持たない規則：視点の動かし方・注視点・カーソル・視点の操作のつまみの働き・地面のグリッド・World の物のガイド・
Add とドロップの着く所（`docs/space-and-view.md`）、Keyframe の記録・範囲選択・再生・タイムラインの行（`docs/timeline-ui.md`）、
撮る Camera と撮り方のモード・ノードの入力と出力の大きさ（`docs/studio-node.md`）、状態の形（`docs/scene-state-v2.md`）、
Panorama モードの ERP をブラウザで描く仕組み（`docs/threejs-spark-integration.md`）、色・文字・余白・角丸・動きの値（`docs/design.md` の
「新しい UI の見た目」）、Vue と JS の境界（`docs/vue-ui-boundary.md`）、押すたびに反転するボタンと隠す部品の例外（`docs/agents/ux-principles.md`）。

## この文書が owner である規則

Python はこの文書の規則を持たない（列は `—`）。「（新しい UI、未実装）」は ADR 0044 の置き場所（`web_src/studio/`、
`web_src/components/studio/`）に作る予定のもの、「（未作成）」は作る予定の test である。印の無いものは今ある。作ってあるが規則の
一部がまだ動かないものは、その部分を「未実装」と書く。

入口：新しい UI は、ComfyUI の設定 `PanoramaSuite.Editor.NewUI`（既定はオン。持ち主の決定、2026-10-30、マイナーアップデートで既定にする）がオンのとき Panorama Studio を開く。
オフにすると古い UI で開く（`web_src/editor_choice.js` `NEW_UI_SETTING`。組み立ては `web_src/main.js`、新しい UI のエディタは
`web_src/studio/editor.js`）。古い UI を消す change でこの設定を消す（ADR 0044 の「置き換えの進め方」。それまでは古い UI へ戻る道として残す）。

| 規則 | Python | JS | test |
|---|---|---|---|
| 画面の区画（ステージ、タブ、左の列、右の中央の列、右下、右上、上端の中央、インスペクタ、タイムラインの領域と境界） | — | `web_src/components/studio/StudioEditor.vue`、大きさの規則は `web_src/studio/layout.js`（タイムラインの高さ、Output の小窓の大きさとその記憶）、開くのは `web_src/studio/editor.js` | `tests/studio_stage_view.test.mjs`（`layout.js`）、`tests/browser/studio_editor.spec.js` |
| 左の列の中身と並び、タブごとの無効 | — | `web_src/components/studio/StudioToolRail.vue`（今は Cursor・Paint・Mask・Add・Camera・Undo・Redo が働き、ほかは席に置いて無効。Paint・Mask は下の「ペイントの道具」。Undo・Redo は `web_src/studio/session.js` の履歴、Add は `web_src/studio/add_files.js`、Camera は下の「エディタの中の Camera」の行）。Camera タブでの無効は `StudioToolRail.vue` の `cameraTab` | `tests/browser/studio_editor.spec.js`、`tests/browser/studio_camera_button.spec.js`、`tests/browser/studio_paint.spec.js` |
| ペイントの道具（左の列の Paint・Mask、下の中央のバーのペイントの道具、ステージで描くこと、ブラシのカーソル、Clear paint・Clear mask） | — | 道具の選び方・太さ・色とバーの中身は `web_src/studio/paint_bar.js`（`createPaintTools`・`paintBar`）、画面は `web_src/components/studio/StudioPaintBar.vue`（色のポップオーバーは `StudioColorPicker.vue`、Clear の確かめは `StudioConfirm.vue`）。ステージで描くことと描く層は `web_src/studio/paint.js` `createStudioPaint`（下の部品：ストロークの記録・点・確定・消しゴムは `web_src/paint_strokes/*.js`（入口は `pano_paint_strokes.js`）、画素は `pano_paint_engine.js`、ラスタのキャンバスと層は `pano_paint_display.js` `createPaintDisplay`、層の並びは `pano_paint_layers.js` `skyPaintLayers`。古い UI も同じ下の部品を使う）。状態に書いて Undo の 1 段にするのは `web_src/studio/session.js` `editPainting`、組み立ては `web_src/studio/editor.js`、押したときの振り分けは `web_src/studio/stage.js`。閉じるときのペイントの層のアップロードは `web_src/studio/paint_upload.js`（下の部品 `web_src/pano_paint_upload.js`、古い UI と同じ）で、呼ぶのは `web_src/studio/editor.js` の閉じる処理 | `tests/pano_paint_strokes.test.mjs`、`tests/studio_paint.test.mjs`、`tests/studio_session.test.mjs`、`tests/studio_paint_upload.test.mjs`、`tests/pano_paint_upload.test.mjs`、`tests/browser/studio_paint.spec.js` |
| インスペクタの組み立て（選択で何を出すか）、行の格子、欄、スライダー、リセット、Keyframe のポチの置き場所、Easing のパネル、種類ごとの中身 | — | データは `web_src/studio/inspector_model.js` `buildInspectorModel`、編集を状態に当てるのは `web_src/studio/inspector_actions.js` `applyInspectorEdit`、画面は `web_src/components/studio/StudioInspector.vue`・`StudioInspectorCard.vue`・`StudioInspectorRow.vue`・`StudioEasingPanel.vue`（欄とスライダーの部品は `StudioNumberField.vue`・`StudioSlider.vue`・`StudioAspectSlider.vue`・`StudioResetButton.vue`・`StudioKeyDot.vue`、Camera のカードの撮り方の札は `StudioModeTiles.vue`）。Aspect のスライダーが止まる既定の比は `web_src/studio/ui_aspect.js` `ASPECT_PRESETS`・`snapAspectPos`、矢印キーの移り先は `stepAspect`。Sky の画像の FOV の行のリセット先は `inspector_model.js` `skyPlacedSize`。エディタの中でインスペクタとタイムラインが共有する選択は `web_src/studio/session.js` `inspectorSelection` | `tests/studio_inspector_model.test.mjs`、`tests/studio_inspector_actions.test.mjs`、`tests/studio_ui_helpers.test.mjs`（Aspect のスライダーの止まる所）、`tests/browser/studio_inspector.spec.js`、`tests/browser/studio_ui.spec.js`、`tests/studio_session.test.mjs`、`tests/browser/studio_session.spec.js`、`tests/browser/studio_camera_select.spec.js`（タブを切り替えても同じカード） |
| 右の中央の列（視点の操作のつまみ、Set orbit center、「?」）と右下のボタン群（Frame Selected、Reset View、グリッドのボタン）の並び | — | `web_src/components/studio/StudioNavWidget.vue`、`StudioViewButtons.vue`（つまみと Set orbit center の働きは `docs/space-and-view.md`） | `tests/browser/studio_editor.spec.js`、`tests/browser/studio_orbit_center.spec.js` |
| 下の中央のバーの中身（名前の欄の幅を種類で決めること、Camera タブで Camera のバーを出さないこと） | — | `web_src/studio/selection_bar.js` `selectionBar`（`fixedName`、タブを受け取る `tab`）・`gizmoModeOfKey`、`web_src/components/studio/StudioSelectionBar.vue`、ボタンの働きは `web_src/studio/session.js`（`toggleLock`・`duplicateSelected`・`orderSelected`・`revertSelected`・`deleteSelectedObject`）、ステージの選択とギズモと Sky の画像のハンドルは `web_src/studio/stage_objects.js`（ギズモの形・当たり・ドラッグの動きは `web_src/studio/gizmo_overlay.js`、ギズモの中心はガイドの中心 `web_src/studio/world_guides.js` `worldGuideItems`、描くのは `web_src/studio/stage_overlay.js`）。Camera の Lock は `camera.locked`（`docs/scene-state-v2.md`）を `session.js` `toggleLock` で切り替える。前面へ・背面へが Sky の層の全体を並べ替えるのは `session.js` `orderSelected`（全体の並びは `web_src/pano_paint_objects.js` `skyDisplayList`、振り直しは `restackSkyOrder`・`numberSkyOrder`。古い UI と同じ関数）。ペイントのまとまりのバーは次の行。未実装：Replace（古い UI の下にファイルを選ぶ部品が無い）、複数選択のバー | `tests/studio_selection_bar.test.mjs`、`tests/studio_session.test.mjs`、`tests/studio_stage_objects.test.mjs`、`tests/studio_gizmo_overlay.test.mjs`、`tests/browser/studio_select.spec.js`、`tests/browser/studio_camera_button.spec.js`、`tests/browser/studio_camera_select.spec.js` |
| ペイントのまとまりをつかむこと（つかむ単位、押したときの順と当たり、選んだ枠とハンドル、回転のハンドルの席、動かす・大きさを変える・回す式、前面へ・背面へ・Lock・Delete、Undo） | — | 押したときの順（Sky の物を描く順の逆に並べる `skyObjects`）・当たり・ハンドル（回転のハンドルの席 `rotateSeat` と当たり `paintHandleAt`、回すドラッグ `paintTurn` を含む）・選んだ枠とカーソルは `web_src/studio/stage_objects.js`（描くのは `stage_overlay.js`、ラスタの画素の不透明度は `web_src/studio/paint.js` `rasterAlpha`）、ドラッグは `stage_objects.js` `paintDrag` の `edits` から `web_src/studio/session.js` `gesture`・`commitGesture`・`cancelGesture`、一回の操作は `session.js`（`orderSelected`・`toggleLock`・`deleteSelectedObject`）、選択の形（`paint_group:`・`raster:`）の読み方は `web_src/pano_paint_objects.js` `paintObjectRow`・`paintObjectOf`（まとまりの数え方 `countedPaintGroups`、状態ごとの索引 `paintIndexOf`）で、読む所は `session.js` `keepSelection`・`selectObject`・`inspectorSelection`、`selection_bar.js` `selectedKind`・`selectionBar`、`editor.js` `selectionOf`、`timeline_actions.js` `toggleVisible`、タイムラインのペイントの行の選んだ形は `timeline_model.js` `buildStudioTimeline`。当たり・動かす式・大きさを変える式・回す式・重なり順の振り直し・消し方は二つの UI が共有する下の部品 `web_src/pano_paint_objects.js`（`strokePathsHit`・`strokeHitLineWidth`・`paintCornerHandle`・`strokeDotHit`・`rasterObjectAlphaAt`・`rasterAlphaHits`・ストロークのまとまりを球面の上で動かす `moveStrokeGroupTo`・`transformStrokeGroup`・`offsetRasterObject`・`scaleRasterObject`・ラスタを回す `rotateRasterObject`・`pointerDistance`・`pointerScaleRatio`・`restackSkyOrder`・`numberSkyOrder`・`deletePaintObjects`。古い UI は `web_src/editor/hit_test.js`・`paint_layers.js`・`object_geometry.js`・`items.js`・`pointer_transform.js`・`selection.js`・`commands.js` から呼ぶ）。ストロークのまとまりの球面の上の枠（中心の向き、軸、接平面の箱）は共有の `web_src/paint_strokes/groups.js` `strokeGroupFrame`（軸は `strokeGroupAxes`、接平面との行き来は `frameTangentOf`・`frameDirectionAt`）、四隅は `pano_paint_objects.js` `frameCornersUv`（軸は `pano_camera_math.js` `cameraBasis`、接平面の点を向きにする式は `pano_camera_math.js` `tangentDirection`。空の画像の枠と共有）、消しゴムの先に絞るまとまりの範囲は点の ERP の箱から（`paint_strokes/eraser.js` `erasePaint`）、まとまりを球面の上で回して `rot_deg` を書くのは `pano_paint_objects.js` `turnStrokeGroup`（点を回すのは `turnErpPointOnSphere`、接平面の上で大きさを変えるのは `transformStrokeGroup`）、group の `rot_deg` の読み込みは `web_src/pano_paint_types.js` `normalizePaintingState`、ERP の点と向きは `erpPointOfDirection`・`directionOfErpPoint`。ラスタを回す平面と向き（ラスタの四隅と当たりの `rasterObjectCornersUv`・`rasterObjectAlphaAt`・`inverseTransformErpPointAround`）は `docs/render-contract.md` の「ペイントのラスタの置き方」が持つ（ストロークのまとまりの球面の上の枠と回し方はこの節）。ドラッグの間の描き直しは `paint.js` の `layers`（ドラッグは動かす物だけを写し（`stage_objects.js` `paintDraft`、`session.js` `gesture` の `copy`）、ほかのストロークは同じ物のまま。ペイントのエンジンの `rebuildCommitted` は `immutableStrokes` で、読んだことのあるストロークを読み直さず、ストロークの変わったまとまりだけを描き直す。ラスタは変形が変わった一つだけを重ね直す）。選択の行の id を作るのは `web_src/pano_paint_layers.js` `paintObjectRowOf`（層の id と同じ） | `tests/studio_stage_objects.test.mjs`、`tests/pano_paint_objects.test.mjs`、`tests/pano_paint_strokes.test.mjs`（消しゴム）、`tests/editor_items_paint.test.mjs`（古い UI の枠）、`tests/studio_session.test.mjs`、`tests/studio_selection_bar.test.mjs`、`tests/studio_timeline_model.test.mjs`、`tests/studio_timeline_actions.test.mjs`、`tests/pano_paint_engine.test.mjs`（`immutableStrokes`）、`tests/browser/studio_paint_grab.spec.js`（回転のハンドルを含む。古い UI の同じ関数は `tests/editor_pointer_input.test.mjs`、`tests/browser/paint_regions.spec.js`） |
| エディタの中の Camera の見せ方（Camera のボタン、Camera のカード、3D の見た目） | — | 3D の見た目は `web_src/studio/camera_marker.js`（形・塗り・見え方）、描くのは `web_src/studio/stage_overlay.js`。Camera のボタンの押せる・押せないと tooltip、Camera を視点へ持ってくる書き方は `web_src/studio/camera_ui.js`（`cameraButton`・`cameraToView`。Lane への書き込みは `web_src/studio/camera_state.js` `moveCameraPose`）、Undo の 1 段にするのは `web_src/studio/session.js` `cameraToView`、今の視点を渡すのは `web_src/studio/editor.js`（`stage.pose()`）、ボタンは `StudioToolRail.vue`。Camera を動かした後に Output の小窓を開くのは `StudioOutputPreview.vue` の `reveal`（`StudioEditor.vue` が Camera の合図の数を渡す）。ファインダーの合図は `web_src/components/studio/StudioCameraCue.vue`。打った瞬間の知らせは（未実装） | `tests/studio_camera_marker.test.mjs`、`tests/browser/studio_select.spec.js`、`tests/studio_camera_ui.test.mjs`、`tests/studio_session.test.mjs`、`tests/browser/studio_camera_button.spec.js` |
| 新しい UI が状態の Camera を読む所と書く所（Camera の無い状態を既定の Camera として読むこと、Timeline frame での値、書くときに既定の Camera を置くこと、Frame 表示・Camera のボタン・ギズモからの書き込み） | — | `web_src/studio/camera_state.js` `cameraOf`・`cameraAt`・`editableCamera`・`moveCameraPose`・`setCameraLanes`（既定の Camera の値は `docs/scene-state-v2.md` が持ち、記録の規則は `pano_editor_state.js` `setCameraShot`・`pano_timeline.js` `setLaneValue` が持つ） | `tests/studio_camera_state.test.mjs`、`tests/studio_camera_ui.test.mjs`、`tests/studio_stage_objects.test.mjs`、`tests/studio_inspector_actions.test.mjs`、`tests/browser/studio_camera_tab.spec.js` |
| 選んだ行が何の物か（`"camera"`・`"scene"`・自分の Sticker の id・上流の作業コピーの id から、その物を探すこと） | — | `web_src/studio/row_object.js` `findSticker`・`keyframeOwner`。下の中央のバー（`selection_bar.js`）・ステージ（`stage_objects.js`）・インスペクタ・選択を保つ所（`session.js` `keepSelection`・`selectObject`）は、どれも上流の作業コピーも探す（「上流の物の編集」）。 | `tests/studio_row_object.test.mjs`、`tests/studio_selection_bar.test.mjs`、`tests/studio_inspector_model.test.mjs`、`tests/studio_session.test.mjs` |
| Camera タブの画面（フレームの収め方、枠の外、辺の目盛り、無効にする部品） | — | 収め方と目盛りの計算は `web_src/studio/frame_layout.js`（`frameRect`・`rulerStrips`（目盛りの長さと置き場所）・`rulerMarks`・`rulerDragValue`、目盛りの縮尺と長さと値の幅 `CAMERA_RULERS`）、画面の部品は `web_src/components/studio/StudioCameraFrame.vue`（枠と枠の外）・`StudioEdgeRuler.vue`（辺の目盛り）、無効にする部品は `StudioToolRail.vue` の `cameraTab`・`StudioViewButtons.vue` の `resetDisabled`・`frameTip`・`frameDisabled`（Panorama モードの Frame Selected）・`StudioNavWidget.vue` の `disabled`。辺の目盛りは Camera のカードの行（`frame_layout.js` `cameraRulers`）で、編集とリセットはインスペクタと同じ `inspector_actions.js` `applyInspectorEdit`（`rulerEdit`、Roll だけのリセットは行 `roll`）。ステージへの組み込み（タブ、フレームの中の絵、目盛り、Camera タブで Output の小窓を畳むこと）は `StudioEditor.vue`、タブと Camera の動きを状態に書くのは `web_src/studio/editor.js`（書き方は `web_src/studio/camera_state.js` `moveCameraPose`）、描くのと操作は `web_src/studio/stage.js`（Frame 表示は `stage_view.js` `cameraFrameView`、Panorama モードの ERP は `pano_three_view.js` `renderLiveErp`） | `tests/studio_frame_layout.test.mjs`、`tests/studio_stage_view.test.mjs`、`tests/studio_inspector_actions.test.mjs`（Roll だけのリセット）、`tests/browser/studio_camera_tab.spec.js`、`tests/browser/studio_camera_wired.spec.js`、`tests/browser/studio_camera_fixes.spec.js`、`tests/browser/studio_camera_select.spec.js`（選んだ物のギズモ、バーとフレームの下の余白）、`tests/studio_stage_objects.test.mjs`（Camera タブで押したときの順） |
| Add のアイコンと、Add とドロップの流れ（選ぶファイル、画像の Sky / World の二択とその取り消し、置く間、失敗の知らせ）、ドラッグ中の印の見た目とラベル | — | 流れは `web_src/studio/add_files.js` `createAddFiles`（下の部品 `pano_sticker_file_import.js` のアップロード、`pano_file_3d.js` の経路）、ファイルを選ぶ画面は `web_src/components/studio/StudioEditor.vue`、二択は `web_src/components/studio/StudioPlaceChoice.vue`、ドラッグの事象は `web_src/studio/drop_input.js` `createDropInput`、印とラベルを描くのは `web_src/components/studio/StudioDropMarker.vue`（印の形と色、ラベルの置き場所 `dropLabelPlace`、着く所は `web_src/studio/landing.js`、`docs/space-and-view.md`）。読み込み中のガイドと現れる動きの時間は `web_src/studio/load_reveal.js` `createLoadReveal`（置いた 3D ファイルを知らせるのは `add_files.js`、中身の不透明度に掛けるのは `web_src/studio/editor.js`、光の帯を描くのは `stage_overlay.js`） | `tests/studio_add_files.test.mjs`、`tests/studio_landing.test.mjs`、`tests/studio_load_reveal.test.mjs`、`tests/browser/studio_add.spec.js` |
| ノードの入力から来た物（`port` の Sticker、上流の Scene の層、上流の背景）をステージとタイムラインに出すこと | — | `port` の Sticker の絵と 3D の素材は `web_src/studio/port_media.js` `createPortMedia`（下の部品 `pano_port_picture.js` `createPortPicture`、`space/content_requests.js` `stickerContentRequest`）、上流の層は `web_src/studio/upstream.js` `createStudioUpstream`（下の部品 `pano_upstream_layers.js` `createUpstreamLayers`）、上流の背景は `web_src/pano_background_choice.js` `chooseBackground`（規則は `docs/timeline-ui.md` の「どの背景を出すか」の行）、ステージに描く物にまとめるのは `web_src/studio/stage_content.js` `stageContent`（深度のグリッドの色は `depthColor` で受け、知らせは `stageDepthNotice`。色の動画は `pano_depth_color.js` `createDepthColors`）、つなぐのは `web_src/studio/editor.js`。`port` の Sticker の Pose handoff は、規則と共有の部品が `docs/editor-interaction.md` の「Pose handoff の表示と記録」の行、新しい UI で当て直す時と書き方は `web_src/studio/editor.js`（`executed` の事象、`inspectorContext` の `handoff`）と `web_src/studio/session.js`（`record`・`step`・`stateText`）、リセットとバーの光り方は `web_src/studio/inspector_model.js` `stickerCard`・`stickerChangedRows`。上流の物の編集は次の行 | `tests/studio_port_media.test.mjs`、`tests/studio_session.test.mjs`・`tests/studio_selection_bar.test.mjs`・`tests/studio_inspector_model.test.mjs`・`tests/studio_inspector_actions.test.mjs`（Pose handoff の case）、`tests/browser/studio_pose_handoff.spec.js`、`tests/studio_upstream.test.mjs`、`tests/pano_background_choice.test.mjs`、`tests/studio_stage_content.test.mjs`、`tests/browser/studio_inputs.spec.js` |
| 上流の物の編集（選ぶ・押したときの順、ステージ・ギズモ・インスペクタ・タイムラインでの編集、バーのボタン、Lock、Delete、元に戻す、層の Revert と Restore deleted、上書きを持てない層、書き戻しと掃除、ドラッグの取り消し、Undo・Redo での作り直し） | — | 何をどの記録に書くかは二つの UI が共有する `web_src/pano_upstream.js`（`upstreamEditedRecords`・`upstreamDeletedRecords`・`upstreamRevertedRecords`・`upstreamLayerRevertedRecords`・`upstreamRestoredRecords`・`upstreamPrunedRecords`・`upstreamStickerEditable`、fps の違う記録は `pano_scene_state.js` `rebaseUpstreamRecord`。規則は `docs/studio-node.md` の「上流の Scene」）。書き戻す時と比べる基準（`upstreamBaseline`）を持ち、消す・戻す・掃除を呼ぶのは`web_src/pano_upstream_edits.js` `createUpstreamEdits`（古い UI の `editor/upstream.js` と新しい UI の `web_src/studio/upstream.js` が同じものを使う）。受け取るのは `records()`・`setRecords(records)`・層（`createUpstreamLayers` の `entries`・`current`・`rebuild`）・`fps()` で、タイムラインの作業コピーを入れる `setWorking(key, sceneState)` を持つ。基準は `editor/upstream.js` と `studio/upstream.js` がそれぞれ持っていたものをこの部品に一つにし、`studio/upstream.js` `output` もそれを読む。新しい UI で、上流の行を探すこと（`rowInState`・`keepSelection`・`selectObject`）、Undo の 1 段を積む前（`record`）の書き戻しと掃除、取り消しと Undo・Redo の後の作り直しは `web_src/studio/session.js`（`applyInspector`・`applyTimeline`・`commitGesture`・`cancelGesture`・`toggleLock`・`deleteSelectedObject`・`revertSelected`・`undo`・`redo`）、インスペクタの編集に作業コピー（`view.upstreamWorking`）を渡すのと Undo・Redo の後の描き直しは `web_src/studio/editor.js`（`inspectorEdit`・`historyStep`）、行のリセットは記録を変える道（`inspector_actions.js` `applyInspectorEdit` が `upstreamRevert` を返し、`session.js` `applyInspector` がその Lane の上書きを記録から外す）、押したときの順とハンドルとギズモは `web_src/studio/stage_objects.js`、上流の World の物のガイドとギズモの中心は `web_src/studio/world_guides.js` `worldGuideItems`、回る中心と Frame Selected の球は `web_src/studio/editor.js` `selectionOf`（`stage_content.js` `stickerFrameSphere`）、バーのボタンは `web_src/studio/selection_bar.js`（「元に戻す」が押せるかと上書きの色の印 `overridden`。上流の物は `pano_upstream.js` `upstreamStickerOverridden`、入力の物は `inspector_model.js` `stickerChangedRows`（行の `atDefault`）を読み、押したときに戻す行も `session.js` `revertSelected` が同じ関数で決める）、タイムラインの点は `timeline_model.js` の `overridden`（同じ `upstreamStickerOverridden` を読む）、上書きの色の値 `--studio-override` は `web/pano_studio.css`（行の点 `.pano-studio-row-mark`・`.pano-studio-tl-override` とバーのボタンが読む）、選んだ枠の破線は `web_src/studio/world_guides.js` `UPSTREAM_SELECTED_DASH` を `stage_objects.js` の `overlay`（`dashed`）と `stage_overlay.js` が使う、見出しの横の名前は `web_src/studio/inspector_model.js`（言葉は `timeline_model.js` `upstreamFromLabel`）。タイムラインの操作が作業コピーの写しを返すこと（`timeline_actions.js` `applyEdit` の `upstream`）は今ある | `tests/test_upstream_editor_parity.py`（新しい UI の道で書いた記録を `_override_layers` が当てた層と作業コピーを比べる case を含む）、`tests/pano_upstream_edits.test.mjs`（行のリセットの後に確定しても何も書かないこと、を含む）、`tests/studio_session.test.mjs`、`tests/studio_selection_bar.test.mjs`、`tests/studio_stage_objects.test.mjs`、`tests/studio_world_guides.test.mjs`、`tests/studio_inspector_model.test.mjs`、`tests/studio_inspector_actions.test.mjs`、`tests/studio_timeline_actions.test.mjs`、`tests/browser/studio_inputs.spec.js`（読み取り専用を確かめる場面を、編集して閉じた後の `state_json` を確かめる場面に変える） |
| 読み込み中と空の画面、一行の知らせとその種類 | — | どれを出すかと種類は `web_src/studio/notice_line.js` `topLine`（シェルの `StudioEditor.vue` が呼ぶ）、画面は `web_src/components/studio/StudioNotice.vue`。開く前に three.js のチャンクと stylesheet を読んでおくのは `web_src/pano_editor_view.js` `preloadEditorView`・`web_src/studio/editor.js` `preloadStudioEditor`、いつ始めるかは `web_src/editor_choice.js` `createStudioPreloader`（組み立ては `web_src/main.js`）。Add とドロップの失敗と 3D ファイルの読み込み中は `web_src/studio/add_files.js` が `ui` に書く。上流の警告と、経路が答えた後に three.js が 3D ファイルを読めないときの知らせは、出す元がまだ無い（未実装） | `tests/studio_notice_line.test.mjs`、`tests/editor_choice.test.mjs`、`tests/browser/studio_editor.spec.js` |
| Preview のウィンドウ（IMAGE・VIDEO・PANO_SCENE の source と何もつないでいないとき、Space、背景の範囲と `bg_color`、Scene とノード上の VIDEO の再生の位置の引き継ぎとノード上の表示・再生を止めること。視点の規則は `docs/space-and-view.md`） | — | 開くのと閉じるのは `web_src/studio/preview_window.js` `openPreviewWindow`（Scene の背景と `bg_color`、IMAGE・VIDEO の背景の範囲は `pano_background_choice.js` `chooseBackground`（規則は `docs/timeline-ui.md` の「どの背景を出すか」の行）、ノード上の Scene のビューアを止めるのは `pano_node_bridge.js` `sceneViewerWindowOpened`・`sceneViewerWindowClosed` と `pano_scene_viewer_node.js` の `rest`、ノード上の VIDEO を止めて引き継ぐのは `pano_preview_previewnode.js` の runtime の `windowOpened`・`windowClosed`。Scene の層は `upstream.js` `createStudioUpstream` と `stage_content.js` `stageContent` で読み取り専用に描く（Preview に編集は無い）。VIDEO と Scene の背景の再生は `pano_media_session.js` `createBackgroundVideo`、ループのスイッチの記憶は `timeline_actions.js` `readLoopSetting`・`writeLoopSetting`）、画面と下端の再生の帯は `web_src/components/studio/StudioPreviewWindow.vue`、どちらで開くかは `web_src/editor_choice.js` `previewUsesNewWindow`（`source` に link が無いかを `sourceLinked` で受け、`web_src/main.js` の `previewTakes` が渡す）・`createEditorChooser` の `openPreview`、Scene は `web_src/pano_editor.js` `oldEditorHooks.takeSceneViewer`（組み立ては `web_src/main.js`）。IMAGE・VIDEO のノード上の右上の `Open viewer` は `createEditorChooser` の `previewWindowTakes` を `web_src/pano_editor_extension.js` が `pano_preview_previewnode.js` の `opensWindow` に渡す | `tests/editor_choice.test.mjs`、`tests/pano_editor_extension.test.mjs`、`tests/browser/preview_window.spec.js`、`tests/browser/preview_entry.spec.js`（`web_src/main.js` を本物の frontend と同じ形の MatchType の `source` を持つノードで動かす） |
| タイムラインのバーの並びと、行の頭の並び | — | `web_src/components/studio/StudioTimelineBar.vue`・`StudioTimelineHead.vue`（組み立ては `StudioTimeline.vue`、データは `web_src/studio/timeline_model.js`） | `tests/browser/studio_timeline.spec.js` |
| キーとクリップボードの事象をエディタの外へ出さない | — | `web_src/studio/key_guard.js` `guardEditorKeys`（組み込みは `web_src/studio/editor.js`） | `tests/studio_key_guard.test.mjs`、`tests/browser/studio_keys.spec.js` |
| ショートカットの一覧（中身、エディタのキーの表、出し方と閉じ方） | — | キーの表と一覧の中身は `web_src/studio/shortcuts.js`（`EDITOR_KEYS`・`editorKeyAction`・`shortcutGroups`）、画面は `web_src/components/studio/StudioShortcuts.vue`、「?」のボタンは `StudioNavWidget.vue`、開く・閉じるの状態（`view.shortcuts`）と「?」のキーは `web_src/studio/editor.js`、置き場所は `StudioEditor.vue` | `tests/studio_shortcuts.test.mjs`、`tests/browser/studio_session.spec.js` |
| ツールチップ（出す部品、出るまでの時間と消え方、置く側と反転、ショートカットの印、ドラッグ中とキーボードのフォーカス） | — | 置き場所の計算・置く側の表・ショートカットの切り出し・時間の値は `web_src/studio/tooltip.js`（`placeTip`・`tipSide`・`splitTipKeys`・`TIP_SIDES`・`TIP_DELAY`・`TIP_SKIP`・`TIP_GAP`・`TIP_EDGE`）、出し入れと描くのは `web_src/components/studio/StudioTooltip.vue`（`StudioEditor.vue` が一つ置く）。部品は説明を `data-tip` に書く | `tests/studio_tooltip.test.mjs`、`tests/browser/studio_tooltip.spec.js` |
| 閉じ方 | — | `web_src/components/studio/StudioEditor.vue`、Escape を受けるのは `web_src/studio/stage.js`（ドキュメントの捕捉で受け、欄のドラッグの Escape は先に欄が取る）、枠の外のクリックは `web_src/studio/backdrop.js` `createBackdropClose`、閉じるのと保存は `web_src/studio/editor.js`（書く文字は `web_src/studio/session.js` `stateText`、下の部品 `pano_editor_state.js` `editorStateWrite`）、Escape の順の 3 段（Set orbit center の待ち）は `web_src/studio/stage.js`、4 段は `web_src/studio/add_files.js` `escape`、5 段と 6 段は `web_src/studio/editor.js` `onEscape`（`view.shortcuts`、`view.paint`）、7・8 段は `session.js` `escape`、下の部品 `pano_node_bridge.js`。Escape の順の表の 2 段（地面を拾う待ち）は、その部品がまだ無い（未実装） | `tests/studio_backdrop.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_ui.spec.js`（欄のドラッグの Escape）、`tests/studio_session.test.mjs`、`tests/browser/studio_session.spec.js` |
| Preview のウィンドウの画面 | — | `web_src/components/studio/StudioPreviewWindow.vue` | `tests/browser/preview_window.spec.js` |
| Output の小窓（折りたたみとその動き、大きさ、記憶、出力の形の一行。一行は `studioOutputSize` と `studioNodeStatus` の書き方を呼び、`megapixels`・`multiple` は `web_src/studio/editor.js` がノードから渡す） | — | `web_src/components/studio/StudioOutputPreview.vue`、大きさと記憶は `web_src/studio/layout.js` `outputWindowSize`・`loadOutputWindow`・`saveOutputWindow`、Camera タブで畳んで触れなくするのは `outputWindowView`。中の絵の canvas は `StudioEditor.vue` が小窓の slot に置き、描くのは `web_src/studio/stage.js`（Frame モードはステージの canvas の隅に描いて `createImageBitmap`、Panorama モードは `pano_three_view.js` `renderLiveErp`。描き方は `docs/threejs-spark-integration.md`）。描く入力の作り方は `web_src/studio/output_picture.js` `outputFrameInput`・`outputErpInput` で、Panorama Studio のノード上の表示と共有する（`docs/studio-node-surface.md`） | `tests/studio_stage_view.test.mjs`、`tests/browser/studio_editor.spec.js`、`tests/browser/studio_camera_wired.spec.js`、`tests/browser/studio_camera_fixes.spec.js`、`tests/browser/studio_output_line.spec.js`（出力の形の一行） |

## 目指すもの

画像か動画を 3D に持ち上げた空間を Panorama Studio で開き、**見て回り、物を置き、撮る**。撮った絵や動画は、下流の生成 AI で
リファインする。画面は、この「見る・置く・撮る」を何より気持ちよくする。

- 置く：物（Sticker）を空間に置き、位置・向き・大きさを合わせる。モデリングはしない。
- 動かす：置いた物を時間に沿って動かせる（歩くモーションの人を道に沿って進ませる、など）。凝ったアニメーションの道具にはしない。
- 使う人は、画像や動画の編集に慣れていない ComfyUI の利用者を主に考える。説明を読まなくても分かることを一番にする。プロの使い方は、
  近道（ショートカット）と細かい設定で足し、初めての人の道をふさがない。
- 撮ったものを空間に戻す流れは、今は Sky だけでできる。3D の切り抜き（Box、ADR 0045）は、後から足すための場所だけを取る。

## 画面の区画

一つの画面に全部を置き、選んだ物と今している操作に合わせて出す部品を変える（作業ごとの段は作らない）。ヘッダーは置かない。

画面は旧エディタと同じモーダルで、全画面にはしない。数は `docs/design.md` の「新しい UI の見た目」の「形と重なり」が持ち、ここに写す：

| 対象 | 値 |
|---|---|
| 枠の大きさ | 幅 `max(720px, 80vw)`・高さ `max(520px, 82vh)`、最大で幅 `96vw`・高さ `94vh`。画面の真ん中 |
| 枠の後ろ | 黒の 70% で暗くする（旧エディタのスクリムと同じ） |
| 枠 | 一枚の地で全体を包む。角丸 16px、内側の余白 8px |
| 窓 | ステージの窓（左上）、インスペクタの窓（右、幅 320px、上から下まで）、タイムラインの窓（ステージの窓の下だけ）。間 8px、角丸 12px、縁の線なし（地の色の段だけで分ける） |
| ステージの上に浮かせる部品 | ステージの窓の端から 16px。地は 85%、縁の線なし |
| 浮かせる部品の内側の余白 | 左の列・右の中央の列・右下・下の中央のバー 6px（下のバーの左は 14px）、左上のタブ 4px |
| 左上のタブ | 3D・Camera を同じ幅 108px（Camera のアイコンと文字の左右に約 16px）・高さ 34px、文字 13px、アイコン 18px |
| タイムラインの高さ | 既定 176px（覚えた高さがあればそれ）。最小 120px、ステージは最小 240px |

| 区画 | 置くもの |
|---|---|
| ステージ | 3D の空間。ステージの窓の端まで使う。下の部品はステージの上に浮かせる |
| ステージの左上 | タブ `3D` / `Camera`（アイコンと文字、二つは同じ幅の segmented control） |
| ステージの左（上下の中央） | 左の列（下の「左の列」） |
| ステージの右（上下の中央） | 視点の操作のつまみ（球・パン・前後）と、その下の Set orbit center と「?」（ショートカットの一覧）を、一つの縦長の浮かせた群にまとめる。つまみと、その下の押すボタン（Set orbit center・「?」）の間に区切りの線を入れる（持ち主の決定、2026-10-30。Set orbit center は ADR 0058） |
| ステージの右下 | ボタンの群（3D タブ：Frame Selected・Reset View・グリッドのボタン。Camera タブ：同じ席に Frame Selected・Reset View（無効）・グリッドのボタン）。グリッドのボタンは状態をアイコンの形で示す（`docs/agents/ux-principles.md` の例外） |
| ステージの右上 | Output の小窓（下の「Output の小窓」）。3D タブで出す。Camera タブでは畳んだ形の一行を出し、開閉だけを無効にする |
| ステージの上端の中央 | 一行の知らせ（左に種類の印。下の「一行の知らせの種類」）と、読み込み中の一行。一度に一つだけ出す。タイムコードは置かない（時刻はいつも出ているタイムラインのバーにある） |
| ステージの下の中央 | 下の中央のバー（下の「下の中央のバー」） |
| 右の列 | インスペクタの窓（幅は `docs/design.md`）。上から下まで伸びる |
| ステージの下 | タイムラインの窓（中身は `docs/timeline-ui.md`、バーの並びは下の「タイムラインのバー」）。ステージの窓の幅だけで、インスペクタの下には入らない |

- 3D タブは空間を自由に見る表示、Camera タブは撮る Camera から出力をそのまま見る表示（下の「Camera タブ」）。Unwrap の表示は無い。
- ステージの上に浮かせる部品は、置き場所が決まっていて、出たり消えたりしても他の部品を動かさない（`docs/agents/ux-principles.md`）。
  タブを切り替えても、部品の席は変わらない。Camera タブで使えない部品は、同じ席に出したまま無効にし、tooltip で理由を示す。
- 視点の操作のつまみの働きと、操作の最中に光る規則は `docs/space-and-view.md` の「視点の操作の部品」が持つ（光り方の見た目は
  `docs/design.md`）。この文書は置き場所だけを持つ。
- タイムラインは既定で開き、高さの決まった領域を取る。ステージとの境界をドラッグして高さを変え、ブラウザごとに覚える。ステージと
  タイムラインの両方に最小の高さを持たせる。畳む操作もあり、畳んでもタイムラインのバー（再生・時刻など）は出す。行が収まらないときは
  タイムラインの中だけでスクロールする。

### 左の列

上から次の 3 つの群を並べ、群の間を空ける。

1. 道具：Cursor・Paint・Mask（Paint と Mask は別の道具。道具の中身は今のペイントの道具と同じ）
2. 足す：Add（画像と 3D ファイル。アイコンは写真と立方体を重ね、立方体を手前にして、重なる所の写真の線を切り取る）・Camera
3. 一番下に Undo・Redo

Clear All は無い。ペイントとマスクを消すのはペイントの道具の Clear paint・Clear mask、Sky の画像を消すのは範囲選択と Delete。

Camera タブでは、Undo・Redo のほかは同じ席に出したまま無効にする（tooltip「Not available in the Camera view」のように理由を示す）。

- 道具の群（Cursor・Paint・Mask）は、いつも一つだけを選んでいる（選んだものを強い塗りで示す）。エディタを開くたびに Cursor。
- Paint か Mask を押すと、その道具になり、物の選択を外す（古い UI と同じ）。下の中央のバーはペイントの道具になる（下の「ペイントの道具」）。
- Camera タブに切り替えると、道具は Cursor に戻る（Camera タブでは描かない）。

### Output の小窓

- 撮る Camera の出力を右上に小さく出す。絵は小窓の端まで広げ、周りに地の縁を残さない（角丸だけで切る）。開閉は一行のバー全体で受ける（3D タブで、バーのどこを押しても開く・畳む。キーボードでは一つのボタンとして Enter。Space はエディタ全体の再生・一時停止なので使わない。持ち主、2026-10-31）。
  状態は右端の矢印の形で示す（`docs/agents/ux-principles.md` の例外）。ポインタを載せたときに変わるのは矢印だけで、バー全体は明るくしない（全体が光るとうるさい）。
- 出力の形の一行：畳んだ形も開いた形も、撮り方と出る大きさの一行をいつも出す（ADR 0051。何が出力されるかを、どのタブでも Camera を選ばずに分かるように）。
  書き方（撮り方のアイコンと名前、出る大きさ、大きさの上限の tooltip）はノード上の表示の一行と同じで、`docs/studio-node-surface.md` の「一行の状態」が持つ
  （`web_src/pano_studio_status.js`）。ただしエディタの一行は見積もり（`studioOutputSize`）だけを使い、直近の実行の大きさは使わない
  （編集した瞬間に実行と合わなくなるため。上流の Scene や素材が大きさに効くときは、実行後のノード上の一行と違うことがある）。
  `megapixels`・`multiple` はエディタを開いたときのノードの値（エディタは模態で、開いている間は変わらない）。一行がその場で変わるのは Camera の変更だけ。
  - 一行は右にそろえ、右端に開閉のボタンを置く（撮り方の アイコン・名前・大きさ・ボタン の順）。畳んだ形の幅は一行の長さに合わせて変わり、右の端は動かない
    （左へ伸び縮みする）。開いた形には見出しの帯を作らない：絵が窓いっぱいに広がり、一行は絵の上端に重ねる。一行の下（絵の上端）には
    薄い暗いグラデーションを敷き、明るい絵の上でも文字がうっすら読めるようにする（持ち主、2026-10-31：見出しの帯は場所の無駄）。
    一行の位置（右端と上下）は、畳んだ形と開いた形で同じにする（開閉で一行が跳ねない）。
  - 一行が変わったときに光らせるなどの合図は出さない（持ち主、2026-10-31：切り替えた本人には分かっている）。
- 既定では畳んでおく。使う人が開けば開き、その状態をブラウザごとに覚える（持ち主の決定、2026-10-30）。
- 左の列の Camera のボタンで Camera が動いたときは、畳んでいれば開く（撮った絵をすぐ見せる。ADR 0058）。大きさは覚えた幅のまま
  （覚えていなければ既定の幅）で、開いた状態を使う人が開いたときと同じに覚える。開いていればそのまま。Camera が動かなかったときは
  開かない。
- 開く・畳むときは、大きさと透明度をすっと変える（値は `docs/design.md` の「動き」）。動いている間、中の絵は描き直さず、
  今の絵をそのまま縮めたり広げたりして見せる。
- 大きさは左下の角をドラッグして変え、ブラウザごとに覚える。最小と最大を持ち、縦横比は出力の比に合わせる。覚えるのは幅で、撮り方や比が
  変わっても幅は変えず、高さだけが変わる（見出しの一行の位置が動かないように）。開いた形の高さは 幅 ÷ 出力の比（一行は絵に重ねるので高さを足さない）。ポインタを載せたときだけ
  角のつまみをはっきり見せる。
- Frame モード：撮る Camera から描いた絵を、その場で出す。描き直すのは Panorama モードと同じく何かが変わったときだけで、小窓の
  大きさの解像度で描く（`docs/threejs-spark-integration.md` の「Panorama モードの ERP の表示」の描き直しの条件と同じ）。
- Panorama モード：撮る Camera の位置から描いた ERP を、開いた絵としてその場で出す。描き方（何かが変わったときだけ、小窓の大きさの低い
  解像度で描き直す）は `docs/threejs-spark-integration.md` の「Panorama モードの ERP の表示」。直近の実行の出力は使わない（編集とずれるため）。
- Camera タブでは絵を使わない（ステージそのものが出力の絵のため）。開いていても畳んだ形にし、その間は中の絵を描かない。畳んだ形の
  一行は 3D タブと同じ席に同じ見た目で出し続け、矢印だけを薄く無効にする（バーを押しても開かず、hover でも変わらない。tooltip は
  「Not available in the Camera view」）。覚えた開閉の状態は書き換えず、3D タブに戻ると前の状態（開いていれば開く）に戻る。

## インスペクタ

インスペクタは選んだ物を映す（ADR 0051。タブを切り替えるたびに中身が丸ごと入れ替わると、何を触っているか分からなくなる）。Camera タブでは
Camera が主役なので、Camera のカードをいつも一番上に出し、物を選んでいるときはその下に選んだ物のカードを足す（持ち主、2026-10-31。
Camera の値の位置は選択で動かない）。

| 選択 | 3D タブ | Camera タブ |
|---|---|---|
| 物を選んでいる | 選んだ物のカード（Camera を選んでいれば Camera のカード） | 一番上に Camera のカード、その下に選んだ物のカード（Camera を選んでいれば Camera のカードだけ。Ground は出ない） |
| 何も選んでいない | Scene のカード：Camera と Ground（下の「種類ごとの中身」） | 同じ（Scene のカード：Camera と Ground） |

- 一番上の行：ノードの名前と、閉じる ✕（下の「閉じ方」）。
- カードの中が収まらないときはスクロールする。スクロールバーは出さない。
- タイムラインで Keyframe を選んでいる間だけ、インスペクタの下端に Easing のパネルを固定して出す（下の「Easing のパネル」）。出ている間は、
  その上の領域だけがスクロールする。

### 行の格子

すべての行を一つの格子に乗せる：名前 ／ 1 ／ 2 ／ 3 ／ Keyframe のポチ ／ リセット（幅は `docs/design.md`）。値の箱とポチとリセットは、
すべての行で縦一列にそろう。

- 値が複数の行（Position の X・Y・Z、Rotation の Y・P・R など）：名前を左、値の箱を 1〜3 列目に置く。値が二つの行は 1〜2 列目に置き、
  3 列目は空ける。
- 値が一つの行（Scale・Opacity・H FOV・Lens など）：名前を左、スライダーを 1〜2 列目、値の箱を 3 列目に置く（DaVinci Resolve と同じ
  並び）。上限と下限のある値に付ける。
- Aspect の行：スライダーは横 16:9 から縦 9:16 までで、中央が 1:1。位置は log₂(比) で等間隔にとり（1:1 が中央、横と縦が対称）、
  3:2・4:3・1:1・3:4・2:3 に目盛りを引く。スライダーは既定の比（両端の 16:9・9:16 と目盛りの 5 つ、合わせて 7 つ）を選ぶためのもので、
  押しても引いても一番近い既定の比にだけ止まり、その間の値を取らない。矢印キーは隣の既定の比へ一つずつ移る。既定の比の間の値や
  スライダーの外の比は、隣の箱に打ち込んで（または箱をドラッグして）決める。箱に入る比は 0.25〜4（`CAMERA_ASPECT_MIN`・
  `CAMERA_ASPECT_MAX`。持ち主は `docs/scene-state-v2.md` の `camera.aspect`）。今の比が既定の比でないときは、つまみをその比の位置に
  出し（スライダーの外の比は端に出す）、次にスライダーを動かすと既定の比に止まる。
- 選ぶ値（範囲など）：segmented control を 1〜3 列目に置く。撮り方のモードだけは格子に乗せず、Camera のカードの見出しのすぐ下に
  絵の付いた 2 枚の札で置く（下の「Camera のカード」）。
- 使わない行（撮り方のモードで効かない行など）は、隠さずに灰色にして触れないようにする。行の位置は動かさない。

### 欄

- 値の箱はふだん地の色を持たず、ポインタを載せた欄にだけ地の色を出す。そのときカーソルは左右の矢印にする。
- 欄そのものを左右にドラッグすると値が変わる。ドラッグの間はカーソルを消し（ポインタロック）、画面の端でも止まらない。Shift で
  1/10 の細かさ。動かさずに放すと、その欄に文字で入力できる。名前の部分はドラッグしない。
  - ポインタロックが取れない（ブラウザが断った、ページがフォーカスを持っていない）ときは、カーソルを出したまま同じドラッグで値を変える
    （画面の端で止まる）。
  - ドラッグ中の Escape は、ドラッグを取り消して値を押す前に戻す（エディタは閉じない）。ブラウザが Escape でポインタロックを解いたときも
    同じに扱う。
- 箱の中は左にそろえる：軸の文字（X・Y・Z など）、値、単位（°・% など）の順に左から並べる。右にそろえると単位の幅のぶん値の位置が
  行ごとにずれるため、単位があってもなくても値の左端が縦にそろうようにする（持ち主の決定、2026-10-30）。
- 文字は大文字の高さで上下の中央にそろえる（`docs/design.md`）。

### リセットと Keyframe のポチ

- リセット：各行の右端。押すとその行の値だけを既定に戻す。上流から受け取った物では上流の値、ノードの入力から来た物（`port`）では入力の
  値に戻す。Pose handoff を当てて出している `port` の Sticker（Pose handoff の置き方が Sticker の置き方と同じとき）では、Pose handoff
  が渡す行（`sky` の Rotation・FOV、`world` の Position・Rotation・Scale）は、その行の Lane のどれも `handoff_overrides` に無いときが
  戻す先にある（値ではなく、上書きの記録にあるかで決める）。押すと、その行の Lane を `handoff_overrides` から外して Pose handoff の値に
  戻す（`pano_port_handoff.js` `revertHandoffLane`）。上書きしていない行のリセットは何もしない。Pose handoff が渡さない行（Opacity、
  Animation）は今までどおり Lane の既定で決める。今が戻す先と同じ行では、隠さずに無効にする。押すと Undo の 1 段で、Keyframe のある Lane では記録の規則に従う
  （`docs/timeline-ui.md` の「記録の規則」）。
- Keyframe のポチ：値の箱とリセットの間に置く。どの行に置くか、三つの状態、押したときの動き、無効になる条件は `docs/timeline-ui.md` の
  「インスペクタの Keyframe のポチ」が持つ。この文書は置き場所だけを持ち、形と色は `docs/design.md`。
- 上流から受け取った物で、上書きした行には、名前の横にタイムラインと同じ小さな点を、上書きの色で付ける（`docs/design.md` の
  「新しい UI の見た目」の「色」の桃、`--studio-override`）。

### 種類ごとの中身

インスペクタに出すカード（どちらのタブでも同じ。Camera タブでは上の表のとおり、その上に Camera のカードを置く）。

| 選んだ物 | カード |
|---|---|
| 空に貼った画像（Sky） | 見出し（Sky のアイコンと名前）、Rotation（Y・P・R）、FOV（H・V）、Opacity |
| World に置いた画像の板 | 見出し（World のアイコンと名前）、Position（X・Y・Z）、Rotation（Y・P・R）、Scale、Opacity |
| World に置いた 3D | 上と同じ。アニメーションを持つときは、その下に小見出し Animation を置き、Clip（1〜3 列目の選択）と Speed |
| Camera | Camera のカード（下の「Camera のカード」） |
| 複数選択 | 見出しに数とアイコン（例：`3 stickers`）だけ。操作は下の中央のバー |
| ペイントのまとまり | 見出し `Paint` だけ。操作は下の中央のバー。Paint・Mask の道具を選んでいて物を選んでいないときも、このカードを出す |
| 何も選んでいない | Scene のカード：上に Camera のカード（下の「Camera のカード」）と同じ中身、その下に Ground（地面の高さの値、`Set ground` のボタン、リセット）。`Set ground` は値の 2 列目と 3 列目を使う（1 列では名前が収まらない）。地面の自動推定のボタンは、置くときに席を決め直す |

- 空に貼った画像（Sky）の FOV の行のリセットは、置いたときの大きさに戻す：H は `NEW_STICKER_HFOV`（30°、`pano_space.js`）、V は画像の
  縦横比から求めた値（縦横比を崩さない）。上流から受け取った物とノードの入力から来た物（`port`）は、上の「リセットと Keyframe のポチ」のとおり。
- 土台の 3D（`world` の入力、`docs/studio-node.md`）は選べないので、カードは無い。土台を合わせるのは地面の高さだけ。
- 画像の側のレンズの値（Sky の画像の `curve`、World の物の `lens`）はインスペクタに出さない。往復（Pose handoff）が撮った Camera の値を
  入れ、描くときに逆に戻して貼る（ADR 0042、`docs/scene-state-v2.md`）。
- `Set ground` を押すと、次の一回のクリックだけ地面にしたい面を拾う状態になり、カーソルを地面を拾う形に変える。Escape で取り消す。
  拾った点の高さの規則は `docs/space-and-view.md`（ADR 0046）。

### Camera のカード

3D タブで Camera を選んだときと、何も選んでいないとき（どちらのタブでも。Scene のカードの上の段）と、Camera タブではいつも（一番上）に出す。Camera はいつも一台あるので、無いときの表示は無い（撮る Camera の規則は
`docs/studio-node.md`）。行の並びはどちらの撮り方でも同じで、効かない行は灰色にして触れないようにする（上の「行の格子」）。

撮り方のモード（Mode）は、カードの見出しのすぐ下に、横に並べた 2 枚の札で選ぶ（見本 `design-drafts/mode-3.html` の M1）。札には
出来上がる絵の形の小さな絵（Panorama は 2:1 の展開図の格子、Frame は枠で切り取った 1 枚と中央の小さな十字）と、その下に名前を出す。
説明の文は付けない。押すと撮り方が変わる。行の名前（Mode）、リセット、Keyframe のポチは持たない。見た目の値は `docs/design.md` の
「新しい UI の見た目」。

| 行 | Panorama モード | Frame モード |
|---|---|---|
| Range | 360° / 180° | 灰色・触れない |
| Aspect | 灰色・触れない | スライダー（上の「行の格子」） |
| H FOV | 灰色・触れない | スライダー |
| Lens | 灰色・触れない | スライダー（κ） |
| Position | X・Y・Z。リセットは原点（0, 0, 0）へ | 同じ |
| Rotation | Y・P・R。リセットは向き 0 へ。Panorama モードの Yaw は ERP の正面の向き | 同じ |

- 「原点に戻す」の専用のボタンは置かない。Position と Rotation の行のリセットで戻す。
- 出力の大きさ（`megapixels`・`multiple`）はノードの上の設定で、Camera のカードには出さない（`docs/studio-node.md`）。

### Easing のパネル

- タイムラインで Keyframe を選んでいる間だけ、インスペクタの下端に置く。選んでいないときは消す。
- 中身：見出し `Easing` と既定に戻すボタン、プリセット 5 つ（Hold・Linear・Ease in-out・Ease in・Ease out）の segmented control
  （アイコンだけを出し、名前は tooltip に出す。名前の文字はパネルの幅に収まらないため）、
  縦横 1:1 の曲線のグラフ、ベジェの 4 つの値の入力欄（例 `0.42, 0, 0.58, 1`。選んでコピーでき、貼り付けもできる）。
- グラフはいつも 1:1。上の領域が 5 行分（約 180 px、値は `docs/design.md`）より狭くなるときは、グラフの一辺を縮めて 1:1 のまま小さくする。
- 出し方：パネルの高さを伸ばして出さず、下端に重ねて透明から出す（値は `docs/design.md`）。上の領域の下の余白は動かさずに一度で取る。
- 選んだ Keyframe の Easing が混ざっているときの表示と、変えたときの規則は `docs/timeline-ui.md` の「Easing」。

## 下の中央のバー

ステージの下の中央の決まった場所に、一本のバーとして固定する。Cursor の道具のときは選んだ物のバー、Paint・Mask の道具のときは
ペイントの道具を出す（二つは同時に出ない。下の「ペイントの道具」）。Cursor の道具で何も選んでいないときは出さない。Camera タブでも 3D タブと同じに出す（ADR 0051。Camera タブの道具はいつも Cursor）。ただし Camera を選んでいるときの
Camera のバーは、Camera タブでは出さない（ADR 0055。下の「Camera タブ」）（ビューの上に重ねる情報は状況で出し入れしてよい。`docs/agents/ux-principles.md`）。

- 左端に、選んだ物のアイコン（Sky / World の印、Camera、Paint）と名前。使う人が名前を付ける物（空に貼った画像、World の画像の板と 3D）の
  名前の欄は、どの名前でも同じ決まった幅（`docs/design.md` の「新しい UI の見た目」の「大きさ」）を取り、名前を左にそろえる。収まらない名前は
  末尾を「…」で切り、全部の名前を tooltip に出す（切るのは見た目だけで、読み上げる名前は切らない）。バーの幅は選んだ物の種類（並ぶボタン）で
  変わってよいが、名前の長さでは変わらない（`docs/agents/ux-principles.md` の「変わる文字の幅は先に確保する」）。名前が種類で決まっている物
  （Camera は `Camera`、ペイントのまとまりは `Paint`）は名前が変わらないので、決まった幅を取らず、名前の欄を文字の幅（max-content）に縮める
  （持ち主、2026-10-31）。どちらにするかは種類で決まり、`selection_bar.js` `selectionBar` の `fixedName` が持つ（幅は `docs/design.md`）。
  ペイントの道具のバーの名前の欄はこれと別の値のままにする（`Paint` と `Mask` を同じ幅にし、道具を切り替えてもボタンを動かさないため。
  下の「ペイントの道具」）。
- ギズモの切り替えは Move・Rotate・Scale のアイコンで並べ、`1`・`2`・`3` のキーでも切り替える（tooltip に「Move (1)」のように出す）。

| 選んだ物 | 並び（／は群の区切り） |
|---|---|
| 空に貼った画像 | 前面へ・背面へ ／ Duplicate・Replace ／ Lock・Delete |
| World に置いた画像の板 | Move・Rotate・Scale ／ Duplicate・Replace ／ Lock・Delete |
| World に置いた 3D | Move・Rotate・Scale ／ Duplicate・Replace ／ Lock・Delete |
| Camera | Move・Rotate ／ Lock（3D タブだけ。上の段落） |
| ペイントのまとまり、複数選択 | 前面へ・背面へ ／ Lock・Delete |
| ノードの入力から来た物（`port`）、上流から受け取った物 | 上の並びに「元に戻す」を足す（その物の全部の値を元の値へ。`port` の Back to Initial と上流の Revert を一つにしたもの） |

- ノードの入力から来た物と上流から受け取った物の「元に戻す」は、戻すものがあり、その物を変えられるとき（ロックしていない、読み取り
  専用でない、上書きを持てない層の物でない）だけ押せる（持ち主の決まり「元と同じなら押せない、変えたら色を付ける」、2026-11-03）。押せる
  ときはアイコンを上書きの色で描き（`docs/design.md` の「色」の桃）、押せないときは色を付けず隠さずに無効にする。
  - 上流から受け取った物で戻すものがあるのは、その層の記録にその物の id の記録があるとき（どのフィールドでも、置き方によらない。
    押して外れるものと同じ。`pano_upstream.js` `upstreamStickerOverridden`、`upstreamRevertedRecords` の全部を外すときの判定もこれ）。
    値を手で上流と同じ値に戻しても記録は残るので、押せるまま（点も残る）。記録を外すのは「元に戻す」と各行のリセット。タイムラインの
    行の点も同じ判定で付く。インスペクタの行の点は行ごと（その行の Lane の上書き）なので、ロックや目だけの上書きでは行の点は出ないが、
    「元に戻す」は押せる。
  - ノードの入力から来た物で戻すものがあるのは、インスペクタのどれかの行が、その行のリセットの戻す先に無いとき（`inspector_model.js` の
    行の `atDefault`。行のリセットが押せるのと同じ）。Pose handoff を当てて出している `port` の Sticker では、Pose handoff が渡す行は
    下の「リセットと Keyframe のポチ」の規則で決まる（`handoff_overrides` にあるかどうか）。バーの光り方・押して戻す行・インスペクタの
    行のリセットは、同じ `handoff`（`inspector_model.js` `stickerChangedRows` と `stickerCard` が受け取る）を読む。Pose handoff が
    置き方を変えて出しているときも同じ規則で決め、保存した Sticker と見せている Sticker の違いでは決めない。
  - tooltip は次の先のものを出す：上書きを持てない層の物（キーが `#` で始まる層）「Inherited only: edit it in its own Panorama Studio」、
    読み取り専用「Back to source · Read-only」、ロックしている「Back to source · locked」、戻すものが無い上流の物「Back to source · as
    upstream has it」、戻すものが無い入力の物「Back to source · as the input has it」、押せるとき「Back to source · every value back to the
    upstream's」（入力の物は「… to the input's」）。この文言はここだけが持つ。

- 空に貼った画像の前面へ・背面へは、重なった二つの角丸の四角のアイコンで示す。動かす物（選んだ画像）を塗りの四角にし、前面へは
  塗りの四角を手前に、背面へは塗りの四角を奥（線だけの四角の後ろ）に描く（形は `docs/design.md` の「新しい UI の見た目」の「アイコン」）。
  押すと一番前・一番後ろへ移すので、tooltip は「Bring to front」「Send to back」。ペイントのまとまりも同じボタン。
- 前面へ・背面へが並べ替えるのは、自分の Sky の層の物の全体（空に貼った画像、ストロークのまとまり、ラスタ。共通の `z_index` の軸、
  `docs/scene-state-v2.md` の「Sky の重なり順」）。選んだ物を全体の一番前（後ろ）へ移し、全体に描く順で 0 から番号を振り直す（古い UI の
  `web_src/editor/selection.js` `bringSelectedToFront`・`sendSelectedToBack` と同じ）。すでに一番前（後ろ）なら何もしない。変えたら Undo の 1 段。
  上流の層の物は並べ替えに入らない（自分の Sky の下にある）。空に貼った画像を選んで押したときも同じ規則で、ペイントとの前後を含めて並べ替え、
  ペイントのまとまりの `z_index` も振り直す（`CONTEXT.md` の Sticker と同じ共通の軸。持ち主から任された main session の決定、2026-10-31）。
- 表示・非表示の切り替えはバーに置かない（タイムラインの目のアイコン、`docs/timeline-ui.md` の「表示（目のアイコン）」）。
- Lock は押すたびに切り替わるボタンで、状態を鍵のアイコンの形で示す（`docs/agents/ux-principles.md` の例外）。
- Camera は消せないので Delete を置かない。Delete キーを押したときは一行の知らせ「The camera can't be deleted」を出す。
- 空に貼った画像にはギズモを出さない。ステージの上で、本体のドラッグで向き、四隅のハンドルで画角（縦横比を保つ）、辺のハンドルで
  縦か横の画角だけ、回転のハンドルで Roll を変える（今の動きのまま、新しい UI でも変えない。今の動きは `web_src/editor/pointer_input.js` の
  `startMove`・`startScale`・`startAxisScale`・`startRotate` にあり、当たりの順は下の「ペイントのまとまり」の押したときの順。古い UI の
  文書には独立した節が無いので、切り替えのときにこの文書へ規則として書き起こす。見た目の値は `docs/design.md`）。
  ただし回転のハンドルの Shift の止め方は、古い UI の 45° ではなく、ギズモの Rotate と同じ `ROTATE_SNAP_DEG` の倍数（絶対の Roll）にする。
  選んだ空の画像の枠とハンドルは、World の物の選択の黄ではなく氷の色で描く（ドロップの Sky の印と同じ色。Sky と World の行き先を色で
  見分けられるようにする。値は `docs/design.md` の「新しい UI の見た目」）。
  上流から受け取った物の選んだ枠（空の画像の枠、World の板と 3D のガイド）は破線で描き、自分の物は実線のまま。ハンドルとギズモは
  変えない（形は `docs/design.md` の「形と重なり」。「上流の物の編集」の「見せる」）。

### ペイントのまとまり

Cursor の道具で、自分のペイントを古い UI と同じ単位でつかみ、動かし、大きさを変える（持ち主の決定、2026-10-31）。ペイントは Sky の層に
属し、時間で変わらない（`CONTEXT.md` の Sky）。状態の形は `docs/scene-state-v2.md` の `painting`。

- つかむ単位（まとまり）は次の二つで、古い UI と同じ。
  - ストロークのまとまり：`painting.groups[]` の一つと、同じ `actionGroupId` を持つ `painting.paint.strokes[]`。今の筆はストロークごとに新しい
    `actionGroupId` を付ける（`web_src/pano_paint_strokes.js` `freehandStrokeRecord`・`lassoFillStrokeRecord`）ので、ふつうは一本のストロークが一つのまとまり。
  - ラスタ：`painting.raster_objects[]` のうち `layerKind` が `paint` の一つ（消しゴムがストロークのまとまりを画素に変えたもの）。
  - マスク（`painting.mask` のストロークと、`layerKind` が `mask` のラスタ）はつかまない（古い UI と同じ）。マスクの上の押下は、その奥の物へ通る。
  - 上流の層のペイントはつかまない（ペイントの上書きは `painting_visible` だけ。下の「上流の物の編集」の「作らないもの」）。
  - まとまりの数え方は `pano_paint_strokes.js` `syncPaintGroups` を通した `groups` による：どの項目にも属さないストローク（`skyPaintLayers` が
    一番手前に描く分）には、一番手前の `z_index` で項目を足し、ストロークの無い項目（`strokeGroupFrame` が `null`）は除く。当たり・枠・
    並べ替えはこの数え方で行う。状態に書くのは、編集（ドラッグ、前面へ・背面へ、Lock、Delete）が状態を変えるときだけで、ホバーや押下だけでは書かない。
- 選択の形：まとまりの選択は、選択の行（`session.js` の `selection.row`。今は `"camera"` か Sticker の id）に、描く層と同じ id で入れる：
  ストロークのまとまりは `paint_group:<actionGroupId>`、ラスタは `raster:<id>`（`pano_paint_layers.js` `skyPaintLayers` の層の id と同じ）。
  この形を読む所：`selection_bar.js` `selectedKind`（種類 `paint`）・`selectionBar`、`session.js` `keepSelection`（その項目が状態にある間は
  保つ）・`inspectorSelection`・`deleteSelectedObject`・`toggleLock`・`orderSelected`、`editor.js` `selectionOf`（ステージの選択：Sky の物と同じく
  球を持たない。回る中心と Frame Selected は `docs/space-and-view.md`）、`stage_objects.js` の押下・ホバー・選んだ枠。
- タイムライン：まとまりには自分の行が無い。まとまりを選んでいる間、タイムラインのペイントの行（`PAINTING_ROW`）を選んだ形で出す
  （持ち主から任された main session の決定、2026-10-31）。行の選択の値は `paint_group:`・`raster:` のまま変えず、行の見た目だけが
  「`selection.row` が `paint_group:` か `raster:` で始まる」ことからペイントの行を選んだ形にする。ペイントの行を押して選ぶ働きは今のまま。
- 押したときの順（Alt なしの左ボタン。上から最初に当たる一つ）。この順は空に貼った画像と World の物にも同じく当たる。

  | 順 | 当たる物 | 押してドラッグしたとき |
  |---|---|---|
  | 1 | 選んでいる World の物か Camera のギズモの取っ手（3D タブ） | 上の「ギズモ」 |
  | 2 | 選んでいる空の画像のハンドル、選んでいるペイントのまとまりの四隅のハンドルと回転のハンドル（ロックしていないとき。3D タブと、Frame モードの Camera タブ。ADR 0051） | 画像は上の表の後の項、まとまりの四隅は下の「大きさを変える」、回転のハンドルは下の「回す」 |
  | 3 | ポインタの下の World の物（`docs/space-and-view.md` の「ホバーの判定」の粗いグリッドの判定。World は無限遠の Sky より手前にあるので、Sky の物と重なっていれば World の物が先） | 選ぶだけ（動かすのはギズモ） |
  | 4 | Camera の印（3D タブ） | 選ぶだけ |
  | 5 | 自分の Sky の層の物を手前から：空に貼った画像とペイントのまとまりを、描く順の逆に（共通の `z_index` の大きい順。同じ値の物の順は `docs/scene-state-v2.md` の「Sky の重なり順」が持ち、その手前の物から） | 選び、本体のドラッグで動かす（ロックした物は選ぶだけ） |
  | 6 | 何も無い | 見回し。動かさずに離せば選択を外す |

  上流の層の World の物は順の 3 に、自分の World の物と同じく数える。上流の層の空に貼った画像は自分の Sky の層の下にあるので、順の 5 の後、
  6 の前に当たり、選んだ物のハンドルは順の 2 に数える（下の「上流の物の編集」の「選ぶ」）。上流の層のペイントはどの順にも数えない。
  同じ `z_index` の物の間で、見た目の一番手前に当てるのは古い UI との意図した違い。古い UI の `hitObjectAt` は Sticker・グループ・ラスタを
  並べた後に `z_index` だけで並べ替えるので、同じ値では奥に描いた Sticker が先に当たる。
- まとまりの当たり（古い UI の式のまま。`web_src/editor/hit_test.js` `hitObjectAt`、`editor/paint_layers.js` `hitRasterObjectAt`）：
  - ストロークのまとまり：ストロークの点を画面に写した線から `max(8, 線の幅 / 2 + 6)` px の中、または Lasso の塗りの中。線の幅は筆の
    太さと筆の種類の倍率から決まる値（`editor/object_geometry.js`）。
  - ラスタ：変形した枠を画面に写した四角の中で、その向きのラスタの画素の不透明度が 8/255 を超える所（画素を読めないときは四角の中）。
  - Sky は無限遠なので、視点の位置によらず、ポインタの向きで当たる（空に貼った画像と同じ `viewProjection`。`docs/threejs-spark-integration.md`）。
    レンズの Camera の Frame 表示では、空に貼った画像と同じくレンズで写した像で当たる（`docs/space-and-view.md` の「レンズの Camera の当たり」）。
  - 隠したペイント（`painting_visible` が `false`）は描かないので当たらない（`docs/timeline-ui.md` の「表示（目のアイコン）」）。ロックした
    まとまりは当たって選べるが、動かない。
- 選ぶ：まとまりを選ぶと、インスペクタは「種類ごとの中身」の「ペイントのまとまり」のカード、下の中央のバーは上の表の「ペイントのまとまり」の
  行（左端は筆のアイコンと `Paint`）を出す。選択は状態に書かない。Frame モードの Camera タブでも、ほかの物と同じく 3D タブと同じに扱う
  （ハンドルと本体のドラッグで動かす。下の「Camera タブ」、ADR 0051）。
- 選んだ形：まとまりの枠を画面に写して描く。ストロークのまとまりの枠は、空に貼った画像の枠と同じく球面の上の枠（`strokeGroupFrame`）：
  - 中心の向き `c`：まとまりの点（`strokePoints`）の単位の向き（`directionOfErpPoint`）の和を長さ 1 にしたもの。和の長さが 1e-9 未満
    （点が球面に均等に散らばったとき）は、点の ERP の重心（`strokeGroupCenterUv`）の向きにする。
  - 軸：`c` を向く空の画像と同じ規則で決める。`c` の経度と緯度を yaw・pitch（`erpPointOfDirection` の逆）にして、`pano_camera_math.js`
    `cameraBasis(yaw, pitch, −rot_deg)` の `right`・`up` を枠の右と上にする（`docs/scene-state-v2.md` の角度規約。極での決まり方も空の画像と
    同じ `cameraBasis` のもの：緯度 ±90° では `c` の経度で右が決まる。`c` の x と z がどちらも 1e-9 未満（極の上）は経度 0 とする）。空の画像の roll は正で中から見て反時計回り（`docs/scene-state-v2.md` の角度規約の項）なので、時計回りが
    正の group の `rot_deg` は roll に `−rot_deg` として渡す。動かしても `rot_deg` は変わらず、点を軸ごと運ぶので枠は点に合ったまま
    （下の「動かす」）。
  - 枠：各点の向き `p` を `c` の接平面に写し（心射。`x = p·right ÷ p·c`、`y = p·up ÷ p·c`。`tangentDirection` の逆）、その
    x・y を囲む箱を取る。余白は、今の `uvPad`（筆の太さから。`strokeGroupFrame`）を v の量の角度 `π · uvPad` として、その tan を x と y の
    両方に足す。四隅は箱の四隅 (x, y) を空の画像の枠と同じ `tangentDirection`（`normalize(c + x · right + y · up)`）で向きに戻し、ERP の点と画面の点に
    写す（`frameCornersUv`）。枠の中心は箱の中心を同じく向きに戻したもの。余白が角度 `π · uvPad` にちょうどなるのは `c` の所だけで、
    `c` から離れるほど少し大きくなる（心射の tan のため）。枠の記録（`strokeGroupFrame` の値）は、`c`・`right`・`up`・箱の中心と半分の
    大きさをただの数で持つ（古い UI の写しと大きさを変える中心は、この値を写して使う）。心射では大円が直線に写るので、pinhole の画面では枠の辺は四隅を
    結ぶ直線のまま（レンズの Camera では今と同じく `lensPolylines` で曲げる）。
  - 限り：`c` から 89.5° 以上離れた点（`p·c` が `cos 89.5°` 以下。心射が壊れる）は、その点の接平面の向きのまま、`c` から 89.5° の所に
    あるものとして箱に入れる（空の画像の FOV の上限 179° と同じ角）。そのまとまりの枠は大きくなるが、形は壊れない。
  - `rot_deg` が 0 の枠は、もう今の ERP の軸にそろえた枠と同じではない（意図した変更）。赤道の近くではほとんど同じに見えるが、辺は経線と
    緯線ではなく大円になり、極に近いまとまりほど違う。回したことのない今のまとまりの枠も、この形で描く。
  - 消しゴムがストロークのまとまりに届くかの判定（`erasePaint` の先に絞る範囲）は、枠ではなくストロークの点そのものから求める：点の
    ERP の箱（u は点の u の平均からの継ぎ目をまたぐ短い向きの差で測り、継ぎ目をまたげば二つ。v は 0〜1 に寄せる）に `uvPad` を足したもの
    （枠の向きや 89.5° の限りによらず、点のある所に届く）。
  ラスタの枠は変形した枠（`docs/render-contract.md` の「ペイントのラスタの置き方」。ERP の平面のまま）。線と色は選んだ空の画像の枠と同じ（Sky の行き先の氷。値は `docs/design.md` の「Sky の画像のハンドル」）。ハンドルは四隅と
  回転のハンドルで、辺の中点のハンドルは無い（縦横の比を変える式を持たない）。ロックしたまとまりと読み取り専用のエディタでは枠だけを描き、
  ハンドルを描かない。
- 回転のハンドル：空に貼った画像の回転のハンドルと共有するのは、見た目・席・当たりの大きさ・Shift の止め方だけ（回す向きと式は下の
  「回す」）。席：画面に写した枠の上の辺の中点（四隅の左上と右上の中点）から、下の辺の中点から上の辺の中点への
  向きへ `STICKER_NODE_ROTATE_HANDLE_OFFSET_PX`（24px）離れた所に丸を置き、上の辺の中点と丸を線で結ぶ。丸の大きさ、線と色は空の画像の
  回転のハンドルのまま（`docs/design.md` の「Sky の画像のハンドル」の回転 6px）。ラスタの枠はラスタの `rot_deg`、ストロークのまとまりの枠は
  group の `rot_deg` で回るので、どちらもハンドルが枠と一緒に回る（空に貼った画像と同じ）。四隅と回転のハンドルの当たりは、この回った枠の
  画面の位置で見る。当たりは丸の中心から 12px。
  選んだまとまりの上の押下は、回転のハンドル → 点だけのまとまりの点（`strokeDotHit`。本体に当たって動かす）→ 四隅のハンドル
  （`PAINT_CORNER_HIT_PX` 11px）の順に見る。点の例外が飛ばすのは四隅だけで、回転のハンドルは先に当たる（小さな枠でも回せるように）。
  カーソルは空の画像の回転のハンドルと同じ（上では `grab`）。
- 回転のハンドルを出さないとき：ロックしたまとまり、読み取り専用のエディタ、隠したペイント（`painting_visible` が `false`。`stage_objects.js`
  `selectedPaint` が枠もハンドルも返さず、目を切り替える `toggleVisible` が選択も外す）、枠が画面の外か後ろにあるとき（`paintFrame` が
  見えない）。複数選択では回さない（ハンドルは一つのまとまりを選んでいるときだけ）。
- 動かす（本体のドラッグ）：
  - ストロークのまとまり：空に貼った画像の本体のドラッグと同じ規則で動かす（持ち主の指示「ペイントもステッカーと同じに」）。空の画像は、
    押したときの画面の点と中心の画面の点の差 `offset` を持ち、動くたびに `ポインタ − offset` の画面の点の向きを新しい中心にして yaw・pitch
    を書き、roll は変えない。ストロークのまとまりは、`c`（点の平均の向き、`strokeGroupFrame` の `center`。枠の軸の原点で、空の画像の
    `direction` に当たる）をこの規則で動かす：つかんだとき `c` を画面に写した点と押した点の差を `offset` とする（`offset` は枠の箱の中心
    （`centerUv`、両方の UI のステージが「中心」として持つ画面の点）からではなく、`c` の画面の点から測る）。動くたびに、`ポインタ − offset` の
    画面の点の向き `c_new` を、空の画像の移動と同じ「画面の点 → 向き」の部品で求める（新しい UI は `pano_sticker_geometry.js`
    `directionAtScreenPoint`（`projection.ray`。`moveStickerToScreenPoint` と共有）、古い UI は `editor/pointer_transform.js`
    `poseAtScreenPoint`（`writePoseAtScreenPoint` と共有。Frame の表示ではショットの矩形の中に、Unwrap の表示では緯度を ±90° に寄せる）の
    yaw・pitch の向き）。`c` に画面の点が無い（表示の後ろ、レンズの Camera の限りの外）ときは、押しても選ぶだけで動かさない（古い UI の
    単独と複数選択の移動も同じ）。
  - 運び方：まとまりを、枠の軸に対する形を保つ剛体として運ぶ。つかんだときの枠の軸 `B_old`（`strokeGroupAxes(c, rot_deg)`。`right`・`up`・
    `center` を列に並べた回転）と、新しい軸 `B_new = strokeGroupAxes(c_new, rot_deg)`（枠を求め直すのと同じ関数）から `R = B_new · B_oldᵀ`
    を作り、各ストロークの点（`points`・`rawPoints`・`processedPoints`）の向きに `R` を掛けて ERP の u・v に戻す（`pano_paint_objects.js`
    `moveStrokeGroupTo`。新しい UI の `stage_objects.js` `paintDrag`、古い UI の `items.js` `applyStrokeGroupOffset`・`pointer_multi_move.js` が
    呼ぶ）。`R` はすべての向きで決まるので、中心から 89.5° 以上離れた点や後ろの点も同じ回転で運び、寄せることはない。`rot_deg` は変えない（極の上へ運ぶときを除く。下の項）。
    動くたびにつかんだときの写しから求め直す（重ねない）。ポインタの所に向きが無いときは、空の画像と同じく前の動きの結果のまま。
  - そのため、空の画像と同じく、横に動かしてもまとまりの上は天頂の側のまま保たれ、極をちょうど越えると経度が 180° 変わってまとまりの上下が
    入れ替わる（`docs/scene-state-v2.md` の `direction` の「極の近く」と同じ性質）。運んだ後の点の平均の向きは `R c = c_new` で、枠の軸は
    `B_new` と同じ関数で求め直されるので、枠は点に貼り付いたまま動く。`c_new` が極の上（x と z がどちらも 1e-9 未満。古い UI の Unwrap の表示は
    緯度を ±90° に止めるので、上下の端で起こる）のときは、極の上では経度と roll が同じ回転になる（`cameraBasis` の緯度 ±90° の軸は、北極では
    `経度 − rot_deg`、南極では `経度 + rot_deg` だけで決まる）ことを使い、つかんだときの `c` の経度 `L` を保って（点は極のまわりに回らない）、
    それを `rot_deg` に移す：北極なら `rot_deg − L`、南極なら `rot_deg + L` を新しい `rot_deg` とし、`B_new` は経度 0 で作る（`c` も極の上なら
    そのまま）。求め直す枠も極の上では経度 0 を使うので、枠は点に貼り付いたまま。
    極を離れた後も、その `rot_deg` のまま運ぶ。継ぎ目の特別な扱いは要らない（球面の上の回転）。極の近くへ運んだストロークは、球面の上で描く（`docs/render-contract.md` の「ペイントのストロークの
    描き方」）ので、途切れず、筆の太さを保つ。古い UI の Unwrap の表示で、
    継ぎ目をまたいで中心の画面の点（`anchor`）が反対の端へ跳ぶのは、空の画像と同じ性質として受け入れる。
  - 受け入れる端：点が球面に均等に散らばり、向きの和の長さが 1e-9 未満のまとまりは、中心が ERP の重心の向きになり、回転に対して同じに
    ふるまわないので、ドラッグの間に枠が跳ぶことがある。
  - ラスタ：今のまま ERP の上で動かす。押した所と今の所の ERP の点の差 `du`（継ぎ目をまたぐ短い向き）・`dv` を `transform.du`・
    `transform.dv` に足す（`dv` は −1〜1 に寄せる。`offsetRasterObject`）。極は越えられない（下の「まだ決めていないこと」）。
  - 古い UI も同じ下の部品で動かす（一つの規則。`web_src/editor/items.js` `applyStrokeGroupOffset` が `moveStrokeGroupTo` を呼ぶ）。単独の移動の
    `offset` は、まとまりの幾何（`object_geometry.js`）が持つ `c` の画面の点（`anchor`）から測る。複数選択の移動（`pointer_multi_move.js`）は、
    空の画像と同じく、まとまりの `c` の画面の点を画面で同じだけ動かした所の向きを `c_new` にする（写しは `getStrokeGroupCenterUv` の ERP の
    重心や枠の箱の中心ではなく `c` の画面の点を持つ）。複数選択で、ラスタ（ERP の上で動く）とストロークのまとまり（球面の上で動く）は、
    もう同じ ERP の差では動かない。古い UI の見え方の変更：ストロークのまとまりは上を天頂の側に保ったまま球面の上を動くので、ERP の上での
    形は動かすと変わる。極を越えて上下が入れ替わるのはパノラマの表示だけで、Unwrap の表示では空の画像と同じく中心が緯度 ±90° に止まり、
    Frame の表示ではショットの矩形の中に止まる。ラスタは今のまま ERP の上で動く。
- 大きさを変える（四隅のハンドル）：枠の画面の中心からポインタまでの距離を、押したときの距離で割った比（どちらも 1 px 以上）で、一様に
  変える。ストロークのまとまりは各点を、つかんだときの枠の接平面の上で、枠の箱の中心のまわりに比倍する（`c` の接平面の点 (x, y) を
  箱の中心 b から `b + 比 · ((x, y) − b)` に移し、向きに戻す。枠の四隅が枠の中心から対角線の上を離れ・近づくので、ハンドルとそろう。
  一様なので `rot_deg` によらず同じで、`rot_deg` は変えない。`c` から 89.5° 以上離れた点は接平面に写らないので動かさない。比の下限
  0.02 は、ストロークのまとまりの大きさを変える比だけの規則）、ラスタは
  `transform.scale` に比を掛ける（0.01〜100 に寄せる。下限 0.01 は `docs/scene-state-v2.md` の「ペイントの数値」の読み込みの下限と同じ値）。筆の太さ（ストロークの `size`）は変えない。古い UI も同じ下の部品を
  使う（`editor/items.js` `applyStrokeGroupTransform`・`applyRasterObjectTransform`）。
  ただし、どのストロークも一点だけのまとまり（筆で一度押しただけの点）では、点の当たりの中の押下は四隅のハンドルより先に本体に
  当たり、動かす（枠が点とほぼ同じ大きさで、四隅が点に重なるため。古い UI も同じ。`pano_paint_objects.js` `strokeDotHit`）。
- 回す（回転のハンドル）：回す中心（下の各項）を画面に写した点からポインタへの向きの角度が、押したときから変わった分 `δ`（画面の上で
  時計回りが正）だけ回す。どちらも、正の `rot_deg` は中から見た画面の上で時計回り（ERP の画像は画面の上で裏返らない。`docs/scene-state-v2.md`
  の角度規約で、ERP の左から右が経度の −180〜180、上から下が緯度の 90〜−90）なので、ポインタを回した向きにペイントも回る。回る量は画面の
  角度をそのまま使うので、斜めから見た所では見た目の回り方と少しずれる（空に貼った画像の回転のハンドルと同じ割り切り）。
  - ストロークのまとまり：空に貼った画像のように球面の上で回す。中心は、つかんだときの中心の向き `c`（上の「選んだ形」）。group の
    `rot_deg` を、つかんだときの値に `δ` を足した値にし、各ストロークの点（`points`・`rawPoints`・`processedPoints`）の向きを、`c` を軸に、
    新しい `rot_deg` とつかんだときの `rot_deg` の差 `θ` だけ回して ERP の u・v に戻す。式は右手系の Rodrigues の式を `−θ` で使う：
    `p' = p cos θ − (c × p) sin θ + c (c·p)(1 − cos θ)`。向きは、中から `c` を見た画面で時計回り：枠の軸（`cameraBasis` の `right`・`up`）で
    書けば、点の接平面の成分 (x, y) が `(x cos θ + y sin θ, −x sin θ + y cos θ)` になる向き（右が下へ回る）。`c` のちょうど反対の向きの点
    （`p = −c`）は回しても同じなので、そのままにする。Shift のときも点と枠の向きがそろう。ドラッグの間はつかんだときの点と `rot_deg` から求め直す。点と枠の軸が
    同じだけ回り、`c` も回しても動かない（回した向きの和は和を回したもの）ので、枠は形を保ったまま回り、何度回してもずれていかない。
    極の近くでも形は崩れない（ERP の u・v は球面の向きから求め直すだけで、0〜1 に寄せる点は出ない）。筆の太さ（ストロークの `size`）は
    変えない。
  - ラスタ：今のまま ERP の平面で回す（`docs/render-contract.md` の「ペイントのラスタの置き方」）。中心はラスタの枠の中心に `du`・`dv` を
    足した所（描く式と同じ）。`transform.rot_deg` を、つかんだときの値に `δ` を足した値にする。
    書くのは新しい `rotateRasterObject`（`pano_paint_objects.js`）で、空の画像の `rotateStickerFromPointer`（`rot_deg − δ`。Sticker の Roll の
    向き）は使わない。`rot_deg` は範囲に丸めない（360° の差は同じ向き）。
  - Shift：空に貼った画像の回転のハンドルとギズモの Rotate と同じ `ROTATE_SNAP_DEG`（15°）で止める。ラスタもストロークのまとまりも、
    `rot_deg` そのもの（絶対の角度）を倍数に止める。
  - 回す道具はハンドルだけで、インスペクタに角度の欄は置かない（「種類ごとの中身」の「ペイントのまとまり」は見出しだけのまま）。
- group の `rot_deg` の持ち方：書くのは回転のハンドルと、極の上へ動かすとき（上の「動かす」）だけ。大きさを変える・前面へ・背面へ・Lock は値を変えずに持ち、Delete は
  group と一緒に消え、Undo は状態の段ごと戻す。新しいまとまりは 0（ストロークは一筆ごとに新しい `actionGroupId` のまとまりになり、
  回したまとまりに後から加わらない。古い UI の一筆の中の区切りも同じまとまりの続き）。消しゴムがまとまりの一部を消して作るラスタは、
  回した後の画素から作るので `rot_deg` 0 のラスタになる。古い UI は回さないが、同じ `strokeGroupFrame`・`frameCornersUv` で枠を描くので
  球面の上の枠（回した枠）を描き、大きさを変えるのも同じ下の部品を通る（大きさを変えた結果は、新しい UI でも古い UI でも今と変わる：
  赤道の近くではほとんど同じで、極に近いほど違い、点が極の線に寄せられることは無くなる。大きさを変えるドラッグの間の枠は、新しい点から
  求め直すので、ハンドルの位置がわずかにずれることがある）。`syncPaintGroups` は group の項目を残すので値を消さない。古い UI に
  残っていたストロークのまとまりを回す分岐（当たりを返さないので届かなかった）は消す。ノードは点を描くだけで、この値を読まない（点は
  すでに回してあるので、Python は変わらない）。
- ノードの出力は、ラスタの `du`・`dv`・`scale`・`rot_deg` をエディタと同じ式で描く（`docs/render-contract.md` の「ペイントのラスタの置き方」）。
  Panorama Studio のノードはラスタを `painting_layer` の有無によらずいつも状態から描く（`core/render.py` `_sky_layers`）ので、この式が
  エディタとノードの出力をそろえる。旧ノード（PanoramaStickers・PanoramaCutout）の出力も同じ式で描くので、`scale` が 1 でないラスタは
  そこでも大きさが変わる（意図した変更。同じ節）。
- ストロークのまとまりは、動かすのも回すのも大きさを変えるのも球面の上（大きさは枠の接平面）で行うので、極の近くでも形を保ち、極を越えて
  動かせる。ラスタは ERP の上で動かし、ERP の平面で回すので、赤道から離れた所では形が ERP の歪みのまま変わり、極の近くでは崩れる。ラスタの
  `du` は継ぎ目をまたぐ短い向きで取るので、一回の移動の差が半周（180°）を越えると反対の向きに回る。
- 記録：ペイントには Lane も Keyframe も無い（`docs/timeline-ui.md` の「表示（目のアイコン）」のペイントの行）ので、再生ヘッドによらず
  `painting` をそのまま書き換え、記録の規則は通らない。動かし始め（回し始めも）で再生を止める（ストロークと同じ）。
- ドラッグと Undo：ドラッグ（本体、四隅のハンドル、回転のハンドル）は、ほかの新しい UI のドラッグ（ギズモ、空の画像のハンドル）と同じく `stage_objects.js` の `edits` を通す：
  動くたびに `edits.live`（`session.js` `gesture`。つかんだときの状態の写しに書き直す）、離したら `edits.commit`（`commitGesture`）、
  Escape とウィンドウのフォーカスの喪失は `edits.cancel`（`cancelGesture`。つかんだときの状態に戻し、段を作らない。
  `docs/editor-interaction.md` の「ポインタの取り消しとフォーカスの喪失」）。一つのドラッグのペイントの変更が、`commitGesture` で Undo の 1 段に
  なる。動かさずに離したら段を作らない。`painting_layer` を `null` にするのは、このドラッグの道でも同じ（`gesture` に渡す変更が `painting` と
  一緒に書く。閉じるときのアップロードは下の「ペイントの道具」）。`session.js` `editPainting` は一回ごとに段を積み、ドラッグの間は受けないので、
  ドラッグには使わない。一回で終わる操作（Lock、前面へ・背面へ、Delete）だけが、`editPainting` と同じ一回で 1 段の編集を通す。
- ドラッグの間の描き直し：ペイントそのものをポインタに付けてその場で描き直す（枠だけを先に動かして離してから描く形にはしない。
  `docs/agents/ux-principles.md` の「反応と速さ」）。描き直すのはつかんだまとまりだけで、ストロークのまとまりはそのまとまりの画素を描き直し、
  ラスタは変形を変えて重ね直す。ペイントのエンジンは作り直さない（古い UI の `markPaintStrokeVisualsDirty({ rebuildPaintEngine: false })` と
  `markPaintCompositeVisualsDirty` と同じ）。
- 前面へ・背面へは上の表の後の項（自分の Sky の層の物の全体で並べ替える）。
- Lock：そのまとまりの `locked`（`painting.groups[].locked`、`painting.raster_objects[].locked`。どちらもエディタだけが使う。
  `docs/scene-state-v2.md` の `painting`）を切り替え、Undo の 1 段にする。ノードは `locked` を描画に使わないので、
  Lock は `painting_layer` を `null` にしない（ペイントのほかの編集とは違う）。ロックしている
  間は、前面へ・背面へと Delete を無効にする（空に貼った画像と同じ）。
- Delete（バーのボタンと Delete キー）：ストロークのまとまりはそのストロークと `painting.groups` の項目を、ラスタはその項目を消す（古い UI の
  `web_src/editor/commands.js` `deleteSelected`）。Undo の 1 段で、選択を外す。Delete キーは、Keyframe を選んでいればそれを先に消す
  （`docs/timeline-ui.md` の「記録の規則」。`editor.js` の Delete が `StudioTimeline.vue` `handleDelete` を先に呼ぶ、今のとおり）。
- 選択が外れるとき：Paint・Mask の道具を選んだとき（上の「左の列」）、ペイントを隠したとき（`docs/timeline-ui.md`。目を切り替える
  `timeline_actions.js` `toggleVisible` が、ペイントの行を隠すときに `paint_group:`・`raster:` の選択も外す）、Undo・Redo などで選んだまとまりが
  状態から無くなったとき（`session.js` `keepSelection`）。
- Paint・Mask の道具の間は、まとまりをつかまない（左ボタンはいつも描く。下の「ペイントの道具」）。描いたストロークは、今のとおり新しい
  まとまりとして一番前に足す（`pano_paint_strokes.js` `ensurePaintGroup`）。

### ペイントの道具

Paint・Mask の道具を選んでいる間、下の中央のバーはペイントの道具を出す（タイムラインで物を選んでも、道具を選んでいる間はペイントの
道具のまま）。中身は古い UI のペイントの道具と同じで、並べ方だけを新しいバーに合わせる。見た目の値は `docs/design.md` の「新しい UI の
見た目」の「ペイントの道具」。

| 道具 | 並び（／は群の区切り） |
|---|---|
| Paint | 名前の欄（筆のアイコンと `Paint`） ／ Pen・Soft Brush・Marker・Pastel・Eraser・Lasso ／ 太さのスライダーと数 ／ Clear paint。色の点 5 つ（Green・Red・Blue・Black・White）と Custom color は、バーの上に浮かせた一列（古い UI と同じ置き方） |
| Mask | 名前の欄（Mask のアイコンと `Mask`） ／ Mask pen・Mask eraser・Mask lasso ／ 太さのスライダーと数 ／ Clear mask |

- 名前の欄は Paint と Mask で同じ幅（`Paint` が収まる幅）にし、物の名前の決まった幅は使わない（ペイントの道具のバーは長く、右下のボタンの群と重ならないようにする）。
- 道具の中身（古い UI のまま）：選ぶ筆は Paint と Mask で別に覚え、既定はどちらも Pen。太さは 1〜120 で、筆の種類ごとに覚え（Eraser
  と Mask の筆は Pen の太さを使う）、既定は 20。Lasso の間は太さのスライダーを無効にする。色の既定は Green。Eraser の間は色を無効に
  する。どれもエディタを開いている間だけ覚え、状態には書かない。
- Custom color を押すと、色の一列の上にポップオーバーを出す：彩度と明度の面、色相の帯、Opacity（0〜100%）、最近の色 8 つ。ポップオーバーで
  変えた色がその場で筆の色になる。閉じたとき（Custom color をもう一度押す、色の点を押す、ポップオーバーの外を押す、Escape）に、開いた
  ときと違う色で、色の点のどれでもなければ、最近の色の先頭に足す（同じ色は前のものを除く）。Custom color の点は、筆の色が色の点の
  どれでもないとき選ばれた形になる。
- Clear paint・Clear mask は、確かめのダイアログ（見出し `Clear Paint`、本文「This will remove all paint strokes in the current node.」、
  ボタン `Cancel`・`Clear Paint`。Mask も同じ形）を出し、押したらその層のストロークとラスタ（Paint はストロークのまとまりも）を消して
  Undo の 1 段にする（古い UI と同じ）。消すものが無いときは何もしない。
- ステージ（3D タブ）：左ボタンのドラッグで、空（Sky）に描く。ペイントは Sky の層に属し、視点の位置によらず、向きだけで描く場所が
  決まる（`CONTEXT.md` の Sky）。ほかのボタンと修飾キーの視点の操作（右ドラッグ、Alt、中ボタン、ホイール、移動のキー）はふだんのまま
  効く。ダブルクリックの「注視点へ向く」は、ペイントの道具の間は働かない。
- ポインタがステージの上にある間、ポインタの所にブラシの輪を出す（CSS のカーソルは出さない）。輪の大きさは、その太さでポインタの所に
  描いたときの縦の幅に合わせる（ERP では筆の縦の幅が向きによらない）。Lasso の間は輪を出さず、十字のカーソルにする。
- ストロークの記録・点の間引き・確定・消しゴムの規則と、状態に書く形は古い UI と同じ（同じ下の部品 `web_src/pano_paint_strokes.js`、
  形は `docs/scene-state-v2.md` の `painting`）。一つのストローク（押してから離すまで）が Undo の 1 段になる。何も描かなかった
  ストロークは段を作らない。ペイントを変えたときは `painting_layer` を `null` にする。
- 閉じるとき、ペイントかマスクがあって `painting_layer` が無いか古い（`pano_editor_state.js` `paintingLayerNeedsSync`：ペイントの大きさ
  2048×1024 のものでない、そのノードの id のファイルでない）なら、古い UI と同じペイントの層をアップロードする。エディタが描いている画素
  そのもの（ストロークのまとまりを順に重ねた `pano_paint_<ノードの id>.png`、まとまりごとの `pano_group_<ノードの id>_<まとまり>.png`、
  マスクの `pano_mask_<ノードの id>.png`）を ComfyUI の `input` の `panorama_stickers` に上書きで置き、`painting_layer`（`paint`・`mask`・
  `groups`・`revision`。`revision` は `painting` から決まる値に `:2048x1024` を付けたもの）を state_json に書く。書くのは、その時の
  state_json の `painting` がアップロードしたものと同じときだけ。アップロードの間に入れた実行は、それが終わるのを待つ（古い UI は待たない）。
  失敗したら `painting_layer` は `null` のままで、ノードは `painting` から描く。ラスタ（消しゴムが変えたもの）はノードが状態の画像から描き、
  エディタと同じ画素になる。
  - アップロードする理由：ノードがストロークから描く絵（`core/painting.py` `render_painting_to_erp`）はエディタの絵と合わない。筆の跡を
    緯度で横に伸ばさない、Marker の形（斜めの平たいペン先）を持たない、Pastel を描かない、縁の画素の濃さが違う。
- 描き始めで再生を止める（`docs/timeline-ui.md`）。描いている途中の Escape・ウィンドウのフォーカスの喪失・Undo は、そのストロークを
  全部捨てる（古い UI と同じ）。隠したペイント（`painting_visible` が `false`）には描けない（押しても何も起きない、`docs/timeline-ui.md`）。

### ギズモ

選んだ World の物（画像の板、3D）と Camera に、3D タブでだけ出す（出す条件は `web_src/studio/stage_objects.js`）。ステージの上の 2D の層に、
物の中心から画面の上で決まった大きさで描く（物が遠くても近くても同じ px）。

- 物の中心：その物の World のガイド（`docs/space-and-view.md` の「World の物のガイド」）の中心。3D の Sticker は回した要素の箱の中心、
  画像の板は板の中心、Camera は位置。3D の Sticker の箱がまだ分からない間（置いて読み込んでいる間）は、読み込み中のガイドの箱の中心。
  ガイドの無い 3D の Sticker（箱がまだ分からず、読み込み中のガイドも無い）は、中身の原点。中心はギズモと同じ値の一か所
  （`web_src/studio/world_guides.js` `worldGuideItems` の `center`）から取り、ギズモとガイドが別の点を使わない。
  3D ファイルの中身の原点は箱の外にあることがある（原点が離れたファイル）ので、原点には描かない。
- Rotate と Scale は、この中心を動かさずに回し、大きさを変える。中心が中身の原点と違う 3D の Sticker では、回すと大きさを変える
  ドラッグが `position` の Lane も書く（中心が原点と同じ物、画像の板、Camera では書かない）。形は見本 `specimen-11.html` の Move に揃え、Rotate と Scale は
同じ線の太さと色で作る（値は `docs/design.md` の「新しい UI の見た目」）。古い UI のギズモ（`docs/editor-interaction.md`）は変えない。

- Move：中心から World の X・Y・Z の向きに三本の棒、棒の先に丸い玉、中心に白い点。棒か玉をドラッグすると、物はその軸の上だけを動く
  （ポインタの光線に最も近い軸の上の点へ。つかんだ点との差を保つ）。その点が視点の前に無いとき（軸の消失点より先を指したとき）は
  動かさず、前の位置に留める。中心の白い点をドラッグすると、つかんだときの視線に垂直な面の上を
  ポインタについて動く。
- Move の平面の取っ手：二つの軸の間に小さな四角を三つ置く（XY・YZ・XZ の面）。四角は、中心から二つの軸の向きにそれぞれ届く長さの
  `GIZMO_PLANE_FROM` から `GIZMO_PLANE_TO` までの範囲を、World の中の面として画面に写したもの（面を斜めに見れば四角も斜めになる）。
  色は Blender にならい、その面に垂直な軸の色（XY は Z の氷、YZ は X の珊瑚、XZ は Y のライム）を薄く塗り、縁を同じ色の線で描く。
  四角をドラッグすると、物はつかんだときの中心を通るその面の上だけを動く（ポインタの光線と面の交わる点へ。つかんだ点との差を保つ）。
  光線が面とほぼ平行なときと、交わる点が視点の前に無いときは動かさず、前の位置に留める。面を縁から見るとき（面に垂直な軸と、
  視点から中心への向きのなす角の余弦の絶対値が `GIZMO_HIDE_RATIO` 未満）は描かず、当たりにも数えない。平面のドラッグ中は、
  つかんだときの中心を通る、その面の二つの軸（XY なら X と Y）のガイドの線を二本とも描く（下の軸のガイドの線と同じ形と色）。
  動く向きがその面に沿っていることを見て確かめられるようにするため。
- Rotate：World の X・Y・Z の軸のまわりの三つの輪。輪の手前の半分を濃く、奥の半分を薄く描き、当たりは手前の半分だけ。輪をドラッグ
  すると、物はその軸のまわりに回る（つかんだ点の輪の接線の向きにポインタを動かした px を、輪の半径の px で割った角度）。
  Shift を押している間は、その輪の軸に当たる角度（Y の輪は yaw、X の輪は pitch、Z の輪は roll）を、回し始めの値からの差ではなく
  絶対の角度で `ROTATE_SNAP_DEG`（`docs/space-and-view.md` の「量の一覧」）の倍数に止める（ほかの二つの角度は止めない）。中心が
  中身の原点と違う物は、止めた向きで上の「物の中心」を保つ。
- Scale：物の向きの三本の棒、棒の先に小さな角丸の四角、中心に白い点。棒の当たりは中心から `pointHit` より外だけ（中心の近くで
  つかむと比が乱れるため）。棒か四角をドラッグすると、つかんだ点と中心の、その軸の上の
  画面の距離の比で、大きさを一様に変える（`pano_space.js` `uniformScale`）。
- Rotate と Scale の中心の白い点は形だけで、当たらない。
- 視線とほぼ平行になった軸（Move と Scale の棒の画面の長さが届く長さの `GIZMO_HIDE_RATIO` 未満）は描かず、当たりにも数えない。
- 軸の取っ手（Move と Scale の棒と玉と四角、Rotate の輪）をドラッグしている間は、つかんだときの物の中心を通る、その軸の向きの
  ガイドの線をステージの端から端まで描く（色はその軸の色。Move の平面の四角では上のとおり二本。Move の中心の点のドラッグでは描かない）。
- ポインタの下の取っ手と、ドラッグしている取っ手は、軸の色のまま明るく（白へ寄せ）、太く描く（白にはしない。明るい背景で消えるため）。
  Alt を押している間は明るくしない（Alt のドラッグは必ず視点の操作）。
- 棒・玉・四角・輪・平面の四角・中心の点の下に、ガイドと同じ考えの暗い下敷きを描き、明るい背景（白い空の画像など）の上でも
  見えるようにする（値は `docs/design.md` の「新しい UI の見た目」）。
- 重なり：平面の四角を先に、次に奥の取っ手から描く。当たりは、玉・四角（Scale の先）・中心の点を先に見て、その中で画面の上で最も
  近いものを選ぶ。どれにも当たらなければ平面の四角（写した四角の中か）、次に棒と輪を見る。
- ドラッグはモードの Lane だけを記録の規則で書く（`pano_space.js` `gizmoDragLanes`。上の「物の中心」の Rotate と Scale の `position` を除く）。一つのドラッグが Undo の 1 段で、Escape と
  ウィンドウのフォーカスを失ったときは取り消す。ドラッグの間、取っ手の軸と比べる元の値は、つかんだときのものを使う。

## ノードの入力から来た物

ノードの入力から来た物を、自分の物と同じステージとタイムラインに出す。入力の素材と姿勢は、ノードの今の実行結果の `ui`
（`docs/studio-node.md` の「実行結果の `ui`」）から読む。入力をつなぎ替えた後、ノードがまだ実行していない間は、その入力の素材を
描かない（タイムラインの行は状態にある物のとおり出る）。

- `world` の 3D（実行結果の `pano_scene_files`・`pano_scene_meta`）：`docs/threejs-spark-integration.md` の「空間の表示」の `scene`
  の項のとおり、再生ヘッドのフレームの要素を描く。深度のグリッド（`kind` が `depth_grid`：`DA3_GEOMETRY` mono と `MOGE_GEOMETRY`
  の透視投影の列）は、`sticker` 入力の 3D と上流の層の要素も含めて、同じ文書の「`DA3_GEOMETRY` mono の深度のグリッド」のとおり、
  入力ごとの色のプロキシの動画を再生ヘッドに合わせて描く（色が届くまでその要素は描かない。古いエディタと Preview と同じ）。
  色を待つ間と、大きすぎる要素の知らせは、上端の中央の一行に出す（下の「一行の知らせの種類」）。ノード上の面も同じに描く
  （`docs/studio-node-surface.md`、ADR 0052）。
- `port` の Sticker（`sticker` 入力の素材）：状態にある `port` の Sticker を、その姿勢で描く。絵は再生ヘッドに合わせる
  （`docs/timeline-ui.md` の「`port` の Sticker の素材の表示」）。3D の素材は `world` の Sticker として、状態の変形で描く。
  ステージの上で自分の物と同じに選べ、ギズモ・Sky の画像のハンドル・インスペクタで動かせる。下の中央のバーは上の表のとおり
  「元に戻す」を足し、Duplicate と Delete は無効（入力から来るので、消しても次の実行で戻る）。
  - 状態に `port` の Sticker が無いときに加えること（`docs/studio-node.md` の「`port` の Sticker が状態にないとき」）は、今は
    ノード上の表示が実行の後に行い、エディタは開いたときの状態を描く。エディタが開いている間に加えることは（未実装）。
  - Pose handoff（`sticker_state`、ADR 0030）：状態にある `port` の Sticker は、古いエディタ・ノード上の表示と同じく、Pose handoff を
    当てた姿で出す。どの結果を当てるか、見せ方、保存する形、上書きの記録の規則は `docs/editor-interaction.md` の「`port` の Sticker の
    Pose handoff の表示と記録」が持ち、二つのエディタは同じ共有の部品（`web_src/pano_port_handoff.js`）を呼ぶ。新しい UI だけのことは
    次のとおり。
    - 当て直す時：開いたとき、エディタが開いている間にこのノードの実行結果が届いたとき（`web_src/studio/editor.js` が ComfyUI の
      `executed` の事象を受け、このノードの結果なら当て直す）、Undo・Redo のあと（`session.js` `step`）。ドラッグの途中に結果が届いた
      ときは、そのドラッグの確定か取り消しまで待って当て直す。当て直しても物の選択は保ち、Pose handoff が置き方を変えたときだけ
      Keyframe の選択を外す。
    - `session.js` の書き方：作業中の状態は見せている姿のまま持つ。Undo の 1 段（`record`）は、先に引き継いだ Lane の編集を記録し
      （`recordHandoffEdits`）、保存する形（見せている `port` の Sticker を保存した Sticker に戻した状態）を履歴に積む。開いたときの
      最初の段も保存する形。閉じて書く文字（`stateText`）も保存する形から作る。共有の部品は値を受け取って値を返し（新しい UI の
      状態は書き換えない）、古いエディタはその前後で今までどおり自分の状態を書き換える。
    - インスペクタ（`applyInspectorEdit` の context）と下の中央のバー（`stickerChangedRows`）には、今の Pose handoff を
      `handoff` として渡す（`web_src/studio/editor.js` `inspectorContext`。`inspector_actions.js` はもう受け取る）。リセットとバーの
      規則は上の「リセットと Keyframe のポチ」と「下の中央のバー」。
    - エディタが開いている間に `sticker` か `sticker_state` のつなぎ方を変えたときに当て直すことは（未実装。上の「加えること」と同じ）。
      見せている姿は、開く・結果が届く・Undo・Redo のどれかまでそのまま残る。閉じて書くのは保存する形なので、`state_json` に漏れない。
- 上流の Scene の層（`scene` 入力の `PANO_SCENE`）：自分の上書き（状態の `upstream`）を当てた作業コピー（`docs/studio-node.md`
  の「上流の Scene」）を、再生ヘッドで描く。空に貼った物は自分の空の物の下に、World の物は自分の物と同じ空間に描く。タイムラインには
  自分の行の下に層ごとのまとまりを出す（`docs/timeline-ui.md` の「上流の層の行」）。見出しの名前は、層の Scene の id を持つ
  ワークフローの上の Panorama Studio のタイトル（見つからなければ層のキー）。
  - 上流の物は、自分の物と同じにステージとタイムラインで選んで編集でき、編集は自分の状態の上書きになる（下の「上流の物の編集」）。
  - `scene` に上流の Scene がつながっているのに実行結果に層が無い（まだ実行していない）ときは、上端の中央に一行
    「Run the workflow to show the upstream scene.」を出す（「一行の知らせの種類」の知らせるだけ）。
- 自分の背景の画像：ノード自身の実行結果の `pano_input_images`（実行が受けた `background` の最初の画像の一時ファイル）を先に読み、
  無いときと読めないときだけ、つないだ先がそのまま読めるファイル（Load Image など。実行の前）を読む。途中のノードで作った IMAGE は
  実行結果にしか無いので、実行の後に出る（`docs/adr/0003-external-input-sticker-failure-boundaries.md` の Amendment 2026-03-11。
  `web_src/studio/node_image.js` `loadNodeInputImage`。実行結果は `background` のつなぎ先が実行の時と同じ間だけ読む：
  `pano_preview_video.js` `isNodeOutputMediaCurrent`）。
- 上流の背景：自分の `background` がつながっていれば自分の背景を出し、上流の背景は出さない（`docs/studio-node.md` の「上流の
  Scene」の背景）。つながっていなければ、上流の背景（実行結果の `pano_upstream_input_*`、広さは `pano_upstream_coverage`）を、
  その背景を持つ Studio の Clip range（`pano_upstream_bg_clip`）で置いて出し、その外では上流の `bg_color`
  （`pano_upstream_bg_color`）を出す（`docs/timeline-ui.md` の「背景の行」）。上流も背景を持たなければ、自分の背景が無いときと
  同じに出す。上流の背景の行は無い。

### 上流の物の編集

上流の Studio から受け取った物（上流の Scene の層の Sticker、ペイント、`scene`）を、古い UI と同じ範囲で編集する（ADR 0030。
持ち主の決定、2026-11-02）。編集は自分の状態の `upstream` に上書きとして残り、ノードがそれを当てて描く（`docs/studio-node.md` の
「上流の Scene」、`_override_layers`）。上流の Studio の状態と、自分の `stickers` は変えない。上書きの形は今のまま
（`docs/scene-state-v2.md` の「上流の上書き」）。何をどの記録に書くかの規則は `docs/studio-node.md` の「エディタでの編集」
「エディタでの消す・戻す」が持ち、新しい UI はその規則を古い UI と同じ部品で使う（下の「書き戻し」）。

できることを、上流の物の種類ごとにまとめる。「自分の物と同じ」は、同じ種類の自分の物と同じ操作・同じ見た目・同じ Undo の段であること。

| 上流の物 | ステージ（3D タブと Camera タブ） | インスペクタ | タイムラインの行 | 下の中央のバー |
|---|---|---|---|---|
| 空に貼った画像 | 選べる。選んだ枠とハンドル、本体のドラッグ・四隅・辺・回転のハンドルは自分の物と同じ | 自分の物と同じカードと行 | 自分の物と同じ（Keyframe・行のポチ・Easing・Clip range・目） | 前面へ・背面へ・Duplicate・Replace は無効。Lock・Delete・元に戻すは働く |
| World に置いた画像の板、World に置いた 3D（`port` の 3D を含む） | 選べる。ギズモ（Move・Rotate・Scale）は自分の物と同じ | 自分の物と同じ。ただし Animation の Clip と Speed は灰色（上書きが無い） | 自分の物と同じ | ギズモの切り替えは働く。Duplicate・Replace は無効。Lock・Delete・元に戻すは働く |
| ペイント | つかめない（下の「作らないもの」） | — | ペイントの行の目だけ | — |
| `scene`（層の 3D の内容） | 選べない（自分の `world` と同じ） | — | 目と Clip range だけ（`docs/timeline-ui.md` の「上流の層の行」） | — |

- 選ぶ（押したときの順）：上流の World の物は、自分の World の物と同じ順で当たる（「ペイントのまとまり」の押したときの順の 3。奥行きで
  前後が決まる）。上流の空に貼った画像は自分の Sky の層の下にあるので、自分の Sky の層の物（順の 5）の後、何も無い（順の 6）の前に当たる。
  層は下流のものから、層の中では手前（`z_index` の大きいもの）から当たる（古い UI と同じ。`docs/editor-interaction.md` の
  「上流の Scene の表示と編集」の「2D の当たり判定」）。隠した物と消した物は当たらない。上流の物の選択の行は作業コピーの id
  `upstream:<層のキー>:<要素の id>` で、その作業コピーがある間は保ち、隠したとき・消したとき・Undo・Redo や新しい実行結果で
  無くなったときに外す。
- 見せる：インスペクタのカードの見出しの横には、タイムラインの層の見出しと同じ「From ＜ノードの名前＞」を出す（`CONTEXT.md` の
  「画面の言葉」。画面に Upstream と出さない）。上書きした行には名前の横に上書きの色の点を付ける（上の「リセットと Keyframe のポチ」）。
  ステージで選んだ上流の物の枠は破線にし、上流から来た物だと分かるようにする（上の「下の中央のバー」の空の画像の枠の項）。下の中央の
  バーの「元に戻す」は、戻すものが無い間は無効、あるときは上書きの色（上の「下の中央のバー」）。
- 各行のリセットは、その行の Lane の上書きを記録から外し、上流の値に戻す。一つの行が二つ以上の Lane を持つとき（空の画像の Rotation は
  `direction` と `roll`。行と Lane の対応は `inspector_model.js` `ROW_LANES`）は、その全部を一回で外し、Undo の 1 段にする（古い UI の
  Lane ごとのボタンを、その行の Lane の数だけ押したのと同じ記録）。外すのは下の「書き戻し」の記録を変える操作の道で行う。
- 下の中央のバーの「元に戻す」は、その物の上書きを全部外す（古い UI の「Revert to upstream」の All と同じ記録の変え方）。Lane 一つを
  外すのは、インスペクタのその行のリセット（上の項）。押せるときと tooltip は上の「下の中央のバー」の「元に戻す」の項。無効のボタンの
  tooltip には理由（「Duplicate · not for an upstream object」のように）を出す。
- Lock：バーの Lock で、その物の `locked` の上書きを書く。ロックした上流の物は、自分のロックした物と同じく選べるが動かず、
  Keyframe と Clip range も変わらない。目は効く。ロックしている間は Delete と元に戻すを無効にする。
- Delete（バーのボタンと Delete キー）：その層の記録の `deleted` に要素の id を加え、その要素の上書きを捨てる。確かめは出さず、
  Undo の 1 段で、選択を外す。Delete キーは、Keyframe を選んでいればそれを先に消す（今のとおり）。消した物はタイムラインの層の見出しの
  「Restore deleted (n)」で戻す。層の見出しの「Revert」と「Restore deleted (n)」は働く（`docs/timeline-ui.md` の「上流の層の行」）。
- 上書きを持てない層（キーが `#` で始まる層：Scene の id が無い層と、同じ id のより下流の層がある層）の物は、選べて描かれるが、
  ロックと同じく何も変えられない（ロックも外せない）。インスペクタの行とバーのボタンは隠さずに無効にし、tooltip は
  「Inherited only: edit it in its own Panorama Studio」。タイムラインの見出しには「 · inherited only」を添える（`docs/timeline-ui.md`）。
- 隠す・出す：上流の物の目はタイムラインの行にだけある（自分の物と同じ。バーに表示の切り替えは無い）。
- 次の操作も自分の物と同じに働く（古い UI でもできる）：Frame Selected と回る中心（選んだ上流の World の物の球。`docs/space-and-view.md`）、
  行の名前のダブルクリックで寄ること（`docs/timeline-ui.md` の「行とポチ」）、Keyframe のコピーと貼り付け（上流の行から写し、上流の行へ
  貼る。貼った Keyframe は上書きになる。上書きを持てない層の行には貼らない。`docs/timeline-ui.md` の「Keyframe のコピーと貼り付け」）、
  Camera タブの Frame 表示で選んだ上流の空の画像のハンドルと本体のドラッグ（上の「Camera タブ」の物を動かすドラッグ）。
- World の物のガイド・ホバー・回る中心・Frame Selected は、上流の World の物を自分の物と同じに数える（`docs/space-and-view.md` の
  「World の物のガイド」「ホバーの判定」「回る中心」）。
- 書き戻し：記録（状態の `upstream`）が正で、作業コピーは記録から作る写し。編集は二つの道のどちらかを通る。
  - 作業コピーを変える編集（ステージのドラッグとギズモ、インスペクタの欄、タイムラインの Keyframe・行のポチ・Easing・Clip range・目・
    貼り付け、Lock）：作業コピーを変えて描き、確定して Undo の 1 段を作るとき（ドラッグを離した、欄を確定した、ボタンを押した）に、
    前の書き戻しから変わったフィールドだけを、その層の記録に書く（`pano_upstream.js` `upstreamEditedRecords`。fps の違う記録は先に
    `pano_scene_state.js` `rebaseUpstreamRecord` で自分の fps に直す）。タイムラインが返す層の新しい作業コピー（`timeline_actions.js` の
    編集の `upstream`）は、共有の部品の `setWorking(key, sceneState)` で入れてから書き戻す。
  - 記録を変える操作（各行のリセット、元に戻す、Delete、層の Revert、Restore deleted）：先に書き戻し、記録を変え
    （`upstreamRevertedRecords`・`upstreamDeletedRecords`・`upstreamLayerRevertedRecords`・`upstreamRestoredRecords`）、その記録から作業コピーと
    比べる基準を作り直す。作業コピーへ上流の値を直接書かない（書くと、次の書き戻しがその値を上書きとして書いてしまう）。
  - Undo の 1 段を作るたびに、書き戻しの後、今の実行結果にある層の記録から、層に無い id の上書きと消した記録を捨てる
    （`upstreamPrunedRecords`）。エディタを開いただけでは捨てない。
  - 書き戻す時と比べる基準（`upstreamBaseline`）を持つ部品は、古い UI と新しい UI が同じものを使う（`web_src/pano_upstream_edits.js`
    `createUpstreamEdits`。上の owner の表）。部品が受け取るのは、記録を読む `records()` と書く `setRecords(records)`（古い UI は
    `state.upstream` に入れ、新しい UI は状態を置き換える）、層（`pano_upstream_layers.js` `createUpstreamLayers` の `entries`・`current`・
    `rebuild`）、自分の Timeline fps の `fps()`。書き戻し・掃除・記録を変える操作は、記録が変わったかを返す。基準はこの部品だけが持ち、
    Auto の長さが数える上書きした Clip range の終わり（`studio/upstream.js` `output`、`upstreamOverriddenEnds`）も同じ基準を読む。
  - 新しい UI の `session.js` は、この部品を受け取り、上流の行を探すこと（選択を保つ・ステージで選ぶ）に使い、Undo の 1 段を履歴に
    積む前に書き戻しと掃除を行い、Undo・Redo の後に作業コピーと基準を記録から作り直す。インスペクタの編集には作業コピー
    （`view.upstreamWorking`）を渡す（`editor.js` `inspectorEdit`）。
  - ドラッグの間（ステージ、インスペクタの欄のドラッグ、タイムライン）は作業コピーだけを変えて描き、記録は書かない。取り消し
    （Escape、ウィンドウのフォーカスの喪失）は、ステージとインスペクタでは記録から作業コピーを作り直して、つかんだときの姿に戻す
    （記録はつかんだときのまま）。タイムラインの取り消しは、ドラッグを始めたときの作業コピー（`StudioTimeline.vue` が取り消しで渡すもの）を
    `setWorking` で戻す。
  - 確定のたびに書き戻すので、閉じるときと実行の前に書く状態には、確定した編集がいつも入っている。開いて閉じただけ、選んだだけ、
    行を開いただけでは何も書かない。
- 作らないもの（古い UI と同じ範囲にとどめる。どれも古い UI にも無い）：上流の物の Duplicate・Replace・前面へ・背面へ（上流の物は
  自分の Sky の層の並べ替えにも入らない）、上流のペイントをつかむ・動かす・消すこと（ペイントの上書きは `painting_visible` だけ）、
  上流の `scene` の Keyframe（上書きに Lane が無い）、上流の 3D の Animation の Clip と Speed の上書き（上書きに `animation` が無い）、
  上流の物を自分の物として取り込むこと、上流の Studio の状態を書き換えること、複数選択での上流の物の操作（新しい UI に複数選択の
  バーがまだ無い）、上流から来たことを示すリンクのアイコン（バーの名前の前。試作で見て、持ち主が要らないと決めた、2026-11-03。上流から
  来たことは破線の枠とインスペクタの「From ＜ノードの名前＞」で示す）。

## エディタの中の Camera

- Camera はいつも一台あり、消せない。撮り方は Panorama / Frame のモードで、既定は Panorama（規則は `docs/studio-node.md`）。
- 左の列の Camera のボタン：
  - Panorama モードで押すと、Frame モードに切り替え、今見ている構図（視点の位置と向き）に Camera を持ってくる。
  - Frame モードで押すと、今見ている構図に Camera を持ってくる。ボタンは 3D タブでいつも押せる。
  - 持ってくるのは位置（`position`）と向き（`rotation` の Yaw・Pitch）だけで、Roll・H FOV・Lens・Aspect は変えない（Camera タブの
    Frame 表示の操作が書く値と同じ。3D タブの視点は Roll を持たないため、Roll を 0 に戻すことはしない）。
  - どちらも編集で、Undo の 1 段（Panorama モードからは、モードの切り替えと移動をまとめて 1 段）。Camera の Lane に Keyframe があれば
    記録の規則（`docs/timeline-ui.md` の「記録の規則」）で、変わった Lane にだけ再生ヘッドで打つ（ギズモのドラッグと同じ）。打った瞬間を
    一瞬知らせる（未実装。見せ方は決まっていない）。今の構図と同じで何も変わらないときは、何もせず Undo の段も作らない（選択も変えず、知らせも出さない）。
  - 動かしたときは、Camera を選ぶ（インスペクタに Camera のカードが出て、値が変わったのが見える）。視点は動かさない（`docs/space-and-view.md` の「視点は一つ」）。
    Camera は視点と同じ位置に来るので 3D の見た目は描かれず、Output の小窓も既定では畳んであるため、選択のほかに上端の中央の一行に
    「Camera moved to this view」を短く出す（下の「一行の知らせの種類」の済んだ。ほかの短い知らせと同じ間で消える）。同時に、ステージの上に
    ファインダーのかぎ括弧の合図を一度だけ出す：落ち着いた黄の四つのかぎ括弧がステージの外からすっと入って止まり、すぐに ease-out で
    ゆっくり外へ抜けながら消える。かぎ括弧の外側は、透明度のある落ち着いた黄で平らに塗り、かぎ括弧と一緒に出入りする（グラデーションの
    光は付けない。値は `docs/design.md` の「新しい UI の見た目」の「動き」。ADR 0058）。合図の途中でまた押して Camera が動けば、
    合図を初めからやり直す。Camera が動かなかったときは出さない。動きを減らす設定では、かぎ括弧と塗りを動かさずに出して消す。
    Output の小窓は、畳んでいれば開く（上の「Output の小窓」）。
  - tooltip：Frame モードでは「Camera to view」、Panorama モードでは「Camera to view · Switches to Frame mode」。
  - Camera をロックしている間と、読み取り専用のエディタでは、隠さずに無効にし、tooltip で理由を示す（「Camera to view · Locked」
    「Camera to view · Read-only」）。Camera タブでは左の列のほかのボタンと同じく「Not available in the Camera view」。
- Camera の Lock（下の中央のバー）：押すたびに `camera.locked` を切り替え、Undo の 1 段。鍵のアイコンの形で状態を示し、tooltip は
  「Lock」「Unlock」。読み取り専用のエディタでは無効。ロックしている間は、ロックした World の物と同じく Camera を変える操作を
  すべて止める：
  - 3D タブ：Camera を選べ、選んだ見た目も出るが、ギズモは出さない（ロックした World の物と同じ）。下の中央のバーは Move・Rotate の
    切り替えと Lock を出したままにする（ギズモの種類は選べるが、ギズモは出ない）。左の列の Camera のボタンは無効。
  - Camera タブ：ステージのドラッグとホイールで Camera は動かず、辺の目盛り・目盛りのポチ・リセットは灰色で触れず、tooltip は
    「Locked · Unlock in the 3D tab」。Frame Selected とつまみも同じ（下の「Camera タブ」）。
  - インスペクタ：Camera のカードの行（Mode の札を含む）は、ロックした物のカードと同じく灰色で触れず、tooltip は「Locked」。Scene のカードの上の段（Camera）と Camera タブの一番上の Camera のカードでも同じ。読み取り専用のエディタでも、ほかのカードと同じく灰色。
  - タイムライン：Camera の行の Keyframe と行のポチは、ロックした物の行と同じ（`docs/timeline-ui.md`）。目のアイコンは効く。
- 撮り方のモードを変えても、Camera は動かさない。
- 目のアイコンで Camera を隠すのは表示だけで、出力は変えない。
- 3D タブでの見た目（見本 `camera-1.html`。値は `docs/design.md`）：
  - Frame モード：視錐台（三角錐）の面を薄く塗り、辺を線で描く。枠の上辺に、上の向きを示す小さな塗った三角。三角の形は枠の幅だけから決め、アスペクト比を変えても歪まない（`pano_space.js` `cameraFrustumShape`）。錐の頂点（Camera の
    位置）に白い点。奥に隠れる辺は薄く描く。
  - Panorama モード：Camera の位置に小さな球を薄く塗って輪郭を線で描き、赤道に輪を一本、正面（出来上がる ERP の中心）の向きに
    球の外へ短い矢印、球の中心に白い点。
  - 線は明るい線の下に暗い線を重ね、明るい背景でも地面のグリッドの上でもまぎれないようにする。
  - 選んでいるときは、線を選択の色にし、塗りを少し濃くする。
  - 塗った面のどこを押しても選べる（線の上だけではない。当たりは `docs/space-and-view.md` の「ホバーの判定」）。
- 3D タブで Camera を選んでからオービットすると、Camera の位置のまわりを回る（`docs/space-and-view.md` の「回る中心」）。

## Camera タブ

撮る Camera から出力をそのまま見る画面。どのドラッグもカメラを動かす（割り当ては `docs/space-and-view.md` の「Frame 表示」）。
物はクリックで選べ、選んだ物は 3D タブと同じに扱う（ADR 0051。持ち主、2026-10-31：Camera から見た絵のまま物を置き直せる）：インスペクタに
同じカード（Camera タブでは一番上の Camera のカードの下。上の「インスペクタ」）、下の中央のバー、ギズモ（空に貼った画像はハンドル）を出す。ギズモ・ハンドル・選んだ物の本体を押したドラッグは物を動かし
（3D タブと同じ操作と記録）、それ以外の所を押したドラッグは Camera を動かす。World の物の本体はギズモで動かすので、本体のドラッグは
3D タブと同じく何も動かさない。ロックした物（読み取り専用のエディタでも同じ）はそこでは動かせないので、その上を押したドラッグは選んでいても
Camera を動かす。選んだ物は回る中心と Frame Selected にも使う。
3D タブで Camera を選んだまま Camera タブに入ったときは、Camera のカードを出し、Camera のバーとギズモは出さない（ADR 0055。Camera の中から
見ているため。Camera はステージのドラッグと辺の目盛りで動かす）。選択は保ち、3D タブへ戻るとバーとギズモがまた出る。Camera の Lock は 3D タブの
バーで切り替える。
選び方（Shift で足す複数選択、ペイントのまとまり）とガイドの描き方も 3D タブと同じ。Scene のカードの `Set ground` は Frame モードの Camera タブでも
3D タブと同じに働き（次の一回のクリックで、Camera から見た面を拾う）、Panorama モードの Camera タブでは同じ席で無効にする（tooltip は
「Not available in Panorama mode」。ステージで何も拾えないため）。何も無い所をクリックすると選択が外れ、Scene のカード（Camera と Ground）に戻る。Panorama モードの Camera タブは物を選べないので、選択を外すのは Escape（下の「閉じ方」の Escape の順）。タブを切り替えても選択は保つ。
選んだ物には、3D タブと同じ選んだ物のガイド（落ち着いた黄の輪郭。規則は `docs/space-and-view.md` の「World の物のガイド」）を描き、
選んだことが見て分かるようにする。

- フレームは、ステージから決まった余白（左右・上・下。値は `docs/design.md`）を除いた残りに、出力の比を保って収める。比が変わると
  収まり直す。
- 枠の外：同じ絵を暗くして見せ、枠の境目に細い明るい線を引く。枠の外の絵は、同じレンズ（κ）をそのまま外へ延ばして描き、レンズの
  画角の上限（`docs/render-contract.md` の「カメラのレンズ」、`lens_fov_limit`）を越える画素は `background_color` で塗る（今の 180° を越えた所と同じ）。
- 辺の目盛り：フレームの左に FOV、右に Lens（縦の目盛り）、下に Roll（横の目盛り）。目盛りに数値を振る。真ん中の印は動かず、目盛りを
  左右（上下）にドラッグして値を変える。目盛りはフレームの辺について動く。枠の外の上に描く文字と線は、明るい色にする（`docs/design.md`）。
  - Shift：FOV と Lens は動きを細かくする（`FINE_FACTOR`）。Roll は回転なので、ギズモの Rotate と同じく `ROTATE_SNAP_DEG` の倍数（絶対の
    角度）に止める。ドラッグでも矢印キーでも同じ（矢印キーは今の値からその向きの次の倍数へ）。
  - 値の桁：ドラッグと矢印キーで決まる値は、インスペクタの同じ行の値の箱と同じ桁に丸める（FOV は 0.1°、Lens は 0.01）。箱に見えない
    桁を持たせない。Lens が「1.00」と見えて 1 ちょうどでないと（0.998 など）、その Camera はレンズの Camera（κ ≠ 1）として扱われ、
    クリックやパンの当たりがレンズの写し方に変わる（`docs/space-and-view.md` の「レンズの Camera の当たり」）ため。
  - 長さ：目盛りの線の帯は、ステージの大きさで伸び縮みしない決まった長さ（値は `docs/design.md` の「大きさ」）。帯の真ん中（真ん中の印）を、
    Roll はフレームの左右の中央に、FOV と Lens はフレームの上下の中央に合わせる。フレームの辺が決まった長さより短いときだけ、辺に収まる
    長さに縮める（縦の目盛りは、上下の頭のうち大きい方の分を上下とも辺から除いた長さ。帯の真ん中を辺の真ん中に保ったまま、上の頭が
    フレームの上端より上に出て左上のタブにぶつからず、下の頭がフレームの下端より下に出ないようにするため）。1 目盛りの px（縮尺）は
    長さによらず同じ。
  - 頭：目盛りの帯の両端の外に、二つに分けて置く。一方の端に名前と値、反対の端に Keyframe のポチ（どの Lane に打つかは
    `docs/timeline-ui.md` の「インスペクタの Keyframe のポチ」）とリセット。縦の目盛り（FOV・Lens）は、帯の上に名前、その下に値を
    縦に積み、帯の下にポチ、その下にリセットを縦に積む。Roll は、帯の左に名前と値を横に並べ、帯の右にポチとリセットを横に並べる。
    頭は帯の位置と長さを動かさない。値の文字は、その目盛りで一番幅をとる値（FOV `360°`、Lens `0.00`、Roll `-180°`）が収まる決まった幅を
    持ち、数字が変わっても頭の幅は変わらない。間の値は `docs/design.md` の「大きさ」。
  - リセット：Keyframe のポチの隣（縦の目盛りはポチの下、Roll はポチの右）に、インスペクタの行と同じアイコンで置く。FOV と Lens はインスペクタの H FOV・Lens の行のリセットと同じ
    働き（既定に戻す。上流から受け取った Camera では上流の値）。Roll は Roll だけを既定の 0° に戻す（インスペクタの Rotation の行のリセットは
    Yaw・Pitch も戻すため、それとは分ける）。どれも Undo の 1 段で、Keyframe のある Lane では記録の規則に従う。今が戻す先と同じとき、
    インスペクタと同じく隠さずに無効にする。Panorama モードの FOV と Lens は、目盛りと一緒に無効。
  - 当たり：ドラッグを受ける所は、目盛りの線の帯より太い透明な帯にする（Roll は上下に、FOV と Lens は左右に広げる。値は `docs/design.md`）。
    見た目は変えない。フレームの中（枠の内側）には広げない。
  - フォーカス：ポインタで押したときは何も出さない。キーボードで移ったときだけ、帯の地を薄く明るくして示す（縁の線は使わない。規則は
    `docs/design.md` の「フォーカス」）。
- Camera タブ（Frame モードと Panorama モード）でも地面のグリッドと空のグリッドを描き、右下のグリッドのボタンで出し入れする。何も無い空間でも、
  自分がどこにいてどちらを向いているかが分かるようにするためである。Camera に張り付いた目安（三分割・水平の目安など）は置かない
  （持ち主の決定、2026-10-30）。グリッドは出力にも Output の小窓にも写さない。何をどこに描くか、3D タブとスイッチを共有することは
  `docs/space-and-view.md` の「地面のグリッド」と「空のグリッド」。
- 無効にするもの（同じ席に出したまま灰色にし、tooltip で理由を示す）：左の列（Undo・Redo を除く）、Reset View。Output の小窓は畳んだ形にし、一行は 3D タブと同じ見た目のまま開閉のボタンだけを薄く無効にする（上の「Output の小窓」）。タイムコードは出さない（タイムラインのバーにある）。シャッターのボタンは無い（カメラの値は各値のポチか、タイムラインの行のポチで打つ）。
- Panorama モードのときは、撮る Camera の位置から描いた ERP を開いた絵として見せる（描き方は Output の小窓と同じ）。ステージの操作では
  何も動かない（見るだけ）。Frame に切り替える入口は、インスペクタの Camera のカードの Mode だけで（Camera タブでは Camera のカードがいつも一番上にある）、Camera タブに別のボタンや案内の
  一行は足さない（ADR 0048。使い方は README で見せる）。辺の目盛りは同じ席に出したまま、FOV と Lens は灰色で触れない（Panorama では効かない）。Roll は効く
  （ERP が Camera の向きで回るため）ので、触れる。
- Camera タブの右下の Frame Selected は、視点ではなく Camera を動かす（Undo の 1 段。`docs/space-and-view.md` の「Frame 表示」）。tooltip は
  「Frame selected · Moves the camera」。Panorama モードでは Camera を枠に収める意味が無いので、同じ席に出したまま無効にし、tooltip は
  「Not available in Panorama mode」（左の列の「Not available in the Camera view」と言い方をそろえる）。視点の操作のつまみも同じ tooltip で
  無効にする。ロックした Camera と読み取り専用のエディタでは、Frame Selected とつまみを無効にし、tooltip は「Locked · Unlock in the 3D tab」「Read-only」。
  ロックした Camera の辺の目盛り（ポチとリセットを含む）の tooltip も「Locked · Unlock in the 3D tab」にする（Camera タブには Camera の Lock が無いため。
  ADR 0055。文字は `web_src/studio/camera_ui.js` `CAMERA_TAB_LOCKED_TIP` が持つ）。インスペクタの Camera のカードの行は、3D タブと同じ「Locked」のまま。

## Add とドロップの見せ方

着く所の規則（光線の当たり、境界、置く大きさと向き）は `docs/space-and-view.md` の「Add とドロップ」が持つ。

- Add：左の列の Add を押すと、ファイルを選ぶ画面を開く（選べるファイルは `docs/space-and-view.md` の「Add とドロップ」）。一度に一つの
  ファイルを置く。読み取り専用のエディタでは、Add を席に出したまま無効にし、ドロップを受けない。Camera タブでも、Add は左の列の
  ほかのボタンと同じく無効で（上の「左の列」）、ドロップを受けない。二択はタブを切り替えると閉じる（何も置かない）。
- Add で画像を選んだとき：読み込んだ後、ステージ全体に暗い幕を被せ、その中央に二枚の大きな札（Sky、World）を出し、押したほうに
  置く。Escape か、札の外（幕の上を含む）を押すと取り消し、何も置かない。外を押したときは、取り消した後もその押下がいつもどおり働く
  （視点のドラッグなど。幕は押下を受けない）。開いたときは Sky の札にフォーカスを置き、左右の矢印キーで札を移り、Enter か Space で
  選ぶ。二択を出している間に、ファイルをステージにドラッグしたときと、次のファイルを選んだときも取り消す。3D ファイルは
  選ばせない。二択の見せ方と取り消しの条件はこの文書が持ち、選んだ後の置き場所は `docs/space-and-view.md` の「Add とドロップ」が持つ。
  - 二択の見た目：Camera のカードの撮り方の札（`StudioModeTiles.vue`、見本 `mode-3.html` の M1）と同じ言葉の、ずっと大きな札を
    横に二枚並べる。札は上に絵、下に名前。絵は線で描き、Sky は空（球の上の半分）に画像を貼る様子、World は地面のグリッドの上に立つ
    板と箱の様子。絵の線と、ポインタの下・フォーカスの札の地は行き先の色（Sky は氷、World は落ち着いた黄。上の「ドラッグ中の印」と
    同じ色）。幕と札は出るときにフェードする。値は `docs/design.md` の「大きさ」の「Add の二択」と「動き」。
- ドロップ：離した点で行き先が決まり、選ばせない。いくつものファイルを落としたときは、画像があれば最初の画像を、無ければ最初の
  3D ファイルを一つだけ置く（古い UI と同じ）。
- ファイルをドラッグしている間の印：着く所に角のかぎ括弧と薄い塗りを描く（色と大きさは `docs/design.md`）。Sky の枠は、球に写した枠の
  曲がった辺に沿ってかぎ括弧を描く。3D ファイルの仮の箱は、すべての見える頂点から辺に沿って短い線を出す。印の色は行き先で変える：
  Sky は氷、World は落ち着いた黄（色で着く先を覚えられるようにする）。ポインタの近くに、行き先のラベル（Sky のアイコン＋`Sky`、または
  World のアイコン＋`World`）を出す。ラベルのアイコンと縁は印と同じ行き先の色にする。ラベルは印に重ねない（置き方は
  `docs/space-and-view.md` の「ドラッグ中の印」）。ドラッグの間はファイル名が読めないので、
  最初のファイルの項目の種類が `image/` で始まれば画像の印、それ以外（種類が空、`model/`、`application/octet-stream`）は
  3D ファイルの印を出す。
- 置く間：置いた物はすぐ状態に入り、選んだ状態になる。画像は読み込んだ絵をすぐ描き、裏でアップロードする。3D ファイルは、アップロード
  から中身が描けるまで、上端の中央に読み込み中の一行「Loading 3D model…」を出す（待つ間のほかの規則は `docs/editor-interaction.md` の
  「3D ファイルを置く流れ」の 2・4・5 と同じ）。
  - 読み込み中のガイド：その間も、置いた所にその物のガイドの箱（形と箱の決め方は `docs/space-and-view.md` の「World の物のガイド」）を
    描き、箱の線と面を光の帯が斜めに流れ続ける（何も出てこないと心配になるため）。ガイドの見え方（選んでいれば選択の色）はいつもどおり。
  - 描けたとき：中身が描けた瞬間から `LOAD_REVEAL_MS` の間に、光の帯が消えてガイドがいつもの見え方に戻り、同時に中身が不透明度 0 から
    その物の不透明度まで ease-out で現れる。
  - OS で動きを減らす設定のときは、光の帯を流さず（ガイドは止まったまま描く）、中身はすぐに出す。
  - 読み込み中のガイドと現れる動きは、この間に置いた 3D ファイルだけのもの。エディタを開いたときに読み込む 3D の Sticker には付けない。
  - 置いた物は、アップロードが終わるまで Undo の段を持たない。その間の Undo・Redo は、置いた物を消さない（戻した段に置いた物が
    無ければ、今の形のまま足し直す）。その間に置いた物を消すのは Delete だけで、消したらアップロードが終わっても置かない。
  - アップロードの間にエディタを閉じたとき：アップロードが終わったら、その時に置いた物を `state_json` に書く（エディタは開いていない）。
    終わる前に同じノードのエディタを開き直したら、新しいエディタが置いた物を引き継ぐ：閉じたときの形のまま状態に入れ（選ばない。
    Undo の段は持たない）、画像は読み込んだ絵を描き、3D ファイルは読み込み中のガイドと一行を出す。アップロードが終わったら、新しい
    エディタで置いたことが Undo の 1 段になり、閉じたときに保存する。失敗したら、新しいエディタで置いた物を消し、理由を一行に出す
    （上の「失敗」と同じ）。開き直したエディタが読み取り専用なら引き継がず、終わった時に閉じたエディタの状態を書く。
- 失敗：画像を読めない・アップロードできない、3D ファイルが上限より大きい・アップロードできない・経路が読めないときは、置いていた物を
  消し（Undo の段は残さない）、上端の中央に「気をつけてほしい」の一行で理由を出す（文は「3D ファイルを置く流れ」の 6 と同じ。画像は
  `Could not read <ファイル名>`・`Could not upload <ファイル名> (...)`）。この一行は、次のファイルを置くかエディタを閉じるまで出す。
  「There is no ground to place it on」は「できなかった・止まった」の知らせ（`docs/space-and-view.md` の「着く所」）。
- Sky / World の印（アイコン）は、ドラッグ中のラベル、二択のボタン、下の中央のバーの左端、タイムラインの行のアイコンで同じものを使う。

## 読み込み中と空の画面

- エディタを開いたら、地面のグリッドをすぐに描く。読み込みの画面や、流れるグラデーション・ゆっくり現れる動きは出さない（例外は、
  置いた 3D ファイルの読み込み中のガイドと現れる動きだけ。上の「Add とドロップの見せ方」の「置く間」）。まだ来ていない
  中身（背景、3D の内容）の所はステージの地のままにし、来たものから描く。何を待っているかを、上端の中央に一行で出す（下の「一行の知らせの種類」の
  読み込み中）。
- すぐに描けるように、新しいエディタの設定がオンのとき、ComfyUI を開いた後の手の空いた時に、ステージの three.js のチャンクと新しい UI の
  stylesheet を読んでおく（設定をオンに切り替えたときも同じ）。Spark は SPLAT を描くときに読む（今のまま）。
- 空の画面：上端の中央の場所に「画像か 3D ファイルをドロップするか、Add を押す」の一行を出す。空の画面とは、ステージに描くものが何も無く、
  入力からも来ないときだけである。次のどれか一つでもあれば空ではない：自分の背景（読み込み中・読めないときも含む）、自分の Sticker（`port`
  の Sticker を含む）、自分のペイント、`world`・`background`・`sticker`・`scene` のどれかの入力がつながっている（中身はノードの実行結果で
  届くので、まだ実行していなくても入口の案内は出さない）、実行結果にある `world` の 3D の内容、上流の Scene の層（判定は
  `web_src/studio/notice_line.js` `stageEmpty` の一か所）。
- 効かない操作の知らせ（境界で止まった、何もない所へのダブルクリックなど）も、上端の中央の一行に出す（どの操作で出すかは
  `docs/space-and-view.md`）。

### 一行の知らせの種類

上端の中央の一行は、種類で左の印を変える。どの種類にも印を付ける（珊瑚＝できなかった・止まった、落ち着いた黄＝気をつけてほしい、ライム＝済んだ、中立＝知らせるだけ、回る輪＝読み込み中。持ち主の決定、2026-10-30。それまでは知らせるだけに印が無かった）。色の値は `docs/design.md` の「色」、大きさと動きと置き場所は「大きさ」「動き」。

| 種類 | 印 | 出すとき |
|---|---|---|
| できなかった・止まった | 珊瑚の丸 | 効かなかった操作（境界で止まった、何もない所へのダブルクリック、Frame Selected で囲むものが無い、Camera を消そうとした） |
| 気をつけてほしい | 落ち着いた黄の丸 | ノードの `state_json` を読めない（下の「閉じ方」）、背景を読めない、3D の表示を作れない（three.js のチャンクか WebGL が使えない）、深度のグリッドの要素が GPU のテクスチャの上限より大きい（`depthGridTooLarge` の文。「ノードの入力から来た物」）、上流の警告、Add とドロップの失敗（3D ファイルの読み込みの失敗を含む。上の「Add とドロップの見せ方」） |
| 済んだ | ライムの丸 | 済んだ操作の短い知らせ（左の列の Camera のボタンで Camera を動かした「Camera moved to this view」。ほかの短い知らせと同じ間で消える） |
| 知らせるだけ | 中立の丸（主の文字の色を不透明度 55%） | Set orbit center の待ち（「Click a spot to orbit around · Esc to cancel」。待っている間だけ。`docs/space-and-view.md` の「Set orbit center」）、上流の Scene を待っている（「ノードの入力から来た物」）、空の画面の案内 |
| 読み込み中 | 小さく回る輪 | 3D の表示や背景、置いた 3D ファイル、深度のグリッドの色の動画（「Loading depth video…」）を読み込んでいる |

- 3D の表示を作れないときは、ステージの真ん中ではなく、この一行に出す。
- 出すものが重なったときは、できなかった・止まった ＞ 済んだ操作の短い知らせ ＞ Set orbit center の待ち ＞ 読み込み中（3D の表示 ＞ 背景 ＞ 置いた 3D ファイル ＞ 深度のグリッドの色）＞ 気をつけてほしい
  （読めない `state_json` ＞ 3D の表示 ＞ 大きすぎる深度のグリッド ＞ 背景 ＞ Add とドロップの失敗）＞ 上流の Scene を待っている ＞ 空の画面の案内 の順で、前のものだけを出す（`web_src/studio/notice_line.js` `topLine`）。

## タイムラインのバー

タイムラインの上端のバー。並びと見た目だけを持ち、それぞれの働きは `docs/timeline-ui.md` が持つ。畳んでもこのバーは出す。

| 並び（左から） | 働きの持ち主 |
|---|---|
| 再生と一時停止（メディアの再生のボタン 1 つ。`docs/agents/ux-principles.md` の例外） | `docs/timeline-ui.md` の「タイムラインの表示」 |
| 前の Keyframe へ、次の Keyframe へ | `docs/timeline-ui.md` の「前後の Keyframe へ飛ぶ」 |
| ループのボタン（一つのアイコンのボタンで、オンとオフをアイコンの形 `repeat` ／ `repeat-off` で示す。`docs/agents/ux-principles.md` の例外。既定はオン） | `docs/timeline-ui.md` の「タイムラインの長さ」 |
| 時刻とフレーム（例 `00:03.12  78 / 240`） | `docs/timeline-ui.md` の「タイムラインの表示」 |
| （ここから右寄せ）fps の欄、Length の欄とそのリセット、畳むボタン（状態はアイコンの形で示す） | `docs/timeline-ui.md` の「タイムラインの表示」 |

- 再生位置は、ルーラーの上の ▼ の印と、トラックを縦に貫く 2 px の線で示す（色は `docs/design.md`。▼ はルーラーにだけ出す）。
- 行の頭の並び（左から）：目のアイコン、▶（開閉）、アイコン（Sky / World の印、Camera、Paint、Background）、名前、行のポチ。目を持たない
  行も同じ幅を空ける（`docs/timeline-ui.md` の「表示（目のアイコン）」）。
- 上流の層の見出しは「From ＜元のノードの名前＞」（`docs/timeline-ui.md` の「上流の層の行」）。

## キーとクリップボードを ComfyUI に渡さない

エディタを開いている間、キーとクリップボードの事象は後ろの ComfyUI のグラフに届かない。ComfyUI は window と document で
`keydown` と `copy`・`cut`・`paste` を聞き、Ctrl / Cmd＋V でノードを貼り、Delete でノードを消し、Ctrl / Cmd＋Z でグラフを戻す。
エディタの後ろでユーザーのグラフが変わるのを防ぐ。

- 対象の事象：`keydown`・`keyup`・`keypress`・`copy`・`cut`・`paste`。
- 対象の場所：エディタの中（入力欄も含む）から出た事象と、フォーカスがページそのもの（`body`）にあるときの事象。エディタの外の
  要素（上に出た別の ComfyUI のダイアログなど）から出た事象は対象にしない。
- 止めるのは伝わりだけで、ブラウザの既定の動きは止めない。入力欄での文字の入力、選んだ文字のコピー、貼り付け（Easing のパネルの
  ベジェの欄など）はそのまま動く。エディタ自身のキー（このあとの一覧の各キー）は、止める前にエディタが受ける。
- 止める所は、エディタの外枠（エディタの中から出た事象）と `body`（`body` から出た事象）の、泡立ちの側である。window と document の
  捕捉の側で聞く ComfyUI の部品（範囲選択のドラッグ中の Escape など）には届く。そこで止めると、エディタの中の部品が事象を受ける前に
  止まってしまうためである。
- エディタを閉じると元に戻る。

## ツールチップ

部品の説明（アイコンのボタンの名前、無効の理由、行の名前の説明など）は、ブラウザの `title` ではなく、エディタの中のツールチップで
部品の横に出す（`title` はカーソルの位置に出て、置き場所を選べないため。持ち主の決定、2026-10-30）。見た目の値は `docs/design.md` の
「新しい UI の見た目」。

- 出す部品：説明を持つ新しい UI の部品すべて。部品は説明を `data-tip` に書き、`title` 属性は付けない（ブラウザの説明が重ならない
  ように）。アイコンだけのボタンは、読み上げの名前を `aria-label` に持ち続ける。
- 無効の部品（`aria-disabled`）も、理由の説明を出す（例「Not available in the Camera view」）。
- 一つのエディタにツールチップの層は一つで、エディタの枠の中の一番上に描く（浮かせる部品より上、モーダルの外には出ない）。
  ツールチップはポインタを受けない。
- 出るまで：ポインタが部品に入ってから `TIP_DELAY`（400ms）止まると出る。ツールチップが消えてから `TIP_SKIP`（300ms）の間に次の部品に
  入ったときは、待たずに出す（左の列をなぞるときに一つずつ待たせない）。
- 消えるのは、すぐ：ポインタが部品を出たとき、エディタのどこかでポインタを押したとき、ホイール、キーを押したとき、部品がページから
  消えたとき、説明が空になったとき。押してから離すまでの間は出さない（ドラッグの最中に出ない）。押して離した後、同じ部品の上では、
  一度出て入り直すまで出さない。
- キーボードのフォーカス：キーボードの操作中（`docs/design.md` の「フォーカス」の `input_modality.js`）に部品へフォーカスが移ったら、
  待たずに出し、フォーカスが離れたら消す。ポインタで押してフォーカスが移ったときは出さない。
- 置く側：部品の矩形から `TIP_GAP`（8px）離して、上下左右のどれか一つの側に置く（カーソルの位置には置かない）。どの側が先かは部品の
  群で決める：

  | 群 | 先の側 |
  |---|---|
  | 左の列、Camera タブの左の辺の目盛り | 右 |
  | 右の中央の列（視点の操作のつまみ、Set orbit center、「?」）、Camera タブの右の辺の目盛り | 左 |
  | 下の中央のバー、右下のボタンの群、Camera タブの下の辺の目盛り | 上 |
  | 左上のタブ、Output の小窓、上端の中央の一行 | 下 |
  | ほか（インスペクタ、タイムラインなど） | 上 |

  部品が `data-tip-side` を持つときは、それを先の側にする。
- 反転と寄せ：先の側に置くとエディタの枠（の内側 `TIP_EDGE` = 8px）からはみ出すときは、反対の側に置く。反対の側でもはみ出すときは、
  はみ出しの少ない側に置く。置いた側に沿う向き（上下に置くなら左右、左右に置くなら上下）は、部品の真ん中にそろえ、枠からはみ出すときは
  枠の内側に寄せる。部品に重ならない。
- ショートカット：説明の文の終わりの「（キー）」の形（例「Move (1)」「Undo (Ctrl+Z)」「Play (Space)」）は、括弧を外し、キーを文の後ろに
  薄い印として出す（「Move　1」）。キーと読むのは、`+` でつないだ一つ一つが一文字か、決まったキーの名前（Ctrl・Shift・Alt・Cmd・Space・
  Del・Esc・Enter・Tab など）のものだけで、それ以外の括弧は文のまま出す。説明の文の書き方（「名前 (キー)」）は今のままで、ツールチップが
  印に変える（`tooltip.js` `splitTipKeys`）。
- ツールチップを出している間に部品が動いたり説明が変わったりしたら、それに合わせて置き直し、書き直す。

## ショートカットの一覧

右の中央の「?」（視点の操作のつまみの列の下）を押すと、ステージの上に一覧を浮かせて出す。読むだけの一覧で、中に押せる部品は無い。

- 開く・閉じる：「?」のボタンと「?」のキー（`KeyboardEvent.key` が `?`。Ctrl・Meta・Alt を押していないとき。ステージがキーを受ける
  とき（`stageOwnsKey`）だけ）は、押すたびに開く・閉じるを切り替える。開いている間、「?」のボタンはつまみの「光る」と同じ地で示し、
  `aria-expanded` を持つ。ほかに閉じるのは、Escape（下の「閉じ方」の表の 4 段）と、一覧の外を押したとき。外を押したときは、閉じた後も
  その押下がいつもどおり働く（Add の二択と同じ）。エディタを閉じると一覧も消え、次に開いたときは閉じている（覚えない）。
- 一覧はモーダルにしない。開いている間も、視点・物・タイムラインのキーとマウスはふだんどおり効く。
- キーボード：開くと一覧がフォーカスを受け（読み上げが一覧の名前「Shortcuts」を読む）、Escape で閉じたときにフォーカスが一覧の中に
  あれば「?」のボタンに戻す。
- 置き場所：ステージの右の中央の列の左に 8px 空けて、上下の中央。大きさと見た目は `docs/design.md` の「大きさ」の「ショートカットの
  一覧」。
- 中身は、今の画面（タブ、撮り方のモード、読み取り専用、どの窓か）で効くものだけを、次の群の順に並べる。群の名前は View・Objects・Timeline・
  Editor。キーは小さな塗りの札（キーキャップ）で示し、修飾キーと `+` でつなぎ、同じことをする別の組み合わせは `/` で並べる（どの
  組み合わせにも同じ修飾キーが付くときは、修飾キーを一度だけ書く：Shift + Click / Drag）。Ctrl の札は macOS では `⌘` と書く。
- 割り当ての持ち主は括弧の中の文書と code で、一覧はそれを表示するだけである。エディタのキー（Undo・Redo・Delete・Space・1/2/3・
  Keyframe のコピー・切り取り・貼り付け・「?」・Escape）は一つの表（`web_src/studio/shortcuts.js` `EDITOR_KEYS`）に置き、キーを受ける code（`editor.js`、Escape は
  `stage.js`）と一覧の両方がそれを読む。移動のキーは `pano_view_keys.js` の表、マウスのボタンは `view_input.js` `navigationAction`
  から一覧を作る。ポインタと修飾キーの組み合わせ（ダブルクリック、Shift の刻み、Shift＋クリック）は一覧の行で持ち、数（`ROTATE_SNAP_DEG`、`FINE_FACTOR`）は
  持ち主の定数を読む。

| 群 | 行（出す条件） |
|---|---|
| View（`docs/space-and-view.md` の「マウスとキー」） | Look around：左ドラッグ・中ボタンのドラッグ。Orbit：Alt＋左ドラッグ・Alt＋中ボタンのドラッグ。Pan：右ドラッグ。Move forward / back：Alt＋右ドラッグ。Zoom to the pointer：ホイール。Move：W / S・A / D・Q / E。Move faster (hold)：Shift（移動のキーと一緒に押す）。Orbit around a point：ダブルクリック（そこを回る中心にして向く。Camera タブでは Camera が向く）。Camera タブの Frame モードでは群の頭に「These move the Camera.」の一行を添える。Camera タブの Panorama モードでは行を出さず、「Nothing moves the view in Panorama mode.」の一行だけを出す |
| Objects（この文書の「下の中央のバー」、`docs/space-and-view.md`） | Select：クリック。Move / Rotate / Scale：1 / 2 / 3（3D タブで、読み取り専用でないとき）。Rotate in 15° steps：Shift＋ギズモの Rotate と Sky の画像とペイントのまとまりの回転のハンドルのドラッグ（同じ条件。数は `ROTATE_SNAP_DEG`）。Delete：Delete・Backspace（Keyframe を選んでいればそれ、そうでなければ物。読み取り専用でないとき） |
| Timeline（`docs/timeline-ui.md`） | Play / pause：Space。Add to selection：Shift＋クリック・Shift＋ドラッグ（Keyframe）。Copy keyframes：Ctrl＋C。Cut keyframes：Ctrl＋X。Paste at the playhead：Ctrl＋V（この三つは読み取り専用でないとき。`docs/timeline-ui.md` の「Keyframe のコピーと貼り付け」） |
| Editor | Undo：Ctrl＋Z。Redo：Shift＋Ctrl＋Z（どちらも読み取り専用でないとき）。Fine steps (×0.1)：Shift＋値のドラッグ（欄と FOV・Lens の辺の目盛り。読み取り専用でないとき）。Roll in 15° steps：Shift＋Roll の目盛りのドラッグ（Camera タブで、読み取り専用でないとき）。Shortcuts：?。Step back / close：Escape（下の「閉じ方」） |

- Preview のウィンドウ（下の「Preview のウィンドウ」）の一覧も同じ表から作る（`shortcutGroups` の `context: "preview"`）。物を選ぶ・
  編集する部品が無いので、View の群（3D タブと同じ行）と、Editor の群の Shortcuts・Step back / close（Escape で閉じる）だけを出し、
  Objects の群と、Timeline の群の Add to selection・Keyframe の行は出さない。Play / pause：Space は、再生の帯があるときだけ、
  群の名前を Playback にして出す（タイムラインが無いため）。行の無い群は出さない。

## 消すもの（新しい UI に作らないもの）

古い UI にあり、新しい UI に作らないもの。ADR 0044 の切り替えで、古い UI の Panorama Studio・Preview の分岐からも消す手引きになる。
決めた理由は ADR 0045・0047・0048。

- Unwrap の表示、3DoF / 6DoF の切り替え、3D view controls のプリセット（Default・Blender-like・Unity-like）、ERP origin の文字。
- Save・Cancel のボタン（閉じるのは ✕ だけ）、インスペクタの物を選ぶプルダウン、Copy State、UI Settings の Drag X / Y（ComfyUI の設定へ移す）。
- 左の列の Clear All と Add to World（Add は一つ）。
- `output_size` と Auto の大きさ、インスペクタの Coverage（ノードの `background_range`）。
- Camera の Delete と「Camera が無い」状態、比率のプリセットの「360°」（撮り方のモードに置き換え）、Frame 表示の Roll のノブと
  Alt / Shift＋左ドラッグの Roll、シャッターのボタン、「Shot」という呼び方（Camera に一本化）。
- いつも出ている撮影のカード（インスペクタは今触っているものだけを出す）、「原点に戻す」の専用のボタン（行のリセットで戻す）。
- 下の中央のバーの Hide / Show（タイムラインの目のアイコン）と、Camera の比率のメニュー（インスペクタの Aspect）。
- 画面に出す言葉の ERP・Equirectangular・Perspective（Panorama・Frame にそろえる。`CONTEXT.md`）。

## 閉じ方

- 閉じるのはインスペクタの一番上の行の ✕ と、Escape と、枠の外（後ろの暗い所）のクリックだけ。Save・Cancel のボタンは無い。
- 枠の外のクリックは ✕ と同じ（同じように保存して閉じる。Escape の順の表は通さない）。押したのも離したのも枠の外のとき（左ボタン）だけ
  閉じる。枠の中で押して枠の外で離したドラッグ（欄やタイムラインの境界のドラッグなど）では閉じない。
- Escape は内側のものから一つずつ戻す。一回の Escape は、次の表の上から最初に当たる一つだけを戻す。**何も選ばず、何も開いていない
  ときだけ、エディタを閉じる**（閉じる＝保存なので、選択を外すつもりの Escape でエディタが閉じないようにする）。

  | 順 | そのときの状態 | Escape でしたこと |
  |---|---|---|
  | 1 | 欄のドラッグの最中 | ドラッグを取り消し、値を押したときに戻す（上の「欄」） |
  | 2 | 「Set ground」の後、地面を拾う待ち | 待ちを取り消す |
  | 3 | 「Set orbit center」の後、点を拾う待ち | 待ちを取り消す（何も動かさない） |
  | 4 | Clear paint・Clear mask の確かめのダイアログを出している | Cancel と同じ（何も消さない） |
  | 5 | Add の画像の二択（Sky / World）を出している | 二択を閉じ、何も置かない |
  | 6 | ショートカットの一覧を開いている | 一覧を閉じる |
  | 7 | Paint・Mask の道具を選んでいる | Cursor の道具に戻す（色のポップオーバーを開いていれば、先にそれだけを閉じる） |
  | 8 | Keyframe を選んでいる | Keyframe の選択を外す（Easing のパネルが消える） |
  | 9 | 物を選んでいる | 物の選択を外す |
  | 10 | 上のどれでもない | エディタを閉じる |

  視点のドラッグ、ギズモのドラッグ、ペイントのまとまりのドラッグ、ペイントのストロークの最中の Escape（取り消し）は、今の規則（`docs/editor-interaction.md` の「ポインタの取り消しとフォーカスの
  喪失」）のまま、表より先に当たる。
- 閉じると編集はいつも保存する。開いて閉じただけなら `state_json` を書かない（今の規則のまま。`docs/timeline-ui.md`）。
- 読めない `state_json`（JSON として読めない、または読めない `version`。空のテキストは読める：空の状態）：エディタを読み取り専用で開き
  （中身は空の状態）、閉じても `state_json` を書かない。上端の中央に「気をつけてほしい」の一行
  「This node's saved state can't be read, so changes won't be saved」を、エディタを閉じるまで出す。編集を受けてから捨てると気づかずに
  作業を失うので、編集そのものを受けない（読み取り専用のエディタと同じく、Add は無効、ドロップは受けない）。元のテキストはそのまま残り、
  ノードの実行が理由を出す。

## Preview のウィンドウ

新しい Preview ノードの大きなウィンドウ（読み取り専用）。視点の規則は `docs/space-and-view.md` の「Preview のウィンドウ」。

- ステージをウィンドウいっぱいに置く。インスペクタ・タイムライン・左の列・下の中央のバーは無い。
- 右上に閉じる ✕、右の中央に視点の操作のつまみと Set orbit center と「?」、右下に Reset View・グリッドのスイッチ・Fullscreen（状態はアイコンの形で示す。
  `docs/agents/ux-principles.md` の例外）。
- 下端に再生の帯：再生と一時停止、ループのスイッチ、シークの帯、時刻（並びはノード上の表示と同じ。`docs/preview-node.md`）。
- 一行の知らせは無い。ただし Set orbit center の待ちの間だけ、エディタと同じ上端の中央の席に、同じ形の一行
  「Click a spot to orbit around · Esc to cancel」を出す（`docs/space-and-view.md` の「Preview のウィンドウ」）。Escape はまず待ちを取り消し、
  待っていないときはウィンドウを閉じる（待ちの取り消しが先なのはエディタの上の「閉じ方」の表と同じ。待ちの規則は `docs/space-and-view.md` の「Set orbit center」）。
- Space は再生と一時停止を切り替える。受け方はエディタの Space と同じ（`web_src/studio/shortcuts.js` の `play`：Ctrl・Meta との組と
  キーのリピートは受けない。入力欄など、ステージがキーを持たない所では受けない。`pano_key_focus.js` の `stageOwnsKey`）。
  再生の帯が無い（時間の無い）ときは何もしない。
- 何を背景に描くか：IMAGE・VIDEO の source は、ノードの `background_range`（360・180）の範囲に貼る。`PANO_SCENE` は、その Scene の
  背景（`pano_upstream_*`）を、その Clip range とメディアの長さの中でだけ描き、外では Scene の `bg_color`
  （`pano_upstream_bg_color`）で塗る（Studio のエディタが上流の背景を描く規則と同じ。`web_src/pano_port_media.js`
  `backgroundShownAt`）。背景のメディアが無い Scene も `bg_color` で塗る。
- `PANO_SCENE` の層の深度のグリッドは、Studio のエディタと同じく色のプロキシの動画で描く（「ノードの入力から来た物」の `world` の 3D）。
- IMAGE の source の絵は、ノード自身の実行結果の `pano_input_images`（実行が受けた絵の一時ファイル）を先に読み、無いときと読めないとき
  だけ、つないだ先がそのまま読めるファイル（Load Image など。実行の前）を読む。途中のノードで作った IMAGE は実行結果にしか無い
  （`docs/adr/0003-external-input-sticker-failure-boundaries.md` の Amendment 2026-03-11。Studio のエディタの自分の背景と同じ読み方で、
  `web_src/studio/node_image.js` `loadNodeInputImage`）。
- `PANO_SCENE` のとき：開くとノード上の Scene のビューアの再生の位置と再生中かどうかを引き継ぎ、ノード上の表示は描くのも再生も
  止める（`web_src/pano_node_bridge.js` `sceneViewerWindowOpened`）。閉じるとウィンドウの最後の再生の位置と再生中かどうかを返し、
  ノード上の表示はそこから続ける（`sceneViewerWindowClosed`。`docs/preview-node.md` の「大きなウィンドウ」）。
- IMAGE・VIDEO の source のとき：ノード上の VIDEO（`web_src/pano_preview_previewnode.js` の runtime）も同じく、開くとその再生の
  位置と再生中かどうかを引き継いで止め、開いている間はノード上で再生しない（ダブルクリック・Space でも始めない）。閉じると
  ウィンドウの最後の再生の位置と再生中かどうかを返し、ノード上の VIDEO はそこから続ける（runtime の `windowOpened`・`windowClosed`）。
  ノード上にまだ VIDEO が無い（実行の前で、ウィンドウが source のファイルを直に読む）ときは、引き継ぐものが無い。
- `source` に何もつないでいないとき（`source` の差し口に link が無いとき）：同じウィンドウを開き、背景も物も無い黒いステージを出す。
  右の中央のつまみと右下のボタンは同じ席に出し、グリッドはふだんどおり（開いたときは出し、グリッドのボタンで隠せる。`docs/space-and-view.md`
  の「Preview のウィンドウ」）。時間が無いので再生の帯は出さず、一行の知らせも出さない（Preview のウィンドウには一行が無い。Set orbit center の
  待ちの一行だけは出す）。`openPreviewWindow` は
  IMAGE の読み方を通り、読む絵が無いので何も貼らない。ノード上の右上のボタンがこのウィンドウを開き、ブラウザの全画面にはしない（`docs/preview-node.md`
  の「ノード上」。持ち主、2026-10-31）。
- 見た目はエディタと同じ（`docs/design.md` の「新しい UI の見た目」）。

## まだ決めていないこと（spec ではない）

- 次の候補：Output の小窓（Frame モード）は、3D ファイルの Sticker を読み込んでいる間、ステージを描くたびに描き直されることがある（内容の
  cache が読み込み中は毎フレーム作り直されるため）。

- 二次の文字の濃さと、地面のグリッドの見た目の値（最初の画面を作るときに実際の画面で決める）。
- 右の中央に縦に置いたつまみの列（試してから、右下にまとめる形に戻すことがある）。
- 地面の自動推定（Scene のカードに席だけを取る。やるなら ADR 0046 の「開くたびに測り直さない」と合わせ、押したときに一度だけ推定して
  保存する形。次の候補）。
- 次の候補：Panorama モードでは `sticker_state` が出ないことを、ノード上の一行に添える（例「· no sticker_state」）。
- 次の候補：極を囲む投げ縄は ERP の上では閉じない（`docs/render-contract.md` の「ペイントのストロークの描き方」、ADR 0057）。
- 次の候補：ラスタは ERP の上で動かす（`transform.dv` は −1〜1 に寄せる）ので、極に近づけると潰れて見え、極を越えて動かせない
  （ストロークのまとまりは球面の上で動かす）。下の項と同じく、描く式を球面の上の置き方に変える必要がある。
- 次の候補：ラスタは ERP の平面で回して描くので、極の近くで回したり大きくしたりすると形が崩れる（ストロークのまとまりは球面の上で回す）。
  正しく直すには、ラスタを描く式（エディタとノードの両方）を球面の上の置き方に変える必要がある（ADR 0056）。
- 次の候補：変形したラスタの枠が経度で 180° より広いと、エディタのラスタの当たり（`rasterObjectAlphaAt`）は継ぎ目をまたぐ短い向きで
  位置を測るので、枠の遠い側の半分に当たらない（回す前からある差）。
- 次の候補：ノードはラスタの画像を、前もってぼかさずに双線形で一点ずつ読むので、大きな画像をずっと小さな出力に描くと縞が出ることがある
  （ブラウザの `drawImage` も同じなのでエディタとはそろう。前の LANCZOS の縮小はぼかしてから縮めていた）。
- Sticker を複数つなげる入力（Autogrow。`sticker` と `sticker_state` を組で増やす必要があり、今は作らない。`docs/studio-node.md`）。
