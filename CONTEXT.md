# Panorama Stickers

時間軸と 3D 空間を持つ Scene を組み立て、Camera で撮影する ComfyUI ノード群。ERP はその撮影方法の一つとして扱う。

## Language

### Scene

**Scene**:
撮影対象の全体。位置を持つ World と、無限遠の Sky からなる。
_Avoid_: キャンバス, 背景

**World**:
位置と奥行きを持つ 3D 空間。Camera の移動に応じて視差が生じる。
_Avoid_: 3D シーン

**Sky**:
Camera の位置に依存しない無限遠の層。背景 ERP、`sky` Placement の Sticker、ペイントが属し、Camera の回転だけを受ける。
_Avoid_: 天球背景, スカイボックス

**Sticker**:
一つの Source、一つの Placement、一つの Clip range を持つ Scene 内の要素。`sky` の Sticker の重なり順はペイントと共通の `z_index` で決まり、`world` の Sticker は奥行きで前後が決まる。
_Avoid_: Layer, Entity, Object

**Placement**:
Sticker の置き方。`sky`（方向と角度サイズ）または `world`（位置・回転・スケール）のどちらかで、途中で変わらない。

**Source**:
Sticker が表示する素材の出どころ。ノードの入力ポートから来るものと、エディタに投入されたファイルがある。
_Avoid_: Asset

### Time

**Timeline**:
出力の時間軸。Timeline fps と長さを持つ。

**Timeline frame**:
Timeline fps で数えた整数のフレーム番号。状態に保存する時刻はすべてこの単位で表す。
_Avoid_: 秒, タイムスタンプ

**Clip range**:
Sticker、`scene` 入力、Panorama Studio 自身の `bg_media`（背景）が Timeline 上で有効な範囲。`start`・`in`・`duration` で表す。

**Lane**:
Keyframe を持つ単位となるパラメータ。位置、回転、方向、サイズ、不透明度など。
_Avoid_: Keyframe group, トラック

**Keyframe**:
ある Timeline frame における Lane の値。

**Easing**:
Keyframe 間の時間方向の補間。cubic-bezier（既定は ease-in-out）、`auto`（止まらずに通過）、`hold` のいずれか。

**Motion path**:
位置の Keyframe 間を結ぶ空間方向の軌道。

**Cut**:
`hold` の Easing によって Camera を次の Keyframe へ瞬時に移すこと。専用の仕組みは持たない。

### Capture

**Camera**:
Scene を撮影する唯一の視点。Panorama Studio はいつも 1 台持ち、消せない（既定は World の原点・回転 0。ADR 0029、ADR 0048）。位置・回転・FOV と、静的な撮り方のモード（Panorama＝ERP か Frame＝透視投影。使う人が選ぶ）を持ち、Keyframe で Timeline 全体にわたって動かせる。隠しても撮る。
_Avoid_: Shot

**Viewport camera**:
エディタと Preview で Scene を見て回るための視点。位置・向き・画角と注視点を持ち、出力には影響しない。
_Avoid_: 3DoF / 6DoF（視点は一つで、切り替えは無い）

**注視点（Target, `T`）**:
Viewport camera が持ち続ける点。回り込みの中心であり、パン・ホイール・前後の移動の量はここまでの距離で決まる。
見回し・パン・移動では画面の中央に付いて動き、決め直すのはダブルクリック・Frame Selected・Reset View だけ。
選んだ物があれば、回り込みはその中心を回る。
_Avoid_: ピボット, 焦点, 回転の中心

**世界の境界（World bound）**:
Viewport camera が出られない、原点を中心とする球。半径は目の高さの倍数で、Camera と置いた物を含むように広がる。
_Avoid_: 移動範囲, 上限（数のことと紛れる）

**目の高さ（Eye height, `E`）**:
パノラマを撮った目（原点）から地面までの高さ。世界の境界・注視点の距離の範囲・地面のグリッド・World に置く画像の大きさの物差し。
_Avoid_: スケール, 単位（素材の単位は変えない。ADR 0023）

**Projection**:
Camera で Scene を画像にする方法。ERP、透視投影など。

**背景の範囲（Background range）**:
背景の絵（Panorama Studio の入力 `background`、旧ノードの `bg_media`）が球のどこまでを覆うか。360（全周）か 180（前の半球）。出力の範囲ではない（出力の範囲は Camera の Panorama モードが持つ）。ADR 0048。
_Avoid_: coverage（旧ノードの入力の名前。Panorama Studio では使わない）

**Pose handoff**:
透視投影の Camera で撮影したときの Camera の軌道（`sticker_state`）を別の Panorama Studio の `sticker` に渡し、切り抜いた内容を撮影した位置と向きへ戻すこと。Camera が原点から動かなければ `sky` の Sticker、どこかのフレームで原点から離れれば Camera の前方 2 に置く `world` の Sticker になる。実行のたびに引き継ぎ、下流で触った Lane（`handoff_overrides`）だけが下流の値になる（ADR 0030）。

**PANO_SCENE**:
Panorama Studio が出力する Scene の値。Camera を含まない。状態と入力素材を結び付けた派生値であり、正は各ノードの `state_json` にある。

### 画面の言葉

使う人が画面とノードの入出力で目にする言葉と、データの言葉の対応。画面には左の列の言葉だけを出す（ADR 0048）。

| 画面の言葉 | データの言葉 | 意味 |
|---|---|---|
| Sticker | Sticker | 置く物・往復で戻ってきた物（画像・動画・3D） |
| Sky / World | `placement` の `sky` / `world` | Sticker の置き場所（無限遠に貼る／空間に置く） |
| Background（入力 `background`、設定 `background_color`・`background_range`） | 背景 ERP（旧ノードの `bg_media`・`bg_color`・`coverage`） | 背景のパノラマ（Sky の層の一番下） |
| World（入力 `world`） | 状態の `scene` の要素 | その場所の土台の 3D（選べず、動かさない） |
| Scene（入力・出力 `scene`） | `PANO_SCENE` | Scene の全体。入力の `scene` は別の Panorama Studio からのつながりだけを受ける |
| Camera（タブ・カード・ボタン） | `camera` | 撮る視点。いつも一台 |
| Panorama / Frame | `camera.projection` の `erp` / `perspective` | 撮り方のモード。画面に ERP・Equirectangular・Perspective と出さない |
| 360° / 180° | `camera.erp_range`、`background_range` | 範囲 |
| From ＜ノードの名前＞ | 上流の層（upstream） | 上流の Studio から受け継いだ物のまとまり。画面に Upstream と出さない |

