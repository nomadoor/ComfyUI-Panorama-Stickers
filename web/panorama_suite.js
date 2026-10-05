import * as Qa from "../../scripts/app.js";
import { app as Jn } from "../../scripts/app.js";
import { api as fn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function uu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ot = {}, Wi = [], pr = () => {
}, up = () => !1, Qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), mn = Object.assign, du = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Hg = Object.prototype.hasOwnProperty, xt = (e, t) => Hg.call(e, t), ot = Array.isArray, Ki = (e) => fa(e) === "[object Map]", dp = (e) => fa(e) === "[object Set]", Sd = (e) => fa(e) === "[object Date]", st = (e) => typeof e == "function", Bt = (e) => typeof e == "string", gr = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", fp = (e) => (Et(e) || st(e)) && st(e.then) && st(e.catch), pp = Object.prototype.toString, fa = (e) => pp.call(e), Gg = (e) => fa(e).slice(8, -1), hp = (e) => fa(e) === "[object Object]", fu = (e) => Bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ uu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Wg = /-\w/g, _n = tl(
  (e) => e.replace(Wg, (t) => t.slice(1).toUpperCase())
), Kg = /\B([A-Z])/g, ki = tl(
  (e) => e.replace(Kg, "-$1").toLowerCase()
), nl = tl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nl = tl(
  (e) => e ? `on${nl(e)}` : ""
), ur = (e, t) => !Object.is(e, t), es = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, mp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, pu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let wd;
const rl = () => wd || (wd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (ot(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Bt(n) ? qg(n) : It(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Bt(e) || Et(e))
    return e;
}
const Bg = /;(?![^(]*\))/g, Ug = /:([^]+)/, Yg = /\/\*[^]*?\*\//g;
function qg(e) {
  const t = {};
  return e.replace(Yg, "").split(Bg).forEach((r) => {
    if (r) {
      const n = r.split(Ug);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (Bt(e))
    t = e;
  else if (ot(e))
    for (let r = 0; r < e.length; r++) {
      const n = gt(e[r]);
      n && (t += n + " ");
    }
  else if (Et(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Xg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jg = /* @__PURE__ */ uu(Xg);
function gp(e) {
  return !!e || e === "";
}
function Zg(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = hu(e[n], t[n]);
  return r;
}
function hu(e, t) {
  if (e === t) return !0;
  let r = Sd(e), n = Sd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = gr(e), n = gr(t), r || n)
    return e === t;
  if (r = ot(e), n = ot(t), r || n)
    return r && n ? Zg(e, t) : !1;
  if (r = Et(e), n = Et(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !hu(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const yp = (e) => !!(e && e.__v_isRef === !0), it = (e) => Bt(e) ? e : e == null ? "" : ot(e) || Et(e) && (e.toString === pp || !st(e.toString)) ? yp(e) ? it(e.value) : JSON.stringify(e, bp, 2) : String(e), bp = (e, t) => yp(t) ? bp(e, t.value) : Ki(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Cl(n, o) + " =>"] = i, r),
    {}
  )
} : dp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Cl(r))
} : gr(t) ? Cl(t) : Et(t) && !ot(t) && !hp(t) ? String(t) : t, Cl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    gr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kn;
class Qg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = kn, !t && kn && (this.index = (kn.scopes || (kn.scopes = [])).push(
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
      const r = kn;
      try {
        return kn = this, t();
      } finally {
        kn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = kn, kn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (kn = this.prevScope, this.prevScope = void 0);
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
function e0() {
  return kn;
}
let Tt;
const Al = /* @__PURE__ */ new WeakSet();
class vp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kn && kn.active && kn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Al.has(this) && (Al.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Sp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xd(this), wp(this);
    const t = Tt, r = Zn;
    Tt = this, Zn = !0;
    try {
      return this.fn();
    } finally {
      xp(this), Tt = t, Zn = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        yu(t);
      this.deps = this.depsTail = void 0, xd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Al.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hc(this) && this.run();
  }
  get dirty() {
    return hc(this);
  }
}
let _p = 0, zo, jo;
function Sp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = jo, jo = e;
    return;
  }
  e.next = zo, zo = e;
}
function mu() {
  _p++;
}
function gu() {
  if (--_p > 0)
    return;
  if (jo) {
    let t = jo;
    for (jo = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; zo; ) {
    let t = zo;
    for (zo = void 0; t; ) {
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
function wp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), yu(n), t0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function hc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (kp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function kp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qo) || (e.globalVersion = qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Tt, n = Zn;
  Tt = e, Zn = !0;
  try {
    wp(e);
    const i = e.fn(e._value);
    (t.version === 0 || ur(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Tt = r, Zn = n, xp(e), e.flags &= -3;
  }
}
function yu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      yu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function t0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Zn = !0;
const Mp = [];
function Lr() {
  Mp.push(Zn), Zn = !1;
}
function Rr() {
  const e = Mp.pop();
  Zn = e === void 0 ? !0 : e;
}
function xd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Tt;
    Tt = void 0;
    try {
      t();
    } finally {
      Tt = r;
    }
  }
}
let qo = 0;
class n0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class bu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Tt || !Zn || Tt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Tt)
      r = this.activeLink = new n0(Tt, this), Tt.deps ? (r.prevDep = Tt.depsTail, Tt.depsTail.nextDep = r, Tt.depsTail = r) : Tt.deps = Tt.depsTail = r, Pp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Tt.depsTail, r.nextDep = void 0, Tt.depsTail.nextDep = r, Tt.depsTail = r, Tt.deps === r && (Tt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, qo++, this.notify(t);
  }
  notify(t) {
    mu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      gu();
    }
  }
}
function Pp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Pp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const mc = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ Symbol(
  ""
), gc = /* @__PURE__ */ Symbol(
  ""
), Xo = /* @__PURE__ */ Symbol(
  ""
);
function un(e, t, r) {
  if (Zn && Tt) {
    let n = mc.get(e);
    n || mc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new bu()), i.map = n, i.key = r), i.track();
  }
}
function Cr(e, t, r, n, i, o) {
  const a = mc.get(e);
  if (!a) {
    qo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (mu(), t === "clear")
    a.forEach(s);
  else {
    const l = ot(e), u = l && fu(r);
    if (l && r === "length") {
      const d = Number(n);
      a.forEach((c, f) => {
        (f === "length" || f === Xo || !gr(f) && f >= d) && s(c);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), u && s(a.get(Xo)), t) {
        case "add":
          l ? u && s(a.get("length")) : (s(a.get(hi)), Ki(e) && s(a.get(gc)));
          break;
        case "delete":
          l || (s(a.get(hi)), Ki(e) && s(a.get(gc)));
          break;
        case "set":
          Ki(e) && s(a.get(hi));
          break;
      }
  }
  gu();
}
function Oi(e) {
  const t = /* @__PURE__ */ wt(e);
  return t === e ? t : (un(t, "iterate", Xo), /* @__PURE__ */ jn(e) ? t : t.map(tr));
}
function il(e) {
  return un(e = /* @__PURE__ */ wt(e), "iterate", Xo), e;
}
function sr(e, t) {
  return /* @__PURE__ */ Vr(e) ? Qi(/* @__PURE__ */ mi(e) ? tr(t) : t) : tr(t);
}
const r0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Il(this, Symbol.iterator, (e) => sr(this, e));
  },
  concat(...e) {
    return Oi(this).concat(
      ...e.map((t) => ot(t) ? Oi(t) : t)
    );
  },
  entries() {
    return Il(this, "entries", (e) => (e[1] = sr(this, e[1]), e));
  },
  every(e, t) {
    return wr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => sr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return wr(
      this,
      "find",
      e,
      t,
      (r) => sr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return wr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wr(
      this,
      "findLast",
      e,
      t,
      (r) => sr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return El(this, "includes", e);
  },
  indexOf(...e) {
    return El(this, "indexOf", e);
  },
  join(e) {
    return Oi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return El(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xo(this, "pop");
  },
  push(...e) {
    return xo(this, "push", e);
  },
  reduce(e, ...t) {
    return kd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return kd(this, "reduceRight", e, t);
  },
  shift() {
    return xo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xo(this, "splice", e);
  },
  toReversed() {
    return Oi(this).toReversed();
  },
  toSorted(e) {
    return Oi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Oi(this).toSpliced(...e);
  },
  unshift(...e) {
    return xo(this, "unshift", e);
  },
  values() {
    return Il(this, "values", (e) => sr(this, e));
  }
};
function Il(e, t, r) {
  const n = il(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ jn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const i0 = Array.prototype;
function wr(e, t, r, n, i, o) {
  const a = il(e), s = a !== e && !/* @__PURE__ */ jn(e), l = a[t];
  if (l !== i0[t]) {
    const c = l.apply(e, o);
    return s ? tr(c) : c;
  }
  let u = r;
  a !== e && (s ? u = function(c, f) {
    return r.call(this, sr(e, c), f, e);
  } : r.length > 2 && (u = function(c, f) {
    return r.call(this, c, f, e);
  }));
  const d = l.call(a, u, n);
  return s && i ? i(d) : d;
}
function kd(e, t, r, n) {
  const i = il(e), o = i !== e && !/* @__PURE__ */ jn(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(u, d, c) {
    return s && (s = !1, u = sr(e, u)), r.call(this, u, sr(e, d), c, e);
  }) : r.length > 3 && (a = function(u, d, c) {
    return r.call(this, u, d, c, e);
  }));
  const l = i[t](a, ...n);
  return s ? sr(e, l) : l;
}
function El(e, t, r) {
  const n = /* @__PURE__ */ wt(e);
  un(n, "iterate", Xo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Su(r[0]) ? (r[0] = /* @__PURE__ */ wt(r[0]), n[t](...r)) : i;
}
function xo(e, t, r = []) {
  Lr(), mu();
  const n = (/* @__PURE__ */ wt(e))[t].apply(e, r);
  return gu(), Rr(), n;
}
const o0 = /* @__PURE__ */ uu("__proto__,__v_isRef,__isVue"), Np = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gr)
);
function a0(e) {
  gr(e) || (e = String(e));
  const t = /* @__PURE__ */ wt(this);
  return un(t, "has", e), t.hasOwnProperty(e);
}
class Cp {
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
      return n === (i ? o ? g0 : Op : o ? Ep : Ip).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = ot(t);
    if (!i) {
      let l;
      if (a && (l = r0[r]))
        return l;
      if (r === "hasOwnProperty")
        return a0;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ hn(t) ? t : n
    );
    if ((gr(r) ? Np.has(r) : o0(r)) || (i || un(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ hn(s)) {
      const l = a && fu(r) ? s : s.value;
      return i && Et(l) ? /* @__PURE__ */ bc(l) : l;
    }
    return Et(s) ? i ? /* @__PURE__ */ bc(s) : /* @__PURE__ */ ao(s) : s;
  }
}
class Ap extends Cp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = ot(t) && fu(r);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Vr(o);
      if (!/* @__PURE__ */ jn(n) && !/* @__PURE__ */ Vr(n) && (o = /* @__PURE__ */ wt(o), n = /* @__PURE__ */ wt(n)), !a && /* @__PURE__ */ hn(o) && !/* @__PURE__ */ hn(n))
        return u || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : xt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ hn(t) ? t : i
    );
    return t === /* @__PURE__ */ wt(i) && (s ? ur(n, o) && Cr(t, "set", r, n) : Cr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = xt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Cr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!gr(r) || !Np.has(r)) && un(t, "has", r), n;
  }
  ownKeys(t) {
    return un(
      t,
      "iterate",
      ot(t) ? "length" : hi
    ), Reflect.ownKeys(t);
  }
}
class s0 extends Cp {
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
const l0 = /* @__PURE__ */ new Ap(), c0 = /* @__PURE__ */ new s0(), u0 = /* @__PURE__ */ new Ap(!0);
const yc = (e) => e, Da = (e) => Reflect.getPrototypeOf(e);
function d0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ wt(i), a = Ki(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = i[e](...n), d = r ? yc : t ? Qi : tr;
    return !t && un(
      o,
      "iterate",
      l ? gc : hi
    ), mn(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: c, done: f } = u.next();
          return f ? { value: c, done: f } : {
            value: s ? [d(c[0]), d(c[1])] : d(c),
            done: f
          };
        }
      }
    );
  };
}
function La(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function f0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ wt(o), s = /* @__PURE__ */ wt(i);
      e || (ur(i, s) && un(a, "get", i), un(a, "get", s));
      const { has: l } = Da(a), u = t ? yc : e ? Qi : tr;
      if (l.call(a, i))
        return u(o.get(i));
      if (l.call(a, s))
        return u(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && un(/* @__PURE__ */ wt(i), "iterate", hi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ wt(o), s = /* @__PURE__ */ wt(i);
      return e || (ur(i, s) && un(a, "has", i), un(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ wt(s), u = t ? yc : e ? Qi : tr;
      return !e && un(l, "iterate", hi), s.forEach((d, c) => i.call(o, u(d), u(c), a));
    }
  };
  return mn(
    r,
    e ? {
      add: La("add"),
      set: La("set"),
      delete: La("delete"),
      clear: La("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ wt(this), a = Da(o), s = /* @__PURE__ */ wt(i), l = !t && !/* @__PURE__ */ jn(i) && !/* @__PURE__ */ Vr(i) ? s : i;
        return a.has.call(o, l) || ur(i, l) && a.has.call(o, i) || ur(s, l) && a.has.call(o, s) || (o.add(l), Cr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ jn(o) && !/* @__PURE__ */ Vr(o) && (o = /* @__PURE__ */ wt(o));
        const a = /* @__PURE__ */ wt(this), { has: s, get: l } = Da(a);
        let u = s.call(a, i);
        u || (i = /* @__PURE__ */ wt(i), u = s.call(a, i));
        const d = l.call(a, i);
        return a.set(i, o), u ? ur(o, d) && Cr(a, "set", i, o) : Cr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ wt(this), { has: a, get: s } = Da(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ wt(i), l = a.call(o, i)), s && s.call(o, i);
        const u = o.delete(i);
        return l && Cr(o, "delete", i, void 0), u;
      },
      clear() {
        const i = /* @__PURE__ */ wt(this), o = i.size !== 0, a = i.clear();
        return o && Cr(
          i,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = d0(i, e, t);
  }), r;
}
function vu(e, t) {
  const r = f0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    xt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const p0 = {
  get: /* @__PURE__ */ vu(!1, !1)
}, h0 = {
  get: /* @__PURE__ */ vu(!1, !0)
}, m0 = {
  get: /* @__PURE__ */ vu(!0, !1)
};
const Ip = /* @__PURE__ */ new WeakMap(), Ep = /* @__PURE__ */ new WeakMap(), Op = /* @__PURE__ */ new WeakMap(), g0 = /* @__PURE__ */ new WeakMap();
function y0(e) {
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
function b0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : y0(Gg(e));
}
// @__NO_SIDE_EFFECTS__
function ao(e) {
  return /* @__PURE__ */ Vr(e) ? e : _u(
    e,
    !1,
    l0,
    p0,
    Ip
  );
}
// @__NO_SIDE_EFFECTS__
function v0(e) {
  return _u(
    e,
    !1,
    u0,
    h0,
    Ep
  );
}
// @__NO_SIDE_EFFECTS__
function bc(e) {
  return _u(
    e,
    !0,
    c0,
    m0,
    Op
  );
}
function _u(e, t, r, n, i) {
  if (!Et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = b0(e);
  if (o === 0)
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function mi(e) {
  return /* @__PURE__ */ Vr(e) ? /* @__PURE__ */ mi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function jn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Su(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ wt(t) : e;
}
function _0(e) {
  return !xt(e, "__v_skip") && Object.isExtensible(e) && mp(e, "__v_skip", !0), e;
}
const tr = (e) => Et(e) ? /* @__PURE__ */ ao(e) : e, Qi = (e) => Et(e) ? /* @__PURE__ */ bc(e) : e;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return Fp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return Fp(e, !0);
}
function Fp(e, t) {
  return /* @__PURE__ */ hn(e) ? e : new S0(e, t);
}
class S0 {
  constructor(t, r) {
    this.dep = new bu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ wt(t), this._value = r ? t : tr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ jn(t) || /* @__PURE__ */ Vr(t);
    t = n ? t : /* @__PURE__ */ wt(t), ur(t, r) && (this._rawValue = t, this._value = n ? t : tr(t), this.dep.trigger());
  }
}
function nt(e) {
  return /* @__PURE__ */ hn(e) ? e.value : e;
}
const w0 = {
  get: (e, t, r) => t === "__v_raw" ? e : nt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ hn(i) && !/* @__PURE__ */ hn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Tp(e) {
  return /* @__PURE__ */ mi(e) ? e : new Proxy(e, w0);
}
class x0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new bu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Tt !== this)
      return Sp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return kp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function k0(e, t, r = !1) {
  let n, i;
  return st(e) ? n = e : (n = e.get, i = e.set), new x0(n, i, r);
}
const Ra = {}, Ss = /* @__PURE__ */ new WeakMap();
let ci;
function M0(e, t = !1, r = ci) {
  if (r) {
    let n = Ss.get(r);
    n || Ss.set(r, n = []), n.push(e);
  }
}
function P0(e, t, r = Ot) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, u = (Y) => i ? Y : /* @__PURE__ */ jn(Y) || i === !1 || i === 0 ? Ar(Y, 1) : Ar(Y);
  let d, c, f, g, w = !1, h = !1;
  if (/* @__PURE__ */ hn(e) ? (c = () => e.value, w = /* @__PURE__ */ jn(e)) : /* @__PURE__ */ mi(e) ? (c = () => u(e), w = !0) : ot(e) ? (h = !0, w = e.some((Y) => /* @__PURE__ */ mi(Y) || /* @__PURE__ */ jn(Y)), c = () => e.map((Y) => {
    if (/* @__PURE__ */ hn(Y))
      return Y.value;
    if (/* @__PURE__ */ mi(Y))
      return u(Y);
    if (st(Y))
      return l ? l(Y, 2) : Y();
  })) : st(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (f) {
      Lr();
      try {
        f();
      } finally {
        Rr();
      }
    }
    const Y = ci;
    ci = d;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      ci = Y;
    }
  } : c = pr, t && i) {
    const Y = c, C = i === !0 ? 1 / 0 : i;
    c = () => Ar(Y(), C);
  }
  const p = e0(), D = () => {
    d.stop(), p && p.active && du(p.effects, d);
  };
  if (o && t) {
    const Y = t;
    t = (...C) => {
      Y(...C), D();
    };
  }
  let X = h ? new Array(e.length).fill(Ra) : Ra;
  const z = (Y) => {
    if (!(!(d.flags & 1) || !d.dirty && !Y))
      if (t) {
        const C = d.run();
        if (i || w || (h ? C.some((re, L) => ur(re, X[L])) : ur(C, X))) {
          f && f();
          const re = ci;
          ci = d;
          try {
            const L = [
              C,
              // pass undefined as the old value when it's changed for the first time
              X === Ra ? void 0 : h && X[0] === Ra ? [] : X,
              g
            ];
            X = C, l ? l(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            );
          } finally {
            ci = re;
          }
        }
      } else
        d.run();
  };
  return s && s(z), d = new vp(c), d.scheduler = a ? () => a(z, !1) : z, g = (Y) => M0(Y, !1, d), f = d.onStop = () => {
    const Y = Ss.get(d);
    if (Y) {
      if (l)
        l(Y, 4);
      else
        for (const C of Y) C();
      Ss.delete(d);
    }
  }, t ? n ? z(!0) : X = d.run() : a ? a(z.bind(null, !0), !0) : d.run(), D.pause = d.pause.bind(d), D.resume = d.resume.bind(d), D.stop = D, D;
}
function Ar(e, t = 1 / 0, r) {
  if (t <= 0 || !Et(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ hn(e))
    Ar(e.value, t, r);
  else if (ot(e))
    for (let n = 0; n < e.length; n++)
      Ar(e[n], t, r);
  else if (dp(e) || Ki(e))
    e.forEach((n) => {
      Ar(n, t, r);
    });
  else if (hp(e)) {
    for (const n in e)
      Ar(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ar(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pa(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    ol(i, t, r);
  }
}
function yr(e, t, r, n) {
  if (st(e)) {
    const i = pa(e, t, r, n);
    return i && fp(i) && i.catch((o) => {
      ol(o, t, r);
    }), i;
  }
  if (ot(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(yr(e[o], t, r, n));
    return i;
  }
}
function ol(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ot;
  if (t) {
    let s = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, l, u) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Lr(), pa(o, null, 10, [
        e,
        l,
        u
      ]), Rr();
      return;
    }
  }
  N0(e, r, i, n, a);
}
function N0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const vn = [];
let ar = -1;
const Bi = [];
let Ur = null, Di = 0;
const Dp = /* @__PURE__ */ Promise.resolve();
let ws = null;
function al(e) {
  const t = ws || Dp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function C0(e) {
  let t = ar + 1, r = vn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = vn[n], o = Jo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function wu(e) {
  if (!(e.flags & 1)) {
    const t = Jo(e), r = vn[vn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jo(r) ? vn.push(e) : vn.splice(C0(t), 0, e), e.flags |= 1, Lp();
  }
}
function Lp() {
  ws || (ws = Dp.then(Vp));
}
function A0(e) {
  ot(e) ? Bi.push(...e) : Ur && e.id === -1 ? Ur.splice(Di + 1, 0, e) : e.flags & 1 || (Bi.push(e), e.flags |= 1), Lp();
}
function Md(e, t, r = ar + 1) {
  for (; r < vn.length; r++) {
    const n = vn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      vn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Rp(e) {
  if (Bi.length) {
    const t = [...new Set(Bi)].sort(
      (r, n) => Jo(r) - Jo(n)
    );
    if (Bi.length = 0, Ur) {
      Ur.push(...t);
      return;
    }
    for (Ur = t, Di = 0; Di < Ur.length; Di++) {
      const r = Ur[Di];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Ur = null, Di = 0;
  }
}
const Jo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Vp(e) {
  try {
    for (ar = 0; ar < vn.length; ar++) {
      const t = vn[ar];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ar < vn.length; ar++) {
      const t = vn[ar];
      t && (t.flags &= -2);
    }
    ar = -1, vn.length = 0, Rp(), ws = null, (vn.length || Bi.length) && Vp();
  }
}
let Fn = null, $p = null;
function xs(e) {
  const t = Fn;
  return Fn = e, $p = e && e.type.__scopeId || null, t;
}
function zp(e, t = Fn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Rd(-1);
    const o = xs(t);
    let a;
    try {
      a = e(...i);
    } finally {
      xs(o), n._d && Rd(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Fr(e, t) {
  if (Fn === null)
    return e;
  const r = dl(Fn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Ot] = t[i];
    o && (st(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ar(a), n.push({
      dir: o,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function ri(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (Lr(), yr(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), Rr());
  }
}
function I0(e, t) {
  if (dn) {
    let r = dn.provides;
    const n = dn.parent && dn.parent.provides;
    n === r && (r = dn.provides = Object.create(n)), r[e] = t;
  }
}
function ts(e, t, r = !1) {
  const n = Cy();
  if (n || Ui) {
    let i = Ui ? Ui._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && st(t) ? t.call(n && n.proxy) : t;
  }
}
const E0 = /* @__PURE__ */ Symbol.for("v-scx"), O0 = () => ts(E0);
function gi(e, t, r) {
  return jp(e, t, r);
}
function jp(e, t, r = Ot) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = mn({}, r), l = t && n || !t && o !== "post";
  let u;
  if (Qo) {
    if (o === "sync") {
      const g = O0();
      u = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = pr, g.resume = pr, g.pause = pr, g;
    }
  }
  const d = dn;
  s.call = (g, w, h) => yr(g, d, w, h);
  let c = !1;
  o === "post" ? s.scheduler = (g) => {
    xn(g, d && d.suspense);
  } : o !== "sync" && (c = !0, s.scheduler = (g, w) => {
    w ? g() : wu(g);
  }), s.augmentJob = (g) => {
    t && (g.flags |= 4), c && (g.flags |= 2, d && (g.id = d.uid, g.i = d));
  };
  const f = P0(e, t, s);
  return Qo && (u ? u.push(f) : l && f()), f;
}
function F0(e, t, r) {
  const n = this.proxy, i = Bt(e) ? e.includes(".") ? Hp(n, e) : () => n[e] : e.bind(n, n);
  let o;
  st(t) ? o = t : (o = t.handler, r = t);
  const a = ma(this), s = jp(i, o.bind(n), r);
  return a(), s;
}
function Hp(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const T0 = /* @__PURE__ */ Symbol("_vte"), D0 = (e) => e.__isTeleport, L0 = /* @__PURE__ */ Symbol("_leaveCb");
function xu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Gp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const ks = /* @__PURE__ */ new WeakMap();
function Ho(e, t, r, n, i = !1) {
  if (ot(e)) {
    e.forEach(
      (h, p) => Ho(
        h,
        t && (ot(t) ? t[p] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Go(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ho(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? dl(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, u = t && t.r, d = s.refs === Ot ? s.refs = {} : s.refs, c = s.setupState, f = /* @__PURE__ */ wt(c), g = c === Ot ? up : (h) => Pd(d, h) ? !1 : xt(f, h), w = (h, p) => !(p && Pd(d, p));
  if (u != null && u !== l) {
    if (Nd(t), Bt(u))
      d[u] = null, g(u) && (c[u] = null);
    else if (/* @__PURE__ */ hn(u)) {
      const h = t;
      w(u, h.k) && (u.value = null), h.k && (d[h.k] = null);
    }
  }
  if (st(l))
    pa(l, s, 12, [a, d]);
  else {
    const h = Bt(l), p = /* @__PURE__ */ hn(l);
    if (h || p) {
      const D = () => {
        if (e.f) {
          const X = h ? g(l) ? c[l] : d[l] : w() || !e.k ? l.value : d[e.k];
          if (i)
            ot(X) && du(X, o);
          else if (ot(X))
            X.includes(o) || X.push(o);
          else if (h)
            d[l] = [o], g(l) && (c[l] = d[l]);
          else {
            const z = [o];
            w(l, e.k) && (l.value = z), e.k && (d[e.k] = z);
          }
        } else h ? (d[l] = a, g(l) && (c[l] = a)) : p && (w(l, e.k) && (l.value = a), e.k && (d[e.k] = a));
      };
      if (a) {
        const X = () => {
          D(), ks.delete(e);
        };
        X.id = -1, ks.set(e, X), xn(X, r);
      } else
        Nd(e), D();
    }
  }
}
function Nd(e) {
  const t = ks.get(e);
  t && (t.flags |= 8, ks.delete(e));
}
rl().requestIdleCallback;
rl().cancelIdleCallback;
const Go = (e) => !!e.type.__asyncLoader, Wp = (e) => e.type.__isKeepAlive;
function R0(e, t) {
  Kp(e, "a", t);
}
function V0(e, t) {
  Kp(e, "da", t);
}
function Kp(e, t, r = dn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (sl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Wp(i.parent.vnode) && $0(n, t, r, i), i = i.parent;
  }
}
function $0(e, t, r, n) {
  const i = sl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Bp(() => {
    du(n[t], i);
  }, r);
}
function sl(e, t, r = dn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Lr();
      const s = ma(r), l = yr(t, r, e, a);
      return s(), Rr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const zr = (e) => (t, r = dn) => {
  (!Qo || e === "sp") && sl(e, (...n) => t(...n), r);
}, z0 = zr("bm"), ll = zr("m"), j0 = zr(
  "bu"
), H0 = zr("u"), ha = zr(
  "bum"
), Bp = zr("um"), G0 = zr(
  "sp"
), W0 = zr("rtg"), K0 = zr("rtc");
function B0(e, t = dn) {
  sl("ec", e, t);
}
const U0 = "components", Up = /* @__PURE__ */ Symbol.for("v-ndc");
function Y0(e) {
  return Bt(e) ? q0(U0, e, !1) || e : e || Up;
}
function q0(e, t, r = !0, n = !1) {
  const i = Fn || dn;
  if (i) {
    const o = i.type;
    {
      const s = Fy(
        o,
        !1
      );
      if (s && (s === t || s === _n(t) || s === nl(_n(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Cd(i[e] || o[e], t) || // global registration
      Cd(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function Cd(e, t) {
  return e && (e[t] || e[_n(t)] || e[nl(_n(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, a = ot(e);
  if (a || Bt(e)) {
    const s = a && /* @__PURE__ */ mi(e);
    let l = !1, u = !1;
    s && (l = !/* @__PURE__ */ jn(e), u = /* @__PURE__ */ Vr(e), e = il(e)), i = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      i[d] = t(
        l ? u ? Qi(tr(e[d])) : tr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Et(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, u = s.length; l < u; l++) {
        const d = s[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const vc = (e) => e ? hh(e) ? dl(e) : vc(e.parent) : null, Wo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ mn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vc(e.parent),
    $root: (e) => vc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = al.bind(e.proxy)),
    $watch: (e) => F0.bind(e)
  })
), Ol = (e, t) => e !== Ot && !e.__isScriptSetup && xt(e, t), X0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const f = a[t];
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
        if (Ol(n, t))
          return a[t] = 1, n[t];
        if (i !== Ot && xt(i, t))
          return a[t] = 2, i[t];
        if (xt(o, t))
          return a[t] = 3, o[t];
        if (r !== Ot && xt(r, t))
          return a[t] = 4, r[t];
        _c && (a[t] = 0);
      }
    }
    const u = Wo[t];
    let d, c;
    if (u)
      return t === "$attrs" && un(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (d = s.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Ot && xt(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      c = l.config.globalProperties, xt(c, t)
    )
      return c[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Ol(i, t) ? (i[t] = r, !0) : n !== Ot && xt(n, t) ? (n[t] = r, !0) : xt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== Ot && s[0] !== "$" && xt(e, s) || Ol(t, s) || xt(o, s) || xt(n, s) || xt(Wo, s) || xt(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : xt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Ad(e) {
  return ot(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let _c = !0;
function J0(e) {
  const t = qp(e), r = e.proxy, n = e.ctx;
  _c = !1, t.beforeCreate && Id(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: u,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: f,
    beforeUpdate: g,
    updated: w,
    activated: h,
    deactivated: p,
    beforeDestroy: D,
    beforeUnmount: X,
    destroyed: z,
    unmounted: Y,
    render: C,
    renderTracked: re,
    renderTriggered: L,
    errorCaptured: ne,
    serverPrefetch: U,
    // public API
    expose: de,
    inheritAttrs: V,
    // assets
    components: ae,
    directives: H,
    filters: J
  } = t;
  if (u && Z0(u, n, null), a)
    for (const K in a) {
      const E = a[K];
      st(E) && (n[K] = E.bind(r));
    }
  if (i) {
    const K = i.call(r, r);
    Et(K) && (e.data = /* @__PURE__ */ ao(K));
  }
  if (_c = !0, o)
    for (const K in o) {
      const E = o[K], G = st(E) ? E.bind(r, r) : st(E.get) ? E.get.bind(r, r) : pr, O = !st(E) && st(E.set) ? E.set.bind(r) : pr, q = ut({
        get: G,
        set: O
      });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => q.value,
        set: (me) => q.value = me
      });
    }
  if (s)
    for (const K in s)
      Yp(s[K], n, r, K);
  if (l) {
    const K = st(l) ? l.call(r) : l;
    Reflect.ownKeys(K).forEach((E) => {
      I0(E, K[E]);
    });
  }
  d && Id(d, e, "c");
  function Q(K, E) {
    ot(E) ? E.forEach((G) => K(G.bind(r))) : E && K(E.bind(r));
  }
  if (Q(z0, c), Q(ll, f), Q(j0, g), Q(H0, w), Q(R0, h), Q(V0, p), Q(B0, ne), Q(K0, re), Q(W0, L), Q(ha, X), Q(Bp, Y), Q(G0, U), ot(de))
    if (de.length) {
      const K = e.exposed || (e.exposed = {});
      de.forEach((E) => {
        Object.defineProperty(K, E, {
          get: () => r[E],
          set: (G) => r[E] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === pr && (e.render = C), V != null && (e.inheritAttrs = V), ae && (e.components = ae), H && (e.directives = H), U && Gp(e);
}
function Z0(e, t, r = pr) {
  ot(e) && (e = Sc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Et(i) ? "default" in i ? o = ts(
      i.from || n,
      i.default,
      !0
    ) : o = ts(i.from || n) : o = ts(i), /* @__PURE__ */ hn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function Id(e, t, r) {
  yr(
    ot(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Yp(e, t, r, n) {
  let i = n.includes(".") ? Hp(r, n) : () => r[n];
  if (Bt(e)) {
    const o = t[e];
    st(o) && gi(i, o);
  } else if (st(e))
    gi(i, e.bind(r));
  else if (Et(e))
    if (ot(e))
      e.forEach((o) => Yp(o, t, r, n));
    else {
      const o = st(e.handler) ? e.handler.bind(r) : t[e.handler];
      st(o) && gi(i, o, e);
    }
}
function qp(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (u) => Ms(l, u, a, !0)
  ), Ms(l, t, a)), Et(t) && o.set(t, l), l;
}
function Ms(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ms(e, o, r, !0), i && i.forEach(
    (a) => Ms(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = Q0[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const Q0 = {
  data: Ed,
  props: Od,
  emits: Od,
  // objects
  methods: Io,
  computed: Io,
  // lifecycle
  beforeCreate: bn,
  created: bn,
  beforeMount: bn,
  mounted: bn,
  beforeUpdate: bn,
  updated: bn,
  beforeDestroy: bn,
  beforeUnmount: bn,
  destroyed: bn,
  unmounted: bn,
  activated: bn,
  deactivated: bn,
  errorCaptured: bn,
  serverPrefetch: bn,
  // assets
  components: Io,
  directives: Io,
  // watch
  watch: ty,
  // provide / inject
  provide: Ed,
  inject: ey
};
function Ed(e, t) {
  return t ? e ? function() {
    return mn(
      st(e) ? e.call(this, this) : e,
      st(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ey(e, t) {
  return Io(Sc(e), Sc(t));
}
function Sc(e) {
  if (ot(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function bn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Io(e, t) {
  return e ? mn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Od(e, t) {
  return e ? ot(e) && ot(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : mn(
    /* @__PURE__ */ Object.create(null),
    Ad(e),
    Ad(t ?? {})
  ) : t;
}
function ty(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = mn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = bn(e[n], t[n]);
  return r;
}
function Xp() {
  return {
    app: null,
    config: {
      isNativeTag: up,
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
let ny = 0;
function ry(e, t) {
  return function(n, i = null) {
    st(n) || (n = mn({}, n)), i != null && !Et(i) && (i = null);
    const o = Xp(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const u = o.app = {
      _uid: ny++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Dy,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...c) {
        return a.has(d) || (d && st(d.install) ? (a.add(d), d.install(u, ...c)) : st(d) && (a.add(d), d(u, ...c))), u;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u;
      },
      component(d, c) {
        return c ? (o.components[d] = c, u) : o.components[d];
      },
      directive(d, c) {
        return c ? (o.directives[d] = c, u) : o.directives[d];
      },
      mount(d, c, f) {
        if (!l) {
          const g = u._ceVNode || Ke(n, i);
          return g.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(g, d, f), l = !0, u._container = d, d.__vue_app__ = u, dl(g.component);
        }
      },
      onUnmount(d) {
        s.push(d);
      },
      unmount() {
        l && (yr(
          s,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, c) {
        return o.provides[d] = c, u;
      },
      runWithContext(d) {
        const c = Ui;
        Ui = u;
        try {
          return d();
        } finally {
          Ui = c;
        }
      }
    };
    return u;
  };
}
let Ui = null;
const iy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${ki(t)}Modifiers`];
function oy(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ot;
  let i = r;
  const o = t.startsWith("update:"), a = o && iy(n, t.slice(7));
  a && (a.trim && (i = r.map((d) => Bt(d) ? d.trim() : d)), a.number && (i = r.map(pu)));
  let s, l = n[s = Nl(t)] || // also try camelCase event handler (#2249)
  n[s = Nl(_n(t))];
  !l && o && (l = n[s = Nl(ki(t))]), l && yr(
    l,
    e,
    6,
    i
  );
  const u = n[s + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, yr(
      u,
      e,
      6,
      i
    );
  }
}
const ay = /* @__PURE__ */ new WeakMap();
function Jp(e, t, r = !1) {
  const n = r ? ay : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!st(e)) {
    const l = (u) => {
      const d = Jp(u, t, !0);
      d && (s = !0, mn(a, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Et(e) && n.set(e, null), null) : (ot(o) ? o.forEach((l) => a[l] = null) : mn(a, o), Et(e) && n.set(e, a), a);
}
function cl(e, t) {
  return !e || !Qs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xt(e, t[0].toLowerCase() + t.slice(1)) || xt(e, ki(t)) || xt(e, t));
}
function Fd(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: u,
    renderCache: d,
    props: c,
    data: f,
    setupState: g,
    ctx: w,
    inheritAttrs: h
  } = e, p = xs(e);
  let D, X;
  try {
    if (r.shapeFlag & 4) {
      const Y = i || n, C = Y;
      D = lr(
        u.call(
          C,
          Y,
          d,
          c,
          g,
          f,
          w
        )
      ), X = s;
    } else {
      const Y = t;
      D = lr(
        Y.length > 1 ? Y(
          c,
          { attrs: s, slots: a, emit: l }
        ) : Y(
          c,
          null
        )
      ), X = t.props ? s : sy(s);
    }
  } catch (Y) {
    Ko.length = 0, ol(Y, e, 1), D = Ke(Xr);
  }
  let z = D;
  if (X && h !== !1) {
    const Y = Object.keys(X), { shapeFlag: C } = z;
    Y.length && C & 7 && (o && Y.some(el) && (X = ly(
      X,
      o
    )), z = eo(z, X, !1, !0));
  }
  return r.dirs && (z = eo(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && xu(z, r.transition), D = z, xs(p), D;
}
const sy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Qs(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ly = (e, t) => {
  const r = {};
  for (const n in e)
    (!el(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function cy(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Td(n, a, u) : !!a;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const f = d[c];
        if (Zp(a, n, f) && !cl(u, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Td(n, a, u) : !0 : !!a;
  return !1;
}
function Td(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Zp(t, e, o) && !cl(r, o))
      return !0;
  }
  return !1;
}
function Zp(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Et(n) && Et(i) ? !hu(n, i) : n !== i;
}
function uy({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Qp = {}, eh = () => Object.create(Qp), th = (e) => Object.getPrototypeOf(e) === Qp;
function dy(e, t, r, n = !1) {
  const i = {}, o = eh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nh(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ v0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function fy(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ wt(i), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const d = e.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let f = d[c];
        if (cl(e.emitsOptions, f))
          continue;
        const g = t[f];
        if (l)
          if (xt(o, f))
            g !== o[f] && (o[f] = g, u = !0);
          else {
            const w = _n(f);
            i[w] = wc(
              l,
              s,
              w,
              g,
              e,
              !1
            );
          }
        else
          g !== o[f] && (o[f] = g, u = !0);
      }
    }
  } else {
    nh(e, t, i, o) && (u = !0);
    let d;
    for (const c in s)
      (!t || // for camelCase
      !xt(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = ki(c)) === c || !xt(t, d))) && (l ? r && // for camelCase
      (r[c] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[c] = wc(
        l,
        s,
        c,
        void 0,
        e,
        !0
      )) : delete i[c]);
    if (o !== s)
      for (const c in o)
        (!t || !xt(t, c)) && (delete o[c], u = !0);
  }
  u && Cr(e.attrs, "set", "");
}
function nh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if ($o(l))
        continue;
      const u = t[l];
      let d;
      i && xt(i, d = _n(l)) ? !o || !o.includes(d) ? r[d] = u : (s || (s = {}))[d] = u : cl(e.emitsOptions, l) || (!(l in n) || u !== n[l]) && (n[l] = u, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ wt(r), u = s || Ot;
    for (let d = 0; d < o.length; d++) {
      const c = o[d];
      r[c] = wc(
        i,
        l,
        c,
        u[c],
        e,
        !xt(u, c)
      );
    }
  }
  return a;
}
function wc(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = xt(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && st(l)) {
        const { propsDefaults: u } = i;
        if (r in u)
          n = u[r];
        else {
          const d = ma(i);
          n = u[r] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? n = !1 : a[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ki(r)) && (n = !0));
  }
  return n;
}
const py = /* @__PURE__ */ new WeakMap();
function rh(e, t, r = !1) {
  const n = r ? py : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!st(e)) {
    const d = (c) => {
      l = !0;
      const [f, g] = rh(c, t, !0);
      mn(a, f), g && s.push(...g);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Et(e) && n.set(e, Wi), Wi;
  if (ot(o))
    for (let d = 0; d < o.length; d++) {
      const c = _n(o[d]);
      Dd(c) && (a[c] = Ot);
    }
  else if (o)
    for (const d in o) {
      const c = _n(d);
      if (Dd(c)) {
        const f = o[d], g = a[c] = ot(f) || st(f) ? { type: f } : mn({}, f), w = g.type;
        let h = !1, p = !0;
        if (ot(w))
          for (let D = 0; D < w.length; ++D) {
            const X = w[D], z = st(X) && X.name;
            if (z === "Boolean") {
              h = !0;
              break;
            } else z === "String" && (p = !1);
          }
        else
          h = st(w) && w.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = h, g[
          1
          /* shouldCastTrue */
        ] = p, (h || xt(g, "default")) && s.push(c);
      }
    }
  const u = [a, s];
  return Et(e) && n.set(e, u), u;
}
function Dd(e) {
  return e[0] !== "$" && !$o(e);
}
const ku = (e) => e === "_" || e === "_ctx" || e === "$stable", Mu = (e) => ot(e) ? e.map(lr) : [lr(e)], hy = (e, t, r) => {
  if (t._n)
    return t;
  const n = zp((...i) => Mu(t(...i)), r);
  return n._c = !1, n;
}, ih = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (ku(i)) continue;
    const o = e[i];
    if (st(o))
      t[i] = hy(i, o, n);
    else if (o != null) {
      const a = Mu(o);
      t[i] = () => a;
    }
  }
}, oh = (e, t) => {
  const r = Mu(t);
  e.slots.default = () => r;
}, ah = (e, t, r) => {
  for (const n in t)
    (r || !ku(n)) && (e[n] = t[n]);
}, my = (e, t, r) => {
  const n = e.slots = eh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ah(n, t, r), r && mp(n, "_", i, !0)) : ih(t, n);
  } else t && oh(e, t);
}, gy = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = Ot;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : ah(i, t, r) : (o = !t.$stable, ih(t, i)), a = t;
  } else t && (oh(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !ku(s) && a[s] == null && delete i[s];
}, xn = Sy;
function yy(e) {
  return by(e);
}
function by(e, t) {
  const r = rl();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: u,
    setElementText: d,
    parentNode: c,
    nextSibling: f,
    setScopeId: g = pr,
    insertStaticContent: w
  } = e, h = (y, v, F, S = null, j = null, x = null, R = void 0, _ = null, P = !!v.dynamicChildren) => {
    if (y === v)
      return;
    y && !ko(y, v) && (S = ue(y), me(y, j, x, !0), y = null), v.patchFlag === -2 && (P = !1, v.dynamicChildren = null);
    const { type: I, ref: B, shapeFlag: le } = v;
    switch (I) {
      case ul:
        p(y, v, F, S);
        break;
      case Xr:
        D(y, v, F, S);
        break;
      case Tl:
        y == null && X(v, F, S, R);
        break;
      case et:
        ae(
          y,
          v,
          F,
          S,
          j,
          x,
          R,
          _,
          P
        );
        break;
      default:
        le & 1 ? C(
          y,
          v,
          F,
          S,
          j,
          x,
          R,
          _,
          P
        ) : le & 6 ? H(
          y,
          v,
          F,
          S,
          j,
          x,
          R,
          _,
          P
        ) : (le & 64 || le & 128) && I.process(
          y,
          v,
          F,
          S,
          j,
          x,
          R,
          _,
          P,
          A
        );
    }
    B != null && j ? Ho(B, y && y.ref, x, v || y, !v) : B == null && y && y.ref != null && Ho(y.ref, null, x, y, !0);
  }, p = (y, v, F, S) => {
    if (y == null)
      n(
        v.el = s(v.children),
        F,
        S
      );
    else {
      const j = v.el = y.el;
      v.children !== y.children && u(j, v.children);
    }
  }, D = (y, v, F, S) => {
    y == null ? n(
      v.el = l(v.children || ""),
      F,
      S
    ) : v.el = y.el;
  }, X = (y, v, F, S) => {
    [y.el, y.anchor] = w(
      y.children,
      v,
      F,
      S,
      y.el,
      y.anchor
    );
  }, z = ({ el: y, anchor: v }, F, S) => {
    let j;
    for (; y && y !== v; )
      j = f(y), n(y, F, S), y = j;
    n(v, F, S);
  }, Y = ({ el: y, anchor: v }) => {
    let F;
    for (; y && y !== v; )
      F = f(y), i(y), y = F;
    i(v);
  }, C = (y, v, F, S, j, x, R, _, P) => {
    if (v.type === "svg" ? R = "svg" : v.type === "math" && (R = "mathml"), y == null)
      re(
        v,
        F,
        S,
        j,
        x,
        R,
        _,
        P
      );
    else {
      const I = y.el && y.el._isVueCE ? y.el : null;
      try {
        I && I._beginPatch(), U(
          y,
          v,
          j,
          x,
          R,
          _,
          P
        );
      } finally {
        I && I._endPatch();
      }
    }
  }, re = (y, v, F, S, j, x, R, _) => {
    let P, I;
    const { props: B, shapeFlag: le, transition: he, dirs: ee } = y;
    if (P = y.el = a(
      y.type,
      x,
      B && B.is,
      B
    ), le & 8 ? d(P, y.children) : le & 16 && ne(
      y.children,
      P,
      null,
      S,
      j,
      Fl(y, x),
      R,
      _
    ), ee && ri(y, null, S, "created"), L(P, y, y.scopeId, R, S), B) {
      for (const Se in B)
        Se !== "value" && !$o(Se) && o(P, Se, null, B[Se], x, S);
      "value" in B && o(P, "value", null, B.value, x), (I = B.onVnodeBeforeMount) && ir(I, S, y);
    }
    ee && ri(y, null, S, "beforeMount");
    const pe = vy(j, he);
    pe && he.beforeEnter(P), n(P, v, F), ((I = B && B.onVnodeMounted) || pe || ee) && xn(() => {
      try {
        I && ir(I, S, y), pe && he.enter(P), ee && ri(y, null, S, "mounted");
      } finally {
      }
    }, j);
  }, L = (y, v, F, S, j) => {
    if (F && g(y, F), S)
      for (let x = 0; x < S.length; x++)
        g(y, S[x]);
    if (j) {
      let x = j.subTree;
      if (v === x || uh(x.type) && (x.ssContent === v || x.ssFallback === v)) {
        const R = j.vnode;
        L(
          y,
          R,
          R.scopeId,
          R.slotScopeIds,
          j.parent
        );
      }
    }
  }, ne = (y, v, F, S, j, x, R, _, P = 0) => {
    for (let I = P; I < y.length; I++) {
      const B = y[I] = _ ? Mr(y[I]) : lr(y[I]);
      h(
        null,
        B,
        v,
        F,
        S,
        j,
        x,
        R,
        _
      );
    }
  }, U = (y, v, F, S, j, x, R) => {
    const _ = v.el = y.el;
    let { patchFlag: P, dynamicChildren: I, dirs: B } = v;
    P |= y.patchFlag & 16;
    const le = y.props || Ot, he = v.props || Ot;
    let ee;
    if (F && ii(F, !1), (ee = he.onVnodeBeforeUpdate) && ir(ee, F, v, y), B && ri(v, y, F, "beforeUpdate"), F && ii(F, !0), (le.innerHTML && he.innerHTML == null || le.textContent && he.textContent == null) && d(_, ""), I ? de(
      y.dynamicChildren,
      I,
      _,
      F,
      S,
      Fl(v, j),
      x
    ) : R || E(
      y,
      v,
      _,
      null,
      F,
      S,
      Fl(v, j),
      x,
      !1
    ), P > 0) {
      if (P & 16)
        V(_, le, he, F, j);
      else if (P & 2 && le.class !== he.class && o(_, "class", null, he.class, j), P & 4 && o(_, "style", le.style, he.style, j), P & 8) {
        const pe = v.dynamicProps;
        for (let Se = 0; Se < pe.length; Se++) {
          const Pe = pe[Se], fe = le[Pe], ge = he[Pe];
          (ge !== fe || Pe === "value") && o(_, Pe, fe, ge, j, F);
        }
      }
      P & 1 && y.children !== v.children && d(_, v.children);
    } else !R && I == null && V(_, le, he, F, j);
    ((ee = he.onVnodeUpdated) || B) && xn(() => {
      ee && ir(ee, F, v, y), B && ri(v, y, F, "updated");
    }, S);
  }, de = (y, v, F, S, j, x, R) => {
    for (let _ = 0; _ < v.length; _++) {
      const P = y[_], I = v[_], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ko(P, I) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? c(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      h(
        P,
        I,
        B,
        null,
        S,
        j,
        x,
        R,
        !0
      );
    }
  }, V = (y, v, F, S, j) => {
    if (v !== F) {
      if (v !== Ot)
        for (const x in v)
          !$o(x) && !(x in F) && o(
            y,
            x,
            v[x],
            null,
            j,
            S
          );
      for (const x in F) {
        if ($o(x)) continue;
        const R = F[x], _ = v[x];
        R !== _ && x !== "value" && o(y, x, _, R, j, S);
      }
      "value" in F && o(y, "value", v.value, F.value, j);
    }
  }, ae = (y, v, F, S, j, x, R, _, P) => {
    const I = v.el = y ? y.el : s(""), B = v.anchor = y ? y.anchor : s("");
    let { patchFlag: le, dynamicChildren: he, slotScopeIds: ee } = v;
    ee && (_ = _ ? _.concat(ee) : ee), y == null ? (n(I, F, S), n(B, F, S), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      F,
      B,
      j,
      x,
      R,
      _,
      P
    )) : le > 0 && le & 64 && he && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren && y.dynamicChildren.length === he.length ? (de(
      y.dynamicChildren,
      he,
      F,
      j,
      x,
      R,
      _
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || j && v === j.subTree) && sh(
      y,
      v,
      !0
      /* shallow */
    )) : E(
      y,
      v,
      F,
      B,
      j,
      x,
      R,
      _,
      P
    );
  }, H = (y, v, F, S, j, x, R, _, P) => {
    v.slotScopeIds = _, y == null ? v.shapeFlag & 512 ? j.ctx.activate(
      v,
      F,
      S,
      R,
      P
    ) : J(
      v,
      F,
      S,
      j,
      x,
      R,
      P
    ) : $(y, v, P);
  }, J = (y, v, F, S, j, x, R) => {
    const _ = y.component = Ny(
      y,
      S,
      j
    );
    if (Wp(y) && (_.ctx.renderer = A), Ay(_, !1, R), _.asyncDep) {
      if (j && j.registerDep(_, Q, R), !y.el) {
        const P = _.subTree = Ke(Xr);
        D(null, P, v, F), y.placeholder = P.el;
      }
    } else
      Q(
        _,
        y,
        v,
        F,
        j,
        x,
        R
      );
  }, $ = (y, v, F) => {
    const S = v.component = y.component;
    if (cy(y, v, F))
      if (S.asyncDep && !S.asyncResolved) {
        K(S, v, F);
        return;
      } else
        S.next = v, S.update();
    else
      v.el = y.el, S.vnode = v;
  }, Q = (y, v, F, S, j, x, R) => {
    const _ = () => {
      if (y.isMounted) {
        let { next: le, bu: he, u: ee, parent: pe, vnode: Se } = y;
        {
          const m = lh(y);
          if (m) {
            le && (le.el = Se.el, K(y, le, R)), m.asyncDep.then(() => {
              xn(() => {
                y.isUnmounted || I();
              }, j);
            });
            return;
          }
        }
        let Pe = le, fe;
        ii(y, !1), le ? (le.el = Se.el, K(y, le, R)) : le = Se, he && es(he), (fe = le.props && le.props.onVnodeBeforeUpdate) && ir(fe, pe, le, Se), ii(y, !0);
        const ge = Fd(y), b = y.subTree;
        y.subTree = ge, h(
          b,
          ge,
          // parent may have changed if it's in a teleport
          c(b.el),
          // anchor may have changed if it's in a fragment
          ue(b),
          y,
          j,
          x
        ), le.el = ge.el, Pe === null && uy(y, ge.el), ee && xn(ee, j), (fe = le.props && le.props.onVnodeUpdated) && xn(
          () => ir(fe, pe, le, Se),
          j
        );
      } else {
        let le;
        const { el: he, props: ee } = v, { bm: pe, m: Se, parent: Pe, root: fe, type: ge } = y, b = Go(v);
        ii(y, !1), pe && es(pe), !b && (le = ee && ee.onVnodeBeforeMount) && ir(le, Pe, v), ii(y, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            ge,
            y.parent ? y.parent.type : void 0
          );
          const m = y.subTree = Fd(y);
          h(
            null,
            m,
            F,
            S,
            y,
            j,
            x
          ), v.el = m.el;
        }
        if (Se && xn(Se, j), !b && (le = ee && ee.onVnodeMounted)) {
          const m = v;
          xn(
            () => ir(le, Pe, m),
            j
          );
        }
        (v.shapeFlag & 256 || Pe && Go(Pe.vnode) && Pe.vnode.shapeFlag & 256) && y.a && xn(y.a, j), y.isMounted = !0, v = F = S = null;
      }
    };
    y.scope.on();
    const P = y.effect = new vp(_);
    y.scope.off();
    const I = y.update = P.run.bind(P), B = y.job = P.runIfDirty.bind(P);
    B.i = y, B.id = y.uid, P.scheduler = () => wu(B), ii(y, !0), I();
  }, K = (y, v, F) => {
    v.component = y;
    const S = y.vnode.props;
    y.vnode = v, y.next = null, fy(y, v.props, S, F), gy(y, v.children, F), Lr(), Md(y), Rr();
  }, E = (y, v, F, S, j, x, R, _, P = !1) => {
    const I = y && y.children, B = y ? y.shapeFlag : 0, le = v.children, { patchFlag: he, shapeFlag: ee } = v;
    if (he > 0) {
      if (he & 128) {
        O(
          I,
          le,
          F,
          S,
          j,
          x,
          R,
          _,
          P
        );
        return;
      } else if (he & 256) {
        G(
          I,
          le,
          F,
          S,
          j,
          x,
          R,
          _,
          P
        );
        return;
      }
    }
    ee & 8 ? (B & 16 && oe(I, j, x), le !== I && d(F, le)) : B & 16 ? ee & 16 ? O(
      I,
      le,
      F,
      S,
      j,
      x,
      R,
      _,
      P
    ) : oe(I, j, x, !0) : (B & 8 && d(F, ""), ee & 16 && ne(
      le,
      F,
      S,
      j,
      x,
      R,
      _,
      P
    ));
  }, G = (y, v, F, S, j, x, R, _, P) => {
    y = y || Wi, v = v || Wi;
    const I = y.length, B = v.length, le = Math.min(I, B);
    let he;
    for (he = 0; he < le; he++) {
      const ee = v[he] = P ? Mr(v[he]) : lr(v[he]);
      h(
        y[he],
        ee,
        F,
        null,
        j,
        x,
        R,
        _,
        P
      );
    }
    I > B ? oe(
      y,
      j,
      x,
      !0,
      !1,
      le
    ) : ne(
      v,
      F,
      S,
      j,
      x,
      R,
      _,
      P,
      le
    );
  }, O = (y, v, F, S, j, x, R, _, P) => {
    let I = 0;
    const B = v.length;
    let le = y.length - 1, he = B - 1;
    for (; I <= le && I <= he; ) {
      const ee = y[I], pe = v[I] = P ? Mr(v[I]) : lr(v[I]);
      if (ko(ee, pe))
        h(
          ee,
          pe,
          F,
          null,
          j,
          x,
          R,
          _,
          P
        );
      else
        break;
      I++;
    }
    for (; I <= le && I <= he; ) {
      const ee = y[le], pe = v[he] = P ? Mr(v[he]) : lr(v[he]);
      if (ko(ee, pe))
        h(
          ee,
          pe,
          F,
          null,
          j,
          x,
          R,
          _,
          P
        );
      else
        break;
      le--, he--;
    }
    if (I > le) {
      if (I <= he) {
        const ee = he + 1, pe = ee < B ? v[ee].el : S;
        for (; I <= he; )
          h(
            null,
            v[I] = P ? Mr(v[I]) : lr(v[I]),
            F,
            pe,
            j,
            x,
            R,
            _,
            P
          ), I++;
      }
    } else if (I > he)
      for (; I <= le; )
        me(y[I], j, x, !0), I++;
    else {
      const ee = I, pe = I, Se = /* @__PURE__ */ new Map();
      for (I = pe; I <= he; I++) {
        const k = v[I] = P ? Mr(v[I]) : lr(v[I]);
        k.key != null && Se.set(k.key, I);
      }
      let Pe, fe = 0;
      const ge = he - pe + 1;
      let b = !1, m = 0;
      const T = new Array(ge);
      for (I = 0; I < ge; I++) T[I] = 0;
      for (I = ee; I <= le; I++) {
        const k = y[I];
        if (fe >= ge) {
          me(k, j, x, !0);
          continue;
        }
        let ie;
        if (k.key != null)
          ie = Se.get(k.key);
        else
          for (Pe = pe; Pe <= he; Pe++)
            if (T[Pe - pe] === 0 && ko(k, v[Pe])) {
              ie = Pe;
              break;
            }
        ie === void 0 ? me(k, j, x, !0) : (T[ie - pe] = I + 1, ie >= m ? m = ie : b = !0, h(
          k,
          v[ie],
          F,
          null,
          j,
          x,
          R,
          _,
          P
        ), fe++);
      }
      const M = b ? _y(T) : Wi;
      for (Pe = M.length - 1, I = ge - 1; I >= 0; I--) {
        const k = pe + I, ie = v[k], ye = v[k + 1], W = k + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ye.el || ch(ye)
        ) : S;
        T[I] === 0 ? h(
          null,
          ie,
          F,
          W,
          j,
          x,
          R,
          _,
          P
        ) : b && (Pe < 0 || I !== M[Pe] ? q(ie, F, W, 2) : Pe--);
      }
    }
  }, q = (y, v, F, S, j = null) => {
    const { el: x, type: R, transition: _, children: P, shapeFlag: I } = y;
    if (I & 6) {
      q(y.component.subTree, v, F, S);
      return;
    }
    if (I & 128) {
      y.suspense.move(v, F, S);
      return;
    }
    if (I & 64) {
      R.move(y, v, F, A);
      return;
    }
    if (R === et) {
      n(x, v, F);
      for (let le = 0; le < P.length; le++)
        q(P[le], v, F, S);
      n(y.anchor, v, F);
      return;
    }
    if (R === Tl) {
      z(y, v, F);
      return;
    }
    if (S !== 2 && I & 1 && _)
      if (S === 0)
        _.beforeEnter(x), n(x, v, F), xn(() => _.enter(x), j);
      else {
        const { leave: le, delayLeave: he, afterLeave: ee } = _, pe = () => {
          y.ctx.isUnmounted ? i(x) : n(x, v, F);
        }, Se = () => {
          x._isLeaving && x[L0](
            !0
            /* cancelled */
          ), le(x, () => {
            pe(), ee && ee();
          });
        };
        he ? he(x, pe, Se) : Se();
      }
    else
      n(x, v, F);
  }, me = (y, v, F, S = !1, j = !1) => {
    const {
      type: x,
      props: R,
      ref: _,
      children: P,
      dynamicChildren: I,
      shapeFlag: B,
      patchFlag: le,
      dirs: he,
      cacheIndex: ee,
      memo: pe
    } = y;
    if (le === -2 && (j = !1), _ != null && (Lr(), Ho(_, null, F, y, !0), Rr()), ee != null && (v.renderCache[ee] = void 0), B & 256) {
      v.ctx.deactivate(y);
      return;
    }
    const Se = B & 1 && he, Pe = !Go(y);
    let fe;
    if (Pe && (fe = R && R.onVnodeBeforeUnmount) && ir(fe, v, y), B & 6)
      N(y.component, F, S);
    else {
      if (B & 128) {
        y.suspense.unmount(F, S);
        return;
      }
      Se && ri(y, null, v, "beforeUnmount"), B & 64 ? y.type.remove(
        y,
        v,
        F,
        A,
        S
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== et || le > 0 && le & 64) ? oe(
        I,
        v,
        F,
        !1,
        !0
      ) : (x === et && le & 384 || !j && B & 16) && oe(P, v, F), S && _e(y);
    }
    const ge = pe != null && ee == null;
    (Pe && (fe = R && R.onVnodeUnmounted) || Se || ge) && xn(() => {
      fe && ir(fe, v, y), Se && ri(y, null, v, "unmounted"), ge && (y.el = null);
    }, F);
  }, _e = (y) => {
    const { type: v, el: F, anchor: S, transition: j } = y;
    if (v === et) {
      te(F, S);
      return;
    }
    if (v === Tl) {
      Y(y);
      return;
    }
    const x = () => {
      i(F), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (y.shapeFlag & 1 && j && !j.persisted) {
      const { leave: R, delayLeave: _ } = j, P = () => R(F, x);
      _ ? _(y.el, x, P) : P();
    } else
      x();
  }, te = (y, v) => {
    let F;
    for (; y !== v; )
      F = f(y), i(y), y = F;
    i(v);
  }, N = (y, v, F) => {
    const { bum: S, scope: j, job: x, subTree: R, um: _, m: P, a: I } = y;
    Ld(P), Ld(I), S && es(S), j.stop(), x && (x.flags |= 8, me(R, y, v, F)), _ && xn(_, v), xn(() => {
      y.isUnmounted = !0;
    }, v);
  }, oe = (y, v, F, S = !1, j = !1, x = 0) => {
    for (let R = x; R < y.length; R++)
      me(y[R], v, F, S, j);
  }, ue = (y) => {
    if (y.shapeFlag & 6)
      return ue(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const v = f(y.anchor || y.el), F = v && v[T0];
    return F ? f(F) : v;
  };
  let be = !1;
  const ve = (y, v, F) => {
    let S;
    y == null ? v._vnode && (me(v._vnode, null, null, !0), S = v._vnode.component) : h(
      v._vnode || null,
      y,
      v,
      null,
      null,
      null,
      F
    ), v._vnode = y, be || (be = !0, Md(S), Rp(), be = !1);
  }, A = {
    p: h,
    um: me,
    m: q,
    r: _e,
    mt: J,
    mc: ne,
    pc: E,
    pbc: de,
    n: ue,
    o: e
  };
  return {
    render: ve,
    hydrate: void 0,
    createApp: ry(ve)
  };
}
function Fl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ii({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ot(n) && ot(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Mr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && sh(a, s)), s.type === ul && (s.patchFlag === -1 && (s = i[o] = Mr(s)), s.el = a.el), s.type === Xr && !s.el && (s.el = a.el);
    }
}
function _y(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const u = e[n];
    if (u !== 0) {
      if (i = r[r.length - 1], e[i] < u) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, a = r.length - 1; o < a; )
        s = o + a >> 1, e[r[s]] < u ? o = s + 1 : a = s;
      u < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; )
    r[o] = a, a = t[a];
  return r;
}
function lh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : lh(t);
}
function Ld(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ch(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ch(t.subTree) : null;
}
const uh = (e) => e.__isSuspense;
function Sy(e, t) {
  t && t.pendingBranch ? ot(e) ? t.effects.push(...e) : t.effects.push(e) : A0(e);
}
const et = /* @__PURE__ */ Symbol.for("v-fgt"), ul = /* @__PURE__ */ Symbol.for("v-txt"), Xr = /* @__PURE__ */ Symbol.for("v-cmt"), Tl = /* @__PURE__ */ Symbol.for("v-stc"), Ko = [];
let Tn = null;
function Fe(e = !1) {
  Ko.push(Tn = e ? null : []);
}
function wy() {
  Ko.pop(), Tn = Ko[Ko.length - 1] || null;
}
let Zo = 1;
function Rd(e, t = !1) {
  Zo += e, e < 0 && Tn && t && (Tn.hasOnce = !0);
}
function dh(e) {
  return e.dynamicChildren = Zo > 0 ? Tn || Wi : null, wy(), Zo > 0 && Tn && Tn.push(e), e;
}
function Re(e, t, r, n, i, o) {
  return dh(
    ke(
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
function Dn(e, t, r, n, i) {
  return dh(
    Ke(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function fh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ko(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ph = ({ key: e }) => e ?? null, ns = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Bt(e) || /* @__PURE__ */ hn(e) || st(e) ? { i: Fn, r: e, k: t, f: !!r } : e : null);
function ke(e, t = null, r = null, n = 0, i = null, o = e === et ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ph(t),
    ref: t && ns(t),
    scopeId: $p,
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
    ctx: Fn
  };
  return s ? (Pu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Bt(r) ? 8 : 16), Zo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Tn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Tn.push(l), l;
}
const Ke = xy;
function xy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Up) && (e = Xr), fh(e)) {
    const s = eo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Pu(s, r), Zo > 0 && !o && Tn && (s.shapeFlag & 6 ? Tn[Tn.indexOf(e)] = s : Tn.push(s)), s.patchFlag = -2, s;
  }
  if (Ty(e) && (e = e.__vccOpts), t) {
    t = ky(t);
    let { class: s, style: l } = t;
    s && !Bt(s) && (t.class = gt(s)), Et(l) && (/* @__PURE__ */ Su(l) && !ot(l) && (l = mn({}, l)), t.style = It(l));
  }
  const a = Bt(e) ? 1 : uh(e) ? 128 : D0(e) ? 64 : Et(e) ? 4 : st(e) ? 2 : 0;
  return ke(
    e,
    t,
    r,
    n,
    i,
    a,
    o,
    !0
  );
}
function ky(e) {
  return e ? /* @__PURE__ */ Su(e) || th(e) ? mn({}, e) : e : null;
}
function eo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, u = t ? Pr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ph(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ot(o) ? o.concat(ns(t)) : [o, ns(t)] : ns(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== et ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && eo(e.ssContent),
    ssFallback: e.ssFallback && eo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && xu(
    d,
    l.clone(d)
  ), d;
}
function Eo(e = " ", t = 0) {
  return Ke(ul, null, e, t);
}
function pt(e = "", t = !1) {
  return t ? (Fe(), Dn(Xr, null, e)) : Ke(Xr, null, e);
}
function lr(e) {
  return e == null || typeof e == "boolean" ? Ke(Xr) : ot(e) ? Ke(
    et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : fh(e) ? Mr(e) : Ke(ul, null, String(e));
}
function Mr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : eo(e);
}
function Pu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ot(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Pu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !th(t) ? t._ctx = Fn : i === 3 && Fn && (Fn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else st(t) ? (t = { default: t, _ctx: Fn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Eo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Pr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = gt([t.class, n.class]));
      else if (i === "style")
        t.style = It([t.style, n.style]);
      else if (Qs(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(ot(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !el(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ir(e, t, r, n = null) {
  yr(e, t, 7, [
    r,
    n
  ]);
}
const My = Xp();
let Py = 0;
function Ny(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || My, o = {
    uid: Py++,
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
    scope: new Qg(
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
    propsOptions: rh(n, i),
    emitsOptions: Jp(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ot,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ot,
    data: Ot,
    props: Ot,
    attrs: Ot,
    slots: Ot,
    refs: Ot,
    setupState: Ot,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = oy.bind(null, o), e.ce && e.ce(o), o;
}
let dn = null;
const Cy = () => dn || Fn;
let Ps, xc;
{
  const e = rl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Ps = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => dn = r
  ), xc = t(
    "__VUE_SSR_SETTERS__",
    (r) => Qo = r
  );
}
const ma = (e) => {
  const t = dn;
  return Ps(e), e.scope.on(), () => {
    e.scope.off(), Ps(t);
  };
}, Vd = () => {
  dn && dn.scope.off(), Ps(null);
};
function hh(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = !1;
function Ay(e, t = !1, r = !1) {
  t && xc(t);
  const { props: n, children: i } = e.vnode, o = hh(e);
  dy(e, n, o, t), my(e, i, r || t);
  const a = o ? Iy(e, t) : void 0;
  return t && xc(!1), a;
}
function Iy(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, X0);
  const { setup: n } = r;
  if (n) {
    Lr();
    const i = e.setupContext = n.length > 1 ? Oy(e) : null, o = ma(e), a = pa(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = fp(a);
    if (Rr(), o(), (s || e.sp) && !Go(e) && Gp(e), s) {
      if (a.then(Vd, Vd), t)
        return a.then((l) => {
          $d(e, l);
        }).catch((l) => {
          ol(l, e, 0);
        });
      e.asyncDep = a;
    } else
      $d(e, a);
  } else
    mh(e);
}
function $d(e, t, r) {
  st(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = Tp(t)), mh(e);
}
function mh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || pr);
  {
    const i = ma(e);
    Lr();
    try {
      J0(e);
    } finally {
      Rr(), i();
    }
  }
}
const Ey = {
  get(e, t) {
    return un(e, "get", ""), e[t];
  }
};
function Oy(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ey),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function dl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tp(_0(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Wo)
        return Wo[r](e);
    },
    has(t, r) {
      return r in t || r in Wo;
    }
  })) : e.proxy;
}
function Fy(e, t = !0) {
  return st(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ty(e) {
  return st(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ k0(e, t, Qo), Dy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kc;
const zd = typeof window < "u" && window.trustedTypes;
if (zd)
  try {
    kc = /* @__PURE__ */ zd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const gh = kc ? (e) => kc.createHTML(e) : (e) => e, Ly = "http://www.w3.org/2000/svg", Ry = "http://www.w3.org/1998/Math/MathML", kr = typeof document < "u" ? document : null, jd = kr && /* @__PURE__ */ kr.createElement("template"), Vy = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? kr.createElementNS(Ly, e) : t === "mathml" ? kr.createElementNS(Ry, e) : r ? kr.createElement(e, { is: r }) : kr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => kr.createTextNode(e),
  createComment: (e) => kr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => kr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const a = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      jd.innerHTML = gh(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = jd.content;
      if (n === "svg" || n === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, r);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, $y = /* @__PURE__ */ Symbol("_vtc");
function zy(e, t, r) {
  const n = e[$y];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ns = /* @__PURE__ */ Symbol("_vod"), yh = /* @__PURE__ */ Symbol("_vsh"), _i = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ns] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Mo(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Mo(e, !0), n.enter(e)) : n.leave(e, () => {
      Mo(e, !1);
    }) : Mo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Mo(e, t);
  }
};
function Mo(e, t) {
  e.style.display = t ? e[Ns] : "none", e[yh] = !t;
}
const jy = /* @__PURE__ */ Symbol(""), Hy = /(?:^|;)\s*display\s*:/;
function Gy(e, t, r) {
  const n = e.style, i = Bt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Bt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && rs(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && rs(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), rs(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[jy];
      a && (r += ";" + a), n.cssText = r, o = Hy.test(r);
    }
  } else t && e.removeAttribute("style");
  Ns in e && (e[Ns] = o ? n.display : "", e[yh] && (n.display = "none"));
}
const Hd = /\s*!important$/;
function rs(e, t, r) {
  if (ot(r))
    r.forEach((n) => rs(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Wy(e, t);
    Hd.test(r) ? e.setProperty(
      ki(n),
      r.replace(Hd, ""),
      "important"
    ) : e[n] = r;
  }
}
const Gd = ["Webkit", "Moz", "ms"], Dl = {};
function Wy(e, t) {
  const r = Dl[t];
  if (r)
    return r;
  let n = _n(t);
  if (n !== "filter" && n in e)
    return Dl[t] = n;
  n = nl(n);
  for (let i = 0; i < Gd.length; i++) {
    const o = Gd[i] + n;
    if (o in e)
      return Dl[t] = o;
  }
  return t;
}
const Wd = "http://www.w3.org/1999/xlink";
function Kd(e, t, r, n, i, o = Jg(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Wd, t.slice(6, t.length)) : e.setAttributeNS(Wd, t, r) : r == null || o && !gp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : gr(r) ? String(r) : r
  );
}
function Bd(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? gh(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (s !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let a = !1;
  if (r === "" || r == null) {
    const s = typeof e[t];
    s === "boolean" ? r = gp(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Li(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Ky(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ud = /* @__PURE__ */ Symbol("_vei");
function By(e, t, r, n, i = null) {
  const o = e[Ud] || (e[Ud] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = Uy(t);
    if (n) {
      const u = o[t] = Xy(
        n,
        i
      );
      Li(e, s, u, l);
    } else a && (Ky(e, s, a, l), o[t] = void 0);
  }
}
const Yd = /(?:Once|Passive|Capture)$/;
function Uy(e) {
  let t;
  if (Yd.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Yd); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ki(e.slice(2)), t];
}
let Ll = 0;
const Yy = /* @__PURE__ */ Promise.resolve(), qy = () => Ll || (Yy.then(() => Ll = 0), Ll = Date.now());
function Xy(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    yr(
      Jy(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = qy(), r;
}
function Jy(e, t) {
  if (ot(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const qd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zy = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? zy(e, n, a) : t === "style" ? Gy(e, r, n) : Qs(t) ? el(t) || By(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qy(e, t, n, a)) ? (Bd(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Kd(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (eb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Bt(n))) ? Bd(e, _n(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Kd(e, t, n, a));
};
function Qy(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qd(t) && st(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return qd(t) && Bt(r) ? !1 : t in e;
}
function eb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = _n(t);
  return Array.isArray(r) ? r.some((i) => _n(i) === n) : Object.keys(r).some((i) => _n(i) === n);
}
const Xd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ot(t) ? (r) => es(t, r) : t;
};
function tb(e) {
  e.target.composing = !0;
}
function Jd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Rl = /* @__PURE__ */ Symbol("_assign");
function Zd(e, t, r) {
  return t && (e = e.trim()), r && (e = pu(e)), e;
}
const Qd = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Rl] = Xd(i);
    const o = n || i.props && i.props.type === "number";
    Li(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Rl](Zd(e.value, r, o));
    }), (r || o) && Li(e, "change", () => {
      e.value = Zd(e.value, r, o);
    }), t || (Li(e, "compositionstart", tb), Li(e, "compositionend", Jd), Li(e, "change", Jd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Rl] = Xd(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? pu(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, nb = ["ctrl", "shift", "alt", "meta"], rb = {
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
  exact: (e, t) => nb.some((r) => e[`${r}Key`] && !t.includes(r))
}, Ct = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = rb[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, ib = /* @__PURE__ */ mn({ patchProp: Zy }, Vy);
let ef;
function ob() {
  return ef || (ef = yy(ib));
}
const Nu = ((...e) => {
  const t = ob().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = sb(n);
    if (!i) return;
    const o = t._component;
    !st(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, ab(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function ab(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sb(e) {
  return Bt(e) ? document.querySelector(e) : e;
}
const lb = "PanoramaSuite.Debug.Diagnostics", cb = "PanoramaSuite.Debug.ExportDiagnostics", Vl = "pano_suite.diagnostics.v1", tf = "pano_suite.diagnostics.previous.v1", ub = 300, db = 2e5, fb = 100, pb = 20, hb = 1e3, mb = 2, Va = 1024 * 1024;
function Kr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function gb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function yb() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: gb,
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
function bb(e = {}) {
  const t = { ...yb(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, u = 0;
  const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, w = t.FinalizationRegistry ? new t.FinalizationRegistry((A) => {
    d.delete(A), f.collected += 1;
  }) : null, h = t.FinalizationRegistry ? new t.FinalizationRegistry((A) => {
    c.delete(A), g.collected += 1;
  }) : null, p = /* @__PURE__ */ new Set(), D = { created: 0, lost: 0, restored: 0, disposed: 0 }, X = [], z = /* @__PURE__ */ new Map();
  let Y = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), re = { count: 0, maxMs: 0 };
  const L = [];
  function ne(A, ce, y = void 0) {
    X.push(y === void 0 ? { t: t.clock(), type: A, label: ce } : { t: t.clock(), type: A, label: ce, detail: y }), X.length > fb && X.shift();
  }
  function U(A, ce, y, v, F) {
    if (!r || !v || !t.WeakRef) return v;
    const S = { ref: new t.WeakRef(v), label: F };
    return A.add(S), ce == null || ce.register(v, S), y.created += 1, v;
  }
  function de(A, ce = "") {
    return U(d, w, f, A, ce);
  }
  function V(A, ce = "") {
    return U(c, h, g, A, ce);
  }
  function ae({ label: A = "", width: ce, height: y, offscreen: v = !1 } = {}) {
    const F = globalThis.OffscreenCanvas;
    let S;
    return v && typeof F < "u" ? S = new F(ce, y) : (S = t.document().createElement("canvas"), ce !== void 0 && y !== void 0 && (S.width = ce, S.height = y)), de(S, A);
  }
  function H(A) {
    A.width = 0, A.height = 0, r && (f.released += 1);
  }
  function J(A = t.document(), ce = "") {
    var y;
    return V(((y = A == null ? void 0 : A.createElement) == null ? void 0 : y.call(A, "video")) || null, ce);
  }
  function $(A, ce) {
    if (!r || !A) return () => {
    };
    const y = { label: ce, lost: !1, disposed: !1 };
    p.add(y), D.created += 1, ne("webgl-created", ce);
    const v = () => {
      y.disposed || (y.lost = !0, D.lost += 1, ne("webglcontextlost", ce));
    }, F = () => {
      y.disposed || (y.lost = !1, D.restored += 1, ne("webglcontextrestored", ce));
    };
    return A.addEventListener("webglcontextlost", v), A.addEventListener("webglcontextrestored", F), () => {
      y.disposed || (y.disposed = !0, p.delete(y), D.disposed += 1, ne("webgl-disposed", ce));
    };
  }
  function Q(A, ce) {
    return z.set(A, ce), () => {
      z.get(A) === ce && z.delete(A);
    };
  }
  function K() {
    return r ? t.now() : -1;
  }
  function E(A) {
    if (A < 0 || !r) return;
    const ce = t.now() - A;
    Y.count += 1, Y.maxMs = Math.max(Y.maxMs, ce);
  }
  function G(A, ce) {
    if (ce < 0 || !r) return;
    const y = t.now() - ce, v = C.get(A) ?? { count: 0, maxMs: 0 };
    v.count += 1, v.maxMs = Math.max(v.maxMs, y), C.set(A, v);
  }
  function O() {
    let A = 0, ce = 0, y = 0, v = [0, 0];
    const F = {};
    for (const S of d) {
      const j = S.ref.deref();
      if (!j) continue;
      A += 1;
      const x = j.width * j.height;
      x > 0 && (ce += 1), y += x, x > v[0] * v[1] && (v = [j.width, j.height]);
      const R = F[S.label] ?? (F[S.label] = [0, 0]);
      R[0] += 1, R[1] += x;
    }
    return { ...f, alive: A, sized: ce, pixels: y, mb: Kr(y * 4 / Va, 1), largest: v, byLabel: F };
  }
  function q() {
    const A = [];
    let ce = 0, y = 0;
    for (const v of c) {
      const F = v.ref.deref();
      if (!F) continue;
      ce += 1;
      const S = !F.paused && !F.ended;
      S && (y += 1), A.length < pb && A.push({
        label: v.label,
        playing: S,
        src: !!(F.currentSrc || F.src),
        size: [F.videoWidth || 0, F.videoHeight || 0],
        ready: F.readyState ?? 0,
        connected: !!F.isConnected
      });
    }
    return { ...g, alive: ce, playing: y, list: A };
  }
  function me() {
    const A = t.now(), ce = t.memory(), y = {
      t: t.clock(),
      heap: ce ? { used: Kr(ce.usedJSHeapSize / Va, 1), total: Kr(ce.totalJSHeapSize / Va, 1), limit: Kr(ce.jsHeapSizeLimit / Va, 1) } : null,
      canvas: O(),
      webgl: { ...D, alive: [...p].filter((v) => !v.lost).length },
      video: q(),
      frame: { count: Y.count, maxMs: Kr(Y.maxMs), longTasks: re.count, longTaskMaxMs: Kr(re.maxMs) },
      renders: Object.fromEntries([...C].map(([v, F]) => [v, { count: F.count, maxMs: Kr(F.maxMs) }])),
      sources: Object.fromEntries([...z].map(([v, F]) => [v, F()])),
      costMs: Kr(u, 3)
    };
    return Y = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), re = { count: 0, maxMs: 0 }, L.push({ record: y, text: JSON.stringify(y) }), L.length > ub && L.shift(), l += 1, l % mb === 0 && te(), u = t.now() - A, y;
  }
  function _e(A = db) {
    const ce = JSON.stringify({ ...o, events: X }).slice(0, -1);
    let y = A - ce.length - 14, v = L.length;
    for (; v > 0 && y - L[v - 1].text.length - 1 >= 0; )
      v -= 1, y -= L[v].text.length + 1;
    return `${ce},"records":[${L.slice(v).map((F) => F.text).join(",")}]}`;
  }
  function te() {
    if (!o) return;
    const A = t.storage();
    if (A) {
      o.savedAt = t.clock();
      try {
        A.setItem(Vl, _e());
      } catch {
      }
    }
  }
  function N() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", te();
  }
  function oe() {
    var F;
    if (n) return i;
    n = !0;
    const A = t.storage();
    if (!A) return null;
    let ce = null;
    try {
      if (ce = A.getItem(Vl), ce === null) {
        const S = A.getItem(tf);
        return i = S === null ? null : JSON.parse(S), i;
      }
      A.setItem(tf, ce), A.removeItem(Vl), i = JSON.parse(ce);
    } catch {
      return i;
    }
    const y = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], v = y.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${y.length} records kept. Its last records:`,
      JSON.stringify(v)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((F = y.at(-1)) == null ? void 0 : F.t) || 0).toISOString()}; ${y.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(v)
    ), i;
  }
  function ue(A) {
    const ce = A === !0;
    if (oe(), ce !== r) {
      if (r = ce, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, L.length = 0, s = t.observeLongTasks((y) => {
          for (const v of y)
            re.count += 1, re.maxMs = Math.max(re.maxMs, v.duration);
        }), t.addUnload(N), a = t.setInterval(me, hb), te();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(N), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", te();
    }
  }
  function be() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...X], records: L.map((A) => A.record) } : null,
      previous: i
    };
  }
  function ve() {
    const A = t.document(), ce = new Blob([JSON.stringify(be(), null, 1)], { type: "application/json" }), y = URL.createObjectURL(ce), v = A.createElement("a");
    v.href = y, v.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, v.click(), setTimeout(() => URL.revokeObjectURL(y), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ae,
    releaseCanvas: H,
    trackCanvas: de,
    createVideo: J,
    trackVideo: V,
    watchContext: $,
    addSource: Q,
    frameStart: K,
    frameEnd: E,
    renderEnd: G,
    sample: me,
    serialize: _e,
    recoverPrevious: oe,
    setEnabled: ue,
    exportData: be,
    download: ve
  };
}
const Cn = bb(), en = Cn.createCanvas, ea = Cn.releaseCanvas, $l = Cn.trackCanvas, ga = Cn.createVideo, nf = Cn.trackVideo, vb = Cn.addSource, _b = Cn.frameStart, Sb = Cn.frameEnd;
function bh(e, t) {
  const r = Cn.watchContext(e.canvas, t), n = Cn.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = Cn.frameStart(), l = o(a);
    return Cn.renderEnd(t, s), l;
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
const wb = {
  id: lb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Cn.setEnabled(e === !0)
}, rf = {
  id: cb,
  label: "Export Panorama Suite diagnostics",
  function: () => Cn.download()
};
function Ri(e, t) {
  const r = en({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function xb() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function of(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, u = -1;
  for (let c = 0; c < i; c += 1)
    for (let f = 0; f < n; f += 1)
      o[(c * n + f) * 4 + 3] <= t || (f < a && (a = f), c < s && (s = c), f > l && (l = f), c > u && (u = c));
  return l < a || u < s ? null : {
    minX: a,
    minY: s,
    maxX: l,
    maxY: u,
    width: l - a + 1,
    height: u - s + 1,
    aspect: Number(((l - a + 1) / Math.max(1, u - s + 1)).toFixed(4))
  };
}
function Cu(e, t) {
  return en({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Yr(e, t, r) {
  if (!e) return Ri(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Gt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function sn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let zl = null, jl = null, af = null, sf = null, Ht = null, Po = null;
function kb() {
  if (jl) return jl;
  const e = 6, t = 17, r = en({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), jl = r, r;
}
function Hl(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  zl = Yr(zl, r, n);
  const i = zl;
  Gt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", sf !== i.ctx && (af = i.ctx.createPattern(kb(), "repeat"), sf = i.ctx), i.ctx.fillStyle = af, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Mb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Pb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Nb(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Cb(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Rt = /* @__PURE__ */ new Map(), Au = 128;
function Ab(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Rt.has(l)) {
    const X = Rt.get(l);
    return Rt.delete(l), Rt.set(l, X), X;
  }
  Rt.size >= Au && Rt.delete(Rt.keys().next().value);
  const u = a * 2 + 2, d = a + 1, c = Cu(u, u), f = c.getContext("2d"), g = s * a, w = a + 1, h = `rgba(${r},${n},${i},${o})`, p = `rgba(${r},${n},${i},0)`, D = f.createRadialGradient(d, d, g, d, d, w);
  return D.addColorStop(0, h), D.addColorStop(1, p), f.fillStyle = D, f.fillRect(0, 0, u, u), Rt.set(l, c), c;
}
function Ib(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: u, a: d } = n, c = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), w = Math.max(0, Math.min(0.99, o)), h = Math.max(0, Math.min(1, a ?? 0)), p = `chisel:${c}:${f}:${r.toFixed(2)}:${s}:${l}:${u}:${d.toFixed(3)}:${g.toFixed(2)}:${w.toFixed(2)}:${h.toFixed(2)}`;
  if (Rt.has(p)) {
    const ne = Rt.get(p);
    return Rt.delete(p), Rt.set(p, ne), ne;
  }
  Rt.size >= Au && Rt.delete(Rt.keys().next().value);
  const D = Cu(c, f), X = D.getContext("2d"), z = X.createImageData(c, f), Y = z.data, C = Math.max(0, e - t), re = Math.max(0, Math.min(1, r)), L = 1 + g;
  for (let ne = 0; ne < f; ne++)
    for (let U = 0; U < c; U++) {
      const de = U + 0.5 - e, V = ne + 0.5 - t, ae = Math.max(Math.abs(de) - C, 0), J = Math.hypot(ae, V) / t;
      if (J >= 1) continue;
      const $ = J <= re ? 1 : Math.max(0, (1 - J) / Math.max(1e-4, 1 - re)), Q = 1 - J, K = 1 + g * (1 - Q) * (1 - Q), E = 1 - w * Q * Q, G = K * E / L;
      let O = 1;
      if (h > 0) {
        const _e = Math.floor((V + t) / 1.5), te = Math.floor((de + e) / 8), N = yi(Yi(_e * 41 + 500, te * 19 + 300));
        O = 1 - h * 0.42 * N;
      }
      const q = Math.round(255 * Math.min(1, d * $ * G * O));
      if (q <= 0) continue;
      const me = (ne * c + U) * 4;
      Y[me] = s, Y[me + 1] = l, Y[me + 2] = u, Y[me + 3] = q;
    }
  return X.putImageData(z, 0, 0), Rt.set(p, D), D;
}
function Yi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function yi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Eb(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, u = Math.max(0, r - n), d = Math.max(Math.abs(s) - u, 0), c = Math.hypot(d, l) / n;
  if (c >= 1) return 0;
  const f = yi(Yi(e * 17 + 3, t * 13 + 7)), g = c + o * 0.22 * (f - 0.5);
  if (g >= 1) return 0;
  const w = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), h = Ob(e, t, s, l, r, n), p = o * 0.55;
  if (h < p) return 0;
  const X = 0.45 + 0.55 * ((h - p) / Math.max(1e-4, 1 - p));
  return Math.round(255 * Math.min(1, a * w * X));
}
function Ob(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = yi(Yi(a * 13 + 700, s * 17 + 400)), u = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), c = yi(Yi(u * 23 + 800, d * 29 + 500)), f = yi(Yi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + c * 0.3 + f * 0.15;
}
function Fb(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, u = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), c = Math.max(0, Math.min(1, i)), f = `crayon:${u}:${d}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${c.toFixed(2)}`;
  if (Rt.has(f)) {
    const X = Rt.get(f);
    return Rt.delete(f), Rt.set(f, X), X;
  }
  Rt.size >= Au && Rt.delete(Rt.keys().next().value);
  const g = Cu(u, d), w = g.getContext("2d"), h = w.createImageData(u, d), p = h.data, D = Math.max(0, Math.min(1, r));
  for (let X = 0; X < d; X++)
    for (let z = 0; z < u; z++) {
      const Y = Eb(z, X, e, t, D, c, l);
      if (Y <= 0) continue;
      const C = (X * u + z) * 4;
      p[C] = o, p[C + 1] = a, p[C + 2] = s, p[C + 3] = Y;
    }
  return w.putImageData(h, 0, 0), Rt.set(f, g), g;
}
function vh(e, t, r) {
  var h, p;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Nb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = Tb(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((h = t == null ? void 0 : t.angle) == null ? void 0 : h.value) ?? 0), u = Cb(t, i), d = String(((p = t == null ? void 0 : t.targetSpace) == null ? void 0 : p.viewMode) || ""), c = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, g = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let w;
  if (n === "chisel") {
    const D = i * s, X = i, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), Y = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    w = Ib(D, X, o, a, z, Y, C);
  } else if (n === "crayon") {
    const D = i * s, X = i, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    w = Fb(D, X, o, a, z);
  } else
    w = Ab(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: w, radiusPx: i, spacingPx: u, desc: r, aspect: s, angle: l, stampKind: n, scatter: g, latitudeCorrection: c };
}
function Tb(e) {
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
function Db(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function lf(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(u, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, u - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(u, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Iu(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: u, count: d } = e.scatter, c = u * e.radiusPx * i, f = Yi(t, r);
    for (let g = 0; g < d; g++) {
      const w = yi(f + g * 2) * Math.PI * 2, h = Math.sqrt(yi(f + g * 2 + 1)) * c, p = t + Math.cos(w) * h, D = r + Math.sin(w) * h, X = Math.max(0.5, e.radiusPx * i * 0.48), z = (0.5 - D / Math.max(1, e.desc.height)) * Math.PI, Y = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, C = X * e.aspect * Y;
      lf(e, p, D, X, C);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  lf(e, t, r, o, l);
}
function cf(e, t, r) {
  const n = Pb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = vh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let g = Number(n[f].u || 0) * i;
    const w = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(g - s[f - 1].x) > i * 0.5 && (g += g < s[f - 1].x ? i : -i), s.push({ x: g, y: w });
  }
  if (Iu(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], u = s[0], d = s[0], c = 0;
  for (let f = 1; f < s.length; f++) {
    const g = s[f], w = { x: (u.x + g.x) * 0.5, y: (u.y + g.y) * 0.5 };
    f === 1 ? c = ta(a, d.x, d.y, w.x, w.y, c) : c = Cs(a, l, d, w, g, c), l = u, u = g, d = w;
  }
  s.length === 2 ? ta(a, d.x, d.y, u.x, u.y, c) : Cs(a, l, d, u, u, c), e.restore();
}
function is(e, t, r) {
  var c;
  const n = Array.isArray((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = Db(t), s = [];
  let l = 1 / 0, u = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const g = Mb(n[f]);
    let w = Number(g.x || 0) * i;
    f > 0 && Math.abs(w - s[f - 1].x) > i * 0.5 && (w += w < s[f - 1].x ? i : -i), s.push({ x: w, y: Number(g.y || 0) * o }), w < l && (l = w), w > u && (u = w);
  }
  function d(f) {
    e.beginPath(), e.moveTo(s[0].x + f, s[0].y);
    for (let g = 1; g < s.length; g++) e.lineTo(s[g].x + f, s[g].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, d(0), l < 0 && d(i), u > i && d(-i), e.restore();
}
function $a(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    is(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? cf(e, t, r) : (Po = Yr(Po, r.width, r.height), Gt(Po), cf(Po.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Po.canvas, 0, 0), e.restore());
}
function oi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ta(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let u = e.spacingPx - o;
  for (; u <= l; ) {
    const d = u / l;
    Iu(e, t + a * d, r + s * d, 1), u += e.spacingPx;
  }
  return l - u + e.spacingPx;
}
function Cs(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, u = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, c = s, f = c + l, g = f + u, w = f - c, h = 16;
  let p = o, D = r.x, X = r.y;
  for (let z = 1; z <= h; z++) {
    const Y = c + w * z / h, C = ((c - Y) * t.x + (Y - d) * r.x) / (c - d), re = ((c - Y) * t.y + (Y - d) * r.y) / (c - d), L = ((f - Y) * r.x + (Y - c) * n.x) / (f - c), ne = ((f - Y) * r.y + (Y - c) * n.y) / (f - c), U = ((g - Y) * n.x + (Y - f) * i.x) / (g - f), de = ((g - Y) * n.y + (Y - f) * i.y) / (g - f), V = ((f - Y) * C + (Y - d) * L) / (f - d), ae = ((f - Y) * re + (Y - d) * ne) / (f - d), H = ((g - Y) * L + (Y - c) * U) / (g - c), J = ((g - Y) * ne + (Y - c) * de) / (g - c), $ = ((f - Y) * V + (Y - c) * H) / (f - c), Q = ((f - Y) * ae + (Y - c) * J) / (f - c);
    p = ta(e, D, X, $, Q, p), D = $, X = Q;
  }
  return p;
}
function Lb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let u = t * a;
  if (l && Math.abs(u - l.prev.x) > a * 0.5 && (u += u < l.prev.x ? a : -a), !l) {
    const g = vh(i, n, o), w = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), h = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), p = String((n == null ? void 0 : n.toolKind) || "") === "eraser", D = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Iu(g, u, s, 1), e.activeStroke = {
      pprev: { x: u, y: s },
      prev: { x: u, y: s },
      lastMidX: u,
      lastMidY: s,
      stampTex: g.stampTex,
      radiusPx: g.radiusPx,
      spacingPx: g.spacingPx,
      aspect: g.aspect,
      angle: g.angle,
      stampKind: g.stampKind,
      scatter: g.scatter,
      latitudeCorrection: g.latitudeCorrection,
      strokeOpacity: w,
      velocityWidthFactor: h,
      distSinceStamp: 0,
      isEraser: p,
      layerKind: D,
      pointCount: 1
    }, sn(e);
    return;
  }
  const d = (l.prev.x + u) * 0.5, c = (l.prev.y + s) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = ta(f, l.lastMidX, l.lastMidY, d, c, l.distSinceStamp) : l.distSinceStamp = Cs(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: c },
    { x: u, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: u, y: s }, l.lastMidX = d, l.lastMidY = c, l.pointCount++, sn(e);
}
function fl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Ri(t, r), a = {
    descriptor: n,
    committedMask: Ri(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, s = {
    actionGroupId: "__eraser__",
    descriptor: n,
    committedPaint: Ri(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Ri(t, r);
  let u = null, d = "", c = null;
  const f = /* @__PURE__ */ new Map();
  let g = null;
  function w(H) {
    return {
      actionGroupId: H,
      descriptor: n,
      committedPaint: Ri(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function h(H) {
    let J = i.get(H);
    return J || (J = w(H), i.set(H, J)), J;
  }
  function p(H) {
    return d === "mask" ? a : u ? h(u) : s;
  }
  function D(H) {
    var G;
    const J = !c || c.length !== H.length || H.some((O, q) => O !== c[q]), $ = d === "paint" && ((G = u ? i.get(u) : s) == null ? void 0 : G.activeStroke) || null;
    let Q = a.displayDirty || s.displayDirty || J;
    for (const O of H) {
      const q = i.get(O);
      if (q != null && q.displayDirty) {
        Q = !0;
        break;
      }
    }
    if ($ && (Q = !0), !Q) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const O of H) {
      const q = i.get(O);
      q && (q.displayDirty = !1);
    }
    c = [...H];
    const K = l.ctx;
    Gt(l);
    const E = !!($ != null && $.isEraser);
    for (const O of H) {
      const q = i.get(O);
      if (!q) continue;
      const _e = u === q.actionGroupId && d === "paint" ? q.activeStroke : null;
      if (E)
        Ht = Yr(Ht, t, r), Gt(Ht), Ht.ctx.drawImage(q.committedPaint.canvas, 0, 0), oi(Ht.ctx, o.canvas), K.drawImage(Ht.canvas, 0, 0);
      else if (K.drawImage(q.committedPaint.canvas, 0, 0), _e) {
        const te = q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, _e.strokeOpacity ?? 1));
        K.save(), K.globalAlpha = te, K.drawImage(o.canvas, 0, 0), K.restore();
      }
    }
  }
  function X(H) {
    var $, Q, K, E, G;
    for (const O of i.values())
      Gt(O.committedPaint), Gt(O.currentStroke), O.activeStroke = null, sn(O);
    Gt(a.committedMask), Gt(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), sn(a), sn(s), c = null;
    const J = [
      ...Array.isArray((Q = ($ = H == null ? void 0 : H.painting) == null ? void 0 : $.paint) == null ? void 0 : Q.strokes) ? H.painting.paint.strokes : [],
      ...Array.isArray((E = (K = H == null ? void 0 : H.painting) == null ? void 0 : K.mask) == null ? void 0 : E.strokes) ? H.painting.mask.strokes : []
    ];
    for (const O of J) {
      if (((G = O == null ? void 0 : O.targetSpace) == null ? void 0 : G.kind) !== "ERP_GLOBAL") continue;
      const q = String((O == null ? void 0 : O.layerKind) || "paint"), _e = String((O == null ? void 0 : O.toolKind) || "pen") === "eraser";
      if (q === "mask") {
        const te = a.descriptor;
        _e ? (Ht = Yr(Ht, te.width, te.height), Gt(Ht), $a(Ht.ctx, O, te), oi(a.committedMask.ctx, Ht.canvas)) : ($a(a.committedMask.ctx, O, te), a.painted = !0);
        continue;
      }
      if (_e) {
        Ht = Yr(Ht, n.width, n.height), Gt(Ht), $a(Ht.ctx, O, n);
        for (const te of i.values())
          oi(te.committedPaint.ctx, Ht.canvas), sn(te);
      } else {
        const te = String((O == null ? void 0 : O.actionGroupId) || "__default__"), N = h(te), oe = N.descriptor;
        $a(N.committedPaint.ctx, O, oe), sn(N);
      }
    }
    D([...i.keys()]);
  }
  function z(H, J) {
    d = String((H == null ? void 0 : H.layerKind) || "");
    const $ = String((H == null ? void 0 : H.toolKind) || "") === "eraser";
    if (d === "mask")
      u = null, Gt(a.currentStroke), a.activeStroke = null, sn(a);
    else {
      const Q = $ ? s : h(String((H == null ? void 0 : H.actionGroupId) || "__default__"));
      u = $ ? "" : String((H == null ? void 0 : H.actionGroupId) || "__default__"), Gt(Q.currentStroke), Q.activeStroke = null, sn(Q);
    }
  }
  function Y(H, J) {
    var q;
    const $ = String((H == null ? void 0 : H.layerKind) || "paint"), Q = String((H == null ? void 0 : H.toolKind) || "") === "eraser", K = $ === "mask" ? a : Q ? s : h(String((H == null ? void 0 : H.actionGroupId) || u || "__default__")), E = K.activeStroke, G = K.descriptor;
    if (E && E.pointCount > 1) {
      const me = K.currentStroke.ctx;
      me.globalCompositeOperation = "source-over";
      const _e = {
        ctx: me,
        stampTex: E.stampTex,
        radiusPx: E.radiusPx,
        spacingPx: E.spacingPx,
        desc: G,
        aspect: E.aspect,
        angle: E.angle,
        stampKind: E.stampKind,
        scatter: E.scatter,
        latitudeCorrection: E.latitudeCorrection
      };
      E.pointCount === 2 ? ta(_e, E.lastMidX, E.lastMidY, E.prev.x, E.prev.y, E.distSinceStamp) : Cs(_e, E.pprev, { x: E.lastMidX, y: E.lastMidY }, E.prev, E.prev, E.distSinceStamp);
    }
    K.lassoPreviewActive && (Gt(K.currentStroke), is(K.currentStroke.ctx, H, G), K.lassoPreviewActive = !1);
    const O = $ === "mask" ? a.committedMask : K.committedPaint;
    if (Q && $ === "paint")
      for (const me of i.values())
        oi(me.committedPaint.ctx, K.currentStroke.canvas), sn(me);
    else if (Q)
      oi(O.ctx, K.currentStroke.canvas);
    else {
      $ === "mask" && (a.painted = !0);
      const me = Math.max(0, Math.min(1, (E == null ? void 0 : E.strokeOpacity) ?? 1));
      O.ctx.save(), O.ctx.globalAlpha = me, O.ctx.drawImage(K.currentStroke.canvas, 0, 0), O.ctx.restore();
    }
    xb() && (String((H == null ? void 0 : H.toolKind) || ""), String((G == null ? void 0 : G.kind) || ""), Number((G == null ? void 0 : G.width) || 0), Number((G == null ? void 0 : G.height) || 0), String(((q = H == null ? void 0 : H.targetSpace) == null ? void 0 : q.viewMode) || ""), Number((H == null ? void 0 : H.aspect) ?? 1), of(K.currentStroke.canvas), of(O.canvas), void 0), Gt(K.currentStroke), K.activeStroke = null, sn(K), f.clear(), u = null, d = "", D([...i.keys()]);
  }
  function C(H) {
    if (d === "mask")
      Gt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, sn(a);
    else if (d === "paint" && !u)
      Gt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, sn(s);
    else if (u) {
      const J = i.get(u);
      J && (Gt(J.currentStroke), J.activeStroke = null, J.lassoPreviewActive = !1, sn(J));
    }
    f.clear(), u = null, d = "", D([...i.keys()]);
  }
  function re(H, J) {
    var Q;
    if (d = String((H == null ? void 0 : H.layerKind) || ""), String(((Q = H == null ? void 0 : H.geometry) == null ? void 0 : Q.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Gt(a.currentStroke), is(a.currentStroke.ctx, H, a.descriptor), a.lassoPreviewActive = !0, sn(a);
      else {
        const K = String((H == null ? void 0 : H.toolKind) || "") === "eraser", E = K ? s : h(String((H == null ? void 0 : H.actionGroupId) || u || "__default__"));
        u = K ? "" : String((H == null ? void 0 : H.actionGroupId) || u || "__default__"), Gt(E.currentStroke), is(E.currentStroke.ctx, H, E.descriptor), E.lassoPreviewActive = !0, sn(E);
      }
      D([...i.keys()]);
    }
  }
  function L(H) {
    return D(H ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ne(H) {
    return i.get(String(H)) ?? null;
  }
  function U() {
    return [...i.keys()];
  }
  function de(H) {
    var me;
    const J = i.get(String(H));
    if (!J) return null;
    const $ = d === "paint" && u === J.actionGroupId, Q = d === "paint" && ((me = u ? i.get(u) : s) == null ? void 0 : me.activeStroke) || null, K = !!(Q != null && Q.isEraser), E = $ ? J.activeStroke : null;
    if (!K && !E) return J.committedPaint.canvas;
    const G = `${J.revision}:${s.revision}:${K}`, O = f.get(J.actionGroupId);
    if ((O == null ? void 0 : O.key) === G) return O.surface.canvas;
    const q = Yr((O == null ? void 0 : O.surface) ?? null, t, r);
    return Gt(q), q.ctx.drawImage(J.committedPaint.canvas, 0, 0), K ? oi(q.ctx, o.canvas) : (q.ctx.save(), q.ctx.globalAlpha = J.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, E.strokeOpacity ?? 1)), q.ctx.drawImage(o.canvas, 0, 0), q.ctx.restore()), f.set(J.actionGroupId, { key: G, surface: q }), q.canvas;
  }
  function V() {
    const H = d === "mask" ? a.activeStroke : null;
    return !a.painted && (!H || H.isEraser) ? null : `${a.revision}:${!!H}`;
  }
  function ae() {
    const H = V();
    if (H === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === H) return g.surface.canvas;
    const J = Yr((g == null ? void 0 : g.surface) ?? null, t, r);
    Gt(J);
    const $ = d === "mask" ? a.activeStroke : null;
    return $ != null && $.isEraser ? (Ht = Yr(Ht, t, r), Gt(Ht), Ht.ctx.drawImage(a.committedMask.canvas, 0, 0), oi(Ht.ctx, o.canvas), Hl(J.ctx, Ht.canvas)) : (Hl(J.ctx, a.committedMask.canvas), $ && Hl(J.ctx, o.canvas)), g = { key: H, surface: J }, J.canvas;
  }
  return {
    rebuildCommitted: X,
    beginStroke: z,
    appendStrokePoint: Lb,
    updateActiveStroke: re,
    commitActiveStroke: Y,
    cancelActiveStroke: C,
    getErpTarget: L,
    ensureTarget: p,
    getGroupTarget: ne,
    getGroupDisplayCanvas: de,
    getMaskDisplayCanvas: ae,
    getMaskDisplayRevision: V,
    getAllGroupIds: U
  };
}
function Ie(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Eu(e, t) {
  let r = $t(t) - $t(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Mc = 3;
function No(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function As(e, t = 0) {
  const r = No(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = No(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = No(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = No(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(No(t) || 0);
}
function _h(e) {
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
const uf = Math.PI / 180, df = 0.12, Rb = Mc, Vb = 35, $b = 140, Oo = 100, zb = 20, ff = 0.8;
function jb(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ie(Number(e || Oo), 1, 179) * uf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / uf;
}
function Ou(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Oo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function u(X, z = null) {
    s && s(X, z);
  }
  function d(X, z, Y = null, C = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(X || 0), l.drag.lastY = Number(z || 0), l.drag.lastTs = Number(C || performance.now()), l.drag.pointerId = Y, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], u("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: Y }), !0;
  }
  function c(X, z, Y = "pano", C = performance.now()) {
    if (!l.drag.active) return !1;
    const re = Number(C || performance.now()), L = Number(X), ne = Number(z), U = L - l.drag.lastX, de = ne - l.drag.lastY;
    l.drag.lastX = L, l.drag.lastY = ne, l.drag.lastTs = re;
    const V = n() || { x: 1, y: 1 }, ae = Number(V.x || 1), H = Number(V.y || 1), J = { ...t() };
    let $ = 0, Q = 0;
    if (Y === "unwrap") {
      const E = i() || { w: 1, h: 1 }, G = Math.max(1, Number(E.w || 1)), O = Math.max(1, Number(E.h || 1)), q = U / G, me = de / O;
      $ = -q * 360 * ae, Q = me * 180 * H;
    } else {
      const E = o() || { w: 0, h: 0 }, G = Math.max(1, Number(E.w || 0)), O = Math.max(1, Number(E.h || 0));
      if (G > 1 && O > 1) {
        const q = Ie(Number(J.fov || Oo), 1, 179), me = Ie(jb(q, G, O), 0.1, 179);
        $ = -(U / G) * q * ae, Q = de / O * me * H;
      } else
        $ = -U * df * ae, Q = de * df * H;
    }
    J.yaw = $t(Number(J.yaw || 0) + $), J.pitch = Ie(Number(J.pitch || 0) + Q, -89.9, 89.9), r(J), l.velHistory.push({ ts: re, yaw: J.yaw, pitch: J.pitch });
    let K = 0;
    for (; K < l.velHistory.length - 1 && l.velHistory[K].ts < re - 100; ) K++;
    return K > 0 && l.velHistory.splice(0, K), l.inertia.active = !1, l.inertia.lastTs = re, a(), u("drag", { phase: "move", dx: U, dy: de, dYaw: $, dPitch: Q }), !0;
  }
  function f(X = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const z = Number(X || performance.now());
    l.drag.lastTs = z;
    const Y = l.velHistory.filter((re) => z - re.ts <= 80);
    if (Y.length >= 2) {
      const re = Y[0], L = Y.at(-1), ne = Math.max(1e-3, (L.ts - re.ts) / 1e3);
      let U = L.yaw - re.yaw;
      U > 180 && (U -= 360), U < -180 && (U += 360), l.inertia.vx = U / ne, l.inertia.vy = (L.pitch - re.pitch) / ne;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const C = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = C > zb, l.inertia.lastTs = z, u("drag", { phase: "end", speed: C, inertiaActive: l.inertia.active }), !0;
  }
  function g(X = performance.now()) {
    if (!l.inertia.active) return !1;
    const z = Number(X || performance.now()), Y = Math.max(1e-3, (z - (l.inertia.lastTs || z)) / 1e3);
    l.inertia.lastTs = z;
    const C = { ...t() };
    C.yaw = $t(Number(C.yaw || 0) + l.inertia.vx * Y), C.pitch = Ie(Number(C.pitch || 0) + l.inertia.vy * Y, -89.9, 89.9);
    const re = Math.exp(-5.5 * Y);
    return l.inertia.vx *= re, l.inertia.vy *= re, Math.abs(l.inertia.vx) < ff && Math.abs(l.inertia.vy) < ff && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(C), a(), l.inertia.active;
  }
  function w() {
    const X = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], X;
  }
  function h(X) {
    const z = Math.sign(Number(X || 0));
    if (!z) return !1;
    const Y = { ...t() }, C = Number(Y.fov || Oo);
    return Y.fov = Ie(C + z * Rb, Vb, $b), r(Y), a(), u("wheel", { deltaSign: z, fovBefore: C, fovAfter: Y.fov }), !0;
  }
  function p(X, z = 0) {
    return h(As(X, z));
  }
  function D() {
    r({ yaw: 0, pitch: 0, fov: Oo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: c,
    endDrag: f,
    stepInertia: g,
    stopMotion: w,
    applyWheel: h,
    applyWheelEvent: p,
    resetView: D
  };
}
const kt = Math.PI / 180, Xt = 180 / Math.PI;
function Hn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Is(e, t) {
  return Hn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Es(e, t) {
  return Hn(e.x * t, e.y * t, e.z * t);
}
function Gl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Fu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Hn(e.x / t, e.y / t, e.z / t);
}
function Pn(e, t) {
  const r = e * kt, n = t * kt, i = Math.cos(n);
  return Hn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function so(e, t, r = 0) {
  const n = Number(e || 0) * kt, i = Number(t || 0) * kt, o = r * kt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), u = Math.sin(i), d = Math.cos(o), c = Math.sin(o);
  return {
    right: Hn(
      a * d - s * u * c,
      l * c,
      -s * d - a * u * c
    ),
    up: Hn(
      -a * c - s * u * d,
      l * d,
      s * c - a * u * d
    ),
    fwd: Hn(s * l, u, a * l)
  };
}
function Os(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function At(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Hb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Gb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = At(n.z_index ?? n.zIndex, t.length);
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
function Wb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Kb(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = At(e.t, 0), n = At(e.widthScale, null), i = At(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = At(e.u, null), a = At(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, a)),
      t: r
    };
    return n != null && (s.widthScale = Math.max(0, n)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = At(e.u, null), a = At(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: a,
      t: r
    };
    return n != null && (s.widthScale = Math.max(0, n)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  return null;
}
function za(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Kb(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Bb(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = za(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = za(e.points, t, 1);
  if (!o) return null;
  const a = za(e.rawPoints, t, 1), s = za(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function Ub(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Wb(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Bb(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = At(e.size, null), a = At(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const u = At(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let c = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    c = {
      r: Math.max(0, Math.min(1, At(f.r, 0))),
      g: Math.max(0, Math.min(1, At(f.g, 0))),
      b: Math.max(0, Math.min(1, At(f.b, 0))),
      a: Math.max(0, Math.min(1, At(f.a, 1)))
    };
  }
  return {
    id: s,
    actionGroupId: l,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, a)),
    hardness: At(e.hardness, null),
    flow: At(e.flow, null),
    spacing: At(e.spacing, null),
    createdAt: Math.trunc(At(e.createdAt, 0)),
    color: c,
    radiusModel: d,
    radiusValue: u == null ? null : Math.max(0, u),
    geometry: i
  };
}
function pf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Ub(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function Yb(e) {
  if (!e || typeof e != "object") return null;
  const t = At(e.u0, null), r = At(e.v0, null), n = At(e.u1, null), i = At(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function qb(e) {
  const t = e || {};
  return {
    du: At(t.du, 0) ?? 0,
    dv: At(t.dv, 0) ?? 0,
    rot_deg: At(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, At(t.scale, 1) ?? 1)
  };
}
function Xb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Yb(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, At(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: qb(e.transform)
  } : null;
}
function Jb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = Xb(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function lo(e) {
  const t = Hb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Gb(e.groups),
    paint: pf(e.paint, "paint"),
    mask: pf(e.mask, "mask"),
    raster_objects: Jb(e.raster_objects)
  };
}
const Gn = 1, Wn = 179, Pc = 85;
function pl(e) {
  const t = ((at(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Sh(e, t) {
  let r = at(e, 0) - at(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function wh(e, t, { shiftKey: r = !1 } = {}) {
  let n = at(e, 0) + at(t, 0) * Xt;
  return r && (n = Math.round(n / 15) * 15), pl(n);
}
function at(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ei(e = {}) {
  const t = Ie(at(e.hFOV_deg || 90, 90), Gn, Wn), r = Ie(at(e.vFOV_deg || 60, 60), Gn, Wn), n = Math.tan(t * kt * 0.5), i = Math.tan(r * kt * 0.5);
  return {
    yawDeg: at(e.yaw_deg, 0),
    pitchDeg: at(e.pitch_deg, 0),
    rollDeg: at(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Si(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ei(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Tu(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, at(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Du(e, t) {
  const r = Math.max(1e-12, at(t, 1)), n = Math.max(1e-6, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(n / (2 * r)) * Xt, Gn, Wn), a = Ie(2 * Math.atan(i / (2 * r)) * Xt, Gn, Wn);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Zb(e, t, r) {
  const n = at(e == null ? void 0 : e.x, 0), i = at(e == null ? void 0 : e.y, 0), o = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = ei(t), l = Math.max(1e-12, at(r, 1)), u = 2 * l * s.tanHalfX, d = 2 * l * s.tanHalfY;
  return {
    x: n + (o - u) * 0.5,
    y: i + (a - d) * 0.5,
    w: u,
    h: d,
    focalPx: l
  };
}
function Lu(e, t, r = Pc) {
  const n = Math.max(1e-12, at(t, 1)), i = Ie(at(r, Pc), 1, 89.999), o = n * Math.tan(i * kt), a = Math.max(1, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function xh(e, t, r) {
  const n = Math.max(1e-12, at(t, 1));
  return {
    x: (at(r == null ? void 0 : r.x, 0) - at(e == null ? void 0 : e.x, 0)) / n,
    y: -(at(r == null ? void 0 : r.y, 0) - at(e == null ? void 0 : e.y, 0)) / n
  };
}
function Qb(e, t) {
  const r = Ie(at(e, 90), Gn, Wn), n = Math.max(1e-6, at(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * kt * 0.5) / n) * Xt,
    Gn,
    Wn
  );
}
function os(e, t) {
  const r = Ie(at(e, 60), Gn, Wn), n = Math.max(1e-6, at(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * kt * 0.5) * n) * Xt,
    Gn,
    Wn
  );
}
function hf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function ev(e, t) {
  const r = hf(e, 1), n = hf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (u, d) => d ? s(d, u % d) : u, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function Mi(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * kt, r = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * kt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function bi(e) {
  const t = Mi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || ev(t, 1);
}
function Ru(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = bi(t), t;
}
function kh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ie(a, Gn, Wn) : Ie(Math.min(42, at(i, 100) * 0.42), 8, 96);
  return Ru({
    id: String(e),
    label: "Frame 1",
    yaw_deg: at(t, 0),
    pitch_deg: Ie(at(r, 0), -89.9, 89.9),
    roll_deg: pl(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Er(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : bi(e);
}
function Mh(e, t) {
  const r = ei(e), n = at(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * Xt, o = 2 * Math.atan(r.tanHalfY * n) * Xt;
  return i < Gn || i > Wn || o < Gn || o > Wn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Ph(e, t, r = Mc) {
  const n = Math.sign(at(t, 0)), i = Math.abs(at(r, Mc));
  if (!n || !(i > 0)) return null;
  const o = ei(e), a = o.hFovDeg + n * i;
  if (a < Gn || a > Wn) return null;
  const s = Math.tan(a * kt * 0.5);
  return Mh(e, s / o.tanHalfX);
}
function Nh(e, t) {
  const r = ei(e), n = so(r.yawDeg, r.pitchDeg, r.rollDeg), i = at(t == null ? void 0 : t.x, 0), o = at(t == null ? void 0 : t.y, 0);
  return Fu(Is(Is(n.fwd, Es(n.right, i)), Es(n.up, o)));
}
function tv(e) {
  return Hn(e.x, e.y, -e.z);
}
function as(e) {
  return Hn(e.x, e.y, -e.z);
}
function Sn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = so(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Ch(e) {
  const t = as(Hn(e[0][0], e[1][0], e[2][0])), r = as(Hn(e[0][1], e[1][1], e[2][1])), n = as(Hn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * Xt, pitchDeg: o * Xt, rollDeg: l * Xt };
}
function na(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function ti(e) {
  const [[t, r, n], [i, o, a], [s, l, u]] = e, d = t + o + u;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - a) * f, y: (n - s) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > u) {
    const f = 2 * Math.sqrt(1 + t - o - u);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + s) / f, w: (l - a) / f };
  }
  if (o > u) {
    const f = 2 * Math.sqrt(1 + o - t - u);
    return { x: (r + i) / f, y: 0.25 * f, z: (a + l) / f, w: (n - s) / f };
  }
  const c = 2 * Math.sqrt(1 + u - t - o);
  return { x: (n + s) / c, y: (a + l) / c, z: 0.25 * c, w: (i - r) / c };
}
function ja(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const pi = 1e-6, Nc = 1e-6, nv = 1e-9;
function ra(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function rv(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const u = 0.5 * (a + s);
    ra(0, r, i, 1, u) < t ? a = u : s = u;
  }
  return ra(0, n, o, 1, 0.5 * (a + s));
}
function to(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function no(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((f) => -f / i), s = n.map((f) => f / o);
  if (a.reduce((f, g, w) => f + g * s[w], 0) < 0) return r.map(() => 0);
  const l = a.map((f, g) => (f * o + s[g] * i) / (i + o)), u = (f) => Math.sqrt(f.reduce((g, w) => g + w * w, 0)), d = 3 * Math.min(u(a), u(s)), c = u(l);
  return c <= d ? l : l.map((f) => f * d / c);
}
function Ah(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((d, c) => o[c] - d);
  let l = s;
  to(e, n) && (l = no(t, n, r[n - 1].map((d, c) => d - i[c]), s).map((d) => d * a));
  let u = s;
  return to(e, n + 1) && (u = no(t, n + 1, s.map((d) => -d), r[n + 2].map((d, c) => d - o[c])).map((d) => d * a)), [l.map((d) => d / 3), u.map((d) => -d / 3)];
}
function Ih(e, t, r, n, i) {
  const [[o], [a]] = Ah(e, t, r.map((s) => [s]), n);
  return ra(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function iv(e, t, r, n) {
  var u, d;
  const i = e.map((c) => c.value);
  let [o, a] = Ah(e, t, i, r);
  o = ((u = e[r].handles) == null ? void 0 : u.out) ?? o, a = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((c) => ra(s[c], s[c] + o[c], l[c] + a[c], l[c], n));
}
function Fs([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function ov(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Wl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function av([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Cc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Hi(e, t) {
  return av(Fs([-e[0], -e[1], -e[2], e[3]], t));
}
function Kl(e, t, r) {
  return Fs(e, Cc(Hi(e, t).map((n) => r * n)));
}
function Bl(e, t) {
  const r = ov(e, t);
  if (Math.abs(r) > Nc) return r < 0;
  const [n, i, o] = Hi(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Nc) return a < 0;
  return !1;
}
function Ha(e) {
  const { x: t, y: r, z: n, w: i } = ti(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Ac(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function sv(e, t, r, n) {
  const i = Ha(e[r].value);
  let o = Ha(e[r + 1].value);
  Bl(i, o) && (o = Wl(o));
  const a = t[r + 1] - t[r], s = Hi(i, o);
  let l = s;
  if (to(e, r)) {
    let C = Ha(e[r - 1].value);
    Bl(C, i) && (C = Wl(C)), l = no(t, r, Hi(i, C), s).map((re) => re * a);
  }
  let u = s;
  if (to(e, r + 1)) {
    let C = Ha(e[r + 2].value);
    Bl(o, C) && (C = Wl(C)), u = no(t, r + 1, Hi(o, i), Hi(o, C)).map((re) => re * a);
  }
  const d = Fs(i, Cc(l.map((C, re) => 0.5 * (C - s[re])))), c = Fs(o, Cc(s.map((C, re) => 0.5 * (C - u[re])))), [f, g, w, h] = Kl(Kl(i, o, n), Kl(d, c, n), 2 * n * (1 - n)), { yawDeg: p, pitchDeg: D, rollDeg: X } = Ch(na({ x: f, y: g, z: w, w: h })), z = e[r].value, Y = e[r + 1].value;
  return {
    yaw_deg: Ac(p, z.yaw_deg, Y.yaw_deg, n),
    pitch_deg: D,
    roll_deg: Ac(X, z.roll_deg, Y.roll_deg, n)
  };
}
function ia(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ts(e) {
  return Math.sqrt(ia(e, e));
}
function Ds(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function Eh(e, t) {
  const r = ia(e, t), n = t.map((a, s) => a - r * e[s]), i = Ts(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Vi(e, t) {
  const r = Ts(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function Ga(e, t, r) {
  return Vi(e, Eh(e, t).map((n) => r * n));
}
function Ul(e, t) {
  const r = Ds(e[t].value), n = Ds(e[t + 1].value), i = ia(r, n), o = i < 0 && Ts(n.map((l, u) => l - i * r[u])) <= Nc;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = Eh(r, n);
  const s = Ts(a);
  return [a, a.map((l, u) => Math.cos(s) * l - s * Math.sin(s) * r[u]), o];
}
function lv(e, t, r, n) {
  const i = Ds(e[r].value), o = Ds(e[r + 1].value), [a, s, l] = Ul(e, r);
  let u = a, d = s;
  const c = t[r + 1] - t[r];
  to(e, r) && (u = no(t, r, Ul(e, r - 1)[1].map((z) => -z), u).map((z) => z * c)), to(e, r + 1) && (d = no(t, r + 1, d.map((z) => -z), Ul(e, r + 1)[0]).map((z) => z * c));
  let f, g, w;
  if (l) {
    const z = Math.PI, Y = ra(0, ia(u, a) / z / 3, z - ia(d, s) / z / 3, z, n);
    [f, g, w] = Vi(i, a.map((C) => Y * C / z));
  } else {
    const z = Ga(Vi(i, u.map((re) => re / 3)), Vi(o, d.map((re) => -re / 3)), n), Y = Ga(Vi(i, u.map((re) => n * re / 3)), z, n), C = Ga(z, Vi(o, d.map((re) => -(1 - n) * re / 3)), n);
    [f, g, w] = Ga(Y, C, n);
  }
  const h = Math.hypot(f, w), p = e[r].value.yaw_deg, D = e[r + 1].value.yaw_deg;
  return { yaw_deg: h <= nv ? p + (D - p) * n : Ac(Math.atan2(f, w) * 180 / Math.PI, p, D, n), pitch_deg: Math.atan2(g, h) * 180 / Math.PI };
}
function cv(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Ih(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function uv(e, t, r, n) {
  return Ih(e, t, e.map((i) => i.value), r, n);
}
const dv = { position: iv, rotation: sv, direction: lv, size: cv };
function jt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return ja(e[t].value);
  if (r <= n[0].frame + pi) return ja(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - pi) return ja(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + pi; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= pi || a.easing === "hold") return ja(a.value);
  const s = n.map((u) => u.frame), l = rv(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (dv[t] ?? uv)(n, s, o, l);
}
function Ic(e) {
  return Math.min(179, Math.max(0.1, e));
}
function fv(e) {
  return Math.min(1, Math.max(0, e));
}
function Oh(e) {
  return Math.max(1e-6, e);
}
function Fh(e, t) {
  return t - (e.start - e.in);
}
function co(e, t) {
  return t >= e.start - pi && (e.duration === null || t < e.start + e.duration - pi);
}
function ya(e, t) {
  return {
    position: jt(e, "position", t),
    ...jt(e, "rotation", t),
    hFOV_deg: Ic(jt(e, "fov", t)),
    aspect: e.aspect
  };
}
function ba(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Fh(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : ya(n, r),
    scene: {
      active: i.visible && co(i.clip, r),
      clip_frame: o,
      position: jt(i, "position", o),
      ...jt(i, "rotation", o),
      scale: Oh(jt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => wi(a, r))
  };
}
function pv(e, t) {
  if (e.placement === "world")
    return {
      position: jt(e, "position", t),
      ...jt(e, "rotation", t),
      scale: Oh(jt(e, "scale", t))
    };
  const r = jt(e, "size", t);
  return {
    ...jt(e, "direction", t),
    roll_deg: jt(e, "roll", t),
    hFOV_deg: Ic(r.hFOV_deg),
    vFOV_deg: Ic(r.vFOV_deg)
  };
}
function wi(e, t) {
  const r = Fh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && co(e.clip, t),
    clip_frame: r,
    ...pv(e, r),
    opacity: fv(jt(e, "opacity", r))
  };
}
const hv = 2, mv = ["sky", "world"], Ec = ["perspective", "erp"], gv = ["input", "output", "temp"], Th = [0.42, 0, 0.58, 1], Dh = 1, Vu = 1e3, Oc = 1e7, $u = Oc;
function Qt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Kt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function zu(e, t) {
  const r = Kt(e, t);
  return r !== null && r > 0 ? r : t;
}
function An(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function hl(e) {
  const t = Kt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ss(e) {
  const t = hl(e);
  return t === null ? null : An(t, -Oc, Oc);
}
function uo(e) {
  const t = zu(e, null);
  return t === null ? null : An(t, Dh, Vu);
}
function Lh(e) {
  const t = hl(e);
  return t !== null && t >= 1 ? Math.min(t, $u) : null;
}
function oa(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Rh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Kt(r, null));
  return t.includes(null) ? null : t;
}
function Vh(e) {
  return Rh(e) || [0, 0, 0];
}
function $h(e) {
  const t = Qt(e) ? e : {};
  return {
    yaw_deg: Kt(t.yaw_deg, 0),
    pitch_deg: An(Kt(t.pitch_deg, 0), -90, 90),
    roll_deg: Kt(t.roll_deg, 0)
  };
}
function yv(e) {
  return An(Kt(e, 90), 0.1, 179);
}
function bv(e) {
  return zu(e, 1);
}
function vv(e) {
  const t = Qt(e) ? e : {};
  return {
    yaw_deg: Kt(t.yaw_deg, 0),
    pitch_deg: An(Kt(t.pitch_deg, 0), -90, 90)
  };
}
function _v(e) {
  return Kt(e, 0);
}
function Sv(e) {
  const t = Qt(e) ? e : {};
  return {
    hFOV_deg: An(Kt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: An(Kt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function zh(e) {
  return An(Kt(e, 1), 0, 1);
}
const ml = [["position", Vh], ["rotation", $h], ["fov", yv]], gl = [["position", Vh], ["rotation", $h], ["scale", bv]], ju = [["direction", vv], ["roll", _v], ["size", Sv], ["opacity", zh]], Hu = [...gl, ["opacity", zh]];
function wv(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Kt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Th];
}
function xv(e) {
  if (!Qt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Rh(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function kv(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Qt(i)) continue;
    const o = ss(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: wv(i.easing) }, s = r ? xv(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Gu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Qt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: kv(o.keyframes, i, n === "position") };
  }
  return r;
}
function jh(e) {
  const t = Qt(e) ? e : {}, r = ss(t.start), n = ss(t.in), i = ss(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Mv(e) {
  const t = Qt(e) ? e : {}, r = An(Kt(t.x0, 0), 0, 1), n = An(Kt(t.y0, 0), 0, 1), i = An(Kt(t.x1, 1), 0, 1), o = An(Kt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function Pv(e) {
  if (!Qt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: gv.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Nv(e) {
  const t = Pv(e.source);
  if (!t) return null;
  const r = mv.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: jh(e.clip),
    visible: oa(e.visible, !0),
    locked: oa(e.locked, !1),
    crop: Mv(e.crop),
    ...Gu(e, n ? Hu : ju)
  };
  return n || (i.z_index = hl(e.z_index) ?? 0), i;
}
function Cv(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = Qt(o) ? Nv(o) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (r) continue;
        r = !0;
      }
      t.push(a);
    }
  }
  const n = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !n.has(o.id) ? n.add(o.id) : o.id = null;
  let i = 1;
  for (const o of t)
    if (o.id === null) {
      for (; n.has(`sticker_${i}`); ) i += 1;
      o.id = `sticker_${i}`, n.add(o.id);
    }
  return t;
}
function Av(e) {
  if (!Qt(e)) return null;
  const t = Ec.includes(e.projection) ? e.projection : Ec[0];
  return { aspect: zu(e.aspect, 1), projection: t, visible: oa(e.visible, !0), ...Gu(e, ml) };
}
function Ls(e) {
  const t = Qt(e.timeline) ? e.timeline : {}, r = Qt(e.scene) ? e.scene : {};
  return {
    version: hv,
    timeline: {
      fps: uo(t.fps) ?? 24,
      length: Lh(t.length)
    },
    camera: Av(e.camera),
    scene: { clip: jh(r.clip), visible: oa(r.visible, !0), ...Gu(r, gl) },
    stickers: Cv(e.stickers),
    painting: lo(e.painting),
    painting_layer: Qt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: oa(e.painting_visible, !0)
  };
}
function Iv(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Qt(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function Ev(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Qt(t)) return null;
  const r = An(Kt(t.hFOV_deg, 90), 1, 179), n = An(Kt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Ov(e) {
  const t = Qt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Qt) : [];
  return r.sort((n, i) => Kt(n.z_index, 0) - Kt(i.z_index, 0)), Ls({
    camera: Ev(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: Iv(n, t),
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
function $r(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ls({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Qt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? Ov(t) : Ls(t);
}
const Yl = {
  state: { painting_visible: !0 },
  camera: { projection: Ec[0], visible: !0 },
  scene: { visible: !0 }
};
function ql(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Fc(e) {
  return JSON.stringify({
    ...ql(e, Yl.state),
    camera: e.camera && ql(e.camera, Yl.camera),
    scene: ql(e.scene, Yl.scene)
  });
}
function Xl(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function mf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Wu(e, t) {
  const r = uo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => hl(s * n), { length: o } = e.timeline, a = mf(e.scene.clip, i);
  return Ls({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Xl(e.camera, ml, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...Xl(e.scene, gl, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: u, newAnchor: d } = mf(s.clip, i), c = s.placement === "world" ? Hu : ju;
      return { ...s, clip: l, ...Xl(s, c, i, u, d) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Jl(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Hh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Gh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= pi);
}
function Wh(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Hh(e.keyframes[n - 1].easing) : [...Th];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function pn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Jl(i.value, n);
    return;
  }
  const o = Gh(i, r);
  o ? o.value = Jl(o.value, n) : Wh(i, r, Jl(jt(e, t, r), n));
}
function fo(e) {
  return e.placement === "world" ? Hu.map(([t]) => t) : e.placement === "sky" ? ju.map(([t]) => t) : (e.clip ? gl : ml).map(([t]) => t);
}
function Fv(e, t) {
  for (const r of fo(e))
    Gh(e[r], t) || Wh(e[r], t, jt(e, r, t));
}
function Tv(e) {
  const t = fo(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Zl(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function Dv(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Lv(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = jt(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function Rv(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((d) => o.has(d.frame)).map((d) => ({ ...d, frame: d.frame + n })), u = new Set(l.map((d) => d.frame));
    s.keyframes = [
      ...s.keyframes.filter((d) => !o.has(d.frame) && !u.has(d.frame)),
      ...l
    ].sort((d, c) => d.frame - c.frame);
  }
  return n;
}
function Kh(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function Vv(e, t, r) {
  const n = Kh(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function $v(e, t, r, n) {
  for (const i of Kh(e, t, r)) i.easing = Hh(n);
}
function zv(e, t) {
  e.start = Math.max(0, e.start + t);
}
function jv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function Hv(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Gv(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Tc(e) {
  return fo(e).map((t) => e[t]);
}
function Rs(e) {
  return Tc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Gv(e.clip);
}
function Bh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Rs);
}
const Wv = 1e5;
function Uh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of Tc(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of Tc(a))
      for (const u of l.keyframes) o = Math.max(o, s.start - s.in + u.frame + 1);
  }
  return Number.isFinite(o) ? o : Wv;
}
function Kv(e) {
  return e > 0 ? uo(Math.min(e, Vu)) : null;
}
function Bv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Lh(Math.max(1, Math.min(e, $u)));
}
const Ql = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Uv = 2e3;
function Yv(e, t, r = 56) {
  const n = Ql.find((o) => o * t >= r) || Ql[Ql.length - 1], i = [];
  for (let o = 0; o < e && i.length < Uv; o += n) i.push(o);
  return i;
}
function qv(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Wa = { text: null, parsed: null };
function In(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Vs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Xv({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: In(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: lo(null),
    painting_layer: null,
    ui_settings: Vs(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Yh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function Jv(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function Zv(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function Qv(e) {
  return Array.isArray(e) ? e.map((t) => Ru(t)) : [];
}
function e1(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function qh(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = Xv(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Wa.text === i ? o = Wa.parsed : (o = JSON.parse(i), Wa = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Jv(o.assets),
      stickers: Zv(o.stickers),
      shots: Qv(o.shots),
      painting: lo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Vs(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Vs({ ...s.ui_settings, ...a })), s.output_preset = Yh(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = In(r.coverage), delete s.editor_history, s;
  } catch {
    return Wa = { text: i, parsed: null }, n;
  }
}
function t1(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function n1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function r1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Xh(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a } = t, s = uo(t.fps);
  let l;
  try {
    l = $r(e);
  } catch {
    l = $r(null);
  }
  return s && s !== l.timeline.fps && (l = Wu(l, s)), {
    ...l,
    coverage: In(i),
    bg_color: n,
    output_preset: Yh(r),
    ui_settings: Vs(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function i1(e, t) {
  const r = Wu(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of fo(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Ku(e, t) {
  const r = wi(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const o1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function gf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function a1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[o1[r]].keyframes.length));
}
function Jh(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = gf(r, ["yaw_deg", "pitch_deg"]), o = gf(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && pn(e, "direction", n, i), r.rot_deg !== void 0 && pn(e, "roll", n, r.rot_deg), Object.keys(o).length && pn(e, "size", n, o);
}
const yl = ["position_x", "position_y", "position_z"], Bu = "camera";
function Zh(e, t) {
  const r = ya(e, t);
  return Ru({
    id: Bu,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: Qb(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function s1(e) {
  return $r({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: $t(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function l1(e) {
  return e - 360 * Math.round(e / 360);
}
function c1(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + l1(r[o] - n[o]));
  Object.keys(i).length && pn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && pn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * kt * 0.5) / Math.tan(r.vFOV_deg * kt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && pn(e, "position", t, [...r.position]);
}
function u1(e, t) {
  const r = jt(e, "position", t), n = jt(e, "rotation", t);
  return {
    ...Object.fromEntries(yl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: jt(e, "fov", t)
  };
}
function d1(e, t, r, n) {
  const i = yl.indexOf(r);
  if (i >= 0) {
    const o = jt(e, "position", t);
    o[i] = n, pn(e, "position", t, o);
  } else r === "hFOV_deg" ? pn(e, "fov", t, n) : pn(e, "rotation", t, { [r]: n });
}
function f1(e, t, r) {
  pn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function p1(e, t) {
  const r = wi(e, t);
  return {
    ...Object.fromEntries(yl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function h1(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = yl.indexOf(r);
  if (o >= 0) {
    const a = jt(e, "position", i);
    a[o] = n, pn(e, "position", i, a);
  } else r === "scale" ? pn(e, "scale", i, n) : r === "opacity" ? pn(e, "opacity", i, n / 100) : pn(e, "rotation", i, { [r]: n });
}
function m1(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && pn(e, i, n, r[i]);
}
function g1(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function y1(e, t, r) {
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
function ls(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function $s(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Uu(e, t, r, n) {
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
function b1(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = $t(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Dc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Qh(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function em(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function tm(e, t) {
  return e != null && e.__panoSceneStateV2 ? Fc($r(t)) : JSON.stringify(t);
}
function nm(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = $r(r);
    if (Fc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Fc(Wu(i, o)) === t;
  } catch {
    return !1;
  }
}
const ec = 0.15, v1 = 0.01, _1 = 1e-3, S1 = 0.05, w1 = 4, yf = 250, x1 = 16, Qn = 1, k1 = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Ln(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function hr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function bl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function po(e, t, r = 0) {
  const n = Sn(e, t, r), i = hr(n, 2);
  return { right: hr(n, 0), up: hr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function M1(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Lc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function P1(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Lc(e, "3dof", r);
}
function N1(e) {
  return po(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function C1(e) {
  return Ln(e.position, po(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function ni(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Bo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Yu(e, t) {
  return Bo(ni(t, e.position), po(e.yaw_deg, e.pitch_deg).forward);
}
function qu(e) {
  return Math.max(e, 1e-6) * S1;
}
function Rc(e, t, r = null, n = Qn) {
  if (t) return t;
  const i = qu(n);
  if (r && Yu(e, r) > 0) {
    const o = ni(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Ln(e.position, o, i / a);
  }
  return Ln(e.position, po(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function rm(e, t = Qn) {
  return Math.max(e.distance, qu(t));
}
function im(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > w1 ? !1 : t.time - e.time < yf || e.cost > x1 && t.time - e.wheelTime < yf;
}
function Xu(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * kt);
  return { tanX: n, tanY: n * r / t };
}
function om(e, t, r, n, i = C1(e)) {
  const o = e.roll_deg ?? 0, [a, s] = A1(t, r, o), l = $t(e.yaw_deg + a / n * 360), u = Ie(e.pitch_deg - s / n * 360, -89.9, 89.9), d = Sn(e.yaw_deg, e.pitch_deg, o), c = Sn(l, u, o), f = ni(e.position, i), g = [0, 1, 2].map((h) => Bo(hr(d, h), f)), w = { ...e, yaw_deg: l, pitch_deg: u, position: Ln(i, bl(c, g)) };
  return { ...w, distance: Yu(w, i) };
}
function A1(e, t, r) {
  const n = Math.cos(r * kt), i = Math.sin(r * kt);
  return [e * n + t * i, t * n - e * i];
}
function am(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = N1(e), l = 2 * o * Xu(e, n, i).tanY / i;
  return { ...e, position: Ln(Ln(e.position, a, -t * l), s, r * l), distance: o };
}
function sm(e, t, r, n = Qn) {
  const i = ni(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * v1, l = r > 0 ? Math.min(Math.max(o * ec, s), o - a * _1) : -Math.max(o * ec / (1 - ec), s);
  if (r > 0 && l <= 0) return e;
  const u = { ...e, position: Ln(e.position, i, l / o) };
  return { ...u, distance: Math.max(Yu(u, t), qu(n)) };
}
function I1(e, t, r, n) {
  const { tanX: i, tanY: o } = Xu(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = po(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Ln(t.center, l, -s), distance: s };
}
function Ju(e, t, r, n = null) {
  return lm({
    quaternion: ti(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Xu(e, t, r).tanY) * Xt,
    aspect: t / r
  }, e.position, e.distance, n);
}
function lm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: Qn }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function aa(e, t, r, n) {
  const { right: i, up: o, forward: a } = cm(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const u = Math.tan(e.fovY_deg * 0.5 * kt), d = u * e.aspect, c = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + c / l / d), y: n * 0.5 * (1 - f / l / u), z: l };
}
function cm(e) {
  const t = na(e.quaternion), r = hr(t, 2);
  return { right: hr(t, 0), up: hr(t, 1), forward: r.map((n) => -n) };
}
function zs(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function E1({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function Zu(e, t) {
  if (!e || !t.active) return null;
  const r = O1(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Vc(t),
    itemQuaternion: e.kind === "splat" ? k1 : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function um(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = Zu(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function dm(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function O1(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Vc(e) {
  return {
    position: [...e.position],
    quaternion: ti(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function $c(e, t) {
  return Ln(e.position, bl(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function cs(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function zc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function jc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function F1(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...zc(t).map((o) => $c(e.scene, o)));
  for (const o of r) i.push(...Qu(o));
  for (const { box: o, value: a } of n) i.push(...zc(o).map((s) => $c(a, s)));
  return i;
}
function T1(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ti(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Sn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Qu(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Ln(e.position, bl(e.rotation, [n, i, 0])));
}
function D1(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? jc(Qu(i)) : o != null && o.box ? jc(zc(cs(o.kind, o.box)).map((a) => $c(n, a))) : { center: [...n.position], radius: n.scale };
}
const L1 = 2, R1 = 0.5, V1 = 30;
function fm(e, t) {
  const r = ni(t, e), n = Math.atan2(r[0], -r[2]) * Xt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * Xt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function $1(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * R1 : L1, o = t ? [...t] : Ln(e.position, po(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...ni(o, e.position)), s = a > 0 ? fm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(V1 * 0.5 * kt);
  return { position: o, rotation: s, scale: l };
}
function bf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function z1(e) {
  return [0, 1, 2].map((t) => hr(e, t));
}
function vf(e, t, r, n) {
  if (e === "translate") return { position: Ln(t.position, ni(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * K1(r.scale, n.scale) / r.scale };
  const i = bf(na(n.quaternion), z1(na(r.quaternion))), o = bf(i, Sn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Ch(o);
  return Math.abs(s) <= j1 ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: H1(o, t.yaw_deg) } };
}
const j1 = 89.9;
function H1(e, t) {
  const r = hr(e, 0), n = hr(e, 1), i = Math.cos(t * kt), o = Math.sin(t * kt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * Xt + 0;
}
const G1 = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function W1(e, t, r, n, i) {
  if (!aa(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = cm(e), l = ni(t, e.position), u = Bo(l, o), d = Bo(l, a), c = Bo(l, s), f = Math.tan(e.fovY_deg * 0.5 * kt), g = f * e.aspect, w = Math.hypot(u, d, c) * G1[r] * Math.min(1.9 * f, 7) / 4;
  if (!(c > w)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const h = (Y) => {
    const C = w * Math.sqrt(Y * Y + c * c - w * w);
    return [(Y * c - C) / (c * c - w * w), (Y * c + C) / (c * c - w * w)];
  }, [p, D] = h(u), [X, z] = h(d);
  return {
    minX: n * 0.5 * (1 + p / g),
    maxX: n * 0.5 * (1 + D / g),
    minY: i * 0.5 * (1 - z / f),
    maxY: i * 0.5 * (1 - X / f)
  };
}
function K1(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function B1(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function pm(e, t) {
  const r = Sn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * kt) * t, i = n / e.aspect, o = (u, d, c) => Ln(e.position, bl(r, [u, d, c])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((u) => [e.position, u]);
  a.forEach((u, d) => s.push([u, a[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function U1(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = aa(e, a, n, i), u = aa(e, s, n, i);
    if (!l || !u) return !1;
    const d = u.x - l.x, c = u.y - l.y, f = Ie(((r.x - l.x) * d + (r.y - l.y) * c) / Math.max(d * d + c * c, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + c * f - r.y) <= o;
  });
}
function Y1(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function q1(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [jt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return jt(n, "position", l);
  });
}
function X1(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const hm = 0.28;
function mm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * kt);
  return {
    quaternion: ti(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * Xt,
    aspect: n
  };
}
function Uo(e) {
  const t = ei(e);
  return {
    quaternion: ti(Sn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function gm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Lu(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * Xt,
      vFOV_deg: 2 * Math.atan(o / n) * Xt
    }
  };
}
function ym(e, t, r) {
  const [[n, i, o], [a, s, l], [u, d, c]] = na(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * kt), g = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(w, h = 1e-4) {
      const p = tv(w), D = n * p.x + a * p.y + u * p.z, X = i * p.x + s * p.y + d * p.z, z = -(o * p.x + l * p.y + c * p.z), Y = Math.max(z, h);
      return {
        x: t * 0.5 * (1 + D / Y / g),
        y: r * 0.5 * (1 - X / Y / f),
        z
      };
    },
    // The unit direction seen at the point (x, y).
    ray(w, h) {
      const p = (w / t * 2 - 1) * g, D = (1 - h / r * 2) * f;
      return Fu(as({
        x: n * p + i * D - o,
        y: a * p + s * D - l,
        z: u * p + d * D - c
      }));
    }
  };
}
function bm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = ba(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const u = o.stickers[l];
    if (s.placement !== "sky") return;
    const d = s.source.kind === "port" && !s.visible;
    if (!u.active && !d) return;
    const c = r(s);
    if (!c) return;
    const f = Math.tan(u.hFOV_deg * 0.5 * kt), g = Math.tan(u.vFOV_deg * 0.5 * kt), { crop: w } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: c.media,
      revision: c.revision,
      source: c.source,
      opacity: d ? hm : u.opacity,
      zIndex: n(s),
      quaternion: ti(Sn(u.yaw_deg, u.pitch_deg, u.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * w.x0 - 1) * f,
        x1: (2 * w.x1 - 1) * f,
        y0: (1 - 2 * w.y1) * g,
        y1: (1 - 2 * w.y0) * g
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function vm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return bm(e, t, {
    media: (s) => {
      const l = a.get(s.id);
      return l ? n(l) : null;
    },
    zIndex: (s) => {
      var l;
      return Number(((l = a.get(s.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function J1(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function _m(e, t, r, { media: n, evaluated: i = ba(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const u = i.stickers[l];
    if (s.placement !== "world" || !u.active) return;
    const d = o.get(s.id), c = d ? n(d) : null;
    if (!c) return;
    const { width: f, height: g } = J1(c.media), w = T1(u, s.crop, f, g);
    w && a.push({
      id: s.id,
      media: c.media,
      revision: c.revision,
      source: c.source,
      opacity: u.opacity,
      position: w.position,
      quaternion: w.quaternion,
      rotation: w.rotation,
      width: w.width,
      height: w.height,
      crop: s.crop
    });
  }), a;
}
function Z1({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((s) => s.$) }) {
  let s = null, l = null, u = !1, d = 0;
  const c = () => {
    l = bh(s.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(h) {
      return l && !f.lost ? l.render(h) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(h) {
      return l && !f.lost ? l.renderUnwrap(h) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(h, p) {
      return l && !f.lost ? l.resize(h, p) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(h, p) {
      l && !f.lost && l.clear(h, p);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(h) {
      l && !f.lost && l.releaseSplats(h);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(h) {
      return l ? l.sceneBox(h) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(h, p, D, X, z) {
      return l && !f.lost ? l.pick(h, p, D, X, z) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(h, p, D, X, z) {
      return l && !f.lost ? l.pickSurface(h, p, D, X, z) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(h, p, D, X, z) {
      return l && !f.lost ? l.pickSticker(h, p, D, X, z) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(h, p, D, X, z, Y) {
      return l && !f.lost ? l.gizmoPointer(h, p, D, X, z, Y) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      u = !0, e.removeEventListener("webglcontextlost", g), e.removeEventListener("webglcontextrestored", w), l == null || l.dispose(), l = null;
    }
  };
  function g(h) {
    h.preventDefault(), !(u || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function w() {
    u || !f.lost || queueMicrotask(() => {
      u || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, s && (c(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", g), e.addEventListener("webglcontextrestored", w), a().then((h) => {
    u || (s = h, !f.lost && (c(), f.ready = !0, t()));
  }).catch((h) => {
    console.error("[PanoramaStickers] three.js view is unavailable", h), f.failed = !0, r();
  }), f;
}
const Sm = "3D view unavailable. Check the browser console.";
function js(e, t, r) {
  return mm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function Q1(e) {
  let t = null, r = !1, n = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || r || n || (r = !0, e().then((a) => {
      if (r = !1, !i.size) {
        a.dispose();
        return;
      }
      t = a, i.forEach((s) => s.onChange());
    }).catch((a) => {
      r = !1, i.size && (n = !0, console.error("[PanoramaStickers] three.js view is unavailable", a), i.forEach((s) => s.onChange()));
    }));
  }
  return function(s) {
    const l = { onChange: s };
    let u = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(d) {
        return u ? null : (o(), t ? t.render({ ...d, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        u || (u = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const wm = Q1(
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => bh(e.createThreeView({ createCanvas: () => en({ label: "three.node" }) }), "node"))
), er = ["erp_image", "bg_erp", "bg_media"], ed = ["sticker_image", "sticker"], xm = ["scene"], e_ = {
  background: er,
  "external-sticker": ed,
  scene: xm
};
function km(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function vl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = km(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function Mm(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function _f(e, t) {
  var o, a;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((s) => (s == null ? void 0 : s.name) === t);
  let n = r >= 0 && e.graph ? e.getInputLink(r) : null;
  const i = /* @__PURE__ */ new Set();
  for (; n; ) {
    if (n.type && n.type !== "*") return String(n.type);
    const s = e.graph.getNodeById(n.origin_id);
    if (!s || i.has(s)) return "";
    i.add(s);
    const l = (a = (o = s.outputs) == null ? void 0 : o[n.origin_slot ?? 0]) == null ? void 0 : a.type;
    if (l && l !== "*") return String(l);
    if (s.type !== "Reroute") return "";
    n = s.getInputLink(0);
  }
  return "";
}
function Pm(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function t_(e, t) {
  const { graph: r, entry: n } = Pm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = km(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const Nm = [...er, ...ed, ...xm], n_ = 256, $i = /* @__PURE__ */ new Map(), tc = /* @__PURE__ */ new WeakMap();
let Cm = () => null;
function Am(e) {
  return tc.has(e) || tc.set(e, JSON.stringify(e)), tc.get(e);
}
function r_(e) {
  Cm = e;
}
function Hs(e, t) {
  const r = Am(e);
  $i.delete(r), $i.set(r, t), $i.size > n_ && $i.delete($i.keys().next().value);
}
function Yt(e, t) {
  var o;
  const r = e ? Cm(e) : null;
  if (!r) return !0;
  const n = vl(e);
  let i = $i.get(Am(r));
  if (i)
    Hs(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => Nm.includes(a == null ? void 0 : a.name)))) return !0;
    Hs(r, n), i = n;
  }
  return e_[t].every((a) => i[a] === n[a]);
}
const Gs = /* @__PURE__ */ new WeakSet();
async function Hc(e, t) {
  if (Gs.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Gs.add(e), r.ok && n !== void 0 ? n : null;
}
function Im(e, t) {
  var o, a, s, l, u;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = Pm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((u = n == null ? void 0 : n.inputs) != null && u.some((d) => Nm.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: t_(r, t) };
}
const us = /* @__PURE__ */ new Map();
function i_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && us.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Hc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = Im(i, o);
        a && Hs(a.output, a.inputs);
      }
    });
}
const o_ = 5;
function a_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${o_}`, n = Hc(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Hc(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var u, d, c, f;
      const l = String(a.id);
      for (const { id: g } of await n) {
        if (!s()) return null;
        const w = await o(g);
        if ((u = w == null ? void 0 : w.outputs) != null && u[l])
          return ((f = (c = (d = w.workflow) == null ? void 0 : d.prompt) == null ? void 0 : c[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : Im(w, l);
      }
      return null;
    }
  };
}
function s_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let Fi = null;
async function l_(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Gs.has(r) || (s = us.get(i)) != null && s.has(n) || s_(t)) return null;
  (Fi == null ? void 0 : Fi.workflowId) !== i && (Fi = { workflowId: i, history: a_(r, i) }, queueMicrotask(() => {
    Fi = null;
  }));
  const a = await Fi.history.lastNodeOutput(e, o);
  return o() ? a ? (Hs(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (Gs.has(r) || us.set(i, (us.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Sf(e, t, r, n = er) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const wf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ds(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return wf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return wf.test(String((e == null ? void 0 : e.filename) || ""));
}
const nc = /* @__PURE__ */ new WeakMap();
function c_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Gc(e) {
  return c_(e) ? (nc.has(e) || nc.set(e, Math.random().toString(36).slice(2, 10)), nc.get(e)) : "run";
}
function Em(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function u_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((u, d) => d)));
    }
  };
  return i(e, t), n;
}
function td(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const u = n(l);
          if (u && (/\.mp4(\?|$)/i.test(u) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return u;
        }
  }
  return "";
}
function d_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = ga(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, u = () => {
    o || i();
  }, d = () => i(), c = () => {
    i(), l();
  }, f = () => i();
  let g = !1;
  const w = () => {
    g = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", u, { once: !0 }), n.addEventListener("loadeddata", u, { once: !0 }), s || n.addEventListener("timeupdate", d), n.addEventListener("play", c), n.addEventListener("pause", f), n.addEventListener("error", w), n.src = t, n.load();
  const h = () => {
    o || g || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, p = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var X, z;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", u), n.removeEventListener("loadeddata", u), n.removeEventListener("timeupdate", d), n.removeEventListener("play", c), n.removeEventListener("pause", f), n.removeEventListener("error", w), n.pause(), (X = n.removeAttribute) == null || X.call(n, "src"), (z = n.load) == null || z.call(n));
    },
    failed: () => g,
    play: h,
    pause: p,
    toggle() {
      n.paused ? h() : p();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function ai(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function f_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function xf(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (n = s.outputNode);
    } catch {
    }
  return !n && r != null && (n = f_(e == null ? void 0 : e.graph, r)), n;
}
function p_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function h_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function m_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Om({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (C) => {
    if (!C) return "";
    if (typeof C == "string") return String(C || "").trim();
    if (Array.isArray(C)) {
      if (C.length === 0) return "";
      if (C.length === 1) return i(C[0]);
      const re = String(C[0] || "").trim();
      if (re)
        return ai(t, {
          filename: re,
          subfolder: String(C[1] || "").trim(),
          type: String(C[2] || "output").trim() || "output"
        });
      for (const L of C) {
        const ne = i(L);
        if (ne) return ne;
      }
      return "";
    }
    return typeof (C == null ? void 0 : C.src) == "string" && C.src ? C.src : typeof (C == null ? void 0 : C.url) == "string" && C.url ? C.url : ai(t, C);
  }, o = (C) => {
    if (!C || typeof C != "object") return "";
    const re = String(C.type || "").trim().toLowerCase();
    if (re === "dataurl") return String(C.value || "");
    if (re !== "comfy_image") return "";
    const L = String(C.filename || "").trim();
    return L ? ai(t, {
      filename: L,
      subfolder: String(C.subfolder || ""),
      type: String(C.storage || "input")
    }) : "";
  }, a = (C) => {
    const re = e == null ? void 0 : e.nodeOutputs;
    if (!re || C == null) return null;
    const L = String(C);
    return re instanceof Map ? re.get(C) || re.get(L) || re.get(Number(L)) || null : re[C] || re[L] || null;
  }, s = (C, re) => {
    var ne;
    const L = a(C == null ? void 0 : C.id);
    return Array.isArray((ne = L == null ? void 0 : L.ui) == null ? void 0 : ne[re]) ? L.ui[re] : Array.isArray(L == null ? void 0 : L[re]) ? L[re] : [];
  }, l = (C, re) => {
    const L = a(C == null ? void 0 : C.id);
    return L != null && L.ui && Object.prototype.hasOwnProperty.call(L.ui, re) ? L.ui[re] : L && Object.prototype.hasOwnProperty.call(L, re) ? L[re] : null;
  }, u = (C, re) => {
    const L = l(C, "pano_sticker_input_state_hash"), ne = Array.isArray(L) ? L[0] : L;
    return String(ne ?? "").trim() || m_(re);
  }, d = (C) => {
    const re = [], L = /* @__PURE__ */ new Set();
    for (const ne of C || []) {
      const U = i(ne);
      !U || L.has(U) || (L.add(U), re.push(U));
    }
    return re;
  }, c = (C, re) => {
    var U;
    const L = [];
    Array.isArray(C == null ? void 0 : C.images) && C.images.length && L.push(C.images), Array.isArray((U = C == null ? void 0 : C.ui) == null ? void 0 : U.images) && C.ui.images.length && L.push(C.ui.images);
    const ne = [];
    for (const de of L)
      re >= 0 && re < de.length && ne.push(de[re]), ne.push(...de);
    return ne;
  }, f = (C, re) => {
    var G;
    const L = String(re || "").trim();
    if (!L) return { src: "", sourceType: "", inputName: "" };
    const U = (Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : []).findIndex((O) => String((O == null ? void 0 : O.name) || "") === L);
    if (U < 0) return { src: "", sourceType: "", inputName: L };
    const de = C.graph ? C.getInputLink(U) : null;
    if ((de == null ? void 0 : de.origin_id) == null) return { src: "", sourceType: "", inputName: L };
    const V = de.origin_id, ae = xf(C, U, V);
    if (!ae) return { src: "", sourceType: "", inputName: L };
    const H = Number(de.origin_slot ?? 0);
    let J = [];
    try {
      J = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ae) || [] : [];
    } catch {
      J = [];
    }
    if (Array.isArray(J) && J.length) {
      const O = [];
      H >= 0 && H < J.length && O.push(J[H]), O.push(...J);
      const q = d(O.filter((me) => !ds(me)));
      if (q.length)
        return { src: q[0], srcCandidates: q, sourceType: "appNodeImageUrls", inputName: L };
    }
    const $ = a((ae == null ? void 0 : ae.id) ?? V), Q = d(c($, H).filter((O) => !ds(O))).map((O) => `${O}&pano_src=${Gc($)}`);
    if (Q.length)
      return { src: Q[0], srcCandidates: Q, sourceType: "nodeOutputs", inputName: L };
    const K = Array.isArray(ae == null ? void 0 : ae.imgs) ? ae.imgs : [];
    if (K.length) {
      const O = [];
      H >= 0 && H < K.length && O.push(K[H]), O.push(...K);
      const q = d(O);
      if (q.length)
        return { src: q[0], srcCandidates: q, sourceType: "nodeImgs", inputName: L };
    }
    const E = (G = ae == null ? void 0 : ae.widgets) == null ? void 0 : G.find((O) => String((O == null ? void 0 : O.name) || "").toLowerCase() === "image");
    if (E) {
      let O = i(E.value);
      if (O && !O.includes("/") && !O.includes(":") && (ae.comfyClass === "LoadImage" || ae.type === "LoadImage") && (O = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(O)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(O)}&type=input&subfolder=`), O) return { src: O, sourceType: "widget", inputName: L };
    }
    return { src: "", sourceType: "", inputName: L };
  }, g = (C, re = []) => {
    var ne;
    const L = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : [];
    for (const U of re) {
      const de = L.findIndex((J) => String((J == null ? void 0 : J.name) || "") === U), V = de >= 0 && C.graph ? C.getInputLink(de) : null;
      if ((V == null ? void 0 : V.origin_id) == null) continue;
      const ae = a(((ne = xf(C, de, V.origin_id)) == null ? void 0 : ne.id) ?? V.origin_id), H = (Array.isArray(ae == null ? void 0 : ae.images) ? ae.images : []).find(ds);
      return H ? `${ai(t, H)}&pano_src=${Gc(ae)}` : "";
    }
    return "";
  }, w = (C, re = []) => {
    const L = Array.isArray(re) ? re : [re];
    for (const ne of L) {
      const U = f(C, ne);
      if (String((U == null ? void 0 : U.src) || "").trim()) return U;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, h = (C) => {
    const re = String(C || "").trim();
    if (!re) return [];
    if (p_(re)) return [re];
    const { filename: L, subfolder: ne } = h_(re);
    return L ? d([
      ai(t, { filename: L, subfolder: ne, type: "temp" }),
      ai(t, { filename: L, subfolder: ne, type: "output" }),
      ai(t, { filename: L, subfolder: ne, type: "input" }),
      re
    ]) : [re];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (C) => {
      var re, L;
      try {
        (L = (re = C == null ? void 0 : C.__panoLinkedInputImageCache) == null ? void 0 : re.forEach) == null || L.call(re, (ne, U, de) => {
          var V;
          ne != null && ne.img && ((V = n == null ? void 0 : n.isImageLoadFailed) != null && V.call(n, ne.img)) && de.delete(U);
        });
      } catch {
      }
    },
    externalStateHash: u,
    invalidateUiImage: (C, re) => {
      var L;
      (L = C == null ? void 0 : C.delete) == null || L.call(C, `__ui__${String(re || "")}`);
    },
    linkedValue: (C, re) => {
      var V, ae, H, J;
      const L = String(re || ""), ne = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs.findIndex(($) => String(($ == null ? void 0 : $.name) || "") === L) : -1, U = ne >= 0 && C.graph ? C.getInputLink(ne) : null;
      if (U) {
        const $ = a(U.origin_id), Q = [
          $ == null ? void 0 : $.output,
          $ == null ? void 0 : $.result,
          (V = $ == null ? void 0 : $.data) == null ? void 0 : V.output,
          (ae = $ == null ? void 0 : $.data) == null ? void 0 : ae.result,
          (H = $ == null ? void 0 : $.ui) == null ? void 0 : H.output,
          (J = $ == null ? void 0 : $.ui) == null ? void 0 : J.result
        ];
        for (const K of Q) {
          if (!Array.isArray(K)) continue;
          const E = K[Number(U.origin_slot || 0)];
          if (typeof E == "string" && E.trim()) return E;
        }
      }
      const de = Array.isArray(C == null ? void 0 : C.widgets) ? C.widgets.find(($) => String(($ == null ? void 0 : $.name) || "") === L) : null;
      return String((de == null ? void 0 : de.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (C, re = [], L = null, ne = "") => {
      var _e;
      const U = Array.isArray(re) ? re : [re], de = w(C, U), ae = (Array.isArray(de == null ? void 0 : de.srcCandidates) && de.srcCandidates.length ? de.srcCandidates : [de == null ? void 0 : de.src]).map((te) => String(te || "").trim()).filter(Boolean);
      if (!ae.length) return null;
      const H = d(ae.flatMap((te) => h(te)));
      if (!H.length) return null;
      C.__panoLinkedInputImageCache || (C.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(ne || U.join("|") || "image_exact"), $ = ae.join(`
`), Q = C.__panoLinkedInputImageCache.get(J);
      if (Q && Q.srcRaw === $ && Q.img) return Q.img;
      const K = r || globalThis.Image;
      if (typeof K != "function") return null;
      const E = new K();
      (_e = n == null ? void 0 : n.markImageLoading) == null || _e.call(n, E, $);
      const G = { srcRaw: $, resolvedSrc: "", img: E };
      C.__panoLinkedInputImageCache.set(J, G);
      let O = -1;
      const q = (te) => {
        var N, oe, ue;
        te === "ready" ? (N = n == null ? void 0 : n.markImageReady) == null || N.call(n, E, $) : (oe = n == null ? void 0 : n.markImageFailed) == null || oe.call(n, E, $), L == null || L(E), (ue = C.setDirtyCanvas) == null || ue.call(C, !0, !0);
      }, me = () => {
        if (O += 1, O >= H.length) {
          q("failed");
          return;
        }
        G.resolvedSrc = H[O], E.src = G.resolvedSrc;
      };
      return E.onload = () => q("ready"), E.onerror = () => {
        if (O + 1 < H.length) {
          me();
          return;
        }
        q("failed");
      }, me(), E;
    },
    output: a,
    resolvePreferredExactLinkedSource: w,
    source: i,
    uiImage: (C, re, L, ne = null) => {
      var $, Q, K;
      const U = s(C, re)[0] || null, de = i(U);
      if (!de) return null;
      const V = `__ui__${re}`, ae = ($ = L == null ? void 0 : L.get) == null ? void 0 : $.call(L, V);
      if (ae && ae.__panoSrc === de) return ae;
      const H = r || globalThis.Image;
      if (typeof H != "function") return null;
      const J = new H();
      return J.__panoSrc = de, (Q = n == null ? void 0 : n.markImageLoading) == null || Q.call(n, J, de), J.onload = () => {
        var E;
        (E = n == null ? void 0 : n.markImageReady) == null || E.call(n, J, de), ne == null || ne(J);
      }, J.onerror = () => {
        var E;
        (E = n == null ? void 0 : n.markImageFailed) == null || E.call(n, J, de), ne == null || ne(J);
      }, J.src = de, (K = L == null ? void 0 : L.set) == null || K.call(L, V, J), J;
    },
    uiList: s,
    uiValue: l
  };
}
const g_ = 1e-3;
function nd(e, t, r, n) {
  if (!co(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(g_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Fm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function y_(e, t) {
  return Math.floor(e * t.fps);
}
function rd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const kf = 4;
function id({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, u) {
      if ((a.length !== r.length || a.some((f, g) => f !== r[g])) && (r = a, n.clear(), i = null), s === null) return null;
      const d = y_(s, l);
      for (let f = d; f < Math.min(r.length, d + kf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + kf) && f !== i && n.delete(f);
      const c = n.get(d);
      return c != null && c.complete && c.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? u : n.get(i);
    }
  };
}
function Tm({
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
  let a = null, s = !1, l = !1;
  const u = () => a || e(), d = () => o(r(u()));
  return {
    model: () => r(u()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, d(), !0);
    },
    updateGesture(c) {
      if (l) return !1;
      a || this.beginGesture();
      const f = t(a, c);
      return f.changed ? (a = f.state, s = !0, n(a), d(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const c = s;
      return c && i(a), a = null, s = !1, n(null), d(), c;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), d(), !0);
    },
    apply(c) {
      if (l) return !1;
      a && this.commitGesture();
      const f = t(e(), c);
      return f.changed ? (i(f.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const c = a != null;
      a = null, s = !1, c && n(null);
    }
  };
}
const fs = "sticker_image_1", Dm = "external_image", ro = 0;
function qi(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function rc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Jr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Wc(e, t = ro) {
  return (e == null ? void 0 : e.version) !== 2 ? Jr(e) : Jr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: wi(r, t).active,
    external: r.source.kind === "port",
    ...Ku(r, t)
  }));
}
function od(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && Jr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Lm(e) {
  return String((e == null ? void 0 : e.id) || "") === fs || String((e == null ? void 0 : e.source_kind) || "") === Dm;
}
function ad(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Lm(t);
}
const Rm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Vm(e) {
  return !Lm(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Rm.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function $m(e) {
  const t = Vm(e);
  return t ? Rm.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function zm(e, t = {}) {
  var Y, C, re;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((L) => String((L == null ? void 0 : L.id) || "") === fs);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const L = String(((Y = e.active) == null ? void 0 : Y.selected_sticker_id) || "") === fs;
    return {
      state: {
        ...e,
        stickers: r.filter((ne, U) => U !== n),
        active: L ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), u = Number(t.imageHeight || 0), d = l > 0 && u > 0, c = Math.max(1, l), f = Math.max(1, u), g = t.pose && typeof t.pose == "object" ? t.pose : {}, w = s ? g.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || g.hFOV_deg || 30, h = Math.min(179, Math.max(0.1, Number(w)));
  if (!s) {
    if (!d) return { state: e, changed: !1 };
    const L = qi(h, c, f), ne = Number(((C = a == null ? void 0 : a.initial_pose) == null ? void 0 : C.hFOV_deg) ?? h), U = qi(ne, c, f), de = Number(((re = a == null ? void 0 : a.initial_pose) == null ? void 0 : re.vFOV_deg) ?? U);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - L) <= 1e-6 && Math.abs(de - U) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((V, ae) => ae === n ? {
          ...V,
          vFOV_deg: L,
          initial_pose: V.initial_pose && typeof V.initial_pose == "object" ? { ...V.initial_pose, vFOV_deg: U } : V.initial_pose
        } : V)
      },
      changed: !0
    };
  }
  const p = r.reduce((L, ne) => Math.max(L, Number((ne == null ? void 0 : ne.z_index) || 0)), -1), D = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: h,
    vFOV_deg: d ? qi(h, c, f) : Number(g.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || h),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, X = {
    ...a || {},
    id: fs,
    source_kind: Dm,
    source_link_id: i,
    source_state_hash: o,
    ...D,
    initial_pose: { ...D },
    visible: !0,
    z_index: p + 1
  }, z = n >= 0 ? r.map((L, ne) => ne === n ? X : L) : [...r, X];
  return { state: { ...e, stickers: z }, changed: !0 };
}
function Mf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const b_ = ["IMAGE", "VIDEO"];
function Pf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => b_.includes(r)) ? "2d" : null;
}
function v_(e, t) {
  var i, o, a, s, l, u;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Pf(n.type) ?? Pf((u = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : u.type) : null;
}
function jm(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: Mf(e, "sticker"),
    awaitingPose: !t && (Mf(e, "sticker_state") || v_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function Nf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return $r({ version: 2, stickers: [r] }).stickers[0];
}
function Hm(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var h;
  const a = e.stickers.findIndex((p) => ad(e, p)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((h = e.active) == null ? void 0 : h.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((D, X) => X !== a),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const p = { ...Nf(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((D, X) => X === a ? p : D) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const p = [s.size.value, ...s.size.keyframes.map((z) => z.value)], D = p.map((z) => qi(z.hFOV_deg, i, o));
    if (p.every((z, Y) => Math.abs(z.vFOV_deg - D[Y]) <= 1e-6)) return { state: e, changed: !1 };
    const X = {
      value: { ...s.size.value, vFOV_deg: D[0] },
      keyframes: s.size.keyframes.map((z, Y) => ({ ...z, value: { ...z.value, vFOV_deg: D[Y + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((z, Y) => Y === a ? { ...z, size: X } : z) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const u = new Set(e.stickers.map((p) => p.id));
  let d = 1;
  for (; u.has(`sticker_${d}`); ) d += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Nf(`sticker_${d}`, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (p) => l ? qi(p, i, o) : p, g = Uu(`sticker_${d}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: f(c)
  }, Jr(e).reduce((p, D) => Math.max(p, D.z_index), -1) + 1), w = (n == null ? void 0 : n.keyframes) ?? {};
  return g.direction.keyframes = w.direction ?? [], g.roll.keyframes = w.roll ?? [], g.size.keyframes = (w.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: f(p.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, g] }, changed: !0 };
}
function sd(e) {
  const t = Jr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: rc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: rc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: rc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Gm(e) {
  const t = od(e), r = ad(e, t), n = Jr(e).some((s) => s && s.visible !== !1), i = sd(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: $m(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function __(e) {
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
function Cf(e, t) {
  const r = od(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = __(e), i = String(r.id || ""), o = sd(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, u) => {
    l.item.z_index = u;
  }), { state: n, changed: !0 };
}
function S_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function w_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return zm(e, t.value);
  if (t.type === "sync-port") return Hm(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = sd(e).reduce((f, g) => Math.max(f, Number(g.z_index || 0)), -1), u = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: u,
      vFOV_deg: qi(u, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Uu(o, ls(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const c = { id: o, asset_id: a, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], c],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !Jr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = od(e);
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
    const i = Vm(r);
    return !i || !$m(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Cf(e, "front");
  if (t.type === "send-back") return Cf(e, "back");
  if (t.type === "delete-selected") {
    if (ad(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = Jr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = S_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Ku(r, ro) : r, s = {};
    if (o.forEach((l) => {
      const u = Number(i[l]);
      Number.isFinite(u) && Math.abs(u - Number(a[l] || 0)) > 1e-12 && (s[l] = u);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = a1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const u = structuredClone(r);
      return Jh(u, ro, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? u : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === r ? { ...l, ...s } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function x_(e = {}) {
  return Tm({
    ...e,
    reduce: w_,
    projectModel: Gm
  });
}
const Kc = 2;
function ui(e, t) {
  return Math.floor(e * t + 0.5);
}
function k_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Wm({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, u = !1, d = !1, c = { name: "idle" }, f = [];
  const g = () => u && !d, w = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function h() {
    for (const G of f) G();
    f = [];
  }
  function p(G, O = {}) {
    return h(), c = { name: G, ...O }, s(), c;
  }
  function D(G, O, q) {
    const me = () => {
      c === G && q();
    };
    e.addEventListener(O, me), f.push(() => e.removeEventListener(O, me));
  }
  function X(G, O) {
    let q = t.requestFrame(function me(_e) {
      c === G && (O(_e), c === G && (q = t.requestFrame(me)));
    });
    f.push(() => t.cancelFrame(q));
  }
  function z(G) {
    l = G, o(l);
  }
  function Y() {
    return p(d ? "error" : "idle");
  }
  function C() {
    d = !0, Y();
  }
  function re() {
    const { seekable: G } = e, O = G != null && G.length ? G.end(G.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(O) ? O : 1 / 0));
  }
  function L(G) {
    if (!g()) return G === "play" ? ae() : Y();
    if (e.readyState < Kc) {
      const O = p("loading", { then: G });
      return D(O, "loadeddata", () => L(O.then)), D(O, "error", C), O;
    }
    return G === "play" && l / r() >= Number(e.duration) ? ae() : ne(G, !1);
  }
  function ne(G, O) {
    const q = re();
    if (!e.ended && ui(Number(e.currentTime), r()) === ui(q, r())) return U(G);
    const me = p("seeking", { then: G, frame: l, retried: O });
    return D(me, "seeked", () => {
      const _e = ui(Number(e.currentTime), r()) === ui(re(), r()), te = l === me.frame;
      _e || te && me.retried ? U(me.then) : ne(me.then, te);
    }), D(me, "error", C), e.currentTime = q, me;
  }
  function U(G) {
    return G === "play" ? de() : (a(), Y());
  }
  function de() {
    const G = p("playingVideo", { shown: !1 });
    if (D(G, "pause", () => e.ended ? V() : $()), D(G, "ended", V), D(G, "error", C), i() && ui(Number(e.duration), r()) >= n()) {
      const q = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = q;
      });
    }
    const O = (q, me) => {
      me && !G.shown && (G.shown = !0, s()), H(ui(q, r()));
    };
    if (w()) {
      let q = e.requestVideoFrameCallback(function me(_e, te) {
        c === G && (O(Number(te.mediaTime), !0), c === G && (q = e.requestVideoFrameCallback(me)));
      });
      f.push(() => {
        var me;
        return (me = e.cancelVideoFrameCallback) == null ? void 0 : me.call(e, q);
      });
    } else
      X(G, () => O(Number(e.currentTime), e.readyState >= Kc));
    return Promise.resolve(e.play()).catch(() => {
      c === G && $();
    }), G;
  }
  function V() {
    a(), ae();
  }
  function ae() {
    const G = p("playingClock", { startTs: t.now(), startFrame: l });
    return X(G, (O) => H(G.startFrame + Math.floor((O - G.startTs) / 1e3 * r()))), G;
  }
  function H(G) {
    if (G < n()) {
      z(G);
      return;
    }
    if (!i()) {
      J(n() - 1);
      return;
    }
    c.name === "playingVideo" && (h(), e.pause()), z(0), L("play");
  }
  function J(G) {
    c.name === "playingVideo" ? (h(), e.pause(), z(Math.max(0, G)), a()) : z(Math.max(0, G)), L("still");
  }
  function $() {
    if (c.name === "loading" || c.name === "seeking")
      c.then = "still", s();
    else if (c.name === "playingVideo") {
      h(), e.pause();
      const G = k_(Number(e.currentTime), r());
      z(Math.min(G, n() - 1)), a(), l === G ? Y() : L("still");
    } else c.name === "playingClock" && J(Math.min(l, n() - 1));
  }
  function Q() {
    if (!E()) {
      if (l >= n() - 1 && z(0), c.name === "loading" || c.name === "seeking") {
        c.then = "play", s();
        return;
      }
      L("play");
    }
  }
  function K(G) {
    const O = Math.max(0, Math.round(G));
    if (c.name === "loading" || c.name === "seeking") {
      c.then = "still", z(O), s();
      return;
    }
    c.name === "playingVideo" && (h(), e.pause()), z(O), L("still");
  }
  function E() {
    return c.name === "playingVideo" || c.name === "playingClock" || c.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return c.name;
    },
    get playing() {
      return E();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return c.name === "playingVideo" || c.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return c.name === "playingVideo" && c.shown;
    },
    play: Q,
    stop: $,
    seek: K,
    toggle() {
      E() ? $() : Q();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(G) {
      h(), u = !!G, d = !1, L("still");
    },
    dispose() {
      h(), u = !1, c = { name: "idle" };
    }
  };
}
function ld({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function u(h) {
    s = h, t();
  }
  function d(h) {
    a = h, e.currentTime = h;
  }
  function c() {
    const h = l;
    f(), l !== h && r();
  }
  function f() {
    if (!n || i || e.readyState < Kc) return;
    const { time: h, playing: p, fps: D } = o;
    if (h === null) {
      e.pause(), l = !1;
      return;
    }
    if (p) {
      if (a !== null) return;
      const X = Number(e.duration), z = Number.isFinite(X) ? Math.min(h, X) : h, Y = Math.abs(Number(e.currentTime) - z) > 1.5 / D;
      if (e.ended && !Y) return;
      Y && d(z), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, u(NaN)), !(a !== null || s === h) && (Number(e.currentTime) === h ? u(h) : d(h));
  }
  const g = {
    loadeddata: c,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: c,
    seeked: () => {
      const h = a;
      a = null, !o.playing && h === o.time ? u(h) : c();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [h, p] of Object.entries(g)) e.addEventListener(h, p);
  function w(h) {
    n = h, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: h = "", time: p = null, playing: D = !1, fps: X }) {
      h !== n && (w(h), r()), o = { time: p, playing: D, fps: X }, c();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(h, p) {
      return !n || i ? p : o.time === null ? null : o.playing && l ? e : s === null ? p : h;
    },
    dispose() {
      for (const [h, p] of Object.entries(g)) e.removeEventListener(h, p);
      w("");
    }
  };
}
function ps(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function M_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: u = !1 }) {
  let d = "", c = "", f = 0;
  const g = /* @__PURE__ */ new Set();
  let w = null, h = null;
  const p = () => i().timeline.fps, D = (V) => V.stickers.find((ae) => ae.source.kind === "port"), X = () => {
    const V = i(), ae = D(V);
    return Uh(V, {
      minimum: Math.round(p() * 5),
      frames: Math.max(
        d ? Math.round(f * p()) : 0,
        w && ae ? Fm(ae.clip, p(), w.meta) : 0
      ),
      camera: u
    });
  }, z = Wm({
    video: e,
    clock: n,
    fps: p,
    span: X,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), Y = () => {
    c === d && Number.isFinite(e.duration) && (f = e.duration);
  }, C = () => {
    c && (g.add(c), l());
  }, re = ld({ video: t, onCapture: s, onChange: l }), L = id({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", Y), e.addEventListener("error", C);
  function ne(V) {
    V !== c && (c = V, e.pause(), V ? e.src = V : e.removeAttribute("src"), e.load(), z.setSource(!!V));
  }
  function U() {
    z.playing && z.stop();
  }
  function de(V) {
    const ae = D(V);
    h = w && ae ? nd(ae.clip, z.frame, V.timeline.fps, w.meta) : null, re.follow({
      src: (w == null ? void 0 : w.src) || "",
      time: h,
      playing: z.advancing,
      fps: V.timeline.fps
    });
  }
  return {
    get frame() {
      return z.frame;
    },
    get playing() {
      return z.playing;
    },
    get showsVideo() {
      return z.showsVideo;
    },
    get source() {
      return c;
    },
    pause: U,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return w;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(V, ae) {
      return w != null && w.frames ? L.picture(w.frames, h, w.meta, ae) : re.picture(V, ae);
    },
    toggle() {
      z.playing ? z.stop() : z.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: V, sources: ae, state: H, sticker: J = null }) {
      if (w = V ? J : null, !V)
        return U(), ne(""), de(H), !1;
      for (const G of g)
        ae.includes(G) || g.delete(G);
      const $ = ae.find((G) => G && !g.has(G)) || "", Q = $ !== d;
      Q && (d = $, f = 0), ne(d);
      const K = Bh(H, { camera: u }) || !!d && z.state !== "error" || !!w;
      return K || U(), (Q || !K || !z.playing && z.frame >= X()) && z.frame !== ro && z.seek(ro), de(H), K;
    },
    dispose() {
      z.dispose(), re.dispose(), e.removeEventListener("loadedmetadata", Y), e.removeEventListener("error", C), e.pause(), e.removeAttribute("src"), e.load(), c = "";
    }
  };
}
const Ws = Math.PI / 180, dr = 180 / Math.PI, P_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), N_ = 260;
function Af(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Km(e, t) {
  return t ? Km(t, e % t) : e;
}
function C_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Km(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function sa(e, t) {
  const r = Af(e), n = Af(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: C_(r, n) };
}
function vi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Bm(e) {
  const t = vi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Er(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function cd(e, t, r = P_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), u = (p, D, X) => {
    const z = p + D, Y = Math.max(0, X - 1), C = z > Y && z > 0 ? Y / z : 1;
    return [p * C, D * C];
  }, [d, c] = u(l, a, n), [f, g] = u(o, s, i), w = {
    x: d,
    y: f,
    w: Math.max(1, n - d - c),
    h: Math.max(1, i - f - g)
  }, h = Tu(w, t);
  return {
    x: w.x + (w.w - h.width) * 0.5,
    y: w.y + (w.h - h.height) * 0.5,
    w: h.width,
    h: h.height,
    safeRect: w
  };
}
function A_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = cd({ width: r, height: n }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Ws * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, u = Nh(l, xh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), d = I_(u, so(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), c = Du({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: c.hFOV_deg
  };
}
function Um(e) {
  return {
    yaw: $t(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * dr),
    pitch: Ie(Math.asin(Ie(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * dr, -89.9, 89.9)
  };
}
function I_(e, t) {
  const r = Um(e), n = so(r.yaw, r.pitch, 0), i = Gl(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, a = Math.hypot(o.x, o.y, o.z);
  if (!(a > 1e-8)) return { ...r, roll: 0 };
  const s = {
    x: o.x / a,
    y: o.y / a,
    z: o.z / a
  };
  return {
    ...r,
    roll: pl(Math.atan2(
      Gl(s, n.up),
      Gl(s, n.right)
    ) * dr)
  };
}
function Ym(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = cd({ width: r, height: n }, Mi(e)), o = Si(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = Nh(e, xh(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Um(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ie(2 * Math.atan(r / (2 * o)) * dr, 1, 179)
  };
}
function E_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = Si(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: u, halfH: d } = Lu(l, s), c = {
    x: o - u,
    y: a - d,
    w: u * 2,
    h: d * 2
  }, f = c.x <= 0 && c.y <= 0 && c.x + c.w >= n && c.y + c.h >= i, g = n / i, w = Math.tan(Pc * Ws), h = g >= 1 ? w : w * g, p = g >= 1 ? w / g : w;
  return {
    focalPx: s,
    rect: c,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(u / s) * dr,
      vFOV_deg: 2 * Math.atan(d / s) * dr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(h) * dr,
        vFOV_deg: 2 * Math.atan(p) * dr
      }
    }
  };
}
function Ti(e, t) {
  const r = vi(e);
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
function O_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = Si(r, e);
    return Du(Tu(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: os(o, t) };
}
function If(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = sa(t, r);
  if (!o) return e;
  const a = Mi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = sa(o.height, o.width));
  const s = O_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function qm(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (vi(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = kh({
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
    const n = vi(e);
    if (!n) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((a) => a !== n), o = ((r = i[0]) == null ? void 0 : r.id) == null ? null : String(i[0].id);
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
    return Ti(e, (n) => If(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Ti(e, (n) => {
      const o = String(Er(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? sa(o[1], o[2]) : sa(Mi(n), 1);
      return a ? If(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Ti(e, (i) => {
      const o = pl(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Ti(e, (n) => {
    const i = Mh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Ti(e, (n) => {
    const i = Ph(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Ti(e, (n) => {
    const i = Zm(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Xm({
  frame: e,
  point: t,
  startRollDeg: r = 0,
  shiftKey: n = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: a = 0.05
} = {}) {
  const s = o && i ? "alt" : n ? "shift" : "";
  if (!s || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, u = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - u.x, Number(t.y || 0) - u.y);
  if (s === "shift" && d < Math.min(l.w, l.h) * a) return null;
  const c = Math.atan2(Number(t.y || 0) - u.y, Number(t.x || 0) - u.x);
  return {
    source: s,
    frame: l,
    center: u,
    startRollDeg: Number(r || 0),
    lastAngle: c,
    accumulatedRad: 0
  };
}
function Jm(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Sh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: wh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Zm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ws, l = Math.cos(s), u = Math.sin(s), d = o / r, c = -a / r, f = d * l - c * u, g = d * u + c * l, w = Number(e.pitch_deg || 0) * Ws, h = Math.max(0.25, Math.abs(Math.cos(w)));
  return {
    ...e,
    yaw_deg: $t(Number(e.yaw_deg || 0) - Math.atan(f) / h * dr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(g) * dr, -90, 90)
  };
}
function F_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Tm({
    readState: e,
    reduce: qm,
    projectModel: Bm,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const je = Object.freeze({
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
}), T_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, D_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: T_(t[2])
})), L_ = {
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
}, Ef = Object.fromEntries(
  Object.entries(L_).map(([e, t]) => [e, {
    name: t.name,
    elements: D_(t.body)
  }])
), Lt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Ef, n) ? Ef[n] : null;
    });
    return (n, i) => r.value ? (Fe(), Re("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: gt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Fe(!0), Re(et, null, Pt(r.value.elements, (o, a) => (Fe(), Re(et, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (Fe(), Re("path", Pr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Fe(), Re("circle", Pr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Fe(), Re("rect", Pr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Fe(), Re("line", Pr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Fe(), Re("polyline", Pr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Fe(), Re("polygon", Pr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : pt("", !0)
      ], 64))), 128))
    ], 2)) : pt("", !0);
  }
}, qt = {
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
    return (n, i) => (Fe(), Dn(Y0(e.tag), Pr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: zp(() => [
        Ke(Lt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, R_ = ["aria-expanded", "disabled"], V_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, $_ = ["data-aspect", "disabled", "onClick"], z_ = { class: "pano-cutout-aspect-custom" }, j_ = ["disabled"], H_ = ["disabled"], G_ = ["data-custom-width", "data-custom-height", "disabled"], Qm = {
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
    ]), o = /* @__PURE__ */ Wt("1"), a = /* @__PURE__ */ Wt("1"), s = /* @__PURE__ */ Wt(null), l = ut(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), u = ut(() => {
      const h = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], p = String(r.model.aspectLabel || "");
      return h.length ? h.map((D) => {
        const X = typeof D == "string" ? D : String((D == null ? void 0 : D.value) || ""), z = typeof D == "string" ? D : String((D == null ? void 0 : D.label) || X);
        return {
          ...typeof D == "object" && D ? D : {},
          value: X,
          label: z,
          active: p ? X === p : (D == null ? void 0 : D.active) === !0
        };
      }) : i.map((D) => ({
        ...D,
        active: D.value === p
      }));
    }), d = ut(() => {
      var p;
      const h = String(r.model.aspectLabel || "").trim();
      return h || String(((p = u.value.find((D) => D.active === !0)) == null ? void 0 : p.label) || "Aspect");
    });
    gi(d, (h) => {
      const p = String(h || "").match(/^([0-9.]+):([0-9.]+)$/);
      p && (o.value = p[1], a.value = p[2]);
    }, { immediate: !0 });
    function c(h) {
      n("action", h);
    }
    function f(h) {
      var p;
      r.model.aspectOpen === !0 && ((p = s.value) != null && p.contains(h.target) || c({ type: "close-aspect" }));
    }
    ll(() => {
      document.addEventListener("pointerdown", f, !0);
    }), ha(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function g(h) {
      const [p, D] = String(h.value || "").split(":");
      c({
        type: "set-aspect",
        width: p,
        height: D,
        preserveOrientation: !0
      });
    }
    function w() {
      c({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (h, p) => (Fe(), Re("div", {
      ref_key: "rootElement",
      ref: s,
      class: gt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Fe(), Dn(qt, {
        key: 0,
        icon: e.model.aspectIcon || nt(je).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: p[0] || (p[0] = (D) => c({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Fe(), Re("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: p[1] || (p[1] = (D) => c({ type: "toggle-aspect" }))
      }, [
        Ke(Lt, {
          icon: e.model.aspectIcon || nt(je).aspect
        }, null, 8, ["icon"]),
        ke("span", null, it(d.value), 1),
        Ke(Lt, {
          icon: nt(je).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, R_)),
      Fr(ke("div", V_, [
        (Fe(!0), Re(et, null, Pt(u.value, (D) => (Fe(), Re("button", {
          key: D.value,
          class: gt(["pano-btn pano-frame-aspect-choice", { active: D.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": D.value,
          disabled: l.value,
          onClick: (X) => g(D)
        }, it(D.label), 11, $_))), 128)),
        ke("div", z_, [
          Fr(ke("input", {
            "onUpdate:modelValue": p[2] || (p[2] = (D) => o.value = D),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, j_), [
            [Qd, o.value]
          ]),
          p[4] || (p[4] = ke("span", { "aria-hidden": "true" }, ":", -1)),
          Fr(ke("input", {
            "onUpdate:modelValue": p[3] || (p[3] = (D) => a.value = D),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, H_), [
            [Qd, a.value]
          ]),
          ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: w
          }, "Apply", 8, G_)
        ])
      ], 512), [
        [_i, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, W_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, K_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Wt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Fe(), Re("div", {
      class: gt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Ke(qt, {
        icon: nt(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", W_, [
        i[3] || (i[3] = ke("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Re(et, null, Pt(nt(r), (o) => (Fe(), Re("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          ke("kbd", null, it(o[0]), 1),
          ke("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, B_ = {
  class: "pano-view-unavailable",
  role: "status"
}, _l = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Fe(), Re("div", B_, it(nt(Sm)), 1));
  }
}, U_ = { class: "pano-cutout-node-surface" }, Y_ = ["title", "disabled"], q_ = { class: "value" }, X_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, J_ = {
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
    return (n, i) => (Fe(), Re("div", U_, [
      ke("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Ct(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Ct(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ke(Lt, {
            icon: nt(je).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ke(qt, {
          icon: e.model.hasShot ? nt(je).delete : nt(je).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ke(Qm, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        ke("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Ct((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ke(Lt, {
            icon: nt(je).roll
          }, null, 8, ["icon"]),
          ke("span", q_, it(e.model.rollLabel || "0.0°"), 1)
        ], 40, Y_),
        Ke(qt, {
          icon: nt(je).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(K_)
      ], 32),
      e.model.hasShot === !1 ? (Fe(), Re("div", X_, " Choose a view · + Add Frame ")) : pt("", !0),
      e.model.viewUnavailable ? (Fe(), Dn(_l, { key: 1 })) : pt("", !0)
    ]));
  }
}, eg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Wt(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const c = o;
      return o = void 0, a = !1, { active: !0, intent: c };
    }
    function l(c) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = c, a = !0, f.value = "", f.click(), !0) : !1;
    }
    function u(c) {
      var h, p;
      const { active: f, intent: g } = s();
      if (!f) return;
      const w = ((p = (h = c.target) == null ? void 0 : h.files) == null ? void 0 : p[0]) || null;
      if (w) {
        n("file-selected", { intent: g, file: w });
        return;
      }
      n("file-cancelled", { intent: g });
    }
    function d() {
      const { active: c, intent: f } = s();
      c && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (c, f) => (Fe(), Re("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: u,
      onCancel: d
    }, null, 544));
  }
}, Z_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Q_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Wt(!1), r = Object.freeze([
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
    return (n, i) => (Fe(), Re("div", {
      class: gt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Ke(qt, {
        icon: nt(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", Z_, [
        i[3] || (i[3] = ke("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Re(et, null, Pt(nt(r), (o) => (Fe(), Re("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          ke("kbd", null, it(o[0]), 1),
          ke("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, eS = { class: "pano-stickers-node-surface" }, tS = ["disabled"], nS = ["aria-label", "data-tip"], rS = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, iS = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, oS = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Wt(null);
    function n(a) {
      var s;
      (s = t.onAction) == null || s.call(t, a);
    }
    function i() {
      var a, s;
      (s = (a = r.value) == null ? void 0 : a.open) == null || s.call(a, "add");
    }
    function o(a) {
      n({ type: "add-image-file", file: (a == null ? void 0 : a.file) || null });
    }
    return (a, s) => (Fe(), Re("div", eS, [
      ke("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Ct(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Ct(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ke(Lt, {
            icon: nt(je).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Ke(Lt, {
            icon: nt(je).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = ke("span", { class: "label" }, "Add Image", -1))
        ], 8, tS),
        Ke(qt, {
          icon: e.model.locked ? nt(je).lock_closed : nt(je).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ke(qt, {
          icon: nt(je).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(qt, {
          icon: nt(je).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(qt, {
          icon: e.model.isExternalSelection ? nt(je).back_initial : nt(je).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ke(Q_)
      ], 32),
      e.model.playable === !0 ? (Fe(), Re("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Ct(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Ct(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ke(Lt, {
          icon: e.model.playing ? nt(je).pause : nt(je).play
        }, null, 8, ["icon"])
      ], 40, nS)) : pt("", !0),
      e.model.hasStickers === !1 ? (Fe(), Re("div", rS, " Add Image to place a sticker ")) : pt("", !0),
      e.model.dropActive === !0 ? (Fe(), Re("div", iS, "Drop image to add")) : pt("", !0),
      Ke(eg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Fe(), Dn(_l, { key: 3 })) : pt("", !0)
    ]));
  }
}, aS = { class: "pano-studio-node-surface" }, sS = {
  class: "pano-studio-node-status",
  role: "status"
}, lS = { class: "pano-studio-node-shot" }, cS = { class: "pano-studio-node-size" }, uS = { class: "pano-studio-node-note" }, dS = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Re("div", aS, [
      ke("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Ct(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Ct(() => {
        }, ["stop"]))
      }, [
        ke("div", sS, [
          ke("span", lS, it(e.model.status.shot), 1),
          ke("span", cS, it(e.model.status.size), 1),
          ke("span", uS, it(e.model.status.note), 1)
        ]),
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Ke(Lt, {
            icon: nt(je).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = ke("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Fe(), Dn(_l, { key: 0 })) : pt("", !0)
    ]));
  }
}, fS = 2048, Bc = 4096, hs = (e) => Math.floor(e + 0.5), Ka = (e) => Math.max(2, 2 * hs(e / 2));
function Sl(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function pS(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? ml.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, hs(e.timeline.length)) : t.length ? n = Math.max(1, hs(Math.max(...t))) : r.length && (n = Math.max(1, hs(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function hS(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let a;
  r !== "auto" ? a = Number(r) : o ? a = fS : a = Math.floor(i * 360 / n);
  const s = Sl(e);
  if (!s || s.projection === "erp")
    return { width: Math.floor(a * n / 360), height: Math.floor(a / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((g) => ya(s, g).hFOV_deg)), u = a / Math.PI * Math.tan(l * Math.PI / 360), d = u / s.aspect, c = [Ka(u), Ka(d)];
  if (Math.max(...c) <= Bc) return { width: c[0], height: c[1], reducedFrom: null, defaulted: o };
  const f = Bc / Math.max(u, d);
  return { width: Ka(u * f), height: Ka(d * f), reducedFrom: c, defaulted: o };
}
function tg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function mS(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", run: o = null, erp: a = null }) {
  const s = Sl(e);
  return !a || !o || s && s.projection !== "erp" ? null : o.key === tg(t, r, String(n), i) ? a : null;
}
function gS(e) {
  const t = Sl(e);
  if (!t) return { x: 0, y: 0, z: 0, w: 1 };
  const { yaw_deg: r, pitch_deg: n, roll_deg: i } = ya(t, 0);
  return ti(Sn(r, n, i));
}
function yS(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: a = null, showingRun: s = !1 }) {
  const l = Sl(e);
  let u = "ERP";
  l && (u = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (a && a.key === tg(t, r, String(n), i))
    d = { width: a.width, height: a.height, reducedFrom: a.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: u, size: "auto", note: s ? "Showing the last run" : "" };
    d = hS(e, pS(e), r, n, o);
  }
  const c = s ? ["Showing the last run"] : [];
  return d.reducedFrom ? c.push(`Capped at ${Bc} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && c.push("auto: no bg_media"), { shot: u, size: `${d.width} × ${d.height}`, note: c.join(" · ") };
}
function bS() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, !!t.showingRun]);
    return i === e ? null : (e = i, yS(r(), { ...t, bgWidth: n }));
  };
}
const Of = 24;
function vS(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Yo(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function ng(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Uc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => Yo(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Yo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : ng(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function _S(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => Yo(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = n ? e.corners.findIndex((a) => Yo(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, l = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Yo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : ng(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function ud(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function rg(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Co(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ie(r.x, -n, t.width + n),
    y: Ie(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function SS(e) {
  const t = so(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * kt * 0.5),
    tanY: Math.tan(Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * kt * 0.5)
  };
}
function si(e, t, r) {
  return Fu(Is(
    Is(e.centerDir, Es(e.right, t)),
    Es(e.up, r)
  ));
}
function dd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = SS(e), n = Co(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    si(r, -r.tanX, r.tanY),
    si(r, r.tanX, r.tanY),
    si(r, r.tanX, -r.tanY),
    si(r, -r.tanX, -r.tanY)
  ].map((f) => Co(f, t)), o = Array.from({ length: 4 }, (f, g) => {
    const w = [];
    for (let h = 0; h <= 28; h += 1) {
      const p = h / 28;
      let D, X;
      g === 0 ? (D = -r.tanX + 2 * r.tanX * p, X = r.tanY) : g === 1 ? (D = r.tanX, X = r.tanY - 2 * r.tanY * p) : g === 2 ? (D = r.tanX - 2 * r.tanX * p, X = -r.tanY) : (D = -r.tanX, X = -r.tanY + 2 * r.tanY * p);
      const z = Co(si(r, D, X), t);
      z && w.push({ x: z.x, y: z.y });
    }
    return w;
  }), a = Co(si(r, 0, r.tanY), t), s = Co(
    si(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const u = s.x - a.x, d = s.y - a.y, c = Math.hypot(u, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + u / c * Of,
      y: a.y + d / c * Of
    },
    visible: !0
  };
}
function Ff(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: dd(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, u;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((u = a.item) == null ? void 0 : u.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Uc(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Uc(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function wS(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: $t(Math.atan2(n.x, n.z) * Xt),
    pitch_deg: Math.asin(Ie(n.y, -1, 1)) * Xt
  };
}
function xS(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function kS(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * Xt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Ba = null;
function fd() {
  return Ba || (Ba = new Promise((e) => {
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
  }), Ba);
}
function Vn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function MS(e, t = 1024) {
  const r = Math.max(1, Math.round(Vn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Vn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function PS(e, t, r) {
  const n = Vn(t), i = Vn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = Vn(o.u0), s = Vn(o.v0), l = Vn(o.u1), u = Vn(o.v1);
  if (l <= a || u <= s) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + Vn(d.du)) * n,
    centerY: ((s + u) * 0.5 + Vn(d.dv)) * i,
    width: (l - a) * n,
    height: (u - s) * i,
    rotationRad: Vn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Vn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function NS(e, t, r) {
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
function CS() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function r() {
    if (!(e.size <= 16))
      for (const [o, a] of e) {
        if (e.size <= 16) break;
        a.settled && (a.image.onload = null, a.image.onerror = null, e.delete(o));
      }
  }
  function n(o, a) {
    let s = e.get(o);
    if (s)
      return e.delete(o), e.set(o, s), !s.settled && typeof a == "function" && s.listeners.add(a), s.image;
    const l = new Image();
    s = { image: l, listeners: new Set(typeof a == "function" ? [a] : []), settled: !1 }, e.set(o, s);
    const u = () => {
      s.settled = !0;
      const d = [...s.listeners];
      s.listeners.clear(), d.forEach((c) => c()), r();
    };
    return l.onload = u, l.onerror = u, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const u = String(o.rasterDataUrl || "").trim(), d = PS(o, a, s);
    if (!u.startsWith("data:") || !d) return null;
    const c = NS(o, a, s), f = String((o == null ? void 0 : o.id) || "").trim() || c, g = t.get(f);
    if ((g == null ? void 0 : g.revision) === c) return { source: g.source, revision: c };
    const w = n(u, l), h = Number(w.naturalWidth || w.width || 0), p = Number(w.naturalHeight || w.height || 0);
    if (!w.complete || h < 1 || p < 1) return null;
    const D = en({ label: "raster-object" });
    D.width = Math.max(1, Math.round(a)), D.height = Math.max(1, Math.round(s));
    const X = D.getContext("2d");
    return X ? (d.wrapOffsets.forEach((z) => {
      X.save(), X.translate(d.centerX + z, d.centerY), X.rotate(d.rotationRad), X.scale(d.scale, d.scale), X.drawImage(
        w,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), X.restore();
    }), t.set(f, { revision: c, source: D }), { source: D, revision: c }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const a = new Set(Array.from(o, (s) => String(s || "").trim()).filter(Boolean));
      for (const s of t.keys())
        a.has(s) || t.delete(s);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function AS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function IS(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function ES({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(c) {
    if (!c) return;
    c.entry.listeners.delete(c);
    const f = n.get(c.owner);
    (f == null ? void 0 : f.get(c.key)) === c && f.delete(c.key);
  }
  function a(c, f, g, w) {
    if (!c || typeof w != "function" || g.settled) return;
    let h = n.get(c);
    h || (h = /* @__PURE__ */ new Map(), n.set(c, h));
    const p = h.get(f);
    if ((p == null ? void 0 : p.entry) === g) {
      p.callback = w;
      return;
    }
    o(p);
    const D = { owner: c, key: f, entry: g, callback: w };
    h.set(f, D), g.listeners.add(D);
  }
  function s(c, f) {
    c.settled || (c.settled = !0, c.image.onload = null, c.image.onerror = null, !f && r.get(c.key) === c && r.delete(c.key), [...c.listeners].forEach((g) => {
      o(g);
      try {
        g.callback(c.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(c) {
    if (!(r.size <= c))
      for (const [f, g] of r) {
        if (r.size <= c) break;
        !g.settled || g.listeners.size > 0 || (g.image.onload = null, g.image.onerror = null, r.delete(f));
      }
  }
  function u(c, f, g, w = null) {
    const h = String(f || ""), p = String(g || "");
    if (!h || !p) return null;
    let D = r.get(h);
    if (D)
      r.delete(h), r.set(h, D);
    else {
      l(i - 1);
      const z = e || globalThis.Image;
      if (typeof z != "function") return null;
      const Y = new z();
      D = { key: h, image: Y, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(h, D), Y.onload = () => s(D, !0), Y.onerror = () => s(D, !1), Y.src = p;
    }
    return D.settled || D.image.complete && Number(D.image.naturalWidth || D.image.width || 0) > 0 || a(c, h, D, w), D.image;
  }
  function d(c) {
    const f = n.get(c);
    f && ([...f.values()].forEach(o), n.delete(c), l(i));
  }
  return { get: u, disposeOwner: d };
}
const Fo = /* @__PURE__ */ new WeakMap();
function ig(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Fo.get(e);
  n || (n = [], Fo.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = Fo.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && Fo.delete(e);
  };
}
function Tr(e, ...t) {
  const r = Fo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const ms = Object.freeze({
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
}), og = "PanoramaSuite.Editor.ViewControls", OS = {
  id: og,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(ms).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function FS(e) {
  return Object.hasOwn(ms, e) ? ms[e] : ms.default;
}
function TS(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function DS(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Ks = "state_json";
function Or(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function LS(e) {
  var a, s;
  const t = Or(e, Ks);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = qh(r, {
    coverage: (a = Or(e, "coverage")) == null ? void 0 : a.value
  }), i = qm(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function pd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Or(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, u, d, c, f, g, w;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (u = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || u.call(l), (d = e.setDirtyCanvas) == null || d.call(e, !0, !0), (f = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || f.call(c, !0, !0), (w = (g = t == null ? void 0 : t.canvas) == null ? void 0 : g.setDirty) == null || w.call(g, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function RS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Tf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function VS(e) {
  var d, c, f, g, w, h;
  if (!e) return;
  const t = Or(e, "coverage"), r = Or(e, "bg_color"), n = Or(e, Ks), i = Or(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && RS(o) && (Tf(a) || a === ""))) return;
  let u = "360";
  if (Tf(a))
    try {
      u = String(In((d = JSON.parse(a)) == null ? void 0 : d.coverage));
    } catch {
      u = "360";
    }
  t.value = u, (c = t.callback) == null || c.call(t, u), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (g = n.callback) == null || g.call(n, a), i && (i.value = s, (w = i.callback) == null || w.call(i, s)), (h = e.setDirtyCanvas) == null || h.call(e, !0, !0);
}
function gs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function Yc(e, t, r) {
  var o, a;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((s) => String((s == null ? void 0 : s.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (a = i.parentEl) != null && a.style && (i.parentEl.style.display = "");
    const s = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(s) || Number(s[0] || 0) <= 0 || Number(s[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function $S(e, { tolerateOperationFailure: t = !1 } = {}) {
  const r = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (r instanceof Map)
    for (; r.size > 0; ) {
      const n = Array.from(r.entries());
      t ? await Promise.allSettled(n.map(([, i]) => i)) : await Promise.all(n.map(([, i]) => i)), n.forEach(([i, o]) => {
        r.get(i) === o && r.delete(i);
      });
    }
}
function To(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const n = e.__panoStickerOperationTail, o = (n && typeof n.then == "function" ? n.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = o.catch(() => {
  });
  e.__panoStickerOperationTail = a, e.__panoPendingStickerUploads.set(t, o);
  const s = () => {
    var l, u;
    ((u = (l = e.__panoPendingStickerUploads) == null ? void 0 : l.get) == null ? void 0 : u.call(l, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function ag(e, t = {}) {
  var n;
  await $S(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function zS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await ag(e), r ? r.apply(this, n) : this.value;
  };
}
function jS(e) {
  var t, r;
  try {
    (t = e.__panoDomRestore) == null || t.call(e);
  } catch {
  }
  try {
    (r = e.__panoLegacyRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null;
}
function HS(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function ic(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: u = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(c) {
    var w;
    const f = `editor_btn|${r}`;
    if (c.__panoPreviewAttached === !0 && c.__panoPreviewMountKey === f) return;
    jS(c), pd(c, t), gs(c, Ks);
    const g = Or(c, Ks);
    if (zS(c, g), g && !g.__panoPreviewPatchedCb) {
      g.__panoPreviewPatchedCb = !0;
      const h = g.callback;
      g.callback = (p) => {
        var X;
        const D = h ? h(p) : void 0;
        return (X = c.setDirtyCanvas) == null || X.call(c, !0, !1), D;
      };
    }
    if (r === "PanoramaStickers") {
      c.__panoSceneStateV2 = l, c.__panoStudio = u;
      const h = Or(c, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (w = h.callback) == null || w.call(h, "#00ff00")), Yc(c, n, () => i(c, "stickers")), s && (o(c, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(c, "stickers")
      }), c.__panoStickersNodeSurface && gs(c, n), (!Array.isArray(c.size) || c.size[0] < 10 || c.size[1] < 10) && (c.size = [360, 260])), c.__panoPreviewAttached = !0, c.__panoPreviewMountKey = f;
      return;
    }
    c.__panoSceneStateV2 = !1, Yc(c, n, () => i(c, "cutout")), a(c, {
      buttonText: n,
      onOpen: () => i(c, "cutout")
    }), c.__panoCutoutNodeSurface && gs(c, n), (!Array.isArray(c.size) || c.size[0] < 10 || c.size[1] < 10) && (c.size = [360, 260]), c.__panoPreviewAttached = !0, c.__panoPreviewMountKey = f;
  }
  for (const c of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[c];
    e.prototype[c] = function() {
      const g = f ? f.apply(this, arguments) : void 0;
      c === "onNodeCreated" && r === "PanoramaCutout" && LS(this), c === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && VS(this);
      const w = !!this.__panoPreviewAttached;
      return (c === "onNodeCreated" || this.widgets) && d(this), c === "onAdded" && w && Tr(this, "attach"), g;
    };
  }
}
function GS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return HS(this), n;
  };
}
function WS(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const o = () => {
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), s = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = s, !a && s < 40) {
      i(o);
      return;
    }
    pd(e, t);
    const l = (u = e) => r(u, "stickers", { readOnly: !0, hideSidebar: !1 });
    Yc(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && gs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function KS({
  app: e,
  openEditor: t,
  attachStickers: r,
  attachCutout: n,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: a,
  enableStickersPreview: s = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [OS, wb],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [rf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [rf.id] }],
    beforeRegisterNodeDef(l, u) {
      const d = String((u == null ? void 0 : u.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && ic(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), d === "PanoramaStudio" && ic(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && ic(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), Os(d) && GS(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const u = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      pd(l, e), Os(u) && WS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const BS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Xn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : BS.test(String(e.name || "")) : !1;
}
function hd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Xn(r)) : !1;
}
function US(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var u, d, c;
    (u = l == null ? void 0 : l.preventDefault) == null || u.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (c = l == null ? void 0 : l.stopImmediatePropagation) == null || c.call(l);
  }, o = (l) => {
    if (hd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (l) => {
    var u;
    l != null && l.relatedTarget && ((u = e.contains) != null && u.call(e, l.relatedTarget)) || r(!1);
  }, s = (l) => {
    var d;
    const u = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((c) => Xn(c));
    if (!u) {
      r(!1);
      return;
    }
    i(l), r(!1), n(u);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function Do(e, t = {}) {
  var a, s, l, u;
  if (!Xn(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((u = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : u.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((c, f) => {
      const g = new r();
      g.onload = () => c(g), g.onerror = () => f(new Error("image load failed")), g.src = o;
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
async function di(e, { fetchApi: t } = {}) {
  if (!Xn(e)) throw new TypeError("A supported image file is required.");
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
const Df = /* @__PURE__ */ new WeakSet(), Lf = /* @__PURE__ */ new WeakSet();
let Rf = 0;
function qc(e) {
  if (!e || typeof e != "object" || Lf.has(e)) return e;
  const t = String(e.type || "preview");
  return Rf += 1, e.type = `${t}:pano-${Rf}`, Lf.add(e), e;
}
function Bs(e) {
  if (!e || typeof e != "object" || Df.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Df.add(e), e;
}
function sg(e, t) {
  var n, i;
  if (!t || ((i = (n = Bs(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function YS({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const u = i;
    i = null, o || r == null || r(u);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Vt } = Qa;
r_((e) => Zr(e.id));
i_(fn);
const md = ES(), { linkedVideoFile: lg } = Om({ app: Vt, api: fn });
function Xc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Qa == null ? void 0 : Qa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const qS = "pano_suite.ui_settings.v1", XS = 120, JS = 2048;
function Vf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(qS)) || "").trim();
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
function ZS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ao(e) {
  var r, n, i, o, a;
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
    styleTransform: String(((a = e.style) == null ? void 0 : a.transform) || "")
  };
}
function QS() {
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
function Jc(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (n, i) => {
    const o = Number(n), a = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(a) ? null : [o, a];
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
function cg(e) {
  const t = Jc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function ew(e, t, r) {
  cg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Zc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function gd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function ug(e) {
  return Os(gd(e));
}
function $f(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function dg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Zc(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && ys(e), Yw(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = Zc(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ys(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      ys(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function tw(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ys(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  Qc.unregister(e), tw(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const r = e.__panoDomPreview;
  try {
    (n = e.__panoDomRestore) == null || n.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (i = e.__panoLegacyRestore) == null || i.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, r) {
    try {
      (o = r.state) != null && o.raf && cancelAnimationFrame(r.state.raf);
    } catch {
    }
    try {
      (s = (a = r.root) == null ? void 0 : a.remove) == null || s.call(a);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((u) => {
      if (u === (r == null ? void 0 : r.widget)) return !0;
      const d = String((u == null ? void 0 : u.name) || ""), c = String((u == null ? void 0 : u.type) || ""), f = Xc();
      return d === f || c === f || d === "pano_preview" || c === "pano_preview" ? !0 : d === "preview" && c === "pano_preview";
    }).forEach((u) => Sw(e, u));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function nw(e, t = "#00ff00") {
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
function rw(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = fr(e, "state_json")) == null ? void 0 : r.value) || "");
}
function ln(e) {
  var s, l;
  const t = rw(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = fr(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = fr(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? Xh(t, { backgroundColor: n, coverage: i, active: Qh(e) }) : nw(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function fr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function iw(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function fg(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (n = s.outputNode);
    } catch {
    }
  return !n && r != null && (n = iw(e == null ? void 0 : e.graph, r)), n;
}
function ow(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function pg(e, t = []) {
  const r = ow(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    er.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function zf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Us(e, t) {
  const r = zf(e), n = zf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function aw(e, t) {
  var r;
  return fg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function sw(e, t = er) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = pg(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return u_(e, a, aw);
}
const Qc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = fn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, u, d, c, f;
        if (!o) return;
        const a = Us(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...sw(o)].some((g) => Us(n, g)) || Em(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (mg(o), (u = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || u.call(l), (d = o.setDirtyCanvas) == null || d.call(o, !0, !0), (f = (c = o.graph) == null ? void 0 : c.setDirtyCanvas) == null || f.call(c, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, fn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = fn) != null && e.removeEventListener) || (fn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Ys(e) {
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
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function lw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function cw(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function uw(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function dw(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (lw(t)) return [t];
  const { filename: r, subfolder: n } = cw(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Ys({
    filename: r,
    subfolder: n,
    type: o
  }));
  return uw([...i, t]);
}
function fw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Ys({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Zr(e) {
  const t = Vt == null ? void 0 : Vt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Us(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Us(a, i)) return t[a];
  }
  return null;
}
function Dr(e, t, r = null) {
  const n = r || Zr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function Nn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Nn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Ys({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = Nn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ys(e);
}
function la(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function bs(e) {
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
function yd(e, t) {
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
function pw(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function hw(e, t) {
  try {
    e.__panoOwnOutputRev = AS(e.__panoOwnOutputRev);
    const r = pw(t);
    let n = "";
    for (const i of r)
      if (n = Nn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), yd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Xi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function mw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Yt(e, "background"))
    return Xi(e), null;
  const i = Zr(n), o = td(i, t, Nn);
  if (!o)
    return Xi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = yd(o, a), l = `${t.join("|")}:${s}`, u = e.__panoOwnOutputVideoCache;
  if (u && u.key === l) return u.player.failed() ? null : u.player.video;
  Xi(e);
  const d = d_({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return d ? (e.__panoOwnOutputVideoCache = { key: l, player: d }, d.video) : null;
}
function gw(e, t = []) {
  var u, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = pg(e, t).map((c) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(c))).filter((c) => c >= 0), o = r.map((c, f) => ({ input: c, idx: f })).filter(({ input: c }) => String((c == null ? void 0 : c.type) || "").toUpperCase() === "IMAGE").map(({ idx: c }) => c), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const c of a) {
    const f = r[c], g = e.graph ? e.getInputLink(c) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const w = g.origin_id, h = fg(e, c, w);
    if (!h) continue;
    const p = Number(g.origin_slot ?? 0), D = Zr((h == null ? void 0 : h.id) ?? w), X = Array.isArray(D == null ? void 0 : D.images) ? D.images : [];
    if (X.length) {
      const re = [];
      p >= 0 && p < X.length && re.push(X[p]), re.push(...X);
      for (const L of re.filter((ne) => !ds(ne))) {
        const ne = Nn(L);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: `${ne}&pano_src=${Gc(D)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let z = [];
    try {
      z = typeof (Vt == null ? void 0 : Vt.getNodeImageUrls) == "function" ? Vt.getNodeImageUrls(h) || [] : [];
    } catch {
      z = [];
    }
    if (Array.isArray(z) && z.length) {
      const re = [];
      p >= 0 && p < z.length && re.push(z[p]), re.push(...z);
      for (const L of re) {
        const ne = Nn(L);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: ne, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const Y = Array.isArray(h == null ? void 0 : h.imgs) ? h.imgs : [];
    if (Y.length) {
      const re = [];
      p >= 0 && p < Y.length && re.push(Y[p]), re.push(...Y);
      for (const L of re) {
        const ne = Nn(L);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: ne, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const C = (u = h == null ? void 0 : h.widgets) == null ? void 0 : u.find((re) => String((re == null ? void 0 : re.name) || "").toLowerCase() === "image");
    if (C) {
      let re = Nn(C.value);
      if (re && !re.includes("/") && !re.includes(":") && (h.comfyClass === "LoadImage" || h.type === "LoadImage") && (re = fn.apiURL(`/view?filename=${encodeURIComponent(re)}&type=input&subfolder=`)), re)
        return String((f == null ? void 0 : f.name) || ""), { src: re, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = Yt(e, "background") ? Zr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((d = s == null ? void 0 : s.ui) == null ? void 0 : d.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const c of l) {
      const f = Nn(c);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function yw(e, t = [], r = {}) {
  const n = gw(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = dw(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const u = new Image(), d = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  d.pendingSrcRaw = i, d.pendingResolvedSrc = "", d.pendingImg = u, e.__panoLinkedInputImageCache.set(s, d);
  let c = -1;
  const f = () => {
    var w, h, p, D;
    if (c += 1, c >= o.length) {
      if (((h = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.get) == null ? void 0 : h.call(w, s)) === d && d.pendingImg === u && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
        try {
          (D = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || D.call(p, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const g = o[c];
    d.pendingResolvedSrc = g, u.src = g;
  };
  return u.onload = () => {
    var g, w, h;
    ((w = (g = e.__panoLinkedInputImageCache) == null ? void 0 : g.get) == null ? void 0 : w.call(g, s)) === d && d.pendingImg === u && (d.srcRaw = i, d.resolvedSrc = String(d.pendingResolvedSrc || u.src || ""), d.img = u, d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null), String(d.pendingResolvedSrc || d.resolvedSrc || u.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (h = e.setDirtyCanvas) == null || h.call(e, !0, !0);
  }, u.onerror = (g) => {
    var w, h, p, D;
    if (c + 1 < o.length) {
      f();
      return;
    }
    if (((h = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.get) == null ? void 0 : h.call(w, s)) === d && d.pendingImg === u && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
      try {
        (D = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || D.call(p, s);
      } catch {
      }
    String(d.pendingResolvedSrc || d.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((g == null ? void 0 : g.type) || "error");
  }, f(), a && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : u;
}
function hg(e, t = [], r = null, n = {}) {
  const i = yw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function mg(e) {
  var t, r;
  if (e) {
    md.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Xi(e), e.__panoWrappedErpCache = null;
  }
}
function bw(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Xi(e), e.__panoWrappedErpCache = null;
  }
}
function gg(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ua(e, t, r = "") {
  const n = gg(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < XS ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function jf(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function vw(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), u = Math.max(Math.round(34 * r), s + Math.round(14 * r)), d = n + (o - l) * 0.5, c = i + (a - u) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, c, l, u, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, c + u * 0.5 + 0.5), e.restore();
}
function oc(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function _w(e) {
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
function Sw(e, t) {
  return sg(e, t);
}
function ca(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = fw(r);
  if (!o && (n != null && n.external)) {
    if (!Yt(e, "external-sticker")) return null;
    const g = Zr(e == null ? void 0 : e.id), w = ((f = g == null ? void 0 : g.ui) == null ? void 0 : f.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const h of Array.isArray(w) ? w : [w])
      if (o = Nn(h), o) break;
  }
  if (!o) return null;
  const a = Dr(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, u = n != null && n.external ? yd(o, l) : o, d = IS(o, s, l);
  return md.get(e, d, u, (g, w) => {
    var h, p;
    w && (n != null && n.external && e.__panoOutputFromRun && Tr(e, "image-loaded"), (p = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || p.call(h));
  }) || null;
}
function ww(e, t) {
  var c, f, g, w;
  const r = Nw(e, t), n = Cw(t), i = Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.groups) ? t.painting.groups : [], o = new Map(
    i.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = r ? n.map((h) => {
    const p = r.getGroupDisplayCanvas(h);
    return p ? {
      id: `paint_group:${h}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${h}`,
      zIndex: Number(o.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (w = (g = e.__panoRasterObjectSurfaceCache) == null ? void 0 : g.retain) == null || w.call(g, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = CS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var h, p;
    return (p = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null ? void 0 : p.call(h);
  });
  const l = MS(t == null ? void 0 : t.output_preset), u = s.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(u);
  const d = s.map((h) => {
    const p = e.__panoRasterObjectSurfaceCache.get(
      h,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return p ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: p.source,
      revision: p.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...d];
}
function xw(e, t, r, n) {
  var o, a, s, l, u, d;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (n && Array.isArray(n.graph_mouse) && n.graph_mouse.length >= 2)
    return {
      x: Number(n.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(n.graph_mouse[1]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
    };
  if (n && typeof n.convertEventToCanvasOffset == "function" && t)
    try {
      const c = n.convertEventToCanvasOffset(t);
      if (Array.isArray(c) && c.length >= 2)
        return {
          x: Number(c[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(c[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = Mw(e, t, n);
  return i || null;
}
function kw(e, t) {
  var c, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (c = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : c.call(i), a = (t == null ? void 0 : t.ds) || ((f = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], u = (r - Number(o.left || 0)) / s - Number(l[0] || 0), d = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(u) || !Number.isFinite(d) ? null : { x: u, y: d };
}
function Mw(e, t, r) {
  var i, o;
  const n = kw(t, r || (Vt == null ? void 0 : Vt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Pw(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Nw(e, t) {
  var u, d, c, f, g, w, h, p, D, X, z, Y;
  const r = (d = (u = t == null ? void 0 : t.painting) == null ? void 0 : u.paint) == null ? void 0 : d.strokes, n = (f = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = Pw(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = fl(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.groups) || null,
    rasterObjects: ((w = t == null ? void 0 : t.painting) == null ? void 0 : w.raster_objects) || null
  };
  return (((h = e.__panoPreviewPaintRevision) == null ? void 0 : h.paint) !== l.paint || ((p = e.__panoPreviewPaintRevision) == null ? void 0 : p.mask) !== l.mask || ((D = e.__panoPreviewPaintRevision) == null ? void 0 : D.groups) !== l.groups || ((X = e.__panoPreviewPaintRevision) == null ? void 0 : X.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((Y = t == null ? void 0 : t.painting) == null ? void 0 : Y.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Cw(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Aw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Iw(e, t, r) {
  const n = dd(t, r);
  n.visible && ud(e, n.boundaryEdges, { selected: !1 });
}
function Ew(e, t, r) {
  const n = dd(t, r);
  n.visible && (e.save(), ud(e, n.boundaryEdges, { selected: !0 }), rg(e, n, { accent: vS(t) }), e.restore());
}
function eu(e, t, r) {
  return ym(js(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function qs(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ro;
}
function Ow(e) {
  return [Yt(e, "background") ? td(Zr(e.id), ["pano_input_videos"], Nn) : "", lg(e, er)];
}
function Fw(e) {
  var o;
  if (!Yt(e, "external-sticker")) return null;
  const t = Zr(e.id), r = Dr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(Nn), meta: r };
  const i = td(t, ["pano_sticker_input_videos"], Nn);
  return i ? { src: i, meta: r } : null;
}
function Tw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function yg(e, t) {
  var r;
  return ((r = e.__panoSurfaceScene) == null ? void 0 : r.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: $r({ ...t, painting: null }) }), e.__panoSurfaceScene.sceneState;
}
function Dw(e, t) {
  const r = vl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Yt(e, "background")) {
    const o = Dr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (Mm(e, er)) {
    const { playback: o, video: a } = t;
    return o.source && o.source === lg(e, er) && a.videoWidth > 0 ? a.videoWidth : void 0;
  }
  const i = hg(e, er, null, { preserveReadyWhilePending: !1 });
  return la(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Lw(e, t) {
  var i, o, a;
  const r = String(((i = fr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((s) => Yt(e, s));
  return {
    stateText: String(((o = fr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: ln(e).coverage,
    bgColor: String(((a = fr(e, "bg_color")) == null ? void 0 : a.value) ?? ""),
    bgWidth: r === "auto" ? Dw(e, t) : null,
    run: n && Dr(e, "pano_output_size") || null,
    erp: n && Dr(e, "pano_output_erp") || null
  };
}
function bg(e) {
  const t = e == null ? void 0 : e.__panoStudioRunImage;
  t && (t.image.removeAttribute("src"), e.__panoStudioRunImage = null);
}
function Rw(e, t, r) {
  const n = Nn(Dr(e, "pano_output_erp"));
  let i = e.__panoStudioRunImage;
  if (i && i.src !== n && (bg(e), i = null), !t || !n) return null;
  if (!i) {
    const o = new Image(), a = { src: n, image: o, ready: !1 };
    o.src = n, o.decode().then(() => {
      var s, l;
      e.__panoStudioRunImage === a && (a.ready = !0, (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s));
    }, () => {
    }), e.__panoStudioRunImage = i = a;
  }
  return i.ready ? {
    media: i.image,
    revision: bs(i.image),
    coverage: Number(t.coverage) === 180 ? 180 : 360,
    quaternion: gS(r())
  } : null;
}
function Vw(e, t, r) {
  const n = yg(e, t), i = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = ca(e, a.id, $s(a.source), { external: a.source.kind === "port" });
      const u = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && u) {
        const d = u.playback.stickerPicture(u.stickerStill, s), c = rd(u.playback.stickerMedia, s);
        return d ? { media: d, revision: bs(d), source: c } : null;
      }
    } else {
      const u = a.type === "external_image" || a.source_kind === "external_image", d = String(a.asset_id || "") || (u ? String(a.id || "") : "");
      s = ca(e, d, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: u });
    }
    return la(s) ? { media: s, revision: bs(s) } : null;
  }, o = (t.painting_visible === !1 ? [] : ww(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: la(r) ? { media: r, revision: bs(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: vm(n, qs(e), t.stickers, { media: i, paintLayers: o })
  };
}
function $w(e, t, r, n = null) {
  var re, L, ne, U, de, V, ae;
  const i = String(e.__panoPreviewMode || "stickers");
  gg(e, i);
  const o = ln(e);
  i === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (ne = (L = (re = e.__panoCutoutNodeSurface) == null ? void 0 : re.session) == null ? void 0 : L.refresh) == null || ne.call(L)) : i === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (V = (de = (U = e.__panoStickersNodeSurface) == null ? void 0 : U.session) == null ? void 0 : de.refresh) == null || V.call(de));
  const a = t.parentElement, s = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), u = t.getContext("2d");
  if (!u) return;
  (t.width !== s || t.height !== l) && (t.width = s, t.height = l);
  const d = { x: 0, y: 0, w: s, h: l };
  u.setTransform(1, 0, 0, 1, 0, 0), u.fillStyle = "#070707", u.fillRect(0, 0, s, l);
  const c = (n == null ? void 0 : n.media) || (e.__panoSurfacePlayback ? Tw(e.__panoSurfacePlayback) : mw(e, ["pano_input_videos"], () => {
    var H, J;
    return (J = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : J.call(H);
  })) || hg(
    e,
    er,
    () => {
      var H, J;
      return (J = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : J.call(H);
    },
    { preserveReadyWhilePending: !1 }
  ), f = la(c);
  let g = null;
  const w = () => n ? { background: n, layers: [] } : Vw(e, o, c), h = (H, J) => {
    g || (g = w());
    const $ = r.render({ width: H.w, height: H.h, camera: J, ...g });
    return $ && u.drawImage($.canvas, $.x, $.y, $.width, $.height, H.x, H.y, H.w, H.h), !!$;
  };
  if (i === "cutout") {
    const H = _w(o), J = Aw(c), $ = H ? Ie(ei(H).aspect, 0.1, 10) : f ? Ie(Number(J.width / J.height), 0.05, 20) : 1, Q = cd(d, $);
    e.__panoCutoutNodeFrame = Q;
    let K = "none";
    const E = String((c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "");
    if (H)
      if (c && !f)
        K = "loading";
      else if (f) {
        const G = E_({ width: s, height: l }, Q, H);
        [
          !G.fallback || h(G.fallback.rect, Uo(G.fallback.shot)),
          h(G.rect, Uo(G.shot)),
          !G.fallback || h(Q, Uo(H))
        ].every(Boolean) || (K = "loading");
      } else
        K = "empty";
    else {
      const G = e.__panoLastCutoutShot;
      G ? (e.__panoPreviewView = Ym(G, { width: s, height: l }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), f ? h(d, js(e.__panoPreviewView, s, l)) || (K = "loading") : c ? K = "loading" : K = "empty";
    }
    f || r.release(), r.failed && K === "loading" && (K = "none"), H && (e.__panoLastCutoutShot = { ...H }, u.save(), u.fillStyle = "rgba(0,0,0,0.58)", u.beginPath(), u.rect(0, 0, s, l), u.rect(Q.x, Q.y, Q.w, Q.h), u.fill("evenodd"), u.restore(), u.save(), u.strokeStyle = "rgba(255,221,87,0.72)", u.lineWidth = 2, u.strokeRect(Q.x + 0.5, Q.y + 0.5, Math.max(0, Q.w - 1), Math.max(0, Q.h - 1)), u.restore()), K === "loading" ? (oc(e, !1), Ua(e, !0, E)) : K === "empty" ? (oc(e, !0), Ua(e, !1, "")) : (oc(e, !1), Ua(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let p = !1;
  (!c || f) && (g = w(), !g.background && !g.layers.length ? (r.release(), p = !0) : p = h(d, js(e.__panoPreviewView, s, l)));
  const D = !p && !r.failed;
  Ua(e, D, D ? String((c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "") : ""), D && vw(u, d, jf(t, d));
  const X = eu(e, s, l);
  !c && p && zw(u, X, jf(t, d));
  const z = String(((ae = o == null ? void 0 : o.active) == null ? void 0 : ae.selected_sticker_id) || ""), Y = Wc(o, qs(e)), C = p && e.__panoStudio !== !0 ? Y.find((H) => String((H == null ? void 0 : H.id) || "") === z && (H == null ? void 0 : H.visible) !== !1) : null;
  p && !n && Y.filter((H) => H !== C && (H == null ? void 0 : H.visible) !== !1 && (H.external || H.source_kind === "external_image")).filter((H) => !la(ca(e, H.id, null, { external: !0 }))).forEach((H) => Iw(u, H, X)), C && Ew(u, C, X);
}
function Hf(e, t, r, n, i = 1) {
  let o = !1;
  e.strokeStyle = n, e.lineWidth = i, e.beginPath();
  for (const a of t) {
    const s = r.project(a);
    if (s.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), o = !0);
  }
  e.stroke();
}
function zw(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let u = -180; u <= 180; u += 4) l.push(Pn(u, s));
    Hf(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let u = -89; u <= 89; u += 4) l.push(Pn(s, u));
    Hf(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Pn(0, 0) },
    { name: "Right", dir: Pn(90, 0) },
    { name: "Back", dir: Pn(180, 0) },
    { name: "Left", dir: Pn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function tu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function jw(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Rn(e, t) {
  return jw(e, t) ? !1 : (tu(e), !0);
}
function Gf() {
  var r;
  const e = (r = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Hw(e) {
  var r;
  if (!e) return;
  const t = (r = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Gw(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !cg(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function Ww(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Wf(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), i && Kw(e, 180, t);
    }
  };
}
function Kw(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Lo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Bw = /* @__PURE__ */ new WeakMap();
function vg(e, t) {
  return Em(Bw, e, t) ? !1 : (hw(e, t), mg(e), Lo(e), !0);
}
async function Uw(e) {
  var r, n;
  const t = await l_(e, Vt, fn);
  t && (vg(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Yw(e, t = {}) {
  var Ve;
  const r = t.__allowStandalone === !0, n = ug(e);
  if (n && !r) {
    gd(e);
    return;
  }
  n && Gw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = i && e.__panoStudio === !0, a = i && !o, s = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: $f(e)
  }, u = "dom", d = l.signature || $f(e);
  if (Number(e.__panoRebindGeneration || 0), Zc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Jc(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (Ve = e.__panoDomPreview) != null && Ve.widget || (e.__panoLegacyPreviewHooked && ys(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const c = t.noPreview === !0, f = c ? 0 : 56, g = c ? 0 : N_, w = document.createElement("div");
  if (QS(), w.className = "pano-node-preview-dom", w.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), c && w.classList.add("pano-node-preview--no-preview"), w.setAttribute("data-capture-wheel", "true"), w.tabIndex = 0, w.style.cssText = [
    "width:100%",
    c ? "height:auto" : "height:100%",
    g > 0 ? `min-height:${g}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), c) {
    const Z = Bs(qc(
      e.addDOMWidget(Xc(), "preview", w, Wf(e, null))
    ));
    Lo(e), e.__panoDomPreview = { widget: Z, root: w, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
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
  const p = en({ label: "node.surface" });
  p.style.cssText = [
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
  const D = document.createElement("div");
  D.style.cssText = [
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
  ].join(";"), D.textContent = "Connect ERP image", h.appendChild(p), h.appendChild(D), w.appendChild(h);
  const X = _h(w), z = document.createElement("div");
  z && (z.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", z.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", w.appendChild(z)), ew(e, 120, 120), Lo(e);
  let Y = null;
  try {
    Ww(e, f, () => {
      var Z, Oe;
      return (Oe = (Z = e.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : Oe.call(Z);
    }), Y = Bs(qc(e.addDOMWidget(
      Xc(),
      "preview",
      w,
      Wf(
        e,
        () => {
          var Z, Oe;
          return (Oe = (Z = e.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : Oe.call(Z);
        },
        f,
        g,
        !1
      )
    )));
  } catch {
    return;
  }
  const C = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, re = bS(), L = () => {
    C.destroyed || (C.needsDraw = !0, !C.inTick && !C.raf && (C.raf = requestAnimationFrame(ce)));
  }, ne = wm(L), U = /* @__PURE__ */ ao(i ? {
    ...Gm(ln(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...o ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Bm(ln(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((Z) => ({ value: Z, label: Z }))
  });
  let de = null;
  if (i && e.__panoSceneStateV2) {
    const [Z, Oe] = [0, 1].map(() => {
      const He = ga(document, "node.playback");
      return He.playsInline = !0, He.preload = "auto", He.crossOrigin = "anonymous", He.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(He), He;
    }), $e = en({ label: "node.still" });
    $e.__panoFrameIdx = 0;
    const Ae = en({ label: "node.port-still" });
    Ae.__panoFrameIdx = 0;
    const ze = M_({
      video: Z,
      stickerVideo: Oe,
      createImage: (He, Ue) => {
        const tt = new Image();
        return tt.onload = Ue, tt.onerror = Ue, tt.src = He, tt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (He) => requestAnimationFrame(He),
        cancelFrame: (He) => cancelAnimationFrame(He)
      },
      readState: () => ln(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: L,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(Z.videoWidth > 0 && Z.videoHeight > 0)) return;
        const He = Math.min(1, JS / Z.videoWidth);
        $e.width = Math.round(Z.videoWidth * He), $e.height = Math.round(Z.videoHeight * He), (Ue = $e.getContext("2d")) == null || Ue.drawImage(Z, 0, 0, $e.width, $e.height), $e.__panoFrameIdx += 1, L();
      },
      onStickerCapture: () => {
        var He;
        Oe.videoWidth > 0 && Oe.videoHeight > 0 && (Ae.width = Oe.videoWidth, Ae.height = Oe.videoHeight, (He = Ae.getContext("2d")) == null || He.drawImage(Oe, 0, 0), Ae.__panoFrameIdx += 1, L());
      },
      onChange: () => {
        U.playing = ze.playing, L();
      }
    });
    de = { playback: ze, video: Z, still: $e, stickerVideo: Oe, stickerStill: Ae, stickerSource: "" }, e.__panoSurfacePlayback = de;
  }
  const V = () => {
    var tt;
    const { playback: Z, still: Oe, stickerStill: $e } = de, Ae = ps(h, !!((tt = e.flags) != null && tt.collapsed)), ze = Z.source, He = Ae ? Fw(e) : null, Ue = Z.follow({
      shown: Ae,
      sources: Ae ? Ow(e) : [],
      state: ln(e),
      sticker: He
    });
    ((He == null ? void 0 : He.src) || "") !== de.stickerSource && (de.stickerSource = (He == null ? void 0 : He.src) || "", ea($e)), Z.source !== ze && (ea(Oe), Oe.__panoFrameIdx = 0), U.playable = Ue, U.playing = Z.playing;
  }, ae = () => {
    var Oe, $e;
    const Z = ((Oe = e.__panoOwnOutputVideoCache) == null ? void 0 : Oe.player) ?? null;
    Z && !ps(h, !!(($e = e.flags) != null && $e.collapsed)) && Z.pause(), i && (U.playable = !!Z && !Z.failed(), U.playing = !!(Z != null && Z.playing));
  }, H = () => {
    var Z;
    de == null || de.playback.pause(), (Z = e.__panoOwnOutputVideoCache) == null || Z.player.pause();
  };
  let J = null;
  const $ = (i ? x_ : F_)({
    readState: () => ln(e),
    publishLiveState: (Z) => {
      Z ? (J = Z, e.__panoLiveStateOverride = Z) : (e.__panoLiveStateOverride === J && (e.__panoLiveStateOverride = null), J = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, L();
    },
    commitState: (Z) => {
      var Ae, ze, He, Ue;
      const Oe = fr(e, "state_json");
      if (!Oe) return;
      em(e, Z.active);
      const $e = tm(e, Z);
      nm(e, $e, String(Oe.value ?? "")) || (Oe.value = $e, (Ae = Oe.callback) == null || Ae.call(Oe, $e), e.__panoStateCache = null, (ze = e.setDirtyCanvas) == null || ze.call(e, !0, !0), (Ue = (He = e.graph) == null ? void 0 : He.setDirtyCanvas) == null || Ue.call(He, !0, !0));
    },
    onChange: (Z) => Object.assign(U, Z)
  }), K = i ? ig(e, (Z = "sync", Oe = null) => {
    var Ye;
    if (!i || !e.graph || !$ || $.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const zt = Yt(e, "external-sticker"), gn = ln(e).stickers.find((br) => br.source.kind === "port");
      return $.apply({
        type: "sync-port",
        value: jm(e, {
          pose: zt ? Dr(e, "pano_sticker_input_pose", Oe) : null,
          image: gn ? ca(e, gn.id, null, { external: !0 }) : null
        })
      });
    }
    const $e = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((zt) => String((zt == null ? void 0 : zt.name) || "") === "sticker_image") : -1, Ae = $e >= 0 ? ((Ye = e.getInputLink($e)) == null ? void 0 : Ye.id) ?? null : null;
    if (Ae == null)
      return $.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Yt(e, "external-sticker")) return !1;
    const ze = Dr(e, "pano_sticker_input_pose", Oe), He = Array.isArray(ze) ? ze[0] : ze, Ue = String(Dr(e, "pano_sticker_input_state_hash", Oe) ?? ""), tt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, ht = ln(e), Nt = (Array.isArray(ht == null ? void 0 : ht.stickers) ? ht.stickers : []).find((zt) => String((zt == null ? void 0 : zt.id) || "") === "sticker_image_1"), vt = ca(e, "sticker_image_1", null, { external: !0 }), rn = He && typeof He == "object" ? He : Nt || { yaw_deg: tt.yaw, pitch_deg: tt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return $.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ae,
        stateHash: Ue,
        pose: rn,
        imageWidth: Number((vt == null ? void 0 : vt.naturalWidth) || (vt == null ? void 0 : vt.width) || 0),
        imageHeight: Number((vt == null ? void 0 : vt.naturalHeight) || (vt == null ? void 0 : vt.height) || 0)
      }
    });
  }) : () => {
  };
  let E = 0;
  const G = async (Z) => {
    if (!i || !$ || !Xn(Z)) return !1;
    H();
    const Oe = `asset_${Math.random().toString(16).slice(2, 10)}`, $e = `st_${Math.random().toString(16).slice(2, 10)}`, Ae = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    E += 1, U.importing = !0;
    const ze = To(e, `add:${Oe}`, async () => {
      const He = await Do(Z), Ue = await di(Z, {
        fetchApi: (tt, ht) => fn.fetchApi(tt, ht)
      });
      return N(), $.apply({
        type: "add-sticker",
        value: {
          stickerId: $e,
          assetId: Oe,
          asset: Ue,
          imageWidth: He.width,
          imageHeight: He.height,
          yaw_deg: Number(Ae.yaw || 0),
          pitch_deg: Number(Ae.pitch || 0)
        }
      });
    });
    try {
      return await ze;
    } catch {
      return !1;
    } finally {
      E = Math.max(0, E - 1), U.importing = E > 0, L();
    }
  };
  let O = null, q = null, me = null, _e = !1;
  const te = () => {
    var Z;
    return me && (clearTimeout(me), me = null), _e ? (_e = !1, ((Z = $ == null ? void 0 : $.commitGesture) == null ? void 0 : Z.call($)) ?? !1) : !1;
  }, N = () => {
    var Ae, ze, He;
    const Z = te(), Oe = (O == null ? void 0 : O.pointerId) ?? (q == null ? void 0 : q.pointerId);
    if (O = null, q = null, Oe != null) {
      try {
        (Ae = p.hasPointerCapture) != null && Ae.call(p, Oe) && ((ze = p.releasePointerCapture) == null || ze.call(p, Oe));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const $e = ((He = $ == null ? void 0 : $.commitGesture) == null ? void 0 : He.call($)) ?? !1;
    return Z || $e;
  }, oe = () => {
    var Ae, ze, He;
    const Z = te(), Oe = O == null ? void 0 : O.pointerId;
    if (O = null, Oe != null) {
      try {
        (Ae = p.hasPointerCapture) != null && Ae.call(p, Oe) && ((ze = p.releasePointerCapture) == null || ze.call(p, Oe));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const $e = ((He = $ == null ? void 0 : $.cancelGesture) == null ? void 0 : He.call($)) ?? !1;
    return Z || $e;
  }, ue = () => N();
  $ && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ue));
  let be = null, ve = !1;
  if (z && $)
    try {
      fd(), be = Nu(o ? dS : i ? oS : J_, {
        model: U,
        onAction: (Z) => {
          var Ae, ze, He;
          if ((Z == null ? void 0 : Z.type) === "toggle-playback") {
            N(), de ? de.playback.toggle() : (Ae = e.__panoOwnOutputVideoCache) == null || Ae.player.toggle(), L();
            return;
          }
          if (H(), (Z == null ? void 0 : Z.type) === "open-editor") {
            N(), i || (U.aspectOpen = !1), (ze = e.__panoOpenEditor) == null || ze.call(e);
            return;
          }
          if (i) {
            if ((Z == null ? void 0 : Z.type) === "add-image-file") {
              G(Z.file);
              return;
            }
            $.apply(Z) && L();
            return;
          }
          if ((Z == null ? void 0 : Z.type) === "toggle-aspect") {
            U.aspectOpen = !U.aspectOpen;
            return;
          }
          if ((Z == null ? void 0 : Z.type) === "close-aspect") {
            U.aspectOpen = !1;
            return;
          }
          let Oe = Z;
          if ((Z == null ? void 0 : Z.type) === "add-frame") {
            const Ue = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            Oe = {
              ...Z,
              ...A_(Ue, {
                width: p.width,
                height: p.height
              })
            };
          } else if ((Z == null ? void 0 : Z.type) === "delete-frame") {
            const Ue = vi(ln(e));
            Ue && (e.__panoPreviewView = Ym(Ue, {
              width: p.width,
              height: p.height
            }));
          }
          const $e = ((He = e.__panoCutoutNodeFrame) == null ? void 0 : He.safeRect) || null;
          U.aspectOpen = !1, $.apply({ ...Oe, safeRect: $e }) && L();
        }
      }), be.mount(z), ve = !0;
    } catch {
      be = null, ve = !1;
    }
  const A = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    de && V(), L();
  }) : null;
  A == null || A.observe(h);
  const ce = (Z) => {
    var $e, Ae, ze;
    C.raf = 0, C.inTick = !0;
    let Oe = !1;
    try {
      if (Oe = y.stepInertia(Z), C.needsDraw || Oe) {
        C.needsDraw = !1, de ? V() : ae();
        const He = o ? Lw(e, de) : null, Ue = () => yg(e, ln(e)), tt = He && ps(h, !!(($e = e.flags) != null && $e.collapsed)) ? Rw(e, mS(Ue(), He), Ue) : null;
        if ((Ae = e.flags) != null && Ae.collapsed || $w(e, p, ne, tt), U.viewUnavailable = ne.failed, o) {
          const ht = re({ ...He, showingRun: !!tt }, Ue);
          ht && (U.status = ht);
        }
      }
    } finally {
      C.inTick = !1;
    }
    (Oe || C.needsDraw) && !C.raf && (C.raf = requestAnimationFrame(ce)), ZS() && (!e.__panoDebugLastTs || Z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = Z, e.__panoPreviewMode, Jc(e), Ao(w), Ao(h), Ao(p), Ao(w.parentElement), Ao((ze = w.parentElement) == null ? void 0 : ze.parentElement), Number(p.width || 0), Number(p.height || 0), void 0);
  }, y = Ou({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (Z) => {
      e.__panoPreviewView = Z;
    },
    getViewportSize: () => {
      const Z = p.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Z.width || p.clientWidth || 0)),
        h: Math.max(1, Number(Z.height || p.clientHeight || 0))
      };
    },
    getInvert: () => {
      const Z = Vf();
      return {
        x: Z.invert_view_x ? -1 : 1,
        y: Z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      L();
    }
  }), v = i ? h : w, F = (Z) => {
    const Oe = p.getBoundingClientRect();
    return {
      x: (Number(Z.clientX) - Oe.left) * (p.width / Math.max(1, Oe.width)),
      y: (Number(Z.clientY) - Oe.top) * (p.height / Math.max(1, Oe.height))
    };
  }, S = (Z) => {
    var Ae, ze;
    if (!i || o || !s) return;
    const Oe = ln(e), $e = Ff(
      Wc(Oe, qs(e)),
      String(((Ae = Oe == null ? void 0 : Oe.active) == null ? void 0 : Ae.selected_sticker_id) || ""),
      F(Z),
      eu(e, p.width, p.height)
    );
    if (!$e) {
      p.style.cursor = "grab";
      return;
    }
    if (((ze = $e.item) == null ? void 0 : ze.locked) === !0) {
      p.style.cursor = "default";
      return;
    }
    p.style.cursor = $e.hit.cursor || "default";
  };
  p.addEventListener("pointerdown", (Z) => {
    var tt, ht, Nt, vt, rn, Kn, Ye, zt, gn, br, jr;
    if (!Rn(Z, v) || Z.button !== 0) return;
    if (!i) {
      const tn = vi(ln(e)), wn = e.__panoCutoutNodeFrame;
      if (!tn) {
        (tt = w.focus) == null || tt.call(w, { preventScroll: !0 }), (ht = p.setPointerCapture) == null || ht.call(p, Z.pointerId), p.style.cursor = "grabbing", y.startDrag(Z.clientX, Z.clientY, Z.pointerId);
        return;
      }
      if (tn.locked === !0 || !wn || !$) return;
      const Hr = F(Z);
      let vr;
      if (Z.shiftKey) {
        const Bn = Xm({
          frame: wn,
          point: Hr,
          startRollDeg: Number(tn.roll_deg ?? tn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Bn) return;
        vr = { kind: "roll", pointerId: Z.pointerId, rollGesture: Bn };
      } else {
        const Bn = ((Nt = ln(e)) == null ? void 0 : Nt.ui_settings) || Vf();
        vr = {
          kind: "pan",
          pointerId: Z.pointerId,
          startPoint: Hr,
          startShot: { ...tn },
          focalPx: Si(wn, tn),
          invertX: Bn.invert_view_x === !0,
          invertY: Bn.invert_view_y === !0
        };
      }
      N(), (vt = w.focus) == null || vt.call(w, { preventScroll: !0 }), (rn = p.setPointerCapture) == null || rn.call(p, Z.pointerId), p.style.cursor = "grabbing", $.beginGesture(), O = vr;
      return;
    }
    if (!s) return;
    const Oe = F(Z), $e = ln(e), Ae = String(((Kn = $e == null ? void 0 : $e.active) == null ? void 0 : Kn.selected_sticker_id) || ""), ze = eu(e, p.width, p.height);
    (Ye = w.focus) == null || Ye.call(w, { preventScroll: !0 });
    const He = () => Ff(Wc($e, qs(e)), Ae, Oe, ze);
    let Ue = o ? null : He();
    if (Ue && (de != null && de.playback.playing) && (H(), Ue = He()), Ue && $) {
      if (y.stopMotion(), N(), String(((zt = Ue.item) == null ? void 0 : zt.id) || "") !== Ae && $.apply({ type: "select-sticker", id: Ue.item.id }), ((gn = Ue.item) == null ? void 0 : gn.locked) === !0) {
        L();
        return;
      }
      const tn = Oe, wn = Ue.geometry.center;
      q = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: Z.pointerId,
        startPoint: tn,
        startCenter: { ...wn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(tn.x - wn.x, tn.y - wn.y)),
        startAngle: Math.atan2(tn.y - wn.y, tn.x - wn.x),
        projection: ze
      }, $.beginGesture(), (br = p.setPointerCapture) == null || br.call(p, Z.pointerId), p.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, L();
      return;
    }
    (jr = p.setPointerCapture) == null || jr.call(p, Z.pointerId), p.style.cursor = "grabbing", y.startDrag(Z.clientX, Z.clientY, Z.pointerId);
  }), p.addEventListener("pointermove", (Z) => {
    if (!i) {
      if (!O) {
        if (!y.state.drag.active) return;
        Rn(Z, v), y.moveDrag(Z.clientX, Z.clientY, "pano");
        return;
      }
      if (O.pointerId !== Z.pointerId || !$) return;
      if (Rn(Z, v), O.kind === "pan") {
        const $e = F(Z);
        $.updateGesture({
          type: "pan-camera",
          startShot: O.startShot,
          dx: $e.x - O.startPoint.x,
          dy: $e.y - O.startPoint.y,
          focalPx: O.focalPx,
          invertX: O.invertX,
          invertY: O.invertY
        });
        return;
      }
      const Oe = Jm(O.rollGesture, F(Z), Z);
      if (!Oe) return;
      O.rollGesture = Oe.gesture, $.updateGesture({ type: "set-roll", value: Oe.rollDeg });
      return;
    }
    if (!q && !y.state.drag.active) {
      S(Z);
      return;
    }
    if (q) {
      if (q.pointerId !== Z.pointerId || !$) return;
      Rn(Z, v);
      const Oe = F(Z);
      let $e = q.startSticker;
      if (q.kind === "move")
        $e = wS(
          q.startSticker,
          {
            x: q.startCenter.x + Oe.x - q.startPoint.x,
            y: q.startCenter.y + Oe.y - q.startPoint.y
          },
          q.projection
        );
      else if (q.kind === "scale") {
        const Ae = Math.hypot(Oe.x - q.startCenter.x, Oe.y - q.startCenter.y);
        $e = xS(q.startSticker, q.startDistance, Ae);
      } else if (q.kind === "rotate") {
        const Ae = Math.atan2(Oe.y - q.startCenter.y, Oe.x - q.startCenter.x);
        $e = kS(q.startSticker, q.startAngle, Ae, Z.shiftKey === !0);
      }
      $.updateGesture({ type: "set-transform", value: $e }), L();
      return;
    }
    !s || !y.state.drag.active || (Rn(Z, v), y.moveDrag(Z.clientX, Z.clientY, "pano"));
  });
  const j = () => {
    var Oe, $e;
    if (!O && !q) {
      if (!y.state.drag.active) return;
      y.endDrag(), p.style.cursor = "grab", L();
      return;
    }
    if (!$) return;
    const Z = (O == null ? void 0 : O.pointerId) ?? (q == null ? void 0 : q.pointerId);
    O = null, q = null;
    try {
      (Oe = p.hasPointerCapture) != null && Oe.call(p, Z) && (($e = p.releasePointerCapture) == null || $e.call(p, Z));
    } catch {
    }
    $.cancelGesture(), p.style.cursor = "grab", L();
  }, x = (Z, Oe = !1) => {
    var $e, Ae, ze, He;
    if (!i) {
      if (!O) {
        if (!y.state.drag.active) return;
        Rn(Z, v), ($e = p.releasePointerCapture) == null || $e.call(p, Z.pointerId), p.style.cursor = "grab", y.endDrag(), L();
        return;
      }
      if (O.pointerId !== Z.pointerId || !$) return;
      Rn(Z, v), O = null, (Ae = p.releasePointerCapture) == null || Ae.call(p, Z.pointerId), p.style.cursor = "grab", Oe ? $.cancelGesture() : $.commitGesture(), S(Z), L();
      return;
    }
    if (q) {
      if (q.pointerId !== Z.pointerId || !$) return;
      Rn(Z, v), q = null, (ze = p.releasePointerCapture) == null || ze.call(p, Z.pointerId), p.style.cursor = "grab", Oe ? $.cancelGesture() : $.commitGesture(), L();
      return;
    }
    !s || !y.state.drag.active || (Rn(Z, v), (He = p.releasePointerCapture) == null || He.call(p, Z.pointerId), p.style.cursor = "grab", y.endDrag(), L());
  };
  p.addEventListener("pointerup", x), p.addEventListener("pointercancel", (Z) => x(Z, !0)), p.addEventListener("lostpointercapture", j), p.addEventListener("pointerleave", (Z) => {
    !i && O || q || y.state.drag.active && x(Z);
  });
  const R = (Z) => {
    const Oe = document.activeElement;
    if (Oe !== w && !w.contains(Oe)) return;
    if (Z.key === "Escape" && (O || q) && $) {
      j(), tu(Z);
      return;
    }
    if (!i || o || Z.key !== "Delete" && Z.key !== "Backspace" || !$) return;
    const $e = Z.target, Ae = String(($e == null ? void 0 : $e.tagName) || "").toUpperCase();
    Ae === "INPUT" || Ae === "TEXTAREA" || $e != null && $e.isContentEditable || U.canDelete === !0 && (H(), N(), $.apply({ type: "delete-selected" }) && L(), tu(Z));
  };
  window.addEventListener("keydown", R, !0);
  const _ = YS({
    requestFrame: (Z) => requestAnimationFrame(Z),
    cancelFrame: (Z) => cancelAnimationFrame(Z),
    restore: (Z) => Hw(Z)
  }), P = (Z) => {
    var $e, Ae, ze, He, Ue, tt;
    if (!Rn(Z, v)) return;
    if (!i) {
      const ht = vi(ln(e));
      if (ht && ht.locked !== !0 && $) {
        const Nt = As(Z);
        Nt !== 0 && (_e || (N(), $.beginGesture(), _e = !0), $.updateGesture({
          type: "step-fov",
          direction: Nt
        }) ? (me && clearTimeout(me), me = setTimeout(te, 180), L()) : $.hasGestureChanges() || ($.cancelGesture(), _e = !1));
      } else if (!ht) {
        const Nt = Gf();
        y.applyWheelEvent(Z) && L(), _.schedule(Nt);
      }
      ($e = Z.preventDefault) == null || $e.call(Z), (Ae = Z.stopPropagation) == null || Ae.call(Z), (ze = Z.stopImmediatePropagation) == null || ze.call(Z);
      return;
    }
    if (!s) return;
    const Oe = Gf();
    y.applyWheelEvent(Z) && L(), (He = Z.preventDefault) == null || He.call(Z), (Ue = Z.stopPropagation) == null || Ue.call(Z), (tt = Z.stopImmediatePropagation) == null || tt.call(Z), _.schedule(Oe);
  }, I = i ? [h, p] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((Z) => {
    I.forEach((Oe) => Oe.addEventListener(Z, P, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((Z) => {
    p.addEventListener(Z, (Oe) => Rn(Oe, v)), h.addEventListener(Z, (Oe) => Rn(Oe, v));
  });
  const B = fr(e, "state_json");
  let le = null, he = null;
  B && !B.__panoPreviewPatchedCb && (le = B.callback, he = (Z) => {
    const Oe = le ? le(Z) : void 0;
    return L(), Oe;
  }, B.callback = he, B.__panoPreviewPatchedCb = he);
  const ee = fr(e, "bg_color");
  let pe = null, Se = null;
  ee && !ee.__panoPreviewPatchedCb && (pe = ee.callback, Se = (Z) => {
    const Oe = pe ? pe(Z) : void 0;
    return L(), Oe;
  }, ee.callback = Se, ee.__panoPreviewPatchedCb = Se);
  const Pe = o ? fr(e, "output_size") : null, fe = Pe == null ? void 0 : Pe.callback, ge = Pe ? (Z) => {
    const Oe = fe ? fe(Z) : void 0;
    return L(), Oe;
  } : null;
  Pe && (Pe.callback = ge);
  const b = e.onRemoved, m = e.onResize, T = e.onExecuted, M = e.onDragOver, k = e.onDragDrop;
  let ie = null;
  const ye = () => {
    i && (U.dropActive = !0, ie && clearTimeout(ie), ie = setTimeout(() => {
      ie = null, U.dropActive = !1;
    }, 140));
  }, W = a ? function(Z) {
    return (M ? M.apply(this, arguments) : !1) === !0 ? !0 : hd(Z == null ? void 0 : Z.dataTransfer) ? (ye(), !0) : !1;
  } : null, se = a ? function(Z) {
    var Ae;
    if ((k ? k.apply(this, arguments) : !1) === !0) return !0;
    const $e = Array.from(((Ae = Z == null ? void 0 : Z.dataTransfer) == null ? void 0 : Ae.files) || []).find((ze) => Xn(ze));
    return $e ? (ie && clearTimeout(ie), ie = null, U.dropActive = !1, G($e), !0) : !1;
  } : null;
  a && (e.onDragOver = W, e.onDragDrop = se);
  const Ne = a ? US(w, {
    onActive: (Z) => {
      if (Z) {
        ye();
        return;
      }
      ie && clearTimeout(ie), ie = null, U.dropActive = !1;
    },
    onDrop: (Z) => {
      G(Z);
    }
  }) : () => {
  }, we = function(Z) {
    e.__panoOutputFromRun = !0;
    const Oe = vg(e, Z);
    Tr(e, Oe ? "executed" : "sync", Z), L();
    const $e = T ? T.apply(this, arguments) : void 0;
    return Lo(e), $e;
  };
  e.onExecuted = we;
  const Me = e.onConnectionsChange, De = function(Z, Oe) {
    const $e = Sf(e, Z, Oe, ed), Ae = Sf(e, Z, Oe, er), ze = arguments, He = Me ? Me.apply(this, ze) : void 0, Ue = () => {
      C.destroyed || (Ae && bw(e), $e && Tr(e, "connection-change"), Lo(e), L());
    };
    return Ue(), queueMicrotask(Ue), He;
  };
  e.onConnectionsChange = De;
  const Le = function() {
    const Z = m ? m.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, L(), Z;
  };
  e.onResize = Le;
  const Ge = function() {
    return qe(), Qc.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ge;
  const qe = () => {
    var Z, Oe, $e, Ae, ze, He, Ue, tt, ht;
    C.destroyed = !0, (Z = A == null ? void 0 : A.disconnect) == null || Z.call(A), i ? N() : oe(), p.removeEventListener("lostpointercapture", j), Ne(), X(), window.removeEventListener("keydown", R, !0), ($e = (Oe = e.__panoStateFlushers) == null ? void 0 : Oe.delete) == null || $e.call(Oe, ue), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ae = $ == null ? void 0 : $.destroy) == null || Ae.call($), (ze = be == null ? void 0 : be.unmount) == null || ze.call(be), de && (de.playback.dispose(), de.video.remove(), de.stickerVideo.remove(), e.__panoSurfacePlayback === de && (e.__panoSurfacePlayback = null)), ne.dispose(), e.__panoSurfaceScene = null, (Ue = (He = e.__panoRasterObjectSurfaceCache) == null ? void 0 : He.dispose) == null || Ue.call(He), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, K(), _.dispose(), ie && clearTimeout(ie), ie = null, md.disposeOwner(e), Xi(e), bg(e), C.raf && cancelAnimationFrame(C.raf), C.raf = 0, ((tt = e.__panoCutoutNodeSurface) == null ? void 0 : tt.session) === $ && (e.__panoCutoutNodeSurface = null), ((ht = e.__panoStickersNodeSurface) == null ? void 0 : ht.session) === $ && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Le && (e.onResize = m), e.onExecuted === we && (e.onExecuted = T), e.onConnectionsChange === De && (e.onConnectionsChange = Me), he && (B == null ? void 0 : B.callback) === he && (B.callback = le), he && (B == null ? void 0 : B.__panoPreviewPatchedCb) === he && delete B.__panoPreviewPatchedCb, Se && (ee == null ? void 0 : ee.callback) === Se && (ee.callback = pe), Se && (ee == null ? void 0 : ee.__panoPreviewPatchedCb) === Se && delete ee.__panoPreviewPatchedCb, ge && Pe.callback === ge && (Pe.callback = fe), e.onDragOver === W && (e.onDragOver = M), e.onDragDrop === se && (e.onDragDrop = k), e.onRemoved === Ge && (e.onRemoved = b);
  };
  e.__panoDomRestore = qe, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = $ && ve && !i ? { session: $, model: U } : null, e.__panoStickersNodeSurface = $ && ve && i ? { session: $, model: U } : null, e.__panoDomPreview = {
    widget: Y,
    root: w,
    canvas: p,
    requestDraw: L,
    state: C,
    emptyHintEl: D,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Qc.register(e), e.graph && Tr(e, "attach"), L();
}
function Kf(e, t = {}) {
  dg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Bf(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (ug(e) && !r) {
    gd(e);
    return;
  }
  dg(e).attach(t);
}
function qw(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Xw(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, u = Math.max(0, Number.isFinite(s) ? s : 0) * o, d = Number(r), c = d > 0 ? d : 1 / 0, f = Math.max(l, u);
  let g = f > 0 ? Math.min(1, c / f) : 1;
  return n && l > 0 && u > 0 && (g = Math.min(g, n.width * o / l, n.height * o / u)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(u * g))
  };
}
function Jw({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var g;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, u = () => {
    const w = l();
    return w === s || (s = w, i(w)), w;
  }, d = () => u();
  return (g = t == null ? void 0 : t.addEventListener) == null || g.call(t, "fullscreenchange", d), u(), { toggle: async () => {
    var w;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((w = t.exitFullscreen) == null ? void 0 : w.call(t));
      } catch {
      }
      return a ? !1 : (u(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (l())
          return u(), !0;
      } catch {
      }
    return a || (o(), u()), !1;
  }, isActive: l, destroy: () => {
    var w, h, p;
    if (!a) {
      if (a = !0, (w = t == null ? void 0 : t.removeEventListener) == null || w.call(t, "fullscreenchange", d), l())
        try {
          const D = (h = t.exitFullscreen) == null ? void 0 : h.call(t);
          (p = D == null ? void 0 : D.catch) == null || p.call(D, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const Zw = { class: "pano-preview-node-surface" }, Qw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Re("div", Zw, [
      Ke(qt, {
        icon: e.model.fullscreen ? nt(je).fullscreen_close : nt(je).fullscreen,
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
      e.model.viewUnavailable ? (Fe(), Dn(_l, { key: 0 })) : pt("", !0)
    ]));
  }
}, Ya = 140, ex = 180, Uf = 40, ac = 10;
function Yf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function qf(e, t) {
  const r = Yf(e), n = Yf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Xf(e) {
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
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function Ji(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ji(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Xf({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = Ji(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Xf(e);
}
function _g(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function tx(e) {
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
function nu(e) {
  var i;
  const t = (i = Jn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (qf(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (qf(o, r)) return t[o];
  return null;
}
function nx(e) {
  var n, i;
  const t = nu(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Ji(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function rx(e, t = "erp_image") {
  var g, w, h, p, D, X, z;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((Y, C) => String((Y == null ? void 0 : Y.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(C))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (h = (w = (g = Jn) == null ? void 0 : g.graph) == null ? void 0 : w.getNodeById) == null ? void 0 : h.call(w, o), s = nu(o), l = nu(e == null ? void 0 : e.id), u = [
    (p = l == null ? void 0 : l.ui) == null ? void 0 : p.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (D = s == null ? void 0 : s.ui) == null ? void 0 : D.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const Y of u)
    if (Array.isArray(Y))
      for (const C of Y) {
        const re = Ji(C);
        if (re) return re;
      }
  let d = [];
  try {
    d = typeof ((X = Jn) == null ? void 0 : X.getNodeImageUrls) == "function" ? Jn.getNodeImageUrls(a) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const Y of d) {
      const C = Ji(Y);
      if (C) return C;
    }
  if (a) {
    const Y = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const C of Y) {
      const re = Ji(C);
      if (re) return re;
    }
  }
  const c = (z = a == null ? void 0 : a.widgets) == null ? void 0 : z.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image"), f = String((c == null ? void 0 : c.value) || "").trim();
  return f ? fn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function sc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Jf(e, t, r, n, i, o, a) {
  var u, d, c;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !_g(o) || r <= 1 || n <= 1) {
    sc(t, r, n);
    return;
  }
  if (a.failed) {
    sc(t, r, n);
    return;
  }
  const s = Number(((c = (d = (u = e == null ? void 0 : e.widgets) == null ? void 0 : u.find) == null ? void 0 : d.call(u, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: js(i, r, n),
    background: { media: o, revision: tx(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : sc(t, r, n);
}
function Zf(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class ix {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = wm(() => this.requestDraw()), this.controller = Ou({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: $t(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ie(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ie(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, a, s;
        const n = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((n == null ? void 0 : n.width) || ((a = this.canvas) == null ? void 0 : a.clientWidth) || 0)),
          h: Math.max(1, Number((n == null ? void 0 : n.height) || ((s = this.canvas) == null ? void 0 : s.clientHeight) || 0))
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
      const a = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), a;
    }, this.node.onConnectionsChange = function() {
      const a = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), a;
    }, this.node.onResize = function() {
      const a = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), a;
    }, this.node.onRemoved = function() {
      const a = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), a;
    };
    const r = ((o = (i = (n = this.node) == null ? void 0 : n.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (a) => (a == null ? void 0 : a.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...a) => {
      const s = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...a) : void 0;
      return t.requestDraw(), s;
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
        `min-height:${Ya}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = en({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Ya;
        },
        getHeight() {
          return Ya;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Bs(qc(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Ya, Number(o.minHeight || 0)),
            minWidth: Math.max(ex, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, r, n, i, o, a;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return fd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ao({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Jw({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = Nu(Qw, {
        model: this.surfaceModel,
        onAction: (s) => {
          var l, u;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((u = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || u.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var s, l;
          return (l = (s = this.fullscreenController) == null ? void 0 : s.toggle) == null ? void 0 : l.call(s);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = _h(r), t.addEventListener("pointerdown", (o) => {
      var a, s, l;
      o.button === 0 && ((a = r.focus) == null || a.call(r, { preventScroll: !0 }), (s = t.setPointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var a;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
    const n = (o) => {
      var a, s;
      this.controller.state.drag.active && ((a = t.releasePointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    };
    t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n), r.addEventListener("wheel", (o) => {
      var a;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var a;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }), r.addEventListener("keydown", (o) => {
      var a;
      qw(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !_g(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? ps(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Jn.canvas) != null && n.graph) || this.node.graph === Jn.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), n;
    }, this.node.onMouseDown = function(r, n) {
      var a;
      const i = t.localPoint(n);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Zf(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, n) {
      var a;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(n);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, n, i) {
      var l, u, d, c, f, g;
      const o = xw(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !Zf(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((u = t.view) == null ? void 0 : u.fov) || 100), s && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (c = r == null ? void 0 : r.preventDefault) == null || c.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (g = r == null ? void 0 : r.stopImmediatePropagation) == null || g.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - ac * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Uf - ac);
    return { x: ac, y: Uf, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Jf(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Sm : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Xw(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = nx(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = ga(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, u = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", u), s.addEventListener("play", u), s.addEventListener("pause", u), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", u), s.removeEventListener("play", u), s.removeEventListener("pause", u), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = rx(this.node, this.imageInputName);
    if (!r) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.imgSrc = r;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Jf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, u, d, c, f, g, w, h, p, D;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (u = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || u.call(l), this.surfaceApp = null, (c = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || c.call(d), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (w = (g = this.root) == null ? void 0 : g.remove) == null || w.call(g);
    } catch {
    }
    try {
      sg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((D = (p = (h = this.node) == null ? void 0 : h.widgets) == null ? void 0 : p.find) == null ? void 0 : D.call(p, (X) => (X == null ? void 0 : X.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function ox(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new ix(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function Sg(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const n = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[n]) return;
  e[n] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const s = i ? i.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const s = o ? o.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
  const a = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const s = a ? a.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
}
function bd(e) {
  return !!(e != null && e.prototype);
}
function ua(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function ax(e, t = {}) {
  bd(e) || ox(e, {
    ...t,
    onOpen: ua(e, t.onOpen)
  });
}
function sx(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!bd(e)) {
    Bf(e, {
      ...n,
      onOpen: ua(e, t.onOpen)
    });
    return;
  }
  Sg(e, "stickers_node_preview", (i) => {
    Bf(i, {
      ...n,
      onOpen: ua(i, t.onOpen)
    });
  });
}
function lx(e, t = {}) {
  if (!bd(e)) {
    Kf(e, {
      ...t,
      onOpen: ua(e, t.onOpen)
    });
    return;
  }
  Sg(e, "cutout_preview", (r) => {
    Kf(r, {
      ...t,
      onOpen: ua(r, t.onOpen)
    });
  });
}
const Mn = {
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
}, Nr = "pen";
function Qf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function cx({ requestFrame: e, cancelFrame: t, tasks: r }) {
  const n = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [a, s] of Object.entries(r))
      n.delete(a) && s();
  }
  return {
    request(a) {
      n.add(a), i ?? (i = e(o));
    },
    cancel() {
      n.clear(), i !== null && t(i), i = null;
    }
  };
}
const dt = Object.freeze({
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
}), ux = new Set(Object.values(dt));
function dx({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), d = 1, c = 0;
  function f(h) {
    try {
      h();
    } catch (p) {
      i(p);
    }
  }
  function g() {
    !o && !a && !s && (o = e(w));
  }
  function w(h) {
    o = 0, a = !0;
    try {
      const p = u;
      u = /* @__PURE__ */ new Map();
      for (const X of p.values()) f(() => X(h));
      if (s) return;
      const D = l;
      l = /* @__PURE__ */ new Set(), (D.size || n()) && f(() => r(h, D));
    } finally {
      a = !1;
    }
    (l.size || u.size || n()) && g();
  }
  return {
    requestDraw(h) {
      if (!ux.has(h)) throw new Error(`Unknown draw reason: ${h}`);
      h === dt.STATE && (c += 1), l.add(h), g();
    },
    requestFrame(h) {
      const p = d++;
      return u.set(p, h), g(), p;
    },
    cancelFrame(h) {
      u.delete(h);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      g();
    },
    get stateRevision() {
      return c;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      s = !0, o && t(o), o = 0, u.clear(), l.clear();
    }
  };
}
const fx = { class: "pano-floating-right" }, px = {
  key: 0,
  class: "pano-floating-space"
}, hx = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, mx = ["data-settled"], gx = ["data-ready", "data-settled"], yx = ["aria-label", "data-tip"], bx = {
  key: 1,
  class: "pano-camera-preview-label"
}, vx = {
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
    return (t, r) => (Fe(), Re(et, null, [
      ke("div", fx, [
        e.space ? Fr((Fe(), Re("div", px, [
          ke("div", hx, [
            (Fe(!0), Re(et, null, Pt(e.space.modes, (n) => (Fe(), Dn(qt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ke(qt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [_i, e.space.visible]
        ]) : pt("", !0),
        (Fe(!0), Re(et, null, Pt(e.buttons, (n) => (Fe(), Dn(qt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Fr(ke("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ke("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: It({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = ke("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            ke("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Fe(), Re("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ke(Lt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, yx)) : pt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Fe(), Re("div", bx, it(e.preview.label || "Preview unavailable"), 1)) : pt("", !0)
        ], 14, gx)
      ], 8, mx), [
        [_i, e.preview.visible]
      ])
    ], 64));
  }
}, _x = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Sx = ["y2", "transform"], wx = ["transform"], xx = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Fr((Fe(), Re("div", {
      class: gt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Fe(), Re("svg", _x, [
        o[1] || (o[1] = ke("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Fe(!0), Re(et, null, Pt(nt(r), (a) => (Fe(), Re("line", {
          key: a,
          class: gt(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, Sx))), 128)),
        ke("g", { transform: n.value }, [...o[0] || (o[0] = [
          ke("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, wx),
        o[2] || (o[2] = ke("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [_i, e.model.visible === !0]
    ]);
  }
}, kx = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", {
      class: gt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ke(Qm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ke(qt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ke(xx, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Mx = ["aria-label"], Px = { class: "pano-canvas-confirm-title" }, Nx = { class: "pano-canvas-confirm-text" }, Cx = { class: "pano-canvas-confirm-actions" }, Ax = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Ix = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Wt(null), n = /* @__PURE__ */ Wt(null);
    let i = null;
    function o() {
      const c = n.value;
      return c ? Array.from(c.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function a(c) {
      const f = n.value;
      if (!f) return;
      const g = f.querySelector(`[data-action='${c}']`);
      g instanceof HTMLButtonElement && g.click();
    }
    function s() {
      var h;
      const c = n.value;
      if (!c) return;
      const f = c.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const w = o()[0] || c;
      (h = w == null ? void 0 : w.focus) == null || h.call(w);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function u(c) {
      var D;
      if (c.defaultPrevented) return;
      if (c.key === "Escape") {
        c.preventDefault(), c.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (c.key !== "Tab") return;
      const f = o(), g = n.value;
      if (!f.length) {
        c.preventDefault(), (D = g == null ? void 0 : g.focus) == null || D.call(g);
        return;
      }
      const w = f[0], h = f[f.length - 1], p = document.activeElement;
      if (c.shiftKey) {
        (p === w || p === g || !(g != null && g.contains(p))) && (c.preventDefault(), h.focus());
        return;
      }
      (p === h || !(g != null && g.contains(p))) && (c.preventDefault(), w.focus());
    }
    function d(c) {
      c.target === r.value && a("confirm-cancel");
    }
    return gi(() => t.model.visible, (c, f) => {
      if (c) {
        i = document.activeElement, al(() => {
          s();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), ha(() => {
      l();
    }), (c, f) => e.model.visible === !0 ? (Fe(), Re("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ct(d, ["self"])
    }, [
      ke("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: u
      }, [
        ke("div", Px, it(e.model.title), 1),
        ke("div", Nx, it(e.model.text), 1),
        ke("div", Cx, [
          f[0] || (f[0] = ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ke("button", Ax, it(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Mx)
    ], 512)) : pt("", !0);
  }
}, Ex = ["data-paint-pane"], Ox = ["hidden"], Fx = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Tx = ["aria-pressed", "disabled"], Dx = ["hidden"], Lx = { class: "pano-paint-color-pop-head" }, Rx = { class: "pano-paint-color-field" }, Vx = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, $x = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, zx = { class: "pano-paint-color-field" }, jx = { class: "pano-paint-alpha-wrap" }, Hx = ["value"], Gx = { "data-paint-alpha-value": "" }, Wx = ["hidden"], Kx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Bx = ["data-paint-history-index", "aria-label", "disabled"], Ux = ["data-paint-footer"], Yx = ["data-paint-group"], qx = ["hidden"], Xx = ["value", "disabled"], Jx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Zx = ["hidden"], Qx = {
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
    return (n, i) => (Fe(), Re("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Fe(!0), Re(et, null, Pt(e.panes, (o) => {
        var a;
        return Fe(), Re("div", {
          key: o.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Fe(), Re("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Fe(!0), Re(et, null, Pt(e.paintSwatches, (s) => (Fe(), Re("button", {
              key: s.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: It(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Fx))), 128)),
            ke("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: It({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Tx),
            ke("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: It({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              ke("div", Lx, [
                ke("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: It({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = ke("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ke("div", Rx, [
                ke("div", Vx, [
                  ke("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: It({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ke("div", $x, [
                  ke("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: It({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ke("label", zx, [
                i[1] || (i[1] = ke("span", null, "Opacity", -1)),
                ke("div", jx, [
                  ke("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Hx),
                  ke("span", Gx, it(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ke("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ke("div", Kx, [
                  (Fe(!0), Re(et, null, Pt(e.state.historyEntries || [], (s) => (Fe(), Re("button", {
                    key: s.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: It(r(s.color))
                  }, null, 14, Bx))), 128))
                ])
              ], 8, Wx)
            ], 12, Dx)
          ], 10, Ox)) : pt("", !0),
          ke("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            ke("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Fe(!0), Re(et, null, Pt(o.tools, (s) => {
                var l;
                return Fe(), Dn(qt, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Yx),
            ke("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ke("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: It({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Xx),
              ke("span", Jx, it(e.state.sizeText || "10"), 1)
            ], 10, qx),
            ke("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Ke(qt, {
                icon: nt(je).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Zx)
          ], 8, Ux)
        ], 10, Ex);
      }), 128))
    ], 2));
  }
}, ek = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Wt(null), n = /* @__PURE__ */ Wt(null), i = /* @__PURE__ */ Wt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Fe(), Re(et, null, [
      ke("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      ke("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        ke("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, tk = ["aria-label"], nk = ["data-tip", "aria-pressed"], rk = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Fe(), Re("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: It({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Fe(!0), Re(et, null, Pt(e.buttons, (o) => (Fe(), Re("button", Pr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), it(o.label), 17, nk))), 128))
    ], 12, tk));
  }
}, ik = {
  key: 0,
  class: "pano-cutout-menu"
}, ok = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, ak = ["data-aspect"], sk = ["data-action", "aria-label", "data-tip", "disabled"], lk = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: It({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Fe(!0), Re(et, null, Pt(e.model.items || [], (n) => (Fe(), Re(et, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Fe(), Re("div", ik, [
          ke("button", ok, [
            Ke(Lt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          ke("div", {
            class: gt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Fe(!0), Re(et, null, Pt(n.choices || [], (i) => (Fe(), Re("button", {
              key: i.value,
              class: gt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, it(i.label), 11, ak))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Fe(), Dn(rk, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Fe(), Re("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Ke(Lt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, sk))
      ], 64))), 128))
    ], 4));
  }
}, ck = {
  key: 0,
  class: "pano-easing"
}, uk = { class: "pano-section-title" }, dk = { class: "pano-easing-range" }, fk = { class: "pano-easing-modes" }, pk = ["aria-pressed", "onClick"], hk = ["viewBox"], mk = ["x", "y"], gk = ["x1", "y1", "x2", "y2"], yk = ["d"], bk = ["x1", "y1", "x2", "y2"], vk = ["x1", "y1", "x2", "y2"], _k = ["cx", "cy"], Sk = ["cx", "cy"], wk = { class: "pano-easing-note" }, xr = 132, li = 14, xk = {
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
    ], o = /* @__PURE__ */ Wt(null), a = ut(() => {
      var w;
      return Array.isArray((w = r.model) == null ? void 0 : w.easing) ? r.model.easing : null;
    }), s = (w) => li + w * xr, l = (w) => li + (1 - w) * xr, u = ut(() => {
      var X;
      if (((X = r.model) == null ? void 0 : X.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [w, h, p, D] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(w)} ${l(h)} ${s(p)} ${l(D)} ${s(1)} ${l(1)}`;
    }), d = ut(() => a.value ? a.value.map((w) => w.toFixed(2)).join(", ") : "");
    function c(w) {
      var h;
      return JSON.stringify(w.easing) === JSON.stringify((h = r.model) == null ? void 0 : h.easing);
    }
    function f(w, h) {
      n("timeline", { type: "easing", easing: w, commit: h });
    }
    function g(w, h) {
      var Y;
      if (w.button !== 0 || !a.value) return;
      const p = w.currentTarget;
      (Y = p.setPointerCapture) == null || Y.call(p, w.pointerId);
      let D = null;
      const X = (C) => {
        const re = o.value.getBoundingClientRect(), L = re.width / (xr + li * 2), ne = ((C.clientX - re.left) / L - li) / xr, U = 1 - ((C.clientY - re.top) / L - li) / xr;
        D = [...D || a.value], D[h] = Math.round(Math.min(1, Math.max(0, ne)) * 100) / 100, D[h + 1] = Math.round(Math.min(1, Math.max(0, U)) * 100) / 100, f(D, !1);
      }, z = () => {
        p.removeEventListener("pointermove", X), p.removeEventListener("pointerup", z), p.removeEventListener("pointercancel", z), D && f(D, !0);
      };
      p.addEventListener("pointermove", X), p.addEventListener("pointerup", z), p.addEventListener("pointercancel", z);
    }
    return (w, h) => e.model ? (Fe(), Re("div", ck, [
      ke("div", uk, [
        h[2] || (h[2] = ke("span", null, "Easing", -1)),
        ke("span", dk, it(e.model.label), 1)
      ]),
      ke("div", fk, [
        (Fe(), Re(et, null, Pt(i, (p) => ke("button", {
          key: p.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": c(p) ? "true" : "false",
          onClick: (D) => f(p.easing, !0)
        }, it(p.label), 9, pk)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Fe(), Re("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${xr + li * 2} ${xr + li * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        ke("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: xr,
          height: xr
        }, null, 8, mk),
        ke("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, gk),
        ke("path", {
          class: "pano-easing-curve",
          d: u.value
        }, null, 8, yk),
        a.value ? (Fe(), Re(et, { key: 0 }, [
          ke("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, bk),
          ke("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, vk),
          ke("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: h[0] || (h[0] = (p) => g(p, 0))
          }, null, 40, _k),
          ke("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: h[1] || (h[1] = (p) => g(p, 2))
          }, null, 40, Sk)
        ], 64)) : pt("", !0)
      ], 8, hk)) : pt("", !0),
      ke("div", wk, [
        e.model.mixed ? (Fe(), Re(et, { key: 0 }, [
          Eo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Fe(), Re(et, { key: 1 }, [
          Eo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Fe(), Re(et, { key: 2 }, [
          Eo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Fe(), Re(et, { key: 3 }, [
          Eo("cubic-bezier(" + it(d.value) + ")", 1)
        ], 64)) : pt("", !0)
      ])
    ])) : pt("", !0);
  }
}, kk = {
  class: "pano-side",
  "data-side": ""
}, Mk = { class: "pano-side-head" }, Pk = { class: "pano-side-title" }, Nk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Ck = {
  key: 0,
  class: "pano-side-scroll"
}, Ak = { class: "pano-inspector" }, Ik = { class: "pano-ui-row pano-coverage-row" }, Ek = ["data-selected"], Ok = ["aria-pressed", "disabled"], Fk = ["aria-pressed", "disabled"], Tk = {
  key: 0,
  class: "pano-section-title"
}, Dk = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Lk = {
  class: "pano-picker",
  "data-picker": "selection"
}, Rk = ["disabled"], Vk = { class: "pano-picker-label" }, $k = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, zk = ["hidden"], jk = ["data-selection-id"], Hk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Gk = {
  key: 2,
  class: "pano-state-actions"
}, Wk = ["disabled"], Kk = ["data-key"], Bk = { class: "pano-field-group-values" }, Uk = ["title", "onPointerdown"], Yk = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], qk = ["data-key"], Xk = ["min", "max", "step", "value", "disabled", "data-param-key"], Jk = ["min", "max", "step", "value", "disabled", "data-param-key"], Zk = ["open"], Qk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, eM = { class: "pano-ui-settings-body" }, tM = { class: "pano-ui-row" }, nM = ["data-selected"], rM = ["aria-pressed"], iM = ["aria-pressed"], oM = { class: "pano-ui-row" }, aM = ["data-selected"], sM = ["aria-pressed"], lM = ["aria-pressed"], cM = {
  key: 1,
  class: "pano-side-footer"
}, uM = ["data-action"], dM = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ut(() => {
      const u = r.model;
      return !u || typeof u != "object" ? !1 : Object.keys(u).length > 0 && !!u.coverage;
    });
    function o(u) {
      return { "--v": `${Number((u == null ? void 0 : u.fillPct) || 0)}%` };
    }
    function a(u, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (u == null ? void 0 : u.enabled) === !1;
    }
    const s = {};
    function l(u, d) {
      const c = s[d.key];
      if (u.button !== 0 || !c || a(d, r.model)) return;
      u.preventDefault();
      const f = u.currentTarget, g = u.clientX, w = Number(c.value) || 0;
      let h = !1;
      f.setPointerCapture(u.pointerId);
      const p = (X) => {
        if (!h && Math.abs(X.clientX - g) < 3) return;
        h = !0;
        const z = w + (X.clientX - g) * d.drag * (X.shiftKey ? 0.1 : 1);
        c.value = String(Number(z.toFixed(3))), c.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, D = () => {
        f.removeEventListener("pointermove", p), f.removeEventListener("pointerup", D), f.removeEventListener("pointercancel", D), f.removeEventListener("lostpointercapture", D), h ? c.dispatchEvent(new Event("change", { bubbles: !0 })) : c.focus();
      };
      f.addEventListener("pointermove", p), f.addEventListener("pointerup", D), f.addEventListener("pointercancel", D), f.addEventListener("lostpointercapture", D);
    }
    return (u, d) => {
      var c, f, g, w, h;
      return Fe(), Re("div", kk, [
        ke("div", Mk, [
          ke("div", Pk, [
            ke("span", Nk, [
              Ke(Lt, {
                icon: nt(je).globe
              }, null, 8, ["icon"])
            ]),
            ke("span", null, it(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = ke("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = ke("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Fe(), Re("div", Ck, [
          ke("div", Ak, [
            d[9] || (d[9] = ke("div", { class: "pano-section-title" }, [
              ke("span", null, "Scene")
            ], -1)),
            ke("div", Ik, [
              d[2] || (d[2] = ke("label", null, "Coverage", -1)),
              ke("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((c = e.model.coverage) == null ? void 0 : c.value) === 180 ? "1" : "0"
              }, [
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, Ok),
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "180", 8, Fk)
              ], 8, Ek)
            ]),
            e.model.transformTitle !== !1 ? (Fe(), Re("div", Tk, [...d[3] || (d[3] = [
              ke("span", null, "Transform", -1)
            ])])) : pt("", !0),
            e.model.selectionPicker ? (Fe(), Re("div", Dk, [
              ke("label", null, it(e.model.selectionPicker.label), 1),
              ke("div", Lk, [
                ke("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ke("span", Vk, [
                    e.model.selectionPicker.currentIcon ? (Fe(), Re("span", $k, [
                      Ke(Lt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    ke("span", null, it(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = ke("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Rk),
                ke("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Fe(!0), Re(et, null, Pt(e.model.selectionPicker.items || [], (p) => (Fe(), Re("button", {
                    key: p.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: p.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": p.id
                  }, [
                    p.icon ? (Fe(), Re("span", Hk, [
                      Ke(Lt, {
                        icon: p.icon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    ke("span", null, it(p.label), 1)
                  ], 10, jk))), 128))
                ], 8, zk)
              ])
            ])) : pt("", !0),
            e.model.copyStateButton ? (Fe(), Re("div", Gk, [
              ke("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ke(Lt, {
                  icon: nt(je).copy
                }, null, 8, ["icon"]),
                ke("span", null, it(e.model.copyStateButton.label), 1)
              ], 8, Wk)
            ])) : pt("", !0),
            ke("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Fe(!0), Re(et, { key: 0 }, Pt(e.model.notes, (p) => (Fe(), Re("div", {
                key: p,
                class: "pano-param-note"
              }, it(p), 1))), 128)) : (Fe(!0), Re(et, { key: 1 }, Pt(e.model.rows || [], (p) => (Fe(), Re(et, {
                key: p.key
              }, [
                p.grouped ? (Fe(), Re("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": p.key
                }, [
                  ke("label", null, it(p.label), 1),
                  ke("div", Bk, [
                    (Fe(!0), Re(et, null, Pt(p.fields, (D) => (Fe(), Re("div", {
                      key: D.key,
                      class: "pano-axis-field"
                    }, [
                      ke("span", {
                        class: gt(["pano-axis", { disabled: a(D, e.model) }]),
                        title: D.label,
                        onPointerdown: (X) => l(X, D)
                      }, it(D.short), 43, Uk),
                      ke("input", {
                        ref_for: !0,
                        ref: (X) => {
                          s[D.key] = X;
                        },
                        type: "number",
                        min: D.min,
                        max: D.max,
                        step: D.step,
                        value: D.displayValue,
                        disabled: a(D, e.model),
                        "aria-label": `${p.label} ${D.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": D.key
                      }, null, 8, Yk)
                    ]))), 128))
                  ])
                ], 8, Kk)) : (Fe(), Re("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": p.key
                }, [
                  ke("label", null, it(p.label), 1),
                  ke("input", {
                    type: "range",
                    min: p.fields[0].min,
                    max: p.fields[0].max,
                    step: p.fields[0].step,
                    value: p.fields[0].value,
                    disabled: a(p.fields[0], e.model),
                    style: It(o(p.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": p.fields[0].key
                  }, null, 12, Xk),
                  ke("input", {
                    type: "number",
                    min: p.fields[0].min,
                    max: p.fields[0].max,
                    step: p.fields[0].step,
                    value: p.fields[0].displayValue,
                    disabled: a(p.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": p.fields[0].key
                  }, null, 8, Jk)
                ], 8, qk))
              ], 64))), 128))
            ], 2),
            Ke(xk, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (p) => n("timeline", p))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Fe(), Re("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ke("summary", null, [
                d[5] || (d[5] = ke("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ke("span", Qk, [
                  Ke(Lt, {
                    icon: nt(je).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ke("div", eM, [
                ke("div", tM, [
                  d[6] || (d[6] = ke("label", null, "Drag X", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, rM),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, iM)
                  ], 8, nM)
                ]),
                ke("div", oM, [
                  d[7] || (d[7] = ke("label", null, "Drag Y", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, sM),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, lM)
                  ], 8, aM)
                ]),
                d[8] || (d[8] = ke("div", { class: "pano-ui-row" }, [
                  ke("span"),
                  ke("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Zk)) : pt("", !0)
          ])
        ])) : pt("", !0),
        (e.model.footerButtons || []).length ? (Fe(), Re("div", cM, [
          (Fe(!0), Re(et, null, Pt(e.model.footerButtons, (p) => (Fe(), Re("button", {
            key: p.action,
            class: gt(["pano-btn", { "pano-btn-primary": p.primary === !0 }]),
            type: "button",
            "data-action": p.action
          }, it(p.label), 11, uM))), 128))
        ])) : pt("", !0)
      ]);
    };
  }
}, fM = { class: "pano-timeline-bar" }, pM = ["aria-label", "data-tip"], hM = ["aria-label", "data-tip"], mM = { class: "pano-timeline-time" }, gM = ["data-tip"], yM = { key: 0 }, bM = ["min", "max", "value"], vM = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, _M = ["max", "value"], SM = ["aria-expanded"], wM = ["inert"], xM = { class: "pano-timeline-name" }, kM = ["aria-pressed", "aria-label", "data-tip", "onClick"], MM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, PM = ["disabled", "aria-expanded", "aria-label", "onClick"], NM = ["title", "aria-current", "onClick"], CM = ["data-keyed", "aria-label", "onClick"], AM = ["onPointerdown"], IM = ["onPointerdown"], EM = ["onPointerdown"], OM = ["onPointerdown"], FM = ["aria-label", "data-tip", "onPointerdown"], TM = { key: 0 }, DM = ["onPointerdown"], LM = ["aria-label", "data-tip", "onPointerdown"], RM = { key: 0 }, VM = 10, $M = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ _s(0), playing: /* @__PURE__ */ _s(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Wt(null), o = /* @__PURE__ */ Wt(null), a = /* @__PURE__ */ Wt(1), s = /* @__PURE__ */ Wt(0), l = /* @__PURE__ */ Wt(!1);
    let u = null, d = null, c = null;
    ll(() => {
      u = new ResizeObserver(([Q]) => {
        a.value = Math.max(1, Q.contentRect.width);
      }), i.value && u.observe(i.value), d = new ResizeObserver(([Q]) => {
        s.value = Q.contentRect.height;
      }), o.value && d.observe(o.value);
    }), ha(() => {
      u == null || u.disconnect(), d == null || d.disconnect(), c == null || c();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), g = ut(() => r.playhead.frame.value), w = ut(() => r.playhead.playing.value), h = ut(() => Dv(g.value, Number(r.model.fps || 1))), p = ut(() => a.value / f.value), D = (Q) => `${Q / f.value * 100}%`, X = ut(() => Yv(f.value, p.value));
    function z(Q) {
      const K = i.value.getBoundingClientRect(), E = Math.floor((Q - K.left) / Math.max(1, K.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, E));
    }
    function Y(Q, K, E) {
      const G = Math.ceil(VM / Math.max(1e-6, p.value)), O = new Map(K.map((q) => [q.frame, q.full]));
      return qv(K.map((q) => q.frame), G).map((q, me) => ({
        ...q,
        key: `${Q}:${me}`,
        partial: q.frames.some((_e) => !O.get(_e)),
        selected: q.frames.some((_e) => E.includes(_e))
      }));
    }
    const C = ut(() => {
      const Q = /* @__PURE__ */ new Map();
      for (const K of r.model.rows || []) {
        Q.set(K.id, Y(K.id, K.keys, K.selectedFrames));
        for (const E of K.lanes) Q.set(E.key, Y(E.key, E.frames.map((G) => ({ frame: G, full: !0 })), E.selectedFrames));
      }
      return Q;
    });
    function re(Q) {
      const K = Q.end === null ? f.value : Q.end;
      return { left: D(Q.start), width: D(Math.max(0, K - Q.start)) };
    }
    function L(Q, K) {
      const E = Q.clientX, G = Math.max(1e-6, p.value);
      let O = 0;
      K("start", 0, Q);
      const q = (_e) => {
        if (_e.pointerId !== Q.pointerId) return;
        const te = Math.round((_e.clientX - E) / G);
        te !== O && (O = te, K("move", O, _e));
      }, me = (_e) => {
        _e.pointerId === Q.pointerId && (c(), K("end", O, _e));
      };
      c == null || c(), c = () => {
        window.removeEventListener("pointermove", q), window.removeEventListener("pointerup", me), window.removeEventListener("pointercancel", me), c = null;
      }, window.addEventListener("pointermove", q), window.addEventListener("pointerup", me), window.addEventListener("pointercancel", me);
    }
    function ne(Q) {
      Q.button === 0 && L(Q, (K, E, G) => n("action", { type: "seek", frame: z(G.clientX), phase: K }));
    }
    function U(Q, K, E) {
      Q.button === 0 && (n("action", { type: "select-row", id: K.id }), L(Q, (G, O) => n("action", { type: "clip", id: K.id, mode: E, delta: O, phase: G })));
    }
    function de(Q, K, E, G, O) {
      if (Q.button === 0) {
        if (Q.shiftKey) {
          n("action", { type: "select-keys", owner: K.id, lane: E, frames: G.frames, additive: !0 });
          return;
        }
        G.frames.every((q) => O.includes(q)) || n("action", { type: "select-keys", owner: K.id, lane: E, frames: G.frames, additive: !1 }), L(Q, (q, me) => n("action", { type: "move-keys", delta: me, phase: q }));
      }
    }
    const V = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function ae(Q, K, E) {
      n("action", K), await al(), Q.target.value = E();
    }
    function H(Q) {
      ae(Q, { type: "fps", fps: Number(Q.target.value) }, () => V.value);
    }
    function J(Q) {
      const K = Q.target.value.trim();
      ae(Q, { type: "length", length: K ? Number(K) : null }, () => r.model.length ?? "");
    }
    function $(Q, K, E) {
      Q.button !== 0 || Q.target !== Q.currentTarget || n("action", { type: "select-keys", owner: K.id, lane: E, frames: [], additive: !1 });
    }
    return (Q, K) => Fr((Fe(), Re("section", {
      class: gt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      ke("div", fM, [
        ke("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": w.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": w.value ? "Pause (Space)" : "Play (Space)",
          onClick: K[0] || (K[0] = (E) => n("action", { type: "play" }))
        }, [
          Ke(Lt, {
            icon: w.value ? nt(je).pause : nt(je).play
          }, null, 8, ["icon"])
        ], 8, pM),
        e.model.hasAudio ? (Fe(), Re("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: K[1] || (K[1] = (E) => n("action", { type: "mute" }))
        }, [
          Ke(Lt, {
            icon: e.model.muted ? nt(je).volume_muted : nt(je).volume2
          }, null, 8, ["icon"])
        ], 8, hM)) : pt("", !0),
        ke("span", mM, it(h.value), 1),
        ke("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Fe(), Re("span", yM, it(V.value), 1)) : (Fe(), Re("input", {
            key: 1,
            type: "number",
            min: nt(Dh),
            max: nt(Vu),
            step: "any",
            value: V.value,
            "aria-label": "Timeline fps",
            onChange: H
          }, null, 40, bM)),
          K[6] || (K[6] = ke("span", null, "fps", -1))
        ], 8, gM),
        ke("label", vM, [
          K[7] || (K[7] = ke("span", null, "Length", -1)),
          ke("input", {
            type: "number",
            min: "1",
            max: nt($u),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: J
          }, null, 40, _M)
        ]),
        ke("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: K[2] || (K[2] = (E) => n("action", { type: "toggle-expanded" }))
        }, [
          K[8] || (K[8] = ke("span", null, "Timeline", -1)),
          Ke(Lt, {
            icon: nt(je).chevron
          }, null, 8, ["icon"])
        ], 8, SM)
      ]),
      ke("div", {
        class: gt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: It({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: K[3] || (K[3] = Ct((E) => l.value = !0, ["self"])),
        onTransitionend: K[4] || (K[4] = Ct((E) => l.value = !1, ["self"])),
        onTransitioncancel: K[5] || (K[5] = Ct((E) => l.value = !1, ["self"]))
      }, [
        ke("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          K[9] || (K[9] = ke("div", { class: "pano-timeline-corner" }, null, -1)),
          ke("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ne
          }, [
            (Fe(!0), Re(et, null, Pt(X.value, (E) => (Fe(), Re("span", {
              key: E,
              class: "pano-timeline-tick",
              style: It({ left: D(E) })
            }, it(E), 5))), 128)),
            ke("span", {
              class: "pano-timeline-playhead",
              style: It({ left: D(g.value + 0.5) })
            }, null, 4)
          ], 544),
          (Fe(!0), Re(et, null, Pt(e.model.rows || [], (E) => (Fe(), Re(et, {
            key: E.id
          }, [
            ke("div", {
              class: gt(["pano-timeline-head", { selected: E.selected, "is-hidden": !E.visible }])
            }, [
              ke("div", xM, [
                E.hideable ? (Fe(), Re("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": E.visible ? "true" : "false",
                  "aria-label": `${E.label} visible`,
                  "data-tip": E.visible ? "Hide" : "Show",
                  onClick: Ct((G) => n("action", { type: "toggle-visible", id: E.id }), ["stop"])
                }, [
                  Ke(Lt, {
                    icon: E.visible ? nt(je).eye : nt(je).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, kM)) : (Fe(), Re("span", MM)),
                ke("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !E.keyable,
                  "aria-expanded": E.open ? "true" : "false",
                  "aria-label": E.open ? `Hide ${E.label} parameters` : `Show ${E.label} parameters`,
                  onClick: Ct((G) => n("action", { type: "toggle-row", id: E.id }), ["stop"])
                }, [
                  Ke(Lt, {
                    icon: nt(je).chevron
                  }, null, 8, ["icon"])
                ], 8, PM),
                ke("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: E.label,
                  "aria-current": E.selected ? "true" : void 0,
                  onClick: (G) => n("action", { type: "select-row", id: E.id })
                }, [
                  Ke(Lt, {
                    icon: E.icon
                  }, null, 8, ["icon"]),
                  ke("span", null, it(E.label), 1)
                ], 8, NM),
                E.keyable ? (Fe(), Re("button", {
                  key: 2,
                  class: gt(["pano-timeline-key", { keyed: nt(Zl)(E.keys, g.value) }]),
                  type: "button",
                  "data-keyed": nt(Zl)(E.keys, g.value) ? "true" : "false",
                  "aria-label": nt(Zl)(E.keys, g.value) ? `Every ${E.label} parameter has a keyframe here; update them` : `Add keyframes for every ${E.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ct((G) => n("action", { type: "key-row", owner: E.id }), ["stop"])
                }, [
                  Ke(Lt, {
                    icon: nt(je).keyframe
                  }, null, 8, ["icon"])
                ], 10, CM)) : pt("", !0)
              ]),
              E.open ? (Fe(!0), Re(et, { key: 0 }, Pt(E.lanes, (G) => (Fe(), Re("div", {
                key: G.key,
                class: "pano-timeline-lane-head"
              }, it(G.label), 1))), 128)) : pt("", !0)
            ], 2),
            ke("div", {
              class: gt(["pano-timeline-track", { selected: E.selected }])
            }, [
              ke("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (G) => $(G, E, null)
              }, [
                E.clip ? (Fe(), Re("div", {
                  key: 0,
                  class: gt(["pano-timeline-clip", { open: E.clip.end === null }]),
                  style: It(re(E.clip)),
                  onPointerdown: Ct((G) => U(G, E, "move"), ["stop"])
                }, [
                  ke("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ct((G) => U(G, E, "start"), ["stop"])
                  }, null, 40, EM),
                  ke("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ct((G) => U(G, E, "end"), ["stop"])
                  }, null, 40, OM)
                ], 46, IM)) : pt("", !0),
                (Fe(!0), Re(et, null, Pt(C.value.get(E.id), (G) => (Fe(), Re("button", {
                  key: G.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: G.selected, cluster: G.frames.length > 1, partial: G.partial }]),
                  style: It({ left: D(G.frame + 0.5) }),
                  "aria-label": `${E.label}: ${G.frames.length > 1 ? `${G.frames.length} keyframes` : `keyframe at frame ${G.frames[0]}`}`,
                  "data-tip": G.frames.length > 1 ? `${G.frames.length} keyframes` : `Frame ${G.frames[0]}`,
                  onPointerdown: Ct((O) => de(O, E, null, G, E.selectedFrames), ["stop"])
                }, [
                  G.frames.length > 1 ? (Fe(), Re("span", TM, it(G.frames.length), 1)) : pt("", !0)
                ], 46, FM))), 128))
              ], 40, AM),
              E.open ? (Fe(!0), Re(et, { key: 0 }, Pt(E.lanes, (G) => (Fe(), Re("div", {
                key: G.key,
                class: "pano-timeline-lane",
                onPointerdown: (O) => $(O, E, G.lane)
              }, [
                (Fe(!0), Re(et, null, Pt(C.value.get(G.key), (O) => (Fe(), Re("button", {
                  key: O.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1 }]),
                  style: It({ left: D(O.frame + 0.5) }),
                  "aria-label": `${G.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Ct((q) => de(q, E, G.lane, O, G.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (Fe(), Re("span", RM, it(O.frames.length), 1)) : pt("", !0)
                ], 46, LM))), 128))
              ], 40, DM))), 128)) : pt("", !0),
              ke("span", {
                class: "pano-timeline-playhead",
                style: It({ left: D(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, wM)
    ], 2)), [
      [_i, e.model.visible]
    ]);
  }
}, zM = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: It({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, it(e.model.text || ""), 7));
  }
}, jM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, HM = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", jM, [
      (Fe(!0), Re(et, null, Pt(e.buttons, (n) => Fr((Fe(), Dn(qt, {
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
        [_i, n.visible !== !1]
      ])), 128))
    ]));
  }
}, GM = ["data-video-ready"], WM = { class: "pano-video-transport-shell" }, KM = { class: "pano-video-controls-left" }, BM = { class: "pano-video-filmstrip" }, UM = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, YM = ["src", "onLoad"], qM = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, XM = ["max", "value", "disabled"], JM = { class: "pano-video-controls-right" }, ZM = ["data-has-audio"], QM = { class: "pano-video-volume-pop" }, eP = ["value", "disabled"], tP = {
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
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? je.pause : je.play;
    }), o = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? je.loop_off : je.loop;
    }), l = ut(() => {
      var C, re;
      return ((C = t.state) == null ? void 0 : C.muted) === !0 || Number(((re = t.state) == null ? void 0 : re.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), u = ut(() => {
      var C, re, L;
      return ((C = t.state) == null ? void 0 : C.hasAudio) !== !0 ? je.volume : ((re = t.state) == null ? void 0 : re.muted) === !0 || Number(((L = t.state) == null ? void 0 : L.volume) ?? 1) <= 0 ? je.volume_muted : je.volume2;
    }), d = ut(() => {
      var C;
      return Math.max(0, Math.min(100, Number(((C = t.state) == null ? void 0 : C.progressPct) || 0)));
    }), c = ut(() => ({ left: `${d.value}%` })), f = ut(() => {
      var ne, U;
      const C = (ne = t.state) == null ? void 0 : ne.volumePct, re = Number(((U = t.state) == null ? void 0 : U.volume) ?? 1) * 100, L = Number(C ?? re ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, L))}%`
      };
    }), g = ut(() => {
      var L, ne;
      const re = [
        String(((L = t.state) == null ? void 0 : L.currentTimeLabel) || "0:00"),
        String(((ne = t.state) == null ? void 0 : ne.durationLabel) || "0:00")
      ].reduce((U, de) => Math.max(U, de.length), 4);
      return `${Math.max(4, re)}ch`;
    }), w = ut(() => ({ "--pano-video-time-ch": g.value })), h = ut(() => {
      var L, ne;
      const C = Array.isArray((L = t.state) == null ? void 0 : L.thumbnails) ? t.state.thumbnails : [];
      if (C.length) return C;
      const re = Math.max(7, Number(((ne = t.state) == null ? void 0 : ne.thumbnailCount) || 9));
      return Array.from({ length: re }, (U, de) => ({
        id: `placeholder-${de}`,
        src: "",
        label: ""
      }));
    }), p = /* @__PURE__ */ Wt(/* @__PURE__ */ new Set()), D = (C) => String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.src) || (C == null ? void 0 : C.label) || ""), X = (C) => p.value.has(D(C)), z = (C) => {
      const re = new Set(p.value);
      re.add(D(C)), p.value = re;
    };
    gi(h, (C) => {
      const re = new Set(C.map(D)), L = /* @__PURE__ */ new Set();
      for (const ne of p.value)
        re.has(ne) && L.add(ne);
      p.value = L;
    }, { immediate: !0 });
    const Y = ut(() => {
      var C;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((C = t.state) == null ? void 0 : C.shellMaxWidthPx) || 640))}px`
      };
    });
    return (C, re) => (Fe(), Re("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: It(Y.value)
    }, [
      re[1] || (re[1] = ke("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      re[2] || (re[2] = ke("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ke("div", WM, [
        ke("div", KM, [
          Ke(qt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ke("div", {
            class: "pano-video-time pano-video-time-start",
            style: It(w.value)
          }, it(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ke("div", BM, [
          ke("div", UM, [
            (Fe(!0), Re(et, null, Pt(h.value, (L) => (Fe(), Re("div", {
              key: D(L),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !L.src,
                "is-loaded": L.src && X(L)
              }])
            }, [
              L.src ? (Fe(), Re("img", {
                key: 0,
                src: L.src,
                alt: "",
                draggable: "false",
                onLoad: (ne) => z(L)
              }, null, 40, YM)) : (Fe(), Re("span", qM))
            ], 2))), 128))
          ]),
          ke("div", {
            class: "pano-video-playhead",
            style: It(c.value),
            "aria-hidden": "true"
          }, [...re[0] || (re[0] = [
            ke("span", { class: "pano-video-playhead-line" }, null, -1),
            ke("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ke("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, XM)
        ]),
        ke("div", JM, [
          ke("div", {
            class: "pano-video-time pano-video-time-end",
            style: It(w.value)
          }, it(e.state.durationLabel || "0:00"), 5),
          Ke(qt, {
            "extra-class": "pano-video-control",
            icon: s.value,
            label: o.value,
            tip: a.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ke("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ke("div", QM, [
              ke("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: It(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, eP)
            ]),
            Ke(qt, {
              "extra-class": "pano-video-control",
              icon: u.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, ZM)
        ])
      ])
    ], 14, GM));
  }
}, nP = { class: "pano-floating-top" }, rP = ["data-selected", "data-view-count"], iP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], oP = { class: "label" }, aP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Fe(), Re("div", nP, [
        ke("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Fe(!0), Re(et, null, Pt(e.buttons, (i) => Fr((Fe(), Re("button", {
            key: i.key,
            class: gt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ke(Lt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            ke("span", oP, it(i.label), 1)
          ], 10, iP)), [
            [_i, i.visible !== !1]
          ])), 128))
        ], 8, rP)
      ]);
    };
  }
};
function wg(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: je.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: je.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: je.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: je.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: je.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: je.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: je.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: je.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: je.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: je.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: je.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: je.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: je.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: je.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: je.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: je.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: je.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: je.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: je.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: je.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: je.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: je.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: je.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: je.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: je.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: je.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: je.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: je.lasso_tool }
        ]
      }
    ]
  };
}
const sP = ["aria-label"], lP = { class: "pano-stage-column" }, cP = { class: "pano-stage-wrap" }, uP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, dP = {
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
    let o = "", a = !1, s = null;
    const l = /* @__PURE__ */ Wt(null), u = /* @__PURE__ */ Wt(null), d = /* @__PURE__ */ Wt(null);
    function c() {
      var V, ae;
      return ((ae = (V = d.value) == null ? void 0 : V.getRefs) == null ? void 0 : ae.call(V)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(V) {
      var ae, H;
      return ((H = (ae = u.value) == null ? void 0 : ae.open) == null ? void 0 : H.call(ae, V)) === !0;
    }
    function g(V) {
      i("image-file-selected", V);
    }
    function w(V) {
      i("image-file-cancelled", V);
    }
    t({ getPaintOverlayRefs: c, openImagePicker: f });
    const h = ut(() => n.readOnly === !0), p = ut(() => n.shellPreset || wg(n.type)), D = ut(() => {
      var ae, H, J;
      const V = String((((ae = n.uiState) == null ? void 0 : ae.stageStatus) === "failed" ? (H = n.uiState) == null ? void 0 : H.stageStatusDetail : (J = n.uiState) == null ? void 0 : J.stageWarningDetail) ?? "");
      return V === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : V === "stickers" ? "One or more sticker previews are unavailable." : V === "frame" ? "The editor hit a rendering error. Check the browser console for details." : V === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : V.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), X = ut(() => {
      var V, ae, H;
      return ((V = n.uiState) == null ? void 0 : V.stageStatus) === "failed" || (ae = n.uiState) != null && ae.stageWarningDetail ? D.value : (H = n.uiState) == null ? void 0 : H.stageNotice;
    }), z = ut(() => {
      var ae;
      const V = Array.isArray((ae = p.value) == null ? void 0 : ae.floatingButtons) ? p.value.floatingButtons.slice() : [];
      return h.value && V.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: je.fullscreen
      }), V;
    });
    function Y() {
      const V = l.value;
      return V ? Array.from(V.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ae) => ae instanceof HTMLElement ? !ae.hidden && ae.tabIndex >= 0 && ae.offsetParent !== null : !1) : [];
    }
    function C() {
      var H;
      const ae = Y()[0] || l.value;
      (H = ae == null ? void 0 : ae.focus) == null || H.call(ae);
    }
    function re() {
      var V;
      s != null && s.isConnected && ((V = s.focus) == null || V.call(s)), s = null;
    }
    function L(V) {
      var ae, H, J, $;
      if (!V.defaultPrevented) {
        if (V.key === "Tab") {
          const Q = Y();
          if (!Q.length) {
            V.preventDefault(), (H = (ae = l.value) == null ? void 0 : ae.focus) == null || H.call(ae);
            return;
          }
          const K = Q[0], E = Q[Q.length - 1], G = document.activeElement;
          if (V.shiftKey) {
            (G === K || G === l.value || !((J = l.value) != null && J.contains(G))) && (V.preventDefault(), E.focus());
            return;
          }
          (G === E || !(($ = l.value) != null && $.contains(G))) && (V.preventDefault(), K.focus());
          return;
        }
        V.key === "Escape" && i("close");
      }
    }
    function ne() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function U() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function de(V) {
      document.removeEventListener("keydown", L), V ? (s || (s = document.activeElement), ne(), document.addEventListener("keydown", L), al(() => {
        C();
      })) : (U(), re());
    }
    return ll(() => {
      de(n.open);
    }), ha(() => {
      U(), document.removeEventListener("keydown", L), re();
    }), gi(() => n.open, (V) => {
      de(V);
    }), (V, ae) => e.open ? (Fe(), Re("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ae[2] || (ae[2] = Ct((H) => i("close"), ["self"]))
    }, [
      ke("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ke("div", lP, [
          ke("div", cP, [
            ae[3] || (ae[3] = ke("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ae[4] || (ae[4] = ke("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ae[5] || (ae[5] = ke("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Fe(), Re("div", uP, it(X.value), 1)) : pt("", !0),
            ae[6] || (ae[6] = ke("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              ke("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ke(ek, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ke(eg, {
              ref_key: "imageFilePickerRef",
              ref: u,
              onFileSelected: g,
              onFileCancelled: w
            }, null, 512),
            h.value ? pt("", !0) : (Fe(), Re(et, { key: 1 }, [
              Ke(HM, {
                buttons: e.uiState.toolButtons || p.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ke(kx, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ke(Qx, {
                "paint-swatches": e.paintSwatches,
                panes: p.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ke(tP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ke(aP, {
              buttons: e.uiState.viewButtons || p.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ke(vx, {
              buttons: e.uiState.floatingButtons || z.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ke(lk, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ke(zM, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ke(Ix, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ke($M, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ae[0] || (ae[0] = (H) => i("timeline", H))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? pt("", !0) : (Fe(), Dn(dM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ae[1] || (ae[1] = (H) => i("timeline", H))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, sP)
    ])) : pt("", !0);
  }
}, qn = "loading", da = "ready", zn = "failed";
function xg(e, t = "") {
  return e && (e.__panoLoadState = qn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function kg(e, t = "") {
  return e && (e.__panoLoadState = da, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Mg(e, t = "") {
  return e && (e.__panoLoadState = zn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ru(e, t) {
  return e ? e.__panoLoadState === zn ? zn : typeof t == "function" && t(e) ? da : qn : da;
}
function iu(e) {
  return ru(e) === zn;
}
function fP({ presented: e, background: t = da, stickers: r = [] } = {}) {
  if (!e) return { status: qn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === qn, o = n.includes(qn);
  if (i && o) return { status: qn, detail: "mixed" };
  if (i) return { status: qn, detail: "background" };
  if (o) return { status: qn, detail: "stickers" };
  const a = t === zn, s = n.includes(zn);
  return a && s ? { status: zn, detail: "mixed" } : a ? { status: zn, detail: "background" } : s ? { status: zn, detail: "stickers" } : { status: da, detail: "" };
}
const pP = "state_json", hP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), vd = "sticker_image_1", mP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), Pg = 0.01, gP = "external_image", io = "pano_sticker_input_images", Ng = "pano_sticker_input_videos", Cg = "pano_sticker_input_frames", Ag = "pano_sticker_input_video_meta", yP = !0, wl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], mr = Math.PI / 180, xi = 180 / Math.PI, ou = 1, Ig = "rgb(255, 221, 87)", bP = "rgb(228, 228, 231)", vP = "rgb(180, 150, 60)", _P = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, SP = 64, ep = 40, lc = 16, wP = 0.45, tp = 180, xP = 160, Xs = 24, kP = 4, MP = 4;
function cc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function PP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function NP(e, t, r) {
  const n = Ie((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function CP(e) {
  return e * e * e;
}
function xl(e, t, r) {
  return { x: e, y: t, z: r };
}
function np(e, t) {
  return xl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function rp(e, t) {
  return xl(e.x * t, e.y * t, e.z * t);
}
function uc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function AP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return xl(e.x / t, e.y / t, e.z / t);
}
function qa(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * xi),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * xi, -90, 90)
  };
}
function Br(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, a = t[n].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (r = !r);
  }
  return r;
}
function Ro(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function dc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return Ro(e, t);
  const l = Ie((o * n + a * i) / s, 0, 1), u = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, c = Number(e.x || 0) - u, f = Number(e.y || 0) - d;
  return c * c + f * f;
}
function $n(e, t, r) {
  return e + (t - e) * r;
}
function cr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ie(r, 0, 1)})`;
}
function IP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Xa = { fillStyle: "", url: "" };
function EP(e, t, r) {
  if (Xa.url && Xa.fillStyle === String(e || ""))
    return Xa.url;
  const n = IP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Xs}" height="${Xs}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Xa = { fillStyle: String(e || ""), url: n }, n;
}
function Js(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function On(e) {
  return {
    r: Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ie(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function cn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function OP(e) {
  return wl.some((t) => Js(e, t.color));
}
function au(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ie(Number(t), 0, 1), o = Ie(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), u = o * (1 - s * i), d = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: d, b: l };
    case 1:
      return { r: u, g: o, b: l };
    case 2:
      return { r: l, g: o, b: d };
    case 3:
      return { r: l, g: u, b: o };
    case 4:
      return { r: d, g: l, b: o };
    default:
      return { r: o, g: l, b: u };
  }
}
function su(e) {
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Zi(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function FP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function ip(e) {
  const { paintCount: t, maskCount: r } = FP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return n.forEach((a) => {
    String((a == null ? void 0 : a.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: r + o
  };
}
function Eg(e, t, r, n, i) {
  const o = r.bbox, a = r.transform || {}, s = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, u = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), c = s + u * 0.5 + Number(a.du || 0) * n, f = l + d * 0.5 + Number(a.dv || 0) * i, g = Number(a.rot_deg || 0) * mr, w = Math.max(0.01, Number(a.scale || 1));
  for (const h of [-n, 0, n])
    e.save(), e.translate(c + h, f), e.rotate(g), e.scale(w, w), e.drawImage(t, -u * 0.5, -d * 0.5, u, d), e.restore();
}
function Gi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ja(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function TP(e, t) {
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
function fi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function DP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function LP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function RP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Og = "pano_suite.ui_settings.v1", Fg = "pano_suite.node_grid_visibility.v1";
let zi = null, or = null;
function vs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function VP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Og)) || "").trim();
    if (!t) return zi ? vs(zi) : null;
    const r = JSON.parse(t), n = vs(r);
    return zi = n, n;
  } catch {
    return zi ? vs(zi) : null;
  }
}
function $P(e) {
  var r;
  const t = vs(e);
  zi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Og, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Tg() {
  var e;
  if (or && typeof or == "object")
    return or;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Fg)) || "").trim();
    if (!t)
      return or = {}, or;
    const r = JSON.parse(t);
    return or = r && typeof r == "object" ? r : {}, or;
  } catch {
    return or = {}, or;
  }
}
function zP(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = Tg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function jP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = Tg();
  n[r] = !!t, or = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Fg, JSON.stringify(n));
  } catch {
  }
}
function HP(e, t) {
  const r = { ...e }, n = t.map((i) => i(fc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(fc(r, t[o].name))), fc(r, "showEditor");
}
function fc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const lu = 0.5, Dg = "PANO_SCENE";
function GP(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: $r(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function WP(e, t, r) {
  return e * r / t;
}
function KP(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: In(e("pano_upstream_coverage")[0])
  };
}
const BP = "bg_media is not used";
function UP(e, t) {
  return e === Dg && t === null;
}
function YP(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], a = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, s = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) s.has(l) || o.push({ kind: "group", id: l, zIndex: a });
  return r && o.push({ kind: "mask", id: "mask", zIndex: a }), o;
}
function Ir(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function op(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * lu };
}
function qP(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: a, ui: s } = e, l = ba(a, r), u = (h) => h.visible ? n(h) : null, d = bm(a, r, { media: u, zIndex: (h) => h.z_index, paintLayers: i, evaluated: l }).map((h) => op(h, t)), c = _m(a, r, a.stickers, { media: u, evaluated: l }).map((h) => op(h, t)), f = [], g = zs(Ir(s, "pano_scene_files"), Ir(s, "pano_scene_meta"), o);
  g && f.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: Zu(g, l.scene), value: l.scene, opacity: lu });
  const w = zs(Ir(s, "pano_sticker_files"), Ir(s, "pano_sticker_meta"), o);
  if (w) {
    const h = um(w, a, l);
    f.push({ slot: `${t}:sticker`, urls: dm(w, a), request: h, value: (h == null ? void 0 : h.value) ?? null, opacity: ((h == null ? void 0 : h.opacity) ?? 1) * lu });
  }
  return { evaluated: l, sky: d, stickers: c, items: f };
}
const qr = /* @__PURE__ */ new Map(), XP = 12;
function JP(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = qr.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (qr.delete(t), qr.set(t, r), r);
}
function ZP(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (qr.delete(r), qr.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); qr.size > XP; ) {
      const i = qr.keys().next().value;
      if (!i) break;
      qr.delete(i);
    }
}
function QP(e) {
  const {
    comfyMedia: t,
    editor: r,
    editorView: n,
    floatingRightEl: i,
    imageCache: o,
    loadPreferredExactLinkedImage: a,
    mediaAssetSource: s,
    mediaSource: l,
    mediaUiImage: u,
    node: d,
    portStillCanvas: c,
    portVideoEl: f,
    readOnly: g,
    runtime: w,
    scheduler: h,
    stageWrap: p,
    state: D,
    stateV2: X,
    stillCanvas: z,
    studio: Y,
    timelinePlayhead: C,
    type: re,
    uiState: L,
    videoEl: ne
  } = e;
  let U, de, V, ae, H, J;
  const $ = {
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
  }, Q = 9, K = [];
  let E = 0;
  const G = () => {
    var Ve, Z;
    const W = (Ve = p == null ? void 0 : p.getBoundingClientRect) == null ? void 0 : Ve.call(p), se = (Z = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : Z.call(i), Ne = Math.max(0, Number((W == null ? void 0 : W.width) || 0)), we = se ? Math.max(0, Number(se.width || 0)) : 0, Le = we > 0 ? we + 14 + 12 : 72, Ge = Math.max(280, Math.floor(Ne - Le * 2)), qe = r.fullscreen ? Math.min(1200, Ge) : Ge;
    L.videoTransport.shellMaxWidthPx = qe;
  }, O = () => {
    E || (E = h.requestFrame(() => {
      E = 0, G();
    }));
  }, q = (W) => {
    if (!(W instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(W.audioTracks) && W.audioTracks.length > 0 || W.audioTracks && typeof W.audioTracks.length == "number" && W.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof W.mozHasAudio == "boolean") return W.mozHasAudio;
    } catch {
    }
    try {
      if (Number(W.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!L.videoTransport.hasAudio;
  }, me = typeof ResizeObserver < "u" ? new ResizeObserver(() => O()) : null;
  me == null || me.observe(p), i && (me == null || me.observe(i)), K.push(() => {
    var W;
    E && (h.cancelFrame(E), E = 0), (W = me == null ? void 0 : me.disconnect) == null || W.call(me);
  }), O();
  const _e = () => {
    $.thumbnailJobId += 1, $.thumbnailSrc = "", L.videoTransport.thumbnails = [], L.videoTransport.thumbnailCount = Q;
  }, te = async (W, se, Ne) => {
    const we = String(W || "").trim();
    if (!we) {
      _e();
      return;
    }
    const Me = JP(we);
    if (Me) {
      $.thumbnailSrc = we, L.videoTransport.thumbnails = Me.thumbnails, L.videoTransport.thumbnailCount = Me.thumbnailCount;
      return;
    }
    const De = ++$.thumbnailJobId;
    $.thumbnailSrc = we, L.videoTransport.thumbnails = [], L.videoTransport.thumbnailCount = Q;
    const Le = ga(document, "editor.thumbnails");
    Le.preload = "auto", Le.muted = !0, Le.playsInline = !0, Le.crossOrigin = "anonymous";
    const Ge = en({ label: "editor.thumbnail" });
    try {
      const qe = await new Promise((tt) => {
        let ht = !1;
        const Nt = (vt) => {
          ht || (ht = !0, tt(vt));
        };
        Le.addEventListener("loadedmetadata", () => Nt(!0), { once: !0 }), Le.addEventListener("canplay", () => Nt(!0), { once: !0 }), Le.addEventListener("error", () => Nt(!1), { once: !0 }), Le.src = we, Le.load();
      });
      if ($.thumbnailJobId !== De) return;
      const Ve = Number(Le.videoWidth || 0), Z = Number(Le.videoHeight || 0);
      if (!qe || Ve < 1 || Z < 1) {
        $.thumbnailFailedSrcs.add(we);
        return;
      }
      const Oe = Math.max(0, Number(Le.duration || se || 0)), $e = 46, Ae = Math.max(72, Math.round(Ve / Z * $e));
      Ge.width = Ae, Ge.height = $e;
      const ze = Ge.getContext("2d");
      if (!ze) return;
      const He = [], Ue = (tt) => new Promise((ht) => {
        let Nt = !1;
        const vt = () => {
          Nt || (Nt = !0, ht());
        };
        Le.addEventListener("seeked", vt, { once: !0 }), Le.addEventListener("error", vt, { once: !0 });
        try {
          Le.currentTime = tt;
        } catch {
          vt();
        }
      });
      for (let tt = 0; tt < Q; tt += 1) {
        if ($.thumbnailJobId !== De) return;
        const ht = Q <= 1 ? 0 : tt / (Q - 1), Nt = Oe > 0 ? Math.max(0, Math.min(Oe - Math.max(1e-3, 0.5 / Math.max(1, Number(Ne || 24))), Oe * ht)) : 0;
        if (await Ue(Nt), $.thumbnailJobId !== De) return;
        ze.clearRect(0, 0, Ae, $e), ze.drawImage(Le, 0, 0, Ae, $e), He.push({
          id: `thumb-${tt}`,
          src: Ge.toDataURL("image/jpeg", 0.72),
          time: Nt,
          label: v(Nt)
        });
      }
      if ($.thumbnailJobId !== De) return;
      L.videoTransport.thumbnails = He, L.videoTransport.thumbnailCount = He.length || Q, ZP(we, {
        thumbnails: He,
        thumbnailCount: He.length || Q,
        duration: Oe,
        fps: Ne
      });
    } finally {
      Le.removeAttribute("src"), Le.load(), ea(Ge);
    }
  };
  K.push(() => {
    _e();
  });
  const N = Wm({
    video: ne instanceof HTMLVideoElement ? ne : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (W) => h.requestFrame(W),
      cancelFrame: (W) => h.cancelFrame(W)
    },
    fps: F,
    span: () => {
      if (X) return J();
      const W = Math.round(Number(L.videoTransport.duration || 0) * F());
      return ne.loop || !(W > 0) ? 1 / 0 : W;
    },
    loop: () => X,
    onFrame: (W) => {
      X ? V(W) : S(), de({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    },
    onCapture: () => {
      _() && (w.backgroundDirty = !0);
    },
    onChange: () => {
      S(), C.playing.value = N.playing, H(), de({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    }
  });
  K.push(() => N.dispose());
  const oe = X && f instanceof HTMLVideoElement ? ld({
    video: f,
    onCapture: () => {
      var Ne;
      const W = Number(f.videoWidth || 0), se = Number(f.videoHeight || 0);
      W < 1 || se < 1 || (c.width = W, c.height = se, (Ne = c.getContext("2d")) == null || Ne.drawImage(f, 0, 0), c.__panoFrameIdx += 1, de({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA }));
    },
    onChange: () => de({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  oe && K.push(() => oe.dispose());
  const ue = X ? id({
    createImage: (W, se) => {
      const Ne = new Image();
      return Ne.onload = se, Ne.onerror = se, Ne.src = W, Ne;
    },
    onLoad: () => de({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  if (ne instanceof HTMLVideoElement) {
    const W = () => {
      B(), de({ cause: "frame_view", localOnly: !0 });
    }, se = () => {
      S({
        hasAudio: L.videoTransport.hasAudio,
        muted: ne.muted,
        volume: Number(ne.volume ?? L.videoTransport.volume ?? 1)
      });
    }, Ne = () => {
      const we = ne.dataset.panoSrc;
      we && ($.failedSrcs.add(we), B(), de());
    };
    for (const [we, Me] of [
      ["loadedmetadata", W],
      ["loadeddata", W],
      ["canplay", W],
      ["volumechange", se],
      ["error", Ne]
    ])
      ne.addEventListener(we, Me), K.push(() => ne.removeEventListener(we, Me));
  }
  function be(W) {
    return t.uiList(d, W);
  }
  function ve(W) {
    return t.uiValue(d, W);
  }
  function A() {
    const W = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Os(W))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const se = m();
    return se ? { videoKey: se.videoKey, metaKey: se.metaKey } : re === "stickers" || re === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ce() {
    const { metaKey: W } = A(), se = ve(W);
    return Array.isArray(se) && se.length > 0 && se[0] && typeof se[0] == "object" ? se[0] : se && typeof se == "object" ? se : null;
  }
  function y(W) {
    return W ? W instanceof HTMLVideoElement ? [
      String(W.currentSrc || W.src || ""),
      Number(W.videoWidth || 0),
      Number(W.videoHeight || 0)
    ].join("|") : W instanceof HTMLCanvasElement ? [
      "canvas",
      Number(W.width || 0),
      Number(W.height || 0),
      String(W.__panoFrameIdx || 0)
    ].join("|") : [
      String(W.currentSrc || W.src || ""),
      Number(W.naturalWidth || W.width || 0),
      Number(W.naturalHeight || W.height || 0)
    ].join("|") : "none";
  }
  function v(W) {
    const se = Math.max(0, Math.floor(Number(W || 0))), Ne = Math.floor(se / 60), we = se % 60;
    return `${Ne}:${String(we).padStart(2, "0")}`;
  }
  function F() {
    return X ? D.timeline.fps : $.metaFps || 1e3;
  }
  function S(W = {}) {
    const se = Number(W.duration ?? L.videoTransport.duration ?? 0), Ne = Math.max(1, Number(W.fps ?? L.videoTransport.fps ?? 24)), we = N.frame / F(), Me = Object.prototype.hasOwnProperty.call(W, "ready") ? !!W.ready : !!L.videoTransport.ready, De = N.playing, Le = Object.prototype.hasOwnProperty.call(W, "visible") ? !!W.visible : !!L.videoTransport.visible, Ge = Object.prototype.hasOwnProperty.call(W, "muted") ? !!W.muted : !!(ne instanceof HTMLVideoElement ? ne.muted : L.videoTransport.muted), qe = Number(
      Object.prototype.hasOwnProperty.call(W, "volume") ? W.volume : ne instanceof HTMLVideoElement ? ne.volume : L.videoTransport.volume
    ), Ve = Object.prototype.hasOwnProperty.call(W, "hasAudio") ? !!W.hasAudio : q(ne), Z = Object.prototype.hasOwnProperty.call(W, "loop") ? !!W.loop : !!L.videoTransport.loop;
    Object.assign(L.videoTransport, {
      ready: Me,
      playing: De,
      visible: Le,
      loop: Z,
      currentTime: Number.isFinite(we) ? we : 0,
      duration: Number.isFinite(se) ? se : 0,
      progressPct: se > 1e-6 ? Math.max(0, Math.min(100, we / se * 100)) : 0,
      currentTimeLabel: v(we),
      durationLabel: v(se),
      frameCount: Math.max(0, Number(W.frameCount ?? L.videoTransport.frameCount ?? 0)),
      fps: Ne,
      hasAudio: Ve,
      muted: Ge,
      volume: Math.max(0, Math.min(1, Number.isFinite(qe) ? qe : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(qe) ? qe : 1)) * 100),
      thumbnails: Array.isArray(W.thumbnails) ? W.thumbnails : L.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(W.thumbnailCount ?? L.videoTransport.thumbnailCount ?? Q))
    });
  }
  function j() {
    return !!(ne instanceof HTMLVideoElement && !X && ne.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function x() {
    if (!(ne instanceof HTMLVideoElement) || !L.videoTransport.hasAudio) return;
    const W = !ne.muted;
    ne.muted = W, !W && Number(ne.volume || 0) <= 0 && (ne.volume = Math.max(0.01, Number(L.videoTransport.volume || 1))), S({
      hasAudio: L.videoTransport.hasAudio,
      muted: ne.muted,
      volume: Number(ne.volume ?? L.videoTransport.volume ?? 1)
    });
  }
  function R() {
    S({
      visible: j()
    });
  }
  function _() {
    if (!(ne instanceof HTMLVideoElement) || Number(ne.videoWidth || 0) < 1 || Number(ne.videoHeight || 0) < 1) return !1;
    const W = Number(ne.videoWidth || 0), se = Number(ne.videoHeight || 0);
    (z.width !== W || z.height !== se) && (z.width = W, z.height = se);
    const Ne = z.getContext("2d");
    return Ne ? (Ne.clearRect(0, 0, W, se), Ne.drawImage(ne, 0, 0, W, se), z.__panoFrameIdx = Number(z.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function P() {
    return !N.showsVideo && Number(z.width || 0) > 0 && Number(z.height || 0) > 0 && Number(z.__panoFrameIdx || 0) > 0 ? z : ne instanceof HTMLVideoElement && Number(ne.videoWidth || 0) > 0 && Number(ne.videoHeight || 0) > 0 && Number(ne.readyState || 0) >= 2 ? ne : null;
  }
  function I() {
    z.__panoFrameIdx = 0, w.backgroundDirty = !0;
  }
  function B() {
    if (!(ne instanceof HTMLVideoElement)) return null;
    const { videoKey: W } = A(), se = (m() || Yt(d, "background")) && be(W)[0] || null, Ne = l(se), we = [Ne, t.linkedVideoFile(d, M())].filter(Boolean), Me = we.find((Oe) => !$.failedSrcs.has(Oe)) || "";
    $.videoFailed = !Me && we.length > 0;
    const De = Me && Me === Ne ? ce() : null;
    $.metaFps = Number(De == null ? void 0 : De.fps) > 0 ? Number(De.fps) : 0;
    const Le = Math.max(1, Number((De == null ? void 0 : De.fps) || (X ? D.timeline.fps : 24))), Ge = ne.dataset.panoSrc === Me && Number.isFinite(ne.duration) ? ne.duration : 0, qe = Number((De == null ? void 0 : De.duration) || ((De == null ? void 0 : De.frames) > 0 ? De.frames / Le : Ge)), Ve = Math.max(0, Number((De == null ? void 0 : De.frames) || Math.round(qe * Le))), Z = !!(De != null && De.has_audio) || q(ne);
    return Me && ne.dataset.panoSrc !== Me ? (ne.pause(), I(), ne.dataset.panoSrc = Me, ne.loop = !X && !!L.videoTransport.loop, ne.muted = !!L.videoTransport.muted, ne.volume = Math.max(0, Math.min(1, Number(L.videoTransport.volume ?? 1))), ne.src = Me, ne.load(), N.setSource(!0), X || N.seek(0)) : !Me && ne.getAttribute("src") && (ne.pause(), ne.removeAttribute("src"), delete ne.dataset.panoSrc, ne.load(), I(), _e(), N.setSource(!1)), X || (ne.loop = !!L.videoTransport.loop), Me && !X && $.thumbnailSrc !== Me && !$.thumbnailFailedSrcs.has(Me) && te(Me, qe, Le), Me || _e(), S({
      ready: !!Me,
      visible: !!Me && j(),
      duration: qe,
      frameCount: Ve,
      fps: Le,
      hasAudio: Z,
      loop: !!ne.loop,
      muted: !!ne.muted,
      volume: Number(ne.volume ?? L.videoTransport.volume ?? 1),
      thumbnailCount: L.videoTransport.thumbnailCount
    }), Me || null;
  }
  function le(W, se = null) {
    return u(d, W, o, se || (() => de()));
  }
  function he(W = null) {
    return Yt(d, "external-sticker") ? le(io, W) : null;
  }
  function ee() {
    if (!Yt(d, "external-sticker")) return null;
    const W = be(Ag)[0];
    if (!W || typeof W != "object") return null;
    const se = be(Cg).map(l).filter(Boolean);
    if (se.length) return { frames: se, meta: W };
    const Ne = l(be(Ng)[0] || null);
    return Ne ? { src: Ne, meta: W } : null;
  }
  function pe() {
    const W = D.stickers.find(U), se = W ? ee() : null, Ne = se ? nd(W.clip, r.frame, D.timeline.fps, se.meta) : null;
    oe.follow({ src: (se == null ? void 0 : se.src) || "", time: Ne, playing: N.advancing, fps: D.timeline.fps });
    const we = W ? fe(W) : null, Me = se != null && se.frames ? ue.picture(se.frames, Ne, se.meta, we) : oe.picture(c, we);
    return Me ? { media: Me, revision: y(Me), source: rd(se, we) } : null;
  }
  function Se() {
    return !X || !Yt(d, "scene") ? null : zs(be("pano_scene_files"), be("pano_scene_meta"), l);
  }
  function Pe() {
    return !X || !Yt(d, "external-sticker") ? null : zs(be("pano_sticker_files"), be("pano_sticker_meta"), l);
  }
  function fe(W) {
    var Le;
    if (W && typeof W == "object" && (U(W) || W.external === !0))
      return he(() => {
        Tr(d, "image-loaded");
      });
    const se = X ? ge(W) : String(W && typeof W == "object" ? W.asset_id || W.assetId || "" : W || "");
    if (!se) return null;
    const Ne = o.get(se);
    if (Ne) return Ne;
    const we = X ? $s(W.source) : (Le = D.assets) == null ? void 0 : Le[se], Me = s(we);
    if (!Me) return null;
    const De = new Image();
    return xg(De, Me), De.onload = () => {
      kg(De, Me), de();
    }, De.onerror = () => {
      Mg(De, Me), de();
    }, De.src = Me, o.set(se, De), De;
  }
  function ge(W) {
    const { source: se } = W;
    return se.filename ? `file:${se.storage}:${se.subfolder}:${se.filename}` : `sticker:${W.id}`;
  }
  function b() {
    if (re === "cutout") {
      const De = P();
      if (De) return De;
      const Le = a(
        d,
        ["erp_image", "bg_erp"],
        () => de(),
        "background:cutout:erp_image|bg_erp"
      );
      return Le && !iu(Le) ? Le : u(d, "pano_input_images", o, () => de()) || Le || null;
    }
    const W = P();
    if (W) return W;
    const se = m(), Ne = se || Yt(d, "background") ? u(d, (se == null ? void 0 : se.imageKey) ?? "pano_input_images", o, () => de()) : null;
    if (Ne && !iu(Ne)) return Ne;
    if (ne instanceof HTMLVideoElement && ne.dataset.panoSrc) return ne;
    if (se) return Ne;
    const we = M();
    return a(d, we, () => de(), `background:${we.join("|")}`) || Ne || null;
  }
  function m() {
    return !Y || !Yt(d, "scene") ? null : KP(be);
  }
  function T() {
    var W;
    return ((W = m()) == null ? void 0 : W.coverage) ?? In(D.coverage);
  }
  function M() {
    if (m()) return [];
    if (re === "cutout") return ["erp_image", "bg_erp"];
    const W = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], se = W.includes("erp_image"), Ne = W.includes("bg_erp");
    return g && (se || Ne) ? se ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : re === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function k(W) {
    return W ? W instanceof HTMLImageElement ? !!W.complete && Number(W.naturalWidth || W.width || 0) > 0 && Number(W.naturalHeight || W.height || 0) > 0 : W instanceof HTMLVideoElement ? Number(W.videoWidth || 0) > 0 && Number(W.videoHeight || 0) > 0 && Number(W.readyState || 0) >= 2 : Number(W.width || W.naturalWidth || 0) > 0 && Number(W.height || W.naturalHeight || 0) > 0 : !1;
  }
  function ie() {
    if (n.failed) return { status: zn, detail: "renderer" };
    if (!n.ready) return { status: qn, detail: "boot" };
    const W = b(), se = $.videoFailed ? zn : ru(W, k), Ne = [];
    for (const we of ae()) {
      if ((we == null ? void 0 : we.visible) === !1) continue;
      const Me = fe(we);
      Ne.push(ru(Me, k));
    }
    return fP({
      presented: w.hasPresentedFrame,
      background: se,
      stickers: Ne
    });
  }
  function ye() {
    ne instanceof HTMLVideoElement && ne.pause(), K.forEach((W) => {
      try {
        W();
      } catch {
      }
    });
  }
  return {
    connect(W) {
      ({
        isExternalSticker: U,
        requestDraw: de,
        setTimelineFrame: V,
        skyStickers: ae,
        syncTimeline: H,
        timelineSpanFrames: J
      } = W);
    },
    videoState: $,
    queueVideoTransportLayout: O,
    playback: N,
    portVideo: oe,
    getNodeUiValue: ve,
    getMediaRevisionToken: y,
    playbackFps: F,
    syncVideoTransportState: S,
    toggleVideoMuted: x,
    syncVideoTransportVisibility: R,
    refreshModalVideoSource: B,
    getStickerUiImage: le,
    getExternalStickerPreviewImage: he,
    getPortMedia: ee,
    followPortSticker: pe,
    getStickerImage: fe,
    stickerImageKey: ge,
    getConnectedErpImage: b,
    backgroundCoverage: T,
    upstreamBackground: m,
    isDecodedImageReady: k,
    getStageImageStatus: ie,
    sceneFiles: Se,
    stickerFiles: Pe,
    disposeMediaSession: ye
  };
}
function eN(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(u) {
    if (n.splice(0, n.length), i = -1, !u || typeof u != "object" || !Array.isArray(u.entries) || (u.entries.forEach((c) => {
      n.push(String(c || ""));
    }), !n.length)) return;
    const d = Number(u.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(u) {
    n[i] !== u && (n.splice(i + 1), n.push(u), n.length > o && n.shift(), i = n.length - 1);
  }
  return s(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(u) {
      l(String(u || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const u = i - 1;
      return u < 0 || u >= n.length ? null : (i = u, n[i]);
    },
    redo() {
      const u = i + 1;
      return u < 0 || u >= n.length ? null : (i = u, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const u = n.length, d = Math.max(0, u - a), c = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(c, c + a), g = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - c));
      return {
        version: 1,
        entries: f,
        index: g
      };
    },
    hydrate: s
  };
}
const tN = 80;
function Lg(e) {
  return JSON.stringify(t1(e));
}
function nN(e) {
  return eN(tN, { entries: [Lg(e)], index: 0 });
}
function Rg(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function rN(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, u, d, c, f, g, w, h, p, D, X, z, Y, C;
  function re() {
    r || (X(), !(o && i.stickers.some(c)) && (t.historyController.commitActionGroup(Lg(i)), Y()));
  }
  function L(U) {
    var H, J;
    if (r) return;
    D();
    const de = U < 0 ? t.historyController.undo() : t.historyController.redo();
    if (Y(), !de) return;
    const V = n1(i, de), ae = (H = i.timeline) == null ? void 0 : H.fps;
    Object.keys(i).forEach(($) => delete i[$]), Object.assign(i, V.state), X(!1), o && i.timeline.fps !== ae && w.seek(Math.round(t.frame * i.timeline.fps / ae)), t.selectedId = Rg(s, i), a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((J = d()) == null ? void 0 : J.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), h(), n.backgroundDirty = !0, V.paintingChanged ? g() : f(), z(), C(), u(), p({ cause: "cutout_frame" });
  }
  function ne() {
    var V, ae;
    const U = Array.isArray((V = t.historyController) == null ? void 0 : V.entries) ? t.historyController.entries : [], de = Number((ae = t.historyController) == null ? void 0 : ae.index);
    return {
      canUndo: !r && U.length > 1 && de > 0,
      canRedo: !r && U.length > 1 && de >= 0 && de < U.length - 1
    };
  }
  return {
    connect(U) {
      ({
        clearWorldSelection: l,
        commitState: u,
        getActiveCutoutShot: d,
        isUploadingSticker: c,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: g,
        playback: w,
        releaseHiddenSelection: h,
        requestDraw: p,
        stopTimelinePlayback: D,
        syncCutoutShot: X,
        syncPaintUi: z,
        syncUndoRedoButtons: Y,
        updateSidePanel: C
      } = U);
    },
    pushHistory: re,
    restoreHistory: L,
    getHistoryCapabilities: ne
  };
}
function iN(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: a
  } = e;
  let s, l, u, d, c, f, g;
  function w() {
    return a === "stickers" ? h() : i.shots;
  }
  function h() {
    return n ? i.stickers.filter((b) => b.placement === "sky") : i.stickers;
  }
  function p(b) {
    return n && N(b);
  }
  function D(b) {
    return b.source.kind === "file" && !b.source.filename && !b.source.data_url;
  }
  function X(b) {
    return p(b) ? Ku(b, r.frame) : b;
  }
  function z(b, m) {
    p(b) ? Jh(b, r.frame, m) : Object.assign(b, m);
  }
  function Y() {
    const b = i.painting || (i.painting = lo(null));
    return Array.isArray(b.groups) || (b.groups = []), b.groups;
  }
  function C(b = "paint") {
    var k, ie;
    const m = Array.isArray((ie = (k = i.painting) == null ? void 0 : k[b]) == null ? void 0 : ie.strokes) ? i.painting[b].strokes : [], T = [], M = /* @__PURE__ */ new Set();
    for (const ye of m) {
      const W = String((ye == null ? void 0 : ye.actionGroupId) || "").trim();
      !W || M.has(W) || (M.add(W), T.push(W));
    }
    return T;
  }
  function re() {
    return C("paint");
  }
  function L(b, m) {
    const T = String(m || "").trim();
    return T ? `${b === "mask" ? "mask" : "paint"}:${T}` : "";
  }
  function ne(b) {
    const m = String(b || "").trim();
    return m ? `raster:${m}` : "";
  }
  function U(b) {
    const m = String(b || "").trim();
    if (!m) return "";
    const T = m.match(/^raster:(.*)$/);
    return String(T ? T[1] || "" : m).trim();
  }
  function de(b, m = null) {
    const T = String(b || "").trim();
    if (!T) return { layerKind: "paint", actionGroupId: "" };
    const M = T.match(/^(paint|mask):(.*)$/);
    return M ? { layerKind: M[1] === "mask" ? "mask" : "paint", actionGroupId: String(M[2] || "").trim() } : { layerKind: m === "mask" ? "mask" : "paint", actionGroupId: T };
  }
  function V() {
    var m;
    let b = -1;
    for (const T of h())
      b = Math.max(b, Number((T == null ? void 0 : T.z_index) || 0));
    for (const T of Y())
      b = Math.max(b, Number((T == null ? void 0 : T.z_index) || 0));
    for (const T of Array.isArray((m = i.painting) == null ? void 0 : m.raster_objects) ? i.painting.raster_objects : [])
      String((T == null ? void 0 : T.layerKind) || "paint") === "paint" && (b = Math.max(b, Number((T == null ? void 0 : T.z_index) || 0)));
    return b + 1;
  }
  function ae(b, m = null) {
    const T = String(b || "").trim();
    if (!T) return null;
    const M = Y();
    let k = M.find((ie) => String((ie == null ? void 0 : ie.actionGroupId) || "") === T);
    return k ? m != null && (k.z_index = Math.max(0, Number(m || 0))) : (k = {
      id: T,
      type: "strokeGroup",
      actionGroupId: T,
      z_index: m == null ? V() : Math.max(0, Number(m || 0)),
      locked: !1,
      frame: null
    }, M.push(k)), k;
  }
  function H(b) {
    if (!(b != null && b.centerUv)) return [];
    const m = Number(b.centerUv.u || 0), T = Number(b.centerUv.v || 0), M = Number(b.halfW || 0), k = Number(b.halfH || 0);
    return [
      {
        u: ((m - M) % 1 + 1) % 1,
        v: Ie(T - k, 0, 1)
      },
      {
        u: ((m + M) % 1 + 1) % 1,
        v: Ie(T - k, 0, 1)
      },
      {
        u: ((m + M) % 1 + 1) % 1,
        v: Ie(T + k, 0, 1)
      },
      {
        u: ((m - M) % 1 + 1) % 1,
        v: Ie(T + k, 0, 1)
      }
    ];
  }
  function J() {
    const b = new Set(re()), T = Y().filter((M) => b.has(String((M == null ? void 0 : M.actionGroupId) || "")));
    return b.forEach((M) => {
      T.some((k) => String((k == null ? void 0 : k.actionGroupId) || "") === M) || T.push({
        id: M,
        type: "strokeGroup",
        actionGroupId: M,
        z_index: V(),
        locked: !1,
        frame: null
      });
    }), T.sort((M, k) => Number((M == null ? void 0 : M.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)), i.painting.groups = T, T;
  }
  function $(b, m, T) {
    var qe;
    const M = (Ve) => (Number(Ve || 0) % 1 + 1) % 1, k = [];
    for (const Ve of T) {
      const Z = Ve == null ? void 0 : Ve.geometry, Oe = (Z == null ? void 0 : Z.geometryKind) === "lasso_fill" ? Z == null ? void 0 : Z.points : (Z == null ? void 0 : Z.processedPoints) || (Z == null ? void 0 : Z.rawPoints) || (Z == null ? void 0 : Z.points) || [];
      Array.isArray(Oe) && k.push(...Oe);
    }
    if (!k.length) return null;
    const ie = M(((qe = k[0]) == null ? void 0 : qe.u) || 0);
    let ye = 0, W = 0;
    k.forEach((Ve) => {
      const Z = M((Ve == null ? void 0 : Ve.u) || 0);
      ye += ie + F(Z, ie), W += Number((Ve == null ? void 0 : Ve.v) || 0);
    });
    const se = (ye / k.length % 1 + 1) % 1;
    let Ne = 1 / 0, we = -1 / 0, Me = 1 / 0, De = -1 / 0;
    k.forEach((Ve) => {
      const Z = M((Ve == null ? void 0 : Ve.u) || 0), Oe = F(Z, se);
      Ne = Math.min(Ne, Oe), we = Math.max(we, Oe);
      const $e = Number((Ve == null ? void 0 : Ve.v) || 0);
      Me = Math.min(Me, $e), De = Math.max(De, $e);
    });
    const Le = T.reduce((Ve, Z) => {
      const Oe = l(String((Z == null ? void 0 : Z.toolKind) || "pen")), $e = Mn[Oe] || Mn[Nr], Ae = Math.max(1, Number((Z == null ? void 0 : Z.size) || 10)) * Math.max(0.1, Number(($e == null ? void 0 : $e.sizeScale) ?? 1));
      return Math.max(Ve, Ae);
    }, 0), Ge = Math.max(35e-4, Le / 2048);
    return {
      centerUv: { u: ((se + (Ne + we) * 0.5) % 1 + 1) % 1, v: Ie((Me + De) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (we - Ne) * 0.5 + Ge,
      halfH: (De - Me) * 0.5 + Ge,
      uvPad: Ge
    };
  }
  function Q(b, m, T) {
    const M = String(b || "").trim();
    if (!M) return null;
    const k = Y().find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || "") === M);
    if (!k) return null;
    const ie = T || ce(M, m);
    return k.frame = $(M, m, ie), k.frame;
  }
  function K() {
    var M;
    const b = h().map((k) => ({
      type: "sticker",
      id: String((k == null ? void 0 : k.id) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    })), m = J().map((k) => ({
      type: "strokeGroup",
      id: String((k == null ? void 0 : k.id) || (k == null ? void 0 : k.actionGroupId) || ""),
      actionGroupId: String((k == null ? void 0 : k.actionGroupId) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    })), T = (Array.isArray((M = i.painting) == null ? void 0 : M.raster_objects) ? i.painting.raster_objects : []).filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") === "paint").map((k) => ({
      type: "rasterObject",
      id: String((k == null ? void 0 : k.id) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    }));
    return [...b, ...m, ...T].sort((k, ie) => Number(k.z_index || 0) - Number(ie.z_index || 0));
  }
  function E(b = !0) {
    var T, M, k, ie, ye, W;
    const m = K().filter((se) => se.type === "strokeGroup").map((se) => String(se.actionGroupId || "")).filter((se) => !!se);
    if (b) {
      const se = String(((M = (T = r.interaction) == null ? void 0 : T.stroke) == null ? void 0 : M.actionGroupId) || "").trim(), Ne = String(((ie = (k = r.interaction) == null ? void 0 : k.stroke) == null ? void 0 : ie.layerKind) || "").trim(), we = String(((W = (ye = r.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : W.toolKind) || "").trim();
      se && Ne === "paint" && we !== "eraser" && !m.includes(se) && m.push(se);
    }
    return m;
  }
  function G(b = !0) {
    var W, se, Ne, we, Me, De;
    const m = K();
    if (!b) return m;
    const T = String(((se = (W = r.interaction) == null ? void 0 : W.stroke) == null ? void 0 : se.actionGroupId) || "").trim(), M = String(((we = (Ne = r.interaction) == null ? void 0 : Ne.stroke) == null ? void 0 : we.layerKind) || "").trim(), k = String(((De = (Me = r.interaction) == null ? void 0 : Me.stroke) == null ? void 0 : De.toolKind) || "").trim();
    if (!T || M !== "paint" || k === "eraser" || m.some((Le) => Le.type === "strokeGroup" && String(Le.actionGroupId || "") === T))
      return m;
    const ie = f();
    let ye = m.reduce((Le, Ge) => Math.max(Le, Number((Ge == null ? void 0 : Ge.z_index) || 0)), -1) + 1;
    return ie && A(ie) && String(ie.actionGroupId || "") === T && (ye = Number(ie.z_index || 0)), [
      ...m,
      {
        type: "strokeGroup",
        id: T,
        actionGroupId: T,
        z_index: ye,
        item: null
      }
    ].sort((Le, Ge) => Number((Le == null ? void 0 : Le.z_index) || 0) - Number((Ge == null ? void 0 : Ge.z_index) || 0));
  }
  function O() {
    return Y().slice().sort((b, m) => Number((b == null ? void 0 : b.z_index) || 0) - Number((m == null ? void 0 : m.z_index) || 0)).map((b) => ve(L("paint", (b == null ? void 0 : b.actionGroupId) || (b == null ? void 0 : b.id) || ""))).filter(Boolean);
  }
  function q() {
    var b;
    return (Array.isArray((b = i.painting) == null ? void 0 : b.raster_objects) ? i.painting.raster_objects : []).filter((m) => String((m == null ? void 0 : m.layerKind) || "paint") === "paint").slice().sort((m, T) => Number((m == null ? void 0 : m.z_index) || 0) - Number((T == null ? void 0 : T.z_index) || 0)).map((m) => ue(ne((m == null ? void 0 : m.id) || ""))).filter(Boolean);
  }
  function me() {
    return Array.isArray(i.stickers) ? h() : [];
  }
  function _e() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...me()];
  }
  function te(b) {
    return !!b && Array.isArray(i.shots) && i.shots.includes(b);
  }
  function N(b) {
    return !!b && Array.isArray(i.stickers) && i.stickers.includes(b);
  }
  function oe() {
    var b;
    return Array.isArray((b = i.painting) == null ? void 0 : b.raster_objects) ? i.painting.raster_objects : [];
  }
  function ue(b) {
    const m = U(b);
    if (!m) return null;
    const T = oe().find((M) => String((M == null ? void 0 : M.id) || "").trim() === m);
    return !T || String((T == null ? void 0 : T.layerKind) || "paint") !== "paint" ? null : {
      ...T,
      id: ne(m),
      type: "rasterObject",
      rasterObjectId: m
    };
  }
  function be(b) {
    if (!b || typeof b != "object" || String(b.type || "") !== "rasterObject") return !1;
    const m = U(b.rasterObjectId || b.id || "");
    return !!m && !!ue(ne(m));
  }
  function ve(b) {
    const m = de(b), T = String(m.actionGroupId || "").trim();
    if (!T) return null;
    const M = Y().find((k) => String((k == null ? void 0 : k.id) || (k == null ? void 0 : k.actionGroupId) || "") === T || String((k == null ? void 0 : k.actionGroupId) || "") === T);
    return M ? {
      ...M,
      id: L("paint", T),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: T
    } : null;
  }
  function A(b) {
    if (!b || typeof b != "object" || String(b.type || "") !== "strokeGroup") return !1;
    const m = String(b.actionGroupId || "").trim(), T = String(b.layerKind || "paint").trim() || "paint";
    return !!m && !!ve(L(T, m));
  }
  function ce(b, m = null) {
    const T = de(b, m), M = String(T.actionGroupId || "").trim();
    return M ? d(T.layerKind).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() === M) : [];
  }
  function y(b, m = "paint") {
    const T = String(b || "").trim(), k = `geomv5:${String(m || "paint").trim() || "paint"}:${T}:${r.mode}:${c()}`;
    if (r.mode === "frame") {
      const ie = s(), ye = String((ie == null ? void 0 : ie.id) || ""), W = ie ? u(ie) : null;
      return `${k}:frame:${ye}:${Math.round(Number((ie == null ? void 0 : ie.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((W == null ? void 0 : W.x) || 0))}:${Math.round(Number((W == null ? void 0 : W.y) || 0))}:${Math.round(Number((W == null ? void 0 : W.w) || 0))}:${Math.round(Number((W == null ? void 0 : W.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function v(b, m, T) {
    return !b || typeof b != "object" ? b : {
      ...b,
      u: ((Number(b.u || 0) + Number(m || 0)) % 1 + 1) % 1,
      v: Ie(Number(b.v || 0) + Number(T || 0), 0, 1)
    };
  }
  function F(b, m) {
    let T = Number(b || 0) - Number(m || 0);
    for (; T > 0.5; ) T -= 1;
    for (; T < -0.5; ) T += 1;
    return T;
  }
  function S(b, m = null, T = null) {
    var Ne;
    const M = de(b, m), k = Array.isArray(T) ? T : ce(M.actionGroupId, M.layerKind), ie = [];
    if (k.forEach((we) => {
      const Me = (we == null ? void 0 : we.geometry) || null, De = (Me == null ? void 0 : Me.geometryKind) === "lasso_fill" ? Me == null ? void 0 : Me.points : (Me == null ? void 0 : Me.processedPoints) || (Me == null ? void 0 : Me.rawPoints) || (Me == null ? void 0 : Me.points) || [];
      Array.isArray(De) && ie.push(...De);
    }), !ie.length) return { u: 0.5, v: 0.5 };
    const ye = Number(((Ne = ie[0]) == null ? void 0 : Ne.u) || 0);
    let W = 0, se = 0;
    return ie.forEach((we) => {
      W += ye + F(Number((we == null ? void 0 : we.u) || 0), ye), se += Number((we == null ? void 0 : we.v) || 0);
    }), {
      u: (W / ie.length % 1 + 1) % 1,
      v: Ie(se / ie.length, 0, 1)
    };
  }
  function j(b, m, T = 1, M = 0) {
    if (!b || typeof b != "object") return b;
    const k = Number((m == null ? void 0 : m.u) || 0), ie = Number((m == null ? void 0 : m.v) || 0), ye = F(Number(b.u || 0), k), W = Number(b.v || 0) - ie, se = Number(M || 0) * mr, Ne = Math.cos(se), we = Math.sin(se), Me = Math.max(0.02, Number(T || 1)), De = (ye * Ne - W * we) * Me, Le = (ye * we + W * Ne) * Me;
    return {
      ...b,
      u: ((k + De) % 1 + 1) % 1,
      v: Ie(ie + Le, 0, 1)
    };
  }
  function x(b, m, T, M = null, k = null, ie = null) {
    const ye = de(b, k), W = String(ye.actionGroupId || "").trim();
    if (!W) return !1;
    const se = d(ye.layerKind), Ne = Array.isArray(M) ? new Map(M.map((Me) => [String((Me == null ? void 0 : Me.id) || ""), Me])) : null;
    let we = !1;
    if (se.forEach((Me) => {
      if (String((Me == null ? void 0 : Me.actionGroupId) || "").trim() !== W) return;
      const De = (Ne == null ? void 0 : Ne.get(String((Me == null ? void 0 : Me.id) || ""))) || Me, Le = Me == null ? void 0 : Me.geometry, Ge = De == null ? void 0 : De.geometry;
      !Le || !Ge || (Array.isArray(Ge.points) && (Le.points = Ge.points.map((qe) => v(qe, m, T)), we = !0), Array.isArray(Ge.rawPoints) && (Le.rawPoints = Ge.rawPoints.map((qe) => v(qe, m, T)), we = !0), Array.isArray(Ge.processedPoints) && (Le.processedPoints = Ge.processedPoints.map((qe) => v(qe, m, T)), we = !0));
    }), we && ie) {
      const Me = Y().find((De) => String((De == null ? void 0 : De.actionGroupId) || "") === W);
      Me && (Me.frame = null);
    }
    return we;
  }
  function R(b, m = 1, T = 0, M = null, k = null, ie = null) {
    const ye = de(b, k), W = String(ye.actionGroupId || "").trim();
    if (!W) return !1;
    const se = d(ye.layerKind), Ne = Array.isArray(M) ? M : ce(W, ye.layerKind), we = Array.isArray(Ne) ? new Map(Ne.map((Le) => [String((Le == null ? void 0 : Le.id) || ""), Le])) : null, Me = (ie == null ? void 0 : ie.centerUv) ?? S(W, ye.layerKind, Ne);
    let De = !1;
    if (se.forEach((Le) => {
      if (String((Le == null ? void 0 : Le.actionGroupId) || "").trim() !== W) return;
      const Ge = (we == null ? void 0 : we.get(String((Le == null ? void 0 : Le.id) || ""))) || Le, qe = Le == null ? void 0 : Le.geometry, Ve = Ge == null ? void 0 : Ge.geometry;
      !qe || !Ve || (Array.isArray(Ve.points) && (qe.points = Ve.points.map((Z) => j(Z, Me, m, T)), De = !0), Array.isArray(Ve.rawPoints) && (qe.rawPoints = Ve.rawPoints.map((Z) => j(Z, Me, m, T)), De = !0), Array.isArray(Ve.processedPoints) && (qe.processedPoints = Ve.processedPoints.map((Z) => j(Z, Me, m, T)), De = !0));
    }), De && ie) {
      const Le = Y().find((Ge) => String((Ge == null ? void 0 : Ge.actionGroupId) || "") === W);
      Le && (Le.frame = null);
    }
    return De;
  }
  function _(b, m, T, M = null) {
    const k = U(b);
    if (!k) return !1;
    const ie = oe().find((we) => String((we == null ? void 0 : we.id) || "").trim() === k);
    if (!ie) return !1;
    const ye = M && typeof M == "object" ? M : ie, W = (ye == null ? void 0 : ye.transform) || {}, se = Number(W.du || 0) + Number(m || 0), Ne = Ie(Number(W.dv || 0) + Number(T || 0), -1, 1);
    return ie.transform || (ie.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ie.transform.du = se, ie.transform.dv = Ne, !0;
  }
  function P(b, m = 1, T = null) {
    const M = U(b);
    if (!M) return !1;
    const k = oe().find((Ne) => String((Ne == null ? void 0 : Ne.id) || "").trim() === M);
    if (!k) return !1;
    const ie = T && typeof T == "object" ? T : k, ye = (ie == null ? void 0 : ie.transform) || {}, W = Math.max(0.01, Number(ye.scale || 1)), se = Ie(W * Math.max(0.01, Number(m || 1)), 0.01, 100);
    return k.transform || (k.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), k.transform.scale = se, !0;
  }
  function I() {
    return V();
  }
  function B(b) {
    var m;
    return !b || typeof b != "object" ? !1 : o ? ((m = b.source) == null ? void 0 : m.kind) === "port" : String(b.id || "") === vd || String(b.source_kind || "") === gP;
  }
  function le(b) {
    return !!(b && typeof b == "object" && b.visible === !1);
  }
  function he(b) {
    return B(b) && le(b) ? hm : 1;
  }
  function ee(b, m, T = 1, M = 0) {
    if (!b || typeof b != "object") return b;
    const k = Number((m == null ? void 0 : m.u) || 0), ie = Number((m == null ? void 0 : m.v) || 0), ye = F(Number(b.u || 0), k), W = Number(b.v || 0) - ie, se = Math.max(0.02, Number(T || 1)), Ne = Number(M || 0) * mr, we = Math.cos(Ne), Me = Math.sin(Ne), De = ye / se, Le = W / se, Ge = De * we + Le * Me, qe = -De * Me + Le * we;
    return {
      ...b,
      u: ((k + Ge) % 1 + 1) % 1,
      v: ie + qe
    };
  }
  function pe(b) {
    const m = (b == null ? void 0 : b.bbox) || null, T = (b == null ? void 0 : b.transform) || {};
    return m ? {
      u: (((Number(m.u0 || 0) + Number(m.u1 || 0)) * 0.5 + Number(T.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(m.v0 || 0) + Number(m.v1 || 0)) * 0.5 + Number(T.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Se(b) {
    var se, Ne, we, Me;
    const m = (b == null ? void 0 : b.bbox) || null;
    if (!m) return [];
    const T = {
      u: (Number(m.u0 || 0) + Number(m.u1 || 0)) * 0.5,
      v: (Number(m.v0 || 0) + Number(m.v1 || 0)) * 0.5
    }, M = Math.max(0.01, Number(((se = b == null ? void 0 : b.transform) == null ? void 0 : se.scale) || 1)), k = Number(((Ne = b == null ? void 0 : b.transform) == null ? void 0 : Ne.rot_deg) || 0), ie = Number(((we = b == null ? void 0 : b.transform) == null ? void 0 : we.du) || 0), ye = Number(((Me = b == null ? void 0 : b.transform) == null ? void 0 : Me.dv) || 0);
    return [
      { u: Number(m.u0 || 0), v: Number(m.v0 || 0) },
      { u: Number(m.u1 || 0), v: Number(m.v0 || 0) },
      { u: Number(m.u1 || 0), v: Number(m.v1 || 0) },
      { u: Number(m.u0 || 0), v: Number(m.v1 || 0) }
    ].map((De) => v(j(De, T, M, k), ie, ye));
  }
  function Pe(b) {
    const m = U((b == null ? void 0 : b.rasterObjectId) || (b == null ? void 0 : b.id) || ""), T = (b == null ? void 0 : b.transform) || {}, M = (b == null ? void 0 : b.bbox) || {}, k = `${m}:${r.mode}:${c()}:${M.u0}:${M.v0}:${M.u1}:${M.v1}:${T.du}:${T.dv}:${T.rot_deg}:${T.scale}`;
    if (r.mode === "frame") {
      const ie = s(), ye = ie ? u(ie) : null;
      return `${k}:frame:${String((ie == null ? void 0 : ie.id) || "")}:${Math.round(Number((ye == null ? void 0 : ye.x) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.y) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.w) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function fe(b) {
    const m = String((b == null ? void 0 : b.id) || ""), T = te(b) ? "frame" : N(b) ? "sticker" : "item", M = X(b), k = [
      T,
      m,
      r.mode,
      Number((M == null ? void 0 : M.yaw_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.pitch_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.hFOV_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.vFOV_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.rot_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.roll_deg) || 0).toFixed(4),
      Er(M),
      p(b) && g(b)
    ].join(":");
    if (r.mode === "frame") {
      const ie = s(), ye = ie ? u(ie) : null;
      return `${k}:frame:${String((ie == null ? void 0 : ie.id) || "")}:${Math.round(Number((ye == null ? void 0 : ye.x) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.y) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.w) || 0))}:${Math.round(Number((ye == null ? void 0 : ye.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ge() {
    K().forEach((m, T) => {
      m.type === "sticker" && m.item && (m.item.z_index = T), m.type === "strokeGroup" && m.item && (m.item.z_index = T), m.type === "rasterObject" && m.item && (m.item.z_index = T);
    });
  }
  return {
    connect(b) {
      ({
        getActiveCutoutShot: s,
        getBrushPresetIdForTool: l,
        getFrameViewRect: u,
        getPaintingLayerList: d,
        getPaintingRevisionKey: c,
        getSelected: f,
        sceneStickerShown: g
      } = b);
    },
    getList: w,
    skyStickers: h,
    isSceneSticker: p,
    isUploadingSticker: D,
    poseOf: X,
    writePose: z,
    getPaintingGroupList: Y,
    makeStrokeGroupSelectionId: L,
    makeRasterObjectSelectionId: ne,
    parseRasterObjectSelectionId: U,
    ensurePaintingGroupEntry: ae,
    getFrameCornersUv: H,
    ensureGroupFrame: Q,
    getDisplayListObjects: K,
    getOrderedPaintGroupIds: E,
    getOrderedDisplayListObjects: G,
    getSelectableStrokeGroupItems: O,
    getSelectableRasterObjectItems: q,
    cutoutStickers: me,
    getCutoutSelectableItems: _e,
    isShotItem: te,
    isStickerItem: N,
    getRasterObjectList: oe,
    getRasterObjectItem: ue,
    isRasterObjectItem: be,
    getStrokeGroupItem: ve,
    isStrokeGroupItem: A,
    getStrokeGroupStrokes: ce,
    getStrokeGeomCacheKey: y,
    shortestWrappedDelta: F,
    getStrokeGroupCenterUv: S,
    applyStrokeGroupOffset: x,
    applyStrokeGroupTransform: R,
    applyRasterObjectOffset: _,
    applyRasterObjectTransform: P,
    getNextStickerZIndex: I,
    isExternalSticker: B,
    isStickerHidden: le,
    getStickerDisplayAlpha: he,
    inverseTransformErpPointAround: ee,
    getRasterObjectCenterUv: pe,
    getRasterObjectTransformedErpPoints: Se,
    getRasterObjectGeomCacheKey: Pe,
    getSceneItemGeomCacheKey: fe,
    normalizeDisplayZIndices: ge
  };
}
function oN(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: a,
    timeline: s,
    type: l
  } = e;
  let u, d, c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te;
  function N() {
    const m = String(t.selectedId || "");
    if (!m) return null;
    const T = C(m);
    if (T) return T;
    const M = X(m);
    return M || (o ? w().find((k) => String((k == null ? void 0 : k.id) || "") === m) || null : p().find((k) => String((k == null ? void 0 : k.id) || "") === m) || null);
  }
  function oe() {
    const m = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], T = [], M = /* @__PURE__ */ new Set();
    return m.forEach((k) => {
      const ie = String(k || "").trim();
      if (!ie || M.has(ie)) return;
      M.add(ie);
      const ye = ie === String(t.selectedId || "") ? N() : C(ie) || X(ie) || (o ? w().find((W) => String((W == null ? void 0 : W.id) || "") === ie) : p().find((W) => String((W == null ? void 0 : W.id) || "") === ie));
      ye && T.push(ye);
    }), T;
  }
  function ue(m = null) {
    const T = Array.isArray(m) ? m : oe();
    if (!T || T.length < 2) return null;
    const M = T.map((we) => Q(we)).filter((we) => (we == null ? void 0 : we.visible) && Array.isArray(we.corners) && we.corners.length);
    if (!M.length) return null;
    const k = M.flatMap((we) => we.corners.map((Me) => Number((Me == null ? void 0 : Me.x) || 0))), ie = M.flatMap((we) => we.corners.map((Me) => Number((Me == null ? void 0 : Me.y) || 0))), ye = Math.min(...k), W = Math.max(...k), se = Math.min(...ie), Ne = Math.max(...ie);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ye + W) * 0.5, y: (se + Ne) * 0.5 },
      corners: [
        { x: ye, y: se },
        { x: W, y: se },
        { x: W, y: Ne },
        { x: ye, y: Ne }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ye + W) * 0.5, y: se, a: { x: ye, y: se }, b: { x: W, y: se } },
        { edge: "right", x: W, y: (se + Ne) * 0.5, a: { x: W, y: se }, b: { x: W, y: Ne } },
        { edge: "bottom", x: (ye + W) * 0.5, y: Ne, a: { x: W, y: Ne }, b: { x: ye, y: Ne } },
        { edge: "left", x: ye, y: (se + Ne) * 0.5, a: { x: ye, y: Ne }, b: { x: ye, y: se } }
      ],
      rotateStemBase: { x: (ye + W) * 0.5, y: se },
      rotateHandle: { x: (ye + W) * 0.5, y: se - 30 }
    };
  }
  function be(m) {
    const T = String((m == null ? void 0 : m.id) || "").trim();
    return !!T && Array.isArray(t.selectedIds) && t.selectedIds.includes(T);
  }
  function ve() {
    const m = N();
    return m ? H(m) || ne(m) ? "stroke" : de(m) ? "frame" : "image" : null;
  }
  function A(m) {
    if (!m || typeof m != "object") return !1;
    if (H(m)) {
      const T = String(m.actionGroupId || m.id || "").trim(), M = D().find((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() === T);
      return (M == null ? void 0 : M.locked) === !0;
    }
    if (ne(m)) {
      const T = E(m.rasterObjectId || m.id || ""), M = z().find((k) => String((k == null ? void 0 : k.id) || "").trim() === T);
      return (M == null ? void 0 : M.locked) === !0;
    }
    return m.locked === !0;
  }
  function ce(m = null) {
    const T = Array.isArray(m) ? m : oe();
    return T.length > 0 && T.every((M) => A(M));
  }
  function y(m, T) {
    const M = T === !0;
    if (!m || typeof m != "object") return !1;
    if (H(m)) {
      const k = String(m.actionGroupId || m.id || "").trim(), ie = D().find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim() === k);
      return !ie || ie.locked === M ? !1 : (ie.locked = M, !0);
    }
    if (ne(m)) {
      const k = E(m.rasterObjectId || m.id || ""), ie = z().find((ye) => String((ye == null ? void 0 : ye.id) || "").trim() === k);
      return !ie || ie.locked === M ? !1 : (ie.locked = M, !0);
    }
    return m.locked === M ? !1 : (m.locked = M, !0);
  }
  function v() {
    if (r) return;
    const m = oe();
    if (!m.length) return;
    const T = !ce(m);
    let M = !1;
    m.forEach((k) => {
      y(k, T) && (M = !0);
    }), M && (O(), d(), _e(), te(), q());
  }
  function F(m) {
    pe(), s.selection = null, t.selectedId = (m == null ? void 0 : m.id) || null, t.selectedIds = m != null && m.id ? [m.id] : [], m && ae(m) ? a.active.selected_sticker_id = m.id || null : a.active.selected_sticker_id = null, m && de(m) ? a.active.selected_shot_id = m.id || null : m ? de(m) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function S(m, T = null) {
    const M = [], k = /* @__PURE__ */ new Set();
    (Array.isArray(m) ? m : []).forEach((W) => {
      const se = String((W == null ? void 0 : W.id) || "").trim();
      !se || k.has(se) || (k.add(se), M.push(se));
    }), t.selectedIds = M, pe(), s.selection = null;
    const ie = String(T || "").trim();
    t.selectedId = ie && M.includes(ie) ? ie : M[M.length - 1] || null;
    const ye = N();
    a.active.selected_sticker_id = ye && ae(ye) && ye.id || null, ye && de(ye) ? a.active.selected_shot_id = ye.id || null : M.length || (a.active.selected_shot_id = null);
  }
  function j() {
    const m = (Array.isArray(a.shots) ? a.shots : []).map((M, k) => ({
      kind: "frame",
      item: M,
      label: String((M == null ? void 0 : M.label) || `Frame ${k + 1}`)
    })), T = f().map((M, k) => {
      var ye, W;
      const ie = L(M) ? String(M.id || vd) : String(((W = (ye = a.assets) == null ? void 0 : ye[M.asset_id]) == null ? void 0 : W.name) || M.asset_id || M.id || `Image ${k + 1}`);
      return {
        kind: "image",
        item: M,
        label: ie
      };
    });
    return [...m, ...T];
  }
  function x(m) {
    return m === "frame" ? je.camera : m === "stroke" ? je.paintbrush_vertical_tool : je.image;
  }
  function R(m) {
    return !m || !m.item ? {
      label: String((m == null ? void 0 : m.label) || ""),
      icon: null
    } : {
      label: String(m.label || ""),
      icon: x(m.kind)
    };
  }
  function _() {
    if (r) return;
    const m = N();
    !m || !L(m) || (m.visible = V(m), fe(), J(), O(), d(), te(), _e(), q());
  }
  function P() {
    if (r || l !== "stickers") return;
    const m = N();
    if (!m || !L(m)) return;
    const T = m.initial_pose;
    if (!T || typeof T != "object") return;
    m.yaw_deg = Number(T.yaw_deg ?? m.yaw_deg ?? 0), m.pitch_deg = Number(T.pitch_deg ?? m.pitch_deg ?? 0), m.hFOV_deg = Number(T.hFOV_deg ?? m.hFOV_deg ?? 30);
    const M = Y(io, () => {
      q();
    });
    M && (M.complete || M.naturalWidth || M.width) ? m.vFOV_deg = c(
      Number(T.hFOV_deg ?? m.hFOV_deg ?? 30),
      Number(M.naturalWidth || M.width || 1),
      Number(M.naturalHeight || M.height || 1)
    ) : m.vFOV_deg = Number(T.vFOV_deg ?? m.vFOV_deg ?? 30), m.rot_deg = Number(T.rot_deg ?? m.rot_deg ?? 0), O(), d(), te(), _e(), q();
  }
  function I(m) {
    if (!m || !L(m)) return null;
    const T = m.initial_pose;
    if (!T || typeof T != "object") return null;
    const M = {
      yaw_deg: Number(T.yaw_deg ?? m.yaw_deg ?? 0),
      pitch_deg: Number(T.pitch_deg ?? m.pitch_deg ?? 0),
      hFOV_deg: Number(T.hFOV_deg ?? m.hFOV_deg ?? 30),
      vFOV_deg: Number(T.vFOV_deg ?? m.vFOV_deg ?? 30),
      rot_deg: Number(T.rot_deg ?? m.rot_deg ?? 0)
    }, k = Y(io, () => {
      q();
    });
    return k && (k.complete || k.naturalWidth || k.width) && (M.vFOV_deg = c(
      M.hFOV_deg,
      Number(k.naturalWidth || k.width || 1),
      Number(k.naturalHeight || k.height || 1)
    )), M;
  }
  function B() {
    const m = N();
    if (!m || !L(m)) return !1;
    const T = I(m);
    if (!T) return !1;
    const M = (k, ie) => Math.abs(Number(k || 0) - Number(ie || 0)) <= 1e-4;
    return !(M(m.yaw_deg, T.yaw_deg) && M(m.pitch_deg, T.pitch_deg) && M(m.hFOV_deg, T.hFOV_deg) && M(m.vFOV_deg, T.vFOV_deg) && M(m.rot_deg, T.rot_deg));
  }
  function le(m = {}) {
    const M = m.preservePanelValues !== !1 ? G(N()) : null;
    M && (t.panelLastValues = {
      yaw_deg: Number(M.yaw_deg || 0),
      pitch_deg: Number(M.pitch_deg || 0),
      hFOV_deg: Number(M.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(M.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(M.rot_deg || 0),
      roll_deg: Number(M.roll_deg || 0),
      aspect_id: Er(M)
    }), t.selectedId = null, t.selectedIds = [], pe(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function he() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((m) => m.id === t.worldSelectedId && m.placement === "world") || null;
  }
  function ee(m) {
    F(null), t.worldSelectedId = m, n.backgroundDirty = !0;
  }
  function pe() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Se(m) {
    return !!m && !r && !m.locked;
  }
  function Pe() {
    if (l !== "cutout") return;
    const m = g();
    m && (t.selectedId = String(m.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function fe() {
    var T;
    const m = N();
    (U(m) && !me(m) || t.selectedId === Bu && re() && !u() || ve() === "stroke" && !K()) && F(null), ((T = he()) == null ? void 0 : T.visible) === !1 && pe();
  }
  function ge() {
    if (r) return;
    const m = oe();
    if (!N() || m.length === 0 || m.some((se) => A(se))) return;
    $();
    const M = h(), k = new Set(m.map((se) => ae(se) ? `sticker:${String(se.id || "")}` : ne(se) ? `rasterObject:${E(se.rasterObjectId || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || se.id || "")}`)), ie = [], ye = [];
    if (M.forEach((se) => {
      var we, Me;
      const Ne = se.type === "sticker" ? `sticker:${String(((we = se.item) == null ? void 0 : we.id) || "")}` : se.type === "rasterObject" ? `rasterObject:${String(((Me = se.item) == null ? void 0 : Me.id) || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || "")}`;
      k.has(Ne) ? ie.push(se) : ye.push(se);
    }), !ie.length || ie[ie.length - 1] === M[M.length - 1]) return;
    [...ye, ...ie].forEach((se, Ne) => {
      se.type === "sticker" && se.item && (se.item.z_index = Ne), se.type === "strokeGroup" && se.item && (se.item.z_index = Ne), se.type === "rasterObject" && se.item && (se.item.z_index = Ne);
    }), J(), O(), d(), _e(), q();
  }
  function b() {
    if (r) return;
    const m = oe();
    if (!N() || m.length === 0 || m.some((se) => A(se))) return;
    $();
    const M = h(), k = new Set(m.map((se) => ae(se) ? `sticker:${String(se.id || "")}` : ne(se) ? `rasterObject:${E(se.rasterObjectId || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || se.id || "")}`)), ie = [], ye = [];
    if (M.forEach((se) => {
      var we, Me;
      const Ne = se.type === "sticker" ? `sticker:${String(((we = se.item) == null ? void 0 : we.id) || "")}` : se.type === "rasterObject" ? `rasterObject:${String(((Me = se.item) == null ? void 0 : Me.id) || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || "")}`;
      k.has(Ne) ? ie.push(se) : ye.push(se);
    }), !ie.length || ie[0] === M[0]) return;
    [...ie, ...ye].forEach((se, Ne) => {
      se.type === "sticker" && se.item && (se.item.z_index = Ne), se.type === "strokeGroup" && se.item && (se.item.z_index = Ne), se.type === "rasterObject" && se.item && (se.item.z_index = Ne);
    }), J(), O(), d(), _e(), q();
  }
  return {
    connect(m) {
      ({
        cameraShoots: u,
        commitAndRefreshNode: d,
        computeStickerVFov: c,
        cutoutStickers: f,
        getActiveCutoutShot: g,
        getCutoutSelectableItems: w,
        getDisplayListObjects: h,
        getList: p,
        getPaintingGroupList: D,
        getRasterObjectItem: X,
        getRasterObjectList: z,
        getStickerUiImage: Y,
        getStrokeGroupItem: C,
        hasCamera: re,
        isExternalSticker: L,
        isRasterObjectItem: ne,
        isSceneSticker: U,
        isShotItem: de,
        isStickerHidden: V,
        isStickerItem: ae,
        isStrokeGroupItem: H,
        markObjectVisualsDirty: J,
        normalizeDisplayZIndices: $,
        objectGeom: Q,
        paintingShown: K,
        parseRasterObjectSelectionId: E,
        poseOf: G,
        pushHistory: O,
        requestDraw: q,
        sceneStickerShown: me,
        updateSelectionMenu: _e,
        updateSidePanel: te
      } = m);
    },
    getSelected: N,
    getSelectedItems: oe,
    getMultiSelectionGeom: ue,
    isItemSelected: be,
    getSelectedKind: ve,
    isItemLocked: A,
    areAllSelectedItemsLocked: ce,
    toggleSelectedLock: v,
    setSelectedItem: F,
    setSelectedItems: S,
    getCutoutInspectorItems: j,
    getSelectionItemIcon: x,
    getSelectionItemLabelData: R,
    toggleSelectedExternalStickerVisibility: _,
    restoreSelectedToInitialPose: P,
    canRestoreSelectedToInitial: B,
    clearSelection: le,
    selectedWorldSticker: he,
    selectWorldSticker: ee,
    clearWorldSelection: pe,
    worldStickerEditable: Se,
    applyInitialCutoutFocus: Pe,
    releaseHiddenSelection: fe,
    bringSelectedToFront: ge,
    sendSelectedToBack: b
  };
}
function aN(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, u, d, c, f = { key: [], projection: null };
  function g() {
    return o && a() && i.camera.projection === "erp";
  }
  function w() {
    const oe = ne({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !oe || oe.length !== 4 ? !1 : oe[0].y >= oe[3].y;
  }
  function h() {
    return mm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function p() {
    const N = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return N.some((oe, ue) => oe !== f.key[ue]) && (f = { key: N, projection: ym(h(), r.width, r.height) }), f.projection;
  }
  function D(N) {
    const oe = p().project(N);
    return oe.z > 1e-4 ? oe : null;
  }
  function X(N, oe) {
    return p().ray(N, oe);
  }
  function z() {
    const N = r.width, oe = r.height, ue = 2;
    if (N / Math.max(oe, 1) >= ue) {
      const y = oe, v = y * ue;
      return { x: (N - v) * 0.5, y: 0, w: v, h: y };
    }
    const ve = N, A = ve / ue;
    return { x: 0, y: (oe - A) * 0.5, w: ve, h: A };
  }
  function Y(N) {
    return {
      lon: Math.atan2(N.x, N.z),
      lat: Math.asin(Ie(N.y, -1, 1))
    };
  }
  function C(N, oe = null) {
    const { lon: ue, lat: be } = Y(N), ve = z();
    let A = ve.x + (ue / (2 * Math.PI) + 0.5) * ve.w;
    const ce = ve.y + (0.5 - be / Math.PI) * ve.h;
    if (oe !== null) {
      for (; A - oe > ve.w / 2; ) A -= ve.w;
      for (; A - oe < -ve.w / 2; ) A += ve.w;
    }
    return { x: A, y: ce, z: 1 };
  }
  function re(N) {
    const oe = u(N), ue = so(
      Number(oe.yaw_deg || 0),
      Number(oe.pitch_deg || 0),
      Number(oe.rot_deg || oe.roll_deg || 0)
    ), be = Math.tan(Ie(Number(oe.hFOV_deg || 20), 0.1, 179) * 0.5 * mr), ve = Math.tan(Ie(Number(oe.vFOV_deg || 20), 0.1, 179) * 0.5 * mr);
    return {
      centerDir: ue.fwd,
      right: ue.right,
      up: ue.up,
      tanX: be,
      tanY: ve
    };
  }
  function L(N, oe, ue) {
    return AP(np(np(N.centerDir, rp(N.right, oe)), rp(N.up, ue)));
  }
  function ne(N) {
    const oe = re(N);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: be, v: ve }) => L(oe, be * oe.tanX, ve * oe.tanY));
  }
  function U(N, oe, ue) {
    const be = re(N), ve = (oe * 2 - 1) * be.tanX, A = (1 - ue * 2) * be.tanY;
    return L(be, ve, A);
  }
  function de(N) {
    const oe = t.width / Math.max(1, r.width), ue = t.height / Math.max(1, r.height);
    return { x: N.x * oe, y: N.y * ue, w: N.w * oe, h: N.h * ue };
  }
  function V(N, oe = null, ue = null, be = null) {
    if (n.mode === "frame") {
      const ve = oe || s();
      if (!ve) return [];
      const A = ue || l(ve);
      return O(N, ve, A);
    }
    return K(N, be);
  }
  function ae(N, oe = null, ue = null, be = null, ve = null) {
    if (!N) return null;
    if (n.mode === "unwrap") {
      const ce = K([N], ve);
      return ce[0] ? { x: ce[0].x, y: ce[0].y, z: 1 } : null;
    }
    const A = J(N);
    return A ? d(A, oe, ue, be) : null;
  }
  function H(N, oe) {
    if (!N || !oe) return null;
    const ue = Number(oe.x || 0), be = Number(oe.y || 0);
    return U(N, ue, be);
  }
  function J(N) {
    if (!N) return null;
    const oe = (Number(N.u || 0) - 0.5) * (2 * Math.PI), ue = (0.5 - Number(N.v || 0)) * Math.PI, be = Math.cos(ue);
    return xl(be * Math.sin(oe), Math.sin(ue), be * Math.cos(oe));
  }
  function $(N, oe) {
    if (!N || !oe) return null;
    const ue = re(N), be = uc(oe, ue.centerDir);
    if (!Number.isFinite(be) || be <= 1e-6) return null;
    const ve = uc(oe, ue.right) / be, A = uc(oe, ue.up) / be;
    return {
      x: (ve / Math.max(1e-6, ue.tanX) + 1) * 0.5,
      y: (1 - A / Math.max(1e-6, ue.tanY)) * 0.5
    };
  }
  function Q(N) {
    if (!Array.isArray(N) || N.length < 3) return [];
    if (n.mode === "unwrap") {
      const ue = z();
      return N.map((be) => ({
        x: ue.x + Number(be.u || 0) * ue.w,
        y: ue.y + Number(be.v || 0) * ue.h
      }));
    }
    const oe = N.map((ue) => D(J(ue))).filter(Boolean);
    return oe.every((ue) => Number(ue.z || 0) > 0) ? oe.map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) })) : [];
  }
  function K(N, oe = null) {
    if (!Array.isArray(N) || N.length < 1) return [];
    if (n.mode === "unwrap") {
      const be = z();
      return N.map((ve) => {
        const A = (Number(ve.u || 0) % 1 + 1) % 1, ce = oe == null ? A : Number(oe || 0) + c(A, oe);
        return {
          x: be.x + ce * be.w,
          y: be.y + Number(ve.v || 0) * be.h
        };
      });
    }
    const ue = N.map((be) => D(J(be))).filter(Boolean);
    return ue.every((be) => Number(be.z || 0) > 0) ? ue.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function E(N, oe = 160) {
    if (!Array.isArray(N) || N.length < 3) return !1;
    for (let ue = 0; ue < N.length; ue += 1) {
      const be = N[ue], ve = N[(ue + 1) % N.length];
      if (!be || !ve || !Number.isFinite(be.x) || !Number.isFinite(be.y) || !Number.isFinite(ve.x) || !Number.isFinite(ve.y) || Math.hypot(Number(ve.x) - Number(be.x), Number(ve.y) - Number(be.y)) > oe) return !1;
    }
    return !0;
  }
  function G(N, oe, ue) {
    if (!Array.isArray(N) || N.length < 3 || !oe || !ue) return [];
    const be = [];
    for (const ve of N) {
      const A = J(ve), ce = $(oe, A);
      if (!ce) return [];
      be.push({
        x: Number(ue.x || 0) + Number(ce.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(ce.y || 0) * Number(ue.h || 0)
      });
    }
    return E(be, Math.max(80, Math.max(ue.w, ue.h) * 0.75)) ? be : [];
  }
  function O(N, oe, ue) {
    if (!Array.isArray(N) || N.length < 1 || !oe || !ue) return [];
    const be = [];
    for (const ve of N) {
      const A = J(ve), ce = $(oe, A);
      ce && be.push({
        x: Number(ue.x || 0) + Number(ce.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(ce.y || 0) * Number(ue.h || 0)
      });
    }
    return be;
  }
  function q(N) {
    const oe = r.getBoundingClientRect();
    return {
      x: (N.clientX - oe.left) / oe.width * r.width,
      y: (N.clientY - oe.top) / oe.height * r.height
    };
  }
  function me(N) {
    const oe = r.getBoundingClientRect();
    return {
      x: Number(N.clientX) - Number(oe.left || 0),
      y: Number(N.clientY) - Number(oe.top || 0)
    };
  }
  function _e(N, oe = performance.now()) {
    if (n.mode === "unwrap") {
      const A = z(), ce = (N.x - A.x) / Math.max(1, A.w), y = (N.y - A.y) / Math.max(1, A.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (ce % 1 + 1) % 1,
        v: Ie(y, 0, 1),
        t: Number(oe || 0)
      };
    }
    const ue = X(N.x, N.y), { lon: be, lat: ve } = Y(ue);
    return {
      targetKind: "ERP_GLOBAL",
      u: (be / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - ve / Math.PI, 0, 1),
      t: Number(oe || 0)
    };
  }
  function te(N, oe, ue = performance.now()) {
    const be = l(oe);
    if (!be) return null;
    const ve = {
      x: (Number(N.x) - be.x) / Math.max(1, be.w),
      y: (Number(N.y) - be.y) / Math.max(1, be.h)
    };
    if (ve.x < 0 || ve.x > 1 || ve.y < 0 || ve.y > 1) return null;
    const A = H(oe, ve);
    if (!A) return null;
    const { lon: ce, lat: y } = Y(A);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ce / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - y / Math.PI, 0, 1),
      t: Number(ue || 0)
    };
  }
  return {
    connect(N) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: u,
        projectSceneItemDir: d,
        shortestWrappedDelta: c
      } = N);
    },
    isErpCamera: g,
    currentViewCamera: h,
    currentViewProjection: p,
    projectDir: D,
    screenToWorldDir: X,
    getUnwrapRect: z,
    projectDirUnwrap: C,
    getStickerFrame: re,
    stickerDirFromFrame: L,
    stickerCornersDir: ne,
    stickerSampleDir: U,
    stickerCornerOrderSanity: w,
    projectEditorPoints: V,
    projectErpPointToEditor: ae,
    frameLocalPointToWorldDir: H,
    erpPointToWorldDir: J,
    worldDirToFrameLocalPoint: $,
    projectLassoPointsToCurrentView: Q,
    projectErpLassoPointsToFrameRect: G,
    screenPos: q,
    screenPosCss: me,
    screenPosToErpPoint: _e,
    screenPosToFrameAsErpPoint: te,
    deviceRect: de
  };
}
function sN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, u, d, c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O;
  function q(A, ce) {
    const y = String(A.actionGroupId || A.id || "").trim(), v = z(y, A.layerKind), F = s(y, A.layerKind, v), S = (F == null ? void 0 : F.centerUv) || X(y, A.layerKind, v), j = n.mode === "unwrap" ? Number((S == null ? void 0 : S.u) || 0) : null, x = [], R = n.mode === "frame" ? l() : null, _ = R ? c(R) : null;
    for (const fe of v) {
      const ge = (fe == null ? void 0 : fe.geometry) || null, b = (ge == null ? void 0 : ge.geometryKind) === "lasso_fill" ? ge == null ? void 0 : ge.points : (ge == null ? void 0 : ge.processedPoints) || (ge == null ? void 0 : ge.rawPoints) || (ge == null ? void 0 : ge.points) || [], m = J(b, R, _, j).filter((k) => Number.isFinite(k == null ? void 0 : k.x) && Number.isFinite(k == null ? void 0 : k.y));
      if (!m.length) continue;
      const T = u(String((fe == null ? void 0 : fe.toolKind) || "pen")), M = Mn[T] || Mn[Nr];
      x.push({
        points: m,
        closed: String((ge == null ? void 0 : ge.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((fe == null ? void 0 : fe.size) || 10) * Math.max(0.1, Number((M == null ? void 0 : M.sizeScale) ?? 1)) + 10),
        layerKind: String((fe == null ? void 0 : fe.layerKind) || A.layerKind || "paint")
      });
    }
    const P = $(S, null, R, _, j);
    if (!P) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ce, fe), fe;
    }
    const B = d(F).map((fe) => $(fe, P.x, R, _, j)).filter((fe) => Number.isFinite(fe == null ? void 0 : fe.x) && Number.isFinite(fe == null ? void 0 : fe.y)).map((fe) => ({ x: Number(fe.x || 0), y: Number(fe.y || 0) }));
    if (B.length < 4) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ce, fe), fe;
    }
    const le = (fe, ge) => ({
      x: (Number((fe == null ? void 0 : fe.x) || 0) + Number((ge == null ? void 0 : ge.x) || 0)) * 0.5,
      y: (Number((fe == null ? void 0 : fe.y) || 0) + Number((ge == null ? void 0 : ge.y) || 0)) * 0.5,
      a: fe,
      b: ge
    }), he = le(B[0], B[1]), ee = le(B[1], B[2]), pe = le(B[2], B[3]), Se = le(B[3], B[0]), Pe = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: B,
      edgeMidpoints: [
        { edge: "top", ...he },
        { edge: "right", ...ee },
        { edge: "bottom", ...pe },
        { edge: "left", ...Se }
      ],
      rotateStemBase: { x: he.x, y: he.y },
      rotateHandle: { x: he.x, y: he.y - 30 },
      strokePaths: x,
      visible: !0
    };
    return n._strokeGeomCache.set(ce, Pe), Pe;
  }
  function me(A, ce) {
    const y = n.mode === "frame" ? l() : null, v = y ? c(y) : null, F = f(A), S = n.mode === "unwrap" ? Number((F == null ? void 0 : F.u) || 0) : null, j = $(F, null, y, v, S), R = w(A).map((B) => $(B, (j == null ? void 0 : j.x) ?? null, y, v, S)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y));
    if (!Array.isArray(R) || R.length < 4) {
      const B = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(ce, B), B;
    }
    const _ = R.slice(0, 4).map((B) => ({ x: Number((B == null ? void 0 : B.x) || 0), y: Number((B == null ? void 0 : B.y) || 0) })), I = {
      kind: "rasterObject",
      center: {
        x: _.reduce((B, le) => B + Number(le.x || 0), 0) / _.length,
        y: _.reduce((B, le) => B + Number(le.y || 0), 0) / _.length
      },
      corners: _,
      visible: !0
    };
    return n._strokeGeomCache.set(ce, I), I;
  }
  function _e(A, ce = null, y = null, v = null, F = {}) {
    if (n.mode === "frame") {
      const P = y || l(), I = v || c(P);
      if (!P || !I) return null;
      const B = P ? O(P, A) : null;
      return B ? {
        x: Number(I.x || 0) + Number(B.x || 0) * Number(I.w || 0),
        y: Number(I.y || 0) + Number(B.y || 0) * Number(I.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return H(A, ce);
    const S = 1e-4, j = o().project(A, S);
    if (!Number.isFinite(j.z) || j.z <= S && !(F != null && F.clipBehind)) return null;
    const x = r.width, R = r.height, _ = Math.max(x, R) * 2;
    return {
      x: Ie(j.x, -_, x + _),
      y: Ie(j.y, -_, R + _),
      z: Math.max(j.z, S),
      rawZ: j.z,
      clipped: j.z <= S
    };
  }
  function te(A, ce = []) {
    if (n.mode !== "pano" || ne(A)) return 1;
    const y = ce.map((v) => Number((v == null ? void 0 : v.rawZ) ?? (v == null ? void 0 : v.z))).filter((v) => Number.isFinite(v));
    return y.length ? NP(0.035, 0.2, Math.min(...y)) : 1;
  }
  function N(A) {
    if (re(A) && !Q(A)) return { visible: !1 };
    const ce = V(A), y = Pn(Number(ce.yaw_deg || 0), Number(ce.pitch_deg || 0)), v = n.mode === "frame" ? l() : null, F = v ? c(v) : null, S = n.mode === "pano" && (ne(A) || L(A)), j = S ? { clipBehind: !0 } : null, x = _e(y, null, v, F, j);
    if (!x) return { visible: !1 };
    const R = p(A), P = K(A).map((ie) => _e(ie, x.x, v, F, j)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y));
    if (P.length < 4) return { visible: !1 };
    const I = E(R, 0, R.tanY), B = E(R, 0, R.tanY + Math.max(R.tanY * 0.43, 0.053)), le = _e(I, x.x, v, F, j);
    if (!le) return { visible: !1 };
    const he = _e(B, (le == null ? void 0 : le.x) ?? x.x, v, F, j), ee = ((he == null ? void 0 : he.x) ?? le.x) - le.x, pe = ((he == null ? void 0 : he.y) ?? le.y) - le.y, Se = Math.hypot(ee, pe) || 1, Pe = {
      x: le.x + ee / Se * 30,
      y: le.y + pe / Se * 30
    }, fe = _e(E(R, 0, R.tanY), x.x, v, F, j), ge = _e(E(R, R.tanX, 0), x.x, v, F, j), b = _e(E(R, 0, -R.tanY), x.x, v, F, j), m = _e(E(R, -R.tanX, 0), x.x, v, F, j);
    if (!fe || !ge || !b || !m) return { visible: !1 };
    const T = [
      x,
      ...P,
      le,
      he,
      fe,
      ge,
      b,
      m
    ];
    if (S && !T.some((ie) => Number((ie == null ? void 0 : ie.rawZ) ?? (ie == null ? void 0 : ie.z)) > 1e-4)) return { visible: !1 };
    const M = te(A, T), k = [
      {
        edge: "top",
        x: fe.x,
        y: fe.y,
        a: { x: P[0].x, y: P[0].y },
        b: { x: P[1].x, y: P[1].y }
      },
      {
        edge: "right",
        x: ge.x,
        y: ge.y,
        a: { x: P[1].x, y: P[1].y },
        b: { x: P[2].x, y: P[2].y }
      },
      {
        edge: "bottom",
        x: b.x,
        y: b.y,
        a: { x: P[2].x, y: P[2].y },
        b: { x: P[3].x, y: P[3].y }
      },
      {
        edge: "left",
        x: m.x,
        y: m.y,
        a: { x: P[3].x, y: P[3].y },
        b: { x: P[0].x, y: P[0].y }
      }
    ];
    return {
      center: { x: x.x, y: x.y },
      corners: P.map((ie) => ({ x: ie.x, y: ie.y })),
      edgeMidpoints: k,
      rotateStemBase: { x: le.x, y: le.y },
      rotateHandle: Pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: M,
      visible: !0
    };
  }
  function oe(A) {
    if (t && L(A) && Y()) return { visible: !1 };
    if (!de() && (U(A) || C(A))) return { visible: !1 };
    if (U(A)) {
      const F = String(A.actionGroupId || A.id || "").trim(), S = D(F, A.layerKind), j = n._strokeGeomCache.get(S);
      return j || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), q(A, S));
    }
    if (C(A)) {
      const F = g(A), S = n._strokeGeomCache.get(F);
      return S || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), me(A, F));
    }
    const ce = h(A), y = n._strokeGeomCache.get(ce);
    if (y) return y;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const v = N(A);
    return n._strokeGeomCache.set(ce, v), v;
  }
  function ue(A, ce, y, v = null) {
    const F = [];
    for (let S = 0; S <= y; S += 1) {
      const j = S / y;
      let x = 0, R = 0;
      ce === 0 ? (x = j, R = 0) : ce === 1 ? (x = 1, R = j) : ce === 2 ? (x = 1 - j, R = 1) : (x = 0, R = 1 - j);
      const _ = G(A, x, R), P = n.mode === "unwrap" ? H(_, v) : ae(_);
      P && F.push(P);
    }
    return F;
  }
  function be() {
    const A = [...Array.isArray(i.shots) ? i.shots : []], ce = [...a()].sort((y, v) => Number(y.z_index || 0) - Number(v.z_index || 0));
    return [...A, ...ce];
  }
  function ve() {
    const A = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((y, v) => Number(v.z_index || 0) - Number(y.z_index || 0)), ...A];
  }
  return {
    connect(A) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: u,
        getFrameCornersUv: d,
        getFrameViewRect: c,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: g,
        getRasterObjectTransformedErpPoints: w,
        getSceneItemGeomCacheKey: h,
        getStickerFrame: p,
        getStrokeGeomCacheKey: D,
        getStrokeGroupCenterUv: X,
        getStrokeGroupStrokes: z,
        isFreeSpaceView: Y,
        isRasterObjectItem: C,
        isSceneSticker: re,
        isShotItem: L,
        isStickerItem: ne,
        isStrokeGroupItem: U,
        paintingShown: de,
        poseOf: V,
        projectDir: ae,
        projectDirUnwrap: H,
        projectEditorPoints: J,
        projectErpPointToEditor: $,
        sceneStickerShown: Q,
        stickerCornersDir: K,
        stickerDirFromFrame: E,
        stickerSampleDir: G,
        worldDirToFrameLocalPoint: O
      } = A);
    },
    projectSceneItemDir: _e,
    objectGeom: oe,
    sampleStickerEdge: ue,
    getCutoutSelectableItemsForDisplay: be,
    getCutoutSelectableItemsForHit: ve
  };
}
const Za = /* @__PURE__ */ new Map();
function lN(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: a,
    state: s
  } = e;
  let l, u, d, c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V;
  function ae(S = r.interaction) {
    const j = String((S == null ? void 0 : S.kind) || "");
    if (j === "paint_stroke" || j === "paint_lasso_fill" || j === "move_stroke_group" || j === "scale_stroke_group" || j === "rotate_stroke_group" || j === "move_raster_object" || j === "scale_raster_object") return !0;
    if (j === "move_multi") {
      const x = Array.isArray(S == null ? void 0 : S.strokeSnapshots) && S.strokeSnapshots.length > 0, R = Array.isArray(S == null ? void 0 : S.rasterSnapshots) && S.rasterSnapshots.length > 0;
      return x || R;
    }
    return !1;
  }
  function H() {
    var j, x, R, _;
    let S = null;
    try {
      const P = h(), I = ((_ = (R = (x = (j = r.paintEngine) == null ? void 0 : j.getErpTarget) == null ? void 0 : x.call(j, P)) == null ? void 0 : R.displayPaint) == null ? void 0 : _.canvas) || null;
      I && (S = {
        source: I,
        revision: `${p()}:${J()}`
      });
    } catch {
      S = null;
    }
    return S;
  }
  function J() {
    var _, P, I, B, le, he, ee;
    const S = r.interaction, j = String((S == null ? void 0 : S.kind) || "");
    if (!ae(S)) return "";
    if (j === "paint_stroke" || j === "paint_lasso_fill") {
      const pe = ((_ = S == null ? void 0 : S.stroke) == null ? void 0 : _.geometry) || null, Se = String(((P = S == null ? void 0 : S.stroke) == null ? void 0 : P.layerKind) || ""), Pe = ((I = pe == null ? void 0 : pe.rawPoints) == null ? void 0 : I.length) ?? ((B = pe == null ? void 0 : pe.points) == null ? void 0 : B.length) ?? 0, fe = String((S == null ? void 0 : S._livePreviewToken) || "");
      return `_${Se || "paint"}_${j}_live${fe}_${Pe}_${r.livePaintInteractionRevision}`;
    }
    const x = String(((le = S == null ? void 0 : S.item) == null ? void 0 : le.actionGroupId) || ""), R = String(((he = S == null ? void 0 : S.item) == null ? void 0 : he.rasterObjectId) || ((ee = S == null ? void 0 : S.item) == null ? void 0 : ee.id) || "");
    return `_${j}_${x || R || "active"}_${r.livePaintInteractionRevision}`;
  }
  function $(S, j = null) {
    const x = String((S == null ? void 0 : S.rasterDataUrl) || "").trim();
    if (!x) return null;
    const R = a.get(x);
    if (R)
      return R.complete || R.width || R.naturalWidth, R;
    const _ = new Image();
    return _.onload = () => {
      typeof j == "function" && j();
    }, _.src = x, a.set(x, _), _;
  }
  function Q(S) {
    const j = String((S == null ? void 0 : S.rasterDataUrl) || "").trim();
    if (!j) return null;
    const x = o.get(j);
    if (x) return x.ready ? x : null;
    const R = $(S, () => {
      const ee = o.get(j);
      ee && (ee.ready = !1), U({ localOnly: !0 });
    });
    if (!R || !(R.complete || R.width || R.naturalWidth)) return null;
    const _ = Number(R.naturalWidth || R.width || 0), P = Number(R.naturalHeight || R.height || 0);
    if (_ < 1 || P < 1) return null;
    const I = en({ label: "editor.image-pixels" });
    I.width = _, I.height = P;
    const B = I.getContext("2d", { willReadFrequently: !0 });
    if (!B) return null;
    B.clearRect(0, 0, _, P), B.drawImage(R, 0, 0, _, P);
    const le = B.getImageData(0, 0, _, P).data, he = { canvas: I, width: _, height: P, alpha: le, ready: !0 };
    return o.set(j, he), he;
  }
  function K(S, j) {
    if (!S || !j) return null;
    const x = (S == null ? void 0 : S.bbox) || null;
    if (!x) return null;
    const R = (S == null ? void 0 : S.transform) || {}, _ = {
      u: (Number(x.u0 || 0) + Number(x.u1 || 0)) * 0.5,
      v: (Number(x.v0 || 0) + Number(x.v1 || 0)) * 0.5
    }, P = {
      u: ((Number(j.u || 0) - Number(R.du || 0)) % 1 + 1) % 1,
      v: Number(j.v || 0) - Number(R.dv || 0)
    }, I = z(
      P,
      _,
      Number(R.scale || 1),
      Number(R.rot_deg || 0)
    ), B = Number(x.u1 || 0) - Number(x.u0 || 0), le = Number(x.v1 || 0) - Number(x.v0 || 0);
    if (!(B > 1e-6) || !(le > 1e-6)) return null;
    const he = V(Number(I.u || 0), Number(x.u0 || 0)) / B, ee = (Number(I.v || 0) - Number(x.v0 || 0)) / le;
    if (he < 0 || he > 1 || ee < 0 || ee > 1) return 0;
    const pe = Q(S);
    if (!pe) return null;
    const Se = Ie(Math.floor(he * pe.width), 0, pe.width - 1), Pe = Ie(Math.floor(ee * pe.height), 0, pe.height - 1);
    return Number(pe.alpha[(Pe * pe.width + Se) * 4 + 3] || 0);
  }
  function E(S, j, x, R = null) {
    if (!(j != null && j.visible) || !Br(x, j.corners)) return !1;
    const _ = R || de(x, performance.now()), P = K(S, _);
    return P === null ? !0 : P > 8;
  }
  function G() {
    var R, _, P, I, B, le, he, ee;
    const S = ((_ = (R = r.paintEngine) == null ? void 0 : R.getErpTarget) == null ? void 0 : _.call(R, h(!1))) || null, j = Math.max(1, Number(((P = S == null ? void 0 : S.descriptor) == null ? void 0 : P.width) || ((B = (I = S == null ? void 0 : S.displayPaint) == null ? void 0 : I.canvas) == null ? void 0 : B.width) || 2048)), x = Math.max(1, Number(((le = S == null ? void 0 : S.descriptor) == null ? void 0 : le.height) || ((ee = (he = S == null ? void 0 : S.displayPaint) == null ? void 0 : he.canvas) == null ? void 0 : ee.height) || 1024));
    return { width: j, height: x };
  }
  function O() {
    var Pe, fe, ge;
    const S = r.interaction;
    if ((S == null ? void 0 : S.kind) !== "paint_stroke") return null;
    const j = (S == null ? void 0 : S.stroke) || null;
    if (!j || String((j == null ? void 0 : j.layerKind) || "") !== "paint" || String((j == null ? void 0 : j.toolKind) || "") !== "eraser") return null;
    const x = c(), R = `${J()}:${x.width}:${x.height}`;
    if (((Pe = r._activePaintEraserPreviewInfo) == null ? void 0 : Pe.cacheKey) === R)
      return r._activePaintEraserPreviewInfo.value || null;
    const _ = cn(j), P = (_ == null ? void 0 : _.geometry) || null;
    if (P && String(P.geometryKind || "") !== "lasso_fill") {
      const b = Array.isArray(P.rawPoints) && P.rawPoints.length ? P.rawPoints : Array.isArray(P.points) ? P.points : [];
      P.processedPoints = re(b, _.targetSpace, !0);
    }
    const I = u(x.width, x.height, { readback: !0 });
    if (!L(I, _, { w: x.width, h: x.height })) return null;
    const B = ((ge = (fe = I.ctx) == null ? void 0 : fe.getImageData(0, 0, x.width, x.height)) == null ? void 0 : ge.data) || null;
    if (!B) return null;
    let le = x.width, he = x.height, ee = -1, pe = -1;
    for (let b = 0; b < x.height; b += 1)
      for (let m = 0; m < x.width; m += 1)
        B[(b * x.width + m) * 4 + 3] <= 8 || (m < le && (le = m), b < he && (he = b), m > ee && (ee = m), b > pe && (pe = b));
    if (ee < le || pe < he)
      return r._activePaintEraserPreviewInfo = { cacheKey: R, value: null }, null;
    const Se = {
      surface: I,
      bounds: { minX: le, minY: he, maxX: ee, maxY: pe },
      key: `${R}:${le}:${he}:${ee}:${pe}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: R, value: Se }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Se;
  }
  function q() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function me(S, j, x) {
    var R, _;
    if (!S) return null;
    if (S.type === "rasterObject" && ((R = S.item) != null && R.bbox)) {
      const P = S.item.bbox, I = ((_ = S.item) == null ? void 0 : _.transform) || {}, B = Number(P.u0 || 0) + Number(I.du || 0), le = Number(P.u1 || 0) + Number(I.du || 0), he = Number(P.v0 || 0) + Number(I.dv || 0), ee = Number(P.v1 || 0) + Number(I.dv || 0);
      return {
        minX: Math.floor((B % 1 + 1) % 1 * j),
        maxX: Math.ceil((le % 1 + 1) % 1 * j),
        minY: Math.floor(Ie(he, 0, 1) * x),
        maxY: Math.ceil(Ie(ee, 0, 1) * x),
        wraps: le - B >= 1 || B < 0 || le > 1
      };
    }
    if (S.type === "strokeGroup") {
      const P = X(S.actionGroupId, "paint"), I = d(S.actionGroupId, "paint", P);
      if (!I) return null;
      const B = I.centerUv.u - I.halfW, le = I.centerUv.u + I.halfW, he = I.centerUv.v - I.halfH, ee = I.centerUv.v + I.halfH;
      return {
        minX: Math.floor((B % 1 + 1) % 1 * j),
        maxX: Math.ceil((le % 1 + 1) % 1 * j),
        minY: Math.floor(Ie(he, 0, 1) * x),
        maxY: Math.ceil(Ie(ee, 0, 1) * x),
        wraps: le - B >= 1 || B < 0 || le > 1
      };
    }
    return null;
  }
  function _e(S, j, x) {
    if (!S || !j) return !1;
    const R = (I) => I.wraps ? [
      { minX: 0, maxX: I.maxX, minY: I.minY, maxY: I.maxY, wraps: !1 },
      { minX: I.minX, maxX: x - 1, minY: I.minY, maxY: I.maxY, wraps: !1 }
    ] : [I], _ = R(S), P = R(j);
    return _.some((I) => P.some((B) => !(I.maxX < B.minX || B.maxX < I.minX || I.maxY < B.minY || B.maxY < I.minY)));
  }
  function te(S, j, x) {
    var k, ie, ye, W, se, Ne, we;
    if (!S || !j || !((k = x == null ? void 0 : x.surface) != null && k.canvas) || j.type !== "rasterObject") return S;
    const R = Number(S.width || x.surface.canvas.width || 0), _ = Number(S.height || x.surface.canvas.height || 0);
    if (R < 1 || _ < 1) return S;
    const P = me(j, R, _);
    if (P && !_e(P, x.bounds, R)) return S;
    const I = String(((ie = j.item) == null ? void 0 : ie.id) || j.id || ""), B = ((ye = j.item) == null ? void 0 : ye.transform) || {}, le = `${x.key}:${I}:${R}:${_}:${Number(B.du || 0).toFixed(6)}:${Number(B.dv || 0).toFixed(6)}:${Number(B.rot_deg || 0).toFixed(3)}:${Number(B.scale || 1).toFixed(4)}`, he = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (he.has(le)) return he.get(le);
    const ee = Ie(Math.floor(Number(((W = x.bounds) == null ? void 0 : W.minX) || 0)), 0, Math.max(0, R - 1)), pe = Ie(Math.floor(Number(((se = x.bounds) == null ? void 0 : se.minY) || 0)), 0, Math.max(0, _ - 1)), Se = Ie(Math.ceil(Number(((Ne = x.bounds) == null ? void 0 : Ne.maxX) || 0)), ee, Math.max(0, R - 1)), Pe = Ie(Math.ceil(Number(((we = x.bounds) == null ? void 0 : we.maxY) || 0)), pe, Math.max(0, _ - 1)), fe = Math.max(1, Se - ee + 1), ge = Math.max(1, Pe - pe + 1), b = u(R, _, { readback: !0 });
    b.ctx.clearRect(0, 0, R, _), b.ctx.drawImage(S, 0, 0);
    const m = b.ctx.getImageData(ee, pe, fe, ge);
    b.ctx.save(), b.ctx.globalCompositeOperation = "destination-out", b.ctx.drawImage(x.surface.canvas, 0, 0), b.ctx.restore();
    const T = b.ctx.getImageData(ee, pe, fe, ge);
    let M = !1;
    for (let Me = 0; Me < fe * ge; Me += 1) {
      const De = m.data[Me * 4 + 3], Le = T.data[Me * 4 + 3];
      if (De > Le) {
        M = !0;
        break;
      }
    }
    return M ? (he.size > 64 && he.clear(), he.set(le, b.canvas), b.canvas) : (he.set(le, S), S);
  }
  function N(S, j = null) {
    const x = C((S == null ? void 0 : S.rasterObjectId) || (S == null ? void 0 : S.id) || ""), R = (S == null ? void 0 : S.bbox) || null;
    if (!x || !R) return null;
    const _ = $(S, j);
    if (!_ || !(_.complete || _.width || _.naturalWidth)) return null;
    const { width: P, height: I } = G(), B = (S == null ? void 0 : S.transform) || {}, le = [
      x,
      P,
      I,
      R.u0,
      R.v0,
      R.u1,
      R.v1,
      B.du,
      B.dv,
      B.rot_deg,
      B.scale,
      D()
    ].join(":"), he = i.get(le);
    if (he) return he;
    i.size > 64 && i.clear();
    const ee = en({ label: "editor.raster-erp" });
    ee.width = P, ee.height = I;
    const pe = ee.getContext("2d");
    return pe ? (Eg(pe, _, S, P, I), i.set(le, ee), ee) : null;
  }
  async function oe(S, j) {
    const x = await new Promise((B) => S.toBlob(B, "image/png")), R = new FormData();
    R.append("image", x, j), R.append("type", "input"), R.append("subfolder", "panorama_stickers"), R.append("overwrite", "1");
    const _ = await t.fetchApi("/upload/image", { method: "POST", body: R });
    if (!_ || _.status !== 200) throw new Error(`upload failed (${_ == null ? void 0 : _.status})`);
    const P = await _.json(), I = String((P == null ? void 0 : P.name) || "").trim();
    if (!I) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: I,
      subfolder: String((P == null ? void 0 : P.subfolder) || "panorama_stickers"),
      storage: String((P == null ? void 0 : P.type) || "input")
    };
  }
  let ue = null, be = !1;
  function ve() {
    const S = ip(s.painting), { width: j, height: x } = f();
    return r1(s.painting_layer, { paintCount: S.totalPaintCount, maskCount: S.totalMaskCount, width: j, height: x, nodeId: String(n.id ?? "0") });
  }
  function A() {
    const S = String(n.id ?? "0"), j = Za.get(S);
    if (be && j) return j;
    const x = (async () => {
      var P, I, B, le, he, ee, pe, Se, Pe, fe, ge, b;
      const R = p(), _ = ip(s.painting);
      if (_.totalPaintCount <= 0 && _.totalMaskCount <= 0) {
        s.painting_layer !== null && (s.painting_layer = null, ue = R, l());
        return;
      }
      if (ue !== R && !be) {
        be = !0;
        try {
          ne();
          const m = h(!1), T = ((I = (P = r.paintEngine) == null ? void 0 : P.getErpTarget) == null ? void 0 : I.call(P, m)) || null, M = ((B = T == null ? void 0 : T.displayPaint) == null ? void 0 : B.canvas) || null, k = ((le = T == null ? void 0 : T.committedMask) == null ? void 0 : le.canvas) || null, ie = Math.max(1, Number(((he = T == null ? void 0 : T.descriptor) == null ? void 0 : he.width) || (M == null ? void 0 : M.width) || (k == null ? void 0 : k.width) || 2048)), ye = Math.max(1, Number(((ee = T == null ? void 0 : T.descriptor) == null ? void 0 : ee.height) || (M == null ? void 0 : M.height) || (k == null ? void 0 : k.height) || 1024));
          (!M && _.totalPaintCount > 0 || !k && _.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((pe = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : pe.width) || 0) !== ie || Number(((Se = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Se.height) || 0) !== ye) && (r._paintLayerSyncBlankSurface = u(ie, ye)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ie, ye));
          const W = M || _.totalPaintCount > 0 && ((Pe = r._paintLayerSyncBlankSurface) == null ? void 0 : Pe.canvas) || null, se = k || _.totalMaskCount > 0 && ((fe = r._paintLayerSyncBlankSurface) == null ? void 0 : fe.canvas) || null;
          if (!W && !se) return;
          let Ne = null, we = null;
          const Me = [];
          if (_.totalPaintCount > 0) {
            Ne = await oe(W, `pano_paint_${S}.png`);
            for (const De of m) {
              const Le = String(De || "").trim();
              if (!Le) continue;
              const Ge = ((b = (ge = r.paintEngine) == null ? void 0 : ge.getGroupDisplayCanvas) == null ? void 0 : b.call(ge, Le)) || null;
              if (!Ge) continue;
              const qe = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ve = await oe(Ge, `pano_group_${S}_${qe}.png`);
              Ve && Me.push({
                id: Le,
                actionGroupId: Le,
                image: Ve
              });
            }
          }
          _.totalMaskCount > 0 && (we = await oe(se, `pano_mask_${S}.png`)), R === p() && (s.painting_layer = {
            paint: Ne,
            mask: we,
            groups: Me,
            revision: R
          }, ue = R, l());
        } catch (m) {
          throw m;
        } finally {
          be = !1;
        }
      }
    })();
    return Za.set(S, x), x.finally(() => {
      Za.get(S) === x && Za.delete(S);
    }), x;
  }
  function ce(S) {
    var I;
    const j = ((I = r.paintEngine) == null ? void 0 : I.getMaskDisplayCanvas()) || null;
    if (!j) return S;
    const x = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, R = S.reduce((B, le) => Math.max(B, Number((le == null ? void 0 : le.zIndex) || 0)), -1), _ = (Array.isArray(s.stickers) ? s.stickers : []).reduce((B, le) => Math.max(B, Number((le == null ? void 0 : le.z_index) || 0)), -1), P = Math.max(R, _);
    return S.push({
      id: "mask_display",
      source: j,
      revision: x,
      zIndex: P + 1,
      opacity: 1,
      visible: !0
    }), S;
  }
  function y() {
    var R, _;
    const S = w(!0), j = O(), x = [];
    for (const P of S) {
      if ((P == null ? void 0 : P.type) === "strokeGroup") {
        const I = String(P.actionGroupId || P.id || "");
        if (!I) continue;
        const B = ((_ = (R = r.paintEngine) == null ? void 0 : R.getGroupDisplayCanvas) == null ? void 0 : _.call(R, I)) || null;
        if (!B) continue;
        x.push({
          id: `paint_group:${I}`,
          source: B,
          revision: `${g()}:${I}`,
          zIndex: Number((P == null ? void 0 : P.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((P == null ? void 0 : P.type) === "rasterObject") {
        const I = P.item || null, B = C((I == null ? void 0 : I.id) || P.id || "");
        if (!B) continue;
        const le = N(I, () => U());
        if (!le) continue;
        const he = te(le, P, j), ee = (I == null ? void 0 : I.transform) || {};
        x.push({
          id: `raster:${B}`,
          source: he,
          revision: [
            p(),
            (j == null ? void 0 : j.key) || "",
            B,
            Number(ee.du || 0).toFixed(6),
            Number(ee.dv || 0).toFixed(6),
            Number(ee.rot_deg || 0).toFixed(3),
            Number(ee.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((P == null ? void 0 : P.z_index) || 0),
          opacity: 1,
          visible: (I == null ? void 0 : I.visible) !== !1
        });
      }
    }
    return ce(x);
  }
  function v() {
    return Y() ? y().filter((S) => S.visible !== !1).map((S) => ({ id: S.id, media: S.source, revision: S.revision, opacity: S.opacity, zIndex: S.zIndex })) : [];
  }
  function F() {
    s.painting_layer !== null && (s.painting_layer = null), ue = "";
  }
  return {
    connect(S) {
      ({
        commitState: l,
        createRasterSurface: u,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: c,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: g,
        getOrderedDisplayListObjects: w,
        getOrderedPaintGroupIds: h,
        getPaintingCompositeRevisionKey: p,
        getPaintingRevisionKey: D,
        getStrokeGroupStrokes: X,
        inverseTransformErpPointAround: z,
        paintingShown: Y,
        parseRasterObjectSelectionId: C,
        processFreehandPoints: re,
        rasterizeStrokeToSurface: L,
        rebuildPaintEngineIfNeeded: ne,
        requestDraw: U,
        screenPosToErpPoint: de,
        shortestWrappedDelta: V
      } = S);
    },
    getSharedLivePaintSurface: H,
    getLivePaintRevisionSuffix: J,
    isPaintCompositeInteraction: ae,
    hitRasterObjectAt: E,
    invalidateLivePaintPreviewCaches: q,
    buildRasterObjectEditCanvas: N,
    needsPaintingLayerSync: ve,
    syncPaintingLayerAsync: A,
    invalidatePaintingLayerState: F,
    buildEditorViewPaintLayers: v
  };
}
function cN(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(te) {
    return !te || typeof te != "object" ? { x: 0, y: 0 } : { x: Number((te == null ? void 0 : te.u) || 0), y: Number((te == null ? void 0 : te.v) || 0) };
  }
  function u(te, N, oe, ue = {}) {
    return { ...{
      ...te,
      t: Number((te == null ? void 0 : te.t) || 0),
      widthScale: f(te, "widthScale", 1),
      pressureLike: f(te, "pressureLike", 1)
    }, ...ue, u: N, v: oe };
  }
  function d(te, N = !1) {
    return N ? 12e-4 : 18e-4;
  }
  function c(te, N, oe = !1) {
    if (!Array.isArray(te) || !te.length) return [];
    const ue = String((N == null ? void 0 : N.kind) || "") === "ERP_GLOBAL", be = /* @__PURE__ */ new WeakMap();
    if (ue) {
      let _ = null;
      te.forEach((P) => {
        const I = Number((P == null ? void 0 : P.u) || 0), B = Number((P == null ? void 0 : P.v) || 0), le = (I % 1 + 1) % 1, he = _ == null ? le : _ + s(le, (_ % 1 + 1) % 1);
        be.set(P, { x: he, y: B }), _ = he;
      });
    }
    const ve = (_) => !_ || typeof _ != "object" ? { x: 0, y: 0 } : be.get(_) || l(_), A = (_, P, I, B = {}) => {
      const le = ue ? (Number(P) % 1 + 1) % 1 : Number(P), he = u(_, le, I, B);
      return be.set(he, { x: Number(P), y: Number(I) }), he;
    }, ce = (_, P, I) => {
      const B = ve(_), le = ve(P);
      return A(_, $n(B.x, le.x, I), $n(B.y, le.y, I), {
        t: $n(Number((_ == null ? void 0 : _.t) || 0), Number((P == null ? void 0 : P.t) || 0), I),
        widthScale: $n(f(_, "widthScale", 1), f(P, "widthScale", 1), I),
        pressureLike: $n(f(_, "pressureLike", 1), f(P, "pressureLike", 1), I)
      });
    };
    if (te.length === 1) {
      const _ = ve(te[0]);
      return [A(te[0], _.x, _.y)];
    }
    const y = d(N, oe), v = (_, P) => {
      const I = [0];
      for (let fe = 1; fe < _.length; fe += 1) {
        const ge = ve(_[fe - 1]), b = ve(_[fe]);
        I.push(I[fe - 1] + Math.hypot(b.x - ge.x, b.y - ge.y));
      }
      const B = I[I.length - 1] || 0;
      if (B <= 1e-8) {
        const fe = _[0], ge = ve(fe);
        return [A(fe, ge.x, ge.y)];
      }
      const le = [];
      let he = 0;
      for (let fe = 0; fe <= B + 1e-9; fe += P) {
        for (; he < I.length - 2 && I[he + 1] < fe; ) he += 1;
        const ge = I[he], b = I[he + 1], m = Math.max(1e-8, b - ge);
        le.push(ce(_[he], _[he + 1], Ie((fe - ge) / m, 0, 1)));
      }
      const ee = _[_.length - 1], pe = ve(ee), Se = le[le.length - 1], Pe = Se ? ve(Se) : null;
      return (!Pe || Math.hypot(Pe.x - pe.x, Pe.y - pe.y) > P * 0.35) && le.push(A(ee, pe.x, pe.y)), le;
    }, F = (_) => {
      if (!Array.isArray(_) || _.length < 3) return _ ? _.slice() : [];
      const P = ve(_[0]), I = [A(_[0], P.x, P.y)];
      for (let he = 0; he < _.length - 1; he += 1) {
        const ee = _[he], pe = _[he + 1], Se = ve(ee), Pe = ve(pe), fe = A(
          ee,
          Se.x * 0.75 + Pe.x * 0.25,
          Se.y * 0.75 + Pe.y * 0.25,
          {
            t: Number(ee.t || 0) * 0.75 + Number(pe.t || 0) * 0.25,
            widthScale: f(ee, "widthScale", 1) * 0.75 + f(pe, "widthScale", 1) * 0.25,
            pressureLike: f(ee, "pressureLike", 1) * 0.75 + f(pe, "pressureLike", 1) * 0.25
          }
        ), ge = A(
          ee,
          Se.x * 0.25 + Pe.x * 0.75,
          Se.y * 0.25 + Pe.y * 0.75,
          {
            t: Number(ee.t || 0) * 0.25 + Number(pe.t || 0) * 0.75,
            widthScale: f(ee, "widthScale", 1) * 0.25 + f(pe, "widthScale", 1) * 0.75,
            pressureLike: f(ee, "pressureLike", 1) * 0.25 + f(pe, "pressureLike", 1) * 0.75
          }
        );
        I.push(fe, ge);
      }
      const B = _[_.length - 1], le = ve(B);
      return I.push(A(B, le.x, le.y)), I;
    }, S = v(te, y);
    if (S.length < 3) return S;
    const j = oe ? 2 : 1;
    let x = S.slice();
    for (let _ = 0; _ < j; _ += 1) x = F(x);
    return v(x, Math.max(y * 0.75, 55e-5));
  }
  function f(te, N, oe = 1) {
    const ue = Number(te == null ? void 0 : te[N]);
    return Number.isFinite(ue) ? Math.max(0, ue) : oe;
  }
  function g(te) {
    const N = Number(te == null ? void 0 : te.radiusValue);
    if (Number.isFinite(N) && N > 0) {
      const oe = String((te == null ? void 0 : te.radiusModel) || "").trim() || "erp_uv_norm";
      return oe === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((te == null ? void 0 : te.size) || 10) * 0.5 / 2048)
      } : {
        model: oe,
        value: N
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((te == null ? void 0 : te.size) || 10) * 0.5 / 2048)
    };
  }
  function w(te, N, oe = {}) {
    const ue = en({ label: "editor.raster-surface" });
    ue.width = Math.max(1, Math.round(te)), ue.height = Math.max(1, Math.round(N));
    const be = ue.getContext("2d", oe.readback ? { willReadFrequently: !0 } : void 0);
    return be && (be.clearRect(0, 0, ue.width, ue.height), be.imageSmoothingEnabled = !0), { canvas: ue, ctx: be };
  }
  function h() {
    const te = de();
    return `${String(t.paintStrokeRevision)}:${te.width}x${te.height}`;
  }
  function p() {
    const te = de();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${te.width}x${te.height}`;
  }
  function D() {
    const te = i(), N = p();
    return te ? `${N}:${te}` : N;
  }
  function X() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function z() {
    t.paintCompositeRevision += 1;
  }
  function Y() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function C() {
    var te, N;
    t.paintEngineRevisionKey = null, (N = (te = t.paintEngine) == null ? void 0 : te.rebuildCommitted) == null || N.call(te, n), t.paintEngineRevisionKey = h();
  }
  function re() {
    Y(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function L({ rebuildPaintEngine: te = !1 } = {}) {
    o(), X(), re(), te && C();
  }
  function ne() {
    o(), z(), re();
  }
  function U() {
    var ue;
    const te = de(), N = `${te.width}x${te.height}`;
    t.paintEngineDescriptorKey !== N && (t.paintEngine = fl(te), t.paintEngineDescriptorKey = N, t.paintEngineRevisionKey = "");
    const oe = h();
    t.paintEngineRevisionKey !== oe && (t.paintEngineRevisionKey = oe, (ue = t.paintEngine) == null || ue.rebuildCommitted(n));
  }
  function de() {
    const te = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: te,
      height: Math.max(1, Math.round(te * 0.5))
    };
  }
  function V() {
    return de();
  }
  function ae(te, N, oe, ue, be = null) {
    const ve = g(te), A = f(N, "widthScale", 1) * f(N, "pressureLike", 1);
    return ve.model === "erp_uv_norm" ? Math.max(0.5, ve.value * oe * A) : ve.model === "world_angle" ? be ? Math.max(0.5, ve.value / Math.max(1e-6, Number(be.hFOV_deg || 90) * mr) * oe * A) : Math.max(0.5, ve.value / (2 * Math.PI) * oe * A) : Math.max(0.5, Number((te == null ? void 0 : te.size) || 10) * 0.5 * A);
  }
  function H(te, N, oe = {}) {
    const ue = String((N == null ? void 0 : N.layerKind) || "paint"), be = String((N == null ? void 0 : N.toolKind) || "pen"), ve = oe.preview === !0, A = ve ? 0.78 : 1;
    if (te.globalAlpha = be === "marker" ? 0.7 * A : 1, ue === "mask") {
      te.fillStyle = ve ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (be === "eraser") {
      te.globalCompositeOperation = "destination-out", te.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const ce = String((N == null ? void 0 : N.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (N == null ? void 0 : N.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, y = ve ? Math.max(0.28, Number(ce.a ?? 1) * 0.88) : Math.max(0.12, Number(ce.a ?? 1));
    te.fillStyle = `rgba(${Math.round(Number(ce.r || 0) * 255)}, ${Math.round(Number(ce.g || 0) * 255)}, ${Math.round(Number(ce.b || 0) * 255)}, ${y})`;
  }
  function J(te, N, oe) {
    const ue = Math.max(0.5, Math.min(oe, Number((N == null ? void 0 : N.radiusPx) || 0.5)));
    !Number.isFinite(N == null ? void 0 : N.x) || !Number.isFinite(N == null ? void 0 : N.y) || !Number.isFinite(ue) || (te.beginPath(), te.arc(Number(N.x || 0), Number(N.y || 0), ue, 0, Math.PI * 2), te.fill());
  }
  function $(te, N, oe, ue, be = {}) {
    if (!te || !Array.isArray(N) || !N.length) return;
    const ve = Math.max(ue.w, ue.h) * 0.25;
    te.save(), H(te, oe, be);
    const A = (ce) => J(te, ce, ve);
    if (N.length === 1) {
      A(N[0]), te.restore();
      return;
    }
    for (let ce = 0; ce < N.length - 1; ce += 1) {
      const y = N[ce], v = N[ce + 1];
      if (!y || !v) continue;
      const F = Number(y.x || 0), S = Number(y.y || 0), j = Number(v.x || 0), x = Number(v.y || 0), R = Math.max(0.5, Math.min(ve, Number(y.radiusPx || 0.5))), _ = Math.max(0.5, Math.min(ve, Number(v.radiusPx || 0.5)));
      if (!Number.isFinite(F) || !Number.isFinite(S) || !Number.isFinite(j) || !Number.isFinite(x) || !Number.isFinite(R) || !Number.isFinite(_)) continue;
      const P = j - F, I = x - S, B = Math.hypot(P, I);
      if (!Number.isFinite(B) || B < 1e-6) {
        A(y);
        continue;
      }
      if (B > Math.max(ue.w, ue.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(R, _)), he = Math.max(0.35, Math.min(le * 0.4, 2.25)), ee = Math.max(1, Math.ceil(B / he));
      for (let pe = 0; pe <= ee; pe += 1) {
        const Se = pe / ee;
        A({
          x: $n(F, j, Se),
          y: $n(S, x, Se),
          radiusPx: $n(R, _, Se)
        });
      }
    }
    A(N[N.length - 1]), te.restore();
  }
  function Q(te, N, oe, ue) {
    $(te, N, oe, ue, { preview: !1 });
  }
  function K(te, N, oe, ue, be) {
    var ce, y, v, F;
    if (!te || !Array.isArray(N) || N.length < 3) return;
    const ve = "u", A = "v";
    if (te.save(), String((oe == null ? void 0 : oe.layerKind) || "") === "mask")
      te.fillStyle = "rgba(255,255,255,1)";
    else if (String((oe == null ? void 0 : oe.toolKind) || "") === "eraser")
      te.globalCompositeOperation = "destination-out", te.fillStyle = "rgba(0,0,0,1)";
    else {
      const S = (oe == null ? void 0 : oe.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      te.fillStyle = `rgba(${Math.round(Number(S.r || 0) * 255)}, ${Math.round(Number(S.g || 0) * 255)}, ${Math.round(Number(S.b || 0) * 255)}, ${Number(S.a ?? 1)})`;
    }
    te.beginPath(), te.moveTo(Number(((ce = N[0]) == null ? void 0 : ce[ve]) || 0) * ue.w, Number(((y = N[0]) == null ? void 0 : y[A]) || 0) * ue.h);
    for (let S = 1; S < N.length; S += 1)
      te.lineTo(Number(((v = N[S]) == null ? void 0 : v[ve]) || 0) * ue.w, Number(((F = N[S]) == null ? void 0 : F[A]) || 0) * ue.h);
    te.closePath(), te.fill(), te.restore();
  }
  function E(te) {
    const N = (te == null ? void 0 : te.geometry) || null;
    return N ? String(N.geometryKind || "") === "lasso_fill" ? Array.isArray(N.points) ? N.points : [] : Array.isArray(N.processedPoints) && N.processedPoints.length ? N.processedPoints : Array.isArray(N.rawPoints) && N.rawPoints.length ? N.rawPoints : Array.isArray(N.points) ? N.points : [] : [];
  }
  function G(te, N) {
    const oe = E(te);
    return !Array.isArray(oe) || !oe.length ? [] : oe.map((ue) => ({
      x: Number((ue == null ? void 0 : ue.u) || 0) * Number((N == null ? void 0 : N.w) || 1),
      y: Number((ue == null ? void 0 : ue.v) || 0) * Number((N == null ? void 0 : N.h) || 1),
      radiusPx: ae(te, ue, Number((N == null ? void 0 : N.w) || 1), Number((N == null ? void 0 : N.h) || 1))
    }));
  }
  function O(te, N, oe = null) {
    var ce, y, v, F;
    if (!(te != null && te.ctx) || !N) return !1;
    const ue = oe || { w: Number(((ce = te.canvas) == null ? void 0 : ce.width) || 0), h: Number(((y = te.canvas) == null ? void 0 : y.height) || 0) }, be = String((N == null ? void 0 : N.toolKind) || "") === "eraser" ? {
      ...N,
      layerKind: "mask",
      toolKind: String(((v = N == null ? void 0 : N.geometry) == null ? void 0 : v.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : N;
    if (String(((F = N == null ? void 0 : N.geometry) == null ? void 0 : F.geometryKind) || "") === "lasso_fill")
      return K(te.ctx, E(be), be, ue), !0;
    const A = G(be, ue);
    return A.length ? (Q(te.ctx, A, be, ue), !0) : !1;
  }
  function q(te, N, oe, ue = 8) {
    const be = new Uint8Array(N * oe), ve = [], A = new Int32Array(N * oe), ce = new Int32Array(N * oe);
    for (let y = 0; y < oe; y += 1)
      for (let v = 0; v < N; v += 1) {
        const F = y * N + v;
        if (be[F] || te[F] <= ue) continue;
        let S = 0, j = 0;
        A[j] = v, ce[j] = y, j += 1, be[F] = 1;
        const x = [];
        let R = v, _ = y, P = v, I = y;
        for (; S < j; ) {
          const B = A[S], le = ce[S];
          S += 1, x.push({ x: B, y: le }), B < R && (R = B), le < _ && (_ = le), B > P && (P = B), le > I && (I = le);
          const he = [
            [(B - 1 + N) % N, le],
            [(B + 1) % N, le],
            [B, le - 1],
            [B, le + 1]
          ];
          for (const [ee, pe] of he) {
            if (pe < 0 || pe >= oe) continue;
            const Se = pe * N + ee;
            be[Se] || te[Se] <= ue || (be[Se] = 1, A[j] = ee, ce[j] = pe, j += 1);
          }
        }
        ve.push({ pixels: x, minX: R, minY: _, maxX: P, maxY: I });
      }
    return ve;
  }
  function me(te, N) {
    const oe = [...new Set((Array.isArray(te == null ? void 0 : te.pixels) ? te.pixels : []).map((y) => Number((y == null ? void 0 : y.x) || 0)).filter((y) => Number.isFinite(y)))].sort((y, v) => y - v);
    if (!oe.length) return null;
    if (oe.length === 1)
      return { startX: oe[0], widthPx: 1 };
    let ue = -1, be = 0;
    for (let y = 0; y < oe.length; y += 1) {
      const v = oe[y], S = (y === oe.length - 1 ? oe[0] + N : oe[y + 1]) - v - 1;
      S > ue && (ue = S, be = y);
    }
    const ve = (oe[(be + 1) % oe.length] + N) % N;
    let A = 1 / 0, ce = -1 / 0;
    for (const y of oe) {
      const v = (y - ve + N) % N;
      A = Math.min(A, v), ce = Math.max(ce, v);
    }
    return {
      startX: ve,
      widthPx: Math.max(1, ce - A + 1)
    };
  }
  function _e(te, N, oe = {}) {
    var v;
    const ue = Number((te == null ? void 0 : te.width) || 0), be = Number((te == null ? void 0 : te.height) || 0), ve = (v = te == null ? void 0 : te.getContext) == null ? void 0 : v.call(te, "2d");
    if (!ve || ue < 1 || be < 1) return [];
    const A = ve.getImageData(0, 0, ue, be), ce = new Uint8Array(ue * be);
    for (let F = 0; F < ce.length; F += 1) ce[F] = A.data[F * 4 + 3];
    return q(ce, ue, be, 8).map((F, S) => {
      const j = me(F, ue);
      if (!j) return null;
      const x = Number(j.widthPx || 0), R = F.maxY - F.minY + 1, _ = Number(j.startX || 0), P = en({ label: "editor.lasso-fill" });
      P.width = x, P.height = R;
      const I = P.getContext("2d");
      if (!I) return null;
      const B = I.createImageData(x, R);
      return F.pixels.forEach(({ x: le, y: he }) => {
        const ee = (he * ue + le) * 4, pe = (Number(le || 0) - _ + ue) % ue, Se = ((he - F.minY) * x + pe) * 4;
        B.data[Se + 0] = A.data[ee + 0], B.data[Se + 1] = A.data[ee + 1], B.data[Se + 2] = A.data[ee + 2], B.data[Se + 3] = A.data[ee + 3];
      }), I.putImageData(B, 0, 0), {
        id: Gi("raster"),
        type: "raster_frozen",
        layerKind: N === "mask" ? "mask" : "paint",
        z_index: Number((oe == null ? void 0 : oe.z_index) || 0) + S * 1e-3,
        locked: (oe == null ? void 0 : oe.locked) === !0,
        bbox: {
          u0: 0,
          v0: F.minY / be,
          u1: x / ue,
          v1: (F.maxY + 1) / be
        },
        rasterDataUrl: P.toDataURL("image/png"),
        transform: {
          du: _ / ue,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(te) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = te);
    },
    processFreehandPoints: c,
    createRasterSurface: w,
    getPaintingRevisionKey: h,
    getPaintingCompositeRevisionKey: p,
    getDisplayPaintRevisionKey: D,
    refreshPaintEngineRevisionCache: C,
    markObjectVisualsDirty: re,
    markPaintStrokeVisualsDirty: L,
    markPaintCompositeVisualsDirty: ne,
    rebuildPaintEngineIfNeeded: U,
    getDesiredPaintTargetDescriptor: de,
    getActivePaintTargetDescriptor: V,
    rasterizeStrokeToSurface: O,
    createRasterFrozenObjectsFromCanvas: _e
  };
}
function uN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, u, d, c, f, g;
  function w(U, de = null) {
    var V;
    if (U && typeof U == "object" && !Array.isArray(U)) return U;
    if (Array.isArray(U) && U.length > 0) {
      const ae = U[0];
      if (ae && typeof ae == "object" && !Array.isArray(ae)) return ae;
    }
    if (Array.isArray(de) && de.length > 0) {
      const ae = (V = de[0]) == null ? void 0 : V.parsed_state;
      if (ae && typeof ae == "object" && !Array.isArray(ae))
        return {
          yaw_deg: Number(ae.yaw_deg || 0),
          pitch_deg: Number(ae.pitch_deg || 0),
          hFOV_deg: Number(ae.hFOV_deg || 30),
          rot_deg: Number(ae.roll_deg || 0)
        };
    }
    return null;
  }
  function h(U, de, V) {
    const ae = Math.max(1, Number(de || 1)), H = Math.max(1, Number(V || 1)), J = Ie(Number(U || 30), 0.1, 179) * mr, $ = 2 * Math.atan(Math.tan(J * 0.5) * (H / ae));
    return Ie($ * xi, 0.1, 179);
  }
  function p(U) {
    const de = String(U || "").trim();
    if (!de) return null;
    try {
      const V = JSON.parse(de);
      if (!V || typeof V != "object" || String(V.kind || "") !== "pano_sticker_state") return null;
      const ae = V.version;
      let H = null;
      if (typeof ae == "number" && Number.isInteger(ae) ? H = ae : typeof ae == "string" && /^\d+$/.test(ae) && (H = Number.parseInt(ae, 10)), H !== 1) return null;
      const J = V.pose;
      if (!J || typeof J != "object") return null;
      const $ = Number(J.yaw_deg), Q = Number(J.pitch_deg), K = Number(J.roll_deg), E = Number(J.hFOV_deg);
      if (![$, Q, K, E].every((me) => Number.isFinite(me))) return null;
      let G = (($ + 180) % 360 + 360) % 360 - 180;
      Object.is(G, -0) && (G = 0);
      const O = {
        yaw_deg: G,
        pitch_deg: Ie(Q, -89.9, 89.9),
        roll_deg: K,
        hFOV_deg: Ie(E, 0.1, 179)
      }, q = Number(V.source_aspect);
      return Number.isFinite(q) && q > 0 && (O.source_aspect = q), O;
    } catch {
      return null;
    }
  }
  function D(U) {
    const de = Number(U == null ? void 0 : U.yaw_deg), V = Number(U == null ? void 0 : U.pitch_deg), ae = Number((U == null ? void 0 : U.roll_deg) ?? (U == null ? void 0 : U.rot_deg)), H = Number(U == null ? void 0 : U.hFOV_deg), J = Mi(U);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(de) ? de : 0),
        pitch_deg: Ie(Number.isFinite(V) ? V : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ae) ? ae : 0,
        hFOV_deg: Ie(Number.isFinite(H) ? H : 90, 0.1, 179)
      },
      source_aspect: J
    };
  }
  function X(U) {
    var Q;
    if (!U || typeof U != "object") return D(null);
    const de = Number(U == null ? void 0 : U.yaw_deg), V = Number(U == null ? void 0 : U.pitch_deg), ae = Number((U == null ? void 0 : U.roll_deg) ?? (U == null ? void 0 : U.rot_deg)), H = Number(U == null ? void 0 : U.hFOV_deg), J = Number(U == null ? void 0 : U.vFOV_deg);
    let $ = 1;
    if (Number.isFinite(H) && Number.isFinite(J)) {
      const K = Ie(H, 0.1, 179) * mr, E = Ie(J, 0.1, 179) * mr, G = Math.tan(E * 0.5);
      if (Math.abs(G) > 1e-6) {
        const O = Math.tan(K * 0.5) / G;
        Number.isFinite(O) && O > 0 && ($ = O);
      }
    }
    if (U != null && U.asset_id && ((Q = o == null ? void 0 : o.assets) != null && Q[U.asset_id])) {
      const K = o.assets[U.asset_id], E = Number((K == null ? void 0 : K.w) || 0), G = Number((K == null ? void 0 : K.h) || 0);
      E > 0 && G > 0 && ($ = E / G);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(de) ? de : 0),
        pitch_deg: Ie(Number.isFinite(V) ? V : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ae) ? ae : 0,
        hFOV_deg: Ie(Number.isFinite(H) ? H : 30, 0.1, 179)
      },
      source_aspect: $
    };
  }
  function z(U) {
    return t.linkedValue(n, U);
  }
  function Y(U, de, V) {
    const ae = U && typeof U == "object" ? {
      yaw_deg: Number(U.yaw_deg || 0),
      pitch_deg: Number(U.pitch_deg || 0),
      roll_deg: Number(U.rot_deg ?? U.roll_deg ?? 0),
      hFOV_deg: Number(U.hFOV_deg || 30)
    } : p(de);
    if (ae) {
      const $ = Number((V == null ? void 0 : V.naturalWidth) || (V == null ? void 0 : V.width) || ae.source_aspect || 1), Q = Number((V == null ? void 0 : V.naturalHeight) || (V == null ? void 0 : V.height) || 1);
      return {
        yaw_deg: Number(ae.yaw_deg || 0),
        pitch_deg: Number(ae.pitch_deg || 0),
        hFOV_deg: Number(ae.hFOV_deg || 30),
        vFOV_deg: h(ae.hFOV_deg, $, Q),
        rot_deg: Number(ae.roll_deg || 0)
      };
    }
    const H = Number((V == null ? void 0 : V.naturalWidth) || (V == null ? void 0 : V.width) || 1), J = Number((V == null ? void 0 : V.naturalHeight) || (V == null ? void 0 : V.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: h(30, H, J),
      rot_deg: 0
    };
  }
  function C() {
    const U = l(() => {
      Tr(n, "image-loaded");
    }), de = Yt(n, "external-sticker") ? w(u("pano_sticker_input_pose"), null) : null;
    return Hm(o, jm(n, { pose: de, image: U }));
  }
  function re() {
    var Q;
    const U = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((K) => String((K == null ? void 0 : K.name) || "") === "sticker_image") : -1, de = U >= 0 ? ((Q = n.getInputLink(U)) == null ? void 0 : Q.id) ?? null : null, V = l(() => {
      Tr(n, "image-loaded");
    }), ae = w(u("pano_sticker_input_pose"), null), H = z("sticker_state"), J = t.externalStateHash(n, H), $ = de == null ? null : Y(ae, H, V);
    return zm(o, {
      connected: de != null,
      linkId: de,
      stateHash: J,
      pose: $,
      imageWidth: Number((V == null ? void 0 : V.naturalWidth) || (V == null ? void 0 : V.width) || 0),
      imageHeight: Number((V == null ? void 0 : V.naturalHeight) || (V == null ? void 0 : V.height) || 0)
    });
  }
  function L(U = "sync") {
    if (a !== "stickers" || i) return;
    const de = n.__panoSceneStateV2 ? C() : re();
    if (de.changed) {
      const V = o.stickers.find(d);
      o.stickers = de.state.stickers, o.active = de.state.active, V && r.selectedId === V.id && !o.stickers.some((ae) => ae.id === V.id) && (r.selectedId = null, r.selectedIds = []), s(), g(), f();
    }
    c();
  }
  function ne() {
    const U = Array.isArray(o.stickers) ? o.stickers : [], de = [];
    for (const V of U)
      d(V) && (V.visible = !1, de.push(V));
    return de;
  }
  return {
    connect(U) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: u,
        isExternalSticker: d,
        requestDraw: c,
        updateSelectionMenu: f,
        updateSidePanel: g
      } = U);
    },
    computeStickerVFov: h,
    buildCanonicalCutoutStickerState: D,
    buildCanonicalSelectedStickerState: X,
    reconcileExternalStickerFromInputs: L,
    collectExternalStickersForClearAll: ne
  };
}
const dN = 250, fN = 600, pN = 180, hN = 2;
function mN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Vo(e, t, r) {
  return e + (t - e) * r;
}
function gN(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Eu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / pN + i / hN);
  return Math.round(Vo(dN, fN, o));
}
function yN(e, t, r) {
  const n = mN(Ie(r, 0, 1));
  return {
    position: e.position.map((i, o) => Vo(i, t.position[o], n)),
    yaw_deg: $t(e.yaw_deg + Eu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Vo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Vo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Vo(e.distance, t.distance, n)
  };
}
function bN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Eu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function vN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return bN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: gN(e, t, n), end: i };
}
function _N(e, t) {
  const r = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: yN(e.from, e.to, r), done: !1 };
}
function Zs(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function SN(e, t, r) {
  const n = Zs(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function wN(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: u,
    stateV2: d,
    studio: c,
    viewController: f
  } = e;
  let g, w, h, p, D, X, z, Y, C, re = null;
  function L(_, P = null) {
    const I = G();
    z(() => {
      i.viewTransition = vN(I, _, performance.now(), { scale: be(), end: P });
    }), !i.viewTransition && P && ne(P), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, Y(), D({ localOnly: !0, reason: dt.VIEW });
  }
  function ne(_) {
    K(Lc({ ...Q(), moved: _.moved }, _.mode, O())), s.backgroundDirty = !0;
  }
  function U() {
    i.viewTransition && (i.viewTransition = null, Y());
  }
  function de(_, P) {
    L({ ...G(), yaw_deg: _, pitch_deg: P });
  }
  function V() {
    return !c || me() && !p();
  }
  function ae() {
    return i.mode === "pano" && H();
  }
  function H() {
    return d && E1({ sceneLinked: l && !!vl(a).scene, files: X(), stickers: u.stickers });
  }
  function J() {
    return i.spaceMode === "6dof" && ae();
  }
  function $() {
    var _, P, I;
    return FS((I = (P = (_ = t.ui) == null ? void 0 : _.settings) == null ? void 0 : P.getSettingValue) == null ? void 0 : I.call(P, og));
  }
  function Q() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function K(_) {
    i.spaceMode = _.mode, i.viewPosition = _.position, i.viewMoved = _.moved;
  }
  function E(_) {
    var I;
    const P = SN(i.spaceMode, i.viewTransition, _);
    if (P !== "keep") {
      if (P === "return") {
        L({ ...G(), position: O(), distance: ((I = oe()) == null ? void 0 : I.radius) || Qn }, { mode: _, moved: !1 });
        return;
      }
      U(), K(Lc({ ...Q(), position: G().position }, _, O())), s.backgroundDirty = !0, Y(), D({ localOnly: !0, reason: dt.VIEW });
    }
  }
  function G() {
    var I;
    const _ = i.viewMoved ? i.viewDistance : ((I = oe()) == null ? void 0 : I.radius) || Qn, P = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: _ };
    return M1(i.spaceMode, P, O());
  }
  function O() {
    return me() ? N().position : [0, 0, 0];
  }
  function q() {
    return r && u.camera !== null;
  }
  function me() {
    return q() && u.camera.visible;
  }
  function _e() {
    return u.painting_visible !== !1;
  }
  function te(_) {
    return _.visible && co(_.clip, i.frame);
  }
  function N() {
    return ya(u.camera, i.frame);
  }
  function oe() {
    var P;
    const _ = g();
    return ((P = _.space ?? _.content) == null ? void 0 : P.sphere) ?? null;
  }
  function ue(_) {
    i.viewPosition = _.position, i.viewYaw = _.yaw_deg, i.viewPitch = _.pitch_deg, i.viewDistance = _.distance, i.viewMoved = !0, s.backgroundDirty = !0, D({ localOnly: !0, reason: dt.VIEW });
  }
  function be() {
    var _;
    return ((_ = oe()) == null ? void 0 : _.radius) || Qn;
  }
  function ve() {
    var pe;
    const _ = g().space, P = w(), I = i.worldSelectedId || i.selectedId, B = P.stickers.findIndex((Se) => Se.id === I), le = B < 0 ? null : {
      sticker: P.stickers[B],
      value: ba(P, i.frame).stickers[B],
      plane: _.stickers.find((Se) => Se.id === I) ?? null,
      item: ((pe = _.sticker) == null ? void 0 : pe.id) === I && _.sticker.url ? { kind: _.sticker.kind, box: o.sceneBox(_.sticker.url) } : null
    }, he = h() ? j() : D1(oe(), le);
    if (!he) return;
    const ee = G();
    i.viewDistance = ee.distance, i.viewMoved = !0, L(I1(ee, he, n.width, n.height));
  }
  function A(_) {
    return o.pickSurface(R(), _.x, _.y, n.width, n.height);
  }
  function ce(_, P) {
    var I;
    return Rc(_, P, i.viewMoved ? null : (I = oe()) == null ? void 0 : I.center, be());
  }
  function y() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function v(_, P) {
    const I = performance.now(), B = { x: _.x, y: _.y, time: I, key: o.contentRevision(), view: y() };
    if (!im(re, B)) {
      const he = A(_);
      re = { ...B, cost: performance.now() - I, hit: he };
    }
    const le = G();
    ue(sm(le, ce(le, re.hit), P, be())), re.view = y(), re.wheelTime = I;
  }
  function F(_, P, I) {
    const B = G();
    i.interaction = _ === "orbit" ? { kind: "space_orbit", last: P, pivot: ce(B, A(P)) } : { kind: "space_pan", last: P, depth: rm(B, be()) }, C(P), n.setPointerCapture(I);
  }
  function S(_) {
    return _ * 0.2;
  }
  function j() {
    return { center: N().position, radius: S(be()) };
  }
  function x(_, P) {
    const { yaw_deg: I, pitch_deg: B } = fm(_.position, P);
    return { ..._, yaw_deg: I, pitch_deg: B };
  }
  function R() {
    return Ju(G(), n.width, n.height, oe());
  }
  return {
    connect(_) {
      ({
        editorViewInput: g,
        editorViewSceneState: w,
        isCameraSelected: h,
        isErpCamera: p,
        requestDraw: D,
        sceneFiles: X,
        startAnimation: z,
        syncFloatingViewButtonState: Y,
        updateCursor: C
      } = _);
    },
    transitionView: L,
    applyViewTransitionEnd: ne,
    cancelViewTransition: U,
    turnViewTo: de,
    cameraPreviewShown: V,
    isSpaceView: ae,
    hasSpaceContent: H,
    isFreeSpaceView: J,
    viewControls: $,
    spaceModeState: Q,
    applySpaceMode: K,
    setSpaceMode: E,
    spaceViewState: G,
    spaceOrigin: O,
    hasCamera: q,
    cameraShoots: me,
    paintingShown: _e,
    sceneStickerShown: te,
    cutoutCamera: N,
    contentSphere: oe,
    setSpaceView: ue,
    spaceScale: be,
    frameSpaceContent: ve,
    zoomSpaceAt: v,
    startSpaceDrag: F,
    currentSpaceCamera: R,
    cameraFrustumLength: S,
    cameraSphere: j,
    lookingAt: x
  };
}
function xN(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: u,
    videoEl: d
  } = e;
  let c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe, ue, be, ve = { revision: -1, sceneState: null }, A = null;
  function ce() {
    return A || (A = F()), A;
  }
  function y() {
    A = null;
  }
  function v() {
    return ve.sceneState;
  }
  function F() {
    const Se = re(), Pe = g(), fe = { ...s.assets };
    for (const Me of l ? [] : s.stickers) {
      const De = String((Me == null ? void 0 : Me.asset_id) || "");
      De && !fe[De] && i.has(De) && (fe[De] = { type: "comfy_image", filename: De });
    }
    const ge = l ? s.stickers.map((Me) => J(Me) ? { ...Me, source: { kind: "file", filename: _e(Me) } } : Me) : s.stickers;
    ve.revision !== a.stateRevision && (ve = { revision: a.stateRevision, sceneState: $r({ ...s, stickers: ge, assets: fe, painting: null }) }), l && S(ve.sceneState);
    const b = ba(ve.sceneState, r.frame), m = Q ? Y() : null, T = (Me) => {
      if (l && !Me.visible) return null;
      if (Q && V(Me)) return m;
      const De = ne(Me);
      return De ? { media: De, revision: L(De) } : null;
    }, M = ue(), k = [...M.sky, ...vm(ve.sceneState, r.frame, s.stickers, { media: T, paintLayers: Pe, evaluated: b })], ie = Se && (Se === d || Se === u) ? d.dataset.panoSrc : Se, ye = de(Se) ? { media: Se, revision: L(Se), coverage: f(), source: ie } : null, W = U(), se = P1(G(), W, O());
    se.mode !== r.spaceMode && p(), c(se);
    const Ne = W ? j(ve.sceneState, b, T, M) : null, we = H() ? { ...Ne, ...x(Ne) } : null;
    return { background: ye, layers: k, space: we, content: Ne };
  }
  function S(Se) {
    const Pe = new Map(s.stickers.map((fe) => [fe.id, fe.clip]));
    Se.scene.clip = { ...s.scene.clip };
    for (const fe of Se.stickers) {
      const ge = Pe.get(fe.id);
      ge && (fe.clip = { ...ge });
    }
  }
  function j(Se, Pe, fe, ge) {
    const b = K(), m = Zu(b, Pe.scene), T = m != null && m.url ? n.sceneBox(m.url) : null, M = T && cs(m.kind, T), k = me(), ie = um(k, Se, Pe), ye = ie != null && ie.url ? n.sceneBox(ie.url) : null, W = ye ? [{ box: cs(ie.kind, ye), value: ie.value }] : [], se = _m(Se, r.frame, s.stickers, { media: fe, evaluated: Pe });
    for (const { request: we, value: Me } of ge.items) {
      const De = we != null && we.url ? n.sceneBox(we.url) : null;
      De && W.push({ box: cs(we.kind, De), value: Me });
    }
    const Ne = jc(F1(Pe, M, [...se, ...ge.stickers], W));
    return {
      evaluated: Pe,
      sceneUrls: b ? b.urls.filter(Boolean) : [],
      scene: m,
      stickerUrls: dm(k, Se),
      sticker: ie,
      stickers: se,
      upstreamStickers: ge.stickers,
      upstreamItems: ge.items,
      sphere: Ne
    };
  }
  function x(Se) {
    var fe;
    const Pe = ((fe = Se.sphere) == null ? void 0 : fe.radius) || Qn;
    return {
      gizmo: _() ? B() : R(Se.evaluated),
      grid: r.showGrid && !r.fullscreen ? B1(Pe) : null,
      lines: h() ? I(Pe) : []
    };
  }
  function R(Se) {
    const Pe = E(), fe = Se.stickers.find((ge) => ge.id === (Pe == null ? void 0 : Pe.id));
    return !be(Pe) || !(fe != null && fe.active) ? null : { mode: r.gizmoMode, transform: Vc(fe) };
  }
  function _() {
    return h() && r.selectedId === Bu;
  }
  let P = { revision: -1, span: -1, segments: [] };
  function I(Se) {
    const Pe = N();
    (P.revision !== a.stateRevision || P.span !== Pe) && (P = { revision: a.stateRevision, span: Pe, segments: Y1(q1(s, Pe)) });
    const { segments: fe } = P, ge = fe.length ? [{ segments: fe, color: vP }] : [];
    if (!ae()) return ge;
    const b = _() ? Ig : bP;
    return [...ge, { segments: pm(X(), w(Se)), color: b }];
  }
  function B() {
    return !ae() || !_() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Vc({ ...X(), scale: 1 }) };
  }
  function le() {
    const { background: Se, layers: Pe, space: fe } = ce(), ge = t.width, b = t.height, m = z({ x: 0, y: 0, w: ge, h: b });
    let T = !1;
    return !Se && !Pe.length && !fe ? (n.clear(460551), T = n.ready) : (n.clear(), T = !!n.render({
      rect: m,
      camera: fe ? Ju(q(), ge, b, fe.sphere) : D(),
      background: Se,
      layers: Pe,
      space: fe
    })), te(), (r.worldSelectedId || _() || $()) && oe(), T;
  }
  function he(Se) {
    const { content: Pe } = ce();
    return !Pe || !Se.position ? Uo(Se) : lm(Uo(Se), Se.position, C(), Pe.sphere);
  }
  function ee(Se, Pe, fe, ge = null) {
    const { background: b, layers: m, content: T } = ce();
    if (!b && !m.length && !T) return null;
    const M = T && Pe.position ? T : null;
    return n.render({ rect: Se, camera: he(Pe), background: b, layers: m, space: M, owner: fe, clearColor: ge });
  }
  function pe(Se) {
    return n.clear(460551), !!n.renderUnwrap({ rect: z(Se), ...ce() });
  }
  return {
    connect(Se) {
      ({
        applySpaceMode: c,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: w,
        cameraShoots: h,
        cancelViewTransition: p,
        currentViewCamera: D,
        cutoutCamera: X,
        deviceRect: z,
        followPortSticker: Y,
        frameViewDistance: C,
        getConnectedErpImage: re,
        getMediaRevisionToken: L,
        getStickerImage: ne,
        hasSpaceContent: U,
        isDecodedImageReady: de,
        isExternalSticker: V,
        isFreeSpaceView: ae,
        isSpaceView: H,
        isUploadingSticker: J,
        isWorldMenuShown: $,
        portVideo: Q,
        sceneFiles: K,
        selectedWorldSticker: E,
        spaceModeState: G,
        spaceOrigin: O,
        spaceViewState: q,
        stickerFiles: me,
        stickerImageKey: _e,
        syncFloatingViewButtonState: te,
        timelineSpanFrames: N,
        updateSelectionMenu: oe,
        upstreamViewInput: ue,
        worldStickerEditable: be
      } = Se);
    },
    editorViewInput: ce,
    endEditorViewFrame: y,
    editorViewSceneState: v,
    isCameraSelected: _,
    renderEditorView: le,
    shotViewCamera: he,
    drawEditorViewShot: ee,
    renderEditorViewUnwrap: pe
  };
}
function kN(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: a,
    studio: s
  } = e;
  let l, u, d, c, f = { list: null, entries: [] };
  const g = /* @__PURE__ */ new Map(), w = () => c({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA });
  function h(J) {
    if (!J) return null;
    let $ = g.get(J);
    return $ || ($ = new Image(), $.onload = w, $.onerror = w, $.src = J, g.set(J, $)), $;
  }
  function p({ sceneState: J, ui: $ }) {
    return [
      ...J.stickers.filter((Q) => Q.source.kind !== "port").map((Q) => n($s(Q.source))),
      i(Ir($, io)[0] || null),
      ...J.painting.raster_objects.map((Q) => Q.rasterDataUrl)
    ].filter(Boolean);
  }
  function D() {
    return s && (_f(o, "scene") === Dg || !!X());
  }
  function X() {
    const J = s && Yt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, $ = Array.isArray(J) ? J : null;
    if (f.list !== $) {
      f.entries.forEach(ae), f = { list: $, entries: $ ? GP($).map((K) => ({ layer: K })) : [] };
      const Q = new Set(f.entries.flatMap((K) => p(K.layer)));
      for (const K of [...g.keys()]) Q.has(K) || g.delete(K);
    }
    return $ && f.entries;
  }
  function z() {
    if (!X()) return 0;
    const [J] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(J) > 0 ? Number(J) : 0;
  }
  function Y() {
    if (!s) return "";
    const J = X();
    if (UP(_f(o, "scene"), J)) return "Run the workflow to show the upstream scene.";
    if (!J) return "";
    const $ = t.uiList(o, "pano_sticker_warnings");
    return String($.find((Q) => String(Q).startsWith(BP)) ?? "");
  }
  function C(J, $, Q) {
    const { ui: K, sceneState: E } = J.layer, G = E.timeline.fps, O = Ir(K, Ag)[0], q = Ir(K, Cg).map(i).filter(Boolean), me = i(Ir(K, Ng)[0] || null), _e = O && typeof O == "object" ? q.length ? { frames: q, meta: O } : me ? { src: me, meta: O } : null : null, te = h(i(Ir(K, io)[0] || null)), N = _e ? nd($.clip, Q, G, _e.meta) : null;
    let oe = te;
    if (_e != null && _e.frames)
      J.frames || (J.frames = id({
        createImage: (ue, be) => {
          const ve = new Image();
          return ve.onload = be, ve.onerror = be, ve.src = ue, ve;
        },
        onLoad: w
      })), oe = J.frames.picture(_e.frames, N, _e.meta, te);
    else if (_e != null && _e.src) {
      const ue = re(J);
      ue.follow({ src: _e.src, time: N, playing: d.advancing, fps: G }), oe = ue.picture(J.still, te);
    }
    return oe ? { media: oe, revision: u(oe), source: rd(_e, te) } : null;
  }
  function re(J) {
    if (J.follower) return J.follower;
    const $ = ga(document, "editor.upstream-port-video");
    $.playsInline = !0, $.preload = "auto";
    const Q = en({ label: "editor.upstream-port-still" });
    return Q.__panoFrameIdx = 0, J.video = $, J.still = Q, J.follower = ld({
      video: $,
      onCapture: () => {
        var G;
        const K = Number($.videoWidth || 0), E = Number($.videoHeight || 0);
        K < 1 || E < 1 || (Q.width = K, Q.height = E, (G = Q.getContext("2d")) == null || G.drawImage($, 0, 0), Q.__panoFrameIdx += 1, w());
      },
      onChange: w
    }), J.follower;
  }
  function L(J, $, Q) {
    if ($.source.kind === "port") return C(J, $, Q);
    const K = h(n($s($.source)));
    return K ? { media: K, revision: u(K) } : null;
  }
  function ne(J) {
    var _e;
    const { sceneState: $ } = J.layer, { painting: Q } = $, K = Q.paint.strokes.length + Q.mask.strokes.length;
    if (!$.painting_visible || !K && !Q.raster_objects.length) return [];
    const E = l(), G = `${E.width}x${E.height}`;
    J.paintSize !== G && (de(J), J.paintSize = G, J.paintEngine = K ? fl(E) : null, (_e = J.paintEngine) == null || _e.rebuildCommitted({ painting: Q }), J.rasters = /* @__PURE__ */ new Map());
    const O = J.paintEngine, q = (O == null ? void 0 : O.getMaskDisplayCanvas()) || null, me = [];
    for (const te of YP($, O ? O.getAllGroupIds() : [], !!q)) {
      const N = te.kind === "group" ? O == null ? void 0 : O.getGroupDisplayCanvas(te.id) : te.kind === "mask" ? q : U(J, te.item, E);
      N && me.push({ id: `${te.kind}:${te.id}`, media: N, revision: G, opacity: 1, zIndex: te.zIndex });
    }
    return me;
  }
  function U(J, $, { width: Q, height: K }) {
    if (J.rasters.has($.id)) return J.rasters.get($.id);
    const E = h($.rasterDataUrl);
    if (!E.complete || !E.naturalWidth) return null;
    const G = en({ label: "editor.upstream-raster-erp", width: Q, height: K }), O = G.getContext("2d");
    return O ? (Eg(O, E, $, Q, K), J.rasters.set($.id, G), G) : null;
  }
  function de(J) {
    var $;
    ($ = J.rasters) == null || $.forEach((Q) => ea(Q)), J.rasters = null, J.paintEngine = null, J.paintSize = null;
  }
  function V() {
    const J = X() ?? [], $ = { sky: [], stickers: [], items: [] };
    return J.forEach((Q, K) => {
      const E = WP(r.frame, a.timeline.fps, Q.layer.sceneState.timeline.fps), G = qP(Q.layer, K, E, {
        media: (O) => L(Q, O, E),
        paintLayers: ne(Q),
        source: i
      });
      $.sky.push(...G.sky), $.stickers.push(...G.stickers), $.items.push(...G.items);
    }), $;
  }
  function ae(J) {
    var $;
    ($ = J.follower) == null || $.dispose(), J.still && ea(J.still), de(J);
  }
  function H() {
    f.entries.forEach(ae), f = { list: null, entries: [] }, g.clear();
  }
  return {
    connect(J) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: u, playback: d, requestDraw: c } = J);
    },
    upstreamLinked: D,
    upstreamNotice: Y,
    upstreamSpanFrames: z,
    upstreamViewInput: V,
    disposeUpstream: H
  };
}
const cu = "camera_preview";
function MN(e) {
  return e === cu ? dt.SPLAT_PREVIEW : dt.SPLAT_STAGE;
}
function PN(e) {
  return [...e].some((t) => t !== dt.VIEW && t !== dt.OVERLAY && t !== dt.SPLAT_STAGE);
}
function Vg(e, t = !1) {
  const r = Ie(Mi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function NN(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: a,
    shotEditor: s,
    studio: l,
    uiState: u
  } = e;
  let d, c, f, g, w = null, h = !1, p = !1;
  function D() {
    h && (h = !1, o.releaseSplats(cu));
  }
  function X() {
    w = null, p = !1, D();
  }
  function z(U) {
    if (!n || !U) return !1;
    const de = n.closest(".pano-camera-preview");
    if (!de) return !1;
    const V = Math.round(Number(de.clientWidth || n.clientWidth || 0)), ae = Math.round(Number(de.clientHeight || n.clientHeight || 0));
    return Math.abs(V - Number(U.width || 0)) <= 1 && Math.abs(ae - Number(U.height || 0)) <= 1;
  }
  function Y(U, de) {
    if (i.outputPreviewRect = null, u.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (u.outputPreviewToggle.visible = !1), !s || !u.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      u.cameraPreview.visible = !1, u.cameraPreview.settled = !1, X();
      return;
    }
    const V = f();
    if (u.cameraPreview.visible = !0, u.cameraPreview.expanded = !!i.outputPreviewExpanded, !V || !r) {
      u.cameraPreview.ready = !1, u.cameraPreview.settled = !1, u.cameraPreview.width = 220, u.cameraPreview.height = 132, u.cameraPreview.label = V ? "Preview unavailable" : "Add Frame to preview", X();
      return;
    }
    const ae = Vg(V, !!i.outputPreviewExpanded);
    if (u.cameraPreview.width = ae.width, u.cameraPreview.height = ae.height, p) {
      u.cameraPreview.ready = !1, u.cameraPreview.label = "Preview unavailable", u.cameraPreview.settled = !1, D();
      return;
    }
    const H = window.devicePixelRatio || 1, J = Math.max(1, ae.width * H), $ = Math.max(1, ae.height * H), Q = Math.min(1, t.width / J, t.height / $), K = { width: Math.max(1, Math.floor(J * Q)), height: Math.max(1, Math.floor($ * Q)) }, E = !w || w.width !== K.width || w.height !== K.height || PN(de);
    if (U && E) {
      h = !0;
      const O = c({ x: 0, y: t.height - K.height, w: K.width, h: K.height }, V, cu);
      w = O ? K : null, O && ne(O);
    }
    if (!w) {
      u.cameraPreview.ready = !1, u.cameraPreview.label = g() ? "Loading preview" : "Connect ERP image", u.cameraPreview.settled = !1;
      return;
    }
    const G = z(ae);
    u.cameraPreview.ready = !0, u.cameraPreview.label = G ? "" : "Loading preview", u.cameraPreview.settled = G && a.pendingStableLayoutFrames <= 0 && a.hasPresentedFrame;
  }
  function C() {
    w = null, p = !1;
  }
  let re = 0, L = !1;
  function ne(U) {
    const de = ++re;
    createImageBitmap(U.canvas, U.x, U.y, U.width, U.height).then((V) => {
      var ae;
      if (de !== re || !a.running) {
        V.close();
        return;
      }
      (ae = r.getContext("bitmaprenderer")) == null || ae.transferFromImageBitmap(V);
    }).catch((V) => {
      de !== re || !a.running || (p = !0, w = null, u.cameraPreview.ready = !1, u.cameraPreview.label = "Preview unavailable", !L && (L = !0, console.error("[PanoramaStickers] camera preview frame failed", V)));
    });
  }
  return {
    connect(U) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: c,
        getActiveCutoutShot: f,
        getConnectedErpImage: g
      } = U);
    },
    drawCutoutOutputPreview: Y,
    forgetCameraPreviewFrame: C
  };
}
function CN(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: u,
    type: d
  } = e;
  let c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe, ue, be, ve, A, ce, y;
  function v(fe) {
    const ge = r.width, b = r.height, m = ne();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ge, b), oe(), fe && (s.backgroundDirty = !ve(m)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let M = 0; M <= 16; M += 1) {
        const k = m.x + m.w * M / 16;
        n.beginPath(), n.moveTo(k, m.y), n.lineTo(k, m.y + m.h), n.stroke();
      }
      for (let M = 0; M <= 8; M += 1) {
        const k = m.y + m.h * M / 8;
        n.beginPath(), n.moveTo(m.x, k), n.lineTo(m.x + m.w, k), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(m.x, m.y + m.h / 2), n.lineTo(m.x + m.w, m.y + m.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const T = m.y + m.h * 0.57;
      n.fillText("Left", m.x + m.w * 0.25, T), n.fillText("Front", m.x + m.w * 0.5, T), n.fillText("Right", m.x + m.w * 0.75, T), n.fillText("Back", m.x + 38, T), n.fillText("Back", m.x + m.w - 38, T);
    }
  }
  function F(fe, ge, b = 1) {
    let m = !1;
    n.strokeStyle = ge, n.lineWidth = b, n.beginPath();
    for (const T of fe) {
      const M = me(T);
      if (!M) {
        m = !1;
        continue;
      }
      m ? n.lineTo(M.x, M.y) : (n.moveTo(M.x, M.y), m = !0);
    }
    n.stroke();
  }
  function S(fe) {
    const ge = r.width, b = r.height;
    if (n.clearRect(0, 0, ge, b), oe(), fe && (s.backgroundDirty = !be()), i.showGrid && !i.fullscreen && h().space)
      j();
    else if (i.showGrid && !i.fullscreen) {
      for (let T = -180; T <= 180; T += 15) {
        const M = [];
        for (let k = -89; k <= 89; k += 4) M.push(Pn(T, k));
        F(M, "#3f3f46", T % 90 === 0 ? 1.3 : 1);
      }
      for (let T = -75; T <= 75; T += 15) {
        const M = [];
        for (let k = -180; k <= 180; k += 4) M.push(Pn(k, T));
        F(M, T === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", T === 0 ? 1.5 : 1);
      }
      const m = [
        { name: "Left", dir: Pn(-90, 0) },
        { name: "Front", dir: Pn(0, 0) },
        { name: "Right", dir: Pn(90, 0) },
        { name: "Back", dir: Pn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", m.forEach((T) => {
        const M = me(T.dir);
        M && n.fillText(T.name, M.x, M.y + 24);
      });
    }
  }
  function j() {
    const fe = Ju(y(), r.width, r.height, f()), ge = aa(fe, [0, 0, 0], r.width, r.height);
    ge && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ge.x, ge.y - 12));
  }
  function x(fe, ge) {
    const b = q(fe), m = Pn(Number(b.yaw_deg || 0), Number(b.pitch_deg || 0)), T = i.mode === "unwrap" ? _e(m) : null, M = T ? T.x : null, k = i.mode === "pano" ? 28 : 20, ie = [
      A(fe, 0, k, M),
      A(fe, 1, k, M),
      A(fe, 2, k, M),
      A(fe, 3, k, M)
    ];
    ud(n, ie, { selected: ge });
  }
  function R(fe, ge = []) {
    if (!(!fe || !Array.isArray(ge) || ge.length < 4)) {
      fe.beginPath(), fe.moveTo(ge[0].x, ge[0].y);
      for (let b = 1; b < 4; b += 1) fe.lineTo(ge[b].x, ge[b].y);
      fe.closePath();
    }
  }
  function _(fe, ge, b) {
    const m = Array.isArray(fe == null ? void 0 : fe.corners) ? fe.corners : [];
    if (m.length < 4) return;
    const T = Ie(Number((fe == null ? void 0 : fe.visibilityAlpha) ?? 1), 0, 1);
    if (T <= 0.01) return;
    const M = n.globalAlpha;
    n.globalAlpha = M * T;
    const k = b ? "rgba(255, 116, 116, 0.96)" : ge ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", ie = b ? "rgba(255, 89, 89, 0.08)" : ge ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ye = ge ? 3.2 : 2.6;
    R(n, m), n.fillStyle = ie, n.fill(), n.strokeStyle = k, n.lineWidth = ye, n.stroke(), n.save(), n.strokeStyle = k, n.lineWidth = ge ? 3.2 : 2.6, n.lineCap = "round";
    const W = Array.isArray(fe == null ? void 0 : fe.edgeMidpoints) && fe.edgeMidpoints.length >= 4 ? fe.edgeMidpoints : [
      { edge: "top", x: (m[0].x + m[1].x) * 0.5, y: (m[0].y + m[1].y) * 0.5 },
      { edge: "right", x: (m[1].x + m[2].x) * 0.5, y: (m[1].y + m[2].y) * 0.5 },
      { edge: "bottom", x: (m[2].x + m[3].x) * 0.5, y: (m[2].y + m[3].y) * 0.5 },
      { edge: "left", x: (m[3].x + m[0].x) * 0.5, y: (m[3].y + m[0].y) * 0.5 }
    ], se = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ne = ge ? 12 : 9;
    W.forEach((we) => {
      const De = W.find((Ve) => (Ve == null ? void 0 : Ve.edge) === se[we == null ? void 0 : we.edge]) || {
        x: (m[0].x + m[1].x + m[2].x + m[3].x) * 0.25,
        y: (m[0].y + m[1].y + m[2].y + m[3].y) * 0.25
      }, Le = De.x - we.x, Ge = De.y - we.y, qe = Math.hypot(Le, Ge) || 1;
      n.beginPath(), n.moveTo(we.x, we.y), n.lineTo(we.x + Le / qe * Ne, we.y + Ge / qe * Ne), n.stroke();
    }), n.restore(), n.globalAlpha = M;
  }
  function P(fe, ge, b, m) {
    const T = Ie(Number((ge == null ? void 0 : ge.visibilityAlpha) ?? 1), 0, 1);
    if (T <= 0.01) return;
    if (K(fe)) {
      _(ge, b, m);
      return;
    }
    if (E(fe)) {
      const k = n.globalAlpha;
      n.globalAlpha = k * L(fe) * T, i.mode === "frame" ? (n.strokeStyle = b ? "rgba(250, 250, 250, 0.9)" : m ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = b ? 2 : 1, R(n, ge.corners), n.stroke()) : x(fe, b), n.globalAlpha = k;
      return;
    }
    const M = n.globalAlpha;
    n.globalAlpha = M * T, n.fillStyle = b ? "rgba(0, 112, 243, 0.24)" : m ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", R(n, ge.corners), n.fill(), n.strokeStyle = b ? "rgba(255, 255, 255, 1)" : m ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = b ? 2.8 : 1.9, R(n, ge.corners), n.stroke(), n.globalAlpha = M;
  }
  function I(fe, ge, b) {
    if (E(fe)) {
      rg(n, ge, { accent: b });
      return;
    }
    const m = !(K(fe) && de());
    n.fillStyle = b, m && ge.corners.forEach((T) => {
      n.beginPath(), n.arc(T.x, T.y, 6.5, 0, Math.PI * 2), n.fill();
    }), m && K(fe) && (n.strokeStyle = b, n.lineCap = "round", n.lineWidth = 4, ge.edgeMidpoints.forEach((T) => {
      var Ne, we, Me, De;
      const M = (((Ne = T.b) == null ? void 0 : Ne.x) ?? T.x) - (((we = T.a) == null ? void 0 : we.x) ?? T.x), k = (((Me = T.b) == null ? void 0 : Me.y) ?? T.y) - (((De = T.a) == null ? void 0 : De.y) ?? T.y), ie = Math.hypot(M, k) || 1, ye = M / ie, W = k / ie, se = 10;
      n.beginPath(), n.moveTo(T.x - ye * se, T.y - W * se), n.lineTo(T.x + ye * se, T.y + W * se), n.stroke();
    }), n.lineCap = "butt"), G(fe) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ge.rotateStemBase.x, ge.rotateStemBase.y), n.lineTo(ge.rotateHandle.x, ge.rotateHandle.y), n.stroke(), n.fillStyle = b, n.beginPath(), n.arc(ge.rotateHandle.x, ge.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function B() {
    var M;
    const fe = i.mode === "frame" ? [] : re(), ge = fe.length > 1, b = l ? D() : Y(), m = b.map((k) => `${String((k == null ? void 0 : k.id) || "")}:${K(k) ? "frame" : Number((k == null ? void 0 : k.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== b || i._sortedItemsCache.orderKey !== m) && (i._sortedItemsCache = {
      src: b,
      orderKey: m,
      sorted: [...b]
    });
    const T = i._sortedItemsCache.sorted;
    for (const k of T) {
      const ie = i.mode !== "frame" && !ge && J(k);
      if (i.mode === "frame" && !ie) continue;
      const ye = E(k), W = K(k), se = H(k);
      if (!ye && !W || Q(k) && !ce(k)) continue;
      const Ne = O(k);
      if (d !== "stickers" && !Ne.visible)
        continue;
      const we = Ie(Number((Ne == null ? void 0 : Ne.visibilityAlpha) ?? 1), 0, 1);
      if (we <= 0.01) continue;
      const Me = W && l && i.mode === "pano" ? Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Me, P(k, Ne, ie, se), ie && Ne.visible) {
        const De = se ? "#ff4d4f" : ye && V(k) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * we, I(k, Ne, De), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !p() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const k = i.cutoutPanoFrameVisual, ie = Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= ie, _(k.geom, k.selected, k.locked), k.selected && I(
        k.item,
        k.geom,
        k.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ge) {
      const k = C(fe);
      if (k != null && k.visible) {
        const ie = c(fe) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(k.corners[0].x, k.corners[0].y);
        for (let ye = 1; ye < k.corners.length; ye += 1) n.lineTo(k.corners[ye].x, k.corners[ye].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ie, k.corners.forEach((ye) => {
          n.beginPath(), n.arc(ye.x, ye.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      fe.forEach((k) => {
        if (!G(k) && !$(k)) return;
        const ie = O(k);
        if (!(ie != null && ie.visible)) return;
        const ye = H(k) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(ie.corners[0].x, ie.corners[0].y);
        for (let W = 1; W < ie.corners.length; W += 1) n.lineTo(ie.corners[W].x, ie.corners[W].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ye, ie.corners.forEach((W) => {
          n.beginPath(), n.arc(W.x, W.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((M = i.interaction) == null ? void 0 : M.kind) === "marquee_select") {
      const k = ue(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(k.x0, k.y0, k.x1 - k.x0, k.y1 - k.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function le(fe) {
    const ge = p(), b = X(ge);
    if (!ge || !b)
      return n.clearRect(0, 0, r.width, r.height), fe && o.clear(657930), !1;
    const m = { x: b.x, y: b.y, w: b.w, h: b.h }, { rect: T, shot: M } = gm(ge, b, { width: r.width, height: r.height }), k = he(m);
    if (n.clearRect(0, 0, r.width, r.height), fe) {
      o.clear(657930);
      const ie = g(T), ye = !!w(ie, M, void 0, 657930);
      ye || o.clear(1118481, ie), s.backgroundDirty = !ye;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(m.x, m.y, m.w, m.h, k), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = Ig, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(m.x + 1, m.y + 1, m.w - 2, m.h - 2, Math.max(0, k - 1)), n.stroke(), n.restore(), !0;
  }
  function he(fe) {
    const ge = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * ge, Number((fe == null ? void 0 : fe.w) || 0) * 0.5, Number((fe == null ? void 0 : fe.h) || 0) * 0.5);
  }
  function ee() {
    var ye, W;
    if (((ye = i.interaction) == null ? void 0 : ye.kind) !== "paint_lasso_fill") return;
    const fe = i.interaction.stroke, ge = (W = fe == null ? void 0 : fe.geometry) == null ? void 0 : W.points;
    let b;
    if (i.mode === "frame") {
      const se = p(), Ne = z(se);
      b = te(ge, se, Ne);
    } else
      b = N(ge);
    if (!Array.isArray(b) || b.length < 3) return;
    const m = String((fe == null ? void 0 : fe.layerKind) || "") === "mask", T = (fe == null ? void 0 : fe.color) || { r: 1, g: 0.25, b: 0.25 }, M = Math.round(Number(T.r || 0) * 255), k = Math.round(Number(T.g || 0) * 255), ie = Math.round(Number(T.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(b[0].x || 0), Number(b[0].y || 0));
    for (let se = 1; se < b.length; se++) n.lineTo(Number(b[se].x || 0), Number(b[se].y || 0));
    n.closePath(), m ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${M},${k},${ie},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function pe() {
    const fe = i.frameRollOverlayVisual, ge = Ie(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(fe != null && fe.shot) || ge <= 1e-4) return;
    const b = z(fe.shot);
    if (!b) return;
    const m = { x: b.x + b.w * 0.5, y: b.y + b.h * 0.5 }, T = Number(fe.shot.roll_deg ?? fe.shot.rot_deg ?? 0) * mr, M = Math.hypot(b.w, b.h) * 0.55, k = Math.cos(T) * M, ie = Math.sin(T) * M;
    n.save(), n.globalAlpha *= ge, n.beginPath(), n.rect(b.x, b.y, b.w, b.h), n.clip(), n.translate(m.x, m.y), n.rotate(T);
    const ye = Math.max(12, Math.min(b.w, b.h) / 6);
    n.beginPath();
    for (let W = -M; W <= M; W += ye)
      n.moveTo(W, -M), n.lineTo(W, M);
    for (let W = -M; W <= M; W += ye)
      n.moveTo(-M, W), n.lineTo(M, W);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(m.x - k, m.y - ie), n.lineTo(m.x + k, m.y + ie), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Se() {
    return !l || !p() || t && ae() || u && !U() ? 0 : wP;
  }
  function Pe() {
    const fe = Ie(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (fe <= 1e-4 || !l || i.mode !== "pano") return;
    const ge = p(), b = ge ? O(ge) : null, m = Array.isArray(b == null ? void 0 : b.corners) && b.corners.length >= 4 ? b.corners.map((k) => ({ x: Number(k.x || 0), y: Number(k.y || 0) })) : null;
    b != null && b.visible && m && (i.cutoutPanoDimCorners = m), ge && (b != null && b.visible) && m && (i.cutoutPanoFrameVisual = {
      item: ge,
      geom: b,
      selected: J(ge),
      locked: H(ge)
    });
    const T = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, M = b != null && b.visible ? m : T ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${fe})`, n.beginPath(), n.rect(0, 0, r.width, r.height), M.length >= 4) {
      n.moveTo(M[0].x, M[0].y);
      for (let k = 1; k < 4; k += 1) n.lineTo(M[k].x, M[k].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(fe) {
      ({
        areAllSelectedItemsLocked: c,
        contentSphere: f,
        deviceRect: g,
        drawEditorViewShot: w,
        editorViewInput: h,
        getActiveCutoutShot: p,
        getCutoutSelectableItemsForDisplay: D,
        getFrameViewLayout: X,
        getFrameViewRect: z,
        getList: Y,
        getMultiSelectionGeom: C,
        getSelectedItems: re,
        getStickerDisplayAlpha: L,
        getUnwrapRect: ne,
        isCameraSelected: U,
        isErpCamera: de,
        isExternalSticker: V,
        isFreeSpaceView: ae,
        isItemLocked: H,
        isItemSelected: J,
        isRasterObjectItem: $,
        isSceneSticker: Q,
        isShotItem: K,
        isStickerItem: E,
        isStrokeGroupItem: G,
        objectGeom: O,
        poseOf: q,
        projectDir: me,
        projectDirUnwrap: _e,
        projectErpLassoPointsToFrameRect: te,
        projectLassoPointsToCurrentView: N,
        rebuildPaintEngineIfNeeded: oe,
        rectFromPoints: ue,
        renderEditorView: be,
        renderEditorViewUnwrap: ve,
        sampleStickerEdge: A,
        sceneStickerShown: ce,
        spaceViewState: y
      } = fe);
    },
    drawGridUnwrap: v,
    drawGridPano: S,
    drawObjects: B,
    drawFrameViewBackground: le,
    drawLassoOutlineOverlay: ee,
    drawFrameRollOverlay: pe,
    getCutoutPanoDimTarget: Se,
    drawCutoutPanoPassepartout: Pe
  };
}
function AN(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: u,
    shotEditor: d,
    stageWrap: c,
    state: f,
    timeline: g,
    type: w,
    uiState: h,
    viewController: p
  } = e;
  let D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe = () => {
  };
  function ue(ee = /* @__PURE__ */ new Set()) {
    de();
    const pe = l.backgroundDirty;
    d && (E(), X(pe, ee)), i.mode === "frame" ? (l.frameSafeRect = Q(), C(pe)) : i.mode === "unwrap" ? L(pe) : re(pe), z(), U(), q(), ne(), Y(), h.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && te(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && h.cameraPreview && (h.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const Se = J();
    h.stageStatus = Se.status, h.stageStatusDetail = Se.detail, h.stageNotice = N(), Se.status === qn ? (c == null || c.removeAttribute("data-stage-ready"), c == null || c.setAttribute("data-stage-loading-kind", Se.detail)) : (c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind"));
  }
  function be(ee = i.interaction) {
    if (w !== "stickers" || i.mode !== "pano") return !1;
    const pe = String((ee == null ? void 0 : ee.kind) || "");
    return pe === "move" || pe === "scale" || pe === "scale_x" || pe === "scale_y" || pe === "rotate" ? !0 : pe === "move_multi" ? Array.isArray(ee == null ? void 0 : ee.stickerSnapshots) && ee.stickerSnapshots.length > 0 : !1;
  }
  function ve() {
    return !!i.interaction || !!g.drag;
  }
  function A() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = H();
  }
  function ce(ee = {}) {
    var T, M, k, ie, ye, W, se, Ne;
    const pe = ee.reason ?? dt.STATE, Se = !!ee.localOnly, Pe = ee.externalSync === !0, fe = String(ee.cause || ""), ge = String(((T = i.interaction) == null ? void 0 : T.kind) || "");
    (!Se || ge === "view" || ge === "pan_frame" || be() || !!i.viewTransition || fe === "mode" || fe === "frame_view" || fe === "cutout_frame") && (l.backgroundDirty = !0), Se && $() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!Se || fe === "selection" || fe === "mode" || fe === "cutout_frame") && (me(), _e()), ve() ? l.nodePreviewPending = !0 : A(), Pe && ((k = (M = a.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || k.call(M), (ie = a.setDirtyCanvas) == null || ie.call(a, !0, !1)), Pe && !Se && ((W = (ye = a.graph) == null ? void 0 : ye.setDirtyCanvas) == null || W.call(ye, !0, !0), (Ne = (se = t == null ? void 0 : t.canvas) == null ? void 0 : se.setDirty) == null || Ne.call(se, !0, !0)), u.requestDraw(pe);
  }
  function y() {
    const ee = n.getBoundingClientRect(), pe = Math.max(2, Math.round(ee.width)), Se = Math.max(2, Math.round(ee.height)), Pe = window.devicePixelRatio || 1, fe = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== pe || n.height !== Se) && (n.width = pe, n.height = Se);
    const ge = X1(ee.width || pe, ee.height || Se, Pe, window.innerWidth || ee.width, window.innerHeight || ee.height);
    return o.resize(ge.width, ge.height), [n.width, n.height, r.width, r.height].join("x") === fe ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && v(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function v(ee) {
    ee(), u.wake();
  }
  function F() {
    return !!i.viewTransition || !!p.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || ve();
  }
  function S(ee = performance.now(), pe = /* @__PURE__ */ new Set()) {
    var b;
    l.nodePreviewPending && !ve() && A(), pe.forEach((m) => l.reasons.add(m)), pe.size && (l.dirty = !0), [...pe].some((m) => m !== dt.OVERLAY) && (l.backgroundDirty = !0), G(), l.lastTickTs > 0 ? Math.max(1e-3, (ee - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = ee;
    const Se = i.mode === "frame" && ((b = i.interaction) == null ? void 0 : b.kind) === "roll_frame" ? i.interaction : null;
    Se != null && Se.shot && (i.frameRollOverlayVisual = { shot: Se.shot });
    const Pe = Se ? 1 : 0;
    if (Math.abs(Pe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Pe, i.frameRollOverlayStartTs = ee), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Pe) > 1e-6) {
      const m = Ie(
        (ee - Number(i.frameRollOverlayStartTs || ee)) / xP,
        0,
        1
      );
      i.frameRollOverlayAlpha = $n(
        Number(i.frameRollOverlayFrom || 0),
        Pe,
        cc(m)
      ), m >= 1 && (i.frameRollOverlayAlpha = Pe, Pe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const fe = ae();
    if (Math.abs(fe - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = fe, i.cutoutPanoDimStartTs = ee), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - fe) > 1e-6) {
      const m = Ie(
        (ee - Number(i.cutoutPanoDimStartTs || ee)) / tp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = $n(
        Number(i.cutoutPanoDimFrom || 0),
        fe,
        cc(m)
      ), m >= 1 && (i.cutoutPanoDimAlpha = fe), m >= 1 && fe === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ge = d && V() ? 1 : 0;
    if (Math.abs(ge - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ge, i.cutoutPanoFrameStartTs = ee), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ge) > 1e-6) {
      const m = Ie(
        (ee - Number(i.cutoutPanoFrameStartTs || ee)) / tp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = $n(
        Number(i.cutoutPanoFrameFrom || 0),
        ge,
        cc(m)
      ), m >= 1 && (i.cutoutPanoFrameAlpha = ge, ge === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const m = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), T = Ie((ee - Number(i.outputPreviewAnimStartTs || 0)) / m, 0, 1), k = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? PP(T) : CP(T);
      i.outputPreviewAnim = $n(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, k), l.dirty = !0, T >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: m, done: T } = _N(i.viewTransition, ee);
      if (i.viewPosition = m.position, i.viewYaw = m.yaw_deg, i.viewPitch = m.pitch_deg, i.viewFov = m.hFOV_deg, i.viewDistance = m.distance, T) {
        const { end: M } = i.viewTransition;
        i.viewTransition = null, M && D(M), O();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, p.stepInertia(ee) && (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const m = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ue(m);
    }
  }
  function j(ee) {
    try {
      ee();
    } catch (pe) {
      const Se = String((pe == null ? void 0 : pe.stack) || (pe == null ? void 0 : pe.message) || pe || "unknown editor frame error");
      l.tickErrorSignature !== Se && (l.tickErrorSignature = Se, console.error("[PanoramaStickers] editor frame failed", pe)), h.stageStatus = zn, h.stageStatusDetail = "frame", c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind");
    }
  }
  function x(ee = performance.now(), pe = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const Se = _b();
    j(() => S(ee, pe)), Sb(Se);
  }
  function R() {
    !l.running || !y() || j(() => {
      l.dirty = !1, ue(/* @__PURE__ */ new Set([dt.RESIZE]));
    });
  }
  const _ = new ResizeObserver(R);
  let P = null;
  function I() {
    P == null || P.removeEventListener("change", B), P = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), P.addEventListener("change", B);
  }
  function B() {
    I(), R();
  }
  function le() {
    oe = vb("editor", () => {
      var ee;
      return {
        type: w,
        readOnly: s,
        mode: i.mode,
        interaction: ((ee = i.interaction) == null ? void 0 : ee.kind) ?? null,
        timelineDrag: !!g.drag,
        playing: !!K.playing
      };
    });
  }
  function he() {
    oe(), l.running = !1, u.stop(), _.disconnect(), P.removeEventListener("change", B);
  }
  return {
    connect(ee) {
      ({
        applyViewTransitionEnd: D,
        drawCutoutOutputPreview: X,
        drawCutoutPanoPassepartout: z,
        drawFrameRollOverlay: Y,
        drawFrameViewBackground: C,
        drawGridPano: re,
        drawGridUnwrap: L,
        drawLassoOutlineOverlay: ne,
        drawObjects: U,
        endEditorViewFrame: de,
        getActiveCutoutShot: V,
        getCutoutPanoDimTarget: ae,
        getSharedLivePaintSurface: H,
        getStageImageStatus: J,
        isPaintCompositeInteraction: $,
        measureFrameSafeRect: Q,
        playback: K,
        rebuildPaintEngineIfNeeded: E,
        syncCutoutShot: G,
        syncFloatingViewButtonState: O,
        syncFrameRollKnob: q,
        syncLookAtFrameButtonState: me,
        syncViewToggleState: _e,
        updateSelectionMenu: te,
        upstreamNotice: N
      } = ee);
    },
    requestDraw: ce,
    syncCanvasSize: y,
    startAnimation: v,
    editorAnimating: F,
    tick: x,
    stageResizeObserver: _,
    watchPixelRatio: I,
    sampleEditorDiagnostics: le,
    stopRenderLoop: he
  };
}
function ji(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function IN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function EN({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: a,
  getBrushPresetIdForTool: s,
  isActiveLassoTool: l
}) {
  var z, Y;
  const u = e.primaryTool === "paint" || e.primaryTool === "mask", d = {
    visible: u,
    activePane: u ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: u ? !!r : !1,
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
    historyEntries: Array.from({ length: 8 }, (C, re) => ({ index: re, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!u) return d;
  const c = ((z = t.find((C) => i(e.paintColor, C.color))) == null ? void 0 : z.id) || "", f = !c, g = o(e.customPaintColor), w = Math.round(Math.max(0, Math.min(1, Number(((Y = e.customPaintColor) == null ? void 0 : Y.a) ?? 1))) * 100), h = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), p = e.brushSizes[h] ?? 10, D = l(), X = Array.from({ length: 8 }, (C, re) => e.customPaintHistory[re] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: c,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...a(g.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    alphaValue: w,
    alphaText: `${w}%`,
    historyEntries: X.map((C, re) => ({
      index: re,
      color: C ? { cssColor: n(C, 1) } : null
    })),
    sizeValue: p,
    sizeText: String(p),
    sizeFill: `${Math.max(0, Math.min(100, (p - 1) / 119 * 100))}%`,
    sizeDisabled: D,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function ON({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const FN = {
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
function TN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = FN[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function pc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function DN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? je.eye : je.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function LN({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function RN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const oo = "erp", VN = ["1:1", "4:3", "3:2", "16:9"];
function $g(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...VN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: oo, label: Number(r) === 180 ? "180°" : "360°", active: e === oo }] : []
  ];
}
function $N({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
  uiSettings: l,
  normalizeCoverageValue: u
}) {
  return {
    coverage: { value: u(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: TN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function zN({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: u,
  isExternalSticker: d,
  isStickerHidden: c,
  canRestoreSelectedToInitial: f,
  iconSet: g,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: w = !1,
  coverage: h = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let p = [];
  if (r.length > 1)
    p = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    p = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (p = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s }
    ], d(t) || (p.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: g.duplicate }), p.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: g.replace_image })), d(t)) {
      const D = f(), X = c(t);
      p.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: D ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !D
      }), p.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: X ? "Show" : "Hide",
        tip: X ? "Show input image" : "Hide input image",
        icon: X ? g.eye : g.eye_dashed
      });
    }
    p.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed }), d(t) || p.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s });
  } else
    p = [
      {
        key: "aspect",
        kind: "aspect",
        icon: g.aspect,
        open: !!u,
        choices: $g(l, { erp: w, coverage: h })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === oo }
    ], w ? p.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : p.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    );
  return zg(i.corners, p);
}
const ap = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function jN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? ap.filter((a) => a.cameraTip) : ap;
  return zg([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: a, label: s, tip: l, cameraTip: u }) => ({ key: a, label: s, tip: n ? u : l, pressed: a === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: je.delete }] : []
  ]);
}
function HN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: u, maxY: d } = e || {};
  if (![s, l, u, d].every(Number.isFinite)) return null;
  const c = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), g = d + 18, w = u - 18 - r;
  let h;
  return g <= f ? h = Math.max(g, 14) : w >= 14 ? h = Math.min(w, f) : h = Math.min(Math.max(g, 14), f), { left: c, top: h };
}
function zg(e, t) {
  const r = e.map((u) => ({ x: Number(u == null ? void 0 : u.x), y: Number(u == null ? void 0 : u.y) })).filter((u) => Number.isFinite(u.x) && Number.isFinite(u.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((u) => u.x), i = r.map((u) => u.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const jg = "painting";
function GN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const WN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function KN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: u = !1, scene: d = !1 }) {
  const c = (h, p, D, X, z, Y, { keyable: C = !0, hideable: re = !0 } = {}) => {
    const L = (ne) => (r == null ? void 0 : r.owner) === h && r.lane === ne ? r.frames.map((U) => U + Y) : [];
    return {
      id: h,
      label: D,
      icon: X,
      clip: z,
      selected: h === n,
      hideable: re,
      visible: p.visible,
      keyable: C,
      open: C && o.has(h),
      keys: Tv(p).map((ne) => ({ frame: ne.frame + Y, full: ne.full })),
      selectedFrames: L(null),
      lanes: (C ? fo(p) : []).map((ne) => ({
        key: `${h}:${ne}`,
        lane: ne,
        label: WN[ne],
        frames: p[ne].keyframes.map((U) => U.frame + Y),
        selectedFrames: L(ne)
      }))
    };
  }, f = e.stickers.filter((h) => h.placement === "sky").sort((h, p) => p.z_index - h.z_index), g = e.stickers.filter((h) => h.placement === "world"), w = ({ start: h, in: p, duration: D }) => ({ clip: { start: h, end: D === null ? null : h + D }, offset: h - p });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s,
    length: e.timeline.length,
    rows: [
      ...l ? [c("camera", e.camera, "Camera", je.camera, null, 0, { hideable: u })] : [],
      ...[...f, ...g].map((h) => {
        const { clip: p, offset: D } = w(h.clip);
        return c(h.id, h, Dc(h), je.image, p, D);
      }),
      ...GN(e.painting) || !e.painting_visible ? [{
        id: jg,
        label: "Paint",
        icon: je.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: e.painting_visible,
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...d || Rs(e.scene) ? [(() => {
        const { clip: h, offset: p } = w(e.scene.clip);
        return c("scene", e.scene, "Scene", je.box, h, p, { keyable: !1 });
      })()] : []
    ]
  };
}
function BN(e, t, r, n) {
  const i = Vv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
function UN(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: u,
    runtime: d,
    sceneV2: c,
    shotEditor: f,
    state: g,
    studio: w,
    type: h,
    uiState: p
  } = e;
  let D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe, ue, be, ve, A, ce, y, v = 0;
  function F() {
    p.toolButtons.forEach((ee) => {
      const pe = ee.attr === "data-tool-mode", Se = ee.attr === "data-paint-tool", Pe = ee.attr === "data-mask-tool";
      ee.active = pe ? ee.value === r.primaryTool : Se ? ee.key === r.paintTool : Pe ? ee.key === r.maskTool : !1, ee.pressed = ee.active ? "true" : ee.pressed == null ? null : "false";
    });
  }
  function S() {
    if (w && ji(p.toolButtons, "value", "add-camera", { disabled: H() }), h !== "cutout") return;
    const ee = z();
    ji(p.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: ee ? "Look At Frame" : "Add Frame",
      tip: ee ? "Look at frame" : "Add frame",
      icon: ee ? je.camera : je.plus_circle
    });
  }
  function j() {
    const ee = DN({
      spaceView: me(),
      spaceMode: Zs(r.spaceMode, r.viewTransition),
      readOnly: u,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    p.space && Object.assign(p.space, ee.space);
    for (const [pe, Se] of Object.entries(ee.buttons)) ji(p.floatingButtons, "action", pe, Se);
  }
  function x() {
    var Se;
    const ee = LN({ hasShot: !!z(), erp: Q(), hidden: H() && !X(), studio: w });
    r.mode === "frame" && ee.disabled && (w ? te(z()) : r.mode = "pano"), r.outputPreviewRect = null, p.viewButtons.forEach((Pe) => {
      const fe = Pe.key === r.mode;
      Pe.pressed = fe ? "true" : "false", Pe.visible = !(Pe.key === "frame" && !f), Pe.key === "frame" ? Object.assign(Pe, ee) : Pe.disabled = !1;
    });
    const pe = f && r.mode === "frame" ? z() : null;
    p.frameRail.visible = !!pe, p.frameRail.disabled = u || (pe == null ? void 0 : pe.locked) === !0, p.frameRollKnob.visible = !!pe && !u && pe.locked !== !0, p.frameRollKnob.disabled = u || (pe == null ? void 0 : pe.locked) === !0, p.frameRollKnob.rollDeg = Number((pe == null ? void 0 : pe.roll_deg) ?? (pe == null ? void 0 : pe.rot_deg) ?? 0), p.frameRollKnob.displayValue = Zi(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((Se = r.interaction) == null ? void 0 : Se.kind) === "roll_frame", p.frameRollKnob.armed = !!pe && r.altModifier === !0, p.frameRail.rollKnob = p.frameRollKnob, p.frameRail.aspectLabel = pe ? Er(pe) : "", p.frameRail.aspectChoices = $g(pe ? String(Er(pe)) : null, { erp: w, coverage: g.coverage }), pe || (p.frameRail.aspectOpen = !1), p.outputPreviewToggle.visible = h === "cutout" && r.mode !== "frame" && !!z(), f && p.cameraPreview && (p.cameraPreview.visible = r.mode !== "frame" && D(), p.cameraPreview.expanded = !!r.outputPreviewExpanded, p.cameraPreview.settled = p.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), j(), G() ? ce(r.pointerPos) : ue(r.mode === "pano" ? "grab" : "default");
  }
  function R() {
    var pe;
    const ee = r.mode === "frame" ? z() : null;
    p.frameRollKnob.visible = !!ee && !u && ee.locked !== !0, p.frameRollKnob.rollDeg = Number((ee == null ? void 0 : ee.roll_deg) ?? (ee == null ? void 0 : ee.rot_deg) ?? 0), p.frameRollKnob.displayValue = Zi(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((pe = r.interaction) == null ? void 0 : pe.kind) === "roll_frame", p.frameRollKnob.armed = !!ee && r.altModifier === !0;
  }
  function _() {
    F();
    const ee = EN({
      editor: r,
      swatches: wl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: cr,
      colorsApproximatelyEqual: Js,
      rgb01ToHsv: su,
      hsv01ToRgb: au,
      getBrushPresetIdForTool: Y,
      isActiveLassoTool: $
    });
    if (Object.assign(p.paintDock, ee), A(), !ee.visible) {
      i && (i.hidden = !0);
      return;
    }
    v && (clearTimeout(v), v = 0), o && (!ee.colorEnabled && i && !i.hidden && (v = window.setTimeout(() => {
      i.hidden = !0, p.paintDock.colorPopOpen = !1, v = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", ee.pickerHueColor), i.style.setProperty("--picker-sat", ee.pickerSat), i.style.setProperty("--picker-val", ee.pickerVal), i.style.setProperty("--picker-hue", ee.pickerHue)), a && (a.style.left = ee.pickerSvLeft, a.style.top = ee.pickerSvTop), s && (s.style.left = ee.pickerHueLeft));
  }
  function P() {
    const ee = N(f && r.mode === "frame" ? z() : ne());
    ee && (r.panelLastValues = {
      yaw_deg: Number(ee.yaw_deg || 0),
      pitch_deg: Number(ee.pitch_deg || 0),
      hFOV_deg: Number(ee.hFOV_deg || (h === "stickers" ? 30 : 90)),
      vFOV_deg: Number(ee.vFOV_deg || (h === "stickers" ? 30 : 60)),
      rot_deg: Number(ee.rot_deg || 0),
      roll_deg: Number(ee.roll_deg || 0),
      aspect_id: Er(ee)
    }, I());
  }
  function I() {
    be(), ve(), le();
  }
  function B() {
    const ee = f && r.mode === "frame" ? z() : null;
    return [...U(), oe(), ee].some((pe) => O(pe) ? Rs(pe) : q(pe) && H() && Rs(g.camera));
  }
  function le() {
    if (n) return;
    g.ui_settings = g.ui_settings || {};
    const ee = IN(g.ui_settings);
    if (l) {
      p.sidePanel = ON({
        coverage: g.coverage,
        uiSettings: ee,
        normalizeCoverageValue: In
      });
      return;
    }
    const pe = ne(), Se = f && r.mode === "frame" ? z() : null, Pe = Se || pe, fe = Se ? [Se] : U(), ge = Se ? "shot" : de();
    if (fe.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), Pe && ge !== "stroke") {
      const we = N(Pe);
      r.panelLastValues = {
        yaw_deg: Number(we.yaw_deg || 0),
        pitch_deg: Number(we.pitch_deg || 0),
        hFOV_deg: Number(we.hFOV_deg || (ge === "image" ? 30 : 90)),
        vFOV_deg: Number(we.vFOV_deg || (ge === "image" ? 30 : 60)),
        rot_deg: Number(we.rot_deg || 0),
        roll_deg: Number(we.roll_deg || 0),
        aspect_id: Er(we)
      }, O(Pe) && (r.panelLastValues.opacity = wi(Pe, r.frame).opacity * 100);
    }
    const b = r.panelLastValues || (h === "stickers" || ge === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), m = ge === "stroke" ? null : Pe, T = oe(), M = t && (ge === "shot" || ge === "frame") && J(), k = T ? p1(T, r.frame) : M ? { ...m, ...u1(g.camera, r.frame), vFOV_deg: m.vFOV_deg } : O(m) ? r.panelLastValues : m || b, ie = T ? y(T) : !!m && !E(m);
    r.panelWasEnabled = ie, S();
    let ye = null;
    if (Se) {
      const we = ae({ item: Se, kind: "shot", label: "Frame" });
      ye = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: we.label,
        currentIcon: we.icon || null,
        items: [{
          id: String(Se.id || ""),
          label: we.label,
          icon: we.icon || null,
          active: !0
        }]
      };
    } else if (h === "stickers" || h === "cutout") {
      const we = [{
        id: "",
        label: h === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (h === "stickers") {
        const Le = z();
        Le && we.push({ id: Le.id, label: "Camera", icon: V("frame"), item: Le, kind: "frame" }), L().forEach((Ge, qe) => {
          var $e, Ae;
          if (!Ge || O(Ge) && !Ge.visible) return;
          const Ve = c ? Dc(Ge) : K(Ge) ? String(Ge.id || vd) : String(((Ae = ($e = g.assets) == null ? void 0 : $e[Ge.asset_id]) == null ? void 0 : Ae.name) || Ge.asset_id || Ge.id), Z = `${qe + 1}. ${Ve}${K(Ge) && _e(Ge) ? " (hidden)" : ""}`, Oe = ae({ item: Ge, label: Z, kind: "image" });
          we.push({ id: Ge.id, label: Oe.label, icon: Oe.icon, item: Ge, kind: "image" });
        });
      } else
        C().forEach((Le) => {
          if (!(Le != null && Le.item)) return;
          const Ge = ae(Le);
          we.push({ id: Le.item.id, label: Ge.label, icon: Ge.icon, item: Le.item, kind: Le.kind });
        });
      const Me = (m == null ? void 0 : m.id) || "", De = T ? { label: Dc(T), icon: je.globe } : we.find((Le) => Le.id === Me) || we[0];
      ye = {
        label: "Selection",
        open: !1,
        disabled: we.length <= 1,
        currentLabel: De.label,
        currentIcon: De.icon || null,
        items: we.map((Le) => ({
          id: Le.id,
          label: Le.label,
          icon: Le.icon || null,
          active: Le.id === Me
        }))
      };
    }
    const W = [], se = (we, Me, De, Le, Ge) => {
      const qe = Ie(Number(k[we] || 0), De, Le);
      W.push({
        key: we,
        label: Me,
        min: De,
        max: Le,
        step: Ge,
        value: qe,
        displayValue: Zi(qe),
        fillPct: Ie((qe - De) / Math.max(1e-6, Le - De) * 100, 0, 100),
        enabled: ie && !u
      });
    }, Ne = [];
    if (T) {
      for (const [we, Me] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const De = pc(k[we]);
        se(we, Me, -De, De, 0.01);
      }
      se("yaw_deg", "Yaw", -180, 180, 0.1), se("pitch_deg", "Pitch", -90, 90, 0.1), se("roll_deg", "Roll", -180, 180, 0.1), se("scale", "Scale", Pg, pc(k.scale), 0.01), se("opacity", "Opacity", 0, 100, 1);
    } else if (fe.length > 1)
      Ne.push(`Selected objects: ${fe.length}`), Ne.push("Multi-selection supports z-order and delete.");
    else {
      const we = ge === "shot" || ge === "frame";
      if (M)
        for (const [Me, De] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Le = pc(k[Me]);
          se(Me, De, -Le, Le, 0.01);
        }
      se("yaw_deg", "Yaw", -180, 180, 0.1), se("pitch_deg", "Pitch", -90, 90, 0.1), se(ge === "image" || h === "stickers" && !we ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), se("hFOV_deg", "H FOV", 1, 179, 0.1), se("vFOV_deg", "V FOV", 1, 179, 0.1), we && W.forEach((Me) => {
        Me.enabled = Me.enabled && RN(Me.key, { erp: Q() });
      }), c && !we && se("opacity", "Opacity", 0, 100, 1);
    }
    p.sidePanel = $N({
      coverage: g.coverage,
      readOnly: u,
      selectionPicker: ye,
      enabled: ie,
      selectedKind: T ? "world" : ge,
      selectedItems: fe,
      params: W,
      notes: Ne,
      uiSettings: ee,
      normalizeCoverageValue: In
    });
  }
  function he() {
    const { canUndo: ee, canRedo: pe } = re();
    ji(p.toolButtons, "value", "undo", { disabled: !ee }), ji(p.toolButtons, "value", "redo", { disabled: !pe });
  }
  return {
    connect(ee) {
      ({
        cameraPreviewShown: D,
        cameraShoots: X,
        getActiveCutoutShot: z,
        getBrushPresetIdForTool: Y,
        getCutoutInspectorItems: C,
        getHistoryCapabilities: re,
        getList: L,
        getSelected: ne,
        getSelectedItems: U,
        getSelectedKind: de,
        getSelectionItemIcon: V,
        getSelectionItemLabelData: ae,
        hasCamera: H,
        hasSpaceContent: J,
        isActiveLassoTool: $,
        isErpCamera: Q,
        isExternalSticker: K,
        isItemLocked: E,
        isPaintCursorEnabled: G,
        isSceneSticker: O,
        isShotItem: q,
        isSpaceView: me,
        isStickerHidden: _e,
        leaveFrameView: te,
        poseOf: N,
        selectedWorldSticker: oe,
        setCanvasCursor: ue,
        syncCutoutShot: be,
        syncTimeline: ve,
        syncVideoTransportVisibility: A,
        updateCursor: ce,
        worldStickerEditable: y
      } = ee);
    },
    syncLookAtFrameButtonState: S,
    syncFloatingViewButtonState: j,
    syncViewToggleState: x,
    syncFrameRollKnob: R,
    syncPaintUi: _,
    syncSidePanelControls: P,
    updateSidePanel: I,
    inspectorTimed: B,
    syncSidePanelModel: le,
    syncUndoRedoButtons: he
  };
}
function YN(e) {
  const {
    editor: t,
    node: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    studio: s,
    timeline: l,
    timelinePlayhead: u,
    uiState: d,
    videoEl: c,
    videoTimelineFps: f
  } = e;
  let g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J;
  function $() {
    if (!a || n) return;
    const v = K(), F = l.selection, S = F && E(F.owner);
    if (F) {
      const j = S ? G(F) : [];
      F.frames = F.frames.filter((x) => j.some((R) => S[R].keyframes.some((_) => _.frame === x))), F.frames.length || (l.selection = null);
    }
    d.timeline = KN(o, {
      span: v,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? Q(),
      openRows: l.openRows,
      audio: te() && d.videoTransport.hasAudio ? { muted: c.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || Mm(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: h(),
      cameraHideable: s,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!vl(r).scene && !H()
    }), d.easing = l.selection ? BN(S, G(l.selection), l.selection.frames, O(l.selection.owner)) : null;
  }
  function Q() {
    return Bh(o, { camera: s });
  }
  function K(v = null) {
    const F = o.timeline.fps, S = o.stickers.find(D), j = S ? w() : null, x = Math.max(
      d.videoTransport.ready && !ae() ? Math.round(Number(d.videoTransport.duration || 0) * F) : 0,
      j ? Fm(S.clip, F, j.meta) : 0,
      J()
    );
    return Uh(o, { minimum: Math.round(F * 5), frames: x, openClip: v, camera: s });
  }
  function E(v) {
    return v === "camera" ? h() ? o.camera : null : v === "scene" ? i ? o.scene : null : o.stickers.find((F) => F.id === v) || null;
  }
  function G(v) {
    return v.lane ? [v.lane] : fo(E(v.owner));
  }
  function O(v) {
    if (v === "camera") return 0;
    const { clip: F } = E(v);
    return F.start - F.in;
  }
  function q(v) {
    return `${co(v, t.frame)}:${v.start - v.in}`;
  }
  function me(v) {
    const F = E(v);
    return !!F && F.locked !== !0;
  }
  function _e(v) {
    const F = Math.max(0, Math.round(v));
    if (F === t.frame) return;
    ne(), t.frame = F, u.frame.value = F, ne();
    const S = [t.selectedId, t.worldSelectedId];
    re(), X(), S[0] !== t.selectedId || S[1] !== t.worldSelectedId ? V() : p() && U(), de(), L({ reason: dt.PLAYHEAD });
  }
  function te() {
    return c instanceof HTMLVideoElement && !!c.getAttribute("src");
  }
  function N(v) {
    C(), z.seek(v);
  }
  function oe() {
    a && z.stop();
  }
  function ue() {
    C(), z.toggle();
  }
  function be() {
    ne(), X(), V(), de(), L();
  }
  function ve() {
    Y(), g(), be();
  }
  function A() {
    const { selection: v } = l;
    me(v.owner) && (oe(), Lv(E(v.owner), G(v), v.frames, t.frame - O(v.owner)), l.selection = null, ve());
  }
  function ce(v) {
    const F = uo(v);
    if (F === null || F === o.timeline.fps) return;
    oe();
    const S = Math.round(t.frame * F / o.timeline.fps);
    i1(o, F), l.selection = null, z.seek(S), ve();
  }
  function y() {
    const v = f(r);
    v !== null && v !== o.timeline.fps && ce(v);
  }
  return {
    connect(v) {
      ({
        commitAndRefreshNode: g,
        getPortMedia: w,
        hasCamera: h,
        inspectorTimed: p,
        isExternalSticker: D,
        markObjectVisualsDirty: X,
        playback: z,
        pushHistory: Y,
        refreshModalVideoSource: C,
        releaseHiddenSelection: re,
        requestDraw: L,
        syncCutoutShot: ne,
        syncSidePanelModel: U,
        updateSelectionMenu: de,
        updateSidePanel: V,
        upstreamBackground: ae,
        upstreamLinked: H,
        upstreamSpanFrames: J
      } = v);
    },
    syncTimeline: $,
    timelineTimed: Q,
    timelineSpanFrames: K,
    timelineOwner: E,
    selectedLanes: G,
    timelineOffset: O,
    clipView: q,
    timelineEditable: me,
    setTimelineFrame: _e,
    jumpTimelineTo: N,
    stopTimelinePlayback: oe,
    togglePlayback: ue,
    refreshTimelineEdit: be,
    commitTimelineEdit: ve,
    deleteSelectedKeyframes: A,
    changeTimelineFps: ce,
    applyVideoTimelineFps: y
  };
}
function qN(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: a,
    uiState: s
  } = e;
  let l, u, d, c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E;
  function G(O) {
    if (!(n || !o)) {
      if (O.type === "seek") {
        if (O.phase === "move") {
          a.scrubFrame = O.frame, t.request("seek");
          return;
        }
        t.cancel(), O.phase === "start" && p(), h.seek(O.frame);
        return;
      }
      if (O.type === "play") {
        $();
        return;
      }
      if (O.type === "mute") {
        Q(), U();
        return;
      }
      if (O.type === "toggle-expanded") {
        a.expanded = !(a.expanded ?? J()), a.selection = null, U();
        return;
      }
      if (O.type === "toggle-row") {
        a.openRows.has(O.id) ? a.openRows.delete(O.id) : a.openRows.add(O.id), U();
        return;
      }
      if (O.type === "toggle-visible") {
        if (O.id === jg) i.painting_visible = !i.painting_visible;
        else {
          const q = ae(O.id);
          if (!q) return;
          q.visible = !q.visible;
        }
        X(), c();
        return;
      }
      if (O.type === "select-row") {
        const q = i.stickers.find((me) => me.id === O.id);
        if (q && !q.visible || O.id === "camera" && !l()) return;
        q && !co(q.clip, r.frame) && w(q.clip.start), (q == null ? void 0 : q.placement) === "world" ? Y(q.id) : O.id === "camera" ? re(f()) : re(g().find((me) => me.id === O.id) || null), ne(), a.selection = null, E(), K(), z();
        return;
      }
      if (O.type === "select-keys") {
        const q = V(O.owner), me = O.frames.map((N) => N - q), _e = a.selection, te = (_e == null ? void 0 : _e.owner) === O.owner && _e.lane === O.lane;
        if (O.additive && te) {
          const N = new Set(_e.frames);
          for (const oe of me)
            N.has(oe) ? N.delete(oe) : N.add(oe);
          _e.frames = [...N].sort((oe, ue) => oe - ue);
        } else
          a.selection = me.length ? { owner: O.owner, lane: O.lane, frames: me } : null;
        U();
        return;
      }
      if (O.type === "move-keys") {
        const q = a.selection;
        if (!q || !de(q.owner)) return;
        const me = ae(q.owner), _e = C(q);
        if (O.phase === "start") {
          L(), a.drag = { keyframes: _e.map((oe) => structuredClone(me[oe].keyframes)), frames: q.frames };
          return;
        }
        const { drag: te } = a;
        if (!(te != null && te.keyframes)) return;
        _e.forEach((oe, ue) => {
          me[oe].keyframes = structuredClone(te.keyframes[ue]);
        });
        const N = Rv(me, _e, te.frames, O.delta, -V(q.owner));
        if (q.frames = te.frames.map((oe) => oe + N), O.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), a.drag = null, N ? c() : D();
        return;
      }
      if (O.type === "clip") {
        const q = O.id === "scene" ? ae("scene") : i.stickers.find((N) => N.id === O.id);
        if (!q || q.locked) return;
        if (O.phase === "start") {
          L(), a.drag = { clip: { ...q.clip }, span: H(q.clip) };
          return;
        }
        const { drag: me } = a;
        if (!(me != null && me.clip)) return;
        const _e = me.clip, te = d(q.clip);
        if (q.clip = { ..._e }, O.delta && O.mode === "move" ? zv(q.clip, O.delta) : O.delta && O.mode === "start" ? jv(q.clip, _e.start + O.delta) : O.delta && Hv(q.clip, (_e.duration === null ? me.span : _e.start + _e.duration) + O.delta, me.span), O.phase !== "end") {
          t.request("timeline"), d(q.clip) !== te && t.request("view");
          return;
        }
        t.cancel(), a.drag = null, X(), JSON.stringify(q.clip) !== JSON.stringify(_e) ? c() : D();
        return;
      }
      if (O.type === "key-row") {
        if (O.owner === "scene" || !de(O.owner)) return;
        L(), Fv(ae(O.owner), r.frame - V(O.owner)), c();
        return;
      }
      if (O.type === "fps") {
        const q = Kv(O.fps);
        if (q === null || q === i.timeline.fps || s.timeline.fpsLocked) {
          U();
          return;
        }
        u(q);
        return;
      }
      if (O.type === "length") {
        const q = Bv(O.length);
        if (q === void 0 || q === i.timeline.length) {
          U();
          return;
        }
        L(), i.timeline.length = q, c();
        return;
      }
      if (O.type === "easing") {
        const q = a.selection;
        if (!q || !de(q.owner)) return;
        L(), $v(ae(q.owner), C(q), q.frames, O.easing), O.commit ? c() : D();
      }
    }
  }
  return {
    connect(O) {
      ({
        cameraShoots: l,
        changeTimelineFps: u,
        clipView: d,
        commitTimelineEdit: c,
        getActiveCutoutShot: f,
        getList: g,
        jumpTimelineTo: w,
        playback: h,
        refreshModalVideoSource: p,
        refreshTimelineEdit: D,
        releaseHiddenSelection: X,
        requestDraw: z,
        selectWorldSticker: Y,
        selectedLanes: C,
        setSelectedItem: re,
        stopTimelinePlayback: L,
        syncFloatingViewButtonState: ne,
        syncTimeline: U,
        timelineEditable: de,
        timelineOffset: V,
        timelineOwner: ae,
        timelineSpanFrames: H,
        timelineTimed: J,
        togglePlayback: $,
        toggleVideoMuted: Q,
        updateSelectionMenu: K,
        updateSidePanel: E
      } = O);
    },
    onTimelineAction: G
  };
}
function XN(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: a,
    readOnly: s,
    state: l,
    stateWidget: u
  } = e;
  let d, c, f, g;
  function w() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = c(Number(l.output_preset || 2048))), i && (l.coverage = In(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), h(), o.setDirtyCanvas(!0, !0));
  }
  function h() {
    var C;
    if (s) return;
    f(), l.coverage = In(l.coverage), em(o, l.active);
    const Y = tm(o, l);
    u && !nm(o, Y, String(u.value ?? ""), { rebased: n }) && (u.value = Y, (C = u.callback) == null || C.call(u, Y));
  }
  function p() {
    l.ui_settings = $P(l.ui_settings), s || h();
  }
  function D() {
    var Y;
    s || (h(), (Y = o.setDirtyCanvas) == null || Y.call(o, !0, !0));
  }
  function X() {
    s || d() && g().catch((Y) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", Y);
    });
  }
  function z(Y = {}) {
    var L, ne, U, de, V, ae, H, J, $;
    const C = Y.syncPreview !== !1, re = Y.syncGraph !== !1;
    C && ((ne = (L = o.__panoPreviewNodeRuntime) == null ? void 0 : L.requestDraw) == null || ne.call(L), (de = (U = o.__panoDomPreview) == null ? void 0 : U.requestDraw) == null || de.call(U), (V = o.setDirtyCanvas) == null || V.call(o, !0, !1)), re && ((H = (ae = o.graph) == null ? void 0 : ae.setDirtyCanvas) == null || H.call(ae, !0, !0), ($ = (J = t == null ? void 0 : t.canvas) == null ? void 0 : J.setDirty) == null || $.call(J, !0, !0));
  }
  return {
    connect(Y) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: c,
        syncCutoutShot: f,
        syncPaintingLayerAsync: g
      } = Y);
    },
    apply: w,
    commitState: h,
    persistUiSettings: p,
    commitAndRefreshNode: D,
    triggerBackgroundPersistenceOnClose: X,
    syncCoverageChangeToNodePreviews: z
  };
}
function JN(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: a,
    uiState: s
  } = e;
  let l, u, d, c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe;
  function ue(F, S, j = "Clear") {
    return new Promise((x) => {
      s.confirmDialog = {
        visible: !0,
        title: String(F || ""),
        text: String(S || ""),
        confirmLabel: String(j || "Confirm"),
        resolve: x
      };
    });
  }
  async function be() {
    var j, x;
    if (r || !await ue(
      "Clear All Paint Data",
      a === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = lo(null), $();
    const S = d();
    if (a === "stickers")
      i.stickers = n ? i.stickers.filter((R) => R.placement === "world" || S.includes(R)) : S, n || (i.assets = {}), t.selectedId = ((j = S[0]) == null ? void 0 : j.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((x = S[0]) == null ? void 0 : x.id) || null, K();
    else {
      const R = e1(i.shots, i.active.selected_shot_id);
      i.stickers = S, i.assets = {}, i.shots = R.shots, t.selectedId = R.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = R.selectedShotId, !R.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, K();
    }
    E(), c(), N(), te(), G();
  }
  async function ve(F) {
    var _, P, I, B;
    if (r) return;
    const S = F === "mask" ? "mask" : "paint", j = S === "mask" ? "Mask" : "Paint", x = D(S);
    if (!(!x.length && !(((_ = t.interaction) == null ? void 0 : _.kind) === "draw" && ((P = t.interaction) == null ? void 0 : P.layerKind) === S) || !await ue(
      `Clear ${j}`,
      `This will remove all ${S} strokes in the current node.`,
      `Clear ${j}`
    ))) {
      if (((I = t.interaction) == null ? void 0 : I.kind) === "draw" && ((B = t.interaction) == null ? void 0 : B.layerKind) === S) {
        const le = g(t.interaction);
        le && t.paintEngine.cancelActiveStroke(le), t.interaction = null;
      }
      x.length = 0, i.painting.raster_objects = X().filter((le) => String((le == null ? void 0 : le.layerKind) || "paint") !== S), S === "paint" && (p().length = 0), $(), E(), c(), N(), te(), _e(), G();
    }
  }
  function A() {
    if (r) return;
    const F = z();
    if (!F || !de(F) || C(F) || n && ae(F)) return;
    let S;
    n ? S = b1(F, fi("st"), h()) : (S = JSON.parse(JSON.stringify(F)), S.id = fi("st"), S.yaw_deg = $t((S.yaw_deg || 0) + 8), S.z_index = h()), i.stickers.push(S), i.active.selected_sticker_id = S.id, t.selectedId = S.id, t.selectedIds = [S.id], H(), E(), c(), te(), N(), G();
  }
  function ce() {
    const F = O();
    return F ? (oe(F) && (q(), g1(i, F.id), u(), H(), E(), c(), N(), te(), me(), G()), !0) : !1;
  }
  function y() {
    var j, x, R, _, P;
    if (r) return;
    const F = Y(), S = z();
    if (!(!S && F.length === 0) && !F.some((I) => re(I))) {
      if (q(), F.length > 1) {
        const I = new Set(F.filter((he) => V(he)).map((he) => String(he.actionGroupId || he.id || ""))), B = new Set(F.filter((he) => L(he)).map((he) => Q(he.rasterObjectId || he.id || ""))), le = new Set(F.filter(de).map((he) => String(he.id || "")));
        I.size > 0 && (i.painting.paint.strokes = (Array.isArray((x = (j = i.painting) == null ? void 0 : j.paint) == null ? void 0 : x.strokes) ? i.painting.paint.strokes : []).filter((he) => !I.has(String((he == null ? void 0 : he.actionGroupId) || ""))), i.painting.groups = p().filter((he) => !I.has(String((he == null ? void 0 : he.actionGroupId) || (he == null ? void 0 : he.id) || ""))), $()), B.size > 0 && (i.painting.raster_objects = X().filter((he) => !B.has(String((he == null ? void 0 : he.id) || ""))), J()), le.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((he) => le.has(String((he == null ? void 0 : he.id) || "")) ? C(he) ? (U(he) || (he.visible = !1), !0) : !1 : !0), K(), H()), t.selectedId = null, t.selectedIds = [], E(), c(), N(), te(), G();
        return;
      }
      if (V(S)) {
        const I = String(S.actionGroupId || S.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((_ = (R = i.painting) == null ? void 0 : R.paint) == null ? void 0 : _.strokes) ? i.painting.paint.strokes : []).filter((B) => String((B == null ? void 0 : B.actionGroupId) || "").trim() !== I), i.painting.groups = p().filter((B) => String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim() !== I), $(), t.selectedId = null, t.selectedIds = [], E(), c(), N(), te(), G();
        return;
      }
      if (L(S)) {
        const I = Q(S.rasterObjectId || S.id || "");
        i.painting.raster_objects = X().filter((B) => String((B == null ? void 0 : B.id) || "").trim() !== I), J(), t.selectedId = null, t.selectedIds = [], E(), c(), N(), te(), G();
        return;
      }
      if (o && ne(S)) {
        f();
        return;
      }
      if (a === "stickers" || de(S)) {
        if (C(S)) {
          if (U(S)) return;
          S.visible = !1, H(), E(), c(), N(), te(), G();
          return;
        }
        i.stickers = i.stickers.filter((I) => I.id !== S.id), K(), H(), t.selectedId = ((P = w()[0]) == null ? void 0 : P.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, E(), c(), N(), te(), G();
        return;
      }
      l();
    }
  }
  function v() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", _e(), N());
  }
  return {
    connect(F) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: u,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: c,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: g,
        getList: w,
        getNextStickerZIndex: h,
        getPaintingGroupList: p,
        getPaintingLayerList: D,
        getRasterObjectList: X,
        getSelected: z,
        getSelectedItems: Y,
        isExternalSticker: C,
        isItemLocked: re,
        isRasterObjectItem: L,
        isShotItem: ne,
        isStickerHidden: U,
        isStickerItem: de,
        isStrokeGroupItem: V,
        isUploadingSticker: ae,
        markObjectVisualsDirty: H,
        markPaintCompositeVisualsDirty: J,
        markPaintStrokeVisualsDirty: $,
        parseRasterObjectSelectionId: Q,
        pruneUnusedAssets: K,
        pushHistory: E,
        requestDraw: G,
        selectedWorldSticker: O,
        stopTimelinePlayback: q,
        syncFloatingViewButtonState: me,
        syncPaintUi: _e,
        updateSelectionMenu: te,
        updateSidePanel: N,
        worldStickerEditable: oe
      } = F);
    },
    clearAll: be,
    clearPaintingLayer: ve,
    duplicateSelected: A,
    deleteSelectedWorldSticker: ce,
    deleteSelected: y,
    forceCursorTool: v
  };
}
function ZN(e) {
  const {
    api: t,
    canvas: r,
    dragCue: n,
    editor: i,
    editorView: o,
    imageCache: a,
    node: s,
    readOnly: l,
    sceneV2: u,
    stageWrap: d,
    state: c,
    type: f,
    vueModal: g
  } = e;
  let w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E;
  function G(_) {
    return hd(_ == null ? void 0 : _.dataTransfer);
  }
  function O(_) {
    const P = !!_;
    n.active !== P && (n.active = P, d.classList.toggle("drop-active", P));
  }
  function q() {
    const _ = new Set(
      (c.stickers || []).map((P) => String((P == null ? void 0 : P.asset_id) || "")).filter((P) => !!P)
    );
    Object.keys(c.assets || {}).forEach((P) => {
      _.has(P) || (delete c.assets[P], a.delete(P));
    });
  }
  async function me(_) {
    if (l || f !== "stickers" && f !== "cutout" || !Xn(_)) return;
    if (u) {
      Q(), await ue(_);
      return;
    }
    const P = fi("asset"), I = To(s, `add:${P}`, async () => {
      try {
        const { image: B } = await Do(_);
        a.set(P, B);
        const le = fi("st");
        c.stickers.push({
          id: le,
          asset_id: P,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: p(30, Number(B.naturalWidth || B.width || 1), Number(B.naturalHeight || B.height || 1)),
          rot_deg: 0,
          z_index: Y()
        }), H(c.stickers[c.stickers.length - 1]), z(), E(), K(), V();
        const he = await di(_, {
          fetchApi: (Se, Pe) => t.fetchApi(Se, Pe)
        });
        if (!(Array.isArray(c.stickers) ? c.stickers : []).filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === P).length) return;
        c.assets[P] = he, q(), de(), h(), E(), K(), V();
      } catch (B) {
        delete c.assets[P], a.delete(P);
        const le = Array.isArray(c.stickers) ? c.stickers : [], he = le.filter((ee) => String((ee == null ? void 0 : ee.asset_id) || "") === P);
        throw he.length && (c.stickers = le.filter((ee) => String((ee == null ? void 0 : ee.asset_id) || "") !== P), he.some((ee) => String((ee == null ? void 0 : ee.id) || "") === String(i.selectedId || "")) && H(null), E(), K(), V(), h()), B;
      }
    });
    try {
      await I;
    } catch {
    }
  }
  function _e() {
    var _;
    l || f !== "stickers" && f !== "cutout" || (_ = g == null ? void 0 : g.openImagePicker) == null || _.call(g, "add");
  }
  function te() {
    var _;
    l || !u || (_ = g == null ? void 0 : g.openImagePicker) == null || _.call(g, "add-world");
  }
  async function N(_) {
    l || !u || !Xn(_) || (Q(), await ue(_, "world"));
  }
  function oe() {
    const _ = { x: r.width / 2, y: r.height / 2 }, P = L() ? o.pick(X(), _.x, _.y, r.width, r.height) : null;
    return $1(J(), P, D());
  }
  async function ue(_, P = "sky") {
    const I = fi("st"), B = To(s, `add:${I}`, async () => {
      const { image: le } = await Do(_), he = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: p(30, Number(le.naturalWidth || le.width || 1), Number(le.naturalHeight || le.height || 1)),
        rot_deg: 0
      }, ee = { kind: "file", filename: "" }, pe = P === "world" ? y1(I, ee, oe()) : Uu(I, ee, he, Y());
      a.set($(pe), le), c.stickers.push(pe), P === "world" ? ae(I) : H(pe), z(), E(), K(), V();
      try {
        const Se = await di(_, {
          fetchApi: (fe, ge) => t.fetchApi(fe, ge)
        }), Pe = c.stickers.find((fe) => fe.id === I);
        if (!Pe) return;
        Pe.source = ls(Se), a.set($(Pe), le), de(), h();
      } catch (Se) {
        throw c.stickers = c.stickers.filter((Pe) => Pe.id !== I), i.selectedId === I && H(null), i.worldSelectedId === I && w(), de(), h(), Se;
      } finally {
        E(), K(), V();
      }
    });
    try {
      await B;
    } catch {
    }
  }
  async function be(_, P) {
    const I = To(s, `replace:${P}:${fi("asset")}`, async () => {
      const { image: B } = await Do(_), le = await di(_, {
        fetchApi: (ee, pe) => t.fetchApi(ee, pe)
      }), he = c.stickers.find((ee) => ee.id === P);
      if (he) {
        he.source = ls(le), he.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const ee of [he.size.value, ...he.size.keyframes.map((pe) => pe.value)])
          ee.vFOV_deg = p(ee.hFOV_deg, Number(B.naturalWidth || B.width || 1), Number(B.naturalHeight || B.height || 1));
        a.set($(he), B), U(), de(), h(), E(), K(), V();
      }
    });
    try {
      await I;
    } catch {
    }
  }
  async function ve(_) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const P = C();
    if (!P || !ne(P) || re(P) || !Xn(_)) return;
    if (u) {
      await be(_, P.id);
      return;
    }
    const I = String(P.id || ""), B = fi("asset"), le = To(s, `replace:${I}:${B}`, async () => {
      var fe;
      const he = (Array.isArray(c.stickers) ? c.stickers : []).find((ge) => String((ge == null ? void 0 : ge.id) || "") === I) || null;
      if (!he || !ne(he) || re(he)) return;
      const ee = String(he.asset_id || ""), pe = ee ? cn(((fe = c.assets) == null ? void 0 : fe[ee]) || null) : null, Se = Number(he.vFOV_deg || 0), Pe = he.crop && typeof he.crop == "object" ? { ...he.crop } : null;
      try {
        const { image: ge } = await Do(_);
        a.set(B, ge), he.asset_id = B, he.vFOV_deg = p(
          Number(he.hFOV_deg || 30),
          Number(ge.naturalWidth || ge.width || 1),
          Number(ge.naturalHeight || ge.height || 1)
        ), he.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, U(), E(), K(), V();
        const b = await di(_, {
          fetchApi: (T, M) => t.fetchApi(T, M)
        }), m = (Array.isArray(c.stickers) ? c.stickers : []).find((T) => String((T == null ? void 0 : T.id) || "") === I) || null;
        if (!m || String(m.asset_id || "") !== B) return;
        c.assets[B] = b, q(), de(), h(), E(), K(), V();
      } catch (ge) {
        delete c.assets[B], a.delete(B);
        const b = (Array.isArray(c.stickers) ? c.stickers : []).find((m) => String((m == null ? void 0 : m.id) || "") === I) || null;
        throw b && String(b.asset_id || "") === B && (ee && pe && (c.assets[ee] = pe), b.asset_id = ee, b.vFOV_deg = Se, b.crop = Pe ? { ...Pe } : null), U(), h(), E(), K(), V(), ge;
      }
    });
    try {
      await le;
    } catch {
    }
  }
  function A() {
    var P;
    if (l) return;
    const _ = C();
    !_ || !ne(_) || re(_) || (P = g == null ? void 0 : g.openImagePicker) == null || P.call(g, "replace");
  }
  async function ce() {
    if (l || f !== "stickers") return;
    if (u) {
      await y();
      return;
    }
    const _ = c.assets && typeof c.assets == "object" ? c.assets : {}, P = Object.entries(_).filter(([, B]) => {
      const le = String((B == null ? void 0 : B.type) || "").toLowerCase(), he = String((B == null ? void 0 : B.value) || "");
      return le === "dataurl" && he.startsWith("data:image");
    });
    if (!P.length) return;
    let I = !1;
    for (const [B, le] of P)
      try {
        const he = String((le == null ? void 0 : le.value) || "");
        if (!he) continue;
        const ee = await fetch(he).then((ge) => ge.blob()), pe = String(ee.type || "image/png").split("/")[1] || "png", Se = String((le == null ? void 0 : le.name) || `${B}.${pe}`), Pe = new File([ee], Se, { type: ee.type || "image/png" }), fe = await di(Pe, {
          fetchApi: (ge, b) => t.fetchApi(ge, b)
        });
        c.assets[B] = {
          ...fe,
          w: Number((le == null ? void 0 : le.w) || 0),
          h: Number((le == null ? void 0 : le.h) || 0)
        }, I = !0;
      } catch {
      }
    I && (h(), V());
  }
  async function y() {
    let _ = !1;
    for (const P of c.stickers) {
      const I = P.source.data_url;
      if (I)
        try {
          const B = await fetch(I).then((pe) => pe.blob()), le = String(B.type || "image/png").split("/")[1] || "png", he = new File([B], `${P.id}.${le}`, { type: B.type || "image/png" }), ee = await di(he, {
            fetchApi: (pe, Se) => t.fetchApi(pe, Se)
          });
          P.source = ls(ee), _ = !0;
        } catch {
        }
    }
    _ && (h(), V());
  }
  function v(_) {
    f !== "stickers" && f !== "cutout" || l || (_.preventDefault(), O(!0));
  }
  function F(_) {
    var B;
    if (f !== "stickers" && f !== "cutout" || l) return;
    _.preventDefault(), _.stopPropagation(), n.depth = 0, O(!1);
    const I = Array.from(((B = _.dataTransfer) == null ? void 0 : B.files) || []).find((le) => Xn(le));
    I && me(I);
  }
  function S(_) {
    f !== "stickers" && f !== "cutout" || l || G(_) && (n.depth += 1, O(!0), _.preventDefault());
  }
  function j(_) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && G(_) && O(!0), n.active && _.preventDefault());
  }
  function x(_) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const P = Number(_.clientX) <= 0 && Number(_.clientY) <= 0;
    (n.depth === 0 || P) && O(!1);
  }
  function R(_) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, O(!1), G(_) && _.preventDefault());
  }
  return {
    connect(_) {
      ({
        clearWorldSelection: w,
        commitAndRefreshNode: h,
        computeStickerVFov: p,
        contentSphere: D,
        currentSpaceCamera: X,
        forceCursorTool: z,
        getNextStickerZIndex: Y,
        getSelected: C,
        isExternalSticker: re,
        isSpaceView: L,
        isStickerItem: ne,
        markObjectVisualsDirty: U,
        pushHistory: de,
        requestDraw: V,
        selectWorldSticker: ae,
        setSelectedItem: H,
        spaceViewState: J,
        stickerImageKey: $,
        stopTimelinePlayback: Q,
        updateSelectionMenu: K,
        updateSidePanel: E
      } = _);
    },
    addImageStickerFromFile: me,
    addImageSticker: _e,
    addWorldImageSticker: te,
    addWorldStickerFromFile: N,
    replaceSelectedImageFromFile: ve,
    replaceSelectedImage: A,
    migrateLegacyEmbeddedAssets: ce,
    pruneUnusedAssets: q,
    setDropCue: O,
    onCanvasDragOver: v,
    onCanvasDrop: F,
    onWindowDragEnter: S,
    onWindowDragOver: j,
    onWindowDragLeave: x,
    onWindowDrop: R
  };
}
function QN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    frameRollKnobEl: i,
    initialShotBase: o,
    readOnly: a,
    runtime: s,
    shotEditor: l,
    stageWrap: u,
    state: d,
    studio: c,
    tooltip: f,
    type: g,
    uiState: w
  } = e;
  let h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe, ue, be, ve = o;
  function A(b, m) {
    var k;
    const T = (k = C().space) == null ? void 0 : k.gizmo;
    if (V() && T && be("hover", m) !== null && be("down", m))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: T.mode, start: T.transform, base: Y(), changed: !1 }, r.setPointerCapture(b.pointerId), N(m), !0;
    const M = pm(Y(), p(E()));
    return U1(z(), M, m, r.width, r.height) ? (V() || (K(B()), ue(), oe(), $()), n.interaction = { kind: "world_select" }, r.setPointerCapture(b.pointerId), !0) : !1;
  }
  function ce() {
    if (a || g !== "cutout") return;
    const b = B();
    if (b) {
      K(b), n.mode = "pano", te($t(Number(b.yaw_deg || 0)), Ie(Number(b.pitch_deg || 0), -89.9, 89.9)), ue(), oe(), $({ cause: "cutout_frame" });
      return;
    }
    const m = kh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: $t(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [m], K(m), re(), n.mode = "pano", J(), X(), ue(), oe(), $({ cause: "cutout_frame" });
  }
  function y() {
    a || !c || ne() || (O(), d.camera = s1(G()), P(), K(B()), re(), J(), X(), ue(), oe(), $({ cause: "cutout_frame" }));
  }
  function v() {
    O(), d.camera = null, K(null), P(), J(), X(), ue(), oe(), $({ cause: "cutout_frame" });
  }
  function F(b, m) {
    c && ae(b) && (d.camera.projection = m === oo ? "erp" : "perspective", m === oo) || x(b, m);
  }
  function S() {
    a || g !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, J(), X(), ue(), oe(), $());
  }
  function j(b, m) {
    const T = s.frameSafeRect;
    if (!b || !T || n.mode !== "frame") return !1;
    const M = ou * Si(T, b), k = Du(Tu(T, m), M);
    return b.hFOV_deg = k.hFOV_deg, b.vFOV_deg = k.vFOV_deg, !0;
  }
  function x(b, m) {
    if (!b || b.locked === !0) return;
    const T = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, M = (() => {
      const W = String(b.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(W)) {
        const [we, Me] = W.split(":").map((De) => Number(De));
        if (Number.isFinite(we) && Number.isFinite(Me)) return we >= Me;
      }
      const se = Number(b.hFOV_deg || 64), Ne = Number(b.vFOV_deg || 40);
      return Math.abs(se - Ne) > 1e-6 ? se >= Ne : Mi(b) >= 1;
    })();
    let [k, ie] = T[String(m)] || T["1:1"];
    k >= ie !== M && ([k, ie] = [ie, k]);
    const ye = k / ie;
    if (!j(b, ye)) {
      const W = Ie(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = W, b.hFOV_deg = os(W, ye);
    }
    b.aspect_id = `${k}:${ie}`;
  }
  function R(b, m, T) {
    if (!b || b.locked === !0) return !1;
    const M = sa(m, T);
    if (!M) return !1;
    const k = M.ratio;
    if (!j(b, k)) {
      const ie = Ie(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = ie, b.hFOV_deg = os(ie, k);
    }
    return b.aspect_id = M.label, !0;
  }
  function _(b) {
    if (!b || b.locked === !0) return;
    const m = String(b.aspect_id || "").trim(), T = ei(b), M = T.tanHalfX / Math.max(1e-12, T.tanHalfY), k = 1 / Math.max(1e-12, M);
    if (!j(b, k)) {
      const ie = Ie(Number(b.vFOV_deg || 60), 1, 179);
      b.vFOV_deg = ie, b.hFOV_deg = os(ie, k);
    }
    if (/^\d+:\d+$/.test(m)) {
      const [ie, ye] = m.split(":");
      b.aspect_id = `${ye}:${ie}`;
    } else
      b.aspect_id = bi(b);
  }
  function P(b = !0) {
    var M, k;
    if (!t) return;
    const m = ve;
    if (!D()) {
      ve = null, (M = d.shots) != null && M.length && (d.shots = []), m && I(m, null);
      return;
    }
    const T = (k = d.shots) == null ? void 0 : k[0];
    b && T && ve && c1(d.camera, n.frame, T, ve), ve = Zh(d.camera, n.frame), T ? Object.assign(T, ve, { position: [...ve.position] }) : d.shots = [{ ...ve, position: [...ve.position] }], m || I(null, ve);
  }
  function I(b, m) {
    var ie, ye;
    !m && n.mode === "frame" && H(b);
    const T = (m == null ? void 0 : m.position) ?? [0, 0, 0];
    if (((ye = (ie = n.viewTransition) == null ? void 0 : ie.end) == null ? void 0 : ye.mode) === "3dof") {
      _e({ ...G(), position: T }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !U()) return;
    const M = (b == null ? void 0 : b.position) ?? [0, 0, 0];
    if (M.every((W, se) => W === T[se])) return;
    const k = { ...G(), position: M };
    h({ mode: "6dof", position: M, moved: !0 }), n.viewDistance = k.distance, _e({ ...k, position: T }, { mode: "3dof", moved: !1 });
  }
  function B() {
    if (!l) return null;
    const b = Array.isArray(d.shots) ? d.shots : [];
    if (!b.length) return null;
    const m = String(d.active.selected_shot_id || "");
    return b.find((T) => String((T == null ? void 0 : T.id) || "") === m) || b[0] || null;
  }
  function le(b, m, T = {}) {
    var ie;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    b.accumulatedRad += Sh(m, b.lastAngle), b.lastAngle = m;
    const M = wh(b.start.roll_deg, b.accumulatedRad, {
      shiftKey: T.shiftKey,
      altKey: b.altStarted ? !1 : T.altKey
    });
    b.shot.roll_deg = M, b.changed = b.changed || Math.abs(b.accumulatedRad) > 1e-9;
    const k = (((ie = w.sidePanel) == null ? void 0 : ie.params) || []).find((ye) => ye.key === "roll_deg");
    k && (k.value = M, k.displayValue = Zi(M), k.fillPct = (M + 180) / 360 * 100), q(), pe(b), $({ localOnly: !0 });
  }
  function he(b, m, T = {}) {
    var ie;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot || !b.rollGesture) return;
    const M = Jm(b.rollGesture, m, T);
    if (!M) return;
    b.rollGesture = M.gesture, b.center = M.gesture.center, b.lastAngle = M.gesture.lastAngle, b.accumulatedRad = M.gesture.accumulatedRad, b.shot.roll_deg = M.rollDeg, b.changed = b.changed || Math.abs(M.gesture.accumulatedRad) > 1e-9;
    const k = (((ie = w.sidePanel) == null ? void 0 : ie.params) || []).find((ye) => ye.key === "roll_deg");
    k && (k.value = M.rollDeg, k.displayValue = Zi(M.rollDeg), k.fillPct = (M.rollDeg + 180) / 360 * 100), q(), pe(b), $({ localOnly: !0 });
  }
  function ee(b, m) {
    const T = Q(b);
    return Math.atan2(T.y - m.y, T.x - m.x);
  }
  function pe(b) {
    var ye, W;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const m = L(b.shot), T = (ye = r.getBoundingClientRect) == null ? void 0 : ye.call(r), M = (W = u.getBoundingClientRect) == null ? void 0 : W.call(u);
    if (!m || !T || !M || r.width <= 0 || r.height <= 0) return;
    const k = T.width / r.width, ie = T.height / r.height;
    w.tooltip.text = `${Zi(b.shot.roll_deg)}°`, w.tooltip.left = T.left - M.left + (m.x + m.w * 0.5) * k, w.tooltip.top = T.top - M.top + (m.y + m.h * 0.5) * ie + 12, w.tooltip.variant = "roll", w.tooltip.visible = !0;
  }
  function Se(b) {
    var ie;
    if (b.button !== 0 || a || n.mode !== "frame") return;
    const m = B();
    if (!m || m.locked === !0) return;
    const T = L(m);
    if (!T) return;
    const M = { x: T.x + T.w * 0.5, y: T.y + T.h * 0.5 }, k = ee(b, M);
    n.interaction = {
      kind: "roll_frame",
      shot: m,
      center: M,
      lastAngle: k,
      accumulatedRad: 0,
      start: { roll_deg: Number(m.roll_deg ?? m.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (ie = i.setPointerCapture) == null || ie.call(i, b.pointerId), b.preventDefault(), q(), pe(n.interaction), $({ localOnly: !0 });
  }
  function Pe(b) {
    var m;
    ((m = n.interaction) == null ? void 0 : m.kind) !== "roll_frame" || n.interaction.source !== "knob" || le(
      n.interaction,
      ee(b, n.interaction.center),
      b
    );
  }
  function fe() {
    const b = n.interaction;
    (b == null ? void 0 : b.kind) !== "roll_frame" || b.source !== "knob" || (b.changed && (J(), X(), ue()), n.interaction = null, de(), me(), q(), $());
  }
  function ge(b) {
    const m = n.mode === "frame" && !a ? B() : null;
    !m || m.locked === !0 || Math.abs(Number(m.roll_deg ?? m.rot_deg ?? 0)) <= 1e-9 || (m.roll_deg = 0, J(), X(), ue(), q(), $(), b.preventDefault());
  }
  return {
    connect(b) {
      ({
        applySpaceMode: h,
        cameraFrustumLength: p,
        cameraShoots: D,
        commitAndRefreshNode: X,
        currentSpaceCamera: z,
        cutoutCamera: Y,
        editorViewInput: C,
        forceCursorTool: re,
        getFrameViewRect: L,
        hasCamera: ne,
        hasSpaceContent: U,
        hideTooltip: de,
        isCameraSelected: V,
        isShotItem: ae,
        leaveFrameView: H,
        pushHistory: J,
        requestDraw: $,
        screenPos: Q,
        setSelectedItem: K,
        spaceScale: E,
        spaceViewState: G,
        stopTimelinePlayback: O,
        syncFrameRollKnob: q,
        syncViewToggleState: me,
        transitionView: _e,
        turnViewTo: te,
        updateCursor: N,
        updateSelectionMenu: oe,
        updateSidePanel: ue,
        worldGizmoPointer: be
      } = b);
    },
    addCutoutFrame: ce,
    addStudioCamera: y,
    deleteStudioCamera: v,
    setShotAspect: F,
    clearCutoutFrame: S,
    applyCutoutAspectCustom: R,
    rotateCutoutAspect90: _,
    syncCutoutShot: P,
    getActiveCutoutShot: B,
    startCameraPress: A,
    applySharedRollInteractionPoint: he,
    onFrameRollKnobPointerDown: Se,
    onFrameRollKnobPointerMove: Pe,
    finishKnobRoll: fe,
    onFrameRollKnobDoubleClick: ge
  };
}
function e2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: a,
    frameRailEl: s,
    paintDockEl: l,
    readOnly: u,
    runtime: d,
    shotEditor: c,
    toolRailEl: f,
    uiState: g,
    videoTransportEl: w
  } = e;
  let h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $ = null;
  function Q(x) {
    if (n.mode = "pano", !x) return;
    p();
    const R = V().distance;
    n.viewYaw = $t(x.yaw_deg), n.viewPitch = Ie(x.pitch_deg, -89.9, 89.9), n.viewFov = Ie(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && h({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = R, d.backgroundDirty = !0;
  }
  function K() {
    var ge, b, m, T, M;
    if (!r) return null;
    const x = (ge = r.getBoundingClientRect) == null ? void 0 : ge.call(r), R = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, _ = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    d.frameCanvasScale = Math.min(R, _);
    let P = 24, I = 24;
    const B = Math.max(P + 1, r.width - 24);
    let le = Math.max(I + 1, r.height - 24);
    const he = (b = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : b.call(f), ee = (m = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : m.call(s);
    let pe = 24;
    he && x && he.width > 0 && he.height > 0 && (pe = Math.max(pe, (he.right - x.left) * R + ep)), ee && x && ee.width > 0 && ee.height > 0 && ((T = g.frameRail) == null ? void 0 : T.visible) === !0 && (pe = Math.max(pe, (x.right - ee.left) * R + ep)), P = Math.max(P, pe);
    const Se = Math.min(B, r.width - pe);
    let Pe = 24;
    const fe = (M = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : M.call(a);
    if (fe && x && fe.width > 0 && fe.height > 0 && (Pe = Math.max(Pe, (fe.bottom - x.top) * _ + lc)), [l, w].forEach((k) => {
      var W;
      if (!k || !x) return;
      const ie = getComputedStyle(k);
      if (ie.display === "none" || ie.visibility === "hidden" || Number(ie.opacity) <= 0) return;
      const ye = (W = k.getBoundingClientRect) == null ? void 0 : W.call(k);
      !ye || ye.width <= 0 || ye.height <= 0 || (Pe = Math.max(Pe, (x.bottom - ye.top) * _ + lc));
    }), o && x) {
      const k = getComputedStyle(o);
      k.display !== "none" && k.visibility !== "hidden" && Number(k.opacity) > 0 && (Pe = Math.max(Pe, (SP + lc) * _));
    }
    return I = Math.max(I, Pe), le = Math.max(I + 1, Math.min(le, r.height - Pe)), {
      x: P,
      y: I,
      w: Math.max(1, Se - P),
      h: Math.max(1, le - I)
    };
  }
  function E(x = z()) {
    if (!x || !r) return null;
    const R = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Zb(R, x, ou * Si(R, x));
  }
  function G(x = z()) {
    const R = E(x);
    return R ? { x: R.x, y: R.y, w: R.w, h: R.h } : null;
  }
  function O() {
    return c && !!z();
  }
  function q(x, R) {
    const _ = z();
    if (!_ || _.locked === !0) return !1;
    const P = Number(R) > 0, I = Ph(_, R);
    if (!I) return !1;
    if (P) {
      const B = ou * Si(
        d.frameSafeRect || { w: r.width, h: r.height },
        I
      ), le = Lu({ width: r.width, height: r.height }, B);
      if (le.halfW < r.width * 0.5 - 1e-6 || le.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return _.hFOV_deg = I.hFOV_deg, _.vFOV_deg = I.vFOV_deg, me(), J(), !0;
  }
  function me() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, L(), D(), J());
    }, 180);
  }
  function _e() {
    return t && n.mode === "frame" && Y();
  }
  function te() {
    const x = z(), R = E(x);
    return x && R ? gm(x, R, { width: r.width, height: r.height }) : null;
  }
  function N() {
    var x;
    return ((x = X()) == null ? void 0 : x.radius) || Qn;
  }
  function oe(x) {
    const { position: R, yaw_deg: _, pitch_deg: P, roll_deg: I, hFOV_deg: B } = x.shot;
    return { position: R, yaw_deg: _, pitch_deg: P, roll_deg: I, hFOV_deg: B, distance: N() };
  }
  function ue(x, R) {
    const { rect: _ } = x;
    return i.pickSurface(U(x.shot), R.x - _.x, R.y - _.y, _.w, _.h);
  }
  function be(x, R, _) {
    return Rc(R, ue(x, _), null, de());
  }
  function ve(x) {
    return JSON.stringify([oe(x), x.rect]);
  }
  function A(x) {
    const R = z();
    R.position = [...x.position], R.yaw_deg = x.yaw_deg, R.pitch_deg = x.pitch_deg;
  }
  function ce(x, R) {
    const _ = z();
    !_ || u || _.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: _,
      last: x,
      start: { yaw_deg: Number(_.yaw_deg || 0), pitch_deg: Number(_.pitch_deg || 0) },
      changed: !1
    }, H(x), r.setPointerCapture(R));
  }
  function y(x, R, _) {
    const P = te();
    if (!P || u) return;
    const I = oe(P);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: R, pivot: be(P, I, R), changed: !1 } : { kind: "frame_pan", last: R, depth: rm(I, de()), changed: !1 }, H(R), r.setPointerCapture(_);
  }
  function v(x, R) {
    const _ = te();
    if (!_) return;
    const P = oe(_), I = R.x - x.last.x, B = R.y - x.last.y;
    A(x.kind === "frame_pan" ? am(P, I, B, _.rect.w, _.rect.h, x.depth) : om(P, I, B, r.height, x.pivot)), x.changed = x.changed || I !== 0 || B !== 0, x.last = R, ne({ localOnly: !0, cause: "frame_view" });
  }
  function F(x, R) {
    const _ = te();
    if (!_ || u) return;
    const P = oe(_), I = performance.now(), B = { x: x.x, y: x.y, time: I, key: i.contentRevision(), view: ve(_) };
    if (!im($, B)) {
      const le = ue(_, x);
      $ = { ...B, cost: performance.now() - I, hit: le };
    }
    A(sm(P, Rc(P, $.hit, null, de()), R, de())), $.view = ve(te() ?? _), $.wheelTime = I, me(), J(), ne({ localOnly: !0, cause: "frame_view" });
  }
  function S() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, L(), D(), J(), !0) : !1;
  }
  function j() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const R = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, R && C(), n.interaction = null, re(), ae(), J(), H(n.pointerPos), ne({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: h,
        cancelViewTransition: p,
        commitAndRefreshNode: D,
        contentSphere: X,
        getActiveCutoutShot: z,
        hasSpaceContent: Y,
        hideTooltip: C,
        invalidateLivePaintPreviewCaches: re,
        pushHistory: L,
        requestDraw: ne,
        shotViewCamera: U,
        spaceScale: de,
        spaceViewState: V,
        syncViewToggleState: ae,
        updateCursor: H,
        updateSidePanel: J
      } = x);
    },
    leaveFrameView: Q,
    measureFrameSafeRect: K,
    getFrameViewLayout: E,
    getFrameViewRect: G,
    supportsFramePainting: O,
    zoomFrameViewAt: q,
    isFreeFrameView: _e,
    frameContext: te,
    frameViewDistance: N,
    frameSpaceView: oe,
    frameTarget: be,
    startPanFrame: ce,
    startFrameDrag: y,
    dragFrame: v,
    zoomFrameAt: F,
    flushFrameWheelCommit: S,
    cancelFrameCameraGesture: j
  };
}
function t2(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let a, s, l, u, d, c, f, g, w, h, p, D, X, z, Y, C, re, L, ne = 0;
  function U() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function de() {
    return String(U() || "") === "lasso_fill";
  }
  function V() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ae(A, ce) {
    const y = Number(ce || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, y / 2048)
    };
  }
  function H(A) {
    const ce = String(A || "").trim();
    return ce === "eraser" ? Nr : Mn[ce] ? ce : t.activeBrushPresetId || Nr;
  }
  function J() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (V() || L());
  }
  function $() {
    var A;
    return J() && ((A = t.pointerPos) == null ? void 0 : A.inside) === !0;
  }
  function Q(A, ce = !0) {
    const y = Number((A == null ? void 0 : A.x) || 0), v = Number((A == null ? void 0 : A.y) || 0), F = ce !== !1, S = t.pointerPos || { x: 0, y: 0, inside: !1 }, j = S.inside !== F || Math.abs(S.x - y) > 0.01 || Math.abs(S.y - v) > 0.01;
    return t.pointerPos = { x: y, y: v, inside: F }, j;
  }
  function K() {
    var P, I;
    if (!$()) return null;
    const A = t.primaryTool === "mask" ? "mask" : "paint", ce = A === "mask" ? t.maskTool : t.paintTool, y = H(ce), v = Mn[y] || Mn[Nr], F = Number(t.brushSizes[y] ?? 10), S = Math.max(1, F) * Math.max(0.1, Number(v.sizeScale ?? 1)), j = Math.max(3, S * 0.5), x = A === "mask" ? ce === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : ce === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : On(t.paintColor), R = A === "mask" ? ce === "lasso_fill" ? 0.18 : 0.2 : ce === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(x.a ?? 1) * 0.3), 0.16, 0.52), _ = A === "mask" ? 0.95 : ce === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(x.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: A,
      toolKind: ce,
      preset: v,
      radius: j,
      fillStyle: cr(x, R),
      strokeStyle: cr(x, _),
      x: Number(((P = t.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((I = t.pointerPos) == null ? void 0 : I.y) || 0),
      hotspotX: j,
      hotspotY: j
    };
  }
  function E() {
    var B, le, he;
    const A = K();
    if (!r) return;
    if (!A) {
      r.style.display = "none";
      return;
    }
    let ce = A.radius * 2, y = A.radius * 2, v = "999px", F = 0, S = A.fillStyle, j = "1px solid rgba(222, 222, 222, 0.72)", x = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const R = "rgba(222, 222, 222, 0.72)", _ = "rgba(52, 52, 52, 0.72)";
    let P = Number(A.hotspotX ?? ce * 0.5), I = Number(A.hotspotY ?? y * 0.5);
    if (A.toolKind === "lasso_fill")
      ce = Xs, y = Xs, v = "0", j = "0", x = "none", P = kP, I = MP, S = EP(A.fillStyle, _, R);
    else if (A.layerKind === "mask")
      S = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (A.toolKind === "marker") {
      const ee = Math.max(1, Number(((B = A.preset) == null ? void 0 : B.aspect) ?? 1));
      ce = Math.max(10, A.radius * 2 * ee), y = Math.max(6, A.radius * 2), v = `${Math.min(6, y * 0.42)}px`, F = Number(((he = (le = A.preset) == null ? void 0 : le.angle) == null ? void 0 : he.value) || 0) * xi;
    } else A.toolKind === "brush" ? S = `radial-gradient(circle at 50% 50%, ${A.strokeStyle} 0%, ${A.fillStyle} 45%, rgba(0,0,0,0) 100%)` : A.toolKind === "eraser" && (S = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(ce)}px`, r.style.height = `${Math.round(y)}px`, r.style.borderRadius = v, r.style.border = j, r.style.boxShadow = x, r.style.background = S, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(A.x - P)}px, ${Math.round(A.y - I)}px) rotate(${F}deg)`;
  }
  function G() {
    var Pe;
    if (!n || !i) return;
    const A = t.primaryTool === "mask" ? "mask" : "paint", ce = A === "mask" ? t.maskTool : t.paintTool;
    if (ce === "lasso_fill") return;
    const y = H(ce), v = Mn[y] || Mn[Nr], F = Number(t.brushSizes[y] ?? 10), S = Math.max(1, F) * Math.max(0.1, Number(v.sizeScale ?? 1)), j = Math.max(6, S * 0.5), x = ce === "eraser", R = A === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : x ? { r: 1, g: 1, b: 1, a: 0.22 } : On(t.paintColor), _ = A === "mask" ? cr(R, 0.22) : x ? "rgba(255,255,255,0.14)" : cr(R, Ie(Math.max(0.18, Number(R.a ?? 1) * 0.34), 0.18, 0.56)), P = A === "mask" ? cr(R, 0.96) : x ? "rgba(255,255,255,0.72)" : cr(R, Ie(Math.max(0.56, Number(R.a ?? 1) * 0.96), 0.56, 1));
    let I = j * 2, B = j * 2, le = "999px", he = 0, ee = _;
    const pe = "rgba(222, 222, 222, 0.72)", Se = "rgba(52, 52, 52, 0.72)";
    if (A === "mask")
      ee = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (ce === "marker") {
      const fe = Math.max(1, Number((v == null ? void 0 : v.aspect) ?? 1));
      I = Math.max(16, j * 2 * fe), B = Math.max(10, j * 2), le = `${Math.min(8, B * 0.42)}px`, he = Number(((Pe = v == null ? void 0 : v.angle) == null ? void 0 : Pe.value) || 0) * xi;
    } else ce === "brush" ? ee = `radial-gradient(circle at 50% 50%, ${P} 0%, ${_} 48%, rgba(0,0,0,0) 100%)` : ce === "lasso_fill" ? (I = Math.max(18, j * 1.8), B = I, ee = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : x && (ee = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(I)}px`, i.style.height = `${Math.round(B)}px`, i.style.borderRadius = le, i.style.background = ee, i.style.border = `1px solid ${pe}`, i.style.boxShadow = `0 0 0 1px ${Se}`, i.style.transform = `rotate(${he}deg)`, ne && (clearTimeout(ne), ne = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function O() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), ne && clearTimeout(ne), ne = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), ne = 0;
    }, 180));
  }
  function q(A, ce, y, v) {
    const F = H(ce), S = Mn[F] || Mn[Nr], j = t.brushSizes[F] ?? 10, x = Math.max(1, j) * Math.max(0.1, S.sizeScale ?? 1), R = ae(v, x), _ = y.map((I) => ({
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: Number.isFinite(Number(I == null ? void 0 : I.widthScale)) ? Math.max(0, Number(I.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(I == null ? void 0 : I.pressureLike)) ? Math.max(0, Number(I.pressureLike)) : 1
    })), P = {
      id: Gi(A),
      actionGroupId: Gi("ag"),
      targetSpace: v && typeof v == "object" ? { ...v, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: A,
      toolKind: ce,
      size: x,
      createdAt: Date.now(),
      color: A === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: R.radiusModel,
      radiusValue: R.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: _.map((I) => ({ ...I })),
        points: _.map((I) => ({ ...I }))
      }
    };
    return Qf(P, S), t.mode, Number(S.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function me(A, ce, y, v) {
    const F = y.map((R) => ({
      ...R,
      t: Number((R == null ? void 0 : R.t) || 0),
      widthScale: Number.isFinite(Number(R == null ? void 0 : R.widthScale)) ? Math.max(0, Number(R.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(R == null ? void 0 : R.pressureLike)) ? Math.max(0, Number(R.pressureLike)) : 1
    })), S = H(ce), j = Mn[S] || Mn[Nr], x = {
      id: Gi(A),
      actionGroupId: Gi("ag"),
      targetSpace: v && typeof v == "object" ? { ...v, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: A,
      toolKind: ce,
      size: 10,
      createdAt: Date.now(),
      color: A === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: F.map((R) => ({ ...R }))
      }
    };
    return Qf(x, j), t.mode, Number(j.aspect ?? 1), Number(x.aspect ?? 1), String(x.stampKind || ""), { ...x.targetSpace }, x;
  }
  function _e(A) {
    const ce = o.painting || (o.painting = lo(null)), y = ce[A] || (ce[A] = { strokes: [] });
    return Array.isArray(y.strokes) || (y.strokes = []), y.strokes;
  }
  function te(A, ce, y = performance.now()) {
    let v;
    if (t.mode === "frame") {
      const _ = f();
      if (!_ || (v = re(ce, _, y), !v)) return !1;
    } else
      v = C(ce, y);
    if (!v) return !1;
    const F = A.stroke.geometry.rawPoints || A.stroke.geometry.points, S = A.stroke.geometry.points, j = F[F.length - 1];
    if (j) {
      const _ = Math.abs(Number(v.u ?? v.x ?? 0) - Number(j.u ?? j.x ?? 0)), P = Math.abs(Number(v.v ?? v.y ?? 0) - Number(j.v ?? j.y ?? 0));
      if (_ < 15e-4 && P < 15e-4) return !1;
    }
    const x = {
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    F.push({ ...x }), S.push({ ...x });
    const R = g(A);
    if (R) {
      const _ = t.paintEngine.ensureTarget(R);
      t.paintEngine.appendStrokePoint(_, Number(x.u ?? 0), Number(x.v ?? 0), A.stroke);
    }
    return !0;
  }
  function N(A, ce, y = performance.now()) {
    var j, x;
    let v;
    if (t.mode === "frame") {
      const R = f();
      if (!R) return !1;
      v = re(ce, R, y);
    } else
      v = C(ce, y);
    const F = (x = (j = A == null ? void 0 : A.stroke) == null ? void 0 : j.geometry) == null ? void 0 : x.points;
    if (!v || !Array.isArray(F)) return !1;
    const S = F[F.length - 1];
    if (S) {
      const R = Math.abs(Number(v.u ?? v.x ?? 0) - Number(S.u ?? S.x ?? 0)), _ = Math.abs(Number(v.v ?? v.y ?? 0) - Number(S.v ?? S.y ?? 0));
      if (R < 15e-4 && _ < 15e-4) return !1;
    }
    return F.push({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function oe(A) {
    var fe, ge, b, m, T;
    const ce = (A == null ? void 0 : A.stroke) || null;
    if (!ce || (A == null ? void 0 : A.layerKind) !== "paint" || String((ce == null ? void 0 : ce.toolKind) || "") !== "eraser") return !1;
    Y();
    const y = g(), v = u(y.width, y.height);
    if (!z(v, ce, { w: y.width, h: y.height })) return !1;
    const F = ((ge = (fe = v.ctx) == null ? void 0 : fe.getImageData(0, 0, y.width, y.height)) == null ? void 0 : ge.data) || null;
    if (!F) return !1;
    const S = new Map(h().map((M) => [String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim(), M ? { ...M } : null])), j = [], x = [], R = [...p().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== "paint")];
    let _ = !1, P = w().reduce((M, k) => Math.max(M, Number((k == null ? void 0 : k.z_index) || 0)), -1) + 1;
    function I(M, k, ie, ye = 8) {
      let W = k, se = ie, Ne = -1, we = -1;
      for (let Me = 0; Me < ie; Me += 1)
        for (let De = 0; De < k; De += 1)
          M[(Me * k + De) * 4 + 3] <= ye || (De < W && (W = De), Me < se && (se = Me), De > Ne && (Ne = De), Me > we && (we = Me));
      return Ne < W || we < se ? null : { minX: W, minY: se, maxX: Ne, maxY: we };
    }
    const B = I(F, y.width, y.height, 8);
    if (!B) return !1;
    function le(M, k) {
      return !M || !k ? !1 : !(M.maxX < k.minX || k.maxX < M.minX || M.maxY < k.minY || k.maxY < M.minY);
    }
    function he(M, k) {
      const ie = d((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "", "paint", k);
      if (!ie) return null;
      const ye = ie.centerUv.u - ie.halfW, W = ie.centerUv.u + ie.halfW, se = ie.centerUv.v - ie.halfH, Ne = ie.centerUv.v + ie.halfH, we = y.width, Me = y.height;
      return {
        minX: Math.floor((ye % 1 + 1) % 1 * we),
        maxX: Math.ceil((W % 1 + 1) % 1 * we),
        minY: Math.floor(Ie(se, 0, 1) * Me),
        maxY: Math.ceil(Ie(Ne, 0, 1) * Me),
        wraps: W - ye >= 1 || ye < 0 || W > 1
      };
    }
    function ee(M) {
      const k = (M == null ? void 0 : M.bbox) || null;
      if (!k) return null;
      const ie = (M == null ? void 0 : M.transform) || {}, ye = y.width, W = y.height, se = Number(k.u0 || 0) + Number(ie.du || 0), Ne = Number(k.u1 || 0) + Number(ie.du || 0), we = Number(k.v0 || 0) + Number(ie.dv || 0), Me = Number(k.v1 || 0) + Number(ie.dv || 0);
      return {
        minX: Math.floor((se % 1 + 1) % 1 * ye),
        maxX: Math.ceil((Ne % 1 + 1) % 1 * ye),
        minY: Math.floor(Ie(we, 0, 1) * W),
        maxY: Math.ceil(Ie(Me, 0, 1) * W),
        wraps: Ne - se >= 1 || se < 0 || Ne > 1
      };
    }
    function pe(M) {
      return M ? M.wraps ? le(B, { minX: 0, maxX: M.maxX, minY: M.minY, maxY: M.maxY }) || le(B, { minX: M.minX, maxX: y.width - 1, minY: M.minY, maxY: M.maxY }) : le(B, M) : !0;
    }
    function Se(M) {
      if (!M) return { touched: !1, canvas: null };
      const k = u(y.width, y.height, { readback: !0 });
      k.ctx.drawImage(M, 0, 0);
      const ie = k.ctx.getImageData(0, 0, y.width, y.height);
      k.ctx.save(), k.ctx.globalCompositeOperation = "destination-out", k.ctx.drawImage(v.canvas, 0, 0), k.ctx.restore();
      const ye = k.ctx.getImageData(0, 0, y.width, y.height);
      for (let W = 0; W < y.width * y.height; W += 1) {
        if (F[W * 4 + 3] <= 8) continue;
        const Ne = ie.data[W * 4 + 3], we = ye.data[W * 4 + 3];
        if (Ne > we)
          return { touched: !0, canvas: k.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Pe(M, k, ie) {
      const ye = Number(ie == null ? void 0 : ie.z_index), W = l(M, k, ie).map((se, Ne) => ({
        ...se,
        z_index: Number.isFinite(ye) ? ye + Ne * 1e-3 : P + Ne * 1e-3
      }));
      return W.length && (P = Math.max(P, ...W.map((se) => Number((se == null ? void 0 : se.z_index) || 0))) + 1), W;
    }
    for (const M of h()) {
      const k = String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim();
      if (!k) continue;
      const ie = D(k, "paint");
      if (!pe(he(M, ie))) {
        x.push(M), j.push(...ie);
        continue;
      }
      const ye = ((m = (b = t.paintEngine) == null ? void 0 : b.getGroupTarget) == null ? void 0 : m.call(b, k)) || null, W = ((T = ye == null ? void 0 : ye.committedPaint) == null ? void 0 : T.canvas) || null;
      if (!W) {
        x.push(M), j.push(...ie);
        continue;
      }
      const se = Se(W);
      if (!se.touched || !se.canvas) {
        x.push(M), j.push(...ie);
        continue;
      }
      _ = !0;
      const Ne = Pe(se.canvas, "paint", S.get(k) || M || {});
      R.push(...Ne);
    }
    for (const M of p().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") === "paint")) {
      if (!pe(ee(M))) {
        R.push(M);
        continue;
      }
      const k = a(M, null);
      if (!k) {
        R.push(M);
        continue;
      }
      const ie = Se(k);
      if (!ie.touched || !ie.canvas) {
        R.push(M);
        continue;
      }
      _ = !0;
      const ye = Pe(ie.canvas, "paint", M);
      R.push(...ye);
    }
    return _ ? (o.painting.paint.strokes = j, o.painting.groups = x.sort((M, k) => Number((M == null ? void 0 : M.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)), o.painting.raster_objects = R.sort((M, k) => Number((M == null ? void 0 : M.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function ue(A) {
    var j, x, R, _, P;
    if ((((x = (j = A.stroke) == null ? void 0 : j.geometry) == null ? void 0 : x.rawPoints) || ((_ = (R = A.stroke) == null ? void 0 : R.geometry) == null ? void 0 : _.points) || []).length >= 1) {
      ve(A);
      const I = g(A);
      I && (String(((P = A.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(I) : t.paintEngine.commitActiveStroke(A.stroke, I)), A._hasCommittedSegments = !0;
    }
    const y = A.stroke, v = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, F = q(A.layerKind, y.toolKind, [], v);
    F.actionGroupId = y.actionGroupId, A.stroke = F;
    const S = g(A);
    S && t.paintEngine.beginStroke(F, S);
  }
  function be(A) {
    var j, x;
    if ((((x = (j = A.stroke) == null ? void 0 : j.geometry) == null ? void 0 : x.points) || []).length >= 3) {
      ve(A);
      const R = g(A);
      R && t.paintEngine.commitActiveStroke(A.stroke, R), A._hasCommittedSegments = !0;
    }
    const y = A.stroke, v = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, F = me(A.layerKind, y.toolKind, [], v);
    F.actionGroupId = y.actionGroupId, A.stroke = F;
    const S = g(A);
    S && t.paintEngine.beginStroke(F, S);
  }
  function ve(A) {
    var S, j, x, R;
    const ce = ((S = A == null ? void 0 : A.stroke) == null ? void 0 : S.geometry) || null;
    if (!ce) return !1;
    const y = String(((j = A == null ? void 0 : A.stroke) == null ? void 0 : j.toolKind) || "pen");
    if (A.layerKind === "paint" && y === "eraser")
      return ce.geometryKind !== "lasso_fill" && (ce.processedPoints = X(ce.rawPoints || ce.points || [], A.stroke.targetSpace, !0)), oe(A);
    const v = A.layerKind === "paint" && y !== "eraser";
    if (ce.geometryKind === "lasso_fill")
      return (Array.isArray(ce.points) ? ce.points : []).length < 3 ? !1 : (v && c((x = A.stroke) == null ? void 0 : x.actionGroupId), _e(A.layerKind).push(A.stroke), !0);
    const F = ce.rawPoints || ce.points || [];
    return F.length < 1 ? !1 : (ce.processedPoints = X(F, A.stroke.targetSpace, !0), v && c((R = A.stroke) == null ? void 0 : R.actionGroupId), _e(A.layerKind).push(A.stroke), !0);
  }
  return {
    connect(A) {
      ({
        buildRasterObjectEditCanvas: a,
        clearSelection: s,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: u,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: c,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: g,
        getDisplayListObjects: w,
        getPaintingGroupList: h,
        getRasterObjectList: p,
        getStrokeGroupStrokes: D,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: Y,
        screenPosToErpPoint: C,
        screenPosToFrameAsErpPoint: re,
        supportsFramePainting: L
      } = A);
    },
    isActiveLassoTool: de,
    supportsErpPainting: V,
    getBrushPresetIdForTool: H,
    isPaintCursorEnabled: J,
    isActivePaintCursorVisible: $,
    setPointerPos: Q,
    syncPaintCursorElement: E,
    showPaintSizePreview: G,
    hidePaintSizePreview: O,
    buildFreehandStrokeRecord: q,
    buildLassoFillStrokeRecord: me,
    getPaintingLayerList: _e,
    appendPaintPoint: te,
    appendLassoPoint: N,
    _segmentFrameStroke: ue,
    _segmentFrameLassoFill: be,
    commitPaintInteraction: ve
  };
}
function n2(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, a, s, l, u, d, c, f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V;
  function ae(E) {
    var O;
    if (n && t.mode === "frame") {
      const q = a(), me = l(q);
      if (!q || !me || !(Number((E == null ? void 0 : E.x) || 0) >= Number(me.x || 0) && Number((E == null ? void 0 : E.x) || 0) <= Number(me.x || 0) + Number(me.w || 0) && Number((E == null ? void 0 : E.y) || 0) >= Number(me.y || 0) && Number((E == null ? void 0 : E.y) || 0) <= Number(me.y || 0) + Number(me.h || 0))) return null;
      const te = ne(E, q, performance.now()), N = te ? o(te) : null;
      if (N)
        for (const ue of s()) {
          if (!z(ue)) continue;
          const be = V(ue, N);
          if (be && Number(be.x) >= 0 && Number(be.x) <= 1 && Number(be.y) >= 0 && Number(be.y) <= 1) {
            const ve = L(ue);
            if (ve != null && ve.visible) return { item: ue, geom: ve };
          }
        }
      const oe = u(!1).slice().sort((ue, be) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0));
      for (const ue of oe) {
        if (ue.type === "strokeGroup") {
          const A = f(re("paint", ue.actionGroupId || ue.id || ""));
          if (!A) continue;
          const ce = L(A);
          if (!(ce != null && ce.visible)) continue;
          const y = Array.isArray(ce.strokePaths) ? ce.strokePaths : [];
          for (const v of y) {
            const F = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
            if (!F.length) continue;
            if (v.closed && F.length >= 3 && Br(E, F)) return { item: A, geom: ce };
            const S = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
            for (let j = 0; j < F.length - 1; j += 1)
              if (dc(E, F[j], F[j + 1]) <= S * S) return { item: A, geom: ce };
            if (F.length === 1 && Ro(E, F[0]) <= S * S) return { item: A, geom: ce };
          }
          continue;
        }
        if (ue.type === "rasterObject") {
          const A = d(C(((O = ue.item) == null ? void 0 : O.id) || ue.id || ""));
          if (!A) continue;
          const ce = L(A);
          if (g(A, ce, E, te)) return { item: A, geom: ce };
          continue;
        }
        const be = ue.item;
        if (!be || !z(be) || !N) continue;
        const ve = V(be, N);
        if (ve && Number(ve.x) >= 0 && Number(ve.x) <= 1 && Number(ve.y) >= 0 && Number(ve.y) <= 1) {
          const A = L(be);
          if (A != null && A.visible) return { item: be, geom: A };
        }
      }
      return null;
    }
    const G = [
      ...u(!1).slice().sort((q, me) => Number((me == null ? void 0 : me.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0)).map((q) => {
        var me;
        return q.type === "strokeGroup" ? f(re("paint", q.actionGroupId || q.id || "")) : q.type === "rasterObject" ? d(C(((me = q.item) == null ? void 0 : me.id) || q.id || "")) : q.item;
      }).filter(Boolean),
      ...n ? s().filter((q) => X(q)) : []
    ];
    for (const q of G) {
      if (Y(q)) {
        const _e = L(q);
        if (!(_e != null && _e.visible)) continue;
        const te = Array.isArray(_e.strokePaths) ? _e.strokePaths : [];
        for (const N of te) {
          const oe = Array.isArray(N == null ? void 0 : N.points) ? N.points : [];
          if (!oe.length) continue;
          if (N.closed && oe.length >= 3 && Br(E, oe)) return { item: q, geom: _e };
          const ue = Math.max(8, Number((N == null ? void 0 : N.lineWidth) || 0) * 0.5 + 6);
          for (let be = 0; be < oe.length - 1; be += 1)
            if (dc(E, oe[be], oe[be + 1]) <= ue * ue) return { item: q, geom: _e };
          if (oe.length === 1 && Ro(E, oe[0]) <= ue * ue) return { item: q, geom: _e };
        }
        continue;
      }
      if (D(q)) {
        const _e = L(q);
        if (!(_e != null && _e.visible)) continue;
        if (g(q, _e, E)) return { item: q, geom: _e };
        continue;
      }
      const me = L(q);
      if (me.visible && Br(E, me.corners))
        return { item: q, geom: me };
    }
    return null;
  }
  function H(E, G, O = null) {
    if (!E || !E.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (z(O)) return Uc(E, G);
    if (E.kind === "strokeGroup") {
      const q = E.corners.findIndex((_e) => Ro(_e, G) <= 121);
      if (q >= 0) {
        const _e = E.corners[q], te = _e.x - E.center.x, N = _e.y - E.center.y, oe = te * N >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: oe };
      }
      const me = Array.isArray(E.strokePaths) ? E.strokePaths : [];
      for (const _e of me) {
        const te = Array.isArray(_e == null ? void 0 : _e.points) ? _e.points : [];
        if (_e.closed && te.length >= 3 && Br(G, te)) return { kind: "move", cursor: "default" };
        const N = Math.max(8, Number((_e == null ? void 0 : _e.lineWidth) || 0) * 0.5 + 6);
        for (let oe = 0; oe < te.length - 1; oe += 1)
          if (dc(G, te[oe], te[oe + 1]) <= N * N) return { kind: "move", cursor: "default" };
      }
      return Br(G, E.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (E.kind === "rasterObject") {
      const q = E.corners.findIndex((me) => Ro(me, G) <= 121);
      if (q >= 0) {
        const me = E.corners[q], _e = me.x - E.center.x, te = me.y - E.center.y, N = _e * te >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: N };
      }
      return Br(G, E.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return _S(E, G, {
      edges: i === "cutout" || X(O),
      resize: !(X(O) && h()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function J(E, G) {
    return {
      x0: Math.min(Number((E == null ? void 0 : E.x) || 0), Number((G == null ? void 0 : G.x) || 0)),
      y0: Math.min(Number((E == null ? void 0 : E.y) || 0), Number((G == null ? void 0 : G.y) || 0)),
      x1: Math.max(Number((E == null ? void 0 : E.x) || 0), Number((G == null ? void 0 : G.x) || 0)),
      y1: Math.max(Number((E == null ? void 0 : E.y) || 0), Number((G == null ? void 0 : G.y) || 0))
    };
  }
  function $(E, G) {
    return !!E && !!G && Number(G.x) >= Number(E.x0) && Number(G.x) <= Number(E.x1) && Number(G.y) >= Number(E.y0) && Number(G.y) <= Number(E.y1);
  }
  function Q(E, G) {
    if (!E || !(G != null && G.visible) || !Array.isArray(G.corners)) return !1;
    if (G.corners.some((me) => $(E, me))) return !0;
    const O = (Number(E.x0) + Number(E.x1)) * 0.5, q = (Number(E.y0) + Number(E.y1)) * 0.5;
    return !!Br({ x: O, y: q }, G.corners);
  }
  function K(E) {
    if (de(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? U("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? U("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? U("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? U("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? U("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? U(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? U("grabbing") : U("default");
      return;
    }
    if (w()) {
      U("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        U(_P);
        return;
      }
      if (t.primaryTool !== "cursor") {
        U("default");
        return;
      }
      U("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      U("default");
      return;
    }
    if (t.gizmoAxis) {
      U("grab");
      return;
    }
    const G = c(), O = G ? L(G) : null, q = G ? p(G) : !1, me = q ? { kind: "none", cursor: "default" } : H(O, E, G);
    if (!q && me.kind !== "none") {
      U(me.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && ae(E)) {
      U("default");
      return;
    }
    U(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(E) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: a,
        getCutoutSelectableItemsForHit: s,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: u,
        getRasterObjectItem: d,
        getSelected: c,
        getStrokeGroupItem: f,
        hitRasterObjectAt: g,
        isActivePaintCursorVisible: w,
        isErpCamera: h,
        isItemLocked: p,
        isRasterObjectItem: D,
        isShotItem: X,
        isStickerItem: z,
        isStrokeGroupItem: Y,
        makeRasterObjectSelectionId: C,
        makeStrokeGroupSelectionId: re,
        objectGeom: L,
        screenPosToFrameAsErpPoint: ne,
        setCanvasCursor: U,
        syncPaintCursorElement: de,
        worldDirToFrameLocalPoint: V
      } = E);
    },
    hitObjectAt: ae,
    handleHit: H,
    rectFromPoints: J,
    rectIntersectsGeom: Q,
    updateCursor: K
  };
}
function r2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: a,
    state: s,
    tooltip: l,
    tooltipEl: u,
    type: d,
    uiState: c
  } = e;
  let f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H = !1;
  function J() {
    return H;
  }
  function $() {
    if (!o) return;
    if (H = !1, n.mode === "frame") {
      c.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || Y() && L()) {
      const te = Q();
      H = te.visible, K(te);
      return;
    }
    const O = D(), q = X();
    if (!O && q.length === 0 || n.interaction) {
      c.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const me = z(), _e = zN({
      type: d,
      selected: O,
      selectedItems: q,
      selectedKind: me,
      geom: q.length > 1 ? p(q) : ae(O),
      allLocked: f(q),
      anyLocked: q.some((te) => ne(te)),
      selectedLocked: ne(O),
      activeAspect: U(O) && C() ? oo : Er(O),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: re,
      isStickerHidden: V,
      canRestoreSelectedToInitial: g,
      iconSet: je,
      cameraShot: t,
      coverage: s.coverage
    });
    K(_e);
  }
  function Q() {
    const O = de() && !n.interaction ? h().space : null;
    if (!(O != null && O.gizmo)) return { visible: !1 };
    const q = w(), me = O.stickers.find((oe) => oe.id === n.worldSelectedId), te = (me ? Qu(me) : [O.gizmo.transform.position]).map((oe) => aa(q, oe, r.width, r.height)).filter(Boolean), N = W1(q, O.gizmo.transform.position, O.gizmo.mode, r.width, r.height);
    return jN({ corners: te, gizmoBox: N, gizmoMode: O.gizmo.mode, camera: Y() });
  }
  function K(O) {
    var N, oe;
    if (!O.visible) {
      c.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const q = (ue, be) => HN(O.anchor, ue, be, r.width, r.height), me = Math.max(1, Number(((N = n.menuSize) == null ? void 0 : N.w) || 220)), _e = Math.max(1, Number(((oe = n.menuSize) == null ? void 0 : oe.h) || 40)), te = q(me, _e);
    if (!te) {
      c.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    c.selectionMenu = {
      visible: !0,
      left: te.left,
      top: te.top,
      items: O.items
    }, i.requestFrame(() => {
      if (!o || c.selectionMenu.visible !== !0) return;
      const ue = o.getBoundingClientRect(), be = Math.round(Number((ue == null ? void 0 : ue.width) || 0)) || 220, ve = Math.round(Number((ue == null ? void 0 : ue.height) || 0)) || 40;
      n.menuSize = { w: be, h: ve, measured: !0 };
      const A = q(be, ve);
      A && (c.selectionMenu.left = A.left, c.selectionMenu.top = A.top);
    });
  }
  function E() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, c.tooltip.visible = !1;
  }
  function G(O) {
    if (!u || !O || !O.isConnected) return;
    const q = String(O.getAttribute("data-tip") || "").trim();
    if (!q) return;
    c.tooltip.text = q, c.tooltip.visible = !0;
    const me = O;
    i.requestFrame(() => {
      var S, j;
      if (l.target !== me || !u || !(me != null && me.isConnected)) return;
      const _e = a.getBoundingClientRect(), te = me.getBoundingClientRect(), N = 8, oe = 12, ue = Math.round(Number(((S = u.getBoundingClientRect()) == null ? void 0 : S.width) || 0)) || 100, be = Math.round(Number(((j = u.getBoundingClientRect()) == null ? void 0 : j.height) || 0)) || 24, ve = !!me.closest(".pano-floating-left"), A = !!me.closest(".pano-frame-rail"), ce = !!me.closest(".pano-paint-footer") || !!me.closest(".pano-paint-color-float");
      let y = "", v = te.left - _e.left + te.width * 0.5 - ue * 0.5, F = te.top - _e.top - be - oe;
      if (me.closest(".pano-floating-top") && (F = te.bottom - _e.top + oe), ve)
        y = "tool-rail", v = te.right - _e.left + 10, F = te.top - _e.top + te.height * 0.5 - be * 0.5, v = Ie(v, N, Math.max(N, _e.width - ue - N)), F = Ie(F, N, Math.max(N, _e.height - be - N));
      else if (A)
        y = "frame-rail", v = te.left - _e.left - ue - 10, F = te.top - _e.top + te.height * 0.5 - be * 0.5, v = Ie(v, N, Math.max(N, _e.width - ue - N)), F = Ie(F, N, Math.max(N, _e.height - be - N));
      else if (ce) {
        y = "footer";
        const x = me.closest(".pano-paint-footer"), R = x ? x.getBoundingClientRect() : te;
        v = R.left - _e.left + R.width * 0.5 - ue * 0.5, F = R.bottom - _e.top + 5, v = Ie(v, N, Math.max(N, _e.width - ue - N)), F = Math.max(N, F);
      }
      v = Ie(v, N, Math.max(N, _e.width - ue - N)), F = Math.max(N, F), c.tooltip.left = v, c.tooltip.top = F, c.tooltip.variant = y, c.tooltip.visible = !0;
    });
  }
  return {
    connect(O) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: g,
        currentSpaceCamera: w,
        editorViewInput: h,
        getMultiSelectionGeom: p,
        getSelected: D,
        getSelectedItems: X,
        getSelectedKind: z,
        isCameraSelected: Y,
        isErpCamera: C,
        isExternalSticker: re,
        isFreeSpaceView: L,
        isItemLocked: ne,
        isShotItem: U,
        isSpaceView: de,
        isStickerHidden: V,
        objectGeom: ae
      } = O);
    },
    isWorldMenuShown: J,
    updateSelectionMenu: $,
    hideTooltip: E,
    showTooltipFor: G
  };
}
function i2(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: a,
    readOnly: s,
    runtime: l,
    sceneV2: u,
    shotEditor: d,
    state: c,
    stateV2: f,
    timeline: g,
    type: w,
    viewController: h
  } = e;
  let p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe, ue, be, ve, A, ce, y, v, F, S, j, x, R, _, P, I, B, le, he, ee, pe, Se, Pe, fe, ge, b, m, T, M, k, ie, ye, W, se, Ne, we, Me, De, Le, Ge, qe, Ve, Z, Oe, $e, Ae, ze, He, Ue, tt, ht, Nt, vt, rn, Kn, Ye, zt, gn, br, jr, tn, wn, Hr, vr, Bn, va, Pi, ho, _a, Sa, wa, mo, Gr, Ft, Un, nr, go, En, xa, ka, Ma, _r = null;
  function Pa(Ce) {
    g.selection && (g.selection = null, mo());
    const Ee = ze(Ce);
    _r = Ee, rn(Ee, !0), H(), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0;
    const xe = b(), _t = ge(), lt = xe || _t ? TS(go(), Ce) : null;
    if (_t && lt) {
      Ce.preventDefault(), lt === "look" ? Hr(Ee, Ce.pointerId) : wn(lt, Ee, Ce.pointerId);
      return;
    }
    if (lt === "look") {
      Ce.preventDefault();
      const Xe = He(Ce);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, h.startDrag(Xe.x, Xe.y, Ce.pointerId, performance.now()), Ft(Ee), t.setPointerCapture(Ce.pointerId);
      return;
    }
    if (lt) {
      Ce.preventDefault(), vr(lt, Ee, Ce.pointerId);
      return;
    }
    if ((xe || _t) && Ce.button !== 0) {
      Ce.preventDefault();
      return;
    }
    if (Ce.button === 1) {
      if (Ce.preventDefault(), n.mode === "frame") {
        const Xe = ue();
        if (!Xe || s || Xe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Xe,
          last: Ee,
          start: {
            yaw_deg: Number(Xe.yaw_deg || 0),
            pitch_deg: Number(Xe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Xe = n.mode === "unwrap" ? Ee : He(Ce);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, h.startDrag(Xe.x, Xe.y, Ce.pointerId, performance.now());
      }
      Ft(Ee), t.setPointerCapture(Ce.pointerId);
      return;
    }
    if (Ce.button !== 0) return;
    if (n.mode === "frame" && (Ce.altKey || Ce.shiftKey) && !s) {
      const Xe = ue(), We = y(Xe);
      if (!Xe || Xe.locked === !0 || !We) return;
      const Qe = Xm({
        frame: We,
        point: Ee,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: Ce.shiftKey,
        altKey: Ce.altKey,
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
      }, t.setPointerCapture(Ce.pointerId), Ce.preventDefault(), Sa(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      Hr(Ee, Ce.pointerId), Ce.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && vo(Ce, Ee);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (va() || Pi())) {
      if (!De()) return;
      Bn();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", We = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Pi() ? ue() : null, Ut = { kind: "ERP_GLOBAL" }, Mt = Qe ? tt(Ee, Qe, performance.now()) : Ue(Ee, performance.now());
      if (!Mt) {
        Ft(Ee);
        return;
      }
      n.interaction = {
        kind: We === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: Gi("live"),
        stroke: We === "lasso_fill" ? de(Xe, We, [Mt], Ut) : U(Xe, We, [Mt], Ut)
      }, Pe();
      const Sr = be(n.interaction);
      if (Sr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Sr), n.interaction.kind === "paint_stroke") {
          const Ni = n.paintEngine.ensureTarget(Sr), Ci = Number((Mt == null ? void 0 : Mt.u) ?? (Mt == null ? void 0 : Mt.x) ?? 0), Ai = Number((Mt == null ? void 0 : Mt.v) ?? (Mt == null ? void 0 : Mt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ni, Ci, Ai, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Sr);
      Ft(Ee), t.setPointerCapture(Ce.pointerId), Ae();
      return;
    }
    const St = I(), Je = P(), Ze = St.length > 1 ? F(St) : Je ? Me(Je) : null;
    if (n.primaryTool === "cursor" && (Ce.ctrlKey || Ce.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ee, current: Ee }, Ft(Ee), t.setPointerCapture(Ce.pointerId), Ae({ localOnly: !0, reason: dt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && V() && b() && tn(Ce, Ee) || n.primaryTool === "cursor" && u && ie() && Na(Ce, Ee)) return;
    if (St.length > 1 && (Ze != null && Ze.visible)) {
      if ((St.some((We) => m(We)) ? { kind: "none" } : ee(Ze, Ee)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: St.map((We) => We),
          offset: { x: Ee.x - Ze.center.x, y: Ee.y - Ze.center.y },
          startCenter: { x: Ze.center.x, y: Ze.center.y },
          stickerSnapshots: St.filter((We) => ye(We)).map((We) => ({
            id: String(We.id || ""),
            yaw_deg: Number(qe(We).yaw_deg || 0),
            pitch_deg: Number(qe(We).pitch_deg || 0),
            center: (() => {
              var Ut, Mt;
              const Qe = Me(We);
              return Qe != null && Qe.visible ? { x: Number(((Ut = Qe.center) == null ? void 0 : Ut.x) || 0), y: Number(((Mt = Qe.center) == null ? void 0 : Mt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })()
          })),
          strokeSnapshots: St.filter((We) => W(We)).map((We) => ({
            id: String(We.actionGroupId || We.id || ""),
            layerKind: String(We.layerKind || "paint"),
            snapshot: cn(le(We.actionGroupId, We.layerKind)),
            frameSnapshot: cn(me(We.actionGroupId, We.layerKind)),
            center: (() => {
              var Ut, Mt;
              const Qe = Me(We);
              return Qe != null && Qe.visible ? { x: Number(((Ut = Qe.center) == null ? void 0 : Ut.x) || 0), y: Number(((Mt = Qe.center) == null ? void 0 : Mt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: B(We.actionGroupId, We.layerKind)
          })),
          rasterSnapshots: St.filter((We) => T(We)).map((We) => ({
            id: Le(We.rasterObjectId || We.id || ""),
            snapshot: cn(x().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Le(We.rasterObjectId || We.id || ""))),
            center: (() => {
              var Ut, Mt;
              const Qe = Me(We);
              return Qe != null && Qe.visible ? { x: Number(((Ut = Qe.center) == null ? void 0 : Ut.x) || 0), y: Number(((Mt = Qe.center) == null ? void 0 : Mt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: j(We)
          }))
        }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
    } else if (Je && (Ze != null && Ze.visible)) {
      const Xe = m(Je) ? { kind: "none" } : ee(Ze, Ee, Je);
      if (Xe.kind === "scale") {
        n.interaction = W(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Ze.center.x, Ee.y - Ze.center.y)),
          snapshot: cn(le(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: cn(me(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : T(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Ze.center.x, Ee.y - Ze.center.y)),
          snapshot: cn(x().find((We) => String((We == null ? void 0 : We.id) || "") === Le(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Ze.center.x, Ee.y - Ze.center.y)),
          startHFOV: Number(qe(Je).hFOV_deg || 20),
          startVFOV: Number(qe(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Ze.center.x, Ee.y - Ze.center.y)),
          startHFOV: Number(qe(Je).hFOV_deg || 20),
          startVFOV: Number(qe(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = W(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: Ze.center,
          startAng: Math.atan2(Ee.y - Ze.center.y, Ee.x - Ze.center.x),
          snapshot: cn(le(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: cn(me(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: Ze.center,
          startRot: Number(qe(Je).rot_deg || qe(Je).roll_deg || 0),
          startAng: Math.atan2(Ee.y - Ze.center.y, Ee.x - Ze.center.x)
        }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (W(Je)) {
          const We = n.mode === "frame" ? (() => {
            const Qe = ue();
            return Qe ? tt(Ee, Qe, performance.now()) : null;
          })() : Ue(Ee, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: We,
            snapshot: cn(le(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: cn(me(Je.actionGroupId, Je.layerKind))
          }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
          return;
        }
        if (T(Je)) {
          const We = n.mode === "frame" ? (() => {
            const Qe = ue();
            return Qe ? tt(Ee, Qe, performance.now()) : null;
          })() : Ue(Ee, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: We,
            snapshot: cn(x().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Le(Je.rasterObjectId || Je.id || "")))
          }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Ee.x - Ze.center.x, y: Ee.y - Ze.center.y }
        }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
    }
    const rt = Se(Ee);
    if (rt) {
      const Xe = n.selectedId !== rt.item.id;
      if (Xe && n.selectedId && (Ve(), K()), Kn(rt.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && nr(), Un(), Ae(), m(rt.item)) {
        Ft(Ee);
        return;
      }
      n.interaction = {
        kind: W(rt.item) ? "move_stroke_group" : T(rt.item) ? "move_raster_object" : "move",
        item: rt.item,
        offset: { x: Ee.x - rt.geom.center.x, y: Ee.y - rt.geom.center.y },
        startUv: W(rt.item) || T(rt.item) ? n.mode === "frame" ? (() => {
          const We = ue();
          return We ? tt(Ee, We, performance.now()) : null;
        })() : Ue(Ee, performance.now()) : null,
        snapshot: W(rt.item) ? cn(le(rt.item.actionGroupId, rt.item.layerKind)) : T(rt.item) ? cn(x().find((We) => String((We == null ? void 0 : We.id) || "") === Le(rt.item.rasterObjectId || rt.item.id || ""))) : null,
        frameSnapshot: W(rt.item) ? cn(me(rt.item.actionGroupId, rt.item.layerKind)) : null
      }, Ft(Ee), t.setPointerCapture(Ce.pointerId);
      return;
    }
    const Yn = !!n.selectedId;
    Yn && (Ve(), K()), J(), Yn && nr(), Un(), Ae(), n.mode === "pano" && vo(Ce, Ee);
  }
  function Wr(Ce, Ee) {
    return i.gizmoPointer(Ce, E(), Ee.x, Ee.y, t.width, t.height);
  }
  function Na(Ce, Ee) {
    var Ze;
    const xe = (Ze = q().space) == null ? void 0 : Ze.gizmo;
    if (xe && Wr("hover", Ee) !== null && Wr("down", Ee))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: xe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: xe.transform,
        base: wi(vt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Ce.pointerId), Ft(Ee), !0;
    const _t = I(), lt = P(), St = _t.length > 1 ? _t.some((rt) => m(rt)) ? "none" : ee(F(_t), Ee).kind : lt && !m(lt) ? ee(Me(lt), Ee, lt).kind : "none";
    if (St !== "none" && St !== "move") return !1;
    const Je = i.pickSticker(E(), Ee.x, Ee.y, t.width, t.height);
    return c.stickers.some((rt) => rt.id === Je && rt.placement === "world") ? (n.worldSelectedId !== Je && (n.selectedId && (Ve(), K()), Nt(Je), nr(), Un(), _a(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Ce.pointerId), !0) : !1;
  }
  function yo(Ce) {
    var _t;
    const xe = !!(n.worldSelectedId || fe()) && n.primaryTool === "cursor" && ie() && !!((_t = q().space) != null && _t.gizmo) ? Wr("hover", Ce) : null;
    xe !== n.gizmoAxis && (n.gizmoAxis = xe, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: dt.VIEW }));
  }
  function Ca(Ce, Ee) {
    const xe = Wr("move", Ee);
    if (xe && Ce.camera) {
      for (const [lt, St] of Object.entries(vf(Ce.mode, Ce.base, Ce.start, xe))) pn(c.camera, lt, n.frame, St);
      ho(), Ce.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const _t = c.stickers.find((lt) => lt.id === Ce.id);
    !xe || !_t || (m1(_t, n.frame, vf(Ce.mode, Ce.base, Ce.start, xe)), Ce.changed = !0, se(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function bo(Ce) {
    n.interaction = null, n.gizmoAxis = null, Ce.kind === "world_gizmo" && (Wr("up", n.pointerPos), l.backgroundDirty = !0, Ce.changed && (Ve(), $(), nr())), Ft(n.pointerPos), Ae();
  }
  function vo(Ce, Ee) {
    if (b()) {
      const _t = go().emptyLeft;
      _t && vr(_t, Ee, Ce.pointerId);
      return;
    }
    const xe = He(Ce);
    n.interaction = { kind: "view", last: xe, lastTs: performance.now() }, h.startDrag(xe.x, xe.y, Ce.pointerId, performance.now()), Ft(Ee), t.setPointerCapture(Ce.pointerId);
  }
  function Aa(Ce, Ee) {
    if (!f || !Ge.playing || (Ge.stop(), Ce.kind === "frame_pan")) return;
    if (Ce.kind === "frame_orbit") {
      const lt = _e();
      lt && (Ce.pivot = oe(lt, N(lt), Ee));
      return;
    }
    if (Ce.kind === "world_gizmo") {
      const lt = c.stickers.find((St) => St.id === Ce.id);
      Ce.camera ? Ce.base = G() : lt && (Ce.base = wi(lt, n.frame));
      return;
    }
    if (Ce.kind === "move_multi") {
      const lt = F(Ce.items);
      if (!(lt != null && lt.visible)) return;
      Ce.offset = { x: Ee.x - lt.center.x, y: Ee.y - lt.center.y }, Ce.startCenter = { x: lt.center.x, y: lt.center.y };
      for (const St of Ce.stickerSnapshots) {
        const Je = Ce.items.find((rt) => String((rt == null ? void 0 : rt.id) || "") === St.id), Ze = Je ? Me(Je) : null;
        Ze != null && Ze.visible && (St.yaw_deg = Number(qe(Je).yaw_deg || 0), St.pitch_deg = Number(qe(Je).pitch_deg || 0), St.center = { x: Ze.center.x, y: Ze.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Ce.kind)) return;
    const xe = Me(Ce.item);
    if (!(xe != null && xe.visible)) return;
    const _t = qe(Ce.item);
    if (Ce.kind === "move") {
      Ce.offset = { x: Ee.x - xe.center.x, y: Ee.y - xe.center.y };
      return;
    }
    if (Ce.center = xe.center, Ce.kind === "rotate") {
      Ce.startRot = Number(_t.rot_deg || _t.roll_deg || 0), Ce.startAng = Math.atan2(Ee.y - xe.center.y, Ee.x - xe.center.x);
      return;
    }
    Ce.startDist = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)), Ce.startHFOV = Number(_t.hFOV_deg || 20), Ce.startVFOV = Number(_t.vFOV_deg || 20);
  }
  function kl(Ce) {
    var _t, lt, St, Je, Ze, rt, Yn, Xe, We, Qe, Ut, Mt, Sr, Ni, Ci, Ai, So, Ea, Oa, Fa, wo, Ta;
    const Ee = ze(Ce);
    if (rn(Ee, !0), !n.interaction) {
      yo(Ee), Ft(Ee);
      return;
    }
    Ft(Ee);
    const xe = n.interaction;
    if (_r && (Ee.x !== _r.x || Ee.y !== _r.y)) {
      const ct = _r;
      _r = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(xe.kind) || Aa(xe, ct);
    }
    if (xe.kind !== "world_select") {
      if (xe.kind === "world_gizmo") {
        Ca(xe, Ee);
        return;
      }
      if (xe.kind === "paint_stroke") {
        const ct = typeof Ce.getCoalescedEvents == "function" ? Ce.getCoalescedEvents() : [Ce];
        let ft = !1;
        ct.forEach((mt) => {
          const yt = ze(mt);
          if (n.mode === "frame") {
            const yn = ue(), Dt = yn ? y(yn) : null;
            if (Dt) {
              const on = (yt.x - Dt.x) / Math.max(1, Dt.w), bt = (yt.y - Dt.y) / Math.max(1, Dt.h);
              if (!(on >= 0 && on <= 1 && bt >= 0 && bt <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, D(xe));
            }
          }
          z(xe, yt, performance.now()) && (ft = !0);
        }), ft && Ae({ localOnly: !0, reason: dt.PAINT });
        return;
      }
      if (xe.kind === "paint_lasso_fill") {
        const ct = typeof Ce.getCoalescedEvents == "function" ? Ce.getCoalescedEvents() : [Ce];
        let ft = !1;
        if (ct.forEach((mt) => {
          const yt = ze(mt);
          if (n.mode === "frame") {
            const yn = ue(), Dt = yn ? y(yn) : null;
            if (Dt) {
              const on = (yt.x - Dt.x) / Math.max(1, Dt.w), bt = (yt.y - Dt.y) / Math.max(1, Dt.h);
              if (!(on >= 0 && on <= 1 && bt >= 0 && bt <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, p(xe));
            }
          }
          X(xe, yt, performance.now()) && (ft = !0);
        }), ft) {
          const mt = be(xe);
          mt && n.paintEngine.updateActiveStroke(xe.stroke, mt), Ae({ localOnly: !0, reason: dt.PAINT });
        }
        return;
      }
      if (xe.kind === "view") {
        const ct = performance.now(), ft = n.mode === "unwrap" ? Ee : He(Ce);
        h.moveDrag(ft.x, ft.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), xe.lastTs = ct, xe.last = ft, Ae({ localOnly: !0, reason: dt.VIEW });
        return;
      }
      if (xe.kind === "frame_pan" || xe.kind === "frame_orbit") {
        O(xe, Ee);
        return;
      }
      if (xe.kind === "space_pan" || xe.kind === "space_orbit") {
        const ct = br();
        zt(xe.kind === "space_pan" ? am(ct, Ee.x - xe.last.x, Ee.y - xe.last.y, t.width, t.height, xe.depth) : om(ct, Ee.x - xe.last.x, Ee.y - xe.last.y, t.height, xe.pivot)), xe.last = Ee;
        return;
      }
      if (xe.kind === "pan_frame") {
        const ct = ce(xe.shot);
        if (!ct || !xe.shot) return;
        const ft = Ee.x - xe.last.x, mt = Ee.y - xe.last.y, yt = Zm(xe.shot, {
          dx: ft,
          dy: mt,
          focalPx: ct.focalPx,
          invertX: ((_t = c.ui_settings) == null ? void 0 : _t.invert_view_x) === !0,
          invertY: ((lt = c.ui_settings) == null ? void 0 : lt.invert_view_y) === !0
        });
        xe.shot.yaw_deg = yt.yaw_deg, xe.shot.pitch_deg = yt.pitch_deg, xe.changed = xe.changed || Math.abs(ft) > 0 || Math.abs(mt) > 0, xe.last = Ee, Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "roll_frame") {
        if (xe.source === "knob") return;
        re(xe, Ee, Ce);
        return;
      }
      if (xe.kind === "move") {
        const ct = Ee.x - xe.offset.x, ft = Ee.y - xe.offset.y;
        if (n.mode === "frame" && d) {
          const mt = ue(), yt = y(mt);
          if (!mt || !yt) return;
          const yn = {
            x: Ie((ct - yt.x) / Math.max(1, yt.w), 0, 1),
            y: Ie((ft - yt.y) / Math.max(1, yt.h), 0, 1)
          }, Dt = te(mt, yn);
          if (!Dt) return;
          const on = qa(Dt);
          En(xe.item, { yaw_deg: on.yaw, pitch_deg: on.pitch });
        } else if (n.mode === "unwrap") {
          const mt = he(), yt = Ie((ct - mt.x) / Math.max(mt.w, 1), 0, 1), yn = Ie((ft - mt.y) / Math.max(mt.h, 1), 0, 1);
          En(xe.item, { yaw_deg: $t(yt * 360 - 180), pitch_deg: Ie(90 - yn * 180, -90, 90) });
        } else {
          const mt = ht(ct, ft), yt = qa(mt);
          En(xe.item, { yaw_deg: yt.yaw, pitch_deg: yt.pitch });
        }
        ye(xe.item) && se(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const yt = ue();
          return yt ? tt(Ee, yt, performance.now()) : null;
        })() : Ue(Ee, performance.now());
        if (!ct || !xe.startUv) return;
        const ft = gn(Number(ct.u || 0), Number(xe.startUv.u || 0)), mt = Number(ct.v || 0) - Number(xe.startUv.v || 0);
        L((St = xe.item) == null ? void 0 : St.actionGroupId, ft, mt, xe.snapshot, (Je = xe.item) == null ? void 0 : Je.layerKind, xe.frameSnapshot) && (we({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const yt = ue();
          return yt ? tt(Ee, yt, performance.now()) : null;
        })() : Ue(Ee, performance.now());
        if (!ct || !xe.startUv) return;
        const ft = gn(Number(ct.u || 0), Number(xe.startUv.u || 0)), mt = Number(ct.v || 0) - Number(xe.startUv.v || 0);
        Y(((Ze = xe.item) == null ? void 0 : Ze.rasterObjectId) || ((rt = xe.item) == null ? void 0 : rt.id) || "", ft, mt, xe.snapshot) && (Ne(), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "scale_raster_object") {
        const ft = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        C(((Yn = xe.item) == null ? void 0 : Yn.rasterObjectId) || ((Xe = xe.item) == null ? void 0 : Xe.id) || "", ft, xe.snapshot) && (Ne(), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_multi") {
        const ct = Ee.x - Number(((We = xe.offset) == null ? void 0 : We.x) || 0), ft = Ee.y - Number(((Qe = xe.offset) == null ? void 0 : Qe.y) || 0);
        let mt = !1, yt = !1, yn = !1;
        const Dt = ct - Number(((Ut = xe.startCenter) == null ? void 0 : Ut.x) || ct), on = ft - Number(((Mt = xe.startCenter) == null ? void 0 : Mt.y) || ft);
        for (const bt of Array.isArray(xe.stickerSnapshots) ? xe.stickerSnapshots : []) {
          const an = (w === "cutout" ? ve() : v()).find((Te) => String((Te == null ? void 0 : Te.id) || "") === String(bt.id || ""));
          if (!an || !ye(an)) continue;
          const nn = {
            x: Number(((Sr = bt.center) == null ? void 0 : Sr.x) || 0) + Dt,
            y: Number(((Ni = bt.center) == null ? void 0 : Ni.y) || 0) + on
          };
          if (n.mode === "frame" && d) {
            const Te = ue(), Be = y(Te);
            if (!Te || !Be) continue;
            const Jt = {
              x: Ie((nn.x - Be.x) / Math.max(1, Be.w), 0, 1),
              y: Ie((nn.y - Be.y) / Math.max(1, Be.h), 0, 1)
            }, Zt = te(Te, Jt);
            if (!Zt) continue;
            const rr = qa(Zt);
            En(an, { yaw_deg: rr.yaw, pitch_deg: rr.pitch });
          } else if (n.mode === "unwrap") {
            const Te = he(), Be = Ie((nn.x - Te.x) / Math.max(Te.w, 1), 0, 1), Jt = Ie((nn.y - Te.y) / Math.max(Te.h, 1), 0, 1);
            En(an, { yaw_deg: $t(Be * 360 - 180), pitch_deg: Ie(90 - Jt * 180, -90, 90) });
          } else {
            const Te = ht(nn.x, nn.y), Be = qa(Te);
            En(an, { yaw_deg: Be.yaw, pitch_deg: Be.pitch });
          }
          mt = !0;
        }
        for (const bt of Array.isArray(xe.strokeSnapshots) ? xe.strokeSnapshots : []) {
          const an = {
            x: Number(((Ci = bt.center) == null ? void 0 : Ci.x) || 0) + Dt,
            y: Number(((Ai = bt.center) == null ? void 0 : Ai.y) || 0) + on
          }, nn = n.mode === "frame" ? (() => {
            const Be = ue();
            return Be ? tt(an, Be, performance.now()) : null;
          })() : Ue(an, performance.now()), Te = bt.centerUv || null;
          if (nn && Te) {
            const Be = gn(Number(nn.u || 0), Number(Te.u || 0)), Jt = Number(nn.v || 0) - Number(Te.v || 0);
            L(bt.id, Be, Jt, bt.snapshot, bt.layerKind, bt.frameSnapshot) && (mt = !0, yt = !0);
          }
        }
        for (const bt of Array.isArray(xe.rasterSnapshots) ? xe.rasterSnapshots : []) {
          const an = {
            x: Number(((So = bt.center) == null ? void 0 : So.x) || 0) + Dt,
            y: Number(((Ea = bt.center) == null ? void 0 : Ea.y) || 0) + on
          }, nn = n.mode === "frame" ? (() => {
            const Be = ue();
            return Be ? tt(an, Be, performance.now()) : null;
          })() : Ue(an, performance.now()), Te = bt.centerUv || null;
          if (nn && Te) {
            const Be = gn(Number(nn.u || 0), Number(Te.u || 0)), Jt = Number(nn.v || 0) - Number(Te.v || 0);
            Y(bt.id, Be, Jt, bt.snapshot) && (mt = !0, yn = !0);
          }
        }
        mt && (yt ? we({ rebuildPaintEngine: !1 }) : yn ? Ne() : se(), Ae({ localOnly: !0 }));
        return;
      }
      if (xe.kind === "scale_stroke_group") {
        const ft = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        ne((Oa = xe.item) == null ? void 0 : Oa.actionGroupId, ft, 0, xe.snapshot, (Fa = xe.item) == null ? void 0 : Fa.layerKind, xe.frameSnapshot) && (we({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Ee.y - xe.center.y, Ee.x - xe.center.x) - Number(xe.startAng || 0)) * xi;
        Ce.shiftKey && (ct = Math.round(ct / 45) * 45), ne((wo = xe.item) == null ? void 0 : wo.actionGroupId, 1, ct, xe.snapshot, (Ta = xe.item) == null ? void 0 : Ta.layerKind, xe.frameSnapshot) && (we({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "marquee_select") {
        xe.current = Ee, Ae({ localOnly: !0, reason: dt.OVERLAY });
        return;
      }
      if (xe.kind === "scale") {
        const ft = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / xe.startDist;
        En(xe.item, { hFOV_deg: Ie(xe.startHFOV * ft, 1, 179), vFOV_deg: Ie(xe.startVFOV * ft, 1, 179) }), M(xe.item) || (xe.item.aspect_id = bi(xe.item)), ye(xe.item) && se(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_x") {
        const ft = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / xe.startDist;
        En(xe.item, { hFOV_deg: Ie(xe.startHFOV * ft, 1, 179) }), M(xe.item) || (xe.item.aspect_id = bi(xe.item)), ye(xe.item) && se(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_y") {
        const ft = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / xe.startDist;
        En(xe.item, { vFOV_deg: Ie(xe.startVFOV * ft, 1, 179) }), M(xe.item) || (xe.item.aspect_id = bi(xe.item)), ye(xe.item) && se(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "rotate") {
        let ft = (Math.atan2(Ee.y - xe.center.y, Ee.x - xe.center.x) - xe.startAng) * xi, mt = xe.startRot - ft;
        Ce.shiftKey && (mt = Math.round(mt / 45) * 45), En(xe.item, { [ye(xe.item) ? "rot_deg" : "roll_deg"]: mt }), ye(xe.item) && se(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ml() {
    var Ee, xe, _t, lt, St, Je, Ze;
    const Ce = n.interaction;
    if (!((Ce == null ? void 0 : Ce.kind) === "roll_frame" && Ce.source === "knob")) {
      if ((Ce == null ? void 0 : Ce.kind) === "space_pan" || (Ce == null ? void 0 : Ce.kind) === "space_orbit") {
        n.interaction = null, Ft(n.pointerPos), Un();
        return;
      }
      if ((Ce == null ? void 0 : Ce.kind) === "world_select" || (Ce == null ? void 0 : Ce.kind) === "world_gizmo") {
        bo(Ce);
        return;
      }
      if (((Ee = n.interaction) == null ? void 0 : Ee.kind) === "paint_stroke" || ((xe = n.interaction) == null ? void 0 : xe.kind) === "paint_lasso_fill") {
        Pe();
        const rt = Q(n.interaction), Yn = !!n.interaction._hasCommittedSegments;
        if (rt || Yn) {
          we();
          const Xe = String(((_t = n.interaction.stroke) == null ? void 0 : _t.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = S().find((Ut) => String((Ut == null ? void 0 : Ut.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const We = be(n.interaction);
          We && (rt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(We), $e()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, We) : n.paintEngine.cancelActiveStroke(We)), Ve(), K(), nr(), Un(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = be(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((St = n.interaction) == null ? void 0 : St.kind) === "marquee_select") {
        const rt = Z(n.interaction.start, n.interaction.current), Xe = [
          ...w === "cutout" ? A().filter((We) => !k(We)) : [...v()],
          ..._(),
          ...R()
        ].filter((We) => Oe(rt, Me(We)));
        Ye(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), nr(), Un(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Ze = n.interaction) == null ? void 0 : Ze.kind))
        n.interaction.changed && (Ve(), $(), nr());
      else if (n.interaction && n.interaction.kind !== "view") {
        let rt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (rt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (rt = !0), rt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? we({ rebuildPaintEngine: !0 }) : Ne()), Ve(), K(), o.setDirtyCanvas(!0, !0), wa(), Un(), Ae();
      }
      n.interaction = null, (Ce == null ? void 0 : Ce.kind) === "roll_frame" && pe(), Pe(), Ce && Ce.kind === "view" && jr(() => h.endDrag(performance.now())), Gr(), Un(), Ft(n.pointerPos), Ae();
    }
  }
  function Ia() {
    var Ce, Ee, xe, _t, lt;
    if (!ae()) {
      if (((Ce = n.interaction) == null ? void 0 : Ce.kind) === "world_select" || ((Ee = n.interaction) == null ? void 0 : Ee.kind) === "world_gizmo") {
        bo(n.interaction);
        return;
      }
      if (((xe = n.interaction) == null ? void 0 : xe.kind) === "view" && jr(() => h.endDrag(performance.now())), ((_t = n.interaction) == null ? void 0 : _t.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        Pe();
        const St = be(n.interaction);
        St && n.paintEngine.cancelActiveStroke(St);
      }
      n.interaction = null, Pe(), Gr(), Ft(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function _o(Ce) {
    const Ee = ze(Ce), xe = rn(Ee, !0);
    n.interaction || (Ft(Ee), xe && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: dt.OVERLAY }));
  }
  function Pl(Ce) {
    if (n.mode === "frame") {
      const Ee = ze(Ce), xe = As(Ce);
      xe && Bn(), xe && ge() ? xa(Ee, -xe) : xe && ka(Ee, xe) && Ae({ localOnly: !0 }), Ce.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (H(), b()) {
        const Ee = As(Ce);
        Ee && Ma(ze(Ce), -Ee);
      } else h.applyWheelEvent(Ce) && Ae({ localOnly: !0, reason: dt.VIEW });
      Ce.preventDefault();
    }
  }
  return {
    connect(Ce) {
      ({
        _segmentFrameLassoFill: p,
        _segmentFrameStroke: D,
        appendLassoPoint: X,
        appendPaintPoint: z,
        applyRasterObjectOffset: Y,
        applyRasterObjectTransform: C,
        applySharedRollInteractionPoint: re,
        applyStrokeGroupOffset: L,
        applyStrokeGroupTransform: ne,
        buildFreehandStrokeRecord: U,
        buildLassoFillStrokeRecord: de,
        cameraShoots: V,
        cancelFrameCameraGesture: ae,
        cancelViewTransition: H,
        clearSelection: J,
        commitAndRefreshNode: $,
        commitPaintInteraction: Q,
        commitState: K,
        currentSpaceCamera: E,
        cutoutCamera: G,
        dragFrame: O,
        editorViewInput: q,
        ensureGroupFrame: me,
        frameContext: _e,
        frameLocalPointToWorldDir: te,
        frameSpaceView: N,
        frameTarget: oe,
        getActiveCutoutShot: ue,
        getActivePaintTargetDescriptor: be,
        getCutoutSelectableItems: ve,
        getCutoutSelectableItemsForHit: A,
        getFrameViewLayout: ce,
        getFrameViewRect: y,
        getList: v,
        getMultiSelectionGeom: F,
        getPaintingGroupList: S,
        getRasterObjectCenterUv: j,
        getRasterObjectList: x,
        getSelectableRasterObjectItems: R,
        getSelectableStrokeGroupItems: _,
        getSelected: P,
        getSelectedItems: I,
        getStrokeGroupCenterUv: B,
        getStrokeGroupStrokes: le,
        getUnwrapRect: he,
        handleHit: ee,
        hideTooltip: pe,
        hitObjectAt: Se,
        invalidateLivePaintPreviewCaches: Pe,
        isCameraSelected: fe,
        isFreeFrameView: ge,
        isFreeSpaceView: b,
        isItemLocked: m,
        isRasterObjectItem: T,
        isSceneSticker: M,
        isShotItem: k,
        isSpaceView: ie,
        isStickerItem: ye,
        isStrokeGroupItem: W,
        markObjectVisualsDirty: se,
        markPaintCompositeVisualsDirty: Ne,
        markPaintStrokeVisualsDirty: we,
        objectGeom: Me,
        paintingShown: De,
        parseRasterObjectSelectionId: Le,
        playback: Ge,
        poseOf: qe,
        pushHistory: Ve,
        rectFromPoints: Z,
        rectIntersectsGeom: Oe,
        refreshPaintEngineRevisionCache: $e,
        requestDraw: Ae,
        screenPos: ze,
        screenPosCss: He,
        screenPosToErpPoint: Ue,
        screenPosToFrameAsErpPoint: tt,
        screenToWorldDir: ht,
        selectWorldSticker: Nt,
        selectedWorldSticker: vt,
        setPointerPos: rn,
        setSelectedItem: Kn,
        setSelectedItems: Ye,
        setSpaceView: zt,
        shortestWrappedDelta: gn,
        spaceViewState: br,
        startAnimation: jr,
        startCameraPress: tn,
        startFrameDrag: wn,
        startPanFrame: Hr,
        startSpaceDrag: vr,
        stopTimelinePlayback: Bn,
        supportsErpPainting: va,
        supportsFramePainting: Pi,
        syncCutoutShot: ho,
        syncFloatingViewButtonState: _a,
        syncFrameRollKnob: Sa,
        syncSidePanelControls: wa,
        syncTimeline: mo,
        syncViewToggleState: Gr,
        updateCursor: Ft,
        updateSelectionMenu: Un,
        updateSidePanel: nr,
        viewControls: go,
        writePose: En,
        zoomFrameAt: xa,
        zoomFrameViewAt: ka,
        zoomSpaceAt: Ma
      } = Ce);
    },
    onCanvasPointerDown: Pa,
    worldGizmoPointer: Wr,
    hoverWorldGizmo: yo,
    onCanvasPointerMove: kl,
    onCanvasPointerUp: Ml,
    onCanvasPointerCancel: Ia,
    onCanvasMouseMove: _o,
    onCanvasWheel: Pl
  };
}
function o2(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: a,
    shotEditor: s,
    state: l,
    studio: u,
    type: d,
    uiState: c
  } = e;
  let f, g, w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te;
  function N(ve, A, ce = !1) {
    var R;
    K();
    const y = s && n.mode === "frame" ? D() : null, v = y || Y(), F = y ? "shot" : re(), S = $();
    if (S && !_e(S) || !S && (!v || F === "stroke" || L(v))) return;
    const j = (((R = c.sidePanel) == null ? void 0 : R.params) || []).find((_) => _.key === ve);
    if (!j || j.enabled === !1) return;
    let x = Number(A);
    if (Number.isNaN(x) && (x = 0), (S || t) && mP.has(ve) ? x = ve === "scale" ? Math.max(x, Pg) : x : x = Ie(x, Number(j.min), Number(j.max)), ve === "yaw_deg" && (x = $t(x)), !S && t && ve.startsWith("position_")) {
      G(), d1(l.camera, n.frame, ve, x), me(), J(), ce && H();
      return;
    }
    if (S) {
      h1(S, n.frame, ve, x), de(), me(), J(), ce && H();
      return;
    }
    ve === "opacity" ? f1(v, n.frame, x / 100) : te(v, { [ve]: x }), s && !ne(v) && (ve === "hFOV_deg" || ve === "vFOV_deg") && (v.aspect_id = bi(v)), me(), J(), ce && H();
  }
  async function oe(ve) {
    var y, v, F, S, j, x, R;
    const A = ve.target.closest("[data-action]");
    if (!A) return;
    const ce = String(A.getAttribute("data-action") || "");
    if (ce === "coverage-set") {
      const _ = In(A.getAttribute("data-coverage"));
      if (_ === In(l.coverage)) return;
      l.coverage = _, n.coverage = _, r && (r.value = String(_)), o ? a.backgroundDirty = !0 : (p(), E({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), me(), q(), J();
      return;
    }
    if (ce === "toggle-selection-picker") {
      if ((v = (y = c.sidePanel) == null ? void 0 : y.selectionPicker) != null && v.disabled) return;
      c.sidePanel.selectionPicker.open = !c.sidePanel.selectionPicker.open;
      return;
    }
    if (ce === "select-picker-item") {
      c.sidePanel.selectionPicker.open = !1;
      const _ = String(A.getAttribute("data-selection-id") || "");
      let P = null;
      if (_ && (d === "stickers" ? P = [...z(), ...u ? l.shots : []].find((I) => String((I == null ? void 0 : I.id) || "") === _) || null : P = ((F = X().find((I) => {
        var B;
        return String(((B = I == null ? void 0 : I.item) == null ? void 0 : B.id) || "") === _;
      })) == null ? void 0 : F.item) || null), Q(P || null), P && !U(P)) {
        const I = ae(P);
        O($t(Number(I.yaw_deg || 0)), Ie(Number(I.pitch_deg || 0), -89.9, 89.9));
      }
      me(), q(), J();
      return;
    }
    if (ce === "copy-state-inline") {
      const _ = Y(), P = re();
      if (!_ || P === "stroke" || C().length > 1) return;
      const I = JSON.stringify(s && P !== "image" ? g(_) : w(ae(_)));
      try {
        await navigator.clipboard.writeText(I), (S = c.sidePanel) != null && S.copyStateButton && (c.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = c.sidePanel) != null && B.copyStateButton && (c.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (ce === "set-invert-x") {
      l.ui_settings.invert_view_x = A.getAttribute("data-value") === "1", V(), me(), (j = i.setDirtyCanvas) == null || j.call(i, !0, !0), J();
      return;
    }
    if (ce === "set-invert-y") {
      l.ui_settings.invert_view_y = A.getAttribute("data-value") === "1", V(), me(), (x = i.setDirtyCanvas) == null || x.call(i, !0, !0), J();
      return;
    }
    if (ce === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, V(), me(), (R = i.setDirtyCanvas) == null || R.call(i, !0, !0), J();
      return;
    }
    if (ce === "close-preview") {
      h();
      return;
    }
    if (ce === "cancel-close") {
      h();
      return;
    }
    ce === "save-close" && (f(), h());
  }
  function ue(ve) {
    const A = ve.target.closest("[data-action='param-input']");
    A && N(String(A.getAttribute("data-param-key") || ""), A.value, !1);
  }
  function be(ve) {
    const A = ve.target.closest("[data-action='param-input']");
    A && N(String(A.getAttribute("data-param-key") || ""), A.value, !0);
  }
  return {
    connect(ve) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: g,
        buildCanonicalSelectedStickerState: w,
        closeEditor: h,
        commitState: p,
        getActiveCutoutShot: D,
        getCutoutInspectorItems: X,
        getList: z,
        getSelected: Y,
        getSelectedItems: C,
        getSelectedKind: re,
        isItemLocked: L,
        isSceneSticker: ne,
        isStrokeGroupItem: U,
        markObjectVisualsDirty: de,
        persistUiSettings: V,
        poseOf: ae,
        pushHistory: H,
        requestDraw: J,
        selectedWorldSticker: $,
        setSelectedItem: Q,
        stopTimelinePlayback: K,
        syncCoverageChangeToNodePreviews: E,
        syncCutoutShot: G,
        turnViewTo: O,
        updateSelectionMenu: q,
        updateSidePanel: me,
        worldStickerEditable: _e,
        writePose: te
      } = ve);
    },
    onSidePanelClick: oe,
    onSidePanelInput: ue,
    onSidePanelChange: be
  };
}
function a2(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: a,
    readOnly: s,
    root: l,
    runtime: u,
    shotEditor: d,
    tooltip: c,
    uiState: f,
    videoEl: g
  } = e;
  let w, h, p, D, X, z, Y, C, re, L, ne, U, de, V, ae, H, J, $, Q, K, E, G, O, q, me, _e, te, N, oe, ue, be, ve, A, ce, y, v, F, S, j, x, R, _, P, I, B, le, he, ee, pe, Se, Pe;
  const fe = () => {
    if (!t.customPaintSessionStart) return;
    if (Js(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (OP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ve = [
      On(t.customPaintColor),
      ...t.customPaintHistory.filter((Z) => !Js(Z, t.customPaintColor))
    ];
    t.customPaintHistory = Ve.slice(0, 8), t.customPaintSessionStart = null;
  }, ge = (Ve = !1) => {
    !i || i.hidden || (Ve ? fe() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, b = () => {
    i && (i.hidden && (t.customPaintSessionStart = On(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function m() {
    j();
  }
  function T(Ve) {
    var ht, Nt, vt, rn, Kn;
    if ((Nt = (ht = Ve.target) == null ? void 0 : ht.matches) != null && Nt.call(ht, "[data-confirm-overlay]")) {
      const Ye = (vt = f.confirmDialog) == null ? void 0 : vt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ye == null || Ye(!1);
      return;
    }
    const Z = Ve.target.closest("[data-space-mode]");
    if (Z) {
      ce(Z.getAttribute("data-space-mode"));
      return;
    }
    const Oe = Ve.target.closest("[data-gizmo-mode]");
    if (Oe) {
      t.gizmoMode = Oe.getAttribute("data-gizmo-mode"), u.backgroundDirty = !0, pe(), N({ localOnly: !0, reason: dt.VIEW });
      return;
    }
    const $e = Ve.target.closest("[data-view]");
    if ($e) {
      if ($e.getAttribute("aria-disabled") === "true") return;
      const Ye = t.mode;
      t.mode = String($e.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (Ye !== "frame" && (u.frameSafeRect = null), Se(), pe()), V(), P(), N();
      return;
    }
    const Ae = Ve.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !s) {
      if (Ae.matches("[data-tool-mode]")) {
        const Ye = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ye, (Ye === "paint" || Ye === "mask") && re({ preservePanelValues: !0 }), x(), Se(), pe(), N();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const Ye = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((Ye === "undo" || Ye === "redo") && Ae.disabled) return;
        Ye === "undo" ? oe(-1) : Ye === "redo" ? oe(1) : Ye === "clear" ? Y() : Ye === "add" || Ye === "add-image" ? h() : Ye === "add-world" ? D() : Ye === "add-or-look" ? w() : Ye === "add-camera" && p();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ye = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ye, re({ preservePanelValues: !0 }), Mn[Ye] && (t.activeBrushPresetId = Ye), x(), Se(), pe(), N();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), re({ preservePanelValues: !0 }), x(), Se(), pe(), N();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const Ye = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        C(Ye);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const Ye = wl.find((zt) => zt.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!Ye) return;
        t.paintColor = On(Ye.color), ge(!0), x();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ve.preventDefault(), Ve.stopPropagation(), i && !i.hidden ? ge(!0) : b(), x();
        return;
      }
    }
    const ze = String(((rn = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : rn.call(Ae, "data-action")) || "");
    if (ze === "video-play-toggle") {
      if (Ve.preventDefault(), Ve.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub = !1, I();
      return;
    }
    if (ze === "video-audio-toggle") {
      Ve.preventDefault(), Ve.stopPropagation(), he(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (ze === "video-loop-toggle") {
      if (Ve.preventDefault(), Ve.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      const Ye = !f.videoTransport.loop;
      f.videoTransport.loop = Ye, g.loop = Ye, _({
        hasAudio: f.videoTransport.hasAudio,
        loop: Ye,
        muted: g.muted,
        volume: Number(g.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!s) {
      if (ze === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (ze === "frame-aspect-set") {
        const Ye = t.mode === "frame" ? H() : null;
        if (!Ye || Ye.locked === !0) return;
        A(Ye, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, R(), me(), L(), P(), Se(), pe(), N();
        return;
      }
      if (ze === "frame-aspect-custom") {
        const Ye = t.mode === "frame" ? H() : null, zt = Ae.getAttribute("data-custom-width"), gn = Ae.getAttribute("data-custom-height");
        if (!Ye || !X(Ye, zt, gn)) return;
        f.frameRail.aspectOpen = !1, R(), me(), L(), P(), N();
        return;
      }
      if (ze === "frame-rotate-90") {
        const Ye = t.mode === "frame" ? H() : null;
        if (!Ye || Ye.locked === !0) return;
        be(Ye), f.frameRail.aspectOpen = !1, R(), me(), L(), P(), N();
        return;
      }
      if (ze === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, pe(), N();
        return;
      }
      if (ze === "aspect-set") {
        const Ye = $();
        if (!Ye) return;
        const zt = String(Ae.getAttribute("data-aspect") || "1:1");
        A(Ye, zt), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, R(), me(), L(), pe(), N();
        return;
      }
      if (ze === "rotate-90") {
        const Ye = $();
        if (!Ye || E()) return;
        be(Ye), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, R(), me(), L(), pe(), N();
        return;
      }
      if (ze === "bring-front") {
        z();
        return;
      }
      if (ze === "send-back") {
        ve();
        return;
      }
      if (ze === "duplicate") {
        de();
        return;
      }
      if (ze === "replace-image") {
        te();
        return;
      }
      if (ze === "toggle-lock") {
        le();
        return;
      }
      if (ze === "back-initial") {
        ue();
        return;
      }
      if (ze === "toggle-visible") {
        B();
        return;
      }
      if (ze === "delete") {
        U();
        return;
      }
    }
    if (ze === "reset-view") {
      if (t.mode === "frame") return;
      ee(
        { position: F(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Kn = ne()) == null ? void 0 : Kn.radius) || Qn },
        { mode: Zs(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (ze === "frame-view") {
      if (!G() || Zs(t.spaceMode, t.viewTransition) !== "6dof") return;
      ae();
      return;
    }
    if (ze === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, jP(r == null ? void 0 : r.id, t.showGrid), m(), N();
      return;
    }
    if (ze === "toggle-fullscreen") {
      Ve.preventDefault(), Ve.stopPropagation(), Le();
      return;
    }
    if (ze === "toggle-output-preview-size") {
      Ve.preventDefault(), Ve.stopPropagation();
      const Ye = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ye, S(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ye ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), qe(), N();
      return;
    }
    const He = Ve.target.closest("[data-paint-history-index]");
    if (!He) return;
    const Ue = Number(He.getAttribute("data-paint-history-index")), tt = t.customPaintHistory[Ue];
    tt && (t.customPaintColor = On(tt), t.paintColor = On(tt), x());
  }
  function M(Ve) {
    const Z = Ve.target.closest("[data-video-seek]");
    if (Z) {
      if (!(g instanceof HTMLVideoElement)) return;
      O.playing && (Pe.resumeAfterScrub = !0), O.seek(ui(Number(Z.value || 0), q()));
      return;
    }
    const Oe = Ve.target.closest("[data-video-volume]");
    if (Oe) {
      if (!(g instanceof HTMLVideoElement)) return;
      const ze = Ie(Number(Oe.value || 0), 0, 1);
      g.volume = ze, g.muted = ze <= 1e-4, _({
        hasAudio: f.videoTransport.hasAudio,
        muted: g.muted,
        volume: ze
      });
      return;
    }
    const $e = Ve.target.closest("[data-paint-size-slider]");
    if ($e) {
      if ($e.disabled) return;
      const ze = Math.max(1, Math.min(120, Math.round(Number($e.value)))), He = J(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[He] = ze, x(), y();
      return;
    }
    const Ae = Ve.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const ze = { ...t.customPaintColor, a: Ie(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = On(ze), t.paintColor = On(ze), x();
    }
  }
  function k(Ve) {
    var Z;
    if (Ve.target.closest("[data-video-seek]")) {
      if (!(g instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub && O.play(), Pe.resumeAfterScrub = !1;
      return;
    }
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((Z = Ve.target) == null ? void 0 : Z.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Q();
  }
  function ie(Ve) {
    const Z = Ve.target.closest("[data-tip]");
    !Z || !l.contains(Z) || c.target !== Z && (c.target = Z, c.timer && clearTimeout(c.timer), c.timer = window.setTimeout(() => {
      c.target === Z && v(Z);
    }, 220));
  }
  function ye(Ve) {
    var $e, Ae;
    const Z = Ve.target.closest("[data-tip]");
    !Z || c.target !== Z || (Ve.relatedTarget instanceof Element ? (Ae = ($e = Ve.relatedTarget).closest) == null ? void 0 : Ae.call($e, "[data-tip]") : null) === Z || K();
  }
  function W(Ve, Z) {
    var Ue;
    if (!o) return;
    const Oe = o.getBoundingClientRect(), $e = Ie((Ve - Oe.left) / Math.max(1, Oe.width), 0, 1), Ae = 1 - Ie((Z - Oe.top) / Math.max(1, Oe.height), 0, 1), ze = su(t.customPaintColor), He = { ...au(ze.h, $e, Ae), a: Number(((Ue = t.customPaintColor) == null ? void 0 : Ue.a) ?? 1) };
    t.customPaintColor = On(He), t.paintColor = On(He), x();
  }
  function se(Ve) {
    var ze;
    if (!a) return;
    const Z = a.getBoundingClientRect(), Oe = Ie((Ve - Z.left) / Math.max(1, Z.width), 0, 1), $e = su(t.customPaintColor), Ae = { ...au(Oe, $e.s, $e.v), a: Number(((ze = t.customPaintColor) == null ? void 0 : ze.a) ?? 1) };
    t.customPaintColor = On(Ae), t.paintColor = On(Ae), x();
  }
  function Ne(Ve, Z) {
    const Oe = Ve.pointerId;
    Z(Ve);
    const $e = (ze) => {
      ze.pointerId === Oe && Z(ze);
    }, Ae = (ze) => {
      ze.pointerId === Oe && (window.removeEventListener("pointermove", $e), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", $e), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function we() {
    const Ve = !!t.fullscreen;
    ji(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ve ? je.fullscreen_close : je.fullscreen,
      label: Ve ? "Exit Fullscreen" : "Fullscreen",
      tip: Ve ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Me(Ve) {
    const Z = !!Ve;
    t.fullscreen !== Z && (t.fullscreen = Z, l.classList.toggle("pano-modal-fullscreen", Z), Z ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), m(), we(), _e(), N());
  }
  function De() {
    return document.fullscreenElement === n;
  }
  async function Le() {
    var Ve, Z;
    try {
      if (!document.fullscreenEnabled) {
        Me(!t.fullscreen);
        return;
      }
      De() ? await ((Z = document.exitFullscreen) == null ? void 0 : Z.call(document)) : await ((Ve = n.requestFullscreen) == null ? void 0 : Ve.call(n));
    } catch {
      Me(!t.fullscreen);
    }
  }
  function Ge() {
    document.fullscreenEnabled && Me(De());
  }
  function qe() {
    const Ve = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ve ? je.fullscreen_close : je.fullscreen, f.outputPreviewToggle.label = Ve ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ve ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ve) {
      ({
        addCutoutFrame: w,
        addImageSticker: h,
        addStudioCamera: p,
        addWorldImageSticker: D,
        applyCutoutAspectCustom: X,
        bringSelectedToFront: z,
        clearAll: Y,
        clearPaintingLayer: C,
        clearSelection: re,
        commitAndRefreshNode: L,
        contentSphere: ne,
        deleteSelected: U,
        duplicateSelected: de,
        forceCursorTool: V,
        frameSpaceContent: ae,
        getActiveCutoutShot: H,
        getBrushPresetIdForTool: J,
        getSelected: $,
        hidePaintSizePreview: Q,
        hideTooltip: K,
        isErpCamera: E,
        isFreeSpaceView: G,
        playback: O,
        playbackFps: q,
        pushHistory: me,
        queueVideoTransportLayout: _e,
        replaceSelectedImage: te,
        requestDraw: N,
        restoreHistory: oe,
        restoreSelectedToInitialPose: ue,
        rotateCutoutAspect90: be,
        sendSelectedToBack: ve,
        setShotAspect: A,
        setSpaceMode: ce,
        showPaintSizePreview: y,
        showTooltipFor: v,
        spaceOrigin: F,
        startAnimation: S,
        syncFloatingViewButtonState: j,
        syncPaintUi: x,
        syncSidePanelControls: R,
        syncVideoTransportState: _,
        syncViewToggleState: P,
        togglePlayback: I,
        toggleSelectedExternalStickerVisibility: B,
        toggleSelectedLock: le,
        toggleVideoMuted: he,
        transitionView: ee,
        updateSelectionMenu: pe,
        updateSidePanel: Se,
        videoState: Pe
      } = Ve);
    },
    closePaintColorPop: ge,
    syncGridToggleButton: m,
    onRootClick: T,
    onRootInput: M,
    onRootChange: k,
    onRootPointerOver: ie,
    onRootPointerOut: ye,
    updatePaintColorFromSv: W,
    updatePaintColorFromHue: se,
    bindDrag: Ne,
    syncFullscreenButton: we,
    setFullscreenState: Me,
    onFullscreenChange: Ge,
    syncOutputPreviewToggleButton: qe
  };
}
function s2(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: a
  } = e;
  let s, l, u, d, c, f, g, w, h, p, D, X;
  function z(V) {
    var ae, H, J, $, Q;
    if (V.key === "Escape") {
      if (s()) {
        V.preventDefault(), V.stopPropagation(), (ae = V.stopImmediatePropagation) == null || ae.call(V);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        V.preventDefault(), V.stopPropagation(), (H = V.stopImmediatePropagation) == null || H.call(V), (J = document.exitFullscreen) == null || J.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        V.preventDefault(), V.stopPropagation(), ($ = V.stopImmediatePropagation) == null || $.call(V), h(!1);
        return;
      }
      V.preventDefault(), V.stopPropagation(), (Q = V.stopImmediatePropagation) == null || Q.call(V), l();
    }
  }
  function Y(V) {
    const ae = String(V.key || ""), H = String(V.code || ""), J = Number(V.keyCode || 0);
    if (!(ae === "Delete" || H === "Delete" || J === 46) && !(ae === "Backspace" || H === "Backspace" || J === 8)) return;
    const K = V.target, E = ((K == null ? void 0 : K.tagName) || "").toUpperCase();
    if (E === "INPUT" || E === "TEXTAREA" || K != null && K.isContentEditable) return;
    if (o.selection) {
      d(), V.preventDefault(), V.stopPropagation();
      return;
    }
    if (c()) {
      V.preventDefault(), V.stopPropagation();
      return;
    }
    g() && (u(), V.preventDefault(), V.stopPropagation());
  }
  function C(V) {
    if (V.code !== "Space" || V.ctrlKey || V.metaKey || V.altKey || n || !i || !a.timeline.visible || a.confirmDialog.visible) return !1;
    const ae = V.composedPath()[0];
    if (ae !== document.body && ae !== document.documentElement && !r.contains(ae)) return !1;
    const H = ((ae == null ? void 0 : ae.tagName) || "").toUpperCase();
    return H === "INPUT" ? !hP.has(String(ae.type || "text").toLowerCase()) : H !== "TEXTAREA" && H !== "SELECT" && !(ae != null && ae.isContentEditable);
  }
  function re(V) {
    C(V) && (V.preventDefault(), V.stopPropagation(), V.repeat || D());
  }
  function L(V) {
    C(V) && (V.preventDefault(), V.stopPropagation());
  }
  function ne(V) {
    const ae = !!(V.ctrlKey || V.metaKey), H = !!V.altKey;
    t.marqueeModifier === ae && t.altModifier === H || (t.marqueeModifier = ae, t.altModifier = H, p(), X(t.pointerPos));
  }
  function U() {
    t.marqueeModifier = !1, t.altModifier = !1, p(), X(t.pointerPos);
  }
  function de(V) {
    if (n || !V.ctrlKey && !V.metaKey) return;
    const ae = String(V.key || "").toLowerCase(), H = String(V.code || "");
    if (ae !== "z" && H !== "KeyZ") return;
    const J = V.target, $ = ((J == null ? void 0 : J.tagName) || "").toUpperCase();
    if ($ === "INPUT" || $ === "TEXTAREA" || J != null && J.isContentEditable) return;
    const { canUndo: Q, canRedo: K } = f();
    V.shiftKey && !K || !V.shiftKey && !Q || (w(V.shiftKey ? 1 : -1), V.preventDefault(), V.stopPropagation());
  }
  return {
    connect(V) {
      ({
        cancelFrameCameraGesture: s,
        closeEditor: l,
        deleteSelected: u,
        deleteSelectedKeyframes: d,
        deleteSelectedWorldSticker: c,
        getHistoryCapabilities: f,
        getSelected: g,
        restoreHistory: w,
        setFullscreenState: h,
        syncFrameRollKnob: p,
        togglePlayback: D,
        updateCursor: X
      } = V);
    },
    onEscClose: z,
    onDeleteKey: Y,
    onSpaceKey: re,
    onSpaceKeyUp: L,
    onModifierKeyChange: ne,
    onWindowBlur: U,
    onUndoRedoKey: de
  };
}
const sp = /* @__PURE__ */ new Map(), Qr = Om({
  app: Jn,
  api: fn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: iu,
    markImageFailed: Mg,
    markImageLoading: xg,
    markImageReady: kg
  }
});
function lp(e) {
  if (!Yt(e, "background") || !Yt(e, "external-sticker")) return null;
  const t = Qr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? uo(t[0]) : null;
}
const l2 = Qr.assetSource, c2 = Qr.source, u2 = Qr.uiImage, d2 = Qr.invalidateUiImage, cp = Qr.loadPreferredExactLinkedImage;
async function f2(e, t, r = {}) {
  var an, nn;
  await ag(e, { tolerateOperationFailure: !0 }), Qr.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = TP(e, t);
  await fd();
  const s = Ja(e, "output_preset"), l = Ja(e, "coverage"), u = Ja(e, "bg_color"), d = Ja(e, pP), c = () => {
    const Te = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return cp(
      e,
      Te,
      () => Ce(),
      `background:size:${Te.join("|")}`
    );
  }, f = () => {
    const Te = c();
    return RP(Te);
  }, g = (Te = 2048) => {
    const Be = s == null ? void 0 : s.value;
    return LP(Be) ? f() || Math.max(1, Math.round(Number(Te || 2048))) : DP(Be, Te);
  }, w = e.__panoSceneStateV2 === !0, h = t === "stickers" && w, p = h && e.__panoStudio === !0, D = p, X = t === "cutout" || p, z = (w ? Xh : qh)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((u == null ? void 0 : u.value) || "#00ff00"),
    coverage: In(l == null ? void 0 : l.value),
    sharedUiSettings: VP(),
    active: Qh(e),
    fps: w ? lp(e) : null
  });
  e.__panoLiveStateOverride = z, e.__panoLiveStateVersion = 0;
  let Y = null;
  D ? (Y = z.camera && z.camera.visible !== !1 ? Zh(z.camera, 0) : null, z.shots = Y ? [{ ...Y, position: [...Y.position] }] : [], z.active.selected_shot_id = null) : t === "cutout" && (z.shots = Array.isArray(z.shots) ? z.shots.slice(0, 1) : [], z.shots.length || (z.active.selected_shot_id = null));
  const C = t === "cutout" ? (() => {
    var Jt;
    const Te = Array.isArray(z.shots) ? z.shots : [], Be = String(((Jt = z == null ? void 0 : z.active) == null ? void 0 : Jt.selected_shot_id) || "");
    return Te.find((Zt) => String((Zt == null ? void 0 : Zt.id) || "") === Be) || Te[0] || null;
  })() : null, re = C ? Vg(C, !1) : { width: 220, height: 132 }, L = wg(p ? "studio" : t), ne = /* @__PURE__ */ ao({
    stageStatus: qn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (L.viewButtons || []).map((Te) => ({ ...Te, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (an = L.spaceButtons) != null && an.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: L.spaceButtons, frame: L.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (L.toolButtons || []).map((Te) => ({
      ...Te,
      disabled: !1,
      ...Te.key === "add-world" ? { visible: h } : {}
    })),
    floatingButtons: [
      ...(L.floatingButtons || []).map((Te) => ({ ...Te, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: je.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: je.aspect,
      rotateIcon: je.rotate_90,
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
      icon: je.fullscreen,
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
      customColorCss: cr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: cr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (Te, Be) => ({ index: Be, color: null })),
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
      width: re.width,
      height: re.height,
      label: C ? "Loading preview" : "Add Frame to preview"
    }
  }), U = { frame: /* @__PURE__ */ _s(0), playing: /* @__PURE__ */ _s(!1) }, de = document.createElement("div");
  document.body.appendChild(de);
  const V = ({ intent: Te, file: Be } = {}) => {
    if (Xn(Be)) {
      if (Te === "add") {
        De(Be);
        return;
      }
      if (Te === "add-world") {
        Le(Be);
        return;
      }
      Te === "replace" && Pl(Be);
    }
  }, ae = ({ intent: Te } = {}) => {
  }, H = Nu(dP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: L,
    paintSwatches: wl.map((Te) => ({
      id: Te.id,
      label: Te.label,
      cssColor: cr(Te.color, 1)
    })),
    uiState: ne,
    playhead: U,
    onClose: () => {
      on();
    },
    onTimeline: (Te) => Wr(Te),
    onImageFileSelected: V,
    onImageFileCancelled: ae
  });
  let J = null;
  try {
    J = H.mount(de);
  } catch (Te) {
    try {
      H.unmount();
    } catch {
    }
    throw de.remove(), Te;
  }
  const $ = de.querySelector(".pano-modal-overlay"), Q = de.querySelector(".pano-modal"), K = Q == null ? void 0 : Q.querySelector("[data-stage-overlay]"), E = Q == null ? void 0 : Q.querySelector("[data-stage-background]"), G = Q == null ? void 0 : Q.querySelector(".pano-stage-wrap"), O = ((nn = J == null ? void 0 : J.getPaintOverlayRefs) == null ? void 0 : nn.call(J)) || {}, q = O.cursor || null, me = O.sizePreview || null, _e = O.sizeSample || null;
  if (!$ || !Q || !K || !E || !G || !q || !me || !_e)
    throw H.unmount(), de.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const te = K.getContext("2d"), N = Q.querySelector("[data-side]"), oe = Q.querySelector("[data-video-element]"), ue = Q.querySelector("[data-port-video-element]");
  $l(K, "editor.stage-overlay"), $l(E, "editor.stage-background"), nf(oe, "editor.video"), nf(ue, "editor.port-video");
  const be = Q.querySelector(".pano-floating-right"), ve = Q.querySelector(".pano-floating-top"), A = Q.querySelector("[data-tool-rail]"), ce = Q.querySelector("[data-frame-rail]"), y = Q.querySelector("[data-frame-roll-knob]"), v = Q.querySelector("[data-paint-dock]"), F = Q.querySelector(".pano-video-transport"), S = Q.querySelector("[data-selection-menu]"), j = Q.querySelector("[data-tooltip]"), x = Q.querySelector("[data-camera-preview-host]"), R = Q.querySelector("[data-camera-preview-canvas]");
  $l(R, "editor.camera-preview");
  const _ = Q.querySelector("[data-paint-color-row]"), P = Q.querySelector("[data-paint-color-pop]"), I = Q.querySelector("[data-paint-color-sv]"), B = Q.querySelector("[data-paint-color-sv-cursor]"), le = Q.querySelector("[data-paint-hue-strip]"), he = Q.querySelector("[data-paint-hue-handle]");
  G == null || G.removeAttribute("data-stage-ready"), G == null || G.setAttribute("data-stage-loading-kind", "boot"), K.style.opacity = "1", E.style.opacity = "0", i && (N == null || N.remove(), Q.classList.add("pano-modal-readonly")), Q.addEventListener("pointerdown", () => k.wake(), !0), Q.addEventListener("pointerdown", (Te) => {
    var Be;
    Te.target.closest("[data-frame-roll-knob]") || rn(), !Te.target.closest(".pano-picker") && (Te.target.closest("[data-paint-color-row]") || (Q.querySelectorAll(".pano-picker-pop").forEach((Jt) => {
      Jt.hidden = !0;
    }), Oe(!0), X && pe.cutoutAspectOpen && !Te.target.closest(".pano-aspect-popover") && !Te.target.closest("[data-action='aspect']") && (pe.cutoutAspectOpen = !1, pe.menuMode = "", pe.menuSize.measured = !1, Fa(), Ce()), (Be = ne.frameRail) != null && Be.aspectOpen && !Te.target.closest(".pano-frame-aspect-control") && (ne.frameRail.aspectOpen = !1)));
  });
  const pe = {
    mode: "pano",
    selectedId: Rg(t, z),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Qn,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: In(z.coverage),
    historyController: nN(z),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Nr,
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
    showGrid: zP(e == null ? void 0 : e.id, !0),
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
    paintEngine: fl(),
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
  }, Se = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (pe.selectedId = null, z.active.selected_sticker_id = null), pe.selectedIds = pe.selectedId ? [pe.selectedId] : [];
  const Pe = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), m = en({ label: "editor.still" });
  m.__panoFrameIdx = 0;
  const T = en({ label: "editor.port-still" });
  T.__panoFrameIdx = 0;
  const M = {
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
  }, k = dx({
    requestAnimationFrame: (Te) => requestAnimationFrame(Te),
    cancelAnimationFrame: (Te) => cancelAnimationFrame(Te),
    draw: (Te, Be) => Ci(Te, Be),
    animating: () => He()
  }), ie = cx({
    requestFrame: (Te) => k.requestFrame(Te),
    cancelFrame: (Te) => k.cancelFrame(Te),
    tasks: {
      seek: () => kl.seek(Se.scrubFrame),
      timeline: () => Sr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        rt(), Ce({ localOnly: !0, reason: dt.STATE });
      },
      sidePanel: () => wo()
    }
  }), ye = Z1({
    canvas: E,
    onReady: () => {
      Ze(), Ce({ reason: dt.CONTEXT });
    },
    onFailed: () => Ce(),
    onUpdate: () => Ce({ localOnly: !0, reason: dt.MEDIA }),
    onSplats: (Te) => Ce({ localOnly: !0, reason: MN(Te) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      ht(), Ze(), Ce({ reason: dt.CONTEXT });
    }
  }), W = Number.parseFloat(
    getComputedStyle(Q).getPropertyValue("--pano-float-radius")
  ) || 10, se = (Te) => {
    const Be = String(Te || "default");
    K.style.cursor !== Be && (K.style.cursor = Be);
  }, Ne = {
    timer: 0,
    target: null
  }, we = {
    active: !1,
    depth: 0
  }, Me = Ou({
    getView: () => ({ yaw: pe.viewYaw, pitch: pe.viewPitch, fov: pe.viewFov }),
    setView: (Te) => {
      pe.viewYaw = $t(Number(Te.yaw || 0)), pe.viewPitch = Ie(Number(Te.pitch || 0), -89.9, 89.9), pe.viewFov = Ie(Number(Te.fov || pe.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Te = K.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Te.width || K.clientWidth || 0)),
        h: Math.max(1, Number(Te.height || K.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Te, Be;
      return {
        x: (Te = z.ui_settings) != null && Te.invert_view_x ? -1 : 1,
        y: (Be = z.ui_settings) != null && Be.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Nt(),
    onInteraction: () => k.requestDraw(dt.VIEW)
  }), {
    addImageStickerFromFile: De,
    addWorldStickerFromFile: Le,
    applyInitialCutoutFocus: Ge,
    applyVideoTimelineFps: qe,
    bindDrag: Ve,
    cancelFrameCameraGesture: Z,
    closePaintColorPop: Oe,
    commitState: $e,
    disposeMediaSession: Ae,
    disposeUpstream: ze,
    editorAnimating: He,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: tt,
    forgetCameraPreviewFrame: ht,
    getUnwrapRect: Nt,
    hidePaintSizePreview: vt,
    hideTooltip: rn,
    hoverWorldGizmo: Kn,
    isFreeFrameView: Ye,
    isFreeSpaceView: zt,
    migrateLegacyEmbeddedAssets: gn,
    onCanvasDragOver: br,
    onCanvasDrop: jr,
    onCanvasMouseMove: tn,
    onCanvasPointerCancel: wn,
    onCanvasPointerDown: Hr,
    onCanvasPointerMove: vr,
    onCanvasPointerUp: Bn,
    onCanvasWheel: va,
    onDeleteKey: Pi,
    onEscClose: ho,
    onFrameRollKnobDoubleClick: _a,
    onFrameRollKnobPointerDown: Sa,
    onFrameRollKnobPointerMove: wa,
    onFullscreenChange: mo,
    onModifierKeyChange: Gr,
    onRootChange: Ft,
    onRootClick: Un,
    onRootInput: nr,
    onRootPointerOut: go,
    onRootPointerOver: En,
    onSidePanelChange: xa,
    onSidePanelClick: ka,
    onSidePanelInput: Ma,
    onSpaceKey: _r,
    onSpaceKeyUp: Pa,
    onTimelineAction: Wr,
    onUndoRedoKey: Na,
    onWindowBlur: yo,
    onWindowDragEnter: Ca,
    onWindowDragLeave: bo,
    onWindowDragOver: vo,
    onWindowDrop: Aa,
    playback: kl,
    pushHistory: Ml,
    reconcileExternalStickerFromInputs: Ia,
    refreshModalVideoSource: _o,
    replaceSelectedImageFromFile: Pl,
    requestDraw: Ce,
    sampleEditorDiagnostics: Ee,
    setDropCue: xe,
    setPointerPos: _t,
    stageResizeObserver: lt,
    stickerCornerOrderSanity: St,
    stopRenderLoop: Je,
    syncCanvasSize: Ze,
    syncCutoutShot: rt,
    syncFullscreenButton: Yn,
    syncGridToggleButton: Xe,
    syncLookAtFrameButtonState: We,
    syncOutputPreviewToggleButton: Qe,
    syncPaintUi: Ut,
    syncPaintingLayerAsync: Mt,
    syncTimeline: Sr,
    syncUndoRedoButtons: Ni,
    tick: Ci,
    triggerBackgroundPersistenceOnClose: Ai,
    updateCursor: So,
    updatePaintColorFromHue: Ea,
    updatePaintColorFromSv: Oa,
    updateSelectionMenu: Fa,
    updateSidePanel: wo,
    viewControls: Ta,
    watchPixelRatio: ct
  } = HP({
    api: fn,
    app: Jn,
    backgroundCanvas: E,
    bgWidget: u,
    cameraV2: D,
    canvas: K,
    closeEditor: on,
    comfyMedia: Qr,
    coverageWidget: l,
    ctx: te,
    cutoutPreviewCanvas: R,
    cutoutPreviewHost: x,
    dragCue: we,
    dragFrames: ie,
    editor: pe,
    editorView: ye,
    floatingRightEl: be,
    floatingTopEl: ve,
    frameGateCssRadius: W,
    frameRailEl: ce,
    frameRollKnobEl: y,
    hideSidebar: i,
    imageCache: Pe,
    initialShotBase: Y,
    loadPreferredExactLinkedImage: cp,
    mediaAssetSource: l2,
    mediaSource: c2,
    mediaUiImage: u2,
    node: e,
    overlay: $,
    paintColorPop: P,
    paintColorRow: _,
    paintColorSv: I,
    paintColorSvCursor: B,
    paintCursorEl: q,
    paintDockEl: v,
    paintHueHandle: he,
    paintHueStrip: le,
    paintSizePreviewEl: me,
    paintSizePreviewSampleEl: _e,
    portStillCanvas: T,
    portVideoEl: ue,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: b,
    rasterImageAlphaCache: ge,
    rasterImageCache: fe,
    readOnly: n,
    resolveEditorOutputPresetWidth: g,
    root: Q,
    runtime: M,
    sceneV2: h,
    scheduler: k,
    selectionMenu: S,
    setCanvasCursor: se,
    shotEditor: X,
    stageWrap: G,
    state: z,
    stateV2: w,
    stateWidget: d,
    stillCanvas: m,
    studio: p,
    timeline: Se,
    timelinePlayhead: U,
    toolRailEl: A,
    tooltip: Ne,
    tooltipEl: j,
    type: t,
    uiState: ne,
    videoEl: oe,
    videoTimelineFps: lp,
    videoTransportEl: F,
    viewController: Me,
    vueModal: J
  }, [
    QP,
    rN,
    iN,
    oN,
    aN,
    sN,
    lN,
    cN,
    uN,
    wN,
    xN,
    kN,
    NN,
    CN,
    AN,
    UN,
    YN,
    qN,
    XN,
    JN,
    ZN,
    QN,
    e2,
    t2,
    n2,
    r2,
    i2,
    o2,
    a2,
    s2
  ]);
  St(), lt.observe(K), ct();
  const ft = () => $e();
  n || (e.__panoFlushStateBeforeQueue = ft), y == null || y.addEventListener("pointerdown", Sa), y == null || y.addEventListener("pointermove", wa), y == null || y.addEventListener("pointerup", Ue), y == null || y.addEventListener("pointercancel", () => Z()), y == null || y.addEventListener("lostpointercapture", () => {
    var Te;
    ((Te = pe.interaction) == null ? void 0 : Te.source) === "knob" && Z();
  }), y == null || y.addEventListener("dblclick", _a), K.onpointerdown = Hr, K.onpointermove = vr, K.onpointerup = Bn, K.onpointercancel = wn, K.onlostpointercapture = () => {
    Z();
  }, K.onauxclick = (Te) => {
    Te.button === 1 && Te.preventDefault();
  }, K.oncontextmenu = (Te) => {
    (zt() || Ye()) && DS(Ta(), 2) && Te.preventDefault();
  }, K.onmousemove = tn, K.onpointerleave = () => {
    pe.interaction || Kn({ x: -1e6, y: -1e6 });
  }, K.onmouseleave = () => {
    _t(pe.pointerPos, !1), So(pe.pointerPos), pe.mode === "frame" && pe.primaryTool === "cursor" && Ce({ localOnly: !0, reason: dt.OVERLAY });
  }, K.onwheel = va, K.ondragover = br, K.ondrop = jr, window.addEventListener("dragenter", Ca, !0), window.addEventListener("dragover", vo, !0), window.addEventListener("dragleave", bo, !0), window.addEventListener("drop", Aa, !0), N == null || N.addEventListener("click", ka), N == null || N.addEventListener("input", Ma), N == null || N.addEventListener("change", xa), Xe(), Q.addEventListener("click", Un), Q.addEventListener("input", nr), Q.addEventListener("change", Ft), Q.addEventListener("pointerup", (Te) => {
    var Be;
    if (Te.target.closest("[data-video-volume]")) {
      typeof ((Be = Te.target) == null ? void 0 : Be.blur) == "function" && Te.target.blur();
      return;
    }
    Te.target.closest("[data-paint-size-slider]") && vt();
  }), Q.addEventListener("pointercancel", (Te) => {
    var Be;
    if (Te.target.closest("[data-video-volume]")) {
      typeof ((Be = Te.target) == null ? void 0 : Be.blur) == "function" && Te.target.blur();
      return;
    }
    Te.target.closest("[data-paint-size-slider]") && vt();
  }), Q.addEventListener("focusout", (Te) => {
    Te.target.closest("[data-paint-size-slider]") && vt();
  }), Q.addEventListener("pointerover", En), Q.addEventListener("pointerout", go), Q.addEventListener("pointerdown", (Te) => {
    Te.target.closest("[data-frame-roll-knob]") || rn();
  }), I && (I.onpointerdown = (Te) => {
    Te.preventDefault(), Te.stopPropagation(), Ve(Te, (Be) => Oa(Be.clientX, Be.clientY));
  }), le && (le.onpointerdown = (Te) => {
    Te.preventDefault(), Te.stopPropagation(), Ve(Te, (Be) => Ea(Be.clientX));
  }), Q.addEventListener("click", (Te) => {
    var rr;
    const Be = Te.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!Be) return;
    const Jt = Be.getAttribute("data-action") === "confirm-accept", Zt = (rr = ne.confirmDialog) == null ? void 0 : rr.resolve;
    ne.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Zt == null || Zt(Jt);
  }), document.addEventListener("fullscreenchange", mo), Yn(), Qe();
  const mt = e.onConnectionsChange;
  let yt = null, yn = () => {
  };
  !n && t === "stickers" && (yn = ig(e, (Te = "sync") => {
    Te === "executed" && (d2(Pe, io), _o(), h && qe()), Ia(Te);
  }, { editor: !0 }), yt = function(...Be) {
    typeof mt == "function" && mt.apply(this, Be), _o(), Tr(this, "connections");
  }, e.onConnectionsChange = yt), n || sp.set(String(e.id ?? "0"), () => Mt());
  let Dt = null;
  async function on() {
    return Dt || (Dt = (async () => {
      var Te, Be, Jt, Zt, rr, Ii, Ei, _d;
      return sp.delete(String(e.id ?? "0")), tt(), n || $e(), document.fullscreenElement === $ && ((Te = document.exitFullscreen) == null || Te.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", mo), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === ft && (e.__panoFlushStateBeforeQueue = null), (Jt = (Be = e.__panoDomPreview) == null ? void 0 : Be.requestDraw) == null || Jt.call(Be), (rr = (Zt = e.graph) == null ? void 0 : Zt.setDirtyCanvas) == null || rr.call(Zt, !0, !0), (_d = (Ei = (Ii = Jn) == null ? void 0 : Ii.canvas) == null ? void 0 : Ei.setDirty) == null || _d.call(Ei, !0, !0), rn(), ie.cancel(), Je(), Ae(), ze(), ye.dispose(), xe(!1), window.removeEventListener("keydown", ho, !0), window.removeEventListener("keydown", Pi, !0), window.removeEventListener("keydown", _r, !0), window.removeEventListener("keyup", Pa, !0), window.removeEventListener("keydown", Gr, !0), window.removeEventListener("keyup", Gr, !0), window.removeEventListener("blur", yo), window.removeEventListener("keydown", Na, !0), window.removeEventListener("dragenter", Ca, !0), window.removeEventListener("dragover", vo, !0), window.removeEventListener("dragleave", bo, !0), window.removeEventListener("drop", Aa, !0), !n && t === "stickers" && (e.onConnectionsChange === yt && (e.onConnectionsChange = mt), yn()), H.unmount(), de.remove(), Ai(), Dt = null, !0;
    })().catch((Te) => (console.error("[PanoramaCutoutSync] closeEditor failed", Te), Dt = null, !1)), Dt);
  }
  window.addEventListener("keydown", ho, !0), window.addEventListener("keydown", Pi, !0), window.addEventListener("keydown", _r, !0), window.addEventListener("keyup", Pa, !0), window.addEventListener("keydown", Gr, !0), window.addEventListener("keyup", Gr, !0), window.addEventListener("blur", yo), window.addEventListener("keydown", Na, !0), $.addEventListener("pointerdown", (Te) => {
    Te.target === $ && on();
  });
  function bt(Te, Be, { rollbackState: Jt = !1 } = {}) {
    let Zt = "";
    try {
      Jt && (Zt = JSON.stringify(z)), Be();
    } catch (rr) {
      if (Zt)
        try {
          const Ii = JSON.parse(Zt);
          Object.keys(z).forEach((Ei) => delete z[Ei]), Object.assign(z, Ii), n || $e();
        } catch (Ii) {
          console.error(`[PanoramaStickers] editor boot step "${Te}" rollback failed`, Ii);
        }
      ne.stageWarningDetail = `boot:${Te}`, console.error(`[PanoramaStickers] editor boot step "${Te}" failed`, rr);
    }
  }
  bt("cutout-focus", Ge), !n && t === "stickers" && bt("external-sticker-sync", () => Ia("open"), { rollbackState: !0 }), gn().catch((Te) => {
    ne.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Te);
  }), bt("history", Ml), bt("undo-redo", Ni), bt("paint-ui", Ut), bt("side-panel", wo), bt("look-at-frame", We), bt("video-source", _o), bt("canvas-size", Ze), bt("cursor", () => So(pe.pointerPos)), Ce(), Ee();
}
Jn.registerExtension(KS({
  app: Jn,
  openEditor: f2,
  attachStickers: sx,
  attachCutout: lx,
  attachPreview: ax,
  restoreOutput: Uw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: yP
}));
