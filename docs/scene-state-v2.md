# 状態 v2 と評価関数

Panorama Studio の `state_json`（状態 v2）、Camera を持つ Panorama Studio が出力する `sticker_state` v2、
「状態と時刻 → その時刻の値」を返す評価関数、fps の再基準化、上流の上書きの記録と当て方を定める。
用語は `CONTEXT.md` に従う。決めた理由は ADR 0023（座標）、0024（時間）、0025（Scene の正）、0026（Keyframe の Lane）、
0029（Panorama Studio）、0030（上流の上書き）、0032（v1 の読み替えで保たないもの）、0033（Timeline の上限）にある。

この文書が持たない規則：`port` の Sticker の扱いと Pose handoff（`docs/studio-node.md` の「`port` の Sticker と Pose handoff」）、
エディタでの表示と記録（`docs/timeline-ui.md`、`docs/threejs-spark-integration.md`、`docs/editor-interaction.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 状態の読み込み（版の判定、v1 の読み替え、正規化） | `core/scene_state.py` `load_scene_state` | `web_src/pano_scene_state.js` `loadSceneState` | `tests/test_scene_state.py`、`tests/pano_scene_state.test.mjs`、`tests/test_scene_state_parity.py` |
| パノラマの角度規約（yaw・pitch・roll と ERP の対応） | `core/math.py` `camera_basis`・`ray_directions`・`lon_lat_to_erp` | `web_src/pano_camera_math.js` | `tests/test_camera_orientation.py`、`tests/pano_camera_math.test.mjs` |
| Timeline の上限の定数 | `scene_state.py` の `TIMELINE_FPS_MIN`・`TIMELINE_FPS_MAX`・`TIMELINE_LENGTH_MAX`・`TIMELINE_FRAME_MAX` | `pano_scene_state.js` の同名の定数 | フィクスチャ `v2_timeline_limits` |
| `sticker_state` の読み込み | `scene_state.py` `load_sticker_state` | `pano_scene_state.js` `loadStickerState` | `test_scene_state.py`、`pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| 評価関数と補間 | `core/scene_eval.py` `evaluate_scene_state` | `web_src/pano_scene_eval.js` `evaluateSceneState` | `tests/test_scene_eval.py`、`test_scene_state_parity.py` |
| fps の再基準化 | `scene_state.py` `rebase_scene_state` | `pano_scene_state.js` `rebaseSceneState` | `test_scene_state.py`、`pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| 上書きの記録の再基準化 | `scene_state.py` `rebase_upstream_record` | `pano_scene_state.js` `rebaseUpstreamRecord` | `tests/test_scene_inherit.py`、`tests/pano_scene_inherit.test.mjs`、`tests/test_upstream_editor_parity.py` |
| 上書きを当てる | `core/scene_inherit.py` `apply_upstream_overrides` | `web_src/pano_scene_inherit.js` `applyUpstreamOverrides` | `test_scene_inherit.py`、`pano_scene_inherit.test.mjs` |
| 保存するテキスト（既定値を書かない） | — | `pano_scene_state.js` `sceneStateText` | `pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| Scene の id を振る | — | `web_src/pano_editor_state.js` `editorStateWrite`・`newSceneId` | `tests/pano_editor_state.test.mjs` |
| Sticker の id の採番 | 正規化は `load_scene_state`、加えるときは `nodes.py` `_take_sticker_id` | 正規化は `loadSceneState`、加えるときは `pano_editor_state.js` `takeStickerId` | `pano_editor_state.test.mjs`、`tests/test_studio_node.py`、フィクスチャ `v2_upstream` |
| `port` の Sticker の vFOV | `core/render.py` の `StickerSource`（`derive_vfov`） | `pano_editor_state.js` `skyStickerVfov` | `tests/test_sky_sticker_vfov_parity.py` |
| Sky の重なり順 | `core/display_list.py` `build_display_entries` | ペイントの並びは `web_src/pano_paint_layers.js` `skyPaintLayers` | `tests/test_display_list_core.py`、`tests/test_paint_layers_parity.py` |
| `file` の Source が 3D ファイルか | `scene_state.py` `is_3d_file_source`・`FILE_3D_EXTENSIONS` | `pano_scene_state.js` `is3dFileSource`・`FILE_3D_EXTENSIONS` | フィクスチャ `file_3d_formats` を専用に読む `test_scene_state_parity.py`・`pano_scene_state.test.mjs` |

フィクスチャは `tests/fixtures/scene_state/`（状態と `sticker_state`）と `tests/fixtures/scene_inherit/`（上書き）にあり、
Python と JS の両方の test が同じファイルを読む。Python と JS の数値の一致の許容差は 1e-4 とする。

## 共通の規則

- 数値は JSON の数値だけを受け付ける。文字列・真偽値・`null`・非有限値は不正とする。
- 整数のフィールド（`frame`、Clip range、`length`、Sticker の `z_index`）は、数値を `floor(x + 0.5)` で整数に丸めて保存する。fps の再基準化で Timeline frame を整数に丸めるときも、同じ `floor(x + 0.5)` を使う。Keyframe の `frame` と Clip range の `start`・`in`・`duration` は、丸めたあと ±10,000,000（`TIMELINE_FRAME_MAX`）の内に寄せる。
- JSON の `NaN`・`Infinity`・`-Infinity` のリテラルは受け付けない（JS の `JSON.parse` と同じく、JSON として読めないものとして扱う）。
- 不正な値は、そのフィールドの既定値に戻す。範囲外の値は範囲の端に寄せる。状態全体を捨てることはしない。
- 正規化は冪等である。`load_scene_state` の結果をもう一度読むと同じ結果になる。
- 未知のフィールドは読み込み時に捨てる。状態 v2 には、どのコードも読まない予約項目を置かない。Clip range 外の保持やループなどは、実装するときに項目を追加する。
- 出力のキーの順序は、この文書の表の順とする（Python と JS で同じ）。

### 座標と角度

| 種類 | 規約 | 該当するフィールド |
|---|---|---|
| 位置（`position`、`handles.in` / `handles.out`） | World の glTF 座標（右手系、Y 上、前方 `-Z`）。単位は入力素材のまま | `camera`・`scene`・`world` の Sticker の `position` の Lane |
| 回転（`yaw_deg`・`pitch_deg`・`roll_deg`） | 既存のパノラマの角度規約（`core/math.py` の `camera_basis` と同じ。正の yaw は右、正の pitch は上、正の roll は画像を時計回りに回す）。単位は度 | `rotation`・`direction`・`roll` の Lane |
| FOV・角度サイズ（`hFOV_deg`・`vFOV_deg`） | 度。`hFOV_deg` は水平方向の全画角 | `camera` の `fov`、`sky` の Sticker の `size` |
| `scale` | 素材の単位に対する倍率（一様） | `scene`・`world` の Sticker の `scale` |

角度規約と World の間の変換（Z の反転）は `core/world.py` と `web_src/pano_world.js` だけが行う。この契約のコードは変換をしない。回転 0 の `world` の板は、回転 0 の Camera の正面に置くと Camera の方を向く。

パノラマの角度規約（`core/math.py` の `camera_basis`・`ray_directions`・`dir_to_lon_lat`・`lon_lat_to_erp`、JS は `web_src/pano_camera_math.js`）：

- 角度の座標は +X が右、+Y が上、+Z が正面（左手系）。World の glTF 座標とは Z が逆で、変換は上の一か所だけで行う。
- yaw（経度）は `atan2(x, z)`。0 が正面、+90 が右、−90 が左、±180 が背面（ERP の左右の端の継ぎ目）。範囲に丸めて表すときは −180 以上 180 未満（`wrap_yaw_deg`）。状態の yaw は丸めない（下の Lane の規則）。
- pitch（緯度）は −90〜90 で、0 が水平線、+90 が天頂。
- ERP の画像は、左から右へ経度 −180〜180（`coverage` 180 では −90〜90）、上から下へ緯度 90〜−90。画素の中心で標本化する。
- Camera の向きは `Ry(yaw) @ Rx(−pitch) @ Rz(roll)`。正の yaw は右を、正の pitch は上を向き、正の roll は画像を時計回りに回す。

### 時間

- 状態に保存する時刻はすべて整数の Timeline frame とする。秒は Timeline frame ÷ `timeline.fps` で求める（ADR 0024）。
- 評価関数は端数を含む Timeline frame を受け取る。背景 VIDEO のフレームの元の時刻 `t` 秒で評価するときは、`t × timeline.fps` を渡す。実行時の fps が `timeline.fps` と違っても、ノードは記録された `timeline.fps` で解釈して秒を保つ。
- Panorama Studio が上流の Scene を受けたときは、上流の各ノードの状態と自分の状態を、それぞれの `timeline.fps` で同じ時刻 `t` 秒に評価する（`t × その状態の timeline.fps`）。どの状態も再基準化しない（`docs/studio-node.md` の「上流の Scene」）。
- Camera の Keyframe は Timeline 基準とする。`scene` と Sticker の Keyframe は、素材の先頭が Timeline 上に来る位置（`start − in`）を基準とする。

## `state_json` v2

```json
{
  "version": 2,
  "id": null,
  "timeline": {"fps": 24.0, "length": null},
  "camera": {"aspect": 1.0, "projection": "perspective", "position": {...}, "rotation": {...}, "fov": {...}},
  // 加える（作る）："curve": {...}
  "scene": {"clip": {...}, "position": {...}, "rotation": {...}, "scale": {...}},
  "stickers": [],
  "next_sticker_id": 1,
  "painting": {...},
  "painting_layer": null,
  "painting_visible": true,
  "upstream": [],
  "background": {"clip": {"start": 0, "in": 0, "duration": null}}
}
```

完全な例は `tests/fixtures/scene_state/v2_canonical.json` にある。

| フィールド | 型 | 既定値 | 正規化 |
|---|---|---|---|
| `version` | `2` | — | 下記「版の判定」 |
| `id` | 文字列 または `null` | `null` | この状態の Scene を表す id。下流の Studio は上書き（`upstream`）をこの id ごとに記録する（ADR 0030）。空でない文字列のほかは `null`。下記「Scene の id」。Python は振らない |
| `timeline.fps` | 数値 | `24.0` | 0 以下は既定値。1〜1000 に寄せる（`TIMELINE_FPS_MIN`・`TIMELINE_FPS_MAX`）。記録された Timeline fps |
| `timeline.length` | 整数 または `null` | `null` | エディタでの長さの上書き。1 未満は `null`。10,000,000 を超える値は 10,000,000 に寄せる（`TIMELINE_LENGTH_MAX`。`TIMELINE_FRAME_MAX` と同じ値なので、高い fps に再基準化しても長さの秒は縮まない）。`null` なら入力から決める（`docs/studio-node.md` の「Scene の組み立てと撮影の入口」） |
| `camera` | オブジェクト または `null` | `null` | Camera（下記）。欠け・`null`・オブジェクトでない値は `null`（Camera が無い）。ADR 0029 |
| `camera.aspect` | 数値 | `1.0` | 0 以下は既定値。Camera の画面の幅 ÷ 高さ。`projection` が `erp` のときは使わない |
| `camera.projection` | `"perspective"` または `"erp"` | `"perspective"` | それ以外は既定値。撮り方で、Keyframe を持たない。`erp` は Camera の位置と回転から ERP を撮り、`fov` と `aspect` と `curve` を読まない。`perspective` は Camera の画像で、レンズの曲線 `curve`（κ）で直線の像から魚眼までをつなぐ（作る。`docs/render-contract.md` の「カメラのレンズ」） |
| `camera.visible` | 真偽値 | `true` | 真偽値でなければ既定値。`false` は Camera を置いたまま非表示にする。Panorama Studio は非表示の Camera を Camera が無いときと同じに撮る（下記） |
| `camera.position`・`camera.rotation`・`camera.fov` | Lane | 下記 | Camera の値（Viewport camera は保存しない） |
| `camera.curve` | Lane | 下記 | レンズの曲線 κ（作る。ADR 0042）。`erp` では読まない |
| `scene.clip` | Clip range | 下記 | `scene` 入力が有効な範囲 |
| `scene.visible` | 真偽値 | `true` | 真偽値でなければ既定値。`false` なら `scene` 入力を描かない |
| `scene.position`・`scene.rotation`・`scene.scale` | Lane | 下記 | `scene` 入力に掛ける変形 |
| `stickers` | 配列 | `[]` | `sky` の層は `z_index`（ペイントと共通の軸）で並べ、同じ値ならリストの順（先頭が奥）。`world` の Sticker は奥行きで重なる |
| `next_sticker_id` | 整数 | 下記 | 次に加える Sticker の番号 `n`（`sticker_<n>`）。下記「Sticker の id の採番」 |
| `painting` | オブジェクト | 空のペイント | 既存の `normalize_painting_state` / `normalizePaintingState` で正規化する。`sky` の静的な層 |
| `painting_layer` | オブジェクト または `null` | `null` | ペイントのラスタ画像の参照。中身はそのまま保つ |
| `painting_visible` | 真偽値 | `true` | 真偽値でなければ既定値。`false` ならペイント（ストローク・ラスタ・マスク）を描かず、MASK にも出さない |
| `upstream` | 配列 | `[]` | 上流の Scene の要素への上書き。下記「上流の上書き（`upstream`）」 |
| `background.clip` | Clip range | 下記 | 自分の `bg_media` が Timeline 上で有効な範囲（下記「背景の Clip range」）。`background` が欠け・オブジェクトでないときも既定の Clip range |

`scene` は、`scene` 入力が接続されていなくても常に存在する。

`camera` は、Camera を 1 台まで持つ（ADR 0029）。`null` は Camera が無いことを表し、Camera が無いときは World の原点から回転 0 で撮った ERP を出す。オブジェクトのときは、正規化した結果は常に `aspect`・`projection`・`visible`・`position`・`rotation`・`fov` をこの順に持つ。

表示（`visible`）は、Camera・`scene`・Sticker・ペイントのそれぞれが持つ。エディタのタイムラインの各行の目のアイコンで切り替える（`docs/timeline-ui.md`）。ペイントの表示は、旧ノードと共有する `painting` の形（`normalize_painting_state`）を変えないように、`painting` の中ではなく最上位の `painting_visible` に置く。

- 非表示の `scene` と Sticker は、評価関数の `active` が偽になる（下記「評価関数」）ので描かれない。Clip range・Keyframe・値はそのまま保ち、出力の長さにも今までどおり数える（表示の切り替えで長さは変わらない）。
- 非表示のペイントは描かない（`nodes.py` の `_resolve_sources` が空のペイントを渡す）。
- 非表示の Camera は状態に残る。評価関数は今までどおり値を返す（`camera` は `null` にならない）。Panorama Studio は非表示の Camera を Camera が無いときと同じに扱い、World の原点から回転 0 の ERP を撮り、出力の大きさも ERP の規則で決め、`sticker_state` も出さない（`docs/studio-node.md`）。Camera の Keyframe は表示によらず出力の長さに数える。

- ノードでの扱い：状態 v2 を読み書きするのは Panorama Studio だけで、`camera` を読み替えない。`null` なら Camera が無く、原点・回転 0 の ERP を撮る（`docs/studio-node.md` の「Panorama Studio」）。エディタも `camera` を読み替えず、Camera を足す・消すのは編集である。
- 既存の状態：この版より前の v2 の状態は `camera` のオブジェクトを持つので、そのまま「Camera あり」で `projection` は `perspective` になる。読み込みでも保存でも Camera を消したり書き換えたりしない（ノードのキャッシュが外れないようにするため）。fps の再基準化だけは状態全体と同じく `camera` の時刻も直し、`null` は `null` のまま、`projection` はそのまま保つ。
- レンズの値（作る）：Keyframe が無く `value` が既定値（1）の `curve` の Lane は、保存するテキストに書かない（下の「保存するテキスト」と同じ理由で、今の状態のテキストとノードのキャッシュを変えない）。既定値ではノードの出力も今と同じになる。読み込みは欠けたら既定値にする。
- 保存するテキスト：エディタとノード上の UI は `sceneStateText`（`pano_scene_state.js`）で `state_json` を書く。正規化した状態をそのまま JSON にするが、後から足した項目は既定値のときは書かない：`camera.projection` の `perspective`、`camera.visible`・`scene.visible`・`painting_visible` の `true`。ComfyUI の実行のキャッシュは `state_json` のテキストを比べるので、これらを書くと、その項目より前に保存した状態をエディタで開いて閉じただけで再実行になる。書かなくても、読み込みで既定値に戻るので意味は変わらない（`load_scene_state` の結果を書き出して読むと同じ結果になる）。既定値でないとき（`erp`、非表示）だけ書く。同じ理由で、ADR 0030 の項目も次のときは書かない：`id` の `null`、空の `upstream`、`port` の Sticker の空の `handoff_overrides`、Sticker から求まる値（下記「Sticker の id の採番」の最小値）と同じ `next_sticker_id`。既定の Clip range（`start` 0・`in` 0・`duration` `null`）の `background` も書かない（`pano_scene_state.js` の `defaultClip`）。Python は `state_json` を書かないので、この関数を持たない。

### Lane

Keyframe を持つ単位である。パラメータごとに一つあり、どの Lane も同じ形を持つ。

```json
{"value": <値>, "keyframes": [<Keyframe>, ...]}
```

- `keyframes` が空のとき、Lane の値は静的な `value` である。
- `keyframes` があるとき、評価には `keyframes` だけを使う。`value` は、Keyframe をすべて削除したときに戻る静的な値として保つ。

| 持ち主 | Lane | 値の形（既定値、範囲） |
|---|---|---|
| `camera` | `position` | 位置（`[0, 0, 0]`） |
| `camera` | `rotation` | 回転 |
| `camera` | `fov` | `hFOV_deg` の数値（`90`、保存は 0.1〜360。評価した値は、評価した `curve` の κ による上限 `min(360, 179 ÷ κ)` に寄せる。κ = 1 で今と同じ 179、κ ≤ 179/360（約 0.497）で 360。作る）。画像の横の端の光線が光軸となす角の 2 倍 |
| `camera` | `curve` | レンズの曲線 κ の数値（`1`、0〜1.5）。像の中心からの距離 `r = f·tan(κθ) ÷ κ`（κ = 0 では `r = f·θ`）。1 が今の直線の像、1 より大きいと糸巻き型、0.5 が立体射影、0 が等距離射影の魚眼（作る） |
| `scene`・`world` の Sticker | `position` | 位置（`[0, 0, 0]`） |
| `scene`・`world` の Sticker | `rotation` | 回転 |
| `scene`・`world` の Sticker | `scale` | 数値（`1`、0 以下は既定値） |
| `sky` の Sticker | `direction` | `yaw_deg`（`0`）、`pitch_deg`（`0`、−90〜90） |
| `sky` の Sticker | `roll` | `roll_deg` の数値（`0`） |
| `sky` の Sticker | `size` | `hFOV_deg`（`20`、0.1〜179）、`vFOV_deg`（`20`、0.1〜179） |
| `sky`・`world` の Sticker | `opacity` | 数値（`1`、0〜1） |
| `world` の Sticker | `lens` | 持たない（既定）か、`curve`（κ、`1`、0〜1.5）と `hFOV_deg`（`90`、0.1〜360、κ による上限 `min(360, 179 ÷ κ)` に寄せる）の組。作る。ADR 0042。持たない Sticker は今の平らな板、持つ Sticker は κ = 1 も含めていつも球面の一部の板（`docs/render-contract.md` の「`world` の Sticker の板」。κ を Keyframe で 1 をまたいで動かしても形が跳ばない） |
| `sky` の Sticker | `curve` | レンズの曲線 κ の数値（`1`、0〜1.5。作る。ADR 0042）。Camera の `curve` と同じ写し方で、素材をその κ のレンズの像として向きに置く（`docs/render-contract.md` の「Sky の描き方」）。`size` の画角の上限は Camera と同じ `min(360, 179 ÷ κ)` |

回転は `yaw_deg`（`0`）、`pitch_deg`（`0`、−90〜90）、`roll_deg`（`0`）である。欠けたフィールドや不正なフィールドは、Lane の `value` ではなく、このフィールドの既定値になる。Lane 自体が欠けている・オブジェクトでないときは `{"value": 既定値, "keyframes": []}` になり、`value` が数値の Lane で `value` が不正なときも既定値になる。

- `position` は 3 つの有限の数値の配列で、一つでも不正なら全体が既定値になる。
- `yaw_deg`・`roll_deg` は範囲に丸めない。360° の差は同じ向きを表す。
- `sky` の Sticker の `direction` は yaw と pitch を一つの Lane にまとめる。別々に補間すると、球面上をまっすぐ進まないためである。
- `sky` の Sticker の値は、中心の方向（`direction`）、画面内の回転（`roll`）、角度サイズ（`size`）である。
- `sky` の Sticker の `curve` は Lane にする（作る）。Pose handoff（ADR 0036）は Camera の値をフレームごとに焼くので、撮った Camera の `curve` に Keyframe があれば、Sticker の `curve` もフレームごとの Keyframe になる。動かない κ は Keyframe の無い静的な値になる（ほかの Lane と同じ）。Keyframe が無く `value` が 1 の `curve` は、保存するテキストに書かない（見た目も今と同じ）。`world` の Sticker の `lens` は、`curve` と `hFOV_deg` の組で持つ。球面の一部の形は κ だけでは決まらず（半径か角度の広さがもう一つ要る）、`hFOV_deg` があれば `scale` と合わせて半径が決まるためである（`size` と同じく 2 つの数値をそれぞれ補間する）。`lens` は欠けてよい Lane で、欠けていれば読み込みでも足さず、保存するテキストにも書かない（今の平らな板）。あれば値によらず書く。書くのは Pose handoff だけで（作る）、評価したフレームのどれかで κ ≠ 1 のときだけ足す（κ = 1 だけの shot は今と同じ平らな板にし、今の出力を変えない）。
- Source が `port` の Sticker の vFOV は、`hFOV_deg` と素材（最初のフレーム）のアスペクト比から求める派生値で、状態には書かない。ポートの素材は状態の外で差し替わるためである。ノードは描くときに求め（`core/render.py` の `derive_vfov`）、エディタとノード上の表示も描くときと当たり判定のときに同じ式で求める（`web_src/pano_editor_state.js` の `skyStickerVfov`）。`port` の Sticker を加えるときは `vFOV_deg` を `hFOV_deg` と同じ値で保存し（Keyframe も同じ）、素材が読み込まれても書き直さない。これで素材の読み込みが `state_json` を変えず、実行の key（`docs/studio-node-surface.md` の「上端の bar と状態」）がずれない。保存された `vFOV_deg` は、素材の大きさがわかるまでの表示にだけ使い、エディタで `port` の Sticker の大きさを変えても `hFOV_deg` だけを書く（inspector の V FOV は無効）。ノードが加える `port` の Sticker（Pose handoff の Keyframe を含む）も `vFOV_deg` を `hFOV_deg` と同じ値にする。 κ ≠ 1 では、像の中心の `f` が縦横で同じになるよう `g_κ(vFOV ÷ 2) = g_κ(hFOV ÷ 2) × 高さ ÷ 幅` から求める（`g_κ` は `docs/render-contract.md` の `lens_radius`。κ = 1 では今の `tan` の式。作る）。

### Keyframe

```json
{"frame": 24, "value": <値>, "easing": [0.42, 0, 0.58, 1], "handles": {"in": [x, y, z], "out": [x, y, z]}}
```

| フィールド | 型 | 正規化 |
|---|---|---|
| `frame` | 整数 | 基準は「時間」の節のとおり。負の値も許す。数値でなければその Keyframe を捨てる |
| `value` | Lane の値の形 | Lane と同じ規則 |
| `easing` | `[x1, y1, x2, y2]`、`"auto"`、または `"hold"` | この Keyframe から次の Keyframe までの区間の Easing。既定値は ease-in-out の `[0.42, 0, 0.58, 1]`。最後の Keyframe の `easing` は使われない |
| `handles` | オブジェクト（任意） | `position` の Lane だけが持つ。それ以外では捨てる |

- `keyframes` は `frame` の昇順に並べる。同じ `frame` が複数あるときは、入力で後にあるものを残す。
- cubic-bezier は CSS の `cubic-bezier(x1, y1, x2, y2)` と同じで、単位正方形の (0, 0) から (1, 1) への曲線の制御点である。横軸は区間内の時間、縦軸は進み具合。4 つとも 0〜1 でなければならず、外れたもの・数値が 4 つでないものは既定値の ease-in-out になる。`y1`・`y2` も 0〜1 に限るので、値は区間の両端の値の間を外れない（行き過ぎない）。同じ値の Keyframe を二つ置いた区間は完全に止まる。
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
| `duration` | 整数 ≥ 1 または `null` | `null` | 有効な長さ。`null` は Timeline の終わりまで。出力の長さを決めるときは、フレームを持つ `port` の素材（IMAGE バッチ・VIDEO）の終わりを Clip の終わりとみなす（`docs/studio-node.md`） |

有効な範囲は `start ≤ frame < start + duration` とする。端点との比較には評価関数と同じ許容差 `FRAME_EPSILON`（`1e-6`）を使う。`start − 1e-7` は範囲内、`start + duration − 1e-7` は範囲外（終端は含まない）とする。負の値は 0、1 未満の `duration` は 1 に寄せる。

#### 背景の Clip range

`background.clip` は、Panorama Studio 自身の `bg_media` を Sticker の素材と同じ規則で Timeline に置く。形・正規化・fps の再基準化は Sticker の Clip range と同じである。

- 素材の先頭は Timeline 上の `start − in` に来る。`start` を後ろへずらすと背景の映像が遅れて始まり、`in` で頭を、`duration` で終わりを切る。`duration` が `null` なら素材の終わりまで。
- Clip range の外と素材の外では背景を描かず、`bg_color` になる。出力の長さは Clip range によらず素材のフレーム数で決まる（`docs/studio-node.md` の「長さ」）。描き方は `docs/studio-node.md` の「背景の Clip range」。
- Keyframe と表示（`visible`）は持たない。評価関数は `background` を読まない。
- 上流の上書き（`upstream`）は `background` に当たらない（自分の入力の設定である）。
- `background` は Sticker ではない。エディタのタイムラインの行の id `background` は、Sticker の id（エディタが振るのは常に `sticker_<番号>`）と重ならない。
- 既定の Clip range では、背景は今までどおり出力フレームと 1 対 1 に対応する。既定値はテキストに書かないので、この項目より前に保存した状態のテキストは変わらない。

### Sticker

```json
{
  "id": "sticker_1",
  "placement": "sky",
  "source": {"kind": "file", "filename": "a.png", "subfolder": "panorama_stickers", "storage": "input"},
  "clip": {"start": 0, "in": 0, "duration": null},
  "visible": true,
  "locked": false,
  "crop": {"x0": 0.0, "y0": 0.0, "x1": 1.0, "y1": 1.0},
  "direction": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0}, "keyframes": []},
  "roll": {"value": 0.0, "keyframes": []},
  "size": {"value": {"hFOV_deg": 20.0, "vFOV_deg": 20.0}, "keyframes": []},
  "opacity": {"value": 1.0, "keyframes": []},
  "z_index": 0
}
```

| フィールド | 型 | 既定値 | 意味と正規化 |
|---|---|---|---|
| `id` | 文字列 | `sticker_<n>` | 空・重複・文字列でないときは、`next_sticker_id` から順に `sticker_<n>` を振る（後に出てきたほうを振り直す）。下記「Sticker の id の採番」 |
| `placement` | `"sky"` または `"world"` | `"sky"` | 持つ Lane を決める。エディタで切り替える経路はない。`port` の Sticker だけは、ノードが素材と Pose handoff に合わせて同じ `id` のまま置き換える（`docs/studio-node.md` の「`port` の Sticker と Pose handoff」） |
| `source` | Source | — | 不正なときは Sticker ごと捨てる |
| `clip` | Clip range | 上記 | |
| `visible` | 真偽値 | `true` | `false` なら描画しない（タイムラインの行の目のアイコン） |
| `locked` | 真偽値 | `false` | エディタでの操作を禁じる |
| `crop` | `x0`・`y0`・`x1`・`y1`（0〜1） | 全体 | 2D の素材の切り抜き。素材の正規化座標（左上が原点）。0〜1 に寄せた後、`x0 ≤ x1`・`y0 ≤ y1` になるよう並べ替える（旧描画の min / max による正規化と同じ） |
| `direction`・`roll`・`size` | Lane | 上記 | `sky` の Sticker だけが持つ（`world` では捨てる） |
| `position`・`rotation`・`scale` | Lane | 上記 | `world` の Sticker だけが持つ（`sky` では捨てる） |
| `opacity` | Lane | `1` | 不透明度 |
| `z_index` | 整数 | `0` | `sky` の Sticker だけが持つ（`world` では捨てる）。読み込みで `floor(x + 0.5)` に丸める。数値でない・非有限の値は既定値。下記「Sky の重なり順」 |
| `handoff_overrides` | Lane の名前の配列 | `[]` | `port` の Sticker だけが持つ（ほかでは捨てる）。`sticker_state` から引き継がずに、保存した Lane を使う Lane（ADR 0030 の「`sticker_state` で届く Sticker」）。`placement` の Lane の名前だけを、重複を除いて上の Lane の順に並べる。`[]` はすべての Lane を引き継ぐ |

#### Sticker の id の採番

Sticker の `id` は、一度使った値を別の Sticker に使い直さない。下流の Studio の上書き（`upstream`）と消した記録は上流の Sticker の `id` を指すので、消した Sticker の `id` を新しい Sticker が使うと、上書きが別の Sticker に当たるためである（ADR 0030）。

- `next_sticker_id` は、次に加える Sticker の番号 `n` である。新しい Sticker（エディタとノード上の UI で投入した画像、複製、`port` の Sticker）は `sticker_<next_sticker_id>` を受け取り、`next_sticker_id` を 1 進める（`takeStickerId`、`pano_editor_state.js`）。Undo で戻しても `next_sticker_id` は戻さない（`restoredHistoryState`）。ノードが状態にない `port` の Sticker を加えるとき（`nodes.py` の `_take_sticker_id`）も同じ番号を使う。ノードは状態を保存しないので、進めた値は実行の中だけのものである。
- 正規化：`sticker_<数字>` の形の `id`（数字は ASCII の `0`〜`9`）の最大の番号 + 1（なければ `1`）を最小値とする。保存された値が数値なら `floor(x + 0.5)` に丸め、最小値より小さければ最小値にする。数値でなければ最小値とする。番号と `next_sticker_id` は JS で正確に表せる `2^53 − 1` までとし、それ以上の番号の `id` と、数字が 17 桁以上の `id` は数えず、`next_sticker_id` はそこに寄せる。
- 空・重複・文字列でない `id` は、`next_sticker_id` の番号から順に振り直し、そのぶん `next_sticker_id` を進める。数えない番号の `id` がすでにあれば、その番号は飛ばす。読み直すと、振り直した `id` が最大の番号になり、同じ結果になる。
- 保存するテキストには、最小値と同じときは書かない。一番大きい番号を振った Sticker がテキストにないとき（消したとき）だけ、最小値より大きくなって書かれる。毎回 Sticker から求めるだけにすると、一番大きい番号の Sticker を消して次に加えた Sticker が同じ `id` を使い直すので、保存する。最小値と同じときに書かないので、この項目より前に保存した状態は、開いて閉じてもテキストが変わらず、ノードのキャッシュも外れない。

#### Sky の重なり順

`sky` の Sticker と、ペイントのストロークのグループ（`painting.groups[].z_index`）・ラスタ（`painting.raster_objects[].z_index`）は、同じ `z_index` の軸で奥から手前へ重ねる。旧ノードの display list（`core/display_list.py` の `build_display_entries`）と同じ規則とする。

- 同じ値のときは、Sticker、グループ、ラスタの順。それぞれの中ではリストの順。
- どのグループにも属さないストロークは、最後に一番手前に重ねる。

`world` の Sticker は奥行きで重なるので `z_index` を持たない。

`world` の 2D の素材（IMAGE / VIDEO）は、幅 `scale`（World の単位）、高さは切り抜いた素材のアスペクト比で決まる両面の板として描く（`docs/render-contract.md` の「World の描き方」）。3D の素材（MESH・SPLAT・3D ファイル）は常に `world` の Sticker で、`position`・`rotation`・`scale` は `scene` の変形と同じく中身自身の glTF 座標を World に置く変形とする（`docs/render-contract.md` の「3D の `world` の Sticker」）。`crop` は使わない。

`locked` と `crop` を残す根拠：

- `crop` は、旧 `state_json` の描画と旧ノードの基準画像を再現するのに必要で、描画関数が読む。3D の素材では使わない。
- `locked` は、ADR 0025 の「上流の要素をロックする場合も、同じ Sticker のリストの中に印を付けるだけにする」に対応する印で、エディタが読む。

`sticker` 入力の素材の Sticker（`source.kind == "port"`）を状態にないときに加える規則と、`sticker_state` からの Pose handoff は、ノードの振る舞いとして `docs/studio-node.md` の「`port` の Sticker と Pose handoff」に書く。読み込み（`load_scene_state`）はこの Sticker を生成しない。状態は保存された内容だけを表す。


### Source

素材の出どころを表す。入力ポートの素材とエディタに投入したファイルは、同じ Sticker の形で扱う。

| 形 | 意味 |
|---|---|
| `{"kind": "port"}` | ノードの `sticker` 入力ポートの素材。ポートは一本なので番号を持たない。状態の中に高々一つで、二つ目以降の `port` の Sticker は捨てる |
| `{"kind": "file", "filename": "...", "subfolder": "...", "storage": "input"}` | ComfyUI のディレクトリにあるファイル。`storage` は `input`・`output`・`temp` のいずれか（既定値 `input`）、`subfolder` の既定値は `""`。投入した画像は `input/panorama_stickers`、3D ファイルは Load3D と同じ場所に保存する。`filename` の前後の空白、`subfolder` の前後の空白と `/`・`\` を除き、`storage` は前後の空白を除いて小文字にする（v1 の読み替えと同じ規則）。`filename` が空なら不正 |
| `{"kind": "file", "data_url": "data:image/..."}` | 旧 v1 の埋め込み画像。v1 の読み替えでだけ生じる。`data:image` で始まらなければ不正。エディタは開いたときに従来どおりアップロードして上の形に置き換える |

`filename`・`subfolder`・`storage` は信頼しない入力である。ファイルを読む側は、既存の `folder_paths` による範囲の確認を必ず通す。この契約のコードはファイルを読まない。

#### 3D ファイルの `file` の Source

`file` の Source が 3D ファイルかどうかは、`filename` の拡張子だけで決める（大文字と小文字は区別しない）。3D ファイルの拡張子は、ComfyUI の Load3D が受け付ける 9 つ（`.gltf`・`.glb`・`.obj`・`.fbx`・`.stl`・`.spz`・`.splat`・`.ply`・`.ksplat`）と同じにする（出典：ComfyUI_frontend（5276d1b）の `src/extensions/core/load3d/constants.ts:6-20` の `SUPPORTED_EXTENSIONS`、コアの `comfy_extras/nodes_load_3d.py:29`）。それ以外の `file` の Source と、`data_url` の Source は画像とする。

- Python と JS は同じ表（フィクスチャ `tests/fixtures/scene_state/file_3d_formats.json`。拡張子の一覧と、`filename` と期待する判定の組）を読み、同じ判定になることを parity の test で守る。この表は状態ではないので、`test_scene_state_parity.py` の `STATE_CASES` には入れず、Python と JS の test がそれぞれ専用に読む。
- 判定はファイルを開かない。PLY がスプラットかメッシュか、読めるかどうかは、読む側が中身で決める（`docs/render-contract.md` の「SPLAT の描き方」と「読めない 3D ファイル」）。
- 3D ファイルの Source を持つ Sticker は `world` の Sticker である（上の「`world` の 2D の素材」の段落）。状態の読み込みは `placement` を書き換えない。`sky` の Sticker が 3D ファイルの Source を持つ状態は、ノードが描かずに警告する（`docs/studio-node.md` の「3D ファイルの `file` の Source」）。
- 読み方は、ノードが `docs/studio-node.md` の「3D ファイルの `file` の Source」、エディタが `docs/threejs-spark-integration.md` の「空間の表示」で決める。画像の `file` の Source は、ノードが `core/stickers.py` の `load_source_rgba` で読む。

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
| `camera` | `position`、`yaw_deg`・`pitch_deg`・`roll_deg`（`rotation`）、`hFOV_deg`（`fov`）、`aspect`、`curve`（作る）。状態の `camera` が `null` なら `null`。`projection` は時間で変わらないので、状態の `camera.projection` を読む |
| `scene` | `active`（`visible` かつ `frame` が `scene.clip` の範囲内）、`clip_frame`、`position`、`yaw_deg`・`pitch_deg`・`roll_deg`（`rotation`）、`scale` |
| `clip_frame` | 素材の先頭からの経過（Timeline frame、端数あり）。`frame − (start − in)`。素材の時刻（秒）は `clip_frame ÷ timeline.fps` |
| `stickers[]` | `state.stickers` と同じ順。`id`・`placement`、`active`（`visible` かつ Clip range の範囲内）、`clip_frame`、各 Lane の値のフィールド（`sky` は `yaw_deg`・`pitch_deg`・`roll_deg`・`hFOV_deg`・`vFOV_deg`、`world` は `position`・`yaw_deg`・`pitch_deg`・`roll_deg`・`scale`）、`opacity` |

範囲外（`active` が偽）でも値は評価して返す。描画するかどうかは呼び出し側が `active` で決める。角度の単位は度で、戻り値の角度の範囲は規定しない（360° の差は同じ向き）。

Lane の評価の規則：

1. Keyframe がなければ `value`。
2. 最初の Keyframe 以前は最初の値、最後の Keyframe 以後は最後の値。
3. `frame` がちょうど Keyframe の `frame` なら、その Keyframe の値。
4. 区間の途中で、区間の始まりの Keyframe の `easing` が `hold` なら、始まりの値。

1〜3 で Keyframe の `frame` と比べるときは、差が `1e-6` 以内なら同じ frame とみなす（`FRAME_EPSILON`）。秒 × fps の浮動小数点の誤差で、Keyframe の直前の値（例：`23.9999999`）になった出力フレームでも、Cut が 1 フレーム遅れないようにするためである。この許容差は浮動小数点の誤差だけを吸収する。ただし、VIDEO の PTS の量子化の幅の半分は、許容差に含める（1ms の timebase なら 0.5ms 分の Timeline frame）。PTS は timebase に丸めて記録されるので、29.97 fps の mkv・webm では、整数の Timeline frame のはずの時刻が最大でその分ずれるためである（`docs/studio-node.md`）。`timeline.fps` は丸めずに記録する（例：29.97 fps の素材は `30000 / 1001`）。コアの VIDEO の fps は分数なので、それを float にした値をそのまま記録する。`29.97` と丸めて記録すると、24 番目のフレームは `23.999976` になり、許容差では吸収できない。
5. それ以外（`auto`・cubic-bezier の区間の途中）は、次の「補間」の節のとおりに補間する。

### 補間

区間 `k`（Keyframe `k` から `k + 1` まで、長さ `dt = frame[k+1] − frame[k]`）の途中の値は、区間内の時間 `u = (frame − frame[k]) ÷ dt` から求める。

- 評価は Lane ごとに独立して行う。戻り値の形（上の表）は Lane の分け方によらない。
- 進み具合 `p`：`auto` の区間では `p = u`。cubic-bezier の区間では、CSS と同じく `x(t) = u` を満たす `t` を求め（`x(t)` は `x1`・`x2` が 0〜1 なので単調。二分法で 50 回）、`p = y(t)` とする。`y1`・`y2` は 0〜1 なので `p` も 0〜1 に収まる。
- スプラインが通過する Keyframe：Keyframe `i` の前後の区間がどちらも `auto`（`easing[i−1]` と `easing[i]` が `auto`）で、`i` が最初でも最後でもないとき、`auto` のスプラインは `i` を通過し、`i` の速度（1 Timeline frame あたり）を両側の区間で共有する。そのため、`i` の前後で速度が連続する。それ以外の端（最初・最後の Keyframe、`hold` や cubic-bezier の区間との境）では、その区間自身の変化 `v[k+1] − v[k]` を速度 × `dt` として使う。したがって、cubic-bezier の区間は、ハンドルがなければ端の値の間の直線（回転は slerp、`direction` は大円に沿う slerp）を `p` で進み、Keyframe 二つだけの `auto` は等速になる。
- 通過する Keyframe の速度 `m`：前後の弦の傾き `s0 = (v[i] − v[i−1]) ÷ dt0`、`s1 = (v[i+1] − v[i]) ÷ dt1`（`dt0`・`dt1` は前後の区間の長さ）から、次のように決める（Fritsch–Carlson 型の制限）。
  1. 前後の変化が逆向きなら `m = 0` とする。
     - スカラー：`s0 × s1 ≤ 0`（符号が違う、またはどちらかが 0）。
     - ベクトル（位置・回転・`direction`）：内積 `s0 · s1 < 0`（真に後ろへ折り返すときだけ）。向きの変化が 90° 以下なら止まらずに通過する。どちらかの弦が 0 のときは、2 の上限が 0 になるので `m = 0` になる。
     - 実装は、スカラーを 1 次元のベクトルとして同じ式（`< 0` と 2 の上限）で扱う。符号が同じで片方が 0 のときも上限が 0 になるので、結果はスカラーの規則と一致する。
  2. それ以外は、前後の Keyframe を通る放物線の傾き `m = (s0 × dt1 + s1 × dt0) ÷ (dt0 + dt1)` とし、`|m|` が `3 × min(|s0|, |s1|)` を超えるときは、向きを保ってその長さに縮める。
  - 素早く動いて止まる（間隔の比が大きい）場合も、値が前後の Keyframe を越えて行き過ぎない。
- スカラーの Lane（`fov`・`roll`・`scale`・`opacity`）、`size`（`hFOV_deg` と `vFOV_deg` をそれぞれ独立したスカラーとして補間する）と位置：3 次ベジェ `B(v[k], v[k] + m0 × dt ÷ 3, v[k+1] − m1 × dt ÷ 3, v[k+1]; p)`。`m0`・`m1` は区間の始まりと終わりの速度。位置は 3 成分を一つのベクトルとして扱い、上の内積と長さもベクトルで計算する（World の軸の向きに依存しない）。`roll` は数値のまま補間し、最短の向きは取らない（`0` → `350` は 350° 回る。`rotation` の Lane の 180° の規則は当てはまらない）。
- `sky` の Sticker の `direction`：yaw / pitch を単位ベクトル（中心の方向）にして球面上で補間し、yaw / pitch に戻す。
  - 方向ベクトル：`d(yaw, pitch) = (cos pitch · sin yaw, sin pitch, cos pitch · cos yaw)`。x が右、y が上、z が yaw 0 の正面で、この計算の中だけで使う（World の座標への変換はしない）。`d[k]` は Keyframe `k` の方向。
  - 球面の演算：`log_a(b)` は点 `a` の接平面のベクトルで、`a` から `b` へ大円に沿って向かい、長さは二点の間の角度（ラジアン）。`w = b − (a · b) a` として `log_a(b) = w × atan2(|w|, a · b) ÷ |w|`（`|w| ≤ 1e-12` なら `w`。計算の途中の点がちょうど正反対のときは動かない。四元数の log と同じ扱い）。`exp_a(v) = cos|v| · a + sin|v| · v ÷ |v|`（`|v| ≤ 1e-12` なら `a + v`）。`slerp(a, b, t) = exp_a(t · log_a(b))`。
  - 区間の大円：区間 `k` の始まりの速度（`p` あたり）は `C0 = log_{d[k]}(d[k+1])`。二つの方向がちょうど正反対（`d[k] · d[k+1] < 0` かつ `|d[k+1] − (d[k] · d[k+1]) d[k]| ≤ 1e-6`）のときは大円が決まらないので、Keyframe `k` から右（保存された yaw が増える向き）へ回る：`C0 = π · (cos yaw[k], 0, −sin yaw[k])`。保存された `yaw_deg` で決まるので、`pitch_deg` が ±90 の Keyframe でも決まる。区間の終わりの速度は、`C0` を同じ大円に沿って `d[k+1]` まで運んだ `C1 = cos θ · C0 − θ sin θ · d[k]`（`θ = |C0|`）。
  - 通過する Keyframe `i` の速度 `m`：上の速度の規則を、`d[i]` の接平面の二つのベクトル `s0 = C1[i−1] ÷ dt0`（前の区間の終わりの速度。大円に沿って `d[i]` まで運んだもの）と `s1 = C0[i] ÷ dt1` に当てはめる（内積が負なら 0、放物線の傾き、長さは `3 × min(|s0|, |s1|)` まで）。極にある Keyframe でも接平面は決まるので、yaw が決まらないことは速度に影響しない。
  - 区間の値：始まりの速度 `V0` は、Keyframe `k` を通過するなら `m[k] × dt`、しなければ `C0`。終わりの速度 `V1` は、Keyframe `k+1` を通過するなら `m[k+1] × dt`、しなければ `C1`。位置と同じく、速度の 3 分の 1 だけ離れた制御点 `c1 = exp_{d[k]}(V0 ÷ 3)`・`c2 = exp_{d[k+1]}(−V1 ÷ 3)` を持つ球面のベジェを、slerp の de Casteljau で評価する：`q0 = exp_{d[k]}(p · V0 ÷ 3)`、`q1 = slerp(c1, c2, p)`、`q2 = exp_{d[k+1]}(−(1 − p) · V1 ÷ 3)`、`r0 = slerp(q0, q1, p)`、`r1 = slerp(q1, q2, p)`、`d = slerp(r0, r1, p)`。両端の速度は `V0`・`V1` になり、通過する Keyframe の前後で速度が連続する。通過しない区間では制御点が大円の上に等間隔に並ぶので、`d` は大円に沿う slerp を `p` で進んだ点 `exp_{d[k]}(p · C0)` になる。
  - 正反対の区間：`C0` を正反対の規則で決めた区間では、制御点 `c1`・`c2` も正反対になりうる（両端で止まる区間では `c1 = d[k]`・`c2 = d[k+1]`）。そのとき `slerp(c1, c2, p)` は大円が決まらず動かないので、この区間は自身の大円の上だけを進む。`u0 = C0 ÷ π`、`u1 = C1 ÷ π`（大円の両端での進む向き）として、弧長 `s = B(0, (V0 · u0) ÷ 3, π − (V1 · u1) ÷ 3, π; p)` を求め、`d = exp_{d[k]}(s · u0)` とする。両端の速度の大円に沿う成分は `V0`・`V1` と一致する（大円から外れる成分は使わない）。そのため、この区間に隣接する通過 Keyframe では、大円から外れる成分の分だけ速度が不連続になる。両端の Keyframe を通過しない区間では、上の de Casteljau と同じく `exp_{d[k]}(p · C0)` になる。
  - 戻り値：`pitch_deg = atan2(y, √(x² + z²))` で、必ず −90〜90 に収まる。`yaw_deg` は `atan2(x, z)` を、回転と同じく、区間の両端に保存された `yaw_deg` を `p` で混ぜた値 `c` に対して `c − 180 − 1e-6 ≤ 値 < c + 180 − 1e-6` となるよう 360° の倍数だけずらす。`√(x² + z²) ≤ 1e-9`（極）では yaw が決まらないので、`c` そのものを返す。同じ極にある二つの Keyframe の間では、yaw は保存された数値の間を `p` で進む。
  - 1 区間の `direction` は、通過しない区間では 180° 以下の最短の大円を進む。それを超えて回すときは途中に Keyframe を打つ。
  - 極の近く：`direction` が持つのは中心の方向だけで、Sticker の画面内の向きは yaw と `roll` で決まる（Sticker の上は天頂の側）。極の近くを通ると yaw は速く変わり、極をちょうど越えると yaw は 180° 変わって、Sticker の上下も入れ替わる。極にある Keyframe を離れるときも、yaw は保存された値から進む向きの値へ飛ぶ。方向と roll に分けた表し方の性質で、補間では補正しない。向きを保つには `roll` に Keyframe を打つ。
- 位置のハンドル：Keyframe `k` の `handles.out` があれば 2 番目の制御点を `position[k] + handles.out` に、Keyframe `k+1` の `handles.in` があれば 3 番目の制御点を `position[k+1] + handles.in` に置き換える。ないほうは自動の接線のままとする。ハンドルは自動の接線より優先し、速度の連続は保証しない。
- 回転（`rotation` の Lane）：yaw / pitch / roll を `world_rotation` / `worldRotation`（`core/world.py`、`web_src/pano_world.js`）（float64）と `rotation_to_quaternion` / `rotationToQuaternion` で四元数にする。区間の計算に使うのは Keyframe `k−1`〜`k+2` だけで、`q[k+1]` は `q[k]` に、`q[k−1]` は `q[k]` に、`q[k+2]` は `q[k+1]` に対して、次の規則で符号を揃える（前の Keyframe → 後の Keyframe の向きで判断する）。
  - 内積が `1e-6` より大きければそのまま、`−1e-6` より小さければ符号を反転する（最短の向き）。
  - 内積の絶対値が `1e-6` 以下（ちょうど 180°）なら、前の Keyframe の glTF のローカル座標での回転ベクトル `log(q_前⁻¹ q_後)` を見て、`−y`・`x`・`z` の順に最初に絶対値が `1e-6` を超える成分が正になる符号を選ぶ。右へ、次に上へ、次に時計回り（画像が時計回りに回る roll の向き）に回ることになる。
- 回転の補間：`log(a⁻¹b)` を「a から b への回転ベクトル（半角）」、`L = log(q[k]⁻¹ q[k+1])` とする。始まりと終わりの速度（`p` あたり）`V0`・`V1` は、通過する Keyframe では上の速度の規則を回転ベクトルに当てはめたもの（`s0 = −log(q[i]⁻¹ q[i−1]) ÷ dt0`、`s1 = log(q[i]⁻¹ q[i+1]) ÷ dt1`。内積が負なら 0、長さは `3 × min(|s0|, |s1|)` まで）に `dt` を掛けたもの、通過しない端では `L` とする。SQUAD `slerp(slerp(q[k], q[k+1], p), slerp(a, b, p), 2p(1 − p))` を評価する。制御点は `a = q[k] · exp((V0 − L) ÷ 2)`、`b = q[k+1] · exp((L − V1) ÷ 2)`。通過しない端では `a = q[k]`・`b = q[k+1]` となり、cubic-bezier の区間は `slerp(q[k], q[k+1], p)` になる。`slerp(x, y, t) = x · exp(t · log(x⁻¹ y))` で、`a`・`b` と外側の slerp の符号は揃え直さない（揃え直すと区間の途中で向きが飛び、端の速度も変わる）。結果は `quaternion_to_rotation` と `panorama_angles` で yaw / pitch / roll に戻す（`pitch_deg` は −90〜90）。
- 1 区間の回転は、必ず 180° 以下の最短の経路になる。180° を超える回転や多回転（yaw 0 → 720 など）は、途中に Keyframe を打つ。
- 回転の数値：yaw と roll は、区間の両端に保存された値を `p` で混ぜた `c = a + (b − a) × p` に対して、`c − 180 − 1e-6 ≤ 値 < c + 180 − 1e-6` となるよう 360° の倍数だけずらして返す（ちょうど 180° 離れた同点は負の側、`c − 180` を取る）。区間の両端で保存された値の数値に一致する。最短の向きが保存された数値の向きと逆のとき（例：yaw 0 → 350）は、区間の途中で yaw・roll の値が 360° 跳ぶ。これは数値の表し方だけで、向きは連続している。使う側は回転行列を使うか、値を 360° で回して扱う。
- 極（pitch ±90 をちょうど通るとき）では、yaw と roll が同じ軸を共有するため、yaw の値は保証しない（その分は roll が受け持つ）。極の近くでも yaw・roll の数値は大きく動きうる。向きの連続は回転行列で判断する。
- `curve` の Lane はスカラーの Lane と同じく線形の値として補間し（κ は像の形を連続に変えるので、ほかの数値の Lane と別の扱いにする理由が無い）、結果を 0〜1.5 に寄せる（作る）。`hFOV_deg` は、寄せた κ による上限にも寄せる。
- 範囲の扱い：補間の結果（数値の誤差を含む）が範囲を外れた `hFOV_deg`・`vFOV_deg` は 0.1〜179 に、`opacity` は 0〜1 に、`scale` は `1e-6` 以上に寄せる。

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
| Camera の Keyframe の `frame`（`camera` が `null` なら `null` のまま。`aspect`・`projection` は変えない） | `r(frame)` |
| Clip range の `start` | `start' = r(start)` |
| 素材の先頭の位置 | `anchor' = r(start − in)` |
| Clip range の `in` | `start' − anchor'` |
| Clip range の `duration`（`null` 以外） | `r(start + duration) − start'` |
| `scene`・Sticker の Keyframe の `frame` | `r(start − in + frame) − anchor'` |
| `timeline.length`（`null` 以外） | `max(1, r(length))` |
| `background.clip` | Sticker の Clip range と同じ |

- Timeline 上のすべての出来事（Keyframe、Clip range の始まりと終わり、素材の先頭）は、新しい fps の半フレーム以内に丸まる。同じ時刻にあった Camera と Sticker の Keyframe は、同じ frame に落ちる。
- 丸めた結果、同じ Lane で `frame` が重なった Keyframe は、正規化の規則どおり後ろのものを残す。`duration` は正規化で 1 以上になる。
- ハンドルは空間のずれなので変えない。表示（`camera.visible`・`scene.visible`・Sticker の `visible`・`painting_visible`）も変えない。
- `id`・`next_sticker_id`・`upstream`・`handoff_overrides` も変えない。`upstream` の記録は自分の `fps` を持ち、その fps で読む（下記「上流の上書き（`upstream`）」）。
- `fps` は 1〜1000 に寄せてから使う（例：`1e308` は 1000 にする）。長さも正規化で 10,000,000 以下に寄せる。
- `fps` が正の有限の数値でなければエラーにする（Python は `ValueError`、JS は `Error`）。文面は `Cannot rebase state_json to fps <値>; fps must be a positive number.` で、`<値>` の書き方は実装ごとに違う（Python は `repr`、JS は `JSON.stringify`）。

## Scene の id

`id` は Panorama Studio の Scene を表す。下流の Studio は上流の層への上書き（下記 `upstream`）を、層の状態の `id` ごとに記録する（ADR 0030）。

- 振るのはエディタとノード上の UI が `state_json` を書くとき（`pano_editor_state.js` の `editorStateWrite`。エディタの `commitState` と、ノード上の UI の書き込み（`port` の Sticker の同期を含む））だけで、`id` が無ければ `newSceneId` で振る。`crypto.getRandomValues` による 16 文字の URL で使える文字（`A-Z`・`a-z`・`0-9`・`-`・`_`）。振った `id` は作業状態に残し、後の書き込みでも同じ `id` を書く。Undo で `id` を振る前の段に戻っても `id` は保つ（`restoredHistoryState`）。
- 書くテキストが変わるときだけ振る。開いて閉じただけ（テキストが変わらないとき）は、`id` のためだけに書かない（「保存するテキスト」と同じく、ノードのキャッシュを外さないため）。そのため、状態を一度も書いていないノードには `id` が無い。下流は `id` の無い層を、上書きできない層（引き継ぐだけ）として扱う（ADR 0030）。
- 旧ノード（状態 v1）には振らない。
- ComfyUI はコピー・貼り付けや複製でウィジェットの値を写すので、貼り付けた Studio は元と同じ `id` を持つ。別々のチェーンにあれば問題ない。一つのチェーンに同じ `id` が二度あるときは、ノードが最も下流の層に当てて警告する。エディタも、最も下流の層にその `id` を使い、ほかの層は番号で区別する（`docs/studio-node.md` の「上流の Scene」）。貼り付けは検出しない。
- Python（ノード）は振らない。`scene` 出力の層の状態と、実行結果の `pano_upstream_layers` の各層の `state` は `id` をそのまま持つ（`docs/studio-node.md`）。

## 上流の上書き（`upstream`）

ADR 0030 により、Panorama Studio は `scene` 入力で受けた上流の Scene の要素を編集できる。下流の状態には、上流の要素への変更だけを `upstream` に保存する。上流の各層（`docs/render-contract.md` の「層」）の状態の `id` ごとに記録を一つ持つ。

```json
"upstream": [
  {
    "layer": "scene_a",
    "fps": 30.0,
    "deleted": ["sticker_3"],
    "stickers": [
      {"id": "sticker_1", "placement": "sky", "visible": false, "direction": {"value": {...}, "keyframes": [...]}, "z_index": 5}
    ],
    "scene": {"visible": false},
    "painting_visible": false
  }
]
```

| フィールド | 型 | 意味と正規化 |
|---|---|---|
| `layer` | 文字列 | 上書きする上流の層の状態の `id`。空でない文字列でなければ記録ごと捨てる |
| `fps` | 数値 | 記録の Keyframe・Clip range の frame の基準の fps。1〜1000 に寄せる。正の数値でなければ、記録の frame の意味が決まらないので記録ごと捨てる（すべて引き継ぐ）。エディタは自分の Timeline fps で書き、別の fps の記録に書き足すときは先に自分の fps に再基準化する（`docs/studio-node.md` の「上流の Scene」） |
| `deleted` | 文字列の配列 | 下流で消した上流の Sticker の `id`。空でない文字列だけを、重複を除いて元の順に残す |
| `stickers` | 配列 | 上流の Sticker ごとの上書き（下記） |
| `scene` | オブジェクト | 上流の層の `scene` の上書き。`visible`（真偽値）と `clip`（Clip range）だけを持てる |
| `painting_visible` | 真偽値（任意） | 上流の層のペイントの表示の上書き |

Sticker の上書きは `id`・`placement` と、上書きしたフィールドだけを持つ。

| フィールド | 規則 |
|---|---|
| `id` | 上流の Sticker の `id`。空でない文字列でなければ上書きごと捨てる |
| `placement` | `sky` または `world`。それ以外は上書きごと捨てる。持てる Lane を決める |
| `clip` | オブジェクトなら Clip range として正規化する |
| `visible`・`locked` | 真偽値 |
| `crop` | オブジェクトなら `crop` として正規化する |
| Lane | `placement` の Lane（`sky`：`direction`・`roll`・`size`・`opacity`、`world`：`position`・`rotation`・`scale`・`opacity`）。オブジェクトなら Lane として正規化する（`value` と、Easing・ハンドルを含む `keyframes` のすべて）。上書きは Lane ごとに丸ごと置き換える |
| `z_index` | `sky` の上書きだけ。数値なら `floor(x + 0.5)` に丸める |

ここだけの規則：**不正な値は既定値にせず、捨てる。捨てたフィールドは上流から引き継ぐ。** 状態のほかの部分では不正な値は既定値に戻すが、上書きで既定値にすると、上流の値を黙って既定値で置き換えることになるためである。型が合っているフィールド（Clip range・`crop`・Lane のオブジェクト）の中身は、状態のほかの部分と同じ規則で正規化する。

- 上書きするものが無い記録（`deleted`・`stickers` が空、`scene` が空、`painting_visible` が無い）は捨てる。上書きするフィールドが無い Sticker の上書き（`id` と `placement` だけ）も捨てる。
- 同じ `layer` の記録が複数あるときは、後のものを残す（残した記録の位置に置く）。一つの記録の中で同じ `id` の Sticker の上書きが複数あるときも同じ。
- `deleted` にある `id` の Sticker の上書きは捨てる。
- キーの順序は上の表の順とする。`deleted`・`stickers`・`scene` は空でも常に持ち、`painting_visible` は上書きするときだけ持つ。
- 上流の要素の `source`、`scene` の Lane は上書きしない（ADR 0030）。
- 記録を上流の層に当てる規則は次の「上書きを当てる」で定める。出力への当て方（どの層に当てるか、Source・`port`・長さの扱い）は `docs/studio-node.md` の「上流の Scene」の「上書き」。

### 上書きを当てる

```python
apply_upstream_overrides(layer_state: dict, record: dict | None) -> dict  # comfyui_pano_suite/core/scene_inherit.py
```

```js
applyUpstreamOverrides(layerState, record) // -> object, web_src/pano_scene_inherit.js
```

上流の層の正規化済みの状態に、正規化済みの記録（`upstream` の要素）を一つ当てた状態を返す。

- 入力は変えない。結果は新しいオブジェクトだが、変えていない部分（上書きの無い Sticker、上書きの無い Lane など）は入力と同じオブジェクトを共有する。結果は変更不可として扱う。ノードは結果も入力も書き換えない。エディタが作業用の写しを編集するときは、`structuredClone` で写してから編集する。
- `record` が `None` / `null`、記録の `layer` が層の `id` と違う（`id` が `null` の層は常にこれ）、または記録のどれも当たらないときは、`layer_state` そのもの（同じオブジェクト）を返す。キャッシュがそのまま効く。
- 記録の `fps` が層の `timeline.fps` と違うときは、先に記録の frame を層の fps に直す（`rebase_upstream_record(record, layer_state)` / `rebaseUpstreamRecord(record, layerState)`、`scene_state.py` と `pano_scene_state.js`）。`r(x) = floor(x × 層の fps ÷ 記録の fps + 0.5)` とする。
  - Clip range は `rebase_scene_state` と同じ規則で直す。
  - 上書きに `clip` があれば、Lane の Keyframe はその素材の先頭（`start − in`）からの相対で、`rebase_scene_state` と同じ規則で直す。
  - 上書きに `clip` が無ければ、Lane の Keyframe は層の Sticker の素材の先頭 `a = start − in`（層の状態、鎖では前の記録を当てた後の状態から取る）からの相対である。記録を書いたエディタは層を記録の fps に再基準化して見ているので、エディタでの先頭は `a' = floor(a × 記録の fps ÷ 層の fps + 0.5)` である。Keyframe の `frame` は `r(a' + frame) − a` に直す。
  - ずれ：エディタの fps（記録の `fps`）が層の fps 以上なら、エディタで触らずに書き戻した Keyframe は、層の元の frame にちょうど戻る。往復しても動かない。層の fps より低いエディタの Keyframe は、そのエディタの fps の 1 フレームの刻みに丸まったままになる（層の frame で最大でおよそ `層の fps ÷ 記録の fps` の半分と、丸めの半フレーム）。重なった Keyframe は、正規化の規則どおり後ろのものを残す。
- `deleted` にある `id` の Sticker を除く。
- `id` と `placement` が同じ Sticker に、Sticker の上書きの各フィールド（`visible`・`locked`・`clip`・`crop`・`z_index`・Lane）を置き換える。Lane は丸ごと置き換え、上書きの無い Lane は層のまま。`placement` が違う上書きは当てない。
- `scene` の上書き（`visible`・`clip`）と `painting_visible` は、そのフィールドを置き換える。
- 層に無い `id` の上書きと消した記録は何もしない。Sticker の並び順は変えない。そうした記録は、エディタが編集を書き戻すとき（Undo の段を積むとき）に、今の実行結果にその層があれば捨てる（上流で消した要素の上書きと消した記録。結果に無い層の記録は捨てない。開いて閉じただけでは捨てない。`docs/editor-interaction.md` の「上流の Scene の表示と編集」）。
- 当てたときの結果の `upstream` は `[]`、`id`・`timeline`・`next_sticker_id` は層のまま。結果は正規化済みの状態で、`load_scene_state` に通しても同じになる。
- 鎖（A → B → C）では、B の記録を A に当てた結果に、C の記録を当てる。後に当てた記録が勝つ。
- `PANO_SCENE` の層の状態は、自分の `upstream` を持たない（`[]`）。Panorama Studio が `scene` 出力で自分の層の `upstream` を空にするためである（`nodes.py` の `_scene_output`。上流の層はすでに上流の Studio が空にしている）。下流が層に当てる記録は、下流の状態の `upstream` だけである。
- フィクスチャは `tests/fixtures/scene_inherit/`（`layer`・`records`・`expected`。`records` を順に当てる。`layer_anchor`・`chained_anchor` は層の Sticker の素材の先頭からの相対）で、`tests/test_scene_inherit.py`（Python と、JS との一致）と `tests/pano_scene_inherit.test.mjs`（JS）で固定する。

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
| Sticker の `yaw_deg`・`pitch_deg` | `direction.value` の同名のフィールド |
| Sticker の `rot_deg` | `roll.value` |
| Sticker の `hFOV_deg`・`vFOV_deg` | `size.value` の同名のフィールド |
| Sticker の `visible`・`locked`・`crop`・`id` | 同名のフィールド |
| `source_kind: "external_image"` の Sticker（`sticker_image_1`） | `source: {"kind": "port"}` |
| `assets[asset_id]` が `type: "comfy_image"` | `source: {"kind": "file", filename, subfolder, storage}` |
| `assets[asset_id]` が `type: "dataurl"` | `source: {"kind": "file", "data_url": ...}` |
| `assets[asset_id]` が `type: "path"`、または資産が見つからない | Sticker を捨てる |
| `shots[0]`（Cutout） | `camera`（Camera あり、`projection` は `perspective`）。`yaw_deg`・`pitch_deg`・`roll_deg` は `rotation.value`、`hFOV_deg`（1〜179 に寄せる）は `fov.value`、`aspect = tan(hFOV/2) ÷ tan(vFOV/2)`（`vFOV_deg` の既定値 60、1〜179 に寄せる）。旧 Cutout の出力と同じ画面比になる。Stickers の v1 の状態は通常 `shots` を持たない（持っていれば Camera に写る） |
| `shots` がない、空、または先頭がオブジェクトでない | `camera: null`（Camera が無い）。v1 の Stickers の状態はこれにあたる。v1 の Cutout でもこのときは `null` になる。v1 の Cutout はこのとき ERP をそのまま出力していた。Panorama Studio は Camera の無い状態を原点・回転 0 の ERP で撮る |
| `painting`・`painting_layer` | 同名のフィールド |
| `version`・`projection_model`・`alpha_mode` | 捨てる |
| `coverage`・`bg_color`・`output_preset` | 捨てる。ノードの入力（ウィジェット）が持つ |
| `ui_settings`・`active`・`editor_history` | 捨てる。エディタのセッションの状態であり、Scene ではない（`ui_settings` はブラウザ側にも保存されている）。エディタの選択状態（旧 `active`）は状態に置かない |
| `cutout_render_layer`、`source_state_hash`・`slot_key`・`source_kind`・`asset_id`、`assets` の `name`・`w`・`h` | 捨てる |
| `timeline` | 既定値（`fps: 24`、`length: null`）。v1 の `fps` 入力は状態にない |

Sticker の位置と見た目は変わらない。`yaw_deg` は範囲に丸めない（v1 の描画も丸めない）。

## `sticker_state` v2

`projection` が `perspective` の Camera を持つ Panorama Studio が出力し、別の Panorama Studio の `sticker_state` 入力が受け取る（Pose handoff）。

```json
{
  "kind": "pano_sticker_state",
  "version": 2,
  "fps": 30.0,
  "camera": {
    "position": [{"frame": 0, "value": [0.0, 0.0, 0.0], "easing": [0.42, 0, 0.58, 1]}],
    "rotation": [{"frame": 0, "value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}, "easing": [0.42, 0, 0.58, 1]}],
    "fov": [{"frame": 0, "value": 60.0, "easing": [0.42, 0, 0.58, 1]}]
  },
  "source_aspect": 1.5
}
```

| フィールド | 型 | 既定値 | 意味 |
|---|---|---|---|
| `kind` | `"pano_sticker_state"` | — | |
| `version` | `2` | — | |
| `fps` | 数値 | `24.0` | `camera` の `frame` の基準となる fps。撮った Studio の状態の `timeline.fps`（Timeline fps に再基準化しない） |
| `camera` | Lane ごとの Keyframe の配列（`position`・`rotation`・`fov`、`curve`（作る。無ければ κ = 1）） | 各 Lane に Keyframe 一つ | 各配列の形は `state_json` の `camera` の同名の Lane の `keyframes` と同じ。Keyframe のない Lane は、撮影した値を持つ `frame: 0` の Keyframe を一つだけ置く。空または不正な Lane は、既定値を持つ `frame: 0` の Keyframe 一つになる |
| `source_aspect` | 数値 または `null` | `null` | 撮影した画面の幅 ÷ 高さ |

`load_sticker_state(text)` / `loadStickerState(text)` は v1 と v2 を読み、どちらも v2 の形で返す（フィクスチャ：`sticker_state_v1.json`、`sticker_state_v2.json`）。

- v1（`pose` を一つ持つ形）は、従来の `parse_sticker_state` と同じ規則（yaw を −180〜180 に回す、pitch を ±89.9、`hFOV_deg` を 0.1〜179 に寄せる、`"30"` のような数値の文字列を許す）で読み、各 Lane に `frame: 0` の Keyframe を一つずつ置く（`position` は `[0, 0, 0]`、`easing` は既定値）。`fps` は `24`。
- 空、JSON でない、`kind` が違う、v1 の `pose` が読めない場合は `None` / `null` を返す（従来どおり無視される）。
- `kind` が一致して `version` が `1`・`2` 以外なら、エラー `Unsupported sticker_state version <値>; supported versions are 1 and 2.` にする。
