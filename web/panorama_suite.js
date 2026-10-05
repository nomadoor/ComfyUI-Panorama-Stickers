import * as ns from "../../scripts/app.js";
import { app as Qn } from "../../scripts/app.js";
import { api as hn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function hu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ot = {}, Wi = [], mr = () => {
}, hp = () => !1, nl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rl = (e) => e.startsWith("onUpdate:"), yn = Object.assign, mu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Yg = Object.prototype.hasOwnProperty, wt = (e, t) => Yg.call(e, t), it = Array.isArray, Ki = (e) => pa(e) === "[object Map]", mp = (e) => pa(e) === "[object Set]", kd = (e) => pa(e) === "[object Date]", lt = (e) => typeof e == "function", Jt = (e) => typeof e == "string", br = (e) => typeof e == "symbol", It = (e) => e !== null && typeof e == "object", gp = (e) => (It(e) || lt(e)) && lt(e.then) && lt(e.catch), yp = Object.prototype.toString, pa = (e) => yp.call(e), qg = (e) => pa(e).slice(8, -1), bp = (e) => pa(e) === "[object Object]", gu = (e) => Jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ hu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), il = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Xg = /-\w/g, wn = il(
  (e) => e.replace(Xg, (t) => t.slice(1).toUpperCase())
), Jg = /\B([A-Z])/g, ki = il(
  (e) => e.replace(Jg, "-$1").toLowerCase()
), ol = il((e) => e.charAt(0).toUpperCase() + e.slice(1)), El = il(
  (e) => e ? `on${ol(e)}` : ""
), pr = (e, t) => !Object.is(e, t), rs = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, vp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, yu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Md;
const al = () => Md || (Md = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function At(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Jt(n) ? t0(n) : At(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Jt(e) || It(e))
    return e;
}
const Zg = /;(?![^(]*\))/g, Qg = /:([^]+)/, e0 = /\/\*[^]*?\*\//g;
function t0(e) {
  const t = {};
  return e.replace(e0, "").split(Zg).forEach((r) => {
    if (r) {
      const n = r.split(Qg);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ht(e) {
  let t = "";
  if (Jt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = ht(e[r]);
      n && (t += n + " ");
    }
  else if (It(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const n0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", r0 = /* @__PURE__ */ hu(n0);
function _p(e) {
  return !!e || e === "";
}
function i0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = bu(e[n], t[n]);
  return r;
}
function bu(e, t) {
  if (e === t) return !0;
  let r = kd(e), n = kd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = br(e), n = br(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? i0(e, t) : !1;
  if (r = It(e), n = It(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !bu(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Sp = (e) => !!(e && e.__v_isRef === !0), nt = (e) => Jt(e) ? e : e == null ? "" : it(e) || It(e) && (e.toString === yp || !lt(e.toString)) ? Sp(e) ? nt(e.value) : JSON.stringify(e, wp, 2) : String(e), wp = (e, t) => Sp(t) ? wp(e, t.value) : Ki(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Ol(n, o) + " =>"] = i, r),
    {}
  )
} : mp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ol(r))
} : br(t) ? Ol(t) : It(t) && !it(t) && !bp(t) ? String(t) : t, Ol = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    br(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Cn;
class o0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Cn, !t && Cn && (this.index = (Cn.scopes || (Cn.scopes = [])).push(
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
      const r = Cn;
      try {
        return Cn = this, t();
      } finally {
        Cn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Cn, Cn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Cn = this.prevScope, this.prevScope = void 0);
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
function a0() {
  return Cn;
}
let Tt;
const Fl = /* @__PURE__ */ new WeakSet();
class xp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Cn && Cn.active && Cn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fl.has(this) && (Fl.delete(this), this.trigger()));
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
    this.flags |= 2, Pd(this), Pp(this);
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
        Su(t);
      this.deps = this.depsTail = void 0, Pd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bc(this) && this.run();
  }
  get dirty() {
    return bc(this);
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
function vu() {
  kp++;
}
function _u() {
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
    n.version === -1 ? (n === r && (r = i), Su(n), s0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function bc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qo) || (e.globalVersion = qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bc(e))))
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
function Su(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Su(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function s0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let er = !0;
const Ap = [];
function Vr() {
  Ap.push(er), er = !1;
}
function $r() {
  const e = Ap.pop();
  er = e === void 0 ? !0 : e;
}
function Pd(e) {
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
class l0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Tt || !er || Tt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Tt)
      r = this.activeLink = new l0(Tt, this), Tt.deps ? (r.prevDep = Tt.depsTail, Tt.depsTail.nextDep = r, Tt.depsTail = r) : Tt.deps = Tt.depsTail = r, Ip(r);
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
    vu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      _u();
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
const vc = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ Symbol(
  ""
), _c = /* @__PURE__ */ Symbol(
  ""
), Xo = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, r) {
  if (er && Tt) {
    let n = vc.get(e);
    n || vc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new wu()), i.map = n, i.key = r), i.track();
  }
}
function Ir(e, t, r, n, i, o) {
  const a = vc.get(e);
  if (!a) {
    qo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (vu(), t === "clear")
    a.forEach(s);
  else {
    const l = it(e), c = l && gu(r);
    if (l && r === "length") {
      const u = Number(n);
      a.forEach((d, f) => {
        (f === "length" || f === Xo || !br(f) && f >= u) && s(d);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), c && s(a.get(Xo)), t) {
        case "add":
          l ? c && s(a.get("length")) : (s(a.get(pi)), Ki(e) && s(a.get(_c)));
          break;
        case "delete":
          l || (s(a.get(pi)), Ki(e) && s(a.get(_c)));
          break;
        case "set":
          Ki(e) && s(a.get(pi));
          break;
      }
  }
  _u();
}
function Oi(e) {
  const t = /* @__PURE__ */ St(e);
  return t === e ? t : (fn(t, "iterate", Xo), /* @__PURE__ */ Bn(e) ? t : t.map(or));
}
function sl(e) {
  return fn(e = /* @__PURE__ */ St(e), "iterate", Xo), e;
}
function ur(e, t) {
  return /* @__PURE__ */ zr(e) ? Qi(/* @__PURE__ */ hi(e) ? or(t) : t) : or(t);
}
const c0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tl(this, Symbol.iterator, (e) => ur(this, e));
  },
  concat(...e) {
    return Oi(this).concat(
      ...e.map((t) => it(t) ? Oi(t) : t)
    );
  },
  entries() {
    return Tl(this, "entries", (e) => (e[1] = ur(this, e[1]), e));
  },
  every(e, t) {
    return kr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return kr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => ur(this, n)),
      arguments
    );
  },
  find(e, t) {
    return kr(
      this,
      "find",
      e,
      t,
      (r) => ur(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return kr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return kr(
      this,
      "findLast",
      e,
      t,
      (r) => ur(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return kr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return kr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Dl(this, "includes", e);
  },
  indexOf(...e) {
    return Dl(this, "indexOf", e);
  },
  join(e) {
    return Oi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Dl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return kr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wo(this, "pop");
  },
  push(...e) {
    return wo(this, "push", e);
  },
  reduce(e, ...t) {
    return Nd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nd(this, "reduceRight", e, t);
  },
  shift() {
    return wo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return kr(this, "some", e, t, void 0, arguments);
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
    return Tl(this, "values", (e) => ur(this, e));
  }
};
function Tl(e, t, r) {
  const n = sl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Bn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const u0 = Array.prototype;
function kr(e, t, r, n, i, o) {
  const a = sl(e), s = a !== e && !/* @__PURE__ */ Bn(e), l = a[t];
  if (l !== u0[t]) {
    const d = l.apply(e, o);
    return s ? or(d) : d;
  }
  let c = r;
  a !== e && (s ? c = function(d, f) {
    return r.call(this, ur(e, d), f, e);
  } : r.length > 2 && (c = function(d, f) {
    return r.call(this, d, f, e);
  }));
  const u = l.call(a, c, n);
  return s && i ? i(u) : u;
}
function Nd(e, t, r, n) {
  const i = sl(e), o = i !== e && !/* @__PURE__ */ Bn(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(c, u, d) {
    return s && (s = !1, c = ur(e, c)), r.call(this, c, ur(e, u), d, e);
  }) : r.length > 3 && (a = function(c, u, d) {
    return r.call(this, c, u, d, e);
  }));
  const l = i[t](a, ...n);
  return s ? ur(e, l) : l;
}
function Dl(e, t, r) {
  const n = /* @__PURE__ */ St(e);
  fn(n, "iterate", Xo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Mu(r[0]) ? (r[0] = /* @__PURE__ */ St(r[0]), n[t](...r)) : i;
}
function wo(e, t, r = []) {
  Vr(), vu();
  const n = (/* @__PURE__ */ St(e))[t].apply(e, r);
  return _u(), $r(), n;
}
const d0 = /* @__PURE__ */ hu("__proto__,__v_isRef,__isVue"), Ep = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(br)
);
function f0(e) {
  br(e) || (e = String(e));
  const t = /* @__PURE__ */ St(this);
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
      return n === (i ? o ? w0 : Lp : o ? Dp : Tp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = it(t);
    if (!i) {
      let l;
      if (a && (l = c0[r]))
        return l;
      if (r === "hasOwnProperty")
        return f0;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : n
    );
    if ((br(r) ? Ep.has(r) : d0(r)) || (i || fn(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ gn(s)) {
      const l = a && gu(r) ? s : s.value;
      return i && It(l) ? /* @__PURE__ */ wc(l) : l;
    }
    return It(s) ? i ? /* @__PURE__ */ wc(s) : /* @__PURE__ */ ao(s) : s;
  }
}
class Fp extends Op {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = it(t) && gu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ zr(o);
      if (!/* @__PURE__ */ Bn(n) && !/* @__PURE__ */ zr(n) && (o = /* @__PURE__ */ St(o), n = /* @__PURE__ */ St(n)), !a && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(n))
        return c || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : wt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ gn(t) ? t : i
    );
    return t === /* @__PURE__ */ St(i) && (s ? pr(n, o) && Ir(t, "set", r, n) : Ir(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = wt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Ir(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!br(r) || !Ep.has(r)) && fn(t, "has", r), n;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      it(t) ? "length" : pi
    ), Reflect.ownKeys(t);
  }
}
class p0 extends Op {
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
const h0 = /* @__PURE__ */ new Fp(), m0 = /* @__PURE__ */ new p0(), g0 = /* @__PURE__ */ new Fp(!0);
const Sc = (e) => e, Va = (e) => Reflect.getPrototypeOf(e);
function y0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ St(i), a = Ki(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = i[e](...n), u = r ? Sc : t ? Qi : or;
    return !t && fn(
      o,
      "iterate",
      l ? _c : pi
    ), yn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = c.next();
          return f ? { value: d, done: f } : {
            value: s ? [u(d[0]), u(d[1])] : u(d),
            done: f
          };
        }
      }
    );
  };
}
function $a(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function b0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ St(o), s = /* @__PURE__ */ St(i);
      e || (pr(i, s) && fn(a, "get", i), fn(a, "get", s));
      const { has: l } = Va(a), c = t ? Sc : e ? Qi : or;
      if (l.call(a, i))
        return c(o.get(i));
      if (l.call(a, s))
        return c(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && fn(/* @__PURE__ */ St(i), "iterate", pi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ St(o), s = /* @__PURE__ */ St(i);
      return e || (pr(i, s) && fn(a, "has", i), fn(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ St(s), c = t ? Sc : e ? Qi : or;
      return !e && fn(l, "iterate", pi), s.forEach((u, d) => i.call(o, c(u), c(d), a));
    }
  };
  return yn(
    r,
    e ? {
      add: $a("add"),
      set: $a("set"),
      delete: $a("delete"),
      clear: $a("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ St(this), a = Va(o), s = /* @__PURE__ */ St(i), l = !t && !/* @__PURE__ */ Bn(i) && !/* @__PURE__ */ zr(i) ? s : i;
        return a.has.call(o, l) || pr(i, l) && a.has.call(o, i) || pr(s, l) && a.has.call(o, s) || (o.add(l), Ir(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Bn(o) && !/* @__PURE__ */ zr(o) && (o = /* @__PURE__ */ St(o));
        const a = /* @__PURE__ */ St(this), { has: s, get: l } = Va(a);
        let c = s.call(a, i);
        c || (i = /* @__PURE__ */ St(i), c = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), c ? pr(o, u) && Ir(a, "set", i, o) : Ir(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ St(this), { has: a, get: s } = Va(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ St(i), l = a.call(o, i)), s && s.call(o, i);
        const c = o.delete(i);
        return l && Ir(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ St(this), o = i.size !== 0, a = i.clear();
        return o && Ir(
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
    r[i] = y0(i, e, t);
  }), r;
}
function xu(e, t) {
  const r = b0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    wt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const v0 = {
  get: /* @__PURE__ */ xu(!1, !1)
}, _0 = {
  get: /* @__PURE__ */ xu(!1, !0)
}, S0 = {
  get: /* @__PURE__ */ xu(!0, !1)
};
const Tp = /* @__PURE__ */ new WeakMap(), Dp = /* @__PURE__ */ new WeakMap(), Lp = /* @__PURE__ */ new WeakMap(), w0 = /* @__PURE__ */ new WeakMap();
function x0(e) {
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
function k0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : x0(qg(e));
}
// @__NO_SIDE_EFFECTS__
function ao(e) {
  return /* @__PURE__ */ zr(e) ? e : ku(
    e,
    !1,
    h0,
    v0,
    Tp
  );
}
// @__NO_SIDE_EFFECTS__
function M0(e) {
  return ku(
    e,
    !1,
    g0,
    _0,
    Dp
  );
}
// @__NO_SIDE_EFFECTS__
function wc(e) {
  return ku(
    e,
    !0,
    m0,
    S0,
    Lp
  );
}
function ku(e, t, r, n, i) {
  if (!It(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = k0(e);
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
function hi(e) {
  return /* @__PURE__ */ zr(e) ? /* @__PURE__ */ hi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Mu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ St(t) : e;
}
function P0(e) {
  return !wt(e, "__v_skip") && Object.isExtensible(e) && vp(e, "__v_skip", !0), e;
}
const or = (e) => It(e) ? /* @__PURE__ */ ao(e) : e, Qi = (e) => It(e) ? /* @__PURE__ */ wc(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return Rp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
  return Rp(e, !0);
}
function Rp(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new N0(e, t);
}
class N0 {
  constructor(t, r) {
    this.dep = new wu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ St(t), this._value = r ? t : or(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Bn(t) || /* @__PURE__ */ zr(t);
    t = n ? t : /* @__PURE__ */ St(t), pr(t, r) && (this._rawValue = t, this._value = n ? t : or(t), this.dep.trigger());
  }
}
function tt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const C0 = {
  get: (e, t, r) => t === "__v_raw" ? e : tt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ gn(i) && !/* @__PURE__ */ gn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Vp(e) {
  return /* @__PURE__ */ hi(e) ? e : new Proxy(e, C0);
}
class A0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new wu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
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
function I0(e, t, r = !1) {
  let n, i;
  return lt(e) ? n = e : (n = e.get, i = e.set), new A0(n, i, r);
}
const za = {}, xs = /* @__PURE__ */ new WeakMap();
let li;
function E0(e, t = !1, r = li) {
  if (r) {
    let n = xs.get(r);
    n || xs.set(r, n = []), n.push(e);
  }
}
function O0(e, t, r = Ot) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, c = (G) => i ? G : /* @__PURE__ */ Bn(G) || i === !1 || i === 0 ? Er(G, 1) : Er(G);
  let u, d, f, g, _ = !1, m = !1;
  if (/* @__PURE__ */ gn(e) ? (d = () => e.value, _ = /* @__PURE__ */ Bn(e)) : /* @__PURE__ */ hi(e) ? (d = () => c(e), _ = !0) : it(e) ? (m = !0, _ = e.some((G) => /* @__PURE__ */ hi(G) || /* @__PURE__ */ Bn(G)), d = () => e.map((G) => {
    if (/* @__PURE__ */ gn(G))
      return G.value;
    if (/* @__PURE__ */ hi(G))
      return c(G);
    if (lt(G))
      return l ? l(G, 2) : G();
  })) : lt(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (f) {
      Vr();
      try {
        f();
      } finally {
        $r();
      }
    }
    const G = li;
    li = u;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      li = G;
    }
  } : d = mr, t && i) {
    const G = d, x = i === !0 ? 1 / 0 : i;
    d = () => Er(G(), x);
  }
  const p = a0(), O = () => {
    u.stop(), p && p.active && mu(p.effects, u);
  };
  if (o && t) {
    const G = t;
    t = (...x) => {
      G(...x), O();
    };
  }
  let B = m ? new Array(e.length).fill(za) : za;
  const z = (G) => {
    if (!(!(u.flags & 1) || !u.dirty && !G))
      if (t) {
        const x = u.run();
        if (i || _ || (m ? x.some((ee, W) => pr(ee, B[W])) : pr(x, B))) {
          f && f();
          const ee = li;
          li = u;
          try {
            const W = [
              x,
              // pass undefined as the old value when it's changed for the first time
              B === za ? void 0 : m && B[0] === za ? [] : B,
              g
            ];
            B = x, l ? l(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            li = ee;
          }
        }
      } else
        u.run();
  };
  return s && s(z), u = new xp(d), u.scheduler = a ? () => a(z, !1) : z, g = (G) => E0(G, !1, u), f = u.onStop = () => {
    const G = xs.get(u);
    if (G) {
      if (l)
        l(G, 4);
      else
        for (const x of G) x();
      xs.delete(u);
    }
  }, t ? n ? z(!0) : B = u.run() : a ? a(z.bind(null, !0), !0) : u.run(), O.pause = u.pause.bind(u), O.resume = u.resume.bind(u), O.stop = O, O;
}
function Er(e, t = 1 / 0, r) {
  if (t <= 0 || !It(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gn(e))
    Er(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Er(e[n], t, r);
  else if (mp(e) || Ki(e))
    e.forEach((n) => {
      Er(n, t, r);
    });
  else if (bp(e)) {
    for (const n in e)
      Er(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Er(e[n], t, r);
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
    ll(i, t, r);
  }
}
function vr(e, t, r, n) {
  if (lt(e)) {
    const i = ha(e, t, r, n);
    return i && gp(i) && i.catch((o) => {
      ll(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(vr(e[o], t, r, n));
    return i;
  }
}
function ll(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ot;
  if (t) {
    let s = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Vr(), ha(o, null, 10, [
        e,
        l,
        c
      ]), $r();
      return;
    }
  }
  F0(e, r, i, n, a);
}
function F0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Sn = [];
let cr = -1;
const Bi = [];
let Ur = null, Di = 0;
const $p = /* @__PURE__ */ Promise.resolve();
let ks = null;
function cl(e) {
  const t = ks || $p;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function T0(e) {
  let t = cr + 1, r = Sn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = Sn[n], o = Jo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Pu(e) {
  if (!(e.flags & 1)) {
    const t = Jo(e), r = Sn[Sn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jo(r) ? Sn.push(e) : Sn.splice(T0(t), 0, e), e.flags |= 1, zp();
  }
}
function zp() {
  ks || (ks = $p.then(Hp));
}
function D0(e) {
  it(e) ? Bi.push(...e) : Ur && e.id === -1 ? Ur.splice(Di + 1, 0, e) : e.flags & 1 || (Bi.push(e), e.flags |= 1), zp();
}
function Cd(e, t, r = cr + 1) {
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
    cr = -1, Sn.length = 0, jp(), ks = null, (Sn.length || Bi.length) && Hp();
  }
}
let Vn = null, Gp = null;
function Ms(e) {
  const t = Vn;
  return Vn = e, Gp = e && e.type.__scopeId || null, t;
}
function Wp(e, t = Vn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && zd(-1);
    const o = Ms(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Ms(o), n._d && zd(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Lr(e, t) {
  if (Vn === null)
    return e;
  const r = hl(Vn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Ot] = t[i];
    o && (lt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Er(a), n.push({
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
function ni(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (Vr(), vr(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), $r());
  }
}
function L0(e, t) {
  if (pn) {
    let r = pn.provides;
    const n = pn.parent && pn.parent.provides;
    n === r && (r = pn.provides = Object.create(n)), r[e] = t;
  }
}
function is(e, t, r = !1) {
  const n = Ty();
  if (n || Ui) {
    let i = Ui ? Ui._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && lt(t) ? t.call(n && n.proxy) : t;
  }
}
const R0 = /* @__PURE__ */ Symbol.for("v-scx"), V0 = () => is(R0);
function mi(e, t, r) {
  return Kp(e, t, r);
}
function Kp(e, t, r = Ot) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = yn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (Qo) {
    if (o === "sync") {
      const g = V0();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = mr, g.resume = mr, g.pause = mr, g;
    }
  }
  const u = pn;
  s.call = (g, _, m) => vr(g, u, _, m);
  let d = !1;
  o === "post" ? s.scheduler = (g) => {
    Nn(g, u && u.suspense);
  } : o !== "sync" && (d = !0, s.scheduler = (g, _) => {
    _ ? g() : Pu(g);
  }), s.augmentJob = (g) => {
    t && (g.flags |= 4), d && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const f = O0(e, t, s);
  return Qo && (c ? c.push(f) : l && f()), f;
}
function $0(e, t, r) {
  const n = this.proxy, i = Jt(e) ? e.includes(".") ? Bp(n, e) : () => n[e] : e.bind(n, n);
  let o;
  lt(t) ? o = t : (o = t.handler, r = t);
  const a = ga(this), s = Kp(i, o.bind(n), r);
  return a(), s;
}
function Bp(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const z0 = /* @__PURE__ */ Symbol("_vte"), j0 = (e) => e.__isTeleport, H0 = /* @__PURE__ */ Symbol("_leaveCb");
function Nu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Nu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Up(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ad(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ps = /* @__PURE__ */ new WeakMap();
function Ho(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (m, p) => Ho(
        m,
        t && (it(t) ? t[p] : t),
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
  const o = n.shapeFlag & 4 ? hl(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, c = t && t.r, u = s.refs === Ot ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ St(d), g = d === Ot ? hp : (m) => Ad(u, m) ? !1 : wt(f, m), _ = (m, p) => !(p && Ad(u, p));
  if (c != null && c !== l) {
    if (Id(t), Jt(c))
      u[c] = null, g(c) && (d[c] = null);
    else if (/* @__PURE__ */ gn(c)) {
      const m = t;
      _(c, m.k) && (c.value = null), m.k && (u[m.k] = null);
    }
  }
  if (lt(l))
    ha(l, s, 12, [a, u]);
  else {
    const m = Jt(l), p = /* @__PURE__ */ gn(l);
    if (m || p) {
      const O = () => {
        if (e.f) {
          const B = m ? g(l) ? d[l] : u[l] : _() || !e.k ? l.value : u[e.k];
          if (i)
            it(B) && mu(B, o);
          else if (it(B))
            B.includes(o) || B.push(o);
          else if (m)
            u[l] = [o], g(l) && (d[l] = u[l]);
          else {
            const z = [o];
            _(l, e.k) && (l.value = z), e.k && (u[e.k] = z);
          }
        } else m ? (u[l] = a, g(l) && (d[l] = a)) : p && (_(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const B = () => {
          O(), Ps.delete(e);
        };
        B.id = -1, Ps.set(e, B), Nn(B, r);
      } else
        Id(e), O();
    }
  }
}
function Id(e) {
  const t = Ps.get(e);
  t && (t.flags |= 8, Ps.delete(e));
}
al().requestIdleCallback;
al().cancelIdleCallback;
const Go = (e) => !!e.type.__asyncLoader, Yp = (e) => e.type.__isKeepAlive;
function G0(e, t) {
  qp(e, "a", t);
}
function W0(e, t) {
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
  if (ul(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Yp(i.parent.vnode) && K0(n, t, r, i), i = i.parent;
  }
}
function K0(e, t, r, n) {
  const i = ul(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Xp(() => {
    mu(n[t], i);
  }, r);
}
function ul(e, t, r = pn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Vr();
      const s = ga(r), l = vr(t, r, e, a);
      return s(), $r(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const jr = (e) => (t, r = pn) => {
  (!Qo || e === "sp") && ul(e, (...n) => t(...n), r);
}, B0 = jr("bm"), dl = jr("m"), U0 = jr(
  "bu"
), Y0 = jr("u"), ma = jr(
  "bum"
), Xp = jr("um"), q0 = jr(
  "sp"
), X0 = jr("rtg"), J0 = jr("rtc");
function Z0(e, t = pn) {
  ul("ec", e, t);
}
const Q0 = "components", Jp = /* @__PURE__ */ Symbol.for("v-ndc");
function ey(e) {
  return Jt(e) ? ty(Q0, e, !1) || e : e || Jp;
}
function ty(e, t, r = !0, n = !1) {
  const i = Vn || pn;
  if (i) {
    const o = i.type;
    {
      const s = $y(
        o,
        !1
      );
      if (s && (s === t || s === wn(t) || s === ol(wn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ed(i[e] || o[e], t) || // global registration
      Ed(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function Ed(e, t) {
  return e && (e[t] || e[wn(t)] || e[ol(wn(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, a = it(e);
  if (a || Jt(e)) {
    const s = a && /* @__PURE__ */ hi(e);
    let l = !1, c = !1;
    s && (l = !/* @__PURE__ */ Bn(e), c = /* @__PURE__ */ zr(e), e = sl(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        l ? c ? Qi(or(e[u])) : or(e[u]) : e[u],
        u,
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
        const u = s[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
const xc = (e) => e ? bh(e) ? hl(e) : xc(e.parent) : null, Wo = (
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
    $parent: (e) => xc(e.parent),
    $root: (e) => xc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Qp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Pu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = cl.bind(e.proxy)),
    $watch: (e) => $0.bind(e)
  })
), Ll = (e, t) => e !== Ot && !e.__isScriptSetup && wt(e, t), ny = {
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
        if (Ll(n, t))
          return a[t] = 1, n[t];
        if (i !== Ot && wt(i, t))
          return a[t] = 2, i[t];
        if (wt(o, t))
          return a[t] = 3, o[t];
        if (r !== Ot && wt(r, t))
          return a[t] = 4, r[t];
        kc && (a[t] = 0);
      }
    }
    const c = Wo[t];
    let u, d;
    if (c)
      return t === "$attrs" && fn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[t])
    )
      return u;
    if (r !== Ot && wt(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      d = l.config.globalProperties, wt(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Ll(i, t) ? (i[t] = r, !0) : n !== Ot && wt(n, t) ? (n[t] = r, !0) : wt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== Ot && s[0] !== "$" && wt(e, s) || Ll(t, s) || wt(o, s) || wt(n, s) || wt(Wo, s) || wt(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : wt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Od(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let kc = !0;
function ry(e) {
  const t = Qp(e), r = e.proxy, n = e.ctx;
  kc = !1, t.beforeCreate && Fd(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: g,
    updated: _,
    activated: m,
    deactivated: p,
    beforeDestroy: O,
    beforeUnmount: B,
    destroyed: z,
    unmounted: G,
    render: x,
    renderTracked: ee,
    renderTriggered: W,
    errorCaptured: ce,
    serverPrefetch: F,
    // public API
    expose: pe,
    inheritAttrs: C,
    // assets
    components: Y,
    directives: te,
    filters: J
  } = t;
  if (c && iy(c, n, null), a)
    for (const ie in a) {
      const k = a[ie];
      lt(k) && (n[ie] = k.bind(r));
    }
  if (i) {
    const ie = i.call(r, r);
    It(ie) && (e.data = /* @__PURE__ */ ao(ie));
  }
  if (kc = !0, o)
    for (const ie in o) {
      const k = o[ie], L = lt(k) ? k.bind(r, r) : lt(k.get) ? k.get.bind(r, r) : mr, Z = !lt(k) && lt(k.set) ? k.set.bind(r) : mr, V = ut({
        get: L,
        set: Z
      });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => V.value,
        set: (fe) => V.value = fe
      });
    }
  if (s)
    for (const ie in s)
      Zp(s[ie], n, r, ie);
  if (l) {
    const ie = lt(l) ? l.call(r) : l;
    Reflect.ownKeys(ie).forEach((k) => {
      L0(k, ie[k]);
    });
  }
  u && Fd(u, e, "c");
  function le(ie, k) {
    it(k) ? k.forEach((L) => ie(L.bind(r))) : k && ie(k.bind(r));
  }
  if (le(B0, d), le(dl, f), le(U0, g), le(Y0, _), le(G0, m), le(W0, p), le(Z0, ce), le(J0, ee), le(X0, W), le(ma, B), le(Xp, G), le(q0, F), it(pe))
    if (pe.length) {
      const ie = e.exposed || (e.exposed = {});
      pe.forEach((k) => {
        Object.defineProperty(ie, k, {
          get: () => r[k],
          set: (L) => r[k] = L,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === mr && (e.render = x), C != null && (e.inheritAttrs = C), Y && (e.components = Y), te && (e.directives = te), F && Up(e);
}
function iy(e, t, r = mr) {
  it(e) && (e = Mc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    It(i) ? "default" in i ? o = is(
      i.from || n,
      i.default,
      !0
    ) : o = is(i.from || n) : o = is(i), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function Fd(e, t, r) {
  vr(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Zp(e, t, r, n) {
  let i = n.includes(".") ? Bp(r, n) : () => r[n];
  if (Jt(e)) {
    const o = t[e];
    lt(o) && mi(i, o);
  } else if (lt(e))
    mi(i, e.bind(r));
  else if (It(e))
    if (it(e))
      e.forEach((o) => Zp(o, t, r, n));
    else {
      const o = lt(e.handler) ? e.handler.bind(r) : t[e.handler];
      lt(o) && mi(i, o, e);
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
    (c) => Ns(l, c, a, !0)
  ), Ns(l, t, a)), It(t) && o.set(t, l), l;
}
function Ns(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ns(e, o, r, !0), i && i.forEach(
    (a) => Ns(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = oy[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const oy = {
  data: Td,
  props: Dd,
  emits: Dd,
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
  watch: sy,
  // provide / inject
  provide: Td,
  inject: ay
};
function Td(e, t) {
  return t ? e ? function() {
    return yn(
      lt(e) ? e.call(this, this) : e,
      lt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ay(e, t) {
  return Io(Mc(e), Mc(t));
}
function Mc(e) {
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
function Io(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Dd(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    Od(e),
    Od(t ?? {})
  ) : t;
}
function sy(e, t) {
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
let ly = 0;
function cy(e, t) {
  return function(n, i = null) {
    lt(n) || (n = yn({}, n)), i != null && !It(i) && (i = null);
    const o = eh(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const c = o.app = {
      _uid: ly++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: jy,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && lt(u.install) ? (a.add(u), u.install(c, ...d)) : lt(u) && (a.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (o.components[u] = d, c) : o.components[u];
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, c) : o.directives[u];
      },
      mount(u, d, f) {
        if (!l) {
          const g = c._ceVNode || Be(n, i);
          return g.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(g, u, f), l = !0, c._container = u, u.__vue_app__ = c, hl(g.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (vr(
          s,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return o.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = Ui;
        Ui = c;
        try {
          return u();
        } finally {
          Ui = d;
        }
      }
    };
    return c;
  };
}
let Ui = null;
const uy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wn(t)}Modifiers`] || e[`${ki(t)}Modifiers`];
function dy(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ot;
  let i = r;
  const o = t.startsWith("update:"), a = o && uy(n, t.slice(7));
  a && (a.trim && (i = r.map((u) => Jt(u) ? u.trim() : u)), a.number && (i = r.map(yu)));
  let s, l = n[s = El(t)] || // also try camelCase event handler (#2249)
  n[s = El(wn(t))];
  !l && o && (l = n[s = El(ki(t))]), l && vr(
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
    e.emitted[s] = !0, vr(
      c,
      e,
      6,
      i
    );
  }
}
const fy = /* @__PURE__ */ new WeakMap();
function th(e, t, r = !1) {
  const n = r ? fy : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!lt(e)) {
    const l = (c) => {
      const u = th(c, t, !0);
      u && (s = !0, yn(a, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (It(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => a[l] = null) : yn(a, o), It(e) && n.set(e, a), a);
}
function fl(e, t) {
  return !e || !nl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), wt(e, t[0].toLowerCase() + t.slice(1)) || wt(e, ki(t)) || wt(e, t));
}
function Ld(e) {
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
    renderCache: u,
    props: d,
    data: f,
    setupState: g,
    ctx: _,
    inheritAttrs: m
  } = e, p = Ms(e);
  let O, B;
  try {
    if (r.shapeFlag & 4) {
      const G = i || n, x = G;
      O = dr(
        c.call(
          x,
          G,
          u,
          d,
          g,
          f,
          _
        )
      ), B = s;
    } else {
      const G = t;
      O = dr(
        G.length > 1 ? G(
          d,
          { attrs: s, slots: a, emit: l }
        ) : G(
          d,
          null
        )
      ), B = t.props ? s : py(s);
    }
  } catch (G) {
    Ko.length = 0, ll(G, e, 1), O = Be(Xr);
  }
  let z = O;
  if (B && m !== !1) {
    const G = Object.keys(B), { shapeFlag: x } = z;
    G.length && x & 7 && (o && G.some(rl) && (B = hy(
      B,
      o
    )), z = eo(z, B, !1, !0));
  }
  return r.dirs && (z = eo(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && Nu(z, r.transition), O = z, Ms(p), O;
}
const py = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || nl(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, hy = (e, t) => {
  const r = {};
  for (const n in e)
    (!rl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function my(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Rd(n, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (nh(a, n, f) && !fl(c, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Rd(n, a, c) : !0 : !!a;
  return !1;
}
function Rd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (nh(t, e, o) && !fl(r, o))
      return !0;
  }
  return !1;
}
function nh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && It(n) && It(i) ? !bu(n, i) : n !== i;
}
function gy({ vnode: e, parent: t, suspense: r }, n) {
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
function yy(e, t, r, n = !1) {
  const i = {}, o = ih();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ah(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ M0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function by(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ St(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (fl(e.emitsOptions, f))
          continue;
        const g = t[f];
        if (l)
          if (wt(o, f))
            g !== o[f] && (o[f] = g, c = !0);
          else {
            const _ = wn(f);
            i[_] = Pc(
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
    let u;
    for (const d in s)
      (!t || // for camelCase
      !wt(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ki(d)) === d || !wt(t, u))) && (l ? r && // for camelCase
      (r[d] !== void 0 || // for kebab-case
      r[u] !== void 0) && (i[d] = Pc(
        l,
        s,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== s)
      for (const d in o)
        (!t || !wt(t, d)) && (delete o[d], c = !0);
  }
  c && Ir(e.attrs, "set", "");
}
function ah(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if ($o(l))
        continue;
      const c = t[l];
      let u;
      i && wt(i, u = wn(l)) ? !o || !o.includes(u) ? r[u] = c : (s || (s = {}))[u] = c : fl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ St(r), c = s || Ot;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      r[d] = Pc(
        i,
        l,
        d,
        c[d],
        e,
        !wt(c, d)
      );
    }
  }
  return a;
}
function Pc(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = wt(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && lt(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const u = ga(i);
          n = c[r] = l.call(
            null,
            t
          ), u();
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
const vy = /* @__PURE__ */ new WeakMap();
function sh(e, t, r = !1) {
  const n = r ? vy : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!lt(e)) {
    const u = (d) => {
      l = !0;
      const [f, g] = sh(d, t, !0);
      yn(a, f), g && s.push(...g);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return It(e) && n.set(e, Wi), Wi;
  if (it(o))
    for (let u = 0; u < o.length; u++) {
      const d = wn(o[u]);
      Vd(d) && (a[d] = Ot);
    }
  else if (o)
    for (const u in o) {
      const d = wn(u);
      if (Vd(d)) {
        const f = o[u], g = a[d] = it(f) || lt(f) ? { type: f } : yn({}, f), _ = g.type;
        let m = !1, p = !0;
        if (it(_))
          for (let O = 0; O < _.length; ++O) {
            const B = _[O], z = lt(B) && B.name;
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
        ] = p, (m || wt(g, "default")) && s.push(d);
      }
    }
  const c = [a, s];
  return It(e) && n.set(e, c), c;
}
function Vd(e) {
  return e[0] !== "$" && !$o(e);
}
const Cu = (e) => e === "_" || e === "_ctx" || e === "$stable", Au = (e) => it(e) ? e.map(dr) : [dr(e)], _y = (e, t, r) => {
  if (t._n)
    return t;
  const n = Wp((...i) => Au(t(...i)), r);
  return n._c = !1, n;
}, lh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Cu(i)) continue;
    const o = e[i];
    if (lt(o))
      t[i] = _y(i, o, n);
    else if (o != null) {
      const a = Au(o);
      t[i] = () => a;
    }
  }
}, ch = (e, t) => {
  const r = Au(t);
  e.slots.default = () => r;
}, uh = (e, t, r) => {
  for (const n in t)
    (r || !Cu(n)) && (e[n] = t[n]);
}, Sy = (e, t, r) => {
  const n = e.slots = ih();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (uh(n, t, r), r && vp(n, "_", i, !0)) : lh(t, n);
  } else t && ch(e, t);
}, wy = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = Ot;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : uh(i, t, r) : (o = !t.$stable, lh(t, i)), a = t;
  } else t && (ch(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !Cu(s) && a[s] == null && delete i[s];
}, Nn = Ny;
function xy(e) {
  return ky(e);
}
function ky(e, t) {
  const r = al();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: g = mr,
    insertStaticContent: _
  } = e, m = (b, S, $, H = null, v = null, w = null, D = void 0, M = null, P = !!S.dynamicChildren) => {
    if (b === S)
      return;
    b && !xo(b, S) && (H = ae(b), fe(b, v, w, !0), b = null), S.patchFlag === -2 && (P = !1, S.dynamicChildren = null);
    const { type: I, ref: K, shapeFlag: re } = S;
    switch (I) {
      case pl:
        p(b, S, $, H);
        break;
      case Xr:
        O(b, S, $, H);
        break;
      case Vl:
        b == null && B(S, $, H, D);
        break;
      case Ze:
        Y(
          b,
          S,
          $,
          H,
          v,
          w,
          D,
          M,
          P
        );
        break;
      default:
        re & 1 ? x(
          b,
          S,
          $,
          H,
          v,
          w,
          D,
          M,
          P
        ) : re & 6 ? te(
          b,
          S,
          $,
          H,
          v,
          w,
          D,
          M,
          P
        ) : (re & 64 || re & 128) && I.process(
          b,
          S,
          $,
          H,
          v,
          w,
          D,
          M,
          P,
          A
        );
    }
    K != null && v ? Ho(K, b && b.ref, w, S || b, !S) : K == null && b && b.ref != null && Ho(b.ref, null, w, b, !0);
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
  }, O = (b, S, $, H) => {
    b == null ? n(
      S.el = l(S.children || ""),
      $,
      H
    ) : S.el = b.el;
  }, B = (b, S, $, H) => {
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
  }, G = ({ el: b, anchor: S }) => {
    let $;
    for (; b && b !== S; )
      $ = f(b), i(b), b = $;
    i(S);
  }, x = (b, S, $, H, v, w, D, M, P) => {
    if (S.type === "svg" ? D = "svg" : S.type === "math" && (D = "mathml"), b == null)
      ee(
        S,
        $,
        H,
        v,
        w,
        D,
        M,
        P
      );
    else {
      const I = b.el && b.el._isVueCE ? b.el : null;
      try {
        I && I._beginPatch(), F(
          b,
          S,
          v,
          w,
          D,
          M,
          P
        );
      } finally {
        I && I._endPatch();
      }
    }
  }, ee = (b, S, $, H, v, w, D, M) => {
    let P, I;
    const { props: K, shapeFlag: re, transition: me, dirs: j } = b;
    if (P = b.el = a(
      b.type,
      w,
      K && K.is,
      K
    ), re & 8 ? u(P, b.children) : re & 16 && ce(
      b.children,
      P,
      null,
      H,
      v,
      Rl(b, w),
      D,
      M
    ), j && ni(b, null, H, "created"), W(P, b, b.scopeId, D, H), K) {
      for (const _e in K)
        _e !== "value" && !$o(_e) && o(P, _e, null, K[_e], w, H);
      "value" in K && o(P, "value", null, K.value, w), (I = K.onVnodeBeforeMount) && sr(I, H, b);
    }
    j && ni(b, null, H, "beforeMount");
    const de = My(v, me);
    de && me.beforeEnter(P), n(P, S, $), ((I = K && K.onVnodeMounted) || de || j) && Nn(() => {
      try {
        I && sr(I, H, b), de && me.enter(P), j && ni(b, null, H, "mounted");
      } finally {
      }
    }, v);
  }, W = (b, S, $, H, v) => {
    if ($ && g(b, $), H)
      for (let w = 0; w < H.length; w++)
        g(b, H[w]);
    if (v) {
      let w = v.subTree;
      if (S === w || hh(w.type) && (w.ssContent === S || w.ssFallback === S)) {
        const D = v.vnode;
        W(
          b,
          D,
          D.scopeId,
          D.slotScopeIds,
          v.parent
        );
      }
    }
  }, ce = (b, S, $, H, v, w, D, M, P = 0) => {
    for (let I = P; I < b.length; I++) {
      const K = b[I] = M ? Nr(b[I]) : dr(b[I]);
      m(
        null,
        K,
        S,
        $,
        H,
        v,
        w,
        D,
        M
      );
    }
  }, F = (b, S, $, H, v, w, D) => {
    const M = S.el = b.el;
    let { patchFlag: P, dynamicChildren: I, dirs: K } = S;
    P |= b.patchFlag & 16;
    const re = b.props || Ot, me = S.props || Ot;
    let j;
    if ($ && ri($, !1), (j = me.onVnodeBeforeUpdate) && sr(j, $, S, b), K && ni(S, b, $, "beforeUpdate"), $ && ri($, !0), (re.innerHTML && me.innerHTML == null || re.textContent && me.textContent == null) && u(M, ""), I ? pe(
      b.dynamicChildren,
      I,
      M,
      $,
      H,
      Rl(S, v),
      w
    ) : D || k(
      b,
      S,
      M,
      null,
      $,
      H,
      Rl(S, v),
      w,
      !1
    ), P > 0) {
      if (P & 16)
        C(M, re, me, $, v);
      else if (P & 2 && re.class !== me.class && o(M, "class", null, me.class, v), P & 4 && o(M, "style", re.style, me.style, v), P & 8) {
        const de = S.dynamicProps;
        for (let _e = 0; _e < de.length; _e++) {
          const ke = de[_e], ue = re[ke], ve = me[ke];
          (ve !== ue || ke === "value") && o(M, ke, ue, ve, v, $);
        }
      }
      P & 1 && b.children !== S.children && u(M, S.children);
    } else !D && I == null && C(M, re, me, $, v);
    ((j = me.onVnodeUpdated) || K) && Nn(() => {
      j && sr(j, $, S, b), K && ni(S, b, $, "updated");
    }, H);
  }, pe = (b, S, $, H, v, w, D) => {
    for (let M = 0; M < S.length; M++) {
      const P = b[M], I = S[M], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xo(P, I) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? d(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      m(
        P,
        I,
        K,
        null,
        H,
        v,
        w,
        D,
        !0
      );
    }
  }, C = (b, S, $, H, v) => {
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
        const D = $[w], M = S[w];
        D !== M && w !== "value" && o(b, w, M, D, v, H);
      }
      "value" in $ && o(b, "value", S.value, $.value, v);
    }
  }, Y = (b, S, $, H, v, w, D, M, P) => {
    const I = S.el = b ? b.el : s(""), K = S.anchor = b ? b.anchor : s("");
    let { patchFlag: re, dynamicChildren: me, slotScopeIds: j } = S;
    j && (M = M ? M.concat(j) : j), b == null ? (n(I, $, H), n(K, $, H), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      $,
      K,
      v,
      w,
      D,
      M,
      P
    )) : re > 0 && re & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren && b.dynamicChildren.length === me.length ? (pe(
      b.dynamicChildren,
      me,
      $,
      v,
      w,
      D,
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
    )) : k(
      b,
      S,
      $,
      K,
      v,
      w,
      D,
      M,
      P
    );
  }, te = (b, S, $, H, v, w, D, M, P) => {
    S.slotScopeIds = M, b == null ? S.shapeFlag & 512 ? v.ctx.activate(
      S,
      $,
      H,
      D,
      P
    ) : J(
      S,
      $,
      H,
      v,
      w,
      D,
      P
    ) : U(b, S, P);
  }, J = (b, S, $, H, v, w, D) => {
    const M = b.component = Fy(
      b,
      H,
      v
    );
    if (Yp(b) && (M.ctx.renderer = A), Dy(M, !1, D), M.asyncDep) {
      if (v && v.registerDep(M, le, D), !b.el) {
        const P = M.subTree = Be(Xr);
        O(null, P, S, $), b.placeholder = P.el;
      }
    } else
      le(
        M,
        b,
        S,
        $,
        v,
        w,
        D
      );
  }, U = (b, S, $) => {
    const H = S.component = b.component;
    if (my(b, S, $))
      if (H.asyncDep && !H.asyncResolved) {
        ie(H, S, $);
        return;
      } else
        H.next = S, H.update();
    else
      S.el = b.el, H.vnode = S;
  }, le = (b, S, $, H, v, w, D) => {
    const M = () => {
      if (b.isMounted) {
        let { next: re, bu: me, u: j, parent: de, vnode: _e } = b;
        {
          const h = fh(b);
          if (h) {
            re && (re.el = _e.el, ie(b, re, D)), h.asyncDep.then(() => {
              Nn(() => {
                b.isUnmounted || I();
              }, v);
            });
            return;
          }
        }
        let ke = re, ue;
        ri(b, !1), re ? (re.el = _e.el, ie(b, re, D)) : re = _e, me && rs(me), (ue = re.props && re.props.onVnodeBeforeUpdate) && sr(ue, de, re, _e), ri(b, !0);
        const ve = Ld(b), Ne = b.subTree;
        b.subTree = ve, m(
          Ne,
          ve,
          // parent may have changed if it's in a teleport
          d(Ne.el),
          // anchor may have changed if it's in a fragment
          ae(Ne),
          b,
          v,
          w
        ), re.el = ve.el, ke === null && gy(b, ve.el), j && Nn(j, v), (ue = re.props && re.props.onVnodeUpdated) && Nn(
          () => sr(ue, de, re, _e),
          v
        );
      } else {
        let re;
        const { el: me, props: j } = S, { bm: de, m: _e, parent: ke, root: ue, type: ve } = b, Ne = Go(S);
        ri(b, !1), de && rs(de), !Ne && (re = j && j.onVnodeBeforeMount) && sr(re, ke, S), ri(b, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            ve,
            b.parent ? b.parent.type : void 0
          );
          const h = b.subTree = Ld(b);
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
        if (_e && Nn(_e, v), !Ne && (re = j && j.onVnodeMounted)) {
          const h = S;
          Nn(
            () => sr(re, ke, h),
            v
          );
        }
        (S.shapeFlag & 256 || ke && Go(ke.vnode) && ke.vnode.shapeFlag & 256) && b.a && Nn(b.a, v), b.isMounted = !0, S = $ = H = null;
      }
    };
    b.scope.on();
    const P = b.effect = new xp(M);
    b.scope.off();
    const I = b.update = P.run.bind(P), K = b.job = P.runIfDirty.bind(P);
    K.i = b, K.id = b.uid, P.scheduler = () => Pu(K), ri(b, !0), I();
  }, ie = (b, S, $) => {
    S.component = b;
    const H = b.vnode.props;
    b.vnode = S, b.next = null, by(b, S.props, H, $), wy(b, S.children, $), Vr(), Cd(b), $r();
  }, k = (b, S, $, H, v, w, D, M, P = !1) => {
    const I = b && b.children, K = b ? b.shapeFlag : 0, re = S.children, { patchFlag: me, shapeFlag: j } = S;
    if (me > 0) {
      if (me & 128) {
        Z(
          I,
          re,
          $,
          H,
          v,
          w,
          D,
          M,
          P
        );
        return;
      } else if (me & 256) {
        L(
          I,
          re,
          $,
          H,
          v,
          w,
          D,
          M,
          P
        );
        return;
      }
    }
    j & 8 ? (K & 16 && X(I, v, w), re !== I && u($, re)) : K & 16 ? j & 16 ? Z(
      I,
      re,
      $,
      H,
      v,
      w,
      D,
      M,
      P
    ) : X(I, v, w, !0) : (K & 8 && u($, ""), j & 16 && ce(
      re,
      $,
      H,
      v,
      w,
      D,
      M,
      P
    ));
  }, L = (b, S, $, H, v, w, D, M, P) => {
    b = b || Wi, S = S || Wi;
    const I = b.length, K = S.length, re = Math.min(I, K);
    let me;
    for (me = 0; me < re; me++) {
      const j = S[me] = P ? Nr(S[me]) : dr(S[me]);
      m(
        b[me],
        j,
        $,
        null,
        v,
        w,
        D,
        M,
        P
      );
    }
    I > K ? X(
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
      D,
      M,
      P,
      re
    );
  }, Z = (b, S, $, H, v, w, D, M, P) => {
    let I = 0;
    const K = S.length;
    let re = b.length - 1, me = K - 1;
    for (; I <= re && I <= me; ) {
      const j = b[I], de = S[I] = P ? Nr(S[I]) : dr(S[I]);
      if (xo(j, de))
        m(
          j,
          de,
          $,
          null,
          v,
          w,
          D,
          M,
          P
        );
      else
        break;
      I++;
    }
    for (; I <= re && I <= me; ) {
      const j = b[re], de = S[me] = P ? Nr(S[me]) : dr(S[me]);
      if (xo(j, de))
        m(
          j,
          de,
          $,
          null,
          v,
          w,
          D,
          M,
          P
        );
      else
        break;
      re--, me--;
    }
    if (I > re) {
      if (I <= me) {
        const j = me + 1, de = j < K ? S[j].el : H;
        for (; I <= me; )
          m(
            null,
            S[I] = P ? Nr(S[I]) : dr(S[I]),
            $,
            de,
            v,
            w,
            D,
            M,
            P
          ), I++;
      }
    } else if (I > me)
      for (; I <= re; )
        fe(b[I], v, w, !0), I++;
    else {
      const j = I, de = I, _e = /* @__PURE__ */ new Map();
      for (I = de; I <= me; I++) {
        const y = S[I] = P ? Nr(S[I]) : dr(S[I]);
        y.key != null && _e.set(y.key, I);
      }
      let ke, ue = 0;
      const ve = me - de + 1;
      let Ne = !1, h = 0;
      const R = new Array(ve);
      for (I = 0; I < ve; I++) R[I] = 0;
      for (I = j; I <= re; I++) {
        const y = b[I];
        if (ue >= ve) {
          fe(y, v, w, !0);
          continue;
        }
        let T;
        if (y.key != null)
          T = _e.get(y.key);
        else
          for (ke = de; ke <= me; ke++)
            if (R[ke - de] === 0 && xo(y, S[ke])) {
              T = ke;
              break;
            }
        T === void 0 ? fe(y, v, w, !0) : (R[T - de] = I + 1, T >= h ? h = T : Ne = !0, m(
          y,
          S[T],
          $,
          null,
          v,
          w,
          D,
          M,
          P
        ), ue++);
      }
      const N = Ne ? Py(R) : Wi;
      for (ke = N.length - 1, I = ve - 1; I >= 0; I--) {
        const y = de + I, T = S[y], se = S[y + 1], ge = y + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          se.el || ph(se)
        ) : H;
        R[I] === 0 ? m(
          null,
          T,
          $,
          ge,
          v,
          w,
          D,
          M,
          P
        ) : Ne && (ke < 0 || I !== N[ke] ? V(T, $, ge, 2) : ke--);
      }
    }
  }, V = (b, S, $, H, v = null) => {
    const { el: w, type: D, transition: M, children: P, shapeFlag: I } = b;
    if (I & 6) {
      V(b.component.subTree, S, $, H);
      return;
    }
    if (I & 128) {
      b.suspense.move(S, $, H);
      return;
    }
    if (I & 64) {
      D.move(b, S, $, A);
      return;
    }
    if (D === Ze) {
      n(w, S, $);
      for (let re = 0; re < P.length; re++)
        V(P[re], S, $, H);
      n(b.anchor, S, $);
      return;
    }
    if (D === Vl) {
      z(b, S, $);
      return;
    }
    if (H !== 2 && I & 1 && M)
      if (H === 0)
        M.beforeEnter(w), n(w, S, $), Nn(() => M.enter(w), v);
      else {
        const { leave: re, delayLeave: me, afterLeave: j } = M, de = () => {
          b.ctx.isUnmounted ? i(w) : n(w, S, $);
        }, _e = () => {
          w._isLeaving && w[H0](
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
  }, fe = (b, S, $, H = !1, v = !1) => {
    const {
      type: w,
      props: D,
      ref: M,
      children: P,
      dynamicChildren: I,
      shapeFlag: K,
      patchFlag: re,
      dirs: me,
      cacheIndex: j,
      memo: de
    } = b;
    if (re === -2 && (v = !1), M != null && (Vr(), Ho(M, null, $, b, !0), $r()), j != null && (S.renderCache[j] = void 0), K & 256) {
      S.ctx.deactivate(b);
      return;
    }
    const _e = K & 1 && me, ke = !Go(b);
    let ue;
    if (ke && (ue = D && D.onVnodeBeforeUnmount) && sr(ue, S, b), K & 6)
      E(b.component, $, H);
    else {
      if (K & 128) {
        b.suspense.unmount($, H);
        return;
      }
      _e && ni(b, null, S, "beforeUnmount"), K & 64 ? b.type.remove(
        b,
        S,
        $,
        A,
        H
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== Ze || re > 0 && re & 64) ? X(
        I,
        S,
        $,
        !1,
        !0
      ) : (w === Ze && re & 384 || !v && K & 16) && X(P, S, $), H && Se(b);
    }
    const ve = de != null && j == null;
    (ke && (ue = D && D.onVnodeUnmounted) || _e || ve) && Nn(() => {
      ue && sr(ue, S, b), _e && ni(b, null, S, "unmounted"), ve && (b.el = null);
    }, $);
  }, Se = (b) => {
    const { type: S, el: $, anchor: H, transition: v } = b;
    if (S === Ze) {
      Q($, H);
      return;
    }
    if (S === Vl) {
      G(b);
      return;
    }
    const w = () => {
      i($), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (b.shapeFlag & 1 && v && !v.persisted) {
      const { leave: D, delayLeave: M } = v, P = () => D($, w);
      M ? M(b.el, w, P) : P();
    } else
      w();
  }, Q = (b, S) => {
    let $;
    for (; b !== S; )
      $ = f(b), i(b), b = $;
    i(S);
  }, E = (b, S, $) => {
    const { bum: H, scope: v, job: w, subTree: D, um: M, m: P, a: I } = b;
    $d(P), $d(I), H && rs(H), v.stop(), w && (w.flags |= 8, fe(D, b, S, $)), M && Nn(M, S), Nn(() => {
      b.isUnmounted = !0;
    }, S);
  }, X = (b, S, $, H = !1, v = !1, w = 0) => {
    for (let D = w; D < b.length; D++)
      fe(b[D], S, $, H, v);
  }, ae = (b) => {
    if (b.shapeFlag & 6)
      return ae(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const S = f(b.anchor || b.el), $ = S && S[z0];
    return $ ? f($) : S;
  };
  let be = !1;
  const we = (b, S, $) => {
    let H;
    b == null ? S._vnode && (fe(S._vnode, null, null, !0), H = S._vnode.component) : m(
      S._vnode || null,
      b,
      S,
      null,
      null,
      null,
      $
    ), S._vnode = b, be || (be = !0, Cd(H), jp(), be = !1);
  }, A = {
    p: m,
    um: fe,
    m: V,
    r: Se,
    mt: J,
    mc: ce,
    pc: k,
    pbc: pe,
    n: ae,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: cy(we)
  };
}
function Rl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ri({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function My(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function dh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Nr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && dh(a, s)), s.type === pl && (s.patchFlag === -1 && (s = i[o] = Nr(s)), s.el = a.el), s.type === Xr && !s.el && (s.el = a.el);
    }
}
function Py(e) {
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
function $d(e) {
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
function Ny(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : D0(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), pl = /* @__PURE__ */ Symbol.for("v-txt"), Xr = /* @__PURE__ */ Symbol.for("v-cmt"), Vl = /* @__PURE__ */ Symbol.for("v-stc"), Ko = [];
let $n = null;
function Te(e = !1) {
  Ko.push($n = e ? null : []);
}
function Cy() {
  Ko.pop(), $n = Ko[Ko.length - 1] || null;
}
let Zo = 1;
function zd(e, t = !1) {
  Zo += e, e < 0 && $n && t && ($n.hasOnce = !0);
}
function mh(e) {
  return e.dynamicChildren = Zo > 0 ? $n || Wi : null, Cy(), Zo > 0 && $n && $n.push(e), e;
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
    Be(
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
const yh = ({ key: e }) => e ?? null, os = ({
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
    ref: t && os(t),
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
  return s ? (Iu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Jt(r) ? 8 : 16), Zo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  $n && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && $n.push(l), l;
}
const Be = Ay;
function Ay(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Jp) && (e = Xr), gh(e)) {
    const s = eo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Iu(s, r), Zo > 0 && !o && $n && (s.shapeFlag & 6 ? $n[$n.indexOf(e)] = s : $n.push(s)), s.patchFlag = -2, s;
  }
  if (zy(e) && (e = e.__vccOpts), t) {
    t = Iy(t);
    let { class: s, style: l } = t;
    s && !Jt(s) && (t.class = ht(s)), It(l) && (/* @__PURE__ */ Mu(l) && !it(l) && (l = yn({}, l)), t.style = At(l));
  }
  const a = Jt(e) ? 1 : hh(e) ? 128 : j0(e) ? 64 : It(e) ? 4 : lt(e) ? 2 : 0;
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
function Iy(e) {
  return e ? /* @__PURE__ */ Mu(e) || oh(e) ? yn({}, e) : e : null;
}
function eo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, c = t ? Cr(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && yh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(os(t)) : [o, os(t)] : os(t)
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
  return l && n && Nu(
    u,
    l.clone(u)
  ), u;
}
function Eo(e = " ", t = 0) {
  return Be(pl, null, e, t);
}
function pt(e = "", t = !1) {
  return t ? (Te(), zn(Xr, null, e)) : Be(Xr, null, e);
}
function dr(e) {
  return e == null || typeof e == "boolean" ? Be(Xr) : it(e) ? Be(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : gh(e) ? Nr(e) : Be(pl, null, String(e));
}
function Nr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : eo(e);
}
function Iu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Iu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !oh(t) ? t._ctx = Vn : i === 3 && Vn && (Vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else lt(t) ? (t = { default: t, _ctx: Vn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Eo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Cr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ht([t.class, n.class]));
      else if (i === "style")
        t.style = At([t.style, n.style]);
      else if (nl(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(it(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !rl(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function sr(e, t, r, n = null) {
  vr(e, t, 7, [
    r,
    n
  ]);
}
const Ey = eh();
let Oy = 0;
function Fy(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Ey, o = {
    uid: Oy++,
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
    scope: new o0(
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = dy.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const Ty = () => pn || Vn;
let Cs, Nc;
{
  const e = al(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Cs = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => pn = r
  ), Nc = t(
    "__VUE_SSR_SETTERS__",
    (r) => Qo = r
  );
}
const ga = (e) => {
  const t = pn;
  return Cs(e), e.scope.on(), () => {
    e.scope.off(), Cs(t);
  };
}, jd = () => {
  pn && pn.scope.off(), Cs(null);
};
function bh(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = !1;
function Dy(e, t = !1, r = !1) {
  t && Nc(t);
  const { props: n, children: i } = e.vnode, o = bh(e);
  yy(e, n, o, t), Sy(e, i, r || t);
  const a = o ? Ly(e, t) : void 0;
  return t && Nc(!1), a;
}
function Ly(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ny);
  const { setup: n } = r;
  if (n) {
    Vr();
    const i = e.setupContext = n.length > 1 ? Vy(e) : null, o = ga(e), a = ha(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = gp(a);
    if ($r(), o(), (s || e.sp) && !Go(e) && Up(e), s) {
      if (a.then(jd, jd), t)
        return a.then((l) => {
          Hd(e, l);
        }).catch((l) => {
          ll(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Hd(e, a);
  } else
    vh(e);
}
function Hd(e, t, r) {
  lt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : It(t) && (e.setupState = Vp(t)), vh(e);
}
function vh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || mr);
  {
    const i = ga(e);
    Vr();
    try {
      ry(e);
    } finally {
      $r(), i();
    }
  }
}
const Ry = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function Vy(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ry),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function hl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vp(P0(e.exposed)), {
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
function $y(e, t = !0) {
  return lt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zy(e) {
  return lt(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ I0(e, t, Qo), jy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Cc;
const Gd = typeof window < "u" && window.trustedTypes;
if (Gd)
  try {
    Cc = /* @__PURE__ */ Gd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _h = Cc ? (e) => Cc.createHTML(e) : (e) => e, Hy = "http://www.w3.org/2000/svg", Gy = "http://www.w3.org/1998/Math/MathML", Pr = typeof document < "u" ? document : null, Wd = Pr && /* @__PURE__ */ Pr.createElement("template"), Wy = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Pr.createElementNS(Hy, e) : t === "mathml" ? Pr.createElementNS(Gy, e) : r ? Pr.createElement(e, { is: r }) : Pr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Pr.createTextNode(e),
  createComment: (e) => Pr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pr.querySelector(e),
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
      Wd.innerHTML = _h(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Wd.content;
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
}, Ky = /* @__PURE__ */ Symbol("_vtc");
function By(e, t, r) {
  const n = e[Ky];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const As = /* @__PURE__ */ Symbol("_vod"), Sh = /* @__PURE__ */ Symbol("_vsh"), _i = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[As] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : ko(e, t);
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
  e.style.display = t ? e[As] : "none", e[Sh] = !t;
}
const Uy = /* @__PURE__ */ Symbol(""), Yy = /(?:^|;)\s*display\s*:/;
function qy(e, t, r) {
  const n = e.style, i = Jt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Jt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && as(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && as(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), as(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[Uy];
      a && (r += ";" + a), n.cssText = r, o = Yy.test(r);
    }
  } else t && e.removeAttribute("style");
  As in e && (e[As] = o ? n.display : "", e[Sh] && (n.display = "none"));
}
const Kd = /\s*!important$/;
function as(e, t, r) {
  if (it(r))
    r.forEach((n) => as(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Xy(e, t);
    Kd.test(r) ? e.setProperty(
      ki(n),
      r.replace(Kd, ""),
      "important"
    ) : e[n] = r;
  }
}
const Bd = ["Webkit", "Moz", "ms"], $l = {};
function Xy(e, t) {
  const r = $l[t];
  if (r)
    return r;
  let n = wn(t);
  if (n !== "filter" && n in e)
    return $l[t] = n;
  n = ol(n);
  for (let i = 0; i < Bd.length; i++) {
    const o = Bd[i] + n;
    if (o in e)
      return $l[t] = o;
  }
  return t;
}
const Ud = "http://www.w3.org/1999/xlink";
function Yd(e, t, r, n, i, o = r0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ud, t.slice(6, t.length)) : e.setAttributeNS(Ud, t, r) : r == null || o && !_p(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : br(r) ? String(r) : r
  );
}
function qd(e, t, r, n, i) {
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
function Jy(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Xd = /* @__PURE__ */ Symbol("_vei");
function Zy(e, t, r, n, i = null) {
  const o = e[Xd] || (e[Xd] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = Qy(t);
    if (n) {
      const c = o[t] = nb(
        n,
        i
      );
      Li(e, s, c, l);
    } else a && (Jy(e, s, a, l), o[t] = void 0);
  }
}
const Jd = /(?:Once|Passive|Capture)$/;
function Qy(e) {
  let t;
  if (Jd.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Jd); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ki(e.slice(2)), t];
}
let zl = 0;
const eb = /* @__PURE__ */ Promise.resolve(), tb = () => zl || (eb.then(() => zl = 0), zl = Date.now());
function nb(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    vr(
      rb(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = tb(), r;
}
function rb(e, t) {
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
const Zd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ib = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? By(e, n, a) : t === "style" ? qy(e, r, n) : nl(t) ? rl(t) || Zy(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ob(e, t, n, a)) ? (qd(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yd(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ab(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Jt(n))) ? qd(e, wn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Yd(e, t, n, a));
};
function ob(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zd(t) && lt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Zd(t) && Jt(r) ? !1 : t in e;
}
function ab(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = wn(t);
  return Array.isArray(r) ? r.some((i) => wn(i) === n) : Object.keys(r).some((i) => wn(i) === n);
}
const Qd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => rs(t, r) : t;
};
function sb(e) {
  e.target.composing = !0;
}
function ef(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const jl = /* @__PURE__ */ Symbol("_assign");
function tf(e, t, r) {
  return t && (e = e.trim()), r && (e = yu(e)), e;
}
const nf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[jl] = Qd(i);
    const o = n || i.props && i.props.type === "number";
    Li(e, t ? "change" : "input", (a) => {
      a.target.composing || e[jl](tf(e.value, r, o));
    }), (r || o) && Li(e, "change", () => {
      e.value = tf(e.value, r, o);
    }), t || (Li(e, "compositionstart", sb), Li(e, "compositionend", ef), Li(e, "change", ef));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[jl] = Qd(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? yu(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, lb = ["ctrl", "shift", "alt", "meta"], cb = {
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
  exact: (e, t) => lb.some((r) => e[`${r}Key`] && !t.includes(r))
}, Nt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = cb[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, ub = /* @__PURE__ */ yn({ patchProp: ib }, Wy);
let rf;
function db() {
  return rf || (rf = xy(ub));
}
const Eu = ((...e) => {
  const t = db().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = pb(n);
    if (!i) return;
    const o = t._component;
    !lt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, fb(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function fb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pb(e) {
  return Jt(e) ? document.querySelector(e) : e;
}
const hb = "PanoramaSuite.Debug.Diagnostics", mb = "PanoramaSuite.Debug.ExportDiagnostics", Hl = "pano_suite.diagnostics.v1", of = "pano_suite.diagnostics.previous.v1", gb = 300, yb = 2e5, bb = 100, vb = 20, _b = 1e3, Sb = 2, ja = 1024 * 1024;
function Kr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function wb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function xb() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: wb,
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
function kb(e = {}) {
  const t = { ...xb(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, c = 0;
  const u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((A) => {
    u.delete(A), f.collected += 1;
  }) : null, m = t.FinalizationRegistry ? new t.FinalizationRegistry((A) => {
    d.delete(A), g.collected += 1;
  }) : null, p = /* @__PURE__ */ new Set(), O = { created: 0, lost: 0, restored: 0, disposed: 0 }, B = [], z = /* @__PURE__ */ new Map();
  let G = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), ee = { count: 0, maxMs: 0 };
  const W = [];
  function ce(A, oe, b = void 0) {
    B.push(b === void 0 ? { t: t.clock(), type: A, label: oe } : { t: t.clock(), type: A, label: oe, detail: b }), B.length > bb && B.shift();
  }
  function F(A, oe, b, S, $) {
    if (!r || !S || !t.WeakRef) return S;
    const H = { ref: new t.WeakRef(S), label: $ };
    return A.add(H), oe == null || oe.register(S, H), b.created += 1, S;
  }
  function pe(A, oe = "") {
    return F(u, _, f, A, oe);
  }
  function C(A, oe = "") {
    return F(d, m, g, A, oe);
  }
  function Y({ label: A = "", width: oe, height: b, offscreen: S = !1 } = {}) {
    const $ = globalThis.OffscreenCanvas;
    let H;
    return S && typeof $ < "u" ? H = new $(oe, b) : (H = t.document().createElement("canvas"), oe !== void 0 && b !== void 0 && (H.width = oe, H.height = b)), pe(H, A);
  }
  function te(A) {
    A.width = 0, A.height = 0, r && (f.released += 1);
  }
  function J(A = t.document(), oe = "") {
    var b;
    return C(((b = A == null ? void 0 : A.createElement) == null ? void 0 : b.call(A, "video")) || null, oe);
  }
  function U(A, oe) {
    if (!r || !A) return () => {
    };
    const b = { label: oe, lost: !1, disposed: !1 };
    p.add(b), O.created += 1, ce("webgl-created", oe);
    const S = () => {
      b.disposed || (b.lost = !0, O.lost += 1, ce("webglcontextlost", oe));
    }, $ = () => {
      b.disposed || (b.lost = !1, O.restored += 1, ce("webglcontextrestored", oe));
    };
    return A.addEventListener("webglcontextlost", S), A.addEventListener("webglcontextrestored", $), () => {
      b.disposed || (b.disposed = !0, p.delete(b), O.disposed += 1, ce("webgl-disposed", oe));
    };
  }
  function le(A, oe) {
    return z.set(A, oe), () => {
      z.get(A) === oe && z.delete(A);
    };
  }
  function ie() {
    return r ? t.now() : -1;
  }
  function k(A) {
    if (A < 0 || !r) return;
    const oe = t.now() - A;
    G.count += 1, G.maxMs = Math.max(G.maxMs, oe);
  }
  function L(A, oe) {
    if (oe < 0 || !r) return;
    const b = t.now() - oe, S = x.get(A) ?? { count: 0, maxMs: 0 };
    S.count += 1, S.maxMs = Math.max(S.maxMs, b), x.set(A, S);
  }
  function Z() {
    let A = 0, oe = 0, b = 0, S = [0, 0];
    const $ = {};
    for (const H of u) {
      const v = H.ref.deref();
      if (!v) continue;
      A += 1;
      const w = v.width * v.height;
      w > 0 && (oe += 1), b += w, w > S[0] * S[1] && (S = [v.width, v.height]);
      const D = $[H.label] ?? ($[H.label] = [0, 0]);
      D[0] += 1, D[1] += w;
    }
    return { ...f, alive: A, sized: oe, pixels: b, mb: Kr(b * 4 / ja, 1), largest: S, byLabel: $ };
  }
  function V() {
    const A = [];
    let oe = 0, b = 0;
    for (const S of d) {
      const $ = S.ref.deref();
      if (!$) continue;
      oe += 1;
      const H = !$.paused && !$.ended;
      H && (b += 1), A.length < vb && A.push({
        label: S.label,
        playing: H,
        src: !!($.currentSrc || $.src),
        size: [$.videoWidth || 0, $.videoHeight || 0],
        ready: $.readyState ?? 0,
        connected: !!$.isConnected
      });
    }
    return { ...g, alive: oe, playing: b, list: A };
  }
  function fe() {
    const A = t.now(), oe = t.memory(), b = {
      t: t.clock(),
      heap: oe ? { used: Kr(oe.usedJSHeapSize / ja, 1), total: Kr(oe.totalJSHeapSize / ja, 1), limit: Kr(oe.jsHeapSizeLimit / ja, 1) } : null,
      canvas: Z(),
      webgl: { ...O, alive: [...p].filter((S) => !S.lost).length },
      video: V(),
      frame: { count: G.count, maxMs: Kr(G.maxMs), longTasks: ee.count, longTaskMaxMs: Kr(ee.maxMs) },
      renders: Object.fromEntries([...x].map(([S, $]) => [S, { count: $.count, maxMs: Kr($.maxMs) }])),
      sources: Object.fromEntries([...z].map(([S, $]) => [S, $()])),
      costMs: Kr(c, 3)
    };
    return G = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), ee = { count: 0, maxMs: 0 }, W.push({ record: b, text: JSON.stringify(b) }), W.length > gb && W.shift(), l += 1, l % Sb === 0 && Q(), c = t.now() - A, b;
  }
  function Se(A = yb) {
    const oe = JSON.stringify({ ...o, events: B }).slice(0, -1);
    let b = A - oe.length - 14, S = W.length;
    for (; S > 0 && b - W[S - 1].text.length - 1 >= 0; )
      S -= 1, b -= W[S].text.length + 1;
    return `${oe},"records":[${W.slice(S).map(($) => $.text).join(",")}]}`;
  }
  function Q() {
    if (!o) return;
    const A = t.storage();
    if (A) {
      o.savedAt = t.clock();
      try {
        A.setItem(Hl, Se());
      } catch {
      }
    }
  }
  function E() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", Q();
  }
  function X() {
    var $;
    if (n) return i;
    n = !0;
    const A = t.storage();
    if (!A) return null;
    let oe = null;
    try {
      if (oe = A.getItem(Hl), oe === null) {
        const H = A.getItem(of);
        return i = H === null ? null : JSON.parse(H), i;
      }
      A.setItem(of, oe), A.removeItem(Hl), i = JSON.parse(oe);
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
  function ae(A) {
    const oe = A === !0;
    if (X(), oe !== r) {
      if (r = oe, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, W.length = 0, s = t.observeLongTasks((b) => {
          for (const S of b)
            ee.count += 1, ee.maxMs = Math.max(ee.maxMs, S.duration);
        }), t.addUnload(E), a = t.setInterval(fe, _b), Q();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(E), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", Q();
    }
  }
  function be() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...B], records: W.map((A) => A.record) } : null,
      previous: i
    };
  }
  function we() {
    const A = t.document(), oe = new Blob([JSON.stringify(be(), null, 1)], { type: "application/json" }), b = URL.createObjectURL(oe), S = A.createElement("a");
    S.href = b, S.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, S.click(), setTimeout(() => URL.revokeObjectURL(b), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: Y,
    releaseCanvas: te,
    trackCanvas: pe,
    createVideo: J,
    trackVideo: C,
    watchContext: U,
    addSource: le,
    frameStart: ie,
    frameEnd: k,
    renderEnd: L,
    sample: fe,
    serialize: Se,
    recoverPrevious: X,
    setEnabled: ae,
    exportData: be,
    download: we
  };
}
const En = kb(), rn = En.createCanvas, ea = En.releaseCanvas, Gl = En.trackCanvas, ya = En.createVideo, af = En.trackVideo, Mb = En.addSource, Pb = En.frameStart, Nb = En.frameEnd;
function wh(e, t) {
  const r = En.watchContext(e.canvas, t), n = En.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = En.frameStart(), l = o(a);
    return En.renderEnd(t, s), l;
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
const Cb = {
  id: hb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => En.setEnabled(e === !0)
}, sf = {
  id: mb,
  label: "Export Panorama Suite diagnostics",
  function: () => En.download()
};
function Ri(e, t) {
  const r = rn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Ab() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function lf(e, t = 8) {
  var u;
  const r = (u = e == null ? void 0 : e.getContext) == null ? void 0 : u.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, c = -1;
  for (let d = 0; d < i; d += 1)
    for (let f = 0; f < n; f += 1)
      o[(d * n + f) * 4 + 3] <= t || (f < a && (a = f), d < s && (s = d), f > l && (l = f), d > c && (c = d));
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
function Ou(e, t) {
  return rn({
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
function Ut(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Wl = null, Kl = null, cf = null, uf = null, Bt = null, Mo = null;
function Ib() {
  if (Kl) return Kl;
  const e = 6, t = 17, r = rn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Kl = r, r;
}
function Bl(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Wl = Yr(Wl, r, n);
  const i = Wl;
  Ut(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", uf !== i.ctx && (cf = i.ctx.createPattern(Ib(), "repeat"), uf = i.ctx), i.ctx.fillStyle = cf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Eb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Ob(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Fb(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Tb(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const $t = /* @__PURE__ */ new Map(), Fu = 128;
function Db(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if ($t.has(l)) {
    const B = $t.get(l);
    return $t.delete(l), $t.set(l, B), B;
  }
  $t.size >= Fu && $t.delete($t.keys().next().value);
  const c = a * 2 + 2, u = a + 1, d = Ou(c, c), f = d.getContext("2d"), g = s * a, _ = a + 1, m = `rgba(${r},${n},${i},${o})`, p = `rgba(${r},${n},${i},0)`, O = f.createRadialGradient(u, u, g, u, u, _);
  return O.addColorStop(0, m), O.addColorStop(1, p), f.fillStyle = O, f.fillRect(0, 0, c, c), $t.set(l, d), d;
}
function Lb(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: c, a: u } = n, d = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), m = Math.max(0, Math.min(1, a ?? 0)), p = `chisel:${d}:${f}:${r.toFixed(2)}:${s}:${l}:${c}:${u.toFixed(3)}:${g.toFixed(2)}:${_.toFixed(2)}:${m.toFixed(2)}`;
  if ($t.has(p)) {
    const ce = $t.get(p);
    return $t.delete(p), $t.set(p, ce), ce;
  }
  $t.size >= Fu && $t.delete($t.keys().next().value);
  const O = Ou(d, f), B = O.getContext("2d"), z = B.createImageData(d, f), G = z.data, x = Math.max(0, e - t), ee = Math.max(0, Math.min(1, r)), W = 1 + g;
  for (let ce = 0; ce < f; ce++)
    for (let F = 0; F < d; F++) {
      const pe = F + 0.5 - e, C = ce + 0.5 - t, Y = Math.max(Math.abs(pe) - x, 0), J = Math.hypot(Y, C) / t;
      if (J >= 1) continue;
      const U = J <= ee ? 1 : Math.max(0, (1 - J) / Math.max(1e-4, 1 - ee)), le = 1 - J, ie = 1 + g * (1 - le) * (1 - le), k = 1 - _ * le * le, L = ie * k / W;
      let Z = 1;
      if (m > 0) {
        const Se = Math.floor((C + t) / 1.5), Q = Math.floor((pe + e) / 8), E = gi(Yi(Se * 41 + 500, Q * 19 + 300));
        Z = 1 - m * 0.42 * E;
      }
      const V = Math.round(255 * Math.min(1, u * U * L * Z));
      if (V <= 0) continue;
      const fe = (ce * d + F) * 4;
      G[fe] = s, G[fe + 1] = l, G[fe + 2] = c, G[fe + 3] = V;
    }
  return B.putImageData(z, 0, 0), $t.set(p, O), O;
}
function Yi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function gi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Rb(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), u = Math.max(Math.abs(s) - c, 0), d = Math.hypot(u, l) / n;
  if (d >= 1) return 0;
  const f = gi(Yi(e * 17 + 3, t * 13 + 7)), g = d + o * 0.22 * (f - 0.5);
  if (g >= 1) return 0;
  const _ = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), m = Vb(e, t, s, l, r, n), p = o * 0.55;
  if (m < p) return 0;
  const B = 0.45 + 0.55 * ((m - p) / Math.max(1e-4, 1 - p));
  return Math.round(255 * Math.min(1, a * _ * B));
}
function Vb(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = gi(Yi(a * 13 + 700, s * 17 + 400)), c = Math.floor((r + i) / 1.5), u = Math.floor((n + o) / 1.5), d = gi(Yi(c * 23 + 800, u * 29 + 500)), f = gi(Yi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + d * 0.3 + f * 0.15;
}
function $b(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), u = Math.max(2, Math.ceil(t) * 2), d = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${u}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${d.toFixed(2)}`;
  if ($t.has(f)) {
    const B = $t.get(f);
    return $t.delete(f), $t.set(f, B), B;
  }
  $t.size >= Fu && $t.delete($t.keys().next().value);
  const g = Ou(c, u), _ = g.getContext("2d"), m = _.createImageData(c, u), p = m.data, O = Math.max(0, Math.min(1, r));
  for (let B = 0; B < u; B++)
    for (let z = 0; z < c; z++) {
      const G = Rb(z, B, e, t, O, d, l);
      if (G <= 0) continue;
      const x = (B * c + z) * 4;
      p[x] = o, p[x + 1] = a, p[x + 2] = s, p[x + 3] = G;
    }
  return _.putImageData(m, 0, 0), $t.set(f, g), g;
}
function xh(e, t, r) {
  var m, p;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Fb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = zb(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((m = t == null ? void 0 : t.angle) == null ? void 0 : m.value) ?? 0), c = Tb(t, i), u = String(((p = t == null ? void 0 : t.targetSpace) == null ? void 0 : p.viewMode) || ""), d = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && u !== "unwrap", f = t == null ? void 0 : t.scatter, g = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (n === "chisel") {
    const O = i * s, B = i, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), G = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), x = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = Lb(O, B, o, a, z, G, x);
  } else if (n === "crayon") {
    const O = i * s, B = i, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = $b(O, B, o, a, z);
  } else
    _ = Db(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: r, aspect: s, angle: l, stampKind: n, scatter: g, latitudeCorrection: d };
}
function zb(e) {
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
function jb(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function df(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(c, u) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, u - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, u), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Tu(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: u } = e.scatter, d = c * e.radiusPx * i, f = Yi(t, r);
    for (let g = 0; g < u; g++) {
      const _ = gi(f + g * 2) * Math.PI * 2, m = Math.sqrt(gi(f + g * 2 + 1)) * d, p = t + Math.cos(_) * m, O = r + Math.sin(_) * m, B = Math.max(0.5, e.radiusPx * i * 0.48), z = (0.5 - O / Math.max(1, e.desc.height)) * Math.PI, G = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, x = B * e.aspect * G;
      df(e, p, O, B, x);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  df(e, t, r, o, l);
}
function ff(e, t, r) {
  const n = Ob(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = xh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let g = Number(n[f].u || 0) * i;
    const _ = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(g - s[f - 1].x) > i * 0.5 && (g += g < s[f - 1].x ? i : -i), s.push({ x: g, y: _ });
  }
  if (Tu(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], c = s[0], u = s[0], d = 0;
  for (let f = 1; f < s.length; f++) {
    const g = s[f], _ = { x: (c.x + g.x) * 0.5, y: (c.y + g.y) * 0.5 };
    f === 1 ? d = ta(a, u.x, u.y, _.x, _.y, d) : d = Is(a, l, u, _, g, d), l = c, c = g, u = _;
  }
  s.length === 2 ? ta(a, u.x, u.y, c.x, c.y, d) : Is(a, l, u, c, c, d), e.restore();
}
function ss(e, t, r) {
  var d;
  const n = Array.isArray((d = t == null ? void 0 : t.geometry) == null ? void 0 : d.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = jb(t), s = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const g = Eb(n[f]);
    let _ = Number(g.x || 0) * i;
    f > 0 && Math.abs(_ - s[f - 1].x) > i * 0.5 && (_ += _ < s[f - 1].x ? i : -i), s.push({ x: _, y: Number(g.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function u(f) {
    e.beginPath(), e.moveTo(s[0].x + f, s[0].y);
    for (let g = 1; g < s.length; g++) e.lineTo(s[g].x + f, s[g].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, u(0), l < 0 && u(i), c > i && u(-i), e.restore();
}
function Ha(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    ss(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? ff(e, t, r) : (Mo = Yr(Mo, r.width, r.height), Ut(Mo), ff(Mo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Mo.canvas, 0, 0), e.restore());
}
function ii(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ta(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const u = c / l;
    Tu(e, t + a * u, r + s * u, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Is(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, u = 0, d = s, f = d + l, g = f + c, _ = f - d, m = 16;
  let p = o, O = r.x, B = r.y;
  for (let z = 1; z <= m; z++) {
    const G = d + _ * z / m, x = ((d - G) * t.x + (G - u) * r.x) / (d - u), ee = ((d - G) * t.y + (G - u) * r.y) / (d - u), W = ((f - G) * r.x + (G - d) * n.x) / (f - d), ce = ((f - G) * r.y + (G - d) * n.y) / (f - d), F = ((g - G) * n.x + (G - f) * i.x) / (g - f), pe = ((g - G) * n.y + (G - f) * i.y) / (g - f), C = ((f - G) * x + (G - u) * W) / (f - u), Y = ((f - G) * ee + (G - u) * ce) / (f - u), te = ((g - G) * W + (G - d) * F) / (g - d), J = ((g - G) * ce + (G - d) * pe) / (g - d), U = ((f - G) * C + (G - d) * te) / (f - d), le = ((f - G) * Y + (G - d) * J) / (f - d);
    p = ta(e, O, B, U, le, p), O = U, B = le;
  }
  return p;
}
function Hb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let c = t * a;
  if (l && Math.abs(c - l.prev.x) > a * 0.5 && (c += c < l.prev.x ? a : -a), !l) {
    const g = xh(i, n, o), _ = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), m = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), p = String((n == null ? void 0 : n.toolKind) || "") === "eraser", O = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Tu(g, c, s, 1), e.activeStroke = {
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
      layerKind: O,
      pointCount: 1
    }, cn(e);
    return;
  }
  const u = (l.prev.x + c) * 0.5, d = (l.prev.y + s) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = ta(f, l.lastMidX, l.lastMidY, u, d, l.distSinceStamp) : l.distSinceStamp = Is(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: u, y: d },
    { x: c, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: s }, l.lastMidX = u, l.lastMidY = d, l.pointCount++, cn(e);
}
function ml(e = {}) {
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
  let c = null, u = "", d = null;
  const f = /* @__PURE__ */ new Map();
  let g = null;
  function _(te) {
    return {
      actionGroupId: te,
      descriptor: n,
      committedPaint: Ri(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function m(te) {
    let J = i.get(te);
    return J || (J = _(te), i.set(te, J)), J;
  }
  function p(te) {
    return u === "mask" ? a : c ? m(c) : s;
  }
  function O(te) {
    var L;
    const J = !d || d.length !== te.length || te.some((Z, V) => Z !== d[V]), U = u === "paint" && ((L = c ? i.get(c) : s) == null ? void 0 : L.activeStroke) || null;
    let le = a.displayDirty || s.displayDirty || J;
    for (const Z of te) {
      const V = i.get(Z);
      if (V != null && V.displayDirty) {
        le = !0;
        break;
      }
    }
    if (U && (le = !0), !le) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const Z of te) {
      const V = i.get(Z);
      V && (V.displayDirty = !1);
    }
    d = [...te];
    const ie = l.ctx;
    Ut(l);
    const k = !!(U != null && U.isEraser);
    for (const Z of te) {
      const V = i.get(Z);
      if (!V) continue;
      const Se = c === V.actionGroupId && u === "paint" ? V.activeStroke : null;
      if (k)
        Bt = Yr(Bt, t, r), Ut(Bt), Bt.ctx.drawImage(V.committedPaint.canvas, 0, 0), ii(Bt.ctx, o.canvas), ie.drawImage(Bt.canvas, 0, 0);
      else if (ie.drawImage(V.committedPaint.canvas, 0, 0), Se) {
        const Q = V.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Se.strokeOpacity ?? 1));
        ie.save(), ie.globalAlpha = Q, ie.drawImage(o.canvas, 0, 0), ie.restore();
      }
    }
  }
  function B(te) {
    var U, le, ie, k, L;
    for (const Z of i.values())
      Ut(Z.committedPaint), Ut(Z.currentStroke), Z.activeStroke = null, cn(Z);
    Ut(a.committedMask), Ut(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), cn(a), cn(s), d = null;
    const J = [
      ...Array.isArray((le = (U = te == null ? void 0 : te.painting) == null ? void 0 : U.paint) == null ? void 0 : le.strokes) ? te.painting.paint.strokes : [],
      ...Array.isArray((k = (ie = te == null ? void 0 : te.painting) == null ? void 0 : ie.mask) == null ? void 0 : k.strokes) ? te.painting.mask.strokes : []
    ];
    for (const Z of J) {
      if (((L = Z == null ? void 0 : Z.targetSpace) == null ? void 0 : L.kind) !== "ERP_GLOBAL") continue;
      const V = String((Z == null ? void 0 : Z.layerKind) || "paint"), Se = String((Z == null ? void 0 : Z.toolKind) || "pen") === "eraser";
      if (V === "mask") {
        const Q = a.descriptor;
        Se ? (Bt = Yr(Bt, Q.width, Q.height), Ut(Bt), Ha(Bt.ctx, Z, Q), ii(a.committedMask.ctx, Bt.canvas)) : (Ha(a.committedMask.ctx, Z, Q), a.painted = !0);
        continue;
      }
      if (Se) {
        Bt = Yr(Bt, n.width, n.height), Ut(Bt), Ha(Bt.ctx, Z, n);
        for (const Q of i.values())
          ii(Q.committedPaint.ctx, Bt.canvas), cn(Q);
      } else {
        const Q = String((Z == null ? void 0 : Z.actionGroupId) || "__default__"), E = m(Q), X = E.descriptor;
        Ha(E.committedPaint.ctx, Z, X), cn(E);
      }
    }
    O([...i.keys()]);
  }
  function z(te, J) {
    u = String((te == null ? void 0 : te.layerKind) || "");
    const U = String((te == null ? void 0 : te.toolKind) || "") === "eraser";
    if (u === "mask")
      c = null, Ut(a.currentStroke), a.activeStroke = null, cn(a);
    else {
      const le = U ? s : m(String((te == null ? void 0 : te.actionGroupId) || "__default__"));
      c = U ? "" : String((te == null ? void 0 : te.actionGroupId) || "__default__"), Ut(le.currentStroke), le.activeStroke = null, cn(le);
    }
  }
  function G(te, J) {
    var V;
    const U = String((te == null ? void 0 : te.layerKind) || "paint"), le = String((te == null ? void 0 : te.toolKind) || "") === "eraser", ie = U === "mask" ? a : le ? s : m(String((te == null ? void 0 : te.actionGroupId) || c || "__default__")), k = ie.activeStroke, L = ie.descriptor;
    if (k && k.pointCount > 1) {
      const fe = ie.currentStroke.ctx;
      fe.globalCompositeOperation = "source-over";
      const Se = {
        ctx: fe,
        stampTex: k.stampTex,
        radiusPx: k.radiusPx,
        spacingPx: k.spacingPx,
        desc: L,
        aspect: k.aspect,
        angle: k.angle,
        stampKind: k.stampKind,
        scatter: k.scatter,
        latitudeCorrection: k.latitudeCorrection
      };
      k.pointCount === 2 ? ta(Se, k.lastMidX, k.lastMidY, k.prev.x, k.prev.y, k.distSinceStamp) : Is(Se, k.pprev, { x: k.lastMidX, y: k.lastMidY }, k.prev, k.prev, k.distSinceStamp);
    }
    ie.lassoPreviewActive && (Ut(ie.currentStroke), ss(ie.currentStroke.ctx, te, L), ie.lassoPreviewActive = !1);
    const Z = U === "mask" ? a.committedMask : ie.committedPaint;
    if (le && U === "paint")
      for (const fe of i.values())
        ii(fe.committedPaint.ctx, ie.currentStroke.canvas), cn(fe);
    else if (le)
      ii(Z.ctx, ie.currentStroke.canvas);
    else {
      U === "mask" && (a.painted = !0);
      const fe = Math.max(0, Math.min(1, (k == null ? void 0 : k.strokeOpacity) ?? 1));
      Z.ctx.save(), Z.ctx.globalAlpha = fe, Z.ctx.drawImage(ie.currentStroke.canvas, 0, 0), Z.ctx.restore();
    }
    Ab() && (String((te == null ? void 0 : te.toolKind) || ""), String((L == null ? void 0 : L.kind) || ""), Number((L == null ? void 0 : L.width) || 0), Number((L == null ? void 0 : L.height) || 0), String(((V = te == null ? void 0 : te.targetSpace) == null ? void 0 : V.viewMode) || ""), Number((te == null ? void 0 : te.aspect) ?? 1), lf(ie.currentStroke.canvas), lf(Z.canvas), void 0), Ut(ie.currentStroke), ie.activeStroke = null, cn(ie), f.clear(), c = null, u = "", O([...i.keys()]);
  }
  function x(te) {
    if (u === "mask")
      Ut(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (u === "paint" && !c)
      Ut(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (c) {
      const J = i.get(c);
      J && (Ut(J.currentStroke), J.activeStroke = null, J.lassoPreviewActive = !1, cn(J));
    }
    f.clear(), c = null, u = "", O([...i.keys()]);
  }
  function ee(te, J) {
    var le;
    if (u = String((te == null ? void 0 : te.layerKind) || ""), String(((le = te == null ? void 0 : te.geometry) == null ? void 0 : le.geometryKind) || "") === "lasso_fill") {
      if (u === "mask")
        Ut(a.currentStroke), ss(a.currentStroke.ctx, te, a.descriptor), a.lassoPreviewActive = !0, cn(a);
      else {
        const ie = String((te == null ? void 0 : te.toolKind) || "") === "eraser", k = ie ? s : m(String((te == null ? void 0 : te.actionGroupId) || c || "__default__"));
        c = ie ? "" : String((te == null ? void 0 : te.actionGroupId) || c || "__default__"), Ut(k.currentStroke), ss(k.currentStroke.ctx, te, k.descriptor), k.lassoPreviewActive = !0, cn(k);
      }
      O([...i.keys()]);
    }
  }
  function W(te) {
    return O(te ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ce(te) {
    return i.get(String(te)) ?? null;
  }
  function F() {
    return [...i.keys()];
  }
  function pe(te) {
    var fe;
    const J = i.get(String(te));
    if (!J) return null;
    const U = u === "paint" && c === J.actionGroupId, le = u === "paint" && ((fe = c ? i.get(c) : s) == null ? void 0 : fe.activeStroke) || null, ie = !!(le != null && le.isEraser), k = U ? J.activeStroke : null;
    if (!ie && !k) return J.committedPaint.canvas;
    const L = `${J.revision}:${s.revision}:${ie}`, Z = f.get(J.actionGroupId);
    if ((Z == null ? void 0 : Z.key) === L) return Z.surface.canvas;
    const V = Yr((Z == null ? void 0 : Z.surface) ?? null, t, r);
    return Ut(V), V.ctx.drawImage(J.committedPaint.canvas, 0, 0), ie ? ii(V.ctx, o.canvas) : (V.ctx.save(), V.ctx.globalAlpha = J.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, k.strokeOpacity ?? 1)), V.ctx.drawImage(o.canvas, 0, 0), V.ctx.restore()), f.set(J.actionGroupId, { key: L, surface: V }), V.canvas;
  }
  function C() {
    const te = u === "mask" ? a.activeStroke : null;
    return !a.painted && (!te || te.isEraser) ? null : `${a.revision}:${!!te}`;
  }
  function Y() {
    const te = C();
    if (te === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === te) return g.surface.canvas;
    const J = Yr((g == null ? void 0 : g.surface) ?? null, t, r);
    Ut(J);
    const U = u === "mask" ? a.activeStroke : null;
    return U != null && U.isEraser ? (Bt = Yr(Bt, t, r), Ut(Bt), Bt.ctx.drawImage(a.committedMask.canvas, 0, 0), ii(Bt.ctx, o.canvas), Bl(J.ctx, Bt.canvas)) : (Bl(J.ctx, a.committedMask.canvas), U && Bl(J.ctx, o.canvas)), g = { key: te, surface: J }, J.canvas;
  }
  return {
    rebuildCommitted: B,
    beginStroke: z,
    appendStrokePoint: Hb,
    updateActiveStroke: ee,
    commitActiveStroke: G,
    cancelActiveStroke: x,
    getErpTarget: W,
    ensureTarget: p,
    getGroupTarget: ce,
    getGroupDisplayCanvas: pe,
    getMaskDisplayCanvas: Y,
    getMaskDisplayRevision: C,
    getAllGroupIds: F
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function jt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Du(e, t) {
  let r = jt(t) - jt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Ac = 3;
function Po(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Es(e, t = 0) {
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
const pf = Math.PI / 180, hf = 0.12, Gb = Ac, Wb = 35, Kb = 140, Oo = 100, Bb = 20, mf = 0.8;
function Ub(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Oo), 1, 179) * pf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / pf;
}
function Lu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Oo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(B, z = null) {
    s && s(B, z);
  }
  function u(B, z, G = null, x = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(B || 0), l.drag.lastY = Number(z || 0), l.drag.lastTs = Number(x || performance.now()), l.drag.pointerId = G, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: G }), !0;
  }
  function d(B, z, G = "pano", x = performance.now()) {
    if (!l.drag.active) return !1;
    const ee = Number(x || performance.now()), W = Number(B), ce = Number(z), F = W - l.drag.lastX, pe = ce - l.drag.lastY;
    l.drag.lastX = W, l.drag.lastY = ce, l.drag.lastTs = ee;
    const C = n() || { x: 1, y: 1 }, Y = Number(C.x || 1), te = Number(C.y || 1), J = { ...t() };
    let U = 0, le = 0;
    if (G === "unwrap") {
      const k = i() || { w: 1, h: 1 }, L = Math.max(1, Number(k.w || 1)), Z = Math.max(1, Number(k.h || 1)), V = F / L, fe = pe / Z;
      U = -V * 360 * Y, le = fe * 180 * te;
    } else {
      const k = o() || { w: 0, h: 0 }, L = Math.max(1, Number(k.w || 0)), Z = Math.max(1, Number(k.h || 0));
      if (L > 1 && Z > 1) {
        const V = Ee(Number(J.fov || Oo), 1, 179), fe = Ee(Ub(V, L, Z), 0.1, 179);
        U = -(F / L) * V * Y, le = pe / Z * fe * te;
      } else
        U = -F * hf * Y, le = pe * hf * te;
    }
    J.yaw = jt(Number(J.yaw || 0) + U), J.pitch = Ee(Number(J.pitch || 0) + le, -89.9, 89.9), r(J), l.velHistory.push({ ts: ee, yaw: J.yaw, pitch: J.pitch });
    let ie = 0;
    for (; ie < l.velHistory.length - 1 && l.velHistory[ie].ts < ee - 100; ) ie++;
    return ie > 0 && l.velHistory.splice(0, ie), l.inertia.active = !1, l.inertia.lastTs = ee, a(), c("drag", { phase: "move", dx: F, dy: pe, dYaw: U, dPitch: le }), !0;
  }
  function f(B = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const z = Number(B || performance.now());
    l.drag.lastTs = z;
    const G = l.velHistory.filter((ee) => z - ee.ts <= 80);
    if (G.length >= 2) {
      const ee = G[0], W = G.at(-1), ce = Math.max(1e-3, (W.ts - ee.ts) / 1e3);
      let F = W.yaw - ee.yaw;
      F > 180 && (F -= 360), F < -180 && (F += 360), l.inertia.vx = F / ce, l.inertia.vy = (W.pitch - ee.pitch) / ce;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const x = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = x > Bb, l.inertia.lastTs = z, c("drag", { phase: "end", speed: x, inertiaActive: l.inertia.active }), !0;
  }
  function g(B = performance.now()) {
    if (!l.inertia.active) return !1;
    const z = Number(B || performance.now()), G = Math.max(1e-3, (z - (l.inertia.lastTs || z)) / 1e3);
    l.inertia.lastTs = z;
    const x = { ...t() };
    x.yaw = jt(Number(x.yaw || 0) + l.inertia.vx * G), x.pitch = Ee(Number(x.pitch || 0) + l.inertia.vy * G, -89.9, 89.9);
    const ee = Math.exp(-5.5 * G);
    return l.inertia.vx *= ee, l.inertia.vy *= ee, Math.abs(l.inertia.vx) < mf && Math.abs(l.inertia.vy) < mf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(x), a(), l.inertia.active;
  }
  function _() {
    const B = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], B;
  }
  function m(B) {
    const z = Math.sign(Number(B || 0));
    if (!z) return !1;
    const G = { ...t() }, x = Number(G.fov || Oo);
    return G.fov = Ee(x + z * Gb, Wb, Kb), r(G), a(), c("wheel", { deltaSign: z, fovBefore: x, fovAfter: G.fov }), !0;
  }
  function p(B, z = 0) {
    return m(Es(B, z));
  }
  function O() {
    r({ yaw: 0, pitch: 0, fov: Oo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: u,
    moveDrag: d,
    endDrag: f,
    stepInertia: g,
    stopMotion: _,
    applyWheel: m,
    applyWheelEvent: p,
    resetView: O
  };
}
const xt = Math.PI / 180, en = 180 / Math.PI;
function Un(e, t, r) {
  return { x: e, y: t, z: r };
}
function Os(e, t) {
  return Un(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Fs(e, t) {
  return Un(e.x * t, e.y * t, e.z * t);
}
function Ul(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ru(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Un(e.x / t, e.y / t, e.z / t);
}
function In(e, t) {
  const r = e * xt, n = t * xt, i = Math.cos(n);
  return Un(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function so(e, t, r = 0) {
  const n = Number(e || 0) * xt, i = Number(t || 0) * xt, o = r * xt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(o), d = Math.sin(o);
  return {
    right: Un(
      a * u - s * c * d,
      l * d,
      -s * u - a * c * d
    ),
    up: Un(
      -a * d - s * c * u,
      l * u,
      s * d - a * c * u
    ),
    fwd: Un(s * l, c, a * l)
  };
}
function Ts(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ct(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Yb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function qb(e) {
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
function Xb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Jb(e, t) {
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
function Ga(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Jb(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Zb(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Ga(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Ga(e.points, t, 1);
  if (!o) return null;
  const a = Ga(e.rawPoints, t, 1), s = Ga(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function Qb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Xb(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Zb(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Ct(e.size, null), a = Ct(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const c = Ct(e.radiusValue, null), u = String(e.radiusModel || "").trim() || null;
  let d = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    d = {
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
    color: d,
    radiusModel: u,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function gf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Qb(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function ev(e) {
  if (!e || typeof e != "object") return null;
  const t = Ct(e.u0, null), r = Ct(e.v0, null), n = Ct(e.u1, null), i = Ct(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function tv(e) {
  const t = e || {};
  return {
    du: Ct(t.du, 0) ?? 0,
    dv: Ct(t.dv, 0) ?? 0,
    rot_deg: Ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ct(t.scale, 1) ?? 1)
  };
}
function nv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = ev(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: tv(e.transform)
  } : null;
}
function rv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = nv(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function lo(e) {
  const t = Yb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: qb(e.groups),
    paint: gf(e.paint, "paint"),
    mask: gf(e.mask, "mask"),
    raster_objects: rv(e.raster_objects)
  };
}
const Yn = 1, qn = 179, Ic = 85;
function gl(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Mh(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Ph(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * en;
  return r && (n = Math.round(n / 15) * 15), gl(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Qr(e = {}) {
  const t = Ee(ot(e.hFOV_deg || 90, 90), Yn, qn), r = Ee(ot(e.vFOV_deg || 60, 60), Yn, qn), n = Math.tan(t * xt * 0.5), i = Math.tan(r * xt * 0.5);
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
function Si(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Qr(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Vu(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function $u(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * en, Yn, qn), a = Ee(2 * Math.atan(i / (2 * r)) * en, Yn, qn);
  return { hFOV_deg: o, vFOV_deg: a };
}
function iv(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Qr(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * s.tanHalfX, u = 2 * l * s.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (a - u) * 0.5,
    w: c,
    h: u,
    focalPx: l
  };
}
function zu(e, t, r = Ic) {
  const n = Math.max(1e-12, ot(t, 1)), i = Ee(ot(r, Ic), 1, 89.999), o = n * Math.tan(i * xt), a = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function Nh(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function ov(e, t) {
  const r = Ee(ot(e, 90), Yn, qn), n = Math.max(1e-6, ot(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * xt * 0.5) / n) * en,
    Yn,
    qn
  );
}
function ls(e, t) {
  const r = Ee(ot(e, 60), Yn, qn), n = Math.max(1e-6, ot(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * xt * 0.5) * n) * en,
    Yn,
    qn
  );
}
function yf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function av(e, t) {
  const r = yf(e, 1), n = yf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (c, u) => u ? s(u, c % u) : c, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function Mi(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * xt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * xt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function yi(e) {
  const t = Mi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || av(t, 1);
}
function ju(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = yi(t), t;
}
function Ch({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, Yn, qn) : Ee(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return ju({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Ee(ot(r, 0), -89.9, 89.9),
    roll_deg: gl(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Fr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : yi(e);
}
function Ah(e, t) {
  const r = Qr(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * en, o = 2 * Math.atan(r.tanHalfY * n) * en;
  return i < Yn || i > qn || o < Yn || o > qn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Ih(e, t, r = Ac) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, Ac));
  if (!n || !(i > 0)) return null;
  const o = Qr(e), a = o.hFovDeg + n * i;
  if (a < Yn || a > qn) return null;
  const s = Math.tan(a * xt * 0.5);
  return Ah(e, s / o.tanHalfX);
}
function Eh(e, t) {
  const r = Qr(e), n = so(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return Ru(Os(Os(n.fwd, Fs(n.right, i)), Fs(n.up, o)));
}
function sv(e) {
  return Un(e.x, e.y, -e.z);
}
function cs(e) {
  return Un(e.x, e.y, -e.z);
}
function Fn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = so(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Oh(e) {
  const t = cs(Un(e[0][0], e[1][0], e[2][0])), r = cs(Un(e[0][1], e[1][1], e[2][1])), n = cs(Un(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
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
function Pi(e) {
  const [[t, r, n], [i, o, a], [s, l, c]] = e, u = t + o + c;
  if (u > 0) {
    const f = 0.5 / Math.sqrt(u + 1);
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
  const d = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + s) / d, y: (a + l) / d, z: 0.25 * d, w: (i - r) / d };
}
function Wa(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const fi = 1e-6, Ec = 1e-6, lv = 1e-9;
function ra(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function cv(e, t) {
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
  const l = a.map((f, g) => (f * o + s[g] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((g, _) => g + _ * _, 0)), u = 3 * Math.min(c(a), c(s)), d = c(l);
  return d <= u ? l : l.map((f) => f * u / d);
}
function Fh(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((u, d) => o[d] - u);
  let l = s;
  to(e, n) && (l = no(t, n, r[n - 1].map((u, d) => u - i[d]), s).map((u) => u * a));
  let c = s;
  return to(e, n + 1) && (c = no(t, n + 1, s.map((u) => -u), r[n + 2].map((u, d) => u - o[d])).map((u) => u * a)), [l.map((u) => u / 3), c.map((u) => -u / 3)];
}
function Th(e, t, r, n, i) {
  const [[o], [a]] = Fh(e, t, r.map((s) => [s]), n);
  return ra(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function uv(e, t, r, n) {
  var c, u;
  const i = e.map((d) => d.value);
  let [o, a] = Fh(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, a = ((u = e[r + 1].handles) == null ? void 0 : u.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((d) => ra(s[d], s[d] + o[d], l[d] + a[d], l[d], n));
}
function Ds([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function dv(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Yl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function fv([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Oc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Hi(e, t) {
  return fv(Ds([-e[0], -e[1], -e[2], e[3]], t));
}
function ql(e, t, r) {
  return Ds(e, Oc(Hi(e, t).map((n) => r * n)));
}
function Xl(e, t) {
  const r = dv(e, t);
  if (Math.abs(r) > Ec) return r < 0;
  const [n, i, o] = Hi(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Ec) return a < 0;
  return !1;
}
function Ka(e) {
  const { x: t, y: r, z: n, w: i } = Pi(Fn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Fc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function pv(e, t, r, n) {
  const i = Ka(e[r].value);
  let o = Ka(e[r + 1].value);
  Xl(i, o) && (o = Yl(o));
  const a = t[r + 1] - t[r], s = Hi(i, o);
  let l = s;
  if (to(e, r)) {
    let x = Ka(e[r - 1].value);
    Xl(x, i) && (x = Yl(x)), l = no(t, r, Hi(i, x), s).map((ee) => ee * a);
  }
  let c = s;
  if (to(e, r + 1)) {
    let x = Ka(e[r + 2].value);
    Xl(o, x) && (x = Yl(x)), c = no(t, r + 1, Hi(o, i), Hi(o, x)).map((ee) => ee * a);
  }
  const u = Ds(i, Oc(l.map((x, ee) => 0.5 * (x - s[ee])))), d = Ds(o, Oc(s.map((x, ee) => 0.5 * (x - c[ee])))), [f, g, _, m] = ql(ql(i, o, n), ql(u, d, n), 2 * n * (1 - n)), { yawDeg: p, pitchDeg: O, rollDeg: B } = Oh(na({ x: f, y: g, z: _, w: m })), z = e[r].value, G = e[r + 1].value;
  return {
    yaw_deg: Fc(p, z.yaw_deg, G.yaw_deg, n),
    pitch_deg: O,
    roll_deg: Fc(B, z.roll_deg, G.roll_deg, n)
  };
}
function ia(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ls(e) {
  return Math.sqrt(ia(e, e));
}
function Rs(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function Dh(e, t) {
  const r = ia(e, t), n = t.map((a, s) => a - r * e[s]), i = Ls(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Vi(e, t) {
  const r = Ls(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function Ba(e, t, r) {
  return Vi(e, Dh(e, t).map((n) => r * n));
}
function Jl(e, t) {
  const r = Rs(e[t].value), n = Rs(e[t + 1].value), i = ia(r, n), o = i < 0 && Ls(n.map((l, c) => l - i * r[c])) <= Ec;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = Dh(r, n);
  const s = Ls(a);
  return [a, a.map((l, c) => Math.cos(s) * l - s * Math.sin(s) * r[c]), o];
}
function hv(e, t, r, n) {
  const i = Rs(e[r].value), o = Rs(e[r + 1].value), [a, s, l] = Jl(e, r);
  let c = a, u = s;
  const d = t[r + 1] - t[r];
  to(e, r) && (c = no(t, r, Jl(e, r - 1)[1].map((z) => -z), c).map((z) => z * d)), to(e, r + 1) && (u = no(t, r + 1, u.map((z) => -z), Jl(e, r + 1)[0]).map((z) => z * d));
  let f, g, _;
  if (l) {
    const z = Math.PI, G = ra(0, ia(c, a) / z / 3, z - ia(u, s) / z / 3, z, n);
    [f, g, _] = Vi(i, a.map((x) => G * x / z));
  } else {
    const z = Ba(Vi(i, c.map((ee) => ee / 3)), Vi(o, u.map((ee) => -ee / 3)), n), G = Ba(Vi(i, c.map((ee) => n * ee / 3)), z, n), x = Ba(z, Vi(o, u.map((ee) => -(1 - n) * ee / 3)), n);
    [f, g, _] = Ba(G, x, n);
  }
  const m = Math.hypot(f, _), p = e[r].value.yaw_deg, O = e[r + 1].value.yaw_deg;
  return { yaw_deg: m <= lv ? p + (O - p) * n : Fc(Math.atan2(f, _) * 180 / Math.PI, p, O, n), pitch_deg: Math.atan2(g, m) * 180 / Math.PI };
}
function mv(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Th(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function gv(e, t, r, n) {
  return Th(e, t, e.map((i) => i.value), r, n);
}
const yv = { position: uv, rotation: pv, direction: hv, size: mv };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Wa(e[t].value);
  if (r <= n[0].frame + fi) return Wa(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - fi) return Wa(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + fi; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= fi || a.easing === "hold") return Wa(a.value);
  const s = n.map((c) => c.frame), l = cv(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (yv[t] ?? gv)(n, s, o, l);
}
function Tc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function bv(e) {
  return Math.min(1, Math.max(0, e));
}
function Lh(e) {
  return Math.max(1e-6, e);
}
function Rh(e, t) {
  return t - (e.start - e.in);
}
function co(e, t) {
  return t >= e.start - fi && (e.duration === null || t < e.start + e.duration - fi);
}
function yl(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: Tc(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function ba(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Rh(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : yl(n, r),
    scene: {
      active: i.visible && co(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: Lh(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => wi(a, r))
  };
}
function vv(e, t) {
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
    hFOV_deg: Tc(r.hFOV_deg),
    vFOV_deg: Tc(r.vFOV_deg)
  };
}
function wi(e, t) {
  const r = Rh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && co(e.clip, t),
    clip_frame: r,
    ...vv(e, r),
    opacity: bv(Wt(e, "opacity", r))
  };
}
const _v = 2, Sv = ["sky", "world"], Dc = ["perspective", "erp"], wv = ["input", "output", "temp"], Vh = [0.42, 0, 0.58, 1], $h = 1, Hu = 1e3, Lc = 1e7, Gu = Lc;
function nn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Wu(e, t) {
  const r = qt(e, t);
  return r !== null && r > 0 ? r : t;
}
function On(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function bl(e) {
  const t = qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function us(e) {
  const t = bl(e);
  return t === null ? null : On(t, -Lc, Lc);
}
function uo(e) {
  const t = Wu(e, null);
  return t === null ? null : On(t, $h, Hu);
}
function zh(e) {
  const t = bl(e);
  return t !== null && t >= 1 ? Math.min(t, Gu) : null;
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
    pitch_deg: On(qt(t.pitch_deg, 0), -90, 90),
    roll_deg: qt(t.roll_deg, 0)
  };
}
function xv(e) {
  return On(qt(e, 90), 0.1, 179);
}
function kv(e) {
  return Wu(e, 1);
}
function Mv(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: On(qt(t.pitch_deg, 0), -90, 90)
  };
}
function Pv(e) {
  return qt(e, 0);
}
function Nv(e) {
  const t = nn(e) ? e : {};
  return {
    hFOV_deg: On(qt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: On(qt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Wh(e) {
  return On(qt(e, 1), 0, 1);
}
const vl = [["position", Hh], ["rotation", Gh], ["fov", xv]], _l = [["position", Hh], ["rotation", Gh], ["scale", kv]], Ku = [["direction", Mv], ["roll", Pv], ["size", Nv], ["opacity", Wh]], Bu = [..._l, ["opacity", Wh]];
function Cv(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => qt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Vh];
}
function Av(e) {
  if (!nn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = jh(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function Iv(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!nn(i)) continue;
    const o = us(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: Cv(i.easing) }, s = r ? Av(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Uu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = nn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: Iv(o.keyframes, i, n === "position") };
  }
  return r;
}
function Kh(e) {
  const t = nn(e) ? e : {}, r = us(t.start), n = us(t.in), i = us(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Ev(e) {
  const t = nn(e) ? e : {}, r = On(qt(t.x0, 0), 0, 1), n = On(qt(t.y0, 0), 0, 1), i = On(qt(t.x1, 1), 0, 1), o = On(qt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function Ov(e) {
  if (!nn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: wv.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Fv(e) {
  const t = Ov(e.source);
  if (!t) return null;
  const r = Sv.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Kh(e.clip),
    visible: oa(e.visible, !0),
    locked: oa(e.locked, !1),
    crop: Ev(e.crop),
    ...Uu(e, n ? Bu : Ku)
  };
  return n || (i.z_index = bl(e.z_index) ?? 0), i;
}
function Tv(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = nn(o) ? Fv(o) : null;
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
function Bh(e) {
  if (!nn(e)) return null;
  const t = Dc.includes(e.projection) ? e.projection : Dc[0];
  return { aspect: Wu(e.aspect, 1), projection: t, visible: oa(e.visible, !0), ...Uu(e, vl) };
}
function Yu() {
  return Bh({});
}
function Vs(e) {
  const t = nn(e.timeline) ? e.timeline : {}, r = nn(e.scene) ? e.scene : {};
  return {
    version: _v,
    timeline: {
      fps: uo(t.fps) ?? 24,
      length: zh(t.length)
    },
    camera: Bh(e.camera),
    scene: { clip: Kh(r.clip), visible: oa(r.visible, !0), ...Uu(r, _l) },
    stickers: Tv(e.stickers),
    painting: lo(e.painting),
    painting_layer: nn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: oa(e.painting_visible, !0)
  };
}
function Dv(e, t) {
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
function Lv(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!nn(t)) return null;
  const r = On(qt(t.hFOV_deg, 90), 1, 179), n = On(qt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Rv(e) {
  const t = nn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(nn) : [];
  return r.sort((n, i) => qt(n.z_index, 0) - qt(i.z_index, 0)), Vs({
    camera: Lv(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: Dv(n, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return Vs({});
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
  return r === 1 ? Rv(t) : Vs(t);
}
const Zl = {
  state: { painting_visible: !0 },
  camera: { projection: Dc[0], visible: !0 },
  scene: { visible: !0 }
};
function Ql(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Rc(e) {
  return JSON.stringify({
    ...Ql(e, Zl.state),
    camera: e.camera && Ql(e.camera, Zl.camera),
    scene: Ql(e.scene, Zl.scene)
  });
}
function ec(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function bf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function aa(e, t) {
  const r = uo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => bl(s * n), { length: o } = e.timeline, a = bf(e.scene.clip, i);
  return Vs({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...ec(e.camera, vl, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...ec(e.scene, _l, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: c, newAnchor: u } = bf(s.clip, i), d = s.placement === "world" ? Bu : Ku;
      return { ...s, clip: l, ...ec(s, d, i, c, u) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function tc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Uh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Yh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= fi);
}
function qh(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Uh(e.keyframes[n - 1].easing) : [...Vh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function mn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = tc(i.value, n);
    return;
  }
  const o = Yh(i, r);
  o ? o.value = tc(o.value, n) : qh(i, r, tc(Wt(e, t, r), n));
}
function fo(e) {
  return e.placement === "world" ? Bu.map(([t]) => t) : e.placement === "sky" ? Ku.map(([t]) => t) : (e.clip ? _l : vl).map(([t]) => t);
}
function Vv(e, t) {
  for (const r of fo(e))
    Yh(e[r], t) || qh(e[r], t, Wt(e, r, t));
}
function $v(e) {
  const t = fo(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function nc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function zv(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function jv(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Wt(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function Hv(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((u) => o.has(u.frame)).map((u) => ({ ...u, frame: u.frame + n })), c = new Set(l.map((u) => u.frame));
    s.keyframes = [
      ...s.keyframes.filter((u) => !o.has(u.frame) && !c.has(u.frame)),
      ...l
    ].sort((u, d) => u.frame - d.frame);
  }
  return n;
}
function Xh(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function Gv(e, t, r) {
  const n = Xh(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function Wv(e, t, r, n) {
  for (const i of Xh(e, t, r)) i.easing = Uh(n);
}
function Kv(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Bv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function Uv(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Yv(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function $s(e) {
  return fo(e).map((t) => e[t]);
}
function qv(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? $s(e.camera).some((n) => n.keyframes.length > 0) : Jh(e, { camera: r });
}
function zs(e) {
  return $s(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Yv(e.clip);
}
function Jh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(zs);
}
const Xv = 1e5;
function Zh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of $s(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of $s(a))
      for (const c of l.keyframes) o = Math.max(o, s.start - s.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : Xv;
}
function Jv(e) {
  return e > 0 ? uo(Math.min(e, Hu)) : null;
}
function Zv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : zh(Math.max(1, Math.min(e, Gu)));
}
const rc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Qv = 2e3;
function e1(e, t, r = 56) {
  const n = rc.find((o) => o * t >= r) || rc[rc.length - 1], i = [];
  for (let o = 0; o < e && i.length < Qv; o += n) i.push(o);
  return i;
}
function t1(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Ua = { text: null, parsed: null };
function xn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function js(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function n1({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: xn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: lo(null),
    painting_layer: null,
    ui_settings: js(n),
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
function r1(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function i1(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function o1(e) {
  return Array.isArray(e) ? e.map((t) => ju(t)) : [];
}
function a1(e, t) {
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
  }, n = n1(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Ua.text === i ? o = Ua.parsed : (o = JSON.parse(i), Ua = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: r1(o.assets),
      stickers: i1(o.stickers),
      shots: o1(o.shots),
      painting: lo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: js(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = js({ ...s.ui_settings, ...a })), s.output_preset = Qh(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = xn(r.coverage), delete s.editor_history, s;
  } catch {
    return Ua = { text: i, parsed: null }, n;
  }
}
function s1(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function l1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function c1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function tm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, c = uo(t.fps);
  let u;
  try {
    u = tr(e);
  } catch {
    u = tr(null);
  }
  c && c !== u.timeline.fps && (u = aa(u, c));
  const d = l && u.camera === null;
  if (d && (u = { ...u, camera: Yu() }), s) {
    let f = tr(s);
    c && c !== f.timeline.fps && (f = aa(f, c)), u = { ...f, camera: u.camera, cutout_state: u };
  }
  return {
    ...u,
    ...d ? { default_camera: !0 } : {},
    coverage: xn(i),
    bg_color: n,
    output_preset: Qh(r),
    ui_settings: js(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function u1(e, t) {
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
function qu(e, t) {
  const r = wi(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const d1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function vf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function f1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[d1[r]].keyframes.length));
}
function nm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = vf(r, ["yaw_deg", "pitch_deg"]), o = vf(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && mn(e, "direction", n, i), r.rot_deg !== void 0 && mn(e, "roll", n, r.rot_deg), Object.keys(o).length && mn(e, "size", n, o);
}
const Sl = ["position_x", "position_y", "position_z"], wl = "camera";
function rm(e, t) {
  const r = yl(e, t);
  return ju({
    id: wl,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: ov(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function p1(e) {
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
function h1(e) {
  return e - 360 * Math.round(e / 360);
}
function m1(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + h1(r[o] - n[o]));
  Object.keys(i).length && mn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && mn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * xt * 0.5) / Math.tan(r.vFOV_deg * xt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && mn(e, "position", t, [...r.position]);
}
function g1(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(Sl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function y1(e, t, r, n) {
  const i = Sl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, mn(e, "position", t, o);
  } else r === "hFOV_deg" ? mn(e, "fov", t, n) : mn(e, "rotation", t, { [r]: n });
}
function b1(e, t, r) {
  mn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function v1(e, t) {
  const r = wi(e, t);
  return {
    ...Object.fromEntries(Sl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function _1(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Sl.indexOf(r);
  if (o >= 0) {
    const a = Wt(e, "position", i);
    a[o] = n, mn(e, "position", i, a);
  } else r === "scale" ? mn(e, "scale", i, n) : r === "opacity" ? mn(e, "opacity", i, n / 100) : mn(e, "rotation", i, { [r]: n });
}
function S1(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && mn(e, i, n, r[i]);
}
function w1(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function x1(e, t, r) {
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
function ds(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Hs(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Xu(e, t, r, n) {
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
function k1(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = jt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Vc(e) {
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
  e.default_camera && JSON.stringify(tr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Yu()) && delete e.default_camera;
}
function sm(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = tr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(Yu()) && (r.camera = null), Rc(r);
}
function lm(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = tr(r);
    if (Rc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Rc(aa(i, o)) === t;
  } catch {
    return !1;
  }
}
const ic = 0.15, M1 = 0.01, P1 = 1e-3, N1 = 0.05, C1 = 4, _f = 250, A1 = 16, nr = 1, I1 = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function jn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function gr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function xl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function po(e, t, r = 0) {
  const n = Fn(e, t, r), i = gr(n, 2);
  return { right: gr(n, 0), up: gr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function E1(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function $c(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function O1(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : $c(e, "3dof", r);
}
function F1(e) {
  return po(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function T1(e) {
  return jn(e.position, po(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function ei(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Bo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ju(e, t) {
  return Bo(ei(t, e.position), po(e.yaw_deg, e.pitch_deg).forward);
}
function Zu(e) {
  return Math.max(e, 1e-6) * N1;
}
function zc(e, t, r = null, n = nr) {
  if (t) return t;
  const i = Zu(n);
  if (r && Ju(e, r) > 0) {
    const o = ei(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : jn(e.position, o, i / a);
  }
  return jn(e.position, po(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function cm(e, t = nr) {
  return Math.max(e.distance, Zu(t));
}
function um(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > C1 ? !1 : t.time - e.time < _f || e.cost > A1 && t.time - e.wheelTime < _f;
}
function Qu(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * xt);
  return { tanX: n, tanY: n * r / t };
}
function dm(e, t, r, n, i = T1(e)) {
  const o = e.roll_deg ?? 0, [a, s] = D1(t, r, o), l = jt(e.yaw_deg + a / n * 360), c = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), u = Fn(e.yaw_deg, e.pitch_deg, o), d = Fn(l, c, o), f = ei(e.position, i), g = [0, 1, 2].map((m) => Bo(gr(u, m), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: jn(i, xl(d, g)) };
  return { ..._, distance: Ju(_, i) };
}
function D1(e, t, r) {
  const n = Math.cos(r * xt), i = Math.sin(r * xt);
  return [e * n + t * i, t * n - e * i];
}
function fm(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = F1(e), l = 2 * o * Qu(e, n, i).tanY / i;
  return { ...e, position: jn(jn(e.position, a, -t * l), s, r * l), distance: o };
}
function pm(e, t, r, n = nr) {
  const i = ei(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * M1, l = r > 0 ? Math.min(Math.max(o * ic, s), o - a * P1) : -Math.max(o * ic / (1 - ic), s);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: jn(e.position, i, l / o) };
  return { ...c, distance: Math.max(Ju(c, t), Zu(n)) };
}
function hm(e, t, r, n) {
  const { tanX: i, tanY: o } = Qu(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = po(e.yaw_deg, e.pitch_deg);
  return { ...e, position: jn(t.center, l, -s), distance: s };
}
function ed(e, t, r, n = null) {
  return mm({
    quaternion: Pi(Fn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Qu(e, t, r).tanY) * en,
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
  const c = Math.tan(e.fovY_deg * 0.5 * xt), u = c * e.aspect, d = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + d / l / u), y: n * 0.5 * (1 - f / l / c), z: l };
}
function gm(e) {
  const t = na(e.quaternion), r = gr(t, 2);
  return { right: gr(t, 0), up: gr(t, 1), forward: r.map((n) => -n) };
}
function Gs(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function L1({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function td(e, t) {
  if (!e || !t.active) return null;
  const r = R1(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: jc(t),
    itemQuaternion: e.kind === "splat" ? I1 : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function ym(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = td(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function bm(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function R1(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function jc(e) {
  return {
    position: [...e.position],
    quaternion: Pi(Fn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Hc(e, t) {
  return jn(e.position, xl(Fn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function fs(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Gc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function Wc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function V1(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...Gc(t).map((o) => Hc(e.scene, o)));
  for (const o of r) i.push(...nd(o));
  for (const { box: o, value: a } of n) i.push(...Gc(o).map((s) => Hc(a, s)));
  return i;
}
function $1(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: Pi(Fn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Fn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function nd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => jn(e.position, xl(e.rotation, [n, i, 0])));
}
function z1(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Wc(nd(i)) : o != null && o.box ? Wc(Gc(fs(o.kind, o.box)).map((a) => Hc(n, a))) : { center: [...n.position], radius: n.scale };
}
const j1 = 2, H1 = 0.5, G1 = 30;
function vm(e, t) {
  const r = ei(t, e), n = Math.atan2(r[0], -r[2]) * en, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * en;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function W1(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * H1 : j1, o = t ? [...t] : jn(e.position, po(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...ei(o, e.position)), s = a > 0 ? vm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(G1 * 0.5 * xt);
  return { position: o, rotation: s, scale: l };
}
function Sf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function K1(e) {
  return [0, 1, 2].map((t) => gr(e, t));
}
function wf(e, t, r, n) {
  if (e === "translate") return { position: jn(t.position, ei(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * X1(r.scale, n.scale) / r.scale };
  const i = Sf(na(n.quaternion), K1(na(r.quaternion))), o = Sf(i, Fn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Oh(o);
  return Math.abs(s) <= B1 ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: U1(o, t.yaw_deg) } };
}
const B1 = 89.9;
function U1(e, t) {
  const r = gr(e, 0), n = gr(e, 1), i = Math.cos(t * xt), o = Math.sin(t * xt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * en + 0;
}
const Y1 = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function q1(e, t, r, n, i) {
  if (!sa(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = gm(e), l = ei(t, e.position), c = Bo(l, o), u = Bo(l, a), d = Bo(l, s), f = Math.tan(e.fovY_deg * 0.5 * xt), g = f * e.aspect, _ = Math.hypot(c, u, d) * Y1[r] * Math.min(1.9 * f, 7) / 4;
  if (!(d > _)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const m = (G) => {
    const x = _ * Math.sqrt(G * G + d * d - _ * _);
    return [(G * d - x) / (d * d - _ * _), (G * d + x) / (d * d - _ * _)];
  }, [p, O] = m(c), [B, z] = m(u);
  return {
    minX: n * 0.5 * (1 + p / g),
    maxX: n * 0.5 * (1 + O / g),
    minY: i * 0.5 * (1 - z / f),
    maxY: i * 0.5 * (1 - B / f)
  };
}
function X1(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function J1(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function _m(e, t) {
  const r = Fn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * xt) * t, i = n / e.aspect, o = (c, u, d) => jn(e.position, xl(r, [c, u, d])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((c) => [e.position, c]);
  a.forEach((c, u) => s.push([c, a[(u + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function Z1(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = sa(e, a, n, i), c = sa(e, s, n, i);
    if (!l || !c) return !1;
    const u = c.x - l.x, d = c.y - l.y, f = Ee(((r.x - l.x) * u + (r.y - l.y) * d) / Math.max(u * u + d * d, 1e-12), 0, 1);
    return Math.hypot(l.x + u * f - r.x, l.y + d * f - r.y) <= o;
  });
}
function Q1(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function e_(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function t_(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const Sm = 0.28;
function wm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * xt);
  return {
    quaternion: Pi(Fn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * en,
    aspect: n
  };
}
function Uo(e) {
  const t = Qr(e);
  return {
    quaternion: Pi(Fn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function xm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = zu(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
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
  const [[n, i, o], [a, s, l], [c, u, d]] = na(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * xt), g = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, m = 1e-4) {
      const p = sv(_), O = n * p.x + a * p.y + c * p.z, B = i * p.x + s * p.y + u * p.z, z = -(o * p.x + l * p.y + d * p.z), G = Math.max(z, m);
      return {
        x: t * 0.5 * (1 + O / G / g),
        y: r * 0.5 * (1 - B / G / f),
        z
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, m) {
      const p = (_ / t * 2 - 1) * g, O = (1 - m / r * 2) * f;
      return Ru(cs({
        x: n * p + i * O - o,
        y: a * p + s * O - l,
        z: c * p + u * O - d
      }));
    }
  };
}
function Mm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = ba(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const c = o.stickers[l];
    if (s.placement !== "sky") return;
    const u = s.source.kind === "port" && !s.visible;
    if (!c.active && !u) return;
    const d = r(s);
    if (!d) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * xt), g = Math.tan(c.vFOV_deg * 0.5 * xt), { crop: _ } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
      opacity: u ? Sm : c.opacity,
      zIndex: n(s),
      quaternion: Pi(Fn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
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
function n_(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Nm(e, t, r, { media: n, evaluated: i = ba(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const c = i.stickers[l];
    if (s.placement !== "world" || !c.active) return;
    const u = o.get(s.id), d = u ? n(u) : null;
    if (!d) return;
    const { width: f, height: g } = n_(d.media), _ = $1(c, s.crop, f, g);
    _ && a.push({
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
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
function r_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-CoFkxyk2.js").then((s) => s.$) }) {
  let s = null, l = null, c = !1, u = 0;
  const d = () => {
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
    pick(m, p, O, B, z) {
      return l && !f.lost ? l.pick(m, p, O, B, z) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, p, O, B, z) {
      return l && !f.lost ? l.pickSurface(m, p, O, B, z) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, p, O, B, z) {
      return l && !f.lost ? l.pickSticker(m, p, O, B, z) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, p, O, B, z, G) {
      return l && !f.lost ? l.gizmoPointer(m, p, O, B, z, G) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return u + (l ? l.contentRevision() : 0);
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
      c || !f.lost || (l && (u += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, s && (d(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", g), e.addEventListener("webglcontextrestored", _), a().then((m) => {
    c || (s = m, !f.lost && (d(), f.ready = !0, t()));
  }).catch((m) => {
    console.error("[PanoramaStickers] three.js view is unavailable", m), f.failed = !0, r();
  }), f;
}
const Cm = "3D view unavailable. Check the browser console.";
function Ws(e, t, r) {
  return wm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function i_(e) {
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
      render(u) {
        return c ? null : (o(), t ? t.render({ ...u, owner: l }) : null);
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
const Am = i_(
  () => import("./.lazy/pano_three_view-CoFkxyk2.js").then((e) => e.$).then((e) => wh(e.createThreeView({ createCanvas: () => rn({ label: "three.node" }) }), "node"))
), rr = ["erp_image", "bg_erp", "bg_media"], ps = ["source"], rd = ["sticker_image", "sticker"], Im = ["scene"], o_ = {
  background: [...rr, ...ps],
  "external-sticker": [...rd, ...ps],
  scene: [...Im, ...ps]
};
function Em(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function kl(e) {
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
function xf(e, t) {
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
function a_(e, t) {
  const { graph: r, entry: n } = Fm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = Em(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const Tm = [...rr, ...rd, ...Im, ...ps], s_ = 256, $i = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new WeakMap();
let Dm = () => null;
function Lm(e) {
  return oc.has(e) || oc.set(e, JSON.stringify(e)), oc.get(e);
}
function l_(e) {
  Dm = e;
}
function Ks(e, t) {
  const r = Lm(e);
  $i.delete(r), $i.set(r, t), $i.size > s_ && $i.delete($i.keys().next().value);
}
function Xt(e, t) {
  var o;
  const r = e ? Dm(e) : null;
  if (!r) return !0;
  const n = kl(e);
  let i = $i.get(Lm(r));
  if (i)
    Ks(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => Tm.includes(a == null ? void 0 : a.name)))) return !0;
    Ks(r, n), i = n;
  }
  return o_[t].every((a) => i[a] === n[a]);
}
const Bs = /* @__PURE__ */ new WeakSet();
async function Kc(e, t) {
  if (Bs.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Bs.add(e), r.ok && n !== void 0 ? n : null;
}
function Rm(e, t) {
  var o, a, s, l, c;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = Fm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((u) => Tm.includes(u == null ? void 0 : u.name))) ? null : { output: i, inputs: a_(r, t) };
}
const hs = /* @__PURE__ */ new Map();
function c_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && hs.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Kc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = Rm(i, o);
        a && Ks(a.output, a.inputs);
      }
    });
}
const u_ = 5;
function d_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${u_}`, n = Kc(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Kc(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var c, u, d, f;
      const l = String(a.id);
      for (const { id: g } of await n) {
        if (!s()) return null;
        const _ = await o(g);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (d = (u = _.workflow) == null ? void 0 : u.prompt) == null ? void 0 : d[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : Rm(_, l);
      }
      return null;
    }
  };
}
function f_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let Fi = null;
async function p_(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Bs.has(r) || (s = hs.get(i)) != null && s.has(n) || f_(t)) return null;
  (Fi == null ? void 0 : Fi.workflowId) !== i && (Fi = { workflowId: i, history: d_(r, i) }, queueMicrotask(() => {
    Fi = null;
  }));
  const a = await Fi.history.lastNodeOutput(e, o);
  return o() ? a ? (Ks(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (Bs.has(r) || hs.set(i, (hs.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function kf(e, t, r, n = rr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const Mf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ms(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Mf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Mf.test(String((e == null ? void 0 : e.filename) || ""));
}
const ac = /* @__PURE__ */ new WeakMap();
function h_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Bc(e) {
  return h_(e) ? (ac.has(e) || ac.set(e, Math.random().toString(36).slice(2, 10)), ac.get(e)) : "run";
}
function Vm(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function m_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, u) => u)));
    }
  };
  return i(e, t), n;
}
function id(e, t = [], r = null) {
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
function g_({
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
  }, u = () => i(), d = () => {
    i(), l();
  }, f = () => i();
  let g = !1;
  const _ = () => {
    g = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), s || n.addEventListener("timeupdate", u), n.addEventListener("play", d), n.addEventListener("pause", f), n.addEventListener("error", _), n.src = t, n.load();
  const m = () => {
    o || g || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, p = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var B, z;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", u), n.removeEventListener("play", d), n.removeEventListener("pause", f), n.removeEventListener("error", _), n.pause(), (B = n.removeAttribute) == null || B.call(n, "src"), (z = n.load) == null || z.call(n));
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
function oi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function y_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Pf(e, t, r = null) {
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
  return !n && r != null && (n = y_(e == null ? void 0 : e.graph, r)), n;
}
function b_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function v_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function __(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function $m({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (x) => {
    if (!x) return "";
    if (typeof x == "string") return String(x || "").trim();
    if (Array.isArray(x)) {
      if (x.length === 0) return "";
      if (x.length === 1) return i(x[0]);
      const ee = String(x[0] || "").trim();
      if (ee)
        return oi(t, {
          filename: ee,
          subfolder: String(x[1] || "").trim(),
          type: String(x[2] || "output").trim() || "output"
        });
      for (const W of x) {
        const ce = i(W);
        if (ce) return ce;
      }
      return "";
    }
    return typeof (x == null ? void 0 : x.src) == "string" && x.src ? x.src : typeof (x == null ? void 0 : x.url) == "string" && x.url ? x.url : oi(t, x);
  }, o = (x) => {
    if (!x || typeof x != "object") return "";
    const ee = String(x.type || "").trim().toLowerCase();
    if (ee === "dataurl") return String(x.value || "");
    if (ee !== "comfy_image") return "";
    const W = String(x.filename || "").trim();
    return W ? oi(t, {
      filename: W,
      subfolder: String(x.subfolder || ""),
      type: String(x.storage || "input")
    }) : "";
  }, a = (x) => {
    const ee = e == null ? void 0 : e.nodeOutputs;
    if (!ee || x == null) return null;
    const W = String(x);
    return ee instanceof Map ? ee.get(x) || ee.get(W) || ee.get(Number(W)) || null : ee[x] || ee[W] || null;
  }, s = (x, ee) => {
    var ce;
    const W = a(x == null ? void 0 : x.id);
    return Array.isArray((ce = W == null ? void 0 : W.ui) == null ? void 0 : ce[ee]) ? W.ui[ee] : Array.isArray(W == null ? void 0 : W[ee]) ? W[ee] : [];
  }, l = (x, ee) => {
    const W = a(x == null ? void 0 : x.id);
    return W != null && W.ui && Object.prototype.hasOwnProperty.call(W.ui, ee) ? W.ui[ee] : W && Object.prototype.hasOwnProperty.call(W, ee) ? W[ee] : null;
  }, c = (x, ee) => {
    const W = l(x, "pano_sticker_input_state_hash"), ce = Array.isArray(W) ? W[0] : W;
    return String(ce ?? "").trim() || __(ee);
  }, u = (x) => {
    const ee = [], W = /* @__PURE__ */ new Set();
    for (const ce of x || []) {
      const F = i(ce);
      !F || W.has(F) || (W.add(F), ee.push(F));
    }
    return ee;
  }, d = (x, ee) => {
    var F;
    const W = [];
    Array.isArray(x == null ? void 0 : x.images) && x.images.length && W.push(x.images), Array.isArray((F = x == null ? void 0 : x.ui) == null ? void 0 : F.images) && x.ui.images.length && W.push(x.ui.images);
    const ce = [];
    for (const pe of W)
      ee >= 0 && ee < pe.length && ce.push(pe[ee]), ce.push(...pe);
    return ce;
  }, f = (x, ee) => {
    var L;
    const W = String(ee || "").trim();
    if (!W) return { src: "", sourceType: "", inputName: "" };
    const F = (Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : []).findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === W);
    if (F < 0) return { src: "", sourceType: "", inputName: W };
    const pe = x.graph ? x.getInputLink(F) : null;
    if ((pe == null ? void 0 : pe.origin_id) == null) return { src: "", sourceType: "", inputName: W };
    const C = pe.origin_id, Y = Pf(x, F, C);
    if (!Y) return { src: "", sourceType: "", inputName: W };
    const te = Number(pe.origin_slot ?? 0);
    let J = [];
    try {
      J = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(Y) || [] : [];
    } catch {
      J = [];
    }
    if (Array.isArray(J) && J.length) {
      const Z = [];
      te >= 0 && te < J.length && Z.push(J[te]), Z.push(...J);
      const V = u(Z.filter((fe) => !ms(fe)));
      if (V.length)
        return { src: V[0], srcCandidates: V, sourceType: "appNodeImageUrls", inputName: W };
    }
    const U = a((Y == null ? void 0 : Y.id) ?? C), le = u(d(U, te).filter((Z) => !ms(Z))).map((Z) => `${Z}&pano_src=${Bc(U)}`);
    if (le.length)
      return { src: le[0], srcCandidates: le, sourceType: "nodeOutputs", inputName: W };
    const ie = Array.isArray(Y == null ? void 0 : Y.imgs) ? Y.imgs : [];
    if (ie.length) {
      const Z = [];
      te >= 0 && te < ie.length && Z.push(ie[te]), Z.push(...ie);
      const V = u(Z);
      if (V.length)
        return { src: V[0], srcCandidates: V, sourceType: "nodeImgs", inputName: W };
    }
    const k = (L = Y == null ? void 0 : Y.widgets) == null ? void 0 : L.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (k) {
      let Z = i(k.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (Y.comfyClass === "LoadImage" || Y.type === "LoadImage") && (Z = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`), Z) return { src: Z, sourceType: "widget", inputName: W };
    }
    return { src: "", sourceType: "", inputName: W };
  }, g = (x, ee = []) => {
    var ce;
    const W = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : [];
    for (const F of ee) {
      const pe = W.findIndex((J) => String((J == null ? void 0 : J.name) || "") === F), C = pe >= 0 && x.graph ? x.getInputLink(pe) : null;
      if ((C == null ? void 0 : C.origin_id) == null) continue;
      const Y = a(((ce = Pf(x, pe, C.origin_id)) == null ? void 0 : ce.id) ?? C.origin_id), te = (Array.isArray(Y == null ? void 0 : Y.images) ? Y.images : []).find(ms);
      return te ? `${oi(t, te)}&pano_src=${Bc(Y)}` : "";
    }
    return "";
  }, _ = (x, ee = []) => {
    const W = Array.isArray(ee) ? ee : [ee];
    for (const ce of W) {
      const F = f(x, ce);
      if (String((F == null ? void 0 : F.src) || "").trim()) return F;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, m = (x) => {
    const ee = String(x || "").trim();
    if (!ee) return [];
    if (b_(ee)) return [ee];
    const { filename: W, subfolder: ce } = v_(ee);
    return W ? u([
      oi(t, { filename: W, subfolder: ce, type: "temp" }),
      oi(t, { filename: W, subfolder: ce, type: "output" }),
      oi(t, { filename: W, subfolder: ce, type: "input" }),
      ee
    ]) : [ee];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (x) => {
      var ee, W;
      try {
        (W = (ee = x == null ? void 0 : x.__panoLinkedInputImageCache) == null ? void 0 : ee.forEach) == null || W.call(ee, (ce, F, pe) => {
          var C;
          ce != null && ce.img && ((C = n == null ? void 0 : n.isImageLoadFailed) != null && C.call(n, ce.img)) && pe.delete(F);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (x, ee) => {
      var W;
      (W = x == null ? void 0 : x.delete) == null || W.call(x, `__ui__${String(ee || "")}`);
    },
    linkedValue: (x, ee) => {
      var C, Y, te, J;
      const W = String(ee || ""), ce = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === W) : -1, F = ce >= 0 && x.graph ? x.getInputLink(ce) : null;
      if (F) {
        const U = a(F.origin_id), le = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (C = U == null ? void 0 : U.data) == null ? void 0 : C.output,
          (Y = U == null ? void 0 : U.data) == null ? void 0 : Y.result,
          (te = U == null ? void 0 : U.ui) == null ? void 0 : te.output,
          (J = U == null ? void 0 : U.ui) == null ? void 0 : J.result
        ];
        for (const ie of le) {
          if (!Array.isArray(ie)) continue;
          const k = ie[Number(F.origin_slot || 0)];
          if (typeof k == "string" && k.trim()) return k;
        }
      }
      const pe = Array.isArray(x == null ? void 0 : x.widgets) ? x.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === W) : null;
      return String((pe == null ? void 0 : pe.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (x, ee = [], W = null, ce = "") => {
      var Se;
      const F = Array.isArray(ee) ? ee : [ee], pe = _(x, F), Y = (Array.isArray(pe == null ? void 0 : pe.srcCandidates) && pe.srcCandidates.length ? pe.srcCandidates : [pe == null ? void 0 : pe.src]).map((Q) => String(Q || "").trim()).filter(Boolean);
      if (!Y.length) return null;
      const te = u(Y.flatMap((Q) => m(Q)));
      if (!te.length) return null;
      x.__panoLinkedInputImageCache || (x.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(ce || F.join("|") || "image_exact"), U = Y.join(`
`), le = x.__panoLinkedInputImageCache.get(J);
      if (le && le.srcRaw === U && le.img) return le.img;
      const ie = r || globalThis.Image;
      if (typeof ie != "function") return null;
      const k = new ie();
      (Se = n == null ? void 0 : n.markImageLoading) == null || Se.call(n, k, U);
      const L = { srcRaw: U, resolvedSrc: "", img: k };
      x.__panoLinkedInputImageCache.set(J, L);
      let Z = -1;
      const V = (Q) => {
        var E, X, ae;
        Q === "ready" ? (E = n == null ? void 0 : n.markImageReady) == null || E.call(n, k, U) : (X = n == null ? void 0 : n.markImageFailed) == null || X.call(n, k, U), W == null || W(k), (ae = x.setDirtyCanvas) == null || ae.call(x, !0, !0);
      }, fe = () => {
        if (Z += 1, Z >= te.length) {
          V("failed");
          return;
        }
        L.resolvedSrc = te[Z], k.src = L.resolvedSrc;
      };
      return k.onload = () => V("ready"), k.onerror = () => {
        if (Z + 1 < te.length) {
          fe();
          return;
        }
        V("failed");
      }, fe(), k;
    },
    output: a,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (x, ee, W, ce = null) => {
      var U, le, ie;
      const F = s(x, ee)[0] || null, pe = i(F);
      if (!pe) return null;
      const C = `__ui__${ee}`, Y = (U = W == null ? void 0 : W.get) == null ? void 0 : U.call(W, C);
      if (Y && Y.__panoSrc === pe) return Y;
      const te = r || globalThis.Image;
      if (typeof te != "function") return null;
      const J = new te();
      return J.__panoSrc = pe, (le = n == null ? void 0 : n.markImageLoading) == null || le.call(n, J, pe), J.onload = () => {
        var k;
        (k = n == null ? void 0 : n.markImageReady) == null || k.call(n, J, pe), ce == null || ce(J);
      }, J.onerror = () => {
        var k;
        (k = n == null ? void 0 : n.markImageFailed) == null || k.call(n, J, pe), ce == null || ce(J);
      }, J.src = pe, (ie = W == null ? void 0 : W.set) == null || ie.call(W, C, J), J;
    },
    uiList: s,
    uiValue: l
  };
}
const S_ = 1e-3;
function od(e, t, r, n) {
  if (!co(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(S_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function zm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function w_(e, t) {
  return Math.floor(e * t.fps);
}
function ad(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Nf = 4;
function sd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, c) {
      if ((a.length !== r.length || a.some((f, g) => f !== r[g])) && (r = a, n.clear(), i = null), s === null) return null;
      const u = w_(s, l);
      for (let f = u; f < Math.min(r.length, u + Nf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < u || f > u + Nf) && f !== i && n.delete(f);
      const d = n.get(u);
      return d != null && d.complete && d.naturalWidth > 0 && (i !== null && i !== u && n.delete(i), i = u), i === null ? c : n.get(i);
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
  const c = () => a || e(), u = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (u(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, u(), !0);
    },
    updateGesture(d) {
      if (l) return !1;
      a || this.beginGesture();
      const f = t(a, d);
      return f.changed ? (a = f.state, s = !0, n(a), u(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const d = s;
      return d && i(a), a = null, s = !1, n(null), u(), d;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), u(), !0);
    },
    apply(d) {
      if (l) return !1;
      a && this.commitGesture();
      const f = t(e(), d);
      return f.changed ? (i(f.state), u(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const d = a != null;
      a = null, s = !1, d && n(null);
    }
  };
}
const gs = "sticker_image_1", Hm = "external_image", ro = 0;
function qi(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function sc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Jr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Uc(e, t = ro) {
  return (e == null ? void 0 : e.version) !== 2 ? Jr(e) : Jr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: wi(r, t).active,
    external: r.source.kind === "port",
    ...qu(r, t)
  }));
}
function ld(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && Jr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Gm(e) {
  return String((e == null ? void 0 : e.id) || "") === gs || String((e == null ? void 0 : e.source_kind) || "") === Hm;
}
function cd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Gm(t);
}
const Wm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Km(e) {
  return !Gm(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Wm.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Bm(e) {
  const t = Km(e);
  return t ? Wm.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Um(e, t = {}) {
  var G, x, ee;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((W) => String((W == null ? void 0 : W.id) || "") === gs);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const W = String(((G = e.active) == null ? void 0 : G.selected_sticker_id) || "") === gs;
    return {
      state: {
        ...e,
        stickers: r.filter((ce, F) => F !== n),
        active: W ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), u = l > 0 && c > 0, d = Math.max(1, l), f = Math.max(1, c), g = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = s ? g.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || g.hFOV_deg || 30, m = Math.min(179, Math.max(0.1, Number(_)));
  if (!s) {
    if (!u) return { state: e, changed: !1 };
    const W = qi(m, d, f), ce = Number(((x = a == null ? void 0 : a.initial_pose) == null ? void 0 : x.hFOV_deg) ?? m), F = qi(ce, d, f), pe = Number(((ee = a == null ? void 0 : a.initial_pose) == null ? void 0 : ee.vFOV_deg) ?? F);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - W) <= 1e-6 && Math.abs(pe - F) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((C, Y) => Y === n ? {
          ...C,
          vFOV_deg: W,
          initial_pose: C.initial_pose && typeof C.initial_pose == "object" ? { ...C.initial_pose, vFOV_deg: F } : C.initial_pose
        } : C)
      },
      changed: !0
    };
  }
  const p = r.reduce((W, ce) => Math.max(W, Number((ce == null ? void 0 : ce.z_index) || 0)), -1), O = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: m,
    vFOV_deg: u ? qi(m, d, f) : Number(g.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || m),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, B = {
    ...a || {},
    id: gs,
    source_kind: Hm,
    source_link_id: i,
    source_state_hash: o,
    ...O,
    initial_pose: { ...O },
    visible: !0,
    z_index: p + 1
  }, z = n >= 0 ? r.map((W, ce) => ce === n ? B : W) : [...r, B];
  return { state: { ...e, stickers: z }, changed: !0 };
}
function Cf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const x_ = ["IMAGE", "VIDEO"];
function Af(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => x_.includes(r)) ? "2d" : null;
}
function k_(e, t) {
  var i, o, a, s, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((u) => (u == null ? void 0 : u.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Af(n.type) ?? Af((c = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Ym(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: Cf(e, "sticker"),
    awaitingPose: !t && (Cf(e, "sticker_state") || k_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function If(e, t) {
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
  const a = e.stickers.findIndex((p) => cd(e, p)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((m = e.active) == null ? void 0 : m.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((O, B) => B !== a),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const p = { ...If(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((O, B) => B === a ? p : O) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const p = [s.size.value, ...s.size.keyframes.map((z) => z.value)], O = p.map((z) => qi(z.hFOV_deg, i, o));
    if (p.every((z, G) => Math.abs(z.vFOV_deg - O[G]) <= 1e-6)) return { state: e, changed: !1 };
    const B = {
      value: { ...s.size.value, vFOV_deg: O[0] },
      keyframes: s.size.keyframes.map((z, G) => ({ ...z, value: { ...z.value, vFOV_deg: O[G + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((z, G) => G === a ? { ...z, size: B } : z) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const c = new Set(e.stickers.map((p) => p.id));
  let u = 1;
  for (; c.has(`sticker_${u}`); ) u += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, If(`sticker_${u}`, n)] }, changed: !0 };
  const d = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (p) => l ? qi(p, i, o) : p, g = Xu(`sticker_${u}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: d,
    vFOV_deg: f(d)
  }, Jr(e).reduce((p, O) => Math.max(p, O.z_index), -1) + 1), _ = (n == null ? void 0 : n.keyframes) ?? {};
  return g.direction.keyframes = _.direction ?? [], g.roll.keyframes = _.roll ?? [], g.size.keyframes = (_.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: f(p.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, g] }, changed: !0 };
}
function ud(e) {
  const t = Jr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: sc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: sc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: sc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Xm(e) {
  const t = ld(e), r = cd(e, t), n = Jr(e).some((s) => s && s.visible !== !1), i = ud(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Bm(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function M_(e) {
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
function Ef(e, t) {
  const r = ld(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = M_(e), i = String(r.id || ""), o = ud(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function P_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function N_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Um(e, t.value);
  if (t.type === "sync-port") return qm(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = ud(e).reduce((f, g) => Math.max(f, Number(g.z_index || 0)), -1), c = 30, u = {
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
          stickers: [...e.stickers, Xu(o, ds(i.asset), u, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const d = { id: o, asset_id: a, ...u, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], d],
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
  const r = ld(e);
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
    return !i || !Bm(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Ef(e, "front");
  if (t.type === "send-back") return Ef(e, "back");
  if (t.type === "delete-selected") {
    if (cd(e, r))
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
    return e.version !== 2 && (s.assets = P_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? qu(r, ro) : r, s = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(a[l] || 0)) > 1e-12 && (s[l] = c);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = f1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return nm(c, ro, l), { state: { ...e, stickers: e.stickers.map((u) => u === r ? c : u) }, changed: !0 };
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
function C_(e = {}) {
  return jm({
    ...e,
    reduce: N_,
    projectModel: Xm
  });
}
const Yc = 2;
function ci(e, t) {
  return Math.floor(e * t + 0.5);
}
function A_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Jm({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, c = !1, u = !1, d = { name: "idle" }, f = [];
  const g = () => c && !u, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function m() {
    for (const L of f) L();
    f = [];
  }
  function p(L, Z = {}) {
    return m(), d = { name: L, ...Z }, s(), d;
  }
  function O(L, Z, V) {
    const fe = () => {
      d === L && V();
    };
    e.addEventListener(Z, fe), f.push(() => e.removeEventListener(Z, fe));
  }
  function B(L, Z) {
    let V = t.requestFrame(function fe(Se) {
      d === L && (Z(Se), d === L && (V = t.requestFrame(fe)));
    });
    f.push(() => t.cancelFrame(V));
  }
  function z(L) {
    l = L, o(l);
  }
  function G() {
    return p(u ? "error" : "idle");
  }
  function x() {
    u = !0, G();
  }
  function ee() {
    const { seekable: L } = e, Z = L != null && L.length ? L.end(L.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(Z) ? Z : 1 / 0));
  }
  function W(L) {
    if (!g()) return L === "play" ? Y() : G();
    if (e.readyState < Yc) {
      const Z = p("loading", { then: L });
      return O(Z, "loadeddata", () => W(Z.then)), O(Z, "error", x), Z;
    }
    return L === "play" && l / r() >= Number(e.duration) ? Y() : ce(L, !1);
  }
  function ce(L, Z) {
    const V = ee();
    if (!e.ended && ci(Number(e.currentTime), r()) === ci(V, r())) return F(L);
    const fe = p("seeking", { then: L, frame: l, retried: Z });
    return O(fe, "seeked", () => {
      const Se = ci(Number(e.currentTime), r()) === ci(ee(), r()), Q = l === fe.frame;
      Se || Q && fe.retried ? F(fe.then) : ce(fe.then, Q);
    }), O(fe, "error", x), e.currentTime = V, fe;
  }
  function F(L) {
    return L === "play" ? pe() : (a(), G());
  }
  function pe() {
    const L = p("playingVideo", { shown: !1 });
    if (O(L, "pause", () => e.ended ? C() : U()), O(L, "ended", C), O(L, "error", x), i() && ci(Number(e.duration), r()) >= n()) {
      const V = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = V;
      });
    }
    const Z = (V, fe) => {
      fe && !L.shown && (L.shown = !0, s()), te(ci(V, r()));
    };
    if (_()) {
      let V = e.requestVideoFrameCallback(function fe(Se, Q) {
        d === L && (Z(Number(Q.mediaTime), !0), d === L && (V = e.requestVideoFrameCallback(fe)));
      });
      f.push(() => {
        var fe;
        return (fe = e.cancelVideoFrameCallback) == null ? void 0 : fe.call(e, V);
      });
    } else
      B(L, () => Z(Number(e.currentTime), e.readyState >= Yc));
    return Promise.resolve(e.play()).catch(() => {
      d === L && U();
    }), L;
  }
  function C() {
    a(), Y();
  }
  function Y() {
    const L = p("playingClock", { startTs: t.now(), startFrame: l });
    return B(L, (Z) => te(L.startFrame + Math.floor((Z - L.startTs) / 1e3 * r()))), L;
  }
  function te(L) {
    if (L < n()) {
      z(L);
      return;
    }
    if (!i()) {
      J(n() - 1);
      return;
    }
    d.name === "playingVideo" && (m(), e.pause()), z(0), W("play");
  }
  function J(L) {
    d.name === "playingVideo" ? (m(), e.pause(), z(Math.max(0, L)), a()) : z(Math.max(0, L)), W("still");
  }
  function U() {
    if (d.name === "loading" || d.name === "seeking")
      d.then = "still", s();
    else if (d.name === "playingVideo") {
      m(), e.pause();
      const L = A_(Number(e.currentTime), r());
      z(Math.min(L, n() - 1)), a(), l === L ? G() : W("still");
    } else d.name === "playingClock" && J(Math.min(l, n() - 1));
  }
  function le() {
    if (!k()) {
      if (l >= n() - 1 && z(0), d.name === "loading" || d.name === "seeking") {
        d.then = "play", s();
        return;
      }
      W("play");
    }
  }
  function ie(L) {
    const Z = Math.max(0, Math.round(L));
    if (d.name === "loading" || d.name === "seeking") {
      d.then = "still", z(Z), s();
      return;
    }
    d.name === "playingVideo" && (m(), e.pause()), z(Z), W("still");
  }
  function k() {
    return d.name === "playingVideo" || d.name === "playingClock" || d.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return d.name;
    },
    get playing() {
      return k();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return d.name === "playingVideo" || d.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return d.name === "playingVideo" && d.shown;
    },
    play: le,
    stop: U,
    seek: ie,
    toggle() {
      k() ? U() : le();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(L) {
      m(), c = !!L, u = !1, W("still");
    },
    dispose() {
      m(), c = !1, d = { name: "idle" };
    }
  };
}
function dd({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function c(m) {
    s = m, t();
  }
  function u(m) {
    a = m, e.currentTime = m;
  }
  function d() {
    const m = l;
    f(), l !== m && r();
  }
  function f() {
    if (!n || i || e.readyState < Yc) return;
    const { time: m, playing: p, fps: O } = o;
    if (m === null) {
      e.pause(), l = !1;
      return;
    }
    if (p) {
      if (a !== null) return;
      const B = Number(e.duration), z = Number.isFinite(B) ? Math.min(m, B) : m, G = Math.abs(Number(e.currentTime) - z) > 1.5 / O;
      if (e.ended && !G) return;
      G && u(z), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(a !== null || s === m) && (Number(e.currentTime) === m ? c(m) : u(m));
  }
  const g = {
    loadeddata: d,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: d,
    seeked: () => {
      const m = a;
      a = null, !o.playing && m === o.time ? c(m) : d();
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
    follow({ src: m = "", time: p = null, playing: O = !1, fps: B }) {
      m !== n && (_(m), r()), o = { time: p, playing: O, fps: B }, d();
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
function qc(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function I_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: c = !1 }) {
  let u = "", d = "", f = 0;
  const g = /* @__PURE__ */ new Set();
  let _ = null, m = null;
  const p = () => i().timeline.fps, O = (C) => C.stickers.find((Y) => Y.source.kind === "port"), B = () => {
    const C = i(), Y = O(C);
    return Zh(C, {
      minimum: Math.round(p() * 5),
      frames: Math.max(
        u ? Math.round(f * p()) : 0,
        _ && Y ? zm(Y.clip, p(), _.meta) : 0
      ),
      camera: c
    });
  }, z = Jm({
    video: e,
    clock: n,
    fps: p,
    span: B,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), G = () => {
    d === u && Number.isFinite(e.duration) && (f = e.duration);
  }, x = () => {
    d && (g.add(d), l());
  }, ee = dd({ video: t, onCapture: s, onChange: l }), W = sd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", G), e.addEventListener("error", x);
  function ce(C) {
    C !== d && (d = C, e.pause(), C ? e.src = C : e.removeAttribute("src"), e.load(), z.setSource(!!C));
  }
  function F() {
    z.playing && z.stop();
  }
  function pe(C) {
    const Y = O(C);
    m = _ && Y ? od(Y.clip, z.frame, C.timeline.fps, _.meta) : null, ee.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: m,
      playing: z.advancing,
      fps: C.timeline.fps
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
      return d;
    },
    pause: F,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(C, Y) {
      return _ != null && _.frames ? W.picture(_.frames, m, _.meta, Y) : ee.picture(C, Y);
    },
    toggle() {
      z.playing ? z.stop() : z.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: C, sources: Y, state: te, sticker: J = null }) {
      if (_ = C ? J : null, !C)
        return F(), ce(""), pe(te), !1;
      for (const L of g)
        Y.includes(L) || g.delete(L);
      const U = Y.find((L) => L && !g.has(L)) || "", le = U !== u;
      le && (u = U, f = 0), ce(u);
      const ie = Jh(te, { camera: c }) || !!u && z.state !== "error" || !!_;
      return ie || F(), (le || !ie || !z.playing && z.frame >= B()) && z.frame !== ro && z.seek(ro), pe(te), ie;
    },
    dispose() {
      z.dispose(), ee.dispose(), e.removeEventListener("loadedmetadata", G), e.removeEventListener("error", x), e.pause(), e.removeAttribute("src"), e.load(), d = "";
    }
  };
}
const Us = Math.PI / 180, hr = 180 / Math.PI, E_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), O_ = 260;
function Of(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Zm(e, t) {
  return t ? Zm(t, e % t) : e;
}
function F_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Zm(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function la(e, t) {
  const r = Of(e), n = Of(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: F_(r, n) };
}
function bi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Qm(e) {
  const t = bi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Fr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function fd(e, t, r = E_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (p, O, B) => {
    const z = p + O, G = Math.max(0, B - 1), x = z > G && z > 0 ? G / z : 1;
    return [p * x, O * x];
  }, [u, d] = c(l, a, n), [f, g] = c(o, s, i), _ = {
    x: u,
    y: f,
    w: Math.max(1, n - u - d),
    h: Math.max(1, i - f - g)
  }, m = Vu(_, t);
  return {
    x: _.x + (_.w - m.width) * 0.5,
    y: _.y + (_.h - m.height) * 0.5,
    w: m.width,
    h: m.height,
    safeRect: _
  };
}
function T_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = fd({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Us * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Eh(l, Nh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), u = D_(c, so(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), d = $u({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: u.yaw,
    pitchDeg: u.pitch,
    rollDeg: u.roll,
    frameFovDeg: d.hFOV_deg
  };
}
function eg(e) {
  return {
    yaw: jt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * hr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * hr, -89.9, 89.9)
  };
}
function D_(e, t) {
  const r = eg(e), n = so(r.yaw, r.pitch, 0), i = Ul(t, e), o = {
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
    roll: gl(Math.atan2(
      Ul(s, n.up),
      Ul(s, n.right)
    ) * hr)
  };
}
function tg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = fd({ width: r, height: n }, Mi(e)), o = Si(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = Eh(e, Nh(
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
function L_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = Si(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: c, halfH: u } = zu(l, s), d = {
    x: o - c,
    y: a - u,
    w: c * 2,
    h: u * 2
  }, f = d.x <= 0 && d.y <= 0 && d.x + d.w >= n && d.y + d.h >= i, g = n / i, _ = Math.tan(Ic * Us), m = g >= 1 ? _ : _ * g, p = g >= 1 ? _ / g : _;
  return {
    focalPx: s,
    rect: d,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / s) * hr,
      vFOV_deg: 2 * Math.atan(u / s) * hr
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
  const r = bi(e);
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
function R_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = Si(r, e);
    return $u(Vu(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ls(o, t) };
}
function Ff(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = la(t, r);
  if (!o) return e;
  const a = Mi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = la(o.height, o.width));
  const s = R_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function ng(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (bi(e)) return { state: e, changed: !1 };
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
    const n = bi(e);
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
    return Ti(e, (n) => Ff(
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
      const o = String(Fr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? la(o[1], o[2]) : la(Mi(n), 1);
      return a ? Ff(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Ti(e, (i) => {
      const o = gl(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
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
  }, u = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (s === "shift" && u < Math.min(l.w, l.h) * a) return null;
  const d = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: s,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: d,
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
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Us, l = Math.cos(s), c = Math.sin(s), u = o / r, d = -a / r, f = u * l - d * c, g = u * c + d * l, _ = Number(e.pitch_deg || 0) * Us, m = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: jt(Number(e.yaw_deg || 0) - Math.atan(f) / m * hr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(g) * hr, -90, 90)
  };
}
function V_({
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
}), $_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, z_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: $_(t[2])
})), j_ = {
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
}, Tf = Object.fromEntries(
  Object.entries(j_).map(([e, t]) => [e, {
    name: t.name,
    elements: z_(t.body)
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
      return Object.prototype.hasOwnProperty.call(Tf, n) ? Tf[n] : null;
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
        o.tag === "path" ? (Te(), De("path", Cr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), De("circle", Cr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), De("rect", Cr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), De("line", Cr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), De("polyline", Cr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), De("polygon", Cr({
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
    return (n, i) => (Te(), zn(ey(e.tag), Cr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Wp(() => [
        Be(Vt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, H_ = ["aria-expanded", "disabled"], G_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, W_ = ["data-aspect", "disabled", "onClick"], K_ = { class: "pano-cutout-aspect-custom" }, B_ = ["disabled"], U_ = ["disabled"], Y_ = ["data-custom-width", "data-custom-height", "disabled"], ag = {
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
      return m.length ? m.map((O) => {
        const B = typeof O == "string" ? O : String((O == null ? void 0 : O.value) || ""), z = typeof O == "string" ? O : String((O == null ? void 0 : O.label) || B);
        return {
          ...typeof O == "object" && O ? O : {},
          value: B,
          label: z,
          active: p ? B === p : (O == null ? void 0 : O.active) === !0
        };
      }) : i.map((O) => ({
        ...O,
        active: O.value === p
      }));
    }), u = ut(() => {
      var p;
      const m = String(r.model.aspectLabel || "").trim();
      return m || String(((p = c.value.find((O) => O.active === !0)) == null ? void 0 : p.label) || "Aspect");
    });
    mi(u, (m) => {
      const p = String(m || "").match(/^([0-9.]+):([0-9.]+)$/);
      p && (o.value = p[1], a.value = p[2]);
    }, { immediate: !0 });
    function d(m) {
      n("action", m);
    }
    function f(m) {
      var p;
      r.model.aspectOpen === !0 && ((p = s.value) != null && p.contains(m.target) || d({ type: "close-aspect" }));
    }
    dl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), ma(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function g(m) {
      const [p, O] = String(m.value || "").split(":");
      d({
        type: "set-aspect",
        width: p,
        height: O,
        preserveOrientation: !0
      });
    }
    function _() {
      d({
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
        onClick: p[0] || (p[0] = (O) => d({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: p[1] || (p[1] = (O) => d({ type: "toggle-aspect" }))
      }, [
        Be(Vt, {
          icon: e.model.aspectIcon || tt(Ge).aspect
        }, null, 8, ["icon"]),
        Pe("span", null, nt(u.value), 1),
        Be(Vt, {
          icon: tt(Ge).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, H_)),
      Lr(Pe("div", G_, [
        (Te(!0), De(Ze, null, Pt(c.value, (O) => (Te(), De("button", {
          key: O.value,
          class: ht(["pano-btn pano-frame-aspect-choice", { active: O.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": O.value,
          disabled: l.value,
          onClick: (B) => g(O)
        }, nt(O.label), 11, W_))), 128)),
        Pe("div", K_, [
          Lr(Pe("input", {
            "onUpdate:modelValue": p[2] || (p[2] = (O) => o.value = O),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, B_), [
            [nf, o.value]
          ]),
          p[4] || (p[4] = Pe("span", { "aria-hidden": "true" }, ":", -1)),
          Lr(Pe("input", {
            "onUpdate:modelValue": p[3] || (p[3] = (O) => a.value = O),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, U_), [
            [nf, a.value]
          ]),
          Pe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: _
          }, "Apply", 8, Y_)
        ])
      ], 512), [
        [_i, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, q_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, X_ = {
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
      Be(Qt, {
        icon: tt(Ge).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Nt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Pe("div", q_, [
        i[3] || (i[3] = Pe("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Pe("kbd", null, nt(o[0]), 1),
          Pe("span", null, nt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, J_ = {
  class: "pano-view-unavailable",
  role: "status"
}, Ml = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), De("div", J_, nt(tt(Cm)), 1));
  }
}, Z_ = { class: "pano-cutout-node-surface" }, Q_ = ["title", "disabled"], eS = { class: "value" }, tS = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, nS = {
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
    return (n, i) => (Te(), De("div", Z_, [
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
          Be(Vt, {
            icon: tt(Ge).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Pe("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(Qt, {
          icon: e.model.hasShot ? tt(Ge).delete : tt(Ge).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(ag, {
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
          Be(Vt, {
            icon: tt(Ge).roll
          }, null, 8, ["icon"]),
          Pe("span", eS, nt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Q_),
        Be(Qt, {
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
        Be(X_)
      ], 32),
      e.model.hasShot === !1 ? (Te(), De("div", tS, " Choose a view · + Add Frame ")) : pt("", !0),
      e.model.viewUnavailable ? (Te(), zn(Ml, { key: 1 })) : pt("", !0)
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
      const d = o;
      return o = void 0, a = !1, { active: !0, intent: d };
    }
    function l(d) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = d, a = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(d) {
      var m, p;
      const { active: f, intent: g } = s();
      if (!f) return;
      const _ = ((p = (m = d.target) == null ? void 0 : m.files) == null ? void 0 : p[0]) || null;
      if (_) {
        n("file-selected", { intent: g, file: _ });
        return;
      }
      n("file-cancelled", { intent: g });
    }
    function u() {
      const { active: d, intent: f } = s();
      d && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (d, f) => (Te(), De("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: c,
      onCancel: u
    }, null, 544));
  }
}, rS = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, iS = {
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
      Be(Qt, {
        icon: tt(Ge).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Nt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Pe("div", rS, [
        i[3] || (i[3] = Pe("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Pe("kbd", null, nt(o[0]), 1),
          Pe("span", null, nt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, oS = { class: "pano-stickers-node-surface" }, aS = ["disabled"], sS = ["aria-label", "data-tip"], lS = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, cS = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, uS = {
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
    return (a, s) => (Te(), De("div", oS, [
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
          Be(Vt, {
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
          Be(Vt, {
            icon: tt(Ge).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Pe("span", { class: "label" }, "Add Image", -1))
        ], 8, aS),
        Be(Qt, {
          icon: e.model.locked ? tt(Ge).lock_closed : tt(Ge).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(Qt, {
          icon: tt(Ge).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Qt, {
          icon: tt(Ge).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Qt, {
          icon: e.model.isExternalSelection ? tt(Ge).back_initial : tt(Ge).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(iS)
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
        Be(Vt, {
          icon: e.model.playing ? tt(Ge).pause : tt(Ge).play
        }, null, 8, ["icon"])
      ], 40, sS)) : pt("", !0),
      e.model.hasStickers === !1 ? (Te(), De("div", lS, " Add Image to place a sticker ")) : pt("", !0),
      e.model.dropActive === !0 ? (Te(), De("div", cS, "Drop image to add")) : pt("", !0),
      Be(sg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), zn(Ml, { key: 3 })) : pt("", !0)
    ]));
  }
}, dS = { class: "pano-studio-node-surface" }, fS = {
  class: "pano-studio-node-status",
  role: "status"
}, pS = { class: "pano-studio-node-shot" }, hS = { class: "pano-studio-node-size" }, mS = { class: "pano-studio-node-note" }, gS = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", dS, [
      Pe("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Nt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Nt(() => {
        }, ["stop"]))
      }, [
        Pe("div", fS, [
          Pe("span", pS, nt(e.model.status.shot), 1),
          Pe("span", hS, nt(e.model.status.size), 1),
          Pe("span", mS, nt(e.model.status.note), 1)
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
          Be(Vt, {
            icon: tt(Ge).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Pe("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Te(), zn(Ml, { key: 0 })) : pt("", !0)
    ]));
  }
}, yS = 2048, Xc = 4096, ys = (e) => Math.floor(e + 0.5), Ya = (e) => Math.max(2, 2 * ys(e / 2));
function lg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function bS(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? vl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, ys(e.timeline.length)) : t.length ? n = Math.max(1, ys(Math.max(...t))) : r.length && (n = Math.max(1, ys(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function vS(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let a;
  r !== "auto" ? a = Number(r) : o ? a = yS : a = Math.floor(i * 360 / n);
  const s = lg(e);
  if (!s || s.projection === "erp")
    return { width: Math.floor(a * n / 360), height: Math.floor(a / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((g) => yl(s, g).hFOV_deg)), c = a / Math.PI * Math.tan(l * Math.PI / 360), u = c / s.aspect, d = [Ya(c), Ya(u)];
  if (Math.max(...d) <= Xc) return { width: d[0], height: d[1], reducedFrom: null, defaulted: o };
  const f = Xc / Math.max(c, u);
  return { width: Ya(c * f), height: Ya(u * f), reducedFrom: d, defaulted: o };
}
function _S(e, t, r) {
  let n = 2166136261;
  for (const i of `${e}\0${t}\0${r}`)
    n = Math.imul(n ^ i.codePointAt(0), 16777619) >>> 0;
  return n.toString(16).padStart(8, "0");
}
function SS(e, { stateText: t = "", outputSize: r, coverage: n, bgWidth: i, run: o = null }) {
  const a = lg(e);
  let s = "ERP";
  a && (s = a.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let l;
  if (o && o.key === _S(t, r, String(n)))
    l = { width: o.width, height: o.height, reducedFrom: o.reduced_from, defaulted: r === "auto" && i === null };
  else {
    if (r === "auto" && i === void 0)
      return { shot: s, size: "auto", note: "" };
    l = vS(e, bS(e), r, n, i);
  }
  let c = "";
  return l.reducedFrom ? c = `Capped at ${Xc} (${l.reducedFrom[0]} × ${l.reducedFrom[1]})` : l.defaulted && (c = "auto: no bg_media"), { shot: s, size: `${l.width} × ${l.height}`, note: c };
}
function wS() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, n === void 0 ? "pending" : n, t.run ?? null]);
    return i === e ? null : (e = i, SS(r(), { ...t, bgWidth: n }));
  };
}
const Df = 24;
function xS(e = {}) {
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
function Jc(e, t) {
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
function kS(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
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
function pd(e, t, { selected: r = !0 } = {}) {
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
function MS(e) {
  const t = so(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * xt * 0.5),
    tanY: Math.tan(Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * xt * 0.5)
  };
}
function ai(e, t, r) {
  return Ru(Os(
    Os(e.centerDir, Fs(e.right, t)),
    Fs(e.up, r)
  ));
}
function hd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = MS(e), n = No(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ai(r, -r.tanX, r.tanY),
    ai(r, r.tanX, r.tanY),
    ai(r, r.tanX, -r.tanY),
    ai(r, -r.tanX, -r.tanY)
  ].map((f) => No(f, t)), o = Array.from({ length: 4 }, (f, g) => {
    const _ = [];
    for (let m = 0; m <= 28; m += 1) {
      const p = m / 28;
      let O, B;
      g === 0 ? (O = -r.tanX + 2 * r.tanX * p, B = r.tanY) : g === 1 ? (O = r.tanX, B = r.tanY - 2 * r.tanY * p) : g === 2 ? (O = r.tanX - 2 * r.tanX * p, B = -r.tanY) : (O = -r.tanX, B = -r.tanY + 2 * r.tanY * p);
      const z = No(ai(r, O, B), t);
      z && _.push({ x: z.x, y: z.y });
    }
    return _;
  }), a = No(ai(r, 0, r.tanY), t), s = No(
    ai(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = s.x - a.x, u = s.y - a.y, d = Math.hypot(c, u) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + c / d * Df,
      y: a.y + u / d * Df
    },
    visible: !0
  };
}
function Lf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: hd(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, c;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((c = a.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Jc(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Jc(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function PS(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: jt(Math.atan2(n.x, n.z) * en),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * en
  };
}
function NS(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function CS(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * en;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let qa = null;
function md() {
  return qa || (qa = new Promise((e) => {
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
  }), qa);
}
function Gn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function AS(e, t = 1024) {
  const r = Math.max(1, Math.round(Gn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Gn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function IS(e, t, r) {
  const n = Gn(t), i = Gn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = Gn(o.u0), s = Gn(o.v0), l = Gn(o.u1), c = Gn(o.v1);
  if (l <= a || c <= s) return null;
  const u = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + Gn(u.du)) * n,
    centerY: ((s + c) * 0.5 + Gn(u.dv)) * i,
    width: (l - a) * n,
    height: (c - s) * i,
    rotationRad: Gn(u.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Gn(u.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function ES(e, t, r) {
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
function OS() {
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
      const u = [...s.listeners];
      s.listeners.clear(), u.forEach((d) => d()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), u = IS(o, a, s);
    if (!c.startsWith("data:") || !u) return null;
    const d = ES(o, a, s), f = String((o == null ? void 0 : o.id) || "").trim() || d, g = t.get(f);
    if ((g == null ? void 0 : g.revision) === d) return { source: g.source, revision: d };
    const _ = n(c, l), m = Number(_.naturalWidth || _.width || 0), p = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || m < 1 || p < 1) return null;
    const O = rn({ label: "raster-object" });
    O.width = Math.max(1, Math.round(a)), O.height = Math.max(1, Math.round(s));
    const B = O.getContext("2d");
    return B ? (u.wrapOffsets.forEach((z) => {
      B.save(), B.translate(u.centerX + z, u.centerY), B.rotate(u.rotationRad), B.scale(u.scale, u.scale), B.drawImage(
        _,
        -u.width * 0.5,
        -u.height * 0.5,
        u.width,
        u.height
      ), B.restore();
    }), t.set(f, { revision: d, source: O }), { source: O, revision: d }) : null;
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
function FS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function TS(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function DS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(d) {
    if (!d) return;
    d.entry.listeners.delete(d);
    const f = n.get(d.owner);
    (f == null ? void 0 : f.get(d.key)) === d && f.delete(d.key);
  }
  function a(d, f, g, _) {
    if (!d || typeof _ != "function" || g.settled) return;
    let m = n.get(d);
    m || (m = /* @__PURE__ */ new Map(), n.set(d, m));
    const p = m.get(f);
    if ((p == null ? void 0 : p.entry) === g) {
      p.callback = _;
      return;
    }
    o(p);
    const O = { owner: d, key: f, entry: g, callback: _ };
    m.set(f, O), g.listeners.add(O);
  }
  function s(d, f) {
    d.settled || (d.settled = !0, d.image.onload = null, d.image.onerror = null, !f && r.get(d.key) === d && r.delete(d.key), [...d.listeners].forEach((g) => {
      o(g);
      try {
        g.callback(d.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(d) {
    if (!(r.size <= d))
      for (const [f, g] of r) {
        if (r.size <= d) break;
        !g.settled || g.listeners.size > 0 || (g.image.onload = null, g.image.onerror = null, r.delete(f));
      }
  }
  function c(d, f, g, _ = null) {
    const m = String(f || ""), p = String(g || "");
    if (!m || !p) return null;
    let O = r.get(m);
    if (O)
      r.delete(m), r.set(m, O);
    else {
      l(i - 1);
      const z = e || globalThis.Image;
      if (typeof z != "function") return null;
      const G = new z();
      O = { key: m, image: G, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(m, O), G.onload = () => s(O, !0), G.onerror = () => s(O, !1), G.src = p;
    }
    return O.settled || O.image.complete && Number(O.image.naturalWidth || O.image.width || 0) > 0 || a(d, m, O, _), O.image;
  }
  function u(d) {
    const f = n.get(d);
    f && ([...f.values()].forEach(o), n.delete(d), l(i));
  }
  return { get: c, disposeOwner: u };
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
const bs = Object.freeze({
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
}), fg = "PanoramaSuite.Editor.ViewControls", LS = {
  id: fg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(bs).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function RS(e) {
  return Object.hasOwn(bs, e) ? bs[e] : bs.default;
}
function VS(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function $S(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Ys = "state_json";
function Tr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function zS(e) {
  var a, s;
  const t = Tr(e, Ys);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = em(r, {
    coverage: (a = Tr(e, "coverage")) == null ? void 0 : a.value
  }), i = ng(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function gd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Tr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, c, u, d, f, g, _;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (c = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (f = (d = e.graph) == null ? void 0 : d.setDirtyCanvas) == null || f.call(d, !0, !0), (_ = (g = t == null ? void 0 : t.canvas) == null ? void 0 : g.setDirty) == null || _.call(g, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function jS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Rf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function HS(e) {
  var u, d, f, g, _, m;
  if (!e) return;
  const t = Tr(e, "coverage"), r = Tr(e, "bg_color"), n = Tr(e, Ys), i = Tr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && jS(o) && (Rf(a) || a === ""))) return;
  let c = "360";
  if (Rf(a))
    try {
      c = String(xn((u = JSON.parse(a)) == null ? void 0 : u.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (d = t.callback) == null || d.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (g = n.callback) == null || g.call(n, a), i && (i.value = s, (_ = i.callback) == null || _.call(i, s)), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
}
function vs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function Zc(e, t, r) {
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
async function GS(e, { tolerateOperationFailure: t = !1 } = {}) {
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
  await GS(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function WS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await pg(e), r ? r.apply(this, n) : this.value;
  };
}
function KS(e) {
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
function BS(e) {
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
  function u(d) {
    var _;
    const f = `editor_btn|${r}`;
    if (d.__panoPreviewAttached === !0 && d.__panoPreviewMountKey === f) return;
    KS(d), gd(d, t), vs(d, Ys);
    const g = Tr(d, Ys);
    if (WS(d, g), g && !g.__panoPreviewPatchedCb) {
      g.__panoPreviewPatchedCb = !0;
      const m = g.callback;
      g.callback = (p) => {
        var B;
        const O = m ? m(p) : void 0;
        return (B = d.setDirtyCanvas) == null || B.call(d, !0, !1), O;
      };
    }
    if (r === "PanoramaStickers") {
      d.__panoSceneStateV2 = l, d.__panoStudio = c;
      const m = Tr(d, "bg_color");
      !l && m && (m.value == null || String(m.value).trim() === "" || String(m.value).toLowerCase() === "#000000") && (m.value = "#00ff00", (_ = m.callback) == null || _.call(m, "#00ff00")), Zc(d, n, () => i(d, "stickers")), s && (o(d, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(d, "stickers")
      }), d.__panoStickersNodeSurface && vs(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260])), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = f;
      return;
    }
    d.__panoSceneStateV2 = l, Zc(d, n, () => i(d, "cutout")), l || a(d, {
      buttonText: n,
      onOpen: () => i(d, "cutout")
    }), d.__panoCutoutNodeSurface && vs(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260]), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = f;
  }
  for (const d of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[d];
    e.prototype[d] = function() {
      const g = f ? f.apply(this, arguments) : void 0;
      d === "onNodeCreated" && r === "PanoramaCutout" && !l && zS(this), d === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && HS(this);
      const _ = !!this.__panoPreviewAttached;
      return (d === "onNodeCreated" || this.widgets) && u(this), d === "onAdded" && _ && Rr(this, "attach"), g;
    };
  }
}
function US(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return BS(this), n;
  };
}
function YS(e, {
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
    gd(e, t);
    const l = (c = e) => r(c, "stickers", { readOnly: !0, hideSidebar: !1 });
    Zc(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && vs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function qS({
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
    settings: [LS, Cb],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [sf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [sf.id] }],
    beforeRegisterNodeDef(l, c) {
      const u = String((c == null ? void 0 : c.name) || "");
      (u === "PanoramaStickers" || u === "Panorama Stickers") && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), u === "PanoramaStickersNode" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), u === "PanoramaStudio" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (u === "PanoramaCutout" || u === "Panorama Cutout") && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), u === "PanoramaCutoutNode" && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Ts(u) && US(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      gd(l, e), Ts(c) && YS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const XS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Zn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : XS.test(String(e.name || "")) : !1;
}
function yd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Zn(r)) : !1;
}
function JS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, u, d;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (u = l == null ? void 0 : l.stopPropagation) == null || u.call(l), (d = l == null ? void 0 : l.stopImmediatePropagation) == null || d.call(l);
  }, o = (l) => {
    if (yd(l == null ? void 0 : l.dataTransfer)) {
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
    var u;
    const c = Array.from(((u = l == null ? void 0 : l.dataTransfer) == null ? void 0 : u.files) || []).find((d) => Zn(d));
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
    const u = await new Promise((d, f) => {
      const g = new r();
      g.onload = () => d(g), g.onerror = () => f(new Error("image load failed")), g.src = o;
    });
    return {
      image: u,
      width: Math.max(1, Number(u.naturalWidth || u.width || 1)),
      height: Math.max(1, Number(u.naturalHeight || u.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function ui(e, { fetchApi: t } = {}) {
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
const Vf = /* @__PURE__ */ new WeakSet(), $f = /* @__PURE__ */ new WeakSet();
let zf = 0;
function Qc(e) {
  if (!e || typeof e != "object" || $f.has(e)) return e;
  const t = String(e.type || "preview");
  return zf += 1, e.type = `${t}:pano-${zf}`, $f.add(e), e;
}
function qs(e) {
  if (!e || typeof e != "object" || Vf.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Vf.add(e), e;
}
function hg(e, t) {
  var n, i;
  if (!t || ((i = (n = qs(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function ZS({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: zt } = ns;
l_((e) => Zr(e.id));
c_(hn);
const bd = DS(), { linkedVideoFile: mg } = $m({ app: zt, api: hn });
function eu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ns == null ? void 0 : ns.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const QS = "pano_suite.ui_settings.v1", ew = 120, tw = 2048;
function jf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(QS)) || "").trim();
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
function nw() {
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
function rw() {
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
function tu(e) {
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
  const t = tu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function iw(e, t, r) {
  gg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function nu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function vd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function yg(e) {
  return Ts(vd(e));
}
function Hf(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = zt == null ? void 0 : zt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function bg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = nu(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && _s(e), Xw(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = nu(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      _s(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      _s(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function ow(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function _s(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  ru.unregister(e), ow(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const u = String((c == null ? void 0 : c.name) || ""), d = String((c == null ? void 0 : c.type) || ""), f = eu();
      return u === f || d === f || u === "pano_preview" || d === "pano_preview" ? !0 : u === "preview" && d === "pano_preview";
    }).forEach((c) => Mw(e, c));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function aw(e, t = "#00ff00") {
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
function sw(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = Dr(e, "state_json")) == null ? void 0 : r.value) || "");
}
function un(e) {
  var s, l;
  const t = sw(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = Dr(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = Dr(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? tm(t, { backgroundColor: n, coverage: i, active: im(e) }) : aw(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function Dr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function lw(e, t) {
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
  return !n && r != null && (n = lw(e == null ? void 0 : e.graph, r)), n;
}
function cw(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function _g(e, t = []) {
  const r = cw(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    rr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Gf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Xs(e, t) {
  const r = Gf(e), n = Gf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function uw(e, t) {
  var r;
  return vg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function dw(e, t = rr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = _g(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return m_(e, a, uw);
}
const ru = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = hn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, u, d, f;
        if (!o) return;
        const a = Xs(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...dw(o)].some((g) => Xs(n, g)) || Vm(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (wg(o), (c = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (u = o.setDirtyCanvas) == null || u.call(o, !0, !0), (f = (d = o.graph) == null ? void 0 : d.setDirtyCanvas) == null || f.call(d, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function Js(e) {
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
function fw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function pw(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function hw(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function mw(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (fw(t)) return [t];
  const { filename: r, subfolder: n } = pw(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Js({
    filename: r,
    subfolder: n,
    type: o
  }));
  return hw([...i, t]);
}
function gw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Js({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Zr(e) {
  const t = zt == null ? void 0 : zt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Xs(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Xs(a, i)) return t[a];
  }
  return null;
}
function vi(e, t, r = null) {
  const n = r || Zr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function Rn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Rn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Js({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = Rn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Js(e);
}
function ca(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function lc(e) {
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
function _d(e, t) {
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
function yw(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function bw(e, t) {
  try {
    e.__panoOwnOutputRev = FS(e.__panoOwnOutputRev);
    const r = yw(t);
    let n = "";
    for (const i of r)
      if (n = Rn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), _d(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Xi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function vw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Xt(e, "background"))
    return Xi(e), null;
  const i = Zr(n), o = id(i, t, Rn);
  if (!o)
    return Xi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = _d(o, a), l = `${t.join("|")}:${s}`, c = e.__panoOwnOutputVideoCache;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Xi(e);
  const u = g_({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return u ? (e.__panoOwnOutputVideoCache = { key: l, player: u }, u.video) : null;
}
function _w(e, t = []) {
  var c, u;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = _g(e, t).map((d) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(d))).filter((d) => d >= 0), o = r.map((d, f) => ({ input: d, idx: f })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const d of a) {
    const f = r[d], g = e.graph ? e.getInputLink(d) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const _ = g.origin_id, m = vg(e, d, _);
    if (!m) continue;
    const p = Number(g.origin_slot ?? 0), O = Zr((m == null ? void 0 : m.id) ?? _), B = Array.isArray(O == null ? void 0 : O.images) ? O.images : [];
    if (B.length) {
      const ee = [];
      p >= 0 && p < B.length && ee.push(B[p]), ee.push(...B);
      for (const W of ee.filter((ce) => !ms(ce))) {
        const ce = Rn(W);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: `${ce}&pano_src=${Bc(O)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let z = [];
    try {
      z = typeof (zt == null ? void 0 : zt.getNodeImageUrls) == "function" ? zt.getNodeImageUrls(m) || [] : [];
    } catch {
      z = [];
    }
    if (Array.isArray(z) && z.length) {
      const ee = [];
      p >= 0 && p < z.length && ee.push(z[p]), ee.push(...z);
      for (const W of ee) {
        const ce = Rn(W);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: ce, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const G = Array.isArray(m == null ? void 0 : m.imgs) ? m.imgs : [];
    if (G.length) {
      const ee = [];
      p >= 0 && p < G.length && ee.push(G[p]), ee.push(...G);
      for (const W of ee) {
        const ce = Rn(W);
        if (ce)
          return String((f == null ? void 0 : f.name) || ""), { src: ce, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const x = (c = m == null ? void 0 : m.widgets) == null ? void 0 : c.find((ee) => String((ee == null ? void 0 : ee.name) || "").toLowerCase() === "image");
    if (x) {
      let ee = Rn(x.value);
      if (ee && !ee.includes("/") && !ee.includes(":") && (m.comfyClass === "LoadImage" || m.type === "LoadImage") && (ee = hn.apiURL(`/view?filename=${encodeURIComponent(ee)}&type=input&subfolder=`)), ee)
        return String((f == null ? void 0 : f.name) || ""), { src: ee, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = Xt(e, "background") ? Zr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((u = s == null ? void 0 : s.ui) == null ? void 0 : u.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const d of l) {
      const f = Rn(d);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Sw(e, t = [], r = {}) {
  const n = _w(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = mw(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const c = new Image(), u = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = c, e.__panoLinkedInputImageCache.set(s, u);
  let d = -1;
  const f = () => {
    var _, m, p, O;
    if (d += 1, d >= o.length) {
      if (((m = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : m.call(_, s)) === u && u.pendingImg === c && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
        try {
          (O = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || O.call(p, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const g = o[d];
    u.pendingResolvedSrc = g, c.src = g;
  };
  return c.onload = () => {
    var g, _, m;
    ((_ = (g = e.__panoLinkedInputImageCache) == null ? void 0 : g.get) == null ? void 0 : _.call(g, s)) === u && u.pendingImg === c && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || c.src || ""), u.img = c, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || c.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
  }, c.onerror = (g) => {
    var _, m, p, O;
    if (d + 1 < o.length) {
      f();
      return;
    }
    if (((m = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : m.call(_, s)) === u && u.pendingImg === c && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
      try {
        (O = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || O.call(p, s);
      } catch {
      }
    String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((g == null ? void 0 : g.type) || "error");
  }, f(), a && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : c;
}
function Sg(e, t = [], r = null, n = {}) {
  const i = Sw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function wg(e) {
  var t, r;
  if (e) {
    bd.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Xi(e), e.__panoWrappedErpCache = null;
  }
}
function ww(e) {
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
function Xa(e, t, r = "") {
  const n = xg(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < ew ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Wf(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function xw(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), s + Math.round(14 * r)), u = n + (o - l) * 0.5, d = i + (a - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(u, d, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", u + l * 0.5, d + c * 0.5 + 0.5), e.restore();
}
function cc(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function kw(e) {
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
function Mw(e, t) {
  return hg(e, t);
}
function ua(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = gw(r);
  if (!o && (n != null && n.external)) {
    if (!Xt(e, "external-sticker")) return null;
    const g = Zr(e == null ? void 0 : e.id), _ = ((f = g == null ? void 0 : g.ui) == null ? void 0 : f.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const m of Array.isArray(_) ? _ : [_])
      if (o = Rn(m), o) break;
  }
  if (!o) return null;
  const a = vi(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, c = n != null && n.external ? _d(o, l) : o, u = TS(o, s, l);
  return bd.get(e, u, c, (g, _) => {
    var m, p;
    _ && (n != null && n.external && e.__panoOutputFromRun && Rr(e, "image-loaded"), (p = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || p.call(m));
  }) || null;
}
function Pw(e, t) {
  var d, f, g, _;
  const r = Ew(e, t), n = Ow(t), i = Array.isArray((d = t == null ? void 0 : t.painting) == null ? void 0 : d.groups) ? t.painting.groups : [], o = new Map(
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
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = OS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var m, p;
    return (p = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : p.call(m);
  });
  const l = AS(t == null ? void 0 : t.output_preset), c = s.filter((m) => (m == null ? void 0 : m.visible) !== !1 && String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => String((m == null ? void 0 : m.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(c);
  const u = s.map((m) => {
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
  return [...a, ...u];
}
function Nw(e, t, r, n) {
  var o, a, s, l, c, u;
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
      const d = n.convertEventToCanvasOffset(t);
      if (Array.isArray(d) && d.length >= 2)
        return {
          x: Number(d[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(d[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  const i = Aw(e, t, n);
  return i || null;
}
function Cw(e, t) {
  var d, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (d = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : d.call(i), a = (t == null ? void 0 : t.ds) || ((f = zt == null ? void 0 : zt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], c = (r - Number(o.left || 0)) / s - Number(l[0] || 0), u = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(u) ? null : { x: c, y: u };
}
function Aw(e, t, r) {
  var i, o;
  const n = Cw(t, r || (zt == null ? void 0 : zt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Iw(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Ew(e, t) {
  var c, u, d, f, g, _, m, p, O, B, z, G;
  const r = (u = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.paint) == null ? void 0 : u.strokes, n = (f = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = Iw(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = ml(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((m = e.__panoPreviewPaintRevision) == null ? void 0 : m.paint) !== l.paint || ((p = e.__panoPreviewPaintRevision) == null ? void 0 : p.mask) !== l.mask || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== l.groups || ((B = e.__panoPreviewPaintRevision) == null ? void 0 : B.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((G = t == null ? void 0 : t.painting) == null ? void 0 : G.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Ow(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Fw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Tw(e, t, r) {
  const n = hd(t, r);
  n.visible && pd(e, n.boundaryEdges, { selected: !1 });
}
function Dw(e, t, r) {
  const n = hd(t, r);
  n.visible && (e.save(), pd(e, n.boundaryEdges, { selected: !0 }), ug(e, n, { accent: xS(t) }), e.restore());
}
function iu(e, t, r) {
  return km(Ws(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Zs(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ro;
}
function Lw(e) {
  return [Xt(e, "background") ? id(Zr(e.id), ["pano_input_videos"], Rn) : "", mg(e, rr)];
}
function Rw(e) {
  var o;
  if (!Xt(e, "external-sticker")) return null;
  const t = Zr(e.id), r = vi(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(Rn), meta: r };
  const i = id(t, ["pano_sticker_input_videos"], Rn);
  return i ? { src: i, meta: r } : null;
}
function Vw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function kg(e, t) {
  var r;
  return ((r = e.__panoSurfaceScene) == null ? void 0 : r.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: tr({ ...t, painting: null }) }), e.__panoSurfaceScene.sceneState;
}
function $w(e, t) {
  const r = kl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Xt(e, "background")) {
    const o = vi(e, "pano_bg_width");
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
function zw(e, t) {
  var i, o;
  const r = String(((i = Dr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Xt(e, a));
  return {
    stateText: String(((o = Dr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: un(e).coverage,
    bgWidth: r === "auto" ? $w(e, t) : null,
    run: n && vi(e, "pano_output_size") || null
  };
}
function Kf(e, t, r) {
  const n = kg(e, t), i = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = ua(e, a.id, Hs(a.source), { external: a.source.kind === "port" });
      const c = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && c) {
        const u = c.playback.stickerPicture(c.stickerStill, s), d = ad(c.playback.stickerMedia, s);
        return u ? { media: u, revision: lc(u), source: d } : null;
      }
    } else {
      const c = a.type === "external_image" || a.source_kind === "external_image", u = String(a.asset_id || "") || (c ? String(a.id || "") : "");
      s = ua(e, u, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: c });
    }
    return ca(s) ? { media: s, revision: lc(s) } : null;
  }, o = (t.painting_visible === !1 ? [] : Pw(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: ca(r) ? { media: r, revision: lc(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Pm(n, Zs(e), t.stickers, { media: i, paintLayers: o })
  };
}
function jw(e, t, r) {
  var G, x, ee, W, ce, F, pe;
  const n = String(e.__panoPreviewMode || "stickers");
  xg(e, n);
  const i = un(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (ee = (x = (G = e.__panoCutoutNodeSurface) == null ? void 0 : G.session) == null ? void 0 : x.refresh) == null || ee.call(x)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (F = (ce = (W = e.__panoStickersNodeSurface) == null ? void 0 : W.session) == null ? void 0 : ce.refresh) == null || F.call(ce));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const c = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const u = (e.__panoSurfacePlayback ? Vw(e.__panoSurfacePlayback) : vw(e, ["pano_input_videos"], () => {
    var C, Y;
    return (Y = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : Y.call(C);
  })) || Sg(
    e,
    rr,
    () => {
      var C, Y;
      return (Y = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : Y.call(C);
    },
    { preserveReadyWhilePending: !1 }
  ), d = ca(u);
  let f = null;
  const g = (C, Y) => {
    f || (f = Kf(e, i, u));
    const te = r.render({ width: C.w, height: C.h, camera: Y, ...f });
    return te && l.drawImage(te.canvas, te.x, te.y, te.width, te.height, C.x, C.y, C.w, C.h), !!te;
  };
  if (n === "cutout") {
    const C = kw(i), Y = Fw(u), te = C ? Ee(Qr(C).aspect, 0.1, 10) : d ? Ee(Number(Y.width / Y.height), 0.05, 20) : 1, J = fd(c, te);
    e.__panoCutoutNodeFrame = J;
    let U = "none";
    const le = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (C)
      if (u && !d)
        U = "loading";
      else if (d) {
        const ie = L_({ width: a, height: s }, J, C);
        [
          !ie.fallback || g(ie.fallback.rect, Uo(ie.fallback.shot)),
          g(ie.rect, Uo(ie.shot)),
          !ie.fallback || g(J, Uo(C))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const ie = e.__panoLastCutoutShot;
      ie ? (e.__panoPreviewView = tg(ie, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), d ? g(c, Ws(e.__panoPreviewView, a, s)) || (U = "loading") : u ? U = "loading" : U = "empty";
    }
    d || r.release(), r.failed && U === "loading" && (U = "none"), C && (e.__panoLastCutoutShot = { ...C }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(J.x, J.y, J.w, J.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(J.x + 0.5, J.y + 0.5, Math.max(0, J.w - 1), Math.max(0, J.h - 1)), l.restore()), U === "loading" ? (cc(e, !1), Xa(e, !0, le)) : U === "empty" ? (cc(e, !0), Xa(e, !1, "")) : (cc(e, !1), Xa(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let _ = !1;
  (!u || d) && (f = Kf(e, i, u), !f.background && !f.layers.length ? (r.release(), _ = !0) : _ = g(c, Ws(e.__panoPreviewView, a, s)));
  const m = !_ && !r.failed;
  Xa(e, m, m ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), m && xw(l, c, Wf(t, c));
  const p = iu(e, a, s);
  !u && _ && Hw(l, p, Wf(t, c));
  const O = String(((pe = i == null ? void 0 : i.active) == null ? void 0 : pe.selected_sticker_id) || ""), B = Uc(i, Zs(e)), z = _ && e.__panoStudio !== !0 ? B.find((C) => String((C == null ? void 0 : C.id) || "") === O && (C == null ? void 0 : C.visible) !== !1) : null;
  _ && B.filter((C) => C !== z && (C == null ? void 0 : C.visible) !== !1 && (C.external || C.source_kind === "external_image")).filter((C) => !ca(ua(e, C.id, null, { external: !0 }))).forEach((C) => Tw(l, C, p)), z && Dw(l, z, p);
}
function Bf(e, t, r, n, i = 1) {
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
function Hw(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(In(c, s));
    Bf(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(In(s, c));
    Bf(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: In(0, 0) },
    { name: "Right", dir: In(90, 0) },
    { name: "Back", dir: In(180, 0) },
    { name: "Left", dir: In(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function ou(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Gw(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Hn(e, t) {
  return Gw(e, t) ? !1 : (ou(e), !0);
}
function Uf() {
  var r;
  const e = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Ww(e) {
  var r;
  if (!e) return;
  const t = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Kw(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !gg(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function Bw(e, t = 0, r = null, n = 1200) {
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
      e.__panoUserResized = !0, t == null || t(), i && Uw(e, 180, t);
    }
  };
}
function Uw(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Lo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Yw = /* @__PURE__ */ new WeakMap();
function Mg(e, t) {
  return Vm(Yw, e, t) ? !1 : (bw(e, t), wg(e), Lo(e), !0);
}
async function qw(e) {
  var r, n;
  const t = await p_(e, zt, hn);
  t && (Mg(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Xw(e, t = {}) {
  var ze;
  const r = t.__allowStandalone === !0, n = yg(e);
  if (n && !r) {
    vd(e);
    return;
  }
  n && Kw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = i && e.__panoStudio === !0, a = i && !o, s = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: Hf(e)
  }, c = "dom", u = l.signature || Hf(e);
  if (Number(e.__panoRebindGeneration || 0), nu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, tu(e), e.__panoFrontendSig = u, e.__panoStickersPath = c, (ze = e.__panoDomPreview) != null && ze.widget || (e.__panoLegacyPreviewHooked && _s(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const d = t.noPreview === !0, f = d ? 0 : 56, g = d ? 0 : O_, _ = document.createElement("div");
  if (rw(), _.className = "pano-node-preview-dom", _.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && _.classList.add("pano-node-preview--no-preview"), _.setAttribute("data-capture-wheel", "true"), _.tabIndex = 0, _.style.cssText = [
    "width:100%",
    d ? "height:auto" : "height:100%",
    g > 0 ? `min-height:${g}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), d) {
    const q = qs(Qc(
      e.addDOMWidget(eu(), "preview", _, Yf(e, null))
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
  const O = document.createElement("div");
  O.style.cssText = [
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
  ].join(";"), O.textContent = "Connect ERP image", m.appendChild(p), m.appendChild(O), _.appendChild(m);
  const B = kh(_), z = document.createElement("div");
  z && (z.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", z.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", _.appendChild(z)), iw(e, 120, 120), Lo(e);
  let G = null;
  try {
    Bw(e, f, () => {
      var q, Ce;
      return (Ce = (q = e.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : Ce.call(q);
    }), G = qs(Qc(e.addDOMWidget(
      eu(),
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
  const x = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, ee = wS(), W = () => {
    x.destroyed || (x.needsDraw = !0, !x.inTick && !x.raf && (x.raf = requestAnimationFrame(oe)));
  }, ce = Am(W), F = /* @__PURE__ */ ao(i ? {
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
  let pe = null;
  if (i && e.__panoSceneStateV2) {
    const [q, Ce] = [0, 1].map(() => {
      const We = ya(document, "node.playback");
      return We.playsInline = !0, We.preload = "auto", We.crossOrigin = "anonymous", We.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", m.appendChild(We), We;
    }), Ve = rn({ label: "node.still" });
    Ve.__panoFrameIdx = 0;
    const Ie = rn({ label: "node.port-still" });
    Ie.__panoFrameIdx = 0;
    const je = I_({
      video: q,
      stickerVideo: Ce,
      createImage: (We, Ye) => {
        const at = new Image();
        return at.onload = Ye, at.onerror = Ye, at.src = We, at;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (We) => requestAnimationFrame(We),
        cancelFrame: (We) => cancelAnimationFrame(We)
      },
      readState: () => un(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: W,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ye;
        if (!(q.videoWidth > 0 && q.videoHeight > 0)) return;
        const We = Math.min(1, tw / q.videoWidth);
        Ve.width = Math.round(q.videoWidth * We), Ve.height = Math.round(q.videoHeight * We), (Ye = Ve.getContext("2d")) == null || Ye.drawImage(q, 0, 0, Ve.width, Ve.height), Ve.__panoFrameIdx += 1, W();
      },
      onStickerCapture: () => {
        var We;
        Ce.videoWidth > 0 && Ce.videoHeight > 0 && (Ie.width = Ce.videoWidth, Ie.height = Ce.videoHeight, (We = Ie.getContext("2d")) == null || We.drawImage(Ce, 0, 0), Ie.__panoFrameIdx += 1, W());
      },
      onChange: () => {
        F.playing = je.playing, W();
      }
    });
    pe = { playback: je, video: q, still: Ve, stickerVideo: Ce, stickerStill: Ie, stickerSource: "" }, e.__panoSurfacePlayback = pe;
  }
  const C = () => {
    var at;
    const { playback: q, still: Ce, stickerStill: Ve } = pe, Ie = qc(m, !!((at = e.flags) != null && at.collapsed)), je = q.source, We = Ie ? Rw(e) : null, Ye = q.follow({
      shown: Ie,
      sources: Ie ? Lw(e) : [],
      state: un(e),
      sticker: We
    });
    ((We == null ? void 0 : We.src) || "") !== pe.stickerSource && (pe.stickerSource = (We == null ? void 0 : We.src) || "", ea(Ve)), q.source !== je && (ea(Ce), Ce.__panoFrameIdx = 0), F.playable = Ye, F.playing = q.playing;
  }, Y = () => {
    var Ce, Ve;
    const q = ((Ce = e.__panoOwnOutputVideoCache) == null ? void 0 : Ce.player) ?? null;
    q && !qc(m, !!((Ve = e.flags) != null && Ve.collapsed)) && q.pause(), i && (F.playable = !!q && !q.failed(), F.playing = !!(q != null && q.playing));
  }, te = () => {
    var q;
    pe == null || pe.playback.pause(), (q = e.__panoOwnOutputVideoCache) == null || q.player.pause();
  };
  let J = null;
  const U = (i ? C_ : V_)({
    readState: () => un(e),
    publishLiveState: (q) => {
      q ? (J = q, e.__panoLiveStateOverride = q) : (e.__panoLiveStateOverride === J && (e.__panoLiveStateOverride = null), J = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, W();
    },
    commitState: (q) => {
      var Ie, je, We, Ye;
      const Ce = Dr(e, "state_json");
      if (!Ce) return;
      om(e, q.active);
      const Ve = sm(e, q);
      lm(e, Ve, String(Ce.value ?? "")) || (Ce.value = Ve, (Ie = Ce.callback) == null || Ie.call(Ce, Ve), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ye = (We = e.graph) == null ? void 0 : We.setDirtyCanvas) == null || Ye.call(We, !0, !0));
    },
    onChange: (q) => Object.assign(F, q)
  }), ie = i ? dg(e, (q = "sync", Ce = null) => {
    var Ue;
    if (!i || !e.graph || !U || U.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Ht = Xt(e, "external-sticker"), bn = un(e).stickers.find((_r) => _r.source.kind === "port");
      return U.apply({
        type: "sync-port",
        value: Ym(e, {
          pose: Ht ? vi(e, "pano_sticker_input_pose", Ce) : null,
          image: bn ? ua(e, bn.id, null, { external: !0 }) : null
        })
      });
    }
    const Ve = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Ht) => String((Ht == null ? void 0 : Ht.name) || "") === "sticker_image") : -1, Ie = Ve >= 0 ? ((Ue = e.getInputLink(Ve)) == null ? void 0 : Ue.id) ?? null : null;
    if (Ie == null)
      return U.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Xt(e, "external-sticker")) return !1;
    const je = vi(e, "pano_sticker_input_pose", Ce), We = Array.isArray(je) ? je[0] : je, Ye = String(vi(e, "pano_sticker_input_state_hash", Ce) ?? ""), at = e.__panoPreviewView || { yaw: 0, pitch: 0 }, kt = un(e), Ft = (Array.isArray(kt == null ? void 0 : kt.stickers) ? kt.stickers : []).find((Ht) => String((Ht == null ? void 0 : Ht.id) || "") === "sticker_image_1"), bt = ua(e, "sticker_image_1", null, { external: !0 }), Dt = We && typeof We == "object" ? We : Ft || { yaw_deg: at.yaw, pitch_deg: at.pitch, hFOV_deg: 30, rot_deg: 0 };
    return U.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ie,
        stateHash: Ye,
        pose: Dt,
        imageWidth: Number((bt == null ? void 0 : bt.naturalWidth) || (bt == null ? void 0 : bt.width) || 0),
        imageHeight: Number((bt == null ? void 0 : bt.naturalHeight) || (bt == null ? void 0 : bt.height) || 0)
      }
    });
  }) : () => {
  };
  let k = 0;
  const L = async (q) => {
    if (!i || !U || !Zn(q)) return !1;
    te();
    const Ce = `asset_${Math.random().toString(16).slice(2, 10)}`, Ve = `st_${Math.random().toString(16).slice(2, 10)}`, Ie = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    k += 1, F.importing = !0;
    const je = To(e, `add:${Ce}`, async () => {
      const We = await Do(q), Ye = await ui(q, {
        fetchApi: (at, kt) => hn.fetchApi(at, kt)
      });
      return E(), U.apply({
        type: "add-sticker",
        value: {
          stickerId: Ve,
          assetId: Ce,
          asset: Ye,
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
      k = Math.max(0, k - 1), F.importing = k > 0, W();
    }
  };
  let Z = null, V = null, fe = null, Se = !1;
  const Q = () => {
    var q;
    return fe && (clearTimeout(fe), fe = null), Se ? (Se = !1, ((q = U == null ? void 0 : U.commitGesture) == null ? void 0 : q.call(U)) ?? !1) : !1;
  }, E = () => {
    var Ie, je, We;
    const q = Q(), Ce = (Z == null ? void 0 : Z.pointerId) ?? (V == null ? void 0 : V.pointerId);
    if (Z = null, V = null, Ce != null) {
      try {
        (Ie = p.hasPointerCapture) != null && Ie.call(p, Ce) && ((je = p.releasePointerCapture) == null || je.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Ve = ((We = U == null ? void 0 : U.commitGesture) == null ? void 0 : We.call(U)) ?? !1;
    return q || Ve;
  }, X = () => {
    var Ie, je, We;
    const q = Q(), Ce = Z == null ? void 0 : Z.pointerId;
    if (Z = null, Ce != null) {
      try {
        (Ie = p.hasPointerCapture) != null && Ie.call(p, Ce) && ((je = p.releasePointerCapture) == null || je.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Ve = ((We = U == null ? void 0 : U.cancelGesture) == null ? void 0 : We.call(U)) ?? !1;
    return q || Ve;
  }, ae = () => E();
  U && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ae));
  let be = null, we = !1;
  if (z && U)
    try {
      md(), be = Eu(o ? gS : i ? uS : nS, {
        model: F,
        onAction: (q) => {
          var Ie, je, We;
          if ((q == null ? void 0 : q.type) === "toggle-playback") {
            E(), pe ? pe.playback.toggle() : (Ie = e.__panoOwnOutputVideoCache) == null || Ie.player.toggle(), W();
            return;
          }
          if (te(), (q == null ? void 0 : q.type) === "open-editor") {
            E(), i || (F.aspectOpen = !1), (je = e.__panoOpenEditor) == null || je.call(e);
            return;
          }
          if (i) {
            if ((q == null ? void 0 : q.type) === "add-image-file") {
              L(q.file);
              return;
            }
            U.apply(q) && W();
            return;
          }
          if ((q == null ? void 0 : q.type) === "toggle-aspect") {
            F.aspectOpen = !F.aspectOpen;
            return;
          }
          if ((q == null ? void 0 : q.type) === "close-aspect") {
            F.aspectOpen = !1;
            return;
          }
          let Ce = q;
          if ((q == null ? void 0 : q.type) === "add-frame") {
            const Ye = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            Ce = {
              ...q,
              ...T_(Ye, {
                width: p.width,
                height: p.height
              })
            };
          } else if ((q == null ? void 0 : q.type) === "delete-frame") {
            const Ye = bi(un(e));
            Ye && (e.__panoPreviewView = tg(Ye, {
              width: p.width,
              height: p.height
            }));
          }
          const Ve = ((We = e.__panoCutoutNodeFrame) == null ? void 0 : We.safeRect) || null;
          F.aspectOpen = !1, U.apply({ ...Ce, safeRect: Ve }) && W();
        }
      }), be.mount(z), we = !0;
    } catch {
      be = null, we = !1;
    }
  const A = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    pe && C(), W();
  }) : null;
  A == null || A.observe(m);
  const oe = (q) => {
    var Ve, Ie;
    x.raf = 0, x.inTick = !0;
    let Ce = !1;
    try {
      if (Ce = b.stepInertia(q), (x.needsDraw || Ce) && (x.needsDraw = !1, pe ? C() : Y(), (Ve = e.flags) != null && Ve.collapsed || jw(e, p, ce), F.viewUnavailable = ce.failed, o)) {
        const je = ee(zw(e, pe), () => kg(e, un(e)));
        je && (F.status = je);
      }
    } finally {
      x.inTick = !1;
    }
    (Ce || x.needsDraw) && !x.raf && (x.raf = requestAnimationFrame(oe)), nw() && (!e.__panoDebugLastTs || q - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = q, e.__panoPreviewMode, tu(e), Ao(_), Ao(m), Ao(p), Ao(_.parentElement), Ao((Ie = _.parentElement) == null ? void 0 : Ie.parentElement), Number(p.width || 0), Number(p.height || 0), void 0);
  }, b = Lu({
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
      const q = jf();
      return {
        x: q.invert_view_x ? -1 : 1,
        y: q.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      W();
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
    const Ce = un(e), Ve = Lf(
      Uc(Ce, Zs(e)),
      String(((Ie = Ce == null ? void 0 : Ce.active) == null ? void 0 : Ie.selected_sticker_id) || ""),
      $(q),
      iu(e, p.width, p.height)
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
    var at, kt, Ft, bt, Dt, tn, Ue, Ht, bn, _r, Hr;
    if (!Hn(q, S) || q.button !== 0) return;
    if (!i) {
      const on = bi(un(e)), kn = e.__panoCutoutNodeFrame;
      if (!on) {
        (at = _.focus) == null || at.call(_, { preventScroll: !0 }), (kt = p.setPointerCapture) == null || kt.call(p, q.pointerId), p.style.cursor = "grabbing", b.startDrag(q.clientX, q.clientY, q.pointerId);
        return;
      }
      if (on.locked === !0 || !kn || !U) return;
      const Gr = $(q);
      let Sr;
      if (q.shiftKey) {
        const Xn = rg({
          frame: kn,
          point: Gr,
          startRollDeg: Number(on.roll_deg ?? on.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Xn) return;
        Sr = { kind: "roll", pointerId: q.pointerId, rollGesture: Xn };
      } else {
        const Xn = ((Ft = un(e)) == null ? void 0 : Ft.ui_settings) || jf();
        Sr = {
          kind: "pan",
          pointerId: q.pointerId,
          startPoint: Gr,
          startShot: { ...on },
          focalPx: Si(kn, on),
          invertX: Xn.invert_view_x === !0,
          invertY: Xn.invert_view_y === !0
        };
      }
      E(), (bt = _.focus) == null || bt.call(_, { preventScroll: !0 }), (Dt = p.setPointerCapture) == null || Dt.call(p, q.pointerId), p.style.cursor = "grabbing", U.beginGesture(), Z = Sr;
      return;
    }
    if (!s) return;
    const Ce = $(q), Ve = un(e), Ie = String(((tn = Ve == null ? void 0 : Ve.active) == null ? void 0 : tn.selected_sticker_id) || ""), je = iu(e, p.width, p.height);
    (Ue = _.focus) == null || Ue.call(_, { preventScroll: !0 });
    const We = () => Lf(Uc(Ve, Zs(e)), Ie, Ce, je);
    let Ye = o ? null : We();
    if (Ye && (pe != null && pe.playback.playing) && (te(), Ye = We()), Ye && U) {
      if (b.stopMotion(), E(), String(((Ht = Ye.item) == null ? void 0 : Ht.id) || "") !== Ie && U.apply({ type: "select-sticker", id: Ye.item.id }), ((bn = Ye.item) == null ? void 0 : bn.locked) === !0) {
        W();
        return;
      }
      const on = Ce, kn = Ye.geometry.center;
      V = {
        active: !0,
        kind: Ye.hit.kind,
        pointerId: q.pointerId,
        startPoint: on,
        startCenter: { ...kn },
        startSticker: { ...Ye.item },
        startDistance: Math.max(1, Math.hypot(on.x - kn.x, on.y - kn.y)),
        startAngle: Math.atan2(on.y - kn.y, on.x - kn.x),
        projection: je
      }, U.beginGesture(), (_r = p.setPointerCapture) == null || _r.call(p, q.pointerId), p.style.cursor = Ye.hit.kind === "rotate" ? "grabbing" : Ye.hit.kind === "move" ? "move" : Ye.hit.cursor, W();
      return;
    }
    (Hr = p.setPointerCapture) == null || Hr.call(p, q.pointerId), p.style.cursor = "grabbing", b.startDrag(q.clientX, q.clientY, q.pointerId);
  }), p.addEventListener("pointermove", (q) => {
    if (!i) {
      if (!Z) {
        if (!b.state.drag.active) return;
        Hn(q, S), b.moveDrag(q.clientX, q.clientY, "pano");
        return;
      }
      if (Z.pointerId !== q.pointerId || !U) return;
      if (Hn(q, S), Z.kind === "pan") {
        const Ve = $(q);
        U.updateGesture({
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
      Z.rollGesture = Ce.gesture, U.updateGesture({ type: "set-roll", value: Ce.rollDeg });
      return;
    }
    if (!V && !b.state.drag.active) {
      H(q);
      return;
    }
    if (V) {
      if (V.pointerId !== q.pointerId || !U) return;
      Hn(q, S);
      const Ce = $(q);
      let Ve = V.startSticker;
      if (V.kind === "move")
        Ve = PS(
          V.startSticker,
          {
            x: V.startCenter.x + Ce.x - V.startPoint.x,
            y: V.startCenter.y + Ce.y - V.startPoint.y
          },
          V.projection
        );
      else if (V.kind === "scale") {
        const Ie = Math.hypot(Ce.x - V.startCenter.x, Ce.y - V.startCenter.y);
        Ve = NS(V.startSticker, V.startDistance, Ie);
      } else if (V.kind === "rotate") {
        const Ie = Math.atan2(Ce.y - V.startCenter.y, Ce.x - V.startCenter.x);
        Ve = CS(V.startSticker, V.startAngle, Ie, q.shiftKey === !0);
      }
      U.updateGesture({ type: "set-transform", value: Ve }), W();
      return;
    }
    !s || !b.state.drag.active || (Hn(q, S), b.moveDrag(q.clientX, q.clientY, "pano"));
  });
  const v = () => {
    var Ce, Ve;
    if (!Z && !V) {
      if (!b.state.drag.active) return;
      b.endDrag(), p.style.cursor = "grab", W();
      return;
    }
    if (!U) return;
    const q = (Z == null ? void 0 : Z.pointerId) ?? (V == null ? void 0 : V.pointerId);
    Z = null, V = null;
    try {
      (Ce = p.hasPointerCapture) != null && Ce.call(p, q) && ((Ve = p.releasePointerCapture) == null || Ve.call(p, q));
    } catch {
    }
    U.cancelGesture(), p.style.cursor = "grab", W();
  }, w = (q, Ce = !1) => {
    var Ve, Ie, je, We;
    if (!i) {
      if (!Z) {
        if (!b.state.drag.active) return;
        Hn(q, S), (Ve = p.releasePointerCapture) == null || Ve.call(p, q.pointerId), p.style.cursor = "grab", b.endDrag(), W();
        return;
      }
      if (Z.pointerId !== q.pointerId || !U) return;
      Hn(q, S), Z = null, (Ie = p.releasePointerCapture) == null || Ie.call(p, q.pointerId), p.style.cursor = "grab", Ce ? U.cancelGesture() : U.commitGesture(), H(q), W();
      return;
    }
    if (V) {
      if (V.pointerId !== q.pointerId || !U) return;
      Hn(q, S), V = null, (je = p.releasePointerCapture) == null || je.call(p, q.pointerId), p.style.cursor = "grab", Ce ? U.cancelGesture() : U.commitGesture(), W();
      return;
    }
    !s || !b.state.drag.active || (Hn(q, S), (We = p.releasePointerCapture) == null || We.call(p, q.pointerId), p.style.cursor = "grab", b.endDrag(), W());
  };
  p.addEventListener("pointerup", w), p.addEventListener("pointercancel", (q) => w(q, !0)), p.addEventListener("lostpointercapture", v), p.addEventListener("pointerleave", (q) => {
    !i && Z || V || b.state.drag.active && w(q);
  });
  const D = (q) => {
    const Ce = document.activeElement;
    if (Ce !== _ && !_.contains(Ce)) return;
    if (q.key === "Escape" && (Z || V) && U) {
      v(), ou(q);
      return;
    }
    if (!i || o || q.key !== "Delete" && q.key !== "Backspace" || !U) return;
    const Ve = q.target, Ie = String((Ve == null ? void 0 : Ve.tagName) || "").toUpperCase();
    Ie === "INPUT" || Ie === "TEXTAREA" || Ve != null && Ve.isContentEditable || F.canDelete === !0 && (te(), E(), U.apply({ type: "delete-selected" }) && W(), ou(q));
  };
  window.addEventListener("keydown", D, !0);
  const M = ZS({
    requestFrame: (q) => requestAnimationFrame(q),
    cancelFrame: (q) => cancelAnimationFrame(q),
    restore: (q) => Ww(q)
  }), P = (q) => {
    var Ve, Ie, je, We, Ye, at;
    if (!Hn(q, S)) return;
    if (!i) {
      const kt = bi(un(e));
      if (kt && kt.locked !== !0 && U) {
        const Ft = Es(q);
        Ft !== 0 && (Se || (E(), U.beginGesture(), Se = !0), U.updateGesture({
          type: "step-fov",
          direction: Ft
        }) ? (fe && clearTimeout(fe), fe = setTimeout(Q, 180), W()) : U.hasGestureChanges() || (U.cancelGesture(), Se = !1));
      } else if (!kt) {
        const Ft = Uf();
        b.applyWheelEvent(q) && W(), M.schedule(Ft);
      }
      (Ve = q.preventDefault) == null || Ve.call(q), (Ie = q.stopPropagation) == null || Ie.call(q), (je = q.stopImmediatePropagation) == null || je.call(q);
      return;
    }
    if (!s) return;
    const Ce = Uf();
    b.applyWheelEvent(q) && W(), (We = q.preventDefault) == null || We.call(q), (Ye = q.stopPropagation) == null || Ye.call(q), (at = q.stopImmediatePropagation) == null || at.call(q), M.schedule(Ce);
  }, I = i ? [m, p] : [m];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((q) => {
    I.forEach((Ce) => Ce.addEventListener(q, P, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((q) => {
    p.addEventListener(q, (Ce) => Hn(Ce, S)), m.addEventListener(q, (Ce) => Hn(Ce, S));
  });
  const K = Dr(e, "state_json");
  let re = null, me = null;
  K && !K.__panoPreviewPatchedCb && (re = K.callback, me = (q) => {
    const Ce = re ? re(q) : void 0;
    return W(), Ce;
  }, K.callback = me, K.__panoPreviewPatchedCb = me);
  const j = Dr(e, "bg_color");
  let de = null, _e = null;
  j && !j.__panoPreviewPatchedCb && (de = j.callback, _e = (q) => {
    const Ce = de ? de(q) : void 0;
    return W(), Ce;
  }, j.callback = _e, j.__panoPreviewPatchedCb = _e);
  const ke = o ? Dr(e, "output_size") : null, ue = ke == null ? void 0 : ke.callback, ve = ke ? (q) => {
    const Ce = ue ? ue(q) : void 0;
    return W(), Ce;
  } : null;
  ke && (ke.callback = ve);
  const Ne = e.onRemoved, h = e.onResize, R = e.onExecuted, N = e.onDragOver, y = e.onDragDrop;
  let T = null;
  const se = () => {
    i && (F.dropActive = !0, T && clearTimeout(T), T = setTimeout(() => {
      T = null, F.dropActive = !1;
    }, 140));
  }, ge = a ? function(q) {
    return (N ? N.apply(this, arguments) : !1) === !0 ? !0 : yd(q == null ? void 0 : q.dataTransfer) ? (se(), !0) : !1;
  } : null, he = a ? function(q) {
    var Ie;
    if ((y ? y.apply(this, arguments) : !1) === !0) return !0;
    const Ve = Array.from(((Ie = q == null ? void 0 : q.dataTransfer) == null ? void 0 : Ie.files) || []).find((je) => Zn(je));
    return Ve ? (T && clearTimeout(T), T = null, F.dropActive = !1, L(Ve), !0) : !1;
  } : null;
  a && (e.onDragOver = ge, e.onDragDrop = he);
  const ne = a ? JS(_, {
    onActive: (q) => {
      if (q) {
        se();
        return;
      }
      T && clearTimeout(T), T = null, F.dropActive = !1;
    },
    onDrop: (q) => {
      L(q);
    }
  }) : () => {
  }, ye = function(q) {
    e.__panoOutputFromRun = !0;
    const Ce = Mg(e, q);
    Rr(e, Ce ? "executed" : "sync", q), W();
    const Ve = R ? R.apply(this, arguments) : void 0;
    return Lo(e), Ve;
  };
  e.onExecuted = ye;
  const Me = e.onConnectionsChange, Ae = function(q, Ce) {
    const Ve = kf(e, q, Ce, rd), Ie = kf(e, q, Ce, rr), je = arguments, We = Me ? Me.apply(this, je) : void 0, Ye = () => {
      x.destroyed || (Ie && ww(e), Ve && Rr(e, "connection-change"), Lo(e), W());
    };
    return Ye(), queueMicrotask(Ye), We;
  };
  e.onConnectionsChange = Ae;
  const Le = function() {
    const q = h ? h.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, W(), q;
  };
  e.onResize = Le;
  const Re = function() {
    return He(), ru.unregister(this), Ne ? Ne.apply(this, arguments) : void 0;
  };
  e.onRemoved = Re;
  const He = () => {
    var q, Ce, Ve, Ie, je, We, Ye, at, kt;
    x.destroyed = !0, (q = A == null ? void 0 : A.disconnect) == null || q.call(A), i ? E() : X(), p.removeEventListener("lostpointercapture", v), ne(), B(), window.removeEventListener("keydown", D, !0), (Ve = (Ce = e.__panoStateFlushers) == null ? void 0 : Ce.delete) == null || Ve.call(Ce, ae), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ie = U == null ? void 0 : U.destroy) == null || Ie.call(U), (je = be == null ? void 0 : be.unmount) == null || je.call(be), pe && (pe.playback.dispose(), pe.video.remove(), pe.stickerVideo.remove(), e.__panoSurfacePlayback === pe && (e.__panoSurfacePlayback = null)), ce.dispose(), e.__panoSurfaceScene = null, (Ye = (We = e.__panoRasterObjectSurfaceCache) == null ? void 0 : We.dispose) == null || Ye.call(We), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ie(), M.dispose(), T && clearTimeout(T), T = null, bd.disposeOwner(e), Xi(e), x.raf && cancelAnimationFrame(x.raf), x.raf = 0, ((at = e.__panoCutoutNodeSurface) == null ? void 0 : at.session) === U && (e.__panoCutoutNodeSurface = null), ((kt = e.__panoStickersNodeSurface) == null ? void 0 : kt.session) === U && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Le && (e.onResize = h), e.onExecuted === ye && (e.onExecuted = R), e.onConnectionsChange === Ae && (e.onConnectionsChange = Me), me && (K == null ? void 0 : K.callback) === me && (K.callback = re), me && (K == null ? void 0 : K.__panoPreviewPatchedCb) === me && delete K.__panoPreviewPatchedCb, _e && (j == null ? void 0 : j.callback) === _e && (j.callback = de), _e && (j == null ? void 0 : j.__panoPreviewPatchedCb) === _e && delete j.__panoPreviewPatchedCb, ve && ke.callback === ve && (ke.callback = ue), e.onDragOver === ge && (e.onDragOver = N), e.onDragDrop === he && (e.onDragDrop = y), e.onRemoved === Re && (e.onRemoved = Ne);
  };
  e.__panoDomRestore = He, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = U && we && !i ? { session: U, model: F } : null, e.__panoStickersNodeSurface = U && we && i ? { session: U, model: F } : null, e.__panoDomPreview = {
    widget: G,
    root: _,
    canvas: p,
    requestDraw: W,
    state: x,
    emptyHintEl: O,
    nodeSurface: e.__panoCutoutNodeSurface
  }, ru.register(e), e.graph && Rr(e, "attach"), W();
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
    vd(e);
    return;
  }
  bg(e).attach(t);
}
function Jw(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Zw(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, c = Math.max(0, Number.isFinite(s) ? s : 0) * o, u = Number(r), d = u > 0 ? u : 1 / 0, f = Math.max(l, c);
  let g = f > 0 ? Math.min(1, d / f) : 1;
  return n && l > 0 && c > 0 && (g = Math.min(g, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(c * g))
  };
}
function Qw({
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
  }, u = () => c();
  return (g = t == null ? void 0 : t.addEventListener) == null || g.call(t, "fullscreenchange", u), c(), { toggle: async () => {
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
      if (a = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", u), l())
        try {
          const O = (m = t.exitFullscreen) == null ? void 0 : m.call(t);
          (p = O == null ? void 0 : O.catch) == null || p.call(O, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const ex = { class: "pano-preview-node-surface" }, tx = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", ex, [
      Be(Qt, {
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
      e.model.viewUnavailable ? (Te(), zn(Ml, { key: 0 })) : pt("", !0)
    ]));
  }
}, Ja = 140, nx = 180, Jf = 40, uc = 10;
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
function Pg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function rx(e) {
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
function au(e) {
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
function ix(e) {
  var n, i;
  const t = au(e == null ? void 0 : e.id), r = [
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
function ox(e, t = "erp_image") {
  var g, _, m, p, O, B, z;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((G) => String((G == null ? void 0 : G.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((G, x) => String((G == null ? void 0 : G.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(x))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (m = (_ = (g = Qn) == null ? void 0 : g.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : m.call(_, o), s = au(o), l = au(e == null ? void 0 : e.id), c = [
    (p = l == null ? void 0 : l.ui) == null ? void 0 : p.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (O = s == null ? void 0 : s.ui) == null ? void 0 : O.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const G of c)
    if (Array.isArray(G))
      for (const x of G) {
        const ee = Ji(x);
        if (ee) return ee;
      }
  let u = [];
  try {
    u = typeof ((B = Qn) == null ? void 0 : B.getNodeImageUrls) == "function" ? Qn.getNodeImageUrls(a) || [] : [];
  } catch {
    u = [];
  }
  if (Array.isArray(u) && u.length > 0)
    for (const G of u) {
      const x = Ji(G);
      if (x) return x;
    }
  if (a) {
    const G = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const x of G) {
      const ee = Ji(x);
      if (ee) return ee;
    }
  }
  const d = (z = a == null ? void 0 : a.widgets) == null ? void 0 : z.find((G) => String((G == null ? void 0 : G.name) || "").toLowerCase() === "image"), f = String((d == null ? void 0 : d.value) || "").trim();
  return f ? hn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function dc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function tp(e, t, r, n, i, o, a) {
  var c, u, d;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !Pg(o) || r <= 1 || n <= 1) {
    dc(t, r, n);
    return;
  }
  if (a.failed) {
    dc(t, r, n);
    return;
  }
  const s = Number(((d = (u = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : u.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: Ws(i, r, n),
    background: { media: o, revision: rx(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : dc(t, r, n);
}
function np(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class ax {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Am(() => this.requestDraw()), this.controller = Lu({
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
        `min-height:${Ja}px`,
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
          return Ja;
        },
        getHeight() {
          return Ja;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = qs(Qc(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Ja, Number(o.minHeight || 0)),
            minWidth: Math.max(nx, Number(o.minWidth || 0))
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
      return md(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ao({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Qw({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = Eu(tx, {
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
      Jw(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Pg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? qc(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Qn.canvas) != null && n.graph) || this.node.graph === Qn.canvas.graph);
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
      var l, c, u, d, f, g;
      const o = Nw(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !np(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), s && ((u = this.setDirtyCanvas) == null || u.call(this, !0, !1)), (d = r == null ? void 0 : r.preventDefault) == null || d.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (g = r == null ? void 0 : r.stopImmediatePropagation) == null || g.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - uc * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Jf - uc);
    return { x: uc, y: Jf, w: t, h: r };
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
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Zw(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = ix(this.node);
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
    const r = ox(this.node, this.imageInputName);
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
    var r, n, i, o, a, s, l, c, u, d, f, g, _, m, p, O;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (d = (u = this.surfaceHost) == null ? void 0 : u.remove) == null || d.call(u), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (g = this.root) == null ? void 0 : g.remove) == null || _.call(g);
    } catch {
    }
    try {
      hg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((O = (p = (m = this.node) == null ? void 0 : m.widgets) == null ? void 0 : p.find) == null ? void 0 : O.call(p, (B) => (B == null ? void 0 : B.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function sx(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new ax(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function Ng(e, t, r) {
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
function Sd(e) {
  return !!(e != null && e.prototype);
}
function da(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function lx(e, t = {}) {
  Sd(e) || sx(e, {
    ...t,
    onOpen: da(e, t.onOpen)
  });
}
function cx(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Sd(e)) {
    Xf(e, {
      ...n,
      onOpen: da(e, t.onOpen)
    });
    return;
  }
  Ng(e, "stickers_node_preview", (i) => {
    Xf(i, {
      ...n,
      onOpen: da(i, t.onOpen)
    });
  });
}
function ux(e, t = {}) {
  if (!Sd(e)) {
    qf(e, {
      ...t,
      onOpen: da(e, t.onOpen)
    });
    return;
  }
  Ng(e, "cutout_preview", (r) => {
    qf(r, {
      ...t,
      onOpen: da(r, t.onOpen)
    });
  });
}
const An = {
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
}, Ar = "pen";
function rp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function dx({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
}), fx = new Set(Object.values(dt));
function px({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), u = 1, d = 0;
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
      for (const B of p.values()) f(() => B(m));
      if (s) return;
      const O = l;
      l = /* @__PURE__ */ new Set(), (O.size || n()) && f(() => r(m, O));
    } finally {
      a = !1;
    }
    (l.size || c.size || n()) && g();
  }
  return {
    requestDraw(m) {
      if (!fx.has(m)) throw new Error(`Unknown draw reason: ${m}`);
      m === dt.STATE && (d += 1), l.add(m), g();
    },
    requestFrame(m) {
      const p = u++;
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
      return d;
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
const hx = { class: "pano-floating-right" }, mx = {
  key: 0,
  class: "pano-floating-space"
}, gx = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, yx = ["data-settled"], bx = ["data-ready", "data-settled"], vx = ["aria-label", "data-tip"], _x = {
  key: 1,
  class: "pano-camera-preview-label"
}, Sx = {
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
      Pe("div", hx, [
        e.space ? Lr((Te(), De("div", mx, [
          Pe("div", gx, [
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
          Be(Qt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [_i, e.space.visible]
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
            Be(Vt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, vx)) : pt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), De("div", _x, nt(e.preview.label || "Preview unavailable"), 1)) : pt("", !0)
        ], 14, bx)
      ], 8, yx), [
        [_i, e.preview.visible]
      ])
    ], 64));
  }
}, wx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, xx = ["y2", "transform"], kx = ["transform"], Mx = {
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
      (Te(), De("svg", wx, [
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
        }, null, 10, xx))), 128)),
        Pe("g", { transform: n.value }, [...o[0] || (o[0] = [
          Pe("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, kx),
        o[2] || (o[2] = Pe("circle", {
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
}, Px = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: ht(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(ag, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(Qt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(Mx, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Nx = ["aria-label"], Cx = { class: "pano-canvas-confirm-title" }, Ax = { class: "pano-canvas-confirm-text" }, Ix = { class: "pano-canvas-confirm-actions" }, Ex = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Ox = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Yt(null), n = /* @__PURE__ */ Yt(null);
    let i = null;
    function o() {
      const d = n.value;
      return d ? Array.from(d.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function a(d) {
      const f = n.value;
      if (!f) return;
      const g = f.querySelector(`[data-action='${d}']`);
      g instanceof HTMLButtonElement && g.click();
    }
    function s() {
      var m;
      const d = n.value;
      if (!d) return;
      const f = d.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const _ = o()[0] || d;
      (m = _ == null ? void 0 : _.focus) == null || m.call(_);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(d) {
      var O;
      if (d.defaultPrevented) return;
      if (d.key === "Escape") {
        d.preventDefault(), d.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (d.key !== "Tab") return;
      const f = o(), g = n.value;
      if (!f.length) {
        d.preventDefault(), (O = g == null ? void 0 : g.focus) == null || O.call(g);
        return;
      }
      const _ = f[0], m = f[f.length - 1], p = document.activeElement;
      if (d.shiftKey) {
        (p === _ || p === g || !(g != null && g.contains(p))) && (d.preventDefault(), m.focus());
        return;
      }
      (p === m || !(g != null && g.contains(p))) && (d.preventDefault(), _.focus());
    }
    function u(d) {
      d.target === r.value && a("confirm-cancel");
    }
    return mi(() => t.model.visible, (d, f) => {
      if (d) {
        i = document.activeElement, cl(() => {
          s();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), ma(() => {
      l();
    }), (d, f) => e.model.visible === !0 ? (Te(), De("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Nt(u, ["self"])
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
        Pe("div", Cx, nt(e.model.title), 1),
        Pe("div", Ax, nt(e.model.text), 1),
        Pe("div", Ix, [
          f[0] || (f[0] = Pe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Pe("button", Ex, nt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Nx)
    ], 512)) : pt("", !0);
  }
}, Fx = ["data-paint-pane"], Tx = ["hidden"], Dx = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Lx = ["aria-pressed", "disabled"], Rx = ["hidden"], Vx = { class: "pano-paint-color-pop-head" }, $x = { class: "pano-paint-color-field" }, zx = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, jx = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Hx = { class: "pano-paint-color-field" }, Gx = { class: "pano-paint-alpha-wrap" }, Wx = ["value"], Kx = { "data-paint-alpha-value": "" }, Bx = ["hidden"], Ux = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Yx = ["data-paint-history-index", "aria-label", "disabled"], qx = ["data-paint-footer"], Xx = ["data-paint-group"], Jx = ["hidden"], Zx = ["value", "disabled"], Qx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, ek = ["hidden"], tk = {
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
            }, null, 14, Dx))), 128)),
            Pe("button", {
              class: ht(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: At({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Lx),
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
              Pe("div", Vx, [
                Pe("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: At({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Pe("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Pe("div", $x, [
                Pe("div", zx, [
                  Pe("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: At({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Pe("div", jx, [
                  Pe("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: At({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Pe("label", Hx, [
                i[1] || (i[1] = Pe("span", null, "Opacity", -1)),
                Pe("div", Gx, [
                  Pe("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Wx),
                  Pe("span", Kx, nt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Pe("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Pe("div", Ux, [
                  (Te(!0), De(Ze, null, Pt(e.state.historyEntries || [], (s) => (Te(), De("button", {
                    key: s.index,
                    class: ht(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: At(r(s.color))
                  }, null, 14, Yx))), 128))
                ])
              ], 8, Bx)
            ], 12, Rx)
          ], 10, Tx)) : pt("", !0),
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
            ], 8, Xx),
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
              }, null, 12, Zx),
              Pe("span", Qx, nt(e.state.sizeText || "10"), 1)
            ], 10, Jx),
            Pe("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Be(Qt, {
                icon: tt(Ge).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, ek)
          ], 8, qx)
        ], 10, Fx);
      }), 128))
    ], 2));
  }
}, nk = {
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
}, rk = ["aria-label"], ik = ["data-tip", "aria-pressed"], ok = {
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
      (Te(!0), De(Ze, null, Pt(e.buttons, (o) => (Te(), De("button", Cr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), nt(o.label), 17, ik))), 128))
    ], 12, rk));
  }
}, ak = {
  key: 0,
  class: "pano-cutout-menu"
}, sk = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, lk = ["data-aspect"], ck = ["data-action", "aria-label", "data-tip", "disabled"], uk = {
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
        n.kind === "aspect" ? (Te(), De("div", ak, [
          Pe("button", sk, [
            Be(Vt, {
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
            }, nt(i.label), 11, lk))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), zn(ok, {
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
          Be(Vt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, ck))
      ], 64))), 128))
    ], 4));
  }
}, dk = {
  key: 0,
  class: "pano-easing"
}, fk = { class: "pano-section-title" }, pk = { class: "pano-easing-range" }, hk = { class: "pano-easing-modes" }, mk = ["aria-pressed", "onClick"], gk = ["viewBox"], yk = ["x", "y"], bk = ["x1", "y1", "x2", "y2"], vk = ["d"], _k = ["x1", "y1", "x2", "y2"], Sk = ["x1", "y1", "x2", "y2"], wk = ["cx", "cy"], xk = ["cx", "cy"], kk = { class: "pano-easing-note" }, Mr = 132, si = 14, Mk = {
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
    }), s = (_) => si + _ * Mr, l = (_) => si + (1 - _) * Mr, c = ut(() => {
      var B;
      if (((B = r.model) == null ? void 0 : B.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [_, m, p, O] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(_)} ${l(m)} ${s(p)} ${l(O)} ${s(1)} ${l(1)}`;
    }), u = ut(() => a.value ? a.value.map((_) => _.toFixed(2)).join(", ") : "");
    function d(_) {
      var m;
      return JSON.stringify(_.easing) === JSON.stringify((m = r.model) == null ? void 0 : m.easing);
    }
    function f(_, m) {
      n("timeline", { type: "easing", easing: _, commit: m });
    }
    function g(_, m) {
      var G;
      if (_.button !== 0 || !a.value) return;
      const p = _.currentTarget;
      (G = p.setPointerCapture) == null || G.call(p, _.pointerId);
      let O = null;
      const B = (x) => {
        const ee = o.value.getBoundingClientRect(), W = ee.width / (Mr + si * 2), ce = ((x.clientX - ee.left) / W - si) / Mr, F = 1 - ((x.clientY - ee.top) / W - si) / Mr;
        O = [...O || a.value], O[m] = Math.round(Math.min(1, Math.max(0, ce)) * 100) / 100, O[m + 1] = Math.round(Math.min(1, Math.max(0, F)) * 100) / 100, f(O, !1);
      }, z = () => {
        p.removeEventListener("pointermove", B), p.removeEventListener("pointerup", z), p.removeEventListener("pointercancel", z), O && f(O, !0);
      };
      p.addEventListener("pointermove", B), p.addEventListener("pointerup", z), p.addEventListener("pointercancel", z);
    }
    return (_, m) => e.model ? (Te(), De("div", dk, [
      Pe("div", fk, [
        m[2] || (m[2] = Pe("span", null, "Easing", -1)),
        Pe("span", pk, nt(e.model.label), 1)
      ]),
      Pe("div", hk, [
        (Te(), De(Ze, null, Pt(i, (p) => Pe("button", {
          key: p.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": d(p) ? "true" : "false",
          onClick: (O) => f(p.easing, !0)
        }, nt(p.label), 9, mk)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Te(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Mr + si * 2} ${Mr + si * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Pe("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: Mr,
          height: Mr
        }, null, 8, yk),
        Pe("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, bk),
        Pe("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, vk),
        a.value ? (Te(), De(Ze, { key: 0 }, [
          Pe("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, _k),
          Pe("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, Sk),
          Pe("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: m[0] || (m[0] = (p) => g(p, 0))
          }, null, 40, wk),
          Pe("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: m[1] || (m[1] = (p) => g(p, 2))
          }, null, 40, xk)
        ], 64)) : pt("", !0)
      ], 8, gk)) : pt("", !0),
      Pe("div", kk, [
        e.model.mixed ? (Te(), De(Ze, { key: 0 }, [
          Eo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), De(Ze, { key: 1 }, [
          Eo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), De(Ze, { key: 2 }, [
          Eo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Te(), De(Ze, { key: 3 }, [
          Eo("cubic-bezier(" + nt(u.value) + ")", 1)
        ], 64)) : pt("", !0)
      ])
    ])) : pt("", !0);
  }
}, Pk = {
  class: "pano-side",
  "data-side": ""
}, Nk = { class: "pano-side-head" }, Ck = { class: "pano-side-title" }, Ak = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Ik = {
  key: 0,
  class: "pano-side-scroll"
}, Ek = { class: "pano-inspector" }, Ok = { class: "pano-ui-row pano-coverage-row" }, Fk = ["data-selected"], Tk = ["aria-pressed", "disabled"], Dk = ["aria-pressed", "disabled"], Lk = {
  key: 0,
  class: "pano-section-title"
}, Rk = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Vk = {
  class: "pano-picker",
  "data-picker": "selection"
}, $k = ["disabled"], zk = { class: "pano-picker-label" }, jk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Hk = ["hidden"], Gk = ["data-selection-id"], Wk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Kk = {
  key: 2,
  class: "pano-state-actions"
}, Bk = ["disabled"], Uk = ["data-key"], Yk = { class: "pano-field-group-values" }, qk = ["title", "onPointerdown"], Xk = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], Jk = ["data-key"], Zk = ["min", "max", "step", "value", "disabled", "data-param-key"], Qk = ["min", "max", "step", "value", "disabled", "data-param-key"], eM = ["open"], tM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, nM = { class: "pano-ui-settings-body" }, rM = { class: "pano-ui-row" }, iM = ["data-selected"], oM = ["aria-pressed"], aM = ["aria-pressed"], sM = { class: "pano-ui-row" }, lM = ["data-selected"], cM = ["aria-pressed"], uM = ["aria-pressed"], dM = {
  key: 1,
  class: "pano-side-footer"
}, fM = ["data-action"], pM = {
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
    function a(c, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const s = {};
    function l(c, u) {
      const d = s[u.key];
      if (c.button !== 0 || !d || a(u, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, g = c.clientX, _ = Number(d.value) || 0;
      let m = !1;
      f.setPointerCapture(c.pointerId);
      const p = (B) => {
        if (!m && Math.abs(B.clientX - g) < 3) return;
        m = !0;
        const z = _ + (B.clientX - g) * u.drag * (B.shiftKey ? 0.1 : 1);
        d.value = String(Number(z.toFixed(3))), d.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, O = () => {
        f.removeEventListener("pointermove", p), f.removeEventListener("pointerup", O), f.removeEventListener("pointercancel", O), f.removeEventListener("lostpointercapture", O), m ? d.dispatchEvent(new Event("change", { bubbles: !0 })) : d.focus();
      };
      f.addEventListener("pointermove", p), f.addEventListener("pointerup", O), f.addEventListener("pointercancel", O), f.addEventListener("lostpointercapture", O);
    }
    return (c, u) => {
      var d, f, g, _, m;
      return Te(), De("div", Pk, [
        Pe("div", Nk, [
          Pe("div", Ck, [
            Pe("span", Ak, [
              Be(Vt, {
                icon: tt(Ge).globe
              }, null, 8, ["icon"])
            ]),
            Pe("span", null, nt(e.nodeTitle), 1)
          ]),
          u[1] || (u[1] = Pe("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[10] || (u[10] = Pe("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), De("div", Ik, [
          Pe("div", Ek, [
            u[9] || (u[9] = Pe("div", { class: "pano-section-title" }, [
              Pe("span", null, "Scene")
            ], -1)),
            Pe("div", Ok, [
              u[2] || (u[2] = Pe("label", null, "Coverage", -1)),
              Pe("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                Pe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, Tk),
                Pe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "180", 8, Dk)
              ], 8, Fk)
            ]),
            e.model.transformTitle !== !1 ? (Te(), De("div", Lk, [...u[3] || (u[3] = [
              Pe("span", null, "Transform", -1)
            ])])) : pt("", !0),
            e.model.selectionPicker ? (Te(), De("div", Rk, [
              Pe("label", null, nt(e.model.selectionPicker.label), 1),
              Pe("div", Vk, [
                Pe("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Pe("span", zk, [
                    e.model.selectionPicker.currentIcon ? (Te(), De("span", jk, [
                      Be(Vt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    Pe("span", null, nt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[4] || (u[4] = Pe("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, $k),
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
                    p.icon ? (Te(), De("span", Wk, [
                      Be(Vt, {
                        icon: p.icon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    Pe("span", null, nt(p.label), 1)
                  ], 10, Gk))), 128))
                ], 8, Hk)
              ])
            ])) : pt("", !0),
            e.model.copyStateButton ? (Te(), De("div", Kk, [
              Pe("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(Vt, {
                  icon: tt(Ge).copy
                }, null, 8, ["icon"]),
                Pe("span", null, nt(e.model.copyStateButton.label), 1)
              ], 8, Bk)
            ])) : pt("", !0),
            Pe("div", {
              class: ht(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), De(Ze, { key: 0 }, Pt(e.model.notes, (p) => (Te(), De("div", {
                key: p,
                class: "pano-param-note"
              }, nt(p), 1))), 128)) : (Te(!0), De(Ze, { key: 1 }, Pt(e.model.rows || [], (p) => (Te(), De(Ze, {
                key: p.key
              }, [
                p.grouped ? (Te(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": p.key
                }, [
                  Pe("label", null, nt(p.label), 1),
                  Pe("div", Yk, [
                    (Te(!0), De(Ze, null, Pt(p.fields, (O) => (Te(), De("div", {
                      key: O.key,
                      class: "pano-axis-field"
                    }, [
                      Pe("span", {
                        class: ht(["pano-axis", { disabled: a(O, e.model) }]),
                        title: O.label,
                        onPointerdown: (B) => l(B, O)
                      }, nt(O.short), 43, qk),
                      Pe("input", {
                        ref_for: !0,
                        ref: (B) => {
                          s[O.key] = B;
                        },
                        type: "number",
                        min: O.min,
                        max: O.max,
                        step: O.step,
                        value: O.displayValue,
                        disabled: a(O, e.model),
                        "aria-label": `${p.label} ${O.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": O.key
                      }, null, 8, Xk)
                    ]))), 128))
                  ])
                ], 8, Uk)) : (Te(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": p.key
                }, [
                  Pe("label", null, nt(p.label), 1),
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
                  }, null, 12, Zk),
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
                  }, null, 8, Qk)
                ], 8, Jk))
              ], 64))), 128))
            ], 2),
            Be(Mk, {
              model: e.easing,
              onTimeline: u[0] || (u[0] = (p) => n("timeline", p))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Pe("summary", null, [
                u[5] || (u[5] = Pe("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Pe("span", tM, [
                  Be(Vt, {
                    icon: tt(Ge).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Pe("div", nM, [
                Pe("div", rM, [
                  u[6] || (u[6] = Pe("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, oM),
                    Pe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, aM)
                  ], 8, iM)
                ]),
                Pe("div", sM, [
                  u[7] || (u[7] = Pe("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, cM),
                    Pe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, uM)
                  ], 8, lM)
                ]),
                u[8] || (u[8] = Pe("div", { class: "pano-ui-row" }, [
                  Pe("span"),
                  Pe("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, eM)) : pt("", !0)
          ])
        ])) : pt("", !0),
        (e.model.footerButtons || []).length ? (Te(), De("div", dM, [
          (Te(!0), De(Ze, null, Pt(e.model.footerButtons, (p) => (Te(), De("button", {
            key: p.action,
            class: ht(["pano-btn", { "pano-btn-primary": p.primary === !0 }]),
            type: "button",
            "data-action": p.action
          }, nt(p.label), 11, fM))), 128))
        ])) : pt("", !0)
      ]);
    };
  }
}, hM = { class: "pano-timeline-bar" }, mM = ["aria-label", "data-tip"], gM = ["aria-label", "data-tip"], yM = { class: "pano-timeline-time" }, bM = ["data-tip"], vM = { key: 0 }, _M = ["min", "max", "value"], SM = ["data-tip"], wM = { key: 0 }, xM = ["max", "value"], kM = ["aria-expanded"], MM = ["inert"], PM = { class: "pano-timeline-name" }, NM = ["aria-pressed", "aria-label", "data-tip", "onClick"], CM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, AM = ["disabled", "aria-expanded", "aria-label", "onClick"], IM = ["title", "aria-current", "onClick"], EM = ["data-keyed", "aria-label", "onClick"], OM = ["onPointerdown"], FM = ["onPointerdown"], TM = ["onPointerdown"], DM = ["onPointerdown"], LM = ["aria-label", "data-tip", "onPointerdown"], RM = { key: 0 }, VM = ["onPointerdown"], $M = ["aria-label", "data-tip", "onPointerdown"], zM = { key: 0 }, jM = 10, HM = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ ws(0), playing: /* @__PURE__ */ ws(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Yt(null), o = /* @__PURE__ */ Yt(null), a = /* @__PURE__ */ Yt(1), s = /* @__PURE__ */ Yt(0), l = /* @__PURE__ */ Yt(!1);
    let c = null, u = null, d = null;
    dl(() => {
      c = new ResizeObserver(([le]) => {
        a.value = Math.max(1, le.contentRect.width);
      }), i.value && c.observe(i.value), u = new ResizeObserver(([le]) => {
        s.value = le.contentRect.height;
      }), o.value && u.observe(o.value);
    }), ma(() => {
      c == null || c.disconnect(), u == null || u.disconnect(), d == null || d();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), g = ut(() => r.playhead.frame.value), _ = ut(() => r.playhead.playing.value), m = ut(() => zv(g.value, Number(r.model.fps || 1))), p = ut(() => a.value / f.value), O = (le) => `${le / f.value * 100}%`, B = ut(() => e1(f.value, p.value));
    function z(le) {
      const ie = i.value.getBoundingClientRect(), k = Math.floor((le - ie.left) / Math.max(1, ie.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, k));
    }
    function G(le, ie, k) {
      const L = Math.ceil(jM / Math.max(1e-6, p.value)), Z = new Map(ie.map((V) => [V.frame, V.full]));
      return t1(ie.map((V) => V.frame), L).map((V, fe) => ({
        ...V,
        key: `${le}:${fe}`,
        partial: V.frames.some((Se) => !Z.get(Se)),
        selected: V.frames.some((Se) => k.includes(Se))
      }));
    }
    const x = ut(() => {
      const le = /* @__PURE__ */ new Map();
      for (const ie of r.model.rows || []) {
        le.set(ie.id, G(ie.id, ie.keys, ie.selectedFrames));
        for (const k of ie.lanes) le.set(k.key, G(k.key, k.frames.map((L) => ({ frame: L, full: !0 })), k.selectedFrames));
      }
      return le;
    });
    function ee(le) {
      const ie = le.end === null ? f.value : le.end;
      return { left: O(le.start), width: O(Math.max(0, ie - le.start)) };
    }
    function W(le, ie) {
      const k = le.clientX, L = Math.max(1e-6, p.value);
      let Z = 0;
      ie("start", 0, le);
      const V = (Se) => {
        if (Se.pointerId !== le.pointerId) return;
        const Q = Math.round((Se.clientX - k) / L);
        Q !== Z && (Z = Q, ie("move", Z, Se));
      }, fe = (Se) => {
        Se.pointerId === le.pointerId && (d(), ie("end", Z, Se));
      };
      d == null || d(), d = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", fe), window.removeEventListener("pointercancel", fe), d = null;
      }, window.addEventListener("pointermove", V), window.addEventListener("pointerup", fe), window.addEventListener("pointercancel", fe);
    }
    function ce(le) {
      le.button === 0 && W(le, (ie, k, L) => n("action", { type: "seek", frame: z(L.clientX), phase: ie }));
    }
    function F(le, ie, k) {
      le.button === 0 && (n("action", { type: "select-row", id: ie.id }), W(le, (L, Z) => n("action", { type: "clip", id: ie.id, mode: k, delta: Z, phase: L })));
    }
    function pe(le, ie, k, L, Z) {
      if (le.button === 0) {
        if (le.shiftKey) {
          n("action", { type: "select-keys", owner: ie.id, lane: k, frames: L.frames, additive: !0 });
          return;
        }
        L.frames.every((V) => Z.includes(V)) || n("action", { type: "select-keys", owner: ie.id, lane: k, frames: L.frames, additive: !1 }), W(le, (V, fe) => n("action", { type: "move-keys", delta: fe, phase: V }));
      }
    }
    const C = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function Y(le, ie, k) {
      n("action", ie), await cl(), le.target.value = k();
    }
    function te(le) {
      Y(le, { type: "fps", fps: Number(le.target.value) }, () => C.value);
    }
    function J(le) {
      const ie = le.target.value.trim();
      Y(le, { type: "length", length: ie ? Number(ie) : null }, () => r.model.length ?? "");
    }
    function U(le, ie, k) {
      le.button !== 0 || le.target !== le.currentTarget || n("action", { type: "select-keys", owner: ie.id, lane: k, frames: [], additive: !1 });
    }
    return (le, ie) => Lr((Te(), De("section", {
      class: ht(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Pe("div", hM, [
        Pe("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: ie[0] || (ie[0] = (k) => n("action", { type: "play" }))
        }, [
          Be(Vt, {
            icon: _.value ? tt(Ge).pause : tt(Ge).play
          }, null, 8, ["icon"])
        ], 8, mM),
        e.model.hasAudio ? (Te(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: ie[1] || (ie[1] = (k) => n("action", { type: "mute" }))
        }, [
          Be(Vt, {
            icon: e.model.muted ? tt(Ge).volume_muted : tt(Ge).volume2
          }, null, 8, ["icon"])
        ], 8, gM)) : pt("", !0),
        Pe("span", yM, nt(m.value), 1),
        Pe("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), De("span", vM, nt(C.value), 1)) : (Te(), De("input", {
            key: 1,
            type: "number",
            min: tt($h),
            max: tt(Hu),
            step: "any",
            value: C.value,
            "aria-label": "Timeline fps",
            onChange: te
          }, null, 40, _M)),
          ie[6] || (ie[6] = Pe("span", null, "fps", -1))
        ], 8, bM),
        Pe("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          ie[7] || (ie[7] = Pe("span", null, "Length", -1)),
          e.model.lengthLocked ? (Te(), De("span", wM, nt(e.model.length), 1)) : (Te(), De("input", {
            key: 1,
            type: "number",
            min: "1",
            max: tt(Gu),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: J
          }, null, 40, xM))
        ], 8, SM),
        Pe("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: ie[2] || (ie[2] = (k) => n("action", { type: "toggle-expanded" }))
        }, [
          ie[8] || (ie[8] = Pe("span", null, "Timeline", -1)),
          Be(Vt, {
            icon: tt(Ge).chevron
          }, null, 8, ["icon"])
        ], 8, kM)
      ]),
      Pe("div", {
        class: ht(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: At({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: ie[3] || (ie[3] = Nt((k) => l.value = !0, ["self"])),
        onTransitionend: ie[4] || (ie[4] = Nt((k) => l.value = !1, ["self"])),
        onTransitioncancel: ie[5] || (ie[5] = Nt((k) => l.value = !1, ["self"]))
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
            (Te(!0), De(Ze, null, Pt(B.value, (k) => (Te(), De("span", {
              key: k,
              class: "pano-timeline-tick",
              style: At({ left: O(k) })
            }, nt(k), 5))), 128)),
            Pe("span", {
              class: "pano-timeline-playhead",
              style: At({ left: O(g.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), De(Ze, null, Pt(e.model.rows || [], (k) => (Te(), De(Ze, {
            key: k.id
          }, [
            Pe("div", {
              class: ht(["pano-timeline-head", { selected: k.selected, "is-hidden": !k.visible }])
            }, [
              Pe("div", PM, [
                k.hideable ? (Te(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": k.visible ? "true" : "false",
                  "aria-label": `${k.label} visible`,
                  "data-tip": k.visible ? "Hide" : "Show",
                  onClick: Nt((L) => n("action", { type: "toggle-visible", id: k.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: k.visible ? tt(Ge).eye : tt(Ge).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, NM)) : (Te(), De("span", CM)),
                Pe("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !k.keyable,
                  "aria-expanded": k.open ? "true" : "false",
                  "aria-label": k.open ? `Hide ${k.label} parameters` : `Show ${k.label} parameters`,
                  onClick: Nt((L) => n("action", { type: "toggle-row", id: k.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: tt(Ge).chevron
                  }, null, 8, ["icon"])
                ], 8, AM),
                Pe("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: k.label,
                  "aria-current": k.selected ? "true" : void 0,
                  onClick: (L) => n("action", { type: "select-row", id: k.id })
                }, [
                  Be(Vt, {
                    icon: k.icon
                  }, null, 8, ["icon"]),
                  Pe("span", null, nt(k.label), 1)
                ], 8, IM),
                k.keyable ? (Te(), De("button", {
                  key: 2,
                  class: ht(["pano-timeline-key", { keyed: tt(nc)(k.keys, g.value) }]),
                  type: "button",
                  "data-keyed": tt(nc)(k.keys, g.value) ? "true" : "false",
                  "aria-label": tt(nc)(k.keys, g.value) ? `Every ${k.label} parameter has a keyframe here; update them` : `Add keyframes for every ${k.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Nt((L) => n("action", { type: "key-row", owner: k.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: tt(Ge).keyframe
                  }, null, 8, ["icon"])
                ], 10, EM)) : pt("", !0)
              ]),
              k.open ? (Te(!0), De(Ze, { key: 0 }, Pt(k.lanes, (L) => (Te(), De("div", {
                key: L.key,
                class: "pano-timeline-lane-head"
              }, nt(L.label), 1))), 128)) : pt("", !0)
            ], 2),
            Pe("div", {
              class: ht(["pano-timeline-track", { selected: k.selected }])
            }, [
              Pe("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (L) => U(L, k, null)
              }, [
                k.clip ? (Te(), De("div", {
                  key: 0,
                  class: ht(["pano-timeline-clip", { open: k.clip.end === null }]),
                  style: At(ee(k.clip)),
                  onPointerdown: Nt((L) => F(L, k, "move"), ["stop"])
                }, [
                  Pe("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Nt((L) => F(L, k, "start"), ["stop"])
                  }, null, 40, TM),
                  Pe("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Nt((L) => F(L, k, "end"), ["stop"])
                  }, null, 40, DM)
                ], 46, FM)) : pt("", !0),
                (Te(!0), De(Ze, null, Pt(x.value.get(k.id), (L) => (Te(), De("button", {
                  key: L.key,
                  type: "button",
                  class: ht(["pano-timeline-pin", { selected: L.selected, cluster: L.frames.length > 1, partial: L.partial }]),
                  style: At({ left: O(L.frame + 0.5) }),
                  "aria-label": `${k.label}: ${L.frames.length > 1 ? `${L.frames.length} keyframes` : `keyframe at frame ${L.frames[0]}`}`,
                  "data-tip": L.frames.length > 1 ? `${L.frames.length} keyframes` : `Frame ${L.frames[0]}`,
                  onPointerdown: Nt((Z) => pe(Z, k, null, L, k.selectedFrames), ["stop"])
                }, [
                  L.frames.length > 1 ? (Te(), De("span", RM, nt(L.frames.length), 1)) : pt("", !0)
                ], 46, LM))), 128))
              ], 40, OM),
              k.open ? (Te(!0), De(Ze, { key: 0 }, Pt(k.lanes, (L) => (Te(), De("div", {
                key: L.key,
                class: "pano-timeline-lane",
                onPointerdown: (Z) => U(Z, k, L.lane)
              }, [
                (Te(!0), De(Ze, null, Pt(x.value.get(L.key), (Z) => (Te(), De("button", {
                  key: Z.key,
                  type: "button",
                  class: ht(["pano-timeline-pin", { selected: Z.selected, cluster: Z.frames.length > 1 }]),
                  style: At({ left: O(Z.frame + 0.5) }),
                  "aria-label": `${L.label}: ${Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `keyframe at frame ${Z.frames[0]}`}`,
                  "data-tip": Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `Frame ${Z.frames[0]}`,
                  onPointerdown: Nt((V) => pe(V, k, L.lane, Z, L.selectedFrames), ["stop"])
                }, [
                  Z.frames.length > 1 ? (Te(), De("span", zM, nt(Z.frames.length), 1)) : pt("", !0)
                ], 46, $M))), 128))
              ], 40, VM))), 128)) : pt("", !0),
              Pe("span", {
                class: "pano-timeline-playhead",
                style: At({ left: O(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, MM)
    ], 2)), [
      [_i, e.model.visible]
    ]);
  }
}, GM = {
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
    }, nt(e.model.text || ""), 7));
  }
}, WM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, KM = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", WM, [
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
        [_i, n.visible !== !1]
      ])), 128))
    ]));
  }
}, BM = ["data-video-ready"], UM = { class: "pano-video-transport-shell" }, YM = { class: "pano-video-controls-left" }, qM = { class: "pano-video-filmstrip" }, XM = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, JM = ["src", "onLoad"], ZM = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, QM = ["max", "value", "disabled"], eP = { class: "pano-video-controls-right" }, tP = ["data-has-audio"], nP = { class: "pano-video-volume-pop" }, rP = ["value", "disabled"], iP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? Ge.pause : Ge.play;
    }), o = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? Ge.loop_off : Ge.loop;
    }), l = ut(() => {
      var x, ee;
      return ((x = t.state) == null ? void 0 : x.muted) === !0 || Number(((ee = t.state) == null ? void 0 : ee.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var x, ee, W;
      return ((x = t.state) == null ? void 0 : x.hasAudio) !== !0 ? Ge.volume : ((ee = t.state) == null ? void 0 : ee.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? Ge.volume_muted : Ge.volume2;
    }), u = ut(() => {
      var x;
      return Math.max(0, Math.min(100, Number(((x = t.state) == null ? void 0 : x.progressPct) || 0)));
    }), d = ut(() => ({ left: `${u.value}%` })), f = ut(() => {
      var ce, F;
      const x = (ce = t.state) == null ? void 0 : ce.volumePct, ee = Number(((F = t.state) == null ? void 0 : F.volume) ?? 1) * 100, W = Number(x ?? ee ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, W))}%`
      };
    }), g = ut(() => {
      var W, ce;
      const ee = [
        String(((W = t.state) == null ? void 0 : W.currentTimeLabel) || "0:00"),
        String(((ce = t.state) == null ? void 0 : ce.durationLabel) || "0:00")
      ].reduce((F, pe) => Math.max(F, pe.length), 4);
      return `${Math.max(4, ee)}ch`;
    }), _ = ut(() => ({ "--pano-video-time-ch": g.value })), m = ut(() => {
      var W, ce;
      const x = Array.isArray((W = t.state) == null ? void 0 : W.thumbnails) ? t.state.thumbnails : [];
      if (x.length) return x;
      const ee = Math.max(7, Number(((ce = t.state) == null ? void 0 : ce.thumbnailCount) || 9));
      return Array.from({ length: ee }, (F, pe) => ({
        id: `placeholder-${pe}`,
        src: "",
        label: ""
      }));
    }), p = /* @__PURE__ */ Yt(/* @__PURE__ */ new Set()), O = (x) => String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.src) || (x == null ? void 0 : x.label) || ""), B = (x) => p.value.has(O(x)), z = (x) => {
      const ee = new Set(p.value);
      ee.add(O(x)), p.value = ee;
    };
    mi(m, (x) => {
      const ee = new Set(x.map(O)), W = /* @__PURE__ */ new Set();
      for (const ce of p.value)
        ee.has(ce) && W.add(ce);
      p.value = W;
    }, { immediate: !0 });
    const G = ut(() => {
      var x;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((x = t.state) == null ? void 0 : x.shellMaxWidthPx) || 640))}px`
      };
    });
    return (x, ee) => (Te(), De("div", {
      class: ht(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: At(G.value)
    }, [
      ee[1] || (ee[1] = Pe("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ee[2] || (ee[2] = Pe("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Pe("div", UM, [
        Pe("div", YM, [
          Be(Qt, {
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
          }, nt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Pe("div", qM, [
          Pe("div", XM, [
            (Te(!0), De(Ze, null, Pt(m.value, (W) => (Te(), De("div", {
              key: O(W),
              class: ht(["pano-video-thumb", {
                "is-placeholder": !W.src,
                "is-loaded": W.src && B(W)
              }])
            }, [
              W.src ? (Te(), De("img", {
                key: 0,
                src: W.src,
                alt: "",
                draggable: "false",
                onLoad: (ce) => z(W)
              }, null, 40, JM)) : (Te(), De("span", ZM))
            ], 2))), 128))
          ]),
          Pe("div", {
            class: "pano-video-playhead",
            style: At(d.value),
            "aria-hidden": "true"
          }, [...ee[0] || (ee[0] = [
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
          }, null, 8, QM)
        ]),
        Pe("div", eP, [
          Pe("div", {
            class: "pano-video-time pano-video-time-end",
            style: At(_.value)
          }, nt(e.state.durationLabel || "0:00"), 5),
          Be(Qt, {
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
            Pe("div", nP, [
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
              }, null, 12, rP)
            ]),
            Be(Qt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, tP)
        ])
      ])
    ], 14, BM));
  }
}, oP = { class: "pano-floating-top" }, aP = ["data-selected", "data-view-count"], sP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], lP = { class: "label" }, cP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), De("div", oP, [
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
            Be(Vt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Pe("span", lP, nt(i.label), 1)
          ], 10, sP)), [
            [_i, i.visible !== !1]
          ])), 128))
        ], 8, aP)
      ]);
    };
  }
};
function Cg(e = "stickers") {
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
const uP = ["aria-label"], dP = { class: "pano-stage-column" }, fP = { class: "pano-stage-wrap" }, pP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, hP = {
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
    const l = /* @__PURE__ */ Yt(null), c = /* @__PURE__ */ Yt(null), u = /* @__PURE__ */ Yt(null);
    function d() {
      var C, Y;
      return ((Y = (C = u.value) == null ? void 0 : C.getRefs) == null ? void 0 : Y.call(C)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(C) {
      var Y, te;
      return ((te = (Y = c.value) == null ? void 0 : Y.open) == null ? void 0 : te.call(Y, C)) === !0;
    }
    function g(C) {
      i("image-file-selected", C);
    }
    function _(C) {
      i("image-file-cancelled", C);
    }
    t({ getPaintOverlayRefs: d, openImagePicker: f });
    const m = ut(() => n.readOnly === !0), p = ut(() => n.shellPreset || Cg(n.type)), O = ut(() => {
      var Y, te, J;
      const C = String((((Y = n.uiState) == null ? void 0 : Y.stageStatus) === "failed" ? (te = n.uiState) == null ? void 0 : te.stageStatusDetail : (J = n.uiState) == null ? void 0 : J.stageWarningDetail) ?? "");
      return C === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : C === "stickers" ? "One or more sticker previews are unavailable." : C === "frame" ? "The editor hit a rendering error. Check the browser console for details." : C === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : C.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), B = ut(() => {
      var C, Y, te;
      return ((C = n.uiState) == null ? void 0 : C.stageStatus) === "failed" || (Y = n.uiState) != null && Y.stageWarningDetail ? O.value : (te = n.uiState) == null ? void 0 : te.stageNotice;
    }), z = ut(() => {
      var Y;
      const C = Array.isArray((Y = p.value) == null ? void 0 : Y.floatingButtons) ? p.value.floatingButtons.slice() : [];
      return m.value && C.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ge.fullscreen
      }), C;
    });
    function G() {
      const C = l.value;
      return C ? Array.from(C.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Y) => Y instanceof HTMLElement ? !Y.hidden && Y.tabIndex >= 0 && Y.offsetParent !== null : !1) : [];
    }
    function x() {
      var te;
      const Y = G()[0] || l.value;
      (te = Y == null ? void 0 : Y.focus) == null || te.call(Y);
    }
    function ee() {
      var C;
      s != null && s.isConnected && ((C = s.focus) == null || C.call(s)), s = null;
    }
    function W(C) {
      var Y, te, J, U;
      if (!C.defaultPrevented) {
        if (C.key === "Tab") {
          const le = G();
          if (!le.length) {
            C.preventDefault(), (te = (Y = l.value) == null ? void 0 : Y.focus) == null || te.call(Y);
            return;
          }
          const ie = le[0], k = le[le.length - 1], L = document.activeElement;
          if (C.shiftKey) {
            (L === ie || L === l.value || !((J = l.value) != null && J.contains(L))) && (C.preventDefault(), k.focus());
            return;
          }
          (L === k || !((U = l.value) != null && U.contains(L))) && (C.preventDefault(), ie.focus());
          return;
        }
        C.key === "Escape" && i("close");
      }
    }
    function ce() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function F() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function pe(C) {
      document.removeEventListener("keydown", W), C ? (s || (s = document.activeElement), ce(), document.addEventListener("keydown", W), cl(() => {
        x();
      })) : (F(), ee());
    }
    return dl(() => {
      pe(n.open);
    }), ma(() => {
      F(), document.removeEventListener("keydown", W), ee();
    }), mi(() => n.open, (C) => {
      pe(C);
    }), (C, Y) => e.open ? (Te(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: Y[2] || (Y[2] = Nt((te) => i("close"), ["self"]))
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
        Pe("div", dP, [
          Pe("div", fP, [
            Y[3] || (Y[3] = Pe("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            Y[4] || (Y[4] = Pe("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            Y[5] || (Y[5] = Pe("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Te(), De("div", pP, nt(B.value), 1)) : pt("", !0),
            Y[6] || (Y[6] = Pe("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Pe("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(nk, {
              ref_key: "paintOverlaysRef",
              ref: u
            }, null, 512),
            Be(sg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: g,
              onFileCancelled: _
            }, null, 512),
            m.value ? pt("", !0) : (Te(), De(Ze, { key: 1 }, [
              Be(KM, {
                buttons: e.uiState.toolButtons || p.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(Px, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(tk, {
                "paint-swatches": e.paintSwatches,
                panes: p.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(iP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(cP, {
              buttons: e.uiState.viewButtons || p.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(Sx, {
              buttons: e.uiState.floatingButtons || z.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(uk, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(GM, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(Ox, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(HM, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: Y[0] || (Y[0] = (te) => i("timeline", te))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? pt("", !0) : (Te(), zn(pM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: Y[1] || (Y[1] = (te) => i("timeline", te))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, uP)
    ])) : pt("", !0);
  }
}, Jn = "loading", fa = "ready", Kn = "failed";
function Ag(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Ig(e, t = "") {
  return e && (e.__panoLoadState = fa, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Eg(e, t = "") {
  return e && (e.__panoLoadState = Kn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function su(e, t) {
  return e ? e.__panoLoadState === Kn ? Kn : typeof t == "function" && t(e) ? fa : Jn : fa;
}
function lu(e) {
  return su(e) === Kn;
}
function mP({ presented: e, background: t = fa, stickers: r = [] } = {}) {
  if (!e) return { status: Jn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Jn, o = n.includes(Jn);
  if (i && o) return { status: Jn, detail: "mixed" };
  if (i) return { status: Jn, detail: "background" };
  if (o) return { status: Jn, detail: "stickers" };
  const a = t === Kn, s = n.includes(Kn);
  return a && s ? { status: Kn, detail: "mixed" } : a ? { status: Kn, detail: "background" } : s ? { status: Kn, detail: "stickers" } : { status: fa, detail: "" };
}
const gP = "state_json", yP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), wd = "sticker_image_1", bP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), Og = 0.01, vP = "external_image", io = "pano_sticker_input_images", Fg = "pano_sticker_input_videos", Tg = "pano_sticker_input_frames", Dg = "pano_sticker_input_video_meta", _P = !0, Pl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], yr = Math.PI / 180, xi = 180 / Math.PI, cu = 1, Lg = "rgb(255, 221, 87)", SP = "rgb(228, 228, 231)", wP = "rgb(180, 150, 60)", xP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, kP = 64, ip = 40, fc = 16, MP = 0.45, op = 180, PP = 160, Qs = 24, NP = 4, CP = 4, AP = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function pc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function IP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function EP(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function OP(e) {
  return e * e * e;
}
function Nl(e, t, r) {
  return { x: e, y: t, z: r };
}
function ap(e, t) {
  return Nl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function sp(e, t) {
  return Nl(e.x * t, e.y * t, e.z * t);
}
function hc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function FP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Nl(e.x / t, e.y / t, e.z / t);
}
function Za(e) {
  return {
    yaw: jt(Math.atan2(e.x, e.z) * xi),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * xi, -90, 90)
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
function mc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return Ro(e, t);
  const l = Ee((o * n + a * i) / s, 0, 1), c = Number(t.x || 0) + n * l, u = Number(t.y || 0) + i * l, d = Number(e.x || 0) - c, f = Number(e.y || 0) - u;
  return d * d + f * f;
}
function Wn(e, t, r) {
  return e + (t - e) * r;
}
function fr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function TP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Qa = { fillStyle: "", url: "" };
function DP(e, t, r) {
  if (Qa.url && Qa.fillStyle === String(e || ""))
    return Qa.url;
  const n = TP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Qs}" height="${Qs}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Qa = { fillStyle: String(e || ""), url: n }, n;
}
function el(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Ln(e) {
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
function LP(e) {
  return Pl.some((t) => el(e, t.color));
}
function uu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), c = o * (1 - s * i), u = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: u, b: l };
    case 1:
      return { r: c, g: o, b: l };
    case 2:
      return { r: l, g: o, b: u };
    case 3:
      return { r: l, g: c, b: o };
    case 4:
      return { r: u, g: l, b: o };
    default:
      return { r: o, g: l, b: c };
  }
}
function du(e) {
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
function RP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function lp(e) {
  const { paintCount: t, maskCount: r } = RP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Rg(e, t, r, n, i) {
  const o = r.bbox, a = r.transform || {}, s = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), u = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), d = s + c * 0.5 + Number(a.du || 0) * n, f = l + u * 0.5 + Number(a.dv || 0) * i, g = Number(a.rot_deg || 0) * yr, _ = Math.max(0.01, Number(a.scale || 1));
  for (const m of [-n, 0, n])
    e.save(), e.translate(d + m, f), e.rotate(g), e.scale(_, _), e.drawImage(t, -c * 0.5, -u * 0.5, c, u), e.restore();
}
function Gi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function es(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function VP(e, t) {
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
function di(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function $P(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function zP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function jP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Vg = "pano_suite.ui_settings.v1", $g = "pano_suite.node_grid_visibility.v1";
let zi = null, lr = null;
function Ss(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function HP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Vg)) || "").trim();
    if (!t) return zi ? Ss(zi) : null;
    const r = JSON.parse(t), n = Ss(r);
    return zi = n, n;
  } catch {
    return zi ? Ss(zi) : null;
  }
}
function GP(e) {
  var r;
  const t = Ss(e);
  zi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Vg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function zg() {
  var e;
  if (lr && typeof lr == "object")
    return lr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($g)) || "").trim();
    if (!t)
      return lr = {}, lr;
    const r = JSON.parse(t);
    return lr = r && typeof r == "object" ? r : {}, lr;
  } catch {
    return lr = {}, lr;
  }
}
function WP(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = zg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function KP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = zg();
  n[r] = !!t, lr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem($g, JSON.stringify(n));
  } catch {
  }
}
function BP(e, t) {
  const r = { ...e }, n = t.map((i) => i(gc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(gc(r, t[o].name))), gc(r, "showEditor");
}
function gc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const fu = 0.5, jg = "PANO_SCENE";
function UP(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: tr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function YP(e, t, r) {
  return e * r / t;
}
function qP(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: xn(e("pano_upstream_coverage")[0])
  };
}
const XP = "bg_media is not used";
function JP(e, t) {
  return e === jg && t === null;
}
function ZP(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], a = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, s = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) s.has(l) || o.push({ kind: "group", id: l, zIndex: a });
  return r && o.push({ kind: "mask", id: "mask", zIndex: a }), o;
}
function Or(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function cp(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * fu };
}
function QP(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: a, ui: s } = e, l = ba(a, r), c = (m) => m.visible ? n(m) : null, u = Mm(a, r, { media: c, zIndex: (m) => m.z_index, paintLayers: i, evaluated: l }).map((m) => cp(m, t)), d = Nm(a, r, a.stickers, { media: c, evaluated: l }).map((m) => cp(m, t)), f = [], g = Gs(Or(s, "pano_scene_files"), Or(s, "pano_scene_meta"), o);
  g && f.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: td(g, l.scene), value: l.scene, opacity: fu });
  const _ = Gs(Or(s, "pano_sticker_files"), Or(s, "pano_sticker_meta"), o);
  if (_) {
    const m = ym(_, a, l);
    f.push({ slot: `${t}:sticker`, urls: bm(_, a), request: m, value: (m == null ? void 0 : m.value) ?? null, opacity: ((m == null ? void 0 : m.opacity) ?? 1) * fu });
  }
  return { evaluated: l, sky: u, stickers: d, items: f };
}
const qr = /* @__PURE__ */ new Map(), eN = 12;
function tN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = qr.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (qr.delete(t), qr.set(t, r), r);
}
function nN(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (qr.delete(r), qr.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); qr.size > eN; ) {
      const i = qr.keys().next().value;
      if (!i) break;
      qr.delete(i);
    }
}
function rN(e) {
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
    mediaUiImage: u,
    node: d,
    portStillCanvas: f,
    portVideoEl: g,
    readOnly: _,
    runtime: m,
    scheduler: p,
    stageWrap: O,
    state: B,
    stateV2: z,
    stillCanvas: G,
    studio: x,
    timelinePlayhead: ee,
    type: W,
    uiState: ce,
    videoEl: F
  } = e;
  let pe, C, Y, te, J, U;
  const le = {
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
  }, ie = 9, k = [];
  let L = 0;
  const Z = () => {
    var Ce, Ve;
    const ne = (Ce = O == null ? void 0 : O.getBoundingClientRect) == null ? void 0 : Ce.call(O), ye = (Ve = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ve.call(o), Me = Math.max(0, Number((ne == null ? void 0 : ne.width) || 0)), Ae = ye ? Math.max(0, Number(ye.width || 0)) : 0, He = Ae > 0 ? Ae + 14 + 12 : 72, ze = Math.max(280, Math.floor(Me - He * 2)), q = n.fullscreen ? Math.min(1200, ze) : ze;
    ce.videoTransport.shellMaxWidthPx = q;
  }, V = () => {
    L || (L = p.requestFrame(() => {
      L = 0, Z();
    }));
  }, fe = (ne) => {
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
  Se == null || Se.observe(O), o && (Se == null || Se.observe(o)), k.push(() => {
    var ne;
    L && (p.cancelFrame(L), L = 0), (ne = Se == null ? void 0 : Se.disconnect) == null || ne.call(Se);
  }), V();
  const Q = () => {
    le.thumbnailJobId += 1, le.thumbnailSrc = "", ce.videoTransport.thumbnails = [], ce.videoTransport.thumbnailCount = ie;
  }, E = async (ne, ye, Me) => {
    const Ae = String(ne || "").trim();
    if (!Ae) {
      Q();
      return;
    }
    const Le = tN(Ae);
    if (Le) {
      le.thumbnailSrc = Ae, ce.videoTransport.thumbnails = Le.thumbnails, ce.videoTransport.thumbnailCount = Le.thumbnailCount;
      return;
    }
    const Re = ++le.thumbnailJobId;
    le.thumbnailSrc = Ae, ce.videoTransport.thumbnails = [], ce.videoTransport.thumbnailCount = ie;
    const He = ya(document, "editor.thumbnails");
    He.preload = "auto", He.muted = !0, He.playsInline = !0, He.crossOrigin = "anonymous";
    const ze = rn({ label: "editor.thumbnail" });
    try {
      const q = await new Promise((Ft) => {
        let bt = !1;
        const Dt = (tn) => {
          bt || (bt = !0, Ft(tn));
        };
        He.addEventListener("loadedmetadata", () => Dt(!0), { once: !0 }), He.addEventListener("canplay", () => Dt(!0), { once: !0 }), He.addEventListener("error", () => Dt(!1), { once: !0 }), He.src = Ae, He.load();
      });
      if (le.thumbnailJobId !== Re) return;
      const Ce = Number(He.videoWidth || 0), Ve = Number(He.videoHeight || 0);
      if (!q || Ce < 1 || Ve < 1) {
        le.thumbnailFailedSrcs.add(Ae);
        return;
      }
      const Ie = Math.max(0, Number(He.duration || ye || 0)), je = 46, We = Math.max(72, Math.round(Ce / Ve * je));
      ze.width = We, ze.height = je;
      const Ye = ze.getContext("2d");
      if (!Ye) return;
      const at = [], kt = (Ft) => new Promise((bt) => {
        let Dt = !1;
        const tn = () => {
          Dt || (Dt = !0, bt());
        };
        He.addEventListener("seeked", tn, { once: !0 }), He.addEventListener("error", tn, { once: !0 });
        try {
          He.currentTime = Ft;
        } catch {
          tn();
        }
      });
      for (let Ft = 0; Ft < ie; Ft += 1) {
        if (le.thumbnailJobId !== Re) return;
        const bt = ie <= 1 ? 0 : Ft / (ie - 1), Dt = Ie > 0 ? Math.max(0, Math.min(Ie - Math.max(1e-3, 0.5 / Math.max(1, Number(Me || 24))), Ie * bt)) : 0;
        if (await kt(Dt), le.thumbnailJobId !== Re) return;
        Ye.clearRect(0, 0, We, je), Ye.drawImage(He, 0, 0, We, je), at.push({
          id: `thumb-${Ft}`,
          src: ze.toDataURL("image/jpeg", 0.72),
          time: Dt,
          label: $(Dt)
        });
      }
      if (le.thumbnailJobId !== Re) return;
      ce.videoTransport.thumbnails = at, ce.videoTransport.thumbnailCount = at.length || ie, nN(Ae, {
        thumbnails: at,
        thumbnailCount: at.length || ie,
        duration: Ie,
        fps: Me
      });
    } finally {
      He.removeAttribute("src"), He.load(), ea(ze);
    }
  };
  k.push(() => {
    Q();
  });
  const X = Jm({
    video: F instanceof HTMLVideoElement ? F : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (ne) => p.requestFrame(ne),
      cancelFrame: (ne) => p.cancelFrame(ne)
    },
    fps: H,
    span: () => {
      if (z) return U();
      const ne = Math.round(Number(ce.videoTransport.duration || 0) * H());
      return F.loop || !(ne > 0) ? 1 / 0 : ne;
    },
    loop: () => z,
    onFrame: (ne) => {
      z ? Y(ne) : v(), C({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    },
    onCapture: () => {
      P() && (m.backgroundDirty = !0);
    },
    onChange: () => {
      v(), ee.playing.value = X.playing, J(), C({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    }
  });
  k.push(() => X.dispose());
  const ae = z && g instanceof HTMLVideoElement ? dd({
    video: g,
    onCapture: () => {
      var Me;
      const ne = Number(g.videoWidth || 0), ye = Number(g.videoHeight || 0);
      ne < 1 || ye < 1 || (f.width = ne, f.height = ye, (Me = f.getContext("2d")) == null || Me.drawImage(g, 0, 0), f.__panoFrameIdx += 1, C({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA }));
    },
    onChange: () => C({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  ae && k.push(() => ae.dispose());
  const be = z ? sd({
    createImage: (ne, ye) => {
      const Me = new Image();
      return Me.onload = ye, Me.onerror = ye, Me.src = ne, Me;
    },
    onLoad: () => C({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  if (F instanceof HTMLVideoElement) {
    const ne = () => {
      re(), C({ cause: "frame_view", localOnly: !0 });
    }, ye = () => {
      v({
        hasAudio: ce.videoTransport.hasAudio,
        muted: F.muted,
        volume: Number(F.volume ?? ce.videoTransport.volume ?? 1)
      });
    }, Me = () => {
      const Ae = F.dataset.panoSrc;
      Ae && (le.failedSrcs.add(Ae), re(), C());
    };
    for (const [Ae, Le] of [
      ["loadedmetadata", ne],
      ["loadeddata", ne],
      ["canplay", ne],
      ["volumechange", ye],
      ["error", Me]
    ])
      F.addEventListener(Ae, Le), k.push(() => F.removeEventListener(Ae, Le));
  }
  function we(ne) {
    return t.uiList(d, ne);
  }
  function A(ne) {
    return t.uiValue(d, ne);
  }
  function oe() {
    const ne = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Ts(ne))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ye = N();
    return ye ? { videoKey: ye.videoKey, metaKey: ye.metaKey } : W === "stickers" || W === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function b() {
    const { metaKey: ne } = oe(), ye = A(ne);
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
    return z ? B.timeline.fps : le.metaFps || 1e3;
  }
  function v(ne = {}) {
    const ye = Number(ne.duration ?? ce.videoTransport.duration ?? 0), Me = Math.max(1, Number(ne.fps ?? ce.videoTransport.fps ?? 24)), Ae = X.frame / H(), Le = Object.prototype.hasOwnProperty.call(ne, "ready") ? !!ne.ready : !!ce.videoTransport.ready, Re = X.playing, He = Object.prototype.hasOwnProperty.call(ne, "visible") ? !!ne.visible : !!ce.videoTransport.visible, ze = Object.prototype.hasOwnProperty.call(ne, "muted") ? !!ne.muted : !!(F instanceof HTMLVideoElement ? F.muted : ce.videoTransport.muted), q = Number(
      Object.prototype.hasOwnProperty.call(ne, "volume") ? ne.volume : F instanceof HTMLVideoElement ? F.volume : ce.videoTransport.volume
    ), Ce = Object.prototype.hasOwnProperty.call(ne, "hasAudio") ? !!ne.hasAudio : fe(F), Ve = Object.prototype.hasOwnProperty.call(ne, "loop") ? !!ne.loop : !!ce.videoTransport.loop;
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
    return !!(F instanceof HTMLVideoElement && !z && F.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function D() {
    if (!(F instanceof HTMLVideoElement) || !ce.videoTransport.hasAudio) return;
    const ne = !F.muted;
    F.muted = ne, !ne && Number(F.volume || 0) <= 0 && (F.volume = Math.max(0.01, Number(ce.videoTransport.volume || 1))), v({
      hasAudio: ce.videoTransport.hasAudio,
      muted: F.muted,
      volume: Number(F.volume ?? ce.videoTransport.volume ?? 1)
    });
  }
  function M() {
    v({
      visible: w()
    });
  }
  function P() {
    if (!(F instanceof HTMLVideoElement) || Number(F.videoWidth || 0) < 1 || Number(F.videoHeight || 0) < 1) return !1;
    const ne = Number(F.videoWidth || 0), ye = Number(F.videoHeight || 0);
    (G.width !== ne || G.height !== ye) && (G.width = ne, G.height = ye);
    const Me = G.getContext("2d");
    return Me ? (Me.clearRect(0, 0, ne, ye), Me.drawImage(F, 0, 0, ne, ye), G.__panoFrameIdx = Number(G.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function I() {
    return !X.showsVideo && Number(G.width || 0) > 0 && Number(G.height || 0) > 0 && Number(G.__panoFrameIdx || 0) > 0 ? G : F instanceof HTMLVideoElement && Number(F.videoWidth || 0) > 0 && Number(F.videoHeight || 0) > 0 && Number(F.readyState || 0) >= 2 ? F : null;
  }
  function K() {
    G.__panoFrameIdx = 0, m.backgroundDirty = !0;
  }
  function re() {
    if (!(F instanceof HTMLVideoElement)) return null;
    const { videoKey: ne } = oe(), ye = (N() || Xt(d, "background")) && we(ne)[0] || null, Me = c(ye), Ae = [Me, t.linkedVideoFile(d, T())].filter(Boolean), Le = Ae.find((Ie) => !le.failedSrcs.has(Ie)) || "";
    le.videoFailed = !Le && Ae.length > 0;
    const Re = Le && Le === Me ? b() : null;
    le.metaFps = Number(Re == null ? void 0 : Re.fps) > 0 ? Number(Re.fps) : 0;
    const He = Math.max(1, Number((Re == null ? void 0 : Re.fps) || (z ? B.timeline.fps : 24))), ze = F.dataset.panoSrc === Le && Number.isFinite(F.duration) ? F.duration : 0, q = Number((Re == null ? void 0 : Re.duration) || ((Re == null ? void 0 : Re.frames) > 0 ? Re.frames / He : ze)), Ce = Math.max(0, Number((Re == null ? void 0 : Re.frames) || Math.round(q * He))), Ve = !!(Re != null && Re.has_audio) || fe(F);
    return Le && F.dataset.panoSrc !== Le ? (F.pause(), K(), F.dataset.panoSrc = Le, F.loop = !z && !!ce.videoTransport.loop, F.muted = !!ce.videoTransport.muted, F.volume = Math.max(0, Math.min(1, Number(ce.videoTransport.volume ?? 1))), F.src = Le, F.load(), X.setSource(!0), z || X.seek(0)) : !Le && F.getAttribute("src") && (F.pause(), F.removeAttribute("src"), delete F.dataset.panoSrc, F.load(), K(), Q(), X.setSource(!1)), z || (F.loop = !!ce.videoTransport.loop), Le && !z && le.thumbnailSrc !== Le && !le.thumbnailFailedSrcs.has(Le) && E(Le, q, He), Le || Q(), v({
      ready: !!Le,
      visible: !!Le && w(),
      duration: q,
      frameCount: Ce,
      fps: He,
      hasAudio: Ve,
      loop: !!F.loop,
      muted: !!F.muted,
      volume: Number(F.volume ?? ce.videoTransport.volume ?? 1),
      thumbnailCount: ce.videoTransport.thumbnailCount
    }), Le || null;
  }
  function me(ne, ye = null) {
    return u(d, ne, a, ye || (() => C()));
  }
  function j(ne = null) {
    return Xt(d, "external-sticker") ? me(io, ne) : null;
  }
  function de() {
    if (!Xt(d, "external-sticker")) return null;
    const ne = we(Dg)[0];
    if (!ne || typeof ne != "object") return null;
    const ye = we(Tg).map(c).filter(Boolean);
    if (ye.length) return { frames: ye, meta: ne };
    const Me = c(we(Fg)[0] || null);
    return Me ? { src: Me, meta: ne } : null;
  }
  function _e() {
    const ne = B.stickers.find(pe), ye = ne ? de() : null, Me = ye ? od(ne.clip, n.frame, B.timeline.fps, ye.meta) : null;
    ae.follow({ src: (ye == null ? void 0 : ye.src) || "", time: Me, playing: X.advancing, fps: B.timeline.fps });
    const Ae = ne ? ve(ne) : null, Le = ye != null && ye.frames ? be.picture(ye.frames, Me, ye.meta, Ae) : ae.picture(f, Ae);
    return Le ? { media: Le, revision: S(Le), source: ad(ye, Ae) } : null;
  }
  function ke() {
    return !z || !Xt(d, "scene") ? null : Gs(we("pano_scene_files"), we("pano_scene_meta"), c);
  }
  function ue() {
    return !z || !Xt(d, "external-sticker") ? null : Gs(we("pano_sticker_files"), we("pano_sticker_meta"), c);
  }
  function ve(ne) {
    var He;
    if (ne && typeof ne == "object" && (pe(ne) || ne.external === !0))
      return j(() => {
        Rr(d, "image-loaded");
      });
    const ye = z ? Ne(ne) : String(ne && typeof ne == "object" ? ne.asset_id || ne.assetId || "" : ne || "");
    if (!ye) return null;
    const Me = a.get(ye);
    if (Me) return Me;
    const Ae = z ? Hs(ne.source) : (He = B.assets) == null ? void 0 : He[ye], Le = l(Ae);
    if (!Le) return null;
    const Re = new Image();
    return Ag(Re, Le), Re.onload = () => {
      Ig(Re, Le), C();
    }, Re.onerror = () => {
      Eg(Re, Le), C();
    }, Re.src = Le, a.set(ye, Re), Re;
  }
  function Ne(ne) {
    const { source: ye } = ne;
    return ye.filename ? `file:${ye.storage}:${ye.subfolder}:${ye.filename}` : `sticker:${ne.id}`;
  }
  function h() {
    if (W === "cutout" && !r) {
      const Re = I();
      if (Re) return Re;
      const He = s(
        d,
        ["erp_image", "bg_erp"],
        () => C(),
        "background:cutout:erp_image|bg_erp"
      );
      return He && !lu(He) ? He : u(d, "pano_input_images", a, () => C()) || He || null;
    }
    const ne = I();
    if (ne) return ne;
    const ye = N(), Me = ye || Xt(d, "background") ? u(d, (ye == null ? void 0 : ye.imageKey) ?? "pano_input_images", a, () => C()) : null;
    if (Me && !lu(Me)) return Me;
    if (F instanceof HTMLVideoElement && F.dataset.panoSrc) return F;
    if (ye) return Me;
    const Ae = T();
    return s(d, Ae, () => C(), `background:${Ae.join("|")}`) || Me || null;
  }
  function R() {
    var ye;
    const ne = (Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs : []).findIndex((Me) => (Me == null ? void 0 : Me.name) === "source");
    return ne >= 0 && d.graph ? String(((ye = d.getInputLink(ne)) == null ? void 0 : ye.type) || "") : "";
  }
  function N() {
    return !x || !Xt(d, "scene") ? null : qP(we);
  }
  function y() {
    var ne;
    return ((ne = N()) == null ? void 0 : ne.coverage) ?? xn(B.coverage);
  }
  function T() {
    if (N()) return [];
    if (W === "cutout") return r ? R() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const ne = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((Ae) => String((Ae == null ? void 0 : Ae.name) || "")) : [], ye = ne.includes("erp_image"), Me = ne.includes("bg_erp");
    return _ && (ye || Me) ? ye ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : W === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function se(ne) {
    return ne ? ne instanceof HTMLImageElement ? !!ne.complete && Number(ne.naturalWidth || ne.width || 0) > 0 && Number(ne.naturalHeight || ne.height || 0) > 0 : ne instanceof HTMLVideoElement ? Number(ne.videoWidth || 0) > 0 && Number(ne.videoHeight || 0) > 0 && Number(ne.readyState || 0) >= 2 : Number(ne.width || ne.naturalWidth || 0) > 0 && Number(ne.height || ne.naturalHeight || 0) > 0 : !1;
  }
  function ge() {
    if (i.failed) return { status: Kn, detail: "renderer" };
    if (!i.ready) return { status: Jn, detail: "boot" };
    const ne = h(), ye = le.videoFailed ? Kn : su(ne, se), Me = [];
    for (const Ae of te()) {
      if ((Ae == null ? void 0 : Ae.visible) === !1) continue;
      const Le = ve(Ae);
      Me.push(su(Le, se));
    }
    return mP({
      presented: m.hasPresentedFrame,
      background: ye,
      stickers: Me
    });
  }
  function he() {
    F instanceof HTMLVideoElement && F.pause(), k.forEach((ne) => {
      try {
        ne();
      } catch {
      }
    });
  }
  return {
    connect(ne) {
      ({
        isExternalSticker: pe,
        requestDraw: C,
        setTimelineFrame: Y,
        skyStickers: te,
        syncTimeline: J,
        timelineSpanFrames: U
      } = ne);
    },
    videoState: le,
    queueVideoTransportLayout: V,
    playback: X,
    portVideo: ae,
    getNodeUiValue: A,
    getMediaRevisionToken: S,
    playbackFps: H,
    syncVideoTransportState: v,
    toggleVideoMuted: D,
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
    isDecodedImageReady: se,
    getStageImageStatus: ge,
    sceneFiles: ke,
    stickerFiles: ue,
    disposeMediaSession: he
  };
}
function iN(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((d) => {
      n.push(String(d || ""));
    }), !n.length)) return;
    const u = Number(c.index);
    Number.isInteger(u) ? u === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, u)) : i = n.length - 1;
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
      const c = n.length, u = Math.max(0, c - a), d = i >= 0 ? Math.max(0, Math.min(i, u)) : u, f = n.slice(d, d + a), g = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - d));
      return {
        version: 1,
        entries: f,
        index: g
      };
    },
    hydrate: s
  };
}
const oN = 80;
function Hg(e) {
  return JSON.stringify(s1(e));
}
function aN(e) {
  return iN(oN, { entries: [Hg(e)], index: 0 });
}
function Gg(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function sN(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, c, u, d, f, g, _, m, p, O, B, z, G, x;
  function ee() {
    r || (B(), am(i), !(o && i.stickers.some(d)) && (t.historyController.commitActionGroup(Hg(i)), G()));
  }
  function W(F) {
    var te, J;
    if (r) return;
    O();
    const pe = F < 0 ? t.historyController.undo() : t.historyController.redo();
    if (G(), !pe) return;
    const C = l1(i, pe), Y = (te = i.timeline) == null ? void 0 : te.fps;
    Object.keys(i).forEach((U) => delete i[U]), Object.assign(i, C.state), B(!1), o && i.timeline.fps !== Y && _.seek(Math.round(t.frame * i.timeline.fps / Y)), t.selectedId = Gg(s, i), a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((J = u()) == null ? void 0 : J.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, C.paintingChanged ? g() : f(), z(), x(), c(), p({ cause: "cutout_frame" });
  }
  function ce() {
    var C, Y;
    const F = Array.isArray((C = t.historyController) == null ? void 0 : C.entries) ? t.historyController.entries : [], pe = Number((Y = t.historyController) == null ? void 0 : Y.index);
    return {
      canUndo: !r && F.length > 1 && pe > 0,
      canRedo: !r && F.length > 1 && pe >= 0 && pe < F.length - 1
    };
  }
  return {
    connect(F) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: u,
        isUploadingSticker: d,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: g,
        playback: _,
        releaseHiddenSelection: m,
        requestDraw: p,
        stopTimelinePlayback: O,
        syncCutoutShot: B,
        syncPaintUi: z,
        syncUndoRedoButtons: G,
        updateSidePanel: x
      } = F);
    },
    pushHistory: ee,
    restoreHistory: W,
    getHistoryCapabilities: ce
  };
}
function lN(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, c, u, d, f, g, _;
  function m() {
    return s === "stickers" ? p() : o.shots;
  }
  function p() {
    return i ? o.stickers.filter((h) => h.placement === "sky") : o.stickers;
  }
  function O(h) {
    return i && X(h);
  }
  function B(h) {
    return h.source.kind === "file" && !h.source.filename && !h.source.data_url;
  }
  function z(h) {
    return O(h) ? qu(h, n.frame) : h;
  }
  function G(h, R) {
    O(h) ? nm(h, n.frame, R) : Object.assign(h, R);
  }
  function x() {
    const h = o.painting || (o.painting = lo(null));
    return Array.isArray(h.groups) || (h.groups = []), h.groups;
  }
  function ee(h = "paint") {
    var T, se;
    const R = Array.isArray((se = (T = o.painting) == null ? void 0 : T[h]) == null ? void 0 : se.strokes) ? o.painting[h].strokes : [], N = [], y = /* @__PURE__ */ new Set();
    for (const ge of R) {
      const he = String((ge == null ? void 0 : ge.actionGroupId) || "").trim();
      !he || y.has(he) || (y.add(he), N.push(he));
    }
    return N;
  }
  function W() {
    return ee("paint");
  }
  function ce(h, R) {
    const N = String(R || "").trim();
    return N ? `${h === "mask" ? "mask" : "paint"}:${N}` : "";
  }
  function F(h) {
    const R = String(h || "").trim();
    return R ? `raster:${R}` : "";
  }
  function pe(h) {
    const R = String(h || "").trim();
    if (!R) return "";
    const N = R.match(/^raster:(.*)$/);
    return String(N ? N[1] || "" : R).trim();
  }
  function C(h, R = null) {
    const N = String(h || "").trim();
    if (!N) return { layerKind: "paint", actionGroupId: "" };
    const y = N.match(/^(paint|mask):(.*)$/);
    return y ? { layerKind: y[1] === "mask" ? "mask" : "paint", actionGroupId: String(y[2] || "").trim() } : { layerKind: R === "mask" ? "mask" : "paint", actionGroupId: N };
  }
  function Y() {
    var R;
    let h = -1;
    for (const N of p())
      h = Math.max(h, Number((N == null ? void 0 : N.z_index) || 0));
    for (const N of x())
      h = Math.max(h, Number((N == null ? void 0 : N.z_index) || 0));
    for (const N of Array.isArray((R = o.painting) == null ? void 0 : R.raster_objects) ? o.painting.raster_objects : [])
      String((N == null ? void 0 : N.layerKind) || "paint") === "paint" && (h = Math.max(h, Number((N == null ? void 0 : N.z_index) || 0)));
    return h + 1;
  }
  function te(h, R = null) {
    const N = String(h || "").trim();
    if (!N) return null;
    const y = x();
    let T = y.find((se) => String((se == null ? void 0 : se.actionGroupId) || "") === N);
    return T ? R != null && (T.z_index = Math.max(0, Number(R || 0))) : (T = {
      id: N,
      type: "strokeGroup",
      actionGroupId: N,
      z_index: R == null ? Y() : Math.max(0, Number(R || 0)),
      locked: !1,
      frame: null
    }, y.push(T)), T;
  }
  function J(h) {
    if (!(h != null && h.centerUv)) return [];
    const R = Number(h.centerUv.u || 0), N = Number(h.centerUv.v || 0), y = Number(h.halfW || 0), T = Number(h.halfH || 0);
    return [
      {
        u: ((R - y) % 1 + 1) % 1,
        v: Ee(N - T, 0, 1)
      },
      {
        u: ((R + y) % 1 + 1) % 1,
        v: Ee(N - T, 0, 1)
      },
      {
        u: ((R + y) % 1 + 1) % 1,
        v: Ee(N + T, 0, 1)
      },
      {
        u: ((R - y) % 1 + 1) % 1,
        v: Ee(N + T, 0, 1)
      }
    ];
  }
  function U() {
    const h = new Set(W()), N = x().filter((y) => h.has(String((y == null ? void 0 : y.actionGroupId) || "")));
    return h.forEach((y) => {
      N.some((T) => String((T == null ? void 0 : T.actionGroupId) || "") === y) || N.push({
        id: y,
        type: "strokeGroup",
        actionGroupId: y,
        z_index: Y(),
        locked: !1,
        frame: null
      });
    }), N.sort((y, T) => Number((y == null ? void 0 : y.z_index) || 0) - Number((T == null ? void 0 : T.z_index) || 0)), o.painting.groups = N, N;
  }
  function le(h, R, N) {
    var ze;
    const y = (q) => (Number(q || 0) % 1 + 1) % 1, T = [];
    for (const q of N) {
      const Ce = q == null ? void 0 : q.geometry, Ve = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(Ve) && T.push(...Ve);
    }
    if (!T.length) return null;
    const se = y(((ze = T[0]) == null ? void 0 : ze.u) || 0);
    let ge = 0, he = 0;
    T.forEach((q) => {
      const Ce = y((q == null ? void 0 : q.u) || 0);
      ge += se + H(Ce, se), he += Number((q == null ? void 0 : q.v) || 0);
    });
    const ne = (ge / T.length % 1 + 1) % 1;
    let ye = 1 / 0, Me = -1 / 0, Ae = 1 / 0, Le = -1 / 0;
    T.forEach((q) => {
      const Ce = y((q == null ? void 0 : q.u) || 0), Ve = H(Ce, ne);
      ye = Math.min(ye, Ve), Me = Math.max(Me, Ve);
      const Ie = Number((q == null ? void 0 : q.v) || 0);
      Ae = Math.min(Ae, Ie), Le = Math.max(Le, Ie);
    });
    const Re = N.reduce((q, Ce) => {
      const Ve = c(String((Ce == null ? void 0 : Ce.toolKind) || "pen")), Ie = An[Ve] || An[Ar], je = Math.max(1, Number((Ce == null ? void 0 : Ce.size) || 10)) * Math.max(0.1, Number((Ie == null ? void 0 : Ie.sizeScale) ?? 1));
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
    const T = x().find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === y);
    if (!T) return null;
    const se = N || b(y, R);
    return T.frame = le(y, R, se), T.frame;
  }
  function k() {
    var y;
    const h = p().map((T) => ({
      type: "sticker",
      id: String((T == null ? void 0 : T.id) || ""),
      z_index: Number((T == null ? void 0 : T.z_index) || 0),
      item: T
    })), R = U().map((T) => ({
      type: "strokeGroup",
      id: String((T == null ? void 0 : T.id) || (T == null ? void 0 : T.actionGroupId) || ""),
      actionGroupId: String((T == null ? void 0 : T.actionGroupId) || ""),
      z_index: Number((T == null ? void 0 : T.z_index) || 0),
      item: T
    })), N = (Array.isArray((y = o.painting) == null ? void 0 : y.raster_objects) ? o.painting.raster_objects : []).filter((T) => String((T == null ? void 0 : T.layerKind) || "paint") === "paint").map((T) => ({
      type: "rasterObject",
      id: String((T == null ? void 0 : T.id) || ""),
      z_index: Number((T == null ? void 0 : T.z_index) || 0),
      item: T
    }));
    return [...h, ...R, ...N].sort((T, se) => Number(T.z_index || 0) - Number(se.z_index || 0));
  }
  function L(h = !0) {
    var N, y, T, se, ge, he;
    const R = k().filter((ne) => ne.type === "strokeGroup").map((ne) => String(ne.actionGroupId || "")).filter((ne) => !!ne);
    if (h) {
      const ne = String(((y = (N = n.interaction) == null ? void 0 : N.stroke) == null ? void 0 : y.actionGroupId) || "").trim(), ye = String(((se = (T = n.interaction) == null ? void 0 : T.stroke) == null ? void 0 : se.layerKind) || "").trim(), Me = String(((he = (ge = n.interaction) == null ? void 0 : ge.stroke) == null ? void 0 : he.toolKind) || "").trim();
      ne && ye === "paint" && Me !== "eraser" && !R.includes(ne) && R.push(ne);
    }
    return R;
  }
  function Z(h = !0) {
    var he, ne, ye, Me, Ae, Le;
    const R = k();
    if (!h) return R;
    const N = String(((ne = (he = n.interaction) == null ? void 0 : he.stroke) == null ? void 0 : ne.actionGroupId) || "").trim(), y = String(((Me = (ye = n.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : Me.layerKind) || "").trim(), T = String(((Le = (Ae = n.interaction) == null ? void 0 : Ae.stroke) == null ? void 0 : Le.toolKind) || "").trim();
    if (!N || y !== "paint" || T === "eraser" || R.some((Re) => Re.type === "strokeGroup" && String(Re.actionGroupId || "") === N))
      return R;
    const se = g();
    let ge = R.reduce((Re, He) => Math.max(Re, Number((He == null ? void 0 : He.z_index) || 0)), -1) + 1;
    return se && oe(se) && String(se.actionGroupId || "") === N && (ge = Number(se.z_index || 0)), [
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
    return x().slice().sort((h, R) => Number((h == null ? void 0 : h.z_index) || 0) - Number((R == null ? void 0 : R.z_index) || 0)).map((h) => A(ce("paint", (h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || ""))).filter(Boolean);
  }
  function fe() {
    var h;
    return (Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : []).filter((R) => String((R == null ? void 0 : R.layerKind) || "paint") === "paint").slice().sort((R, N) => Number((R == null ? void 0 : R.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0)).map((R) => be(F((R == null ? void 0 : R.id) || ""))).filter(Boolean);
  }
  function Se() {
    return r || !Array.isArray(o.stickers) ? [] : p();
  }
  function Q() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Se()];
  }
  function E(h) {
    return !!h && Array.isArray(o.shots) && o.shots.includes(h);
  }
  function X(h) {
    return !!h && Array.isArray(o.stickers) && o.stickers.includes(h);
  }
  function ae() {
    var h;
    return Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : [];
  }
  function be(h) {
    const R = pe(h);
    if (!R) return null;
    const N = ae().find((y) => String((y == null ? void 0 : y.id) || "").trim() === R);
    return !N || String((N == null ? void 0 : N.layerKind) || "paint") !== "paint" ? null : {
      ...N,
      id: F(R),
      type: "rasterObject",
      rasterObjectId: R
    };
  }
  function we(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "rasterObject") return !1;
    const R = pe(h.rasterObjectId || h.id || "");
    return !!R && !!be(F(R));
  }
  function A(h) {
    const R = C(h), N = String(R.actionGroupId || "").trim();
    if (!N) return null;
    const y = x().find((T) => String((T == null ? void 0 : T.id) || (T == null ? void 0 : T.actionGroupId) || "") === N || String((T == null ? void 0 : T.actionGroupId) || "") === N);
    return y ? {
      ...y,
      id: ce("paint", N),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: N
    } : null;
  }
  function oe(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "strokeGroup") return !1;
    const R = String(h.actionGroupId || "").trim(), N = String(h.layerKind || "paint").trim() || "paint";
    return !!R && !!A(ce(N, R));
  }
  function b(h, R = null) {
    const N = C(h, R), y = String(N.actionGroupId || "").trim();
    return y ? d(N.layerKind).filter((T) => String((T == null ? void 0 : T.actionGroupId) || "").trim() === y) : [];
  }
  function S(h, R = "paint") {
    const N = String(h || "").trim(), T = `geomv5:${String(R || "paint").trim() || "paint"}:${N}:${n.mode}:${f()}`;
    if (n.mode === "frame") {
      const se = l(), ge = String((se == null ? void 0 : se.id) || ""), he = se ? u(se) : null;
      return `${T}:frame:${ge}:${Math.round(Number((se == null ? void 0 : se.yaw_deg) || 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.pitch_deg) || 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.roll_deg) ?? (se == null ? void 0 : se.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((he == null ? void 0 : he.x) || 0))}:${Math.round(Number((he == null ? void 0 : he.y) || 0))}:${Math.round(Number((he == null ? void 0 : he.w) || 0))}:${Math.round(Number((he == null ? void 0 : he.h) || 0))}`;
    }
    return `${T}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
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
    const y = C(h, R), T = Array.isArray(N) ? N : b(y.actionGroupId, y.layerKind), se = [];
    if (T.forEach((Me) => {
      const Ae = (Me == null ? void 0 : Me.geometry) || null, Le = (Ae == null ? void 0 : Ae.geometryKind) === "lasso_fill" ? Ae == null ? void 0 : Ae.points : (Ae == null ? void 0 : Ae.processedPoints) || (Ae == null ? void 0 : Ae.rawPoints) || (Ae == null ? void 0 : Ae.points) || [];
      Array.isArray(Le) && se.push(...Le);
    }), !se.length) return { u: 0.5, v: 0.5 };
    const ge = Number(((ye = se[0]) == null ? void 0 : ye.u) || 0);
    let he = 0, ne = 0;
    return se.forEach((Me) => {
      he += ge + H(Number((Me == null ? void 0 : Me.u) || 0), ge), ne += Number((Me == null ? void 0 : Me.v) || 0);
    }), {
      u: (he / se.length % 1 + 1) % 1,
      v: Ee(ne / se.length, 0, 1)
    };
  }
  function w(h, R, N = 1, y = 0) {
    if (!h || typeof h != "object") return h;
    const T = Number((R == null ? void 0 : R.u) || 0), se = Number((R == null ? void 0 : R.v) || 0), ge = H(Number(h.u || 0), T), he = Number(h.v || 0) - se, ne = Number(y || 0) * yr, ye = Math.cos(ne), Me = Math.sin(ne), Ae = Math.max(0.02, Number(N || 1)), Le = (ge * ye - he * Me) * Ae, Re = (ge * Me + he * ye) * Ae;
    return {
      ...h,
      u: ((T + Le) % 1 + 1) % 1,
      v: Ee(se + Re, 0, 1)
    };
  }
  function D(h, R, N, y = null, T = null, se = null) {
    const ge = C(h, T), he = String(ge.actionGroupId || "").trim();
    if (!he) return !1;
    const ne = d(ge.layerKind), ye = Array.isArray(y) ? new Map(y.map((Ae) => [String((Ae == null ? void 0 : Ae.id) || ""), Ae])) : null;
    let Me = !1;
    if (ne.forEach((Ae) => {
      if (String((Ae == null ? void 0 : Ae.actionGroupId) || "").trim() !== he) return;
      const Le = (ye == null ? void 0 : ye.get(String((Ae == null ? void 0 : Ae.id) || ""))) || Ae, Re = Ae == null ? void 0 : Ae.geometry, He = Le == null ? void 0 : Le.geometry;
      !Re || !He || (Array.isArray(He.points) && (Re.points = He.points.map((ze) => $(ze, R, N)), Me = !0), Array.isArray(He.rawPoints) && (Re.rawPoints = He.rawPoints.map((ze) => $(ze, R, N)), Me = !0), Array.isArray(He.processedPoints) && (Re.processedPoints = He.processedPoints.map((ze) => $(ze, R, N)), Me = !0));
    }), Me && se) {
      const Ae = x().find((Le) => String((Le == null ? void 0 : Le.actionGroupId) || "") === he);
      Ae && (Ae.frame = null);
    }
    return Me;
  }
  function M(h, R = 1, N = 0, y = null, T = null, se = null) {
    const ge = C(h, T), he = String(ge.actionGroupId || "").trim();
    if (!he) return !1;
    const ne = d(ge.layerKind), ye = Array.isArray(y) ? y : b(he, ge.layerKind), Me = Array.isArray(ye) ? new Map(ye.map((Re) => [String((Re == null ? void 0 : Re.id) || ""), Re])) : null, Ae = (se == null ? void 0 : se.centerUv) ?? v(he, ge.layerKind, ye);
    let Le = !1;
    if (ne.forEach((Re) => {
      if (String((Re == null ? void 0 : Re.actionGroupId) || "").trim() !== he) return;
      const He = (Me == null ? void 0 : Me.get(String((Re == null ? void 0 : Re.id) || ""))) || Re, ze = Re == null ? void 0 : Re.geometry, q = He == null ? void 0 : He.geometry;
      !ze || !q || (Array.isArray(q.points) && (ze.points = q.points.map((Ce) => w(Ce, Ae, R, N)), Le = !0), Array.isArray(q.rawPoints) && (ze.rawPoints = q.rawPoints.map((Ce) => w(Ce, Ae, R, N)), Le = !0), Array.isArray(q.processedPoints) && (ze.processedPoints = q.processedPoints.map((Ce) => w(Ce, Ae, R, N)), Le = !0));
    }), Le && se) {
      const Re = x().find((He) => String((He == null ? void 0 : He.actionGroupId) || "") === he);
      Re && (Re.frame = null);
    }
    return Le;
  }
  function P(h, R, N, y = null) {
    const T = pe(h);
    if (!T) return !1;
    const se = ae().find((Me) => String((Me == null ? void 0 : Me.id) || "").trim() === T);
    if (!se) return !1;
    const ge = y && typeof y == "object" ? y : se, he = (ge == null ? void 0 : ge.transform) || {}, ne = Number(he.du || 0) + Number(R || 0), ye = Ee(Number(he.dv || 0) + Number(N || 0), -1, 1);
    return se.transform || (se.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), se.transform.du = ne, se.transform.dv = ye, !0;
  }
  function I(h, R = 1, N = null) {
    const y = pe(h);
    if (!y) return !1;
    const T = ae().find((ye) => String((ye == null ? void 0 : ye.id) || "").trim() === y);
    if (!T) return !1;
    const se = N && typeof N == "object" ? N : T, ge = (se == null ? void 0 : se.transform) || {}, he = Math.max(0.01, Number(ge.scale || 1)), ne = Ee(he * Math.max(0.01, Number(R || 1)), 0.01, 100);
    return T.transform || (T.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), T.transform.scale = ne, !0;
  }
  function K() {
    return Y();
  }
  function re(h) {
    var R;
    return !h || typeof h != "object" ? !1 : a ? ((R = h.source) == null ? void 0 : R.kind) === "port" : String(h.id || "") === wd || String(h.source_kind || "") === vP;
  }
  function me(h) {
    return !!(h && typeof h == "object" && h.visible === !1);
  }
  function j(h) {
    return re(h) && me(h) ? Sm : 1;
  }
  function de(h, R, N = 1, y = 0) {
    if (!h || typeof h != "object") return h;
    const T = Number((R == null ? void 0 : R.u) || 0), se = Number((R == null ? void 0 : R.v) || 0), ge = H(Number(h.u || 0), T), he = Number(h.v || 0) - se, ne = Math.max(0.02, Number(N || 1)), ye = Number(y || 0) * yr, Me = Math.cos(ye), Ae = Math.sin(ye), Le = ge / ne, Re = he / ne, He = Le * Me + Re * Ae, ze = -Le * Ae + Re * Me;
    return {
      ...h,
      u: ((T + He) % 1 + 1) % 1,
      v: se + ze
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
    }, y = Math.max(0.01, Number(((ne = h == null ? void 0 : h.transform) == null ? void 0 : ne.scale) || 1)), T = Number(((ye = h == null ? void 0 : h.transform) == null ? void 0 : ye.rot_deg) || 0), se = Number(((Me = h == null ? void 0 : h.transform) == null ? void 0 : Me.du) || 0), ge = Number(((Ae = h == null ? void 0 : h.transform) == null ? void 0 : Ae.dv) || 0);
    return [
      { u: Number(R.u0 || 0), v: Number(R.v0 || 0) },
      { u: Number(R.u1 || 0), v: Number(R.v0 || 0) },
      { u: Number(R.u1 || 0), v: Number(R.v1 || 0) },
      { u: Number(R.u0 || 0), v: Number(R.v1 || 0) }
    ].map((Le) => $(w(Le, N, y, T), se, ge));
  }
  function ue(h) {
    const R = pe((h == null ? void 0 : h.rasterObjectId) || (h == null ? void 0 : h.id) || ""), N = (h == null ? void 0 : h.transform) || {}, y = (h == null ? void 0 : h.bbox) || {}, T = `${R}:${n.mode}:${f()}:${y.u0}:${y.v0}:${y.u1}:${y.v1}:${N.du}:${N.dv}:${N.rot_deg}:${N.scale}`;
    if (n.mode === "frame") {
      const se = l(), ge = se ? u(se) : null;
      return `${T}:frame:${String((se == null ? void 0 : se.id) || "")}:${Math.round(Number((ge == null ? void 0 : ge.x) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.y) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.w) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.h) || 0))}`;
    }
    return `${T}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ve(h) {
    const R = String((h == null ? void 0 : h.id) || ""), N = E(h) ? "frame" : X(h) ? "sticker" : "item", y = z(h), T = [
      N,
      R,
      n.mode,
      Number((y == null ? void 0 : y.yaw_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.pitch_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.hFOV_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.vFOV_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.rot_deg) || 0).toFixed(4),
      Number((y == null ? void 0 : y.roll_deg) || 0).toFixed(4),
      Fr(y),
      O(h) && _(h)
    ].join(":");
    if (n.mode === "frame") {
      const se = l(), ge = se ? u(se) : null;
      return `${T}:frame:${String((se == null ? void 0 : se.id) || "")}:${Math.round(Number((ge == null ? void 0 : ge.x) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.y) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.w) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.h) || 0))}`;
    }
    return `${T}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Ne() {
    k().forEach((R, N) => {
      R.type === "sticker" && R.item && (R.item.z_index = N), R.type === "strokeGroup" && R.item && (R.item.z_index = N), R.type === "rasterObject" && R.item && (R.item.z_index = N);
    });
  }
  return {
    connect(h) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameViewRect: u,
        getPaintingLayerList: d,
        getPaintingRevisionKey: f,
        getSelected: g,
        sceneStickerShown: _
      } = h);
    },
    getList: m,
    skyStickers: p,
    isSceneSticker: O,
    isUploadingSticker: B,
    poseOf: z,
    writePose: G,
    getPaintingGroupList: x,
    makeStrokeGroupSelectionId: ce,
    makeRasterObjectSelectionId: F,
    parseRasterObjectSelectionId: pe,
    ensurePaintingGroupEntry: te,
    getFrameCornersUv: J,
    ensureGroupFrame: ie,
    getDisplayListObjects: k,
    getOrderedPaintGroupIds: L,
    getOrderedDisplayListObjects: Z,
    getSelectableStrokeGroupItems: V,
    getSelectableRasterObjectItems: fe,
    cutoutStickers: Se,
    getCutoutSelectableItems: Q,
    isShotItem: E,
    isStickerItem: X,
    getRasterObjectList: ae,
    getRasterObjectItem: be,
    isRasterObjectItem: we,
    getStrokeGroupItem: A,
    isStrokeGroupItem: oe,
    getStrokeGroupStrokes: b,
    getStrokeGeomCacheKey: S,
    shortestWrappedDelta: H,
    getStrokeGroupCenterUv: v,
    applyStrokeGroupOffset: D,
    applyStrokeGroupTransform: M,
    applyRasterObjectOffset: P,
    applyRasterObjectTransform: I,
    getNextStickerZIndex: K,
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
function cN(e) {
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
  let c, u, d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q;
  function E() {
    const h = String(t.selectedId || "");
    if (!h) return null;
    const R = x(h);
    if (R) return R;
    const N = B(h);
    return N || (o ? _().find((y) => String((y == null ? void 0 : y.id) || "") === h) || null : p().find((y) => String((y == null ? void 0 : y.id) || "") === h) || null);
  }
  function X() {
    const h = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], R = [], N = /* @__PURE__ */ new Set();
    return h.forEach((y) => {
      const T = String(y || "").trim();
      if (!T || N.has(T)) return;
      N.add(T);
      const se = T === String(t.selectedId || "") ? E() : x(T) || B(T) || (o ? _().find((ge) => String((ge == null ? void 0 : ge.id) || "") === T) : p().find((ge) => String((ge == null ? void 0 : ge.id) || "") === T));
      se && R.push(se);
    }), R;
  }
  function ae(h = null) {
    const R = Array.isArray(h) ? h : X();
    if (!R || R.length < 2) return null;
    const N = R.map((ye) => le(ye)).filter((ye) => (ye == null ? void 0 : ye.visible) && Array.isArray(ye.corners) && ye.corners.length);
    if (!N.length) return null;
    const y = N.flatMap((ye) => ye.corners.map((Me) => Number((Me == null ? void 0 : Me.x) || 0))), T = N.flatMap((ye) => ye.corners.map((Me) => Number((Me == null ? void 0 : Me.y) || 0))), se = Math.min(...y), ge = Math.max(...y), he = Math.min(...T), ne = Math.max(...T);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (se + ge) * 0.5, y: (he + ne) * 0.5 },
      corners: [
        { x: se, y: he },
        { x: ge, y: he },
        { x: ge, y: ne },
        { x: se, y: ne }
      ],
      edgeMidpoints: [
        { edge: "top", x: (se + ge) * 0.5, y: he, a: { x: se, y: he }, b: { x: ge, y: he } },
        { edge: "right", x: ge, y: (he + ne) * 0.5, a: { x: ge, y: he }, b: { x: ge, y: ne } },
        { edge: "bottom", x: (se + ge) * 0.5, y: ne, a: { x: ge, y: ne }, b: { x: se, y: ne } },
        { edge: "left", x: se, y: (he + ne) * 0.5, a: { x: se, y: ne }, b: { x: se, y: he } }
      ],
      rotateStemBase: { x: (se + ge) * 0.5, y: he },
      rotateHandle: { x: (se + ge) * 0.5, y: he - 30 }
    };
  }
  function be(h) {
    const R = String((h == null ? void 0 : h.id) || "").trim();
    return !!R && Array.isArray(t.selectedIds) && t.selectedIds.includes(R);
  }
  function we() {
    const h = E();
    return h ? te(h) || ce(h) ? "stroke" : pe(h) ? "frame" : "image" : null;
  }
  function A(h) {
    if (!h || typeof h != "object") return !1;
    if (te(h)) {
      const R = String(h.actionGroupId || h.id || "").trim(), N = O().find((y) => String((y == null ? void 0 : y.actionGroupId) || (y == null ? void 0 : y.id) || "").trim() === R);
      return (N == null ? void 0 : N.locked) === !0;
    }
    if (ce(h)) {
      const R = k(h.rasterObjectId || h.id || ""), N = z().find((y) => String((y == null ? void 0 : y.id) || "").trim() === R);
      return (N == null ? void 0 : N.locked) === !0;
    }
    return h.locked === !0;
  }
  function oe(h = null) {
    const R = Array.isArray(h) ? h : X();
    return R.length > 0 && R.every((N) => A(N));
  }
  function b(h, R) {
    const N = R === !0;
    if (!h || typeof h != "object") return !1;
    if (te(h)) {
      const y = String(h.actionGroupId || h.id || "").trim(), T = O().find((se) => String((se == null ? void 0 : se.actionGroupId) || (se == null ? void 0 : se.id) || "").trim() === y);
      return !T || T.locked === N ? !1 : (T.locked = N, !0);
    }
    if (ce(h)) {
      const y = k(h.rasterObjectId || h.id || ""), T = z().find((se) => String((se == null ? void 0 : se.id) || "").trim() === y);
      return !T || T.locked === N ? !1 : (T.locked = N, !0);
    }
    return h.locked === N ? !1 : (h.locked = N, !0);
  }
  function S() {
    if (r) return;
    const h = X();
    if (!h.length) return;
    const R = !oe(h);
    let N = !1;
    h.forEach((y) => {
      b(y, R) && (N = !0);
    }), N && (Z(), u(), Se(), Q(), V());
  }
  function $(h) {
    de(), s.selection = null, t.selectedId = (h == null ? void 0 : h.id) || null, t.selectedIds = h != null && h.id ? [h.id] : [], h && Y(h) ? a.active.selected_sticker_id = h.id || null : a.active.selected_sticker_id = null, h && pe(h) ? a.active.selected_shot_id = h.id || null : h ? pe(h) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function H(h, R = null) {
    const N = [], y = /* @__PURE__ */ new Set();
    (Array.isArray(h) ? h : []).forEach((ge) => {
      const he = String((ge == null ? void 0 : ge.id) || "").trim();
      !he || y.has(he) || (y.add(he), N.push(he));
    }), t.selectedIds = N, de(), s.selection = null;
    const T = String(R || "").trim();
    t.selectedId = T && N.includes(T) ? T : N[N.length - 1] || null;
    const se = E();
    a.active.selected_sticker_id = se && Y(se) && se.id || null, se && pe(se) ? a.active.selected_shot_id = se.id || null : N.length || (a.active.selected_shot_id = null);
  }
  function v() {
    const h = (Array.isArray(a.shots) ? a.shots : []).map((N, y) => ({
      kind: "frame",
      item: N,
      label: String((N == null ? void 0 : N.label) || `Frame ${y + 1}`)
    })), R = f().map((N, y) => {
      var se, ge;
      const T = W(N) ? String(N.id || wd) : String(((ge = (se = a.assets) == null ? void 0 : se[N.asset_id]) == null ? void 0 : ge.name) || N.asset_id || N.id || `Image ${y + 1}`);
      return {
        kind: "image",
        item: N,
        label: T
      };
    });
    return [...h, ...R];
  }
  function w(h) {
    return h === "frame" ? Ge.camera : h === "stroke" ? Ge.paintbrush_vertical_tool : Ge.image;
  }
  function D(h) {
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
    const h = E();
    !h || !W(h) || (h.visible = C(h), ue(), J(), Z(), u(), Q(), Se(), V());
  }
  function P() {
    if (r || l !== "stickers") return;
    const h = E();
    if (!h || !W(h)) return;
    const R = h.initial_pose;
    if (!R || typeof R != "object") return;
    h.yaw_deg = Number(R.yaw_deg ?? h.yaw_deg ?? 0), h.pitch_deg = Number(R.pitch_deg ?? h.pitch_deg ?? 0), h.hFOV_deg = Number(R.hFOV_deg ?? h.hFOV_deg ?? 30);
    const N = G(io, () => {
      V();
    });
    N && (N.complete || N.naturalWidth || N.width) ? h.vFOV_deg = d(
      Number(R.hFOV_deg ?? h.hFOV_deg ?? 30),
      Number(N.naturalWidth || N.width || 1),
      Number(N.naturalHeight || N.height || 1)
    ) : h.vFOV_deg = Number(R.vFOV_deg ?? h.vFOV_deg ?? 30), h.rot_deg = Number(R.rot_deg ?? h.rot_deg ?? 0), Z(), u(), Q(), Se(), V();
  }
  function I(h) {
    if (!h || !W(h)) return null;
    const R = h.initial_pose;
    if (!R || typeof R != "object") return null;
    const N = {
      yaw_deg: Number(R.yaw_deg ?? h.yaw_deg ?? 0),
      pitch_deg: Number(R.pitch_deg ?? h.pitch_deg ?? 0),
      hFOV_deg: Number(R.hFOV_deg ?? h.hFOV_deg ?? 30),
      vFOV_deg: Number(R.vFOV_deg ?? h.vFOV_deg ?? 30),
      rot_deg: Number(R.rot_deg ?? h.rot_deg ?? 0)
    }, y = G(io, () => {
      V();
    });
    return y && (y.complete || y.naturalWidth || y.width) && (N.vFOV_deg = d(
      N.hFOV_deg,
      Number(y.naturalWidth || y.width || 1),
      Number(y.naturalHeight || y.height || 1)
    )), N;
  }
  function K() {
    const h = E();
    if (!h || !W(h)) return !1;
    const R = I(h);
    if (!R) return !1;
    const N = (y, T) => Math.abs(Number(y || 0) - Number(T || 0)) <= 1e-4;
    return !(N(h.yaw_deg, R.yaw_deg) && N(h.pitch_deg, R.pitch_deg) && N(h.hFOV_deg, R.hFOV_deg) && N(h.vFOV_deg, R.vFOV_deg) && N(h.rot_deg, R.rot_deg));
  }
  function re(h = {}) {
    const N = h.preservePanelValues !== !1 ? L(E()) : null;
    N && (t.panelLastValues = {
      yaw_deg: Number(N.yaw_deg || 0),
      pitch_deg: Number(N.pitch_deg || 0),
      hFOV_deg: Number(N.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(N.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(N.rot_deg || 0),
      roll_deg: Number(N.roll_deg || 0),
      aspect_id: Fr(N)
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
    const h = E();
    (F(h) && !fe(h) || t.selectedId === wl && ee() && !c() || we() === "stroke" && !ie()) && $(null), ((R = me()) == null ? void 0 : R.visible) === !1 && de();
  }
  function ve() {
    if (r) return;
    const h = X();
    if (!E() || h.length === 0 || h.some((he) => A(he))) return;
    U();
    const N = m(), y = new Set(h.map((he) => Y(he) ? `sticker:${String(he.id || "")}` : ce(he) ? `rasterObject:${k(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), T = [], se = [];
    if (N.forEach((he) => {
      var ye, Me;
      const ne = he.type === "sticker" ? `sticker:${String(((ye = he.item) == null ? void 0 : ye.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((Me = he.item) == null ? void 0 : Me.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      y.has(ne) ? T.push(he) : se.push(he);
    }), !T.length || T[T.length - 1] === N[N.length - 1]) return;
    [...se, ...T].forEach((he, ne) => {
      he.type === "sticker" && he.item && (he.item.z_index = ne), he.type === "strokeGroup" && he.item && (he.item.z_index = ne), he.type === "rasterObject" && he.item && (he.item.z_index = ne);
    }), J(), Z(), u(), Se(), V();
  }
  function Ne() {
    if (r) return;
    const h = X();
    if (!E() || h.length === 0 || h.some((he) => A(he))) return;
    U();
    const N = m(), y = new Set(h.map((he) => Y(he) ? `sticker:${String(he.id || "")}` : ce(he) ? `rasterObject:${k(he.rasterObjectId || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || he.id || "")}`)), T = [], se = [];
    if (N.forEach((he) => {
      var ye, Me;
      const ne = he.type === "sticker" ? `sticker:${String(((ye = he.item) == null ? void 0 : ye.id) || "")}` : he.type === "rasterObject" ? `rasterObject:${String(((Me = he.item) == null ? void 0 : Me.id) || he.id || "")}` : `strokeGroup:${String(he.actionGroupId || "")}`;
      y.has(ne) ? T.push(he) : se.push(he);
    }), !T.length || T[0] === N[0]) return;
    [...T, ...se].forEach((he, ne) => {
      he.type === "sticker" && he.item && (he.item.z_index = ne), he.type === "strokeGroup" && he.item && (he.item.z_index = ne), he.type === "rasterObject" && he.item && (he.item.z_index = ne);
    }), J(), Z(), u(), Se(), V();
  }
  return {
    connect(h) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: u,
        computeStickerVFov: d,
        cutoutStickers: f,
        getActiveCutoutShot: g,
        getCutoutSelectableItems: _,
        getDisplayListObjects: m,
        getList: p,
        getPaintingGroupList: O,
        getRasterObjectItem: B,
        getRasterObjectList: z,
        getStickerUiImage: G,
        getStrokeGroupItem: x,
        hasCamera: ee,
        isExternalSticker: W,
        isRasterObjectItem: ce,
        isSceneSticker: F,
        isShotItem: pe,
        isStickerHidden: C,
        isStickerItem: Y,
        isStrokeGroupItem: te,
        markObjectVisualsDirty: J,
        normalizeDisplayZIndices: U,
        objectGeom: le,
        paintingShown: ie,
        parseRasterObjectSelectionId: k,
        poseOf: L,
        pushHistory: Z,
        requestDraw: V,
        sceneStickerShown: fe,
        updateSelectionMenu: Se,
        updateSidePanel: Q
      } = h);
    },
    getSelected: E,
    getSelectedItems: X,
    getMultiSelectionGeom: ae,
    isItemSelected: be,
    getSelectedKind: we,
    isItemLocked: A,
    areAllSelectedItemsLocked: oe,
    toggleSelectedLock: S,
    setSelectedItem: $,
    setSelectedItems: H,
    getCutoutInspectorItems: v,
    getSelectionItemIcon: w,
    getSelectionItemLabelData: D,
    toggleSelectedExternalStickerVisibility: M,
    restoreSelectedToInitialPose: P,
    canRestoreSelectedToInitial: K,
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
function uN(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, c, u, d, f = { key: [], projection: null };
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
    const E = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return E.some((X, ae) => X !== f.key[ae]) && (f = { key: E, projection: km(m(), r.width, r.height) }), f.projection;
  }
  function O(E) {
    const X = p().project(E);
    return X.z > 1e-4 ? X : null;
  }
  function B(E, X) {
    return p().ray(E, X);
  }
  function z() {
    const E = r.width, X = r.height, ae = 2;
    if (E / Math.max(X, 1) >= ae) {
      const b = X, S = b * ae;
      return { x: (E - S) * 0.5, y: 0, w: S, h: b };
    }
    const we = E, A = we / ae;
    return { x: 0, y: (X - A) * 0.5, w: we, h: A };
  }
  function G(E) {
    return {
      lon: Math.atan2(E.x, E.z),
      lat: Math.asin(Ee(E.y, -1, 1))
    };
  }
  function x(E, X = null) {
    const { lon: ae, lat: be } = G(E), we = z();
    let A = we.x + (ae / (2 * Math.PI) + 0.5) * we.w;
    const oe = we.y + (0.5 - be / Math.PI) * we.h;
    if (X !== null) {
      for (; A - X > we.w / 2; ) A -= we.w;
      for (; A - X < -we.w / 2; ) A += we.w;
    }
    return { x: A, y: oe, z: 1 };
  }
  function ee(E) {
    const X = c(E), ae = so(
      Number(X.yaw_deg || 0),
      Number(X.pitch_deg || 0),
      Number(X.rot_deg || X.roll_deg || 0)
    ), be = Math.tan(Ee(Number(X.hFOV_deg || 20), 0.1, 179) * 0.5 * yr), we = Math.tan(Ee(Number(X.vFOV_deg || 20), 0.1, 179) * 0.5 * yr);
    return {
      centerDir: ae.fwd,
      right: ae.right,
      up: ae.up,
      tanX: be,
      tanY: we
    };
  }
  function W(E, X, ae) {
    return FP(ap(ap(E.centerDir, sp(E.right, X)), sp(E.up, ae)));
  }
  function ce(E) {
    const X = ee(E);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: be, v: we }) => W(X, be * X.tanX, we * X.tanY));
  }
  function F(E, X, ae) {
    const be = ee(E), we = (X * 2 - 1) * be.tanX, A = (1 - ae * 2) * be.tanY;
    return W(be, we, A);
  }
  function pe(E) {
    const X = t.width / Math.max(1, r.width), ae = t.height / Math.max(1, r.height);
    return { x: E.x * X, y: E.y * ae, w: E.w * X, h: E.h * ae };
  }
  function C(E, X = null, ae = null, be = null) {
    if (n.mode === "frame") {
      const we = X || s();
      if (!we) return [];
      const A = ae || l(we);
      return Z(E, we, A);
    }
    return ie(E, be);
  }
  function Y(E, X = null, ae = null, be = null, we = null) {
    if (!E) return null;
    if (n.mode === "unwrap") {
      const oe = ie([E], we);
      return oe[0] ? { x: oe[0].x, y: oe[0].y, z: 1 } : null;
    }
    const A = J(E);
    return A ? u(A, X, ae, be) : null;
  }
  function te(E, X) {
    if (!E || !X) return null;
    const ae = Number(X.x || 0), be = Number(X.y || 0);
    return F(E, ae, be);
  }
  function J(E) {
    if (!E) return null;
    const X = (Number(E.u || 0) - 0.5) * (2 * Math.PI), ae = (0.5 - Number(E.v || 0)) * Math.PI, be = Math.cos(ae);
    return Nl(be * Math.sin(X), Math.sin(ae), be * Math.cos(X));
  }
  function U(E, X) {
    if (!E || !X) return null;
    const ae = ee(E), be = hc(X, ae.centerDir);
    if (!Number.isFinite(be) || be <= 1e-6) return null;
    const we = hc(X, ae.right) / be, A = hc(X, ae.up) / be;
    return {
      x: (we / Math.max(1e-6, ae.tanX) + 1) * 0.5,
      y: (1 - A / Math.max(1e-6, ae.tanY)) * 0.5
    };
  }
  function le(E) {
    if (!Array.isArray(E) || E.length < 3) return [];
    if (n.mode === "unwrap") {
      const ae = z();
      return E.map((be) => ({
        x: ae.x + Number(be.u || 0) * ae.w,
        y: ae.y + Number(be.v || 0) * ae.h
      }));
    }
    const X = E.map((ae) => O(J(ae))).filter(Boolean);
    return X.every((ae) => Number(ae.z || 0) > 0) ? X.map((ae) => ({ x: Number(ae.x || 0), y: Number(ae.y || 0) })) : [];
  }
  function ie(E, X = null) {
    if (!Array.isArray(E) || E.length < 1) return [];
    if (n.mode === "unwrap") {
      const be = z();
      return E.map((we) => {
        const A = (Number(we.u || 0) % 1 + 1) % 1, oe = X == null ? A : Number(X || 0) + d(A, X);
        return {
          x: be.x + oe * be.w,
          y: be.y + Number(we.v || 0) * be.h
        };
      });
    }
    const ae = E.map((be) => O(J(be))).filter(Boolean);
    return ae.every((be) => Number(be.z || 0) > 0) ? ae.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function k(E, X = 160) {
    if (!Array.isArray(E) || E.length < 3) return !1;
    for (let ae = 0; ae < E.length; ae += 1) {
      const be = E[ae], we = E[(ae + 1) % E.length];
      if (!be || !we || !Number.isFinite(be.x) || !Number.isFinite(be.y) || !Number.isFinite(we.x) || !Number.isFinite(we.y) || Math.hypot(Number(we.x) - Number(be.x), Number(we.y) - Number(be.y)) > X) return !1;
    }
    return !0;
  }
  function L(E, X, ae) {
    if (!Array.isArray(E) || E.length < 3 || !X || !ae) return [];
    const be = [];
    for (const we of E) {
      const A = J(we), oe = U(X, A);
      if (!oe) return [];
      be.push({
        x: Number(ae.x || 0) + Number(oe.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(oe.y || 0) * Number(ae.h || 0)
      });
    }
    return k(be, Math.max(80, Math.max(ae.w, ae.h) * 0.75)) ? be : [];
  }
  function Z(E, X, ae) {
    if (!Array.isArray(E) || E.length < 1 || !X || !ae) return [];
    const be = [];
    for (const we of E) {
      const A = J(we), oe = U(X, A);
      oe && be.push({
        x: Number(ae.x || 0) + Number(oe.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(oe.y || 0) * Number(ae.h || 0)
      });
    }
    return be;
  }
  function V(E) {
    const X = r.getBoundingClientRect();
    return {
      x: (E.clientX - X.left) / X.width * r.width,
      y: (E.clientY - X.top) / X.height * r.height
    };
  }
  function fe(E) {
    const X = r.getBoundingClientRect();
    return {
      x: Number(E.clientX) - Number(X.left || 0),
      y: Number(E.clientY) - Number(X.top || 0)
    };
  }
  function Se(E, X = performance.now()) {
    if (n.mode === "unwrap") {
      const A = z(), oe = (E.x - A.x) / Math.max(1, A.w), b = (E.y - A.y) / Math.max(1, A.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (oe % 1 + 1) % 1,
        v: Ee(b, 0, 1),
        t: Number(X || 0)
      };
    }
    const ae = B(E.x, E.y), { lon: be, lat: we } = G(ae);
    return {
      targetKind: "ERP_GLOBAL",
      u: (be / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - we / Math.PI, 0, 1),
      t: Number(X || 0)
    };
  }
  function Q(E, X, ae = performance.now()) {
    const be = l(X);
    if (!be) return null;
    const we = {
      x: (Number(E.x) - be.x) / Math.max(1, be.w),
      y: (Number(E.y) - be.y) / Math.max(1, be.h)
    };
    if (we.x < 0 || we.x > 1 || we.y < 0 || we.y > 1) return null;
    const A = te(X, we);
    if (!A) return null;
    const { lon: oe, lat: b } = G(A);
    return {
      targetKind: "ERP_GLOBAL",
      u: (oe / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - b / Math.PI, 0, 1),
      t: Number(ae || 0)
    };
  }
  return {
    connect(E) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: u,
        shortestWrappedDelta: d
      } = E);
    },
    isErpCamera: g,
    currentViewCamera: m,
    currentViewProjection: p,
    projectDir: O,
    screenToWorldDir: B,
    getUnwrapRect: z,
    projectDirUnwrap: x,
    getStickerFrame: ee,
    stickerDirFromFrame: W,
    stickerCornersDir: ce,
    stickerSampleDir: F,
    stickerCornerOrderSanity: _,
    projectEditorPoints: C,
    projectErpPointToEditor: Y,
    frameLocalPointToWorldDir: te,
    erpPointToWorldDir: J,
    worldDirToFrameLocalPoint: U,
    projectLassoPointsToCurrentView: le,
    projectErpLassoPointsToFrameRect: L,
    screenPos: V,
    screenPosCss: fe,
    screenPosToErpPoint: Se,
    screenPosToFrameAsErpPoint: Q,
    deviceRect: pe
  };
}
function dN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, c, u, d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z;
  function V(A, oe) {
    const b = String(A.actionGroupId || A.id || "").trim(), S = z(b, A.layerKind), $ = s(b, A.layerKind, S), H = ($ == null ? void 0 : $.centerUv) || B(b, A.layerKind, S), v = n.mode === "unwrap" ? Number((H == null ? void 0 : H.u) || 0) : null, w = [], D = n.mode === "frame" ? l() : null, M = D ? d(D) : null;
    for (const ue of S) {
      const ve = (ue == null ? void 0 : ue.geometry) || null, Ne = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], h = J(Ne, D, M, v).filter((y) => Number.isFinite(y == null ? void 0 : y.x) && Number.isFinite(y == null ? void 0 : y.y));
      if (!h.length) continue;
      const R = c(String((ue == null ? void 0 : ue.toolKind) || "pen")), N = An[R] || An[Ar];
      w.push({
        points: h,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ue == null ? void 0 : ue.size) || 10) * Math.max(0.1, Number((N == null ? void 0 : N.sizeScale) ?? 1)) + 10),
        layerKind: String((ue == null ? void 0 : ue.layerKind) || A.layerKind || "paint")
      });
    }
    const P = U(H, null, D, M, v);
    if (!P) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(oe, ue), ue;
    }
    const K = u($).map((ue) => U(ue, P.x, D, M, v)).filter((ue) => Number.isFinite(ue == null ? void 0 : ue.x) && Number.isFinite(ue == null ? void 0 : ue.y)).map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) }));
    if (K.length < 4) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(oe, ue), ue;
    }
    const re = (ue, ve) => ({
      x: (Number((ue == null ? void 0 : ue.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((ue == null ? void 0 : ue.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: ue,
      b: ve
    }), me = re(K[0], K[1]), j = re(K[1], K[2]), de = re(K[2], K[3]), _e = re(K[3], K[0]), ke = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: K,
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
    return n._strokeGeomCache.set(oe, ke), ke;
  }
  function fe(A, oe) {
    const b = n.mode === "frame" ? l() : null, S = b ? d(b) : null, $ = f(A), H = n.mode === "unwrap" ? Number(($ == null ? void 0 : $.u) || 0) : null, v = U($, null, b, S, H), D = _(A).map((K) => U(K, (v == null ? void 0 : v.x) ?? null, b, S, H)).filter((K) => Number.isFinite(K == null ? void 0 : K.x) && Number.isFinite(K == null ? void 0 : K.y));
    if (!Array.isArray(D) || D.length < 4) {
      const K = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(oe, K), K;
    }
    const M = D.slice(0, 4).map((K) => ({ x: Number((K == null ? void 0 : K.x) || 0), y: Number((K == null ? void 0 : K.y) || 0) })), I = {
      kind: "rasterObject",
      center: {
        x: M.reduce((K, re) => K + Number(re.x || 0), 0) / M.length,
        y: M.reduce((K, re) => K + Number(re.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return n._strokeGeomCache.set(oe, I), I;
  }
  function Se(A, oe = null, b = null, S = null, $ = {}) {
    if (n.mode === "frame") {
      const P = b || l(), I = S || d(P);
      if (!P || !I) return null;
      const K = P ? Z(P, A) : null;
      return K ? {
        x: Number(I.x || 0) + Number(K.x || 0) * Number(I.w || 0),
        y: Number(I.y || 0) + Number(K.y || 0) * Number(I.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return te(A, oe);
    const H = 1e-4, v = o().project(A, H);
    if (!Number.isFinite(v.z) || v.z <= H && !($ != null && $.clipBehind)) return null;
    const w = r.width, D = r.height, M = Math.max(w, D) * 2;
    return {
      x: Ee(v.x, -M, w + M),
      y: Ee(v.y, -M, D + M),
      z: Math.max(v.z, H),
      rawZ: v.z,
      clipped: v.z <= H
    };
  }
  function Q(A, oe = []) {
    if (n.mode !== "pano" || ce(A)) return 1;
    const b = oe.map((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z))).filter((S) => Number.isFinite(S));
    return b.length ? EP(0.035, 0.2, Math.min(...b)) : 1;
  }
  function E(A) {
    if (ee(A) && !le(A)) return { visible: !1 };
    const oe = C(A), b = In(Number(oe.yaw_deg || 0), Number(oe.pitch_deg || 0)), S = n.mode === "frame" ? l() : null, $ = S ? d(S) : null, H = n.mode === "pano" && (ce(A) || W(A)), v = H ? { clipBehind: !0 } : null, w = Se(b, null, S, $, v);
    if (!w) return { visible: !1 };
    const D = p(A), P = ie(A).map((T) => Se(T, w.x, S, $, v)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (P.length < 4) return { visible: !1 };
    const I = k(D, 0, D.tanY), K = k(D, 0, D.tanY + Math.max(D.tanY * 0.43, 0.053)), re = Se(I, w.x, S, $, v);
    if (!re) return { visible: !1 };
    const me = Se(K, (re == null ? void 0 : re.x) ?? w.x, S, $, v), j = ((me == null ? void 0 : me.x) ?? re.x) - re.x, de = ((me == null ? void 0 : me.y) ?? re.y) - re.y, _e = Math.hypot(j, de) || 1, ke = {
      x: re.x + j / _e * 30,
      y: re.y + de / _e * 30
    }, ue = Se(k(D, 0, D.tanY), w.x, S, $, v), ve = Se(k(D, D.tanX, 0), w.x, S, $, v), Ne = Se(k(D, 0, -D.tanY), w.x, S, $, v), h = Se(k(D, -D.tanX, 0), w.x, S, $, v);
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
    if (H && !R.some((T) => Number((T == null ? void 0 : T.rawZ) ?? (T == null ? void 0 : T.z)) > 1e-4)) return { visible: !1 };
    const N = Q(A, R), y = [
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
      corners: P.map((T) => ({ x: T.x, y: T.y })),
      edgeMidpoints: y,
      rotateStemBase: { x: re.x, y: re.y },
      rotateHandle: ke,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: N,
      visible: !0
    };
  }
  function X(A) {
    if (t && W(A) && G()) return { visible: !1 };
    if (!pe() && (F(A) || x(A))) return { visible: !1 };
    if (F(A)) {
      const $ = String(A.actionGroupId || A.id || "").trim(), H = O($, A.layerKind), v = n._strokeGeomCache.get(H);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), V(A, H));
    }
    if (x(A)) {
      const $ = g(A), H = n._strokeGeomCache.get($);
      return H || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), fe(A, $));
    }
    const oe = m(A), b = n._strokeGeomCache.get(oe);
    if (b) return b;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const S = E(A);
    return n._strokeGeomCache.set(oe, S), S;
  }
  function ae(A, oe, b, S = null) {
    const $ = [];
    for (let H = 0; H <= b; H += 1) {
      const v = H / b;
      let w = 0, D = 0;
      oe === 0 ? (w = v, D = 0) : oe === 1 ? (w = 1, D = v) : oe === 2 ? (w = 1 - v, D = 1) : (w = 0, D = 1 - v);
      const M = L(A, w, D), P = n.mode === "unwrap" ? te(M, S) : Y(M);
      P && $.push(P);
    }
    return $;
  }
  function be() {
    const A = [...Array.isArray(i.shots) ? i.shots : []], oe = [...a()].sort((b, S) => Number(b.z_index || 0) - Number(S.z_index || 0));
    return [...A, ...oe];
  }
  function we() {
    const A = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((b, S) => Number(S.z_index || 0) - Number(b.z_index || 0)), ...A];
  }
  return {
    connect(A) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: u,
        getFrameViewRect: d,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: g,
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: m,
        getStickerFrame: p,
        getStrokeGeomCacheKey: O,
        getStrokeGroupCenterUv: B,
        getStrokeGroupStrokes: z,
        isFreeSpaceView: G,
        isRasterObjectItem: x,
        isSceneSticker: ee,
        isShotItem: W,
        isStickerItem: ce,
        isStrokeGroupItem: F,
        paintingShown: pe,
        poseOf: C,
        projectDir: Y,
        projectDirUnwrap: te,
        projectEditorPoints: J,
        projectErpPointToEditor: U,
        sceneStickerShown: le,
        stickerCornersDir: ie,
        stickerDirFromFrame: k,
        stickerSampleDir: L,
        worldDirToFrameLocalPoint: Z
      } = A);
    },
    projectSceneItemDir: Se,
    objectGeom: X,
    sampleStickerEdge: ae,
    getCutoutSelectableItemsForDisplay: be,
    getCutoutSelectableItemsForHit: we
  };
}
const ts = /* @__PURE__ */ new Map();
function fN(e) {
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
  let c, u, d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y;
  function te(v = n.interaction) {
    const w = String((v == null ? void 0 : v.kind) || "");
    if (w === "paint_stroke" || w === "paint_lasso_fill" || w === "move_stroke_group" || w === "scale_stroke_group" || w === "rotate_stroke_group" || w === "move_raster_object" || w === "scale_raster_object") return !0;
    if (w === "move_multi") {
      const D = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, M = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return D || M;
    }
    return !1;
  }
  function J() {
    var w, D, M, P;
    let v = null;
    try {
      const I = p(), K = ((P = (M = (D = (w = n.paintEngine) == null ? void 0 : w.getErpTarget) == null ? void 0 : D.call(w, I)) == null ? void 0 : M.displayPaint) == null ? void 0 : P.canvas) || null;
      K && (v = {
        source: K,
        revision: `${O()}:${U()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function U() {
    var P, I, K, re, me, j, de;
    const v = n.interaction, w = String((v == null ? void 0 : v.kind) || "");
    if (!te(v)) return "";
    if (w === "paint_stroke" || w === "paint_lasso_fill") {
      const _e = ((P = v == null ? void 0 : v.stroke) == null ? void 0 : P.geometry) || null, ke = String(((I = v == null ? void 0 : v.stroke) == null ? void 0 : I.layerKind) || ""), ue = ((K = _e == null ? void 0 : _e.rawPoints) == null ? void 0 : K.length) ?? ((re = _e == null ? void 0 : _e.points) == null ? void 0 : re.length) ?? 0, ve = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${ke || "paint"}_${w}_live${ve}_${ue}_${n.livePaintInteractionRevision}`;
    }
    const D = String(((me = v == null ? void 0 : v.item) == null ? void 0 : me.actionGroupId) || ""), M = String(((j = v == null ? void 0 : v.item) == null ? void 0 : j.rasterObjectId) || ((de = v == null ? void 0 : v.item) == null ? void 0 : de.id) || "");
    return `_${w}_${D || M || "active"}_${n.livePaintInteractionRevision}`;
  }
  function le(v, w = null) {
    const D = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!D) return null;
    const M = s.get(D);
    if (M)
      return M.complete || M.width || M.naturalWidth, M;
    const P = new Image();
    return P.onload = () => {
      typeof w == "function" && w();
    }, P.src = D, s.set(D, P), P;
  }
  function ie(v) {
    const w = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!w) return null;
    const D = a.get(w);
    if (D) return D.ready ? D : null;
    const M = le(v, () => {
      const de = a.get(w);
      de && (de.ready = !1), pe({ localOnly: !0 });
    });
    if (!M || !(M.complete || M.width || M.naturalWidth)) return null;
    const P = Number(M.naturalWidth || M.width || 0), I = Number(M.naturalHeight || M.height || 0);
    if (P < 1 || I < 1) return null;
    const K = rn({ label: "editor.image-pixels" });
    K.width = P, K.height = I;
    const re = K.getContext("2d", { willReadFrequently: !0 });
    if (!re) return null;
    re.clearRect(0, 0, P, I), re.drawImage(M, 0, 0, P, I);
    const me = re.getImageData(0, 0, P, I).data, j = { canvas: K, width: P, height: I, alpha: me, ready: !0 };
    return a.set(w, j), j;
  }
  function k(v, w) {
    if (!v || !w) return null;
    const D = (v == null ? void 0 : v.bbox) || null;
    if (!D) return null;
    const M = (v == null ? void 0 : v.transform) || {}, P = {
      u: (Number(D.u0 || 0) + Number(D.u1 || 0)) * 0.5,
      v: (Number(D.v0 || 0) + Number(D.v1 || 0)) * 0.5
    }, I = {
      u: ((Number(w.u || 0) - Number(M.du || 0)) % 1 + 1) % 1,
      v: Number(w.v || 0) - Number(M.dv || 0)
    }, K = G(
      I,
      P,
      Number(M.scale || 1),
      Number(M.rot_deg || 0)
    ), re = Number(D.u1 || 0) - Number(D.u0 || 0), me = Number(D.v1 || 0) - Number(D.v0 || 0);
    if (!(re > 1e-6) || !(me > 1e-6)) return null;
    const j = Y(Number(K.u || 0), Number(D.u0 || 0)) / re, de = (Number(K.v || 0) - Number(D.v0 || 0)) / me;
    if (j < 0 || j > 1 || de < 0 || de > 1) return 0;
    const _e = ie(v);
    if (!_e) return null;
    const ke = Ee(Math.floor(j * _e.width), 0, _e.width - 1), ue = Ee(Math.floor(de * _e.height), 0, _e.height - 1);
    return Number(_e.alpha[(ue * _e.width + ke) * 4 + 3] || 0);
  }
  function L(v, w, D, M = null) {
    if (!(w != null && w.visible) || !Br(D, w.corners)) return !1;
    const P = M || C(D, performance.now()), I = k(v, P);
    return I === null ? !0 : I > 8;
  }
  function Z() {
    var M, P, I, K, re, me, j, de;
    const v = ((P = (M = n.paintEngine) == null ? void 0 : M.getErpTarget) == null ? void 0 : P.call(M, p(!1))) || null, w = Math.max(1, Number(((I = v == null ? void 0 : v.descriptor) == null ? void 0 : I.width) || ((re = (K = v == null ? void 0 : v.displayPaint) == null ? void 0 : K.canvas) == null ? void 0 : re.width) || 2048)), D = Math.max(1, Number(((me = v == null ? void 0 : v.descriptor) == null ? void 0 : me.height) || ((de = (j = v == null ? void 0 : v.displayPaint) == null ? void 0 : j.canvas) == null ? void 0 : de.height) || 1024));
    return { width: w, height: D };
  }
  function V() {
    var ue, ve, Ne;
    const v = n.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const w = (v == null ? void 0 : v.stroke) || null;
    if (!w || String((w == null ? void 0 : w.layerKind) || "") !== "paint" || String((w == null ? void 0 : w.toolKind) || "") !== "eraser") return null;
    const D = f(), M = `${U()}:${D.width}:${D.height}`;
    if (((ue = n._activePaintEraserPreviewInfo) == null ? void 0 : ue.cacheKey) === M)
      return n._activePaintEraserPreviewInfo.value || null;
    const P = dn(w), I = (P == null ? void 0 : P.geometry) || null;
    if (I && String(I.geometryKind || "") !== "lasso_fill") {
      const h = Array.isArray(I.rawPoints) && I.rawPoints.length ? I.rawPoints : Array.isArray(I.points) ? I.points : [];
      I.processedPoints = W(h, P.targetSpace, !0);
    }
    const K = u(D.width, D.height, { readback: !0 });
    if (!ce(K, P, { w: D.width, h: D.height })) return null;
    const re = ((Ne = (ve = K.ctx) == null ? void 0 : ve.getImageData(0, 0, D.width, D.height)) == null ? void 0 : Ne.data) || null;
    if (!re) return null;
    let me = D.width, j = D.height, de = -1, _e = -1;
    for (let h = 0; h < D.height; h += 1)
      for (let R = 0; R < D.width; R += 1)
        re[(h * D.width + R) * 4 + 3] <= 8 || (R < me && (me = R), h < j && (j = h), R > de && (de = R), h > _e && (_e = h));
    if (de < me || _e < j)
      return n._activePaintEraserPreviewInfo = { cacheKey: M, value: null }, null;
    const ke = {
      surface: K,
      bounds: { minX: me, minY: j, maxX: de, maxY: _e },
      key: `${M}:${me}:${j}:${de}:${_e}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: M, value: ke }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), ke;
  }
  function fe() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function Se(v, w, D) {
    var M, P;
    if (!v) return null;
    if (v.type === "rasterObject" && ((M = v.item) != null && M.bbox)) {
      const I = v.item.bbox, K = ((P = v.item) == null ? void 0 : P.transform) || {}, re = Number(I.u0 || 0) + Number(K.du || 0), me = Number(I.u1 || 0) + Number(K.du || 0), j = Number(I.v0 || 0) + Number(K.dv || 0), de = Number(I.v1 || 0) + Number(K.dv || 0);
      return {
        minX: Math.floor((re % 1 + 1) % 1 * w),
        maxX: Math.ceil((me % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(j, 0, 1) * D),
        maxY: Math.ceil(Ee(de, 0, 1) * D),
        wraps: me - re >= 1 || re < 0 || me > 1
      };
    }
    if (v.type === "strokeGroup") {
      const I = z(v.actionGroupId, "paint"), K = d(v.actionGroupId, "paint", I);
      if (!K) return null;
      const re = K.centerUv.u - K.halfW, me = K.centerUv.u + K.halfW, j = K.centerUv.v - K.halfH, de = K.centerUv.v + K.halfH;
      return {
        minX: Math.floor((re % 1 + 1) % 1 * w),
        maxX: Math.ceil((me % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(j, 0, 1) * D),
        maxY: Math.ceil(Ee(de, 0, 1) * D),
        wraps: me - re >= 1 || re < 0 || me > 1
      };
    }
    return null;
  }
  function Q(v, w, D) {
    if (!v || !w) return !1;
    const M = (K) => K.wraps ? [
      { minX: 0, maxX: K.maxX, minY: K.minY, maxY: K.maxY, wraps: !1 },
      { minX: K.minX, maxX: D - 1, minY: K.minY, maxY: K.maxY, wraps: !1 }
    ] : [K], P = M(v), I = M(w);
    return P.some((K) => I.some((re) => !(K.maxX < re.minX || re.maxX < K.minX || K.maxY < re.minY || re.maxY < K.minY)));
  }
  function E(v, w, D) {
    var T, se, ge, he, ne, ye, Me;
    if (!v || !w || !((T = D == null ? void 0 : D.surface) != null && T.canvas) || w.type !== "rasterObject") return v;
    const M = Number(v.width || D.surface.canvas.width || 0), P = Number(v.height || D.surface.canvas.height || 0);
    if (M < 1 || P < 1) return v;
    const I = Se(w, M, P);
    if (I && !Q(I, D.bounds, M)) return v;
    const K = String(((se = w.item) == null ? void 0 : se.id) || w.id || ""), re = ((ge = w.item) == null ? void 0 : ge.transform) || {}, me = `${D.key}:${K}:${M}:${P}:${Number(re.du || 0).toFixed(6)}:${Number(re.dv || 0).toFixed(6)}:${Number(re.rot_deg || 0).toFixed(3)}:${Number(re.scale || 1).toFixed(4)}`, j = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (j.has(me)) return j.get(me);
    const de = Ee(Math.floor(Number(((he = D.bounds) == null ? void 0 : he.minX) || 0)), 0, Math.max(0, M - 1)), _e = Ee(Math.floor(Number(((ne = D.bounds) == null ? void 0 : ne.minY) || 0)), 0, Math.max(0, P - 1)), ke = Ee(Math.ceil(Number(((ye = D.bounds) == null ? void 0 : ye.maxX) || 0)), de, Math.max(0, M - 1)), ue = Ee(Math.ceil(Number(((Me = D.bounds) == null ? void 0 : Me.maxY) || 0)), _e, Math.max(0, P - 1)), ve = Math.max(1, ke - de + 1), Ne = Math.max(1, ue - _e + 1), h = u(M, P, { readback: !0 });
    h.ctx.clearRect(0, 0, M, P), h.ctx.drawImage(v, 0, 0);
    const R = h.ctx.getImageData(de, _e, ve, Ne);
    h.ctx.save(), h.ctx.globalCompositeOperation = "destination-out", h.ctx.drawImage(D.surface.canvas, 0, 0), h.ctx.restore();
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
    const D = ee((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), M = (v == null ? void 0 : v.bbox) || null;
    if (!D || !M) return null;
    const P = le(v, w);
    if (!P || !(P.complete || P.width || P.naturalWidth)) return null;
    const { width: I, height: K } = Z(), re = (v == null ? void 0 : v.transform) || {}, me = [
      D,
      I,
      K,
      M.u0,
      M.v0,
      M.u1,
      M.v1,
      re.du,
      re.dv,
      re.rot_deg,
      re.scale,
      B()
    ].join(":"), j = o.get(me);
    if (j) return j;
    o.size > 64 && o.clear();
    const de = rn({ label: "editor.raster-erp" });
    de.width = I, de.height = K;
    const _e = de.getContext("2d");
    return _e ? (Rg(_e, P, v, I, K), o.set(me, de), de) : null;
  }
  async function ae(v, w) {
    const D = await new Promise((re) => v.toBlob(re, "image/png")), M = new FormData();
    M.append("image", D, w), M.append("type", "input"), M.append("subfolder", "panorama_stickers"), M.append("overwrite", "1");
    const P = await t.fetchApi("/upload/image", { method: "POST", body: M });
    if (!P || P.status !== 200) throw new Error(`upload failed (${P == null ? void 0 : P.status})`);
    const I = await P.json(), K = String((I == null ? void 0 : I.name) || "").trim();
    if (!K) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: K,
      subfolder: String((I == null ? void 0 : I.subfolder) || "panorama_stickers"),
      storage: String((I == null ? void 0 : I.type) || "input")
    };
  }
  let be = null, we = !1;
  function A() {
    if (r) return !1;
    const v = lp(l.painting), { width: w, height: D } = g();
    return c1(l.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: w, height: D, nodeId: String(i.id ?? "0") });
  }
  function oe() {
    const v = String(i.id ?? "0"), w = ts.get(v);
    if (we && w) return w;
    const D = (async () => {
      var I, K, re, me, j, de, _e, ke, ue, ve, Ne, h;
      const M = O(), P = lp(l.painting);
      if (P.totalPaintCount <= 0 && P.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, be = M, c());
        return;
      }
      if (be !== M && !we) {
        we = !0;
        try {
          F();
          const R = p(!1), N = ((K = (I = n.paintEngine) == null ? void 0 : I.getErpTarget) == null ? void 0 : K.call(I, R)) || null, y = ((re = N == null ? void 0 : N.displayPaint) == null ? void 0 : re.canvas) || null, T = ((me = N == null ? void 0 : N.committedMask) == null ? void 0 : me.canvas) || null, se = Math.max(1, Number(((j = N == null ? void 0 : N.descriptor) == null ? void 0 : j.width) || (y == null ? void 0 : y.width) || (T == null ? void 0 : T.width) || 2048)), ge = Math.max(1, Number(((de = N == null ? void 0 : N.descriptor) == null ? void 0 : de.height) || (y == null ? void 0 : y.height) || (T == null ? void 0 : T.height) || 1024));
          (!y && P.totalPaintCount > 0 || !T && P.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((_e = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : _e.width) || 0) !== se || Number(((ke = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ke.height) || 0) !== ge) && (n._paintLayerSyncBlankSurface = u(se, ge)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, se, ge));
          const he = y || P.totalPaintCount > 0 && ((ue = n._paintLayerSyncBlankSurface) == null ? void 0 : ue.canvas) || null, ne = T || P.totalMaskCount > 0 && ((ve = n._paintLayerSyncBlankSurface) == null ? void 0 : ve.canvas) || null;
          if (!he && !ne) return;
          let ye = null, Me = null;
          const Ae = [];
          if (P.totalPaintCount > 0) {
            ye = await ae(he, `pano_paint_${v}.png`);
            for (const Le of R) {
              const Re = String(Le || "").trim();
              if (!Re) continue;
              const He = ((h = (Ne = n.paintEngine) == null ? void 0 : Ne.getGroupDisplayCanvas) == null ? void 0 : h.call(Ne, Re)) || null;
              if (!He) continue;
              const ze = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), q = await ae(He, `pano_group_${v}_${ze}.png`);
              q && Ae.push({
                id: Re,
                actionGroupId: Re,
                image: q
              });
            }
          }
          P.totalMaskCount > 0 && (Me = await ae(ne, `pano_mask_${v}.png`)), M === O() && (l.painting_layer = {
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
    return ts.set(v, D), D.finally(() => {
      ts.get(v) === D && ts.delete(v);
    }), D;
  }
  function b(v) {
    var K;
    const w = ((K = n.paintEngine) == null ? void 0 : K.getMaskDisplayCanvas()) || null;
    if (!w) return v;
    const D = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, M = v.reduce((re, me) => Math.max(re, Number((me == null ? void 0 : me.zIndex) || 0)), -1), P = (Array.isArray(l.stickers) ? l.stickers : []).reduce((re, me) => Math.max(re, Number((me == null ? void 0 : me.z_index) || 0)), -1), I = Math.max(M, P);
    return v.push({
      id: "mask_display",
      source: w,
      revision: D,
      zIndex: I + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function S() {
    var M, P;
    const v = m(!0), w = V(), D = [];
    for (const I of v) {
      if ((I == null ? void 0 : I.type) === "strokeGroup") {
        const K = String(I.actionGroupId || I.id || "");
        if (!K) continue;
        const re = ((P = (M = n.paintEngine) == null ? void 0 : M.getGroupDisplayCanvas) == null ? void 0 : P.call(M, K)) || null;
        if (!re) continue;
        D.push({
          id: `paint_group:${K}`,
          source: re,
          revision: `${_()}:${K}`,
          zIndex: Number((I == null ? void 0 : I.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((I == null ? void 0 : I.type) === "rasterObject") {
        const K = I.item || null, re = ee((K == null ? void 0 : K.id) || I.id || "");
        if (!re) continue;
        const me = X(K, () => pe());
        if (!me) continue;
        const j = E(me, I, w), de = (K == null ? void 0 : K.transform) || {};
        D.push({
          id: `raster:${re}`,
          source: j,
          revision: [
            O(),
            (w == null ? void 0 : w.key) || "",
            re,
            Number(de.du || 0).toFixed(6),
            Number(de.dv || 0).toFixed(6),
            Number(de.rot_deg || 0).toFixed(3),
            Number(de.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((I == null ? void 0 : I.z_index) || 0),
          opacity: 1,
          visible: (K == null ? void 0 : K.visible) !== !1
        });
      }
    }
    return b(D);
  }
  function $() {
    return x() ? S().filter((v) => v.visible !== !1).map((v) => ({ id: v.id, media: v.source, revision: v.revision, opacity: v.opacity, zIndex: v.zIndex })) : [];
  }
  function H() {
    l.painting_layer !== null && (l.painting_layer = null), be = "";
  }
  return {
    connect(v) {
      ({
        commitState: c,
        createRasterSurface: u,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: f,
        getDesiredPaintTargetDescriptor: g,
        getDisplayPaintRevisionKey: _,
        getOrderedDisplayListObjects: m,
        getOrderedPaintGroupIds: p,
        getPaintingCompositeRevisionKey: O,
        getPaintingRevisionKey: B,
        getStrokeGroupStrokes: z,
        inverseTransformErpPointAround: G,
        paintingShown: x,
        parseRasterObjectSelectionId: ee,
        processFreehandPoints: W,
        rasterizeStrokeToSurface: ce,
        rebuildPaintEngineIfNeeded: F,
        requestDraw: pe,
        screenPosToErpPoint: C,
        shortestWrappedDelta: Y
      } = v);
    },
    getSharedLivePaintSurface: J,
    getLivePaintRevisionSuffix: U,
    isPaintCompositeInteraction: te,
    hitRasterObjectAt: L,
    invalidateLivePaintPreviewCaches: fe,
    buildRasterObjectEditCanvas: X,
    needsPaintingLayerSync: A,
    syncPaintingLayerAsync: oe,
    invalidatePaintingLayerState: H,
    buildEditorViewPaintLayers: $
  };
}
function pN(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(Q) {
    return !Q || typeof Q != "object" ? { x: 0, y: 0 } : { x: Number((Q == null ? void 0 : Q.u) || 0), y: Number((Q == null ? void 0 : Q.v) || 0) };
  }
  function c(Q, E, X, ae = {}) {
    return { ...{
      ...Q,
      t: Number((Q == null ? void 0 : Q.t) || 0),
      widthScale: f(Q, "widthScale", 1),
      pressureLike: f(Q, "pressureLike", 1)
    }, ...ae, u: E, v: X };
  }
  function u(Q, E = !1) {
    return E ? 12e-4 : 18e-4;
  }
  function d(Q, E, X = !1) {
    if (!Array.isArray(Q) || !Q.length) return [];
    const ae = String((E == null ? void 0 : E.kind) || "") === "ERP_GLOBAL", be = /* @__PURE__ */ new WeakMap();
    if (ae) {
      let M = null;
      Q.forEach((P) => {
        const I = Number((P == null ? void 0 : P.u) || 0), K = Number((P == null ? void 0 : P.v) || 0), re = (I % 1 + 1) % 1, me = M == null ? re : M + s(re, (M % 1 + 1) % 1);
        be.set(P, { x: me, y: K }), M = me;
      });
    }
    const we = (M) => !M || typeof M != "object" ? { x: 0, y: 0 } : be.get(M) || l(M), A = (M, P, I, K = {}) => {
      const re = ae ? (Number(P) % 1 + 1) % 1 : Number(P), me = c(M, re, I, K);
      return be.set(me, { x: Number(P), y: Number(I) }), me;
    }, oe = (M, P, I) => {
      const K = we(M), re = we(P);
      return A(M, Wn(K.x, re.x, I), Wn(K.y, re.y, I), {
        t: Wn(Number((M == null ? void 0 : M.t) || 0), Number((P == null ? void 0 : P.t) || 0), I),
        widthScale: Wn(f(M, "widthScale", 1), f(P, "widthScale", 1), I),
        pressureLike: Wn(f(M, "pressureLike", 1), f(P, "pressureLike", 1), I)
      });
    };
    if (Q.length === 1) {
      const M = we(Q[0]);
      return [A(Q[0], M.x, M.y)];
    }
    const b = u(E, X), S = (M, P) => {
      const I = [0];
      for (let ue = 1; ue < M.length; ue += 1) {
        const ve = we(M[ue - 1]), Ne = we(M[ue]);
        I.push(I[ue - 1] + Math.hypot(Ne.x - ve.x, Ne.y - ve.y));
      }
      const K = I[I.length - 1] || 0;
      if (K <= 1e-8) {
        const ue = M[0], ve = we(ue);
        return [A(ue, ve.x, ve.y)];
      }
      const re = [];
      let me = 0;
      for (let ue = 0; ue <= K + 1e-9; ue += P) {
        for (; me < I.length - 2 && I[me + 1] < ue; ) me += 1;
        const ve = I[me], Ne = I[me + 1], h = Math.max(1e-8, Ne - ve);
        re.push(oe(M[me], M[me + 1], Ee((ue - ve) / h, 0, 1)));
      }
      const j = M[M.length - 1], de = we(j), _e = re[re.length - 1], ke = _e ? we(_e) : null;
      return (!ke || Math.hypot(ke.x - de.x, ke.y - de.y) > P * 0.35) && re.push(A(j, de.x, de.y)), re;
    }, $ = (M) => {
      if (!Array.isArray(M) || M.length < 3) return M ? M.slice() : [];
      const P = we(M[0]), I = [A(M[0], P.x, P.y)];
      for (let me = 0; me < M.length - 1; me += 1) {
        const j = M[me], de = M[me + 1], _e = we(j), ke = we(de), ue = A(
          j,
          _e.x * 0.75 + ke.x * 0.25,
          _e.y * 0.75 + ke.y * 0.25,
          {
            t: Number(j.t || 0) * 0.75 + Number(de.t || 0) * 0.25,
            widthScale: f(j, "widthScale", 1) * 0.75 + f(de, "widthScale", 1) * 0.25,
            pressureLike: f(j, "pressureLike", 1) * 0.75 + f(de, "pressureLike", 1) * 0.25
          }
        ), ve = A(
          j,
          _e.x * 0.25 + ke.x * 0.75,
          _e.y * 0.25 + ke.y * 0.75,
          {
            t: Number(j.t || 0) * 0.25 + Number(de.t || 0) * 0.75,
            widthScale: f(j, "widthScale", 1) * 0.25 + f(de, "widthScale", 1) * 0.75,
            pressureLike: f(j, "pressureLike", 1) * 0.25 + f(de, "pressureLike", 1) * 0.75
          }
        );
        I.push(ue, ve);
      }
      const K = M[M.length - 1], re = we(K);
      return I.push(A(K, re.x, re.y)), I;
    }, H = S(Q, b);
    if (H.length < 3) return H;
    const v = X ? 2 : 1;
    let w = H.slice();
    for (let M = 0; M < v; M += 1) w = $(w);
    return S(w, Math.max(b * 0.75, 55e-5));
  }
  function f(Q, E, X = 1) {
    const ae = Number(Q == null ? void 0 : Q[E]);
    return Number.isFinite(ae) ? Math.max(0, ae) : X;
  }
  function g(Q) {
    const E = Number(Q == null ? void 0 : Q.radiusValue);
    if (Number.isFinite(E) && E > 0) {
      const X = String((Q == null ? void 0 : Q.radiusModel) || "").trim() || "erp_uv_norm";
      return X === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((Q == null ? void 0 : Q.size) || 10) * 0.5 / 2048)
      } : {
        model: X,
        value: E
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((Q == null ? void 0 : Q.size) || 10) * 0.5 / 2048)
    };
  }
  function _(Q, E, X = {}) {
    const ae = rn({ label: "editor.raster-surface" });
    ae.width = Math.max(1, Math.round(Q)), ae.height = Math.max(1, Math.round(E));
    const be = ae.getContext("2d", X.readback ? { willReadFrequently: !0 } : void 0);
    return be && (be.clearRect(0, 0, ae.width, ae.height), be.imageSmoothingEnabled = !0), { canvas: ae, ctx: be };
  }
  function m() {
    const Q = pe();
    return `${String(t.paintStrokeRevision)}:${Q.width}x${Q.height}`;
  }
  function p() {
    const Q = pe();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${Q.width}x${Q.height}`;
  }
  function O() {
    const Q = i(), E = p();
    return Q ? `${E}:${Q}` : E;
  }
  function B() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function z() {
    t.paintCompositeRevision += 1;
  }
  function G() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function x() {
    var Q, E;
    t.paintEngineRevisionKey = null, (E = (Q = t.paintEngine) == null ? void 0 : Q.rebuildCommitted) == null || E.call(Q, n), t.paintEngineRevisionKey = m();
  }
  function ee() {
    G(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function W({ rebuildPaintEngine: Q = !1 } = {}) {
    o(), B(), ee(), Q && x();
  }
  function ce() {
    o(), z(), ee();
  }
  function F() {
    var ae;
    const Q = pe(), E = `${Q.width}x${Q.height}`;
    t.paintEngineDescriptorKey !== E && (t.paintEngine = ml(Q), t.paintEngineDescriptorKey = E, t.paintEngineRevisionKey = "");
    const X = m();
    t.paintEngineRevisionKey !== X && (t.paintEngineRevisionKey = X, (ae = t.paintEngine) == null || ae.rebuildCommitted(n));
  }
  function pe() {
    const Q = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: Q,
      height: Math.max(1, Math.round(Q * 0.5))
    };
  }
  function C() {
    return pe();
  }
  function Y(Q, E, X, ae, be = null) {
    const we = g(Q), A = f(E, "widthScale", 1) * f(E, "pressureLike", 1);
    return we.model === "erp_uv_norm" ? Math.max(0.5, we.value * X * A) : we.model === "world_angle" ? be ? Math.max(0.5, we.value / Math.max(1e-6, Number(be.hFOV_deg || 90) * yr) * X * A) : Math.max(0.5, we.value / (2 * Math.PI) * X * A) : Math.max(0.5, Number((Q == null ? void 0 : Q.size) || 10) * 0.5 * A);
  }
  function te(Q, E, X = {}) {
    const ae = String((E == null ? void 0 : E.layerKind) || "paint"), be = String((E == null ? void 0 : E.toolKind) || "pen"), we = X.preview === !0, A = we ? 0.78 : 1;
    if (Q.globalAlpha = be === "marker" ? 0.7 * A : 1, ae === "mask") {
      Q.fillStyle = we ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (be === "eraser") {
      Q.globalCompositeOperation = "destination-out", Q.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const oe = String((E == null ? void 0 : E.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (E == null ? void 0 : E.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = we ? Math.max(0.28, Number(oe.a ?? 1) * 0.88) : Math.max(0.12, Number(oe.a ?? 1));
    Q.fillStyle = `rgba(${Math.round(Number(oe.r || 0) * 255)}, ${Math.round(Number(oe.g || 0) * 255)}, ${Math.round(Number(oe.b || 0) * 255)}, ${b})`;
  }
  function J(Q, E, X) {
    const ae = Math.max(0.5, Math.min(X, Number((E == null ? void 0 : E.radiusPx) || 0.5)));
    !Number.isFinite(E == null ? void 0 : E.x) || !Number.isFinite(E == null ? void 0 : E.y) || !Number.isFinite(ae) || (Q.beginPath(), Q.arc(Number(E.x || 0), Number(E.y || 0), ae, 0, Math.PI * 2), Q.fill());
  }
  function U(Q, E, X, ae, be = {}) {
    if (!Q || !Array.isArray(E) || !E.length) return;
    const we = Math.max(ae.w, ae.h) * 0.25;
    Q.save(), te(Q, X, be);
    const A = (oe) => J(Q, oe, we);
    if (E.length === 1) {
      A(E[0]), Q.restore();
      return;
    }
    for (let oe = 0; oe < E.length - 1; oe += 1) {
      const b = E[oe], S = E[oe + 1];
      if (!b || !S) continue;
      const $ = Number(b.x || 0), H = Number(b.y || 0), v = Number(S.x || 0), w = Number(S.y || 0), D = Math.max(0.5, Math.min(we, Number(b.radiusPx || 0.5))), M = Math.max(0.5, Math.min(we, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite($) || !Number.isFinite(H) || !Number.isFinite(v) || !Number.isFinite(w) || !Number.isFinite(D) || !Number.isFinite(M)) continue;
      const P = v - $, I = w - H, K = Math.hypot(P, I);
      if (!Number.isFinite(K) || K < 1e-6) {
        A(b);
        continue;
      }
      if (K > Math.max(ae.w, ae.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(D, M)), me = Math.max(0.35, Math.min(re * 0.4, 2.25)), j = Math.max(1, Math.ceil(K / me));
      for (let de = 0; de <= j; de += 1) {
        const _e = de / j;
        A({
          x: Wn($, v, _e),
          y: Wn(H, w, _e),
          radiusPx: Wn(D, M, _e)
        });
      }
    }
    A(E[E.length - 1]), Q.restore();
  }
  function le(Q, E, X, ae) {
    U(Q, E, X, ae, { preview: !1 });
  }
  function ie(Q, E, X, ae, be) {
    var oe, b, S, $;
    if (!Q || !Array.isArray(E) || E.length < 3) return;
    const we = "u", A = "v";
    if (Q.save(), String((X == null ? void 0 : X.layerKind) || "") === "mask")
      Q.fillStyle = "rgba(255,255,255,1)";
    else if (String((X == null ? void 0 : X.toolKind) || "") === "eraser")
      Q.globalCompositeOperation = "destination-out", Q.fillStyle = "rgba(0,0,0,1)";
    else {
      const H = (X == null ? void 0 : X.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      Q.fillStyle = `rgba(${Math.round(Number(H.r || 0) * 255)}, ${Math.round(Number(H.g || 0) * 255)}, ${Math.round(Number(H.b || 0) * 255)}, ${Number(H.a ?? 1)})`;
    }
    Q.beginPath(), Q.moveTo(Number(((oe = E[0]) == null ? void 0 : oe[we]) || 0) * ae.w, Number(((b = E[0]) == null ? void 0 : b[A]) || 0) * ae.h);
    for (let H = 1; H < E.length; H += 1)
      Q.lineTo(Number(((S = E[H]) == null ? void 0 : S[we]) || 0) * ae.w, Number((($ = E[H]) == null ? void 0 : $[A]) || 0) * ae.h);
    Q.closePath(), Q.fill(), Q.restore();
  }
  function k(Q) {
    const E = (Q == null ? void 0 : Q.geometry) || null;
    return E ? String(E.geometryKind || "") === "lasso_fill" ? Array.isArray(E.points) ? E.points : [] : Array.isArray(E.processedPoints) && E.processedPoints.length ? E.processedPoints : Array.isArray(E.rawPoints) && E.rawPoints.length ? E.rawPoints : Array.isArray(E.points) ? E.points : [] : [];
  }
  function L(Q, E) {
    const X = k(Q);
    return !Array.isArray(X) || !X.length ? [] : X.map((ae) => ({
      x: Number((ae == null ? void 0 : ae.u) || 0) * Number((E == null ? void 0 : E.w) || 1),
      y: Number((ae == null ? void 0 : ae.v) || 0) * Number((E == null ? void 0 : E.h) || 1),
      radiusPx: Y(Q, ae, Number((E == null ? void 0 : E.w) || 1), Number((E == null ? void 0 : E.h) || 1))
    }));
  }
  function Z(Q, E, X = null) {
    var oe, b, S, $;
    if (!(Q != null && Q.ctx) || !E) return !1;
    const ae = X || { w: Number(((oe = Q.canvas) == null ? void 0 : oe.width) || 0), h: Number(((b = Q.canvas) == null ? void 0 : b.height) || 0) }, be = String((E == null ? void 0 : E.toolKind) || "") === "eraser" ? {
      ...E,
      layerKind: "mask",
      toolKind: String(((S = E == null ? void 0 : E.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : E;
    if (String((($ = E == null ? void 0 : E.geometry) == null ? void 0 : $.geometryKind) || "") === "lasso_fill")
      return ie(Q.ctx, k(be), be, ae), !0;
    const A = L(be, ae);
    return A.length ? (le(Q.ctx, A, be, ae), !0) : !1;
  }
  function V(Q, E, X, ae = 8) {
    const be = new Uint8Array(E * X), we = [], A = new Int32Array(E * X), oe = new Int32Array(E * X);
    for (let b = 0; b < X; b += 1)
      for (let S = 0; S < E; S += 1) {
        const $ = b * E + S;
        if (be[$] || Q[$] <= ae) continue;
        let H = 0, v = 0;
        A[v] = S, oe[v] = b, v += 1, be[$] = 1;
        const w = [];
        let D = S, M = b, P = S, I = b;
        for (; H < v; ) {
          const K = A[H], re = oe[H];
          H += 1, w.push({ x: K, y: re }), K < D && (D = K), re < M && (M = re), K > P && (P = K), re > I && (I = re);
          const me = [
            [(K - 1 + E) % E, re],
            [(K + 1) % E, re],
            [K, re - 1],
            [K, re + 1]
          ];
          for (const [j, de] of me) {
            if (de < 0 || de >= X) continue;
            const _e = de * E + j;
            be[_e] || Q[_e] <= ae || (be[_e] = 1, A[v] = j, oe[v] = de, v += 1);
          }
        }
        we.push({ pixels: w, minX: D, minY: M, maxX: P, maxY: I });
      }
    return we;
  }
  function fe(Q, E) {
    const X = [...new Set((Array.isArray(Q == null ? void 0 : Q.pixels) ? Q.pixels : []).map((b) => Number((b == null ? void 0 : b.x) || 0)).filter((b) => Number.isFinite(b)))].sort((b, S) => b - S);
    if (!X.length) return null;
    if (X.length === 1)
      return { startX: X[0], widthPx: 1 };
    let ae = -1, be = 0;
    for (let b = 0; b < X.length; b += 1) {
      const S = X[b], H = (b === X.length - 1 ? X[0] + E : X[b + 1]) - S - 1;
      H > ae && (ae = H, be = b);
    }
    const we = (X[(be + 1) % X.length] + E) % E;
    let A = 1 / 0, oe = -1 / 0;
    for (const b of X) {
      const S = (b - we + E) % E;
      A = Math.min(A, S), oe = Math.max(oe, S);
    }
    return {
      startX: we,
      widthPx: Math.max(1, oe - A + 1)
    };
  }
  function Se(Q, E, X = {}) {
    var S;
    const ae = Number((Q == null ? void 0 : Q.width) || 0), be = Number((Q == null ? void 0 : Q.height) || 0), we = (S = Q == null ? void 0 : Q.getContext) == null ? void 0 : S.call(Q, "2d");
    if (!we || ae < 1 || be < 1) return [];
    const A = we.getImageData(0, 0, ae, be), oe = new Uint8Array(ae * be);
    for (let $ = 0; $ < oe.length; $ += 1) oe[$] = A.data[$ * 4 + 3];
    return V(oe, ae, be, 8).map(($, H) => {
      const v = fe($, ae);
      if (!v) return null;
      const w = Number(v.widthPx || 0), D = $.maxY - $.minY + 1, M = Number(v.startX || 0), P = rn({ label: "editor.lasso-fill" });
      P.width = w, P.height = D;
      const I = P.getContext("2d");
      if (!I) return null;
      const K = I.createImageData(w, D);
      return $.pixels.forEach(({ x: re, y: me }) => {
        const j = (me * ae + re) * 4, de = (Number(re || 0) - M + ae) % ae, _e = ((me - $.minY) * w + de) * 4;
        K.data[_e + 0] = A.data[j + 0], K.data[_e + 1] = A.data[j + 1], K.data[_e + 2] = A.data[j + 2], K.data[_e + 3] = A.data[j + 3];
      }), I.putImageData(K, 0, 0), {
        id: Gi("raster"),
        type: "raster_frozen",
        layerKind: E === "mask" ? "mask" : "paint",
        z_index: Number((X == null ? void 0 : X.z_index) || 0) + H * 1e-3,
        locked: (X == null ? void 0 : X.locked) === !0,
        bbox: {
          u0: 0,
          v0: $.minY / be,
          u1: w / ae,
          v1: ($.maxY + 1) / be
        },
        rasterDataUrl: P.toDataURL("image/png"),
        transform: {
          du: M / ae,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(Q) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = Q);
    },
    processFreehandPoints: d,
    createRasterSurface: _,
    getPaintingRevisionKey: m,
    getPaintingCompositeRevisionKey: p,
    getDisplayPaintRevisionKey: O,
    refreshPaintEngineRevisionCache: x,
    markObjectVisualsDirty: ee,
    markPaintStrokeVisualsDirty: W,
    markPaintCompositeVisualsDirty: ce,
    rebuildPaintEngineIfNeeded: F,
    getDesiredPaintTargetDescriptor: pe,
    getActivePaintTargetDescriptor: C,
    rasterizeStrokeToSurface: Z,
    createRasterFrozenObjectsFromCanvas: Se
  };
}
function hN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, c, u, d, f, g;
  function _(F, pe = null) {
    var C;
    if (F && typeof F == "object" && !Array.isArray(F)) return F;
    if (Array.isArray(F) && F.length > 0) {
      const Y = F[0];
      if (Y && typeof Y == "object" && !Array.isArray(Y)) return Y;
    }
    if (Array.isArray(pe) && pe.length > 0) {
      const Y = (C = pe[0]) == null ? void 0 : C.parsed_state;
      if (Y && typeof Y == "object" && !Array.isArray(Y))
        return {
          yaw_deg: Number(Y.yaw_deg || 0),
          pitch_deg: Number(Y.pitch_deg || 0),
          hFOV_deg: Number(Y.hFOV_deg || 30),
          rot_deg: Number(Y.roll_deg || 0)
        };
    }
    return null;
  }
  function m(F, pe, C) {
    const Y = Math.max(1, Number(pe || 1)), te = Math.max(1, Number(C || 1)), J = Ee(Number(F || 30), 0.1, 179) * yr, U = 2 * Math.atan(Math.tan(J * 0.5) * (te / Y));
    return Ee(U * xi, 0.1, 179);
  }
  function p(F) {
    const pe = String(F || "").trim();
    if (!pe) return null;
    try {
      const C = JSON.parse(pe);
      if (!C || typeof C != "object" || String(C.kind || "") !== "pano_sticker_state") return null;
      const Y = C.version;
      let te = null;
      if (typeof Y == "number" && Number.isInteger(Y) ? te = Y : typeof Y == "string" && /^\d+$/.test(Y) && (te = Number.parseInt(Y, 10)), te !== 1) return null;
      const J = C.pose;
      if (!J || typeof J != "object") return null;
      const U = Number(J.yaw_deg), le = Number(J.pitch_deg), ie = Number(J.roll_deg), k = Number(J.hFOV_deg);
      if (![U, le, ie, k].every((fe) => Number.isFinite(fe))) return null;
      let L = ((U + 180) % 360 + 360) % 360 - 180;
      Object.is(L, -0) && (L = 0);
      const Z = {
        yaw_deg: L,
        pitch_deg: Ee(le, -89.9, 89.9),
        roll_deg: ie,
        hFOV_deg: Ee(k, 0.1, 179)
      }, V = Number(C.source_aspect);
      return Number.isFinite(V) && V > 0 && (Z.source_aspect = V), Z;
    } catch {
      return null;
    }
  }
  function O(F) {
    const pe = Number(F == null ? void 0 : F.yaw_deg), C = Number(F == null ? void 0 : F.pitch_deg), Y = Number((F == null ? void 0 : F.roll_deg) ?? (F == null ? void 0 : F.rot_deg)), te = Number(F == null ? void 0 : F.hFOV_deg), J = Mi(F);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(pe) ? pe : 0),
        pitch_deg: Ee(Number.isFinite(C) ? C : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(Y) ? Y : 0,
        hFOV_deg: Ee(Number.isFinite(te) ? te : 90, 0.1, 179)
      },
      source_aspect: J
    };
  }
  function B(F) {
    var le;
    if (!F || typeof F != "object") return O(null);
    const pe = Number(F == null ? void 0 : F.yaw_deg), C = Number(F == null ? void 0 : F.pitch_deg), Y = Number((F == null ? void 0 : F.roll_deg) ?? (F == null ? void 0 : F.rot_deg)), te = Number(F == null ? void 0 : F.hFOV_deg), J = Number(F == null ? void 0 : F.vFOV_deg);
    let U = 1;
    if (Number.isFinite(te) && Number.isFinite(J)) {
      const ie = Ee(te, 0.1, 179) * yr, k = Ee(J, 0.1, 179) * yr, L = Math.tan(k * 0.5);
      if (Math.abs(L) > 1e-6) {
        const Z = Math.tan(ie * 0.5) / L;
        Number.isFinite(Z) && Z > 0 && (U = Z);
      }
    }
    if (F != null && F.asset_id && ((le = o == null ? void 0 : o.assets) != null && le[F.asset_id])) {
      const ie = o.assets[F.asset_id], k = Number((ie == null ? void 0 : ie.w) || 0), L = Number((ie == null ? void 0 : ie.h) || 0);
      k > 0 && L > 0 && (U = k / L);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(pe) ? pe : 0),
        pitch_deg: Ee(Number.isFinite(C) ? C : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(Y) ? Y : 0,
        hFOV_deg: Ee(Number.isFinite(te) ? te : 30, 0.1, 179)
      },
      source_aspect: U
    };
  }
  function z(F) {
    return t.linkedValue(n, F);
  }
  function G(F, pe, C) {
    const Y = F && typeof F == "object" ? {
      yaw_deg: Number(F.yaw_deg || 0),
      pitch_deg: Number(F.pitch_deg || 0),
      roll_deg: Number(F.rot_deg ?? F.roll_deg ?? 0),
      hFOV_deg: Number(F.hFOV_deg || 30)
    } : p(pe);
    if (Y) {
      const U = Number((C == null ? void 0 : C.naturalWidth) || (C == null ? void 0 : C.width) || Y.source_aspect || 1), le = Number((C == null ? void 0 : C.naturalHeight) || (C == null ? void 0 : C.height) || 1);
      return {
        yaw_deg: Number(Y.yaw_deg || 0),
        pitch_deg: Number(Y.pitch_deg || 0),
        hFOV_deg: Number(Y.hFOV_deg || 30),
        vFOV_deg: m(Y.hFOV_deg, U, le),
        rot_deg: Number(Y.roll_deg || 0)
      };
    }
    const te = Number((C == null ? void 0 : C.naturalWidth) || (C == null ? void 0 : C.width) || 1), J = Number((C == null ? void 0 : C.naturalHeight) || (C == null ? void 0 : C.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: m(30, te, J),
      rot_deg: 0
    };
  }
  function x() {
    const F = l(() => {
      Rr(n, "image-loaded");
    }), pe = Xt(n, "external-sticker") ? _(c("pano_sticker_input_pose"), null) : null;
    return qm(o, Ym(n, { pose: pe, image: F }));
  }
  function ee() {
    var le;
    const F = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((ie) => String((ie == null ? void 0 : ie.name) || "") === "sticker_image") : -1, pe = F >= 0 ? ((le = n.getInputLink(F)) == null ? void 0 : le.id) ?? null : null, C = l(() => {
      Rr(n, "image-loaded");
    }), Y = _(c("pano_sticker_input_pose"), null), te = z("sticker_state"), J = t.externalStateHash(n, te), U = pe == null ? null : G(Y, te, C);
    return Um(o, {
      connected: pe != null,
      linkId: pe,
      stateHash: J,
      pose: U,
      imageWidth: Number((C == null ? void 0 : C.naturalWidth) || (C == null ? void 0 : C.width) || 0),
      imageHeight: Number((C == null ? void 0 : C.naturalHeight) || (C == null ? void 0 : C.height) || 0)
    });
  }
  function W(F = "sync") {
    if (a !== "stickers" || i) return;
    const pe = n.__panoSceneStateV2 ? x() : ee();
    if (pe.changed) {
      const C = o.stickers.find(u);
      o.stickers = pe.state.stickers, o.active = pe.state.active, C && r.selectedId === C.id && !o.stickers.some((Y) => Y.id === C.id) && (r.selectedId = null, r.selectedIds = []), s(), g(), f();
    }
    d();
  }
  function ce() {
    const F = Array.isArray(o.stickers) ? o.stickers : [], pe = [];
    for (const C of F)
      u(C) && (C.visible = !1, pe.push(C));
    return pe;
  }
  return {
    connect(F) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: u,
        requestDraw: d,
        updateSelectionMenu: f,
        updateSidePanel: g
      } = F);
    },
    computeStickerVFov: m,
    buildCanonicalCutoutStickerState: O,
    buildCanonicalSelectedStickerState: B,
    reconcileExternalStickerFromInputs: W,
    collectExternalStickersForClearAll: ce
  };
}
const mN = 250, gN = 600, yN = 180, bN = 2;
function vN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Vo(e, t, r) {
  return e + (t - e) * r;
}
function _N(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Du(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / yN + i / bN);
  return Math.round(Vo(mN, gN, o));
}
function SN(e, t, r) {
  const n = vN(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Vo(i, t.position[o], n)),
    yaw_deg: jt(e.yaw_deg + Du(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Vo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Vo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Vo(e.distance, t.distance, n)
  };
}
function wN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Du(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function xN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return wN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: _N(e, t, n), end: i };
}
function kN(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: SN(e.from, e.to, r), done: !1 };
}
function tl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function MN(e, t, r) {
  const n = tl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function PN(e) {
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
    stateV2: u,
    studio: d,
    viewController: f
  } = e;
  let g, _, m, p, O, B, z, G, x, ee = null;
  function W(M, P = null) {
    const I = L();
    z(() => {
      i.viewTransition = xN(I, M, performance.now(), { scale: be(), end: P });
    }), !i.viewTransition && P && ce(P), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, G(), O({ localOnly: !0, reason: dt.VIEW });
  }
  function ce(M) {
    ie($c({ ...le(), moved: M.moved }, M.mode, Z())), s.backgroundDirty = !0;
  }
  function F() {
    i.viewTransition && (i.viewTransition = null, G());
  }
  function pe(M, P) {
    W({ ...L(), yaw_deg: M, pitch_deg: P });
  }
  function C() {
    return !d || fe() && !p();
  }
  function Y() {
    return i.mode === "pano" && te();
  }
  function te() {
    return u && L1({ sceneLinked: l && !!kl(a).scene, files: B(), stickers: c.stickers });
  }
  function J() {
    return i.spaceMode === "6dof" && Y();
  }
  function U() {
    var M, P, I;
    return RS((I = (P = (M = t.ui) == null ? void 0 : M.settings) == null ? void 0 : P.getSettingValue) == null ? void 0 : I.call(P, fg));
  }
  function le() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function ie(M) {
    i.spaceMode = M.mode, i.viewPosition = M.position, i.viewMoved = M.moved;
  }
  function k(M) {
    var I;
    const P = MN(i.spaceMode, i.viewTransition, M);
    if (P !== "keep") {
      if (P === "return") {
        W({ ...L(), position: Z(), distance: ((I = X()) == null ? void 0 : I.radius) || nr }, { mode: M, moved: !1 });
        return;
      }
      F(), ie($c({ ...le(), position: L().position }, M, Z())), s.backgroundDirty = !0, G(), O({ localOnly: !0, reason: dt.VIEW });
    }
  }
  function L() {
    var I;
    const M = i.viewMoved ? i.viewDistance : ((I = X()) == null ? void 0 : I.radius) || nr, P = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: M };
    return E1(i.spaceMode, P, Z());
  }
  function Z() {
    return fe() ? E().position : [0, 0, 0];
  }
  function V() {
    return r && c.camera !== null;
  }
  function fe() {
    return V() && (!d || c.camera.visible);
  }
  function Se() {
    return c.painting_visible !== !1;
  }
  function Q(M) {
    return M.visible && co(M.clip, i.frame);
  }
  function E() {
    return yl(c.camera, i.frame);
  }
  function X() {
    var P;
    const M = g();
    return ((P = M.space ?? M.content) == null ? void 0 : P.sphere) ?? null;
  }
  function ae(M) {
    i.viewPosition = M.position, i.viewYaw = M.yaw_deg, i.viewPitch = M.pitch_deg, i.viewDistance = M.distance, i.viewMoved = !0, s.backgroundDirty = !0, O({ localOnly: !0, reason: dt.VIEW });
  }
  function be() {
    var M;
    return ((M = X()) == null ? void 0 : M.radius) || nr;
  }
  function we() {
    var de;
    const M = g().space, P = _(), I = i.worldSelectedId || i.selectedId, K = P.stickers.findIndex((_e) => _e.id === I), re = K < 0 ? null : {
      sticker: P.stickers[K],
      value: ba(P, i.frame).stickers[K],
      plane: M.stickers.find((_e) => _e.id === I) ?? null,
      item: ((de = M.sticker) == null ? void 0 : de.id) === I && M.sticker.url ? { kind: M.sticker.kind, box: o.sceneBox(M.sticker.url) } : null
    }, me = m() ? v() : z1(X(), re);
    if (!me) return;
    const j = L();
    i.viewDistance = j.distance, i.viewMoved = !0, W(hm(j, me, n.width, n.height));
  }
  function A(M) {
    return o.pickSurface(D(), M.x, M.y, n.width, n.height);
  }
  function oe(M, P) {
    var I;
    return zc(M, P, i.viewMoved ? null : (I = X()) == null ? void 0 : I.center, be());
  }
  function b() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function S(M, P) {
    const I = performance.now(), K = { x: M.x, y: M.y, time: I, key: o.contentRevision(), view: b() };
    if (!um(ee, K)) {
      const me = A(M);
      ee = { ...K, cost: performance.now() - I, hit: me };
    }
    const re = L();
    ae(pm(re, oe(re, ee.hit), P, be())), ee.view = b(), ee.wheelTime = I;
  }
  function $(M, P, I) {
    const K = L();
    i.interaction = M === "orbit" ? { kind: "space_orbit", last: P, pivot: oe(K, A(P)) } : { kind: "space_pan", last: P, depth: cm(K, be()) }, x(P), n.setPointerCapture(I);
  }
  function H(M) {
    return M * 0.2;
  }
  function v() {
    return { center: E().position, radius: H(be()) };
  }
  function w(M, P) {
    const { yaw_deg: I, pitch_deg: K } = vm(M.position, P);
    return { ...M, yaw_deg: I, pitch_deg: K };
  }
  function D() {
    return ed(L(), n.width, n.height, X());
  }
  return {
    connect(M) {
      ({
        editorViewInput: g,
        editorViewSceneState: _,
        isCameraSelected: m,
        isErpCamera: p,
        requestDraw: O,
        sceneFiles: B,
        startAnimation: z,
        syncFloatingViewButtonState: G,
        updateCursor: x
      } = M);
    },
    transitionView: W,
    applyViewTransitionEnd: ce,
    cancelViewTransition: F,
    turnViewTo: pe,
    cameraPreviewShown: C,
    isSpaceView: Y,
    hasSpaceContent: te,
    isFreeSpaceView: J,
    viewControls: U,
    spaceModeState: le,
    applySpaceMode: ie,
    setSpaceMode: k,
    spaceViewState: L,
    spaceOrigin: Z,
    hasCamera: V,
    cameraShoots: fe,
    paintingShown: Se,
    sceneStickerShown: Q,
    cutoutCamera: E,
    contentSphere: X,
    setSpaceView: ae,
    spaceScale: be,
    frameSpaceContent: we,
    zoomSpaceAt: S,
    startSpaceDrag: $,
    currentSpaceCamera: D,
    cameraFrustumLength: H,
    cameraSphere: v,
    lookingAt: w
  };
}
function NN(e) {
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
    videoEl: u
  } = e;
  let d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X, ae, be, we = { revision: -1, sceneState: null }, A = null;
  function oe() {
    return A || (A = $()), A;
  }
  function b() {
    A = null;
  }
  function S() {
    return we.sceneState;
  }
  function $() {
    const _e = ee(), ke = g(), ue = { ...s.assets };
    for (const Me of l ? [] : s.stickers) {
      const Ae = String((Me == null ? void 0 : Me.asset_id) || "");
      Ae && !ue[Ae] && i.has(Ae) && (ue[Ae] = { type: "comfy_image", filename: Ae });
    }
    const ve = l ? s.stickers.map((Me) => J(Me) ? { ...Me, source: { kind: "file", filename: Se(Me) } } : Me) : s.stickers;
    we.revision !== a.stateRevision && (we = { revision: a.stateRevision, sceneState: tr({ ...s, stickers: ve, assets: ue, painting: null }) }), l && H(we.sceneState);
    const Ne = ba(we.sceneState, r.frame), h = le ? G() : null, R = (Me) => {
      if (l && !Me.visible) return null;
      if (le && C(Me)) return h;
      const Ae = ce(Me);
      return Ae ? { media: Ae, revision: W(Ae) } : null;
    }, N = ae(), y = [...N.sky, ...Pm(we.sceneState, r.frame, s.stickers, { media: R, paintLayers: ke, evaluated: Ne })], T = _e && (_e === u || _e === c) ? u.dataset.panoSrc : _e, se = pe(_e) ? { media: _e, revision: W(_e), coverage: f(), source: T } : null, ge = F(), he = O1(L(), ge, Z());
    he.mode !== r.spaceMode && p(), d(he);
    const ne = ge ? v(we.sceneState, Ne, R, N) : null, ye = te() ? { ...ne, ...w(ne) } : null;
    return { background: se, layers: y, space: ye, content: ne };
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
    const Ne = ie(), h = td(Ne, ke.scene), R = h != null && h.url ? n.sceneBox(h.url) : null, N = R && fs(h.kind, R), y = fe(), T = ym(y, _e, ke), se = T != null && T.url ? n.sceneBox(T.url) : null, ge = se ? [{ box: fs(T.kind, se), value: T.value }] : [], he = Nm(_e, r.frame, s.stickers, { media: ue, evaluated: ke });
    for (const { request: ye, value: Me } of ve.items) {
      const Ae = ye != null && ye.url ? n.sceneBox(ye.url) : null;
      Ae && ge.push({ box: fs(ye.kind, Ae), value: Me });
    }
    const ne = Wc(V1(ke, N, [...he, ...ve.stickers], ge));
    return {
      evaluated: ke,
      sceneUrls: Ne ? Ne.urls.filter(Boolean) : [],
      scene: h,
      stickerUrls: bm(y, _e),
      sticker: T,
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
      gizmo: M() ? K() : D(_e.evaluated),
      grid: r.showGrid && !r.fullscreen ? J1(ke) : null,
      lines: m() ? I(ke) : []
    };
  }
  function D(_e) {
    const ke = k(), ue = _e.stickers.find((ve) => ve.id === (ke == null ? void 0 : ke.id));
    return !be(ke) || !(ue != null && ue.active) ? null : { mode: r.gizmoMode, transform: jc(ue) };
  }
  function M() {
    return m() && r.selectedId === wl;
  }
  let P = { revision: -1, span: -1, segments: [] };
  function I(_e) {
    const ke = E();
    (P.revision !== a.stateRevision || P.span !== ke) && (P = { revision: a.stateRevision, span: ke, segments: Q1(e_(s, ke)) });
    const { segments: ue } = P, ve = ue.length ? [{ segments: ue, color: wP }] : [];
    if (!Y()) return ve;
    const Ne = M() ? Lg : SP;
    return [...ve, { segments: _m(B(), _(_e)), color: Ne }];
  }
  function K() {
    return !Y() || !M() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: jc({ ...B(), scale: 1 }) };
  }
  function re() {
    const { background: _e, layers: ke, space: ue } = oe(), ve = t.width, Ne = t.height, h = z({ x: 0, y: 0, w: ve, h: Ne });
    let R = !1;
    return !_e && !ke.length && !ue ? (n.clear(460551), R = n.ready) : (n.clear(), R = !!n.render({
      rect: h,
      camera: ue ? ed(V(), ve, Ne, ue.sphere) : O(),
      background: _e,
      layers: ke,
      space: ue
    })), Q(), (r.worldSelectedId || M() || U()) && X(), R;
  }
  function me(_e) {
    const { content: ke } = oe();
    return !ke || !_e.position ? Uo(_e) : mm(Uo(_e), _e.position, x(), ke.sphere);
  }
  function j(_e, ke, ue, ve = null) {
    const { background: Ne, layers: h, content: R } = oe();
    if (!Ne && !h.length && !R) return null;
    const N = R && ke.position ? R : null;
    return n.render({ rect: _e, camera: me(ke), background: Ne, layers: h, space: N, owner: ue, clearColor: ve });
  }
  function de(_e) {
    return n.clear(460551), !!n.renderUnwrap({ rect: z(_e), ...oe() });
  }
  return {
    connect(_e) {
      ({
        applySpaceMode: d,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: _,
        cameraShoots: m,
        cancelViewTransition: p,
        currentViewCamera: O,
        cutoutCamera: B,
        deviceRect: z,
        followPortSticker: G,
        frameViewDistance: x,
        getConnectedErpImage: ee,
        getMediaRevisionToken: W,
        getStickerImage: ce,
        hasSpaceContent: F,
        isDecodedImageReady: pe,
        isExternalSticker: C,
        isFreeSpaceView: Y,
        isSpaceView: te,
        isUploadingSticker: J,
        isWorldMenuShown: U,
        portVideo: le,
        sceneFiles: ie,
        selectedWorldSticker: k,
        spaceModeState: L,
        spaceOrigin: Z,
        spaceViewState: V,
        stickerFiles: fe,
        stickerImageKey: Se,
        syncFloatingViewButtonState: Q,
        timelineSpanFrames: E,
        updateSelectionMenu: X,
        upstreamViewInput: ae,
        worldStickerEditable: be
      } = _e);
    },
    editorViewInput: oe,
    endEditorViewFrame: b,
    editorViewSceneState: S,
    isCameraSelected: M,
    renderEditorView: re,
    shotViewCamera: me,
    drawEditorViewShot: j,
    renderEditorViewUnwrap: de
  };
}
function CN(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: a,
    studio: s
  } = e;
  let l, c, u, d, f = { list: null, entries: [] };
  const g = /* @__PURE__ */ new Map(), _ = () => d({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA });
  function m(J) {
    if (!J) return null;
    let U = g.get(J);
    return U || (U = new Image(), U.onload = _, U.onerror = _, U.src = J, g.set(J, U)), U;
  }
  function p({ sceneState: J, ui: U }) {
    return [
      ...J.stickers.filter((le) => le.source.kind !== "port").map((le) => n(Hs(le.source))),
      i(Or(U, io)[0] || null),
      ...J.painting.raster_objects.map((le) => le.rasterDataUrl)
    ].filter(Boolean);
  }
  function O() {
    return s && (xf(o, "scene") === jg || !!B());
  }
  function B() {
    const J = s && Xt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, U = Array.isArray(J) ? J : null;
    if (f.list !== U) {
      f.entries.forEach(Y), f = { list: U, entries: U ? UP(U).map((ie) => ({ layer: ie })) : [] };
      const le = new Set(f.entries.flatMap((ie) => p(ie.layer)));
      for (const ie of [...g.keys()]) le.has(ie) || g.delete(ie);
    }
    return U && f.entries;
  }
  function z() {
    if (!B()) return 0;
    const [J] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(J) > 0 ? Number(J) : 0;
  }
  function G() {
    if (!s) return "";
    const J = B();
    if (JP(xf(o, "scene"), J)) return "Run the workflow to show the upstream scene.";
    if (!J) return "";
    const U = t.uiList(o, "pano_sticker_warnings");
    return String(U.find((le) => String(le).startsWith(XP)) ?? "");
  }
  function x(J, U, le) {
    const { ui: ie, sceneState: k } = J.layer, L = k.timeline.fps, Z = Or(ie, Dg)[0], V = Or(ie, Tg).map(i).filter(Boolean), fe = i(Or(ie, Fg)[0] || null), Se = Z && typeof Z == "object" ? V.length ? { frames: V, meta: Z } : fe ? { src: fe, meta: Z } : null : null, Q = m(i(Or(ie, io)[0] || null)), E = Se ? od(U.clip, le, L, Se.meta) : null;
    let X = Q;
    if (Se != null && Se.frames)
      J.frames || (J.frames = sd({
        createImage: (ae, be) => {
          const we = new Image();
          return we.onload = be, we.onerror = be, we.src = ae, we;
        },
        onLoad: _
      })), X = J.frames.picture(Se.frames, E, Se.meta, Q);
    else if (Se != null && Se.src) {
      const ae = ee(J);
      ae.follow({ src: Se.src, time: E, playing: u.advancing, fps: L }), X = ae.picture(J.still, Q);
    }
    return X ? { media: X, revision: c(X), source: ad(Se, Q) } : null;
  }
  function ee(J) {
    if (J.follower) return J.follower;
    const U = ya(document, "editor.upstream-port-video");
    U.playsInline = !0, U.preload = "auto";
    const le = rn({ label: "editor.upstream-port-still" });
    return le.__panoFrameIdx = 0, J.video = U, J.still = le, J.follower = dd({
      video: U,
      onCapture: () => {
        var L;
        const ie = Number(U.videoWidth || 0), k = Number(U.videoHeight || 0);
        ie < 1 || k < 1 || (le.width = ie, le.height = k, (L = le.getContext("2d")) == null || L.drawImage(U, 0, 0), le.__panoFrameIdx += 1, _());
      },
      onChange: _
    }), J.follower;
  }
  function W(J, U, le) {
    if (U.source.kind === "port") return x(J, U, le);
    const ie = m(n(Hs(U.source)));
    return ie ? { media: ie, revision: c(ie) } : null;
  }
  function ce(J) {
    var Se;
    const { sceneState: U } = J.layer, { painting: le } = U, ie = le.paint.strokes.length + le.mask.strokes.length;
    if (!U.painting_visible || !ie && !le.raster_objects.length) return [];
    const k = l(), L = `${k.width}x${k.height}`;
    J.paintSize !== L && (pe(J), J.paintSize = L, J.paintEngine = ie ? ml(k) : null, (Se = J.paintEngine) == null || Se.rebuildCommitted({ painting: le }), J.rasters = /* @__PURE__ */ new Map());
    const Z = J.paintEngine, V = (Z == null ? void 0 : Z.getMaskDisplayCanvas()) || null, fe = [];
    for (const Q of ZP(U, Z ? Z.getAllGroupIds() : [], !!V)) {
      const E = Q.kind === "group" ? Z == null ? void 0 : Z.getGroupDisplayCanvas(Q.id) : Q.kind === "mask" ? V : F(J, Q.item, k);
      E && fe.push({ id: `${Q.kind}:${Q.id}`, media: E, revision: L, opacity: 1, zIndex: Q.zIndex });
    }
    return fe;
  }
  function F(J, U, { width: le, height: ie }) {
    if (J.rasters.has(U.id)) return J.rasters.get(U.id);
    const k = m(U.rasterDataUrl);
    if (!k.complete || !k.naturalWidth) return null;
    const L = rn({ label: "editor.upstream-raster-erp", width: le, height: ie }), Z = L.getContext("2d");
    return Z ? (Rg(Z, k, U, le, ie), J.rasters.set(U.id, L), L) : null;
  }
  function pe(J) {
    var U;
    (U = J.rasters) == null || U.forEach((le) => ea(le)), J.rasters = null, J.paintEngine = null, J.paintSize = null;
  }
  function C() {
    const J = B() ?? [], U = { sky: [], stickers: [], items: [] };
    return J.forEach((le, ie) => {
      const k = YP(r.frame, a.timeline.fps, le.layer.sceneState.timeline.fps), L = QP(le.layer, ie, k, {
        media: (Z) => W(le, Z, k),
        paintLayers: ce(le),
        source: i
      });
      U.sky.push(...L.sky), U.stickers.push(...L.stickers), U.items.push(...L.items);
    }), U;
  }
  function Y(J) {
    var U;
    (U = J.follower) == null || U.dispose(), J.still && ea(J.still), pe(J);
  }
  function te() {
    f.entries.forEach(Y), f = { list: null, entries: [] }, g.clear();
  }
  return {
    connect(J) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: u, requestDraw: d } = J);
    },
    upstreamLinked: O,
    upstreamNotice: G,
    upstreamSpanFrames: z,
    upstreamViewInput: C,
    disposeUpstream: te
  };
}
const pu = "camera_preview";
function AN(e) {
  return e === pu ? dt.SPLAT_PREVIEW : dt.SPLAT_STAGE;
}
function IN(e) {
  return [...e].some((t) => t !== dt.VIEW && t !== dt.OVERLAY && t !== dt.SPLAT_STAGE);
}
function Wg(e, t = !1) {
  const r = Ee(Mi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function EN(e) {
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
  let u, d, f, g, _ = null, m = !1, p = !1;
  function O() {
    m && (m = !1, o.releaseSplats(pu));
  }
  function B() {
    _ = null, p = !1, O();
  }
  function z(F) {
    if (!n || !F) return !1;
    const pe = n.closest(".pano-camera-preview");
    if (!pe) return !1;
    const C = Math.round(Number(pe.clientWidth || n.clientWidth || 0)), Y = Math.round(Number(pe.clientHeight || n.clientHeight || 0));
    return Math.abs(C - Number(F.width || 0)) <= 1 && Math.abs(Y - Number(F.height || 0)) <= 1;
  }
  function G(F, pe) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !s || !c.cameraPreview) return;
    if (i.mode === "frame" || !u()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, B();
      return;
    }
    const C = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !C || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = C ? "Preview unavailable" : "Add Frame to preview", B();
      return;
    }
    const Y = Wg(C, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = Y.width, c.cameraPreview.height = Y.height, p) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, O();
      return;
    }
    const te = window.devicePixelRatio || 1, J = Math.max(1, Y.width * te), U = Math.max(1, Y.height * te), le = Math.min(1, t.width / J, t.height / U), ie = { width: Math.max(1, Math.floor(J * le)), height: Math.max(1, Math.floor(U * le)) }, k = !_ || _.width !== ie.width || _.height !== ie.height || IN(pe);
    if (F && k) {
      m = !0;
      const Z = d({ x: 0, y: t.height - ie.height, w: ie.width, h: ie.height }, C, pu);
      _ = Z ? ie : null, Z && ce(Z);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = g() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const L = z(Y);
    c.cameraPreview.ready = !0, c.cameraPreview.label = L ? "" : "Loading preview", c.cameraPreview.settled = L && a.pendingStableLayoutFrames <= 0 && a.hasPresentedFrame;
  }
  function x() {
    _ = null, p = !1;
  }
  let ee = 0, W = !1;
  function ce(F) {
    const pe = ++ee;
    createImageBitmap(F.canvas, F.x, F.y, F.width, F.height).then((C) => {
      var Y;
      if (pe !== ee || !a.running) {
        C.close();
        return;
      }
      (Y = r.getContext("bitmaprenderer")) == null || Y.transferFromImageBitmap(C);
    }).catch((C) => {
      pe !== ee || !a.running || (p = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !W && (W = !0, console.error("[PanoramaStickers] camera preview frame failed", C)));
    });
  }
  return {
    connect(F) {
      ({
        cameraPreviewShown: u,
        drawEditorViewShot: d,
        getActiveCutoutShot: f,
        getConnectedErpImage: g
      } = F);
    },
    drawCutoutOutputPreview: G,
    forgetCameraPreviewFrame: x
  };
}
function ON(e) {
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
    type: u
  } = e;
  let d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X, ae, be, we, A, oe, b;
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
      const N = fe(R);
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
        for (let y = -89; y <= 89; y += 4) N.push(In(R, y));
        $(N, "#3f3f46", R % 90 === 0 ? 1.3 : 1);
      }
      for (let R = -75; R <= 75; R += 15) {
        const N = [];
        for (let y = -180; y <= 180; y += 4) N.push(In(y, R));
        $(N, R === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", R === 0 ? 1.5 : 1);
      }
      const h = [
        { name: "Left", dir: In(-90, 0) },
        { name: "Front", dir: In(0, 0) },
        { name: "Right", dir: In(90, 0) },
        { name: "Back", dir: In(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", h.forEach((R) => {
        const N = fe(R.dir);
        N && n.fillText(R.name, N.x, N.y + 24);
      });
    }
  }
  function v() {
    const ue = ed(b(), r.width, r.height, f()), ve = sa(ue, [0, 0, 0], r.width, r.height);
    ve && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ve.x, ve.y - 12));
  }
  function w(ue, ve) {
    const Ne = V(ue), h = In(Number(Ne.yaw_deg || 0), Number(Ne.pitch_deg || 0)), R = i.mode === "unwrap" ? Se(h) : null, N = R ? R.x : null, y = i.mode === "pano" ? 28 : 20, T = [
      A(ue, 0, y, N),
      A(ue, 1, y, N),
      A(ue, 2, y, N),
      A(ue, 3, y, N)
    ];
    pd(n, T, { selected: ve });
  }
  function D(ue, ve = []) {
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
    const y = Ne ? "rgba(255, 116, 116, 0.96)" : ve ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", T = Ne ? "rgba(255, 89, 89, 0.08)" : ve ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", se = ve ? 3.2 : 2.6;
    D(n, h), n.fillStyle = T, n.fill(), n.strokeStyle = y, n.lineWidth = se, n.stroke(), n.save(), n.strokeStyle = y, n.lineWidth = ve ? 3.2 : 2.6, n.lineCap = "round";
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
    if (k(ue)) {
      const y = n.globalAlpha;
      n.globalAlpha = y * W(ue) * R, i.mode === "frame" ? (n.strokeStyle = Ne ? "rgba(250, 250, 250, 0.9)" : h ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = Ne ? 2 : 1, D(n, ve.corners), n.stroke()) : w(ue, Ne), n.globalAlpha = y;
      return;
    }
    const N = n.globalAlpha;
    n.globalAlpha = N * R, n.fillStyle = Ne ? "rgba(0, 112, 243, 0.24)" : h ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", D(n, ve.corners), n.fill(), n.strokeStyle = Ne ? "rgba(255, 255, 255, 1)" : h ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = Ne ? 2.8 : 1.9, D(n, ve.corners), n.stroke(), n.globalAlpha = N;
  }
  function I(ue, ve, Ne) {
    if (k(ue)) {
      ug(n, ve, { accent: Ne });
      return;
    }
    const h = !(ie(ue) && pe());
    n.fillStyle = Ne, h && ve.corners.forEach((R) => {
      n.beginPath(), n.arc(R.x, R.y, 6.5, 0, Math.PI * 2), n.fill();
    }), h && ie(ue) && (n.strokeStyle = Ne, n.lineCap = "round", n.lineWidth = 4, ve.edgeMidpoints.forEach((R) => {
      var ne, ye, Me, Ae;
      const N = (((ne = R.b) == null ? void 0 : ne.x) ?? R.x) - (((ye = R.a) == null ? void 0 : ye.x) ?? R.x), y = (((Me = R.b) == null ? void 0 : Me.y) ?? R.y) - (((Ae = R.a) == null ? void 0 : Ae.y) ?? R.y), T = Math.hypot(N, y) || 1, se = N / T, ge = y / T, he = 10;
      n.beginPath(), n.moveTo(R.x - se * he, R.y - ge * he), n.lineTo(R.x + se * he, R.y + ge * he), n.stroke();
    }), n.lineCap = "butt"), L(ue) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ve.rotateStemBase.x, ve.rotateStemBase.y), n.lineTo(ve.rotateHandle.x, ve.rotateHandle.y), n.stroke(), n.fillStyle = Ne, n.beginPath(), n.arc(ve.rotateHandle.x, ve.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function K() {
    var N;
    const ue = i.mode === "frame" ? [] : ee(), ve = ue.length > 1, Ne = l ? O() : G(), h = Ne.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${ie(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Ne || i._sortedItemsCache.orderKey !== h) && (i._sortedItemsCache = {
      src: Ne,
      orderKey: h,
      sorted: [...Ne]
    });
    const R = i._sortedItemsCache.sorted;
    for (const y of R) {
      const T = i.mode !== "frame" && !ve && J(y);
      if (i.mode === "frame" && !T) continue;
      const se = k(y), ge = ie(y), he = te(y);
      if (!se && !ge || le(y) && !oe(y)) continue;
      const ne = Z(y);
      if (u !== "stickers" && !ne.visible)
        continue;
      const ye = Ee(Number((ne == null ? void 0 : ne.visibilityAlpha) ?? 1), 0, 1);
      if (ye <= 0.01) continue;
      const Me = ge && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Me, P(y, ne, T, he), T && ne.visible) {
        const Ae = he ? "#ff4d4f" : se && C(y) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * ye, I(y, ne, Ae), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !p() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const y = i.cutoutPanoFrameVisual, T = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= T, M(y.geom, y.selected, y.locked), y.selected && I(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ve) {
      const y = x(ue);
      if (y != null && y.visible) {
        const T = d(ue) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(y.corners[0].x, y.corners[0].y);
        for (let se = 1; se < y.corners.length; se += 1) n.lineTo(y.corners[se].x, y.corners[se].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = T, y.corners.forEach((se) => {
          n.beginPath(), n.arc(se.x, se.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      ue.forEach((y) => {
        if (!L(y) && !U(y)) return;
        const T = Z(y);
        if (!(T != null && T.visible)) return;
        const se = te(y) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(T.corners[0].x, T.corners[0].y);
        for (let ge = 1; ge < T.corners.length; ge += 1) n.lineTo(T.corners[ge].x, T.corners[ge].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = se, T.corners.forEach((ge) => {
          n.beginPath(), n.arc(ge.x, ge.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((N = i.interaction) == null ? void 0 : N.kind) === "marquee_select") {
      const y = ae(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function re(ue) {
    const ve = p(), Ne = B(ve);
    if (!ve || !Ne)
      return n.clearRect(0, 0, r.width, r.height), ue && o.clear(657930), !1;
    const h = { x: Ne.x, y: Ne.y, w: Ne.w, h: Ne.h }, { rect: R, shot: N } = xm(ve, Ne, { width: r.width, height: r.height }), y = me(h);
    if (n.clearRect(0, 0, r.width, r.height), ue) {
      o.clear(657930);
      const T = g(R), se = !!_(T, N, void 0, 657930);
      se || o.clear(1118481, T), s.backgroundDirty = !se;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(h.x, h.y, h.w, h.h, y), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = Lg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(h.x + 1, h.y + 1, h.w - 2, h.h - 2, Math.max(0, y - 1)), n.stroke(), n.restore(), !0;
  }
  function me(ue) {
    const ve = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * ve, Number((ue == null ? void 0 : ue.w) || 0) * 0.5, Number((ue == null ? void 0 : ue.h) || 0) * 0.5);
  }
  function j() {
    var se, ge;
    if (((se = i.interaction) == null ? void 0 : se.kind) !== "paint_lasso_fill") return;
    const ue = i.interaction.stroke, ve = (ge = ue == null ? void 0 : ue.geometry) == null ? void 0 : ge.points;
    let Ne;
    if (i.mode === "frame") {
      const he = p(), ne = z(he);
      Ne = Q(ve, he, ne);
    } else
      Ne = E(ve);
    if (!Array.isArray(Ne) || Ne.length < 3) return;
    const h = String((ue == null ? void 0 : ue.layerKind) || "") === "mask", R = (ue == null ? void 0 : ue.color) || { r: 1, g: 0.25, b: 0.25 }, N = Math.round(Number(R.r || 0) * 255), y = Math.round(Number(R.g || 0) * 255), T = Math.round(Number(R.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(Ne[0].x || 0), Number(Ne[0].y || 0));
    for (let he = 1; he < Ne.length; he++) n.lineTo(Number(Ne[he].x || 0), Number(Ne[he].y || 0));
    n.closePath(), h ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${N},${y},${T},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function de() {
    const ue = i.frameRollOverlayVisual, ve = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(ue != null && ue.shot) || ve <= 1e-4) return;
    const Ne = z(ue.shot);
    if (!Ne) return;
    const h = { x: Ne.x + Ne.w * 0.5, y: Ne.y + Ne.h * 0.5 }, R = Number(ue.shot.roll_deg ?? ue.shot.rot_deg ?? 0) * yr, N = Math.hypot(Ne.w, Ne.h) * 0.55, y = Math.cos(R) * N, T = Math.sin(R) * N;
    n.save(), n.globalAlpha *= ve, n.beginPath(), n.rect(Ne.x, Ne.y, Ne.w, Ne.h), n.clip(), n.translate(h.x, h.y), n.rotate(R);
    const se = Math.max(12, Math.min(Ne.w, Ne.h) / 6);
    n.beginPath();
    for (let ge = -N; ge <= N; ge += se)
      n.moveTo(ge, -N), n.lineTo(ge, N);
    for (let ge = -N; ge <= N; ge += se)
      n.moveTo(-N, ge), n.lineTo(N, ge);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(h.x - y, h.y - T), n.lineTo(h.x + y, h.y + T), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function _e() {
    return !l || !p() || t && Y() || c && !F() ? 0 : MP;
  }
  function ke() {
    const ue = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (ue <= 1e-4 || !l || i.mode !== "pano") return;
    const ve = p(), Ne = ve ? Z(ve) : null, h = Array.isArray(Ne == null ? void 0 : Ne.corners) && Ne.corners.length >= 4 ? Ne.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    Ne != null && Ne.visible && h && (i.cutoutPanoDimCorners = h), ve && (Ne != null && Ne.visible) && h && (i.cutoutPanoFrameVisual = {
      item: ve,
      geom: Ne,
      selected: J(ve),
      locked: te(ve)
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
        areAllSelectedItemsLocked: d,
        contentSphere: f,
        deviceRect: g,
        drawEditorViewShot: _,
        editorViewInput: m,
        getActiveCutoutShot: p,
        getCutoutSelectableItemsForDisplay: O,
        getFrameViewLayout: B,
        getFrameViewRect: z,
        getList: G,
        getMultiSelectionGeom: x,
        getSelectedItems: ee,
        getStickerDisplayAlpha: W,
        getUnwrapRect: ce,
        isCameraSelected: F,
        isErpCamera: pe,
        isExternalSticker: C,
        isFreeSpaceView: Y,
        isItemLocked: te,
        isItemSelected: J,
        isRasterObjectItem: U,
        isSceneSticker: le,
        isShotItem: ie,
        isStickerItem: k,
        isStrokeGroupItem: L,
        objectGeom: Z,
        poseOf: V,
        projectDir: fe,
        projectDirUnwrap: Se,
        projectErpLassoPointsToFrameRect: Q,
        projectLassoPointsToCurrentView: E,
        rebuildPaintEngineIfNeeded: X,
        rectFromPoints: ae,
        renderEditorView: be,
        renderEditorViewUnwrap: we,
        sampleStickerEdge: A,
        sceneStickerShown: oe,
        spaceViewState: b
      } = ue);
    },
    drawGridUnwrap: S,
    drawGridPano: H,
    drawObjects: K,
    drawFrameViewBackground: re,
    drawLassoOutlineOverlay: j,
    drawFrameRollOverlay: de,
    getCutoutPanoDimTarget: _e,
    drawCutoutPanoPassepartout: ke
  };
}
function FN(e) {
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
    shotEditor: u,
    stageWrap: d,
    state: f,
    timeline: g,
    type: _,
    uiState: m,
    viewController: p
  } = e;
  let O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X = () => {
  };
  function ae(j = /* @__PURE__ */ new Set()) {
    pe();
    const de = l.backgroundDirty;
    u && (k(), B(de, j)), i.mode === "frame" ? (l.frameSafeRect = le(), x(de)) : i.mode === "unwrap" ? W(de) : ee(de), z(), F(), V(), ce(), G(), m.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && Q(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), u && m.cameraPreview && (m.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const _e = J();
    m.stageStatus = _e.status, m.stageStatusDetail = _e.detail, m.stageNotice = E(), _e.status === Jn ? (d == null || d.removeAttribute("data-stage-ready"), d == null || d.setAttribute("data-stage-loading-kind", _e.detail)) : (d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind"));
  }
  function be(j = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const de = String((j == null ? void 0 : j.kind) || "");
    return de === "move" || de === "scale" || de === "scale_x" || de === "scale_y" || de === "rotate" ? !0 : de === "move_multi" ? Array.isArray(j == null ? void 0 : j.stickerSnapshots) && j.stickerSnapshots.length > 0 : !1;
  }
  function we() {
    return !!i.interaction || !!g.drag;
  }
  function A() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = te();
  }
  function oe(j = {}) {
    var R, N, y, T, se, ge, he, ne;
    const de = j.reason ?? dt.STATE, _e = !!j.localOnly, ke = j.externalSync === !0, ue = String(j.cause || ""), ve = String(((R = i.interaction) == null ? void 0 : R.kind) || "");
    (!_e || ve === "view" || ve === "pan_frame" || be() || !!i.viewTransition || ue === "mode" || ue === "frame_view" || ue === "cutout_frame") && (l.backgroundDirty = !0), _e && U() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!_e || ue === "selection" || ue === "mode" || ue === "cutout_frame") && (fe(), Se()), we() ? l.nodePreviewPending = !0 : A(), ke && ((y = (N = a.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || y.call(N), (T = a.setDirtyCanvas) == null || T.call(a, !0, !1)), ke && !_e && ((ge = (se = a.graph) == null ? void 0 : se.setDirtyCanvas) == null || ge.call(se, !0, !0), (ne = (he = t == null ? void 0 : t.canvas) == null ? void 0 : he.setDirty) == null || ne.call(he, !0, !0)), c.requestDraw(de);
  }
  function b() {
    const j = n.getBoundingClientRect(), de = Math.max(2, Math.round(j.width)), _e = Math.max(2, Math.round(j.height)), ke = window.devicePixelRatio || 1, ue = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== de || n.height !== _e) && (n.width = de, n.height = _e);
    const ve = t_(j.width || de, j.height || _e, ke, window.innerWidth || j.width, window.innerHeight || j.height);
    return o.resize(ve.width, ve.height), [n.width, n.height, r.width, r.height].join("x") === ue ? !1 : (l.backgroundDirty = !0, l.dirty = !0, u && S(() => {
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
    l.nodePreviewPending && !we() && A(), de.forEach((h) => l.reasons.add(h)), de.size && (l.dirty = !0), [...de].some((h) => h !== dt.OVERLAY) && (l.backgroundDirty = !0), L(), l.lastTickTs > 0 ? Math.max(1e-3, (j - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = j;
    const _e = i.mode === "frame" && ((Ne = i.interaction) == null ? void 0 : Ne.kind) === "roll_frame" ? i.interaction : null;
    _e != null && _e.shot && (i.frameRollOverlayVisual = { shot: _e.shot });
    const ke = _e ? 1 : 0;
    if (Math.abs(ke - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ke, i.frameRollOverlayStartTs = j), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ke) > 1e-6) {
      const h = Ee(
        (j - Number(i.frameRollOverlayStartTs || j)) / PP,
        0,
        1
      );
      i.frameRollOverlayAlpha = Wn(
        Number(i.frameRollOverlayFrom || 0),
        ke,
        pc(h)
      ), h >= 1 && (i.frameRollOverlayAlpha = ke, ke === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const ue = Y();
    if (Math.abs(ue - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = ue, i.cutoutPanoDimStartTs = j), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - ue) > 1e-6) {
      const h = Ee(
        (j - Number(i.cutoutPanoDimStartTs || j)) / op,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Wn(
        Number(i.cutoutPanoDimFrom || 0),
        ue,
        pc(h)
      ), h >= 1 && (i.cutoutPanoDimAlpha = ue), h >= 1 && ue === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ve = u && C() ? 1 : 0;
    if (Math.abs(ve - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ve, i.cutoutPanoFrameStartTs = j), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ve) > 1e-6) {
      const h = Ee(
        (j - Number(i.cutoutPanoFrameStartTs || j)) / op,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Wn(
        Number(i.cutoutPanoFrameFrom || 0),
        ve,
        pc(h)
      ), h >= 1 && (i.cutoutPanoFrameAlpha = ve, ve === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const h = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), R = Ee((j - Number(i.outputPreviewAnimStartTs || 0)) / h, 0, 1), y = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? IP(R) : OP(R);
      i.outputPreviewAnim = Wn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, y), l.dirty = !0, R >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: h, done: R } = kN(i.viewTransition, j);
      if (i.viewPosition = h.position, i.viewYaw = h.yaw_deg, i.viewPitch = h.pitch_deg, i.viewFov = h.hFOV_deg, i.viewDistance = h.distance, R) {
        const { end: N } = i.viewTransition;
        i.viewTransition = null, N && O(N), Z();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, p.stepInertia(j) && (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const h = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ae(h);
    }
  }
  function v(j) {
    try {
      j();
    } catch (de) {
      const _e = String((de == null ? void 0 : de.stack) || (de == null ? void 0 : de.message) || de || "unknown editor frame error");
      l.tickErrorSignature !== _e && (l.tickErrorSignature = _e, console.error("[PanoramaStickers] editor frame failed", de)), m.stageStatus = Kn, m.stageStatusDetail = "frame", d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind");
    }
  }
  function w(j = performance.now(), de = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const _e = Pb();
    v(() => H(j, de)), Nb(_e);
  }
  function D() {
    !l.running || !b() || v(() => {
      l.dirty = !1, ae(/* @__PURE__ */ new Set([dt.RESIZE]));
    });
  }
  const M = new ResizeObserver(D);
  let P = null;
  function I() {
    P == null || P.removeEventListener("change", K), P = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), P.addEventListener("change", K);
  }
  function K() {
    I(), D();
  }
  function re() {
    X = Mb("editor", () => {
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
    X(), l.running = !1, c.stop(), M.disconnect(), P.removeEventListener("change", K);
  }
  return {
    connect(j) {
      ({
        applyViewTransitionEnd: O,
        drawCutoutOutputPreview: B,
        drawCutoutPanoPassepartout: z,
        drawFrameRollOverlay: G,
        drawFrameViewBackground: x,
        drawGridPano: ee,
        drawGridUnwrap: W,
        drawLassoOutlineOverlay: ce,
        drawObjects: F,
        endEditorViewFrame: pe,
        getActiveCutoutShot: C,
        getCutoutPanoDimTarget: Y,
        getSharedLivePaintSurface: te,
        getStageImageStatus: J,
        isPaintCompositeInteraction: U,
        measureFrameSafeRect: le,
        playback: ie,
        rebuildPaintEngineIfNeeded: k,
        syncCutoutShot: L,
        syncFloatingViewButtonState: Z,
        syncFrameRollKnob: V,
        syncLookAtFrameButtonState: fe,
        syncViewToggleState: Se,
        updateSelectionMenu: Q,
        upstreamNotice: E
      } = j);
    },
    requestDraw: oe,
    syncCanvasSize: b,
    startAnimation: S,
    editorAnimating: $,
    tick: w,
    stageResizeObserver: M,
    watchPixelRatio: I,
    sampleEditorDiagnostics: re,
    stopRenderLoop: me
  };
}
function ji(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function TN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function DN({
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
  var z, G;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", u = {
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
    historyEntries: Array.from({ length: 8 }, (x, ee) => ({ index: ee, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return u;
  const d = ((z = t.find((x) => i(e.paintColor, x.color))) == null ? void 0 : z.id) || "", f = !d, g = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((G = e.customPaintColor) == null ? void 0 : G.a) ?? 1))) * 100), m = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), p = e.brushSizes[m] ?? 10, O = l(), B = Array.from({ length: 8 }, (x, ee) => e.customPaintHistory[ee] || null);
  return {
    ...u,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: d,
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
    historyEntries: B.map((x, ee) => ({
      index: ee,
      color: x ? { cssColor: n(x, 1) } : null
    })),
    sizeValue: p,
    sizeText: String(p),
    sizeFill: `${Math.max(0, Math.min(100, (p - 1) / 119 * 100))}%`,
    sizeDisabled: O,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function LN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const RN = {
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
function VN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = RN[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function yc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function $N({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
function zN({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function jN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const oo = "erp", HN = ["1:1", "4:3", "3:2", "16:9"];
function Kg(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...HN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: oo, label: Number(r) === 180 ? "180°" : "360°", active: e === oo }] : []
  ];
}
function GN({
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
    rows: VN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function WN({
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
  isExternalSticker: u,
  isStickerHidden: d,
  canRestoreSelectedToInitial: f,
  iconSet: g,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: _ = !1,
  cameraDeletable: m = !1,
  erpChoice: p = !1,
  coverage: O = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let B = [];
  if (r.length > 1)
    B = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    B = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (B = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s }
    ], u(t) || (B.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: g.duplicate }), B.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: g.replace_image })), u(t)) {
      const z = f(), G = d(t);
      B.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: z ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !z
      }), B.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? g.eye : g.eye_dashed
      });
    }
    B.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed }), u(t) || B.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s });
  } else
    B = [
      {
        key: "aspect",
        kind: "aspect",
        icon: g.aspect,
        open: !!c,
        choices: Kg(l, { erp: p, coverage: O })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === oo }
    ], _ ? m && B.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : B.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    );
  return Bg(i.corners, B);
}
const up = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function KN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? up.filter((s) => s.cameraTip) : up;
  return Bg([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: c, cameraTip: u }) => ({ key: s, label: l, tip: n ? u : c, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ge.delete }] : []
  ]);
}
function BN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: c, maxY: u } = e || {};
  if (![s, l, c, u].every(Number.isFinite)) return null;
  const d = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), g = u + 18, _ = c - 18 - r;
  let m;
  return g <= f ? m = Math.max(g, 14) : _ >= 14 ? m = Math.min(_, f) : m = Math.min(Math.max(g, 14), f), { left: d, top: m };
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
const Ug = "painting";
function UN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const YN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function qN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: c = !1, stickers: u = !0, scene: d = !1, sceneLocked: f = !1 }) {
  const g = (B, z, G, x, ee, W, { keyable: ce = !0, hideable: F = !0 } = {}) => {
    const pe = (C) => (r == null ? void 0 : r.owner) === B && r.lane === C ? r.frames.map((Y) => Y + W) : [];
    return {
      id: B,
      label: G,
      icon: x,
      clip: ee,
      selected: B === n,
      hideable: F,
      visible: z.visible,
      keyable: ce,
      open: ce && o.has(B),
      keys: $v(z).map((C) => ({ frame: C.frame + W, full: C.full })),
      selectedFrames: pe(null),
      lanes: (ce ? fo(z) : []).map((C) => ({
        key: `${B}:${C}`,
        lane: C,
        label: YN[C],
        frames: z[C].keyframes.map((Y) => Y.frame + W),
        selectedFrames: pe(C)
      }))
    };
  }, _ = u ? e.stickers : [], m = _.filter((B) => B.placement === "sky").sort((B, z) => z.z_index - B.z_index), p = _.filter((B) => B.placement === "world"), O = ({ start: B, in: z, duration: G }) => ({ clip: { start: B, end: G === null ? null : B + G }, offset: B - z });
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
      ...[...m, ...p].map((B) => {
        const { clip: z, offset: G } = O(B.clip);
        return g(B.id, B, Vc(B), Ge.image, z, G);
      }),
      ...u && (UN(e.painting) || !e.painting_visible) ? [{
        id: Ug,
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
      ...u && (d || zs(e.scene)) ? [(() => {
        const { clip: B, offset: z } = O(e.scene.clip);
        return g("scene", e.scene, "Scene", Ge.box, B, z, { keyable: !1 });
      })()] : []
    ]
  };
}
function XN(e, t, r, n) {
  const i = Gv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
function JN(e) {
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
    runtime: u,
    sceneV2: d,
    shotEditor: f,
    state: g,
    studio: _,
    type: m,
    uiState: p
  } = e;
  let O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X, ae, be, we, A, oe, b, S = 0;
  function $() {
    p.toolButtons.forEach((j) => {
      const de = j.attr === "data-tool-mode", _e = j.attr === "data-paint-tool", ke = j.attr === "data-mask-tool";
      j.active = de ? j.value === r.primaryTool : _e ? j.key === r.paintTool : ke ? j.key === r.maskTool : !1, j.pressed = j.active ? "true" : j.pressed == null ? null : "false";
    });
  }
  function H() {
    if (_ && ji(p.toolButtons, "value", "add-camera", { disabled: te() }), m !== "cutout") return;
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
    const j = $N({
      spaceView: fe(),
      spaceMode: tl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    p.space && Object.assign(p.space, j.space);
    for (const [de, _e] of Object.entries(j.buttons)) ji(p.floatingButtons, "action", de, _e);
  }
  function w() {
    var _e;
    const j = zN({ hasShot: !!z(), erp: le(), hidden: te() && !B(), studio: _ });
    r.mode === "frame" && j.disabled && (_ ? Q(z()) : r.mode = "pano"), r.outputPreviewRect = null, p.viewButtons.forEach((ke) => {
      const ue = ke.key === r.mode;
      ke.pressed = ue ? "true" : "false", ke.visible = !(ke.key === "frame" && !f), ke.key === "frame" ? Object.assign(ke, j) : ke.disabled = !1;
    });
    const de = f && r.mode === "frame" ? z() : null;
    p.frameRail.visible = !!de, p.frameRail.disabled = c || (de == null ? void 0 : de.locked) === !0, p.frameRollKnob.visible = !!de && !c && de.locked !== !0, p.frameRollKnob.disabled = c || (de == null ? void 0 : de.locked) === !0, p.frameRollKnob.rollDeg = Number((de == null ? void 0 : de.roll_deg) ?? (de == null ? void 0 : de.rot_deg) ?? 0), p.frameRollKnob.displayValue = Zi(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((_e = r.interaction) == null ? void 0 : _e.kind) === "roll_frame", p.frameRollKnob.armed = !!de && r.altModifier === !0, p.frameRail.rollKnob = p.frameRollKnob, p.frameRail.aspectLabel = de ? Fr(de) : "", p.frameRail.aspectChoices = Kg(de ? String(Fr(de)) : null, { erp: _, coverage: g.coverage }), de || (p.frameRail.aspectOpen = !1), p.outputPreviewToggle.visible = m === "cutout" && r.mode !== "frame" && !!z(), f && p.cameraPreview && (p.cameraPreview.visible = r.mode !== "frame" && O(), p.cameraPreview.expanded = !!r.outputPreviewExpanded, p.cameraPreview.settled = p.cameraPreview.settled === !0 && u.pendingStableLayoutFrames <= 0 && u.hasPresentedFrame), v(), L() ? oe(r.pointerPos) : ae(r.mode === "pano" ? "grab" : "default");
  }
  function D() {
    var de;
    const j = r.mode === "frame" ? z() : null;
    p.frameRollKnob.visible = !!j && !c && j.locked !== !0, p.frameRollKnob.rollDeg = Number((j == null ? void 0 : j.roll_deg) ?? (j == null ? void 0 : j.rot_deg) ?? 0), p.frameRollKnob.displayValue = Zi(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((de = r.interaction) == null ? void 0 : de.kind) === "roll_frame", p.frameRollKnob.armed = !!j && r.altModifier === !0;
  }
  function M() {
    $();
    const j = DN({
      editor: r,
      swatches: Pl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: fr,
      colorsApproximatelyEqual: el,
      rgb01ToHsv: du,
      hsv01ToRgb: uu,
      getBrushPresetIdForTool: G,
      isActiveLassoTool: U
    });
    if (Object.assign(p.paintDock, j), A(), !j.visible) {
      i && (i.hidden = !0);
      return;
    }
    S && (clearTimeout(S), S = 0), o && (!j.colorEnabled && i && !i.hidden && (S = window.setTimeout(() => {
      i.hidden = !0, p.paintDock.colorPopOpen = !1, S = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", j.pickerHueColor), i.style.setProperty("--picker-sat", j.pickerSat), i.style.setProperty("--picker-val", j.pickerVal), i.style.setProperty("--picker-hue", j.pickerHue)), a && (a.style.left = j.pickerSvLeft, a.style.top = j.pickerSvTop), s && (s.style.left = j.pickerHueLeft));
  }
  function P() {
    const j = E(f && r.mode === "frame" ? z() : ce());
    j && (r.panelLastValues = {
      yaw_deg: Number(j.yaw_deg || 0),
      pitch_deg: Number(j.pitch_deg || 0),
      hFOV_deg: Number(j.hFOV_deg || (m === "stickers" ? 30 : 90)),
      vFOV_deg: Number(j.vFOV_deg || (m === "stickers" ? 30 : 60)),
      rot_deg: Number(j.rot_deg || 0),
      roll_deg: Number(j.roll_deg || 0),
      aspect_id: Fr(j)
    }, I());
  }
  function I() {
    be(), we(), re();
  }
  function K() {
    const j = f && r.mode === "frame" ? z() : null;
    return [...F(), X(), j].some((de) => Z(de) ? zs(de) : V(de) && te() && zs(g.camera));
  }
  function re() {
    if (n) return;
    g.ui_settings = g.ui_settings || {};
    const j = TN(g.ui_settings);
    if (l) {
      p.sidePanel = LN({
        coverage: g.coverage,
        uiSettings: j,
        normalizeCoverageValue: xn
      });
      return;
    }
    const de = ce(), _e = f && r.mode === "frame" ? z() : null, ke = _e || de, ue = _e ? [_e] : F(), ve = _e ? "shot" : pe();
    if (ue.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), ke && ve !== "stroke") {
      const ye = E(ke);
      r.panelLastValues = {
        yaw_deg: Number(ye.yaw_deg || 0),
        pitch_deg: Number(ye.pitch_deg || 0),
        hFOV_deg: Number(ye.hFOV_deg || (ve === "image" ? 30 : 90)),
        vFOV_deg: Number(ye.vFOV_deg || (ve === "image" ? 30 : 60)),
        rot_deg: Number(ye.rot_deg || 0),
        roll_deg: Number(ye.roll_deg || 0),
        aspect_id: Fr(ye)
      }, Z(ke) && (r.panelLastValues.opacity = wi(ke, r.frame).opacity * 100);
    }
    const Ne = r.panelLastValues || (m === "stickers" || ve === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), h = ve === "stroke" ? null : ke, R = X(), N = t && (ve === "shot" || ve === "frame") && J(), y = R ? v1(R, r.frame) : N ? { ...h, ...g1(g.camera, r.frame), vFOV_deg: h.vFOV_deg } : Z(h) ? r.panelLastValues : h || Ne, T = R ? b(R) : !!h && !k(h);
    r.panelWasEnabled = T, H();
    let se = null;
    if (_e) {
      const ye = Y({ item: _e, kind: "shot", label: "Frame" });
      se = {
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
        Le && ye.push({ id: Le.id, label: "Camera", icon: C("frame"), item: Le, kind: "frame" }), W().forEach((Re, He) => {
          var Ve, Ie;
          if (!Re || Z(Re) && !Re.visible) return;
          const ze = d ? Vc(Re) : ie(Re) ? String(Re.id || wd) : String(((Ie = (Ve = g.assets) == null ? void 0 : Ve[Re.asset_id]) == null ? void 0 : Ie.name) || Re.asset_id || Re.id), q = `${He + 1}. ${ze}${ie(Re) && Se(Re) ? " (hidden)" : ""}`, Ce = Y({ item: Re, label: q, kind: "image" });
          ye.push({ id: Re.id, label: Ce.label, icon: Ce.icon, item: Re, kind: "image" });
        });
      } else
        x().forEach((Le) => {
          if (!(Le != null && Le.item)) return;
          const Re = Y(Le);
          ye.push({ id: Le.item.id, label: Re.label, icon: Re.icon, item: Le.item, kind: Le.kind });
        });
      const Me = (h == null ? void 0 : h.id) || "", Ae = R ? { label: Vc(R), icon: Ge.globe } : ye.find((Le) => Le.id === Me) || ye[0];
      se = {
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
        enabled: T && !c
      });
    }, ne = [];
    if (R) {
      for (const [ye, Me] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ae = yc(y[ye]);
        he(ye, Me, -Ae, Ae, 0.01);
      }
      he("yaw_deg", "Yaw", -180, 180, 0.1), he("pitch_deg", "Pitch", -90, 90, 0.1), he("roll_deg", "Roll", -180, 180, 0.1), he("scale", "Scale", Og, yc(y.scale), 0.01), he("opacity", "Opacity", 0, 100, 1);
    } else if (ue.length > 1)
      ne.push(`Selected objects: ${ue.length}`), ne.push("Multi-selection supports z-order and delete.");
    else {
      const ye = ve === "shot" || ve === "frame";
      if (N)
        for (const [Me, Ae] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Le = yc(y[Me]);
          he(Me, Ae, -Le, Le, 0.01);
        }
      he("yaw_deg", "Yaw", -180, 180, 0.1), he("pitch_deg", "Pitch", -90, 90, 0.1), he(ve === "image" || m === "stickers" && !ye ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), he("hFOV_deg", "H FOV", 1, 179, 0.1), he("vFOV_deg", "V FOV", 1, 179, 0.1), ye && ge.forEach((Me) => {
        Me.enabled = Me.enabled && jN(Me.key, { erp: le() });
      }), d && !ye && he("opacity", "Opacity", 0, 100, 1);
    }
    p.sidePanel = GN({
      coverage: g.coverage,
      readOnly: c,
      selectionPicker: se,
      enabled: T,
      selectedKind: R ? "world" : ve,
      selectedItems: ue,
      params: ge,
      notes: ne,
      uiSettings: j,
      normalizeCoverageValue: xn
    });
  }
  function me() {
    const { canUndo: j, canRedo: de } = ee();
    ji(p.toolButtons, "value", "undo", { disabled: !j }), ji(p.toolButtons, "value", "redo", { disabled: !de });
  }
  return {
    connect(j) {
      ({
        cameraPreviewShown: O,
        cameraShoots: B,
        getActiveCutoutShot: z,
        getBrushPresetIdForTool: G,
        getCutoutInspectorItems: x,
        getHistoryCapabilities: ee,
        getList: W,
        getSelected: ce,
        getSelectedItems: F,
        getSelectedKind: pe,
        getSelectionItemIcon: C,
        getSelectionItemLabelData: Y,
        hasCamera: te,
        hasSpaceContent: J,
        isActiveLassoTool: U,
        isErpCamera: le,
        isExternalSticker: ie,
        isItemLocked: k,
        isPaintCursorEnabled: L,
        isSceneSticker: Z,
        isShotItem: V,
        isSpaceView: fe,
        isStickerHidden: Se,
        leaveFrameView: Q,
        poseOf: E,
        selectedWorldSticker: X,
        setCanvasCursor: ae,
        syncCutoutShot: be,
        syncTimeline: we,
        syncVideoTransportVisibility: A,
        updateCursor: oe,
        worldStickerEditable: b
      } = j);
    },
    syncLookAtFrameButtonState: H,
    syncFloatingViewButtonState: v,
    syncViewToggleState: w,
    syncFrameRollKnob: D,
    syncPaintUi: M,
    syncSidePanelControls: P,
    updateSidePanel: I,
    inspectorTimed: K,
    syncSidePanelModel: re,
    syncUndoRedoButtons: me
  };
}
function ZN(e) {
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
    timeline: u,
    timelinePlayhead: d,
    uiState: f,
    videoEl: g,
    videoTimelineFps: _
  } = e;
  let m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le;
  function ie() {
    if (!l || o) return;
    const H = L(), v = u.selection, w = v && Z(v.owner);
    if (v) {
      const D = w ? V(v) : [];
      v.frames = v.frames.filter((M) => D.some((P) => w[P].keyframes.some((I) => I.frame === M))), v.frames.length || (u.selection = null);
    }
    f.timeline = qN(s, {
      span: H,
      selection: u.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: u.expanded ?? k(),
      openRows: u.openRows,
      audio: X() && f.videoTransport.hasAudio ? { muted: g.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: _(i) !== null || Om(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: O(),
      cameraHideable: c,
      stickers: !r,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: a && !!kl(i).scene && !U(),
      sceneLocked: !!t
    }), f.easing = u.selection ? XN(w, V(u.selection), u.selection.frames, fe(u.selection.owner)) : null;
  }
  function k() {
    return qv(s, { cameraOnly: r, camera: c });
  }
  function L(H = null) {
    if (t != null && t.frames) return t.frames;
    const v = s.timeline.fps, w = s.stickers.find(z), D = w ? p() : null, M = Math.max(
      f.videoTransport.ready && !J() ? Math.round(Number(f.videoTransport.duration || 0) * v) : 0,
      D ? zm(w.clip, v, D.meta) : 0,
      le()
    );
    return Zh(s, { minimum: Math.round(v * 5), frames: M, openClip: H, camera: r && !t || c });
  }
  function Z(H) {
    return H === "camera" ? O() ? s.camera : null : H === "scene" ? a ? s.scene : null : s.stickers.find((v) => v.id === H) || null;
  }
  function V(H) {
    return H.lane ? [H.lane] : fo(Z(H.owner));
  }
  function fe(H) {
    if (H === "camera") return 0;
    const { clip: v } = Z(H);
    return v.start - v.in;
  }
  function Se(H) {
    return `${co(H, n.frame)}:${H.start - H.in}`;
  }
  function Q(H) {
    const v = Z(H);
    return !!v && v.locked !== !0;
  }
  function E(H) {
    const v = Math.max(0, Math.round(H));
    if (v === n.frame) return;
    pe(), n.frame = v, d.frame.value = v, pe();
    const w = [n.selectedId, n.worldSelectedId];
    ce(), G(), w[0] !== n.selectedId || w[1] !== n.worldSelectedId ? te() : B() && C(), Y(), F({ reason: dt.PLAYHEAD });
  }
  function X() {
    return g instanceof HTMLVideoElement && !!g.getAttribute("src");
  }
  function ae(H) {
    W(), x.seek(H);
  }
  function be() {
    l && x.stop();
  }
  function we() {
    W(), x.toggle();
  }
  function A() {
    pe(), G(), te(), Y(), F();
  }
  function oe() {
    ee(), m(), A();
  }
  function b() {
    const { selection: H } = u;
    Q(H.owner) && (be(), jv(Z(H.owner), V(H), H.frames, n.frame - fe(H.owner)), u.selection = null, oe());
  }
  function S(H) {
    const v = uo(H);
    if (v === null || v === s.timeline.fps) return;
    be();
    const w = Math.round(n.frame * v / s.timeline.fps);
    u1(s, v), u.selection = null, x.seek(w), oe();
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
        hasCamera: O,
        inspectorTimed: B,
        isExternalSticker: z,
        markObjectVisualsDirty: G,
        playback: x,
        pushHistory: ee,
        refreshModalVideoSource: W,
        releaseHiddenSelection: ce,
        requestDraw: F,
        syncCutoutShot: pe,
        syncSidePanelModel: C,
        updateSelectionMenu: Y,
        updateSidePanel: te,
        upstreamBackground: J,
        upstreamLinked: U,
        upstreamSpanFrames: le
      } = H);
    },
    syncTimeline: ie,
    timelineTimed: k,
    timelineSpanFrames: L,
    timelineOwner: Z,
    selectedLanes: V,
    timelineOffset: fe,
    clipView: Se,
    timelineEditable: Q,
    setTimelineFrame: E,
    jumpTimelineTo: ae,
    stopTimelinePlayback: be,
    togglePlayback: we,
    refreshTimelineEdit: A,
    commitTimelineEdit: oe,
    deleteSelectedKeyframes: b,
    changeTimelineFps: S,
    applyVideoTimelineFps: $
  };
}
function QN(e) {
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
  let c, u, d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L;
  function Z(V) {
    if (!(n || !o)) {
      if (V.type === "seek") {
        if (V.phase === "move") {
          s.scrubFrame = V.frame, t.request("seek");
          return;
        }
        t.cancel(), V.phase === "start" && O(), p.seek(V.frame);
        return;
      }
      if (V.type === "play") {
        le();
        return;
      }
      if (V.type === "mute") {
        ie(), pe();
        return;
      }
      if (V.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? U()), s.selection = null, pe();
        return;
      }
      if (V.type === "toggle-row") {
        s.openRows.has(V.id) ? s.openRows.delete(V.id) : s.openRows.add(V.id), pe();
        return;
      }
      if (V.type === "toggle-visible") {
        if (V.id === Ug) i.painting_visible = !i.painting_visible;
        else {
          const fe = te(V.id);
          if (!fe || V.id === "camera" && !a) return;
          fe.visible = !fe.visible;
        }
        z(), f();
        return;
      }
      if (V.type === "select-row") {
        const fe = i.stickers.find((Se) => Se.id === V.id);
        if (fe && !fe.visible || V.id === "camera" && !c()) return;
        fe && !co(fe.clip, r.frame) && m(fe.clip.start), (fe == null ? void 0 : fe.placement) === "world" ? x(fe.id) : V.id === "camera" ? W(g()) : W(_().find((Se) => Se.id === V.id) || null), F(), s.selection = null, L(), k(), G();
        return;
      }
      if (V.type === "select-keys") {
        const fe = Y(V.owner), Se = V.frames.map((X) => X - fe), Q = s.selection, E = (Q == null ? void 0 : Q.owner) === V.owner && Q.lane === V.lane;
        if (V.additive && E) {
          const X = new Set(Q.frames);
          for (const ae of Se)
            X.has(ae) ? X.delete(ae) : X.add(ae);
          Q.frames = [...X].sort((ae, be) => ae - be);
        } else
          s.selection = Se.length ? { owner: V.owner, lane: V.lane, frames: Se } : null;
        pe();
        return;
      }
      if (V.type === "move-keys") {
        const fe = s.selection;
        if (!fe || !C(fe.owner)) return;
        const Se = te(fe.owner), Q = ee(fe);
        if (V.phase === "start") {
          ce(), s.drag = { keyframes: Q.map((ae) => structuredClone(Se[ae].keyframes)), frames: fe.frames };
          return;
        }
        const { drag: E } = s;
        if (!(E != null && E.keyframes)) return;
        Q.forEach((ae, be) => {
          Se[ae].keyframes = structuredClone(E.keyframes[be]);
        });
        const X = Hv(Se, Q, E.frames, V.delta, -Y(fe.owner));
        if (fe.frames = E.frames.map((ae) => ae + X), V.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, X ? f() : B();
        return;
      }
      if (V.type === "clip") {
        const fe = V.id === "scene" ? te("scene") : i.stickers.find((X) => X.id === V.id);
        if (!fe || fe.locked) return;
        if (V.phase === "start") {
          ce(), s.drag = { clip: { ...fe.clip }, span: J(fe.clip) };
          return;
        }
        const { drag: Se } = s;
        if (!(Se != null && Se.clip)) return;
        const Q = Se.clip, E = d(fe.clip);
        if (fe.clip = { ...Q }, V.delta && V.mode === "move" ? Kv(fe.clip, V.delta) : V.delta && V.mode === "start" ? Bv(fe.clip, Q.start + V.delta) : V.delta && Uv(fe.clip, (Q.duration === null ? Se.span : Q.start + Q.duration) + V.delta, Se.span), V.phase !== "end") {
          t.request("timeline"), d(fe.clip) !== E && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, z(), JSON.stringify(fe.clip) !== JSON.stringify(Q) ? f() : B();
        return;
      }
      if (V.type === "key-row") {
        if (V.owner === "scene" || !C(V.owner)) return;
        ce(), Vv(te(V.owner), r.frame - Y(V.owner)), f();
        return;
      }
      if (V.type === "fps") {
        const fe = Jv(V.fps);
        if (fe === null || fe === i.timeline.fps || l.timeline.fpsLocked) {
          pe();
          return;
        }
        u(fe);
        return;
      }
      if (V.type === "length") {
        const fe = Zv(V.length);
        if (fe === void 0 || fe === i.timeline.length) {
          pe();
          return;
        }
        ce(), i.timeline.length = fe, f();
        return;
      }
      if (V.type === "easing") {
        const fe = s.selection;
        if (!fe || !C(fe.owner)) return;
        ce(), Wv(te(fe.owner), ee(fe), fe.frames, V.easing), V.commit ? f() : B();
      }
    }
  }
  return {
    connect(V) {
      ({
        cameraShoots: c,
        changeTimelineFps: u,
        clipView: d,
        commitTimelineEdit: f,
        getActiveCutoutShot: g,
        getList: _,
        jumpTimelineTo: m,
        playback: p,
        refreshModalVideoSource: O,
        refreshTimelineEdit: B,
        releaseHiddenSelection: z,
        requestDraw: G,
        selectWorldSticker: x,
        selectedLanes: ee,
        setSelectedItem: W,
        stopTimelinePlayback: ce,
        syncFloatingViewButtonState: F,
        syncTimeline: pe,
        timelineEditable: C,
        timelineOffset: Y,
        timelineOwner: te,
        timelineSpanFrames: J,
        timelineTimed: U,
        togglePlayback: le,
        toggleVideoMuted: ie,
        updateSelectionMenu: k,
        updateSidePanel: L
      } = V);
    },
    onTimelineAction: Z
  };
}
function e2(e) {
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
  let u, d, f, g;
  function _() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = d(Number(l.output_preset || 2048))), i && (l.coverage = xn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), m(), o.setDirtyCanvas(!0, !0));
  }
  function m() {
    var x;
    if (s) return;
    f(), am(l), l.coverage = xn(l.coverage), om(o, l.active);
    const G = sm(o, l);
    c && !lm(o, G, String(c.value ?? ""), { rebased: n }) && (c.value = G, (x = c.callback) == null || x.call(c, G));
  }
  function p() {
    l.ui_settings = GP(l.ui_settings), s || m();
  }
  function O() {
    var G;
    s || (m(), (G = o.setDirtyCanvas) == null || G.call(o, !0, !0));
  }
  function B() {
    s || u() && g().catch((G) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", G);
    });
  }
  function z(G = {}) {
    var W, ce, F, pe, C, Y, te, J, U;
    const x = G.syncPreview !== !1, ee = G.syncGraph !== !1;
    x && ((ce = (W = o.__panoPreviewNodeRuntime) == null ? void 0 : W.requestDraw) == null || ce.call(W), (pe = (F = o.__panoDomPreview) == null ? void 0 : F.requestDraw) == null || pe.call(F), (C = o.setDirtyCanvas) == null || C.call(o, !0, !1)), ee && ((te = (Y = o.graph) == null ? void 0 : Y.setDirtyCanvas) == null || te.call(Y, !0, !0), (U = (J = t == null ? void 0 : t.canvas) == null ? void 0 : J.setDirty) == null || U.call(J, !0, !0));
  }
  return {
    connect(G) {
      ({
        needsPaintingLayerSync: u,
        resolveEditorOutputPresetWidth: d,
        syncCutoutShot: f,
        syncPaintingLayerAsync: g
      } = G);
    },
    apply: _,
    commitState: m,
    persistUiSettings: p,
    commitAndRefreshNode: O,
    triggerBackgroundPersistenceOnClose: B,
    syncCoverageChangeToNodePreviews: z
  };
}
function t2(e) {
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
  let c, u, d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X, ae;
  function be(H, v, w = "Clear") {
    return new Promise((D) => {
      l.confirmDialog = {
        visible: !0,
        title: String(H || ""),
        text: String(v || ""),
        confirmLabel: String(w || "Confirm"),
        resolve: D
      };
    });
  }
  async function we() {
    var w, D;
    if (n || !await be(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = lo(null), le();
    const v = d();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((M) => M.placement === "world" || v.includes(M)) : v, i || (o.assets = {}), r.selectedId = ((w = v[0]) == null ? void 0 : w.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = ((D = v[0]) == null ? void 0 : D.id) || null, k();
    else {
      const M = a1(o.shots, o.active.selected_shot_id);
      o.stickers = v, o.assets = {}, o.shots = M.shots, r.selectedId = M.selectedShotId, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = M.selectedShotId, !M.selectedShotId && r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, k();
    }
    L(), f(), X(), E(), Z();
  }
  async function A(H) {
    var P, I, K, re;
    if (n) return;
    const v = H === "mask" ? "mask" : "paint", w = v === "mask" ? "Mask" : "Paint", D = B(v);
    if (!(!D.length && !(((P = r.interaction) == null ? void 0 : P.kind) === "draw" && ((I = r.interaction) == null ? void 0 : I.layerKind) === v) || !await be(
      `Clear ${w}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${w}`
    ))) {
      if (((K = r.interaction) == null ? void 0 : K.kind) === "draw" && ((re = r.interaction) == null ? void 0 : re.layerKind) === v) {
        const me = _(r.interaction);
        me && r.paintEngine.cancelActiveStroke(me), r.interaction = null;
      }
      D.length = 0, o.painting.raster_objects = z().filter((me) => String((me == null ? void 0 : me.layerKind) || "paint") !== v), v === "paint" && (O().length = 0), le(), L(), f(), X(), E(), Q(), Z();
    }
  }
  function oe() {
    if (n) return;
    const H = G();
    if (!H || !C(H) || ee(H) || i && te(H)) return;
    let v;
    i ? v = k1(H, di("st"), p()) : (v = JSON.parse(JSON.stringify(H)), v.id = di("st"), v.yaw_deg = jt((v.yaw_deg || 0) + 8), v.z_index = p()), o.stickers.push(v), o.active.selected_sticker_id = v.id, r.selectedId = v.id, r.selectedIds = [v.id], J(), L(), f(), E(), X(), Z();
  }
  function b() {
    const H = V();
    return H ? (ae(H) && (fe(), w1(o, H.id), u(), J(), L(), f(), X(), E(), Se(), Z()), !0) : !1;
  }
  function S() {
    var w, D, M, P, I;
    if (n || t) return;
    const H = x(), v = G();
    if (!(!v && H.length === 0) && !H.some((K) => W(K))) {
      if (fe(), H.length > 1) {
        const K = new Set(H.filter((j) => Y(j)).map((j) => String(j.actionGroupId || j.id || ""))), re = new Set(H.filter((j) => ce(j)).map((j) => ie(j.rasterObjectId || j.id || ""))), me = new Set(H.filter(C).map((j) => String(j.id || "")));
        K.size > 0 && (o.painting.paint.strokes = (Array.isArray((D = (w = o.painting) == null ? void 0 : w.paint) == null ? void 0 : D.strokes) ? o.painting.paint.strokes : []).filter((j) => !K.has(String((j == null ? void 0 : j.actionGroupId) || ""))), o.painting.groups = O().filter((j) => !K.has(String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || ""))), le()), re.size > 0 && (o.painting.raster_objects = z().filter((j) => !re.has(String((j == null ? void 0 : j.id) || ""))), U()), me.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((j) => me.has(String((j == null ? void 0 : j.id) || "")) ? ee(j) ? (pe(j) || (j.visible = !1), !0) : !1 : !0), k(), J()), r.selectedId = null, r.selectedIds = [], L(), f(), X(), E(), Z();
        return;
      }
      if (Y(v)) {
        const K = String(v.actionGroupId || v.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((P = (M = o.painting) == null ? void 0 : M.paint) == null ? void 0 : P.strokes) ? o.painting.paint.strokes : []).filter((re) => String((re == null ? void 0 : re.actionGroupId) || "").trim() !== K), o.painting.groups = O().filter((re) => String((re == null ? void 0 : re.actionGroupId) || (re == null ? void 0 : re.id) || "").trim() !== K), le(), r.selectedId = null, r.selectedIds = [], L(), f(), X(), E(), Z();
        return;
      }
      if (ce(v)) {
        const K = ie(v.rasterObjectId || v.id || "");
        o.painting.raster_objects = z().filter((re) => String((re == null ? void 0 : re.id) || "").trim() !== K), U(), r.selectedId = null, r.selectedIds = [], L(), f(), X(), E(), Z();
        return;
      }
      if (a && F(v)) {
        g();
        return;
      }
      if (s === "stickers" || C(v)) {
        if (ee(v)) {
          if (pe(v)) return;
          v.visible = !1, J(), L(), f(), X(), E(), Z();
          return;
        }
        o.stickers = o.stickers.filter((K) => K.id !== v.id), k(), J(), r.selectedId = ((I = m()[0]) == null ? void 0 : I.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = r.selectedId, L(), f(), X(), E(), Z();
        return;
      }
      c();
    }
  }
  function $() {
    r.primaryTool !== "cursor" && (r.primaryTool = "cursor", Q(), X());
  }
  return {
    connect(H) {
      ({
        clearCutoutFrame: c,
        clearWorldSelection: u,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: f,
        deleteStudioCamera: g,
        getActivePaintTargetDescriptor: _,
        getList: m,
        getNextStickerZIndex: p,
        getPaintingGroupList: O,
        getPaintingLayerList: B,
        getRasterObjectList: z,
        getSelected: G,
        getSelectedItems: x,
        isExternalSticker: ee,
        isItemLocked: W,
        isRasterObjectItem: ce,
        isShotItem: F,
        isStickerHidden: pe,
        isStickerItem: C,
        isStrokeGroupItem: Y,
        isUploadingSticker: te,
        markObjectVisualsDirty: J,
        markPaintCompositeVisualsDirty: U,
        markPaintStrokeVisualsDirty: le,
        parseRasterObjectSelectionId: ie,
        pruneUnusedAssets: k,
        pushHistory: L,
        requestDraw: Z,
        selectedWorldSticker: V,
        stopTimelinePlayback: fe,
        syncFloatingViewButtonState: Se,
        syncPaintUi: Q,
        updateSelectionMenu: E,
        updateSidePanel: X,
        worldStickerEditable: ae
      } = H);
    },
    clearAll: we,
    clearPaintingLayer: A,
    duplicateSelected: oe,
    deleteSelectedWorldSticker: b,
    deleteSelected: S,
    forceCursorTool: $
  };
}
function n2(e) {
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
    sceneV2: u,
    stageWrap: d,
    state: f,
    type: g,
    vueModal: _
  } = e;
  let m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L;
  function Z(P) {
    return yd(P == null ? void 0 : P.dataTransfer);
  }
  function V(P) {
    const I = !!P;
    i.active !== I && (i.active = I, d.classList.toggle("drop-active", I));
  }
  function fe() {
    const P = new Set(
      (f.stickers || []).map((I) => String((I == null ? void 0 : I.asset_id) || "")).filter((I) => !!I)
    );
    Object.keys(f.assets || {}).forEach((I) => {
      P.has(I) || (delete f.assets[I], s.delete(I));
    });
  }
  async function Se(P) {
    if (c || n || g !== "stickers" && g !== "cutout" || !Zn(P)) return;
    if (u) {
      ie(), await be(P);
      return;
    }
    const I = di("asset"), K = To(l, `add:${I}`, async () => {
      try {
        const { image: re } = await Do(P);
        s.set(I, re);
        const me = di("st");
        f.stickers.push({
          id: me,
          asset_id: I,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: O(30, Number(re.naturalWidth || re.width || 1), Number(re.naturalHeight || re.height || 1)),
          rot_deg: 0,
          z_index: x()
        }), J(f.stickers[f.stickers.length - 1]), G(), L(), k(), Y();
        const j = await ui(P, {
          fetchApi: (ke, ue) => t.fetchApi(ke, ue)
        });
        if (!(Array.isArray(f.stickers) ? f.stickers : []).filter((ke) => String((ke == null ? void 0 : ke.asset_id) || "") === I).length) return;
        f.assets[I] = j, fe(), C(), p(), L(), k(), Y();
      } catch (re) {
        delete f.assets[I], s.delete(I);
        const me = Array.isArray(f.stickers) ? f.stickers : [], j = me.filter((de) => String((de == null ? void 0 : de.asset_id) || "") === I);
        throw j.length && (f.stickers = me.filter((de) => String((de == null ? void 0 : de.asset_id) || "") !== I), j.some((de) => String((de == null ? void 0 : de.id) || "") === String(o.selectedId || "")) && J(null), L(), k(), Y(), p()), re;
      }
    });
    try {
      await K;
    } catch {
    }
  }
  function Q() {
    var P;
    c || g !== "stickers" && g !== "cutout" || (P = _ == null ? void 0 : _.openImagePicker) == null || P.call(_, "add");
  }
  function E() {
    var P;
    c || !u || (P = _ == null ? void 0 : _.openImagePicker) == null || P.call(_, "add-world");
  }
  async function X(P) {
    c || !u || !Zn(P) || (ie(), await be(P, "world"));
  }
  function ae() {
    const P = { x: r.width / 2, y: r.height / 2 }, I = ce() ? a.pick(z(), P.x, P.y, r.width, r.height) : null;
    return W1(U(), I, B());
  }
  async function be(P, I = "sky") {
    const K = di("st"), re = To(l, `add:${K}`, async () => {
      const { image: me } = await Do(P), j = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: O(30, Number(me.naturalWidth || me.width || 1), Number(me.naturalHeight || me.height || 1)),
        rot_deg: 0
      }, de = { kind: "file", filename: "" }, _e = I === "world" ? x1(K, de, ae()) : Xu(K, de, j, x());
      s.set(le(_e), me), f.stickers.push(_e), I === "world" ? te(K) : J(_e), G(), L(), k(), Y();
      try {
        const ke = await ui(P, {
          fetchApi: (ve, Ne) => t.fetchApi(ve, Ne)
        }), ue = f.stickers.find((ve) => ve.id === K);
        if (!ue) return;
        ue.source = ds(ke), s.set(le(ue), me), C(), p();
      } catch (ke) {
        throw f.stickers = f.stickers.filter((ue) => ue.id !== K), o.selectedId === K && J(null), o.worldSelectedId === K && m(), C(), p(), ke;
      } finally {
        L(), k(), Y();
      }
    });
    try {
      await re;
    } catch {
    }
  }
  async function we(P, I) {
    const K = To(l, `replace:${I}:${di("asset")}`, async () => {
      const { image: re } = await Do(P), me = await ui(P, {
        fetchApi: (de, _e) => t.fetchApi(de, _e)
      }), j = f.stickers.find((de) => de.id === I);
      if (j) {
        j.source = ds(me), j.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const de of [j.size.value, ...j.size.keyframes.map((_e) => _e.value)])
          de.vFOV_deg = O(de.hFOV_deg, Number(re.naturalWidth || re.width || 1), Number(re.naturalHeight || re.height || 1));
        s.set(le(j), re), pe(), C(), p(), L(), k(), Y();
      }
    });
    try {
      await K;
    } catch {
    }
  }
  async function A(P) {
    if (c || g !== "stickers" && g !== "cutout") return;
    const I = ee();
    if (!I || !F(I) || W(I) || !Zn(P)) return;
    if (u) {
      await we(P, I.id);
      return;
    }
    const K = String(I.id || ""), re = di("asset"), me = To(l, `replace:${K}:${re}`, async () => {
      var ve;
      const j = (Array.isArray(f.stickers) ? f.stickers : []).find((Ne) => String((Ne == null ? void 0 : Ne.id) || "") === K) || null;
      if (!j || !F(j) || W(j)) return;
      const de = String(j.asset_id || ""), _e = de ? dn(((ve = f.assets) == null ? void 0 : ve[de]) || null) : null, ke = Number(j.vFOV_deg || 0), ue = j.crop && typeof j.crop == "object" ? { ...j.crop } : null;
      try {
        const { image: Ne } = await Do(P);
        s.set(re, Ne), j.asset_id = re, j.vFOV_deg = O(
          Number(j.hFOV_deg || 30),
          Number(Ne.naturalWidth || Ne.width || 1),
          Number(Ne.naturalHeight || Ne.height || 1)
        ), j.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, pe(), L(), k(), Y();
        const h = await ui(P, {
          fetchApi: (N, y) => t.fetchApi(N, y)
        }), R = (Array.isArray(f.stickers) ? f.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === K) || null;
        if (!R || String(R.asset_id || "") !== re) return;
        f.assets[re] = h, fe(), C(), p(), L(), k(), Y();
      } catch (Ne) {
        delete f.assets[re], s.delete(re);
        const h = (Array.isArray(f.stickers) ? f.stickers : []).find((R) => String((R == null ? void 0 : R.id) || "") === K) || null;
        throw h && String(h.asset_id || "") === re && (de && _e && (f.assets[de] = _e), h.asset_id = de, h.vFOV_deg = ke, h.crop = ue ? { ...ue } : null), pe(), p(), L(), k(), Y(), Ne;
      }
    });
    try {
      await me;
    } catch {
    }
  }
  function oe() {
    var I;
    if (c) return;
    const P = ee();
    !P || !F(P) || W(P) || (I = _ == null ? void 0 : _.openImagePicker) == null || I.call(_, "replace");
  }
  async function b() {
    if (c || g !== "stickers") return;
    if (u) {
      await S();
      return;
    }
    const P = f.assets && typeof f.assets == "object" ? f.assets : {}, I = Object.entries(P).filter(([, re]) => {
      const me = String((re == null ? void 0 : re.type) || "").toLowerCase(), j = String((re == null ? void 0 : re.value) || "");
      return me === "dataurl" && j.startsWith("data:image");
    });
    if (!I.length) return;
    let K = !1;
    for (const [re, me] of I)
      try {
        const j = String((me == null ? void 0 : me.value) || "");
        if (!j) continue;
        const de = await fetch(j).then((Ne) => Ne.blob()), _e = String(de.type || "image/png").split("/")[1] || "png", ke = String((me == null ? void 0 : me.name) || `${re}.${_e}`), ue = new File([de], ke, { type: de.type || "image/png" }), ve = await ui(ue, {
          fetchApi: (Ne, h) => t.fetchApi(Ne, h)
        });
        f.assets[re] = {
          ...ve,
          w: Number((me == null ? void 0 : me.w) || 0),
          h: Number((me == null ? void 0 : me.h) || 0)
        }, K = !0;
      } catch {
      }
    K && (p(), Y());
  }
  async function S() {
    let P = !1;
    for (const I of f.stickers) {
      const K = I.source.data_url;
      if (K)
        try {
          const re = await fetch(K).then((_e) => _e.blob()), me = String(re.type || "image/png").split("/")[1] || "png", j = new File([re], `${I.id}.${me}`, { type: re.type || "image/png" }), de = await ui(j, {
            fetchApi: (_e, ke) => t.fetchApi(_e, ke)
          });
          I.source = ds(de), P = !0;
        } catch {
        }
    }
    P && (p(), Y());
  }
  function $(P) {
    g !== "stickers" && g !== "cutout" || c || (P.preventDefault(), V(!0));
  }
  function H(P) {
    var re;
    if (g !== "stickers" && g !== "cutout" || c) return;
    P.preventDefault(), P.stopPropagation(), i.depth = 0, V(!1);
    const K = Array.from(((re = P.dataTransfer) == null ? void 0 : re.files) || []).find((me) => Zn(me));
    K && Se(K);
  }
  function v(P) {
    g !== "stickers" && g !== "cutout" || c || Z(P) && (i.depth += 1, V(!0), P.preventDefault());
  }
  function w(P) {
    g !== "stickers" && g !== "cutout" || c || (!i.active && Z(P) && V(!0), i.active && P.preventDefault());
  }
  function D(P) {
    if (g !== "stickers" && g !== "cutout" || c || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const I = Number(P.clientX) <= 0 && Number(P.clientY) <= 0;
    (i.depth === 0 || I) && V(!1);
  }
  function M(P) {
    g !== "stickers" && g !== "cutout" || c || (i.depth = 0, V(!1), Z(P) && P.preventDefault());
  }
  return {
    connect(P) {
      ({
        clearWorldSelection: m,
        commitAndRefreshNode: p,
        computeStickerVFov: O,
        contentSphere: B,
        currentSpaceCamera: z,
        forceCursorTool: G,
        getNextStickerZIndex: x,
        getSelected: ee,
        isExternalSticker: W,
        isSpaceView: ce,
        isStickerItem: F,
        markObjectVisualsDirty: pe,
        pushHistory: C,
        requestDraw: Y,
        selectWorldSticker: te,
        setSelectedItem: J,
        spaceViewState: U,
        stickerImageKey: le,
        stopTimelinePlayback: ie,
        updateSelectionMenu: k,
        updateSidePanel: L
      } = P);
    },
    addImageStickerFromFile: Se,
    addImageSticker: Q,
    addWorldImageSticker: E,
    addWorldStickerFromFile: X,
    replaceSelectedImageFromFile: A,
    replaceSelectedImage: oe,
    migrateLegacyEmbeddedAssets: b,
    pruneUnusedAssets: fe,
    setDropCue: V,
    onCanvasDragOver: $,
    onCanvasDrop: H,
    onWindowDragEnter: v,
    onWindowDragOver: w,
    onWindowDragLeave: D,
    onWindowDrop: M
  };
}
function r2(e) {
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
    stageWrap: u,
    state: d,
    studio: f,
    tooltip: g,
    type: _,
    uiState: m
  } = e;
  let p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X, ae, be, we, A, oe, b, S = a;
  function $(y, T) {
    var he;
    const se = (he = W().space) == null ? void 0 : he.gizmo;
    if (te() && se && b("hover", T) !== null && b("down", T))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: se.mode, start: se.transform, base: ee(), changed: !1 }, r.setPointerCapture(y.pointerId), we(T), !0;
    const ge = _m(ee(), O(fe()));
    return Z1(x(), ge, T, r.width, r.height) ? (te() || (V(de()), oe(), A(), L()), i.interaction = { kind: "world_select" }, r.setPointerCapture(y.pointerId), !0) : !1;
  }
  function H() {
    if (s || _ !== "cutout") return;
    const y = de();
    if (y) {
      V(y), i.mode = "pano", n && J() ? ae(hm(ie(Se(), y.position), z(), r.width, r.height)) : be(jt(Number(y.yaw_deg || 0)), Ee(Number(y.pitch_deg || 0), -89.9, 89.9)), oe(), A(), L({ cause: "cutout_frame" });
      return;
    }
    const T = Ch({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: jt(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    d.shots = [T], V(T), ce(), i.mode = "pano", k(), G(), oe(), A(), L({ cause: "cutout_frame" });
  }
  function v() {
    s || !f || pe() || (Q(), d.camera = p1(Se()), me(), V(de()), ce(), k(), G(), oe(), A(), L({ cause: "cutout_frame" }));
  }
  function w() {
    Q(), d.camera = null, V(null), me(), k(), G(), oe(), A(), L({ cause: "cutout_frame" });
  }
  function D(y, T) {
    f && U(y) && (d.camera.projection = T === oo ? "erp" : "perspective", T === oo) || I(y, T);
  }
  function M() {
    s || _ !== "cutout" || (d.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, d.active.selected_shot_id = null, k(), G(), oe(), A(), L());
  }
  function P(y, T) {
    const se = l.frameSafeRect;
    if (!y || !se || i.mode !== "frame") return !1;
    const ge = cu * Si(se, y), he = $u(Vu(se, T), ge);
    return y.hFOV_deg = he.hFOV_deg, y.vFOV_deg = he.vFOV_deg, !0;
  }
  function I(y, T) {
    if (!y || y.locked === !0) return;
    const se = {
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
      return Math.abs(Ae - Le) > 1e-6 ? Ae >= Le : Mi(y) >= 1;
    })();
    let [he, ne] = se[String(T)] || se["1:1"];
    he >= ne !== ge && ([he, ne] = [ne, he]);
    const ye = he / ne;
    if (!P(y, ye)) {
      const Me = Ee(Number(y.vFOV_deg || 40), 1, 179);
      y.vFOV_deg = Me, y.hFOV_deg = ls(Me, ye);
    }
    y.aspect_id = `${he}:${ne}`;
  }
  function K(y, T, se) {
    if (!y || y.locked === !0) return !1;
    const ge = la(T, se);
    if (!ge) return !1;
    const he = ge.ratio;
    if (!P(y, he)) {
      const ne = Ee(Number(y.vFOV_deg || 40), 1, 179);
      y.vFOV_deg = ne, y.hFOV_deg = ls(ne, he);
    }
    return y.aspect_id = ge.label, !0;
  }
  function re(y) {
    if (!y || y.locked === !0) return;
    const T = String(y.aspect_id || "").trim(), se = Qr(y), ge = se.tanHalfX / Math.max(1e-12, se.tanHalfY), he = 1 / Math.max(1e-12, ge);
    if (!P(y, he)) {
      const ne = Ee(Number(y.vFOV_deg || 60), 1, 179);
      y.vFOV_deg = ne, y.hFOV_deg = ls(ne, he);
    }
    if (/^\d+:\d+$/.test(T)) {
      const [ne, ye] = T.split(":");
      y.aspect_id = `${ye}:${ne}`;
    } else
      y.aspect_id = yi(y);
  }
  function me(y = !0) {
    var ge, he;
    if (!t) return;
    const T = S;
    if (!B()) {
      S = null, (ge = d.shots) != null && ge.length && (d.shots = []), T && j(T, null);
      return;
    }
    const se = (he = d.shots) == null ? void 0 : he[0];
    y && se && S && m1(d.camera, i.frame, se, S), S = rm(d.camera, i.frame), se ? Object.assign(se, S, { position: [...S.position] }) : d.shots = [{ ...S, position: [...S.position] }], T || j(null, S);
  }
  function j(y, T) {
    var ne, ye;
    !T && i.mode === "frame" && le(y);
    const se = (T == null ? void 0 : T.position) ?? [0, 0, 0];
    if (((ye = (ne = i.viewTransition) == null ? void 0 : ne.end) == null ? void 0 : ye.mode) === "3dof") {
      ae({ ...Se(), position: se }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !C()) return;
    const ge = (y == null ? void 0 : y.position) ?? [0, 0, 0];
    if (ge.every((Me, Ae) => Me === se[Ae])) return;
    const he = { ...Se(), position: ge };
    p({ mode: "6dof", position: ge, moved: !0 }), i.viewDistance = he.distance, ae({ ...he, position: se }, { mode: "3dof", moved: !1 });
  }
  function de() {
    if (!c) return null;
    const y = Array.isArray(d.shots) ? d.shots : [];
    if (!y.length) return null;
    const T = String(d.active.selected_shot_id || "");
    return y.find((se) => String((se == null ? void 0 : se.id) || "") === T) || y[0] || null;
  }
  function _e(y, T, se = {}) {
    var ne;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot) return;
    y.accumulatedRad += Mh(T, y.lastAngle), y.lastAngle = T;
    const ge = Ph(y.start.roll_deg, y.accumulatedRad, {
      shiftKey: se.shiftKey,
      altKey: y.altStarted ? !1 : se.altKey
    });
    y.shot.roll_deg = ge, y.changed = y.changed || Math.abs(y.accumulatedRad) > 1e-9;
    const he = (((ne = m.sidePanel) == null ? void 0 : ne.params) || []).find((ye) => ye.key === "roll_deg");
    he && (he.value = ge, he.displayValue = Zi(ge), he.fillPct = (ge + 180) / 360 * 100), E(), ve(y), L({ localOnly: !0 });
  }
  function ke(y, T, se = {}) {
    var ne;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot || !y.rollGesture) return;
    const ge = ig(y.rollGesture, T, se);
    if (!ge) return;
    y.rollGesture = ge.gesture, y.center = ge.gesture.center, y.lastAngle = ge.gesture.lastAngle, y.accumulatedRad = ge.gesture.accumulatedRad, y.shot.roll_deg = ge.rollDeg, y.changed = y.changed || Math.abs(ge.gesture.accumulatedRad) > 1e-9;
    const he = (((ne = m.sidePanel) == null ? void 0 : ne.params) || []).find((ye) => ye.key === "roll_deg");
    he && (he.value = ge.rollDeg, he.displayValue = Zi(ge.rollDeg), he.fillPct = (ge.rollDeg + 180) / 360 * 100), E(), ve(y), L({ localOnly: !0 });
  }
  function ue(y, T) {
    const se = Z(y);
    return Math.atan2(se.y - T.y, se.x - T.x);
  }
  function ve(y) {
    var ye, Me;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot) return;
    g.timer && (clearTimeout(g.timer), g.timer = 0), g.target = null;
    const T = F(y.shot), se = (ye = r.getBoundingClientRect) == null ? void 0 : ye.call(r), ge = (Me = u.getBoundingClientRect) == null ? void 0 : Me.call(u);
    if (!T || !se || !ge || r.width <= 0 || r.height <= 0) return;
    const he = se.width / r.width, ne = se.height / r.height;
    m.tooltip.text = `${Zi(y.shot.roll_deg)}°`, m.tooltip.left = se.left - ge.left + (T.x + T.w * 0.5) * he, m.tooltip.top = se.top - ge.top + (T.y + T.h * 0.5) * ne + 12, m.tooltip.variant = "roll", m.tooltip.visible = !0;
  }
  function Ne(y) {
    var ne;
    if (y.button !== 0 || s || i.mode !== "frame") return;
    const T = de();
    if (!T || T.locked === !0) return;
    const se = F(T);
    if (!se) return;
    const ge = { x: se.x + se.w * 0.5, y: se.y + se.h * 0.5 }, he = ue(y, ge);
    i.interaction = {
      kind: "roll_frame",
      shot: T,
      center: ge,
      lastAngle: he,
      accumulatedRad: 0,
      start: { roll_deg: Number(T.roll_deg ?? T.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (ne = o.setPointerCapture) == null || ne.call(o, y.pointerId), y.preventDefault(), E(), ve(i.interaction), L({ localOnly: !0 });
  }
  function h(y) {
    var T;
    ((T = i.interaction) == null ? void 0 : T.kind) !== "roll_frame" || i.interaction.source !== "knob" || _e(
      i.interaction,
      ue(y, i.interaction.center),
      y
    );
  }
  function R() {
    const y = i.interaction;
    (y == null ? void 0 : y.kind) !== "roll_frame" || y.source !== "knob" || (y.changed && (k(), G(), oe()), i.interaction = null, Y(), X(), E(), L());
  }
  function N(y) {
    const T = i.mode === "frame" && !s ? de() : null;
    !T || T.locked === !0 || Math.abs(Number(T.roll_deg ?? T.rot_deg ?? 0)) <= 1e-9 || (T.roll_deg = 0, k(), G(), oe(), E(), L(), y.preventDefault());
  }
  return {
    connect(y) {
      ({
        applySpaceMode: p,
        cameraFrustumLength: O,
        cameraShoots: B,
        cameraSphere: z,
        commitAndRefreshNode: G,
        currentSpaceCamera: x,
        cutoutCamera: ee,
        editorViewInput: W,
        forceCursorTool: ce,
        getFrameViewRect: F,
        hasCamera: pe,
        hasSpaceContent: C,
        hideTooltip: Y,
        isCameraSelected: te,
        isFreeSpaceView: J,
        isShotItem: U,
        leaveFrameView: le,
        lookingAt: ie,
        pushHistory: k,
        requestDraw: L,
        screenPos: Z,
        setSelectedItem: V,
        spaceScale: fe,
        spaceViewState: Se,
        stopTimelinePlayback: Q,
        syncFrameRollKnob: E,
        syncViewToggleState: X,
        transitionView: ae,
        turnViewTo: be,
        updateCursor: we,
        updateSelectionMenu: A,
        updateSidePanel: oe,
        worldGizmoPointer: b
      } = y);
    },
    addCutoutFrame: H,
    addStudioCamera: v,
    deleteStudioCamera: w,
    setShotAspect: D,
    clearCutoutFrame: M,
    applyCutoutAspectCustom: K,
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
function i2(e) {
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
    runtime: u,
    shotEditor: d,
    toolRailEl: f,
    uiState: g,
    videoTransportEl: _
  } = e;
  let m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U = null;
  function le(w) {
    if (n.mode = "pano", !w) return;
    p();
    const D = C().distance;
    n.viewYaw = jt(w.yaw_deg), n.viewPitch = Ee(w.pitch_deg, -89.9, 89.9), n.viewFov = Ee(w.hFOV_deg, 35, 140), n.spaceMode === "6dof" && m({ mode: "6dof", position: [...w.position], moved: !0 }), n.viewDistance = D, u.backgroundDirty = !0;
  }
  function ie() {
    var ve, Ne, h, R, N;
    if (!r) return null;
    const w = (ve = r.getBoundingClientRect) == null ? void 0 : ve.call(r), D = Number((w == null ? void 0 : w.width) || 0) > 0 ? r.width / w.width : 1, M = Number((w == null ? void 0 : w.height) || 0) > 0 ? r.height / w.height : 1;
    u.frameCanvasScale = Math.min(D, M);
    let P = 24, I = 24;
    const K = Math.max(P + 1, r.width - 24);
    let re = Math.max(I + 1, r.height - 24);
    const me = (Ne = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : Ne.call(f), j = (h = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : h.call(s);
    let de = 24;
    me && w && me.width > 0 && me.height > 0 && (de = Math.max(de, (me.right - w.left) * D + ip)), j && w && j.width > 0 && j.height > 0 && ((R = g.frameRail) == null ? void 0 : R.visible) === !0 && (de = Math.max(de, (w.right - j.left) * D + ip)), P = Math.max(P, de);
    const _e = Math.min(K, r.width - de);
    let ke = 24;
    const ue = (N = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : N.call(a);
    if (ue && w && ue.width > 0 && ue.height > 0 && (ke = Math.max(ke, (ue.bottom - w.top) * M + fc)), [l, _].forEach((y) => {
      var ge;
      if (!y || !w) return;
      const T = getComputedStyle(y);
      if (T.display === "none" || T.visibility === "hidden" || Number(T.opacity) <= 0) return;
      const se = (ge = y.getBoundingClientRect) == null ? void 0 : ge.call(y);
      !se || se.width <= 0 || se.height <= 0 || (ke = Math.max(ke, (w.bottom - se.top) * M + fc));
    }), o && w) {
      const y = getComputedStyle(o);
      y.display !== "none" && y.visibility !== "hidden" && Number(y.opacity) > 0 && (ke = Math.max(ke, (kP + fc) * M));
    }
    return I = Math.max(I, ke), re = Math.max(I + 1, Math.min(re, r.height - ke)), {
      x: P,
      y: I,
      w: Math.max(1, _e - P),
      h: Math.max(1, re - I)
    };
  }
  function k(w = z()) {
    if (!w || !r) return null;
    const D = u.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return iv(D, w, cu * Si(D, w));
  }
  function L(w = z()) {
    const D = k(w);
    return D ? { x: D.x, y: D.y, w: D.w, h: D.h } : null;
  }
  function Z() {
    return d && !!z();
  }
  function V(w, D) {
    const M = z();
    if (!M || M.locked === !0) return !1;
    const P = Number(D) > 0, I = Ih(M, D);
    if (!I) return !1;
    if (P) {
      const K = cu * Si(
        u.frameSafeRect || { w: r.width, h: r.height },
        I
      ), re = zu({ width: r.width, height: r.height }, K);
      if (re.halfW < r.width * 0.5 - 1e-6 || re.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return M.hFOV_deg = I.hFOV_deg, M.vFOV_deg = I.vFOV_deg, fe(), J(), !0;
  }
  function fe() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, W(), O(), J());
    }, 180);
  }
  function Se() {
    return t && n.mode === "frame" && G();
  }
  function Q() {
    const w = z(), D = k(w);
    return w && D ? xm(w, D, { width: r.width, height: r.height }) : null;
  }
  function E() {
    var w;
    return ((w = B()) == null ? void 0 : w.radius) || nr;
  }
  function X(w) {
    const { position: D, yaw_deg: M, pitch_deg: P, roll_deg: I, hFOV_deg: K } = w.shot;
    return { position: D, yaw_deg: M, pitch_deg: P, roll_deg: I, hFOV_deg: K, distance: E() };
  }
  function ae(w, D) {
    const { rect: M } = w;
    return i.pickSurface(F(w.shot), D.x - M.x, D.y - M.y, M.w, M.h);
  }
  function be(w, D, M) {
    return zc(D, ae(w, M), null, pe());
  }
  function we(w) {
    return JSON.stringify([X(w), w.rect]);
  }
  function A(w) {
    const D = z();
    D.position = [...w.position], D.yaw_deg = w.yaw_deg, D.pitch_deg = w.pitch_deg;
  }
  function oe(w, D) {
    const M = z();
    !M || c || M.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: M,
      last: w,
      start: { yaw_deg: Number(M.yaw_deg || 0), pitch_deg: Number(M.pitch_deg || 0) },
      changed: !1
    }, te(w), r.setPointerCapture(D));
  }
  function b(w, D, M) {
    const P = Q();
    if (!P || c) return;
    const I = X(P);
    n.interaction = w === "orbit" ? { kind: "frame_orbit", last: D, pivot: be(P, I, D), changed: !1 } : { kind: "frame_pan", last: D, depth: cm(I, pe()), changed: !1 }, te(D), r.setPointerCapture(M);
  }
  function S(w, D) {
    const M = Q();
    if (!M) return;
    const P = X(M), I = D.x - w.last.x, K = D.y - w.last.y;
    A(w.kind === "frame_pan" ? fm(P, I, K, M.rect.w, M.rect.h, w.depth) : dm(P, I, K, r.height, w.pivot)), w.changed = w.changed || I !== 0 || K !== 0, w.last = D, ce({ localOnly: !0, cause: "frame_view" });
  }
  function $(w, D) {
    const M = Q();
    if (!M || c) return;
    const P = X(M), I = performance.now(), K = { x: w.x, y: w.y, time: I, key: i.contentRevision(), view: we(M) };
    if (!um(U, K)) {
      const re = ae(M, w);
      U = { ...K, cost: performance.now() - I, hit: re };
    }
    A(pm(P, zc(P, U.hit, null, pe()), D, pe())), U.view = we(Q() ?? M), U.wheelTime = I, fe(), J(), ce({ localOnly: !0, cause: "frame_view" });
  }
  function H() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, W(), O(), J(), !0) : !1;
  }
  function v() {
    const w = n.interaction;
    if (!(w != null && w.shot) || !w.start || w.kind !== "pan_frame" && w.kind !== "roll_frame") return !1;
    const D = w.kind === "roll_frame";
    return w.kind === "pan_frame" ? (w.shot.yaw_deg = w.start.yaw_deg, w.shot.pitch_deg = w.start.pitch_deg) : w.shot.roll_deg = w.start.roll_deg, D && x(), n.interaction = null, ee(), Y(), J(), te(n.pointerPos), ce({ localOnly: !0 }), !0;
  }
  return {
    connect(w) {
      ({
        applySpaceMode: m,
        cancelViewTransition: p,
        commitAndRefreshNode: O,
        contentSphere: B,
        getActiveCutoutShot: z,
        hasSpaceContent: G,
        hideTooltip: x,
        invalidateLivePaintPreviewCaches: ee,
        pushHistory: W,
        requestDraw: ce,
        shotViewCamera: F,
        spaceScale: pe,
        spaceViewState: C,
        syncViewToggleState: Y,
        updateCursor: te,
        updateSidePanel: J
      } = w);
    },
    leaveFrameView: le,
    measureFrameSafeRect: ie,
    getFrameViewLayout: k,
    getFrameViewRect: L,
    supportsFramePainting: Z,
    zoomFrameViewAt: V,
    isFreeFrameView: Se,
    frameContext: Q,
    frameViewDistance: E,
    frameSpaceView: X,
    frameTarget: be,
    startPanFrame: oe,
    startFrameDrag: b,
    dragFrame: S,
    zoomFrameAt: $,
    flushFrameWheelCommit: H,
    cancelFrameCameraGesture: v
  };
}
function o2(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let a, s, l, c, u, d, f, g, _, m, p, O, B, z, G, x, ee, W, ce = 0;
  function F() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function pe() {
    return String(F() || "") === "lasso_fill";
  }
  function C() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function Y(A, oe) {
    const b = Number(oe || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, b / 2048)
    };
  }
  function te(A) {
    const oe = String(A || "").trim();
    return oe === "eraser" ? Ar : An[oe] ? oe : t.activeBrushPresetId || Ar;
  }
  function J() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (C() || W());
  }
  function U() {
    var A;
    return J() && ((A = t.pointerPos) == null ? void 0 : A.inside) === !0;
  }
  function le(A, oe = !0) {
    const b = Number((A == null ? void 0 : A.x) || 0), S = Number((A == null ? void 0 : A.y) || 0), $ = oe !== !1, H = t.pointerPos || { x: 0, y: 0, inside: !1 }, v = H.inside !== $ || Math.abs(H.x - b) > 0.01 || Math.abs(H.y - S) > 0.01;
    return t.pointerPos = { x: b, y: S, inside: $ }, v;
  }
  function ie() {
    var P, I;
    if (!U()) return null;
    const A = t.primaryTool === "mask" ? "mask" : "paint", oe = A === "mask" ? t.maskTool : t.paintTool, b = te(oe), S = An[b] || An[Ar], $ = Number(t.brushSizes[b] ?? 10), H = Math.max(1, $) * Math.max(0.1, Number(S.sizeScale ?? 1)), v = Math.max(3, H * 0.5), w = A === "mask" ? oe === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : oe === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Ln(t.paintColor), D = A === "mask" ? oe === "lasso_fill" ? 0.18 : 0.2 : oe === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), M = A === "mask" ? 0.95 : oe === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: A,
      toolKind: oe,
      preset: S,
      radius: v,
      fillStyle: fr(w, D),
      strokeStyle: fr(w, M),
      x: Number(((P = t.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((I = t.pointerPos) == null ? void 0 : I.y) || 0),
      hotspotX: v,
      hotspotY: v
    };
  }
  function k() {
    var K, re, me;
    const A = ie();
    if (!r) return;
    if (!A) {
      r.style.display = "none";
      return;
    }
    let oe = A.radius * 2, b = A.radius * 2, S = "999px", $ = 0, H = A.fillStyle, v = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const D = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let P = Number(A.hotspotX ?? oe * 0.5), I = Number(A.hotspotY ?? b * 0.5);
    if (A.toolKind === "lasso_fill")
      oe = Qs, b = Qs, S = "0", v = "0", w = "none", P = NP, I = CP, H = DP(A.fillStyle, M, D);
    else if (A.layerKind === "mask")
      H = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (A.toolKind === "marker") {
      const j = Math.max(1, Number(((K = A.preset) == null ? void 0 : K.aspect) ?? 1));
      oe = Math.max(10, A.radius * 2 * j), b = Math.max(6, A.radius * 2), S = `${Math.min(6, b * 0.42)}px`, $ = Number(((me = (re = A.preset) == null ? void 0 : re.angle) == null ? void 0 : me.value) || 0) * xi;
    } else A.toolKind === "brush" ? H = `radial-gradient(circle at 50% 50%, ${A.strokeStyle} 0%, ${A.fillStyle} 45%, rgba(0,0,0,0) 100%)` : A.toolKind === "eraser" && (H = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(oe)}px`, r.style.height = `${Math.round(b)}px`, r.style.borderRadius = S, r.style.border = v, r.style.boxShadow = w, r.style.background = H, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(A.x - P)}px, ${Math.round(A.y - I)}px) rotate(${$}deg)`;
  }
  function L() {
    var ke;
    if (!n || !i) return;
    const A = t.primaryTool === "mask" ? "mask" : "paint", oe = A === "mask" ? t.maskTool : t.paintTool;
    if (oe === "lasso_fill") return;
    const b = te(oe), S = An[b] || An[Ar], $ = Number(t.brushSizes[b] ?? 10), H = Math.max(1, $) * Math.max(0.1, Number(S.sizeScale ?? 1)), v = Math.max(6, H * 0.5), w = oe === "eraser", D = A === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : Ln(t.paintColor), M = A === "mask" ? fr(D, 0.22) : w ? "rgba(255,255,255,0.14)" : fr(D, Ee(Math.max(0.18, Number(D.a ?? 1) * 0.34), 0.18, 0.56)), P = A === "mask" ? fr(D, 0.96) : w ? "rgba(255,255,255,0.72)" : fr(D, Ee(Math.max(0.56, Number(D.a ?? 1) * 0.96), 0.56, 1));
    let I = v * 2, K = v * 2, re = "999px", me = 0, j = M;
    const de = "rgba(222, 222, 222, 0.72)", _e = "rgba(52, 52, 52, 0.72)";
    if (A === "mask")
      j = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (oe === "marker") {
      const ue = Math.max(1, Number((S == null ? void 0 : S.aspect) ?? 1));
      I = Math.max(16, v * 2 * ue), K = Math.max(10, v * 2), re = `${Math.min(8, K * 0.42)}px`, me = Number(((ke = S == null ? void 0 : S.angle) == null ? void 0 : ke.value) || 0) * xi;
    } else oe === "brush" ? j = `radial-gradient(circle at 50% 50%, ${P} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : oe === "lasso_fill" ? (I = Math.max(18, v * 1.8), K = I, j = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : w && (j = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(I)}px`, i.style.height = `${Math.round(K)}px`, i.style.borderRadius = re, i.style.background = j, i.style.border = `1px solid ${de}`, i.style.boxShadow = `0 0 0 1px ${_e}`, i.style.transform = `rotate(${me}deg)`, ce && (clearTimeout(ce), ce = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function Z() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), ce && clearTimeout(ce), ce = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), ce = 0;
    }, 180));
  }
  function V(A, oe, b, S) {
    const $ = te(oe), H = An[$] || An[Ar], v = t.brushSizes[$] ?? 10, w = Math.max(1, v) * Math.max(0.1, H.sizeScale ?? 1), D = Y(S, w), M = b.map((I) => ({
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: Number.isFinite(Number(I == null ? void 0 : I.widthScale)) ? Math.max(0, Number(I.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(I == null ? void 0 : I.pressureLike)) ? Math.max(0, Number(I.pressureLike)) : 1
    })), P = {
      id: Gi(A),
      actionGroupId: Gi("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: A,
      toolKind: oe,
      size: w,
      createdAt: Date.now(),
      color: A === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: D.radiusModel,
      radiusValue: D.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: M.map((I) => ({ ...I })),
        points: M.map((I) => ({ ...I }))
      }
    };
    return rp(P, H), t.mode, Number(H.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function fe(A, oe, b, S) {
    const $ = b.map((D) => ({
      ...D,
      t: Number((D == null ? void 0 : D.t) || 0),
      widthScale: Number.isFinite(Number(D == null ? void 0 : D.widthScale)) ? Math.max(0, Number(D.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(D == null ? void 0 : D.pressureLike)) ? Math.max(0, Number(D.pressureLike)) : 1
    })), H = te(oe), v = An[H] || An[Ar], w = {
      id: Gi(A),
      actionGroupId: Gi("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: A,
      toolKind: oe,
      size: 10,
      createdAt: Date.now(),
      color: A === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: $.map((D) => ({ ...D }))
      }
    };
    return rp(w, v), t.mode, Number(v.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Se(A) {
    const oe = o.painting || (o.painting = lo(null)), b = oe[A] || (oe[A] = { strokes: [] });
    return Array.isArray(b.strokes) || (b.strokes = []), b.strokes;
  }
  function Q(A, oe, b = performance.now()) {
    let S;
    if (t.mode === "frame") {
      const M = f();
      if (!M || (S = ee(oe, M, b), !S)) return !1;
    } else
      S = x(oe, b);
    if (!S) return !1;
    const $ = A.stroke.geometry.rawPoints || A.stroke.geometry.points, H = A.stroke.geometry.points, v = $[$.length - 1];
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
    const D = g(A);
    if (D) {
      const M = t.paintEngine.ensureTarget(D);
      t.paintEngine.appendStrokePoint(M, Number(w.u ?? 0), Number(w.v ?? 0), A.stroke);
    }
    return !0;
  }
  function E(A, oe, b = performance.now()) {
    var v, w;
    let S;
    if (t.mode === "frame") {
      const D = f();
      if (!D) return !1;
      S = ee(oe, D, b);
    } else
      S = x(oe, b);
    const $ = (w = (v = A == null ? void 0 : A.stroke) == null ? void 0 : v.geometry) == null ? void 0 : w.points;
    if (!S || !Array.isArray($)) return !1;
    const H = $[$.length - 1];
    if (H) {
      const D = Math.abs(Number(S.u ?? S.x ?? 0) - Number(H.u ?? H.x ?? 0)), M = Math.abs(Number(S.v ?? S.y ?? 0) - Number(H.v ?? H.y ?? 0));
      if (D < 15e-4 && M < 15e-4) return !1;
    }
    return $.push({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function X(A) {
    var ue, ve, Ne, h, R;
    const oe = (A == null ? void 0 : A.stroke) || null;
    if (!oe || (A == null ? void 0 : A.layerKind) !== "paint" || String((oe == null ? void 0 : oe.toolKind) || "") !== "eraser") return !1;
    G();
    const b = g(), S = c(b.width, b.height);
    if (!z(S, oe, { w: b.width, h: b.height })) return !1;
    const $ = ((ve = (ue = S.ctx) == null ? void 0 : ue.getImageData(0, 0, b.width, b.height)) == null ? void 0 : ve.data) || null;
    if (!$) return !1;
    const H = new Map(m().map((N) => [String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim(), N ? { ...N } : null])), v = [], w = [], D = [...p().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== "paint")];
    let M = !1, P = _().reduce((N, y) => Math.max(N, Number((y == null ? void 0 : y.z_index) || 0)), -1) + 1;
    function I(N, y, T, se = 8) {
      let ge = y, he = T, ne = -1, ye = -1;
      for (let Me = 0; Me < T; Me += 1)
        for (let Ae = 0; Ae < y; Ae += 1)
          N[(Me * y + Ae) * 4 + 3] <= se || (Ae < ge && (ge = Ae), Me < he && (he = Me), Ae > ne && (ne = Ae), Me > ye && (ye = Me));
      return ne < ge || ye < he ? null : { minX: ge, minY: he, maxX: ne, maxY: ye };
    }
    const K = I($, b.width, b.height, 8);
    if (!K) return !1;
    function re(N, y) {
      return !N || !y ? !1 : !(N.maxX < y.minX || y.maxX < N.minX || N.maxY < y.minY || y.maxY < N.minY);
    }
    function me(N, y) {
      const T = u((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "", "paint", y);
      if (!T) return null;
      const se = T.centerUv.u - T.halfW, ge = T.centerUv.u + T.halfW, he = T.centerUv.v - T.halfH, ne = T.centerUv.v + T.halfH, ye = b.width, Me = b.height;
      return {
        minX: Math.floor((se % 1 + 1) % 1 * ye),
        maxX: Math.ceil((ge % 1 + 1) % 1 * ye),
        minY: Math.floor(Ee(he, 0, 1) * Me),
        maxY: Math.ceil(Ee(ne, 0, 1) * Me),
        wraps: ge - se >= 1 || se < 0 || ge > 1
      };
    }
    function j(N) {
      const y = (N == null ? void 0 : N.bbox) || null;
      if (!y) return null;
      const T = (N == null ? void 0 : N.transform) || {}, se = b.width, ge = b.height, he = Number(y.u0 || 0) + Number(T.du || 0), ne = Number(y.u1 || 0) + Number(T.du || 0), ye = Number(y.v0 || 0) + Number(T.dv || 0), Me = Number(y.v1 || 0) + Number(T.dv || 0);
      return {
        minX: Math.floor((he % 1 + 1) % 1 * se),
        maxX: Math.ceil((ne % 1 + 1) % 1 * se),
        minY: Math.floor(Ee(ye, 0, 1) * ge),
        maxY: Math.ceil(Ee(Me, 0, 1) * ge),
        wraps: ne - he >= 1 || he < 0 || ne > 1
      };
    }
    function de(N) {
      return N ? N.wraps ? re(K, { minX: 0, maxX: N.maxX, minY: N.minY, maxY: N.maxY }) || re(K, { minX: N.minX, maxX: b.width - 1, minY: N.minY, maxY: N.maxY }) : re(K, N) : !0;
    }
    function _e(N) {
      if (!N) return { touched: !1, canvas: null };
      const y = c(b.width, b.height, { readback: !0 });
      y.ctx.drawImage(N, 0, 0);
      const T = y.ctx.getImageData(0, 0, b.width, b.height);
      y.ctx.save(), y.ctx.globalCompositeOperation = "destination-out", y.ctx.drawImage(S.canvas, 0, 0), y.ctx.restore();
      const se = y.ctx.getImageData(0, 0, b.width, b.height);
      for (let ge = 0; ge < b.width * b.height; ge += 1) {
        if ($[ge * 4 + 3] <= 8) continue;
        const ne = T.data[ge * 4 + 3], ye = se.data[ge * 4 + 3];
        if (ne > ye)
          return { touched: !0, canvas: y.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ke(N, y, T) {
      const se = Number(T == null ? void 0 : T.z_index), ge = l(N, y, T).map((he, ne) => ({
        ...he,
        z_index: Number.isFinite(se) ? se + ne * 1e-3 : P + ne * 1e-3
      }));
      return ge.length && (P = Math.max(P, ...ge.map((he) => Number((he == null ? void 0 : he.z_index) || 0))) + 1), ge;
    }
    for (const N of m()) {
      const y = String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim();
      if (!y) continue;
      const T = O(y, "paint");
      if (!de(me(N, T))) {
        w.push(N), v.push(...T);
        continue;
      }
      const se = ((h = (Ne = t.paintEngine) == null ? void 0 : Ne.getGroupTarget) == null ? void 0 : h.call(Ne, y)) || null, ge = ((R = se == null ? void 0 : se.committedPaint) == null ? void 0 : R.canvas) || null;
      if (!ge) {
        w.push(N), v.push(...T);
        continue;
      }
      const he = _e(ge);
      if (!he.touched || !he.canvas) {
        w.push(N), v.push(...T);
        continue;
      }
      M = !0;
      const ne = ke(he.canvas, "paint", H.get(y) || N || {});
      D.push(...ne);
    }
    for (const N of p().filter((y) => String((y == null ? void 0 : y.layerKind) || "paint") === "paint")) {
      if (!de(j(N))) {
        D.push(N);
        continue;
      }
      const y = a(N, null);
      if (!y) {
        D.push(N);
        continue;
      }
      const T = _e(y);
      if (!T.touched || !T.canvas) {
        D.push(N);
        continue;
      }
      M = !0;
      const se = ke(T.canvas, "paint", N);
      D.push(...se);
    }
    return M ? (o.painting.paint.strokes = v, o.painting.groups = w.sort((N, y) => Number((N == null ? void 0 : N.z_index) || 0) - Number((y == null ? void 0 : y.z_index) || 0)), o.painting.raster_objects = D.sort((N, y) => Number((N == null ? void 0 : N.z_index) || 0) - Number((y == null ? void 0 : y.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function ae(A) {
    var v, w, D, M, P;
    if ((((w = (v = A.stroke) == null ? void 0 : v.geometry) == null ? void 0 : w.rawPoints) || ((M = (D = A.stroke) == null ? void 0 : D.geometry) == null ? void 0 : M.points) || []).length >= 1) {
      we(A);
      const I = g(A);
      I && (String(((P = A.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(I) : t.paintEngine.commitActiveStroke(A.stroke, I)), A._hasCommittedSegments = !0;
    }
    const b = A.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, $ = V(A.layerKind, b.toolKind, [], S);
    $.actionGroupId = b.actionGroupId, A.stroke = $;
    const H = g(A);
    H && t.paintEngine.beginStroke($, H);
  }
  function be(A) {
    var v, w;
    if ((((w = (v = A.stroke) == null ? void 0 : v.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      we(A);
      const D = g(A);
      D && t.paintEngine.commitActiveStroke(A.stroke, D), A._hasCommittedSegments = !0;
    }
    const b = A.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, $ = fe(A.layerKind, b.toolKind, [], S);
    $.actionGroupId = b.actionGroupId, A.stroke = $;
    const H = g(A);
    H && t.paintEngine.beginStroke($, H);
  }
  function we(A) {
    var H, v, w, D;
    const oe = ((H = A == null ? void 0 : A.stroke) == null ? void 0 : H.geometry) || null;
    if (!oe) return !1;
    const b = String(((v = A == null ? void 0 : A.stroke) == null ? void 0 : v.toolKind) || "pen");
    if (A.layerKind === "paint" && b === "eraser")
      return oe.geometryKind !== "lasso_fill" && (oe.processedPoints = B(oe.rawPoints || oe.points || [], A.stroke.targetSpace, !0)), X(A);
    const S = A.layerKind === "paint" && b !== "eraser";
    if (oe.geometryKind === "lasso_fill")
      return (Array.isArray(oe.points) ? oe.points : []).length < 3 ? !1 : (S && d((w = A.stroke) == null ? void 0 : w.actionGroupId), Se(A.layerKind).push(A.stroke), !0);
    const $ = oe.rawPoints || oe.points || [];
    return $.length < 1 ? !1 : (oe.processedPoints = B($, A.stroke.targetSpace, !0), S && d((D = A.stroke) == null ? void 0 : D.actionGroupId), Se(A.layerKind).push(A.stroke), !0);
  }
  return {
    connect(A) {
      ({
        buildRasterObjectEditCanvas: a,
        clearSelection: s,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: u,
        ensurePaintingGroupEntry: d,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: g,
        getDisplayListObjects: _,
        getPaintingGroupList: m,
        getRasterObjectList: p,
        getStrokeGroupStrokes: O,
        processFreehandPoints: B,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: G,
        screenPosToErpPoint: x,
        screenPosToFrameAsErpPoint: ee,
        supportsFramePainting: W
      } = A);
    },
    isActiveLassoTool: pe,
    supportsErpPainting: C,
    getBrushPresetIdForTool: te,
    isPaintCursorEnabled: J,
    isActivePaintCursorVisible: U,
    setPointerPos: le,
    syncPaintCursorElement: k,
    showPaintSizePreview: L,
    hidePaintSizePreview: Z,
    buildFreehandStrokeRecord: V,
    buildLassoFillStrokeRecord: fe,
    getPaintingLayerList: Se,
    appendPaintPoint: Q,
    appendLassoPoint: E,
    _segmentFrameStroke: ae,
    _segmentFrameLassoFill: be,
    commitPaintInteraction: we
  };
}
function a2(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, a, s, l, c, u, d, f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C;
  function Y(k) {
    var Z;
    if (n && t.mode === "frame") {
      const V = a(), fe = l(V);
      if (!V || !fe || !(Number((k == null ? void 0 : k.x) || 0) >= Number(fe.x || 0) && Number((k == null ? void 0 : k.x) || 0) <= Number(fe.x || 0) + Number(fe.w || 0) && Number((k == null ? void 0 : k.y) || 0) >= Number(fe.y || 0) && Number((k == null ? void 0 : k.y) || 0) <= Number(fe.y || 0) + Number(fe.h || 0))) return null;
      const Q = ce(k, V, performance.now()), E = Q ? o(Q) : null;
      if (E)
        for (const ae of s()) {
          if (!z(ae)) continue;
          const be = C(ae, E);
          if (be && Number(be.x) >= 0 && Number(be.x) <= 1 && Number(be.y) >= 0 && Number(be.y) <= 1) {
            const we = W(ae);
            if (we != null && we.visible) return { item: ae, geom: we };
          }
        }
      const X = c(!1).slice().sort((ae, be) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0));
      for (const ae of X) {
        if (ae.type === "strokeGroup") {
          const A = f(ee("paint", ae.actionGroupId || ae.id || ""));
          if (!A) continue;
          const oe = W(A);
          if (!(oe != null && oe.visible)) continue;
          const b = Array.isArray(oe.strokePaths) ? oe.strokePaths : [];
          for (const S of b) {
            const $ = Array.isArray(S == null ? void 0 : S.points) ? S.points : [];
            if (!$.length) continue;
            if (S.closed && $.length >= 3 && Br(k, $)) return { item: A, geom: oe };
            const H = Math.max(8, Number((S == null ? void 0 : S.lineWidth) || 0) * 0.5 + 6);
            for (let v = 0; v < $.length - 1; v += 1)
              if (mc(k, $[v], $[v + 1]) <= H * H) return { item: A, geom: oe };
            if ($.length === 1 && Ro(k, $[0]) <= H * H) return { item: A, geom: oe };
          }
          continue;
        }
        if (ae.type === "rasterObject") {
          const A = u(x(((Z = ae.item) == null ? void 0 : Z.id) || ae.id || ""));
          if (!A) continue;
          const oe = W(A);
          if (g(A, oe, k, Q)) return { item: A, geom: oe };
          continue;
        }
        const be = ae.item;
        if (!be || !z(be) || !E) continue;
        const we = C(be, E);
        if (we && Number(we.x) >= 0 && Number(we.x) <= 1 && Number(we.y) >= 0 && Number(we.y) <= 1) {
          const A = W(be);
          if (A != null && A.visible) return { item: be, geom: A };
        }
      }
      return null;
    }
    const L = [
      ...c(!1).slice().sort((V, fe) => Number((fe == null ? void 0 : fe.z_index) || 0) - Number((V == null ? void 0 : V.z_index) || 0)).map((V) => {
        var fe;
        return V.type === "strokeGroup" ? f(ee("paint", V.actionGroupId || V.id || "")) : V.type === "rasterObject" ? u(x(((fe = V.item) == null ? void 0 : fe.id) || V.id || "")) : V.item;
      }).filter(Boolean),
      ...n ? s().filter((V) => B(V)) : []
    ];
    for (const V of L) {
      if (G(V)) {
        const Se = W(V);
        if (!(Se != null && Se.visible)) continue;
        const Q = Array.isArray(Se.strokePaths) ? Se.strokePaths : [];
        for (const E of Q) {
          const X = Array.isArray(E == null ? void 0 : E.points) ? E.points : [];
          if (!X.length) continue;
          if (E.closed && X.length >= 3 && Br(k, X)) return { item: V, geom: Se };
          const ae = Math.max(8, Number((E == null ? void 0 : E.lineWidth) || 0) * 0.5 + 6);
          for (let be = 0; be < X.length - 1; be += 1)
            if (mc(k, X[be], X[be + 1]) <= ae * ae) return { item: V, geom: Se };
          if (X.length === 1 && Ro(k, X[0]) <= ae * ae) return { item: V, geom: Se };
        }
        continue;
      }
      if (O(V)) {
        const Se = W(V);
        if (!(Se != null && Se.visible)) continue;
        if (g(V, Se, k)) return { item: V, geom: Se };
        continue;
      }
      const fe = W(V);
      if (fe.visible && Br(k, fe.corners))
        return { item: V, geom: fe };
    }
    return null;
  }
  function te(k, L, Z = null) {
    if (!k || !k.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (z(Z)) return Jc(k, L);
    if (k.kind === "strokeGroup") {
      const V = k.corners.findIndex((Se) => Ro(Se, L) <= 121);
      if (V >= 0) {
        const Se = k.corners[V], Q = Se.x - k.center.x, E = Se.y - k.center.y, X = Q * E >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: V, cursor: X };
      }
      const fe = Array.isArray(k.strokePaths) ? k.strokePaths : [];
      for (const Se of fe) {
        const Q = Array.isArray(Se == null ? void 0 : Se.points) ? Se.points : [];
        if (Se.closed && Q.length >= 3 && Br(L, Q)) return { kind: "move", cursor: "default" };
        const E = Math.max(8, Number((Se == null ? void 0 : Se.lineWidth) || 0) * 0.5 + 6);
        for (let X = 0; X < Q.length - 1; X += 1)
          if (mc(L, Q[X], Q[X + 1]) <= E * E) return { kind: "move", cursor: "default" };
      }
      return Br(L, k.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (k.kind === "rasterObject") {
      const V = k.corners.findIndex((fe) => Ro(fe, L) <= 121);
      if (V >= 0) {
        const fe = k.corners[V], Se = fe.x - k.center.x, Q = fe.y - k.center.y, E = Se * Q >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: V, cursor: E };
      }
      return Br(L, k.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return kS(k, L, {
      edges: i === "cutout" || B(Z),
      resize: !(B(Z) && m()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function J(k, L) {
    return {
      x0: Math.min(Number((k == null ? void 0 : k.x) || 0), Number((L == null ? void 0 : L.x) || 0)),
      y0: Math.min(Number((k == null ? void 0 : k.y) || 0), Number((L == null ? void 0 : L.y) || 0)),
      x1: Math.max(Number((k == null ? void 0 : k.x) || 0), Number((L == null ? void 0 : L.x) || 0)),
      y1: Math.max(Number((k == null ? void 0 : k.y) || 0), Number((L == null ? void 0 : L.y) || 0))
    };
  }
  function U(k, L) {
    return !!k && !!L && Number(L.x) >= Number(k.x0) && Number(L.x) <= Number(k.x1) && Number(L.y) >= Number(k.y0) && Number(L.y) <= Number(k.y1);
  }
  function le(k, L) {
    if (!k || !(L != null && L.visible) || !Array.isArray(L.corners)) return !1;
    if (L.corners.some((fe) => U(k, fe))) return !0;
    const Z = (Number(k.x0) + Number(k.x1)) * 0.5, V = (Number(k.y0) + Number(k.y1)) * 0.5;
    return !!Br({ x: Z, y: V }, L.corners);
  }
  function ie(k) {
    if (pe(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? F("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? F("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? F("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? F("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? F("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? F(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? F("grabbing") : F("default");
      return;
    }
    if (_()) {
      F("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        F(xP);
        return;
      }
      if (t.primaryTool !== "cursor") {
        F("default");
        return;
      }
      F("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      F("default");
      return;
    }
    if (t.gizmoAxis) {
      F("grab");
      return;
    }
    const L = d(), Z = L ? W(L) : null, V = L ? p(L) : !1, fe = V ? { kind: "none", cursor: "default" } : te(Z, k, L);
    if (!V && fe.kind !== "none") {
      F(fe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && Y(k)) {
      F("default");
      return;
    }
    F(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(k) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: a,
        getCutoutSelectableItemsForHit: s,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: u,
        getSelected: d,
        getStrokeGroupItem: f,
        hitRasterObjectAt: g,
        isActivePaintCursorVisible: _,
        isErpCamera: m,
        isItemLocked: p,
        isRasterObjectItem: O,
        isShotItem: B,
        isStickerItem: z,
        isStrokeGroupItem: G,
        makeRasterObjectSelectionId: x,
        makeStrokeGroupSelectionId: ee,
        objectGeom: W,
        screenPosToFrameAsErpPoint: ce,
        setCanvasCursor: F,
        syncPaintCursorElement: pe,
        worldDirToFrameLocalPoint: C
      } = k);
    },
    hitObjectAt: Y,
    handleHit: te,
    rectFromPoints: J,
    rectIntersectsGeom: le,
    updateCursor: ie
  };
}
function s2(e) {
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
    tooltipEl: u,
    type: d,
    uiState: f
  } = e;
  let g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J = !1;
  function U() {
    return J;
  }
  function le() {
    if (!o) return;
    if (J = !1, n.mode === "frame") {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || x() && ce()) {
      const E = ie();
      J = E.visible, k(E);
      return;
    }
    const V = B(), fe = z();
    if (!V && fe.length === 0 || n.interaction) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Se = G(), Q = WN({
      type: d,
      selected: V,
      selectedItems: fe,
      selectedKind: Se,
      geom: fe.length > 1 ? O(fe) : te(V),
      allLocked: g(fe),
      anyLocked: fe.some((E) => F(E)),
      selectedLocked: F(V),
      activeAspect: pe(V) && ee() ? oo : Fr(V),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: W,
      isStickerHidden: Y,
      canRestoreSelectedToInitial: _,
      iconSet: Ge,
      cameraShot: t,
      cameraDeletable: l,
      erpChoice: l,
      coverage: s.coverage
    });
    k(Q);
  }
  function ie() {
    const V = C() && !n.interaction ? p().space : null;
    if (!(V != null && V.gizmo)) return { visible: !1 };
    const fe = m(), Se = V.stickers.find((ae) => ae.id === n.worldSelectedId), E = (Se ? nd(Se) : [V.gizmo.transform.position]).map((ae) => sa(fe, ae, r.width, r.height)).filter(Boolean), X = q1(fe, V.gizmo.transform.position, V.gizmo.mode, r.width, r.height);
    return KN({ corners: E, gizmoBox: X, gizmoMode: V.gizmo.mode, camera: x(), deletable: l && x() });
  }
  function k(V) {
    var X, ae;
    if (!V.visible) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const fe = (be, we) => BN(V.anchor, be, we, r.width, r.height), Se = Math.max(1, Number(((X = n.menuSize) == null ? void 0 : X.w) || 220)), Q = Math.max(1, Number(((ae = n.menuSize) == null ? void 0 : ae.h) || 40)), E = fe(Se, Q);
    if (!E) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    f.selectionMenu = {
      visible: !0,
      left: E.left,
      top: E.top,
      items: V.items
    }, i.requestFrame(() => {
      if (!o || f.selectionMenu.visible !== !0) return;
      const be = o.getBoundingClientRect(), we = Math.round(Number((be == null ? void 0 : be.width) || 0)) || 220, A = Math.round(Number((be == null ? void 0 : be.height) || 0)) || 40;
      n.menuSize = { w: we, h: A, measured: !0 };
      const oe = fe(we, A);
      oe && (f.selectionMenu.left = oe.left, f.selectionMenu.top = oe.top);
    });
  }
  function L() {
    c.timer && (clearTimeout(c.timer), c.timer = 0), c.target = null, f.tooltip.visible = !1;
  }
  function Z(V) {
    if (!u || !V || !V.isConnected) return;
    const fe = String(V.getAttribute("data-tip") || "").trim();
    if (!fe) return;
    f.tooltip.text = fe, f.tooltip.visible = !0;
    const Se = V;
    i.requestFrame(() => {
      var v, w;
      if (c.target !== Se || !u || !(Se != null && Se.isConnected)) return;
      const Q = a.getBoundingClientRect(), E = Se.getBoundingClientRect(), X = 8, ae = 12, be = Math.round(Number(((v = u.getBoundingClientRect()) == null ? void 0 : v.width) || 0)) || 100, we = Math.round(Number(((w = u.getBoundingClientRect()) == null ? void 0 : w.height) || 0)) || 24, A = !!Se.closest(".pano-floating-left"), oe = !!Se.closest(".pano-frame-rail"), b = !!Se.closest(".pano-paint-footer") || !!Se.closest(".pano-paint-color-float");
      let S = "", $ = E.left - Q.left + E.width * 0.5 - be * 0.5, H = E.top - Q.top - we - ae;
      if (Se.closest(".pano-floating-top") && (H = E.bottom - Q.top + ae), A)
        S = "tool-rail", $ = E.right - Q.left + 10, H = E.top - Q.top + E.height * 0.5 - we * 0.5, $ = Ee($, X, Math.max(X, Q.width - be - X)), H = Ee(H, X, Math.max(X, Q.height - we - X));
      else if (oe)
        S = "frame-rail", $ = E.left - Q.left - be - 10, H = E.top - Q.top + E.height * 0.5 - we * 0.5, $ = Ee($, X, Math.max(X, Q.width - be - X)), H = Ee(H, X, Math.max(X, Q.height - we - X));
      else if (b) {
        S = "footer";
        const D = Se.closest(".pano-paint-footer"), M = D ? D.getBoundingClientRect() : E;
        $ = M.left - Q.left + M.width * 0.5 - be * 0.5, H = M.bottom - Q.top + 5, $ = Ee($, X, Math.max(X, Q.width - be - X)), H = Math.max(X, H);
      }
      $ = Ee($, X, Math.max(X, Q.width - be - X)), H = Math.max(X, H), f.tooltip.left = $, f.tooltip.top = H, f.tooltip.variant = S, f.tooltip.visible = !0;
    });
  }
  return {
    connect(V) {
      ({
        areAllSelectedItemsLocked: g,
        canRestoreSelectedToInitial: _,
        currentSpaceCamera: m,
        editorViewInput: p,
        getMultiSelectionGeom: O,
        getSelected: B,
        getSelectedItems: z,
        getSelectedKind: G,
        isCameraSelected: x,
        isErpCamera: ee,
        isExternalSticker: W,
        isFreeSpaceView: ce,
        isItemLocked: F,
        isShotItem: pe,
        isSpaceView: C,
        isStickerHidden: Y,
        objectGeom: te
      } = V);
    },
    isWorldMenuShown: U,
    updateSelectionMenu: le,
    hideTooltip: L,
    showTooltipFor: Z
  };
}
function l2(e) {
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
    shotEditor: u,
    state: d,
    stateV2: f,
    timeline: g,
    type: _,
    viewController: m
  } = e;
  let p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X, ae, be, we, A, oe, b, S, $, H, v, w, D, M, P, I, K, re, me, j, de, _e, ke, ue, ve, Ne, h, R, N, y, T, se, ge, he, ne, ye, Me, Ae, Le, Re, He, ze, q, Ce, Ve, Ie, je, We, Ye, at, kt, Ft, bt, Dt, tn, Ue, Ht, bn, _r, Hr, on, kn, Gr, Sr, Xn, va, ho, _a, mo, go, Sa, wa, yo, Et, Mn, ar, bo, Tn, xa, ka, Ma, Wr = null;
  function Cl(Oe) {
    g.selection && (g.selection = null, wa());
    const Fe = je(Oe);
    Wr = Fe, Dt(Fe, !0), te(), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0;
    const xe = Ne(), yt = ve(), ct = xe || yt ? VS(bo(), Oe) : null;
    if (yt && ct) {
      Oe.preventDefault(), ct === "look" ? Gr(Fe, Oe.pointerId) : kn(ct, Fe, Oe.pointerId);
      return;
    }
    if (ct === "look") {
      Oe.preventDefault();
      const qe = We(Oe);
      n.interaction = { kind: "view", last: qe, lastTs: performance.now() }, m.startDrag(qe.x, qe.y, Oe.pointerId, performance.now()), Et(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (ct) {
      Oe.preventDefault(), Sr(ct, Fe, Oe.pointerId);
      return;
    }
    if ((xe || yt) && Oe.button !== 0) {
      Oe.preventDefault();
      return;
    }
    if (Oe.button === 1) {
      if (Oe.preventDefault(), n.mode === "frame") {
        const qe = ae();
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
      const qe = ae(), Ke = b(qe);
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
      Gr(Fe, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && _o(Oe, Fe);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (va() || ho())) {
      if (!Ae()) return;
      Xn();
      const qe = n.primaryTool === "mask" ? "mask" : "paint", Ke = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Je = n.mode === "frame" && ho() ? ae() : null, Zt = { kind: "ERP_GLOBAL" }, Mt = Je ? at(Fe, Je, performance.now()) : Ye(Fe, performance.now());
      if (!Mt) {
        Et(Fe);
        return;
      }
      n.interaction = {
        kind: Ke === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: qe,
        _livePreviewToken: Gi("live"),
        stroke: Ke === "lasso_fill" ? pe(qe, Ke, [Mt], Zt) : F(qe, Ke, [Mt], Zt)
      }, ke();
      const xr = be(n.interaction);
      if (xr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, xr), n.interaction.kind === "paint_stroke") {
          const Ni = n.paintEngine.ensureTarget(xr), Ci = Number((Mt == null ? void 0 : Mt.u) ?? (Mt == null ? void 0 : Mt.x) ?? 0), Ai = Number((Mt == null ? void 0 : Mt.v) ?? (Mt == null ? void 0 : Mt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ni, Ci, Ai, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, xr);
      Et(Fe), t.setPointerCapture(Oe.pointerId), Ie();
      return;
    }
    const vt = I(), Xe = P(), Qe = vt.length > 1 ? $(vt) : Xe ? Me(Xe) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Fe, current: Fe }, Et(Fe), t.setPointerCapture(Oe.pointerId), Ie({ localOnly: !0, reason: dt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && C() && Ne() && on(Oe, Fe) || n.primaryTool === "cursor" && c && T() && Pa(Oe, Fe)) return;
    if (vt.length > 1 && (Qe != null && Qe.visible)) {
      if ((vt.some((Ke) => h(Ke)) ? { kind: "none" } : j(Qe, Fe)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: vt.map((Ke) => Ke),
          offset: { x: Fe.x - Qe.center.x, y: Fe.y - Qe.center.y },
          startCenter: { x: Qe.center.x, y: Qe.center.y },
          stickerSnapshots: vt.filter((Ke) => se(Ke)).map((Ke) => ({
            id: String(Ke.id || ""),
            yaw_deg: Number(He(Ke).yaw_deg || 0),
            pitch_deg: Number(He(Ke).pitch_deg || 0),
            center: (() => {
              var Zt, Mt;
              const Je = Me(Ke);
              return Je != null && Je.visible ? { x: Number(((Zt = Je.center) == null ? void 0 : Zt.x) || 0), y: Number(((Mt = Je.center) == null ? void 0 : Mt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })()
          })),
          strokeSnapshots: vt.filter((Ke) => ge(Ke)).map((Ke) => ({
            id: String(Ke.actionGroupId || Ke.id || ""),
            layerKind: String(Ke.layerKind || "paint"),
            snapshot: dn(re(Ke.actionGroupId, Ke.layerKind)),
            frameSnapshot: dn(fe(Ke.actionGroupId, Ke.layerKind)),
            center: (() => {
              var Zt, Mt;
              const Je = Me(Ke);
              return Je != null && Je.visible ? { x: Number(((Zt = Je.center) == null ? void 0 : Zt.x) || 0), y: Number(((Mt = Je.center) == null ? void 0 : Mt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })(),
            centerUv: K(Ke.actionGroupId, Ke.layerKind)
          })),
          rasterSnapshots: vt.filter((Ke) => R(Ke)).map((Ke) => ({
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
          frameSnapshot: dn(fe(Xe.actionGroupId, Xe.layerKind)),
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
          frameSnapshot: dn(fe(Xe.actionGroupId, Xe.layerKind))
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
            const Je = ae();
            return Je ? at(Fe, Je, performance.now()) : null;
          })() : Ye(Fe, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Xe,
            startUv: Ke,
            snapshot: dn(re(Xe.actionGroupId, Xe.layerKind)),
            frameSnapshot: dn(fe(Xe.actionGroupId, Xe.layerKind))
          }, Et(Fe), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if (R(Xe)) {
          const Ke = n.mode === "frame" ? (() => {
            const Je = ae();
            return Je ? at(Fe, Je, performance.now()) : null;
          })() : Ye(Fe, performance.now());
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
    const rt = _e(Fe);
    if (rt) {
      const qe = n.selectedId !== rt.item.id;
      if (qe && n.selectedId && (ze(), ie()), tn(rt.item), u && qe && (n.cutoutAspectOpen = !1), qe && ar(), Mn(), Ie(), h(rt.item)) {
        Et(Fe);
        return;
      }
      n.interaction = {
        kind: ge(rt.item) ? "move_stroke_group" : R(rt.item) ? "move_raster_object" : "move",
        item: rt.item,
        offset: { x: Fe.x - rt.geom.center.x, y: Fe.y - rt.geom.center.y },
        startUv: ge(rt.item) || R(rt.item) ? n.mode === "frame" ? (() => {
          const Ke = ae();
          return Ke ? at(Fe, Ke, performance.now()) : null;
        })() : Ye(Fe, performance.now()) : null,
        snapshot: ge(rt.item) ? dn(re(rt.item.actionGroupId, rt.item.layerKind)) : R(rt.item) ? dn(w().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "") === Le(rt.item.rasterObjectId || rt.item.id || ""))) : null,
        frameSnapshot: ge(rt.item) ? dn(fe(rt.item.actionGroupId, rt.item.layerKind)) : null
      }, Et(Fe), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const Dn = !!n.selectedId;
    Dn && (ze(), ie()), J(), Dn && ar(), Mn(), Ie(), n.mode === "pano" && _o(Oe, Fe);
  }
  function wr(Oe, Fe) {
    return i.gizmoPointer(Oe, k(), Fe.x, Fe.y, t.width, t.height);
  }
  function Pa(Oe, Fe) {
    var Qe;
    const xe = (Qe = V().space) == null ? void 0 : Qe.gizmo;
    if (xe && wr("hover", Fe) !== null && wr("down", Fe))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: xe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: xe.transform,
        base: wi(bt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), Et(Fe), !0;
    const yt = I(), ct = P(), vt = yt.length > 1 ? yt.some((rt) => h(rt)) ? "none" : j($(yt), Fe).kind : ct && !h(ct) ? j(Me(ct), Fe, ct).kind : "none";
    if (vt !== "none" && vt !== "move") return !1;
    const Xe = i.pickSticker(k(), Fe.x, Fe.y, t.width, t.height);
    return d.stickers.some((rt) => rt.id === Xe && rt.placement === "world") ? (n.worldSelectedId !== Xe && (n.selectedId && (ze(), ie()), Ft(Xe), ar(), Mn(), mo(), Ie()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function Na(Oe) {
    var yt;
    const xe = !!(n.worldSelectedId || ue()) && n.primaryTool === "cursor" && T() && !!((yt = V().space) != null && yt.gizmo) ? wr("hover", Oe) : null;
    xe !== n.gizmoAxis && (n.gizmoAxis = xe, l.backgroundDirty = !0, Ie({ localOnly: !0, reason: dt.VIEW }));
  }
  function Ca(Oe, Fe) {
    const xe = wr("move", Fe);
    if (xe && Oe.camera) {
      for (const [ct, vt] of Object.entries(wf(Oe.mode, Oe.base, Oe.start, xe))) mn(d.camera, ct, n.frame, vt);
      _a(), Oe.changed = !0, r.request("sidePanel"), Ie({ localOnly: !0 });
      return;
    }
    const yt = d.stickers.find((ct) => ct.id === Oe.id);
    !xe || !yt || (S1(yt, n.frame, wf(Oe.mode, Oe.base, Oe.start, xe)), Oe.changed = !0, he(), r.request("sidePanel"), Ie({ localOnly: !0 }));
  }
  function vo(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (wr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && (ze(), U(), ar())), Et(n.pointerPos), Ie();
  }
  function _o(Oe, Fe) {
    if (Ne()) {
      const yt = bo().emptyLeft;
      yt && Sr(yt, Fe, Oe.pointerId);
      return;
    }
    const xe = We(Oe);
    n.interaction = { kind: "view", last: xe, lastTs: performance.now() }, m.startDrag(xe.x, xe.y, Oe.pointerId, performance.now()), Et(Fe), t.setPointerCapture(Oe.pointerId);
  }
  function Aa(Oe, Fe) {
    if (!f || !Re.playing || (Re.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const ct = Se();
      ct && (Oe.pivot = X(ct, E(ct), Fe));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const ct = d.stickers.find((vt) => vt.id === Oe.id);
      Oe.camera ? Oe.base = L() : ct && (Oe.base = wi(ct, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const ct = $(Oe.items);
      if (!(ct != null && ct.visible)) return;
      Oe.offset = { x: Fe.x - ct.center.x, y: Fe.y - ct.center.y }, Oe.startCenter = { x: ct.center.x, y: ct.center.y };
      for (const vt of Oe.stickerSnapshots) {
        const Xe = Oe.items.find((rt) => String((rt == null ? void 0 : rt.id) || "") === vt.id), Qe = Xe ? Me(Xe) : null;
        Qe != null && Qe.visible && (vt.yaw_deg = Number(He(Xe).yaw_deg || 0), vt.pitch_deg = Number(He(Xe).pitch_deg || 0), vt.center = { x: Qe.center.x, y: Qe.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Oe.kind)) return;
    const xe = Me(Oe.item);
    if (!(xe != null && xe.visible)) return;
    const yt = He(Oe.item);
    if (Oe.kind === "move") {
      Oe.offset = { x: Fe.x - xe.center.x, y: Fe.y - xe.center.y };
      return;
    }
    if (Oe.center = xe.center, Oe.kind === "rotate") {
      Oe.startRot = Number(yt.rot_deg || yt.roll_deg || 0), Oe.startAng = Math.atan2(Fe.y - xe.center.y, Fe.x - xe.center.x);
      return;
    }
    Oe.startDist = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)), Oe.startHFOV = Number(yt.hFOV_deg || 20), Oe.startVFOV = Number(yt.vFOV_deg || 20);
  }
  function Ia(Oe) {
    var yt, ct, vt, Xe, Qe, rt, Dn, qe, Ke, Je, Zt, Mt, xr, Ni, Ci, Ai, Fa, Ta, So, Da, La, Ra;
    const Fe = je(Oe);
    if (Dt(Fe, !0), !n.interaction) {
      Na(Fe), Et(Fe);
      return;
    }
    Et(Fe);
    const xe = n.interaction;
    if (Wr && (Fe.x !== Wr.x || Fe.y !== Wr.y)) {
      const st = Wr;
      Wr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(xe.kind) || Aa(xe, st);
    }
    if (xe.kind !== "world_select") {
      if (xe.kind === "world_gizmo") {
        Ca(xe, Fe);
        return;
      }
      if (xe.kind === "paint_stroke") {
        const st = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let ft = !1;
        st.forEach((mt) => {
          const gt = je(mt);
          if (n.mode === "frame") {
            const sn = ae(), Kt = sn ? b(sn) : null;
            if (Kt) {
              const vn = (gt.x - Kt.x) / Math.max(1, Kt.w), _t = (gt.y - Kt.y) / Math.max(1, Kt.h);
              if (!(vn >= 0 && vn <= 1 && _t >= 0 && _t <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, O(xe));
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
            const sn = ae(), Kt = sn ? b(sn) : null;
            if (Kt) {
              const vn = (gt.x - Kt.x) / Math.max(1, Kt.w), _t = (gt.y - Kt.y) / Math.max(1, Kt.h);
              if (!(vn >= 0 && vn <= 1 && _t >= 0 && _t <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, p(xe));
            }
          }
          B(xe, gt, performance.now()) && (ft = !0);
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
        const st = _r();
        Ht(xe.kind === "space_pan" ? fm(st, Fe.x - xe.last.x, Fe.y - xe.last.y, t.width, t.height, xe.depth) : dm(st, Fe.x - xe.last.x, Fe.y - xe.last.y, t.height, xe.pivot)), xe.last = Fe;
        return;
      }
      if (xe.kind === "pan_frame") {
        const st = oe(xe.shot);
        if (!st || !xe.shot) return;
        const ft = Fe.x - xe.last.x, mt = Fe.y - xe.last.y, gt = og(xe.shot, {
          dx: ft,
          dy: mt,
          focalPx: st.focalPx,
          invertX: ((yt = d.ui_settings) == null ? void 0 : yt.invert_view_x) === !0,
          invertY: ((ct = d.ui_settings) == null ? void 0 : ct.invert_view_y) === !0
        });
        xe.shot.yaw_deg = gt.yaw_deg, xe.shot.pitch_deg = gt.pitch_deg, xe.changed = xe.changed || Math.abs(ft) > 0 || Math.abs(mt) > 0, xe.last = Fe, Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "roll_frame") {
        if (xe.source === "knob") return;
        ee(xe, Fe, Oe);
        return;
      }
      if (xe.kind === "move") {
        const st = Fe.x - xe.offset.x, ft = Fe.y - xe.offset.y;
        if (n.mode === "frame" && u) {
          const mt = ae(), gt = b(mt);
          if (!mt || !gt) return;
          const sn = {
            x: Ee((st - gt.x) / Math.max(1, gt.w), 0, 1),
            y: Ee((ft - gt.y) / Math.max(1, gt.h), 0, 1)
          }, Kt = Q(mt, sn);
          if (!Kt) return;
          const vn = Za(Kt);
          Tn(xe.item, { yaw_deg: vn.yaw, pitch_deg: vn.pitch });
        } else if (n.mode === "unwrap") {
          const mt = me(), gt = Ee((st - mt.x) / Math.max(mt.w, 1), 0, 1), sn = Ee((ft - mt.y) / Math.max(mt.h, 1), 0, 1);
          Tn(xe.item, { yaw_deg: jt(gt * 360 - 180), pitch_deg: Ee(90 - sn * 180, -90, 90) });
        } else {
          const mt = kt(st, ft), gt = Za(mt);
          Tn(xe.item, { yaw_deg: gt.yaw, pitch_deg: gt.pitch });
        }
        se(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "move_stroke_group") {
        const st = n.mode === "frame" ? (() => {
          const gt = ae();
          return gt ? at(Fe, gt, performance.now()) : null;
        })() : Ye(Fe, performance.now());
        if (!st || !xe.startUv) return;
        const ft = bn(Number(st.u || 0), Number(xe.startUv.u || 0)), mt = Number(st.v || 0) - Number(xe.startUv.v || 0);
        W((vt = xe.item) == null ? void 0 : vt.actionGroupId, ft, mt, xe.snapshot, (Xe = xe.item) == null ? void 0 : Xe.layerKind, xe.frameSnapshot) && (ye({ rebuildPaintEngine: !1 }), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_raster_object") {
        const st = n.mode === "frame" ? (() => {
          const gt = ae();
          return gt ? at(Fe, gt, performance.now()) : null;
        })() : Ye(Fe, performance.now());
        if (!st || !xe.startUv) return;
        const ft = bn(Number(st.u || 0), Number(xe.startUv.u || 0)), mt = Number(st.v || 0) - Number(xe.startUv.v || 0);
        G(((Qe = xe.item) == null ? void 0 : Qe.rasterObjectId) || ((rt = xe.item) == null ? void 0 : rt.id) || "", ft, mt, xe.snapshot) && (ne(), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "scale_raster_object") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        x(((Dn = xe.item) == null ? void 0 : Dn.rasterObjectId) || ((qe = xe.item) == null ? void 0 : qe.id) || "", ft, xe.snapshot) && (ne(), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_multi") {
        const st = Fe.x - Number(((Ke = xe.offset) == null ? void 0 : Ke.x) || 0), ft = Fe.y - Number(((Je = xe.offset) == null ? void 0 : Je.y) || 0);
        let mt = !1, gt = !1, sn = !1;
        const Kt = st - Number(((Zt = xe.startCenter) == null ? void 0 : Zt.x) || st), vn = ft - Number(((Mt = xe.startCenter) == null ? void 0 : Mt.y) || ft);
        for (const _t of Array.isArray(xe.stickerSnapshots) ? xe.stickerSnapshots : []) {
          const an = (_ === "cutout" ? we() : S()).find((Rt) => String((Rt == null ? void 0 : Rt.id) || "") === String(_t.id || ""));
          if (!an || !se(an)) continue;
          const Lt = {
            x: Number(((xr = _t.center) == null ? void 0 : xr.x) || 0) + Kt,
            y: Number(((Ni = _t.center) == null ? void 0 : Ni.y) || 0) + vn
          };
          if (n.mode === "frame" && u) {
            const Rt = ae(), Gt = b(Rt);
            if (!Rt || !Gt) continue;
            const $e = {
              x: Ee((Lt.x - Gt.x) / Math.max(1, Gt.w), 0, 1),
              y: Ee((Lt.y - Gt.y) / Math.max(1, Gt.h), 0, 1)
            }, et = Q(Rt, $e);
            if (!et) continue;
            const Pn = Za(et);
            Tn(an, { yaw_deg: Pn.yaw, pitch_deg: Pn.pitch });
          } else if (n.mode === "unwrap") {
            const Rt = me(), Gt = Ee((Lt.x - Rt.x) / Math.max(Rt.w, 1), 0, 1), $e = Ee((Lt.y - Rt.y) / Math.max(Rt.h, 1), 0, 1);
            Tn(an, { yaw_deg: jt(Gt * 360 - 180), pitch_deg: Ee(90 - $e * 180, -90, 90) });
          } else {
            const Rt = kt(Lt.x, Lt.y), Gt = Za(Rt);
            Tn(an, { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch });
          }
          mt = !0;
        }
        for (const _t of Array.isArray(xe.strokeSnapshots) ? xe.strokeSnapshots : []) {
          const an = {
            x: Number(((Ci = _t.center) == null ? void 0 : Ci.x) || 0) + Kt,
            y: Number(((Ai = _t.center) == null ? void 0 : Ai.y) || 0) + vn
          }, Lt = n.mode === "frame" ? (() => {
            const Gt = ae();
            return Gt ? at(an, Gt, performance.now()) : null;
          })() : Ye(an, performance.now()), Rt = _t.centerUv || null;
          if (Lt && Rt) {
            const Gt = bn(Number(Lt.u || 0), Number(Rt.u || 0)), $e = Number(Lt.v || 0) - Number(Rt.v || 0);
            W(_t.id, Gt, $e, _t.snapshot, _t.layerKind, _t.frameSnapshot) && (mt = !0, gt = !0);
          }
        }
        for (const _t of Array.isArray(xe.rasterSnapshots) ? xe.rasterSnapshots : []) {
          const an = {
            x: Number(((Fa = _t.center) == null ? void 0 : Fa.x) || 0) + Kt,
            y: Number(((Ta = _t.center) == null ? void 0 : Ta.y) || 0) + vn
          }, Lt = n.mode === "frame" ? (() => {
            const Gt = ae();
            return Gt ? at(an, Gt, performance.now()) : null;
          })() : Ye(an, performance.now()), Rt = _t.centerUv || null;
          if (Lt && Rt) {
            const Gt = bn(Number(Lt.u || 0), Number(Rt.u || 0)), $e = Number(Lt.v || 0) - Number(Rt.v || 0);
            G(_t.id, Gt, $e, _t.snapshot) && (mt = !0, sn = !0);
          }
        }
        mt && (gt ? ye({ rebuildPaintEngine: !1 }) : sn ? ne() : he(), Ie({ localOnly: !0 }));
        return;
      }
      if (xe.kind === "scale_stroke_group") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        ce((So = xe.item) == null ? void 0 : So.actionGroupId, ft, 0, xe.snapshot, (Da = xe.item) == null ? void 0 : Da.layerKind, xe.frameSnapshot) && (ye({ rebuildPaintEngine: !1 }), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "rotate_stroke_group") {
        let st = (Math.atan2(Fe.y - xe.center.y, Fe.x - xe.center.x) - Number(xe.startAng || 0)) * xi;
        Oe.shiftKey && (st = Math.round(st / 45) * 45), ce((La = xe.item) == null ? void 0 : La.actionGroupId, 1, st, xe.snapshot, (Ra = xe.item) == null ? void 0 : Ra.layerKind, xe.frameSnapshot) && (ye({ rebuildPaintEngine: !1 }), Ie({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "marquee_select") {
        xe.current = Fe, Ie({ localOnly: !0, reason: dt.OVERLAY });
        return;
      }
      if (xe.kind === "scale") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / xe.startDist;
        Tn(xe.item, { hFOV_deg: Ee(xe.startHFOV * ft, 1, 179), vFOV_deg: Ee(xe.startVFOV * ft, 1, 179) }), N(xe.item) || (xe.item.aspect_id = yi(xe.item)), se(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_x") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / xe.startDist;
        Tn(xe.item, { hFOV_deg: Ee(xe.startHFOV * ft, 1, 179) }), N(xe.item) || (xe.item.aspect_id = yi(xe.item)), se(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_y") {
        const ft = Math.max(1, Math.hypot(Fe.x - xe.center.x, Fe.y - xe.center.y)) / xe.startDist;
        Tn(xe.item, { vFOV_deg: Ee(xe.startVFOV * ft, 1, 179) }), N(xe.item) || (xe.item.aspect_id = yi(xe.item)), se(xe.item) && he(), Ie({ localOnly: !0 });
        return;
      }
      if (xe.kind === "rotate") {
        let ft = (Math.atan2(Fe.y - xe.center.y, Fe.x - xe.center.x) - xe.startAng) * xi, mt = xe.startRot - ft;
        Oe.shiftKey && (mt = Math.round(mt / 45) * 45), Tn(xe.item, { [se(xe.item) ? "rot_deg" : "roll_deg"]: mt }), se(xe.item) && he(), Ie({ localOnly: !0 });
      }
    }
  }
  function Ea() {
    var Fe, xe, yt, ct, vt, Xe, Qe;
    const Oe = n.interaction;
    if (!((Oe == null ? void 0 : Oe.kind) === "roll_frame" && Oe.source === "knob")) {
      if ((Oe == null ? void 0 : Oe.kind) === "space_pan" || (Oe == null ? void 0 : Oe.kind) === "space_orbit") {
        n.interaction = null, Et(n.pointerPos), Mn();
        return;
      }
      if ((Oe == null ? void 0 : Oe.kind) === "world_select" || (Oe == null ? void 0 : Oe.kind) === "world_gizmo") {
        vo(Oe);
        return;
      }
      if (((Fe = n.interaction) == null ? void 0 : Fe.kind) === "paint_stroke" || ((xe = n.interaction) == null ? void 0 : xe.kind) === "paint_lasso_fill") {
        ke();
        const rt = le(n.interaction), Dn = !!n.interaction._hasCommittedSegments;
        if (rt || Dn) {
          ye();
          const qe = String(((yt = n.interaction.stroke) == null ? void 0 : yt.actionGroupId) || "").trim();
          if (qe) {
            const Je = H().find((Zt) => String((Zt == null ? void 0 : Zt.actionGroupId) || "") === qe);
            Je && (Je.frame = null);
          }
          const Ke = be(n.interaction);
          Ke && (rt ? String(((ct = n.interaction.stroke) == null ? void 0 : ct.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ke), Ve()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ke) : n.paintEngine.cancelActiveStroke(Ke)), ze(), ie(), ar(), Mn(), o.setDirtyCanvas(!0, !0), Ie();
        } else {
          const qe = be(n.interaction);
          qe && n.paintEngine.cancelActiveStroke(qe);
        }
      } else if (((vt = n.interaction) == null ? void 0 : vt.kind) === "marquee_select") {
        const rt = q(n.interaction.start, n.interaction.current), qe = [
          ..._ === "cutout" ? A().filter((Ke) => !y(Ke)) : [...S()],
          ...M(),
          ...D()
        ].filter((Ke) => Ce(rt, Me(Ke)));
        Ue(qe, ((Xe = qe[qe.length - 1]) == null ? void 0 : Xe.id) || null), u && qe.length && (n.cutoutAspectOpen = !1), ar(), Mn(), Ie();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Qe = n.interaction) == null ? void 0 : Qe.kind))
        n.interaction.changed && (ze(), U(), ar());
      else if (n.interaction && n.interaction.kind !== "view") {
        let rt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (rt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (rt = !0), rt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? ye({ rebuildPaintEngine: !0 }) : ne()), ze(), ie(), o.setDirtyCanvas(!0, !0), Sa(), Mn(), Ie();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && de(), ke(), Oe && Oe.kind === "view" && Hr(() => m.endDrag(performance.now())), yo(), Mn(), Et(n.pointerPos), Ie();
    }
  }
  function Al() {
    var Oe, Fe, xe, yt, ct;
    if (!Y()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Fe = n.interaction) == null ? void 0 : Fe.kind) === "world_gizmo") {
        vo(n.interaction);
        return;
      }
      if (((xe = n.interaction) == null ? void 0 : xe.kind) === "view" && Hr(() => m.endDrag(performance.now())), ((yt = n.interaction) == null ? void 0 : yt.kind) === "paint_stroke" || ((ct = n.interaction) == null ? void 0 : ct.kind) === "paint_lasso_fill") {
        ke();
        const vt = be(n.interaction);
        vt && n.paintEngine.cancelActiveStroke(vt);
      }
      n.interaction = null, ke(), yo(), Et(n.pointerPos), Ie({ localOnly: !0 });
    }
  }
  function Il(Oe) {
    const Fe = je(Oe), xe = Dt(Fe, !0);
    n.interaction || (Et(Fe), xe && n.mode === "frame" && n.primaryTool === "cursor" && Ie({ localOnly: !0, reason: dt.OVERLAY }));
  }
  function Oa(Oe) {
    if (n.mode === "frame") {
      const Fe = je(Oe), xe = Es(Oe);
      xe && Xn(), xe && ve() ? xa(Fe, -xe) : xe && ka(Fe, xe) && Ie({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (te(), Ne()) {
        const Fe = Es(Oe);
        Fe && Ma(je(Oe), -Fe);
      } else m.applyWheelEvent(Oe) && Ie({ localOnly: !0, reason: dt.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: p,
        _segmentFrameStroke: O,
        appendLassoPoint: B,
        appendPaintPoint: z,
        applyRasterObjectOffset: G,
        applyRasterObjectTransform: x,
        applySharedRollInteractionPoint: ee,
        applyStrokeGroupOffset: W,
        applyStrokeGroupTransform: ce,
        buildFreehandStrokeRecord: F,
        buildLassoFillStrokeRecord: pe,
        cameraShoots: C,
        cancelFrameCameraGesture: Y,
        cancelViewTransition: te,
        clearSelection: J,
        commitAndRefreshNode: U,
        commitPaintInteraction: le,
        commitState: ie,
        currentSpaceCamera: k,
        cutoutCamera: L,
        dragFrame: Z,
        editorViewInput: V,
        ensureGroupFrame: fe,
        frameContext: Se,
        frameLocalPointToWorldDir: Q,
        frameSpaceView: E,
        frameTarget: X,
        getActiveCutoutShot: ae,
        getActivePaintTargetDescriptor: be,
        getCutoutSelectableItems: we,
        getCutoutSelectableItemsForHit: A,
        getFrameViewLayout: oe,
        getFrameViewRect: b,
        getList: S,
        getMultiSelectionGeom: $,
        getPaintingGroupList: H,
        getRasterObjectCenterUv: v,
        getRasterObjectList: w,
        getSelectableRasterObjectItems: D,
        getSelectableStrokeGroupItems: M,
        getSelected: P,
        getSelectedItems: I,
        getStrokeGroupCenterUv: K,
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
        isSpaceView: T,
        isStickerItem: se,
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
        screenPosToErpPoint: Ye,
        screenPosToFrameAsErpPoint: at,
        screenToWorldDir: kt,
        selectWorldSticker: Ft,
        selectedWorldSticker: bt,
        setPointerPos: Dt,
        setSelectedItem: tn,
        setSelectedItems: Ue,
        setSpaceView: Ht,
        shortestWrappedDelta: bn,
        spaceViewState: _r,
        startAnimation: Hr,
        startCameraPress: on,
        startFrameDrag: kn,
        startPanFrame: Gr,
        startSpaceDrag: Sr,
        stopTimelinePlayback: Xn,
        supportsErpPainting: va,
        supportsFramePainting: ho,
        syncCutoutShot: _a,
        syncFloatingViewButtonState: mo,
        syncFrameRollKnob: go,
        syncSidePanelControls: Sa,
        syncTimeline: wa,
        syncViewToggleState: yo,
        updateCursor: Et,
        updateSelectionMenu: Mn,
        updateSidePanel: ar,
        viewControls: bo,
        writePose: Tn,
        zoomFrameAt: xa,
        zoomFrameViewAt: ka,
        zoomSpaceAt: Ma
      } = Oe);
    },
    onCanvasPointerDown: Cl,
    worldGizmoPointer: wr,
    hoverWorldGizmo: Na,
    onCanvasPointerMove: Ia,
    onCanvasPointerUp: Ea,
    onCanvasPointerCancel: Al,
    onCanvasMouseMove: Il,
    onCanvasWheel: Oa
  };
}
function c2(e) {
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
    type: u,
    uiState: d
  } = e;
  let f, g, _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q;
  function E(we, A, oe = !1) {
    var D;
    ie();
    const b = s && n.mode === "frame" ? O() : null, S = b || G(), $ = b ? "shot" : ee(), H = U();
    if (H && !Se(H) || !H && (!S || $ === "stroke" || W(S))) return;
    const v = (((D = d.sidePanel) == null ? void 0 : D.params) || []).find((M) => M.key === we);
    if (!v || v.enabled === !1) return;
    let w = Number(A);
    if (Number.isNaN(w) && (w = 0), (H || t) && bP.has(we) ? w = we === "scale" ? Math.max(w, Og) : w : w = Ee(w, Number(v.min), Number(v.max)), we === "yaw_deg" && (w = jt(w)), !H && t && we.startsWith("position_")) {
      L(), y1(l.camera, n.frame, we, w), fe(), J(), oe && te();
      return;
    }
    if (H) {
      _1(H, n.frame, we, w), pe(), fe(), J(), oe && te();
      return;
    }
    we === "opacity" ? b1(S, n.frame, w / 100) : Q(S, { [we]: w }), s && !ce(S) && (we === "hFOV_deg" || we === "vFOV_deg") && (S.aspect_id = yi(S)), fe(), J(), oe && te();
  }
  async function X(we) {
    var b, S, $, H, v, w, D;
    const A = we.target.closest("[data-action]");
    if (!A) return;
    const oe = String(A.getAttribute("data-action") || "");
    if (oe === "coverage-set") {
      const M = xn(A.getAttribute("data-coverage"));
      if (M === xn(l.coverage)) return;
      l.coverage = M, n.coverage = M, r && (r.value = String(M)), o ? a.backgroundDirty = !0 : (p(), k({
        syncPreview: u !== "cutout",
        syncGraph: u !== "cutout"
      })), fe(), V(), J();
      return;
    }
    if (oe === "toggle-selection-picker") {
      if ((S = (b = d.sidePanel) == null ? void 0 : b.selectionPicker) != null && S.disabled) return;
      d.sidePanel.selectionPicker.open = !d.sidePanel.selectionPicker.open;
      return;
    }
    if (oe === "select-picker-item") {
      d.sidePanel.selectionPicker.open = !1;
      const M = String(A.getAttribute("data-selection-id") || "");
      let P = null;
      if (M && (u === "stickers" ? P = [...z(), ...c ? l.shots : []].find((I) => String((I == null ? void 0 : I.id) || "") === M) || null : P = (($ = B().find((I) => {
        var K;
        return String(((K = I == null ? void 0 : I.item) == null ? void 0 : K.id) || "") === M;
      })) == null ? void 0 : $.item) || null), le(P || null), P && !F(P)) {
        const I = Y(P);
        Z(jt(Number(I.yaw_deg || 0)), Ee(Number(I.pitch_deg || 0), -89.9, 89.9));
      }
      fe(), V(), J();
      return;
    }
    if (oe === "copy-state-inline") {
      const M = G(), P = ee();
      if (!M || P === "stroke" || x().length > 1) return;
      const I = JSON.stringify(s && P !== "image" ? g(M) : _(Y(M)));
      try {
        await navigator.clipboard.writeText(I), (H = d.sidePanel) != null && H.copyStateButton && (d.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = d.sidePanel) != null && K.copyStateButton && (d.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (oe === "set-invert-x") {
      l.ui_settings.invert_view_x = A.getAttribute("data-value") === "1", C(), fe(), (v = i.setDirtyCanvas) == null || v.call(i, !0, !0), J();
      return;
    }
    if (oe === "set-invert-y") {
      l.ui_settings.invert_view_y = A.getAttribute("data-value") === "1", C(), fe(), (w = i.setDirtyCanvas) == null || w.call(i, !0, !0), J();
      return;
    }
    if (oe === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, C(), fe(), (D = i.setDirtyCanvas) == null || D.call(i, !0, !0), J();
      return;
    }
    if (oe === "close-preview") {
      m();
      return;
    }
    if (oe === "cancel-close") {
      m();
      return;
    }
    oe === "save-close" && (f(), m());
  }
  function ae(we) {
    const A = we.target.closest("[data-action='param-input']");
    A && E(String(A.getAttribute("data-param-key") || ""), A.value, !1);
  }
  function be(we) {
    const A = we.target.closest("[data-action='param-input']");
    A && E(String(A.getAttribute("data-param-key") || ""), A.value, !0);
  }
  return {
    connect(we) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: g,
        buildCanonicalSelectedStickerState: _,
        closeEditor: m,
        commitState: p,
        getActiveCutoutShot: O,
        getCutoutInspectorItems: B,
        getList: z,
        getSelected: G,
        getSelectedItems: x,
        getSelectedKind: ee,
        isItemLocked: W,
        isSceneSticker: ce,
        isStrokeGroupItem: F,
        markObjectVisualsDirty: pe,
        persistUiSettings: C,
        poseOf: Y,
        pushHistory: te,
        requestDraw: J,
        selectedWorldSticker: U,
        setSelectedItem: le,
        stopTimelinePlayback: ie,
        syncCoverageChangeToNodePreviews: k,
        syncCutoutShot: L,
        turnViewTo: Z,
        updateSelectionMenu: V,
        updateSidePanel: fe,
        worldStickerEditable: Se,
        writePose: Q
      } = we);
    },
    onSidePanelClick: X,
    onSidePanelInput: ae,
    onSidePanelChange: be
  };
}
function u2(e) {
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
    shotEditor: u,
    tooltip: d,
    uiState: f,
    videoEl: g
  } = e;
  let _, m, p, O, B, z, G, x, ee, W, ce, F, pe, C, Y, te, J, U, le, ie, k, L, Z, V, fe, Se, Q, E, X, ae, be, we, A, oe, b, S, $, H, v, w, D, M, P, I, K, re, me, j, de, _e, ke;
  const ue = () => {
    if (!t.customPaintSessionStart) return;
    if (el(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (LP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const ze = [
      Ln(t.customPaintColor),
      ...t.customPaintHistory.filter((q) => !el(q, t.customPaintColor))
    ];
    t.customPaintHistory = ze.slice(0, 8), t.customPaintSessionStart = null;
  }, ve = (ze = !1) => {
    !i || i.hidden || (ze ? ue() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, Ne = () => {
    i && (i.hidden && (t.customPaintSessionStart = Ln(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function h() {
    v();
  }
  function R(ze) {
    var kt, Ft, bt, Dt, tn;
    if ((Ft = (kt = ze.target) == null ? void 0 : kt.matches) != null && Ft.call(kt, "[data-confirm-overlay]")) {
      const Ue = (bt = f.confirmDialog) == null ? void 0 : bt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ue == null || Ue(!1);
      return;
    }
    const q = ze.target.closest("[data-space-mode]");
    if (q) {
      oe(q.getAttribute("data-space-mode"));
      return;
    }
    const Ce = ze.target.closest("[data-gizmo-mode]");
    if (Ce) {
      t.gizmoMode = Ce.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, de(), E({ localOnly: !0, reason: dt.VIEW });
      return;
    }
    const Ve = ze.target.closest("[data-view]");
    if (Ve) {
      if (Ve.getAttribute("aria-disabled") === "true") return;
      const Ue = t.mode;
      t.mode = String(Ve.getAttribute("data-view") || "pano"), u && t.mode === "frame" && (Ue !== "frame" && (c.frameSafeRect = null), _e(), de()), C(), P(), E();
      return;
    }
    const Ie = ze.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ie && !s) {
      if (Ie.matches("[data-tool-mode]")) {
        const Ue = String(Ie.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ue, (Ue === "paint" || Ue === "mask") && ee({ preservePanelValues: !0 }), w(), _e(), de(), E();
        return;
      }
      if (Ie.matches("[data-tool-ui-action]")) {
        const Ue = String(Ie.getAttribute("data-tool-ui-action") || "");
        if ((Ue === "undo" || Ue === "redo") && Ie.disabled) return;
        Ue === "undo" ? X(-1) : Ue === "redo" ? X(1) : Ue === "clear" ? G() : Ue === "add" || Ue === "add-image" ? m() : Ue === "add-world" ? O() : Ue === "add-or-look" ? _() : Ue === "add-camera" && p();
        return;
      }
      if (Ie.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ue = String(Ie.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ue, ee({ preservePanelValues: !0 }), An[Ue] && (t.activeBrushPresetId = Ue), w(), _e(), de(), E();
        return;
      }
      if (Ie.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ie.getAttribute("data-mask-tool") || "pen"), ee({ preservePanelValues: !0 }), w(), _e(), de(), E();
        return;
      }
      if (Ie.matches("[data-paint-layer-clear-current]")) {
        const Ue = String(Ie.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        x(Ue);
        return;
      }
      if (Ie.matches("[data-paint-color-swatch]")) {
        const Ue = Pl.find((Ht) => Ht.id === Ie.getAttribute("data-paint-color-swatch"));
        if (!Ue) return;
        t.paintColor = Ln(Ue.color), ve(!0), w();
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
      ke.resumeAfterScrub = !1, I();
      return;
    }
    if (je === "video-audio-toggle") {
      ze.preventDefault(), ze.stopPropagation(), me(), typeof (Ie == null ? void 0 : Ie.blur) == "function" && Ie.blur();
      return;
    }
    if (je === "video-loop-toggle") {
      if (ze.preventDefault(), ze.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      const Ue = !f.videoTransport.loop;
      f.videoTransport.loop = Ue, g.loop = Ue, M({
        hasAudio: f.videoTransport.hasAudio,
        loop: Ue,
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
        const Ue = t.mode === "frame" ? te() : null;
        if (!Ue || Ue.locked === !0) return;
        A(Ue, String(Ie.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, D(), fe(), W(), P(), _e(), de(), E();
        return;
      }
      if (je === "frame-aspect-custom") {
        const Ue = t.mode === "frame" ? te() : null, Ht = Ie.getAttribute("data-custom-width"), bn = Ie.getAttribute("data-custom-height");
        if (!Ue || !B(Ue, Ht, bn)) return;
        f.frameRail.aspectOpen = !1, D(), fe(), W(), P(), E();
        return;
      }
      if (je === "frame-rotate-90") {
        const Ue = t.mode === "frame" ? te() : null;
        if (!Ue || Ue.locked === !0) return;
        be(Ue), f.frameRail.aspectOpen = !1, D(), fe(), W(), P(), E();
        return;
      }
      if (je === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, de(), E();
        return;
      }
      if (je === "aspect-set") {
        const Ue = U();
        if (!Ue) return;
        const Ht = String(Ie.getAttribute("data-aspect") || "1:1");
        A(Ue, Ht), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), fe(), W(), de(), E();
        return;
      }
      if (je === "rotate-90") {
        const Ue = U();
        if (!Ue || k()) return;
        be(Ue), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), fe(), W(), de(), E();
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
        pe();
        return;
      }
      if (je === "replace-image") {
        Q();
        return;
      }
      if (je === "toggle-lock") {
        re();
        return;
      }
      if (je === "back-initial") {
        ae();
        return;
      }
      if (je === "toggle-visible") {
        K();
        return;
      }
      if (je === "delete") {
        F();
        return;
      }
    }
    if (je === "reset-view") {
      if (t.mode === "frame") return;
      j(
        { position: $(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((tn = ce()) == null ? void 0 : tn.radius) || nr },
        { mode: tl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (je === "frame-view") {
      if (!L() || tl(t.spaceMode, t.viewTransition) !== "6dof") return;
      Y();
      return;
    }
    if (je === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, KP(r == null ? void 0 : r.id, t.showGrid), h(), E();
      return;
    }
    if (je === "toggle-fullscreen") {
      ze.preventDefault(), ze.stopPropagation(), Le();
      return;
    }
    if (je === "toggle-output-preview-size") {
      ze.preventDefault(), ze.stopPropagation();
      const Ue = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ue, H(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ue ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), He(), E();
      return;
    }
    const We = ze.target.closest("[data-paint-history-index]");
    if (!We) return;
    const Ye = Number(We.getAttribute("data-paint-history-index")), at = t.customPaintHistory[Ye];
    at && (t.customPaintColor = Ln(at), t.paintColor = Ln(at), w());
  }
  function N(ze) {
    const q = ze.target.closest("[data-video-seek]");
    if (q) {
      if (!(g instanceof HTMLVideoElement)) return;
      Z.playing && (ke.resumeAfterScrub = !0), Z.seek(ci(Number(q.value || 0), V()));
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
      const je = Math.max(1, Math.min(120, Math.round(Number(Ve.value)))), We = J(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[We] = je, w(), b();
      return;
    }
    const Ie = ze.target.closest("[data-paint-alpha-slider]");
    if (Ie) {
      const je = { ...t.customPaintColor, a: Ee(Number(Ie.value) / 100, 0, 1) };
      t.customPaintColor = Ln(je), t.paintColor = Ln(je), w();
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
    ze.target.closest("[data-paint-size-slider]") && le();
  }
  function T(ze) {
    const q = ze.target.closest("[data-tip]");
    !q || !l.contains(q) || d.target !== q && (d.target = q, d.timer && clearTimeout(d.timer), d.timer = window.setTimeout(() => {
      d.target === q && S(q);
    }, 220));
  }
  function se(ze) {
    var Ve, Ie;
    const q = ze.target.closest("[data-tip]");
    !q || d.target !== q || (ze.relatedTarget instanceof Element ? (Ie = (Ve = ze.relatedTarget).closest) == null ? void 0 : Ie.call(Ve, "[data-tip]") : null) === q || ie();
  }
  function ge(ze, q) {
    var Ye;
    if (!o) return;
    const Ce = o.getBoundingClientRect(), Ve = Ee((ze - Ce.left) / Math.max(1, Ce.width), 0, 1), Ie = 1 - Ee((q - Ce.top) / Math.max(1, Ce.height), 0, 1), je = du(t.customPaintColor), We = { ...uu(je.h, Ve, Ie), a: Number(((Ye = t.customPaintColor) == null ? void 0 : Ye.a) ?? 1) };
    t.customPaintColor = Ln(We), t.paintColor = Ln(We), w();
  }
  function he(ze) {
    var je;
    if (!a) return;
    const q = a.getBoundingClientRect(), Ce = Ee((ze - q.left) / Math.max(1, q.width), 0, 1), Ve = du(t.customPaintColor), Ie = { ...uu(Ce, Ve.s, Ve.v), a: Number(((je = t.customPaintColor) == null ? void 0 : je.a) ?? 1) };
    t.customPaintColor = Ln(Ie), t.paintColor = Ln(Ie), w();
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
    t.fullscreen !== q && (t.fullscreen = q, l.classList.toggle("pano-modal-fullscreen", q), q ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), h(), ye(), Se(), E());
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
        addWorldImageSticker: O,
        applyCutoutAspectCustom: B,
        bringSelectedToFront: z,
        clearAll: G,
        clearPaintingLayer: x,
        clearSelection: ee,
        commitAndRefreshNode: W,
        contentSphere: ce,
        deleteSelected: F,
        duplicateSelected: pe,
        forceCursorTool: C,
        frameSpaceContent: Y,
        getActiveCutoutShot: te,
        getBrushPresetIdForTool: J,
        getSelected: U,
        hidePaintSizePreview: le,
        hideTooltip: ie,
        isErpCamera: k,
        isFreeSpaceView: L,
        playback: Z,
        playbackFps: V,
        pushHistory: fe,
        queueVideoTransportLayout: Se,
        replaceSelectedImage: Q,
        requestDraw: E,
        restoreHistory: X,
        restoreSelectedToInitialPose: ae,
        rotateCutoutAspect90: be,
        sendSelectedToBack: we,
        setShotAspect: A,
        setSpaceMode: oe,
        showPaintSizePreview: b,
        showTooltipFor: S,
        spaceOrigin: $,
        startAnimation: H,
        syncFloatingViewButtonState: v,
        syncPaintUi: w,
        syncSidePanelControls: D,
        syncVideoTransportState: M,
        syncViewToggleState: P,
        togglePlayback: I,
        toggleSelectedExternalStickerVisibility: K,
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
    onRootPointerOver: T,
    onRootPointerOut: se,
    updatePaintColorFromSv: ge,
    updatePaintColorFromHue: he,
    bindDrag: ne,
    syncFullscreenButton: ye,
    setFullscreenState: Me,
    onFullscreenChange: Re,
    syncOutputPreviewToggleButton: He
  };
}
function d2(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: a
  } = e;
  let s, l, c, u, d, f, g, _, m, p, O, B;
  function z(C) {
    var Y, te, J, U, le;
    if (C.key === "Escape") {
      if (s()) {
        C.preventDefault(), C.stopPropagation(), (Y = C.stopImmediatePropagation) == null || Y.call(C);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        C.preventDefault(), C.stopPropagation(), (te = C.stopImmediatePropagation) == null || te.call(C), (J = document.exitFullscreen) == null || J.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        C.preventDefault(), C.stopPropagation(), (U = C.stopImmediatePropagation) == null || U.call(C), m(!1);
        return;
      }
      C.preventDefault(), C.stopPropagation(), (le = C.stopImmediatePropagation) == null || le.call(C), l();
    }
  }
  function G(C) {
    const Y = String(C.key || ""), te = String(C.code || ""), J = Number(C.keyCode || 0);
    if (!(Y === "Delete" || te === "Delete" || J === 46) && !(Y === "Backspace" || te === "Backspace" || J === 8)) return;
    const ie = C.target, k = ((ie == null ? void 0 : ie.tagName) || "").toUpperCase();
    if (k === "INPUT" || k === "TEXTAREA" || ie != null && ie.isContentEditable) return;
    if (o.selection) {
      u(), C.preventDefault(), C.stopPropagation();
      return;
    }
    if (d()) {
      C.preventDefault(), C.stopPropagation();
      return;
    }
    g() && (c(), C.preventDefault(), C.stopPropagation());
  }
  function x(C) {
    if (C.code !== "Space" || C.ctrlKey || C.metaKey || C.altKey || n || !i || !a.timeline.visible || a.confirmDialog.visible) return !1;
    const Y = C.composedPath()[0];
    if (Y !== document.body && Y !== document.documentElement && !r.contains(Y)) return !1;
    const te = ((Y == null ? void 0 : Y.tagName) || "").toUpperCase();
    return te === "INPUT" ? !yP.has(String(Y.type || "text").toLowerCase()) : te !== "TEXTAREA" && te !== "SELECT" && !(Y != null && Y.isContentEditable);
  }
  function ee(C) {
    x(C) && (C.preventDefault(), C.stopPropagation(), C.repeat || O());
  }
  function W(C) {
    x(C) && (C.preventDefault(), C.stopPropagation());
  }
  function ce(C) {
    const Y = !!(C.ctrlKey || C.metaKey), te = !!C.altKey;
    t.marqueeModifier === Y && t.altModifier === te || (t.marqueeModifier = Y, t.altModifier = te, p(), B(t.pointerPos));
  }
  function F() {
    t.marqueeModifier = !1, t.altModifier = !1, p(), B(t.pointerPos);
  }
  function pe(C) {
    if (n || !C.ctrlKey && !C.metaKey) return;
    const Y = String(C.key || "").toLowerCase(), te = String(C.code || "");
    if (Y !== "z" && te !== "KeyZ") return;
    const J = C.target, U = ((J == null ? void 0 : J.tagName) || "").toUpperCase();
    if (U === "INPUT" || U === "TEXTAREA" || J != null && J.isContentEditable) return;
    const { canUndo: le, canRedo: ie } = f();
    C.shiftKey && !ie || !C.shiftKey && !le || (_(C.shiftKey ? 1 : -1), C.preventDefault(), C.stopPropagation());
  }
  return {
    connect(C) {
      ({
        cancelFrameCameraGesture: s,
        closeEditor: l,
        deleteSelected: c,
        deleteSelectedKeyframes: u,
        deleteSelectedWorldSticker: d,
        getHistoryCapabilities: f,
        getSelected: g,
        restoreHistory: _,
        setFullscreenState: m,
        syncFrameRollKnob: p,
        togglePlayback: O,
        updateCursor: B
      } = C);
    },
    onEscClose: z,
    onDeleteKey: G,
    onSpaceKey: ee,
    onSpaceKeyUp: W,
    onModifierKeyChange: ce,
    onWindowBlur: F,
    onUndoRedoKey: pe
  };
}
const dp = /* @__PURE__ */ new Map(), ir = $m({
  app: Qn,
  api: hn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: lu,
    markImageFailed: Eg,
    markImageLoading: Ag,
    markImageReady: Ig
  }
});
function fp(e) {
  if (!Xt(e, "background") || !Xt(e, "external-sticker")) return null;
  const t = ir.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? uo(t[0]) : null;
}
function f2(e) {
  if (!Xt(e, "background")) return null;
  const [t] = ir.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = ir.uiValue(e, "pano_timeline_frames") || [], [n] = ir.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: xn(n) };
}
const p2 = ir.assetSource, h2 = ir.source, m2 = ir.uiImage, g2 = ir.invalidateUiImage, pp = ir.loadPreferredExactLinkedImage;
async function y2(e, t, r = {}) {
  var Rt, Gt;
  await pg(e, { tolerateOperationFailure: !0 }), ir.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = VP(e, t);
  await md();
  const s = es(e, "output_preset"), l = es(e, "coverage"), c = es(e, "bg_color"), u = es(e, gP), d = () => {
    const $e = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return pp(
      e,
      $e,
      () => xe(),
      `background:size:${$e.join("|")}`
    );
  }, f = () => {
    const $e = d();
    return jP($e);
  }, g = ($e = 2048) => {
    const et = s == null ? void 0 : s.value;
    return zP(et) ? f() || Math.max(1, Math.round(Number($e || 2048))) : $P(et, $e);
  }, _ = e.__panoSceneStateV2 === !0, m = t === "stickers" && _, p = t === "cutout" && _, O = m && e.__panoStudio === !0, B = p || O, z = t === "cutout" || O, G = p ? f2(e) : null, x = (_ ? tm : em)(String((u == null ? void 0 : u.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: G ? G.coverage : xn(l == null ? void 0 : l.value),
    sharedUiSettings: HP(),
    active: im(e),
    fps: _ ? fp(e) : null,
    scene: (G == null ? void 0 : G.state) ?? null,
    camera: p
  });
  e.__panoLiveStateOverride = x, e.__panoLiveStateVersion = 0;
  let ee = null;
  B ? (ee = x.camera && (!O || x.camera.visible !== !1) ? rm(x.camera, 0) : null, x.shots = ee ? [{ ...ee, position: [...ee.position] }] : [], x.active.selected_shot_id = ee && p ? wl : null) : t === "cutout" && (x.shots = Array.isArray(x.shots) ? x.shots.slice(0, 1) : [], x.shots.length || (x.active.selected_shot_id = null));
  const W = t === "cutout" ? (() => {
    var Pn;
    const $e = Array.isArray(x.shots) ? x.shots : [], et = String(((Pn = x == null ? void 0 : x.active) == null ? void 0 : Pn.selected_shot_id) || "");
    return $e.find((ln) => String((ln == null ? void 0 : ln.id) || "") === et) || $e[0] || null;
  })() : null, ce = W ? Wg(W, !1) : { width: 220, height: 132 }, F = Cg(O ? "studio" : t), pe = /* @__PURE__ */ ao({
    stageStatus: Jn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (F.viewButtons || []).map(($e) => ({ ...$e, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Rt = F.spaceButtons) != null && Rt.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: F.spaceButtons, frame: F.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (F.toolButtons || []).map(($e) => ({
      ...$e,
      disabled: !1,
      ...$e.key === "add-world" ? { visible: m } : {},
      ...p && AP.has($e.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(F.floatingButtons || []).map(($e) => ({ ...$e, disabled: !1 })),
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
      label: W ? "Loading preview" : "Add Frame to preview"
    }
  }), C = { frame: /* @__PURE__ */ ws(0), playing: /* @__PURE__ */ ws(!1) }, Y = document.createElement("div");
  document.body.appendChild(Y);
  const te = ({ intent: $e, file: et } = {}) => {
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
  }, J = ({ intent: $e } = {}) => {
  }, U = Eu(hP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: F,
    paintSwatches: Pl.map(($e) => ({
      id: $e.id,
      label: $e.label,
      cssColor: fr($e.color, 1)
    })),
    uiState: pe,
    playhead: C,
    onClose: () => {
      an();
    },
    onTimeline: ($e) => Na($e),
    onImageFileSelected: te,
    onImageFileCancelled: J
  });
  let le = null;
  try {
    le = U.mount(Y);
  } catch ($e) {
    try {
      U.unmount();
    } catch {
    }
    throw Y.remove(), $e;
  }
  const ie = Y.querySelector(".pano-modal-overlay"), k = Y.querySelector(".pano-modal"), L = k == null ? void 0 : k.querySelector("[data-stage-overlay]"), Z = k == null ? void 0 : k.querySelector("[data-stage-background]"), V = k == null ? void 0 : k.querySelector(".pano-stage-wrap"), fe = ((Gt = le == null ? void 0 : le.getPaintOverlayRefs) == null ? void 0 : Gt.call(le)) || {}, Se = fe.cursor || null, Q = fe.sizePreview || null, E = fe.sizeSample || null;
  if (!ie || !k || !L || !Z || !V || !Se || !Q || !E)
    throw U.unmount(), Y.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const X = L.getContext("2d"), ae = k.querySelector("[data-side]"), be = k.querySelector("[data-video-element]"), we = k.querySelector("[data-port-video-element]");
  Gl(L, "editor.stage-overlay"), Gl(Z, "editor.stage-background"), af(be, "editor.video"), af(we, "editor.port-video");
  const A = k.querySelector(".pano-floating-right"), oe = k.querySelector(".pano-floating-top"), b = k.querySelector("[data-tool-rail]"), S = k.querySelector("[data-frame-rail]"), $ = k.querySelector("[data-frame-roll-knob]"), H = k.querySelector("[data-paint-dock]"), v = k.querySelector(".pano-video-transport"), w = k.querySelector("[data-selection-menu]"), D = k.querySelector("[data-tooltip]"), M = k.querySelector("[data-camera-preview-host]"), P = k.querySelector("[data-camera-preview-canvas]");
  Gl(P, "editor.camera-preview");
  const I = k.querySelector("[data-paint-color-row]"), K = k.querySelector("[data-paint-color-pop]"), re = k.querySelector("[data-paint-color-sv]"), me = k.querySelector("[data-paint-color-sv-cursor]"), j = k.querySelector("[data-paint-hue-strip]"), de = k.querySelector("[data-paint-hue-handle]");
  V == null || V.removeAttribute("data-stage-ready"), V == null || V.setAttribute("data-stage-loading-kind", "boot"), L.style.opacity = "1", Z.style.opacity = "0", i && (ae == null || ae.remove(), k.classList.add("pano-modal-readonly")), k.addEventListener("pointerdown", () => se.wake(), !0), k.addEventListener("pointerdown", ($e) => {
    var et;
    $e.target.closest("[data-frame-roll-knob]") || Ue(), !$e.target.closest(".pano-picker") && ($e.target.closest("[data-paint-color-row]") || (k.querySelectorAll(".pano-picker-pop").forEach((Pn) => {
      Pn.hidden = !0;
    }), Ie(!0), z && ke.cutoutAspectOpen && !$e.target.closest(".pano-aspect-popover") && !$e.target.closest("[data-action='aspect']") && (ke.cutoutAspectOpen = !1, ke.menuMode = "", ke.menuSize.measured = !1, Ra(), xe()), (et = pe.frameRail) != null && et.aspectOpen && !$e.target.closest(".pano-frame-aspect-control") && (pe.frameRail.aspectOpen = !1)));
  });
  const ke = {
    mode: "pano",
    selectedId: Gg(t, x),
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
    coverage: xn(x.coverage),
    historyController: aN(x),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Ar,
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
    showGrid: WP(e == null ? void 0 : e.id, !0),
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
    paintEngine: ml(),
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
  t === "stickers" && (ke.selectedId = null, x.active.selected_sticker_id = null), ke.selectedIds = ke.selectedId ? [ke.selectedId] : [];
  const ve = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), N = rn({ label: "editor.still" });
  N.__panoFrameIdx = 0;
  const y = rn({ label: "editor.port-still" });
  y.__panoFrameIdx = 0;
  const T = {
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
  }, se = px({
    requestAnimationFrame: ($e) => requestAnimationFrame($e),
    cancelAnimationFrame: ($e) => cancelAnimationFrame($e),
    draw: ($e, et) => Fa($e, et),
    animating: () => at()
  }), ge = dx({
    requestFrame: ($e) => se.requestFrame($e),
    cancelFrame: ($e) => se.cancelFrame($e),
    tasks: {
      seek: () => Al.seek(ue.scrubFrame),
      timeline: () => Ci(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        qe(), xe({ localOnly: !0, reason: dt.STATE });
      },
      sidePanel: () => st()
    }
  }), he = r_({
    canvas: Z,
    onReady: () => {
      Dn(), xe({ reason: dt.CONTEXT });
    },
    onFailed: () => xe(),
    onUpdate: () => xe({ localOnly: !0, reason: dt.MEDIA }),
    onSplats: ($e) => xe({ localOnly: !0, reason: AN($e) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      bt(), Dn(), xe({ reason: dt.CONTEXT });
    }
  }), ne = Number.parseFloat(
    getComputedStyle(k).getPropertyValue("--pano-float-radius")
  ) || 10, ye = ($e) => {
    const et = String($e || "default");
    L.style.cursor !== et && (L.style.cursor = et);
  }, Me = {
    timer: 0,
    target: null
  }, Ae = {
    active: !1,
    depth: 0
  }, Le = Lu({
    getView: () => ({ yaw: ke.viewYaw, pitch: ke.viewPitch, fov: ke.viewFov }),
    setView: ($e) => {
      ke.viewYaw = jt(Number($e.yaw || 0)), ke.viewPitch = Ee(Number($e.pitch || 0), -89.9, 89.9), ke.viewFov = Ee(Number($e.fov || ke.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const $e = L.getBoundingClientRect();
      return {
        w: Math.max(1, Number($e.width || L.clientWidth || 0)),
        h: Math.max(1, Number($e.height || L.clientHeight || 0))
      };
    },
    getInvert: () => {
      var $e, et;
      return {
        x: ($e = x.ui_settings) != null && $e.invert_view_x ? -1 : 1,
        y: (et = x.ui_settings) != null && et.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Dt(),
    onInteraction: () => se.requestDraw(dt.VIEW)
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
    disposeUpstream: Ye,
    editorAnimating: at,
    finishKnobRoll: kt,
    flushFrameWheelCommit: Ft,
    forgetCameraPreviewFrame: bt,
    getUnwrapRect: Dt,
    hidePaintSizePreview: tn,
    hideTooltip: Ue,
    hoverWorldGizmo: Ht,
    isFreeFrameView: bn,
    isFreeSpaceView: _r,
    migrateLegacyEmbeddedAssets: Hr,
    onCanvasDragOver: on,
    onCanvasDrop: kn,
    onCanvasMouseMove: Gr,
    onCanvasPointerCancel: Sr,
    onCanvasPointerDown: Xn,
    onCanvasPointerMove: va,
    onCanvasPointerUp: ho,
    onCanvasWheel: _a,
    onDeleteKey: mo,
    onEscClose: go,
    onFrameRollKnobDoubleClick: Sa,
    onFrameRollKnobPointerDown: wa,
    onFrameRollKnobPointerMove: yo,
    onFullscreenChange: Et,
    onModifierKeyChange: Mn,
    onRootChange: ar,
    onRootClick: bo,
    onRootInput: Tn,
    onRootPointerOut: xa,
    onRootPointerOver: ka,
    onSidePanelChange: Ma,
    onSidePanelClick: Wr,
    onSidePanelInput: Cl,
    onSpaceKey: wr,
    onSpaceKeyUp: Pa,
    onTimelineAction: Na,
    onUndoRedoKey: Ca,
    onWindowBlur: vo,
    onWindowDragEnter: _o,
    onWindowDragLeave: Aa,
    onWindowDragOver: Ia,
    onWindowDrop: Ea,
    playback: Al,
    pushHistory: Il,
    reconcileExternalStickerFromInputs: Oa,
    refreshModalVideoSource: Oe,
    replaceSelectedImageFromFile: Fe,
    requestDraw: xe,
    sampleEditorDiagnostics: yt,
    setDropCue: ct,
    setPointerPos: vt,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Qe,
    stopRenderLoop: rt,
    syncCanvasSize: Dn,
    syncCutoutShot: qe,
    syncFullscreenButton: Ke,
    syncGridToggleButton: Je,
    syncLookAtFrameButtonState: Zt,
    syncOutputPreviewToggleButton: Mt,
    syncPaintUi: xr,
    syncPaintingLayerAsync: Ni,
    syncTimeline: Ci,
    syncUndoRedoButtons: Ai,
    tick: Fa,
    triggerBackgroundPersistenceOnClose: Ta,
    updateCursor: So,
    updatePaintColorFromHue: Da,
    updatePaintColorFromSv: La,
    updateSelectionMenu: Ra,
    updateSidePanel: st,
    viewControls: ft,
    watchPixelRatio: mt
  } = BP({
    api: hn,
    app: Qn,
    backgroundCanvas: Z,
    bgWidget: c,
    cameraV2: B,
    canvas: L,
    capture: G,
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
    floatingRightEl: A,
    floatingTopEl: oe,
    frameGateCssRadius: ne,
    frameRailEl: S,
    frameRollKnobEl: $,
    hideSidebar: i,
    imageCache: ve,
    initialShotBase: ee,
    loadPreferredExactLinkedImage: pp,
    mediaAssetSource: p2,
    mediaSource: h2,
    mediaUiImage: m2,
    node: e,
    overlay: ie,
    paintColorPop: K,
    paintColorRow: I,
    paintColorSv: re,
    paintColorSvCursor: me,
    paintCursorEl: Se,
    paintDockEl: H,
    paintHueHandle: de,
    paintHueStrip: j,
    paintSizePreviewEl: Q,
    paintSizePreviewSampleEl: E,
    portStillCanvas: y,
    portVideoEl: we,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: R,
    rasterImageAlphaCache: h,
    rasterImageCache: Ne,
    readOnly: n,
    resolveEditorOutputPresetWidth: g,
    root: k,
    runtime: T,
    sceneV2: m,
    scheduler: se,
    selectionMenu: w,
    setCanvasCursor: ye,
    shotEditor: z,
    stageWrap: V,
    state: x,
    stateV2: _,
    stateWidget: u,
    stillCanvas: N,
    studio: O,
    timeline: ue,
    timelinePlayhead: C,
    toolRailEl: b,
    tooltip: Me,
    tooltipEl: D,
    type: t,
    uiState: pe,
    videoEl: be,
    videoTimelineFps: fp,
    videoTransportEl: v,
    viewController: Le,
    vueModal: le
  }, [
    rN,
    sN,
    lN,
    cN,
    uN,
    dN,
    fN,
    pN,
    hN,
    PN,
    NN,
    CN,
    EN,
    ON,
    FN,
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
    s2,
    l2,
    c2,
    u2,
    d2
  ]);
  Qe(), Xe.observe(L), mt();
  const gt = () => je();
  n || (e.__panoFlushStateBeforeQueue = gt), $ == null || $.addEventListener("pointerdown", wa), $ == null || $.addEventListener("pointermove", yo), $ == null || $.addEventListener("pointerup", kt), $ == null || $.addEventListener("pointercancel", () => Ve()), $ == null || $.addEventListener("lostpointercapture", () => {
    var $e;
    (($e = ke.interaction) == null ? void 0 : $e.source) === "knob" && Ve();
  }), $ == null || $.addEventListener("dblclick", Sa), L.onpointerdown = Xn, L.onpointermove = va, L.onpointerup = ho, L.onpointercancel = Sr, L.onlostpointercapture = () => {
    Ve();
  }, L.onauxclick = ($e) => {
    $e.button === 1 && $e.preventDefault();
  }, L.oncontextmenu = ($e) => {
    (_r() || bn()) && $S(ft(), 2) && $e.preventDefault();
  }, L.onmousemove = Gr, L.onpointerleave = () => {
    ke.interaction || Ht({ x: -1e6, y: -1e6 });
  }, L.onmouseleave = () => {
    vt(ke.pointerPos, !1), So(ke.pointerPos), ke.mode === "frame" && ke.primaryTool === "cursor" && xe({ localOnly: !0, reason: dt.OVERLAY });
  }, L.onwheel = _a, L.ondragover = on, L.ondrop = kn, window.addEventListener("dragenter", _o, !0), window.addEventListener("dragover", Ia, !0), window.addEventListener("dragleave", Aa, !0), window.addEventListener("drop", Ea, !0), ae == null || ae.addEventListener("click", Wr), ae == null || ae.addEventListener("input", Cl), ae == null || ae.addEventListener("change", Ma), Je(), k.addEventListener("click", bo), k.addEventListener("input", Tn), k.addEventListener("change", ar), k.addEventListener("pointerup", ($e) => {
    var et;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((et = $e.target) == null ? void 0 : et.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && tn();
  }), k.addEventListener("pointercancel", ($e) => {
    var et;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((et = $e.target) == null ? void 0 : et.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && tn();
  }), k.addEventListener("focusout", ($e) => {
    $e.target.closest("[data-paint-size-slider]") && tn();
  }), k.addEventListener("pointerover", ka), k.addEventListener("pointerout", xa), k.addEventListener("pointerdown", ($e) => {
    $e.target.closest("[data-frame-roll-knob]") || Ue();
  }), re && (re.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (et) => La(et.clientX, et.clientY));
  }), j && (j.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (et) => Da(et.clientX));
  }), k.addEventListener("click", ($e) => {
    var ti;
    const et = $e.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!et) return;
    const Pn = et.getAttribute("data-action") === "confirm-accept", ln = (ti = pe.confirmDialog) == null ? void 0 : ti.resolve;
    pe.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, ln == null || ln(Pn);
  }), document.addEventListener("fullscreenchange", Et), Ke(), Mt();
  const sn = e.onConnectionsChange;
  let Kt = null, vn = () => {
  };
  !n && t === "stickers" && (vn = dg(e, ($e = "sync") => {
    $e === "executed" && (g2(ve, io), Oe(), m && q()), Oa($e);
  }, { editor: !0 }), Kt = function(...et) {
    typeof sn == "function" && sn.apply(this, et), Oe(), Rr(this, "connections");
  }, e.onConnectionsChange = Kt), !n && !p && dp.set(String(e.id ?? "0"), () => Ni());
  let _t = null;
  async function an() {
    return _t || (_t = (async () => {
      var $e, et, Pn, ln, ti, Ii, Ei, xd;
      return dp.delete(String(e.id ?? "0")), Ft(), n || je(), document.fullscreenElement === ie && (($e = document.exitFullscreen) == null || $e.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Et), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === gt && (e.__panoFlushStateBeforeQueue = null), (Pn = (et = e.__panoDomPreview) == null ? void 0 : et.requestDraw) == null || Pn.call(et), (ti = (ln = e.graph) == null ? void 0 : ln.setDirtyCanvas) == null || ti.call(ln, !0, !0), (xd = (Ei = (Ii = Qn) == null ? void 0 : Ii.canvas) == null ? void 0 : Ei.setDirty) == null || xd.call(Ei, !0, !0), Ue(), ge.cancel(), rt(), We(), Ye(), he.dispose(), ct(!1), window.removeEventListener("keydown", go, !0), window.removeEventListener("keydown", mo, !0), window.removeEventListener("keydown", wr, !0), window.removeEventListener("keyup", Pa, !0), window.removeEventListener("keydown", Mn, !0), window.removeEventListener("keyup", Mn, !0), window.removeEventListener("blur", vo), window.removeEventListener("keydown", Ca, !0), window.removeEventListener("dragenter", _o, !0), window.removeEventListener("dragover", Ia, !0), window.removeEventListener("dragleave", Aa, !0), window.removeEventListener("drop", Ea, !0), !n && t === "stickers" && (e.onConnectionsChange === Kt && (e.onConnectionsChange = sn), vn()), U.unmount(), Y.remove(), Ta(), _t = null, !0;
    })().catch(($e) => (console.error("[PanoramaCutoutSync] closeEditor failed", $e), _t = null, !1)), _t);
  }
  window.addEventListener("keydown", go, !0), window.addEventListener("keydown", mo, !0), window.addEventListener("keydown", wr, !0), window.addEventListener("keyup", Pa, !0), window.addEventListener("keydown", Mn, !0), window.addEventListener("keyup", Mn, !0), window.addEventListener("blur", vo), window.addEventListener("keydown", Ca, !0), ie.addEventListener("pointerdown", ($e) => {
    $e.target === ie && an();
  });
  function Lt($e, et, { rollbackState: Pn = !1 } = {}) {
    let ln = "";
    try {
      Pn && (ln = JSON.stringify(x)), et();
    } catch (ti) {
      if (ln)
        try {
          const Ii = JSON.parse(ln);
          Object.keys(x).forEach((Ei) => delete x[Ei]), Object.assign(x, Ii), n || je();
        } catch (Ii) {
          console.error(`[PanoramaStickers] editor boot step "${$e}" rollback failed`, Ii);
        }
      pe.stageWarningDetail = `boot:${$e}`, console.error(`[PanoramaStickers] editor boot step "${$e}" failed`, ti);
    }
  }
  Lt("cutout-focus", ze), !n && t === "stickers" && Lt("external-sticker-sync", () => Oa("open"), { rollbackState: !0 }), Hr().catch(($e) => {
    pe.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', $e);
  }), Lt("history", Il), Lt("undo-redo", Ai), Lt("paint-ui", xr), Lt("side-panel", st), Lt("look-at-frame", Zt), Lt("video-source", Oe), Lt("canvas-size", Dn), Lt("cursor", () => So(ke.pointerPos)), xe(), yt();
}
Qn.registerExtension(qS({
  app: Qn,
  openEditor: y2,
  attachStickers: cx,
  attachCutout: ux,
  attachPreview: lx,
  restoreOutput: qw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: _P
}));
