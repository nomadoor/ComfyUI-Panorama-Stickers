import * as rs from "../../scripts/app.js";
import { app as Qn } from "../../scripts/app.js";
import { api as hn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function mu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ot = {}, Wi = [], gr = () => {
}, hp = () => !1, ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), al = (e) => e.startsWith("onUpdate:"), yn = Object.assign, gu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, qg = Object.prototype.hasOwnProperty, xt = (e, t) => qg.call(e, t), ot = Array.isArray, Ki = (e) => pa(e) === "[object Map]", mp = (e) => pa(e) === "[object Set]", Md = (e) => pa(e) === "[object Date]", lt = (e) => typeof e == "function", Jt = (e) => typeof e == "string", vr = (e) => typeof e == "symbol", It = (e) => e !== null && typeof e == "object", gp = (e) => (It(e) || lt(e)) && lt(e.then) && lt(e.catch), yp = Object.prototype.toString, pa = (e) => yp.call(e), Xg = (e) => pa(e).slice(8, -1), bp = (e) => pa(e) === "[object Object]", yu = (e) => Jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ mu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), sl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Jg = /-\w/g, wn = sl(
  (e) => e.replace(Jg, (t) => t.slice(1).toUpperCase())
), Zg = /\B([A-Z])/g, Mi = sl(
  (e) => e.replace(Zg, "-$1").toLowerCase()
), ll = sl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tl = sl(
  (e) => e ? `on${ll(e)}` : ""
), pr = (e, t) => !Object.is(e, t), is = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, vp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, bu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Pd;
const cl = () => Pd || (Pd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function At(e) {
  if (ot(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Jt(n) ? n0(n) : At(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Jt(e) || It(e))
    return e;
}
const Qg = /;(?![^(]*\))/g, e0 = /:([^]+)/, t0 = /\/\*[^]*?\*\//g;
function n0(e) {
  const t = {};
  return e.replace(t0, "").split(Qg).forEach((r) => {
    if (r) {
      const n = r.split(e0);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ht(e) {
  let t = "";
  if (Jt(e))
    t = e;
  else if (ot(e))
    for (let r = 0; r < e.length; r++) {
      const n = ht(e[r]);
      n && (t += n + " ");
    }
  else if (It(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const r0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", i0 = /* @__PURE__ */ mu(r0);
function _p(e) {
  return !!e || e === "";
}
function o0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = vu(e[n], t[n]);
  return r;
}
function vu(e, t) {
  if (e === t) return !0;
  let r = Md(e), n = Md(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = vr(e), n = vr(t), r || n)
    return e === t;
  if (r = ot(e), n = ot(t), r || n)
    return r && n ? o0(e, t) : !1;
  if (r = It(e), n = It(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !vu(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Sp = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Jt(e) ? e : e == null ? "" : ot(e) || It(e) && (e.toString === yp || !lt(e.toString)) ? Sp(e) ? rt(e.value) : JSON.stringify(e, wp, 2) : String(e), wp = (e, t) => Sp(t) ? wp(e, t.value) : Ki(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Dl(n, o) + " =>"] = i, r),
    {}
  )
} : mp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Dl(r))
} : vr(t) ? Dl(t) : It(t) && !ot(t) && !bp(t) ? String(t) : t, Dl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let An;
class a0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = An, !t && An && (this.index = (An.scopes || (An.scopes = [])).push(
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
      const r = An;
      try {
        return An = this, t();
      } finally {
        An = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = An, An = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (An = this.prevScope, this.prevScope = void 0);
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
function s0() {
  return An;
}
let Tt;
const Ll = /* @__PURE__ */ new WeakSet();
class xp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, An && An.active && An.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ll.has(this) && (Ll.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Nd(this), Pp(this);
    const t = Tt, r = er;
    Tt = this, er = !0;
    try {
      return this.fn();
    } finally {
      Np(this), Tt = t, er = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        wu(t);
      this.deps = this.depsTail = void 0, Nd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ll.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _c(this) && this.run();
  }
  get dirty() {
    return _c(this);
  }
}
let kp = 0, zo, jo;
function Mp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = jo, jo = e;
    return;
  }
  e.next = zo, zo = e;
}
function _u() {
  kp++;
}
function Su() {
  if (--kp > 0)
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
function Pp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Np(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), wu(n), l0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function _c(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qo) || (e.globalVersion = qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_c(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Tt, n = er;
  Tt = e, er = !0;
  try {
    Pp(e);
    const i = e.fn(e._value);
    (t.version === 0 || pr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Tt = r, er = n, Np(e), e.flags &= -3;
  }
}
function wu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      wu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function l0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let er = !0;
const Ap = [];
function $r() {
  Ap.push(er), er = !1;
}
function zr() {
  const e = Ap.pop();
  er = e === void 0 ? !0 : e;
}
function Nd(e) {
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
class c0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Tt || !er || Tt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Tt)
      r = this.activeLink = new c0(Tt, this), Tt.deps ? (r.prevDep = Tt.depsTail, Tt.depsTail.nextDep = r, Tt.depsTail = r) : Tt.deps = Tt.depsTail = r, Ip(r);
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
    _u();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Su();
    }
  }
}
function Ip(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ip(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Sc = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ Symbol(
  ""
), wc = /* @__PURE__ */ Symbol(
  ""
), Xo = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, r) {
  if (er && Tt) {
    let n = Sc.get(e);
    n || Sc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new xu()), i.map = n, i.key = r), i.track();
  }
}
function Er(e, t, r, n, i, o) {
  const a = Sc.get(e);
  if (!a) {
    qo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (_u(), t === "clear")
    a.forEach(s);
  else {
    const l = ot(e), c = l && yu(r);
    if (l && r === "length") {
      const d = Number(n);
      a.forEach((u, f) => {
        (f === "length" || f === Xo || !vr(f) && f >= d) && s(u);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), c && s(a.get(Xo)), t) {
        case "add":
          l ? c && s(a.get("length")) : (s(a.get(mi)), Ki(e) && s(a.get(wc)));
          break;
        case "delete":
          l || (s(a.get(mi)), Ki(e) && s(a.get(wc)));
          break;
        case "set":
          Ki(e) && s(a.get(mi));
          break;
      }
  }
  Su();
}
function Oi(e) {
  const t = /* @__PURE__ */ wt(e);
  return t === e ? t : (fn(t, "iterate", Xo), /* @__PURE__ */ Un(e) ? t : t.map(or));
}
function ul(e) {
  return fn(e = /* @__PURE__ */ wt(e), "iterate", Xo), e;
}
function ur(e, t) {
  return /* @__PURE__ */ jr(e) ? Qi(/* @__PURE__ */ gi(e) ? or(t) : t) : or(t);
}
const u0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rl(this, Symbol.iterator, (e) => ur(this, e));
  },
  concat(...e) {
    return Oi(this).concat(
      ...e.map((t) => ot(t) ? Oi(t) : t)
    );
  },
  entries() {
    return Rl(this, "entries", (e) => (e[1] = ur(this, e[1]), e));
  },
  every(e, t) {
    return Mr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Mr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => ur(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Mr(
      this,
      "find",
      e,
      t,
      (r) => ur(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Mr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Mr(
      this,
      "findLast",
      e,
      t,
      (r) => ur(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Mr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Mr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Vl(this, "includes", e);
  },
  indexOf(...e) {
    return Vl(this, "indexOf", e);
  },
  join(e) {
    return Oi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Vl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Mr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wo(this, "pop");
  },
  push(...e) {
    return wo(this, "push", e);
  },
  reduce(e, ...t) {
    return Cd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cd(this, "reduceRight", e, t);
  },
  shift() {
    return wo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Mr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wo(this, "splice", e);
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
    return wo(this, "unshift", e);
  },
  values() {
    return Rl(this, "values", (e) => ur(this, e));
  }
};
function Rl(e, t, r) {
  const n = ul(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Un(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const d0 = Array.prototype;
function Mr(e, t, r, n, i, o) {
  const a = ul(e), s = a !== e && !/* @__PURE__ */ Un(e), l = a[t];
  if (l !== d0[t]) {
    const u = l.apply(e, o);
    return s ? or(u) : u;
  }
  let c = r;
  a !== e && (s ? c = function(u, f) {
    return r.call(this, ur(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(a, c, n);
  return s && i ? i(d) : d;
}
function Cd(e, t, r, n) {
  const i = ul(e), o = i !== e && !/* @__PURE__ */ Un(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(c, d, u) {
    return s && (s = !1, c = ur(e, c)), r.call(this, c, ur(e, d), u, e);
  }) : r.length > 3 && (a = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](a, ...n);
  return s ? ur(e, l) : l;
}
function Vl(e, t, r) {
  const n = /* @__PURE__ */ wt(e);
  fn(n, "iterate", Xo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Pu(r[0]) ? (r[0] = /* @__PURE__ */ wt(r[0]), n[t](...r)) : i;
}
function wo(e, t, r = []) {
  $r(), _u();
  const n = (/* @__PURE__ */ wt(e))[t].apply(e, r);
  return Su(), zr(), n;
}
const f0 = /* @__PURE__ */ mu("__proto__,__v_isRef,__isVue"), Ep = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vr)
);
function p0(e) {
  vr(e) || (e = String(e));
  const t = /* @__PURE__ */ wt(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class Op {
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
      return n === (i ? o ? x0 : Lp : o ? Dp : Tp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = ot(t);
    if (!i) {
      let l;
      if (a && (l = u0[r]))
        return l;
      if (r === "hasOwnProperty")
        return p0;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : n
    );
    if ((vr(r) ? Ep.has(r) : f0(r)) || (i || fn(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ gn(s)) {
      const l = a && yu(r) ? s : s.value;
      return i && It(l) ? /* @__PURE__ */ kc(l) : l;
    }
    return It(s) ? i ? /* @__PURE__ */ kc(s) : /* @__PURE__ */ ao(s) : s;
  }
}
class Fp extends Op {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = ot(t) && yu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ jr(o);
      if (!/* @__PURE__ */ Un(n) && !/* @__PURE__ */ jr(n) && (o = /* @__PURE__ */ wt(o), n = /* @__PURE__ */ wt(n)), !a && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(n))
        return c || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : xt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ gn(t) ? t : i
    );
    return t === /* @__PURE__ */ wt(i) && (s ? pr(n, o) && Er(t, "set", r, n) : Er(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = xt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Er(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!vr(r) || !Ep.has(r)) && fn(t, "has", r), n;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      ot(t) ? "length" : mi
    ), Reflect.ownKeys(t);
  }
}
class h0 extends Op {
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
const m0 = /* @__PURE__ */ new Fp(), g0 = /* @__PURE__ */ new h0(), y0 = /* @__PURE__ */ new Fp(!0);
const xc = (e) => e, $a = (e) => Reflect.getPrototypeOf(e);
function b0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ wt(i), a = Ki(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = i[e](...n), d = r ? xc : t ? Qi : or;
    return !t && fn(
      o,
      "iterate",
      l ? wc : mi
    ), yn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : {
            value: s ? [d(u[0]), d(u[1])] : d(u),
            done: f
          };
        }
      }
    );
  };
}
function za(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function v0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ wt(o), s = /* @__PURE__ */ wt(i);
      e || (pr(i, s) && fn(a, "get", i), fn(a, "get", s));
      const { has: l } = $a(a), c = t ? xc : e ? Qi : or;
      if (l.call(a, i))
        return c(o.get(i));
      if (l.call(a, s))
        return c(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && fn(/* @__PURE__ */ wt(i), "iterate", mi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ wt(o), s = /* @__PURE__ */ wt(i);
      return e || (pr(i, s) && fn(a, "has", i), fn(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ wt(s), c = t ? xc : e ? Qi : or;
      return !e && fn(l, "iterate", mi), s.forEach((d, u) => i.call(o, c(d), c(u), a));
    }
  };
  return yn(
    r,
    e ? {
      add: za("add"),
      set: za("set"),
      delete: za("delete"),
      clear: za("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ wt(this), a = $a(o), s = /* @__PURE__ */ wt(i), l = !t && !/* @__PURE__ */ Un(i) && !/* @__PURE__ */ jr(i) ? s : i;
        return a.has.call(o, l) || pr(i, l) && a.has.call(o, i) || pr(s, l) && a.has.call(o, s) || (o.add(l), Er(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Un(o) && !/* @__PURE__ */ jr(o) && (o = /* @__PURE__ */ wt(o));
        const a = /* @__PURE__ */ wt(this), { has: s, get: l } = $a(a);
        let c = s.call(a, i);
        c || (i = /* @__PURE__ */ wt(i), c = s.call(a, i));
        const d = l.call(a, i);
        return a.set(i, o), c ? pr(o, d) && Er(a, "set", i, o) : Er(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ wt(this), { has: a, get: s } = $a(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ wt(i), l = a.call(o, i)), s && s.call(o, i);
        const c = o.delete(i);
        return l && Er(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ wt(this), o = i.size !== 0, a = i.clear();
        return o && Er(
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
    r[i] = b0(i, e, t);
  }), r;
}
function ku(e, t) {
  const r = v0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    xt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const _0 = {
  get: /* @__PURE__ */ ku(!1, !1)
}, S0 = {
  get: /* @__PURE__ */ ku(!1, !0)
}, w0 = {
  get: /* @__PURE__ */ ku(!0, !1)
};
const Tp = /* @__PURE__ */ new WeakMap(), Dp = /* @__PURE__ */ new WeakMap(), Lp = /* @__PURE__ */ new WeakMap(), x0 = /* @__PURE__ */ new WeakMap();
function k0(e) {
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
function M0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : k0(Xg(e));
}
// @__NO_SIDE_EFFECTS__
function ao(e) {
  return /* @__PURE__ */ jr(e) ? e : Mu(
    e,
    !1,
    m0,
    _0,
    Tp
  );
}
// @__NO_SIDE_EFFECTS__
function P0(e) {
  return Mu(
    e,
    !1,
    y0,
    S0,
    Dp
  );
}
// @__NO_SIDE_EFFECTS__
function kc(e) {
  return Mu(
    e,
    !0,
    g0,
    w0,
    Lp
  );
}
function Mu(e, t, r, n, i) {
  if (!It(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = M0(e);
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
function gi(e) {
  return /* @__PURE__ */ jr(e) ? /* @__PURE__ */ gi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Un(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Pu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ wt(t) : e;
}
function N0(e) {
  return !xt(e, "__v_skip") && Object.isExtensible(e) && vp(e, "__v_skip", !0), e;
}
const or = (e) => It(e) ? /* @__PURE__ */ ao(e) : e, Qi = (e) => It(e) ? /* @__PURE__ */ kc(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return Rp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ms(e) {
  return Rp(e, !0);
}
function Rp(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new C0(e, t);
}
class C0 {
  constructor(t, r) {
    this.dep = new xu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ wt(t), this._value = r ? t : or(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Un(t) || /* @__PURE__ */ jr(t);
    t = n ? t : /* @__PURE__ */ wt(t), pr(t, r) && (this._rawValue = t, this._value = n ? t : or(t), this.dep.trigger());
  }
}
function tt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const A0 = {
  get: (e, t, r) => t === "__v_raw" ? e : tt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ gn(i) && !/* @__PURE__ */ gn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Vp(e) {
  return /* @__PURE__ */ gi(e) ? e : new Proxy(e, A0);
}
class I0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new xu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Tt !== this)
      return Mp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Cp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function E0(e, t, r = !1) {
  let n, i;
  return lt(e) ? n = e : (n = e.get, i = e.set), new I0(n, i, r);
}
const ja = {}, Ps = /* @__PURE__ */ new WeakMap();
let ui;
function O0(e, t = !1, r = ui) {
  if (r) {
    let n = Ps.get(r);
    n || Ps.set(r, n = []), n.push(e);
  }
}
function F0(e, t, r = Ot) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, c = (W) => i ? W : /* @__PURE__ */ Un(W) || i === !1 || i === 0 ? Or(W, 1) : Or(W);
  let d, u, f, g, _ = !1, m = !1;
  if (/* @__PURE__ */ gn(e) ? (u = () => e.value, _ = /* @__PURE__ */ Un(e)) : /* @__PURE__ */ gi(e) ? (u = () => c(e), _ = !0) : ot(e) ? (m = !0, _ = e.some((W) => /* @__PURE__ */ gi(W) || /* @__PURE__ */ Un(W)), u = () => e.map((W) => {
    if (/* @__PURE__ */ gn(W))
      return W.value;
    if (/* @__PURE__ */ gi(W))
      return c(W);
    if (lt(W))
      return l ? l(W, 2) : W();
  })) : lt(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      $r();
      try {
        f();
      } finally {
        zr();
      }
    }
    const W = ui;
    ui = d;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      ui = W;
    }
  } : u = gr, t && i) {
    const W = u, k = i === !0 ? 1 / 0 : i;
    u = () => Or(W(), k);
  }
  const p = s0(), E = () => {
    d.stop(), p && p.active && gu(p.effects, d);
  };
  if (o && t) {
    const W = t;
    t = (...k) => {
      W(...k), E();
    };
  }
  let U = m ? new Array(e.length).fill(ja) : ja;
  const z = (W) => {
    if (!(!(d.flags & 1) || !d.dirty && !W))
      if (t) {
        const k = d.run();
        if (i || _ || (m ? k.some((te, K) => pr(te, U[K])) : pr(k, U))) {
          f && f();
          const te = ui;
          ui = d;
          try {
            const K = [
              k,
              // pass undefined as the old value when it's changed for the first time
              U === ja ? void 0 : m && U[0] === ja ? [] : U,
              g
            ];
            U = k, l ? l(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            ui = te;
          }
        }
      } else
        d.run();
  };
  return s && s(z), d = new xp(u), d.scheduler = a ? () => a(z, !1) : z, g = (W) => O0(W, !1, d), f = d.onStop = () => {
    const W = Ps.get(d);
    if (W) {
      if (l)
        l(W, 4);
      else
        for (const k of W) k();
      Ps.delete(d);
    }
  }, t ? n ? z(!0) : U = d.run() : a ? a(z.bind(null, !0), !0) : d.run(), E.pause = d.pause.bind(d), E.resume = d.resume.bind(d), E.stop = E, E;
}
function Or(e, t = 1 / 0, r) {
  if (t <= 0 || !It(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gn(e))
    Or(e.value, t, r);
  else if (ot(e))
    for (let n = 0; n < e.length; n++)
      Or(e[n], t, r);
  else if (mp(e) || Ki(e))
    e.forEach((n) => {
      Or(n, t, r);
    });
  else if (bp(e)) {
    for (const n in e)
      Or(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Or(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ha(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    dl(i, t, r);
  }
}
function _r(e, t, r, n) {
  if (lt(e)) {
    const i = ha(e, t, r, n);
    return i && gp(i) && i.catch((o) => {
      dl(o, t, r);
    }), i;
  }
  if (ot(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(_r(e[o], t, r, n));
    return i;
  }
}
function dl(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ot;
  if (t) {
    let s = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      $r(), ha(o, null, 10, [
        e,
        l,
        c
      ]), zr();
      return;
    }
  }
  T0(e, r, i, n, a);
}
function T0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Sn = [];
let cr = -1;
const Ui = [];
let Yr = null, Di = 0;
const $p = /* @__PURE__ */ Promise.resolve();
let Ns = null;
function fl(e) {
  const t = Ns || $p;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function D0(e) {
  let t = cr + 1, r = Sn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = Sn[n], o = Jo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Nu(e) {
  if (!(e.flags & 1)) {
    const t = Jo(e), r = Sn[Sn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jo(r) ? Sn.push(e) : Sn.splice(D0(t), 0, e), e.flags |= 1, zp();
  }
}
function zp() {
  Ns || (Ns = $p.then(Hp));
}
function L0(e) {
  ot(e) ? Ui.push(...e) : Yr && e.id === -1 ? Yr.splice(Di + 1, 0, e) : e.flags & 1 || (Ui.push(e), e.flags |= 1), zp();
}
function Ad(e, t, r = cr + 1) {
  for (; r < Sn.length; r++) {
    const n = Sn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Sn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function jp(e) {
  if (Ui.length) {
    const t = [...new Set(Ui)].sort(
      (r, n) => Jo(r) - Jo(n)
    );
    if (Ui.length = 0, Yr) {
      Yr.push(...t);
      return;
    }
    for (Yr = t, Di = 0; Di < Yr.length; Di++) {
      const r = Yr[Di];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Yr = null, Di = 0;
  }
}
const Jo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Hp(e) {
  try {
    for (cr = 0; cr < Sn.length; cr++) {
      const t = Sn[cr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ha(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; cr < Sn.length; cr++) {
      const t = Sn[cr];
      t && (t.flags &= -2);
    }
    cr = -1, Sn.length = 0, jp(), Ns = null, (Sn.length || Ui.length) && Hp();
  }
}
let Vn = null, Gp = null;
function Cs(e) {
  const t = Vn;
  return Vn = e, Gp = e && e.type.__scopeId || null, t;
}
function Wp(e, t = Vn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && jd(-1);
    const o = Cs(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Cs(o), n._d && jd(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Lr(e, t) {
  if (Vn === null)
    return e;
  const r = yl(Vn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Ot] = t[i];
    o && (lt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Or(a), n.push({
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
function ii(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && ($r(), _r(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), zr());
  }
}
function R0(e, t) {
  if (pn) {
    let r = pn.provides;
    const n = pn.parent && pn.parent.provides;
    n === r && (r = pn.provides = Object.create(n)), r[e] = t;
  }
}
function os(e, t, r = !1) {
  const n = Dy();
  if (n || Bi) {
    let i = Bi ? Bi._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && lt(t) ? t.call(n && n.proxy) : t;
  }
}
const V0 = /* @__PURE__ */ Symbol.for("v-scx"), $0 = () => os(V0);
function yi(e, t, r) {
  return Kp(e, t, r);
}
function Kp(e, t, r = Ot) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = yn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (Qo) {
    if (o === "sync") {
      const g = $0();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = gr, g.resume = gr, g.pause = gr, g;
    }
  }
  const d = pn;
  s.call = (g, _, m) => _r(g, d, _, m);
  let u = !1;
  o === "post" ? s.scheduler = (g) => {
    Cn(g, d && d.suspense);
  } : o !== "sync" && (u = !0, s.scheduler = (g, _) => {
    _ ? g() : Nu(g);
  }), s.augmentJob = (g) => {
    t && (g.flags |= 4), u && (g.flags |= 2, d && (g.id = d.uid, g.i = d));
  };
  const f = F0(e, t, s);
  return Qo && (c ? c.push(f) : l && f()), f;
}
function z0(e, t, r) {
  const n = this.proxy, i = Jt(e) ? e.includes(".") ? Up(n, e) : () => n[e] : e.bind(n, n);
  let o;
  lt(t) ? o = t : (o = t.handler, r = t);
  const a = ga(this), s = Kp(i, o.bind(n), r);
  return a(), s;
}
function Up(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const j0 = /* @__PURE__ */ Symbol("_vte"), H0 = (e) => e.__isTeleport, G0 = /* @__PURE__ */ Symbol("_leaveCb");
function Cu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Cu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Id(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const As = /* @__PURE__ */ new WeakMap();
function Ho(e, t, r, n, i = !1) {
  if (ot(e)) {
    e.forEach(
      (m, p) => Ho(
        m,
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
  const o = n.shapeFlag & 4 ? yl(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, c = t && t.r, d = s.refs === Ot ? s.refs = {} : s.refs, u = s.setupState, f = /* @__PURE__ */ wt(u), g = u === Ot ? hp : (m) => Id(d, m) ? !1 : xt(f, m), _ = (m, p) => !(p && Id(d, p));
  if (c != null && c !== l) {
    if (Ed(t), Jt(c))
      d[c] = null, g(c) && (u[c] = null);
    else if (/* @__PURE__ */ gn(c)) {
      const m = t;
      _(c, m.k) && (c.value = null), m.k && (d[m.k] = null);
    }
  }
  if (lt(l))
    ha(l, s, 12, [a, d]);
  else {
    const m = Jt(l), p = /* @__PURE__ */ gn(l);
    if (m || p) {
      const E = () => {
        if (e.f) {
          const U = m ? g(l) ? u[l] : d[l] : _() || !e.k ? l.value : d[e.k];
          if (i)
            ot(U) && gu(U, o);
          else if (ot(U))
            U.includes(o) || U.push(o);
          else if (m)
            d[l] = [o], g(l) && (u[l] = d[l]);
          else {
            const z = [o];
            _(l, e.k) && (l.value = z), e.k && (d[e.k] = z);
          }
        } else m ? (d[l] = a, g(l) && (u[l] = a)) : p && (_(l, e.k) && (l.value = a), e.k && (d[e.k] = a));
      };
      if (a) {
        const U = () => {
          E(), As.delete(e);
        };
        U.id = -1, As.set(e, U), Cn(U, r);
      } else
        Ed(e), E();
    }
  }
}
function Ed(e) {
  const t = As.get(e);
  t && (t.flags |= 8, As.delete(e));
}
cl().requestIdleCallback;
cl().cancelIdleCallback;
const Go = (e) => !!e.type.__asyncLoader, Yp = (e) => e.type.__isKeepAlive;
function W0(e, t) {
  qp(e, "a", t);
}
function K0(e, t) {
  qp(e, "da", t);
}
function qp(e, t, r = pn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (pl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Yp(i.parent.vnode) && U0(n, t, r, i), i = i.parent;
  }
}
function U0(e, t, r, n) {
  const i = pl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Xp(() => {
    gu(n[t], i);
  }, r);
}
function pl(e, t, r = pn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      $r();
      const s = ga(r), l = _r(t, r, e, a);
      return s(), zr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Hr = (e) => (t, r = pn) => {
  (!Qo || e === "sp") && pl(e, (...n) => t(...n), r);
}, B0 = Hr("bm"), hl = Hr("m"), Y0 = Hr(
  "bu"
), q0 = Hr("u"), ma = Hr(
  "bum"
), Xp = Hr("um"), X0 = Hr(
  "sp"
), J0 = Hr("rtg"), Z0 = Hr("rtc");
function Q0(e, t = pn) {
  pl("ec", e, t);
}
const ey = "components", Jp = /* @__PURE__ */ Symbol.for("v-ndc");
function ty(e) {
  return Jt(e) ? ny(ey, e, !1) || e : e || Jp;
}
function ny(e, t, r = !0, n = !1) {
  const i = Vn || pn;
  if (i) {
    const o = i.type;
    {
      const s = zy(
        o,
        !1
      );
      if (s && (s === t || s === wn(t) || s === ll(wn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Od(i[e] || o[e], t) || // global registration
      Od(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function Od(e, t) {
  return e && (e[t] || e[wn(t)] || e[ll(wn(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, a = ot(e);
  if (a || Jt(e)) {
    const s = a && /* @__PURE__ */ gi(e);
    let l = !1, c = !1;
    s && (l = !/* @__PURE__ */ Un(e), c = /* @__PURE__ */ jr(e), e = ul(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? Qi(or(e[d])) : or(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (It(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = s[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const Mc = (e) => e ? bh(e) ? yl(e) : Mc(e.parent) : null, Wo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Mc(e.parent),
    $root: (e) => Mc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Qp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Nu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fl.bind(e.proxy)),
    $watch: (e) => z0.bind(e)
  })
), $l = (e, t) => e !== Ot && !e.__isScriptSetup && xt(e, t), ry = {
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
        if ($l(n, t))
          return a[t] = 1, n[t];
        if (i !== Ot && xt(i, t))
          return a[t] = 2, i[t];
        if (xt(o, t))
          return a[t] = 3, o[t];
        if (r !== Ot && xt(r, t))
          return a[t] = 4, r[t];
        Pc && (a[t] = 0);
      }
    }
    const c = Wo[t];
    let d, u;
    if (c)
      return t === "$attrs" && fn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = s.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Ot && xt(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, xt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return $l(i, t) ? (i[t] = r, !0) : n !== Ot && xt(n, t) ? (n[t] = r, !0) : xt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== Ot && s[0] !== "$" && xt(e, s) || $l(t, s) || xt(o, s) || xt(n, s) || xt(Wo, s) || xt(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : xt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Fd(e) {
  return ot(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Pc = !0;
function iy(e) {
  const t = Qp(e), r = e.proxy, n = e.ctx;
  Pc = !1, t.beforeCreate && Td(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: g,
    updated: _,
    activated: m,
    deactivated: p,
    beforeDestroy: E,
    beforeUnmount: U,
    destroyed: z,
    unmounted: W,
    render: k,
    renderTracked: te,
    renderTriggered: K,
    errorCaptured: ce,
    serverPrefetch: O,
    // public API
    expose: fe,
    inheritAttrs: F,
    // assets
    components: J,
    directives: G,
    filters: Q
  } = t;
  if (c && oy(c, n, null), a)
    for (const ie in a) {
      const x = a[ie];
      lt(x) && (n[ie] = x.bind(r));
    }
  if (i) {
    const ie = i.call(r, r);
    It(ie) && (e.data = /* @__PURE__ */ ao(ie));
  }
  if (Pc = !0, o)
    for (const ie in o) {
      const x = o[ie], T = lt(x) ? x.bind(r, r) : lt(x.get) ? x.get.bind(r, r) : gr, Z = !lt(x) && lt(x.set) ? x.set.bind(r) : gr, V = ut({
        get: T,
        set: Z
      });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => V.value,
        set: (pe) => V.value = pe
      });
    }
  if (s)
    for (const ie in s)
      Zp(s[ie], n, r, ie);
  if (l) {
    const ie = lt(l) ? l.call(r) : l;
    Reflect.ownKeys(ie).forEach((x) => {
      R0(x, ie[x]);
    });
  }
  d && Td(d, e, "c");
  function oe(ie, x) {
    ot(x) ? x.forEach((T) => ie(T.bind(r))) : x && ie(x.bind(r));
  }
  if (oe(B0, u), oe(hl, f), oe(Y0, g), oe(q0, _), oe(W0, m), oe(K0, p), oe(Q0, ce), oe(Z0, te), oe(J0, K), oe(ma, U), oe(Xp, W), oe(X0, O), ot(fe))
    if (fe.length) {
      const ie = e.exposed || (e.exposed = {});
      fe.forEach((x) => {
        Object.defineProperty(ie, x, {
          get: () => r[x],
          set: (T) => r[x] = T,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === gr && (e.render = k), F != null && (e.inheritAttrs = F), J && (e.components = J), G && (e.directives = G), O && Bp(e);
}
function oy(e, t, r = gr) {
  ot(e) && (e = Nc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    It(i) ? "default" in i ? o = os(
      i.from || n,
      i.default,
      !0
    ) : o = os(i.from || n) : o = os(i), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function Td(e, t, r) {
  _r(
    ot(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Zp(e, t, r, n) {
  let i = n.includes(".") ? Up(r, n) : () => r[n];
  if (Jt(e)) {
    const o = t[e];
    lt(o) && yi(i, o);
  } else if (lt(e))
    yi(i, e.bind(r));
  else if (It(e))
    if (ot(e))
      e.forEach((o) => Zp(o, t, r, n));
    else {
      const o = lt(e.handler) ? e.handler.bind(r) : t[e.handler];
      lt(o) && yi(i, o, e);
    }
}
function Qp(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Is(l, c, a, !0)
  ), Is(l, t, a)), It(t) && o.set(t, l), l;
}
function Is(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Is(e, o, r, !0), i && i.forEach(
    (a) => Is(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = ay[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const ay = {
  data: Dd,
  props: Ld,
  emits: Ld,
  // objects
  methods: Io,
  computed: Io,
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
  components: Io,
  directives: Io,
  // watch
  watch: ly,
  // provide / inject
  provide: Dd,
  inject: sy
};
function Dd(e, t) {
  return t ? e ? function() {
    return yn(
      lt(e) ? e.call(this, this) : e,
      lt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sy(e, t) {
  return Io(Nc(e), Nc(t));
}
function Nc(e) {
  if (ot(e)) {
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
function Io(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ld(e, t) {
  return e ? ot(e) && ot(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    Fd(e),
    Fd(t ?? {})
  ) : t;
}
function ly(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = yn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = _n(e[n], t[n]);
  return r;
}
function eh() {
  return {
    app: null,
    config: {
      isNativeTag: hp,
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
let cy = 0;
function uy(e, t) {
  return function(n, i = null) {
    lt(n) || (n = yn({}, n)), i != null && !It(i) && (i = null);
    const o = eh(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const c = o.app = {
      _uid: cy++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Hy,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return a.has(d) || (d && lt(d.install) ? (a.add(d), d.install(c, ...u)) : lt(d) && (a.add(d), d(c, ...u))), c;
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
          const g = c._ceVNode || Ue(n, i);
          return g.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(g, d, f), l = !0, c._container = d, d.__vue_app__ = c, yl(g.component);
        }
      },
      onUnmount(d) {
        s.push(d);
      },
      unmount() {
        l && (_r(
          s,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Bi;
        Bi = c;
        try {
          return d();
        } finally {
          Bi = u;
        }
      }
    };
    return c;
  };
}
let Bi = null;
const dy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wn(t)}Modifiers`] || e[`${Mi(t)}Modifiers`];
function fy(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ot;
  let i = r;
  const o = t.startsWith("update:"), a = o && dy(n, t.slice(7));
  a && (a.trim && (i = r.map((d) => Jt(d) ? d.trim() : d)), a.number && (i = r.map(bu)));
  let s, l = n[s = Tl(t)] || // also try camelCase event handler (#2249)
  n[s = Tl(wn(t))];
  !l && o && (l = n[s = Tl(Mi(t))]), l && _r(
    l,
    e,
    6,
    i
  );
  const c = n[s + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, _r(
      c,
      e,
      6,
      i
    );
  }
}
const py = /* @__PURE__ */ new WeakMap();
function th(e, t, r = !1) {
  const n = r ? py : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!lt(e)) {
    const l = (c) => {
      const d = th(c, t, !0);
      d && (s = !0, yn(a, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (It(e) && n.set(e, null), null) : (ot(o) ? o.forEach((l) => a[l] = null) : yn(a, o), It(e) && n.set(e, a), a);
}
function ml(e, t) {
  return !e || !ol(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xt(e, t[0].toLowerCase() + t.slice(1)) || xt(e, Mi(t)) || xt(e, t));
}
function Rd(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: c,
    renderCache: d,
    props: u,
    data: f,
    setupState: g,
    ctx: _,
    inheritAttrs: m
  } = e, p = Cs(e);
  let E, U;
  try {
    if (r.shapeFlag & 4) {
      const W = i || n, k = W;
      E = dr(
        c.call(
          k,
          W,
          d,
          u,
          g,
          f,
          _
        )
      ), U = s;
    } else {
      const W = t;
      E = dr(
        W.length > 1 ? W(
          u,
          { attrs: s, slots: a, emit: l }
        ) : W(
          u,
          null
        )
      ), U = t.props ? s : hy(s);
    }
  } catch (W) {
    Ko.length = 0, dl(W, e, 1), E = Ue(Jr);
  }
  let z = E;
  if (U && m !== !1) {
    const W = Object.keys(U), { shapeFlag: k } = z;
    W.length && k & 7 && (o && W.some(al) && (U = my(
      U,
      o
    )), z = eo(z, U, !1, !0));
  }
  return r.dirs && (z = eo(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && Cu(z, r.transition), E = z, Cs(p), E;
}
const hy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ol(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, my = (e, t) => {
  const r = {};
  for (const n in e)
    (!al(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function gy(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Vd(n, a, c) : !!a;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (nh(a, n, f) && !ml(c, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Vd(n, a, c) : !0 : !!a;
  return !1;
}
function Vd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (nh(t, e, o) && !ml(r, o))
      return !0;
  }
  return !1;
}
function nh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && It(n) && It(i) ? !vu(n, i) : n !== i;
}
function yy({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const rh = {}, ih = () => Object.create(rh), oh = (e) => Object.getPrototypeOf(e) === rh;
function by(e, t, r, n = !1) {
  const i = {}, o = ih();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ah(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ P0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function vy(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ wt(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (ml(e.emitsOptions, f))
          continue;
        const g = t[f];
        if (l)
          if (xt(o, f))
            g !== o[f] && (o[f] = g, c = !0);
          else {
            const _ = wn(f);
            i[_] = Cc(
              l,
              s,
              _,
              g,
              e,
              !1
            );
          }
        else
          g !== o[f] && (o[f] = g, c = !0);
      }
    }
  } else {
    ah(e, t, i, o) && (c = !0);
    let d;
    for (const u in s)
      (!t || // for camelCase
      !xt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Mi(u)) === u || !xt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Cc(
        l,
        s,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== s)
      for (const u in o)
        (!t || !xt(t, u)) && (delete o[u], c = !0);
  }
  c && Er(e.attrs, "set", "");
}
function ah(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if ($o(l))
        continue;
      const c = t[l];
      let d;
      i && xt(i, d = wn(l)) ? !o || !o.includes(d) ? r[d] = c : (s || (s = {}))[d] = c : ml(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ wt(r), c = s || Ot;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Cc(
        i,
        l,
        u,
        c[u],
        e,
        !xt(c, u)
      );
    }
  }
  return a;
}
function Cc(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = xt(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && lt(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = ga(i);
          n = c[r] = l.call(
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
    ] && (n === "" || n === Mi(r)) && (n = !0));
  }
  return n;
}
const _y = /* @__PURE__ */ new WeakMap();
function sh(e, t, r = !1) {
  const n = r ? _y : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!lt(e)) {
    const d = (u) => {
      l = !0;
      const [f, g] = sh(u, t, !0);
      yn(a, f), g && s.push(...g);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return It(e) && n.set(e, Wi), Wi;
  if (ot(o))
    for (let d = 0; d < o.length; d++) {
      const u = wn(o[d]);
      $d(u) && (a[u] = Ot);
    }
  else if (o)
    for (const d in o) {
      const u = wn(d);
      if ($d(u)) {
        const f = o[d], g = a[u] = ot(f) || lt(f) ? { type: f } : yn({}, f), _ = g.type;
        let m = !1, p = !0;
        if (ot(_))
          for (let E = 0; E < _.length; ++E) {
            const U = _[E], z = lt(U) && U.name;
            if (z === "Boolean") {
              m = !0;
              break;
            } else z === "String" && (p = !1);
          }
        else
          m = lt(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = m, g[
          1
          /* shouldCastTrue */
        ] = p, (m || xt(g, "default")) && s.push(u);
      }
    }
  const c = [a, s];
  return It(e) && n.set(e, c), c;
}
function $d(e) {
  return e[0] !== "$" && !$o(e);
}
const Au = (e) => e === "_" || e === "_ctx" || e === "$stable", Iu = (e) => ot(e) ? e.map(dr) : [dr(e)], Sy = (e, t, r) => {
  if (t._n)
    return t;
  const n = Wp((...i) => Iu(t(...i)), r);
  return n._c = !1, n;
}, lh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Au(i)) continue;
    const o = e[i];
    if (lt(o))
      t[i] = Sy(i, o, n);
    else if (o != null) {
      const a = Iu(o);
      t[i] = () => a;
    }
  }
}, ch = (e, t) => {
  const r = Iu(t);
  e.slots.default = () => r;
}, uh = (e, t, r) => {
  for (const n in t)
    (r || !Au(n)) && (e[n] = t[n]);
}, wy = (e, t, r) => {
  const n = e.slots = ih();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (uh(n, t, r), r && vp(n, "_", i, !0)) : lh(t, n);
  } else t && ch(e, t);
}, xy = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = Ot;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : uh(i, t, r) : (o = !t.$stable, lh(t, i)), a = t;
  } else t && (ch(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !Au(s) && a[s] == null && delete i[s];
}, Cn = Cy;
function ky(e) {
  return My(e);
}
function My(e, t) {
  const r = cl();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: g = gr,
    insertStaticContent: _
  } = e, m = (b, S, $, H = null, v = null, w = null, L = void 0, M = null, P = !!S.dynamicChildren) => {
    if (b === S)
      return;
    b && !xo(b, S) && (H = se(b), pe(b, v, w, !0), b = null), S.patchFlag === -2 && (P = !1, S.dynamicChildren = null);
    const { type: A, ref: B, shapeFlag: re } = S;
    switch (A) {
      case gl:
        p(b, S, $, H);
        break;
      case Jr:
        E(b, S, $, H);
        break;
      case jl:
        b == null && U(S, $, H, L);
        break;
      case Ze:
        J(
          b,
          S,
          $,
          H,
          v,
          w,
          L,
          M,
          P
        );
        break;
      default:
        re & 1 ? k(
          b,
          S,
          $,
          H,
          v,
          w,
          L,
          M,
          P
        ) : re & 6 ? G(
          b,
          S,
          $,
          H,
          v,
          w,
          L,
          M,
          P
        ) : (re & 64 || re & 128) && A.process(
          b,
          S,
          $,
          H,
          v,
          w,
          L,
          M,
          P,
          C
        );
    }
    B != null && v ? Ho(B, b && b.ref, w, S || b, !S) : B == null && b && b.ref != null && Ho(b.ref, null, w, b, !0);
  }, p = (b, S, $, H) => {
    if (b == null)
      n(
        S.el = s(S.children),
        $,
        H
      );
    else {
      const v = S.el = b.el;
      S.children !== b.children && c(v, S.children);
    }
  }, E = (b, S, $, H) => {
    b == null ? n(
      S.el = l(S.children || ""),
      $,
      H
    ) : S.el = b.el;
  }, U = (b, S, $, H) => {
    [b.el, b.anchor] = _(
      b.children,
      S,
      $,
      H,
      b.el,
      b.anchor
    );
  }, z = ({ el: b, anchor: S }, $, H) => {
    let v;
    for (; b && b !== S; )
      v = f(b), n(b, $, H), b = v;
    n(S, $, H);
  }, W = ({ el: b, anchor: S }) => {
    let $;
    for (; b && b !== S; )
      $ = f(b), i(b), b = $;
    i(S);
  }, k = (b, S, $, H, v, w, L, M, P) => {
    if (S.type === "svg" ? L = "svg" : S.type === "math" && (L = "mathml"), b == null)
      te(
        S,
        $,
        H,
        v,
        w,
        L,
        M,
        P
      );
    else {
      const A = b.el && b.el._isVueCE ? b.el : null;
      try {
        A && A._beginPatch(), O(
          b,
          S,
          v,
          w,
          L,
          M,
          P
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, te = (b, S, $, H, v, w, L, M) => {
    let P, A;
    const { props: B, shapeFlag: re, transition: me, dirs: j } = b;
    if (P = b.el = a(
      b.type,
      w,
      B && B.is,
      B
    ), re & 8 ? d(P, b.children) : re & 16 && ce(
      b.children,
      P,
      null,
      H,
      v,
      zl(b, w),
      L,
      M
    ), j && ii(b, null, H, "created"), K(P, b, b.scopeId, L, H), B) {
      for (const _e in B)
        _e !== "value" && !$o(_e) && o(P, _e, null, B[_e], w, H);
      "value" in B && o(P, "value", null, B.value, w), (A = B.onVnodeBeforeMount) && sr(A, H, b);
    }
    j && ii(b, null, H, "beforeMount");
    const de = Py(v, me);
    de && me.beforeEnter(P), n(P, S, $), ((A = B && B.onVnodeMounted) || de || j) && Cn(() => {
      try {
        A && sr(A, H, b), de && me.enter(P), j && ii(b, null, H, "mounted");
      } finally {
      }
    }, v);
  }, K = (b, S, $, H, v) => {
    if ($ && g(b, $), H)
      for (let w = 0; w < H.length; w++)
        g(b, H[w]);
    if (v) {
      let w = v.subTree;
      if (S === w || hh(w.type) && (w.ssContent === S || w.ssFallback === S)) {
        const L = v.vnode;
        K(
          b,
          L,
          L.scopeId,
          L.slotScopeIds,
          v.parent
        );
      }
    }
  }, ce = (b, S, $, H, v, w, L, M, P = 0) => {
    for (let A = P; A < b.length; A++) {
      const B = b[A] = M ? Cr(b[A]) : dr(b[A]);
      m(
        null,
        B,
        S,
        $,
        H,
        v,
        w,
        L,
        M
      );
    }
  }, O = (b, S, $, H, v, w, L) => {
    const M = S.el = b.el;
    let { patchFlag: P, dynamicChildren: A, dirs: B } = S;
    P |= b.patchFlag & 16;
    const re = b.props || Ot, me = S.props || Ot;
    let j;
    if ($ && oi($, !1), (j = me.onVnodeBeforeUpdate) && sr(j, $, S, b), B && ii(S, b, $, "beforeUpdate"), $ && oi($, !0), (re.innerHTML && me.innerHTML == null || re.textContent && me.textContent == null) && d(M, ""), A ? fe(
      b.dynamicChildren,
      A,
      M,
      $,
      H,
      zl(S, v),
      w
    ) : L || x(
      b,
      S,
      M,
      null,
      $,
      H,
      zl(S, v),
      w,
      !1
    ), P > 0) {
      if (P & 16)
        F(M, re, me, $, v);
      else if (P & 2 && re.class !== me.class && o(M, "class", null, me.class, v), P & 4 && o(M, "style", re.style, me.style, v), P & 8) {
        const de = S.dynamicProps;
        for (let _e = 0; _e < de.length; _e++) {
          const ke = de[_e], ue = re[ke], ve = me[ke];
          (ve !== ue || ke === "value") && o(M, ke, ue, ve, v, $);
        }
      }
      P & 1 && b.children !== S.children && d(M, S.children);
    } else !L && A == null && F(M, re, me, $, v);
    ((j = me.onVnodeUpdated) || B) && Cn(() => {
      j && sr(j, $, S, b), B && ii(S, b, $, "updated");
    }, H);
  }, fe = (b, S, $, H, v, w, L) => {
    for (let M = 0; M < S.length; M++) {
      const P = b[M], A = S[M], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xo(P, A) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? u(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      m(
        P,
        A,
        B,
        null,
        H,
        v,
        w,
        L,
        !0
      );
    }
  }, F = (b, S, $, H, v) => {
    if (S !== $) {
      if (S !== Ot)
        for (const w in S)
          !$o(w) && !(w in $) && o(
            b,
            w,
            S[w],
            null,
            v,
            H
          );
      for (const w in $) {
        if ($o(w)) continue;
        const L = $[w], M = S[w];
        L !== M && w !== "value" && o(b, w, M, L, v, H);
      }
      "value" in $ && o(b, "value", S.value, $.value, v);
    }
  }, J = (b, S, $, H, v, w, L, M, P) => {
    const A = S.el = b ? b.el : s(""), B = S.anchor = b ? b.anchor : s("");
    let { patchFlag: re, dynamicChildren: me, slotScopeIds: j } = S;
    j && (M = M ? M.concat(j) : j), b == null ? (n(A, $, H), n(B, $, H), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      $,
      B,
      v,
      w,
      L,
      M,
      P
    )) : re > 0 && re & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren && b.dynamicChildren.length === me.length ? (fe(
      b.dynamicChildren,
      me,
      $,
      v,
      w,
      L,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || v && S === v.subTree) && dh(
      b,
      S,
      !0
      /* shallow */
    )) : x(
      b,
      S,
      $,
      B,
      v,
      w,
      L,
      M,
      P
    );
  }, G = (b, S, $, H, v, w, L, M, P) => {
    S.slotScopeIds = M, b == null ? S.shapeFlag & 512 ? v.ctx.activate(
      S,
      $,
      H,
      L,
      P
    ) : Q(
      S,
      $,
      H,
      v,
      w,
      L,
      P
    ) : Y(b, S, P);
  }, Q = (b, S, $, H, v, w, L) => {
    const M = b.component = Ty(
      b,
      H,
      v
    );
    if (Yp(b) && (M.ctx.renderer = C), Ly(M, !1, L), M.asyncDep) {
      if (v && v.registerDep(M, oe, L), !b.el) {
        const P = M.subTree = Ue(Jr);
        E(null, P, S, $), b.placeholder = P.el;
      }
    } else
      oe(
        M,
        b,
        S,
        $,
        v,
        w,
        L
      );
  }, Y = (b, S, $) => {
    const H = S.component = b.component;
    if (gy(b, S, $))
      if (H.asyncDep && !H.asyncResolved) {
        ie(H, S, $);
        return;
      } else
        H.next = S, H.update();
    else
      S.el = b.el, H.vnode = S;
  }, oe = (b, S, $, H, v, w, L) => {
    const M = () => {
      if (b.isMounted) {
        let { next: re, bu: me, u: j, parent: de, vnode: _e } = b;
        {
          const h = fh(b);
          if (h) {
            re && (re.el = _e.el, ie(b, re, L)), h.asyncDep.then(() => {
              Cn(() => {
                b.isUnmounted || A();
              }, v);
            });
            return;
          }
        }
        let ke = re, ue;
        oi(b, !1), re ? (re.el = _e.el, ie(b, re, L)) : re = _e, me && is(me), (ue = re.props && re.props.onVnodeBeforeUpdate) && sr(ue, de, re, _e), oi(b, !0);
        const ve = Rd(b), Ne = b.subTree;
        b.subTree = ve, m(
          Ne,
          ve,
          // parent may have changed if it's in a teleport
          u(Ne.el),
          // anchor may have changed if it's in a fragment
          se(Ne),
          b,
          v,
          w
        ), re.el = ve.el, ke === null && yy(b, ve.el), j && Cn(j, v), (ue = re.props && re.props.onVnodeUpdated) && Cn(
          () => sr(ue, de, re, _e),
          v
        );
      } else {
        let re;
        const { el: me, props: j } = S, { bm: de, m: _e, parent: ke, root: ue, type: ve } = b, Ne = Go(S);
        oi(b, !1), de && is(de), !Ne && (re = j && j.onVnodeBeforeMount) && sr(re, ke, S), oi(b, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            ve,
            b.parent ? b.parent.type : void 0
          );
          const h = b.subTree = Rd(b);
          m(
            null,
            h,
            $,
            H,
            b,
            v,
            w
          ), S.el = h.el;
        }
        if (_e && Cn(_e, v), !Ne && (re = j && j.onVnodeMounted)) {
          const h = S;
          Cn(
            () => sr(re, ke, h),
            v
          );
        }
        (S.shapeFlag & 256 || ke && Go(ke.vnode) && ke.vnode.shapeFlag & 256) && b.a && Cn(b.a, v), b.isMounted = !0, S = $ = H = null;
      }
    };
    b.scope.on();
    const P = b.effect = new xp(M);
    b.scope.off();
    const A = b.update = P.run.bind(P), B = b.job = P.runIfDirty.bind(P);
    B.i = b, B.id = b.uid, P.scheduler = () => Nu(B), oi(b, !0), A();
  }, ie = (b, S, $) => {
    S.component = b;
    const H = b.vnode.props;
    b.vnode = S, b.next = null, vy(b, S.props, H, $), xy(b, S.children, $), $r(), Ad(b), zr();
  }, x = (b, S, $, H, v, w, L, M, P = !1) => {
    const A = b && b.children, B = b ? b.shapeFlag : 0, re = S.children, { patchFlag: me, shapeFlag: j } = S;
    if (me > 0) {
      if (me & 128) {
        Z(
          A,
          re,
          $,
          H,
          v,
          w,
          L,
          M,
          P
        );
        return;
      } else if (me & 256) {
        T(
          A,
          re,
          $,
          H,
          v,
          w,
          L,
          M,
          P
        );
        return;
      }
    }
    j & 8 ? (B & 16 && X(A, v, w), re !== A && d($, re)) : B & 16 ? j & 16 ? Z(
      A,
      re,
      $,
      H,
      v,
      w,
      L,
      M,
      P
    ) : X(A, v, w, !0) : (B & 8 && d($, ""), j & 16 && ce(
      re,
      $,
      H,
      v,
      w,
      L,
      M,
      P
    ));
  }, T = (b, S, $, H, v, w, L, M, P) => {
    b = b || Wi, S = S || Wi;
    const A = b.length, B = S.length, re = Math.min(A, B);
    let me;
    for (me = 0; me < re; me++) {
      const j = S[me] = P ? Cr(S[me]) : dr(S[me]);
      m(
        b[me],
        j,
        $,
        null,
        v,
        w,
        L,
        M,
        P
      );
    }
    A > B ? X(
      b,
      v,
      w,
      !0,
      !1,
      re
    ) : ce(
      S,
      $,
      H,
      v,
      w,
      L,
      M,
      P,
      re
    );
  }, Z = (b, S, $, H, v, w, L, M, P) => {
    let A = 0;
    const B = S.length;
    let re = b.length - 1, me = B - 1;
    for (; A <= re && A <= me; ) {
      const j = b[A], de = S[A] = P ? Cr(S[A]) : dr(S[A]);
      if (xo(j, de))
        m(
          j,
          de,
          $,
          null,
          v,
          w,
          L,
          M,
          P
        );
      else
        break;
      A++;
    }
    for (; A <= re && A <= me; ) {
      const j = b[re], de = S[me] = P ? Cr(S[me]) : dr(S[me]);
      if (xo(j, de))
        m(
          j,
          de,
          $,
          null,
          v,
          w,
          L,
          M,
          P
        );
      else
        break;
      re--, me--;
    }
    if (A > re) {
      if (A <= me) {
        const j = me + 1, de = j < B ? S[j].el : H;
        for (; A <= me; )
          m(
            null,
            S[A] = P ? Cr(S[A]) : dr(S[A]),
            $,
            de,
            v,
            w,
            L,
            M,
            P
          ), A++;
      }
    } else if (A > me)
      for (; A <= re; )
        pe(b[A], v, w, !0), A++;
    else {
      const j = A, de = A, _e = /* @__PURE__ */ new Map();
      for (A = de; A <= me; A++) {
        const y = S[A] = P ? Cr(S[A]) : dr(S[A]);
        y.key != null && _e.set(y.key, A);
      }
      let ke, ue = 0;
      const ve = me - de + 1;
      let Ne = !1, h = 0;
      const R = new Array(ve);
      for (A = 0; A < ve; A++) R[A] = 0;
      for (A = j; A <= re; A++) {
        const y = b[A];
        if (ue >= ve) {
          pe(y, v, w, !0);
          continue;
        }
        let D;
        if (y.key != null)
          D = _e.get(y.key);
        else
          for (ke = de; ke <= me; ke++)
            if (R[ke - de] === 0 && xo(y, S[ke])) {
              D = ke;
              break;
            }
        D === void 0 ? pe(y, v, w, !0) : (R[D - de] = A + 1, D >= h ? h = D : Ne = !0, m(
          y,
          S[D],
          $,
          null,
          v,
          w,
          L,
          M,
          P
        ), ue++);
      }
      const N = Ne ? Ny(R) : Wi;
      for (ke = N.length - 1, A = ve - 1; A >= 0; A--) {
        const y = de + A, D = S[y], le = S[y + 1], ge = y + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          le.el || ph(le)
        ) : H;
        R[A] === 0 ? m(
          null,
          D,
          $,
          ge,
          v,
          w,
          L,
          M,
          P
        ) : Ne && (ke < 0 || A !== N[ke] ? V(D, $, ge, 2) : ke--);
      }
    }
  }, V = (b, S, $, H, v = null) => {
    const { el: w, type: L, transition: M, children: P, shapeFlag: A } = b;
    if (A & 6) {
      V(b.component.subTree, S, $, H);
      return;
    }
    if (A & 128) {
      b.suspense.move(S, $, H);
      return;
    }
    if (A & 64) {
      L.move(b, S, $, C);
      return;
    }
    if (L === Ze) {
      n(w, S, $);
      for (let re = 0; re < P.length; re++)
        V(P[re], S, $, H);
      n(b.anchor, S, $);
      return;
    }
    if (L === jl) {
      z(b, S, $);
      return;
    }
    if (H !== 2 && A & 1 && M)
      if (H === 0)
        M.beforeEnter(w), n(w, S, $), Cn(() => M.enter(w), v);
      else {
        const { leave: re, delayLeave: me, afterLeave: j } = M, de = () => {
          b.ctx.isUnmounted ? i(w) : n(w, S, $);
        }, _e = () => {
          w._isLeaving && w[G0](
            !0
            /* cancelled */
          ), re(w, () => {
            de(), j && j();
          });
        };
        me ? me(w, de, _e) : _e();
      }
    else
      n(w, S, $);
  }, pe = (b, S, $, H = !1, v = !1) => {
    const {
      type: w,
      props: L,
      ref: M,
      children: P,
      dynamicChildren: A,
      shapeFlag: B,
      patchFlag: re,
      dirs: me,
      cacheIndex: j,
      memo: de
    } = b;
    if (re === -2 && (v = !1), M != null && ($r(), Ho(M, null, $, b, !0), zr()), j != null && (S.renderCache[j] = void 0), B & 256) {
      S.ctx.deactivate(b);
      return;
    }
    const _e = B & 1 && me, ke = !Go(b);
    let ue;
    if (ke && (ue = L && L.onVnodeBeforeUnmount) && sr(ue, S, b), B & 6)
      I(b.component, $, H);
    else {
      if (B & 128) {
        b.suspense.unmount($, H);
        return;
      }
      _e && ii(b, null, S, "beforeUnmount"), B & 64 ? b.type.remove(
        b,
        S,
        $,
        C,
        H
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== Ze || re > 0 && re & 64) ? X(
        A,
        S,
        $,
        !1,
        !0
      ) : (w === Ze && re & 384 || !v && B & 16) && X(P, S, $), H && Se(b);
    }
    const ve = de != null && j == null;
    (ke && (ue = L && L.onVnodeUnmounted) || _e || ve) && Cn(() => {
      ue && sr(ue, S, b), _e && ii(b, null, S, "unmounted"), ve && (b.el = null);
    }, $);
  }, Se = (b) => {
    const { type: S, el: $, anchor: H, transition: v } = b;
    if (S === Ze) {
      ee($, H);
      return;
    }
    if (S === jl) {
      W(b);
      return;
    }
    const w = () => {
      i($), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (b.shapeFlag & 1 && v && !v.persisted) {
      const { leave: L, delayLeave: M } = v, P = () => L($, w);
      M ? M(b.el, w, P) : P();
    } else
      w();
  }, ee = (b, S) => {
    let $;
    for (; b !== S; )
      $ = f(b), i(b), b = $;
    i(S);
  }, I = (b, S, $) => {
    const { bum: H, scope: v, job: w, subTree: L, um: M, m: P, a: A } = b;
    zd(P), zd(A), H && is(H), v.stop(), w && (w.flags |= 8, pe(L, b, S, $)), M && Cn(M, S), Cn(() => {
      b.isUnmounted = !0;
    }, S);
  }, X = (b, S, $, H = !1, v = !1, w = 0) => {
    for (let L = w; L < b.length; L++)
      pe(b[L], S, $, H, v);
  }, se = (b) => {
    if (b.shapeFlag & 6)
      return se(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const S = f(b.anchor || b.el), $ = S && S[j0];
    return $ ? f($) : S;
  };
  let be = !1;
  const we = (b, S, $) => {
    let H;
    b == null ? S._vnode && (pe(S._vnode, null, null, !0), H = S._vnode.component) : m(
      S._vnode || null,
      b,
      S,
      null,
      null,
      null,
      $
    ), S._vnode = b, be || (be = !0, Ad(H), jp(), be = !1);
  }, C = {
    p: m,
    um: pe,
    m: V,
    r: Se,
    mt: Q,
    mc: ce,
    pc: x,
    pbc: fe,
    n: se,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: uy(we)
  };
}
function zl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function oi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Py(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function dh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ot(n) && ot(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Cr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && dh(a, s)), s.type === gl && (s.patchFlag === -1 && (s = i[o] = Cr(s)), s.el = a.el), s.type === Jr && !s.el && (s.el = a.el);
    }
}
function Ny(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, a = r.length - 1; o < a; )
        s = o + a >> 1, e[r[s]] < c ? o = s + 1 : a = s;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; )
    r[o] = a, a = t[a];
  return r;
}
function fh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fh(t);
}
function zd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ph(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ph(t.subTree) : null;
}
const hh = (e) => e.__isSuspense;
function Cy(e, t) {
  t && t.pendingBranch ? ot(e) ? t.effects.push(...e) : t.effects.push(e) : L0(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), gl = /* @__PURE__ */ Symbol.for("v-txt"), Jr = /* @__PURE__ */ Symbol.for("v-cmt"), jl = /* @__PURE__ */ Symbol.for("v-stc"), Ko = [];
let $n = null;
function Te(e = !1) {
  Ko.push($n = e ? null : []);
}
function Ay() {
  Ko.pop(), $n = Ko[Ko.length - 1] || null;
}
let Zo = 1;
function jd(e, t = !1) {
  Zo += e, e < 0 && $n && t && ($n.hasOnce = !0);
}
function mh(e) {
  return e.dynamicChildren = Zo > 0 ? $n || Wi : null, Ay(), Zo > 0 && $n && $n.push(e), e;
}
function De(e, t, r, n, i, o) {
  return mh(
    Pe(
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
function zn(e, t, r, n, i) {
  return mh(
    Ue(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function gh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yh = ({ key: e }) => e ?? null, as = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Jt(e) || /* @__PURE__ */ gn(e) || lt(e) ? { i: Vn, r: e, k: t, f: !!r } : e : null);
function Pe(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yh(t),
    ref: t && as(t),
    scopeId: Gp,
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
    ctx: Vn
  };
  return s ? (Eu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Jt(r) ? 8 : 16), Zo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  $n && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && $n.push(l), l;
}
const Ue = Iy;
function Iy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Jp) && (e = Jr), gh(e)) {
    const s = eo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Eu(s, r), Zo > 0 && !o && $n && (s.shapeFlag & 6 ? $n[$n.indexOf(e)] = s : $n.push(s)), s.patchFlag = -2, s;
  }
  if (jy(e) && (e = e.__vccOpts), t) {
    t = Ey(t);
    let { class: s, style: l } = t;
    s && !Jt(s) && (t.class = ht(s)), It(l) && (/* @__PURE__ */ Pu(l) && !ot(l) && (l = yn({}, l)), t.style = At(l));
  }
  const a = Jt(e) ? 1 : hh(e) ? 128 : H0(e) ? 64 : It(e) ? 4 : lt(e) ? 2 : 0;
  return Pe(
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
function Ey(e) {
  return e ? /* @__PURE__ */ Pu(e) || oh(e) ? yn({}, e) : e : null;
}
function eo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, c = t ? Ar(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && yh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ot(o) ? o.concat(as(t)) : [o, as(t)] : as(t)
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
    patchFlag: t && e.type !== Ze ? a === -1 ? 16 : a | 16 : a,
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
  return l && n && Cu(
    d,
    l.clone(d)
  ), d;
}
function Eo(e = " ", t = 0) {
  return Ue(gl, null, e, t);
}
function pt(e = "", t = !1) {
  return t ? (Te(), zn(Jr, null, e)) : Ue(Jr, null, e);
}
function dr(e) {
  return e == null || typeof e == "boolean" ? Ue(Jr) : ot(e) ? Ue(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : gh(e) ? Cr(e) : Ue(gl, null, String(e));
}
function Cr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : eo(e);
}
function Eu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ot(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Eu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !oh(t) ? t._ctx = Vn : i === 3 && Vn && (Vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else lt(t) ? (t = { default: t, _ctx: Vn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Eo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Ar(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ht([t.class, n.class]));
      else if (i === "style")
        t.style = At([t.style, n.style]);
      else if (ol(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(ot(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !al(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function sr(e, t, r, n = null) {
  _r(e, t, 7, [
    r,
    n
  ]);
}
const Oy = eh();
let Fy = 0;
function Ty(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Oy, o = {
    uid: Fy++,
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
    scope: new a0(
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
    propsOptions: sh(n, i),
    emitsOptions: th(n, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = fy.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const Dy = () => pn || Vn;
let Es, Ac;
{
  const e = cl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Es = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => pn = r
  ), Ac = t(
    "__VUE_SSR_SETTERS__",
    (r) => Qo = r
  );
}
const ga = (e) => {
  const t = pn;
  return Es(e), e.scope.on(), () => {
    e.scope.off(), Es(t);
  };
}, Hd = () => {
  pn && pn.scope.off(), Es(null);
};
function bh(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = !1;
function Ly(e, t = !1, r = !1) {
  t && Ac(t);
  const { props: n, children: i } = e.vnode, o = bh(e);
  by(e, n, o, t), wy(e, i, r || t);
  const a = o ? Ry(e, t) : void 0;
  return t && Ac(!1), a;
}
function Ry(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ry);
  const { setup: n } = r;
  if (n) {
    $r();
    const i = e.setupContext = n.length > 1 ? $y(e) : null, o = ga(e), a = ha(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = gp(a);
    if (zr(), o(), (s || e.sp) && !Go(e) && Bp(e), s) {
      if (a.then(Hd, Hd), t)
        return a.then((l) => {
          Gd(e, l);
        }).catch((l) => {
          dl(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Gd(e, a);
  } else
    vh(e);
}
function Gd(e, t, r) {
  lt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : It(t) && (e.setupState = Vp(t)), vh(e);
}
function vh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || gr);
  {
    const i = ga(e);
    $r();
    try {
      iy(e);
    } finally {
      zr(), i();
    }
  }
}
const Vy = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function $y(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function yl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vp(N0(e.exposed)), {
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
function zy(e, t = !0) {
  return lt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function jy(e) {
  return lt(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ E0(e, t, Qo), Hy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ic;
const Wd = typeof window < "u" && window.trustedTypes;
if (Wd)
  try {
    Ic = /* @__PURE__ */ Wd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _h = Ic ? (e) => Ic.createHTML(e) : (e) => e, Gy = "http://www.w3.org/2000/svg", Wy = "http://www.w3.org/1998/Math/MathML", Nr = typeof document < "u" ? document : null, Kd = Nr && /* @__PURE__ */ Nr.createElement("template"), Ky = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Nr.createElementNS(Gy, e) : t === "mathml" ? Nr.createElementNS(Wy, e) : r ? Nr.createElement(e, { is: r }) : Nr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Nr.createTextNode(e),
  createComment: (e) => Nr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nr.querySelector(e),
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
      Kd.innerHTML = _h(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Kd.content;
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
}, Uy = /* @__PURE__ */ Symbol("_vtc");
function By(e, t, r) {
  const n = e[Uy];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Os = /* @__PURE__ */ Symbol("_vod"), Sh = /* @__PURE__ */ Symbol("_vsh"), Si = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Os] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : ko(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), ko(e, !0), n.enter(e)) : n.leave(e, () => {
      ko(e, !1);
    }) : ko(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ko(e, t);
  }
};
function ko(e, t) {
  e.style.display = t ? e[Os] : "none", e[Sh] = !t;
}
const Yy = /* @__PURE__ */ Symbol(""), qy = /(?:^|;)\s*display\s*:/;
function Xy(e, t, r) {
  const n = e.style, i = Jt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Jt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && ss(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && ss(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), ss(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[Yy];
      a && (r += ";" + a), n.cssText = r, o = qy.test(r);
    }
  } else t && e.removeAttribute("style");
  Os in e && (e[Os] = o ? n.display : "", e[Sh] && (n.display = "none"));
}
const Ud = /\s*!important$/;
function ss(e, t, r) {
  if (ot(r))
    r.forEach((n) => ss(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Jy(e, t);
    Ud.test(r) ? e.setProperty(
      Mi(n),
      r.replace(Ud, ""),
      "important"
    ) : e[n] = r;
  }
}
const Bd = ["Webkit", "Moz", "ms"], Hl = {};
function Jy(e, t) {
  const r = Hl[t];
  if (r)
    return r;
  let n = wn(t);
  if (n !== "filter" && n in e)
    return Hl[t] = n;
  n = ll(n);
  for (let i = 0; i < Bd.length; i++) {
    const o = Bd[i] + n;
    if (o in e)
      return Hl[t] = o;
  }
  return t;
}
const Yd = "http://www.w3.org/1999/xlink";
function qd(e, t, r, n, i, o = i0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Yd, t.slice(6, t.length)) : e.setAttributeNS(Yd, t, r) : r == null || o && !_p(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : vr(r) ? String(r) : r
  );
}
function Xd(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? _h(r) : r);
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
    s === "boolean" ? r = _p(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
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
function Zy(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Jd = /* @__PURE__ */ Symbol("_vei");
function Qy(e, t, r, n, i = null) {
  const o = e[Jd] || (e[Jd] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = eb(t);
    if (n) {
      const c = o[t] = rb(
        n,
        i
      );
      Li(e, s, c, l);
    } else a && (Zy(e, s, a, l), o[t] = void 0);
  }
}
const Zd = /(?:Once|Passive|Capture)$/;
function eb(e) {
  let t;
  if (Zd.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Zd); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Mi(e.slice(2)), t];
}
let Gl = 0;
const tb = /* @__PURE__ */ Promise.resolve(), nb = () => Gl || (tb.then(() => Gl = 0), Gl = Date.now());
function rb(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    _r(
      ib(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = nb(), r;
}
function ib(e, t) {
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
const Qd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ob = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? By(e, n, a) : t === "style" ? Xy(e, r, n) : ol(t) ? al(t) || Qy(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ab(e, t, n, a)) ? (Xd(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qd(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Jt(n))) ? Xd(e, wn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), qd(e, t, n, a));
};
function ab(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qd(t) && lt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Qd(t) && Jt(r) ? !1 : t in e;
}
function sb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = wn(t);
  return Array.isArray(r) ? r.some((i) => wn(i) === n) : Object.keys(r).some((i) => wn(i) === n);
}
const ef = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ot(t) ? (r) => is(t, r) : t;
};
function lb(e) {
  e.target.composing = !0;
}
function tf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wl = /* @__PURE__ */ Symbol("_assign");
function nf(e, t, r) {
  return t && (e = e.trim()), r && (e = bu(e)), e;
}
const rf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Wl] = ef(i);
    const o = n || i.props && i.props.type === "number";
    Li(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Wl](nf(e.value, r, o));
    }), (r || o) && Li(e, "change", () => {
      e.value = nf(e.value, r, o);
    }), t || (Li(e, "compositionstart", lb), Li(e, "compositionend", tf), Li(e, "change", tf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Wl] = ef(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? bu(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, cb = ["ctrl", "shift", "alt", "meta"], ub = {
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
  exact: (e, t) => cb.some((r) => e[`${r}Key`] && !t.includes(r))
}, Nt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = ub[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, db = /* @__PURE__ */ yn({ patchProp: ob }, Ky);
let of;
function fb() {
  return of || (of = ky(db));
}
const Ou = ((...e) => {
  const t = fb().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = hb(n);
    if (!i) return;
    const o = t._component;
    !lt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, pb(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function pb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hb(e) {
  return Jt(e) ? document.querySelector(e) : e;
}
const mb = "PanoramaSuite.Debug.Diagnostics", gb = "PanoramaSuite.Debug.ExportDiagnostics", Kl = "pano_suite.diagnostics.v1", af = "pano_suite.diagnostics.previous.v1", yb = 300, bb = 2e5, vb = 100, _b = 20, Sb = 1e3, wb = 2, Ha = 1024 * 1024;
function Ur(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function xb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function kb() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: xb,
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
function Mb(e = {}) {
  const t = { ...kb(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    d.delete(C), f.collected += 1;
  }) : null, m = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    u.delete(C), g.collected += 1;
  }) : null, p = /* @__PURE__ */ new Set(), E = { created: 0, lost: 0, restored: 0, disposed: 0 }, U = [], z = /* @__PURE__ */ new Map();
  let W = { count: 0, maxMs: 0 }, k = /* @__PURE__ */ new Map(), te = { count: 0, maxMs: 0 };
  const K = [];
  function ce(C, ae, b = void 0) {
    U.push(b === void 0 ? { t: t.clock(), type: C, label: ae } : { t: t.clock(), type: C, label: ae, detail: b }), U.length > vb && U.shift();
  }
  function O(C, ae, b, S, $) {
    if (!r || !S || !t.WeakRef) return S;
    const H = { ref: new t.WeakRef(S), label: $ };
    return C.add(H), ae == null || ae.register(S, H), b.created += 1, S;
  }
  function fe(C, ae = "") {
    return O(d, _, f, C, ae);
  }
  function F(C, ae = "") {
    return O(u, m, g, C, ae);
  }
  function J({ label: C = "", width: ae, height: b, offscreen: S = !1 } = {}) {
    const $ = globalThis.OffscreenCanvas;
    let H;
    return S && typeof $ < "u" ? H = new $(ae, b) : (H = t.document().createElement("canvas"), ae !== void 0 && b !== void 0 && (H.width = ae, H.height = b)), fe(H, C);
  }
  function G(C) {
    C.width = 0, C.height = 0, r && (f.released += 1);
  }
  function Q(C = t.document(), ae = "") {
    var b;
    return F(((b = C == null ? void 0 : C.createElement) == null ? void 0 : b.call(C, "video")) || null, ae);
  }
  function Y(C, ae) {
    if (!r || !C) return () => {
    };
    const b = { label: ae, lost: !1, disposed: !1 };
    p.add(b), E.created += 1, ce("webgl-created", ae);
    const S = () => {
      b.disposed || (b.lost = !0, E.lost += 1, ce("webglcontextlost", ae));
    }, $ = () => {
      b.disposed || (b.lost = !1, E.restored += 1, ce("webglcontextrestored", ae));
    };
    return C.addEventListener("webglcontextlost", S), C.addEventListener("webglcontextrestored", $), () => {
      b.disposed || (b.disposed = !0, p.delete(b), E.disposed += 1, ce("webgl-disposed", ae));
    };
  }
  function oe(C, ae) {
    return z.set(C, ae), () => {
      z.get(C) === ae && z.delete(C);
    };
  }
  function ie() {
    return r ? t.now() : -1;
  }
  function x(C) {
    if (C < 0 || !r) return;
    const ae = t.now() - C;
    W.count += 1, W.maxMs = Math.max(W.maxMs, ae);
  }
  function T(C, ae) {
    if (ae < 0 || !r) return;
    const b = t.now() - ae, S = k.get(C) ?? { count: 0, maxMs: 0 };
    S.count += 1, S.maxMs = Math.max(S.maxMs, b), k.set(C, S);
  }
  function Z() {
    let C = 0, ae = 0, b = 0, S = [0, 0];
    const $ = {};
    for (const H of d) {
      const v = H.ref.deref();
      if (!v) continue;
      C += 1;
      const w = v.width * v.height;
      w > 0 && (ae += 1), b += w, w > S[0] * S[1] && (S = [v.width, v.height]);
      const L = $[H.label] ?? ($[H.label] = [0, 0]);
      L[0] += 1, L[1] += w;
    }
    return { ...f, alive: C, sized: ae, pixels: b, mb: Ur(b * 4 / Ha, 1), largest: S, byLabel: $ };
  }
  function V() {
    const C = [];
    let ae = 0, b = 0;
    for (const S of u) {
      const $ = S.ref.deref();
      if (!$) continue;
      ae += 1;
      const H = !$.paused && !$.ended;
      H && (b += 1), C.length < _b && C.push({
        label: S.label,
        playing: H,
        src: !!($.currentSrc || $.src),
        size: [$.videoWidth || 0, $.videoHeight || 0],
        ready: $.readyState ?? 0,
        connected: !!$.isConnected
      });
    }
    return { ...g, alive: ae, playing: b, list: C };
  }
  function pe() {
    const C = t.now(), ae = t.memory(), b = {
      t: t.clock(),
      heap: ae ? { used: Ur(ae.usedJSHeapSize / Ha, 1), total: Ur(ae.totalJSHeapSize / Ha, 1), limit: Ur(ae.jsHeapSizeLimit / Ha, 1) } : null,
      canvas: Z(),
      webgl: { ...E, alive: [...p].filter((S) => !S.lost).length },
      video: V(),
      frame: { count: W.count, maxMs: Ur(W.maxMs), longTasks: te.count, longTaskMaxMs: Ur(te.maxMs) },
      renders: Object.fromEntries([...k].map(([S, $]) => [S, { count: $.count, maxMs: Ur($.maxMs) }])),
      sources: Object.fromEntries([...z].map(([S, $]) => [S, $()])),
      costMs: Ur(c, 3)
    };
    return W = { count: 0, maxMs: 0 }, k = /* @__PURE__ */ new Map(), te = { count: 0, maxMs: 0 }, K.push({ record: b, text: JSON.stringify(b) }), K.length > yb && K.shift(), l += 1, l % wb === 0 && ee(), c = t.now() - C, b;
  }
  function Se(C = bb) {
    const ae = JSON.stringify({ ...o, events: U }).slice(0, -1);
    let b = C - ae.length - 14, S = K.length;
    for (; S > 0 && b - K[S - 1].text.length - 1 >= 0; )
      S -= 1, b -= K[S].text.length + 1;
    return `${ae},"records":[${K.slice(S).map(($) => $.text).join(",")}]}`;
  }
  function ee() {
    if (!o) return;
    const C = t.storage();
    if (C) {
      o.savedAt = t.clock();
      try {
        C.setItem(Kl, Se());
      } catch {
      }
    }
  }
  function I() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", ee();
  }
  function X() {
    var $;
    if (n) return i;
    n = !0;
    const C = t.storage();
    if (!C) return null;
    let ae = null;
    try {
      if (ae = C.getItem(Kl), ae === null) {
        const H = C.getItem(af);
        return i = H === null ? null : JSON.parse(H), i;
      }
      C.setItem(af, ae), C.removeItem(Kl), i = JSON.parse(ae);
    } catch {
      return i;
    }
    const b = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], S = b.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${b.length} records kept. Its last records:`,
      JSON.stringify(S)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || (($ = b.at(-1)) == null ? void 0 : $.t) || 0).toISOString()}; ${b.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(S)
    ), i;
  }
  function se(C) {
    const ae = C === !0;
    if (X(), ae !== r) {
      if (r = ae, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, K.length = 0, s = t.observeLongTasks((b) => {
          for (const S of b)
            te.count += 1, te.maxMs = Math.max(te.maxMs, S.duration);
        }), t.addUnload(I), a = t.setInterval(pe, Sb), ee();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(I), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", ee();
    }
  }
  function be() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...U], records: K.map((C) => C.record) } : null,
      previous: i
    };
  }
  function we() {
    const C = t.document(), ae = new Blob([JSON.stringify(be(), null, 1)], { type: "application/json" }), b = URL.createObjectURL(ae), S = C.createElement("a");
    S.href = b, S.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, S.click(), setTimeout(() => URL.revokeObjectURL(b), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: J,
    releaseCanvas: G,
    trackCanvas: fe,
    createVideo: Q,
    trackVideo: F,
    watchContext: Y,
    addSource: oe,
    frameStart: ie,
    frameEnd: x,
    renderEnd: T,
    sample: pe,
    serialize: Se,
    recoverPrevious: X,
    setEnabled: se,
    exportData: be,
    download: we
  };
}
const Fn = Mb(), rn = Fn.createCanvas, ea = Fn.releaseCanvas, Ul = Fn.trackCanvas, ya = Fn.createVideo, sf = Fn.trackVideo, Pb = Fn.addSource, Nb = Fn.frameStart, Cb = Fn.frameEnd;
function wh(e, t) {
  const r = Fn.watchContext(e.canvas, t), n = Fn.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = Fn.frameStart(), l = o(a);
    return Fn.renderEnd(t, s), l;
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
const Ab = {
  id: mb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Fn.setEnabled(e === !0)
}, lf = {
  id: gb,
  label: "Export Panorama Suite diagnostics",
  function: () => Fn.download()
};
function Ri(e, t) {
  const r = rn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Ib() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function cf(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, c = -1;
  for (let u = 0; u < i; u += 1)
    for (let f = 0; f < n; f += 1)
      o[(u * n + f) * 4 + 3] <= t || (f < a && (a = f), u < s && (s = u), f > l && (l = f), u > c && (c = u));
  return l < a || c < s ? null : {
    minX: a,
    minY: s,
    maxX: l,
    maxY: c,
    width: l - a + 1,
    height: c - s + 1,
    aspect: Number(((l - a + 1) / Math.max(1, c - s + 1)).toFixed(4))
  };
}
function Fu(e, t) {
  return rn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function qr(e, t, r) {
  if (!e) return Ri(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Bt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Bl = null, Yl = null, uf = null, df = null, Ut = null, Mo = null;
function Eb() {
  if (Yl) return Yl;
  const e = 6, t = 17, r = rn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Yl = r, r;
}
function ql(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Bl = qr(Bl, r, n);
  const i = Bl;
  Bt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", df !== i.ctx && (uf = i.ctx.createPattern(Eb(), "repeat"), df = i.ctx), i.ctx.fillStyle = uf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Ob(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Fb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Tb(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Db(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const $t = /* @__PURE__ */ new Map(), Tu = 128;
function Lb(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if ($t.has(l)) {
    const U = $t.get(l);
    return $t.delete(l), $t.set(l, U), U;
  }
  $t.size >= Tu && $t.delete($t.keys().next().value);
  const c = a * 2 + 2, d = a + 1, u = Fu(c, c), f = u.getContext("2d"), g = s * a, _ = a + 1, m = `rgba(${r},${n},${i},${o})`, p = `rgba(${r},${n},${i},0)`, E = f.createRadialGradient(d, d, g, d, d, _);
  return E.addColorStop(0, m), E.addColorStop(1, p), f.fillStyle = E, f.fillRect(0, 0, c, c), $t.set(l, u), u;
}
function Rb(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), m = Math.max(0, Math.min(1, a ?? 0)), p = `chisel:${u}:${f}:${r.toFixed(2)}:${s}:${l}:${c}:${d.toFixed(3)}:${g.toFixed(2)}:${_.toFixed(2)}:${m.toFixed(2)}`;
  if ($t.has(p)) {
    const ce = $t.get(p);
    return $t.delete(p), $t.set(p, ce), ce;
  }
  $t.size >= Tu && $t.delete($t.keys().next().value);
  const E = Fu(u, f), U = E.getContext("2d"), z = U.createImageData(u, f), W = z.data, k = Math.max(0, e - t), te = Math.max(0, Math.min(1, r)), K = 1 + g;
  for (let ce = 0; ce < f; ce++)
    for (let O = 0; O < u; O++) {
      const fe = O + 0.5 - e, F = ce + 0.5 - t, J = Math.max(Math.abs(fe) - k, 0), Q = Math.hypot(J, F) / t;
      if (Q >= 1) continue;
      const Y = Q <= te ? 1 : Math.max(0, (1 - Q) / Math.max(1e-4, 1 - te)), oe = 1 - Q, ie = 1 + g * (1 - oe) * (1 - oe), x = 1 - _ * oe * oe, T = ie * x / K;
      let Z = 1;
      if (m > 0) {
        const Se = Math.floor((F + t) / 1.5), ee = Math.floor((fe + e) / 8), I = bi(Yi(Se * 41 + 500, ee * 19 + 300));
        Z = 1 - m * 0.42 * I;
      }
      const V = Math.round(255 * Math.min(1, d * Y * T * Z));
      if (V <= 0) continue;
      const pe = (ce * u + O) * 4;
      W[pe] = s, W[pe + 1] = l, W[pe + 2] = c, W[pe + 3] = V;
    }
  return U.putImageData(z, 0, 0), $t.set(p, E), E;
}
function Yi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function bi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Vb(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(s) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = bi(Yi(e * 17 + 3, t * 13 + 7)), g = u + o * 0.22 * (f - 0.5);
  if (g >= 1) return 0;
  const _ = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), m = $b(e, t, s, l, r, n), p = o * 0.55;
  if (m < p) return 0;
  const U = 0.45 + 0.55 * ((m - p) / Math.max(1e-4, 1 - p));
  return Math.round(255 * Math.min(1, a * _ * U));
}
function $b(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = bi(Yi(a * 13 + 700, s * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = bi(Yi(c * 23 + 800, d * 29 + 500)), f = bi(Yi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function zb(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if ($t.has(f)) {
    const U = $t.get(f);
    return $t.delete(f), $t.set(f, U), U;
  }
  $t.size >= Tu && $t.delete($t.keys().next().value);
  const g = Fu(c, d), _ = g.getContext("2d"), m = _.createImageData(c, d), p = m.data, E = Math.max(0, Math.min(1, r));
  for (let U = 0; U < d; U++)
    for (let z = 0; z < c; z++) {
      const W = Vb(z, U, e, t, E, u, l);
      if (W <= 0) continue;
      const k = (U * c + z) * 4;
      p[k] = o, p[k + 1] = a, p[k + 2] = s, p[k + 3] = W;
    }
  return _.putImageData(m, 0, 0), $t.set(f, g), g;
}
function xh(e, t, r) {
  var m, p;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Tb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = jb(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((m = t == null ? void 0 : t.angle) == null ? void 0 : m.value) ?? 0), c = Db(t, i), d = String(((p = t == null ? void 0 : t.targetSpace) == null ? void 0 : p.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, g = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (n === "chisel") {
    const E = i * s, U = i, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), W = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), k = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = Rb(E, U, o, a, z, W, k);
  } else if (n === "crayon") {
    const E = i * s, U = i, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = zb(E, U, o, a, z);
  } else
    _ = Lb(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: r, aspect: s, angle: l, stampKind: n, scatter: g, latitudeCorrection: u };
}
function jb(e) {
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
function Hb(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function ff(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Du(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = Yi(t, r);
    for (let g = 0; g < d; g++) {
      const _ = bi(f + g * 2) * Math.PI * 2, m = Math.sqrt(bi(f + g * 2 + 1)) * u, p = t + Math.cos(_) * m, E = r + Math.sin(_) * m, U = Math.max(0.5, e.radiusPx * i * 0.48), z = (0.5 - E / Math.max(1, e.desc.height)) * Math.PI, W = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, k = U * e.aspect * W;
      ff(e, p, E, U, k);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  ff(e, t, r, o, l);
}
function pf(e, t, r) {
  const n = Fb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = xh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let g = Number(n[f].u || 0) * i;
    const _ = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(g - s[f - 1].x) > i * 0.5 && (g += g < s[f - 1].x ? i : -i), s.push({ x: g, y: _ });
  }
  if (Du(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], c = s[0], d = s[0], u = 0;
  for (let f = 1; f < s.length; f++) {
    const g = s[f], _ = { x: (c.x + g.x) * 0.5, y: (c.y + g.y) * 0.5 };
    f === 1 ? u = ta(a, d.x, d.y, _.x, _.y, u) : u = Fs(a, l, d, _, g, u), l = c, c = g, d = _;
  }
  s.length === 2 ? ta(a, d.x, d.y, c.x, c.y, u) : Fs(a, l, d, c, c, u), e.restore();
}
function ls(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = Hb(t), s = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const g = Ob(n[f]);
    let _ = Number(g.x || 0) * i;
    f > 0 && Math.abs(_ - s[f - 1].x) > i * 0.5 && (_ += _ < s[f - 1].x ? i : -i), s.push({ x: _, y: Number(g.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function d(f) {
    e.beginPath(), e.moveTo(s[0].x + f, s[0].y);
    for (let g = 1; g < s.length; g++) e.lineTo(s[g].x + f, s[g].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function Ga(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    ls(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? pf(e, t, r) : (Mo = qr(Mo, r.width, r.height), Bt(Mo), pf(Mo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Mo.canvas, 0, 0), e.restore());
}
function ai(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ta(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Du(e, t + a * d, r + s * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Fs(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = s, f = u + l, g = f + c, _ = f - u, m = 16;
  let p = o, E = r.x, U = r.y;
  for (let z = 1; z <= m; z++) {
    const W = u + _ * z / m, k = ((u - W) * t.x + (W - d) * r.x) / (u - d), te = ((u - W) * t.y + (W - d) * r.y) / (u - d), K = ((f - W) * r.x + (W - u) * n.x) / (f - u), ce = ((f - W) * r.y + (W - u) * n.y) / (f - u), O = ((g - W) * n.x + (W - f) * i.x) / (g - f), fe = ((g - W) * n.y + (W - f) * i.y) / (g - f), F = ((f - W) * k + (W - d) * K) / (f - d), J = ((f - W) * te + (W - d) * ce) / (f - d), G = ((g - W) * K + (W - u) * O) / (g - u), Q = ((g - W) * ce + (W - u) * fe) / (g - u), Y = ((f - W) * F + (W - u) * G) / (f - u), oe = ((f - W) * J + (W - u) * Q) / (f - u);
    p = ta(e, E, U, Y, oe, p), E = Y, U = oe;
  }
  return p;
}
function Gb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let c = t * a;
  if (l && Math.abs(c - l.prev.x) > a * 0.5 && (c += c < l.prev.x ? a : -a), !l) {
    const g = xh(i, n, o), _ = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), m = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), p = String((n == null ? void 0 : n.toolKind) || "") === "eraser", E = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Du(g, c, s, 1), e.activeStroke = {
      pprev: { x: c, y: s },
      prev: { x: c, y: s },
      lastMidX: c,
      lastMidY: s,
      stampTex: g.stampTex,
      radiusPx: g.radiusPx,
      spacingPx: g.spacingPx,
      aspect: g.aspect,
      angle: g.angle,
      stampKind: g.stampKind,
      scatter: g.scatter,
      latitudeCorrection: g.latitudeCorrection,
      strokeOpacity: _,
      velocityWidthFactor: m,
      distSinceStamp: 0,
      isEraser: p,
      layerKind: E,
      pointCount: 1
    }, cn(e);
    return;
  }
  const d = (l.prev.x + c) * 0.5, u = (l.prev.y + s) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = ta(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Fs(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: s }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, cn(e);
}
function bl(e = {}) {
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
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let g = null;
  function _(G) {
    return {
      actionGroupId: G,
      descriptor: n,
      committedPaint: Ri(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function m(G) {
    let Q = i.get(G);
    return Q || (Q = _(G), i.set(G, Q)), Q;
  }
  function p(G) {
    return d === "mask" ? a : c ? m(c) : s;
  }
  function E(G) {
    var T;
    const Q = !u || u.length !== G.length || G.some((Z, V) => Z !== u[V]), Y = d === "paint" && ((T = c ? i.get(c) : s) == null ? void 0 : T.activeStroke) || null;
    let oe = a.displayDirty || s.displayDirty || Q;
    for (const Z of G) {
      const V = i.get(Z);
      if (V != null && V.displayDirty) {
        oe = !0;
        break;
      }
    }
    if (Y && (oe = !0), !oe) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const Z of G) {
      const V = i.get(Z);
      V && (V.displayDirty = !1);
    }
    u = [...G];
    const ie = l.ctx;
    Bt(l);
    const x = !!(Y != null && Y.isEraser);
    for (const Z of G) {
      const V = i.get(Z);
      if (!V) continue;
      const Se = c === V.actionGroupId && d === "paint" ? V.activeStroke : null;
      if (x)
        Ut = qr(Ut, t, r), Bt(Ut), Ut.ctx.drawImage(V.committedPaint.canvas, 0, 0), ai(Ut.ctx, o.canvas), ie.drawImage(Ut.canvas, 0, 0);
      else if (ie.drawImage(V.committedPaint.canvas, 0, 0), Se) {
        const ee = V.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Se.strokeOpacity ?? 1));
        ie.save(), ie.globalAlpha = ee, ie.drawImage(o.canvas, 0, 0), ie.restore();
      }
    }
  }
  function U(G) {
    var Y, oe, ie, x, T;
    for (const Z of i.values())
      Bt(Z.committedPaint), Bt(Z.currentStroke), Z.activeStroke = null, cn(Z);
    Bt(a.committedMask), Bt(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), cn(a), cn(s), u = null;
    const Q = [
      ...Array.isArray((oe = (Y = G == null ? void 0 : G.painting) == null ? void 0 : Y.paint) == null ? void 0 : oe.strokes) ? G.painting.paint.strokes : [],
      ...Array.isArray((x = (ie = G == null ? void 0 : G.painting) == null ? void 0 : ie.mask) == null ? void 0 : x.strokes) ? G.painting.mask.strokes : []
    ];
    for (const Z of Q) {
      if (((T = Z == null ? void 0 : Z.targetSpace) == null ? void 0 : T.kind) !== "ERP_GLOBAL") continue;
      const V = String((Z == null ? void 0 : Z.layerKind) || "paint"), Se = String((Z == null ? void 0 : Z.toolKind) || "pen") === "eraser";
      if (V === "mask") {
        const ee = a.descriptor;
        Se ? (Ut = qr(Ut, ee.width, ee.height), Bt(Ut), Ga(Ut.ctx, Z, ee), ai(a.committedMask.ctx, Ut.canvas)) : (Ga(a.committedMask.ctx, Z, ee), a.painted = !0);
        continue;
      }
      if (Se) {
        Ut = qr(Ut, n.width, n.height), Bt(Ut), Ga(Ut.ctx, Z, n);
        for (const ee of i.values())
          ai(ee.committedPaint.ctx, Ut.canvas), cn(ee);
      } else {
        const ee = String((Z == null ? void 0 : Z.actionGroupId) || "__default__"), I = m(ee), X = I.descriptor;
        Ga(I.committedPaint.ctx, Z, X), cn(I);
      }
    }
    E([...i.keys()]);
  }
  function z(G, Q) {
    d = String((G == null ? void 0 : G.layerKind) || "");
    const Y = String((G == null ? void 0 : G.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Bt(a.currentStroke), a.activeStroke = null, cn(a);
    else {
      const oe = Y ? s : m(String((G == null ? void 0 : G.actionGroupId) || "__default__"));
      c = Y ? "" : String((G == null ? void 0 : G.actionGroupId) || "__default__"), Bt(oe.currentStroke), oe.activeStroke = null, cn(oe);
    }
  }
  function W(G, Q) {
    var V;
    const Y = String((G == null ? void 0 : G.layerKind) || "paint"), oe = String((G == null ? void 0 : G.toolKind) || "") === "eraser", ie = Y === "mask" ? a : oe ? s : m(String((G == null ? void 0 : G.actionGroupId) || c || "__default__")), x = ie.activeStroke, T = ie.descriptor;
    if (x && x.pointCount > 1) {
      const pe = ie.currentStroke.ctx;
      pe.globalCompositeOperation = "source-over";
      const Se = {
        ctx: pe,
        stampTex: x.stampTex,
        radiusPx: x.radiusPx,
        spacingPx: x.spacingPx,
        desc: T,
        aspect: x.aspect,
        angle: x.angle,
        stampKind: x.stampKind,
        scatter: x.scatter,
        latitudeCorrection: x.latitudeCorrection
      };
      x.pointCount === 2 ? ta(Se, x.lastMidX, x.lastMidY, x.prev.x, x.prev.y, x.distSinceStamp) : Fs(Se, x.pprev, { x: x.lastMidX, y: x.lastMidY }, x.prev, x.prev, x.distSinceStamp);
    }
    ie.lassoPreviewActive && (Bt(ie.currentStroke), ls(ie.currentStroke.ctx, G, T), ie.lassoPreviewActive = !1);
    const Z = Y === "mask" ? a.committedMask : ie.committedPaint;
    if (oe && Y === "paint")
      for (const pe of i.values())
        ai(pe.committedPaint.ctx, ie.currentStroke.canvas), cn(pe);
    else if (oe)
      ai(Z.ctx, ie.currentStroke.canvas);
    else {
      Y === "mask" && (a.painted = !0);
      const pe = Math.max(0, Math.min(1, (x == null ? void 0 : x.strokeOpacity) ?? 1));
      Z.ctx.save(), Z.ctx.globalAlpha = pe, Z.ctx.drawImage(ie.currentStroke.canvas, 0, 0), Z.ctx.restore();
    }
    Ib() && (String((G == null ? void 0 : G.toolKind) || ""), String((T == null ? void 0 : T.kind) || ""), Number((T == null ? void 0 : T.width) || 0), Number((T == null ? void 0 : T.height) || 0), String(((V = G == null ? void 0 : G.targetSpace) == null ? void 0 : V.viewMode) || ""), Number((G == null ? void 0 : G.aspect) ?? 1), cf(ie.currentStroke.canvas), cf(Z.canvas), void 0), Bt(ie.currentStroke), ie.activeStroke = null, cn(ie), f.clear(), c = null, d = "", E([...i.keys()]);
  }
  function k(G) {
    if (d === "mask")
      Bt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (d === "paint" && !c)
      Bt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (c) {
      const Q = i.get(c);
      Q && (Bt(Q.currentStroke), Q.activeStroke = null, Q.lassoPreviewActive = !1, cn(Q));
    }
    f.clear(), c = null, d = "", E([...i.keys()]);
  }
  function te(G, Q) {
    var oe;
    if (d = String((G == null ? void 0 : G.layerKind) || ""), String(((oe = G == null ? void 0 : G.geometry) == null ? void 0 : oe.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Bt(a.currentStroke), ls(a.currentStroke.ctx, G, a.descriptor), a.lassoPreviewActive = !0, cn(a);
      else {
        const ie = String((G == null ? void 0 : G.toolKind) || "") === "eraser", x = ie ? s : m(String((G == null ? void 0 : G.actionGroupId) || c || "__default__"));
        c = ie ? "" : String((G == null ? void 0 : G.actionGroupId) || c || "__default__"), Bt(x.currentStroke), ls(x.currentStroke.ctx, G, x.descriptor), x.lassoPreviewActive = !0, cn(x);
      }
      E([...i.keys()]);
    }
  }
  function K(G) {
    return E(G ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ce(G) {
    return i.get(String(G)) ?? null;
  }
  function O() {
    return [...i.keys()];
  }
  function fe(G) {
    var pe;
    const Q = i.get(String(G));
    if (!Q) return null;
    const Y = d === "paint" && c === Q.actionGroupId, oe = d === "paint" && ((pe = c ? i.get(c) : s) == null ? void 0 : pe.activeStroke) || null, ie = !!(oe != null && oe.isEraser), x = Y ? Q.activeStroke : null;
    if (!ie && !x) return Q.committedPaint.canvas;
    const T = `${Q.revision}:${s.revision}:${ie}`, Z = f.get(Q.actionGroupId);
    if ((Z == null ? void 0 : Z.key) === T) return Z.surface.canvas;
    const V = qr((Z == null ? void 0 : Z.surface) ?? null, t, r);
    return Bt(V), V.ctx.drawImage(Q.committedPaint.canvas, 0, 0), ie ? ai(V.ctx, o.canvas) : (V.ctx.save(), V.ctx.globalAlpha = Q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, x.strokeOpacity ?? 1)), V.ctx.drawImage(o.canvas, 0, 0), V.ctx.restore()), f.set(Q.actionGroupId, { key: T, surface: V }), V.canvas;
  }
  function F() {
    const G = d === "mask" ? a.activeStroke : null;
    return !a.painted && (!G || G.isEraser) ? null : `${a.revision}:${!!G}`;
  }
  function J() {
    const G = F();
    if (G === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === G) return g.surface.canvas;
    const Q = qr((g == null ? void 0 : g.surface) ?? null, t, r);
    Bt(Q);
    const Y = d === "mask" ? a.activeStroke : null;
    return Y != null && Y.isEraser ? (Ut = qr(Ut, t, r), Bt(Ut), Ut.ctx.drawImage(a.committedMask.canvas, 0, 0), ai(Ut.ctx, o.canvas), ql(Q.ctx, Ut.canvas)) : (ql(Q.ctx, a.committedMask.canvas), Y && ql(Q.ctx, o.canvas)), g = { key: G, surface: Q }, Q.canvas;
  }
  return {
    rebuildCommitted: U,
    beginStroke: z,
    appendStrokePoint: Gb,
    updateActiveStroke: te,
    commitActiveStroke: W,
    cancelActiveStroke: k,
    getErpTarget: K,
    ensureTarget: p,
    getGroupTarget: ce,
    getGroupDisplayCanvas: fe,
    getMaskDisplayCanvas: J,
    getMaskDisplayRevision: F,
    getAllGroupIds: O
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function jt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Lu(e, t) {
  let r = jt(t) - jt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Ec = 3;
function Po(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ts(e, t = 0) {
  const r = Po(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Po(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Po(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Po(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Po(t) || 0);
}
function kh(e) {
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
const hf = Math.PI / 180, mf = 0.12, Wb = Ec, Kb = 35, Ub = 140, Oo = 100, Bb = 20, gf = 0.8;
function Yb(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Oo), 1, 179) * hf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / hf;
}
function Ru(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Oo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(U, z = null) {
    s && s(U, z);
  }
  function d(U, z, W = null, k = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(U || 0), l.drag.lastY = Number(z || 0), l.drag.lastTs = Number(k || performance.now()), l.drag.pointerId = W, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: W }), !0;
  }
  function u(U, z, W = "pano", k = performance.now()) {
    if (!l.drag.active) return !1;
    const te = Number(k || performance.now()), K = Number(U), ce = Number(z), O = K - l.drag.lastX, fe = ce - l.drag.lastY;
    l.drag.lastX = K, l.drag.lastY = ce, l.drag.lastTs = te;
    const F = n() || { x: 1, y: 1 }, J = Number(F.x || 1), G = Number(F.y || 1), Q = { ...t() };
    let Y = 0, oe = 0;
    if (W === "unwrap") {
      const x = i() || { w: 1, h: 1 }, T = Math.max(1, Number(x.w || 1)), Z = Math.max(1, Number(x.h || 1)), V = O / T, pe = fe / Z;
      Y = -V * 360 * J, oe = pe * 180 * G;
    } else {
      const x = o() || { w: 0, h: 0 }, T = Math.max(1, Number(x.w || 0)), Z = Math.max(1, Number(x.h || 0));
      if (T > 1 && Z > 1) {
        const V = Ee(Number(Q.fov || Oo), 1, 179), pe = Ee(Yb(V, T, Z), 0.1, 179);
        Y = -(O / T) * V * J, oe = fe / Z * pe * G;
      } else
        Y = -O * mf * J, oe = fe * mf * G;
    }
    Q.yaw = jt(Number(Q.yaw || 0) + Y), Q.pitch = Ee(Number(Q.pitch || 0) + oe, -89.9, 89.9), r(Q), l.velHistory.push({ ts: te, yaw: Q.yaw, pitch: Q.pitch });
    let ie = 0;
    for (; ie < l.velHistory.length - 1 && l.velHistory[ie].ts < te - 100; ) ie++;
    return ie > 0 && l.velHistory.splice(0, ie), l.inertia.active = !1, l.inertia.lastTs = te, a(), c("drag", { phase: "move", dx: O, dy: fe, dYaw: Y, dPitch: oe }), !0;
  }
  function f(U = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const z = Number(U || performance.now());
    l.drag.lastTs = z;
    const W = l.velHistory.filter((te) => z - te.ts <= 80);
    if (W.length >= 2) {
      const te = W[0], K = W.at(-1), ce = Math.max(1e-3, (K.ts - te.ts) / 1e3);
      let O = K.yaw - te.yaw;
      O > 180 && (O -= 360), O < -180 && (O += 360), l.inertia.vx = O / ce, l.inertia.vy = (K.pitch - te.pitch) / ce;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const k = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = k > Bb, l.inertia.lastTs = z, c("drag", { phase: "end", speed: k, inertiaActive: l.inertia.active }), !0;
  }
  function g(U = performance.now()) {
    if (!l.inertia.active) return !1;
    const z = Number(U || performance.now()), W = Math.max(1e-3, (z - (l.inertia.lastTs || z)) / 1e3);
    l.inertia.lastTs = z;
    const k = { ...t() };
    k.yaw = jt(Number(k.yaw || 0) + l.inertia.vx * W), k.pitch = Ee(Number(k.pitch || 0) + l.inertia.vy * W, -89.9, 89.9);
    const te = Math.exp(-5.5 * W);
    return l.inertia.vx *= te, l.inertia.vy *= te, Math.abs(l.inertia.vx) < gf && Math.abs(l.inertia.vy) < gf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(k), a(), l.inertia.active;
  }
  function _() {
    const U = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], U;
  }
  function m(U) {
    const z = Math.sign(Number(U || 0));
    if (!z) return !1;
    const W = { ...t() }, k = Number(W.fov || Oo);
    return W.fov = Ee(k + z * Wb, Kb, Ub), r(W), a(), c("wheel", { deltaSign: z, fovBefore: k, fovAfter: W.fov }), !0;
  }
  function p(U, z = 0) {
    return m(Ts(U, z));
  }
  function E() {
    r({ yaw: 0, pitch: 0, fov: Oo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: g,
    stopMotion: _,
    applyWheel: m,
    applyWheelEvent: p,
    resetView: E
  };
}
const kt = Math.PI / 180, en = 180 / Math.PI;
function Bn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ds(e, t) {
  return Bn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ls(e, t) {
  return Bn(e.x * t, e.y * t, e.z * t);
}
function Xl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Vu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Bn(e.x / t, e.y / t, e.z / t);
}
function En(e, t) {
  const r = e * kt, n = t * kt, i = Math.cos(n);
  return Bn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function so(e, t, r = 0) {
  const n = Number(e || 0) * kt, i = Number(t || 0) * kt, o = r * kt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Bn(
      a * d - s * c * u,
      l * u,
      -s * d - a * c * u
    ),
    up: Bn(
      -a * u - s * c * d,
      l * d,
      s * u - a * c * d
    ),
    fwd: Bn(s * l, c, a * l)
  };
}
function Rs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ct(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function qb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Xb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Ct(n.z_index ?? n.zIndex, t.length);
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
function Jb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Zb(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Ct(e.t, 0), n = Ct(e.widthScale, null), i = Ct(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Ct(e.u, null), a = Ct(e.v, null);
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
    const o = Ct(e.u, null), a = Ct(e.v, null);
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
function Wa(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Zb(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Qb(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Wa(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Wa(e.points, t, 1);
  if (!o) return null;
  const a = Wa(e.rawPoints, t, 1), s = Wa(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function ev(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Jb(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Qb(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Ct(e.size, null), a = Ct(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const c = Ct(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, Ct(f.r, 0))),
      g: Math.max(0, Math.min(1, Ct(f.g, 0))),
      b: Math.max(0, Math.min(1, Ct(f.b, 0))),
      a: Math.max(0, Math.min(1, Ct(f.a, 1)))
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
    hardness: Ct(e.hardness, null),
    flow: Ct(e.flow, null),
    spacing: Ct(e.spacing, null),
    createdAt: Math.trunc(Ct(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function yf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = ev(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function tv(e) {
  if (!e || typeof e != "object") return null;
  const t = Ct(e.u0, null), r = Ct(e.v0, null), n = Ct(e.u1, null), i = Ct(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function nv(e) {
  const t = e || {};
  return {
    du: Ct(t.du, 0) ?? 0,
    dv: Ct(t.dv, 0) ?? 0,
    rot_deg: Ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ct(t.scale, 1) ?? 1)
  };
}
function rv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = tv(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: nv(e.transform)
  } : null;
}
function iv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = rv(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function lo(e) {
  const t = qb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Xb(e.groups),
    paint: yf(e.paint, "paint"),
    mask: yf(e.mask, "mask"),
    raster_objects: iv(e.raster_objects)
  };
}
const Yn = 1, qn = 179, Oc = 85;
function vl(e) {
  const t = ((at(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Mh(e, t) {
  let r = at(e, 0) - at(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Ph(e, t, { shiftKey: r = !1 } = {}) {
  let n = at(e, 0) + at(t, 0) * en;
  return r && (n = Math.round(n / 15) * 15), vl(n);
}
function at(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ei(e = {}) {
  const t = Ee(at(e.hFOV_deg || 90, 90), Yn, qn), r = Ee(at(e.vFOV_deg || 60, 60), Yn, qn), n = Math.tan(t * kt * 0.5), i = Math.tan(r * kt * 0.5);
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
function wi(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ei(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function $u(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, at(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function zu(e, t) {
  const r = Math.max(1e-12, at(t, 1)), n = Math.max(1e-6, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * en, Yn, qn), a = Ee(2 * Math.atan(i / (2 * r)) * en, Yn, qn);
  return { hFOV_deg: o, vFOV_deg: a };
}
function ov(e, t, r) {
  const n = at(e == null ? void 0 : e.x, 0), i = at(e == null ? void 0 : e.y, 0), o = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = ei(t), l = Math.max(1e-12, at(r, 1)), c = 2 * l * s.tanHalfX, d = 2 * l * s.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (a - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function ju(e, t, r = Oc) {
  const n = Math.max(1e-12, at(t, 1)), i = Ee(at(r, Oc), 1, 89.999), o = n * Math.tan(i * kt), a = Math.max(1, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function Nh(e, t, r) {
  const n = Math.max(1e-12, at(t, 1));
  return {
    x: (at(r == null ? void 0 : r.x, 0) - at(e == null ? void 0 : e.x, 0)) / n,
    y: -(at(r == null ? void 0 : r.y, 0) - at(e == null ? void 0 : e.y, 0)) / n
  };
}
function av(e, t) {
  const r = Ee(at(e, 90), Yn, qn), n = Math.max(1e-6, at(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * kt * 0.5) / n) * en,
    Yn,
    qn
  );
}
function cs(e, t) {
  const r = Ee(at(e, 60), Yn, qn), n = Math.max(1e-6, at(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * kt * 0.5) * n) * en,
    Yn,
    qn
  );
}
function bf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function sv(e, t) {
  const r = bf(e, 1), n = bf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (c, d) => d ? s(d, c % d) : c, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function Pi(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * kt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * kt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function vi(e) {
  const t = Pi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || sv(t, 1);
}
function Hu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = vi(t), t;
}
function Ch({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, Yn, qn) : Ee(Math.min(42, at(i, 100) * 0.42), 8, 96);
  return Hu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: at(t, 0),
    pitch_deg: Ee(at(r, 0), -89.9, 89.9),
    roll_deg: vl(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Tr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : vi(e);
}
function Ah(e, t) {
  const r = ei(e), n = at(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * en, o = 2 * Math.atan(r.tanHalfY * n) * en;
  return i < Yn || i > qn || o < Yn || o > qn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Ih(e, t, r = Ec) {
  const n = Math.sign(at(t, 0)), i = Math.abs(at(r, Ec));
  if (!n || !(i > 0)) return null;
  const o = ei(e), a = o.hFovDeg + n * i;
  if (a < Yn || a > qn) return null;
  const s = Math.tan(a * kt * 0.5);
  return Ah(e, s / o.tanHalfX);
}
function Eh(e, t) {
  const r = ei(e), n = so(r.yawDeg, r.pitchDeg, r.rollDeg), i = at(t == null ? void 0 : t.x, 0), o = at(t == null ? void 0 : t.y, 0);
  return Vu(Ds(Ds(n.fwd, Ls(n.right, i)), Ls(n.up, o)));
}
function lv(e) {
  return Bn(e.x, e.y, -e.z);
}
function us(e) {
  return Bn(e.x, e.y, -e.z);
}
function xn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = so(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Oh(e) {
  const t = us(Bn(e[0][0], e[1][0], e[2][0])), r = us(Bn(e[0][1], e[1][1], e[2][1])), n = us(Bn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * en, pitchDeg: o * en, rollDeg: l * en };
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
  const [[t, r, n], [i, o, a], [s, l, c]] = e, d = t + o + c;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - a) * f, y: (n - s) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + s) / f, w: (l - a) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (r + i) / f, y: 0.25 * f, z: (a + l) / f, w: (n - s) / f };
  }
  const u = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + s) / u, y: (a + l) / u, z: 0.25 * u, w: (i - r) / u };
}
function Ka(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const hi = 1e-6, Fc = 1e-6, cv = 1e-9;
function ra(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function uv(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (a + s);
    ra(0, r, i, 1, c) < t ? a = c : s = c;
  }
  return ra(0, n, o, 1, 0.5 * (a + s));
}
function to(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function no(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((f) => -f / i), s = n.map((f) => f / o);
  if (a.reduce((f, g, _) => f + g * s[_], 0) < 0) return r.map(() => 0);
  const l = a.map((f, g) => (f * o + s[g] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((g, _) => g + _ * _, 0)), d = 3 * Math.min(c(a), c(s)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function Fh(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((d, u) => o[u] - d);
  let l = s;
  to(e, n) && (l = no(t, n, r[n - 1].map((d, u) => d - i[u]), s).map((d) => d * a));
  let c = s;
  return to(e, n + 1) && (c = no(t, n + 1, s.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * a)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function Th(e, t, r, n, i) {
  const [[o], [a]] = Fh(e, t, r.map((s) => [s]), n);
  return ra(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function dv(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, a] = Fh(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, a = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => ra(s[u], s[u] + o[u], l[u] + a[u], l[u], n));
}
function Vs([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function fv(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Jl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function pv([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Tc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Hi(e, t) {
  return pv(Vs([-e[0], -e[1], -e[2], e[3]], t));
}
function Zl(e, t, r) {
  return Vs(e, Tc(Hi(e, t).map((n) => r * n)));
}
function Ql(e, t) {
  const r = fv(e, t);
  if (Math.abs(r) > Fc) return r < 0;
  const [n, i, o] = Hi(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Fc) return a < 0;
  return !1;
}
function Ua(e) {
  const { x: t, y: r, z: n, w: i } = ti(xn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Dc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function hv(e, t, r, n) {
  const i = Ua(e[r].value);
  let o = Ua(e[r + 1].value);
  Ql(i, o) && (o = Jl(o));
  const a = t[r + 1] - t[r], s = Hi(i, o);
  let l = s;
  if (to(e, r)) {
    let k = Ua(e[r - 1].value);
    Ql(k, i) && (k = Jl(k)), l = no(t, r, Hi(i, k), s).map((te) => te * a);
  }
  let c = s;
  if (to(e, r + 1)) {
    let k = Ua(e[r + 2].value);
    Ql(o, k) && (k = Jl(k)), c = no(t, r + 1, Hi(o, i), Hi(o, k)).map((te) => te * a);
  }
  const d = Vs(i, Tc(l.map((k, te) => 0.5 * (k - s[te])))), u = Vs(o, Tc(s.map((k, te) => 0.5 * (k - c[te])))), [f, g, _, m] = Zl(Zl(i, o, n), Zl(d, u, n), 2 * n * (1 - n)), { yawDeg: p, pitchDeg: E, rollDeg: U } = Oh(na({ x: f, y: g, z: _, w: m })), z = e[r].value, W = e[r + 1].value;
  return {
    yaw_deg: Dc(p, z.yaw_deg, W.yaw_deg, n),
    pitch_deg: E,
    roll_deg: Dc(U, z.roll_deg, W.roll_deg, n)
  };
}
function ia(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function $s(e) {
  return Math.sqrt(ia(e, e));
}
function zs(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function Dh(e, t) {
  const r = ia(e, t), n = t.map((a, s) => a - r * e[s]), i = $s(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Vi(e, t) {
  const r = $s(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function Ba(e, t, r) {
  return Vi(e, Dh(e, t).map((n) => r * n));
}
function ec(e, t) {
  const r = zs(e[t].value), n = zs(e[t + 1].value), i = ia(r, n), o = i < 0 && $s(n.map((l, c) => l - i * r[c])) <= Fc;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = Dh(r, n);
  const s = $s(a);
  return [a, a.map((l, c) => Math.cos(s) * l - s * Math.sin(s) * r[c]), o];
}
function mv(e, t, r, n) {
  const i = zs(e[r].value), o = zs(e[r + 1].value), [a, s, l] = ec(e, r);
  let c = a, d = s;
  const u = t[r + 1] - t[r];
  to(e, r) && (c = no(t, r, ec(e, r - 1)[1].map((z) => -z), c).map((z) => z * u)), to(e, r + 1) && (d = no(t, r + 1, d.map((z) => -z), ec(e, r + 1)[0]).map((z) => z * u));
  let f, g, _;
  if (l) {
    const z = Math.PI, W = ra(0, ia(c, a) / z / 3, z - ia(d, s) / z / 3, z, n);
    [f, g, _] = Vi(i, a.map((k) => W * k / z));
  } else {
    const z = Ba(Vi(i, c.map((te) => te / 3)), Vi(o, d.map((te) => -te / 3)), n), W = Ba(Vi(i, c.map((te) => n * te / 3)), z, n), k = Ba(z, Vi(o, d.map((te) => -(1 - n) * te / 3)), n);
    [f, g, _] = Ba(W, k, n);
  }
  const m = Math.hypot(f, _), p = e[r].value.yaw_deg, E = e[r + 1].value.yaw_deg;
  return { yaw_deg: m <= cv ? p + (E - p) * n : Dc(Math.atan2(f, _) * 180 / Math.PI, p, E, n), pitch_deg: Math.atan2(g, m) * 180 / Math.PI };
}
function gv(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Th(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function yv(e, t, r, n) {
  return Th(e, t, e.map((i) => i.value), r, n);
}
const bv = { position: dv, rotation: hv, direction: mv, size: gv };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Ka(e[t].value);
  if (r <= n[0].frame + hi) return Ka(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - hi) return Ka(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + hi; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= hi || a.easing === "hold") return Ka(a.value);
  const s = n.map((c) => c.frame), l = uv(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (bv[t] ?? yv)(n, s, o, l);
}
function Lc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function vv(e) {
  return Math.min(1, Math.max(0, e));
}
function Lh(e) {
  return Math.max(1e-6, e);
}
function Rh(e, t) {
  return t - (e.start - e.in);
}
function co(e, t) {
  return t >= e.start - hi && (e.duration === null || t < e.start + e.duration - hi);
}
function ba(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: Lc(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function va(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Rh(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : ba(n, r),
    scene: {
      active: i.visible && co(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: Lh(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => xi(a, r))
  };
}
function _v(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: Lh(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: Lc(r.hFOV_deg),
    vFOV_deg: Lc(r.vFOV_deg)
  };
}
function xi(e, t) {
  const r = Rh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && co(e.clip, t),
    clip_frame: r,
    ..._v(e, r),
    opacity: vv(Wt(e, "opacity", r))
  };
}
const Sv = 2, wv = ["sky", "world"], Rc = ["perspective", "erp"], xv = ["input", "output", "temp"], Vh = [0.42, 0, 0.58, 1], $h = 1, Gu = 1e3, Vc = 1e7, Wu = Vc;
function nn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Ku(e, t) {
  const r = qt(e, t);
  return r !== null && r > 0 ? r : t;
}
function Tn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function _l(e) {
  const t = qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ds(e) {
  const t = _l(e);
  return t === null ? null : Tn(t, -Vc, Vc);
}
function uo(e) {
  const t = Ku(e, null);
  return t === null ? null : Tn(t, $h, Gu);
}
function zh(e) {
  const t = _l(e);
  return t !== null && t >= 1 ? Math.min(t, Wu) : null;
}
function oa(e, t) {
  return typeof e == "boolean" ? e : t;
}
function jh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => qt(r, null));
  return t.includes(null) ? null : t;
}
function Hh(e) {
  return jh(e) || [0, 0, 0];
}
function Gh(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: Tn(qt(t.pitch_deg, 0), -90, 90),
    roll_deg: qt(t.roll_deg, 0)
  };
}
function kv(e) {
  return Tn(qt(e, 90), 0.1, 179);
}
function Mv(e) {
  return Ku(e, 1);
}
function Pv(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: Tn(qt(t.pitch_deg, 0), -90, 90)
  };
}
function Nv(e) {
  return qt(e, 0);
}
function Cv(e) {
  const t = nn(e) ? e : {};
  return {
    hFOV_deg: Tn(qt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Tn(qt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Wh(e) {
  return Tn(qt(e, 1), 0, 1);
}
const Sl = [["position", Hh], ["rotation", Gh], ["fov", kv]], wl = [["position", Hh], ["rotation", Gh], ["scale", Mv]], Uu = [["direction", Pv], ["roll", Nv], ["size", Cv], ["opacity", Wh]], Bu = [...wl, ["opacity", Wh]];
function Av(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => qt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Vh];
}
function Iv(e) {
  if (!nn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = jh(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function Ev(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!nn(i)) continue;
    const o = ds(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: Av(i.easing) }, s = r ? Iv(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Yu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = nn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: Ev(o.keyframes, i, n === "position") };
  }
  return r;
}
function Kh(e) {
  const t = nn(e) ? e : {}, r = ds(t.start), n = ds(t.in), i = ds(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Ov(e) {
  const t = nn(e) ? e : {}, r = Tn(qt(t.x0, 0), 0, 1), n = Tn(qt(t.y0, 0), 0, 1), i = Tn(qt(t.x1, 1), 0, 1), o = Tn(qt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function Fv(e) {
  if (!nn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: xv.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Tv(e) {
  const t = Fv(e.source);
  if (!t) return null;
  const r = wv.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Kh(e.clip),
    visible: oa(e.visible, !0),
    locked: oa(e.locked, !1),
    crop: Ov(e.crop),
    ...Yu(e, n ? Bu : Uu)
  };
  return n || (i.z_index = _l(e.z_index) ?? 0), i;
}
function Dv(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = nn(o) ? Tv(o) : null;
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
function Uh(e) {
  if (!nn(e)) return null;
  const t = Rc.includes(e.projection) ? e.projection : Rc[0];
  return { aspect: Ku(e.aspect, 1), projection: t, visible: oa(e.visible, !0), ...Yu(e, Sl) };
}
function qu() {
  return Uh({});
}
function js(e) {
  const t = nn(e.timeline) ? e.timeline : {}, r = nn(e.scene) ? e.scene : {};
  return {
    version: Sv,
    timeline: {
      fps: uo(t.fps) ?? 24,
      length: zh(t.length)
    },
    camera: Uh(e.camera),
    scene: { clip: Kh(r.clip), visible: oa(r.visible, !0), ...Yu(r, wl) },
    stickers: Dv(e.stickers),
    painting: lo(e.painting),
    painting_layer: nn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: oa(e.painting_visible, !0)
  };
}
function Lv(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!nn(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function Rv(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!nn(t)) return null;
  const r = Tn(qt(t.hFOV_deg, 90), 1, 179), n = Tn(qt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Vv(e) {
  const t = nn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(nn) : [];
  return r.sort((n, i) => qt(n.z_index, 0) - qt(i.z_index, 0)), js({
    camera: Rv(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: Lv(n, t),
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
function tr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return js({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!nn(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? Vv(t) : js(t);
}
const tc = {
  state: { painting_visible: !0 },
  camera: { projection: Rc[0], visible: !0 },
  scene: { visible: !0 }
};
function nc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function $c(e) {
  return JSON.stringify({
    ...nc(e, tc.state),
    camera: e.camera && nc(e.camera, tc.camera),
    scene: nc(e.scene, tc.scene)
  });
}
function rc(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function vf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function aa(e, t) {
  const r = uo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => _l(s * n), { length: o } = e.timeline, a = vf(e.scene.clip, i);
  return js({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...rc(e.camera, Sl, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...rc(e.scene, wl, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: c, newAnchor: d } = vf(s.clip, i), u = s.placement === "world" ? Bu : Uu;
      return { ...s, clip: l, ...rc(s, u, i, c, d) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function ic(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Bh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Yh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= hi);
}
function qh(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Bh(e.keyframes[n - 1].easing) : [...Vh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function mn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = ic(i.value, n);
    return;
  }
  const o = Yh(i, r);
  o ? o.value = ic(o.value, n) : qh(i, r, ic(Wt(e, t, r), n));
}
function fo(e) {
  return e.placement === "world" ? Bu.map(([t]) => t) : e.placement === "sky" ? Uu.map(([t]) => t) : (e.clip ? wl : Sl).map(([t]) => t);
}
function $v(e, t) {
  for (const r of fo(e))
    Yh(e[r], t) || qh(e[r], t, Wt(e, r, t));
}
function zv(e) {
  const t = fo(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function oc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function jv(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Hv(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Wt(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function Gv(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((d) => o.has(d.frame)).map((d) => ({ ...d, frame: d.frame + n })), c = new Set(l.map((d) => d.frame));
    s.keyframes = [
      ...s.keyframes.filter((d) => !o.has(d.frame) && !c.has(d.frame)),
      ...l
    ].sort((d, u) => d.frame - u.frame);
  }
  return n;
}
function Xh(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function Wv(e, t, r) {
  const n = Xh(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function Kv(e, t, r, n) {
  for (const i of Xh(e, t, r)) i.easing = Bh(n);
}
function Uv(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Bv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function Yv(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function qv(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Hs(e) {
  return fo(e).map((t) => e[t]);
}
function Xv(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? Hs(e.camera).some((n) => n.keyframes.length > 0) : Jh(e, { camera: r });
}
function Gs(e) {
  return Hs(e).some((t) => t.keyframes.length > 0) || !!e.clip && !qv(e.clip);
}
function Jh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Gs);
}
const Jv = 1e5;
function Zh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of Hs(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of Hs(a))
      for (const c of l.keyframes) o = Math.max(o, s.start - s.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : Jv;
}
function Zv(e) {
  return e > 0 ? uo(Math.min(e, Gu)) : null;
}
function Qv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : zh(Math.max(1, Math.min(e, Wu)));
}
const ac = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], e1 = 2e3;
function t1(e, t, r = 56) {
  const n = ac.find((o) => o * t >= r) || ac[ac.length - 1], i = [];
  for (let o = 0; o < e && i.length < e1; o += n) i.push(o);
  return i;
}
function n1(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Ya = { text: null, parsed: null };
function kn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ws(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function r1({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: kn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: lo(null),
    painting_layer: null,
    ui_settings: Ws(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Qh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function i1(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function o1(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function a1(e) {
  return Array.isArray(e) ? e.map((t) => Hu(t)) : [];
}
function s1(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function em(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = r1(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Ya.text === i ? o = Ya.parsed : (o = JSON.parse(i), Ya = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: i1(o.assets),
      stickers: o1(o.stickers),
      shots: a1(o.shots),
      painting: lo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Ws(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Ws({ ...s.ui_settings, ...a })), s.output_preset = Qh(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = kn(r.coverage), delete s.editor_history, s;
  } catch {
    return Ya = { text: i, parsed: null }, n;
  }
}
function l1(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function c1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function u1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function tm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, c = uo(t.fps);
  let d;
  try {
    d = tr(e);
  } catch {
    d = tr(null);
  }
  c && c !== d.timeline.fps && (d = aa(d, c));
  const u = l && d.camera === null;
  if (u && (d = { ...d, camera: qu() }), s) {
    let f = tr(s);
    c && c !== f.timeline.fps && (f = aa(f, c)), d = { ...f, camera: d.camera, cutout_state: d };
  }
  return {
    ...d,
    ...u ? { default_camera: !0 } : {},
    coverage: kn(i),
    bg_color: n,
    output_preset: Qh(r),
    ui_settings: Ws(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function d1(e, t) {
  e.cutout_state && (e.cutout_state = aa(e.cutout_state, t));
  const r = aa(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of fo(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Xu(e, t) {
  const r = xi(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const f1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function _f(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function p1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[f1[r]].keyframes.length));
}
function nm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = _f(r, ["yaw_deg", "pitch_deg"]), o = _f(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && mn(e, "direction", n, i), r.rot_deg !== void 0 && mn(e, "roll", n, r.rot_deg), Object.keys(o).length && mn(e, "size", n, o);
}
const xl = ["position_x", "position_y", "position_z"], kl = "camera";
function rm(e, t) {
  const r = ba(e, t);
  return Hu({
    id: kl,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: av(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function h1(e) {
  return tr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: jt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function m1(e) {
  return e - 360 * Math.round(e / 360);
}
function g1(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + m1(r[o] - n[o]));
  Object.keys(i).length && mn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && mn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * kt * 0.5) / Math.tan(r.vFOV_deg * kt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && mn(e, "position", t, [...r.position]);
}
function y1(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(xl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function b1(e, t, r, n) {
  const i = xl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, mn(e, "position", t, o);
  } else r === "hFOV_deg" ? mn(e, "fov", t, n) : mn(e, "rotation", t, { [r]: n });
}
function v1(e, t, r) {
  mn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function _1(e, t) {
  const r = xi(e, t);
  return {
    ...Object.fromEntries(xl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function S1(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = xl.indexOf(r);
  if (o >= 0) {
    const a = Wt(e, "position", i);
    a[o] = n, mn(e, "position", i, a);
  } else r === "scale" ? mn(e, "scale", i, n) : r === "opacity" ? mn(e, "opacity", i, n / 100) : mn(e, "rotation", i, { [r]: n });
}
function w1(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && mn(e, i, n, r[i]);
}
function x1(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function k1(e, t, r) {
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
function fs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ks(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ju(e, t, r, n) {
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
function M1(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = jt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function zc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function im(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function om(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function am(e) {
  e.default_camera && JSON.stringify(tr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(qu()) && delete e.default_camera;
}
function sm(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = tr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(qu()) && (r.camera = null), $c(r);
}
function lm(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = tr(r);
    if ($c(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && $c(aa(i, o)) === t;
  } catch {
    return !1;
  }
}
const sc = 0.15, P1 = 0.01, N1 = 1e-3, C1 = 0.05, A1 = 4, Sf = 250, I1 = 16, nr = 1, E1 = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function jn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function yr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Ml(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function po(e, t, r = 0) {
  const n = xn(e, t, r), i = yr(n, 2);
  return { right: yr(n, 0), up: yr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function O1(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function jc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function F1(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : jc(e, "3dof", r);
}
function T1(e) {
  return po(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function D1(e) {
  return jn(e.position, po(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function ni(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Uo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Zu(e, t) {
  return Uo(ni(t, e.position), po(e.yaw_deg, e.pitch_deg).forward);
}
function Qu(e) {
  return Math.max(e, 1e-6) * C1;
}
function Hc(e, t, r = null, n = nr) {
  if (t) return t;
  const i = Qu(n);
  if (r && Zu(e, r) > 0) {
    const o = ni(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : jn(e.position, o, i / a);
  }
  return jn(e.position, po(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function cm(e, t = nr) {
  return Math.max(e.distance, Qu(t));
}
function um(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > A1 ? !1 : t.time - e.time < Sf || e.cost > I1 && t.time - e.wheelTime < Sf;
}
function ed(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * kt);
  return { tanX: n, tanY: n * r / t };
}
function dm(e, t, r, n, i = D1(e)) {
  const o = e.roll_deg ?? 0, [a, s] = L1(t, r, o), l = jt(e.yaw_deg + a / n * 360), c = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), d = xn(e.yaw_deg, e.pitch_deg, o), u = xn(l, c, o), f = ni(e.position, i), g = [0, 1, 2].map((m) => Uo(yr(d, m), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: jn(i, Ml(u, g)) };
  return { ..._, distance: Zu(_, i) };
}
function L1(e, t, r) {
  const n = Math.cos(r * kt), i = Math.sin(r * kt);
  return [e * n + t * i, t * n - e * i];
}
function fm(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = T1(e), l = 2 * o * ed(e, n, i).tanY / i;
  return { ...e, position: jn(jn(e.position, a, -t * l), s, r * l), distance: o };
}
function pm(e, t, r, n = nr) {
  const i = ni(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * P1, l = r > 0 ? Math.min(Math.max(o * sc, s), o - a * N1) : -Math.max(o * sc / (1 - sc), s);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: jn(e.position, i, l / o) };
  return { ...c, distance: Math.max(Zu(c, t), Qu(n)) };
}
function hm(e, t, r, n) {
  const { tanX: i, tanY: o } = ed(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = po(e.yaw_deg, e.pitch_deg);
  return { ...e, position: jn(t.center, l, -s), distance: s };
}
function td(e, t, r, n = null) {
  return mm({
    quaternion: ti(xn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(ed(e, t, r).tanY) * en,
    aspect: t / r
  }, e.position, e.distance, n);
}
function mm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: nr }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function sa(e, t, r, n) {
  const { right: i, up: o, forward: a } = gm(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * kt), d = c * e.aspect, u = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function gm(e) {
  const t = na(e.quaternion), r = yr(t, 2);
  return { right: yr(t, 0), up: yr(t, 1), forward: r.map((n) => -n) };
}
function Us(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function R1({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function nd(e, t) {
  if (!e || !t.active) return null;
  const r = V1(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Gc(t),
    itemQuaternion: e.kind === "splat" ? E1 : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function ym(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = nd(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function bm(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function V1(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Gc(e) {
  return {
    position: [...e.position],
    quaternion: ti(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Wc(e, t) {
  return jn(e.position, Ml(xn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function ps(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Kc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function Uc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function $1(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...Kc(t).map((o) => Wc(e.scene, o)));
  for (const o of r) i.push(...rd(o));
  for (const { box: o, value: a } of n) i.push(...Kc(o).map((s) => Wc(a, s)));
  return i;
}
function z1(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ti(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: xn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function rd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => jn(e.position, Ml(e.rotation, [n, i, 0])));
}
function j1(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Uc(rd(i)) : o != null && o.box ? Uc(Kc(ps(o.kind, o.box)).map((a) => Wc(n, a))) : { center: [...n.position], radius: n.scale };
}
const H1 = 2, G1 = 0.5, W1 = 30;
function vm(e, t) {
  const r = ni(t, e), n = Math.atan2(r[0], -r[2]) * en, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * en;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function K1(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * G1 : H1, o = t ? [...t] : jn(e.position, po(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...ni(o, e.position)), s = a > 0 ? vm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(W1 * 0.5 * kt);
  return { position: o, rotation: s, scale: l };
}
function wf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function U1(e) {
  return [0, 1, 2].map((t) => yr(e, t));
}
function xf(e, t, r, n) {
  if (e === "translate") return { position: jn(t.position, ni(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * J1(r.scale, n.scale) / r.scale };
  const i = wf(na(n.quaternion), U1(na(r.quaternion))), o = wf(i, xn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Oh(o);
  return Math.abs(s) <= B1 ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: Y1(o, t.yaw_deg) } };
}
const B1 = 89.9;
function Y1(e, t) {
  const r = yr(e, 0), n = yr(e, 1), i = Math.cos(t * kt), o = Math.sin(t * kt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * en + 0;
}
const q1 = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function X1(e, t, r, n, i) {
  if (!sa(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = gm(e), l = ni(t, e.position), c = Uo(l, o), d = Uo(l, a), u = Uo(l, s), f = Math.tan(e.fovY_deg * 0.5 * kt), g = f * e.aspect, _ = Math.hypot(c, d, u) * q1[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > _)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const m = (W) => {
    const k = _ * Math.sqrt(W * W + u * u - _ * _);
    return [(W * u - k) / (u * u - _ * _), (W * u + k) / (u * u - _ * _)];
  }, [p, E] = m(c), [U, z] = m(d);
  return {
    minX: n * 0.5 * (1 + p / g),
    maxX: n * 0.5 * (1 + E / g),
    minY: i * 0.5 * (1 - z / f),
    maxY: i * 0.5 * (1 - U / f)
  };
}
function J1(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function Z1(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function _m(e, t) {
  const r = xn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * kt) * t, i = n / e.aspect, o = (c, d, u) => jn(e.position, Ml(r, [c, d, u])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((c) => [e.position, c]);
  a.forEach((c, d) => s.push([c, a[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function Q1(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = sa(e, a, n, i), c = sa(e, s, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Ee(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function e_(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function t_(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function n_(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const Sm = 0.28;
function wm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * kt);
  return {
    quaternion: ti(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * en,
    aspect: n
  };
}
function Bo(e) {
  const t = ei(e);
  return {
    quaternion: ti(xn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function xm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = ju(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * en,
      vFOV_deg: 2 * Math.atan(o / n) * en
    }
  };
}
function km(e, t, r) {
  const [[n, i, o], [a, s, l], [c, d, u]] = na(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * kt), g = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, m = 1e-4) {
      const p = lv(_), E = n * p.x + a * p.y + c * p.z, U = i * p.x + s * p.y + d * p.z, z = -(o * p.x + l * p.y + u * p.z), W = Math.max(z, m);
      return {
        x: t * 0.5 * (1 + E / W / g),
        y: r * 0.5 * (1 - U / W / f),
        z
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, m) {
      const p = (_ / t * 2 - 1) * g, E = (1 - m / r * 2) * f;
      return Vu(us({
        x: n * p + i * E - o,
        y: a * p + s * E - l,
        z: c * p + d * E - u
      }));
    }
  };
}
function Mm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = va(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const c = o.stickers[l];
    if (s.placement !== "sky") return;
    const d = s.source.kind === "port" && !s.visible;
    if (!c.active && !d) return;
    const u = r(s);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * kt), g = Math.tan(c.vFOV_deg * 0.5 * kt), { crop: _ } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Sm : c.opacity,
      zIndex: n(s),
      quaternion: ti(xn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * f,
        x1: (2 * _.x1 - 1) * f,
        y0: (1 - 2 * _.y1) * g,
        y1: (1 - 2 * _.y0) * g
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function Pm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return Mm(e, t, {
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
function r_(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Nm(e, t, r, { media: n, evaluated: i = va(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const c = i.stickers[l];
    if (s.placement !== "world" || !c.active) return;
    const d = o.get(s.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: g } = r_(u.media), _ = z1(c, s.crop, f, g);
    _ && a.push({
      id: s.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: _.position,
      quaternion: _.quaternion,
      rotation: _.rotation,
      width: _.width,
      height: _.height,
      crop: s.crop
    });
  }), a;
}
function i_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((s) => s.$) }) {
  let s = null, l = null, c = !1, d = 0;
  const u = () => {
    l = wh(s.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(m) {
      return l && !f.lost ? l.render(m) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(m) {
      return l && !f.lost ? l.renderUnwrap(m) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(m, p) {
      return l && !f.lost ? l.resize(m, p) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(m, p) {
      l && !f.lost && l.clear(m, p);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(m) {
      l && !f.lost && l.releaseSplats(m);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(m) {
      return l ? l.sceneBox(m) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(m, p, E, U, z) {
      return l && !f.lost ? l.pick(m, p, E, U, z) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, p, E, U, z) {
      return l && !f.lost ? l.pickSurface(m, p, E, U, z) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, p, E, U, z) {
      return l && !f.lost ? l.pickSticker(m, p, E, U, z) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, p, E, U, z, W) {
      return l && !f.lost ? l.gizmoPointer(m, p, E, U, z, W) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", g), e.removeEventListener("webglcontextrestored", _), l == null || l.dispose(), l = null;
    }
  };
  function g(m) {
    m.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function _() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, s && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", g), e.addEventListener("webglcontextrestored", _), a().then((m) => {
    c || (s = m, !f.lost && (u(), f.ready = !0, t()));
  }).catch((m) => {
    console.error("[PanoramaStickers] three.js view is unavailable", m), f.failed = !0, r();
  }), f;
}
const Cm = "3D view unavailable. Check the browser console.";
function Bs(e, t, r) {
  return wm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function o_(e) {
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
const Am = o_(
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => wh(e.createThreeView({ createCanvas: () => rn({ label: "three.node" }) }), "node"))
), rr = ["erp_image", "bg_erp", "bg_media"], hs = ["source"], id = ["sticker_image", "sticker"], Im = ["scene"], a_ = {
  background: [...rr, ...hs],
  "external-sticker": [...id, ...hs],
  scene: [...Im, ...hs]
};
function Em(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Pl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = Em(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function Om(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function kf(e, t) {
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
function Fm(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function s_(e, t) {
  const { graph: r, entry: n } = Fm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = Em(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const Tm = [...rr, ...id, ...Im, ...hs], l_ = 256, $i = /* @__PURE__ */ new Map(), lc = /* @__PURE__ */ new WeakMap();
let Dm = () => null;
function Lm(e) {
  return lc.has(e) || lc.set(e, JSON.stringify(e)), lc.get(e);
}
function c_(e) {
  Dm = e;
}
function Ys(e, t) {
  const r = Lm(e);
  $i.delete(r), $i.set(r, t), $i.size > l_ && $i.delete($i.keys().next().value);
}
function Xt(e, t) {
  var o;
  const r = e ? Dm(e) : null;
  if (!r) return !0;
  const n = Pl(e);
  let i = $i.get(Lm(r));
  if (i)
    Ys(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => Tm.includes(a == null ? void 0 : a.name)))) return !0;
    Ys(r, n), i = n;
  }
  return a_[t].every((a) => i[a] === n[a]);
}
const qs = /* @__PURE__ */ new WeakSet();
async function Bc(e, t) {
  if (qs.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && qs.add(e), r.ok && n !== void 0 ? n : null;
}
function Rm(e, t) {
  var o, a, s, l, c;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = Fm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => Tm.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: s_(r, t) };
}
const ms = /* @__PURE__ */ new Map();
function u_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ms.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Bc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = Rm(i, o);
        a && Ys(a.output, a.inputs);
      }
    });
}
const d_ = 5;
function f_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${d_}`, n = Bc(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Bc(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var c, d, u, f;
      const l = String(a.id);
      for (const { id: g } of await n) {
        if (!s()) return null;
        const _ = await o(g);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (u = (d = _.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : Rm(_, l);
      }
      return null;
    }
  };
}
function p_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let Fi = null;
async function h_(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || qs.has(r) || (s = ms.get(i)) != null && s.has(n) || p_(t)) return null;
  (Fi == null ? void 0 : Fi.workflowId) !== i && (Fi = { workflowId: i, history: f_(r, i) }, queueMicrotask(() => {
    Fi = null;
  }));
  const a = await Fi.history.lastNodeOutput(e, o);
  return o() ? a ? (Ys(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (qs.has(r) || ms.set(i, (ms.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Mf(e, t, r, n = rr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const Pf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function gs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Pf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Pf.test(String((e == null ? void 0 : e.filename) || ""));
}
const cc = /* @__PURE__ */ new WeakMap();
function m_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Yc(e) {
  return m_(e) ? (cc.has(e) || cc.set(e, Math.random().toString(36).slice(2, 10)), cc.get(e)) : "run";
}
function Vm(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function g_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function od(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const c = n(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function y_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = ya(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, d = () => i(), u = () => {
    i(), l();
  }, f = () => i();
  let g = !1;
  const _ = () => {
    g = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), s || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", _), n.src = t, n.load();
  const m = () => {
    o || g || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, p = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var U, z;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", _), n.pause(), (U = n.removeAttribute) == null || U.call(n, "src"), (z = n.load) == null || z.call(n));
    },
    failed: () => g,
    play: m,
    pause: p,
    toggle() {
      n.paused ? m() : p();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function si(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function b_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Nf(e, t, r = null) {
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
  return !n && r != null && (n = b_(e == null ? void 0 : e.graph, r)), n;
}
function v_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function __(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function S_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function $m({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (k) => {
    if (!k) return "";
    if (typeof k == "string") return String(k || "").trim();
    if (Array.isArray(k)) {
      if (k.length === 0) return "";
      if (k.length === 1) return i(k[0]);
      const te = String(k[0] || "").trim();
      if (te)
        return si(t, {
          filename: te,
          subfolder: String(k[1] || "").trim(),
          type: String(k[2] || "output").trim() || "output"
        });
      for (const K of k) {
        const ce = i(K);
        if (ce) return ce;
      }
      return "";
    }
    return typeof (k == null ? void 0 : k.src) == "string" && k.src ? k.src : typeof (k == null ? void 0 : k.url) == "string" && k.url ? k.url : si(t, k);
  }, o = (k) => {
    if (!k || typeof k != "object") return "";
    const te = String(k.type || "").trim().toLowerCase();
    if (te === "dataurl") return String(k.value || "");
    if (te !== "comfy_image") return "";
    const K = String(k.filename || "").trim();
    return K ? si(t, {
      filename: K,
      subfolder: String(k.subfolder || ""),
      type: String(k.storage || "input")
    }) : "";
  }, a = (k) => {
    const te = e == null ? void 0 : e.nodeOutputs;
    if (!te || k == null) return null;
    const K = String(k);
    return te instanceof Map ? te.get(k) || te.get(K) || te.get(Number(K)) || null : te[k] || te[K] || null;
  }, s = (k, te) => {
    var ce;
    const K = a(k == null ? void 0 : k.id);
    return Array.isArray((ce = K == null ? void 0 : K.ui) == null ? void 0 : ce[te]) ? K.ui[te] : Array.isArray(K == null ? void 0 : K[te]) ? K[te] : [];
  }, l = (k, te) => {
    const K = a(k == null ? void 0 : k.id);
    return K != null && K.ui && Object.prototype.hasOwnProperty.call(K.ui, te) ? K.ui[te] : K && Object.prototype.hasOwnProperty.call(K, te) ? K[te] : null;
  }, c = (k, te) => {
    const K = l(k, "pano_sticker_input_state_hash"), ce = Array.isArray(K) ? K[0] : K;
    return String(ce ?? "").trim() || S_(te);
  }, d = (k) => {
    const te = [], K = /* @__PURE__ */ new Set();
    for (const ce of k || []) {
      const O = i(ce);
      !O || K.has(O) || (K.add(O), te.push(O));
    }
    return te;
  }, u = (k, te) => {
    var O;
    const K = [];
    Array.isArray(k == null ? void 0 : k.images) && k.images.length && K.push(k.images), Array.isArray((O = k == null ? void 0 : k.ui) == null ? void 0 : O.images) && k.ui.images.length && K.push(k.ui.images);
    const ce = [];
    for (const fe of K)
      te >= 0 && te < fe.length && ce.push(fe[te]), ce.push(...fe);
    return ce;
  }, f = (k, te) => {
    var T;
    const K = String(te || "").trim();
    if (!K) return { src: "", sourceType: "", inputName: "" };
    const O = (Array.isArray(k == null ? void 0 : k.inputs) ? k.inputs : []).findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === K);
    if (O < 0) return { src: "", sourceType: "", inputName: K };
    const fe = k.graph ? k.getInputLink(O) : null;
    if ((fe == null ? void 0 : fe.origin_id) == null) return { src: "", sourceType: "", inputName: K };
    const F = fe.origin_id, J = Nf(k, O, F);
    if (!J) return { src: "", sourceType: "", inputName: K };
    const G = Number(fe.origin_slot ?? 0);
    let Q = [];
    try {
      Q = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      Q = [];
    }
    if (Array.isArray(Q) && Q.length) {
      const Z = [];
      G >= 0 && G < Q.length && Z.push(Q[G]), Z.push(...Q);
      const V = d(Z.filter((pe) => !gs(pe)));
      if (V.length)
        return { src: V[0], srcCandidates: V, sourceType: "appNodeImageUrls", inputName: K };
    }
    const Y = a((J == null ? void 0 : J.id) ?? F), oe = d(u(Y, G).filter((Z) => !gs(Z))).map((Z) => `${Z}&pano_src=${Yc(Y)}`);
    if (oe.length)
      return { src: oe[0], srcCandidates: oe, sourceType: "nodeOutputs", inputName: K };
    const ie = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (ie.length) {
      const Z = [];
      G >= 0 && G < ie.length && Z.push(ie[G]), Z.push(...ie);
      const V = d(Z);
      if (V.length)
        return { src: V[0], srcCandidates: V, sourceType: "nodeImgs", inputName: K };
    }
    const x = (T = J == null ? void 0 : J.widgets) == null ? void 0 : T.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (x) {
      let Z = i(x.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (Z = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`), Z) return { src: Z, sourceType: "widget", inputName: K };
    }
    return { src: "", sourceType: "", inputName: K };
  }, g = (k, te = []) => {
    var ce;
    const K = Array.isArray(k == null ? void 0 : k.inputs) ? k.inputs : [];
    for (const O of te) {
      const fe = K.findIndex((Q) => String((Q == null ? void 0 : Q.name) || "") === O), F = fe >= 0 && k.graph ? k.getInputLink(fe) : null;
      if ((F == null ? void 0 : F.origin_id) == null) continue;
      const J = a(((ce = Nf(k, fe, F.origin_id)) == null ? void 0 : ce.id) ?? F.origin_id), G = (Array.isArray(J == null ? void 0 : J.images) ? J.images : []).find(gs);
      return G ? `${si(t, G)}&pano_src=${Yc(J)}` : "";
    }
    return "";
  }, _ = (k, te = []) => {
    const K = Array.isArray(te) ? te : [te];
    for (const ce of K) {
      const O = f(k, ce);
      if (String((O == null ? void 0 : O.src) || "").trim()) return O;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, m = (k) => {
    const te = String(k || "").trim();
    if (!te) return [];
    if (v_(te)) return [te];
    const { filename: K, subfolder: ce } = __(te);
    return K ? d([
      si(t, { filename: K, subfolder: ce, type: "temp" }),
      si(t, { filename: K, subfolder: ce, type: "output" }),
      si(t, { filename: K, subfolder: ce, type: "input" }),
      te
    ]) : [te];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (k) => {
      var te, K;
      try {
        (K = (te = k == null ? void 0 : k.__panoLinkedInputImageCache) == null ? void 0 : te.forEach) == null || K.call(te, (ce, O, fe) => {
          var F;
          ce != null && ce.img && ((F = n == null ? void 0 : n.isImageLoadFailed) != null && F.call(n, ce.img)) && fe.delete(O);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (k, te) => {
      var K;
      (K = k == null ? void 0 : k.delete) == null || K.call(k, `__ui__${String(te || "")}`);
    },
    linkedValue: (k, te) => {
      var F, J, G, Q;
      const K = String(te || ""), ce = Array.isArray(k == null ? void 0 : k.inputs) ? k.inputs.findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === K) : -1, O = ce >= 0 && k.graph ? k.getInputLink(ce) : null;
      if (O) {
        const Y = a(O.origin_id), oe = [
          Y == null ? void 0 : Y.output,
          Y == null ? void 0 : Y.result,
          (F = Y == null ? void 0 : Y.data) == null ? void 0 : F.output,
          (J = Y == null ? void 0 : Y.data) == null ? void 0 : J.result,
          (G = Y == null ? void 0 : Y.ui) == null ? void 0 : G.output,
          (Q = Y == null ? void 0 : Y.ui) == null ? void 0 : Q.result
        ];
        for (const ie of oe) {
          if (!Array.isArray(ie)) continue;
          const x = ie[Number(O.origin_slot || 0)];
          if (typeof x == "string" && x.trim()) return x;
        }
      }
      const fe = Array.isArray(k == null ? void 0 : k.widgets) ? k.widgets.find((Y) => String((Y == null ? void 0 : Y.name) || "") === K) : null;
      return String((fe == null ? void 0 : fe.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (k, te = [], K = null, ce = "") => {
      var Se;
      const O = Array.isArray(te) ? te : [te], fe = _(k, O), J = (Array.isArray(fe == null ? void 0 : fe.srcCandidates) && fe.srcCandidates.length ? fe.srcCandidates : [fe == null ? void 0 : fe.src]).map((ee) => String(ee || "").trim()).filter(Boolean);
      if (!J.length) return null;
      const G = d(J.flatMap((ee) => m(ee)));
      if (!G.length) return null;
      k.__panoLinkedInputImageCache || (k.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Q = String(ce || O.join("|") || "image_exact"), Y = J.join(`
`), oe = k.__panoLinkedInputImageCache.get(Q);
      if (oe && oe.srcRaw === Y && oe.img) return oe.img;
      const ie = r || globalThis.Image;
      if (typeof ie != "function") return null;
      const x = new ie();
      (Se = n == null ? void 0 : n.markImageLoading) == null || Se.call(n, x, Y);
      const T = { srcRaw: Y, resolvedSrc: "", img: x };
      k.__panoLinkedInputImageCache.set(Q, T);
      let Z = -1;
      const V = (ee) => {
        var I, X, se;
        ee === "ready" ? (I = n == null ? void 0 : n.markImageReady) == null || I.call(n, x, Y) : (X = n == null ? void 0 : n.markImageFailed) == null || X.call(n, x, Y), K == null || K(x), (se = k.setDirtyCanvas) == null || se.call(k, !0, !0);
      }, pe = () => {
        if (Z += 1, Z >= G.length) {
          V("failed");
          return;
        }
        T.resolvedSrc = G[Z], x.src = T.resolvedSrc;
      };
      return x.onload = () => V("ready"), x.onerror = () => {
        if (Z + 1 < G.length) {
          pe();
          return;
        }
        V("failed");
      }, pe(), x;
    },
    output: a,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (k, te, K, ce = null) => {
      var Y, oe, ie;
      const O = s(k, te)[0] || null, fe = i(O);
      if (!fe) return null;
      const F = `__ui__${te}`, J = (Y = K == null ? void 0 : K.get) == null ? void 0 : Y.call(K, F);
      if (J && J.__panoSrc === fe) return J;
      const G = r || globalThis.Image;
      if (typeof G != "function") return null;
      const Q = new G();
      return Q.__panoSrc = fe, (oe = n == null ? void 0 : n.markImageLoading) == null || oe.call(n, Q, fe), Q.onload = () => {
        var x;
        (x = n == null ? void 0 : n.markImageReady) == null || x.call(n, Q, fe), ce == null || ce(Q);
      }, Q.onerror = () => {
        var x;
        (x = n == null ? void 0 : n.markImageFailed) == null || x.call(n, Q, fe), ce == null || ce(Q);
      }, Q.src = fe, (ie = K == null ? void 0 : K.set) == null || ie.call(K, F, Q), Q;
    },
    uiList: s,
    uiValue: l
  };
}
const w_ = 1e-3;
function ad(e, t, r, n) {
  if (!co(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(w_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function zm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function x_(e, t) {
  return Math.floor(e * t.fps);
}
function sd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Cf = 4;
function ld({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, c) {
      if ((a.length !== r.length || a.some((f, g) => f !== r[g])) && (r = a, n.clear(), i = null), s === null) return null;
      const d = x_(s, l);
      for (let f = d; f < Math.min(r.length, d + Cf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Cf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function jm({
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
  const c = () => a || e(), d = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, d(), !0);
    },
    updateGesture(u) {
      if (l) return !1;
      a || this.beginGesture();
      const f = t(a, u);
      return f.changed ? (a = f.state, s = !0, n(a), d(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const u = s;
      return u && i(a), a = null, s = !1, n(null), d(), u;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), d(), !0);
    },
    apply(u) {
      if (l) return !1;
      a && this.commitGesture();
      const f = t(e(), u);
      return f.changed ? (i(f.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const u = a != null;
      a = null, s = !1, u && n(null);
    }
  };
}
const ys = "sticker_image_1", Hm = "external_image", ro = 0;
function qi(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function uc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Zr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function qc(e, t = ro) {
  return (e == null ? void 0 : e.version) !== 2 ? Zr(e) : Zr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: xi(r, t).active,
    external: r.source.kind === "port",
    ...Xu(r, t)
  }));
}
function cd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && Zr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Gm(e) {
  return String((e == null ? void 0 : e.id) || "") === ys || String((e == null ? void 0 : e.source_kind) || "") === Hm;
}
function ud(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Gm(t);
}
const Wm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Km(e) {
  return !Gm(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Wm.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Um(e) {
  const t = Km(e);
  return t ? Wm.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Bm(e, t = {}) {
  var W, k, te;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((K) => String((K == null ? void 0 : K.id) || "") === ys);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const K = String(((W = e.active) == null ? void 0 : W.selected_sticker_id) || "") === ys;
    return {
      state: {
        ...e,
        stickers: r.filter((ce, O) => O !== n),
        active: K ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), g = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = s ? g.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || g.hFOV_deg || 30, m = Math.min(179, Math.max(0.1, Number(_)));
  if (!s) {
    if (!d) return { state: e, changed: !1 };
    const K = qi(m, u, f), ce = Number(((k = a == null ? void 0 : a.initial_pose) == null ? void 0 : k.hFOV_deg) ?? m), O = qi(ce, u, f), fe = Number(((te = a == null ? void 0 : a.initial_pose) == null ? void 0 : te.vFOV_deg) ?? O);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - K) <= 1e-6 && Math.abs(fe - O) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((F, J) => J === n ? {
          ...F,
          vFOV_deg: K,
          initial_pose: F.initial_pose && typeof F.initial_pose == "object" ? { ...F.initial_pose, vFOV_deg: O } : F.initial_pose
        } : F)
      },
      changed: !0
    };
  }
  const p = r.reduce((K, ce) => Math.max(K, Number((ce == null ? void 0 : ce.z_index) || 0)), -1), E = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: m,
    vFOV_deg: d ? qi(m, u, f) : Number(g.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || m),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, U = {
    ...a || {},
    id: ys,
    source_kind: Hm,
    source_link_id: i,
    source_state_hash: o,
    ...E,
    initial_pose: { ...E },
    visible: !0,
    z_index: p + 1
  }, z = n >= 0 ? r.map((K, ce) => ce === n ? U : K) : [...r, U];
  return { state: { ...e, stickers: z }, changed: !0 };
}
function Af(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const k_ = ["IMAGE", "VIDEO"];
function If(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => k_.includes(r)) ? "2d" : null;
}
function M_(e, t) {
  var i, o, a, s, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? If(n.type) ?? If((c = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Ym(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: Af(e, "sticker"),
    awaitingPose: !t && (Af(e, "sticker_state") || M_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function Ef(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return tr({ version: 2, stickers: [r] }).stickers[0];
}
function qm(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var m;
  const a = e.stickers.findIndex((p) => ud(e, p)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((m = e.active) == null ? void 0 : m.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((E, U) => U !== a),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const p = { ...Ef(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((E, U) => U === a ? p : E) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const p = [s.size.value, ...s.size.keyframes.map((z) => z.value)], E = p.map((z) => qi(z.hFOV_deg, i, o));
    if (p.every((z, W) => Math.abs(z.vFOV_deg - E[W]) <= 1e-6)) return { state: e, changed: !1 };
    const U = {
      value: { ...s.size.value, vFOV_deg: E[0] },
      keyframes: s.size.keyframes.map((z, W) => ({ ...z, value: { ...z.value, vFOV_deg: E[W + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((z, W) => W === a ? { ...z, size: U } : z) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const c = new Set(e.stickers.map((p) => p.id));
  let d = 1;
  for (; c.has(`sticker_${d}`); ) d += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Ef(`sticker_${d}`, n)] }, changed: !0 };
  const u = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (p) => l ? qi(p, i, o) : p, g = Ju(`sticker_${d}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: u,
    vFOV_deg: f(u)
  }, Zr(e).reduce((p, E) => Math.max(p, E.z_index), -1) + 1), _ = (n == null ? void 0 : n.keyframes) ?? {};
  return g.direction.keyframes = _.direction ?? [], g.roll.keyframes = _.roll ?? [], g.size.keyframes = (_.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: f(p.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, g] }, changed: !0 };
}
function dd(e) {
  const t = Zr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: uc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: uc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: uc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Xm(e) {
  const t = cd(e), r = ud(e, t), n = Zr(e).some((s) => s && s.visible !== !1), i = dd(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Um(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function P_(e) {
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
function Of(e, t) {
  const r = cd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = P_(e), i = String(r.id || ""), o = dd(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function N_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function C_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Bm(e, t.value);
  if (t.type === "sync-port") return qm(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = dd(e).reduce((f, g) => Math.max(f, Number(g.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: qi(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Ju(o, fs(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const u = { id: o, asset_id: a, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], u],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !Zr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = cd(e);
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
    const i = Km(r);
    return !i || !Um(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Of(e, "front");
  if (t.type === "send-back") return Of(e, "back");
  if (t.type === "delete-selected") {
    if (ud(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = Zr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = N_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Xu(r, ro) : r, s = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(a[l] || 0)) > 1e-12 && (s[l] = c);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = p1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return nm(c, ro, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function A_(e = {}) {
  return jm({
    ...e,
    reduce: C_,
    projectModel: Xm
  });
}
const Xc = 2;
function di(e, t) {
  return Math.floor(e * t + 0.5);
}
function I_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Jm({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const g = () => c && !d, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function m() {
    for (const T of f) T();
    f = [];
  }
  function p(T, Z = {}) {
    return m(), u = { name: T, ...Z }, s(), u;
  }
  function E(T, Z, V) {
    const pe = () => {
      u === T && V();
    };
    e.addEventListener(Z, pe), f.push(() => e.removeEventListener(Z, pe));
  }
  function U(T, Z) {
    let V = t.requestFrame(function pe(Se) {
      u === T && (Z(Se), u === T && (V = t.requestFrame(pe)));
    });
    f.push(() => t.cancelFrame(V));
  }
  function z(T) {
    l = T, o(l);
  }
  function W() {
    return p(d ? "error" : "idle");
  }
  function k() {
    d = !0, W();
  }
  function te() {
    const { seekable: T } = e, Z = T != null && T.length ? T.end(T.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(Z) ? Z : 1 / 0));
  }
  function K(T) {
    if (!g()) return T === "play" ? J() : W();
    if (e.readyState < Xc) {
      const Z = p("loading", { then: T });
      return E(Z, "loadeddata", () => K(Z.then)), E(Z, "error", k), Z;
    }
    return T === "play" && l / r() >= Number(e.duration) ? J() : ce(T, !1);
  }
  function ce(T, Z) {
    const V = te();
    if (!e.ended && di(Number(e.currentTime), r()) === di(V, r())) return O(T);
    const pe = p("seeking", { then: T, frame: l, retried: Z });
    return E(pe, "seeked", () => {
      const Se = di(Number(e.currentTime), r()) === di(te(), r()), ee = l === pe.frame;
      Se || ee && pe.retried ? O(pe.then) : ce(pe.then, ee);
    }), E(pe, "error", k), e.currentTime = V, pe;
  }
  function O(T) {
    return T === "play" ? fe() : (a(), W());
  }
  function fe() {
    const T = p("playingVideo", { shown: !1 });
    if (E(T, "pause", () => e.ended ? F() : Y()), E(T, "ended", F), E(T, "error", k), i() && di(Number(e.duration), r()) >= n()) {
      const V = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = V;
      });
    }
    const Z = (V, pe) => {
      pe && !T.shown && (T.shown = !0, s()), G(di(V, r()));
    };
    if (_()) {
      let V = e.requestVideoFrameCallback(function pe(Se, ee) {
        u === T && (Z(Number(ee.mediaTime), !0), u === T && (V = e.requestVideoFrameCallback(pe)));
      });
      f.push(() => {
        var pe;
        return (pe = e.cancelVideoFrameCallback) == null ? void 0 : pe.call(e, V);
      });
    } else
      U(T, () => Z(Number(e.currentTime), e.readyState >= Xc));
    return Promise.resolve(e.play()).catch(() => {
      u === T && Y();
    }), T;
  }
  function F() {
    a(), J();
  }
  function J() {
    const T = p("playingClock", { startTs: t.now(), startFrame: l });
    return U(T, (Z) => G(T.startFrame + Math.floor((Z - T.startTs) / 1e3 * r()))), T;
  }
  function G(T) {
    if (T < n()) {
      z(T);
      return;
    }
    if (!i()) {
      Q(n() - 1);
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), z(0), K("play");
  }
  function Q(T) {
    u.name === "playingVideo" ? (m(), e.pause(), z(Math.max(0, T)), a()) : z(Math.max(0, T)), K("still");
  }
  function Y() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", s();
    else if (u.name === "playingVideo") {
      m(), e.pause();
      const T = I_(Number(e.currentTime), r());
      z(Math.min(T, n() - 1)), a(), l === T ? W() : K("still");
    } else u.name === "playingClock" && Q(Math.min(l, n() - 1));
  }
  function oe() {
    if (!x()) {
      if (l >= n() - 1 && z(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", s();
        return;
      }
      K("play");
    }
  }
  function ie(T) {
    const Z = Math.max(0, Math.round(T));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", z(Z), s();
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), z(Z), K("still");
  }
  function x() {
    return u.name === "playingVideo" || u.name === "playingClock" || u.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return u.name;
    },
    get playing() {
      return x();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: oe,
    stop: Y,
    seek: ie,
    toggle() {
      x() ? Y() : oe();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(T) {
      m(), c = !!T, d = !1, K("still");
    },
    dispose() {
      m(), c = !1, u = { name: "idle" };
    }
  };
}
function fd({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function c(m) {
    s = m, t();
  }
  function d(m) {
    a = m, e.currentTime = m;
  }
  function u() {
    const m = l;
    f(), l !== m && r();
  }
  function f() {
    if (!n || i || e.readyState < Xc) return;
    const { time: m, playing: p, fps: E } = o;
    if (m === null) {
      e.pause(), l = !1;
      return;
    }
    if (p) {
      if (a !== null) return;
      const U = Number(e.duration), z = Number.isFinite(U) ? Math.min(m, U) : m, W = Math.abs(Number(e.currentTime) - z) > 1.5 / E;
      if (e.ended && !W) return;
      W && d(z), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(a !== null || s === m) && (Number(e.currentTime) === m ? c(m) : d(m));
  }
  const g = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const m = a;
      a = null, !o.playing && m === o.time ? c(m) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [m, p] of Object.entries(g)) e.addEventListener(m, p);
  function _(m) {
    n = m, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: m = "", time: p = null, playing: E = !1, fps: U }) {
      m !== n && (_(m), r()), o = { time: p, playing: E, fps: U }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(m, p) {
      return !n || i ? p : o.time === null ? null : o.playing && l ? e : s === null ? p : m;
    },
    dispose() {
      for (const [m, p] of Object.entries(g)) e.removeEventListener(m, p);
      _("");
    }
  };
}
function bs(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function E_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const g = /* @__PURE__ */ new Set();
  let _ = null, m = null;
  const p = () => i().timeline.fps, E = (F) => F.stickers.find((J) => J.source.kind === "port"), U = () => {
    const F = i(), J = E(F);
    return Zh(F, {
      minimum: Math.round(p() * 5),
      frames: Math.max(
        d ? Math.round(f * p()) : 0,
        _ && J ? zm(J.clip, p(), _.meta) : 0
      ),
      camera: c
    });
  }, z = Jm({
    video: e,
    clock: n,
    fps: p,
    span: U,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), W = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, k = () => {
    u && (g.add(u), l());
  }, te = fd({ video: t, onCapture: s, onChange: l }), K = ld({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", W), e.addEventListener("error", k);
  function ce(F) {
    F !== u && (u = F, e.pause(), F ? e.src = F : e.removeAttribute("src"), e.load(), z.setSource(!!F));
  }
  function O() {
    z.playing && z.stop();
  }
  function fe(F) {
    const J = E(F);
    m = _ && J ? ad(J.clip, z.frame, F.timeline.fps, _.meta) : null, te.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: m,
      playing: z.advancing,
      fps: F.timeline.fps
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
      return u;
    },
    pause: O,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(F, J) {
      return _ != null && _.frames ? K.picture(_.frames, m, _.meta, J) : te.picture(F, J);
    },
    toggle() {
      z.playing ? z.stop() : z.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: F, sources: J, state: G, sticker: Q = null }) {
      if (_ = F ? Q : null, !F)
        return O(), ce(""), fe(G), !1;
      for (const T of g)
        J.includes(T) || g.delete(T);
      const Y = J.find((T) => T && !g.has(T)) || "", oe = Y !== d;
      oe && (d = Y, f = 0), ce(d);
      const ie = Jh(G, { camera: c }) || !!d && z.state !== "error" || !!_;
      return ie || O(), (oe || !ie || !z.playing && z.frame >= U()) && z.frame !== ro && z.seek(ro), fe(G), ie;
    },
    dispose() {
      z.dispose(), te.dispose(), e.removeEventListener("loadedmetadata", W), e.removeEventListener("error", k), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const Xs = Math.PI / 180, hr = 180 / Math.PI, O_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), F_ = 260;
function Ff(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Zm(e, t) {
  return t ? Zm(t, e % t) : e;
}
function T_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Zm(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function la(e, t) {
  const r = Ff(e), n = Ff(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: T_(r, n) };
}
function _i(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Qm(e) {
  const t = _i(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Tr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function pd(e, t, r = O_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (p, E, U) => {
    const z = p + E, W = Math.max(0, U - 1), k = z > W && z > 0 ? W / z : 1;
    return [p * k, E * k];
  }, [d, u] = c(l, a, n), [f, g] = c(o, s, i), _ = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - g)
  }, m = $u(_, t);
  return {
    x: _.x + (_.w - m.width) * 0.5,
    y: _.y + (_.h - m.height) * 0.5,
    w: m.width,
    h: m.height,
    safeRect: _
  };
}
function D_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = pd({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Xs * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Eh(l, Nh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), d = L_(c, so(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = zu({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function eg(e) {
  return {
    yaw: jt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * hr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * hr, -89.9, 89.9)
  };
}
function L_(e, t) {
  const r = eg(e), n = so(r.yaw, r.pitch, 0), i = Xl(t, e), o = {
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
    roll: vl(Math.atan2(
      Xl(s, n.up),
      Xl(s, n.right)
    ) * hr)
  };
}
function tg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = pd({ width: r, height: n }, Pi(e)), o = wi(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = Eh(e, Nh(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = eg(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ee(2 * Math.atan(r / (2 * o)) * hr, 1, 179)
  };
}
function R_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = wi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: c, halfH: d } = ju(l, s), u = {
    x: o - c,
    y: a - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, g = n / i, _ = Math.tan(Oc * Xs), m = g >= 1 ? _ : _ * g, p = g >= 1 ? _ / g : _;
  return {
    focalPx: s,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / s) * hr,
      vFOV_deg: 2 * Math.atan(d / s) * hr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(m) * hr,
        vFOV_deg: 2 * Math.atan(p) * hr
      }
    }
  };
}
function Ti(e, t) {
  const r = _i(e);
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
function V_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = wi(r, e);
    return zu($u(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: cs(o, t) };
}
function Tf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = la(t, r);
  if (!o) return e;
  const a = Pi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = la(o.height, o.width));
  const s = V_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function ng(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (_i(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Ch({
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
    const n = _i(e);
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
    return Ti(e, (n) => Tf(
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
      const o = String(Tr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? la(o[1], o[2]) : la(Pi(n), 1);
      return a ? Tf(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Ti(e, (i) => {
      const o = vl(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Ti(e, (n) => {
    const i = Ah(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Ti(e, (n) => {
    const i = Ih(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Ti(e, (n) => {
    const i = og(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function rg({
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
  }, c = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (s === "shift" && d < Math.min(l.w, l.h) * a) return null;
  const u = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: s,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: u,
    accumulatedRad: 0
  };
}
function ig(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Mh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Ph(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function og(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Xs, l = Math.cos(s), c = Math.sin(s), d = o / r, u = -a / r, f = d * l - u * c, g = d * c + u * l, _ = Number(e.pitch_deg || 0) * Xs, m = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: jt(Number(e.yaw_deg || 0) - Math.atan(f) / m * hr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(g) * hr, -90, 90)
  };
}
function $_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return jm({
    readState: e,
    reduce: ng,
    projectModel: Qm,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const Ge = Object.freeze({
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
}), z_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, j_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: z_(t[2])
})), H_ = {
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
}, Df = Object.fromEntries(
  Object.entries(H_).map(([e, t]) => [e, {
    name: t.name,
    elements: j_(t.body)
  }])
), Vt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Df, n) ? Df[n] : null;
    });
    return (n, i) => r.value ? (Te(), De("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ht(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Te(!0), De(Ze, null, Pt(r.value.elements, (o, a) => (Te(), De(Ze, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (Te(), De("path", Ar({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), De("circle", Ar({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), De("rect", Ar({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), De("line", Ar({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), De("polyline", Ar({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), De("polygon", Ar({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : pt("", !0)
      ], 64))), 128))
    ], 2)) : pt("", !0);
  }
}, Qt = {
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
    return (n, i) => (Te(), zn(ty(e.tag), Ar({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Wp(() => [
        Ue(Vt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, G_ = ["aria-expanded", "disabled"], W_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, K_ = ["data-aspect", "disabled", "onClick"], U_ = { class: "pano-cutout-aspect-custom" }, B_ = ["disabled"], Y_ = ["disabled"], q_ = ["data-custom-width", "data-custom-height", "disabled"], ag = {
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
    ]), o = /* @__PURE__ */ Yt("1"), a = /* @__PURE__ */ Yt("1"), s = /* @__PURE__ */ Yt(null), l = ut(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = ut(() => {
      const m = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], p = String(r.model.aspectLabel || "");
      return m.length ? m.map((E) => {
        const U = typeof E == "string" ? E : String((E == null ? void 0 : E.value) || ""), z = typeof E == "string" ? E : String((E == null ? void 0 : E.label) || U);
        return {
          ...typeof E == "object" && E ? E : {},
          value: U,
          label: z,
          active: p ? U === p : (E == null ? void 0 : E.active) === !0
        };
      }) : i.map((E) => ({
        ...E,
        active: E.value === p
      }));
    }), d = ut(() => {
      var p;
      const m = String(r.model.aspectLabel || "").trim();
      return m || String(((p = c.value.find((E) => E.active === !0)) == null ? void 0 : p.label) || "Aspect");
    });
    yi(d, (m) => {
      const p = String(m || "").match(/^([0-9.]+):([0-9.]+)$/);
      p && (o.value = p[1], a.value = p[2]);
    }, { immediate: !0 });
    function u(m) {
      n("action", m);
    }
    function f(m) {
      var p;
      r.model.aspectOpen === !0 && ((p = s.value) != null && p.contains(m.target) || u({ type: "close-aspect" }));
    }
    hl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), ma(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function g(m) {
      const [p, E] = String(m.value || "").split(":");
      u({
        type: "set-aspect",
        width: p,
        height: E,
        preserveOrientation: !0
      });
    }
    function _() {
      u({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (m, p) => (Te(), De("div", {
      ref_key: "rootElement",
      ref: s,
      class: ht(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), zn(Qt, {
        key: 0,
        icon: e.model.aspectIcon || tt(Ge).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: p[0] || (p[0] = (E) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: p[1] || (p[1] = (E) => u({ type: "toggle-aspect" }))
      }, [
        Ue(Vt, {
          icon: e.model.aspectIcon || tt(Ge).aspect
        }, null, 8, ["icon"]),
        Pe("span", null, rt(d.value), 1),
        Ue(Vt, {
          icon: tt(Ge).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, G_)),
      Lr(Pe("div", W_, [
        (Te(!0), De(Ze, null, Pt(c.value, (E) => (Te(), De("button", {
          key: E.value,
          class: ht(["pano-btn pano-frame-aspect-choice", { active: E.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": E.value,
          disabled: l.value,
          onClick: (U) => g(E)
        }, rt(E.label), 11, K_))), 128)),
        Pe("div", U_, [
          Lr(Pe("input", {
            "onUpdate:modelValue": p[2] || (p[2] = (E) => o.value = E),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, B_), [
            [rf, o.value]
          ]),
          p[4] || (p[4] = Pe("span", { "aria-hidden": "true" }, ":", -1)),
          Lr(Pe("input", {
            "onUpdate:modelValue": p[3] || (p[3] = (E) => a.value = E),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, Y_), [
            [rf, a.value]
          ]),
          Pe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: _
          }, "Apply", 8, q_)
        ])
      ], 512), [
        [Si, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, X_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, J_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Te(), De("div", {
      class: ht(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Nt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Nt(() => {
      }, ["stop"]))
    }, [
      Ue(Qt, {
        icon: tt(Ge).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Nt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Pe("div", X_, [
        i[3] || (i[3] = Pe("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Pe("kbd", null, rt(o[0]), 1),
          Pe("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Z_ = {
  class: "pano-view-unavailable",
  role: "status"
}, Nl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), De("div", Z_, rt(tt(Cm)), 1));
  }
}, Q_ = { class: "pano-cutout-node-surface" }, eS = ["title", "disabled"], tS = { class: "value" }, nS = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, rS = {
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
    return (n, i) => (Te(), De("div", Q_, [
      Pe("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Nt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Nt(() => {
        }, ["stop"]))
      }, [
        Pe("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ue(Vt, {
            icon: tt(Ge).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Pe("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ue(Qt, {
          icon: e.model.hasShot ? tt(Ge).delete : tt(Ge).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ue(ag, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Pe("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Nt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ue(Vt, {
            icon: tt(Ge).roll
          }, null, 8, ["icon"]),
          Pe("span", tS, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, eS),
        Ue(Qt, {
          icon: tt(Ge).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(J_)
      ], 32),
      e.model.hasShot === !1 ? (Te(), De("div", nS, " Choose a view · + Add Frame ")) : pt("", !0),
      e.model.viewUnavailable ? (Te(), zn(Nl, { key: 1 })) : pt("", !0)
    ]));
  }
}, sg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Yt(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, a = !1, { active: !0, intent: u };
    }
    function l(u) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = u, a = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(u) {
      var m, p;
      const { active: f, intent: g } = s();
      if (!f) return;
      const _ = ((p = (m = u.target) == null ? void 0 : m.files) == null ? void 0 : p[0]) || null;
      if (_) {
        n("file-selected", { intent: g, file: _ });
        return;
      }
      n("file-cancelled", { intent: g });
    }
    function d() {
      const { active: u, intent: f } = s();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Te(), De("input", {
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
}, iS = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, oS = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), r = Object.freeze([
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
    return (n, i) => (Te(), De("div", {
      class: ht(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Nt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Nt(() => {
      }, ["stop"]))
    }, [
      Ue(Qt, {
        icon: tt(Ge).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Nt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Pe("div", iS, [
        i[3] || (i[3] = Pe("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Pe("kbd", null, rt(o[0]), 1),
          Pe("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, aS = { class: "pano-stickers-node-surface" }, sS = ["disabled"], lS = ["aria-label", "data-tip"], cS = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, uS = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, dS = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Yt(null);
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
    return (a, s) => (Te(), De("div", aS, [
      Pe("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Nt(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Nt(() => {
        }, ["stop"]))
      }, [
        Pe("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ue(Vt, {
            icon: tt(Ge).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = Pe("span", { class: "label" }, "Full Editor", -1))
        ]),
        Pe("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Ue(Vt, {
            icon: tt(Ge).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Pe("span", { class: "label" }, "Add Image", -1))
        ], 8, sS),
        Ue(Qt, {
          icon: e.model.locked ? tt(Ge).lock_closed : tt(Ge).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ue(Qt, {
          icon: tt(Ge).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(Qt, {
          icon: tt(Ge).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(Qt, {
          icon: e.model.isExternalSelection ? tt(Ge).back_initial : tt(Ge).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ue(oS)
      ], 32),
      e.model.playable === !0 ? (Te(), De("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Nt(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Nt(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ue(Vt, {
          icon: e.model.playing ? tt(Ge).pause : tt(Ge).play
        }, null, 8, ["icon"])
      ], 40, lS)) : pt("", !0),
      e.model.hasStickers === !1 ? (Te(), De("div", cS, " Add Image to place a sticker ")) : pt("", !0),
      e.model.dropActive === !0 ? (Te(), De("div", uS, "Drop image to add")) : pt("", !0),
      Ue(sg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), zn(Nl, { key: 3 })) : pt("", !0)
    ]));
  }
}, fS = { class: "pano-studio-node-surface" }, pS = {
  class: "pano-studio-node-status",
  role: "status"
}, hS = { class: "pano-studio-node-shot" }, mS = { class: "pano-studio-node-size" }, gS = { class: "pano-studio-node-note" }, yS = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", fS, [
      Pe("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Nt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Nt(() => {
        }, ["stop"]))
      }, [
        Pe("div", pS, [
          Pe("span", hS, rt(e.model.status.shot), 1),
          Pe("span", mS, rt(e.model.status.size), 1),
          Pe("span", gS, rt(e.model.status.note), 1)
        ]),
        Pe("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Ue(Vt, {
            icon: tt(Ge).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Pe("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Te(), zn(Nl, { key: 0 })) : pt("", !0)
    ]));
  }
}, bS = 2048, Jc = 4096, vs = (e) => Math.floor(e + 0.5), qa = (e) => Math.max(2, 2 * vs(e / 2));
function Cl(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function vS(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? Sl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, vs(e.timeline.length)) : t.length ? n = Math.max(1, vs(Math.max(...t))) : r.length && (n = Math.max(1, vs(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function _S(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let a;
  r !== "auto" ? a = Number(r) : o ? a = bS : a = Math.floor(i * 360 / n);
  const s = Cl(e);
  if (!s || s.projection === "erp")
    return { width: Math.floor(a * n / 360), height: Math.floor(a / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((g) => ba(s, g).hFOV_deg)), c = a / Math.PI * Math.tan(l * Math.PI / 360), d = c / s.aspect, u = [qa(c), qa(d)];
  if (Math.max(...u) <= Jc) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Jc / Math.max(c, d);
  return { width: qa(c * f), height: qa(d * f), reducedFrom: u, defaulted: o };
}
function lg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function SS(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", run: o = null, erp: a = null }) {
  const s = Cl(e);
  return !a || !o || s && s.projection !== "erp" ? null : o.key === lg(t, r, String(n), i) ? a : null;
}
function wS(e) {
  const t = Cl(e);
  if (!t) return { x: 0, y: 0, z: 0, w: 1 };
  const { yaw_deg: r, pitch_deg: n, roll_deg: i } = ba(t, 0);
  return ti(xn(r, n, i));
}
function xS(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: a = null, showingRun: s = !1 }) {
  const l = Cl(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (a && a.key === lg(t, r, String(n), i))
    d = { width: a.width, height: a.height, reducedFrom: a.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: s ? "Showing the last run" : "" };
    d = _S(e, vS(e), r, n, o);
  }
  const u = s ? ["Showing the last run"] : [];
  return d.reducedFrom ? u.push(`Capped at ${Jc} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function kS() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, !!t.showingRun]);
    return i === e ? null : (e = i, xS(r(), { ...t, bgWidth: n }));
  };
}
const Lf = 24;
function MS(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Yo(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function cg(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Zc(e, t) {
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
  return Yo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : cg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function PS(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
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
  return Yo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : cg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function hd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function ug(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function No(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ee(r.x, -n, t.width + n),
    y: Ee(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function NS(e) {
  const t = so(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * kt * 0.5),
    tanY: Math.tan(Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * kt * 0.5)
  };
}
function li(e, t, r) {
  return Vu(Ds(
    Ds(e.centerDir, Ls(e.right, t)),
    Ls(e.up, r)
  ));
}
function md(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = NS(e), n = No(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    li(r, -r.tanX, r.tanY),
    li(r, r.tanX, r.tanY),
    li(r, r.tanX, -r.tanY),
    li(r, -r.tanX, -r.tanY)
  ].map((f) => No(f, t)), o = Array.from({ length: 4 }, (f, g) => {
    const _ = [];
    for (let m = 0; m <= 28; m += 1) {
      const p = m / 28;
      let E, U;
      g === 0 ? (E = -r.tanX + 2 * r.tanX * p, U = r.tanY) : g === 1 ? (E = r.tanX, U = r.tanY - 2 * r.tanY * p) : g === 2 ? (E = r.tanX - 2 * r.tanX * p, U = -r.tanY) : (E = -r.tanX, U = -r.tanY + 2 * r.tanY * p);
      const z = No(li(r, E, U), t);
      z && _.push({ x: z.x, y: z.y });
    }
    return _;
  }), a = No(li(r, 0, r.tanY), t), s = No(
    li(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = s.x - a.x, d = s.y - a.y, u = Math.hypot(c, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + c / u * Lf,
      y: a.y + d / u * Lf
    },
    visible: !0
  };
}
function Rf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: md(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, c;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((c = a.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Zc(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Zc(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function CS(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: jt(Math.atan2(n.x, n.z) * en),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * en
  };
}
function AS(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function IS(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * en;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Xa = null;
function gd() {
  return Xa || (Xa = new Promise((e) => {
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
  }), Xa);
}
function Gn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function ES(e, t = 1024) {
  const r = Math.max(1, Math.round(Gn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Gn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function OS(e, t, r) {
  const n = Gn(t), i = Gn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = Gn(o.u0), s = Gn(o.v0), l = Gn(o.u1), c = Gn(o.v1);
  if (l <= a || c <= s) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + Gn(d.du)) * n,
    centerY: ((s + c) * 0.5 + Gn(d.dv)) * i,
    width: (l - a) * n,
    height: (c - s) * i,
    rotationRad: Gn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Gn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function FS(e, t, r) {
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
function TS() {
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
    const c = () => {
      s.settled = !0;
      const d = [...s.listeners];
      s.listeners.clear(), d.forEach((u) => u()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), d = OS(o, a, s);
    if (!c.startsWith("data:") || !d) return null;
    const u = FS(o, a, s), f = String((o == null ? void 0 : o.id) || "").trim() || u, g = t.get(f);
    if ((g == null ? void 0 : g.revision) === u) return { source: g.source, revision: u };
    const _ = n(c, l), m = Number(_.naturalWidth || _.width || 0), p = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || m < 1 || p < 1) return null;
    const E = rn({ label: "raster-object" });
    E.width = Math.max(1, Math.round(a)), E.height = Math.max(1, Math.round(s));
    const U = E.getContext("2d");
    return U ? (d.wrapOffsets.forEach((z) => {
      U.save(), U.translate(d.centerX + z, d.centerY), U.rotate(d.rotationRad), U.scale(d.scale, d.scale), U.drawImage(
        _,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), U.restore();
    }), t.set(f, { revision: u, source: E }), { source: E, revision: u }) : null;
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
function DS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function LS(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function RS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function a(u, f, g, _) {
    if (!u || typeof _ != "function" || g.settled) return;
    let m = n.get(u);
    m || (m = /* @__PURE__ */ new Map(), n.set(u, m));
    const p = m.get(f);
    if ((p == null ? void 0 : p.entry) === g) {
      p.callback = _;
      return;
    }
    o(p);
    const E = { owner: u, key: f, entry: g, callback: _ };
    m.set(f, E), g.listeners.add(E);
  }
  function s(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((g) => {
      o(g);
      try {
        g.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, g] of r) {
        if (r.size <= u) break;
        !g.settled || g.listeners.size > 0 || (g.image.onload = null, g.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, g, _ = null) {
    const m = String(f || ""), p = String(g || "");
    if (!m || !p) return null;
    let E = r.get(m);
    if (E)
      r.delete(m), r.set(m, E);
    else {
      l(i - 1);
      const z = e || globalThis.Image;
      if (typeof z != "function") return null;
      const W = new z();
      E = { key: m, image: W, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(m, E), W.onload = () => s(E, !0), W.onerror = () => s(E, !1), W.src = p;
    }
    return E.settled || E.image.complete && Number(E.image.naturalWidth || E.image.width || 0) > 0 || a(u, m, E, _), E.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Fo = /* @__PURE__ */ new WeakMap();
function dg(e, t, { editor: r = !1 } = {}) {
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
function Rr(e, ...t) {
  const r = Fo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const _s = Object.freeze({
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
}), fg = "PanoramaSuite.Editor.ViewControls", VS = {
  id: fg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(_s).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function $S(e) {
  return Object.hasOwn(_s, e) ? _s[e] : _s.default;
}
function zS(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function jS(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Js = "state_json";
function Dr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function HS(e) {
  var a, s;
  const t = Dr(e, Js);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = em(r, {
    coverage: (a = Dr(e, "coverage")) == null ? void 0 : a.value
  }), i = ng(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function yd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Dr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, c, d, u, f, g, _;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (c = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (d = e.setDirtyCanvas) == null || d.call(e, !0, !0), (f = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || f.call(u, !0, !0), (_ = (g = t == null ? void 0 : t.canvas) == null ? void 0 : g.setDirty) == null || _.call(g, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function GS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Vf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function WS(e) {
  var d, u, f, g, _, m;
  if (!e) return;
  const t = Dr(e, "coverage"), r = Dr(e, "bg_color"), n = Dr(e, Js), i = Dr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && GS(o) && (Vf(a) || a === ""))) return;
  let c = "360";
  if (Vf(a))
    try {
      c = String(kn((d = JSON.parse(a)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (g = n.callback) == null || g.call(n, a), i && (i.value = s, (_ = i.callback) == null || _.call(i, s)), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
}
function Ss(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function Qc(e, t, r) {
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
async function KS(e, { tolerateOperationFailure: t = !1 } = {}) {
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
    var l, c;
    ((c = (l = e.__panoPendingStickerUploads) == null ? void 0 : l.get) == null ? void 0 : c.call(l, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function pg(e, t = {}) {
  var n;
  await KS(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function US(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await pg(e), r ? r.apply(this, n) : this.value;
  };
}
function BS(e) {
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
function YS(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Co(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: c = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(u) {
    var _;
    const f = `editor_btn|${r}`;
    if (u.__panoPreviewAttached === !0 && u.__panoPreviewMountKey === f) return;
    BS(u), yd(u, t), Ss(u, Js);
    const g = Dr(u, Js);
    if (US(u, g), g && !g.__panoPreviewPatchedCb) {
      g.__panoPreviewPatchedCb = !0;
      const m = g.callback;
      g.callback = (p) => {
        var U;
        const E = m ? m(p) : void 0;
        return (U = u.setDirtyCanvas) == null || U.call(u, !0, !1), E;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const m = Dr(u, "bg_color");
      !l && m && (m.value == null || String(m.value).trim() === "" || String(m.value).toLowerCase() === "#000000") && (m.value = "#00ff00", (_ = m.callback) == null || _.call(m, "#00ff00")), Qc(u, n, () => i(u, "stickers")), s && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), u.__panoStickersNodeSurface && Ss(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), u.__panoPreviewAttached = !0, u.__panoPreviewMountKey = f;
      return;
    }
    u.__panoSceneStateV2 = l, Qc(u, n, () => i(u, "cutout")), l || a(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), u.__panoCutoutNodeSurface && Ss(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), u.__panoPreviewAttached = !0, u.__panoPreviewMountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const g = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && !l && HS(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && WS(this);
      const _ = !!this.__panoPreviewAttached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && _ && Rr(this, "attach"), g;
    };
  }
}
function qS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return YS(this), n;
  };
}
function XS(e, {
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
    yd(e, t);
    const l = (c = e) => r(c, "stickers", { readOnly: !0, hideSidebar: !1 });
    Qc(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && Ss(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function JS({
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
    settings: [VS, Ab],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [lf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [lf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), d === "PanoramaStickersNode" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), d === "PanoramaStudio" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), d === "PanoramaCutoutNode" && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Rs(d) && qS(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      yd(l, e), Rs(c) && XS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const ZS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Zn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : ZS.test(String(e.name || "")) : !1;
}
function bd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Zn(r)) : !1;
}
function QS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (bd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || r(!1);
  }, s = (l) => {
    var d;
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => Zn(u));
    if (!c) {
      r(!1);
      return;
    }
    i(l), r(!1), n(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function Do(e, t = {}) {
  var a, s, l, c;
  if (!Zn(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const g = new r();
      g.onload = () => u(g), g.onerror = () => f(new Error("image load failed")), g.src = o;
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
async function fi(e, { fetchApi: t } = {}) {
  if (!Zn(e)) throw new TypeError("A supported image file is required.");
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
const $f = /* @__PURE__ */ new WeakSet(), zf = /* @__PURE__ */ new WeakSet();
let jf = 0;
function eu(e) {
  if (!e || typeof e != "object" || zf.has(e)) return e;
  const t = String(e.type || "preview");
  return jf += 1, e.type = `${t}:pano-${jf}`, zf.add(e), e;
}
function Zs(e) {
  if (!e || typeof e != "object" || $f.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, $f.add(e), e;
}
function hg(e, t) {
  var n, i;
  if (!t || ((i = (n = Zs(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function ew({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: zt } = rs;
c_((e) => Qr(e.id));
u_(hn);
const vd = RS(), { linkedVideoFile: mg } = $m({ app: zt, api: hn });
function tu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (rs == null ? void 0 : rs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const tw = "pano_suite.ui_settings.v1", nw = 120, rw = 2048;
function Hf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(tw)) || "").trim();
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
function iw() {
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
function ow() {
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
function nu(e) {
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
function gg(e) {
  const t = nu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function aw(e, t, r) {
  gg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function ru(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function _d(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function yg(e) {
  return Rs(_d(e));
}
function Gf(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = zt == null ? void 0 : zt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function bg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = ru(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && ws(e), ex(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = ru(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ws(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      ws(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function sw(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ws(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  iu.unregister(e), sw(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (r == null ? void 0 : r.widget)) return !0;
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = tu();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Nw(e, c));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function lw(e, t = "#00ff00") {
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
function cw(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = mr(e, "state_json")) == null ? void 0 : r.value) || "");
}
function un(e) {
  var s, l;
  const t = cw(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = mr(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = mr(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? tm(t, { backgroundColor: n, coverage: i, active: im(e) }) : lw(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function mr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function uw(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function vg(e, t, r = null) {
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
  return !n && r != null && (n = uw(e == null ? void 0 : e.graph, r)), n;
}
function dw(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function _g(e, t = []) {
  const r = dw(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    rr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Wf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Qs(e, t) {
  const r = Wf(e), n = Wf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function fw(e, t) {
  var r;
  return vg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function pw(e, t = rr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = _g(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return g_(e, a, fw);
}
const iu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = hn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f;
        if (!o) return;
        const a = Qs(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...pw(o)].some((g) => Qs(n, g)) || Vm(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (wg(o), (c = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (d = o.setDirtyCanvas) == null || d.call(o, !0, !0), (f = (u = o.graph) == null ? void 0 : u.setDirtyCanvas) == null || f.call(u, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, hn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = hn) != null && e.removeEventListener) || (hn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function el(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function hw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function mw(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function gw(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function yw(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (hw(t)) return [t];
  const { filename: r, subfolder: n } = mw(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => el({
    filename: r,
    subfolder: n,
    type: o
  }));
  return gw([...i, t]);
}
function bw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? el({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Qr(e) {
  const t = zt == null ? void 0 : zt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Qs(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Qs(a, i)) return t[a];
  }
  return null;
}
function Vr(e, t, r = null) {
  const n = r || Qr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function On(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return On(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return el({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = On(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : el(e);
}
function ca(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function xs(e) {
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
function Sd(e, t) {
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
function vw(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function _w(e, t) {
  try {
    e.__panoOwnOutputRev = DS(e.__panoOwnOutputRev);
    const r = vw(t);
    let n = "";
    for (const i of r)
      if (n = On(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), Sd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Xi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function Sw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Xt(e, "background"))
    return Xi(e), null;
  const i = Qr(n), o = od(i, t, On);
  if (!o)
    return Xi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = Sd(o, a), l = `${t.join("|")}:${s}`, c = e.__panoOwnOutputVideoCache;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Xi(e);
  const d = y_({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return d ? (e.__panoOwnOutputVideoCache = { key: l, player: d }, d.video) : null;
}
function ww(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = _g(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of a) {
    const f = r[u], g = e.graph ? e.getInputLink(u) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const _ = g.origin_id, m = vg(e, u, _);
    if (!m) continue;
    const p = Number(g.origin_slot ?? 0), E = Qr((m == null ? void 0 : m.id) ?? _), U = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
    if (U.length) {
      const te = [];
      p >= 0 && p < U.length && te.push(U[p]), te.push(...U);
      for (const K of te.filter((ce) => !gs(ce))) {
        const ce = On(K);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: `${ce}&pano_src=${Yc(E)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let z = [];
    try {
      z = typeof (zt == null ? void 0 : zt.getNodeImageUrls) == "function" ? zt.getNodeImageUrls(m) || [] : [];
    } catch {
      z = [];
    }
    if (Array.isArray(z) && z.length) {
      const te = [];
      p >= 0 && p < z.length && te.push(z[p]), te.push(...z);
      for (const K of te) {
        const ce = On(K);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: ce, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const W = Array.isArray(m == null ? void 0 : m.imgs) ? m.imgs : [];
    if (W.length) {
      const te = [];
      p >= 0 && p < W.length && te.push(W[p]), te.push(...W);
      for (const K of te) {
        const ce = On(K);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: ce, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const k = (c = m == null ? void 0 : m.widgets) == null ? void 0 : c.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image");
    if (k) {
      let te = On(k.value);
      if (te && !te.includes("/") && !te.includes(":") && (m.comfyClass === "LoadImage" || m.type === "LoadImage") && (te = hn.apiURL(`/view?filename=${encodeURIComponent(te)}&type=input&subfolder=`)), te)
        return String((f == null ? void 0 : f.name) || ""), { src: te, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = Xt(e, "background") ? Qr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((d = s == null ? void 0 : s.ui) == null ? void 0 : d.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = On(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function xw(e, t = [], r = {}) {
  const n = ww(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = yw(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const c = new Image(), d = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  d.pendingSrcRaw = i, d.pendingResolvedSrc = "", d.pendingImg = c, e.__panoLinkedInputImageCache.set(s, d);
  let u = -1;
  const f = () => {
    var _, m, p, E;
    if (u += 1, u >= o.length) {
      if (((m = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : m.call(_, s)) === d && d.pendingImg === c && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
        try {
          (E = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || E.call(p, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const g = o[u];
    d.pendingResolvedSrc = g, c.src = g;
  };
  return c.onload = () => {
    var g, _, m;
    ((_ = (g = e.__panoLinkedInputImageCache) == null ? void 0 : g.get) == null ? void 0 : _.call(g, s)) === d && d.pendingImg === c && (d.srcRaw = i, d.resolvedSrc = String(d.pendingResolvedSrc || c.src || ""), d.img = c, d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null), String(d.pendingResolvedSrc || d.resolvedSrc || c.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
  }, c.onerror = (g) => {
    var _, m, p, E;
    if (u + 1 < o.length) {
      f();
      return;
    }
    if (((m = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : m.call(_, s)) === d && d.pendingImg === c && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
      try {
        (E = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || E.call(p, s);
      } catch {
      }
    String(d.pendingResolvedSrc || d.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((g == null ? void 0 : g.type) || "error");
  }, f(), a && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : c;
}
function Sg(e, t = [], r = null, n = {}) {
  const i = xw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function wg(e) {
  var t, r;
  if (e) {
    vd.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Xi(e), e.__panoWrappedErpCache = null;
  }
}
function kw(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Xi(e), e.__panoWrappedErpCache = null;
  }
}
function xg(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ja(e, t, r = "") {
  const n = xg(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < nw ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Kf(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Mw(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), s + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (a - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function dc(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function Pw(e) {
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
function Nw(e, t) {
  return hg(e, t);
}
function ua(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = bw(r);
  if (!o && (n != null && n.external)) {
    if (!Xt(e, "external-sticker")) return null;
    const g = Qr(e == null ? void 0 : e.id), _ = ((f = g == null ? void 0 : g.ui) == null ? void 0 : f.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const m of Array.isArray(_) ? _ : [_])
      if (o = On(m), o) break;
  }
  if (!o) return null;
  const a = Vr(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, c = n != null && n.external ? Sd(o, l) : o, d = LS(o, s, l);
  return vd.get(e, d, c, (g, _) => {
    var m, p;
    _ && (n != null && n.external && e.__panoOutputFromRun && Rr(e, "image-loaded"), (p = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || p.call(m));
  }) || null;
}
function Cw(e, t) {
  var u, f, g, _;
  const r = Fw(e, t), n = Tw(t), i = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], o = new Map(
    i.filter((m) => m && typeof m == "object").map((m) => [String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim(), Number((m == null ? void 0 : m.z_index) || 0)])
  ), a = r ? n.map((m) => {
    const p = r.getGroupDisplayCanvas(m);
    return p ? {
      id: `paint_group:${m}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${m}`,
      zIndex: Number(o.get(m) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (_ = (g = e.__panoRasterObjectSurfaceCache) == null ? void 0 : g.retain) == null || _.call(g, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = TS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var m, p;
    return (p = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : p.call(m);
  });
  const l = ES(t == null ? void 0 : t.output_preset), c = s.filter((m) => (m == null ? void 0 : m.visible) !== !1 && String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => String((m == null ? void 0 : m.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(c);
  const d = s.map((m) => {
    const p = e.__panoRasterObjectSurfaceCache.get(
      m,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return p ? {
      id: `raster:${String((m == null ? void 0 : m.id) || "")}`,
      source: p.source,
      revision: p.revision,
      zIndex: Number((m == null ? void 0 : m.z_index) || 0),
      opacity: 1,
      visible: (m == null ? void 0 : m.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...d];
}
function Aw(e, t, r, n) {
  var o, a, s, l, c, d;
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
      const u = n.convertEventToCanvasOffset(t);
      if (Array.isArray(u) && u.length >= 2)
        return {
          x: Number(u[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(u[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = Ew(e, t, n);
  return i || null;
}
function Iw(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), a = (t == null ? void 0 : t.ds) || ((f = zt == null ? void 0 : zt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], c = (r - Number(o.left || 0)) / s - Number(l[0] || 0), d = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Ew(e, t, r) {
  var i, o;
  const n = Iw(t, r || (zt == null ? void 0 : zt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Ow(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Fw(e, t) {
  var c, d, u, f, g, _, m, p, E, U, z, W;
  const r = (d = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.paint) == null ? void 0 : d.strokes, n = (f = (u = t == null ? void 0 : t.painting) == null ? void 0 : u.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = Ow(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = bl(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((m = e.__panoPreviewPaintRevision) == null ? void 0 : m.paint) !== l.paint || ((p = e.__panoPreviewPaintRevision) == null ? void 0 : p.mask) !== l.mask || ((E = e.__panoPreviewPaintRevision) == null ? void 0 : E.groups) !== l.groups || ((U = e.__panoPreviewPaintRevision) == null ? void 0 : U.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((W = t == null ? void 0 : t.painting) == null ? void 0 : W.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Tw(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Dw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Lw(e, t, r) {
  const n = md(t, r);
  n.visible && hd(e, n.boundaryEdges, { selected: !1 });
}
function Rw(e, t, r) {
  const n = md(t, r);
  n.visible && (e.save(), hd(e, n.boundaryEdges, { selected: !0 }), ug(e, n, { accent: MS(t) }), e.restore());
}
function ou(e, t, r) {
  return km(Bs(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function tl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ro;
}
function Vw(e) {
  return [Xt(e, "background") ? od(Qr(e.id), ["pano_input_videos"], On) : "", mg(e, rr)];
}
function $w(e) {
  var o;
  if (!Xt(e, "external-sticker")) return null;
  const t = Qr(e.id), r = Vr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(On), meta: r };
  const i = od(t, ["pano_sticker_input_videos"], On);
  return i ? { src: i, meta: r } : null;
}
function zw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function kg(e, t) {
  var r;
  return ((r = e.__panoSurfaceScene) == null ? void 0 : r.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: tr({ ...t, painting: null }) }), e.__panoSurfaceScene.sceneState;
}
function jw(e, t) {
  const r = Pl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Xt(e, "background")) {
    const o = Vr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (Om(e, rr)) {
    const { playback: o, video: a } = t;
    return o.source && o.source === mg(e, rr) && a.videoWidth > 0 ? a.videoWidth : void 0;
  }
  const i = Sg(e, rr, null, { preserveReadyWhilePending: !1 });
  return ca(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Hw(e, t) {
  var i, o, a;
  const r = String(((i = mr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((s) => Xt(e, s));
  return {
    stateText: String(((o = mr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: un(e).coverage,
    bgColor: String(((a = mr(e, "bg_color")) == null ? void 0 : a.value) ?? ""),
    bgWidth: r === "auto" ? jw(e, t) : null,
    run: n && Vr(e, "pano_output_size") || null,
    erp: n && Vr(e, "pano_output_erp") || null
  };
}
function Mg(e) {
  const t = e == null ? void 0 : e.__panoStudioRunImage;
  t && (t.image.removeAttribute("src"), e.__panoStudioRunImage = null);
}
function Gw(e, t, r) {
  const n = On(Vr(e, "pano_output_erp"));
  let i = e.__panoStudioRunImage;
  if (i && i.src !== n && (Mg(e), i = null), !t || !n) return null;
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
    revision: xs(i.image),
    coverage: Number(t.coverage) === 180 ? 180 : 360,
    quaternion: wS(r())
  } : null;
}
function Ww(e, t, r) {
  const n = kg(e, t), i = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = ua(e, a.id, Ks(a.source), { external: a.source.kind === "port" });
      const c = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, s), u = sd(c.playback.stickerMedia, s);
        return d ? { media: d, revision: xs(d), source: u } : null;
      }
    } else {
      const c = a.type === "external_image" || a.source_kind === "external_image", d = String(a.asset_id || "") || (c ? String(a.id || "") : "");
      s = ua(e, d, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: c });
    }
    return ca(s) ? { media: s, revision: xs(s) } : null;
  }, o = (t.painting_visible === !1 ? [] : Cw(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: ca(r) ? { media: r, revision: xs(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Pm(n, tl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Kw(e, t, r, n = null) {
  var te, K, ce, O, fe, F, J;
  const i = String(e.__panoPreviewMode || "stickers");
  xg(e, i);
  const o = un(e);
  i === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (ce = (K = (te = e.__panoCutoutNodeSurface) == null ? void 0 : te.session) == null ? void 0 : K.refresh) == null || ce.call(K)) : i === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (F = (fe = (O = e.__panoStickersNodeSurface) == null ? void 0 : O.session) == null ? void 0 : fe.refresh) == null || F.call(fe));
  const a = t.parentElement, s = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), c = t.getContext("2d");
  if (!c) return;
  (t.width !== s || t.height !== l) && (t.width = s, t.height = l);
  const d = { x: 0, y: 0, w: s, h: l };
  c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "#070707", c.fillRect(0, 0, s, l);
  const u = (n == null ? void 0 : n.media) || (e.__panoSurfacePlayback ? zw(e.__panoSurfacePlayback) : Sw(e, ["pano_input_videos"], () => {
    var G, Q;
    return (Q = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : Q.call(G);
  })) || Sg(
    e,
    rr,
    () => {
      var G, Q;
      return (Q = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : Q.call(G);
    },
    { preserveReadyWhilePending: !1 }
  ), f = ca(u);
  let g = null;
  const _ = () => n ? { background: n, layers: [] } : Ww(e, o, u), m = (G, Q) => {
    g || (g = _());
    const Y = r.render({ width: G.w, height: G.h, camera: Q, ...g });
    return Y && c.drawImage(Y.canvas, Y.x, Y.y, Y.width, Y.height, G.x, G.y, G.w, G.h), !!Y;
  };
  if (i === "cutout") {
    const G = Pw(o), Q = Dw(u), Y = G ? Ee(ei(G).aspect, 0.1, 10) : f ? Ee(Number(Q.width / Q.height), 0.05, 20) : 1, oe = pd(d, Y);
    e.__panoCutoutNodeFrame = oe;
    let ie = "none";
    const x = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (G)
      if (u && !f)
        ie = "loading";
      else if (f) {
        const T = R_({ width: s, height: l }, oe, G);
        [
          !T.fallback || m(T.fallback.rect, Bo(T.fallback.shot)),
          m(T.rect, Bo(T.shot)),
          !T.fallback || m(oe, Bo(G))
        ].every(Boolean) || (ie = "loading");
      } else
        ie = "empty";
    else {
      const T = e.__panoLastCutoutShot;
      T ? (e.__panoPreviewView = tg(T, { width: s, height: l }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), f ? m(d, Bs(e.__panoPreviewView, s, l)) || (ie = "loading") : u ? ie = "loading" : ie = "empty";
    }
    f || r.release(), r.failed && ie === "loading" && (ie = "none"), G && (e.__panoLastCutoutShot = { ...G }, c.save(), c.fillStyle = "rgba(0,0,0,0.58)", c.beginPath(), c.rect(0, 0, s, l), c.rect(oe.x, oe.y, oe.w, oe.h), c.fill("evenodd"), c.restore(), c.save(), c.strokeStyle = "rgba(255,221,87,0.72)", c.lineWidth = 2, c.strokeRect(oe.x + 0.5, oe.y + 0.5, Math.max(0, oe.w - 1), Math.max(0, oe.h - 1)), c.restore()), ie === "loading" ? (dc(e, !1), Ja(e, !0, x)) : ie === "empty" ? (dc(e, !0), Ja(e, !1, "")) : (dc(e, !1), Ja(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let p = !1;
  (!u || f) && (g = _(), !g.background && !g.layers.length ? (r.release(), p = !0) : p = m(d, Bs(e.__panoPreviewView, s, l)));
  const E = !p && !r.failed;
  Ja(e, E, E ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), E && Mw(c, d, Kf(t, d));
  const U = ou(e, s, l);
  !u && p && Uw(c, U, Kf(t, d));
  const z = String(((J = o == null ? void 0 : o.active) == null ? void 0 : J.selected_sticker_id) || ""), W = qc(o, tl(e)), k = p && e.__panoStudio !== !0 ? W.find((G) => String((G == null ? void 0 : G.id) || "") === z && (G == null ? void 0 : G.visible) !== !1) : null;
  p && !n && W.filter((G) => G !== k && (G == null ? void 0 : G.visible) !== !1 && (G.external || G.source_kind === "external_image")).filter((G) => !ca(ua(e, G.id, null, { external: !0 }))).forEach((G) => Lw(c, G, U)), k && Rw(c, k, U);
}
function Uf(e, t, r, n, i = 1) {
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
function Uw(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(En(c, s));
    Uf(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(En(s, c));
    Uf(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: En(0, 0) },
    { name: "Right", dir: En(90, 0) },
    { name: "Back", dir: En(180, 0) },
    { name: "Left", dir: En(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function au(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Bw(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Hn(e, t) {
  return Bw(e, t) ? !1 : (au(e), !0);
}
function Bf() {
  var r;
  const e = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Yw(e) {
  var r;
  if (!e) return;
  const t = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function qw(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !gg(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function Xw(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Yf(e, t = null, r = 0, n = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && Jw(e, 180, t);
    }
  };
}
function Jw(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Lo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Zw = /* @__PURE__ */ new WeakMap();
function Pg(e, t) {
  return Vm(Zw, e, t) ? !1 : (_w(e, t), wg(e), Lo(e), !0);
}
async function Qw(e) {
  var r, n;
  const t = await h_(e, zt, hn);
  t && (Pg(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function ex(e, t = {}) {
  var ze;
  const r = t.__allowStandalone === !0, n = yg(e);
  if (n && !r) {
    _d(e);
    return;
  }
  n && qw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = i && e.__panoStudio === !0, a = i && !o, s = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: Gf(e)
  }, c = "dom", d = l.signature || Gf(e);
  if (Number(e.__panoRebindGeneration || 0), ru(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, nu(e), e.__panoFrontendSig = d, e.__panoStickersPath = c, (ze = e.__panoDomPreview) != null && ze.widget || (e.__panoLegacyPreviewHooked && ws(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const u = t.noPreview === !0, f = u ? 0 : 56, g = u ? 0 : F_, _ = document.createElement("div");
  if (ow(), _.className = "pano-node-preview-dom", _.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), u && _.classList.add("pano-node-preview--no-preview"), _.setAttribute("data-capture-wheel", "true"), _.tabIndex = 0, _.style.cssText = [
    "width:100%",
    u ? "height:auto" : "height:100%",
    g > 0 ? `min-height:${g}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), u) {
    const q = Zs(eu(
      e.addDOMWidget(tu(), "preview", _, Yf(e, null))
    ));
    Lo(e), e.__panoDomPreview = { widget: q, root: _, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const m = document.createElement("div");
  m.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const p = rn({ label: "node.surface" });
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
  const E = document.createElement("div");
  E.style.cssText = [
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
  ].join(";"), E.textContent = "Connect ERP image", m.appendChild(p), m.appendChild(E), _.appendChild(m);
  const U = kh(_), z = document.createElement("div");
  z && (z.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", z.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", _.appendChild(z)), aw(e, 120, 120), Lo(e);
  let W = null;
  try {
    Xw(e, f, () => {
      var q, Ce;
      return (Ce = (q = e.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : Ce.call(q);
    }), W = Zs(eu(e.addDOMWidget(
      tu(),
      "preview",
      _,
      Yf(
        e,
        () => {
          var q, Ce;
          return (Ce = (q = e.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : Ce.call(q);
        },
        f,
        g,
        !1
      )
    )));
  } catch {
    return;
  }
  const k = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, te = kS(), K = () => {
    k.destroyed || (k.needsDraw = !0, !k.inTick && !k.raf && (k.raf = requestAnimationFrame(ae)));
  }, ce = Am(K), O = /* @__PURE__ */ ao(i ? {
    ...Xm(un(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...o ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Qm(un(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((q) => ({ value: q, label: q }))
  });
  let fe = null;
  if (i && e.__panoSceneStateV2) {
    const [q, Ce] = [0, 1].map(() => {
      const We = ya(document, "node.playback");
      return We.playsInline = !0, We.preload = "auto", We.crossOrigin = "anonymous", We.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", m.appendChild(We), We;
    }), Ve = rn({ label: "node.still" });
    Ve.__panoFrameIdx = 0;
    const Ie = rn({ label: "node.port-still" });
    Ie.__panoFrameIdx = 0;
    const je = E_({
      video: q,
      stickerVideo: Ce,
      createImage: (We, Be) => {
        const nt = new Image();
        return nt.onload = Be, nt.onerror = Be, nt.src = We, nt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (We) => requestAnimationFrame(We),
        cancelFrame: (We) => cancelAnimationFrame(We)
      },
      readState: () => un(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: K,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Be;
        if (!(q.videoWidth > 0 && q.videoHeight > 0)) return;
        const We = Math.min(1, rw / q.videoWidth);
        Ve.width = Math.round(q.videoWidth * We), Ve.height = Math.round(q.videoHeight * We), (Be = Ve.getContext("2d")) == null || Be.drawImage(q, 0, 0, Ve.width, Ve.height), Ve.__panoFrameIdx += 1, K();
      },
      onStickerCapture: () => {
        var We;
        Ce.videoWidth > 0 && Ce.videoHeight > 0 && (Ie.width = Ce.videoWidth, Ie.height = Ce.videoHeight, (We = Ie.getContext("2d")) == null || We.drawImage(Ce, 0, 0), Ie.__panoFrameIdx += 1, K());
      },
      onChange: () => {
        O.playing = je.playing, K();
      }
    });
    fe = { playback: je, video: q, still: Ve, stickerVideo: Ce, stickerStill: Ie, stickerSource: "" }, e.__panoSurfacePlayback = fe;
  }
  const F = () => {
    var nt;
    const { playback: q, still: Ce, stickerStill: Ve } = fe, Ie = bs(m, !!((nt = e.flags) != null && nt.collapsed)), je = q.source, We = Ie ? $w(e) : null, Be = q.follow({
      shown: Ie,
      sources: Ie ? Vw(e) : [],
      state: un(e),
      sticker: We
    });
    ((We == null ? void 0 : We.src) || "") !== fe.stickerSource && (fe.stickerSource = (We == null ? void 0 : We.src) || "", ea(Ve)), q.source !== je && (ea(Ce), Ce.__panoFrameIdx = 0), O.playable = Be, O.playing = q.playing;
  }, J = () => {
    var Ce, Ve;
    const q = ((Ce = e.__panoOwnOutputVideoCache) == null ? void 0 : Ce.player) ?? null;
    q && !bs(m, !!((Ve = e.flags) != null && Ve.collapsed)) && q.pause(), i && (O.playable = !!q && !q.failed(), O.playing = !!(q != null && q.playing));
  }, G = () => {
    var q;
    fe == null || fe.playback.pause(), (q = e.__panoOwnOutputVideoCache) == null || q.player.pause();
  };
  let Q = null;
  const Y = (i ? A_ : $_)({
    readState: () => un(e),
    publishLiveState: (q) => {
      q ? (Q = q, e.__panoLiveStateOverride = q) : (e.__panoLiveStateOverride === Q && (e.__panoLiveStateOverride = null), Q = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, K();
    },
    commitState: (q) => {
      var Ie, je, We, Be;
      const Ce = mr(e, "state_json");
      if (!Ce) return;
      om(e, q.active);
      const Ve = sm(e, q);
      lm(e, Ve, String(Ce.value ?? "")) || (Ce.value = Ve, (Ie = Ce.callback) == null || Ie.call(Ce, Ve), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Be = (We = e.graph) == null ? void 0 : We.setDirtyCanvas) == null || Be.call(We, !0, !0));
    },
    onChange: (q) => Object.assign(O, q)
  }), ie = i ? dg(e, (q = "sync", Ce = null) => {
    var Ye;
    if (!i || !e.graph || !Y || Y.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Ht = Xt(e, "external-sticker"), bn = un(e).stickers.find((Sr) => Sr.source.kind === "port");
      return Y.apply({
        type: "sync-port",
        value: Ym(e, {
          pose: Ht ? Vr(e, "pano_sticker_input_pose", Ce) : null,
          image: bn ? ua(e, bn.id, null, { external: !0 }) : null
        })
      });
    }
    const Ve = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Ht) => String((Ht == null ? void 0 : Ht.name) || "") === "sticker_image") : -1, Ie = Ve >= 0 ? ((Ye = e.getInputLink(Ve)) == null ? void 0 : Ye.id) ?? null : null;
    if (Ie == null)
      return Y.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Xt(e, "external-sticker")) return !1;
    const je = Vr(e, "pano_sticker_input_pose", Ce), We = Array.isArray(je) ? je[0] : je, Be = String(Vr(e, "pano_sticker_input_state_hash", Ce) ?? ""), nt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, yt = un(e), Ft = (Array.isArray(yt == null ? void 0 : yt.stickers) ? yt.stickers : []).find((Ht) => String((Ht == null ? void 0 : Ht.id) || "") === "sticker_image_1"), vt = ua(e, "sticker_image_1", null, { external: !0 }), Dt = We && typeof We == "object" ? We : Ft || { yaw_deg: nt.yaw, pitch_deg: nt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return Y.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ie,
        stateHash: Be,
        pose: Dt,
        imageWidth: Number((vt == null ? void 0 : vt.naturalWidth) || (vt == null ? void 0 : vt.width) || 0),
        imageHeight: Number((vt == null ? void 0 : vt.naturalHeight) || (vt == null ? void 0 : vt.height) || 0)
      }
    });
  }) : () => {
  };
  let x = 0;
  const T = async (q) => {
    if (!i || !Y || !Zn(q)) return !1;
    G();
    const Ce = `asset_${Math.random().toString(16).slice(2, 10)}`, Ve = `st_${Math.random().toString(16).slice(2, 10)}`, Ie = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    x += 1, O.importing = !0;
    const je = To(e, `add:${Ce}`, async () => {
      const We = await Do(q), Be = await fi(q, {
        fetchApi: (nt, yt) => hn.fetchApi(nt, yt)
      });
      return I(), Y.apply({
        type: "add-sticker",
        value: {
          stickerId: Ve,
          assetId: Ce,
          asset: Be,
          imageWidth: We.width,
          imageHeight: We.height,
          yaw_deg: Number(Ie.yaw || 0),
          pitch_deg: Number(Ie.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      x = Math.max(0, x - 1), O.importing = x > 0, K();
    }
  };
  let Z = null, V = null, pe = null, Se = !1;
  const ee = () => {
    var q;
    return pe && (clearTimeout(pe), pe = null), Se ? (Se = !1, ((q = Y == null ? void 0 : Y.commitGesture) == null ? void 0 : q.call(Y)) ?? !1) : !1;
  }, I = () => {
    var Ie, je, We;
    const q = ee(), Ce = (Z == null ? void 0 : Z.pointerId) ?? (V == null ? void 0 : V.pointerId);
    if (Z = null, V = null, Ce != null) {
      try {
        (Ie = p.hasPointerCapture) != null && Ie.call(p, Ce) && ((je = p.releasePointerCapture) == null || je.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Ve = ((We = Y == null ? void 0 : Y.commitGesture) == null ? void 0 : We.call(Y)) ?? !1;
    return q || Ve;
  }, X = () => {
    var Ie, je, We;
    const q = ee(), Ce = Z == null ? void 0 : Z.pointerId;
    if (Z = null, Ce != null) {
      try {
        (Ie = p.hasPointerCapture) != null && Ie.call(p, Ce) && ((je = p.releasePointerCapture) == null || je.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Ve = ((We = Y == null ? void 0 : Y.cancelGesture) == null ? void 0 : We.call(Y)) ?? !1;
    return q || Ve;
  }, se = () => I();
  Y && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(se));
  let be = null, we = !1;
  if (z && Y)
    try {
      gd(), be = Ou(o ? yS : i ? dS : rS, {
        model: O,
        onAction: (q) => {
          var Ie, je, We;
          if ((q == null ? void 0 : q.type) === "toggle-playback") {
            I(), fe ? fe.playback.toggle() : (Ie = e.__panoOwnOutputVideoCache) == null || Ie.player.toggle(), K();
            return;
          }
          if (G(), (q == null ? void 0 : q.type) === "open-editor") {
            I(), i || (O.aspectOpen = !1), (je = e.__panoOpenEditor) == null || je.call(e);
            return;
          }
          if (i) {
            if ((q == null ? void 0 : q.type) === "add-image-file") {
              T(q.file);
              return;
            }
            Y.apply(q) && K();
            return;
          }
          if ((q == null ? void 0 : q.type) === "toggle-aspect") {
            O.aspectOpen = !O.aspectOpen;
            return;
          }
          if ((q == null ? void 0 : q.type) === "close-aspect") {
            O.aspectOpen = !1;
            return;
          }
          let Ce = q;
          if ((q == null ? void 0 : q.type) === "add-frame") {
            const Be = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            Ce = {
              ...q,
              ...D_(Be, {
                width: p.width,
                height: p.height
              })
            };
          } else if ((q == null ? void 0 : q.type) === "delete-frame") {
            const Be = _i(un(e));
            Be && (e.__panoPreviewView = tg(Be, {
              width: p.width,
              height: p.height
            }));
          }
          const Ve = ((We = e.__panoCutoutNodeFrame) == null ? void 0 : We.safeRect) || null;
          O.aspectOpen = !1, Y.apply({ ...Ce, safeRect: Ve }) && K();
        }
      }), be.mount(z), we = !0;
    } catch {
      be = null, we = !1;
    }
  const C = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    fe && F(), K();
  }) : null;
  C == null || C.observe(m);
  const ae = (q) => {
    var Ve, Ie, je;
    k.raf = 0, k.inTick = !0;
    let Ce = !1;
    try {
      if (Ce = b.stepInertia(q), k.needsDraw || Ce) {
        k.needsDraw = !1, fe ? F() : J();
        const We = o ? Hw(e, fe) : null, Be = () => kg(e, un(e)), nt = We && bs(m, !!((Ve = e.flags) != null && Ve.collapsed)) ? Gw(e, SS(Be(), We), Be) : null;
        if ((Ie = e.flags) != null && Ie.collapsed || Kw(e, p, ce, nt), O.viewUnavailable = ce.failed, o) {
          const yt = te({ ...We, showingRun: !!nt }, Be);
          yt && (O.status = yt);
        }
      }
    } finally {
      k.inTick = !1;
    }
    (Ce || k.needsDraw) && !k.raf && (k.raf = requestAnimationFrame(ae)), iw() && (!e.__panoDebugLastTs || q - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = q, e.__panoPreviewMode, nu(e), Ao(_), Ao(m), Ao(p), Ao(_.parentElement), Ao((je = _.parentElement) == null ? void 0 : je.parentElement), Number(p.width || 0), Number(p.height || 0), void 0);
  }, b = Ru({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (q) => {
      e.__panoPreviewView = q;
    },
    getViewportSize: () => {
      const q = p.getBoundingClientRect();
      return {
        w: Math.max(1, Number(q.width || p.clientWidth || 0)),
        h: Math.max(1, Number(q.height || p.clientHeight || 0))
      };
    },
    getInvert: () => {
      const q = Hf();
      return {
        x: q.invert_view_x ? -1 : 1,
        y: q.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      K();
    }
  }), S = i ? m : _, $ = (q) => {
    const Ce = p.getBoundingClientRect();
    return {
      x: (Number(q.clientX) - Ce.left) * (p.width / Math.max(1, Ce.width)),
      y: (Number(q.clientY) - Ce.top) * (p.height / Math.max(1, Ce.height))
    };
  }, H = (q) => {
    var Ie, je;
    if (!i || o || !s) return;
    const Ce = un(e), Ve = Rf(
      qc(Ce, tl(e)),
      String(((Ie = Ce == null ? void 0 : Ce.active) == null ? void 0 : Ie.selected_sticker_id) || ""),
      $(q),
      ou(e, p.width, p.height)
    );
    if (!Ve) {
      p.style.cursor = "grab";
      return;
    }
    if (((je = Ve.item) == null ? void 0 : je.locked) === !0) {
      p.style.cursor = "default";
      return;
    }
    p.style.cursor = Ve.hit.cursor || "default";
  };
  p.addEventListener("pointerdown", (q) => {
    var nt, yt, Ft, vt, Dt, tn, Ye, Ht, bn, Sr, Gr;
    if (!Hn(q, S) || q.button !== 0) return;
    if (!i) {
      const on = _i(un(e)), Mn = e.__panoCutoutNodeFrame;
      if (!on) {
        (nt = _.focus) == null || nt.call(_, { preventScroll: !0 }), (yt = p.setPointerCapture) == null || yt.call(p, q.pointerId), p.style.cursor = "grabbing", b.startDrag(q.clientX, q.clientY, q.pointerId);
        return;
      }
      if (on.locked === !0 || !Mn || !Y) return;
      const Wr = $(q);
      let wr;
      if (q.shiftKey) {
        const Xn = rg({
          frame: Mn,
          point: Wr,
          startRollDeg: Number(on.roll_deg ?? on.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Xn) return;
        wr = { kind: "roll", pointerId: q.pointerId, rollGesture: Xn };
      } else {
        const Xn = ((Ft = un(e)) == null ? void 0 : Ft.ui_settings) || Hf();
        wr = {
          kind: "pan",
          pointerId: q.pointerId,
          startPoint: Wr,
          startShot: { ...on },
          focalPx: wi(Mn, on),
          invertX: Xn.invert_view_x === !0,
          invertY: Xn.invert_view_y === !0
        };
      }
      I(), (vt = _.focus) == null || vt.call(_, { preventScroll: !0 }), (Dt = p.setPointerCapture) == null || Dt.call(p, q.pointerId), p.style.cursor = "grabbing", Y.beginGesture(), Z = wr;
      return;
    }
    if (!s) return;
    const Ce = $(q), Ve = un(e), Ie = String(((tn = Ve == null ? void 0 : Ve.active) == null ? void 0 : tn.selected_sticker_id) || ""), je = ou(e, p.width, p.height);
    (Ye = _.focus) == null || Ye.call(_, { preventScroll: !0 });
    const We = () => Rf(qc(Ve, tl(e)), Ie, Ce, je);
    let Be = o ? null : We();
    if (Be && (fe != null && fe.playback.playing) && (G(), Be = We()), Be && Y) {
      if (b.stopMotion(), I(), String(((Ht = Be.item) == null ? void 0 : Ht.id) || "") !== Ie && Y.apply({ type: "select-sticker", id: Be.item.id }), ((bn = Be.item) == null ? void 0 : bn.locked) === !0) {
        K();
        return;
      }
      const on = Ce, Mn = Be.geometry.center;
      V = {
        active: !0,
        kind: Be.hit.kind,
        pointerId: q.pointerId,
        startPoint: on,
        startCenter: { ...Mn },
        startSticker: { ...Be.item },
        startDistance: Math.max(1, Math.hypot(on.x - Mn.x, on.y - Mn.y)),
        startAngle: Math.atan2(on.y - Mn.y, on.x - Mn.x),
        projection: je
      }, Y.beginGesture(), (Sr = p.setPointerCapture) == null || Sr.call(p, q.pointerId), p.style.cursor = Be.hit.kind === "rotate" ? "grabbing" : Be.hit.kind === "move" ? "move" : Be.hit.cursor, K();
      return;
    }
    (Gr = p.setPointerCapture) == null || Gr.call(p, q.pointerId), p.style.cursor = "grabbing", b.startDrag(q.clientX, q.clientY, q.pointerId);
  }), p.addEventListener("pointermove", (q) => {
    if (!i) {
      if (!Z) {
        if (!b.state.drag.active) return;
        Hn(q, S), b.moveDrag(q.clientX, q.clientY, "pano");
        return;
      }
      if (Z.pointerId !== q.pointerId || !Y) return;
      if (Hn(q, S), Z.kind === "pan") {
        const Ve = $(q);
        Y.updateGesture({
          type: "pan-camera",
          startShot: Z.startShot,
          dx: Ve.x - Z.startPoint.x,
          dy: Ve.y - Z.startPoint.y,
          focalPx: Z.focalPx,
          invertX: Z.invertX,
          invertY: Z.invertY
        });
        return;
      }
      const Ce = ig(Z.rollGesture, $(q), q);
      if (!Ce) return;
      Z.rollGesture = Ce.gesture, Y.updateGesture({ type: "set-roll", value: Ce.rollDeg });
      return;
    }
    if (!V && !b.state.drag.active) {
      H(q);
      return;
    }
    if (V) {
      if (V.pointerId !== q.pointerId || !Y) return;
      Hn(q, S);
      const Ce = $(q);
      let Ve = V.startSticker;
      if (V.kind === "move")
        Ve = CS(
          V.startSticker,
          {
            x: V.startCenter.x + Ce.x - V.startPoint.x,
            y: V.startCenter.y + Ce.y - V.startPoint.y
          },
          V.projection
        );
      else if (V.kind === "scale") {
        const Ie = Math.hypot(Ce.x - V.startCenter.x, Ce.y - V.startCenter.y);
        Ve = AS(V.startSticker, V.startDistance, Ie);
      } else if (V.kind === "rotate") {
        const Ie = Math.atan2(Ce.y - V.startCenter.y, Ce.x - V.startCenter.x);
        Ve = IS(V.startSticker, V.startAngle, Ie, q.shiftKey === !0);
      }
      Y.updateGesture({ type: "set-transform", value: Ve }), K();
      return;
    }
    !s || !b.state.drag.active || (Hn(q, S), b.moveDrag(q.clientX, q.clientY, "pano"));
  });
  const v = () => {
    var Ce, Ve;
    if (!Z && !V) {
      if (!b.state.drag.active) return;
      b.endDrag(), p.style.cursor = "grab", K();
      return;
    }
    if (!Y) return;
    const q = (Z == null ? void 0 : Z.pointerId) ?? (V == null ? void 0 : V.pointerId);
    Z = null, V = null;
    try {
      (Ce = p.hasPointerCapture) != null && Ce.call(p, q) && ((Ve = p.releasePointerCapture) == null || Ve.call(p, q));
    } catch {
    }
    Y.cancelGesture(), p.style.cursor = "grab", K();
  }, w = (q, Ce = !1) => {
    var Ve, Ie, je, We;
    if (!i) {
      if (!Z) {
        if (!b.state.drag.active) return;
        Hn(q, S), (Ve = p.releasePointerCapture) == null || Ve.call(p, q.pointerId), p.style.cursor = "grab", b.endDrag(), K();
        return;
      }
      if (Z.pointerId !== q.pointerId || !Y) return;
      Hn(q, S), Z = null, (Ie = p.releasePointerCapture) == null || Ie.call(p, q.pointerId), p.style.cursor = "grab", Ce ? Y.cancelGesture() : Y.commitGesture(), H(q), K();
      return;
    }
    if (V) {
      if (V.pointerId !== q.pointerId || !Y) return;
      Hn(q, S), V = null, (je = p.releasePointerCapture) == null || je.call(p, q.pointerId), p.style.cursor = "grab", Ce ? Y.cancelGesture() : Y.commitGesture(), K();
      return;
    }
    !s || !b.state.drag.active || (Hn(q, S), (We = p.releasePointerCapture) == null || We.call(p, q.pointerId), p.style.cursor = "grab", b.endDrag(), K());
  };
  p.addEventListener("pointerup", w), p.addEventListener("pointercancel", (q) => w(q, !0)), p.addEventListener("lostpointercapture", v), p.addEventListener("pointerleave", (q) => {
    !i && Z || V || b.state.drag.active && w(q);
  });
  const L = (q) => {
    const Ce = document.activeElement;
    if (Ce !== _ && !_.contains(Ce)) return;
    if (q.key === "Escape" && (Z || V) && Y) {
      v(), au(q);
      return;
    }
    if (!i || o || q.key !== "Delete" && q.key !== "Backspace" || !Y) return;
    const Ve = q.target, Ie = String((Ve == null ? void 0 : Ve.tagName) || "").toUpperCase();
    Ie === "INPUT" || Ie === "TEXTAREA" || Ve != null && Ve.isContentEditable || O.canDelete === !0 && (G(), I(), Y.apply({ type: "delete-selected" }) && K(), au(q));
  };
  window.addEventListener("keydown", L, !0);
  const M = ew({
    requestFrame: (q) => requestAnimationFrame(q),
    cancelFrame: (q) => cancelAnimationFrame(q),
    restore: (q) => Yw(q)
  }), P = (q) => {
    var Ve, Ie, je, We, Be, nt;
    if (!Hn(q, S)) return;
    if (!i) {
      const yt = _i(un(e));
      if (yt && yt.locked !== !0 && Y) {
        const Ft = Ts(q);
        Ft !== 0 && (Se || (I(), Y.beginGesture(), Se = !0), Y.updateGesture({
          type: "step-fov",
          direction: Ft
        }) ? (pe && clearTimeout(pe), pe = setTimeout(ee, 180), K()) : Y.hasGestureChanges() || (Y.cancelGesture(), Se = !1));
      } else if (!yt) {
        const Ft = Bf();
        b.applyWheelEvent(q) && K(), M.schedule(Ft);
      }
      (Ve = q.preventDefault) == null || Ve.call(q), (Ie = q.stopPropagation) == null || Ie.call(q), (je = q.stopImmediatePropagation) == null || je.call(q);
      return;
    }
    if (!s) return;
    const Ce = Bf();
    b.applyWheelEvent(q) && K(), (We = q.preventDefault) == null || We.call(q), (Be = q.stopPropagation) == null || Be.call(q), (nt = q.stopImmediatePropagation) == null || nt.call(q), M.schedule(Ce);
  }, A = i ? [m, p] : [m];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((q) => {
    A.forEach((Ce) => Ce.addEventListener(q, P, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((q) => {
    p.addEventListener(q, (Ce) => Hn(Ce, S)), m.addEventListener(q, (Ce) => Hn(Ce, S));
  });
  const B = mr(e, "state_json");
  let re = null, me = null;
  B && !B.__panoPreviewPatchedCb && (re = B.callback, me = (q) => {
    const Ce = re ? re(q) : void 0;
    return K(), Ce;
  }, B.callback = me, B.__panoPreviewPatchedCb = me);
  const j = mr(e, "bg_color");
  let de = null, _e = null;
  j && !j.__panoPreviewPatchedCb && (de = j.callback, _e = (q) => {
    const Ce = de ? de(q) : void 0;
    return K(), Ce;
  }, j.callback = _e, j.__panoPreviewPatchedCb = _e);
  const ke = o ? mr(e, "output_size") : null, ue = ke == null ? void 0 : ke.callback, ve = ke ? (q) => {
    const Ce = ue ? ue(q) : void 0;
    return K(), Ce;
  } : null;
  ke && (ke.callback = ve);
  const Ne = e.onRemoved, h = e.onResize, R = e.onExecuted, N = e.onDragOver, y = e.onDragDrop;
  let D = null;
  const le = () => {
    i && (O.dropActive = !0, D && clearTimeout(D), D = setTimeout(() => {
      D = null, O.dropActive = !1;
    }, 140));
  }, ge = a ? function(q) {
    return (N ? N.apply(this, arguments) : !1) === !0 ? !0 : bd(q == null ? void 0 : q.dataTransfer) ? (le(), !0) : !1;
  } : null, he = a ? function(q) {
    var Ie;
    if ((y ? y.apply(this, arguments) : !1) === !0) return !0;
    const Ve = Array.from(((Ie = q == null ? void 0 : q.dataTransfer) == null ? void 0 : Ie.files) || []).find((je) => Zn(je));
    return Ve ? (D && clearTimeout(D), D = null, O.dropActive = !1, T(Ve), !0) : !1;
  } : null;
  a && (e.onDragOver = ge, e.onDragDrop = he);
  const ne = a ? QS(_, {
    onActive: (q) => {
      if (q) {
        le();
        return;
      }
      D && clearTimeout(D), D = null, O.dropActive = !1;
    },
    onDrop: (q) => {
      T(q);
    }
  }) : () => {
  }, ye = function(q) {
    e.__panoOutputFromRun = !0;
    const Ce = Pg(e, q);
    Rr(e, Ce ? "executed" : "sync", q), K();
    const Ve = R ? R.apply(this, arguments) : void 0;
    return Lo(e), Ve;
  };
  e.onExecuted = ye;
  const Me = e.onConnectionsChange, Ae = function(q, Ce) {
    const Ve = Mf(e, q, Ce, id), Ie = Mf(e, q, Ce, rr), je = arguments, We = Me ? Me.apply(this, je) : void 0, Be = () => {
      k.destroyed || (Ie && kw(e), Ve && Rr(e, "connection-change"), Lo(e), K());
    };
    return Be(), queueMicrotask(Be), We;
  };
  e.onConnectionsChange = Ae;
  const Le = function() {
    const q = h ? h.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, K(), q;
  };
  e.onResize = Le;
  const Re = function() {
    return He(), iu.unregister(this), Ne ? Ne.apply(this, arguments) : void 0;
  };
  e.onRemoved = Re;
  const He = () => {
    var q, Ce, Ve, Ie, je, We, Be, nt, yt;
    k.destroyed = !0, (q = C == null ? void 0 : C.disconnect) == null || q.call(C), i ? I() : X(), p.removeEventListener("lostpointercapture", v), ne(), U(), window.removeEventListener("keydown", L, !0), (Ve = (Ce = e.__panoStateFlushers) == null ? void 0 : Ce.delete) == null || Ve.call(Ce, se), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ie = Y == null ? void 0 : Y.destroy) == null || Ie.call(Y), (je = be == null ? void 0 : be.unmount) == null || je.call(be), fe && (fe.playback.dispose(), fe.video.remove(), fe.stickerVideo.remove(), e.__panoSurfacePlayback === fe && (e.__panoSurfacePlayback = null)), ce.dispose(), e.__panoSurfaceScene = null, (Be = (We = e.__panoRasterObjectSurfaceCache) == null ? void 0 : We.dispose) == null || Be.call(We), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ie(), M.dispose(), D && clearTimeout(D), D = null, vd.disposeOwner(e), Xi(e), Mg(e), k.raf && cancelAnimationFrame(k.raf), k.raf = 0, ((nt = e.__panoCutoutNodeSurface) == null ? void 0 : nt.session) === Y && (e.__panoCutoutNodeSurface = null), ((yt = e.__panoStickersNodeSurface) == null ? void 0 : yt.session) === Y && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Le && (e.onResize = h), e.onExecuted === ye && (e.onExecuted = R), e.onConnectionsChange === Ae && (e.onConnectionsChange = Me), me && (B == null ? void 0 : B.callback) === me && (B.callback = re), me && (B == null ? void 0 : B.__panoPreviewPatchedCb) === me && delete B.__panoPreviewPatchedCb, _e && (j == null ? void 0 : j.callback) === _e && (j.callback = de), _e && (j == null ? void 0 : j.__panoPreviewPatchedCb) === _e && delete j.__panoPreviewPatchedCb, ve && ke.callback === ve && (ke.callback = ue), e.onDragOver === ge && (e.onDragOver = N), e.onDragDrop === he && (e.onDragDrop = y), e.onRemoved === Re && (e.onRemoved = Ne);
  };
  e.__panoDomRestore = He, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = Y && we && !i ? { session: Y, model: O } : null, e.__panoStickersNodeSurface = Y && we && i ? { session: Y, model: O } : null, e.__panoDomPreview = {
    widget: W,
    root: _,
    canvas: p,
    requestDraw: K,
    state: k,
    emptyHintEl: E,
    nodeSurface: e.__panoCutoutNodeSurface
  }, iu.register(e), e.graph && Rr(e, "attach"), K();
}
function qf(e, t = {}) {
  bg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Xf(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (yg(e) && !r) {
    _d(e);
    return;
  }
  bg(e).attach(t);
}
function tx(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function nx(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, c = Math.max(0, Number.isFinite(s) ? s : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let g = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (g = Math.min(g, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(c * g))
  };
}
function rx({
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
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const _ = l();
    return _ === s || (s = _, i(_)), _;
  }, d = () => c();
  return (g = t == null ? void 0 : t.addEventListener) == null || g.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var _;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((_ = t.exitFullscreen) == null ? void 0 : _.call(t));
      } catch {
      }
      return a ? !1 : (c(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (l())
          return c(), !0;
      } catch {
      }
    return a || (o(), c()), !1;
  }, isActive: l, destroy: () => {
    var _, m, p;
    if (!a) {
      if (a = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", d), l())
        try {
          const E = (m = t.exitFullscreen) == null ? void 0 : m.call(t);
          (p = E == null ? void 0 : E.catch) == null || p.call(E, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const ix = { class: "pano-preview-node-surface" }, ox = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", ix, [
      Ue(Qt, {
        icon: e.model.fullscreen ? tt(Ge).fullscreen_close : tt(Ge).fullscreen,
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
      e.model.viewUnavailable ? (Te(), zn(Nl, { key: 0 })) : pt("", !0)
    ]));
  }
}, Za = 140, ax = 180, Jf = 40, fc = 10;
function Zf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Qf(e, t) {
  const r = Zf(e), n = Zf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function ep(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function Ji(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ji(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return ep({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ep(e);
}
function Ng(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function sx(e) {
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
function su(e) {
  var i;
  const t = (i = Qn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Qf(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Qf(o, r)) return t[o];
  return null;
}
function lx(e) {
  var n, i;
  const t = su(e == null ? void 0 : e.id), r = [
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
function cx(e, t = "erp_image") {
  var g, _, m, p, E, U, z;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((W) => String((W == null ? void 0 : W.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((W, k) => String((W == null ? void 0 : W.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(k))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (m = (_ = (g = Qn) == null ? void 0 : g.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : m.call(_, o), s = su(o), l = su(e == null ? void 0 : e.id), c = [
    (p = l == null ? void 0 : l.ui) == null ? void 0 : p.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (E = s == null ? void 0 : s.ui) == null ? void 0 : E.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const W of c)
    if (Array.isArray(W))
      for (const k of W) {
        const te = Ji(k);
        if (te) return te;
      }
  let d = [];
  try {
    d = typeof ((U = Qn) == null ? void 0 : U.getNodeImageUrls) == "function" ? Qn.getNodeImageUrls(a) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const W of d) {
      const k = Ji(W);
      if (k) return k;
    }
  if (a) {
    const W = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const k of W) {
      const te = Ji(k);
      if (te) return te;
    }
  }
  const u = (z = a == null ? void 0 : a.widgets) == null ? void 0 : z.find((W) => String((W == null ? void 0 : W.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? hn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function pc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function tp(e, t, r, n, i, o, a) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !Ng(o) || r <= 1 || n <= 1) {
    pc(t, r, n);
    return;
  }
  if (a.failed) {
    pc(t, r, n);
    return;
  }
  const s = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: Bs(i, r, n),
    background: { media: o, revision: sx(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : pc(t, r, n);
}
function np(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class ux {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Am(() => this.requestDraw()), this.controller = Ru({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: jt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ee(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ee(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
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
        `min-height:${Za}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = rn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Za;
        },
        getHeight() {
          return Za;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Zs(eu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Za, Number(o.minHeight || 0)),
            minWidth: Math.max(ax, Number(o.minWidth || 0))
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
      return gd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ao({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = rx({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = Ou(ox, {
        model: this.surfaceModel,
        onAction: (s) => {
          var l, c;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = kh(r), t.addEventListener("pointerdown", (o) => {
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
      tx(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Ng(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? bs(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Qn.canvas) != null && n.graph) || this.node.graph === Qn.canvas.graph);
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
      return np(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, c, d, u, f, g;
      const o = Aw(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !np(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), s && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (g = r == null ? void 0 : r.stopImmediatePropagation) == null || g.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - fc * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Jf - fc);
    return { x: fc, y: Jf, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), tp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Cm : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = nx(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = lx(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = ya(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, c = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", c), s.addEventListener("play", c), s.addEventListener("pause", c), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", c), s.removeEventListener("play", c), s.removeEventListener("pause", c), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = cx(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), tp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, c, d, u, f, g, _, m, p, E;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (g = this.root) == null ? void 0 : g.remove) == null || _.call(g);
    } catch {
    }
    try {
      hg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((E = (p = (m = this.node) == null ? void 0 : m.widgets) == null ? void 0 : p.find) == null ? void 0 : E.call(p, (U) => (U == null ? void 0 : U.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function dx(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new ux(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function Cg(e, t, r) {
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
function wd(e) {
  return !!(e != null && e.prototype);
}
function da(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function fx(e, t = {}) {
  wd(e) || dx(e, {
    ...t,
    onOpen: da(e, t.onOpen)
  });
}
function px(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!wd(e)) {
    Xf(e, {
      ...n,
      onOpen: da(e, t.onOpen)
    });
    return;
  }
  Cg(e, "stickers_node_preview", (i) => {
    Xf(i, {
      ...n,
      onOpen: da(i, t.onOpen)
    });
  });
}
function hx(e, t = {}) {
  if (!wd(e)) {
    qf(e, {
      ...t,
      onOpen: da(e, t.onOpen)
    });
    return;
  }
  Cg(e, "cutout_preview", (r) => {
    qf(r, {
      ...t,
      onOpen: da(r, t.onOpen)
    });
  });
}
const In = {
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
}, Ir = "pen";
function rp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function mx({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
}), gx = new Set(Object.values(dt));
function yx({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(m) {
    try {
      m();
    } catch (p) {
      i(p);
    }
  }
  function g() {
    !o && !a && !s && (o = e(_));
  }
  function _(m) {
    o = 0, a = !0;
    try {
      const p = c;
      c = /* @__PURE__ */ new Map();
      for (const U of p.values()) f(() => U(m));
      if (s) return;
      const E = l;
      l = /* @__PURE__ */ new Set(), (E.size || n()) && f(() => r(m, E));
    } finally {
      a = !1;
    }
    (l.size || c.size || n()) && g();
  }
  return {
    requestDraw(m) {
      if (!gx.has(m)) throw new Error(`Unknown draw reason: ${m}`);
      m === dt.STATE && (u += 1), l.add(m), g();
    },
    requestFrame(m) {
      const p = d++;
      return c.set(p, m), g(), p;
    },
    cancelFrame(m) {
      c.delete(m);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      g();
    },
    get stateRevision() {
      return u;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      s = !0, o && t(o), o = 0, c.clear(), l.clear();
    }
  };
}
const bx = { class: "pano-floating-right" }, vx = {
  key: 0,
  class: "pano-floating-space"
}, _x = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Sx = ["data-settled"], wx = ["data-ready", "data-settled"], xx = ["aria-label", "data-tip"], kx = {
  key: 1,
  class: "pano-camera-preview-label"
}, Mx = {
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
    return (t, r) => (Te(), De(Ze, null, [
      Pe("div", bx, [
        e.space ? Lr((Te(), De("div", vx, [
          Pe("div", _x, [
            (Te(!0), De(Ze, null, Pt(e.space.modes, (n) => (Te(), zn(Qt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ue(Qt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Si, e.space.visible]
        ]) : pt("", !0),
        (Te(!0), De(Ze, null, Pt(e.buttons, (n) => (Te(), zn(Qt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Lr(Pe("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Pe("div", {
          class: ht(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: At({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Pe("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Pe("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Te(), De("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ue(Vt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, xx)) : pt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), De("div", kx, rt(e.preview.label || "Preview unavailable"), 1)) : pt("", !0)
        ], 14, wx)
      ], 8, Sx), [
        [Si, e.preview.visible]
      ])
    ], 64));
  }
}, Px = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Nx = ["y2", "transform"], Cx = ["transform"], Ax = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Lr((Te(), De("div", {
      class: ht(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), De("svg", Px, [
        o[1] || (o[1] = Pe("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (a) => (Te(), De("line", {
          key: a,
          class: ht(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, Nx))), 128)),
        Pe("g", { transform: n.value }, [...o[0] || (o[0] = [
          Pe("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Cx),
        o[2] || (o[2] = Pe("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Si, e.model.visible === !0]
    ]);
  }
}, Ix = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: ht(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ue(ag, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ue(Qt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ue(Ax, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Ex = ["aria-label"], Ox = { class: "pano-canvas-confirm-title" }, Fx = { class: "pano-canvas-confirm-text" }, Tx = { class: "pano-canvas-confirm-actions" }, Dx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Lx = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Yt(null), n = /* @__PURE__ */ Yt(null);
    let i = null;
    function o() {
      const u = n.value;
      return u ? Array.from(u.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function a(u) {
      const f = n.value;
      if (!f) return;
      const g = f.querySelector(`[data-action='${u}']`);
      g instanceof HTMLButtonElement && g.click();
    }
    function s() {
      var m;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const _ = o()[0] || u;
      (m = _ == null ? void 0 : _.focus) == null || m.call(_);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var E;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), g = n.value;
      if (!f.length) {
        u.preventDefault(), (E = g == null ? void 0 : g.focus) == null || E.call(g);
        return;
      }
      const _ = f[0], m = f[f.length - 1], p = document.activeElement;
      if (u.shiftKey) {
        (p === _ || p === g || !(g != null && g.contains(p))) && (u.preventDefault(), m.focus());
        return;
      }
      (p === m || !(g != null && g.contains(p))) && (u.preventDefault(), _.focus());
    }
    function d(u) {
      u.target === r.value && a("confirm-cancel");
    }
    return yi(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, fl(() => {
          s();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), ma(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Te(), De("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Nt(d, ["self"])
    }, [
      Pe("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Pe("div", Ox, rt(e.model.title), 1),
        Pe("div", Fx, rt(e.model.text), 1),
        Pe("div", Tx, [
          f[0] || (f[0] = Pe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Pe("button", Dx, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Ex)
    ], 512)) : pt("", !0);
  }
}, Rx = ["data-paint-pane"], Vx = ["hidden"], $x = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], zx = ["aria-pressed", "disabled"], jx = ["hidden"], Hx = { class: "pano-paint-color-pop-head" }, Gx = { class: "pano-paint-color-field" }, Wx = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Kx = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Ux = { class: "pano-paint-color-field" }, Bx = { class: "pano-paint-alpha-wrap" }, Yx = ["value"], qx = { "data-paint-alpha-value": "" }, Xx = ["hidden"], Jx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Zx = ["data-paint-history-index", "aria-label", "disabled"], Qx = ["data-paint-footer"], ek = ["data-paint-group"], tk = ["hidden"], nk = ["value", "disabled"], rk = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, ik = ["hidden"], ok = {
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
    return (n, i) => (Te(), De("div", {
      class: ht(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Te(!0), De(Ze, null, Pt(e.panes, (o) => {
        var a;
        return Te(), De("div", {
          key: o.key,
          class: ht(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Te(), De("div", {
            key: 0,
            class: ht(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Te(!0), De(Ze, null, Pt(e.paintSwatches, (s) => (Te(), De("button", {
              key: s.id,
              class: ht(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: At(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, $x))), 128)),
            Pe("button", {
              class: ht(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: At({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, zx),
            Pe("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: At({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Pe("div", Hx, [
                Pe("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: At({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Pe("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Pe("div", Gx, [
                Pe("div", Wx, [
                  Pe("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: At({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Pe("div", Kx, [
                  Pe("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: At({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Pe("label", Ux, [
                i[1] || (i[1] = Pe("span", null, "Opacity", -1)),
                Pe("div", Bx, [
                  Pe("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Yx),
                  Pe("span", qx, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Pe("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Pe("div", Jx, [
                  (Te(!0), De(Ze, null, Pt(e.state.historyEntries || [], (s) => (Te(), De("button", {
                    key: s.index,
                    class: ht(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: At(r(s.color))
                  }, null, 14, Zx))), 128))
                ])
              ], 8, Xx)
            ], 12, jx)
          ], 10, Vx)) : pt("", !0),
          Pe("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Pe("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), De(Ze, null, Pt(o.tools, (s) => {
                var l;
                return Te(), zn(Qt, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, ek),
            Pe("div", {
              class: ht(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Pe("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: At({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, nk),
              Pe("span", rk, rt(e.state.sizeText || "10"), 1)
            ], 10, tk),
            Pe("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Ue(Qt, {
                icon: tt(Ge).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, ik)
          ], 8, Qx)
        ], 10, Rx);
      }), 128))
    ], 2));
  }
}, ak = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Yt(null), n = /* @__PURE__ */ Yt(null), i = /* @__PURE__ */ Yt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Te(), De(Ze, null, [
      Pe("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Pe("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Pe("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, sk = ["aria-label"], lk = ["data-tip", "aria-pressed"], ck = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Te(), De("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: At({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Te(!0), De(Ze, null, Pt(e.buttons, (o) => (Te(), De("button", Ar({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), rt(o.label), 17, lk))), 128))
    ], 12, sk));
  }
}, uk = {
  key: 0,
  class: "pano-cutout-menu"
}, dk = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, fk = ["data-aspect"], pk = ["data-action", "aria-label", "data-tip", "disabled"], hk = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: At({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), De(Ze, null, Pt(e.model.items || [], (n) => (Te(), De(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), De("div", uk, [
          Pe("button", dk, [
            Ue(Vt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Pe("div", {
            class: ht(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), De(Ze, null, Pt(n.choices || [], (i) => (Te(), De("button", {
              key: i.value,
              class: ht(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, rt(i.label), 11, fk))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), zn(ck, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Te(), De("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Ue(Vt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, pk))
      ], 64))), 128))
    ], 4));
  }
}, mk = {
  key: 0,
  class: "pano-easing"
}, gk = { class: "pano-section-title" }, yk = { class: "pano-easing-range" }, bk = { class: "pano-easing-modes" }, vk = ["aria-pressed", "onClick"], _k = ["viewBox"], Sk = ["x", "y"], wk = ["x1", "y1", "x2", "y2"], xk = ["d"], kk = ["x1", "y1", "x2", "y2"], Mk = ["x1", "y1", "x2", "y2"], Pk = ["cx", "cy"], Nk = ["cx", "cy"], Ck = { class: "pano-easing-note" }, Pr = 132, ci = 14, Ak = {
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
    ], o = /* @__PURE__ */ Yt(null), a = ut(() => {
      var _;
      return Array.isArray((_ = r.model) == null ? void 0 : _.easing) ? r.model.easing : null;
    }), s = (_) => ci + _ * Pr, l = (_) => ci + (1 - _) * Pr, c = ut(() => {
      var U;
      if (((U = r.model) == null ? void 0 : U.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [_, m, p, E] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(_)} ${l(m)} ${s(p)} ${l(E)} ${s(1)} ${l(1)}`;
    }), d = ut(() => a.value ? a.value.map((_) => _.toFixed(2)).join(", ") : "");
    function u(_) {
      var m;
      return JSON.stringify(_.easing) === JSON.stringify((m = r.model) == null ? void 0 : m.easing);
    }
    function f(_, m) {
      n("timeline", { type: "easing", easing: _, commit: m });
    }
    function g(_, m) {
      var W;
      if (_.button !== 0 || !a.value) return;
      const p = _.currentTarget;
      (W = p.setPointerCapture) == null || W.call(p, _.pointerId);
      let E = null;
      const U = (k) => {
        const te = o.value.getBoundingClientRect(), K = te.width / (Pr + ci * 2), ce = ((k.clientX - te.left) / K - ci) / Pr, O = 1 - ((k.clientY - te.top) / K - ci) / Pr;
        E = [...E || a.value], E[m] = Math.round(Math.min(1, Math.max(0, ce)) * 100) / 100, E[m + 1] = Math.round(Math.min(1, Math.max(0, O)) * 100) / 100, f(E, !1);
      }, z = () => {
        p.removeEventListener("pointermove", U), p.removeEventListener("pointerup", z), p.removeEventListener("pointercancel", z), E && f(E, !0);
      };
      p.addEventListener("pointermove", U), p.addEventListener("pointerup", z), p.addEventListener("pointercancel", z);
    }
    return (_, m) => e.model ? (Te(), De("div", mk, [
      Pe("div", gk, [
        m[2] || (m[2] = Pe("span", null, "Easing", -1)),
        Pe("span", yk, rt(e.model.label), 1)
      ]),
      Pe("div", bk, [
        (Te(), De(Ze, null, Pt(i, (p) => Pe("button", {
          key: p.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(p) ? "true" : "false",
          onClick: (E) => f(p.easing, !0)
        }, rt(p.label), 9, vk)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Te(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Pr + ci * 2} ${Pr + ci * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Pe("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: Pr,
          height: Pr
        }, null, 8, Sk),
        Pe("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, wk),
        Pe("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, xk),
        a.value ? (Te(), De(Ze, { key: 0 }, [
          Pe("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, kk),
          Pe("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, Mk),
          Pe("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: m[0] || (m[0] = (p) => g(p, 0))
          }, null, 40, Pk),
          Pe("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: m[1] || (m[1] = (p) => g(p, 2))
          }, null, 40, Nk)
        ], 64)) : pt("", !0)
      ], 8, _k)) : pt("", !0),
      Pe("div", Ck, [
        e.model.mixed ? (Te(), De(Ze, { key: 0 }, [
          Eo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), De(Ze, { key: 1 }, [
          Eo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), De(Ze, { key: 2 }, [
          Eo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Te(), De(Ze, { key: 3 }, [
          Eo("cubic-bezier(" + rt(d.value) + ")", 1)
        ], 64)) : pt("", !0)
      ])
    ])) : pt("", !0);
  }
}, Ik = {
  class: "pano-side",
  "data-side": ""
}, Ek = { class: "pano-side-head" }, Ok = { class: "pano-side-title" }, Fk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Tk = {
  key: 0,
  class: "pano-side-scroll"
}, Dk = { class: "pano-inspector" }, Lk = { class: "pano-ui-row pano-coverage-row" }, Rk = ["data-selected"], Vk = ["aria-pressed", "disabled"], $k = ["aria-pressed", "disabled"], zk = {
  key: 0,
  class: "pano-section-title"
}, jk = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Hk = {
  class: "pano-picker",
  "data-picker": "selection"
}, Gk = ["disabled"], Wk = { class: "pano-picker-label" }, Kk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Uk = ["hidden"], Bk = ["data-selection-id"], Yk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, qk = {
  key: 2,
  class: "pano-state-actions"
}, Xk = ["disabled"], Jk = ["data-key"], Zk = { class: "pano-field-group-values" }, Qk = ["title", "onPointerdown"], eM = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], tM = ["data-key"], nM = ["min", "max", "step", "value", "disabled", "data-param-key"], rM = ["min", "max", "step", "value", "disabled", "data-param-key"], iM = ["open"], oM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, aM = { class: "pano-ui-settings-body" }, sM = { class: "pano-ui-row" }, lM = ["data-selected"], cM = ["aria-pressed"], uM = ["aria-pressed"], dM = { class: "pano-ui-row" }, fM = ["data-selected"], pM = ["aria-pressed"], hM = ["aria-pressed"], mM = {
  key: 1,
  class: "pano-side-footer"
}, gM = ["data-action"], yM = {
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
    function a(c, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const s = {};
    function l(c, d) {
      const u = s[d.key];
      if (c.button !== 0 || !u || a(d, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, g = c.clientX, _ = Number(u.value) || 0;
      let m = !1;
      f.setPointerCapture(c.pointerId);
      const p = (U) => {
        if (!m && Math.abs(U.clientX - g) < 3) return;
        m = !0;
        const z = _ + (U.clientX - g) * d.drag * (U.shiftKey ? 0.1 : 1);
        u.value = String(Number(z.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, E = () => {
        f.removeEventListener("pointermove", p), f.removeEventListener("pointerup", E), f.removeEventListener("pointercancel", E), f.removeEventListener("lostpointercapture", E), m ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", p), f.addEventListener("pointerup", E), f.addEventListener("pointercancel", E), f.addEventListener("lostpointercapture", E);
    }
    return (c, d) => {
      var u, f, g, _, m;
      return Te(), De("div", Ik, [
        Pe("div", Ek, [
          Pe("div", Ok, [
            Pe("span", Fk, [
              Ue(Vt, {
                icon: tt(Ge).globe
              }, null, 8, ["icon"])
            ]),
            Pe("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Pe("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Pe("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), De("div", Tk, [
          Pe("div", Dk, [
            d[9] || (d[9] = Pe("div", { class: "pano-section-title" }, [
              Pe("span", null, "Scene")
            ], -1)),
            Pe("div", Lk, [
              d[2] || (d[2] = Pe("label", null, "Coverage", -1)),
              Pe("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                Pe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, Vk),
                Pe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "180", 8, $k)
              ], 8, Rk)
            ]),
            e.model.transformTitle !== !1 ? (Te(), De("div", zk, [...d[3] || (d[3] = [
              Pe("span", null, "Transform", -1)
            ])])) : pt("", !0),
            e.model.selectionPicker ? (Te(), De("div", jk, [
              Pe("label", null, rt(e.model.selectionPicker.label), 1),
              Pe("div", Hk, [
                Pe("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Pe("span", Wk, [
                    e.model.selectionPicker.currentIcon ? (Te(), De("span", Kk, [
                      Ue(Vt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    Pe("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Pe("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Gk),
                Pe("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), De(Ze, null, Pt(e.model.selectionPicker.items || [], (p) => (Te(), De("button", {
                    key: p.id,
                    type: "button",
                    class: ht(["pano-picker-item", { active: p.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": p.id
                  }, [
                    p.icon ? (Te(), De("span", Yk, [
                      Ue(Vt, {
                        icon: p.icon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    Pe("span", null, rt(p.label), 1)
                  ], 10, Bk))), 128))
                ], 8, Uk)
              ])
            ])) : pt("", !0),
            e.model.copyStateButton ? (Te(), De("div", qk, [
              Pe("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ue(Vt, {
                  icon: tt(Ge).copy
                }, null, 8, ["icon"]),
                Pe("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, Xk)
            ])) : pt("", !0),
            Pe("div", {
              class: ht(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), De(Ze, { key: 0 }, Pt(e.model.notes, (p) => (Te(), De("div", {
                key: p,
                class: "pano-param-note"
              }, rt(p), 1))), 128)) : (Te(!0), De(Ze, { key: 1 }, Pt(e.model.rows || [], (p) => (Te(), De(Ze, {
                key: p.key
              }, [
                p.grouped ? (Te(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": p.key
                }, [
                  Pe("label", null, rt(p.label), 1),
                  Pe("div", Zk, [
                    (Te(!0), De(Ze, null, Pt(p.fields, (E) => (Te(), De("div", {
                      key: E.key,
                      class: "pano-axis-field"
                    }, [
                      Pe("span", {
                        class: ht(["pano-axis", { disabled: a(E, e.model) }]),
                        title: E.label,
                        onPointerdown: (U) => l(U, E)
                      }, rt(E.short), 43, Qk),
                      Pe("input", {
                        ref_for: !0,
                        ref: (U) => {
                          s[E.key] = U;
                        },
                        type: "number",
                        min: E.min,
                        max: E.max,
                        step: E.step,
                        value: E.displayValue,
                        disabled: a(E, e.model),
                        "aria-label": `${p.label} ${E.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": E.key
                      }, null, 8, eM)
                    ]))), 128))
                  ])
                ], 8, Jk)) : (Te(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": p.key
                }, [
                  Pe("label", null, rt(p.label), 1),
                  Pe("input", {
                    type: "range",
                    min: p.fields[0].min,
                    max: p.fields[0].max,
                    step: p.fields[0].step,
                    value: p.fields[0].value,
                    disabled: a(p.fields[0], e.model),
                    style: At(o(p.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": p.fields[0].key
                  }, null, 12, nM),
                  Pe("input", {
                    type: "number",
                    min: p.fields[0].min,
                    max: p.fields[0].max,
                    step: p.fields[0].step,
                    value: p.fields[0].displayValue,
                    disabled: a(p.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": p.fields[0].key
                  }, null, 8, rM)
                ], 8, tM))
              ], 64))), 128))
            ], 2),
            Ue(Ak, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (p) => n("timeline", p))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Pe("summary", null, [
                d[5] || (d[5] = Pe("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Pe("span", oM, [
                  Ue(Vt, {
                    icon: tt(Ge).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Pe("div", aM, [
                Pe("div", sM, [
                  d[6] || (d[6] = Pe("label", null, "Drag X", -1)),
                  Pe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Pe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, cM),
                    Pe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, uM)
                  ], 8, lM)
                ]),
                Pe("div", dM, [
                  d[7] || (d[7] = Pe("label", null, "Drag Y", -1)),
                  Pe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Pe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, pM),
                    Pe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, hM)
                  ], 8, fM)
                ]),
                d[8] || (d[8] = Pe("div", { class: "pano-ui-row" }, [
                  Pe("span"),
                  Pe("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, iM)) : pt("", !0)
          ])
        ])) : pt("", !0),
        (e.model.footerButtons || []).length ? (Te(), De("div", mM, [
          (Te(!0), De(Ze, null, Pt(e.model.footerButtons, (p) => (Te(), De("button", {
            key: p.action,
            class: ht(["pano-btn", { "pano-btn-primary": p.primary === !0 }]),
            type: "button",
            "data-action": p.action
          }, rt(p.label), 11, gM))), 128))
        ])) : pt("", !0)
      ]);
    };
  }
}, bM = { class: "pano-timeline-bar" }, vM = ["aria-label", "data-tip"], _M = ["aria-label", "data-tip"], SM = { class: "pano-timeline-time" }, wM = ["data-tip"], xM = { key: 0 }, kM = ["min", "max", "value"], MM = ["data-tip"], PM = { key: 0 }, NM = ["max", "value"], CM = ["aria-expanded"], AM = ["inert"], IM = { class: "pano-timeline-name" }, EM = ["aria-pressed", "aria-label", "data-tip", "onClick"], OM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, FM = ["disabled", "aria-expanded", "aria-label", "onClick"], TM = ["title", "aria-current", "onClick"], DM = ["data-keyed", "aria-label", "onClick"], LM = ["onPointerdown"], RM = ["onPointerdown"], VM = ["onPointerdown"], $M = ["onPointerdown"], zM = ["aria-label", "data-tip", "onPointerdown"], jM = { key: 0 }, HM = ["onPointerdown"], GM = ["aria-label", "data-tip", "onPointerdown"], WM = { key: 0 }, KM = 10, UM = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Ms(0), playing: /* @__PURE__ */ Ms(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Yt(null), o = /* @__PURE__ */ Yt(null), a = /* @__PURE__ */ Yt(1), s = /* @__PURE__ */ Yt(0), l = /* @__PURE__ */ Yt(!1);
    let c = null, d = null, u = null;
    hl(() => {
      c = new ResizeObserver(([oe]) => {
        a.value = Math.max(1, oe.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([oe]) => {
        s.value = oe.contentRect.height;
      }), o.value && d.observe(o.value);
    }), ma(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), g = ut(() => r.playhead.frame.value), _ = ut(() => r.playhead.playing.value), m = ut(() => jv(g.value, Number(r.model.fps || 1))), p = ut(() => a.value / f.value), E = (oe) => `${oe / f.value * 100}%`, U = ut(() => t1(f.value, p.value));
    function z(oe) {
      const ie = i.value.getBoundingClientRect(), x = Math.floor((oe - ie.left) / Math.max(1, ie.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, x));
    }
    function W(oe, ie, x) {
      const T = Math.ceil(KM / Math.max(1e-6, p.value)), Z = new Map(ie.map((V) => [V.frame, V.full]));
      return n1(ie.map((V) => V.frame), T).map((V, pe) => ({
        ...V,
        key: `${oe}:${pe}`,
        partial: V.frames.some((Se) => !Z.get(Se)),
        selected: V.frames.some((Se) => x.includes(Se))
      }));
    }
    const k = ut(() => {
      const oe = /* @__PURE__ */ new Map();
      for (const ie of r.model.rows || []) {
        oe.set(ie.id, W(ie.id, ie.keys, ie.selectedFrames));
        for (const x of ie.lanes) oe.set(x.key, W(x.key, x.frames.map((T) => ({ frame: T, full: !0 })), x.selectedFrames));
      }
      return oe;
    });
    function te(oe) {
      const ie = oe.end === null ? f.value : oe.end;
      return { left: E(oe.start), width: E(Math.max(0, ie - oe.start)) };
    }
    function K(oe, ie) {
      const x = oe.clientX, T = Math.max(1e-6, p.value);
      let Z = 0;
      ie("start", 0, oe);
      const V = (Se) => {
        if (Se.pointerId !== oe.pointerId) return;
        const ee = Math.round((Se.clientX - x) / T);
        ee !== Z && (Z = ee, ie("move", Z, Se));
      }, pe = (Se) => {
        Se.pointerId === oe.pointerId && (u(), ie("end", Z, Se));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", pe), window.removeEventListener("pointercancel", pe), u = null;
      }, window.addEventListener("pointermove", V), window.addEventListener("pointerup", pe), window.addEventListener("pointercancel", pe);
    }
    function ce(oe) {
      oe.button === 0 && K(oe, (ie, x, T) => n("action", { type: "seek", frame: z(T.clientX), phase: ie }));
    }
    function O(oe, ie, x) {
      oe.button === 0 && (n("action", { type: "select-row", id: ie.id }), K(oe, (T, Z) => n("action", { type: "clip", id: ie.id, mode: x, delta: Z, phase: T })));
    }
    function fe(oe, ie, x, T, Z) {
      if (oe.button === 0) {
        if (oe.shiftKey) {
          n("action", { type: "select-keys", owner: ie.id, lane: x, frames: T.frames, additive: !0 });
          return;
        }
        T.frames.every((V) => Z.includes(V)) || n("action", { type: "select-keys", owner: ie.id, lane: x, frames: T.frames, additive: !1 }), K(oe, (V, pe) => n("action", { type: "move-keys", delta: pe, phase: V }));
      }
    }
    const F = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function J(oe, ie, x) {
      n("action", ie), await fl(), oe.target.value = x();
    }
    function G(oe) {
      J(oe, { type: "fps", fps: Number(oe.target.value) }, () => F.value);
    }
    function Q(oe) {
      const ie = oe.target.value.trim();
      J(oe, { type: "length", length: ie ? Number(ie) : null }, () => r.model.length ?? "");
    }
    function Y(oe, ie, x) {
      oe.button !== 0 || oe.target !== oe.currentTarget || n("action", { type: "select-keys", owner: ie.id, lane: x, frames: [], additive: !1 });
    }
    return (oe, ie) => Lr((Te(), De("section", {
      class: ht(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Pe("div", bM, [
        Pe("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: ie[0] || (ie[0] = (x) => n("action", { type: "play" }))
        }, [
          Ue(Vt, {
            icon: _.value ? tt(Ge).pause : tt(Ge).play
          }, null, 8, ["icon"])
        ], 8, vM),
        e.model.hasAudio ? (Te(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: ie[1] || (ie[1] = (x) => n("action", { type: "mute" }))
        }, [
          Ue(Vt, {
            icon: e.model.muted ? tt(Ge).volume_muted : tt(Ge).volume2
          }, null, 8, ["icon"])
        ], 8, _M)) : pt("", !0),
        Pe("span", SM, rt(m.value), 1),
        Pe("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), De("span", xM, rt(F.value), 1)) : (Te(), De("input", {
            key: 1,
            type: "number",
            min: tt($h),
            max: tt(Gu),
            step: "any",
            value: F.value,
            "aria-label": "Timeline fps",
            onChange: G
          }, null, 40, kM)),
          ie[6] || (ie[6] = Pe("span", null, "fps", -1))
        ], 8, wM),
        Pe("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          ie[7] || (ie[7] = Pe("span", null, "Length", -1)),
          e.model.lengthLocked ? (Te(), De("span", PM, rt(e.model.length), 1)) : (Te(), De("input", {
            key: 1,
            type: "number",
            min: "1",
            max: tt(Wu),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Q
          }, null, 40, NM))
        ], 8, MM),
        Pe("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: ie[2] || (ie[2] = (x) => n("action", { type: "toggle-expanded" }))
        }, [
          ie[8] || (ie[8] = Pe("span", null, "Timeline", -1)),
          Ue(Vt, {
            icon: tt(Ge).chevron
          }, null, 8, ["icon"])
        ], 8, CM)
      ]),
      Pe("div", {
        class: ht(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: At({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: ie[3] || (ie[3] = Nt((x) => l.value = !0, ["self"])),
        onTransitionend: ie[4] || (ie[4] = Nt((x) => l.value = !1, ["self"])),
        onTransitioncancel: ie[5] || (ie[5] = Nt((x) => l.value = !1, ["self"]))
      }, [
        Pe("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          ie[9] || (ie[9] = Pe("div", { class: "pano-timeline-corner" }, null, -1)),
          Pe("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ce
          }, [
            (Te(!0), De(Ze, null, Pt(U.value, (x) => (Te(), De("span", {
              key: x,
              class: "pano-timeline-tick",
              style: At({ left: E(x) })
            }, rt(x), 5))), 128)),
            Pe("span", {
              class: "pano-timeline-playhead",
              style: At({ left: E(g.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), De(Ze, null, Pt(e.model.rows || [], (x) => (Te(), De(Ze, {
            key: x.id
          }, [
            Pe("div", {
              class: ht(["pano-timeline-head", { selected: x.selected, "is-hidden": !x.visible }])
            }, [
              Pe("div", IM, [
                x.hideable ? (Te(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": x.visible ? "true" : "false",
                  "aria-label": `${x.label} visible`,
                  "data-tip": x.visible ? "Hide" : "Show",
                  onClick: Nt((T) => n("action", { type: "toggle-visible", id: x.id }), ["stop"])
                }, [
                  Ue(Vt, {
                    icon: x.visible ? tt(Ge).eye : tt(Ge).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, EM)) : (Te(), De("span", OM)),
                Pe("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !x.keyable,
                  "aria-expanded": x.open ? "true" : "false",
                  "aria-label": x.open ? `Hide ${x.label} parameters` : `Show ${x.label} parameters`,
                  onClick: Nt((T) => n("action", { type: "toggle-row", id: x.id }), ["stop"])
                }, [
                  Ue(Vt, {
                    icon: tt(Ge).chevron
                  }, null, 8, ["icon"])
                ], 8, FM),
                Pe("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: x.label,
                  "aria-current": x.selected ? "true" : void 0,
                  onClick: (T) => n("action", { type: "select-row", id: x.id })
                }, [
                  Ue(Vt, {
                    icon: x.icon
                  }, null, 8, ["icon"]),
                  Pe("span", null, rt(x.label), 1)
                ], 8, TM),
                x.keyable ? (Te(), De("button", {
                  key: 2,
                  class: ht(["pano-timeline-key", { keyed: tt(oc)(x.keys, g.value) }]),
                  type: "button",
                  "data-keyed": tt(oc)(x.keys, g.value) ? "true" : "false",
                  "aria-label": tt(oc)(x.keys, g.value) ? `Every ${x.label} parameter has a keyframe here; update them` : `Add keyframes for every ${x.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Nt((T) => n("action", { type: "key-row", owner: x.id }), ["stop"])
                }, [
                  Ue(Vt, {
                    icon: tt(Ge).keyframe
                  }, null, 8, ["icon"])
                ], 10, DM)) : pt("", !0)
              ]),
              x.open ? (Te(!0), De(Ze, { key: 0 }, Pt(x.lanes, (T) => (Te(), De("div", {
                key: T.key,
                class: "pano-timeline-lane-head"
              }, rt(T.label), 1))), 128)) : pt("", !0)
            ], 2),
            Pe("div", {
              class: ht(["pano-timeline-track", { selected: x.selected }])
            }, [
              Pe("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (T) => Y(T, x, null)
              }, [
                x.clip ? (Te(), De("div", {
                  key: 0,
                  class: ht(["pano-timeline-clip", { open: x.clip.end === null }]),
                  style: At(te(x.clip)),
                  onPointerdown: Nt((T) => O(T, x, "move"), ["stop"])
                }, [
                  Pe("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Nt((T) => O(T, x, "start"), ["stop"])
                  }, null, 40, VM),
                  Pe("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Nt((T) => O(T, x, "end"), ["stop"])
                  }, null, 40, $M)
                ], 46, RM)) : pt("", !0),
                (Te(!0), De(Ze, null, Pt(k.value.get(x.id), (T) => (Te(), De("button", {
                  key: T.key,
                  type: "button",
                  class: ht(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1, partial: T.partial }]),
                  style: At({ left: E(T.frame + 0.5) }),
                  "aria-label": `${x.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: Nt((Z) => fe(Z, x, null, T, x.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? (Te(), De("span", jM, rt(T.frames.length), 1)) : pt("", !0)
                ], 46, zM))), 128))
              ], 40, LM),
              x.open ? (Te(!0), De(Ze, { key: 0 }, Pt(x.lanes, (T) => (Te(), De("div", {
                key: T.key,
                class: "pano-timeline-lane",
                onPointerdown: (Z) => Y(Z, x, T.lane)
              }, [
                (Te(!0), De(Ze, null, Pt(k.value.get(T.key), (Z) => (Te(), De("button", {
                  key: Z.key,
                  type: "button",
                  class: ht(["pano-timeline-pin", { selected: Z.selected, cluster: Z.frames.length > 1 }]),
                  style: At({ left: E(Z.frame + 0.5) }),
                  "aria-label": `${T.label}: ${Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `keyframe at frame ${Z.frames[0]}`}`,
                  "data-tip": Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `Frame ${Z.frames[0]}`,
                  onPointerdown: Nt((V) => fe(V, x, T.lane, Z, T.selectedFrames), ["stop"])
                }, [
                  Z.frames.length > 1 ? (Te(), De("span", WM, rt(Z.frames.length), 1)) : pt("", !0)
                ], 46, GM))), 128))
              ], 40, HM))), 128)) : pt("", !0),
              Pe("span", {
                class: "pano-timeline-playhead",
                style: At({ left: E(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, AM)
    ], 2)), [
      [Si, e.model.visible]
    ]);
  }
}, BM = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: ht(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: At({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, YM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, qM = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", YM, [
      (Te(!0), De(Ze, null, Pt(e.buttons, (n) => Lr((Te(), zn(Qt, {
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
        [Si, n.visible !== !1]
      ])), 128))
    ]));
  }
}, XM = ["data-video-ready"], JM = { class: "pano-video-transport-shell" }, ZM = { class: "pano-video-controls-left" }, QM = { class: "pano-video-filmstrip" }, eP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, tP = ["src", "onLoad"], nP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, rP = ["max", "value", "disabled"], iP = { class: "pano-video-controls-right" }, oP = ["data-has-audio"], aP = { class: "pano-video-volume-pop" }, sP = ["value", "disabled"], lP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.playing) === !0 ? Ge.pause : Ge.play;
    }), o = ut(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = ut(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = ut(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.loop) === !1 ? Ge.loop_off : Ge.loop;
    }), l = ut(() => {
      var k, te;
      return ((k = t.state) == null ? void 0 : k.muted) === !0 || Number(((te = t.state) == null ? void 0 : te.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var k, te, K;
      return ((k = t.state) == null ? void 0 : k.hasAudio) !== !0 ? Ge.volume : ((te = t.state) == null ? void 0 : te.muted) === !0 || Number(((K = t.state) == null ? void 0 : K.volume) ?? 1) <= 0 ? Ge.volume_muted : Ge.volume2;
    }), d = ut(() => {
      var k;
      return Math.max(0, Math.min(100, Number(((k = t.state) == null ? void 0 : k.progressPct) || 0)));
    }), u = ut(() => ({ left: `${d.value}%` })), f = ut(() => {
      var ce, O;
      const k = (ce = t.state) == null ? void 0 : ce.volumePct, te = Number(((O = t.state) == null ? void 0 : O.volume) ?? 1) * 100, K = Number(k ?? te ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, K))}%`
      };
    }), g = ut(() => {
      var K, ce;
      const te = [
        String(((K = t.state) == null ? void 0 : K.currentTimeLabel) || "0:00"),
        String(((ce = t.state) == null ? void 0 : ce.durationLabel) || "0:00")
      ].reduce((O, fe) => Math.max(O, fe.length), 4);
      return `${Math.max(4, te)}ch`;
    }), _ = ut(() => ({ "--pano-video-time-ch": g.value })), m = ut(() => {
      var K, ce;
      const k = Array.isArray((K = t.state) == null ? void 0 : K.thumbnails) ? t.state.thumbnails : [];
      if (k.length) return k;
      const te = Math.max(7, Number(((ce = t.state) == null ? void 0 : ce.thumbnailCount) || 9));
      return Array.from({ length: te }, (O, fe) => ({
        id: `placeholder-${fe}`,
        src: "",
        label: ""
      }));
    }), p = /* @__PURE__ */ Yt(/* @__PURE__ */ new Set()), E = (k) => String((k == null ? void 0 : k.id) || (k == null ? void 0 : k.src) || (k == null ? void 0 : k.label) || ""), U = (k) => p.value.has(E(k)), z = (k) => {
      const te = new Set(p.value);
      te.add(E(k)), p.value = te;
    };
    yi(m, (k) => {
      const te = new Set(k.map(E)), K = /* @__PURE__ */ new Set();
      for (const ce of p.value)
        te.has(ce) && K.add(ce);
      p.value = K;
    }, { immediate: !0 });
    const W = ut(() => {
      var k;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((k = t.state) == null ? void 0 : k.shellMaxWidthPx) || 640))}px`
      };
    });
    return (k, te) => (Te(), De("div", {
      class: ht(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: At(W.value)
    }, [
      te[1] || (te[1] = Pe("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      te[2] || (te[2] = Pe("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Pe("div", JM, [
        Pe("div", ZM, [
          Ue(Qt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Pe("div", {
            class: "pano-video-time pano-video-time-start",
            style: At(_.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Pe("div", QM, [
          Pe("div", eP, [
            (Te(!0), De(Ze, null, Pt(m.value, (K) => (Te(), De("div", {
              key: E(K),
              class: ht(["pano-video-thumb", {
                "is-placeholder": !K.src,
                "is-loaded": K.src && U(K)
              }])
            }, [
              K.src ? (Te(), De("img", {
                key: 0,
                src: K.src,
                alt: "",
                draggable: "false",
                onLoad: (ce) => z(K)
              }, null, 40, tP)) : (Te(), De("span", nP))
            ], 2))), 128))
          ]),
          Pe("div", {
            class: "pano-video-playhead",
            style: At(u.value),
            "aria-hidden": "true"
          }, [...te[0] || (te[0] = [
            Pe("span", { class: "pano-video-playhead-line" }, null, -1),
            Pe("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Pe("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, rP)
        ]),
        Pe("div", iP, [
          Pe("div", {
            class: "pano-video-time pano-video-time-end",
            style: At(_.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          Ue(Qt, {
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
          Pe("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Pe("div", aP, [
              Pe("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: At(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, sP)
            ]),
            Ue(Qt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, oP)
        ])
      ])
    ], 14, XM));
  }
}, cP = { class: "pano-floating-top" }, uP = ["data-selected", "data-view-count"], dP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], fP = { class: "label" }, pP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), De("div", cP, [
        Pe("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), De(Ze, null, Pt(e.buttons, (i) => Lr((Te(), De("button", {
            key: i.key,
            class: ht(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ue(Vt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Pe("span", fP, rt(i.label), 1)
          ], 10, dP)), [
            [Si, i.visible !== !1]
          ])), 128))
        ], 8, uP)
      ]);
    };
  }
};
function Ag(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ge.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ge.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: Ge.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ge.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ge.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ge.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ge.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ge.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ge.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ge.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ge.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ge.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ge.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ge.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ge.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ge.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ge.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ge.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ge.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ge.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ge.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ge.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ge.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ge.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ge.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ge.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ge.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ge.lasso_tool }
        ]
      }
    ]
  };
}
const hP = ["aria-label"], mP = { class: "pano-stage-column" }, gP = { class: "pano-stage-wrap" }, yP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, bP = {
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
    const l = /* @__PURE__ */ Yt(null), c = /* @__PURE__ */ Yt(null), d = /* @__PURE__ */ Yt(null);
    function u() {
      var F, J;
      return ((J = (F = d.value) == null ? void 0 : F.getRefs) == null ? void 0 : J.call(F)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(F) {
      var J, G;
      return ((G = (J = c.value) == null ? void 0 : J.open) == null ? void 0 : G.call(J, F)) === !0;
    }
    function g(F) {
      i("image-file-selected", F);
    }
    function _(F) {
      i("image-file-cancelled", F);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const m = ut(() => n.readOnly === !0), p = ut(() => n.shellPreset || Ag(n.type)), E = ut(() => {
      var J, G, Q;
      const F = String((((J = n.uiState) == null ? void 0 : J.stageStatus) === "failed" ? (G = n.uiState) == null ? void 0 : G.stageStatusDetail : (Q = n.uiState) == null ? void 0 : Q.stageWarningDetail) ?? "");
      return F === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : F === "stickers" ? "One or more sticker previews are unavailable." : F === "frame" ? "The editor hit a rendering error. Check the browser console for details." : F === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : F.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), U = ut(() => {
      var F, J, G;
      return ((F = n.uiState) == null ? void 0 : F.stageStatus) === "failed" || (J = n.uiState) != null && J.stageWarningDetail ? E.value : (G = n.uiState) == null ? void 0 : G.stageNotice;
    }), z = ut(() => {
      var J;
      const F = Array.isArray((J = p.value) == null ? void 0 : J.floatingButtons) ? p.value.floatingButtons.slice() : [];
      return m.value && F.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ge.fullscreen
      }), F;
    });
    function W() {
      const F = l.value;
      return F ? Array.from(F.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((J) => J instanceof HTMLElement ? !J.hidden && J.tabIndex >= 0 && J.offsetParent !== null : !1) : [];
    }
    function k() {
      var G;
      const J = W()[0] || l.value;
      (G = J == null ? void 0 : J.focus) == null || G.call(J);
    }
    function te() {
      var F;
      s != null && s.isConnected && ((F = s.focus) == null || F.call(s)), s = null;
    }
    function K(F) {
      var J, G, Q, Y;
      if (!F.defaultPrevented) {
        if (F.key === "Tab") {
          const oe = W();
          if (!oe.length) {
            F.preventDefault(), (G = (J = l.value) == null ? void 0 : J.focus) == null || G.call(J);
            return;
          }
          const ie = oe[0], x = oe[oe.length - 1], T = document.activeElement;
          if (F.shiftKey) {
            (T === ie || T === l.value || !((Q = l.value) != null && Q.contains(T))) && (F.preventDefault(), x.focus());
            return;
          }
          (T === x || !((Y = l.value) != null && Y.contains(T))) && (F.preventDefault(), ie.focus());
          return;
        }
        F.key === "Escape" && i("close");
      }
    }
    function ce() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function O() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function fe(F) {
      document.removeEventListener("keydown", K), F ? (s || (s = document.activeElement), ce(), document.addEventListener("keydown", K), fl(() => {
        k();
      })) : (O(), te());
    }
    return hl(() => {
      fe(n.open);
    }), ma(() => {
      O(), document.removeEventListener("keydown", K), te();
    }), yi(() => n.open, (F) => {
      fe(F);
    }), (F, J) => e.open ? (Te(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: J[2] || (J[2] = Nt((G) => i("close"), ["self"]))
    }, [
      Pe("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Pe("div", mP, [
          Pe("div", gP, [
            J[3] || (J[3] = Pe("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            J[4] || (J[4] = Pe("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            J[5] || (J[5] = Pe("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Te(), De("div", yP, rt(U.value), 1)) : pt("", !0),
            J[6] || (J[6] = Pe("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Pe("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ue(ak, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ue(sg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: g,
              onFileCancelled: _
            }, null, 512),
            m.value ? pt("", !0) : (Te(), De(Ze, { key: 1 }, [
              Ue(qM, {
                buttons: e.uiState.toolButtons || p.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ue(Ix, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ue(ok, {
                "paint-swatches": e.paintSwatches,
                panes: p.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ue(lP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ue(pP, {
              buttons: e.uiState.viewButtons || p.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ue(Mx, {
              buttons: e.uiState.floatingButtons || z.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ue(hk, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ue(BM, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ue(Lx, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ue(UM, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: J[0] || (J[0] = (G) => i("timeline", G))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? pt("", !0) : (Te(), zn(yM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: J[1] || (J[1] = (G) => i("timeline", G))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, hP)
    ])) : pt("", !0);
  }
}, Jn = "loading", fa = "ready", Kn = "failed";
function Ig(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Eg(e, t = "") {
  return e && (e.__panoLoadState = fa, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Og(e, t = "") {
  return e && (e.__panoLoadState = Kn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function lu(e, t) {
  return e ? e.__panoLoadState === Kn ? Kn : typeof t == "function" && t(e) ? fa : Jn : fa;
}
function cu(e) {
  return lu(e) === Kn;
}
function vP({ presented: e, background: t = fa, stickers: r = [] } = {}) {
  if (!e) return { status: Jn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Jn, o = n.includes(Jn);
  if (i && o) return { status: Jn, detail: "mixed" };
  if (i) return { status: Jn, detail: "background" };
  if (o) return { status: Jn, detail: "stickers" };
  const a = t === Kn, s = n.includes(Kn);
  return a && s ? { status: Kn, detail: "mixed" } : a ? { status: Kn, detail: "background" } : s ? { status: Kn, detail: "stickers" } : { status: fa, detail: "" };
}
const _P = "state_json", SP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), xd = "sticker_image_1", wP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), Fg = 0.01, xP = "external_image", io = "pano_sticker_input_images", Tg = "pano_sticker_input_videos", Dg = "pano_sticker_input_frames", Lg = "pano_sticker_input_video_meta", kP = !0, Al = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], br = Math.PI / 180, ki = 180 / Math.PI, uu = 1, Rg = "rgb(255, 221, 87)", MP = "rgb(228, 228, 231)", PP = "rgb(180, 150, 60)", NP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, CP = 64, ip = 40, hc = 16, AP = 0.45, op = 180, IP = 160, nl = 24, EP = 4, OP = 4, FP = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function mc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function TP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function DP(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function LP(e) {
  return e * e * e;
}
function Il(e, t, r) {
  return { x: e, y: t, z: r };
}
function ap(e, t) {
  return Il(e.x + t.x, e.y + t.y, e.z + t.z);
}
function sp(e, t) {
  return Il(e.x * t, e.y * t, e.z * t);
}
function gc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function RP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Il(e.x / t, e.y / t, e.z / t);
}
function Qa(e) {
  return {
    yaw: jt(Math.atan2(e.x, e.z) * ki),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * ki, -90, 90)
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
function yc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return Ro(e, t);
  const l = Ee((o * n + a * i) / s, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Wn(e, t, r) {
  return e + (t - e) * r;
}
function fr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function VP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let es = { fillStyle: "", url: "" };
function $P(e, t, r) {
  if (es.url && es.fillStyle === String(e || ""))
    return es.url;
  const n = VP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${nl}" height="${nl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return es = { fillStyle: String(e || ""), url: n }, n;
}
function rl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Rn(e) {
  return {
    r: Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ee(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function dn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function zP(e) {
  return Al.some((t) => rl(e, t.color));
}
function du(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), c = o * (1 - s * i), d = o * (1 - (1 - s) * i);
  switch (a % 6) {
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
function fu(e) {
  const t = Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Zi(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function jP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function lp(e) {
  const { paintCount: t, maskCount: r } = jP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Vg(e, t, r, n, i) {
  const o = r.bbox, a = r.transform || {}, s = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = s + c * 0.5 + Number(a.du || 0) * n, f = l + d * 0.5 + Number(a.dv || 0) * i, g = Number(a.rot_deg || 0) * br, _ = Math.max(0.01, Number(a.scale || 1));
  for (const m of [-n, 0, n])
    e.save(), e.translate(u + m, f), e.rotate(g), e.scale(_, _), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Gi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ts(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function HP(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), n = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return n[r] ? n[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function pi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function GP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function WP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function KP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const $g = "pano_suite.ui_settings.v1", zg = "pano_suite.node_grid_visibility.v1";
let zi = null, lr = null;
function ks(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function UP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($g)) || "").trim();
    if (!t) return zi ? ks(zi) : null;
    const r = JSON.parse(t), n = ks(r);
    return zi = n, n;
  } catch {
    return zi ? ks(zi) : null;
  }
}
function BP(e) {
  var r;
  const t = ks(e);
  zi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem($g, JSON.stringify(t));
  } catch {
  }
  return t;
}
function jg() {
  var e;
  if (lr && typeof lr == "object")
    return lr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(zg)) || "").trim();
    if (!t)
      return lr = {}, lr;
    const r = JSON.parse(t);
    return lr = r && typeof r == "object" ? r : {}, lr;
  } catch {
    return lr = {}, lr;
  }
}
function YP(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = jg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function qP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = jg();
  n[r] = !!t, lr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(zg, JSON.stringify(n));
  } catch {
  }
}
function XP(e, t) {
  const r = { ...e }, n = t.map((i) => i(bc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(bc(r, t[o].name))), bc(r, "showEditor");
}
function bc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const pu = 0.5, Hg = "PANO_SCENE";
function JP(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: tr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function ZP(e, t, r) {
  return e * r / t;
}
function QP(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: kn(e("pano_upstream_coverage")[0])
  };
}
const eN = "bg_media is not used";
function tN(e, t) {
  return e === Hg && t === null;
}
function nN(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], a = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, s = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) s.has(l) || o.push({ kind: "group", id: l, zIndex: a });
  return r && o.push({ kind: "mask", id: "mask", zIndex: a }), o;
}
function Fr(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function cp(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * pu };
}
function rN(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: a, ui: s } = e, l = va(a, r), c = (m) => m.visible ? n(m) : null, d = Mm(a, r, { media: c, zIndex: (m) => m.z_index, paintLayers: i, evaluated: l }).map((m) => cp(m, t)), u = Nm(a, r, a.stickers, { media: c, evaluated: l }).map((m) => cp(m, t)), f = [], g = Us(Fr(s, "pano_scene_files"), Fr(s, "pano_scene_meta"), o);
  g && f.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: nd(g, l.scene), value: l.scene, opacity: pu });
  const _ = Us(Fr(s, "pano_sticker_files"), Fr(s, "pano_sticker_meta"), o);
  if (_) {
    const m = ym(_, a, l);
    f.push({ slot: `${t}:sticker`, urls: bm(_, a), request: m, value: (m == null ? void 0 : m.value) ?? null, opacity: ((m == null ? void 0 : m.opacity) ?? 1) * pu });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const Xr = /* @__PURE__ */ new Map(), iN = 12;
function oN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = Xr.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (Xr.delete(t), Xr.set(t, r), r);
}
function aN(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (Xr.delete(r), Xr.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Xr.size > iN; ) {
      const i = Xr.keys().next().value;
      if (!i) break;
      Xr.delete(i);
    }
}
function sN(e) {
  const {
    comfyMedia: t,
    cutoutV2: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: c,
    mediaUiImage: d,
    node: u,
    portStillCanvas: f,
    portVideoEl: g,
    readOnly: _,
    runtime: m,
    scheduler: p,
    stageWrap: E,
    state: U,
    stateV2: z,
    stillCanvas: W,
    studio: k,
    timelinePlayhead: te,
    type: K,
    uiState: ce,
    videoEl: O
  } = e;
  let fe, F, J, G, Q, Y;
  const oe = {
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
  }, ie = 9, x = [];
  let T = 0;
  const Z = () => {
    var Ce, Ve;
    const ne = (Ce = E == null ? void 0 : E.getBoundingClientRect) == null ? void 0 : Ce.call(E), ye = (Ve = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ve.call(o), Me = Math.max(0, Number((ne == null ? void 0 : ne.width) || 0)), Ae = ye ? Math.max(0, Number(ye.width || 0)) : 0, He = Ae > 0 ? Ae + 14 + 12 : 72, ze = Math.max(280, Math.floor(Me - He * 2)), q = n.fullscreen ? Math.min(1200, ze) : ze;
    ce.videoTransport.shellMaxWidthPx = q;
  }, V = () => {
    T || (T = p.requestFrame(() => {
      T = 0, Z();
    }));
  }, pe = (ne) => {
    if (!(ne instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(ne.audioTracks) && ne.audioTracks.length > 0 || ne.audioTracks && typeof ne.audioTracks.length == "number" && ne.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof ne.mozHasAudio == "boolean") return ne.mozHasAudio;
    } catch {
    }
    try {
      if (Number(ne.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!ce.videoTransport.hasAudio;
  }, Se = typeof ResizeObserver < "u" ? new ResizeObserver(() => V()) : null;
  Se == null || Se.observe(E), o && (Se == null || Se.observe(o)), x.push(() => {
    var ne;
    T && (p.cancelFrame(T), T = 0), (ne = Se == null ? void 0 : Se.disconnect) == null || ne.call(Se);
  }), V();
  const ee = () => {
    oe.thumbnailJobId += 1, oe.thumbnailSrc = "", ce.videoTransport.thumbnails = [], ce.videoTransport.thumbnailCount = ie;
  }, I = async (ne, ye, Me) => {
    const Ae = String(ne || "").trim();
    if (!Ae) {
      ee();
      return;
    }
    const Le = oN(Ae);
    if (Le) {
      oe.thumbnailSrc = Ae, ce.videoTransport.thumbnails = Le.thumbnails, ce.videoTransport.thumbnailCount = Le.thumbnailCount;
      return;
    }
    const Re = ++oe.thumbnailJobId;
    oe.thumbnailSrc = Ae, ce.videoTransport.thumbnails = [], ce.videoTransport.thumbnailCount = ie;
    const He = ya(document, "editor.thumbnails");
    He.preload = "auto", He.muted = !0, He.playsInline = !0, He.crossOrigin = "anonymous";
    const ze = rn({ label: "editor.thumbnail" });
    try {
      const q = await new Promise((Ft) => {
        let vt = !1;
        const Dt = (tn) => {
          vt || (vt = !0, Ft(tn));
        };
        He.addEventListener("loadedmetadata", () => Dt(!0), { once: !0 }), He.addEventListener("canplay", () => Dt(!0), { once: !0 }), He.addEventListener("error", () => Dt(!1), { once: !0 }), He.src = Ae, He.load();
      });
      if (oe.thumbnailJobId !== Re) return;
      const Ce = Number(He.videoWidth || 0), Ve = Number(He.videoHeight || 0);
      if (!q || Ce < 1 || Ve < 1) {
        oe.thumbnailFailedSrcs.add(Ae);
        return;
      }
      const Ie = Math.max(0, Number(He.duration || ye || 0)), je = 46, We = Math.max(72, Math.round(Ce / Ve * je));
      ze.width = We, ze.height = je;
      const Be = ze.getContext("2d");
      if (!Be) return;
      const nt = [], yt = (Ft) => new Promise((vt) => {
        let Dt = !1;
        const tn = () => {
          Dt || (Dt = !0, vt());
        };
        He.addEventListener("seeked", tn, { once: !0 }), He.addEventListener("error", tn, { once: !0 });
        try {
          He.currentTime = Ft;
        } catch {
          tn();
        }
      });
      for (let Ft = 0; Ft < ie; Ft += 1) {
        if (oe.thumbnailJobId !== Re) return;
        const vt = ie <= 1 ? 0 : Ft / (ie - 1), Dt = Ie > 0 ? Math.max(0, Math.min(Ie - Math.max(1e-3, 0.5 / Math.max(1, Number(Me || 24))), Ie * vt)) : 0;
        if (await yt(Dt), oe.thumbnailJobId !== Re) return;
        Be.clearRect(0, 0, We, je), Be.drawImage(He, 0, 0, We, je), nt.push({
          id: `thumb-${Ft}`,
          src: ze.toDataURL("image/jpeg", 0.72),
          time: Dt,
          label: $(Dt)
        });
      }
      if (oe.thumbnailJobId !== Re) return;
      ce.videoTransport.thumbnails = nt, ce.videoTransport.thumbnailCount = nt.length || ie, aN(Ae, {
        thumbnails: nt,
        thumbnailCount: nt.length || ie,
        duration: Ie,
        fps: Me
      });
    } finally {
      He.removeAttribute("src"), He.load(), ea(ze);
    }
  };
  x.push(() => {
    ee();
  });
  const X = Jm({
    video: O instanceof HTMLVideoElement ? O : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (ne) => p.requestFrame(ne),
      cancelFrame: (ne) => p.cancelFrame(ne)
    },
    fps: H,
    span: () => {
      if (z) return Y();
      const ne = Math.round(Number(ce.videoTransport.duration || 0) * H());
      return O.loop || !(ne > 0) ? 1 / 0 : ne;
    },
    loop: () => z,
    onFrame: (ne) => {
      z ? J(ne) : v(), F({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    },
    onCapture: () => {
      P() && (m.backgroundDirty = !0);
    },
    onChange: () => {
      v(), te.playing.value = X.playing, Q(), F({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    }
  });
  x.push(() => X.dispose());
  const se = z && g instanceof HTMLVideoElement ? fd({
    video: g,
    onCapture: () => {
      var Me;
      const ne = Number(g.videoWidth || 0), ye = Number(g.videoHeight || 0);
      ne < 1 || ye < 1 || (f.width = ne, f.height = ye, (Me = f.getContext("2d")) == null || Me.drawImage(g, 0, 0), f.__panoFrameIdx += 1, F({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA }));
    },
    onChange: () => F({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  se && x.push(() => se.dispose());
  const be = z ? ld({
    createImage: (ne, ye) => {
      const Me = new Image();
      return Me.onload = ye, Me.onerror = ye, Me.src = ne, Me;
    },
    onLoad: () => F({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  if (O instanceof HTMLVideoElement) {
    const ne = () => {
      re(), F({ cause: "frame_view", localOnly: !0 });
    }, ye = () => {
      v({
        hasAudio: ce.videoTransport.hasAudio,
        muted: O.muted,
        volume: Number(O.volume ?? ce.videoTransport.volume ?? 1)
      });
    }, Me = () => {
      const Ae = O.dataset.panoSrc;
      Ae && (oe.failedSrcs.add(Ae), re(), F());
    };
    for (const [Ae, Le] of [
      ["loadedmetadata", ne],
      ["loadeddata", ne],
      ["canplay", ne],
      ["volumechange", ye],
      ["error", Me]
    ])
      O.addEventListener(Ae, Le), x.push(() => O.removeEventListener(Ae, Le));
  }
  function we(ne) {
    return t.uiList(u, ne);
  }
  function C(ne) {
    return t.uiValue(u, ne);
  }
  function ae() {
    const ne = String((u == null ? void 0 : u.comfyClass) || (u == null ? void 0 : u.type) || (u == null ? void 0 : u.title) || "");
    if (Rs(ne))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ye = N();
    return ye ? { videoKey: ye.videoKey, metaKey: ye.metaKey } : K === "stickers" || K === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function b() {
    const { metaKey: ne } = ae(), ye = C(ne);
    return Array.isArray(ye) && ye.length > 0 && ye[0] && typeof ye[0] == "object" ? ye[0] : ye && typeof ye == "object" ? ye : null;
  }
  function S(ne) {
    return ne ? ne instanceof HTMLVideoElement ? [
      String(ne.currentSrc || ne.src || ""),
      Number(ne.videoWidth || 0),
      Number(ne.videoHeight || 0)
    ].join("|") : ne instanceof HTMLCanvasElement ? [
      "canvas",
      Number(ne.width || 0),
      Number(ne.height || 0),
      String(ne.__panoFrameIdx || 0)
    ].join("|") : [
      String(ne.currentSrc || ne.src || ""),
      Number(ne.naturalWidth || ne.width || 0),
      Number(ne.naturalHeight || ne.height || 0)
    ].join("|") : "none";
  }
  function $(ne) {
    const ye = Math.max(0, Math.floor(Number(ne || 0))), Me = Math.floor(ye / 60), Ae = ye % 60;
    return `${Me}:${String(Ae).padStart(2, "0")}`;
  }
  function H() {
    return z ? U.timeline.fps : oe.metaFps || 1e3;
  }
  function v(ne = {}) {
    const ye = Number(ne.duration ?? ce.videoTransport.duration ?? 0), Me = Math.max(1, Number(ne.fps ?? ce.videoTransport.fps ?? 24)), Ae = X.frame / H(), Le = Object.prototype.hasOwnProperty.call(ne, "ready") ? !!ne.ready : !!ce.videoTransport.ready, Re = X.playing, He = Object.prototype.hasOwnProperty.call(ne, "visible") ? !!ne.visible : !!ce.videoTransport.visible, ze = Object.prototype.hasOwnProperty.call(ne, "muted") ? !!ne.muted : !!(O instanceof HTMLVideoElement ? O.muted : ce.videoTransport.muted), q = Number(
      Object.prototype.hasOwnProperty.call(ne, "volume") ? ne.volume : O instanceof HTMLVideoElement ? O.volume : ce.videoTransport.volume
    ), Ce = Object.prototype.hasOwnProperty.call(ne, "hasAudio") ? !!ne.hasAudio : pe(O), Ve = Object.prototype.hasOwnProperty.call(ne, "loop") ? !!ne.loop : !!ce.videoTransport.loop;
    Object.assign(ce.videoTransport, {
      ready: Le,
      playing: Re,
      visible: He,
      loop: Ve,
      currentTime: Number.isFinite(Ae) ? Ae : 0,
      duration: Number.isFinite(ye) ? ye : 0,
      progressPct: ye > 1e-6 ? Math.max(0, Math.min(100, Ae / ye * 100)) : 0,
      currentTimeLabel: $(Ae),
      durationLabel: $(ye),
      frameCount: Math.max(0, Number(ne.frameCount ?? ce.videoTransport.frameCount ?? 0)),
      fps: Me,
      hasAudio: Ce,
      muted: ze,
      volume: Math.max(0, Math.min(1, Number.isFinite(q) ? q : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(q) ? q : 1)) * 100),
      thumbnails: Array.isArray(ne.thumbnails) ? ne.thumbnails : ce.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(ne.thumbnailCount ?? ce.videoTransport.thumbnailCount ?? ie))
    });
  }
  function w() {
    return !!(O instanceof HTMLVideoElement && !z && O.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function L() {
    if (!(O instanceof HTMLVideoElement) || !ce.videoTransport.hasAudio) return;
    const ne = !O.muted;
    O.muted = ne, !ne && Number(O.volume || 0) <= 0 && (O.volume = Math.max(0.01, Number(ce.videoTransport.volume || 1))), v({
      hasAudio: ce.videoTransport.hasAudio,
      muted: O.muted,
      volume: Number(O.volume ?? ce.videoTransport.volume ?? 1)
    });
  }
  function M() {
    v({
      visible: w()
    });
  }
  function P() {
    if (!(O instanceof HTMLVideoElement) || Number(O.videoWidth || 0) < 1 || Number(O.videoHeight || 0) < 1) return !1;
    const ne = Number(O.videoWidth || 0), ye = Number(O.videoHeight || 0);
    (W.width !== ne || W.height !== ye) && (W.width = ne, W.height = ye);
    const Me = W.getContext("2d");
    return Me ? (Me.clearRect(0, 0, ne, ye), Me.drawImage(O, 0, 0, ne, ye), W.__panoFrameIdx = Number(W.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function A() {
    return !X.showsVideo && Number(W.width || 0) > 0 && Number(W.height || 0) > 0 && Number(W.__panoFrameIdx || 0) > 0 ? W : O instanceof HTMLVideoElement && Number(O.videoWidth || 0) > 0 && Number(O.videoHeight || 0) > 0 && Number(O.readyState || 0) >= 2 ? O : null;
  }
  function B() {
    W.__panoFrameIdx = 0, m.backgroundDirty = !0;
  }
  function re() {
    if (!(O instanceof HTMLVideoElement)) return null;
    const { videoKey: ne } = ae(), ye = (N() || Xt(u, "background")) && we(ne)[0] || null, Me = c(ye), Ae = [Me, t.linkedVideoFile(u, D())].filter(Boolean), Le = Ae.find((Ie) => !oe.failedSrcs.has(Ie)) || "";
    oe.videoFailed = !Le && Ae.length > 0;
    const Re = Le && Le === Me ? b() : null;
    oe.metaFps = Number(Re == null ? void 0 : Re.fps) > 0 ? Number(Re.fps) : 0;
    const He = Math.max(1, Number((Re == null ? void 0 : Re.fps) || (z ? U.timeline.fps : 24))), ze = O.dataset.panoSrc === Le && Number.isFinite(O.duration) ? O.duration : 0, q = Number((Re == null ? void 0 : Re.duration) || ((Re == null ? void 0 : Re.frames) > 0 ? Re.frames / He : ze)), Ce = Math.max(0, Number((Re == null ? void 0 : Re.frames) || Math.round(q * He))), Ve = !!(Re != null && Re.has_audio) || pe(O);
    return Le && O.dataset.panoSrc !== Le ? (O.pause(), B(), O.dataset.panoSrc = Le, O.loop = !z && !!ce.videoTransport.loop, O.muted = !!ce.videoTransport.muted, O.volume = Math.max(0, Math.min(1, Number(ce.videoTransport.volume ?? 1))), O.src = Le, O.load(), X.setSource(!0), z || X.seek(0)) : !Le && O.getAttribute("src") && (O.pause(), O.removeAttribute("src"), delete O.dataset.panoSrc, O.load(), B(), ee(), X.setSource(!1)), z || (O.loop = !!ce.videoTransport.loop), Le && !z && oe.thumbnailSrc !== Le && !oe.thumbnailFailedSrcs.has(Le) && I(Le, q, He), Le || ee(), v({
      ready: !!Le,
      visible: !!Le && w(),
      duration: q,
      frameCount: Ce,
      fps: He,
      hasAudio: Ve,
      loop: !!O.loop,
      muted: !!O.muted,
      volume: Number(O.volume ?? ce.videoTransport.volume ?? 1),
      thumbnailCount: ce.videoTransport.thumbnailCount
    }), Le || null;
  }
  function me(ne, ye = null) {
    return d(u, ne, a, ye || (() => F()));
  }
  function j(ne = null) {
    return Xt(u, "external-sticker") ? me(io, ne) : null;
  }
  function de() {
    if (!Xt(u, "external-sticker")) return null;
    const ne = we(Lg)[0];
    if (!ne || typeof ne != "object") return null;
    const ye = we(Dg).map(c).filter(Boolean);
    if (ye.length) return { frames: ye, meta: ne };
    const Me = c(we(Tg)[0] || null);
    return Me ? { src: Me, meta: ne } : null;
  }
  function _e() {
    const ne = U.stickers.find(fe), ye = ne ? de() : null, Me = ye ? ad(ne.clip, n.frame, U.timeline.fps, ye.meta) : null;
    se.follow({ src: (ye == null ? void 0 : ye.src) || "", time: Me, playing: X.advancing, fps: U.timeline.fps });
    const Ae = ne ? ve(ne) : null, Le = ye != null && ye.frames ? be.picture(ye.frames, Me, ye.meta, Ae) : se.picture(f, Ae);
    return Le ? { media: Le, revision: S(Le), source: sd(ye, Ae) } : null;
  }
  function ke() {
    return !z || !Xt(u, "scene") ? null : Us(we("pano_scene_files"), we("pano_scene_meta"), c);
  }
  function ue() {
    return !z || !Xt(u, "external-sticker") ? null : Us(we("pano_sticker_files"), we("pano_sticker_meta"), c);
  }
  function ve(ne) {
    var He;
    if (ne && typeof ne == "object" && (fe(ne) || ne.external === !0))
      return j(() => {
        Rr(u, "image-loaded");
      });
    const ye = z ? Ne(ne) : String(ne && typeof ne == "object" ? ne.asset_id || ne.assetId || "" : ne || "");
    if (!ye) return null;
    const Me = a.get(ye);
    if (Me) return Me;
    const Ae = z ? Ks(ne.source) : (He = U.assets) == null ? void 0 : He[ye], Le = l(Ae);
    if (!Le) return null;
    const Re = new Image();
    return Ig(Re, Le), Re.onload = () => {
      Eg(Re, Le), F();
    }, Re.onerror = () => {
      Og(Re, Le), F();
    }, Re.src = Le, a.set(ye, Re), Re;
  }
  function Ne(ne) {
    const { source: ye } = ne;
    return ye.filename ? `file:${ye.storage}:${ye.subfolder}:${ye.filename}` : `sticker:${ne.id}`;
  }
  function h() {
    if (K === "cutout" && !r) {
      const Re = A();
      if (Re) return Re;
      const He = s(
        u,
        ["erp_image", "bg_erp"],
        () => F(),
        "background:cutout:erp_image|bg_erp"
      );
      return He && !cu(He) ? He : d(u, "pano_input_images", a, () => F()) || He || null;
    }
    const ne = A();
    if (ne) return ne;
    const ye = N(), Me = ye || Xt(u, "background") ? d(u, (ye == null ? void 0 : ye.imageKey) ?? "pano_input_images", a, () => F()) : null;
    if (Me && !cu(Me)) return Me;
    if (O instanceof HTMLVideoElement && O.dataset.panoSrc) return O;
    if (ye) return Me;
    const Ae = D();
    return s(u, Ae, () => F(), `background:${Ae.join("|")}`) || Me || null;
  }
  function R() {
    var ye;
    const ne = (Array.isArray(u == null ? void 0 : u.inputs) ? u.inputs : []).findIndex((Me) => (Me == null ? void 0 : Me.name) === "source");
    return ne >= 0 && u.graph ? String(((ye = u.getInputLink(ne)) == null ? void 0 : ye.type) || "") : "";
  }
  function N() {
    return !k || !Xt(u, "scene") ? null : QP(we);
  }
  function y() {
    var ne;
    return ((ne = N()) == null ? void 0 : ne.coverage) ?? kn(U.coverage);
  }
  function D() {
    if (N()) return [];
    if (K === "cutout") return r ? R() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const ne = Array.isArray(u == null ? void 0 : u.inputs) ? u.inputs.map((Ae) => String((Ae == null ? void 0 : Ae.name) || "")) : [], ye = ne.includes("erp_image"), Me = ne.includes("bg_erp");
    return _ && (ye || Me) ? ye ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : K === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function le(ne) {
    return ne ? ne instanceof HTMLImageElement ? !!ne.complete && Number(ne.naturalWidth || ne.width || 0) > 0 && Number(ne.naturalHeight || ne.height || 0) > 0 : ne instanceof HTMLVideoElement ? Number(ne.videoWidth || 0) > 0 && Number(ne.videoHeight || 0) > 0 && Number(ne.readyState || 0) >= 2 : Number(ne.width || ne.naturalWidth || 0) > 0 && Number(ne.height || ne.naturalHeight || 0) > 0 : !1;
  }
  function ge() {
    if (i.failed) return { status: Kn, detail: "renderer" };
    if (!i.ready) return { status: Jn, detail: "boot" };
    const ne = h(), ye = oe.videoFailed ? Kn : lu(ne, le), Me = [];
    for (const Ae of G()) {
      if ((Ae == null ? void 0 : Ae.visible) === !1) continue;
      const Le = ve(Ae);
      Me.push(lu(Le, le));
    }
    return vP({
      presented: m.hasPresentedFrame,
      background: ye,
      stickers: Me
    });
  }
  function he() {
    O instanceof HTMLVideoElement && O.pause(), x.forEach((ne) => {
      try {
        ne();
      } catch {
      }
    });
  }
  return {
    connect(ne) {
      ({
        isExternalSticker: fe,
        requestDraw: F,
        setTimelineFrame: J,
        skyStickers: G,
        syncTimeline: Q,
        timelineSpanFrames: Y
      } = ne);
    },
    videoState: oe,
    queueVideoTransportLayout: V,
    playback: X,
    portVideo: se,
    getNodeUiValue: C,
    getMediaRevisionToken: S,
    playbackFps: H,
    syncVideoTransportState: v,
    toggleVideoMuted: L,
    syncVideoTransportVisibility: M,
    refreshModalVideoSource: re,
    getStickerUiImage: me,
    getExternalStickerPreviewImage: j,
    getPortMedia: de,
    followPortSticker: _e,
    getStickerImage: ve,
    stickerImageKey: Ne,
    getConnectedErpImage: h,
    backgroundCoverage: y,
    upstreamBackground: N,
    isDecodedImageReady: le,
    getStageImageStatus: ge,
    sceneFiles: ke,
    stickerFiles: ue,
    disposeMediaSession: he
  };
}
function lN(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((u) => {
      n.push(String(u || ""));
    }), !n.length)) return;
    const d = Number(c.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(c) {
    n[i] !== c && (n.splice(i + 1), n.push(c), n.length > o && n.shift(), i = n.length - 1);
  }
  return s(t), {
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
      const c = n.length, d = Math.max(0, c - a), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + a), g = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: g
      };
    },
    hydrate: s
  };
}
const cN = 80;
function Gg(e) {
  return JSON.stringify(l1(e));
}
function uN(e) {
  return lN(cN, { entries: [Gg(e)], index: 0 });
}
function Wg(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function dN(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, c, d, u, f, g, _, m, p, E, U, z, W, k;
  function te() {
    r || (U(), am(i), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(Gg(i)), W()));
  }
  function K(O) {
    var G, Q;
    if (r) return;
    E();
    const fe = O < 0 ? t.historyController.undo() : t.historyController.redo();
    if (W(), !fe) return;
    const F = c1(i, fe), J = (G = i.timeline) == null ? void 0 : G.fps;
    Object.keys(i).forEach((Y) => delete i[Y]), Object.assign(i, F.state), U(!1), o && i.timeline.fps !== J && _.seek(Math.round(t.frame * i.timeline.fps / J)), t.selectedId = Wg(s, i), a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Q = d()) == null ? void 0 : Q.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, F.paintingChanged ? g() : f(), z(), k(), c(), p({ cause: "cutout_frame" });
  }
  function ce() {
    var F, J;
    const O = Array.isArray((F = t.historyController) == null ? void 0 : F.entries) ? t.historyController.entries : [], fe = Number((J = t.historyController) == null ? void 0 : J.index);
    return {
      canUndo: !r && O.length > 1 && fe > 0,
      canRedo: !r && O.length > 1 && fe >= 0 && fe < O.length - 1
    };
  }
  return {
    connect(O) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: g,
        playback: _,
        releaseHiddenSelection: m,
        requestDraw: p,
        stopTimelinePlayback: E,
        syncCutoutShot: U,
        syncPaintUi: z,
        syncUndoRedoButtons: W,
        updateSidePanel: k
      } = O);
    },
    pushHistory: te,
    restoreHistory: K,
    getHistoryCapabilities: ce
  };
}
function fN(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, c, d, u, f, g, _;
  function m() {
    return s === "stickers" ? p() : o.shots;
  }
  function p() {
    return i ? o.stickers.filter((h) => h.placement === "sky") : o.stickers;
  }
  function E(h) {
    return i && X(h);
  }
  function U(h) {
    return h.source.kind === "file" && !h.source.filename && !h.source.data_url;
  }
  function z(h) {
    return E(h) ? Xu(h, n.frame) : h;
  }
  function W(h, R) {
    E(h) ? nm(h, n.frame, R) : Object.assign(h, R);
  }
  function k() {
    const h = o.painting || (o.painting = lo(null));
    return Array.isArray(h.groups) || (h.groups = []), h.groups;
  }
  function te(h = "paint") {
    var D, le;
    const R = Array.isArray((le = (D = o.painting) == null ? void 0 : D[h]) == null ? void 0 : le.strokes) ? o.painting[h].strokes : [], N = [], y = /* @__PURE__ */ new Set();
    for (const ge of R) {
      const he = String((ge == null ? void 0 : ge.actionGroupId) || "").trim();
      !he || y.has(he) || (y.add(he), N.push(he));
    }
    return N;
  }
  function K() {
    return te("paint");
  }
  function ce(h, R) {
    const N = String(R || "").trim();
    return N ? `${h === "mask" ? "mask" : "paint"}:${N}` : "";
  }
  function O(h) {
    const R = String(h || "").trim();
    return R ? `raster:${R}` : "";
  }
  function fe(h) {
    const R = String(h || "").trim();
    if (!R) return "";
    const N = R.match(/^raster:(.*)$/);
    return String(N ? N[1] || "" : R).trim();
  }
  function F(h, R = null) {
    const N = String(h || "").trim();
    if (!N) return { layerKind: "paint", actionGroupId: "" };
    const y = N.match(/^(paint|mask):(.*)$/);
    return y ? { layerKind: y[1] === "mask" ? "mask" : "paint", actionGroupId: String(y[2] || "").trim() } : { layerKind: R === "mask" ? "mask" : "paint", actionGroupId: N };
  }
  function J() {
    var R;
    let h = -1;
    for (const N of p())
      h = Math.max(h, Number((N == null ? void 0 : N.z_index) || 0));
    for (const N of k())
      h = Math.max(h, Number((N == null ? void 0 : N.z_index) || 0));
    for (const N of Array.isArray((R = o.painting) == null ? void 0 : R.raster_objects) ? o.painting.raster_objects : [])
      String((N == null ? void 0 : N.layerKind) || "paint") === "paint" && (h = Math.max(h, Number((N == null ? void 0 : N.z_index) || 0)));
    return h + 1;
  }
  function G(h, R = null) {
    const N = String(h || "").trim();
    if (!N) return null;
    const y = k();
    let D = y.find((le) => String((le == null ? void 0 : le.actionGroupId) || "") === N);
    return D ? R != null && (D.z_index = Math.max(0, Number(R || 0))) : (D = {
      id: N,
      type: "strokeGroup",
      actionGroupId: N,
      z_index: R == null ? J() : Math.max(0, Number(R || 0)),
      locked: !1,
      frame: null
    }, y.push(D)), D;
  }
  function Q(h) {
    if (!(h != null && h.centerUv)) return [];
    const R = Number(h.centerUv.u || 0), N = Number(h.centerUv.v || 0), y = Number(h.halfW || 0), D = Number(h.halfH || 0);
    return [
      {
        u: ((R - y) % 1 + 1) % 1,
        v: Ee(N - D, 0, 1)
      },
      {
        u: ((R + y) % 1 + 1) % 1,
        v: Ee(N - D, 0, 1)
      },
      {
        u: ((R + y) % 1 + 1) % 1,
        v: Ee(N + D, 0, 1)
      },
      {
        u: ((R - y) % 1 + 1) % 1,
        v: Ee(N + D, 0, 1)
      }
    ];
  }
  function Y() {
    const h = new Set(K()), N = k().filter((y) => h.has(String((y == null ? void 0 : y.actionGroupId) || "")));
    return h.forEach((y) => {
      N.some((D) => String((D == null ? void 0 : D.actionGroupId) || "") === y) || N.push({
        id: y,
        type: "strokeGroup",
        actionGroupId: y,
        z_index: J(),
        locked: !1,
        frame: null
      });
    }), N.sort((y, D) => Number((y == null ? void 0 : y.z_index) || 0) - Number((D == null ? void 0 : D.z_index) || 0)), o.painting.groups = N, N;
  }
  function oe(h, R, N) {
    var ze;
    const y = (q) => (Number(q || 0) % 1 + 1) % 1, D = [];
    for (const q of N) {
      const Ce = q == null ? void 0 : q.geometry, Ve = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(Ve) && D.push(...Ve);
    }
    if (!D.length) return null;
    const le = y(((ze = D[0]) == null ? void 0 : ze.u) || 0);
    let ge = 0, he = 0;
    D.forEach((q) => {
      const Ce = y((q == null ? void 0 : q.u) || 0);
      ge += le + H(Ce, le), he += Number((q == null ? void 0 : q.v) || 0);
    });
    const ne = (ge / D.length % 1 + 1) % 1;
    let ye = 1 / 0, Me = -1 / 0, Ae = 1 / 0, Le = -1 / 0;
    D.forEach((q) => {
      const Ce = y((q == null ? void 0 : q.u) || 0), Ve = H(Ce, ne);
      ye = Math.min(ye, Ve), Me = Math.max(Me, Ve);
      const Ie = Number((q == null ? void 0 : q.v) || 0);
      Ae = Math.min(Ae, Ie), Le = Math.max(Le, Ie);
    });
    const Re = N.reduce((q, Ce) => {
      const Ve = c(String((Ce == null ? void 0 : Ce.toolKind) || "pen")), Ie = In[Ve] || In[Ir], je = Math.max(1, Number((Ce == null ? void 0 : Ce.size) || 10)) * Math.max(0.1, Number((Ie == null ? void 0 : Ie.sizeScale) ?? 1));
      return Math.max(q, je);
    }, 0), He = Math.max(35e-4, Re / 2048);
    return {
      centerUv: { u: ((ne + (ye + Me) * 0.5) % 1 + 1) % 1, v: Ee((Ae + Le) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Me - ye) * 0.5 + He,
      halfH: (Le - Ae) * 0.5 + He,
      uvPad: He
    };
  }
  function ie(h, R, N) {
    const y = String(h || "").trim();
    if (!y) return null;
    const D = k().find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === y);
    if (!D) return null;
    const le = N || b(y, R);
    return D.frame = oe(y, R, le), D.frame;
  }
  function x() {
    var y;
    const h = p().map((D) => ({
      type: "sticker",
      id: String((D == null ? void 0 : D.id) || ""),
      z_index: Number((D == null ? void 0 : D.z_index) || 0),
      item: D
    })), R = Y().map((D) => ({
      type: "strokeGroup",
      id: String((D == null ? void 0 : D.id) || (D == null ? void 0 : D.actionGroupId) || ""),
      actionGroupId: String((D == null ? void 0 : D.actionGroupId) || ""),
      z_index: Number((D == null ? void 0 : D.z_index) || 0),
      item: D
    })), N = (Array.isArray((y = o.painting) == null ? void 0 : y.raster_objects) ? o.painting.raster_objects : []).filter((D) => String((D == null ? void 0 : D.layerKind) || "paint") === "paint").map((D) => ({
      type: "rasterObject",
      id: String((D == null ? void 0 : D.id) || ""),
      z_index: Number((D == null ? void 0 : D.z_index) || 0),
      item: D
    }));
    return [...h, ...R, ...N].sort((D, le) => Number(D.z_index || 0) - Number(le.z_index || 0));
  }
  function T(h = !0) {
    var N, y, D, le, ge, he;
    const R = x().filter((ne) => ne.type === "strokeGroup").map((ne) => String(ne.actionGroupId || "")).filter((ne) => !!ne);
    if (h) {
      const ne = String(((y = (N = n.interaction) == null ? void 0 : N.stroke) == null ? void 0 : y.actionGroupId) || "").trim(), ye = String(((le = (D = n.interaction) == null ? void 0 : D.stroke) == null ? void 0 : le.layerKind) || "").trim(), Me = String(((he = (ge = n.interaction) == null ? void 0 : ge.stroke) == null ? void 0 : he.toolKind) || "").trim();
      ne && ye === "paint" && Me !== "eraser" && !R.includes(ne) && R.push(ne);
    }
    return R;
  }
  function Z(h = !0) {
    var he, ne, ye, Me, Ae, Le;
    const R = x();
    if (!h) return R;
    const N = String(((ne = (he = n.interaction) == null ? void 0 : he.stroke) == null ? void 0 : ne.actionGroupId) || "").trim(), y = String(((Me = (ye = n.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : Me.layerKind) || "").trim(), D = String(((Le = (Ae = n.interaction) == null ? void 0 : Ae.stroke) == null ? void 0 : Le.toolKind) || "").trim();
    if (!N || y !== "paint" || D === "eraser" || R.some((Re) => Re.type === "strokeGroup" && String(Re.actionGroupId || "") === N))
      return R;
    const le = g();
    let ge = R.reduce((Re, He) => Math.max(Re, Number((He == null ? void 0 : He.z_index) || 0)), -1) + 1;
    return le && ae(le) && String(le.actionGroupId || "") === N && (ge = Number(le.z_index || 0)), [
      ...R,
      {
        type: "strokeGroup",
        id: N,
        actionGroupId: N,
        z_index: ge,
        item: null
      }
    ].sort((Re, He) => Number((Re == null ? void 0 : Re.z_index) || 0) - Number((He == null ? void 0 : He.z_index) || 0));
  }
  function V() {
    return k().slice().sort((h, R) => Number((h == null ? void 0 : h.z_index) || 0) - Number((R == null ? void 0 : R.z_index) || 0)).map((h) => C(ce("paint", (h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || ""))).filter(Boolean);
  }
  function pe() {
    var h;
    return (Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : []).filter((R) => String((R == null ? void 0 : R.layerKind) || "paint") === "paint").slice().sort((R, N) => Number((R == null ? void 0 : R.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0)).map((R) => be(O((R == null ? void 0 : R.id) || ""))).filter(Boolean);
  }
  function Se() {
    return r || !Array.isArray(o.stickers) ? [] : p();
  }
  function ee() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Se()];
  }
  function I(h) {
    return !!h && Array.isArray(o.shots) && o.shots.includes(h);
  }
  function X(h) {
    return !!h && Array.isArray(o.stickers) && o.stickers.includes(h);
  }
  function se() {
    var h;
    return Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : [];
  }
  function be(h) {
    const R = fe(h);
    if (!R) return null;
    const N = se().find((y) => String((y == null ? void 0 : y.id) || "").trim() === R);
    return !N || String((N == null ? void 0 : N.layerKind) || "paint") !== "paint" ? null : {
      ...N,
      id: O(R),
      type: "rasterObject",
      rasterObjectId: R
    };
  }
  function we(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "rasterObject") return !1;
    const R = fe(h.rasterObjectId || h.id || "");
    return !!R && !!be(O(R));
  }
  function C(h) {
    const R = F(h), N = String(R.actionGroupId || "").trim();
    if (!N) return null;
    const y = k().find((D) => String((D == null ? void 0 : D.id) || (D == null ? void 0 : D.actionGroupId) || "") === N || String((D == null ? void 0 : D.actionGroupId) || "") === N);
    return y ? {
      ...y,
      id: ce("paint", N),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: N
    } : null;
  }
  function ae(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "strokeGroup") return !1;
    const R = String(h.actionGroupId || "").trim(), N = String(h.layerKind || "paint").trim() || "paint";
    return !!R && !!C(ce(N, R));
  }
  function b(h, R = null) {
    const N = F(h, R), y = String(N.actionGroupId || "").trim();
    return y ? u(N.layerKind).filter((D) => String((D == null ? void 0 : D.actionGroupId) || "").trim() === y) : [];
  }
  function S(h, R = "paint") {
    const N = String(h || "").trim(), D = `geomv5:${String(R || "paint").trim() || "paint"}:${N}:${n.mode}:${f()}`;
    if (n.mode === "frame") {
      const le = l(), ge = String((le == null ? void 0 : le.id) || ""), he = le ? d(le) : null;
      return `${D}:frame:${ge}:${Math.round(Number((le == null ? void 0 : le.yaw_deg) || 0) * 1e3)}:${Math.round(Number((le == null ? void 0 : le.pitch_deg) || 0) * 1e3)}:${Math.round(Number((le == null ? void 0 : le.roll_deg) ?? (le == null ? void 0 : le.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((le == null ? void 0 : le.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((le == null ? void 0 : le.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((he == null ? void 0 : he.x) || 0))}:${Math.round(Number((he == null ? void 0 : he.y) || 0))}:${Math.round(Number((he == null ? void 0 : he.w) || 0))}:${Math.round(Number((he == null ? void 0 : he.h) || 0))}`;
    }
    return `${D}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function $(h, R, N) {
    return !h || typeof h != "object" ? h : {
      ...h,
      u: ((Number(h.u || 0) + Number(R || 0)) % 1 + 1) % 1,
      v: Ee(Number(h.v || 0) + Number(N || 0), 0, 1)
    };
  }
  function H(h, R) {
    let N = Number(h || 0) - Number(R || 0);
    for (; N > 0.5; ) N -= 1;
    for (; N < -0.5; ) N += 1;
    return N;
  }
  function v(h, R = null, N = null) {
    var ye;
    const y = F(h, R), D = Array.isArray(N) ? N : b(y.actionGroupId, y.layerKind), le = [];
    if (D.forEach((Me) => {
      const Ae = (Me == null ? void 0 : Me.geometry) || null, Le = (Ae == null ? void 0 : Ae.geometryKind) === "lasso_fill" ? Ae == null ? void 0 : Ae.points : (Ae == null ? void 0 : Ae.processedPoints) || (Ae == null ? void 0 : Ae.rawPoints) || (Ae == null ? void 0 : Ae.points) || [];
      Array.isArray(Le) && le.push(...Le);
    }), !le.length) return { u: 0.5, v: 0.5 };
    const ge = Number(((ye = le[0]) == null ? void 0 : ye.u) || 0);
    let he = 0, ne = 0;
    return le.forEach((Me) => {
      he += ge + H(Number((Me == null ? void 0 : Me.u) || 0), ge), ne += Number((Me == null ? void 0 : Me.v) || 0);
    }), {
      u: (he / le.length % 1 + 1) % 1,
      v: Ee(ne / le.length, 0, 1)
    };
  }
  function w(h, R, N = 1, y = 0) {
    if (!h || typeof h != "object") return h;
    const D = Number((R == null ? void 0 : R.u) || 0), le = Number((R == null ? void 0 : R.v) || 0), ge = H(Number(h.u || 0), D), he = Number(h.v || 0) - le, ne = Number(y || 0) * br, ye = Math.cos(ne), Me = Math.sin(ne), Ae = Math.max(0.02, Number(N || 1)), Le = (ge * ye - he * Me) * Ae, Re = (ge * Me + he * ye) * Ae;
    return {
      ...h,
      u: ((D + Le) % 1 + 1) % 1,
      v: Ee(le + Re, 0, 1)
    };
  }
  function L(h, R, N, y = null, D = null, le = null) {
    const ge = F(h, D), he = String(ge.actionGroupId || "").trim();
    if (!he) return !1;
    const ne = u(ge.layerKind), ye = Array.isArray(y) ? new Map(y.map((Ae) => [String((Ae == null ? void 0 : Ae.id) || ""), Ae])) : null;
    let Me = !1;
    if (ne.forEach((Ae) => {
      if (String((Ae == null ? void 0 : Ae.actionGroupId) || "").trim() !== he) return;
      const Le = (ye == null ? void 0 : ye.get(String((Ae == null ? void 0 : Ae.id) || ""))) || Ae, Re = Ae == null ? void 0 : Ae.geometry, He = Le == null ? void 0 : Le.geometry;
      !Re || !He || (Array.isArray(He.points) && (Re.points = He.points.map((ze) => $(ze, R, N)), Me = !0), Array.isArray(He.rawPoints) && (Re.rawPoints = He.rawPoints.map((ze) => $(ze, R, N)), Me = !0), Array.isArray(He.processedPoints) && (Re.processedPoints = He.processedPoints.map((ze) => $(ze, R, N)), Me = !0));
    }), Me && le) {
      const Ae = k().find((Le) => String((Le == null ? void 0 : Le.actionGroupId) || "") === he);
      Ae && (Ae.frame = null);
    }
    return Me;
  }
  function M(h, R = 1, N = 0, y = null, D = null, le = null) {
    const ge = F(h, D), he = String(ge.actionGroupId || "").trim();
    if (!he) return !1;
    const ne = u(ge.layerKind), ye = Array.isArray(y) ? y : b(he, ge.layerKind), Me = Array.isArray(ye) ? new Map(ye.map((Re) => [String((Re == null ? void 0 : Re.id) || ""), Re])) : null, Ae = (le == null ? void 0 : le.centerUv) ?? v(he, ge.layerKind, ye);
    let Le = !1;
    if (ne.forEach((Re) => {
      if (String((Re == null ? void 0 : Re.actionGroupId) || "").trim() !== he) return;
      const He = (Me == null ? void 0 : Me.get(String((Re == null ? void 0 : Re.id) || ""))) || Re, ze = Re == null ? void 0 : Re.geometry, q = He == null ? void 0 : He.geometry;
      !ze || !q || (Array.isArray(q.points) && (ze.points = q.points.map((Ce) => w(Ce, Ae, R, N)), Le = !0), Array.isArray(q.rawPoints) && (ze.rawPoints = q.rawPoints.map((Ce) => w(Ce, Ae, R, N)), Le = !0), Array.isArray(q.processedPoints) && (ze.processedPoints = q.processedPoints.map((Ce) => w(Ce, Ae, R, N)), Le = !0));
    }), Le && le) {
      const Re = k().find((He) => String((He == null ? void 0 : He.actionGroupId) || "") === he);
      Re && (Re.frame = null);
    }
    return Le;
  }
  function P(h, R, N, y = null) {
    const D = fe(h);
    if (!D) return !1;
    const le = se().find((Me) => String((Me == null ? void 0 : Me.id) || "").trim() === D);
    if (!le) return !1;
    const ge = y && typeof y == "object" ? y : le, he = (ge == null ? void 0 : ge.transform) || {}, ne = Number(he.du || 0) + Number(R || 0), ye = Ee(Number(he.dv || 0) + Number(N || 0), -1, 1);
    return le.transform || (le.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), le.transform.du = ne, le.transform.dv = ye, !0;
  }
  function A(h, R = 1, N = null) {
    const y = fe(h);
    if (!y) return !1;
    const D = se().find((ye) => String((ye == null ? void 0 : ye.id) || "").trim() === y);
    if (!D) return !1;
    const le = N && typeof N == "object" ? N : D, ge = (le == null ? void 0 : le.transform) || {}, he = Math.max(0.01, Number(ge.scale || 1)), ne = Ee(he * Math.max(0.01, Number(R || 1)), 0.01, 100);
    return D.transform || (D.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), D.transform.scale = ne, !0;
  }
  function B() {
    return J();
  }
  function re(h) {
    var R;
    return !h || typeof h != "object" ? !1 : a ? ((R = h.source) == null ? void 0 : R.kind) === "port" : String(h.id || "") === xd || String(h.source_kind || "") === xP;
  }
  function me(h) {
    return !!(h && typeof h == "object" && h.visible === !1);
  }
  function j(h) {
    return re(h) && me(h) ? Sm : 1;
  }
  function de(h, R, N = 1, y = 0) {
    if (!h || typeof h != "object") return h;
    const D = Number((R == null ? void 0 : R.u) || 0), le = Number((R == null ? void 0 : R.v) || 0), ge = H(Number(h.u || 0), D), he = Number(h.v || 0) - le, ne = Math.max(0.02, Number(N || 1)), ye = Number(y || 0) * br, Me = Math.cos(ye), Ae = Math.sin(ye), Le = ge / ne, Re = he / ne, He = Le * Me + Re * Ae, ze = -Le * Ae + Re * Me;
    return {
      ...h,
      u: ((D + He) % 1 + 1) % 1,
      v: le + ze
    };
  }
  function _e(h) {
    const R = (h == null ? void 0 : h.bbox) || null, N = (h == null ? void 0 : h.transform) || {};
    return R ? {
      u: (((Number(R.u0 || 0) + Number(R.u1 || 0)) * 0.5 + Number(N.du || 0)) % 1 + 1) % 1,
      v: Ee((Number(R.v0 || 0) + Number(R.v1 || 0)) * 0.5 + Number(N.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function ke(h) {
    var ne, ye, Me, Ae;
    const R = (h == null ? void 0 : h.bbox) || null;
    if (!R) return [];
    const N = {
      u: (Number(R.u0 || 0) + Number(R.u1 || 0)) * 0.5,
      v: (Number(R.v0 || 0) + Number(R.v1 || 0)) * 0.5
    }, y = Math.max(0.01, Number(((ne = h == null ? void 0 : h.transform) == null ? void 0 : ne.scale) || 1)), D = Number(((ye = h == null ? void 0 : h.transform) == null ? void 0 : ye.rot_deg) || 0), le = Number(((Me = h == null ? void 0 : h.transform) == null ? void 0 : Me.du) || 0), ge = Number(((Ae = h == null ? void 0 : h.transform) == null ? void 0 : Ae.dv) || 0);
    return [
      { u: Number(R.u0 || 0), v: Number(R.v0 || 0) },
      { u: Number(R.u1 || 0), v: Number(R.v0 || 0) },
      { u: Number(R.u1 || 0), v: Number(R.v1 || 0) },
      { u: Number(R.u0 || 0), v: Number(R.v1 || 0) }
    ].map((Le) => $(w(Le, N, y, D), le, ge));
  }
  function ue(h) {
    const R = fe((h == null ? void 0 : h.rasterObjectId) || (h == null ? void 0 : h.id) || ""), N = (h == null ? void 0 : h.transform) || {}, y = (h == null ? void 0 : h.bbox) || {}, D = `${R}:${n.mode}:${f()}:${y.u0}:${y.v0}:${y.u1}:${y.v1}:${N.du}:${N.dv}:${N.rot_deg}:${N.scale}`;
    if (n.mode === "frame") {
      const le = l(), ge = le ? d(le) : null;
      return `${D}:frame:${String((le == null ? void 0 : le.id) || "")}:${Math.round(Number((ge == null ? void 0 : ge.x) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.y) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.w) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.h) || 0))}`;
    }
    return `${D}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ve(h) {
    const R = String((h == null ? void 0 : h.id) || ""), N = I(h) ? "frame" : X(h) ? "sticker" : "item", y = z(h), D = [
      N,
      R,
      n.mode,
      Number((y == null ? void 0 : y.yaw_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.pitch_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.hFOV_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.vFOV_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.rot_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.roll_deg) || 0).toFixed(4),
      Tr(y),
      E(h) && _(h)
    ].join(":");
    if (n.mode === "frame") {
      const le = l(), ge = le ? d(le) : null;
      return `${D}:frame:${String((le == null ? void 0 : le.id) || "")}:${Math.round(Number((ge == null ? void 0 : ge.x) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.y) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.w) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.h) || 0))}`;
    }
    return `${D}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Ne() {
    x().forEach((R, N) => {
      R.type === "sticker" && R.item && (R.item.z_index = N), R.type === "strokeGroup" && R.item && (R.item.z_index = N), R.type === "rasterObject" && R.item && (R.item.z_index = N);
    });
  }
  return {
    connect(h) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameViewRect: d,
        getPaintingLayerList: u,
        getPaintingRevisionKey: f,
        getSelected: g,
        sceneStickerShown: _
      } = h);
    },
    getList: m,
    skyStickers: p,
    isSceneSticker: E,
    isUploadingSticker: U,
    poseOf: z,
    writePose: W,
    getPaintingGroupList: k,
    makeStrokeGroupSelectionId: ce,
    makeRasterObjectSelectionId: O,
    parseRasterObjectSelectionId: fe,
    ensurePaintingGroupEntry: G,
    getFrameCornersUv: Q,
    ensureGroupFrame: ie,
    getDisplayListObjects: x,
    getOrderedPaintGroupIds: T,
    getOrderedDisplayListObjects: Z,
    getSelectableStrokeGroupItems: V,
    getSelectableRasterObjectItems: pe,
    cutoutStickers: Se,
    getCutoutSelectableItems: ee,
    isShotItem: I,
    isStickerItem: X,
    getRasterObjectList: se,
    getRasterObjectItem: be,
    isRasterObjectItem: we,
    getStrokeGroupItem: C,
    isStrokeGroupItem: ae,
    getStrokeGroupStrokes: b,
    getStrokeGeomCacheKey: S,
    shortestWrappedDelta: H,
    getStrokeGroupCenterUv: v,
    applyStrokeGroupOffset: L,
    applyStrokeGroupTransform: M,
    applyRasterObjectOffset: P,
    applyRasterObjectTransform: A,
    getNextStickerZIndex: B,
    isExternalSticker: re,
    isStickerHidden: me,
    getStickerDisplayAlpha: j,
    inverseTransformErpPointAround: de,
    getRasterObjectCenterUv: _e,
    getRasterObjectTransformedErpPoints: ke,
    getRasterObjectGeomCacheKey: ue,
    getSceneItemGeomCacheKey: ve,
    normalizeDisplayZIndices: Ne
  };
}
function pN(e) {
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
  let c, d, u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee;
  function I() {
    const h = String(t.selectedId || "");
    if (!h) return null;
    const R = k(h);
    if (R) return R;
    const N = U(h);
    return N || (o ? _().find((y) => String((y == null ? void 0 : y.id) || "") === h) || null : p().find((y) => String((y == null ? void 0 : y.id) || "") === h) || null);
  }
  function X() {
    const h = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], R = [], N = /* @__PURE__ */ new Set();
    return h.forEach((y) => {
      const D = String(y || "").trim();
      if (!D || N.has(D)) return;
      N.add(D);
      const le = D === String(t.selectedId || "") ? I() : k(D) || U(D) || (o ? _().find((ge) => String((ge == null ? void 0 : ge.id) || "") === D) : p().find((ge) => String((ge == null ? void 0 : ge.id) || "") === D));
      le && R.push(le);
    }), R;
  }
  function se(h = null) {
    const R = Array.isArray(h) ? h : X();
    if (!R || R.length < 2) return null;
    const N = R.map((ye) => oe(ye)).filter((ye) => (ye == null ? void 0 : ye.visible) && Array.isArray(ye.corners) && ye.corners.length);
    if (!N.length) return null;
    const y = N.flatMap((ye) => ye.corners.map((Me) => Number((Me == null ? void 0 : Me.x) || 0))), D = N.flatMap((ye) => ye.corners.map((Me) => Number((Me == null ? void 0 : Me.y) || 0))), le = Math.min(...y), ge = Math.max(...y), he = Math.min(...D), ne = Math.max(...D);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (le + ge) * 0.5, y: (he + ne) * 0.5 },
      corners: [
        { x: le, y: he },
        { x: ge, y: he },
        { x: ge, y: ne },
        { x: le, y: ne }
      ],
      edgeMidpoints: [
        { edge: "top", x: (le + ge) * 0.5, y: he, a: { x: le, y: he }, b: { x: ge, y: he } },
        { edge: "right", x: ge, y: (he + ne) * 0.5, a: { x: ge, y: he }, b: { x: ge, y: ne } },
        { edge: "bottom", x: (le + ge) * 0.5, y: ne, a: { x: ge, y: ne }, b: { x: le, y: ne } },
        { edge: "left", x: le, y: (he + ne) * 0.5, a: { x: le, y: ne }, b: { x: le, y: he } }
      ],
      rotateStemBase: { x: (le + ge) * 0.5, y: he },
      rotateHandle: { x: (le + ge) * 0.5, y: he - 30 }
    };
  }
  function be(h) {
    const R = String((h == null ? void 0 : h.id) || "").trim();
    return !!R && Array.isArray(t.selectedIds) && t.selectedIds.includes(R);
  }
  function we() {
    const h = I();
    return h ? G(h) || ce(h) ? "stroke" : fe(h) ? "frame" : "image" : null;
  }
  function C(h) {
    if (!h || typeof h != "object") return !1;
    if (G(h)) {
      const R = String(h.actionGroupId || h.id || "").trim(), N = E().find((y) => String((y == null ? void 0 : y.actionGroupId) || (y == null ? void 0 : y.id) || "").trim() === R);
      return (N == null ? void 0 : N.locked) === !0;
    }
    if (ce(h)) {
      const R = x(h.rasterObjectId || h.id || ""), N = z().find((y) => String((y == null ? void 0 : y.id) || "").trim() === R);
      return (N == null ? void 0 : N.locked) === !0;
    }
    return h.locked === !0;
  }
  function ae(h = null) {
    const R = Array.isArray(h) ? h : X();
    return R.length > 0 && R.every((N) => C(N));
  }
  function b(h, R) {
    const N = R === !0;
    if (!h || typeof h != "object") return !1;
    if (G(h)) {
      const y = String(h.actionGroupId || h.id || "").trim(), D = E().find((le) => String((le == null ? void 0 : le.actionGroupId) || (le == null ? void 0 : le.id) || "").trim() === y);
      return !D || D.locked === N ? !1 : (D.locked = N, !0);
    }
    if (ce(h)) {
      const y = x(h.rasterObjectId || h.id || ""), D = z().find((le) => String((le == null ? void 0 : le.id) || "").trim() === y);
      return !D || D.locked === N ? !1 : (D.locked = N, !0);
    }
    return h.locked === N ? !1 : (h.locked = N, !0);
  }
  function S() {
    if (r) return;
    const h = X();
    if (!h.length) return;
    const R = !ae(h);
    let N = !1;
    h.forEach((y) => {
      b(y, R) && (N = !0);
    }), N && (Z(), d(), Se(), ee(), V());
  }
  function $(h) {
    de(), s.selection = null, t.selectedId = (h == null ? void 0 : h.id) || null, t.selectedIds = h != null && h.id ? [h.id] : [], h && J(h) ? a.active.selected_sticker_id = h.id || null : a.active.selected_sticker_id = null, h && fe(h) ? a.active.selected_shot_id = h.id || null : h ? fe(h) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function H(h, R = null) {
    const N = [], y = /* @__PURE__ */ new Set();
    (Array.isArray(h) ? h : []).forEach((ge) => {
      const he = String((ge == null ? void 0 : ge.id) || "").trim();
      !he || y.has(he) || (y.add(he), N.push(he));
    }), t.selectedIds = N, de(), s.selection = null;
    const D = String(R || "").trim();
    t.selectedId = D && N.includes(D) ? D : N[N.length - 1] || null;
    const le = I();
    a.active.selected_sticker_id = le && J(le) && le.id || null, le && fe(le) ? a.active.selected_shot_id = le.id || null : N.length || (a.active.selected_shot_id = null);
  }
  function v() {
    const h = (Array.isArray(a.shots) ? a.shots : []).map((N, y) => ({
      kind: "frame",
      item: N,
      label: String((N == null ? void 0 : N.label) || `Frame ${y + 1}`)
    })), R = f().map((N, y) => {
      var le, ge;
      const D = K(N) ? String(N.id || xd) : String(((ge = (le = a.assets) == null ? void 0 : le[N.asset_id]) == null ? void 0 : ge.name) || N.asset_id || N.id || `Image ${y + 1}`);
      return {
        kind: "image",
        item: N,
        label: D
      };
    });
    return [...h, ...R];
  }
  function w(h) {
    return h === "frame" ? Ge.camera : h === "stroke" ? Ge.paintbrush_vertical_tool : Ge.image;
  }
  function L(h) {
    return !h || !h.item ? {
      label: String((h == null ? void 0 : h.label) || ""),
      icon: null
    } : {
      label: String(h.label || ""),
      icon: w(h.kind)
    };
  }
  function M() {
    if (r) return;
    const h = I();
    !h || !K(h) || (h.visible = F(h), ue(), Q(), Z(), d(), ee(), Se(), V());
  }
  function P() {
    if (r || l !== "stickers") return;
    const h = I();
    if (!h || !K(h)) return;
    const R = h.initial_pose;
    if (!R || typeof R != "object") return;
    h.yaw_deg = Number(R.yaw_deg ?? h.yaw_deg ?? 0), h.pitch_deg = Number(R.pitch_deg ?? h.pitch_deg ?? 0), h.hFOV_deg = Number(R.hFOV_deg ?? h.hFOV_deg ?? 30);
    const N = W(io, () => {
      V();
    });
    N && (N.complete || N.naturalWidth || N.width) ? h.vFOV_deg = u(
      Number(R.hFOV_deg ?? h.hFOV_deg ?? 30),
      Number(N.naturalWidth || N.width || 1),
      Number(N.naturalHeight || N.height || 1)
    ) : h.vFOV_deg = Number(R.vFOV_deg ?? h.vFOV_deg ?? 30), h.rot_deg = Number(R.rot_deg ?? h.rot_deg ?? 0), Z(), d(), ee(), Se(), V();
  }
  function A(h) {
    if (!h || !K(h)) return null;
    const R = h.initial_pose;
    if (!R || typeof R != "object") return null;
    const N = {
      yaw_deg: Number(R.yaw_deg ?? h.yaw_deg ?? 0),
      pitch_deg: Number(R.pitch_deg ?? h.pitch_deg ?? 0),
      hFOV_deg: Number(R.hFOV_deg ?? h.hFOV_deg ?? 30),
      vFOV_deg: Number(R.vFOV_deg ?? h.vFOV_deg ?? 30),
      rot_deg: Number(R.rot_deg ?? h.rot_deg ?? 0)
    }, y = W(io, () => {
      V();
    });
    return y && (y.complete || y.naturalWidth || y.width) && (N.vFOV_deg = u(
      N.hFOV_deg,
      Number(y.naturalWidth || y.width || 1),
      Number(y.naturalHeight || y.height || 1)
    )), N;
  }
  function B() {
    const h = I();
    if (!h || !K(h)) return !1;
    const R = A(h);
    if (!R) return !1;
    const N = (y, D) => Math.abs(Number(y || 0) - Number(D || 0)) <= 1e-4;
    return !(N(h.yaw_deg, R.yaw_deg) && N(h.pitch_deg, R.pitch_deg) && N(h.hFOV_deg, R.hFOV_deg) && N(h.vFOV_deg, R.vFOV_deg) && N(h.rot_deg, R.rot_deg));
  }
  function re(h = {}) {
    const N = h.preservePanelValues !== !1 ? T(I()) : null;
    N && (t.panelLastValues = {
      yaw_deg: Number(N.yaw_deg || 0),
      pitch_deg: Number(N.pitch_deg || 0),
      hFOV_deg: Number(N.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(N.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(N.rot_deg || 0),
      roll_deg: Number(N.roll_deg || 0),
      aspect_id: Tr(N)
    }), t.selectedId = null, t.selectedIds = [], de(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function me() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((h) => h.id === t.worldSelectedId && h.placement === "world") || null;
  }
  function j(h) {
    $(null), t.worldSelectedId = h, n.backgroundDirty = !0;
  }
  function de() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function _e(h) {
    return !!h && !r && !h.locked;
  }
  function ke() {
    if (l !== "cutout") return;
    const h = g();
    h && (t.selectedId = String(h.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function ue() {
    var R;
    const h = I();
    (O(h) && !pe(h) || t.selectedId === kl && te() && !c() || we() === "stroke" && !ie()) && $(null), ((R = me()) == null ? void 0 : R.visible) === !1 && de();
  }
  function ve() {
    if (r) return;
    const h = X();
    if (!I() || h.length === 0 || h.some((he) => C(he))) return;
    Y();
    const N = m(), y = new Set(h.map((he) => J(he) ? `sticker:${String(he.id || "")}` : ce(he) ? `rasterObject:${x(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), D = [], le = [];
    if (N.forEach((he) => {
      var ye, Me;
      const ne = he.type === "sticker" ? `sticker:${String(((ye = he.item) == null ? void 0 : ye.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((Me = he.item) == null ? void 0 : Me.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      y.has(ne) ? D.push(he) : le.push(he);
    }), !D.length || D[D.length - 1] === N[N.length - 1]) return;
    [...le, ...D].forEach((he, ne) => {
      he.type === "sticker" && he.item && (he.item.z_index = ne), he.type === "strokeGroup" && he.item && (he.item.z_index = ne), he.type === "rasterObject" && he.item && (he.item.z_index = ne);
    }), Q(), Z(), d(), Se(), V();
  }
  function Ne() {
    if (r) return;
    const h = X();
    if (!I() || h.length === 0 || h.some((he) => C(he))) return;
    Y();
    const N = m(), y = new Set(h.map((he) => J(he) ? `sticker:${String(he.id || "")}` : ce(he) ? `rasterObject:${x(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), D = [], le = [];
    if (N.forEach((he) => {
      var ye, Me;
      const ne = he.type === "sticker" ? `sticker:${String(((ye = he.item) == null ? void 0 : ye.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((Me = he.item) == null ? void 0 : Me.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      y.has(ne) ? D.push(he) : le.push(he);
    }), !D.length || D[0] === N[0]) return;
    [...D, ...le].forEach((he, ne) => {
      he.type === "sticker" && he.item && (he.item.z_index = ne), he.type === "strokeGroup" && he.item && (he.item.z_index = ne), he.type === "rasterObject" && he.item && (he.item.z_index = ne);
    }), Q(), Z(), d(), Se(), V();
  }
  return {
    connect(h) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: g,
        getCutoutSelectableItems: _,
        getDisplayListObjects: m,
        getList: p,
        getPaintingGroupList: E,
        getRasterObjectItem: U,
        getRasterObjectList: z,
        getStickerUiImage: W,
        getStrokeGroupItem: k,
        hasCamera: te,
        isExternalSticker: K,
        isRasterObjectItem: ce,
        isSceneSticker: O,
        isShotItem: fe,
        isStickerHidden: F,
        isStickerItem: J,
        isStrokeGroupItem: G,
        markObjectVisualsDirty: Q,
        normalizeDisplayZIndices: Y,
        objectGeom: oe,
        paintingShown: ie,
        parseRasterObjectSelectionId: x,
        poseOf: T,
        pushHistory: Z,
        requestDraw: V,
        sceneStickerShown: pe,
        updateSelectionMenu: Se,
        updateSidePanel: ee
      } = h);
    },
    getSelected: I,
    getSelectedItems: X,
    getMultiSelectionGeom: se,
    isItemSelected: be,
    getSelectedKind: we,
    isItemLocked: C,
    areAllSelectedItemsLocked: ae,
    toggleSelectedLock: S,
    setSelectedItem: $,
    setSelectedItems: H,
    getCutoutInspectorItems: v,
    getSelectionItemIcon: w,
    getSelectionItemLabelData: L,
    toggleSelectedExternalStickerVisibility: M,
    restoreSelectedToInitialPose: P,
    canRestoreSelectedToInitial: B,
    clearSelection: re,
    selectedWorldSticker: me,
    selectWorldSticker: j,
    clearWorldSelection: de,
    worldStickerEditable: _e,
    applyInitialCutoutFocus: ke,
    releaseHiddenSelection: ue,
    bringSelectedToFront: ve,
    sendSelectedToBack: Ne
  };
}
function hN(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, c, d, u, f = { key: [], projection: null };
  function g() {
    return o && a() && i.camera.projection === "erp";
  }
  function _() {
    const X = ce({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !X || X.length !== 4 ? !1 : X[0].y >= X[3].y;
  }
  function m() {
    return wm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function p() {
    const I = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return I.some((X, se) => X !== f.key[se]) && (f = { key: I, projection: km(m(), r.width, r.height) }), f.projection;
  }
  function E(I) {
    const X = p().project(I);
    return X.z > 1e-4 ? X : null;
  }
  function U(I, X) {
    return p().ray(I, X);
  }
  function z() {
    const I = r.width, X = r.height, se = 2;
    if (I / Math.max(X, 1) >= se) {
      const b = X, S = b * se;
      return { x: (I - S) * 0.5, y: 0, w: S, h: b };
    }
    const we = I, C = we / se;
    return { x: 0, y: (X - C) * 0.5, w: we, h: C };
  }
  function W(I) {
    return {
      lon: Math.atan2(I.x, I.z),
      lat: Math.asin(Ee(I.y, -1, 1))
    };
  }
  function k(I, X = null) {
    const { lon: se, lat: be } = W(I), we = z();
    let C = we.x + (se / (2 * Math.PI) + 0.5) * we.w;
    const ae = we.y + (0.5 - be / Math.PI) * we.h;
    if (X !== null) {
      for (; C - X > we.w / 2; ) C -= we.w;
      for (; C - X < -we.w / 2; ) C += we.w;
    }
    return { x: C, y: ae, z: 1 };
  }
  function te(I) {
    const X = c(I), se = so(
      Number(X.yaw_deg || 0),
      Number(X.pitch_deg || 0),
      Number(X.rot_deg || X.roll_deg || 0)
    ), be = Math.tan(Ee(Number(X.hFOV_deg || 20), 0.1, 179) * 0.5 * br), we = Math.tan(Ee(Number(X.vFOV_deg || 20), 0.1, 179) * 0.5 * br);
    return {
      centerDir: se.fwd,
      right: se.right,
      up: se.up,
      tanX: be,
      tanY: we
    };
  }
  function K(I, X, se) {
    return RP(ap(ap(I.centerDir, sp(I.right, X)), sp(I.up, se)));
  }
  function ce(I) {
    const X = te(I);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: be, v: we }) => K(X, be * X.tanX, we * X.tanY));
  }
  function O(I, X, se) {
    const be = te(I), we = (X * 2 - 1) * be.tanX, C = (1 - se * 2) * be.tanY;
    return K(be, we, C);
  }
  function fe(I) {
    const X = t.width / Math.max(1, r.width), se = t.height / Math.max(1, r.height);
    return { x: I.x * X, y: I.y * se, w: I.w * X, h: I.h * se };
  }
  function F(I, X = null, se = null, be = null) {
    if (n.mode === "frame") {
      const we = X || s();
      if (!we) return [];
      const C = se || l(we);
      return Z(I, we, C);
    }
    return ie(I, be);
  }
  function J(I, X = null, se = null, be = null, we = null) {
    if (!I) return null;
    if (n.mode === "unwrap") {
      const ae = ie([I], we);
      return ae[0] ? { x: ae[0].x, y: ae[0].y, z: 1 } : null;
    }
    const C = Q(I);
    return C ? d(C, X, se, be) : null;
  }
  function G(I, X) {
    if (!I || !X) return null;
    const se = Number(X.x || 0), be = Number(X.y || 0);
    return O(I, se, be);
  }
  function Q(I) {
    if (!I) return null;
    const X = (Number(I.u || 0) - 0.5) * (2 * Math.PI), se = (0.5 - Number(I.v || 0)) * Math.PI, be = Math.cos(se);
    return Il(be * Math.sin(X), Math.sin(se), be * Math.cos(X));
  }
  function Y(I, X) {
    if (!I || !X) return null;
    const se = te(I), be = gc(X, se.centerDir);
    if (!Number.isFinite(be) || be <= 1e-6) return null;
    const we = gc(X, se.right) / be, C = gc(X, se.up) / be;
    return {
      x: (we / Math.max(1e-6, se.tanX) + 1) * 0.5,
      y: (1 - C / Math.max(1e-6, se.tanY)) * 0.5
    };
  }
  function oe(I) {
    if (!Array.isArray(I) || I.length < 3) return [];
    if (n.mode === "unwrap") {
      const se = z();
      return I.map((be) => ({
        x: se.x + Number(be.u || 0) * se.w,
        y: se.y + Number(be.v || 0) * se.h
      }));
    }
    const X = I.map((se) => E(Q(se))).filter(Boolean);
    return X.every((se) => Number(se.z || 0) > 0) ? X.map((se) => ({ x: Number(se.x || 0), y: Number(se.y || 0) })) : [];
  }
  function ie(I, X = null) {
    if (!Array.isArray(I) || I.length < 1) return [];
    if (n.mode === "unwrap") {
      const be = z();
      return I.map((we) => {
        const C = (Number(we.u || 0) % 1 + 1) % 1, ae = X == null ? C : Number(X || 0) + u(C, X);
        return {
          x: be.x + ae * be.w,
          y: be.y + Number(we.v || 0) * be.h
        };
      });
    }
    const se = I.map((be) => E(Q(be))).filter(Boolean);
    return se.every((be) => Number(be.z || 0) > 0) ? se.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function x(I, X = 160) {
    if (!Array.isArray(I) || I.length < 3) return !1;
    for (let se = 0; se < I.length; se += 1) {
      const be = I[se], we = I[(se + 1) % I.length];
      if (!be || !we || !Number.isFinite(be.x) || !Number.isFinite(be.y) || !Number.isFinite(we.x) || !Number.isFinite(we.y) || Math.hypot(Number(we.x) - Number(be.x), Number(we.y) - Number(be.y)) > X) return !1;
    }
    return !0;
  }
  function T(I, X, se) {
    if (!Array.isArray(I) || I.length < 3 || !X || !se) return [];
    const be = [];
    for (const we of I) {
      const C = Q(we), ae = Y(X, C);
      if (!ae) return [];
      be.push({
        x: Number(se.x || 0) + Number(ae.x || 0) * Number(se.w || 0),
        y: Number(se.y || 0) + Number(ae.y || 0) * Number(se.h || 0)
      });
    }
    return x(be, Math.max(80, Math.max(se.w, se.h) * 0.75)) ? be : [];
  }
  function Z(I, X, se) {
    if (!Array.isArray(I) || I.length < 1 || !X || !se) return [];
    const be = [];
    for (const we of I) {
      const C = Q(we), ae = Y(X, C);
      ae && be.push({
        x: Number(se.x || 0) + Number(ae.x || 0) * Number(se.w || 0),
        y: Number(se.y || 0) + Number(ae.y || 0) * Number(se.h || 0)
      });
    }
    return be;
  }
  function V(I) {
    const X = r.getBoundingClientRect();
    return {
      x: (I.clientX - X.left) / X.width * r.width,
      y: (I.clientY - X.top) / X.height * r.height
    };
  }
  function pe(I) {
    const X = r.getBoundingClientRect();
    return {
      x: Number(I.clientX) - Number(X.left || 0),
      y: Number(I.clientY) - Number(X.top || 0)
    };
  }
  function Se(I, X = performance.now()) {
    if (n.mode === "unwrap") {
      const C = z(), ae = (I.x - C.x) / Math.max(1, C.w), b = (I.y - C.y) / Math.max(1, C.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (ae % 1 + 1) % 1,
        v: Ee(b, 0, 1),
        t: Number(X || 0)
      };
    }
    const se = U(I.x, I.y), { lon: be, lat: we } = W(se);
    return {
      targetKind: "ERP_GLOBAL",
      u: (be / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - we / Math.PI, 0, 1),
      t: Number(X || 0)
    };
  }
  function ee(I, X, se = performance.now()) {
    const be = l(X);
    if (!be) return null;
    const we = {
      x: (Number(I.x) - be.x) / Math.max(1, be.w),
      y: (Number(I.y) - be.y) / Math.max(1, be.h)
    };
    if (we.x < 0 || we.x > 1 || we.y < 0 || we.y > 1) return null;
    const C = G(X, we);
    if (!C) return null;
    const { lon: ae, lat: b } = W(C);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ae / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - b / Math.PI, 0, 1),
      t: Number(se || 0)
    };
  }
  return {
    connect(I) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = I);
    },
    isErpCamera: g,
    currentViewCamera: m,
    currentViewProjection: p,
    projectDir: E,
    screenToWorldDir: U,
    getUnwrapRect: z,
    projectDirUnwrap: k,
    getStickerFrame: te,
    stickerDirFromFrame: K,
    stickerCornersDir: ce,
    stickerSampleDir: O,
    stickerCornerOrderSanity: _,
    projectEditorPoints: F,
    projectErpPointToEditor: J,
    frameLocalPointToWorldDir: G,
    erpPointToWorldDir: Q,
    worldDirToFrameLocalPoint: Y,
    projectLassoPointsToCurrentView: oe,
    projectErpLassoPointsToFrameRect: T,
    screenPos: V,
    screenPosCss: pe,
    screenPosToErpPoint: Se,
    screenPosToFrameAsErpPoint: ee,
    deviceRect: fe
  };
}
function mN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, c, d, u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z;
  function V(C, ae) {
    const b = String(C.actionGroupId || C.id || "").trim(), S = z(b, C.layerKind), $ = s(b, C.layerKind, S), H = ($ == null ? void 0 : $.centerUv) || U(b, C.layerKind, S), v = n.mode === "unwrap" ? Number((H == null ? void 0 : H.u) || 0) : null, w = [], L = n.mode === "frame" ? l() : null, M = L ? u(L) : null;
    for (const ue of S) {
      const ve = (ue == null ? void 0 : ue.geometry) || null, Ne = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], h = Q(Ne, L, M, v).filter((y) => Number.isFinite(y == null ? void 0 : y.x) && Number.isFinite(y == null ? void 0 : y.y));
      if (!h.length) continue;
      const R = c(String((ue == null ? void 0 : ue.toolKind) || "pen")), N = In[R] || In[Ir];
      w.push({
        points: h,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ue == null ? void 0 : ue.size) || 10) * Math.max(0.1, Number((N == null ? void 0 : N.sizeScale) ?? 1)) + 10),
        layerKind: String((ue == null ? void 0 : ue.layerKind) || C.layerKind || "paint")
      });
    }
    const P = Y(H, null, L, M, v);
    if (!P) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ae, ue), ue;
    }
    const B = d($).map((ue) => Y(ue, P.x, L, M, v)).filter((ue) => Number.isFinite(ue == null ? void 0 : ue.x) && Number.isFinite(ue == null ? void 0 : ue.y)).map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) }));
    if (B.length < 4) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ae, ue), ue;
    }
    const re = (ue, ve) => ({
      x: (Number((ue == null ? void 0 : ue.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((ue == null ? void 0 : ue.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: ue,
      b: ve
    }), me = re(B[0], B[1]), j = re(B[1], B[2]), de = re(B[2], B[3]), _e = re(B[3], B[0]), ke = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: B,
      edgeMidpoints: [
        { edge: "top", ...me },
        { edge: "right", ...j },
        { edge: "bottom", ...de },
        { edge: "left", ..._e }
      ],
      rotateStemBase: { x: me.x, y: me.y },
      rotateHandle: { x: me.x, y: me.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return n._strokeGeomCache.set(ae, ke), ke;
  }
  function pe(C, ae) {
    const b = n.mode === "frame" ? l() : null, S = b ? u(b) : null, $ = f(C), H = n.mode === "unwrap" ? Number(($ == null ? void 0 : $.u) || 0) : null, v = Y($, null, b, S, H), L = _(C).map((B) => Y(B, (v == null ? void 0 : v.x) ?? null, b, S, H)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y));
    if (!Array.isArray(L) || L.length < 4) {
      const B = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(ae, B), B;
    }
    const M = L.slice(0, 4).map((B) => ({ x: Number((B == null ? void 0 : B.x) || 0), y: Number((B == null ? void 0 : B.y) || 0) })), A = {
      kind: "rasterObject",
      center: {
        x: M.reduce((B, re) => B + Number(re.x || 0), 0) / M.length,
        y: M.reduce((B, re) => B + Number(re.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return n._strokeGeomCache.set(ae, A), A;
  }
  function Se(C, ae = null, b = null, S = null, $ = {}) {
    if (n.mode === "frame") {
      const P = b || l(), A = S || u(P);
      if (!P || !A) return null;
      const B = P ? Z(P, C) : null;
      return B ? {
        x: Number(A.x || 0) + Number(B.x || 0) * Number(A.w || 0),
        y: Number(A.y || 0) + Number(B.y || 0) * Number(A.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return G(C, ae);
    const H = 1e-4, v = o().project(C, H);
    if (!Number.isFinite(v.z) || v.z <= H && !($ != null && $.clipBehind)) return null;
    const w = r.width, L = r.height, M = Math.max(w, L) * 2;
    return {
      x: Ee(v.x, -M, w + M),
      y: Ee(v.y, -M, L + M),
      z: Math.max(v.z, H),
      rawZ: v.z,
      clipped: v.z <= H
    };
  }
  function ee(C, ae = []) {
    if (n.mode !== "pano" || ce(C)) return 1;
    const b = ae.map((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z))).filter((S) => Number.isFinite(S));
    return b.length ? DP(0.035, 0.2, Math.min(...b)) : 1;
  }
  function I(C) {
    if (te(C) && !oe(C)) return { visible: !1 };
    const ae = F(C), b = En(Number(ae.yaw_deg || 0), Number(ae.pitch_deg || 0)), S = n.mode === "frame" ? l() : null, $ = S ? u(S) : null, H = n.mode === "pano" && (ce(C) || K(C)), v = H ? { clipBehind: !0 } : null, w = Se(b, null, S, $, v);
    if (!w) return { visible: !1 };
    const L = p(C), P = ie(C).map((D) => Se(D, w.x, S, $, v)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (P.length < 4) return { visible: !1 };
    const A = x(L, 0, L.tanY), B = x(L, 0, L.tanY + Math.max(L.tanY * 0.43, 0.053)), re = Se(A, w.x, S, $, v);
    if (!re) return { visible: !1 };
    const me = Se(B, (re == null ? void 0 : re.x) ?? w.x, S, $, v), j = ((me == null ? void 0 : me.x) ?? re.x) - re.x, de = ((me == null ? void 0 : me.y) ?? re.y) - re.y, _e = Math.hypot(j, de) || 1, ke = {
      x: re.x + j / _e * 30,
      y: re.y + de / _e * 30
    }, ue = Se(x(L, 0, L.tanY), w.x, S, $, v), ve = Se(x(L, L.tanX, 0), w.x, S, $, v), Ne = Se(x(L, 0, -L.tanY), w.x, S, $, v), h = Se(x(L, -L.tanX, 0), w.x, S, $, v);
    if (!ue || !ve || !Ne || !h) return { visible: !1 };
    const R = [
      w,
      ...P,
      re,
      me,
      ue,
      ve,
      Ne,
      h
    ];
    if (H && !R.some((D) => Number((D == null ? void 0 : D.rawZ) ?? (D == null ? void 0 : D.z)) > 1e-4)) return { visible: !1 };
    const N = ee(C, R), y = [
      {
        edge: "top",
        x: ue.x,
        y: ue.y,
        a: { x: P[0].x, y: P[0].y },
        b: { x: P[1].x, y: P[1].y }
      },
      {
        edge: "right",
        x: ve.x,
        y: ve.y,
        a: { x: P[1].x, y: P[1].y },
        b: { x: P[2].x, y: P[2].y }
      },
      {
        edge: "bottom",
        x: Ne.x,
        y: Ne.y,
        a: { x: P[2].x, y: P[2].y },
        b: { x: P[3].x, y: P[3].y }
      },
      {
        edge: "left",
        x: h.x,
        y: h.y,
        a: { x: P[3].x, y: P[3].y },
        b: { x: P[0].x, y: P[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: P.map((D) => ({ x: D.x, y: D.y })),
      edgeMidpoints: y,
      rotateStemBase: { x: re.x, y: re.y },
      rotateHandle: ke,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: N,
      visible: !0
    };
  }
  function X(C) {
    if (t && K(C) && W()) return { visible: !1 };
    if (!fe() && (O(C) || k(C))) return { visible: !1 };
    if (O(C)) {
      const $ = String(C.actionGroupId || C.id || "").trim(), H = E($, C.layerKind), v = n._strokeGeomCache.get(H);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), V(C, H));
    }
    if (k(C)) {
      const $ = g(C), H = n._strokeGeomCache.get($);
      return H || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), pe(C, $));
    }
    const ae = m(C), b = n._strokeGeomCache.get(ae);
    if (b) return b;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const S = I(C);
    return n._strokeGeomCache.set(ae, S), S;
  }
  function se(C, ae, b, S = null) {
    const $ = [];
    for (let H = 0; H <= b; H += 1) {
      const v = H / b;
      let w = 0, L = 0;
      ae === 0 ? (w = v, L = 0) : ae === 1 ? (w = 1, L = v) : ae === 2 ? (w = 1 - v, L = 1) : (w = 0, L = 1 - v);
      const M = T(C, w, L), P = n.mode === "unwrap" ? G(M, S) : J(M);
      P && $.push(P);
    }
    return $;
  }
  function be() {
    const C = [...Array.isArray(i.shots) ? i.shots : []], ae = [...a()].sort((b, S) => Number(b.z_index || 0) - Number(S.z_index || 0));
    return [...C, ...ae];
  }
  function we() {
    const C = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((b, S) => Number(S.z_index || 0) - Number(b.z_index || 0)), ...C];
  }
  return {
    connect(C) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: g,
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: m,
        getStickerFrame: p,
        getStrokeGeomCacheKey: E,
        getStrokeGroupCenterUv: U,
        getStrokeGroupStrokes: z,
        isFreeSpaceView: W,
        isRasterObjectItem: k,
        isSceneSticker: te,
        isShotItem: K,
        isStickerItem: ce,
        isStrokeGroupItem: O,
        paintingShown: fe,
        poseOf: F,
        projectDir: J,
        projectDirUnwrap: G,
        projectEditorPoints: Q,
        projectErpPointToEditor: Y,
        sceneStickerShown: oe,
        stickerCornersDir: ie,
        stickerDirFromFrame: x,
        stickerSampleDir: T,
        worldDirToFrameLocalPoint: Z
      } = C);
    },
    projectSceneItemDir: Se,
    objectGeom: X,
    sampleStickerEdge: se,
    getCutoutSelectableItemsForDisplay: be,
    getCutoutSelectableItemsForHit: we
  };
}
const ns = /* @__PURE__ */ new Map();
function gN(e) {
  const {
    api: t,
    cutoutV2: r,
    editor: n,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: a,
    rasterImageCache: s,
    state: l
  } = e;
  let c, d, u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J;
  function G(v = n.interaction) {
    const w = String((v == null ? void 0 : v.kind) || "");
    if (w === "paint_stroke" || w === "paint_lasso_fill" || w === "move_stroke_group" || w === "scale_stroke_group" || w === "rotate_stroke_group" || w === "move_raster_object" || w === "scale_raster_object") return !0;
    if (w === "move_multi") {
      const L = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, M = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return L || M;
    }
    return !1;
  }
  function Q() {
    var w, L, M, P;
    let v = null;
    try {
      const A = p(), B = ((P = (M = (L = (w = n.paintEngine) == null ? void 0 : w.getErpTarget) == null ? void 0 : L.call(w, A)) == null ? void 0 : M.displayPaint) == null ? void 0 : P.canvas) || null;
      B && (v = {
        source: B,
        revision: `${E()}:${Y()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function Y() {
    var P, A, B, re, me, j, de;
    const v = n.interaction, w = String((v == null ? void 0 : v.kind) || "");
    if (!G(v)) return "";
    if (w === "paint_stroke" || w === "paint_lasso_fill") {
      const _e = ((P = v == null ? void 0 : v.stroke) == null ? void 0 : P.geometry) || null, ke = String(((A = v == null ? void 0 : v.stroke) == null ? void 0 : A.layerKind) || ""), ue = ((B = _e == null ? void 0 : _e.rawPoints) == null ? void 0 : B.length) ?? ((re = _e == null ? void 0 : _e.points) == null ? void 0 : re.length) ?? 0, ve = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${ke || "paint"}_${w}_live${ve}_${ue}_${n.livePaintInteractionRevision}`;
    }
    const L = String(((me = v == null ? void 0 : v.item) == null ? void 0 : me.actionGroupId) || ""), M = String(((j = v == null ? void 0 : v.item) == null ? void 0 : j.rasterObjectId) || ((de = v == null ? void 0 : v.item) == null ? void 0 : de.id) || "");
    return `_${w}_${L || M || "active"}_${n.livePaintInteractionRevision}`;
  }
  function oe(v, w = null) {
    const L = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!L) return null;
    const M = s.get(L);
    if (M)
      return M.complete || M.width || M.naturalWidth, M;
    const P = new Image();
    return P.onload = () => {
      typeof w == "function" && w();
    }, P.src = L, s.set(L, P), P;
  }
  function ie(v) {
    const w = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!w) return null;
    const L = a.get(w);
    if (L) return L.ready ? L : null;
    const M = oe(v, () => {
      const de = a.get(w);
      de && (de.ready = !1), fe({ localOnly: !0 });
    });
    if (!M || !(M.complete || M.width || M.naturalWidth)) return null;
    const P = Number(M.naturalWidth || M.width || 0), A = Number(M.naturalHeight || M.height || 0);
    if (P < 1 || A < 1) return null;
    const B = rn({ label: "editor.image-pixels" });
    B.width = P, B.height = A;
    const re = B.getContext("2d", { willReadFrequently: !0 });
    if (!re) return null;
    re.clearRect(0, 0, P, A), re.drawImage(M, 0, 0, P, A);
    const me = re.getImageData(0, 0, P, A).data, j = { canvas: B, width: P, height: A, alpha: me, ready: !0 };
    return a.set(w, j), j;
  }
  function x(v, w) {
    if (!v || !w) return null;
    const L = (v == null ? void 0 : v.bbox) || null;
    if (!L) return null;
    const M = (v == null ? void 0 : v.transform) || {}, P = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, A = {
      u: ((Number(w.u || 0) - Number(M.du || 0)) % 1 + 1) % 1,
      v: Number(w.v || 0) - Number(M.dv || 0)
    }, B = W(
      A,
      P,
      Number(M.scale || 1),
      Number(M.rot_deg || 0)
    ), re = Number(L.u1 || 0) - Number(L.u0 || 0), me = Number(L.v1 || 0) - Number(L.v0 || 0);
    if (!(re > 1e-6) || !(me > 1e-6)) return null;
    const j = J(Number(B.u || 0), Number(L.u0 || 0)) / re, de = (Number(B.v || 0) - Number(L.v0 || 0)) / me;
    if (j < 0 || j > 1 || de < 0 || de > 1) return 0;
    const _e = ie(v);
    if (!_e) return null;
    const ke = Ee(Math.floor(j * _e.width), 0, _e.width - 1), ue = Ee(Math.floor(de * _e.height), 0, _e.height - 1);
    return Number(_e.alpha[(ue * _e.width + ke) * 4 + 3] || 0);
  }
  function T(v, w, L, M = null) {
    if (!(w != null && w.visible) || !Br(L, w.corners)) return !1;
    const P = M || F(L, performance.now()), A = x(v, P);
    return A === null ? !0 : A > 8;
  }
  function Z() {
    var M, P, A, B, re, me, j, de;
    const v = ((P = (M = n.paintEngine) == null ? void 0 : M.getErpTarget) == null ? void 0 : P.call(M, p(!1))) || null, w = Math.max(1, Number(((A = v == null ? void 0 : v.descriptor) == null ? void 0 : A.width) || ((re = (B = v == null ? void 0 : v.displayPaint) == null ? void 0 : B.canvas) == null ? void 0 : re.width) || 2048)), L = Math.max(1, Number(((me = v == null ? void 0 : v.descriptor) == null ? void 0 : me.height) || ((de = (j = v == null ? void 0 : v.displayPaint) == null ? void 0 : j.canvas) == null ? void 0 : de.height) || 1024));
    return { width: w, height: L };
  }
  function V() {
    var ue, ve, Ne;
    const v = n.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const w = (v == null ? void 0 : v.stroke) || null;
    if (!w || String((w == null ? void 0 : w.layerKind) || "") !== "paint" || String((w == null ? void 0 : w.toolKind) || "") !== "eraser") return null;
    const L = f(), M = `${Y()}:${L.width}:${L.height}`;
    if (((ue = n._activePaintEraserPreviewInfo) == null ? void 0 : ue.cacheKey) === M)
      return n._activePaintEraserPreviewInfo.value || null;
    const P = dn(w), A = (P == null ? void 0 : P.geometry) || null;
    if (A && String(A.geometryKind || "") !== "lasso_fill") {
      const h = Array.isArray(A.rawPoints) && A.rawPoints.length ? A.rawPoints : Array.isArray(A.points) ? A.points : [];
      A.processedPoints = K(h, P.targetSpace, !0);
    }
    const B = d(L.width, L.height, { readback: !0 });
    if (!ce(B, P, { w: L.width, h: L.height })) return null;
    const re = ((Ne = (ve = B.ctx) == null ? void 0 : ve.getImageData(0, 0, L.width, L.height)) == null ? void 0 : Ne.data) || null;
    if (!re) return null;
    let me = L.width, j = L.height, de = -1, _e = -1;
    for (let h = 0; h < L.height; h += 1)
      for (let R = 0; R < L.width; R += 1)
        re[(h * L.width + R) * 4 + 3] <= 8 || (R < me && (me = R), h < j && (j = h), R > de && (de = R), h > _e && (_e = h));
    if (de < me || _e < j)
      return n._activePaintEraserPreviewInfo = { cacheKey: M, value: null }, null;
    const ke = {
      surface: B,
      bounds: { minX: me, minY: j, maxX: de, maxY: _e },
      key: `${M}:${me}:${j}:${de}:${_e}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: M, value: ke }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), ke;
  }
  function pe() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function Se(v, w, L) {
    var M, P;
    if (!v) return null;
    if (v.type === "rasterObject" && ((M = v.item) != null && M.bbox)) {
      const A = v.item.bbox, B = ((P = v.item) == null ? void 0 : P.transform) || {}, re = Number(A.u0 || 0) + Number(B.du || 0), me = Number(A.u1 || 0) + Number(B.du || 0), j = Number(A.v0 || 0) + Number(B.dv || 0), de = Number(A.v1 || 0) + Number(B.dv || 0);
      return {
        minX: Math.floor((re % 1 + 1) % 1 * w),
        maxX: Math.ceil((me % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(j, 0, 1) * L),
        maxY: Math.ceil(Ee(de, 0, 1) * L),
        wraps: me - re >= 1 || re < 0 || me > 1
      };
    }
    if (v.type === "strokeGroup") {
      const A = z(v.actionGroupId, "paint"), B = u(v.actionGroupId, "paint", A);
      if (!B) return null;
      const re = B.centerUv.u - B.halfW, me = B.centerUv.u + B.halfW, j = B.centerUv.v - B.halfH, de = B.centerUv.v + B.halfH;
      return {
        minX: Math.floor((re % 1 + 1) % 1 * w),
        maxX: Math.ceil((me % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(j, 0, 1) * L),
        maxY: Math.ceil(Ee(de, 0, 1) * L),
        wraps: me - re >= 1 || re < 0 || me > 1
      };
    }
    return null;
  }
  function ee(v, w, L) {
    if (!v || !w) return !1;
    const M = (B) => B.wraps ? [
      { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY, wraps: !1 },
      { minX: B.minX, maxX: L - 1, minY: B.minY, maxY: B.maxY, wraps: !1 }
    ] : [B], P = M(v), A = M(w);
    return P.some((B) => A.some((re) => !(B.maxX < re.minX || re.maxX < B.minX || B.maxY < re.minY || re.maxY < B.minY)));
  }
  function I(v, w, L) {
    var D, le, ge, he, ne, ye, Me;
    if (!v || !w || !((D = L == null ? void 0 : L.surface) != null && D.canvas) || w.type !== "rasterObject") return v;
    const M = Number(v.width || L.surface.canvas.width || 0), P = Number(v.height || L.surface.canvas.height || 0);
    if (M < 1 || P < 1) return v;
    const A = Se(w, M, P);
    if (A && !ee(A, L.bounds, M)) return v;
    const B = String(((le = w.item) == null ? void 0 : le.id) || w.id || ""), re = ((ge = w.item) == null ? void 0 : ge.transform) || {}, me = `${L.key}:${B}:${M}:${P}:${Number(re.du || 0).toFixed(6)}:${Number(re.dv || 0).toFixed(6)}:${Number(re.rot_deg || 0).toFixed(3)}:${Number(re.scale || 1).toFixed(4)}`, j = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (j.has(me)) return j.get(me);
    const de = Ee(Math.floor(Number(((he = L.bounds) == null ? void 0 : he.minX) || 0)), 0, Math.max(0, M - 1)), _e = Ee(Math.floor(Number(((ne = L.bounds) == null ? void 0 : ne.minY) || 0)), 0, Math.max(0, P - 1)), ke = Ee(Math.ceil(Number(((ye = L.bounds) == null ? void 0 : ye.maxX) || 0)), de, Math.max(0, M - 1)), ue = Ee(Math.ceil(Number(((Me = L.bounds) == null ? void 0 : Me.maxY) || 0)), _e, Math.max(0, P - 1)), ve = Math.max(1, ke - de + 1), Ne = Math.max(1, ue - _e + 1), h = d(M, P, { readback: !0 });
    h.ctx.clearRect(0, 0, M, P), h.ctx.drawImage(v, 0, 0);
    const R = h.ctx.getImageData(de, _e, ve, Ne);
    h.ctx.save(), h.ctx.globalCompositeOperation = "destination-out", h.ctx.drawImage(L.surface.canvas, 0, 0), h.ctx.restore();
    const N = h.ctx.getImageData(de, _e, ve, Ne);
    let y = !1;
    for (let Ae = 0; Ae < ve * Ne; Ae += 1) {
      const Le = R.data[Ae * 4 + 3], Re = N.data[Ae * 4 + 3];
      if (Le > Re) {
        y = !0;
        break;
      }
    }
    return y ? (j.size > 64 && j.clear(), j.set(me, h.canvas), h.canvas) : (j.set(me, v), v);
  }
  function X(v, w = null) {
    const L = te((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), M = (v == null ? void 0 : v.bbox) || null;
    if (!L || !M) return null;
    const P = oe(v, w);
    if (!P || !(P.complete || P.width || P.naturalWidth)) return null;
    const { width: A, height: B } = Z(), re = (v == null ? void 0 : v.transform) || {}, me = [
      L,
      A,
      B,
      M.u0,
      M.v0,
      M.u1,
      M.v1,
      re.du,
      re.dv,
      re.rot_deg,
      re.scale,
      U()
    ].join(":"), j = o.get(me);
    if (j) return j;
    o.size > 64 && o.clear();
    const de = rn({ label: "editor.raster-erp" });
    de.width = A, de.height = B;
    const _e = de.getContext("2d");
    return _e ? (Vg(_e, P, v, A, B), o.set(me, de), de) : null;
  }
  async function se(v, w) {
    const L = await new Promise((re) => v.toBlob(re, "image/png")), M = new FormData();
    M.append("image", L, w), M.append("type", "input"), M.append("subfolder", "panorama_stickers"), M.append("overwrite", "1");
    const P = await t.fetchApi("/upload/image", { method: "POST", body: M });
    if (!P || P.status !== 200) throw new Error(`upload failed (${P == null ? void 0 : P.status})`);
    const A = await P.json(), B = String((A == null ? void 0 : A.name) || "").trim();
    if (!B) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: B,
      subfolder: String((A == null ? void 0 : A.subfolder) || "panorama_stickers"),
      storage: String((A == null ? void 0 : A.type) || "input")
    };
  }
  let be = null, we = !1;
  function C() {
    if (r) return !1;
    const v = lp(l.painting), { width: w, height: L } = g();
    return u1(l.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: w, height: L, nodeId: String(i.id ?? "0") });
  }
  function ae() {
    const v = String(i.id ?? "0"), w = ns.get(v);
    if (we && w) return w;
    const L = (async () => {
      var A, B, re, me, j, de, _e, ke, ue, ve, Ne, h;
      const M = E(), P = lp(l.painting);
      if (P.totalPaintCount <= 0 && P.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, be = M, c());
        return;
      }
      if (be !== M && !we) {
        we = !0;
        try {
          O();
          const R = p(!1), N = ((B = (A = n.paintEngine) == null ? void 0 : A.getErpTarget) == null ? void 0 : B.call(A, R)) || null, y = ((re = N == null ? void 0 : N.displayPaint) == null ? void 0 : re.canvas) || null, D = ((me = N == null ? void 0 : N.committedMask) == null ? void 0 : me.canvas) || null, le = Math.max(1, Number(((j = N == null ? void 0 : N.descriptor) == null ? void 0 : j.width) || (y == null ? void 0 : y.width) || (D == null ? void 0 : D.width) || 2048)), ge = Math.max(1, Number(((de = N == null ? void 0 : N.descriptor) == null ? void 0 : de.height) || (y == null ? void 0 : y.height) || (D == null ? void 0 : D.height) || 1024));
          (!y && P.totalPaintCount > 0 || !D && P.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((_e = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : _e.width) || 0) !== le || Number(((ke = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ke.height) || 0) !== ge) && (n._paintLayerSyncBlankSurface = d(le, ge)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, le, ge));
          const he = y || P.totalPaintCount > 0 && ((ue = n._paintLayerSyncBlankSurface) == null ? void 0 : ue.canvas) || null, ne = D || P.totalMaskCount > 0 && ((ve = n._paintLayerSyncBlankSurface) == null ? void 0 : ve.canvas) || null;
          if (!he && !ne) return;
          let ye = null, Me = null;
          const Ae = [];
          if (P.totalPaintCount > 0) {
            ye = await se(he, `pano_paint_${v}.png`);
            for (const Le of R) {
              const Re = String(Le || "").trim();
              if (!Re) continue;
              const He = ((h = (Ne = n.paintEngine) == null ? void 0 : Ne.getGroupDisplayCanvas) == null ? void 0 : h.call(Ne, Re)) || null;
              if (!He) continue;
              const ze = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), q = await se(He, `pano_group_${v}_${ze}.png`);
              q && Ae.push({
                id: Re,
                actionGroupId: Re,
                image: q
              });
            }
          }
          P.totalMaskCount > 0 && (Me = await se(ne, `pano_mask_${v}.png`)), M === E() && (l.painting_layer = {
            paint: ye,
            mask: Me,
            groups: Ae,
            revision: M
          }, be = M, c());
        } catch (R) {
          throw R;
        } finally {
          we = !1;
        }
      }
    })();
    return ns.set(v, L), L.finally(() => {
      ns.get(v) === L && ns.delete(v);
    }), L;
  }
  function b(v) {
    var B;
    const w = ((B = n.paintEngine) == null ? void 0 : B.getMaskDisplayCanvas()) || null;
    if (!w) return v;
    const L = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, M = v.reduce((re, me) => Math.max(re, Number((me == null ? void 0 : me.zIndex) || 0)), -1), P = (Array.isArray(l.stickers) ? l.stickers : []).reduce((re, me) => Math.max(re, Number((me == null ? void 0 : me.z_index) || 0)), -1), A = Math.max(M, P);
    return v.push({
      id: "mask_display",
      source: w,
      revision: L,
      zIndex: A + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function S() {
    var M, P;
    const v = m(!0), w = V(), L = [];
    for (const A of v) {
      if ((A == null ? void 0 : A.type) === "strokeGroup") {
        const B = String(A.actionGroupId || A.id || "");
        if (!B) continue;
        const re = ((P = (M = n.paintEngine) == null ? void 0 : M.getGroupDisplayCanvas) == null ? void 0 : P.call(M, B)) || null;
        if (!re) continue;
        L.push({
          id: `paint_group:${B}`,
          source: re,
          revision: `${_()}:${B}`,
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((A == null ? void 0 : A.type) === "rasterObject") {
        const B = A.item || null, re = te((B == null ? void 0 : B.id) || A.id || "");
        if (!re) continue;
        const me = X(B, () => fe());
        if (!me) continue;
        const j = I(me, A, w), de = (B == null ? void 0 : B.transform) || {};
        L.push({
          id: `raster:${re}`,
          source: j,
          revision: [
            E(),
            (w == null ? void 0 : w.key) || "",
            re,
            Number(de.du || 0).toFixed(6),
            Number(de.dv || 0).toFixed(6),
            Number(de.rot_deg || 0).toFixed(3),
            Number(de.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: (B == null ? void 0 : B.visible) !== !1
        });
      }
    }
    return b(L);
  }
  function $() {
    return k() ? S().filter((v) => v.visible !== !1).map((v) => ({ id: v.id, media: v.source, revision: v.revision, opacity: v.opacity, zIndex: v.zIndex })) : [];
  }
  function H() {
    l.painting_layer !== null && (l.painting_layer = null), be = "";
  }
  return {
    connect(v) {
      ({
        commitState: c,
        createRasterSurface: d,
        ensureGroupFrame: u,
        getActivePaintTargetDescriptor: f,
        getDesiredPaintTargetDescriptor: g,
        getDisplayPaintRevisionKey: _,
        getOrderedDisplayListObjects: m,
        getOrderedPaintGroupIds: p,
        getPaintingCompositeRevisionKey: E,
        getPaintingRevisionKey: U,
        getStrokeGroupStrokes: z,
        inverseTransformErpPointAround: W,
        paintingShown: k,
        parseRasterObjectSelectionId: te,
        processFreehandPoints: K,
        rasterizeStrokeToSurface: ce,
        rebuildPaintEngineIfNeeded: O,
        requestDraw: fe,
        screenPosToErpPoint: F,
        shortestWrappedDelta: J
      } = v);
    },
    getSharedLivePaintSurface: Q,
    getLivePaintRevisionSuffix: Y,
    isPaintCompositeInteraction: G,
    hitRasterObjectAt: T,
    invalidateLivePaintPreviewCaches: pe,
    buildRasterObjectEditCanvas: X,
    needsPaintingLayerSync: C,
    syncPaintingLayerAsync: ae,
    invalidatePaintingLayerState: H,
    buildEditorViewPaintLayers: $
  };
}
function yN(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(ee) {
    return !ee || typeof ee != "object" ? { x: 0, y: 0 } : { x: Number((ee == null ? void 0 : ee.u) || 0), y: Number((ee == null ? void 0 : ee.v) || 0) };
  }
  function c(ee, I, X, se = {}) {
    return { ...{
      ...ee,
      t: Number((ee == null ? void 0 : ee.t) || 0),
      widthScale: f(ee, "widthScale", 1),
      pressureLike: f(ee, "pressureLike", 1)
    }, ...se, u: I, v: X };
  }
  function d(ee, I = !1) {
    return I ? 12e-4 : 18e-4;
  }
  function u(ee, I, X = !1) {
    if (!Array.isArray(ee) || !ee.length) return [];
    const se = String((I == null ? void 0 : I.kind) || "") === "ERP_GLOBAL", be = /* @__PURE__ */ new WeakMap();
    if (se) {
      let M = null;
      ee.forEach((P) => {
        const A = Number((P == null ? void 0 : P.u) || 0), B = Number((P == null ? void 0 : P.v) || 0), re = (A % 1 + 1) % 1, me = M == null ? re : M + s(re, (M % 1 + 1) % 1);
        be.set(P, { x: me, y: B }), M = me;
      });
    }
    const we = (M) => !M || typeof M != "object" ? { x: 0, y: 0 } : be.get(M) || l(M), C = (M, P, A, B = {}) => {
      const re = se ? (Number(P) % 1 + 1) % 1 : Number(P), me = c(M, re, A, B);
      return be.set(me, { x: Number(P), y: Number(A) }), me;
    }, ae = (M, P, A) => {
      const B = we(M), re = we(P);
      return C(M, Wn(B.x, re.x, A), Wn(B.y, re.y, A), {
        t: Wn(Number((M == null ? void 0 : M.t) || 0), Number((P == null ? void 0 : P.t) || 0), A),
        widthScale: Wn(f(M, "widthScale", 1), f(P, "widthScale", 1), A),
        pressureLike: Wn(f(M, "pressureLike", 1), f(P, "pressureLike", 1), A)
      });
    };
    if (ee.length === 1) {
      const M = we(ee[0]);
      return [C(ee[0], M.x, M.y)];
    }
    const b = d(I, X), S = (M, P) => {
      const A = [0];
      for (let ue = 1; ue < M.length; ue += 1) {
        const ve = we(M[ue - 1]), Ne = we(M[ue]);
        A.push(A[ue - 1] + Math.hypot(Ne.x - ve.x, Ne.y - ve.y));
      }
      const B = A[A.length - 1] || 0;
      if (B <= 1e-8) {
        const ue = M[0], ve = we(ue);
        return [C(ue, ve.x, ve.y)];
      }
      const re = [];
      let me = 0;
      for (let ue = 0; ue <= B + 1e-9; ue += P) {
        for (; me < A.length - 2 && A[me + 1] < ue; ) me += 1;
        const ve = A[me], Ne = A[me + 1], h = Math.max(1e-8, Ne - ve);
        re.push(ae(M[me], M[me + 1], Ee((ue - ve) / h, 0, 1)));
      }
      const j = M[M.length - 1], de = we(j), _e = re[re.length - 1], ke = _e ? we(_e) : null;
      return (!ke || Math.hypot(ke.x - de.x, ke.y - de.y) > P * 0.35) && re.push(C(j, de.x, de.y)), re;
    }, $ = (M) => {
      if (!Array.isArray(M) || M.length < 3) return M ? M.slice() : [];
      const P = we(M[0]), A = [C(M[0], P.x, P.y)];
      for (let me = 0; me < M.length - 1; me += 1) {
        const j = M[me], de = M[me + 1], _e = we(j), ke = we(de), ue = C(
          j,
          _e.x * 0.75 + ke.x * 0.25,
          _e.y * 0.75 + ke.y * 0.25,
          {
            t: Number(j.t || 0) * 0.75 + Number(de.t || 0) * 0.25,
            widthScale: f(j, "widthScale", 1) * 0.75 + f(de, "widthScale", 1) * 0.25,
            pressureLike: f(j, "pressureLike", 1) * 0.75 + f(de, "pressureLike", 1) * 0.25
          }
        ), ve = C(
          j,
          _e.x * 0.25 + ke.x * 0.75,
          _e.y * 0.25 + ke.y * 0.75,
          {
            t: Number(j.t || 0) * 0.25 + Number(de.t || 0) * 0.75,
            widthScale: f(j, "widthScale", 1) * 0.25 + f(de, "widthScale", 1) * 0.75,
            pressureLike: f(j, "pressureLike", 1) * 0.25 + f(de, "pressureLike", 1) * 0.75
          }
        );
        A.push(ue, ve);
      }
      const B = M[M.length - 1], re = we(B);
      return A.push(C(B, re.x, re.y)), A;
    }, H = S(ee, b);
    if (H.length < 3) return H;
    const v = X ? 2 : 1;
    let w = H.slice();
    for (let M = 0; M < v; M += 1) w = $(w);
    return S(w, Math.max(b * 0.75, 55e-5));
  }
  function f(ee, I, X = 1) {
    const se = Number(ee == null ? void 0 : ee[I]);
    return Number.isFinite(se) ? Math.max(0, se) : X;
  }
  function g(ee) {
    const I = Number(ee == null ? void 0 : ee.radiusValue);
    if (Number.isFinite(I) && I > 0) {
      const X = String((ee == null ? void 0 : ee.radiusModel) || "").trim() || "erp_uv_norm";
      return X === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((ee == null ? void 0 : ee.size) || 10) * 0.5 / 2048)
      } : {
        model: X,
        value: I
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((ee == null ? void 0 : ee.size) || 10) * 0.5 / 2048)
    };
  }
  function _(ee, I, X = {}) {
    const se = rn({ label: "editor.raster-surface" });
    se.width = Math.max(1, Math.round(ee)), se.height = Math.max(1, Math.round(I));
    const be = se.getContext("2d", X.readback ? { willReadFrequently: !0 } : void 0);
    return be && (be.clearRect(0, 0, se.width, se.height), be.imageSmoothingEnabled = !0), { canvas: se, ctx: be };
  }
  function m() {
    const ee = fe();
    return `${String(t.paintStrokeRevision)}:${ee.width}x${ee.height}`;
  }
  function p() {
    const ee = fe();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${ee.width}x${ee.height}`;
  }
  function E() {
    const ee = i(), I = p();
    return ee ? `${I}:${ee}` : I;
  }
  function U() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function z() {
    t.paintCompositeRevision += 1;
  }
  function W() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function k() {
    var ee, I;
    t.paintEngineRevisionKey = null, (I = (ee = t.paintEngine) == null ? void 0 : ee.rebuildCommitted) == null || I.call(ee, n), t.paintEngineRevisionKey = m();
  }
  function te() {
    W(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function K({ rebuildPaintEngine: ee = !1 } = {}) {
    o(), U(), te(), ee && k();
  }
  function ce() {
    o(), z(), te();
  }
  function O() {
    var se;
    const ee = fe(), I = `${ee.width}x${ee.height}`;
    t.paintEngineDescriptorKey !== I && (t.paintEngine = bl(ee), t.paintEngineDescriptorKey = I, t.paintEngineRevisionKey = "");
    const X = m();
    t.paintEngineRevisionKey !== X && (t.paintEngineRevisionKey = X, (se = t.paintEngine) == null || se.rebuildCommitted(n));
  }
  function fe() {
    const ee = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: ee,
      height: Math.max(1, Math.round(ee * 0.5))
    };
  }
  function F() {
    return fe();
  }
  function J(ee, I, X, se, be = null) {
    const we = g(ee), C = f(I, "widthScale", 1) * f(I, "pressureLike", 1);
    return we.model === "erp_uv_norm" ? Math.max(0.5, we.value * X * C) : we.model === "world_angle" ? be ? Math.max(0.5, we.value / Math.max(1e-6, Number(be.hFOV_deg || 90) * br) * X * C) : Math.max(0.5, we.value / (2 * Math.PI) * X * C) : Math.max(0.5, Number((ee == null ? void 0 : ee.size) || 10) * 0.5 * C);
  }
  function G(ee, I, X = {}) {
    const se = String((I == null ? void 0 : I.layerKind) || "paint"), be = String((I == null ? void 0 : I.toolKind) || "pen"), we = X.preview === !0, C = we ? 0.78 : 1;
    if (ee.globalAlpha = be === "marker" ? 0.7 * C : 1, se === "mask") {
      ee.fillStyle = we ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (be === "eraser") {
      ee.globalCompositeOperation = "destination-out", ee.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const ae = String((I == null ? void 0 : I.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (I == null ? void 0 : I.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = we ? Math.max(0.28, Number(ae.a ?? 1) * 0.88) : Math.max(0.12, Number(ae.a ?? 1));
    ee.fillStyle = `rgba(${Math.round(Number(ae.r || 0) * 255)}, ${Math.round(Number(ae.g || 0) * 255)}, ${Math.round(Number(ae.b || 0) * 255)}, ${b})`;
  }
  function Q(ee, I, X) {
    const se = Math.max(0.5, Math.min(X, Number((I == null ? void 0 : I.radiusPx) || 0.5)));
    !Number.isFinite(I == null ? void 0 : I.x) || !Number.isFinite(I == null ? void 0 : I.y) || !Number.isFinite(se) || (ee.beginPath(), ee.arc(Number(I.x || 0), Number(I.y || 0), se, 0, Math.PI * 2), ee.fill());
  }
  function Y(ee, I, X, se, be = {}) {
    if (!ee || !Array.isArray(I) || !I.length) return;
    const we = Math.max(se.w, se.h) * 0.25;
    ee.save(), G(ee, X, be);
    const C = (ae) => Q(ee, ae, we);
    if (I.length === 1) {
      C(I[0]), ee.restore();
      return;
    }
    for (let ae = 0; ae < I.length - 1; ae += 1) {
      const b = I[ae], S = I[ae + 1];
      if (!b || !S) continue;
      const $ = Number(b.x || 0), H = Number(b.y || 0), v = Number(S.x || 0), w = Number(S.y || 0), L = Math.max(0.5, Math.min(we, Number(b.radiusPx || 0.5))), M = Math.max(0.5, Math.min(we, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite($) || !Number.isFinite(H) || !Number.isFinite(v) || !Number.isFinite(w) || !Number.isFinite(L) || !Number.isFinite(M)) continue;
      const P = v - $, A = w - H, B = Math.hypot(P, A);
      if (!Number.isFinite(B) || B < 1e-6) {
        C(b);
        continue;
      }
      if (B > Math.max(se.w, se.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(L, M)), me = Math.max(0.35, Math.min(re * 0.4, 2.25)), j = Math.max(1, Math.ceil(B / me));
      for (let de = 0; de <= j; de += 1) {
        const _e = de / j;
        C({
          x: Wn($, v, _e),
          y: Wn(H, w, _e),
          radiusPx: Wn(L, M, _e)
        });
      }
    }
    C(I[I.length - 1]), ee.restore();
  }
  function oe(ee, I, X, se) {
    Y(ee, I, X, se, { preview: !1 });
  }
  function ie(ee, I, X, se, be) {
    var ae, b, S, $;
    if (!ee || !Array.isArray(I) || I.length < 3) return;
    const we = "u", C = "v";
    if (ee.save(), String((X == null ? void 0 : X.layerKind) || "") === "mask")
      ee.fillStyle = "rgba(255,255,255,1)";
    else if (String((X == null ? void 0 : X.toolKind) || "") === "eraser")
      ee.globalCompositeOperation = "destination-out", ee.fillStyle = "rgba(0,0,0,1)";
    else {
      const H = (X == null ? void 0 : X.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      ee.fillStyle = `rgba(${Math.round(Number(H.r || 0) * 255)}, ${Math.round(Number(H.g || 0) * 255)}, ${Math.round(Number(H.b || 0) * 255)}, ${Number(H.a ?? 1)})`;
    }
    ee.beginPath(), ee.moveTo(Number(((ae = I[0]) == null ? void 0 : ae[we]) || 0) * se.w, Number(((b = I[0]) == null ? void 0 : b[C]) || 0) * se.h);
    for (let H = 1; H < I.length; H += 1)
      ee.lineTo(Number(((S = I[H]) == null ? void 0 : S[we]) || 0) * se.w, Number((($ = I[H]) == null ? void 0 : $[C]) || 0) * se.h);
    ee.closePath(), ee.fill(), ee.restore();
  }
  function x(ee) {
    const I = (ee == null ? void 0 : ee.geometry) || null;
    return I ? String(I.geometryKind || "") === "lasso_fill" ? Array.isArray(I.points) ? I.points : [] : Array.isArray(I.processedPoints) && I.processedPoints.length ? I.processedPoints : Array.isArray(I.rawPoints) && I.rawPoints.length ? I.rawPoints : Array.isArray(I.points) ? I.points : [] : [];
  }
  function T(ee, I) {
    const X = x(ee);
    return !Array.isArray(X) || !X.length ? [] : X.map((se) => ({
      x: Number((se == null ? void 0 : se.u) || 0) * Number((I == null ? void 0 : I.w) || 1),
      y: Number((se == null ? void 0 : se.v) || 0) * Number((I == null ? void 0 : I.h) || 1),
      radiusPx: J(ee, se, Number((I == null ? void 0 : I.w) || 1), Number((I == null ? void 0 : I.h) || 1))
    }));
  }
  function Z(ee, I, X = null) {
    var ae, b, S, $;
    if (!(ee != null && ee.ctx) || !I) return !1;
    const se = X || { w: Number(((ae = ee.canvas) == null ? void 0 : ae.width) || 0), h: Number(((b = ee.canvas) == null ? void 0 : b.height) || 0) }, be = String((I == null ? void 0 : I.toolKind) || "") === "eraser" ? {
      ...I,
      layerKind: "mask",
      toolKind: String(((S = I == null ? void 0 : I.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : I;
    if (String((($ = I == null ? void 0 : I.geometry) == null ? void 0 : $.geometryKind) || "") === "lasso_fill")
      return ie(ee.ctx, x(be), be, se), !0;
    const C = T(be, se);
    return C.length ? (oe(ee.ctx, C, be, se), !0) : !1;
  }
  function V(ee, I, X, se = 8) {
    const be = new Uint8Array(I * X), we = [], C = new Int32Array(I * X), ae = new Int32Array(I * X);
    for (let b = 0; b < X; b += 1)
      for (let S = 0; S < I; S += 1) {
        const $ = b * I + S;
        if (be[$] || ee[$] <= se) continue;
        let H = 0, v = 0;
        C[v] = S, ae[v] = b, v += 1, be[$] = 1;
        const w = [];
        let L = S, M = b, P = S, A = b;
        for (; H < v; ) {
          const B = C[H], re = ae[H];
          H += 1, w.push({ x: B, y: re }), B < L && (L = B), re < M && (M = re), B > P && (P = B), re > A && (A = re);
          const me = [
            [(B - 1 + I) % I, re],
            [(B + 1) % I, re],
            [B, re - 1],
            [B, re + 1]
          ];
          for (const [j, de] of me) {
            if (de < 0 || de >= X) continue;
            const _e = de * I + j;
            be[_e] || ee[_e] <= se || (be[_e] = 1, C[v] = j, ae[v] = de, v += 1);
          }
        }
        we.push({ pixels: w, minX: L, minY: M, maxX: P, maxY: A });
      }
    return we;
  }
  function pe(ee, I) {
    const X = [...new Set((Array.isArray(ee == null ? void 0 : ee.pixels) ? ee.pixels : []).map((b) => Number((b == null ? void 0 : b.x) || 0)).filter((b) => Number.isFinite(b)))].sort((b, S) => b - S);
    if (!X.length) return null;
    if (X.length === 1)
      return { startX: X[0], widthPx: 1 };
    let se = -1, be = 0;
    for (let b = 0; b < X.length; b += 1) {
      const S = X[b], H = (b === X.length - 1 ? X[0] + I : X[b + 1]) - S - 1;
      H > se && (se = H, be = b);
    }
    const we = (X[(be + 1) % X.length] + I) % I;
    let C = 1 / 0, ae = -1 / 0;
    for (const b of X) {
      const S = (b - we + I) % I;
      C = Math.min(C, S), ae = Math.max(ae, S);
    }
    return {
      startX: we,
      widthPx: Math.max(1, ae - C + 1)
    };
  }
  function Se(ee, I, X = {}) {
    var S;
    const se = Number((ee == null ? void 0 : ee.width) || 0), be = Number((ee == null ? void 0 : ee.height) || 0), we = (S = ee == null ? void 0 : ee.getContext) == null ? void 0 : S.call(ee, "2d");
    if (!we || se < 1 || be < 1) return [];
    const C = we.getImageData(0, 0, se, be), ae = new Uint8Array(se * be);
    for (let $ = 0; $ < ae.length; $ += 1) ae[$] = C.data[$ * 4 + 3];
    return V(ae, se, be, 8).map(($, H) => {
      const v = pe($, se);
      if (!v) return null;
      const w = Number(v.widthPx || 0), L = $.maxY - $.minY + 1, M = Number(v.startX || 0), P = rn({ label: "editor.lasso-fill" });
      P.width = w, P.height = L;
      const A = P.getContext("2d");
      if (!A) return null;
      const B = A.createImageData(w, L);
      return $.pixels.forEach(({ x: re, y: me }) => {
        const j = (me * se + re) * 4, de = (Number(re || 0) - M + se) % se, _e = ((me - $.minY) * w + de) * 4;
        B.data[_e + 0] = C.data[j + 0], B.data[_e + 1] = C.data[j + 1], B.data[_e + 2] = C.data[j + 2], B.data[_e + 3] = C.data[j + 3];
      }), A.putImageData(B, 0, 0), {
        id: Gi("raster"),
        type: "raster_frozen",
        layerKind: I === "mask" ? "mask" : "paint",
        z_index: Number((X == null ? void 0 : X.z_index) || 0) + H * 1e-3,
        locked: (X == null ? void 0 : X.locked) === !0,
        bbox: {
          u0: 0,
          v0: $.minY / be,
          u1: w / se,
          v1: ($.maxY + 1) / be
        },
        rasterDataUrl: P.toDataURL("image/png"),
        transform: {
          du: M / se,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(ee) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = ee);
    },
    processFreehandPoints: u,
    createRasterSurface: _,
    getPaintingRevisionKey: m,
    getPaintingCompositeRevisionKey: p,
    getDisplayPaintRevisionKey: E,
    refreshPaintEngineRevisionCache: k,
    markObjectVisualsDirty: te,
    markPaintStrokeVisualsDirty: K,
    markPaintCompositeVisualsDirty: ce,
    rebuildPaintEngineIfNeeded: O,
    getDesiredPaintTargetDescriptor: fe,
    getActivePaintTargetDescriptor: F,
    rasterizeStrokeToSurface: Z,
    createRasterFrozenObjectsFromCanvas: Se
  };
}
function bN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, c, d, u, f, g;
  function _(O, fe = null) {
    var F;
    if (O && typeof O == "object" && !Array.isArray(O)) return O;
    if (Array.isArray(O) && O.length > 0) {
      const J = O[0];
      if (J && typeof J == "object" && !Array.isArray(J)) return J;
    }
    if (Array.isArray(fe) && fe.length > 0) {
      const J = (F = fe[0]) == null ? void 0 : F.parsed_state;
      if (J && typeof J == "object" && !Array.isArray(J))
        return {
          yaw_deg: Number(J.yaw_deg || 0),
          pitch_deg: Number(J.pitch_deg || 0),
          hFOV_deg: Number(J.hFOV_deg || 30),
          rot_deg: Number(J.roll_deg || 0)
        };
    }
    return null;
  }
  function m(O, fe, F) {
    const J = Math.max(1, Number(fe || 1)), G = Math.max(1, Number(F || 1)), Q = Ee(Number(O || 30), 0.1, 179) * br, Y = 2 * Math.atan(Math.tan(Q * 0.5) * (G / J));
    return Ee(Y * ki, 0.1, 179);
  }
  function p(O) {
    const fe = String(O || "").trim();
    if (!fe) return null;
    try {
      const F = JSON.parse(fe);
      if (!F || typeof F != "object" || String(F.kind || "") !== "pano_sticker_state") return null;
      const J = F.version;
      let G = null;
      if (typeof J == "number" && Number.isInteger(J) ? G = J : typeof J == "string" && /^\d+$/.test(J) && (G = Number.parseInt(J, 10)), G !== 1) return null;
      const Q = F.pose;
      if (!Q || typeof Q != "object") return null;
      const Y = Number(Q.yaw_deg), oe = Number(Q.pitch_deg), ie = Number(Q.roll_deg), x = Number(Q.hFOV_deg);
      if (![Y, oe, ie, x].every((pe) => Number.isFinite(pe))) return null;
      let T = ((Y + 180) % 360 + 360) % 360 - 180;
      Object.is(T, -0) && (T = 0);
      const Z = {
        yaw_deg: T,
        pitch_deg: Ee(oe, -89.9, 89.9),
        roll_deg: ie,
        hFOV_deg: Ee(x, 0.1, 179)
      }, V = Number(F.source_aspect);
      return Number.isFinite(V) && V > 0 && (Z.source_aspect = V), Z;
    } catch {
      return null;
    }
  }
  function E(O) {
    const fe = Number(O == null ? void 0 : O.yaw_deg), F = Number(O == null ? void 0 : O.pitch_deg), J = Number((O == null ? void 0 : O.roll_deg) ?? (O == null ? void 0 : O.rot_deg)), G = Number(O == null ? void 0 : O.hFOV_deg), Q = Pi(O);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(fe) ? fe : 0),
        pitch_deg: Ee(Number.isFinite(F) ? F : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(J) ? J : 0,
        hFOV_deg: Ee(Number.isFinite(G) ? G : 90, 0.1, 179)
      },
      source_aspect: Q
    };
  }
  function U(O) {
    var oe;
    if (!O || typeof O != "object") return E(null);
    const fe = Number(O == null ? void 0 : O.yaw_deg), F = Number(O == null ? void 0 : O.pitch_deg), J = Number((O == null ? void 0 : O.roll_deg) ?? (O == null ? void 0 : O.rot_deg)), G = Number(O == null ? void 0 : O.hFOV_deg), Q = Number(O == null ? void 0 : O.vFOV_deg);
    let Y = 1;
    if (Number.isFinite(G) && Number.isFinite(Q)) {
      const ie = Ee(G, 0.1, 179) * br, x = Ee(Q, 0.1, 179) * br, T = Math.tan(x * 0.5);
      if (Math.abs(T) > 1e-6) {
        const Z = Math.tan(ie * 0.5) / T;
        Number.isFinite(Z) && Z > 0 && (Y = Z);
      }
    }
    if (O != null && O.asset_id && ((oe = o == null ? void 0 : o.assets) != null && oe[O.asset_id])) {
      const ie = o.assets[O.asset_id], x = Number((ie == null ? void 0 : ie.w) || 0), T = Number((ie == null ? void 0 : ie.h) || 0);
      x > 0 && T > 0 && (Y = x / T);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(fe) ? fe : 0),
        pitch_deg: Ee(Number.isFinite(F) ? F : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(J) ? J : 0,
        hFOV_deg: Ee(Number.isFinite(G) ? G : 30, 0.1, 179)
      },
      source_aspect: Y
    };
  }
  function z(O) {
    return t.linkedValue(n, O);
  }
  function W(O, fe, F) {
    const J = O && typeof O == "object" ? {
      yaw_deg: Number(O.yaw_deg || 0),
      pitch_deg: Number(O.pitch_deg || 0),
      roll_deg: Number(O.rot_deg ?? O.roll_deg ?? 0),
      hFOV_deg: Number(O.hFOV_deg || 30)
    } : p(fe);
    if (J) {
      const Y = Number((F == null ? void 0 : F.naturalWidth) || (F == null ? void 0 : F.width) || J.source_aspect || 1), oe = Number((F == null ? void 0 : F.naturalHeight) || (F == null ? void 0 : F.height) || 1);
      return {
        yaw_deg: Number(J.yaw_deg || 0),
        pitch_deg: Number(J.pitch_deg || 0),
        hFOV_deg: Number(J.hFOV_deg || 30),
        vFOV_deg: m(J.hFOV_deg, Y, oe),
        rot_deg: Number(J.roll_deg || 0)
      };
    }
    const G = Number((F == null ? void 0 : F.naturalWidth) || (F == null ? void 0 : F.width) || 1), Q = Number((F == null ? void 0 : F.naturalHeight) || (F == null ? void 0 : F.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: m(30, G, Q),
      rot_deg: 0
    };
  }
  function k() {
    const O = l(() => {
      Rr(n, "image-loaded");
    }), fe = Xt(n, "external-sticker") ? _(c("pano_sticker_input_pose"), null) : null;
    return qm(o, Ym(n, { pose: fe, image: O }));
  }
  function te() {
    var oe;
    const O = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((ie) => String((ie == null ? void 0 : ie.name) || "") === "sticker_image") : -1, fe = O >= 0 ? ((oe = n.getInputLink(O)) == null ? void 0 : oe.id) ?? null : null, F = l(() => {
      Rr(n, "image-loaded");
    }), J = _(c("pano_sticker_input_pose"), null), G = z("sticker_state"), Q = t.externalStateHash(n, G), Y = fe == null ? null : W(J, G, F);
    return Bm(o, {
      connected: fe != null,
      linkId: fe,
      stateHash: Q,
      pose: Y,
      imageWidth: Number((F == null ? void 0 : F.naturalWidth) || (F == null ? void 0 : F.width) || 0),
      imageHeight: Number((F == null ? void 0 : F.naturalHeight) || (F == null ? void 0 : F.height) || 0)
    });
  }
  function K(O = "sync") {
    if (a !== "stickers" || i) return;
    const fe = n.__panoSceneStateV2 ? k() : te();
    if (fe.changed) {
      const F = o.stickers.find(d);
      o.stickers = fe.state.stickers, o.active = fe.state.active, F && r.selectedId === F.id && !o.stickers.some((J) => J.id === F.id) && (r.selectedId = null, r.selectedIds = []), s(), g(), f();
    }
    u();
  }
  function ce() {
    const O = Array.isArray(o.stickers) ? o.stickers : [], fe = [];
    for (const F of O)
      d(F) && (F.visible = !1, fe.push(F));
    return fe;
  }
  return {
    connect(O) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        requestDraw: u,
        updateSelectionMenu: f,
        updateSidePanel: g
      } = O);
    },
    computeStickerVFov: m,
    buildCanonicalCutoutStickerState: E,
    buildCanonicalSelectedStickerState: U,
    reconcileExternalStickerFromInputs: K,
    collectExternalStickersForClearAll: ce
  };
}
const vN = 250, _N = 600, SN = 180, wN = 2;
function xN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Vo(e, t, r) {
  return e + (t - e) * r;
}
function kN(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Lu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / SN + i / wN);
  return Math.round(Vo(vN, _N, o));
}
function MN(e, t, r) {
  const n = xN(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Vo(i, t.position[o], n)),
    yaw_deg: jt(e.yaw_deg + Lu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Vo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Vo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Vo(e.distance, t.distance, n)
  };
}
function PN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Lu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function NN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return PN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: kN(e, t, n), end: i };
}
function CN(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: MN(e.from, e.to, r), done: !1 };
}
function il(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function AN(e, t, r) {
  const n = il(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function IN(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: c,
    stateV2: d,
    studio: u,
    viewController: f
  } = e;
  let g, _, m, p, E, U, z, W, k, te = null;
  function K(M, P = null) {
    const A = T();
    z(() => {
      i.viewTransition = NN(A, M, performance.now(), { scale: be(), end: P });
    }), !i.viewTransition && P && ce(P), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, W(), E({ localOnly: !0, reason: dt.VIEW });
  }
  function ce(M) {
    ie(jc({ ...oe(), moved: M.moved }, M.mode, Z())), s.backgroundDirty = !0;
  }
  function O() {
    i.viewTransition && (i.viewTransition = null, W());
  }
  function fe(M, P) {
    K({ ...T(), yaw_deg: M, pitch_deg: P });
  }
  function F() {
    return !u || pe() && !p();
  }
  function J() {
    return i.mode === "pano" && G();
  }
  function G() {
    return d && R1({ sceneLinked: l && !!Pl(a).scene, files: U(), stickers: c.stickers });
  }
  function Q() {
    return i.spaceMode === "6dof" && J();
  }
  function Y() {
    var M, P, A;
    return $S((A = (P = (M = t.ui) == null ? void 0 : M.settings) == null ? void 0 : P.getSettingValue) == null ? void 0 : A.call(P, fg));
  }
  function oe() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function ie(M) {
    i.spaceMode = M.mode, i.viewPosition = M.position, i.viewMoved = M.moved;
  }
  function x(M) {
    var A;
    const P = AN(i.spaceMode, i.viewTransition, M);
    if (P !== "keep") {
      if (P === "return") {
        K({ ...T(), position: Z(), distance: ((A = X()) == null ? void 0 : A.radius) || nr }, { mode: M, moved: !1 });
        return;
      }
      O(), ie(jc({ ...oe(), position: T().position }, M, Z())), s.backgroundDirty = !0, W(), E({ localOnly: !0, reason: dt.VIEW });
    }
  }
  function T() {
    var A;
    const M = i.viewMoved ? i.viewDistance : ((A = X()) == null ? void 0 : A.radius) || nr, P = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: M };
    return O1(i.spaceMode, P, Z());
  }
  function Z() {
    return pe() ? I().position : [0, 0, 0];
  }
  function V() {
    return r && c.camera !== null;
  }
  function pe() {
    return V() && (!u || c.camera.visible);
  }
  function Se() {
    return c.painting_visible !== !1;
  }
  function ee(M) {
    return M.visible && co(M.clip, i.frame);
  }
  function I() {
    return ba(c.camera, i.frame);
  }
  function X() {
    var P;
    const M = g();
    return ((P = M.space ?? M.content) == null ? void 0 : P.sphere) ?? null;
  }
  function se(M) {
    i.viewPosition = M.position, i.viewYaw = M.yaw_deg, i.viewPitch = M.pitch_deg, i.viewDistance = M.distance, i.viewMoved = !0, s.backgroundDirty = !0, E({ localOnly: !0, reason: dt.VIEW });
  }
  function be() {
    var M;
    return ((M = X()) == null ? void 0 : M.radius) || nr;
  }
  function we() {
    var de;
    const M = g().space, P = _(), A = i.worldSelectedId || i.selectedId, B = P.stickers.findIndex((_e) => _e.id === A), re = B < 0 ? null : {
      sticker: P.stickers[B],
      value: va(P, i.frame).stickers[B],
      plane: M.stickers.find((_e) => _e.id === A) ?? null,
      item: ((de = M.sticker) == null ? void 0 : de.id) === A && M.sticker.url ? { kind: M.sticker.kind, box: o.sceneBox(M.sticker.url) } : null
    }, me = m() ? v() : j1(X(), re);
    if (!me) return;
    const j = T();
    i.viewDistance = j.distance, i.viewMoved = !0, K(hm(j, me, n.width, n.height));
  }
  function C(M) {
    return o.pickSurface(L(), M.x, M.y, n.width, n.height);
  }
  function ae(M, P) {
    var A;
    return Hc(M, P, i.viewMoved ? null : (A = X()) == null ? void 0 : A.center, be());
  }
  function b() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function S(M, P) {
    const A = performance.now(), B = { x: M.x, y: M.y, time: A, key: o.contentRevision(), view: b() };
    if (!um(te, B)) {
      const me = C(M);
      te = { ...B, cost: performance.now() - A, hit: me };
    }
    const re = T();
    se(pm(re, ae(re, te.hit), P, be())), te.view = b(), te.wheelTime = A;
  }
  function $(M, P, A) {
    const B = T();
    i.interaction = M === "orbit" ? { kind: "space_orbit", last: P, pivot: ae(B, C(P)) } : { kind: "space_pan", last: P, depth: cm(B, be()) }, k(P), n.setPointerCapture(A);
  }
  function H(M) {
    return M * 0.2;
  }
  function v() {
    return { center: I().position, radius: H(be()) };
  }
  function w(M, P) {
    const { yaw_deg: A, pitch_deg: B } = vm(M.position, P);
    return { ...M, yaw_deg: A, pitch_deg: B };
  }
  function L() {
    return td(T(), n.width, n.height, X());
  }
  return {
    connect(M) {
      ({
        editorViewInput: g,
        editorViewSceneState: _,
        isCameraSelected: m,
        isErpCamera: p,
        requestDraw: E,
        sceneFiles: U,
        startAnimation: z,
        syncFloatingViewButtonState: W,
        updateCursor: k
      } = M);
    },
    transitionView: K,
    applyViewTransitionEnd: ce,
    cancelViewTransition: O,
    turnViewTo: fe,
    cameraPreviewShown: F,
    isSpaceView: J,
    hasSpaceContent: G,
    isFreeSpaceView: Q,
    viewControls: Y,
    spaceModeState: oe,
    applySpaceMode: ie,
    setSpaceMode: x,
    spaceViewState: T,
    spaceOrigin: Z,
    hasCamera: V,
    cameraShoots: pe,
    paintingShown: Se,
    sceneStickerShown: ee,
    cutoutCamera: I,
    contentSphere: X,
    setSpaceView: se,
    spaceScale: be,
    frameSpaceContent: we,
    zoomSpaceAt: S,
    startSpaceDrag: $,
    currentSpaceCamera: L,
    cameraFrustumLength: H,
    cameraSphere: v,
    lookingAt: w
  };
}
function EN(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: c,
    videoEl: d
  } = e;
  let u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X, se, be, we = { revision: -1, sceneState: null }, C = null;
  function ae() {
    return C || (C = $()), C;
  }
  function b() {
    C = null;
  }
  function S() {
    return we.sceneState;
  }
  function $() {
    const _e = te(), ke = g(), ue = { ...s.assets };
    for (const Me of l ? [] : s.stickers) {
      const Ae = String((Me == null ? void 0 : Me.asset_id) || "");
      Ae && !ue[Ae] && i.has(Ae) && (ue[Ae] = { type: "comfy_image", filename: Ae });
    }
    const ve = l ? s.stickers.map((Me) => Q(Me) ? { ...Me, source: { kind: "file", filename: Se(Me) } } : Me) : s.stickers;
    we.revision !== a.stateRevision && (we = { revision: a.stateRevision, sceneState: tr({ ...s, stickers: ve, assets: ue, painting: null }) }), l && H(we.sceneState);
    const Ne = va(we.sceneState, r.frame), h = oe ? W() : null, R = (Me) => {
      if (l && !Me.visible) return null;
      if (oe && F(Me)) return h;
      const Ae = ce(Me);
      return Ae ? { media: Ae, revision: K(Ae) } : null;
    }, N = se(), y = [...N.sky, ...Pm(we.sceneState, r.frame, s.stickers, { media: R, paintLayers: ke, evaluated: Ne })], D = _e && (_e === d || _e === c) ? d.dataset.panoSrc : _e, le = fe(_e) ? { media: _e, revision: K(_e), coverage: f(), source: D } : null, ge = O(), he = F1(T(), ge, Z());
    he.mode !== r.spaceMode && p(), u(he);
    const ne = ge ? v(we.sceneState, Ne, R, N) : null, ye = G() ? { ...ne, ...w(ne) } : null;
    return { background: le, layers: y, space: ye, content: ne };
  }
  function H(_e) {
    const ke = new Map(s.stickers.map((ue) => [ue.id, ue.clip]));
    _e.scene.clip = { ...s.scene.clip };
    for (const ue of _e.stickers) {
      const ve = ke.get(ue.id);
      ve && (ue.clip = { ...ve });
    }
  }
  function v(_e, ke, ue, ve) {
    const Ne = ie(), h = nd(Ne, ke.scene), R = h != null && h.url ? n.sceneBox(h.url) : null, N = R && ps(h.kind, R), y = pe(), D = ym(y, _e, ke), le = D != null && D.url ? n.sceneBox(D.url) : null, ge = le ? [{ box: ps(D.kind, le), value: D.value }] : [], he = Nm(_e, r.frame, s.stickers, { media: ue, evaluated: ke });
    for (const { request: ye, value: Me } of ve.items) {
      const Ae = ye != null && ye.url ? n.sceneBox(ye.url) : null;
      Ae && ge.push({ box: ps(ye.kind, Ae), value: Me });
    }
    const ne = Uc($1(ke, N, [...he, ...ve.stickers], ge));
    return {
      evaluated: ke,
      sceneUrls: Ne ? Ne.urls.filter(Boolean) : [],
      scene: h,
      stickerUrls: bm(y, _e),
      sticker: D,
      stickers: he,
      upstreamStickers: ve.stickers,
      upstreamItems: ve.items,
      sphere: ne
    };
  }
  function w(_e) {
    var ue;
    const ke = ((ue = _e.sphere) == null ? void 0 : ue.radius) || nr;
    return {
      gizmo: M() ? B() : L(_e.evaluated),
      grid: r.showGrid && !r.fullscreen ? Z1(ke) : null,
      lines: m() ? A(ke) : []
    };
  }
  function L(_e) {
    const ke = x(), ue = _e.stickers.find((ve) => ve.id === (ke == null ? void 0 : ke.id));
    return !be(ke) || !(ue != null && ue.active) ? null : { mode: r.gizmoMode, transform: Gc(ue) };
  }
  function M() {
    return m() && r.selectedId === kl;
  }
  let P = { revision: -1, span: -1, segments: [] };
  function A(_e) {
    const ke = I();
    (P.revision !== a.stateRevision || P.span !== ke) && (P = { revision: a.stateRevision, span: ke, segments: e_(t_(s, ke)) });
    const { segments: ue } = P, ve = ue.length ? [{ segments: ue, color: PP }] : [];
    if (!J()) return ve;
    const Ne = M() ? Rg : MP;
    return [...ve, { segments: _m(U(), _(_e)), color: Ne }];
  }
  function B() {
    return !J() || !M() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Gc({ ...U(), scale: 1 }) };
  }
  function re() {
    const { background: _e, layers: ke, space: ue } = ae(), ve = t.width, Ne = t.height, h = z({ x: 0, y: 0, w: ve, h: Ne });
    let R = !1;
    return !_e && !ke.length && !ue ? (n.clear(460551), R = n.ready) : (n.clear(), R = !!n.render({
      rect: h,
      camera: ue ? td(V(), ve, Ne, ue.sphere) : E(),
      background: _e,
      layers: ke,
      space: ue
    })), ee(), (r.worldSelectedId || M() || Y()) && X(), R;
  }
  function me(_e) {
    const { content: ke } = ae();
    return !ke || !_e.position ? Bo(_e) : mm(Bo(_e), _e.position, k(), ke.sphere);
  }
  function j(_e, ke, ue, ve = null) {
    const { background: Ne, layers: h, content: R } = ae();
    if (!Ne && !h.length && !R) return null;
    const N = R && ke.position ? R : null;
    return n.render({ rect: _e, camera: me(ke), background: Ne, layers: h, space: N, owner: ue, clearColor: ve });
  }
  function de(_e) {
    return n.clear(460551), !!n.renderUnwrap({ rect: z(_e), ...ae() });
  }
  return {
    connect(_e) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: _,
        cameraShoots: m,
        cancelViewTransition: p,
        currentViewCamera: E,
        cutoutCamera: U,
        deviceRect: z,
        followPortSticker: W,
        frameViewDistance: k,
        getConnectedErpImage: te,
        getMediaRevisionToken: K,
        getStickerImage: ce,
        hasSpaceContent: O,
        isDecodedImageReady: fe,
        isExternalSticker: F,
        isFreeSpaceView: J,
        isSpaceView: G,
        isUploadingSticker: Q,
        isWorldMenuShown: Y,
        portVideo: oe,
        sceneFiles: ie,
        selectedWorldSticker: x,
        spaceModeState: T,
        spaceOrigin: Z,
        spaceViewState: V,
        stickerFiles: pe,
        stickerImageKey: Se,
        syncFloatingViewButtonState: ee,
        timelineSpanFrames: I,
        updateSelectionMenu: X,
        upstreamViewInput: se,
        worldStickerEditable: be
      } = _e);
    },
    editorViewInput: ae,
    endEditorViewFrame: b,
    editorViewSceneState: S,
    isCameraSelected: M,
    renderEditorView: re,
    shotViewCamera: me,
    drawEditorViewShot: j,
    renderEditorViewUnwrap: de
  };
}
function ON(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: a,
    studio: s
  } = e;
  let l, c, d, u, f = { list: null, entries: [] };
  const g = /* @__PURE__ */ new Map(), _ = () => u({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA });
  function m(Q) {
    if (!Q) return null;
    let Y = g.get(Q);
    return Y || (Y = new Image(), Y.onload = _, Y.onerror = _, Y.src = Q, g.set(Q, Y)), Y;
  }
  function p({ sceneState: Q, ui: Y }) {
    return [
      ...Q.stickers.filter((oe) => oe.source.kind !== "port").map((oe) => n(Ks(oe.source))),
      i(Fr(Y, io)[0] || null),
      ...Q.painting.raster_objects.map((oe) => oe.rasterDataUrl)
    ].filter(Boolean);
  }
  function E() {
    return s && (kf(o, "scene") === Hg || !!U());
  }
  function U() {
    const Q = s && Xt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, Y = Array.isArray(Q) ? Q : null;
    if (f.list !== Y) {
      f.entries.forEach(J), f = { list: Y, entries: Y ? JP(Y).map((ie) => ({ layer: ie })) : [] };
      const oe = new Set(f.entries.flatMap((ie) => p(ie.layer)));
      for (const ie of [...g.keys()]) oe.has(ie) || g.delete(ie);
    }
    return Y && f.entries;
  }
  function z() {
    if (!U()) return 0;
    const [Q] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(Q) > 0 ? Number(Q) : 0;
  }
  function W() {
    if (!s) return "";
    const Q = U();
    if (tN(kf(o, "scene"), Q)) return "Run the workflow to show the upstream scene.";
    if (!Q) return "";
    const Y = t.uiList(o, "pano_sticker_warnings");
    return String(Y.find((oe) => String(oe).startsWith(eN)) ?? "");
  }
  function k(Q, Y, oe) {
    const { ui: ie, sceneState: x } = Q.layer, T = x.timeline.fps, Z = Fr(ie, Lg)[0], V = Fr(ie, Dg).map(i).filter(Boolean), pe = i(Fr(ie, Tg)[0] || null), Se = Z && typeof Z == "object" ? V.length ? { frames: V, meta: Z } : pe ? { src: pe, meta: Z } : null : null, ee = m(i(Fr(ie, io)[0] || null)), I = Se ? ad(Y.clip, oe, T, Se.meta) : null;
    let X = ee;
    if (Se != null && Se.frames)
      Q.frames || (Q.frames = ld({
        createImage: (se, be) => {
          const we = new Image();
          return we.onload = be, we.onerror = be, we.src = se, we;
        },
        onLoad: _
      })), X = Q.frames.picture(Se.frames, I, Se.meta, ee);
    else if (Se != null && Se.src) {
      const se = te(Q);
      se.follow({ src: Se.src, time: I, playing: d.advancing, fps: T }), X = se.picture(Q.still, ee);
    }
    return X ? { media: X, revision: c(X), source: sd(Se, ee) } : null;
  }
  function te(Q) {
    if (Q.follower) return Q.follower;
    const Y = ya(document, "editor.upstream-port-video");
    Y.playsInline = !0, Y.preload = "auto";
    const oe = rn({ label: "editor.upstream-port-still" });
    return oe.__panoFrameIdx = 0, Q.video = Y, Q.still = oe, Q.follower = fd({
      video: Y,
      onCapture: () => {
        var T;
        const ie = Number(Y.videoWidth || 0), x = Number(Y.videoHeight || 0);
        ie < 1 || x < 1 || (oe.width = ie, oe.height = x, (T = oe.getContext("2d")) == null || T.drawImage(Y, 0, 0), oe.__panoFrameIdx += 1, _());
      },
      onChange: _
    }), Q.follower;
  }
  function K(Q, Y, oe) {
    if (Y.source.kind === "port") return k(Q, Y, oe);
    const ie = m(n(Ks(Y.source)));
    return ie ? { media: ie, revision: c(ie) } : null;
  }
  function ce(Q) {
    var Se;
    const { sceneState: Y } = Q.layer, { painting: oe } = Y, ie = oe.paint.strokes.length + oe.mask.strokes.length;
    if (!Y.painting_visible || !ie && !oe.raster_objects.length) return [];
    const x = l(), T = `${x.width}x${x.height}`;
    Q.paintSize !== T && (fe(Q), Q.paintSize = T, Q.paintEngine = ie ? bl(x) : null, (Se = Q.paintEngine) == null || Se.rebuildCommitted({ painting: oe }), Q.rasters = /* @__PURE__ */ new Map());
    const Z = Q.paintEngine, V = (Z == null ? void 0 : Z.getMaskDisplayCanvas()) || null, pe = [];
    for (const ee of nN(Y, Z ? Z.getAllGroupIds() : [], !!V)) {
      const I = ee.kind === "group" ? Z == null ? void 0 : Z.getGroupDisplayCanvas(ee.id) : ee.kind === "mask" ? V : O(Q, ee.item, x);
      I && pe.push({ id: `${ee.kind}:${ee.id}`, media: I, revision: T, opacity: 1, zIndex: ee.zIndex });
    }
    return pe;
  }
  function O(Q, Y, { width: oe, height: ie }) {
    if (Q.rasters.has(Y.id)) return Q.rasters.get(Y.id);
    const x = m(Y.rasterDataUrl);
    if (!x.complete || !x.naturalWidth) return null;
    const T = rn({ label: "editor.upstream-raster-erp", width: oe, height: ie }), Z = T.getContext("2d");
    return Z ? (Vg(Z, x, Y, oe, ie), Q.rasters.set(Y.id, T), T) : null;
  }
  function fe(Q) {
    var Y;
    (Y = Q.rasters) == null || Y.forEach((oe) => ea(oe)), Q.rasters = null, Q.paintEngine = null, Q.paintSize = null;
  }
  function F() {
    const Q = U() ?? [], Y = { sky: [], stickers: [], items: [] };
    return Q.forEach((oe, ie) => {
      const x = ZP(r.frame, a.timeline.fps, oe.layer.sceneState.timeline.fps), T = rN(oe.layer, ie, x, {
        media: (Z) => K(oe, Z, x),
        paintLayers: ce(oe),
        source: i
      });
      Y.sky.push(...T.sky), Y.stickers.push(...T.stickers), Y.items.push(...T.items);
    }), Y;
  }
  function J(Q) {
    var Y;
    (Y = Q.follower) == null || Y.dispose(), Q.still && ea(Q.still), fe(Q);
  }
  function G() {
    f.entries.forEach(J), f = { list: null, entries: [] }, g.clear();
  }
  return {
    connect(Q) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = Q);
    },
    upstreamLinked: E,
    upstreamNotice: W,
    upstreamSpanFrames: z,
    upstreamViewInput: F,
    disposeUpstream: G
  };
}
const hu = "camera_preview";
function FN(e) {
  return e === hu ? dt.SPLAT_PREVIEW : dt.SPLAT_STAGE;
}
function TN(e) {
  return [...e].some((t) => t !== dt.VIEW && t !== dt.OVERLAY && t !== dt.SPLAT_STAGE);
}
function Kg(e, t = !1) {
  const r = Ee(Pi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function DN(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: a,
    shotEditor: s,
    studio: l,
    uiState: c
  } = e;
  let d, u, f, g, _ = null, m = !1, p = !1;
  function E() {
    m && (m = !1, o.releaseSplats(hu));
  }
  function U() {
    _ = null, p = !1, E();
  }
  function z(O) {
    if (!n || !O) return !1;
    const fe = n.closest(".pano-camera-preview");
    if (!fe) return !1;
    const F = Math.round(Number(fe.clientWidth || n.clientWidth || 0)), J = Math.round(Number(fe.clientHeight || n.clientHeight || 0));
    return Math.abs(F - Number(O.width || 0)) <= 1 && Math.abs(J - Number(O.height || 0)) <= 1;
  }
  function W(O, fe) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !s || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, U();
      return;
    }
    const F = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !F || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = F ? "Preview unavailable" : "Add Frame to preview", U();
      return;
    }
    const J = Kg(F, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = J.width, c.cameraPreview.height = J.height, p) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, E();
      return;
    }
    const G = window.devicePixelRatio || 1, Q = Math.max(1, J.width * G), Y = Math.max(1, J.height * G), oe = Math.min(1, t.width / Q, t.height / Y), ie = { width: Math.max(1, Math.floor(Q * oe)), height: Math.max(1, Math.floor(Y * oe)) }, x = !_ || _.width !== ie.width || _.height !== ie.height || TN(fe);
    if (O && x) {
      m = !0;
      const Z = u({ x: 0, y: t.height - ie.height, w: ie.width, h: ie.height }, F, hu);
      _ = Z ? ie : null, Z && ce(Z);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = g() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const T = z(J);
    c.cameraPreview.ready = !0, c.cameraPreview.label = T ? "" : "Loading preview", c.cameraPreview.settled = T && a.pendingStableLayoutFrames <= 0 && a.hasPresentedFrame;
  }
  function k() {
    _ = null, p = !1;
  }
  let te = 0, K = !1;
  function ce(O) {
    const fe = ++te;
    createImageBitmap(O.canvas, O.x, O.y, O.width, O.height).then((F) => {
      var J;
      if (fe !== te || !a.running) {
        F.close();
        return;
      }
      (J = r.getContext("bitmaprenderer")) == null || J.transferFromImageBitmap(F);
    }).catch((F) => {
      fe !== te || !a.running || (p = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !K && (K = !0, console.error("[PanoramaStickers] camera preview frame failed", F)));
    });
  }
  return {
    connect(O) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: g
      } = O);
    },
    drawCutoutOutputPreview: W,
    forgetCameraPreviewFrame: k
  };
}
function LN(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: c,
    type: d
  } = e;
  let u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X, se, be, we, C, ae, b;
  function S(ue) {
    const ve = r.width, Ne = r.height, h = ce();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ve, Ne), X(), ue && (s.backgroundDirty = !we(h)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let N = 0; N <= 16; N += 1) {
        const y = h.x + h.w * N / 16;
        n.beginPath(), n.moveTo(y, h.y), n.lineTo(y, h.y + h.h), n.stroke();
      }
      for (let N = 0; N <= 8; N += 1) {
        const y = h.y + h.h * N / 8;
        n.beginPath(), n.moveTo(h.x, y), n.lineTo(h.x + h.w, y), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(h.x, h.y + h.h / 2), n.lineTo(h.x + h.w, h.y + h.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const R = h.y + h.h * 0.57;
      n.fillText("Left", h.x + h.w * 0.25, R), n.fillText("Front", h.x + h.w * 0.5, R), n.fillText("Right", h.x + h.w * 0.75, R), n.fillText("Back", h.x + 38, R), n.fillText("Back", h.x + h.w - 38, R);
    }
  }
  function $(ue, ve, Ne = 1) {
    let h = !1;
    n.strokeStyle = ve, n.lineWidth = Ne, n.beginPath();
    for (const R of ue) {
      const N = pe(R);
      if (!N) {
        h = !1;
        continue;
      }
      h ? n.lineTo(N.x, N.y) : (n.moveTo(N.x, N.y), h = !0);
    }
    n.stroke();
  }
  function H(ue) {
    const ve = r.width, Ne = r.height;
    if (n.clearRect(0, 0, ve, Ne), X(), ue && (s.backgroundDirty = !be()), i.showGrid && !i.fullscreen && m().space)
      v();
    else if (i.showGrid && !i.fullscreen) {
      for (let R = -180; R <= 180; R += 15) {
        const N = [];
        for (let y = -89; y <= 89; y += 4) N.push(En(R, y));
        $(N, "#3f3f46", R % 90 === 0 ? 1.3 : 1);
      }
      for (let R = -75; R <= 75; R += 15) {
        const N = [];
        for (let y = -180; y <= 180; y += 4) N.push(En(y, R));
        $(N, R === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", R === 0 ? 1.5 : 1);
      }
      const h = [
        { name: "Left", dir: En(-90, 0) },
        { name: "Front", dir: En(0, 0) },
        { name: "Right", dir: En(90, 0) },
        { name: "Back", dir: En(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", h.forEach((R) => {
        const N = pe(R.dir);
        N && n.fillText(R.name, N.x, N.y + 24);
      });
    }
  }
  function v() {
    const ue = td(b(), r.width, r.height, f()), ve = sa(ue, [0, 0, 0], r.width, r.height);
    ve && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ve.x, ve.y - 12));
  }
  function w(ue, ve) {
    const Ne = V(ue), h = En(Number(Ne.yaw_deg || 0), Number(Ne.pitch_deg || 0)), R = i.mode === "unwrap" ? Se(h) : null, N = R ? R.x : null, y = i.mode === "pano" ? 28 : 20, D = [
      C(ue, 0, y, N),
      C(ue, 1, y, N),
      C(ue, 2, y, N),
      C(ue, 3, y, N)
    ];
    hd(n, D, { selected: ve });
  }
  function L(ue, ve = []) {
    if (!(!ue || !Array.isArray(ve) || ve.length < 4)) {
      ue.beginPath(), ue.moveTo(ve[0].x, ve[0].y);
      for (let Ne = 1; Ne < 4; Ne += 1) ue.lineTo(ve[Ne].x, ve[Ne].y);
      ue.closePath();
    }
  }
  function M(ue, ve, Ne) {
    const h = Array.isArray(ue == null ? void 0 : ue.corners) ? ue.corners : [];
    if (h.length < 4) return;
    const R = Ee(Number((ue == null ? void 0 : ue.visibilityAlpha) ?? 1), 0, 1);
    if (R <= 0.01) return;
    const N = n.globalAlpha;
    n.globalAlpha = N * R;
    const y = Ne ? "rgba(255, 116, 116, 0.96)" : ve ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", D = Ne ? "rgba(255, 89, 89, 0.08)" : ve ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", le = ve ? 3.2 : 2.6;
    L(n, h), n.fillStyle = D, n.fill(), n.strokeStyle = y, n.lineWidth = le, n.stroke(), n.save(), n.strokeStyle = y, n.lineWidth = ve ? 3.2 : 2.6, n.lineCap = "round";
    const ge = Array.isArray(ue == null ? void 0 : ue.edgeMidpoints) && ue.edgeMidpoints.length >= 4 ? ue.edgeMidpoints : [
      { edge: "top", x: (h[0].x + h[1].x) * 0.5, y: (h[0].y + h[1].y) * 0.5 },
      { edge: "right", x: (h[1].x + h[2].x) * 0.5, y: (h[1].y + h[2].y) * 0.5 },
      { edge: "bottom", x: (h[2].x + h[3].x) * 0.5, y: (h[2].y + h[3].y) * 0.5 },
      { edge: "left", x: (h[3].x + h[0].x) * 0.5, y: (h[3].y + h[0].y) * 0.5 }
    ], he = { top: "bottom", right: "left", bottom: "top", left: "right" }, ne = ve ? 12 : 9;
    ge.forEach((ye) => {
      const Ae = ge.find((ze) => (ze == null ? void 0 : ze.edge) === he[ye == null ? void 0 : ye.edge]) || {
        x: (h[0].x + h[1].x + h[2].x + h[3].x) * 0.25,
        y: (h[0].y + h[1].y + h[2].y + h[3].y) * 0.25
      }, Le = Ae.x - ye.x, Re = Ae.y - ye.y, He = Math.hypot(Le, Re) || 1;
      n.beginPath(), n.moveTo(ye.x, ye.y), n.lineTo(ye.x + Le / He * ne, ye.y + Re / He * ne), n.stroke();
    }), n.restore(), n.globalAlpha = N;
  }
  function P(ue, ve, Ne, h) {
    const R = Ee(Number((ve == null ? void 0 : ve.visibilityAlpha) ?? 1), 0, 1);
    if (R <= 0.01) return;
    if (ie(ue)) {
      M(ve, Ne, h);
      return;
    }
    if (x(ue)) {
      const y = n.globalAlpha;
      n.globalAlpha = y * K(ue) * R, i.mode === "frame" ? (n.strokeStyle = Ne ? "rgba(250, 250, 250, 0.9)" : h ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = Ne ? 2 : 1, L(n, ve.corners), n.stroke()) : w(ue, Ne), n.globalAlpha = y;
      return;
    }
    const N = n.globalAlpha;
    n.globalAlpha = N * R, n.fillStyle = Ne ? "rgba(0, 112, 243, 0.24)" : h ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", L(n, ve.corners), n.fill(), n.strokeStyle = Ne ? "rgba(255, 255, 255, 1)" : h ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = Ne ? 2.8 : 1.9, L(n, ve.corners), n.stroke(), n.globalAlpha = N;
  }
  function A(ue, ve, Ne) {
    if (x(ue)) {
      ug(n, ve, { accent: Ne });
      return;
    }
    const h = !(ie(ue) && fe());
    n.fillStyle = Ne, h && ve.corners.forEach((R) => {
      n.beginPath(), n.arc(R.x, R.y, 6.5, 0, Math.PI * 2), n.fill();
    }), h && ie(ue) && (n.strokeStyle = Ne, n.lineCap = "round", n.lineWidth = 4, ve.edgeMidpoints.forEach((R) => {
      var ne, ye, Me, Ae;
      const N = (((ne = R.b) == null ? void 0 : ne.x) ?? R.x) - (((ye = R.a) == null ? void 0 : ye.x) ?? R.x), y = (((Me = R.b) == null ? void 0 : Me.y) ?? R.y) - (((Ae = R.a) == null ? void 0 : Ae.y) ?? R.y), D = Math.hypot(N, y) || 1, le = N / D, ge = y / D, he = 10;
      n.beginPath(), n.moveTo(R.x - le * he, R.y - ge * he), n.lineTo(R.x + le * he, R.y + ge * he), n.stroke();
    }), n.lineCap = "butt"), T(ue) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ve.rotateStemBase.x, ve.rotateStemBase.y), n.lineTo(ve.rotateHandle.x, ve.rotateHandle.y), n.stroke(), n.fillStyle = Ne, n.beginPath(), n.arc(ve.rotateHandle.x, ve.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function B() {
    var N;
    const ue = i.mode === "frame" ? [] : te(), ve = ue.length > 1, Ne = l ? E() : W(), h = Ne.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${ie(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Ne || i._sortedItemsCache.orderKey !== h) && (i._sortedItemsCache = {
      src: Ne,
      orderKey: h,
      sorted: [...Ne]
    });
    const R = i._sortedItemsCache.sorted;
    for (const y of R) {
      const D = i.mode !== "frame" && !ve && Q(y);
      if (i.mode === "frame" && !D) continue;
      const le = x(y), ge = ie(y), he = G(y);
      if (!le && !ge || oe(y) && !ae(y)) continue;
      const ne = Z(y);
      if (d !== "stickers" && !ne.visible)
        continue;
      const ye = Ee(Number((ne == null ? void 0 : ne.visibilityAlpha) ?? 1), 0, 1);
      if (ye <= 0.01) continue;
      const Me = ge && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Me, P(y, ne, D, he), D && ne.visible) {
        const Ae = he ? "#ff4d4f" : le && F(y) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * ye, A(y, ne, Ae), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !p() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const y = i.cutoutPanoFrameVisual, D = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= D, M(y.geom, y.selected, y.locked), y.selected && A(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ve) {
      const y = k(ue);
      if (y != null && y.visible) {
        const D = u(ue) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(y.corners[0].x, y.corners[0].y);
        for (let le = 1; le < y.corners.length; le += 1) n.lineTo(y.corners[le].x, y.corners[le].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = D, y.corners.forEach((le) => {
          n.beginPath(), n.arc(le.x, le.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      ue.forEach((y) => {
        if (!T(y) && !Y(y)) return;
        const D = Z(y);
        if (!(D != null && D.visible)) return;
        const le = G(y) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(D.corners[0].x, D.corners[0].y);
        for (let ge = 1; ge < D.corners.length; ge += 1) n.lineTo(D.corners[ge].x, D.corners[ge].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = le, D.corners.forEach((ge) => {
          n.beginPath(), n.arc(ge.x, ge.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((N = i.interaction) == null ? void 0 : N.kind) === "marquee_select") {
      const y = se(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function re(ue) {
    const ve = p(), Ne = U(ve);
    if (!ve || !Ne)
      return n.clearRect(0, 0, r.width, r.height), ue && o.clear(657930), !1;
    const h = { x: Ne.x, y: Ne.y, w: Ne.w, h: Ne.h }, { rect: R, shot: N } = xm(ve, Ne, { width: r.width, height: r.height }), y = me(h);
    if (n.clearRect(0, 0, r.width, r.height), ue) {
      o.clear(657930);
      const D = g(R), le = !!_(D, N, void 0, 657930);
      le || o.clear(1118481, D), s.backgroundDirty = !le;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(h.x, h.y, h.w, h.h, y), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = Rg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(h.x + 1, h.y + 1, h.w - 2, h.h - 2, Math.max(0, y - 1)), n.stroke(), n.restore(), !0;
  }
  function me(ue) {
    const ve = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * ve, Number((ue == null ? void 0 : ue.w) || 0) * 0.5, Number((ue == null ? void 0 : ue.h) || 0) * 0.5);
  }
  function j() {
    var le, ge;
    if (((le = i.interaction) == null ? void 0 : le.kind) !== "paint_lasso_fill") return;
    const ue = i.interaction.stroke, ve = (ge = ue == null ? void 0 : ue.geometry) == null ? void 0 : ge.points;
    let Ne;
    if (i.mode === "frame") {
      const he = p(), ne = z(he);
      Ne = ee(ve, he, ne);
    } else
      Ne = I(ve);
    if (!Array.isArray(Ne) || Ne.length < 3) return;
    const h = String((ue == null ? void 0 : ue.layerKind) || "") === "mask", R = (ue == null ? void 0 : ue.color) || { r: 1, g: 0.25, b: 0.25 }, N = Math.round(Number(R.r || 0) * 255), y = Math.round(Number(R.g || 0) * 255), D = Math.round(Number(R.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(Ne[0].x || 0), Number(Ne[0].y || 0));
    for (let he = 1; he < Ne.length; he++) n.lineTo(Number(Ne[he].x || 0), Number(Ne[he].y || 0));
    n.closePath(), h ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${N},${y},${D},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function de() {
    const ue = i.frameRollOverlayVisual, ve = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(ue != null && ue.shot) || ve <= 1e-4) return;
    const Ne = z(ue.shot);
    if (!Ne) return;
    const h = { x: Ne.x + Ne.w * 0.5, y: Ne.y + Ne.h * 0.5 }, R = Number(ue.shot.roll_deg ?? ue.shot.rot_deg ?? 0) * br, N = Math.hypot(Ne.w, Ne.h) * 0.55, y = Math.cos(R) * N, D = Math.sin(R) * N;
    n.save(), n.globalAlpha *= ve, n.beginPath(), n.rect(Ne.x, Ne.y, Ne.w, Ne.h), n.clip(), n.translate(h.x, h.y), n.rotate(R);
    const le = Math.max(12, Math.min(Ne.w, Ne.h) / 6);
    n.beginPath();
    for (let ge = -N; ge <= N; ge += le)
      n.moveTo(ge, -N), n.lineTo(ge, N);
    for (let ge = -N; ge <= N; ge += le)
      n.moveTo(-N, ge), n.lineTo(N, ge);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(h.x - y, h.y - D), n.lineTo(h.x + y, h.y + D), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function _e() {
    return !l || !p() || t && J() || c && !O() ? 0 : AP;
  }
  function ke() {
    const ue = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (ue <= 1e-4 || !l || i.mode !== "pano") return;
    const ve = p(), Ne = ve ? Z(ve) : null, h = Array.isArray(Ne == null ? void 0 : Ne.corners) && Ne.corners.length >= 4 ? Ne.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    Ne != null && Ne.visible && h && (i.cutoutPanoDimCorners = h), ve && (Ne != null && Ne.visible) && h && (i.cutoutPanoFrameVisual = {
      item: ve,
      geom: Ne,
      selected: Q(ve),
      locked: G(ve)
    });
    const R = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, N = Ne != null && Ne.visible ? h : R ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${ue})`, n.beginPath(), n.rect(0, 0, r.width, r.height), N.length >= 4) {
      n.moveTo(N[0].x, N[0].y);
      for (let y = 1; y < 4; y += 1) n.lineTo(N[y].x, N[y].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(ue) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: g,
        drawEditorViewShot: _,
        editorViewInput: m,
        getActiveCutoutShot: p,
        getCutoutSelectableItemsForDisplay: E,
        getFrameViewLayout: U,
        getFrameViewRect: z,
        getList: W,
        getMultiSelectionGeom: k,
        getSelectedItems: te,
        getStickerDisplayAlpha: K,
        getUnwrapRect: ce,
        isCameraSelected: O,
        isErpCamera: fe,
        isExternalSticker: F,
        isFreeSpaceView: J,
        isItemLocked: G,
        isItemSelected: Q,
        isRasterObjectItem: Y,
        isSceneSticker: oe,
        isShotItem: ie,
        isStickerItem: x,
        isStrokeGroupItem: T,
        objectGeom: Z,
        poseOf: V,
        projectDir: pe,
        projectDirUnwrap: Se,
        projectErpLassoPointsToFrameRect: ee,
        projectLassoPointsToCurrentView: I,
        rebuildPaintEngineIfNeeded: X,
        rectFromPoints: se,
        renderEditorView: be,
        renderEditorViewUnwrap: we,
        sampleStickerEdge: C,
        sceneStickerShown: ae,
        spaceViewState: b
      } = ue);
    },
    drawGridUnwrap: S,
    drawGridPano: H,
    drawObjects: B,
    drawFrameViewBackground: re,
    drawLassoOutlineOverlay: j,
    drawFrameRollOverlay: de,
    getCutoutPanoDimTarget: _e,
    drawCutoutPanoPassepartout: ke
  };
}
function RN(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: c,
    shotEditor: d,
    stageWrap: u,
    state: f,
    timeline: g,
    type: _,
    uiState: m,
    viewController: p
  } = e;
  let E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X = () => {
  };
  function se(j = /* @__PURE__ */ new Set()) {
    fe();
    const de = l.backgroundDirty;
    d && (x(), U(de, j)), i.mode === "frame" ? (l.frameSafeRect = oe(), k(de)) : i.mode === "unwrap" ? K(de) : te(de), z(), O(), V(), ce(), W(), m.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && ee(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && m.cameraPreview && (m.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const _e = Q();
    m.stageStatus = _e.status, m.stageStatusDetail = _e.detail, m.stageNotice = I(), _e.status === Jn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", _e.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function be(j = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const de = String((j == null ? void 0 : j.kind) || "");
    return de === "move" || de === "scale" || de === "scale_x" || de === "scale_y" || de === "rotate" ? !0 : de === "move_multi" ? Array.isArray(j == null ? void 0 : j.stickerSnapshots) && j.stickerSnapshots.length > 0 : !1;
  }
  function we() {
    return !!i.interaction || !!g.drag;
  }
  function C() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = G();
  }
  function ae(j = {}) {
    var R, N, y, D, le, ge, he, ne;
    const de = j.reason ?? dt.STATE, _e = !!j.localOnly, ke = j.externalSync === !0, ue = String(j.cause || ""), ve = String(((R = i.interaction) == null ? void 0 : R.kind) || "");
    (!_e || ve === "view" || ve === "pan_frame" || be() || !!i.viewTransition || ue === "mode" || ue === "frame_view" || ue === "cutout_frame") && (l.backgroundDirty = !0), _e && Y() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!_e || ue === "selection" || ue === "mode" || ue === "cutout_frame") && (pe(), Se()), we() ? l.nodePreviewPending = !0 : C(), ke && ((y = (N = a.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || y.call(N), (D = a.setDirtyCanvas) == null || D.call(a, !0, !1)), ke && !_e && ((ge = (le = a.graph) == null ? void 0 : le.setDirtyCanvas) == null || ge.call(le, !0, !0), (ne = (he = t == null ? void 0 : t.canvas) == null ? void 0 : he.setDirty) == null || ne.call(he, !0, !0)), c.requestDraw(de);
  }
  function b() {
    const j = n.getBoundingClientRect(), de = Math.max(2, Math.round(j.width)), _e = Math.max(2, Math.round(j.height)), ke = window.devicePixelRatio || 1, ue = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== de || n.height !== _e) && (n.width = de, n.height = _e);
    const ve = n_(j.width || de, j.height || _e, ke, window.innerWidth || j.width, window.innerHeight || j.height);
    return o.resize(ve.width, ve.height), [n.width, n.height, r.width, r.height].join("x") === ue ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && S(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function S(j) {
    j(), c.wake();
  }
  function $() {
    return !!i.viewTransition || !!p.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || we();
  }
  function H(j = performance.now(), de = /* @__PURE__ */ new Set()) {
    var Ne;
    l.nodePreviewPending && !we() && C(), de.forEach((h) => l.reasons.add(h)), de.size && (l.dirty = !0), [...de].some((h) => h !== dt.OVERLAY) && (l.backgroundDirty = !0), T(), l.lastTickTs > 0 ? Math.max(1e-3, (j - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = j;
    const _e = i.mode === "frame" && ((Ne = i.interaction) == null ? void 0 : Ne.kind) === "roll_frame" ? i.interaction : null;
    _e != null && _e.shot && (i.frameRollOverlayVisual = { shot: _e.shot });
    const ke = _e ? 1 : 0;
    if (Math.abs(ke - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ke, i.frameRollOverlayStartTs = j), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ke) > 1e-6) {
      const h = Ee(
        (j - Number(i.frameRollOverlayStartTs || j)) / IP,
        0,
        1
      );
      i.frameRollOverlayAlpha = Wn(
        Number(i.frameRollOverlayFrom || 0),
        ke,
        mc(h)
      ), h >= 1 && (i.frameRollOverlayAlpha = ke, ke === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const ue = J();
    if (Math.abs(ue - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = ue, i.cutoutPanoDimStartTs = j), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - ue) > 1e-6) {
      const h = Ee(
        (j - Number(i.cutoutPanoDimStartTs || j)) / op,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Wn(
        Number(i.cutoutPanoDimFrom || 0),
        ue,
        mc(h)
      ), h >= 1 && (i.cutoutPanoDimAlpha = ue), h >= 1 && ue === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ve = d && F() ? 1 : 0;
    if (Math.abs(ve - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ve, i.cutoutPanoFrameStartTs = j), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ve) > 1e-6) {
      const h = Ee(
        (j - Number(i.cutoutPanoFrameStartTs || j)) / op,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Wn(
        Number(i.cutoutPanoFrameFrom || 0),
        ve,
        mc(h)
      ), h >= 1 && (i.cutoutPanoFrameAlpha = ve, ve === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const h = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), R = Ee((j - Number(i.outputPreviewAnimStartTs || 0)) / h, 0, 1), y = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? TP(R) : LP(R);
      i.outputPreviewAnim = Wn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, y), l.dirty = !0, R >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: h, done: R } = CN(i.viewTransition, j);
      if (i.viewPosition = h.position, i.viewYaw = h.yaw_deg, i.viewPitch = h.pitch_deg, i.viewFov = h.hFOV_deg, i.viewDistance = h.distance, R) {
        const { end: N } = i.viewTransition;
        i.viewTransition = null, N && E(N), Z();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, p.stepInertia(j) && (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const h = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), se(h);
    }
  }
  function v(j) {
    try {
      j();
    } catch (de) {
      const _e = String((de == null ? void 0 : de.stack) || (de == null ? void 0 : de.message) || de || "unknown editor frame error");
      l.tickErrorSignature !== _e && (l.tickErrorSignature = _e, console.error("[PanoramaStickers] editor frame failed", de)), m.stageStatus = Kn, m.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function w(j = performance.now(), de = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const _e = Nb();
    v(() => H(j, de)), Cb(_e);
  }
  function L() {
    !l.running || !b() || v(() => {
      l.dirty = !1, se(/* @__PURE__ */ new Set([dt.RESIZE]));
    });
  }
  const M = new ResizeObserver(L);
  let P = null;
  function A() {
    P == null || P.removeEventListener("change", B), P = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), P.addEventListener("change", B);
  }
  function B() {
    A(), L();
  }
  function re() {
    X = Pb("editor", () => {
      var j;
      return {
        type: _,
        readOnly: s,
        mode: i.mode,
        interaction: ((j = i.interaction) == null ? void 0 : j.kind) ?? null,
        timelineDrag: !!g.drag,
        playing: !!ie.playing
      };
    });
  }
  function me() {
    X(), l.running = !1, c.stop(), M.disconnect(), P.removeEventListener("change", B);
  }
  return {
    connect(j) {
      ({
        applyViewTransitionEnd: E,
        drawCutoutOutputPreview: U,
        drawCutoutPanoPassepartout: z,
        drawFrameRollOverlay: W,
        drawFrameViewBackground: k,
        drawGridPano: te,
        drawGridUnwrap: K,
        drawLassoOutlineOverlay: ce,
        drawObjects: O,
        endEditorViewFrame: fe,
        getActiveCutoutShot: F,
        getCutoutPanoDimTarget: J,
        getSharedLivePaintSurface: G,
        getStageImageStatus: Q,
        isPaintCompositeInteraction: Y,
        measureFrameSafeRect: oe,
        playback: ie,
        rebuildPaintEngineIfNeeded: x,
        syncCutoutShot: T,
        syncFloatingViewButtonState: Z,
        syncFrameRollKnob: V,
        syncLookAtFrameButtonState: pe,
        syncViewToggleState: Se,
        updateSelectionMenu: ee,
        upstreamNotice: I
      } = j);
    },
    requestDraw: ae,
    syncCanvasSize: b,
    startAnimation: S,
    editorAnimating: $,
    tick: w,
    stageResizeObserver: M,
    watchPixelRatio: A,
    sampleEditorDiagnostics: re,
    stopRenderLoop: me
  };
}
function ji(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function VN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function $N({
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
  var z, W;
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
    historyEntries: Array.from({ length: 8 }, (k, te) => ({ index: te, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((z = t.find((k) => i(e.paintColor, k.color))) == null ? void 0 : z.id) || "", f = !u, g = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((W = e.customPaintColor) == null ? void 0 : W.a) ?? 1))) * 100), m = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), p = e.brushSizes[m] ?? 10, E = l(), U = Array.from({ length: 8 }, (k, te) => e.customPaintHistory[te] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...a(g.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: U.map((k, te) => ({
      index: te,
      color: k ? { cssColor: n(k, 1) } : null
    })),
    sizeValue: p,
    sizeText: String(p),
    sizeFill: `${Math.max(0, Math.min(100, (p - 1) / 119 * 100))}%`,
    sizeDisabled: E,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function zN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const jN = {
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
function HN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = jN[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function vc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function GN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? Ge.eye : Ge.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function WN({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function KN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const oo = "erp", UN = ["1:1", "4:3", "3:2", "16:9"];
function Ug(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...UN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: oo, label: Number(r) === 180 ? "180°" : "360°", active: e === oo }] : []
  ];
}
function BN({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
  uiSettings: l,
  normalizeCoverageValue: c
}) {
  return {
    coverage: { value: c(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: HN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function YN({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: c,
  isExternalSticker: d,
  isStickerHidden: u,
  canRestoreSelectedToInitial: f,
  iconSet: g,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: _ = !1,
  cameraDeletable: m = !1,
  erpChoice: p = !1,
  coverage: E = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let U = [];
  if (r.length > 1)
    U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s }
    ], d(t) || (U.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: g.duplicate }), U.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: g.replace_image })), d(t)) {
      const z = f(), W = u(t);
      U.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: z ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !z
      }), U.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: W ? "Show" : "Hide",
        tip: W ? "Show input image" : "Hide input image",
        icon: W ? g.eye : g.eye_dashed
      });
    }
    U.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed }), d(t) || U.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s });
  } else
    U = [
      {
        key: "aspect",
        kind: "aspect",
        icon: g.aspect,
        open: !!c,
        choices: Ug(l, { erp: p, coverage: E })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === oo }
    ], _ ? m && U.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : U.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    );
  return Bg(i.corners, U);
}
const up = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function qN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? up.filter((s) => s.cameraTip) : up;
  return Bg([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: c, cameraTip: d }) => ({ key: s, label: l, tip: n ? d : c, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ge.delete }] : []
  ]);
}
function XN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: c, maxY: d } = e || {};
  if (![s, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), g = d + 18, _ = c - 18 - r;
  let m;
  return g <= f ? m = Math.max(g, 14) : _ >= 14 ? m = Math.min(_, f) : m = Math.min(Math.max(g, 14), f), { left: u, top: m };
}
function Bg(e, t) {
  const r = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((c) => c.x), i = r.map((c) => c.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const Yg = "painting";
function JN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const ZN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function QN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: c = !1, stickers: d = !0, scene: u = !1, sceneLocked: f = !1 }) {
  const g = (U, z, W, k, te, K, { keyable: ce = !0, hideable: O = !0 } = {}) => {
    const fe = (F) => (r == null ? void 0 : r.owner) === U && r.lane === F ? r.frames.map((J) => J + K) : [];
    return {
      id: U,
      label: W,
      icon: k,
      clip: te,
      selected: U === n,
      hideable: O,
      visible: z.visible,
      keyable: ce,
      open: ce && o.has(U),
      keys: zv(z).map((F) => ({ frame: F.frame + K, full: F.full })),
      selectedFrames: fe(null),
      lanes: (ce ? fo(z) : []).map((F) => ({
        key: `${U}:${F}`,
        lane: F,
        label: ZN[F],
        frames: z[F].keyframes.map((J) => J.frame + K),
        selectedFrames: fe(F)
      }))
    };
  }, _ = d ? e.stickers : [], m = _.filter((U) => U.placement === "sky").sort((U, z) => z.z_index - U.z_index), p = _.filter((U) => U.placement === "world"), E = ({ start: U, in: z, duration: W }) => ({ clip: { start: U, end: W === null ? null : U + W }, offset: U - z });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s || f,
    lengthLocked: f,
    lockTip: f ? "Set by the scene" : "Set by the video input",
    length: f ? t : e.timeline.length,
    rows: [
      ...l ? [g("camera", e.camera, "Camera", Ge.camera, null, 0, { hideable: c })] : [],
      ...[...m, ...p].map((U) => {
        const { clip: z, offset: W } = E(U.clip);
        return g(U.id, U, zc(U), Ge.image, z, W);
      }),
      ...d && (JN(e.painting) || !e.painting_visible) ? [{
        id: Yg,
        label: "Paint",
        icon: Ge.paintbrush_vertical_tool,
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
      ...d && (u || Gs(e.scene)) ? [(() => {
        const { clip: U, offset: z } = E(e.scene.clip);
        return g("scene", e.scene, "Scene", Ge.box, U, z, { keyable: !1 });
      })()] : []
    ]
  };
}
function e2(e, t, r, n) {
  const i = Wv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
function t2(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: c,
    runtime: d,
    sceneV2: u,
    shotEditor: f,
    state: g,
    studio: _,
    type: m,
    uiState: p
  } = e;
  let E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X, se, be, we, C, ae, b, S = 0;
  function $() {
    p.toolButtons.forEach((j) => {
      const de = j.attr === "data-tool-mode", _e = j.attr === "data-paint-tool", ke = j.attr === "data-mask-tool";
      j.active = de ? j.value === r.primaryTool : _e ? j.key === r.paintTool : ke ? j.key === r.maskTool : !1, j.pressed = j.active ? "true" : j.pressed == null ? null : "false";
    });
  }
  function H() {
    if (_ && ji(p.toolButtons, "value", "add-camera", { disabled: G() }), m !== "cutout") return;
    const j = z();
    ji(p.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: j ? "Look At Frame" : "Add Frame",
      tip: j ? "Look at frame" : "Add frame",
      icon: j ? Ge.camera : Ge.plus_circle
    });
  }
  function v() {
    const j = GN({
      spaceView: pe(),
      spaceMode: il(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    p.space && Object.assign(p.space, j.space);
    for (const [de, _e] of Object.entries(j.buttons)) ji(p.floatingButtons, "action", de, _e);
  }
  function w() {
    var _e;
    const j = WN({ hasShot: !!z(), erp: oe(), hidden: G() && !U(), studio: _ });
    r.mode === "frame" && j.disabled && (_ ? ee(z()) : r.mode = "pano"), r.outputPreviewRect = null, p.viewButtons.forEach((ke) => {
      const ue = ke.key === r.mode;
      ke.pressed = ue ? "true" : "false", ke.visible = !(ke.key === "frame" && !f), ke.key === "frame" ? Object.assign(ke, j) : ke.disabled = !1;
    });
    const de = f && r.mode === "frame" ? z() : null;
    p.frameRail.visible = !!de, p.frameRail.disabled = c || (de == null ? void 0 : de.locked) === !0, p.frameRollKnob.visible = !!de && !c && de.locked !== !0, p.frameRollKnob.disabled = c || (de == null ? void 0 : de.locked) === !0, p.frameRollKnob.rollDeg = Number((de == null ? void 0 : de.roll_deg) ?? (de == null ? void 0 : de.rot_deg) ?? 0), p.frameRollKnob.displayValue = Zi(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((_e = r.interaction) == null ? void 0 : _e.kind) === "roll_frame", p.frameRollKnob.armed = !!de && r.altModifier === !0, p.frameRail.rollKnob = p.frameRollKnob, p.frameRail.aspectLabel = de ? Tr(de) : "", p.frameRail.aspectChoices = Ug(de ? String(Tr(de)) : null, { erp: _, coverage: g.coverage }), de || (p.frameRail.aspectOpen = !1), p.outputPreviewToggle.visible = m === "cutout" && r.mode !== "frame" && !!z(), f && p.cameraPreview && (p.cameraPreview.visible = r.mode !== "frame" && E(), p.cameraPreview.expanded = !!r.outputPreviewExpanded, p.cameraPreview.settled = p.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), v(), T() ? ae(r.pointerPos) : se(r.mode === "pano" ? "grab" : "default");
  }
  function L() {
    var de;
    const j = r.mode === "frame" ? z() : null;
    p.frameRollKnob.visible = !!j && !c && j.locked !== !0, p.frameRollKnob.rollDeg = Number((j == null ? void 0 : j.roll_deg) ?? (j == null ? void 0 : j.rot_deg) ?? 0), p.frameRollKnob.displayValue = Zi(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((de = r.interaction) == null ? void 0 : de.kind) === "roll_frame", p.frameRollKnob.armed = !!j && r.altModifier === !0;
  }
  function M() {
    $();
    const j = $N({
      editor: r,
      swatches: Al,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: fr,
      colorsApproximatelyEqual: rl,
      rgb01ToHsv: fu,
      hsv01ToRgb: du,
      getBrushPresetIdForTool: W,
      isActiveLassoTool: Y
    });
    if (Object.assign(p.paintDock, j), C(), !j.visible) {
      i && (i.hidden = !0);
      return;
    }
    S && (clearTimeout(S), S = 0), o && (!j.colorEnabled && i && !i.hidden && (S = window.setTimeout(() => {
      i.hidden = !0, p.paintDock.colorPopOpen = !1, S = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", j.pickerHueColor), i.style.setProperty("--picker-sat", j.pickerSat), i.style.setProperty("--picker-val", j.pickerVal), i.style.setProperty("--picker-hue", j.pickerHue)), a && (a.style.left = j.pickerSvLeft, a.style.top = j.pickerSvTop), s && (s.style.left = j.pickerHueLeft));
  }
  function P() {
    const j = I(f && r.mode === "frame" ? z() : ce());
    j && (r.panelLastValues = {
      yaw_deg: Number(j.yaw_deg || 0),
      pitch_deg: Number(j.pitch_deg || 0),
      hFOV_deg: Number(j.hFOV_deg || (m === "stickers" ? 30 : 90)),
      vFOV_deg: Number(j.vFOV_deg || (m === "stickers" ? 30 : 60)),
      rot_deg: Number(j.rot_deg || 0),
      roll_deg: Number(j.roll_deg || 0),
      aspect_id: Tr(j)
    }, A());
  }
  function A() {
    be(), we(), re();
  }
  function B() {
    const j = f && r.mode === "frame" ? z() : null;
    return [...O(), X(), j].some((de) => Z(de) ? Gs(de) : V(de) && G() && Gs(g.camera));
  }
  function re() {
    if (n) return;
    g.ui_settings = g.ui_settings || {};
    const j = VN(g.ui_settings);
    if (l) {
      p.sidePanel = zN({
        coverage: g.coverage,
        uiSettings: j,
        normalizeCoverageValue: kn
      });
      return;
    }
    const de = ce(), _e = f && r.mode === "frame" ? z() : null, ke = _e || de, ue = _e ? [_e] : O(), ve = _e ? "shot" : fe();
    if (ue.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), ke && ve !== "stroke") {
      const ye = I(ke);
      r.panelLastValues = {
        yaw_deg: Number(ye.yaw_deg || 0),
        pitch_deg: Number(ye.pitch_deg || 0),
        hFOV_deg: Number(ye.hFOV_deg || (ve === "image" ? 30 : 90)),
        vFOV_deg: Number(ye.vFOV_deg || (ve === "image" ? 30 : 60)),
        rot_deg: Number(ye.rot_deg || 0),
        roll_deg: Number(ye.roll_deg || 0),
        aspect_id: Tr(ye)
      }, Z(ke) && (r.panelLastValues.opacity = xi(ke, r.frame).opacity * 100);
    }
    const Ne = r.panelLastValues || (m === "stickers" || ve === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), h = ve === "stroke" ? null : ke, R = X(), N = t && (ve === "shot" || ve === "frame") && Q(), y = R ? _1(R, r.frame) : N ? { ...h, ...y1(g.camera, r.frame), vFOV_deg: h.vFOV_deg } : Z(h) ? r.panelLastValues : h || Ne, D = R ? b(R) : !!h && !x(h);
    r.panelWasEnabled = D, H();
    let le = null;
    if (_e) {
      const ye = J({ item: _e, kind: "shot", label: "Frame" });
      le = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ye.label,
        currentIcon: ye.icon || null,
        items: [{
          id: String(_e.id || ""),
          label: ye.label,
          icon: ye.icon || null,
          active: !0
        }]
      };
    } else if (m === "stickers" || m === "cutout") {
      const ye = [{
        id: "",
        label: m === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (m === "stickers") {
        const Le = z();
        Le && ye.push({ id: Le.id, label: "Camera", icon: F("frame"), item: Le, kind: "frame" }), K().forEach((Re, He) => {
          var Ve, Ie;
          if (!Re || Z(Re) && !Re.visible) return;
          const ze = u ? zc(Re) : ie(Re) ? String(Re.id || xd) : String(((Ie = (Ve = g.assets) == null ? void 0 : Ve[Re.asset_id]) == null ? void 0 : Ie.name) || Re.asset_id || Re.id), q = `${He + 1}. ${ze}${ie(Re) && Se(Re) ? " (hidden)" : ""}`, Ce = J({ item: Re, label: q, kind: "image" });
          ye.push({ id: Re.id, label: Ce.label, icon: Ce.icon, item: Re, kind: "image" });
        });
      } else
        k().forEach((Le) => {
          if (!(Le != null && Le.item)) return;
          const Re = J(Le);
          ye.push({ id: Le.item.id, label: Re.label, icon: Re.icon, item: Le.item, kind: Le.kind });
        });
      const Me = (h == null ? void 0 : h.id) || "", Ae = R ? { label: zc(R), icon: Ge.globe } : ye.find((Le) => Le.id === Me) || ye[0];
      le = {
        label: "Selection",
        open: !1,
        disabled: ye.length <= 1,
        currentLabel: Ae.label,
        currentIcon: Ae.icon || null,
        items: ye.map((Le) => ({
          id: Le.id,
          label: Le.label,
          icon: Le.icon || null,
          active: Le.id === Me
        }))
      };
    }
    const ge = [], he = (ye, Me, Ae, Le, Re) => {
      const He = Ee(Number(y[ye] || 0), Ae, Le);
      ge.push({
        key: ye,
        label: Me,
        min: Ae,
        max: Le,
        step: Re,
        value: He,
        displayValue: Zi(He),
        fillPct: Ee((He - Ae) / Math.max(1e-6, Le - Ae) * 100, 0, 100),
        enabled: D && !c
      });
    }, ne = [];
    if (R) {
      for (const [ye, Me] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ae = vc(y[ye]);
        he(ye, Me, -Ae, Ae, 0.01);
      }
      he("yaw_deg", "Yaw", -180, 180, 0.1), he("pitch_deg", "Pitch", -90, 90, 0.1), he("roll_deg", "Roll", -180, 180, 0.1), he("scale", "Scale", Fg, vc(y.scale), 0.01), he("opacity", "Opacity", 0, 100, 1);
    } else if (ue.length > 1)
      ne.push(`Selected objects: ${ue.length}`), ne.push("Multi-selection supports z-order and delete.");
    else {
      const ye = ve === "shot" || ve === "frame";
      if (N)
        for (const [Me, Ae] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Le = vc(y[Me]);
          he(Me, Ae, -Le, Le, 0.01);
        }
      he("yaw_deg", "Yaw", -180, 180, 0.1), he("pitch_deg", "Pitch", -90, 90, 0.1), he(ve === "image" || m === "stickers" && !ye ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), he("hFOV_deg", "H FOV", 1, 179, 0.1), he("vFOV_deg", "V FOV", 1, 179, 0.1), ye && ge.forEach((Me) => {
        Me.enabled = Me.enabled && KN(Me.key, { erp: oe() });
      }), u && !ye && he("opacity", "Opacity", 0, 100, 1);
    }
    p.sidePanel = BN({
      coverage: g.coverage,
      readOnly: c,
      selectionPicker: le,
      enabled: D,
      selectedKind: R ? "world" : ve,
      selectedItems: ue,
      params: ge,
      notes: ne,
      uiSettings: j,
      normalizeCoverageValue: kn
    });
  }
  function me() {
    const { canUndo: j, canRedo: de } = te();
    ji(p.toolButtons, "value", "undo", { disabled: !j }), ji(p.toolButtons, "value", "redo", { disabled: !de });
  }
  return {
    connect(j) {
      ({
        cameraPreviewShown: E,
        cameraShoots: U,
        getActiveCutoutShot: z,
        getBrushPresetIdForTool: W,
        getCutoutInspectorItems: k,
        getHistoryCapabilities: te,
        getList: K,
        getSelected: ce,
        getSelectedItems: O,
        getSelectedKind: fe,
        getSelectionItemIcon: F,
        getSelectionItemLabelData: J,
        hasCamera: G,
        hasSpaceContent: Q,
        isActiveLassoTool: Y,
        isErpCamera: oe,
        isExternalSticker: ie,
        isItemLocked: x,
        isPaintCursorEnabled: T,
        isSceneSticker: Z,
        isShotItem: V,
        isSpaceView: pe,
        isStickerHidden: Se,
        leaveFrameView: ee,
        poseOf: I,
        selectedWorldSticker: X,
        setCanvasCursor: se,
        syncCutoutShot: be,
        syncTimeline: we,
        syncVideoTransportVisibility: C,
        updateCursor: ae,
        worldStickerEditable: b
      } = j);
    },
    syncLookAtFrameButtonState: H,
    syncFloatingViewButtonState: v,
    syncViewToggleState: w,
    syncFrameRollKnob: L,
    syncPaintUi: M,
    syncSidePanelControls: P,
    updateSidePanel: A,
    inspectorTimed: B,
    syncSidePanelModel: re,
    syncUndoRedoButtons: me
  };
}
function n2(e) {
  const {
    capture: t,
    cutoutV2: r,
    editor: n,
    node: i,
    readOnly: o,
    sceneV2: a,
    state: s,
    stateV2: l,
    studio: c,
    timeline: d,
    timelinePlayhead: u,
    uiState: f,
    videoEl: g,
    videoTimelineFps: _
  } = e;
  let m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe;
  function ie() {
    if (!l || o) return;
    const H = T(), v = d.selection, w = v && Z(v.owner);
    if (v) {
      const L = w ? V(v) : [];
      v.frames = v.frames.filter((M) => L.some((P) => w[P].keyframes.some((A) => A.frame === M))), v.frames.length || (d.selection = null);
    }
    f.timeline = QN(s, {
      span: H,
      selection: d.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: d.expanded ?? x(),
      openRows: d.openRows,
      audio: X() && f.videoTransport.hasAudio ? { muted: g.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: _(i) !== null || Om(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: E(),
      cameraHideable: c,
      stickers: !r,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: a && !!Pl(i).scene && !Y(),
      sceneLocked: !!t
    }), f.easing = d.selection ? e2(w, V(d.selection), d.selection.frames, pe(d.selection.owner)) : null;
  }
  function x() {
    return Xv(s, { cameraOnly: r, camera: c });
  }
  function T(H = null) {
    if (t != null && t.frames) return t.frames;
    const v = s.timeline.fps, w = s.stickers.find(z), L = w ? p() : null, M = Math.max(
      f.videoTransport.ready && !Q() ? Math.round(Number(f.videoTransport.duration || 0) * v) : 0,
      L ? zm(w.clip, v, L.meta) : 0,
      oe()
    );
    return Zh(s, { minimum: Math.round(v * 5), frames: M, openClip: H, camera: r && !t || c });
  }
  function Z(H) {
    return H === "camera" ? E() ? s.camera : null : H === "scene" ? a ? s.scene : null : s.stickers.find((v) => v.id === H) || null;
  }
  function V(H) {
    return H.lane ? [H.lane] : fo(Z(H.owner));
  }
  function pe(H) {
    if (H === "camera") return 0;
    const { clip: v } = Z(H);
    return v.start - v.in;
  }
  function Se(H) {
    return `${co(H, n.frame)}:${H.start - H.in}`;
  }
  function ee(H) {
    const v = Z(H);
    return !!v && v.locked !== !0;
  }
  function I(H) {
    const v = Math.max(0, Math.round(H));
    if (v === n.frame) return;
    fe(), n.frame = v, u.frame.value = v, fe();
    const w = [n.selectedId, n.worldSelectedId];
    ce(), W(), w[0] !== n.selectedId || w[1] !== n.worldSelectedId ? G() : U() && F(), J(), O({ reason: dt.PLAYHEAD });
  }
  function X() {
    return g instanceof HTMLVideoElement && !!g.getAttribute("src");
  }
  function se(H) {
    K(), k.seek(H);
  }
  function be() {
    l && k.stop();
  }
  function we() {
    K(), k.toggle();
  }
  function C() {
    fe(), W(), G(), J(), O();
  }
  function ae() {
    te(), m(), C();
  }
  function b() {
    const { selection: H } = d;
    ee(H.owner) && (be(), Hv(Z(H.owner), V(H), H.frames, n.frame - pe(H.owner)), d.selection = null, ae());
  }
  function S(H) {
    const v = uo(H);
    if (v === null || v === s.timeline.fps) return;
    be();
    const w = Math.round(n.frame * v / s.timeline.fps);
    d1(s, v), d.selection = null, k.seek(w), ae();
  }
  function $() {
    const H = _(i);
    H !== null && H !== s.timeline.fps && S(H);
  }
  return {
    connect(H) {
      ({
        commitAndRefreshNode: m,
        getPortMedia: p,
        hasCamera: E,
        inspectorTimed: U,
        isExternalSticker: z,
        markObjectVisualsDirty: W,
        playback: k,
        pushHistory: te,
        refreshModalVideoSource: K,
        releaseHiddenSelection: ce,
        requestDraw: O,
        syncCutoutShot: fe,
        syncSidePanelModel: F,
        updateSelectionMenu: J,
        updateSidePanel: G,
        upstreamBackground: Q,
        upstreamLinked: Y,
        upstreamSpanFrames: oe
      } = H);
    },
    syncTimeline: ie,
    timelineTimed: x,
    timelineSpanFrames: T,
    timelineOwner: Z,
    selectedLanes: V,
    timelineOffset: pe,
    clipView: Se,
    timelineEditable: ee,
    setTimelineFrame: I,
    jumpTimelineTo: se,
    stopTimelinePlayback: be,
    togglePlayback: we,
    refreshTimelineEdit: C,
    commitTimelineEdit: ae,
    deleteSelectedKeyframes: b,
    changeTimelineFps: S,
    applyVideoTimelineFps: $
  };
}
function r2(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    studio: a,
    timeline: s,
    uiState: l
  } = e;
  let c, d, u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T;
  function Z(V) {
    if (!(n || !o)) {
      if (V.type === "seek") {
        if (V.phase === "move") {
          s.scrubFrame = V.frame, t.request("seek");
          return;
        }
        t.cancel(), V.phase === "start" && E(), p.seek(V.frame);
        return;
      }
      if (V.type === "play") {
        oe();
        return;
      }
      if (V.type === "mute") {
        ie(), fe();
        return;
      }
      if (V.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? Y()), s.selection = null, fe();
        return;
      }
      if (V.type === "toggle-row") {
        s.openRows.has(V.id) ? s.openRows.delete(V.id) : s.openRows.add(V.id), fe();
        return;
      }
      if (V.type === "toggle-visible") {
        if (V.id === Yg) i.painting_visible = !i.painting_visible;
        else {
          const pe = G(V.id);
          if (!pe || V.id === "camera" && !a) return;
          pe.visible = !pe.visible;
        }
        z(), f();
        return;
      }
      if (V.type === "select-row") {
        const pe = i.stickers.find((Se) => Se.id === V.id);
        if (pe && !pe.visible || V.id === "camera" && !c()) return;
        pe && !co(pe.clip, r.frame) && m(pe.clip.start), (pe == null ? void 0 : pe.placement) === "world" ? k(pe.id) : V.id === "camera" ? K(g()) : K(_().find((Se) => Se.id === V.id) || null), O(), s.selection = null, T(), x(), W();
        return;
      }
      if (V.type === "select-keys") {
        const pe = J(V.owner), Se = V.frames.map((X) => X - pe), ee = s.selection, I = (ee == null ? void 0 : ee.owner) === V.owner && ee.lane === V.lane;
        if (V.additive && I) {
          const X = new Set(ee.frames);
          for (const se of Se)
            X.has(se) ? X.delete(se) : X.add(se);
          ee.frames = [...X].sort((se, be) => se - be);
        } else
          s.selection = Se.length ? { owner: V.owner, lane: V.lane, frames: Se } : null;
        fe();
        return;
      }
      if (V.type === "move-keys") {
        const pe = s.selection;
        if (!pe || !F(pe.owner)) return;
        const Se = G(pe.owner), ee = te(pe);
        if (V.phase === "start") {
          ce(), s.drag = { keyframes: ee.map((se) => structuredClone(Se[se].keyframes)), frames: pe.frames };
          return;
        }
        const { drag: I } = s;
        if (!(I != null && I.keyframes)) return;
        ee.forEach((se, be) => {
          Se[se].keyframes = structuredClone(I.keyframes[be]);
        });
        const X = Gv(Se, ee, I.frames, V.delta, -J(pe.owner));
        if (pe.frames = I.frames.map((se) => se + X), V.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, X ? f() : U();
        return;
      }
      if (V.type === "clip") {
        const pe = V.id === "scene" ? G("scene") : i.stickers.find((X) => X.id === V.id);
        if (!pe || pe.locked) return;
        if (V.phase === "start") {
          ce(), s.drag = { clip: { ...pe.clip }, span: Q(pe.clip) };
          return;
        }
        const { drag: Se } = s;
        if (!(Se != null && Se.clip)) return;
        const ee = Se.clip, I = u(pe.clip);
        if (pe.clip = { ...ee }, V.delta && V.mode === "move" ? Uv(pe.clip, V.delta) : V.delta && V.mode === "start" ? Bv(pe.clip, ee.start + V.delta) : V.delta && Yv(pe.clip, (ee.duration === null ? Se.span : ee.start + ee.duration) + V.delta, Se.span), V.phase !== "end") {
          t.request("timeline"), u(pe.clip) !== I && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, z(), JSON.stringify(pe.clip) !== JSON.stringify(ee) ? f() : U();
        return;
      }
      if (V.type === "key-row") {
        if (V.owner === "scene" || !F(V.owner)) return;
        ce(), $v(G(V.owner), r.frame - J(V.owner)), f();
        return;
      }
      if (V.type === "fps") {
        const pe = Zv(V.fps);
        if (pe === null || pe === i.timeline.fps || l.timeline.fpsLocked) {
          fe();
          return;
        }
        d(pe);
        return;
      }
      if (V.type === "length") {
        const pe = Qv(V.length);
        if (pe === void 0 || pe === i.timeline.length) {
          fe();
          return;
        }
        ce(), i.timeline.length = pe, f();
        return;
      }
      if (V.type === "easing") {
        const pe = s.selection;
        if (!pe || !F(pe.owner)) return;
        ce(), Kv(G(pe.owner), te(pe), pe.frames, V.easing), V.commit ? f() : U();
      }
    }
  }
  return {
    connect(V) {
      ({
        cameraShoots: c,
        changeTimelineFps: d,
        clipView: u,
        commitTimelineEdit: f,
        getActiveCutoutShot: g,
        getList: _,
        jumpTimelineTo: m,
        playback: p,
        refreshModalVideoSource: E,
        refreshTimelineEdit: U,
        releaseHiddenSelection: z,
        requestDraw: W,
        selectWorldSticker: k,
        selectedLanes: te,
        setSelectedItem: K,
        stopTimelinePlayback: ce,
        syncFloatingViewButtonState: O,
        syncTimeline: fe,
        timelineEditable: F,
        timelineOffset: J,
        timelineOwner: G,
        timelineSpanFrames: Q,
        timelineTimed: Y,
        togglePlayback: oe,
        toggleVideoMuted: ie,
        updateSelectionMenu: x,
        updateSidePanel: T
      } = V);
    },
    onTimelineAction: Z
  };
}
function i2(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: a,
    readOnly: s,
    state: l,
    stateWidget: c
  } = e;
  let d, u, f, g;
  function _() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = kn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), m(), o.setDirtyCanvas(!0, !0));
  }
  function m() {
    var k;
    if (s) return;
    f(), am(l), l.coverage = kn(l.coverage), om(o, l.active);
    const W = sm(o, l);
    c && !lm(o, W, String(c.value ?? ""), { rebased: n }) && (c.value = W, (k = c.callback) == null || k.call(c, W));
  }
  function p() {
    l.ui_settings = BP(l.ui_settings), s || m();
  }
  function E() {
    var W;
    s || (m(), (W = o.setDirtyCanvas) == null || W.call(o, !0, !0));
  }
  function U() {
    s || d() && g().catch((W) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", W);
    });
  }
  function z(W = {}) {
    var K, ce, O, fe, F, J, G, Q, Y;
    const k = W.syncPreview !== !1, te = W.syncGraph !== !1;
    k && ((ce = (K = o.__panoPreviewNodeRuntime) == null ? void 0 : K.requestDraw) == null || ce.call(K), (fe = (O = o.__panoDomPreview) == null ? void 0 : O.requestDraw) == null || fe.call(O), (F = o.setDirtyCanvas) == null || F.call(o, !0, !1)), te && ((G = (J = o.graph) == null ? void 0 : J.setDirtyCanvas) == null || G.call(J, !0, !0), (Y = (Q = t == null ? void 0 : t.canvas) == null ? void 0 : Q.setDirty) == null || Y.call(Q, !0, !0));
  }
  return {
    connect(W) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        syncCutoutShot: f,
        syncPaintingLayerAsync: g
      } = W);
    },
    apply: _,
    commitState: m,
    persistUiSettings: p,
    commitAndRefreshNode: E,
    triggerBackgroundPersistenceOnClose: U,
    syncCoverageChangeToNodePreviews: z
  };
}
function o2(e) {
  const {
    cutoutV2: t,
    editor: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    studio: a,
    type: s,
    uiState: l
  } = e;
  let c, d, u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X, se;
  function be(H, v, w = "Clear") {
    return new Promise((L) => {
      l.confirmDialog = {
        visible: !0,
        title: String(H || ""),
        text: String(v || ""),
        confirmLabel: String(w || "Confirm"),
        resolve: L
      };
    });
  }
  async function we() {
    var w, L;
    if (n || !await be(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = lo(null), oe();
    const v = u();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((M) => M.placement === "world" || v.includes(M)) : v, i || (o.assets = {}), r.selectedId = ((w = v[0]) == null ? void 0 : w.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = ((L = v[0]) == null ? void 0 : L.id) || null, x();
    else {
      const M = s1(o.shots, o.active.selected_shot_id);
      o.stickers = v, o.assets = {}, o.shots = M.shots, r.selectedId = M.selectedShotId, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = M.selectedShotId, !M.selectedShotId && r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, x();
    }
    T(), f(), X(), I(), Z();
  }
  async function C(H) {
    var P, A, B, re;
    if (n) return;
    const v = H === "mask" ? "mask" : "paint", w = v === "mask" ? "Mask" : "Paint", L = U(v);
    if (!(!L.length && !(((P = r.interaction) == null ? void 0 : P.kind) === "draw" && ((A = r.interaction) == null ? void 0 : A.layerKind) === v) || !await be(
      `Clear ${w}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${w}`
    ))) {
      if (((B = r.interaction) == null ? void 0 : B.kind) === "draw" && ((re = r.interaction) == null ? void 0 : re.layerKind) === v) {
        const me = _(r.interaction);
        me && r.paintEngine.cancelActiveStroke(me), r.interaction = null;
      }
      L.length = 0, o.painting.raster_objects = z().filter((me) => String((me == null ? void 0 : me.layerKind) || "paint") !== v), v === "paint" && (E().length = 0), oe(), T(), f(), X(), I(), ee(), Z();
    }
  }
  function ae() {
    if (n) return;
    const H = W();
    if (!H || !F(H) || te(H) || i && G(H)) return;
    let v;
    i ? v = M1(H, pi("st"), p()) : (v = JSON.parse(JSON.stringify(H)), v.id = pi("st"), v.yaw_deg = jt((v.yaw_deg || 0) + 8), v.z_index = p()), o.stickers.push(v), o.active.selected_sticker_id = v.id, r.selectedId = v.id, r.selectedIds = [v.id], Q(), T(), f(), I(), X(), Z();
  }
  function b() {
    const H = V();
    return H ? (se(H) && (pe(), x1(o, H.id), d(), Q(), T(), f(), X(), I(), Se(), Z()), !0) : !1;
  }
  function S() {
    var w, L, M, P, A;
    if (n || t) return;
    const H = k(), v = W();
    if (!(!v && H.length === 0) && !H.some((B) => K(B))) {
      if (pe(), H.length > 1) {
        const B = new Set(H.filter((j) => J(j)).map((j) => String(j.actionGroupId || j.id || ""))), re = new Set(H.filter((j) => ce(j)).map((j) => ie(j.rasterObjectId || j.id || ""))), me = new Set(H.filter(F).map((j) => String(j.id || "")));
        B.size > 0 && (o.painting.paint.strokes = (Array.isArray((L = (w = o.painting) == null ? void 0 : w.paint) == null ? void 0 : L.strokes) ? o.painting.paint.strokes : []).filter((j) => !B.has(String((j == null ? void 0 : j.actionGroupId) || ""))), o.painting.groups = E().filter((j) => !B.has(String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || ""))), oe()), re.size > 0 && (o.painting.raster_objects = z().filter((j) => !re.has(String((j == null ? void 0 : j.id) || ""))), Y()), me.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((j) => me.has(String((j == null ? void 0 : j.id) || "")) ? te(j) ? (fe(j) || (j.visible = !1), !0) : !1 : !0), x(), Q()), r.selectedId = null, r.selectedIds = [], T(), f(), X(), I(), Z();
        return;
      }
      if (J(v)) {
        const B = String(v.actionGroupId || v.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((P = (M = o.painting) == null ? void 0 : M.paint) == null ? void 0 : P.strokes) ? o.painting.paint.strokes : []).filter((re) => String((re == null ? void 0 : re.actionGroupId) || "").trim() !== B), o.painting.groups = E().filter((re) => String((re == null ? void 0 : re.actionGroupId) || (re == null ? void 0 : re.id) || "").trim() !== B), oe(), r.selectedId = null, r.selectedIds = [], T(), f(), X(), I(), Z();
        return;
      }
      if (ce(v)) {
        const B = ie(v.rasterObjectId || v.id || "");
        o.painting.raster_objects = z().filter((re) => String((re == null ? void 0 : re.id) || "").trim() !== B), Y(), r.selectedId = null, r.selectedIds = [], T(), f(), X(), I(), Z();
        return;
      }
      if (a && O(v)) {
        g();
        return;
      }
      if (s === "stickers" || F(v)) {
        if (te(v)) {
          if (fe(v)) return;
          v.visible = !1, Q(), T(), f(), X(), I(), Z();
          return;
        }
        o.stickers = o.stickers.filter((B) => B.id !== v.id), x(), Q(), r.selectedId = ((A = m()[0]) == null ? void 0 : A.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = r.selectedId, T(), f(), X(), I(), Z();
        return;
      }
      c();
    }
  }
  function $() {
    r.primaryTool !== "cursor" && (r.primaryTool = "cursor", ee(), X());
  }
  return {
    connect(H) {
      ({
        clearCutoutFrame: c,
        clearWorldSelection: d,
        collectExternalStickersForClearAll: u,
        commitAndRefreshNode: f,
        deleteStudioCamera: g,
        getActivePaintTargetDescriptor: _,
        getList: m,
        getNextStickerZIndex: p,
        getPaintingGroupList: E,
        getPaintingLayerList: U,
        getRasterObjectList: z,
        getSelected: W,
        getSelectedItems: k,
        isExternalSticker: te,
        isItemLocked: K,
        isRasterObjectItem: ce,
        isShotItem: O,
        isStickerHidden: fe,
        isStickerItem: F,
        isStrokeGroupItem: J,
        isUploadingSticker: G,
        markObjectVisualsDirty: Q,
        markPaintCompositeVisualsDirty: Y,
        markPaintStrokeVisualsDirty: oe,
        parseRasterObjectSelectionId: ie,
        pruneUnusedAssets: x,
        pushHistory: T,
        requestDraw: Z,
        selectedWorldSticker: V,
        stopTimelinePlayback: pe,
        syncFloatingViewButtonState: Se,
        syncPaintUi: ee,
        updateSelectionMenu: I,
        updateSidePanel: X,
        worldStickerEditable: se
      } = H);
    },
    clearAll: we,
    clearPaintingLayer: C,
    duplicateSelected: ae,
    deleteSelectedWorldSticker: b,
    deleteSelected: S,
    forceCursorTool: $
  };
}
function a2(e) {
  const {
    api: t,
    canvas: r,
    cutoutV2: n,
    dragCue: i,
    editor: o,
    editorView: a,
    imageCache: s,
    node: l,
    readOnly: c,
    sceneV2: d,
    stageWrap: u,
    state: f,
    type: g,
    vueModal: _
  } = e;
  let m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T;
  function Z(P) {
    return bd(P == null ? void 0 : P.dataTransfer);
  }
  function V(P) {
    const A = !!P;
    i.active !== A && (i.active = A, u.classList.toggle("drop-active", A));
  }
  function pe() {
    const P = new Set(
      (f.stickers || []).map((A) => String((A == null ? void 0 : A.asset_id) || "")).filter((A) => !!A)
    );
    Object.keys(f.assets || {}).forEach((A) => {
      P.has(A) || (delete f.assets[A], s.delete(A));
    });
  }
  async function Se(P) {
    if (c || n || g !== "stickers" && g !== "cutout" || !Zn(P)) return;
    if (d) {
      ie(), await be(P);
      return;
    }
    const A = pi("asset"), B = To(l, `add:${A}`, async () => {
      try {
        const { image: re } = await Do(P);
        s.set(A, re);
        const me = pi("st");
        f.stickers.push({
          id: me,
          asset_id: A,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: E(30, Number(re.naturalWidth || re.width || 1), Number(re.naturalHeight || re.height || 1)),
          rot_deg: 0,
          z_index: k()
        }), Q(f.stickers[f.stickers.length - 1]), W(), T(), x(), J();
        const j = await fi(P, {
          fetchApi: (ke, ue) => t.fetchApi(ke, ue)
        });
        if (!(Array.isArray(f.stickers) ? f.stickers : []).filter((ke) => String((ke == null ? void 0 : ke.asset_id) || "") === A).length) return;
        f.assets[A] = j, pe(), F(), p(), T(), x(), J();
      } catch (re) {
        delete f.assets[A], s.delete(A);
        const me = Array.isArray(f.stickers) ? f.stickers : [], j = me.filter((de) => String((de == null ? void 0 : de.asset_id) || "") === A);
        throw j.length && (f.stickers = me.filter((de) => String((de == null ? void 0 : de.asset_id) || "") !== A), j.some((de) => String((de == null ? void 0 : de.id) || "") === String(o.selectedId || "")) && Q(null), T(), x(), J(), p()), re;
      }
    });
    try {
      await B;
    } catch {
    }
  }
  function ee() {
    var P;
    c || g !== "stickers" && g !== "cutout" || (P = _ == null ? void 0 : _.openImagePicker) == null || P.call(_, "add");
  }
  function I() {
    var P;
    c || !d || (P = _ == null ? void 0 : _.openImagePicker) == null || P.call(_, "add-world");
  }
  async function X(P) {
    c || !d || !Zn(P) || (ie(), await be(P, "world"));
  }
  function se() {
    const P = { x: r.width / 2, y: r.height / 2 }, A = ce() ? a.pick(z(), P.x, P.y, r.width, r.height) : null;
    return K1(Y(), A, U());
  }
  async function be(P, A = "sky") {
    const B = pi("st"), re = To(l, `add:${B}`, async () => {
      const { image: me } = await Do(P), j = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: E(30, Number(me.naturalWidth || me.width || 1), Number(me.naturalHeight || me.height || 1)),
        rot_deg: 0
      }, de = { kind: "file", filename: "" }, _e = A === "world" ? k1(B, de, se()) : Ju(B, de, j, k());
      s.set(oe(_e), me), f.stickers.push(_e), A === "world" ? G(B) : Q(_e), W(), T(), x(), J();
      try {
        const ke = await fi(P, {
          fetchApi: (ve, Ne) => t.fetchApi(ve, Ne)
        }), ue = f.stickers.find((ve) => ve.id === B);
        if (!ue) return;
        ue.source = fs(ke), s.set(oe(ue), me), F(), p();
      } catch (ke) {
        throw f.stickers = f.stickers.filter((ue) => ue.id !== B), o.selectedId === B && Q(null), o.worldSelectedId === B && m(), F(), p(), ke;
      } finally {
        T(), x(), J();
      }
    });
    try {
      await re;
    } catch {
    }
  }
  async function we(P, A) {
    const B = To(l, `replace:${A}:${pi("asset")}`, async () => {
      const { image: re } = await Do(P), me = await fi(P, {
        fetchApi: (de, _e) => t.fetchApi(de, _e)
      }), j = f.stickers.find((de) => de.id === A);
      if (j) {
        j.source = fs(me), j.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const de of [j.size.value, ...j.size.keyframes.map((_e) => _e.value)])
          de.vFOV_deg = E(de.hFOV_deg, Number(re.naturalWidth || re.width || 1), Number(re.naturalHeight || re.height || 1));
        s.set(oe(j), re), fe(), F(), p(), T(), x(), J();
      }
    });
    try {
      await B;
    } catch {
    }
  }
  async function C(P) {
    if (c || g !== "stickers" && g !== "cutout") return;
    const A = te();
    if (!A || !O(A) || K(A) || !Zn(P)) return;
    if (d) {
      await we(P, A.id);
      return;
    }
    const B = String(A.id || ""), re = pi("asset"), me = To(l, `replace:${B}:${re}`, async () => {
      var ve;
      const j = (Array.isArray(f.stickers) ? f.stickers : []).find((Ne) => String((Ne == null ? void 0 : Ne.id) || "") === B) || null;
      if (!j || !O(j) || K(j)) return;
      const de = String(j.asset_id || ""), _e = de ? dn(((ve = f.assets) == null ? void 0 : ve[de]) || null) : null, ke = Number(j.vFOV_deg || 0), ue = j.crop && typeof j.crop == "object" ? { ...j.crop } : null;
      try {
        const { image: Ne } = await Do(P);
        s.set(re, Ne), j.asset_id = re, j.vFOV_deg = E(
          Number(j.hFOV_deg || 30),
          Number(Ne.naturalWidth || Ne.width || 1),
          Number(Ne.naturalHeight || Ne.height || 1)
        ), j.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, fe(), T(), x(), J();
        const h = await fi(P, {
          fetchApi: (N, y) => t.fetchApi(N, y)
        }), R = (Array.isArray(f.stickers) ? f.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === B) || null;
        if (!R || String(R.asset_id || "") !== re) return;
        f.assets[re] = h, pe(), F(), p(), T(), x(), J();
      } catch (Ne) {
        delete f.assets[re], s.delete(re);
        const h = (Array.isArray(f.stickers) ? f.stickers : []).find((R) => String((R == null ? void 0 : R.id) || "") === B) || null;
        throw h && String(h.asset_id || "") === re && (de && _e && (f.assets[de] = _e), h.asset_id = de, h.vFOV_deg = ke, h.crop = ue ? { ...ue } : null), fe(), p(), T(), x(), J(), Ne;
      }
    });
    try {
      await me;
    } catch {
    }
  }
  function ae() {
    var A;
    if (c) return;
    const P = te();
    !P || !O(P) || K(P) || (A = _ == null ? void 0 : _.openImagePicker) == null || A.call(_, "replace");
  }
  async function b() {
    if (c || g !== "stickers") return;
    if (d) {
      await S();
      return;
    }
    const P = f.assets && typeof f.assets == "object" ? f.assets : {}, A = Object.entries(P).filter(([, re]) => {
      const me = String((re == null ? void 0 : re.type) || "").toLowerCase(), j = String((re == null ? void 0 : re.value) || "");
      return me === "dataurl" && j.startsWith("data:image");
    });
    if (!A.length) return;
    let B = !1;
    for (const [re, me] of A)
      try {
        const j = String((me == null ? void 0 : me.value) || "");
        if (!j) continue;
        const de = await fetch(j).then((Ne) => Ne.blob()), _e = String(de.type || "image/png").split("/")[1] || "png", ke = String((me == null ? void 0 : me.name) || `${re}.${_e}`), ue = new File([de], ke, { type: de.type || "image/png" }), ve = await fi(ue, {
          fetchApi: (Ne, h) => t.fetchApi(Ne, h)
        });
        f.assets[re] = {
          ...ve,
          w: Number((me == null ? void 0 : me.w) || 0),
          h: Number((me == null ? void 0 : me.h) || 0)
        }, B = !0;
      } catch {
      }
    B && (p(), J());
  }
  async function S() {
    let P = !1;
    for (const A of f.stickers) {
      const B = A.source.data_url;
      if (B)
        try {
          const re = await fetch(B).then((_e) => _e.blob()), me = String(re.type || "image/png").split("/")[1] || "png", j = new File([re], `${A.id}.${me}`, { type: re.type || "image/png" }), de = await fi(j, {
            fetchApi: (_e, ke) => t.fetchApi(_e, ke)
          });
          A.source = fs(de), P = !0;
        } catch {
        }
    }
    P && (p(), J());
  }
  function $(P) {
    g !== "stickers" && g !== "cutout" || c || (P.preventDefault(), V(!0));
  }
  function H(P) {
    var re;
    if (g !== "stickers" && g !== "cutout" || c) return;
    P.preventDefault(), P.stopPropagation(), i.depth = 0, V(!1);
    const B = Array.from(((re = P.dataTransfer) == null ? void 0 : re.files) || []).find((me) => Zn(me));
    B && Se(B);
  }
  function v(P) {
    g !== "stickers" && g !== "cutout" || c || Z(P) && (i.depth += 1, V(!0), P.preventDefault());
  }
  function w(P) {
    g !== "stickers" && g !== "cutout" || c || (!i.active && Z(P) && V(!0), i.active && P.preventDefault());
  }
  function L(P) {
    if (g !== "stickers" && g !== "cutout" || c || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const A = Number(P.clientX) <= 0 && Number(P.clientY) <= 0;
    (i.depth === 0 || A) && V(!1);
  }
  function M(P) {
    g !== "stickers" && g !== "cutout" || c || (i.depth = 0, V(!1), Z(P) && P.preventDefault());
  }
  return {
    connect(P) {
      ({
        clearWorldSelection: m,
        commitAndRefreshNode: p,
        computeStickerVFov: E,
        contentSphere: U,
        currentSpaceCamera: z,
        forceCursorTool: W,
        getNextStickerZIndex: k,
        getSelected: te,
        isExternalSticker: K,
        isSpaceView: ce,
        isStickerItem: O,
        markObjectVisualsDirty: fe,
        pushHistory: F,
        requestDraw: J,
        selectWorldSticker: G,
        setSelectedItem: Q,
        spaceViewState: Y,
        stickerImageKey: oe,
        stopTimelinePlayback: ie,
        updateSelectionMenu: x,
        updateSidePanel: T
      } = P);
    },
    addImageStickerFromFile: Se,
    addImageSticker: ee,
    addWorldImageSticker: I,
    addWorldStickerFromFile: X,
    replaceSelectedImageFromFile: C,
    replaceSelectedImage: ae,
    migrateLegacyEmbeddedAssets: b,
    pruneUnusedAssets: pe,
    setDropCue: V,
    onCanvasDragOver: $,
    onCanvasDrop: H,
    onWindowDragEnter: v,
    onWindowDragOver: w,
    onWindowDragLeave: L,
    onWindowDrop: M
  };
}
function s2(e) {
  const {
    cameraV2: t,
    canvas: r,
    cutoutV2: n,
    editor: i,
    frameRollKnobEl: o,
    initialShotBase: a,
    readOnly: s,
    runtime: l,
    shotEditor: c,
    stageWrap: d,
    state: u,
    studio: f,
    tooltip: g,
    type: _,
    uiState: m
  } = e;
  let p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X, se, be, we, C, ae, b, S = a;
  function $(y, D) {
    var he;
    const le = (he = K().space) == null ? void 0 : he.gizmo;
    if (G() && le && b("hover", D) !== null && b("down", D))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: le.mode, start: le.transform, base: te(), changed: !1 }, r.setPointerCapture(y.pointerId), we(D), !0;
    const ge = _m(te(), E(pe()));
    return Q1(k(), ge, D, r.width, r.height) ? (G() || (V(de()), ae(), C(), T()), i.interaction = { kind: "world_select" }, r.setPointerCapture(y.pointerId), !0) : !1;
  }
  function H() {
    if (s || _ !== "cutout") return;
    const y = de();
    if (y) {
      V(y), i.mode = "pano", n && Q() ? se(hm(ie(Se(), y.position), z(), r.width, r.height)) : be(jt(Number(y.yaw_deg || 0)), Ee(Number(y.pitch_deg || 0), -89.9, 89.9)), ae(), C(), T({ cause: "cutout_frame" });
      return;
    }
    const D = Ch({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: jt(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    u.shots = [D], V(D), ce(), i.mode = "pano", x(), W(), ae(), C(), T({ cause: "cutout_frame" });
  }
  function v() {
    s || !f || fe() || (ee(), u.camera = h1(Se()), me(), V(de()), ce(), x(), W(), ae(), C(), T({ cause: "cutout_frame" }));
  }
  function w() {
    ee(), u.camera = null, V(null), me(), x(), W(), ae(), C(), T({ cause: "cutout_frame" });
  }
  function L(y, D) {
    f && Y(y) && (u.camera.projection = D === oo ? "erp" : "perspective", D === oo) || A(y, D);
  }
  function M() {
    s || _ !== "cutout" || (u.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, u.active.selected_shot_id = null, x(), W(), ae(), C(), T());
  }
  function P(y, D) {
    const le = l.frameSafeRect;
    if (!y || !le || i.mode !== "frame") return !1;
    const ge = uu * wi(le, y), he = zu($u(le, D), ge);
    return y.hFOV_deg = he.hFOV_deg, y.vFOV_deg = he.vFOV_deg, !0;
  }
  function A(y, D) {
    if (!y || y.locked === !0) return;
    const le = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, ge = (() => {
      const Me = String(y.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(Me)) {
        const [Re, He] = Me.split(":").map((ze) => Number(ze));
        if (Number.isFinite(Re) && Number.isFinite(He)) return Re >= He;
      }
      const Ae = Number(y.hFOV_deg || 64), Le = Number(y.vFOV_deg || 40);
      return Math.abs(Ae - Le) > 1e-6 ? Ae >= Le : Pi(y) >= 1;
    })();
    let [he, ne] = le[String(D)] || le["1:1"];
    he >= ne !== ge && ([he, ne] = [ne, he]);
    const ye = he / ne;
    if (!P(y, ye)) {
      const Me = Ee(Number(y.vFOV_deg || 40), 1, 179);
      y.vFOV_deg = Me, y.hFOV_deg = cs(Me, ye);
    }
    y.aspect_id = `${he}:${ne}`;
  }
  function B(y, D, le) {
    if (!y || y.locked === !0) return !1;
    const ge = la(D, le);
    if (!ge) return !1;
    const he = ge.ratio;
    if (!P(y, he)) {
      const ne = Ee(Number(y.vFOV_deg || 40), 1, 179);
      y.vFOV_deg = ne, y.hFOV_deg = cs(ne, he);
    }
    return y.aspect_id = ge.label, !0;
  }
  function re(y) {
    if (!y || y.locked === !0) return;
    const D = String(y.aspect_id || "").trim(), le = ei(y), ge = le.tanHalfX / Math.max(1e-12, le.tanHalfY), he = 1 / Math.max(1e-12, ge);
    if (!P(y, he)) {
      const ne = Ee(Number(y.vFOV_deg || 60), 1, 179);
      y.vFOV_deg = ne, y.hFOV_deg = cs(ne, he);
    }
    if (/^\d+:\d+$/.test(D)) {
      const [ne, ye] = D.split(":");
      y.aspect_id = `${ye}:${ne}`;
    } else
      y.aspect_id = vi(y);
  }
  function me(y = !0) {
    var ge, he;
    if (!t) return;
    const D = S;
    if (!U()) {
      S = null, (ge = u.shots) != null && ge.length && (u.shots = []), D && j(D, null);
      return;
    }
    const le = (he = u.shots) == null ? void 0 : he[0];
    y && le && S && g1(u.camera, i.frame, le, S), S = rm(u.camera, i.frame), le ? Object.assign(le, S, { position: [...S.position] }) : u.shots = [{ ...S, position: [...S.position] }], D || j(null, S);
  }
  function j(y, D) {
    var ne, ye;
    !D && i.mode === "frame" && oe(y);
    const le = (D == null ? void 0 : D.position) ?? [0, 0, 0];
    if (((ye = (ne = i.viewTransition) == null ? void 0 : ne.end) == null ? void 0 : ye.mode) === "3dof") {
      se({ ...Se(), position: le }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !F()) return;
    const ge = (y == null ? void 0 : y.position) ?? [0, 0, 0];
    if (ge.every((Me, Ae) => Me === le[Ae])) return;
    const he = { ...Se(), position: ge };
    p({ mode: "6dof", position: ge, moved: !0 }), i.viewDistance = he.distance, se({ ...he, position: le }, { mode: "3dof", moved: !1 });
  }
  function de() {
    if (!c) return null;
    const y = Array.isArray(u.shots) ? u.shots : [];
    if (!y.length) return null;
    const D = String(u.active.selected_shot_id || "");
    return y.find((le) => String((le == null ? void 0 : le.id) || "") === D) || y[0] || null;
  }
  function _e(y, D, le = {}) {
    var ne;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot) return;
    y.accumulatedRad += Mh(D, y.lastAngle), y.lastAngle = D;
    const ge = Ph(y.start.roll_deg, y.accumulatedRad, {
      shiftKey: le.shiftKey,
      altKey: y.altStarted ? !1 : le.altKey
    });
    y.shot.roll_deg = ge, y.changed = y.changed || Math.abs(y.accumulatedRad) > 1e-9;
    const he = (((ne = m.sidePanel) == null ? void 0 : ne.params) || []).find((ye) => ye.key === "roll_deg");
    he && (he.value = ge, he.displayValue = Zi(ge), he.fillPct = (ge + 180) / 360 * 100), I(), ve(y), T({ localOnly: !0 });
  }
  function ke(y, D, le = {}) {
    var ne;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot || !y.rollGesture) return;
    const ge = ig(y.rollGesture, D, le);
    if (!ge) return;
    y.rollGesture = ge.gesture, y.center = ge.gesture.center, y.lastAngle = ge.gesture.lastAngle, y.accumulatedRad = ge.gesture.accumulatedRad, y.shot.roll_deg = ge.rollDeg, y.changed = y.changed || Math.abs(ge.gesture.accumulatedRad) > 1e-9;
    const he = (((ne = m.sidePanel) == null ? void 0 : ne.params) || []).find((ye) => ye.key === "roll_deg");
    he && (he.value = ge.rollDeg, he.displayValue = Zi(ge.rollDeg), he.fillPct = (ge.rollDeg + 180) / 360 * 100), I(), ve(y), T({ localOnly: !0 });
  }
  function ue(y, D) {
    const le = Z(y);
    return Math.atan2(le.y - D.y, le.x - D.x);
  }
  function ve(y) {
    var ye, Me;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot) return;
    g.timer && (clearTimeout(g.timer), g.timer = 0), g.target = null;
    const D = O(y.shot), le = (ye = r.getBoundingClientRect) == null ? void 0 : ye.call(r), ge = (Me = d.getBoundingClientRect) == null ? void 0 : Me.call(d);
    if (!D || !le || !ge || r.width <= 0 || r.height <= 0) return;
    const he = le.width / r.width, ne = le.height / r.height;
    m.tooltip.text = `${Zi(y.shot.roll_deg)}°`, m.tooltip.left = le.left - ge.left + (D.x + D.w * 0.5) * he, m.tooltip.top = le.top - ge.top + (D.y + D.h * 0.5) * ne + 12, m.tooltip.variant = "roll", m.tooltip.visible = !0;
  }
  function Ne(y) {
    var ne;
    if (y.button !== 0 || s || i.mode !== "frame") return;
    const D = de();
    if (!D || D.locked === !0) return;
    const le = O(D);
    if (!le) return;
    const ge = { x: le.x + le.w * 0.5, y: le.y + le.h * 0.5 }, he = ue(y, ge);
    i.interaction = {
      kind: "roll_frame",
      shot: D,
      center: ge,
      lastAngle: he,
      accumulatedRad: 0,
      start: { roll_deg: Number(D.roll_deg ?? D.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (ne = o.setPointerCapture) == null || ne.call(o, y.pointerId), y.preventDefault(), I(), ve(i.interaction), T({ localOnly: !0 });
  }
  function h(y) {
    var D;
    ((D = i.interaction) == null ? void 0 : D.kind) !== "roll_frame" || i.interaction.source !== "knob" || _e(
      i.interaction,
      ue(y, i.interaction.center),
      y
    );
  }
  function R() {
    const y = i.interaction;
    (y == null ? void 0 : y.kind) !== "roll_frame" || y.source !== "knob" || (y.changed && (x(), W(), ae()), i.interaction = null, J(), X(), I(), T());
  }
  function N(y) {
    const D = i.mode === "frame" && !s ? de() : null;
    !D || D.locked === !0 || Math.abs(Number(D.roll_deg ?? D.rot_deg ?? 0)) <= 1e-9 || (D.roll_deg = 0, x(), W(), ae(), I(), T(), y.preventDefault());
  }
  return {
    connect(y) {
      ({
        applySpaceMode: p,
        cameraFrustumLength: E,
        cameraShoots: U,
        cameraSphere: z,
        commitAndRefreshNode: W,
        currentSpaceCamera: k,
        cutoutCamera: te,
        editorViewInput: K,
        forceCursorTool: ce,
        getFrameViewRect: O,
        hasCamera: fe,
        hasSpaceContent: F,
        hideTooltip: J,
        isCameraSelected: G,
        isFreeSpaceView: Q,
        isShotItem: Y,
        leaveFrameView: oe,
        lookingAt: ie,
        pushHistory: x,
        requestDraw: T,
        screenPos: Z,
        setSelectedItem: V,
        spaceScale: pe,
        spaceViewState: Se,
        stopTimelinePlayback: ee,
        syncFrameRollKnob: I,
        syncViewToggleState: X,
        transitionView: se,
        turnViewTo: be,
        updateCursor: we,
        updateSelectionMenu: C,
        updateSidePanel: ae,
        worldGizmoPointer: b
      } = y);
    },
    addCutoutFrame: H,
    addStudioCamera: v,
    deleteStudioCamera: w,
    setShotAspect: L,
    clearCutoutFrame: M,
    applyCutoutAspectCustom: B,
    rotateCutoutAspect90: re,
    syncCutoutShot: me,
    getActiveCutoutShot: de,
    startCameraPress: $,
    applySharedRollInteractionPoint: ke,
    onFrameRollKnobPointerDown: Ne,
    onFrameRollKnobPointerMove: h,
    finishKnobRoll: R,
    onFrameRollKnobDoubleClick: N
  };
}
function l2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: a,
    frameRailEl: s,
    paintDockEl: l,
    readOnly: c,
    runtime: d,
    shotEditor: u,
    toolRailEl: f,
    uiState: g,
    videoTransportEl: _
  } = e;
  let m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y = null;
  function oe(w) {
    if (n.mode = "pano", !w) return;
    p();
    const L = F().distance;
    n.viewYaw = jt(w.yaw_deg), n.viewPitch = Ee(w.pitch_deg, -89.9, 89.9), n.viewFov = Ee(w.hFOV_deg, 35, 140), n.spaceMode === "6dof" && m({ mode: "6dof", position: [...w.position], moved: !0 }), n.viewDistance = L, d.backgroundDirty = !0;
  }
  function ie() {
    var ve, Ne, h, R, N;
    if (!r) return null;
    const w = (ve = r.getBoundingClientRect) == null ? void 0 : ve.call(r), L = Number((w == null ? void 0 : w.width) || 0) > 0 ? r.width / w.width : 1, M = Number((w == null ? void 0 : w.height) || 0) > 0 ? r.height / w.height : 1;
    d.frameCanvasScale = Math.min(L, M);
    let P = 24, A = 24;
    const B = Math.max(P + 1, r.width - 24);
    let re = Math.max(A + 1, r.height - 24);
    const me = (Ne = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : Ne.call(f), j = (h = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : h.call(s);
    let de = 24;
    me && w && me.width > 0 && me.height > 0 && (de = Math.max(de, (me.right - w.left) * L + ip)), j && w && j.width > 0 && j.height > 0 && ((R = g.frameRail) == null ? void 0 : R.visible) === !0 && (de = Math.max(de, (w.right - j.left) * L + ip)), P = Math.max(P, de);
    const _e = Math.min(B, r.width - de);
    let ke = 24;
    const ue = (N = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : N.call(a);
    if (ue && w && ue.width > 0 && ue.height > 0 && (ke = Math.max(ke, (ue.bottom - w.top) * M + hc)), [l, _].forEach((y) => {
      var ge;
      if (!y || !w) return;
      const D = getComputedStyle(y);
      if (D.display === "none" || D.visibility === "hidden" || Number(D.opacity) <= 0) return;
      const le = (ge = y.getBoundingClientRect) == null ? void 0 : ge.call(y);
      !le || le.width <= 0 || le.height <= 0 || (ke = Math.max(ke, (w.bottom - le.top) * M + hc));
    }), o && w) {
      const y = getComputedStyle(o);
      y.display !== "none" && y.visibility !== "hidden" && Number(y.opacity) > 0 && (ke = Math.max(ke, (CP + hc) * M));
    }
    return A = Math.max(A, ke), re = Math.max(A + 1, Math.min(re, r.height - ke)), {
      x: P,
      y: A,
      w: Math.max(1, _e - P),
      h: Math.max(1, re - A)
    };
  }
  function x(w = z()) {
    if (!w || !r) return null;
    const L = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return ov(L, w, uu * wi(L, w));
  }
  function T(w = z()) {
    const L = x(w);
    return L ? { x: L.x, y: L.y, w: L.w, h: L.h } : null;
  }
  function Z() {
    return u && !!z();
  }
  function V(w, L) {
    const M = z();
    if (!M || M.locked === !0) return !1;
    const P = Number(L) > 0, A = Ih(M, L);
    if (!A) return !1;
    if (P) {
      const B = uu * wi(
        d.frameSafeRect || { w: r.width, h: r.height },
        A
      ), re = ju({ width: r.width, height: r.height }, B);
      if (re.halfW < r.width * 0.5 - 1e-6 || re.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return M.hFOV_deg = A.hFOV_deg, M.vFOV_deg = A.vFOV_deg, pe(), Q(), !0;
  }
  function pe() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, K(), E(), Q());
    }, 180);
  }
  function Se() {
    return t && n.mode === "frame" && W();
  }
  function ee() {
    const w = z(), L = x(w);
    return w && L ? xm(w, L, { width: r.width, height: r.height }) : null;
  }
  function I() {
    var w;
    return ((w = U()) == null ? void 0 : w.radius) || nr;
  }
  function X(w) {
    const { position: L, yaw_deg: M, pitch_deg: P, roll_deg: A, hFOV_deg: B } = w.shot;
    return { position: L, yaw_deg: M, pitch_deg: P, roll_deg: A, hFOV_deg: B, distance: I() };
  }
  function se(w, L) {
    const { rect: M } = w;
    return i.pickSurface(O(w.shot), L.x - M.x, L.y - M.y, M.w, M.h);
  }
  function be(w, L, M) {
    return Hc(L, se(w, M), null, fe());
  }
  function we(w) {
    return JSON.stringify([X(w), w.rect]);
  }
  function C(w) {
    const L = z();
    L.position = [...w.position], L.yaw_deg = w.yaw_deg, L.pitch_deg = w.pitch_deg;
  }
  function ae(w, L) {
    const M = z();
    !M || c || M.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: M,
      last: w,
      start: { yaw_deg: Number(M.yaw_deg || 0), pitch_deg: Number(M.pitch_deg || 0) },
      changed: !1
    }, G(w), r.setPointerCapture(L));
  }
  function b(w, L, M) {
    const P = ee();
    if (!P || c) return;
    const A = X(P);
    n.interaction = w === "orbit" ? { kind: "frame_orbit", last: L, pivot: be(P, A, L), changed: !1 } : { kind: "frame_pan", last: L, depth: cm(A, fe()), changed: !1 }, G(L), r.setPointerCapture(M);
  }
  function S(w, L) {
    const M = ee();
    if (!M) return;
    const P = X(M), A = L.x - w.last.x, B = L.y - w.last.y;
    C(w.kind === "frame_pan" ? fm(P, A, B, M.rect.w, M.rect.h, w.depth) : dm(P, A, B, r.height, w.pivot)), w.changed = w.changed || A !== 0 || B !== 0, w.last = L, ce({ localOnly: !0, cause: "frame_view" });
  }
  function $(w, L) {
    const M = ee();
    if (!M || c) return;
    const P = X(M), A = performance.now(), B = { x: w.x, y: w.y, time: A, key: i.contentRevision(), view: we(M) };
    if (!um(Y, B)) {
      const re = se(M, w);
      Y = { ...B, cost: performance.now() - A, hit: re };
    }
    C(pm(P, Hc(P, Y.hit, null, fe()), L, fe())), Y.view = we(ee() ?? M), Y.wheelTime = A, pe(), Q(), ce({ localOnly: !0, cause: "frame_view" });
  }
  function H() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, K(), E(), Q(), !0) : !1;
  }
  function v() {
    const w = n.interaction;
    if (!(w != null && w.shot) || !w.start || w.kind !== "pan_frame" && w.kind !== "roll_frame") return !1;
    const L = w.kind === "roll_frame";
    return w.kind === "pan_frame" ? (w.shot.yaw_deg = w.start.yaw_deg, w.shot.pitch_deg = w.start.pitch_deg) : w.shot.roll_deg = w.start.roll_deg, L && k(), n.interaction = null, te(), J(), Q(), G(n.pointerPos), ce({ localOnly: !0 }), !0;
  }
  return {
    connect(w) {
      ({
        applySpaceMode: m,
        cancelViewTransition: p,
        commitAndRefreshNode: E,
        contentSphere: U,
        getActiveCutoutShot: z,
        hasSpaceContent: W,
        hideTooltip: k,
        invalidateLivePaintPreviewCaches: te,
        pushHistory: K,
        requestDraw: ce,
        shotViewCamera: O,
        spaceScale: fe,
        spaceViewState: F,
        syncViewToggleState: J,
        updateCursor: G,
        updateSidePanel: Q
      } = w);
    },
    leaveFrameView: oe,
    measureFrameSafeRect: ie,
    getFrameViewLayout: x,
    getFrameViewRect: T,
    supportsFramePainting: Z,
    zoomFrameViewAt: V,
    isFreeFrameView: Se,
    frameContext: ee,
    frameViewDistance: I,
    frameSpaceView: X,
    frameTarget: be,
    startPanFrame: ae,
    startFrameDrag: b,
    dragFrame: S,
    zoomFrameAt: $,
    flushFrameWheelCommit: H,
    cancelFrameCameraGesture: v
  };
}
function c2(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let a, s, l, c, d, u, f, g, _, m, p, E, U, z, W, k, te, K, ce = 0;
  function O() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function fe() {
    return String(O() || "") === "lasso_fill";
  }
  function F() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function J(C, ae) {
    const b = Number(ae || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, b / 2048)
    };
  }
  function G(C) {
    const ae = String(C || "").trim();
    return ae === "eraser" ? Ir : In[ae] ? ae : t.activeBrushPresetId || Ir;
  }
  function Q() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (F() || K());
  }
  function Y() {
    var C;
    return Q() && ((C = t.pointerPos) == null ? void 0 : C.inside) === !0;
  }
  function oe(C, ae = !0) {
    const b = Number((C == null ? void 0 : C.x) || 0), S = Number((C == null ? void 0 : C.y) || 0), $ = ae !== !1, H = t.pointerPos || { x: 0, y: 0, inside: !1 }, v = H.inside !== $ || Math.abs(H.x - b) > 0.01 || Math.abs(H.y - S) > 0.01;
    return t.pointerPos = { x: b, y: S, inside: $ }, v;
  }
  function ie() {
    var P, A;
    if (!Y()) return null;
    const C = t.primaryTool === "mask" ? "mask" : "paint", ae = C === "mask" ? t.maskTool : t.paintTool, b = G(ae), S = In[b] || In[Ir], $ = Number(t.brushSizes[b] ?? 10), H = Math.max(1, $) * Math.max(0.1, Number(S.sizeScale ?? 1)), v = Math.max(3, H * 0.5), w = C === "mask" ? ae === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : ae === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Rn(t.paintColor), L = C === "mask" ? ae === "lasso_fill" ? 0.18 : 0.2 : ae === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), M = C === "mask" ? 0.95 : ae === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: C,
      toolKind: ae,
      preset: S,
      radius: v,
      fillStyle: fr(w, L),
      strokeStyle: fr(w, M),
      x: Number(((P = t.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((A = t.pointerPos) == null ? void 0 : A.y) || 0),
      hotspotX: v,
      hotspotY: v
    };
  }
  function x() {
    var B, re, me;
    const C = ie();
    if (!r) return;
    if (!C) {
      r.style.display = "none";
      return;
    }
    let ae = C.radius * 2, b = C.radius * 2, S = "999px", $ = 0, H = C.fillStyle, v = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const L = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let P = Number(C.hotspotX ?? ae * 0.5), A = Number(C.hotspotY ?? b * 0.5);
    if (C.toolKind === "lasso_fill")
      ae = nl, b = nl, S = "0", v = "0", w = "none", P = EP, A = OP, H = $P(C.fillStyle, M, L);
    else if (C.layerKind === "mask")
      H = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (C.toolKind === "marker") {
      const j = Math.max(1, Number(((B = C.preset) == null ? void 0 : B.aspect) ?? 1));
      ae = Math.max(10, C.radius * 2 * j), b = Math.max(6, C.radius * 2), S = `${Math.min(6, b * 0.42)}px`, $ = Number(((me = (re = C.preset) == null ? void 0 : re.angle) == null ? void 0 : me.value) || 0) * ki;
    } else C.toolKind === "brush" ? H = `radial-gradient(circle at 50% 50%, ${C.strokeStyle} 0%, ${C.fillStyle} 45%, rgba(0,0,0,0) 100%)` : C.toolKind === "eraser" && (H = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(ae)}px`, r.style.height = `${Math.round(b)}px`, r.style.borderRadius = S, r.style.border = v, r.style.boxShadow = w, r.style.background = H, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(C.x - P)}px, ${Math.round(C.y - A)}px) rotate(${$}deg)`;
  }
  function T() {
    var ke;
    if (!n || !i) return;
    const C = t.primaryTool === "mask" ? "mask" : "paint", ae = C === "mask" ? t.maskTool : t.paintTool;
    if (ae === "lasso_fill") return;
    const b = G(ae), S = In[b] || In[Ir], $ = Number(t.brushSizes[b] ?? 10), H = Math.max(1, $) * Math.max(0.1, Number(S.sizeScale ?? 1)), v = Math.max(6, H * 0.5), w = ae === "eraser", L = C === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : Rn(t.paintColor), M = C === "mask" ? fr(L, 0.22) : w ? "rgba(255,255,255,0.14)" : fr(L, Ee(Math.max(0.18, Number(L.a ?? 1) * 0.34), 0.18, 0.56)), P = C === "mask" ? fr(L, 0.96) : w ? "rgba(255,255,255,0.72)" : fr(L, Ee(Math.max(0.56, Number(L.a ?? 1) * 0.96), 0.56, 1));
    let A = v * 2, B = v * 2, re = "999px", me = 0, j = M;
    const de = "rgba(222, 222, 222, 0.72)", _e = "rgba(52, 52, 52, 0.72)";
    if (C === "mask")
      j = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (ae === "marker") {
      const ue = Math.max(1, Number((S == null ? void 0 : S.aspect) ?? 1));
      A = Math.max(16, v * 2 * ue), B = Math.max(10, v * 2), re = `${Math.min(8, B * 0.42)}px`, me = Number(((ke = S == null ? void 0 : S.angle) == null ? void 0 : ke.value) || 0) * ki;
    } else ae === "brush" ? j = `radial-gradient(circle at 50% 50%, ${P} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : ae === "lasso_fill" ? (A = Math.max(18, v * 1.8), B = A, j = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : w && (j = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(A)}px`, i.style.height = `${Math.round(B)}px`, i.style.borderRadius = re, i.style.background = j, i.style.border = `1px solid ${de}`, i.style.boxShadow = `0 0 0 1px ${_e}`, i.style.transform = `rotate(${me}deg)`, ce && (clearTimeout(ce), ce = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function Z() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), ce && clearTimeout(ce), ce = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), ce = 0;
    }, 180));
  }
  function V(C, ae, b, S) {
    const $ = G(ae), H = In[$] || In[Ir], v = t.brushSizes[$] ?? 10, w = Math.max(1, v) * Math.max(0.1, H.sizeScale ?? 1), L = J(S, w), M = b.map((A) => ({
      ...A,
      t: Number((A == null ? void 0 : A.t) || 0),
      widthScale: Number.isFinite(Number(A == null ? void 0 : A.widthScale)) ? Math.max(0, Number(A.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(A == null ? void 0 : A.pressureLike)) ? Math.max(0, Number(A.pressureLike)) : 1
    })), P = {
      id: Gi(C),
      actionGroupId: Gi("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: ae,
      size: w,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: L.radiusModel,
      radiusValue: L.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: M.map((A) => ({ ...A })),
        points: M.map((A) => ({ ...A }))
      }
    };
    return rp(P, H), t.mode, Number(H.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function pe(C, ae, b, S) {
    const $ = b.map((L) => ({
      ...L,
      t: Number((L == null ? void 0 : L.t) || 0),
      widthScale: Number.isFinite(Number(L == null ? void 0 : L.widthScale)) ? Math.max(0, Number(L.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(L == null ? void 0 : L.pressureLike)) ? Math.max(0, Number(L.pressureLike)) : 1
    })), H = G(ae), v = In[H] || In[Ir], w = {
      id: Gi(C),
      actionGroupId: Gi("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: ae,
      size: 10,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: $.map((L) => ({ ...L }))
      }
    };
    return rp(w, v), t.mode, Number(v.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Se(C) {
    const ae = o.painting || (o.painting = lo(null)), b = ae[C] || (ae[C] = { strokes: [] });
    return Array.isArray(b.strokes) || (b.strokes = []), b.strokes;
  }
  function ee(C, ae, b = performance.now()) {
    let S;
    if (t.mode === "frame") {
      const M = f();
      if (!M || (S = te(ae, M, b), !S)) return !1;
    } else
      S = k(ae, b);
    if (!S) return !1;
    const $ = C.stroke.geometry.rawPoints || C.stroke.geometry.points, H = C.stroke.geometry.points, v = $[$.length - 1];
    if (v) {
      const M = Math.abs(Number(S.u ?? S.x ?? 0) - Number(v.u ?? v.x ?? 0)), P = Math.abs(Number(S.v ?? S.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (M < 15e-4 && P < 15e-4) return !1;
    }
    const w = {
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    $.push({ ...w }), H.push({ ...w });
    const L = g(C);
    if (L) {
      const M = t.paintEngine.ensureTarget(L);
      t.paintEngine.appendStrokePoint(M, Number(w.u ?? 0), Number(w.v ?? 0), C.stroke);
    }
    return !0;
  }
  function I(C, ae, b = performance.now()) {
    var v, w;
    let S;
    if (t.mode === "frame") {
      const L = f();
      if (!L) return !1;
      S = te(ae, L, b);
    } else
      S = k(ae, b);
    const $ = (w = (v = C == null ? void 0 : C.stroke) == null ? void 0 : v.geometry) == null ? void 0 : w.points;
    if (!S || !Array.isArray($)) return !1;
    const H = $[$.length - 1];
    if (H) {
      const L = Math.abs(Number(S.u ?? S.x ?? 0) - Number(H.u ?? H.x ?? 0)), M = Math.abs(Number(S.v ?? S.y ?? 0) - Number(H.v ?? H.y ?? 0));
      if (L < 15e-4 && M < 15e-4) return !1;
    }
    return $.push({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function X(C) {
    var ue, ve, Ne, h, R;
    const ae = (C == null ? void 0 : C.stroke) || null;
    if (!ae || (C == null ? void 0 : C.layerKind) !== "paint" || String((ae == null ? void 0 : ae.toolKind) || "") !== "eraser") return !1;
    W();
    const b = g(), S = c(b.width, b.height);
    if (!z(S, ae, { w: b.width, h: b.height })) return !1;
    const $ = ((ve = (ue = S.ctx) == null ? void 0 : ue.getImageData(0, 0, b.width, b.height)) == null ? void 0 : ve.data) || null;
    if (!$) return !1;
    const H = new Map(m().map((N) => [String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim(), N ? { ...N } : null])), v = [], w = [], L = [...p().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== "paint")];
    let M = !1, P = _().reduce((N, y) => Math.max(N, Number((y == null ? void 0 : y.z_index) || 0)), -1) + 1;
    function A(N, y, D, le = 8) {
      let ge = y, he = D, ne = -1, ye = -1;
      for (let Me = 0; Me < D; Me += 1)
        for (let Ae = 0; Ae < y; Ae += 1)
          N[(Me * y + Ae) * 4 + 3] <= le || (Ae < ge && (ge = Ae), Me < he && (he = Me), Ae > ne && (ne = Ae), Me > ye && (ye = Me));
      return ne < ge || ye < he ? null : { minX: ge, minY: he, maxX: ne, maxY: ye };
    }
    const B = A($, b.width, b.height, 8);
    if (!B) return !1;
    function re(N, y) {
      return !N || !y ? !1 : !(N.maxX < y.minX || y.maxX < N.minX || N.maxY < y.minY || y.maxY < N.minY);
    }
    function me(N, y) {
      const D = d((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "", "paint", y);
      if (!D) return null;
      const le = D.centerUv.u - D.halfW, ge = D.centerUv.u + D.halfW, he = D.centerUv.v - D.halfH, ne = D.centerUv.v + D.halfH, ye = b.width, Me = b.height;
      return {
        minX: Math.floor((le % 1 + 1) % 1 * ye),
        maxX: Math.ceil((ge % 1 + 1) % 1 * ye),
        minY: Math.floor(Ee(he, 0, 1) * Me),
        maxY: Math.ceil(Ee(ne, 0, 1) * Me),
        wraps: ge - le >= 1 || le < 0 || ge > 1
      };
    }
    function j(N) {
      const y = (N == null ? void 0 : N.bbox) || null;
      if (!y) return null;
      const D = (N == null ? void 0 : N.transform) || {}, le = b.width, ge = b.height, he = Number(y.u0 || 0) + Number(D.du || 0), ne = Number(y.u1 || 0) + Number(D.du || 0), ye = Number(y.v0 || 0) + Number(D.dv || 0), Me = Number(y.v1 || 0) + Number(D.dv || 0);
      return {
        minX: Math.floor((he % 1 + 1) % 1 * le),
        maxX: Math.ceil((ne % 1 + 1) % 1 * le),
        minY: Math.floor(Ee(ye, 0, 1) * ge),
        maxY: Math.ceil(Ee(Me, 0, 1) * ge),
        wraps: ne - he >= 1 || he < 0 || ne > 1
      };
    }
    function de(N) {
      return N ? N.wraps ? re(B, { minX: 0, maxX: N.maxX, minY: N.minY, maxY: N.maxY }) || re(B, { minX: N.minX, maxX: b.width - 1, minY: N.minY, maxY: N.maxY }) : re(B, N) : !0;
    }
    function _e(N) {
      if (!N) return { touched: !1, canvas: null };
      const y = c(b.width, b.height, { readback: !0 });
      y.ctx.drawImage(N, 0, 0);
      const D = y.ctx.getImageData(0, 0, b.width, b.height);
      y.ctx.save(), y.ctx.globalCompositeOperation = "destination-out", y.ctx.drawImage(S.canvas, 0, 0), y.ctx.restore();
      const le = y.ctx.getImageData(0, 0, b.width, b.height);
      for (let ge = 0; ge < b.width * b.height; ge += 1) {
        if ($[ge * 4 + 3] <= 8) continue;
        const ne = D.data[ge * 4 + 3], ye = le.data[ge * 4 + 3];
        if (ne > ye)
          return { touched: !0, canvas: y.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ke(N, y, D) {
      const le = Number(D == null ? void 0 : D.z_index), ge = l(N, y, D).map((he, ne) => ({
        ...he,
        z_index: Number.isFinite(le) ? le + ne * 1e-3 : P + ne * 1e-3
      }));
      return ge.length && (P = Math.max(P, ...ge.map((he) => Number((he == null ? void 0 : he.z_index) || 0))) + 1), ge;
    }
    for (const N of m()) {
      const y = String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim();
      if (!y) continue;
      const D = E(y, "paint");
      if (!de(me(N, D))) {
        w.push(N), v.push(...D);
        continue;
      }
      const le = ((h = (Ne = t.paintEngine) == null ? void 0 : Ne.getGroupTarget) == null ? void 0 : h.call(Ne, y)) || null, ge = ((R = le == null ? void 0 : le.committedPaint) == null ? void 0 : R.canvas) || null;
      if (!ge) {
        w.push(N), v.push(...D);
        continue;
      }
      const he = _e(ge);
      if (!he.touched || !he.canvas) {
        w.push(N), v.push(...D);
        continue;
      }
      M = !0;
      const ne = ke(he.canvas, "paint", H.get(y) || N || {});
      L.push(...ne);
    }
    for (const N of p().filter((y) => String((y == null ? void 0 : y.layerKind) || "paint") === "paint")) {
      if (!de(j(N))) {
        L.push(N);
        continue;
      }
      const y = a(N, null);
      if (!y) {
        L.push(N);
        continue;
      }
      const D = _e(y);
      if (!D.touched || !D.canvas) {
        L.push(N);
        continue;
      }
      M = !0;
      const le = ke(D.canvas, "paint", N);
      L.push(...le);
    }
    return M ? (o.painting.paint.strokes = v, o.painting.groups = w.sort((N, y) => Number((N == null ? void 0 : N.z_index) || 0) - Number((y == null ? void 0 : y.z_index) || 0)), o.painting.raster_objects = L.sort((N, y) => Number((N == null ? void 0 : N.z_index) || 0) - Number((y == null ? void 0 : y.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function se(C) {
    var v, w, L, M, P;
    if ((((w = (v = C.stroke) == null ? void 0 : v.geometry) == null ? void 0 : w.rawPoints) || ((M = (L = C.stroke) == null ? void 0 : L.geometry) == null ? void 0 : M.points) || []).length >= 1) {
      we(C);
      const A = g(C);
      A && (String(((P = C.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(A) : t.paintEngine.commitActiveStroke(C.stroke, A)), C._hasCommittedSegments = !0;
    }
    const b = C.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, $ = V(C.layerKind, b.toolKind, [], S);
    $.actionGroupId = b.actionGroupId, C.stroke = $;
    const H = g(C);
    H && t.paintEngine.beginStroke($, H);
  }
  function be(C) {
    var v, w;
    if ((((w = (v = C.stroke) == null ? void 0 : v.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      we(C);
      const L = g(C);
      L && t.paintEngine.commitActiveStroke(C.stroke, L), C._hasCommittedSegments = !0;
    }
    const b = C.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, $ = pe(C.layerKind, b.toolKind, [], S);
    $.actionGroupId = b.actionGroupId, C.stroke = $;
    const H = g(C);
    H && t.paintEngine.beginStroke($, H);
  }
  function we(C) {
    var H, v, w, L;
    const ae = ((H = C == null ? void 0 : C.stroke) == null ? void 0 : H.geometry) || null;
    if (!ae) return !1;
    const b = String(((v = C == null ? void 0 : C.stroke) == null ? void 0 : v.toolKind) || "pen");
    if (C.layerKind === "paint" && b === "eraser")
      return ae.geometryKind !== "lasso_fill" && (ae.processedPoints = U(ae.rawPoints || ae.points || [], C.stroke.targetSpace, !0)), X(C);
    const S = C.layerKind === "paint" && b !== "eraser";
    if (ae.geometryKind === "lasso_fill")
      return (Array.isArray(ae.points) ? ae.points : []).length < 3 ? !1 : (S && u((w = C.stroke) == null ? void 0 : w.actionGroupId), Se(C.layerKind).push(C.stroke), !0);
    const $ = ae.rawPoints || ae.points || [];
    return $.length < 1 ? !1 : (ae.processedPoints = U($, C.stroke.targetSpace, !0), S && u((L = C.stroke) == null ? void 0 : L.actionGroupId), Se(C.layerKind).push(C.stroke), !0);
  }
  return {
    connect(C) {
      ({
        buildRasterObjectEditCanvas: a,
        clearSelection: s,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: g,
        getDisplayListObjects: _,
        getPaintingGroupList: m,
        getRasterObjectList: p,
        getStrokeGroupStrokes: E,
        processFreehandPoints: U,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: W,
        screenPosToErpPoint: k,
        screenPosToFrameAsErpPoint: te,
        supportsFramePainting: K
      } = C);
    },
    isActiveLassoTool: fe,
    supportsErpPainting: F,
    getBrushPresetIdForTool: G,
    isPaintCursorEnabled: Q,
    isActivePaintCursorVisible: Y,
    setPointerPos: oe,
    syncPaintCursorElement: x,
    showPaintSizePreview: T,
    hidePaintSizePreview: Z,
    buildFreehandStrokeRecord: V,
    buildLassoFillStrokeRecord: pe,
    getPaintingLayerList: Se,
    appendPaintPoint: ee,
    appendLassoPoint: I,
    _segmentFrameStroke: se,
    _segmentFrameLassoFill: be,
    commitPaintInteraction: we
  };
}
function u2(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, a, s, l, c, d, u, f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F;
  function J(x) {
    var Z;
    if (n && t.mode === "frame") {
      const V = a(), pe = l(V);
      if (!V || !pe || !(Number((x == null ? void 0 : x.x) || 0) >= Number(pe.x || 0) && Number((x == null ? void 0 : x.x) || 0) <= Number(pe.x || 0) + Number(pe.w || 0) && Number((x == null ? void 0 : x.y) || 0) >= Number(pe.y || 0) && Number((x == null ? void 0 : x.y) || 0) <= Number(pe.y || 0) + Number(pe.h || 0))) return null;
      const ee = ce(x, V, performance.now()), I = ee ? o(ee) : null;
      if (I)
        for (const se of s()) {
          if (!z(se)) continue;
          const be = F(se, I);
          if (be && Number(be.x) >= 0 && Number(be.x) <= 1 && Number(be.y) >= 0 && Number(be.y) <= 1) {
            const we = K(se);
            if (we != null && we.visible) return { item: se, geom: we };
          }
        }
      const X = c(!1).slice().sort((se, be) => Number((be == null ? void 0 : be.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0));
      for (const se of X) {
        if (se.type === "strokeGroup") {
          const C = f(te("paint", se.actionGroupId || se.id || ""));
          if (!C) continue;
          const ae = K(C);
          if (!(ae != null && ae.visible)) continue;
          const b = Array.isArray(ae.strokePaths) ? ae.strokePaths : [];
          for (const S of b) {
            const $ = Array.isArray(S == null ? void 0 : S.points) ? S.points : [];
            if (!$.length) continue;
            if (S.closed && $.length >= 3 && Br(x, $)) return { item: C, geom: ae };
            const H = Math.max(8, Number((S == null ? void 0 : S.lineWidth) || 0) * 0.5 + 6);
            for (let v = 0; v < $.length - 1; v += 1)
              if (yc(x, $[v], $[v + 1]) <= H * H) return { item: C, geom: ae };
            if ($.length === 1 && Ro(x, $[0]) <= H * H) return { item: C, geom: ae };
          }
          continue;
        }
        if (se.type === "rasterObject") {
          const C = d(k(((Z = se.item) == null ? void 0 : Z.id) || se.id || ""));
          if (!C) continue;
          const ae = K(C);
          if (g(C, ae, x, ee)) return { item: C, geom: ae };
          continue;
        }
        const be = se.item;
        if (!be || !z(be) || !I) continue;
        const we = F(be, I);
        if (we && Number(we.x) >= 0 && Number(we.x) <= 1 && Number(we.y) >= 0 && Number(we.y) <= 1) {
          const C = K(be);
          if (C != null && C.visible) return { item: be, geom: C };
        }
      }
      return null;
    }
    const T = [
      ...c(!1).slice().sort((V, pe) => Number((pe == null ? void 0 : pe.z_index) || 0) - Number((V == null ? void 0 : V.z_index) || 0)).map((V) => {
        var pe;
        return V.type === "strokeGroup" ? f(te("paint", V.actionGroupId || V.id || "")) : V.type === "rasterObject" ? d(k(((pe = V.item) == null ? void 0 : pe.id) || V.id || "")) : V.item;
      }).filter(Boolean),
      ...n ? s().filter((V) => U(V)) : []
    ];
    for (const V of T) {
      if (W(V)) {
        const Se = K(V);
        if (!(Se != null && Se.visible)) continue;
        const ee = Array.isArray(Se.strokePaths) ? Se.strokePaths : [];
        for (const I of ee) {
          const X = Array.isArray(I == null ? void 0 : I.points) ? I.points : [];
          if (!X.length) continue;
          if (I.closed && X.length >= 3 && Br(x, X)) return { item: V, geom: Se };
          const se = Math.max(8, Number((I == null ? void 0 : I.lineWidth) || 0) * 0.5 + 6);
          for (let be = 0; be < X.length - 1; be += 1)
            if (yc(x, X[be], X[be + 1]) <= se * se) return { item: V, geom: Se };
          if (X.length === 1 && Ro(x, X[0]) <= se * se) return { item: V, geom: Se };
        }
        continue;
      }
      if (E(V)) {
        const Se = K(V);
        if (!(Se != null && Se.visible)) continue;
        if (g(V, Se, x)) return { item: V, geom: Se };
        continue;
      }
      const pe = K(V);
      if (pe.visible && Br(x, pe.corners))
        return { item: V, geom: pe };
    }
    return null;
  }
  function G(x, T, Z = null) {
    if (!x || !x.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (z(Z)) return Zc(x, T);
    if (x.kind === "strokeGroup") {
      const V = x.corners.findIndex((Se) => Ro(Se, T) <= 121);
      if (V >= 0) {
        const Se = x.corners[V], ee = Se.x - x.center.x, I = Se.y - x.center.y, X = ee * I >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: V, cursor: X };
      }
      const pe = Array.isArray(x.strokePaths) ? x.strokePaths : [];
      for (const Se of pe) {
        const ee = Array.isArray(Se == null ? void 0 : Se.points) ? Se.points : [];
        if (Se.closed && ee.length >= 3 && Br(T, ee)) return { kind: "move", cursor: "default" };
        const I = Math.max(8, Number((Se == null ? void 0 : Se.lineWidth) || 0) * 0.5 + 6);
        for (let X = 0; X < ee.length - 1; X += 1)
          if (yc(T, ee[X], ee[X + 1]) <= I * I) return { kind: "move", cursor: "default" };
      }
      return Br(T, x.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (x.kind === "rasterObject") {
      const V = x.corners.findIndex((pe) => Ro(pe, T) <= 121);
      if (V >= 0) {
        const pe = x.corners[V], Se = pe.x - x.center.x, ee = pe.y - x.center.y, I = Se * ee >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: V, cursor: I };
      }
      return Br(T, x.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return PS(x, T, {
      edges: i === "cutout" || U(Z),
      resize: !(U(Z) && m()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function Q(x, T) {
    return {
      x0: Math.min(Number((x == null ? void 0 : x.x) || 0), Number((T == null ? void 0 : T.x) || 0)),
      y0: Math.min(Number((x == null ? void 0 : x.y) || 0), Number((T == null ? void 0 : T.y) || 0)),
      x1: Math.max(Number((x == null ? void 0 : x.x) || 0), Number((T == null ? void 0 : T.x) || 0)),
      y1: Math.max(Number((x == null ? void 0 : x.y) || 0), Number((T == null ? void 0 : T.y) || 0))
    };
  }
  function Y(x, T) {
    return !!x && !!T && Number(T.x) >= Number(x.x0) && Number(T.x) <= Number(x.x1) && Number(T.y) >= Number(x.y0) && Number(T.y) <= Number(x.y1);
  }
  function oe(x, T) {
    if (!x || !(T != null && T.visible) || !Array.isArray(T.corners)) return !1;
    if (T.corners.some((pe) => Y(x, pe))) return !0;
    const Z = (Number(x.x0) + Number(x.x1)) * 0.5, V = (Number(x.y0) + Number(x.y1)) * 0.5;
    return !!Br({ x: Z, y: V }, T.corners);
  }
  function ie(x) {
    if (fe(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? O("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? O("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? O("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? O("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? O("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? O(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? O("grabbing") : O("default");
      return;
    }
    if (_()) {
      O("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        O(NP);
        return;
      }
      if (t.primaryTool !== "cursor") {
        O("default");
        return;
      }
      O("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      O("default");
      return;
    }
    if (t.gizmoAxis) {
      O("grab");
      return;
    }
    const T = u(), Z = T ? K(T) : null, V = T ? p(T) : !1, pe = V ? { kind: "none", cursor: "default" } : G(Z, x, T);
    if (!V && pe.kind !== "none") {
      O(pe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && J(x)) {
      O("default");
      return;
    }
    O(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(x) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: a,
        getCutoutSelectableItemsForHit: s,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: g,
        isActivePaintCursorVisible: _,
        isErpCamera: m,
        isItemLocked: p,
        isRasterObjectItem: E,
        isShotItem: U,
        isStickerItem: z,
        isStrokeGroupItem: W,
        makeRasterObjectSelectionId: k,
        makeStrokeGroupSelectionId: te,
        objectGeom: K,
        screenPosToFrameAsErpPoint: ce,
        setCanvasCursor: O,
        syncPaintCursorElement: fe,
        worldDirToFrameLocalPoint: F
      } = x);
    },
    hitObjectAt: J,
    handleHit: G,
    rectFromPoints: Q,
    rectIntersectsGeom: oe,
    updateCursor: ie
  };
}
function d2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: a,
    state: s,
    studio: l,
    tooltip: c,
    tooltipEl: d,
    type: u,
    uiState: f
  } = e;
  let g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q = !1;
  function Y() {
    return Q;
  }
  function oe() {
    if (!o) return;
    if (Q = !1, n.mode === "frame") {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || k() && ce()) {
      const I = ie();
      Q = I.visible, x(I);
      return;
    }
    const V = U(), pe = z();
    if (!V && pe.length === 0 || n.interaction) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Se = W(), ee = YN({
      type: u,
      selected: V,
      selectedItems: pe,
      selectedKind: Se,
      geom: pe.length > 1 ? E(pe) : G(V),
      allLocked: g(pe),
      anyLocked: pe.some((I) => O(I)),
      selectedLocked: O(V),
      activeAspect: fe(V) && te() ? oo : Tr(V),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: K,
      isStickerHidden: J,
      canRestoreSelectedToInitial: _,
      iconSet: Ge,
      cameraShot: t,
      cameraDeletable: l,
      erpChoice: l,
      coverage: s.coverage
    });
    x(ee);
  }
  function ie() {
    const V = F() && !n.interaction ? p().space : null;
    if (!(V != null && V.gizmo)) return { visible: !1 };
    const pe = m(), Se = V.stickers.find((se) => se.id === n.worldSelectedId), I = (Se ? rd(Se) : [V.gizmo.transform.position]).map((se) => sa(pe, se, r.width, r.height)).filter(Boolean), X = X1(pe, V.gizmo.transform.position, V.gizmo.mode, r.width, r.height);
    return qN({ corners: I, gizmoBox: X, gizmoMode: V.gizmo.mode, camera: k(), deletable: l && k() });
  }
  function x(V) {
    var X, se;
    if (!V.visible) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const pe = (be, we) => XN(V.anchor, be, we, r.width, r.height), Se = Math.max(1, Number(((X = n.menuSize) == null ? void 0 : X.w) || 220)), ee = Math.max(1, Number(((se = n.menuSize) == null ? void 0 : se.h) || 40)), I = pe(Se, ee);
    if (!I) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    f.selectionMenu = {
      visible: !0,
      left: I.left,
      top: I.top,
      items: V.items
    }, i.requestFrame(() => {
      if (!o || f.selectionMenu.visible !== !0) return;
      const be = o.getBoundingClientRect(), we = Math.round(Number((be == null ? void 0 : be.width) || 0)) || 220, C = Math.round(Number((be == null ? void 0 : be.height) || 0)) || 40;
      n.menuSize = { w: we, h: C, measured: !0 };
      const ae = pe(we, C);
      ae && (f.selectionMenu.left = ae.left, f.selectionMenu.top = ae.top);
    });
  }
  function T() {
    c.timer && (clearTimeout(c.timer), c.timer = 0), c.target = null, f.tooltip.visible = !1;
  }
  function Z(V) {
    if (!d || !V || !V.isConnected) return;
    const pe = String(V.getAttribute("data-tip") || "").trim();
    if (!pe) return;
    f.tooltip.text = pe, f.tooltip.visible = !0;
    const Se = V;
    i.requestFrame(() => {
      var v, w;
      if (c.target !== Se || !d || !(Se != null && Se.isConnected)) return;
      const ee = a.getBoundingClientRect(), I = Se.getBoundingClientRect(), X = 8, se = 12, be = Math.round(Number(((v = d.getBoundingClientRect()) == null ? void 0 : v.width) || 0)) || 100, we = Math.round(Number(((w = d.getBoundingClientRect()) == null ? void 0 : w.height) || 0)) || 24, C = !!Se.closest(".pano-floating-left"), ae = !!Se.closest(".pano-frame-rail"), b = !!Se.closest(".pano-paint-footer") || !!Se.closest(".pano-paint-color-float");
      let S = "", $ = I.left - ee.left + I.width * 0.5 - be * 0.5, H = I.top - ee.top - we - se;
      if (Se.closest(".pano-floating-top") && (H = I.bottom - ee.top + se), C)
        S = "tool-rail", $ = I.right - ee.left + 10, H = I.top - ee.top + I.height * 0.5 - we * 0.5, $ = Ee($, X, Math.max(X, ee.width - be - X)), H = Ee(H, X, Math.max(X, ee.height - we - X));
      else if (ae)
        S = "frame-rail", $ = I.left - ee.left - be - 10, H = I.top - ee.top + I.height * 0.5 - we * 0.5, $ = Ee($, X, Math.max(X, ee.width - be - X)), H = Ee(H, X, Math.max(X, ee.height - we - X));
      else if (b) {
        S = "footer";
        const L = Se.closest(".pano-paint-footer"), M = L ? L.getBoundingClientRect() : I;
        $ = M.left - ee.left + M.width * 0.5 - be * 0.5, H = M.bottom - ee.top + 5, $ = Ee($, X, Math.max(X, ee.width - be - X)), H = Math.max(X, H);
      }
      $ = Ee($, X, Math.max(X, ee.width - be - X)), H = Math.max(X, H), f.tooltip.left = $, f.tooltip.top = H, f.tooltip.variant = S, f.tooltip.visible = !0;
    });
  }
  return {
    connect(V) {
      ({
        areAllSelectedItemsLocked: g,
        canRestoreSelectedToInitial: _,
        currentSpaceCamera: m,
        editorViewInput: p,
        getMultiSelectionGeom: E,
        getSelected: U,
        getSelectedItems: z,
        getSelectedKind: W,
        isCameraSelected: k,
        isErpCamera: te,
        isExternalSticker: K,
        isFreeSpaceView: ce,
        isItemLocked: O,
        isShotItem: fe,
        isSpaceView: F,
        isStickerHidden: J,
        objectGeom: G
      } = V);
    },
    isWorldMenuShown: Y,
    updateSelectionMenu: oe,
    hideTooltip: T,
    showTooltipFor: Z
  };
}
function f2(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: a,
    readOnly: s,
    runtime: l,
    sceneV2: c,
    shotEditor: d,
    state: u,
    stateV2: f,
    timeline: g,
    type: _,
    viewController: m
  } = e;
  let p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X, se, be, we, C, ae, b, S, $, H, v, w, L, M, P, A, B, re, me, j, de, _e, ke, ue, ve, Ne, h, R, N, y, D, le, ge, he, ne, ye, Me, Ae, Le, Re, He, ze, q, Ce, Ve, Ie, je, We, Be, nt, yt, Ft, vt, Dt, tn, Ye, Ht, bn, Sr, Gr, on, Mn, Wr, wr, Xn, _a, ho, Sa, mo, go, wa, xa, yo, Et, Pn, ar, bo, Dn, ka, Ma, Pa, Kr = null;
  function El(Oe) {
    g.selection && (g.selection = null, xa());
    const Fe = je(Oe);
    Kr = Fe, Dt(Fe, !0), G(), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0;
    const xe = Ne(), bt = ve(), ct = xe || bt ? zS(bo(), Oe) : null;
    if (bt && ct) {
      Oe.preventDefault(), ct === "look" ? Wr(Fe, Oe.pointerId) : Mn(ct, Fe, Oe.pointerId);
      return;
    }
    if (ct === "look") {
      Oe.preventDefault();
      const qe = We(Oe);
      n.interaction = { kind: "view", last: qe, lastTs: performance.now() }, m.startDrag(qe.x, qe.y, Oe.pointerId, performance.now()), Et(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (ct) {
      Oe.preventDefault(), wr(ct, Fe, Oe.pointerId);
      return;
    }
    if ((xe || bt) && Oe.button !== 0) {
      Oe.preventDefault();
      return;
    }
    if (Oe.button === 1) {
      if (Oe.preventDefault(), n.mode === "frame") {
        const qe = se();
        if (!qe || s || qe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: qe,
          last: Fe,
          start: {
            yaw_deg: Number(qe.yaw_deg || 0),
            pitch_deg: Number(qe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const qe = n.mode === "unwrap" ? Fe : We(Oe);
        n.interaction = { kind: "view", last: qe, lastTs: performance.now() }, m.startDrag(qe.x, qe.y, Oe.pointerId, performance.now());
      }
      Et(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (Oe.button !== 0) return;
    if (n.mode === "frame" && (Oe.altKey || Oe.shiftKey) && !s) {
      const qe = se(), Ke = b(qe);
      if (!qe || qe.locked === !0 || !Ke) return;
      const Je = rg({
        frame: Ke,
        point: Fe,
        startRollDeg: Number(qe.roll_deg ?? qe.rot_deg ?? 0),
        shiftKey: Oe.shiftKey,
        altKey: Oe.altKey,
        allowAlt: !0
      });
      if (!Je) return;
      n.interaction = {
        kind: "roll_frame",
        shot: qe,
        center: Je.center,
        lastAngle: Je.lastAngle,
        accumulatedRad: Je.accumulatedRad,
        rollGesture: Je,
        start: { roll_deg: Number(qe.roll_deg ?? qe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Je.source === "alt",
        source: Je.source
      }, t.setPointerCapture(Oe.pointerId), Oe.preventDefault(), go(), Ie({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      Wr(Fe, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && _o(Oe, Fe);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (_a() || ho())) {
      if (!Ae()) return;
      Xn();
      const qe = n.primaryTool === "mask" ? "mask" : "paint", Ke = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Je = n.mode === "frame" && ho() ? se() : null, Zt = { kind: "ERP_GLOBAL" }, Mt = Je ? nt(Fe, Je, performance.now()) : Be(Fe, performance.now());
      if (!Mt) {
        Et(Fe);
        return;
      }
      n.interaction = {
        kind: Ke === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: qe,
        _livePreviewToken: Gi("live"),
        stroke: Ke === "lasso_fill" ? fe(qe, Ke, [Mt], Zt) : O(qe, Ke, [Mt], Zt)
      }, ke();
      const kr = be(n.interaction);
      if (kr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, kr), n.interaction.kind === "paint_stroke") {
          const Ni = n.paintEngine.ensureTarget(kr), Ci = Number((Mt == null ? void 0 : Mt.u) ?? (Mt == null ? void 0 : Mt.x) ?? 0), Ai = Number((Mt == null ? void 0 : Mt.v) ?? (Mt == null ? void 0 : Mt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ni, Ci, Ai, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, kr);
      Et(Fe), t.setPointerCapture(Oe.pointerId), Ie();
      return;
    }
    const _t = A(), Xe = P(), Qe = _t.length > 1 ? $(_t) : Xe ? Me(Xe) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Fe, current: Fe }, Et(Fe), t.setPointerCapture(Oe.pointerId), Ie({ localOnly: !0, reason: dt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && F() && Ne() && on(Oe, Fe) || n.primaryTool === "cursor" && c && D() && Na(Oe, Fe)) return;
    if (_t.length > 1 && (Qe != null && Qe.visible)) {
      if ((_t.some((Ke) => h(Ke)) ? { kind: "none" } : j(Qe, Fe)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: _t.map((Ke) => Ke),
          offset: { x: Fe.x - Qe.center.x, y: Fe.y - Qe.center.y },
          startCenter: { x: Qe.center.x, y: Qe.center.y },
          stickerSnapshots: _t.filter((Ke) => le(Ke)).map((Ke) => ({
            id: String(Ke.id || ""),
            yaw_deg: Number(He(Ke).yaw_deg || 0),
            pitch_deg: Number(He(Ke).pitch_deg || 0),
            center: (() => {
              var Zt, Mt;
              const Je = Me(Ke);
              return Je != null && Je.visible ? { x: Number(((Zt = Je.center) == null ? void 0 : Zt.x) || 0), y: Number(((Mt = Je.center) == null ? void 0 : Mt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })()
          })),
          strokeSnapshots: _t.filter((Ke) => ge(Ke)).map((Ke) => ({
            id: String(Ke.actionGroupId || Ke.id || ""),
            layerKind: String(Ke.layerKind || "paint"),
            snapshot: dn(re(Ke.actionGroupId, Ke.layerKind)),
            frameSnapshot: dn(pe(Ke.actionGroupId, Ke.layerKind)),
            center: (() => {
              var Zt, Mt;
              const Je = Me(Ke);
              return Je != null && Je.visible ? { x: Number(((Zt = Je.center) == null ? void 0 : Zt.x) || 0), y: Number(((Mt = Je.center) == null ? void 0 : Mt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })(),
            centerUv: B(Ke.actionGroupId, Ke.layerKind)
          })),
          rasterSnapshots: _t.filter((Ke) => R(Ke)).map((Ke) => ({
            id: Le(Ke.rasterObjectId || Ke.id || ""),
            snapshot: dn(w().find((Je) => String((Je == null ? void 0 : Je.id) || "") === Le(Ke.rasterObjectId || Ke.id || ""))),
            center: (() => {
              var Zt, Mt;
              const Je = Me(Ke);
              return Je != null && Je.visible ? { x: Number(((Zt = Je.center) == null ? void 0 : Zt.x) || 0), y: Number(((Mt = Je.center) == null ? void 0 : Mt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })(),
            centerUv: v(Ke)
          }))
        }, Et(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
    } else if (Xe && (Qe != null && Qe.visible)) {
      const qe = h(Xe) ? { kind: "none" } : j(Qe, Fe, Xe);
      if (qe.kind === "scale") {
        n.interaction = ge(Xe) ? {
          kind: "scale_stroke_group",
          item: Xe,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Qe.center.x, Fe.y - Qe.center.y)),
          snapshot: dn(re(Xe.actionGroupId, Xe.layerKind)),
          frameSnapshot: dn(pe(Xe.actionGroupId, Xe.layerKind)),
          cursor: qe.cursor
        } : R(Xe) ? {
          kind: "scale_raster_object",
          item: Xe,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Qe.center.x, Fe.y - Qe.center.y)),
          snapshot: dn(w().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "") === Le(Xe.rasterObjectId || Xe.id || ""))),
          cursor: qe.cursor
        } : {
          kind: "scale",
          item: Xe,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Qe.center.x, Fe.y - Qe.center.y)),
          startHFOV: Number(He(Xe).hFOV_deg || 20),
          startVFOV: Number(He(Xe).vFOV_deg || 20),
          cursor: qe.cursor
        }, Et(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (qe.kind === "scale_x" || qe.kind === "scale_y") {
        n.interaction = {
          kind: qe.kind,
          item: Xe,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Qe.center.x, Fe.y - Qe.center.y)),
          startHFOV: Number(He(Xe).hFOV_deg || 20),
          startVFOV: Number(He(Xe).vFOV_deg || 20),
          cursor: qe.cursor,
          edge: qe.edge
        }, Et(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (qe.kind === "rotate") {
        n.interaction = ge(Xe) ? {
          kind: "rotate_stroke_group",
          item: Xe,
          center: Qe.center,
          startAng: Math.atan2(Fe.y - Qe.center.y, Fe.x - Qe.center.x),
          snapshot: dn(re(Xe.actionGroupId, Xe.layerKind)),
          frameSnapshot: dn(pe(Xe.actionGroupId, Xe.layerKind))
        } : {
          kind: "rotate",
          item: Xe,
          center: Qe.center,
          startRot: Number(He(Xe).rot_deg || He(Xe).roll_deg || 0),
          startAng: Math.atan2(Fe.y - Qe.center.y, Fe.x - Qe.center.x)
        }, Et(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (qe.kind === "move") {
        if (ge(Xe)) {
          const Ke = n.mode === "frame" ? (() => {
            const Je = se();
            return Je ? nt(Fe, Je, performance.now()) : null;
          })() : Be(Fe, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Xe,
            startUv: Ke,
            snapshot: dn(re(Xe.actionGroupId, Xe.layerKind)),
            frameSnapshot: dn(pe(Xe.actionGroupId, Xe.layerKind))
          }, Et(Fe), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if (R(Xe)) {
          const Ke = n.mode === "frame" ? (() => {
            const Je = se();
            return Je ? nt(Fe, Je, performance.now()) : null;
          })() : Be(Fe, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Xe,
            startUv: Ke,
            snapshot: dn(w().find((Je) => String((Je == null ? void 0 : Je.id) || "") === Le(Xe.rasterObjectId || Xe.id || "")))
          }, Et(Fe), t.setPointerCapture(Oe.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Xe,
          offset: { x: Fe.x - Qe.center.x, y: Fe.y - Qe.center.y }
        }, Et(Fe), t.setPointerCapture(Oe.pointerId);
        return;
      }
    }
    const it = _e(Fe);
    if (it) {
      const qe = n.selectedId !== it.item.id;
      if (qe && n.selectedId && (ze(), ie()), tn(it.item), d && qe && (n.cutoutAspectOpen = !1), qe && ar(), Pn(), Ie(), h(it.item)) {
        Et(Fe);
        return;
      }
      n.interaction = {
        kind: ge(it.item) ? "move_stroke_group" : R(it.item) ? "move_raster_object" : "move",
        item: it.item,
        offset: { x: Fe.x - it.geom.center.x, y: Fe.y - it.geom.center.y },
        startUv: ge(it.item) || R(it.item) ? n.mode === "frame" ? (() => {
          const Ke = se();
          return Ke ? nt(Fe, Ke, performance.now()) : null;
        })() : Be(Fe, performance.now()) : null,
        snapshot: ge(it.item) ? dn(re(it.item.actionGroupId, it.item.layerKind)) : R(it.item) ? dn(w().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "") === Le(it.item.rasterObjectId || it.item.id || ""))) : null,
        frameSnapshot: ge(it.item) ? dn(pe(it.item.actionGroupId, it.item.layerKind)) : null
      }, Et(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const Ln = !!n.selectedId;
    Ln && (ze(), ie()), Q(), Ln && ar(), Pn(), Ie(), n.mode === "pano" && _o(Oe, Fe);
  }
  function xr(Oe, Fe) {
    return i.gizmoPointer(Oe, x(), Fe.x, Fe.y, t.width, t.height);
  }
  function Na(Oe, Fe) {
    var Qe;
    const xe = (Qe = V().space) == null ? void 0 : Qe.gizmo;
    if (xe && xr("hover", Fe) !== null && xr("down", Fe))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: xe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: xe.transform,
        base: xi(vt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), Et(Fe), !0;
    const bt = A(), ct = P(), _t = bt.length > 1 ? bt.some((it) => h(it)) ? "none" : j($(bt), Fe).kind : ct && !h(ct) ? j(Me(ct), Fe, ct).kind : "none";
    if (_t !== "none" && _t !== "move") return !1;
    const Xe = i.pickSticker(x(), Fe.x, Fe.y, t.width, t.height);
    return u.stickers.some((it) => it.id === Xe && it.placement === "world") ? (n.worldSelectedId !== Xe && (n.selectedId && (ze(), ie()), Ft(Xe), ar(), Pn(), mo(), Ie()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function Ca(Oe) {
    var bt;
    const xe = !!(n.worldSelectedId || ue()) && n.primaryTool === "cursor" && D() && !!((bt = V().space) != null && bt.gizmo) ? xr("hover", Oe) : null;
    xe !== n.gizmoAxis && (n.gizmoAxis = xe, l.backgroundDirty = !0, Ie({ localOnly: !0, reason: dt.VIEW }));
  }
  function Aa(Oe, Fe) {
    const xe = xr("move", Fe);
    if (xe && Oe.camera) {
      for (const [ct, _t] of Object.entries(xf(Oe.mode, Oe.base, Oe.start, xe))) mn(u.camera, ct, n.frame, _t);
      Sa(), Oe.changed = !0, r.request("sidePanel"), Ie({ localOnly: !0 });
      return;
    }
    const bt = u.stickers.find((ct) => ct.id === Oe.id);
    !xe || !bt || (w1(bt, n.frame, xf(Oe.mode, Oe.base, Oe.start, xe)), Oe.changed = !0, he(), r.request("sidePanel"), Ie({ localOnly: !0 }));
  }
  function vo(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (xr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && (ze(), Y(), ar())), Et(n.pointerPos), Ie();
  }
  function _o(Oe, Fe) {
    if (Ne()) {
      const bt = bo().emptyLeft;
      bt && wr(bt, Fe, Oe.pointerId);
      return;
    }
    const xe = We(Oe);
    n.interaction = { kind: "view", last: xe, lastTs: performance.now() }, m.startDrag(xe.x, xe.y, Oe.pointerId, performance.now()), Et(Fe), t.setPointerCapture(Oe.pointerId);
  }
  function Ia(Oe, Fe) {
    if (!f || !Re.playing || (Re.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const ct = Se();
      ct && (Oe.pivot = X(ct, I(ct), Fe));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const ct = u.stickers.find((_t) => _t.id === Oe.id);
      Oe.camera ? Oe.base = T() : ct && (Oe.base = xi(ct, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const ct = $(Oe.items);
      if (!(ct != null && ct.visible)) return;
      Oe.offset = { x: Fe.x - ct.center.x, y: Fe.y - ct.center.y }, Oe.startCenter = { x: ct.center.x, y: ct.center.y };
      for (const _t of Oe.stickerSnapshots) {
        const Xe = Oe.items.find((it) => String((it == null ? void 0 : it.id) || "") === _t.id), Qe = Xe ? Me(Xe) : null;
        Qe != null && Qe.visible && (_t.yaw_deg = Number(He(Xe).yaw_deg || 0), _t.pitch_deg = Number(He(Xe).pitch_deg || 0), _t.center = { x: Qe.center.x, y: Qe.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Oe.kind)) return;
    const xe = Me(Oe.item);
    if (!(xe != null && xe.visible)) return;
    const bt = He(Oe.item);
    if (Oe.kind === "move") {
      Oe.offset = { x: Fe.x - xe.center.x, y: Fe.y - xe.center.y };
      return;
    }
    if (Oe.center = xe.center, Oe.kind === "rotate") {
      Oe.startRot = Number(bt.rot_deg || bt.roll_deg || 0), Oe.startAng = Math.atan2(Fe.y - xe.center.y, Fe.x - xe.center.x);
      return;
    }
    Oe.startDist = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)), Oe.startHFOV = Number(bt.hFOV_deg || 20), Oe.startVFOV = Number(bt.vFOV_deg || 20);
  }
  function Ea(Oe) {
    var bt, ct, _t, Xe, Qe, it, Ln, qe, Ke, Je, Zt, Mt, kr, Ni, Ci, Ai, Ta, Da, So, La, Ra, Va;
    const Fe = je(Oe);
    if (Dt(Fe, !0), !n.interaction) {
      Ca(Fe), Et(Fe);
      return;
    }
    Et(Fe);
    const xe = n.interaction;
    if (Kr && (Fe.x !== Kr.x || Fe.y !== Kr.y)) {
      const st = Kr;
      Kr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(xe.kind) || Ia(xe, st);
    }
    if (xe.kind !== "world_select") {
      if (xe.kind === "world_gizmo") {
        Aa(xe, Fe);
        return;
      }
      if (xe.kind === "paint_stroke") {
        const st = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let ft = !1;
        st.forEach((mt) => {
          const gt = je(mt);
          if (n.mode === "frame") {
            const sn = se(), Kt = sn ? b(sn) : null;
            if (Kt) {
              const vn = (gt.x - Kt.x) / Math.max(1, Kt.w), St = (gt.y - Kt.y) / Math.max(1, Kt.h);
              if (!(vn >= 0 && vn <= 1 && St >= 0 && St <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, E(xe));
            }
          }
          z(xe, gt, performance.now()) && (ft = !0);
        }), ft && Ie({ localOnly: !0, reason: dt.PAINT });
        return;
      }
      if (xe.kind === "paint_lasso_fill") {
        const st = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let ft = !1;
        if (st.forEach((mt) => {
          const gt = je(mt);
          if (n.mode === "frame") {
            const sn = se(), Kt = sn ? b(sn) : null;
            if (Kt) {
              const vn = (gt.x - Kt.x) / Math.max(1, Kt.w), St = (gt.y - Kt.y) / Math.max(1, Kt.h);
              if (!(vn >= 0 && vn <= 1 && St >= 0 && St <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, p(xe));
            }
          }
          U(xe, gt, performance.now()) && (ft = !0);
        }), ft) {
          const mt = be(xe);
          mt && n.paintEngine.updateActiveStroke(xe.stroke, mt), Ie({ localOnly: !0, reason: dt.PAINT });
        }
        return;
      }
      if (xe.kind === "view") {
        const st = performance.now(), ft = n.mode === "unwrap" ? Fe : We(Oe);
        m.moveDrag(ft.x, ft.y, n.mode === "unwrap" ? "unwrap" : "pano", st), xe.lastTs = st, xe.last = ft, Ie({ localOnly: !0, reason: dt.VIEW });
        return;
      }
      if (xe.kind === "frame_pan" || xe.kind === "frame_orbit") {
        Z(xe, Fe);
        return;
      }
      if (xe.kind === "space_pan" || xe.kind === "space_orbit") {
        const st = Sr();
        Ht(xe.kind === "space_pan" ? fm(st, Fe.x - xe.last.x, Fe.y - xe.last.y, t.width, t.height, xe.depth) : dm(st, Fe.x - xe.last.x, Fe.y - xe.last.y, t.height, xe.pivot)), xe.last = Fe;
        return;
      }
      if (xe.kind === "pan_frame") {
        const st = ae(xe.shot);
        if (!st || !xe.shot) return;
        const ft = Fe.x - xe.last.x, mt = Fe.y - xe.last.y, gt = og(xe.shot, {
          dx: ft,
          dy: mt,
          focalPx: st.focalPx,
          invertX: ((bt = u.ui_settings) == null ? void 0 : bt.invert_view_x) === !0,
          invertY: ((ct = u.ui_settings) == null ? void 0 : ct.invert_view_y) === !0
        });
        xe.shot.yaw_deg = gt.yaw_deg, xe.shot.pitch_deg = gt.pitch_deg, xe.changed = xe.changed || Math.abs(ft) > 0 || Math.abs(mt) > 0, xe.last = Fe, Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "roll_frame") {
        if (xe.source === "knob") return;
        te(xe, Fe, Oe);
        return;
      }
      if (xe.kind === "move") {
        const st = Fe.x - xe.offset.x, ft = Fe.y - xe.offset.y;
        if (n.mode === "frame" && d) {
          const mt = se(), gt = b(mt);
          if (!mt || !gt) return;
          const sn = {
            x: Ee((st - gt.x) / Math.max(1, gt.w), 0, 1),
            y: Ee((ft - gt.y) / Math.max(1, gt.h), 0, 1)
          }, Kt = ee(mt, sn);
          if (!Kt) return;
          const vn = Qa(Kt);
          Dn(xe.item, { yaw_deg: vn.yaw, pitch_deg: vn.pitch });
        } else if (n.mode === "unwrap") {
          const mt = me(), gt = Ee((st - mt.x) / Math.max(mt.w, 1), 0, 1), sn = Ee((ft - mt.y) / Math.max(mt.h, 1), 0, 1);
          Dn(xe.item, { yaw_deg: jt(gt * 360 - 180), pitch_deg: Ee(90 - sn * 180, -90, 90) });
        } else {
          const mt = yt(st, ft), gt = Qa(mt);
          Dn(xe.item, { yaw_deg: gt.yaw, pitch_deg: gt.pitch });
        }
        le(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "move_stroke_group") {
        const st = n.mode === "frame" ? (() => {
          const gt = se();
          return gt ? nt(Fe, gt, performance.now()) : null;
        })() : Be(Fe, performance.now());
        if (!st || !xe.startUv) return;
        const ft = bn(Number(st.u || 0), Number(xe.startUv.u || 0)), mt = Number(st.v || 0) - Number(xe.startUv.v || 0);
        K((_t = xe.item) == null ? void 0 : _t.actionGroupId, ft, mt, xe.snapshot, (Xe = xe.item) == null ? void 0 : Xe.layerKind, xe.frameSnapshot) && (ye({ rebuildPaintEngine: !1 }), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_raster_object") {
        const st = n.mode === "frame" ? (() => {
          const gt = se();
          return gt ? nt(Fe, gt, performance.now()) : null;
        })() : Be(Fe, performance.now());
        if (!st || !xe.startUv) return;
        const ft = bn(Number(st.u || 0), Number(xe.startUv.u || 0)), mt = Number(st.v || 0) - Number(xe.startUv.v || 0);
        W(((Qe = xe.item) == null ? void 0 : Qe.rasterObjectId) || ((it = xe.item) == null ? void 0 : it.id) || "", ft, mt, xe.snapshot) && (ne(), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "scale_raster_object") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        k(((Ln = xe.item) == null ? void 0 : Ln.rasterObjectId) || ((qe = xe.item) == null ? void 0 : qe.id) || "", ft, xe.snapshot) && (ne(), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_multi") {
        const st = Fe.x - Number(((Ke = xe.offset) == null ? void 0 : Ke.x) || 0), ft = Fe.y - Number(((Je = xe.offset) == null ? void 0 : Je.y) || 0);
        let mt = !1, gt = !1, sn = !1;
        const Kt = st - Number(((Zt = xe.startCenter) == null ? void 0 : Zt.x) || st), vn = ft - Number(((Mt = xe.startCenter) == null ? void 0 : Mt.y) || ft);
        for (const St of Array.isArray(xe.stickerSnapshots) ? xe.stickerSnapshots : []) {
          const an = (_ === "cutout" ? we() : S()).find((Rt) => String((Rt == null ? void 0 : Rt.id) || "") === String(St.id || ""));
          if (!an || !le(an)) continue;
          const Lt = {
            x: Number(((kr = St.center) == null ? void 0 : kr.x) || 0) + Kt,
            y: Number(((Ni = St.center) == null ? void 0 : Ni.y) || 0) + vn
          };
          if (n.mode === "frame" && d) {
            const Rt = se(), Gt = b(Rt);
            if (!Rt || !Gt) continue;
            const $e = {
              x: Ee((Lt.x - Gt.x) / Math.max(1, Gt.w), 0, 1),
              y: Ee((Lt.y - Gt.y) / Math.max(1, Gt.h), 0, 1)
            }, et = ee(Rt, $e);
            if (!et) continue;
            const Nn = Qa(et);
            Dn(an, { yaw_deg: Nn.yaw, pitch_deg: Nn.pitch });
          } else if (n.mode === "unwrap") {
            const Rt = me(), Gt = Ee((Lt.x - Rt.x) / Math.max(Rt.w, 1), 0, 1), $e = Ee((Lt.y - Rt.y) / Math.max(Rt.h, 1), 0, 1);
            Dn(an, { yaw_deg: jt(Gt * 360 - 180), pitch_deg: Ee(90 - $e * 180, -90, 90) });
          } else {
            const Rt = yt(Lt.x, Lt.y), Gt = Qa(Rt);
            Dn(an, { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch });
          }
          mt = !0;
        }
        for (const St of Array.isArray(xe.strokeSnapshots) ? xe.strokeSnapshots : []) {
          const an = {
            x: Number(((Ci = St.center) == null ? void 0 : Ci.x) || 0) + Kt,
            y: Number(((Ai = St.center) == null ? void 0 : Ai.y) || 0) + vn
          }, Lt = n.mode === "frame" ? (() => {
            const Gt = se();
            return Gt ? nt(an, Gt, performance.now()) : null;
          })() : Be(an, performance.now()), Rt = St.centerUv || null;
          if (Lt && Rt) {
            const Gt = bn(Number(Lt.u || 0), Number(Rt.u || 0)), $e = Number(Lt.v || 0) - Number(Rt.v || 0);
            K(St.id, Gt, $e, St.snapshot, St.layerKind, St.frameSnapshot) && (mt = !0, gt = !0);
          }
        }
        for (const St of Array.isArray(xe.rasterSnapshots) ? xe.rasterSnapshots : []) {
          const an = {
            x: Number(((Ta = St.center) == null ? void 0 : Ta.x) || 0) + Kt,
            y: Number(((Da = St.center) == null ? void 0 : Da.y) || 0) + vn
          }, Lt = n.mode === "frame" ? (() => {
            const Gt = se();
            return Gt ? nt(an, Gt, performance.now()) : null;
          })() : Be(an, performance.now()), Rt = St.centerUv || null;
          if (Lt && Rt) {
            const Gt = bn(Number(Lt.u || 0), Number(Rt.u || 0)), $e = Number(Lt.v || 0) - Number(Rt.v || 0);
            W(St.id, Gt, $e, St.snapshot) && (mt = !0, sn = !0);
          }
        }
        mt && (gt ? ye({ rebuildPaintEngine: !1 }) : sn ? ne() : he(), Ie({ localOnly: !0 }));
        return;
      }
      if (xe.kind === "scale_stroke_group") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        ce((So = xe.item) == null ? void 0 : So.actionGroupId, ft, 0, xe.snapshot, (La = xe.item) == null ? void 0 : La.layerKind, xe.frameSnapshot) && (ye({ rebuildPaintEngine: !1 }), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "rotate_stroke_group") {
        let st = (Math.atan2(Fe.y - xe.center.y, Fe.x - xe.center.x) - Number(xe.startAng || 0)) * ki;
        Oe.shiftKey && (st = Math.round(st / 45) * 45), ce((Ra = xe.item) == null ? void 0 : Ra.actionGroupId, 1, st, xe.snapshot, (Va = xe.item) == null ? void 0 : Va.layerKind, xe.frameSnapshot) && (ye({ rebuildPaintEngine: !1 }), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "marquee_select") {
        xe.current = Fe, Ie({ localOnly: !0, reason: dt.OVERLAY });
        return;
      }
      if (xe.kind === "scale") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / xe.startDist;
        Dn(xe.item, { hFOV_deg: Ee(xe.startHFOV * ft, 1, 179), vFOV_deg: Ee(xe.startVFOV * ft, 1, 179) }), N(xe.item) || (xe.item.aspect_id = vi(xe.item)), le(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_x") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / xe.startDist;
        Dn(xe.item, { hFOV_deg: Ee(xe.startHFOV * ft, 1, 179) }), N(xe.item) || (xe.item.aspect_id = vi(xe.item)), le(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_y") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / xe.startDist;
        Dn(xe.item, { vFOV_deg: Ee(xe.startVFOV * ft, 1, 179) }), N(xe.item) || (xe.item.aspect_id = vi(xe.item)), le(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "rotate") {
        let ft = (Math.atan2(Fe.y - xe.center.y, Fe.x - xe.center.x) - xe.startAng) * ki, mt = xe.startRot - ft;
        Oe.shiftKey && (mt = Math.round(mt / 45) * 45), Dn(xe.item, { [le(xe.item) ? "rot_deg" : "roll_deg"]: mt }), le(xe.item) && he(), Ie({ localOnly: !0 });
      }
    }
  }
  function Oa() {
    var Fe, xe, bt, ct, _t, Xe, Qe;
    const Oe = n.interaction;
    if (!((Oe == null ? void 0 : Oe.kind) === "roll_frame" && Oe.source === "knob")) {
      if ((Oe == null ? void 0 : Oe.kind) === "space_pan" || (Oe == null ? void 0 : Oe.kind) === "space_orbit") {
        n.interaction = null, Et(n.pointerPos), Pn();
        return;
      }
      if ((Oe == null ? void 0 : Oe.kind) === "world_select" || (Oe == null ? void 0 : Oe.kind) === "world_gizmo") {
        vo(Oe);
        return;
      }
      if (((Fe = n.interaction) == null ? void 0 : Fe.kind) === "paint_stroke" || ((xe = n.interaction) == null ? void 0 : xe.kind) === "paint_lasso_fill") {
        ke();
        const it = oe(n.interaction), Ln = !!n.interaction._hasCommittedSegments;
        if (it || Ln) {
          ye();
          const qe = String(((bt = n.interaction.stroke) == null ? void 0 : bt.actionGroupId) || "").trim();
          if (qe) {
            const Je = H().find((Zt) => String((Zt == null ? void 0 : Zt.actionGroupId) || "") === qe);
            Je && (Je.frame = null);
          }
          const Ke = be(n.interaction);
          Ke && (it ? String(((ct = n.interaction.stroke) == null ? void 0 : ct.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ke), Ve()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ke) : n.paintEngine.cancelActiveStroke(Ke)), ze(), ie(), ar(), Pn(), o.setDirtyCanvas(!0, !0), Ie();
        } else {
          const qe = be(n.interaction);
          qe && n.paintEngine.cancelActiveStroke(qe);
        }
      } else if (((_t = n.interaction) == null ? void 0 : _t.kind) === "marquee_select") {
        const it = q(n.interaction.start, n.interaction.current), qe = [
          ..._ === "cutout" ? C().filter((Ke) => !y(Ke)) : [...S()],
          ...M(),
          ...L()
        ].filter((Ke) => Ce(it, Me(Ke)));
        Ye(qe, ((Xe = qe[qe.length - 1]) == null ? void 0 : Xe.id) || null), d && qe.length && (n.cutoutAspectOpen = !1), ar(), Pn(), Ie();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Qe = n.interaction) == null ? void 0 : Qe.kind))
        n.interaction.changed && (ze(), Y(), ar());
      else if (n.interaction && n.interaction.kind !== "view") {
        let it = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (it = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (it = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (it = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (it = !0), it && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? ye({ rebuildPaintEngine: !0 }) : ne()), ze(), ie(), o.setDirtyCanvas(!0, !0), wa(), Pn(), Ie();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && de(), ke(), Oe && Oe.kind === "view" && Gr(() => m.endDrag(performance.now())), yo(), Pn(), Et(n.pointerPos), Ie();
    }
  }
  function Ol() {
    var Oe, Fe, xe, bt, ct;
    if (!J()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Fe = n.interaction) == null ? void 0 : Fe.kind) === "world_gizmo") {
        vo(n.interaction);
        return;
      }
      if (((xe = n.interaction) == null ? void 0 : xe.kind) === "view" && Gr(() => m.endDrag(performance.now())), ((bt = n.interaction) == null ? void 0 : bt.kind) === "paint_stroke" || ((ct = n.interaction) == null ? void 0 : ct.kind) === "paint_lasso_fill") {
        ke();
        const _t = be(n.interaction);
        _t && n.paintEngine.cancelActiveStroke(_t);
      }
      n.interaction = null, ke(), yo(), Et(n.pointerPos), Ie({ localOnly: !0 });
    }
  }
  function Fl(Oe) {
    const Fe = je(Oe), xe = Dt(Fe, !0);
    n.interaction || (Et(Fe), xe && n.mode === "frame" && n.primaryTool === "cursor" && Ie({ localOnly: !0, reason: dt.OVERLAY }));
  }
  function Fa(Oe) {
    if (n.mode === "frame") {
      const Fe = je(Oe), xe = Ts(Oe);
      xe && Xn(), xe && ve() ? ka(Fe, -xe) : xe && Ma(Fe, xe) && Ie({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (G(), Ne()) {
        const Fe = Ts(Oe);
        Fe && Pa(je(Oe), -Fe);
      } else m.applyWheelEvent(Oe) && Ie({ localOnly: !0, reason: dt.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: p,
        _segmentFrameStroke: E,
        appendLassoPoint: U,
        appendPaintPoint: z,
        applyRasterObjectOffset: W,
        applyRasterObjectTransform: k,
        applySharedRollInteractionPoint: te,
        applyStrokeGroupOffset: K,
        applyStrokeGroupTransform: ce,
        buildFreehandStrokeRecord: O,
        buildLassoFillStrokeRecord: fe,
        cameraShoots: F,
        cancelFrameCameraGesture: J,
        cancelViewTransition: G,
        clearSelection: Q,
        commitAndRefreshNode: Y,
        commitPaintInteraction: oe,
        commitState: ie,
        currentSpaceCamera: x,
        cutoutCamera: T,
        dragFrame: Z,
        editorViewInput: V,
        ensureGroupFrame: pe,
        frameContext: Se,
        frameLocalPointToWorldDir: ee,
        frameSpaceView: I,
        frameTarget: X,
        getActiveCutoutShot: se,
        getActivePaintTargetDescriptor: be,
        getCutoutSelectableItems: we,
        getCutoutSelectableItemsForHit: C,
        getFrameViewLayout: ae,
        getFrameViewRect: b,
        getList: S,
        getMultiSelectionGeom: $,
        getPaintingGroupList: H,
        getRasterObjectCenterUv: v,
        getRasterObjectList: w,
        getSelectableRasterObjectItems: L,
        getSelectableStrokeGroupItems: M,
        getSelected: P,
        getSelectedItems: A,
        getStrokeGroupCenterUv: B,
        getStrokeGroupStrokes: re,
        getUnwrapRect: me,
        handleHit: j,
        hideTooltip: de,
        hitObjectAt: _e,
        invalidateLivePaintPreviewCaches: ke,
        isCameraSelected: ue,
        isFreeFrameView: ve,
        isFreeSpaceView: Ne,
        isItemLocked: h,
        isRasterObjectItem: R,
        isSceneSticker: N,
        isShotItem: y,
        isSpaceView: D,
        isStickerItem: le,
        isStrokeGroupItem: ge,
        markObjectVisualsDirty: he,
        markPaintCompositeVisualsDirty: ne,
        markPaintStrokeVisualsDirty: ye,
        objectGeom: Me,
        paintingShown: Ae,
        parseRasterObjectSelectionId: Le,
        playback: Re,
        poseOf: He,
        pushHistory: ze,
        rectFromPoints: q,
        rectIntersectsGeom: Ce,
        refreshPaintEngineRevisionCache: Ve,
        requestDraw: Ie,
        screenPos: je,
        screenPosCss: We,
        screenPosToErpPoint: Be,
        screenPosToFrameAsErpPoint: nt,
        screenToWorldDir: yt,
        selectWorldSticker: Ft,
        selectedWorldSticker: vt,
        setPointerPos: Dt,
        setSelectedItem: tn,
        setSelectedItems: Ye,
        setSpaceView: Ht,
        shortestWrappedDelta: bn,
        spaceViewState: Sr,
        startAnimation: Gr,
        startCameraPress: on,
        startFrameDrag: Mn,
        startPanFrame: Wr,
        startSpaceDrag: wr,
        stopTimelinePlayback: Xn,
        supportsErpPainting: _a,
        supportsFramePainting: ho,
        syncCutoutShot: Sa,
        syncFloatingViewButtonState: mo,
        syncFrameRollKnob: go,
        syncSidePanelControls: wa,
        syncTimeline: xa,
        syncViewToggleState: yo,
        updateCursor: Et,
        updateSelectionMenu: Pn,
        updateSidePanel: ar,
        viewControls: bo,
        writePose: Dn,
        zoomFrameAt: ka,
        zoomFrameViewAt: Ma,
        zoomSpaceAt: Pa
      } = Oe);
    },
    onCanvasPointerDown: El,
    worldGizmoPointer: xr,
    hoverWorldGizmo: Ca,
    onCanvasPointerMove: Ea,
    onCanvasPointerUp: Oa,
    onCanvasPointerCancel: Ol,
    onCanvasMouseMove: Fl,
    onCanvasWheel: Fa
  };
}
function p2(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: a,
    shotEditor: s,
    state: l,
    studio: c,
    type: d,
    uiState: u
  } = e;
  let f, g, _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee;
  function I(we, C, ae = !1) {
    var L;
    ie();
    const b = s && n.mode === "frame" ? E() : null, S = b || W(), $ = b ? "shot" : te(), H = Y();
    if (H && !Se(H) || !H && (!S || $ === "stroke" || K(S))) return;
    const v = (((L = u.sidePanel) == null ? void 0 : L.params) || []).find((M) => M.key === we);
    if (!v || v.enabled === !1) return;
    let w = Number(C);
    if (Number.isNaN(w) && (w = 0), (H || t) && wP.has(we) ? w = we === "scale" ? Math.max(w, Fg) : w : w = Ee(w, Number(v.min), Number(v.max)), we === "yaw_deg" && (w = jt(w)), !H && t && we.startsWith("position_")) {
      T(), b1(l.camera, n.frame, we, w), pe(), Q(), ae && G();
      return;
    }
    if (H) {
      S1(H, n.frame, we, w), fe(), pe(), Q(), ae && G();
      return;
    }
    we === "opacity" ? v1(S, n.frame, w / 100) : ee(S, { [we]: w }), s && !ce(S) && (we === "hFOV_deg" || we === "vFOV_deg") && (S.aspect_id = vi(S)), pe(), Q(), ae && G();
  }
  async function X(we) {
    var b, S, $, H, v, w, L;
    const C = we.target.closest("[data-action]");
    if (!C) return;
    const ae = String(C.getAttribute("data-action") || "");
    if (ae === "coverage-set") {
      const M = kn(C.getAttribute("data-coverage"));
      if (M === kn(l.coverage)) return;
      l.coverage = M, n.coverage = M, r && (r.value = String(M)), o ? a.backgroundDirty = !0 : (p(), x({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), pe(), V(), Q();
      return;
    }
    if (ae === "toggle-selection-picker") {
      if ((S = (b = u.sidePanel) == null ? void 0 : b.selectionPicker) != null && S.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (ae === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const M = String(C.getAttribute("data-selection-id") || "");
      let P = null;
      if (M && (d === "stickers" ? P = [...z(), ...c ? l.shots : []].find((A) => String((A == null ? void 0 : A.id) || "") === M) || null : P = (($ = U().find((A) => {
        var B;
        return String(((B = A == null ? void 0 : A.item) == null ? void 0 : B.id) || "") === M;
      })) == null ? void 0 : $.item) || null), oe(P || null), P && !O(P)) {
        const A = J(P);
        Z(jt(Number(A.yaw_deg || 0)), Ee(Number(A.pitch_deg || 0), -89.9, 89.9));
      }
      pe(), V(), Q();
      return;
    }
    if (ae === "copy-state-inline") {
      const M = W(), P = te();
      if (!M || P === "stroke" || k().length > 1) return;
      const A = JSON.stringify(s && P !== "image" ? g(M) : _(J(M)));
      try {
        await navigator.clipboard.writeText(A), (H = u.sidePanel) != null && H.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = u.sidePanel) != null && B.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (ae === "set-invert-x") {
      l.ui_settings.invert_view_x = C.getAttribute("data-value") === "1", F(), pe(), (v = i.setDirtyCanvas) == null || v.call(i, !0, !0), Q();
      return;
    }
    if (ae === "set-invert-y") {
      l.ui_settings.invert_view_y = C.getAttribute("data-value") === "1", F(), pe(), (w = i.setDirtyCanvas) == null || w.call(i, !0, !0), Q();
      return;
    }
    if (ae === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, F(), pe(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), Q();
      return;
    }
    if (ae === "close-preview") {
      m();
      return;
    }
    if (ae === "cancel-close") {
      m();
      return;
    }
    ae === "save-close" && (f(), m());
  }
  function se(we) {
    const C = we.target.closest("[data-action='param-input']");
    C && I(String(C.getAttribute("data-param-key") || ""), C.value, !1);
  }
  function be(we) {
    const C = we.target.closest("[data-action='param-input']");
    C && I(String(C.getAttribute("data-param-key") || ""), C.value, !0);
  }
  return {
    connect(we) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: g,
        buildCanonicalSelectedStickerState: _,
        closeEditor: m,
        commitState: p,
        getActiveCutoutShot: E,
        getCutoutInspectorItems: U,
        getList: z,
        getSelected: W,
        getSelectedItems: k,
        getSelectedKind: te,
        isItemLocked: K,
        isSceneSticker: ce,
        isStrokeGroupItem: O,
        markObjectVisualsDirty: fe,
        persistUiSettings: F,
        poseOf: J,
        pushHistory: G,
        requestDraw: Q,
        selectedWorldSticker: Y,
        setSelectedItem: oe,
        stopTimelinePlayback: ie,
        syncCoverageChangeToNodePreviews: x,
        syncCutoutShot: T,
        turnViewTo: Z,
        updateSelectionMenu: V,
        updateSidePanel: pe,
        worldStickerEditable: Se,
        writePose: ee
      } = we);
    },
    onSidePanelClick: X,
    onSidePanelInput: se,
    onSidePanelChange: be
  };
}
function h2(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: a,
    readOnly: s,
    root: l,
    runtime: c,
    shotEditor: d,
    tooltip: u,
    uiState: f,
    videoEl: g
  } = e;
  let _, m, p, E, U, z, W, k, te, K, ce, O, fe, F, J, G, Q, Y, oe, ie, x, T, Z, V, pe, Se, ee, I, X, se, be, we, C, ae, b, S, $, H, v, w, L, M, P, A, B, re, me, j, de, _e, ke;
  const ue = () => {
    if (!t.customPaintSessionStart) return;
    if (rl(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (zP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const ze = [
      Rn(t.customPaintColor),
      ...t.customPaintHistory.filter((q) => !rl(q, t.customPaintColor))
    ];
    t.customPaintHistory = ze.slice(0, 8), t.customPaintSessionStart = null;
  }, ve = (ze = !1) => {
    !i || i.hidden || (ze ? ue() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, Ne = () => {
    i && (i.hidden && (t.customPaintSessionStart = Rn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function h() {
    v();
  }
  function R(ze) {
    var yt, Ft, vt, Dt, tn;
    if ((Ft = (yt = ze.target) == null ? void 0 : yt.matches) != null && Ft.call(yt, "[data-confirm-overlay]")) {
      const Ye = (vt = f.confirmDialog) == null ? void 0 : vt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ye == null || Ye(!1);
      return;
    }
    const q = ze.target.closest("[data-space-mode]");
    if (q) {
      ae(q.getAttribute("data-space-mode"));
      return;
    }
    const Ce = ze.target.closest("[data-gizmo-mode]");
    if (Ce) {
      t.gizmoMode = Ce.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, de(), I({ localOnly: !0, reason: dt.VIEW });
      return;
    }
    const Ve = ze.target.closest("[data-view]");
    if (Ve) {
      if (Ve.getAttribute("aria-disabled") === "true") return;
      const Ye = t.mode;
      t.mode = String(Ve.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (Ye !== "frame" && (c.frameSafeRect = null), _e(), de()), F(), P(), I();
      return;
    }
    const Ie = ze.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ie && !s) {
      if (Ie.matches("[data-tool-mode]")) {
        const Ye = String(Ie.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ye, (Ye === "paint" || Ye === "mask") && te({ preservePanelValues: !0 }), w(), _e(), de(), I();
        return;
      }
      if (Ie.matches("[data-tool-ui-action]")) {
        const Ye = String(Ie.getAttribute("data-tool-ui-action") || "");
        if ((Ye === "undo" || Ye === "redo") && Ie.disabled) return;
        Ye === "undo" ? X(-1) : Ye === "redo" ? X(1) : Ye === "clear" ? W() : Ye === "add" || Ye === "add-image" ? m() : Ye === "add-world" ? E() : Ye === "add-or-look" ? _() : Ye === "add-camera" && p();
        return;
      }
      if (Ie.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ye = String(Ie.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ye, te({ preservePanelValues: !0 }), In[Ye] && (t.activeBrushPresetId = Ye), w(), _e(), de(), I();
        return;
      }
      if (Ie.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ie.getAttribute("data-mask-tool") || "pen"), te({ preservePanelValues: !0 }), w(), _e(), de(), I();
        return;
      }
      if (Ie.matches("[data-paint-layer-clear-current]")) {
        const Ye = String(Ie.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        k(Ye);
        return;
      }
      if (Ie.matches("[data-paint-color-swatch]")) {
        const Ye = Al.find((Ht) => Ht.id === Ie.getAttribute("data-paint-color-swatch"));
        if (!Ye) return;
        t.paintColor = Rn(Ye.color), ve(!0), w();
        return;
      }
      if (Ie.matches("[data-paint-color-custom]")) {
        ze.preventDefault(), ze.stopPropagation(), i && !i.hidden ? ve(!0) : Ne(), w();
        return;
      }
    }
    const je = String(((Dt = Ie == null ? void 0 : Ie.getAttribute) == null ? void 0 : Dt.call(Ie, "data-action")) || "");
    if (je === "video-play-toggle") {
      if (ze.preventDefault(), ze.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      ke.resumeAfterScrub = !1, A();
      return;
    }
    if (je === "video-audio-toggle") {
      ze.preventDefault(), ze.stopPropagation(), me(), typeof (Ie == null ? void 0 : Ie.blur) == "function" && Ie.blur();
      return;
    }
    if (je === "video-loop-toggle") {
      if (ze.preventDefault(), ze.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      const Ye = !f.videoTransport.loop;
      f.videoTransport.loop = Ye, g.loop = Ye, M({
        hasAudio: f.videoTransport.hasAudio,
        loop: Ye,
        muted: g.muted,
        volume: Number(g.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ie == null ? void 0 : Ie.blur) == "function" && Ie.blur();
      return;
    }
    if (!s) {
      if (je === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (je === "frame-aspect-set") {
        const Ye = t.mode === "frame" ? G() : null;
        if (!Ye || Ye.locked === !0) return;
        C(Ye, String(Ie.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, L(), pe(), K(), P(), _e(), de(), I();
        return;
      }
      if (je === "frame-aspect-custom") {
        const Ye = t.mode === "frame" ? G() : null, Ht = Ie.getAttribute("data-custom-width"), bn = Ie.getAttribute("data-custom-height");
        if (!Ye || !U(Ye, Ht, bn)) return;
        f.frameRail.aspectOpen = !1, L(), pe(), K(), P(), I();
        return;
      }
      if (je === "frame-rotate-90") {
        const Ye = t.mode === "frame" ? G() : null;
        if (!Ye || Ye.locked === !0) return;
        be(Ye), f.frameRail.aspectOpen = !1, L(), pe(), K(), P(), I();
        return;
      }
      if (je === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, de(), I();
        return;
      }
      if (je === "aspect-set") {
        const Ye = Y();
        if (!Ye) return;
        const Ht = String(Ie.getAttribute("data-aspect") || "1:1");
        C(Ye, Ht), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), pe(), K(), de(), I();
        return;
      }
      if (je === "rotate-90") {
        const Ye = Y();
        if (!Ye || x()) return;
        be(Ye), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), pe(), K(), de(), I();
        return;
      }
      if (je === "bring-front") {
        z();
        return;
      }
      if (je === "send-back") {
        we();
        return;
      }
      if (je === "duplicate") {
        fe();
        return;
      }
      if (je === "replace-image") {
        ee();
        return;
      }
      if (je === "toggle-lock") {
        re();
        return;
      }
      if (je === "back-initial") {
        se();
        return;
      }
      if (je === "toggle-visible") {
        B();
        return;
      }
      if (je === "delete") {
        O();
        return;
      }
    }
    if (je === "reset-view") {
      if (t.mode === "frame") return;
      j(
        { position: $(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((tn = ce()) == null ? void 0 : tn.radius) || nr },
        { mode: il(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (je === "frame-view") {
      if (!T() || il(t.spaceMode, t.viewTransition) !== "6dof") return;
      J();
      return;
    }
    if (je === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, qP(r == null ? void 0 : r.id, t.showGrid), h(), I();
      return;
    }
    if (je === "toggle-fullscreen") {
      ze.preventDefault(), ze.stopPropagation(), Le();
      return;
    }
    if (je === "toggle-output-preview-size") {
      ze.preventDefault(), ze.stopPropagation();
      const Ye = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ye, H(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ye ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), He(), I();
      return;
    }
    const We = ze.target.closest("[data-paint-history-index]");
    if (!We) return;
    const Be = Number(We.getAttribute("data-paint-history-index")), nt = t.customPaintHistory[Be];
    nt && (t.customPaintColor = Rn(nt), t.paintColor = Rn(nt), w());
  }
  function N(ze) {
    const q = ze.target.closest("[data-video-seek]");
    if (q) {
      if (!(g instanceof HTMLVideoElement)) return;
      Z.playing && (ke.resumeAfterScrub = !0), Z.seek(di(Number(q.value || 0), V()));
      return;
    }
    const Ce = ze.target.closest("[data-video-volume]");
    if (Ce) {
      if (!(g instanceof HTMLVideoElement)) return;
      const je = Ee(Number(Ce.value || 0), 0, 1);
      g.volume = je, g.muted = je <= 1e-4, M({
        hasAudio: f.videoTransport.hasAudio,
        muted: g.muted,
        volume: je
      });
      return;
    }
    const Ve = ze.target.closest("[data-paint-size-slider]");
    if (Ve) {
      if (Ve.disabled) return;
      const je = Math.max(1, Math.min(120, Math.round(Number(Ve.value)))), We = Q(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[We] = je, w(), b();
      return;
    }
    const Ie = ze.target.closest("[data-paint-alpha-slider]");
    if (Ie) {
      const je = { ...t.customPaintColor, a: Ee(Number(Ie.value) / 100, 0, 1) };
      t.customPaintColor = Rn(je), t.paintColor = Rn(je), w();
    }
  }
  function y(ze) {
    var q;
    if (ze.target.closest("[data-video-seek]")) {
      if (!(g instanceof HTMLVideoElement)) return;
      ke.resumeAfterScrub && Z.play(), ke.resumeAfterScrub = !1;
      return;
    }
    if (ze.target.closest("[data-video-volume]")) {
      typeof ((q = ze.target) == null ? void 0 : q.blur) == "function" && ze.target.blur();
      return;
    }
    ze.target.closest("[data-paint-size-slider]") && oe();
  }
  function D(ze) {
    const q = ze.target.closest("[data-tip]");
    !q || !l.contains(q) || u.target !== q && (u.target = q, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === q && S(q);
    }, 220));
  }
  function le(ze) {
    var Ve, Ie;
    const q = ze.target.closest("[data-tip]");
    !q || u.target !== q || (ze.relatedTarget instanceof Element ? (Ie = (Ve = ze.relatedTarget).closest) == null ? void 0 : Ie.call(Ve, "[data-tip]") : null) === q || ie();
  }
  function ge(ze, q) {
    var Be;
    if (!o) return;
    const Ce = o.getBoundingClientRect(), Ve = Ee((ze - Ce.left) / Math.max(1, Ce.width), 0, 1), Ie = 1 - Ee((q - Ce.top) / Math.max(1, Ce.height), 0, 1), je = fu(t.customPaintColor), We = { ...du(je.h, Ve, Ie), a: Number(((Be = t.customPaintColor) == null ? void 0 : Be.a) ?? 1) };
    t.customPaintColor = Rn(We), t.paintColor = Rn(We), w();
  }
  function he(ze) {
    var je;
    if (!a) return;
    const q = a.getBoundingClientRect(), Ce = Ee((ze - q.left) / Math.max(1, q.width), 0, 1), Ve = fu(t.customPaintColor), Ie = { ...du(Ce, Ve.s, Ve.v), a: Number(((je = t.customPaintColor) == null ? void 0 : je.a) ?? 1) };
    t.customPaintColor = Rn(Ie), t.paintColor = Rn(Ie), w();
  }
  function ne(ze, q) {
    const Ce = ze.pointerId;
    q(ze);
    const Ve = (je) => {
      je.pointerId === Ce && q(je);
    }, Ie = (je) => {
      je.pointerId === Ce && (window.removeEventListener("pointermove", Ve), window.removeEventListener("pointerup", Ie), window.removeEventListener("pointercancel", Ie));
    };
    window.addEventListener("pointermove", Ve), window.addEventListener("pointerup", Ie), window.addEventListener("pointercancel", Ie);
  }
  function ye() {
    const ze = !!t.fullscreen;
    ji(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: ze ? Ge.fullscreen_close : Ge.fullscreen,
      label: ze ? "Exit Fullscreen" : "Fullscreen",
      tip: ze ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Me(ze) {
    const q = !!ze;
    t.fullscreen !== q && (t.fullscreen = q, l.classList.toggle("pano-modal-fullscreen", q), q ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), h(), ye(), Se(), I());
  }
  function Ae() {
    return document.fullscreenElement === n;
  }
  async function Le() {
    var ze, q;
    try {
      if (!document.fullscreenEnabled) {
        Me(!t.fullscreen);
        return;
      }
      Ae() ? await ((q = document.exitFullscreen) == null ? void 0 : q.call(document)) : await ((ze = n.requestFullscreen) == null ? void 0 : ze.call(n));
    } catch {
      Me(!t.fullscreen);
    }
  }
  function Re() {
    document.fullscreenEnabled && Me(Ae());
  }
  function He() {
    const ze = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = ze ? Ge.fullscreen_close : Ge.fullscreen, f.outputPreviewToggle.label = ze ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = ze ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(ze) {
      ({
        addCutoutFrame: _,
        addImageSticker: m,
        addStudioCamera: p,
        addWorldImageSticker: E,
        applyCutoutAspectCustom: U,
        bringSelectedToFront: z,
        clearAll: W,
        clearPaintingLayer: k,
        clearSelection: te,
        commitAndRefreshNode: K,
        contentSphere: ce,
        deleteSelected: O,
        duplicateSelected: fe,
        forceCursorTool: F,
        frameSpaceContent: J,
        getActiveCutoutShot: G,
        getBrushPresetIdForTool: Q,
        getSelected: Y,
        hidePaintSizePreview: oe,
        hideTooltip: ie,
        isErpCamera: x,
        isFreeSpaceView: T,
        playback: Z,
        playbackFps: V,
        pushHistory: pe,
        queueVideoTransportLayout: Se,
        replaceSelectedImage: ee,
        requestDraw: I,
        restoreHistory: X,
        restoreSelectedToInitialPose: se,
        rotateCutoutAspect90: be,
        sendSelectedToBack: we,
        setShotAspect: C,
        setSpaceMode: ae,
        showPaintSizePreview: b,
        showTooltipFor: S,
        spaceOrigin: $,
        startAnimation: H,
        syncFloatingViewButtonState: v,
        syncPaintUi: w,
        syncSidePanelControls: L,
        syncVideoTransportState: M,
        syncViewToggleState: P,
        togglePlayback: A,
        toggleSelectedExternalStickerVisibility: B,
        toggleSelectedLock: re,
        toggleVideoMuted: me,
        transitionView: j,
        updateSelectionMenu: de,
        updateSidePanel: _e,
        videoState: ke
      } = ze);
    },
    closePaintColorPop: ve,
    syncGridToggleButton: h,
    onRootClick: R,
    onRootInput: N,
    onRootChange: y,
    onRootPointerOver: D,
    onRootPointerOut: le,
    updatePaintColorFromSv: ge,
    updatePaintColorFromHue: he,
    bindDrag: ne,
    syncFullscreenButton: ye,
    setFullscreenState: Me,
    onFullscreenChange: Re,
    syncOutputPreviewToggleButton: He
  };
}
function m2(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: a
  } = e;
  let s, l, c, d, u, f, g, _, m, p, E, U;
  function z(F) {
    var J, G, Q, Y, oe;
    if (F.key === "Escape") {
      if (s()) {
        F.preventDefault(), F.stopPropagation(), (J = F.stopImmediatePropagation) == null || J.call(F);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        F.preventDefault(), F.stopPropagation(), (G = F.stopImmediatePropagation) == null || G.call(F), (Q = document.exitFullscreen) == null || Q.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        F.preventDefault(), F.stopPropagation(), (Y = F.stopImmediatePropagation) == null || Y.call(F), m(!1);
        return;
      }
      F.preventDefault(), F.stopPropagation(), (oe = F.stopImmediatePropagation) == null || oe.call(F), l();
    }
  }
  function W(F) {
    const J = String(F.key || ""), G = String(F.code || ""), Q = Number(F.keyCode || 0);
    if (!(J === "Delete" || G === "Delete" || Q === 46) && !(J === "Backspace" || G === "Backspace" || Q === 8)) return;
    const ie = F.target, x = ((ie == null ? void 0 : ie.tagName) || "").toUpperCase();
    if (x === "INPUT" || x === "TEXTAREA" || ie != null && ie.isContentEditable) return;
    if (o.selection) {
      d(), F.preventDefault(), F.stopPropagation();
      return;
    }
    if (u()) {
      F.preventDefault(), F.stopPropagation();
      return;
    }
    g() && (c(), F.preventDefault(), F.stopPropagation());
  }
  function k(F) {
    if (F.code !== "Space" || F.ctrlKey || F.metaKey || F.altKey || n || !i || !a.timeline.visible || a.confirmDialog.visible) return !1;
    const J = F.composedPath()[0];
    if (J !== document.body && J !== document.documentElement && !r.contains(J)) return !1;
    const G = ((J == null ? void 0 : J.tagName) || "").toUpperCase();
    return G === "INPUT" ? !SP.has(String(J.type || "text").toLowerCase()) : G !== "TEXTAREA" && G !== "SELECT" && !(J != null && J.isContentEditable);
  }
  function te(F) {
    k(F) && (F.preventDefault(), F.stopPropagation(), F.repeat || E());
  }
  function K(F) {
    k(F) && (F.preventDefault(), F.stopPropagation());
  }
  function ce(F) {
    const J = !!(F.ctrlKey || F.metaKey), G = !!F.altKey;
    t.marqueeModifier === J && t.altModifier === G || (t.marqueeModifier = J, t.altModifier = G, p(), U(t.pointerPos));
  }
  function O() {
    t.marqueeModifier = !1, t.altModifier = !1, p(), U(t.pointerPos);
  }
  function fe(F) {
    if (n || !F.ctrlKey && !F.metaKey) return;
    const J = String(F.key || "").toLowerCase(), G = String(F.code || "");
    if (J !== "z" && G !== "KeyZ") return;
    const Q = F.target, Y = ((Q == null ? void 0 : Q.tagName) || "").toUpperCase();
    if (Y === "INPUT" || Y === "TEXTAREA" || Q != null && Q.isContentEditable) return;
    const { canUndo: oe, canRedo: ie } = f();
    F.shiftKey && !ie || !F.shiftKey && !oe || (_(F.shiftKey ? 1 : -1), F.preventDefault(), F.stopPropagation());
  }
  return {
    connect(F) {
      ({
        cancelFrameCameraGesture: s,
        closeEditor: l,
        deleteSelected: c,
        deleteSelectedKeyframes: d,
        deleteSelectedWorldSticker: u,
        getHistoryCapabilities: f,
        getSelected: g,
        restoreHistory: _,
        setFullscreenState: m,
        syncFrameRollKnob: p,
        togglePlayback: E,
        updateCursor: U
      } = F);
    },
    onEscClose: z,
    onDeleteKey: W,
    onSpaceKey: te,
    onSpaceKeyUp: K,
    onModifierKeyChange: ce,
    onWindowBlur: O,
    onUndoRedoKey: fe
  };
}
const dp = /* @__PURE__ */ new Map(), ir = $m({
  app: Qn,
  api: hn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: cu,
    markImageFailed: Og,
    markImageLoading: Ig,
    markImageReady: Eg
  }
});
function fp(e) {
  if (!Xt(e, "background") || !Xt(e, "external-sticker")) return null;
  const t = ir.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? uo(t[0]) : null;
}
function g2(e) {
  if (!Xt(e, "background")) return null;
  const [t] = ir.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = ir.uiValue(e, "pano_timeline_frames") || [], [n] = ir.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: kn(n) };
}
const y2 = ir.assetSource, b2 = ir.source, v2 = ir.uiImage, _2 = ir.invalidateUiImage, pp = ir.loadPreferredExactLinkedImage;
async function S2(e, t, r = {}) {
  var Rt, Gt;
  await pg(e, { tolerateOperationFailure: !0 }), ir.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = HP(e, t);
  await gd();
  const s = ts(e, "output_preset"), l = ts(e, "coverage"), c = ts(e, "bg_color"), d = ts(e, _P), u = () => {
    const $e = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return pp(
      e,
      $e,
      () => xe(),
      `background:size:${$e.join("|")}`
    );
  }, f = () => {
    const $e = u();
    return KP($e);
  }, g = ($e = 2048) => {
    const et = s == null ? void 0 : s.value;
    return WP(et) ? f() || Math.max(1, Math.round(Number($e || 2048))) : GP(et, $e);
  }, _ = e.__panoSceneStateV2 === !0, m = t === "stickers" && _, p = t === "cutout" && _, E = m && e.__panoStudio === !0, U = p || E, z = t === "cutout" || E, W = p ? g2(e) : null, k = (_ ? tm : em)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: W ? W.coverage : kn(l == null ? void 0 : l.value),
    sharedUiSettings: UP(),
    active: im(e),
    fps: _ ? fp(e) : null,
    scene: (W == null ? void 0 : W.state) ?? null,
    camera: p
  });
  e.__panoLiveStateOverride = k, e.__panoLiveStateVersion = 0;
  let te = null;
  U ? (te = k.camera && (!E || k.camera.visible !== !1) ? rm(k.camera, 0) : null, k.shots = te ? [{ ...te, position: [...te.position] }] : [], k.active.selected_shot_id = te && p ? kl : null) : t === "cutout" && (k.shots = Array.isArray(k.shots) ? k.shots.slice(0, 1) : [], k.shots.length || (k.active.selected_shot_id = null));
  const K = t === "cutout" ? (() => {
    var Nn;
    const $e = Array.isArray(k.shots) ? k.shots : [], et = String(((Nn = k == null ? void 0 : k.active) == null ? void 0 : Nn.selected_shot_id) || "");
    return $e.find((ln) => String((ln == null ? void 0 : ln.id) || "") === et) || $e[0] || null;
  })() : null, ce = K ? Kg(K, !1) : { width: 220, height: 132 }, O = Ag(E ? "studio" : t), fe = /* @__PURE__ */ ao({
    stageStatus: Jn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (O.viewButtons || []).map(($e) => ({ ...$e, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Rt = O.spaceButtons) != null && Rt.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: O.spaceButtons, frame: O.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (O.toolButtons || []).map(($e) => ({
      ...$e,
      disabled: !1,
      ...$e.key === "add-world" ? { visible: m } : {},
      ...p && FP.has($e.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(O.floatingButtons || []).map(($e) => ({ ...$e, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ge.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: Ge.aspect,
      rotateIcon: Ge.rotate_90,
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
      icon: Ge.fullscreen,
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
      customColorCss: fr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: fr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, ($e, et) => ({ index: et, color: null })),
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
      width: ce.width,
      height: ce.height,
      label: K ? "Loading preview" : "Add Frame to preview"
    }
  }), F = { frame: /* @__PURE__ */ Ms(0), playing: /* @__PURE__ */ Ms(!1) }, J = document.createElement("div");
  document.body.appendChild(J);
  const G = ({ intent: $e, file: et } = {}) => {
    if (Zn(et)) {
      if ($e === "add") {
        Re(et);
        return;
      }
      if ($e === "add-world") {
        He(et);
        return;
      }
      $e === "replace" && Fe(et);
    }
  }, Q = ({ intent: $e } = {}) => {
  }, Y = Ou(bP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: O,
    paintSwatches: Al.map(($e) => ({
      id: $e.id,
      label: $e.label,
      cssColor: fr($e.color, 1)
    })),
    uiState: fe,
    playhead: F,
    onClose: () => {
      an();
    },
    onTimeline: ($e) => Ca($e),
    onImageFileSelected: G,
    onImageFileCancelled: Q
  });
  let oe = null;
  try {
    oe = Y.mount(J);
  } catch ($e) {
    try {
      Y.unmount();
    } catch {
    }
    throw J.remove(), $e;
  }
  const ie = J.querySelector(".pano-modal-overlay"), x = J.querySelector(".pano-modal"), T = x == null ? void 0 : x.querySelector("[data-stage-overlay]"), Z = x == null ? void 0 : x.querySelector("[data-stage-background]"), V = x == null ? void 0 : x.querySelector(".pano-stage-wrap"), pe = ((Gt = oe == null ? void 0 : oe.getPaintOverlayRefs) == null ? void 0 : Gt.call(oe)) || {}, Se = pe.cursor || null, ee = pe.sizePreview || null, I = pe.sizeSample || null;
  if (!ie || !x || !T || !Z || !V || !Se || !ee || !I)
    throw Y.unmount(), J.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const X = T.getContext("2d"), se = x.querySelector("[data-side]"), be = x.querySelector("[data-video-element]"), we = x.querySelector("[data-port-video-element]");
  Ul(T, "editor.stage-overlay"), Ul(Z, "editor.stage-background"), sf(be, "editor.video"), sf(we, "editor.port-video");
  const C = x.querySelector(".pano-floating-right"), ae = x.querySelector(".pano-floating-top"), b = x.querySelector("[data-tool-rail]"), S = x.querySelector("[data-frame-rail]"), $ = x.querySelector("[data-frame-roll-knob]"), H = x.querySelector("[data-paint-dock]"), v = x.querySelector(".pano-video-transport"), w = x.querySelector("[data-selection-menu]"), L = x.querySelector("[data-tooltip]"), M = x.querySelector("[data-camera-preview-host]"), P = x.querySelector("[data-camera-preview-canvas]");
  Ul(P, "editor.camera-preview");
  const A = x.querySelector("[data-paint-color-row]"), B = x.querySelector("[data-paint-color-pop]"), re = x.querySelector("[data-paint-color-sv]"), me = x.querySelector("[data-paint-color-sv-cursor]"), j = x.querySelector("[data-paint-hue-strip]"), de = x.querySelector("[data-paint-hue-handle]");
  V == null || V.removeAttribute("data-stage-ready"), V == null || V.setAttribute("data-stage-loading-kind", "boot"), T.style.opacity = "1", Z.style.opacity = "0", i && (se == null || se.remove(), x.classList.add("pano-modal-readonly")), x.addEventListener("pointerdown", () => le.wake(), !0), x.addEventListener("pointerdown", ($e) => {
    var et;
    $e.target.closest("[data-frame-roll-knob]") || Ye(), !$e.target.closest(".pano-picker") && ($e.target.closest("[data-paint-color-row]") || (x.querySelectorAll(".pano-picker-pop").forEach((Nn) => {
      Nn.hidden = !0;
    }), Ie(!0), z && ke.cutoutAspectOpen && !$e.target.closest(".pano-aspect-popover") && !$e.target.closest("[data-action='aspect']") && (ke.cutoutAspectOpen = !1, ke.menuMode = "", ke.menuSize.measured = !1, Va(), xe()), (et = fe.frameRail) != null && et.aspectOpen && !$e.target.closest(".pano-frame-aspect-control") && (fe.frameRail.aspectOpen = !1)));
  });
  const ke = {
    mode: "pano",
    selectedId: Wg(t, k),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: nr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: kn(k.coverage),
    historyController: uN(k),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Ir,
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
    showGrid: YP(e == null ? void 0 : e.id, !0),
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
    paintEngine: bl(),
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
    // PanoramaStickersNode: the id of the world Sticker selected in the space view or on its Timeline row
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
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, ue = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (ke.selectedId = null, k.active.selected_sticker_id = null), ke.selectedIds = ke.selectedId ? [ke.selectedId] : [];
  const ve = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), N = rn({ label: "editor.still" });
  N.__panoFrameIdx = 0;
  const y = rn({ label: "editor.port-still" });
  y.__panoFrameIdx = 0;
  const D = {
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
  }, le = yx({
    requestAnimationFrame: ($e) => requestAnimationFrame($e),
    cancelAnimationFrame: ($e) => cancelAnimationFrame($e),
    draw: ($e, et) => Ta($e, et),
    animating: () => nt()
  }), ge = mx({
    requestFrame: ($e) => le.requestFrame($e),
    cancelFrame: ($e) => le.cancelFrame($e),
    tasks: {
      seek: () => Ol.seek(ue.scrubFrame),
      timeline: () => Ci(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        qe(), xe({ localOnly: !0, reason: dt.STATE });
      },
      sidePanel: () => st()
    }
  }), he = i_({
    canvas: Z,
    onReady: () => {
      Ln(), xe({ reason: dt.CONTEXT });
    },
    onFailed: () => xe(),
    onUpdate: () => xe({ localOnly: !0, reason: dt.MEDIA }),
    onSplats: ($e) => xe({ localOnly: !0, reason: FN($e) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      vt(), Ln(), xe({ reason: dt.CONTEXT });
    }
  }), ne = Number.parseFloat(
    getComputedStyle(x).getPropertyValue("--pano-float-radius")
  ) || 10, ye = ($e) => {
    const et = String($e || "default");
    T.style.cursor !== et && (T.style.cursor = et);
  }, Me = {
    timer: 0,
    target: null
  }, Ae = {
    active: !1,
    depth: 0
  }, Le = Ru({
    getView: () => ({ yaw: ke.viewYaw, pitch: ke.viewPitch, fov: ke.viewFov }),
    setView: ($e) => {
      ke.viewYaw = jt(Number($e.yaw || 0)), ke.viewPitch = Ee(Number($e.pitch || 0), -89.9, 89.9), ke.viewFov = Ee(Number($e.fov || ke.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const $e = T.getBoundingClientRect();
      return {
        w: Math.max(1, Number($e.width || T.clientWidth || 0)),
        h: Math.max(1, Number($e.height || T.clientHeight || 0))
      };
    },
    getInvert: () => {
      var $e, et;
      return {
        x: ($e = k.ui_settings) != null && $e.invert_view_x ? -1 : 1,
        y: (et = k.ui_settings) != null && et.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Dt(),
    onInteraction: () => le.requestDraw(dt.VIEW)
  }), {
    addImageStickerFromFile: Re,
    addWorldStickerFromFile: He,
    applyInitialCutoutFocus: ze,
    applyVideoTimelineFps: q,
    bindDrag: Ce,
    cancelFrameCameraGesture: Ve,
    closePaintColorPop: Ie,
    commitState: je,
    disposeMediaSession: We,
    disposeUpstream: Be,
    editorAnimating: nt,
    finishKnobRoll: yt,
    flushFrameWheelCommit: Ft,
    forgetCameraPreviewFrame: vt,
    getUnwrapRect: Dt,
    hidePaintSizePreview: tn,
    hideTooltip: Ye,
    hoverWorldGizmo: Ht,
    isFreeFrameView: bn,
    isFreeSpaceView: Sr,
    migrateLegacyEmbeddedAssets: Gr,
    onCanvasDragOver: on,
    onCanvasDrop: Mn,
    onCanvasMouseMove: Wr,
    onCanvasPointerCancel: wr,
    onCanvasPointerDown: Xn,
    onCanvasPointerMove: _a,
    onCanvasPointerUp: ho,
    onCanvasWheel: Sa,
    onDeleteKey: mo,
    onEscClose: go,
    onFrameRollKnobDoubleClick: wa,
    onFrameRollKnobPointerDown: xa,
    onFrameRollKnobPointerMove: yo,
    onFullscreenChange: Et,
    onModifierKeyChange: Pn,
    onRootChange: ar,
    onRootClick: bo,
    onRootInput: Dn,
    onRootPointerOut: ka,
    onRootPointerOver: Ma,
    onSidePanelChange: Pa,
    onSidePanelClick: Kr,
    onSidePanelInput: El,
    onSpaceKey: xr,
    onSpaceKeyUp: Na,
    onTimelineAction: Ca,
    onUndoRedoKey: Aa,
    onWindowBlur: vo,
    onWindowDragEnter: _o,
    onWindowDragLeave: Ia,
    onWindowDragOver: Ea,
    onWindowDrop: Oa,
    playback: Ol,
    pushHistory: Fl,
    reconcileExternalStickerFromInputs: Fa,
    refreshModalVideoSource: Oe,
    replaceSelectedImageFromFile: Fe,
    requestDraw: xe,
    sampleEditorDiagnostics: bt,
    setDropCue: ct,
    setPointerPos: _t,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Qe,
    stopRenderLoop: it,
    syncCanvasSize: Ln,
    syncCutoutShot: qe,
    syncFullscreenButton: Ke,
    syncGridToggleButton: Je,
    syncLookAtFrameButtonState: Zt,
    syncOutputPreviewToggleButton: Mt,
    syncPaintUi: kr,
    syncPaintingLayerAsync: Ni,
    syncTimeline: Ci,
    syncUndoRedoButtons: Ai,
    tick: Ta,
    triggerBackgroundPersistenceOnClose: Da,
    updateCursor: So,
    updatePaintColorFromHue: La,
    updatePaintColorFromSv: Ra,
    updateSelectionMenu: Va,
    updateSidePanel: st,
    viewControls: ft,
    watchPixelRatio: mt
  } = XP({
    api: hn,
    app: Qn,
    backgroundCanvas: Z,
    bgWidget: c,
    cameraV2: U,
    canvas: T,
    capture: W,
    closeEditor: an,
    comfyMedia: ir,
    coverageWidget: l,
    ctx: X,
    cutoutPreviewCanvas: P,
    cutoutPreviewHost: M,
    cutoutV2: p,
    dragCue: Ae,
    dragFrames: ge,
    editor: ke,
    editorView: he,
    floatingRightEl: C,
    floatingTopEl: ae,
    frameGateCssRadius: ne,
    frameRailEl: S,
    frameRollKnobEl: $,
    hideSidebar: i,
    imageCache: ve,
    initialShotBase: te,
    loadPreferredExactLinkedImage: pp,
    mediaAssetSource: y2,
    mediaSource: b2,
    mediaUiImage: v2,
    node: e,
    overlay: ie,
    paintColorPop: B,
    paintColorRow: A,
    paintColorSv: re,
    paintColorSvCursor: me,
    paintCursorEl: Se,
    paintDockEl: H,
    paintHueHandle: de,
    paintHueStrip: j,
    paintSizePreviewEl: ee,
    paintSizePreviewSampleEl: I,
    portStillCanvas: y,
    portVideoEl: we,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: R,
    rasterImageAlphaCache: h,
    rasterImageCache: Ne,
    readOnly: n,
    resolveEditorOutputPresetWidth: g,
    root: x,
    runtime: D,
    sceneV2: m,
    scheduler: le,
    selectionMenu: w,
    setCanvasCursor: ye,
    shotEditor: z,
    stageWrap: V,
    state: k,
    stateV2: _,
    stateWidget: d,
    stillCanvas: N,
    studio: E,
    timeline: ue,
    timelinePlayhead: F,
    toolRailEl: b,
    tooltip: Me,
    tooltipEl: L,
    type: t,
    uiState: fe,
    videoEl: be,
    videoTimelineFps: fp,
    videoTransportEl: v,
    viewController: Le,
    vueModal: oe
  }, [
    sN,
    dN,
    fN,
    pN,
    hN,
    mN,
    gN,
    yN,
    bN,
    IN,
    EN,
    ON,
    DN,
    LN,
    RN,
    t2,
    n2,
    r2,
    i2,
    o2,
    a2,
    s2,
    l2,
    c2,
    u2,
    d2,
    f2,
    p2,
    h2,
    m2
  ]);
  Qe(), Xe.observe(T), mt();
  const gt = () => je();
  n || (e.__panoFlushStateBeforeQueue = gt), $ == null || $.addEventListener("pointerdown", xa), $ == null || $.addEventListener("pointermove", yo), $ == null || $.addEventListener("pointerup", yt), $ == null || $.addEventListener("pointercancel", () => Ve()), $ == null || $.addEventListener("lostpointercapture", () => {
    var $e;
    (($e = ke.interaction) == null ? void 0 : $e.source) === "knob" && Ve();
  }), $ == null || $.addEventListener("dblclick", wa), T.onpointerdown = Xn, T.onpointermove = _a, T.onpointerup = ho, T.onpointercancel = wr, T.onlostpointercapture = () => {
    Ve();
  }, T.onauxclick = ($e) => {
    $e.button === 1 && $e.preventDefault();
  }, T.oncontextmenu = ($e) => {
    (Sr() || bn()) && jS(ft(), 2) && $e.preventDefault();
  }, T.onmousemove = Wr, T.onpointerleave = () => {
    ke.interaction || Ht({ x: -1e6, y: -1e6 });
  }, T.onmouseleave = () => {
    _t(ke.pointerPos, !1), So(ke.pointerPos), ke.mode === "frame" && ke.primaryTool === "cursor" && xe({ localOnly: !0, reason: dt.OVERLAY });
  }, T.onwheel = Sa, T.ondragover = on, T.ondrop = Mn, window.addEventListener("dragenter", _o, !0), window.addEventListener("dragover", Ea, !0), window.addEventListener("dragleave", Ia, !0), window.addEventListener("drop", Oa, !0), se == null || se.addEventListener("click", Kr), se == null || se.addEventListener("input", El), se == null || se.addEventListener("change", Pa), Je(), x.addEventListener("click", bo), x.addEventListener("input", Dn), x.addEventListener("change", ar), x.addEventListener("pointerup", ($e) => {
    var et;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((et = $e.target) == null ? void 0 : et.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && tn();
  }), x.addEventListener("pointercancel", ($e) => {
    var et;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((et = $e.target) == null ? void 0 : et.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && tn();
  }), x.addEventListener("focusout", ($e) => {
    $e.target.closest("[data-paint-size-slider]") && tn();
  }), x.addEventListener("pointerover", Ma), x.addEventListener("pointerout", ka), x.addEventListener("pointerdown", ($e) => {
    $e.target.closest("[data-frame-roll-knob]") || Ye();
  }), re && (re.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (et) => Ra(et.clientX, et.clientY));
  }), j && (j.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (et) => La(et.clientX));
  }), x.addEventListener("click", ($e) => {
    var ri;
    const et = $e.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!et) return;
    const Nn = et.getAttribute("data-action") === "confirm-accept", ln = (ri = fe.confirmDialog) == null ? void 0 : ri.resolve;
    fe.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, ln == null || ln(Nn);
  }), document.addEventListener("fullscreenchange", Et), Ke(), Mt();
  const sn = e.onConnectionsChange;
  let Kt = null, vn = () => {
  };
  !n && t === "stickers" && (vn = dg(e, ($e = "sync") => {
    $e === "executed" && (_2(ve, io), Oe(), m && q()), Fa($e);
  }, { editor: !0 }), Kt = function(...et) {
    typeof sn == "function" && sn.apply(this, et), Oe(), Rr(this, "connections");
  }, e.onConnectionsChange = Kt), !n && !p && dp.set(String(e.id ?? "0"), () => Ni());
  let St = null;
  async function an() {
    return St || (St = (async () => {
      var $e, et, Nn, ln, ri, Ii, Ei, kd;
      return dp.delete(String(e.id ?? "0")), Ft(), n || je(), document.fullscreenElement === ie && (($e = document.exitFullscreen) == null || $e.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Et), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === gt && (e.__panoFlushStateBeforeQueue = null), (Nn = (et = e.__panoDomPreview) == null ? void 0 : et.requestDraw) == null || Nn.call(et), (ri = (ln = e.graph) == null ? void 0 : ln.setDirtyCanvas) == null || ri.call(ln, !0, !0), (kd = (Ei = (Ii = Qn) == null ? void 0 : Ii.canvas) == null ? void 0 : Ei.setDirty) == null || kd.call(Ei, !0, !0), Ye(), ge.cancel(), it(), We(), Be(), he.dispose(), ct(!1), window.removeEventListener("keydown", go, !0), window.removeEventListener("keydown", mo, !0), window.removeEventListener("keydown", xr, !0), window.removeEventListener("keyup", Na, !0), window.removeEventListener("keydown", Pn, !0), window.removeEventListener("keyup", Pn, !0), window.removeEventListener("blur", vo), window.removeEventListener("keydown", Aa, !0), window.removeEventListener("dragenter", _o, !0), window.removeEventListener("dragover", Ea, !0), window.removeEventListener("dragleave", Ia, !0), window.removeEventListener("drop", Oa, !0), !n && t === "stickers" && (e.onConnectionsChange === Kt && (e.onConnectionsChange = sn), vn()), Y.unmount(), J.remove(), Da(), St = null, !0;
    })().catch(($e) => (console.error("[PanoramaCutoutSync] closeEditor failed", $e), St = null, !1)), St);
  }
  window.addEventListener("keydown", go, !0), window.addEventListener("keydown", mo, !0), window.addEventListener("keydown", xr, !0), window.addEventListener("keyup", Na, !0), window.addEventListener("keydown", Pn, !0), window.addEventListener("keyup", Pn, !0), window.addEventListener("blur", vo), window.addEventListener("keydown", Aa, !0), ie.addEventListener("pointerdown", ($e) => {
    $e.target === ie && an();
  });
  function Lt($e, et, { rollbackState: Nn = !1 } = {}) {
    let ln = "";
    try {
      Nn && (ln = JSON.stringify(k)), et();
    } catch (ri) {
      if (ln)
        try {
          const Ii = JSON.parse(ln);
          Object.keys(k).forEach((Ei) => delete k[Ei]), Object.assign(k, Ii), n || je();
        } catch (Ii) {
          console.error(`[PanoramaStickers] editor boot step "${$e}" rollback failed`, Ii);
        }
      fe.stageWarningDetail = `boot:${$e}`, console.error(`[PanoramaStickers] editor boot step "${$e}" failed`, ri);
    }
  }
  Lt("cutout-focus", ze), !n && t === "stickers" && Lt("external-sticker-sync", () => Fa("open"), { rollbackState: !0 }), Gr().catch(($e) => {
    fe.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', $e);
  }), Lt("history", Fl), Lt("undo-redo", Ai), Lt("paint-ui", kr), Lt("side-panel", st), Lt("look-at-frame", Zt), Lt("video-source", Oe), Lt("canvas-size", Ln), Lt("cursor", () => So(ke.pointerPos)), xe(), bt();
}
Qn.registerExtension(JS({
  app: Qn,
  openEditor: S2,
  attachStickers: px,
  attachCutout: hx,
  attachPreview: fx,
  restoreOutput: Qw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: kP
}));
