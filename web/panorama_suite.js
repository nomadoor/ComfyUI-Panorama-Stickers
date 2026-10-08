import * as Pa from "../../scripts/app.js";
import { app as dr } from "../../scripts/app.js";
import { api as mn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Rt = {}, so = [], xr = () => {
}, th = () => !1, Ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fl = (e) => e.startsWith("onUpdate:"), bn = Object.assign, Ku = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ay = Object.prototype.hasOwnProperty, xt = (e, t) => ay.call(e, t), it = Array.isArray, ao = (e) => Ts(e) === "[object Map]", nh = (e) => Ts(e) === "[object Set]", df = (e) => Ts(e) === "[object Date]", dt = (e) => typeof e == "function", Qt = (e) => typeof e == "string", Pr = (e) => typeof e == "symbol", Ft = (e) => e !== null && typeof e == "object", rh = (e) => (Ft(e) || dt(e)) && dt(e.then) && dt(e.catch), ih = Object.prototype.toString, Ts = (e) => ih.call(e), ly = (e) => Ts(e).slice(8, -1), oh = (e) => Ts(e) === "[object Object]", Wu = (e) => Qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ts = /* @__PURE__ */ Gu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, cy = /-\w/g, Nn = Tl(
  (e) => e.replace(cy, (t) => t.slice(1).toUpperCase())
), uy = /\B([A-Z])/g, $i = Tl(
  (e) => e.replace(uy, "-$1").toLowerCase()
), Dl = Tl((e) => e.charAt(0).toUpperCase() + e.slice(1)), sc = Tl(
  (e) => e ? `on${Dl(e)}` : ""
), wr = (e, t) => !Object.is(e, t), Aa = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, sh = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Uu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ff;
const Rl = () => ff || (ff = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Qt(n) ? hy(n) : Et(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Qt(e) || Ft(e))
    return e;
}
const dy = /;(?![^(]*\))/g, fy = /:([^]+)/, py = /\/\*[^]*?\*\//g;
function hy(e) {
  const t = {};
  return e.replace(py, "").split(dy).forEach((r) => {
    if (r) {
      const n = r.split(fy);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Qt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = mt(e[r]);
      n && (t += n + " ");
    }
  else if (Ft(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const my = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gy = /* @__PURE__ */ Gu(my);
function ah(e) {
  return !!e || e === "";
}
function yy(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Bu(e[n], t[n]);
  return r;
}
function Bu(e, t) {
  if (e === t) return !0;
  let r = df(e), n = df(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Pr(e), n = Pr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? yy(e, t) : !1;
  if (r = Ft(e), n = Ft(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Bu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const lh = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Qt(e) ? e : e == null ? "" : it(e) || Ft(e) && (e.toString === ih || !dt(e.toString)) ? lh(e) ? tt(e.value) : JSON.stringify(e, ch, 2) : String(e), ch = (e, t) => lh(t) ? ch(e, t.value) : ao(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ac(n, o) + " =>"] = i, r),
    {}
  )
} : nh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ac(r))
} : Pr(t) ? ac(t) : Ft(t) && !it(t) && !oh(t) ? String(t) : t, ac = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fn;
class by {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Fn, !t && Fn && (this.index = (Fn.scopes || (Fn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Fn;
      try {
        return Fn = this, t();
      } finally {
        Fn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Fn, Fn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Fn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function vy() {
  return Fn;
}
let $t;
const lc = /* @__PURE__ */ new WeakSet();
class uh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fn && Fn.active && Fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, lc.has(this) && (lc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, pf(this), ph(this);
    const t = $t, r = fr;
    $t = this, fr = !0;
    try {
      return this.fn();
    } finally {
      hh(this), $t = t, fr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Xu(t);
      this.deps = this.depsTail = void 0, pf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? lc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qc(this) && this.run();
  }
  get dirty() {
    return qc(this);
  }
}
let dh = 0, ns, rs;
function fh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rs, rs = e;
    return;
  }
  e.next = ns, ns = e;
}
function Yu() {
  dh++;
}
function qu() {
  if (--dh > 0)
    return;
  if (rs) {
    let t = rs;
    for (rs = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; ns; ) {
    let t = ns;
    for (ns = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function ph(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function hh(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Xu(n), Sy(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function qc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (mh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function mh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ms) || (e.globalVersion = ms, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = $t, n = fr;
  $t = e, fr = !0;
  try {
    ph(e);
    const i = e.fn(e._value);
    (t.version === 0 || wr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    $t = r, fr = n, hh(e), e.flags &= -3;
  }
}
function Xu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Xu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Sy(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let fr = !0;
const gh = [];
function Hr() {
  gh.push(fr), fr = !1;
}
function Gr() {
  const e = gh.pop();
  fr = e === void 0 ? !0 : e;
}
function pf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = $t;
    $t = void 0;
    try {
      t();
    } finally {
      $t = r;
    }
  }
}
let ms = 0;
class _y {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ju {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$t || !fr || $t === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== $t)
      r = this.activeLink = new _y($t, this), $t.deps ? (r.prevDep = $t.depsTail, $t.depsTail.nextDep = r, $t.depsTail = r) : $t.deps = $t.depsTail = r, yh(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = $t.depsTail, r.nextDep = void 0, $t.depsTail.nextDep = r, $t.depsTail = r, $t.deps === r && ($t.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, ms++, this.notify(t);
  }
  notify(t) {
    Yu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      qu();
    }
  }
}
function yh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        yh(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Xc = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ Symbol(
  ""
), Jc = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
);
function pn(e, t, r) {
  if (fr && $t) {
    let n = Xc.get(e);
    n || Xc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Ju()), i.map = n, i.key = r), i.track();
  }
}
function Rr(e, t, r, n, i, o) {
  const s = Xc.get(e);
  if (!s) {
    ms++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Yu(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && Wu(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === gs || !Pr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(gs)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Ci)), ao(e) && a(s.get(Jc)));
          break;
        case "delete":
          l || (a(s.get(Ci)), ao(e) && a(s.get(Jc)));
          break;
        case "set":
          ao(e) && a(s.get(Ci));
          break;
      }
  }
  qu();
}
function Yi(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (pn(t, "iterate", gs), /* @__PURE__ */ Zn(e) ? t : t.map(hr));
}
function Ll(e) {
  return pn(e = /* @__PURE__ */ kt(e), "iterate", gs), e;
}
function vr(e, t) {
  return /* @__PURE__ */ Kr(e) ? go(/* @__PURE__ */ Ii(e) ? hr(t) : t) : hr(t);
}
const wy = {
  __proto__: null,
  [Symbol.iterator]() {
    return cc(this, Symbol.iterator, (e) => vr(this, e));
  },
  concat(...e) {
    return Yi(this).concat(
      ...e.map((t) => it(t) ? Yi(t) : t)
    );
  },
  entries() {
    return cc(this, "entries", (e) => (e[1] = vr(this, e[1]), e));
  },
  every(e, t) {
    return Ir(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ir(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => vr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ir(
      this,
      "find",
      e,
      t,
      (r) => vr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Ir(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ir(
      this,
      "findLast",
      e,
      t,
      (r) => vr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ir(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ir(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return uc(this, "includes", e);
  },
  indexOf(...e) {
    return uc(this, "indexOf", e);
  },
  join(e) {
    return Yi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return uc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ir(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ro(this, "pop");
  },
  push(...e) {
    return Ro(this, "push", e);
  },
  reduce(e, ...t) {
    return hf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return hf(this, "reduceRight", e, t);
  },
  shift() {
    return Ro(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ir(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ro(this, "splice", e);
  },
  toReversed() {
    return Yi(this).toReversed();
  },
  toSorted(e) {
    return Yi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Yi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ro(this, "unshift", e);
  },
  values() {
    return cc(this, "values", (e) => vr(this, e));
  }
};
function cc(e, t, r) {
  const n = Ll(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Zn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const ky = Array.prototype;
function Ir(e, t, r, n, i, o) {
  const s = Ll(e), a = s !== e && !/* @__PURE__ */ Zn(e), l = s[t];
  if (l !== ky[t]) {
    const u = l.apply(e, o);
    return a ? hr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, vr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function hf(e, t, r, n) {
  const i = Ll(e), o = i !== e && !/* @__PURE__ */ Zn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = vr(e, c)), r.call(this, c, vr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? vr(e, l) : l;
}
function uc(e, t, r) {
  const n = /* @__PURE__ */ kt(e);
  pn(n, "iterate", gs);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ ed(r[0]) ? (r[0] = /* @__PURE__ */ kt(r[0]), n[t](...r)) : i;
}
function Ro(e, t, r = []) {
  Hr(), Yu();
  const n = (/* @__PURE__ */ kt(e))[t].apply(e, r);
  return qu(), Gr(), n;
}
const xy = /* @__PURE__ */ Gu("__proto__,__v_isRef,__isVue"), bh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pr)
);
function My(e) {
  Pr(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return pn(t, "has", e), t.hasOwnProperty(e);
}
class vh {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (i ? o ? Dy : kh : o ? wh : _h).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = wy[r]))
        return l;
      if (r === "hasOwnProperty")
        return My;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ yn(t) ? t : n
    );
    if ((Pr(r) ? bh.has(r) : xy(r)) || (i || pn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ yn(a)) {
      const l = s && Wu(r) ? a : a.value;
      return i && Ft(l) ? /* @__PURE__ */ Qc(l) : l;
    }
    return Ft(a) ? i ? /* @__PURE__ */ Qc(a) : /* @__PURE__ */ ko(a) : a;
  }
}
class Sh extends vh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && Wu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Kr(o);
      if (!/* @__PURE__ */ Zn(n) && !/* @__PURE__ */ Kr(n) && (o = /* @__PURE__ */ kt(o), n = /* @__PURE__ */ kt(n)), !s && /* @__PURE__ */ yn(o) && !/* @__PURE__ */ yn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : xt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ yn(t) ? t : i
    );
    return t === /* @__PURE__ */ kt(i) && (a ? wr(n, o) && Rr(t, "set", r, n) : Rr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = xt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Rr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Pr(r) || !bh.has(r)) && pn(t, "has", r), n;
  }
  ownKeys(t) {
    return pn(
      t,
      "iterate",
      it(t) ? "length" : Ci
    ), Reflect.ownKeys(t);
  }
}
class Ny extends vh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Py = /* @__PURE__ */ new Sh(), Ay = /* @__PURE__ */ new Ny(), Cy = /* @__PURE__ */ new Sh(!0);
const Zc = (e) => e, ua = (e) => Reflect.getPrototypeOf(e);
function Iy(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), s = ao(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Zc : t ? go : hr;
    return !t && pn(
      o,
      "iterate",
      l ? Jc : Ci
    ), bn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : {
            value: a ? [d(u[0]), d(u[1])] : d(u),
            done: f
          };
        }
      }
    );
  };
}
function da(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ey(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      e || (wr(i, a) && pn(s, "get", i), pn(s, "get", a));
      const { has: l } = ua(s), c = t ? Zc : e ? go : hr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && pn(/* @__PURE__ */ kt(i), "iterate", Ci), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      return e || (wr(i, a) && pn(s, "has", i), pn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ kt(a), c = t ? Zc : e ? go : hr;
      return !e && pn(l, "iterate", Ci), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return bn(
    r,
    e ? {
      add: da("add"),
      set: da("set"),
      delete: da("delete"),
      clear: da("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), s = ua(o), a = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ Zn(i) && !/* @__PURE__ */ Kr(i) ? a : i;
        return s.has.call(o, l) || wr(i, l) && s.has.call(o, i) || wr(a, l) && s.has.call(o, a) || (o.add(l), Rr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Zn(o) && !/* @__PURE__ */ Kr(o) && (o = /* @__PURE__ */ kt(o));
        const s = /* @__PURE__ */ kt(this), { has: a, get: l } = ua(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ kt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? wr(o, d) && Rr(s, "set", i, o) : Rr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: s, get: a } = ua(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ kt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Rr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ kt(this), o = i.size !== 0, s = i.clear();
        return o && Rr(
          i,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = Iy(i, e, t);
  }), r;
}
function Zu(e, t) {
  const r = Ey(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    xt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const Oy = {
  get: /* @__PURE__ */ Zu(!1, !1)
}, Fy = {
  get: /* @__PURE__ */ Zu(!1, !0)
}, Ty = {
  get: /* @__PURE__ */ Zu(!0, !1)
};
const _h = /* @__PURE__ */ new WeakMap(), wh = /* @__PURE__ */ new WeakMap(), kh = /* @__PURE__ */ new WeakMap(), Dy = /* @__PURE__ */ new WeakMap();
function Ry(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ly(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ry(ly(e));
}
// @__NO_SIDE_EFFECTS__
function ko(e) {
  return /* @__PURE__ */ Kr(e) ? e : Qu(
    e,
    !1,
    Py,
    Oy,
    _h
  );
}
// @__NO_SIDE_EFFECTS__
function Vy(e) {
  return Qu(
    e,
    !1,
    Cy,
    Fy,
    wh
  );
}
// @__NO_SIDE_EFFECTS__
function Qc(e) {
  return Qu(
    e,
    !0,
    Ay,
    Ty,
    kh
  );
}
function Qu(e, t, r, n, i) {
  if (!Ft(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Ly(e);
  if (o === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const a = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Ii(e) {
  return /* @__PURE__ */ Kr(e) ? /* @__PURE__ */ Ii(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ed(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function $y(e) {
  return !xt(e, "__v_skip") && Object.isExtensible(e) && sh(e, "__v_skip", !0), e;
}
const hr = (e) => Ft(e) ? /* @__PURE__ */ ko(e) : e, go = (e) => Ft(e) ? /* @__PURE__ */ Qc(e) : e;
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return xh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  return xh(e, !0);
}
function xh(e, t) {
  return /* @__PURE__ */ yn(e) ? e : new zy(e, t);
}
class zy {
  constructor(t, r) {
    this.dep = new Ju(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ kt(t), this._value = r ? t : hr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Zn(t) || /* @__PURE__ */ Kr(t);
    t = n ? t : /* @__PURE__ */ kt(t), wr(t, r) && (this._rawValue = t, this._value = n ? t : hr(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ yn(e) ? e.value : e;
}
const jy = {
  get: (e, t, r) => t === "__v_raw" ? e : rt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ yn(i) && !/* @__PURE__ */ yn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Mh(e) {
  return /* @__PURE__ */ Ii(e) ? e : new Proxy(e, jy);
}
class Hy {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Ju(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ms - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $t !== this)
      return fh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return mh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Gy(e, t, r = !1) {
  let n, i;
  return dt(e) ? n = e : (n = e.get, i = e.set), new Hy(n, i, r);
}
const fa = {}, qa = /* @__PURE__ */ new WeakMap();
let Mi;
function Ky(e, t = !1, r = Mi) {
  if (r) {
    let n = qa.get(r);
    n || qa.set(r, n = []), n.push(e);
  }
}
function Wy(e, t, r = Rt) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (te) => i ? te : /* @__PURE__ */ Zn(te) || i === !1 || i === 0 ? Lr(te, 1) : Lr(te);
  let d, u, f, p, v = !1, g = !1;
  if (/* @__PURE__ */ yn(e) ? (u = () => e.value, v = /* @__PURE__ */ Zn(e)) : /* @__PURE__ */ Ii(e) ? (u = () => c(e), v = !0) : it(e) ? (g = !0, v = e.some((te) => /* @__PURE__ */ Ii(te) || /* @__PURE__ */ Zn(te)), u = () => e.map((te) => {
    if (/* @__PURE__ */ yn(te))
      return te.value;
    if (/* @__PURE__ */ Ii(te))
      return c(te);
    if (dt(te))
      return l ? l(te, 2) : te();
  })) : dt(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Hr();
      try {
        f();
      } finally {
        Gr();
      }
    }
    const te = Mi;
    Mi = d;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      Mi = te;
    }
  } : u = xr, t && i) {
    const te = u, C = i === !0 ? 1 / 0 : i;
    u = () => Lr(te(), C);
  }
  const h = vy(), y = () => {
    d.stop(), h && h.active && Ku(h.effects, d);
  };
  if (o && t) {
    const te = t;
    t = (...C) => {
      te(...C), y();
    };
  }
  let W = g ? new Array(e.length).fill(fa) : fa;
  const H = (te) => {
    if (!(!(d.flags & 1) || !d.dirty && !te))
      if (t) {
        const C = d.run();
        if (i || v || (g ? C.some((B, R) => wr(B, W[R])) : wr(C, W))) {
          f && f();
          const B = Mi;
          Mi = d;
          try {
            const R = [
              C,
              // pass undefined as the old value when it's changed for the first time
              W === fa ? void 0 : g && W[0] === fa ? [] : W,
              p
            ];
            W = C, l ? l(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            );
          } finally {
            Mi = B;
          }
        }
      } else
        d.run();
  };
  return a && a(H), d = new uh(u), d.scheduler = s ? () => s(H, !1) : H, p = (te) => Ky(te, !1, d), f = d.onStop = () => {
    const te = qa.get(d);
    if (te) {
      if (l)
        l(te, 4);
      else
        for (const C of te) C();
      qa.delete(d);
    }
  }, t ? n ? H(!0) : W = d.run() : s ? s(H.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function Lr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ft(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ yn(e))
    Lr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Lr(e[n], t, r);
  else if (nh(e) || ao(e))
    e.forEach((n) => {
      Lr(n, t, r);
    });
  else if (oh(e)) {
    for (const n in e)
      Lr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Lr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ds(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Vl(i, t, r);
  }
}
function Ar(e, t, r, n) {
  if (dt(e)) {
    const i = Ds(e, t, r, n);
    return i && rh(i) && i.catch((o) => {
      Vl(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ar(e[o], t, r, n));
    return i;
  }
}
function Vl(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Rt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Hr(), Ds(o, null, 10, [
        e,
        l,
        c
      ]), Gr();
      return;
    }
  }
  Uy(e, r, i, n, s);
}
function Uy(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const kn = [];
let br = -1;
const lo = [];
let ti = null, Ji = 0;
const Nh = /* @__PURE__ */ Promise.resolve();
let Xa = null;
function $l(e) {
  const t = Xa || Nh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function By(e) {
  let t = br + 1, r = kn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = kn[n], o = ys(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function td(e) {
  if (!(e.flags & 1)) {
    const t = ys(e), r = kn[kn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ys(r) ? kn.push(e) : kn.splice(By(t), 0, e), e.flags |= 1, Ph();
  }
}
function Ph() {
  Xa || (Xa = Nh.then(Ch));
}
function Yy(e) {
  it(e) ? lo.push(...e) : ti && e.id === -1 ? ti.splice(Ji + 1, 0, e) : e.flags & 1 || (lo.push(e), e.flags |= 1), Ph();
}
function mf(e, t, r = br + 1) {
  for (; r < kn.length; r++) {
    const n = kn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      kn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ah(e) {
  if (lo.length) {
    const t = [...new Set(lo)].sort(
      (r, n) => ys(r) - ys(n)
    );
    if (lo.length = 0, ti) {
      ti.push(...t);
      return;
    }
    for (ti = t, Ji = 0; Ji < ti.length; Ji++) {
      const r = ti[Ji];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ti = null, Ji = 0;
  }
}
const ys = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ch(e) {
  try {
    for (br = 0; br < kn.length; br++) {
      const t = kn[br];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ds(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; br < kn.length; br++) {
      const t = kn[br];
      t && (t.flags &= -2);
    }
    br = -1, kn.length = 0, Ah(), Xa = null, (kn.length || lo.length) && Ch();
  }
}
let Gn = null, Ih = null;
function Ja(e) {
  const t = Gn;
  return Gn = e, Ih = e && e.type.__scopeId || null, t;
}
function Eh(e, t = Gn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Pf(-1);
    const o = Ja(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ja(o), n._d && Pf(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function jr(e, t) {
  if (Gn === null)
    return e;
  const r = Kl(Gn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Rt] = t[i];
    o && (dt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Lr(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function vi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (Hr(), Ar(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Gr());
  }
}
function qy(e, t) {
  if (hn) {
    let r = hn.provides;
    const n = hn.parent && hn.parent.provides;
    n === r && (r = hn.provides = Object.create(n)), r[e] = t;
  }
}
function Ca(e, t, r = !1) {
  const n = Bb();
  if (n || co) {
    let i = co ? co._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && dt(t) ? t.call(n && n.proxy) : t;
  }
}
const Xy = /* @__PURE__ */ Symbol.for("v-scx"), Jy = () => Ca(Xy);
function Ei(e, t, r) {
  return Oh(e, t, r);
}
function Oh(e, t, r = Rt) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = bn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (vs) {
    if (o === "sync") {
      const p = Jy();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = xr, p.resume = xr, p.pause = xr, p;
    }
  }
  const d = hn;
  a.call = (p, v, g) => Ar(p, d, v, g);
  let u = !1;
  o === "post" ? a.scheduler = (p) => {
    On(p, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (p, v) => {
    v ? p() : td(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const f = Wy(e, t, a);
  return vs && (c ? c.push(f) : l && f()), f;
}
function Zy(e, t, r) {
  const n = this.proxy, i = Qt(e) ? e.includes(".") ? Fh(n, e) : () => n[e] : e.bind(n, n);
  let o;
  dt(t) ? o = t : (o = t.handler, r = t);
  const s = Ls(this), a = Oh(i, o.bind(n), r);
  return s(), a;
}
function Fh(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Qy = /* @__PURE__ */ Symbol("_vte"), eb = (e) => e.__isTeleport, tb = /* @__PURE__ */ Symbol("_leaveCb");
function nd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, nd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Th(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gf(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Za = /* @__PURE__ */ new WeakMap();
function is(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (g, h) => is(
        g,
        t && (it(t) ? t[h] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (os(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && is(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Kl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Rt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ kt(u), p = u === Rt ? th : (g) => gf(d, g) ? !1 : xt(f, g), v = (g, h) => !(h && gf(d, h));
  if (c != null && c !== l) {
    if (yf(t), Qt(c))
      d[c] = null, p(c) && (u[c] = null);
    else if (/* @__PURE__ */ yn(c)) {
      const g = t;
      v(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (dt(l))
    Ds(l, a, 12, [s, d]);
  else {
    const g = Qt(l), h = /* @__PURE__ */ yn(l);
    if (g || h) {
      const y = () => {
        if (e.f) {
          const W = g ? p(l) ? u[l] : d[l] : v() || !e.k ? l.value : d[e.k];
          if (i)
            it(W) && Ku(W, o);
          else if (it(W))
            W.includes(o) || W.push(o);
          else if (g)
            d[l] = [o], p(l) && (u[l] = d[l]);
          else {
            const H = [o];
            v(l, e.k) && (l.value = H), e.k && (d[e.k] = H);
          }
        } else g ? (d[l] = s, p(l) && (u[l] = s)) : h && (v(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const W = () => {
          y(), Za.delete(e);
        };
        W.id = -1, Za.set(e, W), On(W, r);
      } else
        yf(e), y();
    }
  }
}
function yf(e) {
  const t = Za.get(e);
  t && (t.flags |= 8, Za.delete(e));
}
Rl().requestIdleCallback;
Rl().cancelIdleCallback;
const os = (e) => !!e.type.__asyncLoader, Dh = (e) => e.type.__isKeepAlive;
function nb(e, t) {
  Rh(e, "a", t);
}
function rb(e, t) {
  Rh(e, "da", t);
}
function Rh(e, t, r = hn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (zl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Dh(i.parent.vnode) && ib(n, t, r, i), i = i.parent;
  }
}
function ib(e, t, r, n) {
  const i = zl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Lh(() => {
    Ku(n[t], i);
  }, r);
}
function zl(e, t, r = hn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Hr();
      const a = Ls(r), l = Ar(t, r, e, s);
      return a(), Gr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Br = (e) => (t, r = hn) => {
  (!vs || e === "sp") && zl(e, (...n) => t(...n), r);
}, ob = Br("bm"), jl = Br("m"), sb = Br(
  "bu"
), ab = Br("u"), Rs = Br(
  "bum"
), Lh = Br("um"), lb = Br(
  "sp"
), cb = Br("rtg"), ub = Br("rtc");
function db(e, t = hn) {
  zl("ec", e, t);
}
const fb = "components", Vh = /* @__PURE__ */ Symbol.for("v-ndc");
function pb(e) {
  return Qt(e) ? hb(fb, e, !1) || e : e || Vh;
}
function hb(e, t, r = !0, n = !1) {
  const i = Gn || hn;
  if (i) {
    const o = i.type;
    {
      const a = Zb(
        o,
        !1
      );
      if (a && (a === t || a === Nn(t) || a === Dl(Nn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      bf(i[e] || o[e], t) || // global registration
      bf(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function bf(e, t) {
  return e && (e[t] || e[Nn(t)] || e[Dl(Nn(t))]);
}
function Nt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Qt(e)) {
    const a = s && /* @__PURE__ */ Ii(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Zn(e), c = /* @__PURE__ */ Kr(e), e = Ll(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? go(hr(e[d])) : hr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Ft(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const d = a[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const eu = (e) => e ? om(e) ? Kl(e) : eu(e.parent) : null, ss = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ bn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => eu(e.parent),
    $root: (e) => eu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      td(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = $l.bind(e.proxy)),
    $watch: (e) => Zy.bind(e)
  })
), dc = (e, t) => e !== Rt && !e.__isScriptSetup && xt(e, t), mb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const f = s[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (dc(n, t))
          return s[t] = 1, n[t];
        if (i !== Rt && xt(i, t))
          return s[t] = 2, i[t];
        if (xt(o, t))
          return s[t] = 3, o[t];
        if (r !== Rt && xt(r, t))
          return s[t] = 4, r[t];
        tu && (s[t] = 0);
      }
    }
    const c = ss[t];
    let d, u;
    if (c)
      return t === "$attrs" && pn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Rt && xt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, xt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return dc(i, t) ? (i[t] = r, !0) : n !== Rt && xt(n, t) ? (n[t] = r, !0) : xt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Rt && a[0] !== "$" && xt(e, a) || dc(t, a) || xt(o, a) || xt(n, a) || xt(ss, a) || xt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : xt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function vf(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let tu = !0;
function gb(e) {
  const t = zh(e), r = e.proxy, n = e.ctx;
  tu = !1, t.beforeCreate && Sf(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: p,
    updated: v,
    activated: g,
    deactivated: h,
    beforeDestroy: y,
    beforeUnmount: W,
    destroyed: H,
    unmounted: te,
    render: C,
    renderTracked: B,
    renderTriggered: R,
    errorCaptured: J,
    serverPrefetch: _e,
    // public API
    expose: ke,
    inheritAttrs: ge,
    // assets
    components: Se,
    directives: pe,
    filters: fe
  } = t;
  if (c && yb(c, n, null), s)
    for (const ye in s) {
      const ce = s[ye];
      dt(ce) && (n[ye] = ce.bind(r));
    }
  if (i) {
    const ye = i.call(r, r);
    Ft(ye) && (e.data = /* @__PURE__ */ ko(ye));
  }
  if (tu = !0, o)
    for (const ye in o) {
      const ce = o[ye], Z = dt(ce) ? ce.bind(r, r) : dt(ce.get) ? ce.get.bind(r, r) : xr, U = !dt(ce) && dt(ce.set) ? ce.set.bind(r) : xr, P = ut({
        get: Z,
        set: U
      });
      Object.defineProperty(n, ye, {
        enumerable: !0,
        configurable: !0,
        get: () => P.value,
        set: (he) => P.value = he
      });
    }
  if (a)
    for (const ye in a)
      $h(a[ye], n, r, ye);
  if (l) {
    const ye = dt(l) ? l.call(r) : l;
    Reflect.ownKeys(ye).forEach((ce) => {
      qy(ce, ye[ce]);
    });
  }
  d && Sf(d, e, "c");
  function re(ye, ce) {
    it(ce) ? ce.forEach((Z) => ye(Z.bind(r))) : ce && ye(ce.bind(r));
  }
  if (re(ob, u), re(jl, f), re(sb, p), re(ab, v), re(nb, g), re(rb, h), re(db, J), re(ub, B), re(cb, R), re(Rs, W), re(Lh, te), re(lb, _e), it(ke))
    if (ke.length) {
      const ye = e.exposed || (e.exposed = {});
      ke.forEach((ce) => {
        Object.defineProperty(ye, ce, {
          get: () => r[ce],
          set: (Z) => r[ce] = Z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === xr && (e.render = C), ge != null && (e.inheritAttrs = ge), Se && (e.components = Se), pe && (e.directives = pe), _e && Th(e);
}
function yb(e, t, r = xr) {
  it(e) && (e = nu(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Ft(i) ? "default" in i ? o = Ca(
      i.from || n,
      i.default,
      !0
    ) : o = Ca(i.from || n) : o = Ca(i), /* @__PURE__ */ yn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function Sf(e, t, r) {
  Ar(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function $h(e, t, r, n) {
  let i = n.includes(".") ? Fh(r, n) : () => r[n];
  if (Qt(e)) {
    const o = t[e];
    dt(o) && Ei(i, o);
  } else if (dt(e))
    Ei(i, e.bind(r));
  else if (Ft(e))
    if (it(e))
      e.forEach((o) => $h(o, t, r, n));
    else {
      const o = dt(e.handler) ? e.handler.bind(r) : t[e.handler];
      dt(o) && Ei(i, o, e);
    }
}
function zh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Qa(l, c, s, !0)
  ), Qa(l, t, s)), Ft(t) && o.set(t, l), l;
}
function Qa(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Qa(e, o, r, !0), i && i.forEach(
    (s) => Qa(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = bb[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const bb = {
  data: _f,
  props: wf,
  emits: wf,
  // objects
  methods: Wo,
  computed: Wo,
  // lifecycle
  beforeCreate: _n,
  created: _n,
  beforeMount: _n,
  mounted: _n,
  beforeUpdate: _n,
  updated: _n,
  beforeDestroy: _n,
  beforeUnmount: _n,
  destroyed: _n,
  unmounted: _n,
  activated: _n,
  deactivated: _n,
  errorCaptured: _n,
  serverPrefetch: _n,
  // assets
  components: Wo,
  directives: Wo,
  // watch
  watch: Sb,
  // provide / inject
  provide: _f,
  inject: vb
};
function _f(e, t) {
  return t ? e ? function() {
    return bn(
      dt(e) ? e.call(this, this) : e,
      dt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vb(e, t) {
  return Wo(nu(e), nu(t));
}
function nu(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function _n(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wo(e, t) {
  return e ? bn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wf(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : bn(
    /* @__PURE__ */ Object.create(null),
    vf(e),
    vf(t ?? {})
  ) : t;
}
function Sb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = bn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = _n(e[n], t[n]);
  return r;
}
function jh() {
  return {
    app: null,
    config: {
      isNativeTag: th,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let _b = 0;
function wb(e, t) {
  return function(n, i = null) {
    dt(n) || (n = bn({}, n)), i != null && !Ft(i) && (i = null);
    const o = jh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: _b++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: ev,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && dt(d.install) ? (s.add(d), d.install(c, ...u)) : dt(d) && (s.add(d), d(c, ...u))), c;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, u) {
        return u ? (o.components[d] = u, c) : o.components[d];
      },
      directive(d, u) {
        return u ? (o.directives[d] = u, c) : o.directives[d];
      },
      mount(d, u, f) {
        if (!l) {
          const p = c._ceVNode || Ye(n, i);
          return p.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, d, f), l = !0, c._container = d, d.__vue_app__ = c, Kl(p.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (Ar(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = co;
        co = c;
        try {
          return d();
        } finally {
          co = u;
        }
      }
    };
    return c;
  };
}
let co = null;
const kb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nn(t)}Modifiers`] || e[`${$i(t)}Modifiers`];
function xb(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Rt;
  let i = r;
  const o = t.startsWith("update:"), s = o && kb(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Qt(d) ? d.trim() : d)), s.number && (i = r.map(Uu)));
  let a, l = n[a = sc(t)] || // also try camelCase event handler (#2249)
  n[a = sc(Nn(t))];
  !l && o && (l = n[a = sc($i(t))]), l && Ar(
    l,
    e,
    6,
    i
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ar(
      c,
      e,
      6,
      i
    );
  }
}
const Mb = /* @__PURE__ */ new WeakMap();
function Hh(e, t, r = !1) {
  const n = r ? Mb : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!dt(e)) {
    const l = (c) => {
      const d = Hh(c, t, !0);
      d && (a = !0, bn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ft(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : bn(s, o), Ft(e) && n.set(e, s), s);
}
function Hl(e, t) {
  return !e || !Ol(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xt(e, t[0].toLowerCase() + t.slice(1)) || xt(e, $i(t)) || xt(e, t));
}
function kf(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: l,
    render: c,
    renderCache: d,
    props: u,
    data: f,
    setupState: p,
    ctx: v,
    inheritAttrs: g
  } = e, h = Ja(e);
  let y, W;
  try {
    if (r.shapeFlag & 4) {
      const te = i || n, C = te;
      y = Sr(
        c.call(
          C,
          te,
          d,
          u,
          p,
          f,
          v
        )
      ), W = a;
    } else {
      const te = t;
      y = Sr(
        te.length > 1 ? te(
          u,
          { attrs: a, slots: s, emit: l }
        ) : te(
          u,
          null
        )
      ), W = t.props ? a : Nb(a);
    }
  } catch (te) {
    as.length = 0, Vl(te, e, 1), y = Ye(si);
  }
  let H = y;
  if (W && g !== !1) {
    const te = Object.keys(W), { shapeFlag: C } = H;
    te.length && C & 7 && (o && te.some(Fl) && (W = Pb(
      W,
      o
    )), H = yo(H, W, !1, !0));
  }
  return r.dirs && (H = yo(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(r.dirs) : r.dirs), r.transition && nd(H, r.transition), y = H, Ja(h), y;
}
const Nb = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Ol(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Pb = (e, t) => {
  const r = {};
  for (const n in e)
    (!Fl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Ab(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? xf(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Gh(s, n, f) && !Hl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? xf(n, s, c) : !0 : !!s;
  return !1;
}
function xf(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Gh(t, e, o) && !Hl(r, o))
      return !0;
  }
  return !1;
}
function Gh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ft(n) && Ft(i) ? !Bu(n, i) : n !== i;
}
function Cb({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Kh = {}, Wh = () => Object.create(Kh), Uh = (e) => Object.getPrototypeOf(e) === Kh;
function Ib(e, t, r, n = !1) {
  const i = {}, o = Wh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Bh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ Vy(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Eb(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ kt(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (Hl(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (l)
          if (xt(o, f))
            p !== o[f] && (o[f] = p, c = !0);
          else {
            const v = Nn(f);
            i[v] = ru(
              l,
              a,
              v,
              p,
              e,
              !1
            );
          }
        else
          p !== o[f] && (o[f] = p, c = !0);
      }
    }
  } else {
    Bh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !xt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = $i(u)) === u || !xt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = ru(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !xt(t, u)) && (delete o[u], c = !0);
  }
  c && Rr(e.attrs, "set", "");
}
function Bh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (ts(l))
        continue;
      const c = t[l];
      let d;
      i && xt(i, d = Nn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Hl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(r), c = a || Rt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = ru(
        i,
        l,
        u,
        c[u],
        e,
        !xt(c, u)
      );
    }
  }
  return s;
}
function ru(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = xt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && dt(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = Ls(i);
          n = c[r] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === $i(r)) && (n = !0));
  }
  return n;
}
const Ob = /* @__PURE__ */ new WeakMap();
function Yh(e, t, r = !1) {
  const n = r ? Ob : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!dt(e)) {
    const d = (u) => {
      l = !0;
      const [f, p] = Yh(u, t, !0);
      bn(s, f), p && a.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ft(e) && n.set(e, so), so;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = Nn(o[d]);
      Mf(u) && (s[u] = Rt);
    }
  else if (o)
    for (const d in o) {
      const u = Nn(d);
      if (Mf(u)) {
        const f = o[d], p = s[u] = it(f) || dt(f) ? { type: f } : bn({}, f), v = p.type;
        let g = !1, h = !0;
        if (it(v))
          for (let y = 0; y < v.length; ++y) {
            const W = v[y], H = dt(W) && W.name;
            if (H === "Boolean") {
              g = !0;
              break;
            } else H === "String" && (h = !1);
          }
        else
          g = dt(v) && v.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = g, p[
          1
          /* shouldCastTrue */
        ] = h, (g || xt(p, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ft(e) && n.set(e, c), c;
}
function Mf(e) {
  return e[0] !== "$" && !ts(e);
}
const rd = (e) => e === "_" || e === "_ctx" || e === "$stable", id = (e) => it(e) ? e.map(Sr) : [Sr(e)], Fb = (e, t, r) => {
  if (t._n)
    return t;
  const n = Eh((...i) => id(t(...i)), r);
  return n._c = !1, n;
}, qh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (rd(i)) continue;
    const o = e[i];
    if (dt(o))
      t[i] = Fb(i, o, n);
    else if (o != null) {
      const s = id(o);
      t[i] = () => s;
    }
  }
}, Xh = (e, t) => {
  const r = id(t);
  e.slots.default = () => r;
}, Jh = (e, t, r) => {
  for (const n in t)
    (r || !rd(n)) && (e[n] = t[n]);
}, Tb = (e, t, r) => {
  const n = e.slots = Wh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Jh(n, t, r), r && sh(n, "_", i, !0)) : qh(t, n);
  } else t && Xh(e, t);
}, Db = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Rt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Jh(i, t, r) : (o = !t.$stable, qh(t, i)), s = t;
  } else t && (Xh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !rd(a) && s[a] == null && delete i[a];
}, On = zb;
function Rb(e) {
  return Lb(e);
}
function Lb(e, t) {
  const r = Rl();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: p = xr,
    insertStaticContent: v
  } = e, g = (m, S, L, w = null, F = null, z = null, ne = void 0, T = null, $ = !!S.dynamicChildren) => {
    if (m === S)
      return;
    m && !Lo(m, S) && (w = se(m), he(m, F, z, !0), m = null), S.patchFlag === -2 && ($ = !1, S.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: X } = S;
    switch (_) {
      case Gl:
        h(m, S, L, w);
        break;
      case si:
        y(m, S, L, w);
        break;
      case pc:
        m == null && W(S, L, w, ne);
        break;
      case Ze:
        Se(
          m,
          S,
          L,
          w,
          F,
          z,
          ne,
          T,
          $
        );
        break;
      default:
        X & 1 ? C(
          m,
          S,
          L,
          w,
          F,
          z,
          ne,
          T,
          $
        ) : X & 6 ? pe(
          m,
          S,
          L,
          w,
          F,
          z,
          ne,
          T,
          $
        ) : (X & 64 || X & 128) && _.process(
          m,
          S,
          L,
          w,
          F,
          z,
          ne,
          T,
          $,
          b
        );
    }
    D != null && F ? is(D, m && m.ref, z, S || m, !S) : D == null && m && m.ref != null && is(m.ref, null, z, m, !0);
  }, h = (m, S, L, w) => {
    if (m == null)
      n(
        S.el = a(S.children),
        L,
        w
      );
    else {
      const F = S.el = m.el;
      S.children !== m.children && c(F, S.children);
    }
  }, y = (m, S, L, w) => {
    m == null ? n(
      S.el = l(S.children || ""),
      L,
      w
    ) : S.el = m.el;
  }, W = (m, S, L, w) => {
    [m.el, m.anchor] = v(
      m.children,
      S,
      L,
      w,
      m.el,
      m.anchor
    );
  }, H = ({ el: m, anchor: S }, L, w) => {
    let F;
    for (; m && m !== S; )
      F = f(m), n(m, L, w), m = F;
    n(S, L, w);
  }, te = ({ el: m, anchor: S }) => {
    let L;
    for (; m && m !== S; )
      L = f(m), i(m), m = L;
    i(S);
  }, C = (m, S, L, w, F, z, ne, T, $) => {
    if (S.type === "svg" ? ne = "svg" : S.type === "math" && (ne = "mathml"), m == null)
      B(
        S,
        L,
        w,
        F,
        z,
        ne,
        T,
        $
      );
    else {
      const _ = m.el && m.el._isVueCE ? m.el : null;
      try {
        _ && _._beginPatch(), _e(
          m,
          S,
          F,
          z,
          ne,
          T,
          $
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, B = (m, S, L, w, F, z, ne, T) => {
    let $, _;
    const { props: D, shapeFlag: X, transition: be, dirs: me } = m;
    if ($ = m.el = s(
      m.type,
      z,
      D && D.is,
      D
    ), X & 8 ? d($, m.children) : X & 16 && J(
      m.children,
      $,
      null,
      w,
      F,
      fc(m, z),
      ne,
      T
    ), me && vi(m, null, w, "created"), R($, m, m.scopeId, ne, w), D) {
      for (const q in D)
        q !== "value" && !ts(q) && o($, q, null, D[q], z, w);
      "value" in D && o($, "value", null, D.value, z), (_ = D.onVnodeBeforeMount) && gr(_, w, m);
    }
    me && vi(m, null, w, "beforeMount");
    const xe = Vb(F, be);
    xe && be.beforeEnter($), n($, S, L), ((_ = D && D.onVnodeMounted) || xe || me) && On(() => {
      try {
        _ && gr(_, w, m), xe && be.enter($), me && vi(m, null, w, "mounted");
      } finally {
      }
    }, F);
  }, R = (m, S, L, w, F) => {
    if (L && p(m, L), w)
      for (let z = 0; z < w.length; z++)
        p(m, w[z]);
    if (F) {
      let z = F.subTree;
      if (S === z || tm(z.type) && (z.ssContent === S || z.ssFallback === S)) {
        const ne = F.vnode;
        R(
          m,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          F.parent
        );
      }
    }
  }, J = (m, S, L, w, F, z, ne, T, $ = 0) => {
    for (let _ = $; _ < m.length; _++) {
      const D = m[_] = T ? Fr(m[_]) : Sr(m[_]);
      g(
        null,
        D,
        S,
        L,
        w,
        F,
        z,
        ne,
        T
      );
    }
  }, _e = (m, S, L, w, F, z, ne) => {
    const T = S.el = m.el;
    let { patchFlag: $, dynamicChildren: _, dirs: D } = S;
    $ |= m.patchFlag & 16;
    const X = m.props || Rt, be = S.props || Rt;
    let me;
    if (L && Si(L, !1), (me = be.onVnodeBeforeUpdate) && gr(me, L, S, m), D && vi(S, m, L, "beforeUpdate"), L && Si(L, !0), (X.innerHTML && be.innerHTML == null || X.textContent && be.textContent == null) && d(T, ""), _ ? ke(
      m.dynamicChildren,
      _,
      T,
      L,
      w,
      fc(S, F),
      z
    ) : ne || ce(
      m,
      S,
      T,
      null,
      L,
      w,
      fc(S, F),
      z,
      !1
    ), $ > 0) {
      if ($ & 16)
        ge(T, X, be, L, F);
      else if ($ & 2 && X.class !== be.class && o(T, "class", null, be.class, F), $ & 4 && o(T, "style", X.style, be.style, F), $ & 8) {
        const xe = S.dynamicProps;
        for (let q = 0; q < xe.length; q++) {
          const ve = xe[q], O = X[ve], oe = be[ve];
          (oe !== O || ve === "value") && o(T, ve, O, oe, F, L);
        }
      }
      $ & 1 && m.children !== S.children && d(T, S.children);
    } else !ne && _ == null && ge(T, X, be, L, F);
    ((me = be.onVnodeUpdated) || D) && On(() => {
      me && gr(me, L, S, m), D && vi(S, m, L, "updated");
    }, w);
  }, ke = (m, S, L, w, F, z, ne) => {
    for (let T = 0; T < S.length; T++) {
      const $ = m[T], _ = S[T], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lo($, _) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 198) ? u($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      g(
        $,
        _,
        D,
        null,
        w,
        F,
        z,
        ne,
        !0
      );
    }
  }, ge = (m, S, L, w, F) => {
    if (S !== L) {
      if (S !== Rt)
        for (const z in S)
          !ts(z) && !(z in L) && o(
            m,
            z,
            S[z],
            null,
            F,
            w
          );
      for (const z in L) {
        if (ts(z)) continue;
        const ne = L[z], T = S[z];
        ne !== T && z !== "value" && o(m, z, T, ne, F, w);
      }
      "value" in L && o(m, "value", S.value, L.value, F);
    }
  }, Se = (m, S, L, w, F, z, ne, T, $) => {
    const _ = S.el = m ? m.el : a(""), D = S.anchor = m ? m.anchor : a("");
    let { patchFlag: X, dynamicChildren: be, slotScopeIds: me } = S;
    me && (T = T ? T.concat(me) : me), m == null ? (n(_, L, w), n(D, L, w), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      L,
      D,
      F,
      z,
      ne,
      T,
      $
    )) : X > 0 && X & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === be.length ? (ke(
      m.dynamicChildren,
      be,
      L,
      F,
      z,
      ne,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || F && S === F.subTree) && Zh(
      m,
      S,
      !0
      /* shallow */
    )) : ce(
      m,
      S,
      L,
      D,
      F,
      z,
      ne,
      T,
      $
    );
  }, pe = (m, S, L, w, F, z, ne, T, $) => {
    S.slotScopeIds = T, m == null ? S.shapeFlag & 512 ? F.ctx.activate(
      S,
      L,
      w,
      ne,
      $
    ) : fe(
      S,
      L,
      w,
      F,
      z,
      ne,
      $
    ) : de(m, S, $);
  }, fe = (m, S, L, w, F, z, ne) => {
    const T = m.component = Ub(
      m,
      w,
      F
    );
    if (Dh(m) && (T.ctx.renderer = b), Yb(T, !1, ne), T.asyncDep) {
      if (F && F.registerDep(T, re, ne), !m.el) {
        const $ = T.subTree = Ye(si);
        y(null, $, S, L), m.placeholder = $.el;
      }
    } else
      re(
        T,
        m,
        S,
        L,
        F,
        z,
        ne
      );
  }, de = (m, S, L) => {
    const w = S.component = m.component;
    if (Ab(m, S, L))
      if (w.asyncDep && !w.asyncResolved) {
        ye(w, S, L);
        return;
      } else
        w.next = S, w.update();
    else
      S.el = m.el, w.vnode = S;
  }, re = (m, S, L, w, F, z, ne) => {
    const T = () => {
      if (m.isMounted) {
        let { next: X, bu: be, u: me, parent: xe, vnode: q } = m;
        {
          const ee = Qh(m);
          if (ee) {
            X && (X.el = q.el, ye(m, X, ne)), ee.asyncDep.then(() => {
              On(() => {
                m.isUnmounted || _();
              }, F);
            });
            return;
          }
        }
        let ve = X, O;
        Si(m, !1), X ? (X.el = q.el, ye(m, X, ne)) : X = q, be && Aa(be), (O = X.props && X.props.onVnodeBeforeUpdate) && gr(O, xe, X, q), Si(m, !0);
        const oe = kf(m), V = m.subTree;
        m.subTree = oe, g(
          V,
          oe,
          // parent may have changed if it's in a teleport
          u(V.el),
          // anchor may have changed if it's in a fragment
          se(V),
          m,
          F,
          z
        ), X.el = oe.el, ve === null && Cb(m, oe.el), me && On(me, F), (O = X.props && X.props.onVnodeUpdated) && On(
          () => gr(O, xe, X, q),
          F
        );
      } else {
        let X;
        const { el: be, props: me } = S, { bm: xe, m: q, parent: ve, root: O, type: oe } = m, V = os(S);
        Si(m, !1), xe && Aa(xe), !V && (X = me && me.onVnodeBeforeMount) && gr(X, ve, S), Si(m, !0);
        {
          O.ce && O.ce._hasShadowRoot() && O.ce._injectChildStyle(
            oe,
            m.parent ? m.parent.type : void 0
          );
          const ee = m.subTree = kf(m);
          g(
            null,
            ee,
            L,
            w,
            m,
            F,
            z
          ), S.el = ee.el;
        }
        if (q && On(q, F), !V && (X = me && me.onVnodeMounted)) {
          const ee = S;
          On(
            () => gr(X, ve, ee),
            F
          );
        }
        (S.shapeFlag & 256 || ve && os(ve.vnode) && ve.vnode.shapeFlag & 256) && m.a && On(m.a, F), m.isMounted = !0, S = L = w = null;
      }
    };
    m.scope.on();
    const $ = m.effect = new uh(T);
    m.scope.off();
    const _ = m.update = $.run.bind($), D = m.job = $.runIfDirty.bind($);
    D.i = m, D.id = m.uid, $.scheduler = () => td(D), Si(m, !0), _();
  }, ye = (m, S, L) => {
    S.component = m;
    const w = m.vnode.props;
    m.vnode = S, m.next = null, Eb(m, S.props, w, L), Db(m, S.children, L), Hr(), mf(m), Gr();
  }, ce = (m, S, L, w, F, z, ne, T, $ = !1) => {
    const _ = m && m.children, D = m ? m.shapeFlag : 0, X = S.children, { patchFlag: be, shapeFlag: me } = S;
    if (be > 0) {
      if (be & 128) {
        U(
          _,
          X,
          L,
          w,
          F,
          z,
          ne,
          T,
          $
        );
        return;
      } else if (be & 256) {
        Z(
          _,
          X,
          L,
          w,
          F,
          z,
          ne,
          T,
          $
        );
        return;
      }
    }
    me & 8 ? (D & 16 && x(_, F, z), X !== _ && d(L, X)) : D & 16 ? me & 16 ? U(
      _,
      X,
      L,
      w,
      F,
      z,
      ne,
      T,
      $
    ) : x(_, F, z, !0) : (D & 8 && d(L, ""), me & 16 && J(
      X,
      L,
      w,
      F,
      z,
      ne,
      T,
      $
    ));
  }, Z = (m, S, L, w, F, z, ne, T, $) => {
    m = m || so, S = S || so;
    const _ = m.length, D = S.length, X = Math.min(_, D);
    let be;
    for (be = 0; be < X; be++) {
      const me = S[be] = $ ? Fr(S[be]) : Sr(S[be]);
      g(
        m[be],
        me,
        L,
        null,
        F,
        z,
        ne,
        T,
        $
      );
    }
    _ > D ? x(
      m,
      F,
      z,
      !0,
      !1,
      X
    ) : J(
      S,
      L,
      w,
      F,
      z,
      ne,
      T,
      $,
      X
    );
  }, U = (m, S, L, w, F, z, ne, T, $) => {
    let _ = 0;
    const D = S.length;
    let X = m.length - 1, be = D - 1;
    for (; _ <= X && _ <= be; ) {
      const me = m[_], xe = S[_] = $ ? Fr(S[_]) : Sr(S[_]);
      if (Lo(me, xe))
        g(
          me,
          xe,
          L,
          null,
          F,
          z,
          ne,
          T,
          $
        );
      else
        break;
      _++;
    }
    for (; _ <= X && _ <= be; ) {
      const me = m[X], xe = S[be] = $ ? Fr(S[be]) : Sr(S[be]);
      if (Lo(me, xe))
        g(
          me,
          xe,
          L,
          null,
          F,
          z,
          ne,
          T,
          $
        );
      else
        break;
      X--, be--;
    }
    if (_ > X) {
      if (_ <= be) {
        const me = be + 1, xe = me < D ? S[me].el : w;
        for (; _ <= be; )
          g(
            null,
            S[_] = $ ? Fr(S[_]) : Sr(S[_]),
            L,
            xe,
            F,
            z,
            ne,
            T,
            $
          ), _++;
      }
    } else if (_ > be)
      for (; _ <= X; )
        he(m[_], F, z, !0), _++;
    else {
      const me = _, xe = _, q = /* @__PURE__ */ new Map();
      for (_ = xe; _ <= be; _++) {
        const j = S[_] = $ ? Fr(S[_]) : Sr(S[_]);
        j.key != null && q.set(j.key, _);
      }
      let ve, O = 0;
      const oe = be - xe + 1;
      let V = !1, ee = 0;
      const K = new Array(oe);
      for (_ = 0; _ < oe; _++) K[_] = 0;
      for (_ = me; _ <= X; _++) {
        const j = m[_];
        if (O >= oe) {
          he(j, F, z, !0);
          continue;
        }
        let M;
        if (j.key != null)
          M = q.get(j.key);
        else
          for (ve = xe; ve <= be; ve++)
            if (K[ve - xe] === 0 && Lo(j, S[ve])) {
              M = ve;
              break;
            }
        M === void 0 ? he(j, F, z, !0) : (K[M - xe] = _ + 1, M >= ee ? ee = M : V = !0, g(
          j,
          S[M],
          L,
          null,
          F,
          z,
          ne,
          T,
          $
        ), O++);
      }
      const Y = V ? $b(K) : so;
      for (ve = Y.length - 1, _ = oe - 1; _ >= 0; _--) {
        const j = xe + _, M = S[j], ie = S[j + 1], le = j + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ie.el || em(ie)
        ) : w;
        K[_] === 0 ? g(
          null,
          M,
          L,
          le,
          F,
          z,
          ne,
          T,
          $
        ) : V && (ve < 0 || _ !== Y[ve] ? P(M, L, le, 2) : ve--);
      }
    }
  }, P = (m, S, L, w, F = null) => {
    const { el: z, type: ne, transition: T, children: $, shapeFlag: _ } = m;
    if (_ & 6) {
      P(m.component.subTree, S, L, w);
      return;
    }
    if (_ & 128) {
      m.suspense.move(S, L, w);
      return;
    }
    if (_ & 64) {
      ne.move(m, S, L, b);
      return;
    }
    if (ne === Ze) {
      n(z, S, L);
      for (let X = 0; X < $.length; X++)
        P($[X], S, L, w);
      n(m.anchor, S, L);
      return;
    }
    if (ne === pc) {
      H(m, S, L);
      return;
    }
    if (w !== 2 && _ & 1 && T)
      if (w === 0)
        T.beforeEnter(z), n(z, S, L), On(() => T.enter(z), F);
      else {
        const { leave: X, delayLeave: be, afterLeave: me } = T, xe = () => {
          m.ctx.isUnmounted ? i(z) : n(z, S, L);
        }, q = () => {
          z._isLeaving && z[tb](
            !0
            /* cancelled */
          ), X(z, () => {
            xe(), me && me();
          });
        };
        be ? be(z, xe, q) : q();
      }
    else
      n(z, S, L);
  }, he = (m, S, L, w = !1, F = !1) => {
    const {
      type: z,
      props: ne,
      ref: T,
      children: $,
      dynamicChildren: _,
      shapeFlag: D,
      patchFlag: X,
      dirs: be,
      cacheIndex: me,
      memo: xe
    } = m;
    if (X === -2 && (F = !1), T != null && (Hr(), is(T, null, L, m, !0), Gr()), me != null && (S.renderCache[me] = void 0), D & 256) {
      S.ctx.deactivate(m);
      return;
    }
    const q = D & 1 && be, ve = !os(m);
    let O;
    if (ve && (O = ne && ne.onVnodeBeforeUnmount) && gr(O, S, m), D & 6)
      k(m.component, L, w);
    else {
      if (D & 128) {
        m.suspense.unmount(L, w);
        return;
      }
      q && vi(m, null, S, "beforeUnmount"), D & 64 ? m.type.remove(
        m,
        S,
        L,
        b,
        w
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== Ze || X > 0 && X & 64) ? x(
        _,
        S,
        L,
        !1,
        !0
      ) : (z === Ze && X & 384 || !F && D & 16) && x($, S, L), w && A(m);
    }
    const oe = xe != null && me == null;
    (ve && (O = ne && ne.onVnodeUnmounted) || q || oe) && On(() => {
      O && gr(O, S, m), q && vi(m, null, S, "unmounted"), oe && (m.el = null);
    }, L);
  }, A = (m) => {
    const { type: S, el: L, anchor: w, transition: F } = m;
    if (S === Ze) {
      I(L, w);
      return;
    }
    if (S === pc) {
      te(m);
      return;
    }
    const z = () => {
      i(L), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (m.shapeFlag & 1 && F && !F.persisted) {
      const { leave: ne, delayLeave: T } = F, $ = () => ne(L, z);
      T ? T(m.el, z, $) : $();
    } else
      z();
  }, I = (m, S) => {
    let L;
    for (; m !== S; )
      L = f(m), i(m), m = L;
    i(S);
  }, k = (m, S, L) => {
    const { bum: w, scope: F, job: z, subTree: ne, um: T, m: $, a: _ } = m;
    Nf($), Nf(_), w && Aa(w), F.stop(), z && (z.flags |= 8, he(ne, m, S, L)), T && On(T, S), On(() => {
      m.isUnmounted = !0;
    }, S);
  }, x = (m, S, L, w = !1, F = !1, z = 0) => {
    for (let ne = z; ne < m.length; ne++)
      he(m[ne], S, L, w, F);
  }, se = (m) => {
    if (m.shapeFlag & 6)
      return se(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const S = f(m.anchor || m.el), L = S && S[Qy];
    return L ? f(L) : S;
  };
  let Q = !1;
  const E = (m, S, L) => {
    let w;
    m == null ? S._vnode && (he(S._vnode, null, null, !0), w = S._vnode.component) : g(
      S._vnode || null,
      m,
      S,
      null,
      null,
      null,
      L
    ), S._vnode = m, Q || (Q = !0, mf(w), Ah(), Q = !1);
  }, b = {
    p: g,
    um: he,
    m: P,
    r: A,
    mt: fe,
    mc: J,
    pc: ce,
    pbc: ke,
    n: se,
    o: e
  };
  return {
    render: E,
    hydrate: void 0,
    createApp: wb(E)
  };
}
function fc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Si({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Zh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Fr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Zh(s, a)), a.type === Gl && (a.patchFlag === -1 && (a = i[o] = Fr(a)), a.el = s.el), a.type === si && !a.el && (a.el = s.el);
    }
}
function $b(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        a = o + s >> 1, e[r[a]] < c ? o = a + 1 : s = a;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function Qh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qh(t);
}
function Nf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function em(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? em(t.subTree) : null;
}
const tm = (e) => e.__isSuspense;
function zb(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : Yy(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Gl = /* @__PURE__ */ Symbol.for("v-txt"), si = /* @__PURE__ */ Symbol.for("v-cmt"), pc = /* @__PURE__ */ Symbol.for("v-stc"), as = [];
let Kn = null;
function Le(e = !1) {
  as.push(Kn = e ? null : []);
}
function jb() {
  as.pop(), Kn = as[as.length - 1] || null;
}
let bs = 1;
function Pf(e, t = !1) {
  bs += e, e < 0 && Kn && t && (Kn.hasOnce = !0);
}
function nm(e) {
  return e.dynamicChildren = bs > 0 ? Kn || so : null, jb(), bs > 0 && Kn && Kn.push(e), e;
}
function Ve(e, t, r, n, i, o) {
  return nm(
    Ne(
      e,
      t,
      r,
      n,
      i,
      o,
      !0
    )
  );
}
function Vn(e, t, r, n, i) {
  return nm(
    Ye(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function rm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const im = ({ key: e }) => e ?? null, Ia = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Qt(e) || /* @__PURE__ */ yn(e) || dt(e) ? { i: Gn, r: e, k: t, f: !!r } : e : null);
function Ne(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && im(t),
    ref: t && Ia(t),
    scopeId: Ih,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Gn
  };
  return a ? (od(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Qt(r) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Kn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Kn.push(l), l;
}
const Ye = Hb;
function Hb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Vh) && (e = si), rm(e)) {
    const a = yo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && od(a, r), bs > 0 && !o && Kn && (a.shapeFlag & 6 ? Kn[Kn.indexOf(e)] = a : Kn.push(a)), a.patchFlag = -2, a;
  }
  if (Qb(e) && (e = e.__vccOpts), t) {
    t = Gb(t);
    let { class: a, style: l } = t;
    a && !Qt(a) && (t.class = mt(a)), Ft(l) && (/* @__PURE__ */ ed(l) && !it(l) && (l = bn({}, l)), t.style = Et(l));
  }
  const s = Qt(e) ? 1 : tm(e) ? 128 : eb(e) ? 64 : Ft(e) ? 4 : dt(e) ? 2 : 0;
  return Ne(
    e,
    t,
    r,
    n,
    i,
    s,
    o,
    !0
  );
}
function Gb(e) {
  return e ? /* @__PURE__ */ ed(e) || Uh(e) ? bn({}, e) : e : null;
}
function yo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Tr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && im(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(Ia(t)) : [o, Ia(t)] : Ia(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ze ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && yo(e.ssContent),
    ssFallback: e.ssFallback && yo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && nd(
    d,
    l.clone(d)
  ), d;
}
function Uo(e = " ", t = 0) {
  return Ye(Gl, null, e, t);
}
function lt(e = "", t = !1) {
  return t ? (Le(), Vn(si, null, e)) : Ye(si, null, e);
}
function Sr(e) {
  return e == null || typeof e == "boolean" ? Ye(si) : it(e) ? Ye(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rm(e) ? Fr(e) : Ye(Gl, null, String(e));
}
function Fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yo(e);
}
function od(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), od(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Uh(t) ? t._ctx = Gn : i === 3 && Gn && (Gn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else dt(t) ? (t = { default: t, _ctx: Gn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Uo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Tr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = mt([t.class, n.class]));
      else if (i === "style")
        t.style = Et([t.style, n.style]);
      else if (Ol(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Fl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function gr(e, t, r, n = null) {
  Ar(e, t, 7, [
    r,
    n
  ]);
}
const Kb = jh();
let Wb = 0;
function Ub(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Kb, o = {
    uid: Wb++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new by(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Yh(n, i),
    emitsOptions: Hh(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Rt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Rt,
    data: Rt,
    props: Rt,
    attrs: Rt,
    slots: Rt,
    refs: Rt,
    setupState: Rt,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = xb.bind(null, o), e.ce && e.ce(o), o;
}
let hn = null;
const Bb = () => hn || Gn;
let el, iu;
{
  const e = Rl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  el = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => hn = r
  ), iu = t(
    "__VUE_SSR_SETTERS__",
    (r) => vs = r
  );
}
const Ls = (e) => {
  const t = hn;
  return el(e), e.scope.on(), () => {
    e.scope.off(), el(t);
  };
}, Af = () => {
  hn && hn.scope.off(), el(null);
};
function om(e) {
  return e.vnode.shapeFlag & 4;
}
let vs = !1;
function Yb(e, t = !1, r = !1) {
  t && iu(t);
  const { props: n, children: i } = e.vnode, o = om(e);
  Ib(e, n, o, t), Tb(e, i, r || t);
  const s = o ? qb(e, t) : void 0;
  return t && iu(!1), s;
}
function qb(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mb);
  const { setup: n } = r;
  if (n) {
    Hr();
    const i = e.setupContext = n.length > 1 ? Jb(e) : null, o = Ls(e), s = Ds(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = rh(s);
    if (Gr(), o(), (a || e.sp) && !os(e) && Th(e), a) {
      if (s.then(Af, Af), t)
        return s.then((l) => {
          Cf(e, l);
        }).catch((l) => {
          Vl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Cf(e, s);
  } else
    sm(e);
}
function Cf(e, t, r) {
  dt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ft(t) && (e.setupState = Mh(t)), sm(e);
}
function sm(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || xr);
  {
    const i = Ls(e);
    Hr();
    try {
      gb(e);
    } finally {
      Gr(), i();
    }
  }
}
const Xb = {
  get(e, t) {
    return pn(e, "get", ""), e[t];
  }
};
function Jb(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mh($y(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ss)
        return ss[r](e);
    },
    has(t, r) {
      return r in t || r in ss;
    }
  })) : e.proxy;
}
function Zb(e, t = !0) {
  return dt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qb(e) {
  return dt(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ Gy(e, t, vs), ev = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ou;
const If = typeof window < "u" && window.trustedTypes;
if (If)
  try {
    ou = /* @__PURE__ */ If.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const am = ou ? (e) => ou.createHTML(e) : (e) => e, tv = "http://www.w3.org/2000/svg", nv = "http://www.w3.org/1998/Math/MathML", Or = typeof document < "u" ? document : null, Ef = Or && /* @__PURE__ */ Or.createElement("template"), rv = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Or.createElementNS(tv, e) : t === "mathml" ? Or.createElementNS(nv, e) : r ? Or.createElement(e, { is: r }) : Or.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Or.createTextNode(e),
  createComment: (e) => Or.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Or.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Ef.innerHTML = am(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ef.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, iv = /* @__PURE__ */ Symbol("_vtc");
function ov(e, t, r) {
  const n = e[iv];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const tl = /* @__PURE__ */ Symbol("_vod"), lm = /* @__PURE__ */ Symbol("_vsh"), Ri = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[tl] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Vo(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Vo(e, !0), n.enter(e)) : n.leave(e, () => {
      Vo(e, !1);
    }) : Vo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Vo(e, t);
  }
};
function Vo(e, t) {
  e.style.display = t ? e[tl] : "none", e[lm] = !t;
}
const sv = /* @__PURE__ */ Symbol(""), av = /(?:^|;)\s*display\s*:/;
function lv(e, t, r) {
  const n = e.style, i = Qt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Qt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && Ea(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && Ea(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), Ea(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[sv];
      s && (r += ";" + s), n.cssText = r, o = av.test(r);
    }
  } else t && e.removeAttribute("style");
  tl in e && (e[tl] = o ? n.display : "", e[lm] && (n.display = "none"));
}
const Of = /\s*!important$/;
function Ea(e, t, r) {
  if (it(r))
    r.forEach((n) => Ea(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = cv(e, t);
    Of.test(r) ? e.setProperty(
      $i(n),
      r.replace(Of, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ff = ["Webkit", "Moz", "ms"], hc = {};
function cv(e, t) {
  const r = hc[t];
  if (r)
    return r;
  let n = Nn(t);
  if (n !== "filter" && n in e)
    return hc[t] = n;
  n = Dl(n);
  for (let i = 0; i < Ff.length; i++) {
    const o = Ff[i] + n;
    if (o in e)
      return hc[t] = o;
  }
  return t;
}
const Tf = "http://www.w3.org/1999/xlink";
function Df(e, t, r, n, i, o = gy(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Tf, t.slice(6, t.length)) : e.setAttributeNS(Tf, t, r) : r == null || o && !ah(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Pr(r) ? String(r) : r
  );
}
function Rf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? am(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = ah(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Zi(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function uv(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Lf = /* @__PURE__ */ Symbol("_vei");
function dv(e, t, r, n, i = null) {
  const o = e[Lf] || (e[Lf] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = fv(t);
    if (n) {
      const c = o[t] = mv(
        n,
        i
      );
      Zi(e, a, c, l);
    } else s && (uv(e, a, s, l), o[t] = void 0);
  }
}
const Vf = /(?:Once|Passive|Capture)$/;
function fv(e) {
  let t;
  if (Vf.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Vf); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $i(e.slice(2)), t];
}
let mc = 0;
const pv = /* @__PURE__ */ Promise.resolve(), hv = () => mc || (pv.then(() => mc = 0), mc = Date.now());
function mv(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ar(
      gv(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = hv(), r;
}
function gv(e, t) {
  if (it(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const $f = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yv = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? ov(e, n, s) : t === "style" ? lv(e, r, n) : Ol(t) ? Fl(t) || dv(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bv(e, t, n, s)) ? (Rf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Df(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (vv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Qt(n))) ? Rf(e, Nn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Df(e, t, n, s));
};
function bv(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $f(t) && dt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return $f(t) && Qt(r) ? !1 : t in e;
}
function vv(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Nn(t);
  return Array.isArray(r) ? r.some((i) => Nn(i) === n) : Object.keys(r).some((i) => Nn(i) === n);
}
const zf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => Aa(t, r) : t;
};
function Sv(e) {
  e.target.composing = !0;
}
function jf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const gc = /* @__PURE__ */ Symbol("_assign");
function Hf(e, t, r) {
  return t && (e = e.trim()), r && (e = Uu(e)), e;
}
const Gf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[gc] = zf(i);
    const o = n || i.props && i.props.type === "number";
    Zi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[gc](Hf(e.value, r, o));
    }), (r || o) && Zi(e, "change", () => {
      e.value = Hf(e.value, r, o);
    }), t || (Zi(e, "compositionstart", Sv), Zi(e, "compositionend", jf), Zi(e, "change", jf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[gc] = zf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Uu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, _v = ["ctrl", "shift", "alt", "meta"], wv = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => _v.some((r) => e[`${r}Key`] && !t.includes(r))
}, Mt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = wv[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, kv = /* @__PURE__ */ bn({ patchProp: yv }, rv);
let Kf;
function xv() {
  return Kf || (Kf = Rb(kv));
}
const sd = ((...e) => {
  const t = xv().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Nv(n);
    if (!i) return;
    const o = t._component;
    !dt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, Mv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Mv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Nv(e) {
  return Qt(e) ? document.querySelector(e) : e;
}
const Pv = "PanoramaSuite.Debug.Diagnostics", Av = "PanoramaSuite.Debug.ExportDiagnostics", yc = "pano_suite.diagnostics.v1", Wf = "pano_suite.diagnostics.previous.v1", Cv = 300, Iv = 2e5, Ev = 100, Ov = 20, Fv = 1e3, Tv = 2, pa = 1024 * 1024;
function Qr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function Dv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Rv() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Dv,
    document: () => globalThis.document ?? null,
    setInterval: (e, t) => globalThis.setInterval(e, t),
    clearInterval: (e) => globalThis.clearInterval(e),
    addUnload: (e) => {
      var t;
      return (t = globalThis.addEventListener) == null ? void 0 : t.call(globalThis, "beforeunload", e);
    },
    removeUnload: (e) => {
      var t;
      return (t = globalThis.removeEventListener) == null ? void 0 : t.call(globalThis, "beforeunload", e);
    },
    memory: () => {
      var e;
      return ((e = globalThis.performance) == null ? void 0 : e.memory) ?? null;
    },
    observeLongTasks(e) {
      var n;
      const t = globalThis.PerformanceObserver;
      if (!((n = t == null ? void 0 : t.supportedEntryTypes) != null && n.includes("longtask"))) return null;
      const r = new t((i) => e(i.getEntries()));
      return r.observe({ type: "longtask" }), () => r.disconnect();
    },
    userAgent: () => {
      var e;
      return ((e = globalThis.navigator) == null ? void 0 : e.userAgent) ?? "";
    },
    console: globalThis.console,
    WeakRef: globalThis.WeakRef,
    FinalizationRegistry: globalThis.FinalizationRegistry
  };
}
function Lv(e = {}) {
  const t = { ...Rv(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, p = { created: 0, collected: 0 }, v = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    d.delete(b), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    u.delete(b), p.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, W = [], H = /* @__PURE__ */ new Map();
  let te = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), B = { count: 0, maxMs: 0 };
  const R = [];
  function J(b, G, m = void 0) {
    W.push(m === void 0 ? { t: t.clock(), type: b, label: G } : { t: t.clock(), type: b, label: G, detail: m }), W.length > Ev && W.shift();
  }
  function _e(b, G, m, S, L) {
    if (!r || !S || !t.WeakRef) return S;
    const w = { ref: new t.WeakRef(S), label: L };
    return b.add(w), G == null || G.register(S, w), m.created += 1, S;
  }
  function ke(b, G = "") {
    return _e(d, v, f, b, G);
  }
  function ge(b, G = "") {
    return _e(u, g, p, b, G);
  }
  function Se({ label: b = "", width: G, height: m, offscreen: S = !1 } = {}) {
    const L = globalThis.OffscreenCanvas;
    let w;
    return S && typeof L < "u" ? w = new L(G, m) : (w = t.document().createElement("canvas"), G !== void 0 && m !== void 0 && (w.width = G, w.height = m)), ke(w, b);
  }
  function pe(b) {
    b.width = 0, b.height = 0, r && (f.released += 1);
  }
  function fe(b = t.document(), G = "") {
    var m;
    return ge(((m = b == null ? void 0 : b.createElement) == null ? void 0 : m.call(b, "video")) || null, G);
  }
  function de(b, G) {
    if (!r || !b) return () => {
    };
    const m = { label: G, lost: !1, disposed: !1 };
    h.add(m), y.created += 1, J("webgl-created", G);
    const S = () => {
      m.disposed || (m.lost = !0, y.lost += 1, J("webglcontextlost", G));
    }, L = () => {
      m.disposed || (m.lost = !1, y.restored += 1, J("webglcontextrestored", G));
    };
    return b.addEventListener("webglcontextlost", S), b.addEventListener("webglcontextrestored", L), () => {
      m.disposed || (m.disposed = !0, h.delete(m), y.disposed += 1, J("webgl-disposed", G));
    };
  }
  function re(b, G) {
    return H.set(b, G), () => {
      H.get(b) === G && H.delete(b);
    };
  }
  function ye() {
    return r ? t.now() : -1;
  }
  function ce(b) {
    if (b < 0 || !r) return;
    const G = t.now() - b;
    te.count += 1, te.maxMs = Math.max(te.maxMs, G);
  }
  function Z(b, G) {
    if (G < 0 || !r) return;
    const m = t.now() - G, S = C.get(b) ?? { count: 0, maxMs: 0 };
    S.count += 1, S.maxMs = Math.max(S.maxMs, m), C.set(b, S);
  }
  function U() {
    let b = 0, G = 0, m = 0, S = [0, 0];
    const L = {};
    for (const w of d) {
      const F = w.ref.deref();
      if (!F) continue;
      b += 1;
      const z = F.width * F.height;
      z > 0 && (G += 1), m += z, z > S[0] * S[1] && (S = [F.width, F.height]);
      const ne = L[w.label] ?? (L[w.label] = [0, 0]);
      ne[0] += 1, ne[1] += z;
    }
    return { ...f, alive: b, sized: G, pixels: m, mb: Qr(m * 4 / pa, 1), largest: S, byLabel: L };
  }
  function P() {
    const b = [];
    let G = 0, m = 0;
    for (const S of u) {
      const L = S.ref.deref();
      if (!L) continue;
      G += 1;
      const w = !L.paused && !L.ended;
      w && (m += 1), b.length < Ov && b.push({
        label: S.label,
        playing: w,
        src: !!(L.currentSrc || L.src),
        size: [L.videoWidth || 0, L.videoHeight || 0],
        ready: L.readyState ?? 0,
        connected: !!L.isConnected
      });
    }
    return { ...p, alive: G, playing: m, list: b };
  }
  function he() {
    const b = t.now(), G = t.memory(), m = {
      t: t.clock(),
      heap: G ? { used: Qr(G.usedJSHeapSize / pa, 1), total: Qr(G.totalJSHeapSize / pa, 1), limit: Qr(G.jsHeapSizeLimit / pa, 1) } : null,
      canvas: U(),
      webgl: { ...y, alive: [...h].filter((S) => !S.lost).length },
      video: P(),
      frame: { count: te.count, maxMs: Qr(te.maxMs), longTasks: B.count, longTaskMaxMs: Qr(B.maxMs) },
      renders: Object.fromEntries([...C].map(([S, L]) => [S, { count: L.count, maxMs: Qr(L.maxMs) }])),
      sources: Object.fromEntries([...H].map(([S, L]) => [S, L()])),
      costMs: Qr(c, 3)
    };
    return te = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), B = { count: 0, maxMs: 0 }, R.push({ record: m, text: JSON.stringify(m) }), R.length > Cv && R.shift(), l += 1, l % Tv === 0 && I(), c = t.now() - b, m;
  }
  function A(b = Iv) {
    const G = JSON.stringify({ ...o, events: W }).slice(0, -1);
    let m = b - G.length - 14, S = R.length;
    for (; S > 0 && m - R[S - 1].text.length - 1 >= 0; )
      S -= 1, m -= R[S].text.length + 1;
    return `${G},"records":[${R.slice(S).map((L) => L.text).join(",")}]}`;
  }
  function I() {
    if (!o) return;
    const b = t.storage();
    if (b) {
      o.savedAt = t.clock();
      try {
        b.setItem(yc, A());
      } catch {
      }
    }
  }
  function k() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", I();
  }
  function x() {
    var L;
    if (n) return i;
    n = !0;
    const b = t.storage();
    if (!b) return null;
    let G = null;
    try {
      if (G = b.getItem(yc), G === null) {
        const w = b.getItem(Wf);
        return i = w === null ? null : JSON.parse(w), i;
      }
      b.setItem(Wf, G), b.removeItem(yc), i = JSON.parse(G);
    } catch {
      return i;
    }
    const m = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], S = m.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${m.length} records kept. Its last records:`,
      JSON.stringify(S)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((L = m.at(-1)) == null ? void 0 : L.t) || 0).toISOString()}; ${m.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(S)
    ), i;
  }
  function se(b) {
    const G = b === !0;
    if (x(), G !== r) {
      if (r = G, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, R.length = 0, a = t.observeLongTasks((m) => {
          for (const S of m)
            B.count += 1, B.maxMs = Math.max(B.maxMs, S.duration);
        }), t.addUnload(k), s = t.setInterval(he, Fv), I();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(k), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", I();
    }
  }
  function Q() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...W], records: R.map((b) => b.record) } : null,
      previous: i
    };
  }
  function E() {
    const b = t.document(), G = new Blob([JSON.stringify(Q(), null, 1)], { type: "application/json" }), m = URL.createObjectURL(G), S = b.createElement("a");
    S.href = m, S.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, S.click(), setTimeout(() => URL.revokeObjectURL(m), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: Se,
    releaseCanvas: pe,
    trackCanvas: ke,
    createVideo: fe,
    trackVideo: ge,
    watchContext: de,
    addSource: re,
    frameStart: ye,
    frameEnd: ce,
    renderEnd: Z,
    sample: he,
    serialize: A,
    recoverPrevious: x,
    setEnabled: se,
    exportData: Q,
    download: E
  };
}
const Ln = Lv(), on = Ln.createCanvas, Ss = Ln.releaseCanvas, bc = Ln.trackCanvas, Vs = Ln.createVideo, Uf = Ln.trackVideo, Vv = Ln.addSource, $v = Ln.frameStart, zv = Ln.frameEnd;
function cm(e, t) {
  const r = Ln.watchContext(e.canvas, t), n = Ln.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = Ln.frameStart(), l = o(s);
    return Ln.renderEnd(t, a), l;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(o) {
      e.dispose(o), !(o != null && o.lost) && (n(), r());
    }
  };
}
const jv = {
  id: Pv,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Ln.setEnabled(e === !0)
}, Bf = {
  id: Av,
  label: "Export Panorama Suite diagnostics",
  function: () => Ln.download()
};
function Qi(e, t) {
  const r = on({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Hv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Yf(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let s = n, a = i, l = -1, c = -1;
  for (let u = 0; u < i; u += 1)
    for (let f = 0; f < n; f += 1)
      o[(u * n + f) * 4 + 3] <= t || (f < s && (s = f), u < a && (a = u), f > l && (l = f), u > c && (c = u));
  return l < s || c < a ? null : {
    minX: s,
    minY: a,
    maxX: l,
    maxY: c,
    width: l - s + 1,
    height: c - a + 1,
    aspect: Number(((l - s + 1) / Math.max(1, c - a + 1)).toFixed(4))
  };
}
function ad(e, t) {
  return on({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function ni(e, t, r) {
  if (!e) return Qi(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Xt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function dn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let vc = null, Sc = null, qf = null, Xf = null, qt = null, $o = null;
function Gv() {
  if (Sc) return Sc;
  const e = 6, t = 17, r = on({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Sc = r, r;
}
function _c(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  vc = ni(vc, r, n);
  const i = vc;
  Xt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Xf !== i.ctx && (qf = i.ctx.createPattern(Gv(), "repeat"), Xf = i.ctx), i.ctx.fillStyle = qf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Kv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Wv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Uv(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Bv(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ht = /* @__PURE__ */ new Map(), ld = 128;
function Yv(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Ht.has(l)) {
    const W = Ht.get(l);
    return Ht.delete(l), Ht.set(l, W), W;
  }
  Ht.size >= ld && Ht.delete(Ht.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = ad(c, c), f = u.getContext("2d"), p = a * s, v = s + 1, g = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, y = f.createRadialGradient(d, d, p, d, d, v);
  return y.addColorStop(0, g), y.addColorStop(1, h), f.fillStyle = y, f.fillRect(0, 0, c, c), Ht.set(l, u), u;
}
function qv(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, i), v = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${p.toFixed(2)}:${v.toFixed(2)}:${g.toFixed(2)}`;
  if (Ht.has(h)) {
    const J = Ht.get(h);
    return Ht.delete(h), Ht.set(h, J), J;
  }
  Ht.size >= ld && Ht.delete(Ht.keys().next().value);
  const y = ad(u, f), W = y.getContext("2d"), H = W.createImageData(u, f), te = H.data, C = Math.max(0, e - t), B = Math.max(0, Math.min(1, r)), R = 1 + p;
  for (let J = 0; J < f; J++)
    for (let _e = 0; _e < u; _e++) {
      const ke = _e + 0.5 - e, ge = J + 0.5 - t, Se = Math.max(Math.abs(ke) - C, 0), fe = Math.hypot(Se, ge) / t;
      if (fe >= 1) continue;
      const de = fe <= B ? 1 : Math.max(0, (1 - fe) / Math.max(1e-4, 1 - B)), re = 1 - fe, ye = 1 + p * (1 - re) * (1 - re), ce = 1 - v * re * re, Z = ye * ce / R;
      let U = 1;
      if (g > 0) {
        const A = Math.floor((ge + t) / 1.5), I = Math.floor((ke + e) / 8), k = Oi(uo(A * 41 + 500, I * 19 + 300));
        U = 1 - g * 0.42 * k;
      }
      const P = Math.round(255 * Math.min(1, d * de * Z * U));
      if (P <= 0) continue;
      const he = (J * u + _e) * 4;
      te[he] = a, te[he + 1] = l, te[he + 2] = c, te[he + 3] = P;
    }
  return W.putImageData(H, 0, 0), Ht.set(h, y), y;
}
function uo(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Oi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Xv(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Oi(uo(e * 17 + 3, t * 13 + 7)), p = u + o * 0.22 * (f - 0.5);
  if (p >= 1) return 0;
  const v = p <= i ? 1 : Math.max(0, (1 - p) / Math.max(1e-4, 1 - i)), g = Jv(e, t, a, l, r, n), h = o * 0.55;
  if (g < h) return 0;
  const W = 0.45 + 0.55 * ((g - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * v * W));
}
function Jv(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Oi(uo(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Oi(uo(c * 23 + 800, d * 29 + 500)), f = Oi(uo(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function Zv(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (Ht.has(f)) {
    const W = Ht.get(f);
    return Ht.delete(f), Ht.set(f, W), W;
  }
  Ht.size >= ld && Ht.delete(Ht.keys().next().value);
  const p = ad(c, d), v = p.getContext("2d"), g = v.createImageData(c, d), h = g.data, y = Math.max(0, Math.min(1, r));
  for (let W = 0; W < d; W++)
    for (let H = 0; H < c; H++) {
      const te = Xv(H, W, e, t, y, u, l);
      if (te <= 0) continue;
      const C = (W * c + H) * 4;
      h[C] = o, h[C + 1] = s, h[C + 2] = a, h[C + 3] = te;
    }
  return v.putImageData(g, 0, 0), Ht.set(f, p), p;
}
function um(e, t, r) {
  var g, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Uv(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = Qv(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = Bv(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, p = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let v;
  if (n === "chisel") {
    const y = i * a, W = i, H = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), te = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = qv(y, W, o, s, H, te, C);
  } else if (n === "crayon") {
    const y = i * a, W = i, H = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = Zv(y, W, o, s, H);
  } else
    v = Yv(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: v, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: p, latitudeCorrection: u };
}
function Qv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(n.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(n.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(n.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(n.b || 0))) * 255),
    a: o
  };
}
function e1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Jf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function cd(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = uo(t, r);
    for (let p = 0; p < d; p++) {
      const v = Oi(f + p * 2) * Math.PI * 2, g = Math.sqrt(Oi(f + p * 2 + 1)) * u, h = t + Math.cos(v) * g, y = r + Math.sin(v) * g, W = Math.max(0.5, e.radiusPx * i * 0.48), H = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, te = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(H)) : 1, C = W * e.aspect * te;
      Jf(e, h, y, W, C);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Jf(e, t, r, o, l);
}
function Zf(e, t, r) {
  const n = Wv(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = um(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let p = Number(n[f].u || 0) * i;
    const v = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(p - a[f - 1].x) > i * 0.5 && (p += p < a[f - 1].x ? i : -i), a.push({ x: p, y: v });
  }
  if (cd(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const p = a[f], v = { x: (c.x + p.x) * 0.5, y: (c.y + p.y) * 0.5 };
    f === 1 ? u = _s(s, d.x, d.y, v.x, v.y, u) : u = nl(s, l, d, v, p, u), l = c, c = p, d = v;
  }
  a.length === 2 ? _s(s, d.x, d.y, c.x, c.y, u) : nl(s, l, d, c, c, u), e.restore();
}
function Oa(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = e1(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const p = Kv(n[f]);
    let v = Number(p.x || 0) * i;
    f > 0 && Math.abs(v - a[f - 1].x) > i * 0.5 && (v += v < a[f - 1].x ? i : -i), a.push({ x: v, y: Number(p.y || 0) * o }), v < l && (l = v), v > c && (c = v);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let p = 1; p < a.length; p++) e.lineTo(a[p].x + f, a[p].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function ha(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    Oa(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Zf(e, t, r) : ($o = ni($o, r.width, r.height), Xt($o), Zf($o.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage($o.canvas, 0, 0), e.restore());
}
function _i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function _s(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    cd(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function nl(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, p = f + c, v = f - u, g = 16;
  let h = o, y = r.x, W = r.y;
  for (let H = 1; H <= g; H++) {
    const te = u + v * H / g, C = ((u - te) * t.x + (te - d) * r.x) / (u - d), B = ((u - te) * t.y + (te - d) * r.y) / (u - d), R = ((f - te) * r.x + (te - u) * n.x) / (f - u), J = ((f - te) * r.y + (te - u) * n.y) / (f - u), _e = ((p - te) * n.x + (te - f) * i.x) / (p - f), ke = ((p - te) * n.y + (te - f) * i.y) / (p - f), ge = ((f - te) * C + (te - d) * R) / (f - d), Se = ((f - te) * B + (te - d) * J) / (f - d), pe = ((p - te) * R + (te - u) * _e) / (p - u), fe = ((p - te) * J + (te - u) * ke) / (p - u), de = ((f - te) * ge + (te - u) * pe) / (f - u), re = ((f - te) * Se + (te - u) * fe) / (f - u);
    h = _s(e, y, W, de, re, h), y = de, W = re;
  }
  return h;
}
function t1(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const p = um(i, n, o), v = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", y = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", cd(p, c, a, 1), e.activeStroke = {
      pprev: { x: c, y: a },
      prev: { x: c, y: a },
      lastMidX: c,
      lastMidY: a,
      stampTex: p.stampTex,
      radiusPx: p.radiusPx,
      spacingPx: p.spacingPx,
      aspect: p.aspect,
      angle: p.angle,
      stampKind: p.stampKind,
      scatter: p.scatter,
      latitudeCorrection: p.latitudeCorrection,
      strokeOpacity: v,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: h,
      layerKind: y,
      pointCount: 1
    }, dn(e);
    return;
  }
  const d = (l.prev.x + c) * 0.5, u = (l.prev.y + a) * 0.5;
  i.globalCompositeOperation = "source-over";
  const f = {
    ctx: i,
    stampTex: l.stampTex,
    radiusPx: l.radiusPx,
    spacingPx: l.spacingPx,
    desc: o,
    aspect: l.aspect,
    angle: l.angle,
    stampKind: l.stampKind,
    scatter: l.scatter,
    latitudeCorrection: l.latitudeCorrection
  };
  l.pointCount === 1 ? l.distSinceStamp = _s(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = nl(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, dn(e);
}
function Wl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Qi(t, r), s = {
    descriptor: n,
    committedMask: Qi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, a = {
    actionGroupId: "__eraser__",
    descriptor: n,
    committedPaint: Qi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Qi(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let p = null;
  function v(pe) {
    return {
      actionGroupId: pe,
      descriptor: n,
      committedPaint: Qi(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(pe) {
    let fe = i.get(pe);
    return fe || (fe = v(pe), i.set(pe, fe)), fe;
  }
  function h(pe) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function y(pe) {
    var Z;
    const fe = !u || u.length !== pe.length || pe.some((U, P) => U !== u[P]), de = d === "paint" && ((Z = c ? i.get(c) : a) == null ? void 0 : Z.activeStroke) || null;
    let re = s.displayDirty || a.displayDirty || fe;
    for (const U of pe) {
      const P = i.get(U);
      if (P != null && P.displayDirty) {
        re = !0;
        break;
      }
    }
    if (de && (re = !0), !re) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const U of pe) {
      const P = i.get(U);
      P && (P.displayDirty = !1);
    }
    u = [...pe];
    const ye = l.ctx;
    Xt(l);
    const ce = !!(de != null && de.isEraser);
    for (const U of pe) {
      const P = i.get(U);
      if (!P) continue;
      const A = c === P.actionGroupId && d === "paint" ? P.activeStroke : null;
      if (ce)
        qt = ni(qt, t, r), Xt(qt), qt.ctx.drawImage(P.committedPaint.canvas, 0, 0), _i(qt.ctx, o.canvas), ye.drawImage(qt.canvas, 0, 0);
      else if (ye.drawImage(P.committedPaint.canvas, 0, 0), A) {
        const I = P.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, A.strokeOpacity ?? 1));
        ye.save(), ye.globalAlpha = I, ye.drawImage(o.canvas, 0, 0), ye.restore();
      }
    }
  }
  function W(pe) {
    var de, re, ye, ce, Z;
    for (const U of i.values())
      Xt(U.committedPaint), Xt(U.currentStroke), U.activeStroke = null, dn(U);
    Xt(s.committedMask), Xt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), dn(s), dn(a), u = null;
    const fe = [
      ...Array.isArray((re = (de = pe == null ? void 0 : pe.painting) == null ? void 0 : de.paint) == null ? void 0 : re.strokes) ? pe.painting.paint.strokes : [],
      ...Array.isArray((ce = (ye = pe == null ? void 0 : pe.painting) == null ? void 0 : ye.mask) == null ? void 0 : ce.strokes) ? pe.painting.mask.strokes : []
    ];
    for (const U of fe) {
      if (((Z = U == null ? void 0 : U.targetSpace) == null ? void 0 : Z.kind) !== "ERP_GLOBAL") continue;
      const P = String((U == null ? void 0 : U.layerKind) || "paint"), A = String((U == null ? void 0 : U.toolKind) || "pen") === "eraser";
      if (P === "mask") {
        const I = s.descriptor;
        A ? (qt = ni(qt, I.width, I.height), Xt(qt), ha(qt.ctx, U, I), _i(s.committedMask.ctx, qt.canvas)) : (ha(s.committedMask.ctx, U, I), s.painted = !0);
        continue;
      }
      if (A) {
        qt = ni(qt, n.width, n.height), Xt(qt), ha(qt.ctx, U, n);
        for (const I of i.values())
          _i(I.committedPaint.ctx, qt.canvas), dn(I);
      } else {
        const I = String((U == null ? void 0 : U.actionGroupId) || "__default__"), k = g(I), x = k.descriptor;
        ha(k.committedPaint.ctx, U, x), dn(k);
      }
    }
    y([...i.keys()]);
  }
  function H(pe, fe) {
    d = String((pe == null ? void 0 : pe.layerKind) || "");
    const de = String((pe == null ? void 0 : pe.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Xt(s.currentStroke), s.activeStroke = null, dn(s);
    else {
      const re = de ? a : g(String((pe == null ? void 0 : pe.actionGroupId) || "__default__"));
      c = de ? "" : String((pe == null ? void 0 : pe.actionGroupId) || "__default__"), Xt(re.currentStroke), re.activeStroke = null, dn(re);
    }
  }
  function te(pe, fe) {
    var P;
    const de = String((pe == null ? void 0 : pe.layerKind) || "paint"), re = String((pe == null ? void 0 : pe.toolKind) || "") === "eraser", ye = de === "mask" ? s : re ? a : g(String((pe == null ? void 0 : pe.actionGroupId) || c || "__default__")), ce = ye.activeStroke, Z = ye.descriptor;
    if (ce && ce.pointCount > 1) {
      const he = ye.currentStroke.ctx;
      he.globalCompositeOperation = "source-over";
      const A = {
        ctx: he,
        stampTex: ce.stampTex,
        radiusPx: ce.radiusPx,
        spacingPx: ce.spacingPx,
        desc: Z,
        aspect: ce.aspect,
        angle: ce.angle,
        stampKind: ce.stampKind,
        scatter: ce.scatter,
        latitudeCorrection: ce.latitudeCorrection
      };
      ce.pointCount === 2 ? _s(A, ce.lastMidX, ce.lastMidY, ce.prev.x, ce.prev.y, ce.distSinceStamp) : nl(A, ce.pprev, { x: ce.lastMidX, y: ce.lastMidY }, ce.prev, ce.prev, ce.distSinceStamp);
    }
    ye.lassoPreviewActive && (Xt(ye.currentStroke), Oa(ye.currentStroke.ctx, pe, Z), ye.lassoPreviewActive = !1);
    const U = de === "mask" ? s.committedMask : ye.committedPaint;
    if (re && de === "paint")
      for (const he of i.values())
        _i(he.committedPaint.ctx, ye.currentStroke.canvas), dn(he);
    else if (re)
      _i(U.ctx, ye.currentStroke.canvas);
    else {
      de === "mask" && (s.painted = !0);
      const he = Math.max(0, Math.min(1, (ce == null ? void 0 : ce.strokeOpacity) ?? 1));
      U.ctx.save(), U.ctx.globalAlpha = he, U.ctx.drawImage(ye.currentStroke.canvas, 0, 0), U.ctx.restore();
    }
    Hv() && (String((pe == null ? void 0 : pe.toolKind) || ""), String((Z == null ? void 0 : Z.kind) || ""), Number((Z == null ? void 0 : Z.width) || 0), Number((Z == null ? void 0 : Z.height) || 0), String(((P = pe == null ? void 0 : pe.targetSpace) == null ? void 0 : P.viewMode) || ""), Number((pe == null ? void 0 : pe.aspect) ?? 1), Yf(ye.currentStroke.canvas), Yf(U.canvas), void 0), Xt(ye.currentStroke), ye.activeStroke = null, dn(ye), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function C(pe) {
    if (d === "mask")
      Xt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, dn(s);
    else if (d === "paint" && !c)
      Xt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, dn(a);
    else if (c) {
      const fe = i.get(c);
      fe && (Xt(fe.currentStroke), fe.activeStroke = null, fe.lassoPreviewActive = !1, dn(fe));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function B(pe, fe) {
    var re;
    if (d = String((pe == null ? void 0 : pe.layerKind) || ""), String(((re = pe == null ? void 0 : pe.geometry) == null ? void 0 : re.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Xt(s.currentStroke), Oa(s.currentStroke.ctx, pe, s.descriptor), s.lassoPreviewActive = !0, dn(s);
      else {
        const ye = String((pe == null ? void 0 : pe.toolKind) || "") === "eraser", ce = ye ? a : g(String((pe == null ? void 0 : pe.actionGroupId) || c || "__default__"));
        c = ye ? "" : String((pe == null ? void 0 : pe.actionGroupId) || c || "__default__"), Xt(ce.currentStroke), Oa(ce.currentStroke.ctx, pe, ce.descriptor), ce.lassoPreviewActive = !0, dn(ce);
      }
      y([...i.keys()]);
    }
  }
  function R(pe) {
    return y(pe ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function J(pe) {
    return i.get(String(pe)) ?? null;
  }
  function _e() {
    return [...i.keys()];
  }
  function ke(pe) {
    var he;
    const fe = i.get(String(pe));
    if (!fe) return null;
    const de = d === "paint" && c === fe.actionGroupId, re = d === "paint" && ((he = c ? i.get(c) : a) == null ? void 0 : he.activeStroke) || null, ye = !!(re != null && re.isEraser), ce = de ? fe.activeStroke : null;
    if (!ye && !ce) return fe.committedPaint.canvas;
    const Z = `${fe.revision}:${a.revision}:${ye}`, U = f.get(fe.actionGroupId);
    if ((U == null ? void 0 : U.key) === Z) return U.surface.canvas;
    const P = ni((U == null ? void 0 : U.surface) ?? null, t, r);
    return Xt(P), P.ctx.drawImage(fe.committedPaint.canvas, 0, 0), ye ? _i(P.ctx, o.canvas) : (P.ctx.save(), P.ctx.globalAlpha = fe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ce.strokeOpacity ?? 1)), P.ctx.drawImage(o.canvas, 0, 0), P.ctx.restore()), f.set(fe.actionGroupId, { key: Z, surface: P }), P.canvas;
  }
  function ge() {
    const pe = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!pe || pe.isEraser) ? null : `${s.revision}:${!!pe}`;
  }
  function Se() {
    const pe = ge();
    if (pe === null)
      return p = null, null;
    if ((p == null ? void 0 : p.key) === pe) return p.surface.canvas;
    const fe = ni((p == null ? void 0 : p.surface) ?? null, t, r);
    Xt(fe);
    const de = d === "mask" ? s.activeStroke : null;
    return de != null && de.isEraser ? (qt = ni(qt, t, r), Xt(qt), qt.ctx.drawImage(s.committedMask.canvas, 0, 0), _i(qt.ctx, o.canvas), _c(fe.ctx, qt.canvas)) : (_c(fe.ctx, s.committedMask.canvas), de && _c(fe.ctx, o.canvas)), p = { key: pe, surface: fe }, fe.canvas;
  }
  return {
    rebuildCommitted: W,
    beginStroke: H,
    appendStrokePoint: t1,
    updateActiveStroke: B,
    commitActiveStroke: te,
    cancelActiveStroke: C,
    getErpTarget: R,
    ensureTarget: h,
    getGroupTarget: J,
    getGroupDisplayCanvas: ke,
    getMaskDisplayCanvas: Se,
    getMaskDisplayRevision: ge,
    getAllGroupIds: _e
  };
}
function Oe(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Kt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function ud(e, t) {
  let r = Kt(t) - Kt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const su = 3;
function zo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function rl(e, t = 0) {
  const r = zo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = zo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = zo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = zo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(zo(t) || 0);
}
function dm(e) {
  if (!(e != null && e.addEventListener)) return () => {
  };
  const t = () => {
    var r;
    return (r = e.focus) == null ? void 0 : r.call(e, { preventScroll: !0 });
  };
  return e.addEventListener("pointerenter", t), () => {
    var r;
    return (r = e.removeEventListener) == null ? void 0 : r.call(e, "pointerenter", t);
  };
}
const Qf = Math.PI / 180, ep = 0.12, n1 = su, r1 = 35, i1 = 140, Bo = 100, o1 = 20, tp = 0.8;
function s1(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Oe(Number(e || Bo), 1, 179) * Qf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Qf;
}
function dd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Bo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(W, H = null) {
    a && a(W, H);
  }
  function d(W, H, te = null, C = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(W || 0), l.drag.lastY = Number(H || 0), l.drag.lastTs = Number(C || performance.now()), l.drag.pointerId = te, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: te }), !0;
  }
  function u(W, H, te = "pano", C = performance.now()) {
    if (!l.drag.active) return !1;
    const B = Number(C || performance.now()), R = Number(W), J = Number(H), _e = R - l.drag.lastX, ke = J - l.drag.lastY;
    l.drag.lastX = R, l.drag.lastY = J, l.drag.lastTs = B;
    const ge = n() || { x: 1, y: 1 }, Se = Number(ge.x || 1), pe = Number(ge.y || 1), fe = { ...t() };
    let de = 0, re = 0;
    if (te === "unwrap") {
      const ce = i() || { w: 1, h: 1 }, Z = Math.max(1, Number(ce.w || 1)), U = Math.max(1, Number(ce.h || 1)), P = _e / Z, he = ke / U;
      de = -P * 360 * Se, re = he * 180 * pe;
    } else {
      const ce = o() || { w: 0, h: 0 }, Z = Math.max(1, Number(ce.w || 0)), U = Math.max(1, Number(ce.h || 0));
      if (Z > 1 && U > 1) {
        const P = Oe(Number(fe.fov || Bo), 1, 179), he = Oe(s1(P, Z, U), 0.1, 179);
        de = -(_e / Z) * P * Se, re = ke / U * he * pe;
      } else
        de = -_e * ep * Se, re = ke * ep * pe;
    }
    fe.yaw = Kt(Number(fe.yaw || 0) + de), fe.pitch = Oe(Number(fe.pitch || 0) + re, -89.9, 89.9), r(fe), l.velHistory.push({ ts: B, yaw: fe.yaw, pitch: fe.pitch });
    let ye = 0;
    for (; ye < l.velHistory.length - 1 && l.velHistory[ye].ts < B - 100; ) ye++;
    return ye > 0 && l.velHistory.splice(0, ye), l.inertia.active = !1, l.inertia.lastTs = B, s(), c("drag", { phase: "move", dx: _e, dy: ke, dYaw: de, dPitch: re }), !0;
  }
  function f(W = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const H = Number(W || performance.now());
    l.drag.lastTs = H;
    const te = l.velHistory.filter((B) => H - B.ts <= 80);
    if (te.length >= 2) {
      const B = te[0], R = te.at(-1), J = Math.max(1e-3, (R.ts - B.ts) / 1e3);
      let _e = R.yaw - B.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), l.inertia.vx = _e / J, l.inertia.vy = (R.pitch - B.pitch) / J;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const C = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = C > o1, l.inertia.lastTs = H, c("drag", { phase: "end", speed: C, inertiaActive: l.inertia.active }), !0;
  }
  function p(W = performance.now()) {
    if (!l.inertia.active) return !1;
    const H = Number(W || performance.now()), te = Math.max(1e-3, (H - (l.inertia.lastTs || H)) / 1e3);
    l.inertia.lastTs = H;
    const C = { ...t() };
    C.yaw = Kt(Number(C.yaw || 0) + l.inertia.vx * te), C.pitch = Oe(Number(C.pitch || 0) + l.inertia.vy * te, -89.9, 89.9);
    const B = Math.exp(-5.5 * te);
    return l.inertia.vx *= B, l.inertia.vy *= B, Math.abs(l.inertia.vx) < tp && Math.abs(l.inertia.vy) < tp && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(C), s(), l.inertia.active;
  }
  function v() {
    const W = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], W;
  }
  function g(W) {
    const H = Math.sign(Number(W || 0));
    if (!H) return !1;
    const te = { ...t() }, C = Number(te.fov || Bo);
    return te.fov = Oe(C + H * n1, r1, i1), r(te), s(), c("wheel", { deltaSign: H, fovBefore: C, fovAfter: te.fov }), !0;
  }
  function h(W, H = 0) {
    return g(rl(W, H));
  }
  function y() {
    r({ yaw: 0, pitch: 0, fov: Bo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: p,
    stopMotion: v,
    applyWheel: g,
    applyWheelEvent: h,
    resetView: y
  };
}
const wt = Math.PI / 180, rn = 180 / Math.PI;
function Qn(e, t, r) {
  return { x: e, y: t, z: r };
}
function il(e, t) {
  return Qn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ol(e, t) {
  return Qn(e.x * t, e.y * t, e.z * t);
}
function wc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function fd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Qn(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Qn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function xo(e, t, r = 0) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, o = r * wt, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Qn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Qn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Qn(a * l, c, s * l)
  };
}
function sl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function It(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function a1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function l1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = It(n.z_index ?? n.zIndex, t.length);
    t.push({
      id: String(n.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: n.locked === !0
    });
  }
  return t;
}
function c1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function u1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = It(e.t, 0), n = It(e.widthScale, null), i = It(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = It(e.u, null), s = It(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, s)),
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = It(e.u, null), s = It(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: s,
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  return null;
}
function ma(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = u1(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function d1(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = ma(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = ma(e.points, t, 1);
  if (!o) return null;
  const s = ma(e.rawPoints, t, 1), a = ma(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function f1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = c1(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = d1(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = It(e.size, null), s = It(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = It(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, It(f.r, 0))),
      g: Math.max(0, Math.min(1, It(f.g, 0))),
      b: Math.max(0, Math.min(1, It(f.b, 0))),
      a: Math.max(0, Math.min(1, It(f.a, 1)))
    };
  }
  return {
    id: a,
    actionGroupId: l,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, s)),
    hardness: It(e.hardness, null),
    flow: It(e.flow, null),
    spacing: It(e.spacing, null),
    createdAt: Math.trunc(It(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function np(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = f1(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function p1(e) {
  if (!e || typeof e != "object") return null;
  const t = It(e.u0, null), r = It(e.v0, null), n = It(e.u1, null), i = It(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function h1(e) {
  const t = e || {};
  return {
    du: It(t.du, 0) ?? 0,
    dv: It(t.dv, 0) ?? 0,
    rot_deg: It(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, It(t.scale, 1) ?? 1)
  };
}
function m1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = p1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, It(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: h1(e.transform)
  } : null;
}
function g1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = m1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function Mo(e) {
  const t = a1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: l1(e.groups),
    paint: np(e.paint, "paint"),
    mask: np(e.mask, "mask"),
    raster_objects: g1(e.raster_objects)
  };
}
const tr = 1, nr = 179, au = 85;
function Ul(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function fm(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function pm(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * rn;
  return r && (n = Math.round(n / 15) * 15), Ul(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ui(e = {}) {
  const t = Oe(ot(e.hFOV_deg || 90, 90), tr, nr), r = Oe(ot(e.vFOV_deg || 60, 60), tr, nr), n = Math.tan(t * wt * 0.5), i = Math.tan(r * wt * 0.5);
  return {
    yawDeg: ot(e.yaw_deg, 0),
    pitchDeg: ot(e.pitch_deg, 0),
    rollDeg: ot(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Li(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ui(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function pd(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function hd(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Oe(2 * Math.atan(n / (2 * r)) * rn, tr, nr), s = Oe(2 * Math.atan(i / (2 * r)) * rn, tr, nr);
  return { hFOV_deg: o, vFOV_deg: s };
}
function y1(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ui(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function md(e, t, r = au) {
  const n = Math.max(1e-12, ot(t, 1)), i = Oe(ot(r, au), 1, 89.999), o = n * Math.tan(i * wt), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function hm(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function b1(e, t) {
  const r = Oe(ot(e, 90), tr, nr), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * rn,
    tr,
    nr
  );
}
function Fa(e, t) {
  const r = Oe(ot(e, 60), tr, nr), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * rn,
    tr,
    nr
  );
}
function rp(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function v1(e, t) {
  const r = rp(e, 1), n = rp(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function zi(e) {
  const t = Oe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Oe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Fi(e) {
  const t = zi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || v1(t, 1);
}
function gd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Fi(t), t;
}
function mm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Oe(s, tr, nr) : Oe(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return gd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Oe(ot(r, 0), -89.9, 89.9),
    roll_deg: Ul(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Vr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Fi(e);
}
function gm(e, t) {
  const r = ui(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * rn, o = 2 * Math.atan(r.tanHalfY * n) * rn;
  return i < tr || i > nr || o < tr || o > nr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function ym(e, t, r = su) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, su));
  if (!n || !(i > 0)) return null;
  const o = ui(e), s = o.hFovDeg + n * i;
  if (s < tr || s > nr) return null;
  const a = Math.tan(s * wt * 0.5);
  return gm(e, a / o.tanHalfX);
}
function bm(e, t) {
  const r = ui(e), n = xo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return fd(il(il(n.fwd, ol(n.right, i)), ol(n.up, o)));
}
function S1(e) {
  return Qn(e.x, e.y, -e.z);
}
function Ta(e) {
  return Qn(e.x, e.y, -e.z);
}
function Pn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = xo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function vm(e) {
  const t = Ta(Qn(e[0][0], e[1][0], e[2][0])), r = Ta(Qn(e[0][1], e[1][1], e[2][1])), n = Ta(Qn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * rn, pitchDeg: o * rn, rollDeg: l * rn };
}
function ws(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function di(e) {
  const [[t, r, n], [i, o, s], [a, l, c]] = e, d = t + o + c;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - s) * f, y: (n - a) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + a) / f, w: (l - s) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (r + i) / f, y: 0.25 * f, z: (s + l) / f, w: (n - a) / f };
  }
  const u = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + a) / u, y: (s + l) / u, z: 0.25 * u, w: (i - r) / u };
}
function ga(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ai = 1e-6, lu = 1e-6, _1 = 1e-9;
function ks(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function w1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    ks(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return ks(0, n, o, 1, 0.5 * (s + a));
}
function bo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function vo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, p, v) => f + p * a[v], 0) < 0) return r.map(() => 0);
  const l = s.map((f, p) => (f * o + a[p] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((p, v) => p + v * v, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function Sm(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  bo(e, n) && (l = vo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return bo(e, n + 1) && (c = vo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function _m(e, t, r, n, i) {
  const [[o], [s]] = Sm(e, t, r.map((a) => [a]), n);
  return ks(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function k1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = Sm(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => ks(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function al([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function x1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function kc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function M1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function cu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function io(e, t) {
  return M1(al([-e[0], -e[1], -e[2], e[3]], t));
}
function xc(e, t, r) {
  return al(e, cu(io(e, t).map((n) => r * n)));
}
function Mc(e, t) {
  const r = x1(e, t);
  if (Math.abs(r) > lu) return r < 0;
  const [n, i, o] = io(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > lu) return s < 0;
  return !1;
}
function ya(e) {
  const { x: t, y: r, z: n, w: i } = di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function uu(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function N1(e, t, r, n) {
  const i = ya(e[r].value);
  let o = ya(e[r + 1].value);
  Mc(i, o) && (o = kc(o));
  const s = t[r + 1] - t[r], a = io(i, o);
  let l = a;
  if (bo(e, r)) {
    let C = ya(e[r - 1].value);
    Mc(C, i) && (C = kc(C)), l = vo(t, r, io(i, C), a).map((B) => B * s);
  }
  let c = a;
  if (bo(e, r + 1)) {
    let C = ya(e[r + 2].value);
    Mc(o, C) && (C = kc(C)), c = vo(t, r + 1, io(o, i), io(o, C)).map((B) => B * s);
  }
  const d = al(i, cu(l.map((C, B) => 0.5 * (C - a[B])))), u = al(o, cu(a.map((C, B) => 0.5 * (C - c[B])))), [f, p, v, g] = xc(xc(i, o, n), xc(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: y, rollDeg: W } = vm(ws({ x: f, y: p, z: v, w: g })), H = e[r].value, te = e[r + 1].value;
  return {
    yaw_deg: uu(h, H.yaw_deg, te.yaw_deg, n),
    pitch_deg: y,
    roll_deg: uu(W, H.roll_deg, te.roll_deg, n)
  };
}
function xs(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function ll(e) {
  return Math.sqrt(xs(e, e));
}
function cl(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function wm(e, t) {
  const r = xs(e, t), n = t.map((s, a) => s - r * e[a]), i = ll(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function eo(e, t) {
  const r = ll(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ba(e, t, r) {
  return eo(e, wm(e, t).map((n) => r * n));
}
function Nc(e, t) {
  const r = cl(e[t].value), n = cl(e[t + 1].value), i = xs(r, n), o = i < 0 && ll(n.map((l, c) => l - i * r[c])) <= lu;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = wm(r, n);
  const a = ll(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function P1(e, t, r, n) {
  const i = cl(e[r].value), o = cl(e[r + 1].value), [s, a, l] = Nc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  bo(e, r) && (c = vo(t, r, Nc(e, r - 1)[1].map((H) => -H), c).map((H) => H * u)), bo(e, r + 1) && (d = vo(t, r + 1, d.map((H) => -H), Nc(e, r + 1)[0]).map((H) => H * u));
  let f, p, v;
  if (l) {
    const H = Math.PI, te = ks(0, xs(c, s) / H / 3, H - xs(d, a) / H / 3, H, n);
    [f, p, v] = eo(i, s.map((C) => te * C / H));
  } else {
    const H = ba(eo(i, c.map((B) => B / 3)), eo(o, d.map((B) => -B / 3)), n), te = ba(eo(i, c.map((B) => n * B / 3)), H, n), C = ba(H, eo(o, d.map((B) => -(1 - n) * B / 3)), n);
    [f, p, v] = ba(te, C, n);
  }
  const g = Math.hypot(f, v), h = e[r].value.yaw_deg, y = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= _1 ? h + (y - h) * n : uu(Math.atan2(f, v) * 180 / Math.PI, h, y, n), pitch_deg: Math.atan2(p, g) * 180 / Math.PI };
}
function A1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = _m(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function C1(e, t, r, n) {
  return _m(e, t, e.map((i) => i.value), r, n);
}
const I1 = { position: k1, rotation: N1, direction: P1, size: A1 };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return ga(e[t].value);
  if (r <= n[0].frame + Ai) return ga(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Ai) return ga(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Ai; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= Ai || s.easing === "hold") return ga(s.value);
  const a = n.map((c) => c.frame), l = w1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (I1[t] ?? C1)(n, a, o, l);
}
function du(e) {
  return Math.min(179, Math.max(0.1, e));
}
function E1(e) {
  return Math.min(1, Math.max(0, e));
}
function km(e) {
  return Math.max(1e-6, e);
}
function xm(e, t) {
  return t - (e.start - e.in);
}
function ji(e, t) {
  return t >= e.start - Ai && (e.duration === null || t < e.start + e.duration - Ai);
}
function Bl(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: du(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function $s(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = xm(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Bl(n, r),
    scene: {
      active: i.visible && ji(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: km(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Wr(s, r))
  };
}
function O1(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: km(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: du(r.hFOV_deg),
    vFOV_deg: du(r.vFOV_deg)
  };
}
function Wr(e, t) {
  const r = xm(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ji(e.clip, t),
    clip_frame: r,
    ...O1(e, r),
    opacity: E1(Wt(e, "opacity", r))
  };
}
const F1 = 2, Mm = ["sky", "world"], fu = ["perspective", "erp"], T1 = ["input", "output", "temp"], Nm = [0.42, 0, 0.58, 1], Pm = 1, yd = 1e3, pu = 1e7, bd = pu, vd = Number.MAX_SAFE_INTEGER, D1 = /^sticker_([0-9]{1,16})$/;
function Lt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Sd(e, t) {
  const r = Zt(e, t);
  return r !== null && r > 0 ? r : t;
}
function Mn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ai(e) {
  const t = Zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Da(e) {
  const t = ai(e);
  return t === null ? null : Mn(t, -pu, pu);
}
function fi(e) {
  const t = Sd(e, null);
  return t === null ? null : Mn(t, Pm, yd);
}
function Am(e) {
  const t = ai(e);
  return t !== null && t >= 1 ? Math.min(t, bd) : null;
}
function Ms(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Cm(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Zt(r, null));
  return t.includes(null) ? null : t;
}
function Im(e) {
  return Cm(e) || [0, 0, 0];
}
function Em(e) {
  const t = Lt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: Mn(Zt(t.pitch_deg, 0), -90, 90),
    roll_deg: Zt(t.roll_deg, 0)
  };
}
function R1(e) {
  return Mn(Zt(e, 90), 0.1, 179);
}
function L1(e) {
  return Sd(e, 1);
}
function V1(e) {
  const t = Lt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: Mn(Zt(t.pitch_deg, 0), -90, 90)
  };
}
function $1(e) {
  return Zt(e, 0);
}
function z1(e) {
  const t = Lt(e) ? e : {};
  return {
    hFOV_deg: Mn(Zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Mn(Zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Om(e) {
  return Mn(Zt(e, 1), 0, 1);
}
const _d = [["position", Im], ["rotation", Em], ["fov", R1]], Yl = [["position", Im], ["rotation", Em], ["scale", L1]], pi = [["direction", V1], ["roll", $1], ["size", z1], ["opacity", Om]], hi = [...Yl, ["opacity", Om]];
function j1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Zt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Nm];
}
function H1(e) {
  if (!Lt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Cm(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function G1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Lt(i)) continue;
    const o = Da(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: j1(i.easing) }, a = r ? H1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function ql(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Lt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: G1(o.keyframes, i, n === "position") };
  }
  return r;
}
function zs(e) {
  const t = Lt(e) ? e : {}, r = Da(t.start), n = Da(t.in), i = Da(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function No(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Fm(e) {
  const t = Lt(e) ? e : {}, r = Mn(Zt(t.x0, 0), 0, 1), n = Mn(Zt(t.y0, 0), 0, 1), i = Mn(Zt(t.x1, 1), 0, 1), o = Mn(Zt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function K1(e) {
  if (!Lt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: T1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function W1(e) {
  const t = K1(e.source);
  if (!t) return null;
  const r = Mm.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: zs(e.clip),
    visible: Ms(e.visible, !0),
    locked: Ms(e.locked, !1),
    crop: Fm(e.crop),
    ...ql(e, n ? hi : pi)
  };
  return n || (i.z_index = ai(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = U1(e.handoff_overrides, r)), i;
}
function U1(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? hi : pi).map(([n]) => n).filter((n) => r.includes(n));
}
function B1(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = Lt(s) ? W1(s) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      r.push(a);
    }
  }
  const i = /* @__PURE__ */ new Set();
  for (const s of r)
    typeof s.id == "string" && s.id && !i.has(s.id) ? i.add(s.id) : s.id = null;
  let o = q1(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, vd) };
}
function Y1(e) {
  const t = typeof e == "string" ? D1.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < vd ? r : 0;
}
function Tm(e) {
  return e.reduce((t, r) => Math.max(t, Y1(r.id)), 0) + 1;
}
function q1(e, t) {
  const r = ai(e), n = Tm(t);
  return Mn(r === null ? n : Math.max(r, n), 1, vd);
}
function X1(e) {
  if (!Lt(e)) return null;
  const t = fu.includes(e.projection) ? e.projection : fu[0];
  return { aspect: Sd(e.aspect, 1), projection: t, visible: Ms(e.visible, !0), ...ql(e, _d) };
}
function ul(e) {
  return typeof e == "string" && e ? e : null;
}
function Dm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function J1(e) {
  if (!Lt(e) || ul(e.id) === null || !Mm.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Lt(e.clip) && (r.clip = zs(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Lt(e.crop) && (r.crop = Fm(e.crop)), Object.assign(r, ql(e, (t ? hi : pi).filter(([i]) => Lt(e[i]))));
  const n = t ? null : ai(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function Rm(e) {
  const t = Lt(e) ? fi(e.fps) : null;
  if (t === null || ul(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => ul(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(J1).filter((c) => c !== null), i = Dm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Lt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Lt(o.clip) && (s.clip = zs(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function Z1(e) {
  const t = (Array.isArray(e) ? e : []).map(Rm).filter((r) => r !== null);
  return Dm(t, (r) => r.layer);
}
function dl(e) {
  const t = Lt(e.timeline) ? e.timeline : {}, r = Lt(e.scene) ? e.scene : {}, { stickers: n, next: i } = B1(e.stickers, e.next_sticker_id);
  return {
    version: F1,
    id: ul(e.id),
    timeline: {
      fps: fi(t.fps) ?? 24,
      length: Am(t.length)
    },
    camera: X1(e.camera),
    scene: { clip: zs(r.clip), visible: Ms(r.visible, !0), ...ql(r, Yl) },
    stickers: n,
    next_sticker_id: i,
    painting: Mo(e.painting),
    painting_layer: Lt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Ms(e.painting_visible, !0),
    upstream: Z1(e.upstream),
    background: Q1(e.background)
  };
}
function Q1(e) {
  return { clip: zs(Lt(e) ? e.clip : void 0) };
}
function eS(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Lt(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function tS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Lt(t)) return null;
  const r = Mn(Zt(t.hFOV_deg, 90), 1, 179), n = Mn(Zt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function nS(e) {
  const t = Lt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Lt) : [];
  return r.sort((n, i) => Zt(n.z_index, 0) - Zt(i.z_index, 0)), dl({
    camera: tS(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: eS(n, t),
      visible: n.visible,
      locked: n.locked,
      crop: n.crop,
      z_index: n.z_index,
      direction: { value: { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg } },
      roll: { value: n.rot_deg },
      size: { value: { hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg } }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function An(e) {
  if (e == null || typeof e == "string" && !e.trim()) return dl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Lt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? nS(t) : dl(t);
}
const Pc = {
  state: { painting_visible: !0 },
  camera: { projection: fu[0], visible: !0 },
  scene: { visible: !0 }
};
function Ac(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function hu(e) {
  const t = Ac(e, Pc.state);
  return t.id === null && delete t.id, t.next_sticker_id === Tm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, No(t.background.clip) && delete t.background, JSON.stringify({
    ...t,
    camera: e.camera && Ac(e.camera, Pc.camera),
    scene: Ac(e.scene, Pc.scene),
    stickers: e.stickers.map((r) => Object.fromEntries(Object.entries(r).filter(([n, i]) => n !== "handoff_overrides" || i.length)))
  });
}
function ls(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function cs(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Po(e, t) {
  const r = fi(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => ai(a * n), { length: o } = e.timeline, s = cs(e.scene.clip, i);
  return dl({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...ls(e.camera, _d, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...ls(e.scene, Yl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = cs(a.clip, i), u = a.placement === "world" ? hi : pi;
      return { ...a, clip: l, ...ls(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream,
    background: { clip: cs(e.background.clip, i).clip }
  });
}
function Lm(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => ai(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? hi : pi).filter(([p]) => Object.hasOwn(l, p));
    if (!Object.hasOwn(l, "clip")) {
      const p = o.get(l.id) ?? 0, v = ai(p * (e.fps / r));
      return { ...l, ...ls(l, c, i, v, p) };
    }
    const { clip: d, anchor: u, newAnchor: f } = cs(l.clip, i);
    return { ...l, clip: d, ...ls(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: cs(e.scene.clip, i).clip } : e.scene;
  return Rm({ ...e, fps: r, stickers: s, scene: a });
}
const rS = 1e-3;
function wd(e, t, r, n) {
  if (!ji(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(rS / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function kd(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function xd(e, t, r, n = !1) {
  return e.start - e.in + (r.video && n ? r.duration * t : r.frames);
}
function Vm(e, t, r) {
  const n = r / t;
  return { start: e.start * n, in: e.in * n, duration: e.duration === null ? null : e.duration * n };
}
function $m(e) {
  return No(e) ? null : { origin: e.start - e.in, start: e.start, end: e.duration === null ? 1 / 0 : e.start + e.duration };
}
function mu(e, t, r, n = null, i = !1) {
  return No(e) ? !0 : ji(e, t) ? !(n != null && n.video || (n == null ? void 0 : n.frames) > 1) || t < xd(e, r, n, i) : !1;
}
const jo = /* @__PURE__ */ new Map(), iS = 8;
function zm(e) {
  let t = jo.get(e);
  if (!t) {
    const r = on({ label: "background.color", width: 2, height: 1 }), n = r.getContext("2d");
    n.fillStyle = e, n.fillRect(0, 0, r.width, r.height), t = { media: r, revision: e, coverage: 360, source: `bg_color:${e}` }, jo.size >= iS && jo.delete(jo.keys().next().value), jo.set(e, t);
  }
  return t;
}
function Ns(e) {
  const t = e("pano_sticker_input_video_meta")[0];
  if (t && typeof t == "object") return t;
  const r = e("pano_sticker_files").length;
  return r > 1 ? { kind: "IMAGE", frames: r } : null;
}
function oS(e, t) {
  return Math.floor(e * t.fps);
}
function Md(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const ip = 4;
function Nd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, p) => f !== r[p])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = oS(a, l);
      for (let f = d; f < Math.min(r.length, d + ip + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + ip) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Cc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function jm(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Hm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Ai);
}
function Gm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? jm(e.keyframes[n - 1].easing) : [...Nm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function gn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Cc(i.value, n);
    return;
  }
  const o = Hm(i, r);
  o ? o.value = Cc(o.value, n) : Gm(i, r, Cc(Wt(e, t, r), n));
}
function Ao(e) {
  return e.placement === "world" ? hi.map(([t]) => t) : e.placement === "sky" ? pi.map(([t]) => t) : e.clip && !e.position ? [] : (e.clip ? Yl : _d).map(([t]) => t);
}
function sS(e, t) {
  for (const r of Ao(e))
    Hm(e[r], t) || Gm(e[r], t, Wt(e, r, t));
}
function aS(e) {
  const t = Ao(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Ic(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function lS(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function cS(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Wt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function uS(e, t, r, n, i, o = 1 / 0) {
  n = Math.min(n, Math.max(0, o - Math.max(...r))), n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const s = new Set(r);
  for (const a of t) {
    const l = e[a], c = l.keyframes.filter((u) => s.has(u.frame)).map((u) => ({ ...u, frame: u.frame + n })), d = new Set(c.map((u) => u.frame));
    l.keyframes = [
      ...l.keyframes.filter((u) => !s.has(u.frame) && !d.has(u.frame)),
      ...c
    ].sort((u, f) => u.frame - f.frame);
  }
  return n;
}
function Km(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function dS(e, t, r) {
  const n = Km(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function fS(e, t, r, n) {
  for (const i of Km(e, t, r)) i.easing = jm(n);
}
function pS(e, t) {
  e.start = Math.max(0, e.start + t);
}
function hS(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function mS(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Wm(e) {
  return Ao(e).map((t) => e[t]);
}
function fl(e) {
  return Wm(e).some((t) => t.keyframes.length > 0) || !!e.clip && !No(e.clip);
}
function Um(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.background, e.scene, ...e.stickers].some(fl);
}
const Bm = 1e5;
function Pd(e, t = {}) {
  const { length: r } = e.timeline, n = r ? Math.max(1, Math.round(r)) : gS(e, t);
  return Number.isFinite(n) ? n : Bm;
}
function gS(e, { bg: t = null, port: r = null, sceneItems: n = 0, upstream: i = null, openClip: o = null, camera: s = !1 } = {}) {
  const a = e.timeline.fps, l = (h) => h.duration === null || h === o, c = [e.scene.clip, ...e.stickers.map((h) => h.clip)].filter((h) => !l(h)).map((h) => h.start + h.duration), d = e.stickers.find((h) => h.source.kind === "port");
  r && d && l(d.clip) && c.push(kd({ ...d.clip, duration: null }, a, r));
  const u = e.scene.clip;
  n > 1 && l(u) && c.push(u.start - u.in + n);
  const f = e.background.clip;
  (t == null ? void 0 : t.frames) === 1 && !t.video && !l(f) && c.push(f.start + f.duration);
  const p = s && e.camera ? Wm(e.camera).flatMap((h) => h.keyframes.map((y) => y.frame)) : [];
  let v = 1;
  const g = l(f) ? t && xd(f, a, t, !!i) : f.start + f.duration;
  return (t != null && t.video || (t == null ? void 0 : t.frames) > 1) && !No(f) ? v = Math.max(1, Math.round(g)) : t != null && t.video ? v = i ? Math.max(1, Math.round(t.duration * a)) : t.frames : (t == null ? void 0 : t.frames) > 1 ? v = t.frames : c.length ? v = Math.max(1, Math.round(Math.max(...c))) : p.length && (v = Math.max(1, Math.round(Math.max(...p)) + 1)), i && (v = Math.max(v, i.frames, ...i.ends.map(Math.round))), v;
}
function yS(e) {
  return e > 0 ? fi(Math.min(e, yd)) : null;
}
function bS(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Am(Math.max(1, Math.min(e, bd)));
}
const Ec = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], vS = 2e3;
function SS(e, t, r = 56) {
  const n = Ec.find((o) => o * t >= r) || Ec[Ec.length - 1], i = [];
  for (let o = 0; o < e && i.length < vS; o += n) i.push(o);
  return i;
}
function _S(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let va = { text: null, parsed: null };
function $n(e) {
  return Number(e) === 180 ? 180 : 360;
}
function pl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function wS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: $n(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Mo(null),
    painting_layer: null,
    ui_settings: pl(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Ym(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function kS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function xS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function MS(e) {
  return Array.isArray(e) ? e.map((t) => gd(t)) : [];
}
function NS(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function qm(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = wS(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (va.text === i ? o = va.parsed : (o = JSON.parse(i), va = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: kS(o.assets),
      stickers: xS(o.stickers),
      shots: MS(o.shots),
      painting: Mo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: pl(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = pl({ ...a.ui_settings, ...s })), a.output_preset = Ym(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = $n(r.coverage), delete a.editor_history, a;
  } catch {
    return va = { text: i, parsed: null }, n;
  }
}
function PS(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function AS(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function CS(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Xm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = fi(t.fps);
  let l;
  try {
    l = An(e);
  } catch {
    l = An(null);
  }
  return a && a !== l.timeline.fps && (l = Po(l, a)), {
    ...l,
    coverage: $n(i),
    bg_color: n,
    output_preset: Ym(r),
    ui_settings: pl(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function IS(e, t) {
  const r = Po(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.background, r.background], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of Ao(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Jm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * wt, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / wt;
  return Math.min(179, Math.max(0.1, i));
}
function Ad(e, t, r = null) {
  const n = Wr(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: Jm(e, n, r), rot_deg: n.roll_deg };
}
const ES = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function op(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function OS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[ES[r]].keyframes.length));
}
function Zm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = op(r, ["yaw_deg", "pitch_deg"]), o = op(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && gn(e, "direction", n, i), r.rot_deg !== void 0 && gn(e, "roll", n, r.rot_deg), Object.keys(o).length && gn(e, "size", n, o);
}
const Xl = ["position_x", "position_y", "position_z"], Cd = "camera";
function Qm(e, t) {
  const r = Bl(e, t);
  return gd({
    id: Cd,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: b1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function FS(e) {
  return An({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Kt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function TS(e) {
  return e - 360 * Math.round(e / 360);
}
function DS(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + TS(r[o] - n[o]));
  Object.keys(i).length && gn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && gn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, s) => o !== n.position[s]) && gn(e, "position", t, [...r.position]);
}
function RS(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(Xl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function LS(e, t, r, n) {
  const i = Xl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, gn(e, "position", t, o);
  } else r === "hFOV_deg" ? gn(e, "fov", t, n) : gn(e, "rotation", t, { [r]: n });
}
function VS(e, t, r) {
  gn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function $S(e, t) {
  const r = Wr(e, t);
  return {
    ...Object.fromEntries(Xl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function zS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Xl.indexOf(r);
  if (o >= 0) {
    const s = Wt(e, "position", i);
    s[o] = n, gn(e, "position", i, s);
  } else r === "scale" ? gn(e, "scale", i, n) : r === "opacity" ? gn(e, "opacity", i, n / 100) : gn(e, "rotation", i, { [r]: n });
}
function jS(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && gn(e, i, n, r[i]);
}
function HS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function GS(e, t, r) {
  return {
    id: e,
    placement: "world",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...r.position], keyframes: [] },
    rotation: { value: { ...r.rotation }, keyframes: [] },
    scale: { value: r.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] }
  };
}
function Ra(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function hl(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Jl(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Id(e, t, r, n) {
  return {
    id: e,
    placement: "sky",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg }, keyframes: [] },
    roll: { value: r.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: n
  };
}
function KS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Kt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function eg(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function tg(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function ng(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function sp(e, t) {
  return e != null && e.__panoSceneStateV2 ? hu(An(t)) : JSON.stringify(t);
}
const WS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function US() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => WS[e & 63]).join("");
}
function rg(e, t, r, n) {
  const i = sp(e, t);
  return BS(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = US(), sp(e, t));
}
function BS(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = An(r);
    if (hu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && hu(Po(i, o)) === t;
  } catch {
    return !1;
  }
}
const Oc = 0.15, YS = 0.01, qS = 1e-3, XS = 0.05, JS = 4, ap = 250, ZS = 16, pr = 1, QS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Un(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Mr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Zl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function Hi(e, t, r = 0) {
  const n = Pn(e, t, r), i = Mr(n, 2);
  return { right: Mr(n, 0), up: Mr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function e_(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function gu(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function t_(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : gu(e, "3dof", r);
}
function n_(e) {
  return Hi(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function r_(e) {
  return Un(e.position, Hi(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function mi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function us(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ed(e, t) {
  return us(mi(t, e.position), Hi(e.yaw_deg, e.pitch_deg).forward);
}
function Od(e) {
  return Math.max(e, 1e-6) * XS;
}
function yu(e, t, r = null, n = pr) {
  if (t) return t;
  const i = Od(n);
  if (r && Ed(e, r) > 0) {
    const o = mi(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Un(e.position, o, i / s);
  }
  return Un(e.position, Hi(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function ig(e, t = pr) {
  return Math.max(e.distance, Od(t));
}
function og(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > JS ? !1 : t.time - e.time < ap || e.cost > ZS && t.time - e.wheelTime < ap;
}
function Fd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function sg(e, t, r, n, i = r_(e)) {
  const o = e.roll_deg ?? 0, [s, a] = i_(t, r, o), l = Kt(e.yaw_deg + s / n * 360), c = Oe(e.pitch_deg - a / n * 360, -89.9, 89.9), d = Pn(e.yaw_deg, e.pitch_deg, o), u = Pn(l, c, o), f = mi(e.position, i), p = [0, 1, 2].map((g) => us(Mr(d, g), f)), v = { ...e, yaw_deg: l, pitch_deg: c, position: Un(i, Zl(u, p)) };
  return { ...v, distance: Ed(v, i) };
}
function i_(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function ag(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = n_(e), l = 2 * o * Fd(e, n, i).tanY / i;
  return { ...e, position: Un(Un(e.position, s, -t * l), a, r * l), distance: o };
}
function lg(e, t, r, n = pr) {
  const i = mi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * YS, l = r > 0 ? Math.min(Math.max(o * Oc, a), o - s * qS) : -Math.max(o * Oc / (1 - Oc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Un(e.position, i, l / o) };
  return { ...c, distance: Math.max(Ed(c, t), Od(n)) };
}
function o_(e, t, r, n) {
  const { tanX: i, tanY: o } = Fd(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = Hi(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Un(t.center, l, -a), distance: a };
}
function Td(e, t, r, n = null) {
  return cg({
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Fd(e, t, r).tanY) * rn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function cg(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: pr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Ps(e, t, r, n) {
  const { right: i, up: o, forward: s } = ug(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function ug(e) {
  const t = ws(e.quaternion), r = Mr(t, 2);
  return { right: Mr(t, 0), up: Mr(t, 1), forward: r.map((n) => -n) };
}
function ml(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function s_({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function Dd(e, t) {
  if (!e || !t.active) return null;
  const r = a_(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: bu(t),
    itemQuaternion: e.kind === "splat" ? QS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function dg(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = Dd(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function fg(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function a_(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function bu(e) {
  return {
    position: [...e.position],
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function vu(e, t) {
  return Un(e.position, Zl(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function La(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Su({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function _u(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function l_(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...Su(t).map((o) => vu(e.scene, o)));
  for (const o of r) i.push(...Rd(o));
  for (const { box: o, value: s } of n) i.push(...Su(o).map((a) => vu(s, a)));
  return i;
}
function c_(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Pn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Rd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Un(e.position, Zl(e.rotation, [n, i, 0])));
}
function u_(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? _u(Rd(i)) : o != null && o.box ? _u(Su(La(o.kind, o.box)).map((s) => vu(n, s))) : { center: [...n.position], radius: n.scale };
}
const d_ = 2, f_ = 0.5, p_ = 30;
function pg(e, t) {
  const r = mi(t, e), n = Math.atan2(r[0], -r[2]) * rn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * rn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function h_(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * f_ : d_, o = t ? [...t] : Un(e.position, Hi(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...mi(o, e.position)), a = s > 0 ? pg(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(p_ * 0.5 * wt);
  return { position: o, rotation: a, scale: l };
}
function lp(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function m_(e) {
  return [0, 1, 2].map((t) => Mr(e, t));
}
function cp(e, t, r, n) {
  if (e === "translate") return { position: Un(t.position, mi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * S_(r.scale, n.scale) / r.scale };
  const i = lp(ws(n.quaternion), m_(ws(r.quaternion))), o = lp(i, Pn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = vm(o);
  return Math.abs(a) <= g_ ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: y_(o, t.yaw_deg) } };
}
const g_ = 89.9;
function y_(e, t) {
  const r = Mr(e, 0), n = Mr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * rn + 0;
}
const b_ = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function v_(e, t, r, n, i) {
  if (!Ps(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = ug(e), l = mi(t, e.position), c = us(l, o), d = us(l, s), u = us(l, a), f = Math.tan(e.fovY_deg * 0.5 * wt), p = f * e.aspect, v = Math.hypot(c, d, u) * b_[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > v)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (te) => {
    const C = v * Math.sqrt(te * te + u * u - v * v);
    return [(te * u - C) / (u * u - v * v), (te * u + C) / (u * u - v * v)];
  }, [h, y] = g(c), [W, H] = g(d);
  return {
    minX: n * 0.5 * (1 + h / p),
    maxX: n * 0.5 * (1 + y / p),
    minY: i * 0.5 * (1 - H / f),
    maxY: i * 0.5 * (1 - W / f)
  };
}
function S_(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function __(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function hg(e, t) {
  const r = Pn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => Un(e.position, Zl(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function w_(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Ps(e, s, n, i), c = Ps(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Oe(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function k_(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function x_(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function M_(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const mg = 0.28;
function gg(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * rn,
    aspect: n
  };
}
function ds(e) {
  const t = ui(e);
  return {
    quaternion: di(Pn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function yg(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = md(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * rn,
      vFOV_deg: 2 * Math.atan(o / n) * rn
    }
  };
}
function bg(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = ws(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), p = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(v, g = 1e-4) {
      const h = S1(v), y = n * h.x + s * h.y + c * h.z, W = i * h.x + a * h.y + d * h.z, H = -(o * h.x + l * h.y + u * h.z), te = Math.max(H, g);
      return {
        x: t * 0.5 * (1 + y / te / p),
        y: r * 0.5 * (1 - W / te / f),
        z: H
      };
    },
    // The unit direction seen at the point (x, y).
    ray(v, g) {
      const h = (v / t * 2 - 1) * p, y = (1 - g / r * 2) * f;
      return fd(Ta({
        x: n * h + i * y - o,
        y: s * h + a * y - l,
        z: c * h + d * y - u
      }));
    }
  };
}
function vg(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = $s(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), p = Math.tan(Jm(a, c, _g(u.media)) * 0.5 * wt), { crop: v } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? mg : c.opacity,
      zIndex: n(a),
      quaternion: di(Pn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * v.x0 - 1) * f,
        x1: (2 * v.x1 - 1) * f,
        y0: (1 - 2 * v.y1) * p,
        y1: (1 - 2 * v.y0) * p
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function Sg(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return vg(e, t, {
    media: (a) => {
      const l = s.get(a.id);
      return l ? n(l) : null;
    },
    zIndex: (a) => {
      var l;
      return Number(((l = s.get(a.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function _g(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function wg(e, t, r, { media: n, evaluated: i = $s(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: p } = _g(u.media), v = c_(c, a.crop, f, p);
    v && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: v.position,
      quaternion: v.quaternion,
      rotation: v.rotation,
      width: v.width,
      height: v.height,
      crop: a.crop
    });
  }), s;
}
function N_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BVorUOAb.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = cm(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(g) {
      return l && !f.lost ? l.render(g) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(g) {
      return l && !f.lost ? l.renderUnwrap(g) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(g, h) {
      return l && !f.lost ? l.resize(g, h) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(g, h) {
      l && !f.lost && l.clear(g, h);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(g) {
      l && !f.lost && l.releaseSplats(g);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(g) {
      return l ? l.sceneBox(g) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(g, h, y, W, H) {
      return l && !f.lost ? l.pick(g, h, y, W, H) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, h, y, W, H) {
      return l && !f.lost ? l.pickSurface(g, h, y, W, H) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, h, y, W, H) {
      return l && !f.lost ? l.pickSticker(g, h, y, W, H) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, h, y, W, H, te) {
      return l && !f.lost ? l.gizmoPointer(g, h, y, W, H, te) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", p), e.removeEventListener("webglcontextrestored", v), l == null || l.dispose(), l = null;
    }
  };
  function p(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function v() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", p), e.addEventListener("webglcontextrestored", v), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const kg = "3D view unavailable. Check the browser console.";
function gl(e, t, r) {
  return gg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function P_(e) {
  let t = null, r = !1, n = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || r || n || (r = !0, e().then((s) => {
      if (r = !1, !i.size) {
        s.dispose();
        return;
      }
      t = s, i.forEach((a) => a.onChange());
    }).catch((s) => {
      r = !1, i.size && (n = !0, console.error("[PanoramaStickers] three.js view is unavailable", s), i.forEach((a) => a.onChange()));
    }));
  }
  return function(a) {
    const l = { onChange: a };
    let c = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(d) {
        return c ? null : (o(), t ? t.render({ ...d, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        c || (c = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const xg = P_(
  () => import("./.lazy/pano_three_view-BVorUOAb.js").then((e) => e.$).then((e) => cm(e.createThreeView({ createCanvas: () => on({ label: "three.node" }) }), "node"))
), er = ["erp_image", "bg_erp", "bg_media"], Ld = ["sticker_image", "sticker"], Mg = ["scene"], Vd = ["sticker", "sticker_state"], A_ = {
  background: er,
  "external-sticker": Ld,
  scene: Mg,
  "sticker-handoff": Vd
};
function Ng(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function fo(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = Ng(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function fs(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function up(e, t) {
  var o, s;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((a) => (a == null ? void 0 : a.name) === t);
  let n = r >= 0 && e.graph ? e.getInputLink(r) : null;
  const i = /* @__PURE__ */ new Set();
  for (; n; ) {
    if (n.type && n.type !== "*") return String(n.type);
    const a = e.graph.getNodeById(n.origin_id);
    if (!a || i.has(a)) return "";
    i.add(a);
    const l = (s = (o = a.outputs) == null ? void 0 : o[n.origin_slot ?? 0]) == null ? void 0 : s.type;
    if (l && l !== "*") return String(l);
    if (a.type !== "Reroute") return "";
    n = a.getInputLink(0);
  }
  return "";
}
function Pg(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function C_(e, t) {
  const { graph: r, entry: n } = Pg(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = Ng(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const Ag = [...er, ...Ld, ...Mg, ...Vd], I_ = 256, to = /* @__PURE__ */ new Map(), Fc = /* @__PURE__ */ new WeakMap();
let Cg = () => null;
function Ig(e) {
  return Fc.has(e) || Fc.set(e, JSON.stringify(e)), Fc.get(e);
}
function E_(e) {
  Cg = e;
}
function yl(e, t) {
  const r = Ig(e);
  to.delete(r), to.set(r, t), to.size > I_ && to.delete(to.keys().next().value);
}
function Ot(e, t) {
  var o;
  const r = e ? Cg(e) : null;
  if (!r) return !0;
  const n = fo(e);
  let i = to.get(Ig(r));
  if (i)
    yl(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => Ag.includes(s == null ? void 0 : s.name)))) return !0;
    yl(r, n), i = n;
  }
  return A_[t].every((s) => i[s] === n[s]);
}
const bl = /* @__PURE__ */ new WeakSet();
async function wu(e, t) {
  if (bl.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && bl.add(e), r.ok && n !== void 0 ? n : null;
}
function Eg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = Pg(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => Ag.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: C_(r, t) };
}
const Va = /* @__PURE__ */ new Map();
function O_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Va.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await wu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = Eg(i, o);
        s && yl(s.output, s.inputs);
      }
    });
}
const F_ = 5;
function T_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${F_}`, n = wu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, wu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: p } of await n) {
        if (!a()) return null;
        const v = await o(p);
        if ((c = v == null ? void 0 : v.outputs) != null && c[l])
          return ((f = (u = (d = v.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : Eg(v, l);
      }
      return null;
    }
  };
}
function D_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let qi = null;
async function R_(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || bl.has(r) || (a = Va.get(i)) != null && a.has(n) || D_(t)) return null;
  (qi == null ? void 0 : qi.workflowId) !== i && (qi = { workflowId: i, history: T_(r, i) }, queueMicrotask(() => {
    qi = null;
  }));
  const s = await qi.history.lastNodeOutput(e, o);
  return o() ? s ? (yl(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (bl.has(r) || Va.set(i, (Va.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function dp(e, t, r, n = er) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const fp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function $a(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return fp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return fp.test(String((e == null ? void 0 : e.filename) || ""));
}
const Tc = /* @__PURE__ */ new WeakMap();
function L_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function ku(e) {
  return L_(e) ? (Tc.has(e) || Tc.set(e, Math.random().toString(36).slice(2, 10)), Tc.get(e)) : "run";
}
function Og(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function V_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function $d(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const s = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const a of s)
      if (Array.isArray(a))
        for (const l of a) {
          const c = n(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function $_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Vs(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, s = 0;
  const a = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !a || s || n.paused || n.ended || (s = n.requestVideoFrameCallback(() => {
      s = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, d = () => i(), u = () => {
    i(), l();
  }, f = () => i();
  let p = !1;
  const v = () => {
    p = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", v), n.src = t, n.load();
  const g = () => {
    o || p || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, h = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var W, H;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", v), n.pause(), (W = n.removeAttribute) == null || W.call(n, "src"), (H = n.load) == null || H.call(n));
    },
    failed: () => p,
    play: g,
    pause: h,
    toggle() {
      n.paused ? g() : h();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const As = /* @__PURE__ */ new WeakMap(), Fg = {
  editorSession: () => ({
    // Writes the modal's state to state_json before the prompt is queued.
    flushBeforeQueue: null,
    // The view the editor was closed with (pano_view_memory.js viewMemory), which the next opening restores.
    view: null
  }),
  nodeSurface: () => ({
    attached: !1,
    mountKey: null,
    controller: null,
    // "stickers" or "cutout" once attached.
    mode: "",
    noPreview: !1,
    openEditor: null,
    // { widget, root, canvas, requestDraw, state, emptyHintEl, nodeSurface }
    dom: null,
    // Undoes the attach of `dom`.
    restore: null,
    cutout: null,
    stickers: null,
    cutoutState: null,
    stickersState: null,
    cutoutFrame: null,
    lastCutoutShot: null,
    view: null,
    playback: null,
    // The ends of the Clip ranges Panorama Studio overrides upstream, for its Timeline's length, with the result
    // list and state they were made from (pano_preview_runtime.js surfaceTimelineMedia).
    upstreamLength: null,
    scene: null,
    renderCache: null,
    paintEngine: null,
    paintDescriptorKey: "",
    paintRevision: null,
    paintRevisionKey: "",
    rasterCache: null,
    rasterReady: null,
    bootMinHeightActive: !1,
    bootMinHeightTimer: null,
    resizeSettleTimer: null,
    userResized: !1,
    standaloneBootSized: !1,
    debugLastTs: 0
  }),
  previewNode: () => ({
    runtime: null,
    surface: null,
    installDone: !1,
    installProbeActive: !1,
    installProbeTries: 0
  }),
  mediaCache: () => ({
    // Shared by the node surface and the editor (pano_comfy_media.js), each under its own keys.
    linkedImages: /* @__PURE__ */ new Map(),
    // { key, player } of createLoopingPreviewVideo.
    ownOutputVideo: null,
    ownOutputRev: 0,
    // { src, image, ready, failed } of Panorama Studio's last run output (an ERP or a first frame).
    studioRunImage: null,
    executedOutputs: /* @__PURE__ */ new Map(),
    outputFromRun: !1
  }),
  stateSync: () => ({
    liveState: null,
    liveStateVersion: 0,
    parsedState: null,
    flushers: /* @__PURE__ */ new Set(),
    pendingStickerUploads: /* @__PURE__ */ new Map(),
    stickerOperationTail: null,
    coverageSyncInstalled: !1
  })
};
function js(e, t) {
  if (!e || typeof e != "object") return null;
  let r = As.get(e);
  return r || (r = {}, As.set(e, r)), r[t] ?? (r[t] = Fg[t]());
}
function Ql(e, t) {
  var r;
  return e && typeof e == "object" && ((r = As.get(e)) == null ? void 0 : r[t]) || null;
}
const vl = (e) => js(e, "editorSession"), gt = (e) => js(e, "nodeSurface"), $r = (e) => js(e, "previewNode"), Cn = (e) => js(e, "mediaCache"), Wn = (e) => js(e, "stateSync"), z_ = (e) => Ql(e, "editorSession"), Tg = (e) => Ql(e, "nodeSurface"), Dg = (e) => Ql(e, "previewNode");
function Dc(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const j_ = {
  editorSession() {
  },
  nodeSurface(e) {
    var t, r, n;
    try {
      (t = e.restore) == null || t.call(e);
    } catch {
    }
    clearTimeout(e.bootMinHeightTimer), clearTimeout(e.resizeSettleTimer), (n = (r = e.rasterCache) == null ? void 0 : r.dispose) == null || n.call(r);
  },
  previewNode(e) {
    var t, r;
    (r = (t = e.runtime) == null ? void 0 : t.teardown) == null || r.call(t);
  },
  mediaCache(e) {
    var t, r, n, i;
    e.linkedImages.forEach((o) => {
      Dc(o == null ? void 0 : o.img), Dc(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), Dc((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function H_(e, t) {
  const r = Ql(e, t);
  if (r)
    try {
      j_[t](r);
    } finally {
      delete As.get(e)[t];
    }
}
function G_(e) {
  for (const t of Object.keys(Fg))
    try {
      H_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && As.delete(e);
}
function wi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function K_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function pp(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = K_(e == null ? void 0 : e.graph, r)), n;
}
function W_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function U_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function B_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Rg({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (C) => {
    if (!C) return "";
    if (typeof C == "string") return String(C || "").trim();
    if (Array.isArray(C)) {
      if (C.length === 0) return "";
      if (C.length === 1) return i(C[0]);
      const B = String(C[0] || "").trim();
      if (B)
        return wi(t, {
          filename: B,
          subfolder: String(C[1] || "").trim(),
          type: String(C[2] || "output").trim() || "output"
        });
      for (const R of C) {
        const J = i(R);
        if (J) return J;
      }
      return "";
    }
    return typeof (C == null ? void 0 : C.src) == "string" && C.src ? C.src : typeof (C == null ? void 0 : C.url) == "string" && C.url ? C.url : wi(t, C);
  }, o = (C) => {
    if (!C || typeof C != "object") return "";
    const B = String(C.type || "").trim().toLowerCase();
    if (B === "dataurl") return String(C.value || "");
    if (B !== "comfy_image") return "";
    const R = String(C.filename || "").trim();
    return R ? wi(t, {
      filename: R,
      subfolder: String(C.subfolder || ""),
      type: String(C.storage || "input")
    }) : "";
  }, s = (C) => {
    const B = e == null ? void 0 : e.nodeOutputs;
    if (!B || C == null) return null;
    const R = String(C);
    return B instanceof Map ? B.get(C) || B.get(R) || B.get(Number(R)) || null : B[C] || B[R] || null;
  }, a = (C, B) => {
    var J;
    const R = s(C == null ? void 0 : C.id);
    return Array.isArray((J = R == null ? void 0 : R.ui) == null ? void 0 : J[B]) ? R.ui[B] : Array.isArray(R == null ? void 0 : R[B]) ? R[B] : [];
  }, l = (C, B) => {
    const R = s(C == null ? void 0 : C.id);
    return R != null && R.ui && Object.prototype.hasOwnProperty.call(R.ui, B) ? R.ui[B] : R && Object.prototype.hasOwnProperty.call(R, B) ? R[B] : null;
  }, c = (C, B) => {
    const R = l(C, "pano_sticker_input_state_hash"), J = Array.isArray(R) ? R[0] : R;
    return String(J ?? "").trim() || B_(B);
  }, d = (C) => {
    const B = [], R = /* @__PURE__ */ new Set();
    for (const J of C || []) {
      const _e = i(J);
      !_e || R.has(_e) || (R.add(_e), B.push(_e));
    }
    return B;
  }, u = (C, B) => {
    var _e;
    const R = [];
    Array.isArray(C == null ? void 0 : C.images) && C.images.length && R.push(C.images), Array.isArray((_e = C == null ? void 0 : C.ui) == null ? void 0 : _e.images) && C.ui.images.length && R.push(C.ui.images);
    const J = [];
    for (const ke of R)
      B >= 0 && B < ke.length && J.push(ke[B]), J.push(...ke);
    return J;
  }, f = (C, B) => {
    var Z;
    const R = String(B || "").trim();
    if (!R) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : []).findIndex((U) => String((U == null ? void 0 : U.name) || "") === R);
    if (_e < 0) return { src: "", sourceType: "", inputName: R };
    const ke = C.graph ? C.getInputLink(_e) : null;
    if ((ke == null ? void 0 : ke.origin_id) == null) return { src: "", sourceType: "", inputName: R };
    const ge = ke.origin_id, Se = pp(C, _e, ge);
    if (!Se) return { src: "", sourceType: "", inputName: R };
    const pe = Number(ke.origin_slot ?? 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(Se) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const U = [];
      pe >= 0 && pe < fe.length && U.push(fe[pe]), U.push(...fe);
      const P = d(U.filter((he) => !$a(he)));
      if (P.length)
        return { src: P[0], srcCandidates: P, sourceType: "appNodeImageUrls", inputName: R };
    }
    const de = s((Se == null ? void 0 : Se.id) ?? ge), re = d(u(de, pe).filter((U) => !$a(U))).map((U) => `${U}&pano_src=${ku(de)}`);
    if (re.length)
      return { src: re[0], srcCandidates: re, sourceType: "nodeOutputs", inputName: R };
    const ye = Array.isArray(Se == null ? void 0 : Se.imgs) ? Se.imgs : [];
    if (ye.length) {
      const U = [];
      pe >= 0 && pe < ye.length && U.push(ye[pe]), U.push(...ye);
      const P = d(U);
      if (P.length)
        return { src: P[0], srcCandidates: P, sourceType: "nodeImgs", inputName: R };
    }
    const ce = (Z = Se == null ? void 0 : Se.widgets) == null ? void 0 : Z.find((U) => String((U == null ? void 0 : U.name) || "").toLowerCase() === "image");
    if (ce) {
      let U = i(ce.value);
      if (U && !U.includes("/") && !U.includes(":") && (Se.comfyClass === "LoadImage" || Se.type === "LoadImage") && (U = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(U)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(U)}&type=input&subfolder=`), U) return { src: U, sourceType: "widget", inputName: R };
    }
    return { src: "", sourceType: "", inputName: R };
  }, p = (C, B = []) => {
    var J;
    const R = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : [];
    for (const _e of B) {
      const ke = R.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === _e), ge = ke >= 0 && C.graph ? C.getInputLink(ke) : null;
      if ((ge == null ? void 0 : ge.origin_id) == null) continue;
      const Se = s(((J = pp(C, ke, ge.origin_id)) == null ? void 0 : J.id) ?? ge.origin_id), pe = (Array.isArray(Se == null ? void 0 : Se.images) ? Se.images : []).find($a);
      return pe ? `${wi(t, pe)}&pano_src=${ku(Se)}` : "";
    }
    return "";
  }, v = (C, B = []) => {
    const R = Array.isArray(B) ? B : [B];
    for (const J of R) {
      const _e = f(C, J);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (C) => {
    const B = String(C || "").trim();
    if (!B) return [];
    if (W_(B)) return [B];
    const { filename: R, subfolder: J } = U_(B);
    return R ? d([
      wi(t, { filename: R, subfolder: J, type: "temp" }),
      wi(t, { filename: R, subfolder: J, type: "output" }),
      wi(t, { filename: R, subfolder: J, type: "input" }),
      B
    ]) : [B];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (C) => {
      var B;
      try {
        (B = Cn(C)) == null || B.linkedImages.forEach((R, J, _e) => {
          var ke;
          R != null && R.img && ((ke = n == null ? void 0 : n.isImageLoadFailed) != null && ke.call(n, R.img)) && _e.delete(J);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (C, B) => {
      var R;
      (R = C == null ? void 0 : C.delete) == null || R.call(C, `__ui__${String(B || "")}`);
    },
    linkedValue: (C, B) => {
      var ge, Se, pe, fe;
      const R = String(B || ""), J = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs.findIndex((de) => String((de == null ? void 0 : de.name) || "") === R) : -1, _e = J >= 0 && C.graph ? C.getInputLink(J) : null;
      if (_e) {
        const de = s(_e.origin_id), re = [
          de == null ? void 0 : de.output,
          de == null ? void 0 : de.result,
          (ge = de == null ? void 0 : de.data) == null ? void 0 : ge.output,
          (Se = de == null ? void 0 : de.data) == null ? void 0 : Se.result,
          (pe = de == null ? void 0 : de.ui) == null ? void 0 : pe.output,
          (fe = de == null ? void 0 : de.ui) == null ? void 0 : fe.result
        ];
        for (const ye of re) {
          if (!Array.isArray(ye)) continue;
          const ce = ye[Number(_e.origin_slot || 0)];
          if (typeof ce == "string" && ce.trim()) return ce;
        }
      }
      const ke = Array.isArray(C == null ? void 0 : C.widgets) ? C.widgets.find((de) => String((de == null ? void 0 : de.name) || "") === R) : null;
      return String((ke == null ? void 0 : ke.value) || "");
    },
    linkedVideoFile: p,
    loadPreferredExactLinkedImage: (C, B = [], R = null, J = "") => {
      var I;
      const _e = Array.isArray(B) ? B : [B], ke = v(C, _e), Se = (Array.isArray(ke == null ? void 0 : ke.srcCandidates) && ke.srcCandidates.length ? ke.srcCandidates : [ke == null ? void 0 : ke.src]).map((k) => String(k || "").trim()).filter(Boolean);
      if (!Se.length) return null;
      const pe = d(Se.flatMap((k) => g(k)));
      if (!pe.length) return null;
      const fe = Cn(C).linkedImages, de = String(J || _e.join("|") || "image_exact"), re = Se.join(`
`), ye = fe.get(de);
      if (ye && ye.srcRaw === re && ye.img) return ye.img;
      const ce = r || globalThis.Image;
      if (typeof ce != "function") return null;
      const Z = new ce();
      (I = n == null ? void 0 : n.markImageLoading) == null || I.call(n, Z, re);
      const U = { srcRaw: re, resolvedSrc: "", img: Z };
      fe.set(de, U);
      let P = -1;
      const he = (k) => {
        var x, se, Q;
        k === "ready" ? (x = n == null ? void 0 : n.markImageReady) == null || x.call(n, Z, re) : (se = n == null ? void 0 : n.markImageFailed) == null || se.call(n, Z, re), R == null || R(Z), (Q = C.setDirtyCanvas) == null || Q.call(C, !0, !0);
      }, A = () => {
        if (P += 1, P >= pe.length) {
          he("failed");
          return;
        }
        U.resolvedSrc = pe[P], Z.src = U.resolvedSrc;
      };
      return Z.onload = () => he("ready"), Z.onerror = () => {
        if (P + 1 < pe.length) {
          A();
          return;
        }
        he("failed");
      }, A(), Z;
    },
    output: s,
    resolvePreferredExactLinkedSource: v,
    source: i,
    uiImage: (C, B, R, J = null) => {
      var de, re, ye;
      const _e = a(C, B)[0] || null, ke = i(_e);
      if (!ke) return null;
      const ge = `__ui__${B}`, Se = (de = R == null ? void 0 : R.get) == null ? void 0 : de.call(R, ge);
      if (Se && Se.__panoSrc === ke) return Se;
      const pe = r || globalThis.Image;
      if (typeof pe != "function") return null;
      const fe = new pe();
      return fe.__panoSrc = ke, (re = n == null ? void 0 : n.markImageLoading) == null || re.call(n, fe, ke), fe.onload = () => {
        var ce;
        (ce = n == null ? void 0 : n.markImageReady) == null || ce.call(n, fe, ke), J == null || J(fe);
      }, fe.onerror = () => {
        var ce;
        (ce = n == null ? void 0 : n.markImageFailed) == null || ce.call(n, fe, ke), J == null || J(fe);
      }, fe.src = ke, (ye = R == null ? void 0 : R.set) == null || ye.call(R, ge, fe), fe;
    },
    uiList: a,
    uiValue: l
  };
}
function Lg({
  readState: e,
  reduce: t,
  projectModel: r,
  publishLiveState: n = () => {
  },
  commitState: i,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof r != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let s = null, a = !1, l = !1;
  const c = () => s || e(), d = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || s ? !1 : (s = e(), a = !1, d(), !0);
    },
    updateGesture(u) {
      if (l) return !1;
      s || this.beginGesture();
      const f = t(s, u);
      return f.changed ? (s = f.state, a = !0, n(s), d(), !0) : !1;
    },
    hasGestureChanges() {
      return s != null && a;
    },
    commitGesture() {
      if (l || !s) return !1;
      const u = a;
      return u && i(s), s = null, a = !1, n(null), d(), u;
    },
    cancelGesture() {
      return l || !s ? !1 : (s = null, a = !1, n(null), d(), !0);
    },
    apply(u) {
      if (l) return !1;
      s && this.commitGesture();
      const f = t(e(), u);
      return f.changed ? (i(f.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const u = s != null;
      s = null, a = !1, u && n(null);
    }
  };
}
const So = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, Y_ = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Vg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !So[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: fi(t.fps) };
}
function ri(e) {
  return structuredClone(e);
}
function q_(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function X_(e, t, r) {
  const n = e.fps ?? t;
  if (n === t) return e.lanes;
  const i = r.start - r.in, o = Math.floor(i * n / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / n + 0.5) - i }))
  }]));
}
function zd(e, t, r) {
  const n = X_(r, e.timeline.fps, t.clip);
  let i;
  if (t.placement === r.placement) {
    i = { ...t };
    for (const o of So[r.placement]) t.handoff_overrides.includes(o) || (i[o] = n[o]);
  } else
    i = { ...Object.fromEntries(Y_.map((o) => [o, t[o]])), placement: r.placement, ...n }, r.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return ri(An({ version: 2, stickers: [i] }).stickers[0]);
}
function J_(e, t) {
  const r = e.stickers.findIndex((n) => n.source.kind === "port");
  return !t || r < 0 ? e : { ...e, stickers: e.stickers.map((n, i) => i === r ? zd(e, n, t) : n) };
}
function Z_(e, t) {
  const r = So[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const n = r.filter((i) => !q_(e[i], t[i]));
  if (n.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...n]);
    e.handoff_overrides = [...r, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function Q_(e, t) {
  if (!t || t.id !== e.id) return ri(e);
  if (e.placement === t.placement) {
    const n = ri(e);
    for (const i of So[e.placement]) e.handoff_overrides.includes(i) || (n[i] = ri(t[i]));
    return n;
  }
  if (e.handoff_overrides.some((n) => So[e.placement].includes(n))) return ri(e);
  const r = ri(t);
  for (const n of ["clip", "visible", "locked", "crop", "opacity"]) r[n] = ri(e[n]);
  return r;
}
function ew(e, t, r, n) {
  return !t.handoff_overrides.includes(n) || t.placement !== r.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== n), t[n] = ri(zd(e, t, r)[n]), !0);
}
const za = "sticker_image_1", $g = "external_image", _o = 0;
function ja(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Rc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function li(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function xu(e, t = _o) {
  return (e == null ? void 0 : e.version) !== 2 ? li(e) : li(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Wr(r, t).active,
    external: r.source.kind === "port",
    ...Ad(r, t)
  }));
}
function jd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && li(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function zg(e) {
  return String((e == null ? void 0 : e.id) || "") === za || String((e == null ? void 0 : e.source_kind) || "") === $g;
}
function Hd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : zg(t);
}
const jg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Hg(e) {
  return !zg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(jg.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Gg(e) {
  const t = Hg(e);
  return t ? jg.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Kg(e, t = {}) {
  var te, C, B;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((R) => String((R == null ? void 0 : R.id) || "") === za);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const R = String(((te = e.active) == null ? void 0 : te.selected_sticker_id) || "") === za;
    return {
      state: {
        ...e,
        stickers: r.filter((J, _e) => _e !== n),
        active: R ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), p = t.pose && typeof t.pose == "object" ? t.pose : {}, v = a ? p.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || p.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(v)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const R = ja(g, u, f), J = Number(((C = s == null ? void 0 : s.initial_pose) == null ? void 0 : C.hFOV_deg) ?? g), _e = ja(J, u, f), ke = Number(((B = s == null ? void 0 : s.initial_pose) == null ? void 0 : B.vFOV_deg) ?? _e);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - R) <= 1e-6 && Math.abs(ke - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((ge, Se) => Se === n ? {
          ...ge,
          vFOV_deg: R,
          initial_pose: ge.initial_pose && typeof ge.initial_pose == "object" ? { ...ge.initial_pose, vFOV_deg: _e } : ge.initial_pose
        } : ge)
      },
      changed: !0
    };
  }
  const h = r.reduce((R, J) => Math.max(R, Number((J == null ? void 0 : J.z_index) || 0)), -1), y = {
    yaw_deg: Number(p.yaw_deg || 0),
    pitch_deg: Number(p.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? ja(g, u, f) : Number(p.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(p.rot_deg ?? p.roll_deg ?? 0)
  }, W = {
    ...s || {},
    id: za,
    source_kind: $g,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: h + 1
  }, H = n >= 0 ? r.map((R, J) => J === n ? W : R) : [...r, W];
  return { state: { ...e, stickers: H }, changed: !0 };
}
function Sl(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const tw = ["IMAGE", "VIDEO"];
function hp(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => tw.includes(r)) ? "2d" : null;
}
function nw(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? hp(n.type) ?? hp((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Wg(e, { pose: t = null, handoff: r = null } = {}) {
  return {
    connected: Sl(e, "sticker"),
    awaitingPose: !t && (Sl(e, "sticker_state") || nw(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!r
  };
}
function Ug(e) {
  return Sl(e, "sticker") && Sl(e, "sticker_state");
}
function rw(e, t) {
  return Ug(e) ? Vg(t) : null;
}
function iw(e, t, r) {
  return J_(Xm(e, t), Vg(r));
}
function mp(e, t, r = {}) {
  const n = t.keyframes ?? {}, i = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: n.position ?? [] },
    rotation: { value: t.rotation, keyframes: n.rotation ?? [] },
    scale: { value: t.scale, keyframes: n.scale ?? [] }
  };
  return An({ version: 2, stickers: [i] }).stickers[0];
}
function Bg(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((p) => Hd(e, p)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((v, g) => g !== o),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky" && !i) {
    const p = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), v = mp(s.id, n, p);
    return { state: { ...e, stickers: e.stickers.map((g, h) => h === o ? v : g) }, changed: !0 };
  }
  if (s || r) return { state: e, changed: !1 };
  const a = { ...e }, l = Jl(a);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, mp(l, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), d = Id(l, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, li(e).reduce((p, v) => Math.max(p, v.z_index), -1) + 1), u = (n == null ? void 0 : n.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: p.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Gd(e) {
  const t = li(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Rc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Rc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Rc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function Yg(e) {
  const t = jd(e), r = Hd(e, t), n = li(e).some((a) => a && a.visible !== !1), i = Gd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Gg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function ow(e) {
  var t, r;
  return {
    ...e,
    stickers: (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).map((n) => ({ ...n })),
    painting: {
      ...(e == null ? void 0 : e.painting) || {},
      groups: (Array.isArray((t = e == null ? void 0 : e.painting) == null ? void 0 : t.groups) ? e.painting.groups : []).map((n) => ({ ...n })),
      raster_objects: (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.raster_objects) ? e.painting.raster_objects : []).map((n) => ({ ...n }))
    }
  };
}
function gp(e, t) {
  const r = jd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = ow(e), i = String(r.id || ""), o = Gd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function sw(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function aw(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Kg(e, t.value);
  if (t.type === "sync-port") return Bg(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Gd(e).reduce((f, p) => Math.max(f, Number(p.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: ja(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, p = Jl(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Id(p, Ra(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: p }
        },
        changed: !0
      };
    }
    const u = { id: o, asset_id: s, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [s]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], u],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !li(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = jd(e);
  if (!r) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = r.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, locked: i } : o)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = Hg(r);
    return !i || !Gg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return gp(e, "front");
  if (t.type === "send-back") return gp(e, "back");
  if (t.type === "delete-selected") {
    if (Hd(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = li({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = sw(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Ad(r, _o) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = OS(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Zm(c, _o, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === r ? { ...l, ...a } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function lw(e = {}) {
  return Lg({
    ...e,
    reduce: aw,
    projectModel: Yg
  });
}
const Ha = 2;
function Ni(e, t) {
  return Math.floor(e * t + 0.5);
}
function cw(e, t) {
  return Math.floor(e * t + 1e-3);
}
function qg({ video: e, clock: t, fps: r, span: n, loop: i, place: o = () => null, onFrame: s, onCapture: a, onChange: l }) {
  let c = 0, d = !1, u = !1, f = { name: "idle" }, p = [];
  const v = () => d && !u, g = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function h() {
    for (const A of p) A();
    p = [];
  }
  function y(A, I = {}) {
    return h(), f = { name: A, ...I }, l(), f;
  }
  function W(A, I, k) {
    const x = () => {
      f === A && k();
    };
    e.addEventListener(I, x), p.push(() => e.removeEventListener(I, x));
  }
  function H(A, I) {
    let k = t.requestFrame(function x(se) {
      f === A && (I(se), f === A && (k = t.requestFrame(x)));
    });
    p.push(() => t.cancelFrame(k));
  }
  function te(A) {
    c = A, s(c);
  }
  function C() {
    return y(u ? "error" : "idle");
  }
  const B = () => {
    var A;
    return ((A = o()) == null ? void 0 : A.origin) ?? 0;
  }, R = (A) => (A - B()) / r();
  function J(A) {
    const { start: I = 0, end: k = 1 / 0 } = o() ?? {};
    return A >= I && A < k && !(R(A) >= Number(e.duration));
  }
  function _e() {
    u = !0, C();
  }
  function ke() {
    const { seekable: A } = e, I = A != null && A.length ? A.end(A.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(R(c), Number.isFinite(I) ? I : 1 / 0));
  }
  function ge(A) {
    if (!v()) return A === "play" ? re() : C();
    if (e.readyState < Ha && !e.seeking) {
      const I = y("loading", { then: A });
      return W(I, "loadeddata", () => ge(I.then)), W(I, "error", _e), I;
    }
    return A === "play" && !J(c) ? re() : o() && !J(c) ? C() : Se(A, !1);
  }
  function Se(A, I) {
    const k = ke(), x = Ni(Number(e.currentTime), r()) === Ni(k, r());
    if (!e.ended && !e.seeking && x) return pe(A);
    const se = y("seeking", { then: A, target: k, retried: I });
    return W(se, "seeked", () => {
      const Q = Ni(Number(e.currentTime), r()) === Ni(ke(), r()), E = ke() === se.target;
      Q || E && se.retried ? pe(se.then) : Se(se.then, E);
    }), W(se, "error", _e), e.seeking && x || (e.currentTime = k), se;
  }
  function pe(A) {
    return A === "play" ? fe() : (a(), C());
  }
  function fe() {
    const A = y("playingVideo", { shown: !1 });
    if (W(A, "pause", () => e.ended ? de() : Z()), W(A, "ended", de), W(A, "error", _e), i() && !o() && Ni(Number(e.duration), r()) >= n()) {
      const k = e.loop;
      e.loop = !0, p.push(() => {
        e.loop = k;
      });
    }
    const I = (k, x) => {
      x && !A.shown && (A.shown = !0, l()), ye(Ni(k + B() / r(), r()));
    };
    if (g()) {
      let k = e.requestVideoFrameCallback(function x(se, Q) {
        f === A && (I(Number(Q.mediaTime), !0), f === A && (k = e.requestVideoFrameCallback(x)));
      });
      p.push(() => {
        var x;
        return (x = e.cancelVideoFrameCallback) == null ? void 0 : x.call(e, k);
      });
    } else
      H(A, () => I(Number(e.currentTime), e.readyState >= Ha));
    return Promise.resolve(e.play()).catch(() => {
      f === A && Z();
    }), A;
  }
  function de() {
    a(), re();
  }
  function re() {
    var k;
    const A = y("playingClock", { startTs: t.now(), startFrame: c }), I = ((k = o()) == null ? void 0 : k.start) ?? 0;
    return v() && c < I && e.readyState >= Ha && (e.currentTime = Math.max(0, R(I))), H(A, (x) => ye(A.startFrame + Math.floor((x - A.startTs) / 1e3 * r()))), A;
  }
  function ye(A) {
    if (A < n()) {
      if (o() && f.name === "playingVideo" && !J(A)) {
        h(), e.pause(), te(A), re();
        return;
      }
      te(A), o() && f.name === "playingClock" && v() && J(A) && ge("play");
      return;
    }
    if (!i() || n() <= 1) {
      ce(n() - 1);
      return;
    }
    f.name === "playingVideo" && (h(), e.pause()), te(0), ge("play");
  }
  function ce(A) {
    f.name === "playingVideo" ? (h(), e.pause(), te(Math.max(0, A)), a()) : te(Math.max(0, A)), ge("still");
  }
  function Z() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", l();
    else if (f.name === "playingVideo") {
      h(), e.pause();
      const A = cw(Number(e.currentTime) + B() / r(), r());
      te(Math.min(A, n() - 1)), a(), c === A ? C() : ge("still");
    } else f.name === "playingClock" && ce(Math.min(c, n() - 1));
  }
  function U() {
    if (!(he() || n() <= 1)) {
      if (c >= n() - 1 && te(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", l();
        return;
      }
      ge("play");
    }
  }
  function P(A) {
    const I = Math.max(0, Math.min(Math.round(A), n() - 1));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", te(I), l();
      return;
    }
    f.name === "playingVideo" && (h(), e.pause()), te(I), ge("still");
  }
  function he() {
    return f.name === "playingVideo" || f.name === "playingClock" || f.then === "play";
  }
  return {
    get frame() {
      return c;
    },
    get state() {
      return f.name;
    },
    get playing() {
      return he();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return f.name === "playingVideo" || f.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return f.name === "playingVideo" && f.shown;
    },
    play: U,
    stop: Z,
    seek: P,
    toggle() {
      he() ? Z() : U();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(A) {
      h(), d = !!A, u = !1, ge("still");
    },
    dispose() {
      h(), d = !1, f = { name: "idle" };
    }
  };
}
function Kd({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(g) {
    a = g, t();
  }
  function d(g) {
    s = g, e.currentTime = g;
  }
  function u() {
    const g = l;
    f(), l !== g && r();
  }
  function f() {
    if (!n || i || e.readyState < Ha) return;
    const { time: g, playing: h, fps: y } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const W = Number(e.duration), H = Number.isFinite(W) ? Math.min(g, W) : g, te = Math.abs(Number(e.currentTime) - H) > 1.5 / y;
      if (e.ended && !te) return;
      te && d(H), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === g) && (Number(e.currentTime) === g ? c(g) : d(g));
  }
  const p = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const g = s;
      s = null, !o.playing && g === o.time ? c(g) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [g, h] of Object.entries(p)) e.addEventListener(g, h);
  function v(g) {
    n = g, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: h = null, playing: y = !1, fps: W }) {
      g !== n && (v(g), r()), o = { time: h, playing: y, fps: W }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, h) {
      return !n || i ? h : o.time === null ? null : o.playing && l ? e : a === null ? h : g;
    },
    dispose() {
      for (const [g, h] of Object.entries(p)) e.removeEventListener(g, h);
      v("");
    }
  };
}
function Ga(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function uw({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const p = /* @__PURE__ */ new Set();
  let v = null, g = null, h = {};
  const y = () => i().timeline.fps, W = (fe) => fe.stickers.find((de) => de.source.kind === "port"), H = () => h.bg !== void 0 ? h.bg : d && f > 0 ? { video: !0, frames: Math.round(f * y()), duration: f } : null, te = () => h.bg === null ? h.upstreamClip ?? null : i().background.clip, C = () => Pd(i(), {
    ...h,
    bg: H(),
    port: (v == null ? void 0 : v.meta) ?? h.port ?? null,
    camera: c
  }), B = qg({
    video: e,
    clock: n,
    fps: y,
    span: C,
    loop: () => !0,
    place: () => {
      const fe = te();
      return fe ? $m(fe) : null;
    },
    onFrame: o,
    onCapture: s,
    onChange: l
  }), R = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, J = () => {
    u && (p.add(u), l());
  }, _e = Kd({ video: t, onCapture: a, onChange: l }), ke = Nd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", R), e.addEventListener("error", J);
  function ge(fe) {
    fe !== u && (u = fe, e.pause(), fe ? e.src = fe : e.removeAttribute("src"), e.load(), B.setSource(!!fe));
  }
  function Se() {
    B.playing && B.stop();
  }
  function pe(fe) {
    const de = W(fe);
    g = v && de ? wd(de.clip, B.frame, fe.timeline.fps, v.meta) : null, _e.follow({
      src: (v == null ? void 0 : v.src) || "",
      time: g,
      playing: B.advancing,
      fps: fe.timeline.fps
    });
  }
  return {
    get frame() {
      return B.frame;
    },
    get playing() {
      return B.playing;
    },
    get showsVideo() {
      return B.showsVideo;
    },
    get source() {
      return u;
    },
    // Whether the background shows at the playhead (backgroundShownAt); where it does not, the surface shows
    // bg_color, as the node's output does.
    get backgroundShows() {
      const fe = te();
      return h.bg === null ? !fe || mu(fe, B.frame, y(), h.upstreamMedia ?? null, !0) : !fe || mu(fe, B.frame, y(), H(), !!h.upstream);
    },
    pause: Se,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return v;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(fe, de) {
      return v != null && v.frames ? ke.picture(v.frames, g, v.meta, de) : _e.picture(fe, de);
    },
    toggle() {
      B.playing ? B.stop() : B.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. `media` is
    // what the node's result gives autoTimelineLength of its inputs ({ bg, port, sceneItems, upstream }; `bg`
    // left out while no result gives it, null when an upstream background stands in, which `upstreamClip`
    // places and `upstreamMedia` ({ video, frames, duration } of its MP4) ends). Out of sight, the node pauses and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: fe, sources: de, state: re, sticker: ye = null, media: ce = {} }) {
      if (v = fe ? ye : null, h = ce, !fe)
        return Se(), ge(""), pe(re), !1;
      for (const A of p)
        de.includes(A) || p.delete(A);
      const Z = de.find((A) => A && !p.has(A)) || "", U = Z !== d;
      U && (d = Z, f = 0), ge(d);
      const P = Um(re, { camera: c }) || !!d && B.state !== "error" || !!v;
      return P || Se(), (U || !P || !B.playing && B.frame >= C()) && B.frame !== _o && B.seek(_o), pe(re), P;
    },
    dispose() {
      B.dispose(), _e.dispose(), e.removeEventListener("loadedmetadata", R), e.removeEventListener("error", J), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
function dw(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : Lm(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
  let o = Object.keys(r.scene).length > 0 || Object.hasOwn(r, "painting_visible");
  const s = [];
  for (const a of e.stickers) {
    if (n.has(a.id)) {
      o = !0;
      continue;
    }
    const l = i.get(a.id);
    l !== void 0 && l.placement === a.placement ? (s.push({ ...a, ...l }), o = !0) : s.push(a);
  }
  return o ? {
    ...e,
    scene: { ...e.scene, ...r.scene },
    stickers: s,
    painting_visible: Object.hasOwn(r, "painting_visible") ? r.painting_visible : e.painting_visible,
    upstream: []
  } : e;
}
const Xg = "PANO_SCENE";
function Jg(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: An(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function Wd(e) {
  if (!e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length) return null;
  const t = e("pano_upstream_bg_color")[0], r = e("pano_upstream_bg_clip")[0], n = An({ version: 2, background: { clip: r == null ? void 0 : r.clip } }).background.clip;
  return {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: $n(e("pano_upstream_coverage")[0]),
    color: Array.isArray(t) && t.length === 3 ? `#${t.map((i) => Math.round(Math.min(1, Math.max(0, Number(i) || 0)) * 255).toString(16).padStart(2, "0")).join("")}` : null,
    clip: No(n) || !(Number(r == null ? void 0 : r.fps) > 0) ? null : { clip: n, fps: Number(r.fps) }
  };
}
const fw = "bg_media is not used";
function pw(e, t) {
  return e === Xg && t === null;
}
function hw(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Tn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function Zg(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function Qg(e, t, r) {
  const n = Zg(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((p) => p.layer === i.id) ?? null : null, c = dw(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Po(u, r), painting: d };
    for (const p of f.stickers)
      p.origin = { layer: n[s], id: p.id }, p.id = Ud(n[s], p.id);
    return { key: n[s], sceneState: f, ui: o, received: i };
  });
}
function Ud(e, t) {
  return `upstream:${e}:${t}`;
}
function Mu(e, t) {
  return Ud(e, t);
}
function Ut(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function _l(e) {
  return Cs(e.origin.layer);
}
function Cs(e) {
  return !e.startsWith("#");
}
function e0(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? hi : pi).map(([n]) => n), ...t ? [] : ["z_index"]];
}
function mw(e) {
  return Object.fromEntries(e0(e).map((t) => [t, JSON.stringify(e[t])]));
}
function t0(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function Bd(e) {
  return `layer:${e}`;
}
function yp(e) {
  return new Map(e.flatMap(({ key: t, sceneState: r }) => [
    [Bd(t), t0(r)],
    ...r.stickers.map((n) => [n.id, mw(n)])
  ]));
}
function gw(e, t, r, n, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = Lm(o[d], u.timeline.fps === i ? u : Po(u, i));
    }
    return d;
  };
  return r.forEach(({ key: l, sceneState: c }, d) => {
    if (!Cs(l)) return;
    const u = n.get(Bd(l));
    if (u) {
      const f = t0(c), p = ["visible", "clip"].filter((v) => f[v] !== u[v]);
      if (p.length) {
        const v = a(l, d), g = { ...o[v].scene };
        for (const h of p) g[h] = structuredClone(c.scene[h]);
        o[v] = { ...o[v], scene: g };
      }
      if (f.painting_visible !== u.painting_visible) {
        const v = a(l, d);
        o[v] = { ...o[v], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const p = n.get(f.id);
      if (!p) continue;
      const v = e0(f).filter((te) => JSON.stringify(f[te]) !== p[te]);
      if (!v.length) continue;
      const g = a(l, d), { id: h } = f.origin, y = [...o[g].stickers], W = y.findIndex((te) => te.id === h), H = W >= 0 && y[W].placement === f.placement ? { ...y[W] } : { id: h, placement: f.placement };
      for (const te of v) H[te] = structuredClone(f[te]);
      W >= 0 ? y[W] = H : y.push(H), o[g] = { ...o[g], stickers: y };
    }
  }), s ? An({ version: 2, upstream: o }).upstream : e;
}
function yw(e, t, r) {
  const n = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!Cs(i)) return;
    const a = t.find((d) => d.layer === i), l = r.get(Bd(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && n.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((p) => p.id === d.origin.id && p.placement === d.placement && Object.hasOwn(p, "clip")), f = r.has(d.id) && r.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && n.push({ index: s, clip: d.clip, sticker: d });
    }
  }), n;
}
function n0(e, t, r, n, i, o = null) {
  return yw(e, t, r).flatMap(({ index: s, clip: a, sticker: l }) => {
    if (a.duration !== null && a !== o) return [a.start + a.duration];
    const c = (l == null ? void 0 : l.source.kind) === "port" ? n(s) : null;
    return c ? [kd({ ...a, duration: null }, i, c)] : [];
  });
}
function ec(e, t, r, n) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(n({ layer: t, fps: r, deleted: [], stickers: [], scene: {} })) : o[i] = n(o[i]), An({ version: 2, upstream: o }).upstream;
}
function bw(e, t, r) {
  return t.reduce((n, { layer: i, id: o }) => ec(n, i, r, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const vw = new Set([...pi, ...hi].map(([e]) => e));
function r0(e, { layer: t, id: r }) {
  var n;
  return ((n = e.find((i) => i.layer === t)) == null ? void 0 : n.stickers.find((i) => i.id === r)) ?? null;
}
function Sw(e, t, r = null) {
  const { origin: n } = t, i = r0(e, n);
  return !i || r !== null && !(vw.has(r) && i.placement === t.placement && Object.hasOwn(i, r)) ? e : ec(e, n.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== n.id) return [s];
      if (r === null) return [];
      const a = { ...s };
      return delete a[r], [a];
    })
  }));
}
function _w(e, t) {
  var n;
  const r = new Set((n = e.find((i) => i.layer === t.key)) == null ? void 0 : n.deleted);
  return t.received.stickers.filter((i) => r.has(i.id)).length;
}
function ww(e, t) {
  var r;
  return (r = e.find((n) => n.layer === t)) != null && r.deleted.length ? ec(e, t, null, (n) => ({ ...n, deleted: [] })) : e;
}
function i0(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function kw(e, t) {
  return i0(e.find((r) => r.layer === t)) ? ec(e, t, null, ({ painting_visible: r, ...n }) => ({ ...n, scene: {} })) : e;
}
function xw(e, t) {
  const r = Zg(t), n = new Map(t.flatMap(({ sceneState: s }, a) => r[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = n.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? An({ version: 2, upstream: o }).upstream : e;
}
function Mw(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a, received: l } = e, c = $s(s, r), d = (h) => h.visible ? n(h) : null, u = vg(s, r, { media: d, zIndex: (h) => h.z_index, paintLayers: i, evaluated: c }).map((h) => h.kind === "erp" ? { ...h, id: Ud(t, h.id) } : h), f = wg(s, r, s.stickers, { media: d, evaluated: c }), p = [], v = ml(Tn(a, "pano_scene_files"), Tn(a, "pano_scene_meta"), o);
  v && p.push({ slot: `${t}:scene`, urls: v.urls.filter(Boolean), request: Dd(v, c.scene), value: c.scene, opacity: 1 });
  const g = ml(Tn(a, "pano_sticker_files"), Tn(a, "pano_sticker_meta"), o);
  if (g) {
    const h = dg(g, s, c);
    p.push({ slot: `${t}:sticker`, urls: fg(g, l), request: h, value: (h == null ? void 0 : h.value) ?? null, opacity: (h == null ? void 0 : h.opacity) ?? 1 });
  }
  return { evaluated: c, sky: u, stickers: f, items: p };
}
const wl = Math.PI / 180, kr = 180 / Math.PI, Nw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Pw = 260;
function bp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function o0(e, t) {
  return t ? o0(t, e % t) : e;
}
function Aw(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = o0(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function Is(e, t) {
  const r = bp(e), n = bp(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: Aw(r, n) };
}
function Ti(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function s0(e) {
  const t = Ti(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Vr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Yd(e, t, r = Nw) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, y, W) => {
    const H = h + y, te = Math.max(0, W - 1), C = H > te && H > 0 ? te / H : 1;
    return [h * C, y * C];
  }, [d, u] = c(l, s, n), [f, p] = c(o, a, i), v = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - p)
  }, g = pd(v, t);
  return {
    x: v.x + (v.w - g.width) * 0.5,
    y: v.y + (v.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: v
  };
}
function Cw(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Yd({ width: r, height: n }, 1), o = Oe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * wl * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = bm(l, hm(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = Iw(c, xo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = hd({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function a0(e) {
  return {
    yaw: Kt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * kr),
    pitch: Oe(Math.asin(Oe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * kr, -89.9, 89.9)
  };
}
function Iw(e, t) {
  const r = a0(e), n = xo(r.yaw, r.pitch, 0), i = wc(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, s = Math.hypot(o.x, o.y, o.z);
  if (!(s > 1e-8)) return { ...r, roll: 0 };
  const a = {
    x: o.x / s,
    y: o.y / s,
    z: o.z / s
  };
  return {
    ...r,
    roll: Ul(Math.atan2(
      wc(a, n.up),
      wc(a, n.right)
    ) * kr)
  };
}
function l0(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Yd({ width: r, height: n }, zi(e)), o = Li(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = bm(e, hm(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = a0(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Oe(2 * Math.atan(r / (2 * o)) * kr, 1, 179)
  };
}
function Ew(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Li(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = md(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, p = n / i, v = Math.tan(au * wl), g = p >= 1 ? v : v * p, h = p >= 1 ? v / p : v;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * kr,
      vFOV_deg: 2 * Math.atan(d / a) * kr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(g) * kr,
        vFOV_deg: 2 * Math.atan(h) * kr
      }
    }
  };
}
function Xi(e, t) {
  const r = Ti(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = t(r);
  return !n || n === r ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((i) => i === r ? n : i)
    },
    changed: !0
  };
}
function Ow(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Li(r, e);
    return hd(pd(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Fa(o, t) };
}
function vp(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = Is(t, r);
  if (!o) return e;
  const s = zi(e) >= 1;
  n && o.ratio >= 1 !== s && (o = Is(o.height, o.width));
  const a = Ow(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function c0(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ti(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = mm({
      id: n,
      yawDeg: t.yawDeg,
      pitchDeg: t.pitchDeg,
      rollDeg: t.rollDeg,
      viewFovDeg: t.viewFovDeg,
      frameFovDeg: t.frameFovDeg
    });
    return {
      state: {
        ...e,
        shots: [i],
        active: { ...e.active || {}, selected_shot_id: n }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const n = Ti(e);
    if (!n) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((s) => s !== n), o = ((r = i[0]) == null ? void 0 : r.id) == null ? null : String(i[0].id);
    return {
      state: {
        ...e,
        shots: i,
        active: { ...e.active || {}, selected_shot_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Xi(e, (n) => vp(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Xi(e, (n) => {
      const o = String(Vr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? Is(o[1], o[2]) : Is(zi(n), 1);
      return s ? vp(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Xi(e, (i) => {
      const o = Ul(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Xi(e, (n) => {
    const i = gm(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Xi(e, (n) => {
    const i = ym(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Xi(e, (n) => {
    const i = f0(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function u0({
  frame: e,
  point: t,
  startRollDeg: r = 0,
  shiftKey: n = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: s = 0.05
} = {}) {
  const a = o && i ? "alt" : n ? "shift" : "";
  if (!a || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, c = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (a === "shift" && d < Math.min(l.w, l.h) * s) return null;
  const u = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: a,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: u,
    accumulatedRad: 0
  };
}
function d0(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + fm(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: pm(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function f0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * wl, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, p = d * c + u * l, v = Number(e.pitch_deg || 0) * wl, g = Math.max(0.25, Math.abs(Math.cos(v)));
  return {
    ...e,
    yaw_deg: Kt(Number(e.yaw_deg || 0) - Math.atan(f) / g * kr),
    pitch_deg: Oe(Number(e.pitch_deg || 0) - Math.atan(p) * kr, -90, 90)
  };
}
function Fw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Lg({
    readState: e,
    reduce: c0,
    projectModel: s0,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const We = Object.freeze({
  globe: "globe",
  pano: "pano",
  unwrap: "unwrap",
  camera: "camera",
  play: "play",
  pause: "pause",
  volume: "volume",
  volume2: "volume2",
  volume_muted: "volume_muted",
  loop: "loop",
  loop_off: "loop_off",
  cursor_tool: "cursor_tool",
  palette_tool: "palette_tool",
  circle_dashed_tool: "circle_dashed_tool",
  image: "image",
  plus_circle: "plus_circle",
  clear: "clear",
  undo: "undo",
  redo: "redo",
  reset: "reset",
  focus: "focus",
  eye: "eye",
  eye_dashed: "eye_dashed",
  fullscreen: "fullscreen",
  fullscreen_close: "fullscreen_close",
  chevron: "chevron",
  copy: "copy",
  bring_front: "bring_front",
  send_back: "send_back",
  duplicate: "duplicate",
  replace_image: "replace_image",
  back_initial: "back_initial",
  delete: "delete",
  lock_closed: "lock_closed",
  lock_open: "lock_open",
  aspect: "aspect",
  rotate_90: "rotate_90",
  roll: "roll",
  help: "help",
  pencil_tool: "pencil_tool",
  spray_can_tool: "spray_can_tool",
  highlighter_tool: "highlighter_tool",
  paintbrush_vertical_tool: "paintbrush_vertical_tool",
  eraser_tool: "eraser_tool",
  lasso_tool: "lasso_tool",
  keyframe: "keyframe",
  dof_3: "dof_3",
  dof_6: "dof_6",
  camera_plus: "camera_plus",
  box: "box"
}), Tw = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, Dw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Tw(t[2])
})), Rw = {
  globe: { name: "world", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' /><path d='M3.6 9h16.8' /><path d='M3.6 15h16.8' /><path d='M11.5 3a17 17 0 0 0 0 18' /><path d='M12.5 3a17 17 0 0 1 0 18' />" },
  pano: { name: "view-360", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' /><path d='M12 12m-4 0a4 9 0 1 0 8 0a4 9 0 1 0 -8 0' /><path d='M3 12c0 2.21 4.03 4 9 4s9 -1.79 9 -4s-4.03 -4 -9 -4s-9 1.79 -9 4z' />" },
  unwrap: { name: "panorama-horizontal", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.338 5.53c5.106 1.932 10.211 1.932 15.317 0a1 1 0 0 1 1.345 .934v11c0 .692 -.692 1.2 -1.34 .962c-5.107 -1.932 -10.214 -1.932 -15.321 0c-.648 .246 -1.339 -.242 -1.339 -.935v-11.027a1 1 0 0 1 1.338 -.935l0 .001' />" },
  camera: { name: "camera", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' /><path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />" },
  play: { name: "player-play", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 4v16l13 -8l-13 -8' />" },
  pause: { name: "player-pause", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12' /><path d='M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12' />" },
  volume: { name: "volume", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 8a5 5 0 0 1 0 8' /><path d='M17.7 5a9 9 0 0 1 0 14' /><path d='M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5' />" },
  volume2: { name: "volume-3", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5' /><path d='M16 10l4 4m0 -4l-4 4' />" },
  volume_muted: { name: "volume-off", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464' /><path d='M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615' /><path d='M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664' /><path d='M3 3l18 18' />" },
  loop: { name: "repeat", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3' /><path d='M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3' />" },
  loop_off: { name: "repeat-off", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3' /><path d='M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3' /><path d='M3 3l18 18' />" },
  cursor_tool: { name: "pointer", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563' />" },
  palette_tool: { name: "palette", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25' /><path d='M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /><path d='M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /><path d='M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />" },
  circle_dashed_tool: { name: "circle-dashed", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95' /><path d='M3.69 8.56a9 9 0 0 0 -.69 3.44' /><path d='M3.69 15.44a9 9 0 0 0 1.95 2.92' /><path d='M8.56 20.31a9 9 0 0 0 3.44 .69' /><path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95' /><path d='M20.31 15.44a9 9 0 0 0 .69 -3.44' /><path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92' /><path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69' />" },
  image: { name: "photo", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 8h.01' /><path d='M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12' /><path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' /><path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3' />" },
  plus_circle: { name: "circle-plus", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' /><path d='M9 12h6' /><path d='M12 9v6' />" },
  clear: { name: "trash", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' /><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' /><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />" },
  undo: { name: "arrow-back-up", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M9 14l-4 -4l4 -4' /><path d='M5 10h11a4 4 0 1 1 0 8h-1' />" },
  redo: { name: "arrow-forward-up", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 14l4 -4l-4 -4' /><path d='M19 10h-11a4 4 0 1 0 0 8h1' />" },
  reset: { name: "refresh", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4' /><path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4' />" },
  focus: { name: "focus-2", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0' fill='currentColor' /><path d='M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' /><path d='M12 3l0 2' /><path d='M3 12l2 0' /><path d='M12 19l0 2' /><path d='M19 12l2 0' />" },
  eye: { name: "eye", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' /><path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />" },
  eye_dashed: { name: "eye-off", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M10.585 10.587a2 2 0 0 0 2.829 2.828' /><path d='M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87' /><path d='M3 3l18 18' />" },
  fullscreen: { name: "maximize", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 8v-2a2 2 0 0 1 2 -2h2' /><path d='M4 16v2a2 2 0 0 0 2 2h2' /><path d='M16 4h2a2 2 0 0 1 2 2v2' /><path d='M16 20h2a2 2 0 0 0 2 -2v-2' />" },
  fullscreen_close: { name: "minimize", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 19v-2a2 2 0 0 1 2 -2h2' /><path d='M15 5v2a2 2 0 0 0 2 2h2' /><path d='M5 15h2a2 2 0 0 1 2 2v2' /><path d='M5 9h2a2 2 0 0 0 2 -2v-2' />" },
  chevron: { name: "chevron-down", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 9l6 6l6 -6' />" },
  copy: { name: "copy", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666' /><path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />" },
  bring_front: { name: "stack-front", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 4l-8 4l8 4l8 -4l-8 -4' /><path d='M8 14l-4 2l8 4l8 -4l-4 -2' /><path d='M8 10l-4 2l8 4l8 -4l-4 -2' />" },
  send_back: { name: "stack-back", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 8l8 4l8 -4l-8 -4l-8 4' /><path d='M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2' /><path d='M8 10l-4 2l4 2m8 0l4 -2l-4 -2' />" },
  duplicate: { name: "copy-plus", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666' /><path d='M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' /><path d='M11 14h6' /><path d='M14 11v6' />" },
  replace_image: { name: "replace", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' /><path d='M15 16a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' /><path d='M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3' /><path d='M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3' />" },
  back_initial: { name: "restore", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3.06 13a9 9 0 1 0 .49 -4.087' /><path d='M3 4.001v5h5' /><path d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />" },
  delete: { name: "trash", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' /><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' /><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />" },
  lock_closed: { name: "lock", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6' /><path d='M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0' /><path d='M8 11v-4a4 4 0 1 1 8 0v4' />" },
  lock_open: { name: "lock-open", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6' /><path d='M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /><path d='M8 11v-5a4 4 0 0 1 8 0' />" },
  aspect: { name: "aspect-ratio", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10' /><path d='M7 12v-3h3' /><path d='M17 12v3h-3' />" },
  rotate_90: { name: "rotate-clockwise-2", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5' /><path d='M5.63 7.16l0 .01' /><path d='M4.06 11l0 .01' /><path d='M4.63 15.1l0 .01' /><path d='M7.16 18.37l0 .01' /><path d='M11 19.94l0 .01' />" },
  roll: { name: "angle", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 19h16' /><path d='M6 17l11 -11' /><path d='M9 19a5 5 0 0 1 1.46 -3.54' />" },
  help: { name: "help", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 17l0 .01' /><path d='M12 13.5a2.5 2.5 0 1 0 -2.5 -2.5' /><path d='M12 13.5v.5' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />" },
  pencil_tool: { name: "pencil", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M13.5 6.5l4 4' />" },
  spray_can_tool: { name: "spray", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7' /><path d='M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4' /><path d='M15 7h.01' /><path d='M18 9h.01' /><path d='M18 5h.01' /><path d='M21 3h.01' /><path d='M21 7h.01' /><path d='M21 11h.01' /><path d='M10 7h1' />" },
  highlighter_tool: { name: "highlight", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M12.5 5.5l4 4' /><path d='M4.5 13.5l4 4' /><path d='M21 15v4h-8l4 -4l4 0' />" },
  paintbrush_vertical_tool: { name: "brush", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 21v-4a4 4 0 1 1 4 4h-4' /><path d='M21 3a16 16 0 0 0 -12.8 10.2' /><path d='M21 3a16 16 0 0 1 -10.2 12.8' /><path d='M10.6 9a9 9 0 0 1 4.4 4.4' />" },
  eraser_tool: { name: "eraser", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3' /><path d='M18 13.3l-6.3 -6.3' />" },
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" },
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" },
  // The 3DoF | 6DoF view modes (#71): the numerals 3 and 6, drawn in the Tabler stroke style.
  dof_3: { name: "rotate-360", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 16h4v4' /><path d='M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515' />" },
  dof_6: { name: "arrows-move", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 9l3 3l-3 3' /><path d='M15 12h6' /><path d='M6 9l-3 3l3 3' /><path d='M3 12h6' /><path d='M9 18l3 3l3 -3' /><path d='M12 15v6' /><path d='M15 6l-3 -3l-3 3' /><path d='M12 3v6' />" },
  // Add Camera (Panorama Studio, #89) and the `scene` row of the Timeline.
  camera_plus: { name: "camera-plus", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5' /><path d='M16 19h6' /><path d='M19 16v6' /><path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />" },
  box: { name: "box", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5' /><path d='M12 12l8 -4.5' /><path d='M12 12l0 9' /><path d='M12 12l-8 -4.5' />" }
}, Sp = Object.fromEntries(
  Object.entries(Rw).map(([e, t]) => [e, {
    name: t.name,
    elements: Dw(t.body)
  }])
), jt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Sp, n) ? Sp[n] : null;
    });
    return (n, i) => r.value ? (Le(), Ve("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: mt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Le(!0), Ve(Ze, null, Nt(r.value.elements, (o, s) => (Le(), Ve(Ze, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Le(), Ve("path", Tr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Le(), Ve("circle", Tr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Le(), Ve("rect", Tr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Le(), Ve("line", Tr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Le(), Ve("polyline", Tr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Le(), Ve("polygon", Tr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : lt("", !0)
      ], 64))), 128))
    ], 2)) : lt("", !0);
  }
}, nn = {
  __name: "PanoIconButton",
  props: {
    tag: { type: String, default: "button" },
    type: { type: String, default: "button" },
    icon: { type: String, default: "" },
    label: { type: String, default: "" },
    tip: { type: String, default: "" },
    pressed: { type: [String, Boolean], default: null },
    extraClass: { type: [String, Array, Object], default: "" },
    attrs: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Le(), Vn(pb(e.tag), Tr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Eh(() => [
        Ye(jt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Lw = ["aria-expanded", "disabled"], Vw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, $w = ["data-aspect", "disabled", "onClick"], zw = { class: "pano-cutout-aspect-custom" }, jw = ["disabled"], Hw = ["disabled"], Gw = ["data-custom-width", "data-custom-height", "disabled"], p0 = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), o = /* @__PURE__ */ Jt("1"), s = /* @__PURE__ */ Jt("1"), a = /* @__PURE__ */ Jt(null), l = ut(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = ut(() => {
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], h = String(r.model.aspectLabel || "");
      return g.length ? g.map((y) => {
        const W = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), H = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || W);
        return {
          ...typeof y == "object" && y ? y : {},
          value: W,
          label: H,
          active: h ? W === h : (y == null ? void 0 : y.active) === !0
        };
      }) : i.map((y) => ({
        ...y,
        active: y.value === h
      }));
    }), d = ut(() => {
      var h;
      const g = String(r.model.aspectLabel || "").trim();
      return g || String(((h = c.value.find((y) => y.active === !0)) == null ? void 0 : h.label) || "Aspect");
    });
    Ei(d, (g) => {
      const h = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      h && (o.value = h[1], s.value = h[2]);
    }, { immediate: !0 });
    function u(g) {
      n("action", g);
    }
    function f(g) {
      var h;
      r.model.aspectOpen === !0 && ((h = a.value) != null && h.contains(g.target) || u({ type: "close-aspect" }));
    }
    jl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Rs(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function p(g) {
      const [h, y] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: h,
        height: y,
        preserveOrientation: !0
      });
    }
    function v() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (g, h) => (Le(), Ve("div", {
      ref_key: "rootElement",
      ref: a,
      class: mt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Le(), Vn(nn, {
        key: 0,
        icon: e.model.aspectIcon || rt(We).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: h[0] || (h[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Le(), Ve("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: h[1] || (h[1] = (y) => u({ type: "toggle-aspect" }))
      }, [
        Ye(jt, {
          icon: e.model.aspectIcon || rt(We).aspect
        }, null, 8, ["icon"]),
        Ne("span", null, tt(d.value), 1),
        Ye(jt, {
          icon: rt(We).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Lw)),
      jr(Ne("div", Vw, [
        (Le(!0), Ve(Ze, null, Nt(c.value, (y) => (Le(), Ve("button", {
          key: y.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (W) => p(y)
        }, tt(y.label), 11, $w))), 128)),
        Ne("div", zw, [
          jr(Ne("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, jw), [
            [Gf, o.value]
          ]),
          h[4] || (h[4] = Ne("span", { "aria-hidden": "true" }, ":", -1)),
          jr(Ne("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (y) => s.value = y),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, Hw), [
            [Gf, s.value]
          ]),
          Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: v
          }, "Apply", 8, Gw)
        ])
      ], 512), [
        [Ri, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Kw = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Ww = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Le(), Ve("div", {
      class: mt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Mt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Mt(() => {
      }, ["stop"]))
    }, [
      Ye(nn, {
        icon: rt(We).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Mt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Kw, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Le(!0), Ve(Ze, null, Nt(rt(r), (o) => (Le(), Ve("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ne("kbd", null, tt(o[0]), 1),
          Ne("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Uw = {
  class: "pano-view-unavailable",
  role: "status"
}, tc = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Le(), Ve("div", Uw, tt(rt(kg)), 1));
  }
}, Bw = { class: "pano-cutout-node-surface" }, Yw = ["title", "disabled"], qw = { class: "value" }, Xw = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Jw = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function r(n) {
      var i;
      (i = t.onAction) == null || i.call(t, n);
    }
    return (n, i) => (Le(), Ve("div", Bw, [
      Ne("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Mt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Mt(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ye(jt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ye(nn, {
          icon: e.model.hasShot ? rt(We).delete : rt(We).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(p0, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Ne("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Mt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ye(jt, {
            icon: rt(We).roll
          }, null, 8, ["icon"]),
          Ne("span", qw, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Yw),
        Ye(nn, {
          icon: rt(We).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(Ww)
      ], 32),
      e.model.hasShot === !1 ? (Le(), Ve("div", Xw, " Choose a view · + Add Frame ")) : lt("", !0),
      e.model.viewUnavailable ? (Le(), Vn(tc, { key: 1 })) : lt("", !0)
    ]));
  }
}, h0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Jt(null);
    let o, s = !1;
    function a() {
      if (!s) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, s = !1, { active: !0, intent: u };
    }
    function l(u) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = u, s = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(u) {
      var g, h;
      const { active: f, intent: p } = a();
      if (!f) return;
      const v = ((h = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : h[0]) || null;
      if (v) {
        n("file-selected", { intent: p, file: v });
        return;
      }
      n("file-cancelled", { intent: p });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Le(), Ve("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: c,
      onCancel: d
    }, null, 544));
  }
}, Zw = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Qw = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
      ["Add Image", "Choose an image file"],
      ["Drop image", "Add at view center"],
      ["Sticker drag", "Move sticker"],
      ["Corner drag", "Scale sticker"],
      ["Top handle", "Rotate sticker"],
      ["Delete", "Delete selected sticker"],
      ["Restore", "Reset input sticker pose"],
      ["Empty drag", "Pan view"],
      ["Wheel", "Adjust FOV"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Le(), Ve("div", {
      class: mt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Mt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Mt(() => {
      }, ["stop"]))
    }, [
      Ye(nn, {
        icon: rt(We).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Mt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Zw, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Le(!0), Ve(Ze, null, Nt(rt(r), (o) => (Le(), Ve("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ne("kbd", null, tt(o[0]), 1),
          Ne("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, ek = { class: "pano-stickers-node-surface" }, tk = ["disabled"], nk = ["aria-label", "data-tip"], rk = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, ik = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, ok = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null);
    function n(s) {
      var a;
      (a = t.onAction) == null || a.call(t, s);
    }
    function i() {
      var s, a;
      (a = (s = r.value) == null ? void 0 : s.open) == null || a.call(s, "add");
    }
    function o(s) {
      n({ type: "add-image-file", file: (s == null ? void 0 : s.file) || null });
    }
    return (s, a) => (Le(), Ve("div", ek, [
      Ne("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = Mt(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = Mt(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ye(jt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Ye(jt, {
            icon: rt(We).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Ne("span", { class: "label" }, "Add Image", -1))
        ], 8, tk),
        Ye(nn, {
          icon: e.model.locked ? rt(We).lock_closed : rt(We).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ye(nn, {
          icon: rt(We).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(nn, {
          icon: rt(We).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(nn, {
          icon: e.model.isExternalSelection ? rt(We).back_initial : rt(We).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(Qw)
      ], 32),
      e.model.playable === !0 ? (Le(), Ve("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = Mt(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = Mt(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ye(jt, {
          icon: e.model.playing ? rt(We).pause : rt(We).play
        }, null, 8, ["icon"])
      ], 40, nk)) : lt("", !0),
      e.model.hasStickers === !1 ? (Le(), Ve("div", rk, " Add Image to place a sticker ")) : lt("", !0),
      e.model.dropActive === !0 ? (Le(), Ve("div", ik, "Drop image to add")) : lt("", !0),
      Ye(h0, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Le(), Vn(tc, { key: 3 })) : lt("", !0)
    ]));
  }
}, sk = { class: "pano-studio-node-surface" }, ak = {
  class: "pano-studio-node-status",
  role: "status"
}, lk = { class: "pano-studio-node-shot" }, ck = { class: "pano-studio-node-size" }, uk = { class: "pano-studio-node-note" }, dk = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Ve("div", sk, [
      Ne("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Mt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Mt(() => {
        }, ["stop"]))
      }, [
        Ne("div", ak, [
          Ne("span", lk, tt(e.model.status.shot), 1),
          Ne("span", ck, tt(e.model.status.size), 1),
          Ne("span", uk, tt(e.model.status.note), 1)
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Ye(jt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Ne("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Le(), Vn(tc, { key: 0 })) : lt("", !0)
    ]));
  }
}, fk = 2048, Nu = 4096, pk = (e) => Math.floor(e + 0.5), Sa = (e) => Math.max(2, 2 * pk(e / 2));
function m0(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function hk(e) {
  const t = Pd(e, { camera: !0 });
  return t === Bm ? [] : Array.from({ length: t }, (r, n) => n);
}
function mk(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = fk : s = Math.floor(i * 360 / n);
  const a = m0(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((p) => Bl(a, p).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [Sa(c), Sa(d)];
  if (Math.max(...u) <= Nu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Nu / Math.max(c, d);
  return { width: Sa(c * f), height: Sa(d * f), reducedFrom: u, defaulted: o };
}
function g0(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function gk({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === g0(e, t, String(r), n) } : null;
}
function yk(e) {
  return e ? di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Lc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function bk(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = m0(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === g0(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Lc[a] };
    d = mk(e, hk(e), r, n, o);
  }
  const u = Lc[a] ? [Lc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Nu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function vk() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, bk(r(), { ...t, bgWidth: n }));
  };
}
const _p = 24;
function Sk(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ps(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function y0(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Pu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => ps(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : y0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function _k(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => ps(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => ps(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : y0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function qd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function b0(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Ho(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Oe(r.x, -n, t.width + n),
    y: Oe(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function wk(e) {
  const t = xo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * wt * 0.5),
    tanY: Math.tan(Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * wt * 0.5)
  };
}
function ki(e, t, r) {
  return fd(il(
    il(e.centerDir, ol(e.right, t)),
    ol(e.up, r)
  ));
}
function Xd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = wk(e), n = Ho(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ki(r, -r.tanX, r.tanY),
    ki(r, r.tanX, r.tanY),
    ki(r, r.tanX, -r.tanY),
    ki(r, -r.tanX, -r.tanY)
  ].map((f) => Ho(f, t)), o = Array.from({ length: 4 }, (f, p) => {
    const v = [];
    for (let g = 0; g <= 28; g += 1) {
      const h = g / 28;
      let y, W;
      p === 0 ? (y = -r.tanX + 2 * r.tanX * h, W = r.tanY) : p === 1 ? (y = r.tanX, W = r.tanY - 2 * r.tanY * h) : p === 2 ? (y = r.tanX - 2 * r.tanX * h, W = -r.tanY) : (y = -r.tanX, W = -r.tanY + 2 * r.tanY * h);
      const H = Ho(ki(r, y, W), t);
      H && v.push({ x: H.x, y: H.y });
    }
    return v;
  }), s = Ho(ki(r, 0, r.tanY), t), a = Ho(
    ki(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, s, a];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = a.x - s.x, d = a.y - s.y, u = Math.hypot(c, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: s.x, y: s.y },
    rotateHandle: {
      x: s.x + c / u * _p,
      y: s.y + d / u * _p
    },
    visible: !0
  };
}
function wp(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Xd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = Pu(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = Pu(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function kk(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Kt(Math.atan2(n.x, n.z) * rn),
    pitch_deg: Math.asin(Oe(n.y, -1, 1)) * rn
  };
}
function xk(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function Mk(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * rn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let _a = null;
function Jd() {
  return _a || (_a = new Promise((e) => {
    const t = document.getElementById("pano-suite-style-link");
    if (t) {
      if (t.dataset.loaded === "true") {
        e();
        return;
      }
      t.addEventListener("load", () => {
        t.dataset.loaded = "true", e();
      }, { once: !0 }), t.addEventListener("error", () => e(), { once: !0 });
      return;
    }
    const r = document.createElement("link");
    r.id = "pano-suite-style-link", r.rel = "stylesheet", r.href = new URL("./pano_editor.css", import.meta.url).toString(), r.addEventListener("load", () => {
      r.dataset.loaded = "true", e();
    }, { once: !0 }), r.addEventListener("error", () => e(), { once: !0 }), document.head.appendChild(r);
  }), _a);
}
function qn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Nk(e, t = 1024) {
  const r = Math.max(1, Math.round(qn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(qn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function Pk(e, t, r) {
  const n = qn(t), i = qn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = qn(o.u0), a = qn(o.v0), l = qn(o.u1), c = qn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + qn(d.du)) * n,
    centerY: ((a + c) * 0.5 + qn(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: qn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, qn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function Ak(e, t, r) {
  const n = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    r,
    n.length,
    n.slice(-24),
    i.u0,
    i.v0,
    i.u1,
    i.v1,
    o.du,
    o.dv,
    o.rot_deg,
    o.scale
  ].join(":");
}
function Ck() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function r() {
    if (!(e.size <= 16))
      for (const [o, s] of e) {
        if (e.size <= 16) break;
        s.settled && (s.image.onload = null, s.image.onerror = null, e.delete(o));
      }
  }
  function n(o, s) {
    let a = e.get(o);
    if (a)
      return e.delete(o), e.set(o, a), !a.settled && typeof s == "function" && a.listeners.add(s), a.image;
    const l = new Image();
    a = { image: l, listeners: new Set(typeof s == "function" ? [s] : []), settled: !1 }, e.set(o, a);
    const c = () => {
      a.settled = !0;
      const d = [...a.listeners];
      a.listeners.clear(), d.forEach((u) => u()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, s, a, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), d = Pk(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = Ak(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, p = t.get(f);
    if ((p == null ? void 0 : p.revision) === u) return { source: p.source, revision: u };
    const v = n(c, l), g = Number(v.naturalWidth || v.width || 0), h = Number(v.naturalHeight || v.height || 0);
    if (!v.complete || g < 1 || h < 1) return null;
    const y = on({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const W = y.getContext("2d");
    return W ? (d.wrapOffsets.forEach((H) => {
      W.save(), W.translate(d.centerX + H, d.centerY), W.rotate(d.rotationRad), W.scale(d.scale, d.scale), W.drawImage(
        v,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), W.restore();
    }), t.set(f, { revision: u, source: y }), { source: y, revision: u }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const s = new Set(Array.from(o, (a) => String(a || "").trim()).filter(Boolean));
      for (const a of t.keys())
        s.has(a) || t.delete(a);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function Ik(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function Ek(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function Ok({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, p, v) {
    if (!u || typeof v != "function" || p.settled) return;
    let g = n.get(u);
    g || (g = /* @__PURE__ */ new Map(), n.set(u, g));
    const h = g.get(f);
    if ((h == null ? void 0 : h.entry) === p) {
      h.callback = v;
      return;
    }
    o(h);
    const y = { owner: u, key: f, entry: p, callback: v };
    g.set(f, y), p.listeners.add(y);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((p) => {
      o(p);
      try {
        p.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, p] of r) {
        if (r.size <= u) break;
        !p.settled || p.listeners.size > 0 || (p.image.onload = null, p.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, p, v = null) {
    const g = String(f || ""), h = String(p || "");
    if (!g || !h) return null;
    let y = r.get(g);
    if (y)
      r.delete(g), r.set(g, y);
    else {
      l(i - 1);
      const H = e || globalThis.Image;
      if (typeof H != "function") return null;
      const te = new H();
      y = { key: g, image: te, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, y), te.onload = () => a(y, !0), te.onerror = () => a(y, !1), te.src = h;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, g, y, v), y.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Yo = /* @__PURE__ */ new WeakMap();
function v0(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Yo.get(e);
  n || (n = [], Yo.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = Yo.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && Yo.delete(e);
  };
}
function oi(e, ...t) {
  const r = Yo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Ka = Object.freeze({
  // Core's Load3D (three.js OrbitControls) and Sketchfab: the left and the right button orbit, Shift pans.
  default: {
    label: "Default",
    emptyLeft: "orbit",
    bindings: [
      { button: 1, action: "pan" },
      { button: 2, action: "orbit" },
      { button: 2, shift: !0, action: "pan" }
    ]
  },
  // Blender's 3D viewport. A left drag on empty space is Blender's box select, which the editor has as
  // Ctrl + drag.
  blender: {
    label: "Blender-like",
    emptyLeft: null,
    bindings: [
      { button: 1, action: "orbit" },
      { button: 1, shift: !0, action: "pan" }
    ]
  },
  // Unity's Scene view: the right button flies (looks around in place). A left drag on empty space is
  // Unity's rectangle select, which the editor has as Ctrl + drag.
  unity: {
    label: "Unity-like",
    emptyLeft: null,
    bindings: [
      { button: 2, action: "look" },
      { button: 0, alt: !0, action: "orbit" },
      { button: 1, action: "pan" }
    ]
  }
}), S0 = "PanoramaSuite.Editor.ViewControls", Fk = {
  id: S0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Ka).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Tk(e) {
  return Object.hasOwn(Ka, e) ? Ka[e] : Ka.default;
}
function Dk(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function Rk(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const kl = "state_json";
function zr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function Lk(e) {
  var s, a;
  const t = zr(e, kl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = qm(r, {
    coverage: (s = zr(e, "coverage")) == null ? void 0 : s.value
  }), i = c0(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function Zd(e, t) {
  if (!e || Wn(e).coverageSyncInstalled) return;
  const r = zr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, p, v, g;
    const o = n ? n(...i) : void 0, s = Wn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = $r(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = gt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (g = (v = t == null ? void 0 : t.canvas) == null ? void 0 : v.setDirty) == null || g.call(v, !0, !0), o;
  }, Wn(e).coverageSyncInstalled = !0;
}
function Vk(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function kp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function $k(e) {
  var d, u, f, p, v, g;
  if (!e) return;
  const t = zr(e, "coverage"), r = zr(e, "bg_color"), n = zr(e, kl), i = zr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Vk(o) && (kp(s) || s === ""))) return;
  let c = "360";
  if (kp(s))
    try {
      c = String($n((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (p = n.callback) == null || p.call(n, s), i && (i.value = a, (v = i.callback) == null || v.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Wa(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function Au(e, t, r) {
  var o, s;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((a) => String((a == null ? void 0 : a.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (s = i.parentEl) != null && s.style && (i.parentEl.style.display = "");
    const a = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(a) || Number(a[0] || 0) <= 0 || Number(a[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function zk(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Wn(e)) == null ? void 0 : n.pendingStickerUploads;
  if (r)
    for (; r.size > 0; ) {
      const i = Array.from(r.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        r.get(o) === s && r.delete(o);
      });
    }
}
function qo(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const n = Wn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = s.catch(() => {
  });
  n.stickerOperationTail = a, n.pendingStickerUploads.set(t, s);
  const l = () => {
    n.pendingStickerUploads.get(t) === s && n.pendingStickerUploads.delete(t);
  };
  return s.then(l, l), a.then(() => {
    n.stickerOperationTail === a && (n.stickerOperationTail = null);
  }), s;
}
async function _0(e, t = {}) {
  var n, i, o;
  await zk(e, t);
  const r = Array.from(((n = Wn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = vl(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function jk(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await _0(e), r ? r.apply(this, n) : this.value;
  };
}
function Hk(e) {
  var r;
  const t = gt(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function w0(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return G_(this), r;
  };
}
function Gk(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Vc(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: s,
  enableStickersPreview: a,
  sceneStateV2: l = !1,
  studio: c = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(u) {
    var g;
    const f = `editor_btn|${r}`, p = gt(u);
    if (p.attached === !0 && p.mountKey === f) return;
    Hk(u), Zd(u, t), Wa(u, kl);
    const v = zr(u, kl);
    if (jk(u, v), v && !v.__panoPreviewPatchedCb) {
      v.__panoPreviewPatchedCb = !0;
      const h = v.callback;
      v.callback = (y) => {
        var H;
        const W = h ? h(y) : void 0;
        return (H = u.setDirtyCanvas) == null || H.call(u, !0, !1), W;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = zr(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (g = h.callback) == null || g.call(h, "#00ff00")), Au(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), p.stickers && Wa(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), p.attached = !0, p.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, Au(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), p.cutout && Wa(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), p.attached = !0, p.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const p = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && Lk(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && $k(this);
      const v = gt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && v && oi(this, "attach"), p;
    };
  }
  w0(e);
}
function Kk(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return Gk(this), n;
  }, w0(e);
}
function Wk(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = $r(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if ($r(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    Zd(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Au(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Wa(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function Uk({
  app: e,
  openEditor: t,
  attachStickers: r,
  attachCutout: n,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: s,
  enableStickersPreview: a = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [Fk, jv],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Bf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Bf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Vc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Vc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Vc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), sl(d) && Kk(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      gt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Zd(l, e), sl(c) && Wk(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const Bk = /\.(png|jpe?g|webp|gif|bmp)$/i;
function lr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : Bk.test(String(e.name || "")) : !1;
}
function Qd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => lr(r)) : !1;
}
function Yk(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (Qd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, s = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || r(!1);
  }, a = (l) => {
    var d;
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => lr(u));
    if (!c) {
      r(!1);
      return;
    }
    i(l), r(!1), n(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", s, !0), e.addEventListener("drop", a, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", s, !0), e.removeEventListener("drop", a, !0), r(!1);
  };
}
async function Xo(e, t = {}) {
  var s, a, l, c;
  if (!lr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const p = new r();
      p.onload = () => u(p), p.onerror = () => f(new Error("image load failed")), p.src = o;
    });
    return {
      image: d,
      width: Math.max(1, Number(d.naturalWidth || d.width || 1)),
      height: Math.max(1, Number(d.naturalHeight || d.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function Pi(e, { fetchApi: t } = {}) {
  if (!lr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const r = new FormData();
  r.append("image", e), r.append("type", "input"), r.append("subfolder", "panorama_stickers");
  const n = await t("/upload/image", { method: "POST", body: r });
  if (!n || n.status !== 200)
    throw new Error(`upload failed (${(n == null ? void 0 : n.status) || "no-response"})`);
  const i = await n.json(), o = String((i == null ? void 0 : i.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const xp = /* @__PURE__ */ new WeakSet(), Mp = /* @__PURE__ */ new WeakSet();
let Np = 0;
function Cu(e) {
  if (!e || typeof e != "object" || Mp.has(e)) return e;
  const t = String(e.type || "preview");
  return Np += 1, e.type = `${t}:pano-${Np}`, Mp.add(e), e;
}
function xl(e) {
  if (!e || typeof e != "object" || xp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, xp.add(e), e;
}
function k0(e, t) {
  var n, i;
  if (!t || ((i = (n = xl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function qk({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Gt } = Pa;
E_((e) => Ur(e.id));
O_(mn);
const ef = Ok(), { linkedVideoFile: x0 } = Rg({ app: Gt, api: mn });
function Iu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Pa == null ? void 0 : Pa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Xk = "pano_suite.ui_settings.v1", Jk = 120, Zk = 2048;
function Pp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Xk)) || "").trim();
    if (!r) return e;
    const n = JSON.parse(r);
    return {
      invert_view_x: !!(n != null && n.invert_view_x),
      invert_view_y: !!(n != null && n.invert_view_y)
    };
  } catch {
    return e;
  }
}
function Qk() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Go(e) {
  var r, n, i, o, s;
  if (!e) return null;
  const t = (r = e.getBoundingClientRect) == null ? void 0 : r.call(e);
  return {
    tag: String(e.tagName || "").toLowerCase(),
    className: String(e.className || ""),
    clientW: Number(e.clientWidth || 0),
    clientH: Number(e.clientHeight || 0),
    offsetW: Number(e.offsetWidth || 0),
    offsetH: Number(e.offsetHeight || 0),
    rectW: Number((t == null ? void 0 : t.width) || 0),
    rectH: Number((t == null ? void 0 : t.height) || 0),
    styleHeight: String(((n = e.style) == null ? void 0 : n.height) || ""),
    styleWidth: String(((i = e.style) == null ? void 0 : i.width) || ""),
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((s = e.style) == null ? void 0 : s.transform) || "")
  };
}
function ex() {
  if (document.getElementById("pano-node-preview-mode-style")) return;
  const e = document.createElement("style");
  e.id = "pano-node-preview-mode-style", e.textContent = `
    .pano-node-preview-dom {
      outline: none !important;
    }
    .pano-node-preview-dom.pano-node-preview--stickers canvas {
      object-fit: cover;
    }
    .pano-node-preview-dom.pano-node-preview--cutout canvas {
      object-fit: contain;
    }
    .pano-node-preview-dom button:hover {
      background: rgba(46,46,50,0.98) !important;
      border-color: rgba(120,120,130,1) !important;
      color: #fff !important;
      box-shadow: 0 0 8px rgba(0,0,0,0.4);
    }
  `, document.head.appendChild(e);
}
function Eu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (n, i) => {
    const o = Number(n), s = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(s) ? null : [o, s];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const n = r(t[0], t[1]);
      if (n) return n;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const n = r(t.width, t.height);
      if (n) return n;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const n = r(t.w, t.h);
      if (n) return n;
    }
  }
  return null;
}
function M0(e) {
  const t = Eu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function tx(e, t, r) {
  M0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Ou(e) {
  var t, r;
  return (r = (t = gt(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function tf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function N0(e) {
  return sl(tf(e));
}
function Ap(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function P0(e) {
  const t = gt(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Ou(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && $c(e), Jx(e, { ...n, mode: i }), this.activeBackend = Ou(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || gt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      $c(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      $c(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function $c(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Fu.unregister(e);
  const r = gt(e);
  r.dom, r.restore;
  const n = r.dom;
  try {
    (i = r.restore) == null || i.call(r);
  } catch {
  }
  if (r.restore = null, n) {
    try {
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (a = (s = n.root) == null ? void 0 : s.remove) == null || a.call(s);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (n == null ? void 0 : n.widget)) return !0;
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = Iu();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => _x(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function nx(e, t = "#00ff00") {
  const r = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: 360,
    bg_color: t,
    output_preset: 2048,
    assets: {},
    stickers: [],
    shots: [],
    active: { selected_sticker_id: null }
  };
  let n = null;
  if (e && typeof e == "object")
    n = e;
  else if (typeof e == "string") {
    const i = e.trim();
    if (!i) return r;
    try {
      n = JSON.parse(i);
    } catch {
      return r;
    }
  } else
    return r;
  try {
    const i = n;
    return !i || typeof i != "object" || Array.isArray(i) ? r : {
      ...r,
      ...i,
      coverage: Number(i.coverage) === 180 ? 180 : 360,
      assets: i.assets && typeof i.assets == "object" ? i.assets : {},
      stickers: Array.isArray(i.stickers) ? i.stickers : [],
      shots: Array.isArray(i.shots) ? i.shots : [],
      active: i.active && typeof i.active == "object" ? i.active : r.active
    };
  } catch {
    return r;
  }
}
function rx(e) {
  var r, n;
  const t = (r = Wn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = cr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function wn(e) {
  var d, u;
  const t = Wn(e), r = rx(e), n = t.liveStateVersion, i = String(((d = cr(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = cr(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof r == "string", a = s && Ug(e) && Ot(e, "sticker-handoff") ? ur(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === r && l.liveVersion === n && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? iw(r, { backgroundColor: i, coverage: o, active: tg(e) }, a) : nx(r, i);
  return c.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function cr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function ix(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function A0(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = ix(e == null ? void 0 : e.graph, r)), n;
}
function ox(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function C0(e, t = []) {
  const r = ox(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    er.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Cp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Ml(e, t) {
  const r = Cp(e), n = Cp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function sx(e, t) {
  var r;
  return A0(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function ax(e, t = er) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = C0(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return V_(e, s, sx);
}
const Fu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = mn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, p, v;
        if (!o) return;
        const s = Ml(n, o == null ? void 0 : o.id);
        String(gt(o).mode || "") === "cutout" && !s || !s && ![...ax(o)].some((g) => Ml(n, g)) || (s && (rf(o), (c = (l = gt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !Og(Cn(o).executedOutputs, n, r.output) && (E0(o), (u = (d = gt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (v = (p = o.graph) == null ? void 0 : p.setDirtyCanvas) == null || v.call(p, !0, !0), String(gt(o).mode || ""), String(gt(o).mode || ""), void 0));
      });
    }, mn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = mn) != null && e.removeEventListener) || (mn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Nl(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = mn) == null ? void 0 : o.apiURL) == "function" ? mn.apiURL(i) : i;
}
function lx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function cx(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function ux(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function dx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (lx(t)) return [t];
  const { filename: r, subfolder: n } = cx(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Nl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return ux([...i, t]);
}
function fx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Nl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ur(e) {
  const t = Gt == null ? void 0 : Gt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Ml(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (Ml(s, i)) return t[s];
  }
  return null;
}
function ur(e, t, r = null) {
  const n = r || Ur(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function xn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return xn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Nl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = xn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Nl(e);
}
function Es(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Ua(e) {
  return e ? e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? ["canvas", e.width, e.height, Number(e.__panoFrameIdx || 0)].join("|") : [
    String(e.currentSrc || e.src || ""),
    Number(e.naturalWidth || e.width || 0),
    Number(e.naturalHeight || e.height || 0)
  ].join("|") : "";
}
function nf(e, t) {
  var n;
  const r = String(e || "").trim();
  if (!r) return "";
  try {
    const i = typeof window < "u" && ((n = window == null ? void 0 : window.location) != null && n.href) ? window.location.href : "http://127.0.0.1/", o = new URL(r, i);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const i = r.includes("?") ? "&" : "?";
    return t > 0 ? `${r}${i}pano_rev=${t}` : r;
  }
}
function px(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function hx(e, t) {
  try {
    const r = Cn(e);
    r.ownOutputRev = Ik(r.ownOutputRev);
    const n = px(t);
    let i = "";
    for (const o of n)
      if (i = xn(o), i) break;
    i ? (nf(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function po(e) {
  var r;
  const t = Cn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function mx(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Ot(e, "background"))
    return po(e), null;
  const i = Ur(n), o = $d(i, t, xn);
  if (!o)
    return po(e), null;
  const s = Cn(e), a = nf(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  po(e);
  const d = $_({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function gx(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = C0(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], p = e.graph ? e.getInputLink(u) : null;
    if ((p == null ? void 0 : p.origin_id) == null) continue;
    const v = p.origin_id, g = A0(e, u, v);
    if (!g) continue;
    const h = Number(p.origin_slot ?? 0), y = Ur((g == null ? void 0 : g.id) ?? v), W = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (W.length) {
      const B = [];
      h >= 0 && h < W.length && B.push(W[h]), B.push(...W);
      for (const R of B.filter((J) => !$a(J))) {
        const J = xn(R);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: `${J}&pano_src=${ku(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let H = [];
    try {
      H = typeof (Gt == null ? void 0 : Gt.getNodeImageUrls) == "function" ? Gt.getNodeImageUrls(g) || [] : [];
    } catch {
      H = [];
    }
    if (Array.isArray(H) && H.length) {
      const B = [];
      h >= 0 && h < H.length && B.push(H[h]), B.push(...H);
      for (const R of B) {
        const J = xn(R);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: J, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const te = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (te.length) {
      const B = [];
      h >= 0 && h < te.length && B.push(te[h]), B.push(...te);
      for (const R of B) {
        const J = xn(R);
        if (J)
          return String((f == null ? void 0 : f.name) || ""), { src: J, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const C = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((B) => String((B == null ? void 0 : B.name) || "").toLowerCase() === "image");
    if (C) {
      let B = xn(C.value);
      if (B && !B.includes("/") && !B.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (B = mn.apiURL(`/view?filename=${encodeURIComponent(B)}&type=input&subfolder=`)), B)
        return String((f == null ? void 0 : f.name) || ""), { src: B, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Ot(e, "background") ? Ur(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = xn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function yx(e, t = [], r = {}) {
  const n = gx(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = dx(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Cn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const p = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const v = o[f];
    u.pendingResolvedSrc = v, d.src = v;
  };
  return d.onload = () => {
    var v;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, d.onerror = (v) => {
    if (f + 1 < o.length) {
      p();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((v == null ? void 0 : v.type) || "error");
  }, p(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function I0(e, t = [], r = null, n = {}) {
  const i = yx(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function E0(e) {
  e && (ef.disposeOwner(e), Cn(e).linkedImages.clear(), po(e));
}
function bx(e) {
  e && (Cn(e).linkedImages.clear(), po(e));
}
function O0(e, t) {
  const r = gt(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ko(e, t, r = "") {
  var s;
  const n = O0(e, ((s = gt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < Jk ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Ip(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function vx(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function zc(e, t) {
  var n, i;
  const r = (i = (n = gt(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function Sx(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  if (r) {
    const i = t.find((o) => String((o == null ? void 0 : o.id) || "") === r);
    if (i) return i;
  }
  return t[0] || null;
}
function _x(e, t) {
  return k0(e, t);
}
function Pl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = fx(r);
  if (!o && (n != null && n.external)) {
    if (!Ot(e, "external-sticker")) return null;
    const p = Ur(e == null ? void 0 : e.id), v = ((f = p == null ? void 0 : p.ui) == null ? void 0 : f.pano_sticker_input_images) || (p == null ? void 0 : p.pano_sticker_input_images) || [];
    for (const g of Array.isArray(v) ? v : [v])
      if (o = xn(g), o) break;
  }
  if (!o) return null;
  const s = ur(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Cn(e).ownOutputRev : 0, c = n != null && n.external ? nf(o, l) : o, d = Ek(o, a, l);
  return ef.get(e, d, c, (p, v) => {
    var g, h;
    v && (n != null && n.external && Cn(e).outputFromRun && oi(e, "image-loaded"), (h = (g = gt(e).dom) == null ? void 0 : g.requestDraw) == null || h.call(g));
  }) || null;
}
function wx(e, t) {
  var f, p, v, g;
  const r = gt(e), n = Px(e, t), i = Ax(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = n ? i.map((h) => {
    const y = n.getGroupDisplayCanvas(h);
    return y ? {
      id: `paint_group:${h}`,
      source: y,
      revision: `${String(r.paintRevisionKey || "")}:${h}`,
      zIndex: Number(s.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((p = t == null ? void 0 : t.painting) == null ? void 0 : p.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (g = (v = r.rasterCache) == null ? void 0 : v.retain) == null || g.call(v, []), a;
  r.rasterCache || (r.rasterCache = Ck()), r.rasterReady || (r.rasterReady = () => {
    var h, y;
    return (y = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : y.call(h);
  });
  const c = Nk(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((h) => {
    const y = r.rasterCache.get(
      h,
      c.width,
      c.height,
      r.rasterReady
    );
    return y ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: y.source,
      revision: y.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function kx(e, t, r, n) {
  var o, s, a, l, c, d;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (n && Array.isArray(n.graph_mouse) && n.graph_mouse.length >= 2)
    return {
      x: Number(n.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(n.graph_mouse[1]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
    };
  if (n && typeof n.convertEventToCanvasOffset == "function" && t)
    try {
      const u = n.convertEventToCanvasOffset(t);
      if (Array.isArray(u) && u.length >= 2)
        return {
          x: Number(u[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
          y: Number(u[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = Mx(e, t, n);
  return i || null;
}
function xx(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Mx(e, t, r) {
  var i, o;
  const n = xx(t, r || (Gt == null ? void 0 : Gt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Nx(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Px(e, t) {
  var d, u, f, p, v, g, h, y, W, H, te, C;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (p = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : p.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = gt(e), a = Nx(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Wl(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) || null,
    rasterObjects: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((y = s.paintRevision) == null ? void 0 : y.mask) !== c.mask || ((W = s.paintRevision) == null ? void 0 : W.groups) !== c.groups || ((H = s.paintRevision) == null ? void 0 : H.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((te = t == null ? void 0 : t.painting) == null ? void 0 : te.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function Ax(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Ep(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Cx(e, t, r) {
  const n = Xd(t, r);
  n.visible && qd(e, n.boundaryEdges, { selected: !1 });
}
function Ix(e, t, r) {
  const n = Xd(t, r);
  n.visible && (e.save(), qd(e, n.boundaryEdges, { selected: !0 }), b0(e, n, { accent: Sk(t) }), e.restore());
}
function Tu(e, t, r) {
  return bg(gl(gt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Al(e) {
  var t;
  return ((t = gt(e).playback) == null ? void 0 : t.playback.frame) ?? _o;
}
function Ex(e) {
  return [Ot(e, "background") ? $d(Ur(e.id), ["pano_input_videos"], xn) : "", x0(e, er)];
}
function Ox(e) {
  var o;
  if (!Ot(e, "external-sticker")) return null;
  const t = Ur(e.id), r = ur(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(xn), meta: r };
  const i = $d(t, ["pano_sticker_input_videos"], xn);
  return i ? { src: i, meta: r } : null;
}
function F0(e, t) {
  const r = Ur(e.id), n = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(n) ? n : [];
}
function Fx(e, t) {
  var a;
  const r = {}, n = (l) => F0(e, l), i = Ot(e, "scene"), o = i ? n("pano_upstream_layers") : [], s = i ? Wd(n) : null;
  if (s) {
    r.bg = null;
    const { clip: l } = s;
    r.upstreamClip = l && Vm(l.clip, l.fps, t.timeline.fps);
    const c = n(s.metaKey)[0];
    c && typeof c == "object" && (r.upstreamMedia = { video: !0, frames: Number(c.frames), duration: Number(c.duration) });
  } else if (Ot(e, "background")) {
    const l = n("pano_input_video_meta")[0];
    l && typeof l == "object" && (r.bg = { video: fs(e, er), frames: Number(l.frames), duration: Number(l.duration) });
  }
  if (Ot(e, "external-sticker") && (r.port = Ns(n)), o.length) {
    const l = gt(e);
    if (((a = l.upstreamLength) == null ? void 0 : a.layers) !== o || l.upstreamLength.state !== t) {
      const d = Jg(o), u = Qg(d, t.upstream, t.timeline.fps), f = (p) => Ns((v) => Tn(d[p].ui, v));
      l.upstreamLength = { layers: o, state: t, ends: n0(u, t.upstream, /* @__PURE__ */ new Map(), f, t.timeline.fps) };
    }
    const [c] = n("pano_upstream_frames").length ? n("pano_upstream_frames") : n("pano_timeline_frames");
    r.upstream = { frames: Number(c) > 0 ? Number(c) : 0, ends: l.upstreamLength.ends };
  } else i && (r.sceneItems = n("pano_scene_files").length);
  return r;
}
function Tx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function T0(e, t) {
  var n;
  const r = gt(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: An({ ...t, painting: null }) }), r.scene.sceneState;
}
function Dx(e, t) {
  const r = fo(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Ot(e, "background")) {
    const o = ur(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (fs(e, er)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === x0(e, er) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = I0(e, er, null, { preserveReadyWhilePending: !1 });
  return Es(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Rx(e, t) {
  var i, o, s;
  const r = String(((i = cr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Ot(e, a));
  return {
    stateText: String(((o = cr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: wn(e).coverage,
    bgColor: String(((s = cr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? Dx(e, t) : null,
    run: n && ur(e, "pano_output_size") || null,
    erp: ur(e, "pano_output_erp") || null,
    frame: ur(e, "pano_output_frame") || null
  };
}
const Lx = 38;
function rf(e) {
  const t = Cn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function Vx(e, t) {
  const r = Cn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === xn(t.entry) ? r : null;
}
function $x(e, t) {
  const r = Cn(e), n = gt(e), i = t ? xn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && rf(e), !i) return null;
  let o = r.studioRunImage;
  if (!o) {
    const s = new Image(), a = { src: i, image: s, ready: !1, failed: !1 };
    s.src = i, s.decode().then(() => {
      var l, c;
      r.studioRunImage === a && (a.ready = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }, () => {
      var l, c;
      r.studioRunImage === a && (a.failed = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }), r.studioRunImage = o = a;
  }
  return o.ready ? t.kind === "frame" ? { frame: o.image } : {
    background: {
      media: o.image,
      revision: Ua(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: yk(t.entry.rotation)
    }
  } : null;
}
function zx(e, t) {
  var r;
  return t ? (r = Vx(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function jx(e, t, r) {
  var l, c, d;
  const n = T0(e, t), i = (u) => {
    var p;
    if (u.visible === !1) return null;
    let f;
    if (t.version === 2) {
      f = Pl(e, u.id, hl(u.source), { external: u.source.kind === "port" });
      const v = gt(e).playback;
      if (u.source.kind === "port" && v) {
        const g = v.playback.stickerPicture(v.stickerStill, f), h = Md(v.playback.stickerMedia, f);
        return g ? { media: g, revision: Ua(g), source: h } : null;
      }
    } else {
      const v = u.type === "external_image" || u.source_kind === "external_image", g = String(u.asset_id || "") || (v ? String(u.id || "") : "");
      f = Pl(e, g, (p = t.assets) == null ? void 0 : p[u.asset_id], { external: v });
    }
    return Es(f) ? { media: f, revision: Ua(f) } : null;
  }, o = (t.painting_visible === !1 ? [] : wx(e, t)).filter((u) => u.visible !== !1).map((u) => ({ id: u.id, media: u.source, revision: u.revision, opacity: u.opacity, zIndex: u.zIndex })), s = Ot(e, "scene") ? (l = Wd((u) => F0(e, u))) == null ? void 0 : l.color : null;
  return {
    background: ((c = gt(e).playback) == null ? void 0 : c.playback.backgroundShows) === !1 ? zm(s || String(((d = cr(e, "bg_color")) == null ? void 0 : d.value) || "#000000")) : Es(r) ? { media: r, revision: Ua(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Sg(n, Al(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Hx(e, t, r, n = null) {
  var J, _e, ke, ge, Se, pe, fe;
  const i = gt(e), o = String(i.mode || "stickers");
  O0(e, o);
  const s = wn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (ke = (_e = (J = i.cutout) == null ? void 0 : J.session) == null ? void 0 : _e.refresh) == null || ke.call(_e)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (pe = (Se = (ge = i.stickers) == null ? void 0 : ge.session) == null ? void 0 : Se.refresh) == null || pe.call(Se));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), Ko(e, !1, "");
    const { width: de, height: re } = Ep(n.frame), ye = Lx, ce = Math.min(l / de, (c - ye) / re);
    d.drawImage(n.frame, (l - de * ce) / 2, ye + (c - ye - re * ce) / 2, de * ce, re * ce);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, p = (f == null ? void 0 : f.media) || (i.playback ? Tx(i.playback) : mx(e, ["pano_input_videos"], () => {
    var de, re;
    return (re = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : re.call(de);
  })) || I0(
    e,
    er,
    () => {
      var de, re;
      return (re = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : re.call(de);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Es(p);
  let g = null;
  const h = () => f ? { background: f, layers: [] } : jx(e, s, p), y = (de, re) => {
    g || (g = h());
    const ye = r.render({ width: de.w, height: de.h, camera: re, ...g });
    return ye && d.drawImage(ye.canvas, ye.x, ye.y, ye.width, ye.height, de.x, de.y, de.w, de.h), !!ye;
  };
  if (o === "cutout") {
    const de = Sx(s), re = Ep(p), ye = de ? Oe(ui(de).aspect, 0.1, 10) : v ? Oe(Number(re.width / re.height), 0.05, 20) : 1, ce = Yd(u, ye);
    i.cutoutFrame = ce;
    let Z = "none";
    const U = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "");
    if (de)
      if (p && !v)
        Z = "loading";
      else if (v) {
        const P = Ew({ width: l, height: c }, ce, de);
        [
          !P.fallback || y(P.fallback.rect, ds(P.fallback.shot)),
          y(P.rect, ds(P.shot)),
          !P.fallback || y(ce, ds(de))
        ].every(Boolean) || (Z = "loading");
      } else
        Z = "empty";
    else {
      const P = i.lastCutoutShot;
      P ? (i.view = l0(P, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), v ? y(u, gl(i.view, l, c)) || (Z = "loading") : p ? Z = "loading" : Z = "empty";
    }
    v || r.release(), r.failed && Z === "loading" && (Z = "none"), de && (i.lastCutoutShot = { ...de }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(ce.x, ce.y, ce.w, ce.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(ce.x + 0.5, ce.y + 0.5, Math.max(0, ce.w - 1), Math.max(0, ce.h - 1)), d.restore()), Z === "loading" ? (zc(e, !1), Ko(e, !0, U)) : Z === "empty" ? (zc(e, !0), Ko(e, !1, "")) : (zc(e, !1), Ko(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let W = !1;
  (!p || v) && (g = h(), !g.background && !g.layers.length ? (r.release(), W = !0) : W = y(u, gl(i.view, l, c)));
  const H = !W && !r.failed;
  Ko(e, H, H ? String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "") : ""), H && vx(d, u, Ip(t, u));
  const te = Tu(e, l, c);
  !p && W && Gx(d, te, Ip(t, u));
  const C = String(((fe = s == null ? void 0 : s.active) == null ? void 0 : fe.selected_sticker_id) || ""), B = xu(s, Al(e)), R = W && e.__panoStudio !== !0 ? B.find((de) => String((de == null ? void 0 : de.id) || "") === C && (de == null ? void 0 : de.visible) !== !1) : null;
  W && !f && B.filter((de) => de !== R && (de == null ? void 0 : de.visible) !== !1 && (de.external || de.source_kind === "external_image")).filter((de) => !Es(Pl(e, de.id, null, { external: !0 }))).forEach((de) => Cx(d, de, te)), R && Ix(d, R, te);
}
function Op(e, t, r, n, i = 1) {
  let o = !1;
  e.strokeStyle = n, e.lineWidth = i, e.beginPath();
  for (const s of t) {
    const a = r.project(s);
    if (a.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), o = !0);
  }
  e.stroke();
}
function Gx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Rn(c, a));
    Op(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Rn(a, c));
    Op(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Rn(0, 0) },
    { name: "Right", dir: Rn(90, 0) },
    { name: "Back", dir: Rn(180, 0) },
    { name: "Left", dir: Rn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * r));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function Du(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Kx(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Yn(e, t) {
  return Kx(e, t) ? !1 : (Du(e), !0);
}
function Fp() {
  var r;
  const e = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Wx(e) {
  var r;
  if (!e) return;
  const t = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Ux(e, t = 360, r = 260) {
  const n = gt(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !M0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function Bx(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = gt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Tp(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0)), s = gt(e);
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      s.userResized = !0, t == null || t(), i && Yx(e, 180, t);
    }
  };
}
function Yx(e, t = 180, r = null) {
  if (!e) return;
  const n = gt(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Jo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const qx = /* @__PURE__ */ new WeakMap();
function D0(e, t) {
  return Og(qx, e, t) ? !1 : (hx(e, t), E0(e), Jo(e), !0);
}
async function Xx(e) {
  var r, n;
  const t = await R_(e, Gt, mn);
  t && (D0(e, t), (n = (r = gt(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Jx(e, t = {}) {
  var He;
  const r = t.__allowStandalone === !0, n = gt(e), i = Cn(e), o = Wn(e), s = N0(e);
  if (s && !r) {
    tf(e);
    return;
  }
  s && Ux(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: Ap(e)
  }.signature || Ap(e), Ou(e), e == null || e.id, n.mode, e.addDOMWidget, Eu(e), (He = n.dom) != null && He.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, p = f ? 0 : 56, v = f ? 0 : Pw, g = document.createElement("div");
  if (ex(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    v > 0 ? `min-height:${v}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const ae = xl(Cu(
      e.addDOMWidget(Iu(), "preview", g, Tp(e, null))
    ));
    Jo(e), n.dom = { widget: ae, root: g, requestDraw: () => {
    } };
    return;
  }
  const h = document.createElement("div");
  h.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const y = on({ label: "node.surface" });
  y.style.cssText = [
    "position:absolute",
    "inset:0",
    "width:100%",
    "height:100%",
    "object-position:center",
    "display:block",
    "touch-action:none",
    "cursor:grab",
    "user-select:none",
    "-webkit-user-select:none"
  ].join(";");
  const W = document.createElement("div");
  W.style.cssText = [
    "position:absolute",
    "inset:0",
    "display:none",
    "align-items:center",
    "justify-content:center",
    "pointer-events:none",
    "color:rgba(161,161,170,0.95)",
    "font:600 15px 'Plus Jakarta Sans', Geist, sans-serif",
    "text-align:center",
    "padding:0 10px",
    "z-index:2"
  ].join(";"), W.textContent = "Connect ERP image", h.appendChild(y), h.appendChild(W), g.appendChild(h);
  const H = dm(g), te = document.createElement("div");
  te && (te.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", te.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(te)), tx(e, 120, 120), Jo(e);
  let C = null;
  try {
    Bx(e, p, () => {
      var ae, Ie;
      return (Ie = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Ie.call(ae);
    }), C = xl(Cu(e.addDOMWidget(
      Iu(),
      "preview",
      g,
      Tp(
        e,
        () => {
          var ae, Ie;
          return (Ie = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Ie.call(ae);
        },
        p,
        v,
        !1
      )
    )));
  } catch {
    return;
  }
  const B = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, R = vk(), J = () => {
    B.destroyed || (B.needsDraw = !0, !B.inTick && !B.raf && (B.raf = requestAnimationFrame(m)));
  }, _e = xg(J), ke = /* @__PURE__ */ ko(a ? {
    ...Yg(wn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...s0(wn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ae) => ({ value: ae, label: ae }))
  });
  let ge = null;
  if (a && e.__panoSceneStateV2) {
    const [ae, Ie] = [0, 1].map(() => {
      const Ke = Vs(document, "node.playback");
      return Ke.playsInline = !0, Ke.preload = "auto", Ke.crossOrigin = "anonymous", Ke.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(Ke), Ke;
    }), Ae = on({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Fe = on({ label: "node.port-still" });
    Fe.__panoFrameIdx = 0;
    const Ge = uw({
      video: ae,
      stickerVideo: Ie,
      createImage: (Ke, Ue) => {
        const vt = new Image();
        return vt.onload = Ue, vt.onerror = Ue, vt.src = Ke, vt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ke) => requestAnimationFrame(Ke),
        cancelFrame: (Ke) => cancelAnimationFrame(Ke)
      },
      readState: () => wn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: J,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(ae.videoWidth > 0 && ae.videoHeight > 0)) return;
        const Ke = Math.min(1, Zk / ae.videoWidth);
        Ae.width = Math.round(ae.videoWidth * Ke), Ae.height = Math.round(ae.videoHeight * Ke), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(ae, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, J();
      },
      onStickerCapture: () => {
        var Ke;
        Ie.videoWidth > 0 && Ie.videoHeight > 0 && (Fe.width = Ie.videoWidth, Fe.height = Ie.videoHeight, (Ke = Fe.getContext("2d")) == null || Ke.drawImage(Ie, 0, 0), Fe.__panoFrameIdx += 1, J());
      },
      onChange: () => {
        ke.playing = Ge.playing, J();
      }
    });
    ge = { playback: Ge, video: ae, still: Ae, stickerVideo: Ie, stickerStill: Fe, stickerSource: "" }, n.playback = ge;
  }
  const Se = () => {
    var yt;
    const { playback: ae, still: Ie, stickerStill: Ae } = ge, Fe = Ga(h, !!((yt = e.flags) != null && yt.collapsed)), Ge = ae.source, Ke = Fe ? Ox(e) : null, Ue = wn(e), vt = ae.follow({
      shown: Fe,
      sources: Fe ? Ex(e) : [],
      state: Ue,
      sticker: Ke,
      media: Fe ? Fx(e, Ue) : {}
    });
    ((Ke == null ? void 0 : Ke.src) || "") !== ge.stickerSource && (ge.stickerSource = (Ke == null ? void 0 : Ke.src) || "", Ss(Ae)), ae.source !== Ge && (Ss(Ie), Ie.__panoFrameIdx = 0), ke.playable = vt, ke.playing = ae.playing;
  }, pe = () => {
    var Ie, Ae;
    const ae = ((Ie = i.ownOutputVideo) == null ? void 0 : Ie.player) ?? null;
    ae && !Ga(h, !!((Ae = e.flags) != null && Ae.collapsed)) && ae.pause(), a && (ke.playable = !!ae && !ae.failed(), ke.playing = !!(ae != null && ae.playing));
  }, fe = () => {
    var ae;
    ge == null || ge.playback.pause(), (ae = i.ownOutputVideo) == null || ae.player.pause();
  };
  let de = null;
  const re = (a ? lw : Fw)({
    readState: () => wn(e),
    publishLiveState: (ae) => {
      ae ? (de = ae, o.liveState = ae) : (o.liveState === de && (o.liveState = null), de = null), o.liveStateVersion += 1, o.parsedState = null, J();
    },
    commitState: (ae) => {
      var Fe, Ge, Ke, Ue;
      const Ie = cr(e, "state_json");
      if (!Ie) return;
      ng(e, ae.active);
      const Ae = rg(e, ae, String(Ie.value ?? ""));
      Ae !== null && (Ie.value = Ae, (Fe = Ie.callback) == null || Fe.call(Ie, Ae), o.parsedState = null, (Ge = e.setDirtyCanvas) == null || Ge.call(e, !0, !0), (Ue = (Ke = e.graph) == null ? void 0 : Ke.setDirtyCanvas) == null || Ue.call(Ke, !0, !0));
    },
    onChange: (ae) => Object.assign(ke, ae)
  }), ce = a ? v0(e, (ae = "sync", Ie = null) => {
    var cn;
    if (!a || !e.graph || !re || re.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Bt = Ot(e, "external-sticker");
      return re.apply({
        type: "sync-port",
        value: Wg(e, {
          pose: Bt ? ur(e, "pano_sticker_input_pose", Ie) : null,
          handoff: Ot(e, "sticker-handoff") ? ur(e, "pano_sticker_handoff", Ie) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Bt) => String((Bt == null ? void 0 : Bt.name) || "") === "sticker_image") : -1, Fe = Ae >= 0 ? ((cn = e.getInputLink(Ae)) == null ? void 0 : cn.id) ?? null : null;
    if (Fe == null)
      return re.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Ot(e, "external-sticker")) return !1;
    const Ge = ur(e, "pano_sticker_input_pose", Ie), Ke = Array.isArray(Ge) ? Ge[0] : Ge, Ue = String(ur(e, "pano_sticker_input_state_hash", Ie) ?? ""), vt = n.view || { yaw: 0, pitch: 0 }, yt = wn(e), Tt = (Array.isArray(yt == null ? void 0 : yt.stickers) ? yt.stickers : []).find((Bt) => String((Bt == null ? void 0 : Bt.id) || "") === "sticker_image_1"), pt = Pl(e, "sticker_image_1", null, { external: !0 }), en = Ke && typeof Ke == "object" ? Ke : Tt || { yaw_deg: vt.yaw, pitch_deg: vt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return re.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: Ue,
        pose: en,
        imageWidth: Number((pt == null ? void 0 : pt.naturalWidth) || (pt == null ? void 0 : pt.width) || 0),
        imageHeight: Number((pt == null ? void 0 : pt.naturalHeight) || (pt == null ? void 0 : pt.height) || 0)
      }
    });
  }) : () => {
  };
  let Z = 0;
  const U = async (ae) => {
    if (!a || !re || !lr(ae)) return !1;
    fe();
    const Ie = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...n.view || { yaw: 0, pitch: 0 } };
    Z += 1, ke.importing = !0;
    const Ge = qo(e, `add:${Ie}`, async () => {
      const Ke = await Xo(ae), Ue = await Pi(ae, {
        fetchApi: (vt, yt) => mn.fetchApi(vt, yt)
      });
      return x(), re.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Ie,
          asset: Ue,
          imageWidth: Ke.width,
          imageHeight: Ke.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await Ge;
    } catch {
      return !1;
    } finally {
      Z = Math.max(0, Z - 1), ke.importing = Z > 0, J();
    }
  };
  let P = null, he = null, A = null, I = !1;
  const k = () => {
    var ae;
    return A && (clearTimeout(A), A = null), I ? (I = !1, ((ae = re == null ? void 0 : re.commitGesture) == null ? void 0 : ae.call(re)) ?? !1) : !1;
  }, x = () => {
    var Fe, Ge, Ke;
    const ae = k(), Ie = (P == null ? void 0 : P.pointerId) ?? (he == null ? void 0 : he.pointerId);
    if (P = null, he = null, Ie != null) {
      try {
        (Fe = y.hasPointerCapture) != null && Fe.call(y, Ie) && ((Ge = y.releasePointerCapture) == null || Ge.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((Ke = re == null ? void 0 : re.commitGesture) == null ? void 0 : Ke.call(re)) ?? !1;
    return ae || Ae;
  }, se = () => {
    var Fe, Ge, Ke;
    const ae = k(), Ie = P == null ? void 0 : P.pointerId;
    if (P = null, Ie != null) {
      try {
        (Fe = y.hasPointerCapture) != null && Fe.call(y, Ie) && ((Ge = y.releasePointerCapture) == null || Ge.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((Ke = re == null ? void 0 : re.cancelGesture) == null ? void 0 : Ke.call(re)) ?? !1;
    return ae || Ae;
  }, Q = () => x();
  re && o.flushers.add(Q);
  let E = null, b = !1;
  if (te && re)
    try {
      Jd(), E = sd(l ? dk : a ? ok : Jw, {
        model: ke,
        onAction: (ae) => {
          var Fe, Ge, Ke;
          if ((ae == null ? void 0 : ae.type) === "toggle-playback") {
            x(), ge ? ge.playback.toggle() : (Fe = i.ownOutputVideo) == null || Fe.player.toggle(), J();
            return;
          }
          if (fe(), (ae == null ? void 0 : ae.type) === "open-editor") {
            x(), a || (ke.aspectOpen = !1), (Ge = n.openEditor) == null || Ge.call(n);
            return;
          }
          if (a) {
            if ((ae == null ? void 0 : ae.type) === "add-image-file") {
              U(ae.file);
              return;
            }
            re.apply(ae) && J();
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "toggle-aspect") {
            ke.aspectOpen = !ke.aspectOpen;
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "close-aspect") {
            ke.aspectOpen = !1;
            return;
          }
          let Ie = ae;
          if ((ae == null ? void 0 : ae.type) === "add-frame") {
            const Ue = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Ie = {
              ...ae,
              ...Cw(Ue, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((ae == null ? void 0 : ae.type) === "delete-frame") {
            const Ue = Ti(wn(e));
            Ue && (n.view = l0(Ue, {
              width: y.width,
              height: y.height
            }));
          }
          const Ae = ((Ke = n.cutoutFrame) == null ? void 0 : Ke.safeRect) || null;
          ke.aspectOpen = !1, re.apply({ ...Ie, safeRect: Ae }) && J();
        }
      }), E.mount(te), b = !0;
    } catch {
      E = null, b = !1;
    }
  const G = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ge && Se(), J();
  }) : null;
  G == null || G.observe(h);
  const m = (ae) => {
    var Ae, Fe, Ge;
    B.raf = 0, B.inTick = !0;
    let Ie = !1;
    try {
      if (Ie = S.stepInertia(ae), B.needsDraw || Ie) {
        B.needsDraw = !1, ge ? Se() : pe();
        const Ke = l ? Rx(e, ge) : null, Ue = Ke ? gk(Ke) : null, vt = () => T0(e, wn(e)), yt = Ke && Ga(h, !!((Ae = e.flags) != null && Ae.collapsed)) ? $x(e, Ue) : null;
        if ((Fe = e.flags) != null && Fe.collapsed || Hx(e, y, _e, yt), ke.viewUnavailable = _e.failed, l) {
          const Tt = R({ ...Ke, display: zx(e, Ue) }, vt);
          Tt && (ke.status = Tt);
        }
      }
    } finally {
      B.inTick = !1;
    }
    (Ie || B.needsDraw) && !B.raf && (B.raf = requestAnimationFrame(m)), Qk() && (!n.debugLastTs || ae - n.debugLastTs > 1200) && (n.debugLastTs = ae, n.mode, Eu(e), Go(g), Go(h), Go(y), Go(g.parentElement), Go((Ge = g.parentElement) == null ? void 0 : Ge.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, S = dd({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (ae) => {
      n.view = ae;
    },
    getViewportSize: () => {
      const ae = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(ae.width || y.clientWidth || 0)),
        h: Math.max(1, Number(ae.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const ae = Pp();
      return {
        x: ae.invert_view_x ? -1 : 1,
        y: ae.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      J();
    }
  }), L = a ? h : g, w = (ae) => {
    const Ie = y.getBoundingClientRect();
    return {
      x: (Number(ae.clientX) - Ie.left) * (y.width / Math.max(1, Ie.width)),
      y: (Number(ae.clientY) - Ie.top) * (y.height / Math.max(1, Ie.height))
    };
  }, F = (ae) => {
    var Fe, Ge;
    if (!a || l || !d) return;
    const Ie = wn(e), Ae = wp(
      xu(Ie, Al(e)),
      String(((Fe = Ie == null ? void 0 : Ie.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      w(ae),
      Tu(e, y.width, y.height)
    );
    if (!Ae) {
      y.style.cursor = "grab";
      return;
    }
    if (((Ge = Ae.item) == null ? void 0 : Ge.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Ae.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (ae) => {
    var vt, yt, Tt, pt, en, qe, cn, Bt, gi, Yr, yi;
    if (!Yn(ae, L) || ae.button !== 0) return;
    if (!a) {
      const an = Ti(wn(e)), vn = n.cutoutFrame;
      if (!an) {
        (vt = g.focus) == null || vt.call(g, { preventScroll: !0 }), (yt = y.setPointerCapture) == null || yt.call(y, ae.pointerId), y.style.cursor = "grabbing", S.startDrag(ae.clientX, ae.clientY, ae.pointerId);
        return;
      }
      if (an.locked === !0 || !vn || !re) return;
      const qr = w(ae);
      let mr;
      if (ae.shiftKey) {
        const rr = u0({
          frame: vn,
          point: qr,
          startRollDeg: Number(an.roll_deg ?? an.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!rr) return;
        mr = { kind: "roll", pointerId: ae.pointerId, rollGesture: rr };
      } else {
        const rr = ((Tt = wn(e)) == null ? void 0 : Tt.ui_settings) || Pp();
        mr = {
          kind: "pan",
          pointerId: ae.pointerId,
          startPoint: qr,
          startShot: { ...an },
          focalPx: Li(vn, an),
          invertX: rr.invert_view_x === !0,
          invertY: rr.invert_view_y === !0
        };
      }
      x(), (pt = g.focus) == null || pt.call(g, { preventScroll: !0 }), (en = y.setPointerCapture) == null || en.call(y, ae.pointerId), y.style.cursor = "grabbing", re.beginGesture(), P = mr;
      return;
    }
    if (!d) return;
    const Ie = w(ae), Ae = wn(e), Fe = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), Ge = Tu(e, y.width, y.height);
    (cn = g.focus) == null || cn.call(g, { preventScroll: !0 });
    const Ke = () => wp(xu(Ae, Al(e)), Fe, Ie, Ge);
    let Ue = l ? null : Ke();
    if (Ue && (ge != null && ge.playback.playing) && (fe(), Ue = Ke()), Ue && re) {
      if (S.stopMotion(), x(), String(((Bt = Ue.item) == null ? void 0 : Bt.id) || "") !== Fe && re.apply({ type: "select-sticker", id: Ue.item.id }), ((gi = Ue.item) == null ? void 0 : gi.locked) === !0) {
        J();
        return;
      }
      const an = Ie, vn = Ue.geometry.center;
      he = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: ae.pointerId,
        startPoint: an,
        startCenter: { ...vn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(an.x - vn.x, an.y - vn.y)),
        startAngle: Math.atan2(an.y - vn.y, an.x - vn.x),
        projection: Ge
      }, re.beginGesture(), (Yr = y.setPointerCapture) == null || Yr.call(y, ae.pointerId), y.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, J();
      return;
    }
    (yi = y.setPointerCapture) == null || yi.call(y, ae.pointerId), y.style.cursor = "grabbing", S.startDrag(ae.clientX, ae.clientY, ae.pointerId);
  }), y.addEventListener("pointermove", (ae) => {
    if (!a) {
      if (!P) {
        if (!S.state.drag.active) return;
        Yn(ae, L), S.moveDrag(ae.clientX, ae.clientY, "pano");
        return;
      }
      if (P.pointerId !== ae.pointerId || !re) return;
      if (Yn(ae, L), P.kind === "pan") {
        const Ae = w(ae);
        re.updateGesture({
          type: "pan-camera",
          startShot: P.startShot,
          dx: Ae.x - P.startPoint.x,
          dy: Ae.y - P.startPoint.y,
          focalPx: P.focalPx,
          invertX: P.invertX,
          invertY: P.invertY
        });
        return;
      }
      const Ie = d0(P.rollGesture, w(ae), ae);
      if (!Ie) return;
      P.rollGesture = Ie.gesture, re.updateGesture({ type: "set-roll", value: Ie.rollDeg });
      return;
    }
    if (!he && !S.state.drag.active) {
      F(ae);
      return;
    }
    if (he) {
      if (he.pointerId !== ae.pointerId || !re) return;
      Yn(ae, L);
      const Ie = w(ae);
      let Ae = he.startSticker;
      if (he.kind === "move")
        Ae = kk(
          he.startSticker,
          {
            x: he.startCenter.x + Ie.x - he.startPoint.x,
            y: he.startCenter.y + Ie.y - he.startPoint.y
          },
          he.projection
        );
      else if (he.kind === "scale") {
        const Fe = Math.hypot(Ie.x - he.startCenter.x, Ie.y - he.startCenter.y);
        Ae = xk(he.startSticker, he.startDistance, Fe);
      } else if (he.kind === "rotate") {
        const Fe = Math.atan2(Ie.y - he.startCenter.y, Ie.x - he.startCenter.x);
        Ae = Mk(he.startSticker, he.startAngle, Fe, ae.shiftKey === !0);
      }
      re.updateGesture({ type: "set-transform", value: Ae }), J();
      return;
    }
    !d || !S.state.drag.active || (Yn(ae, L), S.moveDrag(ae.clientX, ae.clientY, "pano"));
  });
  const z = () => {
    var Ie, Ae;
    if (!P && !he) {
      if (!S.state.drag.active) return;
      S.endDrag(), y.style.cursor = "grab", J();
      return;
    }
    if (!re) return;
    const ae = (P == null ? void 0 : P.pointerId) ?? (he == null ? void 0 : he.pointerId);
    P = null, he = null;
    try {
      (Ie = y.hasPointerCapture) != null && Ie.call(y, ae) && ((Ae = y.releasePointerCapture) == null || Ae.call(y, ae));
    } catch {
    }
    re.cancelGesture(), y.style.cursor = "grab", J();
  }, ne = (ae, Ie = !1) => {
    var Ae, Fe, Ge, Ke;
    if (!a) {
      if (!P) {
        if (!S.state.drag.active) return;
        Yn(ae, L), (Ae = y.releasePointerCapture) == null || Ae.call(y, ae.pointerId), y.style.cursor = "grab", S.endDrag(), J();
        return;
      }
      if (P.pointerId !== ae.pointerId || !re) return;
      Yn(ae, L), P = null, (Fe = y.releasePointerCapture) == null || Fe.call(y, ae.pointerId), y.style.cursor = "grab", Ie ? re.cancelGesture() : re.commitGesture(), F(ae), J();
      return;
    }
    if (he) {
      if (he.pointerId !== ae.pointerId || !re) return;
      Yn(ae, L), he = null, (Ge = y.releasePointerCapture) == null || Ge.call(y, ae.pointerId), y.style.cursor = "grab", Ie ? re.cancelGesture() : re.commitGesture(), J();
      return;
    }
    !d || !S.state.drag.active || (Yn(ae, L), (Ke = y.releasePointerCapture) == null || Ke.call(y, ae.pointerId), y.style.cursor = "grab", S.endDrag(), J());
  };
  y.addEventListener("pointerup", ne), y.addEventListener("pointercancel", (ae) => ne(ae, !0)), y.addEventListener("lostpointercapture", z), y.addEventListener("pointerleave", (ae) => {
    !a && P || he || S.state.drag.active && ne(ae);
  });
  const T = (ae) => {
    const Ie = document.activeElement;
    if (Ie !== g && !g.contains(Ie)) return;
    if (ae.key === "Escape" && (P || he) && re) {
      z(), Du(ae);
      return;
    }
    if (!a || l || ae.key !== "Delete" && ae.key !== "Backspace" || !re) return;
    const Ae = ae.target, Fe = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Ae != null && Ae.isContentEditable || ke.canDelete === !0 && (fe(), x(), re.apply({ type: "delete-selected" }) && J(), Du(ae));
  };
  window.addEventListener("keydown", T, !0);
  const $ = qk({
    requestFrame: (ae) => requestAnimationFrame(ae),
    cancelFrame: (ae) => cancelAnimationFrame(ae),
    restore: (ae) => Wx(ae)
  }), _ = (ae) => {
    var Ae, Fe, Ge, Ke, Ue, vt;
    if (!Yn(ae, L)) return;
    if (!a) {
      const yt = Ti(wn(e));
      if (yt && yt.locked !== !0 && re) {
        const Tt = rl(ae);
        Tt !== 0 && (I || (x(), re.beginGesture(), I = !0), re.updateGesture({
          type: "step-fov",
          direction: Tt
        }) ? (A && clearTimeout(A), A = setTimeout(k, 180), J()) : re.hasGestureChanges() || (re.cancelGesture(), I = !1));
      } else if (!yt) {
        const Tt = Fp();
        S.applyWheelEvent(ae) && J(), $.schedule(Tt);
      }
      (Ae = ae.preventDefault) == null || Ae.call(ae), (Fe = ae.stopPropagation) == null || Fe.call(ae), (Ge = ae.stopImmediatePropagation) == null || Ge.call(ae);
      return;
    }
    if (!d) return;
    const Ie = Fp();
    S.applyWheelEvent(ae) && J(), (Ke = ae.preventDefault) == null || Ke.call(ae), (Ue = ae.stopPropagation) == null || Ue.call(ae), (vt = ae.stopImmediatePropagation) == null || vt.call(ae), $.schedule(Ie);
  }, D = a ? [h, y] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ae) => {
    D.forEach((Ie) => Ie.addEventListener(ae, _, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ae) => {
    y.addEventListener(ae, (Ie) => Yn(Ie, L)), h.addEventListener(ae, (Ie) => Yn(Ie, L));
  });
  const X = cr(e, "state_json");
  let be = null, me = null;
  X && !X.__panoPreviewPatchedCb && (be = X.callback, me = (ae) => {
    const Ie = be ? be(ae) : void 0;
    return J(), Ie;
  }, X.callback = me, X.__panoPreviewPatchedCb = me);
  const xe = cr(e, "bg_color");
  let q = null, ve = null;
  xe && !xe.__panoPreviewPatchedCb && (q = xe.callback, ve = (ae) => {
    const Ie = q ? q(ae) : void 0;
    return J(), Ie;
  }, xe.callback = ve, xe.__panoPreviewPatchedCb = ve);
  const O = l ? cr(e, "output_size") : null, oe = O == null ? void 0 : O.callback, V = O ? (ae) => {
    const Ie = oe ? oe(ae) : void 0;
    return J(), Ie;
  } : null;
  O && (O.callback = V);
  const ee = e.onRemoved, K = e.onResize, Y = e.onExecuted, j = e.onDragOver, M = e.onDragDrop;
  let ie = null;
  const le = () => {
    a && (ke.dropActive = !0, ie && clearTimeout(ie), ie = setTimeout(() => {
      ie = null, ke.dropActive = !1;
    }, 140));
  }, we = c ? function(ae) {
    return (j ? j.apply(this, arguments) : !1) === !0 ? !0 : Qd(ae == null ? void 0 : ae.dataTransfer) ? (le(), !0) : !1;
  } : null, N = c ? function(ae) {
    var Fe;
    if ((M ? M.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Fe = ae == null ? void 0 : ae.dataTransfer) == null ? void 0 : Fe.files) || []).find((Ge) => lr(Ge));
    return Ae ? (ie && clearTimeout(ie), ie = null, ke.dropActive = !1, U(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = we, e.onDragDrop = N);
  const ue = c ? Yk(g, {
    onActive: (ae) => {
      if (ae) {
        le();
        return;
      }
      ie && clearTimeout(ie), ie = null, ke.dropActive = !1;
    },
    onDrop: (ae) => {
      U(ae);
    }
  }) : () => {
  }, Me = function(ae) {
    i.outputFromRun = !0;
    const Ie = D0(e, ae);
    oi(e, Ie ? "executed" : "sync", ae), J();
    const Ae = Y ? Y.apply(this, arguments) : void 0;
    return Jo(e), Ae;
  };
  e.onExecuted = Me;
  const Ee = e.onConnectionsChange, Te = function(ae, Ie) {
    const Ae = dp(e, ae, Ie, [...Ld, ...Vd]), Fe = dp(e, ae, Ie, er), Ge = arguments, Ke = Ee ? Ee.apply(this, Ge) : void 0, Ue = () => {
      B.destroyed || (Fe && bx(e), Ae && oi(e, "connection-change"), Jo(e), J());
    };
    return Ue(), queueMicrotask(Ue), Ke;
  };
  e.onConnectionsChange = Te;
  const $e = function() {
    const ae = K ? K.apply(this, arguments) : void 0;
    return gt(this).userResized = !0, J(), ae;
  };
  e.onResize = $e;
  const ze = function() {
    return Ce(), Fu.unregister(this), ee ? ee.apply(this, arguments) : void 0;
  };
  e.onRemoved = ze;
  const Ce = () => {
    var ae, Ie, Ae, Fe, Ge, Ke, Ue;
    B.destroyed = !0, (ae = G == null ? void 0 : G.disconnect) == null || ae.call(G), a ? x() : se(), y.removeEventListener("lostpointercapture", z), ue(), H(), window.removeEventListener("keydown", T, !0), o.flushers.delete(Q), (Ie = re == null ? void 0 : re.destroy) == null || Ie.call(re), (Ae = E == null ? void 0 : E.unmount) == null || Ae.call(E), ge && (ge.playback.dispose(), ge.video.remove(), ge.stickerVideo.remove(), n.playback === ge && (n.playback = null)), _e.dispose(), n.scene = null, (Ge = (Fe = n.rasterCache) == null ? void 0 : Fe.dispose) == null || Ge.call(Fe), n.rasterCache = null, n.rasterReady = null, ce(), $.dispose(), ie && clearTimeout(ie), ie = null, ef.disposeOwner(e), po(e), rf(e), B.raf && cancelAnimationFrame(B.raf), B.raf = 0, ((Ke = n.cutout) == null ? void 0 : Ke.session) === re && (n.cutout = null), ((Ue = n.stickers) == null ? void 0 : Ue.session) === re && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === $e && (e.onResize = K), e.onExecuted === Me && (e.onExecuted = Y), e.onConnectionsChange === Te && (e.onConnectionsChange = Ee), me && (X == null ? void 0 : X.callback) === me && (X.callback = be), me && (X == null ? void 0 : X.__panoPreviewPatchedCb) === me && delete X.__panoPreviewPatchedCb, ve && (xe == null ? void 0 : xe.callback) === ve && (xe.callback = q), ve && (xe == null ? void 0 : xe.__panoPreviewPatchedCb) === ve && delete xe.__panoPreviewPatchedCb, V && O.callback === V && (O.callback = oe), e.onDragOver === we && (e.onDragOver = j), e.onDragDrop === N && (e.onDragDrop = M), e.onRemoved === ze && (e.onRemoved = ee);
  };
  n.restore = Ce, n.cutout = re && b && !a ? { session: re, model: ke } : null, n.stickers = re && b && a ? { session: re, model: ke } : null, n.dom = {
    widget: C,
    root: g,
    canvas: y,
    requestDraw: J,
    state: B,
    emptyHintEl: W,
    nodeSurface: n.cutout
  }, Fu.register(e), e.graph && oi(e, "attach"), J();
}
function Dp(e, t = {}) {
  P0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Rp(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (N0(e) && !r) {
    tf(e);
    return;
  }
  P0(e).attach(t);
}
function Zx(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Qx(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let p = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (p = Math.min(p, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * p)),
    height: Math.max(1, Math.round(c * p))
  };
}
function eM({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var p;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const v = l();
    return v === a || (a = v, i(v)), v;
  }, d = () => c();
  return (p = t == null ? void 0 : t.addEventListener) == null || p.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var v;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((v = t.exitFullscreen) == null ? void 0 : v.call(t));
      } catch {
      }
      return s ? !1 : (c(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), s) return !1;
        if (l())
          return c(), !0;
      } catch {
      }
    return s || (o(), c()), !1;
  }, isActive: l, destroy: () => {
    var v, g, h;
    if (!s) {
      if (s = !0, (v = t == null ? void 0 : t.removeEventListener) == null || v.call(t, "fullscreenchange", d), l())
        try {
          const y = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (h = y == null ? void 0 : y.catch) == null || h.call(y, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const tM = { class: "pano-preview-node-surface" }, nM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Ve("div", tM, [
      Ye(nn, {
        icon: e.model.fullscreen ? rt(We).fullscreen_close : rt(We).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: n[0] || (n[0] = (i) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (Le(), Vn(tc, { key: 0 })) : lt("", !0)
    ]));
  }
}, wa = 140, rM = 180, Lp = 40, jc = 10;
function Vp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function $p(e, t) {
  const r = Vp(e), n = Vp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function zp(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = mn) == null ? void 0 : o.apiURL) == "function" ? mn.apiURL(i) : i;
}
function ho(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ho(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return zp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = ho(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : zp(e);
}
function R0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function iM(e) {
  return e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|");
}
function Ru(e) {
  var i;
  const t = (i = dr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if ($p(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if ($p(o, r)) return t[o];
  return null;
}
function oM(e) {
  var n, i;
  const t = Ru(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = ho(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function sM(e, t = "erp_image") {
  var p, v, g, h, y, W, H;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((te) => String((te == null ? void 0 : te.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((te, C) => String((te == null ? void 0 : te.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(C))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (v = (p = dr) == null ? void 0 : p.graph) == null ? void 0 : v.getNodeById) == null ? void 0 : g.call(v, o), a = Ru(o), l = Ru(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const te of c)
    if (Array.isArray(te))
      for (const C of te) {
        const B = ho(C);
        if (B) return B;
      }
  let d = [];
  try {
    d = typeof ((W = dr) == null ? void 0 : W.getNodeImageUrls) == "function" ? dr.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const te of d) {
      const C = ho(te);
      if (C) return C;
    }
  if (s) {
    const te = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const C of te) {
      const B = ho(C);
      if (B) return B;
    }
  }
  const u = (H = s == null ? void 0 : s.widgets) == null ? void 0 : H.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? mn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Hc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function jp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !R0(o) || r <= 1 || n <= 1) {
    Hc(t, r, n);
    return;
  }
  if (s.failed) {
    Hc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: gl(i, r, n),
    background: { media: o, revision: iM(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Hc(t, r, n);
}
function Hp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class aM {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = xg(() => this.requestDraw()), this.controller = dd({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Kt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Oe(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Oe(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, s, a;
        const n = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((n == null ? void 0 : n.width) || ((s = this.canvas) == null ? void 0 : s.clientWidth) || 0)),
          h: Math.max(1, Number((n == null ? void 0 : n.height) || ((a = this.canvas) == null ? void 0 : a.clientHeight) || 0))
        };
      },
      onInteraction: () => this.requestDraw()
    }), this.orig = {
      onDrawForeground: t.onDrawForeground,
      onMouseDown: t.onMouseDown,
      onMouseMove: t.onMouseMove,
      onMouseUp: t.onMouseUp,
      onMouseWheel: t.onMouseWheel,
      onExecuted: t.onExecuted,
      onConnectionsChange: t.onConnectionsChange,
      onResize: t.onResize,
      onRemoved: t.onRemoved,
      coverageWidgetCallback: null
    }, this.legacyDragPointer = !1, this.tick = this.tick.bind(this), this.onResizeDom = this.onResizeDom.bind(this);
  }
  attach() {
    var t;
    typeof ((t = this.node) == null ? void 0 : t.addDOMWidget) == "function" ? this.attachDom() : this.attachLegacy(), this.installCommonHooks(), this.refreshImage(), this.requestDraw();
  }
  installCommonHooks() {
    var n, i, o;
    const t = this;
    this.node.onExecuted = function() {
      const s = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onConnectionsChange = function() {
      const s = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onResize = function() {
      const s = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), s;
    }, this.node.onRemoved = function() {
      const s = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), s;
    };
    const r = ((o = (i = (n = this.node) == null ? void 0 : n.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (s) => (s == null ? void 0 : s.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...s) => {
      const a = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...s) : void 0;
      return t.requestDraw(), a;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      var o;
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!r || (o = this.flags) != null && o.collapsed || !t.errorText) return n;
      const i = t.getLegacyPreviewRect();
      return r.save(), r.fillStyle = "rgba(18,18,22,0.92)", r.strokeStyle = "rgba(82,82,89,1)", r.lineWidth = 1, r.beginPath(), r.roundRect(i.x, i.y, i.w, i.h, 8), r.fill(), r.stroke(), r.fillStyle = "rgba(236,236,242,0.92)", r.font = "600 12px sans-serif", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t.errorText, i.x + i.w * 0.5, i.y + i.h * 0.5), r.restore(), n;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${wa}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = on({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return wa;
        },
        getHeight() {
          return wa;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = xl(Cu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(wa, Number(o.minHeight || 0)),
            minWidth: Math.max(rM, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, r, n, i, o, s;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Jd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ko({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = eM({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = sd(nM, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), $r(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = dm(r), t.addEventListener("pointerdown", (o) => {
      var s, a, l;
      o.button === 0 && ((s = r.focus) == null || s.call(r, { preventScroll: !0 }), (a = t.setPointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
    const n = (o) => {
      var s, a;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    };
    t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n), r.addEventListener("wheel", (o) => {
      var s;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var s;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }), r.addEventListener("keydown", (o) => {
      var s;
      Zx(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !R0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Ga(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = dr.canvas) != null && n.graph) || this.node.graph === dr.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), n;
    }, this.node.onMouseDown = function(r, n) {
      var s;
      const i = t.localPoint(n);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Hp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, n) {
      var s;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(n);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, n, i) {
      var l, c, d, u, f, p;
      const o = kx(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !Hp(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (p = r == null ? void 0 : r.stopImmediatePropagation) == null || p.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, s;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - jc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - Lp - jc);
    return { x: jc, y: Lp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), jp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? kg : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Qx(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = oM(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Vs(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = sM(this.node, this.imageInputName);
    if (!r) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (s = this.mediaCleanup) == null || s.call(this), this.mediaCleanup = null, this.imgSrc = r;
    const n = new Image();
    n.onload = () => {
      this.imgSrc === r && (this.img = n, this.requestDraw());
    }, n.onerror = () => {
      this.imgSrc === r && (this.img = null, this.previewView.release(), this.requestDraw());
    }, this.mediaCleanup = () => {
      n.onload = null, n.onerror = null;
    }, n.src = r;
  }
  requestDraw() {
    var t, r;
    if (!this.tearingDown) {
      if (this.needsDraw = !0, this.inTick) {
        this.queuedDuringTick = !0;
        return;
      }
      this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (r = (t = this.node).setDirtyCanvas) == null || r.call(t, !0, !1);
    }
  }
  tick(t = performance.now()) {
    var i, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const r = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), jp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, p, v, g, h, y;
    if (((r = Dg(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (v = (p = this.root) == null ? void 0 : p.remove) == null || v.call(p);
    } catch {
    }
    try {
      k0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (h = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : h.find) == null ? void 0 : y.call(h, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), $r(this.node).runtime = null;
  }
}
function lM(e, t = {}) {
  if (!e || $r(e).runtime) return;
  const r = new aM(e, t);
  $r(e).runtime = r, r.attach();
}
function L0(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const n = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[n]) return;
  e[n] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = o ? o.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const s = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const a = s ? s.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
}
function of(e) {
  return !!(e != null && e.prototype);
}
function Os(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function cM(e, t = {}) {
  of(e) || lM(e, {
    ...t,
    onOpen: Os(e, t.onOpen)
  });
}
function uM(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!of(e)) {
    Rp(e, {
      ...n,
      onOpen: Os(e, t.onOpen)
    });
    return;
  }
  L0(e, "stickers_node_preview", (i) => {
    Rp(i, {
      ...n,
      onOpen: Os(i, t.onOpen)
    });
  });
}
function dM(e, t = {}) {
  if (!of(e)) {
    Dp(e, {
      ...t,
      onOpen: Os(e, t.onOpen)
    });
    return;
  }
  L0(e, "cutout_preview", (r) => {
    Dp(r, {
      ...t,
      onOpen: Os(r, t.onOpen)
    });
  });
}
const Dn = {
  pen: {
    id: "pen",
    label: "Pen",
    stampKind: "round",
    hardness: 0.92,
    spacing: 0.14,
    flow: 1,
    opacity: 1,
    opacityMode: "accumulate",
    aspect: 1,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    scatter: null,
    sizeScale: 1
  },
  marker: {
    id: "marker",
    label: "Marker",
    stampKind: "chisel",
    hardness: 0.76,
    spacing: 0.06,
    // flow < 1 so accumulate mode shows visible overlap buildup (Apple Freeboard style).
    flow: 0.8,
    opacity: 0.88,
    // accumulate: overlapping areas within one stroke build up darker, like a real marker.
    opacityMode: "accumulate",
    aspect: 2.4,
    angle: { kind: "fixed", value: Math.PI / 6 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0.3,
    chiselCenterDip: 0.12,
    // Nib-fiber texture: felt channels visible as subtle streaks along the nib.
    chiselFiber: 0.28,
    scatter: null,
    // Compensates for aspect=2.4: at same slider value, nib height matches pen stroke width.
    sizeScale: 0.6
  },
  brush: {
    id: "brush",
    label: "Soft Brush",
    stampKind: "round",
    hardness: 0.06,
    spacing: 0.06,
    flow: 0.28,
    opacity: 0.85,
    opacityMode: "accumulate",
    aspect: 1,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    scatter: null,
    // Soft edges feather out visually; scale up so it feels similar in weight to pen.
    sizeScale: 1.5
  },
  crayon: {
    id: "crayon",
    label: "Pastel",
    stampKind: "crayon",
    hardness: 0.55,
    spacing: 0.1,
    flow: 0.82,
    opacity: 0.92,
    opacityMode: "accumulate",
    aspect: 1.2,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    // Grain = amount of per-pixel wax-texture noise applied inside the shape.
    // 0 = no grain (smooth), 1 = maximum grain.
    crayonGrain: 0.68,
    scatter: null,
    sizeScale: 0.92
  }
}, Dr = "pen";
function Gp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function fM({ requestFrame: e, cancelFrame: t, tasks: r }) {
  const n = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [s, a] of Object.entries(r))
      n.delete(s) && a();
  }
  return {
    request(s) {
      n.add(s), i ?? (i = e(o));
    },
    cancel() {
      n.clear(), i !== null && t(i), i = null;
    }
  };
}
const ft = Object.freeze({
  // The state changed: Stickers, the Camera, the painting, the selection, the playhead.
  STATE: "state",
  // The view moved: the camera, the mode, a transition step.
  VIEW: "view",
  // The playhead moved (playback, a scrub): the state is drawn at another frame.
  PLAYHEAD: "playhead",
  // The painting changed (a stroke being drawn, strokes or rasters moved): its layers are drawn again from
  // the paint engine's canvases, while the Stickers and the Camera stay.
  PAINT: "paint",
  // Only the 2D overlay changed: a hover, a cursor, a handle.
  OVERLAY: "overlay",
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item or Spark loaded.
  MEDIA: "media",
  // The stage's Spark renderer has new splats or a new order (pano_spark_views.js): the stage draws again,
  // the camera preview does not.
  SPLAT_STAGE: "splat_stage",
  // The camera preview's Spark renderer has new splats or a new order: the preview draws again. The stage
  // draws with it (the frame draws all of the three.js canvas), its own Spark having nothing new to sort.
  SPLAT_PREVIEW: "splat_preview",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), pM = new Set(Object.values(ft));
function hM({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (h) {
      i(h);
    }
  }
  function p() {
    !o && !s && !a && (o = e(v));
  }
  function v(g) {
    o = 0, s = !0;
    try {
      const h = c;
      c = /* @__PURE__ */ new Map();
      for (const W of h.values()) f(() => W(g));
      if (a) return;
      const y = l;
      l = /* @__PURE__ */ new Set(), (y.size || n()) && f(() => r(g, y));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && p();
  }
  return {
    requestDraw(g) {
      if (!pM.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === ft.STATE && (u += 1), l.add(g), p();
    },
    requestFrame(g) {
      const h = d++;
      return c.set(h, g), p(), h;
    },
    cancelFrame(g) {
      c.delete(g);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      p();
    },
    get stateRevision() {
      return u;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      a = !0, o && t(o), o = 0, c.clear(), l.clear();
    }
  };
}
const mM = { class: "pano-floating-right" }, gM = {
  key: 0,
  class: "pano-floating-space"
}, yM = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, bM = ["data-settled"], vM = ["data-ready", "data-settled"], SM = ["aria-label", "data-tip"], _M = {
  key: 1,
  class: "pano-camera-preview-label"
}, wM = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    // The space group (#71): { visible, mode, frameDisabled, modes, frame } (floatingRightState), null
    // without one. It shows or hides as a whole at the left end, so the buttons right of it never move.
    space: { type: Object, default: null },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve(Ze, null, [
      Ne("div", mM, [
        e.space ? jr((Le(), Ve("div", gM, [
          Ne("div", yM, [
            (Le(!0), Ve(Ze, null, Nt(e.space.modes, (n) => (Le(), Vn(nn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ye(nn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ri, e.space.visible]
        ]) : lt("", !0),
        (Le(!0), Ve(Ze, null, Nt(e.buttons, (n) => (Le(), Vn(nn, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      jr(Ne("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Ne("div", {
          class: mt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Ne("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Ne("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Le(), Ve("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ye(jt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, SM)) : lt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Le(), Ve("div", _M, tt(e.preview.label || "Preview unavailable"), 1)) : lt("", !0)
        ], 14, vM)
      ], 8, bM), [
        [Ri, e.preview.visible]
      ])
    ], 64));
  }
}, kM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, xM = ["y2", "transform"], MM = ["transform"], NM = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => jr((Le(), Ve("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Le(), Ve("svg", kM, [
        o[1] || (o[1] = Ne("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Le(!0), Ve(Ze, null, Nt(rt(r), (s) => (Le(), Ve("line", {
          key: s,
          class: mt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, xM))), 128)),
        Ne("g", { transform: n.value }, [...o[0] || (o[0] = [
          Ne("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, MM),
        o[2] || (o[2] = Ne("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ri, e.model.visible === !0]
    ]);
  }
}, PM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: mt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ye(p0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ye(nn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ye(NM, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, AM = ["aria-label"], CM = { class: "pano-canvas-confirm-title" }, IM = { class: "pano-canvas-confirm-text" }, EM = { class: "pano-canvas-confirm-actions" }, OM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, FM = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null);
    let i = null;
    function o() {
      const u = n.value;
      return u ? Array.from(u.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function s(u) {
      const f = n.value;
      if (!f) return;
      const p = f.querySelector(`[data-action='${u}']`);
      p instanceof HTMLButtonElement && p.click();
    }
    function a() {
      var g;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const v = o()[0] || u;
      (g = v == null ? void 0 : v.focus) == null || g.call(v);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var y;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), p = n.value;
      if (!f.length) {
        u.preventDefault(), (y = p == null ? void 0 : p.focus) == null || y.call(p);
        return;
      }
      const v = f[0], g = f[f.length - 1], h = document.activeElement;
      if (u.shiftKey) {
        (h === v || h === p || !(p != null && p.contains(h))) && (u.preventDefault(), g.focus());
        return;
      }
      (h === g || !(p != null && p.contains(h))) && (u.preventDefault(), v.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Ei(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, $l(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Rs(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Le(), Ve("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Mt(d, ["self"])
    }, [
      Ne("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Ne("div", CM, tt(e.model.title), 1),
        Ne("div", IM, tt(e.model.text), 1),
        Ne("div", EM, [
          f[0] || (f[0] = Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ne("button", OM, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, AM)
    ], 512)) : lt("", !0);
  }
}, TM = ["data-paint-pane"], DM = ["hidden"], RM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], LM = ["aria-pressed", "disabled"], VM = ["hidden"], $M = { class: "pano-paint-color-pop-head" }, zM = { class: "pano-paint-color-field" }, jM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, HM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, GM = { class: "pano-paint-color-field" }, KM = { class: "pano-paint-alpha-wrap" }, WM = ["value"], UM = { "data-paint-alpha-value": "" }, BM = ["hidden"], YM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, qM = ["data-paint-history-index", "aria-label", "disabled"], XM = ["data-paint-footer"], JM = ["data-paint-group"], ZM = ["hidden"], QM = ["value", "disabled"], eN = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, tN = ["hidden"], nN = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    function r(n) {
      return n ? { "--swatch": String(n.cssColor || "") } : {};
    }
    return (n, i) => (Le(), Ve("div", {
      class: mt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Le(!0), Ve(Ze, null, Nt(e.panes, (o) => {
        var s;
        return Le(), Ve("div", {
          key: o.key,
          class: mt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Le(), Ve("div", {
            key: 0,
            class: mt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Le(!0), Ve(Ze, null, Nt(e.paintSwatches, (a) => (Le(), Ve("button", {
              key: a.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Et(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, RM))), 128)),
            Ne("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, LM),
            Ne("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Et({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Ne("div", $M, [
                Ne("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", zM, [
                Ne("div", jM, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", HM, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ne("label", GM, [
                i[1] || (i[1] = Ne("span", null, "Opacity", -1)),
                Ne("div", KM, [
                  Ne("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, WM),
                  Ne("span", UM, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ne("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ne("div", YM, [
                  (Le(!0), Ve(Ze, null, Nt(e.state.historyEntries || [], (a) => (Le(), Ve("button", {
                    key: a.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Et(r(a.color))
                  }, null, 14, qM))), 128))
                ])
              ], 8, BM)
            ], 12, VM)
          ], 10, DM)) : lt("", !0),
          Ne("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ne("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Le(!0), Ve(Ze, null, Nt(o.tools, (a) => {
                var l;
                return Le(), Vn(nn, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, JM),
            Ne("div", {
              class: mt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Ne("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, QM),
              Ne("span", eN, tt(e.state.sizeText || "10"), 1)
            ], 10, ZM),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Ye(nn, {
                icon: rt(We).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, tN)
          ], 8, XM)
        ], 10, TM);
      }), 128))
    ], 2));
  }
}, rN = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null), i = /* @__PURE__ */ Jt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Le(), Ve(Ze, null, [
      Ne("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Ne("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Ne("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, iN = ["aria-label"], oN = ["data-tip", "aria-pressed"], sN = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Le(), Ve("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Et({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Le(!0), Ve(Ze, null, Nt(e.buttons, (o) => (Le(), Ve("button", Tr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), tt(o.label), 17, oN))), 128))
    ], 12, iN));
  }
}, aN = {
  key: 0,
  class: "pano-cutout-menu"
}, lN = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, cN = ["data-aspect"], uN = ["data-action", "aria-label", "data-tip", "disabled"], dN = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Le(!0), Ve(Ze, null, Nt(e.model.items || [], (n) => (Le(), Ve(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Le(), Ve("div", aN, [
          Ne("button", lN, [
            Ye(jt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: mt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Le(!0), Ve(Ze, null, Nt(n.choices || [], (i) => (Le(), Ve("button", {
              key: i.value,
              class: mt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, tt(i.label), 11, cN))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Le(), Vn(sN, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Le(), Ve("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Ye(jt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, uN))
      ], 64))), 128))
    ], 4));
  }
}, fN = {
  key: 0,
  class: "pano-easing"
}, pN = { class: "pano-section-title" }, hN = { class: "pano-easing-range" }, mN = { class: "pano-easing-modes" }, gN = ["aria-pressed", "onClick"], yN = ["viewBox"], bN = ["x", "y"], vN = ["x1", "y1", "x2", "y2"], SN = ["d"], _N = ["x1", "y1", "x2", "y2"], wN = ["x1", "y1", "x2", "y2"], kN = ["cx", "cy"], xN = ["cx", "cy"], MN = { class: "pano-easing-note" }, Er = 132, xi = 14, NN = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], o = /* @__PURE__ */ Jt(null), s = ut(() => {
      var v;
      return Array.isArray((v = r.model) == null ? void 0 : v.easing) ? r.model.easing : null;
    }), a = (v) => xi + v * Er, l = (v) => xi + (1 - v) * Er, c = ut(() => {
      var W;
      if (((W = r.model) == null ? void 0 : W.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [v, g, h, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(v)} ${l(g)} ${a(h)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = ut(() => s.value ? s.value.map((v) => v.toFixed(2)).join(", ") : "");
    function u(v) {
      var g;
      return JSON.stringify(v.easing) === JSON.stringify((g = r.model) == null ? void 0 : g.easing);
    }
    function f(v, g) {
      n("timeline", { type: "easing", easing: v, commit: g });
    }
    function p(v, g) {
      var te;
      if (v.button !== 0 || !s.value) return;
      const h = v.currentTarget;
      (te = h.setPointerCapture) == null || te.call(h, v.pointerId);
      let y = null;
      const W = (C) => {
        const B = o.value.getBoundingClientRect(), R = B.width / (Er + xi * 2), J = ((C.clientX - B.left) / R - xi) / Er, _e = 1 - ((C.clientY - B.top) / R - xi) / Er;
        y = [...y || s.value], y[g] = Math.round(Math.min(1, Math.max(0, J)) * 100) / 100, y[g + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, f(y, !1);
      }, H = () => {
        h.removeEventListener("pointermove", W), h.removeEventListener("pointerup", H), h.removeEventListener("pointercancel", H), y && f(y, !0);
      };
      h.addEventListener("pointermove", W), h.addEventListener("pointerup", H), h.addEventListener("pointercancel", H);
    }
    return (v, g) => e.model ? (Le(), Ve("div", fN, [
      Ne("div", pN, [
        g[2] || (g[2] = Ne("span", null, "Easing", -1)),
        Ne("span", hN, tt(e.model.label), 1)
      ]),
      Ne("div", mN, [
        (Le(), Ve(Ze, null, Nt(i, (h) => Ne("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (y) => f(h.easing, !0)
        }, tt(h.label), 9, gN)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Le(), Ve("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Er + xi * 2} ${Er + xi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ne("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Er,
          height: Er
        }, null, 8, bN),
        Ne("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, vN),
        Ne("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, SN),
        s.value ? (Le(), Ve(Ze, { key: 0 }, [
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, _N),
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, wN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (h) => p(h, 0))
          }, null, 40, kN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (h) => p(h, 2))
          }, null, 40, xN)
        ], 64)) : lt("", !0)
      ], 8, yN)) : lt("", !0),
      Ne("div", MN, [
        e.model.mixed ? (Le(), Ve(Ze, { key: 0 }, [
          Uo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Le(), Ve(Ze, { key: 1 }, [
          Uo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Le(), Ve(Ze, { key: 2 }, [
          Uo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Le(), Ve(Ze, { key: 3 }, [
          Uo("cubic-bezier(" + tt(d.value) + ")", 1)
        ], 64)) : lt("", !0)
      ])
    ])) : lt("", !0);
  }
}, PN = ["title"], AN = { class: "pano-ui-row" }, CN = ["disabled"], IN = { class: "pano-upstream-lanes" }, EN = ["data-action", "data-lane", "disabled", "title"], ON = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Le(), Ve("div", {
      key: 0,
      class: "pano-upstream-origin",
      title: e.model.note || null
    }, [
      Ne("div", AN, [
        r[0] || (r[0] = Ne("label", null, "Revert to upstream", -1)),
        Ne("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, CN)
      ]),
      Ne("div", IN, [
        (Le(!0), Ve(Ze, null, Nt(e.model.lanes, (n) => (Le(), Ve("button", {
          key: n.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": n.action,
          "data-lane": n.name,
          disabled: n.disabled,
          title: `Revert ${n.label} to upstream`
        }, tt(n.label), 9, EN))), 128))
      ])
    ], 8, PN)) : lt("", !0);
  }
}, FN = {
  class: "pano-side",
  "data-side": ""
}, TN = { class: "pano-side-head" }, DN = { class: "pano-side-title" }, RN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, LN = {
  key: 0,
  class: "pano-side-scroll"
}, VN = { class: "pano-inspector" }, $N = { class: "pano-ui-row pano-coverage-row" }, zN = ["data-selected"], jN = ["aria-pressed", "disabled"], HN = ["aria-pressed", "disabled"], GN = {
  key: 0,
  class: "pano-section-title"
}, KN = { class: "meta" }, WN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, UN = {
  class: "pano-picker",
  "data-picker": "selection"
}, BN = ["disabled"], YN = { class: "pano-picker-label" }, qN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, XN = ["hidden"], JN = ["data-selection-id"], ZN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, QN = {
  key: 2,
  class: "pano-state-actions"
}, eP = ["disabled"], tP = ["data-key"], nP = { class: "pano-field-group-values" }, rP = ["title", "onPointerdown"], iP = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], oP = ["data-key"], sP = ["min", "max", "step", "value", "disabled", "data-param-key"], aP = ["min", "max", "step", "value", "disabled", "data-param-key"], lP = ["open"], cP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, uP = { class: "pano-ui-settings-body" }, dP = { class: "pano-ui-row" }, fP = ["data-selected"], pP = ["aria-pressed"], hP = ["aria-pressed"], mP = { class: "pano-ui-row" }, gP = ["data-selected"], yP = ["aria-pressed"], bP = ["aria-pressed"], vP = {
  key: 1,
  class: "pano-side-footer"
}, SP = ["data-action"], _P = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ut(() => {
      const c = r.model;
      return !c || typeof c != "object" ? !1 : Object.keys(c).length > 0 && !!c.coverage;
    });
    function o(c) {
      return { "--v": `${Number((c == null ? void 0 : c.fillPct) || 0)}%` };
    }
    function s(c, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const a = {};
    function l(c, d) {
      const u = a[d.key];
      if (c.button !== 0 || !u || s(d, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, p = c.clientX, v = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const h = (W) => {
        if (!g && Math.abs(W.clientX - p) < 3) return;
        g = !0;
        const H = v + (W.clientX - p) * d.drag * (W.shiftKey ? 0.1 : 1);
        u.value = String(Number(H.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, p, v, g, h;
      return Le(), Ve("div", FN, [
        Ne("div", TN, [
          Ne("div", DN, [
            Ne("span", RN, [
              Ye(jt, {
                icon: rt(We).globe
              }, null, 8, ["icon"])
            ]),
            Ne("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Ne("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Ne("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Le(), Ve("div", LN, [
          Ne("div", VN, [
            d[9] || (d[9] = Ne("div", { class: "pano-section-title" }, [
              Ne("span", null, "Scene")
            ], -1)),
            Ne("div", $N, [
              d[2] || (d[2] = Ne("label", null, "Coverage", -1)),
              Ne("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((p = e.model.coverage) == null ? void 0 : p.disabled) === !0
                }, "360", 8, jN),
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, HN)
              ], 8, zN)
            ]),
            e.model.transformTitle !== !1 ? (Le(), Ve("div", GN, [
              d[3] || (d[3] = Ne("span", null, "Transform", -1)),
              Ne("span", KN, tt(((h = e.model.upstream) == null ? void 0 : h.origin) || ""), 1)
            ])) : lt("", !0),
            e.model.selectionPicker ? (Le(), Ve("div", WN, [
              Ne("label", null, tt(e.model.selectionPicker.label), 1),
              Ne("div", UN, [
                Ne("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ne("span", YN, [
                    e.model.selectionPicker.currentIcon ? (Le(), Ve("span", qN, [
                      Ye(jt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Ne("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Ne("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, BN),
                Ne("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Le(!0), Ve(Ze, null, Nt(e.model.selectionPicker.items || [], (y) => (Le(), Ve("button", {
                    key: y.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Le(), Ve("span", ZN, [
                      Ye(jt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Ne("span", null, tt(y.label), 1)
                  ], 10, JN))), 128))
                ], 8, XN)
              ])
            ])) : lt("", !0),
            e.model.copyStateButton ? (Le(), Ve("div", QN, [
              Ne("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ye(jt, {
                  icon: rt(We).copy
                }, null, 8, ["icon"]),
                Ne("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, eP)
            ])) : lt("", !0),
            Ne("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Le(!0), Ve(Ze, { key: 0 }, Nt(e.model.notes, (y) => (Le(), Ve("div", {
                key: y,
                class: "pano-param-note"
              }, tt(y), 1))), 128)) : (Le(!0), Ve(Ze, { key: 1 }, Nt(e.model.rows || [], (y) => (Le(), Ve(Ze, {
                key: y.key
              }, [
                y.grouped ? (Le(), Ve("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Ne("label", null, tt(y.label), 1),
                  Ne("div", nP, [
                    (Le(!0), Ve(Ze, null, Nt(y.fields, (W) => (Le(), Ve("div", {
                      key: W.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: mt(["pano-axis", { disabled: s(W, e.model) }]),
                        title: W.label,
                        onPointerdown: (H) => l(H, W)
                      }, tt(W.short), 43, rP),
                      Ne("input", {
                        ref_for: !0,
                        ref: (H) => {
                          a[W.key] = H;
                        },
                        type: "number",
                        min: W.min,
                        max: W.max,
                        step: W.step,
                        value: W.displayValue,
                        disabled: s(W, e.model),
                        "aria-label": `${y.label} ${W.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": W.key
                      }, null, 8, iP)
                    ]))), 128))
                  ])
                ], 8, tP)) : (Le(), Ve("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Ne("label", null, tt(y.label), 1),
                  Ne("input", {
                    type: "range",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].value,
                    disabled: s(y.fields[0], e.model),
                    style: Et(o(y.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": y.fields[0].key
                  }, null, 12, sP),
                  Ne("input", {
                    type: "number",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].displayValue,
                    disabled: s(y.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": y.fields[0].key
                  }, null, 8, aP)
                ], 8, oP))
              ], 64))), 128))
            ], 2),
            Ye(ON, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Ye(NN, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => n("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Le(), Ve("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                d[5] || (d[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", cP, [
                  Ye(jt, {
                    icon: rt(We).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ne("div", uP, [
                Ne("div", dP, [
                  d[6] || (d[6] = Ne("label", null, "Drag X", -1)),
                  Ne("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, pP),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, hP)
                  ], 8, fP)
                ]),
                Ne("div", mP, [
                  d[7] || (d[7] = Ne("label", null, "Drag Y", -1)),
                  Ne("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, yP),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, bP)
                  ], 8, gP)
                ]),
                d[8] || (d[8] = Ne("div", { class: "pano-ui-row" }, [
                  Ne("span"),
                  Ne("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, lP)) : lt("", !0)
          ])
        ])) : lt("", !0),
        (e.model.footerButtons || []).length ? (Le(), Ve("div", vP, [
          (Le(!0), Ve(Ze, null, Nt(e.model.footerButtons, (y) => (Le(), Ve("button", {
            key: y.action,
            class: mt(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, tt(y.label), 11, SP))), 128))
        ])) : lt("", !0)
      ]);
    };
  }
}, wP = { class: "pano-timeline-group" }, kP = ["title"], xP = ["disabled"], MP = ["disabled"], NP = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (Le(), Ve("div", wP, [
      Ne("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, tt(e.group.label), 9, kP),
      Ne("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = Mt((o) => r("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, xP),
      Ne("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = Mt((o) => r("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, tt(e.group.restore.label), 9, MP)
    ]));
  }
}, PP = { class: "pano-timeline-bar" }, AP = ["disabled", "aria-label", "data-tip"], CP = ["aria-label", "data-tip"], IP = { class: "pano-timeline-time" }, EP = ["data-tip"], OP = { key: 0 }, FP = ["min", "max", "value"], TP = {
  class: "pano-timeline-setting pano-timeline-length",
  "data-tip": "Output length in frames; empty follows the inputs (Auto)"
}, DP = ["max", "placeholder", "value"], RP = ["aria-expanded"], LP = ["inert"], VP = { class: "pano-timeline-name" }, $P = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], zP = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, jP = ["disabled", "aria-expanded", "aria-label", "onClick"], HP = ["title", "aria-current", "onClick"], GP = ["role", "aria-label", "data-tip"], KP = ["disabled", "data-keyed", "aria-label", "onClick"], WP = ["onPointerdown"], UP = ["onPointerdown"], BP = ["onPointerdown"], YP = ["onPointerdown"], qP = ["aria-label", "data-tip", "onPointerdown"], XP = { key: 0 }, JP = ["onPointerdown"], ZP = ["aria-label", "data-tip", "onPointerdown"], QP = { key: 0 }, e2 = 10, t2 = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Ya(0), playing: /* @__PURE__ */ Ya(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Jt(null), o = /* @__PURE__ */ Jt(null), s = /* @__PURE__ */ Jt(1), a = /* @__PURE__ */ Jt(0), l = /* @__PURE__ */ Jt(!1);
    let c = null, d = null, u = null;
    jl(() => {
      c = new ResizeObserver(([ce]) => {
        s.value = Math.max(1, ce.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([ce]) => {
        a.value = ce.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Rs(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), p = ut(() => r.playhead.frame.value), v = ut(() => r.playhead.playing.value), g = ut(() => lS(p.value, Number(r.model.fps || 1))), h = ut(() => s.value / f.value), y = (ce) => `${ce / f.value * 100}%`, W = ut(() => SS(f.value, h.value));
    function H(ce) {
      const Z = i.value.getBoundingClientRect(), U = Math.floor((ce - Z.left) / Math.max(1, Z.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, U));
    }
    function te(ce, Z, U) {
      const P = Math.ceil(e2 / Math.max(1e-6, h.value)), he = Z.filter((I) => I.frame < f.value), A = new Map(he.map((I) => [I.frame, I.full]));
      return _S(he.map((I) => I.frame), P).map((I, k) => ({
        ...I,
        key: `${ce}:${k}`,
        partial: I.frames.some((x) => !A.get(x)),
        selected: I.frames.some((x) => U.includes(x))
      }));
    }
    const C = ut(() => [
      ...(r.model.rows || []).map((ce) => ({ key: ce.id, row: ce })),
      ...(r.model.groups || []).flatMap((ce) => [
        { key: `group:${ce.key}`, group: ce },
        ...ce.rows.map((Z) => ({ key: Z.id, row: Z }))
      ])
    ]), B = ut(() => {
      const ce = /* @__PURE__ */ new Map();
      for (const { row: Z } of C.value)
        if (Z) {
          ce.set(Z.id, te(Z.id, Z.keys, Z.selectedFrames));
          for (const U of Z.lanes) ce.set(U.key, te(U.key, U.frames.map((P) => ({ frame: P, full: !0 })), U.selectedFrames));
        }
      return ce;
    });
    function R(ce) {
      const Z = ce.end === null ? f.value : Math.min(ce.end, f.value);
      return { left: y(ce.start), width: y(Math.max(0, Z - ce.start)) };
    }
    function J(ce, Z) {
      const U = ce.clientX, P = Math.max(1e-6, h.value);
      let he = 0;
      Z("start", 0, ce);
      const A = (k) => {
        if (k.pointerId !== ce.pointerId) return;
        const x = Math.round((k.clientX - U) / P);
        x !== he && (he = x, Z("move", he, k));
      }, I = (k) => {
        k.pointerId === ce.pointerId && (u(), Z("end", he, k));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", A), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), u = null;
      }, window.addEventListener("pointermove", A), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
    }
    function _e(ce) {
      ce.button === 0 && J(ce, (Z, U, P) => n("action", { type: "seek", frame: H(P.clientX), phase: Z }));
    }
    function ke(ce, Z, U) {
      ce.button === 0 && (n("action", { type: "select-row", id: Z.id }), J(ce, (P, he) => n("action", { type: "clip", id: Z.id, mode: U, delta: he, phase: P })));
    }
    function ge(ce, Z, U, P, he) {
      if (ce.button === 0) {
        if (ce.shiftKey) {
          n("action", { type: "select-keys", owner: Z.id, lane: U, frames: P.frames, additive: !0 });
          return;
        }
        P.frames.every((A) => he.includes(A)) || n("action", { type: "select-keys", owner: Z.id, lane: U, frames: P.frames, additive: !1 }), J(ce, (A, I) => n("action", { type: "move-keys", delta: I, phase: A }));
      }
    }
    const Se = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function pe(ce, Z, U) {
      n("action", Z), await $l(), ce.target.value = U();
    }
    function fe(ce) {
      pe(ce, { type: "fps", fps: Number(ce.target.value) }, () => Se.value);
    }
    const de = ut(() => `Auto (${f.value})`);
    function re(ce) {
      const Z = ce.target.value.trim();
      pe(ce, { type: "length", length: Z ? Number(Z) : null }, () => r.model.length ?? "");
    }
    function ye(ce, Z, U) {
      ce.button !== 0 || ce.target !== ce.currentTarget || n("action", { type: "select-keys", owner: Z.id, lane: U, frames: [], additive: !1 });
    }
    return (ce, Z) => jr((Le(), Ve("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", PP, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          disabled: !e.model.playable,
          "aria-label": v.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": v.value ? "Pause (Space)" : "Play (Space)",
          onClick: Z[0] || (Z[0] = (U) => n("action", { type: "play" }))
        }, [
          Ye(jt, {
            icon: v.value ? rt(We).pause : rt(We).play
          }, null, 8, ["icon"])
        ], 8, AP),
        e.model.hasAudio ? (Le(), Ve("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: Z[1] || (Z[1] = (U) => n("action", { type: "mute" }))
        }, [
          Ye(jt, {
            icon: e.model.muted ? rt(We).volume_muted : rt(We).volume2
          }, null, 8, ["icon"])
        ], 8, CP)) : lt("", !0),
        Ne("span", IP, tt(g.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Le(), Ve("span", OP, tt(Se.value), 1)) : (Le(), Ve("input", {
            key: 1,
            type: "number",
            min: rt(Pm),
            max: rt(yd),
            step: "any",
            value: Se.value,
            "aria-label": "Timeline fps",
            onChange: fe
          }, null, 40, FP)),
          Z[7] || (Z[7] = Ne("span", null, "fps", -1))
        ], 8, EP),
        Ne("label", TP, [
          Z[8] || (Z[8] = Ne("span", null, "Length", -1)),
          Ne("input", {
            type: "number",
            min: "1",
            max: rt(bd),
            step: "1",
            placeholder: de.value,
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: re
          }, null, 40, DP)
        ]),
        Ne("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: Z[2] || (Z[2] = (U) => n("action", { type: "toggle-expanded" }))
        }, [
          Z[9] || (Z[9] = Ne("span", null, "Timeline", -1)),
          Ye(jt, {
            icon: rt(We).chevron
          }, null, 8, ["icon"])
        ], 8, RP)
      ]),
      Ne("div", {
        class: mt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Et({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: Z[4] || (Z[4] = Mt((U) => l.value = !0, ["self"])),
        onTransitionend: Z[5] || (Z[5] = Mt((U) => l.value = !1, ["self"])),
        onTransitioncancel: Z[6] || (Z[6] = Mt((U) => l.value = !1, ["self"]))
      }, [
        Ne("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          Z[10] || (Z[10] = Ne("div", { class: "pano-timeline-corner" }, null, -1)),
          Ne("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: _e
          }, [
            (Le(!0), Ve(Ze, null, Nt(W.value, (U) => (Le(), Ve("span", {
              key: U,
              class: "pano-timeline-tick",
              style: Et({ left: y(U) })
            }, tt(U), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: Et({ left: y(p.value + 0.5) })
            }, null, 4)
          ], 544),
          (Le(!0), Ve(Ze, null, Nt(C.value, ({ key: U, row: P, group: he }) => (Le(), Ve(Ze, { key: U }, [
            he ? (Le(), Vn(NP, {
              key: 0,
              group: he,
              onAction: Z[3] || (Z[3] = (A) => n("action", A))
            }, null, 8, ["group"])) : lt("", !0),
            P ? (Le(), Ve("div", {
              key: 1,
              class: mt(["pano-timeline-head", { selected: P.selected, "is-hidden": !P.visible }])
            }, [
              Ne("div", VP, [
                P.hideable ? (Le(), Ve("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": P.visible ? "true" : "false",
                  disabled: !P.editable,
                  "aria-label": `${P.label} visible`,
                  "data-tip": P.editable ? P.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: Mt((A) => n("action", { type: "toggle-visible", id: P.id }), ["stop"])
                }, [
                  Ye(jt, {
                    icon: P.visible ? rt(We).eye : rt(We).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, $P)) : (Le(), Ve("span", zP)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !P.keyable,
                  "aria-expanded": P.open ? "true" : "false",
                  "aria-label": P.open ? `Hide ${P.label} parameters` : `Show ${P.label} parameters`,
                  onClick: Mt((A) => n("action", { type: "toggle-row", id: P.id }), ["stop"])
                }, [
                  Ye(jt, {
                    icon: rt(We).chevron
                  }, null, 8, ["icon"])
                ], 8, jP),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: P.label,
                  "aria-current": P.selected ? "true" : void 0,
                  onClick: (A) => n("action", { type: "select-row", id: P.id })
                }, [
                  Ye(jt, {
                    icon: P.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, tt(P.label), 1)
                ], 8, HP),
                P.upstream ? (Le(), Ve("span", {
                  key: 2,
                  class: mt(["pano-timeline-override", { on: P.overridden }]),
                  role: P.overridden ? "img" : void 0,
                  "aria-label": P.overridden ? "Overridden in this node" : void 0,
                  "data-tip": P.overridden ? "Overridden in this node" : null
                }, null, 10, GP)) : lt("", !0),
                P.keyable ? (Le(), Ve("button", {
                  key: 3,
                  class: mt(["pano-timeline-key", { keyed: rt(Ic)(P.keys, p.value) }]),
                  type: "button",
                  disabled: !P.editable,
                  "data-keyed": rt(Ic)(P.keys, p.value) ? "true" : "false",
                  "aria-label": rt(Ic)(P.keys, p.value) ? `Every ${P.label} parameter has a keyframe here; update them` : `Add keyframes for every ${P.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Mt((A) => n("action", { type: "key-row", owner: P.id }), ["stop"])
                }, [
                  Ye(jt, {
                    icon: rt(We).keyframe
                  }, null, 8, ["icon"])
                ], 10, KP)) : lt("", !0)
              ]),
              P.open ? (Le(!0), Ve(Ze, { key: 0 }, Nt(P.lanes, (A) => (Le(), Ve("div", {
                key: A.key,
                class: "pano-timeline-lane-head"
              }, tt(A.label), 1))), 128)) : lt("", !0)
            ], 2)) : lt("", !0),
            P ? (Le(), Ve("div", {
              key: 2,
              class: mt(["pano-timeline-track", { selected: P.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (A) => ye(A, P, null)
              }, [
                P.clip && P.clip.start < f.value ? (Le(), Ve("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: P.clip.end === null }]),
                  style: Et(R(P.clip)),
                  onPointerdown: Mt((A) => ke(A, P, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Mt((A) => ke(A, P, "start"), ["stop"])
                  }, null, 40, BP),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Mt((A) => ke(A, P, "end"), ["stop"])
                  }, null, 40, YP)
                ], 46, UP)) : lt("", !0),
                (Le(!0), Ve(Ze, null, Nt(B.value.get(P.id), (A) => (Le(), Ve("button", {
                  key: A.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: A.selected, cluster: A.frames.length > 1, partial: A.partial }]),
                  style: Et({ left: y(A.frame + 0.5) }),
                  "aria-label": `${P.label}: ${A.frames.length > 1 ? `${A.frames.length} keyframes` : `keyframe at frame ${A.frames[0]}`}`,
                  "data-tip": A.frames.length > 1 ? `${A.frames.length} keyframes` : `Frame ${A.frames[0]}`,
                  onPointerdown: Mt((I) => ge(I, P, null, A, P.selectedFrames), ["stop"])
                }, [
                  A.frames.length > 1 ? (Le(), Ve("span", XP, tt(A.frames.length), 1)) : lt("", !0)
                ], 46, qP))), 128))
              ], 40, WP),
              P.open ? (Le(!0), Ve(Ze, { key: 0 }, Nt(P.lanes, (A) => (Le(), Ve("div", {
                key: A.key,
                class: "pano-timeline-lane",
                onPointerdown: (I) => ye(I, P, A.lane)
              }, [
                (Le(!0), Ve(Ze, null, Nt(B.value.get(A.key), (I) => (Le(), Ve("button", {
                  key: I.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: I.selected, cluster: I.frames.length > 1 }]),
                  style: Et({ left: y(I.frame + 0.5) }),
                  "aria-label": `${A.label}: ${I.frames.length > 1 ? `${I.frames.length} keyframes` : `keyframe at frame ${I.frames[0]}`}`,
                  "data-tip": I.frames.length > 1 ? `${I.frames.length} keyframes` : `Frame ${I.frames[0]}`,
                  onPointerdown: Mt((k) => ge(k, P, A.lane, I, A.selectedFrames), ["stop"])
                }, [
                  I.frames.length > 1 ? (Le(), Ve("span", QP, tt(I.frames.length), 1)) : lt("", !0)
                ], 46, ZP))), 128))
              ], 40, JP))), 128)) : lt("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: Et({ left: y(p.value + 0.5) })
              }, null, 4)
            ], 2)) : lt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, LP)
    ], 2)), [
      [Ri, e.model.visible]
    ]);
  }
}, n2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: mt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, r2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, i2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", r2, [
      (Le(!0), Ve(Ze, null, Nt(e.buttons, (n) => jr((Le(), Vn(nn, {
        key: n.key,
        "extra-class": {
          active: n.active,
          "pano-btn-icon-accent": n.accent
        },
        icon: n.icon,
        label: n.label,
        tip: n.tip,
        pressed: n.pressed,
        attrs: { [n.attr]: n.value, disabled: n.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [Ri, n.visible !== !1]
      ])), 128))
    ]));
  }
}, o2 = ["data-video-ready"], s2 = { class: "pano-video-transport-shell" }, a2 = { class: "pano-video-controls-left" }, l2 = { class: "pano-video-filmstrip" }, c2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, u2 = ["src", "onLoad"], d2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, f2 = ["max", "value", "disabled"], p2 = { class: "pano-video-controls-right" }, h2 = ["data-has-audio"], m2 = { class: "pano-video-volume-pop" }, g2 = ["value", "disabled"], y2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? We.pause : We.play;
    }), o = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? We.loop_off : We.loop;
    }), l = ut(() => {
      var C, B;
      return ((C = t.state) == null ? void 0 : C.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var C, B, R;
      return ((C = t.state) == null ? void 0 : C.hasAudio) !== !0 ? We.volume : ((B = t.state) == null ? void 0 : B.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? We.volume_muted : We.volume2;
    }), d = ut(() => {
      var C;
      return Math.max(0, Math.min(100, Number(((C = t.state) == null ? void 0 : C.progressPct) || 0)));
    }), u = ut(() => ({ left: `${d.value}%` })), f = ut(() => {
      var J, _e;
      const C = (J = t.state) == null ? void 0 : J.volumePct, B = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, R = Number(C ?? B ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, R))}%`
      };
    }), p = ut(() => {
      var R, J;
      const B = [
        String(((R = t.state) == null ? void 0 : R.currentTimeLabel) || "0:00"),
        String(((J = t.state) == null ? void 0 : J.durationLabel) || "0:00")
      ].reduce((_e, ke) => Math.max(_e, ke.length), 4);
      return `${Math.max(4, B)}ch`;
    }), v = ut(() => ({ "--pano-video-time-ch": p.value })), g = ut(() => {
      var R, J;
      const C = Array.isArray((R = t.state) == null ? void 0 : R.thumbnails) ? t.state.thumbnails : [];
      if (C.length) return C;
      const B = Math.max(7, Number(((J = t.state) == null ? void 0 : J.thumbnailCount) || 9));
      return Array.from({ length: B }, (_e, ke) => ({
        id: `placeholder-${ke}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ Jt(/* @__PURE__ */ new Set()), y = (C) => String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.src) || (C == null ? void 0 : C.label) || ""), W = (C) => h.value.has(y(C)), H = (C) => {
      const B = new Set(h.value);
      B.add(y(C)), h.value = B;
    };
    Ei(g, (C) => {
      const B = new Set(C.map(y)), R = /* @__PURE__ */ new Set();
      for (const J of h.value)
        B.has(J) && R.add(J);
      h.value = R;
    }, { immediate: !0 });
    const te = ut(() => {
      var C;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((C = t.state) == null ? void 0 : C.shellMaxWidthPx) || 640))}px`
      };
    });
    return (C, B) => (Le(), Ve("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(te.value)
    }, [
      B[1] || (B[1] = Ne("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B[2] || (B[2] = Ne("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Ne("div", s2, [
        Ne("div", a2, [
          Ye(nn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Ne("div", {
            class: "pano-video-time pano-video-time-start",
            style: Et(v.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", l2, [
          Ne("div", c2, [
            (Le(!0), Ve(Ze, null, Nt(g.value, (R) => (Le(), Ve("div", {
              key: y(R),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !R.src,
                "is-loaded": R.src && W(R)
              }])
            }, [
              R.src ? (Le(), Ve("img", {
                key: 0,
                src: R.src,
                alt: "",
                draggable: "false",
                onLoad: (J) => H(R)
              }, null, 40, u2)) : (Le(), Ve("span", d2))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: Et(u.value),
            "aria-hidden": "true"
          }, [...B[0] || (B[0] = [
            Ne("span", { class: "pano-video-playhead-line" }, null, -1),
            Ne("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Ne("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, f2)
        ]),
        Ne("div", p2, [
          Ne("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(v.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Ye(nn, {
            "extra-class": "pano-video-control",
            icon: a.value,
            label: o.value,
            tip: s.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          Ne("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Ne("div", m2, [
              Ne("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Et(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, g2)
            ]),
            Ye(nn, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, h2)
        ])
      ])
    ], 14, o2));
  }
}, b2 = { class: "pano-floating-top" }, v2 = ["data-selected", "data-view-count"], S2 = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], _2 = { class: "label" }, w2 = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Le(), Ve("div", b2, [
        Ne("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Le(!0), Ve(Ze, null, Nt(e.buttons, (i) => jr((Le(), Ve("button", {
            key: i.key,
            class: mt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ye(jt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ne("span", _2, tt(i.label), 1)
          ], 10, S2)), [
            [Ri, i.visible !== !1]
          ])), 128))
        ], 8, v2)
      ]);
    };
  }
};
function V0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: We.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: We.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: We.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: We.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: We.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: We.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: We.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: We.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: We.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: We.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: We.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: We.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: We.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: We.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: We.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: We.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: We.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: We.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: We.eye }
    ],
    paintPanes: [
      {
        key: "paint",
        footer: "paint",
        group: "paint",
        clearTarget: "paint",
        clearLabel: "Clear paint",
        clearTip: "Clear paint",
        clearHidden: !0,
        showColorFloat: !0,
        tools: [
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: We.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: We.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: We.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: We.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: We.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: We.lasso_tool }
        ]
      },
      {
        key: "mask",
        footer: "mask",
        group: "mask",
        clearTarget: "mask",
        clearLabel: "Clear mask",
        clearTip: "Clear mask",
        clearHidden: !1,
        showColorFloat: !1,
        tools: [
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: We.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: We.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: We.lasso_tool }
        ]
      }
    ]
  };
}
const k2 = ["aria-label"], x2 = { class: "pano-stage-column" }, M2 = { class: "pano-stage-wrap" }, N2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, P2 = {
  __name: "PanoModal",
  props: {
    open: { type: Boolean, default: !0 },
    type: { type: String, default: "stickers" },
    readOnly: { type: Boolean, default: !1 },
    hideSidebar: { type: Boolean, default: !1 },
    nodeTitle: { type: String, default: "Panorama Stickers" },
    paintSwatches: { type: Array, default: () => [] },
    shellPreset: { type: Object, default: null },
    uiState: { type: Object, default: () => ({}) },
    // The Timeline's playhead refs ({ frame, playing }), apart from uiState so that a frame of playback
    // updates only the Timeline.
    playhead: { type: Object, default: void 0 }
  },
  emits: ["close", "image-file-selected", "image-file-cancelled", "timeline"],
  setup(e, { expose: t, emit: r }) {
    const n = e, i = r;
    let o = "", s = !1, a = null;
    const l = /* @__PURE__ */ Jt(null), c = /* @__PURE__ */ Jt(null), d = /* @__PURE__ */ Jt(null);
    function u() {
      var ge, Se;
      return ((Se = (ge = d.value) == null ? void 0 : ge.getRefs) == null ? void 0 : Se.call(ge)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(ge) {
      var Se, pe;
      return ((pe = (Se = c.value) == null ? void 0 : Se.open) == null ? void 0 : pe.call(Se, ge)) === !0;
    }
    function p(ge) {
      i("image-file-selected", ge);
    }
    function v(ge) {
      i("image-file-cancelled", ge);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = ut(() => n.readOnly === !0), h = ut(() => n.shellPreset || V0(n.type)), y = ut(() => {
      var Se, pe, fe;
      const ge = String((((Se = n.uiState) == null ? void 0 : Se.stageStatus) === "failed" ? (pe = n.uiState) == null ? void 0 : pe.stageStatusDetail : (fe = n.uiState) == null ? void 0 : fe.stageWarningDetail) ?? "");
      return ge === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : ge === "stickers" ? "One or more sticker previews are unavailable." : ge === "frame" ? "The editor hit a rendering error. Check the browser console for details." : ge === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : ge.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = ut(() => {
      var ge, Se, pe;
      return ((ge = n.uiState) == null ? void 0 : ge.stageStatus) === "failed" || (Se = n.uiState) != null && Se.stageWarningDetail ? y.value : (pe = n.uiState) == null ? void 0 : pe.stageNotice;
    }), H = ut(() => {
      var Se;
      const ge = Array.isArray((Se = h.value) == null ? void 0 : Se.floatingButtons) ? h.value.floatingButtons.slice() : [];
      return g.value && ge.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: We.fullscreen
      }), ge;
    });
    function te() {
      const ge = l.value;
      return ge ? Array.from(ge.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Se) => Se instanceof HTMLElement ? !Se.hidden && Se.tabIndex >= 0 && Se.offsetParent !== null : !1) : [];
    }
    function C() {
      var pe;
      const Se = te()[0] || l.value;
      (pe = Se == null ? void 0 : Se.focus) == null || pe.call(Se);
    }
    function B() {
      var ge;
      a != null && a.isConnected && ((ge = a.focus) == null || ge.call(a)), a = null;
    }
    function R(ge) {
      var Se, pe, fe, de;
      if (!ge.defaultPrevented) {
        if (ge.key === "Tab") {
          const re = te();
          if (!re.length) {
            ge.preventDefault(), (pe = (Se = l.value) == null ? void 0 : Se.focus) == null || pe.call(Se);
            return;
          }
          const ye = re[0], ce = re[re.length - 1], Z = document.activeElement;
          if (ge.shiftKey) {
            (Z === ye || Z === l.value || !((fe = l.value) != null && fe.contains(Z))) && (ge.preventDefault(), ce.focus());
            return;
          }
          (Z === ce || !((de = l.value) != null && de.contains(Z))) && (ge.preventDefault(), ye.focus());
          return;
        }
        ge.key === "Escape" && i("close");
      }
    }
    function J() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function _e() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function ke(ge) {
      document.removeEventListener("keydown", R), ge ? (a || (a = document.activeElement), J(), document.addEventListener("keydown", R), $l(() => {
        C();
      })) : (_e(), B());
    }
    return jl(() => {
      ke(n.open);
    }), Rs(() => {
      _e(), document.removeEventListener("keydown", R), B();
    }), Ei(() => n.open, (ge) => {
      ke(ge);
    }), (ge, Se) => e.open ? (Le(), Ve("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: Se[2] || (Se[2] = Mt((pe) => i("close"), ["self"]))
    }, [
      Ne("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Ne("div", x2, [
          Ne("div", M2, [
            Se[3] || (Se[3] = Ne("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            Se[4] || (Se[4] = Ne("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            Se[5] || (Se[5] = Ne("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Le(), Ve("div", N2, tt(W.value), 1)) : lt("", !0),
            Se[6] || (Se[6] = Ne("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ne("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ye(rN, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ye(h0, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: p,
              onFileCancelled: v
            }, null, 512),
            g.value ? lt("", !0) : (Le(), Ve(Ze, { key: 1 }, [
              Ye(i2, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ye(PM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ye(nN, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ye(y2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ye(w2, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ye(wM, {
              buttons: e.uiState.floatingButtons || H.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ye(dN, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ye(n2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ye(FM, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ye(t2, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: Se[0] || (Se[0] = (pe) => i("timeline", pe))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? lt("", !0) : (Le(), Vn(_P, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: Se[1] || (Se[1] = (pe) => i("timeline", pe))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, k2)
    ])) : lt("", !0);
  }
}, ar = "loading", Fs = "ready", Jn = "failed";
function $0(e, t = "") {
  return e && (e.__panoLoadState = ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function z0(e, t = "") {
  return e && (e.__panoLoadState = Fs, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function j0(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Lu(e, t) {
  return e ? e.__panoLoadState === Jn ? Jn : typeof t == "function" && t(e) ? Fs : ar : Fs;
}
function Vu(e) {
  return Lu(e) === Jn;
}
function A2({ presented: e, background: t = Fs, stickers: r = [] } = {}) {
  if (!e) return { status: ar, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === ar, o = n.includes(ar);
  if (i && o) return { status: ar, detail: "mixed" };
  if (i) return { status: ar, detail: "background" };
  if (o) return { status: ar, detail: "stickers" };
  const s = t === Jn, a = n.includes(Jn);
  return s && a ? { status: Jn, detail: "mixed" } : s ? { status: Jn, detail: "background" } : a ? { status: Jn, detail: "stickers" } : { status: Fs, detail: "" };
}
const C2 = "state_json", I2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), sf = "sticker_image_1", E2 = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), H0 = 0.01, O2 = "external_image", Di = "pano_sticker_input_images", G0 = "pano_sticker_input_videos", K0 = "pano_sticker_input_frames", W0 = "pano_sticker_input_video_meta", F2 = !0, nc = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Nr = Math.PI / 180, Vi = 180 / Math.PI, $u = 1, U0 = "rgb(255, 221, 87)", T2 = "rgb(228, 228, 231)", D2 = "rgb(180, 150, 60)", R2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, L2 = 64, Kp = 40, Gc = 16, V2 = 0.45, Wp = 180, $2 = 160, Cl = 24, z2 = 4, j2 = 4;
function Kc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function H2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function G2(e, t, r) {
  const n = Oe((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function K2(e) {
  return e * e * e;
}
function rc(e, t, r) {
  return { x: e, y: t, z: r };
}
function Up(e, t) {
  return rc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Bp(e, t) {
  return rc(e.x * t, e.y * t, e.z * t);
}
function Wc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function W2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return rc(e.x / t, e.y / t, e.z / t);
}
function ka(e) {
  return {
    yaw: Kt(Math.atan2(e.x, e.z) * Vi),
    pitch: Oe(Math.asin(Oe(e.y, -1, 1)) * Vi, -90, 90)
  };
}
function ei(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, s = t[n].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (r = !r);
  }
  return r;
}
function Zo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Uc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return Zo(e, t);
  const l = Oe((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Xn(e, t, r) {
  return e + (t - e) * r;
}
function _r(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Oe(r, 0, 1)})`;
}
function U2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let xa = { fillStyle: "", url: "" };
function B2(e, t, r) {
  if (xa.url && xa.fillStyle === String(e || ""))
    return xa.url;
  const n = U2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Cl}" height="${Cl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return xa = { fillStyle: String(e || ""), url: n }, n;
}
function Il(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Hn(e) {
  return {
    r: Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Oe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function fn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Y2(e) {
  return nc.some((t) => Il(e, t.color));
}
function zu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Oe(Number(t), 0, 1), o = Oe(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const s = Math.floor(n * 6), a = n * 6 - s, l = o * (1 - i), c = o * (1 - a * i), d = o * (1 - (1 - a) * i);
  switch (s % 6) {
    case 0:
      return { r: o, g: d, b: l };
    case 1:
      return { r: c, g: o, b: l };
    case 2:
      return { r: l, g: o, b: d };
    case 3:
      return { r: l, g: c, b: o };
    case 4:
      return { r: d, g: l, b: o };
    default:
      return { r: o, g: l, b: c };
  }
}
function ju(e) {
  const t = Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function mo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function q2(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Yp(e) {
  const { paintCount: t, maskCount: r } = q2(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return n.forEach((s) => {
    String((s == null ? void 0 : s.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: r + o
  };
}
function B0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, p = Number(s.rot_deg || 0) * Nr, v = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-n, 0, n])
    e.save(), e.translate(u + g, f), e.rotate(p), e.scale(v, v), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function oo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ma(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function X2(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), n = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return n[r] ? n[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Qo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function J2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function Z2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function Q2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Y0 = "pano_suite.ui_settings.v1", q0 = "pano_suite.node_grid_visibility.v1";
let no = null, yr = null;
function Ba(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function eA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Y0)) || "").trim();
    if (!t) return no ? Ba(no) : null;
    const r = JSON.parse(t), n = Ba(r);
    return no = n, n;
  } catch {
    return no ? Ba(no) : null;
  }
}
function tA(e) {
  var r;
  const t = Ba(e);
  no = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Y0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function X0() {
  var e;
  if (yr && typeof yr == "object")
    return yr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(q0)) || "").trim();
    if (!t)
      return yr = {}, yr;
    const r = JSON.parse(t);
    return yr = r && typeof r == "object" ? r : {}, yr;
  } catch {
    return yr = {}, yr;
  }
}
function nA(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = X0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function rA(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = X0();
  n[r] = !!t, yr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(q0, JSON.stringify(n));
  } catch {
  }
}
function iA(e, t) {
  const r = { ...e }, n = t.map((i) => i(Bc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Bc(r, t[o].name))), Bc(r, "showEditor");
}
function Bc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const ii = /* @__PURE__ */ new Map(), oA = 12;
function sA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ii.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ii.delete(t), ii.set(t, r), r);
}
function aA(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ii.delete(r), ii.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ii.size > oA; ) {
      const i = ii.keys().next().value;
      if (!i) break;
      ii.delete(i);
    }
}
function lA(e) {
  const {
    comfyMedia: t,
    editor: r,
    editorView: n,
    floatingRightEl: i,
    imageCache: o,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: a,
    mediaSource: l,
    mediaUiImage: c,
    node: d,
    portStillCanvas: u,
    portVideoEl: f,
    readOnly: p,
    runtime: v,
    scheduler: g,
    stageWrap: h,
    state: y,
    stateV2: W,
    stillCanvas: H,
    studio: te,
    timelinePlayhead: C,
    type: B,
    uiState: R,
    videoEl: J
  } = e;
  let _e, ke, ge, Se, pe, fe, de;
  const re = {
    thumbnailJobId: 0,
    thumbnailSrc: "",
    // Sources whose filmstrip could not be built; a refresh does not build it again.
    thumbnailFailedSrcs: /* @__PURE__ */ new Set(),
    // Sources that failed to load (a temp MP4 the server deleted) are not tried again in this editor.
    failedSrcs: /* @__PURE__ */ new Set(),
    videoFailed: !1,
    // The legacy transport's slider paused playback and plays again when it is let go.
    resumeAfterScrub: !1,
    // The fps of the editor's own background VIDEO result, 0 for a file without one.
    metaFps: 0
  }, ye = 9, ce = [];
  let Z = 0;
  const U = () => {
    var ae, Ie;
    const N = (ae = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : ae.call(h), ue = (Ie = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : Ie.call(i), Me = Math.max(0, Number((N == null ? void 0 : N.width) || 0)), Ee = ue ? Math.max(0, Number(ue.width || 0)) : 0, ze = Ee > 0 ? Ee + 14 + 12 : 72, Ce = Math.max(280, Math.floor(Me - ze * 2)), He = r.fullscreen ? Math.min(1200, Ce) : Ce;
    R.videoTransport.shellMaxWidthPx = He;
  }, P = () => {
    Z || (Z = g.requestFrame(() => {
      Z = 0, U();
    }));
  }, he = (N) => {
    if (!(N instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(N.audioTracks) && N.audioTracks.length > 0 || N.audioTracks && typeof N.audioTracks.length == "number" && N.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof N.mozHasAudio == "boolean") return N.mozHasAudio;
    } catch {
    }
    try {
      if (Number(N.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!R.videoTransport.hasAudio;
  }, A = typeof ResizeObserver < "u" ? new ResizeObserver(() => P()) : null;
  A == null || A.observe(h), i && (A == null || A.observe(i)), ce.push(() => {
    var N;
    Z && (g.cancelFrame(Z), Z = 0), (N = A == null ? void 0 : A.disconnect) == null || N.call(A);
  }), P();
  const I = () => {
    re.thumbnailJobId += 1, re.thumbnailSrc = "", R.videoTransport.thumbnails = [], R.videoTransport.thumbnailCount = ye;
  }, k = async (N, ue, Me) => {
    const Ee = String(N || "").trim();
    if (!Ee) {
      I();
      return;
    }
    const Te = sA(Ee);
    if (Te) {
      re.thumbnailSrc = Ee, R.videoTransport.thumbnails = Te.thumbnails, R.videoTransport.thumbnailCount = Te.thumbnailCount;
      return;
    }
    const $e = ++re.thumbnailJobId;
    re.thumbnailSrc = Ee, R.videoTransport.thumbnails = [], R.videoTransport.thumbnailCount = ye;
    const ze = Vs(document, "editor.thumbnails");
    ze.preload = "auto", ze.muted = !0, ze.playsInline = !0, ze.crossOrigin = "anonymous";
    const Ce = on({ label: "editor.thumbnail" });
    try {
      const He = await new Promise((yt) => {
        let Tt = !1;
        const pt = (en) => {
          Tt || (Tt = !0, yt(en));
        };
        ze.addEventListener("loadedmetadata", () => pt(!0), { once: !0 }), ze.addEventListener("canplay", () => pt(!0), { once: !0 }), ze.addEventListener("error", () => pt(!1), { once: !0 }), ze.src = Ee, ze.load();
      });
      if (re.thumbnailJobId !== $e) return;
      const ae = Number(ze.videoWidth || 0), Ie = Number(ze.videoHeight || 0);
      if (!He || ae < 1 || Ie < 1) {
        re.thumbnailFailedSrcs.add(Ee);
        return;
      }
      const Ae = Math.max(0, Number(ze.duration || ue || 0)), Fe = 46, Ge = Math.max(72, Math.round(ae / Ie * Fe));
      Ce.width = Ge, Ce.height = Fe;
      const Ke = Ce.getContext("2d");
      if (!Ke) return;
      const Ue = [], vt = (yt) => new Promise((Tt) => {
        let pt = !1;
        const en = () => {
          pt || (pt = !0, Tt());
        };
        ze.addEventListener("seeked", en, { once: !0 }), ze.addEventListener("error", en, { once: !0 });
        try {
          ze.currentTime = yt;
        } catch {
          en();
        }
      });
      for (let yt = 0; yt < ye; yt += 1) {
        if (re.thumbnailJobId !== $e) return;
        const Tt = ye <= 1 ? 0 : yt / (ye - 1), pt = Ae > 0 ? Math.max(0, Math.min(Ae - Math.max(1e-3, 0.5 / Math.max(1, Number(Me || 24))), Ae * Tt)) : 0;
        if (await vt(pt), re.thumbnailJobId !== $e) return;
        Ke.clearRect(0, 0, Ge, Fe), Ke.drawImage(ze, 0, 0, Ge, Fe), Ue.push({
          id: `thumb-${yt}`,
          src: Ce.toDataURL("image/jpeg", 0.72),
          time: pt,
          label: L(pt)
        });
      }
      if (re.thumbnailJobId !== $e) return;
      R.videoTransport.thumbnails = Ue, R.videoTransport.thumbnailCount = Ue.length || ye, aA(Ee, {
        thumbnails: Ue,
        thumbnailCount: Ue.length || ye,
        duration: Ae,
        fps: Me
      });
    } finally {
      ze.removeAttribute("src"), ze.load(), Ss(Ce);
    }
  };
  ce.push(() => {
    I();
  });
  const x = qg({
    video: J instanceof HTMLVideoElement ? J : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (N) => g.requestFrame(N),
      cancelFrame: (N) => g.cancelFrame(N)
    },
    fps: w,
    span: () => {
      if (W) return de();
      const N = Math.round(Number(R.videoTransport.duration || 0) * w());
      return J.loop || !(N > 0) ? 1 / 0 : N;
    },
    loop: () => W,
    // Panorama Studio's background VIDEO is where its Clip range puts it (state.background).
    place: () => _e(),
    onFrame: (N) => {
      W ? Se(N) : F(), ge({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      $() && (v.backgroundDirty = !0);
    },
    onChange: () => {
      F(), C.playing.value = x.playing, fe(), ge({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  ce.push(() => x.dispose());
  const se = W && f instanceof HTMLVideoElement ? Kd({
    video: f,
    onCapture: () => {
      var Me;
      const N = Number(f.videoWidth || 0), ue = Number(f.videoHeight || 0);
      N < 1 || ue < 1 || (u.width = N, u.height = ue, (Me = u.getContext("2d")) == null || Me.drawImage(f, 0, 0), u.__panoFrameIdx += 1, ge({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => ge({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  se && ce.push(() => se.dispose());
  const Q = W ? Nd({
    createImage: (N, ue) => {
      const Me = new Image();
      return Me.onload = ue, Me.onerror = ue, Me.src = N, Me;
    },
    onLoad: () => ge({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (J instanceof HTMLVideoElement) {
    const N = () => {
      X(), ge({ cause: "frame_view", localOnly: !0 });
    }, ue = () => {
      F({
        hasAudio: R.videoTransport.hasAudio,
        muted: J.muted,
        volume: Number(J.volume ?? R.videoTransport.volume ?? 1)
      });
    }, Me = () => {
      const Ee = J.dataset.panoSrc;
      Ee && (re.failedSrcs.add(Ee), X(), ge());
    };
    for (const [Ee, Te] of [
      ["loadedmetadata", N],
      ["loadeddata", N],
      ["canplay", N],
      ["volumechange", ue],
      ["error", Me]
    ])
      J.addEventListener(Ee, Te), ce.push(() => J.removeEventListener(Ee, Te));
  }
  function E(N) {
    return t.uiList(d, N);
  }
  function b(N) {
    return t.uiValue(d, N);
  }
  function G() {
    const N = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (sl(N))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ue = Y();
    return ue ? { videoKey: ue.videoKey, metaKey: ue.metaKey } : B === "stickers" || B === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function m() {
    const { metaKey: N } = G(), ue = b(N);
    return Array.isArray(ue) && ue.length > 0 && ue[0] && typeof ue[0] == "object" ? ue[0] : ue && typeof ue == "object" ? ue : null;
  }
  function S(N) {
    return N ? N instanceof HTMLVideoElement ? [
      String(N.currentSrc || N.src || ""),
      Number(N.videoWidth || 0),
      Number(N.videoHeight || 0)
    ].join("|") : N instanceof HTMLCanvasElement ? [
      "canvas",
      Number(N.width || 0),
      Number(N.height || 0),
      String(N.__panoFrameIdx || 0)
    ].join("|") : [
      String(N.currentSrc || N.src || ""),
      Number(N.naturalWidth || N.width || 0),
      Number(N.naturalHeight || N.height || 0)
    ].join("|") : "none";
  }
  function L(N) {
    const ue = Math.max(0, Math.floor(Number(N || 0))), Me = Math.floor(ue / 60), Ee = ue % 60;
    return `${Me}:${String(Ee).padStart(2, "0")}`;
  }
  function w() {
    return W ? y.timeline.fps : re.metaFps || 1e3;
  }
  function F(N = {}) {
    const ue = Number(N.duration ?? R.videoTransport.duration ?? 0), Me = Math.max(1, Number(N.fps ?? R.videoTransport.fps ?? 24)), Ee = x.frame / w(), Te = Object.prototype.hasOwnProperty.call(N, "ready") ? !!N.ready : !!R.videoTransport.ready, $e = x.playing, ze = Object.prototype.hasOwnProperty.call(N, "visible") ? !!N.visible : !!R.videoTransport.visible, Ce = Object.prototype.hasOwnProperty.call(N, "muted") ? !!N.muted : !!(J instanceof HTMLVideoElement ? J.muted : R.videoTransport.muted), He = Number(
      Object.prototype.hasOwnProperty.call(N, "volume") ? N.volume : J instanceof HTMLVideoElement ? J.volume : R.videoTransport.volume
    ), ae = Object.prototype.hasOwnProperty.call(N, "hasAudio") ? !!N.hasAudio : he(J), Ie = Object.prototype.hasOwnProperty.call(N, "loop") ? !!N.loop : !!R.videoTransport.loop;
    Object.assign(R.videoTransport, {
      ready: Te,
      playing: $e,
      visible: ze,
      loop: Ie,
      currentTime: Number.isFinite(Ee) ? Ee : 0,
      duration: Number.isFinite(ue) ? ue : 0,
      progressPct: ue > 1e-6 ? Math.max(0, Math.min(100, Ee / ue * 100)) : 0,
      currentTimeLabel: L(Ee),
      durationLabel: L(ue),
      frameCount: Math.max(0, Number(N.frameCount ?? R.videoTransport.frameCount ?? 0)),
      fps: Me,
      hasAudio: ae,
      muted: Ce,
      volume: Math.max(0, Math.min(1, Number.isFinite(He) ? He : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(He) ? He : 1)) * 100),
      thumbnails: Array.isArray(N.thumbnails) ? N.thumbnails : R.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(N.thumbnailCount ?? R.videoTransport.thumbnailCount ?? ye))
    });
  }
  function z() {
    return !!(J instanceof HTMLVideoElement && !W && J.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function ne() {
    if (!(J instanceof HTMLVideoElement) || !R.videoTransport.hasAudio) return;
    const N = !J.muted;
    J.muted = N, !N && Number(J.volume || 0) <= 0 && (J.volume = Math.max(0.01, Number(R.videoTransport.volume || 1))), F({
      hasAudio: R.videoTransport.hasAudio,
      muted: J.muted,
      volume: Number(J.volume ?? R.videoTransport.volume ?? 1)
    });
  }
  function T() {
    F({
      visible: z()
    });
  }
  function $() {
    if (!(J instanceof HTMLVideoElement) || Number(J.videoWidth || 0) < 1 || Number(J.videoHeight || 0) < 1) return !1;
    const N = Number(J.videoWidth || 0), ue = Number(J.videoHeight || 0);
    (H.width !== N || H.height !== ue) && (H.width = N, H.height = ue);
    const Me = H.getContext("2d");
    return Me ? (Me.clearRect(0, 0, N, ue), Me.drawImage(J, 0, 0, N, ue), H.__panoFrameIdx = Number(H.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function _() {
    return !x.showsVideo && Number(H.width || 0) > 0 && Number(H.height || 0) > 0 && Number(H.__panoFrameIdx || 0) > 0 ? H : J instanceof HTMLVideoElement && Number(J.videoWidth || 0) > 0 && Number(J.videoHeight || 0) > 0 && Number(J.readyState || 0) >= 2 ? J : null;
  }
  function D() {
    H.__panoFrameIdx = 0, v.backgroundDirty = !0;
  }
  function X() {
    if (!(J instanceof HTMLVideoElement)) return null;
    const { videoKey: N } = G(), ue = (Y() || Ot(d, "background")) && E(N)[0] || null, Me = l(ue), Ee = [Me, t.linkedVideoFile(d, M())].filter(Boolean), Te = Ee.find((Ae) => !re.failedSrcs.has(Ae)) || "";
    re.videoFailed = !Te && Ee.length > 0;
    const $e = Te && Te === Me ? m() : null;
    re.metaFps = Number($e == null ? void 0 : $e.fps) > 0 ? Number($e.fps) : 0;
    const ze = Math.max(1, Number(($e == null ? void 0 : $e.fps) || (W ? y.timeline.fps : 24))), Ce = J.dataset.panoSrc === Te && Number.isFinite(J.duration) ? J.duration : 0, He = Number(($e == null ? void 0 : $e.duration) || (($e == null ? void 0 : $e.frames) > 0 ? $e.frames / ze : Ce)), ae = Math.max(0, Number(($e == null ? void 0 : $e.frames) || Math.round(He * ze))), Ie = !!($e != null && $e.has_audio) || he(J);
    return Te && J.dataset.panoSrc !== Te ? (J.pause(), D(), J.dataset.panoSrc = Te, J.loop = !W && !!R.videoTransport.loop, J.muted = !!R.videoTransport.muted, J.volume = Math.max(0, Math.min(1, Number(R.videoTransport.volume ?? 1))), J.src = Te, J.load(), x.setSource(!0), W || x.seek(0)) : !Te && J.getAttribute("src") && (J.pause(), J.removeAttribute("src"), delete J.dataset.panoSrc, J.load(), D(), I(), x.setSource(!1)), W || (J.loop = !!R.videoTransport.loop), Te && !W && re.thumbnailSrc !== Te && !re.thumbnailFailedSrcs.has(Te) && k(Te, He, ze), Te || I(), F({
      ready: !!Te,
      visible: !!Te && z(),
      duration: He,
      frameCount: ae,
      fps: ze,
      hasAudio: Ie,
      loop: !!J.loop,
      muted: !!J.muted,
      volume: Number(J.volume ?? R.videoTransport.volume ?? 1),
      thumbnailCount: R.videoTransport.thumbnailCount
    }), Te || null;
  }
  function be(N, ue = null) {
    return c(d, N, o, ue || (() => ge()));
  }
  function me(N = null) {
    return Ot(d, "external-sticker") ? be(Di, N) : null;
  }
  function xe() {
    if (!Ot(d, "external-sticker")) return null;
    const N = E(W0)[0];
    if (!N || typeof N != "object") return null;
    const ue = E(K0).map(l).filter(Boolean);
    if (ue.length) return { frames: ue, meta: N };
    const Me = l(E(G0)[0] || null);
    return Me ? { src: Me, meta: N } : null;
  }
  function q() {
    return Ot(d, "external-sticker") ? Ns(E) : null;
  }
  function ve() {
    const N = y.stickers.find(ke), ue = N ? xe() : null, Me = ue ? wd(N.clip, r.frame, y.timeline.fps, ue.meta) : null;
    se.follow({ src: (ue == null ? void 0 : ue.src) || "", time: Me, playing: x.advancing, fps: y.timeline.fps });
    const Ee = N ? V(N) : null, Te = ue != null && ue.frames ? Q.picture(ue.frames, Me, ue.meta, Ee) : se.picture(u, Ee);
    return Te ? { media: Te, revision: S(Te), source: Md(ue, Ee) } : null;
  }
  function O() {
    return !W || !Ot(d, "scene") ? null : ml(E("pano_scene_files"), E("pano_scene_meta"), l);
  }
  function oe() {
    return !W || !Ot(d, "external-sticker") ? null : ml(E("pano_sticker_files"), E("pano_sticker_meta"), l);
  }
  function V(N) {
    var ze;
    if (N && typeof N == "object" && (ke(N) || N.external === !0))
      return me(() => {
        oi(d, "image-loaded");
      });
    const ue = W ? ee(N) : String(N && typeof N == "object" ? N.asset_id || N.assetId || "" : N || "");
    if (!ue) return null;
    const Me = o.get(ue);
    if (Me) return Me;
    const Ee = W ? hl(N.source) : (ze = y.assets) == null ? void 0 : ze[ue], Te = a(Ee);
    if (!Te) return null;
    const $e = new Image();
    return $0($e, Te), $e.onload = () => {
      z0($e, Te), ge();
    }, $e.onerror = () => {
      j0($e, Te), ge();
    }, $e.src = Te, o.set(ue, $e), $e;
  }
  function ee(N) {
    const { source: ue } = N;
    return ue.filename ? `file:${ue.storage}:${ue.subfolder}:${ue.filename}` : `sticker:${N.id}`;
  }
  function K() {
    if (B === "cutout") {
      const $e = _();
      if ($e) return $e;
      const ze = s(
        d,
        ["erp_image", "bg_erp"],
        () => ge(),
        "background:cutout:erp_image|bg_erp"
      );
      return ze && !Vu(ze) ? ze : c(d, "pano_input_images", o, () => ge()) || ze || null;
    }
    const N = _();
    if (N) return N;
    const ue = Y(), Me = ue || Ot(d, "background") ? c(d, (ue == null ? void 0 : ue.imageKey) ?? "pano_input_images", o, () => ge()) : null;
    if (Me && !Vu(Me)) return Me;
    if (J instanceof HTMLVideoElement && J.dataset.panoSrc) return J;
    if (ue) return Me;
    const Ee = M();
    return s(d, Ee, () => ge(), `background:${Ee.join("|")}`) || Me || null;
  }
  function Y() {
    return !te || !Ot(d, "scene") ? null : Wd(E);
  }
  function j() {
    var N;
    return ((N = Y()) == null ? void 0 : N.coverage) ?? $n(y.coverage);
  }
  function M() {
    if (Y()) return [];
    if (B === "cutout") return ["erp_image", "bg_erp"];
    const N = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((Ee) => String((Ee == null ? void 0 : Ee.name) || "")) : [], ue = N.includes("erp_image"), Me = N.includes("bg_erp");
    return p && (ue || Me) ? ue ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : B === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function ie(N) {
    return N ? N instanceof HTMLImageElement ? !!N.complete && Number(N.naturalWidth || N.width || 0) > 0 && Number(N.naturalHeight || N.height || 0) > 0 : N instanceof HTMLVideoElement ? Number(N.videoWidth || 0) > 0 && Number(N.videoHeight || 0) > 0 && Number(N.readyState || 0) >= 2 : Number(N.width || N.naturalWidth || 0) > 0 && Number(N.height || N.naturalHeight || 0) > 0 : !1;
  }
  function le() {
    if (n.failed) return { status: Jn, detail: "renderer" };
    if (!n.ready) return { status: ar, detail: "boot" };
    const N = K(), ue = re.videoFailed ? Jn : Lu(N, ie), Me = [];
    for (const Ee of pe()) {
      if ((Ee == null ? void 0 : Ee.visible) === !1) continue;
      const Te = V(Ee);
      Me.push(Lu(Te, ie));
    }
    return A2({
      presented: v.hasPresentedFrame,
      background: ue,
      stickers: Me
    });
  }
  function we() {
    J instanceof HTMLVideoElement && J.pause(), ce.forEach((N) => {
      try {
        N();
      } catch {
      }
    });
  }
  return {
    connect(N) {
      ({
        backgroundVideoPlace: _e,
        isExternalSticker: ke,
        requestDraw: ge,
        setTimelineFrame: Se,
        skyStickers: pe,
        syncTimeline: fe,
        timelineSpanFrames: de
      } = N);
    },
    videoState: re,
    queueVideoTransportLayout: P,
    playback: x,
    portVideo: se,
    getNodeUiValue: b,
    getMediaRevisionToken: S,
    playbackFps: w,
    syncVideoTransportState: F,
    toggleVideoMuted: ne,
    syncVideoTransportVisibility: T,
    refreshModalVideoSource: X,
    getStickerUiImage: be,
    getExternalStickerPreviewImage: me,
    getPortMediaMeta: q,
    followPortSticker: ve,
    getStickerImage: V,
    stickerImageKey: ee,
    getConnectedErpImage: K,
    backgroundCoverage: j,
    upstreamBackground: Y,
    isDecodedImageReady: ie,
    getStageImageStatus: le,
    sceneFiles: O,
    stickerFiles: oe,
    disposeMediaSession: we
  };
}
function cA(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), s = Math.max(1, Number(r || 8));
  function a(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((u) => {
      n.push(String(u || ""));
    }), !n.length)) return;
    const d = Number(c.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(c) {
    n[i] !== c && (n.splice(i + 1), n.push(c), n.length > o && n.shift(), i = n.length - 1);
  }
  return a(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(c) {
      l(String(c || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const c = i - 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    redo() {
      const c = i + 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const c = n.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + s), p = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: p
      };
    },
    hydrate: a
  };
}
const uA = 80;
function J0(e) {
  return JSON.stringify(PS(e));
}
function dA(e) {
  return cA(uA, { entries: [J0(e)], index: 0 });
}
function Z0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function fA(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke;
  function ge({ initial: fe = !1 } = {}) {
    r || (C(), R(), _e(), fe || g(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(J0(te())), J()));
  }
  function Se(fe) {
    var Z, U, P;
    if (r) return;
    H();
    const de = fe < 0 ? t.historyController.undo() : t.historyController.redo();
    if (J(), !de) return;
    const re = AS(i, de), ye = (Z = i.timeline) == null ? void 0 : Z.fps, ce = JSON.stringify((U = i.background) == null ? void 0 : U.clip);
    Object.keys(i).forEach((he) => delete i[he]), Object.assign(i, re.state), C(!1), R({ restored: !0 }), o && h(), o && i.timeline.fps !== ye ? v.seek(Math.round(t.frame * i.timeline.fps / ye)) : o && JSON.stringify(i.background.clip) !== ce && v.seek(t.frame), t.selectedId = Z0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((P = d()) == null ? void 0 : P.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), n.backgroundDirty = !0, re.paintingChanged ? p() : f(), B(), ke(), c(), W({ cause: "cutout_frame" });
  }
  function pe() {
    var re, ye;
    const fe = Array.isArray((re = t.historyController) == null ? void 0 : re.entries) ? t.historyController.entries : [], de = Number((ye = t.historyController) == null ? void 0 : ye.index);
    return {
      canUndo: !r && fe.length > 1 && de > 0,
      canRedo: !r && fe.length > 1 && de >= 0 && de < fe.length - 1
    };
  }
  return {
    connect(fe) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: p,
        playback: v,
        pruneUpstreamRecords: g,
        rebuildUpstreamWorking: h,
        releaseHiddenSelection: y,
        requestDraw: W,
        stopTimelinePlayback: H,
        storedEditorState: te,
        syncCutoutShot: C,
        syncPaintUi: B,
        syncPortHandoff: R,
        syncUndoRedoButtons: J,
        syncUpstreamEdits: _e,
        updateSidePanel: ke
      } = fe);
    },
    pushHistory: ge,
    restoreHistory: Se,
    getHistoryCapabilities: pe
  };
}
function pA(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, v, g, h;
  function y() {
    return s !== "stickers" ? i.shots : n ? [...W(), ...H()] : W();
  }
  function W() {
    return n ? i.stickers.filter((M) => M.placement === "sky") : i.stickers;
  }
  function H() {
    if (!n) return [];
    const M = h(), ie = [...new Set(M.map((le) => le.origin.layer))];
    return M.filter((le) => le.placement === "sky").sort((le, we) => ie.indexOf(le.origin.layer) - ie.indexOf(we.origin.layer) || le.z_index - we.z_index);
  }
  function te(M) {
    return i.stickers.find((ie) => ie.id === M) || h().find((ie) => ie.id === M) || null;
  }
  function C(M) {
    return n && b(M);
  }
  function B(M) {
    return M.source.kind === "file" && !M.source.filename && !M.source.data_url;
  }
  function R(M) {
    if (!C(M)) return M;
    const ie = q(M) ? Ut(M) ? g(M) : p(M) : null;
    return Ad(M, r.frame, ie && { width: ie.naturalWidth || ie.width, height: ie.naturalHeight || ie.height });
  }
  function J(M, ie) {
    C(M) ? Zm(M, r.frame, ie) : Object.assign(M, ie);
  }
  function _e() {
    const M = i.painting || (i.painting = Mo(null));
    return Array.isArray(M.groups) || (M.groups = []), M.groups;
  }
  function ke(M = "paint") {
    var N, ue;
    const ie = Array.isArray((ue = (N = i.painting) == null ? void 0 : N[M]) == null ? void 0 : ue.strokes) ? i.painting[M].strokes : [], le = [], we = /* @__PURE__ */ new Set();
    for (const Me of ie) {
      const Ee = String((Me == null ? void 0 : Me.actionGroupId) || "").trim();
      !Ee || we.has(Ee) || (we.add(Ee), le.push(Ee));
    }
    return le;
  }
  function ge() {
    return ke("paint");
  }
  function Se(M, ie) {
    const le = String(ie || "").trim();
    return le ? `${M === "mask" ? "mask" : "paint"}:${le}` : "";
  }
  function pe(M) {
    const ie = String(M || "").trim();
    return ie ? `raster:${ie}` : "";
  }
  function fe(M) {
    const ie = String(M || "").trim();
    if (!ie) return "";
    const le = ie.match(/^raster:(.*)$/);
    return String(le ? le[1] || "" : ie).trim();
  }
  function de(M, ie = null) {
    const le = String(M || "").trim();
    if (!le) return { layerKind: "paint", actionGroupId: "" };
    const we = le.match(/^(paint|mask):(.*)$/);
    return we ? { layerKind: we[1] === "mask" ? "mask" : "paint", actionGroupId: String(we[2] || "").trim() } : { layerKind: ie === "mask" ? "mask" : "paint", actionGroupId: le };
  }
  function re() {
    var ie;
    let M = -1;
    for (const le of W())
      M = Math.max(M, Number((le == null ? void 0 : le.z_index) || 0));
    for (const le of _e())
      M = Math.max(M, Number((le == null ? void 0 : le.z_index) || 0));
    for (const le of Array.isArray((ie = i.painting) == null ? void 0 : ie.raster_objects) ? i.painting.raster_objects : [])
      String((le == null ? void 0 : le.layerKind) || "paint") === "paint" && (M = Math.max(M, Number((le == null ? void 0 : le.z_index) || 0)));
    return M + 1;
  }
  function ye(M, ie = null) {
    const le = String(M || "").trim();
    if (!le) return null;
    const we = _e();
    let N = we.find((ue) => String((ue == null ? void 0 : ue.actionGroupId) || "") === le);
    return N ? ie != null && (N.z_index = Math.max(0, Number(ie || 0))) : (N = {
      id: le,
      type: "strokeGroup",
      actionGroupId: le,
      z_index: ie == null ? re() : Math.max(0, Number(ie || 0)),
      locked: !1,
      frame: null
    }, we.push(N)), N;
  }
  function ce(M) {
    if (!(M != null && M.centerUv)) return [];
    const ie = Number(M.centerUv.u || 0), le = Number(M.centerUv.v || 0), we = Number(M.halfW || 0), N = Number(M.halfH || 0);
    return [
      {
        u: ((ie - we) % 1 + 1) % 1,
        v: Oe(le - N, 0, 1)
      },
      {
        u: ((ie + we) % 1 + 1) % 1,
        v: Oe(le - N, 0, 1)
      },
      {
        u: ((ie + we) % 1 + 1) % 1,
        v: Oe(le + N, 0, 1)
      },
      {
        u: ((ie - we) % 1 + 1) % 1,
        v: Oe(le + N, 0, 1)
      }
    ];
  }
  function Z() {
    const M = new Set(ge()), le = _e().filter((we) => M.has(String((we == null ? void 0 : we.actionGroupId) || "")));
    return M.forEach((we) => {
      le.some((N) => String((N == null ? void 0 : N.actionGroupId) || "") === we) || le.push({
        id: we,
        type: "strokeGroup",
        actionGroupId: we,
        z_index: re(),
        locked: !1,
        frame: null
      });
    }), le.sort((we, N) => Number((we == null ? void 0 : we.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0)), i.painting.groups = le, le;
  }
  function U(M, ie, le) {
    var Ae;
    const we = (Fe) => (Number(Fe || 0) % 1 + 1) % 1, N = [];
    for (const Fe of le) {
      const Ge = Fe == null ? void 0 : Fe.geometry, Ke = (Ge == null ? void 0 : Ge.geometryKind) === "lasso_fill" ? Ge == null ? void 0 : Ge.points : (Ge == null ? void 0 : Ge.processedPoints) || (Ge == null ? void 0 : Ge.rawPoints) || (Ge == null ? void 0 : Ge.points) || [];
      Array.isArray(Ke) && N.push(...Ke);
    }
    if (!N.length) return null;
    const ue = we(((Ae = N[0]) == null ? void 0 : Ae.u) || 0);
    let Me = 0, Ee = 0;
    N.forEach((Fe) => {
      const Ge = we((Fe == null ? void 0 : Fe.u) || 0);
      Me += ue + T(Ge, ue), Ee += Number((Fe == null ? void 0 : Fe.v) || 0);
    });
    const Te = (Me / N.length % 1 + 1) % 1;
    let $e = 1 / 0, ze = -1 / 0, Ce = 1 / 0, He = -1 / 0;
    N.forEach((Fe) => {
      const Ge = we((Fe == null ? void 0 : Fe.u) || 0), Ke = T(Ge, Te);
      $e = Math.min($e, Ke), ze = Math.max(ze, Ke);
      const Ue = Number((Fe == null ? void 0 : Fe.v) || 0);
      Ce = Math.min(Ce, Ue), He = Math.max(He, Ue);
    });
    const ae = le.reduce((Fe, Ge) => {
      const Ke = l(String((Ge == null ? void 0 : Ge.toolKind) || "pen")), Ue = Dn[Ke] || Dn[Dr], vt = Math.max(1, Number((Ge == null ? void 0 : Ge.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Fe, vt);
    }, 0), Ie = Math.max(35e-4, ae / 2048);
    return {
      centerUv: { u: ((Te + ($e + ze) * 0.5) % 1 + 1) % 1, v: Oe((Ce + He) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (ze - $e) * 0.5 + Ie,
      halfH: (He - Ce) * 0.5 + Ie,
      uvPad: Ie
    };
  }
  function P(M, ie, le) {
    const we = String(M || "").trim();
    if (!we) return null;
    const N = _e().find((Me) => String((Me == null ? void 0 : Me.actionGroupId) || "") === we);
    if (!N) return null;
    const ue = le || F(we, ie);
    return N.frame = U(we, ie, ue), N.frame;
  }
  function he() {
    var we;
    const M = W().map((N) => ({
      type: "sticker",
      id: String((N == null ? void 0 : N.id) || ""),
      z_index: Number((N == null ? void 0 : N.z_index) || 0),
      item: N
    })), ie = Z().map((N) => ({
      type: "strokeGroup",
      id: String((N == null ? void 0 : N.id) || (N == null ? void 0 : N.actionGroupId) || ""),
      actionGroupId: String((N == null ? void 0 : N.actionGroupId) || ""),
      z_index: Number((N == null ? void 0 : N.z_index) || 0),
      item: N
    })), le = (Array.isArray((we = i.painting) == null ? void 0 : we.raster_objects) ? i.painting.raster_objects : []).filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") === "paint").map((N) => ({
      type: "rasterObject",
      id: String((N == null ? void 0 : N.id) || ""),
      z_index: Number((N == null ? void 0 : N.z_index) || 0),
      item: N
    }));
    return [...M, ...ie, ...le].sort((N, ue) => Number(N.z_index || 0) - Number(ue.z_index || 0));
  }
  function A(M = !0) {
    var le, we, N, ue, Me, Ee;
    const ie = he().filter((Te) => Te.type === "strokeGroup").map((Te) => String(Te.actionGroupId || "")).filter((Te) => !!Te);
    if (M) {
      const Te = String(((we = (le = r.interaction) == null ? void 0 : le.stroke) == null ? void 0 : we.actionGroupId) || "").trim(), $e = String(((ue = (N = r.interaction) == null ? void 0 : N.stroke) == null ? void 0 : ue.layerKind) || "").trim(), ze = String(((Ee = (Me = r.interaction) == null ? void 0 : Me.stroke) == null ? void 0 : Ee.toolKind) || "").trim();
      Te && $e === "paint" && ze !== "eraser" && !ie.includes(Te) && ie.push(Te);
    }
    return ie;
  }
  function I(M = !0) {
    var Ee, Te, $e, ze, Ce, He;
    const ie = he();
    if (!M) return ie;
    const le = String(((Te = (Ee = r.interaction) == null ? void 0 : Ee.stroke) == null ? void 0 : Te.actionGroupId) || "").trim(), we = String(((ze = ($e = r.interaction) == null ? void 0 : $e.stroke) == null ? void 0 : ze.layerKind) || "").trim(), N = String(((He = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : He.toolKind) || "").trim();
    if (!le || we !== "paint" || N === "eraser" || ie.some((ae) => ae.type === "strokeGroup" && String(ae.actionGroupId || "") === le))
      return ie;
    const ue = f();
    let Me = ie.reduce((ae, Ie) => Math.max(ae, Number((Ie == null ? void 0 : Ie.z_index) || 0)), -1) + 1;
    return ue && w(ue) && String(ue.actionGroupId || "") === le && (Me = Number(ue.z_index || 0)), [
      ...ie,
      {
        type: "strokeGroup",
        id: le,
        actionGroupId: le,
        z_index: Me,
        item: null
      }
    ].sort((ae, Ie) => Number((ae == null ? void 0 : ae.z_index) || 0) - Number((Ie == null ? void 0 : Ie.z_index) || 0));
  }
  function k() {
    return _e().slice().sort((M, ie) => Number((M == null ? void 0 : M.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0)).map((M) => L(Se("paint", (M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))).filter(Boolean);
  }
  function x() {
    var M;
    return (Array.isArray((M = i.painting) == null ? void 0 : M.raster_objects) ? i.painting.raster_objects : []).filter((ie) => String((ie == null ? void 0 : ie.layerKind) || "paint") === "paint").slice().sort((ie, le) => Number((ie == null ? void 0 : ie.z_index) || 0) - Number((le == null ? void 0 : le.z_index) || 0)).map((ie) => m(pe((ie == null ? void 0 : ie.id) || ""))).filter(Boolean);
  }
  function se() {
    return Array.isArray(i.stickers) ? W() : [];
  }
  function Q() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...se(), ...H()];
  }
  function E(M) {
    return !!M && Array.isArray(i.shots) && i.shots.includes(M);
  }
  function b(M) {
    return !!M && (Array.isArray(i.stickers) && i.stickers.includes(M) || Ut(M));
  }
  function G() {
    var M;
    return Array.isArray((M = i.painting) == null ? void 0 : M.raster_objects) ? i.painting.raster_objects : [];
  }
  function m(M) {
    const ie = fe(M);
    if (!ie) return null;
    const le = G().find((we) => String((we == null ? void 0 : we.id) || "").trim() === ie);
    return !le || String((le == null ? void 0 : le.layerKind) || "paint") !== "paint" ? null : {
      ...le,
      id: pe(ie),
      type: "rasterObject",
      rasterObjectId: ie
    };
  }
  function S(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "rasterObject") return !1;
    const ie = fe(M.rasterObjectId || M.id || "");
    return !!ie && !!m(pe(ie));
  }
  function L(M) {
    const ie = de(M), le = String(ie.actionGroupId || "").trim();
    if (!le) return null;
    const we = _e().find((N) => String((N == null ? void 0 : N.id) || (N == null ? void 0 : N.actionGroupId) || "") === le || String((N == null ? void 0 : N.actionGroupId) || "") === le);
    return we ? {
      ...we,
      id: Se("paint", le),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: le
    } : null;
  }
  function w(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "strokeGroup") return !1;
    const ie = String(M.actionGroupId || "").trim(), le = String(M.layerKind || "paint").trim() || "paint";
    return !!ie && !!L(Se(le, ie));
  }
  function F(M, ie = null) {
    const le = de(M, ie), we = String(le.actionGroupId || "").trim();
    return we ? d(le.layerKind).filter((N) => String((N == null ? void 0 : N.actionGroupId) || "").trim() === we) : [];
  }
  function z(M, ie = "paint") {
    const le = String(M || "").trim(), N = `geomv5:${String(ie || "paint").trim() || "paint"}:${le}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const ue = a(), Me = String((ue == null ? void 0 : ue.id) || ""), Ee = ue ? c(ue) : null;
      return `${N}:frame:${Me}:${Math.round(Number((ue == null ? void 0 : ue.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.roll_deg) ?? (ue == null ? void 0 : ue.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${N}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ne(M, ie, le) {
    return !M || typeof M != "object" ? M : {
      ...M,
      u: ((Number(M.u || 0) + Number(ie || 0)) % 1 + 1) % 1,
      v: Oe(Number(M.v || 0) + Number(le || 0), 0, 1)
    };
  }
  function T(M, ie) {
    let le = Number(M || 0) - Number(ie || 0);
    for (; le > 0.5; ) le -= 1;
    for (; le < -0.5; ) le += 1;
    return le;
  }
  function $(M, ie = null, le = null) {
    var $e;
    const we = de(M, ie), N = Array.isArray(le) ? le : F(we.actionGroupId, we.layerKind), ue = [];
    if (N.forEach((ze) => {
      const Ce = (ze == null ? void 0 : ze.geometry) || null, He = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(He) && ue.push(...He);
    }), !ue.length) return { u: 0.5, v: 0.5 };
    const Me = Number((($e = ue[0]) == null ? void 0 : $e.u) || 0);
    let Ee = 0, Te = 0;
    return ue.forEach((ze) => {
      Ee += Me + T(Number((ze == null ? void 0 : ze.u) || 0), Me), Te += Number((ze == null ? void 0 : ze.v) || 0);
    }), {
      u: (Ee / ue.length % 1 + 1) % 1,
      v: Oe(Te / ue.length, 0, 1)
    };
  }
  function _(M, ie, le = 1, we = 0) {
    if (!M || typeof M != "object") return M;
    const N = Number((ie == null ? void 0 : ie.u) || 0), ue = Number((ie == null ? void 0 : ie.v) || 0), Me = T(Number(M.u || 0), N), Ee = Number(M.v || 0) - ue, Te = Number(we || 0) * Nr, $e = Math.cos(Te), ze = Math.sin(Te), Ce = Math.max(0.02, Number(le || 1)), He = (Me * $e - Ee * ze) * Ce, ae = (Me * ze + Ee * $e) * Ce;
    return {
      ...M,
      u: ((N + He) % 1 + 1) % 1,
      v: Oe(ue + ae, 0, 1)
    };
  }
  function D(M, ie, le, we = null, N = null, ue = null) {
    const Me = de(M, N), Ee = String(Me.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Te = d(Me.layerKind), $e = Array.isArray(we) ? new Map(we.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let ze = !1;
    if (Te.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== Ee) return;
      const He = ($e == null ? void 0 : $e.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, ae = Ce == null ? void 0 : Ce.geometry, Ie = He == null ? void 0 : He.geometry;
      !ae || !Ie || (Array.isArray(Ie.points) && (ae.points = Ie.points.map((Ae) => ne(Ae, ie, le)), ze = !0), Array.isArray(Ie.rawPoints) && (ae.rawPoints = Ie.rawPoints.map((Ae) => ne(Ae, ie, le)), ze = !0), Array.isArray(Ie.processedPoints) && (ae.processedPoints = Ie.processedPoints.map((Ae) => ne(Ae, ie, le)), ze = !0));
    }), ze && ue) {
      const Ce = _e().find((He) => String((He == null ? void 0 : He.actionGroupId) || "") === Ee);
      Ce && (Ce.frame = null);
    }
    return ze;
  }
  function X(M, ie = 1, le = 0, we = null, N = null, ue = null) {
    const Me = de(M, N), Ee = String(Me.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Te = d(Me.layerKind), $e = Array.isArray(we) ? we : F(Ee, Me.layerKind), ze = Array.isArray($e) ? new Map($e.map((ae) => [String((ae == null ? void 0 : ae.id) || ""), ae])) : null, Ce = (ue == null ? void 0 : ue.centerUv) ?? $(Ee, Me.layerKind, $e);
    let He = !1;
    if (Te.forEach((ae) => {
      if (String((ae == null ? void 0 : ae.actionGroupId) || "").trim() !== Ee) return;
      const Ie = (ze == null ? void 0 : ze.get(String((ae == null ? void 0 : ae.id) || ""))) || ae, Ae = ae == null ? void 0 : ae.geometry, Fe = Ie == null ? void 0 : Ie.geometry;
      !Ae || !Fe || (Array.isArray(Fe.points) && (Ae.points = Fe.points.map((Ge) => _(Ge, Ce, ie, le)), He = !0), Array.isArray(Fe.rawPoints) && (Ae.rawPoints = Fe.rawPoints.map((Ge) => _(Ge, Ce, ie, le)), He = !0), Array.isArray(Fe.processedPoints) && (Ae.processedPoints = Fe.processedPoints.map((Ge) => _(Ge, Ce, ie, le)), He = !0));
    }), He && ue) {
      const ae = _e().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === Ee);
      ae && (ae.frame = null);
    }
    return He;
  }
  function be(M, ie, le, we = null) {
    const N = fe(M);
    if (!N) return !1;
    const ue = G().find((ze) => String((ze == null ? void 0 : ze.id) || "").trim() === N);
    if (!ue) return !1;
    const Me = we && typeof we == "object" ? we : ue, Ee = (Me == null ? void 0 : Me.transform) || {}, Te = Number(Ee.du || 0) + Number(ie || 0), $e = Oe(Number(Ee.dv || 0) + Number(le || 0), -1, 1);
    return ue.transform || (ue.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ue.transform.du = Te, ue.transform.dv = $e, !0;
  }
  function me(M, ie = 1, le = null) {
    const we = fe(M);
    if (!we) return !1;
    const N = G().find(($e) => String(($e == null ? void 0 : $e.id) || "").trim() === we);
    if (!N) return !1;
    const ue = le && typeof le == "object" ? le : N, Me = (ue == null ? void 0 : ue.transform) || {}, Ee = Math.max(0.01, Number(Me.scale || 1)), Te = Oe(Ee * Math.max(0.01, Number(ie || 1)), 0.01, 100);
    return N.transform || (N.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), N.transform.scale = Te, !0;
  }
  function xe() {
    return re();
  }
  function q(M) {
    var ie;
    return !M || typeof M != "object" ? !1 : o ? ((ie = M.source) == null ? void 0 : ie.kind) === "port" : String(M.id || "") === sf || String(M.source_kind || "") === O2;
  }
  function ve(M) {
    return !!(M && typeof M == "object" && M.visible === !1);
  }
  function O(M) {
    return q(M) && ve(M) ? mg : 1;
  }
  function oe(M, ie, le = 1, we = 0) {
    if (!M || typeof M != "object") return M;
    const N = Number((ie == null ? void 0 : ie.u) || 0), ue = Number((ie == null ? void 0 : ie.v) || 0), Me = T(Number(M.u || 0), N), Ee = Number(M.v || 0) - ue, Te = Math.max(0.02, Number(le || 1)), $e = Number(we || 0) * Nr, ze = Math.cos($e), Ce = Math.sin($e), He = Me / Te, ae = Ee / Te, Ie = He * ze + ae * Ce, Ae = -He * Ce + ae * ze;
    return {
      ...M,
      u: ((N + Ie) % 1 + 1) % 1,
      v: ue + Ae
    };
  }
  function V(M) {
    const ie = (M == null ? void 0 : M.bbox) || null, le = (M == null ? void 0 : M.transform) || {};
    return ie ? {
      u: (((Number(ie.u0 || 0) + Number(ie.u1 || 0)) * 0.5 + Number(le.du || 0)) % 1 + 1) % 1,
      v: Oe((Number(ie.v0 || 0) + Number(ie.v1 || 0)) * 0.5 + Number(le.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function ee(M) {
    var Te, $e, ze, Ce;
    const ie = (M == null ? void 0 : M.bbox) || null;
    if (!ie) return [];
    const le = {
      u: (Number(ie.u0 || 0) + Number(ie.u1 || 0)) * 0.5,
      v: (Number(ie.v0 || 0) + Number(ie.v1 || 0)) * 0.5
    }, we = Math.max(0.01, Number(((Te = M == null ? void 0 : M.transform) == null ? void 0 : Te.scale) || 1)), N = Number((($e = M == null ? void 0 : M.transform) == null ? void 0 : $e.rot_deg) || 0), ue = Number(((ze = M == null ? void 0 : M.transform) == null ? void 0 : ze.du) || 0), Me = Number(((Ce = M == null ? void 0 : M.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(ie.u0 || 0), v: Number(ie.v0 || 0) },
      { u: Number(ie.u1 || 0), v: Number(ie.v0 || 0) },
      { u: Number(ie.u1 || 0), v: Number(ie.v1 || 0) },
      { u: Number(ie.u0 || 0), v: Number(ie.v1 || 0) }
    ].map((He) => ne(_(He, le, we, N), ue, Me));
  }
  function K(M) {
    const ie = fe((M == null ? void 0 : M.rasterObjectId) || (M == null ? void 0 : M.id) || ""), le = (M == null ? void 0 : M.transform) || {}, we = (M == null ? void 0 : M.bbox) || {}, N = `${ie}:${r.mode}:${u()}:${we.u0}:${we.v0}:${we.u1}:${we.v1}:${le.du}:${le.dv}:${le.rot_deg}:${le.scale}`;
    if (r.mode === "frame") {
      const ue = a(), Me = ue ? c(ue) : null;
      return `${N}:frame:${String((ue == null ? void 0 : ue.id) || "")}:${Math.round(Number((Me == null ? void 0 : Me.x) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.y) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.w) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.h) || 0))}`;
    }
    return `${N}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Y(M) {
    const ie = String((M == null ? void 0 : M.id) || ""), le = E(M) ? "frame" : b(M) ? "sticker" : "item", we = R(M), N = [
      le,
      ie,
      r.mode,
      Number((we == null ? void 0 : we.yaw_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.pitch_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.hFOV_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.vFOV_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.rot_deg) || 0).toFixed(4),
      Number((we == null ? void 0 : we.roll_deg) || 0).toFixed(4),
      Vr(we),
      C(M) && v(M)
    ].join(":");
    if (r.mode === "frame") {
      const ue = a(), Me = ue ? c(ue) : null;
      return `${N}:frame:${String((ue == null ? void 0 : ue.id) || "")}:${Math.round(Number((Me == null ? void 0 : Me.x) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.y) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.w) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.h) || 0))}`;
    }
    return `${N}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function j() {
    he().forEach((ie, le) => {
      ie.type === "sticker" && ie.item && (ie.item.z_index = le), ie.type === "strokeGroup" && ie.item && (ie.item.z_index = le), ie.type === "rasterObject" && ie.item && (ie.item.z_index = le);
    });
  }
  return {
    connect(M) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: p,
        sceneStickerShown: v,
        upstreamStickerImage: g,
        upstreamStickers: h
      } = M);
    },
    getList: y,
    skyStickers: W,
    upstreamSkyStickers: H,
    stickerById: te,
    isSceneSticker: C,
    isUploadingSticker: B,
    poseOf: R,
    writePose: J,
    getPaintingGroupList: _e,
    makeStrokeGroupSelectionId: Se,
    makeRasterObjectSelectionId: pe,
    parseRasterObjectSelectionId: fe,
    ensurePaintingGroupEntry: ye,
    getFrameCornersUv: ce,
    ensureGroupFrame: P,
    getDisplayListObjects: he,
    getOrderedPaintGroupIds: A,
    getOrderedDisplayListObjects: I,
    getSelectableStrokeGroupItems: k,
    getSelectableRasterObjectItems: x,
    cutoutStickers: se,
    getCutoutSelectableItems: Q,
    isShotItem: E,
    isStickerItem: b,
    getRasterObjectList: G,
    getRasterObjectItem: m,
    isRasterObjectItem: S,
    getStrokeGroupItem: L,
    isStrokeGroupItem: w,
    getStrokeGroupStrokes: F,
    getStrokeGeomCacheKey: z,
    shortestWrappedDelta: T,
    getStrokeGroupCenterUv: $,
    applyStrokeGroupOffset: D,
    applyStrokeGroupTransform: X,
    applyRasterObjectOffset: be,
    applyRasterObjectTransform: me,
    getNextStickerZIndex: xe,
    isExternalSticker: q,
    isStickerHidden: ve,
    getStickerDisplayAlpha: O,
    inverseTransformErpPointAround: oe,
    getRasterObjectCenterUv: V,
    getRasterObjectTransformedErpPoints: ee,
    getRasterObjectGeomCacheKey: K,
    getSceneItemGeomCacheKey: Y,
    normalizeDisplayZIndices: j
  };
}
function hA(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: s,
    timeline: a,
    type: l
  } = e;
  let c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k;
  function x() {
    const K = String(t.selectedId || "");
    if (!K) return null;
    const Y = C(K);
    if (Y) return Y;
    const j = W(K);
    return j || (o ? v().find((M) => String((M == null ? void 0 : M.id) || "") === K) || null : h().find((M) => String((M == null ? void 0 : M.id) || "") === K) || null);
  }
  function se() {
    const K = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], Y = [], j = /* @__PURE__ */ new Set();
    return K.forEach((M) => {
      const ie = String(M || "").trim();
      if (!ie || j.has(ie)) return;
      j.add(ie);
      const le = ie === String(t.selectedId || "") ? x() : C(ie) || W(ie) || (o ? v().find((we) => String((we == null ? void 0 : we.id) || "") === ie) : h().find((we) => String((we == null ? void 0 : we.id) || "") === ie));
      le && Y.push(le);
    }), Y;
  }
  function Q(K = null) {
    const Y = Array.isArray(K) ? K : se();
    if (!Y || Y.length < 2) return null;
    const j = Y.map((Me) => re(Me)).filter((Me) => (Me == null ? void 0 : Me.visible) && Array.isArray(Me.corners) && Me.corners.length);
    if (!j.length) return null;
    const M = j.flatMap((Me) => Me.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.x) || 0))), ie = j.flatMap((Me) => Me.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.y) || 0))), le = Math.min(...M), we = Math.max(...M), N = Math.min(...ie), ue = Math.max(...ie);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (le + we) * 0.5, y: (N + ue) * 0.5 },
      corners: [
        { x: le, y: N },
        { x: we, y: N },
        { x: we, y: ue },
        { x: le, y: ue }
      ],
      edgeMidpoints: [
        { edge: "top", x: (le + we) * 0.5, y: N, a: { x: le, y: N }, b: { x: we, y: N } },
        { edge: "right", x: we, y: (N + ue) * 0.5, a: { x: we, y: N }, b: { x: we, y: ue } },
        { edge: "bottom", x: (le + we) * 0.5, y: ue, a: { x: we, y: ue }, b: { x: le, y: ue } },
        { edge: "left", x: le, y: (N + ue) * 0.5, a: { x: le, y: ue }, b: { x: le, y: N } }
      ],
      rotateStemBase: { x: (le + we) * 0.5, y: N },
      rotateHandle: { x: (le + we) * 0.5, y: N - 30 }
    };
  }
  function E(K) {
    const Y = String((K == null ? void 0 : K.id) || "").trim();
    return !!Y && Array.isArray(t.selectedIds) && t.selectedIds.includes(Y);
  }
  function b() {
    const K = x();
    return K ? pe(K) || J(K) ? "stroke" : ke(K) ? "frame" : "image" : null;
  }
  function G(K) {
    if (!K || typeof K != "object") return !1;
    if (pe(K)) {
      const Y = String(K.actionGroupId || K.id || "").trim(), j = y().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === Y);
      return (j == null ? void 0 : j.locked) === !0;
    }
    if (J(K)) {
      const Y = ce(K.rasterObjectId || K.id || ""), j = H().find((M) => String((M == null ? void 0 : M.id) || "").trim() === Y);
      return (j == null ? void 0 : j.locked) === !0;
    }
    return Ut(K) && !_l(K) ? !0 : K.locked === !0;
  }
  function m(K = null) {
    const Y = Array.isArray(K) ? K : se();
    return Y.length > 0 && Y.every((j) => G(j));
  }
  function S(K, Y) {
    const j = Y === !0;
    if (!K || typeof K != "object") return !1;
    if (pe(K)) {
      const M = String(K.actionGroupId || K.id || "").trim(), ie = y().find((le) => String((le == null ? void 0 : le.actionGroupId) || (le == null ? void 0 : le.id) || "").trim() === M);
      return !ie || ie.locked === j ? !1 : (ie.locked = j, !0);
    }
    if (J(K)) {
      const M = ce(K.rasterObjectId || K.id || ""), ie = H().find((le) => String((le == null ? void 0 : le.id) || "").trim() === M);
      return !ie || ie.locked === j ? !1 : (ie.locked = j, !0);
    }
    return K.locked === j || Ut(K) && !_l(K) ? !1 : (K.locked = j, !0);
  }
  function L() {
    if (r) return;
    const K = se();
    if (!K.length) return;
    const Y = !m(K);
    let j = !1;
    K.forEach((M) => {
      S(M, Y) && (j = !0);
    }), j && (U(), d(), I(), k(), P());
  }
  function w(K) {
    q(), a.selection = null, t.selectedId = (K == null ? void 0 : K.id) || null, t.selectedIds = K != null && K.id ? [K.id] : [], K && Se(K) && !Ut(K) ? s.active.selected_sticker_id = K.id || null : s.active.selected_sticker_id = null, K && ke(K) ? s.active.selected_shot_id = K.id || null : K ? ke(K) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function F(K, Y = null) {
    const j = [], M = /* @__PURE__ */ new Set();
    (Array.isArray(K) ? K : []).forEach((we) => {
      const N = String((we == null ? void 0 : we.id) || "").trim();
      !N || M.has(N) || (M.add(N), j.push(N));
    }), t.selectedIds = j, q(), a.selection = null;
    const ie = String(Y || "").trim();
    t.selectedId = ie && j.includes(ie) ? ie : j[j.length - 1] || null;
    const le = x();
    s.active.selected_sticker_id = le && Se(le) && !Ut(le) && le.id || null, le && ke(le) ? s.active.selected_shot_id = le.id || null : j.length || (s.active.selected_shot_id = null);
  }
  function z() {
    const K = (Array.isArray(s.shots) ? s.shots : []).map((j, M) => ({
      kind: "frame",
      item: j,
      label: String((j == null ? void 0 : j.label) || `Frame ${M + 1}`)
    })), Y = f().map((j, M) => {
      var le, we;
      const ie = R(j) ? String(j.id || sf) : String(((we = (le = s.assets) == null ? void 0 : le[j.asset_id]) == null ? void 0 : we.name) || j.asset_id || j.id || `Image ${M + 1}`);
      return {
        kind: "image",
        item: j,
        label: ie
      };
    });
    return [...K, ...Y];
  }
  function ne(K) {
    return K === "frame" ? We.camera : K === "stroke" ? We.paintbrush_vertical_tool : We.image;
  }
  function T(K) {
    return !K || !K.item ? {
      label: String((K == null ? void 0 : K.label) || ""),
      icon: null
    } : {
      label: String(K.label || ""),
      icon: ne(K.kind)
    };
  }
  function $() {
    if (r) return;
    const K = x();
    !K || !R(K) || (K.visible = ge(K), oe(), fe(), U(), d(), k(), I(), P());
  }
  function _() {
    if (r || l !== "stickers") return;
    const K = x();
    if (!K || !R(K)) return;
    const Y = K.initial_pose;
    if (!Y || typeof Y != "object") return;
    K.yaw_deg = Number(Y.yaw_deg ?? K.yaw_deg ?? 0), K.pitch_deg = Number(Y.pitch_deg ?? K.pitch_deg ?? 0), K.hFOV_deg = Number(Y.hFOV_deg ?? K.hFOV_deg ?? 30);
    const j = te(Di, () => {
      P();
    });
    j && (j.complete || j.naturalWidth || j.width) ? K.vFOV_deg = u(
      Number(Y.hFOV_deg ?? K.hFOV_deg ?? 30),
      Number(j.naturalWidth || j.width || 1),
      Number(j.naturalHeight || j.height || 1)
    ) : K.vFOV_deg = Number(Y.vFOV_deg ?? K.vFOV_deg ?? 30), K.rot_deg = Number(Y.rot_deg ?? K.rot_deg ?? 0), U(), d(), k(), I(), P();
  }
  function D(K) {
    if (!K || !R(K)) return null;
    const Y = K.initial_pose;
    if (!Y || typeof Y != "object") return null;
    const j = {
      yaw_deg: Number(Y.yaw_deg ?? K.yaw_deg ?? 0),
      pitch_deg: Number(Y.pitch_deg ?? K.pitch_deg ?? 0),
      hFOV_deg: Number(Y.hFOV_deg ?? K.hFOV_deg ?? 30),
      vFOV_deg: Number(Y.vFOV_deg ?? K.vFOV_deg ?? 30),
      rot_deg: Number(Y.rot_deg ?? K.rot_deg ?? 0)
    }, M = te(Di, () => {
      P();
    });
    return M && (M.complete || M.naturalWidth || M.width) && (j.vFOV_deg = u(
      j.hFOV_deg,
      Number(M.naturalWidth || M.width || 1),
      Number(M.naturalHeight || M.height || 1)
    )), j;
  }
  function X() {
    const K = x();
    if (!K || !R(K)) return !1;
    const Y = D(K);
    if (!Y) return !1;
    const j = (M, ie) => Math.abs(Number(M || 0) - Number(ie || 0)) <= 1e-4;
    return !(j(K.yaw_deg, Y.yaw_deg) && j(K.pitch_deg, Y.pitch_deg) && j(K.hFOV_deg, Y.hFOV_deg) && j(K.vFOV_deg, Y.vFOV_deg) && j(K.rot_deg, Y.rot_deg));
  }
  function be(K = {}) {
    const j = K.preservePanelValues !== !1 ? Z(x()) : null;
    j && (t.panelLastValues = {
      yaw_deg: Number(j.yaw_deg || 0),
      pitch_deg: Number(j.pitch_deg || 0),
      hFOV_deg: Number(j.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(j.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(j.rot_deg || 0),
      roll_deg: Number(j.roll_deg || 0),
      aspect_id: Vr(j)
    }), t.selectedId = null, t.selectedIds = [], q(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function me() {
    if (!i || !t.worldSelectedId) return null;
    const K = A(t.worldSelectedId);
    return (K == null ? void 0 : K.placement) === "world" ? K : null;
  }
  function xe(K) {
    w(null), t.worldSelectedId = K, n.backgroundDirty = !0;
  }
  function q() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function ve(K) {
    return !!K && !r && !G(K);
  }
  function O() {
    if (l !== "cutout") return;
    const K = p();
    K && (t.selectedId = String(K.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function oe() {
    var Y;
    const K = x();
    (_e(K) && !he(K) || t.selectedId === Cd && B() && !c() || b() === "stroke" && !ye()) && w(null), ((Y = me()) == null ? void 0 : Y.visible) === !1 && q();
  }
  function V() {
    if (r) return;
    const K = se();
    if (!x() || K.length === 0 || K.some(Ut) || K.some((N) => G(N))) return;
    de();
    const j = g(), M = new Set(K.map((N) => Se(N) ? `sticker:${String(N.id || "")}` : J(N) ? `rasterObject:${ce(N.rasterObjectId || N.id || "")}` : `strokeGroup:${String(N.actionGroupId || N.id || "")}`)), ie = [], le = [];
    if (j.forEach((N) => {
      var Me, Ee;
      const ue = N.type === "sticker" ? `sticker:${String(((Me = N.item) == null ? void 0 : Me.id) || "")}` : N.type === "rasterObject" ? `rasterObject:${String(((Ee = N.item) == null ? void 0 : Ee.id) || N.id || "")}` : `strokeGroup:${String(N.actionGroupId || "")}`;
      M.has(ue) ? ie.push(N) : le.push(N);
    }), !ie.length || ie[ie.length - 1] === j[j.length - 1]) return;
    [...le, ...ie].forEach((N, ue) => {
      N.type === "sticker" && N.item && (N.item.z_index = ue), N.type === "strokeGroup" && N.item && (N.item.z_index = ue), N.type === "rasterObject" && N.item && (N.item.z_index = ue);
    }), fe(), U(), d(), I(), P();
  }
  function ee() {
    if (r) return;
    const K = se();
    if (!x() || K.length === 0 || K.some(Ut) || K.some((N) => G(N))) return;
    de();
    const j = g(), M = new Set(K.map((N) => Se(N) ? `sticker:${String(N.id || "")}` : J(N) ? `rasterObject:${ce(N.rasterObjectId || N.id || "")}` : `strokeGroup:${String(N.actionGroupId || N.id || "")}`)), ie = [], le = [];
    if (j.forEach((N) => {
      var Me, Ee;
      const ue = N.type === "sticker" ? `sticker:${String(((Me = N.item) == null ? void 0 : Me.id) || "")}` : N.type === "rasterObject" ? `rasterObject:${String(((Ee = N.item) == null ? void 0 : Ee.id) || N.id || "")}` : `strokeGroup:${String(N.actionGroupId || "")}`;
      M.has(ue) ? ie.push(N) : le.push(N);
    }), !ie.length || ie[0] === j[0]) return;
    [...ie, ...le].forEach((N, ue) => {
      N.type === "sticker" && N.item && (N.item.z_index = ue), N.type === "strokeGroup" && N.item && (N.item.z_index = ue), N.type === "rasterObject" && N.item && (N.item.z_index = ue);
    }), fe(), U(), d(), I(), P();
  }
  return {
    connect(K) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: p,
        getCutoutSelectableItems: v,
        getDisplayListObjects: g,
        getList: h,
        getPaintingGroupList: y,
        getRasterObjectItem: W,
        getRasterObjectList: H,
        getStickerUiImage: te,
        getStrokeGroupItem: C,
        hasCamera: B,
        isExternalSticker: R,
        isRasterObjectItem: J,
        isSceneSticker: _e,
        isShotItem: ke,
        isStickerHidden: ge,
        isStickerItem: Se,
        isStrokeGroupItem: pe,
        markObjectVisualsDirty: fe,
        normalizeDisplayZIndices: de,
        objectGeom: re,
        paintingShown: ye,
        parseRasterObjectSelectionId: ce,
        poseOf: Z,
        pushHistory: U,
        requestDraw: P,
        sceneStickerShown: he,
        stickerById: A,
        updateSelectionMenu: I,
        updateSidePanel: k
      } = K);
    },
    getSelected: x,
    getSelectedItems: se,
    getMultiSelectionGeom: Q,
    isItemSelected: E,
    getSelectedKind: b,
    isItemLocked: G,
    areAllSelectedItemsLocked: m,
    toggleSelectedLock: L,
    setSelectedItem: w,
    setSelectedItems: F,
    getCutoutInspectorItems: z,
    getSelectionItemIcon: ne,
    getSelectionItemLabelData: T,
    toggleSelectedExternalStickerVisibility: $,
    restoreSelectedToInitialPose: _,
    canRestoreSelectedToInitial: X,
    clearSelection: be,
    selectedWorldSticker: me,
    selectWorldSticker: xe,
    clearWorldSelection: q,
    worldStickerEditable: ve,
    applyInitialCutoutFocus: O,
    releaseHiddenSelection: oe,
    bringSelectedToFront: V,
    sendSelectedToBack: ee
  };
}
function mA(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function p() {
    return o && s() && i.camera.projection === "erp";
  }
  function v() {
    const x = J({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !x || x.length !== 4 ? !1 : x[0].y >= x[3].y;
  }
  function g() {
    return gg({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const k = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return k.some((x, se) => x !== f.key[se]) && (f = { key: k, projection: bg(g(), r.width, r.height) }), f.projection;
  }
  function y(k) {
    const x = h().project(k);
    return x.z > 1e-4 ? x : null;
  }
  function W(k, x) {
    return h().ray(k, x);
  }
  function H() {
    const k = r.width, x = r.height, se = 2;
    if (k / Math.max(x, 1) >= se) {
      const m = x, S = m * se;
      return { x: (k - S) * 0.5, y: 0, w: S, h: m };
    }
    const E = k, b = E / se;
    return { x: 0, y: (x - b) * 0.5, w: E, h: b };
  }
  function te(k) {
    return {
      lon: Math.atan2(k.x, k.z),
      lat: Math.asin(Oe(k.y, -1, 1))
    };
  }
  function C(k, x = null) {
    const { lon: se, lat: Q } = te(k), E = H();
    let b = E.x + (se / (2 * Math.PI) + 0.5) * E.w;
    const G = E.y + (0.5 - Q / Math.PI) * E.h;
    if (x !== null) {
      for (; b - x > E.w / 2; ) b -= E.w;
      for (; b - x < -E.w / 2; ) b += E.w;
    }
    return { x: b, y: G, z: 1 };
  }
  function B(k) {
    const x = c(k), se = xo(
      Number(x.yaw_deg || 0),
      Number(x.pitch_deg || 0),
      Number(x.rot_deg || x.roll_deg || 0)
    ), Q = Math.tan(Oe(Number(x.hFOV_deg || 20), 0.1, 179) * 0.5 * Nr), E = Math.tan(Oe(Number(x.vFOV_deg || 20), 0.1, 179) * 0.5 * Nr);
    return {
      centerDir: se.fwd,
      right: se.right,
      up: se.up,
      tanX: Q,
      tanY: E
    };
  }
  function R(k, x, se) {
    return W2(Up(Up(k.centerDir, Bp(k.right, x)), Bp(k.up, se)));
  }
  function J(k) {
    const x = B(k);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Q, v: E }) => R(x, Q * x.tanX, E * x.tanY));
  }
  function _e(k, x, se) {
    const Q = B(k), E = (x * 2 - 1) * Q.tanX, b = (1 - se * 2) * Q.tanY;
    return R(Q, E, b);
  }
  function ke(k) {
    const x = t.width / Math.max(1, r.width), se = t.height / Math.max(1, r.height);
    return { x: k.x * x, y: k.y * se, w: k.w * x, h: k.h * se };
  }
  function ge(k, x = null, se = null, Q = null) {
    if (n.mode === "frame") {
      const E = x || a();
      if (!E) return [];
      const b = se || l(E);
      return U(k, E, b);
    }
    return ye(k, Q);
  }
  function Se(k, x = null, se = null, Q = null, E = null) {
    if (!k) return null;
    if (n.mode === "unwrap") {
      const G = ye([k], E);
      return G[0] ? { x: G[0].x, y: G[0].y, z: 1 } : null;
    }
    const b = fe(k);
    return b ? d(b, x, se, Q) : null;
  }
  function pe(k, x) {
    if (!k || !x) return null;
    const se = Number(x.x || 0), Q = Number(x.y || 0);
    return _e(k, se, Q);
  }
  function fe(k) {
    if (!k) return null;
    const x = (Number(k.u || 0) - 0.5) * (2 * Math.PI), se = (0.5 - Number(k.v || 0)) * Math.PI, Q = Math.cos(se);
    return rc(Q * Math.sin(x), Math.sin(se), Q * Math.cos(x));
  }
  function de(k, x) {
    if (!k || !x) return null;
    const se = B(k), Q = Wc(x, se.centerDir);
    if (!Number.isFinite(Q) || Q <= 1e-6) return null;
    const E = Wc(x, se.right) / Q, b = Wc(x, se.up) / Q;
    return {
      x: (E / Math.max(1e-6, se.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, se.tanY)) * 0.5
    };
  }
  function re(k) {
    if (!Array.isArray(k) || k.length < 3) return [];
    if (n.mode === "unwrap") {
      const se = H();
      return k.map((Q) => ({
        x: se.x + Number(Q.u || 0) * se.w,
        y: se.y + Number(Q.v || 0) * se.h
      }));
    }
    const x = k.map((se) => y(fe(se))).filter(Boolean);
    return x.every((se) => Number(se.z || 0) > 0) ? x.map((se) => ({ x: Number(se.x || 0), y: Number(se.y || 0) })) : [];
  }
  function ye(k, x = null) {
    if (!Array.isArray(k) || k.length < 1) return [];
    if (n.mode === "unwrap") {
      const Q = H();
      return k.map((E) => {
        const b = (Number(E.u || 0) % 1 + 1) % 1, G = x == null ? b : Number(x || 0) + u(b, x);
        return {
          x: Q.x + G * Q.w,
          y: Q.y + Number(E.v || 0) * Q.h
        };
      });
    }
    const se = k.map((Q) => y(fe(Q))).filter(Boolean);
    return se.every((Q) => Number(Q.z || 0) > 0) ? se.map((Q) => ({ x: Number(Q.x || 0), y: Number(Q.y || 0) })) : [];
  }
  function ce(k, x = 160) {
    if (!Array.isArray(k) || k.length < 3) return !1;
    for (let se = 0; se < k.length; se += 1) {
      const Q = k[se], E = k[(se + 1) % k.length];
      if (!Q || !E || !Number.isFinite(Q.x) || !Number.isFinite(Q.y) || !Number.isFinite(E.x) || !Number.isFinite(E.y) || Math.hypot(Number(E.x) - Number(Q.x), Number(E.y) - Number(Q.y)) > x) return !1;
    }
    return !0;
  }
  function Z(k, x, se) {
    if (!Array.isArray(k) || k.length < 3 || !x || !se) return [];
    const Q = [];
    for (const E of k) {
      const b = fe(E), G = de(x, b);
      if (!G) return [];
      Q.push({
        x: Number(se.x || 0) + Number(G.x || 0) * Number(se.w || 0),
        y: Number(se.y || 0) + Number(G.y || 0) * Number(se.h || 0)
      });
    }
    return ce(Q, Math.max(80, Math.max(se.w, se.h) * 0.75)) ? Q : [];
  }
  function U(k, x, se) {
    if (!Array.isArray(k) || k.length < 1 || !x || !se) return [];
    const Q = [];
    for (const E of k) {
      const b = fe(E), G = de(x, b);
      G && Q.push({
        x: Number(se.x || 0) + Number(G.x || 0) * Number(se.w || 0),
        y: Number(se.y || 0) + Number(G.y || 0) * Number(se.h || 0)
      });
    }
    return Q;
  }
  function P(k) {
    const x = r.getBoundingClientRect();
    return {
      x: (k.clientX - x.left) / x.width * r.width,
      y: (k.clientY - x.top) / x.height * r.height
    };
  }
  function he(k) {
    const x = r.getBoundingClientRect();
    return {
      x: Number(k.clientX) - Number(x.left || 0),
      y: Number(k.clientY) - Number(x.top || 0)
    };
  }
  function A(k, x = performance.now()) {
    if (n.mode === "unwrap") {
      const b = H(), G = (k.x - b.x) / Math.max(1, b.w), m = (k.y - b.y) / Math.max(1, b.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (G % 1 + 1) % 1,
        v: Oe(m, 0, 1),
        t: Number(x || 0)
      };
    }
    const se = W(k.x, k.y), { lon: Q, lat: E } = te(se);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Q / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - E / Math.PI, 0, 1),
      t: Number(x || 0)
    };
  }
  function I(k, x, se = performance.now()) {
    const Q = l(x);
    if (!Q) return null;
    const E = {
      x: (Number(k.x) - Q.x) / Math.max(1, Q.w),
      y: (Number(k.y) - Q.y) / Math.max(1, Q.h)
    };
    if (E.x < 0 || E.x > 1 || E.y < 0 || E.y > 1) return null;
    const b = pe(x, E);
    if (!b) return null;
    const { lon: G, lat: m } = te(b);
    return {
      targetKind: "ERP_GLOBAL",
      u: (G / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - m / Math.PI, 0, 1),
      t: Number(se || 0)
    };
  }
  return {
    connect(k) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = k);
    },
    isErpCamera: p,
    currentViewCamera: g,
    currentViewProjection: h,
    projectDir: y,
    screenToWorldDir: W,
    getUnwrapRect: H,
    projectDirUnwrap: C,
    getStickerFrame: B,
    stickerDirFromFrame: R,
    stickerCornersDir: J,
    stickerSampleDir: _e,
    stickerCornerOrderSanity: v,
    projectEditorPoints: ge,
    projectErpPointToEditor: Se,
    frameLocalPointToWorldDir: pe,
    erpPointToWorldDir: fe,
    worldDirToFrameLocalPoint: de,
    projectLassoPointsToCurrentView: re,
    projectErpLassoPointsToFrameRect: Z,
    screenPos: P,
    screenPosCss: he,
    screenPosToErpPoint: A,
    screenPosToFrameAsErpPoint: I,
    deviceRect: ke
  };
}
function gA(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U;
  function P(b, G) {
    const m = String(b.actionGroupId || b.id || "").trim(), S = H(m, b.layerKind), L = a(m, b.layerKind, S), w = (L == null ? void 0 : L.centerUv) || W(m, b.layerKind, S), F = n.mode === "unwrap" ? Number((w == null ? void 0 : w.u) || 0) : null, z = [], ne = n.mode === "frame" ? l() : null, T = ne ? u(ne) : null;
    for (const O of S) {
      const oe = (O == null ? void 0 : O.geometry) || null, V = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [], ee = fe(V, ne, T, F).filter((j) => Number.isFinite(j == null ? void 0 : j.x) && Number.isFinite(j == null ? void 0 : j.y));
      if (!ee.length) continue;
      const K = c(String((O == null ? void 0 : O.toolKind) || "pen")), Y = Dn[K] || Dn[Dr];
      z.push({
        points: ee,
        closed: String((oe == null ? void 0 : oe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((O == null ? void 0 : O.size) || 10) * Math.max(0.1, Number((Y == null ? void 0 : Y.sizeScale) ?? 1)) + 10),
        layerKind: String((O == null ? void 0 : O.layerKind) || b.layerKind || "paint")
      });
    }
    const $ = de(w, null, ne, T, F);
    if (!$) {
      const O = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(G, O), O;
    }
    const D = d(L).map((O) => de(O, $.x, ne, T, F)).filter((O) => Number.isFinite(O == null ? void 0 : O.x) && Number.isFinite(O == null ? void 0 : O.y)).map((O) => ({ x: Number(O.x || 0), y: Number(O.y || 0) }));
    if (D.length < 4) {
      const O = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(G, O), O;
    }
    const X = (O, oe) => ({
      x: (Number((O == null ? void 0 : O.x) || 0) + Number((oe == null ? void 0 : oe.x) || 0)) * 0.5,
      y: (Number((O == null ? void 0 : O.y) || 0) + Number((oe == null ? void 0 : oe.y) || 0)) * 0.5,
      a: O,
      b: oe
    }), be = X(D[0], D[1]), me = X(D[1], D[2]), xe = X(D[2], D[3]), q = X(D[3], D[0]), ve = {
      kind: "strokeGroup",
      center: { x: Number($.x || 0), y: Number($.y || 0) },
      corners: D,
      edgeMidpoints: [
        { edge: "top", ...be },
        { edge: "right", ...me },
        { edge: "bottom", ...xe },
        { edge: "left", ...q }
      ],
      rotateStemBase: { x: be.x, y: be.y },
      rotateHandle: { x: be.x, y: be.y - 30 },
      strokePaths: z,
      visible: !0
    };
    return n._strokeGeomCache.set(G, ve), ve;
  }
  function he(b, G) {
    const m = n.mode === "frame" ? l() : null, S = m ? u(m) : null, L = f(b), w = n.mode === "unwrap" ? Number((L == null ? void 0 : L.u) || 0) : null, F = de(L, null, m, S, w), ne = v(b).map((D) => de(D, (F == null ? void 0 : F.x) ?? null, m, S, w)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(ne) || ne.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(G, D), D;
    }
    const T = ne.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), _ = {
      kind: "rasterObject",
      center: {
        x: T.reduce((D, X) => D + Number(X.x || 0), 0) / T.length,
        y: T.reduce((D, X) => D + Number(X.y || 0), 0) / T.length
      },
      corners: T,
      visible: !0
    };
    return n._strokeGeomCache.set(G, _), _;
  }
  function A(b, G = null, m = null, S = null, L = {}) {
    if (n.mode === "frame") {
      const $ = m || l(), _ = S || u($);
      if (!$ || !_) return null;
      const D = $ ? U($, b) : null;
      return D ? {
        x: Number(_.x || 0) + Number(D.x || 0) * Number(_.w || 0),
        y: Number(_.y || 0) + Number(D.y || 0) * Number(_.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return pe(b, G);
    const w = 1e-4, F = o().project(b, w);
    if (!Number.isFinite(F.z) || F.z <= w && !(L != null && L.clipBehind)) return null;
    const z = r.width, ne = r.height, T = Math.max(z, ne) * 2;
    return {
      x: Oe(F.x, -T, z + T),
      y: Oe(F.y, -T, ne + T),
      z: Math.max(F.z, w),
      rawZ: F.z,
      clipped: F.z <= w
    };
  }
  function I(b, G = []) {
    if (n.mode !== "pano" || J(b)) return 1;
    const m = G.map((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z))).filter((S) => Number.isFinite(S));
    return m.length ? G2(0.035, 0.2, Math.min(...m)) : 1;
  }
  function k(b) {
    if (B(b) && !re(b)) return { visible: !1 };
    const G = ge(b), m = Rn(Number(G.yaw_deg || 0), Number(G.pitch_deg || 0)), S = n.mode === "frame" ? l() : null, L = S ? u(S) : null, w = n.mode === "pano" && (J(b) || R(b)), F = w ? { clipBehind: !0 } : null, z = A(m, null, S, L, F);
    if (!z) return { visible: !1 };
    const ne = h(b), $ = ye(b).map((M) => A(M, z.x, S, L, F)).filter((M) => Number.isFinite(M == null ? void 0 : M.x) && Number.isFinite(M == null ? void 0 : M.y));
    if ($.length < 4) return { visible: !1 };
    const _ = ce(ne, 0, ne.tanY), D = ce(ne, 0, ne.tanY + Math.max(ne.tanY * 0.43, 0.053)), X = A(_, z.x, S, L, F);
    if (!X) return { visible: !1 };
    const be = A(D, (X == null ? void 0 : X.x) ?? z.x, S, L, F), me = ((be == null ? void 0 : be.x) ?? X.x) - X.x, xe = ((be == null ? void 0 : be.y) ?? X.y) - X.y, q = Math.hypot(me, xe) || 1, ve = {
      x: X.x + me / q * 30,
      y: X.y + xe / q * 30
    }, O = A(ce(ne, 0, ne.tanY), z.x, S, L, F), oe = A(ce(ne, ne.tanX, 0), z.x, S, L, F), V = A(ce(ne, 0, -ne.tanY), z.x, S, L, F), ee = A(ce(ne, -ne.tanX, 0), z.x, S, L, F);
    if (!O || !oe || !V || !ee) return { visible: !1 };
    const K = [
      z,
      ...$,
      X,
      be,
      O,
      oe,
      V,
      ee
    ];
    if (w && !K.some((M) => Number((M == null ? void 0 : M.rawZ) ?? (M == null ? void 0 : M.z)) > 1e-4)) return { visible: !1 };
    const Y = I(b, K), j = [
      {
        edge: "top",
        x: O.x,
        y: O.y,
        a: { x: $[0].x, y: $[0].y },
        b: { x: $[1].x, y: $[1].y }
      },
      {
        edge: "right",
        x: oe.x,
        y: oe.y,
        a: { x: $[1].x, y: $[1].y },
        b: { x: $[2].x, y: $[2].y }
      },
      {
        edge: "bottom",
        x: V.x,
        y: V.y,
        a: { x: $[2].x, y: $[2].y },
        b: { x: $[3].x, y: $[3].y }
      },
      {
        edge: "left",
        x: ee.x,
        y: ee.y,
        a: { x: $[3].x, y: $[3].y },
        b: { x: $[0].x, y: $[0].y }
      }
    ];
    return {
      center: { x: z.x, y: z.y },
      corners: $.map((M) => ({ x: M.x, y: M.y })),
      edgeMidpoints: j,
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: ve,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: Y,
      visible: !0
    };
  }
  function x(b) {
    if (t && R(b) && te()) return { visible: !1 };
    if (!ke() && (_e(b) || C(b))) return { visible: !1 };
    if (_e(b)) {
      const L = String(b.actionGroupId || b.id || "").trim(), w = y(L, b.layerKind), F = n._strokeGeomCache.get(w);
      return F || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), P(b, w));
    }
    if (C(b)) {
      const L = p(b), w = n._strokeGeomCache.get(L);
      return w || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), he(b, L));
    }
    const G = g(b), m = n._strokeGeomCache.get(G);
    if (m) return m;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const S = k(b);
    return n._strokeGeomCache.set(G, S), S;
  }
  function se(b, G, m, S = null) {
    const L = [];
    for (let w = 0; w <= m; w += 1) {
      const F = w / m;
      let z = 0, ne = 0;
      G === 0 ? (z = F, ne = 0) : G === 1 ? (z = 1, ne = F) : G === 2 ? (z = 1 - F, ne = 1) : (z = 0, ne = 1 - F);
      const T = Z(b, z, ne), $ = n.mode === "unwrap" ? pe(T, S) : Se(T);
      $ && L.push($);
    }
    return L;
  }
  function Q() {
    const b = [...Array.isArray(i.shots) ? i.shots : []], G = [...s()].sort((m, S) => Number(m.z_index || 0) - Number(S.z_index || 0));
    return [...b, ...G];
  }
  function E() {
    const b = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((m, S) => Number(S.z_index || 0) - Number(m.z_index || 0)), ...b];
  }
  return {
    connect(b) {
      ({
        currentViewProjection: o,
        cutoutStickers: s,
        ensureGroupFrame: a,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: p,
        getRasterObjectTransformedErpPoints: v,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: h,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: W,
        getStrokeGroupStrokes: H,
        isFreeSpaceView: te,
        isRasterObjectItem: C,
        isSceneSticker: B,
        isShotItem: R,
        isStickerItem: J,
        isStrokeGroupItem: _e,
        paintingShown: ke,
        poseOf: ge,
        projectDir: Se,
        projectDirUnwrap: pe,
        projectEditorPoints: fe,
        projectErpPointToEditor: de,
        sceneStickerShown: re,
        stickerCornersDir: ye,
        stickerDirFromFrame: ce,
        stickerSampleDir: Z,
        worldDirToFrameLocalPoint: U
      } = b);
    },
    projectSceneItemDir: A,
    objectGeom: x,
    sampleStickerEdge: se,
    getCutoutSelectableItemsForDisplay: Q,
    getCutoutSelectableItemsForHit: E
  };
}
const Na = /* @__PURE__ */ new Map();
function yA(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge;
  function Se(w = r.interaction) {
    const F = String((w == null ? void 0 : w.kind) || "");
    if (F === "paint_stroke" || F === "paint_lasso_fill" || F === "move_stroke_group" || F === "scale_stroke_group" || F === "rotate_stroke_group" || F === "move_raster_object" || F === "scale_raster_object") return !0;
    if (F === "move_multi") {
      const z = Array.isArray(w == null ? void 0 : w.strokeSnapshots) && w.strokeSnapshots.length > 0, ne = Array.isArray(w == null ? void 0 : w.rasterSnapshots) && w.rasterSnapshots.length > 0;
      return z || ne;
    }
    return !1;
  }
  function pe() {
    var F, z, ne, T;
    let w = null;
    try {
      const $ = g(), _ = ((T = (ne = (z = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : z.call(F, $)) == null ? void 0 : ne.displayPaint) == null ? void 0 : T.canvas) || null;
      _ && (w = {
        source: _,
        revision: `${h()}:${fe()}`
      });
    } catch {
      w = null;
    }
    return w;
  }
  function fe() {
    var T, $, _, D, X, be, me;
    const w = r.interaction, F = String((w == null ? void 0 : w.kind) || "");
    if (!Se(w)) return "";
    if (F === "paint_stroke" || F === "paint_lasso_fill") {
      const xe = ((T = w == null ? void 0 : w.stroke) == null ? void 0 : T.geometry) || null, q = String((($ = w == null ? void 0 : w.stroke) == null ? void 0 : $.layerKind) || ""), ve = ((_ = xe == null ? void 0 : xe.rawPoints) == null ? void 0 : _.length) ?? ((D = xe == null ? void 0 : xe.points) == null ? void 0 : D.length) ?? 0, O = String((w == null ? void 0 : w._livePreviewToken) || "");
      return `_${q || "paint"}_${F}_live${O}_${ve}_${r.livePaintInteractionRevision}`;
    }
    const z = String(((X = w == null ? void 0 : w.item) == null ? void 0 : X.actionGroupId) || ""), ne = String(((be = w == null ? void 0 : w.item) == null ? void 0 : be.rasterObjectId) || ((me = w == null ? void 0 : w.item) == null ? void 0 : me.id) || "");
    return `_${F}_${z || ne || "active"}_${r.livePaintInteractionRevision}`;
  }
  function de(w, F = null) {
    const z = String((w == null ? void 0 : w.rasterDataUrl) || "").trim();
    if (!z) return null;
    const ne = s.get(z);
    if (ne)
      return ne.complete || ne.width || ne.naturalWidth, ne;
    const T = new Image();
    return T.onload = () => {
      typeof F == "function" && F();
    }, T.src = z, s.set(z, T), T;
  }
  function re(w) {
    const F = String((w == null ? void 0 : w.rasterDataUrl) || "").trim();
    if (!F) return null;
    const z = o.get(F);
    if (z) return z.ready ? z : null;
    const ne = de(w, () => {
      const me = o.get(F);
      me && (me.ready = !1), _e({ localOnly: !0 });
    });
    if (!ne || !(ne.complete || ne.width || ne.naturalWidth)) return null;
    const T = Number(ne.naturalWidth || ne.width || 0), $ = Number(ne.naturalHeight || ne.height || 0);
    if (T < 1 || $ < 1) return null;
    const _ = on({ label: "editor.image-pixels" });
    _.width = T, _.height = $;
    const D = _.getContext("2d", { willReadFrequently: !0 });
    if (!D) return null;
    D.clearRect(0, 0, T, $), D.drawImage(ne, 0, 0, T, $);
    const X = D.getImageData(0, 0, T, $).data, be = { canvas: _, width: T, height: $, alpha: X, ready: !0 };
    return o.set(F, be), be;
  }
  function ye(w, F) {
    if (!w || !F) return null;
    const z = (w == null ? void 0 : w.bbox) || null;
    if (!z) return null;
    const ne = (w == null ? void 0 : w.transform) || {}, T = {
      u: (Number(z.u0 || 0) + Number(z.u1 || 0)) * 0.5,
      v: (Number(z.v0 || 0) + Number(z.v1 || 0)) * 0.5
    }, $ = {
      u: ((Number(F.u || 0) - Number(ne.du || 0)) % 1 + 1) % 1,
      v: Number(F.v || 0) - Number(ne.dv || 0)
    }, _ = H(
      $,
      T,
      Number(ne.scale || 1),
      Number(ne.rot_deg || 0)
    ), D = Number(z.u1 || 0) - Number(z.u0 || 0), X = Number(z.v1 || 0) - Number(z.v0 || 0);
    if (!(D > 1e-6) || !(X > 1e-6)) return null;
    const be = ge(Number(_.u || 0), Number(z.u0 || 0)) / D, me = (Number(_.v || 0) - Number(z.v0 || 0)) / X;
    if (be < 0 || be > 1 || me < 0 || me > 1) return 0;
    const xe = re(w);
    if (!xe) return null;
    const q = Oe(Math.floor(be * xe.width), 0, xe.width - 1), ve = Oe(Math.floor(me * xe.height), 0, xe.height - 1);
    return Number(xe.alpha[(ve * xe.width + q) * 4 + 3] || 0);
  }
  function ce(w, F, z, ne = null) {
    if (!(F != null && F.visible) || !ei(z, F.corners)) return !1;
    const T = ne || ke(z, performance.now()), $ = ye(w, T);
    return $ === null ? !0 : $ > 8;
  }
  function Z() {
    var ne, T, $, _, D, X, be, me;
    const w = ((T = (ne = r.paintEngine) == null ? void 0 : ne.getErpTarget) == null ? void 0 : T.call(ne, g(!1))) || null, F = Math.max(1, Number((($ = w == null ? void 0 : w.descriptor) == null ? void 0 : $.width) || ((D = (_ = w == null ? void 0 : w.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : D.width) || 2048)), z = Math.max(1, Number(((X = w == null ? void 0 : w.descriptor) == null ? void 0 : X.height) || ((me = (be = w == null ? void 0 : w.displayPaint) == null ? void 0 : be.canvas) == null ? void 0 : me.height) || 1024));
    return { width: F, height: z };
  }
  function U() {
    var ve, O, oe;
    const w = r.interaction;
    if ((w == null ? void 0 : w.kind) !== "paint_stroke") return null;
    const F = (w == null ? void 0 : w.stroke) || null;
    if (!F || String((F == null ? void 0 : F.layerKind) || "") !== "paint" || String((F == null ? void 0 : F.toolKind) || "") !== "eraser") return null;
    const z = u(), ne = `${fe()}:${z.width}:${z.height}`;
    if (((ve = r._activePaintEraserPreviewInfo) == null ? void 0 : ve.cacheKey) === ne)
      return r._activePaintEraserPreviewInfo.value || null;
    const T = fn(F), $ = (T == null ? void 0 : T.geometry) || null;
    if ($ && String($.geometryKind || "") !== "lasso_fill") {
      const V = Array.isArray($.rawPoints) && $.rawPoints.length ? $.rawPoints : Array.isArray($.points) ? $.points : [];
      $.processedPoints = B(V, T.targetSpace, !0);
    }
    const _ = c(z.width, z.height, { readback: !0 });
    if (!R(_, T, { w: z.width, h: z.height })) return null;
    const D = ((oe = (O = _.ctx) == null ? void 0 : O.getImageData(0, 0, z.width, z.height)) == null ? void 0 : oe.data) || null;
    if (!D) return null;
    let X = z.width, be = z.height, me = -1, xe = -1;
    for (let V = 0; V < z.height; V += 1)
      for (let ee = 0; ee < z.width; ee += 1)
        D[(V * z.width + ee) * 4 + 3] <= 8 || (ee < X && (X = ee), V < be && (be = V), ee > me && (me = ee), V > xe && (xe = V));
    if (me < X || xe < be)
      return r._activePaintEraserPreviewInfo = { cacheKey: ne, value: null }, null;
    const q = {
      surface: _,
      bounds: { minX: X, minY: be, maxX: me, maxY: xe },
      key: `${ne}:${X}:${be}:${me}:${xe}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: ne, value: q }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), q;
  }
  function P() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function he(w, F, z) {
    var ne, T;
    if (!w) return null;
    if (w.type === "rasterObject" && ((ne = w.item) != null && ne.bbox)) {
      const $ = w.item.bbox, _ = ((T = w.item) == null ? void 0 : T.transform) || {}, D = Number($.u0 || 0) + Number(_.du || 0), X = Number($.u1 || 0) + Number(_.du || 0), be = Number($.v0 || 0) + Number(_.dv || 0), me = Number($.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((D % 1 + 1) % 1 * F),
        maxX: Math.ceil((X % 1 + 1) % 1 * F),
        minY: Math.floor(Oe(be, 0, 1) * z),
        maxY: Math.ceil(Oe(me, 0, 1) * z),
        wraps: X - D >= 1 || D < 0 || X > 1
      };
    }
    if (w.type === "strokeGroup") {
      const $ = W(w.actionGroupId, "paint"), _ = d(w.actionGroupId, "paint", $);
      if (!_) return null;
      const D = _.centerUv.u - _.halfW, X = _.centerUv.u + _.halfW, be = _.centerUv.v - _.halfH, me = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((D % 1 + 1) % 1 * F),
        maxX: Math.ceil((X % 1 + 1) % 1 * F),
        minY: Math.floor(Oe(be, 0, 1) * z),
        maxY: Math.ceil(Oe(me, 0, 1) * z),
        wraps: X - D >= 1 || D < 0 || X > 1
      };
    }
    return null;
  }
  function A(w, F, z) {
    if (!w || !F) return !1;
    const ne = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: z - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], T = ne(w), $ = ne(F);
    return T.some((_) => $.some((D) => !(_.maxX < D.minX || D.maxX < _.minX || _.maxY < D.minY || D.maxY < _.minY)));
  }
  function I(w, F, z) {
    var j, M, ie, le, we, N, ue;
    if (!w || !F || !((j = z == null ? void 0 : z.surface) != null && j.canvas) || F.type !== "rasterObject") return w;
    const ne = Number(w.width || z.surface.canvas.width || 0), T = Number(w.height || z.surface.canvas.height || 0);
    if (ne < 1 || T < 1) return w;
    const $ = he(F, ne, T);
    if ($ && !A($, z.bounds, ne)) return w;
    const _ = String(((M = F.item) == null ? void 0 : M.id) || F.id || ""), D = ((ie = F.item) == null ? void 0 : ie.transform) || {}, X = `${z.key}:${_}:${ne}:${T}:${Number(D.du || 0).toFixed(6)}:${Number(D.dv || 0).toFixed(6)}:${Number(D.rot_deg || 0).toFixed(3)}:${Number(D.scale || 1).toFixed(4)}`, be = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (be.has(X)) return be.get(X);
    const me = Oe(Math.floor(Number(((le = z.bounds) == null ? void 0 : le.minX) || 0)), 0, Math.max(0, ne - 1)), xe = Oe(Math.floor(Number(((we = z.bounds) == null ? void 0 : we.minY) || 0)), 0, Math.max(0, T - 1)), q = Oe(Math.ceil(Number(((N = z.bounds) == null ? void 0 : N.maxX) || 0)), me, Math.max(0, ne - 1)), ve = Oe(Math.ceil(Number(((ue = z.bounds) == null ? void 0 : ue.maxY) || 0)), xe, Math.max(0, T - 1)), O = Math.max(1, q - me + 1), oe = Math.max(1, ve - xe + 1), V = c(ne, T, { readback: !0 });
    V.ctx.clearRect(0, 0, ne, T), V.ctx.drawImage(w, 0, 0);
    const ee = V.ctx.getImageData(me, xe, O, oe);
    V.ctx.save(), V.ctx.globalCompositeOperation = "destination-out", V.ctx.drawImage(z.surface.canvas, 0, 0), V.ctx.restore();
    const K = V.ctx.getImageData(me, xe, O, oe);
    let Y = !1;
    for (let Me = 0; Me < O * oe; Me += 1) {
      const Ee = ee.data[Me * 4 + 3], Te = K.data[Me * 4 + 3];
      if (Ee > Te) {
        Y = !0;
        break;
      }
    }
    return Y ? (be.size > 64 && be.clear(), be.set(X, V.canvas), V.canvas) : (be.set(X, w), w);
  }
  function k(w, F = null) {
    const z = C((w == null ? void 0 : w.rasterObjectId) || (w == null ? void 0 : w.id) || ""), ne = (w == null ? void 0 : w.bbox) || null;
    if (!z || !ne) return null;
    const T = de(w, F);
    if (!T || !(T.complete || T.width || T.naturalWidth)) return null;
    const { width: $, height: _ } = Z(), D = (w == null ? void 0 : w.transform) || {}, X = [
      z,
      $,
      _,
      ne.u0,
      ne.v0,
      ne.u1,
      ne.v1,
      D.du,
      D.dv,
      D.rot_deg,
      D.scale,
      y()
    ].join(":"), be = i.get(X);
    if (be) return be;
    i.size > 64 && i.clear();
    const me = on({ label: "editor.raster-erp" });
    me.width = $, me.height = _;
    const xe = me.getContext("2d");
    return xe ? (B0(xe, T, w, $, _), i.set(X, me), me) : null;
  }
  async function x(w, F) {
    const z = await new Promise((D) => w.toBlob(D, "image/png")), ne = new FormData();
    ne.append("image", z, F), ne.append("type", "input"), ne.append("subfolder", "panorama_stickers"), ne.append("overwrite", "1");
    const T = await t.fetchApi("/upload/image", { method: "POST", body: ne });
    if (!T || T.status !== 200) throw new Error(`upload failed (${T == null ? void 0 : T.status})`);
    const $ = await T.json(), _ = String(($ == null ? void 0 : $.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String(($ == null ? void 0 : $.subfolder) || "panorama_stickers"),
      storage: String(($ == null ? void 0 : $.type) || "input")
    };
  }
  let se = null, Q = !1;
  function E() {
    const w = Yp(a.painting), { width: F, height: z } = f();
    return CS(a.painting_layer, { paintCount: w.totalPaintCount, maskCount: w.totalMaskCount, width: F, height: z, nodeId: String(n.id ?? "0") });
  }
  function b() {
    const w = String(n.id ?? "0"), F = Na.get(w);
    if (Q && F) return F;
    const z = (async () => {
      var $, _, D, X, be, me, xe, q, ve, O, oe, V;
      const ne = h(), T = Yp(a.painting);
      if (T.totalPaintCount <= 0 && T.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, se = ne, l());
        return;
      }
      if (se !== ne && !Q) {
        Q = !0;
        try {
          J();
          const ee = g(!1), K = ((_ = ($ = r.paintEngine) == null ? void 0 : $.getErpTarget) == null ? void 0 : _.call($, ee)) || null, Y = ((D = K == null ? void 0 : K.displayPaint) == null ? void 0 : D.canvas) || null, j = ((X = K == null ? void 0 : K.committedMask) == null ? void 0 : X.canvas) || null, M = Math.max(1, Number(((be = K == null ? void 0 : K.descriptor) == null ? void 0 : be.width) || (Y == null ? void 0 : Y.width) || (j == null ? void 0 : j.width) || 2048)), ie = Math.max(1, Number(((me = K == null ? void 0 : K.descriptor) == null ? void 0 : me.height) || (Y == null ? void 0 : Y.height) || (j == null ? void 0 : j.height) || 1024));
          (!Y && T.totalPaintCount > 0 || !j && T.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((xe = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : xe.width) || 0) !== M || Number(((q = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : q.height) || 0) !== ie) && (r._paintLayerSyncBlankSurface = c(M, ie)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, M, ie));
          const le = Y || T.totalPaintCount > 0 && ((ve = r._paintLayerSyncBlankSurface) == null ? void 0 : ve.canvas) || null, we = j || T.totalMaskCount > 0 && ((O = r._paintLayerSyncBlankSurface) == null ? void 0 : O.canvas) || null;
          if (!le && !we) return;
          let N = null, ue = null;
          const Me = [];
          if (T.totalPaintCount > 0) {
            N = await x(le, `pano_paint_${w}.png`);
            for (const Ee of ee) {
              const Te = String(Ee || "").trim();
              if (!Te) continue;
              const $e = ((V = (oe = r.paintEngine) == null ? void 0 : oe.getGroupDisplayCanvas) == null ? void 0 : V.call(oe, Te)) || null;
              if (!$e) continue;
              const ze = Te.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ce = await x($e, `pano_group_${w}_${ze}.png`);
              Ce && Me.push({
                id: Te,
                actionGroupId: Te,
                image: Ce
              });
            }
          }
          T.totalMaskCount > 0 && (ue = await x(we, `pano_mask_${w}.png`)), ne === h() && (a.painting_layer = {
            paint: N,
            mask: ue,
            groups: Me,
            revision: ne
          }, se = ne, l());
        } catch (ee) {
          throw ee;
        } finally {
          Q = !1;
        }
      }
    })();
    return Na.set(w, z), z.finally(() => {
      Na.get(w) === z && Na.delete(w);
    }), z;
  }
  function G(w) {
    var _;
    const F = ((_ = r.paintEngine) == null ? void 0 : _.getMaskDisplayCanvas()) || null;
    if (!F) return w;
    const z = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, ne = w.reduce((D, X) => Math.max(D, Number((X == null ? void 0 : X.zIndex) || 0)), -1), T = (Array.isArray(a.stickers) ? a.stickers : []).reduce((D, X) => Math.max(D, Number((X == null ? void 0 : X.z_index) || 0)), -1), $ = Math.max(ne, T);
    return w.push({
      id: "mask_display",
      source: F,
      revision: z,
      zIndex: $ + 1,
      opacity: 1,
      visible: !0
    }), w;
  }
  function m() {
    var ne, T;
    const w = v(!0), F = U(), z = [];
    for (const $ of w) {
      if (($ == null ? void 0 : $.type) === "strokeGroup") {
        const _ = String($.actionGroupId || $.id || "");
        if (!_) continue;
        const D = ((T = (ne = r.paintEngine) == null ? void 0 : ne.getGroupDisplayCanvas) == null ? void 0 : T.call(ne, _)) || null;
        if (!D) continue;
        z.push({
          id: `paint_group:${_}`,
          source: D,
          revision: `${p()}:${_}`,
          zIndex: Number(($ == null ? void 0 : $.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if (($ == null ? void 0 : $.type) === "rasterObject") {
        const _ = $.item || null, D = C((_ == null ? void 0 : _.id) || $.id || "");
        if (!D) continue;
        const X = k(_, () => _e());
        if (!X) continue;
        const be = I(X, $, F), me = (_ == null ? void 0 : _.transform) || {};
        z.push({
          id: `raster:${D}`,
          source: be,
          revision: [
            h(),
            (F == null ? void 0 : F.key) || "",
            D,
            Number(me.du || 0).toFixed(6),
            Number(me.dv || 0).toFixed(6),
            Number(me.rot_deg || 0).toFixed(3),
            Number(me.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number(($ == null ? void 0 : $.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return G(z);
  }
  function S() {
    return te() ? m().filter((w) => w.visible !== !1).map((w) => ({ id: w.id, media: w.source, revision: w.revision, opacity: w.opacity, zIndex: w.zIndex })) : [];
  }
  function L() {
    a.painting_layer !== null && (a.painting_layer = null), se = "";
  }
  return {
    connect(w) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: p,
        getOrderedDisplayListObjects: v,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: h,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: W,
        inverseTransformErpPointAround: H,
        paintingShown: te,
        parseRasterObjectSelectionId: C,
        processFreehandPoints: B,
        rasterizeStrokeToSurface: R,
        rebuildPaintEngineIfNeeded: J,
        requestDraw: _e,
        screenPosToErpPoint: ke,
        shortestWrappedDelta: ge
      } = w);
    },
    getSharedLivePaintSurface: pe,
    getLivePaintRevisionSuffix: fe,
    isPaintCompositeInteraction: Se,
    hitRasterObjectAt: ce,
    invalidateLivePaintPreviewCaches: P,
    buildRasterObjectEditCanvas: k,
    needsPaintingLayerSync: E,
    syncPaintingLayerAsync: b,
    invalidatePaintingLayerState: L,
    buildEditorViewPaintLayers: S
  };
}
function bA(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(I) {
    return !I || typeof I != "object" ? { x: 0, y: 0 } : { x: Number((I == null ? void 0 : I.u) || 0), y: Number((I == null ? void 0 : I.v) || 0) };
  }
  function c(I, k, x, se = {}) {
    return { ...{
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: f(I, "widthScale", 1),
      pressureLike: f(I, "pressureLike", 1)
    }, ...se, u: k, v: x };
  }
  function d(I, k = !1) {
    return k ? 12e-4 : 18e-4;
  }
  function u(I, k, x = !1) {
    if (!Array.isArray(I) || !I.length) return [];
    const se = String((k == null ? void 0 : k.kind) || "") === "ERP_GLOBAL", Q = /* @__PURE__ */ new WeakMap();
    if (se) {
      let T = null;
      I.forEach(($) => {
        const _ = Number(($ == null ? void 0 : $.u) || 0), D = Number(($ == null ? void 0 : $.v) || 0), X = (_ % 1 + 1) % 1, be = T == null ? X : T + a(X, (T % 1 + 1) % 1);
        Q.set($, { x: be, y: D }), T = be;
      });
    }
    const E = (T) => !T || typeof T != "object" ? { x: 0, y: 0 } : Q.get(T) || l(T), b = (T, $, _, D = {}) => {
      const X = se ? (Number($) % 1 + 1) % 1 : Number($), be = c(T, X, _, D);
      return Q.set(be, { x: Number($), y: Number(_) }), be;
    }, G = (T, $, _) => {
      const D = E(T), X = E($);
      return b(T, Xn(D.x, X.x, _), Xn(D.y, X.y, _), {
        t: Xn(Number((T == null ? void 0 : T.t) || 0), Number(($ == null ? void 0 : $.t) || 0), _),
        widthScale: Xn(f(T, "widthScale", 1), f($, "widthScale", 1), _),
        pressureLike: Xn(f(T, "pressureLike", 1), f($, "pressureLike", 1), _)
      });
    };
    if (I.length === 1) {
      const T = E(I[0]);
      return [b(I[0], T.x, T.y)];
    }
    const m = d(k, x), S = (T, $) => {
      const _ = [0];
      for (let O = 1; O < T.length; O += 1) {
        const oe = E(T[O - 1]), V = E(T[O]);
        _.push(_[O - 1] + Math.hypot(V.x - oe.x, V.y - oe.y));
      }
      const D = _[_.length - 1] || 0;
      if (D <= 1e-8) {
        const O = T[0], oe = E(O);
        return [b(O, oe.x, oe.y)];
      }
      const X = [];
      let be = 0;
      for (let O = 0; O <= D + 1e-9; O += $) {
        for (; be < _.length - 2 && _[be + 1] < O; ) be += 1;
        const oe = _[be], V = _[be + 1], ee = Math.max(1e-8, V - oe);
        X.push(G(T[be], T[be + 1], Oe((O - oe) / ee, 0, 1)));
      }
      const me = T[T.length - 1], xe = E(me), q = X[X.length - 1], ve = q ? E(q) : null;
      return (!ve || Math.hypot(ve.x - xe.x, ve.y - xe.y) > $ * 0.35) && X.push(b(me, xe.x, xe.y)), X;
    }, L = (T) => {
      if (!Array.isArray(T) || T.length < 3) return T ? T.slice() : [];
      const $ = E(T[0]), _ = [b(T[0], $.x, $.y)];
      for (let be = 0; be < T.length - 1; be += 1) {
        const me = T[be], xe = T[be + 1], q = E(me), ve = E(xe), O = b(
          me,
          q.x * 0.75 + ve.x * 0.25,
          q.y * 0.75 + ve.y * 0.25,
          {
            t: Number(me.t || 0) * 0.75 + Number(xe.t || 0) * 0.25,
            widthScale: f(me, "widthScale", 1) * 0.75 + f(xe, "widthScale", 1) * 0.25,
            pressureLike: f(me, "pressureLike", 1) * 0.75 + f(xe, "pressureLike", 1) * 0.25
          }
        ), oe = b(
          me,
          q.x * 0.25 + ve.x * 0.75,
          q.y * 0.25 + ve.y * 0.75,
          {
            t: Number(me.t || 0) * 0.25 + Number(xe.t || 0) * 0.75,
            widthScale: f(me, "widthScale", 1) * 0.25 + f(xe, "widthScale", 1) * 0.75,
            pressureLike: f(me, "pressureLike", 1) * 0.25 + f(xe, "pressureLike", 1) * 0.75
          }
        );
        _.push(O, oe);
      }
      const D = T[T.length - 1], X = E(D);
      return _.push(b(D, X.x, X.y)), _;
    }, w = S(I, m);
    if (w.length < 3) return w;
    const F = x ? 2 : 1;
    let z = w.slice();
    for (let T = 0; T < F; T += 1) z = L(z);
    return S(z, Math.max(m * 0.75, 55e-5));
  }
  function f(I, k, x = 1) {
    const se = Number(I == null ? void 0 : I[k]);
    return Number.isFinite(se) ? Math.max(0, se) : x;
  }
  function p(I) {
    const k = Number(I == null ? void 0 : I.radiusValue);
    if (Number.isFinite(k) && k > 0) {
      const x = String((I == null ? void 0 : I.radiusModel) || "").trim() || "erp_uv_norm";
      return x === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((I == null ? void 0 : I.size) || 10) * 0.5 / 2048)
      } : {
        model: x,
        value: k
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((I == null ? void 0 : I.size) || 10) * 0.5 / 2048)
    };
  }
  function v(I, k, x = {}) {
    const se = on({ label: "editor.raster-surface" });
    se.width = Math.max(1, Math.round(I)), se.height = Math.max(1, Math.round(k));
    const Q = se.getContext("2d", x.readback ? { willReadFrequently: !0 } : void 0);
    return Q && (Q.clearRect(0, 0, se.width, se.height), Q.imageSmoothingEnabled = !0), { canvas: se, ctx: Q };
  }
  function g() {
    const I = ke();
    return `${String(t.paintStrokeRevision)}:${I.width}x${I.height}`;
  }
  function h() {
    const I = ke();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${I.width}x${I.height}`;
  }
  function y() {
    const I = i(), k = h();
    return I ? `${k}:${I}` : k;
  }
  function W() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function H() {
    t.paintCompositeRevision += 1;
  }
  function te() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function C() {
    var I, k;
    t.paintEngineRevisionKey = null, (k = (I = t.paintEngine) == null ? void 0 : I.rebuildCommitted) == null || k.call(I, n), t.paintEngineRevisionKey = g();
  }
  function B() {
    te(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function R({ rebuildPaintEngine: I = !1 } = {}) {
    o(), W(), B(), I && C();
  }
  function J() {
    o(), H(), B();
  }
  function _e() {
    var se;
    const I = ke(), k = `${I.width}x${I.height}`;
    t.paintEngineDescriptorKey !== k && (t.paintEngine = Wl(I), t.paintEngineDescriptorKey = k, t.paintEngineRevisionKey = "");
    const x = g();
    t.paintEngineRevisionKey !== x && (t.paintEngineRevisionKey = x, (se = t.paintEngine) == null || se.rebuildCommitted(n));
  }
  function ke() {
    const I = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: I,
      height: Math.max(1, Math.round(I * 0.5))
    };
  }
  function ge() {
    return ke();
  }
  function Se(I, k, x, se, Q = null) {
    const E = p(I), b = f(k, "widthScale", 1) * f(k, "pressureLike", 1);
    return E.model === "erp_uv_norm" ? Math.max(0.5, E.value * x * b) : E.model === "world_angle" ? Q ? Math.max(0.5, E.value / Math.max(1e-6, Number(Q.hFOV_deg || 90) * Nr) * x * b) : Math.max(0.5, E.value / (2 * Math.PI) * x * b) : Math.max(0.5, Number((I == null ? void 0 : I.size) || 10) * 0.5 * b);
  }
  function pe(I, k, x = {}) {
    const se = String((k == null ? void 0 : k.layerKind) || "paint"), Q = String((k == null ? void 0 : k.toolKind) || "pen"), E = x.preview === !0, b = E ? 0.78 : 1;
    if (I.globalAlpha = Q === "marker" ? 0.7 * b : 1, se === "mask") {
      I.fillStyle = E ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Q === "eraser") {
      I.globalCompositeOperation = "destination-out", I.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const G = String((k == null ? void 0 : k.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (k == null ? void 0 : k.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, m = E ? Math.max(0.28, Number(G.a ?? 1) * 0.88) : Math.max(0.12, Number(G.a ?? 1));
    I.fillStyle = `rgba(${Math.round(Number(G.r || 0) * 255)}, ${Math.round(Number(G.g || 0) * 255)}, ${Math.round(Number(G.b || 0) * 255)}, ${m})`;
  }
  function fe(I, k, x) {
    const se = Math.max(0.5, Math.min(x, Number((k == null ? void 0 : k.radiusPx) || 0.5)));
    !Number.isFinite(k == null ? void 0 : k.x) || !Number.isFinite(k == null ? void 0 : k.y) || !Number.isFinite(se) || (I.beginPath(), I.arc(Number(k.x || 0), Number(k.y || 0), se, 0, Math.PI * 2), I.fill());
  }
  function de(I, k, x, se, Q = {}) {
    if (!I || !Array.isArray(k) || !k.length) return;
    const E = Math.max(se.w, se.h) * 0.25;
    I.save(), pe(I, x, Q);
    const b = (G) => fe(I, G, E);
    if (k.length === 1) {
      b(k[0]), I.restore();
      return;
    }
    for (let G = 0; G < k.length - 1; G += 1) {
      const m = k[G], S = k[G + 1];
      if (!m || !S) continue;
      const L = Number(m.x || 0), w = Number(m.y || 0), F = Number(S.x || 0), z = Number(S.y || 0), ne = Math.max(0.5, Math.min(E, Number(m.radiusPx || 0.5))), T = Math.max(0.5, Math.min(E, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(L) || !Number.isFinite(w) || !Number.isFinite(F) || !Number.isFinite(z) || !Number.isFinite(ne) || !Number.isFinite(T)) continue;
      const $ = F - L, _ = z - w, D = Math.hypot($, _);
      if (!Number.isFinite(D) || D < 1e-6) {
        b(m);
        continue;
      }
      if (D > Math.max(se.w, se.h) * 0.5) continue;
      const X = Math.max(0.5, Math.min(ne, T)), be = Math.max(0.35, Math.min(X * 0.4, 2.25)), me = Math.max(1, Math.ceil(D / be));
      for (let xe = 0; xe <= me; xe += 1) {
        const q = xe / me;
        b({
          x: Xn(L, F, q),
          y: Xn(w, z, q),
          radiusPx: Xn(ne, T, q)
        });
      }
    }
    b(k[k.length - 1]), I.restore();
  }
  function re(I, k, x, se) {
    de(I, k, x, se, { preview: !1 });
  }
  function ye(I, k, x, se, Q) {
    var G, m, S, L;
    if (!I || !Array.isArray(k) || k.length < 3) return;
    const E = "u", b = "v";
    if (I.save(), String((x == null ? void 0 : x.layerKind) || "") === "mask")
      I.fillStyle = "rgba(255,255,255,1)";
    else if (String((x == null ? void 0 : x.toolKind) || "") === "eraser")
      I.globalCompositeOperation = "destination-out", I.fillStyle = "rgba(0,0,0,1)";
    else {
      const w = (x == null ? void 0 : x.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      I.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${Number(w.a ?? 1)})`;
    }
    I.beginPath(), I.moveTo(Number(((G = k[0]) == null ? void 0 : G[E]) || 0) * se.w, Number(((m = k[0]) == null ? void 0 : m[b]) || 0) * se.h);
    for (let w = 1; w < k.length; w += 1)
      I.lineTo(Number(((S = k[w]) == null ? void 0 : S[E]) || 0) * se.w, Number(((L = k[w]) == null ? void 0 : L[b]) || 0) * se.h);
    I.closePath(), I.fill(), I.restore();
  }
  function ce(I) {
    const k = (I == null ? void 0 : I.geometry) || null;
    return k ? String(k.geometryKind || "") === "lasso_fill" ? Array.isArray(k.points) ? k.points : [] : Array.isArray(k.processedPoints) && k.processedPoints.length ? k.processedPoints : Array.isArray(k.rawPoints) && k.rawPoints.length ? k.rawPoints : Array.isArray(k.points) ? k.points : [] : [];
  }
  function Z(I, k) {
    const x = ce(I);
    return !Array.isArray(x) || !x.length ? [] : x.map((se) => ({
      x: Number((se == null ? void 0 : se.u) || 0) * Number((k == null ? void 0 : k.w) || 1),
      y: Number((se == null ? void 0 : se.v) || 0) * Number((k == null ? void 0 : k.h) || 1),
      radiusPx: Se(I, se, Number((k == null ? void 0 : k.w) || 1), Number((k == null ? void 0 : k.h) || 1))
    }));
  }
  function U(I, k, x = null) {
    var G, m, S, L;
    if (!(I != null && I.ctx) || !k) return !1;
    const se = x || { w: Number(((G = I.canvas) == null ? void 0 : G.width) || 0), h: Number(((m = I.canvas) == null ? void 0 : m.height) || 0) }, Q = String((k == null ? void 0 : k.toolKind) || "") === "eraser" ? {
      ...k,
      layerKind: "mask",
      toolKind: String(((S = k == null ? void 0 : k.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : k;
    if (String(((L = k == null ? void 0 : k.geometry) == null ? void 0 : L.geometryKind) || "") === "lasso_fill")
      return ye(I.ctx, ce(Q), Q, se), !0;
    const b = Z(Q, se);
    return b.length ? (re(I.ctx, b, Q, se), !0) : !1;
  }
  function P(I, k, x, se = 8) {
    const Q = new Uint8Array(k * x), E = [], b = new Int32Array(k * x), G = new Int32Array(k * x);
    for (let m = 0; m < x; m += 1)
      for (let S = 0; S < k; S += 1) {
        const L = m * k + S;
        if (Q[L] || I[L] <= se) continue;
        let w = 0, F = 0;
        b[F] = S, G[F] = m, F += 1, Q[L] = 1;
        const z = [];
        let ne = S, T = m, $ = S, _ = m;
        for (; w < F; ) {
          const D = b[w], X = G[w];
          w += 1, z.push({ x: D, y: X }), D < ne && (ne = D), X < T && (T = X), D > $ && ($ = D), X > _ && (_ = X);
          const be = [
            [(D - 1 + k) % k, X],
            [(D + 1) % k, X],
            [D, X - 1],
            [D, X + 1]
          ];
          for (const [me, xe] of be) {
            if (xe < 0 || xe >= x) continue;
            const q = xe * k + me;
            Q[q] || I[q] <= se || (Q[q] = 1, b[F] = me, G[F] = xe, F += 1);
          }
        }
        E.push({ pixels: z, minX: ne, minY: T, maxX: $, maxY: _ });
      }
    return E;
  }
  function he(I, k) {
    const x = [...new Set((Array.isArray(I == null ? void 0 : I.pixels) ? I.pixels : []).map((m) => Number((m == null ? void 0 : m.x) || 0)).filter((m) => Number.isFinite(m)))].sort((m, S) => m - S);
    if (!x.length) return null;
    if (x.length === 1)
      return { startX: x[0], widthPx: 1 };
    let se = -1, Q = 0;
    for (let m = 0; m < x.length; m += 1) {
      const S = x[m], w = (m === x.length - 1 ? x[0] + k : x[m + 1]) - S - 1;
      w > se && (se = w, Q = m);
    }
    const E = (x[(Q + 1) % x.length] + k) % k;
    let b = 1 / 0, G = -1 / 0;
    for (const m of x) {
      const S = (m - E + k) % k;
      b = Math.min(b, S), G = Math.max(G, S);
    }
    return {
      startX: E,
      widthPx: Math.max(1, G - b + 1)
    };
  }
  function A(I, k, x = {}) {
    var S;
    const se = Number((I == null ? void 0 : I.width) || 0), Q = Number((I == null ? void 0 : I.height) || 0), E = (S = I == null ? void 0 : I.getContext) == null ? void 0 : S.call(I, "2d");
    if (!E || se < 1 || Q < 1) return [];
    const b = E.getImageData(0, 0, se, Q), G = new Uint8Array(se * Q);
    for (let L = 0; L < G.length; L += 1) G[L] = b.data[L * 4 + 3];
    return P(G, se, Q, 8).map((L, w) => {
      const F = he(L, se);
      if (!F) return null;
      const z = Number(F.widthPx || 0), ne = L.maxY - L.minY + 1, T = Number(F.startX || 0), $ = on({ label: "editor.lasso-fill" });
      $.width = z, $.height = ne;
      const _ = $.getContext("2d");
      if (!_) return null;
      const D = _.createImageData(z, ne);
      return L.pixels.forEach(({ x: X, y: be }) => {
        const me = (be * se + X) * 4, xe = (Number(X || 0) - T + se) % se, q = ((be - L.minY) * z + xe) * 4;
        D.data[q + 0] = b.data[me + 0], D.data[q + 1] = b.data[me + 1], D.data[q + 2] = b.data[me + 2], D.data[q + 3] = b.data[me + 3];
      }), _.putImageData(D, 0, 0), {
        id: oo("raster"),
        type: "raster_frozen",
        layerKind: k === "mask" ? "mask" : "paint",
        z_index: Number((x == null ? void 0 : x.z_index) || 0) + w * 1e-3,
        locked: (x == null ? void 0 : x.locked) === !0,
        bbox: {
          u0: 0,
          v0: L.minY / Q,
          u1: z / se,
          v1: (L.maxY + 1) / Q
        },
        rasterDataUrl: $.toDataURL("image/png"),
        transform: {
          du: T / se,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(I) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = I);
    },
    processFreehandPoints: u,
    createRasterSurface: v,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: C,
    markObjectVisualsDirty: B,
    markPaintStrokeVisualsDirty: R,
    markPaintCompositeVisualsDirty: J,
    rebuildPaintEngineIfNeeded: _e,
    getDesiredPaintTargetDescriptor: ke,
    getActivePaintTargetDescriptor: ge,
    rasterizeStrokeToSurface: U,
    createRasterFrozenObjectsFromCanvas: A
  };
}
function vA(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, v, g, h = { stored: null, shown: null, handoff: null, fps: null };
  function y(Z, U = null) {
    var P;
    if (Z && typeof Z == "object" && !Array.isArray(Z)) return Z;
    if (Array.isArray(Z) && Z.length > 0) {
      const he = Z[0];
      if (he && typeof he == "object" && !Array.isArray(he)) return he;
    }
    if (Array.isArray(U) && U.length > 0) {
      const he = (P = U[0]) == null ? void 0 : P.parsed_state;
      if (he && typeof he == "object" && !Array.isArray(he))
        return {
          yaw_deg: Number(he.yaw_deg || 0),
          pitch_deg: Number(he.pitch_deg || 0),
          hFOV_deg: Number(he.hFOV_deg || 30),
          rot_deg: Number(he.roll_deg || 0)
        };
    }
    return null;
  }
  function W(Z, U, P) {
    const he = Math.max(1, Number(U || 1)), A = Math.max(1, Number(P || 1)), I = Oe(Number(Z || 30), 0.1, 179) * Nr, k = 2 * Math.atan(Math.tan(I * 0.5) * (A / he));
    return Oe(k * Vi, 0.1, 179);
  }
  function H(Z) {
    const U = String(Z || "").trim();
    if (!U) return null;
    try {
      const P = JSON.parse(U);
      if (!P || typeof P != "object" || String(P.kind || "") !== "pano_sticker_state") return null;
      const he = P.version;
      let A = null;
      if (typeof he == "number" && Number.isInteger(he) ? A = he : typeof he == "string" && /^\d+$/.test(he) && (A = Number.parseInt(he, 10)), A !== 1) return null;
      const I = P.pose;
      if (!I || typeof I != "object") return null;
      const k = Number(I.yaw_deg), x = Number(I.pitch_deg), se = Number(I.roll_deg), Q = Number(I.hFOV_deg);
      if (![k, x, se, Q].every((m) => Number.isFinite(m))) return null;
      let E = ((k + 180) % 360 + 360) % 360 - 180;
      Object.is(E, -0) && (E = 0);
      const b = {
        yaw_deg: E,
        pitch_deg: Oe(x, -89.9, 89.9),
        roll_deg: se,
        hFOV_deg: Oe(Q, 0.1, 179)
      }, G = Number(P.source_aspect);
      return Number.isFinite(G) && G > 0 && (b.source_aspect = G), b;
    } catch {
      return null;
    }
  }
  function te(Z) {
    const U = Number(Z == null ? void 0 : Z.yaw_deg), P = Number(Z == null ? void 0 : Z.pitch_deg), he = Number((Z == null ? void 0 : Z.roll_deg) ?? (Z == null ? void 0 : Z.rot_deg)), A = Number(Z == null ? void 0 : Z.hFOV_deg), I = zi(Z);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(U) ? U : 0),
        pitch_deg: Oe(Number.isFinite(P) ? P : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(he) ? he : 0,
        hFOV_deg: Oe(Number.isFinite(A) ? A : 90, 0.1, 179)
      },
      source_aspect: I
    };
  }
  function C(Z) {
    var x;
    if (!Z || typeof Z != "object") return te(null);
    const U = Number(Z == null ? void 0 : Z.yaw_deg), P = Number(Z == null ? void 0 : Z.pitch_deg), he = Number((Z == null ? void 0 : Z.roll_deg) ?? (Z == null ? void 0 : Z.rot_deg)), A = Number(Z == null ? void 0 : Z.hFOV_deg), I = Number(Z == null ? void 0 : Z.vFOV_deg);
    let k = 1;
    if (Number.isFinite(A) && Number.isFinite(I)) {
      const se = Oe(A, 0.1, 179) * Nr, Q = Oe(I, 0.1, 179) * Nr, E = Math.tan(Q * 0.5);
      if (Math.abs(E) > 1e-6) {
        const b = Math.tan(se * 0.5) / E;
        Number.isFinite(b) && b > 0 && (k = b);
      }
    }
    if (Z != null && Z.asset_id && ((x = o == null ? void 0 : o.assets) != null && x[Z.asset_id])) {
      const se = o.assets[Z.asset_id], Q = Number((se == null ? void 0 : se.w) || 0), E = Number((se == null ? void 0 : se.h) || 0);
      Q > 0 && E > 0 && (k = Q / E);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(U) ? U : 0),
        pitch_deg: Oe(Number.isFinite(P) ? P : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(he) ? he : 0,
        hFOV_deg: Oe(Number.isFinite(A) ? A : 30, 0.1, 179)
      },
      source_aspect: k
    };
  }
  function B(Z) {
    return t.linkedValue(n, Z);
  }
  function R(Z, U, P) {
    const he = Z && typeof Z == "object" ? {
      yaw_deg: Number(Z.yaw_deg || 0),
      pitch_deg: Number(Z.pitch_deg || 0),
      roll_deg: Number(Z.rot_deg ?? Z.roll_deg ?? 0),
      hFOV_deg: Number(Z.hFOV_deg || 30)
    } : H(U);
    if (he) {
      const k = Number((P == null ? void 0 : P.naturalWidth) || (P == null ? void 0 : P.width) || he.source_aspect || 1), x = Number((P == null ? void 0 : P.naturalHeight) || (P == null ? void 0 : P.height) || 1);
      return {
        yaw_deg: Number(he.yaw_deg || 0),
        pitch_deg: Number(he.pitch_deg || 0),
        hFOV_deg: Number(he.hFOV_deg || 30),
        vFOV_deg: W(he.hFOV_deg, k, x),
        rot_deg: Number(he.roll_deg || 0)
      };
    }
    const A = Number((P == null ? void 0 : P.naturalWidth) || (P == null ? void 0 : P.width) || 1), I = Number((P == null ? void 0 : P.naturalHeight) || (P == null ? void 0 : P.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: W(30, A, I),
      rot_deg: 0
    };
  }
  function J() {
    const Z = Ot(n, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return Bg(o, Wg(n, { pose: Z, handoff: _e() }));
  }
  function _e() {
    return Ot(n, "sticker-handoff") ? rw(n, c("pano_sticker_handoff")) : null;
  }
  function ke() {
    return s === "stickers" && !i && n.__panoSceneStateV2 === !0;
  }
  function ge(Z, U, P) {
    return structuredClone(Po(An({ version: 2, timeline: { fps: U }, stickers: [Z] }), P).stickers[0]);
  }
  function Se({ record: Z = !0, restored: U = !1 } = {}) {
    var se;
    if (!ke()) return !1;
    const P = o.stickers.find((Q) => {
      var E;
      return ((E = Q.source) == null ? void 0 : E.kind) === "port";
    });
    if (!P)
      return h = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: he } = o.timeline;
    let A;
    if (U || !h.handoff || ((se = h.stored) == null ? void 0 : se.id) !== P.id)
      A = structuredClone(P);
    else {
      const Q = (E) => h.fps === he ? E : ge(E, h.fps, he);
      Z && Z_(P, Q(h.shown)), A = Q_(P, Q(h.stored));
    }
    const I = _e(), k = I ? zd(o, A, I) : structuredClone(A), x = JSON.stringify(k) !== JSON.stringify(P);
    if (x) {
      for (const Q of Object.keys(P)) delete P[Q];
      Object.assign(P, k);
    }
    return h = { stored: A, shown: structuredClone(k), handoff: I, fps: he }, x;
  }
  function pe() {
    return h.handoff ? { ...o, stickers: o.stickers.map((Z) => {
      var U;
      return ((U = Z.source) == null ? void 0 : U.kind) === "port" ? h.stored : Z;
    }) } : o;
  }
  function fe(Z) {
    var he;
    if (!ke() || ((he = Z == null ? void 0 : Z.source) == null ? void 0 : he.kind) !== "port") return null;
    const { handoff: U } = h, P = !!U && U.placement === Z.placement;
    return So[Z.placement].map((A) => ({ name: A, overridden: P && Z.handoff_overrides.includes(A) }));
  }
  function de(Z) {
    Se();
    const U = o.stickers.find((P) => {
      var he;
      return ((he = P.source) == null ? void 0 : he.kind) === "port";
    });
    !U || U.locked || !h.handoff || !ew(o, U, h.handoff, Z) || (h.shown = structuredClone(U), h.stored[Z] = structuredClone(U[Z]), f(), a(), u(), g(), p());
  }
  function re() {
    var x;
    const Z = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((se) => String((se == null ? void 0 : se.name) || "") === "sticker_image") : -1, U = Z >= 0 ? ((x = n.getInputLink(Z)) == null ? void 0 : x.id) ?? null : null, P = l(() => {
      oi(n, "image-loaded");
    }), he = y(c("pano_sticker_input_pose"), null), A = B("sticker_state"), I = t.externalStateHash(n, A), k = U == null ? null : R(he, A, P);
    return Kg(o, {
      connected: U != null,
      linkId: U,
      stateHash: I,
      pose: k,
      imageWidth: Number((P == null ? void 0 : P.naturalWidth) || (P == null ? void 0 : P.width) || 0),
      imageHeight: Number((P == null ? void 0 : P.naturalHeight) || (P == null ? void 0 : P.height) || 0)
    });
  }
  function ye(Z = "sync") {
    if (s !== "stickers" || i) return;
    const U = n.__panoSceneStateV2 ? J() : re();
    if (U.changed) {
      const P = o.stickers.find(d);
      o.stickers = U.state.stickers, o.active = U.state.active, P && r.selectedId === P.id && !o.stickers.some((he) => he.id === P.id) && (r.selectedId = null, r.selectedIds = []), a(), g(), v();
    } else Se({ restored: Z === "open" }) ? (u(), g()) : Z === "image-loaded" && g();
    p();
  }
  function ce() {
    const Z = Array.isArray(o.stickers) ? o.stickers : [], U = [];
    for (const P of Z)
      d(P) && (P.visible = !1, U.push(P));
    return U;
  }
  return {
    connect(Z) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: p,
        updateSelectionMenu: v,
        updateSidePanel: g
      } = Z);
    },
    computeStickerVFov: W,
    buildCanonicalCutoutStickerState: te,
    buildCanonicalSelectedStickerState: C,
    reconcileExternalStickerFromInputs: ye,
    collectExternalStickersForClearAll: ce,
    syncPortHandoff: Se,
    storedEditorState: pe,
    portHandoffLanes: fe,
    revertPortHandoffLane: de
  };
}
function ro(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function SA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function _A({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: s,
  getBrushPresetIdForTool: a,
  isActiveLassoTool: l
}) {
  var H, te;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", d = {
    visible: c,
    activePane: c ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: c ? !!r : !1,
    pickerHueColor: n({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (C, B) => ({ index: B, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((H = t.find((C) => i(e.paintColor, C.color))) == null ? void 0 : H.id) || "", f = !u, p = o(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((te = e.customPaintColor) == null ? void 0 : te.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[g] ?? 10, y = l(), W = Array.from({ length: 8 }, (C, B) => e.customPaintHistory[B] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...s(p.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: W.map((C, B) => ({
      index: B,
      color: C ? { cssColor: n(C, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function wA({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
  return {
    coverage: { value: r(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const kA = {
  position_x: ["Position", "X", 0.01],
  position_y: ["Position", "Y", 0.01],
  position_z: ["Position", "Z", 0.01],
  yaw_deg: ["Rotation", "Y", 0.5],
  pitch_deg: ["Rotation", "P", 0.5],
  roll_deg: ["Rotation", "R", 0.5],
  rot_deg: ["Rotation", "R", 0.5],
  hFOV_deg: ["FOV", "H", 0.25],
  vFOV_deg: ["FOV", "V", 0.25]
};
function xA(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = kA[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Yc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function MA({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
  const o = !n && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!r || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!r || !!n },
      "toggle-grid": {
        icon: o ? We.eye : We.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function Q0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function NA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function PA(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const wo = "erp", AA = ["1:1", "4:3", "3:2", "16:9"];
function ey(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...AA.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: wo, label: Number(r) === 180 ? "180°" : "360°", active: e === wo }] : []
  ];
}
const CA = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, IA = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, EA = { ...CA, opacity: "Opacity" };
function af(e) {
  return `Upstream · ${e}`;
}
function OA({ layer: e, editable: t, locked: r, readOnly: n, placement: i, override: o = null, handoff: s = null }) {
  const a = e !== null && !t, l = e !== null && !n && t && !r && !!o, c = (d) => !n && !r && !!(s != null && s.some((u) => u.name === d && u.overridden));
  return {
    origin: e === null ? "" : `${af(e)}${a ? " · inherited only" : ""}`,
    note: a ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !l },
    lanes: IA[i].map((d) => ({
      name: d,
      label: EA[d],
      action: e === null && s ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !c(d) : !l || o.placement !== i || !Object.hasOwn(o, d)
    }))
  };
}
function FA({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: s,
  notes: a,
  uiSettings: l,
  normalizeCoverageValue: c,
  upstream: d = null
}) {
  return {
    coverage: { value: c(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: s,
    rows: xA(s),
    notes: a,
    upstream: d,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function TA({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: s,
  selectedLocked: a,
  activeAspect: l,
  cutoutAspectOpen: c,
  isExternalSticker: d,
  isStickerHidden: u,
  canRestoreSelectedToInitial: f,
  iconSet: p,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: v = !1,
  coverage: g = 360,
  // Upstream elements in the selection (ADR 0030): null, or { editable }. Only Lock and Delete act on them,
  // while their layers keep overrides; the other buttons stay in place, disabled.
  upstream: h = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let y = [];
  if (r.length > 1)
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a }
    ], d(t) || (y.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: p.duplicate }), y.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: p.replace_image })), d(t)) {
      const W = f(), H = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: W ? "Back to initial position" : "Already at initial position",
        icon: p.back_initial,
        disabled: !W
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: H ? "Show" : "Hide",
        tip: H ? "Show input image" : "Hide input image",
        icon: H ? p.eye : p.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed }), (!d(t) || h) && y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: p.aspect,
        open: !!c,
        choices: ey(l, { erp: v, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: p.rotate_90, disabled: l === wo }
    ], v ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    );
  return h && (y = y.map((W) => ({
    ...W,
    disabled: W.key === "toggle-lock" ? !h.editable : W.key === "delete" ? !h.editable || !!W.disabled : !0
  }))), ty(i.corners, y);
}
const qp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function DA({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? qp.filter((s) => s.cameraTip) : qp;
  return ty([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: We.delete }] : []
  ]);
}
function RA(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), p = d + 18, v = c - 18 - r;
  let g;
  return p <= f ? g = Math.max(p, 14) : v >= 14 ? g = Math.min(v, f) : g = Math.min(Math.max(p, 14), f), { left: u, top: g };
}
function ty(e, t) {
  const r = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((c) => c.x), i = r.map((c) => c.y), o = Math.min(...n), s = Math.max(...n), a = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + s) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: s, minY: a, maxY: l }
  };
}
const ny = "painting", hs = "background";
function LA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const VA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function $A(e, { span: t, portBarEnd: r = () => null, selection: n, selectedId: i, expanded: o, openRows: s, audio: a = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: d = !1, scene: u = !1, upstream: f = [], background: p = null }) {
  const v = (y, W, H, te, C, B, { keyable: R = !0, hideable: J = !0, origin: _e = null } = {}) => {
    const ke = (ge) => (n == null ? void 0 : n.owner) === y && n.lane === ge ? n.frames.map((Se) => Se + B) : [];
    return {
      id: y,
      label: H,
      icon: te,
      clip: C,
      selected: y === i,
      hideable: J,
      // The background has no eye and always shows.
      visible: W.visible !== !1,
      ...Xp(_e),
      keyable: R,
      open: R && s.has(y),
      keys: aS(W).map((ge) => ({ frame: ge.frame + B, full: ge.full })),
      selectedFrames: ke(null),
      lanes: (R ? Ao(W) : []).map((ge) => ({
        key: `${y}:${ge}`,
        lane: ge,
        label: VA[ge],
        frames: W[ge].keyframes.map((Se) => Se.frame + B),
        selectedFrames: ke(ge)
      }))
    };
  }, g = ({ start: y, in: W, duration: H }, te = null) => ({ clip: { start: y, end: H === null ? te : y + H }, offset: y - W }), h = (y, { idOf: W = (C) => C, sceneRow: H, origin: te = null }) => {
    const C = y.stickers.filter((R) => R.placement === "sky").sort((R, J) => J.z_index - R.z_index), B = y.stickers.filter((R) => R.placement === "world");
    return [
      ...[...C, ...B].map((R) => {
        const { clip: J, offset: _e } = g(R.clip, r(R)), ke = eg(te ? { ...R, id: R.origin.id } : R);
        return v(R.id, R, ke, We.image, J, _e, { origin: te && { ...te, overridden: te.stickerOverridden(R) } });
      }),
      ...LA(y.painting) || !y.painting_visible ? [{
        id: W(ny),
        label: "Paint",
        icon: We.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: y.painting_visible,
        ...Xp(te && { ...te, overridden: te.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...H || fl(y.scene) ? [(() => {
        const { clip: R, offset: J } = g(y.scene.clip);
        return v(W("scene"), y.scene, "Scene", We.box, R, J, {
          keyable: !1,
          origin: te && { ...te, overridden: te.sceneOverridden }
        });
      })()] : []
    ];
  };
  return {
    visible: !0,
    expanded: o,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    // A Timeline of one frame has nothing to play.
    playable: t > 1,
    fps: e.timeline.fps,
    fpsLocked: l,
    length: e.timeline.length,
    rows: [
      ...p ? [(() => {
        const { clip: y, offset: W } = g(e.background.clip, p.end);
        return v(hs, e.background, "Background", We.unwrap, y, W, { keyable: !1, hideable: !1 });
      })()] : [],
      ...c ? [v("camera", e.camera, "Camera", We.camera, null, 0, { hideable: d })] : [],
      ...h(e, { sceneRow: u })
    ],
    groups: f.map(({ key: y, sceneState: W, editable: H, record: te, scene: C, deleted: B }) => ({
      key: y,
      label: `${af(y)}${H ? "" : " · inherited only"}`,
      revert: { disabled: !H || !i0(te) },
      restore: { label: `Restore deleted (${B})`, disabled: !H || B === 0 },
      rows: h(W, {
        idOf: (R) => Mu(y, R),
        sceneRow: C || !W.scene.visible,
        origin: {
          editable: H,
          stickerOverridden: (R) => !!(te != null && te.stickers.some((J) => J.id === R.origin.id && J.placement === R.placement)),
          paintingOverridden: !!te && Object.hasOwn(te, "painting_visible"),
          sceneOverridden: !!te && Object.keys(te.scene).length > 0
        }
      })
    }))
  };
}
function Xp(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function zA(e, t, r, n) {
  const i = dS(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const jA = 4, HA = 0.25, ry = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function iy(e) {
  return Object.hasOwn(ry, e);
}
function oy(e, t, r) {
  const { forward: n, right: i } = Hi(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function GA() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return iy(o) ? (e.size || (n = s), e.add(o), !0) : !1;
    },
    // Lets a held key go; false when it was not held.
    release(o) {
      return e.delete(o);
    },
    releaseAll: i,
    // Shift and Alt as a key event has them.
    modifiers(o) {
      t = !!o.shiftKey, r = !!o.altKey;
    },
    get held() {
      return e.size > 0;
    },
    direction() {
      const o = { forward: 0, right: 0, up: 0 };
      for (const s of e) {
        const [a, l] = ry[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? jA : 1) * (r ? HA : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const KA = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), WA = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function UA(e) {
  var n;
  const t = e.viewTransition, r = (t == null ? void 0 : t.to) ?? {
    position: e.viewPosition,
    yaw_deg: e.viewYaw,
    pitch_deg: e.viewPitch,
    hFOV_deg: e.viewFov,
    distance: e.viewDistance
  };
  return {
    mode: e.mode,
    spaceMode: ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e.spaceMode,
    position: [...r.position],
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    hFOV_deg: r.hFOV_deg,
    distance: r.distance,
    moved: t != null && t.end ? t.end.moved : e.viewMoved
  };
}
function Jp(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function BA(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return KA.has(r) && (r !== "frame" || t) && WA.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Jp(s, -89.9, 89.9) && Jp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
    mode: r,
    spaceMode: n,
    viewPosition: [...i],
    viewYaw: o,
    viewPitch: s,
    viewFov: a,
    viewDistance: l,
    viewMoved: c
  } : null;
}
const YA = 250, qA = 600, XA = 180, JA = 2;
function ZA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function es(e, t, r) {
  return e + (t - e) * r;
}
function QA(e, t, r = 1) {
  const n = Math.max(
    Math.abs(ud(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / XA + i / JA);
  return Math.round(es(YA, qA, o));
}
function eC(e, t, r) {
  const n = ZA(Oe(r, 0, 1));
  return {
    position: e.position.map((i, o) => es(i, t.position[o], n)),
    yaw_deg: Kt(e.yaw_deg + ud(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: es(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: es(e.hFOV_deg, t.hFOV_deg, n),
    distance: es(e.distance, t.distance, n)
  };
}
function tC(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(ud(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function nC(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return tC(e, t) ? null : { from: e, to: t, startTs: r, durationMs: QA(e, t, n), end: i };
}
function rC(e, t) {
  const r = Oe((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: eC(e.from, e.to, r), done: !1 };
}
function El(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function iC(e, t, r) {
  const n = El(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function oC(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    runtime: a,
    sceneV2: l,
    shotEditor: c,
    state: d,
    stateV2: u,
    studio: f,
    viewController: p
  } = e;
  let v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se = null;
  function pe(O, oe = null) {
    const V = k();
    J(() => {
      i.viewTransition = nC(V, O, performance.now(), { scale: L(), end: oe });
    }), !i.viewTransition && oe && fe(oe), p.state.inertia.active = !1, p.state.inertia.vx = 0, p.state.inertia.vy = 0, ke(), B({ localOnly: !0, reason: ft.VIEW });
  }
  function fe(O) {
    A(gu({ ...he(), moved: O.moved }, O.mode, x())), a.backgroundDirty = !0;
  }
  function de() {
    i.viewTransition && (i.viewTransition = null, ke());
  }
  function re(O, oe) {
    pe({ ...k(), yaw_deg: O, pitch_deg: oe });
  }
  function ye() {
    return !f || Q() && !W();
  }
  function ce() {
    return i.mode === "pano" && Z();
  }
  function Z() {
    return u && s_({ sceneLinked: l && !!fo(s).scene, files: R(), stickers: d.stickers });
  }
  function U() {
    return i.spaceMode === "6dof" && ce();
  }
  function P() {
    var O, oe, V;
    return Tk((V = (oe = (O = t.ui) == null ? void 0 : O.settings) == null ? void 0 : oe.getSettingValue) == null ? void 0 : V.call(oe, S0));
  }
  function he() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function A(O) {
    i.spaceMode = O.mode, i.viewPosition = O.position, i.viewMoved = O.moved;
  }
  function I(O) {
    var V;
    const oe = iC(i.spaceMode, i.viewTransition, O);
    if (oe !== "keep") {
      if (oe === "return") {
        pe({ ...k(), position: x(), distance: ((V = m()) == null ? void 0 : V.radius) || pr }, { mode: O, moved: !1 });
        return;
      }
      de(), A(gu({ ...he(), position: k().position }, O, x())), a.backgroundDirty = !0, ke(), B({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function k() {
    var V;
    const O = i.viewMoved ? i.viewDistance : ((V = m()) == null ? void 0 : V.radius) || pr, oe = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: O };
    return e_(i.spaceMode, oe, x());
  }
  function x() {
    return Q() ? G().position : [0, 0, 0];
  }
  function se() {
    return r && d.camera !== null;
  }
  function Q() {
    return se() && d.camera.visible;
  }
  function E() {
    return d.painting_visible !== !1;
  }
  function b(O) {
    return O.visible && ji(O.clip, i.frame);
  }
  function G() {
    return Bl(d.camera, i.frame);
  }
  function m() {
    var oe;
    const O = v();
    return ((oe = O.space ?? O.content) == null ? void 0 : oe.sphere) ?? null;
  }
  function S(O) {
    i.viewPosition = O.position, i.viewYaw = O.yaw_deg, i.viewPitch = O.pitch_deg, i.viewDistance = O.distance, i.viewMoved = !0, a.backgroundDirty = !0, B({ localOnly: !0, reason: ft.VIEW });
  }
  function L() {
    var O;
    return ((O = m()) == null ? void 0 : O.radius) || pr;
  }
  function w() {
    var le;
    const O = v().space, oe = g(), V = i.worldSelectedId || i.selectedId, ee = oe.stickers.findIndex((we) => we.id === V), K = ee < 0 ? _e(V) : null, Y = ee < 0 ? (le = O.upstreamItems.find((we) => {
      var N;
      return ((N = we.request) == null ? void 0 : N.id) === V;
    })) == null ? void 0 : le.request : O.sticker, j = ee < 0 && !Ut(K) ? null : {
      sticker: K ?? oe.stickers[ee],
      value: K ? Wr(K, i.frame) : $s(oe, i.frame).stickers[ee],
      plane: [...O.stickers, ...O.upstreamStickers].find((we) => we.id === V) ?? null,
      item: (Y == null ? void 0 : Y.id) === V && Y.url ? { kind: Y.kind, box: o.sceneBox(Y.url) } : null
    }, M = y() ? xe() : u_(m(), j);
    if (!M) return;
    const ie = k();
    i.viewDistance = ie.distance, i.viewMoved = !0, pe(o_(ie, M, n.width, n.height));
  }
  function F(O) {
    return o.pickSurface(ve(), O.x, O.y, n.width, n.height);
  }
  function z(O, oe) {
    var V;
    return yu(O, oe, i.viewMoved ? null : (V = m()) == null ? void 0 : V.center, L());
  }
  function ne() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function T(O, oe) {
    const V = performance.now(), ee = { x: O.x, y: O.y, time: V, key: o.contentRevision(), view: ne() };
    if (!og(Se, ee)) {
      const Y = F(O);
      Se = { ...ee, cost: performance.now() - V, hit: Y };
    }
    const K = k();
    S(lg(K, z(K, Se.hit), oe, L())), Se.view = ne(), Se.wheelTime = V;
  }
  function $(O, oe, V) {
    const ee = k();
    i.interaction = O === "orbit" ? { kind: "space_orbit", last: oe, pivot: z(ee, F(oe)) } : { kind: "space_pan", last: oe, depth: ig(ee, L()) }, ge(oe), n.setPointerCapture(V);
  }
  function _() {
    return U() || H();
  }
  function D(O) {
    const oe = C.elapsed(O);
    if (!oe || i.viewTransition) return !1;
    const V = C.speed(L()) * oe;
    if (H()) return te(C.direction(), V);
    if (!U()) return !1;
    const ee = k(), K = oy(ee, C.direction(), V);
    return K === ee ? !1 : (i.viewPosition = K.position, i.viewDistance = ee.distance, i.viewMoved = !0, !0);
  }
  function X() {
    vl(s).view = UA(i);
  }
  function be() {
    const O = c && !Q0({ hasShot: !!h(), erp: W() }).disabled, oe = BA(vl(s).view, { frame: O });
    oe && Object.assign(i, oe);
  }
  function me(O) {
    return O * 0.2;
  }
  function xe() {
    return { center: G().position, radius: me(L()) };
  }
  function q(O, oe) {
    const { yaw_deg: V, pitch_deg: ee } = pg(O.position, oe);
    return { ...O, yaw_deg: V, pitch_deg: ee };
  }
  function ve() {
    return Td(k(), n.width, n.height, m());
  }
  return {
    connect(O) {
      ({
        editorViewInput: v,
        editorViewSceneState: g,
        getActiveCutoutShot: h,
        isCameraSelected: y,
        isErpCamera: W,
        isFreeFrameView: H,
        moveFrameByKeys: te,
        moveKeys: C,
        requestDraw: B,
        sceneFiles: R,
        startAnimation: J,
        stickerById: _e,
        syncFloatingViewButtonState: ke,
        updateCursor: ge
      } = O);
    },
    transitionView: pe,
    applyViewTransitionEnd: fe,
    cancelViewTransition: de,
    turnViewTo: re,
    cameraPreviewShown: ye,
    isSpaceView: ce,
    hasSpaceContent: Z,
    isFreeSpaceView: U,
    viewControls: P,
    spaceModeState: he,
    applySpaceMode: A,
    setSpaceMode: I,
    spaceViewState: k,
    spaceOrigin: x,
    hasCamera: se,
    cameraShoots: Q,
    paintingShown: E,
    sceneStickerShown: b,
    cutoutCamera: G,
    contentSphere: m,
    setSpaceView: S,
    spaceScale: L,
    frameSpaceContent: w,
    zoomSpaceAt: T,
    startSpaceDrag: $,
    canKeyMove: _,
    stepKeyMove: D,
    saveView: X,
    restoreView: be,
    currentSpaceCamera: ve,
    cameraFrustumLength: me,
    cameraSphere: xe,
    lookingAt: q
  };
}
function sC(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: s,
    state: a,
    stateV2: l,
    stillCanvas: c,
    videoEl: d
  } = e;
  let u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q, E, b, G = { revision: -1, sceneState: null }, m = null;
  function S() {
    return m || (m = F()), m;
  }
  function L() {
    m = null;
  }
  function w() {
    return G.sceneState;
  }
  function F() {
    const O = J(), oe = g(), V = { ...a.assets };
    for (const Te of l ? [] : a.stickers) {
      const $e = String((Te == null ? void 0 : Te.asset_id) || "");
      $e && !V[$e] && i.has($e) && (V[$e] = { type: "comfy_image", filename: $e });
    }
    const ee = l ? a.stickers.map((Te) => re(Te) ? { ...Te, source: { kind: "file", filename: k(Te) } } : Te) : a.stickers;
    G.revision !== s.stateRevision && (G = { revision: s.stateRevision, sceneState: An({ ...a, stickers: ee, assets: V, painting: null }) }), l && z(G.sceneState);
    const K = $s(G.sceneState, r.frame), Y = ce ? B() : null, j = (Te) => {
      if (l && !Te.visible) return null;
      if (ce && pe(Te)) return Y;
      const $e = ke(Te);
      return $e ? { media: $e, revision: _e($e) } : null;
    }, M = E(), ie = [...M.sky, ...Sg(G.sceneState, r.frame, a.stickers, { media: j, paintLayers: oe, evaluated: K })], le = O && (O === d || O === c) ? d.dataset.panoSrc : O;
    let we = Se(O) ? { media: O, revision: _e(O), coverage: p(), source: le } : null;
    v(r.frame) || (we = zm(f()));
    const N = ge(), ue = t_(P(), N, he());
    ue.mode !== r.spaceMode && W(), u(ue);
    const Me = N ? ne(G.sceneState, K, j, M) : null, Ee = de() ? { ...Me, ...T(Me) } : null;
    return { background: we, layers: ie, space: Ee, content: Me };
  }
  function z(O) {
    const oe = new Map(a.stickers.map((V) => [V.id, V.clip]));
    O.scene.clip = { ...a.scene.clip };
    for (const V of O.stickers) {
      const ee = oe.get(V.id);
      ee && (V.clip = { ...ee });
    }
  }
  function ne(O, oe, V, ee) {
    const K = Z(), Y = Dd(K, oe.scene), j = Y != null && Y.url ? n.sceneBox(Y.url) : null, M = j && La(Y.kind, j), ie = I(), le = dg(ie, O, oe), we = le != null && le.url ? n.sceneBox(le.url) : null, N = we ? [{ box: La(le.kind, we), value: le.value }] : [], ue = wg(O, r.frame, a.stickers, { media: V, evaluated: oe });
    for (const { request: Ee, value: Te } of ee.items) {
      const $e = Ee != null && Ee.url ? n.sceneBox(Ee.url) : null;
      $e && N.push({ box: La(Ee.kind, $e), value: Te });
    }
    const Me = _u(l_(oe, M, [...ue, ...ee.stickers], N));
    return {
      evaluated: oe,
      sceneUrls: K ? K.urls.filter(Boolean) : [],
      scene: Y,
      stickerUrls: fg(ie, O),
      sticker: le,
      stickers: ue,
      upstreamStickers: ee.stickers,
      upstreamItems: ee.items,
      sphere: Me
    };
  }
  function T(O) {
    var V;
    const oe = ((V = O.sphere) == null ? void 0 : V.radius) || pr;
    return {
      gizmo: _() ? be() : $(O.evaluated),
      grid: r.showGrid && !r.fullscreen ? __(oe) : null,
      lines: y() ? X(oe) : []
    };
  }
  function $(O) {
    const oe = U(), V = Ut(oe) ? Wr(oe, r.frame) : O.stickers.find((ee) => ee.id === (oe == null ? void 0 : oe.id));
    return !b(oe) || !(V != null && V.active) ? null : { mode: r.gizmoMode, transform: bu(V) };
  }
  function _() {
    return y() && r.selectedId === Cd;
  }
  let D = { revision: -1, span: -1, segments: [] };
  function X(O) {
    const oe = se();
    (D.revision !== s.stateRevision || D.span !== oe) && (D = { revision: s.stateRevision, span: oe, segments: k_(x_(a, oe)) });
    const { segments: V } = D, ee = V.length ? [{ segments: V, color: D2 }] : [];
    if (!fe()) return ee;
    const K = _() ? U0 : T2;
    return [...ee, { segments: hg(te(), h(O)), color: K }];
  }
  function be() {
    return !fe() || !_() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: bu({ ...te(), scale: 1 }) };
  }
  function me() {
    const { background: O, layers: oe, space: V } = S(), ee = t.width, K = t.height, Y = C({ x: 0, y: 0, w: ee, h: K });
    let j = !1;
    return !O && !oe.length && !V ? (n.clear(460551), j = n.ready) : (n.clear(), j = !!n.render({
      rect: Y,
      camera: V ? Td(A(), ee, K, V.sphere) : H(),
      background: O,
      layers: oe,
      space: V
    })), x(), (r.worldSelectedId || _() || ye()) && Q(), j;
  }
  function xe(O) {
    const { content: oe } = S();
    return !oe || !O.position ? ds(O) : cg(ds(O), O.position, R(), oe.sphere);
  }
  function q(O, oe, V, ee = null) {
    const { background: K, layers: Y, content: j } = S();
    if (!K && !Y.length && !j) return null;
    const M = j && oe.position ? j : null;
    return n.render({ rect: O, camera: xe(oe), background: K, layers: Y, space: M, owner: V, clearColor: ee });
  }
  function ve(O) {
    return n.clear(460551), !!n.renderUnwrap({ rect: C(O), ...S() });
  }
  return {
    connect(O) {
      ({
        applySpaceMode: u,
        backgroundColor: f,
        backgroundCoverage: p,
        backgroundShowsAt: v,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: h,
        cameraShoots: y,
        cancelViewTransition: W,
        currentViewCamera: H,
        cutoutCamera: te,
        deviceRect: C,
        followPortSticker: B,
        frameViewDistance: R,
        getConnectedErpImage: J,
        getMediaRevisionToken: _e,
        getStickerImage: ke,
        hasSpaceContent: ge,
        isDecodedImageReady: Se,
        isExternalSticker: pe,
        isFreeSpaceView: fe,
        isSpaceView: de,
        isUploadingSticker: re,
        isWorldMenuShown: ye,
        portVideo: ce,
        sceneFiles: Z,
        selectedWorldSticker: U,
        spaceModeState: P,
        spaceOrigin: he,
        spaceViewState: A,
        stickerFiles: I,
        stickerImageKey: k,
        syncFloatingViewButtonState: x,
        timelineSpanFrames: se,
        updateSelectionMenu: Q,
        upstreamViewInput: E,
        worldStickerEditable: b
      } = O);
    },
    editorViewInput: S,
    endEditorViewFrame: L,
    editorViewSceneState: w,
    isCameraSelected: _,
    renderEditorView: me,
    shotViewCamera: xe,
    drawEditorViewShot: q,
    renderEditorViewUnwrap: ve
  };
}
function aC(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map();
  const v = /* @__PURE__ */ new Map(), g = () => u({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA });
  function h(Q) {
    if (!Q) return null;
    let E = v.get(Q);
    return E || (E = new Image(), E.onload = g, E.onerror = g, E.src = Q, v.set(Q, E)), E;
  }
  function y({ sceneState: Q, ui: E }) {
    return [
      ...Q.stickers.filter((b) => b.source.kind !== "port").map((b) => n(hl(b.source))),
      i(Tn(E, Di)[0] || null),
      ...Q.painting.raster_objects.map((b) => b.rasterDataUrl)
    ].filter(Boolean);
  }
  function W() {
    return a && (up(o, "scene") === Xg || !!H());
  }
  function H() {
    const Q = a && Ot(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, E = Array.isArray(Q) ? Q : null;
    if (f.list !== E) {
      f.entries.forEach(x), f = { list: E, entries: E ? Jg(E).map((G) => ({ layer: G })) : [], fps: null };
      const b = new Set(f.entries.flatMap((G) => y(G.layer)));
      for (const G of [...v.keys()]) b.has(G) || v.delete(G);
    }
    return E && f.fps !== s.timeline.fps && te(), E && f.entries;
  }
  function te() {
    if (!f.list) return;
    const Q = Qg(f.entries.map((E) => E.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((E, b) => {
      E.working = Q[b];
    }), f.fps = s.timeline.fps, p = yp(Q);
  }
  function C() {
    if (!f.list) return;
    const Q = f.entries.map((b) => b.working), E = gw(s.upstream, f.entries.map((b) => b.layer), Q, p, f.fps);
    E !== s.upstream && (s.upstream = E, p = yp(Q));
  }
  function B() {
    const Q = H();
    Q && (s.upstream = xw(s.upstream, Q.map((E) => E.layer)));
  }
  function R(Q) {
    C();
    const E = Q(s.upstream);
    return E === s.upstream ? !1 : (s.upstream = E, te(), !0);
  }
  function J(Q) {
    const E = Q.map((b) => b.origin);
    return R((b) => bw(b, E, s.timeline.fps));
  }
  function _e(Q, E = null) {
    return R((b) => Sw(b, Q, E));
  }
  function ke(Q) {
    return R((E) => kw(E, Q));
  }
  function ge(Q) {
    return R((E) => ww(E, Q));
  }
  function Se() {
    return (H() ?? []).flatMap((Q) => Q.working.sceneState.stickers);
  }
  function pe(Q) {
    const E = f.entries.find((b) => {
      var G;
      return ((G = b.working) == null ? void 0 : G.key) === Q.origin.layer;
    });
    return E ? h(i(Tn(E.layer.ui, Di)[0] || null)) : null;
  }
  function fe(Q = null) {
    const E = H();
    if (!E) return null;
    const [b] = t.uiValue(o, "pano_upstream_frames") || t.uiValue(o, "pano_timeline_frames") || [], G = E.map((S) => S.working), m = (S) => Ns((L) => Tn(E[S].layer.ui, L));
    return {
      frames: Number(b) > 0 ? Number(b) : 0,
      ends: n0(G, s.upstream, p, m, s.timeline.fps, Q)
    };
  }
  function de(Q) {
    const E = f.entries.find((b) => {
      var G;
      return ((G = b.working) == null ? void 0 : G.key) === Q.origin.layer;
    });
    return E ? Ns((b) => Tn(E.layer.ui, b)) : null;
  }
  function re() {
    return (H() ?? []).map(({ layer: Q, working: E }) => {
      const b = Cs(E.key);
      return {
        key: E.key,
        sceneState: E.sceneState,
        editable: b,
        record: b ? s.upstream.find((G) => G.layer === E.key) ?? null : null,
        scene: Tn(Q.ui, "pano_scene_files").length > 0,
        deleted: b ? _w(s.upstream, E) : 0
      };
    });
  }
  function ye(Q) {
    for (const { working: E } of H() ?? []) {
      const { key: b, sceneState: G } = E, m = Cs(b);
      if (Q === Mu(b, "scene")) return { editable: m, part: "scene", owner: G.scene, sceneState: G };
      if (Q === Mu(b, "painting")) return { editable: m, part: "painting", owner: null, sceneState: G };
      const S = G.stickers.find((L) => L.id === Q);
      if (S) return { editable: m, part: "sticker", owner: S, sceneState: G };
    }
    return null;
  }
  function ce() {
    if (!a) return "";
    const Q = H();
    if (pw(up(o, "scene"), Q)) return "Run the workflow to show the upstream scene.";
    if (!Q) return "";
    const E = t.uiList(o, "pano_sticker_warnings");
    return String(E.find((b) => String(b).startsWith(fw)) ?? "");
  }
  function Z(Q, E, b) {
    const { ui: G } = Q.layer, m = s.timeline.fps, S = Tn(G, W0)[0], L = Tn(G, K0).map(i).filter(Boolean), w = i(Tn(G, G0)[0] || null), F = S && typeof S == "object" ? L.length ? { frames: L, meta: S } : w ? { src: w, meta: S } : null : null, z = h(i(Tn(G, Di)[0] || null)), ne = F ? wd(E.clip, b, m, F.meta) : null;
    let T = z;
    if (F != null && F.frames)
      Q.frames || (Q.frames = Nd({
        createImage: ($, _) => {
          const D = new Image();
          return D.onload = _, D.onerror = _, D.src = $, D;
        },
        onLoad: g
      })), T = Q.frames.picture(F.frames, ne, F.meta, z);
    else if (F != null && F.src) {
      const $ = U(Q);
      $.follow({ src: F.src, time: ne, playing: d.advancing, fps: m }), T = $.picture(Q.still, z);
    }
    return T ? { media: T, revision: c(T), source: Md(F, z) } : null;
  }
  function U(Q) {
    if (Q.follower) return Q.follower;
    const E = Vs(document, "editor.upstream-port-video");
    E.playsInline = !0, E.preload = "auto";
    const b = on({ label: "editor.upstream-port-still" });
    return b.__panoFrameIdx = 0, Q.video = E, Q.still = b, Q.follower = Kd({
      video: E,
      onCapture: () => {
        var S;
        const G = Number(E.videoWidth || 0), m = Number(E.videoHeight || 0);
        G < 1 || m < 1 || (b.width = G, b.height = m, (S = b.getContext("2d")) == null || S.drawImage(E, 0, 0), b.__panoFrameIdx += 1, g());
      },
      onChange: g
    }), Q.follower;
  }
  function P(Q, E, b) {
    if (E.source.kind === "port") return Z(Q, E, b);
    const G = h(n(hl(E.source)));
    return G ? { media: G, revision: c(G) } : null;
  }
  function he(Q) {
    var z;
    const { sceneState: E } = Q.working, { painting: b } = E, G = b.paint.strokes.length + b.mask.strokes.length;
    if (!E.painting_visible || !G && !b.raster_objects.length) return [];
    const m = l(), S = `${m.width}x${m.height}`;
    Q.paintSize !== S && (I(Q), Q.paintSize = S, Q.paintEngine = G ? Wl(m) : null, (z = Q.paintEngine) == null || z.rebuildCommitted({ painting: b }), Q.rasters = /* @__PURE__ */ new Map());
    const L = Q.paintEngine, w = (L == null ? void 0 : L.getMaskDisplayCanvas()) || null, F = [];
    for (const ne of hw(E, L ? L.getAllGroupIds() : [], !!w)) {
      const T = ne.kind === "group" ? L == null ? void 0 : L.getGroupDisplayCanvas(ne.id) : ne.kind === "mask" ? w : A(Q, ne.item, m);
      T && F.push({ id: `${ne.kind}:${ne.id}`, media: T, revision: S, opacity: 1, zIndex: ne.zIndex });
    }
    return F;
  }
  function A(Q, E, { width: b, height: G }) {
    if (Q.rasters.has(E.id)) return Q.rasters.get(E.id);
    const m = h(E.rasterDataUrl);
    if (!m.complete || !m.naturalWidth) return null;
    const S = on({ label: "editor.upstream-raster-erp", width: b, height: G }), L = S.getContext("2d");
    return L ? (B0(L, m, E, b, G), Q.rasters.set(E.id, S), S) : null;
  }
  function I(Q) {
    var E;
    (E = Q.rasters) == null || E.forEach((b) => Ss(b)), Q.rasters = null, Q.paintEngine = null, Q.paintSize = null;
  }
  function k() {
    const Q = H() ?? [], E = { sky: [], stickers: [], items: [] }, b = r.frame;
    return Q.forEach((G) => {
      const m = Mw(G.working, G.working.key, b, {
        media: (S) => P(G, S, b),
        paintLayers: he(G),
        source: i
      });
      E.sky.push(...m.sky), E.stickers.push(...m.stickers), E.items.push(...m.items);
    }), E;
  }
  function x(Q) {
    var E;
    (E = Q.follower) == null || E.dispose(), Q.still && Ss(Q.still), I(Q);
  }
  function se() {
    f.entries.forEach(x), f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map(), v.clear();
  }
  return {
    connect(Q) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = Q);
    },
    upstreamEntries: H,
    upstreamLinked: W,
    upstreamNotice: ce,
    upstreamOutput: fe,
    upstreamPortMeta: de,
    upstreamViewInput: k,
    rebuildUpstreamWorking: te,
    syncUpstreamEdits: C,
    pruneUpstreamRecords: B,
    deleteUpstreamStickers: J,
    revertUpstreamSticker: _e,
    revertUpstreamLayer: ke,
    restoreUpstreamDeleted: ge,
    upstreamStickers: Se,
    upstreamStickerImage: pe,
    upstreamTimelineLayers: re,
    upstreamRow: ye,
    disposeUpstream: se
  };
}
const Hu = "camera_preview";
function lC(e) {
  return e === Hu ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function cC(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function sy(e, t = !1) {
  const r = Oe(zi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function uC(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: s,
    shotEditor: a,
    studio: l,
    uiState: c
  } = e;
  let d, u, f, p, v = null, g = !1, h = !1;
  function y() {
    g && (g = !1, o.releaseSplats(Hu));
  }
  function W() {
    v = null, h = !1, y();
  }
  function H(_e) {
    if (!n || !_e) return !1;
    const ke = n.closest(".pano-camera-preview");
    if (!ke) return !1;
    const ge = Math.round(Number(ke.clientWidth || n.clientWidth || 0)), Se = Math.round(Number(ke.clientHeight || n.clientHeight || 0));
    return Math.abs(ge - Number(_e.width || 0)) <= 1 && Math.abs(Se - Number(_e.height || 0)) <= 1;
  }
  function te(_e, ke) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, W();
      return;
    }
    const ge = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !ge || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = ge ? "Preview unavailable" : "Add Frame to preview", W();
      return;
    }
    const Se = sy(ge, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = Se.width, c.cameraPreview.height = Se.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const pe = window.devicePixelRatio || 1, fe = Math.max(1, Se.width * pe), de = Math.max(1, Se.height * pe), re = Math.min(1, t.width / fe, t.height / de), ye = { width: Math.max(1, Math.floor(fe * re)), height: Math.max(1, Math.floor(de * re)) }, ce = !v || v.width !== ye.width || v.height !== ye.height || cC(ke);
    if (_e && ce) {
      g = !0;
      const U = u({ x: 0, y: t.height - ye.height, w: ye.width, h: ye.height }, ge, Hu);
      v = U ? ye : null, U && J(U);
    }
    if (!v) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = p() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const Z = H(Se);
    c.cameraPreview.ready = !0, c.cameraPreview.label = Z ? "" : "Loading preview", c.cameraPreview.settled = Z && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function C() {
    v = null, h = !1;
  }
  let B = 0, R = !1;
  function J(_e) {
    const ke = ++B;
    createImageBitmap(_e.canvas, _e.x, _e.y, _e.width, _e.height).then((ge) => {
      var Se;
      if (ke !== B || !s.running) {
        ge.close();
        return;
      }
      (Se = r.getContext("bitmaprenderer")) == null || Se.transferFromImageBitmap(ge);
    }).catch((ge) => {
      ke !== B || !s.running || (h = !0, v = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !R && (R = !0, console.error("[PanoramaStickers] camera preview frame failed", ge)));
    });
  }
  return {
    connect(_e) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: p
      } = _e);
    },
    drawCutoutOutputPreview: te,
    forgetCameraPreviewFrame: C
  };
}
function dC(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: s,
    runtime: a,
    shotEditor: l,
    studio: c,
    type: d
  } = e;
  let u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q, E, b, G, m;
  function S(O) {
    const oe = r.width, V = r.height, ee = J();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, oe, V), x(), O && (a.backgroundDirty = !E(ee)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let Y = 0; Y <= 16; Y += 1) {
        const j = ee.x + ee.w * Y / 16;
        n.beginPath(), n.moveTo(j, ee.y), n.lineTo(j, ee.y + ee.h), n.stroke();
      }
      for (let Y = 0; Y <= 8; Y += 1) {
        const j = ee.y + ee.h * Y / 8;
        n.beginPath(), n.moveTo(ee.x, j), n.lineTo(ee.x + ee.w, j), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(ee.x, ee.y + ee.h / 2), n.lineTo(ee.x + ee.w, ee.y + ee.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const K = ee.y + ee.h * 0.57;
      n.fillText("Left", ee.x + ee.w * 0.25, K), n.fillText("Front", ee.x + ee.w * 0.5, K), n.fillText("Right", ee.x + ee.w * 0.75, K), n.fillText("Back", ee.x + 38, K), n.fillText("Back", ee.x + ee.w - 38, K);
    }
  }
  function L(O, oe, V = 1) {
    let ee = !1;
    n.strokeStyle = oe, n.lineWidth = V, n.beginPath();
    for (const K of O) {
      const Y = he(K);
      if (!Y) {
        ee = !1;
        continue;
      }
      ee ? n.lineTo(Y.x, Y.y) : (n.moveTo(Y.x, Y.y), ee = !0);
    }
    n.stroke();
  }
  function w(O) {
    const oe = r.width, V = r.height;
    if (n.clearRect(0, 0, oe, V), x(), O && (a.backgroundDirty = !Q()), i.showGrid && !i.fullscreen && g().space)
      F();
    else if (i.showGrid && !i.fullscreen) {
      for (let K = -180; K <= 180; K += 15) {
        const Y = [];
        for (let j = -89; j <= 89; j += 4) Y.push(Rn(K, j));
        L(Y, "#3f3f46", K % 90 === 0 ? 1.3 : 1);
      }
      for (let K = -75; K <= 75; K += 15) {
        const Y = [];
        for (let j = -180; j <= 180; j += 4) Y.push(Rn(j, K));
        L(Y, K === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", K === 0 ? 1.5 : 1);
      }
      const ee = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", ee.forEach((K) => {
        const Y = he(K.dir);
        Y && n.fillText(K.name, Y.x, Y.y + 24);
      });
    }
  }
  function F() {
    const O = Td(m(), r.width, r.height, f()), oe = Ps(O, [0, 0, 0], r.width, r.height);
    oe && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", oe.x, oe.y - 12));
  }
  function z(O, oe) {
    const V = P(O), ee = Rn(Number(V.yaw_deg || 0), Number(V.pitch_deg || 0)), K = i.mode === "unwrap" ? A(ee) : null, Y = K ? K.x : null, j = i.mode === "pano" ? 28 : 20, M = [
      b(O, 0, j, Y),
      b(O, 1, j, Y),
      b(O, 2, j, Y),
      b(O, 3, j, Y)
    ];
    qd(n, M, { selected: oe });
  }
  function ne(O, oe = []) {
    if (!(!O || !Array.isArray(oe) || oe.length < 4)) {
      O.beginPath(), O.moveTo(oe[0].x, oe[0].y);
      for (let V = 1; V < 4; V += 1) O.lineTo(oe[V].x, oe[V].y);
      O.closePath();
    }
  }
  function T(O, oe, V) {
    const ee = Array.isArray(O == null ? void 0 : O.corners) ? O.corners : [];
    if (ee.length < 4) return;
    const K = Oe(Number((O == null ? void 0 : O.visibilityAlpha) ?? 1), 0, 1);
    if (K <= 0.01) return;
    const Y = n.globalAlpha;
    n.globalAlpha = Y * K;
    const j = V ? "rgba(255, 116, 116, 0.96)" : oe ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", M = V ? "rgba(255, 89, 89, 0.08)" : oe ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ie = oe ? 3.2 : 2.6;
    ne(n, ee), n.fillStyle = M, n.fill(), n.strokeStyle = j, n.lineWidth = ie, n.stroke(), n.save(), n.strokeStyle = j, n.lineWidth = oe ? 3.2 : 2.6, n.lineCap = "round";
    const le = Array.isArray(O == null ? void 0 : O.edgeMidpoints) && O.edgeMidpoints.length >= 4 ? O.edgeMidpoints : [
      { edge: "top", x: (ee[0].x + ee[1].x) * 0.5, y: (ee[0].y + ee[1].y) * 0.5 },
      { edge: "right", x: (ee[1].x + ee[2].x) * 0.5, y: (ee[1].y + ee[2].y) * 0.5 },
      { edge: "bottom", x: (ee[2].x + ee[3].x) * 0.5, y: (ee[2].y + ee[3].y) * 0.5 },
      { edge: "left", x: (ee[3].x + ee[0].x) * 0.5, y: (ee[3].y + ee[0].y) * 0.5 }
    ], we = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = oe ? 12 : 9;
    le.forEach((ue) => {
      const Ee = le.find((Ce) => (Ce == null ? void 0 : Ce.edge) === we[ue == null ? void 0 : ue.edge]) || {
        x: (ee[0].x + ee[1].x + ee[2].x + ee[3].x) * 0.25,
        y: (ee[0].y + ee[1].y + ee[2].y + ee[3].y) * 0.25
      }, Te = Ee.x - ue.x, $e = Ee.y - ue.y, ze = Math.hypot(Te, $e) || 1;
      n.beginPath(), n.moveTo(ue.x, ue.y), n.lineTo(ue.x + Te / ze * N, ue.y + $e / ze * N), n.stroke();
    }), n.restore(), n.globalAlpha = Y;
  }
  function $(O, oe, V, ee) {
    const K = Oe(Number((oe == null ? void 0 : oe.visibilityAlpha) ?? 1), 0, 1);
    if (K <= 0.01) return;
    if (ye(O)) {
      T(oe, V, ee);
      return;
    }
    if (ce(O)) {
      const j = n.globalAlpha;
      n.globalAlpha = j * R(O) * K, i.mode === "frame" ? (n.strokeStyle = V ? "rgba(250, 250, 250, 0.9)" : ee ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = V ? 2 : 1, ne(n, oe.corners), n.stroke()) : z(O, V), n.globalAlpha = j;
      return;
    }
    const Y = n.globalAlpha;
    n.globalAlpha = Y * K, n.fillStyle = V ? "rgba(0, 112, 243, 0.24)" : ee ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ne(n, oe.corners), n.fill(), n.strokeStyle = V ? "rgba(255, 255, 255, 1)" : ee ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = V ? 2.8 : 1.9, ne(n, oe.corners), n.stroke(), n.globalAlpha = Y;
  }
  function _(O, oe, V) {
    if (ce(O)) {
      b0(n, oe, { accent: V });
      return;
    }
    const ee = !(ye(O) && ke());
    n.fillStyle = V, ee && oe.corners.forEach((K) => {
      n.beginPath(), n.arc(K.x, K.y, 6.5, 0, Math.PI * 2), n.fill();
    }), ee && ye(O) && (n.strokeStyle = V, n.lineCap = "round", n.lineWidth = 4, oe.edgeMidpoints.forEach((K) => {
      var N, ue, Me, Ee;
      const Y = (((N = K.b) == null ? void 0 : N.x) ?? K.x) - (((ue = K.a) == null ? void 0 : ue.x) ?? K.x), j = (((Me = K.b) == null ? void 0 : Me.y) ?? K.y) - (((Ee = K.a) == null ? void 0 : Ee.y) ?? K.y), M = Math.hypot(Y, j) || 1, ie = Y / M, le = j / M, we = 10;
      n.beginPath(), n.moveTo(K.x - ie * we, K.y - le * we), n.lineTo(K.x + ie * we, K.y + le * we), n.stroke();
    }), n.lineCap = "butt"), Z(O) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(oe.rotateStemBase.x, oe.rotateStemBase.y), n.lineTo(oe.rotateHandle.x, oe.rotateHandle.y), n.stroke(), n.fillStyle = V, n.beginPath(), n.arc(oe.rotateHandle.x, oe.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function D() {
    var Y;
    const O = i.mode === "frame" ? [] : B(), oe = O.length > 1, V = l ? y() : te(), ee = V.map((j) => `${String((j == null ? void 0 : j.id) || "")}:${ye(j) ? "frame" : Number((j == null ? void 0 : j.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== V || i._sortedItemsCache.orderKey !== ee) && (i._sortedItemsCache = {
      src: V,
      orderKey: ee,
      sorted: [...V]
    });
    const K = [...O.filter(Ut), ...i._sortedItemsCache.sorted];
    for (const j of K) {
      const M = i.mode !== "frame" && !oe && fe(j);
      if (i.mode === "frame" && !M) continue;
      const ie = ce(j), le = ye(j), we = pe(j);
      if (!ie && !le || re(j) && !G(j)) continue;
      const N = U(j);
      if (d !== "stickers" && !N.visible)
        continue;
      const ue = Oe(Number((N == null ? void 0 : N.visibilityAlpha) ?? 1), 0, 1);
      if (ue <= 0.01) continue;
      const Me = le && l && i.mode === "pano" ? Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Me, $(j, N, M, we), M && N.visible) {
        const Ee = we ? "#ff4d4f" : ie && ge(j) ? "#f59e0b" : "#0070f3", Te = n.globalAlpha;
        n.globalAlpha = Te * ue, _(j, N, Ee), n.globalAlpha = Te;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const j = i.cutoutPanoFrameVisual, M = Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= M, T(j.geom, j.selected, j.locked), j.selected && _(
        j.item,
        j.geom,
        j.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (oe) {
      const j = C(O);
      if (j != null && j.visible) {
        const M = u(O) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(j.corners[0].x, j.corners[0].y);
        for (let ie = 1; ie < j.corners.length; ie += 1) n.lineTo(j.corners[ie].x, j.corners[ie].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = M, j.corners.forEach((ie) => {
          n.beginPath(), n.arc(ie.x, ie.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      O.forEach((j) => {
        if (!Z(j) && !de(j)) return;
        const M = U(j);
        if (!(M != null && M.visible)) return;
        const ie = pe(j) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(M.corners[0].x, M.corners[0].y);
        for (let le = 1; le < M.corners.length; le += 1) n.lineTo(M.corners[le].x, M.corners[le].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ie, M.corners.forEach((le) => {
          n.beginPath(), n.arc(le.x, le.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((Y = i.interaction) == null ? void 0 : Y.kind) === "marquee_select") {
      const j = se(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(j.x0, j.y0, j.x1 - j.x0, j.y1 - j.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function X(O) {
    const oe = h(), V = W(oe);
    if (!oe || !V)
      return n.clearRect(0, 0, r.width, r.height), O && o.clear(657930), !1;
    const ee = { x: V.x, y: V.y, w: V.w, h: V.h }, { rect: K, shot: Y } = yg(oe, V, { width: r.width, height: r.height }), j = be(ee);
    if (n.clearRect(0, 0, r.width, r.height), O) {
      o.clear(657930);
      const M = p(K), ie = !!v(M, Y, void 0, 657930);
      ie || o.clear(1118481, M), a.backgroundDirty = !ie;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(ee.x, ee.y, ee.w, ee.h, j), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = U0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(ee.x + 1, ee.y + 1, ee.w - 2, ee.h - 2, Math.max(0, j - 1)), n.stroke(), n.restore(), !0;
  }
  function be(O) {
    const oe = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * oe, Number((O == null ? void 0 : O.w) || 0) * 0.5, Number((O == null ? void 0 : O.h) || 0) * 0.5);
  }
  function me() {
    var ie, le;
    if (((ie = i.interaction) == null ? void 0 : ie.kind) !== "paint_lasso_fill") return;
    const O = i.interaction.stroke, oe = (le = O == null ? void 0 : O.geometry) == null ? void 0 : le.points;
    let V;
    if (i.mode === "frame") {
      const we = h(), N = H(we);
      V = I(oe, we, N);
    } else
      V = k(oe);
    if (!Array.isArray(V) || V.length < 3) return;
    const ee = String((O == null ? void 0 : O.layerKind) || "") === "mask", K = (O == null ? void 0 : O.color) || { r: 1, g: 0.25, b: 0.25 }, Y = Math.round(Number(K.r || 0) * 255), j = Math.round(Number(K.g || 0) * 255), M = Math.round(Number(K.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(V[0].x || 0), Number(V[0].y || 0));
    for (let we = 1; we < V.length; we++) n.lineTo(Number(V[we].x || 0), Number(V[we].y || 0));
    n.closePath(), ee ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${Y},${j},${M},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function xe() {
    const O = i.frameRollOverlayVisual, oe = Oe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(O != null && O.shot) || oe <= 1e-4) return;
    const V = H(O.shot);
    if (!V) return;
    const ee = { x: V.x + V.w * 0.5, y: V.y + V.h * 0.5 }, K = Number(O.shot.roll_deg ?? O.shot.rot_deg ?? 0) * Nr, Y = Math.hypot(V.w, V.h) * 0.55, j = Math.cos(K) * Y, M = Math.sin(K) * Y;
    n.save(), n.globalAlpha *= oe, n.beginPath(), n.rect(V.x, V.y, V.w, V.h), n.clip(), n.translate(ee.x, ee.y), n.rotate(K);
    const ie = Math.max(12, Math.min(V.w, V.h) / 6);
    n.beginPath();
    for (let le = -Y; le <= Y; le += ie)
      n.moveTo(le, -Y), n.lineTo(le, Y);
    for (let le = -Y; le <= Y; le += ie)
      n.moveTo(-Y, le), n.lineTo(Y, le);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(ee.x - j, ee.y - M), n.lineTo(ee.x + j, ee.y + M), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function q() {
    return !l || !h() || t && Se() || c && !_e() ? 0 : V2;
  }
  function ve() {
    const O = Oe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (O <= 1e-4 || !l || i.mode !== "pano") return;
    const oe = h(), V = oe ? U(oe) : null, ee = Array.isArray(V == null ? void 0 : V.corners) && V.corners.length >= 4 ? V.corners.map((j) => ({ x: Number(j.x || 0), y: Number(j.y || 0) })) : null;
    V != null && V.visible && ee && (i.cutoutPanoDimCorners = ee), oe && (V != null && V.visible) && ee && (i.cutoutPanoFrameVisual = {
      item: oe,
      geom: V,
      selected: fe(oe),
      locked: pe(oe)
    });
    const K = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, Y = V != null && V.visible ? ee : K ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${O})`, n.beginPath(), n.rect(0, 0, r.width, r.height), Y.length >= 4) {
      n.moveTo(Y[0].x, Y[0].y);
      for (let j = 1; j < 4; j += 1) n.lineTo(Y[j].x, Y[j].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(O) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: p,
        drawEditorViewShot: v,
        editorViewInput: g,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: W,
        getFrameViewRect: H,
        getList: te,
        getMultiSelectionGeom: C,
        getSelectedItems: B,
        getStickerDisplayAlpha: R,
        getUnwrapRect: J,
        isCameraSelected: _e,
        isErpCamera: ke,
        isExternalSticker: ge,
        isFreeSpaceView: Se,
        isItemLocked: pe,
        isItemSelected: fe,
        isRasterObjectItem: de,
        isSceneSticker: re,
        isShotItem: ye,
        isStickerItem: ce,
        isStrokeGroupItem: Z,
        objectGeom: U,
        poseOf: P,
        projectDir: he,
        projectDirUnwrap: A,
        projectErpLassoPointsToFrameRect: I,
        projectLassoPointsToCurrentView: k,
        rebuildPaintEngineIfNeeded: x,
        rectFromPoints: se,
        renderEditorView: Q,
        renderEditorViewUnwrap: E,
        sampleStickerEdge: b,
        sceneStickerShown: G,
        spaceViewState: m
      } = O);
    },
    drawGridUnwrap: S,
    drawGridPano: w,
    drawObjects: D,
    drawFrameViewBackground: X,
    drawLassoOutlineOverlay: me,
    drawFrameRollOverlay: xe,
    getCutoutPanoDimTarget: q,
    drawCutoutPanoPassepartout: ve
  };
}
function fC(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    readOnly: a,
    runtime: l,
    scheduler: c,
    shotEditor: d,
    stageWrap: u,
    state: f,
    timeline: p,
    type: v,
    uiState: g,
    viewController: h
  } = e;
  let y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q = () => {
  };
  function E(q = /* @__PURE__ */ new Set()) {
    ke();
    const ve = l.backgroundDirty;
    d && (Z(), W(ve, q)), i.mode === "frame" ? (l.frameSafeRect = re(), C(ve)) : i.mode === "unwrap" ? R(ve) : B(ve), H(), _e(), A(), J(), te(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && x(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const O = fe();
    g.stageStatus = O.status, g.stageStatusDetail = O.detail, g.stageNotice = se(), O.status === ar ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", O.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function b(q = i.interaction) {
    if (v !== "stickers" || i.mode !== "pano") return !1;
    const ve = String((q == null ? void 0 : q.kind) || "");
    return ve === "move" || ve === "scale" || ve === "scale_x" || ve === "scale_y" || ve === "rotate" ? !0 : ve === "move_multi" ? Array.isArray(q == null ? void 0 : q.stickerSnapshots) && q.stickerSnapshots.length > 0 : !1;
  }
  function G() {
    return !!i.interaction || !!p.drag;
  }
  function m() {
    l.nodePreviewPending = !1;
    const q = Wn(s);
    q.liveState = f, q.liveStateVersion += 1, pe();
  }
  function S(q = {}) {
    var j, M, ie, le, we, N, ue, Me;
    const ve = q.reason ?? ft.STATE, O = !!q.localOnly, oe = q.externalSync === !0, V = String(q.cause || ""), ee = String(((j = i.interaction) == null ? void 0 : j.kind) || "");
    (!O || ee === "view" || ee === "pan_frame" || b() || !!i.viewTransition || V === "mode" || V === "frame_view" || V === "cutout_frame") && (l.backgroundDirty = !0), O && de() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!O || V === "selection" || V === "mode" || V === "cutout_frame") && (I(), k()), G() ? l.nodePreviewPending = !0 : m(), oe && ((ie = (M = gt(s).dom) == null ? void 0 : M.requestDraw) == null || ie.call(M), (le = s.setDirtyCanvas) == null || le.call(s, !0, !1)), oe && !O && ((N = (we = s.graph) == null ? void 0 : we.setDirtyCanvas) == null || N.call(we, !0, !0), (Me = (ue = t == null ? void 0 : t.canvas) == null ? void 0 : ue.setDirty) == null || Me.call(ue, !0, !0)), c.requestDraw(ve);
  }
  function L() {
    const q = n.getBoundingClientRect(), ve = Math.max(2, Math.round(q.width)), O = Math.max(2, Math.round(q.height)), oe = window.devicePixelRatio || 1, V = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== ve || n.height !== O) && (n.width = ve, n.height = O);
    const ee = M_(q.width || ve, q.height || O, oe, window.innerWidth || q.width, window.innerHeight || q.height);
    return o.resize(ee.width, ee.height), [n.width, n.height, r.width, r.height].join("x") === V ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && w(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function w(q) {
    q(), c.wake();
  }
  function F() {
    return !!i.viewTransition || ye.held || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || G();
  }
  function z(q = performance.now(), ve = /* @__PURE__ */ new Set()) {
    var K;
    l.nodePreviewPending && !G() && m(), ve.forEach((Y) => l.reasons.add(Y)), ve.size && (l.dirty = !0), [...ve].some((Y) => Y !== ft.OVERLAY) && (l.backgroundDirty = !0), P(), l.lastTickTs > 0 ? Math.max(1e-3, (q - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = q;
    const O = i.mode === "frame" && ((K = i.interaction) == null ? void 0 : K.kind) === "roll_frame" ? i.interaction : null;
    O != null && O.shot && (i.frameRollOverlayVisual = { shot: O.shot });
    const oe = O ? 1 : 0;
    if (Math.abs(oe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = oe, i.frameRollOverlayStartTs = q), Math.abs(Number(i.frameRollOverlayAlpha || 0) - oe) > 1e-6) {
      const Y = Oe(
        (q - Number(i.frameRollOverlayStartTs || q)) / $2,
        0,
        1
      );
      i.frameRollOverlayAlpha = Xn(
        Number(i.frameRollOverlayFrom || 0),
        oe,
        Kc(Y)
      ), Y >= 1 && (i.frameRollOverlayAlpha = oe, oe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const V = Se();
    if (Math.abs(V - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = V, i.cutoutPanoDimStartTs = q), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - V) > 1e-6) {
      const Y = Oe(
        (q - Number(i.cutoutPanoDimStartTs || q)) / Wp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Xn(
        Number(i.cutoutPanoDimFrom || 0),
        V,
        Kc(Y)
      ), Y >= 1 && (i.cutoutPanoDimAlpha = V), Y >= 1 && V === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ee = d && ge() ? 1 : 0;
    if (Math.abs(ee - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ee, i.cutoutPanoFrameStartTs = q), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ee) > 1e-6) {
      const Y = Oe(
        (q - Number(i.cutoutPanoFrameStartTs || q)) / Wp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Xn(
        Number(i.cutoutPanoFrameFrom || 0),
        ee,
        Kc(Y)
      ), Y >= 1 && (i.cutoutPanoFrameAlpha = ee, ee === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const Y = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), j = Oe((q - Number(i.outputPreviewAnimStartTs || 0)) / Y, 0, 1), ie = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? H2(j) : K2(j);
      i.outputPreviewAnim = Xn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, ie), l.dirty = !0, j >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: Y, done: j } = rC(i.viewTransition, q);
      if (i.viewPosition = Y.position, i.viewYaw = Y.yaw_deg, i.viewPitch = Y.pitch_deg, i.viewFov = Y.hFOV_deg, i.viewDistance = Y.distance, j) {
        const { end: M } = i.viewTransition;
        i.viewTransition = null, M && y(M), he();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (U(q) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(q) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const Y = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), E(Y);
    }
  }
  function ne(q) {
    try {
      q();
    } catch (ve) {
      const O = String((ve == null ? void 0 : ve.stack) || (ve == null ? void 0 : ve.message) || ve || "unknown editor frame error");
      l.tickErrorSignature !== O && (l.tickErrorSignature = O, console.error("[PanoramaStickers] editor frame failed", ve)), g.stageStatus = Jn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function T(q = performance.now(), ve = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const O = $v();
    ne(() => z(q, ve)), zv(O);
  }
  function $() {
    !l.running || !L() || ne(() => {
      l.dirty = !1, E(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const _ = new ResizeObserver($);
  let D = null;
  function X() {
    D == null || D.removeEventListener("change", be), D = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), D.addEventListener("change", be);
  }
  function be() {
    X(), $();
  }
  function me() {
    Q = Vv("editor", () => {
      var q;
      return {
        type: v,
        readOnly: a,
        mode: i.mode,
        interaction: ((q = i.interaction) == null ? void 0 : q.kind) ?? null,
        timelineDrag: !!p.drag,
        playing: !!ce.playing
      };
    });
  }
  function xe() {
    Q(), l.running = !1, c.stop(), _.disconnect(), D.removeEventListener("change", be);
  }
  return {
    connect(q) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: W,
        drawCutoutPanoPassepartout: H,
        drawFrameRollOverlay: te,
        drawFrameViewBackground: C,
        drawGridPano: B,
        drawGridUnwrap: R,
        drawLassoOutlineOverlay: J,
        drawObjects: _e,
        endEditorViewFrame: ke,
        getActiveCutoutShot: ge,
        getCutoutPanoDimTarget: Se,
        getSharedLivePaintSurface: pe,
        getStageImageStatus: fe,
        isPaintCompositeInteraction: de,
        measureFrameSafeRect: re,
        moveKeys: ye,
        playback: ce,
        rebuildPaintEngineIfNeeded: Z,
        stepKeyMove: U,
        syncCutoutShot: P,
        syncFloatingViewButtonState: he,
        syncFrameRollKnob: A,
        syncLookAtFrameButtonState: I,
        syncViewToggleState: k,
        updateSelectionMenu: x,
        upstreamNotice: se
      } = q);
    },
    requestDraw: S,
    syncCanvasSize: L,
    startAnimation: w,
    editorAnimating: F,
    tick: T,
    stageResizeObserver: _,
    watchPixelRatio: X,
    sampleEditorDiagnostics: me,
    stopRenderLoop: xe
  };
}
function pC(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: s,
    paintHueHandle: a,
    previewMode: l,
    readOnly: c,
    runtime: d,
    sceneV2: u,
    shotEditor: f,
    state: p,
    studio: v,
    type: g,
    uiState: h
  } = e;
  let y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q, E, b, G, m, S, L = 0;
  function w() {
    h.toolButtons.forEach((q) => {
      const ve = q.attr === "data-tool-mode", O = q.attr === "data-paint-tool", oe = q.attr === "data-mask-tool";
      q.active = ve ? q.value === r.primaryTool : O ? q.key === r.paintTool : oe ? q.key === r.maskTool : !1, q.pressed = q.active ? "true" : q.pressed == null ? null : "false";
    });
  }
  function F() {
    if (v && ro(h.toolButtons, "value", "add-camera", { disabled: pe() }), g !== "cutout") return;
    const q = H();
    ro(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: q ? "Look At Frame" : "Add Frame",
      tip: q ? "Look at frame" : "Add frame",
      icon: q ? We.camera : We.plus_circle
    });
  }
  function z() {
    const q = MA({
      spaceView: he(),
      spaceMode: El(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, q.space);
    for (const [ve, O] of Object.entries(q.buttons)) ro(h.floatingButtons, "action", ve, O);
  }
  function ne() {
    var O;
    const q = Q0({ hasShot: !!H(), erp: re(), hidden: pe() && !W(), studio: v });
    r.mode === "frame" && q.disabled && (v ? I(H()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((oe) => {
      const V = oe.key === r.mode;
      oe.pressed = V ? "true" : "false", oe.visible = !(oe.key === "frame" && !f), oe.key === "frame" ? Object.assign(oe, q) : oe.disabled = !1;
    });
    const ve = f && r.mode === "frame" ? H() : null;
    h.frameRail.visible = !!ve, h.frameRail.disabled = c || (ve == null ? void 0 : ve.locked) === !0, h.frameRollKnob.visible = !!ve && !c && ve.locked !== !0, h.frameRollKnob.disabled = c || (ve == null ? void 0 : ve.locked) === !0, h.frameRollKnob.rollDeg = Number((ve == null ? void 0 : ve.roll_deg) ?? (ve == null ? void 0 : ve.rot_deg) ?? 0), h.frameRollKnob.displayValue = mo(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((O = r.interaction) == null ? void 0 : O.kind) === "roll_frame", h.frameRollKnob.armed = !!ve && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = ve ? Vr(ve) : "", h.frameRail.aspectChoices = ey(ve ? String(Vr(ve)) : null, { erp: v, coverage: p.coverage }), ve || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!H(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && y(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), z(), Z() ? m(r.pointerPos) : Q(r.mode === "pano" ? "grab" : "default");
  }
  function T() {
    var ve;
    const q = r.mode === "frame" ? H() : null;
    h.frameRollKnob.visible = !!q && !c && q.locked !== !0, h.frameRollKnob.rollDeg = Number((q == null ? void 0 : q.roll_deg) ?? (q == null ? void 0 : q.rot_deg) ?? 0), h.frameRollKnob.displayValue = mo(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((ve = r.interaction) == null ? void 0 : ve.kind) === "roll_frame", h.frameRollKnob.armed = !!q && r.altModifier === !0;
  }
  function $() {
    w();
    const q = _A({
      editor: r,
      swatches: nc,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: _r,
      colorsApproximatelyEqual: Il,
      rgb01ToHsv: ju,
      hsv01ToRgb: zu,
      getBrushPresetIdForTool: te,
      isActiveLassoTool: de
    });
    if (Object.assign(h.paintDock, q), G(), !q.visible) {
      i && (i.hidden = !0);
      return;
    }
    L && (clearTimeout(L), L = 0), o && (!q.colorEnabled && i && !i.hidden && (L = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, L = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", q.pickerHueColor), i.style.setProperty("--picker-sat", q.pickerSat), i.style.setProperty("--picker-val", q.pickerVal), i.style.setProperty("--picker-hue", q.pickerHue)), s && (s.style.left = q.pickerSvLeft, s.style.top = q.pickerSvTop), a && (a.style.left = q.pickerHueLeft));
  }
  function _() {
    const q = x(f && r.mode === "frame" ? H() : J());
    q && (r.panelLastValues = {
      yaw_deg: Number(q.yaw_deg || 0),
      pitch_deg: Number(q.pitch_deg || 0),
      hFOV_deg: Number(q.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(q.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(q.rot_deg || 0),
      roll_deg: Number(q.roll_deg || 0),
      aspect_id: Vr(q)
    }, D());
  }
  function D() {
    E(), b(), be();
  }
  function X() {
    const q = f && r.mode === "frame" ? H() : null;
    return [..._e(), se(), q].some((ve) => U(ve) ? fl(ve) : P(ve) && pe() && fl(p.camera));
  }
  function be() {
    if (n) return;
    p.ui_settings = p.ui_settings || {};
    const q = SA(p.ui_settings);
    if (l) {
      h.sidePanel = wA({
        coverage: p.coverage,
        uiSettings: q,
        normalizeCoverageValue: $n
      });
      return;
    }
    const ve = J(), O = f && r.mode === "frame" ? H() : null, oe = O || ve, V = O ? [O] : _e(), ee = O ? "shot" : ke();
    if (V.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), oe && ee !== "stroke") {
      const Te = x(oe);
      r.panelLastValues = {
        yaw_deg: Number(Te.yaw_deg || 0),
        pitch_deg: Number(Te.pitch_deg || 0),
        hFOV_deg: Number(Te.hFOV_deg || (ee === "image" ? 30 : 90)),
        vFOV_deg: Number(Te.vFOV_deg || (ee === "image" ? 30 : 60)),
        rot_deg: Number(Te.rot_deg || 0),
        roll_deg: Number(Te.roll_deg || 0),
        aspect_id: Vr(Te)
      }, U(oe) && (r.panelLastValues.opacity = Wr(oe, r.frame).opacity * 100);
    }
    const K = r.panelLastValues || (g === "stickers" || ee === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), Y = ee === "stroke" ? null : oe, j = se(), M = t && (ee === "shot" || ee === "frame") && fe(), ie = j ? $S(j, r.frame) : M ? { ...Y, ...RS(p.camera, r.frame), vFOV_deg: Y.vFOV_deg } : U(Y) ? r.panelLastValues : Y || K, le = j ? S(j) : !!Y && !ce(Y);
    r.panelWasEnabled = le, F();
    let we = null;
    if (O) {
      const Te = Se({ item: O, kind: "shot", label: "Frame" });
      we = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Te.label,
        currentIcon: Te.icon || null,
        items: [{
          id: String(O.id || ""),
          label: Te.label,
          icon: Te.icon || null,
          active: !0
        }]
      };
    } else if (g === "stickers" || g === "cutout") {
      const Te = [{
        id: "",
        label: g === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (g === "stickers") {
        const Ce = H();
        Ce && Te.push({ id: Ce.id, label: "Camera", icon: ge("frame"), item: Ce, kind: "frame" }), R().forEach((He, ae) => {
          var Ge, Ke;
          if (!He || U(He) && !He.visible) return;
          const Ie = u ? me(He) : ye(He) ? String(He.id || sf) : String(((Ke = (Ge = p.assets) == null ? void 0 : Ge[He.asset_id]) == null ? void 0 : Ke.name) || He.asset_id || He.id), Ae = `${ae + 1}. ${Ie}${ye(He) && A(He) ? " (hidden)" : ""}`, Fe = Se({ item: He, label: Ae, kind: "image" });
          Te.push({ id: He.id, label: Fe.label, icon: Fe.icon, item: He, kind: "image" });
        });
      } else
        C().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const He = Se(Ce);
          Te.push({ id: Ce.item.id, label: He.label, icon: He.icon, item: Ce.item, kind: Ce.kind });
        });
      const $e = (Y == null ? void 0 : Y.id) || "", ze = j ? { label: me(j), icon: We.globe } : Te.find((Ce) => Ce.id === $e) || Te[0];
      we = {
        label: "Selection",
        open: !1,
        disabled: Te.length <= 1,
        currentLabel: ze.label,
        currentIcon: ze.icon || null,
        items: Te.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === $e
        }))
      };
    }
    const N = [], ue = (Te, $e, ze, Ce, He) => {
      const ae = Oe(Number(ie[Te] || 0), ze, Ce);
      N.push({
        key: Te,
        label: $e,
        min: ze,
        max: Ce,
        step: He,
        value: ae,
        displayValue: mo(ae),
        fillPct: Oe((ae - ze) / Math.max(1e-6, Ce - ze) * 100, 0, 100),
        enabled: le && !c
      });
    }, Me = [];
    if (j) {
      for (const [Te, $e] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const ze = Yc(ie[Te]);
        ue(Te, $e, -ze, ze, 0.01);
      }
      ue("yaw_deg", "Yaw", -180, 180, 0.1), ue("pitch_deg", "Pitch", -90, 90, 0.1), ue("roll_deg", "Roll", -180, 180, 0.1), ue("scale", "Scale", H0, Yc(ie.scale), 0.01), ue("opacity", "Opacity", 0, 100, 1);
    } else if (V.length > 1)
      Me.push(`Selected objects: ${V.length}`), Me.push("Multi-selection supports z-order and delete.");
    else {
      const Te = ee === "shot" || ee === "frame";
      if (M)
        for (const [$e, ze] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = Yc(ie[$e]);
          ue($e, ze, -Ce, Ce, 0.01);
        }
      ue("yaw_deg", "Yaw", -180, 180, 0.1), ue("pitch_deg", "Pitch", -90, 90, 0.1), ue(ee === "image" || g === "stickers" && !Te ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ue("hFOV_deg", "H FOV", 1, 179, 0.1), ue("vFOV_deg", "V FOV", 1, 179, 0.1), Te && N.forEach(($e) => {
        $e.enabled = $e.enabled && NA($e.key, { erp: re() });
      }), U(Y) && !Te && N.forEach(($e) => {
        $e.enabled = $e.enabled && PA($e.key, { port: ye(Y) });
      }), u && !Te && ue("opacity", "Opacity", 0, 100, 1);
    }
    const Ee = V.length > 1 ? null : j || Y;
    h.sidePanel = FA({
      coverage: p.coverage,
      readOnly: c,
      selectionPicker: we,
      enabled: le,
      selectedKind: j ? "world" : ee,
      selectedItems: V,
      params: N,
      notes: Me,
      uiSettings: q,
      normalizeCoverageValue: $n,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: v && Ee && (Ee === j || U(Ee)) ? OA({
        layer: Ut(Ee) ? Ee.origin.layer : null,
        editable: Ut(Ee) && _l(Ee),
        locked: Ee.locked === !0,
        readOnly: c,
        placement: Ee.placement,
        override: Ut(Ee) ? r0(p.upstream, Ee.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: Ut(Ee) ? null : k(Ee)
      }) : null
    });
  }
  function me(q) {
    const ve = eg(q);
    return Ut(q) ? `${af(q.origin.layer)} · ${ve}` : ve;
  }
  function xe() {
    const { canUndo: q, canRedo: ve } = B();
    ro(h.toolButtons, "value", "undo", { disabled: !q }), ro(h.toolButtons, "value", "redo", { disabled: !ve });
  }
  return {
    connect(q) {
      ({
        cameraPreviewShown: y,
        cameraShoots: W,
        getActiveCutoutShot: H,
        getBrushPresetIdForTool: te,
        getCutoutInspectorItems: C,
        getHistoryCapabilities: B,
        getList: R,
        getSelected: J,
        getSelectedItems: _e,
        getSelectedKind: ke,
        getSelectionItemIcon: ge,
        getSelectionItemLabelData: Se,
        hasCamera: pe,
        hasSpaceContent: fe,
        isActiveLassoTool: de,
        isErpCamera: re,
        isExternalSticker: ye,
        isItemLocked: ce,
        isPaintCursorEnabled: Z,
        isSceneSticker: U,
        isShotItem: P,
        isSpaceView: he,
        isStickerHidden: A,
        leaveFrameView: I,
        portHandoffLanes: k,
        poseOf: x,
        selectedWorldSticker: se,
        setCanvasCursor: Q,
        syncCutoutShot: E,
        syncTimeline: b,
        syncVideoTransportVisibility: G,
        updateCursor: m,
        worldStickerEditable: S
      } = q);
    },
    syncLookAtFrameButtonState: F,
    syncFloatingViewButtonState: z,
    syncViewToggleState: ne,
    syncFrameRollKnob: T,
    syncPaintUi: $,
    syncSidePanelControls: _,
    updateSidePanel: D,
    inspectorTimed: X,
    syncSidePanelModel: be,
    syncUndoRedoButtons: xe
  };
}
function hC(e) {
  const {
    editor: t,
    node: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    stateV2: s,
    studio: a,
    timeline: l,
    timelinePlayhead: c,
    uiState: d,
    videoEl: u,
    videoTimelineFps: f
  } = e;
  let p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z;
  function U() {
    var oe;
    if (!s || n) return;
    const q = ((oe = l.drag) == null ? void 0 : oe.limit) ?? he();
    !l.drag && H.frame > q - 1 && H.seek(q - 1);
    const ve = l.selection, O = ve && G(ve.owner);
    if (ve) {
      const V = O ? S(ve) : [], ee = L(ve.owner);
      ve.frames = ve.frames.filter((K) => K + ee < q && V.some((Y) => O[Y].keyframes.some((j) => j.frame === K))), ve.frames.length || (l.selection = null);
    }
    d.timeline = $A(o, {
      span: q,
      portBarEnd: b,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? P(),
      openRows: l.openRows,
      audio: ne() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || fs(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!fo(r).scene && !de(),
      upstream: Z(),
      background: k() ? { end: b(o.background) } : null
    }), d.easing = l.selection && F(l.selection.owner) ? zA(O, S(l.selection), l.selection.frames, L(l.selection.owner)) : null;
  }
  function P() {
    return Um(o, { camera: a });
  }
  function he(q = null) {
    var ve;
    return Pd(o, {
      bg: A(),
      port: v(),
      sceneItems: de() ? 0 : ((ve = J()) == null ? void 0 : ve.urls.length) ?? 0,
      upstream: re(q),
      openClip: q,
      camera: a
    });
  }
  function A() {
    return fe() ? null : I() ?? (fo(r).bg_media && !fs(r, ["bg_media"]) ? { frames: 1 } : null);
  }
  function I() {
    const q = d.videoTransport;
    return q.ready && q.frameCount > 0 ? { video: !!fe() || fs(r, ["bg_media"]), frames: q.frameCount, duration: Number(q.duration || 0) } : null;
  }
  function k() {
    return i && !!fo(r).bg_media && !fe();
  }
  function x() {
    const q = fe();
    return q ? q.clip && Vm(q.clip.clip, q.clip.fps, o.timeline.fps) : k() ? o.background.clip : null;
  }
  function se() {
    const q = x();
    return q ? $m(q) : null;
  }
  function Q(q) {
    const ve = x();
    if (!ve) return !0;
    const O = !!fe();
    return mu(ve, q, o.timeline.fps, O ? I() : A(), O || de());
  }
  function E() {
    var q;
    return ((q = fe()) == null ? void 0 : q.color) ?? o.bg_color;
  }
  function b(q) {
    var O;
    if (q === o.background) {
      const oe = q.clip.duration === null ? A() : null;
      return oe != null && oe.video || (oe == null ? void 0 : oe.frames) > 1 ? xd(q.clip, o.timeline.fps, oe, de()) : null;
    }
    if (((O = q.source) == null ? void 0 : O.kind) !== "port" || q.clip.duration !== null) return null;
    const ve = q.origin ? ye(q) : y(q) ? v() : null;
    return ve ? kd(q.clip, o.timeline.fps, ve) : null;
  }
  function G(q) {
    if (q === "camera") return g() ? o.camera : null;
    if (q === "scene") return i ? o.scene : null;
    if (q === hs) return k() ? o.background : null;
    const ve = ce(q);
    return ve ? ve.owner : ke(q);
  }
  function m(q) {
    var ve;
    return ((ve = ce(q)) == null ? void 0 : ve.editable) ?? !0;
  }
  function S(q) {
    return q.lane ? [q.lane] : Ao(G(q.owner));
  }
  function L(q) {
    var O;
    if (q === "camera") return 0;
    const ve = (O = G(q)) == null ? void 0 : O.clip;
    return ve ? ve.start - ve.in : 0;
  }
  function w(q) {
    return `${ji(q, t.frame)}:${q.start - q.in}`;
  }
  function F(q) {
    var O;
    const ve = G(q);
    return !!ve && ve.locked !== !0 && m(q) && ((O = ce(q)) == null ? void 0 : O.part) !== "scene";
  }
  function z(q) {
    const ve = Math.max(0, Math.round(q));
    if (ve === t.frame) return;
    _e(), t.frame = ve, c.frame.value = ve, _e();
    const O = [t.selectedId, t.worldSelectedId];
    B(), W(), O[0] !== t.selectedId || O[1] !== t.worldSelectedId ? pe() : h() && ge(), Se(), R({ reason: ft.PLAYHEAD });
  }
  function ne() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function T(q) {
    C(), H.seek(q);
  }
  function $() {
    s && H.stop();
  }
  function _() {
    C(), H.toggle();
  }
  function D() {
    _e(), W(), pe(), Se(), R();
  }
  function X() {
    te(), p(), D();
  }
  function be() {
    const { selection: q } = l;
    F(q.owner) && ($(), cS(G(q.owner), S(q), q.frames, t.frame - L(q.owner)), l.selection = null, X());
  }
  function me(q) {
    const ve = fi(q);
    if (ve === null || ve === o.timeline.fps) return;
    $();
    const O = Math.round(t.frame * ve / o.timeline.fps);
    IS(o, ve), l.selection = null, H.seek(O), X();
  }
  function xe() {
    const q = f(r);
    q !== null && q !== o.timeline.fps && me(q);
  }
  return {
    connect(q) {
      ({
        commitAndRefreshNode: p,
        getPortMediaMeta: v,
        hasCamera: g,
        inspectorTimed: h,
        isExternalSticker: y,
        markObjectVisualsDirty: W,
        playback: H,
        pushHistory: te,
        refreshModalVideoSource: C,
        releaseHiddenSelection: B,
        requestDraw: R,
        sceneFiles: J,
        syncCutoutShot: _e,
        stickerById: ke,
        syncSidePanelModel: ge,
        updateSelectionMenu: Se,
        updateSidePanel: pe,
        upstreamBackground: fe,
        upstreamLinked: de,
        upstreamOutput: re,
        upstreamPortMeta: ye,
        upstreamRow: ce,
        upstreamTimelineLayers: Z
      } = q);
    },
    syncTimeline: U,
    timelineTimed: P,
    timelineSpanFrames: he,
    backgroundShown: k,
    backgroundShowsAt: Q,
    backgroundVideoPlace: se,
    backgroundColor: E,
    portBarEnd: b,
    timelineOwner: G,
    selectedLanes: S,
    timelineOffset: L,
    clipView: w,
    timelineEditable: F,
    rowEditable: m,
    setTimelineFrame: z,
    jumpTimelineTo: T,
    stopTimelinePlayback: $,
    togglePlayback: _,
    refreshTimelineEdit: D,
    commitTimelineEdit: X,
    deleteSelectedKeyframes: be,
    changeTimelineFps: me,
    applyVideoTimelineFps: xe
  };
}
function mC(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I;
  function k(x) {
    var se, Q;
    if (!(n || !o)) {
      if (x.type === "seek") {
        if (x.phase === "move") {
          s.scrubFrame = x.frame, t.request("seek");
          return;
        }
        t.cancel(), x.phase === "start" && y(), g.seek(x.frame);
        return;
      }
      if (x.type === "play") {
        U();
        return;
      }
      if (x.type === "mute") {
        P(), fe();
        return;
      }
      if (x.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? Z()), s.selection = null, fe();
        return;
      }
      if (x.type === "restore-upstream-deleted" || x.type === "revert-upstream-layer") {
        const E = (Q = (se = a.timeline) == null ? void 0 : se.groups) == null ? void 0 : Q.find((G) => G.key === x.key), b = x.type === "restore-upstream-deleted" ? E == null ? void 0 : E.restore : E == null ? void 0 : E.revert;
        if (!b || b.disabled) return;
        x.type === "restore-upstream-deleted" ? C(x.key) : B(x.key), fe();
        return;
      }
      if (x.type === "toggle-row") {
        s.openRows.has(x.id) ? s.openRows.delete(x.id) : s.openRows.add(x.id), fe();
        return;
      }
      if (x.type === "toggle-visible") {
        if (!R(x.id)) return;
        const E = I(x.id);
        if (x.id === ny) i.painting_visible = !i.painting_visible;
        else if ((E == null ? void 0 : E.part) === "painting") E.sceneState.painting_visible = !E.sceneState.painting_visible;
        else {
          const b = ye(x.id);
          if (!b) return;
          b.visible = !b.visible;
        }
        H(), u();
        return;
      }
      if (x.type === "select-row") {
        const E = ge(x.id);
        if (E && !E.visible || x.id === "camera" && !l()) return;
        E && !ji(E.clip, r.frame) && v(E.clip.start), (E == null ? void 0 : E.placement) === "world" ? J(E.id) : x.id === "camera" ? ke(f()) : ke(p().find((b) => b.id === x.id) || null), pe(), s.selection = null, A(), he(), te();
        return;
      }
      if (x.type === "select-keys") {
        const E = re(x.owner), b = x.frames.map((S) => S - E), G = s.selection, m = (G == null ? void 0 : G.owner) === x.owner && G.lane === x.lane;
        if (x.additive && m) {
          const S = new Set(G.frames);
          for (const L of b)
            S.has(L) ? S.delete(L) : S.add(L);
          G.frames = [...S].sort((L, w) => L - w);
        } else
          s.selection = b.length ? { owner: x.owner, lane: x.lane, frames: b } : null;
        fe();
        return;
      }
      if (x.type === "move-keys") {
        const E = s.selection;
        if (!E || !de(E.owner)) return;
        const b = ye(E.owner), G = _e(E);
        if (x.phase === "start") {
          Se(), s.drag = { keyframes: G.map((w) => structuredClone(b[w].keyframes)), frames: E.frames, limit: ce() };
          return;
        }
        const { drag: m } = s;
        if (!(m != null && m.keyframes)) return;
        G.forEach((w, F) => {
          b[w].keyframes = structuredClone(m.keyframes[F]);
        });
        const S = re(E.owner), L = uS(b, G, m.frames, x.delta, -S, m.limit - 1 - S);
        if (E.frames = m.frames.map((w) => w + L), x.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, L ? u() : W();
        return;
      }
      if (x.type === "clip") {
        const E = ye(x.id);
        if (!(E != null && E.clip) || E.locked || !R(x.id)) return;
        if (x.phase === "start") {
          Se();
          const { clip: L } = E, w = ce(), F = h(E), z = L.duration === null ? F ?? w : L.start + L.duration;
          s.drag = { clip: { ...L }, span: ce(L), limit: w, end: z, last: L.duration === null ? F ?? L.start + 1 : z };
          return;
        }
        const { drag: b } = s;
        if (!(b != null && b.clip)) return;
        const G = b.clip, m = d(E.clip);
        if (E.clip = { ...G }, x.delta && x.mode === "move" ? pS(E.clip, Math.min(x.delta, Math.max(0, b.limit - b.last))) : x.delta && x.mode === "start" ? hS(E.clip, Math.min(G.start + x.delta, Math.max(b.limit - 1, G.start))) : x.delta && mS(E.clip, Math.min(b.end + x.delta, Math.max(b.limit, b.end)), b.span), x.phase !== "end") {
          t.request("timeline"), d(E.clip) !== m && (t.request("view"), x.id === hs && t.request("background"));
          return;
        }
        t.cancel(), s.drag = null, H();
        const S = JSON.stringify(E.clip) !== JSON.stringify(G);
        S && x.id === hs && g.seek(r.frame), S ? u() : W();
        return;
      }
      if (x.type === "key-row") {
        if (x.owner === "scene" || x.owner === hs || !de(x.owner)) return;
        Se(), sS(ye(x.owner), r.frame - re(x.owner)), u();
        return;
      }
      if (x.type === "fps") {
        const E = yS(x.fps);
        if (E === null || E === i.timeline.fps || a.timeline.fpsLocked) {
          fe();
          return;
        }
        c(E);
        return;
      }
      if (x.type === "length") {
        const E = bS(x.length);
        if (E === void 0 || E === i.timeline.length) {
          fe();
          return;
        }
        Se(), i.timeline.length = E, u();
        return;
      }
      if (x.type === "easing") {
        const E = s.selection;
        if (!E || !de(E.owner)) return;
        Se(), fS(ye(E.owner), _e(E), E.frames, x.easing), x.commit ? u() : W();
      }
    }
  }
  return {
    connect(x) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: p,
        jumpTimelineTo: v,
        playback: g,
        portBarEnd: h,
        refreshModalVideoSource: y,
        refreshTimelineEdit: W,
        releaseHiddenSelection: H,
        requestDraw: te,
        restoreUpstreamDeletedCommand: C,
        revertUpstreamLayerCommand: B,
        rowEditable: R,
        selectWorldSticker: J,
        selectedLanes: _e,
        setSelectedItem: ke,
        stickerById: ge,
        stopTimelinePlayback: Se,
        syncFloatingViewButtonState: pe,
        syncTimeline: fe,
        timelineEditable: de,
        timelineOffset: re,
        timelineOwner: ye,
        timelineSpanFrames: ce,
        timelineTimed: Z,
        togglePlayback: U,
        toggleVideoMuted: P,
        updateSelectionMenu: he,
        updateSidePanel: A,
        upstreamRow: I
      } = x);
    },
    onTimelineAction: k
  };
}
function gC(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: s,
    readOnly: a,
    state: l,
    stateWidget: c
  } = e;
  let d, u, f, p, v, g, h;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = $n(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), W(), o.setDirtyCanvas(!0, !0));
  }
  function W() {
    var _e;
    if (a || (p(), g(), h(), l.coverage = $n(l.coverage), ng(o, l.active), !c)) return;
    const R = f(), J = rg(o, R, String(c.value ?? ""), { rebased: n });
    J !== null && (R !== l && (l.id = R.id), c.value = J, (_e = c.callback) == null || _e.call(c, J));
  }
  function H() {
    l.ui_settings = tA(l.ui_settings), a || W();
  }
  function te() {
    var R;
    a || (W(), (R = o.setDirtyCanvas) == null || R.call(o, !0, !0));
  }
  function C() {
    a || d() && v().catch((R) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", R);
    });
  }
  function B(R = {}) {
    var ke, ge, Se, pe, fe, de, re, ye, ce, Z, U;
    const J = R.syncPreview !== !1, _e = R.syncGraph !== !1;
    J && ((Se = (ge = (ke = Dg(o)) == null ? void 0 : ke.runtime) == null ? void 0 : ge.requestDraw) == null || Se.call(ge), (de = (fe = (pe = Tg(o)) == null ? void 0 : pe.dom) == null ? void 0 : fe.requestDraw) == null || de.call(fe), (re = o.setDirtyCanvas) == null || re.call(o, !0, !1)), _e && ((ce = (ye = o.graph) == null ? void 0 : ye.setDirtyCanvas) == null || ce.call(ye, !0, !0), (U = (Z = t == null ? void 0 : t.canvas) == null ? void 0 : Z.setDirty) == null || U.call(Z, !0, !0));
  }
  return {
    connect(R) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: p,
        syncPaintingLayerAsync: v,
        syncPortHandoff: g,
        syncUpstreamEdits: h
      } = R);
    },
    apply: y,
    commitState: W,
    persistUiSettings: H,
    commitAndRefreshNode: te,
    triggerBackgroundPersistenceOnClose: C,
    syncCoverageChangeToNodePreviews: B
  };
}
function yC(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q, E, b;
  function G(_, D, X = "Clear") {
    return new Promise((be) => {
      a.confirmDialog = {
        visible: !0,
        title: String(_ || ""),
        text: String(D || ""),
        confirmLabel: String(X || "Confirm"),
        resolve: be
      };
    });
  }
  async function m() {
    var X, be;
    if (r || !await G(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = Mo(null), re();
    const D = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((me) => me.placement === "world" || D.includes(me)) : D, n || (i.assets = {}), t.selectedId = ((X = D[0]) == null ? void 0 : X.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((be = D[0]) == null ? void 0 : be.id) || null, ce();
    else {
      const me = NS(i.shots, i.active.selected_shot_id);
      i.stickers = D, i.assets = {}, i.shots = me.shots, t.selectedId = me.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = me.selectedShotId, !me.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, ce();
    }
    Z(), u(), E(), Q(), P();
  }
  async function S(_) {
    var xe, q, ve, O;
    if (r) return;
    const D = _ === "mask" ? "mask" : "paint", X = D === "mask" ? "Mask" : "Paint", be = W(D);
    if (!(!be.length && !(((xe = t.interaction) == null ? void 0 : xe.kind) === "draw" && ((q = t.interaction) == null ? void 0 : q.layerKind) === D) || !await G(
      `Clear ${X}`,
      `This will remove all ${D} strokes in the current node.`,
      `Clear ${X}`
    ))) {
      if (((ve = t.interaction) == null ? void 0 : ve.kind) === "draw" && ((O = t.interaction) == null ? void 0 : O.layerKind) === D) {
        const oe = v(t.interaction);
        oe && t.paintEngine.cancelActiveStroke(oe), t.interaction = null;
      }
      be.length = 0, i.painting.raster_objects = H().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") !== D), D === "paint" && (y().length = 0), re(), Z(), u(), E(), Q(), se(), P();
    }
  }
  function L() {
    if (r) return;
    const _ = te();
    if (!_ || !ge(_) || B(_) || Ut(_) || n && pe(_)) return;
    let D;
    n ? D = KS(_, Jl(i), h()) : (D = JSON.parse(JSON.stringify(_)), D.id = Qo("st"), D.yaw_deg = Kt((D.yaw_deg || 0) + 8), D.z_index = h()), i.stickers.push(D), i.active.selected_sticker_id = D.id, t.selectedId = D.id, t.selectedIds = [D.id], fe(), Z(), u(), Q(), E(), P();
  }
  function w() {
    const _ = I();
    return _ ? (b(_) && (k(), Ut(_) ? p([_]) : HS(i, _.id), c(), fe(), Z(), u(), E(), Q(), x(), P()), !0) : !1;
  }
  function F() {
    var be, me, xe, q, ve;
    if (r) return;
    const _ = C(), D = te();
    if (!D && _.length === 0 || _.some((O) => R(O))) return;
    k();
    const X = _.filter(Ut);
    if (X.length && (p(X), fe()), _.length > 1 || X.length) {
      const O = new Set(_.filter((ee) => Se(ee)).map((ee) => String(ee.actionGroupId || ee.id || ""))), oe = new Set(_.filter((ee) => J(ee)).map((ee) => ye(ee.rasterObjectId || ee.id || ""))), V = new Set(_.filter(ge).map((ee) => String(ee.id || "")));
      O.size > 0 && (i.painting.paint.strokes = (Array.isArray((me = (be = i.painting) == null ? void 0 : be.paint) == null ? void 0 : me.strokes) ? i.painting.paint.strokes : []).filter((ee) => !O.has(String((ee == null ? void 0 : ee.actionGroupId) || ""))), i.painting.groups = y().filter((ee) => !O.has(String((ee == null ? void 0 : ee.actionGroupId) || (ee == null ? void 0 : ee.id) || ""))), re()), oe.size > 0 && (i.painting.raster_objects = H().filter((ee) => !oe.has(String((ee == null ? void 0 : ee.id) || ""))), de()), V.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((ee) => V.has(String((ee == null ? void 0 : ee.id) || "")) ? B(ee) ? (ke(ee) || (ee.visible = !1), !0) : !1 : !0), ce(), fe()), t.selectedId = null, t.selectedIds = [], Z(), u(), E(), Q(), P();
      return;
    }
    if (Se(D)) {
      const O = String(D.actionGroupId || D.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((q = (xe = i.painting) == null ? void 0 : xe.paint) == null ? void 0 : q.strokes) ? i.painting.paint.strokes : []).filter((oe) => String((oe == null ? void 0 : oe.actionGroupId) || "").trim() !== O), i.painting.groups = y().filter((oe) => String((oe == null ? void 0 : oe.actionGroupId) || (oe == null ? void 0 : oe.id) || "").trim() !== O), re(), t.selectedId = null, t.selectedIds = [], Z(), u(), E(), Q(), P();
      return;
    }
    if (J(D)) {
      const O = ye(D.rasterObjectId || D.id || "");
      i.painting.raster_objects = H().filter((oe) => String((oe == null ? void 0 : oe.id) || "").trim() !== O), de(), t.selectedId = null, t.selectedIds = [], Z(), u(), E(), Q(), P();
      return;
    }
    if (o && _e(D)) {
      f();
      return;
    }
    if (s === "stickers" || ge(D)) {
      if (B(D)) {
        if (ke(D)) return;
        D.visible = !1, fe(), Z(), u(), E(), Q(), P();
        return;
      }
      i.stickers = i.stickers.filter((O) => O.id !== D.id), ce(), fe(), t.selectedId = ((ve = g()[0]) == null ? void 0 : ve.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, Z(), u(), E(), Q(), P();
      return;
    }
    l();
  }
  function z(_, D) {
    r || (k(), _(D) && (U(), fe(), Z(), u(), E(), Q(), P()));
  }
  function ne(_) {
    z(he, _);
  }
  function T(_) {
    z(A, _);
  }
  function $() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", se(), E());
  }
  return {
    connect(_) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: p,
        getActivePaintTargetDescriptor: v,
        getList: g,
        getNextStickerZIndex: h,
        getPaintingGroupList: y,
        getPaintingLayerList: W,
        getRasterObjectList: H,
        getSelected: te,
        getSelectedItems: C,
        isExternalSticker: B,
        isItemLocked: R,
        isRasterObjectItem: J,
        isShotItem: _e,
        isStickerHidden: ke,
        isStickerItem: ge,
        isStrokeGroupItem: Se,
        isUploadingSticker: pe,
        markObjectVisualsDirty: fe,
        markPaintCompositeVisualsDirty: de,
        markPaintStrokeVisualsDirty: re,
        parseRasterObjectSelectionId: ye,
        pruneUnusedAssets: ce,
        pushHistory: Z,
        releaseHiddenSelection: U,
        requestDraw: P,
        restoreUpstreamDeleted: he,
        revertUpstreamLayer: A,
        selectedWorldSticker: I,
        stopTimelinePlayback: k,
        syncFloatingViewButtonState: x,
        syncPaintUi: se,
        updateSelectionMenu: Q,
        updateSidePanel: E,
        worldStickerEditable: b
      } = _);
    },
    clearAll: m,
    clearPaintingLayer: S,
    duplicateSelected: L,
    deleteSelectedWorldSticker: w,
    deleteSelected: F,
    restoreUpstreamDeletedCommand: ne,
    revertUpstreamLayerCommand: T,
    forceCursorTool: $
  };
}
function bC(e) {
  const {
    api: t,
    canvas: r,
    dragCue: n,
    editor: i,
    editorView: o,
    imageCache: s,
    node: a,
    readOnly: l,
    sceneV2: c,
    stageWrap: d,
    state: u,
    type: f,
    vueModal: p
  } = e;
  let v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce;
  function Z(T) {
    return Qd(T == null ? void 0 : T.dataTransfer);
  }
  function U(T) {
    const $ = !!T;
    n.active !== $ && (n.active = $, d.classList.toggle("drop-active", $));
  }
  function P() {
    const T = new Set(
      (u.stickers || []).map(($) => String(($ == null ? void 0 : $.asset_id) || "")).filter(($) => !!$)
    );
    Object.keys(u.assets || {}).forEach(($) => {
      T.has($) || (delete u.assets[$], s.delete($));
    });
  }
  async function he(T) {
    if (l || f !== "stickers" && f !== "cutout" || !lr(T)) return;
    if (c) {
      re(), await se(T);
      return;
    }
    const $ = Qo("asset"), _ = qo(a, `add:${$}`, async () => {
      try {
        const { image: D } = await Xo(T);
        s.set($, D);
        const X = Qo("st");
        u.stickers.push({
          id: X,
          asset_id: $,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(D.naturalWidth || D.width || 1), Number(D.naturalHeight || D.height || 1)),
          rot_deg: 0,
          z_index: te()
        }), pe(u.stickers[u.stickers.length - 1]), H(), ce(), ye(), ge();
        const be = await Pi(T, {
          fetchApi: (q, ve) => t.fetchApi(q, ve)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((q) => String((q == null ? void 0 : q.asset_id) || "") === $).length) return;
        u.assets[$] = be, P(), ke(), g(), ce(), ye(), ge();
      } catch (D) {
        delete u.assets[$], s.delete($);
        const X = Array.isArray(u.stickers) ? u.stickers : [], be = X.filter((me) => String((me == null ? void 0 : me.asset_id) || "") === $);
        throw be.length && (u.stickers = X.filter((me) => String((me == null ? void 0 : me.asset_id) || "") !== $), be.some((me) => String((me == null ? void 0 : me.id) || "") === String(i.selectedId || "")) && pe(null), ce(), ye(), ge(), g()), D;
      }
    });
    try {
      await _;
    } catch {
    }
  }
  function A() {
    var T;
    l || f !== "stickers" && f !== "cutout" || (T = p == null ? void 0 : p.openImagePicker) == null || T.call(p, "add");
  }
  function I() {
    var T;
    l || !c || (T = p == null ? void 0 : p.openImagePicker) == null || T.call(p, "add-world");
  }
  async function k(T) {
    l || !c || !lr(T) || (re(), await se(T, "world"));
  }
  function x() {
    const T = { x: r.width / 2, y: r.height / 2 }, $ = R() ? o.pick(W(), T.x, T.y, r.width, r.height) : null;
    return h_(fe(), $, y());
  }
  async function se(T, $ = "sky") {
    const _ = Jl(u), D = qo(a, `add:${_}`, async () => {
      const { image: X } = await Xo(T), be = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(X.naturalWidth || X.width || 1), Number(X.naturalHeight || X.height || 1)),
        rot_deg: 0
      }, me = { kind: "file", filename: "" }, xe = $ === "world" ? GS(_, me, x()) : Id(_, me, be, te());
      s.set(de(xe), X), u.stickers.push(xe), $ === "world" ? Se(_) : pe(xe), H(), ce(), ye(), ge();
      try {
        const q = await Pi(T, {
          fetchApi: (O, oe) => t.fetchApi(O, oe)
        }), ve = u.stickers.find((O) => O.id === _);
        if (!ve) return;
        ve.source = Ra(q), s.set(de(ve), X), ke(), g();
      } catch (q) {
        throw u.stickers = u.stickers.filter((ve) => ve.id !== _), i.selectedId === _ && pe(null), i.worldSelectedId === _ && v(), ke(), g(), q;
      } finally {
        ce(), ye(), ge();
      }
    });
    try {
      await D;
    } catch {
    }
  }
  async function Q(T, $) {
    const _ = qo(a, `replace:${$}:${Qo("asset")}`, async () => {
      const { image: D } = await Xo(T), X = await Pi(T, {
        fetchApi: (me, xe) => t.fetchApi(me, xe)
      }), be = u.stickers.find((me) => me.id === $);
      if (be) {
        be.source = Ra(X), be.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const me of [be.size.value, ...be.size.keyframes.map((xe) => xe.value)])
          me.vFOV_deg = h(me.hFOV_deg, Number(D.naturalWidth || D.width || 1), Number(D.naturalHeight || D.height || 1));
        s.set(de(be), D), _e(), ke(), g(), ce(), ye(), ge();
      }
    });
    try {
      await _;
    } catch {
    }
  }
  async function E(T) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const $ = C();
    if (!$ || !J($) || B($) || Ut($) || !lr(T)) return;
    if (c) {
      await Q(T, $.id);
      return;
    }
    const _ = String($.id || ""), D = Qo("asset"), X = qo(a, `replace:${_}:${D}`, async () => {
      var O;
      const be = (Array.isArray(u.stickers) ? u.stickers : []).find((oe) => String((oe == null ? void 0 : oe.id) || "") === _) || null;
      if (!be || !J(be) || B(be)) return;
      const me = String(be.asset_id || ""), xe = me ? fn(((O = u.assets) == null ? void 0 : O[me]) || null) : null, q = Number(be.vFOV_deg || 0), ve = be.crop && typeof be.crop == "object" ? { ...be.crop } : null;
      try {
        const { image: oe } = await Xo(T);
        s.set(D, oe), be.asset_id = D, be.vFOV_deg = h(
          Number(be.hFOV_deg || 30),
          Number(oe.naturalWidth || oe.width || 1),
          Number(oe.naturalHeight || oe.height || 1)
        ), be.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, _e(), ce(), ye(), ge();
        const V = await Pi(T, {
          fetchApi: (K, Y) => t.fetchApi(K, Y)
        }), ee = (Array.isArray(u.stickers) ? u.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === _) || null;
        if (!ee || String(ee.asset_id || "") !== D) return;
        u.assets[D] = V, P(), ke(), g(), ce(), ye(), ge();
      } catch (oe) {
        delete u.assets[D], s.delete(D);
        const V = (Array.isArray(u.stickers) ? u.stickers : []).find((ee) => String((ee == null ? void 0 : ee.id) || "") === _) || null;
        throw V && String(V.asset_id || "") === D && (me && xe && (u.assets[me] = xe), V.asset_id = me, V.vFOV_deg = q, V.crop = ve ? { ...ve } : null), _e(), g(), ce(), ye(), ge(), oe;
      }
    });
    try {
      await X;
    } catch {
    }
  }
  function b() {
    var $;
    if (l) return;
    const T = C();
    !T || !J(T) || B(T) || Ut(T) || ($ = p == null ? void 0 : p.openImagePicker) == null || $.call(p, "replace");
  }
  async function G() {
    if (l || f !== "stickers") return;
    if (c) {
      await m();
      return;
    }
    const T = u.assets && typeof u.assets == "object" ? u.assets : {}, $ = Object.entries(T).filter(([, D]) => {
      const X = String((D == null ? void 0 : D.type) || "").toLowerCase(), be = String((D == null ? void 0 : D.value) || "");
      return X === "dataurl" && be.startsWith("data:image");
    });
    if (!$.length) return;
    let _ = !1;
    for (const [D, X] of $)
      try {
        const be = String((X == null ? void 0 : X.value) || "");
        if (!be) continue;
        const me = await fetch(be).then((oe) => oe.blob()), xe = String(me.type || "image/png").split("/")[1] || "png", q = String((X == null ? void 0 : X.name) || `${D}.${xe}`), ve = new File([me], q, { type: me.type || "image/png" }), O = await Pi(ve, {
          fetchApi: (oe, V) => t.fetchApi(oe, V)
        });
        u.assets[D] = {
          ...O,
          w: Number((X == null ? void 0 : X.w) || 0),
          h: Number((X == null ? void 0 : X.h) || 0)
        }, _ = !0;
      } catch {
      }
    _ && (g(), ge());
  }
  async function m() {
    let T = !1;
    for (const $ of u.stickers) {
      const _ = $.source.data_url;
      if (_)
        try {
          const D = await fetch(_).then((xe) => xe.blob()), X = String(D.type || "image/png").split("/")[1] || "png", be = new File([D], `${$.id}.${X}`, { type: D.type || "image/png" }), me = await Pi(be, {
            fetchApi: (xe, q) => t.fetchApi(xe, q)
          });
          $.source = Ra(me), T = !0;
        } catch {
        }
    }
    T && (g(), ge());
  }
  function S(T) {
    f !== "stickers" && f !== "cutout" || l || (T.preventDefault(), U(!0));
  }
  function L(T) {
    var D;
    if (f !== "stickers" && f !== "cutout" || l) return;
    T.preventDefault(), T.stopPropagation(), n.depth = 0, U(!1);
    const _ = Array.from(((D = T.dataTransfer) == null ? void 0 : D.files) || []).find((X) => lr(X));
    _ && he(_);
  }
  function w(T) {
    f !== "stickers" && f !== "cutout" || l || Z(T) && (n.depth += 1, U(!0), T.preventDefault());
  }
  function F(T) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && Z(T) && U(!0), n.active && T.preventDefault());
  }
  function z(T) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const $ = Number(T.clientX) <= 0 && Number(T.clientY) <= 0;
    (n.depth === 0 || $) && U(!1);
  }
  function ne(T) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, U(!1), Z(T) && T.preventDefault());
  }
  return {
    connect(T) {
      ({
        clearWorldSelection: v,
        commitAndRefreshNode: g,
        computeStickerVFov: h,
        contentSphere: y,
        currentSpaceCamera: W,
        forceCursorTool: H,
        getNextStickerZIndex: te,
        getSelected: C,
        isExternalSticker: B,
        isSpaceView: R,
        isStickerItem: J,
        markObjectVisualsDirty: _e,
        pushHistory: ke,
        requestDraw: ge,
        selectWorldSticker: Se,
        setSelectedItem: pe,
        spaceViewState: fe,
        stickerImageKey: de,
        stopTimelinePlayback: re,
        updateSelectionMenu: ye,
        updateSidePanel: ce
      } = T);
    },
    addImageStickerFromFile: he,
    addImageSticker: A,
    addWorldImageSticker: I,
    addWorldStickerFromFile: k,
    replaceSelectedImageFromFile: E,
    replaceSelectedImage: b,
    migrateLegacyEmbeddedAssets: G,
    pruneUnusedAssets: P,
    setDropCue: U,
    onCanvasDragOver: S,
    onCanvasDrop: L,
    onWindowDragEnter: w,
    onWindowDragOver: F,
    onWindowDragLeave: z,
    onWindowDrop: ne
  };
}
function vC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    frameRollKnobEl: i,
    initialShotBase: o,
    readOnly: s,
    runtime: a,
    shotEditor: l,
    stageWrap: c,
    state: d,
    studio: u,
    tooltip: f,
    type: p,
    uiState: v
  } = e;
  let g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q, E = o;
  function b(V, ee) {
    var j;
    const K = (j = C().space) == null ? void 0 : j.gizmo;
    if (ge() && K && Q("hover", ee) !== null && Q("down", ee))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: K.mode, start: K.transform, base: te(), changed: !1 }, r.setPointerCapture(V.pointerId), k(ee), !0;
    const Y = hg(te(), h(ce()));
    return w_(H(), Y, ee, r.width, r.height) ? (ge() || (ye(D()), se(), x(), de()), n.interaction = { kind: "world_select" }, r.setPointerCapture(V.pointerId), !0) : !1;
  }
  function G() {
    if (s || p !== "cutout") return;
    const V = D();
    if (V) {
      ye(V), n.mode = "pano", I(Kt(Number(V.yaw_deg || 0)), Oe(Number(V.pitch_deg || 0), -89.9, 89.9)), se(), x(), de({ cause: "cutout_frame" });
      return;
    }
    const ee = mm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Kt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [ee], ye(ee), B(), n.mode = "pano", fe(), W(), se(), x(), de({ cause: "cutout_frame" });
  }
  function m() {
    s || !u || J() || (U(), d.camera = FS(Z()), $(), ye(D()), B(), fe(), W(), se(), x(), de({ cause: "cutout_frame" }));
  }
  function S() {
    U(), d.camera = null, ye(null), $(), fe(), W(), se(), x(), de({ cause: "cutout_frame" });
  }
  function L(V, ee) {
    u && Se(V) && (d.camera.projection = ee === wo ? "erp" : "perspective", ee === wo) || z(V, ee);
  }
  function w() {
    s || p !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, fe(), W(), se(), x(), de());
  }
  function F(V, ee) {
    const K = a.frameSafeRect;
    if (!V || !K || n.mode !== "frame") return !1;
    const Y = $u * Li(K, V), j = hd(pd(K, ee), Y);
    return V.hFOV_deg = j.hFOV_deg, V.vFOV_deg = j.vFOV_deg, !0;
  }
  function z(V, ee) {
    if (!V || V.locked === !0) return;
    const K = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, Y = (() => {
      const le = String(V.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(le)) {
        const [ue, Me] = le.split(":").map((Ee) => Number(Ee));
        if (Number.isFinite(ue) && Number.isFinite(Me)) return ue >= Me;
      }
      const we = Number(V.hFOV_deg || 64), N = Number(V.vFOV_deg || 40);
      return Math.abs(we - N) > 1e-6 ? we >= N : zi(V) >= 1;
    })();
    let [j, M] = K[String(ee)] || K["1:1"];
    j >= M !== Y && ([j, M] = [M, j]);
    const ie = j / M;
    if (!F(V, ie)) {
      const le = Oe(Number(V.vFOV_deg || 40), 1, 179);
      V.vFOV_deg = le, V.hFOV_deg = Fa(le, ie);
    }
    V.aspect_id = `${j}:${M}`;
  }
  function ne(V, ee, K) {
    if (!V || V.locked === !0) return !1;
    const Y = Is(ee, K);
    if (!Y) return !1;
    const j = Y.ratio;
    if (!F(V, j)) {
      const M = Oe(Number(V.vFOV_deg || 40), 1, 179);
      V.vFOV_deg = M, V.hFOV_deg = Fa(M, j);
    }
    return V.aspect_id = Y.label, !0;
  }
  function T(V) {
    if (!V || V.locked === !0) return;
    const ee = String(V.aspect_id || "").trim(), K = ui(V), Y = K.tanHalfX / Math.max(1e-12, K.tanHalfY), j = 1 / Math.max(1e-12, Y);
    if (!F(V, j)) {
      const M = Oe(Number(V.vFOV_deg || 60), 1, 179);
      V.vFOV_deg = M, V.hFOV_deg = Fa(M, j);
    }
    if (/^\d+:\d+$/.test(ee)) {
      const [M, ie] = ee.split(":");
      V.aspect_id = `${ie}:${M}`;
    } else
      V.aspect_id = Fi(V);
  }
  function $(V = !0) {
    var Y, j;
    if (!t) return;
    const ee = E;
    if (!y()) {
      E = null, (Y = d.shots) != null && Y.length && (d.shots = []), ee && _(ee, null);
      return;
    }
    const K = (j = d.shots) == null ? void 0 : j[0];
    V && K && E && DS(d.camera, n.frame, K, E), E = Qm(d.camera, n.frame), K ? Object.assign(K, E, { position: [...E.position] }) : d.shots = [{ ...E, position: [...E.position] }], ee || _(null, E);
  }
  function _(V, ee) {
    var M, ie;
    !ee && n.mode === "frame" && pe(V);
    const K = (ee == null ? void 0 : ee.position) ?? [0, 0, 0];
    if (((ie = (M = n.viewTransition) == null ? void 0 : M.end) == null ? void 0 : ie.mode) === "3dof") {
      A({ ...Z(), position: K }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !_e()) return;
    const Y = (V == null ? void 0 : V.position) ?? [0, 0, 0];
    if (Y.every((le, we) => le === K[we])) return;
    const j = { ...Z(), position: Y };
    g({ mode: "6dof", position: Y, moved: !0 }), n.viewDistance = j.distance, A({ ...j, position: K }, { mode: "3dof", moved: !1 });
  }
  function D() {
    if (!l) return null;
    const V = Array.isArray(d.shots) ? d.shots : [];
    if (!V.length) return null;
    const ee = String(d.active.selected_shot_id || "");
    return V.find((K) => String((K == null ? void 0 : K.id) || "") === ee) || V[0] || null;
  }
  function X(V, ee, K = {}) {
    var M;
    if ((V == null ? void 0 : V.kind) !== "roll_frame" || !V.shot) return;
    V.accumulatedRad += fm(ee, V.lastAngle), V.lastAngle = ee;
    const Y = pm(V.start.roll_deg, V.accumulatedRad, {
      shiftKey: K.shiftKey,
      altKey: V.altStarted ? !1 : K.altKey
    });
    V.shot.roll_deg = Y, V.changed = V.changed || Math.abs(V.accumulatedRad) > 1e-9;
    const j = (((M = v.sidePanel) == null ? void 0 : M.params) || []).find((ie) => ie.key === "roll_deg");
    j && (j.value = Y, j.displayValue = mo(Y), j.fillPct = (Y + 180) / 360 * 100), P(), xe(V), de({ localOnly: !0 });
  }
  function be(V, ee, K = {}) {
    var M;
    if ((V == null ? void 0 : V.kind) !== "roll_frame" || !V.shot || !V.rollGesture) return;
    const Y = d0(V.rollGesture, ee, K);
    if (!Y) return;
    V.rollGesture = Y.gesture, V.center = Y.gesture.center, V.lastAngle = Y.gesture.lastAngle, V.accumulatedRad = Y.gesture.accumulatedRad, V.shot.roll_deg = Y.rollDeg, V.changed = V.changed || Math.abs(Y.gesture.accumulatedRad) > 1e-9;
    const j = (((M = v.sidePanel) == null ? void 0 : M.params) || []).find((ie) => ie.key === "roll_deg");
    j && (j.value = Y.rollDeg, j.displayValue = mo(Y.rollDeg), j.fillPct = (Y.rollDeg + 180) / 360 * 100), P(), xe(V), de({ localOnly: !0 });
  }
  function me(V, ee) {
    const K = re(V);
    return Math.atan2(K.y - ee.y, K.x - ee.x);
  }
  function xe(V) {
    var ie, le;
    if ((V == null ? void 0 : V.kind) !== "roll_frame" || !V.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const ee = R(V.shot), K = (ie = r.getBoundingClientRect) == null ? void 0 : ie.call(r), Y = (le = c.getBoundingClientRect) == null ? void 0 : le.call(c);
    if (!ee || !K || !Y || r.width <= 0 || r.height <= 0) return;
    const j = K.width / r.width, M = K.height / r.height;
    v.tooltip.text = `${mo(V.shot.roll_deg)}°`, v.tooltip.left = K.left - Y.left + (ee.x + ee.w * 0.5) * j, v.tooltip.top = K.top - Y.top + (ee.y + ee.h * 0.5) * M + 12, v.tooltip.variant = "roll", v.tooltip.visible = !0;
  }
  function q(V) {
    var M;
    if (V.button !== 0 || s || n.mode !== "frame") return;
    const ee = D();
    if (!ee || ee.locked === !0) return;
    const K = R(ee);
    if (!K) return;
    const Y = { x: K.x + K.w * 0.5, y: K.y + K.h * 0.5 }, j = me(V, Y);
    n.interaction = {
      kind: "roll_frame",
      shot: ee,
      center: Y,
      lastAngle: j,
      accumulatedRad: 0,
      start: { roll_deg: Number(ee.roll_deg ?? ee.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (M = i.setPointerCapture) == null || M.call(i, V.pointerId), V.preventDefault(), P(), xe(n.interaction), de({ localOnly: !0 });
  }
  function ve(V) {
    var ee;
    ((ee = n.interaction) == null ? void 0 : ee.kind) !== "roll_frame" || n.interaction.source !== "knob" || X(
      n.interaction,
      me(V, n.interaction.center),
      V
    );
  }
  function O() {
    const V = n.interaction;
    (V == null ? void 0 : V.kind) !== "roll_frame" || V.source !== "knob" || (V.changed && (fe(), W(), se()), n.interaction = null, ke(), he(), P(), de());
  }
  function oe(V) {
    const ee = n.mode === "frame" && !s ? D() : null;
    !ee || ee.locked === !0 || Math.abs(Number(ee.roll_deg ?? ee.rot_deg ?? 0)) <= 1e-9 || (ee.roll_deg = 0, fe(), W(), se(), P(), de(), V.preventDefault());
  }
  return {
    connect(V) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: h,
        cameraShoots: y,
        commitAndRefreshNode: W,
        currentSpaceCamera: H,
        cutoutCamera: te,
        editorViewInput: C,
        forceCursorTool: B,
        getFrameViewRect: R,
        hasCamera: J,
        hasSpaceContent: _e,
        hideTooltip: ke,
        isCameraSelected: ge,
        isShotItem: Se,
        leaveFrameView: pe,
        pushHistory: fe,
        requestDraw: de,
        screenPos: re,
        setSelectedItem: ye,
        spaceScale: ce,
        spaceViewState: Z,
        stopTimelinePlayback: U,
        syncFrameRollKnob: P,
        syncViewToggleState: he,
        transitionView: A,
        turnViewTo: I,
        updateCursor: k,
        updateSelectionMenu: x,
        updateSidePanel: se,
        worldGizmoPointer: Q
      } = V);
    },
    addCutoutFrame: G,
    addStudioCamera: m,
    deleteStudioCamera: S,
    setShotAspect: L,
    clearCutoutFrame: w,
    applyCutoutAspectCustom: ne,
    rotateCutoutAspect90: T,
    syncCutoutShot: $,
    getActiveCutoutShot: D,
    startCameraPress: b,
    applySharedRollInteractionPoint: be,
    onFrameRollKnobPointerDown: q,
    onFrameRollKnobPointerMove: ve,
    finishKnobRoll: O,
    onFrameRollKnobDoubleClick: oe
  };
}
function SC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: s,
    frameRailEl: a,
    paintDockEl: l,
    readOnly: c,
    runtime: d,
    shotEditor: u,
    toolRailEl: f,
    uiState: p,
    videoTransportEl: v
  } = e;
  let g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re = null, ye = !1;
  function ce(_) {
    if (n.mode = "pano", !_) return;
    h();
    const D = ge().distance;
    n.viewYaw = Kt(_.yaw_deg), n.viewPitch = Oe(_.pitch_deg, -89.9, 89.9), n.viewFov = Oe(_.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [..._.position], moved: !0 }), n.viewDistance = D, d.backgroundDirty = !0;
  }
  function Z() {
    var Y, j, M, ie, le;
    if (!r) return null;
    const _ = (Y = r.getBoundingClientRect) == null ? void 0 : Y.call(r), D = Number((_ == null ? void 0 : _.width) || 0) > 0 ? r.width / _.width : 1, X = Number((_ == null ? void 0 : _.height) || 0) > 0 ? r.height / _.height : 1;
    d.frameCanvasScale = Math.min(D, X);
    let be = 24, me = 24;
    const xe = Math.max(be + 1, r.width - 24);
    let q = Math.max(me + 1, r.height - 24);
    const ve = (j = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : j.call(f), O = (M = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : M.call(a);
    let oe = 24;
    ve && _ && ve.width > 0 && ve.height > 0 && (oe = Math.max(oe, (ve.right - _.left) * D + Kp)), O && _ && O.width > 0 && O.height > 0 && ((ie = p.frameRail) == null ? void 0 : ie.visible) === !0 && (oe = Math.max(oe, (_.right - O.left) * D + Kp)), be = Math.max(be, oe);
    const V = Math.min(xe, r.width - oe);
    let ee = 24;
    const K = (le = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : le.call(s);
    if (K && _ && K.width > 0 && K.height > 0 && (ee = Math.max(ee, (K.bottom - _.top) * X + Gc)), [l, v].forEach((we) => {
      var Me;
      if (!we || !_) return;
      const N = getComputedStyle(we);
      if (N.display === "none" || N.visibility === "hidden" || Number(N.opacity) <= 0) return;
      const ue = (Me = we.getBoundingClientRect) == null ? void 0 : Me.call(we);
      !ue || ue.width <= 0 || ue.height <= 0 || (ee = Math.max(ee, (_.bottom - ue.top) * X + Gc));
    }), o && _) {
      const we = getComputedStyle(o);
      we.display !== "none" && we.visibility !== "hidden" && Number(we.opacity) > 0 && (ee = Math.max(ee, (L2 + Gc) * X));
    }
    return me = Math.max(me, ee), q = Math.max(me + 1, Math.min(q, r.height - ee)), {
      x: be,
      y: me,
      w: Math.max(1, V - be),
      h: Math.max(1, q - me)
    };
  }
  function U(_ = H()) {
    if (!_ || !r) return null;
    const D = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return y1(D, _, $u * Li(D, _));
  }
  function P(_ = H()) {
    const D = U(_);
    return D ? { x: D.x, y: D.y, w: D.w, h: D.h } : null;
  }
  function he() {
    return u && !!H();
  }
  function A(_, D) {
    const X = H();
    if (!X || X.locked === !0) return !1;
    const be = Number(D) > 0, me = ym(X, D);
    if (!me) return !1;
    if (be) {
      const xe = $u * Li(
        d.frameSafeRect || { w: r.width, h: r.height },
        me
      ), q = md({ width: r.width, height: r.height }, xe);
      if (q.halfW < r.width * 0.5 - 1e-6 || q.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return X.hFOV_deg = me.hFOV_deg, X.vFOV_deg = me.vFOV_deg, I(), de(), !0;
  }
  function I() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, R(), y(), de());
    }, 180);
  }
  function k() {
    return t && n.mode === "frame" && te();
  }
  function x() {
    const _ = H(), D = U(_);
    return _ && D ? yg(_, D, { width: r.width, height: r.height }) : null;
  }
  function se() {
    var _;
    return ((_ = W()) == null ? void 0 : _.radius) || pr;
  }
  function Q(_) {
    const { position: D, yaw_deg: X, pitch_deg: be, roll_deg: me, hFOV_deg: xe } = _.shot;
    return { position: D, yaw_deg: X, pitch_deg: be, roll_deg: me, hFOV_deg: xe, distance: se() };
  }
  function E(_, D) {
    const { rect: X } = _;
    return i.pickSurface(_e(_.shot), D.x - X.x, D.y - X.y, X.w, X.h);
  }
  function b(_, D, X) {
    return yu(D, E(_, X), null, ke());
  }
  function G(_) {
    return JSON.stringify([Q(_), _.rect]);
  }
  function m(_) {
    const D = H();
    D.position = [..._.position], D.yaw_deg = _.yaw_deg, D.pitch_deg = _.pitch_deg;
  }
  function S(_, D) {
    const X = H();
    !X || c || X.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: X,
      last: _,
      start: { yaw_deg: Number(X.yaw_deg || 0), pitch_deg: Number(X.pitch_deg || 0) },
      changed: !1
    }, fe(_), r.setPointerCapture(D));
  }
  function L(_, D, X) {
    const be = x();
    if (!be || c) return;
    const me = Q(be);
    n.interaction = _ === "orbit" ? { kind: "frame_orbit", last: D, pivot: b(be, me, D), changed: !1 } : { kind: "frame_pan", last: D, depth: ig(me, ke()), changed: !1 }, fe(D), r.setPointerCapture(X);
  }
  function w(_, D) {
    const X = x();
    if (!X) return;
    const be = Q(X), me = D.x - _.last.x, xe = D.y - _.last.y;
    m(_.kind === "frame_pan" ? ag(be, me, xe, X.rect.w, X.rect.h, _.depth) : sg(be, me, xe, r.height, _.pivot)), _.changed = _.changed || me !== 0 || xe !== 0, _.last = D, J({ localOnly: !0, cause: "frame_view" });
  }
  function F(_, D) {
    const X = x();
    if (!X || c) return;
    const be = Q(X), me = performance.now(), xe = { x: _.x, y: _.y, time: me, key: i.contentRevision(), view: G(X) };
    if (!og(re, xe)) {
      const q = E(X, _);
      re = { ...xe, cost: performance.now() - me, hit: q };
    }
    m(lg(be, yu(be, re.hit, null, ke()), D, ke())), re.view = G(x() ?? X), re.wheelTime = me, I(), de(), J({ localOnly: !0, cause: "frame_view" });
  }
  function z(_, D) {
    const X = H();
    if (!X || c || X.locked === !0) return !1;
    const be = oy(X, _, D);
    return be === X ? !1 : (Se(), X.position = be.position, ye = !0, !0);
  }
  function ne() {
    return ye ? (ye = !1, R(), y(), de(), !0) : !1;
  }
  function T() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, R(), y(), de(), !0) : !1;
  }
  function $() {
    const _ = n.interaction;
    if (!(_ != null && _.shot) || !_.start || _.kind !== "pan_frame" && _.kind !== "roll_frame") return !1;
    const D = _.kind === "roll_frame";
    return _.kind === "pan_frame" ? (_.shot.yaw_deg = _.start.yaw_deg, _.shot.pitch_deg = _.start.pitch_deg) : _.shot.roll_deg = _.start.roll_deg, D && C(), n.interaction = null, B(), pe(), de(), fe(n.pointerPos), J({ localOnly: !0 }), !0;
  }
  return {
    connect(_) {
      ({
        applySpaceMode: g,
        cancelViewTransition: h,
        commitAndRefreshNode: y,
        contentSphere: W,
        getActiveCutoutShot: H,
        hasSpaceContent: te,
        hideTooltip: C,
        invalidateLivePaintPreviewCaches: B,
        pushHistory: R,
        requestDraw: J,
        shotViewCamera: _e,
        spaceScale: ke,
        spaceViewState: ge,
        stopTimelinePlayback: Se,
        syncViewToggleState: pe,
        updateCursor: fe,
        updateSidePanel: de
      } = _);
    },
    leaveFrameView: ce,
    measureFrameSafeRect: Z,
    getFrameViewLayout: U,
    getFrameViewRect: P,
    supportsFramePainting: he,
    zoomFrameViewAt: A,
    isFreeFrameView: k,
    frameContext: x,
    frameViewDistance: se,
    frameSpaceView: Q,
    frameTarget: b,
    startPanFrame: S,
    startFrameDrag: L,
    dragFrame: w,
    zoomFrameAt: F,
    flushFrameWheelCommit: T,
    cancelFrameCameraGesture: $,
    moveFrameByKeys: z,
    endFrameKeyMove: ne
  };
}
function _C(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J = 0;
  function _e() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function ke() {
    return String(_e() || "") === "lasso_fill";
  }
  function ge() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function Se(b, G) {
    const m = Number(G || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, m / 2048)
    };
  }
  function pe(b) {
    const G = String(b || "").trim();
    return G === "eraser" ? Dr : Dn[G] ? G : t.activeBrushPresetId || Dr;
  }
  function fe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (ge() || R());
  }
  function de() {
    var b;
    return fe() && ((b = t.pointerPos) == null ? void 0 : b.inside) === !0;
  }
  function re(b, G = !0) {
    const m = Number((b == null ? void 0 : b.x) || 0), S = Number((b == null ? void 0 : b.y) || 0), L = G !== !1, w = t.pointerPos || { x: 0, y: 0, inside: !1 }, F = w.inside !== L || Math.abs(w.x - m) > 0.01 || Math.abs(w.y - S) > 0.01;
    return t.pointerPos = { x: m, y: S, inside: L }, F;
  }
  function ye() {
    var $, _;
    if (!de()) return null;
    const b = t.primaryTool === "mask" ? "mask" : "paint", G = b === "mask" ? t.maskTool : t.paintTool, m = pe(G), S = Dn[m] || Dn[Dr], L = Number(t.brushSizes[m] ?? 10), w = Math.max(1, L) * Math.max(0.1, Number(S.sizeScale ?? 1)), F = Math.max(3, w * 0.5), z = b === "mask" ? G === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : G === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(t.paintColor), ne = b === "mask" ? G === "lasso_fill" ? 0.18 : 0.2 : G === "eraser" ? 0.06 : Oe(Math.max(0.16, Number(z.a ?? 1) * 0.3), 0.16, 0.52), T = b === "mask" ? 0.95 : G === "eraser" ? 0.75 : Oe(Math.max(0.46, Number(z.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: b,
      toolKind: G,
      preset: S,
      radius: F,
      fillStyle: _r(z, ne),
      strokeStyle: _r(z, T),
      x: Number((($ = t.pointerPos) == null ? void 0 : $.x) || 0),
      y: Number(((_ = t.pointerPos) == null ? void 0 : _.y) || 0),
      hotspotX: F,
      hotspotY: F
    };
  }
  function ce() {
    var D, X, be;
    const b = ye();
    if (!r) return;
    if (!b) {
      r.style.display = "none";
      return;
    }
    let G = b.radius * 2, m = b.radius * 2, S = "999px", L = 0, w = b.fillStyle, F = "1px solid rgba(222, 222, 222, 0.72)", z = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const ne = "rgba(222, 222, 222, 0.72)", T = "rgba(52, 52, 52, 0.72)";
    let $ = Number(b.hotspotX ?? G * 0.5), _ = Number(b.hotspotY ?? m * 0.5);
    if (b.toolKind === "lasso_fill")
      G = Cl, m = Cl, S = "0", F = "0", z = "none", $ = z2, _ = j2, w = B2(b.fillStyle, T, ne);
    else if (b.layerKind === "mask")
      w = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (b.toolKind === "marker") {
      const me = Math.max(1, Number(((D = b.preset) == null ? void 0 : D.aspect) ?? 1));
      G = Math.max(10, b.radius * 2 * me), m = Math.max(6, b.radius * 2), S = `${Math.min(6, m * 0.42)}px`, L = Number(((be = (X = b.preset) == null ? void 0 : X.angle) == null ? void 0 : be.value) || 0) * Vi;
    } else b.toolKind === "brush" ? w = `radial-gradient(circle at 50% 50%, ${b.strokeStyle} 0%, ${b.fillStyle} 45%, rgba(0,0,0,0) 100%)` : b.toolKind === "eraser" && (w = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(G)}px`, r.style.height = `${Math.round(m)}px`, r.style.borderRadius = S, r.style.border = F, r.style.boxShadow = z, r.style.background = w, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(b.x - $)}px, ${Math.round(b.y - _)}px) rotate(${L}deg)`;
  }
  function Z() {
    var ve;
    if (!n || !i) return;
    const b = t.primaryTool === "mask" ? "mask" : "paint", G = b === "mask" ? t.maskTool : t.paintTool;
    if (G === "lasso_fill") return;
    const m = pe(G), S = Dn[m] || Dn[Dr], L = Number(t.brushSizes[m] ?? 10), w = Math.max(1, L) * Math.max(0.1, Number(S.sizeScale ?? 1)), F = Math.max(6, w * 0.5), z = G === "eraser", ne = b === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : z ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(t.paintColor), T = b === "mask" ? _r(ne, 0.22) : z ? "rgba(255,255,255,0.14)" : _r(ne, Oe(Math.max(0.18, Number(ne.a ?? 1) * 0.34), 0.18, 0.56)), $ = b === "mask" ? _r(ne, 0.96) : z ? "rgba(255,255,255,0.72)" : _r(ne, Oe(Math.max(0.56, Number(ne.a ?? 1) * 0.96), 0.56, 1));
    let _ = F * 2, D = F * 2, X = "999px", be = 0, me = T;
    const xe = "rgba(222, 222, 222, 0.72)", q = "rgba(52, 52, 52, 0.72)";
    if (b === "mask")
      me = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (G === "marker") {
      const O = Math.max(1, Number((S == null ? void 0 : S.aspect) ?? 1));
      _ = Math.max(16, F * 2 * O), D = Math.max(10, F * 2), X = `${Math.min(8, D * 0.42)}px`, be = Number(((ve = S == null ? void 0 : S.angle) == null ? void 0 : ve.value) || 0) * Vi;
    } else G === "brush" ? me = `radial-gradient(circle at 50% 50%, ${$} 0%, ${T} 48%, rgba(0,0,0,0) 100%)` : G === "lasso_fill" ? (_ = Math.max(18, F * 1.8), D = _, me = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${$} 43%, ${$} 58%, rgba(0,0,0,0) 59%)`) : z && (me = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(_)}px`, i.style.height = `${Math.round(D)}px`, i.style.borderRadius = X, i.style.background = me, i.style.border = `1px solid ${xe}`, i.style.boxShadow = `0 0 0 1px ${q}`, i.style.transform = `rotate(${be}deg)`, J && (clearTimeout(J), J = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function U() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), J && clearTimeout(J), J = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), J = 0;
    }, 180));
  }
  function P(b, G, m, S) {
    const L = pe(G), w = Dn[L] || Dn[Dr], F = t.brushSizes[L] ?? 10, z = Math.max(1, F) * Math.max(0.1, w.sizeScale ?? 1), ne = Se(S, z), T = m.map((_) => ({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: Number.isFinite(Number(_ == null ? void 0 : _.widthScale)) ? Math.max(0, Number(_.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(_ == null ? void 0 : _.pressureLike)) ? Math.max(0, Number(_.pressureLike)) : 1
    })), $ = {
      id: oo(b),
      actionGroupId: oo("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: G,
      size: z,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: ne.radiusModel,
      radiusValue: ne.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: T.map((_) => ({ ..._ })),
        points: T.map((_) => ({ ..._ }))
      }
    };
    return Gp($, w), t.mode, Number(w.aspect ?? 1), Number($.aspect ?? 1), String($.stampKind || ""), Number($.size || 0), String($.radiusModel || ""), Number($.radiusValue || 0), { ...$.targetSpace }, $;
  }
  function he(b, G, m, S) {
    const L = m.map((ne) => ({
      ...ne,
      t: Number((ne == null ? void 0 : ne.t) || 0),
      widthScale: Number.isFinite(Number(ne == null ? void 0 : ne.widthScale)) ? Math.max(0, Number(ne.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(ne == null ? void 0 : ne.pressureLike)) ? Math.max(0, Number(ne.pressureLike)) : 1
    })), w = pe(G), F = Dn[w] || Dn[Dr], z = {
      id: oo(b),
      actionGroupId: oo("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: G,
      size: 10,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: L.map((ne) => ({ ...ne }))
      }
    };
    return Gp(z, F), t.mode, Number(F.aspect ?? 1), Number(z.aspect ?? 1), String(z.stampKind || ""), { ...z.targetSpace }, z;
  }
  function A(b) {
    const G = o.painting || (o.painting = Mo(null)), m = G[b] || (G[b] = { strokes: [] });
    return Array.isArray(m.strokes) || (m.strokes = []), m.strokes;
  }
  function I(b, G, m = performance.now()) {
    let S;
    if (t.mode === "frame") {
      const T = f();
      if (!T || (S = B(G, T, m), !S)) return !1;
    } else
      S = C(G, m);
    if (!S) return !1;
    const L = b.stroke.geometry.rawPoints || b.stroke.geometry.points, w = b.stroke.geometry.points, F = L[L.length - 1];
    if (F) {
      const T = Math.abs(Number(S.u ?? S.x ?? 0) - Number(F.u ?? F.x ?? 0)), $ = Math.abs(Number(S.v ?? S.y ?? 0) - Number(F.v ?? F.y ?? 0));
      if (T < 15e-4 && $ < 15e-4) return !1;
    }
    const z = {
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    L.push({ ...z }), w.push({ ...z });
    const ne = p(b);
    if (ne) {
      const T = t.paintEngine.ensureTarget(ne);
      t.paintEngine.appendStrokePoint(T, Number(z.u ?? 0), Number(z.v ?? 0), b.stroke);
    }
    return !0;
  }
  function k(b, G, m = performance.now()) {
    var F, z;
    let S;
    if (t.mode === "frame") {
      const ne = f();
      if (!ne) return !1;
      S = B(G, ne, m);
    } else
      S = C(G, m);
    const L = (z = (F = b == null ? void 0 : b.stroke) == null ? void 0 : F.geometry) == null ? void 0 : z.points;
    if (!S || !Array.isArray(L)) return !1;
    const w = L[L.length - 1];
    if (w) {
      const ne = Math.abs(Number(S.u ?? S.x ?? 0) - Number(w.u ?? w.x ?? 0)), T = Math.abs(Number(S.v ?? S.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (ne < 15e-4 && T < 15e-4) return !1;
    }
    return L.push({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function x(b) {
    var O, oe, V, ee, K;
    const G = (b == null ? void 0 : b.stroke) || null;
    if (!G || (b == null ? void 0 : b.layerKind) !== "paint" || String((G == null ? void 0 : G.toolKind) || "") !== "eraser") return !1;
    te();
    const m = p(), S = c(m.width, m.height);
    if (!H(S, G, { w: m.width, h: m.height })) return !1;
    const L = ((oe = (O = S.ctx) == null ? void 0 : O.getImageData(0, 0, m.width, m.height)) == null ? void 0 : oe.data) || null;
    if (!L) return !1;
    const w = new Map(g().map((Y) => [String((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "").trim(), Y ? { ...Y } : null])), F = [], z = [], ne = [...h().filter((Y) => String((Y == null ? void 0 : Y.layerKind) || "paint") !== "paint")];
    let T = !1, $ = v().reduce((Y, j) => Math.max(Y, Number((j == null ? void 0 : j.z_index) || 0)), -1) + 1;
    function _(Y, j, M, ie = 8) {
      let le = j, we = M, N = -1, ue = -1;
      for (let Me = 0; Me < M; Me += 1)
        for (let Ee = 0; Ee < j; Ee += 1)
          Y[(Me * j + Ee) * 4 + 3] <= ie || (Ee < le && (le = Ee), Me < we && (we = Me), Ee > N && (N = Ee), Me > ue && (ue = Me));
      return N < le || ue < we ? null : { minX: le, minY: we, maxX: N, maxY: ue };
    }
    const D = _(L, m.width, m.height, 8);
    if (!D) return !1;
    function X(Y, j) {
      return !Y || !j ? !1 : !(Y.maxX < j.minX || j.maxX < Y.minX || Y.maxY < j.minY || j.maxY < Y.minY);
    }
    function be(Y, j) {
      const M = d((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "", "paint", j);
      if (!M) return null;
      const ie = M.centerUv.u - M.halfW, le = M.centerUv.u + M.halfW, we = M.centerUv.v - M.halfH, N = M.centerUv.v + M.halfH, ue = m.width, Me = m.height;
      return {
        minX: Math.floor((ie % 1 + 1) % 1 * ue),
        maxX: Math.ceil((le % 1 + 1) % 1 * ue),
        minY: Math.floor(Oe(we, 0, 1) * Me),
        maxY: Math.ceil(Oe(N, 0, 1) * Me),
        wraps: le - ie >= 1 || ie < 0 || le > 1
      };
    }
    function me(Y) {
      const j = (Y == null ? void 0 : Y.bbox) || null;
      if (!j) return null;
      const M = (Y == null ? void 0 : Y.transform) || {}, ie = m.width, le = m.height, we = Number(j.u0 || 0) + Number(M.du || 0), N = Number(j.u1 || 0) + Number(M.du || 0), ue = Number(j.v0 || 0) + Number(M.dv || 0), Me = Number(j.v1 || 0) + Number(M.dv || 0);
      return {
        minX: Math.floor((we % 1 + 1) % 1 * ie),
        maxX: Math.ceil((N % 1 + 1) % 1 * ie),
        minY: Math.floor(Oe(ue, 0, 1) * le),
        maxY: Math.ceil(Oe(Me, 0, 1) * le),
        wraps: N - we >= 1 || we < 0 || N > 1
      };
    }
    function xe(Y) {
      return Y ? Y.wraps ? X(D, { minX: 0, maxX: Y.maxX, minY: Y.minY, maxY: Y.maxY }) || X(D, { minX: Y.minX, maxX: m.width - 1, minY: Y.minY, maxY: Y.maxY }) : X(D, Y) : !0;
    }
    function q(Y) {
      if (!Y) return { touched: !1, canvas: null };
      const j = c(m.width, m.height, { readback: !0 });
      j.ctx.drawImage(Y, 0, 0);
      const M = j.ctx.getImageData(0, 0, m.width, m.height);
      j.ctx.save(), j.ctx.globalCompositeOperation = "destination-out", j.ctx.drawImage(S.canvas, 0, 0), j.ctx.restore();
      const ie = j.ctx.getImageData(0, 0, m.width, m.height);
      for (let le = 0; le < m.width * m.height; le += 1) {
        if (L[le * 4 + 3] <= 8) continue;
        const N = M.data[le * 4 + 3], ue = ie.data[le * 4 + 3];
        if (N > ue)
          return { touched: !0, canvas: j.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ve(Y, j, M) {
      const ie = Number(M == null ? void 0 : M.z_index), le = l(Y, j, M).map((we, N) => ({
        ...we,
        z_index: Number.isFinite(ie) ? ie + N * 1e-3 : $ + N * 1e-3
      }));
      return le.length && ($ = Math.max($, ...le.map((we) => Number((we == null ? void 0 : we.z_index) || 0))) + 1), le;
    }
    for (const Y of g()) {
      const j = String((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "").trim();
      if (!j) continue;
      const M = y(j, "paint");
      if (!xe(be(Y, M))) {
        z.push(Y), F.push(...M);
        continue;
      }
      const ie = ((ee = (V = t.paintEngine) == null ? void 0 : V.getGroupTarget) == null ? void 0 : ee.call(V, j)) || null, le = ((K = ie == null ? void 0 : ie.committedPaint) == null ? void 0 : K.canvas) || null;
      if (!le) {
        z.push(Y), F.push(...M);
        continue;
      }
      const we = q(le);
      if (!we.touched || !we.canvas) {
        z.push(Y), F.push(...M);
        continue;
      }
      T = !0;
      const N = ve(we.canvas, "paint", w.get(j) || Y || {});
      ne.push(...N);
    }
    for (const Y of h().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") === "paint")) {
      if (!xe(me(Y))) {
        ne.push(Y);
        continue;
      }
      const j = s(Y, null);
      if (!j) {
        ne.push(Y);
        continue;
      }
      const M = q(j);
      if (!M.touched || !M.canvas) {
        ne.push(Y);
        continue;
      }
      T = !0;
      const ie = ve(M.canvas, "paint", Y);
      ne.push(...ie);
    }
    return T ? (o.painting.paint.strokes = F, o.painting.groups = z.sort((Y, j) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), o.painting.raster_objects = ne.sort((Y, j) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function se(b) {
    var F, z, ne, T, $;
    if ((((z = (F = b.stroke) == null ? void 0 : F.geometry) == null ? void 0 : z.rawPoints) || ((T = (ne = b.stroke) == null ? void 0 : ne.geometry) == null ? void 0 : T.points) || []).length >= 1) {
      E(b);
      const _ = p(b);
      _ && (String((($ = b.stroke) == null ? void 0 : $.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(_) : t.paintEngine.commitActiveStroke(b.stroke, _)), b._hasCommittedSegments = !0;
    }
    const m = b.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, L = P(b.layerKind, m.toolKind, [], S);
    L.actionGroupId = m.actionGroupId, b.stroke = L;
    const w = p(b);
    w && t.paintEngine.beginStroke(L, w);
  }
  function Q(b) {
    var F, z;
    if ((((z = (F = b.stroke) == null ? void 0 : F.geometry) == null ? void 0 : z.points) || []).length >= 3) {
      E(b);
      const ne = p(b);
      ne && t.paintEngine.commitActiveStroke(b.stroke, ne), b._hasCommittedSegments = !0;
    }
    const m = b.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, L = he(b.layerKind, m.toolKind, [], S);
    L.actionGroupId = m.actionGroupId, b.stroke = L;
    const w = p(b);
    w && t.paintEngine.beginStroke(L, w);
  }
  function E(b) {
    var w, F, z, ne;
    const G = ((w = b == null ? void 0 : b.stroke) == null ? void 0 : w.geometry) || null;
    if (!G) return !1;
    const m = String(((F = b == null ? void 0 : b.stroke) == null ? void 0 : F.toolKind) || "pen");
    if (b.layerKind === "paint" && m === "eraser")
      return G.geometryKind !== "lasso_fill" && (G.processedPoints = W(G.rawPoints || G.points || [], b.stroke.targetSpace, !0)), x(b);
    const S = b.layerKind === "paint" && m !== "eraser";
    if (G.geometryKind === "lasso_fill")
      return (Array.isArray(G.points) ? G.points : []).length < 3 ? !1 : (S && u((z = b.stroke) == null ? void 0 : z.actionGroupId), A(b.layerKind).push(b.stroke), !0);
    const L = G.rawPoints || G.points || [];
    return L.length < 1 ? !1 : (G.processedPoints = W(L, b.stroke.targetSpace, !0), S && u((ne = b.stroke) == null ? void 0 : ne.actionGroupId), A(b.layerKind).push(b.stroke), !0);
  }
  return {
    connect(b) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: p,
        getDisplayListObjects: v,
        getPaintingGroupList: g,
        getRasterObjectList: h,
        getStrokeGroupStrokes: y,
        processFreehandPoints: W,
        rasterizeStrokeToSurface: H,
        rebuildPaintEngineIfNeeded: te,
        screenPosToErpPoint: C,
        screenPosToFrameAsErpPoint: B,
        supportsFramePainting: R
      } = b);
    },
    isActiveLassoTool: ke,
    supportsErpPainting: ge,
    getBrushPresetIdForTool: pe,
    isPaintCursorEnabled: fe,
    isActivePaintCursorVisible: de,
    setPointerPos: re,
    syncPaintCursorElement: ce,
    showPaintSizePreview: Z,
    hidePaintSizePreview: U,
    buildFreehandStrokeRecord: P,
    buildLassoFillStrokeRecord: he,
    getPaintingLayerList: A,
    appendPaintPoint: I,
    appendLassoPoint: k,
    _segmentFrameStroke: se,
    _segmentFrameLassoFill: Q,
    commitPaintInteraction: E
  };
}
function wC(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se;
  function pe() {
    return ge().reverse();
  }
  function fe(U) {
    var he;
    if (n && t.mode === "frame") {
      const A = s(), I = l(A);
      if (!A || !I || !(Number((U == null ? void 0 : U.x) || 0) >= Number(I.x || 0) && Number((U == null ? void 0 : U.x) || 0) <= Number(I.x || 0) + Number(I.w || 0) && Number((U == null ? void 0 : U.y) || 0) >= Number(I.y || 0) && Number((U == null ? void 0 : U.y) || 0) <= Number(I.y || 0) + Number(I.h || 0))) return null;
      const x = J(U, A, performance.now()), se = x ? o(x) : null;
      if (se)
        for (const E of a()) {
          if (!H(E)) continue;
          const b = Se(E, se);
          if (b && Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1) {
            const G = R(E);
            if (G != null && G.visible) return { item: E, geom: G };
          }
        }
      const Q = c(!1).slice().sort((E, b) => Number((b == null ? void 0 : b.z_index) || 0) - Number((E == null ? void 0 : E.z_index) || 0));
      for (const E of Q) {
        if (E.type === "strokeGroup") {
          const m = f(B("paint", E.actionGroupId || E.id || ""));
          if (!m) continue;
          const S = R(m);
          if (!(S != null && S.visible)) continue;
          const L = Array.isArray(S.strokePaths) ? S.strokePaths : [];
          for (const w of L) {
            const F = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
            if (!F.length) continue;
            if (w.closed && F.length >= 3 && ei(U, F)) return { item: m, geom: S };
            const z = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
            for (let ne = 0; ne < F.length - 1; ne += 1)
              if (Uc(U, F[ne], F[ne + 1]) <= z * z) return { item: m, geom: S };
            if (F.length === 1 && Zo(U, F[0]) <= z * z) return { item: m, geom: S };
          }
          continue;
        }
        if (E.type === "rasterObject") {
          const m = d(C(((he = E.item) == null ? void 0 : he.id) || E.id || ""));
          if (!m) continue;
          const S = R(m);
          if (p(m, S, U, x)) return { item: m, geom: S };
          continue;
        }
        const b = E.item;
        if (!b || !H(b) || !se) continue;
        const G = Se(b, se);
        if (G && Number(G.x) >= 0 && Number(G.x) <= 1 && Number(G.y) >= 0 && Number(G.y) <= 1) {
          const m = R(b);
          if (m != null && m.visible) return { item: b, geom: m };
        }
      }
      if (!se) return null;
      for (const E of pe()) {
        const b = Se(E, se);
        if (!b || !(Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1)) continue;
        const G = R(E);
        if (G != null && G.visible) return { item: E, geom: G };
      }
      return null;
    }
    const P = [
      ...c(!1).slice().sort((A, I) => Number((I == null ? void 0 : I.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0)).map((A) => {
        var I;
        return A.type === "strokeGroup" ? f(B("paint", A.actionGroupId || A.id || "")) : A.type === "rasterObject" ? d(C(((I = A.item) == null ? void 0 : I.id) || A.id || "")) : A.item;
      }).filter(Boolean),
      ...pe(),
      ...n ? a().filter((A) => W(A)) : []
    ];
    for (const A of P) {
      if (te(A)) {
        const k = R(A);
        if (!(k != null && k.visible)) continue;
        const x = Array.isArray(k.strokePaths) ? k.strokePaths : [];
        for (const se of x) {
          const Q = Array.isArray(se == null ? void 0 : se.points) ? se.points : [];
          if (!Q.length) continue;
          if (se.closed && Q.length >= 3 && ei(U, Q)) return { item: A, geom: k };
          const E = Math.max(8, Number((se == null ? void 0 : se.lineWidth) || 0) * 0.5 + 6);
          for (let b = 0; b < Q.length - 1; b += 1)
            if (Uc(U, Q[b], Q[b + 1]) <= E * E) return { item: A, geom: k };
          if (Q.length === 1 && Zo(U, Q[0]) <= E * E) return { item: A, geom: k };
        }
        continue;
      }
      if (y(A)) {
        const k = R(A);
        if (!(k != null && k.visible)) continue;
        if (p(A, k, U)) return { item: A, geom: k };
        continue;
      }
      const I = R(A);
      if (I.visible && ei(U, I.corners))
        return { item: A, geom: I };
    }
    return null;
  }
  function de(U, P, he = null) {
    if (!U || !U.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (H(he)) return Pu(U, P);
    if (U.kind === "strokeGroup") {
      const A = U.corners.findIndex((k) => Zo(k, P) <= 121);
      if (A >= 0) {
        const k = U.corners[A], x = k.x - U.center.x, se = k.y - U.center.y, Q = x * se >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: A, cursor: Q };
      }
      const I = Array.isArray(U.strokePaths) ? U.strokePaths : [];
      for (const k of I) {
        const x = Array.isArray(k == null ? void 0 : k.points) ? k.points : [];
        if (k.closed && x.length >= 3 && ei(P, x)) return { kind: "move", cursor: "default" };
        const se = Math.max(8, Number((k == null ? void 0 : k.lineWidth) || 0) * 0.5 + 6);
        for (let Q = 0; Q < x.length - 1; Q += 1)
          if (Uc(P, x[Q], x[Q + 1]) <= se * se) return { kind: "move", cursor: "default" };
      }
      return ei(P, U.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (U.kind === "rasterObject") {
      const A = U.corners.findIndex((I) => Zo(I, P) <= 121);
      if (A >= 0) {
        const I = U.corners[A], k = I.x - U.center.x, x = I.y - U.center.y, se = k * x >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: A, cursor: se };
      }
      return ei(P, U.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return _k(U, P, {
      edges: i === "cutout" || W(he),
      resize: !(W(he) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function re(U, P) {
    return {
      x0: Math.min(Number((U == null ? void 0 : U.x) || 0), Number((P == null ? void 0 : P.x) || 0)),
      y0: Math.min(Number((U == null ? void 0 : U.y) || 0), Number((P == null ? void 0 : P.y) || 0)),
      x1: Math.max(Number((U == null ? void 0 : U.x) || 0), Number((P == null ? void 0 : P.x) || 0)),
      y1: Math.max(Number((U == null ? void 0 : U.y) || 0), Number((P == null ? void 0 : P.y) || 0))
    };
  }
  function ye(U, P) {
    return !!U && !!P && Number(P.x) >= Number(U.x0) && Number(P.x) <= Number(U.x1) && Number(P.y) >= Number(U.y0) && Number(P.y) <= Number(U.y1);
  }
  function ce(U, P) {
    if (!U || !(P != null && P.visible) || !Array.isArray(P.corners)) return !1;
    if (P.corners.some((I) => ye(U, I))) return !0;
    const he = (Number(U.x0) + Number(U.x1)) * 0.5, A = (Number(U.y0) + Number(U.y1)) * 0.5;
    return !!ei({ x: he, y: A }, P.corners);
  }
  function Z(U) {
    if (ke(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? _e("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? _e("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? _e("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? _e("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? _e("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? _e(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? _e("grabbing") : _e("default");
      return;
    }
    if (v()) {
      _e("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        _e(R2);
        return;
      }
      if (t.primaryTool !== "cursor") {
        _e("default");
        return;
      }
      _e("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      _e("default");
      return;
    }
    if (t.gizmoAxis) {
      _e("grab");
      return;
    }
    const P = u(), he = P ? R(P) : null, A = P ? h(P) : !1, I = A ? { kind: "none", cursor: "default" } : de(he, U, P);
    if (!A && I.kind !== "none") {
      _e(I.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && fe(U)) {
      _e("default");
      return;
    }
    _e(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(U) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: s,
        getCutoutSelectableItemsForHit: a,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: p,
        isActivePaintCursorVisible: v,
        isErpCamera: g,
        isItemLocked: h,
        isRasterObjectItem: y,
        isShotItem: W,
        isStickerItem: H,
        isStrokeGroupItem: te,
        makeRasterObjectSelectionId: C,
        makeStrokeGroupSelectionId: B,
        objectGeom: R,
        screenPosToFrameAsErpPoint: J,
        setCanvasCursor: _e,
        syncPaintCursorElement: ke,
        upstreamSkyStickers: ge,
        worldDirToFrameLocalPoint: Se
      } = U);
    },
    hitObjectAt: fe,
    handleHit: de,
    rectFromPoints: re,
    rectIntersectsGeom: ce,
    updateCursor: Z
  };
}
function kC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: s,
    state: a,
    tooltip: l,
    tooltipEl: c,
    type: d,
    uiState: u
  } = e;
  let f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe = !1;
  function fe() {
    return pe;
  }
  function de() {
    if (!o) return;
    if (pe = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || te() && R()) {
      const k = ye();
      pe = k.visible, ce(k);
      return;
    }
    const P = y(), he = W();
    if (!P && he.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const A = H(), I = TA({
      type: d,
      selected: P,
      selectedItems: he,
      selectedKind: A,
      geom: he.length > 1 ? h(he) : Se(P),
      allLocked: f(he),
      anyLocked: he.some((k) => J(k)),
      selectedLocked: J(P),
      activeAspect: _e(P) && C() ? wo : Vr(P),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: B,
      isStickerHidden: ge,
      canRestoreSelectedToInitial: p,
      iconSet: We,
      cameraShot: t,
      coverage: a.coverage,
      upstream: re(he)
    });
    ce(I);
  }
  function re(P) {
    const he = P.filter(Ut);
    return he.length ? { editable: he.every(_l) } : null;
  }
  function ye() {
    const P = ke() && !n.interaction ? g().space : null;
    if (!(P != null && P.gizmo)) return { visible: !1 };
    const he = v(), A = [...P.stickers, ...P.upstreamStickers].find((se) => se.id === n.worldSelectedId), k = (A ? Rd(A) : [P.gizmo.transform.position]).map((se) => Ps(he, se, r.width, r.height)).filter(Boolean), x = v_(he, P.gizmo.transform.position, P.gizmo.mode, r.width, r.height);
    return DA({ corners: k, gizmoBox: x, gizmoMode: P.gizmo.mode, camera: te() });
  }
  function ce(P) {
    var x, se;
    if (!P.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const he = (Q, E) => RA(P.anchor, Q, E, r.width, r.height), A = Math.max(1, Number(((x = n.menuSize) == null ? void 0 : x.w) || 220)), I = Math.max(1, Number(((se = n.menuSize) == null ? void 0 : se.h) || 40)), k = he(A, I);
    if (!k) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: k.left,
      top: k.top,
      items: P.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const Q = o.getBoundingClientRect(), E = Math.round(Number((Q == null ? void 0 : Q.width) || 0)) || 220, b = Math.round(Number((Q == null ? void 0 : Q.height) || 0)) || 40;
      n.menuSize = { w: E, h: b, measured: !0 };
      const G = he(E, b);
      G && (u.selectionMenu.left = G.left, u.selectionMenu.top = G.top);
    });
  }
  function Z() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function U(P) {
    if (!c || !P || !P.isConnected) return;
    const he = String(P.getAttribute("data-tip") || "").trim();
    if (!he) return;
    u.tooltip.text = he, u.tooltip.visible = !0;
    const A = P;
    i.requestFrame(() => {
      var F, z;
      if (l.target !== A || !c || !(A != null && A.isConnected)) return;
      const I = s.getBoundingClientRect(), k = A.getBoundingClientRect(), x = 8, se = 12, Q = Math.round(Number(((F = c.getBoundingClientRect()) == null ? void 0 : F.width) || 0)) || 100, E = Math.round(Number(((z = c.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, b = !!A.closest(".pano-floating-left"), G = !!A.closest(".pano-frame-rail"), m = !!A.closest(".pano-paint-footer") || !!A.closest(".pano-paint-color-float");
      let S = "", L = k.left - I.left + k.width * 0.5 - Q * 0.5, w = k.top - I.top - E - se;
      if (A.closest(".pano-floating-top") && (w = k.bottom - I.top + se), b)
        S = "tool-rail", L = k.right - I.left + 10, w = k.top - I.top + k.height * 0.5 - E * 0.5, L = Oe(L, x, Math.max(x, I.width - Q - x)), w = Oe(w, x, Math.max(x, I.height - E - x));
      else if (G)
        S = "frame-rail", L = k.left - I.left - Q - 10, w = k.top - I.top + k.height * 0.5 - E * 0.5, L = Oe(L, x, Math.max(x, I.width - Q - x)), w = Oe(w, x, Math.max(x, I.height - E - x));
      else if (m) {
        S = "footer";
        const ne = A.closest(".pano-paint-footer"), T = ne ? ne.getBoundingClientRect() : k;
        L = T.left - I.left + T.width * 0.5 - Q * 0.5, w = T.bottom - I.top + 5, L = Oe(L, x, Math.max(x, I.width - Q - x)), w = Math.max(x, w);
      }
      L = Oe(L, x, Math.max(x, I.width - Q - x)), w = Math.max(x, w), u.tooltip.left = L, u.tooltip.top = w, u.tooltip.variant = S, u.tooltip.visible = !0;
    });
  }
  return {
    connect(P) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: p,
        currentSpaceCamera: v,
        editorViewInput: g,
        getMultiSelectionGeom: h,
        getSelected: y,
        getSelectedItems: W,
        getSelectedKind: H,
        isCameraSelected: te,
        isErpCamera: C,
        isExternalSticker: B,
        isFreeSpaceView: R,
        isItemLocked: J,
        isShotItem: _e,
        isSpaceView: ke,
        isStickerHidden: ge,
        objectGeom: Se
      } = P);
    },
    isWorldMenuShown: fe,
    updateSelectionMenu: de,
    hideTooltip: Z,
    showTooltipFor: U
  };
}
function xC(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: s,
    readOnly: a,
    runtime: l,
    sceneV2: c,
    shotEditor: d,
    state: u,
    stateV2: f,
    timeline: p,
    type: v,
    viewController: g
  } = e;
  let h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q, E, b, G, m, S, L, w, F, z, ne, T, $, _, D, X, be, me, xe, q, ve, O, oe, V, ee, K, Y, j, M, ie, le, we, N, ue, Me, Ee, Te, $e, ze, Ce, He, ae, Ie, Ae, Fe, Ge, Ke, Ue, vt, yt, Tt, pt, en, qe, cn, Bt, gi, Yr, yi, an, vn, qr, mr, rr, Hs, Gi, Co, Io, Gs, Ks, Ws, Ki, Pt, Bn, ir, Eo, zn, Us, Bs, Ys, Xr = null;
  function ic(Re) {
    p.selection && (p.selection = null, Ws());
    const De = Fe(Re);
    Xr = De, pt(De, !0), pe(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const Pe = V(), St = oe(), nt = Pe || St ? Dk(Eo(), Re) : null;
    if (St && nt) {
      Re.preventDefault(), nt === "look" ? vn(De, Re.pointerId) : an(nt, De, Re.pointerId);
      return;
    }
    if (nt === "look") {
      Re.preventDefault();
      const Xe = Ge(Re);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, Re.pointerId, performance.now()), Pt(De), t.setPointerCapture(Re.pointerId);
      return;
    }
    if (nt) {
      Re.preventDefault(), qr(nt, De, Re.pointerId);
      return;
    }
    if ((Pe || St) && Re.button !== 0) {
      Re.preventDefault();
      return;
    }
    if (Re.button === 1) {
      if (Re.preventDefault(), n.mode === "frame") {
        const Xe = se();
        if (!Xe || a || Xe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Xe,
          last: De,
          start: {
            yaw_deg: Number(Xe.yaw_deg || 0),
            pitch_deg: Number(Xe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Xe = n.mode === "unwrap" ? De : Ge(Re);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, Re.pointerId, performance.now());
      }
      Pt(De), t.setPointerCapture(Re.pointerId);
      return;
    }
    if (Re.button !== 0) return;
    if (n.mode === "frame" && (Re.altKey || Re.shiftKey) && !a) {
      const Xe = se(), Be = m(Xe);
      if (!Xe || Xe.locked === !0 || !Be) return;
      const Qe = u0({
        frame: Be,
        point: De,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: Re.shiftKey,
        altKey: Re.altKey,
        allowAlt: !0
      });
      if (!Qe) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Xe,
        center: Qe.center,
        lastAngle: Qe.lastAngle,
        accumulatedRad: Qe.accumulatedRad,
        rollGesture: Qe,
        start: { roll_deg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Qe.source === "alt",
        source: Qe.source
      }, t.setPointerCapture(Re.pointerId), Re.preventDefault(), Gs(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      vn(De, Re.pointerId), Re.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && To(Re, De);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (Hs() || Gi())) {
      if (!Ee()) return;
      rr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Be = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Gi() ? se() : null, Yt = { kind: "ERP_GLOBAL" }, Ct = Qe ? Ue(De, Qe, performance.now()) : Ke(De, performance.now());
      if (!Ct) {
        Pt(De);
        return;
      }
      n.interaction = {
        kind: Be === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: oo("live"),
        stroke: Be === "lasso_fill" ? ke(Xe, Be, [Ct], Yt) : _e(Xe, Be, [Ct], Yt)
      }, ve();
      const Cr = Q(n.interaction);
      if (Cr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Cr), n.interaction.kind === "paint_stroke") {
          const Wi = n.paintEngine.ensureTarget(Cr), Ui = Number((Ct == null ? void 0 : Ct.u) ?? (Ct == null ? void 0 : Ct.x) ?? 0), Bi = Number((Ct == null ? void 0 : Ct.v) ?? (Ct == null ? void 0 : Ct.y) ?? 0);
          n.paintEngine.appendStrokePoint(Wi, Ui, Bi, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Cr);
      Pt(De), t.setPointerCapture(Re.pointerId), Ae();
      return;
    }
    const At = _(), Je = $(), et = At.length > 1 ? L(At) : Je ? Me(Je) : null;
    if (n.primaryTool === "cursor" && (Re.ctrlKey || Re.metaKey)) {
      n.interaction = { kind: "marquee_select", start: De, current: De }, Pt(De), t.setPointerCapture(Re.pointerId), Ae({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && ge() && V() && yi(Re, De) || n.primaryTool === "cursor" && c && M() && qs(Re, De)) return;
    if (At.length > 1 && (et != null && et.visible)) {
      if ((At.some((Be) => ee(Be)) ? { kind: "none" } : me(et, De)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: At.map((Be) => Be),
          offset: { x: De.x - et.center.x, y: De.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: At.filter((Be) => ie(Be)).map((Be) => ({
            id: String(Be.id || ""),
            yaw_deg: Number(ze(Be).yaw_deg || 0),
            pitch_deg: Number(ze(Be).pitch_deg || 0),
            center: (() => {
              var Yt, Ct;
              const Qe = Me(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((Ct = Qe.center) == null ? void 0 : Ct.y) || 0) } : { x: De.x, y: De.y };
            })()
          })),
          strokeSnapshots: At.filter((Be) => le(Be)).map((Be) => ({
            id: String(Be.actionGroupId || Be.id || ""),
            layerKind: String(Be.layerKind || "paint"),
            snapshot: fn(X(Be.actionGroupId, Be.layerKind)),
            frameSnapshot: fn(he(Be.actionGroupId, Be.layerKind)),
            center: (() => {
              var Yt, Ct;
              const Qe = Me(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((Ct = Qe.center) == null ? void 0 : Ct.y) || 0) } : { x: De.x, y: De.y };
            })(),
            centerUv: D(Be.actionGroupId, Be.layerKind)
          })),
          rasterSnapshots: At.filter((Be) => K(Be)).map((Be) => ({
            id: Te(Be.rasterObjectId || Be.id || ""),
            snapshot: fn(z().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Te(Be.rasterObjectId || Be.id || ""))),
            center: (() => {
              var Yt, Ct;
              const Qe = Me(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((Ct = Qe.center) == null ? void 0 : Ct.y) || 0) } : { x: De.x, y: De.y };
            })(),
            centerUv: F(Be)
          }))
        }, Pt(De), t.setPointerCapture(Re.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = ee(Je) ? { kind: "none" } : me(et, De, Je);
      if (Xe.kind === "scale") {
        n.interaction = le(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(De.x - et.center.x, De.y - et.center.y)),
          snapshot: fn(X(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: fn(he(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : K(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(De.x - et.center.x, De.y - et.center.y)),
          snapshot: fn(z().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Te(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(De.x - et.center.x, De.y - et.center.y)),
          startHFOV: Number(ze(Je).hFOV_deg || 20),
          startVFOV: Number(ze(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Pt(De), t.setPointerCapture(Re.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(De.x - et.center.x, De.y - et.center.y)),
          startHFOV: Number(ze(Je).hFOV_deg || 20),
          startVFOV: Number(ze(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Pt(De), t.setPointerCapture(Re.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = le(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(De.y - et.center.y, De.x - et.center.x),
          snapshot: fn(X(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: fn(he(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(ze(Je).rot_deg || ze(Je).roll_deg || 0),
          startAng: Math.atan2(De.y - et.center.y, De.x - et.center.x)
        }, Pt(De), t.setPointerCapture(Re.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (le(Je)) {
          const Be = n.mode === "frame" ? (() => {
            const Qe = se();
            return Qe ? Ue(De, Qe, performance.now()) : null;
          })() : Ke(De, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Be,
            snapshot: fn(X(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: fn(he(Je.actionGroupId, Je.layerKind))
          }, Pt(De), t.setPointerCapture(Re.pointerId);
          return;
        }
        if (K(Je)) {
          const Be = n.mode === "frame" ? (() => {
            const Qe = se();
            return Qe ? Ue(De, Qe, performance.now()) : null;
          })() : Ke(De, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Be,
            snapshot: fn(z().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Te(Je.rasterObjectId || Je.id || "")))
          }, Pt(De), t.setPointerCapture(Re.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: De.x - et.center.x, y: De.y - et.center.y }
        }, Pt(De), t.setPointerCapture(Re.pointerId);
        return;
      }
    }
    const st = q(De);
    if (st) {
      const Xe = n.selectedId !== st.item.id;
      if (Xe && n.selectedId && (Ce(), ye()), en(st.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && ir(), Bn(), Ae(), ee(st.item)) {
        Pt(De);
        return;
      }
      n.interaction = {
        kind: le(st.item) ? "move_stroke_group" : K(st.item) ? "move_raster_object" : "move",
        item: st.item,
        offset: { x: De.x - st.geom.center.x, y: De.y - st.geom.center.y },
        startUv: le(st.item) || K(st.item) ? n.mode === "frame" ? (() => {
          const Be = se();
          return Be ? Ue(De, Be, performance.now()) : null;
        })() : Ke(De, performance.now()) : null,
        snapshot: le(st.item) ? fn(X(st.item.actionGroupId, st.item.layerKind)) : K(st.item) ? fn(z().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Te(st.item.rasterObjectId || st.item.id || ""))) : null,
        frameSnapshot: le(st.item) ? fn(he(st.item.actionGroupId, st.item.layerKind)) : null
      }, Pt(De), t.setPointerCapture(Re.pointerId);
      return;
    }
    const jn = !!n.selectedId;
    jn && (Ce(), ye()), fe(), jn && ir(), Bn(), Ae(), n.mode === "pano" && To(Re, De);
  }
  function Jr(Re, De) {
    return i.gizmoPointer(Re, ce(), De.x, De.y, t.width, t.height);
  }
  function qs(Re, De) {
    var et, st;
    const Pe = (et = P().space) == null ? void 0 : et.gizmo;
    if (Pe && Jr("hover", De) !== null && Jr("down", De))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: Pe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: Pe.transform,
        base: Wr(Tt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Re.pointerId), Pt(De), !0;
    const St = _(), nt = $(), At = St.length > 1 ? St.some((jn) => ee(jn)) ? "none" : me(L(St), De).kind : nt && !ee(nt) ? me(Me(nt), De, nt).kind : "none";
    if (At !== "none" && At !== "move") return !1;
    const Je = i.pickSticker(ce(), De.x, De.y, t.width, t.height);
    return ((st = mr(Je)) == null ? void 0 : st.placement) !== "world" ? !1 : (n.worldSelectedId !== Je && (n.selectedId && (Ce(), ye()), yt(Je), ir(), Bn(), Io(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Re.pointerId), !0);
  }
  function Oo(Re) {
    var St;
    const Pe = !!(n.worldSelectedId || O()) && n.primaryTool === "cursor" && M() && !!((St = P().space) != null && St.gizmo) ? Jr("hover", Re) : null;
    Pe !== n.gizmoAxis && (n.gizmoAxis = Pe, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: ft.VIEW }));
  }
  function oc(Re, De) {
    const Pe = Jr("move", De);
    if (Pe && Re.camera) {
      for (const [nt, At] of Object.entries(cp(Re.mode, Re.base, Re.start, Pe))) gn(u.camera, nt, n.frame, At);
      Co(), Re.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const St = mr(Re.id);
    !Pe || !St || (jS(St, n.frame, cp(Re.mode, Re.base, Re.start, Pe)), Re.changed = !0, we(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Fo(Re) {
    n.interaction = null, n.gizmoAxis = null, Re.kind === "world_gizmo" && (Jr("up", n.pointerPos), l.backgroundDirty = !0, Re.changed && (Ce(), de(), ir())), Pt(n.pointerPos), Ae();
  }
  function To(Re, De) {
    if (V()) {
      const St = Eo().emptyLeft;
      St && qr(St, De, Re.pointerId);
      return;
    }
    const Pe = Ge(Re);
    n.interaction = { kind: "view", last: Pe, lastTs: performance.now() }, g.startDrag(Pe.x, Pe.y, Re.pointerId, performance.now()), Pt(De), t.setPointerCapture(Re.pointerId);
  }
  function Xs(Re, De) {
    if (!f || !$e.playing || ($e.stop(), Re.kind === "frame_pan")) return;
    if (Re.kind === "frame_orbit") {
      const nt = A();
      nt && (Re.pivot = x(nt, k(nt), De));
      return;
    }
    if (Re.kind === "world_gizmo") {
      const nt = mr(Re.id);
      Re.camera ? Re.base = Z() : nt && (Re.base = Wr(nt, n.frame));
      return;
    }
    if (Re.kind === "move_multi") {
      const nt = L(Re.items);
      if (!(nt != null && nt.visible)) return;
      Re.offset = { x: De.x - nt.center.x, y: De.y - nt.center.y }, Re.startCenter = { x: nt.center.x, y: nt.center.y };
      for (const At of Re.stickerSnapshots) {
        const Je = Re.items.find((st) => String((st == null ? void 0 : st.id) || "") === At.id), et = Je ? Me(Je) : null;
        et != null && et.visible && (At.yaw_deg = Number(ze(Je).yaw_deg || 0), At.pitch_deg = Number(ze(Je).pitch_deg || 0), At.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Re.kind)) return;
    const Pe = Me(Re.item);
    if (!(Pe != null && Pe.visible)) return;
    const St = ze(Re.item);
    if (Re.kind === "move") {
      Re.offset = { x: De.x - Pe.center.x, y: De.y - Pe.center.y };
      return;
    }
    if (Re.center = Pe.center, Re.kind === "rotate") {
      Re.startRot = Number(St.rot_deg || St.roll_deg || 0), Re.startAng = Math.atan2(De.y - Pe.center.y, De.x - Pe.center.x);
      return;
    }
    Re.startDist = Math.max(1, Math.hypot(De.x - Pe.center.x, De.y - Pe.center.y)), Re.startHFOV = Number(St.hFOV_deg || 20), Re.startVFOV = Number(St.vFOV_deg || 20);
  }
  function Js(Re) {
    var St, nt, At, Je, et, st, jn, Xe, Be, Qe, Yt, Ct, Cr, Wi, Ui, Bi, na, ra, ia, oa, sa, aa;
    const De = Fe(Re);
    if (pt(De, !0), !n.interaction) {
      Oo(De), Pt(De);
      return;
    }
    Pt(De);
    const Pe = n.interaction;
    if (Xr && (De.x !== Xr.x || De.y !== Xr.y)) {
      const ct = Xr;
      Xr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Pe.kind) || Xs(Pe, ct);
    }
    if (Pe.kind !== "world_select") {
      if (Pe.kind === "world_gizmo") {
        oc(Pe, De);
        return;
      }
      if (Pe.kind === "paint_stroke") {
        const ct = typeof Re.getCoalescedEvents == "function" ? Re.getCoalescedEvents() : [Re];
        let ht = !1;
        ct.forEach((bt) => {
          const _t = Fe(bt);
          if (n.mode === "frame") {
            const Sn = se(), tn = Sn ? m(Sn) : null;
            if (tn) {
              const In = (_t.x - tn.x) / Math.max(1, tn.w), Vt = (_t.y - tn.y) / Math.max(1, tn.h);
              if (!(In >= 0 && In <= 1 && Vt >= 0 && Vt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, y(Pe));
            }
          }
          H(Pe, _t, performance.now()) && (ht = !0);
        }), ht && Ae({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (Pe.kind === "paint_lasso_fill") {
        const ct = typeof Re.getCoalescedEvents == "function" ? Re.getCoalescedEvents() : [Re];
        let ht = !1;
        if (ct.forEach((bt) => {
          const _t = Fe(bt);
          if (n.mode === "frame") {
            const Sn = se(), tn = Sn ? m(Sn) : null;
            if (tn) {
              const In = (_t.x - tn.x) / Math.max(1, tn.w), Vt = (_t.y - tn.y) / Math.max(1, tn.h);
              if (!(In >= 0 && In <= 1 && Vt >= 0 && Vt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, h(Pe));
            }
          }
          W(Pe, _t, performance.now()) && (ht = !0);
        }), ht) {
          const bt = Q(Pe);
          bt && n.paintEngine.updateActiveStroke(Pe.stroke, bt), Ae({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (Pe.kind === "view") {
        const ct = performance.now(), ht = n.mode === "unwrap" ? De : Ge(Re);
        g.moveDrag(ht.x, ht.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), Pe.lastTs = ct, Pe.last = ht, Ae({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (Pe.kind === "frame_pan" || Pe.kind === "frame_orbit") {
        U(Pe, De);
        return;
      }
      if (Pe.kind === "space_pan" || Pe.kind === "space_orbit") {
        const ct = gi();
        cn(Pe.kind === "space_pan" ? ag(ct, De.x - Pe.last.x, De.y - Pe.last.y, t.width, t.height, Pe.depth) : sg(ct, De.x - Pe.last.x, De.y - Pe.last.y, t.height, Pe.pivot)), Pe.last = De;
        return;
      }
      if (Pe.kind === "pan_frame") {
        const ct = G(Pe.shot);
        if (!ct || !Pe.shot) return;
        const ht = De.x - Pe.last.x, bt = De.y - Pe.last.y, _t = f0(Pe.shot, {
          dx: ht,
          dy: bt,
          focalPx: ct.focalPx,
          invertX: ((St = u.ui_settings) == null ? void 0 : St.invert_view_x) === !0,
          invertY: ((nt = u.ui_settings) == null ? void 0 : nt.invert_view_y) === !0
        });
        Pe.shot.yaw_deg = _t.yaw_deg, Pe.shot.pitch_deg = _t.pitch_deg, Pe.changed = Pe.changed || Math.abs(ht) > 0 || Math.abs(bt) > 0, Pe.last = De, Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "roll_frame") {
        if (Pe.source === "knob") return;
        B(Pe, De, Re);
        return;
      }
      if (Pe.kind === "move") {
        const ct = De.x - Pe.offset.x, ht = De.y - Pe.offset.y;
        if (n.mode === "frame" && d) {
          const bt = se(), _t = m(bt);
          if (!bt || !_t) return;
          const Sn = {
            x: Oe((ct - _t.x) / Math.max(1, _t.w), 0, 1),
            y: Oe((ht - _t.y) / Math.max(1, _t.h), 0, 1)
          }, tn = I(bt, Sn);
          if (!tn) return;
          const In = ka(tn);
          zn(Pe.item, { yaw_deg: In.yaw, pitch_deg: In.pitch });
        } else if (n.mode === "unwrap") {
          const bt = be(), _t = Oe((ct - bt.x) / Math.max(bt.w, 1), 0, 1), Sn = Oe((ht - bt.y) / Math.max(bt.h, 1), 0, 1);
          zn(Pe.item, { yaw_deg: Kt(_t * 360 - 180), pitch_deg: Oe(90 - Sn * 180, -90, 90) });
        } else {
          const bt = vt(ct, ht), _t = ka(bt);
          zn(Pe.item, { yaw_deg: _t.yaw, pitch_deg: _t.pitch });
        }
        ie(Pe.item) && we(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const _t = se();
          return _t ? Ue(De, _t, performance.now()) : null;
        })() : Ke(De, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Pe.startUv.u || 0)), bt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        R((At = Pe.item) == null ? void 0 : At.actionGroupId, ht, bt, Pe.snapshot, (Je = Pe.item) == null ? void 0 : Je.layerKind, Pe.frameSnapshot) && (ue({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Pe.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const _t = se();
          return _t ? Ue(De, _t, performance.now()) : null;
        })() : Ke(De, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Pe.startUv.u || 0)), bt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        te(((et = Pe.item) == null ? void 0 : et.rasterObjectId) || ((st = Pe.item) == null ? void 0 : st.id) || "", ht, bt, Pe.snapshot) && (N(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Pe.kind === "scale_raster_object") {
        const ht = Math.max(1, Math.hypot(De.x - Pe.center.x, De.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        C(((jn = Pe.item) == null ? void 0 : jn.rasterObjectId) || ((Xe = Pe.item) == null ? void 0 : Xe.id) || "", ht, Pe.snapshot) && (N(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Pe.kind === "move_multi") {
        const ct = De.x - Number(((Be = Pe.offset) == null ? void 0 : Be.x) || 0), ht = De.y - Number(((Qe = Pe.offset) == null ? void 0 : Qe.y) || 0);
        let bt = !1, _t = !1, Sn = !1;
        const tn = ct - Number(((Yt = Pe.startCenter) == null ? void 0 : Yt.x) || ct), In = ht - Number(((Ct = Pe.startCenter) == null ? void 0 : Ct.y) || ht);
        for (const Vt of Array.isArray(Pe.stickerSnapshots) ? Pe.stickerSnapshots : []) {
          const ln = (v === "cutout" ? E() : S()).find((zt) => String((zt == null ? void 0 : zt.id) || "") === String(Vt.id || ""));
          if (!ln || !ie(ln)) continue;
          const sn = {
            x: Number(((Cr = Vt.center) == null ? void 0 : Cr.x) || 0) + tn,
            y: Number(((Wi = Vt.center) == null ? void 0 : Wi.y) || 0) + In
          };
          if (n.mode === "frame" && d) {
            const zt = se(), Dt = m(zt);
            if (!zt || !Dt) continue;
            const or = {
              x: Oe((sn.x - Dt.x) / Math.max(1, Dt.w), 0, 1),
              y: Oe((sn.y - Dt.y) / Math.max(1, Dt.h), 0, 1)
            }, En = I(zt, or);
            if (!En) continue;
            const Do = ka(En);
            zn(ln, { yaw_deg: Do.yaw, pitch_deg: Do.pitch });
          } else if (n.mode === "unwrap") {
            const zt = be(), Dt = Oe((sn.x - zt.x) / Math.max(zt.w, 1), 0, 1), or = Oe((sn.y - zt.y) / Math.max(zt.h, 1), 0, 1);
            zn(ln, { yaw_deg: Kt(Dt * 360 - 180), pitch_deg: Oe(90 - or * 180, -90, 90) });
          } else {
            const zt = vt(sn.x, sn.y), Dt = ka(zt);
            zn(ln, { yaw_deg: Dt.yaw, pitch_deg: Dt.pitch });
          }
          bt = !0;
        }
        for (const Vt of Array.isArray(Pe.strokeSnapshots) ? Pe.strokeSnapshots : []) {
          const ln = {
            x: Number(((Ui = Vt.center) == null ? void 0 : Ui.x) || 0) + tn,
            y: Number(((Bi = Vt.center) == null ? void 0 : Bi.y) || 0) + In
          }, sn = n.mode === "frame" ? (() => {
            const Dt = se();
            return Dt ? Ue(ln, Dt, performance.now()) : null;
          })() : Ke(ln, performance.now()), zt = Vt.centerUv || null;
          if (sn && zt) {
            const Dt = Bt(Number(sn.u || 0), Number(zt.u || 0)), or = Number(sn.v || 0) - Number(zt.v || 0);
            R(Vt.id, Dt, or, Vt.snapshot, Vt.layerKind, Vt.frameSnapshot) && (bt = !0, _t = !0);
          }
        }
        for (const Vt of Array.isArray(Pe.rasterSnapshots) ? Pe.rasterSnapshots : []) {
          const ln = {
            x: Number(((na = Vt.center) == null ? void 0 : na.x) || 0) + tn,
            y: Number(((ra = Vt.center) == null ? void 0 : ra.y) || 0) + In
          }, sn = n.mode === "frame" ? (() => {
            const Dt = se();
            return Dt ? Ue(ln, Dt, performance.now()) : null;
          })() : Ke(ln, performance.now()), zt = Vt.centerUv || null;
          if (sn && zt) {
            const Dt = Bt(Number(sn.u || 0), Number(zt.u || 0)), or = Number(sn.v || 0) - Number(zt.v || 0);
            te(Vt.id, Dt, or, Vt.snapshot) && (bt = !0, Sn = !0);
          }
        }
        bt && (_t ? ue({ rebuildPaintEngine: !1 }) : Sn ? N() : we(), Ae({ localOnly: !0 }));
        return;
      }
      if (Pe.kind === "scale_stroke_group") {
        const ht = Math.max(1, Math.hypot(De.x - Pe.center.x, De.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        J((ia = Pe.item) == null ? void 0 : ia.actionGroupId, ht, 0, Pe.snapshot, (oa = Pe.item) == null ? void 0 : oa.layerKind, Pe.frameSnapshot) && (ue({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Pe.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(De.y - Pe.center.y, De.x - Pe.center.x) - Number(Pe.startAng || 0)) * Vi;
        Re.shiftKey && (ct = Math.round(ct / 45) * 45), J((sa = Pe.item) == null ? void 0 : sa.actionGroupId, 1, ct, Pe.snapshot, (aa = Pe.item) == null ? void 0 : aa.layerKind, Pe.frameSnapshot) && (ue({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Pe.kind === "marquee_select") {
        Pe.current = De, Ae({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (Pe.kind === "scale") {
        const ht = Math.max(1, Math.hypot(De.x - Pe.center.x, De.y - Pe.center.y)) / Pe.startDist;
        zn(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179), vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), Y(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), ie(Pe.item) && we(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_x") {
        const ht = Math.max(1, Math.hypot(De.x - Pe.center.x, De.y - Pe.center.y)) / Pe.startDist;
        zn(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179) }), Y(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), ie(Pe.item) && we(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_y") {
        const ht = Math.max(1, Math.hypot(De.x - Pe.center.x, De.y - Pe.center.y)) / Pe.startDist;
        zn(Pe.item, { vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), Y(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), ie(Pe.item) && we(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "rotate") {
        let ht = (Math.atan2(De.y - Pe.center.y, De.x - Pe.center.x) - Pe.startAng) * Vi, bt = Pe.startRot - ht;
        Re.shiftKey && (bt = Math.round(bt / 45) * 45), zn(Pe.item, { [ie(Pe.item) ? "rot_deg" : "roll_deg"]: bt }), ie(Pe.item) && we(), Ae({ localOnly: !0 });
      }
    }
  }
  function Zs() {
    var De, Pe, St, nt, At, Je, et;
    const Re = n.interaction;
    if (!((Re == null ? void 0 : Re.kind) === "roll_frame" && Re.source === "knob")) {
      if ((Re == null ? void 0 : Re.kind) === "space_pan" || (Re == null ? void 0 : Re.kind) === "space_orbit") {
        n.interaction = null, Pt(n.pointerPos), Bn();
        return;
      }
      if ((Re == null ? void 0 : Re.kind) === "world_select" || (Re == null ? void 0 : Re.kind) === "world_gizmo") {
        Fo(Re);
        return;
      }
      if (((De = n.interaction) == null ? void 0 : De.kind) === "paint_stroke" || ((Pe = n.interaction) == null ? void 0 : Pe.kind) === "paint_lasso_fill") {
        ve();
        const st = re(n.interaction), jn = !!n.interaction._hasCommittedSegments;
        if (st || jn) {
          ue();
          const Xe = String(((St = n.interaction.stroke) == null ? void 0 : St.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = w().find((Yt) => String((Yt == null ? void 0 : Yt.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const Be = Q(n.interaction);
          Be && (st ? String(((nt = n.interaction.stroke) == null ? void 0 : nt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Be), Ie()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Be) : n.paintEngine.cancelActiveStroke(Be)), Ce(), ye(), ir(), Bn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = Q(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((At = n.interaction) == null ? void 0 : At.kind) === "marquee_select") {
        const st = He(n.interaction.start, n.interaction.current), Xe = [
          ...v === "cutout" ? b().filter((Be) => !j(Be)) : [...S()],
          ...T(),
          ...ne()
        ].filter((Be) => ae(st, Me(Be)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), ir(), Bn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Ce(), de(), ir());
      else if (n.interaction && n.interaction.kind !== "view") {
        let st = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (st = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (st = !0), st && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? ue({ rebuildPaintEngine: !0 }) : N()), Ce(), ye(), o.setDirtyCanvas(!0, !0), Ks(), Bn(), Ae();
      }
      n.interaction = null, (Re == null ? void 0 : Re.kind) === "roll_frame" && xe(), ve(), Re && Re.kind === "view" && Yr(() => g.endDrag(performance.now())), Ki(), Bn(), Pt(n.pointerPos), Ae();
    }
  }
  function Qs() {
    var Re, De, Pe, St, nt;
    if (!Se()) {
      if (((Re = n.interaction) == null ? void 0 : Re.kind) === "world_select" || ((De = n.interaction) == null ? void 0 : De.kind) === "world_gizmo") {
        Fo(n.interaction);
        return;
      }
      if (((Pe = n.interaction) == null ? void 0 : Pe.kind) === "view" && Yr(() => g.endDrag(performance.now())), ((St = n.interaction) == null ? void 0 : St.kind) === "paint_stroke" || ((nt = n.interaction) == null ? void 0 : nt.kind) === "paint_lasso_fill") {
        ve();
        const At = Q(n.interaction);
        At && n.paintEngine.cancelActiveStroke(At);
      }
      n.interaction = null, ve(), Ki(), Pt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function ea(Re) {
    const De = Fe(Re), Pe = pt(De, !0);
    n.interaction || (Pt(De), Pe && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function ta(Re) {
    if (n.mode === "frame") {
      const De = Fe(Re), Pe = rl(Re);
      Pe && rr(), Pe && oe() ? Us(De, -Pe) : Pe && Bs(De, Pe) && Ae({ localOnly: !0 }), Re.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (pe(), V()) {
        const De = rl(Re);
        De && Ys(Fe(Re), -De);
      } else g.applyWheelEvent(Re) && Ae({ localOnly: !0, reason: ft.VIEW });
      Re.preventDefault();
    }
  }
  return {
    connect(Re) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: y,
        appendLassoPoint: W,
        appendPaintPoint: H,
        applyRasterObjectOffset: te,
        applyRasterObjectTransform: C,
        applySharedRollInteractionPoint: B,
        applyStrokeGroupOffset: R,
        applyStrokeGroupTransform: J,
        buildFreehandStrokeRecord: _e,
        buildLassoFillStrokeRecord: ke,
        cameraShoots: ge,
        cancelFrameCameraGesture: Se,
        cancelViewTransition: pe,
        clearSelection: fe,
        commitAndRefreshNode: de,
        commitPaintInteraction: re,
        commitState: ye,
        currentSpaceCamera: ce,
        cutoutCamera: Z,
        dragFrame: U,
        editorViewInput: P,
        ensureGroupFrame: he,
        frameContext: A,
        frameLocalPointToWorldDir: I,
        frameSpaceView: k,
        frameTarget: x,
        getActiveCutoutShot: se,
        getActivePaintTargetDescriptor: Q,
        getCutoutSelectableItems: E,
        getCutoutSelectableItemsForHit: b,
        getFrameViewLayout: G,
        getFrameViewRect: m,
        getList: S,
        getMultiSelectionGeom: L,
        getPaintingGroupList: w,
        getRasterObjectCenterUv: F,
        getRasterObjectList: z,
        getSelectableRasterObjectItems: ne,
        getSelectableStrokeGroupItems: T,
        getSelected: $,
        getSelectedItems: _,
        getStrokeGroupCenterUv: D,
        getStrokeGroupStrokes: X,
        getUnwrapRect: be,
        handleHit: me,
        hideTooltip: xe,
        hitObjectAt: q,
        invalidateLivePaintPreviewCaches: ve,
        isCameraSelected: O,
        isFreeFrameView: oe,
        isFreeSpaceView: V,
        isItemLocked: ee,
        isRasterObjectItem: K,
        isSceneSticker: Y,
        isShotItem: j,
        isSpaceView: M,
        isStickerItem: ie,
        isStrokeGroupItem: le,
        markObjectVisualsDirty: we,
        markPaintCompositeVisualsDirty: N,
        markPaintStrokeVisualsDirty: ue,
        objectGeom: Me,
        paintingShown: Ee,
        parseRasterObjectSelectionId: Te,
        playback: $e,
        poseOf: ze,
        pushHistory: Ce,
        rectFromPoints: He,
        rectIntersectsGeom: ae,
        refreshPaintEngineRevisionCache: Ie,
        requestDraw: Ae,
        screenPos: Fe,
        screenPosCss: Ge,
        screenPosToErpPoint: Ke,
        screenPosToFrameAsErpPoint: Ue,
        screenToWorldDir: vt,
        selectWorldSticker: yt,
        selectedWorldSticker: Tt,
        setPointerPos: pt,
        setSelectedItem: en,
        setSelectedItems: qe,
        setSpaceView: cn,
        shortestWrappedDelta: Bt,
        spaceViewState: gi,
        startAnimation: Yr,
        startCameraPress: yi,
        startFrameDrag: an,
        startPanFrame: vn,
        startSpaceDrag: qr,
        stickerById: mr,
        stopTimelinePlayback: rr,
        supportsErpPainting: Hs,
        supportsFramePainting: Gi,
        syncCutoutShot: Co,
        syncFloatingViewButtonState: Io,
        syncFrameRollKnob: Gs,
        syncSidePanelControls: Ks,
        syncTimeline: Ws,
        syncViewToggleState: Ki,
        updateCursor: Pt,
        updateSelectionMenu: Bn,
        updateSidePanel: ir,
        viewControls: Eo,
        writePose: zn,
        zoomFrameAt: Us,
        zoomFrameViewAt: Bs,
        zoomSpaceAt: Ys
      } = Re);
    },
    onCanvasPointerDown: ic,
    worldGizmoPointer: Jr,
    hoverWorldGizmo: Oo,
    onCanvasPointerMove: Js,
    onCanvasPointerUp: Zs,
    onCanvasPointerCancel: Qs,
    onCanvasMouseMove: ea,
    onCanvasWheel: ta
  };
}
function MC(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: s,
    shotEditor: a,
    state: l,
    studio: c,
    type: d,
    uiState: u
  } = e;
  let f, p, v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q;
  function E(w, F, z = !1) {
    var be;
    P();
    const ne = a && n.mode === "frame" ? W() : null, T = ne || C(), $ = ne ? "shot" : R(), _ = Z();
    if (_ && !se(_) || !_ && (!T || $ === "stroke" || J(T))) return;
    const D = (((be = u.sidePanel) == null ? void 0 : be.params) || []).find((me) => me.key === w);
    if (!D || D.enabled === !1) return;
    let X = Number(F);
    if (Number.isNaN(X) && (X = 0), (_ || t) && E2.has(w) ? X = w === "scale" ? Math.max(X, H0) : X : X = Oe(X, Number(D.min), Number(D.max)), w === "yaw_deg" && (X = Kt(X)), !_ && t && w.startsWith("position_")) {
      A(), LS(l.camera, n.frame, w, X), x(), re(), z && fe();
      return;
    }
    if (_) {
      zS(_, n.frame, w, X), ge(), x(), re(), z && fe();
      return;
    }
    w === "opacity" ? VS(T, n.frame, X / 100) : Q(T, { [w]: X }), a && !_e(T) && (w === "hFOV_deg" || w === "vFOV_deg") && (T.aspect_id = Fi(T)), x(), re(), z && fe();
  }
  function b(w, F) {
    var T;
    const z = (T = u.sidePanel) == null ? void 0 : T.upstream;
    if (!z) return !1;
    const ne = F ? z.lanes.find(($) => $.name === F && $.action === w) : w === "revert-upstream" ? z.revertAll : null;
    return !!ne && !ne.disabled;
  }
  function G(w) {
    const F = Z() || C();
    Ut(F) && (P(), ce(F, w) && (de(), ge(), fe(), h(), x(), k(), re()));
  }
  async function m(w) {
    var ne, T, $, _, D, X, be;
    const F = w.target.closest("[data-action]");
    if (!F) return;
    const z = String(F.getAttribute("data-action") || "");
    if (z === "coverage-set") {
      const me = $n(F.getAttribute("data-coverage"));
      if (me === $n(l.coverage)) return;
      l.coverage = me, n.coverage = me, r && (r.value = String(me)), o ? s.backgroundDirty = !0 : (y(), he({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), x(), k(), re();
      return;
    }
    if (z === "revert-handoff-lane" || z === "revert-upstream") {
      const me = F.getAttribute("data-lane") || null;
      if (!b(z, me)) return;
      z === "revert-handoff-lane" ? (P(), ye(me)) : G(me);
      return;
    }
    if (z === "toggle-selection-picker") {
      if ((T = (ne = u.sidePanel) == null ? void 0 : ne.selectionPicker) != null && T.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (z === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const me = String(F.getAttribute("data-selection-id") || "");
      let xe = null;
      if (me && (d === "stickers" ? xe = [...te(), ...c ? l.shots : []].find((q) => String((q == null ? void 0 : q.id) || "") === me) || null : xe = (($ = H().find((q) => {
        var ve;
        return String(((ve = q == null ? void 0 : q.item) == null ? void 0 : ve.id) || "") === me;
      })) == null ? void 0 : $.item) || null), U(xe || null), xe && !ke(xe)) {
        const q = pe(xe);
        I(Kt(Number(q.yaw_deg || 0)), Oe(Number(q.pitch_deg || 0), -89.9, 89.9));
      }
      x(), k(), re();
      return;
    }
    if (z === "copy-state-inline") {
      const me = C(), xe = R();
      if (!me || xe === "stroke" || B().length > 1) return;
      const q = JSON.stringify(a && xe !== "image" ? p(me) : v(pe(me)));
      try {
        await navigator.clipboard.writeText(q), (_ = u.sidePanel) != null && _.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ve;
          (ve = u.sidePanel) != null && ve.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (z === "set-invert-x") {
      l.ui_settings.invert_view_x = F.getAttribute("data-value") === "1", Se(), x(), (D = i.setDirtyCanvas) == null || D.call(i, !0, !0), re();
      return;
    }
    if (z === "set-invert-y") {
      l.ui_settings.invert_view_y = F.getAttribute("data-value") === "1", Se(), x(), (X = i.setDirtyCanvas) == null || X.call(i, !0, !0), re();
      return;
    }
    if (z === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, Se(), x(), (be = i.setDirtyCanvas) == null || be.call(i, !0, !0), re();
      return;
    }
    if (z === "close-preview") {
      g();
      return;
    }
    if (z === "cancel-close") {
      g();
      return;
    }
    z === "save-close" && (f(), g());
  }
  function S(w) {
    const F = w.target.closest("[data-action='param-input']");
    F && E(String(F.getAttribute("data-param-key") || ""), F.value, !1);
  }
  function L(w) {
    const F = w.target.closest("[data-action='param-input']");
    F && E(String(F.getAttribute("data-param-key") || ""), F.value, !0);
  }
  return {
    connect(w) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: p,
        buildCanonicalSelectedStickerState: v,
        closeEditor: g,
        commitAndRefreshNode: h,
        commitState: y,
        getActiveCutoutShot: W,
        getCutoutInspectorItems: H,
        getList: te,
        getSelected: C,
        getSelectedItems: B,
        getSelectedKind: R,
        isItemLocked: J,
        isSceneSticker: _e,
        isStrokeGroupItem: ke,
        markObjectVisualsDirty: ge,
        persistUiSettings: Se,
        poseOf: pe,
        pushHistory: fe,
        releaseHiddenSelection: de,
        requestDraw: re,
        revertPortHandoffLane: ye,
        revertUpstreamSticker: ce,
        selectedWorldSticker: Z,
        setSelectedItem: U,
        stopTimelinePlayback: P,
        syncCoverageChangeToNodePreviews: he,
        syncCutoutShot: A,
        turnViewTo: I,
        updateSelectionMenu: k,
        updateSidePanel: x,
        worldStickerEditable: se,
        writePose: Q
      } = w);
    },
    onSidePanelClick: m,
    onSidePanelInput: S,
    onSidePanelChange: L
  };
}
function NC(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: s,
    readOnly: a,
    root: l,
    runtime: c,
    shotEditor: d,
    tooltip: u,
    uiState: f,
    videoEl: p
  } = e;
  let v, g, h, y, W, H, te, C, B, R, J, _e, ke, ge, Se, pe, fe, de, re, ye, ce, Z, U, P, he, A, I, k, x, se, Q, E, b, G, m, S, L, w, F, z, ne, T, $, _, D, X, be, me, xe, q, ve;
  const O = () => {
    if (!t.customPaintSessionStart) return;
    if (Il(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (Y2(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      Hn(t.customPaintColor),
      ...t.customPaintHistory.filter((He) => !Il(He, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, oe = (Ce = !1) => {
    !i || i.hidden || (Ce ? O() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, V = () => {
    i && (i.hidden && (t.customPaintSessionStart = Hn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function ee() {
    F();
  }
  function K(Ce) {
    var vt, yt, Tt, pt, en;
    if ((yt = (vt = Ce.target) == null ? void 0 : vt.matches) != null && yt.call(vt, "[data-confirm-overlay]")) {
      const qe = (Tt = f.confirmDialog) == null ? void 0 : Tt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const He = Ce.target.closest("[data-space-mode]");
    if (He) {
      G(He.getAttribute("data-space-mode"));
      return;
    }
    const ae = Ce.target.closest("[data-gizmo-mode]");
    if (ae) {
      t.gizmoMode = ae.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, xe(), k({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Ie = Ce.target.closest("[data-view]");
    if (Ie) {
      if (Ie.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Ie.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), q(), xe()), ge(), $(), k();
      return;
    }
    const Ae = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && B({ preservePanelValues: !0 }), z(), q(), xe(), k();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? x(-1) : qe === "redo" ? x(1) : qe === "clear" ? te() : qe === "add" || qe === "add-image" ? g() : qe === "add-world" ? y() : qe === "add-or-look" ? v() : qe === "add-camera" && h();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, B({ preservePanelValues: !0 }), Dn[qe] && (t.activeBrushPresetId = qe), z(), q(), xe(), k();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), B({ preservePanelValues: !0 }), z(), q(), xe(), k();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        C(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = nc.find((cn) => cn.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = Hn(qe.color), oe(!0), z();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? oe(!0) : V(), z();
        return;
      }
    }
    const Fe = String(((pt = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : pt.call(Ae, "data-action")) || "");
    if (Fe === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      ve.resumeAfterScrub = !1, _();
      return;
    }
    if (Fe === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), be(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Fe === "video-loop-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, p.loop = qe, T({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: p.muted,
        volume: Number(p.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Fe === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Fe === "frame-aspect-set") {
        const qe = t.mode === "frame" ? pe() : null;
        if (!qe || qe.locked === !0) return;
        b(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, ne(), he(), R(), $(), q(), xe(), k();
        return;
      }
      if (Fe === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? pe() : null, cn = Ae.getAttribute("data-custom-width"), Bt = Ae.getAttribute("data-custom-height");
        if (!qe || !W(qe, cn, Bt)) return;
        f.frameRail.aspectOpen = !1, ne(), he(), R(), $(), k();
        return;
      }
      if (Fe === "frame-rotate-90") {
        const qe = t.mode === "frame" ? pe() : null;
        if (!qe || qe.locked === !0) return;
        Q(qe), f.frameRail.aspectOpen = !1, ne(), he(), R(), $(), k();
        return;
      }
      if (Fe === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, xe(), k();
        return;
      }
      if (Fe === "aspect-set") {
        const qe = de();
        if (!qe) return;
        const cn = String(Ae.getAttribute("data-aspect") || "1:1");
        b(qe, cn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, ne(), he(), R(), xe(), k();
        return;
      }
      if (Fe === "rotate-90") {
        const qe = de();
        if (!qe || ce()) return;
        Q(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, ne(), he(), R(), xe(), k();
        return;
      }
      if (Fe === "bring-front") {
        H();
        return;
      }
      if (Fe === "send-back") {
        E();
        return;
      }
      if (Fe === "duplicate") {
        ke();
        return;
      }
      if (Fe === "replace-image") {
        I();
        return;
      }
      if (Fe === "toggle-lock") {
        X();
        return;
      }
      if (Fe === "back-initial") {
        se();
        return;
      }
      if (Fe === "toggle-visible") {
        D();
        return;
      }
      if (Fe === "delete") {
        _e();
        return;
      }
    }
    if (Fe === "reset-view") {
      if (t.mode === "frame") return;
      me(
        { position: L(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((en = J()) == null ? void 0 : en.radius) || pr },
        { mode: El(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Fe === "frame-view") {
      if (!Z() || El(t.spaceMode, t.viewTransition) !== "6dof") return;
      Se();
      return;
    }
    if (Fe === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, rA(r == null ? void 0 : r.id, t.showGrid), ee(), k();
      return;
    }
    if (Fe === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), Te();
      return;
    }
    if (Fe === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, w(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), ze(), k();
      return;
    }
    const Ge = Ce.target.closest("[data-paint-history-index]");
    if (!Ge) return;
    const Ke = Number(Ge.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[Ke];
    Ue && (t.customPaintColor = Hn(Ue), t.paintColor = Hn(Ue), z());
  }
  function Y(Ce) {
    const He = Ce.target.closest("[data-video-seek]");
    if (He) {
      if (!(p instanceof HTMLVideoElement)) return;
      U.playing && (ve.resumeAfterScrub = !0), U.seek(Ni(Number(He.value || 0), P()));
      return;
    }
    const ae = Ce.target.closest("[data-video-volume]");
    if (ae) {
      if (!(p instanceof HTMLVideoElement)) return;
      const Fe = Oe(Number(ae.value || 0), 0, 1);
      p.volume = Fe, p.muted = Fe <= 1e-4, T({
        hasAudio: f.videoTransport.hasAudio,
        muted: p.muted,
        volume: Fe
      });
      return;
    }
    const Ie = Ce.target.closest("[data-paint-size-slider]");
    if (Ie) {
      if (Ie.disabled) return;
      const Fe = Math.max(1, Math.min(120, Math.round(Number(Ie.value)))), Ge = fe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ge] = Fe, z(), m();
      return;
    }
    const Ae = Ce.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Fe = { ...t.customPaintColor, a: Oe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = Hn(Fe), t.paintColor = Hn(Fe), z();
    }
  }
  function j(Ce) {
    var He;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(p instanceof HTMLVideoElement)) return;
      ve.resumeAfterScrub && U.play(), ve.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((He = Ce.target) == null ? void 0 : He.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && re();
  }
  function M(Ce) {
    const He = Ce.target.closest("[data-tip]");
    !He || !l.contains(He) || u.target !== He && (u.target = He, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === He && S(He);
    }, 220));
  }
  function ie(Ce) {
    var Ie, Ae;
    const He = Ce.target.closest("[data-tip]");
    !He || u.target !== He || (Ce.relatedTarget instanceof Element ? (Ae = (Ie = Ce.relatedTarget).closest) == null ? void 0 : Ae.call(Ie, "[data-tip]") : null) === He || ye();
  }
  function le(Ce, He) {
    var Ke;
    if (!o) return;
    const ae = o.getBoundingClientRect(), Ie = Oe((Ce - ae.left) / Math.max(1, ae.width), 0, 1), Ae = 1 - Oe((He - ae.top) / Math.max(1, ae.height), 0, 1), Fe = ju(t.customPaintColor), Ge = { ...zu(Fe.h, Ie, Ae), a: Number(((Ke = t.customPaintColor) == null ? void 0 : Ke.a) ?? 1) };
    t.customPaintColor = Hn(Ge), t.paintColor = Hn(Ge), z();
  }
  function we(Ce) {
    var Fe;
    if (!s) return;
    const He = s.getBoundingClientRect(), ae = Oe((Ce - He.left) / Math.max(1, He.width), 0, 1), Ie = ju(t.customPaintColor), Ae = { ...zu(ae, Ie.s, Ie.v), a: Number(((Fe = t.customPaintColor) == null ? void 0 : Fe.a) ?? 1) };
    t.customPaintColor = Hn(Ae), t.paintColor = Hn(Ae), z();
  }
  function N(Ce, He) {
    const ae = Ce.pointerId;
    He(Ce);
    const Ie = (Fe) => {
      Fe.pointerId === ae && He(Fe);
    }, Ae = (Fe) => {
      Fe.pointerId === ae && (window.removeEventListener("pointermove", Ie), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Ie), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function ue() {
    const Ce = !!t.fullscreen;
    ro(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ce ? We.fullscreen_close : We.fullscreen,
      label: Ce ? "Exit Fullscreen" : "Fullscreen",
      tip: Ce ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Me(Ce) {
    const He = !!Ce;
    t.fullscreen !== He && (t.fullscreen = He, l.classList.toggle("pano-modal-fullscreen", He), He ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), ee(), ue(), A(), k());
  }
  function Ee() {
    return document.fullscreenElement === n;
  }
  async function Te() {
    var Ce, He;
    try {
      if (!document.fullscreenEnabled) {
        Me(!t.fullscreen);
        return;
      }
      Ee() ? await ((He = document.exitFullscreen) == null ? void 0 : He.call(document)) : await ((Ce = n.requestFullscreen) == null ? void 0 : Ce.call(n));
    } catch {
      Me(!t.fullscreen);
    }
  }
  function $e() {
    document.fullscreenEnabled && Me(Ee());
  }
  function ze() {
    const Ce = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ce ? We.fullscreen_close : We.fullscreen, f.outputPreviewToggle.label = Ce ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ce ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ce) {
      ({
        addCutoutFrame: v,
        addImageSticker: g,
        addStudioCamera: h,
        addWorldImageSticker: y,
        applyCutoutAspectCustom: W,
        bringSelectedToFront: H,
        clearAll: te,
        clearPaintingLayer: C,
        clearSelection: B,
        commitAndRefreshNode: R,
        contentSphere: J,
        deleteSelected: _e,
        duplicateSelected: ke,
        forceCursorTool: ge,
        frameSpaceContent: Se,
        getActiveCutoutShot: pe,
        getBrushPresetIdForTool: fe,
        getSelected: de,
        hidePaintSizePreview: re,
        hideTooltip: ye,
        isErpCamera: ce,
        isFreeSpaceView: Z,
        playback: U,
        playbackFps: P,
        pushHistory: he,
        queueVideoTransportLayout: A,
        replaceSelectedImage: I,
        requestDraw: k,
        restoreHistory: x,
        restoreSelectedToInitialPose: se,
        rotateCutoutAspect90: Q,
        sendSelectedToBack: E,
        setShotAspect: b,
        setSpaceMode: G,
        showPaintSizePreview: m,
        showTooltipFor: S,
        spaceOrigin: L,
        startAnimation: w,
        syncFloatingViewButtonState: F,
        syncPaintUi: z,
        syncSidePanelControls: ne,
        syncVideoTransportState: T,
        syncViewToggleState: $,
        togglePlayback: _,
        toggleSelectedExternalStickerVisibility: D,
        toggleSelectedLock: X,
        toggleVideoMuted: be,
        transitionView: me,
        updateSelectionMenu: xe,
        updateSidePanel: q,
        videoState: ve
      } = Ce);
    },
    closePaintColorPop: oe,
    syncGridToggleButton: ee,
    onRootClick: K,
    onRootInput: Y,
    onRootChange: j,
    onRootPointerOver: M,
    onRootPointerOut: ie,
    updatePaintColorFromSv: le,
    updatePaintColorFromHue: we,
    bindDrag: N,
    syncFullscreenButton: ue,
    setFullscreenState: Me,
    onFullscreenChange: $e,
    syncOutputPreviewToggleButton: ze
  };
}
function PC(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, p, v, g, h, y, W, H, te, C, B;
  const R = GA();
  function J(A) {
    var I, k, x, se, Q;
    if (A.key === "Escape") {
      if (l()) {
        A.preventDefault(), A.stopPropagation(), (I = A.stopImmediatePropagation) == null || I.call(A);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        A.preventDefault(), A.stopPropagation(), (k = A.stopImmediatePropagation) == null || k.call(A), (x = document.exitFullscreen) == null || x.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        A.preventDefault(), A.stopPropagation(), (se = A.stopImmediatePropagation) == null || se.call(A), W(!1);
        return;
      }
      A.preventDefault(), A.stopPropagation(), (Q = A.stopImmediatePropagation) == null || Q.call(A), d();
    }
  }
  function _e(A) {
    const I = String(A.key || ""), k = String(A.code || ""), x = Number(A.keyCode || 0);
    if (!(I === "Delete" || k === "Delete" || x === 46) && !(I === "Backspace" || k === "Backspace" || x === 8)) return;
    const E = A.target, b = ((E == null ? void 0 : E.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || E != null && E.isContentEditable) return;
    if (o.selection) {
      f(), A.preventDefault(), A.stopPropagation();
      return;
    }
    if (p()) {
      A.preventDefault(), A.stopPropagation();
      return;
    }
    h() && (u(), A.preventDefault(), A.stopPropagation());
  }
  function ke(A) {
    if (s.confirmDialog.visible) return !1;
    const I = A.composedPath()[0];
    if (I !== document.body && I !== document.documentElement && !r.contains(I)) return !1;
    const k = ((I == null ? void 0 : I.tagName) || "").toUpperCase();
    return k === "INPUT" ? !I2.has(String(I.type || "text").toLowerCase()) : k !== "TEXTAREA" && k !== "SELECT" && !(I != null && I.isContentEditable);
  }
  function ge(A) {
    return A.code !== "Space" || A.ctrlKey || A.metaKey || A.altKey || n || !i || !s.timeline.visible ? !1 : ke(A);
  }
  function Se(A) {
    ge(A) && (A.preventDefault(), A.stopPropagation(), A.repeat || C());
  }
  function pe(A) {
    ge(A) && (A.preventDefault(), A.stopPropagation());
  }
  function fe(A) {
    if (R.modifiers(A), !!iy(A.code)) {
      if (!ke(A)) {
        re(A.code);
        return;
      }
      A.ctrlKey || A.metaKey || (A.preventDefault(), A.stopPropagation(), a() && (R.press(A.code, A.timeStamp), A.repeat || c(), H(() => {
      })));
    }
  }
  function de(A) {
    R.modifiers(A), A.key === "Meta" && ye(), re(A.code) && (A.preventDefault(), A.stopPropagation());
  }
  function re(A) {
    return R.release(A) ? (R.held || v(), !0) : !1;
  }
  function ye() {
    R.held && (R.releaseAll(), v());
  }
  function ce() {
    document.hidden && ye();
  }
  function Z() {
    ye();
  }
  function U(A) {
    const I = !!(A.ctrlKey || A.metaKey), k = !!A.altKey;
    t.marqueeModifier === I && t.altModifier === k || (t.marqueeModifier = I, t.altModifier = k, te(), B(t.pointerPos));
  }
  function P() {
    ye(), t.marqueeModifier = !1, t.altModifier = !1, te(), B(t.pointerPos);
  }
  function he(A) {
    if (n || !A.ctrlKey && !A.metaKey) return;
    const I = String(A.key || "").toLowerCase(), k = String(A.code || "");
    if (I !== "z" && k !== "KeyZ") return;
    const x = A.target, se = ((x == null ? void 0 : x.tagName) || "").toUpperCase();
    if (se === "INPUT" || se === "TEXTAREA" || x != null && x.isContentEditable) return;
    const { canUndo: Q, canRedo: E } = g();
    A.shiftKey && !E || !A.shiftKey && !Q || (y(A.shiftKey ? 1 : -1), A.preventDefault(), A.stopPropagation());
  }
  return {
    connect(A) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: p,
        endFrameKeyMove: v,
        getHistoryCapabilities: g,
        getSelected: h,
        restoreHistory: y,
        setFullscreenState: W,
        startAnimation: H,
        syncFrameRollKnob: te,
        togglePlayback: C,
        updateCursor: B
      } = A);
    },
    moveKeys: R,
    onEscClose: J,
    onDeleteKey: _e,
    onSpaceKey: Se,
    onSpaceKeyUp: pe,
    onMoveKeyDown: fe,
    onMoveKeyUp: de,
    onVisibilityChange: ce,
    onContextMenu: Z,
    onModifierKeyChange: U,
    onWindowBlur: P,
    onUndoRedoKey: he
  };
}
const Zp = /* @__PURE__ */ new Map(), ci = Rg({
  app: dr,
  api: mn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Vu,
    markImageFailed: j0,
    markImageLoading: $0,
    markImageReady: z0
  }
});
function Qp(e) {
  if (!Ot(e, "background") || !Ot(e, "external-sticker")) return null;
  const t = ci.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? fi(t[0]) : null;
}
const AC = ci.assetSource, CC = ci.source, IC = ci.uiImage, EC = ci.invalidateUiImage, eh = ci.loadPreferredExactLinkedImage;
async function OC(e, t, r = {}) {
  var Do, lf;
  await _0(e, { tolerateOperationFailure: !0 }), ci.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = X2(e, t);
  await Jd();
  const a = Ma(e, "output_preset"), l = Ma(e, "coverage"), c = Ma(e, "bg_color"), d = Ma(e, C2), u = () => {
    const je = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return eh(
      e,
      je,
      () => nt(),
      `background:size:${je.join("|")}`
    );
  }, f = () => {
    const je = u();
    return Q2(je);
  }, p = (je = 2048) => {
    const at = a == null ? void 0 : a.value;
    return Z2(at) ? f() || Math.max(1, Math.round(Number(je || 2048))) : J2(at, je);
  }, v = e.__panoSceneStateV2 === !0, g = t === "stickers" && v, h = g && e.__panoStudio === !0, y = h, W = t === "cutout" || h, H = (v ? Xm : qm)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: p(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: $n(l == null ? void 0 : l.value),
    sharedUiSettings: eA(),
    active: tg(e),
    fps: v ? Qp(e) : null
  });
  Wn(e).liveState = H, Wn(e).liveStateVersion = 0;
  let te = null;
  y ? (te = H.camera && H.camera.visible !== !1 ? Qm(H.camera, 0) : null, H.shots = te ? [{ ...te, position: [...te.position] }] : [], H.active.selected_shot_id = null) : t === "cutout" && (H.shots = Array.isArray(H.shots) ? H.shots.slice(0, 1) : [], H.shots.length || (H.active.selected_shot_id = null));
  const C = t === "cutout" ? (() => {
    var sr;
    const je = Array.isArray(H.shots) ? H.shots : [], at = String(((sr = H == null ? void 0 : H.active) == null ? void 0 : sr.selected_shot_id) || "");
    return je.find((un) => String((un == null ? void 0 : un.id) || "") === at) || je[0] || null;
  })() : null, B = C ? sy(C, !1) : { width: 220, height: 132 }, R = V0(h ? "studio" : t), J = /* @__PURE__ */ ko({
    stageStatus: ar,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (R.viewButtons || []).map((je) => ({ ...je, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Do = R.spaceButtons) != null && Do.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: R.spaceButtons, frame: R.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (R.toolButtons || []).map((je) => ({
      ...je,
      disabled: !1,
      ...je.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(R.floatingButtons || []).map((je) => ({ ...je, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: We.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: We.aspect,
      rotateIcon: We.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: n,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: We.fullscreen,
      label: "Expand Preview",
      tip: "Expand preview"
    },
    paintDock: {
      visible: !1,
      activePane: "",
      showColorRow: !0,
      colorEnabled: !0,
      activeSwatchId: "green",
      customColorActive: !1,
      customColorCss: _r({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: _r({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (je, at) => ({ index: at, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: !1,
      showSizeRow: !0,
      clearVisible: { paint: !0, mask: !0 },
      activeTools: { paint: "pen", mask: "pen" }
    },
    videoTransport: {
      visible: !1,
      ready: !1,
      playing: !1,
      loop: !0,
      duration: 0,
      currentTime: 0,
      progressPct: 0,
      currentTimeLabel: "0:00",
      durationLabel: "0:00",
      frameCount: 0,
      fps: 24,
      hasAudio: !1,
      muted: !1,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640
    },
    sidePanel: {},
    timeline: { visible: !1 },
    easing: null,
    selectionMenu: { visible: !1, left: 0, top: 0, items: [] },
    tooltip: { visible: !1, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: t === "cutout",
      ready: !1,
      settled: !1,
      expanded: !1,
      width: B.width,
      height: B.height,
      label: C ? "Loading preview" : "Add Frame to preview"
    }
  }), _e = { frame: /* @__PURE__ */ Ya(0), playing: /* @__PURE__ */ Ya(!1) }, ke = document.createElement("div");
  document.body.appendChild(ke);
  const ge = ({ intent: je, file: at } = {}) => {
    if (lr(at)) {
      if (je === "add") {
        Ee(at);
        return;
      }
      if (je === "add-world") {
        Te(at);
        return;
      }
      je === "replace" && St(at);
    }
  }, Se = ({ intent: je } = {}) => {
  }, pe = sd(P2, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: R,
    paintSwatches: nc.map((je) => ({
      id: je.id,
      label: je.label,
      cssColor: _r(je.color, 1)
    })),
    uiState: J,
    playhead: _e,
    onClose: () => {
      or();
    },
    onTimeline: (je) => oc(je),
    onImageFileSelected: ge,
    onImageFileCancelled: Se
  });
  let fe = null;
  try {
    fe = pe.mount(ke);
  } catch (je) {
    try {
      pe.unmount();
    } catch {
    }
    throw ke.remove(), je;
  }
  const de = ke.querySelector(".pano-modal-overlay"), re = ke.querySelector(".pano-modal"), ye = re == null ? void 0 : re.querySelector("[data-stage-overlay]"), ce = re == null ? void 0 : re.querySelector("[data-stage-background]"), Z = re == null ? void 0 : re.querySelector(".pano-stage-wrap"), U = ((lf = fe == null ? void 0 : fe.getPaintOverlayRefs) == null ? void 0 : lf.call(fe)) || {}, P = U.cursor || null, he = U.sizePreview || null, A = U.sizeSample || null;
  if (!de || !re || !ye || !ce || !Z || !P || !he || !A)
    throw pe.unmount(), ke.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const I = ye.getContext("2d"), k = re.querySelector("[data-side]"), x = re.querySelector("[data-video-element]"), se = re.querySelector("[data-port-video-element]");
  bc(ye, "editor.stage-overlay"), bc(ce, "editor.stage-background"), Uf(x, "editor.video"), Uf(se, "editor.port-video");
  const Q = re.querySelector(".pano-floating-right"), E = re.querySelector(".pano-floating-top"), b = re.querySelector("[data-tool-rail]"), G = re.querySelector("[data-frame-rail]"), m = re.querySelector("[data-frame-roll-knob]"), S = re.querySelector("[data-paint-dock]"), L = re.querySelector(".pano-video-transport"), w = re.querySelector("[data-selection-menu]"), F = re.querySelector("[data-tooltip]"), z = re.querySelector("[data-camera-preview-host]"), ne = re.querySelector("[data-camera-preview-canvas]");
  bc(ne, "editor.camera-preview");
  const T = re.querySelector("[data-paint-color-row]"), $ = re.querySelector("[data-paint-color-pop]"), _ = re.querySelector("[data-paint-color-sv]"), D = re.querySelector("[data-paint-color-sv-cursor]"), X = re.querySelector("[data-paint-hue-strip]"), be = re.querySelector("[data-paint-hue-handle]");
  Z == null || Z.removeAttribute("data-stage-ready"), Z == null || Z.setAttribute("data-stage-loading-kind", "boot"), ye.style.opacity = "1", ce.style.opacity = "0", i && (k == null || k.remove(), re.classList.add("pano-modal-readonly")), re.addEventListener("pointerdown", () => j.wake(), !0), re.addEventListener("pointerdown", (je) => {
    var at;
    je.target.closest("[data-frame-roll-knob]") || en(), !je.target.closest(".pano-picker") && (je.target.closest("[data-paint-color-row]") || (re.querySelectorAll(".pano-picker-pop").forEach((sr) => {
      sr.hidden = !0;
    }), ae(!0), W && xe.cutoutAspectOpen && !je.target.closest(".pano-aspect-popover") && !je.target.closest("[data-action='aspect']") && (xe.cutoutAspectOpen = !1, xe.menuMode = "", xe.menuSize.measured = !1, _t(), nt()), (at = J.frameRail) != null && at.aspectOpen && !je.target.closest(".pano-frame-aspect-control") && (J.frameRail.aspectOpen = !1)));
  });
  const xe = {
    mode: "pano",
    selectedId: Z0(t, H),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: pr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: $n(H.coverage),
    historyController: dA(H),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Dr,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: !1 },
    interaction: null,
    viewInertia: { vx: 0, vy: 0, active: !1 },
    menuSize: { w: 220, h: 40, measured: !1 },
    menuMode: "",
    cutoutAspectOpen: !1,
    showGrid: nA(e == null ? void 0 : e.id, !0),
    outputPreviewExpanded: !1,
    outputPreviewAnim: 0,
    outputPreviewAnimFrom: 0,
    outputPreviewAnimTo: 0,
    outputPreviewAnimStartTs: 0,
    outputPreviewAnimDurationMs: 180,
    outputPreviewRect: null,
    cutoutPanoDimAlpha: 0,
    cutoutPanoDimFrom: 0,
    cutoutPanoDimTarget: 0,
    cutoutPanoDimStartTs: 0,
    cutoutPanoDimCorners: null,
    cutoutPanoFrameVisual: null,
    cutoutPanoFrameAlpha: 0,
    cutoutPanoFrameFrom: 0,
    cutoutPanoFrameTarget: 0,
    cutoutPanoFrameStartTs: 0,
    frameRollOverlayVisual: null,
    frameRollOverlayAlpha: 0,
    frameRollOverlayFrom: 0,
    frameRollOverlayTarget: 0,
    frameRollOverlayStartTs: 0,
    frameWheelCommitTimer: 0,
    frameWheelChanged: !1,
    paintEngine: Wl(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: /* @__PURE__ */ new Map(),
    marqueeModifier: !1,
    altModifier: !1,
    panelLastValues: null,
    // Panorama Studio: the id of the world Sticker selected in the space view or on its Timeline row
    // (#72). The canvas selection (selectedId) holds sky Stickers only; selecting one clears the other.
    worldSelectedId: null,
    // The mode of the selected world Sticker's gizmo: "translate", "rotate" or "scale".
    gizmoMode: "translate",
    // The gizmo handle under the pointer, or null.
    gizmoAxis: null,
    panelWasEnabled: !1,
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. Panorama Studio shows and edits its state v2 here.
    frame: 0
  }, q = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (xe.selectedId = null, H.active.selected_sticker_id = null), xe.selectedIds = xe.selectedId ? [xe.selectedId] : [];
  const ve = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ee = on({ label: "editor.still" });
  ee.__panoFrameIdx = 0;
  const K = on({ label: "editor.port-still" });
  K.__panoFrameIdx = 0;
  const Y = {
    // The next frame draws the stage (tickFrame); it waits while the layout settles, keeping the reasons
    // asked for since the last draw.
    dirty: !0,
    reasons: /* @__PURE__ */ new Set(),
    running: !0,
    lastTickTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    // The three.js canvas needs drawing again. A frame that only changes the 2D overlay leaves it as it
    // is, and the page keeps showing its last frame.
    backgroundDirty: !0,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: !1
  }, j = hM({
    requestAnimationFrame: (je) => requestAnimationFrame(je),
    cancelAnimationFrame: (je) => cancelAnimationFrame(je),
    draw: (je, at) => sa(je, at),
    animating: () => Ge()
  }), M = fM({
    requestFrame: (je) => j.requestFrame(je),
    cancelFrame: (je) => j.cancelFrame(je),
    tasks: {
      seek: () => ta.seek(q.scrubFrame),
      // A drag of the background's Clip range seeks its VIDEO to the time it puts at the playhead.
      background: () => ta.seek(xe.frame),
      timeline: () => ia(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Ct(), nt({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => Sn()
    }
  }), ie = N_({
    canvas: ce,
    onReady: () => {
      Yt(), nt({ reason: ft.CONTEXT });
    },
    onFailed: () => nt(),
    onUpdate: () => nt({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: (je) => nt({ localOnly: !0, reason: lC(je) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      yt(), Yt(), nt({ reason: ft.CONTEXT });
    }
  }), le = Number.parseFloat(
    getComputedStyle(re).getPropertyValue("--pano-float-radius")
  ) || 10, we = (je) => {
    const at = String(je || "default");
    ye.style.cursor !== at && (ye.style.cursor = at);
  }, N = {
    timer: 0,
    target: null
  }, ue = {
    active: !1,
    depth: 0
  }, Me = dd({
    getView: () => ({ yaw: xe.viewYaw, pitch: xe.viewPitch, fov: xe.viewFov }),
    setView: (je) => {
      xe.viewYaw = Kt(Number(je.yaw || 0)), xe.viewPitch = Oe(Number(je.pitch || 0), -89.9, 89.9), xe.viewFov = Oe(Number(je.fov || xe.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const je = ye.getBoundingClientRect();
      return {
        w: Math.max(1, Number(je.width || ye.clientWidth || 0)),
        h: Math.max(1, Number(je.height || ye.clientHeight || 0))
      };
    },
    getInvert: () => {
      var je, at;
      return {
        x: (je = H.ui_settings) != null && je.invert_view_x ? -1 : 1,
        y: (at = H.ui_settings) != null && at.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Tt(),
    onInteraction: () => j.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Ee,
    addWorldStickerFromFile: Te,
    applyInitialCutoutFocus: $e,
    applyVideoTimelineFps: ze,
    bindDrag: Ce,
    cancelFrameCameraGesture: He,
    closePaintColorPop: ae,
    commitState: Ie,
    disposeMediaSession: Ae,
    disposeUpstream: Fe,
    editorAnimating: Ge,
    endFrameKeyMove: Ke,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: vt,
    forgetCameraPreviewFrame: yt,
    getUnwrapRect: Tt,
    hidePaintSizePreview: pt,
    hideTooltip: en,
    hoverWorldGizmo: qe,
    isFreeFrameView: cn,
    isFreeSpaceView: Bt,
    migrateLegacyEmbeddedAssets: gi,
    onCanvasDragOver: Yr,
    onCanvasDrop: yi,
    onCanvasMouseMove: an,
    onCanvasPointerCancel: vn,
    onCanvasPointerDown: qr,
    onCanvasPointerMove: mr,
    onCanvasPointerUp: rr,
    onCanvasWheel: Hs,
    onContextMenu: Gi,
    onDeleteKey: Co,
    onEscClose: Io,
    onFrameRollKnobDoubleClick: Gs,
    onFrameRollKnobPointerDown: Ks,
    onFrameRollKnobPointerMove: Ws,
    onFullscreenChange: Ki,
    onModifierKeyChange: Pt,
    onMoveKeyDown: Bn,
    onMoveKeyUp: ir,
    onRootChange: Eo,
    onRootClick: zn,
    onRootInput: Us,
    onRootPointerOut: Bs,
    onRootPointerOver: Ys,
    onSidePanelChange: Xr,
    onSidePanelClick: ic,
    onSidePanelInput: Jr,
    onSpaceKey: qs,
    onSpaceKeyUp: Oo,
    onTimelineAction: oc,
    onUndoRedoKey: Fo,
    onVisibilityChange: To,
    onWindowBlur: Xs,
    onWindowDragEnter: Js,
    onWindowDragLeave: Zs,
    onWindowDragOver: Qs,
    onWindowDrop: ea,
    playback: ta,
    pushHistory: Re,
    reconcileExternalStickerFromInputs: De,
    refreshModalVideoSource: Pe,
    replaceSelectedImageFromFile: St,
    requestDraw: nt,
    restoreView: At,
    sampleEditorDiagnostics: Je,
    saveView: et,
    setDropCue: st,
    setPointerPos: jn,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Be,
    stopRenderLoop: Qe,
    syncCanvasSize: Yt,
    syncCutoutShot: Ct,
    syncFullscreenButton: Cr,
    syncGridToggleButton: Wi,
    syncLookAtFrameButtonState: Ui,
    syncOutputPreviewToggleButton: Bi,
    syncPaintUi: na,
    syncPaintingLayerAsync: ra,
    syncTimeline: ia,
    syncUndoRedoButtons: oa,
    tick: sa,
    triggerBackgroundPersistenceOnClose: aa,
    updateCursor: ct,
    updatePaintColorFromHue: ht,
    updatePaintColorFromSv: bt,
    updateSelectionMenu: _t,
    updateSidePanel: Sn,
    viewControls: tn,
    watchPixelRatio: In
  } = iA({
    api: mn,
    app: dr,
    backgroundCanvas: ce,
    bgWidget: c,
    cameraV2: y,
    canvas: ye,
    closeEditor: or,
    comfyMedia: ci,
    coverageWidget: l,
    ctx: I,
    cutoutPreviewCanvas: ne,
    cutoutPreviewHost: z,
    dragCue: ue,
    dragFrames: M,
    editor: xe,
    editorView: ie,
    floatingRightEl: Q,
    floatingTopEl: E,
    frameGateCssRadius: le,
    frameRailEl: G,
    frameRollKnobEl: m,
    hideSidebar: i,
    imageCache: ve,
    initialShotBase: te,
    loadPreferredExactLinkedImage: eh,
    mediaAssetSource: AC,
    mediaSource: CC,
    mediaUiImage: IC,
    node: e,
    overlay: de,
    paintColorPop: $,
    paintColorRow: T,
    paintColorSv: _,
    paintColorSvCursor: D,
    paintCursorEl: P,
    paintDockEl: S,
    paintHueHandle: be,
    paintHueStrip: X,
    paintSizePreviewEl: he,
    paintSizePreviewSampleEl: A,
    portStillCanvas: K,
    portVideoEl: se,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: V,
    rasterImageAlphaCache: oe,
    rasterImageCache: O,
    readOnly: n,
    resolveEditorOutputPresetWidth: p,
    root: re,
    runtime: Y,
    sceneV2: g,
    scheduler: j,
    selectionMenu: w,
    setCanvasCursor: we,
    shotEditor: W,
    stageWrap: Z,
    state: H,
    stateV2: v,
    stateWidget: d,
    stillCanvas: ee,
    studio: h,
    timeline: q,
    timelinePlayhead: _e,
    toolRailEl: b,
    tooltip: N,
    tooltipEl: F,
    type: t,
    uiState: J,
    videoEl: x,
    videoTimelineFps: Qp,
    videoTransportEl: L,
    viewController: Me,
    vueModal: fe
  }, [
    lA,
    fA,
    pA,
    hA,
    mA,
    gA,
    yA,
    bA,
    vA,
    oC,
    sC,
    aC,
    uC,
    dC,
    fC,
    pC,
    hC,
    mC,
    gC,
    yC,
    bC,
    vC,
    SC,
    _C,
    wC,
    kC,
    xC,
    MC,
    NC,
    PC
  ]);
  Be(), Xe.observe(ye), In();
  const Vt = () => Ie();
  n || (vl(e).flushBeforeQueue = Vt), m == null || m.addEventListener("pointerdown", Ks), m == null || m.addEventListener("pointermove", Ws), m == null || m.addEventListener("pointerup", Ue), m == null || m.addEventListener("pointercancel", () => He()), m == null || m.addEventListener("lostpointercapture", () => {
    var je;
    ((je = xe.interaction) == null ? void 0 : je.source) === "knob" && He();
  }), m == null || m.addEventListener("dblclick", Gs), ye.onpointerdown = qr, ye.onpointermove = mr, ye.onpointerup = rr, ye.onpointercancel = vn, ye.onlostpointercapture = () => {
    He();
  }, ye.onauxclick = (je) => {
    je.button === 1 && je.preventDefault();
  }, ye.oncontextmenu = (je) => {
    (Bt() || cn()) && Rk(tn(), 2) && je.preventDefault();
  }, ye.onmousemove = an, ye.onpointerleave = () => {
    xe.interaction || qe({ x: -1e6, y: -1e6 });
  }, ye.onmouseleave = () => {
    jn(xe.pointerPos, !1), ct(xe.pointerPos), xe.mode === "frame" && xe.primaryTool === "cursor" && nt({ localOnly: !0, reason: ft.OVERLAY });
  }, ye.onwheel = Hs, ye.ondragover = Yr, ye.ondrop = yi, window.addEventListener("dragenter", Js, !0), window.addEventListener("dragover", Qs, !0), window.addEventListener("dragleave", Zs, !0), window.addEventListener("drop", ea, !0), k == null || k.addEventListener("click", ic), k == null || k.addEventListener("input", Jr), k == null || k.addEventListener("change", Xr), Wi(), re.addEventListener("click", zn), re.addEventListener("input", Us), re.addEventListener("change", Eo), re.addEventListener("pointerup", (je) => {
    var at;
    if (je.target.closest("[data-video-volume]")) {
      typeof ((at = je.target) == null ? void 0 : at.blur) == "function" && je.target.blur();
      return;
    }
    je.target.closest("[data-paint-size-slider]") && pt();
  }), re.addEventListener("pointercancel", (je) => {
    var at;
    if (je.target.closest("[data-video-volume]")) {
      typeof ((at = je.target) == null ? void 0 : at.blur) == "function" && je.target.blur();
      return;
    }
    je.target.closest("[data-paint-size-slider]") && pt();
  }), re.addEventListener("focusout", (je) => {
    je.target.closest("[data-paint-size-slider]") && pt();
  }), re.addEventListener("pointerover", Ys), re.addEventListener("pointerout", Bs), re.addEventListener("pointerdown", (je) => {
    je.target.closest("[data-frame-roll-knob]") || en();
  }), _ && (_.onpointerdown = (je) => {
    je.preventDefault(), je.stopPropagation(), Ce(je, (at) => bt(at.clientX, at.clientY));
  }), X && (X.onpointerdown = (je) => {
    je.preventDefault(), je.stopPropagation(), Ce(je, (at) => ht(at.clientX));
  }), re.addEventListener("click", (je) => {
    var bi;
    const at = je.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!at) return;
    const sr = at.getAttribute("data-action") === "confirm-accept", un = (bi = J.confirmDialog) == null ? void 0 : bi.resolve;
    J.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, un == null || un(sr);
  }), document.addEventListener("fullscreenchange", Ki), Cr(), Bi();
  const ln = e.onConnectionsChange;
  let sn = null, zt = () => {
  };
  !n && t === "stickers" && (zt = v0(e, (je = "sync") => {
    je === "executed" && (EC(ve, Di), Pe(), g && ze()), De(je);
  }, { editor: !0 }), sn = function(...at) {
    typeof ln == "function" && ln.apply(this, at), Pe(), oi(this, "connections");
  }, e.onConnectionsChange = sn), n || Zp.set(String(e.id ?? "0"), () => ra());
  let Dt = null;
  async function or() {
    return Dt || (Dt = (async () => {
      var at, sr, un, bi, Zr, la, cf, ca, uf;
      Zp.delete(String(e.id ?? "0")), vt(), Ke(), n || Ie(), et(), document.fullscreenElement === de && ((at = document.exitFullscreen) == null || at.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Ki), Wn(e).liveState = null;
      const je = z_(e);
      return (je == null ? void 0 : je.flushBeforeQueue) === Vt && (je.flushBeforeQueue = null), (bi = (un = (sr = Tg(e)) == null ? void 0 : sr.dom) == null ? void 0 : un.requestDraw) == null || bi.call(un), (la = (Zr = e.graph) == null ? void 0 : Zr.setDirtyCanvas) == null || la.call(Zr, !0, !0), (uf = (ca = (cf = dr) == null ? void 0 : cf.canvas) == null ? void 0 : ca.setDirty) == null || uf.call(ca, !0, !0), en(), M.cancel(), Qe(), Ae(), Fe(), ie.dispose(), st(!1), window.removeEventListener("keydown", Io, !0), window.removeEventListener("keydown", Co, !0), window.removeEventListener("keydown", qs, !0), window.removeEventListener("keyup", Oo, !0), window.removeEventListener("keydown", Bn, !0), window.removeEventListener("keyup", ir, !0), document.removeEventListener("visibilitychange", To), window.removeEventListener("contextmenu", Gi, !0), window.removeEventListener("keydown", Pt, !0), window.removeEventListener("keyup", Pt, !0), window.removeEventListener("blur", Xs), window.removeEventListener("keydown", Fo, !0), window.removeEventListener("dragenter", Js, !0), window.removeEventListener("dragover", Qs, !0), window.removeEventListener("dragleave", Zs, !0), window.removeEventListener("drop", ea, !0), !n && t === "stickers" && (e.onConnectionsChange === sn && (e.onConnectionsChange = ln), zt()), pe.unmount(), ke.remove(), aa(), Dt = null, !0;
    })().catch((je) => (console.error("[PanoramaCutoutSync] closeEditor failed", je), Dt = null, !1)), Dt);
  }
  window.addEventListener("keydown", Io, !0), window.addEventListener("keydown", Co, !0), window.addEventListener("keydown", qs, !0), window.addEventListener("keyup", Oo, !0), window.addEventListener("keydown", Bn, !0), window.addEventListener("keyup", ir, !0), document.addEventListener("visibilitychange", To), window.addEventListener("contextmenu", Gi, !0), window.addEventListener("keydown", Pt, !0), window.addEventListener("keyup", Pt, !0), window.addEventListener("blur", Xs), window.addEventListener("keydown", Fo, !0), de.addEventListener("pointerdown", (je) => {
    je.target === de && or();
  });
  function En(je, at, { rollbackState: sr = !1 } = {}) {
    let un = "";
    try {
      sr && (un = JSON.stringify(H)), at();
    } catch (bi) {
      if (un)
        try {
          const Zr = JSON.parse(un);
          Object.keys(H).forEach((la) => delete H[la]), Object.assign(H, Zr), n || Ie();
        } catch (Zr) {
          console.error(`[PanoramaStickers] editor boot step "${je}" rollback failed`, Zr);
        }
      J.stageWarningDetail = `boot:${je}`, console.error(`[PanoramaStickers] editor boot step "${je}" failed`, bi);
    }
  }
  En("view", At), En("cutout-focus", $e), !n && t === "stickers" && En("external-sticker-sync", () => De("open"), { rollbackState: !0 }), gi().catch((je) => {
    J.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', je);
  }), En("history", () => Re({ initial: !0 })), En("undo-redo", oa), En("paint-ui", na), En("side-panel", Sn), En("look-at-frame", Ui), En("video-source", Pe), En("canvas-size", Yt), En("cursor", () => ct(xe.pointerPos)), nt(), Je();
}
dr.registerExtension(Uk({
  app: dr,
  openEditor: OC,
  attachStickers: uM,
  attachCutout: dM,
  attachPreview: cM,
  restoreOutput: Xx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: F2
}));
