# ADR 0029: Scene の構築と撮影を Panorama Studio にまとめる

## Status

Accepted

一部（Drone への言及）を ADR 0038 が置き換えた（2026-10-09）。

一部（受け取ったノードで上流の要素を選べず動かせないこと、上流の要素を自分のタイムラインに出さないこと、Consequences の「`sticker_state` が渡すのは Camera の向きと画角で、位置は渡さない」）を ADR 0030 が置き換えた（2026-10-05）。

一部（`camera` は `null`（無い）か Camera のオブジェクト）を ADR 0048 が置き換えた（2026-10-30。Camera はいつも一台、`null` は既定の Camera として読む。ADR 0048 と一緒に承認する前提。0048 が Proposed の間は置き換えていない）。

一部（Consequences の「見回せるパノラマの表示」と、追記（2026-10-05）のノード上の表示の段落：実行の出力を示すこと、見回せるパノラマ、注記）を ADR 0049 が置き換えた（2026-10-30。ノード上の表示は撮る Camera の出力をその場で描く。0049 が Proposed の間は置き換えていない）。

## Date

2026-10-03

## Supersedes

- ADR 0025 の「Stickers は Scene を組み立て、Cutout と Preview が撮影・表示する」と、新しい ID の `PanoramaStickersNode`・`PanoramaCutoutNode`（`PanoramaPreviewNode` は残る）
- ADR 0027 の出力の表（Stickers と Cutout の行、`pano_scene` の名前）
- ADR 0028（Stickers は Camera を持たず、撮影は Cutout だけが受け持つ）と、ADR 0023 のそれを指す括弧書き

---

Scene を組み立てて撮るノードを一つにし、Panorama Studio とする。ノード ID は `PanoramaStudio`、表示名は `Panorama Studio`。`PanoramaStickersNode`・`PanoramaCutoutNode` は main に出ていないので登録から外し、置き換え（NodeReplace）は作らない。旧ノード（`PanoramaStickers`・`PanoramaCutout`・`PanoramaPreview`）はそのまま残す。

Stickers と Cutout は同じエディタ・同じ描画・同じ Timeline を使っており、違いは Camera の有無だけだった。二つに分けたことで、Sticker の動きと Camera の動きを別々のエディタの別々のタイムラインに打つことになり、物を追うカメラワークのように両方を合わせて作れなかった。3D の素材を撮るだけでも、何もしない Stickers を挟む必要があった。

## Camera

Panorama Studio は Camera を 1 台まで持つ。状態 v2 の `camera` は `null`（無い）か Camera のオブジェクトで、欠けは `null` と同じ。Camera が無いときは World の原点から回転 0 で撮った ERP を出す（これまでの Stickers と同じ）。Camera を足すと、その Camera で撮る（これまでの Cutout と同じ）。一本の映像の中のカット割りは `hold` の Keyframe で行い、別のアングルは別の Panorama Studio で撮る。

Camera は静的な `projection`（`perspective` か `erp`。Keyframe を持たない）を持つ。`erp` のとき `fov` と `aspect` は読まず、Camera の位置と回転から ERP を撮る。エディタではこれを画角のプリセットの一つ「360°」として見せる（`coverage` が 180 なら「180°」）。

ADR 0028 が避けたかったのは、Camera が見えないまま原点にあることと、「どこから撮るか」が二つのノードに分かれることだった。Camera を利用者が足して見える形で置き、一つのノードに一台だけにすれば、どちらも起きない。

## 入力と出力

入力は `bg_media`、`sticker`、`sticker_state`、`scene`、`bg_color`、`coverage`、`output_size`、`state_json`。`scene` は 3D の素材（MESH・SPLAT・3D ファイル）か、別の Panorama Studio の `scene` 出力を受ける。3D の素材は、それを置いただけの Scene として扱う。`coverage` は `bg_media` の範囲で、Camera が無いときと `projection` が `erp` のときは出力の ERP の範囲にもなる（180 は前方の半球）。

出力は `first_frame`・`first_frame_mask`・`video`・`scene`・`sticker_state`。`first_frame`・`first_frame_mask`・`video` は「このノードが撮ったもの」で、Camera が無ければ ERP、あれば Camera の映像になる。出力を ERP 用と Camera 用に分ける案は、出力の数が倍になるので退けた。今どちらを出しているかは、ノード上の表示で常に示す。`first_frame_mask` は、ペイントのマスクを同じ撮り方で写したもの。`sticker_state` は Camera の `projection` が `perspective` のときだけ中身を持ち、それ以外は空文字列（下流は無視する）。

## `scene` 出力と上流の Scene

`scene` 出力は撮影する世界であり、Camera を含まない。上流から受けた要素も含めて出す。受け取ったノードでは、上流の要素は見えるが選べず動かせず、上流のノードで直す。Scene の正は各ノードの `state_json` だけで、`scene` 出力は実行のたびに作る派生値である（ADR 0025 の原則は変えない）。`sky` は上流の層の上に自分の層を重ね、`world` は奥行きで混ざる。Timeline の fps は上流に合わせ、長さは上流と自分の長いほうとし、自分の `timeline.length` で短くできる。上流に `bg_media` があれば自分の `bg_media` は使わず警告する。上流のペイントのマスクも `first_frame_mask` に含める。上流の要素は自分のタイムラインに出さない。

## 出力の大きさ

`output_size` は全体の ERP の幅を選ぶ（1024・1536・2048・2560・3072・4096・auto。auto は `bg_media` の幅を 360° に換算したもので、`coverage` 180 なら 2 倍。`bg_media` が無ければ 2048 にして警告する）。Camera が `perspective` のときは、`f = 幅 ÷ 2π`（赤道で 1 ラジアンあたりの画素数）として、Camera の幅を `2·f·tan(hFOV_max ÷ 2)`、高さを `幅 ÷ camera.aspect` とし、どちらも偶数に丸める。`hFOV_max` は Timeline 上の hFOV の最大値。これで中央の細かさが ERP を下回らず、指定した画素数に引き伸ばしたり縮めたりもしない（大きさを変えたいときは下流で変える）。長辺が上限（4096）を超えるときは上限に収め、ノード上の表示と実行結果の警告で示す。4096 を超えるプリセットは、処理が現実的でないので持たない（要望があれば足す）。`output_megapixels` は持たない。

## Consequences

- 統合ブランチ上の `PanoramaStickersNode`・`PanoramaCutoutNode` を使ったワークフローは、読み込むとノードが見つからない。Panorama Studio を置いて `state_json` を貼り直す（状態は v2 のまま読める）。既存の Stickers の状態は既定の `camera` を持つので、貼り直すと Camera ありになる。Camera が要らなければエディタで消す。
- `PanoramaCutoutNode` の `source` は `bg_media` と `scene` に分かれる。Cutout の作業状態（`cutout_state`）は無くなる。上流の fps で開き、無編集なら保存しない規則は残す。
- Pose handoff は、Camera を持つ Panorama Studio の `sticker_state` を、別の Panorama Studio の `sticker` で受ける形になる。`sticker_state` が渡すのは Camera の向きと画角で、位置は渡さない。Camera を原点から離して撮った内容を `sky` の Sticker として貼り戻すと、無限遠の内容のほかはずれる。
- ノード上の表示は、出力の状態（ERP か Camera か、出力の画素数）を示し、見回せるパノラマの表示（編集はしない）とエディタを開く操作を持つ部品にする。今の Stickers のノード上での Sticker のドラッグと再生ボタンはやめる。
- Camera はエディタの左のツールバーから足す。Camera があるときそのボタンは無効になり、Camera は選んで削除する。Frame タブは Camera が無くても出し、無効にする。
- #85 は Camera の `projection` の `erp` として実装する。#81（Drone）は Panorama Studio の Camera の機能になる。
- CONTEXT.md の Camera・Pose handoff の項目と `scene` 入力の説明、render-contract・scene-state-v2・timeline-ui・threejs-spark-integration の Stickers と Cutout の節を直す。

## 追記（2026-10-05）

- 出力の並びを `first_frame`・`first_frame_mask`・`video`・`sticker_state`・`scene` に変えた。入力の `… sticker_state`・`scene` と同じ並びにして、Panorama Studio をつないだときに線が交差しないようにするためである。「入力と出力」の節の決定（出力の中身と意味）は変えない。`PanoramaStudio` は main に出ていないので置き換えは作らない。統合ブランチで保存したワークフローを読み込むと、`scene` と `sticker_state` の出力から出ていた線は、入れ替わった位置の出力につながるか、型が合わずに外れる。どちらの場合も、この二本をつなぎ直す。
- ノード上の表示は、一度実行すると常に直近の実行の出力を示す。ERP の出力は見回せるパノラマとして、`perspective` の Camera の出力は最初の frame を平らな画像として示す。実行の後に状態・widget・接続が実行と合わなくなっても出力を示し続け、注記で `Edited — run to update` と示す。実行前は今の状態を描き、`Not run yet` と示す。詳細は `docs/panorama-stickers-node-surface-spec.md` の「Panorama Studio Surface」。
