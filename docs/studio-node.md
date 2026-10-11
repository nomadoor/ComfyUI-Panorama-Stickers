# Panorama Studio のノード

Panorama Studio（`PanoramaStudio`）のノードが Scene を組み立てて撮る規則を定める：Timeline と出力の長さ、背景と `sticker` の素材の時間、
フレームごとの描画、出力（`first_frame`・`first_frame_mask`・`video`・`sticker_state`・`scene`）と実行結果の `ui`、`PANO_SCENE`、上流の Scene の重ね方、
`port` の Sticker と Pose handoff。用語は `CONTEXT.md` に従う。決めた理由は ADR 0024（時間）、0025（Scene の正）、0027（`video` 出力）、
0029（Panorama Studio）、0030（上流の上書き）、0036（Pose handoff の焼き込み）、0038（範囲、`DA3_GEOMETRY`、光が効くかの印）にある。

この文書が持たない規則：状態 v2・`sticker_state` の形・評価関数・上書きの記録を一つの層に当てる規則（`docs/scene-state-v2.md`）、描画関数（`docs/render-contract.md`）、
メモリ・中断・キャッシュ・一時ファイル（`docs/runtime-resources.md`）、エディタでの表示と操作（`docs/timeline-ui.md`、`docs/threejs-spark-integration.md`、`docs/editor-interaction.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| Timeline fps・出力の長さ・出力フレームの時刻（(a)） | `nodes.py` `_decide_timeline`・`_timing_video`・`_output_times`（glTF のアニメーションの clip の 1 周の段は作る） | 長さだけ `web_src/pano_timeline.js` `autoTimelineLength`（clip の 1 周は、メタの `animation.clips` の `duration` と状態の `speed` から求める。作る） | `tests/test_timeline_length_parity.py`（clip の 1 周の行を足す。Python と JS が同じ表を読む。作る）、`tests/test_port_media_parity.py`、`tests/test_studio_camera.py` |
| 背景の Clip range と音声 | `nodes.py` `_bg_place`・`_bg_frames`・`_bg_audio` | — | `tests/test_studio_background_clip.py` |
| `sticker` の素材の時間 | `sticker_media.py` `PortMedia`・`batch_index` | — | `tests/test_port_media_parity.py`、`tests/test_stickers_timed_sticker.py` |
| VIDEO の読み方 | `core/video_source.py` `scan_video`・`StreamedVideo`・`VideoIndex`、`sticker_media.py` `open_video` | — | `tests/test_video_source.py`、`tests/test_stickers_scene_video.py` |
| フレームごとの描画（(b)） | `nodes.py` `_render_frames` | — | `tests/test_scene_video.py`、`tests/test_studio_scene.py` |
| `video` 出力 | `scene_video.py` `SceneVideo`・`RenderedVideo` | — | `tests/test_scene_video.py`、`tests/test_stickers_scene_video.py`、`tests/test_cancel_long_loops.py` |
| `PANO_SCENE` | `nodes.py` `PanoSceneValue`・`SceneLayer`・`_scene_output` | — | `tests/test_studio_scene.py`、`tests/test_studio_upstream.py`、`tests/test_pano_scene_preview.py` |
| Panorama Studio の入出力、Camera の判定、撮り方、出力の大きさ、`sticker_state` 出力 | `nodes.py` `PanoramaStudioNode`・`_studio_camera`・`_studio_output_size`・`_camera_sticker_state` | — | `tests/test_studio_node.py`、`tests/test_studio_camera.py`、`tests/test_studio_scene.py`、`tests/test_node_schema_contract.py` |
| 実行結果の `ui` とエディタ用ファイル（`pano_scene_meta` の `unlit` を含む） | `nodes.py` `_build_scene`・`_port_media_ui`・`_scene_ui`・`_editor_mp4`、`core/video.py` `encode_editor_mp4`・`editor_ready`・`save_editor_frames`、`scene_files.py` `write_editor_files` | — | `tests/test_editor_mp4.py`、`tests/test_scene_editor_files.py`、`tests/test_studio_upstream.py` |
| `DA3_GEOMETRY` mono のエディタ用ファイルの形式（深度（keep は値の `> 0`）・メタ・色のプロキシ） | `scene_files.py` `write_editor_files` の `DA3_GEOMETRY` mono の枝（`_da3_depth_files`）、`nodes.py` `_scene_ui`・`_depth_grid_meta`（メタと色のプロキシ。プロキシは `_batch_mp4_ui` と同じ作り）・`SCENE_FILE_TYPES` の `f32` | `web_src/pano_space.js` `sceneFilesOf` の `depth_grid` の枝、`web_src/pano_depth_grid.js` `readDepthGrid` | `tests/test_scene_editor_files.py` `test_da3_mono_editor_files_are_depth_with_keep_as_positive`・`test_the_depth_grid_fixture_is_what_python_writes`、`tests/pano_depth_grid.test.mjs`（形式の読み方。fixture `tests/fixtures/da3_depth_grid/`）、`tests/pano_space.test.mjs` |
| `MOGE_GEOMETRY` の透視投影の列を深度のグリッドにする条件と、MoGe の `K` を画素の番号の `K` に直す規則 | `scene_mesh.py` `moge_uses_depth_grid`・`moge_is_pinhole`・`moge_pixel_k`・`depth_grid_intrinsics`、`core_adapters.py` の `depth_map_to_point_map` の読み込み、`scene_files.py` `_moge_depth_files`、`nodes.py` `_check_moge_inputs`（GLB に戻した理由の警告）・`_depth_grid_meta`（DA3 と共有。`intrinsics` は `depth_grid_intrinsics`） | JS は DA3 のまま（`depthGridTooLarge` の文は DA3・MoGe に共通） | `tests/test_scene_editor_files.py` `test_moge_sequences_are_depth_grids_with_the_pixel_k`・`test_the_moge_depth_grid_fixture_is_what_python_writes`、`tests/test_scene_mesh.py` `test_moge_pixel_k_reconstructs_the_cores_points`・`test_moge_pinhole_check_uses_the_norm`、`tests/pano_depth_grid.test.mjs`（fixture `tests/fixtures/da3_depth_grid/case_moge.json`・`moge_depth_0.f32`） |
| 上流の Scene の重ね方と、上書きをどの層に当てるか（Source・`port`・長さの扱い） | `nodes.py` `_override_layers`・`_layer_frames` | 作業コピーは `web_src/pano_upstream.js` `upstreamWorkingLayers`・`upstreamLayerKeys` | `tests/test_studio_upstream.py`、`tests/test_studio_overrides.py`、`tests/test_upstream_editor_parity.py` |
| `port` の Sticker と Pose handoff | `nodes.py` `_port_media`・`_handoff_lanes`・`_inherit_handoff`・`_world_port_sticker`、3D の `port` の Sticker の初めの位置は `PORT_3D_FIT_FOV_DEG` と `core/world.py` `box_sphere`・`fit_3d_position`（式の owner は `docs/editor-interaction.md`） | 表示は `web_src/pano_port_handoff.js` `inheritPortHandoff` | `tests/test_pose_handoff.py`、`tests/pano_port_handoff.test.mjs`、`tests/test_studio_scene.py`、`tests/test_stickers_3d.py`（位置と警告の文）、`tests/test_studio_node.py`（警告の文）、`tests/test_place_3d_parity.py`（`PORT_3D_FIT_FOV_DEG` の値） |
| 3D の中身の箱 | `sticker_media.py` `content_box` | — | `tests/test_stickers_3d.py`、`tests/test_file_3d_route.py` |
| 3D ファイルの `file` の Source（読み方、描き方、読めないとき） | `nodes.py` `_resolve_sources`・`_read_file_3d`・`_file_3d_error`・`_read_scene_file`・`_render_frames`・`_override_layer`、`core/render.py` `SceneSources.contents`、`core/cache.py` `MemoryCache.get_or_put` | — | `tests/test_stickers_3d.py`、`tests/test_memory_cache.py`、`tests/test_device_memory.py` |
| 3D ファイルの `file` の Source のエディタ用ファイル（エディタの問い合わせ、経路の登録） | `routes.py` `FILE_3D_ROUTE`・`_file_3d_response`（応答の `box`）・`file_3d_editor_file`・`register_routes`、`__init__.py`、`nodes.py` `_scene_ui` | `web_src/pano_file_3d.js` `requestFile3dEditorFile`（`box` を受け取る） | `tests/test_file_3d_route.py`、`tests/pano_file_3d.test.mjs` |

Python のファイルは `comfyui_pano_suite/` の下にある。

## Scene の組み立てと撮影の入口

Panorama Studio の `execute` は次の三つの入口に分かれる。

| 入口 | 関数 | 役割 |
|---|---|---|
| (a) | `_decide_timeline` | Timeline fps、出力フレームごとの時刻（秒）とその丸めの幅（`time_base`）、出力フレームごとの描く `bg_media` のフレームと、層ごとの評価する Timeline frame・`sticker` の素材のフレーム・`scene` の要素（`_layer_frames`） |
| (b) | `_render_frames` | フレームごとに層ごとの状態を評価し（層の数だけ `RenderLayer` を作る）、(a) が選んだ `sticker` の素材のフレームを `port` の Sticker の Source に、`scene` の要素を `scene_index` にして、`render_frame` を呼ぶ。Camera と Sticker の Keyframe はここでフレームごとに評価される。描く Camera と Projection は、評価した状態から呼び出し側の `capture` が決める（下記「Panorama Studio」の撮り方）。各フレームの `color`・`mask` を device のまま 1 枚ずつ返すジェネレーターで、`first_frame` と `video` の読み出しが同じ経路を使う |
| (c) | `_render_outputs` と `execute` の末尾 | 出力（`first_frame`・`first_frame_mask`・`video`・`PANO_SCENE`）を組み立てる（ADR 0027）。`execute` で描くのは最初の出力フレームだけ |

- Camera が無いとき（隠したときを含む）の ERP の出力は、World の原点から回転 0 で撮った `coverage` の範囲（`nodes.py` の `ORIGIN_CAMERA`）。背景 ERP と `sky` の Sticker・ペイントは保存した向きのまま出し、`world` の Sticker と `scene` は原点から見た位置に描く。

- Timeline fps は、背景 VIDEO の平均フレームレート（コアの `get_frame_rate()` と同じ `average_rate`、丸めない）、なければ `sticker` の VIDEO の平均フレームレート、どちらもなければ状態の `timeline.fps` とする。Timeline fps を決める VIDEO は `_timing_video` が選び、`_timeline_rate` がその fps を分数にする（分母 100 万以下。30000/1001 などは元の分数のまま）。`video` の `get_frame_rate()` はこの分数である。
- 出力の長さは「状態の `timeline.length` → 背景 VIDEO のフレーム数 → 背景の IMAGE バッチ（2 枚以上）の枚数 → Sticker と `scene` の Clip range の終わりのうち最も遅いもの（非表示の Sticker と、未接続の `scene` の Clip range も含む。背景の 1 枚の IMAGE の Clip range が `duration` を持てば、その終わりもここに入る。`duration` が `null` で、`sticker` が IMAGE バッチか VIDEO の `port` の Sticker は、素材の終わり `start − in + 素材の長さ` を終わりとする。`duration` が `null` で、glTF のアニメーションを持つ 3D の Sticker（`file` の 3D ファイルの Source と `port` の 3D ファイル）と `scene` は、VIDEO と同じく clip の 1 周を素材の長さとし、`start − in + ⌈clip の長さ ÷ speed × timeline.fps⌉` を終わりとする（オーナーの決定、2026-10-11。作る。clip の長さが 0 なら数えない））→ Camera の各 Lane の最後の Keyframe のうち最も遅いものの次のフレーム → 1」の順で決める。Camera の段は、状態に Camera があるときだけ使う（隠した Camera も数える）。状態から決める長さは `timeline.fps` の Timeline frame なので、秒を保って Timeline fps のフレーム数に直す（`floor(x × Timeline fps ÷ timeline.fps + 0.5)`、1 以上）。
  - 背景 VIDEO と IMAGE バッチの段は、背景の Clip range（`background.clip`）によらず、素材そのもののフレーム数（VIDEO のフレーム数、IMAGE バッチの枚数）である。Clip range を動かしても切り詰めても長さは変わらず、Clip range の外と素材の外は `bg_color` になる（下記「背景の Clip range」）。例えば 100 フレームの VIDEO の Clip range を `start` 24 にすると、出力は 100 フレームのまま、最初の 24 フレームは `bg_color`、続いて VIDEO の 0〜75 フレームで、VIDEO の最後の 24 フレームは出力の外になる。
  - Timeline fps の規則とは独立である：背景 VIDEO は Clip range がどうであれ Timeline fps と出力フレームの時刻（PTS）を決め、出力フレームの数はその PTS の数になる（ずらした素材は、出力フレームの時刻から Clip range で選び直すだけ）。IMAGE バッチは fps を決めず、枚数をそのまま Timeline fps の出力フレーム数とする。
  - glTF のアニメーションの例：5 秒の clip のほかに時間を持つものが無ければ、Timeline は 5 秒になる。もっと長い VIDEO があれば長い方が勝ち、clip は繰り返す。`timeline.length` があればそれが勝つ。
  - エディタのタイムラインとノード上の UI の再生は、この長さをちょうど表す。`timeline.length` が無いときは、同じ規則を `web_src/pano_timeline.js` の `autoTimelineLength` が編集のたびに状態と実行結果の入力の長さから求める（`docs/timeline-ui.md` の「タイムラインの長さ」。規則を変えるときは両方を変え、`tests/test_timeline_length_parity.py` の表を足す）。
- 各出力フレームは、次の時刻 `t` 秒について `t × timeline.fps` の Timeline frame で評価する（`docs/scene-state-v2.md`）。時刻は `_output_times` が分数で決め、(a) の評価と `video` の保存の PTS が同じ値を使う。
  - Timeline fps を決めた VIDEO（背景 VIDEO、なければ `sticker` の VIDEO）のフレーム：そのフレームの PTS。切り出し範囲の最初のフレームを 0 秒とする。可変フレームレートや、1ms の timebase で丸められた PTS（mkv・webm の 29.97 fps など）でもフレームごとの PTS を使う。`video` を保存すると各フレームはこの時刻に置かれる（下記「`video` 出力」）。評価する Timeline frame が、最も近い整数との差がその VIDEO の PTS の量子化の幅の半分（`time_base ÷ 2 × timeline.fps`）以内なら、その整数に寄せる。Clip range の端や `hold` の Cut が、丸められた PTS で 1 フレーム遅れないようにするためである。`MaterializedVideo` の時刻は厳密なので、幅は 0 とする。
  - その VIDEO が終わった後：最後のフレームの時刻から Timeline fps の間隔で進める。背景 VIDEO なら、背景は描かず `bg_color` になる。
  - それ以外：出力フレームの番号 ÷ Timeline fps。
- `first_frame`（IMAGE、(1, H, W, 3)）と `first_frame_mask`（MASK、(1, H, W)）は、Timeline の最初の出力フレームの色とマスクである。全フレームのマスクは出力しない（ADR 0027）。
- 背景の IMAGE バッチは出力フレームと 1 対 1 に対応し、バッチより長い出力では、背景が終わった後は `bg_color` になる。1 枚の IMAGE はすべてのフレームに描く。どちらも既定の Clip range のときで、Clip range があるときは下記「背景の Clip range」。
- 背景の Clip range（`background.clip`、`docs/scene-state-v2.md`）：自分の `bg_media` を、`port` の Sticker の素材と同じ規則で Timeline に置く。
  - 既定の Clip range（`start` 0・`in` 0・`duration` `null`）では、上と下の規則（`_bg_frames` の 1 対 1 など。音声も同じ）に従う。`background` を持たない状態とワークフローも、これと同じ出力になる。
  - それ以外では、`_bg_place` が背景を `PortMedia` で置き、`_bg_frames` が出力フレームごとに、背景を持つ状態の Timeline frame（`t × その状態の timeline.fps`、`_timeline_frame`）で素材のフレームを選ぶ。素材の先頭は `start − in` にある。VIDEO は PTS ≤ その時刻の最後のフレーム、IMAGE バッチは最も近い 1 枚（`batch_index`）、1 枚の IMAGE は Clip range の間ずっと同じ画像。Clip range の外（`clip_active` が偽）と素材の外では描かず `bg_color` になる（VIDEO が終わった後と同じ）。
  - 出力フレームの時刻は、Clip range があっても背景 VIDEO の PTS に従う（Timeline fps と時刻を決める VIDEO は変わらない。`sticker` の VIDEO が時刻を決めるときに Clip range がずれていても PTS に従うのと同じ）。可変フレームレートの VIDEO をずらすと、出力フレームと素材のフレームは 1 対 1 にならない。
  - 音声（`_bg_audio`）：映像と同じく置く。Clip range の間だけ、その時刻の素材の音声を鳴らし、Clip range の前後と素材の外は無音（0）にする。全体の長さは「出力のフレーム数 ÷ Timeline fps」秒。Clip range が出力の中に無いときは音声なし（`None`）。
  - 上流の Scene の背景：その背景を持つ Studio の Clip range で置く（`PanoSceneValue.bg_clip`。下流の Studio の `background.clip` は当てない）。下流でも上流の出力と同じフレームになる。

- `bg_media` と `sticker` の VIDEO の読み方（`core/video_source.py`）
  - `VideoFromFile` で、`get_dimensions()` がストリームの大きさと一致するもの（クロップがない）は、`get_stream_source()` を PyAV で開き、`get_active_trim_window()` の範囲を 1 フレームずつ読む（`StreamedVideo`）。先にパケットだけを読んで PTS を集め、フレーム数と時刻を決める（`scan_video`。最初に復号できたフレームも求める）。その結果（`VideoIndex`：PTS の表（int64 の配列で、キャッシュのバイト数に数える。秒の時刻は `times()` で作る）・最初のフレーム）は、ファイル（パス・更新時刻・大きさ、メモリ上のファイルはオブジェクト）とトリム範囲をキーに共有のキャッシュ（`video_index`）に入れ、1 回の実行の中の何度もの `open_video`（Timeline、`PortMedia`、描画のパスごと、エディタの MP4）でも、次の実行でも走査し直さない。ストリームの大きさ（クロップの判定に使う）も同じく `video_size` に入れる。`StreamedVideo` は `VideoIndex` を参照し、復号器だけを持つ（最初にフレームを求められたときに復号を始める）。入力側のメモリは長さに比例しない（`tests/test_stickers_scene_video.py` で計測する）。
  - 復号したフレームは、パケットで集めた PTS と突き合わせる。シークの後に参照を失った B フレームなど、復号されなかった PTS のフレームは、ログに警告を出して `bg_color` にする。ほかのフレームの時刻はずらさない。パケットにない PTS のフレームは捨てる。1 枚も復号できないときは `ValueError` にする。出力の大きさ（`auto`）は、最初に復号できたフレームで決める。
  - 復号のエラー（`InvalidDataError`）は、コアのように読み飛ばさず、そのままエラーにする。
  - 画素の変換（8 ビットの形式は `rgb24`、それ以外は `gbrpf32le`、幅が 32 の倍数でないときの端の引き伸ばし）と回転のメタデータの扱いは、コアの `get_components()` と同じにし、同じ値になることをテストで確かめる。
  - それ以外の VIDEO（クロップ付き、`VideoFromComponents`、`VideoFromList` など）は `get_components()` で一括で読む（`MaterializedVideo`）。
- `video` の音声は（既定の Clip range では）背景 VIDEO の音声を、切り出し範囲の始まりから「出力のフレーム数 ÷ Timeline fps」秒で切ったもの（サンプル数は `int` で切り捨て）。音声はコアと同じく切り出し範囲の始まりから始まり、最初のフレームの PTS からではない。形はコアの AUDIO と同じ `{"waveform": (1, C, T), "sample_rate"}`。背景に VIDEO や音声がないときは `None`（音声なし）とする。音声は `execute` で一度だけ読み、`video` が持つ。
- `sticker` の素材の時間（`port` の Sticker）は `sticker_media.py` の `PortMedia` が持ち、(a) と (b) が共有する。
  - Sticker の素材の時刻は、評価関数の `clip_frame`（`frame − (start − in)`）÷ `timeline.fps` 秒とする。素材の先頭は Timeline 上の `start − in` に来る。
  - 1 枚の IMAGE は、Clip range の間ずっと同じ画像を描く。
  - IMAGE バッチは PTS を持たない、Timeline fps のフレームの列とみなす。最も近い画像（`floor(clip_frame × Timeline fps ÷ timeline.fps + 0.5)` 枚目）を描き、`0` 以上枚数未満の外では描かない。既定の Clip range では出力フレームと 1 対 1 に対応する。PTS が丸められた背景 VIDEO でも、一定のフレームレート（CFR）ならずれない。可変フレームレートの背景では 1 対 1 にならない。
  - VIDEO は、切り出し範囲の最初のフレームを 0 秒とした各フレームの PTS を使い、実時間で再生する（fps を合わせ直さない）。素材の時刻以前に始まる最後のフレーム（PTS ≤ t）を描く。比較の許容差は、`FRAME_EPSILON`、その VIDEO の PTS の量子化の幅の半分、出力の時刻を決めた VIDEO の幅の半分のうち最も大きいものとし、Timeline frame で使う（`clip_frame + 許容差` 以下の PTS）。最後のフレームは平均フレームレートの 1 フレームの間続き、その後は描かない（Clip range の外では保持しない）。
  - Clip range の外（`active` が偽）では描かず、素材も読まない。VIDEO はフレームを順に 1 枚ずつ読み、入力側のメモリは長さに比例しない。復号できなかったフレームは、ログに警告を出して描かない。
  - `PortMedia` は VIDEO を開いたものではなく VIDEO の入力そのものを持ち、Timeline を一通り描くたびに開き直す（`StreamedVideo` は前へ一度だけ読むもので、後戻りの要求は `ValueError` にする）。
  - 同じ `BytesIO` の VIDEO を `bg_media` と `sticker` の両方につないでもよい。`core/video_source.py` は container ごとに同じバイト列の別の読み手を作る（中身は写さない）。
  - 素材のフレームは `StickerSource.frame` で Sky のキーに入るので、Sky は素材のフレームが変わったときだけ作り直す。
  - `file` の Source（エディタで投入した素材）は時間を持たない。画像は 1 枚の画像として、3D ファイルは 1 つの要素として、Clip range の間ずっと同じものを描く（下の「3D ファイルの `file` の Source」）。
- `scene` の入力は、3D ファイルを `_read_scene_file` で SPLAT か MESH に読んでから、`_scene_content` で `SceneContent` にする。SPLAT は上記「SPLAT」、MESH と `MOGE_GEOMETRY`・`DA3_GEOMETRY` は`docs/render-contract.md` の「MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`」。辞書の入力は、`points` を持つものを `MOGE_GEOMETRY`、`mode` を持つものを `DA3_GEOMETRY` として読む。`DA3_GEOMETRY` の mono の画角と座標は `docs/render-contract.md` の「mono の画角と座標」、multiview は同じ節の「multiview」（全視点で 1 つの静止した要素）。どちらの読み手も読まない 3D ファイルは`docs/render-contract.md` の「読めない 3D ファイル」のエラーにする。
- `sticker` の MESH・SPLAT・3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`：3D ファイルは `scene` と同じ `_read_scene_file` で SPLAT か MESH に読み（同じ `splat_files`・`mesh_files` のキャッシュ）、どちらも読まないファイルは `scene` と同じエラーにする。読んだ SPLAT・MESH と、`MOGE_GEOMETRY`・`DA3_GEOMETRY` の辞書は `PortMedia` の `media` になる（`is_3d`。`sticker_media.py` の `is_3d_media` で見分ける。`tests/test_stickers_3d.py` の `test_dicts_on_the_sticker_input_are_3d_stickers`）。二つの辞書は `scene` と `sticker` のどちらでも同じ規則で扱い、`scene` と同じ見分け方（`points` か `mode`）で読む。要素の数は `MOGE_GEOMETRY` が `points`、`DA3_GEOMETRY` が mono なら `depth` の 1 つ目の次元、multiview なら 1 つで、要素は `scene` と同じくフレームごとのメッシュとして描く（`docs/render-contract.md` の「MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`」）。
  - `port` の Sticker が状態になければ、`world` の Sticker として加える（`sky` にはしない）。回転 0、スケール 1、不透明度・Clip range は既定値。位置は、中身の全体が ERP の正面に収まるように、`docs/editor-interaction.md` の「3D の Sticker を収めて置く」の式で決める（`nodes.py` の `_world_port_sticker`）。視点は World の原点、向きは `[0, 0, -1]`（`-Z`。回転 0 の Camera の前方で、Camera が無いときの ERP の中央の向き）、画角はその節の「ノードの画角」（`PORT_3D_FIT_FOV_DEG`）、距離の下限は `FIT_3D_MIN_DISTANCE`（0.1。ノードには near 面が無いので固定）、回転 `R` は 0 なので、位置は `[−c_x, −c_y, −d − c_z]` になる。中身の球は、描くまえに `sticker` の素材の箱（下の「中身の箱」の `content_box`）から求める。要素が 2 つ以上でも Clip range の間に動かさない一つの位置にする。箱が `None`（中身が空）なら、その節の「中身が無いとき」の位置（原点から `-Z` に `NEW_WORLD_STICKER_DISTANCE`、2）にする。状態の Camera の Lane には依らない。中身の位置は合わせ直さない（中身の原点がその位置に来る）。Pose handoff（`sticker_state`）は 2D の素材の Sticker だけのもので、3D の Sticker を加えるときに `sticker_state` があれば使わずに警告（`sticker_state places only 2D Stickers; the 3D Sticker is placed in front of the origin to fit the view.`）を出す。この規則は Sticker を加えるときの初めの値だけを決め、状態にある `world` の `port` の Sticker の位置は、素材が変わっても動かさない。
  - 中身の箱（`sticker_media.py` の `content_box`）：3D の中身の、`scene` の glTF の座標での軸に沿った箱 `{min, max}`（中身が空なら `None`）。全要素の、描くときと同じ点から作る：MESH は `core_adapters.py` が読むコアの `get_mesh_batch_item` の頂点、SPLAT は `core_adapters.py` が読むコアの `_gaussian_item` の中心を `splat_render.py` の `_GLTF_TO_SPLAT` で glTF の座標に回したもの、`MOGE_GEOMETRY` は全フレームの `moge_keep` の画素の `points` を glTF にしたもの（`scene_mesh.py` の `moge_points`）で、`moge_grid_mesh` の頂点と同じ点になる（`mask` の外の画素の点は入れない）。メッシュにはしない。バッチの詰め物の点は入れない。有限の数でない座標を持つ点も入れない。そのような点は描かれず、経路の応答の `box`（JSON）にも書けないためである。`DA3_GEOMETRY` の multiview は全視点の、描くのと同じ MESH（`scene_mesh.py` の `da3_meshes`）の頂点。mono は変換を呼ばず、空でない全要素の `keep` の画素の点（コアの `_da3_unproject` を glTF にしたもの。`docs/render-contract.md` の「mono の残す画素」）（`scene_mesh.py` の `da3_points`）で、変換した MESH の頂点と同じ点になる（`tests/test_scene_mesh.py` の `test_the_content_box_of_mono_is_the_keep_points_without_converting`）。箱を求めるのはこの関数だけで、ノードの 3D の `port` の Sticker と、下の経路の応答の `box` が使う。
  - 状態の `port` の Sticker が `sky` のとき（2D の素材の後に 3D をつないだ、型の分からない接続でエディタが `sky` で加えた、など）は、同じ `id` の `world` の Sticker に置き換えて描く（上と同じ変形で、位置も上の「3D の Sticker を収めて置く」の同じ規則で決める（`nodes.py` の `_port_media` の置き換えの経路も `_world_port_sticker` を呼ぶ）。`clip`・`visible`・`locked` は保ち、`sky` の Lane と Keyframe は捨てる）。実行結果の `pano_sticker_input_pose` に `replace: true` を付け、エディタとノード上の UI が状態を同じように置き換える。置き換えた状態で実行し直すと、ノードはもう状態を変えず、姿勢も出さない。
  - 逆向き（状態の `port` の Sticker が `world` のまま 2D の素材をつないだ）は、`sticker_state` がなければ置き換えない。2D の素材の `world` の Sticker（板）は正しい状態で、`port` から `world` の画像・動画の Sticker を作る唯一の経路である。`sticker_state` があれば、配置は下の Pose handoff に従う。
  - 要素の数は IMAGE バッチと同じ扱い（`batch_index`）。2 つ以上の要素は出力フレームと 1 対 1 に対応し、`duration` が `null` なら最後の要素で Clip range が終わる。1 つなら Clip range の間ずっと描く。
  - `SceneSources` には 3D の `port` の Sticker の Source を入れない（テンプレートを持たない）。(b) の `_render_frames` がパスごとに `port.frames()`（`sticker_media.py` の `content_of` で作った `SceneContent`）を作り、`_port_source_at` がフレームごとの `ContentSource` にする。device に置いたものはそのパスの間だけ持つ（`tests/test_stickers_3d.py`）。
- Pose handoff（`sticker_state`、ADR 0030）：2D の素材が接続され、`sticker_state` が読めるときは、`_port_media` が実行のたびに `_handoff_lanes` で配置と Lane を求め、状態に `port` の Sticker があっても当てる（`_inherit_handoff`）。規則は下記の「`sticker_state` で届く `port` の Sticker」。
  - 配置：上流の Camera の位置が、評価したフレーム（Camera の Keyframe の範囲の Timeline frame の整数）のどれかで原点から離れれば（`|position| > 1e-9`）`world`、そうでなければ `sky`。`world` は Camera の前方 2 に、Camera の回転で、幅 `2 · 2 · tan(hFOV ÷ 2)`（κ ≠ 1 では下の「レンズの曲線」）で置き、フレームごとの `position`・`rotation`・`scale` を `auto` の Keyframe（Camera の `hold` の区間は `hold`）に焼く。上流の Camera の位置と向きで撮れば、撮った絵と一致する（`tests/test_pose_handoff.py`）。
  - 保存した `port` の Sticker の `handoff_overrides` にある Lane は保存した値のまま、ほかの Lane は引き継ぐ。配置が違えば同じ `id` の Sticker に置き換える（`clip`・`visible`・`locked`・`crop`・`opacity` と、新しい配置の Lane の `handoff_overrides` を保つ）。
  - 引き継いだ値は実行の中だけのもので、ノードは `state_json` を書き換えない。`sticker_state` がないとき、3D の素材のときは上記のとおり。
- `video` を読む側（`get_components`・`save_to`）は、`render_frame` が直前と同じテンソルを返したフレームを、device から再び転送せず、直前のフレームから写す。
- `is_output_node` は `True`。ComfyUI は `ui` を出力ノードでなくても `executed` で送るが、出力ノードでなければ下流に出力ノードがつながっていないと実行されず、エディタとノード上の UI が素材を受け取れない。出力ノードにすると、キューに入れるたびに実行され（変わっていなければキャッシュの `ui` が送られる）、素材の表示が下流の接続に左右されない。
- 実行結果の `ui` は、エディタとノード上の UI に入力の素材を見せるためのもので、キーは旧ノードと同じ。

  | キー | 内容 |
  |---|---|
  | `pano_input_images` | `bg_media` の最初のフレーム |
  | `pano_input_videos` / `pano_input_video_meta` | `bg_media` が 2 フレーム以上のときの一時 MP4 とメタ情報（`fps`・`frames`・`duration`・`has_audio`） |
  | `pano_sticker_input_images` | `sticker` の最初のフレーム |
  | `pano_sticker_input_videos` / `pano_sticker_input_video_meta` | `sticker` が 2 フレーム以上のときのエディタの MP4 とメタ情報。1 フレームの VIDEO は MP4 を作らず、メタ情報だけを出す（`frames` は 1。エディタの Auto の長さが素材の終わりを数えるため）。メタ情報は背景と同じ `fps`・`frames`・`duration`・`has_audio` に、`kind`（`VIDEO` か `IMAGE`）を足す。VIDEO の `duration` は素材の終わり（最後の PTS ＋ 平均フレームレートの 1 フレーム、`PortMedia.end`）で、`pts_tolerance` は PTS の手前で同じフレームと見なす秒数（素材と、Timeline を決めた VIDEO の time base の半分の大きいほう）。IMAGE バッチは Timeline fps の等間隔で、`fps` は Timeline fps。エディタとノード上の UI は、これで `port` の Sticker を再生ヘッドに合わせて表示する（`docs/timeline-ui.md`） |
  | `pano_sticker_input_frames` | `sticker` が 4 チャンネル（RGBA）で 2 枚以上の IMAGE バッチのとき、MP4 の代わりに 1 枚ずつの PNG（アルファを保つ。MP4 はアルファを持てず、`video` 出力はアルファを使う）。長辺は `EDITOR_MAX_SIZE` 以下。メタ情報は `pano_sticker_input_video_meta`（`kind` は `IMAGE`）。バッチのテンソルの同一性をキーに `video` キャッシュで 1 度だけ書く。枚数ぶんの PNG が temp に書かれるので、長いバッチほど書き出しの時間と temp の容量がかかる |
  | `pano_sticker_input_pose` | 状態に `port` の Sticker がなく、ノードが加えたとき、または状態の `port` の Sticker を別の配置の Sticker に置き換えたとき（3D の素材で `sky` を `world` に、Pose handoff で配置が変わった）の姿勢。`sky` では `yaw_deg`・`pitch_deg`・`roll_deg`・`hFOV_deg` と、`direction`・`roll`・`size` の Lane の Keyframe（`keyframes`。Camera が動いた `sticker_state` の Pose handoff、下記の「`port` の Sticker と Pose handoff」）。`world` では `{"placement": "world", "position", "rotation", "scale"}`（各 Lane の値）で、2D の素材の Pose handoff では `position`・`rotation`・`scale` の `keyframes` も足す。置き換えたときは `"replace": true` を足す。同じ配置の `port` の Sticker が状態にあれば出さない（引き継いだ値は `pano_sticker_handoff`）。エディタとノード上の UI が同じ姿勢と Keyframe で状態に加えるために使う。`replace` を状態に当てるのは 3D の素材のときだけで、Pose handoff の置き換えは `pano_sticker_handoff` で表示するだけにする（ADR 0030） |
  | `pano_sticker_handoff` | 2D の素材と読める `sticker_state` があり、Pose handoff を求めた実行だけ出す。`[{"placement": "sky" か "world", "lanes": {Lane の名前: Lane}, "fps": 数値}]`（`sky` は `direction`・`roll`・`size`、`world` は `position`・`rotation`・`scale`。Lane は状態 v2 の Lane の形。`fps` は Keyframe の基準の、実行した状態の `timeline.fps`）。`handoff_overrides` に関わらず、引き継ぐ前の値。エディタとノード上の UI は、これを保存した `port` の Sticker に当てて実行と同じ姿で表示し、`state_json` は変えない（ADR 0030、下記の「`sticker_state` で届く `port` の Sticker」） |
  | `pano_timeline_fps` | VIDEO（`_timing_video` が選んだ `bg_media`、なければ `sticker` の VIDEO）が Timeline fps を決めたときだけ出す。その Timeline fps（float）。エディタは fps の欄のロックと、状態の再基準化（開いたとき・実行結果が届いたとき）に使う |
  | `pano_sticker_warnings` | 警告（読めない `file` の Source、`bg_media` なしの `auto`）。ログにも出す |
  | `pano_scene_files` / `pano_scene_meta` | `scene` の入力の要素ごとの一時ファイル（下の「`scene` のエディタ用ファイル」）と、`kind`（エディタが使う読み込み方。`splat` か `mesh`）と `unlit`（`mesh` と `depth_grid` のとき。光が効かない要素なら真。規則とエディタがこの値を読む理由は `docs/render-contract.md` の「光が効く要素」）。`DA3_GEOMETRY` mono は `kind` が `depth_grid` で、メタに大きさ・`K`・色のプロキシを足す（下の「`DA3_GEOMETRY` mono のエディタ用ファイル」） |
  | `pano_sticker_files` / `pano_sticker_meta` | `sticker` が 3D の素材のとき、`pano_scene_files` / `pano_scene_meta` と同じ形のエディタ用ファイル。このとき `pano_sticker_input_images` と MP4 は出さない。同じ SPLAT・MESH を `scene` と `sticker` につなぐと、同じファイルを使う |

  - 一時 MP4（ADR 0018）：エディタの MP4 で、Preview と同じく `nodes.py` の `_editor_mp4` が作る。エディタはシークのたびに直前のキーフレームから復号するので、MP4 はキーフレームの間隔を短くし、表示に足りる幅にする（下の「エディタの MP4」）。メタ情報の `fps` は VIDEO の平均フレームレート、`frames` は切り出し範囲のフレーム数。IMAGE バッチも同じ `encode_editor_mp4` で Timeline fps の等間隔にエンコードし、`fps` は Timeline fps とする。1 フレームの素材は MP4 を作らない。`sticker` の MP4 も同じ規則で作る（`_port_media_ui`）。音声は `bg_media` の VIDEO が持つものだけが使われる（`sticker` の VIDEO の音声が MP4 に入っても、エディタは音を出さない）。サムネイルの帯は作らない（エディタが MP4 から作る）。
  - エディタの MP4：
    - そのまま使う：コアの `save_to(MP4, H264)` が詰め直すだけのファイル（トリムなし、パスのある MP4）で、`core/video.py` の `editor_ready` が通るもの（H.264・yuv420p・長辺 `EDITOR_MAX_SIZE`（2048）以下・キーフレームの間隔が `EDITOR_KEYINT`（12）フレーム以下。パケットだけを読む）は、入力ディレクトリにある拡張子 `.mp4` のファイルなら写さずに `type: "input"` でそのまま見せ（ブラウザには拡張子で渡されるので、`.mov` などはここに入れない）、それ以外は `save_video_to_mp4` でストリームコピーする。Studio の `video`（`SceneVideo`）は、`get_stream_source()` の MP4 が `editor_ready` を通れば写さずにそのまま見せる。
    - プロキシ：それ以外（キーフレームの間隔が長い、長辺が大きい、H.264 4:2:0 でない、MP4 でない、トリムあり、メモリ上のファイル、クロップ付きなど `open_video` が `get_components()` に落ちるもの、`editor_ready` を通らない `SceneVideo` の stream source）は、`encode_editor_mp4` がエディタ用に 1 フレームずつエンコードする。ストリームで読む VIDEO はファイル（`SceneVideo` は stream source）を `StreamedVideo` で開き直し、`decoded_frames()` が復号した PyAV のフレームを float RGB にせず、YUV のまま縮小してエンコーダーに渡す（回転のあるフレームだけ RGB で正立させる。RGB 系とパレットの形式のフレームは RGB の扱いで、アルファは捨てる）。全フレームを RAM に置かない。`get_components()` に落ちた VIDEO と IMAGE バッチは RGB から変換する（IMAGE バッチのグレーは 3 チャンネルに広げ、アルファは捨てる。`render_frame` の背景と同じ）。H.264（libx264 `veryfast`・`crf 23`・`tune fastdecode`、フレームスレッド）、yuv420p、キーフレーム `EDITOR_KEYINT` フレームごと（IDR、閉じた GOP）、B フレームなし、長辺は `EDITOR_MAX_SIZE` 以下（縦横比を保ち偶数）、色：RGB から作るときは BT.709 の行列で変換し、sRGB（BT.709）のタグにする。ファイルの YUV は行列を変えずに縮小し、元の colorspace・primaries・transfer のタグを引き継ぐ。フルレンジ（yuvj など）は TV レンジに変換し、TV レンジのタグにする。各フレームは読んだ VIDEO の PTS をその time base のまま保つ（可変フレームレートも保つ）。音声は切り出し範囲のものを AAC で入れる。プロキシの作成に失敗するとノードの実行が失敗し、キャッシュには何も残らない（次の実行で作り直す）。
    - `SceneVideo` の stream source は SaveVideo の既定の出力でもあるので、エディタのために変えない（libx264 の既定のキーフレーム間隔 250 のまま）。プロキシは別のファイルである。ノードの出力（`first_frame`・`video`）と SaveVideo の出力はエディタの MP4 に左右されない。
  - 出力ノードは `state_json` が変わるたびに実行されるので、MP4（コピーもプロキシも）は入力ごとに 1 度だけ作り、共有のキャッシュの `video` から再利用する。プロキシの設定はモジュールの定数で、プロセスの中では変わらないので、キーには入れない。IMAGE バッチは旧 Cutout と同じくテンソルの同一性と fps、VIDEO は `open_video` がストリームのまま開いたもの（クロップのない `VideoFromFile`）ならファイルのパス・更新時刻・トリム範囲、それ以外は VIDEO オブジェクトの同一性をキーにする。キーのためにファイルを開き直さない。
  - キャッシュから追い出しても MP4 のファイルは消さない（追い出しは次に要るとき作り直すかを決めるだけ）。ファイルを消すのは temp の登録の仕組み（`docs/runtime-resources.md` の「一時ファイル」）だけで、合計が上限を超えたときに古いものから消す。
  - エディタの背景 VIDEO は、実行結果が新しい間だけ読み込む。Panorama Studio では動画の再生バーを出さず、エディタを開いたまま実行すると読み込み直して再生ヘッドのフレームを出し、タイムラインの ▶ と再生位置の移動も読み込みと再生を行う（`docs/timeline-ui.md`）。背景の入力をつなぎ変えると、次の実行まで VIDEO を外す。
  - 実行結果がどの入力から作られたかは、実行が終わったときに `/api/jobs/{prompt_id}` を一度読んで、そのワークフローの接続から記録する。ブラウザを再読み込みしたときは、同じワークフローの最近のジョブから自ノードの出力を表示用に取り戻す（状態は書き換えない）。サーバーを再起動して履歴と temp が消えた後は、実行し直す。
  - `sticker` の MP4 は、`sticker` の入力（`external-sticker`）の実行結果が新しい間だけ使う。`sticker` の VIDEO は MP4 を作るときだけ開き直し（キャッシュが効けば開かない）、`PortMedia` は開いた VIDEO を持たない。
  - エディタとノード上の UI は、実行結果が新しいかを入力の接続（link）の変化だけで判断する。接続を変えずに上流の画像を差し替えると、再実行するまで古い素材が表示される。
  - `sticker_state` が接続されているときは、`port` の Sticker は実行結果に姿勢が届くまで、枠も含めて表示されない。
  - `scene` のエディタ用ファイル：`scene_files.py` の `write_editor_files` が、コアの書き出し関数で要素ごとに 1 つずつ temp に書く。ラスタライザには依存しない。座標は要素自身の glTF 座標（`scene` の変形を掛ける前の World、ADR 0023）で、エディタが状態の `scene` の変形を掛ける。
    - SPLAT：PLY（コアの `SplatToFile3D` の `ply` と同じ書き出し。SH もすべて持つ）。座標は SPLAT のまま（3DGS の座標。`docs/render-contract.md` の「SPLAT の描き方」）で、glTF ではない。エディタは、この PLY をコアの Load3D と同じく X 軸まわりに 180° 回して（`quaternion.set(1, 0, 0, 0)`）から状態の `scene` の変形を掛ける。`counts` があれば要素ごとの長さで切る。
    - スプラット系の 3D ファイル：`execute` の入口（`_read_scene_file`）で SPLAT に読んでから扱うので、上の SPLAT と同じ PLY になる。
    - MESH：GLB（コアの `mesh_item_to_glb_bytes`。SaveGLB と同じ書き出しで、uv・テクスチャ・頂点色・法線などもすべて書く）。座標はそのまま。間引かない（エディタ用のファイルでも、要素の解像度は下げない）。
    - `MOGE_GEOMETRY` の透視投影の列：下の「`MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル」の条件を満たす入力は、GLB を作らず、`DA3_GEOMETRY` mono と同じ深度のファイルと色のプロキシにする。条件を満たさない入力（パノラマ、1 フレーム、ピンホールでない点）は、次の GLB のまま。
    - `MOGE_GEOMETRY`（上の条件を満たさないもの）：フレームごとのグリッドのメッシュの GLB（`moge_grid_mesh`）。読むのは `points`、あれば `mask`（外の画素を捨てる）、`intrinsics` の有無、テクスチャの `image` だけ。glTF への変換はコアの MoGePointMapToMesh と同じ（`intrinsics` がなければパノラマとして Z 上から、あれば OpenCV から）で、パノラマの各画素は回転 0 の Camera の ERP の同じ画素の向きに来る（`tests/test_scene_editor_files.py`）。コアの MoGePointMapToMesh（decimation 1）と同じく全画素を頂点にし、テクスチャも `image` をそのまま使う（間引かない）。同じ点群から MoGePointMapToMesh（decimation 1、段差の判定 0.04、`texture` あり）で作った MESH をつないだときと同じ GLB になる（`mask` がなく、パノラマでは `depth` が点の距離のとき。`tests/test_scene_editor_files.py`）。
      - 面の向き（ワインディング）もコアと同じ。パノラマの面は外向き（原点の Camera からは裏面）なので、エディタは両面（`DoubleSide`）で描く。
      - `mask` の外の画素を捨てるのはコアの MoGePointMapToMesh と異なる（コアは `mask` を読まない）。バックエンドの描画も同じく `mask` の外を描かず、エディタと揃える。
    - `DA3_GEOMETRY` mono：GLB を作らず、フレームごとの深度のファイル（`keep` の外は 0）と、全フレームの色のプロキシの MP4 にする（下の「`DA3_GEOMETRY` mono のエディタ用ファイル」）。コアの変換を呼ばない。
    - `DA3_GEOMETRY` multiview：視点ごとに、コアの `DA3GeometryToMesh` でその視点を変換した 1 要素の MESH（`docs/render-contract.md` の「`DA3_GEOMETRY` のメッシュ」）を、MESH と同じ `mesh_item_to_glb_bytes` で GLB にし、視点ごとの GLB のパスのリストを 1 つの要素の値にする（`docs/render-contract.md` の「multiview」）。描画と同じ MESH なので、描くものとエディタが見るものが同じになる。間引かない。`pano_scene_meta` の `unlit` を真にする（`docs/render-contract.md` の「光が効く要素」）。すべての視点が空なら `[null]`。
    - `pano_scene_files` は要素の順のリストで、要素の数が出力フレームとの対応（`batch_index`）に使う数である。頂点や面のない要素は `null` にし、番号をずらさない。 値は要素のファイルのパスで、`DA3_GEOMETRY` の multiview は視点ごとのパスのリスト、mono と `MOGE_GEOMETRY` の透視投影の列は深度のファイルのパスになる。
    - `state_json` だけが変わった実行では作り直さない。共有のキャッシュの `scene_files` に入れ、SPLAT・MESH はオブジェクトと位置のテンソルの同一性、`MOGE_GEOMETRY`・`DA3_GEOMETRY`（辞書）は入力の辞書の読むテンソル（`DA3_GEOMETRY` は `depth`・`image`、あれば `sky`・`confidence`・`intrinsics`・`extrinsics`）の同一性をキーにする。mono で仮の `K` を足した写しの `intrinsics` はキーに入れない。ファイルが消えていれば書き直す。
    - 大きさの目安：100 万点の SPLAT（SH 3 次）の PLY は約 248 MB。MoGe のパノラマ（4096 x 2048、約 840 万頂点・1,680 万三角形）の 1 フレームの GLB は約 390 MB（CPU で約 3 秒）で、MESH にしたものも同じ。`DA3_GEOMETRY` mono の 1080p の 1 フレームは、深度のファイルで約 8.3 MB（GLB なら約 45〜50 MB で、作るのに約 0.27 秒、うち PNG が約 0.17 秒。実測）。エディタは読み込んだ要素を大きさの上限で持つ（`docs/threejs-spark-integration.md` の「空間の表示」の `scene` の項）。キャッシュから追い出しても MP4 と同じくファイルは消さず、temp の登録の仕組み（`docs/runtime-resources.md` の「一時ファイル」）が上限を超えた分を古いものから消す。
    - 3D ファイルは、入口（`_read_scene_file`）で読んだ SPLAT・MESH として PLY・GLB に書き直す（描くものとエディタが見るものが同じになる）。読んだものはファイルごとに `splat_files`・`mesh_files` のキャッシュに入るので、同じファイルなら同じオブジェクトになり、ここでも書き直さない。3D の Sticker も同じ `write_editor_files` と `scene_files` のキャッシュで書き、`pano_sticker_files` / `pano_sticker_meta` に出す。座標は中身自身の glTF 座標（SPLAT は上と同じく 3DGS の座標）で、エディタが状態の Sticker の変形を掛ける。
- `DA3_GEOMETRY` mono と `MOGE_GEOMETRY` の透視投影の列の色のプロキシの MP4 は、IMAGE バッチと同じ規則（上の「一時 MP4」、`_batch_mp4_ui` と同じ作り）で `image` から Timeline fps の等間隔に作り、共有のキャッシュの `video` に `image` のテンソルの同一性と fps をキーにして入れる。深度のファイルは `scene_files` に入り、fps が変わっても書き直さない。
- 必要な ComfyUI は v0.35.0 以降（`mesh_item_to_glb_bytes` と、メッシュ系の 3D ファイルを読む Get3DComponents が入った版）。Get3DComponents はコアで experimental のノードなので、コアの更新で名前や戻り値が変わったら `scene_mesh.py` の `read_mesh_file` を合わせる。`splat_render.py` はコアの `comfy_extras.nodes_gaussian_splat` の非公開の関数と定数（`_C0`・`_gaussian_item`・`_quat_to_mat`・`_srgb_to_linear`・`_linear_to_srgb`・`_quantile`・`_detect_splat_format`）にも依存する。コアの内部のシンボル（`comfy_extras.*`・`comfy.ldm.*`）は `comfyui_pano_suite/core_adapters.py` だけが読み込む（ほかのモジュールはそこから読む。`tests/test_core_adapters.py` が確かめる）。`DA3_GEOMETRY` は `comfy_extras.nodes_depth_anything_3` の `DA3GeometryToMesh` と非公開の `_da3_default_K`・`_da3_get_K`・`_da3_build_mask`・`_da3_unproject`、`comfy.ldm.moge.geometry` の `depth_map_edge` に依存する（後の 3 つと `_da3_get_K` は mono の残す画素のため）。`MOGE_GEOMETRY` の透視投影の列は、さらに `comfy.ldm.moge.geometry` の `depth_map_to_point_map` に依存する（ピンホールの判定のため。`core_adapters.py` から読み込む）。一つでも読み込めないときは、3D の機能（SPLAT・MESH・3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`）だけを無効にし、その旨をログに警告として出す。ほかのノードは読み込まれ、3D の機能を使うと、足りないシンボルの名前を含む `RuntimeError` になる。コアの `pin_memory` の `evict_active`（v0.37.0 より後の master で入った）も同じモジュールで合わせ、無いコアでは `video` 出力の転送用バッファを固定しない（固定のために ComfyUI の RAM キャッシュを捨てないため）。
  - 出力（IMAGE）のプレビュー MP4 は作らない。Studio の出力を表示するのは Preview で、旧ノードの `pano_videos` を読むフロントエンドもない。
- 画像の `file` の Source は `core/stickers.py` の `load_source_rgba` で読み、`folder_paths` のディレクトリの中にあるものだけを読む。読めないときは、その Sticker を描かずに警告を出す（ログと実行結果の `pano_sticker_warnings`）。3D ファイルの `file` の Source（どちらかは `docs/scene-state-v2.md` の「3D ファイルの `file` の Source」）は下の節。

### `DA3_GEOMETRY` mono のエディタ用ファイル

`scene`（と 3D の `sticker`）につないだ `DA3_GEOMETRY` mono のエディタ用ファイルの形式。multiview は GLB のまま（上記）。`MOGE_GEOMETRY` の透視投影の列も同じ形式を使う（下の「`MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル」）。エディタでの描き方は `docs/threejs-spark-integration.md` の「`DA3_GEOMETRY` mono の深度のグリッド」、残す画素（keep）の規則は `docs/render-contract.md` の「mono の残す画素」が持つ。決めた理由は ADR 0039。

- 要素（フレーム）`i` ごとに 1 つの深度のファイルを temp に書き（`TEMP_FILES` に登録）、`pano_scene_files`（`pano_sticker_files`）の要素の値をその `ui` の項目にする。空の要素（`docs/render-contract.md` の「mono の残す画素」の空の要素。コアの変換が `DA3_EMPTY_MESH` を出す要素と同じ）は、ファイルを書かずに `null` にし、番号をずらさない。
  - 名前：`pano_scene_<name>_<i>.f32`。`<name>` は書き出しごとの 12 桁の 16 進（GLB と同じ）、`<i>` は要素の番号（0 から）。`ui` の項目の `format` は `application/octet-stream`（`SCENE_FILE_TYPES` に足す）。
  - 中身：ヘッダーなし。float32 のリトルエンディアン、`H × W` 個、行の順（行 0 が像の上、行の中は左から右。画素 `(x, y)` はバイト `4 × (y × W + x)`）。1080p で 8,294,400 バイト。
  - 値：`keep` の画素は入力の `depth[i]` を float32 にしたもの、`keep` の外の画素は 0（`where(keep, depth, 0)`）。NaN と inf は書かない。
  - keep は値で表す：値が 0 より大きい画素が `keep` の画素で、0 の画素は `keep` の外である。別のマスクのファイルは持たない。`keep` は `depth > 0` を含むので、`keep` の画素は必ず 0 より大きい。ただし float32 より細かい型の入力で、float32 にすると 0 に丸まる正の値（約 1.4 × 10⁻⁴⁵ 未満）は、`keep` の画素でもエディタが描かない（DA3 の `depth` は float32 なので起きない。test で、書いた値の `> 0` が `keep` と等しいことを確かめる）。
- `pano_scene_meta`（`pano_sticker_meta`）の 1 つの項目：
  - `kind`：`"depth_grid"`（エディタの読み方。`splat`・`mesh` と並ぶ）
  - `unlit`：`true`
  - `width`・`height`：`W`・`H`（`depth` の大きさ。整数）
  - `depth`：深度のファイルの形 `{"dtype": "float32", "byte_order": "little", "bytes": W × H × 4}`。ファイル自体はヘッダーを持たない生の `.f32` のままにし、形はメタで示す
  - `intrinsics`：要素ごとの `K`（3 × 3 を行の順に並べた 9 個の数のリスト）のリスト。要素の数と同じ長さで、空の要素の分も入れる。値はコアの `_da3_get_K` が変換で使うものと同じ（`intrinsics` のある入力はその値、ない入力は `_with_default_k` の写しの値＝コアの `_da3_default_K`。`docs/render-contract.md` の「mono の画角と座標」）
  - `video`：色のプロキシの MP4 の `ui` の項目。`video_fps`：その MP4 の fps（Timeline fps）。`frames`：要素の数。プロキシの要素 `i` の画像は時刻 `i ÷ video_fps` にある。
- 色のプロキシ：`image` を `encode_editor_mp4` で MP4 にしたもの（上の「エディタの MP4」のプロキシの規則のまま。H.264 crf 23、4:2:0、長辺 `EDITOR_MAX_SIZE` 以下）。表示だけに使い、ノードの出力はプロキシに左右されない（出力は `image` をテクスチャにする）。プロキシとノードの出力の差は `docs/threejs-spark-integration.md` の「ノードの出力との差」。
- 書き出しの手間：1080p の 1 フレームで、keep の部品（`_da3_build_mask` と `depth_map_edge`）が約 0.03 秒（実測）と、約 8.3 MB の書き込み。60 フレームの書き出しは、GLB で 26.8 秒だった（実測）のが、数秒の見込み（未計測）。
- `pano_scene_meta` の `kind` が `depth_grid` の `ui` を、前の版のエディタは読めない（`kind` を知らないので `scene` を描かない）。状態とポートは変えない。

#### 境界をまたぐ設計（AGENTS の原則 4）

この形式は Python（書き出し）と JS（読み手と描画）、エディタ用ファイルとノードの出力をまたぐ。エディタ用ファイルの形式の変更で、AGENTS.md の stop condition（parameter formats の変更）に当たる。状態（state v2）・ノードの id・ポートの意味は変えない。

- 作らないもの：multiview の新しい形式（GLB のまま）。`MOGE_GEOMETRY`（ADR 0040 で別に扱う）。float16 の深度（劣化になるので次の候補。使う人の承認が要る）。深度の間引き・縮小（しない）。出力の描画の変更（コアの変換のまま）。
- owner：
  - keep の組み立て：`scene_mesh.py` `da3_keep`・`keep_is_empty`（`docs/render-contract.md` の「mono の残す画素」）。捨て方そのものはコアの部品。
  - 形式（ファイル・メタ、keep を値の `> 0` で表すこと）：この節。書くのは `scene_files.py` の `_da3_depth_files`、読むのは `web_src/pano_depth_grid.js` の `readDepthGrid`。
  - 深度から位置への計算：Python ではコアの `_da3_unproject`（中身の箱。`scene_mesh.py` の `da3_points`）。JS では深度のグリッドの頂点シェーダー（`pano_depth_grid.js` の `DEPTH_GRID_VERTEX`。`K⁻¹` は `inverseIntrinsics`。`docs/threejs-spark-integration.md`）。この式だけは JS に写しがあり、下の test と一致の場面で守る。
  - 色のプロキシ：`encode_editor_mp4`（既存）。再生ヘッドに合わせるのは `createVideoFollower`（既存）。
- data の流れ：`DA3_GEOMETRY` →（`_with_default_k`・`da3_keep`）→ `.f32`（`keep` の外は 0）・メタの `intrinsics`、`image` →（`encode_editor_mp4`）→ MP4 → 実行結果の `ui` → エディタ（`sceneFilesOf` → 要素のキュー → R32F のテクスチャ → 頂点シェーダー、MP4 → follower → 色のテクスチャ）。出力の描画は `DA3_GEOMETRY` →（`da3_meshes`、コアの変換）→ `mesh_content` のまま。中身の箱は `da3_keep` と `_da3_unproject` から作り、変換を呼ばない。
- 一致を守る test：`tests/test_scene_mesh.py` の `test_da3_keep_is_the_pixels_the_core_keeps`（`keep` がコアの変換の頂点と面と空の判定に一致する）、`tests/test_scene_editor_files.py` の `test_da3_mono_editor_files_are_depth_with_keep_as_positive`（名前・バイト数・エンディアン・値の `> 0` が `keep` と等しいこと・`null`・メタの値）、`tests/test_scene_mesh.py` の `test_each_da3_frame_is_converted_once_for_the_render_the_editor_files_and_the_box`（mono では `_scene_ui` と `content_box` の変換が 0 回で、描画が各フレームを 1 回変換する）、`tests/test_scene_editor_files.py` の `test_the_depth_grid_fixture_is_what_python_writes`、`tests/pano_depth_grid.test.mjs`（同じ形式を JS で読み、Python が書いた小さな fixture（`tests/fixtures/da3_depth_grid/`）で、値の `> 0`・`K⁻¹`・四角の消え方が Python の `keep` と同じになる）、`docs/render-contract.md` の「エディタとの一致（DA3 mono の場面）」（画像。milestone ごと）。
- 考えた別案と、選ばなかった理由（詳しくは ADR 0039）：
  - フレームごとの GLB のまま（今まで）：1080p × 314 フレームで約 252 秒の多くを GLB の書き出しが占め、temp は約 13 GB、エディタは約 5 fps。
  - GLB の書き出しだけを速くする：エディタは約 5 fps、temp は約 13 GB のまま。
  - 生のバイナリのメッシュ：1 フレーム約 50 MB のままで、約 10 fps。
  - GLB を先読みする：約 1.2 GB/s の読み込みが要り、できない。
  - 止めたときだけ正確に出す：実行の時間とディスクの量が直らない。
  - xyz の点のマップ：深度の 3 倍の帯域。
  - `MOGE_GEOMETRY` とまとめる：大きくなるので後にする（次の候補）。
  - JS の CPU でメッシュを組む：約 15〜20 fps。深度のグリッドが使えないときの予備の案として残す。
  - 間引き：使う人のデータを黙って劣化させるので、しない。
  - keep を、コアの変換を呼んでその頂点の uv から戻して作る：変換を 1 フレーム 1 回余分に呼ぶ。部品の組み立て（約 0.03 秒）で同じ画素になり、test で守れる（使う人の決定 A）。
  - float16 の深度：深度の劣化になる（次の候補）。

### `MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル

コアの Run MoGe Inference（`MoGeInference`）を IMAGE バッチ（動画のフレーム）に掛けた `MOGE_GEOMETRY` を、`DA3_GEOMETRY` mono と同じ深度のグリッドで運ぶ。形式・色のプロキシ・エディタでの描き方は上の「`DA3_GEOMETRY` mono のエディタ用ファイル」と `docs/threejs-spark-integration.md` の「`DA3_GEOMETRY` mono の深度のグリッド」のまま使い、ここには違いだけを書く。残す画素（keep）の規則は `docs/render-contract.md` の「MoGe の残す画素」。決めた理由は ADR 0040。

- 使う条件（`scene_mesh.py` の `moge_uses_depth_grid`）：次のすべてを満たす入力。判定は入力ごとに 1 回だけ行い、共有のキャッシュ（`core/cache.py` の `moge_depth_grid` の名前空間。キーは入力のテンソルの同一性）に持つので、1 回の実行の中で `_check_moge_inputs`・エディタ用ファイル・中身の箱が同じ結果を使い、判定し直さない。1 つでも満たさなければ、入力全体を今までの GLB（上の `MOGE_GEOMETRY`）にする。黙って形を変えないためで、遅くなるだけで見た目は変わらない。
  - `intrinsics` を持つ（透視投影。コアの `MoGeInference` は常に持ち、パノラマの `MoGePanoramaInference` は持たない）。
  - フレームが 2 つ以上。1 フレーム（静止画）は GLB のままにし、`image` を元の解像度の PNG のテクスチャで見せる。深度のグリッドの色は H.264 のプロキシ（長辺 `EDITOR_MAX_SIZE` 以下）から来るので、静止画では見た目が粗くなる（4K の写真では縮む）ためである。1 フレームなら GLB でも書き出しと読み込みは 1 回だけで、遅さの問題がない。パノラマはコアが 1 枚しか作らない（`MoGePanoramaInference` はバッチを断る）ので、いつも GLB になる。
  - ピンホールの点（`moge_is_pinhole`）：全フレームの keep の画素ごとに、点 `p` の z が有限で 0 より大きく、コアの `depth_map_to_point_map(points[..., 2], intrinsics)` の点 `p̂` と `‖p − p̂‖ ≤ 1 × 10⁻⁴ × ‖p‖`（`MOGE_PINHOLE_RTOL`。成分ごとではなくノルムで比べる。光軸の上の画素で x・y が 0 に近くても、相対の差が膨らまないため）。計算は両辺を 2 乗し、軸ごとの 2 乗の和で比べる（`‖p − p̂‖² ≤ (10⁻⁴)² × ‖p‖²`。同じノルムの条件で、CPU で 3 要素の軸のノルムを取るより速いため）。コアは `force_projection` が真（既定）なら点をこの関数で作り直すので一致し、偽なら推論した点のままで一致しない（`comfy/ldm/moge/model.py` の `infer`）。一致しない入力は、入力全体を GLB にする（遅くなるだけで描け、形は今と同じ）。エラーにはしない。
    - 1 つの `MoGeInference` の出力は、フレームの間で混ざらない（`force_projection` はノードの入力で、全フレームに同じく効く）。ピンホールのフレームとそうでないフレームが混ざるのは、別々の出力の辞書をつないだ入力だけで、そのときも入力全体を GLB にする。
- GLB に戻したときの警告（`nodes.py` の `_check_moge_inputs`）：DA3 の仮の `K` の警告（`_check_da3_inputs`、`docs/render-contract.md` の「mono の画角と座標」）と同じく、実行ごとに 1 回だけログに出す。理由を書く：`intrinsics` がない（パノラマ）、1 フレーム、ピンホールでない（最初に外れたフレームの番号と、そのフレームで外れた画素の数）。どれも描けるので実行は止めない。
- ファイル：`DA3_GEOMETRY` mono と同じ名前・中身・keep の表し方（値が 0 より大きい画素が keep）。値は keep の画素で点の z（`points[i][..., 2]`、`moge_grid_mesh` が段差の判定に使う値と同じ）、keep の外で 0。keep の画素の z は使う条件で 0 より大きい。
- メタ：`DA3_GEOMETRY` mono と同じ項目（`kind` は `"depth_grid"`、`unlit` は真）。違いは `intrinsics` だけで、MoGe の `K` は正規化した座標（`x` は 0〜1、画素の中心が `(x + 0.5) ÷ W`）なので、`moge_pixel_k` が画素の番号の `K` に直して書く（メタは DA3 と共有の `_depth_grid_meta`、値は `depth_grid_intrinsics`）：`[[W·fx, 0, W·cx − 0.5], [0, H·fy, H·cy − 0.5], [0, 0, 1]]`。これで `K⁻¹ · (x, y, 1)` がコアの `depth_map_to_point_map` の `K⁻¹ · ((x + 0.5) ÷ W, (y + 0.5) ÷ H, 1)` と同じ向きになり、エディタの頂点シェーダーと読み手（`pano_depth_grid.js`）は DA3 のまま使える。座標は OpenCV から glTF へ `(X, −Y, −Z)` で、`moge_grid_mesh` の透視投影と同じ。
- 空の要素：4 隅が keep の四角が 1 つもない要素は `null`（`moge_grid_mesh` の面が 0 の要素と同じ）。
- 色のプロキシ・先読み・大きさの上限・知らせ・当たり判定・向き：`DA3_GEOMETRY` mono のまま（上の節と `docs/threejs-spark-integration.md`）。
- 大きさ：DA3 mono と同じ（1080p で 1 フレーム約 8.3 MB。`docs/runtime-resources.md` の「一時ファイル」）。MoGe の点は入力の画像の大きさで出る（`points` は `(H, W)` に戻される）。
- 書き出しの手間：1080p × 60 フレームの実測で、使う条件の判定が 4.1 秒（うち keep が 2.8 秒）、深度のファイルの書き込みが 2.9 秒。
- 時間の一貫性：コアの MoGe はフレームごとに独立に推論し、焦点距離と z のずれ（`recover_focal_shift`）とメトリックの尺度もフレームごとに求める（`comfy/ldm/moge/model.py` の `infer`。`fov_x_degrees` を与えれば焦点距離だけは揃う）。そのため形と尺度がフレームの間でちらつくことがある。これは入力の性質で、Panorama Studio は均さない（均すのは使う人のデータを変えることになる）。メタの `intrinsics` はフレームごとの値をそのまま持つ。

#### 境界をまたぐ設計（AGENTS の原則 4）

エディタ用ファイルの形式の変更（`MOGE_GEOMETRY` の透視投影の列の `kind` が `mesh` から `depth_grid` になる）で、AGENTS.md の stop condition（parameter formats の変更）に当たる。状態・ノードの id・ポートの意味は変えない。JS は変えない（DA3 の深度のグリッドのまま）。

- 作らないもの：パノラマの深度のグリッド（ERP の向きの式を GLSL に写すことになる。コアは 1 枚しか作らない）。xyz の点のマップ。時間の平滑化。出力の描画の変更（`moge_grid_mesh` のまま）。
- owner：keep の組み立ては `scene_mesh.py` の `moge_keep`（`docs/render-contract.md` の「MoGe の残す画素」）、glTF への軸の変換は `moge_to_gltf`（`moge_points` と `moge_grid_mesh` が使う）、使う条件は `moge_uses_depth_grid`・`moge_is_pinhole`、MoGe の `K` を画素の番号の `K` に直す規則は `moge_pixel_k`、形式は上の「`DA3_GEOMETRY` mono のエディタ用ファイル」、書くのは `scene_files.py` の `_moge_depth_files`（`_da3_depth_files` と書き出しの部分 `_write_depth_files` を共有する）。空の要素の判定は DA3 と共有の `keep_is_empty`。
- 整理：`moge_grid_mesh` は `triangulate_grid_mesh` を `mask = moge_keep(...)`、`discontinuity_threshold = 0` で呼び、`moge_to_gltf` で glTF にする。keep の組み立てと軸の変換の owner が 1 つずつになる。
- data の流れ：`MOGE_GEOMETRY` →（`moge_uses_depth_grid`、`moge_keep`）→ `.f32`（keep の外は 0）・メタの `intrinsics`（`moge_pixel_k`）、`image` →（`encode_editor_mp4`）→ MP4 → エディタ（DA3 と同じ）。出力の描画は `moge_scene_content`（`moge_grid_mesh`）のまま。中身の箱は `moge_keep` の画素の `points` から作り、メッシュにしない。
- 一致を守る test：`tests/test_scene_mesh.py` の `test_moge_keep_is_the_pixels_the_grid_mesh_keeps`（`moge_keep` が `moge_grid_mesh` の頂点と面と空の判定に一致する）、`tests/test_scene_editor_files.py` の `test_moge_sequences_are_depth_grids_with_the_pixel_k`（形式、条件を満たさない入力（パノラマ、1 フレーム、`force_projection` が偽、keep に z ≤ 0、ピンホールとそうでないフレームをつないだ辞書）は GLB のままで、警告が 1 回）、`tests/test_scene_mesh.py` の `test_moge_pixel_k_reconstructs_the_cores_points`（シェーダーと同じ式 `z × K_pix⁻¹ · (x, y, 1)` で作り直した点を、コアの `depth_map_to_point_map` と数値で比べる。W・H が偶数と奇数、主点が 0.5 でない `K`）、`tests/test_scene_mesh.py` の `test_moge_pinhole_check_uses_the_norm`（光軸の上の画素、W・H が奇数、`force_projection` が偽の点）、`tests/test_scene_mesh.py` の `test_moge_content_box_is_the_kept_points`（`moge_grid_mesh` を呼ばずに今と同じ箱）、`tests/test_scene_editor_files.py` の `test_the_moge_depth_grid_fixture_is_what_python_writes` と `tests/pano_depth_grid.test.mjs`（`tests/fixtures/da3_depth_grid/` の `case_moge.json`・`moge_depth_0.f32` を Python が書き、JS で読む）、`docs/render-contract.md` の「エディタとの一致（DA3 mono の場面）」の MoGe の場面。
- 考えた別案（詳しくは ADR 0040）：xyz の点のマップ（RGB32F）、パノラマも深度のグリッドにする、1 フレームも深度のグリッドにする、ピンホールでない入力をエラーにする。

### 3D ファイルの `file` の Source

エディタの Add to World（`docs/editor-interaction.md` の「`world` の Sticker の操作」）で置いた 3D ファイルの Sticker を、`sticker` の 3D の素材と同じ読み手と同じ描き方で描く。

- 読み方（`_resolve_sources`）：`is_3d_file_source` が真の Source は、画像と同じ `core/stickers.py` の `comfy_file_path`（`folder_paths` の input・output・temp のディレクトリの中だけ）でパスにし、コアの `Types.File3D(パス)` にして、`scene`・`sticker` の 3D ファイルと同じ `_read_scene_file` で SPLAT か MESH に読む。同じ `splat_files`・`mesh_files` のキャッシュ（キーはパス・更新時刻・大きさ）に入るので、同じファイルは実行をまたいで読み直さず、同じファイルを `scene`・`sticker` につないだときとも同じ値になる。同じキーの読み込みとエディタ用ファイルの書き出しは、キーごとのロックの下で 1 回だけ行う（`core/cache.py` の `MemoryCache.get_or_put`）。下の経路と実行中のプロンプトが同じファイルを同時に求めても、2 回読まず、2 回書かない。読んだ SPLAT・MESH は `SceneSources.contents`（Sticker の `id` → SPLAT・MESH）に入れ、2D の素材の `stickers` には入れない。
- 描き方：`_render_frames` が描画のパスごとに、`contents` の値を `_scene_content` で `SceneContent` にし、`ContentSource(content, 0)` をその Sticker の Source として `render_frame` に渡す。device に置いたものは、`port` の 3D の Sticker と同じくそのパスの間だけ持つ。`PANO_SCENE` と `video` が持つのは、読んだ SPLAT・MESH だけである。描く規則（変形、不透明度、光が効くか）は `docs/render-contract.md` の「3D の `world` の Sticker」と「光が効く要素」で、`port` の 3D の Sticker と同じ。
- 時間：要素は 1 つで、Clip range の間ずっと要素 0 を描く。出力の長さには、1 枚の画像の `file` の Source と同じ扱いで効く（上の出力の長さの規則）。glTF のアニメーションを持つファイルは、clip の 1 周を素材の長さとして数える（上の規則。作る）。
- 上流の Scene：`SceneLayer.sources` の `contents` は `stickers` と同じく層の中の `id` で引き、上書きで消した Sticker のものは除く（`_override_layers`）。下流の Panorama Studio と Preview も同じ読んだ値で描く。
- 読めないとき：次の場合は、画像の `file` の Source と同じく、その Sticker を描かずに警告を出す（ログと `pano_sticker_warnings`）。実行は止めない。`scene`・`sticker` 入力の 3D ファイルが読めないときは実行を止める（`docs/render-contract.md` の「読めない 3D ファイル」）のと違うのは、`file` の Source はワークフローの接続ではなく、エディタで置いた Sticker の一つだからである。
  - パスが範囲の外、またはファイルが無い。
  - 読み手が `ValueError` か `OSError` を出した（FBX・USDZ はコアの Get3DComponents が読まない。3DGS の属性の無い PLY、外部の `.bin` やテクスチャを参照する `.gltf` でその参照先が無いもの、壊れたファイルなど）。ほかの例外はそのまま上げる。
  - `sky` の Sticker が 3D ファイルの Source を持つ（エディタは作らない。手で書いた状態など）。
  - 文（`nodes.py` の `_file_3d_error`。経路の `error` と同じ関数で作る）：`Could not read the 3D file <subfolder/filename>: <理由>`。ノードの警告はこの文に ` Sticker <id> is not drawn.` を足す。理由は、`the file was not found`（範囲の外・ファイルが無い）、`only files in the input folder are read`（経路だけ。`storage` が `input` でない）、`a sky Sticker cannot show a 3D file`（ノードだけ）、または読み手の文。どちらの読み手も読まないファイルの理由は `it is neither a splat file (a PLY with 3DGS properties, SPLAT, SPZ, KSPLAT) nor a mesh file (GLB, GLTF, OBJ, STL)` とし、`scene`・`sticker` の入力の名前を含めない（`NEITHER_3D_READER`。`_read_scene_file` は入力の名前を渡されないとき、この理由だけの `ValueError` を出す）。
- メモリ：読んだ SPLAT・MESH は `_render_memory` の見積もりに入る（`docs/runtime-resources.md` の「デバイスとメモリ」）。
- エディタ用ファイル：実行結果の `ui` には出さない。エディタは実行を待たずに下の「3D ファイルの `file` の Source のエディタ用ファイル」で求める。

### glTF のアニメーションのエディタ用ファイル

アニメーション（skin・morph・node の channel）を持つ GLB・GLTF（`docs/render-contract.md` の「glTF のアニメーション」。作る、ADR 0043）は、エディタが元のファイルを GLTFLoader で読み、その `SkinnedMesh` と morph をそのまま描く。材質は静止の GLB のものにして出力と同じにする。

- メタ（`pano_scene_meta`・`pano_sticker_meta`・経路の応答に `animation` を足す）：`{"source": 元のファイルの ui の項目（`/view` で読める input・output・temp の中のファイル）, "clips": [{"name", "duration"}...]}`。材質は今の静止の GLB（`file`）から取るので、メタに材質は入れない（`docs/threejs-spark-integration.md` の「glTF のアニメーション」）。使う scene は既定の scene（`scene` の番号。無ければ最初）で、コアの読み手と GLTFLoader で同じ。
- 今の静止の GLB（コアの MESH を `save_glb` が書いたもの）も今までどおり書き、`file` に入れる。エディタはその材質と箱を使う。アニメーションを持たないファイル、元のファイルがブラウザから読めないとき（`/view` の外、外部の `.bin` を持つ `.gltf`）は `animation` を足さず、静止の GLB だけにする（後者は警告を出す）。
- `scene_files` のキャッシュのキーは今と同じ。

### 3D ファイルの `file` の Source のエディタ用ファイル

エディタが、置いた 3D ファイルを実行の前に出力と同じ見た目で描くための、読み取り専用のサーバーの経路。出力と同じ見た目には、ノードと同じ読み手が読んだ結果（コアの Get3DComponents が全体を 1 つのメッシュにまとめ、最初の材質だけを残したものを `save_glb` が書き直した GLB と、`MESH.unlit`）が要る。元のファイルを three.js でそのまま読むと、2 つ目以降の材質、`KHR_texture_transform`、sampler などで出力と違う見た目になる。この経路はノードと同じ Python のコードで読むので、見た目の規則の owner はノードの一つだけで、写しを持たない。

選ばなかった案：エディタが元のファイルを読み、コアの読み手のすることを JS に写す（規則の二つ目の写しになり、コアの読み手が変わるたびにずれる）。元のファイルをそのまま描いて差を残す（置いた瞬間から出力と同じ見た目にならない）。

- 経路：`POST /panorama_suite/file_3d`（`routes.py` の `FILE_3D_ROUTE`）。本文は JSON の `{"filename", "subfolder", "storage"}`（状態の `file` の Source と同じ値と正規化）。`storage` は `input` だけを受ける。JSON として読めない本文、オブジェクトでない本文、`filename` が無いか空の本文は `400`（`subfolder` と `storage` は Source と同じ既定値）。
- 登録：`__init__.py` が読み込まれたときに `routes.py` の `register_routes` を呼び、ComfyUI の `server.PromptServer.instance.routes` に足す。`server` を import できない、または `PromptServer.instance` が無いとき（ComfyUI の外の test）は登録しない。`core_adapters.py` がコアのシンボルを `try` / `except ImportError` で読むのと同じ形で、ノードの読み込みは止めない。
- 処理：Source を上の「3D ファイルの `file` の Source」と同じ `_read_file_3d`（`comfy_file_path` と `_read_scene_file`）で読み、`_scene_ui`（`in_execution=False`。`write_editor_files` と `scene_files` のキャッシュ）でエディタ用ファイルとメタを得る。ノードの実行と同じキャッシュなので、同じファイルは経路と実行のどちらで読んでも 1 回しか読まない。
- 応答（アニメーションを持つファイルは、上の「glTF のアニメーションのエディタ用ファイル」の `animation` も足す。作る）：`200 {"kind": "mesh" か "splat", "unlit": 真偽（mesh のときだけ。`docs/render-contract.md` の「光が効く要素」）, "file": ui の項目（`entry_from_path`、`pano_evictable` 付き）, "box": 中身の箱}`。`box` は読んだ SPLAT・MESH の `content_box`（上の「中身の箱」）で、`{"min": [x, y, z], "max": [x, y, z]}` か、中身が空なら `null`。エディタはこれで新しい 3D の Sticker の位置を決める（`docs/editor-interaction.md` の「3D ファイルを置く流れ」）。`is_3d_file_source` が偽の Source、`storage` が `input` でない、範囲の外、ファイルが無いときは `400`、読み手が `ValueError` か `OSError` を出したときは `422`。どちらも `{"error": 文}` で、文は上の「3D ファイルの `file` の Source」の文と同じ関数で作る。
- 安全：読むのは ComfyUI の input のディレクトリ（`folder_paths.get_input_directory()`）の中のファイルだけ（`comfy_file_path` で範囲を確かめる）。output と temp は読まない。書くのは temp のエディタ用ファイルだけで、`TEMP_FILES` に登録する。コードを実行しない。
- 読み込みはイベントループを止めないよう、別のスレッドで行う（`asyncio.to_thread`）。共有のキャッシュ（`CACHE`）と `TEMP_FILES` は実行中のプロンプトとも同時に使うので、どちらもロックの下で触る（今の `core/cache.py`・`core/temp_files.py` はロックを持つ）。実行の外なので、中断と進み具合（`loop_progress`）は使わない。
- 経路が書いたファイルは、実行の外なので実行を持たない（`TEMP_FILES` の記録の実行は `None`）。寿命は `docs/runtime-resources.md` の「一時ファイル」のとおり：temp の合計が上限を超えたとき古いものから消え、後の実行がそのファイルを `ui` で指せば、その実行の間は残る。エディタは 404 のとき経路を呼び直す（1 つの Source につき 3 回まで。`docs/threejs-spark-integration.md` の「空間の表示」。キャッシュはファイルの有無を確かめて書き直す）。`tests/test_file_3d_route.py` が、経路の書いたファイルが実行 `None` で登録されることを確かめる。
- 端から端まで（アップロード → 経路 → `/view` → three.js の読み込み）は、milestone の実機の通し（`docs/agents/workflow.md` の Review）で確かめる。自動の test は、それぞれのつなぎ目（経路の入出力、エディタの問い合わせ、読み込みと描画）を確かめる。

## `video` 出力

Panorama Studio の `video` は、`scene_video.py` の `SceneVideo`（コアの `VideoInput` の実装）である（ADR 0027）。出力した時点では描画せず、読まれるたびに (b) の `_render_frames` で 1 フレームずつ描く。描く device は読むときの `get_torch_device()` で、`bg_media`（上流の Scene の背景を使うときはその `bg_media`）の VIDEO と `sticker` の VIDEO は読むたびに開き直し、実行をまたいで開いたままにしない。持つのは `PANO_SCENE` と同じ状態・素材・Timeline と、`execute` で読んだ音声である。

| メソッド | 内容 |
|---|---|
| `get_components()` | 全フレームを描いて `VideoComponents`（`images`・`frame_rate`・`audio`）を返す。GetVideoComponents につないだときで、全フレームが RAM に載るのはこのときだけ。値は描いたフレームそのもので、旧 IMAGE 出力と一致する（`tests/test_stickers_scene_video.py` などで確かめる）。全体が `STAGED_RENDER_BYTES`（16 MiB）以上で device が CPU でなければ、ピン留めした 1 フレーム分のバッファを通して転送する。進捗はフレームごとに進める |
| `save_to(path, format, codec, metadata, bit_depth, crf, color_space, preset)` | 1 フレームずつ描いてエンコードし、全フレームを RAM に置かない。コンテナとコーデックの `auto` の決め方、エンコーダー（`h264`・`libsvtav1`）、`crf`・`preset`、10 ビット、音声（AAC、WebM は 48kHz の Opus）、メタデータはコアの `VideoFromComponents.save_to` に合わせる。色は sRGB（BT.709）で、`color_space` に HDR を求めるとエラーにする（コアの `VideoFromFile` と同じ）。各フレームは上の時刻に置く。VIDEO が Timeline を決め、その時刻が PTS（time base が 0 でない。`StreamedVideo`、またはそれから時刻を受け継いだ `video`）のときは、その time base で PTS を保ち（可変フレームレートを保持）、コアがファイルを再エンコードするときと同じく B フレームを使わない。時刻が厳密なとき（VIDEO がない、`MaterializedVideo`）は Timeline fps の等間隔に置く。既定のエンコード（MP4・H.264 で `bit_depth`・`crf`・`color_space`・`preset` が `None`）は `get_stream_source()` の MP4 をコアの `VideoFromFile.save_to` で詰め直すので、描くのは一度だけ |
| `get_stream_source()` | 既定のエンコードで temp に書いた MP4 のパス。最初に呼ばれたときに描き、ファイルがある間は使い回す。Preview の `ui`（エディタの動画）は、このファイルがエディタでシークしやすければ（`editor_ready`）写さずにそのまま見せ、そうでなければ別のプロキシを作る。パッケージの外（コアのノード）向けで、このパッケージの中では読まない |
| `as_trimmed`・`as_cropped` | `get_stream_source()` の MP4 の `VideoFromFile` に任せる（コアの `VideoFromComponents.as_trimmed` と同じ）。切り抜きが全面なら自分を返す |
| `get_dimensions`・`get_frame_count`・`get_frame_rate`・`get_duration`・`get_color_space` | 描かずに返す。長さは最後のフレームの時刻 + 1 ÷ Timeline fps、色空間は `sRGB`、ビット深度はコアの既定の 8 |

- `open_video` は `SceneVideo` を `RenderedVideo`（`scene_video.py`）にする。`StreamedVideo` と同じく `frame_rate`・`times`・`time_base`・`first_frame`・前へ読むだけのフレーム・`audio(seconds)` を持ち、フレームは `render` で描いたもの（device 上）をそのまま返す。Studio の `bg_media`・`sticker` に `video` をつないでも、エンコードを通らず値は変わらない（`tests/test_scene_video.py`）。`OPENED_VIDEOS`（`sticker_media.py`）が `open_video` の返す型である。
- (b) はフレームごとに `throw_exception_if_processing_interrupted()` を呼び、SaveVideo や GetVideoComponents が読んでいる間もキャンセルで止まる。
- 同じ `video` を何度読んでも、複数の下流が読んでも、それぞれが一から描く（ComfyUI が出力をキャッシュするので、入力を変えずに再実行したときは `execute` も `video` の作り直しも起きない）。`video` を使う下流が複数あると、それぞれで描画が走る（ADR 0027）。使い回すのは `get_stream_source()` の MP4 だけで、ファイルは ComfyUI が起動時と終了時に消す temp に残る。
- 進捗バーはコアの `ProgressBar` で、読んだノード（SaveVideo など）に出る。`execute` は最初のフレームだけを描くので進捗を出さない。

## `PANO_SCENE`

Panorama Studio の `scene` 出力は、`nodes.py` の `PanoSceneValue`（frozen dataclass、比較は同一性）である。Scene の正は各ノードの `state_json` だけで、この値は実行のたびに状態と入力から導く派生値である（ADR 0025、ADR 0029）。フレームは描画せず、`PANO_SCENE` を入れ子に持たない。上流の Scene を受けたノードの値は、上流の層の後ろに自分の層を足した平らな列になる。Preview の表示（`docs/preview-node.md` の「`PANO_SCENE` を見る」）、3D の撮影、Studio の `scene` 入力は、次のフィールドだけを前提にする。

| フィールド | 内容 |
|---|---|
| `layers` | `SceneLayer` のタプル。最も上流のノードの層から、この値を作ったノードの層まで（下記） |
| `bg_media` | `bg_media` の入力そのもの（IMAGE のテンソル、VIDEO のハンドル、または `None`）。層のうち最も上流で `bg_media` を持つノードのもの。VIDEO は開いた状態で渡さないので、使う側が `sticker_media.py` の `open_video` で開き直す |
| `coverage` | `bg_media` の範囲（360 または 180）。`bg_media` と同じノードのもの（どの層も持たなければ、この値を作ったノードのもの） |
| `bg_color` | 0〜1 の 3 つの数値のタプル。`coverage` と同じノードのもの |
| `rate` | Timeline fps の分数（(a) が決めたもの。`video` の `get_frame_rate()` と同じ値）。`fps` はこれを float にしたもの（プロパティ） |
| `times` | 出力フレームごとの時刻（秒、`Fraction`）のタプル。`video` の PTS と同じ値（`_output_times`）。長さが出力のフレーム数 |
| `time_base` | `times` が丸められている幅（Timeline を決めた VIDEO の time base。厳密なときは `0`） |
| `frames` | 出力フレームごとの `(描く bg_media のフレーム番号または None, 層ごとの (評価する Timeline frame, port のフレーム番号または None, scene の要素の番号または None) のタプル)`。層の並びは `layers` と同じ。`scene` の番号は、その層に `scene` の入力がないとき `None` で、Clip range の外のフレームでも番号を持つ（描くかは `evaluated["scene"]["active"]` で決める） |
| `bg_ui` | `bg_media` をエディタに見せる `ui`（`pano_input_images`・`pano_input_videos`・`pano_input_video_meta`）。`bg_media` がなければ空 |
| `media_ui` | この値を作ったノードの実行結果の `ui` のうち、素材をエディタに見せる部分（下記「Panorama Studio」の `ui`。上流がなければ、背景、`pano_scene_files`・`pano_sticker_files` などの 3D のエディタ用ファイル、`port` の素材、`pano_timeline_fps`）。`pano_sticker_input_pose` と警告は入らない。参照するファイルは作ったノードが書いたもので、使う側は自分の `ui` にそのまま入れ、書き直さない |
| `bg_clip` | `bg_media` の Clip range（`background.clip`）と、それを持つノードの状態の `timeline.fps` のタプル、または `bg_media` がなければ `None`。`bg_media` と同じノードのもの。下流は上流の背景をこれで置く（上記「背景の Clip range」） |

`SceneLayer`（層）のフィールド：

| フィールド | 内容 |
|---|---|
| `state` | `load_scene_state(state_json)` の戻り値。`sticker` の入力があり、状態に `port` の Sticker がないときは、描いたときと同じく `port` の Sticker を加えたもの。Studio の `scene` 出力では `camera` を `null`、`upstream` を空にする（ADR 0029、ADR 0030）。`id`（Scene の id）は保つ |
| `sources` | `SceneSources`。`file` の Source は読み込み済み。`port` の Sticker の Source は `port` の最初のフレームを持つテンプレートで、`port` があるときは (b) と同じく、フレームごとに `port.frames()` と `frames` の `port` の番号（`port.index_at` の結果）で取り出した素材に差し替えてから `render_frame` に渡す |
| `port` | `sticker` の素材の `PortMedia`（`sticker_media.py`）、または `None`。開いた stream ではなく VIDEO の入力そのものを持ち、`frames()` を呼ぶたびに開き直すので、Preview と下流の Studio など複数のノードが同じ `PANO_SCENE` を使っても読み取り位置を取り合わない |
| `scene` | `scene` の入力の 3D の素材（SPLAT・MESH・`MOGE_GEOMETRY`・`DA3_GEOMETRY`、または `None`。MESH はコアの MESH のまま持つので、光が効くかの印 `MESH.unlit` も運ぶ。`scene` に上流の Scene をつないだ層では `None`）。3D ファイルは `_read_scene_file` で読んだ SPLAT・MESH にして持つ（どちらも読まないファイルはエラーになり、`PANO_SCENE` は出ない）。描く側は `_scene_content` で `SceneContent` にし、フレームごとに `frames` の `scene` の番号を `scene_index` として `render_frame` に渡す（(b) と同じ） |
| `media_ui` | その層の素材をエディタに見せる `ui`（`port` の素材の `pano_sticker_input_*`・`pano_sticker_files` / `pano_sticker_meta`、`scene` の `pano_scene_files` / `pano_scene_meta`）。背景は入らない（`PanoSceneValue.bg_ui`） |

- 出力の解像度は入れない。撮影する側がそれぞれの規則（`output_size` など）で決める。
- 同じ入力からは同じ内容の値になる（乱数や時刻を含まない）。ComfyUI のキャッシュが効くとき、下流には前回の同じ値が渡る。
- 下流のノードは同じオブジェクトを共有するので、`layers` の `state` や `sources` を書き換えない。上流の層は、下流が上書き（ADR 0030）を当てなければ、下流の値でも同じ `SceneLayer` のオブジェクトである。当てた層は新しい `SceneLayer` で、変えていない部分は元の層と共有する（下記「上流の Scene」の「上書き」）。
- 3D の Sticker の素材は層の `port`（`is_3d`、`media` は SPLAT・MESH・`MOGE_GEOMETRY`・`DA3_GEOMETRY`）が持ち、`sources` には入らない。使う側は (b) と同じく `_render_frames` を通す。
- 撮影するノードの Camera は、最後の層（撮影するノード自身）の状態の `camera` から取る。`PANO_SCENE` は Camera を持たない。

## Panorama Studio（`PanoramaStudio`）

Scene を組み立てて撮るノード（ADR 0029）。Python のクラスは `PanoramaStudioNode`。開発中にあった状態 v2 の Stickers・Cutout のノード ID（`PanoramaStickersNode`・`PanoramaCutoutNode`）は登録せず、置き換え（NodeReplace）も持たない（ADR 0029）。旧ノード `PanoramaStickers`・`PanoramaCutout` は別の ID で登録したまま。

- 入力は `bg_media`（IMAGE・VIDEO）、`sticker`（IMAGE・VIDEO・MESH・SPLAT・3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`）、`sticker_state`、`scene`、`bg_color`、`coverage`、`output_size`（`1024`・`1536`・`2048`・`2560`・`3072`・`4096`・`auto`、既定 `2048`）、`state_json` の順。`scene` は 3D の素材（SPLAT・MESH・3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`）か、別の Panorama Studio の `scene` 出力（`PANO_SCENE`。下記「上流の Scene」）を受ける。
- 出力は `first_frame`（IMAGE）、`first_frame_mask`（MASK）、`video`（VIDEO）、`sticker_state`（STRING）、`scene`（`PANO_SCENE`）の順（入力の `sticker_state`・`scene` と同じ並び。ADR 0029 の追記）。`is_output_node` は `True`。
- Scene の組み立ては `_build_scene`（状態の読み込み、`port` の Sticker、Source、(a) の `_decide_timeline`、エディタ用の `ui`）で、描画は (b)・(c)（`_render_frames`・`_render_outputs`）。撮り方（`capture`）と出力の大きさは下記。
- `state_json` は状態 v2（v1 も読む。旧 Cutout の `shots[0]` は Camera になり、FOV は 1〜179 に寄せ、`roll_deg` だけを読む（`rot_deg` は読まない）。`docs/scene-state-v2.md`）。
- Camera の判定：状態 v2 の `camera`（`docs/scene-state-v2.md`）。`null`（欠け・空の `state_json` を含む）なら Camera が無い。`camera.visible` が `false`（タイムラインの目で隠した Camera）も、撮り方・出力の大きさ・`sticker_state` では Camera が無いのと同じに扱う（`nodes.py` の `_studio_camera`。`_studio_output_size` と `execute` が使う）。隠した Camera は状態に残り、表示を戻せば元の Camera で撮る（`scene` 出力は Camera の表示によらず `camera` を `null` にする）。Timeline の長さは `_decide_timeline` で決め、Camera があるときだけ Camera の Keyframe が長さに入る。隠した Camera の Keyframe も長さに入る（表示の切り替えで出力の長さを変えない。隠した Sticker の Clip range を数えるのと同じ）。`erp` の Camera でも、描画に使わない `fov` の Keyframe を含めてすべての Lane の Keyframe が長さに入る。
  - Camera が無い：World の原点から回転 0（`ORIGIN_CAMERA`）で、`coverage` の範囲の ERP を撮る。旧 Stickers の基準画像（差の出る case は Studio 自身の基準画像 `studio_*`）と一致する（`tests/test_studio_node.py`）。
  - `projection` が `erp`：評価した Camera の位置と回転から ERP を撮る（`Projection.erp`。ERP は Camera の回転に従って回り、`world` の Sticker と `scene` は Camera の位置から見る）。`fov`・`aspect` は読まない。`coverage` が 180 なら Camera の前方の半球。原点・回転 0 なら Camera が無いときと同じ出力になる。
  - `projection` が `perspective`：評価した Camera と `Projection.perspective(幅, 高さ, Camera の hFOV, coverage)` で撮る。レンズの曲線 κ（`curve`）も `Projection` に入れる（`Projection.perspective(..., curve)`）。画素は正方なので、垂直の FOV は丸めた大きさから決まり、`camera.aspect` から決まる値とわずかに違うことがある。旧 Cutout の case `cutout_single_shot` と同じショットと背景を 224 x 128（`tools/bake_legacy_goldens.py` の `STUDIO_SHOT_SIZE`）で撮った基準画像 `studio_camera_single_shot` と一致する（`tests/test_studio_camera.py`。この大きさは `output_size` からは決まらないので、テストと焼き直しでは `_studio_output_size` を差し替える）。
- 出力の大きさ（`_studio_output_size`）：`output_size` は全体（360°）の ERP の幅 `W` を選ぶ。`auto` は `bg_media`（VIDEO は最初に復号できたフレーム）の幅を 360° に換算した値（`coverage` が 180 なら 2 倍）で、`bg_media` が無ければ 2048 にして警告する（ログと `pano_sticker_warnings`）。

  | 撮り方 | 幅 | 高さ |
  |---|---|---|
  | Camera が無い・`erp`（`coverage` 360） | `W` | `W ÷ 2`（切り捨て） |
  | Camera が無い・`erp`（`coverage` 180） | `W ÷ 2` | `W ÷ 2` |
  | `perspective` | Timeline の全出力フレームでの `2·f·g_κ(hFOV ÷ 2)` の最大、`f = W ÷ 2π`、`g_κ(x) = tan(κx) ÷ κ`（`lens_radius`。κ = 0 では `x`。κ = 1 では `2·f·tan(hFOV_max ÷ 2)` と同じ。`tests/test_lens.py` の `test_the_output_size_keeps_the_center_pixels_per_radian`） | 幅 ÷ `camera.aspect` |

  - ERP の出力は画素の細かさが `W` の 360° の ERP と同じになる。`auto` は旧 Stickers の `auto` と同じ大きさになる。ただし 360 では高さを `W ÷ 2` にそろえ、`bg_media` の高さは引き継がない（2:1 でない背景では旧 Stickers と違う）。`coverage` 180 の `auto` は `bg_media` と同じ大きさになる（固定の値では、旧 Stickers は `coverage` 180 で選んだ値を出力の幅にするので、Studio はその半分の幅になる）。ERP には上限を設けない（`auto` は大きな `bg_media` ならそのまま大きくなる）。
  - `perspective` の `hFOV_max` は、Timeline の全出力フレーム（`frames` の評価する Timeline frame）で評価した Camera の hFOV の最大値。幅と高さはそれぞれ最も近い偶数に丸め（最小 2）、FOV（と κ）が動いても大きさは変わらない。像の中心の 1 ラジアンあたりの画素はどの κ でも `f` で、`W` の ERP と同じになる。丸めた長辺が 4096（`STUDIO_MAX_OUTPUT_SIDE`）を超えるときは、比を保って長辺を 4096 に縮め（丸める前の値に掛けて丸め直す）、警告する。
- `scene` 出力は `PanoSceneValue`（上記「`PANO_SCENE`」）で、自分の層（最後の層）の `state` の `camera` を `null` にする（撮影する世界で、Camera を含まない。`_scene_output`）。自分の層の `state` の `upstream`（上流の層への上書き）も空にする。下流は上書きを当てた後の姿を受け取るためである（ADR 0030。当て方は下記「上流の Scene」の「上書き」）。`id` は保ち、下流はこの `id` ごとに上書きを記録する。上流の Scene を受けたときは、上流の層も含む。Timeline（`fps`・`times`・`frames`）は Camera の Keyframe を数えて決めたもの。
- `sticker_state` は `projection` が `perspective` のときだけ、`_camera_sticker_state` が作る v2（`docs/scene-state-v2.md`）。`fps` は状態の `timeline.fps`、`camera` は Camera の Lane ごとの Keyframe をそのまま写したもの。Timeline fps には再基準化しない（丸めで Keyframe が最大で半フレーム動くため。Pose handoff はどの fps の比でも評価できる）。Keyframe のない Lane は Camera の値を持つ `frame: 0` の Keyframe 一つ。`source_aspect` は出力の幅 ÷ 高さ。Camera が無いとき（隠したときを含む）と `erp` のときは空文字列。
- 隠した `scene`（`scene.visible`）と Sticker は評価関数の `active` が偽になるので描かない。隠したペイント（`painting_visible`）は `_resolve_sources` が空のペイントを渡すので、色にも MASK にも出ない。上流の Scene の層でも同じ。
- 実行結果の `ui` は上記「Scene の組み立てと撮影の入口」の表のキー（`pano_input_images` などの素材、`pano_sticker_input_pose`、`pano_sticker_warnings`）。上流の Scene を受けたときのキーは下記。エディタでの表示は `docs/editor-interaction.md` の「Panorama Studio のエディタ」と「上流の Scene の表示と編集」。

### 上流の Scene

`scene` に別の Panorama Studio の `scene` 出力（`PANO_SCENE`）をつなぐと、その Scene の上に自分の Scene を重ねて撮る（ADR 0029）。`_build_scene` が、自分の状態の上書き（`upstream`）を当てた上流の層の後ろに自分の層を足す。

- 重ね方：上流の各層と自分の層を `RenderLayer` にして `render_frame` に渡す（`docs/render-contract.md` の「層」）。`sky` は上流の上に自分を重ね、`world` は奥行きで混ざる。Sticker の `id` と `port` は層ごとに分かれるので、上流と同じ `id` や、上流にも `port` の Sticker があっても、それぞれ描く。撮るのは自分の Camera（自分の状態の `camera`、上の「Camera の判定」）で、上流の Camera は無い（`scene` 出力は Camera を含まない）。
- 上書き（ADR 0030、`_override_layers`）：状態を読み込んだ後、Timeline を決める前に、自分の状態の `upstream` の各記録を、その `layer` と同じ `id` を状態に持つ上流の層に `apply_upstream_overrides`（`docs/scene-state-v2.md` の「上書きを当てる」）で当てる。描くのも、`scene` 出力で下流へ渡すのも、当てた後の層である。
  - 同じ `id` の層が鎖に二つ以上あるとき（Studio を複製したとき）は、最も下流の層にだけ当て、`Scene id <id> is on <n> upstream Panorama Studio nodes; its overrides apply to the nearest one only.` と警告する（ログと `pano_sticker_warnings`）。警告は当てる記録があるときだけ出す。
  - `id` が `null` の層と、どの層の `id` とも合わない記録は当てない。記録が何も変えない層は、受け取った `SceneLayer` のオブジェクトのまま（キャッシュがそのまま効く）。上流の層の `state`・`sources`・`port` は書き換えず、当てた層は新しい `SceneLayer` にする。
  - `sources`：`crop` と `z_index` は Sticker の Source（`StickerSource`）から描くので、上書きで変わった Sticker の Source をその値に差し替える。消した Sticker の Source は除く。`painting_visible` を上書きしたときは、`_resolve_sources` と同じく、`false` ならペイントを空にし、`true`（上流で隠したペイントを下流で見せる）なら状態のペイントを読む。
  - `port`：層の `port` の Sticker を消したときは、その層の `port` を `None` にする（素材を描かない）。`port` の Sticker の Clip range を上書きしたときは、素材の先頭も上書きした Clip range の `start − in` に移す（`PortMedia.with_clip`。読んだ素材を共有し、VIDEO を開き直さない）。
  - Sky の重なりは層ごとのまま。`z_index` の上書きは、その層の中の順だけを変える。
- Timeline fps は上流の `rate`。出力フレームの時刻は上流の `times` で、上流より長いときはその後を Timeline fps の間隔で続ける（`_output_times`）。丸めの幅も上流の `time_base`。自分の `bg_media`・`sticker` の VIDEO は Timeline fps を決めない。
- 長さ：自分の `timeline.length` があればそれ（秒を保って Timeline fps のフレーム数に直す。上流より短くも長くもできる）。なければ、上流の出力フレーム数と、自分の状態から通常の規則（上記「Scene の組み立てと撮影の入口」の長さの規則。背景 VIDEO の段は、自分の `bg_media` を使うときだけで、その VIDEO の最後のフレームが終わる時刻を Timeline fps のフレーム数にしたもの）で決まる長さと、上書きした Clip range の終わり（記録が `clip` を持つ Sticker と `scene` の Clip range の `start + duration`。`duration` の無い Clip range は数えないが、`port` の Sticker は例外で、自分の層と同じく素材が終わるフレーム（`PortMedia.end`。フレームを持つ素材だけ）を終わりとする）の、いちばん長いもの。上書きした Clip range の終わりはその層の Timeline frame なので、`floor(終わり × Timeline fps ÷ 層の timeline.fps + 0.5)` で出力フレーム数に直す。上書きしていない上流の Clip range は上流の出力フレーム数にすでに入っているので数えず、上流の Sticker を消しても短くならない。
- 時刻の評価：各層は、出力フレームの時刻 `t` 秒について `t × その層の timeline.fps` の Timeline frame で評価する（`_layer_frames`。上流の Timeline frame から見れば `frame × 層の timeline.fps ÷ 上流の timeline.fps`）。上流と自分の fps が違っても、自分の Keyframe と Clip range は秒を保つ。状態は再基準化しない（整数の Timeline frame に丸めない）。各層の `port` と `scene` の番号も、その層の Timeline frame から通常の規則（`PortMedia.index_at`・`batch_index`）で選ぶ。上流の層の番号は、上流で決めたものと同じ規則で、延ばした分も含めて選び直す。
- 背景：上流が `bg_media` を持てば、その `bg_media`・`coverage`・`bg_color` を使い、自分の `bg_media` は使わない。自分の `bg_media` も接続されていれば `bg_media is not used: the scene input has a background of its own.` と警告する（ログと `pano_sticker_warnings`）。自分の `coverage`・`bg_color` も使わない。上流が `bg_media` を持たなければ、自分の `bg_media`・`coverage`・`bg_color` を使う。
  - 背景のフレーム（`_bg_frames`）：既定の Clip range では、IMAGE バッチは出力フレームと 1 対 1、1 枚の IMAGE は全フレーム。VIDEO は、Timeline を決めた VIDEO（上流がないとき）なら 1 対 1。上流がある（Timeline fps を上流が決めた）ときは、各出力フレームの時刻以前に始まる最後のフレーム（PTS ≤ `t`、比較の許容差は出力の時刻と VIDEO の time base の大きいほうの半分）で、最後のフレームが平均フレームレートの 1 フレームの間続いた後は描かない（`bg_color`）。上流の背景の VIDEO が終わった先も同じく `bg_color`。
  - 下流が延ばした区間でも、上流の背景の VIDEO は時刻で続き、最後のフレームが終わった後は `bg_color` になる。上流の背景は下流の長さの規則には入らない（上流の出力フレーム数がすでにそれを含み、上流の `timeline.length` で短くした分もそのまま保つ）。
  - `output_size` の `auto` は、使う背景（上流のものを含む）の幅で決める。
- マスク：`first_frame_mask` は、上流の各層のペイントのマスクも含む（層ごとのマスクの画素ごとの最大値）。
- `sticker_state` 入力と Pose handoff は自分の層の `port` の Sticker だけに効く。
- 実行結果の `ui`（エディタ用）：

  | キー | 内容 |
  |---|---|
  | `pano_scene_files` / `pano_scene_meta`、`pano_sticker_input_*`、`pano_sticker_files` / `pano_sticker_meta`、`pano_sticker_input_pose` | 自分の層の素材と姿勢。上流がないときと同じキー |
  | `pano_input_images` / `pano_input_videos` / `pano_input_video_meta` | 自分の `bg_media` を使うとき（上流が背景を持たないとき）だけ出す |
  | `pano_upstream_layers` | 上流の層のリスト（最も上流から）。各要素は `{"state": その層の状態 v2（camera は null、upstream は空）, "ui": その層の素材の ui}`。`state` は `scene` 入力で受け取ったままの状態で、自分の上書きは当てていない（エディタが上流の値との差と「上流の値に戻す」を示すため。上流の Studio の上書きは当たっている）。`state.id` はその層の Scene の id（ADR 0030）で、状態が一度も書かれていない層では `null`。`ui` のキーは自分の層と同じ（`pano_sticker_input_images`・`pano_sticker_input_videos`・`pano_sticker_input_video_meta`・`pano_sticker_input_frames`・`pano_sticker_files`・`pano_sticker_meta`・`pano_scene_files`・`pano_scene_meta` のうち、その層が持つもの）で、背景は入らない。ファイルは上流のノードが書いたもので、書き直さない |
  | `pano_upstream_input_images` / `pano_upstream_input_videos` / `pano_upstream_input_video_meta` | 上流が背景を持つときの、その背景（`pano_input_*` と同じ形）。このとき自分の `pano_input_*` は出さない |
  | `pano_upstream_coverage` | 上流の `coverage`（`[360]` か `[180]`）。上流が背景を持たないときも出す（Preview は自分の背景を持たないので、この値で描く。`docs/preview-node.md` の「`PANO_SCENE` を見る」） |
  | `pano_upstream_bg_color` | 上流の `bg_color`（`[[r, g, b]]`、0〜1）。上流が背景を持たないときも出す（理由は上と同じ） |
  | `pano_upstream_bg_clip` | 上流が背景を持つときの、その背景を持つ Studio の Clip range と、その状態の `timeline.fps`（`[{"clip": Clip range, "fps": 数値}]`）。エディタとノード上の UI は、上流の背景をこれで置いて表示する（`docs/timeline-ui.md` の「背景の行」） |
  | `pano_timeline_fps` | 上流があるときは常に出す（Timeline fps は上流が決める）。エディタは fps の欄をロックし、自分の状態をこの fps に再基準化して表示する（VIDEO が fps を決めたときと同じ） |
  | `pano_timeline_frames` | 上流があるときは常に出す。出力のフレーム数（上流と自分の長いほう、または自分の `timeline.length`） |
  | `pano_upstream_frames` | 上流があるときは常に出す。上流の Scene の出力のフレーム数。エディタとノード上の UI の Auto の長さ（`docs/timeline-ui.md` の「タイムラインの長さ」）が、自分の長さとは別に上流の長さとして数える（`pano_timeline_frames` は前回の自分の `timeline.length` や Clip range を含むので、編集に合わせて求め直せない） |

  - `pano_upstream_coverage`・`pano_upstream_bg_color` をいつも出すので、Studio のエディタとノード上の表示も、上流が背景を持たないときに同じキーを受け取る。上流が背景を持たないときは自分の `coverage`・`bg_color` で描く規則（上の「背景」）は変えず、エディタとノード上の表示は、上流の背景の有無を `pano_upstream.js` の `upstreamBackgroundOf` が `pano_upstream_input_images`・`pano_upstream_input_videos` の有無で決め、この 2 つのキーはその後でだけ読むので、Studio の見え方は変わらない。
  - 上流の要素は下流で選んで編集できる（ADR 0030。変更は自分の状態の `upstream` に上書きとして記録する）。ノードは上記「上書き」のとおり当てる。エディタでの選択と編集は下の「エディタでの編集」、タイムラインの行は `docs/timeline-ui.md` の「上流の層の行」のとおり。消す・上流に戻す・消したものを戻すは下の「エディタでの消す・戻す」のとおり。エディタは、`pano_upstream_layers` の各層に自分の状態の `upstream` の記録を当てた作業コピー（`pano_upstream.js` の `upstreamWorkingLayers`。当てる層の選び方はノードの `_override_layers` と同じ）を、自分の Timeline fps に再基準化して持ち、自分の再生位置のフレームで評価して、出力と同じに（不透明で）描く。再基準化で Keyframe と Clip range は自分の fps の整数フレームに丸まる（各イベントは最大で自分の半フレーム動く）ので、ノードが層の fps のまま評価する出力と、fps が違う層ではその分だけずれうる。作業コピーが、同じ fps でノードが当てた層と同じになることは `tests/test_upstream_editor_parity.py` で確かめる。
  - エディタが描く上流の要素の id は `upstream:<層のキー>:<要素の id>`、3D の内容のスロットは `<層のキー>:scene`・`<層のキー>:sticker` とする。層のキーは、その層の `state.id`、`id` が無ければ `#` を付けた層の番号（`#0` など。振る id は `#` を含まない。`pano_upstream.js` の `upstreamLayerKeys`）。上流で層が増減しても、キーは層についていく。同じ `id` の層が二つ以上あるとき（Studio を複製したとき）は、最も下流の層がその `id` をキーにし（下流の上書きを当てる層と同じ）、ほかは `#` 付きの番号に戻る。
  - エディタでの編集：作業コピーの Sticker は `id` に上の `upstream:<層のキー>:<要素の id>` を持ち（元の id は `origin.id`）、自分の Sticker と同じ id の引き方で見つかる（`items.js` の `getList`・`stickerById`、選択、インスペクタ、Gizmo、タイムラインの持ち主）。`sky` の要素は 2D の当たり判定で自分の Sky と自分のペイントの後（下にあるため）、自分の Camera の枠の前に当たり、層の中では手前（後の層、大きい `z_index`）から当たる。`world` の板と 3D の `port` の Sticker は GPU の当たり判定（`pickable`・`pickBoxes`）に入り、自分のものと同じく選べる（`scene` の内容は自分のものと同じく選べず、視点の回転の中心などにだけ使う）。動かす・回す・大きさ・不透明度・インスペクタの欄・Gizmo は作業コピーを書き換え、`syncUpstreamEdits`（`editor/upstream.js`）が書き戻す。書き戻すのは Undo の段を積むとき（`pushHistory`）と状態を書くとき（`commitState`）の最初で、前の書き戻し（または作業コピーを作り直したとき）からその要素で変わったフィールドだけを、その層の `id` の記録に書く（`pano_upstream.js` の `upstreamEditedRecords`）。Lane は Keyframe ごと丸ごと、`visible`・`locked`・`clip`・`crop`・`z_index` はそのまま書き、記録が無ければ自分の Timeline fps を `fps` にして作る。記録の `fps` が自分の Timeline fps と違えば（fps を変えた後など）、先に記録を自分の fps に再基準化する（`rebaseUpstreamRecord`。基準は自分の fps に再基準化した上流の層）。触っていないフィールドは書かないので、上流の値を引き継ぎ続ける。上流の層の状態そのものと自分の `stickers` は変えない。`origin` と作業コピーの id は書かない。開いて閉じただけでは何も書かない。Undo・Redo は状態の `upstream` ごと戻し、作業コピーと比べる基準も作り直す。キーが `#` で始まる層（`id` の無い層、同じ `id` の上流の層）は上書きを持てないので、その要素は選べるがロックと同じく編集できず、インスペクタの見出しに「inherited only」を添え、「Revert to upstream」の行のツールチップに理由を出す。上流の要素の複製・画像の差し替え・重なり順の変更は何もしない（選択メニューのボタンは無効のまま場所を保つ）。消すのは下の「エディタでの消す・戻す」。インスペクタの「Transform」の見出しの右と選択の一覧に `Upstream · <層のキー>` を出す。`visible` の上書きはタイムラインの行の目のアイコンで、`locked` の上書きは選択メニューのロックで書く（インスペクタに Visible と Lock の行は無い）。選択した上流の要素の作業コピーの id は、ノードのプロパティ（`pano_editor_active.selected_sticker_id`）に残さない（`null` にする）。隠した要素は自分の Sticker と同じく選択から外れ、タイムラインのその要素の行の目のアイコンでもう一度出せる。作業コピーから書いた記録をノードの `_override_layers` が当てた層が、エディタの作業コピーと同じになることは `tests/test_upstream_editor_parity.py` で確かめる。
  - タイムラインの行：上流の層ごとの行で、Keyframe（打つ・動かす・消す・Easing）、行のポチ、Clip range、目のアイコンを作業コピーに対して操作し、上と同じ `syncUpstreamEdits` で書き戻す。上流の層の `scene` の `visible`・`clip` と `painting_visible` も、変えたフィールドだけを記録の `scene`・`painting_visible` に書く（`upstreamEditedRecords`）。エディタのタイムラインの範囲は出力の長さちょうどで、`timeline.length` が無いときの Auto の長さは、上の「Scene の組み立てと撮影の入口」の長さの規則どおり、`pano_upstream_frames` と、上書きした（記録が `clip` を持つ、またはまだ書き戻していない編集で変えた）Clip range の終わり（`upstreamOverriddenEnds`。`duration` の無いものは `port` の Sticker の素材の終わりだけを数える）を数える。出力の終わりより先へは広げない（`docs/timeline-ui.md` の「タイムラインの長さ」）。キーフレームの編集と Clip range の編集で書いた記録をノードが当てた層と、ノードが延ばす長さがエディタと一致することも `tests/test_upstream_editor_parity.py` で確かめる。
  - エディタでの消す・戻す：上流の要素を消すと（Delete キー・選択メニュー）、その層の `id` の記録の `deleted` に要素の `id` だけを加え、その要素の上書きを捨てる（記録が無ければ自分の Timeline fps で作る）。ノードは消した要素を描かず、Source も持たない（`port` の Sticker なら層の `port` を `None` にする）。エディタの作業コピーからも外れる。自分の要素と一緒に消すと Undo の 1 段にまとめる。上書きを持てない層（`#` のキー）の要素とロックした要素は消せない。インスペクタの「Revert to upstream」は要素の上書き全体か Lane 一つを記録から外す。タイムラインの層の見出しの「Revert」は層の `scene` の上書きと `painting_visible` を外し、「Restore deleted (n)」は層の記録の `deleted` を空にする。Undo の段を積むときに、今の実行結果にある層の記録から、層に無い `id` の上書きと消した記録を捨てる（結果に無い層の記録は残し、開いて閉じただけでは捨てない）。エディタが消した記録と層の Revert の後の記録を、ノードの `_override_layers` が当てた層がエディタの作業コピーと同じになることは `tests/test_upstream_editor_parity.py` で確かめる。詳しくは `docs/editor-interaction.md` の「上流の Scene の表示と編集」。

### `port` の Sticker と Pose handoff

`sticker` 入力の素材の Sticker（状態 v2 の `source.kind == "port"`）の扱い。状態の形は `docs/scene-state-v2.md`。

#### `port` の Sticker が状態にないとき

`sticker` 入力が接続されているのに、状態に `source.kind == "port"` の Sticker がない場合、ノードとエディタは、その素材を次の Sticker としてリストの末尾（最も手前）に加えて扱う。2D の素材で `sticker_state` があるときは、状態に `port` の Sticker があっても実行のたびに Pose handoff を当てる（下記「`sticker_state` で届く `port` の Sticker」）。旧ノードの挙動（`nodes.py` の `_build_runtime_external_sticker` を呼ぶ、既存の外部 Sticker が見つからないときの経路）と同じである。

- `placement: "sky"`、Clip range・`opacity` などは既定値。
- `sticker` の素材が 3D（MESH・SPLAT・3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`）のときは `placement: "world"` とし、`position` は上の「`port` の Sticker が状態になければ」の項目のとおり中身の全体が ERP の正面に収まる位置（式は `docs/editor-interaction.md` の「3D の Sticker を収めて置く」）、`rotation` は 0、`scale` は `1` とする。Pose handoff（下記）は 2D の素材の Sticker だけに当てはまり、3D の Sticker には `sticker_state` を使わない（使わなかったことを警告に出す）。状態の `port` の Sticker が `sky` のまま 3D の素材がつながったときは、同じ `id` の `world` の Sticker（上の変形。`clip`・`visible`・`locked` は保ち、`sky` の Lane と Keyframe は捨てる）に置き換えて扱い、エディタも実行結果で同じように置き換える（`docs/editor-interaction.md` の「`port` の Sticker の同期」）。逆向き（`world` の `port` の Sticker に 2D の素材）は、2D の `world` の Sticker として正しいので置き換えない（`sticker_state` がないとき。あるときは配置も Pose handoff に従う）。以下の `z_index`・`direction`・`roll`・`size` の規則は `sky` のときだけ。
- `z_index` は、状態の `sky` の Sticker の最大値 + 1（Sticker がなければ `0`）。ペイントの `z_index` は数えない（旧ノードと同じ）。
- `direction`・`roll` は既定値で、`size` の `hFOV_deg` は `30`、`vFOV_deg` は素材のアスペクト比から求める。
- `sticker_state` があれば、その Camera の軌道に沿って置く（Pose handoff、ADR 0030）。Sticker の clip frame（素材の時刻）`c` の姿勢は、`sticker_state` の Camera を `c × sticker_state.fps ÷ timeline.fps` で評価した値から求める。Camera の位置が評価したすべてのフレームで原点（`|position| ≤ 1e-9`）なら `sky` の Sticker とし、`rotation` の yaw / pitch（`direction`）・roll（`roll`）と `fov`（`size` の `hFOV_deg`）にする（`sky` の Sticker は無限遠にあるので Camera の位置は要らない）。どこかのフレームで原点から離れれば `world` の Sticker とする（下記）。
  - Camera の Keyframe の範囲（全 Lane の最初の Keyframe から最後の Keyframe まで）の、状態の Timeline frame の整数ごとに評価し、`easing: "auto"` の Keyframe にする（補間に頼らず、評価した軌道そのものを渡す。Camera の回転は四元数で、Sticker の `direction` は球面上の方向と `roll` に分けて補間するので、Keyframe をそのまま写すと間のフレームがずれる。ADR 0036）。範囲は `floor(最初 ÷ r)` から `ceil(最後 ÷ r)` まで（`r = sticker_state.fps ÷ timeline.fps`）。
  - `world` の Sticker の各フレームの値：`R = world_rotation(yaw, pitch, roll)`（`core/world.py`）として、`position` は `Camera の位置 + 2 · (−R[:, 2])`（Camera の前方、距離 2）、`rotation` は Camera の yaw / pitch / roll、`scale` は `2 · 2 · tan(hFOV ÷ 2)`（距離 2 で画角いっぱいの幅）。Camera の位置から見れば、撮った絵と一致する（`tests/test_pose_handoff.py` の往復のテスト）。`z_index` は持たない。
  - Camera の `rotation`（`direction`・`roll`、`world` では `rotation` に対応）、`fov`（`size`、`world` では `scale` に対応）、`position`（`world` の `position` に対応）の Lane で、評価した時刻が `easing: "hold"` の区間にあるフレームの Keyframe は `hold` にする。Camera のカット（切り替え）が、間の姿勢を通らずに切り替わる。切り替わるのは、カットの時刻以降で最初の Timeline frame の整数である。
  - yaw と roll は、一つ前の Keyframe の値に最も近い周回の値にし、±180 をまたいでも一周戻らない。
  - 値が `1e-9` 以内で同じものは同じとみなす（同じ姿勢の Keyframe の間で、補間の誤差から密な Keyframe を作らない）。
  - 時刻は秒で合わせる。素材の時刻（`port` の Sticker の clip frame ÷ `timeline.fps`）が、Camera で撮った時刻と同じでなければならない。VIDEO（撮った Studio の `video` や、それを加工して実時間を保った VIDEO）はそのまま合う。IMAGE バッチは Timeline fps のフレームの列とみなす（ADR 0027）ので、撮った Studio と同じ Timeline fps で使う（受ける Studio の Timeline fps が違うときは、Create Video で撮った Studio の fps を付けてからつなぐ）。
  - すべての値が同じ Lane（Camera がその Lane を動かさない場合）は Keyframe を置かず、静的な値にする。Camera の各 Lane の Keyframe が一つずつ（v1 の `sticker_state` を含む）なら、すべての Lane が静的な値になり、v1 の `sticker_state` と同じ単一の姿勢になる。
  - `size` の `vFOV_deg` は、`port` の Sticker では描画時に `hFOV_deg` と素材のアスペクト比から求める（`StickerSource.derive_vfov`）。
  - レンズの曲線（ADR 0042）：配置の規則は κ によらず同じ（Camera が動かなければ `sky`、動けば `world`）。`sticker_state` の Camera の `curve` も、ほかの Lane と同じくフレームごとに評価して焼く（すべて同じなら静的な値）。`sky` では Sticker の `curve` の Lane に焼く。`world` では、評価したフレームのどれかで κ ≠ 1 のときだけ Sticker に `lens` の Lane（`curve` と `hFOV_deg`）を足して Camera の κ と hFOV を焼き（κ = 1 だけなら平らな板で、前の実行で足した `lens` も外す）、`scale` を `2 · 2 · g_κ(hFOV ÷ 2)`（`g_κ` は `docs/render-contract.md` の `lens_radius`。κ = 1 では `2 · 2 · tan(hFOV ÷ 2)`）にする。κ ≠ 1 の `world` の Sticker は、Camera の位置を中心とする半径 2 の球面の一部になり（`docs/render-contract.md` の「`world` の Sticker の板」）、同じ姿勢から撮り直すと撮った絵と一致する（`tests/test_pose_handoff.py` の `test_a_lens_shot_returns_where_it_was_shot`・`test_a_pinhole_only_moving_shot_hands_todays_plane`）。`sticker_state` を出す Studio は、Camera の `curve` の Keyframe を `camera` に入れる（`_camera_sticker_state`）。

#### `sticker_state` で届く `port` の Sticker

`sticker_state` で届く `port` の Sticker は引き継ぎと上書きで扱う（ADR 0030）。

- 2D の素材が接続され、`sticker_state` が読めるときは、実行のたびに上の規則で Pose handoff（配置と Lane）を求める（`nodes.py` の `_handoff_lanes`）。状態に `port` の Sticker があってもなくても同じで、`sticker` と `sticker_state` をつなぐ順番に結果が左右されない。上流の Camera ワークを直せば、次の実行で下流に届く。
- 状態に `port` の Sticker がなければ、上の規則で加える。あれば、その Sticker の `handoff_overrides` にある Lane は保存した値を使い、ほかの Lane は Pose handoff の Lane（値と Keyframe）で置き換える（`_inherit_handoff`）。`handoff_overrides` がない・空なら、すべての Lane を引き継ぐ。
- 配置は常に Pose handoff に従う。保存した Sticker の `placement` が違えば、同じ `id` の Sticker に置き換え、`clip`・`visible`・`locked`・`crop`・`opacity` と、新しい配置の Lane の名前の `handoff_overrides` だけを保つ。もう一方の配置の Lane と、その名前の `handoff_overrides` は捨てる。`sky` になるときの `z_index` は、加えるときと同じ（ほかの `sky` の Sticker の最大値 + 1）。
- `sticker_state` がない・読めないとき、3D の素材のときは、上の「`port` の Sticker が状態にないとき」のとおり。
- 既知のコスト：Pose handoff は保存した `port` の Sticker があっても実行のたびに求め直すので、毎回 Camera の Keyframe の範囲の Timeline frame の数だけ Camera を評価する（長い Camera ワークほど実行の前処理が長くなる）。結果はキャッシュしない。
- 実行結果の `ui` の `pano_sticker_handoff` に、求めた Pose handoff（`{placement, lanes, fps}`。`fps` は Keyframe の基準の、実行した `state_json` の `timeline.fps`）を出す（上の「実行結果の `ui`」）。ノードは状態を保存しないので、引き継いだ Lane は `state_json` に書き戻らない。
