# ADR 0043: glTF の skin・morph・node のアニメーション

## Status

Accepted（2026-10-11。状態の形 `animation: {clip: 名前 または null, speed}` と、clip の 1 周を Auto の長さに数えることはオーナーが決めた）

一部（中身の箱は休みの形のまま）を `docs/studio-node.md` の「中身の箱」が置き換えた：アニメーションを持つ 3D ファイルの箱は、最初の clip の時刻 0 の姿勢から作る（2026-10-11、オーナー承認）。

## Date

2026-10-11

---

## 背景

ADR 0037 の条件 8 は glTF のアニメーション（node・skin・morph）を描くものに入れ、ADR 0038 は時期だけを後にした（コアの glTF の読み手が skin と morph を捨てるため）。オーナーの目的：コアの Load3D がアニメーションでできることは、Panorama Studio でもできる。clip の編集・切り出し・混ぜ合わせ、骨の編集、IK は作らない。最初の 1 本：RobotExpressive.glb を置き、Walking の clip を選び、エディタと出力で同じフレームに同じ姿勢を得る。

Load3D がすること（`ComfyUI_frontend` の `AnimationManager.ts` と `useLoad3d.ts` で確かめた）：

- clip を 1 つ選ぶ（番号。一覧は元のファイルの順、名前の無い clip は `Animation <n>`）。読み込むと最初の clip が選ばれ、止まった状態で clip の時刻 0 の姿勢を出す（休みの形ではない）。
- 再生と一時停止、速さ（0.1・0.5・1・1.5・2 の選択）、シーク（0〜長さに寄せる）。繰り返しは `LoopRepeat` だけで、選べない。
- これらの値は Vue の `ref` で、ワークフローには保存しない（読み込み直すと最初の clip、速さ 1、停止に戻る）。

## 決定

- 状態（オーナーが承認、2026-10-11）：3D ファイルの Sticker と `scene` に `animation: {"clip": 名前 または null, "speed": 数値}`。ワークフローに保存する（Load3D は保存しない）。`null` は最初の clip（Load3D の既定）。繰り返しは Load3D と同じ `LoopRepeat` だけなので値を持たない。再生・一時停止・シークはタイムラインが受け持つ。Keyframe は持たない。
- clip は名前で持つ：ファイルを差し替えて clip の順が変わっても同じ動きを選べる。番号は Load3D の内部の選び方だが、保存されないので名前の方が壊れにくい。名前が無いか見つからなければ最初の clip にして警告する。
- 既定（main session が決めた）：置いたアニメーションのファイルは、最初の clip でタイムラインに沿って動く（Load3D が最初の clip を選ぶのに合わせる。時計は再生ヘッドだけ）。
- 速さは 0.1〜10 の連続の値（Load3D の 5 段の選択を含む。0 以下は 0.1 に寄せる）。
- 時刻：Sticker の clip frame の秒 × `speed` を clip の長さで繰り返す。
- 長さ（オーナーの決定、2026-10-11）：アニメーションを持つ 3D の Sticker と `scene` は、clip の 1 周（clip の長さ ÷ speed）を、VIDEO の素材と同じく要素の Clip range の始まりから Auto の長さに数える。5 秒の clip だけなら Timeline は 5 秒、もっと長い VIDEO があれば長い方が勝って clip は繰り返す。`timeline.length` があればそれが勝つ。
- 基準は three.js r184（Load3D の見え方）：補間（`slerpFlat`、`CUBICSPLINE` の正規化、`STEP`）、4 つまでの影響（`JOINTS_0`・`WEIGHTS_0`）、重みの正規化、skin の mesh の node の行列の扱い。Python の評価をそれに合わせ、three.js を Node で動かして焼いた fixture で縛る。
- 形の式：`P` を primitive 自身の `POSITION`（mesh の座標）として、skin のある頂点は `p = Σ wₖ B_k(t) IBM_k · (P + Σ mᵢ Δᵢ)`、skin の無い頂点は `p = M_node(t) · (P + Σ mᵢ Δᵢ)`。three.js r184 の `SkinnedMesh` は既定の `AttachedBindMode` で、毎フレーム `bindMatrixInverse` を `matrixWorld` の逆にするので、skin の頂点では mesh の node の行列が打ち消し合う。three.js r184 を Node で動かして焼いた fixture で確かめた。コアのまとめた頂点（コアが `M_node(0) · P` を置いたもの）は、primitive との対応の照合にだけ使う：コアの公開の `load_gltf` の `prims[i]["positions"]` と自分のたどりの `M_node(0)·P` が float32 で完全に等しいことで確かめ、違えばエラーにする（コアのたどる順を写さない）。形は `P` から作り直す。
- エディタは元のファイルの既定の scene を GLTFLoader で読み、その `SkinnedMesh` と morph をそのまま描く。材質は、今の静止の GLB（`save_glb` の出力）を GLTFLoader で読んだ材質を一つ取り、すべての mesh に当てる（コアは `alphaMode`・テクスチャの変形・`TEXCOORD_1`・遮蔽・PBR の拡張を落とし sampler を書き直すので、静止の GLB の材質がすでに出力と同じ）。その材質が頂点色を使い、元の形に `color` が無ければ 1 の `color` を足す。光が効くかは今の `makeLit`・`makeUnlit`。当たり判定は今の物ごとのマテリアルに three.js の skin と morph の部品を足す（`SkinnedMesh` のときだけ three.js が有効にする）。付けたしのファイルや JS の頂点の対応は作らない。箱は静止の GLB の箱（中身の箱と同じ値）。
- 中身の箱は休みの形（bind の形）のまま。読んだ骨・重み・morph・clip は `mesh_files` のキャッシュに入れる。
- エディタへのメタは `animation: {source, clips: [{name, duration}]}`（clip はファイルの順、名前の無い clip は `animation_<番号>`）。外部の `.bin` を持つ `.gltf` と `/view` の外のファイルには付けず、エディタは静止で描く。
- ノード上の表示の Auto の長さも、3D ファイルの Sticker の clip を経路に問い合わせて数える（表示の全体で 1 つの記録を共有する）。実行の前から出力と同じ長さにするためで、実行結果の `pano_timeline_frames` は編集の後に古くなるので使わない。

## 考えた別案

| 案 | 選ばなかった理由 |
|---|---|
| clip を番号で持つ | ファイルの clip の順が変わると別の動きになる |
| 既定を休みの形（アニメーションなし） | Load3D は最初の clip を選んだ姿勢を出すので、置いた瞬間の見た目が Load3D と違う |
| 繰り返しの種類（一度だけ、往復）を持つ | Load3D に無い。目的は Load3D と同じことができること |
| エディタがコアの GLB の形に、Python が書く joint・重みの付けたしのファイルで skin を組む | 付けたしの形式と JS の頂点の対応が増える。元のファイルを three.js がそのまま描けば、形は値の照合で出力と同じと確かめられ、材質だけを合わせればよい |
| エディタが元のファイルを材質ごとそのまま描く | 材質（コアは最初の材質だけ）が出力と違う |
| skin を持つ GLB を自前で書き出す | GLB の書き出しの owner が二つになる（コアの `save_glb` は skin を書かない） |
| エディタに補間と skinning の式を JS で写す | 規則の二つ目の写しになる。three.js がすでに基準である |
| 中身の箱を clip の全体の範囲にする | clip を選ぶたびに置いた位置の基準が変わる。全体を数える手間もかかる。次の候補 |

## Consequences

- 状態 v2 に `animation` が加わる（parameter format の変更。オーナーが承認）。
- コアのまとめた頂点と自分のたどりを値で照合し、合わなければエラーで止める。コアの読み手が変わると、この照合が落ちる（黙って崩れない）。
- エディタの材質は静止の GLB から取るので、材質の差は静止の場面と同じ範囲にとどまる。元のファイルの形と静止の GLB の形が同じであることは、Python の値の照合が守る。
- 法線の変え方など、glTF の仕様と three.js が違う所は three.js に合わせる。
- 費用（RTX 4070 Ti、κ = 1、RobotExpressive の Walking、World の層、計測）：4K 75 ms、8K 247 ms。clip の評価 0.24 ms、形の作り直し 1.7 ms で、出力の大きさによらない。
- エディタとの一致（llvmpipe）：4 つの場面（光が効かない・効く、clip の時刻 0.25 秒・繰り返しの時刻）はすべて合格した。
- 次の候補：clip の全体の中身の箱、`JOINTS_1` 以降、上流の要素の `animation` の上書き（ADR 0030）、外部の `.bin` を持つ `.gltf` のエディタでの再生、`scene` の Clip と Speed の行（`scene` はエディタで選べないので、今は行を出さない）、bind の形が見える形と違うファイルの箱（Xbot は bind の形が姿勢の形の 0.01 倍で、中身の箱と収めて置く位置が見えるモデルの約 1/100 になる）。
