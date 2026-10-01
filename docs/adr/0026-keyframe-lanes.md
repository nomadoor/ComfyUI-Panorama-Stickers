# ADR 0026: Keyframe はパラメータごとの Lane に持つ

## Status

Accepted

## Date

2026-10-02

## Supersedes

- `docs/scene-state-v2.md` の Keyframe group（変形一式をまとめて Keyframe を打つ単位）
- 同文書の Easing の既定値 `auto`

---

Keyframe は、パラメータごとの Lane に持つ。`sky` の Sticker は方向・roll・サイズ・不透明度、`world` の Sticker と `scene` は位置・回転・スケール（Sticker は不透明度も）、Camera は位置・回転・画角の Lane を持つ。方向は yaw と pitch を一つの Lane にまとめる。別々に補間すると球面上をまっすぐ進まないためである。

データは細かく持つが、エディタは Lane を一本ずつ扱わせない。タイムラインはオブジェクトごとに一行で、行のポチを押すと全 Lane にまとめて Keyframe が入る。Keyframe のある Lane の値を変えると、そのフレームの Keyframe が入るか更新される。Keyframe のない Lane の値を変えると、静的な値が変わる。最初の Keyframe は全 Lane に入るので、画角だけ記録が漏れることはない。見回しは出力に影響しない Viewport camera で行うので、Camera を動かすのは画を決めているときだけで、そこで Keyframe が入るのは意図どおりである。詳細は `docs/timeline-ui.md` に書く。

Easing の既定値は、Camera も Sticker も ease-in-out（`[0.42, 0, 0.58, 1]`）とする。cubic-bezier の縦方向の制御点は 0〜1 に限り、値が区間の両端の値の間を外れないようにする。`auto` は Keyframe で止まらずに通過する。Keyframe ごとに止まる動きを既定にし、止まらずに通したいときにユーザーが `auto` を選ぶ。

状態 v2 と `sticker_state` v2 は main に出ていないので、`version` は 2 のまま形を変える。

## Consequences

ease-in-out は Keyframe ごとに止まる。複数の通過点を止まらずに通すには、`auto` を選ぶか Drone を使う。値そのものを曲げて行き過ぎさせる補間やグラフエディタは作らない。必要になったら新しい Easing の種類として足す。
