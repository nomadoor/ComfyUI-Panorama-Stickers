# Preview ノード（`PanoramaPreviewNode`）

Preview ノードの入力と素通しの規則、旧ノードのプレビュー MP4 の音声の長さを定める。

この文書が持たない規則：Panorama Studio の出力（`docs/studio-node.md`）、`PANO_SCENE` の形と上流の Scene の `ui` のキー（`docs/studio-node.md` の「`PANO_SCENE`」「上流の Scene」）、空間の表示の描き方と出力との差（`docs/threejs-spark-integration.md`）、視点の操作とプリセット（`docs/editor-interaction.md` の「視点の操作」）、IMAGE・VIDEO の表示の runtime（`docs/legacy-node-surfaces.md` の「PanoramaPreview」）。決めた理由は ADR 0041。

大きなウィンドウは新しい UI の Preview のウィンドウで開く（ADR 0062）。その画面の規則は `docs/studio-ui.md` の「Preview のウィンドウ」、視点の規則は `docs/space-and-view.md` の「Preview のウィンドウ」が持つ。この文書の「`PANO_SCENE` を見る」の視点の規則は、ノード上の Scene のビューアのものである。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| Preview ノード | `preview_node.py` `PanoramaPreviewSceneNode` | — | `tests/test_pano_scene_preview.py`、`tests/test_studio_upstream.py` |
| `PANO_SCENE` を見るための `ui`（上流の Scene と同じキー） | `preview_node.py` `PanoramaPreviewSceneNode.execute`・`_preview_scene_ui`（`scene_build.py` の `_upstream_ui` を呼ぶ。キーの形の owner は `docs/studio-node.md` の「上流の Scene」） | — | `tests/test_pano_scene_preview.py` `test_a_pano_scene_preview_gives_the_upstream_keys` |
| ノード上の表示を `PanoramaPreviewNode` に結ぶ（実行の前は接続の型で、IMAGE・VIDEO の表示か Scene のビューアかを決める） | — | `web_src/pano_preview_identity.js` `isPanoramaPreviewSceneNodeName`、`web_src/pano_editor_extension.js` `createPanoEditorExtension`、`web_src/pano_preview_video.js` `linkedInputType`・`BACKGROUND_INPUT_NAMES`（`source` を含む） | `tests/pano_editor_extension.test.mjs`（「the Preview shows a linked Scene in the Scene viewer and IMAGE or VIDEO in the legacy Preview's view, switching with the link」） |
| Scene のビューア（読み取り専用の空間の表示、ノード上と大きなウィンドウ、動くのは最後に操作した 1 つ、再生の帯） | — | `web_src/pano_scene_viewer.js` `createSceneViewer`・`createSceneViewerHost`・`sceneViewerRecord`（下の分けたモジュールを組み立てる）、ノード上は `web_src/pano_scene_viewer_node.js` と `web_src/components/PanoSceneViewerNodeSurface.vue`（大きなウィンドウは `docs/studio-ui.md` の「Preview のウィンドウ」）、`web_src/pano_space_navigation.js` `createSpaceNavigation`、`web_src/pano_upstream_layers.js` `createUpstreamLayers`・`refreshGoneUpstreamFiles`、`web_src/pano_preview_view.js` の `acquire(onChange, { items: true })`。ノード上の Alt + ホイールとピンチの画角は `pano_space_navigation.js` `zoomFov`（一段と向きと範囲は `pano_camera_math.js` `fovZoomStep`・`fovStepValue`・`VIEW_FOV_STEP_DEG`・`VIEW_HFOV_MIN_DEG`・`VIEW_HFOV_MAX_DEG`。`docs/space-and-view.md` の「寄る」）を `pano_scene_viewer.js` `zoom` が呼び、ホイールの意味と溜め方は `web_src/pano_wheel.js` `wheelMeaning`・`createWheelSteps` を `pano_scene_viewer_node.js` が使う。Reset view の家のアイコンと始めの視点での無効は `PanoSceneViewerNodeSurface.vue` と `pano_scene_viewer.js` `atStart`（始めの視点は `pano_space.js` `START_VIEW`、比べ方は `sameViewpoint`。エディタの Reset View と同じ） | `tests/pano_scene_viewer.test.mjs`、`tests/pano_space_navigation.test.mjs`、`tests/pano_preview_view.test.mjs`、`tests/browser/scene_viewer.spec.js`（`tests/browser/pages/scene_viewer.*`）、`tests/browser/preview_entry.spec.js`（Alt + ホイールとピンチの画角、Reset view の無効） |
| 旧ノードのプレビュー MP4 の音声の長さ | `core/video.py` `_fit_audio_to_frame_count` | — | `tests/test_preview_audio.py` |

Python のファイルは `comfyui_pano_suite/` の下にある。

- Python のクラスは `PanoramaPreviewSceneNode`、表示名は「Panorama Preview」。旧 `PanoramaPreview` はこのノードに置き換えたので、表示名を「Panorama Preview (legacy)」にして `is_deprecated` を付ける。登録は続けるので、旧 Preview を使う保存済みのワークフローは読めて動くが、ノードの検索と追加には出ない（ADR 0029 の「旧ノードは残す」はそのまま。2026-10-11、オーナー承認）。表示名と deprecated の印は `tests/test_node_schema_contract.py` が見る。
- `source` は `io.MatchType`（テンプレート `source`、IMAGE・VIDEO・`PANO_SCENE`）で、出力は入力と同じ型の同じオブジェクトを返す。`is_output_node` は `True`。
- 二つ目の入力は `background_range`（`360`・`180`、既定 `360`。ADR 0048）。意味は IMAGE・VIDEO のパノラマが球のどこまでを覆うかで、
  Panorama Studio の `background_range` と同じ名前と意味。旧 Panorama Preview (legacy) の入力は `coverage` のまま変えない。
- Timeline は `source` から Studio と同じ `_decide_timeline` で決める。IMAGE と VIDEO は既定の状態（`timeline.fps` 24）に対して決める。`PANO_SCENE` の Timeline はその `fps`・`times`・`frames`。
- IMAGE と VIDEO の実行結果の `ui` は旧 Preview と同じキー（`pano_input_images`、2 フレーム以上なら `pano_videos`・`pano_video_meta`）。`pano_video_meta` の fps は Timeline fps、`frames` は Timeline の長さ。
  - 画面（ノード上の表示と大きなウィンドウ）は IMAGE の絵をこの `pano_input_images` から読む。つないだ先のファイルは、実行の前と、これが読めないときだけ（`docs/adr/0003-external-input-sticker-failure-boundaries.md` の Amendment 2026-03-11。ウィンドウは `docs/studio-ui.md` の「Preview のウィンドウ」）。
  - IMAGE：旧 Preview と同じく、最初の画像を保存し、バッチを MP4 にエンコードする（`encode_frames_to_mp4`。キーフレームは `EDITOR_KEYINT` フレームごと、B フレームなし）。音声はない。
  - VIDEO：`open_video(video, "source")`（Studio と同じ）で開き、最初に復号できたフレームをプレビュー画像にし、Timeline は `frame_rate` と `times` から決める。全フレームを一括では展開しない（クロップ付きや `VideoFromFile` 以外で `open_video` が `get_components()` に落ちる場合は、それに従う）。MP4 は Studio と同じエディタの MP4（`_editor_mp4`）で、シークしやすいファイルはコアの `save_to(MP4, H264)` でストリームコピーし、それ以外はプロキシを作る。`has_audio` はコピーなら書いた MP4 に音声ストリームがあるか、プロキシなら音声を入れたかで決める。
  - プレビュー画像と MP4 のために VIDEO を 2 回開く（`open_video` と、コピーの `save_to` またはプロキシの `StreamedVideo`）。PTS の走査は `VideoIndex` を共有するので 1 回だけ。Studio の `bg_media` の VIDEO も同じ方法で MP4 を書く。
- 旧ノード（`PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`）のプレビュー MP4 に入れる `audio` は、フレームの長さ（フレーム数 ÷ fps）に合わせて、長ければ切り、短ければ無音で延ばす（`_fit_audio_to_frame_count`）。伸縮はしないので、速さと音程は変わらず、先頭からフレームと揃う。チャンネルの並びは `docs/studio-node.md` の `video` の音声の `_prepare_audio_layout`。
- `PANO_SCENE` のときも、出力は入力の同じオブジェクトをそのまま返し、描画はしない（ポートの意味は変えない）。`ui` に、その Scene を見るためのキーを返す（下の「`PANO_SCENE` を見る」）。
- ノード上の表示（`pano_preview_identity.js` の `isPanoramaPreviewSceneNodeName` が新しい id `PanoramaPreviewNode` を見分け、`pano_editor_extension.js` が付ける）：IMAGE と VIDEO は旧 `PanoramaPreview` の専用 runtime（`docs/legacy-node-surfaces.md`。3DoF の見回し）で、`PANO_SCENE` は下の Scene のビューアで見せる。どちらを使うかは、実行の前から `source` の接続の型（`pano_preview_video.js` の `linkedInputType`。`PANO_SCENE` ならビューア）で決める。実行結果を待たずに表示が決まり、型が変わればすぐ切り替わる。

## `PANO_SCENE` を見る

Preview は見るための場所で、編集とは分ける（ADR 0041）。Studio のエディタでは Sticker に触れてしまうので、気楽に眺める場所にならない。Preview では何も編集できない。`PANO_SCENE` は 6DoF で自由に動き回って見られ、IMAGE と VIDEO の ERP は 3DoF で見回せる。ノードの上でも、大きなウィンドウでも見られる。Camera は使わない（Studio の Camera があると出力は ERP ですらない。Preview は Scene そのものを見せる）。

### 何を描くか

- エディタの空間の表示と同じ、three.js と Spark の 3D の表示（`docs/threejs-spark-integration.md` の「空間の表示」。SPLAT、メッシュ、深度のグリッド、上流の層の要素、既定の照明）。出力の画素ではない。出力との差は、エディタと同じもの（`docs/threejs-spark-integration.md` の「ノードの出力との差」と、深度のグリッドの色のプロキシの差）で、Preview はそれを足しも減らしもしない。
- 描くのは `PANO_SCENE` の全部の層（`layers`）で、Studio のエディタが上流の Scene の層を描くのと同じ描き方（`pano_upstream.js` の `upstreamLayerView`）。Preview には自分の層が無い。Sky の Sticker、ペイント、背景（`bg_media`・`bg_color`・Clip range）も描く。
- 描かないもの：Camera（視錐台、軌道、Frame 表示）、ギズモ、選択の枠、選択メニュー、インスペクタ、タイムラインの行、Sticker の追加と削除。グリッドと軸は、空間で迷わないための目印として、エディタと同じく出す（Hide Grid で隠せる。ビューアだけ）。
- 再生：VIDEO の背景、`port` の素材、動く 3D（MoGe・DA3 の列）は、Timeline に沿って再生する。再生の部品はエディタと同じ（`docs/timeline-ui.md` の再生、`createVideoFollower`、深度のグリッドの色）。
- 音：背景の VIDEO（上流の Scene の背景を含む）の音は、エディタと同じく背景を再生する `createVideoPlayback` の VIDEO 要素が出す（`port` の素材の `createVideoFollower` はいつも muted）。ノード上ではその VIDEO も muted にする（Studio のノード上の表示と同じ）。大きなウィンドウでは muted にしない。

### `ui`（Python）

`PANO_SCENE` のとき、`execute` は描かずに、Studio が上流の Scene に返すのと同じキーを返す（`_preview_scene_ui`）。Studio の `_upstream_ui` をそのまま呼ぶので、キーの形の owner は `docs/studio-node.md` の「上流の Scene」のまま。

- `pano_upstream_layers`（全部の層の `state` と素材の `ui`）、`pano_upstream_frames`、`pano_upstream_coverage`・`pano_upstream_bg_color`（いつも）、背景があれば `pano_upstream_input_*`・`pano_upstream_bg_clip`、`pano_timeline_fps`（`PanoSceneValue.fps`）、`pano_timeline_frames`（`len(frames)`）。
- `pano_upstream_coverage` と `pano_upstream_bg_color` は、背景の無い Scene でも `_upstream_ui` がいつも出す（規則は `docs/studio-node.md` の「上流の Scene」）。Preview には自分の背景が無いので、Scene の値で描く。
- 参照するファイル（エディタ用ファイル、MP4、深度のファイル）は、Scene を作った Studio が書いたもので、Preview は書き直さない（`PANO_SCENE` の `media_ui` の規則のまま）。Preview の実行は描画もファイルの書き出しもしないので、ほぼ時間がかからない。
- 3D ファイルの Sticker のエディタ用ファイルが消えたとき（404）の問い合わせ直しは、エディタと同じ部品で行う（`pano_upstream_layers.js` の `refreshGoneUpstreamFiles` と、`pano_file_3d.js` の `createFile3dEditorFiles`。ビューアの全体で 1 つを持ち、1 つの Source につき問い合わせ直しの上限もエディタと同じ。`docs/threejs-spark-integration.md` の「空間の表示」）。
- ほかのファイルが temp から消えた後（404）は、エディタと同じ既知の挙動（`docs/threejs-spark-integration.md` の「空間の表示」。前の最も近い読み込み済みの要素を出し、コンソールに 1 回出す）。消えるファイルの `ui` の項目には `pano_evictable` が付くが、それを使う「もう一度実行してください」の表示はまだ無い（`docs/runtime-resources.md` の「一時ファイル」）。戻し方も同じ：入力を変えずに実行し直しても、ComfyUI はキャッシュの出力（消えたファイルを指す `ui`）を返し、ファイルは書き直されない。Scene を作った Studio の入力のどれかを変えて実行すると書き直される。

### ビューア（JS）

Scene を見る表示（ビューア）は、エディタの部品を、エディタから独立したモジュールに分けて使う。エディタそのものをノードの中に載せない。

- 分けたもの（振る舞いを変えない整理）：
  - 視点の操作の配線（`editor/space.js` の 3DoF・6DoF、ドラッグとホイールの動き、`pickSurface` での中心と先、遷移、キーの移動、Reset View・Frame Selected）を `web_src/pano_space_navigation.js` の `createSpaceNavigation` に移した。
  - 上流の層の組み立て（エディタの `pano_upstream_layers` の読み込み、層ごとの素材の follower、描く物（`viewInput`）、ファイルの 404 の問い合わせ直し）を `web_src/pano_upstream_layers.js` の `createUpstreamLayers`・`refreshGoneUpstreamFiles` に移した。上書きの記録・編集の書き戻しは `web_src/pano_upstream_edits.js` の `createUpstreamEdits`（新しい UI の `web_src/studio/upstream.js` が使う）。
  - エディタは分けたモジュールを呼ぶだけになる。
- ビューアの組み立て（`pano_scene_viewer.js` の `createSceneViewer`）：分けた 2 つのモジュールと、再生の部品（`createNodePlayback`、深度のグリッドの色）を 1 つの Scene の表示に組み立てる。ノード上の表示がこれを使い、共有のビュー（`pano_preview_view.js` の `acquirePreviewView`。`pano_scene_viewer_node.js`）に描く。大きなウィンドウは新しい UI のステージで描き（`docs/studio-ui.md` の「Preview のウィンドウ」）、ビューアからは視点と再生の位置の記録（`sceneViewerRecord`）だけを引き継ぐ。
- 要素の読み込みの知らせ：共有のビューは、要素が読み込めたときと自分のスプラットを並べ替え直したときの知らせを、`acquire(onChange, { items: true })` で求めたノードにだけ送る。求めるのは Scene のビューアだけで、ほかのノード上の表示（Studio・旧ノード・旧 Preview）は今までどおり知らせを受けず、描き直しが増えない（`tests/pano_preview_view.test.mjs` の「an item loaded or splats sorted in the shared view are told only to the nodes that draw 3D items」）。
- データ：Preview の実行結果の `pano_upstream_layers` を、Studio のエディタと同じく上流の層として読む（`pano_upstream_layers.js`）。実行結果が新しいかは、Preview の `source` の接続で判断する（`isNodeOutputMediaCurrent`）。そのため `source` は背景のチャンネルの入力名（`BACKGROUND_INPUT_NAMES`）に入る。`source` を持つのはこのノードだけなので、旧ノードの判定は変わらない。Preview の状態は空の状態 v2（Sticker なし、Camera なし、`upstream` は空）で、どこにも保存しない。ペイントの層を描く大きさは、エディタの既定と同じ 2048 × 1024 に固定する（`pano_scene_viewer.js` の `paintTarget`）。Preview は Scene を作った Studio の出力の大きさを受け取らないためで、ペイントの多い Scene では Studio のエディタより粗く見えることがある。
- 当たり判定：視点の操作が使う `pickSurface`（オービットの中心とホイールの先）だけを使う。Sticker を選ぶ当たり判定（`pickSticker`）は使わない。
- 始めの視点：World の原点で、ERP の正面（yaw 0、pitch 0、エディタの既定の画角）を向く。`PANO_SCENE` は 6DoF から始める（エディタは 3DoF から始めるが、Preview は動き回って見る場所なので）。IMAGE・VIDEO は 3DoF だけ。
- 視点の操作：エディタと同じ 6DoF のプリセット（`PanoramaSuite.Editor.ViewControls`、`docs/editor-interaction.md` の「視点の操作」）。ピボット・パン・ズームの規則も同じ。
- 視点は状態にも設定にも保存しない。

#### ノード上

- 置くもの（`PANO_SCENE` のとき）：Vue の overlay の右上に、アイコンのボタンを 2 つ：`Reset view`（原点の正面に戻り、画角も `DEFAULT_VIEW_HFOV` に戻す。エディタの Reset View と同じ遷移。小さなノードで迷ったときに戻る手段が要るため）と `Open viewer`（下の大きなウィンドウ）。`Reset view` のアイコンは家（`docs/design.md` の「アイコン」）で、位置・yaw・pitch・画角がすべて始めの視点（原点、yaw 0、pitch 0、`DEFAULT_VIEW_HFOV`）と同じ間は隠さずに無効にし、tooltip は「Reset view · Already at the start」（ADR 0061。比べ方は `docs/space-and-view.md` の「開いたときの視点と Reset View」の始めの視点と同じ）。画角の数字は出さない（ノード上の表示は絵が主役のため）。下端に再生の帯（下の「再生の帯」）。IMAGE・VIDEO のときは旧 Preview の runtime の表示のまま。ただし、新しい Preview のウィンドウがそのノードを開くとき（`web_src/editor_choice.js` `previewUsesNewWindow`）、右上のボタンはブラウザの全画面ではなく `Open viewer` になり、新しいウィンドウ（`docs/studio-ui.md` の「Preview のウィンドウ」）を開く。新しいウィンドウが開くのは、`source` に IMAGE か VIDEO をつないだときと、`source` に何もつないでいないとき（`source` の差し口に link が無いとき。黒いステージのウィンドウ。持ち主、2026-10-31）。link はあるが型が分からないとき（型の無い Reroute を通したときなど）は `Fullscreen` のまま。どの入口も同じ選び方（`createEditorChooser`。ボタンの切り替えは `web_src/pano_preview_previewnode.js` の `opensWindow`）を通す。
- マウス：エディタと同じプリセットの表を、ノードの上でもそのまま使う（同じ操作を二通り覚えさせないため）。Alt + ホイールとピンチは、下の「ホイール」の寄る規則に従う。オブジェクトの操作が無いので、左ドラッグはいつも表の「何もないところ」の扱い。surface の上の押し下げ・ドラッグ・ホイールは surface が受け、ComfyUI のキャンバスのパンやノードの移動にしない（Studio のノード上の表示と同じ）。ノードのタイトルの帯は ComfyUI のまま。
- ホイール：Studio のノード上の表示と同じ捕捉の規則（`docs/studio-node-surface.md` の「見回し」）で受ける。ピンチ（Ctrl + ホイール）も
  同じ捕捉の規則でホイールと同じに surface が受け、ComfyUI のキャンバスの拡大にしない。割り当ては Panorama Studio の
  エディタとそろえる（ADR 0061）：
  - Alt なしのホイール（トラックパッドの二本指でなぞるのを含む）は、エディタと同じポインタの下へのズーム（前へ進む）。
  - Alt + ホイールとトラックパッドのピンチ（Ctrl + ホイール。マウスの Ctrl + ホイールも同じ）は、視点の画角を変える。中心、一段、向き、
    範囲、溜め方は `docs/space-and-view.md` の「寄る」と同じで、Scene のビューアでも IMAGE・VIDEO の表示でも同じ。
  - IMAGE・VIDEO（旧 Preview の runtime。`docs/legacy-node-surfaces.md` の「PanoramaPreview」）では、ふつうのホイールで画角が変わっていたのを
    やめる（意図した変更。ADR 0061）。見回しだけ（3DoF）の表示なので、ふつうのホイールでは何も動かない。
  - ノードの上には、Sky だけのときのホイールの知らせを出さない（ノードの上の UI は足さない。持ち主の決定、2026-11-05。ADR 0061）。
    知らせは Preview のウィンドウとエディタだけに出る（`docs/space-and-view.md` の「Sky だけのときのホイール」）。
- 右クリックのメニュー：右ドラッグを使うプリセット（Default・Unity-like）では、surface の上の右クリックのメニューを抑止する（エディタの 6DoF と同じ。ノードのメニューはタイトルの帯の右クリックで出る）。
- キー：ノード上では WASD・QE も Space も受けない（キャンバスのキーは ComfyUI のもの。Studio のノード上の表示も Space を割り当てない）。キーで動くのはウィンドウだけ。
- ダブルクリック：旧 Preview と同じく再生と一時停止を切り替える。切り替えた瞬間に、surface の中央に再生か一時停止のアイコンを短く出して知らせる（`docs/agents/ux-principles.md` の「状態が変わった瞬間は、一瞬だけはっきり知らせる」）。最初は止めて frame 0 を出す。
- 動くのは 1 つ：ノード上の表示は今も共有のビュー（1 つの WebGL の context）で描き、各ノードは自分の 2D の canvas に絵を写す（`pano_preview_view.js`）。Preview の Scene のビューアで描き直すのは、最後に操作した（押し下げ・ホイール・ダブルクリック）か、最後に実行された Preview のノードだけで、ほかは最後に写した絵をそのまま出す。再生もそのノードだけ（`pano_scene_viewer.js` の `createSceneViewerHost`）。ただし、各ノードは最初の絵を一度描く。要素の読み込み中に描いた絵は最初の絵とみなさず、要素が読み込めた知らせで、最後に操作したノードでなくても 1 回だけ描き直す（要素がすべて読み込めた絵を描くと、そのノードは描き終えたものとする）。各ノードは自分の視点（位置・向き・画角・モード、数個の数）と再生の位置を、`pano_node_bridge.js` のノードごとの runtime の記録に持ち、操作するとそこから続ける。保存はしないので、ページを読み込み直すと、どのノードも原点の正面と frame 0 に戻る。
- 見えないとき（collapse、別の graph、subgraph の中）とウィンドウを開いている間は、ノード上では描かない（Studio のノード上の表示の「見えないとき」と同じ扱い）。

#### 大きなウィンドウ

- `Open viewer`（ノード上）か、ノード上の表示を付けられなかったときに残る `Open Preview` のボタン（widget。表示を付けたときは隠す、`pano_editor_extension.js`）で開く。開くのは新しい UI の Preview のウィンドウ（`web_src/studio/preview_window.js` `openPreviewWindow`）で、置くもの・キー・見た目は `docs/studio-ui.md` の「Preview のウィンドウ」、視点は `docs/space-and-view.md` の「Preview のウィンドウ」が持つ（ADR 0062）。
- 開くと、ノードと同じ視点（画角を含む）と再生の位置から続ける。閉じるとノードはウィンドウの最後の視点（画角を含む）と位置を引き継ぐ。IMAGE・VIDEO も画角を受け渡す（ADR 0061。それまではウィンドウがいつも `DEFAULT_VIEW_HFOV` で開いた）。何を受け渡すかは `docs/space-and-view.md` の「Preview のウィンドウ」。ウィンドウはエディタと同じく自分の WebGL の context を持ち、開いている間だけ使う。

#### 再生の帯

ノード上とウィンドウで同じ 1 本の帯を出す：再生と一時停止のボタン 1 つ（メディアプレーヤーの慣習どおり押すたびに切り替わる。`docs/agents/ux-principles.md` の例外）、シークの帯、時刻の表示。VIDEO と時間を持つ Scene で使い、時間の無い入力では消さずに無効にして場所を保つ（`docs/agents/ux-principles.md` の「位置を動かさない」）。部品は今ある `PanoVideoTransport.vue`（`variant="playback"`）で、Timeline の再生につなぐ。帯に出すのは再生と一時停止・シーク・時刻だけで、`PanoVideoTransport.vue` のループと音量の切り替えのボタンは Preview では出さない。再生は終わりで先頭に戻って繰り返す（既定）。音はウィンドウでは音のボタン無しに出し、ノード上では muted（上の「音」）。

### メモリと重さ

- WebGL の context は、ノード上は今ある共有のビューの 1 つだけ（Preview の数で増えない）。ウィンドウを開いている間はもう 1 つ。
- 読み込んだ要素と Spark の描画は、描き直すノード（動いている 1 つ）の Scene の分だけ。上限は共有のビューのキューごとの `SCENE_ITEM_BUDGET`（`docs/runtime-resources.md` の「エディタのメモリの目安」）。動くノードが替わると、前の Scene の要素は上限の中で古いものから捨てる（同じ Scene なら同じ URL なので読み直さない）。
- Studio のエディタを開いている間は、ノード上の Scene のビューアは描かない。エディタと同じ Scene の要素と Spark の描画を二重に持たないためである。旧 Preview の表示と Studio のノード上の表示は、今までどおり描き続ける。

### 先のこと（作らない）

- 歩くモード（SuperSplat の Walk のように、床と壁に当たりながら一人称で歩く。別の粗いボクセルの当たりの素材を使う）は、後の段階とする。今は作らない。

### 境界をまたぐ設計（AGENTS の原則 4）

Python（Preview の `ui`）と JS（分けた視点と上流の層のモジュール、ビューアの組み立て、ノード上の表示）、エディタとノード上の表示をまたぐ。ノードの id・ポートの意味（出力は入力の素通し）・状態は変えない。`ui` に上流の Scene のキーが加わる。

- 作らないもの：編集、Camera、Preview での描画（出力の画素）、歩くモード、Preview だけの視点の操作のプリセット、エディタ全体をノードの中に載せること。
- owner：`ui` のキーの形は `docs/studio-node.md` の「上流の Scene」（`_upstream_ui`）。描き方は `docs/threejs-spark-integration.md`、視点の操作の規則は `docs/editor-interaction.md`（コードは分けた `pano_space_navigation.js`）、上流の層の組み立ては `pano_upstream_layers.js`（分けたもの）、ビューアの組み立てはこの文書（`pano_scene_viewer.js`・`pano_scene_viewer_node.js`）。
- data の流れ：`PANO_SCENE` → `_preview_scene_ui`（`_upstream_ui`）→ 実行結果の `ui` → `pano_upstream_layers.js`（上流の層）＋ `pano_space_navigation.js`（視点）→ `createSceneViewer` → ノード上の共有のビュー。大きなウィンドウは `web_src/studio/preview_window.js` `openPreviewWindow` が新しい UI のステージで描き、ビューアからは視点と再生の位置の記録（`sceneViewerRecord`）だけを引き継ぐ。出力のポートには入力をそのまま返す。
- 一致を守る test：`tests/test_pano_scene_preview.py` の `test_a_pano_scene_preview_gives_the_upstream_keys`（Studio に同じ `PANO_SCENE` をつないだときの上流のキーと同じ値、出力が入力と同じオブジェクト、描画しない）、`tests/pano_editor_extension.test.mjs`（新しい id に表示が付き、`image` 出力が増えない）、`tests/browser/preview_window.spec.js`（ウィンドウにインスペクタ・タイムライン・左の列が無い、`PANO_SCENE` を読み取り専用で描く、ショートカットの一覧に選択と編集の行が無い）、`tests/pano_scene_viewer.test.mjs`（最後に操作したノードだけ描き直す、ほかは写した絵のまま、ノードごとの視点と再生の位置、要素の読み込みの知らせ、404 の問い合わせ直し）、`tests/browser/scene_viewer.spec.js`（2 つの Preview が 1 つの WebGL context で描け、6DoF で動かしても描ける）。
- 考えた別案：ADR 0041。
- `background_range` 入力は `execute` では読まない（フロントエンドのウィジェットが読む）。`PANO_SCENE` のときは `PanoSceneValue.coverage` が正で、ウィジェットの値は使わない。
- MatchType はバックエンドで型を検証しないので、`source` が IMAGE（4 次元のテンソル）・VIDEO・`PanoSceneValue` のどれでもなければ `TypeError` にする。
- 旧 Preview 用の `ensurePanoramaPreviewImageOutput`（`web_src/pano_editor_extension.js`）は、足りない `image` 出力を足す。新しいノード（`PanoramaPreviewNode`）には適用しない（適用すると MatchType の `output` とは別に `image` 出力が増える）。
