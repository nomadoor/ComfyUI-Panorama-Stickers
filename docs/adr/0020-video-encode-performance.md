# ADR 0020 — Video Encode Performance: GPU Pipeline + Hardware Encoding

## Status

Active

## Date

2026-04-19

---

## 背景と問題

ADR 0018 で導入した動画バッチ処理（`PanoramaStickers.execute`）において、
100 フレーム処理に **34 秒**かかる問題が発覚した。
ComfyUI の Save Video ノードは同条件で約 6 秒。

プロファイリングで判明したボトルネック：

| Step | 時間 | 原因 |
|---|---|---|
| `_images_to_numpy_batch` | 2.12s | GPU→CPU float32 転送 (622MB) |
| `_apply_coverage_to_rgb` ×100 | 7.82s | PIL resize を Python ループで 100 回 |
| `_build_overlay_erp_rgba_and_mask` | 0.02s | 問題なし |
| `alpha_composite_over_rgb` ×100 | 12.10s | numpy が 629MB バッファを 3 回アロケート |
| `encode_frames_to_mp4` | 6.75s | libx264 ソフトウェアエンコード |

エンコード自体 (6.75s) は ComfyUI core と同等。問題は**その前の 22 秒**にある。

---

## 決定

### 1. GPU Batch Resize（PIL ループ排除）

`bg_erp` は ComfyUI から CPU torch テンソルとして渡される。
PIL で 1 フレームずつリサイズする代わりに、
`torch.nn.functional.interpolate` でバッチ全体を一括リサイズする。

```python
_t = bg_erp.to(cuda_device).permute(0, 3, 1, 2).float()  # (B, C, H, W)
_t = F.interpolate(_t, size=(out_h, out_w), mode="bilinear", align_corners=False)
_bg_tensor = _t.permute(0, 2, 3, 1).clamp(0, 1)           # (B, H, W, C) on CUDA
```

CUDA デバイスへ明示的に移動することで：
- CPU torch での実行 (1.58s) → CUDA での実行 (0.71s / 初回含む)

### 2. GPU Alpha Composite（numpy ループ排除）

`overlay_rgba` は全フレーム共通の `(H, W, 4)` numpy 配列。
`_bg_tensor` は `(B, H, W, 3)` CUDA テンソル。

numpy の Python ループ（1 フレームずつ × 100）を廃止し、
overlay を CUDA に転送して broadcast 演算 1 回で処理する：

```python
ov_t   = torch.from_numpy(overlay_rgba).to(cuda_device)  # (H, W, 4)
alpha  = ov_t[None, ..., 3:4]   # (1, H, W, 1)  broadcast ready
rgb    = ov_t[None, ..., :3]    # (1, H, W, 3)
out_t  = (rgb * alpha + _bg_tensor * (1.0 - alpha)).clamp(0, 1)  # (B, H, W, 3)
```

numpy での 3 回 × 629MB アロケーション (12.10s) が CUDA 演算 0.06s になる。

### 3. CPU 転送の分離と uint8 化

`out_t`（画像出力）と `bg_batch`（エンコード用）で転送を分離する。

- **`out_t`**: CUDA float32 (629MB) → `.contiguous().cpu()` → ComfyUI IMAGE 出力
- **`bg_batch`**: CUDA 上で先に uint8 変換 → CPU 転送 157MB (4× 削減)

```python
# 画像出力用（float32 必要）
out_t = out_t.contiguous().cpu()

# エンコード用（uint8 で 4× 軽量化）
bg_batch = (_bg_tensor * 255.0).clamp(0, 255).to(torch.uint8).detach().cpu().numpy()
```

GPU→CPU 転送: 1.06s (float32) → 0.29s (uint8)。

### 4. `_normalize_frames` に uint8 fast path 追加

`encode_frames_to_mp4` の `_normalize_frames` は uint8 入力を検出した場合、
float32 変換・clip をスキップしてそのまま返す：

```python
if arr.dtype == np.uint8:
    # already [0, 255] — skip float ops
    return arr  # channel fix のみ
```

エンコードループも `batch.dtype == np.uint8` を確認し、
uint8 の場合は `* 255` 変換をスキップする。

### 5. `_append_video_payload` の dtype 保持

`_append_video_payload` が内部で `np.asarray(frames, dtype=np.float32)` を
強制していたため、uint8 [0,255] が float32 [0,255] に変換され、
`_normalize_frames` の `clip(0,1)` で全ピクセルが白 (1.0) になるバグが発生した。

修正: dtype を保持してそのまま `encode_frames_to_mp4` に渡す。

```python
batch = np.asarray(frames)  # dtype 保持
if batch.dtype not in (np.uint8, np.float32, np.float16):
    batch = batch.astype(np.float32)
```

### 6. Hardware Encoding (h264_nvenc fallback)

エンコードに NVIDIA GPU が使える環境では h264_nvenc を優先し、
失敗した場合のみ libx264 にフォールバックする：

```python
for _codec in ("h264_nvenc", "h264"):
    try:
        stream = container.add_stream(_codec, rate=frame_rate)
        if _codec == "h264_nvenc":
            stream.options = {"preset": "p4"}
        break
    except Exception:
        continue
```

nvenc は rgb24 入力の暗黙変換が正しく動作しないため、
エンコード前に明示的に yuv420p へ変換する：

```python
if codec_name == "h264_nvenc":
    video_frame = video_frame.reformat(format="yuv420p")
```

---

## 結果

| Step | Before | After |
|---|---|---|
| resize + numpy 変換 | 9.94s | 0.71s (CUDA) |
| GPU composite | 12.10s | 0.06s (CUDA) |
| GPU→CPU 転送 | 2.12s | 0.29s (uint8) |
| エンコード (nvenc) | 6.75s | ~4.5s |
| **合計** | **~34s** | **~12s** |

---

## 採用しなかったアプローチ

| アプローチ | 却下理由 |
|---|---|
| keyint=1 (all-intra) | エンコードはボトルネックではなかった |
| movflags 変更 | 無関係・むしろ遅くなった |
| 低解像度プロキシ | パノラマの性質上採用しない（ADR 0019 と同方針） |
| out_t を GPU テンソルのまま返す | ComfyUI は CPU IMAGE テンソルを期待する |

---

## 影響ファイル

| ファイル | 変更内容 |
|---|---|
| `comfyui_pano_suite/nodes.py` | GPU resize+composite パイプライン、uint8 転送、`_append_video_payload` dtype fix |
| `comfyui_pano_suite/core/video.py` | `_normalize_frames` uint8 fast path、encode ループ uint8 対応、h264_nvenc fallback、yuv420p 明示変換 |

---

## 今後の課題

- nvenc の `preset` / `rc` オプションによるビットレート制御（現状はデフォルト任せ）
- `out_t` の 629MB CUDA→CPU 転送 (~1s) は現時点では不可避。
  downstream が GPU テンソルを受け入れる場合は省略できる
- CUDA が使えない環境での CPU torch interpolate は PIL より速いが未計測
