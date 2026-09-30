# 状態 v2 と評価関数の契約

Stickers・Cutout の `state_json`（状態 v2）、Cutout が出力する `sticker_state` v2、および「状態と時刻 → その時刻の値」を返す評価関数の契約を定める。後続の ticket はこの文書とフィクスチャだけを前提にする。用語は `CONTEXT.md`、座標は ADR 0023、時間は ADR 0024、Scene の正は ADR 0025 に従う。

| 役割 | Python | JS |
|---|---|---|
| 状態の読み込み（v1 の読み替えと正規化） | `comfyui_pano_suite/core/scene_state.py` の `load_scene_state` | `web_src/pano_scene_state.js` の `loadSceneState` |
| `sticker_state` の読み込み | `load_sticker_state` | `loadStickerState` |
| 評価関数 | `comfyui_pano_suite/core/scene_eval.py` の `evaluate_scene_state` | `web_src/pano_scene_eval.js` の `evaluateSceneState` |
| fps の再基準化 | `scene_state.py` の `rebase_scene_state` | `rebaseSceneState` |

フィクスチャは `tests/fixtures/scene_state/` にあり、`tests/test_scene_state.py`・`tests/test_scene_eval.py`（Python）、`tests/pano_scene_state.test.mjs`（JS）、`tests/test_scene_state_parity.py`（Python と JS の一致、許容差 1e-4）で固定する。

## 共通の規則

- 数値は JSON の数値だけを受け付ける。文字列・真偽値・`null`・非有限値は不正とする。
- 整数のフィールド（`frame`、Clip range、`length`、Sticker の `z_index`）は、数値を `floor(x + 0.5)` で整数に丸めて保存する。fps の再基準化（#54）で Timeline frame を整数に丸めるときも、同じ `floor(x + 0.5)` を使う。
- JSON の `NaN`・`Infinity`・`-Infinity` のリテラルは受け付けない（JS の `JSON.parse` と同じく、JSON として読めないものとして扱う）。
- 不正な値は、そのフィールドの既定値に戻す。範囲外の値は範囲の端に寄せる。状態全体を捨てることはしない。
- 正規化は冪等である。`load_scene_state` の結果をもう一度読むと同じ結果になる。
- 未知のフィールドは読み込み時に捨てる。状態 v2 には、どのコードも読まない予約項目を置かない。Clip range 外の保持やループなどは、実装するときに項目を追加する。
- 出力のキーの順序は、この文書の表の順とする（Python と JS で同じ）。

### 座標と角度

| 種類 | 規約 | 該当するフィールド |
|---|---|---|
| 位置（`position`、`handles.in` / `handles.out`） | World の glTF 座標（右手系、Y 上、前方 `-Z`）。単位は入力素材のまま | `camera`・`scene`・`world` の Sticker の `transform` |
| 回転（`yaw_deg`・`pitch_deg`・`roll_deg`） | 既存のパノラマの角度規約（`core/math.py` の `camera_basis` と同じ。正の yaw は右、正の pitch は上、正の roll は画像を時計回りに回す）。単位は度 | すべての `transform` |
| FOV・角度サイズ（`hFOV_deg`・`vFOV_deg`） | 度。`hFOV_deg` は水平方向の全画角 | `camera`、`sky` の Sticker |
| `scale` | 素材の単位に対する倍率（一様） | `scene`・`world` の Sticker |

角度規約と World の間の変換（Z の反転）は #50 のモジュールだけが行う。この契約のコードは変換をしない。回転 0 の `world` の板は、回転 0 の Camera の正面に置くと Camera の方を向く。

### 時間

- 状態に保存する時刻はすべて整数の Timeline frame とする。秒は Timeline frame ÷ `timeline.fps` で求める（ADR 0024）。
- 評価関数は端数を含む Timeline frame を受け取る。背景 VIDEO のフレームの元の時刻 `t` 秒で評価するときは、`t × timeline.fps` を渡す。実行時の fps が `timeline.fps` と違っても、ノードは記録された `timeline.fps` で解釈して秒を保つ。
- Camera の Keyframe は Timeline 基準とする。`scene` と Sticker の Keyframe は、素材の先頭が Timeline 上に来る位置（`start − in`）を基準とする。

## `state_json` v2

```json
{
  "version": 2,
  "timeline": {"fps": 24.0, "length": null},
  "camera": {"aspect": 1.0, "transform": {"value": {...}, "keyframes": []}},
  "scene": {"clip": {...}, "transform": {"value": {...}, "keyframes": []}},
  "stickers": [],
  "painting": {...},
  "painting_layer": null
}
```

完全な例は `tests/fixtures/scene_state/v2_canonical.json` にある。

| フィールド | 型 | 既定値 | 正規化 |
|---|---|---|---|
| `version` | `2` | — | 下記「版の判定」 |
| `timeline.fps` | 数値 | `24.0` | 0 以下は既定値。記録された Timeline fps |
| `timeline.length` | 整数 または `null` | `null` | エディタでの長さの上書き。1 未満は `null`。`null` なら入力から決める（#53） |
| `camera.aspect` | 数値 | `1.0` | 0 以下は既定値。Camera の画面の幅 ÷ 高さ。ERP の Projection では使わない |
| `camera.transform` | Keyframe group | 下記 | Camera の値（Viewport camera は保存しない） |
| `scene.clip` | Clip range | 下記 | `scene` 入力が有効な範囲 |
| `scene.transform` | Keyframe group | 下記 | `scene` 入力に掛ける変形 |
| `stickers` | 配列 | `[]` | `sky` の層は `z_index`（ペイントと共通の軸）で並べ、同じ値ならリストの順（先頭が奥）。`world` の Sticker は奥行きで重なる |
| `painting` | オブジェクト | 空のペイント | 既存の `normalize_painting_state` / `normalizePaintingState` で正規化する。`sky` の静的な層 |
| `painting_layer` | オブジェクト または `null` | `null` | ペイントのラスタ画像の参照。中身はそのまま保つ |

`scene` は、`scene` 入力が接続されていなくても常に存在する。

### Keyframe group

Keyframe をまとめて打つ単位である。どのグループも同じ形を持つ。

```json
{"value": <値>, "keyframes": [<Keyframe>, ...]}
```

- `keyframes` が空のとき、グループの値は静的な `value` である。
- `keyframes` があるとき、評価には `keyframes` だけを使う。`value` は、Keyframe をすべて削除したときに戻る静的な値として保つ。

| 持ち主 | グループ名 | 値の形 |
|---|---|---|
| `camera` | `transform` | Camera の値 |
| `scene` | `transform` | World の変形 |
| `sky` の Sticker | `transform` | Sky の変形 |
| `sky` の Sticker | `opacity` | 数値 |
| `world` の Sticker | `transform` | World の変形 |
| `world` の Sticker | `opacity` | 数値 |

値の形と既定値は次のとおり。欠けたフィールドや不正なフィールドは、グループの `value` ではなく、このフィールドの既定値になる。

| 値の形 | フィールド（既定値、範囲） |
|---|---|
| Camera の値 | `position`（`[0, 0, 0]`）、`yaw_deg`（`0`）、`pitch_deg`（`0`、−90〜90）、`roll_deg`（`0`）、`hFOV_deg`（`90`、0.1〜179） |
| World の変形 | `position`（`[0, 0, 0]`）、`yaw_deg`（`0`）、`pitch_deg`（`0`、−90〜90）、`roll_deg`（`0`）、`scale`（`1`、0 以下は既定値） |
| Sky の変形 | `yaw_deg`（`0`）、`pitch_deg`（`0`、−90〜90）、`roll_deg`（`0`）、`hFOV_deg`（`20`、0.1〜179）、`vFOV_deg`（`20`、0.1〜179） |
| `opacity` | 数値（`1`、0〜1） |

- `position` は 3 つの有限の数値の配列で、一つでも不正なら全体が既定値になる。
- `yaw_deg`・`roll_deg` は範囲に丸めない。360° の差は同じ向きを表す。
- Sky の変形は、Sticker の中心の方向（yaw / pitch）、画面内の回転（roll）、角度サイズ（`hFOV_deg`・`vFOV_deg`）である。
- Source が `port` の Sticker の `vFOV_deg` は、ノードとエディタの両方が、`hFOV_deg` と素材のアスペクト比から求め直す（旧ノードと同じ）。ポートの素材は状態の外で差し替わるためである。保存された `vFOV_deg` は、素材が届く前の表示に使う。

### Keyframe

```json
{"frame": 24, "value": <値>, "easing": "auto", "handles": {"in": [x, y, z], "out": [x, y, z]}}
```

| フィールド | 型 | 正規化 |
|---|---|---|
| `frame` | 整数 | 基準は「時間」の節のとおり。負の値も許す。数値でなければその Keyframe を捨てる |
| `value` | グループの値の形 | グループと同じ規則 |
| `easing` | `"auto"`、`"hold"`、または `[x1, y1, x2, y2]` | この Keyframe から次の Keyframe までの区間の Easing。既定値は `"auto"`。最後の Keyframe の `easing` は使われない |
| `handles` | オブジェクト（任意） | 位置を持つグループ（`camera`・`scene`・`world` の Sticker の `transform`）だけが持つ。それ以外では捨てる |

- `keyframes` は `frame` の昇順に並べる。同じ `frame` が複数あるときは、入力で後にあるものを残す。
- cubic-bezier は CSS の `cubic-bezier(x1, y1, x2, y2)` と同じで、単位正方形の (0, 0) から (1, 1) への曲線の制御点である。横軸は区間内の時間、縦軸は進み具合。`x1`・`x2` は 0〜1 でなければならず、外れたもの・数値が 4 つでないものは `"auto"` になる。`y1`・`y2` は範囲を制限しない。
- `"hold"` は、次の Keyframe の `frame` まで値を保ち、その時刻で次の値へ瞬時に切り替える。Camera ではこれが Cut になる。
- `"auto"` は Keyframe で止まらずに通過する補間とする。`auto` の滑らかさは `hold` をまたがない。
- Motion path のハンドル `handles.in` / `handles.out` は、その Keyframe の `position` からの相対的なずれで、World の glTF 座標で表す。`in` は前の Keyframe から来る軌道、`out` は次の Keyframe へ向かう軌道の接線を決める。どちらも任意で、ないほうは自動で滑らかにする。不正なハンドルは捨て、両方ないときは `handles` 自体を置かない。
- `auto`・cubic-bezier・ハンドルの計算は「補間」の節で定める。

### Clip range

```json
{"start": 10, "in": 5, "duration": 40}
```

| フィールド | 型 | 既定値 | 意味 |
|---|---|---|---|
| `start` | 整数 ≥ 0 | `0` | Timeline 上で有効になる最初の Timeline frame |
| `in` | 整数 ≥ 0 | `0` | 素材の中の開始点（素材の先頭からの Timeline frame） |
| `duration` | 整数 ≥ 1 または `null` | `null` | 有効な長さ。`null` は Timeline の終わりまで |

有効な範囲は `start ≤ frame < start + duration` とする。端点との比較には評価関数と同じ許容差 `FRAME_EPSILON`（`1e-6`）を使う。`start − 1e-7` は範囲内、`start + duration − 1e-7` は範囲外（終端は含まない）とする。負の値は 0、1 未満の `duration` は 1 に寄せる。

### Sticker

```json
{
  "id": "st_1",
  "placement": "sky",
  "source": {"kind": "file", "filename": "a.png", "subfolder": "panorama_stickers", "storage": "input"},
  "clip": {"start": 0, "in": 0, "duration": null},
  "visible": true,
  "locked": false,
  "crop": {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0},
  "transform": {"value": {...}, "keyframes": []},
  "opacity": {"value": 1.0, "keyframes": []},
  "z_index": 0
}
```

| フィールド | 型 | 既定値 | 意味と正規化 |
|---|---|---|---|
| `id` | 文字列 | `sticker_<n>` | 空・重複・文字列でないときは、使われていない最小の `n` で `sticker_<n>` を振る（後に出てきたほうを振り直す） |
| `placement` | `"sky"` または `"world"` | `"sky"` | 途中で変わらない。`transform` の値の形を決める |
| `source` | Source | — | 不正なときは Sticker ごと捨てる |
| `clip` | Clip range | 上記 | |
| `visible` | 真偽値 | `true` | `false` なら描画しない（エディタの表示切り替え） |
| `locked` | 真偽値 | `false` | エディタでの操作を禁じる |
| `crop` | `x0`・`y0`・`x1`・`y1`（0〜1） | 全体 | 2D の素材の切り抜き。素材の正規化座標（左上が原点）。0〜1 に寄せた後、`x0 ≤ x1`・`y0 ≤ y1` になるよう並べ替える（旧描画の min / max による正規化と同じ） |
| `transform` | Keyframe group | 上記 | `placement` に応じて Sky の変形か World の変形 |
| `opacity` | Keyframe group | `1` | 不透明度 |
| `z_index` | 整数 | `0` | `sky` の Sticker だけが持つ（`world` では捨てる）。読み込みで `floor(x + 0.5)` に丸める。数値でない・非有限の値は既定値。下記「Sky の重なり順」 |

#### Sky の重なり順

`sky` の Sticker と、ペイントのストロークのグループ（`painting.groups[].z_index`）・ラスタ（`painting.raster_objects[].z_index`）は、同じ `z_index` の軸で奥から手前へ重ねる。旧ノードの display list（`core/display_list.py` の `build_display_entries`）と同じ規則とする。

- 同じ値のときは、Sticker、グループ、ラスタの順。それぞれの中ではリストの順。
- どのグループにも属さないストロークは、最後に一番手前に重ねる。

`world` の Sticker は奥行きで重なるので `z_index` を持たない。

`world` の 2D の素材（IMAGE / VIDEO）の板の大きさ、3D の素材の置き方は #59・#63 で定める。

`locked` と `crop` を残す根拠：

- `crop` は、旧 `state_json` の描画と旧ノードの基準画像を再現するのに必要で、描画関数（#52）が読む。3D の素材では使わない。
- `locked` は、ADR 0025 の「上流の要素をロックする場合も、同じ Sticker のリストの中に印を付けるだけにする」に対応する印で、エディタ（#66）が読む。

#### `port` の Sticker が状態にないとき

`sticker` 入力が接続されているのに、状態に `source.kind == "port"` の Sticker がない場合、ノードとエディタは、その素材を次の Sticker としてリストの末尾（最も手前）に加えて扱う。旧ノードの挙動（`nodes.py` の `_build_runtime_external_sticker` を呼ぶ、既存の外部 Sticker が見つからないときの経路）と同じである。

- `placement: "sky"`、Clip range・`opacity` などは既定値。
- `z_index` は、状態の `sky` の Sticker の最大値 + 1（Sticker がなければ `0`）。ペイントの `z_index` は数えない（旧ノードと同じ）。
- Sky の変形は既定値で、`hFOV_deg` は `30`、`vFOV_deg` は素材のアスペクト比から求める。
- `sticker_state` があれば、その姿勢（yaw / pitch / roll、`hFOV_deg`）を使う。

読み込み（`load_scene_state`）の側では、この Sticker を自動で生成しない。状態はあくまで保存された内容だけを表す。この扱いの実装は、描画関数と新しい Stickers ノードの ticket（#52）と、Pose handoff の ticket（#65）の責務とする。

### Source

素材の出どころを表す。入力ポートの素材とエディタに投入したファイルは、同じ Sticker の形で扱う。

| 形 | 意味 |
|---|---|
| `{"kind": "port"}` | ノードの `sticker` 入力ポートの素材。ポートは一本なので番号を持たない。状態の中に高々一つで、二つ目以降の `port` の Sticker は捨てる |
| `{"kind": "file", "filename": "...", "subfolder": "...", "storage": "input"}` | ComfyUI のディレクトリにあるファイル。`storage` は `input`・`output`・`temp` のいずれか（既定値 `input`）、`subfolder` の既定値は `""`。投入した画像は `input/panorama_stickers`、3D ファイルは Load3D と同じ場所に保存する。`filename` の前後の空白、`subfolder` の前後の空白と `/`・`\` を除き、`storage` は前後の空白を除いて小文字にする（v1 の読み替えと同じ規則）。`filename` が空なら不正 |
| `{"kind": "file", "data_url": "data:image/..."}` | 旧 v1 の埋め込み画像。v1 の読み替えでだけ生じる。`data:image` で始まらなければ不正。エディタは開いたときに従来どおりアップロードして上の形に置き換える |

`filename`・`subfolder`・`storage` は信頼しない入力である。ファイルを読む側は、既存の `folder_paths` による範囲の確認を必ず通す。この契約のコードはファイルを読まない。

## 評価関数

```python
evaluate_scene_state(state: dict, frame: float) -> dict
```

```js
evaluateSceneState(state, frame) // -> object
```

- `state` は `load_scene_state` / `loadSceneState` の戻り値（正規化済みの v2）とする。
- `frame` は端数を含む Timeline frame（`timeline.fps` 基準）。
- 戻り値は `state` と参照を共有しない新しい値である。Python と JS は同じ入力に対して 1e-4 以内で同じ値を返す。
- Timeline の長さの決定、素材のフレームの選択（PTS ≤ t）、描画は評価関数の役割ではない。

戻り値の形（`tests/fixtures/scene_state/v2_canonical.eval.json`）：

```json
{
  "frame": 12.5,
  "camera": {"position": [0.0, 1.6, 0.0], "yaw_deg": 10.0, "pitch_deg": 5.0, "roll_deg": 0.0, "hFOV_deg": 90.0, "aspect": 1.78},
  "scene": {"active": true, "clip_frame": 12.5, "position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "scale": 2.0},
  "stickers": [
    {"id": "st_sky", "placement": "sky", "active": true, "clip_frame": 7.5, "yaw_deg": 30.0, "pitch_deg": 10.0, "roll_deg": 5.0, "hFOV_deg": 20.0, "vFOV_deg": 15.0, "opacity": 0.0}
  ]
}
```

| フィールド | 意味 |
|---|---|
| `frame` | 受け取った Timeline frame |
| `camera` | Camera の値の各フィールドと `aspect` |
| `scene.active` | `frame` が `scene.clip` の範囲内か |
| `clip_frame` | 素材の先頭からの経過（Timeline frame、端数あり）。`frame − (start − in)`。素材の時刻（秒）は `clip_frame ÷ timeline.fps` |
| `stickers[]` | `state.stickers` と同じ順。`id`・`placement`、`active`（`visible` かつ Clip range の範囲内）、`clip_frame`、`transform` の値の各フィールド、`opacity` |

範囲外（`active` が偽）でも値は評価して返す。描画するかどうかは呼び出し側が `active` で決める。角度の単位は度で、戻り値の角度の範囲は規定しない（360° の差は同じ向き）。

グループの評価の規則：

1. Keyframe がなければ `value`。
2. 最初の Keyframe 以前は最初の値、最後の Keyframe 以後は最後の値。
3. `frame` がちょうど Keyframe の `frame` なら、その Keyframe の値。
4. 区間の途中で、区間の始まりの Keyframe の `easing` が `hold` なら、始まりの値。

1〜3 で Keyframe の `frame` と比べるときは、差が `1e-6` 以内なら同じ frame とみなす（`FRAME_EPSILON`）。秒 × fps の浮動小数点の誤差で、Keyframe の直前の値（例：`23.9999999`）になった出力フレームでも、Cut が 1 フレーム遅れないようにするためである。この許容差は浮動小数点の誤差だけを吸収する。`timeline.fps` は丸めずに記録する（例：29.97 fps の素材は `30000 / 1001`）。コアの VIDEO の fps は分数なので、それを float にした値をそのまま記録する。`29.97` と丸めて記録すると、24 番目のフレームは `23.999976` になり、許容差では吸収できない。
5. それ以外（`auto`・cubic-bezier の区間の途中）は、次の「補間」の節のとおりに補間する。

### 補間

区間 `k`（Keyframe `k` から `k + 1` まで、長さ `dt = frame[k+1] − frame[k]`）の途中の値は、区間内の時間 `u = (frame − frame[k]) ÷ dt` から求める。

- 進み具合 `p`：`auto` の区間では `p = u`。cubic-bezier の区間では、CSS と同じく `x(t) = u` を満たす `t` を求め（`x(t)` は `x1`・`x2` が 0〜1 なので単調。二分法で 50 回）、`p = y(t)` とする。`y1`・`y2` が範囲外なら `p` は 0〜1 を外れる（行き過ぎる）。
- スプラインが通過する Keyframe：Keyframe `i` の前後の区間がどちらも `auto`（`easing[i−1]` と `easing[i]` が `auto`）で、`i` が最初でも最後でもないとき、`auto` のスプラインは `i` を通過し、`i` の速度（1 Timeline frame あたり）を両側の区間で共有する。そのため、`i` の前後で速度が連続する。それ以外の端（最初・最後の Keyframe、`hold` や cubic-bezier の区間との境）では、その区間自身の変化 `v[k+1] − v[k]` を速度 × `dt` として使う。したがって、cubic-bezier の区間は、ハンドルがなければ端の値の間の直線（回転は slerp）を `p` で進み、Keyframe 二つだけの `auto` は等速になる。
- 通過する Keyframe の速度 `m`：前後の弦の傾き `s0 = (v[i] − v[i−1]) ÷ dt0`、`s1 = (v[i+1] − v[i]) ÷ dt1`（`dt0`・`dt1` は前後の区間の長さ）から、次のように決める（Fritsch–Carlson 型の制限）。
  1. 前後の変化が逆向きなら `m = 0` とする。
     - スカラー：`s0 × s1 ≤ 0`（符号が違う、またはどちらかが 0）。
     - ベクトル（位置と回転）：内積 `s0 · s1 < 0`（真に後ろへ折り返すときだけ）。向きの変化が 90° 以下なら止まらずに通過する。どちらかの弦が 0 のときは、2 の上限が 0 になるので `m = 0` になる。
     - 実装は、スカラーを 1 次元のベクトルとして同じ式（`< 0` と 2 の上限）で扱う。符号が同じで片方が 0 のときも上限が 0 になるので、結果はスカラーの規則と一致する。
  2. それ以外は、前後の Keyframe を通る放物線の傾き `m = (s0 × dt1 + s1 × dt0) ÷ (dt0 + dt1)` とし、`|m|` が `3 × min(|s0|, |s1|)` を超えるときは、向きを保ってその長さに縮める。
  - 素早く動いて止まる（間隔の比が大きい）場合も、値が前後の Keyframe を越えて行き過ぎない。
- スカラー（`hFOV_deg`・`vFOV_deg`・`scale`・`opacity`）と位置：3 次ベジェ `B(v[k], v[k] + m0 × dt ÷ 3, v[k+1] − m1 × dt ÷ 3, v[k+1]; p)`。`m0`・`m1` は区間の始まりと終わりの速度。位置は 3 成分を一つのベクトルとして扱い、上の内積と長さもベクトルで計算する（World の軸の向きに依存しない）。
- 位置のハンドル：Keyframe `k` の `handles.out` があれば 2 番目の制御点を `position[k] + handles.out` に、Keyframe `k+1` の `handles.in` があれば 3 番目の制御点を `position[k+1] + handles.in` に置き換える。ないほうは自動の接線のままとする。ハンドルは自動の接線より優先し、速度の連続は保証しない。
- 回転：yaw / pitch / roll を #50 の `world_rotation` / `worldRotation`（float64）と `rotation_to_quaternion` / `rotationToQuaternion` で四元数にする。区間の計算に使うのは Keyframe `k−1`〜`k+2` だけで、`q[k+1]` は `q[k]` に、`q[k−1]` は `q[k]` に、`q[k+2]` は `q[k+1]` に対して、次の規則で符号を揃える（前の Keyframe → 後の Keyframe の向きで判断する）。
  - 内積が `1e-6` より大きければそのまま、`−1e-6` より小さければ符号を反転する（最短の向き）。
  - 内積の絶対値が `1e-6` 以下（ちょうど 180°）なら、前の Keyframe の glTF のローカル座標での回転ベクトル `log(q_前⁻¹ q_後)` を見て、`−y`・`x`・`z` の順に最初に絶対値が `1e-6` を超える成分が正になる符号を選ぶ。右へ、次に上へ、次に時計回り（画像が時計回りに回る roll の向き）に回ることになる。
- 回転の補間：`log(a⁻¹b)` を「a から b への回転ベクトル（半角）」、`L = log(q[k]⁻¹ q[k+1])` とする。始まりと終わりの速度（`p` あたり）`V0`・`V1` は、通過する Keyframe では上の速度の規則を回転ベクトルに当てはめたもの（`s0 = −log(q[i]⁻¹ q[i−1]) ÷ dt0`、`s1 = log(q[i]⁻¹ q[i+1]) ÷ dt1`。内積が負なら 0、長さは `3 × min(|s0|, |s1|)` まで）に `dt` を掛けたもの、通過しない端では `L` とする。SQUAD `slerp(slerp(q[k], q[k+1], p), slerp(a, b, p), 2p(1 − p))` を評価する。制御点は `a = q[k] · exp((V0 − L) ÷ 2)`、`b = q[k+1] · exp((L − V1) ÷ 2)`。通過しない端では `a = q[k]`・`b = q[k+1]` となり、cubic-bezier の区間は `slerp(q[k], q[k+1], p)` になる。`slerp(x, y, t) = x · exp(t · log(x⁻¹ y))` で、`a`・`b` と外側の slerp の符号は揃え直さない（揃え直すと区間の途中で向きが飛び、端の速度も変わる）。結果は `quaternion_to_rotation` と `panorama_angles` で yaw / pitch / roll に戻す（`pitch_deg` は −90〜90）。
- 1 区間の回転は、必ず 180° 以下の最短の経路になる。180° を超える回転や多回転（yaw 0 → 720 など）は、途中に Keyframe を打つ。
- 回転の数値：yaw と roll は、区間の両端に保存された値を `p` で混ぜた `c = a + (b − a) × p` に対して、`c − 180 − 1e-6 ≤ 値 < c + 180 − 1e-6` となるよう 360° の倍数だけずらして返す（ちょうど 180° 離れた同点は負の側、`c − 180` を取る）。区間の両端で保存された値の数値に一致する。最短の向きが保存された数値の向きと逆のとき（例：yaw 0 → 350）は、区間の途中で yaw・roll の値が 360° 跳ぶ。これは数値の表し方だけで、向きは連続している。使う側は回転行列を使うか、値を 360° で回して扱う。
- 極（pitch ±90 をちょうど通るとき）では、yaw と roll が同じ軸を共有するため、yaw の値は保証しない（その分は roll が受け持つ）。極の近くでも yaw・roll の数値は大きく動きうる。向きの連続は回転行列で判断する。
- 行き過ぎの扱い：補間の結果が範囲を外れた `hFOV_deg`・`vFOV_deg` は 0.1〜179 に、`opacity` は 0〜1 に、`scale` は `1e-6` 以上に寄せる。

## fps の再基準化

```python
rebase_scene_state(state: dict, fps: float) -> dict
```

```js
rebaseSceneState(state, fps) // -> object
```

`load_scene_state` の戻り値の、保存されたすべての時刻を `fps ÷ timeline.fps` 倍し、`timeline.fps` を `fps` にした正規化済みの状態を返す。Timeline 上の時刻で丸める。`r(x) = floor(x × fps ÷ timeline.fps + 0.5)` とすると、次のとおり。

| 値 | 新しい値 |
|---|---|
| Camera の Keyframe の `frame` | `r(frame)` |
| Clip range の `start` | `start' = r(start)` |
| 素材の先頭の位置 | `anchor' = r(start − in)` |
| Clip range の `in` | `start' − anchor'` |
| Clip range の `duration`（`null` 以外） | `r(start + duration) − start'` |
| `scene`・Sticker の Keyframe の `frame` | `r(start − in + frame) − anchor'` |
| `timeline.length`（`null` 以外） | `max(1, r(length))` |

- Timeline 上のすべての出来事（Keyframe、Clip range の始まりと終わり、素材の先頭）は、新しい fps の半フレーム以内に丸まる。同じ時刻にあった Camera と Sticker の Keyframe は、同じ frame に落ちる。
- 丸めた結果、同じ Keyframe group で `frame` が重なった Keyframe は、正規化の規則どおり後ろのものを残す。`duration` は正規化で 1 以上になる。
- ハンドルは空間のずれなので変えない。
- `fps` が正の有限の数値でなければエラーにする（Python は `ValueError`、JS は `Error`）。文面は `Cannot rebase state_json to fps <値>; fps must be a positive number.` で、`<値>` の書き方は実装ごとに違う（Python は `repr`、JS は `JSON.stringify`）。

## 版の判定

`load_scene_state(raw)` / `loadSceneState(raw)` は、`state_json` の文字列か、解析済みのオブジェクトを受け取る。

| 入力 | 結果 |
|---|---|
| `None` / `null`、空文字列、空白だけ | 既定値の v2 |
| JSON として読めない、またはオブジェクトでない | エラー `state_json is not a JSON object.` |
| `version` がない、または `1` | v1 として読み替える |
| `version` が `2` | v2 として正規化する |
| それ以外の `version`（`3`、`"2"`、`true` など） | エラー `Unsupported state_json version <値>; supported versions are 1 and 2.` |

Python は `ValueError`、JS は `Error` を投げる。

## v1 から v2 への読み替え

フィクスチャ：`v1_stickers.json` → `v1_stickers.v2.json`、`v1_cutout.json` → `v1_cutout.v2.json`。

| v1 | v2 |
|---|---|
| `stickers[]` | `z_index` の昇順（同じ値は元の順）に並べた `stickers[]`。すべて `placement: "sky"`、Clip range は既定値、`opacity` は `1` |
| Sticker の `z_index` | 同名のフィールド（ペイントとの重なり順を保つ） |
| Sticker の `yaw_deg`・`pitch_deg`・`hFOV_deg`・`vFOV_deg` | `transform.value` の同名のフィールド |
| Sticker の `rot_deg` | `transform.value.roll_deg` |
| Sticker の `visible`・`locked`・`crop`・`id` | 同名のフィールド |
| `source_kind: "external_image"` の Sticker（`sticker_image_1`） | `source: {"kind": "port"}` |
| `assets[asset_id]` が `type: "comfy_image"` | `source: {"kind": "file", filename, subfolder, storage}` |
| `assets[asset_id]` が `type: "dataurl"` | `source: {"kind": "file", "data_url": ...}` |
| `assets[asset_id]` が `type: "path"`、または資産が見つからない | Sticker を捨てる |
| `shots[0]`（Cutout） | `camera`。`yaw_deg`・`pitch_deg`・`roll_deg`、`hFOV_deg`（1〜179 に寄せる）、`aspect = tan(hFOV/2) ÷ tan(vFOV/2)`（`vFOV_deg` の既定値 60、1〜179 に寄せる）。旧 Cutout の出力と同じ画面比になる。Stickers の v1 の状態は通常 `shots` を持たない（持っていれば Camera に写る） |
| `shots` がない、または空 | 既定値の `camera`。v1 の Cutout はこのとき ERP をそのまま出力していたが、その挙動は保たない（意図した挙動変更。素通しは Preview の出力で行う） |
| `painting`・`painting_layer` | 同名のフィールド |
| `version`・`projection_model`・`alpha_mode` | 捨てる |
| `coverage`・`bg_color`・`output_preset` | 捨てる。ノードの入力（ウィジェット）が持つ |
| `ui_settings`・`active`・`editor_history` | 捨てる。エディタのセッションの状態であり、Scene ではない（`ui_settings` はブラウザ側にも保存されている）。エディタの選択状態（旧 `active`）は状態に置かない |
| `cutout_render_layer`、`source_state_hash`・`slot_key`・`source_kind`・`asset_id`、`assets` の `name`・`w`・`h` | 捨てる |
| `timeline` | 既定値（`fps: 24`、`length: null`）。v1 の `fps` 入力は状態にない |

Sticker の位置と見た目は変わらない。`yaw_deg` は範囲に丸めない（v1 の描画も丸めない）。

## `sticker_state` v2

Cutout が出力し、Stickers の `sticker_state` 入力が受け取る。

```json
{
  "kind": "pano_sticker_state",
  "version": 2,
  "fps": 30.0,
  "camera": [{"frame": 0, "value": {"position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "hFOV_deg": 60.0}, "easing": "auto"}],
  "source_aspect": 1.5
}
```

| フィールド | 型 | 既定値 | 意味 |
|---|---|---|---|
| `kind` | `"pano_sticker_state"` | — | |
| `version` | `2` | — | |
| `fps` | 数値 | `24.0` | `camera` の `frame` の基準となる Timeline fps |
| `camera` | Keyframe の配列 | Keyframe 一つ | 形は `state_json` の `camera.transform.keyframes` と同じ。Camera に Keyframe がないときは、撮影した値を持つ Keyframe を一つだけ置く。空または不正なときは既定値の Camera の値を持つ `frame: 0` の Keyframe 一つになる |
| `source_aspect` | 数値 または `null` | `null` | 撮影した画面の幅 ÷ 高さ |

`load_sticker_state(text)` / `loadStickerState(text)` は v1 と v2 を読み、どちらも v2 の形で返す（フィクスチャ：`sticker_state_v1.json`、`sticker_state_v2.json`）。

- v1（`pose` を一つ持つ形）は、従来の `parse_sticker_state` と同じ規則（yaw を −180〜180 に回す、pitch を ±89.9、`hFOV_deg` を 0.1〜179 に寄せる、`"30"` のような数値の文字列を許す）で読み、`frame: 0`・`position: [0, 0, 0]`・`easing: "auto"` の Keyframe 一つにする。`fps` は `24`。
- 空、JSON でない、`kind` が違う、v1 の `pose` が読めない場合は `None` / `null` を返す（従来どおり無視される）。
- `kind` が一致して `version` が `1`・`2` 以外なら、エラー `Unsupported sticker_state version <値>; supported versions are 1 and 2.` にする。

## 後続の ticket への申し送り

- #54：評価関数の規則 5 を補間に置き換えた。Timeline fps の再基準化も加えた（「補間」「fps の再基準化」の節）。
- #78（置き換え）：v1 の Cutout の「`shots` が空なら ERP をそのまま出力する」挙動は保たない（ユーザー判断で確定）。README の移行の注意に書く。
- #65（Pose handoff）：v1 は `source_state_hash` で「`sticker_state` が変わったときだけ姿勢を上書きする」を判定していた。v2 では捨てているので、同じ挙動が要るなら #65 で項目を追加する。
- #66（エディタ）：ノード上の UI は今、旧 `active` の選択状態を読んでいる。v2 では状態に置かないので、置き場所（エディタのセッションやブラウザ側など）を #66 で決める。
- #66 の結果：エディタの作業状態は v1 の形のままで、状態 v2 は `editorSceneState`（`pano_editor_state.js`）で導き、描画に使うだけとした。ウィジェットへの v2 の書き込みと、v2 の `state_json` の読み込みは #70 で行う。旧ノード・ノード上の UI・外部 Sticker の同期が `state_json` を v1 として読み、v1 → v2 → v1 の往復では `path` 資産・`source_state_hash`・`active` が落ちるためである。`active` の置き場所も #70 で決める。
- #70 の結果：`PanoramaStickersNode` では、エディタとノード上の UI は `state_json` を v2 で読み書きする（旧ノードは v1 のまま）。作業状態は v1 の形のままで、読み込み時に `sky` の Sticker を v1 の Sticker に写し、v1 で持てない項目（`timeline`・`camera`・`scene`、`world` の Sticker、Clip range・Keyframe・`opacity`）は作業状態の `scene_state` に載せて、保存時に `editorSceneState`（`pano_editor_state.js`）で戻す。v2 → 作業状態 → v2 の往復は失われない。エディタの選択状態（旧 `active`）はノードのプロパティ `pano_editor_active` に置く（プロンプトに入らないので、選択しても再実行されない）。新しいノードの `state_json` が v1 のとき（旧ノードの状態を貼った場合など）は、保存時に「v1 から v2 への読み替え」の規則で v2 になり、`path` 資産・`source_state_hash`・`initial_pose` などが落ちる。
- #73 へ（#70 の暫定の扱い）：#70 の作業状態（v1 の形と `scene_state` の組み合わせ）は、#73 までの暫定の境界の変換である。#73 では `scene_state` を育てずに、エディタの作業状態を v2 そのもの（`loadSceneState` の結果）に切り替え、v1 の形は旧ノードとの境界だけに残す。それまでの間、`transform` か `opacity` に Keyframe を持つ `sky` の Sticker は、エディタとノード上の UI でロック中として扱い（選べるが変形できず、ロックも外せない）、このロックは状態に保存しない（`stickerHasKeyframes`）。複製した Sticker は v2 だけの項目（Clip range・Keyframe・`opacity`）を引き継がない。これも #73 で扱う。
- #75 へ（#70 で見送ったもの）：新しいノードは `is_output_node` も実行結果の `ui` も持たない。ComfyUI は `ui` を出力ノードでなくても `executed` で送るので、エディタが実行結果を受け取るのに `is_output_node` は要らない（要るのは、出力を繋がずに単独で実行させたい場合だけ）。エディタとノード上の UI が読む `ui` のキーは旧ノードと同じ `pano_input_images`（背景）、`pano_input_videos` / `pano_input_video_meta`（背景の VIDEO）、`pano_videos` / `pano_video_meta`（出力）、`pano_sticker_input_images`（`port` の素材）、`pano_sticker_warnings`（警告）。フロントエンドは入力名を `bg_erp`・`erp_image`・`sticker_image` で探すので、`bg_media`・`sticker` はまだ認識しない。そのため今は、新しいノードのエディタに背景と `port` の素材は出ない。外部 Sticker の同期（`port` の Sticker を id `sticker_image_1` で状態に足す・消す処理）は新しいノードでは止めてある（`TODO(#75)` の 2 か所）。
- 旧 `path` 型の資産（初期の版だけが書いた、作業ディレクトリからの相対パス）は読み替えで捨てる（ユーザー判断で確定）。#78 で README の移行の注意に書く。
