# エディタの操作

次の規則を定める：古い UI のエディタ（旧ノード `PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview` のエディタと、Preview の読み取り専用で古い UI に残る道）の視点の操作（見回し、Reset View、視点の遷移、視点の記憶、右下のボタン群）、Preview のノード上の Scene のビューアの視点（6DoF、3D view controls のプリセット、オービット・パン・ホイール）、新しい UI と共有する部品の規則（Frame Selected の外接球、`world` の Sticker と Camera の記録、レンズの行、新しい 3D の Sticker を収めて置く式（ノードの 3D の `port` の Sticker と共通）、3D ファイルを置く流れ、上流の Scene の作業コピーと上書き、`port` の Sticker の同期、Pose handoff の表示と記録）、キーと確認のダイアログ、ポインタの取り消し、古い UI のインスペクタの行。用語は `CONTEXT.md` に従う。決めた理由は ADR 0029（Panorama Studio）、0030（上流の上書き）、0062（Panorama Studio をいつも新しいエディタで開く）にある。

この文書が持たない規則：three.js と Spark で描く仕組み・GPU の当たり判定・空間の表示の描き方・エディタでの描画（`docs/threejs-spark-integration.md`）、Keyframe を打つ・直す・消すときの記録の規則・タイムライン・目のアイコン・再生・上流の層の行（`docs/timeline-ui.md`）、状態 v2・評価関数・上書きの記録を一つの層に当てる規則（`docs/scene-state-v2.md`）、ノードの出力・実行結果の `ui`・上流の Scene の重ね方・`port` の Sticker と Pose handoff のノードの規則（`docs/studio-node.md`）、描画関数（`docs/render-contract.md`）、ノード上の表示の規則（`docs/studio-node-surface.md`）。

Panorama Studio のエディタと新しい Preview のウィンドウは、いつも新しい UI で開く（ADR 0062）。その視点の規則は `docs/space-and-view.md` が、画面の規則は `docs/studio-ui.md` が持つ。古い UI はもう Panorama Studio を開かないので、この文書の古い UI の規則は旧ノードのエディタだけのものである。旧ノードは World の内容・状態 v2 の Camera・上流の Scene を持たない（旧 Cutout は shot を持つ）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 右下のボタン群の位置（古い UI） | — | `web_src/pano_editor_ui_state.js` `floatingRightState`、`web_src/components/PanoFloatingRight.vue` | `tests/pano_editor_ui_state.test.mjs` |
| 3D view controls のプリセット（ボタンの割り当て。Preview のノード上の Scene のビューアが使う） | — | `web_src/pano_view_controls.js` `viewDragAction`・`VIEW_CONTROLS_SETTING`、使うのは `web_src/pano_scene_viewer.js`・`pano_scene_viewer_node.js` | `tests/pano_view_controls.test.mjs`、`tests/pano_scene_viewer.test.mjs` |
| ピボット・パン・ホイールの規則（Preview のノード上の Scene のビューア） | — | `web_src/pano_space_navigation.js` `createSpaceNavigation`、`space/view.js` `navigationTarget`・`panDepth`・`panView`・`reuseWheelPick` | `tests/pano_space.test.mjs`、`tests/pano_scene_viewer.test.mjs`、`tests/pano_space_navigation.test.mjs` |
| Frame Selected の外接球 | — | `space/bounds.js` `frameSphere`、新しい UI は `web_src/studio/view_camera.js`・`stage_content.js` から使う。収める距離は `space/view.js` の `frameView` が `fitDistance`（`space/fit.js`）と `viewFitFov` で求める | `tests/pano_space.test.mjs`、`tests/studio_view_camera.test.mjs` |
| 視点の遷移 | — | `web_src/pano_view_transition.js` `blendView`・`viewTransitionFrame`・`viewTransitionDuration`・`shownSpaceMode`・`spaceModeChoice` | `tests/pano_view_transition.test.mjs` |
| 視点の記憶 | — | `web_src/pano_view_memory.js` `viewMemory`・`restoredView`、古い UI は `web_src/editor/space.js` `saveView`・`restoreView`、新しい UI は `web_src/studio/view_camera.js`、`web_src/pano_node_bridge.js` `editorSession` | `tests/pano_view_memory.test.mjs` |
| `world` の Sticker のギズモの値（一様の拡大縮小、つかんだときからの差、pitch が 89.9° を超えたときの yaw の保ち方） | — | `space/gizmo.js` `uniformScale`・`gizmoDragLanes`、`web_src/three_view/gizmo.js` `createGizmo`。使うのは新しい UI の `web_src/studio/gizmo_overlay.js`・`stage_objects.js`・`camera_state.js` | `tests/pano_space.test.mjs`、`tests/studio_stage_objects.test.mjs` |
| `world` の Sticker の記録、Placement を変えない | — | `web_src/pano_editor_state.js` `setWorldStickerTransform`・`setWorldStickerField`・`newWorldSceneSticker`。使うのは新しい UI の `web_src/studio/stage_objects.js`・`inspector_actions.js`・`add_files.js` | `tests/pano_editor_state.test.mjs`、`tests/studio_inspector_actions.test.mjs` |
| 3D の Sticker を収めて置く式と収める距離（ノードの式。JS の写しは Python との一致を確かめる test が読む。Frame Selected も同じ距離。経路の `box` は `scene` の glTF の座標のまま使い、`sceneItemBox` を掛けない） | `comfyui_pano_suite/core/world.py` `box_sphere`・`fit_distance`・`FIT_MARGIN`・`fit_3d_position`・`FIT_3D_MIN_DISTANCE`・`NEW_WORLD_STICKER_DISTANCE`、`port_sticker.py` `PORT_3D_FIT_FOV_DEG` | `space/fit.js` `fitDistance`・`FIT_MARGIN`・`fit3dPosition`・`FIT_FALLBACK_FOV_DEG`・`DEFAULT_VIEW_HFOV`・`NEW_WORLD_STICKER_DISTANCE`、Frame Selected の `frameView`（`space/view.js`）も `fitDistance` を使う | `tests/fixtures/place_3d/fit.json`、`tests/test_place_3d_parity.py`、`tests/pano_space.test.mjs` |
| 3D ファイルを置く流れ（選べるファイル、上限、アップロード、経路への問い合わせ、待つ間と失敗） | — | `web_src/pano_sticker_file_import.js` `isSticker3dFile`・`dragHasStudioFile`・`WORLD_FILE_ACCEPT`・`FILE_3D_MAX_BYTES`・`file3dTooLargeMessage`・`uploadWorld3dFile`、新しい UI の `web_src/studio/add_files.js` | `tests/pano_sticker_file_import.test.mjs`、`tests/studio_add_files.test.mjs` |
| Camera の記録（shot、`position`・`rotation`・`fov`・`aspect` への書き方、レンズの行） | — | `pano_editor_state.js` `cameraShot`・`setCameraShot`・`setCameraField`・`setCameraCurveKeepingCenter`、`pano_lens.js` `lensFovKeepingCenter`。使うのは新しい UI の `web_src/studio/camera_state.js`・`inspector_actions.js` | `tests/pano_editor_state.test.mjs`、`tests/studio_camera_state.test.mjs`、`tests/studio_inspector_actions.test.mjs` |
| 上流の Scene の作業コピーと上書き（読む、作業コピー、時刻、描くもの、書き戻し、消す、上流に戻す、掃除、上流の背景） | — | `web_src/pano_upstream.js` `upstreamWorkingLayers`・`upstreamLayerView`・`isUpstreamSticker`・`upstreamEditedRecords`・`upstreamDeletedRecords`・`upstreamRevertedRecords`・`upstreamPrunedRecords`・`upstreamBackgroundOf`、`web_src/pano_upstream_layers.js` `createUpstreamLayers`、`web_src/pano_upstream_edits.js` `createUpstreamEdits`。使うのは新しい UI の `web_src/studio/upstream.js` と Preview のノード上の Scene のビューア（`pano_scene_viewer.js`、上書きなし）。新しい UI での使い方は `docs/studio-ui.md` の「上流の物の編集」 | `tests/pano_upstream.test.mjs`、`tests/pano_upstream_edits.test.mjs`、`tests/pano_upstream_layers.test.mjs`、`tests/test_upstream_editor_parity.py`、`tests/studio_upstream.test.mjs` |
| `port` の Sticker の同期 | — | `web_src/pano_stickers_node_surface.js` `portStickerSyncValue`・`reconcilePortStickerState`・`stickerMediaKind`、`web_src/pano_external_sticker_sync.js` `runExternalStickerSync` | `tests/pano_stickers_node_surface.test.mjs`、`tests/pano_external_sticker_sync.test.mjs` |
| Pose handoff の表示と記録（新しい UI とノード上の UI） | — | `web_src/pano_port_handoff.js`（`inheritPortHandoff`・`storedPortSticker`・`recordHandoffEdits`・`revertHandoffLane`、保存した Sticker と見せている Sticker の組を持つ `syncPortHandoffPair`・`storedPortState`）。新しい UI は `web_src/studio/session.js` が呼ぶ（新しい UI だけのことは `docs/studio-ui.md` の「`port` の Sticker」） | `tests/pano_port_handoff.test.mjs`（当て直した姿がノード上の UI の `surfaceSceneEditorState` と同じこと、を含む）、`tests/studio_session.test.mjs` |
| インスペクタの行（古い UI） | — | `pano_editor_ui_state.js` `inspectorRows`、`web_src/components/PanoSidePanel.vue` | `tests/pano_editor_ui_state.test.mjs` |
| キーと確認のダイアログ（古い UI。Escape の順、ステージのキー、確認のダイアログを閉じる、選択の段、動かなかったクリック） | — | `web_src/editor/keyboard.js` `onEscClose`・`stageOwnsKey`、`web_src/pano_key_focus.js` `stageOwnsKey`・`isTextField`・`isFormControl`、`web_src/editor/commands.js` `settleCanvasConfirm`、`web_src/editor/history.js` `pushHistory`、`web_src/editor/pointer_transform.js` `endTransform` | — |

## 視点の操作

古い UI のエディタ（旧ノード）の Panorama 表示は World の内容を持たないので、視点は World の原点に立って向きを変える（見回し）だけである。Preview のノード上の Scene のビューア（`docs/preview-node.md` の「`PANO_SCENE` を見る」）は、視点の操作の部品 `pano_space_navigation.js` で 6DoF に動く。この節はその二つの規則を持つ。Panorama Studio のエディタと新しい Preview のウィンドウの視点は `docs/space-and-view.md` が持つ。

- 右下のボタン群（`PanoFloatingRight.vue`）：Reset View・Hide Grid、プレビューでは Fullscreen を、右端に固定した行に並べる。ボタンの位置を動かさない規則：どれかのボタンが出たり消えたりしたせいで、他のボタンの位置が変わってはいけない。Reset View は Frame 表示と読み取り専用のときに消さずに無効（disabled）にする。表示の条件は `pano_editor_ui_state.js` の `floatingRightState` にまとめ、`node --test` で確かめている。
- 見回し：何もないところの左ドラッグと中ボタンのドラッグで見回し、ホイールで画角を変える。右ドラッグは使わず、右クリックのメニューも抑止しない。
- Preview のノード上の Scene のビューアは 6DoF で動く。違いは `docs/preview-node.md` が持つ（ノード上ではキーを受けない、物の操作が無いので左ドラッグはいつも表の何もないところの扱い）。
- 6DoF の操作（`web_src/pano_view_controls.js`）：ボタンと修飾キーから動きを決める表をプリセットごとにデータで持ち、`viewDragAction`（ボタンの割り当て）と `emptyLeft`（何もないところの左ドラッグ）が決める。プリセットは ComfyUI の設定の「Panorama Suite › Editor › 3D view controls」（id `PanoramaSuite.Editor.ViewControls`、拡張の `settings` で登録し、保存は ComfyUI のコアが行う）で選ぶ。動きは三つ：オービット（ポインタの下の点のまわりを回る。three.js の OrbitControls・コアの Load3D と同じ向きと速さ）、パン（ポインタの下の点がポインタに付いて動く）、見回し（その場で向きを変える。Unity-like の右ドラッグだけ。慣性あり）。

  | 操作 | Default（既定） | Blender-like | Unity-like |
  |---|---|---|---|
  | 何もないところを左ドラッグ | オービット | —（選択の解除だけ） | —（選択の解除だけ） |
  | 中ボタンのドラッグ | パン | オービット | パン |
  | Shift + 中ボタンのドラッグ | — | パン | — |
  | 右ドラッグ | オービット | — | 見回し（フライ） |
  | Shift + 右ドラッグ | パン | — | — |
  | Alt + 左ドラッグ | — | — | オービット |
  | ホイール | ポインタの下の点へのズーム | 同左 | 同左 |

  - Default は、ComfyUI の利用者が知っているコアの Load3D（OrbitControls）と Sketchfab に合わせ、何もないところの左ドラッグと右ドラッグでオービットする。中ボタンと Shift + 右ドラッグでパンする。6DoF のその場の見回しは Default に入れていない。
  - Blender-like は Blender の 3D ビューポートの標準（中ボタンでオービット、Shift + 中ボタンでパン、ホイールでズーム）だけを持つ。右ドラッグの見回しは Blender にない操作なので持たない。Blender の何もないところの左ドラッグは範囲選択で、エディタでは Ctrl + ドラッグがそれに当たるので、6DoF の何もないところの左ドラッグは視点を動かさない。
  - Unity-like は Unity のシーンビューにある操作（右ドラッグのフライの見回し、Alt + 左ドラッグのオービット、中ボタンのパン、ホイールのズーム）だけなので、名前に足すものはない（Unity の Alt + 右ドラッグのズームなどは入れていない）。何もないところの左ドラッグは Unity でも範囲選択なので、Blender-like と同じく視点を動かさない。
  - プリセットの表示名は、元のアプリにない操作を足したときはそれを名前に書く。設定に保存される値は `default`・`blender`・`unity` で、表示名を変えても変わらない。
  - Preview のノード上の Scene のビューアには物の操作が無いので、修飾キーなしの左ドラッグは表の「何もないところ」の行（プリセットの `emptyLeft`）になり、Blender-like と Unity-like では視点を動かさない。表にないボタンと修飾キーの組み合わせは何もしない（`pano_scene_viewer.js` の `pointerDown`）。
  - 回る中心（ピボット）・パンの量・ズームの先は、どのプリセットでも同じ規則で決める（`pano_space.js` の `navigationTarget`・`panDepth`）。オービットを始めたとき・ホイールを回したときに、ポインタの下にある World の内容の点を求める（`pano_three_view.js` の `pickSurface`。`docs/threejs-spark-integration.md` の「当たり判定（GPU）」）。SPLAT の箱の当たりは使わない（当たらなかったものとして扱う）。箱の中からは光線が箱を出る点になり、見えているスプラットとは関係のない奥行きになるためである。ポインタの下に何もなければ、視点をまだ動かしていない間は内容の中心（視点の前にあるとき）、それ以外は今のピボット（視点の前方 `distance` の点）を使う。このとき点は、視点から内容の大きさの 5% より近くには置かない（それより近ければ、同じ向きの 5% の距離の点にする）。壁やピボットに寄り切った後でも、何もないところでのパン・ズーム・オービットが止まらないようにするためである。当たったときは、その点そのものを使う。
    - オービット：その点のまわりを回る。点は画面上の同じ位置に留まるので、軸から外れた点のまわりでも視点が跳ばない。ピボットはその点の奥行きに移り、画面の中心の前方に残るので、見回し（Unity-like）でも見えないところへずれない。
    - パン：ポインタの下の点は使わず、ピボットの奥行き（視点の前方 `distance`。内容の大きさの 5% を下限とする）での 1 画素の量で動かす（`panDepth`）。ピボットの面がポインタにぴったりついてくる。Blender の既定（Auto Depth がオフ）と同じ。つかんだ点の奥行きは数 cm 先の Sticker から SPLAT の箱の向こう側まで変わり、同じドラッグで動く量がぶれるので使わない。動く向きは視点の画面の軸（roll を含む）に沿う（`panView` は `viewAxes(yaw, pitch, roll)` を使う）。
    - ホイール：その点へ向かって、視点から点への線の上を進む（zoom to cursor。点はポインタの下に留まる）。一段の量はその点までの距離の 15%（`ZOOM_STEP`）で、近づいても進まなくならないように、内容の大きさの 1% を最小の量にする。ただし点は通り越さず、内容の大きさの 0.1% 手前で止まる。戻すときは一段で 15% 進んだぶんを戻す。ピボットはその点の奥行きに移るが、内容の大きさの 5% より近くにはしない。壁に寄り切った後のパンが止まったように遅くならないためである。ホイールでは前回の判定の結果を使い回す（`reuseWheelPick`）。使い回すのは、内容（`contentKey`：描いた要素と変形。MoGe VIDEO の次の要素などで変わる）と視点が前回の一段の後のままで、ポインタが判定した位置から 4px 以内のときで、判定から 250ms の間か、判定に 16ms を超えたときはホイールを続けて回している間（一段の間が 250ms 未満）である。当たらなかったときは「当たらなかった」ことを使い回し、点はその都度上の規則で決める。6DoF では、ホイールは画角を変えない（Preview のノード上の Scene のビューアの Alt + ホイールとピンチは画角を変える。`docs/preview-node.md` の「ノード上」。ADR 0061）。
  - 慣性：オービットとパンには付けない（Load3D の OrbitControls の既定 `enableDamping: false` と同じ）。見回し（3DoF と Unity-like の右ドラッグ）は、World の内容がないときの Panorama 表示と同じ慣性を持つ。
  - 右ドラッグを使うプリセット（Default と Unity-like）では、6DoF の間はキャンバスの右クリックのメニューを抑止する。キャンバスには右クリックだけの操作はもともとない。
  - Reset View ボタン（旧ノードのエディタ）は、World の原点、yaw 0・pitch 0・roll 無し、横の画角 `DEFAULT_VIEW_HFOV`（100°）に戻す（`editor/modal_events.js` の `reset-view`、遷移は `pano_view_transition.js`）。Frame 表示では何もせず、ボタンは Frame 表示と読み取り専用のときは無効（`pano_editor_ui_state.js`）。画角は視点の操作と同じく 35〜140° に寄せる（`pano_editor.js` の `setView`）。Preview のノード上の Scene のビューアの `Reset view` は、原点の正面に戻り、画角を `DEFAULT_VIEW_HFOV` にし、オービットの距離を World の内容の外接球の半径（無ければ `DEFAULT_DISTANCE`、1）にする（`pano_scene_viewer.js` の `resetView`）。
  - Frame Selected の外接球（新しい UI の Frame Selected が使う。ボタンと操作は `docs/space-and-view.md`）：向きを保ったまま、選んでいる `world` の Sticker の外接球が画面に収まる位置へ動く。球の中心からの距離は、下の「3D の Sticker を収めて置く」の収める距離（`fitDistance`。余白 1.1 倍）で、画角は今のビューの横と縦の小さい方である（`pano_space.js` の `frameView`）。球は three.js が読み込んだ要素の箱に `sceneItemBox` を掛けて求めるが、経路の応答の `box` はすでに `scene` の glTF の座標なので、`sceneItemBox` を掛けない。板は `worldStickerPlane` の四隅から、3D の Sticker は読み込んだ要素の箱に `sceneItemBox` の規則と Sticker の変形を掛けて外接球を求める。glTF のアニメーションを持つ要素は、読み込んだ要素の箱ではなく `docs/studio-node.md` の「中身の箱」の箱を使う。要素やメディアがまだ読み込まれていない間は、Sticker の位置を中心に、`scale` を半径とする球を使う。何も選んでいないとき、`sky` の Sticker を選んでいるとき、選んだ Sticker が Clip range の外のときは、World の内容全体が収まる位置へ動く。球を決める規則は `pano_space.js` の `frameSphere` にまとめ、`node --test` で確かめている。
  - 視点の遷移：Reset View（と、旧 Cutout の Add Frame や選択の一覧で選んだ要素へ向くとき）は、視点を瞬時に切り替えず、一般的な 3D ツール（Blender の Smooth View、Unity の F）と同じく、始点から終点まで短い時間で動かす。どこにいるのかを見失わないためである。Preview のノード上の Scene のビューアの `Reset view` も同じ仕組みを使う。
    - 補間：Viewport camera（position・yaw・pitch・hFOV・distance）を、位置と注視点の距離は直線で、yaw は最短の向き（±180° をまたぐときはそちら回り）で、pitch と画角は線形で補間する。時間の関数は ease-in-out（cubic）。純粋な関数として `pano_view_transition.js` の `blendView`・`viewTransitionFrame` にまとめ、`node --test` で確かめている。
    - 長さ：250〜600ms。回る角度（yaw の最短の差・pitch の差・画角の差の大きい方。180° で最大）と、内容の大きさ（`spaceScale`）を単位にした移動の距離（2 つ分で最大）の割合を足して、その間で決める（`viewTransitionDuration`）。見た目が変わらないときは遷移を作らず、着いたときに当てること（Reset View の注視点の距離を内容の大きさに戻すこと、3DoF に入ること）をすぐに当てる。
    - 描画：遷移は状態（`editor.viewTransition`）だけを持ち、独自の `requestAnimationFrame` やタイマーは使わない。エディタの描画のループ（`tick`）が毎フレームその時点の視点を書き込んで描くので、予約するアニメーションフレームは 1 つで、エディタを閉じると（`stopRenderLoop`）遷移も止まる。再生は止めない（見回しと同じ扱い）。
    - 中断：遷移中に視点をつかむ（キャンバスでのポインタの押し下げ・Panorama 表示でのホイール）と、遷移は今描いている視点で止まり、操作はそこから始まる。遷移中に別の遷移が来たら、今描いている視点から新しい遷移を始める（前の遷移は終点も含めて捨てる）。

  - 視点の記憶：旧ノードのエディタを閉じたときの視点（Panorama・Unwrap・Frame の表示、向き・画角）をノードごとに覚え、同じページの中で同じノードのエディタを開き直すとそこから始まる（`pano_view_memory.js` の `viewMemory`・`restoredView`、`space.js` の `saveView`・`restoreView`）。遷移の途中で閉じたときは、行き先を覚える。
    - 置き場所は `pano_node_bridge.js` の `editorSession(node).view` で、`state_json` にも `node.properties` にも書かない。ノードの削除・ワークフローの読み込み（`disposeNodeRuntime`）とページの読み込みで消え、そのあとは原点の 3DoF から始まる。
    - 覚えた値が使えないとき（数でない値・範囲の外の値、Frame が無いなどで Frame 表示が使えないとき）は、全部を既定の視点で開く。

  注視点（ピボット）は視点の前方 `distance` の点で、内容の大きさが分かると（視点をまだ動かしていなければ）その半径になる。見回し・移動は再生を止めない。計算は `web_src/pano_space.js`（3DoF の原点への固定は `spaceModeView`）にある。

## `world` の Sticker の記録

Panorama Studio の `world` の Sticker（画像・動画の板と、3D の Sticker）を動かすときに、新しい UI が使う共有の部品の規則。選び方・ギズモの見せ方・インスペクタの画面は `docs/studio-ui.md` と `docs/space-and-view.md` が持つ。

- ギズモの値：移動と回転の軸は World の軸（`TransformControls` の既定の `space: "world"`）。拡大縮小は一様で、どのハンドルでも、ドラッグで最も変わった軸の倍率を `scale` にする（`uniformScale`。0 以下にはしない）。
  - 回転で pitch の絶対値が 89.9° を超えると、yaw と roll は同じ軸のまわりの回転になり、読み出した yaw が跳ぶ。そこでは Sticker の yaw を保ち、回転の差を roll で表す（`gizmoDragLanes`）。インスペクタの数値が跳ばない。
- 記録：ギズモのドラッグは、モードの Lane（`position`・`rotation`・`scale` のどれか一つ）だけを、`docs/timeline-ui.md` の記録の規則で書く（`setWorldStickerTransform`、内部は `setLaneValue`）。ドラッグの変化は、つかんだときのギズモからの差として、Sticker のその時点の値に掛ける（`gizmoDragLanes`）。
- インスペクタの欄で書くとき（`setWorldStickerField`）：位置には上限・下限がなく、scale は 0.01 以上で上限がない。
- Placement：既存の Sticker の `placement` を `sky` と `world` の間で切り替える UI も経路もない。`placement` を決めるのは Sticker を作るとき（新しい UI の `add_files.js`）だけである。ノードによる `port` の Sticker の置き換え（下の「`port` の Sticker の同期」）は別である。

### 3D ファイルを置く流れ

新しい UI の Add とドロップで 3D ファイルを `world` の Sticker として置く流れ（input/3d にアップロード → 経路に問い合わせ → 表示）。どこに着くか（置く点と向き）は `docs/space-and-view.md` の「着く所」、画面の見せ方は `docs/studio-ui.md` の「Add とドロップの見せ方」が持つ。画像はドロップや選択の直後に手元のファイルを復号して出し、裏でアップロードするが、3D ファイルは手元で先に出せない。出力と同じ見た目にはコアの読み手が要るためで、経路が返るまで中身を描かない（`web_src/studio/add_files.js`、`pano_sticker_file_import.js` の `uploadWorld3dFile`）。

- 選べるファイル：3D ファイルは `docs/scene-state-v2.md` の「3D ファイルの `file` の Source」の 9 つの拡張子（ComfyUI の Load3D と同じ。`isSticker3dFile`・`WORLD_FILE_ACCEPT`）。ドラッグの間はファイル名が読めないので、`dragHasStudioFile` は、画像のファイルに加えて、種類が空・`application/octet-stream`・`model/` で始まるファイルの項目も受ける。旧ノードが使う画像だけの `isStickerImageFile`・`dragHasStickerImageFile` は変えず、旧ノードのエディタは 3D ファイルを受けない（`docs/legacy-node-surfaces.md`）。
1. 100 MB を超えるファイルはアップロードせずに断る（`FILE_3D_MAX_BYTES`。Load3D と同じ上限。ComfyUI_frontend の `Load3dUtils.ts:37, 42-55`）。
2. Sticker を仮の位置で状態に加えて選ぶ。Source は、アップロードが終わるまで画像と同じく `filename` が空で、その間に保存した状態には入らない。
3. Load3D と同じく `/upload/image` に `image`（ファイル）・`subfolder` `3d`・`type` `input` で送り、ComfyUI の `input/3d` に保存する（Load3D は `Load3dUtils.uploadFile` で `image` と `subfolder` を送り、`type` は既定の `input`。`Load3dUtils.ts:57-77`、コアの `server.py` の `image_upload`）。同じ名前のファイルがあれば、中身のハッシュが同じならそのファイルを使い（書かない）、違えば ` (1)` などを付けた名前で保存する（`server.py` の `image_upload`、`overwrite` を送らないとき）。返った `name`・`subfolder`・`type` を Source にする（`fileSource`）。
4. エディタ用ファイルと中身の箱を `docs/studio-node.md` の「3D ファイルの `file` の Source のエディタ用ファイル」の経路で求める。経路が答えたら、Source に `filename` が入るのと同じ時点で、応答の `box` から位置を決め直す（式は `docs/space-and-view.md` の「着く所」）。待つ間にユーザーが位置を動かした・Keyframe を打ったときは変えない。
5. 待つ間（アップロードから中身が描けるまで）：Sticker は選ばれているが、中身は描かない。出力と違う見た目を一度も出さない。上端の中央の一行に「Loading 3D model…」を出す（`docs/studio-ui.md` の「一行の知らせの種類」）。
6. 失敗（アップロードの失敗、上限を超えた、読めない形式や壊れたファイル）：Sticker を消し（Undo の段は残さない）、一行に理由を出す。読めないときの理由は、エディタ用ファイルの問い合わせが返す文（ノードの警告と同じ文。FBX は「GLB に変換する」ことを示すコアの文）である。
7. （未実装）経路が応答しても three.js がエディタ用ファイルを読み込めない（404 のほかの読み込みのエラー）とき：Sticker は消さない（出力は経路と別にファイルを読むので描ける）。その知らせを出す元はまだ無い（`docs/studio-ui.md` の「読み込み中と空の画面」の行）。404 は経路への問い合わせ直しで扱う（`docs/threejs-spark-integration.md` の「空間の表示」）。

### 3D の Sticker を収めて置く

ノードが加える 3D の `port` の Stickerの位置を、中身の全体が視野に収まる距離で決める。収める距離は Frame Selected（上の「視点の操作」）と同じ一つの規則である。式は一つで、Python（`core/world.py` の `fit_3d_position`）と JS（`pano_space.js` の `fit3dPosition`）が同じ fixture で同じ値を返す。この規則が決めるのは新しい Sticker の初めの値だけで、保存した状態の Sticker の位置、上流の Scene の要素、`scene` の中身は動かさない。ノードが使う入力は `docs/studio-node.md` の「`port` の Sticker が状態になければ」の項目にある。新しい UI で置く 3D ファイルの Sticker は、この式ではなく `docs/space-and-view.md` の「着く所」で置く。

- 入力：視点 `eye`（World の glTF の座標）、向き `dir`、中身のバウンディング球（中心 `c` と半径 `r`。中身自身の座標、つまり `scene` の glTF の座標）、Sticker の回転 `R`（`yaw_deg`・`pitch_deg`・`roll_deg` を `pano_world.js` の `worldRotation`・`core/world.py` の `world_rotation` にした行列）、画角 `fov`（視野の横と縦の小さい方、度。有限の数でないか 0 以下なら、ノードの画角（下の「ノードの画角」）を使う。JS ではその値を `FIT_FALLBACK_FOV_DEG` に持つ。Python の `fit_3d_position` は代わりの画角を引数で受け取り、ノードは `PORT_3D_FIT_FOV_DEG` を渡すので、値の持ち主は `port_sticker.py` の一つだけである）、距離の下限 `d_min`。`scale` はいつも 1 なので式に入れない。
- 中身の球（`box_sphere`）：中身の箱 `{ min, max }`（経路の応答の `box` はすでに `scene` の glTF の座標なので、`sceneItemBox` は掛けない（`sceneItemBox` は three.js が読み込んだ要素の箱（SPLAT は 3DGS の座標）に掛ける）。`box` が無い、または `min`・`max` が 3 つの有限の数の配列でない、`min` が `max` を超える軸があるときは `null` と同じに扱う）から、`c = (min + max) ÷ 2`、`r = |max − min| ÷ 2`（`boundingSphere` に箱の 8 隅を渡したときと同じ）。
- 収める距離：`fitDistance(r, fov) = r ÷ sin(fov ÷ 2) × FIT_MARGIN`（`fit_distance`。`FIT_MARGIN` は 1.1。球と画面の端の間に余白を取る）。Frame Selected の `frameView` も、半径を `max(r, 1e-6)` にし、画角を `viewFitFov` にしてこの関数で距離を求める。
- 置く距離：`d = max(fitDistance(r, fov), d_min)`。下限 `d_min` は、小さな中身を視点のすぐ前に置かないためのもので、ノードは `FIT_3D_MIN_DISTANCE` を使う。`FIT_3D_MIN_DISTANCE` は 0.1（World の単位）。
- 位置：`position = eye + d · dir̂ − R · c`（`dir̂` は `dir` を長さ 1 にしたもの）。中身の位置は合わせ直さず、中身の原点が `position` に来るので、球の中心 `position + R · c` が、視点から `dir` の向きに `d` の点に来る。球を視点から見た角度は `fov` より少し小さい（余白 1.1 倍。下限が効くときはさらに小さい）。`dir` がビューの中心なら、球は視野の短い方の辺の少し内側に収まる。中心から外れた点にドロップすると、その点が球の中心になるので、中身の一部が画面の外に出ることがある。
- 中身が無いとき・壊れているとき：箱が無い（要素が空）、または `c`・`r` が有限の数でないときは、`c = 0`、`d = NEW_WORLD_STICKER_DISTANCE`（2。JS は `pano_space.js`、Python は `core/world.py` の同じ名前の定数）として同じ式で置く（中身の原点が、視点から `dir` の向きに 2 の点に来る）。`r = 0`（点が一つ）は壊れていない中身として扱い、`d` は `d_min` になる。
- ノードの画角：ノードにはビューが無いので、エディタの Viewport camera の既定の横の画角 100° を横長 16:9 のビューの縦にした `2 atan(tan 50° × 9 ÷ 16)`（約 67.67°）を使う（`port_sticker.py` の `PORT_3D_FIT_FOV_DEG`）。既定の横の画角は一つの定数 `DEFAULT_VIEW_HFOV`（`pano_space.js`、100）で、旧ノードのモーダルのエディタ（`pano_editor.js` の `editor` の `viewFov` と、見回しの `setView` の既定、Reset View の `editor/modal_events.js` の `hFOV_deg`）と Studio のノード上の表示（`node_surface/*.js` の既定の `view` の `fov`）が使う。旧ノードの表示（`pano_preview_previewnode.js`・`pano_cutout_node_surface.js` の `100`、`docs/legacy-node-surfaces.md`）は変えない。
- fixture：`tests/fixtures/place_3d/fit.json`。各 case は入力 `eye`・`dir`・`center`・`radius`（中身が無い case は `center` と `radius` が `null`）・`rotation`（`yaw_deg`・`pitch_deg`・`roll_deg`）・`fov_deg`（有限でない画角は JSON に書けないので `null` で表す）・`min_distance`（`d_min`）と、期待する `fit_distance`（`fitDistance(r, fov)`。中身が無い case は `null`）と `position` を持つ。少なくとも、ノードの正面の case（`eye` は原点、`dir` は `[0, 0, -1]`、回転 0、`fov_deg` はノードの画角、`min_distance` は 0.1）、pitch のある `dir`、yaw のある回転と中心の外れた中身、下限が効く小さな中身（0.1 と、エディタの near × 2 が勝つ値の両方）、中身が無い case（距離が `NEW_WORLD_STICKER_DISTANCE` になる）、`fov_deg` が 0 以下・有限でない case（ノードの画角で置く）を入れる。`tests/test_place_3d_parity.py` が Python と JS の両方で同じ case を読んで一致を確かめ（箱から球を求める `box_sphere` も確かめる）、`tests/pano_space.test.mjs` は、`frameView` の距離が同じ case の `fit_distance` になること、`FIT_FALLBACK_FOV_DEG` が `DEFAULT_VIEW_HFOV` と 16:9 から求めた値であること、`DEFAULT_VIEW_HFOV` と 16:9 から正面の case の `fov_deg` が出ることを確かめ、Python の test は `PORT_3D_FIT_FOV_DEG` がその値であることを確かめる。中身の箱は `docs/studio-node.md` の Python の関数 `content_box` が一つだけ持ち、エディタは経路の応答で受け取る。

## Camera の記録

Panorama Studio の状態 v2 の `camera` を書くときに、新しい UI が使う共有の部品の規則。Camera の操作と画面は `docs/space-and-view.md` と `docs/studio-ui.md` の「エディタの中の Camera」「Camera タブ」が持つ。

- 作業状態：`parseSceneEditorState`（`pano_editor_state.js`）の状態 v2。Camera の値は状態の欄（`projection`、`position`、`rotation`、H FOV の `fov`、`aspect`、`curve`）だけで、エディタはこれらだけを書く（オーナーの決定、2026-10-11）。shot（id は `camera`）は、再生ヘッドでの Camera を評価関数（`evaluateCamera`、ノードと同じ評価）で求めた表示の値（`cameraShot`）で、V FOV は `aspect` から `g_κ(vFOV ÷ 2) = g_κ(hFOV ÷ 2) ÷ aspect` で求める（`g_κ` は `lens_radius`、κ = 1 では `tan`）。shot の画角の組は書き戻さない。
  - 向きと位置を変える操作は、shot の向きと位置を変え、`setCameraShot` が変えた分だけを `rotation`・`position` に記録の規則で書く（新しい UI は `web_src/studio/camera_state.js` から呼ぶ）。yaw などの角度は、元の値から最短の向きの値で書くので、±180° をまたいでも Camera が逆回りしない。
  - 画角は `fov` の Lane に記録の規則で直接書く（`setCameraField`）。
  - 比率は `aspect`（Keyframe を持たない）に直接書く。ほかの操作は `aspect` を変えないので、ノードの出力の大きさ（幅 ÷ `aspect`）もエディタの枠と同じ比率のままになる。
  - V FOV と焦点距離は求めた値で、欄を持たない。

### レンズの行

Lens curve（κ、0〜1。1 が直線の像、0 が魚眼）を書くときの規則（ADR 0042）。新しい UI の Camera のカードの行は `docs/studio-ui.md` の「Camera のカード」、書くのは `web_src/studio/inspector_actions.js`（`setCameraCurveKeepingCenter`）。

  - Lens curve の編集は像の中心の大きさ `f` を保ち、H FOV がそれに従う（ADR 0042 の 2026-10-11 の改訂）。編集の始め（スライダーを動かし始めたとき、数値の入力ではその入力の始め）に、再生ヘッドで評価した κ₀ と hFOV₀ から `f = r_edge ÷ g_κ₀(hFOV₀ ÷ 2)`（`r_edge` は画像の横の半分の幅）を一度だけ求め、編集の終わり（スライダーを離す・入力を確定する）まで変えない。確定が来ずに終わった編集（ドラッグの途中でフォーカスを失ったなど）の始めの値は、次の Undo の段・Undo / Redo・選択の変更で捨てる（新しい UI は編集の `start` で渡す）。各段で、`r_edge` の画素の光線の角度 θ（`lensAngle`。式は `docs/render-contract.md` の「カメラのレンズ」）から H FOV = 2θ とし、κ による画角の上限（同じ節）に寄せる。寄せても `f` は求め直さないので、同じ編集の中で κ を戻すと元の H FOV に戻る。式は `pano_lens.js` の `lensRadius`・`lensAngle`（`r_edge` は約分されて消える）を使う（`lensFovKeepingCenter`）。
  - 書くのは `curve` と `fov` の二つの Lane で、同じフレームに、それぞれの Lane の記録の規則（Keyframe が無ければ静的な値、再生ヘッドが Keyframe の上ならその Keyframe、Keyframe の間なら再生ヘッドに Keyframe を足す）で書く。H FOV が変わらなくても `fov` も書く（Keyframe のある Lane では Keyframe になる）。一つの編集が Undo の 1 段になる。
  - H FOV の欄は `fov` だけを書く（ズーム。`curve` は変えない）。タイムラインの Lane の行での編集（Keyframe の移動・削除・Easing）は Lane ごとで、二つを組にしない。
  - Keyframe の間では `curve` と `fov` をそれぞれの Lane で補間するので、その間の `f` は両端の `f` から少しずれることがある（中心の大きさがわずかに揺れる）。組にして補間はしない。

## 上流の Scene の作業コピーと上書き

`scene` に別の Panorama Studio の `scene` 出力をつないだとき、新しい UI のエディタは上流の要素を、自分の状態の上書き（`upstream`、ADR 0030）を当てた姿で、出力と同じに描き、自分の要素と同じに選んで編集できる。この節は、そのための共有の部品（`pano_upstream.js`・`pano_upstream_layers.js`・`pano_upstream_edits.js`）の規則を持つ。何をどこまで編集できるか、選び方と見せ方は `docs/studio-ui.md` の「上流の物の編集」、タイムラインの行は `docs/timeline-ui.md` の「上流の層の行」。上流の要素は自分の状態の `stickers` に入れず、実行結果の `pano_upstream_layers`（`docs/studio-node.md` の「上流の Scene」）から作った作業コピーを描く。

- 読む：`scene` の入力が実行結果を作ったときのままのとき（`isNodeOutputMediaCurrent(node, "scene")`）だけ読む。各層の状態は `pano_upstream.js` の `upstreamLayersOf` で読み込み、上書きを当てる前の姿として、自分の状態とは別に持つ（`pano_upstream_layers.js` の `createUpstreamLayers`）。
- 作業コピー（`upstreamWorkingLayers`）：層ごとに、その層の `state.id` と同じ `layer` を持つ自分の `upstream` の記録を `applyUpstreamOverrides` で当て（同じ `id` の層が二つ以上あれば、最も下流の層にだけ。ノードの `_override_layers` と同じ）、複製し（`structuredClone`。上流の層とも記録とも共有しない。ただし上書きで変わらない `painting` は複製せず、上流の層と共有する）、層の `timeline.fps` が自分のものと違えば `rebaseSceneState` で自分の fps に再基準化する。各 Sticker は `origin`（`{ layer: 層のキー, id: 上流の要素の id }`）と、自分の要素とも他の層の要素とも重ならない id `upstream:<層のキー>:<上流の要素の id>` を持つ。どちらもエディタだけのもので、`state_json` に書き戻す上書きの記録には入れない。`id` の無い層（状態が一度も書かれていない）は上書きを受けない。作業コピーは、新しい実行結果を読んだとき、自分の Timeline fps が変わったとき、Undo・Redo で状態を戻したときに作り直す。作業コピーを作っても `state_json` は書かない（開いて閉じただけなら差分は出ない）。作り直すたびに、書き戻しで比べる基準（`upstreamBaseline`）も作り直す。
- 時刻：作業コピーは自分の fps なので、各層は自分の再生位置のフレームでそのまま評価する。`port` の素材も、作業コピーの Clip range と自分の fps で時刻を出す（`portMediaTime`）ので、層の fps が違っても素材の時刻（秒）は層のものと同じになる。再基準化で Keyframe と Clip range は自分の fps の整数フレームに丸まるので、fps が違う層は、層の fps のまま評価するノードの出力と最大で自分の半フレームずれうる。
- 描くもの（`upstreamLayerView`）：`sky` の Sticker とペイント（ストロークのグループ、ラスタ、マスク）を自分の Sky の下に、その層の `z_index` の順で（`skyPaintLayers`、`docs/editor-architecture.md` の「Paint layers」）。`world` の Sticker の板と、`scene`・3D の `port` の Sticker の 3D の項目は World に。隠した要素・消した要素は描かない（ノードも描かない）。上書きで隠した `scene`（`scene.visible`）や Clip range の外では `scene` の項目を描かず、消した 3D の `port` の Sticker は項目を求めない。どちらも、隠した 3D の `port` の Sticker と同じく、スロットの URL は残して `request` だけを `null` にする（読み込んだ項目を手放さないので、消すのを Undo しても読み込み直さない）。URL は上書きを当てる前の層（作業コピーの `received`）から求める。3D の項目のスロットは層のキーごと（`<層のキー>:scene`・`<層のキー>:sticker`）のまま。
  - 素材：ファイルの Source は自分の Sticker と同じ URL の画像。`port` の Sticker は、その層の `ui` の最初のフレーム・MP4・RGBA の PNG を、自分の `port` と同じ仕組み（`createVideoFollower`・`createFrameSequence`）で再生位置に合わせる。ペイントは層ごとのペイントエンジンで、自分のペイントと同じ大きさに描く。どれも縮小しない。
  - 3D の項目は、層と種類ごとの読み込みの組（`pano_three_view.js` の `upstreamItems`）で読み、SPLAT は自分のものと同じくビューごとの Spark（`pano_spark_views.js`）で描く。
- 画像は、結果が変わったときに新しい層が使わないものを手放す。
- 書き戻し：作業コピーの編集は、Undo の段を積むときに、前の書き戻しか作り直しのときからその要素で変わったフィールドだけを、Lane なら Keyframe ごと丸ごと、その層の `id` の記録に書く（`pano_upstream.js` の `upstreamEditedRecords`、`pano_upstream_edits.js` の `createUpstreamEdits`。規則は `docs/studio-node.md` の「エディタでの編集」）。記録の frame は作業コピーの fps（自分の Timeline fps）で、記録の `fps` もその値にする。上書きを持てない層（キーが `#` で始まる層：`id` が無い、または同じ `id` のより下流の層がある）の要素は書き戻さない。
- 消す：上流の要素を、その層の記録の `deleted` に `id` を加え、その要素の上書きを捨てて消す（`upstreamDeletedRecords`。記録が無ければ自分の Timeline fps で作る）。先に書き戻していない編集を書き戻し、記録から作業コピーを作り直すので、消した要素は作業コピーから外れ、描かれない。
- 上流に戻す：要素の上書きの全部、または Lane 一つを外す（`upstreamRevertedRecords`）。層の `scene` と `painting_visible` の上書きを外す（`upstreamLayerRevertedRecords`）、層の消した記録を空にする（`upstreamRestoredRecords`）。何も残らない記録は正規化で捨てる。
- 上書きの掃除：編集の Undo の段を積むとき（書き戻しの直後）に、今の実行結果が入力のままなら、エディタを開いたときを除いて、その結果にある層の記録から、層に無い `id` の上書きと消した記録を捨てる（`upstreamPrunedRecords`）。上流で消して実行すれば、下流の上書きと消した記録も次の編集で消える。結果に無い層（つなぎ替えた、まだ実行していない）の記録は捨てない。掃除は編集のときだけで、開いて閉じただけでは捨てない（`state_json` は変わらない）。
  - Undo・Redo：状態の `upstream` は Undo の段に入っているので、戻すと記録が戻り、作業コピーと基準を作り直す。
- 上流がつながっているか：リンクの型（`pano_preview_video.js` の `linkedInputType`。型が `*` か空のリンクは出どころの出力の型を見て、旧 Reroute ノードはさかのぼる）が `PANO_SCENE` か、今の実行結果に `pano_upstream_layers` があるとき。
- 上流の背景：`scene` の実行結果が今の入力のままで `pano_upstream_input_images` か `pano_upstream_input_videos` があれば、それを背景にする（`pano_upstream.js` の `upstreamBackgroundOf`。どの背景を出すかの規則は `docs/timeline-ui.md` の「どの背景を出すか」）。このとき自分の背景の入力の画像・VIDEO には戻らない（ノードも使わない）。

## `port` の Sticker の同期

Panorama Studio のノード上の UI は、`sticker` 入力の素材を `source.kind == "port"` の Sticker として状態に持つ
（`pano_stickers_node_surface.js` の `portStickerSyncValue`・`reconcilePortStickerState`）。ノードの規則は `docs/studio-node.md` の
「`port` の Sticker と Pose handoff」。

- 入力がつながっていて状態に `port` の Sticker がなければ加え、入力を外すと取り除く。
- 入力の型（接続が `*` のとき（Reroute など）は、つながった先の出力の型。`pano_stickers_node_surface.js` の `stickerMediaKind`）が IMAGE・VIDEO のときは、すぐに `sky` の Sticker を加える。
  それ以外（MESH・SPLAT・3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`、型が分からないとき）は、ノードの姿勢（実行結果の `pano_sticker_input_pose`）が届くまで加えず、
  届いたら姿勢の `placement` で加える。何を描くかを知っているのはノードなので、型が分からないときにフロントエンドは決め打ちしない。
- `sticker_state` がつながっているときも、ノードの姿勢が届くまで加えない。
- ノードが 3D の素材のために `sky` の `port` の Sticker を `world` に置き換えたとき（姿勢の `replace`）は、同じ置き換えを状態に当てる。
  2D の素材の Pose handoff の置き換えは状態に当てず、表示だけに当てる（下記）。
- 状態の vFOV は hFOV のまま保ち、描くときに素材のアスペクト比から求める（`skyStickerVfov`）。素材の読み込みで `state_json` は変わらない。
  素材は実行結果が新しい間だけ表示し、それまでは枠だけを描く。
- 同期は、入力のつなぎ替え・素材の読み込み・取り付けのときと、実行結果が届いたときに走る。実行結果が届くと、ノードの `onExecuted`
  （`node_surface/lifecycle.js` の `chainNodeHooks`）が実行結果 1 回につき一度だけ呼ぶ。新しい UI のエディタはこの同期を呼ばず、開いている間に入力をつなぎ替えても開いた状態には反映しない（未実装。ADR 0062）。

## `port` の Sticker の Pose handoff の表示と記録

ノードの規則は `docs/studio-node.md` の「`port` の Sticker と Pose handoff」。

- Pose handoff が渡す Lane は `pano_port_handoff.js` の `HANDOFF_LANES`（`sky` は `direction`・`roll`・`size`・`curve`、`world` は `position`・`rotation`・`scale`・`lens`）。`lens` の無い Pose handoff は、保存した Sticker の `lens` を外す（ノードの `_handoff_lanes` と同じ。共有の fixture `tests/fixtures/scene_inherit/handoff_sky_curve.json`・`handoff_world_drop_lens.json` を `tests/pano_port_handoff.test.mjs` と `tests/test_pose_handoff.py` が読む）。
- 新しい UI のエディタとノード上の UI（ADR 0030、`web_src/pano_port_handoff.js`）は、読み取り専用でなく（ノード上の UI は表示だけなので問わない）、実行結果が新しく（`isNodeOutputMediaCurrent` の `sticker-handoff`。`sticker` と `sticker_state` のどちらかをつなぎ替えると古くなる）、`sticker` と `sticker_state` がつながっている間（`pano_port_handoff.js` `portHandoffLinked`、結果の値を読むのは `nodePortHandoff`）、`pano_sticker_handoff` を保存した `port` の Sticker に当てて表示する（`inheritPortHandoff`。ノードの `_inherit_handoff` と同じ規則で、配置の置き換えは `sky` → `world`・`world` → `sky` の両方。`world` の Keyframe も表示する）。表示の fps が `pano_sticker_handoff` の `fps` と違うときは、`rebaseUpstreamRecord` と同じ規則（Sticker の素材の先頭を基準に丸める）で表示の fps に直す。このときは、表示の Keyframe が実行の Keyframe と最大で 1 フレーム（丸め）ずれることがある（表示だけで、保存する値と出力は変わらない）。
  - 表示しても `state_json` は変えない。エディタは保存した `port` の Sticker と表示中の Sticker の組（`pano_port_handoff.js` の `syncPortHandoffPair` が返す `{ stored, shown, handoff, fps }`。新しい UI は `session.js` が持つ）を持ち、書き戻しと Undo の履歴には、表示中の Sticker ではなく保存する形（`storedPortState`）を使う。組を作る部品は値を受け取って値を返し、状態を書き換えない。引き継いだ Lane は保存した値に戻す（`storedPortSticker`）。配置が置き換わって表示されているときは、新しい配置の Lane を上書きするまで、保存した配置の Sticker（表示中の `clip`・`visible`・`locked`・`crop`・`opacity` を持つ）を保存する。上書きした後は、新しい配置の Sticker を保存し、もう一方の配置の Lane と上書きは捨てる（ノードと同じ）。開いて閉じただけ、実行結果が届いただけでは書かない。ノード上の UI は表示だけを当て（`getCachedState`）、`sync-port` は Pose handoff の `replace` を状態に当てない（`replace` を当てるのは 3D の素材だけ）。
  - 表示中の `port` の Sticker の Lane をエディタで変えると（ギズモ、インスペクタ、Keyframe の操作、タイムライン）、その Lane を `handoff_overrides` に加え、変えた Lane を保存する（`recordHandoffEdits`）。Keyframe 一つの編集でも Lane の全体が上書きになる（焼き込んだ Keyframe ごと。ADR 0036 の Consequences）。「変えた」は、前回の書き戻しのときの表示と比べて、この編集で値が変わった Lane である。比べるのは `pano_sticker_handoff` が渡す Lane だけで、`opacity` は上書きにしない（引き継がないので、ふつうの編集として保存する）。Timeline fps を変えたときの再基準化は編集とみなさない（組は自分の `fps` を持ち、状態の fps と違えば、比べる前の表示と保存した Sticker も同じ規則で再基準化するので、その前の未記録の編集は記録される）。
  - 上書きを外して Pose handoff に戻した Lane（新しい UI の行のリセットと「元に戻す」。`revertHandoffLane`）は、次に組を作るとき、前回の表示の `handoff_overrides` にあって今は無い Lane として、表示と保存した Sticker の両方がその Lane の今の値を取る（`syncPortHandoffPair`）。だから、外した Lane がもう一度上書きとして記録されることはない。

## キーと確認のダイアログ

- Escape は、いちばん内側の一つだけを戻す（`editor/keyboard.js` の `onEscClose`）。順に：確認のダイアログが出ていれば Cancel、エディタの中の文字を入力する欄（`isTextField`）にフォーカスがあれば欄から離れるだけ、ポインターの操作の途中ならそれを取り消す（下の「ポインタの取り消しとフォーカスの喪失」）、全画面なら全画面を出る、どれでもなければエディタを閉じる。
- Undo・Redo のキーは、Space と同じ `stageOwnsKey` で受けるかを決める。文字を入力する欄（上の `TEXT_INPUT_TYPES` の `input`、`textarea`、`select`、編集できる要素）だけがキーを取り、スライダー・チェックボックス・ボタンにフォーカスがあってもエディタが受ける。Delete・Backspace は選んだ物を消すので、`input` のどれ（スライダー・チェックボックスを含む）にフォーカスがあっても受けない。どちらも、確認のダイアログが出ているときとエディタの外にフォーカスがあるときは受けない。
- 確認のダイアログを閉じるのは `editor/commands.js` の `settleCanvasConfirm` だけである（ボタン、Escape、エディタを閉じたとき。閉じたときは Cancel）。
- 動かさずに離したクリック（押して離すだけ）は、Undo の段を積まず、`state_json` も書かない（`pointer_transform.js` の `endTransform`）。

## ポインタの取り消しとフォーカスの喪失

進行中のポインターの操作は、次のときに取り消す（古い UI は `pointer_input.js` の `cancelLiveEdits`。新しい UI のステージとインスペクタの欄も同じきっかけで取り消す：`web_src/studio/stage_input.js`、`docs/studio-ui.md`）。取り消しの規則（一つの取り消し口、操作ごとに戻すもの、Undo の段も `state_json` の書き込みもしないこと、視点はその場で止めること、描きかけのストロークを全体で捨てること）の古い UI の owner は `docs/editor-architecture.md` の「Pointer gestures」の「操作の取り消し」、新しい UI のタイムラインのドラッグは `docs/timeline-ui.md` の「タイムラインの表示」。

- `pointercancel`（その操作のポインタのもの）。
- ウィンドウの `blur`（エディタの外へフォーカスが移った。`keyboard.js` の `onWindowBlur`）。取り消した後のホバーは何も動かさない。
- 操作の途中の `lostpointercapture`（`pointerup` の無いまま捕捉を失った）。
- Escape（操作の途中なら、どの操作でも。上の「キーと確認のダイアログ」の順の、確認のダイアログと入力の欄の次）。
- Undo、Delete、実行結果の届いたとき（`executed`）は、先に途中の操作を取り消してから行う（古い UI は `history.js` の `restoreHistory`、`commands.js` の `deleteSelected`、`media_session.js` の `applyRunResult`）。
- 操作の途中に押された 2 本目のポインタは無視する（操作は最初のポインタの `pointerId` のまま続き、ほかのポインタの動き・離す・取り消しも無視する。ロールのつまみも、操作の途中には始めない）。

## インスペクタの行

インスペクタ（`PanoSidePanel.vue`）の欄は、組になった値を 1 行に横に並べる（Blender・Unity の Transform と同じ）。行は `pano_editor_ui_state.js` の `inspectorRows` が、欄の並び（`editor/panels.js` の `pushParam` の順）から作る。

| 行 | 欄（短い名前） | 持ち主 |
|---|---|---|
| Rotation | Y（Yaw）・P（Pitch）・R（Roll） | すべて（`sky` の Sticker の R は `rot_deg`） |
| FOV | H（H FOV）・V（V FOV） | `sky` の Sticker、旧 Cutout の shot |
| Opacity | 1 行に 1 つ | Sticker |

- 組の行にはスライダーを置かない。欄の左の短い名前をドラッグすると値が変わる（1 px あたり、位置 0.01、角度 0.5°、画角 0.25°。Shift で 1/10）。動かさずに放すと欄に入力できる。ドラッグは欄の `input`・`change` を出すので、エディタは入力と同じに扱う（`change` で Undo の 1 段、記録の規則・再生の停止も同じ）。
- 組の行の欄は 3 等分の幅（2 つの行も同じ幅で、列がそろう）で、桁が増えても幅は変わらない。1 つだけの行はスライダーと幅の決まった数値の欄。
