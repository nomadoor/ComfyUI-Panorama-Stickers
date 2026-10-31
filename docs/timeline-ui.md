# タイムラインと Keyframe の UI

エディタのタイムラインの規則を定める：Keyframe を打つ・直す・消すときの記録の規則、Easing の選び方、
タイムラインの表示と長さ、表示（目のアイコン）、Camera の動き、再生の状態機械、背景の行、`port` の Sticker の素材の表示、
上流の層の行、Pose handoff の `port` の Sticker の行。用語は `CONTEXT.md` に従う。決めた理由は ADR 0024（時間）、
0026（Keyframe の Lane）、0029（Panorama Studio）、0030（上流の上書き）、0033（Timeline の上限）、0048（新しい UI の画面）にある。
「（新しい UI）」と書いた規則は、ADR 0044 の新しい UI（Panorama Studio のエディタ）だけのもので、新しい UI に切り替えるまでの古い UI と
旧ノードのエディタは今のまま動く。画面の形（バーの並び、ポチの見た目）は `docs/studio-ui.md` が持つ。

この文書が持たない規則：状態 v2 の形・評価関数と補間・fps の再基準化・上書きの記録と当て方（`docs/scene-state-v2.md`）、
ノードの Timeline fps・出力の長さ・出力と実行結果の `ui`・上流の Scene の重ね方（`docs/studio-node.md`）、
3D の表示・エディタでの描画（`docs/threejs-spark-integration.md`）、視点の操作・ギズモ・インスペクタ（`docs/editor-interaction.md`）、
ノード上の表示の規則（Panorama Studio は `docs/studio-node-surface.md`、旧ノードは `docs/legacy-node-surfaces.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 記録の規則（静的な値・Keyframe の更新と追加・追加した Keyframe の Easing・行のポチ・消したときの `value`） | — | `web_src/pano_timeline.js` `setLaneValue`・`keyAllLanes`・`rowLaneNames`・`rowKeyframes`・`deleteKeyframes` | `tests/pano_timeline.test.mjs`、`tests/pano_editor_state.test.mjs` |
| 閉じた行のポチ（まとめ表示・移動・削除）と Keyframe の移動の端 | — | `pano_timeline.js` `rowKeyframes`・`moveKeyframes` | `pano_timeline.test.mjs`、`tests/test_upstream_editor_parity.py` |
| Easing の対象区間と「混在」 | — | `pano_timeline.js` `setSegmentEasing`・`selectedEasing`、`web_src/pano_editor_ui_state.js` `buildEasingModel`、`web_src/components/PanoEasingGraph.vue` | `pano_timeline.test.mjs`、`tests/pano_editor_ui_state.test.mjs` |
| Clip range の移動・切り詰めと、ドラッグで出力を延ばさない | — | `pano_timeline.js` `moveClip`・`trimClipStart`・`trimClipEnd`、`web_src/editor/timeline_actions.js` の `clip` | `pano_timeline.test.mjs`、`tests/editor_background_clip.test.mjs`、`test_upstream_editor_parity.py` |
| タイムラインの範囲と、エディタが知っている入力の長さ（Auto の長さの規則そのものは `docs/studio-node.md`） | — | `pano_timeline.js` `timelineSpan`・`autoTimelineLength`、`web_src/editor/timeline.js`、`web_src/editor/upstream.js` `upstreamOutput` | `pano_timeline.test.mjs`、`tests/test_timeline_length_parity.py`、`tests/editor_upstream.test.mjs` |
| fps と長さの欄（上限、リセット、目盛り） | — | `pano_timeline.js` `enteredTimelineFps`・`enteredTimelineLength`・`timelineTicks`、`web_src/components/PanoTimeline.vue` `lengthText` | `pano_timeline.test.mjs`、`pano_editor_ui_state.test.mjs` |
| 再生できるか（Timeline の長さ `timelineSpan` が 1 フレームより長い。エディタとノード上の表示で同じ。`isTimed`・`ownerTimed` はタイムラインを自動で開くかに使う） | — | `pano_timeline.js` `timelinePlayable`・`timelineSpan`・`isTimed`・`ownerTimed`、`web_src/studio/timeline_model.js`、`web_src/pano_node_playback.js` `createNodePlayback` | `pano_timeline.test.mjs`、`pano_node_playback.test.mjs`、`editor_background_clip.test.mjs` |
| Space キー | — | `web_src/editor/keyboard.js` `onSpaceKey`・`onSpaceKeyUp` | `pano_timeline.test.mjs` |
| 行の並びと形（Camera・背景・`scene`・ペイントの行、目の場所、`port` の Sticker のバー） | — | `pano_editor_ui_state.js` `buildTimelineModel`、`PanoTimeline.vue` | `pano_editor_ui_state.test.mjs`、`editor_background_clip.test.mjs` |
| 目のアイコン | — | `timeline_actions.js` の `toggle-visible`、`buildTimelineModel` の `hideable` | `pano_editor_ui_state.test.mjs`、`editor_upstream.test.mjs`、`editor_background_clip.test.mjs`（`hideable`） |
| ドラッグ中の更新を 1 フレームにまとめる | — | `web_src/pano_frame_batch.js` `createFrameBatch` | `tests/pano_frame_batch.test.mjs`、`editor_background_clip.test.mjs` |
| 編集せずに閉じたときに `state_json` を書かない、読めない `state_json` を空の状態で上書きしない | — | `pano_editor_state.js` `sameEditorStateText`・`editorStateWrite` | `pano_editor_state.test.mjs` |
| 再生の状態機械 | — | `web_src/pano_video_playback.js` `createVideoPlayback`・`frameShownAt` | `tests/pano_video_playback.test.mjs`、`tests/pano_video_playback_placed_end.test.mjs` |
| 背景の VIDEO（どの VIDEO を再生するか：自分の実行結果、次に背景の入力が直接読むファイル、読めなかったものは除く。メタ情報の長さ・fps・音声、要素への読み込みと放し方、静止画、表示する素材、Auto の長さに数える背景） | — | `web_src/pano_media_session.js` `createBackgroundVideo`・`backgroundVideoKeys`・`videoMetaEntry`・`backgroundVideoMedia`・`backgroundLengthMedia`。古い UI は `editor/media_session.js` の `refreshModalVideoSource` と `editor/timeline.js` の `transportMedia`・`backgroundMedia` から、新しい UI は `web_src/studio/editor.js` の `refreshVideo`・`backgroundMedia`・`stageBackground` から呼ぶ | `tests/pano_media_session.test.mjs`、`tests/browser/studio_video.spec.js` |
| VIDEO が決める Timeline fps（実行結果の `pano_timeline_fps`、fps の欄を変えられないか、開いたときの再基準化） | — | `web_src/pano_video_fps.js` `videoTimelineFps`・`timelineFpsLocked`・`sceneAtVideoFps`（`pano_editor_state.js` の `parseSceneEditorState` が呼ぶ） | `tests/pano_video_fps.test.mjs`、`tests/pano_timeline.test.mjs`、`tests/pano_editor_state.test.mjs`（開いたときの再基準化） |
| 背景の行（置き方、`bg_color` を出す範囲、バーの終わり） | — | `web_src/pano_port_media.js` `backgroundPlace`・`backgroundShownAt`・`bgMediaEnd`・`backgroundBarEnd`、`editor/timeline.js` の `backgroundShown` | `editor_background_clip.test.mjs`、`pano_video_playback.test.mjs` |
| `port` の Sticker の素材の表示 | — | `pano_port_media.js` `portMediaTime`・`portMediaFrames`・`portImageIndex`・`createFrameSequence`、`pano_video_playback.js` `createVideoFollower`、実行結果の `ui` から再生ヘッドの絵を選ぶのは `pano_port_picture.js` `createPortPicture`（上流の層は `pano_upstream_layers.js`。古い UI の自分の `port` は `editor/media_session.js` の `followPortSticker`） | `tests/pano_video_follower.test.mjs`、`tests/test_port_media_parity.py` |
| 上流の層の行 | — | `web_src/pano_upstream.js` `upstreamRowId`・`upstreamEditedRecords`・`upstreamOverriddenEnds`・`upstreamLayerRevertedRecords`・`upstreamDeletedCount`、`editor/upstream.js` `syncUpstreamEdits`、`web_src/components/PanoTimelineGroup.vue` | `tests/pano_upstream.test.mjs`、`editor_upstream.test.mjs`、`test_upstream_editor_parity.py` |
| （新しい UI）上の規則を新しい UI のタイムラインで使う所：行の組み立てと表示、行と Keyframe の選択、Keyframe の移動と削除、Keyframe のコピーと貼り付け、行のポチ、目のアイコン、Clip range のドラッグ、前後の Keyframe へ飛ぶ、fps と長さの欄、ループの記憶 | — | データは `web_src/studio/timeline_model.js` `buildStudioTimeline`・`timelineEntries`・`jumpFrames`、操作は `web_src/studio/timeline_actions.js`（`applyEdit`・`selectKeys`・`moveKeys`・`deleteKeys`・`copyKeys`・`pasteKeys`・`keyRow`・`toggleVisible`・`applyClipDrag`・`jumpTarget`・`lengthEdit`・`enteredFps`・`LOOP_SETTING_KEY`）、画面は `web_src/components/studio/StudioTimeline.vue`・`StudioTimelineBar.vue`・`StudioTimelineHead.vue`。記録の規則などの中身は上の行の下の部品（`pano_timeline.js` など）を呼ぶ | `tests/studio_timeline_model.test.mjs`、`tests/studio_timeline_actions.test.mjs`（共有の case は `tests/studio_timeline_fixtures.mjs`）、`tests/browser/studio_timeline.spec.js` |
| （新しい UI）Clip range のバーを出す行（自分の時間を持つ物と、既定でない Clip range を持つ物）と、バーの上の Keyframe のポチの当たり | — | `web_src/studio/timeline_model.js` `hasOwnTime`（行のモデルの `clip`）、当たりは `web_src/components/studio/StudioTimeline.vue` と `web/pano_studio.css` の `.pano-studio-tl-key` | `tests/studio_timeline_model.test.mjs`、`tests/browser/studio_timeline.spec.js` |

`tests/test_port_media_parity.py` は素材の時刻を `sticker_media.py` の `PortMedia`（`docs/studio-node.md`）と、
`tests/test_timeline_length_parity.py` は長さをノードの `_decide_timeline` と比べる。

内部ではパラメータごとの Lane を細かく制御できるが、UI はオブジェクト単位の操作を基本にする。Lane を一本ずつ扱うグラフエディタは
作らない（ADR 0026）。ただし新しい UI では、インスペクタの各行に Keyframe のポチを置き、その行の Lane だけに打てるようにする
（下の「インスペクタの Keyframe のポチ」。ADR 0048 が ADR 0026 の「ストップウォッチのような UI は作らない」を置き換える：
一つの値だけを、変えずに「ここで止める」Keyframe を打つ手段が無かったため）。

## 記録の規則

| 状況 | パラメータを変えたときの結果 |
|---|---|
| その Lane に Keyframe がない | 静的な値が変わる。Keyframe は入らない |
| その Lane に Keyframe があり、再生ヘッドがその Lane の Keyframe の上 | その Keyframe を更新する |
| その Lane に Keyframe があり、再生ヘッドが Keyframe 以外 | そのフレームに Keyframe を入れる |

- 判定は Lane ごとに行う。変えた Lane にだけ Keyframe が入る。
- 「再生ヘッドが Keyframe の上」は、評価関数と同じ許容差（`FRAME_EPSILON`）で比べる。Sticker と `scene` の Lane は、Timeline frame を素材基準（`frame − (start − in)`）に直して比べる。
- ドラッグ中は、最初の変化でそのフレームに Keyframe が入り、以後はその Keyframe を更新する。
- Keyframe のある Lane を変えても、静的な `value` は変えない。Lane の最後の Keyframe を消したときは、その Keyframe の値を `value` にする（消した瞬間に値が飛ばない）。複数の Keyframe を一度に消して Lane が空になるときは、再生ヘッドの位置での値を `value` にする。
- タイムラインの行のポチを押すと、その時点の値で全 Lane に Keyframe が入る（あれば更新する）。最初の Keyframe もこの操作で打つ。
- 行のポチは、レンズの Lane（Camera の `curve`、Sticker の `curve`（`sky`）と `lens`（`world`））には Keyframe を入れず、閉じた行のまとめ表示にも数えない（ADR 0042）。Blender の LocRotScale のキーがレンズの値を含まないのと同じである。レンズの値は、その Lane の行で、その Lane の編集（Camera の Lens curve の欄など）が記録の規則で Keyframe にする。行が扱う Lane は `pano_timeline.js` の `rowLaneNames` が決め、`keyAllLanes`・`rowKeyframes` が使う（`tests/pano_timeline.test.mjs` の「the row's key button does not key the lens Lanes, and its pins do not count them」）。
- Keyframe と Keyframe の間に入れた Keyframe の Easing は、入れた区間の Easing を引き継ぐ。前後の区間がどちらも元の区間と同じ Easing になる。手で曲げた cubic-bezier も同じ値をそのまま写す（元の動きと厳密には一致しない）。最初の Keyframe より前に入れたときは、新しい Keyframe の Easing を既定値の ease-in-out とする。最後の Keyframe より後に入れたときは、それまで最後だった Keyframe の Easing（使われていなかった値）が新しい区間に掛かり、新しい Keyframe の Easing は既定値とする。
- Delete キーは、Keyframe を選んでいればその Keyframe を消し、そうでなければ選んだ物を消す（自分の物も上流の物も同じ順。上流の物の扱いは下の「上流の層の行」）。
- Keyframe を消せるのは、タイムラインで選んで Delete したときだけ。消した後は残った Keyframe で補間し直す。全 Keyframe を一度に消すスイッチは作らない。
- 古い UI のインスペクタには Keyframe を打つボタンを置かない。新しい UI のインスペクタには、行ごとの Keyframe のポチがある（下）。

### インスペクタの Keyframe のポチ（新しい UI）

インスペクタの Lane を持つ行（`docs/studio-ui.md` の「リセットと Keyframe のポチ」）に、その行の Lane だけを扱うポチがある。

| 行 | Lane |
|---|---|
| Position | `position`（X・Y・Z の一つの Lane） |
| Rotation | `rotation`（Yaw・Pitch・Roll の一つの Lane。四元数で一緒に補間するので分けない） |
| Scale | `scale` |
| Opacity | `opacity` |
| FOV（空に貼った画像） | `size`（H・V の一つの Lane） |
| Rotation（空に貼った画像） | `direction`（Yaw・Pitch）と `roll` の二つの Lane。ポチはこの二つにまとめて打つ・消す。片方だけに Keyframe があるときの見た目は「Keyframe はある」、再生ヘッドの上に片方だけあるときは「再生ヘッドの上にある」とし、押すと無い方にも打つ |
| Camera の H FOV、Camera タブの FOV の目盛り | `fov` |
| Camera の Lens、Camera タブの Lens の目盛り | `curve`（行のポチと違い、レンズの Lane も打てる） |
| Camera タブの Roll の目盛り | `rotation`（Yaw・Pitch・Roll の一つの Lane なので、三つの値をまとめて打つ・消す） |
| Camera の Position・Rotation | `position`・`rotation` |

- 見た目の状態：その Lane に Keyframe が無い／Keyframe はあるが、再生ヘッドの上には無い／再生ヘッドの上にある、の三つ（判定は
  「再生ヘッドが Keyframe の上」と同じ許容差）。
- 押したとき：再生ヘッドの上に Keyframe が無ければ、その Lane だけに、その時点の値で Keyframe を入れる（Lane が空なら最初の
  Keyframe になる。入れた Keyframe の Easing は上の規則）。再生ヘッドの上にあれば、その Keyframe を消す（消したときの `value` の
  規則は上と同じ）。どちらも Undo の 1 段で、再生を止める。
- 「Keyframe を消せるのは、タイムラインで選んで Delete したときだけ」の例外は、このポチの二度押しだけである。
- Lane を持たない行（Camera の Aspect、Mode、Panorama モードの範囲 `erp_range`）にはポチが無い。
- ロックした物、読み取り専用のエディタ、上書きを持てない上流の層の行では、ポチは隠さずに無効にする。上流の要素では、打った・
  消した Keyframe は上書きとして記録する（下の「上流の層の行」）。
- `world` の Sticker も同じ規則で記録する。ギズモのドラッグはモードの Lane（Move は `position`、Rotate は `rotation`、Scale は `scale`）だけを、インスペクタは変えた欄の Lane だけを変える。Clip range があるので、`sky` の Sticker と同じく素材基準のフレームで比べる。ギズモとインスペクタは `docs/editor-interaction.md` の「`world` の Sticker の操作」。
- 見回しは Viewport camera で行い、Camera の値は変えない。Camera の値を変えるのは、Camera を操作するとき（Panorama Studio の Camera タブと、Camera の行を選んだときの操作とインスペクタ）だけである。Camera が無いときの空間の表示では、3DoF の見回しは原点（ERP を撮る位置）に立ったまま向きを変え、6DoF は Viewport camera を空間の中で動かす（`docs/editor-interaction.md` の「視点の操作」）。
- Panorama Studio のノード上の表示には、Keyframe の操作も Sticker の操作も無い。再生と一時停止のボタンだけを持つ（`docs/studio-node-surface.md` の「表示の構成」「再生のボタン」。表示するフレームは同じ文書の「表示フレームと VIDEO」、Space キーは「見回し」）。旧 `PanoramaStickers` のノード上の表示の Sticker の操作と背景の VIDEO の再生は `docs/legacy-node-surfaces.md` にある。
- Sticker がアップロード中（Source にファイルがまだない）の間は、Undo の履歴を記録しない。アップロードが終わったときに、その間の編集を含めて一度記録する（失敗して Sticker が消えたときも同じ）。

## Easing

- 既定値は ease-in-out。Easing は区間ごとに、インスペクタのパネルで選ぶ（cubic-bezier のプリセットと曲線、`auto`、`hold`）。タイムラインの上で直接は曲げない。
- cubic-bezier の制御点の縦方向は 0〜1 に限る。
- 対象の区間：ポチを一つ選んだときはその Keyframe から次の Keyframe までの区間、二つ以上選んだときは最初から最後のポチまでのすべての区間。
- パネルの選択肢は ease-in-out（既定）・linear・ease-in・ease-out のプリセット、`auto`、`hold`。cubic-bezier はグラフの二つの制御点をドラッグして変えられる。

## タイムラインの表示

- 再生ボタンはタイムラインの一つだけで、背景の VIDEO があれば VIDEO を（音声も）再生し、そのフレームの時刻で再生ヘッドを動かす。VIDEO より Timeline が長いときは、VIDEO の終わりから先は時計で進める。VIDEO がなければ時計で進める。どちらも Timeline の終わりで先頭に戻る。シークや編集（Sticker・Camera の変形、ペイント、インスペクターや Keyframe・Clip range の操作、Sticker の追加・削除、Undo・Redo）で再生は止まる。見回し（視点の回転・ズーム）や選択では止まらない。キャンバスで Sticker をつかむ操作は、ポインタが最初に動いたときに止まり、止まったフレームの値から変形を始める（クリックで選ぶだけなら止まらない）。`world` の Sticker のギズモのドラッグも同じで、`world` の Sticker の本体を押すのは選ぶだけなので止まらない。ペイントは描き始めた時点で止まる。止めたときは一時停止した VIDEO が表示しているフレームで止まり、再生ヘッドと静止画をそのフレームに合わせ、シークし直さない。Panorama Studio のエディタでは VIDEO 自身の再生・シークの操作は出さない。
- Space キーは再生ボタンと同じく再生・停止を切り替える（ボタンのツールチップは「Play (Space)」）。テキスト・数値の入力欄、select、contenteditable にフォーカスがあるときと確認ダイアログが出ているときは効かない（スライダーでは効く）。Ctrl・Meta・Alt を押しながらの Space はブラウザと OS に任せる。エディタの外にフォーカスがあるとき（上に別の ComfyUI のダイアログが出ているときなど）も効かない。タイムラインのボタンにフォーカスがあってもボタンは押されず、再生の切り替えだけが起きる（Firefox はボタンを keyup で押すので keyup も止める）。キーリピートは無視する。旧ノードのエディタでは Space は何もしない。
- タイムラインのバーには Timeline fps と出力の長さ（`timeline.length`、Timeline frame）の欄がある。タイムラインの範囲は「タイムラインの長さ」。
  - Timeline fps は、`bg_media` と `sticker` に VIDEO がないときだけ変えられる（ADR 0024）。VIDEO があるときは値だけを表示する。VIDEO があるかは、リンクの型（`VIDEO`）か、ノードの現在の実行結果の `ui` の `pano_timeline_fps`（VIDEO が決めた Timeline fps。VIDEO がないときは出さない）で判断する。
  - fps を変えると `rebaseSceneState` で状態を再基準化し、Keyframe・Clip range・長さ・再生ヘッドの時刻を秒で保つ。Undo できる（Undo・Redo で fps が変わるときも再生ヘッドの時刻を秒で保つ）。寄せた結果が今の fps と同じなら何もしない（Undo の段も積まない）。
  - IMAGE バッチの背景のエディタ用 MP4 は、前回の実行の Timeline fps でエンコードされている。エディタで fps を変えると、次に実行するまで背景の映像のフレームと長さがずれて見える。一時的なずれで、`state_json` が変わるので次のキューでノードが実行され、新しい fps の MP4 になる。
  - 長さの欄は常に数を出す。`timeline.length` が `null` のときは、入力から決まる今の長さ（「タイムラインの長さ」の Auto の長さ。タイムラインの範囲そのもの）を出す（`PanoTimeline.vue` の `lengthText`）。UI に「Auto」の語は出さない。数を入れると `timeline.length` になり、ノードの出力の長さになって、タイムラインもちょうどその長さになる（VIDEO や Clip range が長くても延ばさない）。欄を空にしても何も変わらない（元の数に戻る）。
  - 欄の右にリセットのボタン（アイコン、`PanoTimeline.vue` の `pano-timeline-length-reset`）がある。押すと `timeline.length` を `null` にして、入力から決まる長さに戻す。Undo の 1 段になる。一方向の操作で、切り替えではない（もう一度押しても値には戻らない）。`timeline.length` が `null` のときは無効にする（隠さないので、バーの配置は動かない）。状態の形は変えない（`docs/scene-state-v2.md`）。
  - 欄の値は、状態が持てる範囲（`docs/scene-state-v2.md` の `timeline.fps`・`timeline.length` の行）に寄せる。範囲の外の値はいちばん近い端に寄せる（例：`1e308` はどちらも上限）。数でない値と 0 以下の fps は受け付けず、元の値に戻す。`timelineSpan` は有限でない値を返さず（壊れた入力なら `BROKEN_SPAN` の 100,000）、目盛りは 2,000 個まで（`timelineTicks` の `MAX_TICKS`）にする。
  - エディタを開いたとき、現在の実行結果の `pano_timeline_fps` が状態の `timeline.fps` と違えば、状態をその fps に再基準化する。`pano_timeline_fps` は先に 1〜1000 に寄せてから比べる（`pano_video_fps.js` の `videoTimelineFps`・`sceneAtVideoFps`）。1000 fps を超える VIDEO では状態は 1000 fps になり、次の実行結果からは同じ値と比べるので、再基準化・再生ヘッドの跳び・空の Undo を繰り返さない。ウィジェットの `state_json` は次の編集かキューまで変わらない（ノードは記録された fps で秒を保って読むので、書き込む前でも出力は同じ）。
  - エディタを開いている間に届いた実行結果が違う `pano_timeline_fps` を持つときも、同じく再基準化する。これは Undo の 1 段になる。
- タイムラインのドラッグ（Clip range の移動・トリム、Keyframe の移動、ルーラーのスクラブ）は、ポインタが動くたびに状態だけを変え、タイムラインの表示の更新は 1 フレームに 1 回にまとめる（`pano_frame_batch.js` の `createFrameBatch`）。ビューは、見た目が変わるときだけ 1 フレームに 1 回更新する。Clip range では、再生ヘッドが範囲を出入りしたときと、移動で再生ヘッドの位置の素材の時刻が変わったときである（トリムでは素材の時刻は変わらない）。Keyframe の移動では毎フレーム更新する。スクラブのシークも 1 フレームに 1 回にする。インスペクタ・選択メニュー・ノード上のプレビューへの反映と Undo の記録は、ドラッグの終わりに 1 回だけ行う。Clip range が変わっても、ビューの状態 v2 は読み直さず、Clip range だけを写す。
- タイムラインのドラッグの取り消し：`timeline_actions.js` の `cancelTimelineDrag()` が、ドラッグを始めたときの Keyframe・Clip range・選んだポチ（`selection.frames`）に戻す（背景の Clip range なら背景の VIDEO もその時刻にシークし直す）。Undo の段を積まず、`state_json` も書かない。その後にタイムラインから届くそのドラッグの動きと終わりは何もしない（`tests/editor_background_clip.test.mjs`）。取り消すきっかけは `docs/editor-interaction.md` の「ポインタの取り消しとフォーカスの喪失」、キャンバスの操作の取り消しは `docs/editor-architecture.md` の「Pointer gestures」。
- キャンバスのドラッグ（見回し、Sticker の移動、ペイント、ギズモなど）も、ノード上のプレビューへの反映はドラッグの終わりに 1 回だけ行う（エディタの描画ループで、ドラッグが終わった次のフレームに反映する）。ギズモのドラッグのインスペクタの更新は 1 フレームに 1 回にまとめる。マスクの表示用のキャンバス（ERP と同じ大きさ）は、マスクと描いている途中のストロークが変わったときだけ、変わった矩形だけを描き直し、マスクが空なら作らない（`getMaskDisplay`）。ペイントのグループの、描いている途中のストロークを重ねたキャンバスも、変わったときだけ、変わった矩形だけを描き直す（`getGroupDisplay`。`docs/editor-architecture.md` の「Paint layers」）。
- Clip range の外にある Sticker の行を選ぶと、再生ヘッドがその Clip range の始まりへ移ってから選ばれる。
- Panorama Studio（`PanoramaStudio`）のタイムラインは、背景・Camera・Sticker・ペイント・`scene` の行を 1 本に並べる（上から背景（「背景の行」）、Camera、Sticker（手前から奥、`world` の Sticker）、ペイント、`scene`）。`scene` 入力に上流の Scene があるときは、その下に上流の層ごとの行が続く（「上流の層の行」）。
  - （古い UI）Camera の行は Camera があるときだけ出る（`buildTimelineModel` の `camera` に Camera の有無を渡す）。Frame 表示・Panorama 表示（3DoF の枠の操作と 6DoF のギズモ）・インスペクタで Camera を変えると、変えた Lane にだけ Keyframe が入る（「記録の規則」）。行のポチで全 Lane（位置・回転・画角）に入る。Camera の Lane は Clip range を持たず、Timeline frame そのもので比べる。再生の可否（`isTimed` の `camera: true`）とタイムラインの長さ（`timelineSpan` の `camera: true`）にも数える。Camera が無ければ（`camera: null`）どちらも数えない。
  - Camera の行が出入りしても、タイムラインのバー（再生ボタン・fps・長さ・開閉）は変わらない（`node --test` で確かめている）。行の一覧は Sticker を足したときと同じく 1 行増え、下の行が 1 行分下がる。タイムラインを開いているときは、行の分だけタイムラインが高くなり（34% まで）、ビューが低くなる。これも Sticker を足したときと同じである。
  - `scene` の行（アイコンは箱）は、自分の 3D の内容の入力（`world`。名前を変える前のグラフでは `scene` に 3D の素材をつないだもの）がつながっているとき、または `scene` が Keyframe か既定でない Clip range を持つとき（`pano_timeline.js` の `ownerTimed`）に出る。`scene` に上流の Scene（`PANO_SCENE`）をつないでも、それは自分の 3D の内容ではないので、そのリンクだけではこの行は出ない。どの入力がつながっているかの判定は一か所（`pano_upstream.js` の `ownSceneLinked`）で、新しい UI と古い UI が同じものを使う。`scene` の位置・回転・大きさを変える操作とインスペクタは無いので、`scene` の行は Clip range（移動と両端の切り詰め。Sticker の行と同じ）だけを持ち、行のポチと Lane の行は出さない（行のモデルの `keyable: false`。エディタも `scene` の `key-row` を無視する。行を開くボタンは無効）。状態に `scene` の Keyframe があれば、行にポチの印だけは出る。行を選んでもキャンバスの選択は外れるだけで、何も選ばれない。
  - VIDEO や上流の Scene の fps に再基準化して開いても、編集せずに閉じたときは `state_json` を書き換えない（`sameEditorStateText` の `rebased`。今の `state_json` を再基準化したものと保存しようとする状態が同じなら書かない）ので、ノードは再実行されず、Keyframe も丸められない。
  - 今の `state_json` が読めない（JSON として読めない、または読めない `version`）ときは、保存しようとする状態が空の状態（どの fps でも、読み込みの既定の状態を書いたものと同じ）なら書かない（`editorStateWrite`。古い UI のエディタとノード上の UI は、読めない状態を空の状態として開くので、開いて閉じただけで元のテキストを空の状態で上書きしないため）。空でない状態は書く（読めないテキストを開いた後に、物を足すなどの編集をしたとき）。新しい UI のエディタは、読めない状態を読み取り専用で開く（`docs/studio-ui.md` の「閉じ方」）。
- タイムラインはビューの下にある。開閉や行の開閉で高さが変わるときは 180 ms かけて伸び縮みし、ビューは同じフレームのうちに新しい大きさで描き直す（横の画角と中心は保ち、上下が切れるだけ）。高さは画面の高さの 34% までで、それを超える行は中でスクロールする。prefers-reduced-motion では動かさずに切り替える。

### 前後の Keyframe へ飛ぶ（新しい UI）

タイムラインのバーの「前の Keyframe へ」「次の Keyframe へ」（並びは `docs/studio-ui.md` の「タイムラインのバー」）。

- 押すと、再生ヘッドを、今より前（後）で最も近い Keyframe のフレームへ動かす。再生中なら止める。Undo の段は積まない（再生ヘッドは状態に入らない）。
- 数える Keyframe：選んでいる物があればその物の行の Keyframe（開いた行の Lane も含む）、無ければ表示しているすべての行の Keyframe
  （隠した行と、出力の終わりより先の Keyframe は数えない。持ち主の決定、2026-10-30）。
- 比べ方は「再生ヘッドが Keyframe の上」と同じ許容差（`FRAME_EPSILON`）。Sticker と `scene` の Lane は Timeline frame に直して比べる。
- 端で回り込まない：前（後）に Keyframe が無ければ、ボタンを隠さずに無効にする。
- Length のリセットは上の「タイムラインの表示」のとおり（`timeline.length` を `null` に戻す）。

## タイムラインの長さ

タイムラインは出力の長さ（Timeline duration）をちょうど表す（Rive・After Effects のコンポジションの長さと同じ）。編集のための余白は持たず、出力より先の範囲は出さない。両端の見た目の余白だけは UI の都合で付けてよい。

- タイムラインの範囲（`pano_timeline.js` の `timelineSpan`）は、`timeline.length` があればその値、なければ Auto の長さ（入力から決まる長さ。この文書の中の呼び名で、UI には出さない）。最小の長さはない。
- Auto の長さ（`autoTimelineLength`）は、ノードの `_decide_timeline` と同じ規則で、状態と、エディタが知っている入力の長さから編集のたびに求め直す（前回の実行結果の長さをそのまま使うのではない）。規則の owner は `docs/studio-node.md` の「Scene の組み立てと撮影の入口」の出力の長さと、上流の Scene があるときの同じ文書の「上流の Scene」の長さで、ここには書き写さない。`tests/test_timeline_length_parity.py` が、状態と入力の表でノードの長さと一致することを確かめる。
- エディタが知っている入力の長さ：
  - 背景：ノードの現在の実行結果のエディタ用 MP4 のメタ情報（`pano_input_video_meta` の `frames`・`duration`）。VIDEO か IMAGE バッチかはリンクの型で見る。MP4 の無い IMAGE（`bg_media` に IMAGE がつながっている）は 1 枚の IMAGE とみなす（実行前の IMAGE バッチも、実行までは 1 枚として数える）。上流の Scene の背景を使うときは数えない（上流の長さにすでに入っている）。
  - `port` の Sticker の素材：現在の実行結果の `pano_sticker_input_video_meta`、3D の素材は `pano_sticker_files` の要素の数（`pano_port_media.js` の `portMediaMeta`）。
  - `scene` 入力の要素：現在の実行結果の `pano_scene_files` の数。
  - 上流の Scene：実行結果の `pano_upstream_frames`（上流の出力のフレーム数）。
- 実行前で入力の長さが分からないときの扱い：分からない入力は無いものとして、規則の次の段へ進む（1 フレームの入力と同じ）。例外として、背景の入力が LoadVideo のファイルを直接読むときは、そのファイルの長さ × Timeline fps を背景の VIDEO のフレーム数とする（ノードは VIDEO 自身のフレーム数を使うので、fps が違えば実行までずれる）。ほかに一致しないのは、背景の 1 フレームの VIDEO（エディタ用 MP4 を作らないのでエディタは長さを知らず、ノードはその VIDEO の 1 フレームを長さにする。`port` の 1 フレームの VIDEO はメタ情報だけを出すので一致する）と、古い版が出した、`pano_upstream_frames` を持たない実行結果（代わりに自分の出力の長さ `pano_timeline_frames` を上流の長さとする）。どれも次の実行で正しくなる。上流の Scene の下の VFR の背景 VIDEO は、実行の後もずれうる（エディタはメタ情報の `duration`（フレーム数 ÷ 平均 fps）を使い、ノードは最後のフレームの時刻 + 平均 fps の 1 フレームを使う。CFR では一致する）。
- 再生はこの長さの中でループする（新しい UI では、タイムラインのバーのループのボタンがオンのとき。既定はオン。オフのときは最後の
  フレームで止まり、もう一度再生すると先頭から始める。スイッチはエディタだけの設定で、状態に入らず、ブラウザごとに覚える。ADR 0048）。
  再生ヘッドは最後のフレーム（長さ − 1）より先に行かない（`pano_video_playback.js` の `seek`。長さが縮んだときはエディタの `syncTimeline` が最後のフレームへ戻す）。そのため出力より先に Keyframe は打てない。
- Keyframe の移動と Clip range のトリムは、出力の終わりより先へはドラッグできない（`pano_timeline.js` の `moveKeyframes` の `ceiling`、`timeline_actions.js`）。Clip range の移動は、始まり（`start`）が出力の中（最後のフレーム、長さ − 1 まで）にある限り、終わりが出力の終わりより先へ出てよい。出た分は出力の外になるだけである。これはすべての Clip range の行（背景・Sticker・`scene`・上流の層の行）で同じ。Clip range の終わりのトリムは出力の終わりで止まる。すでに終わりより先にある Keyframe と Clip range は、それ以上先へは押さず、引き戻しもしない。ドラッグの間はタイムラインの範囲をドラッグを始めたときのまま保ち（`timeline.drag.limit`）、離してから新しい長さにする。
  - ドラッグで出力を延ばすことはできない（Auto の長さでも同じ）。延ばすときは長さの欄に値を入れる。Auto の長さが Sticker や `scene` の Clip range の終わりで決まるとき（背景の VIDEO・IMAGE バッチも `timeline.length` も無いとき）は、その終わりを先へ動かすと長さが延びてしまうので、移動した後にタイムラインの範囲（`timelineSpanFrames`）がドラッグを始めたときの範囲（`timeline.drag.limit`）を超えた分だけ戻す（`timeline_actions.js` の `clip`）。その Clip range は今の終わりで止まり、何度ドラッグしても長さは変わらない。長さが背景の素材か `timeline.length` で決まるときは、範囲がその Clip range によらないので戻さず、上の規則どおり終わりの外へ出てよい。
- 終わりより先にある Keyframe と Clip range（`timeline.length` を短くしたとき）は、状態に残すが、出力に入らず、タイムラインにも出ない（After Effects と同じ）。消しも動かしもしない（既定値。オーナーは未承認）。
- 時間で変わるものが何もない新しい Panorama Studio は 1 フレームのタイムラインになる。再生ボタンは無効になり（配置はそのまま）、Space キーも何もしない。再生ヘッドは frame 0 に留まる。長さの欄に値を入れるとその長さになり、アニメーションを付けられる。

## 表示（目のアイコン）

Camera・Sticker・`scene`・ペイントは、タイムラインの行の左端の目のアイコンで表示・非表示を切り替える（After Effects・Photoshop のレイヤーと同じ）。アイコンが今の状態を示す（表示は目、非表示は破線の目）。状態 v2 の `visible`（Camera・`scene`・Sticker）と `painting_visible`（ペイント）に入る（`docs/scene-state-v2.md`）。

- 目の場所はすべての行にあり、目を持たない行（`hideable` が偽）も同じ幅を空ける。行の名前・▶・ポチの位置は行によって動かない。Camera の行の目は `buildTimelineModel` の `cameraHideable` で出す（Panorama Studio）。
- ペイントの行（「Paint」、筆のアイコン）は、Sticker の行の後、`scene` の行の前に 1 行だけ出す。ストロークのグループ・ラスタ・マスクを分けず、ペイント全体をまとめて隠す（マスクも出力の MASK から消える）。ペイントが何か（ストローク・マスク・ラスタ）を持つか、隠しているときだけ出る。Clip range も Keyframe も無いので、行は目と名前だけ。
- 目の切り替えは編集で、Undo の 1 段になり、`state_json` に保存する（既定の表示は書かない）。値を変えないので、再生は止めない（Premiere・Resolve のトラックの表示の切り替えと同じ）。ロックした Sticker も切り替えられる（After Effects と同じ）。
- 隠した物はエディタでも描かない（薄くも出さない。After Effects・Photoshop・Blender のビューポートと同じ）。選べず、動かせない：キャンバスとギズモの当たり判定、選択の一覧から外れ、行を押しても選ばれない。選んでいる物を隠すと選択が外れる（Undo・Redo で隠れたときも）。隠したペイントにはペイントもマスクも描けない（ツールを使っても何も起きない。Photoshop の隠したレイヤーと同じ）。Camera を隠したときのエディタは `docs/editor-interaction.md` の「Panorama Studio のエディタ」。
- タイムラインの上の操作（Keyframe・Clip range の編集、行のポチ）は、隠した物にもできる。
- 上流の層の要素・ペイント・`scene` も、その行の目のアイコンで隠し、もう一度出す（「上流の層の行」）。隠した上流の要素を出す手段はこの目のアイコンである（インスペクタに表示の切り替えは無く、隠した要素は選べない）。
- 旧ノードのエディタは、隠した `port` の Sticker を薄く出す。どちらのエディタも、インスペクタに表示の切り替え（エディタの見た目だけの切り替え）は無い。

## 行とポチ

タイムラインはオブジェクトごとに一行である。閉じた行が基本で、▶ で開くと Lane ごとの行が出る。

閉じた行：

- そのフレームにある Lane の Keyframe を、一つのポチにまとめて表示する。全 Lane にあれば塗りつぶし、一部の Lane だけなら半分の塗りにする。
- ポチの移動・削除・Easing の変更は、そのフレームの全 Lane の Keyframe にまとめて効く。移動先のフレームに同じ Lane の Keyframe があれば、移動したほうで置き換える。
- 選んだポチの Lane ごとに Easing が違うときは、Easing の欄に「混在」（UI の表記は英語の UI に合わせて Mixed）と出す。Lane の最後の Keyframe の Easing（使われない値）は比べない。そこで選ぶと全 Lane がその Easing にそろう。

開いた行：

- Lane ごとに Keyframe を表示し、Lane 単位で選択・移動・削除・Easing の変更ができる。

Keyframe の選び方（新しい UI。ADR 0048）：

| 操作 | 結果 |
|---|---|
| トラックの何も無い所からドラッグ | 囲んだ Keyframe（閉じた行ではポチ、開いた行では Lane の Keyframe）を選ぶ |
| Keyframe をクリック | その一つだけを選ぶ |
| Shift ＋ クリック、Shift ＋ ドラッグ | 今の選択に足す |
| 選んだ Keyframe のどれかをドラッグ | 選んだ全部を同じフレーム数だけ動かす（移動の端と置き換えは上の規則） |
| Delete | 選んだ全部を消す |
| トラックの何も無い所をクリック | 選択を外す |

- Keyframe を選んでいる間は、インスペクタの下端に Easing のパネルが出て、変えると選んだ全部の区間に効く（「混在」の規則は上と同じ）。
- 再生ヘッドはルーラーのクリックとドラッグだけで動く。トラックのクリックでは動かさない（範囲選択を始めたクリックで再生ヘッドが飛ばない
  ように）。
- 行の名前をダブルクリックすると、その物へ Frame Selected で寄る（`docs/space-and-view.md` の「Frame Selected」。tooltip で知らせる）。
  一回のクリックは今のまま選ぶだけで、視点を動かさない。

### Clip range のバー（新しい UI）

時間を持たない物の Clip range は既定ではタイムラインの終わりまで続くので、バーにしても切り詰める意味が無く、Keyframe のポチを掴む邪魔になる。
そこで新しい UI のタイムラインは、行の物が自分の時間を持つときだけ Clip range のバー（移動と両端の切り詰め）を出す（Rive と同じ）。
判定は一か所（`timeline_model.js` の `hasOwnTime`）で、自分の行と上流の層の行に同じ規則を使う。

- 自分の時間を持つ物：
  - 背景（「背景の行」）の VIDEO と IMAGE バッチ（エディタが知っている背景の長さ。VIDEO は、実行前でも `bg_media` が VIDEO の型でつながっていれば数える）。
  - `port` の Sticker の素材が VIDEO か、2 枚以上の IMAGE バッチ（3D の素材は 2 つ以上）のとき（`portMediaMeta`。上流の層の行はその層の素材）。
  - アニメーションを持つ 3D ファイルの Sticker と `scene`（「glTF のアニメーション」。clip の 1 周の長さが分かるとき）。
  - `scene` の行で、`scene` 入力の内容が 2 つ以上の要素を持つとき（上流の層の行はその層の要素の数）。
- 安全のための例外：Clip range が既定値（`start` 0・`in` 0・`duration` `null`）でない行も、時間を持たなくてもバーを出す。
  すでに切り詰めた範囲を隠さず、直せるようにするためである。切り詰めを既定値に戻すと、次の表示からバーは消える。
- そのほかの行（1 枚の画像、アニメーションの無い 3D ファイル、Camera、Paint、まだ長さの分からない入力など）は、トラックに Keyframe のポチだけを出す。
  バーも切り詰めのつまみも出さない。
- 状態の形とノードは変えない。Clip range のフィールドは残り、既定値は「タイムライン全体」を意味する。Auto の長さ（「タイムラインの長さ」）は
  今までどおり状態の Clip range から求め、バーを出すかどうかで変わらない。
- バーを出す行では、Keyframe のポチがバーより上にあり、ポインタもバーより先にポチが受ける。ポチの当たりは行の高さいっぱいで
  （大きさは `docs/design.md`）、見えている菱形の少し外を押してもポチを掴む。
- 古い UI と旧ノードのエディタは今のまま、Clip range を持つ行にいつもバーを出す。

### Keyframe のコピーと貼り付け（新しい UI）

選んだ Keyframe を写し、再生ヘッドの所に貼る。値を別の時刻にもう一度置くための操作である。

| キー | 結果 |
|---|---|
| Ctrl / Cmd＋C | 選んだ Keyframe を写す |
| Ctrl / Cmd＋X | 写してから、選んだ Keyframe を消す（消し方は Delete と同じ。Undo の 1 段） |
| Ctrl / Cmd＋V | 写した Keyframe を再生ヘッドの所に貼る（Undo の 1 段） |

- 写すもの：選んだ Keyframe（閉じた行のポチはそのフレームにある行の Lane の Keyframe、開いた行は Lane の Keyframe）の、Lane・値・
  Easing（`position` の `handles` も）と、一番早い Keyframe からのずれ（Timeline frame の数）。どの行から写したかも覚える。ロックした行
  の Keyframe も写せる（読むだけなので）。Keyframe を選んでいないときの Ctrl / Cmd＋C・X は何もせず、前に写したものを残す。
- 写したものはエディタの中だけに持つ（システムのクリップボードは使わない）。エディタを開いている間は残り、閉じると消える。
  Undo・Redo でも消えない。
- 貼る時刻：一番早い Keyframe を再生ヘッドのフレームに置き、ほかはずれを保つ。Timeline の最後のフレーム（長さ − 1）より後に来る
  Keyframe は貼らない（Keyframe の移動の端と同じく、貼り付けで出力を延ばさない）。Sticker と `scene` は素材基準のフレームに直して書く。
- 貼る先：一つの行から写したときは、選んでいる物（行）が写した Lane をすべて持っていればその物に、そうでなければ写した元の行に貼る。
  複数の行から写したときは、それぞれ写した元の行に貼る。貼る先がロックされている、読み取り専用のエディタ、上書きを持てない上流の
  層の行、行が無くなったときは、その行には貼らない。
- 貼る先の Lane の同じフレーム（`FRAME_EPSILON` で比べる）に Keyframe があれば、貼った方で置き換える（値と Easing ごと）。Keyframe の
  無い Lane に貼ると、それがその Lane の最初の Keyframe になり、静的な `value` は変えない（「記録の規則」）。
- 貼ると再生を止め、貼った Keyframe が選択になる（写したときと同じ形：ポチはポチ、Lane の Keyframe は Lane の Keyframe）。
  貼るものが一つも無いとき（写していない、貼る先が無い、全部が最後のフレームより後）は何もしない。
- キーを受ける条件は Delete と同じ（入力欄にフォーカスがあるときは、ブラウザの文字のコピーと貼り付けになる）。どの場合も、キーと
  貼り付けの事象は ComfyUI に渡らない（`docs/studio-ui.md` の「キーとクリップボードを ComfyUI に渡さない」）。


## Camera の動き

Camera は Keyframe だけで動く（撮り方のモードは持たない）。ドリーズームは `position` と `fov` の Lane に Keyframe を打って作る（κ を一緒に動かしてもよい）。レンズの曲線の Lane（`curve`）も、Camera の行を開いた Lane ごとの行に、ほかの Lane と同じく出る（`docs/scene-state-v2.md`）。行のポチは `curve` に Keyframe を入れない（上の「記録の規則」）。止まらずに複数の点を通る動きは、Easing の `auto` で作る（ADR 0026、0038）。Camera のタイムラインは Panorama Studio が持つ（ADR 0029）。

## 再生の状態

再生・シーク・停止は `web_src/pano_video_playback.js` の状態機械だけが決める。エディタは VIDEO 要素と時計を渡し、知らされた再生ヘッドのフレームと静止画を表示する。旧ノードのエディタの VIDEO 自身の操作（再生ボタンとシークバー）と、Panorama Studio のノード上の表示が表示フレームを出す部品（`web_src/pano_node_playback.js`。`docs/studio-node-surface.md` の「表示フレームと VIDEO」）も同じ状態機械を使う。

| 状態 | 意味 |
|---|---|
| `idle` | 再生ヘッドのフレームを静止画で表示している |
| `loading` | VIDEO にまだフレームがない。読めたら静止画を出すか再生する |
| `seeking` | 一つのシークが進行中。着いたら静止画を出すか再生する |
| `playingVideo` | VIDEO が再生中で、表示されたフレームが再生ヘッドを動かす |
| `playingClock` | 時計が再生ヘッドを動かす（VIDEO がない、VIDEO の終わりより先、または背景の Clip range の外。「背景の行」） |
| `error` | VIDEO が読めなかった。ソースが変わるまで VIDEO なしで動く |

- 再生ヘッドのフレームはこの状態機械が持つ一つだけで、時刻からフレームへの丸めは ADR 0024 の最近傍。旧ノードはメタデータの fps があればそのフレーム、なければミリ秒を単位にする（シークバーの時刻へそのままシークする）。旧ノードの VIDEO 自身のループが有効な間は、状態機械は終わりを持たず、VIDEO が途切れずにループする。
- シーク先は VIDEO のシーク可能な終わりまでに抑える。同じ目標に二度続けて手前で着いたときは、そこを着地点として受け入れる（シークし直しは一回まで）。シーク中の新しいシークは、着いた時点で最新のフレームへ一度だけシークし直す。
- シークしなくても目標のフレームにいるときは、待たずに次の動作（静止画か再生）へ進む。ただし終わりまで再生した VIDEO は必ずシークする（そのまま play() すると先頭から再生される）。
- 停止の位置は、一時停止した VIDEO の currentTime で決める。一時停止した VIDEO は PTS ≤ currentTime の最後のフレームを表示する（ADR 0024）ので、そのフレーム（`frameShownAt`）を再生ヘッドにし、その絵を静止画にする。シークはしない（Timeline の終わりを越えるときだけ、最後のフレームへシークする）。requestVideoFrameCallback の mediaTime は再生中の追従だけに使う。コールバックは currentTime より何フレームも遅れることがある（隠れたタブ、合成されない要素）ため、停止位置には使わない。
- ソースが変わる・消える・読めなくなると、待っているシークや読み込みはそこで終わり、再生は止まる。新しいソースは読めた時点で再生ヘッドのフレームを表示する（旧ノードは先頭）。
- 再生中でも、VIDEO が最初のフレームを表示するまでは直前の静止画を出し続ける（シーク直後や再生開始直後の VIDEO には描けるフレームがない）。描画側（`pano_three_view.js`）も、差し替え先の素材に絵が来るまで前のテクスチャを使い続ける。
- VIDEO が Timeline 以上の長さのときは、VIDEO 自身のループで繰り返す（長い分は Timeline の終わりで先頭へ戻す）（シークしないので映像も音声も途切れない）。Timeline が長いときは、終わりで先頭へシークしてから再生する。
- 各状態が付けたイベントリスナーと requestVideoFrameCallback・時計のコールバックは、その状態を離れるときに外す。
- （新しい UI）新しい UI のエディタ（`web_src/studio/editor.js`）も、背景の VIDEO を `pano_media_session.js` の `createBackgroundVideo` を通してこの状態機械で再生・シーク・停止し、表示する素材（再生中は VIDEO、止めている間は静止画）を描く。Timeline の終わりで先頭に戻るかは、新しい UI のタイムラインのループの切り替えに従う。どの VIDEO を再生するか・メタ情報の長さ・Auto の長さに数える背景・fps の欄を変えられないこと・開いたときの再基準化は、古い UI と同じ部品（`pano_media_session.js`・`pano_video_fps.js`）で決める。背景の Clip range の外と素材の外は `bg_color` を出す（「背景の行」）。再生ボタンとシークのときに、開いた後に届いた実行結果の VIDEO を拾う。新しい UI でまだしないこと：上流の Scene の背景、`port` の Sticker の素材、開いている間に届いた実行結果での fps の再基準化、消音の操作。

## glTF のアニメーション

アニメーションを持つ 3D ファイルの Sticker と `scene` は、再生ヘッドに合わせて clip の姿勢を出す（ADR 0043。時刻の式は `docs/render-contract.md` の「glTF のアニメーション」）。再生、一時停止、シーク、Clip range の移動は、タイムラインのいつもの操作がそのまま効き、clip だけの再生ボタンやシークは作らない。Auto の長さに clip の 1 周を数える規則と、エディタとノード上の表示が clip の長さを集める方法は、`docs/studio-node.md` の出力の長さにある。

## 背景の行

Panorama Studio の自分の `bg_media` は、タイムラインの自分の行の先頭に「Background」の行（パノラマのアイコン）を持つ。行は状態の `background.clip`（`docs/scene-state-v2.md` の「背景の Clip range」）を Sticker の行と同じ Clip range のバーで表し（新しい UI では、VIDEO と IMAGE バッチのとき、または既定でない Clip range のときだけ。「Clip range のバー（新しい UI）」）、移動（`start` を動かし、`in` は保つ）と両端の切り詰め（頭は `start` と `in` を一緒に動かし、素材の位置は動かない。終わりは `duration`）ができる。操作は `timeline_actions.js` の `clip` で、Sticker と同じく操作ごとに Undo の 1 段になる。

- 行が出るのは、`bg_media` がつながっていて、上流の Scene の背景が代わりに使われていないとき（`timeline.js` の `backgroundShown`。`scene` の行が `scene` のリンクで出るのと同じく、リンクで決める）。つないでいないときは出さない。リンクはエディタの外で変わるので、編集の途中で行が出入りしてほかの行が動くことはない。
- 目のアイコンは無く（場所だけ空ける）、Keyframe も Lane も無い（行のポチは出さず、行を開くボタンは無効。`key-row` は何もしない）。背景を隠す手段は無い。
- `duration` の無い Clip range のバーは、VIDEO と IMAGE バッチでは素材の終わり（`bgMediaEnd`）で終わり、1 枚の IMAGE と素材がまだ分からないときはタイムラインの終わりまで描く。
- 出力の長さが Auto のとき、背景の Clip range を動かしても切り詰めても長さが変わらない規則（例を含む）は `docs/studio-node.md` の出力の長さにある。移動は始まりが出力の中にある限り終わりより先へ出てよく、終わりのトリムは出力の終わりで止まる（Sticker と同じ。「タイムラインの長さ」）。長さを変えるときは長さの欄に値を入れる（長さは VIDEO より長くできる）。
- 再生ヘッドのフレームから背景の時刻を求める規則は `port` の Sticker と同じ（素材の先頭は `start − in`）。背景の VIDEO の状態機械（`pano_video_playback.js`）は `place`（`pano_port_media.js` の `backgroundPlace`）でこの位置を知り、Clip range の前と後（`duration` の終わり・素材の終わり）は時計で進め、Clip range の始まりで VIDEO に渡す（時計の間に VIDEO を始まりの時刻へシークしておくので、渡すときにシークしない）。VIDEO 自身のループは、既定の Clip range のときだけ使う。停止したときの再生ヘッドは、止めた VIDEO の時刻のフレームに `start − in` を足したもの。Clip range の外では VIDEO をシークしない。
- Clip range の外と素材の外では、エディタもノード上の UI も、背景の代わりに `bg_color` を出す（`backgroundShownAt`、`bgColorBackground`。ノードの出力と同じ）。1 枚の IMAGE の背景も同じ（素材の終わりは無いので、Clip range の間ずっと出す）。既定の Clip range でも同じで、背景の VIDEO・IMAGE バッチが終わった先（長さの欄で VIDEO より長くしたとき）は `bg_color` を出す。上流の背景が既定の Clip range（`pano_upstream_bg_clip` が既定値）のときも、その素材の終わりから先は `bg_color`。旧ノードのエディタはこの規則を使わない。
- Clip range を動かす・切り詰める・Undo・Redo で、再生ヘッドの位置の背景の時刻が変わると、VIDEO をその時刻へシークし直す。ドラッグ中のシークは 1 フレームに 1 回にまとめ（`createFrameBatch` の `background`）、ドラッグの終わりに Clip range が変わっていればもう 1 回シークする。状態機械のシークの目標は VIDEO の時刻で比べるので、シークの途中で Clip range が動いても古い時刻には止まらない。時計の間に始まりの時刻へ送ったシークがまだ終わっていないとき（`seeking`）は、もう一度送らずにその `seeked` を待つ。
- 行の id は `background`（`pano_timeline.js` の `BACKGROUND_ROW`）。エディタが振る Sticker の id は常に `sticker_<番号>`（`docs/scene-state-v2.md` の `next_sticker_id`）なので、Sticker の行の id と重ならない（`scene`・`painting` と同じ前提）。
- 可変フレームレートの背景 VIDEO の Clip range が既定値でないとき、`duration` の無い Clip range の終わり（バーの終わりと、`bg_color` に替わるフレーム）は、エディタがメタ情報の `duration`（フレーム数 ÷ 平均 fps）から、ノードが最後のフレームの時刻 + 平均 fps の 1 フレームから求めるので、±1 フレームずれうる（CFR では一致する。既定の Clip range では、どちらもフレーム数を使うので一致する）。
- 上流の Scene の背景には自分の Clip range は当たらない。上流の背景は、その背景を持つ Studio の Clip range（実行結果の `pano_upstream_bg_clip`、自分の Timeline fps に秒で直す。`backgroundClipAt`）で置き、`bg_color` もその Studio のもの（`pano_upstream_bg_color`）を出す。上流の背景の行は無い。
- ノード上の表示の表示フレーム（`pano_node_playback.js`）も同じ `place` と `backgroundShows` を使う。上流の背景は、実行結果の `pano_upstream_input_video_meta`（`upstreamMedia`）で素材の終わりを知り、その後は `bg_color` を出す（エディタ・出力と同じ）。

## `port` の Sticker の素材

`sticker` の VIDEO と 2 枚以上の IMAGE バッチは、実行結果の MP4（`pano_sticker_input_videos`、`docs/studio-node.md`）を、エディタとノード上の UI で再生ヘッドに合わせて表示する。状態機械は増やさず、背景の VIDEO の状態機械の再生ヘッドに、2 つ目の VIDEO（`pano_video_playback.js` の `createVideoFollower`）が描画のたびに従う。音は出さない（背景の音声だけ。ADR 0024）。

- 再生ヘッドのフレームから素材の時刻を求める規則は `pano_port_media.js` の `portMediaTime` で、`video` 出力（`sticker_media.py` の `PortMedia.index_at`）と同じ。素材の最初のフレームは Clip range の `start − in` にある。VIDEO は実時間で進み、その時刻の PTS ≤ t の最後のフレームを出す（PTS の丸めの許容差はメタ情報の `pts_tolerance`）。IMAGE バッチは Timeline fps の列で、最も近い 1 枚を出す（MP4 の中ではそのフレームの真ん中へシークする）。Clip range の外と、素材の外（素材の前・終わりの後）では描かない。
- 再生ヘッドが止まっている間（`idle`・`loading`・`seeking`）は、VIDEO を止めてそのフレームの時刻へシークし、着いたら静止画にする。シーク中の新しい時刻は、着いた時点で最新の時刻へ一度だけシークし直す。着くまでは前の静止画を出す。
- 再生ヘッドが進む間（`playingVideo`・`playingClock`。背景の VIDEO が読み込み中・シーク中の間は進まない）は VIDEO も再生し、表示されたフレームと再生ヘッドの時刻の差が 1.5 フレーム（1 フレームと、再生ヘッドの丸めの半フレーム）を超えたらその時刻へシークし直す（Timeline のループで先頭に戻ったときも同じ。MP4 の実際の終わりより先の時刻は、その終わりと見なしてシークしない）。VIDEO が最初のフレームを出す（`playing`）までは静止画を出す。背景の VIDEO がなくても（時計で進むときも）同じである。
- 停止したときは、止めた VIDEO の絵をすぐ静止画にしてから、再生ヘッドのフレームへシークして静止画を確かめる（背景と同じく、止めた瞬間に絵が飛ばない）。
- RGBA の IMAGE バッチは MP4 の代わりに PNG の列（`pano_sticker_input_frames`）で、同じ時刻から求めた 1 枚（`portImageIndex`）を出す。その 1 枚と先の 4 枚だけを読み込み、読めるまでは前の 1 枚を出す（`pano_port_media.js` の `createFrameSequence`）。
- 素材の静止画がまだないときは、最初のフレーム（`pano_sticker_input_images`）を出す。描画側は差し替え先に絵が来るまで前のテクスチャを使い続ける。MP4 が読めないときも最初のフレームを出す。
- MP4 は実行結果が新しい間だけ使い（`isNodeOutputMediaCurrent` の `external-sticker`）、reload 後はジョブ履歴から戻った実行結果で同じく使う。
- Clip range に長さのない `port` の Sticker の行のバーは、タイムラインの終わりではなく素材の終わり（`portMediaFrames`）で終わる（`buildTimelineModel` の `portBarEnd`。上流の層の `port` の Sticker も、その層の素材で同じ）。素材がまだ分からない（実行前）ときは、ほかの長さのない Clip range と同じくタイムラインの終わりまで描く。Auto の長さにこの素材の終わりを数える規則は `docs/studio-node.md` の出力の長さにある。

## 上流の層の行

Panorama Studio の `scene` 入力に上流の Scene があるとき、タイムラインは自分の行の下に、上流の層ごとのまとまりを出す（最も上流の層から）。上流の要素の作業コピー（`editor/upstream.js`、自分の Timeline fps に再基準化したもの）を、自分の行と同じ規則で並べる。

- まとまりの先頭に見出しの行（`PanoTimelineGroup.vue`）があり、`Upstream · <層のキー>`（その層の Scene の id、`id` の無い層は `#<番号>`）と出す。
  新しい UI では、上流のノードの名前で「From <ノードの名前>」と出し（例「From Studio #4」）、tooltip に「Items from the scene input.
  Changes here are saved in this node.」と添える（ADR 0048）。名前はワークフローの上のノードのタイトルで、エディタが層の Scene の id
  から上流のノードを見つけて読む（見つからないときは今の `<層のキー>`）。上書きを持てない層（キーが `#` で始まる層）には ` · inherited only` を添える。
- 行は自分のものと同じ順：その層の Sticker（`sky` は手前から奥、次に `world`）、ペイント（「Paint」。ストロークなどを持つか、隠しているときだけ。目と名前だけ）、`scene`（「Scene」。その層が 3D の内容（`ui` の `pano_scene_files`）を持つか、Keyframe か既定でない Clip range を持つか、隠しているときだけ。目と Clip range だけで、行のポチと Lane の行は無い。新しい UI で Clip range のバーを出すかは「Clip range のバー（新しい UI）」）。
- 行の id は `upstream:<層のキー>:<要素の id>`、ペイントは `upstream:<層のキー>:painting`、`scene` は `upstream:<層のキー>:scene`（`pano_upstream.js` の `upstreamRowId`）。フレームは自分の Timeline frame（作業コピーの値）。Sticker の id に `scene`・`painting` は使わない（エディタが振る id は常に `sticker_<番号>`。`docs/scene-state-v2.md` の `next_sticker_id`）ので、ペイントと `scene` の行の id は Sticker の行の id と重ならない。自分の行の `scene`・`painting` も同じ前提である。
- 操作は自分の行と同じ：Keyframe を打つ・動かす・消す・Easing を変える、行のポチ（全 Lane に Keyframe）、Clip range の移動と両端の切り詰め、目のアイコン、行の選択と開閉。どれも作業コピーを変え、Undo の段を積むとき（`pushHistory`）に `syncUpstreamEdits` が、変えたフィールドだけを自分の状態の `upstream` の記録に上書きとして書く（Lane は Keyframe ごと丸ごと、`clip`・`visible`、層の `scene` の `visible`・`clip`、`painting_visible`。`docs/studio-node.md` の「上流の Scene」のエディタでの編集）。上流の層の状態そのものと自分の Sticker は変えない。操作ごとに Undo の 1 段になり、Undo・Redo で記録と作業コピーが戻る。開いて閉じただけ、行を開いた・選んだだけ、Clip range をクリックしただけでは何も書かない。
- ロックは自分の行と同じに効く：ロックした上流の要素（ロックの上書き、または上流でロックされたもの）の行は、Keyframe と Clip range を変えず、目のアイコンは効く。ロックの切り替えは、行ではなく選択メニューにある（インスペクタには無い）。
- 上書きを持てない層の行は、出るがロックと同じく何も変えない（目のアイコンと行のポチのボタンは無効にし、ツールチップに理由を出す）。選択と行の開閉はできる。
- `scene` の行は Clip range だけを変える。上流の `scene` の Lane は上書きできない（`docs/scene-state-v2.md`）ので、その Keyframe の印は動かせず、Easing も変えない。
- 上書きのある行（その層の記録が、その要素の上書き・`scene` の上書き・`painting_visible` を持つ行）は、名前の右に小さな点を出す（ツールチップは「Overridden in this node」）。点の場所は上流の行では常に空けておき、点が付いても行のボタンは動かない。
- 見出しの右に層の操作が二つある。どちらも常に出し、することが無いときと上書きを持てない層では無効にする（見出しの配置は動かない）。どちらも Undo の 1 段（`commands.js` の `revertUpstreamLayerCommand`・`restoreUpstreamDeletedCommand`、`timeline_actions.js` の `revert-upstream-layer`・`restore-upstream-deleted`。モデルで無効のボタンの操作は何もしない）。
  - 「Revert」：その層の記録から、層の `scene` の上書き（`visible`・`clip`）と `painting_visible` を外し、`scene` とペイントを上流の値に戻す（`pano_upstream.js` の `upstreamLayerRevertedRecords`）。要素の上書きと消した記録は残す。要素の上書きを外すのはインスペクタの「Revert to upstream」。
  - 「Restore deleted (n)」：その層の記録の `deleted` を空にし、下流で消した要素をもう一度出す。n は消した記録のうち、上書きを当てる前の層にまだある要素の数（`upstreamDeletedCount`。上流で消えた id は数えない）。消した要素は選べないので、層の操作として見出しに置く（インスペクタには置かない）。
- Delete キーは、Keyframe を選んでいればその Keyframe を消し（「記録の規則」）、そうでなければ選んだ上流の要素を消す（`docs/editor-interaction.md` の「上流の Scene の表示と編集」の「消す」）。
- （新しい UI）上流の層の行は、編集ができるまで読み取り専用で出す（`docs/studio-ui.md` の「ノードの入力から来た物」）。
- 自分の `scene` の行（自分の `world` の内容）は、上流の Scene があるときも、上流が無いときと同じ規則（「Panorama Studio のタイムライン」の `scene` の行）で出す。上流の層と自分の `world` は重ねて描く（ADR 0048、`docs/studio-node.md` の「上流の Scene」の土台の 3D）ので、自分の行の最後（ペイントの後）に置き、上流の層のまとまりはその下に続く。
- タイムラインの範囲は、自分の行と同じく出力の長さちょうど（「タイムラインの長さ」）。Auto の長さに上流の Scene の長さ（実行結果の `pano_upstream_frames`）と上書きした Clip range の終わりを入れる規則は、`docs/studio-node.md` の「上流の Scene」の長さにある（`editor/upstream.js` の `upstreamOutput`、`pano_upstream.js` の `upstreamOverriddenEnds`）。エディタだけの扱いとして、まだ書き戻していない編集で変えた Clip range（ドラッグ中を含む）も上書きとして数え、ドラッグ中の Clip range は `duration` の無いものとして数える。上流の行の Clip range と Keyframe のドラッグも、自分の行と同じ規則（「タイムラインの長さ」。Clip range の移動は始まりが出力の中にある限り終わりより先へ出てよく、トリムと Keyframe は終わりで止まり、どのドラッグでも出力は延びない）。

## Pose handoff の `port` の Sticker

`sticker_state` で届く `port` の Sticker は、実行結果の Pose handoff（`pano_sticker_handoff`）を当てた姿で、タイムラインの行と Lane にも出る（引き継いだ Lane には上流の Camera の軌道の Keyframe が並ぶ）。引き継いだ Lane の Keyframe を打つ・動かす・消す・Easing を変えると、その Lane は下流の上書き（`handoff_overrides`）になり、Lane 全体（上流から来ていた Keyframe を含む）を保存する。Clip range・目のアイコン・ロックの操作は上書きにならず、ふつうに保存する。上書きを外すのはインスペクタの「Revert to upstream」の Lane のボタン。ノードの規則は `docs/studio-node.md` の「`sticker_state` で届く `port` の Sticker」、エディタの表示と記録は `docs/editor-interaction.md` の「`port` の Sticker の Pose handoff の表示と記録」。
