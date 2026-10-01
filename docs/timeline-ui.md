# タイムラインと Keyframe の UI

エディタのタイムラインで Keyframe を打つ・直す・消すときの規則を定める。データの形は `docs/scene-state-v2.md`、決定の理由は ADR 0026 にある。

内部ではパラメータごとの Lane を細かく制御できるが、最初の版の UI はオブジェクト単位の操作を基本にする。Lane を一本ずつ扱うグラフエディタや、After Effects のストップウォッチのような UI は作らない。

## 記録の規則

| 状況 | パラメータを変えたときの結果 |
|---|---|
| その Lane に Keyframe がない | 静的な値が変わる。Keyframe は入らない |
| その Lane に Keyframe があり、再生ヘッドがその Lane の Keyframe の上 | その Keyframe を更新する |
| その Lane に Keyframe があり、再生ヘッドが Keyframe 以外 | そのフレームに Keyframe を入れる |

- 判定は Lane ごとに行う。変えた Lane にだけ Keyframe が入る。
- 「再生ヘッドが Keyframe の上」は、評価関数と同じ許容差（`FRAME_EPSILON`）で比べる。Sticker と `scene` の Lane は、Timeline frame を素材基準（`frame − (start − in)`）に直して比べる。
- ドラッグ中は、最初の変化でそのフレームに Keyframe が入り、以後はその Keyframe を更新する。
- Keyframe のある Lane を変えても、静的な `value` は変えない。Lane の最後の Keyframe を消したときは、その Keyframe の値を `value` にする（消した瞬間に値が飛ばない）。
- タイムラインの行のポチを押すと、その時点の値で全 Lane に Keyframe が入る（あれば更新する）。最初の Keyframe もこの操作で打つ。
- Keyframe と Keyframe の間に入れた Keyframe の Easing は、入れた区間の Easing を引き継ぐ。前後の区間がどちらも元の区間と同じ Easing になる。手で曲げた cubic-bezier も同じ値をそのまま写す（元の動きと厳密には一致しない）。最初の Keyframe より前に入れたときは、新しい Keyframe の Easing を既定値の ease-in-out とする。最後の Keyframe より後に入れたときは、それまで最後だった Keyframe の Easing（使われていなかった値）が新しい区間に掛かり、新しい Keyframe の Easing は既定値とする。
- Keyframe を消せるのは、タイムラインで選んで Delete したときだけ。消した後は残った Keyframe で補間し直す。全 Keyframe を一度に消すスイッチは作らない。
- インスペクタには Keyframe を打つボタンを置かない。
- 見回しは Viewport camera で行い、Camera の値は変えない。Camera の値を変えるのは、Camera を操作するとき（Cutout の frame タブ、Stickers で Camera の行を選んだときの操作とインスペクタ）だけである。

## Easing

- 既定値は ease-in-out。Easing は区間ごとに、インスペクタのパネルで選ぶ（cubic-bezier のプリセットと曲線、`auto`、`hold`）。タイムラインの上で直接は曲げない。
- cubic-bezier の制御点の縦方向は 0〜1 に限る。

## タイムラインの表示

タイムラインはオブジェクトごとに一行である。閉じた行が基本で、▶ で開くと Lane ごとの行が出る。

閉じた行：

- そのフレームにある Lane の Keyframe を、一つのポチにまとめて表示する。全 Lane にあれば塗りつぶし、一部の Lane だけなら半分の塗りにする。
- ポチの移動・削除・Easing の変更は、そのフレームの全 Lane の Keyframe にまとめて効く。移動先のフレームに同じ Lane の Keyframe があれば、移動したほうで置き換える。
- 選んだポチの Lane ごとに Easing が違うときは、Easing の欄に「混在」と出す。Lane の最後の Keyframe の Easing（使われない値）は比べない。そこで選ぶと全 Lane がその Easing にそろう。

開いた行：

- Lane ごとに Keyframe を表示し、Lane 単位で選択・移動・削除・Easing の変更ができる。

## Camera のモード

Camera は Keyframe と Drone の二つのモードを持ち、出力にはいま選ばれている方だけを使う。両方のデータは独立に保持し、切り替えても他方は消えない。一本のタイムラインの中で混ぜることはしない。Camera のタイムラインは Stickers（ERP 出力の向き）と Cutout の両方が持つ。画角はどちらのモードでもインスペクタで変える値で、Drone では Keyframe を持たない一定の値である。Drone モードのとき、Camera の行にポチは出さない（位置と回転は通過点から決まる）。Drone の通過点・道筋・状態の項目は Drone の ticket で定める。
