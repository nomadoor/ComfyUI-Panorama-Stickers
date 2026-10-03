# ADR 0023: シーン先行とワールド座標系

## Status

Accepted

## Date

2026-09-30

## Supersedes

- ADR 0017 の world axis の記述（zero rotation の forward を `+Z` とする定義）

---

Scene を位置を持つ World と無限遠の Sky の二層として扱い、ERP・透視投影・将来のステレオは Camera による Projection の一つとする。VR まで見据えると視差が必要であり、ERP を主役とする 3DoF の構造では拡張できないためである。

World の座標は glTF（右手系・Y 上・前方 `-Z`）とし、長さの単位は入力素材のままとする。既存の ERP と yaw / pitch / roll の規約は左手系（`+Z` 前方）なので、World へ渡す一か所でだけ Z を反転する。角度は常に既存のパノラマ規約で定義し、位置だけが glTF 座標となる。SPLAT や MoGe などの変換はコアの定義に従う。背景 ERP と `sky` Placement の Sticker は無限遠にあり、Camera の回転だけを受ける。ERP 出力には Camera の回転も反映する（Stickers の ERP 出力は ADR 0028 で原点・回転 0 に固定した。Camera を持つのは Cutout だけである）。

## Considered Options

既存の左手系を World とし、3D 素材を鏡映して取り込む案は退けた。コアの `camera_info`・MESH・Load3D・MoGe はすべて glTF 規約であり、入口ごとにメッシュのワインディングや四元数の鏡映処理が必要になるためである。V2（`feat/scene-6dof`）でも、座標系の表記と実際の計算が食い違う原因になった。
