# 描画関数の契約

Stickers・Cutout・Preview が共有する、バックエンドの描画関数の約束を定める（#47、#52）。後続の ticket は、この文書と `comfyui_pano_suite/core/render.py` だけを前提にする。用語は `CONTEXT.md`、座標は ADR 0023、時間は ADR 0024、Scene の正は ADR 0025 に従う。

## 入口

```python
render_frame(evaluated, sources, camera, projection, *, bg, bg_key=None, bg_color, device, cache=None)
# -> color (H, W, 3), mask (H, W), depth (H, W)
```

| 引数 | 内容 |
|---|---|
| `evaluated` | `evaluate_scene_state(state, frame)` の戻り値（その時刻の Sticker・`scene`・Camera の値） |
| `sources` | `SceneSources`。実行中に変わらない素材。`stickers`（Sticker の `id` → `StickerSource`）、`painting`（状態のペイント）、`painting_layer`（アップロード済みのペイントのラスタ。`resolve_painting_layer_payload` の戻り値） |
| `camera` | 評価済みの Camera の値。Stickers では `evaluated["camera"]`。ERP の出力は Camera の回転（`yaw_deg`・`pitch_deg`・`roll_deg`）に従って回る |
| `projection` | `Projection` |
| `bg` | このフレームの `bg_media` の画像 (h, w, C) または `None` |
| `bg_key` | `bg` を識別するハッシュ可能な値（Stickers では `bg_media` のフレーム番号）。`None` のときは背景を使い回さない |
| `bg_color` | 0〜1 の 3 つの数値 |
| `device` | 出力を置く torch の device |
| `cache` | 呼び出し側が 1 回の実行の間だけ持つ辞書（その間 `sources`・`bg_color`・`device` は変わらない）。直前のフレームの Sky の層、Camera の向きで写した Sky、読み込んだ背景（`("bg", bg_key)`）、結果を持つ。出力の画素ごとの向き（`_view`）は持たず、要るときに作り直す。Sky の値が同じなら Sky を作り直さず、Camera の回転と `bg_key` も同じなら直前の `color`・`mask`・`depth` をそのまま返す。Sky のキー（`_sky_key`）は Sticker の値だけで、素材のフレームを含まない。#53・#56 で動画の素材を使うときは、その素材のフレームをキーに入れる |

- 戻り値はすべて float32 で、`device` 上にある。
- `mask` はペイントで描いたマスクで、色と同じ Projection で写す。
- `depth` は Camera からの距離。World の内容がない画素（Sky だけが見える画素）は `+inf` とする。
- ファイルは読まない。素材の読み込み（`file` の Source、ペイントのラスタ）は呼び出し側が行い、`sources` に入れて渡す。

### `StickerSource`

2D の素材を読み込んだもの。`rgba` はストレートアルファの (h, w, 4)、0〜1。`crop` は Sticker の `crop`。`derive_vfov` は `port` の Source で真にし、`vFOV_deg` を `hFOV_deg` と素材のアスペクト比から求め直す（`docs/scene-state-v2.md`）。Source のない Sticker は描かない。

### `Projection`

| 形 | 意味 |
|---|---|
| `Projection.erp(width, height, coverage)` | ERP。`coverage` は 360 または 180。180 は Camera の前方の半球 |
| `Projection.perspective(width, height, hfov_deg)` | 透視投影。垂直の FOV は `hfov_deg` と出力のアスペクト比から決まる |

## 重なり順と合成

`composite_frame(bg_color, bg, sky, world=(), bg_valid=None)` が合成の規則を持つ。奥から順に次のとおり重ねる。

1. `bg_color`
2. `bg_media`。不透明として扱い、`bg_color` を置き換える。ないフレームと、`bg_valid`（`bg_media` が画像を持つ画素）の外の画素は `bg_color` のまま。
3. Sky。`sky` の Sticker、ペイントのグループ、ラスタを `z_index` の順に重ね、どのグループにも属さないストロークを一番上に重ねた一枚の層（`docs/scene-state-v2.md` の「Sky の重なり順」）。
4. World の層を奥から手前へ。各層は色 (H, W, 4) と奥行き (H, W) を持ち、画素ごとに奥行きで並べ替える。同じ奥行きではリスト順を保つ（後ろのものが手前）。

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
- `bg_media` は `coverage` の範囲の ERP とみなし、Sky と同じく Camera の向きで写す。360 では 360 の ERP、180 では旧ノード・Cutout と同じく Scene の前方（経度 −90°〜90°）の半球の ERP とする。180 の出力で、Camera を回して `bg_media` の半球の外が見える画素は、`bg_media` がない画素として `bg_color` になる。Sky と MASK はその上にも描く。出力の範囲が Camera の前方の半球だけであることは変わらない。

## まだ描かないもの

統合ブランチ内の暫定として、次は `NotImplementedError` にする。

| 内容 | 解消する ticket |
|---|---|
| 透視投影の描画 | #64 |
| `world` の Sticker | #59 |
| `sticker` の IMAGE バッチ（2 枚以上）。出力フレームとの 1 対 1 の対応 | #56 |
| Camera の Keyframe が 2 つ以上ある `sticker_state`（v2）。軌道ごとの Pose handoff | #65 |

## Stickers ノード（`PanoramaStickersNode`）

`execute` は次の三つの入口に分かれる。後続の ticket は、それぞれ一つだけを変更する。

| 入口 | 関数 | 役割 | 変更する ticket |
|---|---|---|---|
| (a) | `_decide_timeline` | Timeline fps と、出力フレームごとの評価する Timeline frame・描く `bg_media` のフレーム | #53 |
| (b) | `_render_timeline` | フレームごとに状態を評価し、`render_frame` を呼ぶ | #55、#56 |
| (c) | `_assemble_outputs` | 出力（IMAGE・MASK・AUDIO・fps・`PANO_SCENE`）を組み立てる | #53、#57 |

- 現時点の Timeline は、長さを「状態の `timeline.length` → 背景の IMAGE バッチ（2 枚以上）の枚数 → 1」の順で決める。背景のバッチより長い出力では、背景が終わった後は `bg_color` になる。
- AUDIO は `None`（音声なし）、`PANO_SCENE` は `None`（#57 で作る）を返す。
- `bg_media` の VIDEO、`scene` の入力、`sticker` の VIDEO・MESH・SPLAT・3D ファイルは、未対応であることを示すエラーにする。
- (b) は、`render_frame` が直前と同じテンソルを返したフレームを、device から再び転送せず、出力の直前の行から写す。
- `is_output_node` は `False` で、ノード上の UI と実行結果の `ui`（プレビュー画像、動画、警告の表示）は持たない。これらは、エディタとの結び付け（#70）と、実行前後の素材の表示（#75）が決めて加える。それまで警告はログにだけ出す。
- `file` の Source は `core/stickers.py` の `load_source_rgba` で読み、`folder_paths` のディレクトリの中にあるものだけを読む。読めないときは、その Sticker を描かずに警告をログに出す。
