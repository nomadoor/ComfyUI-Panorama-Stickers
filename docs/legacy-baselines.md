# 旧ノードの基準画像と性能基準値

旧 `PanoramaStickers` と旧 `PanoramaCutout` を作り直す前に固定した、描画結果と処理時間の基準。以後の ticket は、ここと比べて退行を確かめる（#47、#48）。

## 基準画像

- 生成：`PYTHONPATH=<ComfyUI> python tools/bake_legacy_goldens.py`
- 比較：`tests/test_legacy_goldens.py`。画像と MASK のそれぞれで、次の両方を満たせば合格。
  - 平均の絶対誤差が 0.5/255 以内。
  - チャンネル方向の最大誤差が 8/255 を超える画素が、全画素の 0.1% 以下。
- 生成とテストでは、ノードのランタイムを描画だけのもの（`render_only_runtime`）に差し替える。プレビュー画像と MP4 を作らない。旧ノードの case は ComfyUI の temp に書き込まない。Panorama Studio の case が temp に書くのは、出力の ERP の PNG だけである（下記）。
- 保存先：`tests/fixtures/legacy_goldens/`。`<case>.image.png`（16-bit RGB）と `<case>.mask.png`（16-bit グレー）の組で、旧ノードの分は合計約 530KB（Panorama Studio の分を含めて約 1MB）。
- 入力はすべてスクリプト内で合成する。背景は 512x256 の 8-bit ERP（経緯線の格子と、継ぎ目・赤道・極の目印）で、`output_preset` は `auto`。

| case | 内容 | 出力サイズ |
|---|---|---|
| `stickers_background_only` | 背景のみ | 512x256 |
| `stickers_sky_rotation` | 継ぎ目をまたぐ `sky` の Sticker、`rot_deg` 30° | 512x256 |
| `stickers_sky_crop` | `sky` の Sticker のクロップ | 512x256 |
| `stickers_sky_overlap` | 半透明の Sticker を `z_index` で前に重ねる | 512x256 |
| `stickers_paint` | ペイントのストローク 2 本 | 512x256 |
| `stickers_paint_mask` | ペイントマスクのストローク（MASK 出力） | 512x256 |
| `stickers_paint_interleaved` | ストロークのグループ（`z_index` 0）→ Sticker（1）→ 別のグループ（2）の順に重ねる | 512x256 |
| `stickers_coverage_180` | `coverage` 180、Sticker あり | 512x512 |
| `cutout_single_shot` | Cutout の単一ショット（yaw 30°、pitch 10°、roll 15°、90°x60°） | 224x128 |


### Panorama Studio の基準画像

旧ノードと意図して変えた出力は、Panorama Studio の出力から別の基準画像として生成する（`tools/bake_legacy_goldens.py` の `STUDIO_CASES`。`PYTHONPATH=<ComfyUI> python tools/bake_legacy_goldens.py <case>` で一つだけ生成できる）。保存先と比べ方は旧ノードと同じ。

これらは、状態 v2 の Stickers・Cutout（`PanoramaStickersNode`・`PanoramaCutoutNode`）の出力から焼いた `stickers_node_*`・`cutout_node_single_shot` を、#92 でそのノードを外したときに名前だけ変えたものである（中身は焼き直していない）。Panorama Studio は同じ描画の経路を通るので、そのまま一致する。

| case | 内容 | 出力サイズ |
|---|---|---|
| `studio_camera_single_shot` | Camera を持つ Studio で `cutout_single_shot` と同じショット（v1 の状態の `shots[0]` が Camera になる）と背景、`bg_color` は黒 | 224x128 |

- 大きさは `output_size` からは決まらないので、焼き直しとテストでは `_studio_output_size` を差し替えて 224x128（`STUDIO_SHOT_SIZE`）で撮る（`studio_shot_size`）。
- Studio は、v1 の状態と v2 に読み替えた状態の両方で `studio_camera_single_shot` と一致する（`tests/test_studio_camera.py`）。
- `cutout_single_shot` とは意図して違う。新しい描画は ERP を画素の中心で標本化し、透視投影の画素を正方にした。エディタと Studio の出力の画素の位置を揃えるためである（`docs/render-contract.md`）。
  - 旧 Cutout は ERP の画素 i を `u = i`（画素の中心ではなく端）とみなし、背景を ERP の半画素ずらして標本化していた。
  - 旧 Cutout は垂直の FOV を shot の `vFOV_deg`（60°）にしていたが、Studio は丸めた出力の大きさから決める（224x128 で 59.5°）。
  - `cutout_single_shot` との差は平均の絶対誤差で 9.7/255、8/255 を超える画素は 22%（RTX 4070 Ti、CUDA）。半画素のずれを戻すと 2.3/255 になり、残りは垂直の FOV の差である。鋭い格子線の背景なので差が大きく出る。テストはこの差の上限（10.5/255 と、ずれを戻したときの 2.5/255）を確かめる。
- `studio_camera_single_shot` は RTX 4070 Ti（CUDA）で生成した。
- ペイントは `painting_layer`（フロントエンドがアップロードするラスター）を使わず、バックエンドのストローク描画で出している。
- 基準画像は RTX 4070 Ti（CUDA）で生成した。CPU 経路でも、各 case の差は 0.001/255 未満だった。
- 平均の絶対誤差だけでは、小さな Sticker のずれを見逃す。`stickers_sky_rotation` で yaw を 1° ずらしても平均は 0.37/255 で収まる。そこで、目に見える差のある画素の割合も判定する。yaw を 0.25° ずらすと 0.33%、1° ずらすと 0.55% の画素が 8/255 を超え、どちらも不合格になる。この検出はテストで確かめている。

### Camera のない Panorama Studio の基準画像（Sky を GPU で描く）

Panorama Studio は、ERP の出力の Sky も透視投影と同じく、出力の画素の向きから層ごとに直接標本化する（`docs/render-contract.md` の「Sky の描き方」）。旧ノードは Sky を CPU で ERP に描いていた。そのため、次の 5 つの case は、旧ノードの基準画像ではなく、Studio 自身の出力の基準画像と比べる。旧ノード自身は今までどおり旧ノードの基準画像と比べる（`tests/test_legacy_goldens.py`）。

- 生成：`PYTHONPATH=<ComfyUI> python tools/bake_legacy_goldens.py studio_sky_rotation studio_sky_crop studio_sky_overlap studio_paint_interleaved studio_coverage_180`。旧ノードの case と同じ v1 の状態（Camera は無い）と背景を、`output_size` `auto` の Studio に通す（`STUDIO_GOLDENS`、`_on_studio`）。大きさは旧ノードの基準画像と同じ（512x256、180 は 512x512）。Studio は実行のたびに出力の ERP を PNG で ComfyUI の temp に書く（ノード上の表示のため）ので、この case の焼き直しは temp に書き込む。
- 比べるテスト：Camera のない Studio の v1 の状態（`tests/test_studio_node.py`）と、エディタが保存した v2 の状態（`tests/test_studio_scene.py`）。どちらも `studio_golden(name)` で比べる基準画像を選ぶ。残りの case（`stickers_background_only`・`stickers_paint`・`stickers_paint_mask`）は、旧ノードの基準画像のまま一致する。
- 比べ方は旧ノードと同じ（平均 0.5/255 以内、8/255 を超える画素 0.1% 以下）。
- RTX 4070 Ti（CUDA）で焼いた。CPU の経路との差は、平均 0.0003/255 未満、最大 0.01/255。
- 旧ノードとの差（縁の扱い）：
  - 旧ノードは Sticker を ERP に硬い縁で描く（`_compose_sticker_patch`。範囲の内か外か）。Studio は、縁が横切る出力の画素に、画素のうち縁の内側にある割合を掛ける。差のある画素はほぼすべて Sticker の外の縁（±1 画素）にある。`sky_overlap` と `paint_interleaved` で縁の外に数えた画素も、手前の Sticker の縁がほかの層に重なるところである。
  - 180 の出力では、旧ノードは Sky を幅が出力と同じ 360 の ERP（出力の半分の細かさ）に描いて写していたので、縁も中の色の境目もギザギザだった。Studio は出力の画素ごとに素材から標本化するので、中の境目も細かい。
  - Studio と旧ノードの基準画像との差（RTX 4070 Ti、CUDA）：

| case | 平均の絶対誤差 | 8/255 を超える画素 | 最大 |
|---|---|---|---|
| `stickers_sky_rotation` | 0.054/255 | 0.164% | 124/255 |
| `stickers_sky_crop` | 0.046/255 | 0.184% | 101/255 |
| `stickers_sky_overlap` | 0.043/255 | 0.200% | 98/255 |
| `stickers_paint_interleaved` | 0.051/255 | 0.191% | 78/255 |
| `stickers_coverage_180` | 0.185/255 | 0.843% | 136/255 |

  - どれも、平均では収まり、8/255 を超える画素の割合で不合格になる差である。MASK はどの case も変わらない。

### ペイントの焼き直し（#80）

`stickers_paint`・`stickers_paint_mask`・`stickers_paint_interleaved` は、旧ノードの出力から意図して変えて焼き直した。

- 旧ノードは、ブラシのスタンプの中心を画素 `round(x)`（`x = u·W`）に置き、画素の中心の規約では平均で半画素、右下にずれていた。今は画素 `floor(x)`（中心 `floor(x) + 0.5` が `x` に最も近い画素）に置き、エディタ・Sticker・背景と同じ位置になる。
- 投げ縄の多角形は変えていない。Pillow は頂点の座標を切り捨てて塗るので、もとからスタンプと同じ `floor(x)` の位置だった。
- 焼き直し前の基準画像との差（RTX 4070 Ti、CUDA。ペイントは CPU の numpy で描くので環境によらない）：

| case | 出力 | 平均の絶対誤差 | 8/255 を超える画素 | 塗った部分の重心の移動 |
|---|---|---|---|---|
| `stickers_paint` | IMAGE | 0.243/255 | 0.31% | (−0.28, −0.45) px |
| `stickers_paint_mask` | MASK | 0.469/255 | 0.41% | (−0.53, −0.47) px |
| `stickers_paint_interleaved` | IMAGE | 0.168/255 | 0.21% | （未計測） |

- どれも、8/255 を超える画素の割合で不合格になる差である。他の出力（`stickers_paint` と `stickers_paint_interleaved` の MASK、`stickers_paint_mask` の IMAGE）は変わらない。

## 性能基準値

旧 Stickers で、何も時間変化しない 100 フレームの IMAGE バッチを処理する時間。

- 計測：`PYTHONPATH=<ComfyUI> python tools/benchmark_legacy_stickers.py`
- 場面：同じ背景を 100 フレーム並べた 2048x1024 の IMAGE バッチ、`output_preset` は `auto`、`sky` の Sticker 2 枚とペイントのストローク 1 本、`fps` 24。
- 計測範囲：描画だけ。ノードのランタイムを `render_only_runtime` に差し替え、プレビュー画像、プレビュー用 MP4 のエンコード、temp への書き込みを外す。
- 手順：
  - 各ノードを 1 回ずつ捨てて暖めた後、10 回計測し、最小値を採る。
  - CUDA では、計測の前後に `torch.cuda.synchronize()` を入れる。
  - 背景のキャッシュが効かないよう、実行ごとに新しいテンソルを渡す。
  - 新旧のノードは、同じプロセスで交互に（ABAB）計る。スクリプトの `CANDIDATES` には、旧ノード（`legacy`）と Camera のない Panorama Studio（`studio`）を同じ場面で入れている。Studio は出力の ERP の PNG を temp に書く分も計る。
- 仕様の目標は、Studio の最小値を、旧ノードの最小値の 1.2 倍以内に収めること。

### 基準値の再計測（ユーザーに依頼）

この手順での基準値はまだ計測していない。ComfyUI を起動していない状態で上のコマンドを実行し、出力の `legacy: min` と環境の行を下の表に追記する。

| 日付 | 環境 | 最小値 | 10 回の値 |
|---|---|---|---|
| （未計測） | | | |

### 旧手順の参考値

プレビュー用 MP4 2 本のエンコードを含む `execute` 全体を、暖めた後に 5 回計って中央値を取った値。エンコードと WSL2 の影響で 10〜19 s とばらつきが大きかったため、上の手順に改めた。

| 日付 | 環境 | 中央値 | 5 回の値 |
|---|---|---|---|
| 2026-09-30 | Ryzen 7 9700X、RAM 54GB、RTX 4070 Ti 12GB、WSL2（Linux 6.18）、Python 3.12.3、torch 2.12.0+cu130 | 11.98 s | 11.75、18.71、11.98、10.17、19.37 s |