# ADR 0018: Video / Batch ERP Support — 共通動画インフラ設計

## Status

Active

## Date

2026-04-19

---

## 背景と問題

現在の全ノードは ERP 画像を 1 枚単位で処理している。
AI モデルが出力する動画（IMAGE バッチ）を扱えない。

動画対応は `PanoramaPreview` の機能追加ではなく、
全ノードが共有する**共通インフラ**として設計する。

---

## 2 つの契約を分離する

### Graph / Data Contract（ComfyUI グラフ上の約束）

```
入力:
  images: IMAGE [B, H, W, C]   float32, 0..1
  fps:    FLOAT                 default 24.0
  audio:  AUDIO (optional)      {"waveform": tensor, "sample_rate": int}

出力（既存型を維持）:
  IMAGE [B, H, W, C]
  MASK  [B, H, W]
  STRING
```

**グラフ上の主出力契約は今回変更しない。**
mp4 ファイルは UI 用の内部生成物であり、graph output ではない。
将来、video file output が必要になれば別 ADR で追加する。

### UI / Runtime Contract（モーダルおよびノードプレビューの約束）

```
backend → frontend:
  mp4 ファイル (temp)           # PyAV でエンコード、UI 専用キャッシュ
  サムネイルストリップ画像 (temp) # タイムライン表示用
  動画メタデータ                 # fps, frame count, duration

frontend runtime:
  HTMLVideoElement               # mp4 を参照、GPU デコード
  WebGL texture source           # video element を texImage2D に渡す
  タイムライン UI                # 共通コンポーネント
```

---

## 共通インフラ設計（4 層）

### 1. Shared Video Transport（バックエンド）

`comfyui_pano_suite/core/video.py` に集約する。

```python
def encode_frames_to_mp4(frames, fps, audio=None) -> Path:
    """PyAV で IMAGE [B,H,W,C] → temp/{id}.mp4 エンコード。音声あり時 AAC ミックス。"""

def build_thumbnail_strip(frames, fps, strip_height=64, max_thumbs=120) -> Path:
    """等間隔フレームを横一列に並べた画像を temp に保存して返す。"""

def make_video_ui_payload(mp4_path, strip_path, fps, frame_count) -> dict:
    """{"images": [mp4_file], "animated": (True,), "pano_video_meta": {...},
        "pano_thumbnails": [...]} を組み立てる。"""
```

**注意: `io.Audio.Input` の正しい schema 記法は実装前に ComfyUI V3 API を確認すること。**

### 2. Shared UI Playback Layer（フロントエンド）

`web_src/pano_video_player.js` に集約する。
**PanoramaStickers / PanoramaCutout / PanoramaPreview の全モーダルが同一コンポーネントを共有する。**
Preview だけが別UIを持つのではない。
Preview の追加責務は「ノード上インライン動画再生」と「fullscreen viewer」だけであり、
モーダル内の動画 UI 自体は全ノードで共通とする。

```js
createPanoVideoPlayer(container, {
  videoUrl: string,           // /view?... の mp4 URL
  thumbnailStripUrl: string,  // サムネイルストリップ URL
  fps: number,
  loop: boolean,              // デフォルト true
  onFrame: (videoElement) => void,  // WebGL 更新コールバック
})
```

### モーダル内での出現位置と操作ルール

- 配置先は `PanoModal` の stage 領域下部。
- panorama/cutout の描画 canvas を置き換えるのではなく、その**再生制御 HUD**として重ねる。
- 表示条件は「入力が `B > 1` の IMAGE batch である」または「UI 用 mp4 キャッシュが存在する」時。
- `B = 1` の静止画時は非表示にして既存UIだけを出す。
- `paint` / `mask` モードでは既存の下部ペイントUIを優先し、再生 UI は一時的に非表示にする。
- Stickers / Cutout / Preview の3ノードで、再生/停止/シーク/音量/ループの操作体系は同一にする。
- Preview だけはこれに加えて、ノード上インライン再生と fullscreen 表示を持つ。

タイムライン UI 仕様:
```
┌────────────────────────────────────────────────┐
│ ▶  ◼  🔊 ─────  00:03 / 00:10  ⟳             │
├────────────────────────────────────────────────┤
│ [thumb][thumb][thumb][thumb]...                │
│              ▲ playhead                        │
└────────────────────────────────────────────────┘
```

- サムネイルストリップ: backend 生成画像を CSS background-image で配置
- プレイヘッド: 透明 `<input type="range">` をオーバーレイ（ヌルヌルスクラブ）
- 再生/停止: `video.play()` / `video.pause()`
- 音量: `video.volume`
- ループ: `video.loop`（デフォルト `true`）
- fps・duration: インスペクタパネルに表示（タイムライン上には出さない）
- スクラブ中: `requestVideoFrameCallback` または `timeupdate` で WebGL 更新

### 3. Shared Render Source Abstraction（WebGL）

ADR 0017 の `SceneDescriptor.background.source` は既に
`HTMLImageElement | HTMLVideoElement | null` を許容する設計になっている。

```js
// 静止画（既存）
background.source   = HTMLImageElement
background.revision = imageRevisionKey

// 動画（今回追加）
background.source   = HTMLVideoElement
background.revision = `${video.src}|${video.currentTime.toFixed(3)}`
```

`revision` が変わるたびに `syncScene()` が WebGL テクスチャを更新する。
`texImage2D(target, 0, ..., videoElement)` でブラウザの GPU デコード結果を直接サンプリングする。
4K 動画でも CPU コストはゼロ（GPU デコード）。

`buildPanoramaCompositeDescriptor` 自体はすでに `backgroundSource` を受け取るだけで型制約はない。
**変更点は descriptor builder 側ではなく consumer 側**:
`pano_editor.js` / `pano_preview_runtime.js` が `backgroundSource` として
`HTMLImageElement` の代わりに `HTMLVideoElement` を供給するように変更する。
下層の `pano_gl_scene.js` が `texImage2D` に video element を受け入れれば、
descriptor builder は無変更で動画が流れる。

### 4. Node-Specific Consumer Behavior（ノード別責務）

#### PanoramaPreview（追加責務: ノード上インライン再生 + fullscreen）

```
execute(images [B,H,W,C], fps, audio=None)
  → encode_frames_to_mp4(frames, fps, audio)
  → build_thumbnail_strip(frames, fps)
  → make_video_ui_payload(...)
  → return NodeOutput(ui=payload)
  # IMAGE/MASK 出力なし（プレビュー専用ノード）
```

#### PanoramaCutout（追加責務: バッチ処理）

```
execute(erp_image [B,H,W,C], fps, audio=None, coverage, state_json, output_megapixels)
  sampling_map = build_cutout_sampling_map(...)   # 1回だけ構築
  overlay_rgba = build_overlay(...)               # 1回だけ構築
  results = [composite(sample(frame, sampling_map), overlay_rgba) for frame in erp_image]
  rect_image [B,H,W,C] = stack(results)
  → encode_frames_to_mp4(rect_image, fps, audio=None)         # UI キャッシュ
  → build_thumbnail_strip(rect_image, fps)                    # UI キャッシュ
  → return NodeOutput(rect_image, sticker_state_json, mask, ui=video_payload)
  # audio は graph downstream への pass-through（今回スコープ外）
```

#### PanoramaStickers（追加責務: バッチ処理）

```
execute(bg_erp [B,H,W,C], fps, audio=None, ...)
  overlay_rgba = render_stickers_and_paint(...)   # 1回だけ構築
  results = [composite(frame, overlay_rgba) for frame in bg_erp]
  cond_erp [B,H,W,C] = stack(results)
  → encode_frames_to_mp4(cond_erp, fps, audio=None)           # UI キャッシュ
  → build_thumbnail_strip(cond_erp, fps)                      # UI キャッシュ
  → return NodeOutput(cond_erp, mask, ui=video_payload)
```

---

## キャッシュ無効化条件

| キャッシュ対象 | 無効化トリガー |
|---|---|
| `sampling_map` | `state_json` の shot パラメータ変更 / ERP サイズ変更 |
| `overlay_rgba` | `state_json` revision 変更 / `painting_layer` revision 変更 |
| `mp4 / thumbnail` | `images` バッチの内容変更（新しい run ごとに再生成） |

sampling_map と overlay は同一 run 内で全フレーム共通。
mp4 は temp に保存し、UI キャッシュとして扱う（run ごとに上書き）。

---

## 音声の境界

| 経路 | 内容 |
|---|---|
| **Graph pass-through** | `AUDIO` 入力を downstream の別ノードにそのまま流す（今回スコープ外） |
| **UI playback mp4 への mux** | `PanoramaPreview` の mp4 エンコード時に audio を AAC でミックスする（初回スコープ内） |

`Cutout / Stickers` は今回 audio を消費しない。入力ポートは用意するが pass-through の実装は別 ADR。

---

## 出力契約の変更リスク評価

| 変更内容 | リスク |
|---|---|
| `fps`, `audio` を optional input に追加 | 低。既存ワークフローは引数なしで呼ばれるため非破壊 |
| `IMAGE [B,H,W,C]` のバッチ対応（B=1 も動く） | **非破壊だが実装差分は広い**。外部ステッカー入力・mask shape・`_save_input_preview()` 呼び出し・warning 文言まで全フレームを考慮した洗い替えが必要。`PanoramaStickers` / `PanoramaCutout` どちらも現状は先頭フレームのみ使用。 |
| `ui` に `pano_video_meta` / `pano_thumbnails` キーを追加 | 低。ui キーは ComfyUI が unknown キーを passthrough する |
| `_save_input_preview()` の扱い変更 | 中。B>1 時は静止画プレビューではなく mp4 payload に切り替える必要がある。B=1 時は既存挙動を維持。切り替え条件を全ノードで統一する。 |
| graph 主出力（`IMAGE / MASK / STRING`）は変更しない | リスクなし |

---

## 現在の実装状況

### 実装済み（コードに存在する）

| 項目 | 場所 |
|---|---|
| `encode_frames_to_mp4()` / `make_video_ui_payload()` | `core/video.py` |
| `_append_video_payload()` ヘルパー | `nodes.py:262` |
| `PanoramaStickers.execute(fps, audio)` シグネチャ | `nodes.py:867` |
| `PanoramaCutout.execute(fps, audio)` シグネチャ + `src_batch` でバッチ受け取り | `nodes.py:1058` |
| `PanoramaPreview.execute()` が `_append_video_payload` を呼ぶ | `nodes.py:1243` |

### 未実装（残タスク）

| 項目 | 内容 |
|---|---|
| `PanoramaStickers.define_schema()` | `fps` / `audio` ポートが schema にない。execute は受け取れるが ComfyUI 上で接続できない |
| `PanoramaCutout.define_schema()` | 同上 |
| `PanoramaPreview.define_schema()` | 同上。加えて execute が fps を `24.0` ハードコードしており引数を使っていない |
| `PanoramaCutout.execute()` バッチループ | `src_batch` を受け取るが `src = src_batch[0]` で先頭フレームのみ処理している |
| `PanoramaStickers.execute()` バッチループ | `_single_image_to_numpy` で先頭フレームのみ |
| モーダル WebGL 動画再生 | JS 未実装 |
| タイムライン UI / `pano_video_player.js` | JS 未実装 |
| `pano_gl_scene.js` の video texture 対応 | JS 未実装 |

---

## 実装スコープ

| 項目 | 初回 | 将来 |
|---|---|---|
| `define_schema()` に fps / audio ポート追加（全ノード） | ✓ | |
| `PanoramaPreview.execute()` が fps / audio を実際に使う | ✓ | |
| `PanoramaCutout.execute()` バッチ全フレームループ | ✓ | |
| `PanoramaStickers.execute()` バッチ全フレームループ | ✓ | |
| モーダル用 mp4 キャッシュ生成（全ノード・既存 `_append_video_payload` を活用） | ✓ | |
| タイムライン UI + サムネイルストリップ（全モーダル共通） | ✓ | |
| audio → mp4 AAC mux（Preview） | ✓ | |
| モーダル WebGL 動画再生（全ノード） | ✓ | |
| ノード上インライン動画再生（Preview のみ先行） | ✓ | Stickers/Cutout も追加 |
| `_save_input_preview()` → B>1 時は mp4 payload に切替（全ノード） | ✓ | |
| audio graph pass-through（Cutout/Stickers） | | ✓ |
| 時間軸カメラ（Cutout camera_keyframes） | | ✓ |
| video file graph output | | ✓ 別 ADR |

---

## 要確認事項（実装前に検証）

1. `io.Audio.Input` の ComfyUI V3 schema 正式記法（現行 nodes.py に実例なし）
2. `requestVideoFrameCallback` のブラウザサポート状況（Safari 旧版 fallback 要否）

---

## 変更ファイル一覧

### 既存（変更なし）

```
comfyui_pano_suite/core/video.py   encode_frames_to_mp4(), make_video_ui_payload() 実装済み
```

### 変更（Python）

```
comfyui_pano_suite/nodes.py
  PanoramaPreview    define_schema に fps/audio 追加、execute で引数を実際に使う
  PanoramaCutout     define_schema に fps/audio 追加、バッチ全フレームループ実装
  PanoramaStickers   define_schema に fps/audio 追加、バッチ全フレームループ実装
```

### 新規作成（JS）

```
web_src/pano_video_player.js
  createPanoVideoPlayer()  タイムライン UI + 再生制御 + WebGL コールバック
```

### 変更（JS）

```
web_src/pano_gl_scene.js         buildPanoramaCompositeDescriptor に video source 対応追加
web_src/pano_editor.js           モーダルに createPanoVideoPlayer を組み込む
web_src/pano_preview_runtime.js  pano_video_meta / pano_thumbnails を受け取る
```

---

## やってはいけないこと

- mp4 を graph 主出力として返す（今回は UI キャッシュのみ）
- フレームごとに sampling_map や overlay_rgba を再構築する
- GIF でノードプレビューを実装する（4K で破綻する）
- `<video>` を経由せず IMAGE バッチを WebGL に直接逐次描画する（GPU デコードが使えない）
- audio 処理を PanoramaPreview のみに閉じ込めてインフラ化しない

---

## 成功条件

- `IMAGE [B,H,W,C]` バッチを渡すと全ノードがフレームをループ処理して `[B,H,W,C]` を返す
- B=1（静止画）で既存ワークフローが壊れない
- `PanoramaPreview` のノード上に mp4 動画が再生される
- モーダルでサムネイルストリップを使ったヌルヌルシークができる
- モーダルで動画 ERP をパン/ズームしながら再生できる
- 音声付きで PanoramaPreview に渡すとモーダルで音が出る
