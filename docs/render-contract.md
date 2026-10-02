# 描画関数の契約

Stickers・Cutout・Preview が共有する、バックエンドの描画関数の約束を定める（#47、#52）。後続の ticket は、この文書と `comfyui_pano_suite/core/render.py` だけを前提にする。用語は `CONTEXT.md`、座標は ADR 0023、時間は ADR 0024、Scene の正は ADR 0025 に従う。

## 入口

```python
render_frame(evaluated, sources, camera, projection, *, bg, bg_key=None, bg_color, device, cache=None, bg_width=None, scene=None, scene_index=None)
# -> color (H, W, 3), mask (H, W), depth (H, W)
```

| 引数 | 内容 |
|---|---|
| `evaluated` | `evaluate_scene_state(state, frame)` の戻り値（その時刻の Sticker・`scene`・Camera の値） |
| `sources` | `SceneSources`。そのフレームの素材。`stickers`（Sticker の `id` → `StickerSource`）、`painting`（状態のペイント）、`painting_layer`（アップロード済みのペイントのラスタ。`resolve_painting_layer_payload` の戻り値） |
| `camera` | 評価済みの Camera の値。Stickers では `evaluated["camera"]`。ERP の出力は Camera の回転（`yaw_deg`・`pitch_deg`・`roll_deg`）に従って回る |
| `projection` | `Projection` |
| `bg` | このフレームの `bg_media` の画像 (h, w, C) または `None` |
| `bg_key` | `bg` を識別するハッシュ可能な値（Stickers では `bg_media` のフレーム番号）。`None` のときは背景を使い回さない |
| `bg_color` | 0〜1 の 3 つの数値 |
| `device` | 出力を置く torch の device |
| `cache` | 呼び出し側が 1 回の実行の間だけ持つ辞書（その間 `bg_color`・`device` は変わらず、`sources` は Sticker の素材のフレーム（`StickerSource.frame`）のほかは変わらない）。直前のフレームの Sky の層、Camera の向きで写した Sky、読み込んだ背景（`("bg", bg_key)`）、結果を持つ。出力の画素ごとの向き（`_view`）は持たず、要るときに作り直す。Sky の値が同じなら Sky を作り直さず、Camera の回転と `bg_key` も同じなら直前の `color`・`mask`・`depth` をそのまま返す。Sky のキー（`_sky_key`）は、表示中の `sky` の Sticker の評価済みの値（変形と不透明度）と素材のフレーム（`StickerSource.frame`、Source がなければ `None`）からなり、表示していない Sticker は `id` だけを入れる（Clip range の外で Keyframe の値が変わっても Sky を作り直さない）。Sky のキーの値と Camera の回転は小数第 9 位で丸めてキーにし、同じ値の Keyframe の間の補間の誤差では作り直さない。World の内容を奥行きで一枚にまとめた層（`world_key`。Sticker ごとの層は持たない）と、描いた `world` の Sticker の素材を `device` に置いたもの（Sticker の `id` ごとに、`StickerSource.frame` が変わったときだけ置き直し、描かなくなった Sticker の分は捨てる）も持つ。World の内容がないフレームでは両方を捨てる。World の内容があるフレームでは、Camera の位置も結果を使い回す条件に入る |
| `bg_width` | その実行の `bg_media` の画像の幅（`bg_media` がなければ `None`）。透視投影の Sky の解像度に使う。フレームごとの `bg` の有無では変えず、IMAGE バッチが Timeline より短くても途中で Sky の解像度が変わらない。Stickers・Cutout の (b) は `bg_media`（VIDEO なら最初のフレーム）の幅を渡す |
| `scene` | `scene` 入力の中身（`SceneContent`）または `None`。下記「`scene` の共通処理」 |
| `scene_index` | このフレームで描く `scene` の要素の番号。`None` なら描かない |

- 戻り値はすべて float32 で、`device` 上にある。
- `mask` はペイントで描いたマスクで、色と同じ Projection で写す。
- `depth` は Camera の位置から、その画素に見える最も近い World の内容までの距離（光線の長さ。透視投影でも Camera の前方への奥行き z ではない。前方への奥行きで表す深度（#65 の MoGe など）と比べるときは、光線と前方の軸のなす角を θ として `z / cos θ` に直す）で、World の単位で表す。World の内容がない画素（Sky だけが見える画素）は `+inf` とする。
- ファイルは読まない。素材の読み込み（`file` の Source、ペイントのラスタ）は呼び出し側が行い、`sources` に入れて渡す。

### `StickerSource`

2D の素材を読み込んだもの。`rgba` はストレートアルファの (h, w, 4)、0〜1。`crop` は Sticker の `crop`。`derive_vfov` は `port` の Source で真にし、`vFOV_deg` を `hFOV_deg` と素材のアスペクト比から求め直す（`docs/scene-state-v2.md`）。`frame` は、フレームを持つ素材（IMAGE バッチ・VIDEO）のうち `rgba` がどのフレームかを表す番号で、1 枚の画像では `0`。Source のない Sticker は描かない。

### `Projection`

| 形 | 意味 |
|---|---|
| `Projection.erp(width, height, coverage)` | ERP。`coverage` は 360 または 180。180 は Camera の前方の半球 |
| `Projection.perspective(width, height, hfov_deg, coverage=360)` | 透視投影。正方の画素のピンホールで、`hfov_deg` を幅に当てる。垂直の FOV は出力の大きさから決まる（`tan(vFOV/2) = tan(hFOV/2) × height ÷ width`）。`coverage` は、写す `bg_media` の ERP の範囲（360 または 180） |

- 出力の画素ごとの向き（光線）は、ERP・透視投影とも `core/math.py` の `ray_directions` が画素の中心を通るものとして作る（下記「World の描き方」）。背景と Sky は `_view` でこの向きを ERP の座標に直して標本化し、その ERP も画素の中心で標本化する（`grid_sample` の `align_corners=False`）。エディタ・Cutout・Stickers の画素の位置はこれで一致する。

## 重なり順と合成

`composite_frame(bg_color, bg, sky, world=(), bg_valid=None)` が合成の規則を持つ。奥から順に次のとおり重ねる。

1. `bg_color`
2. `bg_media`。不透明として扱い、`bg_color` を置き換える。ないフレームと、`bg_valid`（`bg_media` が画像を持つ画素）の外の画素は `bg_color` のまま。
3. Sky。`sky` の Sticker、ペイントのグループ、ラスタを `z_index` の順に重ね、どのグループにも属さないストロークを一番上に重ねた一枚の層（`docs/scene-state-v2.md` の「Sky の重なり順」）。
4. World の層を奥から手前へ。各層は色 (H, W, 4) と奥行き (H, W) を持ち、リストの順に `over_by_depth`（`core/world_render.py`）で一枚に畳み込む。画素ごとに、それまでに畳み込んだ層の最も近い奥行き以下なら手前に、それより奥なら奥に重ねる。同じ奥行きではリスト順を保つ（後ろのものが手前）。どの層もその画素で、それまでの層すべてより近いか遠いときは奥行きの順に並べ替えたのと同じになる。2 層の間に後から入る層は、両方の奥に重なる（全画面の層をリストの数だけ並べて持たないための近似）。そのため呼び出し側は、できるだけ奥から手前の順に渡す。

- 色はストレートアルファで、`out = src × a + dst × (1 − a)` で重ねる。半透明の Sticker やペイントは、下の層と混ざる。
- 出力の奥行きは、アルファが 0 より大きい World の層のうち最も近いもの。どの層もなければ `+inf`。
- World の層は、ストレートアルファに正規化してから渡す。レンダラーが premultiplied で描いた場合は、この境界で un-premultiply する。
- スプラットのように体積を持つ層が報告する奥行きは、「手前から積算したアルファが初めて 0.5 を超える位置」とする（#61 と #65 は同じ定義を使う）。
- 最後に色を 0〜1 に寄せる。
- この規則は `tests/test_render.py` で固定する。

## Sky の描き方

- Sky は 360 の ERP として描き、それを Projection で写す。旧ノードのオーバーレイと同じ方法で、Camera の回転が 0 のとき旧ノードの基準画像（`tests/fixtures/legacy_goldens/`）を再現する（`tests/test_stickers_scene_node.py`）。
  - 360：出力と同じ大きさで描く。
  - 180：幅を出力と同じにした 2:1 の ERP で描く。
- 写し方：出力の画素ごとに、Camera から見た向き（出力の ERP の経度・緯度）を Camera の回転（`core/math.py` の `camera_basis`）で Scene の向きに直し、その向きの Sky と背景を双線形に標本化する。180 の出力は Camera の前方の半球（経度 −90°〜90°）だけを写す。Sky の色はアルファを掛けた状態で標本化する。経度の継ぎ目は反対側の列とつないで標本化する。
- 背景と Sky は無限遠にあるので、Camera の位置では変わらない（ADR 0023）。MASK もペイントと同じく Camera の回転に従う。
- Sky（`sky` の Sticker とペイント）と MASK は全方向にあり、どの向きの Camera でも写す。
- 360 の出力で Camera の回転が 0 のときは、向きの計算と標本化を飛ばし、描いた Sky と背景をそのまま使う（背景は出力と大きさが違えば引き伸ばす）。
- `sky` の Sticker の描画は `core/stickers.py`、ペイントは `core/display_layers.py` と `core/painting.py` の既存の処理を使う。
- Sky の層の並べ方は、旧ノードと同じ `core/display_layers.py` の `compose_display_list_to_overlay_rgba` で行う。Sticker とペイントを交互に重ねた場面は、基準画像 `stickers_paint_interleaved` で固定している。
- `z_index` は Sticker の Source ではないが、`crop` と同じく描画に要る静的な値なので、`StickerSource` に入れて渡す（評価関数の戻り値は変えない）。
- 透視投影の Sky は 2:1 の 360 ERP で描き、その幅は次の大きいほうを、旧 Cutout と同じく 4096 までに抑えたものとする。8192 では CPU で Sky を描き直すたびに約 7 秒・3GB、GPU で約 2GB を使い、1MP の出力でも hFOV 75° 以下で上限に届くためである。
  - 画素の細かさが出力の中央の画素とほぼ同じになる幅（`π × 出力の幅 ÷ tan(hFOV/2)`）を 2 のべき乗に切り上げたもの（64 以上）。FOV をアニメーションさせても、この幅が変わるときだけ Sky を描き直す。
  - `bg_media` があるとき、その画素の細かさの 360 の幅（`bg_width` × 360 ÷ `coverage`）。背景より粗い Sky で Sticker やペイントがぼけないようにする。
  - Sky のキーには Projection ではなくこの大きさを入れ、Camera の向きのキーに Projection を入れる。
- 旧 Cutout は ERP の画素 i を `u = i`（画素の中心ではなく端）とみなして標本化していたので、新しい Cutout の出力は旧 Cutout から ERP の半画素ずれる（`docs/legacy-baselines.md`）。
- `bg_media` は `coverage` の範囲の ERP とみなし、Sky と同じく Camera の向きで写す。360 では 360 の ERP、180 では旧ノード・Cutout と同じく Scene の前方（経度 −90°〜90°）の半球の ERP とする。180 の出力で、Camera を回して `bg_media` の半球の外が見える画素は、`bg_media` がない画素として `bg_color` になる。Sky と MASK はその上にも描く。出力の範囲が Camera の前方の半球だけであることは変わらない。

## World の描き方

`core/world_render.py` が持つ（#59）。位置は World の glTF 座標、角度はパノラマの規約で、両者の間は `core/world.py` の `world_rotation` だけでつなぐ（ADR 0023）。

- 出力の画素ごとに、Camera の位置から画素の中心を通る光線を作る（`core/math.py` の `ray_directions`）。ERP は Sky と同じ経度・緯度（180 は Camera の前方の半球）、透視投影は `hfov_deg` を幅に当てた正方の画素のピンホールとする。Sky の向き（`_view`）も同じ関数で作る。
- 各内容は、ストレートアルファの色 (H, W, 4) と距離 (H, W) の層として描き、描くたびに `over_by_depth` で一枚に畳み込む（`world_layer`）。層の順は `scene` の中身、続いて `world` の Sticker を Camera の位置から `position`（板の中心）までの距離の遠い順（同じ距離では状態の順）。画素ごとの距離が同じときは、中心が近い Sticker、次に状態の順で後ろの Sticker が手前になる。交わらない板どうしは、これで奥行きの順と一致する。`scene` の中身は画素ごとに奥行きが変わり並べ替えられないので最初に畳み込み、その手前と奥に Sticker が重なる画素では上記の近似が残る。まとめた一枚を `composite_frame` に渡す。背景と Sky は World の層より常に奥になる。
- 距離は光線の長さ（上記 `depth`）。

### `world` の Sticker の板

- Sticker の `position` を中心とする平らな板で、`world_rotation(yaw, pitch, roll)` の右・上の軸に沿って広がり、後ろの軸（ローカルの `+Z`）の向きを向く。回転 0 の板を回転 0 の Camera の正面に置くと、Camera の方を向き、素材が正立して見える。
- 幅は `scale`（World の単位）、高さは `scale` × 切り抜いた素材の高さ ÷ 幅（画素の数で数える）。`crop` の範囲を板全体に貼る。範囲の幅か高さが 0 の Sticker は描かない。
- 両面に描く。裏からは左右が反転して見える。
- 素材は双線形に標本化する。`sky` の Sticker と同じく、端の画素の中心を板の端に合わせ（`align_corners=True`）、アルファを掛けた状態で標本化してから戻す（透明な画素の色がにじまない）。不透明度はアルファに掛ける。
- TODO(#61)：いまは Sticker ごとに出力の全画素で光線と板の交点を求める。#61・#62 の前に、板が写る範囲（bbox）に限って描く。
- 板の縁はアンチエイリアスしない（`sky` の Sticker と同じ）。光線が板と平行な画素と、Camera の後ろにある板は描かない。
- Source を持たない Sticker、`active` でない Sticker、不透明度 0 の Sticker は描かない。VIDEO と IMAGE バッチの素材は `sky` と同じく `StickerSource.frame` のフレームを描く。

### `scene` の共通処理

SPLAT（#61）と MESH・MoGe（#62）のレンダラーは、`SceneContent(count, render)` を作ってラスタライズだけを受け持つ。

| 処理 | 持ち主 |
|---|---|
| `scene` の変形（位置・回転・スケール）と Keyframe | `evaluate_scene_state` の `scene` を、`world_render.py` が Camera に逆に掛ける |
| Clip range | `evaluated["scene"]["active"]` が偽のフレームでは描かない |
| バッチと出力フレームの対応 | `sticker_media.py` の `batch_index`（IMAGE バッチの `sticker` と同じ規則）。(a) の `_decide_timeline` が `clip_frame`（`frame − (start − in)`）と Timeline fps から決め、`frames` の 4 つ目に入れる。`render_frame` の `scene_index` にはこの番号を渡し、`PANO_SCENE` を使う側も同じ番号を使う |
| 出力の長さ | `duration` が `null` で要素が 2 つ以上のとき、`start − in + 要素の数` の Timeline fps のフレームを Clip の終わりとする（(a)） |
| 奥行きでの合成 | `over_by_depth`（`world_layer` と `composite_frame`） |

- `render(view, index, device)` は、要素 `index` を `view`（`CameraView`）から見た層を返す。`view` は `scene` 自身の座標（`scene` の変形を外した glTF 座標）にある Camera で、`position` (3,)、`rotation`（`world_rotation` と同じく列が右・上・後ろの 3 × 3）、`projection` を持ち、`view.rays(device)` で画素ごとの光線の向き (H, W, 3) を返す。SPLAT のラスタライザが内部パラメータ（焦点距離・主点）を要するなら、#61 で `CameraView` に加える。
- 戻り値はストレートアルファの色 (H, W, 4) と、`view.position` からの距離 (H, W)（`scene` 自身の単位、空の画素は `+inf`）。World の距離へは `scale` を掛けて直す。
- `scene` の変形は、`scene` 自身の座標の点 `x` を World の `position + scale × world_rotation(yaw, pitch, roll) @ x` に置く。
- `render` は、同じ `view` と `index` に対して同じ層を返す（使い回しの条件は `view` の値と `index` だけ）。

## まだ描かないもの

統合ブランチ内の暫定として、次は `NotImplementedError` にする。

| 内容 | 解消する ticket |
|---|---|
| `scene` 入力の SPLAT・スプラット系の 3D ファイル / MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`（`nodes.py` の `_scene_content`） | #61 / #62 |
| Camera のいずれかの Lane に Keyframe が 2 つ以上ある `sticker_state`（v2。Drone で撮ったものは常にこれに当たる）。軌道ごとの Pose handoff | #65 |

## Stickers ノード（`PanoramaStickersNode`）

`execute` は次の三つの入口に分かれる。後続の ticket は、それぞれ一つだけを変更する。

| 入口 | 関数 | 役割 | 変更する ticket |
|---|---|---|---|
| (a) | `_decide_timeline` | Timeline fps と、出力フレームごとの評価する Timeline frame・描く `bg_media` のフレーム・`sticker` の素材のフレーム・`scene` の要素 | #53、#56 |
| (b) | `_render_timeline` | フレームごとに状態を評価し、(a) が選んだ `sticker` の素材のフレームを `port` の Sticker の Source に、`scene` の要素を `scene_index` にして、`render_frame` を呼ぶ。Camera と Sticker の Keyframe はここでフレームごとに評価される。描く Camera と Projection は、評価した状態から呼び出し側の `capture` が決める（Stickers は状態の Camera と ERP、Cutout は Cutout の Camera と透視投影） | #55、#56、#58、#64 |
| (c) | `execute` の末尾 | 出力（IMAGE・MASK・AUDIO・fps・`PANO_SCENE`）を組み立てる。ADR 0027 で `first_frame`・`first_frame_mask`・`video`・`PANO_SCENE` に変える | #53、#57 |

- Timeline fps は、背景 VIDEO の平均フレームレート（コアの `get_frame_rate()` と同じ `average_rate`、丸めない）、なければ `sticker` の VIDEO の平均フレームレート、どちらもなければ状態の `timeline.fps` とする。fps 出力はこの値の float である。
- 出力の長さは「状態の `timeline.length` → 背景 VIDEO のフレーム数 → 背景の IMAGE バッチ（2 枚以上）の枚数 → Sticker と `scene` の Clip range の終わりのうち最も遅いもの（非表示の Sticker と、未接続の `scene` の Clip range も含む。`duration` が `null` で、`sticker` が IMAGE バッチか VIDEO の `port` の Sticker は、素材の終わり `start − in + 素材の長さ` を終わりとする）→ Camera の各 Lane の最後の Keyframe のうち最も遅いものの次のフレーム → 1」の順で決める。状態から決める長さは `timeline.fps` の Timeline frame なので、秒を保って Timeline fps のフレーム数に直す（`floor(x × Timeline fps ÷ timeline.fps + 0.5)`、1 以上）。
- 各出力フレームは、次の時刻 `t` 秒について `t × timeline.fps` の Timeline frame で評価する（`docs/scene-state-v2.md`）。
  - Timeline fps を決めた VIDEO（背景 VIDEO、なければ `sticker` の VIDEO）のフレーム：そのフレームの PTS。切り出し範囲の最初のフレームを 0 秒とする。可変フレームレートや、1ms の timebase で丸められた PTS（mkv・webm の 29.97 fps など）でもフレームごとの PTS を使い、出力は等間隔（fps 出力）に並べる。評価する Timeline frame が、最も近い整数との差がその VIDEO の PTS の量子化の幅の半分（`time_base ÷ 2 × timeline.fps`）以内なら、その整数に寄せる。Clip range の端や `hold` の Cut が、丸められた PTS で 1 フレーム遅れないようにするためである。`MaterializedVideo` の時刻は厳密なので、幅は 0 とする。
  - その VIDEO が終わった後：最後のフレームの時刻から Timeline fps の間隔で進める。背景 VIDEO なら、背景は描かず `bg_color` になる。
  - それ以外：出力フレームの番号 ÷ Timeline fps。
- MASK 出力は、すべてのフレームのマスクが最初のフレームと同じとき（ペイントのマスクがない・Camera が回らないなど）、その 1 枚を `expand` で全フレームに見せたもの（バッチの stride が 0、形は (N, H, W)）とし、フレームごとの領域を持たない。マスクが最初のフレームと違うフレームが出た時点で、フレームごとの領域を確保する。stride が 0 の MASK を受けた下流は、書き換える前に複製する（ComfyUI のノードは入力を書き換えない）。
- 背景の IMAGE バッチは出力フレームと 1 対 1 に対応し、バッチより長い出力では、背景が終わった後は `bg_color` になる。1 枚の IMAGE はすべてのフレームに描く。
- `bg_media` と `sticker` の VIDEO の読み方（`core/video_source.py`）
  - `VideoFromFile` で、`get_dimensions()` がストリームの大きさと一致するもの（クロップがない）は、`get_stream_source()` を PyAV で開き、`get_active_trim_window()` の範囲を 1 フレームずつ読む（`StreamedVideo`）。先にパケットだけを読んで PTS を集め、フレーム数と時刻を決める。入力側のメモリは長さに比例しない（`tests/test_stickers_scene_video.py` で計測する）。
  - 復号したフレームは、パケットで集めた PTS と突き合わせる。シークの後に参照を失った B フレームなど、復号されなかった PTS のフレームは、ログに警告を出して `bg_color` にする。ほかのフレームの時刻はずらさない。パケットにない PTS のフレームは捨てる。1 枚も復号できないときは `ValueError` にする。出力の大きさ（`auto`）は、最初に復号できたフレームで決める。
  - 復号のエラー（`InvalidDataError`）は、コアのように読み飛ばさず、そのままエラーにする。
  - 画素の変換（8 ビットの形式は `rgb24`、それ以外は `gbrpf32le`、幅が 32 の倍数でないときの端の引き伸ばし）と回転のメタデータの扱いは、コアの `get_components()` と同じにし、同じ値になることをテストで確かめる。
  - それ以外の VIDEO（クロップ付き、`VideoFromComponents`、`VideoFromList` など）は `get_components()` で一括で読む（`MaterializedVideo`）。
- AUDIO は背景 VIDEO の音声を、切り出し範囲の始まりから「出力のフレーム数 ÷ fps」秒で切ったもの（サンプル数は `int` で切り捨て）。音声はコアと同じく切り出し範囲の始まりから始まり、最初のフレームの PTS からではない。形はコアの AUDIO と同じ `{"waveform": (1, C, T), "sample_rate"}`。背景に VIDEO や音声がないときは `None`（音声なし）とする。
- `sticker` の素材の時間（`port` の Sticker）は `sticker_media.py` の `PortMedia` が持ち、(a) と (b) が共有する。
  - Sticker の素材の時刻は、評価関数の `clip_frame`（`frame − (start − in)`）÷ `timeline.fps` 秒とする。素材の先頭は Timeline 上の `start − in` に来る。
  - 1 枚の IMAGE は、Clip range の間ずっと同じ画像を描く。
  - IMAGE バッチは PTS を持たない、Timeline fps のフレームの列とみなす。最も近い画像（`floor(clip_frame × Timeline fps ÷ timeline.fps + 0.5)` 枚目）を描き、`0` 以上枚数未満の外では描かない。既定の Clip range では出力フレームと 1 対 1 に対応する。PTS が丸められた背景 VIDEO でも、一定のフレームレート（CFR）ならずれない。可変フレームレートの背景では 1 対 1 にならない。
  - VIDEO は、切り出し範囲の最初のフレームを 0 秒とした各フレームの PTS を使い、実時間で再生する（fps を合わせ直さない）。素材の時刻以前に始まる最後のフレーム（PTS ≤ t）を描く。比較の許容差は、`FRAME_EPSILON`、その VIDEO の PTS の量子化の幅の半分、出力の時刻を決めた VIDEO の幅の半分のうち最も大きいものとし、Timeline frame で使う（`clip_frame + 許容差` 以下の PTS）。最後のフレームは平均フレームレートの 1 フレームの間続き、その後は描かない（Clip range 外の保持は #47 の範囲外）。
  - Clip range の外（`active` が偽）では描かず、素材も読まない。VIDEO はフレームを順に 1 枚ずつ読み、入力側のメモリは長さに比例しない。復号できなかったフレームは、ログに警告を出して描かない。
  - `PortMedia` は VIDEO を開いたものではなく VIDEO の入力そのものを持ち、Timeline を一通り描くたびに開き直す（`StreamedVideo` は前へ一度だけ読むもので、後戻りの要求は `ValueError` にする）。
  - 同じ `BytesIO` の VIDEO を `bg_media` と `sticker` の両方につないでもよい。`core/video_source.py` は container ごとに同じバイト列の別の読み手を作る（中身は写さない）。
  - 素材のフレームは `StickerSource.frame` で Sky のキーに入るので、Sky は素材のフレームが変わったときだけ作り直す。
  - `file` の Source（エディタで投入した素材）は、今は画像だけで、時間を持たない。
- `scene` の入力は `_scene_content` で `SceneContent` にする。いまはどの型も未対応であることを示すエラーにする（#61・#62 が加える）。`sticker` の MESH・SPLAT・3D ファイルも同じくエラーにする（#63）。
- (b) は、`render_frame` が直前と同じテンソルを返したフレームを、device から再び転送せず、出力の直前の行から写す。
- `is_output_node` は `True`（#75）。ComfyUI は `ui` を出力ノードでなくても `executed` で送るが、出力ノードでなければ下流に出力ノードがつながっていないと実行されず、エディタとノード上の UI が素材を受け取れない。出力ノードにすると、キューに入れるたびに実行され（変わっていなければキャッシュの `ui` が送られる）、素材の表示が下流の接続に左右されない。
- 実行結果の `ui` は、エディタとノード上の UI に入力の素材を見せるためのもので、キーは旧ノードと同じ（#75）。

  | キー | 内容 |
  |---|---|
  | `pano_input_images` | `bg_media` の最初のフレーム |
  | `pano_input_videos` / `pano_input_video_meta` | `bg_media` が 2 フレーム以上のときの一時 MP4 とメタ情報（`fps`・`frames`・`duration`・`has_audio`） |
  | `pano_sticker_input_images` | `sticker` の最初のフレーム。`sticker` の MP4 は出さない（エディタでの再生は Timeline と一緒に #73 の後で加える） |
  | `pano_sticker_input_pose` | 状態に `port` の Sticker がなく、ノードが加えたときの姿勢（`yaw_deg`・`pitch_deg`・`roll_deg`・`hFOV_deg`）。エディタが同じ姿勢で状態に加えるために使う |
  | `pano_sticker_warnings` | 警告（読めない `file` の Source、`bg_media` なしの `auto`）。ログにも出す |

  - 一時 MP4（ADR 0018）：VIDEO は、Preview と同じく VIDEO 自身の `save_to(MP4, H264)`（`core/video.py` の `save_video_to_mp4`）で temp に書き、全フレームを展開して再エンコードしない。メタ情報の `fps` は VIDEO の平均フレームレート、`frames` は切り出し範囲のフレーム数。IMAGE バッチは `encode_frames_to_mp4` でエンコードし、`fps` は Timeline fps とする。1 フレームの素材は MP4 を作らない。音声は `bg_media` の VIDEO が持つものだけが MP4 に入る。サムネイルの帯は作らない（エディタが MP4 から作る）。
  - 出力ノードは `state_json` が変わるたびに実行されるので、MP4 は入力ごとに 1 度だけ作り、`NODE_RUNTIME` の `video` キャッシュから再利用する。IMAGE バッチは旧 Cutout と同じくテンソルの同一性と fps、VIDEO は `open_video` がストリームのまま開いたもの（クロップのない `VideoFromFile`）ならファイルのパス・更新時刻・トリム範囲、それ以外は VIDEO オブジェクトの同一性をキーにする。キーのためにファイルを開き直さない。
  - キャッシュから追い出した MP4 のファイルは消さない。追い出しは次に要るとき作り直すかを決めるだけで、ファイルは ComfyUI が起動時と終了時に消す temp に残る。ジョブ履歴やキャッシュされた `ui` が同じファイルを指し続けるためで、ComfyUI の PreviewVideo と同じ扱いである。
  - エディタの背景 VIDEO は、実行結果が新しい間だけ読み込む。`PanoramaStickersNode` では動画の再生バーを出さず、エディタを開いたまま実行すると読み込み直して再生ヘッドのフレームを出し、タイムラインの ▶ と再生位置の移動も読み込みと再生を行う（`docs/timeline-ui.md`）。背景の入力をつなぎ変えると、次の実行まで VIDEO を外す。
  - 実行結果がどの入力から作られたかは、実行が終わったときに `/api/jobs/{prompt_id}` を一度読んで、そのワークフローの接続から記録する。ブラウザを再読み込みしたときは、同じワークフローの最近のジョブから自ノードの出力を表示用に取り戻す（状態は書き換えない）。サーバーを再起動して履歴と temp が消えた後は、実行し直す。
  - エディタとノード上の UI は、実行結果が新しいかを入力の接続（link）の変化だけで判断する。接続を変えずに上流の画像を差し替えると、再実行するまで古い素材が表示される。
  - `sticker_state` が接続されているときは、`port` の Sticker は実行結果に姿勢が届くまで、枠も含めて表示されない。
  - 出力（IMAGE）のプレビュー MP4 は作らない。Stickers の出力を表示するのは Preview（#76）で、旧ノードの `pano_videos` を読むフロントエンドもない。
- `file` の Source は `core/stickers.py` の `load_source_rgba` で読み、`folder_paths` のディレクトリの中にあるものだけを読む。読めないときは、その Sticker を描かずに警告を出す（ログと実行結果の `pano_sticker_warnings`）。

## `PANO_SCENE`

Stickers の `PANO_SCENE` 出力は、`nodes.py` の `PanoSceneValue`（frozen dataclass、比較は同一性）である（#57）。Scene の正は `state_json` だけで、この値は実行のたびに状態と入力から導く派生値である（ADR 0025）。フレームは描画せず、`PANO_SCENE` を入れ子に持たない。Cutout（#64）、Preview の表示（#76）、3D の撮影（#61）は、次のフィールドだけを前提にする。

| フィールド | 内容 |
|---|---|
| `state` | `load_scene_state(state_json)` の戻り値。`sticker` の入力があり、状態に `port` の Sticker がないときは、Stickers が描いたときと同じく `port` の Sticker を加えたもの |
| `sources` | `SceneSources`。`file` の Source は読み込み済み。`port` の Sticker の Source は `port` の最初のフレームを持つテンプレートで、`port` があるときは Stickers の (b) と同じく、フレームごとに `port.frames()` と `frames` の `port` の番号（`port.index_at` の結果）で取り出した素材に差し替えてから `render_frame` に渡す |
| `port` | `sticker` の素材の `PortMedia`（`sticker_media.py`）、または `None`。開いた stream ではなく VIDEO の入力そのものを持ち、`frames()` を呼ぶたびに開き直すので、Preview と Cutout など複数のノードが同じ `PANO_SCENE` を使っても読み取り位置を取り合わない |
| `bg_media` | `bg_media` の入力そのもの（IMAGE のテンソル、VIDEO のハンドル、または `None`）。VIDEO は開いた状態で渡さないので、使う側が `sticker_media.py` の `open_video` で開き直す |
| `scene` | `scene` の入力そのもの（SPLAT・MESH・3D ファイル・`MOGE_GEOMETRY`、または `None`）。いまは `scene` を受け付けないので常に `None`。描く側は `_scene_content` で `SceneContent` にし、フレームごとに `frames` の `scene` の番号を `scene_index` として `render_frame` に渡す（Stickers の (b) と同じ） |
| `coverage` | `bg_media` の範囲（360 または 180） |
| `bg_color` | 0〜1 の 3 つの数値のタプル |
| `fps` | Timeline fps（float）。fps 出力と同じ値 |
| `frames` | `_decide_timeline` が決めた出力フレームごとの `(評価する Timeline frame, 描く bg_media のフレーム番号または None, port のフレーム番号または None, scene の要素の番号または None)` の 4 つ組のタプル。`scene` の番号は `scene` の入力がないとき `None` で、Clip range の外のフレームでも番号を持つ（描くかは `evaluated["scene"]["active"]` で決める）。長さが出力のフレーム数 |

- 出力の解像度は入れない。撮影する側がそれぞれの規則（`output_preset`・`output_megapixels` など）で決める。
- 同じ入力からは同じ内容の値になる（乱数や時刻を含まない）。ComfyUI のキャッシュが効くとき、下流には前回の同じ値が渡る。
- 下流のノードは同じオブジェクトを共有するので、`state` や `sources` を書き換えない。
- 3D の Sticker を受けるようになったら（#59）、その素材をここに加える。

## Cutout ノード（`PanoramaCutoutNode`）

- Python のクラスは `PanoramaCutoutSceneNode`。旧 `PanoramaCutout` は #78 まで登録を残す。
- 入力は `source`（`io.MultiType`：IMAGE・VIDEO・`PANO_SCENE`）、`coverage`、`output_megapixels`、`state_json`。出力は rect_image（IMAGE）、sticker_state（STRING）、mask（MASK）、AUDIO、fps（FLOAT）の順（ADR 0027 で `first_frame`・`sticker_state`・`first_frame_mask`・`video` に変える）。出力は入力の素通しではないので `MatchType` は使わない。
- `is_output_node` は `False` で、実行結果の `ui` は持たない。エディタとノード上の UI の結び付けは #77 で行う。
- `state_json` は状態 v2（v1 も読む。旧 Cutout の `shots[0]` は Camera になる。`docs/scene-state-v2.md`）。Cutout の Camera は `state_json` の `camera` で、Keyframe に従って動く。
- Timeline と各フレームは Stickers の (a)・(b)（`_decide_timeline`・`_render_timeline`）をそのまま使う。各フレームは `render_frame` に `Projection.perspective(幅, 高さ, Camera の hFOV, coverage)` を渡して描く。
  - IMAGE / VIDEO：ERP を Scene の向きに合った背景とみなし、Cutout の状態を Scene として描く（旧 Cutout と同じく、状態の `sky` の Sticker とペイントを重ねる）。Timeline は Cutout の状態に対して `_decide_timeline` で決める（VIDEO は `open_video(source, "source")`）。`coverage` は ERP の範囲。`bg_color` は黒で、180 の ERP の半球の外は黒になる（旧 Cutout は Sky も含めて黒にしていたが、Sky は全方向に描く）。
  - `PANO_SCENE`：その `state`・`sources`・`port`・`bg_media`・`coverage`・`bg_color` と Timeline（`fps`・`frames`）で描き、Camera だけを Cutout の状態から取る。Cutout の Camera の Keyframe は Cutout の状態の `timeline.fps` で読み、秒を保つ（`frame × Cutout の timeline.fps ÷ Scene の timeline.fps`）。Cutout の状態の Sticker・ペイントは使わない（Scene の正は Stickers の状態、ADR 0025）。`coverage` 入力は使わない。
- 出力の大きさは、旧 Cutout と同じく `calculate_dimensions_from_megapixels` で `output_megapixels` と画面比（`camera.aspect`）から決める（8 の倍数、長辺は `nodes.py` の `CUTOUT_MAX_OUTPUT_SIDE` の 4096 まで。旧 Cutout と共有する）。FOV をアニメーションさせても大きさは変わらない。画素は正方なので、垂直の FOV は丸めた大きさから決まり、`camera.aspect` から決まる値とわずかに違うことがある。
- FOV は旧 Cutout と同じく、v1 の `shots[0]` の `hFOV_deg`・`vFOV_deg` を 1〜179 に寄せ、`roll_deg` だけを読む（`rot_deg` は読まない）。shot の FOV が 0 のとき、エディタは 90° / 60° とみなすが、ノードは 1° に寄せるので、この場合だけエディタの表示と出力が一致しない（`docs/threejs-spark-integration.md`）。
- AUDIO と fps は Stickers と同じ。背景 VIDEO（IMAGE / VIDEO の `source` が VIDEO のとき、`PANO_SCENE` ならその `bg_media` が VIDEO のとき）の音声を「出力のフレーム数 ÷ fps」秒で切ったもの、なければ `None`。fps は Timeline fps。
- `sticker_state` は v2（`docs/scene-state-v2.md`）。`fps` は Timeline fps、`camera` は Cutout の Camera の Lane ごとの Keyframe を Timeline fps に再基準化したもの（`rebase_scene_state`）。Keyframe のない Lane は Camera の値を持つ `frame: 0` の Keyframe 一つ。`source_aspect` は出力の幅 ÷ 高さ。
- World の内容も Stickers と同じく描く。IMAGE / VIDEO では Cutout の状態の `world` の Sticker、`PANO_SCENE` ではその `state` の `world` の Sticker と、`scene` 入力の中身（`_scene_content(scene)` の `SceneContent`。各フレームの要素は `frames` の 4 つ目を `scene_index` にする）。Camera の位置は Cutout の Camera の `position`。

## Preview ノード（`PanoramaPreviewNode`）

- Python のクラスは `PanoramaPreviewSceneNode`。旧 `PanoramaPreview` は #78 まで登録を残す。
- `source` は `io.MatchType`（テンプレート `source`、IMAGE・VIDEO・`PANO_SCENE`）で、出力は入力と同じ型の同じオブジェクトを返す。`is_output_node` は `True`。
- Timeline は `source` から Stickers と同じ `_decide_timeline` で決める。IMAGE と VIDEO は既定の状態（`timeline.fps` 24）に対して決める。`PANO_SCENE` の Timeline はその `fps`・`frames` で、表示する #76 が使う。
- IMAGE と VIDEO の実行結果の `ui` は旧 Preview と同じキー（`pano_input_images`、2 フレーム以上なら `pano_videos`・`pano_video_meta`）。`pano_video_meta` の fps は Timeline fps、`frames` は Timeline の長さ。
  - IMAGE：旧 Preview と同じく、最初の画像を保存し、バッチを MP4 にエンコードする。音声はない。
  - VIDEO：`open_video(video, "source")`（Stickers と同じ）で開き、最初に復号できたフレームをプレビュー画像にし、Timeline は `frame_rate` と `times` から決める。全フレームを一括では展開しない（クロップ付きや `VideoFromFile` 以外で `open_video` が `get_components()` に落ちる場合は、それに従う）。MP4 は VIDEO 自身の `save_to(MP4, H264)` で temp に書く。コアは、コンテナとコーデックが一致しトリムもクロップもなければ再エンコードせずに詰め直し、それ以外は 1 フレームずつ変換する。`VideoFromFile` 以外の VIDEO も同じくコアの `save_to` に任せる（`VideoFromComponents` はすでにメモリにあるフレームを書き、`VideoFromList` は元の VIDEO ごとに読む）。音声は `save_to` がそのまま入れ、`has_audio` は書いた MP4 に音声ストリームがあるかで決める。
  - プレビュー画像と MP4 のために VIDEO を 2 回開く（`open_video` と `save_to`）。Stickers の `bg_media`・`sticker` の VIDEO も同じ方法で MP4 を書く（#75）。
- `PANO_SCENE` のときは描画も `ui` も作らずに素通しする。ノード上の表示と、エディタの新しい ID への結び付けは #76 で行う。
- `coverage` 入力は `execute` では読まない（フロントエンドのウィジェットが読む）。`PANO_SCENE` のときは `PanoSceneValue.coverage` が正で、ウィジェットの値は使わない。
- MatchType はバックエンドで型を検証しないので、`source` が IMAGE（4 次元のテンソル）・VIDEO・`PanoSceneValue` のどれでもなければ `TypeError` にする。
- #76 への申し送り：旧 Preview 用の `ensurePanoramaPreviewImageOutput`（`web_src/pano_editor_extension.js`）は、足りない `image` 出力を足す。新しい ID に適用すると MatchType の `output` とは別に `image` 出力が増えるので、新しいノードには適用しない。
