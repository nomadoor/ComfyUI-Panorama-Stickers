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
一つの Source、一つの Placement、一つの Clip range を持つ Scene 内の要素。重なり順はリスト順で決まる。
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
Sticker や 3D シーン入力が Timeline 上で有効な範囲。`start`・`in`・`duration` で表す。

**Keyframe group**:
まとめて Keyframe を打つプロパティの組。変形一式、不透明度など。

**Keyframe**:
ある Timeline frame における Keyframe group の値。

**Easing**:
Keyframe 間の時間方向の補間。`auto`（止まらずに通過）、cubic-bezier、`hold` のいずれか。

**Motion path**:
位置の Keyframe 間を結ぶ空間方向の軌道。

**Cut**:
`hold` の Easing によって Camera を次の Keyframe へ瞬時に移すこと。専用の仕組みは持たない。

### Capture

**Camera**:
Scene を撮影する唯一の視点。位置・回転・FOV を持ち、Timeline 全体にわたって Keyframe を打てる。
_Avoid_: Shot

**Viewport camera**:
エディタで Scene を見回すための視点。出力には影響しない。

**Projection**:
Camera で Scene を画像にする方法。ERP、透視投影など。

**Pose handoff**:
Cutout で撮影したときの Camera の軌道を Stickers に渡し、切り抜いた内容を撮影した位置へ戻すこと。

**PANO_SCENE**:
Stickers が出力する Scene の値。状態と入力素材を結び付けた派生値であり、正は Stickers の状態にある。
