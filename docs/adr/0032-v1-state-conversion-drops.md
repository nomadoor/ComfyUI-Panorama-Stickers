# ADR 0032: 状態 v1 を v2 に読み替えるときに保たないもの

## Status

Accepted

## Date

2026-10-08

---

Panorama Studio は、状態 v1（旧ノードの `state_json`）を読むと v2 に読み替える（`docs/scene-state-v2.md` の「v1 から v2 への読み替え」）。旧ノードはそのまま残り、v1 のまま読み書きするので、読み替えが起きるのは v1 の状態を Panorama Studio に持ち込んだときだけである。このとき、次のものは保たない。

- `path` 型の資産（初期の版だけが書いた、作業ディレクトリからの相対パス）。その Sticker は捨てる（ユーザーの判断）。
- 外部 Sticker の `source_state_hash`（`sticker_state` が変わったときだけ姿勢を上書きする印）と `initial_pose`。v2 には対応する項目が無い。v2 の Pose handoff は、実行のたびの引き継ぎと上書き（`handoff_overrides`、ADR 0030）で決まる。
- v1 の Cutout で `shots` が空のときの「入力の ERP をそのまま出す」挙動（ユーザーの判断）。読み替えると `camera` は `null` になり、Panorama Studio は Camera の無い状態として原点・回転 0 の ERP を撮る。
- エディタのセッションの状態（`ui_settings`・`active`・`editor_history`）。Scene ではないので状態に置かない。エディタの選択はノードのプロパティ `pano_editor_active` に置き、プロンプトに入らないので、選んでも再実行にならない。

## Consequences

- v1 の状態を Panorama Studio に貼ると、上のものは一度保存した時点で消える。旧ノードの状態は変わらない。
- main に出す前に、README の移行の注意にこのことを書く。
