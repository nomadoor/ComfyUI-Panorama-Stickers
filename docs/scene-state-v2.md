# 状態 v2 と評価関数

Panorama Studio の `state_json`（状態 v2）、Camera を持つ Panorama Studio が出力する `sticker_state`（v3）、
「状態と時刻 → その時刻の値」を返す評価関数、fps の再基準化、上流の上書きの記録と当て方を定める。
用語は `CONTEXT.md` に従う。決めた理由は ADR 0023（座標）、0024（時間）、0025（Scene の正）、0026（Keyframe の Lane）、
0029（Panorama Studio）、0030（上流の上書き）、0032（v1 の読み替えで保たないもの）、0033（Timeline の上限）にある。

この文書が持たない規則：`port` の Sticker の扱いと Pose handoff（`docs/studio-node.md` の「`port` の Sticker と Pose handoff」）、
エディタでの表示と記録（`docs/timeline-ui.md`、`docs/threejs-spark-integration.md`、`docs/editor-interaction.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| 状態の読み込み（版の判定、v1 の読み替え、正規化） | `core/scene_state.py` `load_scene_state` | `web_src/pano_scene_state.js` `loadSceneState` | `tests/test_scene_state.py`、`tests/pano_scene_state.test.mjs`、`tests/test_scene_state_parity.py` |
| 既定の Camera（欠け・`null` の `camera` の読み方）と `camera.erp_range` | `scene_state.py` の `DEFAULT_CAMERA`・`_camera`・`_erp_range` | `pano_scene_state.js` の `DEFAULT_CAMERA`・`defaultCamera`・`camera`・`erpRange`（保存するテキストは `sceneStateText`） | フィクスチャ `camera_default` を読む `test_scene_state.py`・`pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| 地面の高さ `ground`（既定・欠けたときの読み方・上流からの受け継ぎ） | `scene_state.py` の `GROUND_DEFAULT`・`_ground`・`scene_ground`（ADR 0046） | `pano_scene_state.js` の `GROUND_DEFAULT`・`ground`・`sceneGround` | フィクスチャ `ground` を読む `test_scene_state.py`・`pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| パノラマの角度規約（yaw・pitch・roll と ERP の対応） | `core/math.py` `camera_basis`・`ray_directions`・`lon_lat_to_erp` | `web_src/pano_camera_math.js` | `tests/test_camera_orientation.py`、`tests/pano_camera_math.test.mjs` |
| Timeline の上限の定数 | `scene_state.py` の `TIMELINE_FPS_MIN`・`TIMELINE_FPS_MAX`・`TIMELINE_LENGTH_MAX`・`TIMELINE_FRAME_MAX` | `pano_scene_state.js` の同名の定数 | フィクスチャ `v2_timeline_limits` |
| `sticker_state` の読み込み | `scene_state.py` `load_sticker_state` | `pano_scene_state.js` `loadStickerState` | `test_scene_state.py`、`pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| 受け渡しの置き方（`sticker_state` が届いている `port` の Sticker の向き・大きさを、撮った Camera と、Camera の差としてのずらしから求める規則） | `scene_eval.py`（評価関数の引数 `shot`） | `pano_scene_eval.js`（同じ引数） | フィクスチャ `tests/fixtures/scene_state/v2_handoff.json`（Python と JS が同じファイルを読む） |
| 評価関数と補間 | `core/scene_eval.py` `evaluate_scene_state` | `web_src/pano_scene_eval.js` `evaluateSceneState` | `tests/test_scene_eval.py`、`test_scene_state_parity.py` |
| 形と進み具合（位置の自動の形と角の Keyframe、長さで測る `PATH_SAMPLES`、Smooth の端の速さ）、物ごとのループ | `scene_eval.py` の `PATH_SAMPLES` と補間の部品 | `pano_scene_eval.js` の `PATH_SAMPLES` と補間の部品（エディタの軌道の線も同じ部品を呼ぶ。`docs/studio-ui.md` の「軌道の線」） | フィクスチャ `v2_shape_progress`・`v2_loop`（Python と JS が同じファイルを読む）、`test_scene_eval.py` |
| Look at（Camera の `look_at` の Lane の読み込みと、向く相手から向きを求める規則） | `scene_state.py` の読み込み、`scene_eval.py` の評価、方向から向きへの変換は `core/world.py`（`look_rotation`） | `pano_scene_state.js`・`pano_scene_eval.js`、変換は `web_src/pano_world.js`（`lookRotation`） | フィクスチャ `v2_look_at`（Python と JS が同じファイルを読む） |
| 素材の先頭（`start − in`）と、Timeline frame から素材の先頭からのフレームへの直し方（`frame − (start − in)`） | `scene_eval.py` `_clip_frame` | `pano_scene_eval.js` `clipOrigin`・`clipFrame`（エディタ・タイムライン・`port` の素材の時刻も呼ぶ） | `tests/pano_scene_eval.test.mjs`、評価の `clip_frame` を比べる `test_scene_state_parity.py` |
| fps の再基準化 | `scene_state.py` `rebase_scene_state` | `pano_scene_state.js` `rebaseSceneState` | `test_scene_state.py`、`pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| 上書きの記録の再基準化 | `scene_state.py` `rebase_upstream_record` | `pano_scene_state.js` `rebaseUpstreamRecord` | `tests/test_scene_inherit.py`、`tests/pano_scene_inherit.test.mjs`、`tests/test_upstream_editor_parity.py` |
| 上書きを当てる | `core/scene_inherit.py` `apply_upstream_overrides` | `web_src/pano_scene_inherit.js` `applyUpstreamOverrides` | `test_scene_inherit.py`、`pano_scene_inherit.test.mjs` |
| 保存するテキスト（既定値を書かない） | — | `pano_scene_state.js` `sceneStateText` | `pano_scene_state.test.mjs`、`test_scene_state_parity.py` |
| Scene の id を振る | — | `web_src/pano_editor_state.js` `editorStateWrite`・`newSceneId` | `tests/pano_editor_state.test.mjs` |
| Sticker の id の採番 | 正規化は `load_scene_state`、加えるときは `port_sticker.py` `_take_sticker_id` | 正規化は `loadSceneState`、加えるときは `pano_editor_state.js` `takeStickerId` | `pano_editor_state.test.mjs`、`tests/test_studio_node.py`、フィクスチャ `v2_upstream` |
| `port` の Sticker の vFOV | `core/render.py` の `StickerSource`（`derive_vfov`）、式は `core/math.py` `vfov_from_hfov` | `pano_editor_state.js` `skyStickerVfov` | `tests/test_sky_sticker_vfov_parity.py` |
| ペイントの `version` と group の `z_index` の読み方 | `core/paint_state.py` `normalize_painting_state`・`_js_round` | `web_src/pano_paint_types.js` `normalizePaintingState` | フィクスチャ `tests/fixtures/painting_normalize.json` を読む `tests/test_paint_state_parity.py`・`tests/pano_paint_state_parity.test.mjs` |
| ペイントのストロークの筆の値（`hardness`・`flow`・`spacing` の `null`、筆の形の項目の既定値と範囲） | `core/paint_state.py` `_normalize_brush` | `web_src/pano_paint_types.js` `normalizeBrush` | フィクスチャ `tests/fixtures/paint_stroke_brush.json` を読む `tests/test_paint_state_parity.py`・`tests/pano_paint_state_parity.test.mjs` |
| ペイントの数値の読み方（ストローク・点・ラスタの数値と、不正なときの扱い） | `core/paint_state.py` `_finite_float` | `web_src/pano_paint_types.js` `finiteNumber` | フィクスチャ `tests/fixtures/painting_numbers.json` を読む `tests/test_paint_state_parity.py`・`tests/pano_paint_state_parity.test.mjs` |
| Sky の重なり順 | `core/display_list.py` `build_display_entries` | ペイントの並びは `web_src/pano_paint_layers.js` `skyPaintLayers` | `tests/test_display_list_core.py`、`tests/test_paint_layers_parity.py` |
| `file` の Source が 3D ファイルか | `scene_state.py` `is_3d_file_source`・`FILE_3D_EXTENSIONS` | `pano_scene_state.js` `is3dFileSource`・`FILE_3D_EXTENSIONS` | フィクスチャ `file_3d_formats` を専用に読む `test_scene_state_parity.py`・`pano_scene_state.test.mjs` |

フィクスチャは `tests/fixtures/scene_state/`（状態と `sticker_state`）と `tests/fixtures/scene_inherit/`（上書き）にあり、
Python と JS の両方の test が同じファイルを読む。Python と JS の数値の一致の許容差は 1e-4 とする。

## 共通の規則

- 数値は JSON の数値だけを受け付ける。文字列・真偽値・`null`・非有限値は不正とする。float にできないほど大きな整数も、非有限値と同じく不正（既定値）とする。
- 整数のフィールド（`frame`、Clip range、`length`、Sticker の `z_index`）は、数値を `floor(x + 0.5)` で整数に丸めて保存する。fps の再基準化で Timeline frame を整数に丸めるときも、同じ `floor(x + 0.5)` を使う。Keyframe の `frame` と Clip range の `start`・`in`・`duration` は、丸めたあと ±10,000,000（`TIMELINE_FRAME_MAX`）の内に寄せる。
- JSON の `NaN`・`Infinity`・`-Infinity` のリテラルは受け付けない（JS の `JSON.parse` と同じく、JSON として読めないものとして扱う）。
- 不正な値は、そのフィールドの既定値に戻す。範囲外の値は範囲の端に寄せる。状態全体を捨てることはしない。
- 旧ノードの `merge_state`・`parse_sticker_state`（`core/state.py`）も、同じ JSON の読み方（`scene_state.py` の `parse_json`。`NaN`・`Infinity` のリテラルは JSON として読めず、float にできない整数は非有限値）で読み、一つの値のために状態全体を捨てない。`merge_state` は Sticker と shot の中の非有限の値をキーごと除き、読む側がそのフィールドの既定値を使う。
- 正規化は冪等である。`load_scene_state` の結果をもう一度読むと同じ結果になる。
- 未知のフィールドは読み込み時に捨てる。状態 v2 には、どのコードも読まない予約項目を置かない。Clip range 外の保持などは、実装するときに項目を追加する。
- 出力のキーの順序は、この文書の表の順とする（Python と JS で同じ）。

### 座標と角度

| 種類 | 規約 | 該当するフィールド |
|---|---|---|
| 位置（`position`、`handles.in` / `handles.out`） | World の glTF 座標（右手系、Y 上、前方 `-Z`）。単位は入力素材のまま | `camera`・`scene`・`world` の Sticker の `position` の Lane |
| 回転（`yaw_deg`・`pitch_deg`・`roll_deg`） | 既存のパノラマの角度規約（`core/math.py` の `camera_basis` と同じ。正の yaw は右、正の pitch は上、正の roll は画像を時計回りに回す）。単位は度 | `rotation`・`direction`・`roll` の Lane |
| FOV・角度サイズ（`hFOV_deg`・`vFOV_deg`） | 度。`hFOV_deg` は水平方向の全画角 | `camera` の `fov`、`sky` の Sticker の `size` |
| `scale` | 素材の単位に対する倍率（一様） | `scene`・`world` の Sticker の `scale` |

角度規約と World の間の変換（Z の反転）は `core/world.py` と `web_src/pano_world.js` だけが行う。この契約のコードは変換をしない。World の方向 `d = (x, y, z)` を向く yaw と pitch を求める変換（Look at が使う）も、同じ二つのファイルに置く（`look_rotation` / `lookRotation`）：`yaw_deg = atan2(x, −z)`、`pitch_deg = atan2(y, √(x² + z²))`（World の前方 `-Z` が、角度の規約の正面 +Z に当たる）。エディタの、物を点に向ける計算（`web_src/space/placement.js` `facingRotation`、`web_src/studio/landing.js` `facingYaw`）は、この変換を呼ぶ。回転 0 の `world` の板は、回転 0 の Camera の正面に置くと Camera の方を向く。

パノラマの角度規約（`core/math.py` の `camera_basis`・`ray_directions`・`dir_to_lon_lat`・`lon_lat_to_erp`、JS は `web_src/pano_camera_math.js`）：

- 角度の座標は +X が右、+Y が上、+Z が正面（左手系）。World の glTF 座標とは Z が逆で、変換は上の一か所だけで行う。
- yaw（経度）は `atan2(x, z)`。0 が正面、+90 が右、−90 が左、±180 が背面（ERP の左右の端の継ぎ目）。範囲に丸めて表すときは −180 以上 180 未満（`core/state.py` の `_wrap_yaw`）。状態の yaw は丸めない（下の Lane の規則）。
- pitch（緯度）は −90〜90 で、0 が水平線、+90 が天頂。
- ERP の画像は、左から右へ経度 −180〜180（`coverage` 180 では −90〜90）、上から下へ緯度 90〜−90。画素の中心で標本化する。
- Camera の向きは `Ry(yaw) @ Rx(−pitch) @ Rz(roll)`。正の yaw は右を、正の pitch は上を向き、正の roll は画像を時計回りに回す。同じ基底を、Camera は見る側として、`sky` の Sticker は空に貼る側として使うので、正の roll で Camera の写す絵は時計回りに回り、`sky` の Sticker の画像は中から見て反時計回りに回る。

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
  "camera": {"aspect": 1.0, "projection": "perspective", "loop": false, "position": {...}, "rotation": {...}, "fov": {...}, "curve": {...}, "look_at": {...}},
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
| `camera` | オブジェクト | 既定の Camera | Camera（下記）。欠け・`null`・オブジェクトでない値は既定の Camera（下記「既定の Camera」）として読む。Panorama Studio の Camera はいつも一台ある（ADR 0048。ADR 0029 の「`null` は Camera が無い」を置き換える） |
| `camera.aspect` | 数値 | `1.0` | 0 以下は既定値。Camera の画面の幅 ÷ 高さ。`projection` が `erp` のときは使わない。1/2048〜2048 に寄せる（`scene_state.py` の `camera_aspect`・`CAMERA_ASPECT_LIMIT`、`pano_scene_state.js` の `cameraAspect`・`CAMERA_ASPECT_LIMIT`。フィクスチャ `camera_aspect`）。新しい UI の出力の大きさ（`docs/studio-node.md`。`STUDIO_MAX_OUTPUT_SIDE` 8192、短い辺は `multiple`（8 以上）より小さくならない）では、比が 8192 ÷ 8 ＝ 1024 より細いと短い辺は `multiple` に張り付くので、2048 より細い比は出力の大きさを変えない（範囲の外の値を端に寄せても出力は同じ）。プリセット（1:1・4:3・3:2・16:9 とその縦向き）、インスペクタの Aspect の欄（0.25〜4、`CAMERA_ASPECT_MIN`・`CAMERA_ASPECT_MAX`）はこの中にある。Frame の比の入力（任意の正の数の組）と v1 の Cutout の読み替え（FOV 1〜179 からの比で、最大約 13,131）はこの範囲に寄せ、寄せても出力は変わらない |
| `camera.projection` | `"perspective"` または `"erp"` | `"perspective"` | それ以外は既定値。撮り方のモードで、Keyframe を持たない。使う人が選ぶ（表示名は `erp` が Panorama、`perspective` が Frame。ADR 0048）。モードを変えても、もう一方のモードの値（`fov`・`aspect`・`curve`・`erp_range`）は保つ。`erp` は Camera の位置と回転から ERP を撮り、`fov` と `aspect` と `curve` を読まない。`perspective` は Camera の画像で、レンズの曲線 `curve`（κ）で直線の像から魚眼までをつなぐ（`docs/render-contract.md` の「カメラのレンズ」） |
| `camera.erp_range` | `360` または `180` | `360` | それ以外は既定値。Panorama モードで撮る範囲（180 は Camera の前方の半球）。Keyframe を持たない。`perspective` では読まない。背景の範囲（Panorama Studio の `background_range`）とは独立（ADR 0048） |
| `camera.visible` | 真偽値 | `true` | 真偽値でなければ既定値。`false` は Camera を置いたまま非表示にする。表示だけの切り替えで、Panorama Studio は非表示の Camera でも同じに撮る（ADR 0048。下記） |
| `camera.locked` | 真偽値 | `false` | 真偽値でなければ既定値。Camera のロック（下のバーと Camera タブの操作を止める。`docs/studio-ui.md`）。Sticker の `locked` と同じく保存し、既定値のときは書かない。Python は読むだけで、描画には使わない（ロックしても同じに撮る） |
| `camera.position`・`camera.rotation`・`camera.fov` | Lane | 下記 | Camera の値（Viewport camera は保存しない） |
| `camera.curve` | Lane | 下記 | レンズの曲線 κ（ADR 0042）。`erp` では読まない |
| `camera.loop` | 真偽値 | `false` | 真偽値でなければ既定値。Camera の動きをループさせる（下記「ループ」。ADR 0064）。既定値のときは保存するテキストに書かない |
| `camera.look_at` | Lane | 下記 | Camera が向く相手（下記「Lane」と「Look at」。ADR 0065）。相手が無く Keyframe も無いときは、保存するテキストに書かない |
| `scene.clip` | Clip range | 下記 | `scene` 入力が有効な範囲 |
| `scene.visible` | 真偽値 | `true` | 真偽値でなければ既定値。`false` なら `scene` 入力を描かない |
| `scene.position`・`scene.rotation`・`scene.scale` | Lane | 下記 | `scene` 入力に掛ける変形 |
| `scene.animation` | オブジェクト または欠け | 欠け | `scene` 入力の 3D ファイルの glTF のアニメーション（ADR 0043）。形は下の Sticker の `animation` と同じ |
| `stickers` | 配列 | `[]` | `sky` の層は `z_index`（ペイントと共通の軸）で並べ、同じ値ならリストの順（先頭が奥）。`world` の Sticker は奥行きで重なる |
| `next_sticker_id` | 整数 | 下記 | 次に加える Sticker の番号 `n`（`sticker_<n>`）。下記「Sticker の id の採番」 |
| `painting` | オブジェクト | 空のペイント | 既存の `normalize_painting_state` / `normalizePaintingState` で正規化する。`sky` の静的な層。`targetSpace.kind` が `ERP_GLOBAL` でないストローク（旧 `FRAME_LOCAL` など）は読み込みで捨てる（ADR 0063）。`version` は保存された値によらず常に `1`。group とラスタ（`raster_objects`）の `z_index` は、`z_index`、次に `zIndex` のうち最初の有限の JSON の数値（真偽値と文字列は数えない。double にできない大きな整数は有限でない）で、どちらにも無いときは groups（raster_objects）の中の順番にする。エディタは数値を書くので、文字列はテキストを手で書いた状態にだけ現れる。group の値は `Math.round` と同じ丸め（半分は +∞ の向き。−2.5 は −2）、ラスタの値は丸めず、どちらも 0 以上に寄せる。group の `locked` はエディタだけが使う（ノードは描画に使わない）ので、Python の読み込みは持たない。group の `rot_deg`（任意。まとまりの枠の向き：中心の向きのまわりの回転で、正は中から見て時計回り。roll との向きの関係は上の角度規約の項、枠の作り方は `docs/studio-ui.md` の「ペイントのまとまり」。点はすでに回してあり、枠と回転のハンドルを点と一緒に回して描くためだけに持つ）も同じくエディタだけが使い、Python の読み込みは持たない。JS の読み込みは、有限の JSON の数値ならそのまま（範囲に丸めない。360° の差は同じ向き）、無いときと不正なときは 0 にする（下記「ペイントの数値」の `finiteNumber`。この項目が無い古い状態は 0 で読む）。ラスタの `locked` もエディタだけが使い（ノードは描画に使わない）、Python の読み込みはその値を保つ。ほかの数値は下記「ペイントの数値」 |
| `painting_layer` | オブジェクト または `null` | `null` | ペイントのラスタ画像の参照。中身はそのまま保つ |
| `painting_visible` | 真偽値 | `true` | 真偽値でなければ既定値。`false` ならペイント（ストローク・ラスタ・マスク）を描かず、MASK にも出さない |
| `ground` | 数値 または欠け | 欠け | 地面の高さ（World の y。ADR 0046）。数でない値・有限でない値は欠けとして読む。欠けているときは、上流の Scene があれば上流の層の `ground`（最も下流で `ground` を持つ層のもの）、無ければ `GROUND_DEFAULT`（-1.6）として読む。正規化の結果には欠けのまま残し、読む側（評価関数と、下の読む場所）が既定の規則で値を求める。使う人が「ここを地面にする」で変えたときだけ値が入る（`docs/studio-ui.md` の Scene のカード、`docs/space-and-view.md` の目の高さ `E`）。読む場所：エディタのグリッドと置く物の位置（JS）、ノードが置く 3D の `port` の Sticker の位置（Python `port_sticker.py` の `_world_port_sticker`。ADR 0046 の「ノードが置く 3D の `port` の Sticker も地面の上に置く」）、`PANO_SCENE` の下流での上流の層の `ground`（Python・JS） |
| `upstream` | 配列 | `[]` | 上流の Scene の要素への上書き。下記「上流の上書き（`upstream`）」 |
| `background.clip` | Clip range | 下記 | 自分の `background` 入力が Timeline 上で有効な範囲（下記「背景の Clip range」）。`background` が欠け・オブジェクトでないときも既定の Clip range |

`scene` は、`scene` 入力が接続されていなくても常に存在する。

`camera` は、Camera をちょうど 1 台持つ（ADR 0029、ADR 0048）。正規化した結果は常にオブジェクトで、`aspect`・`projection`・`erp_range`・`visible`・`locked`・`loop`・`position`・`rotation`・`fov`・`curve`・`look_at` をこの順に持つ。

#### 既定の Camera

`camera` が欠け・`null`・オブジェクトでないときは、次の Camera として読む（Python `scene_state.py` と JS `pano_scene_state.js` の同じ定数。
フィクスチャで守る）：`aspect` 16 / 9、`projection` `erp`（Panorama モード）、
`erp_range` 360、`visible` `true`、`locked` `false`、`position` (0, 0, 0)、`rotation` yaw 0・pitch 0・roll 0、`fov` 90、`curve` 1。どの Lane も Keyframe を持たない。
この Camera の出力は、今までの「Camera が無い」ときの出力（World の原点から回転 0 の 360° の ERP）と同じである。
- 既定の Camera の値（`aspect` 16 / 9・`fov` 90 など）の持ち主はこの定数一つである。新しい UI は既定の Camera をこの定数から作る（`web_src/studio/defaults.js`）。
- オブジェクトの `camera` の欠けたフィールドは、今までどおり上の表の既定値（`aspect` 1.0、`projection` `perspective` など）で埋める。
  既定の Camera の値と表の既定値が違うのは、オブジェクトの欠けたフィールドを読み替えると、これまで保存した Camera の撮り方が変わるため
  である（保存するテキストは `perspective` を書かないので、`projection` の既定を `erp` にすると、保存した Frame の Camera が Panorama に
  変わる）。

表示（`visible`）は、Camera・`scene`・Sticker・ペイントのそれぞれが持つ。エディタのタイムラインの各行の目のアイコンで切り替える（`docs/timeline-ui.md`）。ペイントの表示は、旧ノードと共有する `painting` の形（`normalize_painting_state`）を変えないように、`painting` の中ではなく最上位の `painting_visible` に置く。

- 非表示の `scene` と Sticker は、評価関数の `active` が偽になる（下記「評価関数」）ので描かれない。Clip range・Keyframe・値はそのまま保ち、出力の長さにも今までどおり数える（表示の切り替えで長さは変わらない）。
- 非表示のペイントは描かない（`scene_build.py` の `_resolve_sources` が空のペイントを渡す）。
- 非表示の Camera は状態に残り、今までどおり撮る（表示だけの切り替え。ADR 0048。`docs/studio-node.md`）。評価関数は今までどおり値を返す。Camera の Keyframe は表示によらず出力の長さに数える。

- ノードでの扱い：状態 v2 を読み書きするのは Panorama Studio だけで、欠け・`null` の `camera` は既定の Camera として読む（`docs/studio-node.md` の「Panorama Studio」）。エディタは Camera を消さない（消す操作は無い）。Camera のボタンで Camera を今の視点へ持ってくるのは、Camera の Lane の編集である（`docs/studio-ui.md`）。
- 既存の状態：`camera` のオブジェクトを持つ状態は、そのまま読み、`projection` は書いてあればその値、無ければ `perspective` になる。`camera` が `null` の状態（今までの「Camera が無い」）は既定の Camera（Panorama、原点）として読み、出力は今までと同じ（`coverage` が 180 だった Studio は、Camera の `erp_range` が既定の 360 になるので出力が変わる。Panorama Studio は公開前なので、移す手順は持たない。ADR 0048）。fps の再基準化は状態全体と同じく `camera` の時刻も直す。
- レンズの値：Keyframe が無く `value` が既定値（1）の `curve` の Lane は、保存するテキストに書かない（下の「保存するテキスト」と同じ理由で、今の状態のテキストとノードのキャッシュを変えない）。既定値ではノードの出力も今と同じになる。読み込みは欠けたら既定値にする。
- 保存するテキスト：エディタとノード上の UI は `sceneStateText`（`pano_scene_state.js`）で `state_json` を書く。正規化した状態をそのまま JSON にするが、後から足した項目は既定値のときは書かない：`camera.projection` の `perspective`、`camera.erp_range` の 360、`camera.visible`・`scene.visible`・`painting_visible` の `true`、`camera.locked` の `false`。欠けた `ground` は欠けのまま書かない（値が入っているときだけ書く）。`camera` が既定の Camera と同じ（どの値も既定の Camera の値で、Keyframe が無い）ときは、`"camera": null` と書く（読み込みで既定の Camera に戻る。今までの「Camera が無い」状態のテキストも `"camera": null` なので、保存したテキストとノードのキャッシュが変わらない）。ComfyUI の実行のキャッシュは `state_json` のテキストを比べるので、これらを書くと、その項目より前に保存した状態をエディタで開いて閉じただけで再実行になる。書かなくても、読み込みで既定値に戻るので意味は変わらない（`load_scene_state` の結果を書き出して読むと同じ結果になる）。既定値でないとき（`erp`、非表示）だけ書く。同じ理由で、ADR 0030 の項目も次のときは書かない：`id` の `null`、空の `upstream`、`port` の Sticker の、Keyframe が無く既定値のずらしの Lane（`offset_rotation`・`offset_fov`）、Sticker から求まる値（下記「Sticker の id の採番」の最小値）と同じ `next_sticker_id`。既定の Clip range（`start` 0・`in` 0・`duration` `null`）の `background` も書かない（`pano_scene_state.js` の `defaultClip`）。Python は `state_json` を書かないので、この関数を持たない。
- 動きの項目（ADR 0064、ADR 0065）も、既定値のときは保存するテキストに書かない：Keyframe の `easing` の Smooth（下記「Keyframe」）、Keyframe の `corner` の `false`、`camera.loop` と Sticker の `loop` の `false`、相手が無く Keyframe も無い `camera.look_at`。

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
| `camera` | `fov` | `hFOV_deg` の数値（`90`、保存は 0.1〜360。評価した値は、評価した `curve` の κ による画角の上限（式は `docs/render-contract.md` の「カメラのレンズ」、`lens_fov_limit`・`lensFovLimit`）に寄せる）。画像の横の端の光線が光軸となす角の 2 倍 |
| `camera` | `curve` | レンズの曲線 κ の数値（`1`、0〜1）。1 が直線の像、0.5 が立体射影、0 が等距離射影の魚眼。写し方の式は `docs/render-contract.md` の「カメラのレンズ」 |
| `camera` | `look_at` | 向く相手（下記「向く相手の値」。既定値は相手なしの `null`）。数値の Lane ではなく、ハンドルを持たない |
| `scene`・`world` の Sticker | `position` | 位置（`[0, 0, 0]`） |
| `scene`・`world` の Sticker | `rotation` | 回転 |
| `scene`・`world` の Sticker | `scale` | 数値（`1`、0 以下は既定値） |
| `sky` の Sticker | `direction` | `yaw_deg`（`0`）、`pitch_deg`（`0`、−90〜90） |
| `sky` の Sticker | `roll` | `roll_deg` の数値（`0`） |
| `sky` の Sticker | `size` | `hFOV_deg`（`20`、保存は 0.1〜360）、`vFOV_deg`（`20`、保存は 0.1〜360）。評価した値は、評価した `curve` の κ による上限（Camera の `fov` と同じ）に寄せる |
| `sky`・`world` の Sticker | `opacity` | 数値（`1`、0〜1） |
| `world` の Sticker | `lens` | 持たない（既定）か、`curve`（κ、`1`、0〜1）と `hFOV_deg`（`90`、0.1〜360、κ による上限（Camera の `fov` と同じ）に寄せる）の組（ADR 0042）。持たない Sticker は平らな板、持つ Sticker は κ = 1 も含めていつも球面の一部の板（`docs/render-contract.md` の「`world` の Sticker の板」。κ を Keyframe で 1 をまたいで動かしても形が跳ばない） |
| `port` の Sticker | `offset_rotation` | 撮った Camera の向きからの、向きのずらし。回転と同じ形（`yaw_deg`・`pitch_deg`・`roll_deg`、どれも `0`）で、撮った Camera の自分の軸で測る（下記「受け渡しの置き方」。ADR 0067） |
| `port` の Sticker | `offset_fov` | 撮った Camera の画角に掛ける倍率の数値（`1`、0 以下は既定値） |
| `sky` の Sticker | `curve` | レンズの曲線 κ の数値（`1`、0〜1。ADR 0042）。Camera の `curve` と同じ写し方で、素材をその κ のレンズの像として向きに置く（`docs/render-contract.md` の「Sky の描き方」）。`size` の画角の上限は Camera の `fov` と同じ。保存するテキストでは `opacity` の後、`z_index` の前に置く |

回転は `yaw_deg`（`0`）、`pitch_deg`（`0`、−90〜90）、`roll_deg`（`0`）である。欠けたフィールドや不正なフィールドは、Lane の `value` ではなく、このフィールドの既定値になる。Lane 自体が欠けている・オブジェクトでないときは `{"value": 既定値, "keyframes": []}` になり、`value` が数値の Lane で `value` が不正なときも既定値になる。

- `position` は 3 つの有限の数値の配列で、一つでも不正なら全体が既定値になる。
- `yaw_deg`・`roll_deg` は範囲に丸めない。360° の差は同じ向きを表す。
- `sky` の Sticker の `direction` は yaw と pitch を一つの Lane にまとめる。別々に補間すると、球面上をまっすぐ進まないためである。
- `sky` の Sticker の値は、中心の方向（`direction`）、画面内の回転（`roll`）、角度サイズ（`size`）である。
- `sky` の Sticker の `curve` は Lane にする。`sticker_state` が届いている `port` の Sticker は、自分の `curve` ではなく、撮った Camera の `curve` を使う（下記「受け渡しの置き方」）。
- Source が `port` の Sticker の vFOV は、`hFOV_deg` と素材（最初のフレーム）のアスペクト比から求める派生値で、状態には書かない。ポートの素材は状態の外で差し替わるためである。ノードは描くときに求め（`core/render.py` の `derive_vfov`）、エディタとノード上の表示も描くときと当たり判定のときに同じ式で求める（`web_src/pano_editor_state.js` の `skyStickerVfov`）。`port` の Sticker を加えるときは `vFOV_deg` を `hFOV_deg` と同じ値で保存し（Keyframe も同じ）、素材が読み込まれても書き直さない。これで素材の読み込みが `state_json` を変えず、実行の key（`docs/studio-node-surface.md` の「一行の状態」）がずれない。保存された `vFOV_deg` は、素材の大きさがわかるまでの表示にだけ使い、エディタで `port` の Sticker の大きさを変えても `hFOV_deg` だけを書く（inspector の V FOV は無効）。ノードが加える `port` の Sticker（Pose handoff の Keyframe を含む）も `vFOV_deg` を `hFOV_deg` と同じ値にする。 κ ≠ 1 では、像の中心の `f` が縦横で同じになるよう `g_κ(vFOV ÷ 2) = g_κ(hFOV ÷ 2) × 高さ ÷ 幅` から求める（`core/math.py` の `vfov_from_hfov(..., curve)`。`g_κ` は `docs/render-contract.md` の `lens_radius`。κ = 1 では `tan` の式）。

#### 向く相手の値

`camera.look_at` の Lane の値は、次のどれかである（ADR 0065）。

```json
{"sticker": "sticker_3", "offset": [0.0, 0.35, 0.0]}
{"point": [1.0, 1.2, -3.0]}
null
```

| 形 | 意味と正規化 |
|---|---|
| `{"sticker": <id>, "offset": [x, y, z]}` | 自分の状態の `world` の Sticker と、その Sticker の上の一点。`offset` は、Sticker の中身の箱（下記「Look at」の「中身の箱」）の中心からのずれを、箱の大きさに対する割合で表す（成分ごと。`[0, 0, 0]` が中心、`[0.5, 0, 0]` が右の端）。割合で持つので、中身を入れ替えても（Replace）、切り抜きや縦横比が変わっても、同じ所（顔など）を指し続ける。Sticker の `rotation` と `scale` は、その上に掛かる。`sticker` が空でない文字列でなければ `null`。`offset` が 3 つの有限の数値でなければ `[0, 0, 0]` |
| `{"point": [x, y, z]}` | World の一点（glTF 座標）。3 つの有限の数値でなければ `null` |
| `null` | 相手なし。Camera の向きは `rotation` の Lane で決まる |

- `sticker` の id の Sticker が状態に無い、または `sky` の Sticker のときは、評価で相手なしとして扱う（値は保つ。Sticker を消して Undo で戻したときに、相手が戻る）。
- 上流の層の Sticker は相手にできない（自分の状態の Sticker だけ）。
- エディタは、ほかの Lane と同じ記録の規則で書く：Keyframe が無ければ `value`（相手一つが Timeline の全体に効く）、あれば再生ヘッドの時刻の Keyframe（`docs/studio-ui.md` の「Look at」）。

### Keyframe

```json
{"frame": 24, "value": <値>, "easing": [0.42, 0, 0.58, 1], "corner": false, "handles": {"in": [x, y, z], "out": [x, y, z]}}
```

| フィールド | 型 | 正規化 |
|---|---|---|
| `frame` | 整数 | 基準は「時間」の節のとおり。負の値も許す。数値でなければその Keyframe を捨てる |
| `value` | Lane の値の形 | Lane と同じ規則 |
| `easing` | `[x1, y1, x2, y2]`、`"hold"`、または `"smooth"` | この Keyframe から次の Keyframe までの区間の Easing。区間の形の上をどう進むかだけを決め、形は変えない（下記「補間」）。既定値は Smooth（`"smooth"`）。欠けた値、読めない値、`"auto"`（前の版の値）は Smooth として読む。Smooth は保存するテキストに書かない。最後の Keyframe の `easing` は使われない（ループする持ち主では、最後の Keyframe から最初の Keyframe へ戻る区間に使う） |
| `corner` | 真偽値（任意） | `position` の Lane だけが持つ。それ以外では捨てる。`true` は角の Keyframe（軌道がそこで折れる）。真偽値でなければ `false`。`false` は書かない |
| `handles` | オブジェクト（任意） | `position` の Lane だけが持つ。それ以外では捨てる |

- `keyframes` は `frame` の昇順に並べる。同じ `frame` が複数あるときは、入力で後にあるものを残す。
- Smooth は、何も設定していない区間の Easing である。動きの始まりと終わり（最初・最後の Keyframe、`hold` の隣）ではゆっくり出て止まり、間の Keyframe は前後と速さをつないで止まらずに通る（下記「補間」の「進み具合」）。Easing を書かずに値だけを並べた状態（ほかの道具が書いたものなど）は、そのまま滑らかに動く。
- cubic-bezier は CSS の `cubic-bezier(x1, y1, x2, y2)` と同じで、単位正方形の (0, 0) から (1, 1) への曲線の制御点である。横軸は区間内の時間、縦軸は進み具合。4 つとも 0〜1 でなければならず、外れたもの・数値が 4 つでないものは Smooth になる。`y1`・`y2` も 0〜1 に限るので、値は区間の両端の値の間を外れない（行き過ぎない）。cubic-bezier の区間は、書かれた曲線のとおりに進む（評価関数は曲線を変えない）。同じ値の Keyframe を二つ置いた区間は完全に止まる。
- `"hold"` は、次の Keyframe の `frame` まで値を保ち、その時刻で次の値へ瞬時に切り替える。Camera ではこれが Cut になる。
- `"auto"` は前の版の値で、読み込みで Smooth にする。前の版の `auto` は間の Keyframe を通るだけで、動きの始まりと終わりではゆるまなかったので、`auto` を使っていた状態は、端の動きが変わる（ADR 0064）。
- Motion path のハンドル `handles.in` / `handles.out` は、その Keyframe の `position` からの相対的なずれで、World の glTF 座標で表す。`in` は前の Keyframe から来る軌道、`out` は次の Keyframe へ向かう軌道の接線を決める。ハンドルは軌道の形だけを決め、進む速さは変えない。どちらも任意で、ないほうは自動で滑らかにする。不正なハンドルは捨て、両方ないときは `handles` 自体を置かない。
- 点の種類（`docs/studio-ui.md` の「軌道の線」の Auto・Bezier・Corner）は、`corner` と `handles` から決まる派生の値で、状態には書かない：`corner` が `true` なら Corner、そうでなく `handles` があれば Bezier、どちらも無ければ Auto。
- cubic-bezier・Smooth・ハンドル・角の計算は「補間」の節で定める。

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

`background.clip` は、Panorama Studio 自身の `background` 入力を Sticker の素材と同じ規則で Timeline に置く。形・正規化・fps の再基準化は Sticker の Clip range と同じである。

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
  "loop": false,
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
| `loop` | 真偽値 | `false` | 真偽値でなければ既定値。この Sticker の動きをループさせる（下記「ループ」。ADR 0064）。既定値のときは保存するテキストに書かない |
| `crop` | `x0`・`y0`・`x1`・`y1`（0〜1） | 全体 | 2D の素材の切り抜き。素材の正規化座標（左上が原点）。0〜1 に寄せた後、`x0 ≤ x1`・`y0 ≤ y1` になるよう並べ替える（旧描画の min / max による正規化と同じ） |
| `direction`・`roll`・`size` | Lane | 上記 | `sky` の Sticker だけが持つ（`world` では捨てる） |
| `position`・`rotation`・`scale` | Lane | 上記 | `world` の Sticker だけが持つ（`sky` では捨てる） |
| `opacity` | Lane | `1` | 不透明度 |
| `curve` | Lane | `1` | `sky` の Sticker だけが持つ（上の Lane の表。`world` では捨てる） |
| `lens` | Lane または欠け | 欠け | `world` の Sticker だけが持てる（上の Lane の表。`sky` では捨てる） |
| `animation` | オブジェクト または欠け | 欠け | 3D ファイル（`file` の 3D ファイルの Source と、`port` の 3D ファイルの素材）の glTF のアニメーション（ADR 0043。`scene_state.py` の `_animation`、`pano_scene_state.js` の `animationValue`。`tests/test_scene_state.py`・`tests/pano_scene_state.test.mjs`、フィクスチャ `v2_animation` を読む `tests/test_scene_state_parity.py`）。`{"clip": 文字列 または null, "speed": 数値}`。`clip` は clip の名前で、`null` は最初の clip（コアの Load3D が最初に選ぶもの）。`speed` は 0.1〜10 の連続の値（Load3D の 0.1・0.5・1・1.5・2 の選択を含む。既定 1、0 以下を含む範囲の外は 0.1〜10 に寄せ、数値でなければ既定値）。Keyframe を持たず、ワークフローに保存する（Load3D の値も時間で変わらない。形はオーナーが承認、2026-10-11）。欠けていれば `{"clip": null, "speed": 1}` と同じ（置いたファイルは最初の clip でタイムラインに沿って動く。Load3D が最初の clip を選ぶのに合わせ、時計は再生ヘッドだけ）で、既定値は保存するテキストに書かない。名前の clip がファイルに無ければ最初の clip にし、警告を出す。アニメーションの無いファイルでは読まない。時刻の規則は `docs/render-contract.md` の「glTF のアニメーション」 |
| `z_index` | 整数 | `0` | `sky` の Sticker だけが持つ（`world` では捨てる）。読み込みで `floor(x + 0.5)` に丸める。数値でない・非有限の値は既定値。下記「Sky の重なり順」 |
| `offset_rotation`・`offset_fov` | Lane | 上記 | `port` の Sticker だけが持つ（ほかでは捨てる）。`sticker_state` が届いている間の、撮った Camera からのずらし。Keyframe が無く `value` が既定値の Lane は、保存するテキストに書かない |
| `handoff_overrides` | — | — | 前の版の項目。読み込みで捨てる（ADR 0063、ADR 0067。前の版で上書きしていた Lane の印は引き継がず、`sticker_state` が届いている Sticker は、ずらし無しで撮った Camera に従う） |

#### Sticker の id の採番

Sticker の `id` は、一度使った値を別の Sticker に使い直さない。下流の Studio の上書き（`upstream`）と消した記録は上流の Sticker の `id` を指すので、消した Sticker の `id` を新しい Sticker が使うと、上書きが別の Sticker に当たるためである（ADR 0030）。

- `next_sticker_id` は、次に加える Sticker の番号 `n` である。新しい Sticker（エディタとノード上の UI で投入した画像、複製、`port` の Sticker）は、`next_sticker_id` から数えて、今ある Sticker の `id` が使っていない最初の番号 `n` の `sticker_<n>` を受け取り、`next_sticker_id` を `n + 1` にする（使っている番号は飛ばす。`takeStickerId`、`pano_editor_state.js`）。番号は上限を超えても正確な整数で数える（JS は `BigInt`。`pano_scene_state.js` の `freeStickerNumber`、Python は `scene_state.py` の整数）ので、`2^53 − 1` の先でも使っている番号を正しく飛ばす。上限 `STICKER_NUMBER_MAX`（`2^53 − 1`）に寄せるのは `next_sticker_id` だけである（`stickerCounter`）。フィクスチャ `tests/fixtures/scene_state/sticker_ids.json`。Undo で戻しても `next_sticker_id` は戻さない（`restoredHistoryState`）。ノードが状態にない `port` の Sticker を加えるとき（`port_sticker.py` の `_take_sticker_id`）も同じ番号を使う。ノードは状態を保存しないので、進めた値は実行の中だけのものである。
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

`filename`・`subfolder`・`storage` は信頼しない入力である。ファイルを読む側は、既存の `folder_paths` による範囲の確認を必ず通す。この契約のコードはファイルを読まない。

#### 3D ファイルの `file` の Source

`file` の Source が 3D ファイルかどうかは、`filename` の拡張子だけで決める（大文字と小文字は区別しない）。3D ファイルの拡張子は、ComfyUI の Load3D が受け付ける 9 つ（`.gltf`・`.glb`・`.obj`・`.fbx`・`.stl`・`.spz`・`.splat`・`.ply`・`.ksplat`）と同じにする（出典：ComfyUI_frontend（5276d1b）の `src/extensions/core/load3d/constants.ts:6-20` の `SUPPORTED_EXTENSIONS`、コアの `comfy_extras/nodes_load_3d.py:29`）。それ以外の `file` の Source は画像とする。

- Python と JS は同じ表（フィクスチャ `tests/fixtures/scene_state/file_3d_formats.json`。拡張子の一覧と、`filename` と期待する判定の組）を読み、同じ判定になることを parity の test で守る。この表は状態ではないので、`test_scene_state_parity.py` の `STATE_CASES` には入れず、Python と JS の test がそれぞれ専用に読む。
- 判定はファイルを開かない。PLY がスプラットかメッシュか、読めるかどうかは、読む側が中身で決める（`docs/render-contract.md` の「SPLAT の描き方」と「読めない 3D ファイル」）。
- 3D ファイルの Source を持つ Sticker は `world` の Sticker である（上の「`world` の 2D の素材」の段落）。状態の読み込みは `placement` を書き換えない。`sky` の Sticker が 3D ファイルの Source を持つ状態は、ノードが描かずに警告する（`docs/studio-node.md` の「3D ファイルの `file` の Source」）。
- 読み方は、ノードが `docs/studio-node.md` の「3D ファイルの `file` の Source」、エディタが `docs/threejs-spark-integration.md` の「空間の表示」で決める。画像の `file` の Source は、ノードが `core/stickers.py` の `load_source_rgba` で読む。

### ペイントの数値

ストロークの `size`・`opacity`・`createdAt`・`radiusValue`、点の `u`・`v`・`t`・`widthScale`・`pressureLike`、`color` の成分、
ラスタの `bbox`・`transform` も、共通の規則どおり有限の JSON の数値だけを受け付ける（文字列・真偽値・配列は不正）。

- 不正な `size`・`opacity`・`u`・`v`・`bbox` の値は、そのストローク（ラスタ）を捨てる。
- 不正な `createdAt` は 0、`radiusValue` は `null` にし、`widthScale`・`pressureLike` は持たない。`transform` の `du`・`dv`・`rot_deg` は 0、`scale` は 1 にする。
- 不正な点の `t` は 0 にする。`color` の成分は、不正な `r`・`g`・`b` を 0、`a` を 1 にする（`color` がオブジェクトでないときの扱いは変えない）。

### ペイントのストロークの筆の値

ペイントのストローク（`painting.paint.strokes[]`・`painting.mask.strokes[]`）は、描いたときの筆の値を自分で持つ（`pano_brush_presets.js` の
`applyPresetToStroke` が書く）。読み込み（`normalize_painting_state` / `normalizePaintingState`）はそれを保ち、開き直しても同じ筆で描き直す。
Python のラスタ化（`core/painting.py`。`painting_layer` が無いときだけ使う）も、正規化したストロークの筆の形を読み、
描く側と同じく `null`・欠けだけを既定値として読む（`0` の `hardness`・`flow` と `aspect` を既定値に読み替えない）。
ストロークの `opacity` も、無いときだけ 1 として描き、`0` は描かない（エディタの `stroke.opacity ?? 1` と同じ）。

`hardness`・`flow`・`spacing` は、ストロークが常に持つ。JSON の数値（有限）ならその値をそのまま保ち、欠け・`null`・数値でない値は `null` にする。
`null` は「描く側の既定値」を意味し、`0` に読み替えない（`0` は柔らかさ 0、流量 0 という別の値である）。描く側の既定値は、`hardness` 0.9、
`flow` 1、`spacing` は道具による（`brush` と `eraser` は直径の 0.15、ほかは 0.2）。`spacing` が 0 以下のときも同じ既定値で描く。

筆の形の項目は後から足したもので、既定値と違うときだけ正規化した結果に持つ（欠けは既定値と読む）。保存するテキストは正規化した状態を
書くので、既定値は書かれず、この項目より前に保存した状態のテキストは変わらない。

| フィールド | 型 | 既定値 | 読み方 |
|---|---|---|---|
| `stampKind` | `"round"`・`"chisel"`・`"crayon"` | `"round"` | それ以外は既定値。筆先の形（丸・平たいマーカー・パステル） |
| `aspect` | 数値 | `1` | 筆先の横 ÷ 縦。0.1〜10 に寄せる |
| `angle` | `{"kind": "fixed", "value": <ラジアン>}` または `{"kind": "stroke_dir"}` | `{"kind": "fixed", "value": 0}` | `kind` が `stroke_dir` ならその形。それ以外は `value` が数値なら `fixed`、数値でなければ既定値 |
| `chiselEdgeLift` | 数値 | `0.4` | `stampKind` が `chisel` のときだけ持つ。0 以上 |
| `chiselCenterDip` | 数値 | `0.3` | `stampKind` が `chisel` のときだけ持つ。0 以上 |
| `chiselFiber` | 数値 | `0` | `stampKind` が `chisel` のときだけ持つ。0〜1 に寄せる |
| `crayonGrain` | 数値 | `0.65` | `stampKind` が `crayon` のときだけ持つ。0〜1 に寄せる |
| `scatter` | `null` または `{"radius": 数値, "count": 整数}` | `null` | オブジェクトなら、`radius`（数値でなければ 1.5、0 以上）と `count`（数値でなければ 6、`Math.round` と同じ丸めで 1〜64） |

- 数値は JSON の数値（有限）だけを受け付ける（真偽値・文字列は数値でない）。数値でない値は既定値とする。寄せたあとの値が既定値と同じなら持たない。
- 既定値は、描く側（`pano_paint_engine.js` の `buildStampContext`）が項目の無いストロークに使う値である。
- `opacityMode` と `velocityWidthFactor` は描く側が使わない（筆の値の置き場だけある）ので保たない。
- 旧ノードの状態も同じ読み込みを通る。筆の形の項目を持たない状態は既定値（丸い筆）として読み、今までと同じに描く。
- Python のラスタ化が近似するのは `chisel` の形（平たい楕円）、`aspect`、`fixed` の `angle` までで、`crayon` の粒、`chisel*`、`scatter`、
  `stroke_dir` は描かない。エディタは閉じるときにペイントの層（`painting_layer`）をアップロードし、ノードはそれを描くので、
  ノードの出力の正はアップロードした層である。

## 評価関数

```python
evaluate_scene_state(state: dict, frame: float, length: float | None = None, boxes: dict | None = None, shot: dict | None = None) -> dict
```

```js
evaluateSceneState(state, frame, length = null, boxes = null, shot = null) // -> object
```

- `state` は `load_scene_state` / `loadSceneState` の戻り値（正規化済みの v2）とする。
- `frame` は端数を含む Timeline frame（`timeline.fps` 基準）。
- `length` は出力の長さ（Timeline frame、`timeline.fps` 基準）で、ループの周期になる（下記「ループ」）。`None` / `null` のときは、どの持ち主もループしない。長さを決めるのは呼び出し側である（`docs/studio-node.md` の「Scene の組み立てと撮影の入口」、エディタは `docs/timeline-ui.md` の「タイムラインの長さ」）。
- `boxes` は、Sticker の `id` から中身の箱（`{"center": [x, y, z], "size": [x, y, z]}`）への対応で、Look at の相手の点を求めるのに使う（下記「Look at」の「中身の箱」）。状態は中身を持たないので、呼び出し側が渡す。無い `id` の箱は、中心も大きさも 0 として扱う。
- `shot` は、この状態の `port` の Sticker に届いている `sticker_state`（`load_sticker_state` / `loadStickerState` の戻り値）で、その `port` の Sticker の置き方を決める（下記「受け渡しの置き方」）。無ければ、`port` の Sticker は自分の Lane で置く。
- 戻り値は `state` と参照を共有しない新しい値である。Python と JS は同じ入力に対して 1e-4 以内で同じ値を返す。
- Timeline の長さの決定、素材のフレームの選択（PTS ≤ t）、描画は評価関数の役割ではない（長さは引数で受け取る）。
- 一つの持ち主の Lane を評価する部品（JS の `evaluateCamera`・`evaluateSticker`・`evaluateLane`、Python の Lane の評価の部品）も、同じ `length` と、Look at の相手を引くための状態を受け取る。

戻り値の形（`tests/fixtures/scene_state/v2_canonical.eval.json`）：

```json
{
  "frame": 12.5,
  "camera": {"position": [0.0, 1.6, 0.0], "yaw_deg": 10.0, "pitch_deg": 5.0, "roll_deg": 0.0, "hFOV_deg": 90.0, "curve": 1.0, "aspect": 1.78},
  "scene": {"active": true, "clip_frame": 12.5, "position": [0.0, 0.0, 0.0], "yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0, "scale": 2.0},
  "stickers": [
    {"id": "st_sky", "placement": "sky", "active": true, "clip_frame": 7.5, "yaw_deg": 30.0, "pitch_deg": 10.0, "roll_deg": 5.0, "hFOV_deg": 20.0, "vFOV_deg": 15.0, "curve": 1.0, "opacity": 0.0}
  ]
}
```

| フィールド | 意味 |
|---|---|
| `frame` | 受け取った Timeline frame |
| `camera` | `position`、`yaw_deg`・`pitch_deg`・`roll_deg`（`rotation`。Look at の相手があるときは、相手を向いた向き。下記「Look at」）、`hFOV_deg`（`fov`、κ による上限に寄せた値）、`curve`、`aspect`。`camera` は自分の状態ではいつもある（読み込みが既定の Camera を入れる。ADR 0048）。上流の層（`PanoSceneValue` の層）の `camera` は `None` のままで、Python の評価関数は `None` を返す（`scene_build.py` の `_scene_output` が `None` にする。下流は上流の Camera を使わない）。JS の状態はいつも Camera を持ち（`loadSceneState` が既定の Camera を入れる。上流の層の読み込みも `pano_upstream.js` が `loadSceneState` を通す）、JS の評価関数の `camera` はいつも値である。上流の層の Camera は使わず捨てる。この違いは Python と JS の一致の対象外とする。`projection`・`erp_range` は時間で変わらないので、状態の `camera` のものを読む |
| `scene` | `active`（`visible` かつ `frame` が `scene.clip` の範囲内）、`clip_frame`、`position`、`yaw_deg`・`pitch_deg`・`roll_deg`（`rotation`）、`scale` |
| `clip_frame` | 素材の先頭からの経過（Timeline frame、端数あり）。`frame − (start − in)`。素材の時刻（秒）は `clip_frame ÷ timeline.fps` |
| `stickers[]` | `state.stickers` と同じ順。`id`・`placement`、`active`（`visible` かつ Clip range の範囲内）、`clip_frame`、各 Lane の値のフィールド（`sky` は `yaw_deg`・`pitch_deg`・`roll_deg`・`hFOV_deg`・`vFOV_deg`・`curve`、`world` は `position`・`yaw_deg`・`pitch_deg`・`roll_deg`・`scale` と、`lens` の Lane を持つ Sticker だけ `lens`（`curve`・`hFOV_deg`））、`opacity` |

範囲外（`active` が偽）でも値は評価して返す。描画するかどうかは呼び出し側が `active` で決める。角度の単位は度で、戻り値の角度の範囲は規定しない（360° の差は同じ向き）。

Lane の評価の規則：

1. Keyframe がなければ `value`。
2. 最初の Keyframe 以前は最初の値、最後の Keyframe 以後は最後の値（ループする持ち主の Lane は、下記「ループ」のとおり周期で読む）。
3. `frame` がちょうど Keyframe の `frame` なら、その Keyframe の値。
4. 区間の途中で、区間の始まりの Keyframe の `easing` が `hold` なら、始まりの値。

1〜3 で Keyframe の `frame` と比べるときは、差が `1e-6` 以内なら同じ frame とみなす（`FRAME_EPSILON`）。秒 × fps の浮動小数点の誤差で、Keyframe の直前の値（例：`23.9999999`）になった出力フレームでも、Cut が 1 フレーム遅れないようにするためである。この許容差は浮動小数点の誤差だけを吸収する。ただし、VIDEO の PTS の量子化の幅の半分は、許容差に含める（1ms の timebase なら 0.5ms 分の Timeline frame）。PTS は timebase に丸めて記録されるので、29.97 fps の mkv・webm では、整数の Timeline frame のはずの時刻が最大でその分ずれるためである（`docs/studio-node.md`）。`timeline.fps` は丸めずに記録する（例：29.97 fps の素材は `30000 / 1001`）。コアの VIDEO の fps は分数なので、それを float にした値をそのまま記録する。`29.97` と丸めて記録すると、24 番目のフレームは `23.999976` になり、許容差では吸収できない。
5. それ以外（Smooth・cubic-bezier の区間の途中）は、次の「補間」の節のとおりに補間する。

### 補間

区間 `k`（Keyframe `k` から `k + 1` まで、長さ `dt = frame[k+1] − frame[k]`）の途中の値は、区間内の時間 `u = (frame − frame[k]) ÷ dt` から求める。値は二つに分けて決める（ADR 0064）。

- **形**：区間の始まりの値から終わりの値までの道。位置の軌道、回転の経路、`direction` の球面の上の道。媒介変数 `τ`（0〜1）で表す。形は Easing によらない。
- **進み具合** `p`：形に沿った長さの割合（0 が始まり、1 が終わり）。Easing だけで決まる。

値は「進み具合 `p` → 形に沿った長さの割合が `p` になる `τ` → その `τ` の形の点」の順に求める。速さの付き方は、使う人が Easing と Keyframe の時刻で決める。評価関数は Keyframe の時刻を動かさず、cubic-bezier の区間の曲線も変えない。前後に合わせて進み方を変えるのは Smooth の区間だけである（下の「進み具合」）。

- 評価は Lane ごとに独立して行う。戻り値の形（上の表）は Lane の分け方によらない。
- 通過する Keyframe：Keyframe `i` が最初でも最後でもなく、前後の区間がどちらも `hold` でない（`easing[i−1]` と `easing[i]` が `hold` でない）とき、形は `i` を滑らかに通過する。Easing が Smooth か cubic-bezier かによらない。`position` の Lane の角の Keyframe（`corner` が `true`）は通過せず、そこで軌道が折れる（下の「形（位置）」）。ループする持ち主の Lane では、どの Keyframe も最初でも最後でもない（下記「ループ」）。
- 速度 `m`（1 Timeline frame あたり）：前後の弦の傾き `s0 = (v[i] − v[i−1]) ÷ dt0`、`s1 = (v[i+1] − v[i]) ÷ dt1`（`dt0`・`dt1` は前後の区間の長さ）から、次のように決める（Fritsch–Carlson 型の制限）。スカラーの Smooth の速さに使う。回転・`direction` の形の接線にも同じ式を使うが、`dt0`・`dt1` の代わりに前後の弦の長さ（前後の Keyframe との角度）を使う（下の「形（回転・`direction`）」。位置の形は下の「形（位置）」の規則で、どちらも時刻を使わない）。
  1. 前後の変化が逆向きなら `m = 0` とする。
     - スカラー：`s0 × s1 ≤ 0`（符号が違う、またはどちらかが 0）。
     - ベクトル（回転・`direction`）：内積 `s0 · s1 < −1e-9 × |s0| × |s1|`（真に後ろへ折り返すときだけ。ちょうど直角は、丸め誤差で符号が揺れても通過する。Python と JS で結果が分かれないため）。どちらかの弦が 0 のときは、2 の上限が 0 になるので `m = 0` になる。
     - 実装は、スカラーを 1 次元のベクトルとして同じ式（上の内積の式と 2 の上限）で扱う。スカラーでは内積の式は `s0 × s1 < 0` と同じになる。符号が同じで片方が 0 のときも上限が 0 になるので、結果はスカラーの規則と一致する。
  2. それ以外は、前後の Keyframe を通る放物線の傾き `m = (s0 × dt1 + s1 × dt0) ÷ (dt0 + dt1)` とし、`|m|` が `3 × min(|s0|, |s1|)` を超えるときは、向きを保ってその長さに縮める。
- 形（スカラー）：スカラーの Lane（`fov`・`roll`・`scale`・`opacity`・`curve`）、`size`（`hFOV_deg` と `vFOV_deg`）と `lens`（`curve` と `hFOV_deg`）の各数値には形が無く、値は `v[k] + (v[k+1] − v[k]) × p` とする。`roll` は数値のまま補間し、最短の向きは取らない（`0` → `350` は 350° 回る。`rotation` の Lane の 180° の規則は当てはまらない）。
- 形（位置）：3 次ベジェ `B(v[k], v[k] + H0, v[k+1] + H1, v[k+1]; τ)`。`H0`・`H1` は区間の始まりと終わりの制御点のずれ（ハンドル）。3 成分を一つのベクトルとして扱う（World の軸の向きに依存しない）。自動のずれは、Keyframe の値の並びだけで決め、時刻を使わない（Keyframe の時刻を動かしても軌道の形は変わらない）。
  - 記号：区間 `k` の弦 `c[k] = v[k+1] − v[k]`、その長さ `|c[k]|`、向き `e[k] = c[k] ÷ |c[k]|`。弦の長さが `1e-12` 以下の区間（動かない区間）は、両方のずれを 0 とする。
  - 曲がる角：二つの向き `e0`・`e1` について `φ = 2 × atan2(|e0 − e1|, |e0 + e1|)`（0〜π）。
  - 円弧の係数：`f(φ) = (2/3) × tan(φ/4) ÷ sin(φ/2)`（`φ ≤ 1e-9` なら `1/3`）。円を等しい角で区切った点を通るとき、ずれが円弧に最もよく合う長さになる（直線では弦の 3 分の 1）。
  - 折り返しの弱め：`g(φ)` は、`φ ≤ 2π/3`（120°）なら 1、それより大きい角では `x = (π − φ) ÷ (π / 3)` として `x² × (3 − 2x)`。真後ろ（`φ = π`）で 0 になり、折り返しに近づくほどずれが連続に縮む（大きく膨らむ輪を描かない）。
  - 接線を持つ Keyframe：通過する Keyframe `i` のうち、前後の弦がどちらも長さ `1e-12` を超えるもの。動かない区間に接する Keyframe は、もう片側の区間にとって通過しない端として扱う（下）。
  - 接線を持つ Keyframe `i` の自動のずれ：向き `t` は `e[i−1] + e[i]` を長さ 1 にしたもの（前後の弦の向きの二等分）。`|e[i−1] + e[i]| ≤ 1e-9`（真後ろへの折り返し）なら、前後のずれを 0 にする。`φ` は `e[i−1]` と `e[i]` の曲がる角、出るずれ `t × f(φ) × g(φ) × min(|c[i]|, 2 × |c[i−1]|)`、入るずれ `−t × f(φ) × g(φ) × min(|c[i−1]|, 2 × |c[i]|)`。前後で長さは違ってよく、向きは揃う（軌道が折れない）。片側の弦が長いときに、長い側のずれを短い側の 2 倍までに抑えるので、角の先へ大きく膨らまない。
  - ハンドル：Keyframe `k` の `handles.out` があれば `H0` を、Keyframe `k+1` の `handles.in` があれば `H1` を、その値に置き換える。ハンドルは形だけを変え、進み方（長さに沿った `p`）は変えない。ループする Lane では、最初の Keyframe の `handles.in` と最後の Keyframe の `handles.out` も使う。
  - 片側だけのハンドル：接線を持つ Keyframe で、片側だけに長さが `1e-12` を超えるハンドルがあるときは、もう片側の自動のずれの向きを、そのハンドルの逆の向きにする（長さは自動のまま）。両側にハンドルがあり、向きが揃っていないときは、書かれたとおりにし、その Keyframe で軌道が折れる（評価関数は向きを揃え直さない。揃えるのは、エディタでハンドルを引いたときである。`docs/studio-ui.md` の「軌道の線」）。
  - 角の Keyframe（`corner` が `true`）：通過しない端として扱うが、自動のずれは下の折り返しを使わず、弦の 3 分の 1 とする（出るずれは `c[i] ÷ 3`、入るずれは `−c[i−1] ÷ 3`。隣の Keyframe へまっすぐ向かう）。ハンドルがあればその値を使う。前後のずれは互いに独立で、向きを揃えない。
  - 実際の向き：Keyframe の側の制御点のずれ（ハンドル、片側だけのハンドルで向きを変えた自動のずれ、または自動のずれ）を、その区間でのその Keyframe の「実際の向き」とする。下の通過しない端は、反対の端の実際の向きを使う。
  - 通過しない端（最初・最後の Keyframe、`hold` の区間との境、動かない区間に接する Keyframe。角の Keyframe は上の規則）の自動のずれ：その区間の反対の端の実際の向きを、Keyframe から外へ向けた単位ベクトル `t′`（反対の端が始まりなら `H0` の向き、終わりなら `−H1` の向き）とし、それを弦の向きで折り返した向き `2 (e · t′) e − t′` を、この端の接線とする（端の区間が円弧に近くなる）。長さは、`e` と `t′` の曲がる角の 2 倍を `φ`（π を超えたら π）として `f(φ) × g(φ) × |c|`。反対の端の実際の向きが 0（ずれが 0）なら、この端のずれは弦の 3 分の 1（始まりは `c ÷ 3`、終わりは `−c ÷ 3`）とする。両端とも通過しない区間は、両方とも弦の 3 分の 1 で、直線になる（反対の端も通過しない端なので、互いに参照しない）。
  - Keyframe 2 つの Lane は直線になる。Keyframe を円の上に等しい間隔で置くと、円弧に沿う（4 つで半径のずれ 0.03% 以下、ループしないときも最初と最後の区間が円弧になる）。間隔が等しくないときは円からずれる。
- 形（回転・`direction`）：Keyframe の値の並びだけで決め、時刻を使わない（位置と同じく、Keyframe の時刻を動かしても経路の形は変わらない）。
  - 形の速度 `w`：通過する Keyframe `i` で、上の速度の式の `dt0`・`dt1` を、前後の弦の長さ `l0`・`l1`（下の「回転の補間」と `direction` の項の、前後の Keyframe との回転ベクトル・大円の速度の長さ）に置き換えて求める。`s0`・`s1` は長さ 1 の向きになり、`w` は前後の向きを、短い側の弦の向きに寄せて混ぜたものになる（長さは 3 まで）。`l0`・`l1` のどちらかが `1e-12` 以下なら `w = 0`。
  - 区間の端の速度 `V0`・`V1`（`τ` あたり）は、区間の始まりの Keyframe `k` が通過するなら `V0 = w[k] × l`（`l` はその区間の弦の長さ）、しなければ区間自身の変化（弦）とする。終わりの `V1` も、Keyframe `k+1` について同じ。両端とも通過しない区間の形は、端の値の間の slerp（`direction` は大円に沿う slerp）になる。弦の長さが 0 の区間（動かない区間）は、`V0`・`V1` とも 0 で、形は動かない。形は下の「回転の補間」と `direction` の項のとおり。
  - 90° を超えて向きを変える Keyframe（右へパンしてから戻るように上へ振るなど）では、速度の規則 1 で `w = 0` になり、角になる。
- 長さと `τ`：形のある Lane（位置・回転・`direction`）では、`τ_j = j ÷ 64`（`j = 0〜64`、`PATH_SAMPLES` は 64）の 65 点で形を測る。隣り合う点の間の距離を `j` の順に足して累積の長さ `L_0 = 0, L_1, …, L_64` を作る。距離は、位置は World の距離、回転は二つの四元数 `a`・`b` の間の `|log(a⁻¹ b)|`（四元数の log のベクトルの長さで、半分の角。速度 `m` と同じ単位。`a · b < 0` なら `b` の符号を反転してから求める）、`direction` は二つの方向の間の角度 `atan2(|a × b|, a · b)`。各点の速さ `s_j`（`τ` あたりの長さ）は、`τ_j − 1e-6` と `τ_j + 1e-6` の 2 点の距離 ÷ 2e-6（`SPEED_STEP`。`j = 0` は `τ = 0` と `1e-6`、`j = 64` は `1 − 1e-6` と `1` の距離 ÷ 1e-6）とする。目標 `L = p × L_64` に対し、`L_{j+1} ≥ L` となる最初の `j`（64 未満）を取る。`ΔL = L_{j+1} − L_j` が `1e-12` 以下なら `τ = τ_j`。そうでなければ `x = (L − L_j) ÷ ΔL`、端の傾き `σ = ΔL × 64 ÷ s`（`s` が `1e-12` 以下なら 3、3 を超えたら 3）として、`τ = τ_j + (x の上の 3 次のエルミート（傾き σ_j・σ_{j+1}）) ÷ 64` とする（エルミートの式は下の Smooth と同じ）。`p = 0` なら `τ = 0`、`p = 1` なら `τ = 1`。`L_64` が `1e-12` 以下（動かない区間）なら `τ = p`。和は `j` の順に一つずつ足し、Python と JS で同じ順にする。
  - これで、Linear（`[0, 0, 1, 1]`）の区間は、形が曲がっていても一定の速さで進み、点の速さを使うので Keyframe の前後でも速さが続く。形の媒介変数の進みが端で極端に遅い区間（回転・`direction` で、前後の弦の長さの比が 10 倍を超えるときなど）では、`σ` を 3 で止めるので、速さが数 % 揺らぐ。
- 進み具合 `p`：
  - cubic-bezier の区間：CSS と同じく `x(t) = u` を満たす `t` を求め（`x(t)` は `x1`・`x2` が 0〜1 なので単調。二分法で 50 回）、`p = y(t)` とする。`y1`・`y2` は 0〜1 なので `p` も 0〜1 に収まる。前後の区間によらず、書かれた曲線のとおりに進む。Linear（`[0, 0, 1, 1]`）の区間は、区間の中を一定の速さで進む。前後の区間と平均の速さが違えば、Keyframe の所で速さが変わる（形は滑らかなまま）。
  - Smooth の区間：`p = (u³ − 2u² + u) × a0 + (3u² − 2u³) + (u³ − u²) × a1`（3 次のエルミート）。`a0`・`a1` は区間の始まりと終わりの速さ `S` を、この区間の平均の速さ `R = D ÷ dt` で割った値で、両方 1 なら一定の速さになる。`D` は区間の長さ（形のある Lane は上の `L_64`、スカラーは符号付きの変化 `v[k+1] − v[k]`）。端の速さ `S` は、その端の Keyframe の向こう側の区間で決まる。
    0. その Keyframe で形の接線が 0 なら `S = 0`（位置は真後ろへの折り返しと、動かない区間に接する Keyframe、回転・`direction` は `w = 0`）。角の Keyframe は、接線が 0 でない限り、下の 1〜3 で決める（角でも止まらずに曲がれる）。
    1. 向こう側の区間が Smooth：形のある Lane は、前後の区間の平均の速さ `R0`・`R1` から `S = (R0 × dt1 + R1 × dt0) ÷ (dt0 + dt1)` とし、`3 × min(R0, R1)` を超えるときはそこまでにする。スカラーは速度 `m`（符号付き。前後の変化が逆向きなら 0）。向こう側の Smooth の区間が動かない区間（`D` が `1e-12` 以下）のときは、その先の区間を向こう側として同じ規則を当てる（ループの継ぎ目で、最後の Keyframe が最初と同じ値のときに、継ぎ目の前後を速さをつないで通るため）。
    2. 向こう側の区間が cubic-bezier：その区間の、この Keyframe の側の端の傾き × その区間の平均の速さ（スカラーは符号付き）。曲線の端の傾きは、始まりが `y1 ÷ x1`、終わりが `(1 − y2) ÷ (1 − x2)`。分母が 0 で分子が 0 でないときは 3 とする。分母も分子も 0 のときは、次の制御点で、始まりが `y2 ÷ x2`、終わりが `(1 − y1) ÷ (1 − x1)`（それも分母が 0 なら、分子が 0 でなければ 3、0 なら 1）とする（Linear は両端とも 1、ease-in の終わりと ease-out の始まりは約 1.72、ease-in-out の両端は 0）。
    3. それ以外（向こう側に区間が無い、または `hold`）：`S = 0`（動きの始まりと終わりでは、ゆっくり出て止まる）。
    - `a = S ÷ R` を 0〜3 に寄せる（`|R|` が `1e-12` 以下なら `a = 1`）。0〜3 の内なら `p` は 0 から 1 へ単調に進み、行き過ぎない（両方 3 のときは、区間の真ん中で一瞬速さが 0 になる）。
    - `a0` と `a1` がどちらも 0 の区間（Keyframe 2 つだけの動きなど）は、エルミートではなく ease-in-out の cubic-bezier `[0.42, 0, 0.58, 1]` で進む（前の版の既定の動きと同じにするため）。
    - 二つの Smooth の区間の間の通過する Keyframe では、両側の `S` が同じなので速さが連続する。Smooth と cubic-bezier の区間の間では、Smooth の側がその曲線の端の速さに合わせる（0〜3 に寄せたときを除く）。
  - `hold` の区間：評価の規則 4 のとおり始まりの値（`p` は使わない）。
- `sky` の Sticker の `direction`：yaw / pitch を単位ベクトル（中心の方向）にして球面上で補間し、yaw / pitch に戻す。
  - 方向ベクトル：`d(yaw, pitch) = (cos pitch · sin yaw, sin pitch, cos pitch · cos yaw)`。x が右、y が上、z が yaw 0 の正面で、この計算の中だけで使う（World の座標への変換はしない）。`d[k]` は Keyframe `k` の方向。
  - 球面の演算：`log_a(b)` は点 `a` の接平面のベクトルで、`a` から `b` へ大円に沿って向かい、長さは二点の間の角度（ラジアン）。`w = b − (a · b) a` として `log_a(b) = w × atan2(|w|, a · b) ÷ |w|`（`|w| ≤ 1e-12` なら `w`。計算の途中の点がちょうど正反対のときは動かない。四元数の log と同じ扱い）。`exp_a(v) = cos|v| · a + sin|v| · v ÷ |v|`（`|v| ≤ 1e-12` なら `a + v`）。`slerp(a, b, t) = exp_a(t · log_a(b))`。
  - 区間の大円：区間 `k` の始まりの速度（`p` あたり）は `C0 = log_{d[k]}(d[k+1])`。二つの方向がちょうど正反対（`d[k] · d[k+1] < 0` かつ `|d[k+1] − (d[k] · d[k+1]) d[k]| ≤ 1e-6`）のときは大円が決まらないので、Keyframe `k` から右（保存された yaw が増える向き）へ回る：`C0 = π · (cos yaw[k], 0, −sin yaw[k])`。保存された `yaw_deg` で決まるので、`pitch_deg` が ±90 の Keyframe でも決まる。区間の終わりの速度は、`C0` を同じ大円に沿って `d[k+1]` まで運んだ `C1 = cos θ · C0 − θ sin θ · d[k]`（`θ = |C0|`）。
  - 通過する Keyframe `i` の形の速度 `w`：上の「形（回転・`direction`）」の規則を、`d[i]` の接平面の二つのベクトル `C1[i−1]`（前の区間の終わりの速度。大円に沿って `d[i]` まで運んだもの）と `C0[i]` に当てはめる（`l0 = |C1[i−1]|`、`l1 = |C0[i]|`、`s0 = C1[i−1] ÷ l0`、`s1 = C0[i] ÷ l1`。内積が負なら 0、放物線の傾き、長さは 3 まで）。極にある Keyframe でも接平面は決まるので、yaw が決まらないことは速度に影響しない。
  - 区間の形：始まりの速度 `V0` は、Keyframe `k` を通過するなら `w[k] × |C0|`、しなければ `C0`。終わりの速度 `V1` は、Keyframe `k+1` を通過するなら `w[k+1] × |C0|`、しなければ `C1`。位置と同じく、速度の 3 分の 1 だけ離れた制御点 `c1 = exp_{d[k]}(V0 ÷ 3)`・`c2 = exp_{d[k+1]}(−V1 ÷ 3)` を持つ球面のベジェを、slerp の de Casteljau で `τ` について評価する：`q0 = exp_{d[k]}(τ · V0 ÷ 3)`、`q1 = slerp(c1, c2, τ)`、`q2 = exp_{d[k+1]}(−(1 − τ) · V1 ÷ 3)`、`r0 = slerp(q0, q1, τ)`、`r1 = slerp(q1, q2, τ)`、`d = slerp(r0, r1, τ)`。両端の接線は `V0`・`V1` の向きになる。通過しない区間では制御点が大円の上に等間隔に並ぶので、形は大円になる。
  - 正反対の区間：`C0` を正反対の規則で決めた区間では、制御点 `c1`・`c2` も正反対になりうる（両端で止まる区間では `c1 = d[k]`・`c2 = d[k+1]`）。そのとき `slerp(c1, c2, τ)` は大円が決まらず動かないので、この区間は自身の大円の上だけを進む。`u0 = C0 ÷ π`、`u1 = C1 ÷ π`（大円の両端での進む向き）として、形は自身の大円そのもので、`d = exp_{d[k]}(π · τ · u0)` とする（長さは `τ` に比例するので、`τ = p`）。この区間に隣接する通過 Keyframe では、形の接線が大円から外れる分だけ向きが折れる。
  - 戻り値：`pitch_deg = atan2(y, √(x² + z²))` で、必ず −90〜90 に収まる。`yaw_deg` は `atan2(x, z)` を、回転と同じく、区間の両端に保存された `yaw_deg` を `τ` で混ぜた値 `c` に対して `c − 180 − 1e-6 ≤ 値 < c + 180 − 1e-6` となるよう 360° の倍数だけずらす。`√(x² + z²) ≤ 1e-9`（極）では yaw が決まらないので、`c` そのものを返す。同じ極にある二つの Keyframe の間では、yaw は保存された数値の間を `τ` で進む。
  - 1 区間の `direction` は、通過しない区間では 180° 以下の最短の大円を進む。それを超えて回すときは途中に Keyframe を打つ。
  - 極の近く：`direction` が持つのは中心の方向だけで、Sticker の画面内の向きは yaw と `roll` で決まる（Sticker の上は天頂の側）。極の近くを通ると yaw は速く変わり、極をちょうど越えると yaw は 180° 変わって、Sticker の上下も入れ替わる。極にある Keyframe を離れるときも、yaw は保存された値から進む向きの値へ飛ぶ。方向と roll に分けた表し方の性質で、補間では補正しない。向きを保つには `roll` に Keyframe を打つ。
- 回転（`rotation` の Lane）：yaw / pitch / roll を `world_rotation` / `worldRotation`（`core/world.py`、`web_src/pano_world.js`）（float64）と `rotation_to_quaternion` / `rotationToQuaternion` で四元数にする。区間の計算に使うのは Keyframe `k−1`〜`k+2` だけで、`q[k+1]` は `q[k]` に、`q[k−1]` は `q[k]` に、`q[k+2]` は `q[k+1]` に対して、次の規則で符号を揃える（前の Keyframe → 後の Keyframe の向きで判断する）。
  - 内積が `1e-6` より大きければそのまま、`−1e-6` より小さければ符号を反転する（最短の向き）。
  - 内積の絶対値が `1e-6` 以下（ちょうど 180°）なら、前の Keyframe の glTF のローカル座標での回転ベクトル `log(q_前⁻¹ q_後)` を見て、`−y`・`x`・`z` の順に最初に絶対値が `1e-6` を超える成分が正になる符号を選ぶ。右へ、次に上へ、次に時計回り（画像が時計回りに回る roll の向き）に回ることになる。
- 回転の補間：`log(a⁻¹b)` を「a から b への回転ベクトル（半角）」、`L = log(q[k]⁻¹ q[k+1])` とする。始まりと終わりの速度（`τ` あたり）`V0`・`V1` は、通過する Keyframe では上の「形（回転・`direction`）」の規則を回転ベクトルに当てはめた形の速度 `w`（`l0 = |log(q[i]⁻¹ q[i−1])|`、`l1 = |log(q[i]⁻¹ q[i+1])|`、`s0 = −log(q[i]⁻¹ q[i−1]) ÷ l0`、`s1 = log(q[i]⁻¹ q[i+1]) ÷ l1`。内積が負なら 0、長さは 3 まで）に `|L|` を掛けたもの、通過しない端では `L` とする。SQUAD `slerp(slerp(q[k], q[k+1], τ), slerp(a, b, τ), 2τ(1 − τ))` を評価する。制御点は `a = q[k] · exp((V0 − L) ÷ 2)`、`b = q[k+1] · exp((L − V1) ÷ 2)`。通過しない端では `a = q[k]`・`b = q[k+1]` となり、両端とも通過しない区間の形は `slerp(q[k], q[k+1], τ)` になる。`slerp(x, y, t) = x · exp(t · log(x⁻¹ y))` で、`a`・`b` と外側の slerp の符号は揃え直さない（上の「長さと `τ`」で距離を測るときだけ、`a · b < 0` の組の符号を反転する。形そのものには影響しない）（揃え直すと区間の途中で向きが飛び、端の速度も変わる）。結果は `quaternion_to_rotation` と `panorama_angles` で yaw / pitch / roll に戻す（`pitch_deg` は −90〜90）。
- 1 区間の回転は、必ず 180° 以下の最短の経路になる。180° を超える回転や多回転（yaw 0 → 720 など）は、途中に Keyframe を打つ。
- 回転の数値：yaw と roll は、区間の両端に保存された値を `τ` で混ぜた `c = a + (b − a) × τ` に対して、`c − 180 − 1e-6 ≤ 値 < c + 180 − 1e-6` となるよう 360° の倍数だけずらして返す（ちょうど 180° 離れた同点は負の側、`c − 180` を取る）。区間の両端で保存された値の数値に一致する。最短の向きが保存された数値の向きと逆のとき（例：yaw 0 → 350）は、区間の途中で yaw・roll の値が 360° 跳ぶ。これは数値の表し方だけで、向きは連続している。使う側は回転行列を使うか、値を 360° で回して扱う。
- 極（pitch ±90 をちょうど通るとき）では、yaw と roll が同じ軸を共有するため、yaw の値は保証しない（その分は roll が受け持つ）。極の近くでも yaw・roll の数値は大きく動きうる。向きの連続は回転行列で判断する。
- `curve` の Lane はスカラーの Lane と同じく補間し（κ は像の形を連続に変えるので、ほかの数値の Lane と別の扱いにする理由が無い）、結果を 0〜1 に寄せる（読み込みも同じ範囲に寄せる）。`hFOV_deg`・`vFOV_deg` は、寄せた κ による上限（`docs/render-contract.md` の「カメラのレンズ」）にも寄せる。
- 範囲の扱い：補間の結果（数値の誤差を含む）が範囲を外れた `hFOV_deg`・`vFOV_deg` は 0.1〜（κ による上限）に、`opacity` は 0〜1 に、`scale` は `1e-6` 以上に寄せる。

### ループ

ループは持ち主ごとに決める（ADR 0064）。`camera.loop` と Sticker の `loop` が `true` の持ち主は、その持ち主の全部の Lane がループする。`scene`（入力の 3D の変形）は印を持たず、ループしない（エディタに `scene` の変形を動かす画面が無いため。動かせるようにするときに印を足す）。

- 周期 `P` は、評価関数が受け取った出力の長さ `length`（Timeline frame）である。`length` が無いとき、ループは効かない。`timeline.length` が `null`（入力から決める長さ）でも、そのとき決まった長さが周期になる。ループの印を変えても `timeline.length` は変えない。
- ループする持ち主の Lane のうち、Keyframe が 2 つ以上あり、最初と最後の Keyframe の `frame` の差が `P` より小さい Lane がループする。それ以外の Lane は、ループしないときと同じに評価する。
- ループする Lane は、Lane の時刻 `f`（Camera は Timeline frame、Sticker は素材基準の `clip_frame`）を `f′ = frame[0] + r` に直して評価する。`r = (f − frame[0]) − P × floor((f − frame[0]) ÷ P)` で、`r < 0`（丸めの誤差）または `r ≥ P − 1e-6`（`FRAME_EPSILON`）なら `r = 0` とする。最後の Keyframe から「最初の Keyframe の `frame` + `P`」（仮の Keyframe。値・`corner`・`handles` は最初の Keyframe のもの）までを最後の区間とし、最後の Keyframe の `easing` を使う。
- 通過の判定、形の接線、速度、Smooth の端の速さでは、最初の Keyframe の前に最後の Keyframe（`frame − P`）が、最後の Keyframe の後に最初の Keyframe（`frame + P`）があるものとする。そのため、最初と最後の Keyframe も（角でなく、前後の区間が `hold` でなければ）滑らかに通過し、つなぎ目で形も速さも続く。
- 最後の Keyframe の値が最初の Keyframe の値と同じ（成分ごとの差が `1e-9` 以内）Lane では、最後の区間は動かない区間になる。Keyframe の時刻は動かさないので、最後の Keyframe の `frame` から周期の終わりまで、最初の値のままである。`position` の Lane では、つなぎ目で軌道が折れないように、最初の Keyframe の接線は「一つ前の点」を最後から 2 番目の Keyframe として、最後の Keyframe の接線は「一つ後の点」を 2 番目の Keyframe として求め、二つの Keyframe の向きを揃える（動かない区間の側のずれは 0）。回転と `direction` の形の速度 `w` も、同じ読み替えで求める（動かない区間そのものは弦の長さが 0 なので、形は動かない）。Smooth の端の速さは、「補間」の 1 のとおり動かない区間の先を見る。
- 最後の Keyframe から最初へ戻る区間は、ほかの区間と同じ規則で進む。残りのフレームが少なければ、短い時間で戻る。評価関数は戻り方をならさない。
- 上流の層は、それぞれの状態の印に従い、周期はその層を作ったノードの出力の長さ（その層の `timeline.fps` 基準の frame 数）とする。下流の出力がそれより長ければ、その周期で下流の出力の終わりまで繰り返す。層ごとの長さは `PANO_SCENE` が運ぶ（`docs/studio-node.md` の「上流の Scene」）。
- ループするかは、fps の再基準化の後の値（丸めた `frame`）で決める。
- `sticker_state` は、Camera と相手の物のループの印と、周期（出力の長さ）を運ぶ（下記「`sticker_state`」）。

### Look at

Camera の `look_at` の Lane に相手があるとき、Camera の向きは相手から決まる（ADR 0065）。位置（`position` の Lane と軌道の形）には何も効かない。

- 中身の箱：Sticker の自分の座標（`rotation` と `scale` を掛ける前の glTF 座標、`scale` 1 のときの大きさ）での、中身を囲む箱の中心と大きさ。画像の板は、中心 `[0, 0, 0]`、大きさ `[1, 切り抜いた素材の高さ ÷ 幅, 0]`（板の幅は `scale`。`docs/render-contract.md` の「`world` の Sticker の板」。`lens` を持つ板も、この平らな箱で数える）。切り抜きの幅か高さが `1e-6` 未満の板は描かれないので、箱を持たない（相手の点は Sticker の `position`）。3D の中身は、`docs/studio-node.md` の「中身の箱」（`content_box`。時刻で変わらない一つの箱。glTF のアニメーションを持つファイルは、既定の clip の時刻 0 の姿勢の箱）の、中心と大きさ。箱は評価関数の引数 `boxes` で受け取る（Python はノードが読んだ素材から、JS はエディタが読み込んだ中身から作る。`docs/studio-node.md`、`docs/studio-ui.md` の「Look at」）。まだ分からない箱（読み込み中）は、中心も大きさも 0 として扱い、相手の点は Sticker の `position` になる。
- 相手の位置：`{"point": p}` は `p`。`{"sticker": id, "offset": o}` は、その Sticker を同じ時刻に評価した `position` に、箱の中の点 `center + o × size`（成分ごと）に `scale` を掛けて `world_rotation` で回したずれを足した点（Sticker の時刻は Timeline frame を素材基準に直したもの。Clip range の外でも値は評価する）。Sticker が無い・`sky` のときは相手なし。
- 向いた向き：Camera の位置から相手の位置への方向 `d`（World の glTF 座標）を、`core/world.py` `look_rotation` / `pano_world.js` `lookRotation` で yaw と pitch にする。上はいつも World の +Y で、roll は Camera の `rotation` の Lane を同じ時刻に評価した `roll_deg` をそのまま使う。
- 決まらない方向：`d` の長さが `1e-9` 以下（Camera が相手と同じ位置）のときは、`rotation` の Lane の向きを使う。
- 極：`d` の水平の成分（x と z）の長さが `d` の長さの `1e-9` 倍以下のとき（相手のちょうど真上か真下。「ほぼ真上」の幅は持たない）は、pitch を ±90 とし、yaw は次の順で決める。評価関数は前のフレームを覚えないので、時刻をたどって決める。
  1. すぐ前：`ceil(frame) − 1` から 1 ずつ小さい整数の frame を、`lo` までたどり、極でない最初の frame の yaw。
  2. 無ければ、すぐ後：`floor(frame) + 1` から 1 ずつ大きい整数の frame を、`hi` までたどり、極でない最初の frame の yaw。
  3. どちらも無ければ（たどった範囲のどこでも真上か真下）、`rotation` の Lane の yaw。
  - `lo` は、0 と、Camera と相手の Lane の最初の Keyframe の frame のうち小さいほう。`hi` は、`length − 1`（`length` が無ければ 0）と、Camera と相手の Lane の最後の Keyframe の frame のうち大きいほう。たどる frame での相手と Camera の位置は、その frame で同じ規則（ループを含む）で評価する。実装はたどった結果を覚えてよいが、結果は上の順で決まる値と同じでなければならない。
  - 相手の真上をまたぐと、yaw は 180° 変わる（上を World の +Y に保つための性質で、補正しない）。
- Keyframe の間：区間 `k` の始まりと終わりの Keyframe の相手 `a`・`b` について、同じ時刻 `frame` に、`a` を向いた向き `Qa` と `b` を向いた向き `Qb` を求める（相手なしは `rotation` の Lane の向き）。値は `slerp(Qa, Qb, p)`（四元数。近い回り方）で、`p` は区間の Easing の進み具合である。cubic-bezier は書かれたとおり、`hold` は `Qa` のまま次の Keyframe で切り替わる。Smooth の進み具合の「区間の長さ」`D` は、区間の始まりの時刻での `Qa` と `Qb` の間の角度とする。
- 最初の Keyframe 以前は最初の相手、最後の Keyframe 以後は最後の相手を向く。Keyframe が無ければ `value` の相手を向く。
- 相手を向いているとき、`rotation` の Lane の yaw と pitch は使わない（値と Keyframe は保つ）。

### 受け渡しの置き方

`sticker_state` が届いている `port` の Sticker（2D の素材で、評価関数が `shot` を受け取った）は、置き方を自分の Lane からではなく、撮った Camera から求める（Pose handoff。ADR 0067）。置き方は「撮ったときの Camera」との関係であり、下流の状態に Camera の値を写さない。上流の Camera を直せば、次の実行で、ずらしを保ったまま付いていく。関係をやめて自由に置く操作は持たない（自由に置くときは、`sticker_state` をつながずに素材だけを渡す）。

- 撮った時刻：Sticker の `clip_frame`（素材の時刻）`c` に対して、`sticker_state` の時刻は `c × shot.fps ÷ timeline.fps`（秒で合わせる）。
- 撮った Camera：`sticker_state` を一つの状態として、その時刻で同じ評価関数で評価した Camera（`camera` の Lane、`look_at`、`targets`、ループと周期 `length`。下記「`sticker_state`」）。向き `(yaw, pitch, roll)`、`hFOV`、`curve` を得る。Camera の位置は使わない（無限遠の Sky に置くため。ADR 0059）。
- ずらし：`offset_rotation` の `(yaw, pitch, roll)` と `offset_fov` の `k` を、Sticker の時刻で、ほかの Lane と同じ規則で評価する（`offset_rotation` は `rotation` の Lane と同じ補間）。ずらしは、撮った Camera から見た、もう一つの Camera との差である：その Camera の自分の軸で、右へ `yaw`、上へ `pitch`、時計回りに `roll` だけ向きを変え、画角を `k` 倍にする。
- 置き方：向きは、撮った Camera の向きに、ずらしの回転を右から掛けたもの（`world_rotation(撮った向き) @ world_rotation(ずらし)` を、角度の規約の中で求める）。その向きから `direction`（yaw・pitch）と roll を取る（`panorama_angles`）。大きさは `hFOV × k`（κ による上限に寄せる）。`curve` は撮った Camera の `curve`。ずらしがどれも既定値なら、撮った Camera の向き・画角・レンズそのままになり、同じ Camera で撮り直すと元の画素に戻る（`docs/render-contract.md` の輪の閉じ方）。画面に対する割合への直しは無いので、レンズの曲線 κ によらず同じ式である。
- 戻り値は、ほかの `sky` の Sticker と同じ形（`yaw_deg`・`pitch_deg`・`roll_deg`・`hFOV_deg`・`vFOV_deg`・`curve`）。`vFOV_deg` は、`port` の Sticker の規則どおり素材の縦横比から求める。描画は違いを知らない。
- `sticker_state` が届いている間、Sticker の `direction`・`roll`・`size`・`curve` の Lane は使わない（値は保つ）。縦と横の画角を別々に変えることはできない（撮った絵を引き伸ばすことは、撮った所へ戻すことと合わないため）。
- `shot` が無い（`sticker_state` がつながっていない・読めない）、素材が 3D のときは、自分の Lane で置く。

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
| Camera の Keyframe の `frame`（`look_at` の Lane を含む。`aspect`・`projection`・`erp_range`・`loop` は変えない） | `r(frame)` |
| Clip range の `start` | `start' = r(start)` |
| 素材の先頭の位置 | `anchor' = r(start − in)` |
| Clip range の `in` | `start' − anchor'` |
| Clip range の `duration`（`null` 以外） | `r(start + duration) − start'` |
| `scene`・Sticker の Keyframe の `frame` | `r(start − in + frame) − anchor'` |
| `timeline.length`（`null` 以外） | `max(1, r(length))` |
| `background.clip` | Sticker の Clip range と同じ |

- Timeline 上のすべての出来事（Keyframe、Clip range の始まりと終わり、素材の先頭）は、新しい fps の半フレーム以内に丸まる。同じ時刻にあった Camera と Sticker の Keyframe は、同じ frame に落ちる。
- 丸めた結果、同じ Lane で `frame` が重なった Keyframe は、正規化の規則どおり後ろのものを残す。`duration` は正規化で 1 以上になる。
- 変えるのはフレームの値だけで、フレームでない項目（`scene.animation` などを含む）はすべて保つ。ハンドルと `look_at` の値（`offset`・`point`）は空間のずれなので変えない。`corner` と Sticker の `loop` も変えない。表示（`camera.visible`・`scene.visible`・Sticker の `visible`・`painting_visible`）も変えない。
- `id`・`next_sticker_id`・`upstream` も変えない。`port` の Sticker のずらしの Lane は、ほかの Sticker の Lane と同じく Keyframe の `frame` だけを変える。`upstream` の記録は自分の `fps` を持ち、その fps で読む（下記「上流の上書き（`upstream`）」）。
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
| `visible`・`locked`・`loop` | 真偽値 |
| `crop` | オブジェクトなら `crop` として正規化する |
| Lane | `placement` の Lane（`sky`：`direction`・`roll`・`size`・`opacity`・`curve`、`sky` の `port` の Sticker のずらし `offset_rotation`・`offset_fov`（層に届いた `sticker_state` が置く絵を、下流で動かす。下記「受け渡しの置き方」）、`world`：`position`・`rotation`・`scale`・`opacity`。`world` の `lens` の上書きは捨て、上流から引き継ぐ）。オブジェクトなら Lane として正規化する（`value` と、Easing・`corner`・ハンドルを含む `keyframes` のすべて）。上書きは Lane ごとに丸ごと置き換える |
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
- 層に無い `id` の上書きと消した記録は何もしない。Sticker の並び順は変えない。そうした記録は、エディタが編集を書き戻すとき（Undo の段を積むとき）に、今の実行結果にその層があれば捨てる（上流で消した要素の上書きと消した記録。結果に無い層の記録は捨てない。開いて閉じただけでは捨てない。`docs/editor-interaction.md` の「上流の Scene の作業コピーと上書き」）。
- 当てたときの結果の `upstream` は `[]`、`id`・`timeline`・`next_sticker_id` は層のまま。結果は正規化済みの状態で、`load_scene_state` に通しても同じになる。
- 鎖（A → B → C）では、B の記録を A に当てた結果に、C の記録を当てる。後に当てた記録が勝つ。
- `PANO_SCENE` の層の状態は、自分の `upstream` を持たない（`[]`）。Panorama Studio が `scene` 出力で自分の層の `upstream` を空にするためである（`scene_build.py` の `_scene_output`。上流の層はすでに上流の Studio が空にしている）。下流が層に当てる記録は、下流の状態の `upstream` だけである。
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
| `assets[asset_id]` が `type: "dataurl"`（埋め込み画像）・`type: "path"`、または資産が見つからない | Sticker を捨てる（ADR 0063） |
| `shots` のうちオブジェクトであるものの最初（Cutout。オブジェクトでない shot は除く） | `camera`（Camera あり、`projection` は `perspective`）。`yaw_deg`・`pitch_deg`・`roll_deg` は `rotation.value`、`hFOV_deg`（1〜179 に寄せる）は `fov.value`、`aspect = tan(hFOV/2) ÷ tan(vFOV/2)`（`vFOV_deg` の既定値 60、1〜179 に寄せる）。旧 Cutout の出力と同じ画面比になる。Stickers の v1 の状態は通常 `shots` を持たない（持っていれば Camera に写る） |
| `shots` がない、空、またはオブジェクトの shot が一つも無い | `camera: null`。読み込みが既定の Camera（Panorama モード、原点・回転 0。上の「既定の Camera」）にする。v1 の Stickers の状態はこれにあたる。v1 の Cutout でもこのときは同じ。v1 の Cutout はこのとき ERP をそのまま出力していた |
| `painting`・`painting_layer` | 同名のフィールド |
| `version`・`projection_model`・`alpha_mode` | 捨てる |
| `coverage`・`bg_color`・`output_preset` | 捨てる。ノードの入力（ウィジェット）が持つ |
| `ui_settings`・`active`・`editor_history` | 捨てる。エディタのセッションの状態であり、Scene ではない（`ui_settings` はブラウザ側にも保存されている）。エディタの選択状態（旧 `active`）は状態に置かない |
| `cutout_render_layer`、`source_state_hash`・`slot_key`・`source_kind`・`asset_id`、`assets` の `name`・`w`・`h` | 捨てる |
| `timeline` | 既定値（`fps: 24`、`length: null`）。v1 の `fps` 入力は状態にない |

旧ノード（`PanoramaStickers`・`PanoramaCutout`）が v1 の状態をそのまま描くときも、読む資産は `type: "comfy_image"`（ComfyUI の input・output・temp のファイル）だけで、ほかの資産の Sticker は描かない（ADR 0063）。

Sticker の位置と見た目は変わらない。`yaw_deg` は範囲に丸めない（v1 の描画も丸めない）。

## `sticker_state`

`projection` が `perspective` の Camera を持つ Panorama Studio が出力し、別の Panorama Studio の `sticker_state` 入力が受け取る（Pose handoff）。撮った Camera の動きを、焼き込まずに、Keyframe と関係のまま運ぶ（ADR 0067）。ほかの道具が書いて渡してもよい（Camera の Lane に、フレームごとの Linear の Keyframe を並べれば、書いたとおりに動く）。

```json
{
  "kind": "pano_sticker_state",
  "version": 3,
  "fps": 30.0,
  "length": 96,
  "camera": {
    "loop": false,
    "position": [{"frame": 0, "value": [0.0, 0.0, 0.0]}],
    "rotation": [{"frame": 0, "value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}}],
    "fov": [{"frame": 0, "value": 60.0}],
    "look_at": {"value": {"sticker": "sticker_3", "offset": [0.0, 0.35, 0.0]}, "keyframes": []}
  },
  "targets": [
    {"id": "sticker_3", "loop": false, "position": [...], "rotation": [...], "scale": [...], "box": {"center": [0.0, 0.0, 0.0], "size": [1.0, 1.5, 0.0]}}
  ],
  "source_aspect": 1.5
}
```

| フィールド | 型 | 既定値 | 意味 |
|---|---|---|---|
| `kind` | `"pano_sticker_state"` | — | |
| `version` | `3` | — | Keyframe の読み方の版。3 は、この文書の「Keyframe」と「補間」の規則（Smooth、角、形と進み具合）で読む |
| `fps` | 数値 | — | `frame` の基準となる fps。撮った Studio の状態の `timeline.fps`（Timeline fps に再基準化しない）。欠け・0 以下・数値でない値なら、その `sticker_state` は読まない（ADR 0063）。`timeline.fps` と同じ 1〜1000（`TIMELINE_FPS_MIN`・`TIMELINE_FPS_MAX`）に寄せる（フィクスチャ `sticker_state_fps`） |
| `length` | 数値 または欠け | 欠け | 撮った Studio の出力の長さ（`fps` 基準の frame 数）。ループの周期。欠けていれば、どの持ち主もループしない |
| `camera` | Lane ごとの Keyframe の配列（`position`・`rotation`・`fov`・`curve`（無ければ κ = 1））と、`loop`（真偽値、既定 `false`）、`look_at`（Lane、任意） | 各 Lane に Keyframe 一つ | 各配列の形は `state_json` の `camera` の同名の Lane の `keyframes` と同じ（`easing`・`corner`・`handles` を含む）。Keyframe のない Lane は、撮影した値を持つ `frame: 0` の Keyframe を一つだけ置く。空または不正な Lane は、既定値を持つ `frame: 0` の Keyframe 一つになる。`look_at` は `state_json` の `camera.look_at` と同じ形で、相手が無く Keyframe も無いときは書かない |
| `targets` | 配列（任意） | `[]` | `look_at` が `sticker` で指す物の動き。`id`、`loop`、`position`・`rotation`・`scale` の Keyframe の配列（Camera と同じ形。`frame` は Timeline 基準に直したもの：素材基準の frame に `start − in` を足す）、`box`（その実行での中身の箱。上記「Look at」の「中身の箱」）。`look_at` が指さない物は書かない。受け取る側は、これを使って撮った Camera の向きを同じ規則で求める |
| `source_aspect` | 数値 または `null` | `null` | 撮影した画面の幅 ÷ 高さ |

`load_sticker_state(text)` / `loadStickerState(text)` は v1・v2・v3 を読み、どれも v3 の形で返す（フィクスチャ：`sticker_state_v1.json`、`sticker_state_v2.json`、`sticker_state_v3.json`）。

- v2（前の版の Studio が出した形）も読む。Keyframe は `state_json` と同じ規則で読むが、欠けた `easing` だけは Smooth にせず、v2 の既定だった ease-in-out（`[0.42, 0, 0.58, 1]`）として読む。`"auto"` は Smooth として読む。`length`・`loop`・`look_at`・`targets` は無いものとして読む。
- v1（`pose` を一つ持つ形。`version` は数値の `1`）は、旧ノードの `parse_sticker_state` と同じ規則（yaw を −180〜180 に回す、pitch を ±89.9、`hFOV_deg` を 0.1〜179 に寄せる。`pose` と `source_aspect` の値は JSON の数値だけを読み、`"30"` のような文字列は読めない値とする。ADR 0063）で読み、各 Lane に `frame: 0` の Keyframe を一つずつ置く（`position` は `[0, 0, 0]`、`easing` は既定値）。`fps` は `24`。
- 空、JSON でない、`kind` が違う、v1 の `pose` が読めない、v2・v3 の `fps` が読めない場合は `None` / `null` を返す（無視される）。
- `kind` が一致して `version` が数値の `1`・`2`・`3` 以外（`"1"` を含む）なら、エラー `Unsupported sticker_state version <値>; supported versions are 1, 2 and 3.` にする。
