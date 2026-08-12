# Cutout Frame ビュー 実装指示書（クロップ型モデルへの移行）

> **Status: Superseded.** 最終仕様は
> [`docs/adr/0021-cutout-frame-crop-view.md`](adr/0021-cutout-frame-crop-view.md) です。
> 本書は設計過程の記録として残しています。保存された `editor.frameScalePx`、
> `clampFovPairToGate` の必須化、ゲート基準の overscan 上限は ADR 0021 で覆されています。
> 実装時は本書ではなく ADR 0021 を参照してください。

対象ブランチ: `feat/cutout-frame-camera-editing`（未コミットのプロトタイプが載っている状態）

以下は当時の実装指示を変更せず保存したものです。

---

## 0. 何を直すのか（背景）

現行プロトタイプは、ゲート矩形を先に決めて、そこから投影スケールを逆算しています。

```js
// drawFrameViewBackground() 現行
const scaleX = Math.max(1, canvas.width / rect.w);
const scaleY = Math.max(1, canvas.height / rect.h);
```

**レイアウトが投影の権威になっている**のが誤りです。これを反転させ、
**1つのスカラー `f`（画面スケール）を権威とし、ゲートも背景もそこから導出**します。

さらに、Frame ビューの製品モデルを「カメラビュー型」から**「クロップ型」**へ変更します。

- クロップ型 = 背景（パノラマ）は動かない。枠だけが形と大きさを変える
- 一般的な切り抜き UI（Photoshop / Lightroom / 範囲選択）と同じ挙動
- ピンホール矩形投影では「両端を切る」と「hFOV を狭める」は幾何学的に同一なので、
  意味論の破綻はない

---

## 1. 正準モデル

### 1.1 状態

```text
editor.frameScalePx  : f  [px / tangent単位]   ← Frame の presentation state。これ1つだけ。
                       transient（永続化しない）
```

`editor.frameGateFocalPx` と `editor.frameGateLayoutKey` は**削除**します。

### 1.2 導出式

```text
tx = tan(hFOV/2),  ty = tan(vFOV/2)          … shot（永続・カメラの権威）
safeRect                                      … UI 安全領域（毎フレーム測定、§3）

gate:   W = 2·f·tx,  H = 2·f·ty               … safeRect の中心に配置
canvas → film tangent:   X = (px − Cx)/f,  Y = −(py − Cy)/f
ray:                     d = normalize(fwd + right·X + up·Y)
film tangent → canvas:   px = Cx + X·f,  py = Cy − Y·f
gate 正規化座標:          u = X/tx,  v = Y/ty      （|u|,|v| ≤ 1 がゲート内＝出力範囲）

背景（コンテキスト）:
  hFOVctx = 2·atan(canvasW / (2f))
  vFOVctx = 2·atan(canvasH / (2f))
  ← shot の FOV に一切依存しない。ゆえにアスペクトを変えても背景は不動
```

**両軸が同じ `f` から出るため、コンテキストの伸びは構造的に発生しません。**
軸ごとに独立したクランプやスケールを絶対に入れないこと。

### 1.3 `f` の更新イベント（これ以外では絶対に変えない）

| イベント | `f` の扱い |
|---|---|
| Frame モードに入った時 / active shot の id が変わった時 | `f = FRAME_GATE_INITIAL_OCCUPANCY · fitFocalPx(safeRect, shot)` |
| safeRect が変化した時（リサイズ、フロート UI の出現・消失） | `f ← f · min(newW/oldW, newH/oldH)` （比例追従。再フィットではない） |
| **上記以外（wheel / アスペクト / swap / drag）** | **不変** |

```js
fitFocalPx(safeRect, shot) = min( safeW / (2·tx),  safeH / (2·ty) )
FRAME_GATE_INITIAL_OCCUPANCY = 0.9   // 名前付き定数。調整可能
```

リサイズ時に「再フィット」ではなく「比例追従」にする理由: 再フィットするとユーザーの
wheel ズームが破棄され、ゲートが勝手に最大サイズへ戻ってしまうためです。

### 1.4 収まり保証（共通ヘルパ）

アスペクト変更・swap・wheel の後に必ず通す一様クランプを1つだけ用意します。

```js
// f を固定したまま、ゲートが safeRect に収まるよう tangent を一様縮小する。
// アスペクト比は厳密に保存される。拡大は絶対にしない（k ≤ 1）。
function clampFovPairToGate(tx, ty, f, safeRect) {
  const k = Math.min(1, safeRect.w / (2 * f * tx), safeRect.h / (2 * f * ty));
  return { tx: tx * k, ty: ty * k, clamped: k < 1 };
}
```

**ゲート矩形の幅・高さを軸ごとに `Math.min()` でクランプしてはいけません。**
それをやるとゲートのアスペクトが shot と食い違い、背景が伸びます（現行のバグ）。

---

## 2. 操作仕様

| 操作 | `f` | 背景 | ゲート | 永続値の変化 |
|---|---|---|---|---|
| drag | 不変 | 不動 | 不動 | yaw / pitch |
| wheel | 不変 | **不動** | 拡大縮小 | hFOV / vFOV を tangent 一様スケール |
| アスペクト | 不変 | **不動** | 高さ固定・幅のみ変化 | **vFOV 保持、hFOV 導出** |
| swap | 不変 | **不動** | 転置（入らなければ一様縮小） | hFOV ↔ vFOV 交換 |
| リサイズ / UI変化 | 比例追従 | 追従 | 比例 | なし |
| cancel | 不変 | 不動 | 復帰 | スナップショットへ復帰 |

### 2.1 drag（カメラ回転）

現行の `Δx/rect.w × hFOV[deg]` は tangent 空間ではないため、広角で端の追従がずれます。
`f` 基準に置き換えてください。

```js
// invert_view_x / invert_view_y は現行どおり尊重する。符号の向き（掴んで動かす感覚）も維持。
yaw_deg   = wrapYaw(yaw_deg   - (dx / f) * RAD2DEG * invertX);
pitch_deg = clamp(pitch_deg   + (dy / f) * RAD2DEG * invertY, -90, 90);
```

### 2.2 wheel（FOV 変更 = 枠の拡大縮小）

1. `scaleCutoutFovPair(shot, 1/factor)` で tangent を一様スケール
2. `clampFovPairToGate()` を通す → **ゲートが safeRect に接した時点でズームアウトが止まる**
   （これが「フロート UI に重ならないギリギリまで広く」の定義）
3. `[CUTOUT_FOV_MIN_DEG, CUTOUT_FOV_MAX_DEG]` の範囲チェックはアトミック
   （どちらかが外れたらステップ全体を棄却。現行 `scaleCutoutFovPair` の挙動を維持）
4. `f` は**触らない**。現行の `editor.frameGateFocalPx /= tangentScale` は削除

### 2.3 アスペクト変更（**規則を反転**）

現行の「hFOV 保持・vFOV 導出」を「**vFOV 保持・hFOV 導出**」に変更します。
これによりゲートの高さが画面上で一定になり、背景が動かず、往復も厳密に対称になります。

```js
// pano_cutout_view_math.js に追加
export function deriveHorizontalFovDeg(vFovDeg, aspect) {
  // hFOV = 2·atan(tan(vFOV/2) · aspect)
}
```

`applyCutoutAspect()` / `applyCutoutAspectCustom()`:

- `vFOV_deg` はそのまま
- `hFOV_deg = deriveHorizontalFovDeg(vFOV_deg, ratio)`
- 既存の landscape / portrait 判定による `aw`/`ah` 入れ替えロジックはそのまま維持
- `aspect_id` は選ばれたプリセット文字列（例 `"16:9"` / `"9:16"`）
- 最後に `clampFovPairToGate()`（縦長モーダルで 16:9 を選んだ時など、幅が溢れる稀なケース用）

期待値（safeRect 1552×752、初期 16:9 でゲート 1136×639 の場合）:

```text
16:9  1136 × 639
1:1    639 × 639
4:3    852 × 639
16:9  1136 × 639   ← 完全に元通り（ラチェットなし）
9:16   359 × 639
```

### 2.4 swap（portrait / landscape 切替）

- `hFOV_deg ↔ vFOV_deg` の交換を維持（フィルム平面の厳密な 90° 回転。現行実装で正しい）
- roll は**変更しない**
- `aspect_id` は**文字列を反転**（`"16:9"` → `"9:16"`）。
  現行の `deriveCutoutAspectLabelFromFov()` による浮動小数からの再導出は、
  丸め次第でプリセットに戻らないので使わない
- 交換後に `clampFovPairToGate()`

### 2.5 背景（コンテキスト）描画

`drawFrameViewBackground()` を書き換えます。

```js
// 1. コンテキストのカメラパラメータ（f のみから導出。rect を使わない）
const hFovCtx = 2 * Math.atan(canvas.width  / (2 * f)) * RAD2DEG;
const vFovCtx = 2 * Math.atan(canvas.height / (2 * f)) * RAD2DEG;

// 2. 描画領域の上限（overscan の有界化）
const halfW = Math.min(canvas.width  / 2, (gate.w / 2) * CUTOUT_OVERSCAN_MAX, f * tan(θsafe));
const halfH = Math.min(canvas.height / 2, (gate.h / 2) * CUTOUT_OVERSCAN_MAX, f * tan(θsafe));
// contextRect = 中心 ± (halfW, halfH)。この外側は中立背景色で塗る
```

`θsafe = CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG`（既に定義済み、85°）。
現行は `getCutoutOverscanScale` を import すらしておらず、有界化が**未実装**です。必ず配線すること。

passepartout（ゲート外の減光）と角丸ゲート枠の描画は現行実装を流用して構いません。

---

## 3. safeRect の測定（DOM 依存の一元化）

現行 `getFrameViewRect()` は 19 箇所から呼ばれ、呼ぶたびに
`getBoundingClientRect()` × 5 と `getComputedStyle()` × 3 を実行しています
（毎フレーム数十回の強制同期レイアウト）。加えて初期化レースがあります。

### 3.1 やること

1. `measureFrameSafeRect()` を新設し、**1 アニメーションフレームにつき最大1回**だけ測定して
   `runtime.frameSafeRect` にキャッシュする（`tick()` でフレームカウンタを進め、
   カウンタが変わった時のみ再測定）
2. `getFrameViewRect()` は `runtime.frameSafeRect` と `editor.frameScalePx` と shot から
   矩形を計算するだけの**純関数**にする。DOM API を呼ばない
3. **ゼロサイズガードを全要素に付ける**。現行は `floatingTopEl` にだけ
   `width > 0 && height > 0` があり、frame rail には無い。以下は実害のあるバグ:

```js
// 現行: v-show で display:none の frame rail は getBoundingClientRect() が全ゼロを返すため
// reservedSide ≈ canvas.width + 16 となり safeWidth が 1 に潰れる
reservedSide = Math.max(reservedSide, (canvasBounds.right - frameRailBounds.left) * scaleX + 16);
```

   `uiState.frameRail.visible = true` を JS で立てた同じフレームでは Vue の DOM 更新が
   まだ来ていないため、Frame 進入直後の 1 フレームで必ず踏みます。
   **すべての測定対象に `bounds.width > 0 && bounds.height > 0` を要求**してください。
4. safeRect は水平・垂直とも左右／上下対称になるよう予約幅を取る（現行の
   `symmetricRight` / `bottom` の考え方は維持）。ゲートが視覚的中心に来ることが要件

---

## 4. ファイル別の作業

### `web_src/pano_cutout_view_math.js`

| 関数 | 処置 |
|---|---|
| `getCutoutCameraParams` | 維持 |
| `deriveVerticalFovDeg` | 維持（custom aspect 等で使う場合に備え残す） |
| `deriveHorizontalFovDeg` | **新規追加**（§2.3） |
| `scaleCutoutFovPair` | 維持（アトミック棄却の挙動も維持） |
| `cutoutFilmPointToWorldDir` / `worldDirToCutoutFilmPoint` | 維持。ただし引数・戻り値を**正規化フィルム座標(±1)から tangent 座標へ**変更（§1.2 の `X, Y` を直接扱えるように） |
| `getCutoutOverscanScale` | 維持し、**実際に editor から使う** |
| `fitCutoutCameraGate` | **削除** → `fitFocalPx(safeRect, shot)`（スカラーを返す）に置換 |
| `getStableCutoutGateFocal` | **削除**（4項 min の transpose 予約がゲート縮小の直接原因） |
| `layoutCutoutGateAtFocal` | **削除** → `gateRectFromFocal(safeRect, shot, f)`（軸別 min クランプなし）に置換 |
| `clampFovPairToGate` | **新規追加**（§1.4） |

### `web_src/pano_editor.js`

- `editor.frameGateFocalPx` / `editor.frameGateLayoutKey` を削除、`editor.frameScalePx` を追加
- `getFrameViewRect()` を純関数化（§3）
- `drawFrameViewBackground()` を `f` ベースに書き換え（§2.5）。`scaleX` / `scaleY` は削除
- `zoomFrameViewAt()` から focal 操作を削除し、§2.2 の手順に置換（関数名は
  `applyFrameWheelZoom()` 等に改名してよい）
- `pan_frame` のドラッグ式を §2.1 に置換
- `applyCutoutAspect()` / `applyCutoutAspectCustom()` を §2.3 に置換
- `rotateCutoutAspect90()` の `aspect_id` をラベル反転に（§2.4）
- Frame 進入時 / active shot 変更時に `f` を初期化する箇所を追加

### `web_src/components/PanoFrameRail.vue`

- 「Fit」ボタンを追加（`data-action="frame-fit"`）。押下で
  `f` を変えずに `clampFovPairToGate` の上限まで FOV を一様拡大＝ゲートを safeRect いっぱいにする。
  swap 由来の一時的な縮小をワンクリックで回復させるための導線
- 既存の aspect ポップオーバー / rotate ボタンはそのまま

### `web/pano_editor.css`

- 中立背景（コンテキスト領域の外側）の色トークンが必要なら追加
- 既存の CRLF / LF 混在に合わせて改行コードを揃える（新規ブロックだけ LF にしない）

---

## 5. プロトタイプから維持するもの（触らない）

以下は既にレビュー済みで正しいので、そのまま残してください。

- camera drag の draft（`interaction.start` スナップショット）と pointer-up での
  `pushHistory()` + `commitAndRefreshNode()` 1回だけのコミット
- wheel の 180ms デバウンスコミットと、`closeEditor()` での `flushFrameWheelCommit()`
- `cancelFrameCameraGesture()` / `onlostpointercapture` / ドラッグ中 Esc の分岐
- `getStrokeGeomCacheKey()` の frame ブランチに yaw/pitch/roll/hFOV/vFOV を含める修正
- `applyInitialCutoutFocus()` が `state.active.selected_shot_id` を書かなくなった修正
- タブ切替時の `clearSelection()` 削除（Panorama の選択が Frame 往復で壊れない）
- Frame モードでの選択 UI / セレクションメニュー抑止、左ドラッグ = カメラ操作
- `PanoFrameRail.vue` の Vue 化

---

## 6. 絶対にやってはいけないこと

1. ゲートの幅・高さを**軸ごとに独立してクランプ**する（アスペクト破壊＝背景の伸び）
2. `f` を wheel / アスペクト変更 / swap で更新する（背景が動く）
3. `f` を DOM レイアウトキーでメモ化して再計算する（現行のライフサイクル問題の再発）
4. `getFrameViewRect()` の中で DOM を測る
5. presentation の pan / zoom オフセットを再導入する
6. `state.active.selected_shot_id` を、ユーザーの明示操作なしに書く
7. 永続フィールドを追加する（`f` は transient）
8. バックエンド（`comfyui_pano_suite/`）に手を入れる。node id / port / パラメータ名は不変
9. `pano_editor.js` の中に ad-hoc な DOM UI を作る（新規 UI は Vue コンポーネント）
10. `pano_gl_renderer.js` / `pano_render_core.js` の契約を変える
    （渡すビューパラメータを変えるだけに留める）

---

## 7. テスト

### 7.1 `tests/pano_cutout_view_math.test.mjs`（`node --test`）

削除した関数のテストは除去し、以下を追加してください。**すべて純関数のふるまいテスト**です。

1. **ゲートのアスペクト厳密性**: 1:1 / 4:3 / 3:2 / 16:9 / 9:16 / 1:4 / 4:1 × 横長・縦長・正方形の
   safeRect の全組み合わせで `gate.w / gate.h === tx / ty`（相対誤差 1e-9）
2. **アスペクト変更で背景が不動**: `f` 固定でアスペクトを変えたとき
   `hFOVctx` / `vFOVctx` が完全に不変、かつ `gate.h` が不変
3. **往復対称性**: 16:9 → 1:1 → 16:9 で `(hFOV, vFOV)` が 1e-9 以内で復元（ラチェットなし）
4. **wheel**: tangent 一様スケールで `tx/ty` が不変、`f` が不変、
   `[1, 179]` を跨ぐステップはアトミックに棄却
5. **wheel のズームアウト上限**: 連続でズームアウトしてもゲートは safeRect を超えない
6. **swap**: 転置 + 収まらなければ一様縮小。ゲートは常に safeRect 内、`hFOVctx` は不変
7. **収まり保証**: 任意のアスペクト × 任意の safeRect で `clampFovPairToGate` 適用後、
   ゲートが safeRect を 1e-9 以上はみ出さない
8. **ゲート内の光線一致**: コンテキスト投影で計算したゲート 4 隅の光線が、
   ゲート単独レンダの 4 隅光線と 1e-9 rad 以内で一致（レガシー FOV 1° / 179° を含む）
9. **overscan の有界性**: 実効半画角が `CUTOUT_OVERSCAN_SAFE_HALF_ANGLE_DEG` を超えない。
   超える領域は contextRect の外に落ちる
10. **film ↔ canvas 往復**: roll ≠ 0、非正方アスペクト、**ゲート外の点**を含めて往復誤差 1e-9
11. **リサイズ**: safeRect が k 倍されたとき `f` も k 倍され、ゲートの占有率が保存される

### 7.2 `tests/test_stickers_editor_loading_contract.py` 相当の契約テスト（新規または既存に追加）

12. `getFrameViewRect` の関数ブロックに `getBoundingClientRect` / `getComputedStyle` が現れない
13. `pano_editor.js` に `getStableCutoutGateFocal` / `layoutCutoutGateAtFocal` /
    `frameGateFocalPx` / `frameGateLayoutKey` が残っていない
14. `drawFrameViewBackground` の関数ブロックに `canvas.width / rect.w` 相当の
    軸別スケール計算が現れない
15. `applyCutoutAspect` の関数ブロックが `deriveHorizontalFovDeg` を使っている

### 7.3 回帰確認

- `python3 -m unittest discover -s tests -p "test_*.py"` の失敗集合が
  作業前と**完全に一致**すること（現状 failures=6 / errors=10 はすべて既存の未修正項目。
  新たに増やさない）
- `node --check web_src/pano_editor.js`
- `npm run build:web` を実行し、**`web/panorama_suite.js` をコミットに含める**
  （このリポジトリはビルド済みバンドルを同梱している）

### 7.4 手動確認（実装後に目視）

- 16:9 → 1:1 → 9:16 → 16:9 と巡回して**背景が1ピクセルも動かない**
- wheel を回して**背景が動かず枠だけが伸縮**し、safeRect に接した所で止まる
- Frame 進入直後の 1 フレームでゲートが潰れない
- paint dock / video transport の表示切替でゲートが跳ねない
- モーダルリサイズ中にゲートが連続的に追従する
- swap 後に「Fit」で最大サイズへ復帰できる
- Panorama → Frame → Panorama の往復で Panorama 側の選択が保持される
- Frame タブを開いて何もせず閉じたとき `state_json` が変化しない

---

## 8. `docs/cutout-frame-camera-view-plan.md` の更新（作業に含む）

以下の「確定事項」はこの実装で覆るため、plan 側も書き換えてください。

1. **確定事項 3**「wheel はゲートを画面上でリサイズしない」→ **削除**。
   クロップ型では wheel で枠が伸縮するのが正しい。ズームアウト上限が
   「UI 安全領域に接触するまで」であることを明記
2. **Field of view and aspect** の「hFOV 固定・vFOV 導出」→ **「vFOV 固定・hFOV 導出」に反転**。
   `aspect_id` が UI 意図ラベルであること、永続権威が `(hFOV_deg, vFOV_deg)` であることは変更なし
3. **確定事項 11**「middle-button drag がカメラ操作、left-button はツールの意味を維持」→
   Frame ではオブジェクト選択を持たないため、**left-drag（cursor ツール時）もカメラ操作**である旨に修正
4. **Phase 3 受け入れ基準**「同じオブジェクトをどちらのタブからも選択・変形できる」→
   Frame は純粋なカメラ／クロップビューであり、オブジェクト編集は Panorama で行う旨に修正
5. camera gate の節から `frameGateFocalPx` 系・transpose 予約・
   `quantizedOutputSize` によるゲートアスペクト算出の記述を削除し、§1 のモデルに置換
   （ゲートのアスペクトは tan 比を使う。量子化による実出力との差は典型 0.1% 未満で無視する。
   `output_megapixels` をフロントで読む必要はない）

---

## 9. 作業順序

視覚的なパッチの往復を避けるため、**純関数 → 測定 → 描画** の順で進めてください。

1. **Step 1**: `pano_cutout_view_math.js` を §4 のとおり書き換え、§7.1 のテストを全部通す。
   この時点で `pano_editor.js` は触らない（ビルドは通らなくてよい）
2. **Step 2**: safeRect 測定の一元化とゼロサイズガード（§3）。§7.2 の 12 番を通す
3. **Step 3**: `pano_editor.js` の描画・インタラクションを差し替え（§2, §4）。
   §7.2 の残りと §7.3 を通す
4. **Step 4**: `PanoFrameRail.vue` に Fit ボタン追加、`npm run build:web`、
   §7.4 の手動確認
5. **Step 5**: plan 文書の更新（§8）

各 Step ごとにコミットを分けてください。Step 3 まで進んでから見た目を調整する誘惑に
抵抗すること — 今回の作り直しは、まさにその往復を止めるためのものです。

---

## 10. 参考: 期待される数値（safeRect 1552×752, canvas 1600×800）

初期 16:9（hFOV 64°, vFOV 38.7°）、`FRAME_GATE_INITIAL_OCCUPANCY = 0.9`:

```text
fitFocalPx = min(1552/1.2498, 752/0.7030) = 1069.7
f          = 962.7
gate       = 1203 × 677
overscanX  = 1600/1203 = 1.33   （CUTOUT_OVERSCAN_MAX 1.5 以内）
overscanY  =  800/677  = 1.18

→ 1:1 に変更（vFOV 保持）:  hFOV 38.7°,  gate  677 × 677,  背景不動
→ 4:3 に変更:               hFOV 50.5°,  gate  902 × 677,  背景不動
→ 16:9 に戻す:              hFOV 64.0°,  gate 1203 × 677,  完全復元
→ wheel でズームアウト:      gate が 1552 × 873 に達する前に、
                            高さ 752 で頭打ち（gate 1337 × 752）
```
