# 描画関数

Panorama Studio のバックエンドの描画関数（`render_frame`、重なり順と合成、Sky・World・3D の中身の描き方）と、3D ファイルの読み分けを定める。
用語は `CONTEXT.md` に従う。決めた理由は ADR 0023（座標）、0025（Scene の正）、0034（Sky の直接の標本化）、0035（World をまとめて畳む）、0037（3D の描き方）、0038（既定の照明、`DA3_GEOMETRY`）にある。

この文書が持たない規則：状態 v2・評価関数・Sky の重なり順（`docs/scene-state-v2.md`）、Panorama Studio のノードが Scene を組み立てて撮る規則と出力
（`docs/studio-node.md`）、メモリ・中断・キャッシュ・一時ファイル（`docs/runtime-resources.md`）、エディタでの表示（`docs/threejs-spark-integration.md`）と操作（`docs/editor-interaction.md`）、
基準画像と処理時間の計測（`docs/legacy-baselines.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 描画の入口、層、`cache` の使い回し | `core/render.py` `render_frame`・`RenderLayer`・`Projection` | — | `tests/test_render.py`、`tests/test_memory_cache.py`、`tests/test_studio_scene.py` |
| 重なり順と合成 | `render.py` `composite_frame`、`core/world_render.py` `over_by_depth` | — | `tests/test_render.py`、`tests/test_world_render.py` |
| Sky の標本化（直接の標本化、縮めるときの平均、Sky の幅） | `render.py` `_sky_layers`・`_shoot_sky`・`_sample_filtered`・`_shrink`・`_sky_size` | — | `tests/test_render.py`、`tests/test_studio_node.py`、`tests/test_studio_scene.py` |
| World の層と `world` の Sticker の板 | `world_render.py` `world_layer` | — | `tests/test_world_render.py`、`tests/test_stickers_world.py`、`tests/test_studio_upstream.py` |
| 3D の `world` の Sticker | `world_render.py` `ContentSource`、`nodes.py` `_port_media`・`_resolve_sources`（3D ファイルの `file` の Source） | — | `tests/test_stickers_3d.py` |
| `scene` の共通処理 | `world_render.py` `SceneContent`、`nodes.py` `_scene_content` | — | `tests/test_world_render.py`、`tests/test_scene_mesh.py` |
| MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY` の描画 | `core/mesh_render.py` `render_mesh`・`mesh_content`・`MeshItem`、`scene_mesh.py` `read_mesh_file`・`moge_scene_content`・`da3_scene_content`・`da3_meshes`・`check_da3`・`_with_default_k`・`DA3_EMPTY_MESH`、`sticker_media.py` `content_of`・`is_3d_media`、`nodes.py` `_check_da3_inputs` | — | `tests/test_mesh_render.py`、`tests/test_scene_mesh.py`、`tests/test_stickers_3d.py` |
| `DA3_GEOMETRY` mono の残す画素（keep。エディタ用ファイルと中身の箱が使う。コアの部品の組み立ての順だけを持つ） | `scene_mesh.py` `da3_keep`・`da3_keep_is_empty`・`da3_k`・`da3_points`、`core_adapters.py` の `_da3_build_mask`・`_da3_get_K`・`_da3_unproject`・`depth_map_edge` の読み込み | 深度のグリッドのシェーダーが同じ規則で四角を描く（`web_src/pano_depth_grid.js` の `DEPTH_GRID_VERTEX`。`docs/threejs-spark-integration.md` の「`DA3_GEOMETRY` mono の深度のグリッド」） | `tests/test_scene_mesh.py` `test_da3_keep_is_the_pixels_the_core_keeps`・`test_the_content_box_of_mono_is_the_keep_points_without_converting`、`tests/pano_depth_grid.test.mjs`（fixture `tests/fixtures/da3_depth_grid/`）、下の「エディタとの一致（DA3 mono の場面）」 |
| `MOGE_GEOMETRY` の残す画素（keep。エディタ用ファイルと中身の箱が使う。`triangulate_grid_mesh` の部品の組み立ての順だけを持つ） | `scene_mesh.py` `moge_keep`・`moge_points`・`moge_to_gltf`（作る）、`scene_files.py` `moge_grid_mesh`（`moge_keep` を mask にして `triangulate_grid_mesh` を段差の判定なしで呼ぶ。作る、振る舞いを変えない整理） | 深度のグリッドは DA3 のまま（`web_src/pano_depth_grid.js`） | `tests/test_scene_mesh.py` `test_moge_keep_is_the_pixels_the_grid_mesh_keeps`・`test_moge_content_box_is_the_kept_points`（作る） |
| 光が効く要素（`unlit`） | `core/mesh_render.py` `MeshItem.unlit`、`scene_mesh.py` `is_unlit`・`mesh_scene_content`・`moge_scene_content`・`da3_scene_content` | エディタは `pano_scene_meta` の `unlit` を読む（`web_src/pano_space.js` `sceneFilesOf`。`docs/threejs-spark-integration.md`） | `tests/test_scene_mesh.py`、`tests/test_mesh_render.py`、`tests/test_scene_editor_files.py`、`tests/pano_space.test.mjs` |
| 材質（コアの MESH から読む値） | `scene_mesh.py` `mesh_material`・`mesh_item` | エディタは同じ値を GLB から GLTFLoader で読む | `tests/test_scene_mesh.py`（コアの `mesh_item_to_glb_bytes` が書く GLB の材質と比べる） |
| 既定の照明の値と光の式 | `core/mesh_render.py` `DEFAULT_LIGHTS`・`shade_standard`、`core/three_dfg_lut.py` | `web_src/pano_three_view.js` `DEFAULT_LIGHTS`・`createDefaultLights` | 値は `tests/fixtures/default_lighting.json` を Python（`tests/test_mesh_render.py`）と JS（`tests/pano_scene_loaders.test.mjs`）が読む。式は `tests/test_mesh_render.py` が `tests/fixtures/standard_material_r184.json`（three.js r184 が描いた値。`tools/bake_standard_material.mjs` で焼く）と比べる。エディタの描画は `tests/browser/file_3d.spec.js` |
| メッシュの色とテクスチャの標本化（色空間、wrap、filter、画面の微分）、交差と光の式の精度 | `core/mesh_render.py` `_base_color`・`_sample`・`_solve`・`_intersect`・`_Lighting.partners`・`_Lighting.derivatives` | エディタは GLB の sampler のまま（置き換えない） | `tests/test_mesh_render.py`（線形の空間の補間、CLAMP、mip を使わない、2×2 の微分、面の法線の微分が 0、TF32 を有効にしても同じ値）、下の「エディタとの一致」の場面 |
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

3D（MESH・SPLAT）の `world` の Sticker の Source（`core/world_render.py`）。`content` は `SceneContent`（下記「`scene` の共通処理」）、`frame` はそのうち描く要素の番号で、`StickerSource.frame` と同じく World のキーに入る。`content` は device に置いたものを持つので、描画のパスごとに作る（`PANO_SCENE`・`video` には入れない）。`sky` の Sticker には渡さない。`port` の 3D の Sticker と、3D ファイルの `file` の Source の Sticker（`frame` は常に 0。`docs/studio-node.md` の「3D ファイルの `file` の Source」）が使う。

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

- Source が `ContentSource` の `world` の Sticker（`port` の 3D の Sticker と、3D ファイルの `file` の Source の Sticker）は、板ではなくその中身（`content` の要素 `frame`）を描く。Sticker の変形（`position`・`rotation`・`scale`）は `scene` の変形と同じ意味で、中身自身の座標の点 `x` を World の `position + scale × world_rotation(yaw, pitch, roll) @ x` に置く（`_scene_layer` を共有する）。Keyframe と Clip range は評価関数が決める（他の `world` の Sticker と同じ）。
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

SPLAT（下の「SPLAT の描き方」）と MESH・MoGe・DA3（下の「MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`」）のレンダラーは、`SceneContent(count, render)` を作ってラスタライズだけを受け持つ。

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

### MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`・`DA3_GEOMETRY`

`core/mesh_render.py` が pure torch で三角形を描き、`scene_mesh.py` が入力を要素ごとの `MeshItem`（頂点・面・あれば uv とテクスチャ・頂点色・法線、光が効くかの印 `unlit`、光が効く要素では材質）にする。

- 入力：
  - MESH：要素ごとに `get_mesh_batch_item`（コア。`vertex_counts`・`face_counts` で切る）と、あれば `texture` の同じ番号。座標はそのまま（glTF）。
  - メッシュ系の 3D ファイル（GLB・GLTF・OBJ・STL）：`execute` の入口（`_read_scene_file`）で、コアの Get3DComponents で 1 要素の MESH にする。以降（描画・エディタ用ファイル・`PANO_SCENE`）は MESH として扱う。読んだ MESH は共有のキャッシュ（`core/cache.py`、`docs/runtime-resources.md` の「キャッシュ」）の `mesh_files` に、ディスク上のファイルはパス・更新時刻・大きさ、それ以外はオブジェクトの同一性をキーに入れ、同じファイルでは読み直さず、同じ MESH なのでエディタ用ファイルも使い回す。FBX・USDZ はコアが読めないので、コアのエラーになる。`_read_scene_file` は先にスプラットとして読めるか（下の「SPLAT の描き方」）を見て、読めなかった 3D ファイルのうち形式がメッシュ系のものだけをここで読む。形式のない 3D ファイルはメッシュとしては読まない。
  - `MOGE_GEOMETRY`：フレームごとに `moge_grid_mesh`（GLB のエディタ用ファイルと同じグリッドのメッシュ。深度のグリッドで運ぶ入力も、出力はこのメッシュで描く。下の「MoGe の残す画素」）と `image` の同じフレームをテクスチャにする。読むキーは `points`・`mask`・`image` と `intrinsics` の有無だけ（`tests/test_scene_mesh.py` で、コアの MoGeInference・MoGePanoramaInference が出す形とあわせて固定）。`mask` の外の画素と、コアと同じ段差の判定（`discontinuity_threshold` 0.04）で切れた画素は描かない。
  - `DA3_GEOMETRY`（コアの Run Depth Anything 3 の出力）：下の「`DA3_GEOMETRY` のメッシュ」。
- 描き方：出力の画素ごとの光線（`view.rays`）と三角形の交点を Moller–Trumbore で求め、最も近い交点を残す（距離は光線の長さ）。三角形ごとに、交わりうる画素の範囲だけを試す。
  - 透視投影：Camera の前にある角と、辺が Camera の前の面（`NEAR`）を横切る点のピンホールの像の範囲。
  - ERP：角の経度を囲む最短の弧と、角・辺（大円の弧）の最も高い点と低い点・囲む極までの緯度の範囲。弧が半周以上なら全経度。経度の継ぎ目は列を周期で回してつなぐ。180 は 360 の列の周期で数え、前方の半球の列だけを描く。
  - 三角形の前処理は `TRIANGLES`（約 100 万）ずつ行い、三角形ごとには光線の式（float32 × 10）と画素の範囲（int32 × 4）と累積の組の数（int64）だけを残す。画素と三角形の組は `CHUNK` ずつ試し、画素ごとの最も近い交点を距離のビットと三角形の番号の 64 bit の値の最小（`scatter_reduce` の `amin`）で選ぶ。最後に画素ごとに選ばれた三角形だけで重心座標を求め直して色を付ける（これも `CHUNK` 画素ずつ）。距離が有限でない交点は捨てる。
  - 辺と頂点の上の画素の中心が丸めで抜けないよう、重心座標の判定を `EDGE` だけ広げる（MoGe のグリッドを同じ大きさで描くと、すべての画素の中心が頂点の上に来る）。
- 色（`core/mesh_render.py` の `_base_color`）：base color は、下の「材質」の表の base color と同じ値（テクスチャを sRGB から線形に戻したもの × 頂点色の RGB（線形）× `material.base_color_factor` の RGB。テクスチャも頂点色も無い要素の値は、表の base color の補足のとおり）とする。`MOGE_GEOMETRY` の要素はテクスチャだけ。光が効く要素も効かない要素も、同じ base color を使う（エディタの `makeUnlit` も GLTFLoader の `color`（`baseColorFactor`）・`map`・頂点色を保つ）。テクスチャは uv (0, 0) を画像の左上とし、下の「テクスチャの標本化」で標本化する。`EDGE` の内側で三角形の外に出た交点は、重心座標を三角形の中に寄せてから値を補間する。光が効かない要素（下の「光が効く要素」）は base color をそのまま、光が効く要素は下の「既定の照明」と「光の式」で照らした色を出す。どちらも線形の値を、層を返す前に three.js と同じ `sRGBTransferOETF` で sRGB にする（下の「光の式」の色空間）。頂点色のアルファとテクスチャのアルファは読まず、当たった画素は不透明にする。
  - MoGe の uv は画素 `x / (W − 1)` なので、テクセルの中心で標本化すると画像の端で最大半テクセルずれる。エディタ（three.js）の表示と同じである。
- 両面を描く（MoGe のパノラマの面は外向きで、原点の Camera からは裏面になる）。縁はアンチエイリアスしない。
- エディタは、この描画と揃えるため、光が効かない要素の GLB を光源の影響を受けない材質（`MeshBasicMaterial` 相当）で、光が効く要素の GLB を同じ既定の照明と同じ材質（`MeshStandardMaterial`）で、どちらも両面（`DoubleSide`）に描く（`docs/threejs-spark-integration.md`）。エディタが印を知る経路は下の「光が効く要素」。
- 要素は描画のパスの間だけ、直前に描いた 1 つを device に置いておき、同じ要素の次のフレームでは置き直さない（`mesh_content`）。
- VRAM は、描画のパスの始めにまとめて見積もって空ける（`docs/runtime-resources.md` の「デバイスとメモリ」。中身のテンソルの大きさを見積もりに入れる）。
- MoGe のグリッドは ERP の経度の継ぎ目（最後の列と最初の列の間）と極の周り（最初と最後の行の外）をつながないので、出力が MoGe より細かいとそこに 1〜2 画素の隙間が出る。コアの MoGePointMapToMesh とエディタの GLB も同じである。

### テクスチャの標本化

メッシュのテクスチャ（base color、`metallic_roughness`、法線マップ、発光）は、three.js r184 がエディタ用の GLB を描くときと同じ規則で標本化する（ADR 0037 の条件 8 と「テクスチャの mip」。`core/mesh_render.py` の `_sample`）。

- 色空間：base color と発光のテクスチャは、テクセルを sRGB から線形に戻してから補間する。three.js は sRGB のテクスチャを `SRGB8_ALPHA8` で GPU に上げ、GPU が線形に戻してから補間する（`src/renderers/webgl/WebGLTextures.js:234`）。`metallic_roughness` と法線マップは線形のまま補間する。
- 位置：uv (0, 0) が画像の左上で、テクセルの中心で標本化する。
- wrap と filter：コアの `save_glb` が書く sampler（wrap は `CLAMP_TO_EDGE`、filter は拡大・縮小とも `LINEAR`、`comfy_extras/nodes_save_3d.py:363-365`）を、three.js がエディタ用の GLB に当てるとおりに標本化する。three.js は GLB の sampler に従う（`examples/jsm/loaders/GLTFLoader.js:3265-3267`）ので、エディタはファイルを置き換えずにこの規則になる。規則の owner はコアの `save_glb` の sampler で、出力はそれを写す。
  - uv は 0〜1 に寄せ（`CLAMP_TO_EDGE`）、双線形に補間する（隣の画素は画像の端で延ばす）。0〜1 の外の uv を折り返さない。
  - mip は使わない（エディタも使わない）。ADR 0037 の「テクスチャの mip」は、エディタと同じ標本化にすることで満たす。遠くの細かいテクスチャのちらつきは出力とエディタで同じに残る。mip は次の候補とする。
  - 元のファイルの sampler はコアの読み手が捨てるので、uv を 0〜1 の外で繰り返すファイルは端の色が伸びる（Load3D で SaveGLB の GLB を見たときと同じ）。
  - コアが `save_glb` の sampler を変えたら、この規則と一致の場面を合わせ直す。

#### 画面の微分

光の式の `geometryRoughness`（法線の画面の微分）と、接線の無い法線マップの接空間に使う（mip は使わないので、uv の微分は接空間にだけ使う）。three.js の `dFdx`・`dFdy` に当たる。

- 値の求め方：出力の画素を 2×2 の組に分け、組の相手の画素の光線を、当たった三角形と同じ平面と交差させ、uv と法線を外挿して差を取る（GPU の helper の画素と同じ考え方。ADR 0037 の試作で分かったこと）。隣が別の面・別の物・空でも働き、画像全体の一時の領域を要らない。
- 法線は Camera の向きの座標（three.js のビュー空間と同じ。`camera_basis` の右・上・後ろ）で表してから微分する。`geometryRoughness` は成分ごとの最大を取るので、座標の向きで値が変わるためである。
- 軸：透視投影も ERP も、出力の画像の画素の軸（隣の列と隣の行）で取る。GPU の画面の `dFdx`・`dFdy` と同じ。ERP の経度の継ぎ目は列を周期でつなぐ。GPU の数値の決め方を写す。エディタは ERP を描かないので、ERP の値はエディタと比べられない（透視投影の場面で比べる）。
- 法線の無い要素（面の法線で照らす。下の「材質」の表の法線）：`geometryRoughness` は面の法線の画面の微分で、2×2 の組の中では 0 になる。GPU では組の helper の画素は同じ三角形のもので、面の法線は組の 4 画素で同じだからである。組の相手の画素が別の面や空の上にあっても 0 とする（`tests/test_mesh_render.py` の `test_flat_shading_has_no_geometry_roughness_even_at_a_face_edge`）。法線マップの接空間に使う位置と uv の微分は、この要素でも上の求め方で取る。

#### 精度

交差と光の式は、グローバルな精度の設定（`torch.backends.cuda.matmul.allow_tf32` など。ほかの custom node や利用者が変えうる）に左右されない演算で書く（要素ごとの積和にするか、呼び出しの中で TF32 を明示的に切る）。ADR 0037 の試作で、TF32 を有効にすると環境の間の基準を超えた。`mesh_render.py` の `_ray_planes`・`_solve`（`_intersect` と `_Hit` が使う）は要素ごとの積和で書き、行列積を使わない（`tests/test_mesh_render.py` の `test_lit_meshes_do_not_depend_on_the_matmul_precision`）。

### MoGe の残す画素

`MOGE_GEOMETRY` の深度のグリッドのエディタ用ファイル（`docs/studio-node.md` の「`MOGE_GEOMETRY` の透視投影の列のエディタ用ファイル」）と中身の箱は、`moge_grid_mesh` を呼ばず、それが頂点に残す画素（keep）を、同じコアの部品を同じ順に組み立てて求める（`scene_mesh.py` の `moge_keep`。作る）。描画は `moge_grid_mesh` のまま。決めた理由は ADR 0040。

- フレーム `i`（`p = points[i]`、`d` は段差の判定に使う値：透視投影（`intrinsics` あり）は `p[..., 2]`、パノラマは `p.norm(dim=-1)`。`moge_grid_mesh` が `triangulate_grid_mesh` に渡すものと同じ）：
  1. `finite = isfinite(p).all(-1)`
  2. `mask = mask[i] & finite`（`mask` のない入力は `finite`）
  3. `edge = depth_map_edge(where(finite, d, 0), rtol=0.04)`（`kernel_size` は既定の 3、`atol` は渡さない）
  4. `keep = mask & ~edge`
- `comfy/ldm/moge/geometry.py:152-164`（`triangulate_grid_mesh`）と同じ順。DA3（上の「mono の残す画素」）と違い、段差の判定で 0 にするのは `finite` の外だけで、`mask` の外の画素の値は段差の判定に残る（コアと同じ）。
- 四角と三角形、空の要素（4 隅が keep の四角が 1 つもない要素）は DA3 と同じ（`triangulate_grid_mesh`、`:184-187`）。`moge_grid_mesh` の面が 0 の要素が空の要素である。
- 点：keep の画素の `points` を、透視投影は `(X, −Y, −Z)`、パノラマは軸の並べ替え `[1, 2, 0]` で glTF にしたもの（`moge_points`。`moge_grid_mesh` と同じ）。中身の箱はこの点を囲む。
- 一致の test（`tests/test_scene_mesh.py` の `test_moge_keep_is_the_pixels_the_grid_mesh_keeps`。作る）：`mask` の外、`apply_mask` で inf の画素、NaN、段差のある画素、`mask` のない入力、透視投影とパノラマを含む合成の `MOGE_GEOMETRY` で、今の組み立てのまま呼んだコアの `triangulate_grid_mesh(points, mask, depth=d)`（段差の判定 0.04。整理の後の `moge_grid_mesh` は keep をそのまま使うので、比べる相手はコアの関数にする）の頂点の uv から戻した画素の集合（`x = round(u × (W − 1))`、`y = round(v × (H − 1))`）が `keep` と等しいこと、頂点が `moge_points` と等しいこと、面の集合が keep の四角と等しいこと、面が 0 の要素で空の判定が一致することを確かめる。`moge_grid_mesh` とコアの MoGePointMapToMesh が一致する範囲（`mask` がなく、パノラマでは `depth` が点の距離のとき）は、今ある `tests/test_scene_editor_files.py` の比べ方が守る。
- `moge_grid_mesh` は、`triangulate_grid_mesh` を `mask = moge_keep(...)`・`discontinuity_threshold = 0` で呼び、`moge_to_gltf`（`moge_points` と同じ軸の変換）で glTF にする（作る。振る舞いを変えない別の commit）。keep と軸の変換の owner は `moge_keep` と `moge_to_gltf` の 1 つずつになる。

### `DA3_GEOMETRY` のメッシュ

`DA3_GEOMETRY`（コアの Run Depth Anything 3 の出力の辞書）は、`MOGE_GEOMETRY` と同じく要素を出力のフレームに順に対応させ、フレームごとのグリッドのメッシュにする（`scene_mesh.py` の `da3_scene_content`）。光は効かない（上の「光が効く要素」）。コアの Convert DA3 Geometry to Mesh は `batch_index` の 1 つしか出さないので、それを通すと動きが失われる（ADR 0038）。

- mono の要素の数は `depth` の 1 つ目の次元（multiview は 1 つ。下の「multiview」）。要素 `i` のメッシュは、コアの `DA3GeometryToMesh.execute` を `batch_index = i` と、そのノードの既定の値（`decimation` 1、`discontinuity_threshold` 0.04、`confidence_threshold` 0.1、`use_sky_mask` 真、`texture` 真）で呼んだ MESH そのものとする（`comfy_extras/nodes_depth_anything_3.py:480-571`）。変換をここに写さない。コアの内部のシンボルなので `core_adapters.py` から読み込む。
- 変換した MESH は、入力と要素ごとに共有のキャッシュ（`core/cache.py` の `da3_meshes` の名前空間。キーは `mode` と、メッシュの元になるテンソルの同一性）に入れ、`scene_mesh.py` の `da3_meshes` が返す。変換を呼ぶのは描画（`da3_scene_content`）と、multiview のエディタ用ファイルと中身の箱だけである。mono のエディタ用ファイルと中身の箱は変換を呼ばず、下の「mono の残す画素」から作る。
  - mono の要素は、1 回の描画のパスの中では 1 回だけ変換する（要素は出力のフレームの順に進み、`mesh_content` が直前の要素を device に持つ）。最初のフレームの描画と `video` の読み出しは別のパスなので、後のパスは、共有のキャッシュ（`MemoryCache`）の上限に収まって残っている要素を変換し直さず、追い出された要素だけをもう一度変換する（キャッシュはメモリを上限の中に保つ）。1080p で 1 要素の変換は約 0.09 秒（実測）。
- コアの変換がすること（コアが owner。ここでは事実として書く）：
  - 有限でない `depth` を 0 にしてから、画素の座標 `(u, v)`（整数の画素の番号）を `K⁻¹` で戻して `depth` を掛け、OpenCV の Camera の座標の点にする（`_da3_unproject`、`:49-57`）。`depth` は光線の長さではなく、Camera の前方への奥行き（z）である。
  - `K` は `intrinsics` があればその要素の値、なければ仮の値（`_da3_get_K`・`_da3_default_K`、`:60-77`）。Panorama Studio は mono の要素に仮の値を前もって `intrinsics` として渡す（下の「mono の画角と座標」）。仮の値は `fx = fy = 0.7 × W`、主点 `((W − 1) ÷ 2, (H − 1) ÷ 2)` で、水平の画角は約 71°（`2 · atan((W − 1) ÷ (1.4 W))`。コアのログと docstring は「約 60°」と書くが、式の値は約 71°）。コアは仮の値を使うたびにログに警告を出す。
  - `extrinsics`（world から Camera への `[R|t]`）があれば、その逆を掛けて、すべての視点に共通の world の座標にする（`_da3_get_extrinsic`・`_da3_apply_extrinsic`、`:80-107`）。値が有限でなければ Camera の座標のままにする。
  - 捨てる画素：`sky` があれば `sky ≥ 0.5` の画素（`use_sky_mask`）。`confidence` があれば、要素ごとに最小と最大で 0〜1 に正規化した値が 0.1 未満の画素（`_da3_build_mask`・`_normalize_confidence`、`:110-129`）。`depth` が 0 以下か有限でない画素。捨てた画素は点を無限にして、`triangulate_grid_mesh`（`comfy/ldm/moge/geometry.py:144-188`）が頂点にしない。段差の判定は `depth`（z）で、`MOGE_GEOMETRY` と同じ 0.04。捨てた画素は段差の判定では奥行き 0 として扱われるので、その隣の画素も段差として落ちることがある（コアと同じ）。
  - 全画素を頂点にし、4 隅が残る格子の四角を三角形 2 つにする。uv は `x ÷ (W − 1)`・`y ÷ (H − 1)`、テクスチャは `image` の同じ要素（RGB）。座標は OpenCV から glTF へ `(x, −y, −z)`、面の向きを反転（`:559-562`。MoGe の透視投影と同じ）。法線は持たない。
- 既定の値は Convert DA3 Geometry to Mesh の既定と同じにする。コアの DA3 のほかの経路は、既定で空も信頼度も使わない：Run Depth Anything 3（`DA3Inference`）は `sky`・`confidence` を生の値で辞書に入れるだけで画素を捨てない（`:299-367`）。DA3Render の `apply_sky_clip` は既定で偽で、正規化にだけ使う（`:380`）。点群への変換（`DA3GeometryToPointCloud`）は既定が Convert DA3 Geometry to Mesh と同じ（空を使い、信頼度 0.1）だが、ノードとして登録されていない（`:676`）。
- 座標：mono の要素は、DA3 の Camera を `scene` 自身の原点に置き、`−Z` を向き、像の上が `+Y` になる。`scene` の変形が既定で、Camera が原点で回転 0 なら、透視投影の出力の中央に像の中央が来る（画角が `K` と同じなら像と重なる）。
- 画素が全部捨てられてメッシュが空になる要素は、`MOGE_GEOMETRY` と同じく空の要素にする（描かず、エディタ用ファイルは `null`。実行は止めない）。コアの変換はこのとき `ValueError`（`DA3GeometryToMesh produced an empty mesh. ...`、`comfy_extras/nodes_depth_anything_3.py:552-557`）を出すので、`da3_meshes` はこの文言（`DA3_EMPTY_MESH`）で始まる `ValueError` だけを空の要素として受け、ほかの例外はそのまま通す。例外にならずに返った MESH でも、面が 0 なら空の要素にする（`MOGE_GEOMETRY` と同じ。`scene_files.py:33-34`）。
  - 描画は、呼ぶ前に空かを確かめない。mono のエディタ用ファイルは下の「mono の残す画素」で空かを決めるが、それはコアの部品を組み立てたもので、捨て方を写したものではない。二つが同じ要素を空とすることは、その節の test で守る。
  - コアが文言を変えると、空の要素でもコアのエラーで実行が止まる（黙って別の扱いにはならない）。文言は `tests/test_scene_mesh.py` の `test_the_core_names_an_all_empty_frame_by_the_text_da3_scene_content_takes` で、全画素が空の `DA3_GEOMETRY` をコアに渡して固定する。

#### mono の画角と座標

mono（`mode` が `"mono"`。`intrinsics` も `extrinsics` も持たない）の要素は、コアの仮の `K`（`_da3_default_K`、水平約 71°）と、コアの OpenCV から glTF への変換（`(x, −y, −z)` と面の向きの反転。MoGe の透視投影と同じ）をそのまま使う。画角を持つ値も UI も足さない（ADR 0038 の物差しと、一つの規則に一つの owner）。

- `intrinsics` の無い辞書は、`DA3GeometryToMesh` を呼ぶ前に（`_with_default_k`）、`intrinsics` だけを足した浅い写しにする。値はコアの `_da3_default_K(H, W)`（`H`・`W` は `depth` の大きさ）を (1, B, 3, 3) に並べたもの（B は要素の数）。`_da3_default_K` はほかのコアのシンボルと同じく `core_adapters.py` から読み込む。コアの `_da3_get_K` はこの値を読むので、要素ごとの警告を出さない（`comfy_extras/nodes_depth_anything_3.py:68-77`）。`intrinsics` を読むのは `_da3_get_K` だけなので、できるメッシュは写しを作らずに呼んだときと同じで、仮の `K` の owner はコアのままである。入力の辞書そのものは変えない。
- 描画とエディタ用ファイルのどちらの経路も、この写しを使う。
- 代わりに Panorama Studio が、実行ごとに 1 回だけ警告をログに出す（`nodes.py` の `_check_da3_inputs`。入力が `intrinsics` を持たないので、コアの既定の水平約 71° の画角を使った、という内容）。
- `extrinsics` を持つ mono の辞書は、`execute` の入口の `check_da3`（multiview の姿勢の無いモデルの判定と同じ場所）で、mono は `extrinsics` を持たないと示す `ValueError` にする（`tests/test_scene_mesh.py` の `test_a_mono_dict_with_extrinsics_stops_at_the_entry`）。コアの変換は `extrinsics` を掛けるが、エディタの深度のグリッドは掛けないので、受けるとエディタと出力が黙って食い違うためである。
- 元の写真の画角と違えば、形が奥行きの方向に伸び縮みする（スケールでは直らない）。画角を合わせる機能は、要る素材が出たときに足す。
- 写しと警告は `tests/test_scene_mesh.py` の `test_mono_frames_are_the_cores_meshes_with_its_default_k_and_one_warning_per_run` で守る：写しから作ったメッシュが写しを作らずにコアで変換したものと一致すること、コアの警告が出ないこと、Panorama Studio の警告が 1 回であること。

#### mono の残す画素

mono の要素のエディタ用ファイル（`docs/studio-node.md` の「`DA3_GEOMETRY` mono のエディタ用ファイル」）と中身の箱は、コアの変換（`DA3GeometryToMesh.execute`）を呼ばず、コアの部品を組み立てて、変換が頂点に残す画素（`keep`）を求める（`scene_mesh.py` の `da3_keep`）。捨て方の規則はコアの部品が持ち、ここが持つのは組み立ての順だけである。値は変換と同じ `DA3_MESH_DEFAULTS` から読む。決めた理由は ADR 0039。

- 要素 `i`（`depth` は入力の `depth[i]`、`H`・`W` はその大きさ、`g` は `_with_default_k` の写し）：
  1. `mask = _da3_build_mask(g, i, H, W, confidence_threshold, use_sky_mask) & (depth > 0) & isfinite(depth)`（コアの `comfy_extras/nodes_depth_anything_3.py:540-542` と同じ式。`confidence_threshold` 0.1、`use_sky_mask` 真）
  2. `edge = depth_map_edge(where(mask, depth, 0), rtol=discontinuity_threshold)`（`comfy/ldm/moge/geometry.py` の `depth_map_edge`。`triangulate_grid_mesh` は `finite`（点が有限か）の外を 0 にした奥行きを同じ関数に渡す。`:153-164`。`discontinuity_threshold` 0.04、`kernel_size` は既定の 3、`atol` は渡さない）
  3. `keep = mask & ~edge`
- 1 の `mask` と、`triangulate_grid_mesh` の `finite` は同じ画素になる。コアは `mask` の外の点を無限にし、`mask` の中の点は有限の `depth` と有限の `K⁻¹` の積だからである（`K` が逆行列を持たないか、積があふれる値では違いうる。test で固定する）。
- 四角：格子の四角（左上 `a = (x, y)`、`b = (x+1, y)`、`c = (x+1, y+1)`、`d = (x, y+1)`）は、4 隅がすべて `keep` のときだけ描かれ、三角形は `(a, b, c)` と `(a, c, d)`（対角線は `a`–`c`）。コアの `triangulate_grid_mesh`（`comfy/ldm/moge/geometry.py:184-187`）が作る面で、glTF にするとき面の向きが反転する（両面に描くので見た目は変わらない）。
- 空の要素：`keep` の 4 隅を持つ四角が 1 つもない要素（`da3_keep_is_empty`）。コアの変換が空のメッシュのエラー（`DA3_EMPTY_MESH`）を出す要素と同じである（頂点はあっても面が 0 なら、コアはエラーにする）。
- 点の位置：画素 `(x, y)`（整数の画素の番号）の点は、コアの `_da3_unproject` と同じく `depth × K⁻¹ · (x, y, 1)` を glTF の `(X, −Y, −Z)` にしたもの。`K` はコアの `_da3_get_K(g, i, H, W)`（`da3_k`）。中身の箱は、空でない要素の `keep` の画素の点を `_da3_unproject` で求めて（`da3_points`）囲み、コアの変換を呼ばない（`docs/studio-node.md` の「中身の箱」）。
- 一致の test（`tests/test_scene_mesh.py` の `test_da3_keep_is_the_pixels_the_core_keeps`）：空（`sky ≥ 0.5`）、信頼度が 0.1 未満、`depth` が 0 以下・NaN・inf、段差のある画素を含む合成の `DA3_GEOMETRY`（mono、`intrinsics` の有無の両方）を、同じ入力のままコアの `DA3GeometryToMesh.execute` に通す。頂点の uv から画素を戻した集合（`x = round(u × (W − 1))`、`y = round(v × (H − 1))`）が `keep` と等しいこと、頂点の位置が `_da3_unproject` の `keep` の点の glTF と等しいこと、面の集合が上の「四角」と等しいこと、全画素を捨てた要素と段差だけで四角が残らない要素で、コアが `DA3_EMPTY_MESH` のエラーを出し、`da3_keep` が空の要素とすることを確かめる。コアが部品か組み立てを変えたら、この test が落ちる。

#### multiview

multiview（`mode` が `"multiview"`）の `DA3_GEOMETRY` は、同じ場面を S 個の視点から見たもので、時間ではない。全体を 1 つの静止した要素にし、S 個の視点のメッシュをまとめて描く。mono はフレームごとの要素のまま（上記）。

- 視点 `i` のメッシュは、コアの `DA3GeometryToMesh.execute` を `batch_index = i` と mono と同じ既定の値で呼んだ MESH。コアが視点の `extrinsics` の逆を掛けるので、すべての視点が共通の world の座標に並ぶ（上の「コアの変換がすること」）。multiview は `intrinsics` を持つので、仮の `K` の写しは作らない。
- 各視点は自分の写真（`image` の同じ要素）をテクスチャに持つ。視点の重なる所は面が二重になる。そのまま受け入れ、まとめ直さない。
- 姿勢の無いモデル：モデルが姿勢を出さないと、コアは `extrinsics` を 4 × 4 の単位行列、`intrinsics` を 3 × 3 の単位行列で埋める（`comfy_extras/nodes_depth_anything_3.py:345-350`）。このとき `K = I`（`fx` = 1 画素、主点 0）でメッシュが潰れる。Panorama Studio は、すべての視点の `intrinsics` が 3 × 3 の単位行列と完全に等しい（要素ごとの厳密な一致）ときにこの場合と判定し（`check_da3`）、このモデルは multiview の姿勢を出さないので mono で推論するよう示す `ValueError` にする。エラーは読めない 3D ファイルと同じ `execute` の入口で出すので、`scene` でも `sticker` でも描画を始めず、`PANO_SCENE` も出ない（下の「読めない 3D ファイル」と同じ扱い）。
  - 判定が確かな理由：単位行列はコアが `torch.eye(3)` で埋めた値そのもので、厳密に一致する。モデルが出す `intrinsics` は画素の単位で、焦点距離 1 画素・主点 (0, 0) のカメラは実際の画像ではありえない。`extrinsics` は判定に使わない（基準の視点は正しい姿勢でも単位行列になりうる）。
- 空の視点：メッシュが空で返る視点（mono の空の要素と同じ判定。上記）は除く。すべての視点が空なら、要素は空の要素になる（描かず、エディタ用ファイルは `null`。実行は止めない）。
- 要素の数と出力フレームの対応：要素は 1 つ。1 要素の MESH と同じく、Clip range の間ずっと同じ要素を描く（`sticker_media.py` の `batch_index` は要素が 1 つなら常に 0）。
- 光：効かない（ほかの `DA3_GEOMETRY` と同じ。上の「光が効く要素」）。
- 描画：`core/mesh_render.py` の `mesh_content` は、要素を 1 つの `MeshItem` か、`MeshItem` のリストとして受ける。multiview の要素は視点ごとの `MeshItem` のリスト（`da3_scene_content`）で、`mesh_content` が視点ごとに描き、`over_by_depth` で 1 つの層に畳む。`over_by_depth` の結果は乗算済みのアルファなので、`render` の戻り値の約束に合わせてストレートアルファに戻して返す（メッシュの画素のアルファは 0 か 1 なので、値は変わらない）。リストが空（すべての視点が空）なら空の層を返す。`SceneContent` の契約（要素ごとに 1 つの層を返す）は変えない。device に置くのは、描いている要素の全視点。
- エディタ用ファイル：視点ごとに 1 つの GLB（MESH と同じコアの `mesh_item_to_glb_bytes`）にし、まとめた GLB は作らない。コアの `save_glb` は 1 つの GLB に材質とテクスチャを 1 つしか書かないので、まとめるには GLB の書き出しを自前で持つことになり、書き出しの owner が二つになるためである。`pano_scene_files`（`pano_sticker_files`）は要素が 1 つのリストで、その値は空でない視点の GLB の `ui` の項目のリストになる。すべての視点が空なら `[null]`。mono は GLB ではなく、フレームごとの深度のファイル（`keep` の外は 0）で、空のフレームは `null`（`docs/studio-node.md` の「`DA3_GEOMETRY` mono のエディタ用ファイル」）。エディタでの読み方と大きさの上限は `docs/threejs-spark-integration.md` の「空間の表示」の `scene` の要素の読み込み。`pano_scene_meta` の `unlit` は真。

### 光が効く要素

光が効くのは、MESH 型の要素のうち、コアの `MESH.unlit` が偽のものだけである（ADR 0038）。どの要素に光が効くかは使う人に見せず、状態にも入力にも持たない。

| 要素 | 光 |
|---|---|
| `scene`・`sticker` の MESH、メッシュ系の 3D ファイル（`_read_scene_file` で MESH に読んだもの） | `MESH.unlit` が偽なら効く。真なら効かない |
| `MOGE_GEOMETRY`・`DA3_GEOMETRY`（Panorama Studio が自分でメッシュにする） | 効かない |
| SPLAT・スプラット系の 3D ファイル、背景、Sky、ペイント、`world` の Sticker の板 | 効かない（光の式を通らない） |

- `MESH.unlit` は、コアの glTF の読み手が `KHR_materials_unlit` の有無から立てる（`comfy_extras/mesh3d/fileio/gltf_read.py:363`、`comfy_extras/nodes_mesh_io.py:147`）。コアの splat からメッシュへの変換も立てる（`comfy_extras/nodes_gaussian_splat.py:1591`）。材質の無い OBJ・STL と、材質の無い glTF は偽になり、照らす。
- 同じ GLB を 3D ファイルとして置いても、Get3DComponents の MESH としてつないでも同じになる。例外：コアの SaveGLB はテクスチャのある MESH には `KHR_materials_unlit` を書かない（`comfy_extras/nodes_save_3d.py:369`）ので、テクスチャ付きで印の立った MESH は、Load3D では照らされ、Panorama Studio では照らされない。同じ理由で、テクスチャ付きの要素のエディタ用 GLB は印を持たないので、エディタは印を GLB からではなく、実行結果の `pano_scene_meta`（3D の Sticker は `pano_sticker_meta`）の `unlit` から知る（`docs/studio-node.md`）。
- コアの MoGePointMapToMesh と Convert DA3 Geometry to Mesh の MESH は印が無いので照らされ、写真に写った光と二重になる（Load3D で見ても同じ）。避けたいときは `MOGE_GEOMETRY`・`DA3_GEOMETRY` を直接つなぐ。
- 印は `MeshItem.unlit` が運ぶ。MESH は `MESH.unlit`、`MOGE_GEOMETRY`・`DA3_GEOMETRY` は真にする。`PANO_SCENE` の層は `scene` に MESH そのものを持つので、使う側でも同じ印になる。
- 要素ごとの明るさの倍率は持たない。3D ファイルの中の光源（`KHR_lights_punctual`）は読まない（ADR 0038）。

### 既定の照明

光が効く要素は、いつもこの照明で描く。照明を切り替える UI も状態の項目も持たない。値はこの節だけが持ち、Python と JS の定数は `tests/fixtures/default_lighting.json` と一致することを parity の test で守る。

| 光源 | 強さ | 位置 |
|---|---|---|
| 環境光（AmbientLight） | 1.5 | — |
| 平行光源（DirectionalLight） | 2.4 | (0, 10, 10) |
| 平行光源 | 1.5 | (0, 10, −10) |
| 平行光源 | 0.9 | (−10, 0, 0) |
| 平行光源 | 0.9 | (10, 0, 0) |
| 平行光源 | 0.6 | (0, −10, 0) |

- 出典：ComfyUI の Load3D の既定。ComfyUI_frontend（5276d1b）の `src/extensions/core/load3d/LightingManager.ts:39-59` の光源と倍率（0.5・0.8・0.5・0.3・0.3・0.2）に、`src/extensions/core/load3d.ts:197-203` の `Comfy.Load3D.LightIntensity` の既定 3 を `setLightIntensity`（`LightingManager.ts:62-66`）のとおり掛けた値。
- 平行光源は、位置から World の原点へ向かって照らす（three.js の DirectionalLight の `target` は原点の Object3D で、光の向きは位置 − `target` の位置。`src/lights/DirectionalLight.js:70`、`src/renderers/webgl/WebGLLights.js:509-512`）。距離による減衰は無い。
- 色はすべて白（強さだけが違う）。影は無い。tone mapping は無い。
- 光源は World に固定する。Camera にも、`scene` と Sticker の変形にも付いて動かない。`render` は中身自身の座標で描くので、光の向きに `scene` の回転の逆、3D の `world` の Sticker では Sticker の回転の逆を掛けてから使う（`scale` は向きを変えない）。

### 材質

コアの読み手は最初の材質だけを取り、ほかの材質の値は捨てる（`comfy_extras/nodes_mesh_io.py:115-120`）。光が効く要素の材質は、コアの `save_glb` がその MESH から書く glTF の材質（`comfy_extras/nodes_save_3d.py:383-441`）を、three.js r184 の GLTFLoader が `MeshStandardMaterial` にしたものとする。エディタはこの GLB をそのまま読むので、同じ材質になる（`scene_mesh.py` の `mesh_material` が同じ値を MESH から求め、`mesh_item_to_glb_bytes` が書いた GLB の材質と比べる test で守る）。

| 使う値 | MESH のどこから | 補足 |
|---|---|---|
| base color | `texture`（RGB）× 頂点色（RGB）× `material.base_color_factor` の RGB | テクスチャは sRGB として線形に戻し、頂点色と係数は線形のまま掛ける（GLTFLoader が `map` を `SRGBColorSpace` にする。`examples/jsm/loaders/GLTFLoader.js:3582`）。`unlit` でテクスチャの無い MESH は、`save_glb` が `KHR_materials_unlit` の材質（`baseColorFactor` 1.0、metalness 0、roughness 1）を書き、`material` の上書きを使わない（`nodes_save_3d.py:369-381`）ので、係数は 1.0 で、頂点色も無ければ白（1.0）になる。それ以外の、テクスチャも頂点色も無い要素は 0.22 の灰色（PBR の材質の `save_glb` の既定 `BARE_COLOR`。`nodes_save_3d.py:383-387`） |
| metalness・roughness | `material.metallic_factor`・`roughness_factor` × `metallic_roughness` の B・G | 既定は `save_glb` が決める（素のジオメトリは 0・0.5、テクスチャか頂点色があれば 0・1.0、`metallic_roughness` があれば係数 1.0。`nodes_save_3d.py:384-411`）。glTF の材質を持つ 3D ファイルでは、係数の無い値は glTF の既定の 1.0（`gltf_read.py:384-385`） |
| 法線 | `normals` | 無ければ面の法線（GLTFLoader は `NORMAL` の無い GLB を `flatShading` にする。`GLTFLoader.js:3446`。`save_glb` は `normals` が無ければ `NORMAL` を書かない） |
| 法線マップ | `normal_map`・`tangents`・`material.normal_scale` | 接線が無ければ画面の微分から作る（`normal_fragment_maps`・`normalmap_pars_fragment` の `getTangentFrame`。GLTFLoader はこのとき `normalScale.y` を反転する。`GLTFLoader.js:3507-3510`） |
| 遮蔽 | `metallic_roughness` の R（`occlusion_in_mr` が真のときだけ）× `material.occlusion_strength` | 環境光の分にだけ掛かる（`aomap_fragment`）。ORM に詰めていない `occlusionTexture` はコアの読み手が捨てる（`gltf_read.py:374-378`） |
| 発光 | `emissive`（sRGB）× `material.emissive_factor`（1 に寄せる）× `emissive_strength` | `nodes_save_3d.py:425-441`、`emissivemap_fragment`、`src/renderers/webgl/WebGLMaterials.js:150` |

- 使わない値：`material.double_sided`（光が効く要素も両面に描き、裏から見た面は法線を反対に向けて照らす。three.js の `DoubleSide` と同じ。`normal_fragment_begin`）。理由：今もすべてのメッシュを両面に描いており振る舞いを変えないためと、MoGe・DA3 のような閉じていないメッシュは裏から見られるためである。アルファ（`alphaMode`・`alphaCutoff` はコアの読み手が読まず、`save_glb` も書かないので、いつも不透明）。
- コアの読み手が捨てるので届かない値：2 つ目以降の材質、`KHR_texture_transform`、`TEXCOORD_1`、テクスチャのアルファ（RGB で読む）、`KHR_materials_*` のうち `unlit` と `emissive_strength` 以外（`gltf_read.py:330-388`）。複数の材質は 3D ファイルの投入の作業で扱う（ADR 0038）。

### 光の式

光が効く要素の色は、three.js r184 の `MeshStandardMaterial` を上の照明で描いた色と同じにする（物理的に正しい単位。r155 以降の three.js の既定）。式は three.js の shader chunk を写し、three.js の版が上がるたびに写し直す（ADR 0031、0037）。読んだ源は `node_modules/three/src/renderers/shaders/` の下（以下、chunk の名前で書く）。

- 照らす色（線形）＝ 平行光源ごとの直接光の和 ＋ 環境光の拡散 ＋ 発光（`meshphysical.glsl.js:193-198`）。
  - 直接光：光源ごとに `RE_Direct_Physical`（`lights_physical_pars_fragment.glsl.js:527-558`）。照度 `saturate(N·L) × 強さ` に、鏡面の `BRDF_GGX_Multiscatter`（同 `:424-460`。単散乱の `BRDF_GGX` `:153` と、16 × 16 の DFG の表 `DFGLUTData.js:36` による多重散乱の補償）と、拡散の `BRDF_Lambert(diffuseContribution)`（`common.glsl.js:94-98`、色 ÷ π）を掛ける。光の向きと色は `getDirectionalLightInfo`（`lights_pars_begin.glsl.js:88-94`）、色は強さ × 白（`WebGLLights.js:281`）。
  - 環境光：照度は強さそのもの（`getAmbientLightIrradiance`、`lights_pars_begin.glsl.js:48-54`。`WebGLLights.js:261-264`）で、`RE_IndirectDiffuse_Physical`（`lights_physical_pars_fragment.glsl.js:561-577`）の拡散だけになる。環境マップが無いので、`RE_IndirectSpecular_Physical` の入力（`radiance`・`iblIrradiance`）は 0 で、鏡面の間接光は 0 になる（`lights_fragment_begin.glsl.js:175-212`、`lights_fragment_maps`、`lights_fragment_end.glsl.js:10-16`）。遮蔽はこの拡散にだけ掛かる（`aomap_fragment`）。
  - 材質の値：`diffuseContribution = base color × (1 − metalness)`、鏡面の f0 は 0.04 と base color を metalness で混ぜたもの、f90 は 1（`lights_physical_fragment.glsl.js:3-5, 50-52`。`MeshStandardMaterial` は `IOR` を定義しない）。roughness は 0.0525 以上に寄せ、`geometryRoughness`（法線マップを掛ける前の法線の画面の微分の大きさ）を足して 1 以下に寄せる（同 `:7-12`）。法線は `normal_fragment_begin`・`normal_fragment_maps` のとおり。
- 色空間：base color と発光のテクスチャは sRGB から線形に戻して照らし、照らした線形の色を three.js と同じ `sRGBTransferOETF`（指数 0.41666。`colorspace_pars_fragment.glsl.js:11-13`）で sRGB にしてから 0〜1 に寄せる。tone mapping は無い（`WebGLRenderer.js:269` の既定 `NoToneMapping`）。
- 影・環境マップ・光のプローブ・IBL は使わない。ERP の背景を環境光に使うこともしない。
- `geometryRoughness` と法線マップの接線に要る画面の微分は、上の「画面の微分」で求める（法線の無い要素の `geometryRoughness` は 0）。

### エディタとの一致（照明の場面）

ADR 0037 の「一致の測り方」の場面のうち、影の場面と平行光源 1 つの PBR の場面は使わず、既定の照明で描いた場面に置き換える（ADR 0038）。

- 光が効く場面：PBR の球とトーラス（metalness と roughness の違う数個）と、法線の無い（面の法線で照らす）メッシュを、既定の照明で描く。光の向きが効くよう、正面・上・下から撮る。
- 光が効かない場面：テクスチャの市松（遠近あり）を、`unlit` の印の立った MESH と `MOGE_GEOMETRY` で描く。
- 3D ファイルの Sticker の場面：milestone ごとに回す確認の道具で、CI の test ではない。リポジトリに素材のファイル（GLB・PNG）を置かず、結果もコミットしない。
  - 素材：市松のテクスチャと法線を持つ箱を手続きで作り、コアの `save_glb` で GLB に書く（道具が毎回、作業用のディレクトリに作る）。光が効く要素（`unlit` が偽）。
  - 場面：その GLB を 3D ファイルの `file` の Source の `world` の Sticker として、Camera の前に回転を付けて置く。光の向きが効くよう、3 つ以上の面が見える向きにする。Camera と出力の大きさは ADR 0037 の「一致の測り方」のとおり。
  - 出力の側（`tools/parity_file_3d.py`）：Panorama Studio のノードと同じ経路（`_resolve_sources` → `render_frame`）で描き、状態・エディタ用の GLB（経路が返すものと同じ）・`unlit`（`scene.json`）と出力のフレーム（`output.png`）を作業用のディレクトリに書く。
  - エディタの側（`tools/parity_file_3d.mjs`）：Playwright の headless Chromium で、同じ GLB と状態を空間の表示と同じ部品（`fileStickerRequests`、3D の Sticker のキューと `loadSceneItem`、既定の照明、`buildWorld`）で描いて読み出す。キャンバスは 1024 × 1024、`deviceScaleFactor: 1`。Chromium に `--use-angle=vulkan --enable-features=Vulkan` を渡して llvmpipe にする。WebGL の renderer 名（`UNMASKED_RENDERER_WEBGL`）が llvmpipe でなければ、比べずに失敗する。
  - 比べ方：二つの画像を ADR 0037 の指標と暫定の合格（縁を 1 画素削った内側で、平均 ≤ 1/255、8/255 超 ≤ 0.5%）で比べ、数値（`parity.json`）と差の画像（`diff.png`）を作業用のディレクトリに出す。ページは `file://` で開き、サーバーもネットワークも使わない。
  - 自動の test は部品を確かめる：式と標本化は `tests/test_mesh_render.py`、材質は `tests/test_scene_mesh.py`（その場で `save_glb` で書いた GLB を読む）、照明の値は `default_lighting.json` の parity（上の owner の表）、エディタの描画は `tests/browser/file_3d.spec.js`（renderer によらない smoke の test。`docs/threejs-spark-integration.md`）。
- 指標と許容差、Camera の設定、基準の焼き方は ADR 0037 の「一致の測り方」のとおり。

### エディタとの一致（DA3 mono の場面）

`DA3_GEOMETRY` mono の深度のグリッド（`docs/threejs-spark-integration.md` の「`DA3_GEOMETRY` mono の深度のグリッド」）と、この描画（コアの変換）を比べる。上の「3D ファイルの Sticker の場面」と同じ道具（`tools/parity_file_3d.py`・`tools/parity_file_3d.mjs`）の DA3 の場面（作業用のディレクトリの `da3/`）。milestone ごとに回す確認で、CI の test ではない。素材のファイルも結果もコミットしない。読み出しの条件（llvmpipe、1024 × 1024、`file://`）は上の場面と同じ。

- 素材（道具が毎回作る）：合成の `DA3_GEOMETRY`（mono、`intrinsics` なし、256 × 144、1 要素）。`depth` は斜めの面に段差を 1 つ足したもの。一角を `sky` 1.0、別の一角を信頼度の低い画素、数画素を NaN にする。`image` は 16 画素の市松（四角の境目は偶数の画素。明るい灰色と暗い灰色で、明るさだけが違う）と、色の違う単色の帯 2 つ（色の行列を確かめるため。境目から離れた内側で見る）。長辺は `EDITOR_MAX_SIZE` より小さく、プロキシで縮まない。
- 場面：それを `scene` につなぎ、Camera を原点に回転 0、画角を `K` の水平の画角に合わせて撮る（像と重なる）。もう 1 つ、Camera を横に動かして斜めから撮る（段差の縁と四角の消え方を見る）。
- 出力の側（`tools/parity_file_3d.py`）：Panorama Studio のノードと同じ経路（`_scene_content` → `render_frame`）で描き、エディタ用ファイル（深度・メタ・プロキシの MP4）と出力のフレームを作業用のディレクトリに書く。
- エディタの側（`tools/parity_file_3d.mjs`）：同じファイルを深度のグリッドの部品（`web_src/pano_depth_grid.js`）で描く。色は 2 通りに描いて、それぞれ比べる。
  - (a) 形の一致：色を `image` そのもの（作業用のディレクトリの PNG を `ImageBitmap` にしたもの。色のテクスチャの向きは深度のグリッドと同じ規則）から取る。上の場面と同じ暫定の合格（縁を 1 画素削った内側で、平均 ≤ 1/255、8/255 超 ≤ 0.5%）で比べる。深度から位置への計算、`keep`、四角の消え方、テクスチャの標本化の違いはここで出る。
  - (b) プロキシの一致：色をプロキシの MP4 から、止めた再生ヘッドで取る。色はその時刻にシークして止めた `<video>` そのもの（`VideoTexture`）で、再生中と同じ経路（RGBA8 と、シェーダーでの sRGB からの戻し）を通る（再生中の ±1 フレームのずれは測らない）。H.264 の誤差の分だけ緩め、縁を 1 画素削った内側で、平均 ≤ 2/255、16/255 超 ≤ 1% を暫定の合格とする。市松は明るさだけが違うので、4:2:0 の色差の間引きは境目に効かず、残る誤差は量子化（crf 23）と輝度の縁のにじみである。色のある画素と灰色の画素の境目（ノードの出力のフレームで求める）のまわりは、色差の 1 区画（元の画素で 2、この場面の出力で 8 画素）を比べる画素から除く（`CHROMA_BLOCK`）。4:2:0 は色差を元の画素の 2 × 2 ごとに持つので、単色の帯の縁で色が最大 1 区画にじむためである。輝度の境目（市松）は除かない。除いた画素の数は `parity.json` に書く。許容差の値はこのために変えない。単色の帯は、色の行列（BT.709）の取り違えを許容差よりずっと大きな差として出す。最初の計測の後に、測った値に合わせて締める。
- 深度から位置への数値は、上の「mono の残す画素」の test と (a) の画像で守る。
- MoGe の場面（作る）：同じ道具に、合成の `MOGE_GEOMETRY`（透視投影、`force_projection` と同じくコアの `depth_map_to_point_map` で点を作ったもの、2 フレーム、`mask` の外と段差を含む、`image` は上と同じ市松と単色の帯）を足し、同じ (a)・(b) と同じ合格で比べる。`moge_pixel_k`（`docs/studio-node.md`）の画素の中心の半画素のずれは (a) で出る。

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

3D ファイルの `file` の Source（エディタの Add to World で置いたもの）が読めないときは、実行を止めず、その Sticker を描かずに警告を出す（`docs/studio-node.md` の「3D ファイルの `file` の Source」）。
