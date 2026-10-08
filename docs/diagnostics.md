# Diagnostics（診断の使い方）

エディタやノードを操作している最中に Chrome のタブが落ちる（Aw, Snap / `STATUS_BREAKPOINT`）問題の原因を、
推測ではなく実測で決めるための開発用の記録です。既定ではオフで、オフのときは何も計測しません。

実装は `web_src/pano_diagnostics.js` にあります。

## オーナーに渡す手順

1. ComfyUI の設定（歯車）を開き、**Panorama Suite › Debug › Diagnostics** をオンにする。
2. **ページを開き直す**（F5）。オンにする前に作られたキャンバスや WebGL コンテキストは数えられないため。
3. いつもどおりに使う。タブが落ちるまで続けてよい。
4. タブが落ちたら、ComfyUI を開き直す。
5. 開発者ツールのコンソール（F12 › Console）に、次の警告が 1 回だけ出る。

   ```
   [PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). ...
   ```

   この行の続きの JSON（前回の最後の 5 件の記録）をコピーして送る。
6. もっと詳しく送るときは、上のメニューの **Extensions › Panorama Suite › Export Panorama Suite diagnostics** を選ぶ
   （コマンドパレットからも同じ名前で呼べる）。`panorama-suite-diagnostics-<日時>.json` が保存されるので、それを送る。
   書き出した JSON の `previous` が落ちたセッションの記録、`current` が今のセッションの記録です。
7. 調べ終わったら、設定をオフに戻す。

正常に閉じた（タブを閉じた、再読み込みした）ときは、次に開いたときにコンソールへ
`the previous session closed normally` と `console.info` で出ます。落ちたときだけ `console.warn` です。

## 記録する内容

オンのあいだ、約 1 秒ごとに 1 件の記録を作り、最後の 300 件をメモリに持ちます。

| 項目 | 内容 |
| --- | --- |
| `t` | 時刻（`Date.now()`） |
| `heap` | `performance.memory` の `usedJSHeapSize` / `totalJSHeapSize` / `jsHeapSizeLimit`（MB）。Chrome 以外では `null` |
| `canvas` | この拡張が作ったキャンバス：`created`（作った数）、`released`（`releasePanoCanvas` で幅と高さを 0 にした回数）、`collected`（GC された数、`FinalizationRegistry`）、`alive`（まだ GC されていない数）、`sized`（大きさが 0 でない数）、`pixels` と `mb`（合計の画素数と、RGBA で見積もったバイト数）、`largest`（最大のキャンバスの大きさ）、`byLabel`（作った場所ごとの `[数, 画素数]`） |
| `webgl` | WebGL コンテキスト：`created` / `lost` / `restored` / `disposed` / `alive`（破棄も喪失もしていない数） |
| `video` | この拡張が作った `<video>`：`alive`（まだ GC されていない数。src を外して `load()` した要素も GC まで数える）、`loaded`（src があり、デコーダを持つ数）、`playing`、`list`（最大 20 件：`label`、再生中か、src があるか、`videoWidth` x `videoHeight`、`readyState`、DOM に付いているか） |
| `frame` | エディタの描画：直近 1 秒のフレーム数、1 フレームの最長時間（ms）、長いタスク（`longtask`）の数と最長時間。エディタは描くことがあるときだけフレームを回すので（`pano_frame_scheduler.js`）、何もしていないときは 0 になる |
| `renders` | three.js のビューの描画：`editor`（エディタのビュー）と `node`（ノード上の共有ビュー）ごとの、直近 1 秒の回数と最長時間 |
| `sources["three.editor"]`, `sources["three.node"]` | 各ビューの `renderer.info`（`textures`、`geometries`、`programs`、最後の描画パスの `calls` と `triangles`）、キャンバスの大きさ、`layerTextures`（ビューの owner が共有するレイヤのテクスチャの数。同じメディアは owner がいくつあっても 1 枚）、`sceneItems`（`scene` と 3D Sticker の項目の数、読み込み済み・読み込み中の数、読み込み済みの合計 MB）、`sparks`（Spark の `SparkRenderer` ごとに 1 行：`view`（`stage` / `camera_preview`）、`layer`（three.js の layer）、直近 1 秒の `generates`（全スプラットの生成）と `sorts`（読み戻しと並べ替え）の回数（Spark に数える手がかりのメソッドが無いときは `null`＝計測していない）、`camera`（最後に更新に使ったカメラの `position` と `direction`）。何もしていないときは `generates` と `sorts` が 0 になる） |
| `sources.editor` | 開いているエディタ：`type`（`stickers` / `cutout` など）、`readOnly`、`mode`、`interaction`（`editor.interaction.kind`）、`timelineDrag`、`playing` |
| `costMs` | 前回の記録を作るのにかかった時間（localStorage への書き出しを含む） |

記録とは別に、`events` に WebGL コンテキストの作成・喪失（`webglcontextlost`）・復帰（`webglcontextrestored`）・破棄を、
時刻付きで最後の 100 件まで残します。
エディタのビューは、コンテキストを失うと GPU の資源を放して復帰を待ち、復帰したら同じキャンバスにビューを作り直します。
失ったビューは復帰まで同じコンテキストとして数えるので、1 回の喪失と復帰は `created` 2・`lost` 1・`restored` 1・`disposed` 1・`alive` 1 になります。

## 記録の残し方

- 2 秒ごとに、localStorage の `pano_suite.diagnostics.v1` へ書き出します。大きさは 200,000 文字以内で、
  入りきらないときは古い記録から落とします（およそ 3 分ぶん）。書き出した JSON には全 300 件が入ります。
- localStorage が使えない、または満杯のときは、書き出しをせずにメモリにだけ持ちます。
- `beforeunload` で `closed: true`（`closedBy: "unload"`）を書きます。設定をオフにしたときは `closedBy: "disabled"` です。
  次に開いたときに `closed` が `false` のままなら、正常に閉じていない（落ちた）と判断します。
- 次に開いたとき、前回の記録を `pano_suite.diagnostics.previous.v1` へ移し、コンソールに 1 回だけ出します。
  移した記録は、次に落ちるまで書き出しの `previous` に残ります。設定がオフでもこの読み取りは行います。

## 計測の費用

- オフのとき：キャンバスと `<video>` の工場関数は作るだけで、数えません。描画ループの計測は 1 回の比較で終わります。
  タイマーも `PerformanceObserver` も `beforeunload` も登録しません。
- オンのとき：記録 1 件はおよそ 1 KB で、作る費用は 1 秒あたり 1 ms 未満を目安にしています
  （Node での計測では、40 個のキャンバスを数えて 2 回に 1 回 200 KB を組み立てても 1 件あたり約 0.06 ms）。
  実際の費用は各記録の `costMs` で確かめられます。

## 注意

- ComfyUI のタブを 2 つ開いていると、同じ localStorage のキーを書き合います。調べるときはタブを 1 つにしてください。
- 数えるのは、この拡張の工場関数（`createPanoCanvas`、`createPanoVideo`）を通したものと、
  `trackPanoCanvas` / `trackPanoVideo` で登録したエディタの Vue のキャンバスと `<video>` だけです。
  three.js や Spark が内部で作るものは数えません。
- 新しくキャンバスや `<video>` を作るときは、`document.createElement` や `new OffscreenCanvas` を直接呼ばずに、
  `createPanoCanvas({ label })` / `createPanoVideo(document, label)` を使ってください（`tests/pano_diagnostics.test.mjs` が確かめます）。
