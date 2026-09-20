# ADR 0016: Render Core 移行 — Codex 実装指示

## Status

Superseded

## Date

2026-04-18

## Superseded

この移行手順は完了済みであり、現在の renderer 境界は ADR 0005 と ADR 0017 を正とする。
通常描画は共有 WebGL render core を使用する。移行時に作られた
`pano_render_background_pass.js` は実行経路から参照されなくなったため削除した。
Preview node の既存 CPU triangle fallback は ADR 0005 の互換経路として維持する。

以下は移行時の判断記録として残すが、現在の変更可能ファイルや fallback policy を
規定するものではない。

## Context

ADR 0015 で定義した `rendererState-first` 設計の新 render core が完成している。
しかし consumer 側 (`pano_editor.js` など) の旧描画経路がそのまま残っており、
新旧の経路が同一ファイルに混在している状態になった。

この ADR は Codex への実装指示を兼ねる。
「何をどの順序で、どの検証条件のもとで実装するか」を定める。

---

## 絶対条件

**旧経路と新経路を同一ファイルに共存させてはならない。**

これは設計方針ではなく作業ルールである。

- 旧コードは「何を描くか・いつ描くか」を理解するための参照にしてよい
- 旧コードを新コードと同じファイルに残してはならない
- 「念のため残す」「fallback として残す」は禁止
- 移行中に画面が壊れることは正常であり、許容する
- 「画面が出ている」ことは成功条件ではない。旧経路が死んでいることが成功条件

---

## 新 Core ファイル — 変更禁止

以下のファイルはすでに完成している。この作業で一切変更しない。

```
web_src/pano_render_core.js
web_src/pano_render_state.js
web_src/pano_render_targets.js
web_src/pano_render_object_pass.js
web_src/pano_render_layer_descriptors.js
web_src/pano_render_descriptors.js
web_src/pano_render_background_pass.js
```

---

## 削除対象 — 例外なく全削除

以下の名前が consumer ファイルに存在してはならない。

### import から消すもの

```
renderCutoutViewToContext2D    (pano_gl_viewport.js)
renderErpViewToContext2D       (pano_gl_viewport.js)
renderSceneToContext2D         (pano_gl_viewport.js)
renderPanoramaBackgroundPass   (pano_preview_render.js)
renderSharedCutoutPreview      (pano_cutout_preview_shared.js)
```

### pano_editor.js から関数ごと消すもの

```
getRasterObjectErpCanvas(...)
getComposedPaintErpCanvas(...)
getComposedMaskErpCanvas(...)
```

---

## 新 Core API

### インスタンス生成

consumer ごとに独立したインスタンスを作る。インスタンスは共有しない。

```js
const myCore = createPanoramaRenderCore();
```

| consumer | 変数名 | targetId |
|---|---|---|
| modal pano 背景 | `modalPanoCore` | `"modal_pano"` |
| cutout preview | `cutoutPreviewCore` | `"cutout_preview"` |
| runtime node preview | `runtimePreviewCore` | `"runtime_preview"` |
| preview node widget | `previewNodeCore` | `"preview_node"` |

`targetCanvas` オプションは使わない。常に `renderToTarget` を使う。

### 描画の2ステップ

```js
// ステップ1: シーン・レイヤーが変わった時 (毎フレームではない)
myCore.syncState(buildPanoramaCompositeDescriptor({
  backgroundSource:   bgImg,
  backgroundRevision: "...",
  coverageDeg:        360,
  scene,
  textures,
  paintSource,   paintRevision,
  maskSource,    maskRevision,
  rasterEntries: [],
  backgroundOpacity: 1,
  showMaskTint:  false,
  stateRevision: "...",
}));

// ステップ2: カメラが変わった時・毎フレーム
const canvas = myCore.renderToTarget("target_id", view, {
  width: rect.w,
  height: rect.h,
  dpr: window.devicePixelRatio || 1,
});
if (canvas) ctx.drawImage(canvas, rect.x, rect.y, rect.w, rect.h);
```

### view の形式

```js
// panorama タブ
{ mode: "panorama", yawDeg, pitchDeg, fovDeg, coverageDeg }

// cutout プレビュー
{ mode: "cutout", yawDeg, pitchDeg, rollDeg, hFovDeg, vFovDeg }
```

`renderToTarget` が `null` を返した場合は GL 非対応。空白を表示する。
旧描画関数に fallback してはならない。

---

## 変更してよいファイル

以下の4ファイルのみ変更する。それ以外は触らない。

```
web_src/pano_editor.js
web_src/pano_preview_runtime.js
web_src/pano_preview_previewnode.js
web_src/pano_cutout_preview_shared.js
```

---

## 実装順序

### Step A — pano_editor.js: modal pano 背景のみ

modal の pano タブで背景 ERP を描いている関数を特定し、新 core に置き換える。

```js
// 旧 (消す)
renderSceneToContext2D({ ... })
renderCutoutViewToContext2D({ ... })

// 新 (使う)
modalPanoCore.syncState(buildPanoramaCompositeDescriptor({ ... }))
modalPanoCore.renderToTarget("modal_pano", view, params)
```

完了条件:

```bash
grep "renderSceneToContext2D\|renderCutoutViewToContext2D\|renderErpViewToContext2D" web_src/pano_editor.js
# → modal pano 描画関数の内部に 0 件
```

cutout preview には触れない。commit はこの Step 単体で行う。

---

### Step B — pano_editor.js: cutout preview

cutout preview のサムネイル描画を新 core に置き換える。

```js
// 旧 (消す)
renderSharedCutoutPreview({ ... })
renderCutoutViewToContext2D({ ... })

// 新 (使う)
cutoutPreviewCore.syncState(buildPanoramaCompositeDescriptor({ ... }))
cutoutPreviewCore.renderToTarget("cutout_preview", cutoutView, params)
```

完了条件:

```bash
grep "renderSharedCutoutPreview\|renderCutoutViewToContext2D" web_src/pano_editor.js
# → 0 件
```

---

### Step C — pano_editor.js: 旧関数の削除

以下を関数ごと削除する。呼び出し箇所は新 core の syncState に情報として渡す形に書き換える。

```
getRasterObjectErpCanvas  → rasterEntries として syncState に渡す
getComposedPaintErpCanvas → paintSource として syncState に渡す
getComposedMaskErpCanvas  → maskSource として syncState に渡す
```

完了条件:

```bash
grep "getRasterObjectErpCanvas\|getComposedPaintErpCanvas\|getComposedMaskErpCanvas" web_src/pano_editor.js
# → 0 件
```

---

### Step D — pano_preview_runtime.js

panorama 描画経路を `runtimePreviewCore` に置き換える。
パターンは Step A と同じ。

完了条件:

```bash
grep "renderSceneToContext2D\|renderErpViewToContext2D\|renderPanoramaBackgroundPass" web_src/pano_preview_runtime.js
# → 0 件
```

---

### Step E — pano_preview_previewnode.js / pano_cutout_preview_shared.js

同じく置き換え。

---

### Step F — 最終確認

以下を全部実行して、すべて 0 であること。1 件でも残っていればタスク未完了。

```bash
grep -c "renderCutoutViewToContext2D"  web_src/pano_editor.js web_src/pano_preview_runtime.js web_src/pano_preview_previewnode.js web_src/pano_cutout_preview_shared.js
grep -c "renderSceneToContext2D"       web_src/pano_editor.js web_src/pano_preview_runtime.js web_src/pano_preview_previewnode.js web_src/pano_cutout_preview_shared.js
grep -c "renderErpViewToContext2D"     web_src/pano_editor.js web_src/pano_preview_runtime.js web_src/pano_preview_previewnode.js web_src/pano_cutout_preview_shared.js
grep -c "getRasterObjectErpCanvas"     web_src/pano_editor.js
grep -c "getComposedPaintErpCanvas"    web_src/pano_editor.js
grep -c "getComposedMaskErpCanvas"     web_src/pano_editor.js
grep -c "renderPanoramaBackgroundPass" web_src/pano_editor.js web_src/pano_preview_runtime.js
grep -c "renderSharedCutoutPreview"    web_src/pano_editor.js web_src/pano_cutout_preview_shared.js
```

---

## やってはいけないこと

- 旧関数を fallback として残す
- `try/catch` で旧経路を「念のため」囲む
- 旧/新を `if` で切り替える feature flag を作る
- 旧関数を `legacy_*` などにリネームして別ファイルに移す
- 「とりあえず動く状態」を維持しながら段階的に移行する

削除する。移動しない。リネームしない。ラップしない。**削除する。**

---

## 移行中の壊れた画面について

Step A〜E の途中で画面が壊れる。これは正しい状態である。

壊れた画面 + 旧経路なし = 正しい進行中状態  
動く画面 + 旧経路あり = 失敗状態

GL が使えない場合 (`renderToTarget` が `null` を返す) は空白を表示する。
それ以外の理由で旧描画関数に戻ることは禁止する。

---

## Consequences

この作業が完了すると:

- `pano_editor.js` / `pano_preview_runtime.js` / `pano_preview_previewnode.js` / `pano_cutout_preview_shared.js` に旧描画関数が一切存在しない
- すべての consumer が `syncState` + `renderToTarget` の2ステップで描画する
- camera 差し替えは `renderToTarget` の `view` 引数を変えるだけになる
- 旧 bundle/compose 系経路が完全に死ぬ
