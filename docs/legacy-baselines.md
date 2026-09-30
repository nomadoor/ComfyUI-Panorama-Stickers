# 旧ノードの基準画像と性能基準値

旧 `PanoramaStickers` と旧 `PanoramaCutout` を作り直す前に固定した、描画結果と処理時間の基準。以後の ticket は、ここと比べて退行を確かめる（#47、#48）。

## 基準画像

- 生成：`PYTHONPATH=<ComfyUI> python tools/bake_legacy_goldens.py`
- 比較：`tests/test_legacy_goldens.py`。画像と MASK のそれぞれで、次の両方を満たせば合格。
  - 平均の絶対誤差が 0.5/255 以内。
  - チャンネル方向の最大誤差が 8/255 を超える画素が、全画素の 0.1% 以下。
- 生成とテストでは、ノードのランタイムを描画だけのもの（`render_only_runtime`）に差し替える。プレビュー画像と MP4 を作らず、ComfyUI の temp に書き込まない。
- 保存先：`tests/fixtures/legacy_goldens/`。`<case>.image.png`（16-bit RGB）と `<case>.mask.png`（16-bit グレー）の組で、合計約 530KB。
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

- ペイントは `painting_layer`（フロントエンドがアップロードするラスター）を使わず、バックエンドのストローク描画で出している。
- 基準画像は RTX 4070 Ti（CUDA）で生成した。CPU 経路でも、各 case の差は 0.001/255 未満だった。
- 平均の絶対誤差だけでは、小さな Sticker のずれを見逃す。`stickers_sky_rotation` で yaw を 1° ずらしても平均は 0.37/255 で収まる。そこで、目に見える差のある画素の割合も判定する。yaw を 0.25° ずらすと 0.33%、1° ずらすと 0.55% の画素が 8/255 を超え、どちらも不合格になる。この検出はテストで確かめている。

## 性能基準値

旧 Stickers で、何も時間変化しない 100 フレームの IMAGE バッチを処理する時間。

- 計測：`PYTHONPATH=<ComfyUI> python tools/benchmark_legacy_stickers.py`
- 場面：同じ背景を 100 フレーム並べた 2048x1024 の IMAGE バッチ、`output_preset` は `auto`、`sky` の Sticker 2 枚とペイントのストローク 1 本、`fps` 24。
- 計測範囲：描画だけ。ノードのランタイムを `render_only_runtime` に差し替え、プレビュー画像、プレビュー用 MP4 のエンコード、temp への書き込みを外す。
- 手順：
  - 各ノードを 1 回ずつ捨てて暖めた後、10 回計測し、最小値を採る。
  - CUDA では、計測の前後に `torch.cuda.synchronize()` を入れる。
  - 背景のキャッシュが効かないよう、実行ごとに新しいテンソルを渡す。
  - 新旧のノードは、同じプロセスで交互に（ABAB）計る。スクリプトの `CANDIDATES` には、旧ノード（`legacy`）と新しい Stickers（`new`、`PanoramaStickersNode`）を同じ場面で入れている。
- 仕様の目標は、新しいノードの最小値を、旧ノードの最小値の 1.2 倍以内に収めること。

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
