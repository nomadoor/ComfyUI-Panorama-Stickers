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
- `SceneContent` は描画のパス（最初のフレーム、`video` を読むたび）ごとに `_render_frames` が `_scene_content` で作り、`render` が device に置いたものはそのパスの間だけ持つ。`video` の出力（ComfyUI の出力キャッシュに残る）が持つのは入力そのものだけで、device のテンソルは持たない（`tests/test_scene_mesh.py`）。(a) は要素の数のためだけに別に作る。

### MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`（#62）

`core/mesh_render.py` が pure torch で三角形を描き、`scene_mesh.py` が入力を要素ごとの `MeshItem`（頂点・面・あれば uv とテクスチャ・頂点色）にする。

- 入力：
  - MESH：要素ごとに `get_mesh_batch_item`（コア。`vertex_counts`・`face_counts` で切る）と、あれば `texture` の同じ番号。座標はそのまま（glTF）。
  - メッシュ系の 3D ファイル（GLB・GLTF・OBJ・STL）：Stickers ノードの入口（`_read_scene_file`）で、コアの Get3DComponents で 1 要素の MESH にする。以降（描画・エディタ用ファイル・`PANO_SCENE`）は MESH として扱う。読んだ MESH は `NODE_RUNTIME` の `mesh_files` キャッシュ（2 つ分、CPU）に、ディスク上のファイルはパス・更新時刻・大きさ、それ以外はオブジェクトの同一性をキーに入れ、同じファイルでは読み直さず、同じ MESH なのでエディタ用ファイルも使い回す。FBX・USDZ はコアが読めないので、コアのエラーになる。拡張子のない 3D ファイルとスプラット系のファイルはここでは読まない（#61）。
  - `MOGE_GEOMETRY`：フレームごとに `moge_grid_mesh`（エディタ用ファイルと同じグリッドのメッシュを間引かずに）と `image` の同じフレームをテクスチャにする。読むキーは `points`・`mask`・`image` と `intrinsics` の有無だけ（`tests/test_scene_mesh.py` で、コアの MoGeInference・MoGePanoramaInference が出す形とあわせて固定）。`mask` の外の画素と、コアと同じ段差の判定（`discontinuity_threshold` 0.04）で切れた画素は描かない。
- 描き方：出力の画素ごとの光線（`view.rays`）と三角形の交点を Moller–Trumbore で求め、最も近い交点を残す（距離は光線の長さ）。三角形ごとに、交わりうる画素の範囲だけを試す。
  - 透視投影：Camera の前にある角と、辺が Camera の前の面（`NEAR`）を横切る点のピンホールの像の範囲。
  - ERP：角の経度を囲む最短の弧と、角・辺（大円の弧）の最も高い点と低い点・囲む極までの緯度の範囲。弧が半周以上なら全経度。経度の継ぎ目は列を周期で回してつなぐ。180 は 360 の列の周期で数え、前方の半球の列だけを描く。
  - 三角形の前処理は `TRIANGLES`（約 100 万）ずつ行い、三角形ごとには光線の式（float32 × 10）と画素の範囲（int32 × 4）と累積の組の数（int64）だけを残す。画素と三角形の組は `CHUNK` ずつ試し、画素ごとの最も近い交点を距離のビットと三角形の番号の 64 bit の値の最小（`scatter_reduce` の `amin`）で選ぶ。最後に画素ごとに選ばれた三角形だけで重心座標を求め直して色を付ける（これも `CHUNK` 画素ずつ）。距離が有限でない交点は捨てる。
  - 辺と頂点の上の画素の中心が丸めで抜けないよう、重心座標の判定を `EDGE` だけ広げる（MoGe のグリッドを同じ大きさで描くと、すべての画素の中心が頂点の上に来る）。
- 色：glTF の base color と同じく、テクスチャ（uv (0, 0) が画像の左上。テクセルの中心で双線形に標本化する。0〜1 の外の uv は glTF の既定の REPEAT で折り返し、範囲内の値はそのまま。双線形の隣の画素は画像の端で延ばす）に頂点色の RGB を掛ける。`EDGE` の内側で三角形の外に出た交点は、重心座標を三角形の中に寄せてから値を補間する。どちらもなければコアの GLB の書き出しの素のジオメトリと同じ灰色（`BARE_COLOR` 0.22）。光源による陰影は付けない（unlit）。頂点色のアルファ・マテリアルの係数・法線などのマップは読まず、当たった画素は不透明にする。
  - MoGe の uv は画素 `x / (W − 1)` なので、テクセルの中心で標本化すると画像の端で最大半テクセルずれる。エディタ（three.js）の表示と同じである。
- 両面を描く（MoGe のパノラマの面は外向きで、原点の Camera からは裏面になる）。縁はアンチエイリアスしない。
- エディタ（#71）は、この描画と揃えるため、`scene` の GLB を光源の影響を受けない材質（`MeshBasicMaterial` 相当）で両面（`DoubleSide`）に描く必要がある。コアの `save_glb` は `unlit` をテクスチャのない場合にしか書かない（`KHR_materials_unlit`）ので、テクスチャ付きの MoGe の GLB には unlit を書けず、エディタ側で扱う。
- 要素は描画のパスの間だけ、直前に描いた 1 つを device に置いておき、同じ要素の次のフレームでは置き直さない（`mesh_content`）。
- 描く前に `comfy.model_management.free_memory` で VRAM を空けることはしない（Sky・SPLAT の描画と同じく、モデルの読み込み側の管理に任せる）。
- MoGe のグリッドは ERP の経度の継ぎ目（最後の列と最初の列の間）と極の周り（最初と最後の行の外）をつながないので、出力が MoGe より細かいとそこに 1〜2 画素の隙間が出る。コアの MoGePointMapToMesh とエディタの GLB も同じである。
- 計測（1 回、CUDA の割り当てのピークは要素を置いたぶんを含む）：
  - 2048 × 1024 の MoGe パノラマ相当（約 400 万面、device 上の要素 約 170 MB）：4096 × 2048 の ERP は CUDA で約 0.2 秒・ピーク約 1.2 GB、CPU で約 2.9〜3.4 秒。1920 × 1080 の透視投影は CUDA で約 0.06 秒・ピーク約 0.86 GB、CPU で約 1.2〜1.3 秒。要素の最初のフレームは CPU での三角形分割と転送を含め、CUDA で約 3 秒。
  - 4096 × 2048 の MoGe パノラマ相当（約 1670 万面、device 上の要素 約 650 MB）：4096 × 2048 の ERP は CUDA で約 0.4 秒・ピーク約 2.5 GB、1920 × 1080 の透視投影は約 0.2 秒・ピーク約 2.5 GB。要素の最初のフレームは三角形分割を含め約 11.5 秒。

## まだ描かないもの

統合ブランチ内の暫定として、次は `NotImplementedError` にする。

| 内容 | 解消する ticket |
|---|---|
| `scene` 入力の SPLAT・スプラット系の 3D ファイル（`nodes.py` の `_scene_content`） | #61 |

## Stickers ノード（`PanoramaStickersNode`）

`execute` は次の三つの入口に分かれる。後続の ticket は、それぞれ一つだけを変更する。

| 入口 | 関数 | 役割 | 変更する ticket |
|---|---|---|---|
| (a) | `_decide_timeline` | Timeline fps と、出力フレームごとの評価する Timeline frame・描く `bg_media` のフレーム・`sticker` の素材のフレーム・`scene` の要素 | #53、#56 |
| (b) | `_render_frames` | フレームごとに状態を評価し、(a) が選んだ `sticker` の素材のフレームを `port` の Sticker の Source に、`scene` の要素を `scene_index` にして、`render_frame` を呼ぶ。Camera と Sticker の Keyframe はここでフレームごとに評価される。描く Camera と Projection は、評価した状態から呼び出し側の `capture` が決める（Stickers は状態の Camera と ERP、Cutout は Cutout の Camera と透視投影）。各フレームの `color`・`mask` を device のまま 1 枚ずつ返すジェネレーターで、`first_frame` と `video` の読み出しが同じ経路を使う | #55、#56、#58、#64、#82 |
| (c) | `_render_outputs` と `execute` の末尾 | 出力（`first_frame`・`first_frame_mask`・`video`・`PANO_SCENE`）を組み立てる（ADR 0027）。`execute` で描くのは最初の出力フレームだけ | #53、#57、#82 |

- Timeline fps は、背景 VIDEO の平均フレームレート（コアの `get_frame_rate()` と同じ `average_rate`、丸めない）、なければ `sticker` の VIDEO の平均フレームレート、どちらもなければ状態の `timeline.fps` とする。Timeline fps を決める VIDEO は `_timing_video` が選び、`_timeline_rate` がその fps を分数にする（分母 100 万以下。30000/1001 などは元の分数のまま）。`video` の `get_frame_rate()` はこの分数である。
- 出力の長さは「状態の `timeline.length` → 背景 VIDEO のフレーム数 → 背景の IMAGE バッチ（2 枚以上）の枚数 → Sticker と `scene` の Clip range の終わりのうち最も遅いもの（非表示の Sticker と、未接続の `scene` の Clip range も含む。`duration` が `null` で、`sticker` が IMAGE バッチか VIDEO の `port` の Sticker は、素材の終わり `start − in + 素材の長さ` を終わりとする）→ Camera の各 Lane の最後の Keyframe のうち最も遅いものの次のフレーム → 1」の順で決める。状態から決める長さは `timeline.fps` の Timeline frame なので、秒を保って Timeline fps のフレーム数に直す（`floor(x × Timeline fps ÷ timeline.fps + 0.5)`、1 以上）。
- 各出力フレームは、次の時刻 `t` 秒について `t × timeline.fps` の Timeline frame で評価する（`docs/scene-state-v2.md`）。時刻は `_output_times` が分数で決め、(a) の評価と `video` の保存の PTS が同じ値を使う。
  - Timeline fps を決めた VIDEO（背景 VIDEO、なければ `sticker` の VIDEO）のフレーム：そのフレームの PTS。切り出し範囲の最初のフレームを 0 秒とする。可変フレームレートや、1ms の timebase で丸められた PTS（mkv・webm の 29.97 fps など）でもフレームごとの PTS を使う。`video` を保存すると各フレームはこの時刻に置かれる（下記「`video` 出力」）。評価する Timeline frame が、最も近い整数との差がその VIDEO の PTS の量子化の幅の半分（`time_base ÷ 2 × timeline.fps`）以内なら、その整数に寄せる。Clip range の端や `hold` の Cut が、丸められた PTS で 1 フレーム遅れないようにするためである。`MaterializedVideo` の時刻は厳密なので、幅は 0 とする。
  - その VIDEO が終わった後：最後のフレームの時刻から Timeline fps の間隔で進める。背景 VIDEO なら、背景は描かず `bg_color` になる。
  - それ以外：出力フレームの番号 ÷ Timeline fps。
- `first_frame`（IMAGE、(1, H, W, 3)）と `first_frame_mask`（MASK、(1, H, W)）は、Timeline の最初の出力フレームの色とマスクである。全フレームのマスクは出力しない（ADR 0027）。
- 背景の IMAGE バッチは出力フレームと 1 対 1 に対応し、バッチより長い出力では、背景が終わった後は `bg_color` になる。1 枚の IMAGE はすべてのフレームに描く。
- `bg_media` と `sticker` の VIDEO の読み方（`core/video_source.py`）
  - `VideoFromFile` で、`get_dimensions()` がストリームの大きさと一致するもの（クロップがない）は、`get_stream_source()` を PyAV で開き、`get_active_trim_window()` の範囲を 1 フレームずつ読む（`StreamedVideo`）。先にパケットだけを読んで PTS を集め、フレーム数と時刻を決める。入力側のメモリは長さに比例しない（`tests/test_stickers_scene_video.py` で計測する）。
  - 復号したフレームは、パケットで集めた PTS と突き合わせる。シークの後に参照を失った B フレームなど、復号されなかった PTS のフレームは、ログに警告を出して `bg_color` にする。ほかのフレームの時刻はずらさない。パケットにない PTS のフレームは捨てる。1 枚も復号できないときは `ValueError` にする。出力の大きさ（`auto`）は、最初に復号できたフレームで決める。
  - 復号のエラー（`InvalidDataError`）は、コアのように読み飛ばさず、そのままエラーにする。
  - 画素の変換（8 ビットの形式は `rgb24`、それ以外は `gbrpf32le`、幅が 32 の倍数でないときの端の引き伸ばし）と回転のメタデータの扱いは、コアの `get_components()` と同じにし、同じ値になることをテストで確かめる。
  - それ以外の VIDEO（クロップ付き、`VideoFromComponents`、`VideoFromList` など）は `get_components()` で一括で読む（`MaterializedVideo`）。
- `video` の音声は背景 VIDEO の音声を、切り出し範囲の始まりから「出力のフレーム数 ÷ Timeline fps」秒で切ったもの（サンプル数は `int` で切り捨て）。音声はコアと同じく切り出し範囲の始まりから始まり、最初のフレームの PTS からではない。形はコアの AUDIO と同じ `{"waveform": (1, C, T), "sample_rate"}`。背景に VIDEO や音声がないときは `None`（音声なし）とする。音声は `execute` で一度だけ読み、`video` が持つ。
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
- `scene` の入力は、メッシュ系の 3D ファイルを MESH に読んでから（`read_mesh_file`）、`_scene_content` で `SceneContent` にする。MESH と `MOGE_GEOMETRY` は上記「MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`」。SPLAT とスプラット系の 3D ファイルは未対応であることを示すエラーにする（#61 が加える）。`sticker` の MESH・SPLAT・3D ファイルも同じくエラーにする（#63）。
- `video` を読む側（`get_components`・`save_to`）は、`render_frame` が直前と同じテンソルを返したフレームを、device から再び転送せず、直前のフレームから写す。
- `is_output_node` は `True`（#75）。ComfyUI は `ui` を出力ノードでなくても `executed` で送るが、出力ノードでなければ下流に出力ノードがつながっていないと実行されず、エディタとノード上の UI が素材を受け取れない。出力ノードにすると、キューに入れるたびに実行され（変わっていなければキャッシュの `ui` が送られる）、素材の表示が下流の接続に左右されない。
- 実行結果の `ui` は、エディタとノード上の UI に入力の素材を見せるためのもので、キーは旧ノードと同じ（#75）。

  | キー | 内容 |
  |---|---|
  | `pano_input_images` | `bg_media` の最初のフレーム |
  | `pano_input_videos` / `pano_input_video_meta` | `bg_media` が 2 フレーム以上のときの一時 MP4 とメタ情報（`fps`・`frames`・`duration`・`has_audio`） |
  | `pano_sticker_input_images` | `sticker` の最初のフレーム。`sticker` の MP4 は出さない（エディタでの再生は Timeline と一緒に #73 の後で加える） |
  | `pano_sticker_input_pose` | 状態に `port` の Sticker がなく、ノードが加えたときの姿勢（`yaw_deg`・`pitch_deg`・`roll_deg`・`hFOV_deg`）と、`direction`・`roll`・`size` の Lane の Keyframe（`keyframes`。Camera が動いた `sticker_state` の Pose handoff、`docs/scene-state-v2.md`）。エディタが同じ姿勢と Keyframe で状態に加えるために使う |
  | `pano_timeline_fps` | VIDEO（`_timing_video` が選んだ `bg_media`、なければ `sticker` の VIDEO）が Timeline fps を決めたときだけ出す。その Timeline fps（float）。エディタは fps の欄のロックと、状態の再基準化（開いたとき・実行結果が届いたとき）に使う |
  | `pano_sticker_warnings` | 警告（読めない `file` の Source、`bg_media` なしの `auto`）。ログにも出す |
  | `pano_scene_files` / `pano_scene_meta` | `scene` の入力の要素ごとの一時ファイル（下の「`scene` のエディタ用ファイル」）と、`kind`（エディタが使う読み込み方。`splat` か `mesh`） |

  - 一時 MP4（ADR 0018）：エディタの MP4 で、Preview と同じく `nodes.py` の `_editor_mp4` が作る。エディタはシークのたびに直前のキーフレームから復号するので、MP4 はキーフレームの間隔を短くし、表示に足りる幅にする（下の「エディタの MP4」）。メタ情報の `fps` は VIDEO の平均フレームレート、`frames` は切り出し範囲のフレーム数。IMAGE バッチも同じ `encode_editor_mp4` で Timeline fps の等間隔にエンコードし、`fps` は Timeline fps とする。1 フレームの素材は MP4 を作らない。音声は `bg_media` の VIDEO が持つものだけが MP4 に入る。サムネイルの帯は作らない（エディタが MP4 から作る）。
  - エディタの MP4：
    - そのまま使う：コアの `save_to(MP4, H264)` が詰め直すだけのファイル（トリムなし、パスのある MP4）で、`core/video.py` の `editor_ready` が通るもの（H.264・yuv420p・長辺 `EDITOR_MAX_SIZE`（2048）以下・キーフレームの間隔が `EDITOR_KEYINT`（12）フレーム以下。パケットだけを読む）は、`save_video_to_mp4` でストリームコピーする。Stickers・Cutout の `video`（`SceneVideo`）は、`get_stream_source()` の MP4 が `editor_ready` を通れば写さずにそのまま見せる。
    - プロキシ：それ以外（キーフレームの間隔が長い、長辺が大きい、H.264 4:2:0 でない、MP4 でない、トリムあり、メモリ上のファイル、クロップ付きなど `open_video` が `get_components()` に落ちるもの、`editor_ready` を通らない `SceneVideo` の stream source）は、`encode_editor_mp4` がエディタ用に 1 フレームずつエンコードする。ストリームで読む VIDEO はファイル（`SceneVideo` は stream source）を `StreamedVideo` で開き直し、`decoded_frames()` が復号した PyAV のフレームを float RGB にせず、YUV のまま縮小してエンコーダーに渡す（回転のあるフレームだけ RGB で正立させる。RGB 系とパレットの形式のフレームは RGB の扱いで、アルファは捨てる）。全フレームを RAM に置かない。`get_components()` に落ちた VIDEO と IMAGE バッチは RGB から変換する（IMAGE バッチのグレーは 3 チャンネルに広げ、アルファは捨てる。`render_frame` の背景と同じ）。H.264（libx264 `veryfast`・`crf 23`・`tune fastdecode`、フレームスレッド）、yuv420p、キーフレーム `EDITOR_KEYINT` フレームごと（IDR、閉じた GOP）、B フレームなし、長辺は `EDITOR_MAX_SIZE` 以下（縦横比を保ち偶数）、色：RGB から作るときは BT.709 の行列で変換し、sRGB（BT.709）のタグにする。ファイルの YUV は行列を変えずに縮小し、元の colorspace・primaries・transfer のタグを引き継ぐ。フルレンジ（yuvj など）は TV レンジに変換し、TV レンジのタグにする。各フレームは読んだ VIDEO の PTS をその time base のまま保つ（可変フレームレートも保つ）。音声は切り出し範囲のものを AAC で入れる。プロキシの作成に失敗するとノードの実行が失敗し、キャッシュには何も残らない（次の実行で作り直す）。
    - `SceneVideo` の stream source は SaveVideo の既定の出力でもあるので、エディタのために変えない（libx264 の既定のキーフレーム間隔 250 のまま）。プロキシは別のファイルである。ノードの出力（`first_frame`・`video`）と SaveVideo の出力はエディタの MP4 に左右されない。
  - 出力ノードは `state_json` が変わるたびに実行されるので、MP4（コピーもプロキシも）は入力ごとに 1 度だけ作り、`NODE_RUNTIME` の `video` キャッシュから再利用する。プロキシの設定はモジュールの定数で、プロセスの中では変わらないので、キーには入れない。IMAGE バッチは旧 Cutout と同じくテンソルの同一性と fps、VIDEO は `open_video` がストリームのまま開いたもの（クロップのない `VideoFromFile`）ならファイルのパス・更新時刻・トリム範囲、それ以外は VIDEO オブジェクトの同一性をキーにする。キーのためにファイルを開き直さない。
  - キャッシュから追い出した MP4 のファイルは消さない。追い出しは次に要るとき作り直すかを決めるだけで、ファイルは ComfyUI が起動時と終了時に消す temp に残る。ジョブ履歴やキャッシュされた `ui` が同じファイルを指し続けるためで、ComfyUI の PreviewVideo と同じ扱いである。
  - エディタの背景 VIDEO は、実行結果が新しい間だけ読み込む。`PanoramaStickersNode` では動画の再生バーを出さず、エディタを開いたまま実行すると読み込み直して再生ヘッドのフレームを出し、タイムラインの ▶ と再生位置の移動も読み込みと再生を行う（`docs/timeline-ui.md`）。背景の入力をつなぎ変えると、次の実行まで VIDEO を外す。
  - 実行結果がどの入力から作られたかは、実行が終わったときに `/api/jobs/{prompt_id}` を一度読んで、そのワークフローの接続から記録する。ブラウザを再読み込みしたときは、同じワークフローの最近のジョブから自ノードの出力を表示用に取り戻す（状態は書き換えない）。サーバーを再起動して履歴と temp が消えた後は、実行し直す。
  - エディタとノード上の UI は、実行結果が新しいかを入力の接続（link）の変化だけで判断する。接続を変えずに上流の画像を差し替えると、再実行するまで古い素材が表示される。
  - `sticker_state` が接続されているときは、`port` の Sticker は実行結果に姿勢が届くまで、枠も含めて表示されない。
  - `scene` のエディタ用ファイル（#60）：`scene_files.py` の `write_editor_files` が、コアの書き出し関数で要素ごとに 1 つずつ temp に書く。ラスタライザには依存しない。座標は要素自身の glTF 座標（`scene` の変形を掛ける前の World、ADR 0023）で、エディタが状態の `scene` の変形を掛ける。
    - SPLAT：PLY（コアの `SplatToFile3D` の `ply` と同じ書き出し。SH もすべて持つ）。座標はそのまま。`counts` があれば要素ごとの長さで切る。
    - MESH：GLB（コアの `mesh_item_to_glb_bytes`）。座標はそのまま。
    - `MOGE_GEOMETRY`：フレームごとのグリッドのメッシュの GLB（`moge_grid_mesh`）。読むのは `points`、あれば `mask`（外の画素を捨てる）、`intrinsics` の有無、テクスチャの `image` だけ。glTF への変換はコアの MoGePointMapToMesh と同じ（`intrinsics` がなければパノラマとして Z 上から、あれば OpenCV から）で、パノラマの各画素は回転 0 の Camera の ERP の同じ画素の向きに来る（`tests/test_scene_editor_files.py`）。エディタで見るためのものなので、長辺を `MOGE_EDITOR_GRID`（512）点以下に間引き、テクスチャも同じ間隔で間引く。
      - 面の向き（ワインディング）もコアと同じ。パノラマの面は外向き（原点の Camera からは裏面）なので、エディタ（#71）は両面（`DoubleSide`）で描く。
      - `mask` の外の画素を捨てるのはコアの MoGePointMapToMesh と異なる（コアは `mask` を読まない）。バックエンドの描画（#62）も同じく `mask` の外を描かず、エディタと揃える。
    - `pano_scene_files` は要素の順のリストで、要素の数が出力フレームとの対応（`batch_index`）に使う数である。頂点や面のない要素は `null` にし、番号をずらさない。
    - `state_json` だけが変わった実行では作り直さない。MP4 とは別の `NODE_RUNTIME` の `scene_files` キャッシュ（入力 4 つ分）に入れ、SPLAT・MESH はオブジェクトと位置のテンソルの同一性、`MOGE_GEOMETRY`（辞書）は読むテンソルの同一性をキーにする。ファイルが消えていれば書き直す。
    - 大きさの目安：100 万点の SPLAT（SH 3 次）の PLY は約 248 MB、MoGe の 1 フレームの GLB は約 6 MB。キャッシュから追い出しても MP4 と同じくファイルは消さず、ComfyUI が起動時と終了時に temp を消すまで残る。
    - メッシュ系の 3D ファイルは、入口で読んだ MESH として GLB に書き直す（描くものとエディタが見るものが同じになる）。実行ごとに読み直すので、ファイルも実行ごとに書き直す。SPLAT はまだ `_scene_content` が受け付けないので、実際の実行ではファイルが出る前にエラーになる（#61 で解消）。スプラット系の 3D ファイルと 3D の Sticker の書き出しも、それぞれ #61・#63 で `write_editor_files` に加える（それまで `write_editor_files` は SPLAT・MESH 以外を `MOGE_GEOMETRY` として読む）。
- 必要な ComfyUI は v0.35.0 以降（`mesh_item_to_glb_bytes` と、メッシュ系の 3D ファイルを読む Get3DComponents が入った版）。Get3DComponents はコアで experimental のノードなので、コアの更新で名前や戻り値が変わったら `scene_mesh.py` の `read_mesh_file` を合わせる。`scene_files.py` はコアの書き出し関数をモジュールの先頭で読み込むので、古いコアではパッケージの読み込み時にその名前の `ImportError` になる。
  - 出力（IMAGE）のプレビュー MP4 は作らない。Stickers の出力を表示するのは Preview（#76）で、旧ノードの `pano_videos` を読むフロントエンドもない。
- `file` の Source は `core/stickers.py` の `load_source_rgba` で読み、`folder_paths` のディレクトリの中にあるものだけを読む。読めないときは、その Sticker を描かずに警告を出す（ログと実行結果の `pano_sticker_warnings`）。

## `video` 出力

Stickers と Cutout の `video` は、`scene_video.py` の `SceneVideo`（コアの `VideoInput` の実装）である（ADR 0027、#82）。出力した時点では描画せず、読まれるたびに (b) の `_render_frames` で 1 フレームずつ描く。描く device は読むときの `get_torch_device()` で、`bg_media`（Cutout では `source`、`PANO_SCENE` ではその `bg_media`）の VIDEO と `sticker` の VIDEO は読むたびに開き直し、実行をまたいで開いたままにしない。持つのは `PANO_SCENE` と同じ状態・素材・Timeline と、`execute` で読んだ音声である。

| メソッド | 内容 |
|---|---|
| `get_components()` | 全フレームを描いて `VideoComponents`（`images`・`frame_rate`・`audio`）を返す。GetVideoComponents につないだときで、全フレームが RAM に載るのはこのときだけ。値は描いたフレームそのもので、旧 IMAGE 出力と一致する（`tests/test_stickers_scene_video.py` などで確かめる）。全体が `STAGED_RENDER_BYTES`（16 MiB）以上で device が CPU でなければ、ピン留めした 1 フレーム分のバッファを通して転送する。進捗はフレームごとに進める |
| `save_to(path, format, codec, metadata, bit_depth, crf, color_space, preset)` | 1 フレームずつ描いてエンコードし、全フレームを RAM に置かない。コンテナとコーデックの `auto` の決め方、エンコーダー（`h264`・`libsvtav1`）、`crf`・`preset`、10 ビット、音声（AAC、WebM は 48kHz の Opus）、メタデータはコアの `VideoFromComponents.save_to` に合わせる。色は sRGB（BT.709）で、`color_space` に HDR を求めるとエラーにする（コアの `VideoFromFile` と同じ）。各フレームは上の時刻に置く。VIDEO が Timeline を決め、その時刻が PTS（time base が 0 でない。`StreamedVideo`、またはそれから時刻を受け継いだ `video`）のときは、その time base で PTS を保ち（可変フレームレートを保持）、コアがファイルを再エンコードするときと同じく B フレームを使わない。時刻が厳密なとき（VIDEO がない、`MaterializedVideo`）は Timeline fps の等間隔に置く。既定のエンコード（MP4・H.264 で `bit_depth`・`crf`・`color_space`・`preset` が `None`）は `get_stream_source()` の MP4 をコアの `VideoFromFile.save_to` で詰め直すので、描くのは一度だけ |
| `get_stream_source()` | 既定のエンコードで temp に書いた MP4 のパス。最初に呼ばれたときに描き、ファイルがある間は使い回す。Preview の `ui`（エディタの動画）は、このファイルがエディタでシークしやすければ（`editor_ready`）写さずにそのまま見せ、そうでなければ別のプロキシを作る。パッケージの外（コアのノード）向けで、このパッケージの中では読まない |
| `as_trimmed`・`as_cropped` | `get_stream_source()` の MP4 の `VideoFromFile` に任せる（コアの `VideoFromComponents.as_trimmed` と同じ）。切り抜きが全面なら自分を返す |
| `get_dimensions`・`get_frame_count`・`get_frame_rate`・`get_duration`・`get_color_space` | 描かずに返す。長さは最後のフレームの時刻 + 1 ÷ Timeline fps、色空間は `sRGB`、ビット深度はコアの既定の 8 |

- `open_video` は `SceneVideo` を `RenderedVideo`（`scene_video.py`）にする。`StreamedVideo` と同じく `frame_rate`・`times`・`time_base`・`first_frame`・前へ読むだけのフレーム・`audio(seconds)` を持ち、フレームは `render` で描いたもの（device 上）をそのまま返す。Cutout の `source`、Stickers の `bg_media`・`sticker` に `video` をつないでも、エンコードを通らず値は変わらない（`tests/test_scene_video.py`）。`OPENED_VIDEOS`（`sticker_media.py`）が `open_video` の返す型である。
- (b) はフレームごとに `throw_exception_if_processing_interrupted()` を呼び、SaveVideo や GetVideoComponents が読んでいる間もキャンセルで止まる。
- 同じ `video` を何度読んでも、複数の下流が読んでも、それぞれが一から描く（ComfyUI が出力をキャッシュするので、入力を変えずに再実行したときは `execute` も `video` の作り直しも起きない）。`video` を使う下流が複数あると、それぞれで描画が走る（ADR 0027）。使い回すのは `get_stream_source()` の MP4 だけで、ファイルは ComfyUI が起動時と終了時に消す temp に残る。
- 進捗バーはコアの `ProgressBar` で、読んだノード（SaveVideo など）に出る。`execute` は最初のフレームだけを描くので進捗を出さない。

## `PANO_SCENE`

Stickers の `PANO_SCENE` 出力は、`nodes.py` の `PanoSceneValue`（frozen dataclass、比較は同一性）である（#57）。Scene の正は `state_json` だけで、この値は実行のたびに状態と入力から導く派生値である（ADR 0025）。フレームは描画せず、`PANO_SCENE` を入れ子に持たない。Cutout（#64）、Preview の表示（#76）、3D の撮影（#61）は、次のフィールドだけを前提にする。

| フィールド | 内容 |
|---|---|
| `state` | `load_scene_state(state_json)` の戻り値。`sticker` の入力があり、状態に `port` の Sticker がないときは、Stickers が描いたときと同じく `port` の Sticker を加えたもの |
| `sources` | `SceneSources`。`file` の Source は読み込み済み。`port` の Sticker の Source は `port` の最初のフレームを持つテンプレートで、`port` があるときは Stickers の (b) と同じく、フレームごとに `port.frames()` と `frames` の `port` の番号（`port.index_at` の結果）で取り出した素材に差し替えてから `render_frame` に渡す |
| `port` | `sticker` の素材の `PortMedia`（`sticker_media.py`）、または `None`。開いた stream ではなく VIDEO の入力そのものを持ち、`frames()` を呼ぶたびに開き直すので、Preview と Cutout など複数のノードが同じ `PANO_SCENE` を使っても読み取り位置を取り合わない |
| `bg_media` | `bg_media` の入力そのもの（IMAGE のテンソル、VIDEO のハンドル、または `None`）。VIDEO は開いた状態で渡さないので、使う側が `sticker_media.py` の `open_video` で開き直す |
| `scene` | `scene` の入力（SPLAT・MESH・`MOGE_GEOMETRY`、または `None`）。メッシュ系の 3D ファイルは読んだ MESH にしたもの。描く側は `_scene_content` で `SceneContent` にし、フレームごとに `frames` の `scene` の番号を `scene_index` として `render_frame` に渡す（Stickers の (b) と同じ） |
| `coverage` | `bg_media` の範囲（360 または 180） |
| `bg_color` | 0〜1 の 3 つの数値のタプル |
| `fps` | Timeline fps（float）。`video` の `get_frame_rate()` と同じ値 |
| `frames` | `_decide_timeline` が決めた出力フレームごとの `(評価する Timeline frame, 描く bg_media のフレーム番号または None, port のフレーム番号または None, scene の要素の番号または None)` の 4 つ組のタプル。`scene` の番号は `scene` の入力がないとき `None` で、Clip range の外のフレームでも番号を持つ（描くかは `evaluated["scene"]["active"]` で決める）。長さが出力のフレーム数 |

- 出力の解像度は入れない。撮影する側がそれぞれの規則（`output_preset`・`output_megapixels` など）で決める。
- 同じ入力からは同じ内容の値になる（乱数や時刻を含まない）。ComfyUI のキャッシュが効くとき、下流には前回の同じ値が渡る。
- 下流のノードは同じオブジェクトを共有するので、`state` や `sources` を書き換えない。
- 3D の Sticker を受けるようになったら（#59）、その素材をここに加える。

## Cutout ノード（`PanoramaCutoutNode`）

- Python のクラスは `PanoramaCutoutSceneNode`。旧 `PanoramaCutout` は #78 まで登録を残す。
- 入力は `source`（`io.MultiType`：IMAGE・VIDEO・`PANO_SCENE`）、`coverage`、`output_megapixels`、`state_json`。出力は `first_frame`（IMAGE）、`sticker_state`（STRING）、`first_frame_mask`（MASK）、`video`（VIDEO）の順（ADR 0027）。`first_frame`・`first_frame_mask`・`video` は Stickers と同じ規則で作る。出力は入力の素通しではないので `MatchType` は使わない。
- `is_output_node` は `False` で、実行結果の `ui` は持たない。エディタとノード上の UI の結び付けは #77 で行う。
- `state_json` は状態 v2（v1 も読む。旧 Cutout の `shots[0]` は Camera になる。`docs/scene-state-v2.md`）。Cutout の Camera は `state_json` の `camera` で、Keyframe に従って動く。
- Timeline と各フレームは Stickers の (a)・(b)・(c)（`_decide_timeline`・`_render_frames`・`_render_outputs`）をそのまま使う。各フレームは `render_frame` に `Projection.perspective(幅, 高さ, Camera の hFOV, coverage)` を渡して描く。
  - IMAGE / VIDEO：ERP を Scene の向きに合った背景とみなし、Cutout の状態を Scene として描く（旧 Cutout と同じく、状態の `sky` の Sticker とペイントを重ねる）。Timeline は Cutout の状態に対して `_decide_timeline` で決める（VIDEO は `open_video(source, "source")`。Stickers・Cutout の `video` は 1 フレームずつ描いて読む）。`coverage` は ERP の範囲。`bg_color` は黒で、180 の ERP の半球の外は黒になる（旧 Cutout は Sky も含めて黒にしていたが、Sky は全方向に描く）。
  - `PANO_SCENE`：その `state`・`sources`・`port`・`bg_media`・`coverage`・`bg_color` と Timeline（`fps`・`frames`）で描き、Camera だけを Cutout の状態から取る。Cutout の Camera の Keyframe は Cutout の状態の `timeline.fps` で読み、秒を保つ（`frame × Cutout の timeline.fps ÷ Scene の timeline.fps`）。Cutout の状態の Sticker・ペイントは使わない（Scene の正は Stickers の状態、ADR 0025）。`coverage` 入力は使わない。
- 出力の大きさは、旧 Cutout と同じく `calculate_dimensions_from_megapixels` で `output_megapixels` と画面比（`camera.aspect`）から決める（8 の倍数、長辺は `nodes.py` の `CUTOUT_MAX_OUTPUT_SIDE` の 4096 まで。旧 Cutout と共有する）。FOV をアニメーションさせても大きさは変わらない。画素は正方なので、垂直の FOV は丸めた大きさから決まり、`camera.aspect` から決まる値とわずかに違うことがある。
- FOV は旧 Cutout と同じく、v1 の `shots[0]` の `hFOV_deg`・`vFOV_deg` を 1〜179 に寄せ、`roll_deg` だけを読む（`rot_deg` は読まない）。shot の FOV が 0 のとき、エディタは 90° / 60° とみなすが、ノードは 1° に寄せるので、この場合だけエディタの表示と出力が一致しない（`docs/threejs-spark-integration.md`）。
- `video` の音声と fps は Stickers と同じ。背景 VIDEO（IMAGE / VIDEO の `source` が VIDEO のとき、`PANO_SCENE` ならその `bg_media` が VIDEO のとき）の音声を「出力のフレーム数 ÷ Timeline fps」秒で切ったもの、なければ音声なし。fps は Timeline fps。
- `sticker_state` は v2（`docs/scene-state-v2.md`）。`fps` は Cutout の状態の `timeline.fps`、`camera` は Cutout の Camera の Lane ごとの Keyframe をそのまま写したもの。Timeline fps には再基準化しない（丸めで Keyframe が最大で半フレーム動くため。Pose handoff はどの fps の比でも評価できる。#65）。Keyframe のない Lane は Camera の値を持つ `frame: 0` の Keyframe 一つ。`source_aspect` は出力の幅 ÷ 高さ。
- World の内容も Stickers と同じく描く。IMAGE / VIDEO では Cutout の状態の `world` の Sticker、`PANO_SCENE` ではその `state` の `world` の Sticker と、`scene` 入力の中身（`_scene_content(scene)` の `SceneContent`。各フレームの要素は `frames` の 4 つ目を `scene_index` にする）。Camera の位置は Cutout の Camera の `position`。

## Preview ノード（`PanoramaPreviewNode`）

- Python のクラスは `PanoramaPreviewSceneNode`。旧 `PanoramaPreview` は #78 まで登録を残す。
- `source` は `io.MatchType`（テンプレート `source`、IMAGE・VIDEO・`PANO_SCENE`）で、出力は入力と同じ型の同じオブジェクトを返す。`is_output_node` は `True`。
- Timeline は `source` から Stickers と同じ `_decide_timeline` で決める。IMAGE と VIDEO は既定の状態（`timeline.fps` 24）に対して決める。`PANO_SCENE` の Timeline はその `fps`・`frames` で、表示する #76 が使う。
- IMAGE と VIDEO の実行結果の `ui` は旧 Preview と同じキー（`pano_input_images`、2 フレーム以上なら `pano_videos`・`pano_video_meta`）。`pano_video_meta` の fps は Timeline fps、`frames` は Timeline の長さ。
  - IMAGE：旧 Preview と同じく、最初の画像を保存し、バッチを MP4 にエンコードする（`encode_frames_to_mp4`。キーフレームは `EDITOR_KEYINT` フレームごと、B フレームなし）。音声はない。
  - VIDEO：`open_video(video, "source")`（Stickers と同じ）で開き、最初に復号できたフレームをプレビュー画像にし、Timeline は `frame_rate` と `times` から決める。全フレームを一括では展開しない（クロップ付きや `VideoFromFile` 以外で `open_video` が `get_components()` に落ちる場合は、それに従う）。MP4 は Stickers と同じエディタの MP4（`_editor_mp4`）で、シークしやすいファイルはコアの `save_to(MP4, H264)` でストリームコピーし、それ以外はプロキシを作る。`has_audio` はコピーなら書いた MP4 に音声ストリームがあるか、プロキシなら音声を入れたかで決める。
  - プレビュー画像と MP4 のために VIDEO を 2 回開く（`open_video` と、コピーの `save_to` またはプロキシの `StreamedVideo`）。Stickers の `bg_media` の VIDEO も同じ方法で MP4 を書く（#75）。
- `PANO_SCENE` のときは描画も `ui` も作らずに素通しする。ノード上の表示と、エディタの新しい ID への結び付けは #76 で行う。
- `coverage` 入力は `execute` では読まない（フロントエンドのウィジェットが読む）。`PANO_SCENE` のときは `PanoSceneValue.coverage` が正で、ウィジェットの値は使わない。
- MatchType はバックエンドで型を検証しないので、`source` が IMAGE（4 次元のテンソル）・VIDEO・`PanoSceneValue` のどれでもなければ `TypeError` にする。
- #76 への申し送り：旧 Preview 用の `ensurePanoramaPreviewImageOutput`（`web_src/pano_editor_extension.js`）は、足りない `image` 出力を足す。新しい ID に適用すると MatchType の `output` とは別に `image` 出力が増えるので、新しいノードには適用しない。
