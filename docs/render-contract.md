# 描画関数

Panorama Studio のバックエンドの描画関数（`render_frame`、重なり順と合成、Sky・World・3D の中身の描き方）と、3D ファイルの読み分けを定める。
用語は `CONTEXT.md` に従う。決めた理由は ADR 0023（座標）、0025（Scene の正）、0034（Sky の直接の標本化）、0035（World をまとめて畳む）にある。

この文書が持たない規則：状態 v2・評価関数・Sky の重なり順（`docs/scene-state-v2.md`）、Panorama Studio のノードが Scene を組み立てて撮る規則と出力
（`docs/studio-node.md`）、メモリ・中断・キャッシュ・一時ファイル（`docs/runtime-resources.md`）、エディタでの表示（`docs/threejs-spark-integration.md`）、
基準画像と処理時間の計測（`docs/legacy-baselines.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 描画の入口、層、`cache` の使い回し | `core/render.py` `render_frame`・`RenderLayer`・`Projection` | — | `tests/test_render.py`、`tests/test_memory_cache.py`、`tests/test_studio_scene.py` |
| 重なり順と合成 | `render.py` `composite_frame`、`core/world_render.py` `over_by_depth` | — | `tests/test_render.py`、`tests/test_world_render.py` |
| Sky の標本化（直接の標本化、縮めるときの平均、Sky の幅） | `render.py` `_sky_layers`・`_shoot_sky`・`_sample_filtered`・`_shrink`・`_sky_size` | — | `tests/test_render.py`、`tests/test_studio_node.py`、`tests/test_studio_scene.py` |
| World の層と `world` の Sticker の板 | `world_render.py` `world_layer` | — | `tests/test_world_render.py`、`tests/test_stickers_world.py`、`tests/test_studio_upstream.py` |
| 3D の `world` の Sticker | `world_render.py` `ContentSource`、`nodes.py` `_port_media` | — | `tests/test_stickers_3d.py` |
| `scene` の共通処理 | `world_render.py` `SceneContent`、`nodes.py` `_scene_content` | — | `tests/test_world_render.py`、`tests/test_scene_mesh.py` |
| MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY` の描画 | `core/mesh_render.py` `render_mesh`・`mesh_content`、`scene_mesh.py` `read_mesh_file` | — | `tests/test_mesh_render.py`、`tests/test_scene_mesh.py` |
| SPLAT の描画 | `splat_render.py` `splat_content`・`_view_colors` | — | `tests/test_splat_render.py` |
| 3D ファイルの読み分けと読めないときのエラー | `nodes.py` `_read_scene_file` | — | `tests/test_studio_scene.py`、`tests/test_stickers_3d.py`、`tests/test_scene_mesh.py` |
| コアの内部のシンボルの読み込み | `core_adapters.py` | — | `tests/test_core_adapters.py` |

Python のファイルは `comfyui_pano_suite/` の下にある。旧ノードとの差は `docs/legacy-baselines.md` の基準画像で確かめる。

## 入口

```python
render_frame(layers, camera, projection, *, bg, bg_key=None, bg_color, device, cache=None, bg_width=None)
# -> color (H, W, 3), mask (H, W), depth (H, W)
```

| 引数 | 内容 |
|---|---|
| `layers` | `RenderLayer` の列（下の層から）。各層は Panorama Studio 一つ分の Scene で、`evaluated`・`sources`・`scene`・`scene_index` を持つ（下記「層」）。上流の Scene を受けない描画では層は一つ |
| `RenderLayer.evaluated` | `evaluate_scene_state(state, frame)` の戻り値（その時刻の Sticker・`scene`・Camera の値） |
| `RenderLayer.sources` | `SceneSources`。そのフレームの素材。`stickers`（Sticker の `id` → `StickerSource`）、`painting`（状態のペイント）、`painting_layer`（アップロード済みのペイントのラスタ。`resolve_painting_layer_payload` の戻り値） |
| `camera` | 評価済みの Camera の値（`position`・`yaw_deg`・`pitch_deg`・`roll_deg`）。Panorama Studio は、Camera が無ければ `ORIGIN_CAMERA`（World の原点、回転 0）、あれば評価した Camera を渡す（`docs/studio-node.md` の「Panorama Studio」）。ERP の Projection の出力も Camera の回転に従って回る（描画関数の性質） |
| `projection` | `Projection` |
| `bg` | このフレームの `bg_media` の画像 (h, w, C) または `None` |
| `bg_key` | `bg` を識別するハッシュ可能な値（Studio では `bg_media` のフレーム番号）。`None` のときは背景を使い回さない |
| `bg_color` | 0〜1 の 3 つの数値 |
| `device` | 出力を置く torch の device |
| `cache` | 呼び出し側が 1 回の実行の間だけ持つ辞書（その間 `bg_color`・`device`・層の数は変わらず、各層の `sources` は Sticker の素材のフレーム（`StickerSource.frame`）のほかは変わらない）。直前のフレームの Sky の層、Camera の向きで写した Sky、読み込んだ背景（`("bg", bg_key)`）、結果を持つ。出力の画素ごとの光線（`_rays`）とその向き（`_view`）も持ち、Camera の回転か Projection が変わるまで作り直さない。このキーは Camera の回転の値をそのまま使い、Sky のキーのようには丸めない（丸めの誤差の範囲で回転が変われば作り直す）。光線を使わないフレームでは捨てる。Sky の値が同じなら Sky を作り直さず、Camera の回転と `bg_key` も同じなら直前の `color`・`mask`・`depth` をそのまま返す。Sky のキー（`_sky_key`）は、表示中の `sky` の Sticker の評価済みの値（変形と不透明度）と素材のフレーム（`StickerSource.frame`、Source がなければ `None`）からなり、表示していない Sticker は `id` だけを入れる（Clip range の外で Keyframe の値が変わっても Sky を作り直さない）。Sky のキーの値と Camera の回転は小数第 9 位で丸めてキーにし、同じ値の Keyframe の間の補間の誤差では作り直さない。World の内容を奥行きで一枚にまとめた層（`world_key`。Sticker ごとの層は持たない）と、描いた `world` の Sticker の素材を `device` に置いたもの（Sticker の `id` ごとに、`StickerSource.frame` が変わったときだけ置き直し、描かなくなった Sticker の分は捨てる）も持つ。`world` の Sticker の板を描く World の座標系の光線（`CameraView.cached_rays`）も持ち、Camera の回転か Projection が変わるまで作り直さない。World の内容がないフレームでは、これらをすべて捨てる。この光線は `_rays` と座標系が違う（World の glTF と Scene）ので共有しない。MESH の `scene` の中身も自分の座標系の光線を描画のパスの間だけ別に持つので、同じ向きの光線を二つ持つことがある。World の内容があるフレームでは、Camera の位置も結果を使い回す条件に入る |
| `bg_width` | その実行の `bg_media` の画像の幅（`bg_media` がなければ `None`）。透視投影の Sky の解像度に使う。フレームごとの `bg` の有無では変えず、IMAGE バッチが Timeline より短くても途中で Sky の解像度が変わらない。Studio の (b) は `bg_media`（VIDEO なら最初のフレーム）の幅を渡す |
| `RenderLayer.scene` | `scene` 入力の中身（`SceneContent`）または `None`。下記「`scene` の共通処理」 |
| `RenderLayer.scene_index` | このフレームで描く `scene` の要素の番号。`None` なら描かない |

- 戻り値はすべて float32 で、`device` 上にある。
- `mask` はペイントで描いたマスクで、色と同じ Projection で写す。層が複数あれば、各層のマスクの画素ごとの最大値とする。
- `depth` は Camera の位置から、その画素に見える最も近い World の内容までの距離（光線の長さ。透視投影でも Camera の前方への奥行き z ではない。前方への奥行きで表す深度（MoGe など）と比べるときは、光線と前方の軸のなす角を θ として `z / cos θ` に直す）で、World の単位で表す。World の内容がない画素（Sky だけが見える画素）は `+inf` とする。
- ファイルは読まない。素材の読み込み（`file` の Source、ペイントのラスタ）は呼び出し側が行い、`sources` に入れて渡す。

### 層

- `layers` の各層は、Panorama Studio 一つの状態とその入力（ADR 0029 の「`scene` 出力と上流の Scene」）。最初が最も上流で、最後が撮影するノード自身の層。
- Sky は層ごとに描き（Sticker・ペイントの重なり順は層の中だけで決まる）、下の層の Sky の上に上の層の Sky をストレートアルファで重ねる（上流の Sky が下になる）。Sky は無限遠なので、どの層の Sky もすべての層の World の内容より奥にある。
- World の内容は、すべての層をまとめて `world_layer` で一枚にする（奥行きで混ざる。上の層が上に来るわけではない）。各層の `scene` の中身を先に描き、すべての層の `world` の Sticker を中心の距離でまとめて遠い順に並べて（同じ距離では層の順、層の中では状態の順）一度に畳む。層ごとに一枚にしてから畳むと、3 枚以上が重なる画素で間の面が消えるためである（ADR 0035）。`world_key` もすべての層の内容から作る。
- `cache` は Sky の作業を層ごとに分けて持つ（`cache["layers"][i]`）。Sky のキーと `sky_textures` は層の中だけで Sticker の `id` で引き、`world_textures` は `(層の番号, id)` で引くので、層が違えば同じ `id`（`port` の Sticker も）でも混ざらない。状態の `id` は書き換えない。
- `port` の Sticker は層ごとに一つまで（各層の `port` は、その層のノードの `sticker` 入力）。

### `StickerSource`

2D の素材を読み込んだもの。`rgba` はストレートアルファの (h, w, 4) で、8 ビットの画像から読んだものは uint8（0〜255）、IMAGE の入力は float（0〜1）。読み取り専用（`docs/runtime-resources.md` の「キャッシュ」）。`crop` は Sticker の `crop`。`derive_vfov` は `port` の Source で真にし、`vFOV_deg` を `hFOV_deg` と素材のアスペクト比から求め直す（`docs/scene-state-v2.md`）。`frame` は、フレームを持つ素材（IMAGE バッチ・VIDEO）のうち `rgba` がどのフレームかを表す番号で、1 枚の画像では `0`。Source のない Sticker は描かない。

### `ContentSource`

3D（MESH・SPLAT）の `world` の Sticker の Source（`core/world_render.py`）。`content` は `SceneContent`（下記「`scene` の共通処理」）、`frame` はそのうち描く要素の番号で、`StickerSource.frame` と同じく World のキーに入る。`content` は device に置いたものを持つので、描画のパスごとに作る（`PANO_SCENE`・`video` には入れない）。`sky` の Sticker には渡さない。

### `Projection`

| 形 | 意味 |
|---|---|
| `Projection.erp(width, height, coverage)` | ERP。`coverage` は 360 または 180。180 は Camera の前方の半球 |
| `Projection.perspective(width, height, hfov_deg, coverage=360)` | 透視投影。正方の画素のピンホールで、`hfov_deg` を幅に当てる。垂直の FOV は出力の大きさから決まる（`tan(vFOV/2) = tan(hFOV/2) × height ÷ width`）。`coverage` は、写す `bg_media` の ERP の範囲（360 または 180） |

- 出力の画素ごとの向き（光線）は、ERP・透視投影とも `core/math.py` の `ray_directions` が画素の中心を通るものとして作る（下記「World の描き方」）。背景と Sky は `_view` でこの向きを ERP の座標に直して標本化し、その ERP も画素の中心で標本化する（`grid_sample` の `align_corners=False`）。エディタと Studio の出力の画素の位置はこれで一致する。

## 重なり順と合成

`composite_frame(bg_color, bg, sky, world=(), bg_valid=None)` が合成の規則を持つ。奥から順に次のとおり重ねる。

1. `bg_color`
2. `bg_media`。不透明として扱い、`bg_color` を置き換える。ないフレームと、`bg_valid`（`bg_media` が画像を持つ画素）の外の画素は `bg_color` のまま。
3. Sky。`sky` の Sticker、ペイントのグループ、ラスタを `z_index` の順に重ね、どのグループにも属さないストロークを一番上に重ねた一枚の層（`docs/scene-state-v2.md` の「Sky の重なり順」）。
4. World の層を奥から手前へ。各層は色 (H, W, 4) と奥行き (H, W) を持ち、リストの順に `over_by_depth`（`core/world_render.py`）で一枚に畳み込む。画素ごとに、それまでに畳み込んだ層の最も近い奥行き以下なら手前に、それより奥なら奥に重ねる。同じ奥行きではリスト順を保つ（後ろのものが手前）。どの層もその画素で、それまでの層すべてより近いか遠いときは奥行きの順に並べ替えたのと同じになる。2 層の間に後から入る層は、両方の奥に重なる（全画面の層をリストの数だけ並べて持たないための近似）。そのため呼び出し側は、できるだけ奥から手前の順に渡す。

- 色はストレートアルファで、`out = src × a + dst × (1 − a)` で重ねる。半透明の Sticker やペイントは、下の層と混ざる。
- 出力の奥行きは、アルファが 0 より大きい World の層のうち最も近いもの。どの層もなければ `+inf`。
- World の層は、ストレートアルファに正規化してから渡す。レンダラーが premultiplied で描いた場合は、この境界で un-premultiply する。
- スプラットのように体積を持つ層が報告する奥行きは、「手前から積算したアルファが初めて 0.5 を超える位置」とする。最後まで 0.5 を超えない画素は、アルファで重み付けした平均の奥行きとする。
- 最後に色を 0〜1 に寄せる。
- この規則は `tests/test_render.py` で固定する。

## Sky の描き方

- Sky は、ERP の出力でも透視投影の出力でも中間の ERP に描かず、層ごとに出力の画素の向きから直接、GPU で標本化する（下記「Sky の直接の標本化」、ADR 0034）。旧ノードは Sky を CPU で 360 の ERP に描いていた。
  - 旧ノードの基準画像（`tests/fixtures/legacy_goldens/`）との差（Camera のない Studio は、差の出る 5 つの case を Studio 自身の基準画像 `studio_*` と比べる。`docs/legacy-baselines.md`）：Sticker の縁の画素が、旧ノードの硬い縁ではなく覆う割合の分だけ混ざる。180 の出力では、旧ノードのように出力の半分の解像度の 360 の ERP（幅が出力と同じ）から写さず、出力の画素ごとに素材から標本化するので、Sticker の中の色の境目も旧ノードより細かい。差の大きさは `docs/legacy-baselines.md` の「Camera のない Panorama Studio の基準画像」（平均の差は 1/255 未満で、8/255 を超える画素は Sticker の縁と、180 の Sticker の中の境目）。
- 写し方：出力の画素ごとに、Camera から見た向き（出力の ERP の経度・緯度）を Camera の回転（`core/math.py` の `camera_basis`）で Scene の向きに直し、その向きの Sky と背景を双線形に標本化する。180 の出力は Camera の前方の半球（経度 −90°〜90°）だけを写す。Sky の色はアルファを掛けた状態で標本化する。経度の継ぎ目は反対側の列とつないで標本化する。
- 画像を縮めて写す画素（出力の画素 1 つが元の画像の 1 画素より広い範囲を覆う画素）は、その範囲で平均した値にする（`_sample_filtered`）。元の画像を幅と高さで別々に半分ずつ縮めた段（ripmap）を、前の段から三角形のフィルターで縮めて作り、出力の隣の画素への `grid_sample` の座標の動き（左右と上下で大きいほう）から、画素の覆う範囲を x と y で別々に求め、その前後の段を x・y とも線形に混ぜる。ERP の極の近くのような細長い範囲で、細いほうの向きまでぼかさないためである。三角形のフィルターは小さな形の位置を保つ（箱のフィルターは 2 画素の組の中心へ動かす）。ERP は縮めるときも経度の継ぎ目の向こうの列を使う（`_shrink`。フィルターが継ぎ目に届くのは最初と最後の列だけなので、その 2 列を継ぎ目の両側の列から同じ重みで取り直す。画像を広げて縮めることはしないので、一時的なメモリは増えない）。覆う範囲が 1 画素以下の画素は、元の画像を双線形に標本化する。
  - 背景（`bg_media`）：透視投影と、Camera を回した ERP・180 の ERP の出力。
  - 透視投影の Sky の各層（Sticker の素材、ペイントのラスタ、MASK）。
  - 段は、元の画像と一緒に `render_frame` の `cache` に持ち（背景は `bg_levels`、Sticker の素材は `sky_textures`、ペイントの層は `sky_paint`）、元の画像を捨てるときに一緒に捨てる。段は標本化に要るものだけを作るので、1 枚の画像の段は全部作っても元の画像の 3 倍まで。キーのない背景（`bg_key` が None）の段はそのフレームだけで捨てる。
  - 制限：ERP の出力の一番上と下の行のように、出力の画素が元の画像の 1 画素より細いところは、その向きには平均しない（画素の覆う範囲そのものが細いため）。
- 背景と Sky は無限遠にあるので、Camera の位置では変わらない（ADR 0023）。MASK もペイントと同じく Camera の回転に従う。
- Sky（`sky` の Sticker とペイント）と MASK は全方向にあり、どの向きの Camera でも写す。
- 360 の出力で Camera の回転が 0 のときは、背景の向きの計算と標本化を飛ばし、背景をそのまま使う（Sky は回転が 0 でも出力の画素の向きから標本化する）。背景は出力と大きさが違えば大きさを合わせる（`_resize`）。どちらかの向きに縮めるときは、三角形のフィルターで出力の画素の範囲を平均し（`antialias=True`。経度の継ぎ目の向こうの列も使う）、拡大だけのときは双線形にする。
- 状態だけが持つペイントを ERP に描くのは、`core/display_layers.py` と `core/painting.py` の既存の処理を使う。
- Sky の層（`_sky_layers`）は、旧ノードの `core/display_layers.py` の `compose_display_list_to_overlay_rgba` と同じ並べ方（`build_display_entries`）と同じ規則（どの層もなければ、アップロード済みのペイントを一枚で使う、など）で並べる。Sticker とペイントを交互に重ねた場面は、基準画像 `stickers_paint_interleaved`（Studio は `studio_paint_interleaved`）で固定している。
- `z_index` は Sticker の Source ではないが、`crop` と同じく描画に要る静的な値なので、`StickerSource` に入れて渡す（評価関数の戻り値は変えない）。
- Sky の直接の標本化：中間の ERP は、透視投影の狭い画角では巨大になる（画角 5°・幅 1024 の出力で幅数万）か、上限で粗くなる（狭い画角の透視投影で Sticker やペイントがぼける）ので経由しない。各層を出力の画素の向きから直接、その層の画素で標本化し（`_sky_layers` で層を用意し、`_shoot_sky` で写す）、`compose_display_list_to_overlay_rgba` と同じ順に、同じストレートアルファの「上に重ねる」規則で重ねる（アルファを掛けた状態で重ね、最後に戻す）。
  - `sky` の Sticker：出力の画素の向きを、Sticker の向き（`camera_basis(yaw, pitch, roll)`）の平面に投影し、`core/stickers.py` の `_compose_sticker_patch` と同じ式で素材の uv を求める（FOV は 0.1° 以上、`crop` の範囲、uv 0 と 1 を端の画素の中心に置く `align_corners=True` の置き方、前方の外と FOV の外は描かない）。Sticker の縁が横切る出力の画素は、画素のうち縁の内側にある割合（縁までの距離を、隣の画素への uv の動きで割ったもの）をアルファに掛ける。uv の動きは Sticker の幅（面の座標で 2）までにする（面の地平線、奥行き 0 をまたぐ画素では動きが無限に近くなり、Sticker の外に半分の被覆の線が出るため）。素材はアルファを掛けた状態で標本化し、不透明度はその 4 チャンネルに掛ける。素材は `device` に置いて、フレーム（`StickerSource.frame`）が変わるまで実行の中で使い回す（`render_frame` の `cache` の `sky_textures`）。
  - ペイント：エディタがアップロードしたラスタ（`painting_layer` の `paint`・`mask`・グループ）は、その大きさのまま 360 の ERP として、出力の画素の向きで標本化する。
  - 状態だけが持つペイント（アップロードされていないストロークのグループ、ストロークのどのグループにも属さない分、ラスタオブジェクト、アップロードのない MASK）は、バックエンドが ERP に描いてから同じく標本化する。その幅は次の大きいほうを 4096 までに抑えたもの（`_sky_size`）。ストロークを 8192 の ERP に描くと、描き直すたびに CPU で約 7 秒・3GB を使うためである。
    - 画素の細かさが出力の中央の画素とほぼ同じになる幅（`π × 出力の幅 ÷ tan(hFOV/2)`）を 2 のべき乗に切り上げたもの（64 以上）。FOV をアニメーションさせても、この幅が変わるときだけ描き直す。
    - `bg_media` があるとき、その画素の細かさの 360 の幅（`bg_width` × 360 ÷ `coverage`）。
  - Sky のキー（`_sky_key`）は、この大きさと、`sky` の Sticker の値と素材のフレーム。Camera の向きのキーに Projection を入れる。キーが変われば層の並びを組み直し（ペイントの層と MASK は、`device` に置いたものを `cache` の `sky_paint` に大きさごとに持ち、大きさが変わるまで使い回す）、向きのキーが変われば写し直す。
- 旧 Cutout は ERP の画素 i を `u = i`（画素の中心ではなく端）とみなして標本化していたので、Panorama Studio の透視投影の出力は旧 Cutout から ERP の半画素ずれる（`docs/legacy-baselines.md`）。
- `bg_media` は `coverage` の範囲の ERP とみなし、Sky と同じく Camera の向きで写す。360 では 360 の ERP、180 では旧ノード・Cutout と同じく Scene の前方（経度 −90°〜90°）の半球の ERP とする。180 の出力で、Camera を回して `bg_media` の半球の外が見える画素は、`bg_media` がない画素として `bg_color` になる。Sky と MASK はその上にも描く。出力の範囲が Camera の前方の半球だけであることは変わらない。

## World の描き方

`core/world_render.py` が持つ。位置は World の glTF 座標、角度はパノラマの規約で、両者の間は `core/world.py` の `world_rotation` だけでつなぐ（ADR 0023）。

- 出力の画素ごとに、Camera の位置から画素の中心を通る光線を作る（`core/math.py` の `ray_directions`）。ERP は Sky と同じ経度・緯度（180 は Camera の前方の半球）、透視投影は `hfov_deg` を幅に当てた正方の画素のピンホールとする。Sky の向き（`_view`）も同じ関数で作る。
- 各内容は、ストレートアルファの色 (H, W, 4) と距離 (H, W) の層として描き、描くたびに `over_by_depth` で一枚に畳み込む（`world_layer`）。層の順は `scene` の中身、続いて `world` の Sticker を Camera の位置から `position`（板の中心）までの距離の遠い順（同じ距離では状態の順）。画素ごとの距離が同じときは、中心が近い Sticker、次に状態の順で後ろの Sticker が手前になる。交わらない板どうしは、これで奥行きの順と一致する。`scene` の中身は画素ごとに奥行きが変わり並べ替えられないので最初に畳み込み、その手前と奥に Sticker が重なる画素では上記の近似が残る。まとめた一枚を `composite_frame` に渡す。背景と Sky は World の層より常に奥になる。
- 距離は光線の長さ（上記 `depth`）。

### 3D の `world` の Sticker

- Source が `ContentSource` の `world` の Sticker は、板ではなくその中身（`content` の要素 `frame`）を描く。Sticker の変形（`position`・`rotation`・`scale`）は `scene` の変形と同じ意味で、中身自身の座標の点 `x` を World の `position + scale × world_rotation(yaw, pitch, roll) @ x` に置く（`_scene_layer` を共有する）。Keyframe と Clip range は評価関数が決める（他の `world` の Sticker と同じ）。
- 不透明度は層のアルファに掛ける。メッシュは手前の面だけを描く（不透明度を下げても裏の面は透けない）。
- 層の順は板と同じく `position`（中身の原点）までの距離で決まり、その後は画素ごとの奥行きで `over_by_depth` に畳み込む。`scene` の中身と同じく、中身が大きく原点から離れていると上記の近似が残る。
- 背景と Sky より常に手前になる。

### `world` の Sticker の板

- Sticker の `position` を中心とする平らな板で、`world_rotation(yaw, pitch, roll)` の右・上の軸に沿って広がり、後ろの軸（ローカルの `+Z`）の向きを向く。回転 0 の板を回転 0 の Camera の正面に置くと、Camera の方を向き、素材が正立して見える。
- 幅は `scale`（World の単位）、高さは `scale` × 切り抜いた素材の高さ ÷ 幅（画素の数で数える）。`crop` の範囲を板全体に貼る。範囲の幅か高さが 0 の Sticker は描かない。
- 両面に描く。裏からは左右が反転して見える。
- 素材は双線形に標本化する。`sky` の Sticker と同じく、端の画素の中心を板の端に合わせ（`align_corners=True`）、アルファを掛けた状態で標本化してから戻す（透明な画素の色がにじまない）。不透明度はアルファに掛ける。
- Sticker ごとに出力の全画素で光線と板の交点を求める（板が写る範囲に限らない）。
- 板の縁はアンチエイリアスしない（ERP の出力の `sky` の Sticker と同じ。透視投影の `sky` の Sticker は縁をアンチエイリアスする。上記「Sky の描き方」）。光線が板と平行な画素と、Camera の後ろにある板は描かない。
- Source を持たない Sticker、`active` でない Sticker、不透明度 0 の Sticker は描かない。VIDEO と IMAGE バッチの素材は `sky` と同じく `StickerSource.frame` のフレームを描く。

### `scene` の共通処理

SPLAT（下の「SPLAT の描き方」）と MESH・MoGe（下の「MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`」）のレンダラーは、`SceneContent(count, render)` を作ってラスタライズだけを受け持つ。

| 処理 | 持ち主 |
|---|---|
| `scene` の変形（位置・回転・スケール）と Keyframe | `evaluate_scene_state` の `scene` を、`world_render.py` が Camera に逆に掛ける |
| Clip range | `evaluated["scene"]["active"]` が偽のフレームでは描かない |
| バッチと出力フレームの対応 | `sticker_media.py` の `batch_index`（IMAGE バッチの `sticker` と同じ規則）。(a) の `_decide_timeline` が `clip_frame`（`frame − (start − in)`）と Timeline fps から決め、`frames` の 4 つ目に入れる。`render_frame` の `scene_index` にはこの番号を渡し、`PANO_SCENE` を使う側も同じ番号を使う |
| 出力の長さ | `duration` が `null` で要素が 2 つ以上のとき、`start − in + 要素の数` の Timeline fps のフレームを Clip の終わりとする（(a)） |
| 奥行きでの合成 | `over_by_depth`（`world_layer` と `composite_frame`） |

- `render(view, index, device)` は、要素 `index` を `view`（`CameraView`）から見た層を返す。`view` は `scene` 自身の座標（`scene` の変形を外した glTF 座標）にある Camera で、`position` (3,)、`rotation`（`world_rotation` と同じく列が右・上・後ろの 3 × 3）、`projection` を持ち、`view.rays(device)` で画素ごとの光線の向き (H, W, 3) を返す。SPLAT のラスタライザは焦点距離を `projection` から求めるので、`CameraView` には加えていない。
- 戻り値はストレートアルファの色 (H, W, 4) と、`view.position` からの距離 (H, W)（`scene` 自身の単位、空の画素は `+inf`）。World の距離へは `scale` を掛けて直す。
- `scene` の変形は、`scene` 自身の座標の点 `x` を World の `position + scale × world_rotation(yaw, pitch, roll) @ x` に置く。
- `render` は、同じ `view` と `index` に対して同じ層を返す（使い回しの条件は `view` の値と `index` だけ）。
- `SceneContent` は描画のパス（最初のフレーム、`video` を読むたび）ごとに `_render_frames` が `_scene_content` で作り、`render` が device に置いたものはそのパスの間だけ持つ。`video` の出力（ComfyUI の出力キャッシュに残る）が持つのは入力そのものだけで、device のテンソルは持たない（`tests/test_scene_mesh.py`）。(a) は要素の数のためだけに別に作る。

### MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`

`core/mesh_render.py` が pure torch で三角形を描き、`scene_mesh.py` が入力を要素ごとの `MeshItem`（頂点・面・あれば uv とテクスチャ・頂点色）にする。

- 入力：
  - MESH：要素ごとに `get_mesh_batch_item`（コア。`vertex_counts`・`face_counts` で切る）と、あれば `texture` の同じ番号。座標はそのまま（glTF）。
  - メッシュ系の 3D ファイル（GLB・GLTF・OBJ・STL）：`execute` の入口（`_read_scene_file`）で、コアの Get3DComponents で 1 要素の MESH にする。以降（描画・エディタ用ファイル・`PANO_SCENE`）は MESH として扱う。読んだ MESH は共有のキャッシュ（`core/cache.py`、`docs/runtime-resources.md` の「キャッシュ」）の `mesh_files` に、ディスク上のファイルはパス・更新時刻・大きさ、それ以外はオブジェクトの同一性をキーに入れ、同じファイルでは読み直さず、同じ MESH なのでエディタ用ファイルも使い回す。FBX・USDZ はコアが読めないので、コアのエラーになる。`_read_scene_file` は先にスプラットとして読めるか（下の「SPLAT の描き方」）を見て、読めなかった 3D ファイルのうち形式がメッシュ系のものだけをここで読む。形式のない 3D ファイルはメッシュとしては読まない。
  - `MOGE_GEOMETRY`：フレームごとに `moge_grid_mesh`（エディタ用ファイルと同じグリッドのメッシュ）と `image` の同じフレームをテクスチャにする。読むキーは `points`・`mask`・`image` と `intrinsics` の有無だけ（`tests/test_scene_mesh.py` で、コアの MoGeInference・MoGePanoramaInference が出す形とあわせて固定）。`mask` の外の画素と、コアと同じ段差の判定（`discontinuity_threshold` 0.04）で切れた画素は描かない。
- 描き方：出力の画素ごとの光線（`view.rays`）と三角形の交点を Moller–Trumbore で求め、最も近い交点を残す（距離は光線の長さ）。三角形ごとに、交わりうる画素の範囲だけを試す。
  - 透視投影：Camera の前にある角と、辺が Camera の前の面（`NEAR`）を横切る点のピンホールの像の範囲。
  - ERP：角の経度を囲む最短の弧と、角・辺（大円の弧）の最も高い点と低い点・囲む極までの緯度の範囲。弧が半周以上なら全経度。経度の継ぎ目は列を周期で回してつなぐ。180 は 360 の列の周期で数え、前方の半球の列だけを描く。
  - 三角形の前処理は `TRIANGLES`（約 100 万）ずつ行い、三角形ごとには光線の式（float32 × 10）と画素の範囲（int32 × 4）と累積の組の数（int64）だけを残す。画素と三角形の組は `CHUNK` ずつ試し、画素ごとの最も近い交点を距離のビットと三角形の番号の 64 bit の値の最小（`scatter_reduce` の `amin`）で選ぶ。最後に画素ごとに選ばれた三角形だけで重心座標を求め直して色を付ける（これも `CHUNK` 画素ずつ）。距離が有限でない交点は捨てる。
  - 辺と頂点の上の画素の中心が丸めで抜けないよう、重心座標の判定を `EDGE` だけ広げる（MoGe のグリッドを同じ大きさで描くと、すべての画素の中心が頂点の上に来る）。
- 色：glTF の base color と同じく、テクスチャ（uv (0, 0) が画像の左上。テクセルの中心で双線形に標本化する。0〜1 の外の uv は glTF の既定の REPEAT で折り返し、範囲内の値はそのまま。双線形の隣の画素は画像の端で延ばす）に頂点色の RGB を掛ける。`EDGE` の内側で三角形の外に出た交点は、重心座標を三角形の中に寄せてから値を補間する。どちらもなければコアの GLB の書き出しの素のジオメトリと同じ灰色（`BARE_COLOR` 0.22）。光源による陰影は付けない（unlit）。頂点色のアルファ・マテリアルの係数・法線などのマップは読まず、当たった画素は不透明にする。
  - MoGe の uv は画素 `x / (W − 1)` なので、テクセルの中心で標本化すると画像の端で最大半テクセルずれる。エディタ（three.js）の表示と同じである。
- 両面を描く（MoGe のパノラマの面は外向きで、原点の Camera からは裏面になる）。縁はアンチエイリアスしない。
- エディタは、この描画と揃えるため、`scene` の GLB を光源の影響を受けない材質（`MeshBasicMaterial` 相当）で両面（`DoubleSide`）に描く必要がある。コアの `save_glb` は `unlit` をテクスチャのない場合にしか書かない（`KHR_materials_unlit`）ので、テクスチャ付きの MoGe の GLB には unlit を書けず、エディタ側で扱う。
- 要素は描画のパスの間だけ、直前に描いた 1 つを device に置いておき、同じ要素の次のフレームでは置き直さない（`mesh_content`）。
- VRAM は、描画のパスの始めにまとめて見積もって空ける（`docs/runtime-resources.md` の「デバイスとメモリ」。中身のテンソルの大きさを見積もりに入れる）。
- MoGe のグリッドは ERP の経度の継ぎ目（最後の列と最初の列の間）と極の周り（最初と最後の行の外）をつながないので、出力が MoGe より細かいとそこに 1〜2 画素の隙間が出る。コアの MoGePointMapToMesh とエディタの GLB も同じである。

### SPLAT の描き方

`splat_render.py` が持つ。

- スプラット系の 3D ファイルは、`execute` の入口で `_read_scene_file`（`nodes.py`）が、メッシュより先に一度だけ SPLAT に読み、以降（`_scene_content`・`_scene_ui`・`PANO_SCENE`）は SPLAT として扱う。読むのはコアの File3DToSplat。`format` が `splat`・`spz`・`ksplat` のもの、頂点に 3DGS の属性（`f_dc_0`、または `scale_0` と `rot_0`）を持つ PLY（Load3D と同じく中身で見分ける。持たない PLY はスプラットとしては読まない。コアの Get3DComponents も PLY を読まないので、そのような PLY は下の「読めない 3D ファイル」のエラーになる）、`format` のないものはコアの `_detect_splat_format` で中身から決まるものを読む。読んだ SPLAT は共有のキャッシュの `splat_files` に、ディスクのファイルならパス・更新時刻・大きさ、それ以外はオブジェクトの同一性をキーにして持ち、同じファイルは実行をまたいで読み直さず、エディタ用ファイルも同じ SPLAT として使い回す（`mesh_files` と同じ作り）。
- `splat_content(splat)` が `SceneContent` を作り、`render` は要素ごとにコアの `_gaussian_item` で SPLAT を `device` に置いて描く（実行をまたいで device に持たない。`SceneContent` 自体も描画のパスごとに作る。上記「`scene` の共通処理」）。
- 座標：SPLAT は 3DGS の座標（Y 下・Z 前方）で、`scene` 自身の glTF の座標はそれを X 軸まわりに 180° 回したもの（`(x, y, z)` → `(x, −y, −z)`）とする。コアの RenderSplat と Load3D の定義で、ADR 0023 の「SPLAT の変換はコアに従う」による。
- 描き方はコアの RenderSplat（`_render_gaussian`、`render_style` は `color`）と同じ。各ガウシアンを、画素の光線に沿った 3D の密度の最大値で重み付けし、奥行きの slab ごとに手前から奥へ線形の光で重ねる。色は、SH が 1 次以上の係数を持つとき、標準の 3DGS と同じ式で、Camera の位置から各ガウシアンの中心への向きで 3 次までの SH を評価し、0.5 を足したもの（`_view_colors`）。向きは SPLAT 自身の 3DGS の座標で求める（Camera の位置を glTF から X 軸まわりに 180° 回して SPLAT の座標に直し、ガウシアンの中心から引く）。SH はその座標で学習されているためである。値はコアの `_gaussian_item` が基本色を寄せるのと同じく 0〜1 に寄せる（標準の 3DGS は 0 未満だけを寄せる）。DC（基本色）だけの SPLAT はコアと同じく `_gaussian_item` の基本色をそのまま使う。コアの RenderSplat は DC だけを使うので、1 次以上の係数を持つ SPLAT では、コアの描画と色が違う。`sharpen` は RenderSplat の既定の 2.0、`splat_scale` は 1、`opacity_threshold` は 0 で、ノードの入力にはしない。結果はストレートアルファの sRGB に戻して `over_by_depth` に渡すので、背景との合成は sRGB で行う（RenderSplat は線形の光で背景と合成する。半透明の縁だけが違う）。
- 光線は `ray_directions` の画素の中心を通るもの。コアは画素 i の中心を i に置くので、同じ Camera でも半画素ずれる。この差を除くと、コアとの差は平均で 0.05/255 程度になる（`tests/test_splat_render.py`）。
- 透視投影の slab は、コアと同じく Camera の前方への奥行きの順。ERP は Camera の位置からの距離の順で、画素の光線で直接球面に描く（立方体の面に分けない）。距離は Camera の向きに変えずに測るので、360 の ERP は Camera の yaw を列の角度の整数倍だけ回すと、列方向にずらした同じ画像になる。180 の ERP は、極の近くで背後の継ぎ目をまたぐ幅の広いガウシアンだけがわずかに変わる。
- 各ガウシアンは、投影した 4σ の楕円を囲む箱の中の画素で評価する。箱の半分の大きさの上限はコアの窓の上限と同じで、ERP の行方向は極に近いほど広げ、行の全体まで許す（極の近くのガウシアンが Camera の向きで切れ方を変えないため）。箱の大きさは 4 から倍々の段に分けて束ねる（コアは 16・64・256。細かくしたのは速さのため）。
- 制限：箱の上限（行方向の半分の大きさ。`max(24, min(幅, 高さ) ÷ 16)` と、全ガウシアンの 3σ の半径の 99.5 パーセンタイルの小さいほう。コアと同じ）より大きく写るガウシアン、つまり Camera のすぐ近くのものや非常に大きいものは、箱の外が切れて四角く欠ける。
- 奥行き（上の「重なり順と合成」の定義）は slab ごとに決まる。slab はガウシアンおよそ 1000 個ごとなので、少ないガウシアンでは粗い。各画素の奥行きは、光線に沿った密度が最大になる位置までの距離を、アルファで重み付けして平均したもの。
- 費用：描画の時間は、評価する（ガウシアン, 画素）の組の数、つまり「手前から全面を覆うまでに描いたガウシアンの数 × 箱の画素の数」にほぼ比例する（計測は `docs/legacy-baselines.md` の「Panorama Studio の描画の計測」）。これに slab ごとに全画素を 1 回なめる分（最大 256 回）が加わる。一度に評価する組は約 1000 万で、それより大きい箱は 1 個ずつ評価するので、ピークのメモリはガウシアンの数と窓の大きさによらずほぼ一定になる（4K の ERP で 2 GB 以下）。

## 読めない 3D ファイル

`scene`・`sticker` 入力の 3D ファイルのうち、どちらの読み手も読まないもの（3DGS の属性のない PLY、形式がなくスプラットでもないもの）は、`_read_scene_file` が入力の名前と読める形式を示す `ValueError` にする（`scene` と `sticker` で同じ文言）。暫定の `NotImplementedError` は残っていない。

FBX・USDZ はメッシュ系の 3D ファイルとして受けるが、コアの Get3DComponents が読めないので、コアの `ValueError` になる。
