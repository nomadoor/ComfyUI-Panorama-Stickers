# Panorama Circular RoPE と Panorama Circular VAE

Qwen Image 2.1 で作る 360° ERP の左右のつなぎ目をなくす 2 つのノード、`PanoramaCircularRoPE`（Panorama Circular RoPE）と
`PanoramaCircularVAE`（Panorama Circular VAE）の規則を定める。なぜこの方法にしたかは ADR 0068 に書く。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| そろえる帯と、そろえた後の周波数 | `comfyui_pano_suite/erp_circular.py` `snap_to_whole_turns` | — | `tests/test_erp_circular.py` |
| 周期の長さ、書き換えるトークンと軸 | `comfyui_pano_suite/erp_circular.py` `CircularEmbedND` | — | `tests/test_erp_circular.py` |
| VAE の左右の巻き付け、tiled を断ること、`clone()` で保つこと | `comfyui_pano_suite/erp_circular.py` `CircularVAE` | — | `tests/test_erp_circular.py` |
| 受け付けるモデルと VAE | `comfyui_pano_suite/erp_circular.py` の 2 つのノード | — | `tests/test_erp_circular.py` |

## 2 つのノードの関係

- Qwen Image 2.1 の型を読めない ComfyUI では、パックは読み込まれ、この 2 つのノードだけが実行のときに理由の分かるエラーで
  止まる。core の型は `comfyui_pano_suite/core_adapters.py` から読む（`docs/render-contract.md` の「コアの内部のシンボルの読み込み」）。

- Panorama Circular RoPE は MODEL を受け取って MODEL を返し、Panorama Circular VAE は VAE を受け取って VAE を返す。
  どちらも重みと層には触らない。
- 2 つは必ずセットで使う。Circular RoPE で作った latent を普通の VAE で decode しても、普通に作った latent を
  Circular VAE で decode しても、端にファスナー状の乱れが出る。参照画像を使うワークフローでは、参照画像の encode にも
  Circular VAE を使う（Text Encode Qwen Image 2.1 の `vae` に渡す）。
- グラフの上で組み合わせを強制することはできないので、ノードの説明とサンプルのワークフローに書く。

## 横の位置の周期化（Panorama Circular RoPE）

- 周期の長さは、生成する画像の横のトークン数とする（2880 幅なら 180）。サンプリングのたびに、生成する画像のトークンから
  決める。参照画像の幅は使わない。
- 横の軸の各周波数について、周期の長さの間に回る回数を求め、それにいちばん近い整数が 1 以上の帯（0.5 回を超えて回る帯）
  だけを、その整数回でちょうど回り切る周波数に置き換える。それより遅い帯は、学習したときのままにする。2880 幅では、
  横の 28 帯のうち 13 帯をそろえる。
- そろえた帯では、右端の一つ先の位置の回転角が左端と同じになり、モデルにとって左右の端が隣どうしになる。
- 書き換えるのは、画像のトークン（生成する画像と参照画像）の横の軸の部分だけ。縦の軸、時間の軸、文字のトークンは、
  元の `pe_embedder` の出力をそのまま使う。参照画像の幅が生成する画像と違っても、同じ周期を使う。参照画像のトークンは、
  今までどおり生成する画像の中央を基準にした位置に並ぶ。
- 画像のトークンは、1 枚の画像のトークンがすべて同じ時間の値を持つことで見分ける。生成する画像は、最後に並ぶ画像とする。
- 受け付けるのは Qwen Image 2.1 の MODEL だけ。それ以外を渡したら、Qwen Image 2.1 専用であることが分かるエラーで止める。
  すでに Panorama Circular RoPE を通った MODEL を渡したら、そのまま返す。

## VAE の左右の巻き付け（Panorama Circular VAE）

- encode と decode の間だけ、横に padding する畳み込みの入力の左右に、反対側の端の列を padding の幅だけ足し、出力の
  左右から同じ幅を切り落とす。結果は、横だけ circular にした畳み込みと同じになる。縦は今までどおりゼロ。encoder の
  縮小の段にある右側だけのゼロの padding も、反対側の端の列で埋める。
- 元の VAE は変えない。同じ VAE を Panorama Circular VAE を通さずに使った経路は、今までと同じ出力になる。
- 下流のノードで `clone()` されても、巻き付けと tiled を断ることは保たれる。
- tiled の encode と decode、VRAM が足りないときの tiled への自動切り替えは、タイルごとに巻き付けると偽のつなぎ目が
  できるので、理由の分かるエラーで断る。2880×1440 の decode には VRAM が約 7.5 GB 要るので、今まで tiled で通っていた
  環境ではエラーになる。
- 画像の幅が 16 の倍数でないときは、ComfyUI が encode の前に左右を少し切り落とすので、つなぎ目の位置がずれる。ERP の
  幅は 16 の倍数にする。
- 受け付けるのは Qwen Image 2.1 の画像用 VAE だけ（Wan 2.2 の形で、画像 1 枚ずつ扱い、時間方向の畳み込みの幅が 1 の
  もの）。Wan 2.2 の動画用 VAE、Wan 2.1 の VAE、TAESD などは分かるエラーで止める。`VAE.clone()` のない ComfyUI
  （v0.44.0 より前）でも、分かるエラーで止める。すでに Panorama Circular VAE を通った VAE を渡したら、そのまま返す。

## test

本物の重みは使わず、CPU だけで回す。

- `snap_to_whole_turns`：そろえた帯は周期の長さで 2π の整数倍回り、ほかの帯は元と同じ値。2880 幅でそろう帯は 13。
- `CircularEmbedND`：縦と時間の軸、文字のトークンは元の出力と一致する。参照画像が生成する画像より広くても、周期は
  生成する画像の幅になる。文字が短くても、画像のトークンを取りこぼさない。小さく組んだ
  `QwenImage21Transformer2DModel` の `build_sequence` で、生成する画像が最後に並び、1 枚の画像が同じ時間の値を持つ
  ことを確かめる。
- `CircularVAE`：小さな Qwen Image 2.1 形の `WanVAE` で、横にずらした画像の encode と decode が、ずらした結果と一致する。
  `strip_apply` を帯に分けさせても同じ。使った後、元の VAE の出力が使う前と bit 一致する。tiled の入口はすべて断り、
  `clone()` の後も断る。
- 2 つのノード：Qwen Image 2.1 以外の MODEL と VAE で分かるエラーになる。2 回通しても変わらない。
