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
- 見回しは Viewport camera で行い、Camera の値は変えない。Camera の値を変えるのは、Camera を操作するとき（Panorama Studio の Frame タブと、Camera の行を選んだときの操作とインスペクタ）だけである。Camera が無いときの空間の表示では、3DoF の見回しは原点（ERP を撮る位置）に立ったまま向きを変え、6DoF は Viewport camera を空間の中で動かす（`docs/threejs-spark-integration.md` の「空間の表示」）。
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
- タイムラインのバーには Timeline fps と出力の長さ（`timeline.length`、Timeline frame）の欄がある。タイムラインの範囲は下の「タイムラインの長さ」。
  - Timeline fps は、`bg_media` と `sticker` に VIDEO がないときだけ変えられる（ADR 0024）。VIDEO があるときは値だけを表示する。VIDEO があるかは、リンクの型（`VIDEO`）か、ノードの現在の実行結果の `ui` の `pano_timeline_fps`（VIDEO が決めた Timeline fps。VIDEO がないときは出さない）で判断する。
  - fps を変えると `rebaseSceneState` で状態を再基準化し、Keyframe・Clip range・長さ・再生ヘッドの時刻を秒で保つ。Undo できる（Undo・Redo で fps が変わるときも再生ヘッドの時刻を秒で保つ）。寄せた結果が今の fps と同じなら何もしない（Undo の段も積まない）。
  - IMAGE バッチの背景のエディタ用 MP4 は、前回の実行の Timeline fps でエンコードされている。エディタで fps を変えると、次に実行するまで背景の映像のフレームと長さがずれて見える。一時的なずれで、`state_json` が変わるので次のキューでノードが実行され、新しい fps の MP4 になる。
  - 長さの欄は常に数を出す。`timeline.length` が `null` のときは、入力から決まる今の長さ（下の「タイムラインの長さ」の Auto の長さ。タイムラインの範囲そのもの）を出す（`PanoTimeline.vue` の `lengthText`）。UI に「Auto」の語は出さない。数を入れると `timeline.length` になり、ノードの出力の長さになって、タイムラインもちょうどその長さになる（VIDEO や Clip range が長くても延ばさない）。欄を空にしても何も変わらない（元の数に戻る）。
  - 欄の右にリセットのボタン（アイコン、`PanoTimeline.vue` の `pano-timeline-length-reset`）がある。押すと `timeline.length` を `null` にして、入力から決まる長さに戻す。Undo の 1 段になる。一方向の操作で、切り替えではない（もう一度押しても値には戻らない）。`timeline.length` が `null` のときは無効にする（隠さないので、バーの配置は動かない）。状態の形は変えない（`docs/scene-state-v2.md`）。
  - 欄の値には上限がある。fps は 1〜1000、長さは 1〜10,000,000（Timeline frame。Clip range の端と同じ上限）で、範囲の外の値はいちばん近い端に寄せる（例：`1e308` は fps なら 1000、長さなら 10,000,000）。数でない値と 0 以下の fps は受け付けず、元の値に戻す。読み込みでも同じ範囲に寄せる（`docs/scene-state-v2.md`）。`timelineSpan` は有限でない値を返さず（壊れた入力なら `BROKEN_SPAN` の 100,000）、目盛りは 2,000 個まで（`timelineTicks` の `MAX_TICKS`）にする。
  - エディタを開いたとき、現在の実行結果の `pano_timeline_fps` が状態の `timeline.fps` と違えば、状態をその fps に再基準化する。`pano_timeline_fps` は先に 1〜1000 に寄せてから比べる（`videoTimelineFps`）。1000 fps を超える VIDEO では状態は 1000 fps になり、次の実行結果からは同じ値と比べるので、再基準化・再生ヘッドの跳び・空の Undo を繰り返さない。ウィジェットの `state_json` は次の編集かキューまで変わらない（ノードは記録された fps で秒を保って読むので、書き込む前でも出力は同じ）。
  - エディタを開いている間に届いた実行結果が違う `pano_timeline_fps` を持つときも、同じく再基準化する。これは Undo の 1 段になる。
- タイムラインのドラッグ（Clip range の移動・トリム、Keyframe の移動、ルーラーのスクラブ）は、ポインタが動くたびに状態だけを変え、タイムラインの表示の更新は 1 フレームに 1 回にまとめる（`pano_frame_batch.js` の `createFrameBatch`）。ビューは、見た目が変わるときだけ 1 フレームに 1 回更新する。Clip range では、再生ヘッドが範囲を出入りしたときと、移動で再生ヘッドの位置の素材の時刻が変わったときである（トリムでは素材の時刻は変わらない）。Keyframe の移動では毎フレーム更新する。スクラブのシークも 1 フレームに 1 回にする。インスペクタ・選択メニュー・ノード上のプレビューへの反映と Undo の記録は、ドラッグの終わりに 1 回だけ行う。Clip range が変わっても、ビューの状態 v2 は読み直さず、Clip range だけを写す。
- キャンバスのドラッグ（見回し、Sticker の移動、ペイント、ギズモなど）も、ノード上のプレビューへの反映はドラッグの終わりに 1 回だけ行う（エディタの描画ループで、ドラッグが終わった次のフレームに反映する）。ギズモのドラッグのインスペクタの更新は 1 フレームに 1 回にまとめる。マスクの表示用のキャンバス（ERP と同じ大きさ）は、マスクと描いている途中のストロークが変わったときだけ作り直し、マスクが空なら作らない（`getMaskDisplayCanvas`・`getMaskDisplayRevision`）。ペイントのグループの、描いている途中のストロークを重ねたキャンバスも、変わったときだけ作り直す。
- Clip range の外にある Sticker の行を選ぶと、再生ヘッドがその Clip range の始まりへ移ってから選ばれる。
- Panorama Studio（`PanoramaStudio`、#89）のタイムラインは、背景・Camera・Sticker・ペイント・`scene` の行を 1 本に並べる（上から背景（下の「背景の行」）、Camera、Sticker（手前から奥、`world` の Sticker）、ペイント、`scene`）。`scene` 入力に上流の Scene があるときは、その下に上流の層ごとの行が続く（下の「上流の層の行（ADR 0030）」）。
  - Camera の行は Camera があるときだけ出る（`buildTimelineModel` の `camera` に Camera の有無を渡す）。Frame 表示・Panorama 表示（3DoF の枠の操作と 6DoF のギズモ）・インスペクタで Camera を変えると、変えた Lane にだけ Keyframe が入る（上の記録の規則）。行のポチで全 Lane（位置・回転・画角）に入る。Camera の Lane は Clip range を持たず、Timeline frame そのもので比べる。再生の可否（`isTimed` の `camera: true`）とタイムラインの長さ（`timelineSpan` の `camera: true`）にも数える。Camera が無ければ（`camera: null`）どちらも数えない。
  - Camera の行が出入りしても、タイムラインのバー（再生ボタン・fps・長さ・開閉）は変わらない（`node --test` で確かめている）。行の一覧は Sticker を足したときと同じく 1 行増え、下の行が 1 行分下がる。タイムラインを開いているときは、行の分だけタイムラインが高くなり（34% まで）、ビューが低くなる。これも Sticker を足したときと同じである。
  - `scene` の行（アイコンは箱）は、`scene` 入力がつながっているとき、または `scene` が Keyframe か既定でない Clip range を持つとき（`pano_timeline.js` の `ownerTimed`）に出る。`scene` の位置・回転・大きさを変える操作とインスペクタはまだ無いので、`scene` の行は Clip range（移動と両端の切り詰め。Sticker の行と同じ）だけを持ち、行のポチと Lane の行は出さない（行のモデルの `keyable: false`。エディタも `scene` の `key-row` を無視する。行を開くボタンは無効）。状態に `scene` の Keyframe があれば、行にポチの印だけは出る。行を選んでもキャンバスの選択は外れるだけで、何も選ばれない。
  - ノード上の UI の再生ボタンも、Panorama Studio では Camera の Keyframe を数える（`pano_node_playback.js` の `camera`。エディタの `isTimed` と同じ判断）。
  - VIDEO や上流の Scene の fps に再基準化して開いても、編集せずに閉じたときは `state_json` を書き換えない（`sameEditorStateText` の `rebased`。今の `state_json` を再基準化したものと保存しようとする状態が同じなら書かない）ので、ノードは再実行されず、Keyframe も丸められない。
- タイムラインはビューの下にある。開閉や行の開閉で高さが変わるときは 180 ms かけて伸び縮みし、ビューは同じフレームのうちに新しい大きさで描き直す（横の画角と中心は保ち、上下が切れるだけ）。高さは画面の高さの 34% までで、それを超える行は中でスクロールする。prefers-reduced-motion では動かさずに切り替える。

## タイムラインの長さ

タイムラインは出力の長さ（Timeline duration）をちょうど表す（Rive・After Effects のコンポジションの長さと同じ）。編集のための余白は持たず、出力より先の範囲は出さない。両端の見た目の余白だけは UI の都合で付けてよい。

- タイムラインの範囲（`pano_timeline.js` の `timelineSpan`）は、`timeline.length` があればその値、なければ Auto の長さ（入力から決まる長さ。この文書の中の呼び名で、UI には出さない）。最小の長さはない（以前の「長さが無いときは 5 秒」はなくした）。
- Auto の長さ（`autoTimelineLength`）は、ノードの `_decide_timeline`（`docs/studio-node.md` の「長さ」）と同じ規則で、状態と、エディタが知っている入力の長さから編集のたびに求め直す（前回の実行結果の長さをそのまま使うのではない）。順に、背景の VIDEO のフレーム数 → 背景の IMAGE バッチ（2 枚以上）の枚数（どちらも素材そのもののフレーム数で、背景の Clip range によらない。背景を動かしても切り詰めても長さは変わらず、空いたところは `bg_color` になる。下の「背景の行」）→ Sticker と `scene` の Clip range の終わりのうち最も遅いもの（隠した Sticker も数える。背景の 1 枚の IMAGE の Clip range が `duration` を持てばその終わりも数える。`duration` の無い `port` の Sticker は素材の終わり、`duration` の無い `scene` は要素の数の終わり）→ Camera の各 Lane の最後の Keyframe の次のフレーム（Panorama Studio だけ）→ 1。上流の Scene があるときは、これと上流の長さと上書きした Clip range の終わりのうち最も長いもの（上流があるときの背景の VIDEO は、最後のフレームが終わる時刻を Timeline fps のフレーム数にしたもの）。Sticker の Keyframe は長さに入らない。`tests/test_timeline_length_parity.py` が、状態と入力の表でノードの長さと一致することを確かめる。
- エディタが知っている入力の長さ：
  - 背景：ノードの現在の実行結果のエディタ用 MP4 のメタ情報（`pano_input_video_meta` の `frames`・`duration`）。VIDEO か IMAGE バッチかはリンクの型で見る。MP4 の無い IMAGE（`bg_media` に IMAGE がつながっている）は 1 枚の IMAGE とみなす（実行前の IMAGE バッチも、実行までは 1 枚として数える）。上流の Scene の背景を使うときは数えない（上流の長さにすでに入っている）。
  - `port` の Sticker の素材：現在の実行結果の `pano_sticker_input_video_meta`、3D の素材は `pano_sticker_files` の要素の数（`pano_port_media.js` の `portMediaMeta`）。
  - `scene` 入力の要素：現在の実行結果の `pano_scene_files` の数。
  - 上流の Scene：実行結果の `pano_upstream_frames`（上流の出力のフレーム数）。
- 実行前で入力の長さが分からないときの扱い：分からない入力は無いものとして、規則の次の段へ進む（1 フレームの入力と同じ）。例外として、背景の入力が LoadVideo のファイルを直接読むときは、そのファイルの長さ × Timeline fps を背景の VIDEO のフレーム数とする（ノードは VIDEO 自身のフレーム数を使うので、fps が違えば実行までずれる）。ほかに一致しないのは、背景の 1 フレームの VIDEO（エディタ用 MP4 を作らないのでエディタは長さを知らず、ノードはその VIDEO の 1 フレームを長さにする。`port` の 1 フレームの VIDEO はメタ情報だけを出すので一致する）と、`pano_upstream_frames` を持たない以前の実行結果（代わりに自分の出力の長さ `pano_timeline_frames` を上流の長さとする）。どれも次の実行で正しくなる。上流の Scene の下の VFR の背景 VIDEO は、実行の後もずれうる（エディタはメタ情報の `duration`（フレーム数 ÷ 平均 fps）を使い、ノードは最後のフレームの時刻 + 平均 fps の 1 フレームを使う。CFR では一致する）。
- 再生はこの長さの中でループする（エディタもノード上の UI も）。再生ヘッドは最後のフレーム（長さ − 1）より先に行かない（`pano_video_playback.js` の `seek`。長さが縮んだときはエディタの `syncTimeline` が最後のフレームへ戻す）。そのため出力より先に Keyframe は打てない。
- Keyframe の移動と Clip range のトリムは、出力の終わりより先へはドラッグできない（`moveKeyframes` の `ceiling`、`timeline_actions.js`）。Clip range の移動は、始まり（`start`）が出力の中（最後のフレーム、長さ − 1 まで）にある限り、終わりが出力の終わりより先へ出てよい。出た分は出力の外になるだけである。これはすべての Clip range の行（背景・Sticker・`scene`・上流の層の行）で同じ。Clip range の終わりのトリムは、今までどおり出力の終わりで止まる。すでに終わりより先にある Keyframe と Clip range は、それ以上先へは押さず、引き戻しもしない。ドラッグの間はタイムラインの範囲をドラッグを始めたときのまま保ち（`timeline.drag.limit`）、離してから新しい長さにする。
  - ドラッグで出力を延ばすことはできない（Auto の長さでも同じ）。延ばすときは長さの欄に値を入れる。Auto の長さが Sticker や `scene` の Clip range の終わりで決まるとき（背景の VIDEO・IMAGE バッチも `timeline.length` も無いとき）は、その終わりを先へ動かすと長さが延びてしまうので、移動した後にタイムラインの範囲（`timelineSpanFrames`）がドラッグを始めたときの範囲（`timeline.drag.limit`）を超えた分だけ戻す（`timeline_actions.js` の `clip`）。その Clip range は今の終わりで止まり、何度ドラッグしても長さは変わらない。長さが背景の素材か `timeline.length` で決まるときは、範囲がその Clip range によらないので戻さず、上の規則どおり終わりの外へ出てよい。
- 終わりより先にある Keyframe と Clip range（`timeline.length` を短くしたとき）は、状態に残すが、出力に入らず、タイムラインにも出ない（After Effects と同じ）。消しも動かしもしない（この扱いはオーナーの確認待ちの既定値）。
- 時間で変わるものが何もない新しい Panorama Studio は 1 フレームのタイムラインになる。再生ボタンは無効になり（配置はそのまま）、Space キーも何もしない。再生ヘッドは frame 0 に留まる。長さの欄に値を入れるとその長さになり、アニメーションを付けられる。ノード上の UI の再生ボタンは今までどおり時間のあるときに出るが、1 フレームでは押しても何もしない。

## 表示（目のアイコン）

Camera・Sticker・`scene`・ペイントは、タイムラインの行の左端の目のアイコンで表示・非表示を切り替える（After Effects・Photoshop のレイヤーと同じ）。アイコンが今の状態を示す（表示は目、非表示は破線の目）。状態 v2 の `visible`（Camera・`scene`・Sticker）と `painting_visible`（ペイント）に入る（`docs/scene-state-v2.md`）。

- 目の場所はすべての行にあり、目を持たない行（`hideable` が偽）も同じ幅を空ける。行の名前・▶・ポチの位置は行によって動かない。Camera の行の目は `buildTimelineModel` の `cameraHideable` で出す（Panorama Studio）。
- ペイントの行（「Paint」、筆のアイコン）は、Sticker の行の後、`scene` の行の前に 1 行だけ出す。ストロークのグループ・ラスタ・マスクを分けず、ペイント全体をまとめて隠す（マスクも出力の MASK から消える）。ペイントが何か（ストローク・マスク・ラスタ）を持つか、隠しているときだけ出る。Clip range も Keyframe も無いので、行は目と名前だけ。
- 目の切り替えは編集で、Undo の 1 段になり、`state_json` に保存する（既定の表示は書かない）。値を変えないので、再生は止めない（Premiere・Resolve のトラックの表示の切り替えと同じ）。ロックした Sticker も切り替えられる（After Effects と同じ）。
- 隠した物はエディタでも描かない（薄くも出さない。After Effects・Photoshop・Blender のビューポートと同じ）。選べず、動かせない：キャンバスとギズモの当たり判定、選択の一覧から外れ、行を押しても選ばれない。選んでいる物を隠すと選択が外れる（Undo・Redo で隠れたときも）。隠したペイントにはペイントもマスクも描けない（ツールを使っても何も起きない。Photoshop の隠したレイヤーと同じ）。Camera を隠したときのエディタは `docs/threejs-spark-integration.md` の「Panorama Studio のエディタ（#89）」。
- タイムラインの上の操作（Keyframe・Clip range の編集、行のポチ）は、隠した物にもできる。
- 上流の層の要素・ペイント・`scene` も、その行の目のアイコンで隠し、もう一度出す（下の「上流の層の行（ADR 0030）」）。隠した上流の要素を出す手段はこの目のアイコンである（インスペクタに表示の切り替えは無く、隠した要素は選べない）。
- 旧ノードのエディタは今までどおり、隠した `port` の Sticker を薄く出す。インスペクタにあった表示の切り替え（Layers の節。Panorama・Paint / Images・Mask の、エディタの見た目だけの切り替え、ADR 0011）はなくした。

タイムラインはオブジェクトごとに一行である。閉じた行が基本で、▶ で開くと Lane ごとの行が出る。

閉じた行：

- そのフレームにある Lane の Keyframe を、一つのポチにまとめて表示する。全 Lane にあれば塗りつぶし、一部の Lane だけなら半分の塗りにする。
- ポチの移動・削除・Easing の変更は、そのフレームの全 Lane の Keyframe にまとめて効く。移動先のフレームに同じ Lane の Keyframe があれば、移動したほうで置き換える。
- 選んだポチの Lane ごとに Easing が違うときは、Easing の欄に「混在」（UI の表記は英語の UI に合わせて Mixed）と出す。Lane の最後の Keyframe の Easing（使われない値）は比べない。そこで選ぶと全 Lane がその Easing にそろう。

開いた行：

- Lane ごとに Keyframe を表示し、Lane 単位で選択・移動・削除・Easing の変更ができる。

## Camera のモード

Camera は Keyframe と Drone の二つのモードを持ち、出力にはいま選ばれている方だけを使う。両方のデータは独立に保持し、切り替えても他方は消えない。一本のタイムラインの中で混ぜることはしない。Camera のタイムラインは Panorama Studio が持つ（ADR 0029）。画角はどちらのモードでもインスペクタで変える値で、Drone では Keyframe を持たない一定の値である。Drone モードのとき、Camera の行にポチは出さない（位置と回転は通過点から決まる）。Drone の通過点・道筋・状態の項目は Drone の ticket で定める。

## 再生の状態

再生・シーク・停止は `web_src/pano_video_playback.js` の状態機械だけが決める。エディタは VIDEO 要素と時計を渡し、知らされた再生ヘッドのフレームと静止画を表示する。旧ノードの VIDEO 自身の操作（再生ボタンとシークバー）と、Panorama Studio のノード上の再生（`web_src/pano_node_playback.js`）も同じ状態機械を使う。

| 状態 | 意味 |
|---|---|
| `idle` | 再生ヘッドのフレームを静止画で表示している |
| `loading` | VIDEO にまだフレームがない。読めたら静止画を出すか再生する |
| `seeking` | 一つのシークが進行中。着いたら静止画を出すか再生する |
| `playingVideo` | VIDEO が再生中で、表示されたフレームが再生ヘッドを動かす |
| `playingClock` | 時計が再生ヘッドを動かす（VIDEO がない、VIDEO の終わりより先、または背景の Clip range の外。下の「背景の行」） |
| `error` | VIDEO が読めなかった。ソースが変わるまで VIDEO なしで動く |

- 再生ヘッドのフレームはこの状態機械が持つ一つだけで、時刻からフレームへの丸めは ADR 0024 の最近傍。旧ノードはメタデータの fps があればそのフレーム、なければミリ秒を単位にする（シークバーの時刻へそのままシークする）。旧ノードの VIDEO 自身のループが有効な間は、状態機械は終わりを持たず、VIDEO が途切れずにループする。
- シーク先は VIDEO のシーク可能な終わりまでに抑える。同じ目標に二度続けて手前で着いたときは、そこを着地点として受け入れる（シークし直しは一回まで）。シーク中の新しいシークは、着いた時点で最新のフレームへ一度だけシークし直す。
- シークしなくても目標のフレームにいるときは、待たずに次の動作（静止画か再生）へ進む。ただし終わりまで再生した VIDEO は必ずシークする（そのまま play() すると先頭から再生される）。
- 停止の位置は、一時停止した VIDEO の currentTime で決める。一時停止した VIDEO は PTS ≤ currentTime の最後のフレームを表示する（ADR 0024）ので、そのフレーム（`frameShownAt`）を再生ヘッドにし、その絵を静止画にする。シークはしない（Timeline の終わりを越えるときだけ、最後のフレームへシークする）。requestVideoFrameCallback の mediaTime は再生中の追従だけに使う。コールバックは currentTime より何フレームも遅れることがある（隠れたタブ、合成されない要素）ため、停止位置には使わない。
- ソースが変わる・消える・読めなくなると、待っているシークや読み込みはそこで終わり、再生は止まる。新しいソースは読めた時点で再生ヘッドのフレームを表示する（旧ノードは先頭）。
- 再生中でも、VIDEO が最初のフレームを表示するまでは直前の静止画を出し続ける（シーク直後や再生開始直後の VIDEO には描けるフレームがない）。描画側（`pano_three_view.js`）も、差し替え先の素材に絵が来るまで前のテクスチャを使い続ける。
- VIDEO が Timeline 以上の長さのときは、VIDEO 自身のループで繰り返す（長い分は Timeline の終わりで先頭へ戻す）（シークしないので映像も音声も途切れない）。Timeline が長いときは、終わりで先頭へシークしてから再生する。
- 各状態が付けたイベントリスナーと requestVideoFrameCallback・時計のコールバックは、その状態を離れるときに外す。

### Pose handoff の `port` の Sticker（ADR 0030）

`sticker_state` で届く `port` の Sticker は、実行結果の Pose handoff（`pano_sticker_handoff`）を当てた姿で、タイムラインの行と Lane にも出る（引き継いだ Lane には上流の Camera の軌道の Keyframe が並ぶ）。引き継いだ Lane の Keyframe を打つ・動かす・消す・Easing を変えると、その Lane は下流の上書き（`handoff_overrides`）になり、Lane 全体（上流から来ていた Keyframe を含む）を保存する。Clip range・目のアイコン・ロックの操作は上書きにならず、ふつうに保存する。上書きを外すのはインスペクタの「Revert to upstream」の Lane のボタン。ノードの規則は `docs/studio-node.md` の「`sticker_state` で届く `port` の Sticker」、エディタの表示と記録は `docs/threejs-spark-integration.md` の「`port` の Sticker の Pose handoff の表示と記録」。

### 上流の層の行（ADR 0030）

Panorama Studio の `scene` 入力に上流の Scene があるとき、タイムラインは自分の行の下に、上流の層ごとのまとまりを出す（最も上流の層から）。上流の要素の作業コピー（`editor/upstream.js`、自分の Timeline fps に再基準化したもの）を、自分の行と同じ規則で並べる。

- まとまりの先頭に見出しの行（`PanoTimelineGroup.vue`）があり、`Upstream · <層のキー>`（その層の Scene の id、`id` の無い層は `#<番号>`）と出す。上書きを持てない層（キーが `#` で始まる層）には ` · inherited only` を添える。
- 行は自分のものと同じ順：その層の Sticker（`sky` は手前から奥、次に `world`）、ペイント（「Paint」。ストロークなどを持つか、隠しているときだけ。目と名前だけ）、`scene`（「Scene」。その層が 3D の内容（`ui` の `pano_scene_files`）を持つか、Keyframe か既定でない Clip range を持つか、隠しているときだけ。目と Clip range だけで、行のポチと Lane の行は無い）。
- 行の id は `upstream:<層のキー>:<要素の id>`、ペイントは `upstream:<層のキー>:painting`、`scene` は `upstream:<層のキー>:scene`（`pano_upstream.js` の `upstreamRowId`）。フレームは自分の Timeline frame（作業コピーの値）。Sticker の id に `scene`・`painting` は使わない（エディタが振る id は常に `sticker_<番号>`。`docs/scene-state-v2.md` の `next_sticker_id`）ので、ペイントと `scene` の行の id は Sticker の行の id と重ならない。自分の行の `scene`・`painting` も同じ前提である。
- 操作は自分の行と同じ：Keyframe を打つ・動かす・消す・Easing を変える、行のポチ（全 Lane に Keyframe）、Clip range の移動と両端の切り詰め、目のアイコン、行の選択と開閉。どれも作業コピーを変え、Undo の段を積むとき（`pushHistory`）に `syncUpstreamEdits` が、変えたフィールドだけを自分の状態の `upstream` の記録に上書きとして書く（Lane は Keyframe ごと丸ごと、`clip`・`visible`、層の `scene` の `visible`・`clip`、`painting_visible`。`docs/studio-node.md` の「エディタでの編集」）。上流の層の状態そのものと自分の Sticker は変えない。操作ごとに Undo の 1 段になり、Undo・Redo で記録と作業コピーが戻る。開いて閉じただけ、行を開いた・選んだだけ、Clip range をクリックしただけでは何も書かない。
- ロックは自分の行と同じに効く：ロックした上流の要素（ロックの上書き、または上流でロックされたもの）の行は、Keyframe と Clip range を変えず、目のアイコンは効く。ロックの切り替えは、行ではなく選択メニューにある（インスペクタには無い）。
- 上書きを持てない層の行は、出るがロックと同じく何も変えない（目のアイコンと行のポチのボタンは無効にし、ツールチップに理由を出す）。選択と行の開閉はできる。
- `scene` の行は Clip range だけを変える。上流の `scene` の Lane は上書きできない（`docs/scene-state-v2.md`）ので、その Keyframe の印は動かせず、Easing も変えない。
- 上書きのある行（その層の記録が、その要素の上書き・`scene` の上書き・`painting_visible` を持つ行）は、名前の右に小さな点を出す（ツールチップは「Overridden in this node」）。点の場所は上流の行では常に空けておき、点が付いても行のボタンは動かない。
- 見出しの右に層の操作が二つある（T10）。どちらも常に出し、することが無いときと上書きを持てない層では無効にする（見出しの配置は動かない）。どちらも Undo の 1 段（`commands.js` の `revertUpstreamLayerCommand`・`restoreUpstreamDeletedCommand`、`timeline_actions.js` の `revert-upstream-layer`・`restore-upstream-deleted`。モデルで無効のボタンの操作は何もしない）。
  - 「Revert」：その層の記録から、層の `scene` の上書き（`visible`・`clip`）と `painting_visible` を外し、`scene` とペイントを上流の値に戻す（`pano_upstream.js` の `upstreamLayerRevertedRecords`）。要素の上書きと消した記録は残す。要素の上書きを外すのはインスペクタの「Revert to upstream」。
  - 「Restore deleted (n)」：その層の記録の `deleted` を空にし、下流で消した要素をもう一度出す。n は消した記録のうち、上書きを当てる前の層にまだある要素の数（`upstreamDeletedCount`。上流で消えた id は数えない）。消した要素は選べないので、層の操作として見出しに置く（インスペクタには置かない）。
- Delete キーは、Keyframe を選んでいればその Keyframe を消し（上の規則）、そうでなければ選んだ上流の要素を消す（`docs/threejs-spark-integration.md` の「上流の Scene の表示と編集」の「消す（T10）」）。
- 自分の `scene` の行は、上流の Scene があるときは出さない（自分の `scene` は描画に使われない）。
- タイムラインの範囲は、自分の行と同じく出力の長さちょうど（上の「タイムラインの長さ」）。Auto の長さには、上流の Scene の長さ（実行結果の `pano_upstream_frames`）と、上書きした Clip range の終わりが入る（`editor/upstream.js` の `upstreamOutput`、`pano_upstream.js` の `upstreamOverriddenEnds`）。上書きしたものは、記録が `clip` を持つもの、またはまだ書き戻していない編集で変えたもの（ドラッグ中を含む）で、`duration` の無いものは `port` の Sticker の素材の終わり（`portMediaFrames`）だけを数える。ドラッグ中の Clip range は `duration` の無いものとして数える。ノードの長さの規則（`docs/studio-node.md` の「長さ」）と同じで、上書きしていない上流の Clip range は上流の長さにすでに入っているので数えない。上流の行の Clip range と Keyframe のドラッグも、自分の行と同じ規則（上の「タイムラインの長さ」。Clip range の移動は始まりが出力の中にある限り終わりより先へ出てよく、トリムと Keyframe は終わりで止まり、どのドラッグでも出力は延びない）。

### 背景の行

Panorama Studio の自分の `bg_media` は、タイムラインの自分の行の先頭に「Background」の行（パノラマのアイコン）を持つ。行は状態の `background.clip`（`docs/scene-state-v2.md` の「背景の Clip range」）を Sticker の行と同じ Clip range のバーで表し、移動（`start` を動かし、`in` は保つ）と両端の切り詰め（頭は `start` と `in` を一緒に動かし、素材の位置は動かない。終わりは `duration`）ができる。操作は `timeline_actions.js` の `clip` で、Sticker と同じく操作ごとに Undo の 1 段になる。

- 行が出るのは、`bg_media` がつながっていて、上流の Scene の背景が代わりに使われていないとき（`timeline.js` の `backgroundShown`。`scene` の行が `scene` のリンクで出るのと同じく、リンクで決める）。つないでいないときは出さない。リンクはエディタの外で変わるので、編集の途中で行が出入りしてほかの行が動くことはない。
- 目のアイコンは無く（場所だけ空ける）、Keyframe も Lane も無い（行のポチは出さず、行を開くボタンは無効。`key-row` は何もしない）。背景を隠す手段は今は無い。
- `duration` の無い Clip range のバーは、VIDEO と IMAGE バッチでは素材の終わり（`bgMediaEnd`）で終わり、1 枚の IMAGE と素材がまだ分からないときはタイムラインの終わりまで描く。
- 出力の長さが Auto のときは、背景の素材そのもののフレーム数（VIDEO のフレーム数、IMAGE バッチの枚数）が長さになり、背景の Clip range によらない（上の「タイムラインの長さ」）。例えば 100 フレームの VIDEO を右へ 24 動かすと、出力は 100 フレームのまま、最初の 24 フレームは `bg_color`、続いて VIDEO の 0〜75 フレームが出て、VIDEO の最後の 24 フレームは出力の外になる。頭や終わりを切り詰めても長さは変わらず、切り詰めたところは `bg_color` になる。移動は始まりが出力の中にある限り終わりより先へ出てよく、終わりのトリムは出力の終わりで止まる（Sticker と同じ）。長さを変えるときは長さの欄に値を入れる（長さは VIDEO より長くできる）。
- 再生ヘッドのフレームから背景の時刻を求める規則は `port` の Sticker と同じ（素材の先頭は `start − in`）。背景の VIDEO の状態機械（`pano_video_playback.js`）は `place`（`pano_port_media.js` の `backgroundPlace`）でこの位置を知り、Clip range の前と後（`duration` の終わり・素材の終わり）は時計で進め、Clip range の始まりで VIDEO に渡す（時計の間に VIDEO を始まりの時刻へシークしておくので、渡すときにシークしない）。VIDEO 自身のループは、既定の Clip range のときだけ使う。停止したときの再生ヘッドは、止めた VIDEO の時刻のフレームに `start − in` を足したもの。Clip range の外では VIDEO をシークしない。
- Clip range の外と素材の外では、エディタもノード上の UI も、背景の代わりに `bg_color` を出す（`backgroundShownAt`、`bgColorBackground`。ノードの出力と同じ）。1 枚の IMAGE の背景も同じ（素材の終わりは無いので、Clip range の間ずっと出す）。既定の Clip range でも同じで、背景の VIDEO・IMAGE バッチが終わった先（長さの欄で VIDEO より長くしたとき）は `bg_color` を出す（以前は最後のフレームの静止画を出し続けていた）。上流の背景が既定の Clip range（`pano_upstream_bg_clip` が既定値）のときも、その素材の終わりから先は `bg_color`。旧ノードのエディタは変えない。
- Clip range を動かす・切り詰める・Undo・Redo で、再生ヘッドの位置の背景の時刻が変わると、VIDEO をその時刻へシークし直す。ドラッグ中のシークは 1 フレームに 1 回にまとめ（`createFrameBatch` の `background`）、ドラッグの終わりに Clip range が変わっていればもう 1 回シークする。状態機械のシークの目標は VIDEO の時刻で比べるので、シークの途中で Clip range が動いても古い時刻には止まらない。時計の間に始まりの時刻へ送ったシークがまだ終わっていないとき（`seeking`）は、もう一度送らずにその `seeked` を待つ。
- 行の id は `background`（`pano_editor_ui_state.js` の `BACKGROUND_ROW`）。エディタが振る Sticker の id は常に `sticker_<番号>`（`docs/scene-state-v2.md` の `next_sticker_id`）なので、Sticker の行の id と重ならない（`scene`・`painting` と同じ前提）。
- 可変フレームレートの背景 VIDEO の Clip range が既定値でないとき、`duration` の無い Clip range の終わり（バーの終わりと、`bg_color` に替わるフレーム）は、エディタがメタ情報の `duration`（フレーム数 ÷ 平均 fps）から、ノードが最後のフレームの時刻 + 平均 fps の 1 フレームから求めるので、±1 フレームずれうる（CFR では一致する。既定の Clip range では、どちらもフレーム数を使うので一致する）。
- 上流の Scene の背景には自分の Clip range は当たらない。上流の背景は、その背景を持つ Studio の Clip range（実行結果の `pano_upstream_bg_clip`、自分の Timeline fps に秒で直す。`backgroundClipAt`）で置き、`bg_color` もその Studio のもの（`pano_upstream_bg_color`）を出す。上流の背景の行は無い。
- ノード上の UI の再生（`pano_node_playback.js`）も同じ `place` と `backgroundShows` を使う。上流の背景は、実行結果の `pano_upstream_input_video_meta`（`upstreamMedia`）で素材の終わりを知り、その後は `bg_color` を出す（エディタ・出力と同じ）。

### `port` の Sticker の素材（#83）

`sticker` の VIDEO と 2 枚以上の IMAGE バッチは、実行結果の MP4（`pano_sticker_input_videos`、`docs/studio-node.md`）を、エディタとノード上の UI で再生ヘッドに合わせて表示する。状態機械は増やさず、背景の VIDEO の状態機械の再生ヘッドに、2 つ目の VIDEO（`pano_video_playback.js` の `createVideoFollower`）が描画のたびに従う。音は出さない（背景の音声だけ。ADR 0024）。

- 再生ヘッドのフレームから素材の時刻を求める規則は `pano_port_media.js` の `portMediaTime` で、`video` 出力（`sticker_media.py` の `PortMedia.index_at`）と同じ。素材の最初のフレームは Clip range の `start − in` にある。VIDEO は実時間で進み、その時刻の PTS ≤ t の最後のフレームを出す（PTS の丸めの許容差はメタ情報の `pts_tolerance`）。IMAGE バッチは Timeline fps の列で、最も近い 1 枚を出す（MP4 の中ではそのフレームの真ん中へシークする）。Clip range の外と、素材の外（素材の前・終わりの後）では描かない。
- 再生ヘッドが止まっている間（`idle`・`loading`・`seeking`）は、VIDEO を止めてそのフレームの時刻へシークし、着いたら静止画にする。シーク中の新しい時刻は、着いた時点で最新の時刻へ一度だけシークし直す。着くまでは前の静止画を出す。
- 再生ヘッドが進む間（`playingVideo`・`playingClock`。背景の VIDEO が読み込み中・シーク中の間は進まない）は VIDEO も再生し、表示されたフレームと再生ヘッドの時刻の差が 1.5 フレーム（1 フレームと、再生ヘッドの丸めの半フレーム）を超えたらその時刻へシークし直す（Timeline のループで先頭に戻ったときも同じ。MP4 の実際の終わりより先の時刻は、その終わりと見なしてシークしない）。VIDEO が最初のフレームを出す（`playing`）までは静止画を出す。背景の VIDEO がなくても（時計で進むときも）同じである。
- 停止したときは、止めた VIDEO の絵をすぐ静止画にしてから、再生ヘッドのフレームへシークして静止画を確かめる（背景と同じく、止めた瞬間に絵が飛ばない）。
- RGBA の IMAGE バッチは MP4 の代わりに PNG の列（`pano_sticker_input_frames`）で、同じ時刻から求めた 1 枚（`portImageIndex`）を出す。その 1 枚と先の 4 枚だけを読み込み、読めるまでは前の 1 枚を出す（`pano_port_media.js` の `createFrameSequence`）。
- 素材の静止画がまだないときは、最初のフレーム（`pano_sticker_input_images`）を出す。描画側は差し替え先に絵が来るまで前のテクスチャを使い続ける。MP4 が読めないときも最初のフレームを出す。
- MP4 は実行結果が新しい間だけ使い（`isNodeOutputMediaCurrent` の `external-sticker`）、reload 後はジョブ履歴から戻った実行結果で同じく使う。
- Clip range に長さのない `port` の Sticker の行のバーは、タイムラインの終わりではなく素材の終わり（`portMediaFrames`）で終わる（`buildTimelineModel` の `portBarEnd`。上流の層の `port` の Sticker も、その層の素材で同じ）。素材がまだ分からない（実行前）ときは、ほかの長さのない Clip range と同じくタイムラインの終わりまで描く。Auto の長さもこの素材の終わりを数える（下の「タイムラインの長さ」）。
