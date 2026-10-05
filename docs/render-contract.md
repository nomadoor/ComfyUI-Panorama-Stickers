# 描画関数の契約

Panorama Studio が使う、バックエンドの描画関数の約束を定める（#47、#52）。後続の ticket は、この文書と `comfyui_pano_suite/core/render.py` だけを前提にする。用語は `CONTEXT.md`、座標は ADR 0023、時間は ADR 0024、Scene の正は ADR 0025 に従う。

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
| `camera` | 評価済みの Camera の値（`position`・`yaw_deg`・`pitch_deg`・`roll_deg`）。Panorama Studio は、Camera が無ければ `ORIGIN_CAMERA`（World の原点、回転 0）、あれば評価した Camera を渡す（下記「Panorama Studio」）。ERP の Projection の出力も Camera の回転に従って回る（描画関数の性質） |
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
- `depth` は Camera の位置から、その画素に見える最も近い World の内容までの距離（光線の長さ。透視投影でも Camera の前方への奥行き z ではない。前方への奥行きで表す深度（#65 の MoGe など）と比べるときは、光線と前方の軸のなす角を θ として `z / cos θ` に直す）で、World の単位で表す。World の内容がない画素（Sky だけが見える画素）は `+inf` とする。
- ファイルは読まない。素材の読み込み（`file` の Source、ペイントのラスタ）は呼び出し側が行い、`sources` に入れて渡す。

### 層（#88）

- `layers` の各層は、Panorama Studio 一つの状態とその入力（ADR 0029 の「`scene` 出力と上流の Scene」）。最初が最も上流で、最後が撮影するノード自身の層。
- Sky は層ごとに描き（Sticker・ペイントの重なり順は層の中だけで決まる）、下の層の Sky の上に上の層の Sky をストレートアルファで重ねる（上流の Sky が下になる）。Sky は無限遠なので、どの層の Sky もすべての層の World の内容より奥にある。
- World の内容は、すべての層をまとめて `world_layer` で一枚にする（奥行きで混ざる。上の層が上に来るわけではない）。各層の `scene` の中身を先に描き、すべての層の `world` の Sticker を中心の距離でまとめて遠い順に並べて（同じ距離では層の順、層の中では状態の順）一度に畳む。層ごとに一枚にしてから畳むと、3 枚以上が重なる画素で間の面が消えるためである。`world_key` もすべての層の内容から作る。
- `cache` は Sky の作業を層ごとに分けて持つ（`cache["layers"][i]`）。Sky のキーと `sky_textures` は層の中だけで Sticker の `id` で引き、`world_textures` は `(層の番号, id)` で引くので、層が違えば同じ `id`（`port` の Sticker も）でも混ざらない。状態の `id` は書き換えない。
- `port` の Sticker は層ごとに一つまで（各層の `port` は、その層のノードの `sticker` 入力）。

### `StickerSource`

2D の素材を読み込んだもの。`rgba` はストレートアルファの (h, w, 4) で、8 ビットの画像から読んだものは uint8（0〜255）、IMAGE の入力は float（0〜1）。読み取り専用（下の「キャッシュ」）。`crop` は Sticker の `crop`。`derive_vfov` は `port` の Source で真にし、`vFOV_deg` を `hFOV_deg` と素材のアスペクト比から求め直す（`docs/scene-state-v2.md`）。`frame` は、フレームを持つ素材（IMAGE バッチ・VIDEO）のうち `rgba` がどのフレームかを表す番号で、1 枚の画像では `0`。Source のない Sticker は描かない。

### `ContentSource`

3D（MESH・SPLAT）の `world` の Sticker の Source（#63、`core/world_render.py`）。`content` は `SceneContent`（下記「`scene` の共通処理」）、`frame` はそのうち描く要素の番号で、`StickerSource.frame` と同じく World のキーに入る。`content` は device に置いたものを持つので、描画のパスごとに作る（`PANO_SCENE`・`video` には入れない）。`sky` の Sticker には渡さない。

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
- スプラットのように体積を持つ層が報告する奥行きは、「手前から積算したアルファが初めて 0.5 を超える位置」とする（#61 と #65 は同じ定義を使う）。最後まで 0.5 を超えない画素は、アルファで重み付けした平均の奥行きとする。
- 最後に色を 0〜1 に寄せる。
- この規則は `tests/test_render.py` で固定する。

## Sky の描き方

- Sky は、ERP の出力でも透視投影の出力でも中間の ERP に描かず、層ごとに出力の画素の向きから直接、GPU で標本化する（下記「Sky の直接の標本化」）。以前の ERP の出力は Sky を CPU で 360 の ERP に描いており（旧ノードのオーバーレイと同じ方法）、4096 の出力で Sticker が動くと毎フレーム 0.7 秒ほどかかった。
  - 旧ノードの基準画像（`tests/fixtures/legacy_goldens/`）との差（Camera のない Studio は、差の出る 5 つの case を Studio 自身の基準画像 `studio_*` と比べる。`docs/legacy-baselines.md`）：Sticker の縁の画素が、旧ノードの硬い縁ではなく覆う割合の分だけ混ざる。180 の出力では、Sticker を以前の半分の解像度の 360 の ERP（幅が出力と同じ）からではなく、出力の画素ごとに素材から標本化するので、Sticker の中の色の境目も以前より細かい。平均の差は 1/255 未満で、8/255 を超える画素は 360 で 0.2% 前後、180 で 0.8% ほど（すべて Sticker の縁と、180 の Sticker の中の境目）。
- 写し方：出力の画素ごとに、Camera から見た向き（出力の ERP の経度・緯度）を Camera の回転（`core/math.py` の `camera_basis`）で Scene の向きに直し、その向きの Sky と背景を双線形に標本化する。180 の出力は Camera の前方の半球（経度 −90°〜90°）だけを写す。Sky の色はアルファを掛けた状態で標本化する。経度の継ぎ目は反対側の列とつないで標本化する。
- 画像を縮めて写す画素（出力の画素 1 つが元の画像の 1 画素より広い範囲を覆う画素）は、その範囲で平均した値にする（`_sample_filtered`）。元の画像を幅と高さで別々に半分ずつ縮めた段（ripmap）を、前の段から三角形のフィルターで縮めて作り、出力の隣の画素への `grid_sample` の座標の動き（左右と上下で大きいほう）から、画素の覆う範囲を x と y で別々に求め、その前後の段を x・y とも線形に混ぜる。ERP の極の近くのような細長い範囲で、細いほうの向きまでぼかさないためである。三角形のフィルターは小さな形の位置を保つ（箱のフィルターは 2 画素の組の中心へ動かす）。ERP は縮めるときも経度の継ぎ目の向こうの列を使う（`_shrink`。フィルターが継ぎ目に届くのは最初と最後の列だけなので、その 2 列を継ぎ目の両側の列から同じ重みで取り直す。画像を広げて縮めることはしないので、一時的なメモリは増えない）。覆う範囲が 1 画素以下の画素は、今までどおり元の画像を双線形に標本化する（拡大する透視投影の出力は以前と同じ値になる）。
  - 背景（`bg_media`）：透視投影と、Camera を回した ERP・180 の ERP の出力。
  - 透視投影の Sky の各層（Sticker の素材、ペイントのラスタ、MASK）。
  - 段は、元の画像と一緒に `render_frame` の `cache` に持ち（背景は `bg_levels`、Sticker の素材は `sky_textures`、ペイントの層は `sky_paint`）、元の画像を捨てるときに一緒に捨てる。段は標本化に要るものだけを作るので、1 枚の画像の段は全部作っても元の画像の 3 倍まで。キーのない背景（`bg_key` が None）の段はそのフレームだけで捨てる。
  - 制限：ERP の出力の一番上と下の行のように、出力の画素が元の画像の 1 画素より細いところは、その向きには平均しない（画素の覆う範囲そのものが細いため）。
- 背景と Sky は無限遠にあるので、Camera の位置では変わらない（ADR 0023）。MASK もペイントと同じく Camera の回転に従う。
- Sky（`sky` の Sticker とペイント）と MASK は全方向にあり、どの向きの Camera でも写す。
- 360 の出力で Camera の回転が 0 のときは、背景の向きの計算と標本化を飛ばし、背景をそのまま使う（Sky は回転が 0 でも出力の画素の向きから標本化する）。背景は出力と大きさが違えば大きさを合わせる（`_resize`）。どちらかの向きに縮めるときは、三角形のフィルターで出力の画素の範囲を平均し（`antialias=True`。経度の継ぎ目の向こうの列も使う）、拡大だけのときは今までどおり双線形にする。
- 状態だけが持つペイントを ERP に描くのは、`core/display_layers.py` と `core/painting.py` の既存の処理を使う。
- Sky の層（`_sky_layers`）は、旧ノードの `core/display_layers.py` の `compose_display_list_to_overlay_rgba` と同じ並べ方（`build_display_entries`）と同じ規則（どの層もなければ、アップロード済みのペイントを一枚で使う、など）で並べる。Sticker とペイントを交互に重ねた場面は、基準画像 `stickers_paint_interleaved`（Studio は `studio_paint_interleaved`）で固定している。
- `z_index` は Sticker の Source ではないが、`crop` と同じく描画に要る静的な値なので、`StickerSource` に入れて渡す（評価関数の戻り値は変えない）。
- Sky の直接の標本化：中間の ERP を経由すると、透視投影の狭い画角ではその ERP が巨大になる（画角 5°・幅 1024 の出力で幅数万）か、上限で粗くなる（以前は 4096 で抑えていたので、狭い画角の透視投影で Sticker やペイントがぼけた）。そのため、各層を出力の画素の向きから直接、その層の画素で標本化し（`_sky_layers` で層を用意し、`_shoot_sky` で写す）、`compose_display_list_to_overlay_rgba` と同じ順に、同じストレートアルファの「上に重ねる」規則で重ねる（アルファを掛けた状態で重ね、最後に戻す）。
  - `sky` の Sticker：出力の画素の向きを、Sticker の向き（`camera_basis(yaw, pitch, roll)`）の平面に投影し、`core/stickers.py` の `_compose_sticker_patch` と同じ式で素材の uv を求める（FOV は 0.1° 以上、`crop` の範囲、uv 0 と 1 を端の画素の中心に置く `align_corners=True` の置き方、前方の外と FOV の外は描かない）。Sticker の縁が横切る出力の画素は、画素のうち縁の内側にある割合（縁までの距離を、隣の画素への uv の動きで割ったもの）をアルファに掛ける。uv の動きは Sticker の幅（面の座標で 2）までにする（面の地平線、奥行き 0 をまたぐ画素では動きが無限に近くなり、Sticker の外に半分の被覆の線が出るため）。以前の ERP の Sky では縁は ERP の画素で切れ、それを写すときの双線形の標本化でぼけていた。素材はアルファを掛けた状態で標本化し、不透明度はその 4 チャンネルに掛ける。素材は `device` に置いて、フレーム（`StickerSource.frame`）が変わるまで実行の中で使い回す（`render_frame` の `cache` の `sky_textures`）。
  - ペイント：エディタがアップロードしたラスタ（`painting_layer` の `paint`・`mask`・グループ）は、その大きさのまま 360 の ERP として、出力の画素の向きで標本化する（以前は Sky の ERP の大きさに 8 bit で縮めていた）。
  - 状態だけが持つペイント（アップロードされていないストロークのグループ、ストロークのどのグループにも属さない分、ラスタオブジェクト、アップロードのない MASK）は、バックエンドが ERP に描いてから同じく標本化する。その幅は次の大きいほうを 4096 までに抑えたもの（`_sky_size`）。ストロークを 8192 の ERP に描くと、描き直すたびに CPU で約 7 秒・3GB を使うためである。
    - 画素の細かさが出力の中央の画素とほぼ同じになる幅（`π × 出力の幅 ÷ tan(hFOV/2)`）を 2 のべき乗に切り上げたもの（64 以上）。FOV をアニメーションさせても、この幅が変わるときだけ描き直す。
    - `bg_media` があるとき、その画素の細かさの 360 の幅（`bg_width` × 360 ÷ `coverage`）。
  - Sky のキー（`_sky_key`）は ERP の Sky と同じく、この大きさと、`sky` の Sticker の値と素材のフレーム。Camera の向きのキーに Projection を入れる。キーが変われば層の並びを組み直し（ペイントの層と MASK は、`device` に置いたものを `cache` の `sky_paint` に大きさごとに持ち、大きさが変わるまで使い回す）、向きのキーが変われば写し直す。
  - 計測（ERP の出力、RTX 4070 Ti の CUDA）：4096 × 2048 の出力に 2048 四方の Sticker 一つと 4096 × 2048 の背景、Sticker が毎フレーム動く場面で、以前（CPU で ERP に描く）は 1 フレーム約 700 ms、直接の標本化は約 35〜45 ms（最初のフレームは素材を GPU に置くので約 400 ms）。VRAM の最大は約 640 MiB から約 1.5 GiB に増える（出力の画素ごとの向きと footprint の分。`_render_memory` の見積もりの内）。
  - 計測（透視投影、RTX 4070 Ti の CUDA、1920 × 1080、1024 × 1024 の Sticker 3 枚と 2048 × 1024 のペイント・MASK のアップロード、`bg_width` 4096、hFOV 10°・60°・120°、初回の準備を除く）：以前の 4096 × 2048 の ERP 経由は、Sky を描くフレームで約 190〜280 ms（CPU で ERP に描く分）、Camera だけが動くフレームで約 6〜8 ms。直接の標本化は、層を用意するフレームで約 17〜27 ms、Camera だけが動くフレームで約 8〜19 ms。背景の標本化は、拡大では約 1〜3 ms で以前とほぼ同じ、4096 × 2048 の背景を hFOV 120° で縮めるときは段を作るので約 16 ms（以前は約 1 ms）。
- 旧 Cutout は ERP の画素 i を `u = i`（画素の中心ではなく端）とみなして標本化していたので、Panorama Studio の透視投影の出力は旧 Cutout から ERP の半画素ずれる（`docs/legacy-baselines.md`）。
- `bg_media` は `coverage` の範囲の ERP とみなし、Sky と同じく Camera の向きで写す。360 では 360 の ERP、180 では旧ノード・Cutout と同じく Scene の前方（経度 −90°〜90°）の半球の ERP とする。180 の出力で、Camera を回して `bg_media` の半球の外が見える画素は、`bg_media` がない画素として `bg_color` になる。Sky と MASK はその上にも描く。出力の範囲が Camera の前方の半球だけであることは変わらない。

## World の描き方

`core/world_render.py` が持つ（#59）。位置は World の glTF 座標、角度はパノラマの規約で、両者の間は `core/world.py` の `world_rotation` だけでつなぐ（ADR 0023）。

- 出力の画素ごとに、Camera の位置から画素の中心を通る光線を作る（`core/math.py` の `ray_directions`）。ERP は Sky と同じ経度・緯度（180 は Camera の前方の半球）、透視投影は `hfov_deg` を幅に当てた正方の画素のピンホールとする。Sky の向き（`_view`）も同じ関数で作る。
- 各内容は、ストレートアルファの色 (H, W, 4) と距離 (H, W) の層として描き、描くたびに `over_by_depth` で一枚に畳み込む（`world_layer`）。層の順は `scene` の中身、続いて `world` の Sticker を Camera の位置から `position`（板の中心）までの距離の遠い順（同じ距離では状態の順）。画素ごとの距離が同じときは、中心が近い Sticker、次に状態の順で後ろの Sticker が手前になる。交わらない板どうしは、これで奥行きの順と一致する。`scene` の中身は画素ごとに奥行きが変わり並べ替えられないので最初に畳み込み、その手前と奥に Sticker が重なる画素では上記の近似が残る。まとめた一枚を `composite_frame` に渡す。背景と Sky は World の層より常に奥になる。
- 距離は光線の長さ（上記 `depth`）。

### 3D の `world` の Sticker（#63）

- Source が `ContentSource` の `world` の Sticker は、板ではなくその中身（`content` の要素 `frame`）を描く。Sticker の変形（`position`・`rotation`・`scale`）は `scene` の変形と同じ意味で、中身自身の座標の点 `x` を World の `position + scale × world_rotation(yaw, pitch, roll) @ x` に置く（`_scene_layer` を共有する）。Keyframe と Clip range は評価関数が決める（他の `world` の Sticker と同じ）。
- 不透明度は層のアルファに掛ける。メッシュは手前の面だけを描く（不透明度を下げても裏の面は透けない）。
- 層の順は板と同じく `position`（中身の原点）までの距離で決まり、その後は画素ごとの奥行きで `over_by_depth` に畳み込む。`scene` の中身と同じく、中身が大きく原点から離れていると上記の近似が残る。
- 背景と Sky より常に手前になる。

### `world` の Sticker の板

- Sticker の `position` を中心とする平らな板で、`world_rotation(yaw, pitch, roll)` の右・上の軸に沿って広がり、後ろの軸（ローカルの `+Z`）の向きを向く。回転 0 の板を回転 0 の Camera の正面に置くと、Camera の方を向き、素材が正立して見える。
- 幅は `scale`（World の単位）、高さは `scale` × 切り抜いた素材の高さ ÷ 幅（画素の数で数える）。`crop` の範囲を板全体に貼る。範囲の幅か高さが 0 の Sticker は描かない。
- 両面に描く。裏からは左右が反転して見える。
- 素材は双線形に標本化する。`sky` の Sticker と同じく、端の画素の中心を板の端に合わせ（`align_corners=True`）、アルファを掛けた状態で標本化してから戻す（透明な画素の色がにじまない）。不透明度はアルファに掛ける。
- TODO(#61)：いまは Sticker ごとに出力の全画素で光線と板の交点を求める。#61・#62 の前に、板が写る範囲（bbox）に限って描く。
- 板の縁はアンチエイリアスしない（ERP の出力の `sky` の Sticker と同じ。透視投影の `sky` の Sticker は縁をアンチエイリアスする。上記「透視投影の Sky」）。光線が板と平行な画素と、Camera の後ろにある板は描かない。
- Source を持たない Sticker、`active` でない Sticker、不透明度 0 の Sticker は描かない。VIDEO と IMAGE バッチの素材は `sky` と同じく `StickerSource.frame` のフレームを描く。

### `scene` の共通処理

SPLAT（#61、下の「SPLAT の描き方」）と MESH・MoGe（#62）のレンダラーは、`SceneContent(count, render)` を作ってラスタライズだけを受け持つ。

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

### MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`（#62）

`core/mesh_render.py` が pure torch で三角形を描き、`scene_mesh.py` が入力を要素ごとの `MeshItem`（頂点・面・あれば uv とテクスチャ・頂点色）にする。

- 入力：
  - MESH：要素ごとに `get_mesh_batch_item`（コア。`vertex_counts`・`face_counts` で切る）と、あれば `texture` の同じ番号。座標はそのまま（glTF）。
  - メッシュ系の 3D ファイル（GLB・GLTF・OBJ・STL）：`execute` の入口（`_read_scene_file`）で、コアの Get3DComponents で 1 要素の MESH にする。以降（描画・エディタ用ファイル・`PANO_SCENE`）は MESH として扱う。読んだ MESH は共有のキャッシュ（`core/cache.py`、下の「キャッシュ」）の `mesh_files` に、ディスク上のファイルはパス・更新時刻・大きさ、それ以外はオブジェクトの同一性をキーに入れ、同じファイルでは読み直さず、同じ MESH なのでエディタ用ファイルも使い回す。FBX・USDZ はコアが読めないので、コアのエラーになる。`_read_scene_file` は先にスプラットとして読めるか（下の「SPLAT の描き方」）を見て、読めなかった 3D ファイルのうち形式がメッシュ系のものだけをここで読む。形式のない 3D ファイルはメッシュとしては読まない。
  - `MOGE_GEOMETRY`：フレームごとに `moge_grid_mesh`（エディタ用ファイルと同じグリッドのメッシュ）と `image` の同じフレームをテクスチャにする。読むキーは `points`・`mask`・`image` と `intrinsics` の有無だけ（`tests/test_scene_mesh.py` で、コアの MoGeInference・MoGePanoramaInference が出す形とあわせて固定）。`mask` の外の画素と、コアと同じ段差の判定（`discontinuity_threshold` 0.04）で切れた画素は描かない。
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
- VRAM は、描画のパスの始めにまとめて見積もって空ける（下の「デバイスとメモリ」。中身のテンソルの大きさを見積もりに入れる）。
- MoGe のグリッドは ERP の経度の継ぎ目（最後の列と最初の列の間）と極の周り（最初と最後の行の外）をつながないので、出力が MoGe より細かいとそこに 1〜2 画素の隙間が出る。コアの MoGePointMapToMesh とエディタの GLB も同じである。
- 計測（1 回、CUDA の割り当てのピークは要素を置いたぶんを含む）：
  - 2048 × 1024 の MoGe パノラマ相当（約 400 万面、device 上の要素 約 170 MB）：4096 × 2048 の ERP は CUDA で約 0.2 秒・ピーク約 1.2 GB、CPU で約 2.9〜3.4 秒。1920 × 1080 の透視投影は CUDA で約 0.06 秒・ピーク約 0.86 GB、CPU で約 1.2〜1.3 秒。要素の最初のフレームは CPU での三角形分割と転送を含め、CUDA で約 3 秒。
  - 4096 × 2048 の MoGe パノラマ相当（約 1670 万面、device 上の要素 約 650 MB）：4096 × 2048 の ERP は CUDA で約 0.4 秒・ピーク約 2.5 GB、1920 × 1080 の透視投影は約 0.2 秒・ピーク約 2.5 GB。要素の最初のフレームは三角形分割を含め約 11.5 秒。

### SPLAT の描き方

`splat_render.py` が持つ（#61）。

- スプラット系の 3D ファイルは、`execute` の入口で `_read_scene_file`（`nodes.py`）が、メッシュより先に一度だけ SPLAT に読み、以降（`_scene_content`・`_scene_ui`・`PANO_SCENE`）は SPLAT として扱う。読むのはコアの File3DToSplat。`format` が `splat`・`spz`・`ksplat` のもの、頂点に 3DGS の属性（`f_dc_0`、または `scale_0` と `rot_0`）を持つ PLY（Load3D と同じく中身で見分ける。持たない PLY はスプラットとしては読まない。コアの Get3DComponents も PLY を読まないので、そのような PLY は下の「読めない 3D ファイル」のエラーになる）、`format` のないものはコアの `_detect_splat_format` で中身から決まるものを読む。読んだ SPLAT は共有のキャッシュの `splat_files` に、ディスクのファイルならパス・更新時刻・大きさ、それ以外はオブジェクトの同一性をキーにして持ち、同じファイルは実行をまたいで読み直さず、エディタ用ファイルも同じ SPLAT として使い回す（#62 の `mesh_files` と同じ作り）。
- `splat_content(splat)` が `SceneContent` を作り、`render` は要素ごとにコアの `_gaussian_item` で SPLAT を `device` に置いて描く（実行をまたいで device に持たない。`SceneContent` 自体も描画のパスごとに作る。上記「`scene` の共通処理」）。
- 座標：SPLAT は 3DGS の座標（Y 下・Z 前方）で、`scene` 自身の glTF の座標はそれを X 軸まわりに 180° 回したもの（`(x, y, z)` → `(x, −y, −z)`）とする。コアの RenderSplat と Load3D の定義で、ADR 0023 の「SPLAT の変換はコアに従う」による。
- 描き方はコアの RenderSplat（`_render_gaussian`、`render_style` は `color`）と同じ。各ガウシアンを、画素の光線に沿った 3D の密度の最大値で重み付けし、奥行きの slab ごとに手前から奥へ線形の光で重ねる。色は、SH が 1 次以上の係数を持つとき、標準の 3DGS と同じ式で、Camera の位置から各ガウシアンの中心への向きで 3 次までの SH を評価し、0.5 を足したもの（`_view_colors`）。向きは SPLAT 自身の 3DGS の座標で求める（Camera の位置を glTF から X 軸まわりに 180° 回して SPLAT の座標に直し、ガウシアンの中心から引く）。SH はその座標で学習されているためである。値はコアの `_gaussian_item` が基本色を寄せるのと同じく 0〜1 に寄せる（標準の 3DGS は 0 未満だけを寄せる）。DC（基本色）だけの SPLAT はコアと同じく `_gaussian_item` の基本色をそのまま使う。コアの RenderSplat は DC だけを使うので、1 次以上の係数を持つ SPLAT では、コアの描画と色が違う。`sharpen` は RenderSplat の既定の 2.0、`splat_scale` は 1、`opacity_threshold` は 0 で、ノードの入力にはしない。結果はストレートアルファの sRGB に戻して `over_by_depth` に渡すので、背景との合成は sRGB で行う（RenderSplat は線形の光で背景と合成する。半透明の縁だけが違う）。
- 光線は `ray_directions` の画素の中心を通るもの。コアは画素 i の中心を i に置くので、同じ Camera でも半画素ずれる。この差を除くと、コアとの差は平均で 0.05/255 程度になる（`tests/test_splat_render.py`）。
- 透視投影の slab は、コアと同じく Camera の前方への奥行きの順。ERP は Camera の位置からの距離の順で、画素の光線で直接球面に描く（立方体の面に分けない）。距離は Camera の向きに変えずに測るので、360 の ERP は Camera の yaw を列の角度の整数倍だけ回すと、列方向にずらした同じ画像になる。180 の ERP は、極の近くで背後の継ぎ目をまたぐ幅の広いガウシアンだけがわずかに変わる。
- 各ガウシアンは、投影した 4σ の楕円を囲む箱の中の画素で評価する。箱の半分の大きさの上限はコアの窓の上限と同じで、ERP の行方向は極に近いほど広げ、行の全体まで許す（極の近くのガウシアンが Camera の向きで切れ方を変えないため）。箱の大きさは 4 から倍々の段に分けて束ねる（コアは 16・64・256。細かくしたのは速さのため）。
- 制限：箱の上限（行方向の半分の大きさ。`max(24, min(幅, 高さ) ÷ 16)` と、全ガウシアンの 3σ の半径の 99.5 パーセンタイルの小さいほう。コアと同じ）より大きく写るガウシアン、つまり Camera のすぐ近くのものや非常に大きいものは、箱の外が切れて四角く欠ける。
- 奥行き（上の「重なり順と合成」の定義）は slab ごとに決まる。slab はガウシアンおよそ 1000 個ごとなので、少ないガウシアンでは粗い。各画素の奥行きは、光線に沿った密度が最大になる位置までの距離を、アルファで重み付けして平均したもの。
- 費用：描画の時間は、評価する（ガウシアン, 画素）の組の数、つまり「手前から全面を覆うまでに描いたガウシアンの数 × 箱の画素の数」にほぼ比例する（下の計測で毎秒 4〜6 億組）。これに slab ごとに全画素を 1 回なめる分（最大 256 回）が加わる。一度に評価する組は約 1000 万で、それより大きい箱は 1 個ずつ評価するので、ピークのメモリはガウシアンの数と窓の大きさによらずほぼ一定になる（4K の ERP で 2 GB 以下）。
- 計測（RTX 4070 Ti の CUDA、4096 × 2048 の 360 ERP、Camera は原点、回転は 0、2 回目のフレーム。ERP の 1 ラジアンは約 652 画素）：

  | 場面 | 数 | 写る σ（目安） | 1 個あたりの組 | 時間 | ピークのメモリ |
  |---|---|---|---|---|---|
  | Camera を囲む球殻（距離 2〜5、σ 0.005〜0.025、向きはランダム） | 10 万 | 約 3 画素 | 2280 | 1.3 秒 | 1.3 GB |
  | 同上 | 100 万 | 約 3 画素 | 2272 | 5.0 秒 | 1.7 GB |
  | 同上で σ を 5 倍（0.025〜0.125） | 10 万 | 約 14 画素 | 35459 | 5.6 秒 | 1.6 GB |
  | 同上 | 100 万 | 約 14 画素 | 9404（奥の slab は手前に覆われて打ち切る） | 14.9 秒 | 1.9 GB |
  | 1.6 下の地面（40 × 40 に一様、水平の σ 0.02〜0.05、厚み 0.002） | 10 万 | 遠いほど小さい | 458 | 0.6 秒 | 1.3 GB |
  | 同上 | 100 万 | 同上 | 449 | 2.0 秒 | 1.9 GB |

## 読めない 3D ファイル

`scene`・`sticker` 入力の 3D ファイルのうち、どちらの読み手も読まないもの（3DGS の属性のない PLY、形式がなくスプラットでもないもの）は、`_read_scene_file` が入力の名前と読める形式を示す `ValueError` にする（`scene` と `sticker` で同じ文言）。暫定の `NotImplementedError` は残っていない。

FBX・USDZ はメッシュ系の 3D ファイルとして受けるが、コアの Get3DComponents が読めないので、コアの `ValueError` になる。

## Scene の組み立てと撮影の入口

Panorama Studio の `execute` は次の三つの入口に分かれる。後続の ticket は、それぞれ一つだけを変更する。

| 入口 | 関数 | 役割 | 変更する ticket |
|---|---|---|---|
| (a) | `_decide_timeline` | Timeline fps、出力フレームごとの時刻（秒）とその丸めの幅（`time_base`）、出力フレームごとの描く `bg_media` のフレームと、層ごとの評価する Timeline frame・`sticker` の素材のフレーム・`scene` の要素（`_layer_frames`） | #53、#56、#88 |
| (b) | `_render_frames` | フレームごとに層ごとの状態を評価し（層の数だけ `RenderLayer` を作る）、(a) が選んだ `sticker` の素材のフレームを `port` の Sticker の Source に、`scene` の要素を `scene_index` にして、`render_frame` を呼ぶ。Camera と Sticker の Keyframe はここでフレームごとに評価される。描く Camera と Projection は、評価した状態から呼び出し側の `capture` が決める（下記「Panorama Studio」の撮り方）。各フレームの `color`・`mask` を device のまま 1 枚ずつ返すジェネレーターで、`first_frame` と `video` の読み出しが同じ経路を使う | #55、#56、#58、#64、#82、#88 |
| (c) | `_render_outputs` と `execute` の末尾 | 出力（`first_frame`・`first_frame_mask`・`video`・`PANO_SCENE`）を組み立てる（ADR 0027）。`execute` で描くのは最初の出力フレームだけ | #53、#57、#82 |

- Camera が無いとき（隠したときを含む）の ERP の出力は、World の原点から回転 0 で撮った `coverage` の範囲（`nodes.py` の `ORIGIN_CAMERA`）。背景 ERP と `sky` の Sticker・ペイントは保存した向きのまま出し、`world` の Sticker と `scene` は原点から見た位置に描く。

- Timeline fps は、背景 VIDEO の平均フレームレート（コアの `get_frame_rate()` と同じ `average_rate`、丸めない）、なければ `sticker` の VIDEO の平均フレームレート、どちらもなければ状態の `timeline.fps` とする。Timeline fps を決める VIDEO は `_timing_video` が選び、`_timeline_rate` がその fps を分数にする（分母 100 万以下。30000/1001 などは元の分数のまま）。`video` の `get_frame_rate()` はこの分数である。
- 出力の長さは「状態の `timeline.length` → 背景 VIDEO のフレーム数 → 背景の IMAGE バッチ（2 枚以上）の枚数 → Sticker と `scene` の Clip range の終わりのうち最も遅いもの（非表示の Sticker と、未接続の `scene` の Clip range も含む。`duration` が `null` で、`sticker` が IMAGE バッチか VIDEO の `port` の Sticker は、素材の終わり `start − in + 素材の長さ` を終わりとする）→ Camera の各 Lane の最後の Keyframe のうち最も遅いものの次のフレーム → 1」の順で決める。Camera の段は、状態に Camera があるときだけ使う（隠した Camera も数える）。状態から決める長さは `timeline.fps` の Timeline frame なので、秒を保って Timeline fps のフレーム数に直す（`floor(x × Timeline fps ÷ timeline.fps + 0.5)`、1 以上）。
- 各出力フレームは、次の時刻 `t` 秒について `t × timeline.fps` の Timeline frame で評価する（`docs/scene-state-v2.md`）。時刻は `_output_times` が分数で決め、(a) の評価と `video` の保存の PTS が同じ値を使う。
  - Timeline fps を決めた VIDEO（背景 VIDEO、なければ `sticker` の VIDEO）のフレーム：そのフレームの PTS。切り出し範囲の最初のフレームを 0 秒とする。可変フレームレートや、1ms の timebase で丸められた PTS（mkv・webm の 29.97 fps など）でもフレームごとの PTS を使う。`video` を保存すると各フレームはこの時刻に置かれる（下記「`video` 出力」）。評価する Timeline frame が、最も近い整数との差がその VIDEO の PTS の量子化の幅の半分（`time_base ÷ 2 × timeline.fps`）以内なら、その整数に寄せる。Clip range の端や `hold` の Cut が、丸められた PTS で 1 フレーム遅れないようにするためである。`MaterializedVideo` の時刻は厳密なので、幅は 0 とする。
  - その VIDEO が終わった後：最後のフレームの時刻から Timeline fps の間隔で進める。背景 VIDEO なら、背景は描かず `bg_color` になる。
  - それ以外：出力フレームの番号 ÷ Timeline fps。
- `first_frame`（IMAGE、(1, H, W, 3)）と `first_frame_mask`（MASK、(1, H, W)）は、Timeline の最初の出力フレームの色とマスクである。全フレームのマスクは出力しない（ADR 0027）。
- 背景の IMAGE バッチは出力フレームと 1 対 1 に対応し、バッチより長い出力では、背景が終わった後は `bg_color` になる。1 枚の IMAGE はすべてのフレームに描く。
- `bg_media` と `sticker` の VIDEO の読み方（`core/video_source.py`）
  - `VideoFromFile` で、`get_dimensions()` がストリームの大きさと一致するもの（クロップがない）は、`get_stream_source()` を PyAV で開き、`get_active_trim_window()` の範囲を 1 フレームずつ読む（`StreamedVideo`）。先にパケットだけを読んで PTS を集め、フレーム数と時刻を決める（`scan_video`。最初に復号できたフレームも求める）。その結果（`VideoIndex`：PTS の表（int64 の配列で、キャッシュのバイト数に数える。秒の時刻は `times()` で作る）・最初のフレーム）は、ファイル（パス・更新時刻・大きさ、メモリ上のファイルはオブジェクト）とトリム範囲をキーに共有のキャッシュ（`video_index`）に入れ、1 回の実行の中の何度もの `open_video`（Timeline、`PortMedia`、描画のパスごと、エディタの MP4）でも、次の実行でも走査し直さない。ストリームの大きさ（クロップの判定に使う）も同じく `video_size` に入れる。`StreamedVideo` は `VideoIndex` を参照し、復号器だけを持つ（最初にフレームを求められたときに復号を始める）。入力側のメモリは長さに比例しない（`tests/test_stickers_scene_video.py` で計測する）。
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
- `scene` の入力は、3D ファイルを `_read_scene_file` で SPLAT か MESH に読んでから、`_scene_content` で `SceneContent` にする。SPLAT は上記「SPLAT」、MESH と `MOGE_GEOMETRY` は上記「MESH・メッシュ系の 3D ファイル・`MOGE_GEOMETRY`」。どちらの読み手も読まない 3D ファイルは上記「読めない 3D ファイル」のエラーにする。
- `sticker` の MESH・SPLAT・3D ファイル（#63）：3D ファイルは `scene` と同じ `_read_scene_file` で SPLAT か MESH に読み（同じ `splat_files`・`mesh_files` のキャッシュ）、どちらも読まないファイルは `scene` と同じエラーにする。読んだ SPLAT・MESH は `PortMedia` の `media` になる（`is_3d`）。
  - `port` の Sticker が状態になければ、`world` の Sticker として加える（`sky` にはしない）。位置は `WORLD_STICKER_POSITION`（World の原点から `-Z` に 2、Camera が無いときの ERP の中央の向き）、回転 0、スケール 1、不透明度・Clip range は既定値。状態の Camera の Lane には依らない。中身の位置は合わせ直さない（中身の原点がその位置に来る）。Pose handoff（`sticker_state`）は `sky` の Sticker だけのもので、3D の Sticker を加えるときに `sticker_state` があれば使わずに警告を出す。
  - 状態の `port` の Sticker が `sky` のとき（2D の素材の後に 3D をつないだ、型の分からない接続でエディタが `sky` で加えた、など）は、同じ `id` の `world` の Sticker に置き換えて描く（上と同じ変形。`clip`・`visible`・`locked` は保ち、`sky` の Lane と Keyframe は捨てる）。実行結果の `pano_sticker_input_pose` に `replace: true` を付け、エディタとノード上の UI が状態を同じように置き換える。置き換えた状態で実行し直すと、ノードはもう状態を変えず、姿勢も出さない。
  - 逆向き（状態の `port` の Sticker が `world` のまま 2D の素材をつないだ）は置き換えない。2D の素材の `world` の Sticker（板）は正しい状態で、`port` から `world` の画像・動画の Sticker を作る唯一の経路である（#59）。
  - 要素の数は IMAGE バッチと同じ扱い（`batch_index`）。2 つ以上の要素は出力フレームと 1 対 1 に対応し、`duration` が `null` なら最後の要素で Clip range が終わる。1 つなら Clip range の間ずっと描く。
  - `SceneSources` には 3D の `port` の Sticker の Source を入れない（テンプレートを持たない）。(b) の `_render_frames` がパスごとに `port.frames()`（`sticker_media.py` の `content_of` で作った `SceneContent`）を作り、`_port_source_at` がフレームごとの `ContentSource` にする。device に置いたものはそのパスの間だけ持つ（`tests/test_stickers_3d.py`）。
- `video` を読む側（`get_components`・`save_to`）は、`render_frame` が直前と同じテンソルを返したフレームを、device から再び転送せず、直前のフレームから写す。
- `is_output_node` は `True`（#75）。ComfyUI は `ui` を出力ノードでなくても `executed` で送るが、出力ノードでなければ下流に出力ノードがつながっていないと実行されず、エディタとノード上の UI が素材を受け取れない。出力ノードにすると、キューに入れるたびに実行され（変わっていなければキャッシュの `ui` が送られる）、素材の表示が下流の接続に左右されない。
- 実行結果の `ui` は、エディタとノード上の UI に入力の素材を見せるためのもので、キーは旧ノードと同じ（#75）。

  | キー | 内容 |
  |---|---|
  | `pano_input_images` | `bg_media` の最初のフレーム |
  | `pano_input_videos` / `pano_input_video_meta` | `bg_media` が 2 フレーム以上のときの一時 MP4 とメタ情報（`fps`・`frames`・`duration`・`has_audio`） |
  | `pano_sticker_input_images` | `sticker` の最初のフレーム |
  | `pano_sticker_input_videos` / `pano_sticker_input_video_meta` | `sticker` が 2 フレーム以上のときのエディタの MP4 とメタ情報（#83）。メタ情報は背景と同じ `fps`・`frames`・`duration`・`has_audio` に、`kind`（`VIDEO` か `IMAGE`）を足す。VIDEO の `duration` は素材の終わり（最後の PTS ＋ 平均フレームレートの 1 フレーム、`PortMedia.end`）で、`pts_tolerance` は PTS の手前で同じフレームと見なす秒数（素材と、Timeline を決めた VIDEO の time base の半分の大きいほう）。IMAGE バッチは Timeline fps の等間隔で、`fps` は Timeline fps。エディタとノード上の UI は、これで `port` の Sticker を再生ヘッドに合わせて表示する（`docs/timeline-ui.md`） |
  | `pano_sticker_input_frames` | `sticker` が 4 チャンネル（RGBA）で 2 枚以上の IMAGE バッチのとき、MP4 の代わりに 1 枚ずつの PNG（アルファを保つ。MP4 はアルファを持てず、`video` 出力はアルファを使う）。長辺は `EDITOR_MAX_SIZE` 以下。メタ情報は `pano_sticker_input_video_meta`（`kind` は `IMAGE`）。バッチのテンソルの同一性をキーに `video` キャッシュで 1 度だけ書く。枚数ぶんの PNG が temp に書かれるので、長いバッチほど書き出しの時間と temp の容量がかかる |
  | `pano_sticker_input_pose` | 状態に `port` の Sticker がなく（3D では `sky` の `port` の Sticker を置き換えたときも）、ノードが加えたときの姿勢（`yaw_deg`・`pitch_deg`・`roll_deg`・`hFOV_deg`）と、`direction`・`roll`・`size` の Lane の Keyframe（`keyframes`。Camera が動いた `sticker_state` の Pose handoff、`docs/scene-state-v2.md`）。3D の素材では `{"placement": "world", "position", "rotation", "scale"}`（各 Lane の値）で、置き換えたときは `"replace": true` を足す。エディタが同じ姿勢と Keyframe で状態に加えるために使う |
  | `pano_timeline_fps` | VIDEO（`_timing_video` が選んだ `bg_media`、なければ `sticker` の VIDEO）が Timeline fps を決めたときだけ出す。その Timeline fps（float）。エディタは fps の欄のロックと、状態の再基準化（開いたとき・実行結果が届いたとき）に使う |
  | `pano_sticker_warnings` | 警告（読めない `file` の Source、`bg_media` なしの `auto`）。ログにも出す |
  | `pano_scene_files` / `pano_scene_meta` | `scene` の入力の要素ごとの一時ファイル（下の「`scene` のエディタ用ファイル」）と、`kind`（エディタが使う読み込み方。`splat` か `mesh`） |
  | `pano_sticker_files` / `pano_sticker_meta` | `sticker` が 3D の素材のとき、`pano_scene_files` / `pano_scene_meta` と同じ形のエディタ用ファイル（#63）。このとき `pano_sticker_input_images` と MP4 は出さない。同じ SPLAT・MESH を `scene` と `sticker` につなぐと、同じファイルを使う |

  - 一時 MP4（ADR 0018）：エディタの MP4 で、Preview と同じく `nodes.py` の `_editor_mp4` が作る。エディタはシークのたびに直前のキーフレームから復号するので、MP4 はキーフレームの間隔を短くし、表示に足りる幅にする（下の「エディタの MP4」）。メタ情報の `fps` は VIDEO の平均フレームレート、`frames` は切り出し範囲のフレーム数。IMAGE バッチも同じ `encode_editor_mp4` で Timeline fps の等間隔にエンコードし、`fps` は Timeline fps とする。1 フレームの素材は MP4 を作らない。`sticker` の MP4（#83）も同じ規則で作る（`_port_media_ui`）。音声は `bg_media` の VIDEO が持つものだけが使われる（`sticker` の VIDEO の音声が MP4 に入っても、エディタは音を出さない）。サムネイルの帯は作らない（エディタが MP4 から作る）。
  - エディタの MP4：
    - そのまま使う：コアの `save_to(MP4, H264)` が詰め直すだけのファイル（トリムなし、パスのある MP4）で、`core/video.py` の `editor_ready` が通るもの（H.264・yuv420p・長辺 `EDITOR_MAX_SIZE`（2048）以下・キーフレームの間隔が `EDITOR_KEYINT`（12）フレーム以下。パケットだけを読む）は、入力ディレクトリにある拡張子 `.mp4` のファイルなら写さずに `type: "input"` でそのまま見せ（ブラウザには拡張子で渡されるので、`.mov` などはここに入れない）、それ以外は `save_video_to_mp4` でストリームコピーする。Studio の `video`（`SceneVideo`）は、`get_stream_source()` の MP4 が `editor_ready` を通れば写さずにそのまま見せる。
    - プロキシ：それ以外（キーフレームの間隔が長い、長辺が大きい、H.264 4:2:0 でない、MP4 でない、トリムあり、メモリ上のファイル、クロップ付きなど `open_video` が `get_components()` に落ちるもの、`editor_ready` を通らない `SceneVideo` の stream source）は、`encode_editor_mp4` がエディタ用に 1 フレームずつエンコードする。ストリームで読む VIDEO はファイル（`SceneVideo` は stream source）を `StreamedVideo` で開き直し、`decoded_frames()` が復号した PyAV のフレームを float RGB にせず、YUV のまま縮小してエンコーダーに渡す（回転のあるフレームだけ RGB で正立させる。RGB 系とパレットの形式のフレームは RGB の扱いで、アルファは捨てる）。全フレームを RAM に置かない。`get_components()` に落ちた VIDEO と IMAGE バッチは RGB から変換する（IMAGE バッチのグレーは 3 チャンネルに広げ、アルファは捨てる。`render_frame` の背景と同じ）。H.264（libx264 `veryfast`・`crf 23`・`tune fastdecode`、フレームスレッド）、yuv420p、キーフレーム `EDITOR_KEYINT` フレームごと（IDR、閉じた GOP）、B フレームなし、長辺は `EDITOR_MAX_SIZE` 以下（縦横比を保ち偶数）、色：RGB から作るときは BT.709 の行列で変換し、sRGB（BT.709）のタグにする。ファイルの YUV は行列を変えずに縮小し、元の colorspace・primaries・transfer のタグを引き継ぐ。フルレンジ（yuvj など）は TV レンジに変換し、TV レンジのタグにする。各フレームは読んだ VIDEO の PTS をその time base のまま保つ（可変フレームレートも保つ）。音声は切り出し範囲のものを AAC で入れる。プロキシの作成に失敗するとノードの実行が失敗し、キャッシュには何も残らない（次の実行で作り直す）。
    - `SceneVideo` の stream source は SaveVideo の既定の出力でもあるので、エディタのために変えない（libx264 の既定のキーフレーム間隔 250 のまま）。プロキシは別のファイルである。ノードの出力（`first_frame`・`video`）と SaveVideo の出力はエディタの MP4 に左右されない。
  - 出力ノードは `state_json` が変わるたびに実行されるので、MP4（コピーもプロキシも）は入力ごとに 1 度だけ作り、共有のキャッシュの `video` から再利用する。プロキシの設定はモジュールの定数で、プロセスの中では変わらないので、キーには入れない。IMAGE バッチは旧 Cutout と同じくテンソルの同一性と fps、VIDEO は `open_video` がストリームのまま開いたもの（クロップのない `VideoFromFile`）ならファイルのパス・更新時刻・トリム範囲、それ以外は VIDEO オブジェクトの同一性をキーにする。キーのためにファイルを開き直さない。
  - キャッシュから追い出しても MP4 のファイルは消さない（追い出しは次に要るとき作り直すかを決めるだけ）。ファイルを消すのは temp の登録の仕組み（下の「一時ファイル」）だけで、合計が上限を超えたときに古いものから消す。
  - エディタの背景 VIDEO は、実行結果が新しい間だけ読み込む。Panorama Studio では動画の再生バーを出さず、エディタを開いたまま実行すると読み込み直して再生ヘッドのフレームを出し、タイムラインの ▶ と再生位置の移動も読み込みと再生を行う（`docs/timeline-ui.md`）。背景の入力をつなぎ変えると、次の実行まで VIDEO を外す。
  - 実行結果がどの入力から作られたかは、実行が終わったときに `/api/jobs/{prompt_id}` を一度読んで、そのワークフローの接続から記録する。ブラウザを再読み込みしたときは、同じワークフローの最近のジョブから自ノードの出力を表示用に取り戻す（状態は書き換えない）。サーバーを再起動して履歴と temp が消えた後は、実行し直す。
  - `sticker` の MP4 は、`sticker` の入力（`external-sticker`）の実行結果が新しい間だけ使う。`sticker` の VIDEO は MP4 を作るときだけ開き直し（キャッシュが効けば開かない）、`PortMedia` は開いた VIDEO を持たない。
  - エディタとノード上の UI は、実行結果が新しいかを入力の接続（link）の変化だけで判断する。接続を変えずに上流の画像を差し替えると、再実行するまで古い素材が表示される。
  - `sticker_state` が接続されているときは、`port` の Sticker は実行結果に姿勢が届くまで、枠も含めて表示されない。
  - `scene` のエディタ用ファイル（#60）：`scene_files.py` の `write_editor_files` が、コアの書き出し関数で要素ごとに 1 つずつ temp に書く。ラスタライザには依存しない。座標は要素自身の glTF 座標（`scene` の変形を掛ける前の World、ADR 0023）で、エディタが状態の `scene` の変形を掛ける。
    - SPLAT：PLY（コアの `SplatToFile3D` の `ply` と同じ書き出し。SH もすべて持つ）。座標は SPLAT のまま（3DGS の座標。下の「SPLAT の描き方」）で、glTF ではない。エディタ（#71）への要求：この PLY は、コアの Load3D と同じく X 軸まわりに 180° 回して（`quaternion.set(1, 0, 0, 0)`）から状態の `scene` の変形を掛けること。`counts` があれば要素ごとの長さで切る。
    - スプラット系の 3D ファイル：`execute` の入口（`_read_scene_file`）で SPLAT に読んでから扱うので、上の SPLAT と同じ PLY になる。
    - MESH：GLB（コアの `mesh_item_to_glb_bytes`。SaveGLB と同じ書き出しで、uv・テクスチャ・頂点色・法線などもすべて書く）。座標はそのまま。間引かない（エディタ用のファイルでも、要素の解像度は下げない）。
    - `MOGE_GEOMETRY`：フレームごとのグリッドのメッシュの GLB（`moge_grid_mesh`）。読むのは `points`、あれば `mask`（外の画素を捨てる）、`intrinsics` の有無、テクスチャの `image` だけ。glTF への変換はコアの MoGePointMapToMesh と同じ（`intrinsics` がなければパノラマとして Z 上から、あれば OpenCV から）で、パノラマの各画素は回転 0 の Camera の ERP の同じ画素の向きに来る（`tests/test_scene_editor_files.py`）。コアの MoGePointMapToMesh（decimation 1）と同じく全画素を頂点にし、テクスチャも `image` をそのまま使う（間引かない）。同じ点群から MoGePointMapToMesh（decimation 1、段差の判定 0.04、`texture` あり）で作った MESH をつないだときと同じ GLB になる（`mask` がなく、パノラマでは `depth` が点の距離のとき。`tests/test_scene_editor_files.py`）。
      - 面の向き（ワインディング）もコアと同じ。パノラマの面は外向き（原点の Camera からは裏面）なので、エディタ（#71）は両面（`DoubleSide`）で描く。
      - `mask` の外の画素を捨てるのはコアの MoGePointMapToMesh と異なる（コアは `mask` を読まない）。バックエンドの描画（#62）も同じく `mask` の外を描かず、エディタと揃える。
    - `pano_scene_files` は要素の順のリストで、要素の数が出力フレームとの対応（`batch_index`）に使う数である。頂点や面のない要素は `null` にし、番号をずらさない。
    - `state_json` だけが変わった実行では作り直さない。共有のキャッシュの `scene_files` に入れ、SPLAT・MESH はオブジェクトと位置のテンソルの同一性、`MOGE_GEOMETRY`（辞書）は読むテンソルの同一性をキーにする。ファイルが消えていれば書き直す。
    - 大きさの目安：100 万点の SPLAT（SH 3 次）の PLY は約 248 MB。MoGe のパノラマ（4096 x 2048、約 840 万頂点・1,680 万三角形）の 1 フレームの GLB は約 390 MB（CPU で約 3 秒）で、MESH にしたものも同じ。エディタは読み込んだ要素を大きさの上限で持つ（`docs/threejs-spark-integration.md` の `scene` の項）。キャッシュから追い出しても MP4 と同じくファイルは消さず、temp の登録の仕組み（下の「一時ファイル」）が上限を超えた分を古いものから消す。
    - 3D ファイルは、入口（`_read_scene_file`）で読んだ SPLAT・MESH として PLY・GLB に書き直す（描くものとエディタが見るものが同じになる）。読んだものはファイルごとに `splat_files`・`mesh_files` のキャッシュに入るので、同じファイルなら同じオブジェクトになり、ここでも書き直さない。3D の Sticker（#63）も同じ `write_editor_files` と `scene_files` のキャッシュで書き、`pano_sticker_files` / `pano_sticker_meta` に出す。座標は中身自身の glTF 座標（SPLAT は上と同じく 3DGS の座標）で、エディタが状態の Sticker の変形を掛ける。
- 必要な ComfyUI は v0.35.0 以降（`mesh_item_to_glb_bytes` と、メッシュ系の 3D ファイルを読む Get3DComponents が入った版）。Get3DComponents はコアで experimental のノードなので、コアの更新で名前や戻り値が変わったら `scene_mesh.py` の `read_mesh_file` を合わせる。`splat_render.py` はコアの `comfy_extras.nodes_gaussian_splat` の非公開の関数と定数（`_C0`・`_gaussian_item`・`_quat_to_mat`・`_srgb_to_linear`・`_linear_to_srgb`・`_quantile`・`_detect_splat_format`）にも依存する。コアの内部のシンボル（`comfy_extras.*`・`comfy.ldm.*`）は `comfyui_pano_suite/core_adapters.py` だけが読み込む（ほかのモジュールはそこから読む。`tests/test_core_adapters.py` が確かめる）。一つでも読み込めないときは、3D の機能（SPLAT・MESH・3D ファイル・`MOGE_GEOMETRY`）だけを無効にし、その旨をログに警告として出す。ほかのノードは読み込まれ、3D の機能を使うと、足りないシンボルの名前を含む `RuntimeError` になる。コアの `pin_memory` の `evict_active`（v0.37.0 より後の master で入った）も同じモジュールで合わせ、無いコアでは `video` 出力の転送用バッファを固定しない（固定のために ComfyUI の RAM キャッシュを捨てないため）。
  - 出力（IMAGE）のプレビュー MP4 は作らない。Studio の出力を表示するのは Preview（#76）で、旧ノードの `pano_videos` を読むフロントエンドもない。
- `file` の Source は `core/stickers.py` の `load_source_rgba` で読み、`folder_paths` のディレクトリの中にあるものだけを読む。読めないときは、その Sticker を描かずに警告を出す（ログと実行結果の `pano_sticker_warnings`）。

## `video` 出力

Panorama Studio の `video` は、`scene_video.py` の `SceneVideo`（コアの `VideoInput` の実装）である（ADR 0027、#82）。出力した時点では描画せず、読まれるたびに (b) の `_render_frames` で 1 フレームずつ描く。描く device は読むときの `get_torch_device()` で、`bg_media`（上流の Scene の背景を使うときはその `bg_media`）の VIDEO と `sticker` の VIDEO は読むたびに開き直し、実行をまたいで開いたままにしない。持つのは `PANO_SCENE` と同じ状態・素材・Timeline と、`execute` で読んだ音声である。

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

Panorama Studio の `scene` 出力は、`nodes.py` の `PanoSceneValue`（frozen dataclass、比較は同一性）である（#57、#88）。Scene の正は各ノードの `state_json` だけで、この値は実行のたびに状態と入力から導く派生値である（ADR 0025、ADR 0029）。フレームは描画せず、`PANO_SCENE` を入れ子に持たない。上流の Scene を受けたノードの値は、上流の層の後ろに自分の層を足した平らな列になる。Preview の表示（#76）、3D の撮影（#61）、Studio の `scene` 入力（#88）は、次のフィールドだけを前提にする。

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
| `media_ui` | この値を作ったノードの実行結果の `ui` のうち、素材をエディタに見せる部分（下記「Panorama Studio」の `ui`。上流がなければ、背景、`pano_scene_files`・`pano_sticker_files` などの #60・#63 のエディタ用ファイル、`port` の素材、`pano_timeline_fps`）。`pano_sticker_input_pose` と警告は入らない。参照するファイルは作ったノードが書いたもので、使う側は自分の `ui` にそのまま入れ、書き直さない（#77） |

`SceneLayer`（層）のフィールド：

| フィールド | 内容 |
|---|---|
| `state` | `load_scene_state(state_json)` の戻り値。`sticker` の入力があり、状態に `port` の Sticker がないときは、描いたときと同じく `port` の Sticker を加えたもの。Studio の `scene` 出力では `camera` を `null` にする（ADR 0029） |
| `sources` | `SceneSources`。`file` の Source は読み込み済み。`port` の Sticker の Source は `port` の最初のフレームを持つテンプレートで、`port` があるときは (b) と同じく、フレームごとに `port.frames()` と `frames` の `port` の番号（`port.index_at` の結果）で取り出した素材に差し替えてから `render_frame` に渡す |
| `port` | `sticker` の素材の `PortMedia`（`sticker_media.py`）、または `None`。開いた stream ではなく VIDEO の入力そのものを持ち、`frames()` を呼ぶたびに開き直すので、Preview と下流の Studio など複数のノードが同じ `PANO_SCENE` を使っても読み取り位置を取り合わない |
| `scene` | `scene` の入力の 3D の素材（SPLAT・MESH・`MOGE_GEOMETRY`、または `None`。`scene` に上流の Scene をつないだ層では `None`）。3D ファイルは `_read_scene_file` で読んだ SPLAT・MESH にして持つ（どちらも読まないファイルはエラーになり、`PANO_SCENE` は出ない）。描く側は `_scene_content` で `SceneContent` にし、フレームごとに `frames` の `scene` の番号を `scene_index` として `render_frame` に渡す（(b) と同じ） |
| `media_ui` | その層の素材をエディタに見せる `ui`（`port` の素材の `pano_sticker_input_*`・`pano_sticker_files` / `pano_sticker_meta`、`scene` の `pano_scene_files` / `pano_scene_meta`）。背景は入らない（`PanoSceneValue.bg_ui`） |

- 出力の解像度は入れない。撮影する側がそれぞれの規則（`output_size` など）で決める。
- 同じ入力からは同じ内容の値になる（乱数や時刻を含まない）。ComfyUI のキャッシュが効くとき、下流には前回の同じ値が渡る。
- 下流のノードは同じオブジェクトを共有するので、`layers` の `state` や `sources` を書き換えない。上流の層は、下流の値でも同じ `SceneLayer` のオブジェクトである。
- 3D の Sticker（#63）の素材は層の `port`（`is_3d`、`media` は SPLAT か MESH）が持ち、`sources` には入らない。使う側は (b) と同じく `_render_frames` を通す。
- 撮影するノードの Camera は、最後の層（撮影するノード自身）の状態の `camera` から取る。`PANO_SCENE` は Camera を持たない。

## Panorama Studio（`PanoramaStudio`）

Scene を組み立てて撮るノード（ADR 0029、#87）。Python のクラスは `PanoramaStudioNode`。状態 v2 の Stickers・Cutout（`PanoramaStickersNode`・`PanoramaCutoutNode`）は main に出ないまま #92 で登録から外し、置き換え（NodeReplace）は作らない（ADR 0029）。

- 入力は `bg_media`（IMAGE・VIDEO）、`sticker`（IMAGE・VIDEO・MESH・SPLAT・3D ファイル）、`sticker_state`、`scene`、`bg_color`、`coverage`、`output_size`（`1024`・`1536`・`2048`・`2560`・`3072`・`4096`・`auto`、既定 `2048`）、`state_json` の順。`scene` は 3D の素材（SPLAT・MESH・3D ファイル・`MOGE_GEOMETRY`）か、別の Panorama Studio の `scene` 出力（`PANO_SCENE`。下記「上流の Scene（#88）」）を受ける。
- 出力は `first_frame`（IMAGE）、`first_frame_mask`（MASK）、`video`（VIDEO）、`sticker_state`（STRING）、`scene`（`PANO_SCENE`）の順（入力の `sticker_state`・`scene` と同じ並び。ADR 0029 の追記）。`is_output_node` は `True`。
- Scene の組み立ては `_build_scene`（状態の読み込み、`port` の Sticker、Source、(a) の `_decide_timeline`、エディタ用の `ui`）で、描画は (b)・(c)（`_render_frames`・`_render_outputs`）。撮り方（`capture`）と出力の大きさは下記。
- `state_json` は状態 v2（v1 も読む。旧 Cutout の `shots[0]` は Camera になり、FOV は 1〜179 に寄せ、`roll_deg` だけを読む（`rot_deg` は読まない）。`docs/scene-state-v2.md`）。
- Camera の判定：状態 v2 の `camera`（`docs/scene-state-v2.md`）。`null`（欠け・空の `state_json` を含む）なら Camera が無い。`camera.visible` が `false`（タイムラインの目で隠した Camera）も、撮り方・出力の大きさ・`sticker_state` では Camera が無いのと同じに扱う（`nodes.py` の `_studio_camera`。`_studio_output_size` と `execute` が使う）。隠した Camera は状態に残り、表示を戻せば元の Camera で撮る（`scene` 出力は今までどおり `camera` を `null` にする）。Timeline の長さは `_decide_timeline` で決め、Camera があるときだけ Camera の Keyframe が長さに入る。隠した Camera の Keyframe も長さに入る（表示の切り替えで出力の長さを変えない。隠した Sticker の Clip range を数えるのと同じ）。`erp` の Camera でも、描画に使わない `fov` の Keyframe を含めてすべての Lane の Keyframe が長さに入る。
  - Camera が無い：World の原点から回転 0（`ORIGIN_CAMERA`）で、`coverage` の範囲の ERP を撮る。旧 Stickers の基準画像（差の出る case は Studio 自身の基準画像 `studio_*`）と一致する（`tests/test_studio_node.py`）。
  - `projection` が `erp`：評価した Camera の位置と回転から ERP を撮る（`Projection.erp`。ERP は Camera の回転に従って回り、`world` の Sticker と `scene` は Camera の位置から見る）。`fov`・`aspect` は読まない。`coverage` が 180 なら Camera の前方の半球。原点・回転 0 なら Camera が無いときと同じ出力になる。
  - `projection` が `perspective`：評価した Camera と `Projection.perspective(幅, 高さ, Camera の hFOV, coverage)` で撮る。画素は正方なので、垂直の FOV は丸めた大きさから決まり、`camera.aspect` から決まる値とわずかに違うことがある。旧 Cutout の case `cutout_single_shot` と同じショットと背景を 224 x 128（`tools/bake_legacy_goldens.py` の `STUDIO_SHOT_SIZE`）で撮った基準画像 `studio_camera_single_shot` と一致する（`tests/test_studio_camera.py`。この大きさは `output_size` からは決まらないので、テストと焼き直しでは `_studio_output_size` を差し替える）。
- 出力の大きさ（`_studio_output_size`）：`output_size` は全体（360°）の ERP の幅 `W` を選ぶ。`auto` は `bg_media`（VIDEO は最初に復号できたフレーム）の幅を 360° に換算した値（`coverage` が 180 なら 2 倍）で、`bg_media` が無ければ 2048 にして警告する（ログと `pano_sticker_warnings`）。

  | 撮り方 | 幅 | 高さ |
  |---|---|---|
  | Camera が無い・`erp`（`coverage` 360） | `W` | `W ÷ 2`（切り捨て） |
  | Camera が無い・`erp`（`coverage` 180） | `W ÷ 2` | `W ÷ 2` |
  | `perspective` | `2·f·tan(hFOV_max ÷ 2)`、`f = W ÷ 2π` | 幅 ÷ `camera.aspect` |

  - ERP の出力は画素の細かさが `W` の 360° の ERP と同じになる。`auto` は旧 Stickers の `auto` と同じ大きさになる。ただし 360 では高さを `W ÷ 2` にそろえ、`bg_media` の高さは引き継がない（2:1 でない背景では旧 Stickers と違う）。`coverage` 180 の `auto` は `bg_media` と同じ大きさになる（固定の値では、旧 Stickers は `coverage` 180 で選んだ値を出力の幅にするので、Studio はその半分の幅になる）。ERP には上限を設けない（`auto` は大きな `bg_media` ならそのまま大きくなる）。
  - `perspective` の `hFOV_max` は、Timeline の全出力フレーム（`frames` の評価する Timeline frame）で評価した Camera の hFOV の最大値。幅と高さはそれぞれ最も近い偶数に丸め（最小 2）、FOV が動いても大きさは変わらない。丸めた長辺が 4096（`STUDIO_MAX_OUTPUT_SIDE`）を超えるときは、比を保って長辺を 4096 に縮め（丸める前の値に掛けて丸め直す）、警告する。
- `scene` 出力は `PanoSceneValue`（上記「`PANO_SCENE`」）で、自分の層（最後の層）の `state` の `camera` だけを `null` にする（撮影する世界で、Camera を含まない。`_scene_output`）。上流の Scene を受けたときは、上流の層も含む。Timeline（`fps`・`times`・`frames`）は Camera の Keyframe を数えて決めたもの。
- `sticker_state` は `projection` が `perspective` のときだけ、`_camera_sticker_state` が作る v2（`docs/scene-state-v2.md`）。`fps` は状態の `timeline.fps`、`camera` は Camera の Lane ごとの Keyframe をそのまま写したもの。Timeline fps には再基準化しない（丸めで Keyframe が最大で半フレーム動くため。Pose handoff はどの fps の比でも評価できる。#65）。Keyframe のない Lane は Camera の値を持つ `frame: 0` の Keyframe 一つ。`source_aspect` は出力の幅 ÷ 高さ。Camera が無いとき（隠したときを含む）と `erp` のときは空文字列。
- 隠した `scene`（`scene.visible`）と Sticker は評価関数の `active` が偽になるので描かない。隠したペイント（`painting_visible`）は `_resolve_sources` が空のペイントを渡すので、色にも MASK にも出ない。上流の Scene の層でも同じ。
- 実行結果の `ui` は上記「Scene の組み立てと撮影の入口」の表のキー（`pano_input_images` などの素材、`pano_sticker_input_pose`、`pano_sticker_warnings`）。上流の Scene を受けたときのキーは下記。エディタは #89 で結んだ（`docs/threejs-spark-integration.md` の「Panorama Studio のエディタ（#89）」）。ノード上の表示は #91 で作り直した。上流の Scene を受けたときのエディタの表示は #90（`docs/threejs-spark-integration.md` の「上流の Scene の表示（#90）」）。

### 上流の Scene（#88）

`scene` に別の Panorama Studio の `scene` 出力（`PANO_SCENE`）をつなぐと、その Scene の上に自分の Scene を重ねて撮る（ADR 0029）。`_build_scene` が上流の層の後ろに自分の層を足す。

- 重ね方：上流の各層と自分の層を `RenderLayer` にして `render_frame` に渡す（上記「層」）。`sky` は上流の上に自分を重ね、`world` は奥行きで混ざる。Sticker の `id` と `port` は層ごとに分かれるので、上流と同じ `id` や、上流にも `port` の Sticker があっても、それぞれ描く。撮るのは自分の Camera（自分の状態の `camera`、上の「Camera の判定」）で、上流の Camera は無い（`scene` 出力は Camera を含まない）。
- Timeline fps は上流の `rate`。出力フレームの時刻は上流の `times` で、上流より長いときはその後を Timeline fps の間隔で続ける（`_output_times`）。丸めの幅も上流の `time_base`。自分の `bg_media`・`sticker` の VIDEO は Timeline fps を決めない。
- 長さ：自分の `timeline.length` があればそれ（秒を保って Timeline fps のフレーム数に直す。上流より短くも長くもできる）。なければ、上流の出力フレーム数と、自分の状態から通常の規則（上記「Scene の組み立てと撮影の入口」の長さの規則。背景 VIDEO の段は、自分の `bg_media` を使うときだけで、その VIDEO の最後のフレームが終わる時刻を Timeline fps のフレーム数にしたもの）で決まる長さの、長いほう。
- 時刻の評価：各層は、出力フレームの時刻 `t` 秒について `t × その層の timeline.fps` の Timeline frame で評価する（`_layer_frames`。上流の Timeline frame から見れば `frame × 層の timeline.fps ÷ 上流の timeline.fps`）。上流と自分の fps が違っても、自分の Keyframe と Clip range は秒を保つ。状態は再基準化しない（整数の Timeline frame に丸めない）。各層の `port` と `scene` の番号も、その層の Timeline frame から通常の規則（`PortMedia.index_at`・`batch_index`）で選ぶ。上流の層の番号は、上流で決めたものと同じ規則で、延ばした分も含めて選び直す。
- 背景：上流が `bg_media` を持てば、その `bg_media`・`coverage`・`bg_color` を使い、自分の `bg_media` は使わない。自分の `bg_media` も接続されていれば `bg_media is not used: the scene input has a background of its own.` と警告する（ログと `pano_sticker_warnings`）。自分の `coverage`・`bg_color` も使わない。上流が `bg_media` を持たなければ、自分の `bg_media`・`coverage`・`bg_color` を使う。
  - 背景のフレーム（`_bg_frames`）：IMAGE バッチは出力フレームと 1 対 1、1 枚の IMAGE は全フレーム。VIDEO は、Timeline を決めた VIDEO（上流がないとき）なら 1 対 1。上流がある（Timeline fps を上流が決めた）ときは、各出力フレームの時刻以前に始まる最後のフレーム（PTS ≤ `t`、比較の許容差は出力の時刻と VIDEO の time base の大きいほうの半分）で、最後のフレームが平均フレームレートの 1 フレームの間続いた後は描かない（`bg_color`）。上流の背景の VIDEO が終わった先も同じく `bg_color`。
  - 下流が延ばした区間でも、上流の背景の VIDEO は時刻で続き、最後のフレームが終わった後は `bg_color` になる。上流の背景は下流の長さの規則には入らない（上流の出力フレーム数がすでにそれを含み、上流の `timeline.length` で短くした分もそのまま保つ）。
  - `output_size` の `auto` は、使う背景（上流のものを含む）の幅で決める。
- マスク：`first_frame_mask` は、上流の各層のペイントのマスクも含む（層ごとのマスクの画素ごとの最大値）。
- `sticker_state` 入力と Pose handoff は自分の層の `port` の Sticker だけに効く。
- 実行結果の `ui`（エディタ用。#89・#90 が読む）：

  | キー | 内容 |
  |---|---|
  | `pano_scene_files` / `pano_scene_meta`、`pano_sticker_input_*`、`pano_sticker_files` / `pano_sticker_meta`、`pano_sticker_input_pose` | 自分の層の素材と姿勢。上流がないときと同じキー |
  | `pano_input_images` / `pano_input_videos` / `pano_input_video_meta` | 自分の `bg_media` を使うとき（上流が背景を持たないとき）だけ出す |
  | `pano_upstream_layers` | 上流の層のリスト（最も上流から）。各要素は `{"state": その層の状態 v2（camera は null）, "ui": その層の素材の ui}`。`ui` のキーは自分の層と同じ（`pano_sticker_input_images`・`pano_sticker_input_videos`・`pano_sticker_input_video_meta`・`pano_sticker_input_frames`・`pano_sticker_files`・`pano_sticker_meta`・`pano_scene_files`・`pano_scene_meta` のうち、その層が持つもの）で、背景は入らない。ファイルは上流のノードが書いたもので、書き直さない |
  | `pano_upstream_input_images` / `pano_upstream_input_videos` / `pano_upstream_input_video_meta` | 上流が背景を持つときの、その背景（`pano_input_*` と同じ形）。このとき自分の `pano_input_*` は出さない |
  | `pano_upstream_coverage` | 上流が背景を持つときの、その `coverage`（`[360]` か `[180]`） |
  | `pano_upstream_bg_color` | 上流が背景を持つときの、その `bg_color`（`[[r, g, b]]`、0〜1） |
  | `pano_timeline_fps` | 上流があるときは常に出す（Timeline fps は上流が決める）。エディタは fps の欄をロックし、自分の状態をこの fps に再基準化して表示する（VIDEO が fps を決めたときと同じ） |
  | `pano_timeline_frames` | 上流があるときは常に出す。出力のフレーム数（上流と自分の長いほう、または自分の `timeline.length`） |

  - エディタは上流の要素を見せるが、選べず動かせない。上流の要素は自分のタイムラインに出さない（ADR 0029）。上流の層の Keyframe はその層の `timeline.fps` で記録されているので、表示する時刻 `t` 秒ではその層の `t × timeline.fps` で評価する（再基準化しない）。

## Preview ノード（`PanoramaPreviewNode`）

- Python のクラスは `PanoramaPreviewSceneNode`。旧 `PanoramaPreview` は #78 まで登録を残す。
- `source` は `io.MatchType`（テンプレート `source`、IMAGE・VIDEO・`PANO_SCENE`）で、出力は入力と同じ型の同じオブジェクトを返す。`is_output_node` は `True`。
- Timeline は `source` から Studio と同じ `_decide_timeline` で決める。IMAGE と VIDEO は既定の状態（`timeline.fps` 24）に対して決める。`PANO_SCENE` の Timeline はその `fps`・`times`・`frames`。
- IMAGE と VIDEO の実行結果の `ui` は旧 Preview と同じキー（`pano_input_images`、2 フレーム以上なら `pano_videos`・`pano_video_meta`）。`pano_video_meta` の fps は Timeline fps、`frames` は Timeline の長さ。
  - IMAGE：旧 Preview と同じく、最初の画像を保存し、バッチを MP4 にエンコードする（`encode_frames_to_mp4`。キーフレームは `EDITOR_KEYINT` フレームごと、B フレームなし）。音声はない。
- 旧ノード（`PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`）のプレビュー MP4 に入れる `audio` は、フレームの長さ（フレーム数 ÷ fps）に合わせて、長ければ切り、短ければ無音で延ばす（`_fit_audio_to_frame_count`）。伸縮はしないので、速さと音程は変わらず、先頭からフレームと揃う（以前は torchaudio の phase vocoder で長さを合わせていた）。
  - VIDEO：`open_video(video, "source")`（Studio と同じ）で開き、最初に復号できたフレームをプレビュー画像にし、Timeline は `frame_rate` と `times` から決める。全フレームを一括では展開しない（クロップ付きや `VideoFromFile` 以外で `open_video` が `get_components()` に落ちる場合は、それに従う）。MP4 は Studio と同じエディタの MP4（`_editor_mp4`）で、シークしやすいファイルはコアの `save_to(MP4, H264)` でストリームコピーし、それ以外はプロキシを作る。`has_audio` はコピーなら書いた MP4 に音声ストリームがあるか、プロキシなら音声を入れたかで決める。
  - プレビュー画像と MP4 のために VIDEO を 2 回開く（`open_video` と、コピーの `save_to` またはプロキシの `StreamedVideo`）。PTS の走査は `VideoIndex` を共有するので 1 回だけ。Studio の `bg_media` の VIDEO も同じ方法で MP4 を書く（#75）。
- `PANO_SCENE` のときは描画も `ui` も作らずに素通しする（層が複数ある Scene も同じ。#88 で確かめるのは、受けて落ちないことまで）。表示（ノード上の表示と、エディタの新しい ID への結び付け）は #76 で行う。
- `coverage` 入力は `execute` では読まない（フロントエンドのウィジェットが読む）。`PANO_SCENE` のときは `PanoSceneValue.coverage` が正で、ウィジェットの値は使わない。
- MatchType はバックエンドで型を検証しないので、`source` が IMAGE（4 次元のテンソル）・VIDEO・`PanoSceneValue` のどれでもなければ `TypeError` にする。
- #76 への申し送り：旧 Preview 用の `ensurePanoramaPreviewImageOutput`（`web_src/pano_editor_extension.js`）は、足りない `image` 出力を足す。新しい ID に適用すると MatchType の `output` とは別に `image` 出力が増えるので、新しいノードには適用しない。

## メモリ・中断・一時ファイル

### デバイスとメモリ

- デバイスは `comfy.model_management.get_torch_device()`、空きメモリは `get_free_memory(device)` で読み、キャッシュを空けるのは `soft_empty_cache()` だけにする（旧 `PanoramaStickers` も同じ。CUDA を直接は選ばず、チャンクごとに `empty_cache` を呼ばない。メモリが足りなくなったときだけ空けてチャンクを半分にする）。
- 新しい描画のパス（`_render_frames`。最初のフレームの描画と、`video` 出力を読むたび）の最初に、見積もった量を `get_free_memory(device)` と比べ、足りないときだけ `comfy.model_management.free_memory(required, device)` を 1 回呼ぶ（`free_memory` は呼ぶたびに `gc.collect` などをするので、足りているパスでは呼ばない）。ComfyUI は空きがその量に足りない分だけモデルを降ろす。CPU では呼ばない。
- 見積もり（`_render_memory`）は次の和。粗い上側の見積もりで、細かな一時テンソルは含めない。
  - 出力の画素あたり `RENDER_FLOATS_PER_PIXEL`（32）個の float32。1 フレームの間にデバイスに同時にあるもの（光線とその向き、Sky の層ごとのサンプルと footprint・重み、背景のサンプル、World の層、色・マスク・深度）の分。実測（RTX 4070 Ti、`render_frame` 1 回の VRAM の最大から、下の素材の分（4 倍）を引いたもの）は、ERP 4096 x 2048 の回転なしで約 1、回転ありで約 8、透視投影 1920 x 1080（hFOV 20°〜150°）で 0 未満〜8、Sky を画素ごとに標本化する C3 の経路の ERP 4096 x 2048 で約 17 で、32 は余裕を持たせた値。光線（3 個）とその向き（2 個）、World の光線（3 個）、MESH・SPLAT の光線（各 3 個）はフレームの間も描画のパスの終わりまで持ち続けるが、これらを合わせても画素あたり約 14 個で、32 の内に収まる。
  - デバイスに上げる素材の float32 の大きさの `DEVICE_SOURCE_FACTOR`（4）倍：`bg_media` の 1 フレーム（RGB）、各層の Sticker の素材（RGBA）、アップロード済みのペイントのラスタ。4 倍は、本体と `_sample_filtered` の ripmap（本体の 3 倍まで）の分。
  - 3D の中身（`scene` と 3D の Sticker）のテンソルの大きさ（`core/cache.py` の `nbytes`）。
- 例：ERP 4096 x 2048 の出力に 4096 x 2048 の背景と 2048 四方の Sticker 一つなら、1 GiB（画素）＋ 384 MiB（背景）＋ 256 MiB（Sticker）で約 1.6 GiB（実測の最大は約 0.9 GiB、C3 の経路で約 1.1 GiB）。

### 中断と進み具合

- 長いループ（エディタ用の MP4 のエンコード `encode_editor_mp4`、RGBA の PNG の書き出し `save_editor_frames`、3D のエディタ用ファイルの書き出し `write_editor_files`、VIDEO の PTS の走査、旧ノードのプレビュー MP4 `encode_frames_to_mp4`、`video` 出力の保存）は、1 ステップごとに ComfyUI の中断を確かめ、進み具合をノードのバーに出す（`progress.loop_progress()`。旧ノードは `NodeProgress` が同じことをする）。
- 中断や失敗で止まったときは、書きかけのファイル（`core/video.py` の `removed_on_failure`）を消してから例外をそのまま上げる。

### キャッシュ

- 実行をまたいで持つものは、`core/cache.py` の一つのキャッシュ（`CACHE`）にまとめる。名前空間とキーで引き、最近使っていないものから追い出す。
  - 上限は `min(CACHE_MAX_BYTES, CACHE_FREE_SHARE × (CPU の空き ＋ キャッシュが持っている量))`。既定は 4 GiB と 25%。CPU の空きは `comfy.model_management.get_free_memory(cpu)`（cgroup の上限も見る）で、`node_runtime.py` が設定する。持っている量を空きに足すのは、キャッシュが持つ分で上限が下がり続けないため。上限より大きい値は持たない（返すだけ）。
  - 中身のバイト数は `nbytes`（配列・テンソル、その入れ物、SPLAT・MESH の属性のテンソル）で数える。パスだけの項目（temp の MP4・PNG・PLY/GLB）は 0 バイトなので、項目数を `CACHE_MAX_ENTRIES`（256）で抑える。
  - 入れた配列は読み取り専用にし、`get` も `put` もコピーしない。呼び出し側は書き換えない。
- 入れるもの（名前空間）：
  - `image_file`・`image_data_url`：8 ビットの画像（Sticker の `file` の Source、アップロード済みのペイントのラスタ）を、復号した RGBA の uint8 のまま。キーはファイルならパス・更新時刻・大きさ、data URL なら URL の SHA-1（URL の文字列そのものはキーにしない）。
  - `painting_erp`：状態のペイント（ストローク、ラスタオブジェクト）を ERP に描いた結果（`render_painting_to_erp`）。1 回の描画のパスの中で同じペイントを何度も求め（ペイントとマスクを別々に、グループごとに）、1 回の実行で複数のパス（最初のフレーム、`video` 出力を読むたび）を描くので、ComfyUI の出力キャッシュでは代わりにならない。ストロークを描くのは CPU で数秒かかることがあるため残す。
  - `cutout_sampling_map`：旧 Cutout の標本化の表。
  - `video`・`scene_files`：エディタ用の MP4・PNG・PLY/GLB のパス。
  - `splat_files`・`mesh_files`：3D ファイルから読んだ SPLAT・MESH。
- 持たないもの：
  - 旧 `PanoramaStickers` の背景のバッチ（以前の `stickers_bg`）。プレビューの MP4 を作る間だけ持つ。
  - 旧 Cutout のペイントの描画結果（以前の `_CUTOUT_RENDER_CACHE`。本番の呼び出し元がない）と、アップロード済みのペイントの拡大縮小の結果（以前の `_PAINTING_LAYER_PAYLOAD_CACHE`。元の画像は `image_file` にあり、拡大縮小はパスごとに一度で軽い）。
- 素材の型：8 ビットの画像から読んだもの（Sticker の `file` の Source、アップロード済みのペイント）は uint8 のまま持ち（`StickerSource.rgba`、`load_painting_layer_payload` の戻り値）、使うところで 0〜1 の float32 にする（GPU では uint8 で上げてからデバイスで 255 で割る。`core/math.py` の `unit_float`・`unit_float_tensor`）。元の値が 8 ビットなので、値は float で持っていたときと同じになる。IMAGE の入力（float のテンソル）は float のまま持つ。

### 一時ファイル

- エディタのために temp に書くファイル（エディタ用の MP4・RGBA の PNG・PLY/GLB、旧ノードのプレビュー MP4、`video` 出力のストリームソース、Panorama Studio の出力 ERP の PNG（`core/video.py` の `save_output_png`。ノード上の表示用、元の大きさ））は、`core/temp_files.py` の `TEMP_FILES` に登録する（書き終えたら `TEMP_FILES.writing` / `add`）。ComfyUI は temp を起動時と終了時にしか消さないので、合計が `TEMP_MAX_BYTES`（既定 5 GiB。モジュールの定数）を超えたら、最近使っていないものから消す。
  - 今の実行（ComfyUI のプロンプト。`comfy_execution.utils.get_executing_context()` の `prompt_id`、`node_runtime.py` が設定する）が書いたファイルと、今の実行の出力の `ui` が指したファイル（`entry_from_path` を通ったもの）は、その実行の間は消さない。上限を超えていても残す。
  - 消したファイルをキャッシュが指していても、次に要るときに作り直す（キャッシュはファイルがあるかを確かめる。`SceneVideo` のストリームソースも同じ）。
  - 消せないファイル（Windows でブラウザが再生中の MP4 など。`unlink` の `OSError`）は登録と合計に残し、次に書いたときにもう一度消す。消せないことで実行は失敗しない。書きかけのファイルを消すとき（`removed_on_failure`）も同じで、元の例外をそのまま上げる。旧ノードのプレビュー MP4 は、エンコーダの試行のループを抜けてから登録する（登録の処理をエンコーダの失敗と取り違えないため）。
- 登録したファイルの `ui` の項目には `"pano_evictable": true` を足す。ほかの項目（`filename`・`subfolder`・`type`・`storage`・`format`）は変えない。前の実行の `ui` を表示しているエディタがこの印の付いたファイルを開けなかった（404）ときは、「ファイルが消えたので、もう一度実行してください」と出せる。フロントエンドの表示はまだない。また、入力を変えずに実行し直すと ComfyUI はノードの出力をキャッシュから返し、`execute` が走らないので、消えたファイルを指す前の `ui` がそのまま返る（ファイルは書き直されない）。入力のどれかを変えて実行するまで、そのファイルは開けない。
  - 対象のキー：`pano_videos`・`pano_input_videos`・`pano_sticker_input_videos`・`pano_sticker_input_frames`・`pano_scene_files`・`pano_sticker_files`・`pano_output_erp` と、上流の層の同じキー（`pano_upstream_*`・`pano_upstream_layers[].ui`）。
- 入力ディレクトリの VIDEO で、エディタがそのまま扱えるもの（上の「そのまま使う」の条件を満たす `.mp4`）は temp に複製せず、`{"filename", "subfolder", "type": "input", "storage": "input", "format": "video/mp4"}` で直接指す。登録しないので `pano_evictable` は付かない。
  - `type` を外して `storage` だけにはできない：フロントエンドの `pano_comfy_media.js` の `comfyImageEntryToUrl` は `type` だけを読む（`storage` を先に読むのは `pano_preview_previewnode.js` だけ）。そのため、ComfyUI を `--enable-assets` で起動したときは、コアの `comfy_execution/asset_enrichment.py` が `type` の付いた `ui` の項目をすべてジョブの出力として登録し、この入力の MP4 も実行のたびに、その実行の出力として登録し直される（同じパスの前の記録は missing になる）。既定（assets なし）では影響はない。フロントエンドが `storage` を先に読むようになったら、`type` を外す。
- `ui` の項目の `subfolder` は、ディレクトリの直下のファイルでは `""`（以前は `"."`）。
- RGBA の IMAGE バッチの `pano_sticker_input_frames`（1 枚ずつの PNG）は今回は変えない。長いバッチでは PNG の数と大きさが増えるが、登録の上限で抑える。
