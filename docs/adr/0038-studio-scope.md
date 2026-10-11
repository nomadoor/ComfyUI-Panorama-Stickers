# ADR 0038: Panorama Studio の範囲

## Status

Accepted（2026-10-09。著者の案 1〜5 もオーナーが承認した）

一部（「作らないもの」の clip を選ぶ・速さを変える編集）を ADR 0043 が置き換えた（2026-10-11）。

## Date

2026-10-09

## Supersedes

- ADR 0037 の「満たすべき条件」8 のうち、光源（平行・点・スポット）と影。「D の設計の規則」の「三つの描き分け」、shadow map の値を
  状態に持つこと、「光源の型」。これらは作らない（下の「照明」）。ADR 0037 の残り（torch の光線方式、カメラの型、影以外の一致の
  測り方）はそのまま。
- ADR 0026・0028・0029 の Drone への言及。Drone は作らない。

古い ADR の本文は直さず、Status に「一部を ADR 0038 が置き換えた」と記す。

---

## 背景

光源・アニメーションの clip・レンズの値を状態のどこに持つかを決める途中で、項目が増え、ノードが汎用の 3D ツールに近づいていた。
オーナーは、このノードの目的に戻って範囲を絞ると決めた（2026-10-09）。

## オーナーの決定（2026-10-09）

### 物差し

Panorama Studio がするのは、次の繰り返しである。

1. パノラマと 3D の空間に入る。
2. 撮る（将来は 3D の空間を切り抜く）。
3. 撮ったものを、外の画像編集・動画編集のモデルで編集する。
4. 空間に戻す。

撮った絵はそのまま使う完成品ではなく、下流のモデルに渡す下書きである。光・陰影・質感は下流のモデルが描き直す。撮影
（Camera とレンズ）がこのノードの最大の強みである。UI は最小にする。新しい機能は、この繰り返しに要るかで決める。

### 照明

- 照明を切り替える UI も、状態の項目も持たない。光源を足す機能と影は作らない。
- 光が効く素材は、いつも同じ既定の照明で描く。値は ComfyUI の Load3D の既定と同じ（出典：ComfyUI_frontend の
  `src/extensions/core/load3d/LightingManager.ts` の光源と倍率、`src/extensions/core/load3d.ts` の `Comfy.Load3D.LightIntensity`
  の既定 3。手元の checkout 5276d1b で確認）。影なし、tone mapping なし。値と光の式は `docs/render-contract.md` が一か所で持つ。
- どの素材に光が効くかは、ノードが素材から決め、使う人には見せない（規則は下の著者の案）。

### 時間で変わる 3D

- 要る。MESH・SPLAT のバッチと `MOGE_GEOMETRY` は、今も要素を出力のフレームに順に対応させて描く（`docs/studio-node.md`）。
- `scene` と `sticker` は `DA3_GEOMETRY`（コアの Run Depth Anything 3 の出力）を直接受け、フレームごとのメッシュにする。コアの
  Convert DA3 Geometry to Mesh は `batch_index` の 1 つしか出さないので、それを通すと動きが失われる。
- ほかの形式（4DGS の連番 PLY、独自の型など）は、出てきたときに一つずつ決める。4DGS のファイル形式には標準が無い。

### レンズ

- レンズの歪み（Brown–Conrady）、魚眼、被写界深度は要る。機能の段で作り、UI の段より前に入れる。描き方は ADR 0037 の
  カメラの型による。

### Drone

- 作らない。止まらずに複数の点を通る動きは、Keyframe の `auto`（ADR 0026）でできる。撮りにくい動きが出たら、Keyframe の側に
  足す（たとえば進む向きを向く、一定の速さ）。

## 著者の案（オーナーが承認）

1. **光が効く素材**（承認 2026-10-09）：光が効くのは MESH 型の要素で、コアの `MESH.unlit` の印が偽のものだけ。印は glTF の `KHR_materials_unlit`
   から読まれ、コアの splat からメッシュへの変換も立てる。Panorama Studio が自分でメッシュにする `MOGE_GEOMETRY`・
   `DA3_GEOMETRY`、スプラット、背景、Sky、ペイント、2D の板は MESH 型ではないので照らさない。
   - 同じ GLB を 3D ファイルとして置いても、Get3DComponents の MESH としてつないでも同じになる。コアの印に従うので、SaveGLB で
     書いて Load3D で見たときとも同じになる。例外：コアの SaveGLB はテクスチャのある MESH には `unlit` を書かないので、
     テクスチャ付きで印の立った MESH は、Load3D では照らされ、Panorama Studio では照らされない。
   - コアの MoGePointMapToMesh の MESH は印が無いので照らされ、写真の光と二重になる（Load3D で見ても同じ）。避けたいときは
     `MOGE_GEOMETRY` を直接つなぐ。
   - コアの読み手は最初の材質だけを取る（`comfy_extras/nodes_mesh_io.py`）。複数の材質は 3D ファイルの投入の作業で扱う。
   - 材質の無い OBJ・STL も照らす。
2. **要素ごとの明るさは持たない**（承認 2026-10-09）。暗くて形が読めない素材が出たら、要素ごとの倍率として後から足せる。
3. **3D ファイルの中の光源（`KHR_lights_punctual`）は読まない**（承認 2026-10-09）（光源を持たない決定から）。
4. **glTF の skin・morph のアニメーションは後に回す**（承認 2026-10-09）（コアの glTF の読み手は skin と morph を捨てるので、torch で評価する部分を
   作る必要がある）。ADR 0037 の条件 8 の該当部分は残し、時期だけ後にする。
5. **機能の段の順**（承認 2026-10-09）：3D ファイルの投入 → `DA3_GEOMETRY` → Preview の PANO_SCENE の表示 → レンズ → glTF のアニメーション。

## spec で決めること（オーナーに聞く）

- `DA3_GEOMETRY` の mono（intrinsics が無く、コアは約 60° の仮の画角を使う）と multiview（要素は同じ場面の視点で、時間では
  ない。視点ごとの extrinsics を持つ）の扱い。仮の画角と OpenCV から glTF への変換は座標の規約に当たる。
- レンズの値の置き場と UI。主点の向きは座標の規約に当たる。

## 今の出力への影響

Panorama Studio はまだ main に入っていない（main は 1.5.2）。照明の変更で見た目が変わるのは、この branch の Panorama Studio で
MESH・3D ファイルを描いた出力だけで、公開済みのワークフローは変わらない。旧ノードは変えない。

## 作らないもの

光源を足す機能、影、Camera の Drone のモード、clip を選ぶ・切る・速さを変える編集。

## Consequences

- spec を先に直す：
  - Drone を消す：`docs/timeline-ui.md`、`docs/scene-state-v2.md`、`docs/studio-node.md`、`CONTEXT.md` の Drone と Camera の項
    （glossary の変更）。コードの `comfyui_pano_suite/nodes.py` の docstring の言及も。
  - 照明：`docs/render-contract.md`（既定の照明の値と式、光が効く素材の規則）、`docs/threejs-spark-integration.md`（エディタは
    今すべての材質を `MeshBasicMaterial` にして光源を持たない。`web_src/pano_scene_loaders.js`）。光が効くかの印は
    Python・JS・エディタ用ファイルをまたぐので、設計を先に合わせる。今の `comfyui_pano_suite/scene_mesh.py` の `MeshItem` は
    `unlit` を捨てているので、`MeshItem` と PANO_SCENE が印を運ぶようにする。コアの書き出しはテクスチャのある MESH に印を書かないので、エディタへの運び方（エディタ用の meta など）は設計で決める。
  - `DA3_GEOMETRY`：`docs/studio-node.md`、`docs/render-contract.md`。
- ADR 0037 の一致の測り方の影の場面と、平行光源 1 つの PBR の場面は、既定の照明で描いた場面に置き換える。`docs/runtime-resources.md`
  に足す予定だった shadow map の見積もりは要らない。
