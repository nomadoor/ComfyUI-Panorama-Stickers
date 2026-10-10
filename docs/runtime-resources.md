# メモリ・中断・キャッシュ・一時ファイル

Panorama Studio と Preview の実行が使うデバイスとメモリ、中断と進み具合、実行をまたぐキャッシュ、一時ファイルの規則を定める。

この文書が持たない規則：描画関数の 1 回の実行の中の `cache`（`docs/render-contract.md` の「入口」）、出力と `ui`（`docs/studio-node.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| デバイスとメモリ | `nodes.py` `_render_memory`・`_media_bytes`、`scene_mesh.py` `da3_device_bytes` | — | `tests/test_device_memory.py`、`tests/test_scene_mesh.py` |
| 中断と進み具合 | `progress.py` `loop_progress`、`core/temp_files.py` `removed_on_failure` | — | `tests/test_cancel_long_loops.py`、`tests/test_temp_files.py` |
| 実行をまたぐキャッシュ | `core/cache.py` `CACHE`・`MemoryCache.get_or_put` | — | `tests/test_memory_cache.py`、`tests/test_file_3d_route.py` |
| 一時ファイル | `core/temp_files.py` `TEMP_FILES` | — | `tests/test_temp_files.py`、`tests/test_file_3d_route.py` |

Python のファイルは `comfyui_pano_suite/` の下にある。

## デバイスとメモリ

- デバイスは `comfy.model_management.get_torch_device()`、空きメモリは `get_free_memory(device)` で読み、キャッシュを空けるのは `soft_empty_cache()` だけにする（旧 `PanoramaStickers` も同じ。CUDA を直接は選ばず、チャンクごとに `empty_cache` を呼ばない。メモリが足りなくなったときだけ空けてチャンクを半分にする）。
- 新しい描画のパス（`_render_frames`。最初のフレームの描画と、`video` 出力を読むたび）の最初に、見積もった量を `get_free_memory(device)` と比べ、足りないときだけ `comfy.model_management.free_memory(required, device)` を 1 回呼ぶ（`free_memory` は呼ぶたびに `gc.collect` などをするので、足りているパスでは呼ばない）。ComfyUI は空きがその量に足りない分だけモデルを降ろす。CPU では呼ばない。
- 見積もり（`_render_memory`）は次の和。粗い上側の見積もりで、細かな一時テンソルは含めない。
  - 出力の画素あたり `RENDER_FLOATS_PER_PIXEL`（32）個の float32。1 フレームの間にデバイスに同時にあるもの（光線とその向き、Sky の層ごとのサンプルと footprint・重み、背景のサンプル、World の層、色・マスク・深度）の分。32 は実測（`docs/legacy-baselines.md` の「Panorama Studio の描画の計測」）に余裕を持たせた値。光線（3 個）とその向き（2 個）、World の光線（3 個）、MESH・SPLAT の光線（各 3 個）はフレームの間も描画のパスの終わりまで持ち続けるが、これらを合わせても画素あたり約 14 個で、32 の内に収まる。
  - デバイスに上げる素材の float32 の大きさの `DEVICE_SOURCE_FACTOR`（4）倍：`bg_media` の 1 フレーム（RGB）、各層の Sticker の素材（RGBA）、アップロード済みのペイントのラスタ。4 倍は、本体と `_sample_filtered` の ripmap（本体の 3 倍まで）の分。
  - 3D の中身（`scene` と 3D の Sticker。3D の Sticker は `port` の素材と、3D ファイルの `file` の Source から読んだ SPLAT・MESH（`SceneSources.contents`））のテンソルの大きさ（`core/cache.py` の `nbytes`）。`DA3_GEOMETRY` は入力の辞書ではなく、device に置く変換後のメッシュの大きさの上限で数える（`scene_mesh.py` の `da3_device_bytes`、`nodes.py` の `_media_bytes`）。見積もりのために変換はせず、`depth` の大きさから、格子の全画素を頂点にしたメッシュ（float32 の頂点・uv・線形のテクスチャと、int64 の面）を device に置いたときの量とする。mono は 1 フレーム分、multiview は全視点を同時に置くので全視点の和にする。
- 例：ERP 4096 x 2048 の出力に 4096 x 2048 の背景と 2048 四方の Sticker 一つなら、1 GiB（画素）＋ 384 MiB（背景）＋ 256 MiB（Sticker）で約 1.6 GiB。

## 中断と進み具合

- 長いループ（エディタ用の MP4 のエンコード `encode_editor_mp4`、RGBA の PNG の書き出し `save_editor_frames`、3D のエディタ用ファイルの書き出し `write_editor_files`、VIDEO の PTS の走査、旧ノードのプレビュー MP4 `encode_frames_to_mp4`、`video` 出力の保存）は、1 ステップごとに ComfyUI の中断を確かめ、進み具合をノードのバーに出す（`progress.loop_progress()`。旧ノードは `NodeProgress` が同じことをする）。
- 中断や失敗で止まったときは、書きかけのファイル（`core/video.py` の `removed_on_failure`）を消してから例外をそのまま上げる。

## キャッシュ

- 実行をまたいで持つものは、`core/cache.py` の一つのキャッシュ（`CACHE`）にまとめる。名前空間とキーで引き、最近使っていないものから追い出す。
  - 上限は `min(CACHE_MAX_BYTES, CACHE_FREE_SHARE × (CPU の空き ＋ キャッシュが持っている量))`。既定は 4 GiB と 25%。CPU の空きは `comfy.model_management.get_free_memory(cpu)`（cgroup の上限も見る）で、`node_runtime.py` が設定する。持っている量を空きに足すのは、キャッシュが持つ分で上限が下がり続けないため。上限より大きい値は持たない（返すだけ）。
  - 中身のバイト数は `nbytes`（配列・テンソル、その入れ物、SPLAT・MESH の属性のテンソル）で数える。パスだけの項目（temp の MP4・PNG・PLY/GLB）は 0 バイトなので、項目数を `CACHE_MAX_ENTRIES`（256）で抑える。
  - 入れた配列は読み取り専用にし、`get` も `put` もコピーしない。呼び出し側は書き換えない。
- 入れるもの（名前空間）：
  - `image_file`・`image_data_url`：8 ビットの画像（Sticker の `file` の Source、アップロード済みのペイントのラスタ）を、復号した RGBA の uint8 のまま。キーはファイルならパス・更新時刻・大きさ、data URL なら URL の SHA-1（URL の文字列そのものはキーにしない）。
  - `painting_erp`：状態のペイント（ストローク、ラスタオブジェクト）を ERP に描いた結果（`render_painting_to_erp`）。1 回の描画のパスの中で同じペイントを何度も求め（ペイントとマスクを別々に、グループごとに）、1 回の実行で複数のパス（最初のフレーム、`video` 出力を読むたび）を描くので、ComfyUI の出力キャッシュでは代わりにならない。ストロークを描くのは CPU で数秒かかることがあるため残す。
  - `cutout_sampling_map`：旧 Cutout の標本化の表。
  - `video`・`scene_files`：エディタ用の MP4・PNG・PLY/GLB・`DA3_GEOMETRY` mono の深度（`.f32`）のパス。`DA3_GEOMETRY` mono の色のプロキシの MP4 は `video` に入る。
  - `da3_meshes`：`DA3_GEOMETRY` の要素ごとの、コアの変換の結果の MESH（`scene_mesh.py` の `da3_meshes`。規則は `docs/render-contract.md` の「`DA3_GEOMETRY` のメッシュ」）。キーは `mode` と、メッシュの元になるテンソルの同一性と、要素の番号。mono のエディタ用ファイルはこの変換を使わないので、mono の要素を入れるのは描画だけである。`video` の読み出しは、上限で追い出された要素だけを変換し直す（`docs/render-contract.md` の「`DA3_GEOMETRY` のメッシュ」）。
  - `splat_files`・`mesh_files`：3D ファイルから読んだ SPLAT・MESH。`scene`・`sticker` の入力の 3D ファイルも、3D ファイルの `file` の Source も、エディタ用ファイルの問い合わせ（`docs/studio-node.md`）も、同じキー（パス・更新時刻・大きさ）で引く。同じキーを同時に求める呼び出し（実行中のプロンプトと経路）は、キーごとのロックで待ち合わせ、1 回だけ読む（`MemoryCache.get_or_put`）。`scene_files` も同じく 1 回だけ書く。
- 持たないもの：
  - 旧 `PanoramaStickers` の背景のバッチ。プレビューの MP4 を作る間だけ持つ。
  - 旧 Cutout のペイントの描画結果（本番の呼び出し元がない）と、アップロード済みのペイントの拡大縮小の結果（元の画像は `image_file` にあり、拡大縮小はパスごとに一度で軽い）。
- 素材の型：8 ビットの画像から読んだもの（Sticker の `file` の Source、アップロード済みのペイント）は uint8 のまま持ち（`StickerSource.rgba`、`load_painting_layer_payload` の戻り値）、使うところで 0〜1 の float32 にする（GPU では uint8 で上げてからデバイスで 255 で割る。`core/math.py` の `unit_float`・`unit_float_tensor`）。元の値が 8 ビットなので、値は float で持っていたときと同じになる。IMAGE の入力（float のテンソル）は float のまま持つ。

## 一時ファイル

- エディタのために temp に書くファイル（エディタ用の MP4・RGBA の PNG・PLY/GLB、旧ノードのプレビュー MP4、`video` 出力のストリームソース、Panorama Studio の出力 ERP の PNG（`core/video.py` の `save_output_png`。ノード上の表示用、元の大きさ））は、`core/temp_files.py` の `TEMP_FILES` に登録する（書き終えたら `TEMP_FILES.writing` / `add`）。ComfyUI は temp を起動時と終了時にしか消さないので、合計が `TEMP_MAX_BYTES`（既定 5 GiB。モジュールの定数）を超えたら、最近使っていないものから消す。
  - 3D ファイルの `file` の Source のエディタ用ファイルの問い合わせ（`docs/studio-node.md`）が実行の外で書いた PLY/GLB も登録する。実行の外で書いたので記録の実行は `None` で、下の保護は受けず、上限を超えれば古いものから消える。後の実行の `ui` が指せば（`entry_from_path`）、その実行の間は残る。エディタは消えたファイル（404）を問い合わせ直す。
  - 今の実行（ComfyUI のプロンプト。`comfy_execution.utils.get_executing_context()` の `prompt_id`、`node_runtime.py` が設定する）が書いたファイルと、今の実行の出力の `ui` が指したファイル（`entry_from_path` を通ったもの）は、その実行の間は消さない。上限を超えていても残す。
  - 消したファイルをキャッシュが指していても、次に要るときに作り直す（キャッシュはファイルがあるかを確かめる。`SceneVideo` のストリームソースも同じ）。
  - 消せないファイル（Windows でブラウザが再生中の MP4 など。`unlink` の `OSError`）は登録と合計に残し、次に書いたときにもう一度消す。消せないことで実行は失敗しない。書きかけのファイルを消すとき（`removed_on_failure`）も同じで、元の例外をそのまま上げる。旧ノードのプレビュー MP4 は、エンコーダの試行のループを抜けてから登録する（登録の処理をエンコーダの失敗と取り違えないため）。
- 登録したファイルの `ui` の項目には `"pano_evictable": true` を足す。ほかの項目（`filename`・`subfolder`・`type`・`storage`・`format`）は変えない。前の実行の `ui` を表示しているエディタがこの印の付いたファイルを開けなかった（404）ときは、「ファイルが消えたので、もう一度実行してください」と出せる。フロントエンドの表示はまだない。また、入力を変えずに実行し直すと ComfyUI はノードの出力をキャッシュから返し、`execute` が走らないので、消えたファイルを指す前の `ui` がそのまま返る（ファイルは書き直されない）。入力のどれかを変えて実行するまで、そのファイルは開けない。
  - 対象のキー：`pano_videos`・`pano_input_videos`・`pano_sticker_input_videos`・`pano_sticker_input_frames`・`pano_scene_files`・`pano_sticker_files`・`pano_output_erp` と、上流の層の同じキー（`pano_upstream_*`・`pano_upstream_layers[].ui`）。
- 入力ディレクトリの VIDEO で、エディタがそのまま扱えるもの（`docs/studio-node.md` の「そのまま使う」の条件を満たす `.mp4`）は temp に複製せず、`{"filename", "subfolder", "type": "input", "storage": "input", "format": "video/mp4"}` で直接指す。登録しないので `pano_evictable` は付かない。
  - `type` を外して `storage` だけにはできない：フロントエンドの `pano_comfy_media.js` の `comfyImageEntryToUrl` は `type` だけを読む（`storage` を先に読むのは `pano_preview_previewnode.js` だけ）。そのため、ComfyUI を `--enable-assets` で起動したときは、コアの `comfy_execution/asset_enrichment.py` が `type` の付いた `ui` の項目をすべてジョブの出力として登録し、この入力の MP4 も実行のたびに、その実行の出力として登録し直される（同じパスの前の記録は missing になる）。既定（assets なし）では影響はない。
- `ui` の項目の `subfolder` は、ディレクトリの直下のファイルでは `""`。
- RGBA の IMAGE バッチの `pano_sticker_input_frames` は 1 枚ずつの PNG で、長いバッチでは PNG の数と大きさが増えるが、登録の上限で抑える。
- `DA3_GEOMETRY` mono と `MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル（`docs/studio-node.md` の「`DA3_GEOMETRY` mono のエディタ用ファイル」と「`MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル」。量は同じ）は、1 フレームあたり `W × H × 4` バイトの深度のファイル（1080p で約 8.3 MB。`keep` は値の `> 0` で表し、マスクのファイルは持たない）と、全フレームで 1 つの色のプロキシの MP4。1080p × 314 フレームで約 2.6 GB（約 2.4 GiB）と MP4 で、`TEMP_MAX_BYTES` の中に収まる（フレームごとの GLB では約 13 GB だった。実測）。同じ大きさの別の入力をもう一つ実行すると、上限を超えた分の古いファイルから消える。
  - 4K（3840 × 2160）は 1 フレーム約 33.2 MB で、314 フレームで約 10.4 GB（約 9.7 GiB）になり、`TEMP_MAX_BYTES` を超える。実行の間は消さないが、実行の後に temp に書くたびに古いフレームから消えるので、エディタがそのフレームを読むと 404 になりうる（そのときの表示は `docs/threejs-spark-integration.md` の「空間の表示」の既知の挙動。実行し直すと書き直す）。

## エディタのメモリの目安

規則の owner は `docs/threejs-spark-integration.md`（「空間の表示」の大きさの上限と「`DA3_GEOMETRY` mono の深度のグリッド」）。ここには量の目安だけを書く。

- `scene` と 3D の Sticker のキューは、それぞれ読み込んだ要素を `SCENE_ITEM_BUDGET`（1.5 GiB）まで持つ。深度のグリッドの要素（`DA3_GEOMETRY` mono と `MOGE_GEOMETRY` の透視投影の列）は GPU のテクスチャ（R32F の深度、1 画素 4 バイト）として持ち、ほかの要素と同じ `SCENE_ITEM_BUDGET` で数える。1080p で 1 要素約 8.3 MB、上限まで約 190 要素（約 1.5 GiB の VRAM）になる。グリッドのジオメトリは頂点ごとの値を持たず、同じ大きさの要素で共有する。色のプロキシは動画 1 本と、止めたときの静止画 1 枚。
