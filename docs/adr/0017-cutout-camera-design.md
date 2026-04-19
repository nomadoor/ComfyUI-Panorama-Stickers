# ADR 0017: PanoramaSceneCamera — 共通カメラ設計

## Status

Active

## Date

2026-04-18

---

## 背景と問題

`PanoramaCutout` ノードのライブプレビューは、現在メイン編集経路と深く結合している。
その結果、描画が遅延する・live stroke が映らない・cutout 固有コードがメイン経路を汚染するという問題が繰り返し発生している。

根本にある認識のズレ:

> **プレビューはカメラであり、シーンではない。**

カメラはシーンを観測するだけで、シーンに何も書き込まない。
シーンが変わればカメラは映像を更新する。カメラが動いてもシーンは変わらない。

この ADR はその原則に基づいて、最初は cutout を主対象としつつ、
最終的には `PanoramaStickers` / `PanoramaCutout` / 将来の preview consumer で共通利用できる
`PanoramaSceneCamera` を定義する。

---

## 設計原則

1. **カメラはシーンの純粋消費者（read-only consumer）である**
2. **`render(scene, camera)` は決定論的・副作用なし**
3. **メイン編集コンポーネントは変更しない**
4. **画面に映っているものがそのまま出力される（WYSIWYG）**
5. **カメラ変更はGPUのみで完結する（CPUへのフォールバックなし）**

---

## シーン契約（Scene Contract）

シーンとは「カメラが撮影する対象の全体」を指す。
カメラはシーンを読み取るが、書き込まない。

### SceneDescriptor

```js
{
  stateRevision: string,          // シーン全体の revision key
  background: {
    source: HTMLImageElement | HTMLVideoElement | null,
    revision: string,
    coverageDeg: 180 | 360,
    opacity: number,              // 0.0 - 1.0
  },
  objects: [                      // 順序 = z-index
    {
      type: "sticker",
      id: string,
      source: HTMLImageElement,
      revision: string,
      transform: { yawDeg, pitchDeg, rollDeg, hFovDeg, vFovDeg },
      crop: { x0, y0, x1, y1 },
      opacity: number,
      visible: boolean,
    },
    {
      type: "paint",              // ERP ペイントレイヤー
      source: HTMLCanvasElement,
      revision: string,
    },
    {
      type: "mask",
      source: HTMLCanvasElement,
      revision: string,
    },
    // 将来: { type: "3d_object", ... }
    // 将来: { type: "video_object", ... }
  ],
}
```

`stateRevision` が変わった時だけ `syncScene` を呼ぶ。カメラは自身で revision を管理し、同一 revision では GPU アップロードをスキップする。

---

## カメラ契約（Camera Contract）

```js
BaseCameraParams = {
  yawDeg:   number,   // -180 〜 +180
  pitchDeg: number,   // -90 〜 +90
  rollDeg:  number,   // -180 〜 +180（ロール）
}

PanoramaCameraParams = {
  mode: "panorama" | "unwrap",
  ...BaseCameraParams,
  fovDeg: number,          // panorama/unwrap の view FOV
  coverageDeg?: 180 | 360,
}

CutoutCameraParams = {
  mode: "cutout",
  ...BaseCameraParams,
  hFovDeg: number,         // 水平画角（degrees）
  vFovDeg: number,         // 垂直画角（degrees）
  coverageDeg?: 180 | 360,
}

CameraParams = PanoramaCameraParams | CutoutCameraParams

OutputParams = {
  width:  number,     // px
  height: number,     // px
  dpr:    number,     // devicePixelRatio（プレビュー用）/ 1.0（出力用）
}
```

---

## レンダーパイプライン（2ステップ）

```text
Step 1: syncScene(descriptor)
  → GPU テクスチャアップロード（revision が変わった時のみ）
  → シーンジオメトリの確定
  → 軽量: テクスチャ差分のみ転送

Step 2: renderFrame(camera, output)
  → GPU シェーダー実行（1 draw call）
  → 結果を offscreen canvas に書き出し
  → 超軽量: カメラが動くたびに呼ぶ
```

この2ステップは独立している。
- カメラをドラッグ中: Step 2 のみ（60fps）
- ストローク確定後: Step 1 → Step 2
- ストロークライブ中: Step 1（dirty texture 更新）→ Step 2

---

## API 定義

### ファクトリー

```js
const camera = createPanoramaSceneCamera(options = {});
// options.targetId: string — 複数インスタンスを区別するための識別子
```

### syncScene

```js
camera.syncScene(descriptor: SceneDescriptor): boolean
// true  → アップロード実行（差分あり）
// false → スキップ（revision 同一）
```

### renderFrame

```js
camera.renderFrame(
  camera: CameraParams,
  output: OutputParams,
): HTMLCanvasElement | null
// null → GPU/GL path unavailable
```

`renderFrame()` が `null` を返した場合の契約は次の通り。
- GL 可否は factory 作成時または最初の mount/render 時に一度確定し、その後は instance 内で固定する
- consumer は `null` を「この camera instance では GPU path が使えない」と解釈し、空白または `"Preview unavailable"` 等の非レンダリング UI を出す
- consumer は scene camera の `isSupported()` が利用可能な場合、それを capability check に使ってよい。ただし canonical な unsupported signal は引き続き `renderFrame() === null` とする
- consumer ごとに CPU fallback renderer を実装してはいけない。fallback 実装は camera backend 自体の責務であり、consumer 側では分岐しない
- 必要なら consumer は `null` を受けた時点で mount/render を止め、再試行は新しい camera instance を作り直す

つまり、「no fallback」は
- `consumer 側で独自の別 renderer に逃がさない`
という意味であり、
- `null を無視して描画を続ける`
ことではない

`CameraParams` の canonical 定義は上記の union とする。`mode` ごとの必須項目は次の通り。
- `panorama` / `unwrap`: `fovDeg`
- `cutout`: `hFovDeg`, `vFovDeg`

### マウント（ライブプレビュー用）

```js
const cameraMount = camera.mount(container: HTMLElement, options: {
  onCameraChange?: (camera: CameraParams) => void,
})
cameraMount.unmount()
```

`mount()` は controller/handle を返し、その `unmount()` が DOM mount と observer / RAF cleanup を担当する。

マウント後は RAF ループが動作する。
ユーザーがドラッグすると `onCameraChange` が呼ばれ、呼び出し側が新しい camera params を `renderFrame` に渡す。

### 出力エクスポート

```js
// 静止画
const blob: Blob = await camera.exportFrame({
  camera: CameraParams,
  width: number,
  height: number,
  format: "png" | "jpeg",
  quality?: number,      // jpeg 用
})

// 動画（将来）
const blobs: Blob[] = await camera.exportVideoFrames({
  frames: CameraParams[],  // 1フレームごとのカメラパラメータ列
  width: number,
  height: number,
  fps: number,
})
```

`exportFrame` はプレビュー用 canvas とは独立した offscreen canvas にレンダリングする。プレビューを止めない。

### Scene Subscription

`subscribeSceneChanges` は camera API ではなく、editor/node 側の scene publisher utility とする。

```js
type UnsubscribeSceneChanges = () => void

subscribeSceneChanges(
  node: PanoramaNode,
  callback: (descriptor: SceneDescriptor) => void,
): UnsubscribeSceneChanges
```

契約:
- `callback` は publish ごとに最新 `SceneDescriptor` を受け取る
- return value は explicit unsubscribe function
- cleanup は caller の責務で、modal close / node teardown / camera dispose 時に必ず呼ぶ
- `camera.unmount()` は DOM mount の cleanup だけを担当し、scene subscription の自動解除までは保証しない

つまり consumer 側は通常、
- `const unsubscribe = subscribeSceneChanges(node, onSceneChanged)`
- teardown 時に `unsubscribe()`
を行う

---

## サブスクリプションモデル

カメラはシーンを**ポーリングせず**、シーン変更の通知を受け取る。

### 実装パターン

```js
// 呼び出し側（ノードセットアップ）
const camera = createPanoramaSceneCamera({ targetId: "cutout_main" });

// シーン変更通知を受け取るハンドラ
function onSceneChanged(descriptor) {
  camera.syncScene(descriptor);
  camera.renderFrame(currentCameraParams, currentOutputParams);
  // → DOM に貼り付けた canvas が更新される
}

// メイン編集側が publishSceneState() を呼ぶたびに onSceneChanged が動く
const unsubscribe = subscribeSceneChanges(node, onSceneChanged);

// teardown
unsubscribe();
```

### シーン変更の発生タイミング

| イベント | Step 1 (syncScene) | Step 2 (renderFrame) |
|---|---|---|
| カメラドラッグ | ✗ | ✓（RAFごと） |
| ストロークライブ中 | ✓（paint texture 更新） | ✓ |
| ストローク確定 | ✓（revision 変更） | ✓ |
| sticker 移動確定 | ✓ | ✓ |
| 背景画像変更 | ✓ | ✓ |
| coverage 変更 | ✓（uniform のみ、軽量） | ✓ |

---

## パフォーマンス設計

### 熱パス（ユーザー操作中）

```text
カメラドラッグ → renderFrame のみ（< 1ms / frame）
```

GPU 1 draw call。CPU 処理なし。60fps を維持できる。

UX 制約:
- ユーザー操作の熱パスに `JSON.stringify(state)` / `JSON.parse(...)` / upload / durable save / full state clone を入れてはいけない
- pointermove / drag / frame move / frame rotate / frame scale 中は、camera params と軽量 view state だけを更新する
- preview invalidation が必要な場合も、hot path では revision counter や dirty flag の更新に留める
- 「型安定」や「永続化都合」のために、操作中の render ループへ重い整形処理を差し込んではいけない
- user gesture に干渉する対策は不採用とし、必要なら commit 後または冷パスへ移す

言い換えると、
- 操作中に守るべきなのは correctness だけでなく latency でもある
- UX を崩す corrective action は architecture violation とみなす

### 温パス（ストロークライブ中）

```text
appendStrokePoint → paint canvas dirty → syncScene（差分テクスチャ転送）→ renderFrame
```

テクスチャの dirty region のみ転送（`texSubImage2D`）。フルアップロードしない。

### 冷パス（状態確定後）

```text
commitState → full syncScene → renderFrame
```

---

## メインコンポーネントとの境界

### 変更禁止ファイル

```text
web_src/pano_editor.js
web_src/pano_paint_engine.js
web_src/pano_gl_renderer.js
web_src/pano_render_core.js
web_src/pano_render_state.js
web_src/pano_render_targets.js
```

### 共通 Camera の実装ファイル（新規作成）

```text
web_src/pano_scene_camera.js        ← カメラ本体
web_src/pano_scene_camera_dom.js    ← DOM マウント・インタラクション
web_src/pano_scene_camera_export.js ← 静止画・動画エクスポート
web_src/pano_cutout_camera.js       ← cutout 向け thin adapter
```

### メイン編集側が提供するもの（読み取り専用）

```text
node.__panoState        → シーンの source of truth
node.__panoPaintSurface → ライブペイントサーフェス（dirty flag 付き）
```

カメラはこれらを**読み取るだけ**。

---

## シーン記述子の構築（呼び出し側の責任）

カメラは記述子を自分では構築しない。ノードのセットアップコードが構築して渡す。

```js
function buildPanoramaSceneDescriptor(node, state) {
  return {
    stateRevision: buildSceneRevision(state),
    background: {
      source: getBackgroundImage(node),
      revision: buildBackgroundRevision(node),
      coverageDeg: state.coverage,
      opacity: 1,
    },
    objects: [
      ...buildStickerObjects(state),
      buildPaintObject(node, state),
      buildMaskObject(node, state),
    ],
  };
}
```

この関数は既存の `buildPanoramaCompositeDescriptor` と同じ構造を持つ。
既存のユーティリティをそのまま流用できる。

---

## 将来の拡張ポイント

### 背景が動画になる場合

```js
background.source = HTMLVideoElement
background.revision = `${video.src}|${video.currentTime.toFixed(3)}`
```

API は変わらない。カメラ側は `source` を `texImage2D` に渡すだけ。
RAF ループ中で `video.currentTime` が変われば revision が変わり、syncScene が走る。

### 3D オブジェクトが追加される場合

```js
objects.push({
  type: "3d_object",
  geometry: BufferGeometry,
  material: Material,
  transform: { position, rotation, scale },
  revision: string,
})
```

カメラの `renderFrame` に 3D pass を追加する。既存の sticker/paint pass には触れない。

### 動画出力

```js
camera.exportVideoFrames(frames, { width, height, fps })
```

`frames` は `CameraParams[]`。各フレームに `renderFrame` を呼び、`canvas.toBlob()` でエンコードする。
MediaRecorder API または WebCodecs を使って MP4 エンコードまで対応できる。

---

## 成功条件

### 機能

- `PanoramaCutout` でストローク描画中にリアルタイムでプレビューに反映される
- `PanoramaStickers` でも 180° view や center capture を同じ camera API で表現できる
- カメラドラッグ中に 60fps を維持できる
- プレビューを `exportFrame` で出力した結果がプレビューと一致する
- cutout 固有 UI（frame tab / frame list / 右上 preview）は camera 本体ではなく consumer 側に残る

### 構造

```bash
grep -c "scene_camera\|PanoramaSceneCamera" web_src/pano_editor.js
# → 0 件を理想とする（最終的には adapter 経由で接続）

grep -c "pano_editor\|editor\.__pano" web_src/pano_scene_camera.js
# → 0 件（カメラはエディタに依存しない）
```

---

## やってはいけないこと

- カメラの中から `markPaintStrokeVisualsDirty` などの編集関数を呼ぶ
- `requestDraw` をカメラ内部から呼ぶ（呼び出し側の責任）
- メイン canvas と GPU コンテキストを共有する
- `pano_editor.js` に `if (cutoutMode)` を追加する
- syncScene をフレームごとに呼ぶ（revision チェックで防ぐが、呼び側も意識すること）

---

## Consequences

この設計が完成すると:

- cutout プレビューが Blender/Unity のビューポートと同じ「カメラ」として機能する
- stickers の 180° 出力や centered capture も同じ camera consumer で扱える
- メイン編集のどの変更も、カメラ側を変更せずに反映される
- 静止画出力・動画出力がカメラの `renderFrame` の呼び出しとして統一される
- 3D オブジェクト・動画背景の追加が `SceneDescriptor` の objects 拡張だけで実現できる
- cutout 特有の描画コードは `camera` 本体ではなく consumer adapter へ閉じ込められる
