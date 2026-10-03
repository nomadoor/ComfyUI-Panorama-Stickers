# タイムラインと Keyframe の UI

エディタのタイムラインで Keyframe を打つ・直す・消すときの規則を定める。データの形は `docs/scene-state-v2.md`、決定の理由は ADR 0026 にある。

内部ではパラメータごとの Lane を細かく制御できるが、最初の版の UI はオブジェクト単位の操作を基本にする。Lane を一本ずつ扱うグラフエディタや、After Effects のストップウォッチのような UI は作らない。

## 記録の規則

| 状況 | パラメータを変えたときの結果 |
|---|---|
| その Lane に Keyframe がない | 静的な値が変わる。Keyframe は入らない |
| その Lane に Keyframe があり、再生ヘッドがその Lane の Keyframe の上 | その Keyframe を更新する |
| その Lane に Keyframe があり、再生ヘッドが Keyframe 以外 | そのフレームに Keyframe を入れる |

- 判定は Lane ごとに行う。変えた Lane にだけ Keyframe が入る。
- 「再生ヘッドが Keyframe の上」は、評価関数と同じ許容差（`FRAME_EPSILON`）で比べる。Sticker と `scene` の Lane は、Timeline frame を素材基準（`frame − (start − in)`）に直して比べる。
- ドラッグ中は、最初の変化でそのフレームに Keyframe が入り、以後はその Keyframe を更新する。
- Keyframe のある Lane を変えても、静的な `value` は変えない。Lane の最後の Keyframe を消したときは、その Keyframe の値を `value` にする（消した瞬間に値が飛ばない）。複数の Keyframe を一度に消して Lane が空になるときは、再生ヘッドの位置での値を `value` にする。
- タイムラインの行のポチを押すと、その時点の値で全 Lane に Keyframe が入る（あれば更新する）。最初の Keyframe もこの操作で打つ。
- Keyframe と Keyframe の間に入れた Keyframe の Easing は、入れた区間の Easing を引き継ぐ。前後の区間がどちらも元の区間と同じ Easing になる。手で曲げた cubic-bezier も同じ値をそのまま写す（元の動きと厳密には一致しない）。最初の Keyframe より前に入れたときは、新しい Keyframe の Easing を既定値の ease-in-out とする。最後の Keyframe より後に入れたときは、それまで最後だった Keyframe の Easing（使われていなかった値）が新しい区間に掛かり、新しい Keyframe の Easing は既定値とする。
- Keyframe を消せるのは、タイムラインで選んで Delete したときだけ。消した後は残った Keyframe で補間し直す。全 Keyframe を一度に消すスイッチは作らない。
- インスペクタには Keyframe を打つボタンを置かない。
- `world` の Sticker（#72）も同じ規則で記録する。ギズモのドラッグはモードの Lane（Move は `position`、Rotate は `rotation`、Scale は `scale`）だけを、インスペクタは変えた欄の Lane だけを変える。Clip range があるので、`sky` の Sticker と同じく素材基準のフレームで比べる。ギズモとインスペクタは `docs/threejs-spark-integration.md` の「`world` の Sticker の操作（#72）」。
- 見回しは Viewport camera で行い、Camera の値は変えない。Camera の値を変えるのは、Camera を操作するとき（Cutout の frame タブと、Cutout で Camera の行を選んだときの操作とインスペクタ）だけである。Stickers は Camera を持たない（ADR 0028）。Stickers のエディタの空間の表示では、3DoF の見回しは原点（ERP を撮る位置）に立ったまま向きを変え、6DoF は Viewport camera を空間の中で動かす（`docs/threejs-spark-integration.md` の「空間の表示」）。
- ノード上の UI には Keyframe の操作がないので、Keyframe のある Lane はノード上では変えない。表示しているフレーム（最初は frame 0、一時停止したフレーム）によらず、Sticker のドラッグは Keyframe のない Lane（どのフレームでも同じ値）の静的な値だけを変え、Keyframe のある Lane にしか効かない操作は無視する（#70 のロックと同じ感触）。Keyframe のある Lane はエディタのタイムラインで直す。この扱いはオーナーの判断待ちの既定値で、`pano_stickers_node_surface.js` の `set-transform`（`unkeyedPose`）だけで決まる。
- ノード上の UI には再生ボタンが一つだけあり、時間のあるときだけ出る（エディタと同じ `isTimed` か、背景の VIDEO か `port` の Sticker の素材の MP4 があるとき）。ボタンは再生と一時停止を切り替える。Timeline の fps でループ再生し、背景の VIDEO は音を出さずに同じ状態機械で再生する。一時停止は画面に出ているフレームで止まり（エディタの停止と同じ）、もう一度押すとそこから続く。そのフレームはノードごとの一時状態で保存せず、reload すると frame 0 に戻る。背景の VIDEO が替わったときと Timeline がそのフレームより短くなったときも frame 0 に戻る。編集（Sticker をつかむ、ツールバーの操作、画像の追加、Delete）とエディタを開く操作で一時停止する。見回しでは止まらない。Space キーは使わない（ComfyUI のキャンバスの pan）。細かい規則は `docs/panorama-stickers-node-surface-spec.md` にある。
- Sticker がアップロード中（Source にファイルがまだない）の間は、Undo の履歴を記録しない。アップロードが終わったときに、その間の編集を含めて一度記録する（失敗して Sticker が消えたときも同じ）。

## Easing

- 既定値は ease-in-out。Easing は区間ごとに、インスペクタのパネルで選ぶ（cubic-bezier のプリセットと曲線、`auto`、`hold`）。タイムラインの上で直接は曲げない。
- cubic-bezier の制御点の縦方向は 0〜1 に限る。
- 対象の区間：ポチを一つ選んだときはその Keyframe から次の Keyframe までの区間、二つ以上選んだときは最初から最後のポチまでのすべての区間。
- パネルの選択肢は ease-in-out（既定）・linear・ease-in・ease-out のプリセット、`auto`、`hold`。cubic-bezier はグラフの二つの制御点をドラッグして変えられる。

## タイムラインの表示

- 再生ボタンはタイムラインの一つだけで、背景の VIDEO があれば VIDEO を（音声も）再生し、そのフレームの時刻で再生ヘッドを動かす。VIDEO より Timeline が長いときは、VIDEO の終わりから先は時計で進める。VIDEO がなければ時計で進める。どちらも Timeline の終わりで先頭に戻る。シークや編集（Sticker・Camera の変形、ペイント、インスペクターや Keyframe・Clip range の操作、Sticker の追加・削除、Undo・Redo）で再生は止まる。見回し（視点の回転・ズーム）や選択では止まらない。キャンバスで Sticker をつかむ操作は、ポインタが最初に動いたときに止まり、止まったフレームの値から変形を始める（クリックで選ぶだけなら止まらない）。`world` の Sticker のギズモのドラッグも同じで、`world` の Sticker の本体を押すのは選ぶだけなので止まらない。ペイントは描き始めた時点で止まる。止めたときは一時停止した VIDEO が表示しているフレームで止まり、再生ヘッドと静止画をそのフレームに合わせ、シークし直さない。新しいノードでは VIDEO 自身の再生・シークの操作は出さない。
- Space キーは再生ボタンと同じく再生・停止を切り替える（ボタンのツールチップは「Play (Space)」）。テキスト・数値の入力欄、select、contenteditable にフォーカスがあるときと確認ダイアログが出ているときは効かない（スライダーでは効く）。Ctrl・Meta・Alt を押しながらの Space はブラウザと OS に任せる。エディタの外にフォーカスがあるとき（上に別の ComfyUI のダイアログが出ているときなど）も効かない。タイムラインのボタンにフォーカスがあってもボタンは押されず、再生の切り替えだけが起きる（Firefox はボタンを keyup で押すので keyup も止める）。キーリピートは無視する。旧ノードのエディタでは Space は何もしない。
- タイムラインのバーには Timeline fps と出力の長さ（`timeline.length`、Timeline frame）の欄がある。
  - Timeline fps は、`bg_media` と `sticker` に VIDEO がないときだけ変えられる（ADR 0024）。VIDEO があるときは値だけを表示する。VIDEO があるかは、リンクの型（`VIDEO`）か、ノードの現在の実行結果の `ui` の `pano_timeline_fps`（VIDEO が決めた Timeline fps。VIDEO がないときは出さない）で判断する。
  - fps を変えると `rebaseSceneState` で状態を再基準化し、Keyframe・Clip range・長さ・再生ヘッドの時刻を秒で保つ。Undo できる（Undo・Redo で fps が変わるときも再生ヘッドの時刻を秒で保つ）。
  - IMAGE バッチの背景のエディタ用 MP4 は、前回の実行の Timeline fps でエンコードされている。エディタで fps を変えると、次に実行するまで背景の映像のフレームと長さがずれて見える。一時的なずれで、`state_json` が変わるので次のキューでノードが実行され、新しい fps の MP4 になる。
  - 長さの欄が空なら長さは入力から決まる（`null`）。値を入れるとノードの出力の長さになり、タイムラインもその長さで終わる（VIDEO が長くても延ばさない。それより後の Keyframe と Clip range の端の分だけは延ばす）。
  - エディタを開いたとき、現在の実行結果の `pano_timeline_fps` が状態の `timeline.fps` と違えば、状態をその fps に再基準化する。ウィジェットの `state_json` は次の編集かキューまで変わらない（ノードは記録された fps で秒を保って読むので、書き込む前でも出力は同じ）。
  - エディタを開いている間に届いた実行結果が違う `pano_timeline_fps` を持つときも、同じく再基準化する。これは Undo の 1 段になる。
- Clip range の外にある Sticker の行を選ぶと、再生ヘッドがその Clip range の始まりへ移ってから選ばれる。
- タイムラインはビューの下にある。開閉や行の開閉で高さが変わるときは 180 ms かけて伸び縮みし、ビューは同じフレームのうちに新しい大きさで描き直す（横の画角と中心は保ち、上下が切れるだけ）。高さは画面の高さの 34% までで、それを超える行は中でスクロールする。prefers-reduced-motion では動かさずに切り替える。

タイムラインはオブジェクトごとに一行である。閉じた行が基本で、▶ で開くと Lane ごとの行が出る。

閉じた行：

- そのフレームにある Lane の Keyframe を、一つのポチにまとめて表示する。全 Lane にあれば塗りつぶし、一部の Lane だけなら半分の塗りにする。
- ポチの移動・削除・Easing の変更は、そのフレームの全 Lane の Keyframe にまとめて効く。移動先のフレームに同じ Lane の Keyframe があれば、移動したほうで置き換える。
- 選んだポチの Lane ごとに Easing が違うときは、Easing の欄に「混在」（UI の表記は英語の UI に合わせて Mixed）と出す。Lane の最後の Keyframe の Easing（使われない値）は比べない。そこで選ぶと全 Lane がその Easing にそろう。

開いた行：

- Lane ごとに Keyframe を表示し、Lane 単位で選択・移動・削除・Easing の変更ができる。

## Camera のモード

Camera は Keyframe と Drone の二つのモードを持ち、出力にはいま選ばれている方だけを使う。両方のデータは独立に保持し、切り替えても他方は消えない。一本のタイムラインの中で混ぜることはしない。Camera のタイムラインは Cutout だけが持つ（ADR 0028）。画角はどちらのモードでもインスペクタで変える値で、Drone では Keyframe を持たない一定の値である。Drone モードのとき、Camera の行にポチは出さない（位置と回転は通過点から決まる）。Drone の通過点・道筋・状態の項目は Drone の ticket で定める。

## 再生の状態

再生・シーク・停止は `web_src/pano_video_playback.js` の状態機械だけが決める。エディタは VIDEO 要素と時計を渡し、知らされた再生ヘッドのフレームと静止画を表示する。旧ノードの VIDEO 自身の操作（再生ボタンとシークバー）と、新しいノードのノード上の再生（`web_src/pano_node_playback.js`）も同じ状態機械を使う。

| 状態 | 意味 |
|---|---|
| `idle` | 再生ヘッドのフレームを静止画で表示している |
| `loading` | VIDEO にまだフレームがない。読めたら静止画を出すか再生する |
| `seeking` | 一つのシークが進行中。着いたら静止画を出すか再生する |
| `playingVideo` | VIDEO が再生中で、表示されたフレームが再生ヘッドを動かす |
| `playingClock` | 時計が再生ヘッドを動かす（VIDEO がない、または VIDEO の終わりより先） |
| `error` | VIDEO が読めなかった。ソースが変わるまで VIDEO なしで動く |

- 再生ヘッドのフレームはこの状態機械が持つ一つだけで、時刻からフレームへの丸めは ADR 0024 の最近傍。旧ノードはメタデータの fps があればそのフレーム、なければミリ秒を単位にする（シークバーの時刻へそのままシークする）。旧ノードの VIDEO 自身のループが有効な間は、状態機械は終わりを持たず、VIDEO が途切れずにループする。
- シーク先は VIDEO のシーク可能な終わりまでに抑える。同じ目標に二度続けて手前で着いたときは、そこを着地点として受け入れる（シークし直しは一回まで）。シーク中の新しいシークは、着いた時点で最新のフレームへ一度だけシークし直す。
- シークしなくても目標のフレームにいるときは、待たずに次の動作（静止画か再生）へ進む。ただし終わりまで再生した VIDEO は必ずシークする（そのまま play() すると先頭から再生される）。
- 停止の位置は、一時停止した VIDEO の currentTime で決める。一時停止した VIDEO は PTS ≤ currentTime の最後のフレームを表示する（ADR 0024）ので、そのフレーム（`frameShownAt`）を再生ヘッドにし、その絵を静止画にする。シークはしない（Timeline の終わりを越えるときだけ、最後のフレームへシークする）。requestVideoFrameCallback の mediaTime は再生中の追従だけに使う。コールバックは currentTime より何フレームも遅れることがある（隠れたタブ、合成されない要素）ため、停止位置には使わない。
- ソースが変わる・消える・読めなくなると、待っているシークや読み込みはそこで終わり、再生は止まる。新しいソースは読めた時点で再生ヘッドのフレームを表示する（旧ノードは先頭）。
- 再生中でも、VIDEO が最初のフレームを表示するまでは直前の静止画を出し続ける（シーク直後や再生開始直後の VIDEO には描けるフレームがない）。描画側（`pano_three_view.js`）も、差し替え先の素材に絵が来るまで前のテクスチャを使い続ける。
- VIDEO が Timeline 以上の長さのときは、VIDEO 自身のループで繰り返す（長い分は Timeline の終わりで先頭へ戻す）（シークしないので映像も音声も途切れない）。Timeline が長いときは、終わりで先頭へシークしてから再生する。
- 各状態が付けたイベントリスナーと requestVideoFrameCallback・時計のコールバックは、その状態を離れるときに外す。

### `port` の Sticker の素材（#83）

`sticker` の VIDEO と 2 枚以上の IMAGE バッチは、実行結果の MP4（`pano_sticker_input_videos`、`docs/render-contract.md`）を、エディタとノード上の UI で再生ヘッドに合わせて表示する。状態機械は増やさず、背景の VIDEO の状態機械の再生ヘッドに、2 つ目の VIDEO（`pano_video_playback.js` の `createVideoFollower`）が描画のたびに従う。音は出さない（背景の音声だけ。ADR 0024）。

- 再生ヘッドのフレームから素材の時刻を求める規則は `pano_port_media.js` の `portMediaTime` で、`video` 出力（`sticker_media.py` の `PortMedia.index_at`）と同じ。素材の最初のフレームは Clip range の `start − in` にある。VIDEO は実時間で進み、その時刻の PTS ≤ t の最後のフレームを出す（PTS の丸めの許容差はメタ情報の `pts_tolerance`）。IMAGE バッチは Timeline fps の列で、最も近い 1 枚を出す（MP4 の中ではそのフレームの真ん中へシークする）。Clip range の外と、素材の外（素材の前・終わりの後）では描かない。
- 再生ヘッドが止まっている間（`idle`・`loading`・`seeking`）は、VIDEO を止めてそのフレームの時刻へシークし、着いたら静止画にする。シーク中の新しい時刻は、着いた時点で最新の時刻へ一度だけシークし直す。着くまでは前の静止画を出す。
- 再生ヘッドが進む間（`playingVideo`・`playingClock`。背景の VIDEO が読み込み中・シーク中の間は進まない）は VIDEO も再生し、表示されたフレームと再生ヘッドの時刻の差が 1.5 フレーム（1 フレームと、再生ヘッドの丸めの半フレーム）を超えたらその時刻へシークし直す（Timeline のループで先頭に戻ったときも同じ。MP4 の実際の終わりより先の時刻は、その終わりと見なしてシークしない）。VIDEO が最初のフレームを出す（`playing`）までは静止画を出す。背景の VIDEO がなくても（時計で進むときも）同じである。
- 停止したときは、止めた VIDEO の絵をすぐ静止画にしてから、再生ヘッドのフレームへシークして静止画を確かめる（背景と同じく、止めた瞬間に絵が飛ばない）。
- RGBA の IMAGE バッチは MP4 の代わりに PNG の列（`pano_sticker_input_frames`）で、同じ時刻から求めた 1 枚（`portImageIndex`）を出す。その 1 枚と先の 4 枚だけを読み込み、読めるまでは前の 1 枚を出す（`pano_port_media.js` の `createFrameSequence`）。
- 素材の静止画がまだないときは、最初のフレーム（`pano_sticker_input_images`）を出す。描画側は差し替え先に絵が来るまで前のテクスチャを使い続ける。MP4 が読めないときも最初のフレームを出す。
- MP4 は実行結果が新しい間だけ使い（`isNodeOutputMediaCurrent` の `external-sticker`）、reload 後はジョブ履歴から戻った実行結果で同じく使う。
- Timeline の長さ（`timelineSpan` の `frames`）は、Clip range に長さのない `port` の Sticker では素材の終わりまで延ばす（`portMediaFrames`）。
