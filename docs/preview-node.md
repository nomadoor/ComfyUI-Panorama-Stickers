# Preview ノード（`PanoramaPreviewNode`）

Preview ノードの入力と素通しの規則、旧ノードのプレビュー MP4 の音声の長さを定める。

この文書が持たない規則：Panorama Studio の出力（`docs/studio-node.md`）、`PANO_SCENE` の形（`docs/studio-node.md` の「`PANO_SCENE`」）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| Preview ノード | `nodes.py` `PanoramaPreviewSceneNode` | — | `tests/test_pano_scene_preview.py`、`tests/test_studio_upstream.py` |
| 旧ノードのプレビュー MP4 の音声の長さ | `core/video.py` `_fit_audio_to_frame_count` | — | `tests/test_preview_audio.py` |

Python のファイルは `comfyui_pano_suite/` の下にある。

- Python のクラスは `PanoramaPreviewSceneNode`。旧 `PanoramaPreview` も登録したままである（ADR 0029）。
- `source` は `io.MatchType`（テンプレート `source`、IMAGE・VIDEO・`PANO_SCENE`）で、出力は入力と同じ型の同じオブジェクトを返す。`is_output_node` は `True`。
- Timeline は `source` から Studio と同じ `_decide_timeline` で決める。IMAGE と VIDEO は既定の状態（`timeline.fps` 24）に対して決める。`PANO_SCENE` の Timeline はその `fps`・`times`・`frames`。
- IMAGE と VIDEO の実行結果の `ui` は旧 Preview と同じキー（`pano_input_images`、2 フレーム以上なら `pano_videos`・`pano_video_meta`）。`pano_video_meta` の fps は Timeline fps、`frames` は Timeline の長さ。
  - IMAGE：旧 Preview と同じく、最初の画像を保存し、バッチを MP4 にエンコードする（`encode_frames_to_mp4`。キーフレームは `EDITOR_KEYINT` フレームごと、B フレームなし）。音声はない。
- 旧ノード（`PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`）のプレビュー MP4 に入れる `audio` は、フレームの長さ（フレーム数 ÷ fps）に合わせて、長ければ切り、短ければ無音で延ばす（`_fit_audio_to_frame_count`）。伸縮はしないので、速さと音程は変わらず、先頭からフレームと揃う。
  - VIDEO：`open_video(video, "source")`（Studio と同じ）で開き、最初に復号できたフレームをプレビュー画像にし、Timeline は `frame_rate` と `times` から決める。全フレームを一括では展開しない（クロップ付きや `VideoFromFile` 以外で `open_video` が `get_components()` に落ちる場合は、それに従う）。MP4 は Studio と同じエディタの MP4（`_editor_mp4`）で、シークしやすいファイルはコアの `save_to(MP4, H264)` でストリームコピーし、それ以外はプロキシを作る。`has_audio` はコピーなら書いた MP4 に音声ストリームがあるか、プロキシなら音声を入れたかで決める。
  - プレビュー画像と MP4 のために VIDEO を 2 回開く（`open_video` と、コピーの `save_to` またはプロキシの `StreamedVideo`）。PTS の走査は `VideoIndex` を共有するので 1 回だけ。Studio の `bg_media` の VIDEO も同じ方法で MP4 を書く。
- `PANO_SCENE` のときは描画も `ui` も作らずに素通しする（層が複数ある Scene も同じ）。このノードのノード上の表示と、エディタのこのノード ID への結び付けは、`PANO_SCENE` に限らずまだない。
- `coverage` 入力は `execute` では読まない（フロントエンドのウィジェットが読む）。`PANO_SCENE` のときは `PanoSceneValue.coverage` が正で、ウィジェットの値は使わない。
- MatchType はバックエンドで型を検証しないので、`source` が IMAGE（4 次元のテンソル）・VIDEO・`PanoSceneValue` のどれでもなければ `TypeError` にする。
- 旧 Preview 用の `ensurePanoramaPreviewImageOutput`（`web_src/pano_editor_extension.js`）は、足りない `image` 出力を足す。新しいノード（`PanoramaPreviewNode`）には適用しない（適用すると MatchType の `output` とは別に `image` 出力が増える）。
