# ADR 0033: Timeline の値に上限を置く

## Status

Accepted

## Date

2026-10-08

---

状態 v2 の Timeline の値は、読み込みと fps の再基準化で次の範囲に寄せる（`docs/scene-state-v2.md` の「共通の規則」と `timeline` の行）。

- `timeline.fps`：1〜1000（`TIMELINE_FPS_MIN`・`TIMELINE_FPS_MAX`）。高速度撮影の VIDEO（240 fps を超えるもの）を寄せずに扱える値にした。
- `timeline.length`：10,000,000 以下（`TIMELINE_LENGTH_MAX`）。
- Keyframe の `frame` と Clip range の `start`・`in`・`duration`：±10,000,000 の内（`TIMELINE_FRAME_MAX`）。1000 fps で約 2.8 時間。

上限が無いと、極端な値（例：`1e308`）でエディタのタイムラインの目盛りのループや再基準化が止まらなくなる。
frame と長さの上限を同じ値にしたのは、高い fps に再基準化しても長さの上書きが黙って縮まないようにするためである。

## Consequences

- 定数は `core/scene_state.py` と `web_src/pano_scene_state.js` に同じ値で置き、フィクスチャ `tests/fixtures/scene_state/v2_timeline_limits` で一致を確かめる。
- 範囲内の状態は変わらない。
