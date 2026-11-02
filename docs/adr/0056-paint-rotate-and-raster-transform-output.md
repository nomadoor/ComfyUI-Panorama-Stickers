# ADR 0056: ペイントのまとまりを回せるようにし、ノードの出力もラスタの大きさと回転を描く

## Status

Proposed（2026-11-01）

## Date

2026-11-01

---

## 背景

新しい Studio のエディタでは、Cursor の道具でペイントのまとまり（ストロークのまとまり `paint_group:<actionGroupId>` とラスタ
`raster:<id>`）を動かし、四隅で大きさを変えられる。回す操作は無く、`docs/studio-ui.md` の「まだ決めていないこと」に残っていた。

古い UI は、ストロークのまとまりを回す式（`web_src/editor/items.js` `applyStrokeGroupTransform` の角度）を持つが、回転のハンドルの当たりを
返さない（`web_src/editor/hit_test.js` `handleHit`）ので、使う人は回せなかった。その式は ERP の u と v をそのまま回すので、90° 回すと
横幅が半分になる。ラスタには回す操作が無い。ラスタの `transform.rot_deg` は、エディタが ERP の画素の平面で描く（`web_src/pano_paint_display.js`
`placeRasterObjectErp`）が、選んだ枠と当たり（`web_src/pano_paint_objects.js` `rasterObjectCornersUv`・`rasterObjectAlphaAt`）は u と v を
そのまま回すので、`rot_deg` が 0 でないと絵と枠がずれる。

ノードは、ラスタを `painting_layer` の有無によらずいつも状態から描く。Panorama Studio（`core/render.py` `_sky_layers`）も、旧ノードの
PanoramaStickers・PanoramaCutout（`nodes.py` から `core/display_layers.py` `compose_display_list_to_overlay_rgba` と
`core/painting.py` `render_painting_to_erp`）も、同じ `core/painting.py` `_composite_one_raster_object` を通る。その式（`_uv_bbox_to_pixels`）は
`du`・`dv` だけを使い、`scale` と `rot_deg` を使わない。古い UI でも新しい UI でも四隅で大きさを変えたラスタは、今もエディタとどのノードの
出力でも大きさが違う。消しゴムがラスタに届くかの判定（`web_src/pano_paint_strokes.js` `erasePaint`、`web_src/pano_raster_eraser.js`）も
`du`・`dv` だけで範囲を求める。

## 決定

- ペイントのまとまりに回転のハンドルを置く（持ち主の決定、2026-11-01）。見た目・席・当たり・Shift の止め方（`ROTATE_SNAP_DEG`）は、
  空に貼った画像の回転のハンドルと同じにする。ストロークのまとまりは点を回して書き換え、ラスタは `transform.rot_deg` を書く。
  状態の形は変えない（`rot_deg` は今もある）。
- 回すのは、経度と緯度を同じ度で測る平面（2:1 の ERP の画素の平面）とする。ラスタを描く式がすでにこの平面で回しているので、
  ストロークのまとまり、ラスタの枠と当たり、ノードの出力をこれにそろえる。
- ノードの出力も、ラスタの `scale` と `rot_deg` をエディタと同じ式で描く（持ち主の決定、2026-11-01。同じ作業で直す）。式は一か所
  （`docs/render-contract.md` の「ペイントのラスタの置き方」）に置き、Python と JS は同じフィクスチャを読む test で一致を守る。
- ラスタの占める画素の範囲は変形した枠の四隅から求め、消しゴムの判定とノードの描く範囲が使う。
- ストロークのまとまりを回す中心は、点の重心とする（回しても動かないので、何度回してもずれていかない）。ラスタは枠の中心に `du`・`dv` を
  足した所（描く式と同じ）。
- 平面の度から描く ERP の画素への写し方は、JS も Python も明示して使う（エディタのキャンバスは奇数の幅で 2:1 から 1px 未満ずれ、
  ノードの ERP の出力の大きさは使う人が決めるため）。

## 試して捨てた案

- 古い UI の式のまま、u と v をそのまま回す：90° 回すと横幅が半分になり、形が変わる。ラスタを描く式とも合わない。古い UI でも
  使う人が触れる道が無かったので、そろえても今の絵は変わらない。
- 球面の上で回す（中心の向きのまわりの回転）：極の近くでも形を保つが、動かす・大きさを変える式（ERP の u・v の上。古い UI と同じ
  結果にそろえるため）と、ラスタを描く式（ERP の画素の平面）の両方と合わなくなる。
- ストロークのまとまりの枠を回した向きのまま持つ：枠の向きを状態に持つ必要があり、状態の形が変わる。枠は回した点から ERP の軸に
  そろえて描き直す。
- ノードの出力の直しを後に回す：回したラスタが出力で回らず、エディタで見たものと違う絵が出る。

## Consequences

- 使う人はペイントのまとまりを回せ、回したラスタも大きくしたラスタも、ノードの出力がエディタと同じ置き方で描く（縁の画素の濃さは
  補間の違いで揃わない）。
- 意図した変更（同じ原因）：`scale` が 1 でないラスタは、Panorama Studio と旧ノード（PanoramaStickers・PanoramaCutout）の出力で、
  元の大きさからエディタと同じ大きさに変わる。Python の画素の読み方も、LANCZOS の縮小から画素の中心の双線形に変わるので、縁の画素が
  少し変わる。旧ノードと Studio の基準画像（`tests/test_legacy_goldens.py`。`stickers_paint_interleaved`・`studio_paint_interleaved` を含む）は
  ラスタオブジェクトを持たないので変わらないはずで、エディタの `tests/fixtures/paint_rasters_golden.json` も変わらないはず。変わったら理由を
  確かめてから焼き直す。
- 古い UI でも、`rot_deg` が 0 でないラスタの枠と当たりが絵と合う（同じ下の部品を使うため）。古い UI に回す操作は足さない。
- ストロークのまとまりを斜めに回すと、ERP の軸にそろえた枠は大きくなる。極の近くでは ERP の歪みのまま形が変わる（動かす・大きさを
  変えるのと同じ）。
