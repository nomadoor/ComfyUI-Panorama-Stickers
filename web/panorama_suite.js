import * as Ja from "../../scripts/app.js";
import { app as un } from "../../scripts/app.js";
import { api as Jt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function _c(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const it = {}, ai = [], On = () => {
}, wf = () => !1, Eo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), To = (e) => e.startsWith("onUpdate:"), Bt = Object.assign, xc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, kp = Object.prototype.hasOwnProperty, Ze = (e, t) => kp.call(e, t), Le = Array.isArray, oi = (e) => ia(e) === "[object Map]", Sf = (e) => ia(e) === "[object Set]", eu = (e) => ia(e) === "[object Date]", He = (e) => typeof e == "function", wt = (e) => typeof e == "string", Fn = (e) => typeof e == "symbol", nt = (e) => e !== null && typeof e == "object", Nf = (e) => (nt(e) || He(e)) && He(e.then) && He(e.catch), Mf = Object.prototype.toString, ia = (e) => Mf.call(e), Pp = (e) => ia(e).slice(8, -1), kf = (e) => ia(e) === "[object Object]", wc = (e) => wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Oi = /* @__PURE__ */ _c(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ro = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Cp = /-\w/g, Qt = Ro(
  (e) => e.replace(Cp, (t) => t.slice(1).toUpperCase())
), Ap = /\B([A-Z])/g, Rr = Ro(
  (e) => e.replace(Ap, "-$1").toLowerCase()
), Lo = Ro((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ms = Ro(
  (e) => e ? `on${Lo(e)}` : ""
), Rn = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Pf = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ip = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let tu;
const Oo = () => tu || (tu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qt(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = wt(r) ? Rp(r) : qt(r);
      if (a)
        for (const s in a)
          t[s] = a[s];
    }
    return t;
  } else if (wt(e) || nt(e))
    return e;
}
const Dp = /;(?![^(]*\))/g, Ep = /:([^]+)/, Tp = /\/\*[^]*?\*\//g;
function Rp(e) {
  const t = {};
  return e.replace(Tp, "").split(Dp).forEach((n) => {
    if (n) {
      const r = n.split(Ep);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function xt(e) {
  let t = "";
  if (wt(e))
    t = e;
  else if (Le(e))
    for (let n = 0; n < e.length; n++) {
      const r = xt(e[n]);
      r && (t += r + " ");
    }
  else if (nt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Op = /* @__PURE__ */ _c(Lp);
function Cf(e) {
  return !!e || e === "";
}
function Fp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Sc(e[r], t[r]);
  return n;
}
function Sc(e, t) {
  if (e === t) return !0;
  let n = eu(e), r = eu(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Fn(e), r = Fn(t), n || r)
    return e === t;
  if (n = Le(e), r = Le(t), n || r)
    return n && r ? Fp(e, t) : !1;
  if (n = nt(e), r = nt(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, s = Object.keys(t).length;
    if (a !== s)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), g = t.hasOwnProperty(u);
      if (f && !g || !f && g || !Sc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Af = (e) => !!(e && e.__v_isRef === !0), kt = (e) => wt(e) ? e : e == null ? "" : Le(e) || nt(e) && (e.toString === Mf || !He(e.toString)) ? Af(e) ? kt(e.value) : JSON.stringify(e, If, 2) : String(e), If = (e, t) => Af(t) ? If(e, t.value) : oi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], s) => (n[Ps(r, s) + " =>"] = a, n),
    {}
  )
} : Sf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ps(n))
} : Fn(t) ? Ps(t) : nt(t) && !Le(t) && !kf(t) ? String(t) : t, Ps = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class Vp {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = an, !t && an && (this.index = (an.scopes || (an.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = an;
      try {
        return an = this, t();
      } finally {
        an = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = an, an = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (an = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Hp() {
  return an;
}
let st;
const Cs = /* @__PURE__ */ new WeakSet();
class Df {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Cs.has(this) && (Cs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Tf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nu(this), Rf(this);
    const t = st, n = Nn;
    st = this, Nn = !0;
    try {
      return this.fn();
    } finally {
      Lf(this), st = t, Nn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        kc(t);
      this.deps = this.depsTail = void 0, nu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Cs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xs(this) && this.run();
  }
  get dirty() {
    return Xs(this);
  }
}
let Ef = 0, Fi, Vi;
function Tf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vi, Vi = e;
    return;
  }
  e.next = Fi, Fi = e;
}
function Nc() {
  Ef++;
}
function Mc() {
  if (--Ef > 0)
    return;
  if (Vi) {
    let t = Vi;
    for (Vi = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Fi; ) {
    let t = Fi;
    for (Fi = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Rf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Lf(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), kc(r), zp(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function Xs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Of(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Of(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xi) || (e.globalVersion = Xi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = st, r = Nn;
  st = e, Nn = !0;
  try {
    Rf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Rn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = n, Nn = r, Lf(e), e.flags &= -3;
  }
}
function kc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      kc(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Nn = !0;
const Ff = [];
function Jn() {
  Ff.push(Nn), Nn = !1;
}
function Qn() {
  const e = Ff.pop();
  Nn = e === void 0 ? !0 : e;
}
function nu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = st;
    st = void 0;
    try {
      t();
    } finally {
      st = n;
    }
  }
}
let Xi = 0;
class jp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Pc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Nn || st === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== st)
      n = this.activeLink = new jp(st, this), st.deps ? (n.prevDep = st.depsTail, st.depsTail.nextDep = n, st.depsTail = n) : st.deps = st.depsTail = n, Vf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = st.depsTail, n.nextDep = void 0, st.depsTail.nextDep = n, st.depsTail = n, st.deps === n && (st.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xi++, this.notify(t);
  }
  notify(t) {
    Nc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mc();
    }
  }
}
function Vf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Vf(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zs = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ Symbol(
  ""
), Js = /* @__PURE__ */ Symbol(
  ""
), Zi = /* @__PURE__ */ Symbol(
  ""
);
function zt(e, t, n) {
  if (Nn && st) {
    let r = Zs.get(e);
    r || Zs.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new Pc()), a.map = r, a.key = n), a.track();
  }
}
function qn(e, t, n, r, a, s) {
  const u = Zs.get(e);
  if (!u) {
    Xi++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (Nc(), t === "clear")
    u.forEach(f);
  else {
    const g = Le(e), y = g && wc(n);
    if (g && n === "length") {
      const v = Number(r);
      u.forEach((d, w) => {
        (w === "length" || w === Zi || !Fn(w) && w >= v) && f(d);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(Zi)), t) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get(Mr)), oi(e) && f(u.get(Js)));
          break;
        case "delete":
          g || (f(u.get(Mr)), oi(e) && f(u.get(Js)));
          break;
        case "set":
          oi(e) && f(u.get(Mr));
          break;
      }
  }
  Mc();
}
function qr(e) {
  const t = /* @__PURE__ */ Xe(e);
  return t === e ? t : (zt(t, "iterate", Zi), /* @__PURE__ */ yn(e) ? t : t.map(Mn));
}
function Fo(e) {
  return zt(e = /* @__PURE__ */ Xe(e), "iterate", Zi), e;
}
function En(e, t) {
  return /* @__PURE__ */ er(e) ? fi(/* @__PURE__ */ kr(e) ? Mn(t) : t) : Mn(t);
}
const $p = {
  __proto__: null,
  [Symbol.iterator]() {
    return As(this, Symbol.iterator, (e) => En(this, e));
  },
  concat(...e) {
    return qr(this).concat(
      ...e.map((t) => Le(t) ? qr(t) : t)
    );
  },
  entries() {
    return As(this, "entries", (e) => (e[1] = En(this, e[1]), e));
  },
  every(e, t) {
    return $n(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $n(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => En(this, r)),
      arguments
    );
  },
  find(e, t) {
    return $n(
      this,
      "find",
      e,
      t,
      (n) => En(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return $n(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $n(
      this,
      "findLast",
      e,
      t,
      (n) => En(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return $n(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return $n(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Is(this, "includes", e);
  },
  indexOf(...e) {
    return Is(this, "indexOf", e);
  },
  join(e) {
    return qr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Is(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $n(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wi(this, "pop");
  },
  push(...e) {
    return wi(this, "push", e);
  },
  reduce(e, ...t) {
    return ru(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ru(this, "reduceRight", e, t);
  },
  shift() {
    return wi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $n(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wi(this, "splice", e);
  },
  toReversed() {
    return qr(this).toReversed();
  },
  toSorted(e) {
    return qr(this).toSorted(e);
  },
  toSpliced(...e) {
    return qr(this).toSpliced(...e);
  },
  unshift(...e) {
    return wi(this, "unshift", e);
  },
  values() {
    return As(this, "values", (e) => En(this, e));
  }
};
function As(e, t, n) {
  const r = Fo(e), a = r[t]();
  return r !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const Bp = Array.prototype;
function $n(e, t, n, r, a, s) {
  const u = Fo(e), f = u !== e && !/* @__PURE__ */ yn(e), g = u[t];
  if (g !== Bp[t]) {
    const d = g.apply(e, s);
    return f ? Mn(d) : d;
  }
  let y = n;
  u !== e && (f ? y = function(d, w) {
    return n.call(this, En(e, d), w, e);
  } : n.length > 2 && (y = function(d, w) {
    return n.call(this, d, w, e);
  }));
  const v = g.call(u, y, r);
  return f && a ? a(v) : v;
}
function ru(e, t, n, r) {
  const a = Fo(e), s = a !== e && !/* @__PURE__ */ yn(e);
  let u = n, f = !1;
  a !== e && (s ? (f = r.length === 0, u = function(y, v, d) {
    return f && (f = !1, y = En(e, y)), n.call(this, y, En(e, v), d, e);
  }) : n.length > 3 && (u = function(y, v, d) {
    return n.call(this, y, v, d, e);
  }));
  const g = a[t](u, ...r);
  return f ? En(e, g) : g;
}
function Is(e, t, n) {
  const r = /* @__PURE__ */ Xe(e);
  zt(r, "iterate", Zi);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ic(n[0]) ? (n[0] = /* @__PURE__ */ Xe(n[0]), r[t](...n)) : a;
}
function wi(e, t, n = []) {
  Jn(), Nc();
  const r = (/* @__PURE__ */ Xe(e))[t].apply(e, n);
  return Mc(), Qn(), r;
}
const Up = /* @__PURE__ */ _c("__proto__,__v_isRef,__isVue"), Hf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fn)
);
function Gp(e) {
  Fn(e) || (e = String(e));
  const t = /* @__PURE__ */ Xe(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class zf {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (a ? s ? t0 : Uf : s ? Bf : $f).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = Le(t);
    if (!a) {
      let g;
      if (u && (g = $p[n]))
        return g;
      if (n === "hasOwnProperty")
        return Gp;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $t(t) ? t : r
    );
    if ((Fn(n) ? Hf.has(n) : Up(n)) || (a || zt(t, "get", n), s))
      return f;
    if (/* @__PURE__ */ $t(f)) {
      const g = u && wc(n) ? f : f.value;
      return a && nt(g) ? /* @__PURE__ */ ec(g) : g;
    }
    return nt(f) ? a ? /* @__PURE__ */ ec(f) : /* @__PURE__ */ Vo(f) : f;
  }
}
class jf extends zf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let s = t[n];
    const u = Le(t) && wc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ er(s);
      if (!/* @__PURE__ */ yn(r) && !/* @__PURE__ */ er(r) && (s = /* @__PURE__ */ Xe(s), r = /* @__PURE__ */ Xe(r)), !u && /* @__PURE__ */ $t(s) && !/* @__PURE__ */ $t(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < t.length : Ze(t, n), g = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ $t(t) ? t : a
    );
    return t === /* @__PURE__ */ Xe(a) && (f ? Rn(r, s) && qn(t, "set", n, r) : qn(t, "add", n, r)), g;
  }
  deleteProperty(t, n) {
    const r = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && qn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Fn(n) || !Hf.has(n)) && zt(t, "has", n), r;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Le(t) ? "length" : Mr
    ), Reflect.ownKeys(t);
  }
}
class Kp extends zf {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Wp = /* @__PURE__ */ new jf(), Yp = /* @__PURE__ */ new Kp(), qp = /* @__PURE__ */ new jf(!0);
const Qs = (e) => e, Ia = (e) => Reflect.getPrototypeOf(e);
function Xp(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ Xe(a), u = oi(s), f = e === "entries" || e === Symbol.iterator && u, g = e === "keys" && u, y = a[e](...r), v = n ? Qs : t ? fi : Mn;
    return !t && zt(
      s,
      "iterate",
      g ? Js : Mr
    ), Bt(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: d, done: w } = y.next();
          return w ? { value: d, done: w } : {
            value: f ? [v(d[0]), v(d[1])] : v(d),
            done: w
          };
        }
      }
    );
  };
}
function Da(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zp(e, t) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Xe(s), f = /* @__PURE__ */ Xe(a);
      e || (Rn(a, f) && zt(u, "get", a), zt(u, "get", f));
      const { has: g } = Ia(u), y = t ? Qs : e ? fi : Mn;
      if (g.call(u, a))
        return y(s.get(a));
      if (g.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && zt(/* @__PURE__ */ Xe(a), "iterate", Mr), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Xe(s), f = /* @__PURE__ */ Xe(a);
      return e || (Rn(a, f) && zt(u, "has", a), zt(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ Xe(f), y = t ? Qs : e ? fi : Mn;
      return !e && zt(g, "iterate", Mr), f.forEach((v, d) => a.call(s, y(v), y(d), u));
    }
  };
  return Bt(
    n,
    e ? {
      add: Da("add"),
      set: Da("set"),
      delete: Da("delete"),
      clear: Da("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Xe(this), u = Ia(s), f = /* @__PURE__ */ Xe(a), g = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ er(a) ? f : a;
        return u.has.call(s, g) || Rn(a, g) && u.has.call(s, a) || Rn(f, g) && u.has.call(s, f) || (s.add(g), qn(s, "add", g, g)), this;
      },
      set(a, s) {
        !t && !/* @__PURE__ */ yn(s) && !/* @__PURE__ */ er(s) && (s = /* @__PURE__ */ Xe(s));
        const u = /* @__PURE__ */ Xe(this), { has: f, get: g } = Ia(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ Xe(a), y = f.call(u, a));
        const v = g.call(u, a);
        return u.set(a, s), y ? Rn(s, v) && qn(u, "set", a, s) : qn(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Xe(this), { has: u, get: f } = Ia(s);
        let g = u.call(s, a);
        g || (a = /* @__PURE__ */ Xe(a), g = u.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return g && qn(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Xe(this), s = a.size !== 0, u = a.clear();
        return s && qn(
          a,
          "clear",
          void 0,
          void 0
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = Xp(a, e, t);
  }), n;
}
function Cc(e, t) {
  const n = Zp(e, t);
  return (r, a, s) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    Ze(n, a) && a in r ? n : r,
    a,
    s
  );
}
const Jp = {
  get: /* @__PURE__ */ Cc(!1, !1)
}, Qp = {
  get: /* @__PURE__ */ Cc(!1, !0)
}, e0 = {
  get: /* @__PURE__ */ Cc(!0, !1)
};
const $f = /* @__PURE__ */ new WeakMap(), Bf = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap(), t0 = /* @__PURE__ */ new WeakMap();
function n0(e) {
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
function r0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : n0(Pp(e));
}
// @__NO_SIDE_EFFECTS__
function Vo(e) {
  return /* @__PURE__ */ er(e) ? e : Ac(
    e,
    !1,
    Wp,
    Jp,
    $f
  );
}
// @__NO_SIDE_EFFECTS__
function i0(e) {
  return Ac(
    e,
    !1,
    qp,
    Qp,
    Bf
  );
}
// @__NO_SIDE_EFFECTS__
function ec(e) {
  return Ac(
    e,
    !0,
    Yp,
    e0,
    Uf
  );
}
function Ac(e, t, n, r, a) {
  if (!nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r0(e);
  if (s === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    s === 2 ? r : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  return /* @__PURE__ */ er(e) ? /* @__PURE__ */ kr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ic(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Xe(t) : e;
}
function a0(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Pf(e, "__v_skip", !0), e;
}
const Mn = (e) => nt(e) ? /* @__PURE__ */ Vo(e) : e, fi = (e) => nt(e) ? /* @__PURE__ */ ec(e) : e;
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tc(e) {
  return o0(e, !1);
}
function o0(e, t) {
  return /* @__PURE__ */ $t(e) ? e : new s0(e, t);
}
class s0 {
  constructor(t, n) {
    this.dep = new Pc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Xe(t), this._value = n ? t : Mn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ er(t);
    t = r ? t : /* @__PURE__ */ Xe(t), Rn(t, n) && (this._rawValue = t, this._value = r ? t : Mn(t), this.dep.trigger());
  }
}
function ri(e) {
  return /* @__PURE__ */ $t(e) ? e.value : e;
}
const c0 = {
  get: (e, t, n) => t === "__v_raw" ? e : ri(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ $t(a) && !/* @__PURE__ */ $t(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Gf(e) {
  return /* @__PURE__ */ kr(e) ? e : new Proxy(e, c0);
}
class l0 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Pc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return Tf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Of(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function u0(e, t, n = !1) {
  let r, a;
  return He(e) ? r = e : (r = e.get, a = e.set), new l0(r, a, n);
}
const Ea = {}, uo = /* @__PURE__ */ new WeakMap();
let wr;
function f0(e, t = !1, n = wr) {
  if (n) {
    let r = uo.get(n);
    r || uo.set(n, r = []), r.push(e);
  }
}
function d0(e, t, n = it) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, y = (A) => a ? A : /* @__PURE__ */ yn(A) || a === !1 || a === 0 ? Xn(A, 1) : Xn(A);
  let v, d, w, M, C = !1, D = !1;
  if (/* @__PURE__ */ $t(e) ? (d = () => e.value, C = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ kr(e) ? (d = () => y(e), C = !0) : Le(e) ? (D = !0, C = e.some((A) => /* @__PURE__ */ kr(A) || /* @__PURE__ */ yn(A)), d = () => e.map((A) => {
    if (/* @__PURE__ */ $t(A))
      return A.value;
    if (/* @__PURE__ */ kr(A))
      return y(A);
    if (He(A))
      return g ? g(A, 2) : A();
  })) : He(e) ? t ? d = g ? () => g(e, 2) : e : d = () => {
    if (w) {
      Jn();
      try {
        w();
      } finally {
        Qn();
      }
    }
    const A = wr;
    wr = v;
    try {
      return g ? g(e, 3, [M]) : e(M);
    } finally {
      wr = A;
    }
  } : d = On, t && a) {
    const A = d, B = a === !0 ? 1 / 0 : a;
    d = () => Xn(A(), B);
  }
  const V = Hp(), O = () => {
    v.stop(), V && V.active && xc(V.effects, v);
  };
  if (s && t) {
    const A = t;
    t = (...B) => {
      A(...B), O();
    };
  }
  let L = D ? new Array(e.length).fill(Ea) : Ea;
  const E = (A) => {
    if (!(!(v.flags & 1) || !v.dirty && !A))
      if (t) {
        const B = v.run();
        if (a || C || (D ? B.some((te, ae) => Rn(te, L[ae])) : Rn(B, L))) {
          w && w();
          const te = wr;
          wr = v;
          try {
            const ae = [
              B,
              // pass undefined as the old value when it's changed for the first time
              L === Ea ? void 0 : D && L[0] === Ea ? [] : L,
              M
            ];
            L = B, g ? g(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            wr = te;
          }
        }
      } else
        v.run();
  };
  return f && f(E), v = new Df(d), v.scheduler = u ? () => u(E, !1) : E, M = (A) => f0(A, !1, v), w = v.onStop = () => {
    const A = uo.get(v);
    if (A) {
      if (g)
        g(A, 4);
      else
        for (const B of A) B();
      uo.delete(v);
    }
  }, t ? r ? E(!0) : L = v.run() : u ? u(E.bind(null, !0), !0) : v.run(), O.pause = v.pause.bind(v), O.resume = v.resume.bind(v), O.stop = O, O;
}
function Xn(e, t = 1 / 0, n) {
  if (t <= 0 || !nt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ $t(e))
    Xn(e.value, t, n);
  else if (Le(e))
    for (let r = 0; r < e.length; r++)
      Xn(e[r], t, n);
  else if (Sf(e) || oi(e))
    e.forEach((r) => {
      Xn(r, t, n);
    });
  else if (kf(e)) {
    for (const r in e)
      Xn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Xn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function aa(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    Ho(a, t, n);
  }
}
function Vn(e, t, n, r) {
  if (He(e)) {
    const a = aa(e, t, n, r);
    return a && Nf(a) && a.catch((s) => {
      Ho(s, t, n);
    }), a;
  }
  if (Le(e)) {
    const a = [];
    for (let s = 0; s < e.length; s++)
      a.push(Vn(e[s], t, n, r));
    return a;
  }
}
function Ho(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = t && t.appContext.config || it;
  if (t) {
    let f = t.parent;
    const g = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const v = f.ec;
      if (v) {
        for (let d = 0; d < v.length; d++)
          if (v[d](e, g, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      Jn(), aa(s, null, 10, [
        e,
        g,
        y
      ]), Qn();
      return;
    }
  }
  h0(e, n, a, r, u);
}
function h0(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Xt = [];
let Dn = -1;
const si = [];
let cr = null, Qr = 0;
const Kf = /* @__PURE__ */ Promise.resolve();
let fo = null;
function Dc(e) {
  const t = fo || Kf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function g0(e) {
  let t = Dn + 1, n = Xt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Xt[r], s = Ji(a);
    s < e || s === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ec(e) {
  if (!(e.flags & 1)) {
    const t = Ji(e), n = Xt[Xt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ji(n) ? Xt.push(e) : Xt.splice(g0(t), 0, e), e.flags |= 1, Wf();
  }
}
function Wf() {
  fo || (fo = Kf.then(qf));
}
function p0(e) {
  Le(e) ? si.push(...e) : cr && e.id === -1 ? cr.splice(Qr + 1, 0, e) : e.flags & 1 || (si.push(e), e.flags |= 1), Wf();
}
function iu(e, t, n = Dn + 1) {
  for (; n < Xt.length; n++) {
    const r = Xt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Xt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Yf(e) {
  if (si.length) {
    const t = [...new Set(si)].sort(
      (n, r) => Ji(n) - Ji(r)
    );
    if (si.length = 0, cr) {
      cr.push(...t);
      return;
    }
    for (cr = t, Qr = 0; Qr < cr.length; Qr++) {
      const n = cr[Qr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    cr = null, Qr = 0;
  }
}
const Ji = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qf(e) {
  try {
    for (Dn = 0; Dn < Xt.length; Dn++) {
      const t = Xt[Dn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), aa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Dn < Xt.length; Dn++) {
      const t = Xt[Dn];
      t && (t.flags &= -2);
    }
    Dn = -1, Xt.length = 0, Yf(), fo = null, (Xt.length || si.length) && qf();
  }
}
let fn = null, Xf = null;
function ho(e) {
  const t = fn;
  return fn = e, Xf = e && e.type.__scopeId || null, t;
}
function m0(e, t = fn, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && mu(-1);
    const s = ho(t);
    let u;
    try {
      u = e(...a);
    } finally {
      ho(s), r._d && mu(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Tc(e, t) {
  if (fn === null)
    return e;
  const n = Bo(fn), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [s, u, f, g = it] = t[a];
    s && (He(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Xn(u), r.push({
      dir: s,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: g
    }));
  }
  return e;
}
function yr(e, t, n, r) {
  const a = e.dirs, s = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    s && (f.oldValue = s[u].value);
    let g = f.dir[r];
    g && (Jn(), Vn(g, n, 8, [
      e.el,
      f,
      e,
      t
    ]), Qn());
  }
}
function y0(e, t) {
  if (jt) {
    let n = jt.provides;
    const r = jt.parent && jt.parent.provides;
    r === n && (n = jt.provides = Object.create(r)), n[e] = t;
  }
}
function Qa(e, t, n = !1) {
  const r = y1();
  if (r || ci) {
    let a = ci ? ci._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && He(t) ? t.call(r && r.proxy) : t;
  }
}
const b0 = /* @__PURE__ */ Symbol.for("v-scx"), v0 = () => Qa(b0);
function Hi(e, t, n) {
  return Zf(e, t, n);
}
function Zf(e, t, n = it) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = Bt({}, n), g = t && r || !t && s !== "post";
  let y;
  if (ea) {
    if (s === "sync") {
      const M = v0();
      y = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!g) {
      const M = () => {
      };
      return M.stop = On, M.resume = On, M.pause = On, M;
    }
  }
  const v = jt;
  f.call = (M, C, D) => Vn(M, v, C, D);
  let d = !1;
  s === "post" ? f.scheduler = (M) => {
    rn(M, v && v.suspense);
  } : s !== "sync" && (d = !0, f.scheduler = (M, C) => {
    C ? M() : Ec(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), d && (M.flags |= 2, v && (M.id = v.uid, M.i = v));
  };
  const w = d0(e, t, f);
  return ea && (y ? y.push(w) : g && w()), w;
}
function _0(e, t, n) {
  const r = this.proxy, a = wt(e) ? e.includes(".") ? Jf(r, e) : () => r[e] : e.bind(r, r);
  let s;
  He(t) ? s = t : (s = t.handler, n = t);
  const u = oa(this), f = Zf(a, s.bind(r), n);
  return u(), f;
}
function Jf(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const x0 = /* @__PURE__ */ Symbol("_vte"), w0 = (e) => e.__isTeleport, S0 = /* @__PURE__ */ Symbol("_leaveCb");
function Rc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Rc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function au(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const go = /* @__PURE__ */ new WeakMap();
function zi(e, t, n, r, a = !1) {
  if (Le(e)) {
    e.forEach(
      (D, V) => zi(
        D,
        t && (Le(t) ? t[V] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (ji(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && zi(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Bo(r.component) : r.el, u = a ? null : s, { i: f, r: g } = e, y = t && t.r, v = f.refs === it ? f.refs = {} : f.refs, d = f.setupState, w = /* @__PURE__ */ Xe(d), M = d === it ? wf : (D) => au(v, D) ? !1 : Ze(w, D), C = (D, V) => !(V && au(v, V));
  if (y != null && y !== g) {
    if (ou(t), wt(y))
      v[y] = null, M(y) && (d[y] = null);
    else if (/* @__PURE__ */ $t(y)) {
      const D = t;
      C(y, D.k) && (y.value = null), D.k && (v[D.k] = null);
    }
  }
  if (He(g))
    aa(g, f, 12, [u, v]);
  else {
    const D = wt(g), V = /* @__PURE__ */ $t(g);
    if (D || V) {
      const O = () => {
        if (e.f) {
          const L = D ? M(g) ? d[g] : v[g] : C() || !e.k ? g.value : v[e.k];
          if (a)
            Le(L) && xc(L, s);
          else if (Le(L))
            L.includes(s) || L.push(s);
          else if (D)
            v[g] = [s], M(g) && (d[g] = v[g]);
          else {
            const E = [s];
            C(g, e.k) && (g.value = E), e.k && (v[e.k] = E);
          }
        } else D ? (v[g] = u, M(g) && (d[g] = u)) : V && (C(g, e.k) && (g.value = u), e.k && (v[e.k] = u));
      };
      if (u) {
        const L = () => {
          O(), go.delete(e);
        };
        L.id = -1, go.set(e, L), rn(L, n);
      } else
        ou(e), O();
    }
  }
}
function ou(e) {
  const t = go.get(e);
  t && (t.flags |= 8, go.delete(e));
}
Oo().requestIdleCallback;
Oo().cancelIdleCallback;
const ji = (e) => !!e.type.__asyncLoader, ed = (e) => e.type.__isKeepAlive;
function N0(e, t) {
  td(e, "a", t);
}
function M0(e, t) {
  td(e, "da", t);
}
function td(e, t, n = jt) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (zo(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      ed(a.parent.vnode) && k0(r, t, n, a), a = a.parent;
  }
}
function k0(e, t, n, r) {
  const a = zo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  rd(() => {
    xc(r[t], a);
  }, n);
}
function zo(e, t, n = jt, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...u) => {
      Jn();
      const f = oa(n), g = Vn(t, n, e, u);
      return f(), Qn(), g;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const tr = (e) => (t, n = jt) => {
  (!ea || e === "sp") && zo(e, (...r) => t(...r), n);
}, P0 = tr("bm"), nd = tr("m"), C0 = tr(
  "bu"
), A0 = tr("u"), Lc = tr(
  "bum"
), rd = tr("um"), I0 = tr(
  "sp"
), D0 = tr("rtg"), E0 = tr("rtc");
function T0(e, t = jt) {
  zo("ec", e, t);
}
const R0 = "components", id = /* @__PURE__ */ Symbol.for("v-ndc");
function L0(e) {
  return wt(e) ? O0(R0, e, !1) || e : e || id;
}
function O0(e, t, n = !0, r = !1) {
  const a = fn || jt;
  if (a) {
    const s = a.type;
    {
      const f = w1(
        s,
        !1
      );
      if (f && (f === t || f === Qt(t) || f === Lo(Qt(t))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      su(a[e] || s[e], t) || // global registration
      su(a.appContext[e], t)
    );
    return !u && r ? s : u;
  }
}
function su(e, t) {
  return e && (e[t] || e[Qt(t)] || e[Lo(Qt(t))]);
}
function Zt(e, t, n, r) {
  let a;
  const s = n, u = Le(e);
  if (u || wt(e)) {
    const f = u && /* @__PURE__ */ kr(e);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ yn(e), y = /* @__PURE__ */ er(e), e = Fo(e)), a = new Array(e.length);
    for (let v = 0, d = e.length; v < d; v++)
      a[v] = t(
        g ? y ? fi(Mn(e[v])) : Mn(e[v]) : e[v],
        v,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, s);
  } else if (nt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, g) => t(f, g, void 0, s)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let g = 0, y = f.length; g < y; g++) {
        const v = f[g];
        a[g] = t(e[v], v, g, s);
      }
    }
  else
    a = [];
  return a;
}
const nc = (e) => e ? kd(e) ? Bo(e) : nc(e.parent) : null, $i = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Bt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => nc(e.parent),
    $root: (e) => nc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => od(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ec(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Dc.bind(e.proxy)),
    $watch: (e) => _0.bind(e)
  })
), Ds = (e, t) => e !== it && !e.__isScriptSetup && Ze(e, t), F0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: u, type: f, appContext: g } = e;
    if (t[0] !== "$") {
      const w = u[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Ds(r, t))
          return u[t] = 1, r[t];
        if (a !== it && Ze(a, t))
          return u[t] = 2, a[t];
        if (Ze(s, t))
          return u[t] = 3, s[t];
        if (n !== it && Ze(n, t))
          return u[t] = 4, n[t];
        rc && (u[t] = 0);
      }
    }
    const y = $i[t];
    let v, d;
    if (y)
      return t === "$attrs" && zt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (v = f.__cssModules) && (v = v[t])
    )
      return v;
    if (n !== it && Ze(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      d = g.config.globalProperties, Ze(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: s } = e;
    return Ds(a, t) ? (a[t] = n, !0) : r !== it && Ze(r, t) ? (r[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || e !== it && f[0] !== "$" && Ze(e, f) || Ds(t, f) || Ze(s, f) || Ze(r, f) || Ze($i, f) || Ze(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function cu(e) {
  return Le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let rc = !0;
function V0(e) {
  const t = od(e), n = e.proxy, r = e.ctx;
  rc = !1, t.beforeCreate && lu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: v,
    beforeMount: d,
    mounted: w,
    beforeUpdate: M,
    updated: C,
    activated: D,
    deactivated: V,
    beforeDestroy: O,
    beforeUnmount: L,
    destroyed: E,
    unmounted: A,
    render: B,
    renderTracked: te,
    renderTriggered: ae,
    errorCaptured: Q,
    serverPrefetch: we,
    // public API
    expose: k,
    inheritAttrs: fe,
    // assets
    components: ue,
    directives: le,
    filters: xe
  } = t;
  if (y && H0(y, r, null), u)
    for (const pe in u) {
      const $ = u[pe];
      He($) && (r[pe] = $.bind(n));
    }
  if (a) {
    const pe = a.call(n, n);
    nt(pe) && (e.data = /* @__PURE__ */ Vo(pe));
  }
  if (rc = !0, s)
    for (const pe in s) {
      const $ = s[pe], be = He($) ? $.bind(n, n) : He($.get) ? $.get.bind(n, n) : On, De = !He($) && He($.set) ? $.set.bind(n) : On, Te = Pr({
        get: be,
        set: De
      });
      Object.defineProperty(r, pe, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: ($e) => Te.value = $e
      });
    }
  if (f)
    for (const pe in f)
      ad(f[pe], r, n, pe);
  if (g) {
    const pe = He(g) ? g.call(n) : g;
    Reflect.ownKeys(pe).forEach(($) => {
      y0($, pe[$]);
    });
  }
  v && lu(v, e, "c");
  function he(pe, $) {
    Le($) ? $.forEach((be) => pe(be.bind(n))) : $ && pe($.bind(n));
  }
  if (he(P0, d), he(nd, w), he(C0, M), he(A0, C), he(N0, D), he(M0, V), he(T0, Q), he(E0, te), he(D0, ae), he(Lc, L), he(rd, A), he(I0, we), Le(k))
    if (k.length) {
      const pe = e.exposed || (e.exposed = {});
      k.forEach(($) => {
        Object.defineProperty(pe, $, {
          get: () => n[$],
          set: (be) => n[$] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === On && (e.render = B), fe != null && (e.inheritAttrs = fe), ue && (e.components = ue), le && (e.directives = le), we && Qf(e);
}
function H0(e, t, n = On) {
  Le(e) && (e = ic(e));
  for (const r in e) {
    const a = e[r];
    let s;
    nt(a) ? "default" in a ? s = Qa(
      a.from || r,
      a.default,
      !0
    ) : s = Qa(a.from || r) : s = Qa(a), /* @__PURE__ */ $t(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : t[r] = s;
  }
}
function lu(e, t, n) {
  Vn(
    Le(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ad(e, t, n, r) {
  let a = r.includes(".") ? Jf(n, r) : () => n[r];
  if (wt(e)) {
    const s = t[e];
    He(s) && Hi(a, s);
  } else if (He(e))
    Hi(a, e.bind(n));
  else if (nt(e))
    if (Le(e))
      e.forEach((s) => ad(s, t, n, r));
    else {
      const s = He(e.handler) ? e.handler.bind(n) : t[e.handler];
      He(s) && Hi(a, s, e);
    }
}
function od(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = s.get(t);
  let g;
  return f ? g = f : !a.length && !n && !r ? g = t : (g = {}, a.length && a.forEach(
    (y) => po(g, y, u, !0)
  ), po(g, t, u)), nt(t) && s.set(t, g), g;
}
function po(e, t, n, r = !1) {
  const { mixins: a, extends: s } = t;
  s && po(e, s, n, !0), a && a.forEach(
    (u) => po(e, u, n, !0)
  );
  for (const u in t)
    if (!(r && u === "expose")) {
      const f = z0[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const z0 = {
  data: uu,
  props: fu,
  emits: fu,
  // objects
  methods: Di,
  computed: Di,
  // lifecycle
  beforeCreate: Yt,
  created: Yt,
  beforeMount: Yt,
  mounted: Yt,
  beforeUpdate: Yt,
  updated: Yt,
  beforeDestroy: Yt,
  beforeUnmount: Yt,
  destroyed: Yt,
  unmounted: Yt,
  activated: Yt,
  deactivated: Yt,
  errorCaptured: Yt,
  serverPrefetch: Yt,
  // assets
  components: Di,
  directives: Di,
  // watch
  watch: $0,
  // provide / inject
  provide: uu,
  inject: j0
};
function uu(e, t) {
  return t ? e ? function() {
    return Bt(
      He(e) ? e.call(this, this) : e,
      He(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function j0(e, t) {
  return Di(ic(e), ic(t));
}
function ic(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Yt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Di(e, t) {
  return e ? Bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fu(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Bt(
    /* @__PURE__ */ Object.create(null),
    cu(e),
    cu(t ?? {})
  ) : t;
}
function $0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Bt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Yt(e[r], t[r]);
  return n;
}
function sd() {
  return {
    app: null,
    config: {
      isNativeTag: wf,
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
let B0 = 0;
function U0(e, t) {
  return function(r, a = null) {
    He(r) || (r = Bt({}, r)), a != null && !nt(a) && (a = null);
    const s = sd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = s.app = {
      _uid: B0++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: N1,
      get config() {
        return s.config;
      },
      set config(v) {
      },
      use(v, ...d) {
        return u.has(v) || (v && He(v.install) ? (u.add(v), v.install(y, ...d)) : He(v) && (u.add(v), v(y, ...d))), y;
      },
      mixin(v) {
        return s.mixins.includes(v) || s.mixins.push(v), y;
      },
      component(v, d) {
        return d ? (s.components[v] = d, y) : s.components[v];
      },
      directive(v, d) {
        return d ? (s.directives[v] = d, y) : s.directives[v];
      },
      mount(v, d, w) {
        if (!g) {
          const M = y._ceVNode || Ct(r, a);
          return M.appContext = s, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(M, v, w), g = !0, y._container = v, v.__vue_app__ = y, Bo(M.component);
        }
      },
      onUnmount(v) {
        f.push(v);
      },
      unmount() {
        g && (Vn(
          f,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(v, d) {
        return s.provides[v] = d, y;
      },
      runWithContext(v) {
        const d = ci;
        ci = y;
        try {
          return v();
        } finally {
          ci = d;
        }
      }
    };
    return y;
  };
}
let ci = null;
const G0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Rr(t)}Modifiers`];
function K0(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || it;
  let a = n;
  const s = t.startsWith("update:"), u = s && G0(r, t.slice(7));
  u && (u.trim && (a = n.map((v) => wt(v) ? v.trim() : v)), u.number && (a = n.map(Ip)));
  let f, g = r[f = Ms(t)] || // also try camelCase event handler (#2249)
  r[f = Ms(Qt(t))];
  !g && s && (g = r[f = Ms(Rr(t))]), g && Vn(
    g,
    e,
    6,
    a
  );
  const y = r[f + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Vn(
      y,
      e,
      6,
      a
    );
  }
}
const W0 = /* @__PURE__ */ new WeakMap();
function cd(e, t, n = !1) {
  const r = n ? W0 : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const s = e.emits;
  let u = {}, f = !1;
  if (!He(e)) {
    const g = (y) => {
      const v = cd(y, t, !0);
      v && (f = !0, Bt(u, v));
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  return !s && !f ? (nt(e) && r.set(e, null), null) : (Le(s) ? s.forEach((g) => u[g] = null) : Bt(u, s), nt(e) && r.set(e, u), u);
}
function jo(e, t) {
  return !e || !Eo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, Rr(t)) || Ze(e, t));
}
function du(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [s],
    slots: u,
    attrs: f,
    emit: g,
    render: y,
    renderCache: v,
    props: d,
    data: w,
    setupState: M,
    ctx: C,
    inheritAttrs: D
  } = e, V = ho(e);
  let O, L;
  try {
    if (n.shapeFlag & 4) {
      const A = a || r, B = A;
      O = Tn(
        y.call(
          B,
          A,
          v,
          d,
          M,
          w,
          C
        )
      ), L = f;
    } else {
      const A = t;
      O = Tn(
        A.length > 1 ? A(
          d,
          { attrs: f, slots: u, emit: g }
        ) : A(
          d,
          null
        )
      ), L = t.props ? f : Y0(f);
    }
  } catch (A) {
    Bi.length = 0, Ho(A, e, 1), O = Ct(fr);
  }
  let E = O;
  if (L && D !== !1) {
    const A = Object.keys(L), { shapeFlag: B } = E;
    A.length && B & 7 && (s && A.some(To) && (L = q0(
      L,
      s
    )), E = di(E, L, !1, !0));
  }
  return n.dirs && (E = di(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Rc(E, n.transition), O = E, ho(V), O;
}
const Y0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Eo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, q0 = (e, t) => {
  const n = {};
  for (const r in e)
    (!To(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function X0(e, t, n) {
  const { props: r, children: a, component: s } = e, { props: u, children: f, patchFlag: g } = t, y = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? hu(r, u, y) : !!u;
    if (g & 8) {
      const v = t.dynamicProps;
      for (let d = 0; d < v.length; d++) {
        const w = v[d];
        if (ld(u, r, w) && !jo(y, w))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? hu(r, u, y) : !0 : !!u;
  return !1;
}
function hu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (ld(t, e, s) && !jo(n, s))
      return !0;
  }
  return !1;
}
function ld(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && nt(r) && nt(a) ? !Sc(r, a) : r !== a;
}
function Z0({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const ud = {}, fd = () => Object.create(ud), dd = (e) => Object.getPrototypeOf(e) === ud;
function J0(e, t, n, r = !1) {
  const a = {}, s = fd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hd(e, t, a, s);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ i0(a) : e.type.props ? e.props = a : e.props = s, e.attrs = s;
}
function Q0(e, t, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ Xe(a), [g] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const v = e.vnode.dynamicProps;
      for (let d = 0; d < v.length; d++) {
        let w = v[d];
        if (jo(e.emitsOptions, w))
          continue;
        const M = t[w];
        if (g)
          if (Ze(s, w))
            M !== s[w] && (s[w] = M, y = !0);
          else {
            const C = Qt(w);
            a[C] = ac(
              g,
              f,
              C,
              M,
              e,
              !1
            );
          }
        else
          M !== s[w] && (s[w] = M, y = !0);
      }
    }
  } else {
    hd(e, t, a, s) && (y = !0);
    let v;
    for (const d in f)
      (!t || // for camelCase
      !Ze(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Rr(d)) === d || !Ze(t, v))) && (g ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[v] !== void 0) && (a[d] = ac(
        g,
        f,
        d,
        void 0,
        e,
        !0
      )) : delete a[d]);
    if (s !== f)
      for (const d in s)
        (!t || !Ze(t, d)) && (delete s[d], y = !0);
  }
  y && qn(e.attrs, "set", "");
}
function hd(e, t, n, r) {
  const [a, s] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let g in t) {
      if (Oi(g))
        continue;
      const y = t[g];
      let v;
      a && Ze(a, v = Qt(g)) ? !s || !s.includes(v) ? n[v] = y : (f || (f = {}))[v] = y : jo(e.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ Xe(n), y = f || it;
    for (let v = 0; v < s.length; v++) {
      const d = s[v];
      n[d] = ac(
        a,
        g,
        d,
        y[d],
        e,
        !Ze(y, d)
      );
    }
  }
  return u;
}
function ac(e, t, n, r, a, s) {
  const u = e[n];
  if (u != null) {
    const f = Ze(u, "default");
    if (f && r === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && He(g)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const v = oa(a);
          r = y[n] = g.call(
            null,
            t
          ), v();
        }
      } else
        r = g;
      a.ce && a.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (s && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Rr(n)) && (r = !0));
  }
  return r;
}
const e1 = /* @__PURE__ */ new WeakMap();
function gd(e, t, n = !1) {
  const r = n ? e1 : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const s = e.props, u = {}, f = [];
  let g = !1;
  if (!He(e)) {
    const v = (d) => {
      g = !0;
      const [w, M] = gd(d, t, !0);
      Bt(u, w), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!s && !g)
    return nt(e) && r.set(e, ai), ai;
  if (Le(s))
    for (let v = 0; v < s.length; v++) {
      const d = Qt(s[v]);
      gu(d) && (u[d] = it);
    }
  else if (s)
    for (const v in s) {
      const d = Qt(v);
      if (gu(d)) {
        const w = s[v], M = u[d] = Le(w) || He(w) ? { type: w } : Bt({}, w), C = M.type;
        let D = !1, V = !0;
        if (Le(C))
          for (let O = 0; O < C.length; ++O) {
            const L = C[O], E = He(L) && L.name;
            if (E === "Boolean") {
              D = !0;
              break;
            } else E === "String" && (V = !1);
          }
        else
          D = He(C) && C.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = D, M[
          1
          /* shouldCastTrue */
        ] = V, (D || Ze(M, "default")) && f.push(d);
      }
    }
  const y = [u, f];
  return nt(e) && r.set(e, y), y;
}
function gu(e) {
  return e[0] !== "$" && !Oi(e);
}
const Oc = (e) => e === "_" || e === "_ctx" || e === "$stable", Fc = (e) => Le(e) ? e.map(Tn) : [Tn(e)], t1 = (e, t, n) => {
  if (t._n)
    return t;
  const r = m0((...a) => Fc(t(...a)), n);
  return r._c = !1, r;
}, pd = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (Oc(a)) continue;
    const s = e[a];
    if (He(s))
      t[a] = t1(a, s, r);
    else if (s != null) {
      const u = Fc(s);
      t[a] = () => u;
    }
  }
}, md = (e, t) => {
  const n = Fc(t);
  e.slots.default = () => n;
}, yd = (e, t, n) => {
  for (const r in t)
    (n || !Oc(r)) && (e[r] = t[r]);
}, n1 = (e, t, n) => {
  const r = e.slots = fd();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (yd(r, t, n), n && Pf(r, "_", a, !0)) : pd(t, r);
  } else t && md(e, t);
}, r1 = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let s = !0, u = it;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? s = !1 : yd(a, t, n) : (s = !t.$stable, pd(t, a)), u = t;
  } else t && (md(e, t), u = { default: 1 });
  if (s)
    for (const f in a)
      !Oc(f) && u[f] == null && delete a[f];
}, rn = c1;
function i1(e) {
  return a1(e);
}
function a1(e, t) {
  const n = Oo();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: v,
    parentNode: d,
    nextSibling: w,
    setScopeId: M = On,
    insertStaticContent: C
  } = e, D = (T, H, q, oe = null, I = null, j = null, W = void 0, ne = null, Z = !!H.dynamicChildren) => {
    if (T === H)
      return;
    T && !Si(T, H) && (oe = Gt(T), $e(T, I, j, !0), T = null), H.patchFlag === -2 && (Z = !1, H.dynamicChildren = null);
    const { type: Y, ref: me, shapeFlag: ce } = H;
    switch (Y) {
      case $o:
        V(T, H, q, oe);
        break;
      case fr:
        O(T, H, q, oe);
        break;
      case eo:
        T == null && L(H, q, oe, W);
        break;
      case tt:
        ue(
          T,
          H,
          q,
          oe,
          I,
          j,
          W,
          ne,
          Z
        );
        break;
      default:
        ce & 1 ? B(
          T,
          H,
          q,
          oe,
          I,
          j,
          W,
          ne,
          Z
        ) : ce & 6 ? le(
          T,
          H,
          q,
          oe,
          I,
          j,
          W,
          ne,
          Z
        ) : (ce & 64 || ce & 128) && Y.process(
          T,
          H,
          q,
          oe,
          I,
          j,
          W,
          ne,
          Z,
          m
        );
    }
    me != null && I ? zi(me, T && T.ref, j, H || T, !H) : me == null && T && T.ref != null && zi(T.ref, null, j, T, !0);
  }, V = (T, H, q, oe) => {
    if (T == null)
      r(
        H.el = f(H.children),
        q,
        oe
      );
    else {
      const I = H.el = T.el;
      H.children !== T.children && y(I, H.children);
    }
  }, O = (T, H, q, oe) => {
    T == null ? r(
      H.el = g(H.children || ""),
      q,
      oe
    ) : H.el = T.el;
  }, L = (T, H, q, oe) => {
    [T.el, T.anchor] = C(
      T.children,
      H,
      q,
      oe,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: H }, q, oe) => {
    let I;
    for (; T && T !== H; )
      I = w(T), r(T, q, oe), T = I;
    r(H, q, oe);
  }, A = ({ el: T, anchor: H }) => {
    let q;
    for (; T && T !== H; )
      q = w(T), a(T), T = q;
    a(H);
  }, B = (T, H, q, oe, I, j, W, ne, Z) => {
    if (H.type === "svg" ? W = "svg" : H.type === "math" && (W = "mathml"), T == null)
      te(
        H,
        q,
        oe,
        I,
        j,
        W,
        ne,
        Z
      );
    else {
      const Y = T.el && T.el._isVueCE ? T.el : null;
      try {
        Y && Y._beginPatch(), we(
          T,
          H,
          I,
          j,
          W,
          ne,
          Z
        );
      } finally {
        Y && Y._endPatch();
      }
    }
  }, te = (T, H, q, oe, I, j, W, ne) => {
    let Z, Y;
    const { props: me, shapeFlag: ce, transition: de, dirs: Me } = T;
    if (Z = T.el = u(
      T.type,
      j,
      me && me.is,
      me
    ), ce & 8 ? v(Z, T.children) : ce & 16 && Q(
      T.children,
      Z,
      null,
      oe,
      I,
      Es(T, j),
      W,
      ne
    ), Me && yr(T, null, oe, "created"), ae(Z, T, T.scopeId, W, oe), me) {
      for (const Ae in me)
        Ae !== "value" && !Oi(Ae) && s(Z, Ae, null, me[Ae], j, oe);
      "value" in me && s(Z, "value", null, me.value, j), (Y = me.onVnodeBeforeMount) && Pn(Y, oe, T);
    }
    Me && yr(T, null, oe, "beforeMount");
    const Ie = o1(I, de);
    Ie && de.beforeEnter(Z), r(Z, H, q), ((Y = me && me.onVnodeMounted) || Ie || Me) && rn(() => {
      try {
        Y && Pn(Y, oe, T), Ie && de.enter(Z), Me && yr(T, null, oe, "mounted");
      } finally {
      }
    }, I);
  }, ae = (T, H, q, oe, I) => {
    if (q && M(T, q), oe)
      for (let j = 0; j < oe.length; j++)
        M(T, oe[j]);
    if (I) {
      let j = I.subTree;
      if (H === j || xd(j.type) && (j.ssContent === H || j.ssFallback === H)) {
        const W = I.vnode;
        ae(
          T,
          W,
          W.scopeId,
          W.slotScopeIds,
          I.parent
        );
      }
    }
  }, Q = (T, H, q, oe, I, j, W, ne, Z = 0) => {
    for (let Y = Z; Y < T.length; Y++) {
      const me = T[Y] = ne ? Yn(T[Y]) : Tn(T[Y]);
      D(
        null,
        me,
        H,
        q,
        oe,
        I,
        j,
        W,
        ne
      );
    }
  }, we = (T, H, q, oe, I, j, W) => {
    const ne = H.el = T.el;
    let { patchFlag: Z, dynamicChildren: Y, dirs: me } = H;
    Z |= T.patchFlag & 16;
    const ce = T.props || it, de = H.props || it;
    let Me;
    if (q && br(q, !1), (Me = de.onVnodeBeforeUpdate) && Pn(Me, q, H, T), me && yr(H, T, q, "beforeUpdate"), q && br(q, !0), (ce.innerHTML && de.innerHTML == null || ce.textContent && de.textContent == null) && v(ne, ""), Y ? k(
      T.dynamicChildren,
      Y,
      ne,
      q,
      oe,
      Es(H, I),
      j
    ) : W || $(
      T,
      H,
      ne,
      null,
      q,
      oe,
      Es(H, I),
      j,
      !1
    ), Z > 0) {
      if (Z & 16)
        fe(ne, ce, de, q, I);
      else if (Z & 2 && ce.class !== de.class && s(ne, "class", null, de.class, I), Z & 4 && s(ne, "style", ce.style, de.style, I), Z & 8) {
        const Ie = H.dynamicProps;
        for (let Ae = 0; Ae < Ie.length; Ae++) {
          const Re = Ie[Ae], Oe = ce[Re], at = de[Re];
          (at !== Oe || Re === "value") && s(ne, Re, Oe, at, I, q);
        }
      }
      Z & 1 && T.children !== H.children && v(ne, H.children);
    } else !W && Y == null && fe(ne, ce, de, q, I);
    ((Me = de.onVnodeUpdated) || me) && rn(() => {
      Me && Pn(Me, q, H, T), me && yr(H, T, q, "updated");
    }, oe);
  }, k = (T, H, q, oe, I, j, W) => {
    for (let ne = 0; ne < H.length; ne++) {
      const Z = T[ne], Y = H[ne], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === tt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Si(Z, Y) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? d(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      D(
        Z,
        Y,
        me,
        null,
        oe,
        I,
        j,
        W,
        !0
      );
    }
  }, fe = (T, H, q, oe, I) => {
    if (H !== q) {
      if (H !== it)
        for (const j in H)
          !Oi(j) && !(j in q) && s(
            T,
            j,
            H[j],
            null,
            I,
            oe
          );
      for (const j in q) {
        if (Oi(j)) continue;
        const W = q[j], ne = H[j];
        W !== ne && j !== "value" && s(T, j, ne, W, I, oe);
      }
      "value" in q && s(T, "value", H.value, q.value, I);
    }
  }, ue = (T, H, q, oe, I, j, W, ne, Z) => {
    const Y = H.el = T ? T.el : f(""), me = H.anchor = T ? T.anchor : f("");
    let { patchFlag: ce, dynamicChildren: de, slotScopeIds: Me } = H;
    Me && (ne = ne ? ne.concat(Me) : Me), T == null ? (r(Y, q, oe), r(me, q, oe), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      q,
      me,
      I,
      j,
      W,
      ne,
      Z
    )) : ce > 0 && ce & 64 && de && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === de.length ? (k(
      T.dynamicChildren,
      de,
      q,
      I,
      j,
      W,
      ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || I && H === I.subTree) && bd(
      T,
      H,
      !0
      /* shallow */
    )) : $(
      T,
      H,
      q,
      me,
      I,
      j,
      W,
      ne,
      Z
    );
  }, le = (T, H, q, oe, I, j, W, ne, Z) => {
    H.slotScopeIds = ne, T == null ? H.shapeFlag & 512 ? I.ctx.activate(
      H,
      q,
      oe,
      W,
      Z
    ) : xe(
      H,
      q,
      oe,
      I,
      j,
      W,
      Z
    ) : ie(T, H, Z);
  }, xe = (T, H, q, oe, I, j, W) => {
    const ne = T.component = m1(
      T,
      oe,
      I
    );
    if (ed(T) && (ne.ctx.renderer = m), b1(ne, !1, W), ne.asyncDep) {
      if (I && I.registerDep(ne, he, W), !T.el) {
        const Z = ne.subTree = Ct(fr);
        O(null, Z, H, q), T.placeholder = Z.el;
      }
    } else
      he(
        ne,
        T,
        H,
        q,
        I,
        j,
        W
      );
  }, ie = (T, H, q) => {
    const oe = H.component = T.component;
    if (X0(T, H, q))
      if (oe.asyncDep && !oe.asyncResolved) {
        pe(oe, H, q);
        return;
      } else
        oe.next = H, oe.update();
    else
      H.el = T.el, oe.vnode = H;
  }, he = (T, H, q, oe, I, j, W) => {
    const ne = () => {
      if (T.isMounted) {
        let { next: ce, bu: de, u: Me, parent: Ie, vnode: Ae } = T;
        {
          const vt = vd(T);
          if (vt) {
            ce && (ce.el = Ae.el, pe(T, ce, W)), vt.asyncDep.then(() => {
              rn(() => {
                T.isUnmounted || Y();
              }, I);
            });
            return;
          }
        }
        let Re = ce, Oe;
        br(T, !1), ce ? (ce.el = Ae.el, pe(T, ce, W)) : ce = Ae, de && ks(de), (Oe = ce.props && ce.props.onVnodeBeforeUpdate) && Pn(Oe, Ie, ce, Ae), br(T, !0);
        const at = du(T), ke = T.subTree;
        T.subTree = at, D(
          ke,
          at,
          // parent may have changed if it's in a teleport
          d(ke.el),
          // anchor may have changed if it's in a fragment
          Gt(ke),
          T,
          I,
          j
        ), ce.el = at.el, Re === null && Z0(T, at.el), Me && rn(Me, I), (Oe = ce.props && ce.props.onVnodeUpdated) && rn(
          () => Pn(Oe, Ie, ce, Ae),
          I
        );
      } else {
        let ce;
        const { el: de, props: Me } = H, { bm: Ie, m: Ae, parent: Re, root: Oe, type: at } = T, ke = ji(H);
        br(T, !1), Ie && ks(Ie), !ke && (ce = Me && Me.onVnodeBeforeMount) && Pn(ce, Re, H), br(T, !0);
        {
          Oe.ce && Oe.ce._hasShadowRoot() && Oe.ce._injectChildStyle(
            at,
            T.parent ? T.parent.type : void 0
          );
          const vt = T.subTree = du(T);
          D(
            null,
            vt,
            q,
            oe,
            T,
            I,
            j
          ), H.el = vt.el;
        }
        if (Ae && rn(Ae, I), !ke && (ce = Me && Me.onVnodeMounted)) {
          const vt = H;
          rn(
            () => Pn(ce, Re, vt),
            I
          );
        }
        (H.shapeFlag & 256 || Re && ji(Re.vnode) && Re.vnode.shapeFlag & 256) && T.a && rn(T.a, I), T.isMounted = !0, H = q = oe = null;
      }
    };
    T.scope.on();
    const Z = T.effect = new Df(ne);
    T.scope.off();
    const Y = T.update = Z.run.bind(Z), me = T.job = Z.runIfDirty.bind(Z);
    me.i = T, me.id = T.uid, Z.scheduler = () => Ec(me), br(T, !0), Y();
  }, pe = (T, H, q) => {
    H.component = T;
    const oe = T.vnode.props;
    T.vnode = H, T.next = null, Q0(T, H.props, oe, q), r1(T, H.children, q), Jn(), iu(T), Qn();
  }, $ = (T, H, q, oe, I, j, W, ne, Z = !1) => {
    const Y = T && T.children, me = T ? T.shapeFlag : 0, ce = H.children, { patchFlag: de, shapeFlag: Me } = H;
    if (de > 0) {
      if (de & 128) {
        De(
          Y,
          ce,
          q,
          oe,
          I,
          j,
          W,
          ne,
          Z
        );
        return;
      } else if (de & 256) {
        be(
          Y,
          ce,
          q,
          oe,
          I,
          j,
          W,
          ne,
          Z
        );
        return;
      }
    }
    Me & 8 ? (me & 16 && bt(Y, I, j), ce !== Y && v(q, ce)) : me & 16 ? Me & 16 ? De(
      Y,
      ce,
      q,
      oe,
      I,
      j,
      W,
      ne,
      Z
    ) : bt(Y, I, j, !0) : (me & 8 && v(q, ""), Me & 16 && Q(
      ce,
      q,
      oe,
      I,
      j,
      W,
      ne,
      Z
    ));
  }, be = (T, H, q, oe, I, j, W, ne, Z) => {
    T = T || ai, H = H || ai;
    const Y = T.length, me = H.length, ce = Math.min(Y, me);
    let de;
    for (de = 0; de < ce; de++) {
      const Me = H[de] = Z ? Yn(H[de]) : Tn(H[de]);
      D(
        T[de],
        Me,
        q,
        null,
        I,
        j,
        W,
        ne,
        Z
      );
    }
    Y > me ? bt(
      T,
      I,
      j,
      !0,
      !1,
      ce
    ) : Q(
      H,
      q,
      oe,
      I,
      j,
      W,
      ne,
      Z,
      ce
    );
  }, De = (T, H, q, oe, I, j, W, ne, Z) => {
    let Y = 0;
    const me = H.length;
    let ce = T.length - 1, de = me - 1;
    for (; Y <= ce && Y <= de; ) {
      const Me = T[Y], Ie = H[Y] = Z ? Yn(H[Y]) : Tn(H[Y]);
      if (Si(Me, Ie))
        D(
          Me,
          Ie,
          q,
          null,
          I,
          j,
          W,
          ne,
          Z
        );
      else
        break;
      Y++;
    }
    for (; Y <= ce && Y <= de; ) {
      const Me = T[ce], Ie = H[de] = Z ? Yn(H[de]) : Tn(H[de]);
      if (Si(Me, Ie))
        D(
          Me,
          Ie,
          q,
          null,
          I,
          j,
          W,
          ne,
          Z
        );
      else
        break;
      ce--, de--;
    }
    if (Y > ce) {
      if (Y <= de) {
        const Me = de + 1, Ie = Me < me ? H[Me].el : oe;
        for (; Y <= de; )
          D(
            null,
            H[Y] = Z ? Yn(H[Y]) : Tn(H[Y]),
            q,
            Ie,
            I,
            j,
            W,
            ne,
            Z
          ), Y++;
      }
    } else if (Y > de)
      for (; Y <= ce; )
        $e(T[Y], I, j, !0), Y++;
    else {
      const Me = Y, Ie = Y, Ae = /* @__PURE__ */ new Map();
      for (Y = Ie; Y <= de; Y++) {
        const Kt = H[Y] = Z ? Yn(H[Y]) : Tn(H[Y]);
        Kt.key != null && Ae.set(Kt.key, Y);
      }
      let Re, Oe = 0;
      const at = de - Ie + 1;
      let ke = !1, vt = 0;
      const kn = new Array(at);
      for (Y = 0; Y < at; Y++) kn[Y] = 0;
      for (Y = Me; Y <= ce; Y++) {
        const Kt = T[Y];
        if (Oe >= at) {
          $e(Kt, I, j, !0);
          continue;
        }
        let Nt;
        if (Kt.key != null)
          Nt = Ae.get(Kt.key);
        else
          for (Re = Ie; Re <= de; Re++)
            if (kn[Re - Ie] === 0 && Si(Kt, H[Re])) {
              Nt = Re;
              break;
            }
        Nt === void 0 ? $e(Kt, I, j, !0) : (kn[Nt - Ie] = Y + 1, Nt >= vt ? vt = Nt : ke = !0, D(
          Kt,
          H[Nt],
          q,
          null,
          I,
          j,
          W,
          ne,
          Z
        ), Oe++);
      }
      const _t = ke ? s1(kn) : ai;
      for (Re = _t.length - 1, Y = at - 1; Y >= 0; Y--) {
        const Kt = Ie + Y, Nt = H[Kt], Hn = H[Kt + 1], Lr = Kt + 1 < me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Hn.el || _d(Hn)
        ) : oe;
        kn[Y] === 0 ? D(
          null,
          Nt,
          q,
          Lr,
          I,
          j,
          W,
          ne,
          Z
        ) : ke && (Re < 0 || Y !== _t[Re] ? Te(Nt, q, Lr, 2) : Re--);
      }
    }
  }, Te = (T, H, q, oe, I = null) => {
    const { el: j, type: W, transition: ne, children: Z, shapeFlag: Y } = T;
    if (Y & 6) {
      Te(T.component.subTree, H, q, oe);
      return;
    }
    if (Y & 128) {
      T.suspense.move(H, q, oe);
      return;
    }
    if (Y & 64) {
      W.move(T, H, q, m);
      return;
    }
    if (W === tt) {
      r(j, H, q);
      for (let ce = 0; ce < Z.length; ce++)
        Te(Z[ce], H, q, oe);
      r(T.anchor, H, q);
      return;
    }
    if (W === eo) {
      E(T, H, q);
      return;
    }
    if (oe !== 2 && Y & 1 && ne)
      if (oe === 0)
        ne.beforeEnter(j), r(j, H, q), rn(() => ne.enter(j), I);
      else {
        const { leave: ce, delayLeave: de, afterLeave: Me } = ne, Ie = () => {
          T.ctx.isUnmounted ? a(j) : r(j, H, q);
        }, Ae = () => {
          j._isLeaving && j[S0](
            !0
            /* cancelled */
          ), ce(j, () => {
            Ie(), Me && Me();
          });
        };
        de ? de(j, Ie, Ae) : Ae();
      }
    else
      r(j, H, q);
  }, $e = (T, H, q, oe = !1, I = !1) => {
    const {
      type: j,
      props: W,
      ref: ne,
      children: Z,
      dynamicChildren: Y,
      shapeFlag: me,
      patchFlag: ce,
      dirs: de,
      cacheIndex: Me,
      memo: Ie
    } = T;
    if (ce === -2 && (I = !1), ne != null && (Jn(), zi(ne, null, q, T, !0), Qn()), Me != null && (H.renderCache[Me] = void 0), me & 256) {
      H.ctx.deactivate(T);
      return;
    }
    const Ae = me & 1 && de, Re = !ji(T);
    let Oe;
    if (Re && (Oe = W && W.onVnodeBeforeUnmount) && Pn(Oe, H, T), me & 6)
      Ut(T.component, q, oe);
    else {
      if (me & 128) {
        T.suspense.unmount(q, oe);
        return;
      }
      Ae && yr(T, null, H, "beforeUnmount"), me & 64 ? T.type.remove(
        T,
        H,
        q,
        m,
        oe
      ) : Y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== tt || ce > 0 && ce & 64) ? bt(
        Y,
        H,
        q,
        !1,
        !0
      ) : (j === tt && ce & 384 || !I && me & 16) && bt(Z, H, q), oe && Qe(T);
    }
    const at = Ie != null && Me == null;
    (Re && (Oe = W && W.onVnodeUnmounted) || Ae || at) && rn(() => {
      Oe && Pn(Oe, H, T), Ae && yr(T, null, H, "unmounted"), at && (T.el = null);
    }, q);
  }, Qe = (T) => {
    const { type: H, el: q, anchor: oe, transition: I } = T;
    if (H === tt) {
      dt(q, oe);
      return;
    }
    if (H === eo) {
      A(T);
      return;
    }
    const j = () => {
      a(q), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (T.shapeFlag & 1 && I && !I.persisted) {
      const { leave: W, delayLeave: ne } = I, Z = () => W(q, j);
      ne ? ne(T.el, j, Z) : Z();
    } else
      j();
  }, dt = (T, H) => {
    let q;
    for (; T !== H; )
      q = w(T), a(T), T = q;
    a(H);
  }, Ut = (T, H, q) => {
    const { bum: oe, scope: I, job: j, subTree: W, um: ne, m: Z, a: Y } = T;
    pu(Z), pu(Y), oe && ks(oe), I.stop(), j && (j.flags |= 8, $e(W, T, H, q)), ne && rn(ne, H), rn(() => {
      T.isUnmounted = !0;
    }, H);
  }, bt = (T, H, q, oe = !1, I = !1, j = 0) => {
    for (let W = j; W < T.length; W++)
      $e(T[W], H, q, oe, I);
  }, Gt = (T) => {
    if (T.shapeFlag & 6)
      return Gt(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const H = w(T.anchor || T.el), q = H && H[x0];
    return q ? w(q) : H;
  };
  let sn = !1;
  const hn = (T, H, q) => {
    let oe;
    T == null ? H._vnode && ($e(H._vnode, null, null, !0), oe = H._vnode.component) : D(
      H._vnode || null,
      T,
      H,
      null,
      null,
      null,
      q
    ), H._vnode = T, sn || (sn = !0, iu(oe), Yf(), sn = !1);
  }, m = {
    p: D,
    um: $e,
    m: Te,
    r: Qe,
    mt: xe,
    mc: Q,
    pc: $,
    pbc: k,
    n: Gt,
    o: e
  };
  return {
    render: hn,
    hydrate: void 0,
    createApp: U0(hn)
  };
}
function Es({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function br({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function o1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function bd(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (Le(r) && Le(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = Yn(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && bd(u, f)), f.type === $o && (f.patchFlag === -1 && (f = a[s] = Yn(f)), f.el = u.el), f.type === fr && !f.el && (f.el = u.el);
    }
}
function s1(e) {
  const t = e.slice(), n = [0];
  let r, a, s, u, f;
  const g = e.length;
  for (r = 0; r < g; r++) {
    const y = e[r];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[r] = a, n.push(r);
        continue;
      }
      for (s = 0, u = n.length - 1; s < u; )
        f = s + u >> 1, e[n[f]] < y ? s = f + 1 : u = f;
      y < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, u = n[s - 1]; s-- > 0; )
    n[s] = u, u = t[u];
  return n;
}
function vd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vd(t);
}
function pu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function _d(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? _d(t.subTree) : null;
}
const xd = (e) => e.__isSuspense;
function c1(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : p0(e);
}
const tt = /* @__PURE__ */ Symbol.for("v-fgt"), $o = /* @__PURE__ */ Symbol.for("v-txt"), fr = /* @__PURE__ */ Symbol.for("v-cmt"), eo = /* @__PURE__ */ Symbol.for("v-stc"), Bi = [];
let dn = null;
function Ce(e = !1) {
  Bi.push(dn = e ? null : []);
}
function l1() {
  Bi.pop(), dn = Bi[Bi.length - 1] || null;
}
let Qi = 1;
function mu(e, t = !1) {
  Qi += e, e < 0 && dn && t && (dn.hasOnce = !0);
}
function wd(e) {
  return e.dynamicChildren = Qi > 0 ? dn || ai : null, l1(), Qi > 0 && dn && dn.push(e), e;
}
function Ee(e, t, n, r, a, s) {
  return wd(
    se(
      e,
      t,
      n,
      r,
      a,
      s,
      !0
    )
  );
}
function pi(e, t, n, r, a) {
  return wd(
    Ct(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Sd(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Si(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nd = ({ key: e }) => e ?? null, to = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? wt(e) || /* @__PURE__ */ $t(e) || He(e) ? { i: fn, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, r = 0, a = null, s = e === tt ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nd(t),
    ref: t && to(t),
    scopeId: Xf,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: fn
  };
  return f ? (Vc(g, n), s & 128 && e.normalize(g)) : n && (g.shapeFlag |= wt(n) ? 8 : 16), Qi > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  dn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && dn.push(g), g;
}
const Ct = u1;
function u1(e, t = null, n = null, r = 0, a = null, s = !1) {
  if ((!e || e === id) && (e = fr), Sd(e)) {
    const f = di(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vc(f, n), Qi > 0 && !s && dn && (f.shapeFlag & 6 ? dn[dn.indexOf(e)] = f : dn.push(f)), f.patchFlag = -2, f;
  }
  if (S1(e) && (e = e.__vccOpts), t) {
    t = f1(t);
    let { class: f, style: g } = t;
    f && !wt(f) && (t.class = xt(f)), nt(g) && (/* @__PURE__ */ Ic(g) && !Le(g) && (g = Bt({}, g)), t.style = qt(g));
  }
  const u = wt(e) ? 1 : xd(e) ? 128 : w0(e) ? 64 : nt(e) ? 4 : He(e) ? 2 : 0;
  return se(
    e,
    t,
    n,
    r,
    a,
    u,
    s,
    !0
  );
}
function f1(e) {
  return e ? /* @__PURE__ */ Ic(e) || dd(e) ? Bt({}, e) : e : null;
}
function di(e, t, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = e, y = t ? Md(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && Nd(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Le(s) ? s.concat(to(t)) : [s, to(t)] : to(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== tt ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: g,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && di(e.ssContent),
    ssFallback: e.ssFallback && di(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return g && r && Rc(
    v,
    g.clone(v)
  ), v;
}
function d1(e = " ", t = 0) {
  return Ct($o, null, e, t);
}
function h1(e, t) {
  const n = Ct(eo, null, e);
  return n.staticCount = t, n;
}
function on(e = "", t = !1) {
  return t ? (Ce(), pi(fr, null, e)) : Ct(fr, null, e);
}
function Tn(e) {
  return e == null || typeof e == "boolean" ? Ct(fr) : Le(e) ? Ct(
    tt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sd(e) ? Yn(e) : Ct($o, null, String(e));
}
function Yn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : di(e);
}
function Vc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Le(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Vc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !dd(t) ? t._ctx = fn : a === 3 && fn && (fn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else He(t) ? (t = { default: t, _ctx: fn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [d1(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Md(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = xt([t.class, r.class]));
      else if (a === "style")
        t.style = qt([t.style, r.style]);
      else if (Eo(a)) {
        const s = t[a], u = r[a];
        u && s !== u && !(Le(s) && s.includes(u)) ? t[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !To(a) && (t[a] = u);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function Pn(e, t, n, r = null) {
  Vn(e, t, 7, [
    n,
    r
  ]);
}
const g1 = sd();
let p1 = 0;
function m1(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || g1, s = {
    uid: p1++,
    vnode: e,
    type: r,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Vp(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: gd(r, a),
    emitsOptions: cd(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: it,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: it,
    data: it,
    props: it,
    attrs: it,
    slots: it,
    refs: it,
    setupState: it,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = K0.bind(null, s), e.ce && e.ce(s), s;
}
let jt = null;
const y1 = () => jt || fn;
let mo, oc;
{
  const e = Oo(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  mo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => jt = n
  ), oc = t(
    "__VUE_SSR_SETTERS__",
    (n) => ea = n
  );
}
const oa = (e) => {
  const t = jt;
  return mo(e), e.scope.on(), () => {
    e.scope.off(), mo(t);
  };
}, yu = () => {
  jt && jt.scope.off(), mo(null);
};
function kd(e) {
  return e.vnode.shapeFlag & 4;
}
let ea = !1;
function b1(e, t = !1, n = !1) {
  t && oc(t);
  const { props: r, children: a } = e.vnode, s = kd(e);
  J0(e, r, s, t), n1(e, a, n || t);
  const u = s ? v1(e, t) : void 0;
  return t && oc(!1), u;
}
function v1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, F0);
  const { setup: r } = n;
  if (r) {
    Jn();
    const a = e.setupContext = r.length > 1 ? x1(e) : null, s = oa(e), u = aa(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = Nf(u);
    if (Qn(), s(), (f || e.sp) && !ji(e) && Qf(e), f) {
      if (u.then(yu, yu), t)
        return u.then((g) => {
          bu(e, g);
        }).catch((g) => {
          Ho(g, e, 0);
        });
      e.asyncDep = u;
    } else
      bu(e, u);
  } else
    Pd(e);
}
function bu(e, t, n) {
  He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) && (e.setupState = Gf(t)), Pd(e);
}
function Pd(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || On);
  {
    const a = oa(e);
    Jn();
    try {
      V0(e);
    } finally {
      Qn(), a();
    }
  }
}
const _1 = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function x1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, _1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gf(a0(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in $i)
        return $i[n](e);
    },
    has(t, n) {
      return n in t || n in $i;
    }
  })) : e.proxy;
}
function w1(e, t = !0) {
  return He(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function S1(e) {
  return He(e) && "__vccOpts" in e;
}
const Pr = (e, t) => /* @__PURE__ */ u0(e, t, ea), N1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let sc;
const vu = typeof window < "u" && window.trustedTypes;
if (vu)
  try {
    sc = /* @__PURE__ */ vu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Cd = sc ? (e) => sc.createHTML(e) : (e) => e, M1 = "http://www.w3.org/2000/svg", k1 = "http://www.w3.org/1998/Math/MathML", Kn = typeof document < "u" ? document : null, _u = Kn && /* @__PURE__ */ Kn.createElement("template"), P1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Kn.createElementNS(M1, e) : t === "mathml" ? Kn.createElementNS(k1, e) : n ? Kn.createElement(e, { is: n }) : Kn.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Kn.createTextNode(e),
  createComment: (e) => Kn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, s) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      _u.innerHTML = Cd(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = _u.content;
      if (r === "svg" || r === "mathml") {
        const g = f.firstChild;
        for (; g.firstChild; )
          f.appendChild(g.firstChild);
        f.removeChild(g);
      }
      t.insertBefore(f, n);
    }
    return [
      // first
      u ? u.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, C1 = /* @__PURE__ */ Symbol("_vtc");
function A1(e, t, n) {
  const r = e[C1];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yo = /* @__PURE__ */ Symbol("_vod"), Ad = /* @__PURE__ */ Symbol("_vsh"), Hc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[yo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ni(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ni(e, !0), r.enter(e)) : r.leave(e, () => {
      Ni(e, !1);
    }) : Ni(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ni(e, t);
  }
};
function Ni(e, t) {
  e.style.display = t ? e[yo] : "none", e[Ad] = !t;
}
const I1 = /* @__PURE__ */ Symbol(""), D1 = /(?:^|;)\s*display\s*:/;
function E1(e, t, n) {
  const r = e.style, a = wt(n);
  let s = !1;
  if (n && !a) {
    if (t)
      if (wt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && no(r, f, "");
        }
      else
        for (const u in t)
          n[u] == null && no(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), no(r, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = r[I1];
      u && (n += ";" + u), r.cssText = n, s = D1.test(n);
    }
  } else t && e.removeAttribute("style");
  yo in e && (e[yo] = s ? r.display : "", e[Ad] && (r.display = "none"));
}
const xu = /\s*!important$/;
function no(e, t, n) {
  if (Le(n))
    n.forEach((r) => no(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = T1(e, t);
    xu.test(n) ? e.setProperty(
      Rr(r),
      n.replace(xu, ""),
      "important"
    ) : e[r] = n;
  }
}
const wu = ["Webkit", "Moz", "ms"], Ts = {};
function T1(e, t) {
  const n = Ts[t];
  if (n)
    return n;
  let r = Qt(t);
  if (r !== "filter" && r in e)
    return Ts[t] = r;
  r = Lo(r);
  for (let a = 0; a < wu.length; a++) {
    const s = wu[a] + r;
    if (s in e)
      return Ts[t] = s;
  }
  return t;
}
const Su = "http://www.w3.org/1999/xlink";
function Nu(e, t, n, r, a, s = Op(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Su, t.slice(6, t.length)) : e.setAttributeNS(Su, t, n) : n == null || s && !Cf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Fn(n) ? String(n) : n
  );
}
function Mu(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Cd(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? e.getAttribute("value") || "" : e.value, g = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== g || !("_value" in e)) && (e.value = g), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Cf(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function R1(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function L1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ku = /* @__PURE__ */ Symbol("_vei");
function O1(e, t, n, r, a = null) {
  const s = e[ku] || (e[ku] = {}), u = s[t];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = F1(t);
    if (r) {
      const y = s[t] = z1(
        r,
        a
      );
      R1(e, f, y, g);
    } else u && (L1(e, f, u, g), s[t] = void 0);
  }
}
const Pu = /(?:Once|Passive|Capture)$/;
function F1(e) {
  let t;
  if (Pu.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Pu); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rr(e.slice(2)), t];
}
let Rs = 0;
const V1 = /* @__PURE__ */ Promise.resolve(), H1 = () => Rs || (V1.then(() => Rs = 0), Rs = Date.now());
function z1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Vn(
      j1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = H1(), n;
}
function j1(e, t) {
  if (Le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const Cu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $1 = (e, t, n, r, a, s) => {
  const u = a === "svg";
  t === "class" ? A1(e, r, u) : t === "style" ? E1(e, n, r) : Eo(t) ? To(t) || O1(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : B1(e, t, r, u)) ? (Mu(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nu(e, t, r, u, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (U1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !wt(r))) ? Mu(e, Qt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Nu(e, t, r, u));
};
function B1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cu(t) && He(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Cu(t) && wt(n) ? !1 : t in e;
}
function U1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Qt(t);
  return Array.isArray(n) ? n.some((a) => Qt(a) === r) : Object.keys(n).some((a) => Qt(a) === r);
}
const G1 = ["ctrl", "shift", "alt", "meta"], K1 = {
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
  exact: (e, t) => G1.some((n) => e[`${n}Key`] && !t.includes(n))
}, Id = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < t.length; u++) {
      const f = K1[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...s);
  }));
}, W1 = /* @__PURE__ */ Bt({ patchProp: $1 }, P1);
let Au;
function Y1() {
  return Au || (Au = i1(W1));
}
const q1 = ((...e) => {
  const t = Y1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = Z1(r);
    if (!a) return;
    const s = t._component;
    !He(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, X1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function X1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Z1(e) {
  return wt(e) ? document.querySelector(e) : e;
}
const gt = Math.PI / 180, Dd = Math.PI * 2, J1 = 2048;
function rt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function dr(e, t, n) {
  return { x: e, y: t, z: n };
}
function bo(e, t) {
  return dr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ii(e, t) {
  return dr(e.x * t, e.y * t, e.z * t);
}
function ro(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Iu(e, t) {
  return dr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ei(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return dr(e.x / t, e.y / t, e.z / t);
}
function Q1(e, t) {
  const n = Number(e || 0) * gt, r = Number(t || 0) * gt, a = Math.cos(r);
  return dr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function io(e, t, n = 0) {
  const r = Q1(e, t);
  let a = dr(0, 1, 0);
  Math.abs(ro(r, a)) > 0.999 && (a = dr(0, 0, 1));
  let s = Ei(Iu(a, r)), u = Ei(Iu(r, s));
  const f = Number(n || 0) * gt, g = Math.cos(f), y = Math.sin(f), v = bo(ii(s, g), ii(u, y)), d = bo(ii(s, -y), ii(u, g));
  return s = Ei(v), u = Ei(d), { fwd: r, right: s, up: u };
}
function em(e, t) {
  const n = (Number(e || 0) - 0.5) * Dd, r = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(r);
  return dr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Du(e, t, n = 1) {
  const r = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, J1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Eu(e, t, n) {
  const r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(r) || "shader compile failed";
    throw e.deleteShader(r), new Error(a);
  }
  return r;
}
function Ls(e, t, n) {
  const r = Eu(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Eu(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(r), u;
  }
  const s = e.createProgram();
  if (e.attachShader(s, r), e.attachShader(s, a), e.linkProgram(s), e.deleteShader(r), e.deleteShader(a), !e.getProgramParameter(s, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(s) || "program link failed";
    throw e.deleteProgram(s), new Error(u);
  }
  return s;
}
const Os = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, tm = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_background;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform vec2 u_viewport;
uniform float u_opacity;
uniform int u_coverage;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectCameraUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  if (u_coverage == 180) {
    if (abs(lon) > PI * 0.5) return vec2(-1.0, -1.0);
    float localU = clamp(lon / PI + 0.5, 0.0, 1.0);
    return vec2(localU, clamp(0.5 - lat / PI, 0.0, 1.0));
  }
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 sampleUv = unwrapUv();
  bool bgVisible = true;
  if (u_mode == 1 || u_mode == 2) {
    sampleUv = projectCameraUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  if (sampleUv.x < 0.0 || sampleUv.y < 0.0) {
    bgVisible = false;
    sampleUv = vec2(0.5, 0.5);
  }
  vec4 bg = bgVisible ? texture(u_background, sampleUv) : vec4(0.0);

  float bgAlpha = clamp(bg.a * u_opacity, 0.0, 1.0);
  vec3 premul = bg.rgb * u_opacity;
  float alpha = bgAlpha;
  outColor = vec4(premul, alpha);
}`, nm = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_paint;
uniform sampler2D u_mask;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform float u_paintOpacity;
uniform float u_maskOpacity;
uniform int u_hasPaint;
uniform int u_hasMask;
uniform int u_showMaskTint;
uniform vec3 u_maskTint;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectLayerUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 layerUv = unwrapUv();
  if (u_mode == 1 || u_mode == 2) {
    layerUv = projectLayerUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  vec4 paint = u_hasPaint == 1 ? texture(u_paint, layerUv) : vec4(0.0);
  vec4 mask = u_hasMask == 1 ? texture(u_mask, layerUv) : vec4(0.0);
  vec3 premul = vec3(0.0);
  float alpha = 0.0;
  if (u_hasPaint == 1) {
    float paintAlpha = clamp(paint.a * u_paintOpacity, 0.0, 1.0);
    premul = paint.rgb * u_paintOpacity + premul * (1.0 - paintAlpha);
    alpha = paintAlpha + alpha * (1.0 - paintAlpha);
  }
  if (u_hasMask == 1 && u_showMaskTint == 1) {
    float maskAlpha = clamp(mask.a * u_maskOpacity, 0.0, 1.0);
    premul = u_maskTint * maskAlpha + premul * (1.0 - maskAlpha);
    alpha = maskAlpha + alpha * (1.0 - maskAlpha);
  }
  outColor = vec4(premul, alpha);
}`, rm = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_texture;
uniform int u_mode;

uniform vec3 u_viewRight;
uniform vec3 u_viewUp;
uniform vec3 u_viewFwd;
uniform float u_viewHfov;
uniform float u_viewVfov;

uniform vec3 u_stickerRight;
uniform vec3 u_stickerUp;
uniform vec3 u_stickerFwd;
uniform float u_stickerTanX;
uniform float u_stickerTanY;
uniform vec4 u_crop;
uniform float u_opacity;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 dirFromUnwrapUv(vec2 uv) {
  float lon = (uv.x - 0.5) * TWO_PI;
  float lat = (0.5 - uv.y) * PI;
  float cp = cos(lat);
  return vec3(cp * sin(lon), sin(lat), cp * cos(lon));
}

vec3 dirFromProjectedView(vec2 uv) {
  float nx = (uv.x * 2.0 - 1.0) * tan(u_viewHfov * 0.5);
  float ny = (1.0 - uv.y * 2.0) * tan(u_viewVfov * 0.5);
  return normalize(u_viewFwd + u_viewRight * nx + u_viewUp * ny);
}

void main() {
  vec3 dir = (u_mode == 0) ? dirFromUnwrapUv(v_uv) : dirFromProjectedView(v_uv);
  float dz = dot(dir, u_stickerFwd);
  if (dz <= 1e-5) discard;

  float px = dot(dir, u_stickerRight) / dz;
  float py = dot(dir, u_stickerUp) / dz;
  float fullU = px / max(u_stickerTanX, 1e-6) * 0.5 + 0.5;
  float fullV = 0.5 - py / max(u_stickerTanY, 1e-6) * 0.5;

  if (fullU < u_crop.x || fullU > u_crop.z || fullV < u_crop.y || fullV > u_crop.w) discard;

  vec2 cropSize = max(u_crop.zw - u_crop.xy, vec2(1e-4));
  vec2 texUv = vec2((fullU - u_crop.x) / cropSize.x, (fullV - u_crop.y) / cropSize.y);
  vec4 texel = texture(u_texture, texUv);
  float alpha = clamp(texel.a * u_opacity, 0.0, 1.0);
  outColor = vec4(texel.rgb * u_opacity, alpha);
}`;
function Mi(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const r = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(rt(r, 1, 179) * gt * 0.5) * (n / Math.max(t, 1))) / gt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: rt(r, 1, 179),
    vFovDeg: rt(a, 0.1, 179)
  };
}
function im(e) {
  const t = io(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(rt(Number(e.hFovDeg), 0.1, 179) * 0.5 * gt),
    tanY: Math.tan(rt(Number(e.vFovDeg), 0.1, 179) * 0.5 * gt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: rt(Number(e.opacity ?? 1), 0, 1)
  };
}
function am(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, v = null, d = null, w = null, M = !1, C = Du(1, 1, 1), D = null, V = null, O = null, L = null, E = null;
  const A = /* @__PURE__ */ new Map();
  let B = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, te = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, ae = {
    paint: !1,
    mask: !1
  };
  function Q(I = null, j = null) {
    const W = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, W), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, I ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, j ?? n.CLAMP_TO_EDGE), W;
  }
  function we() {
    if (M) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = Ls(n, Os, tm), a = Ls(n, Os, nm), s = Ls(n, Os, rm), D = {
        mode: n.getUniformLocation(r, "u_mode"),
        yaw: n.getUniformLocation(r, "u_yaw"),
        pitch: n.getUniformLocation(r, "u_pitch"),
        roll: n.getUniformLocation(r, "u_roll"),
        hFov: n.getUniformLocation(r, "u_hfov"),
        vFov: n.getUniformLocation(r, "u_vfov"),
        viewport: n.getUniformLocation(r, "u_viewport"),
        opacity: n.getUniformLocation(r, "u_opacity"),
        coverage: n.getUniformLocation(r, "u_coverage"),
        background: n.getUniformLocation(r, "u_background")
      }, V = {
        mode: n.getUniformLocation(a, "u_mode"),
        yaw: n.getUniformLocation(a, "u_yaw"),
        pitch: n.getUniformLocation(a, "u_pitch"),
        roll: n.getUniformLocation(a, "u_roll"),
        hFov: n.getUniformLocation(a, "u_hfov"),
        vFov: n.getUniformLocation(a, "u_vfov"),
        paintOpacity: n.getUniformLocation(a, "u_paintOpacity"),
        maskOpacity: n.getUniformLocation(a, "u_maskOpacity"),
        hasPaint: n.getUniformLocation(a, "u_hasPaint"),
        hasMask: n.getUniformLocation(a, "u_hasMask"),
        showMaskTint: n.getUniformLocation(a, "u_showMaskTint"),
        maskTint: n.getUniformLocation(a, "u_maskTint"),
        paint: n.getUniformLocation(a, "u_paint"),
        mask: n.getUniformLocation(a, "u_mask")
      }, O = {
        texture: n.getUniformLocation(s, "u_texture"),
        mode: n.getUniformLocation(s, "u_mode"),
        viewRight: n.getUniformLocation(s, "u_viewRight"),
        viewUp: n.getUniformLocation(s, "u_viewUp"),
        viewFwd: n.getUniformLocation(s, "u_viewFwd"),
        viewHfov: n.getUniformLocation(s, "u_viewHfov"),
        viewVfov: n.getUniformLocation(s, "u_viewVfov"),
        stickerRight: n.getUniformLocation(s, "u_stickerRight"),
        stickerUp: n.getUniformLocation(s, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(s, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(s, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(s, "u_stickerTanY"),
        crop: n.getUniformLocation(s, "u_crop"),
        opacity: n.getUniformLocation(s, "u_opacity")
      }, u = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, u), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        1
      ]), n.STATIC_DRAW), f = Q(n.REPEAT, n.CLAMP_TO_EDGE), g = Q(n.REPEAT, n.CLAMP_TO_EDGE), y = Q(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function k() {
    var I;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), y && n.deleteTexture(y), A.forEach((j) => {
          De(j);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (I = n.getExtension("WEBGL_lose_context")) == null || I.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, A.clear(), v = null, d = null, w = null, te = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, ae = {
        paint: !1,
        mask: !1
      }, L = null, E = null, M = !1;
    }
  }
  function fe(I, j, W = 1) {
    C = Du(I, j, W), (t.width !== C.width || t.height !== C.height) && (t.width = C.width, t.height = C.height);
  }
  function ue(I) {
    I === "background" ? v = null : I === "paint" ? d = null : w = null, te[I] && (te[I].width = 0, te[I].height = 0);
  }
  function le() {
    ae.paint = !1, ae.mask = !1;
  }
  function xe(I) {
    le(), I === "paint" ? ae.paint = !0 : I === "mask" && (ae.mask = !0);
  }
  function ie(I, j, W = [], ne = { width: 0, height: 0 }, Z = !1) {
    if (!n || !I || !j) return !1;
    const Y = Number(j.width || j.videoWidth || j.naturalWidth || 0), me = Number(j.height || j.videoHeight || j.naturalHeight || 0);
    if (!(Y > 1) || !(me > 1)) return !1;
    const ce = Array.isArray(W) ? W.filter((de) => de && de.w > 0 && de.h > 0) : [];
    if (!ce.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Z ? 1 : 0), ne.width !== Y || ne.height !== me)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, j), ne.width = Y, ne.height = me, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (L || (L = document.createElement("canvas"), E = L.getContext("2d")), !E)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, j), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const de of ce) {
      const Me = Math.max(0, Math.floor(Number(de.x || 0))), Ie = Math.max(0, Math.floor(Number(de.y || 0))), Ae = Math.min(Y - Me, Math.ceil(Number(de.w || 0))), Re = Math.min(me - Ie, Math.ceil(Number(de.h || 0)));
      if (!(Ae <= 0 || Re <= 0)) {
        if (L.width !== Ae || L.height !== Re) {
          if (L.width = Ae, L.height = Re, E = L.getContext("2d"), !E)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, j), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          E.clearRect(0, 0, Ae, Re);
        E.drawImage(j, Me, Ie, Ae, Re, 0, 0, Ae, Re), n.texSubImage2D(n.TEXTURE_2D, 0, Me, Ie, n.RGBA, n.UNSIGNED_BYTE, L);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function he(I, j, W, ne, Z = null, Y = !1) {
    if (!we()) return !1;
    if (!W)
      return ue(I), !1;
    const me = String(ne ?? ""), ce = I === "background" ? v : I === "paint" ? d : w, de = te[I], Me = Number(W.width || W.videoWidth || W.naturalWidth || 0), Ie = Number(W.height || W.videoHeight || W.naturalHeight || 0), Ae = de.width !== Me || de.height !== Ie;
    if (ce === me && !Ae && !(Array.isArray(Z) && Z.length)) return !0;
    if (!(Me > 0) || !(Ie > 0))
      return ue(I), !1;
    if (n.bindTexture(n.TEXTURE_2D, j), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y ? 1 : 0), !(Array.isArray(Z) && Z.length ? ie(j, W, Z, de, Y) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, W), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ue(I), !1;
      de.width = Me, de.height = Ie;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), I === "background" ? v = me : I === "paint" ? d = me : w = me, !0;
  }
  function pe(I, j) {
    return he("background", f, I, j, null, !0);
  }
  function $(I, j, W = null) {
    return he("paint", g, I, j, W, !0);
  }
  function be(I, j, W = null) {
    return he("mask", y, I, j, W, !0);
  }
  function De(I) {
    I != null && I.texture && n && n.deleteTexture(I.texture);
  }
  function Te(I = /* @__PURE__ */ new Set()) {
    A.forEach((j, W) => {
      I.has(W) || (De(j), A.delete(W));
    });
  }
  function $e(I) {
    if (!n || !(I != null && I.assetId) || !(I != null && I.source)) return null;
    const j = String(I.assetId), W = String(I.revision ?? ""), ne = I.source, Z = Number(ne.width || ne.naturalWidth || ne.videoWidth || 0), Y = Number(ne.height || ne.naturalHeight || ne.videoHeight || 0);
    if (Z <= 0 || Y <= 0) return null;
    let me = A.get(j);
    if (me || (me = {
      texture: Q(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, A.set(j, me)), me.revision !== W || me.width !== Z || me.height !== Y) {
      if (n.bindTexture(n.TEXTURE_2D, me.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ne), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), me.revision = W, me.width = Z, me.height = Y;
    }
    return me.texture;
  }
  function Qe(I = []) {
    if (!we()) return !1;
    const j = /* @__PURE__ */ new Set();
    return I.forEach((W) => {
      !(W != null && W.assetId) || !(W != null && W.source) || (j.add(String(W.assetId)), $e(W));
    }), Te(j), !0;
  }
  function dt() {
    return we() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Ut(I) {
    n.useProgram(I), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function bt(I, j = {}) {
    if (!v) return null;
    n.disable(n.BLEND), Ut(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(D.background, 0), n.uniform2f(D.viewport, Math.max(1, C.width), Math.max(1, C.height)), n.uniform1i(D.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const W = Mi(I, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(D.yaw, Number(W.yawDeg || 0) * gt), n.uniform1f(D.pitch, Number(W.pitchDeg || 0) * gt), n.uniform1f(D.roll, Number(W.rollDeg || 0) * gt), n.uniform1f(D.hFov, rt(Number(W.hFovDeg || 90), 0.1, 179) * gt), n.uniform1f(D.vFov, rt(Number(W.vFovDeg || 60), 0.1, 179) * gt), n.uniform1f(D.opacity, rt(Number(j.backgroundOpacity ?? 1), 0, 1));
    const ne = Number((I == null ? void 0 : I.coverageDeg) || (j == null ? void 0 : j.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(D.coverage, ne), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Gt(I, j = {}) {
    const W = ae.paint && d != null, ne = ae.mask && w != null;
    if (!W && !ne) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ut(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const Z = Mi(I, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(Z.yawDeg || 0) * gt), n.uniform1f(V.pitch, Number(Z.pitchDeg || 0) * gt), n.uniform1f(V.roll, Number(Z.rollDeg || 0) * gt), n.uniform1f(V.hFov, rt(Number(Z.hFovDeg || 90), 0.1, 179) * gt), n.uniform1f(V.vFov, rt(Number(Z.vFovDeg || 60), 0.1, 179) * gt), n.uniform1f(V.paintOpacity, rt(Number(j.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, rt(Number(j.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, W ? 1 : 0), n.uniform1i(V.hasMask, ne ? 1 : 0), n.uniform1i(V.showMaskTint, j.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function sn(I, j) {
    var de, Me, Ie, Ae, Re, Oe, at;
    const W = Array.isArray(I == null ? void 0 : I.objects) ? I.objects : [];
    if (!W.length) {
      le(), Te(/* @__PURE__ */ new Set());
      return;
    }
    const ne = (j == null ? void 0 : j.mode) === "unwrap" ? 0 : (j == null ? void 0 : j.mode) === "cutout" ? 2 : 1, Z = Mi(j, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Y = io(Z.yawDeg, Z.pitchDeg, Z.rollDeg), me = W.slice().sort((ke, vt) => Number((ke == null ? void 0 : ke.zIndex) || 0) - Number((vt == null ? void 0 : vt.zIndex) || 0)), ce = /* @__PURE__ */ new Set();
    le();
    for (const ke of me)
      if (!(!ke || ke.visible === !1)) {
        if (ke.type === "sticker") {
          const vt = String(((de = ke == null ? void 0 : ke.params) == null ? void 0 : de.assetId) || (ke == null ? void 0 : ke.id) || "");
          if (!vt) continue;
          ce.add(vt);
          const kn = $e({
            assetId: vt,
            source: ke.source,
            revision: ke.revision
          });
          if (!kn) continue;
          const _t = im({
            yawDeg: ((Me = ke == null ? void 0 : ke.transform) == null ? void 0 : Me.yawDeg) || 0,
            pitchDeg: ((Ie = ke == null ? void 0 : ke.transform) == null ? void 0 : Ie.pitchDeg) || 0,
            rollDeg: ((Ae = ke == null ? void 0 : ke.transform) == null ? void 0 : Ae.rollDeg) || 0,
            hFovDeg: ((Re = ke == null ? void 0 : ke.transform) == null ? void 0 : Re.hFovDeg) || 30,
            vFovDeg: ((Oe = ke == null ? void 0 : ke.transform) == null ? void 0 : Oe.vFovDeg) || 30,
            crop: ((at = ke == null ? void 0 : ke.params) == null ? void 0 : at.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ke == null ? void 0 : ke.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ut(s), n.uniform1i(O.texture, 0), n.uniform1i(O.mode, ne), n.uniform3f(O.viewRight, Y.right.x, Y.right.y, Y.right.z), n.uniform3f(O.viewUp, Y.up.x, Y.up.y, Y.up.z), n.uniform3f(O.viewFwd, Y.fwd.x, Y.fwd.y, Y.fwd.z), n.uniform1f(O.viewHfov, rt(Number(Z.hFovDeg || 90), 0.1, 179) * gt), n.uniform1f(O.viewVfov, rt(Number(Z.vFovDeg || 60), 0.1, 179) * gt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, kn), n.uniform3f(O.stickerRight, _t.right.x, _t.right.y, _t.right.z), n.uniform3f(O.stickerUp, _t.up.x, _t.up.y, _t.up.z), n.uniform3f(O.stickerFwd, _t.fwd.x, _t.fwd.y, _t.fwd.z), n.uniform1f(O.stickerTanX, Math.max(1e-6, _t.tanX)), n.uniform1f(O.stickerTanY, Math.max(1e-6, _t.tanY)), n.uniform4f(
            O.crop,
            rt(Number(_t.crop.x0 ?? 0), 0, 1),
            rt(Number(_t.crop.y0 ?? 0), 0, 1),
            rt(Number(_t.crop.x1 ?? 1), 0, 1),
            rt(Number(_t.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(O.opacity, _t.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (ke.type === "paint" || ke.type === "raster") {
          if (!$(ke.source, ke.revision ?? "")) continue;
          xe("paint"), Gt(j, {
            paintOpacity: Number(ke.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ke.type === "mask") {
          if (!be(ke.source, ke.revision ?? "")) continue;
          xe("mask"), Gt(j, {
            paintOpacity: 0,
            maskOpacity: Number(ke.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Te(ce), le();
  }
  function hn(I) {
    return !dt() || !v ? null : (bt({
      mode: "panorama",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      fovDeg: (I == null ? void 0 : I.fovDeg) || 100
    }, I), t);
  }
  function m(I) {
    return !dt() || !v ? null : (bt({ mode: "unwrap" }, I), t);
  }
  function Je(I) {
    return !dt() || !v ? null : (bt({
      mode: "cutout",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      rollDeg: (I == null ? void 0 : I.rollDeg) || 0,
      hFovDeg: (I == null ? void 0 : I.hFovDeg) || 90,
      vFovDeg: (I == null ? void 0 : I.vFovDeg) || 60
    }, I), t);
  }
  function T(I = {}) {
    if (!we() || (fe(I.width, I.height, I.dpr || 1), !dt())) return null;
    const j = Object.prototype.hasOwnProperty.call(I, "backgroundSource"), W = Object.prototype.hasOwnProperty.call(I, "paintSource"), ne = Object.prototype.hasOwnProperty.call(I, "maskSource"), Z = Object.prototype.hasOwnProperty.call(I, "textures"), Y = Object.prototype.hasOwnProperty.call(I, "scene");
    return j && pe(I.backgroundSource, I.backgroundRevision ?? ""), W && $(I.paintSource, I.paintRevision ?? ""), ne && be(I.maskSource, I.maskRevision ?? ""), Z && (Qe(I.textures || []), B.textures = I.textures || []), Y && (B.scene = I.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "objectPass") && (B.objectPass = I.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "backgroundOpacity") && (B.backgroundOpacity = Number(I.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(I, "showMaskTint") && (B.showMaskTint = I.showMaskTint === !0), Object.prototype.hasOwnProperty.call(I, "coverageDeg") && (B.coverageDeg = Number(I.coverageDeg || 360) === 180 ? 180 : 360), v && bt(I.view, {
      ...I,
      backgroundOpacity: Number(I.backgroundOpacity ?? B.backgroundOpacity ?? 1),
      coverageDeg: Number(I.coverageDeg || B.coverageDeg || 360) === 180 ? 180 : 360
    }), sn(
      B.objectPass || { objects: [] },
      I.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function H(I = {}) {
    return we() ? !!T({
      ...I,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(I.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function q(I, j, W) {
    const ne = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || C.sourceWidth || C.width || 1)), Z = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || C.sourceHeight || C.height || 1)), Y = Number(j), me = Number(W);
    if (!Number.isFinite(Y) || !Number.isFinite(me)) return null;
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return { u: (Y / ne % 1 + 1) % 1, v: rt(me / Z, 0, 1) };
    const ce = Mi(I, ne, Z);
    if (!ce) return null;
    const de = io(ce.yawDeg, ce.pitchDeg, ce.rollDeg), Me = (Y - ne * 0.5) / (ne * 0.5) * Math.tan(rt(ce.hFovDeg, 1, 179) * gt * 0.5), Ie = (Z * 0.5 - me) / (Z * 0.5) * Math.tan(rt(ce.vFovDeg, 0.1, 179) * gt * 0.5), Ae = Ei(bo(bo(ii(de.right, Me), ii(de.up, Ie)), de.fwd));
    return {
      u: (Math.atan2(Ae.x, Ae.z) / Dd + 0.5 + 1) % 1,
      v: rt(0.5 - Math.asin(rt(Ae.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function oe(I, j, W) {
    const ne = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || C.sourceWidth || C.width || 1)), Z = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || C.sourceHeight || C.height || 1));
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return {
        x: (Number(j || 0) % 1 + 1) % 1 * ne,
        y: rt(Number(W || 0), 0, 1) * Z,
        visible: !0
      };
    const Y = Mi(I, ne, Z);
    if (!Y)
      return { x: ne * 0.5, y: Z * 0.5, visible: !1 };
    const me = io(Y.yawDeg, Y.pitchDeg, Y.rollDeg), ce = em(j, W), de = ro(ce, me.right), Me = ro(ce, me.up), Ie = ro(ce, me.fwd);
    if (Ie <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ae = ne * 0.5 + de / Ie * (ne * 0.5 / Math.tan(rt(Y.hFovDeg, 1, 179) * gt * 0.5)), Re = Z * 0.5 - Me / Ie * (Z * 0.5 / Math.tan(rt(Y.vFovDeg, 0.1, 179) * gt * 0.5));
    return { x: Ae, y: Re, visible: Ae >= 0 && Ae <= ne && Re >= 0 && Re <= Z };
  }
  return {
    init: we,
    dispose: k,
    setViewport: fe,
    setBackgroundErp: pe,
    setPaintErp: $,
    setMaskErp: be,
    renderPanorama: hn,
    renderUnwrap: m,
    renderCutout: Je,
    renderScene: T,
    syncState: H,
    screenToErpUv: q,
    erpUvToScreen: oe,
    getCanvas() {
      return t;
    },
    isSupported() {
      return we();
    },
    getViewport() {
      return { ...C };
    }
  };
}
function Tu(e, t = 1, n = 16384) {
  const r = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function om() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, g) {
    const y = t(u);
    let v = e.get(y) || null;
    if (!v) {
      const M = document.createElement("canvas"), C = M.getContext("2d");
      if (!C) return null;
      v = {
        id: y,
        canvas: M,
        ctx: C,
        width: 0,
        height: 0
      }, e.set(y, v);
    }
    const d = Tu(f), w = Tu(g);
    return v.width !== d && (v.canvas.width = d, v.width = d), v.height !== w && (v.canvas.height = w, v.height = w), v;
  }
  function r(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = r(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function s() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: r,
    clearTarget: a,
    dispose: s
  };
}
const sm = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), cm = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Ed(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function lm(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function um(e = {}) {
  const t = cm.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Ed(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function fm(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!sm.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Ed(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: lm(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function dm(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((r) => fm(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function hi(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: um((e == null ? void 0 : e.background) || {}),
    objectPass: dm((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function hm(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? hm(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function gm(e, t, n = {}) {
  return e ? zc({
    id: String((n == null ? void 0 : n.id) || "paint_layer"),
    type: "paint",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 100),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "paint") : null;
}
function pm(e, t, n = {}) {
  return e ? zc({
    id: String((n == null ? void 0 : n.id) || "mask_layer"),
    type: "mask",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 110),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "mask") : null;
}
function mm(e, t, n = {}) {
  return e ? zc({
    id: String((n == null ? void 0 : n.id) || "raster_layer"),
    type: "raster",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 90),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    transform: (n == null ? void 0 : n.transform) || null,
    params: (n == null ? void 0 : n.params) || {}
  }, "raster") : null;
}
function Td(e = {}) {
  const t = [], n = gm(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), r = pm(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), r && t.push(r), a.forEach((s, u) => {
    const f = mm(
      (s == null ? void 0 : s.source) || null,
      (s == null ? void 0 : s.revision) || "",
      {
        id: String((s == null ? void 0 : s.id) || `raster_layer_${u}`),
        zIndex: Number((s == null ? void 0 : s.zIndex) ?? (s == null ? void 0 : s.z_index) ?? 90),
        opacity: Number((s == null ? void 0 : s.opacity) ?? 1),
        visible: (s == null ? void 0 : s.visible) !== !1,
        transform: (s == null ? void 0 : s.transform) || null,
        params: (s == null ? void 0 : s.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((s, u) => {
    const f = Number((s == null ? void 0 : s.zIndex) || 0), g = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== g ? f - g : String((s == null ? void 0 : s.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function jc(e, t) {
  const n = new Map(
    (Array.isArray(t) ? t : []).map((r) => [String((r == null ? void 0 : r.assetId) || ""), r]).filter(([r, a]) => r && (a == null ? void 0 : a.source))
  );
  return Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers.map((r) => {
    const a = n.get(String((r == null ? void 0 : r.assetId) || ""));
    return a ? {
      id: String((r == null ? void 0 : r.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((r == null ? void 0 : r.zIndex) || 0),
      opacity: Number((r == null ? void 0 : r.opacity) ?? 1),
      visible: (r == null ? void 0 : r.visible) !== !1,
      transform: {
        yawDeg: Number((r == null ? void 0 : r.yawDeg) || 0),
        pitchDeg: Number((r == null ? void 0 : r.pitchDeg) || 0),
        rollDeg: Number((r == null ? void 0 : r.rollDeg) || 0),
        hFovDeg: Number((r == null ? void 0 : r.hFovDeg) || 30),
        vFovDeg: Number((r == null ? void 0 : r.vFovDeg) || 30)
      },
      params: {
        assetId: String((r == null ? void 0 : r.assetId) || ""),
        crop: (r == null ? void 0 : r.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function Uo(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, r = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return hi({
    stateRevision: r,
    background: {
      type: "erp_image",
      source: t,
      revision: u,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: jc(a, s)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Ti(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], r = jc(t, n), a = Td({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return hi({
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: {
      type: "erp_image",
      source: (e == null ? void 0 : e.backgroundSource) || null,
      revision: String((e == null ? void 0 : e.backgroundRevision) || ""),
      coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [...r, ...a]
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ym(e = {}) {
  var s, u, f, g, y, v, d, w;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const M = hi(e), C = Array.isArray((s = M.objectPass) == null ? void 0 : s.objects) ? M.objectPass.objects : [], D = {
      stickers: C.filter((E) => E.type === "sticker").map((E) => {
        var A, B, te, ae, Q, we, k, fe, ue, le, xe, ie, he;
        return {
          id: E.id,
          assetId: String(((A = E == null ? void 0 : E.params) == null ? void 0 : A.assetId) || ((B = E == null ? void 0 : E.params) == null ? void 0 : B.asset_id) || (E == null ? void 0 : E.id) || ""),
          yawDeg: Number(((te = E == null ? void 0 : E.transform) == null ? void 0 : te.yawDeg) ?? ((ae = E == null ? void 0 : E.params) == null ? void 0 : ae.yawDeg) ?? 0),
          pitchDeg: Number(((Q = E == null ? void 0 : E.transform) == null ? void 0 : Q.pitchDeg) ?? ((we = E == null ? void 0 : E.params) == null ? void 0 : we.pitchDeg) ?? 0),
          rollDeg: Number(((k = E == null ? void 0 : E.transform) == null ? void 0 : k.rollDeg) ?? ((fe = E == null ? void 0 : E.params) == null ? void 0 : fe.rollDeg) ?? 0),
          hFovDeg: Number(((ue = E == null ? void 0 : E.transform) == null ? void 0 : ue.hFovDeg) ?? ((le = E == null ? void 0 : E.params) == null ? void 0 : le.hFovDeg) ?? 30),
          vFovDeg: Number(((xe = E == null ? void 0 : E.transform) == null ? void 0 : xe.vFovDeg) ?? ((ie = E == null ? void 0 : E.params) == null ? void 0 : ie.vFovDeg) ?? 30),
          crop: ((he = E == null ? void 0 : E.params) == null ? void 0 : he.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((E == null ? void 0 : E.opacity) ?? 1),
          visible: (E == null ? void 0 : E.visible) !== !1,
          zIndex: Number((E == null ? void 0 : E.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = M.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = M.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, V = C.filter((E) => E.type === "sticker").map((E) => {
      var A, B;
      return {
        assetId: String(((A = E == null ? void 0 : E.params) == null ? void 0 : A.assetId) || ((B = E == null ? void 0 : E.params) == null ? void 0 : B.asset_id) || (E == null ? void 0 : E.id) || ""),
        source: E.source || null,
        revision: String((E == null ? void 0 : E.revision) || "")
      };
    }).filter((E) => E.assetId && E.source), O = C.find((E) => E.type === "paint") || null, L = C.find((E) => E.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((g = M.background) == null ? void 0 : g.source) || null,
      backgroundRevision: String(((y = M.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((v = M.background) == null ? void 0 : v.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (O == null ? void 0 : O.source) || null,
      paintRevision: String((O == null ? void 0 : O.revision) || ""),
      maskSource: (L == null ? void 0 : L.source) || null,
      maskRevision: String((L == null ? void 0 : L.revision) || ""),
      textures: V,
      scene: D,
      objectPass: M.objectPass,
      backgroundOpacity: Number(((d = M.background) == null ? void 0 : d.opacity) ?? 1),
      showMaskTint: ((w = e == null ? void 0 : e.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], r = e.layers || {}, a = hi({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...jc(t, n),
        ...Td({
          paintSource: e.paintSource || r.paintSource || null,
          paintRevision: e.paintRevision || r.paintRevision || "",
          paintOptions: e.paintOptions || null,
          maskSource: e.maskSource || r.maskSource || null,
          maskRevision: e.maskRevision || r.maskRevision || "",
          maskOptions: e.maskOptions || null,
          rasterEntries: e.rasterEntries || []
        })
      ]
    }
  }).objectPass;
  return {
    stateRevision: String(e.stateRevision || ""),
    backgroundSource: e.backgroundSource || null,
    backgroundRevision: String(e.backgroundRevision || ""),
    coverageDeg: Number(e.coverageDeg || 360) === 180 ? 180 : 360,
    paintSource: r.paintSource || null,
    paintRevision: String(r.paintRevision || ""),
    maskSource: r.maskSource || null,
    maskRevision: String(r.maskRevision || ""),
    textures: n,
    scene: t,
    objectPass: a,
    backgroundOpacity: Number(e.backgroundOpacity ?? 1),
    showMaskTint: e.showMaskTint === !0
  };
}
function bm(e) {
  let t = null;
  function n(s = {}) {
    const u = ym(s);
    return e.syncState({
      stateRevision: u.stateRevision,
      backgroundSource: u.backgroundSource,
      backgroundRevision: u.backgroundRevision,
      coverageDeg: u.coverageDeg,
      paintSource: u.paintSource,
      paintRevision: u.paintRevision,
      maskSource: u.maskSource,
      maskRevision: u.maskRevision,
      textures: u.textures,
      scene: u.scene,
      objectPass: u.objectPass,
      backgroundOpacity: u.backgroundOpacity,
      showMaskTint: u.showMaskTint
    }) ? (t = u, !0) : !1;
  }
  function r() {
    return t;
  }
  function a() {
    t = null;
  }
  return {
    sync: n,
    snapshot: r,
    clear: a
  };
}
function Ir(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => am(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => om(), r = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => bm(V), a = t(e), s = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const g = r({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const O = { ...V }, L = a.syncState(O);
        return L && (f = O, L);
      }
      return f = { ...V }, !0;
    }
  });
  function y(V = {}) {
    return g.sync(V);
  }
  function v(V = {}, O = {}) {
    return f ? a.renderScene({
      ...f,
      view: V,
      width: O.width,
      height: O.height,
      dpr: O.dpr,
      backgroundOpacity: O.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: O.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function d(V, O, L = {}, E = {}) {
    if (!O) return !1;
    const A = v(L, {
      ...E,
      width: O.w,
      height: O.h
    });
    return A ? V ? (V.canvas && A === V.canvas || V.drawImage(A, O.x, O.y, O.w, O.h), !0) : !!s && A === s : !1;
  }
  function w(V, O = {}, L = {}) {
    const E = Number(L.width || 0), A = Number(L.height || 0);
    if (!(E > 0) || !(A > 0)) return null;
    const B = u.ensureTarget(V, E, A);
    if (!B) return null;
    const te = v(O, {
      ...L,
      width: E,
      height: A
    });
    return te ? (B.ctx.clearRect(0, 0, B.canvas.width, B.canvas.height), B.ctx.drawImage(te, 0, 0, B.canvas.width, B.canvas.height), B.canvas) : null;
  }
  function M(V) {
    u.clearTarget(V);
  }
  function C() {
    var V;
    u.dispose(), (V = a.dispose) == null || V.call(a), f = null;
  }
  function D() {
    f = null, g.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: v,
    renderToContext: d,
    renderToTarget: w,
    clearTarget: M,
    snapshotState: g.snapshot,
    clearState: D,
    dispose: C
  };
}
function ei(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function vm() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ru(e, t = 8) {
  var v;
  const n = (v = e == null ? void 0 : e.getContext) == null ? void 0 : v.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, g = -1, y = -1;
  for (let d = 0; d < a; d += 1)
    for (let w = 0; w < r; w += 1)
      s[(d * r + w) * 4 + 3] <= t || (w < u && (u = w), d < f && (f = d), w > g && (g = w), d > y && (y = d));
  return g < u || y < f ? null : {
    minX: u,
    minY: f,
    maxX: g,
    maxY: y,
    width: g - u + 1,
    height: y - f + 1,
    aspect: Number(((g - u + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function $c(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Wn(e, t, n) {
  if (!e) return ei(t, n);
  const r = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== a) && (e.canvas.width = r, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function ut(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Fs = null, Vs = null, Lu = null, Ou = null, yt = null, ki = null, Wt = null, or = null;
function _m() {
  if (Vs) return Vs;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Vs = n, n;
}
function Hs(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Fs = Wn(Fs, n, r);
  const a = Fs;
  ut(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Ou !== a.ctx && (Lu = a.ctx.createPattern(_m(), "repeat"), Ou = a.ctx), a.ctx.fillStyle = Lu, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function xm(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function wm(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Sm(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Nm(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const ft = /* @__PURE__ */ new Map(), Bc = 128;
function Mm(e, t, n, r, a, s) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (ft.has(g)) {
    const L = ft.get(g);
    return ft.delete(g), ft.set(g, L), L;
  }
  ft.size >= Bc && ft.delete(ft.keys().next().value);
  const y = u * 2 + 2, v = u + 1, d = $c(y, y), w = d.getContext("2d"), M = f * u, C = u + 1, D = `rgba(${n},${r},${a},${s})`, V = `rgba(${n},${r},${a},0)`, O = w.createRadialGradient(v, v, M, v, v, C);
  return O.addColorStop(0, D), O.addColorStop(1, V), w.fillStyle = O, w.fillRect(0, 0, y, y), ft.set(g, d), d;
}
function km(e, t, n, r, a, s, u) {
  const { r: f, g, b: y, a: v } = r, d = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, a), C = Math.max(0, Math.min(0.99, s)), D = Math.max(0, Math.min(1, u ?? 0)), V = `chisel:${d}:${w}:${n.toFixed(2)}:${f}:${g}:${y}:${v.toFixed(3)}:${M.toFixed(2)}:${C.toFixed(2)}:${D.toFixed(2)}`;
  if (ft.has(V)) {
    const Q = ft.get(V);
    return ft.delete(V), ft.set(V, Q), Q;
  }
  ft.size >= Bc && ft.delete(ft.keys().next().value);
  const O = $c(d, w), L = O.getContext("2d"), E = L.createImageData(d, w), A = E.data, B = Math.max(0, e - t), te = Math.max(0, Math.min(1, n)), ae = 1 + M;
  for (let Q = 0; Q < w; Q++)
    for (let we = 0; we < d; we++) {
      const k = we + 0.5 - e, fe = Q + 0.5 - t, ue = Math.max(Math.abs(k) - B, 0), xe = Math.hypot(ue, fe) / t;
      if (xe >= 1) continue;
      const ie = xe <= te ? 1 : Math.max(0, (1 - xe) / Math.max(1e-4, 1 - te)), he = 1 - xe, pe = 1 + M * (1 - he) * (1 - he), $ = 1 - C * he * he, be = pe * $ / ae;
      let De = 1;
      if (D > 0) {
        const Qe = Math.floor((fe + t) / 1.5), dt = Math.floor((k + e) / 8), Ut = Cr(li(Qe * 41 + 500, dt * 19 + 300));
        De = 1 - D * 0.42 * Ut;
      }
      const Te = Math.round(255 * Math.min(1, v * ie * be * De));
      if (Te <= 0) continue;
      const $e = (Q * d + we) * 4;
      A[$e] = f, A[$e + 1] = g, A[$e + 2] = y, A[$e + 3] = Te;
    }
  return L.putImageData(E, 0, 0), ft.set(V, O), O;
}
function li(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Cr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Pm(e, t, n, r, a, s, u) {
  const f = e + 0.5 - n, g = t + 0.5 - r, y = Math.max(0, n - r), v = Math.max(Math.abs(f) - y, 0), d = Math.hypot(v, g) / r;
  if (d >= 1) return 0;
  const w = Cr(li(e * 17 + 3, t * 13 + 7)), M = d + s * 0.22 * (w - 0.5);
  if (M >= 1) return 0;
  const C = M <= a ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - a)), D = Cm(e, t, f, g, n, r), V = s * 0.55;
  if (D < V) return 0;
  const L = 0.45 + 0.55 * ((D - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, u * C * L));
}
function Cm(e, t, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), g = Cr(li(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), v = Math.floor((r + s) / 1.5), d = Cr(li(y * 23 + 800, v * 29 + 500)), w = Cr(li(e * 3 + 100, t * 5 + 200));
  return g * 0.55 + d * 0.3 + w * 0.15;
}
function Am(e, t, n, r, a) {
  const { r: s, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(e) * 2), v = Math.max(2, Math.ceil(t) * 2), d = Math.max(0, Math.min(1, a)), w = `crayon:${y}:${v}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${d.toFixed(2)}`;
  if (ft.has(w)) {
    const L = ft.get(w);
    return ft.delete(w), ft.set(w, L), L;
  }
  ft.size >= Bc && ft.delete(ft.keys().next().value);
  const M = $c(y, v), C = M.getContext("2d"), D = C.createImageData(y, v), V = D.data, O = Math.max(0, Math.min(1, n));
  for (let L = 0; L < v; L++)
    for (let E = 0; E < y; E++) {
      const A = Pm(E, L, e, t, O, d, g);
      if (A <= 0) continue;
      const B = (L * y + E) * 4;
      V[B] = s, V[B + 1] = u, V[B + 2] = f, V[B + 3] = A;
    }
  return C.putImageData(D, 0, 0), ft.set(w, M), M;
}
function Rd(e, t, n) {
  var D, V;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), a = Sm(t, n), s = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = Im(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), g = Number(((D = t == null ? void 0 : t.angle) == null ? void 0 : D.value) ?? 0), y = Nm(t, a), v = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), d = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && v !== "unwrap", w = t == null ? void 0 : t.scatter, M = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let C;
  if (r === "chisel") {
    const O = a * f, L = a, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), A = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), B = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    C = km(O, L, s, u, E, A, B);
  } else if (r === "crayon") {
    const O = a * f, L = a, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    C = Am(O, L, s, u, E);
  } else
    C = Mm(a, s, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: C, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: M, latitudeCorrection: d };
}
function Im(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), s = Math.max(0, Math.min(1, Number(r.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: s
  };
}
function Dm(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function Fu(e, t, n, r, a) {
  const s = e.angle, u = e.desc.width;
  function f(y, v) {
    s === 0 ? e.ctx.drawImage(e.stampTex, y - a, v - r, a * 2, r * 2) : (e.ctx.save(), e.ctx.translate(y, v), e.ctx.rotate(s), e.ctx.drawImage(e.stampTex, -a, -r, a * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  t - g < 0 && f(t + u, n), t + g > u && f(t - u, n);
}
function Uc(e, t, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: y, count: v } = e.scatter, d = y * e.radiusPx * a, w = li(t, n);
    for (let M = 0; M < v; M++) {
      const C = Cr(w + M * 2) * Math.PI * 2, D = Math.sqrt(Cr(w + M * 2 + 1)) * d, V = t + Math.cos(C) * D, O = n + Math.sin(C) * D, L = Math.max(0.5, e.radiusPx * a * 0.48), E = (0.5 - O / Math.max(1, e.desc.height)) * Math.PI, A = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, B = L * e.aspect * A;
      Fu(e, V, O, L, B);
    }
    return;
  }
  const s = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * e.aspect * f;
  Fu(e, t, n, s, g);
}
function Vu(e, t, n) {
  const r = wm(t);
  if (!e || r.length === 0) return;
  const a = n.width, s = n.height, u = Rd(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let w = 0; w < r.length; w++) {
    let M = Number(r[w].u || 0) * a;
    const C = Number(r[w].v || 0) * s;
    w > 0 && Math.abs(M - f[w - 1].x) > a * 0.5 && (M += M < f[w - 1].x ? a : -a), f.push({ x: M, y: C });
  }
  if (Uc(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let g = f[0], y = f[0], v = f[0], d = 0;
  for (let w = 1; w < f.length; w++) {
    const M = f[w], C = { x: (y.x + M.x) * 0.5, y: (y.y + M.y) * 0.5 };
    w === 1 ? d = ta(u, v.x, v.y, C.x, C.y, d) : d = vo(u, g, v, C, M, d), g = y, y = M, v = C;
  }
  f.length === 2 ? ta(u, v.x, v.y, y.x, y.y, d) : vo(u, g, v, y, y, d), e.restore();
}
function ao(e, t, n) {
  var d;
  const r = Array.isArray((d = t == null ? void 0 : t.geometry) == null ? void 0 : d.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const a = n.width, s = n.height, u = Dm(t), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let w = 0; w < r.length; w++) {
    const M = xm(r[w]);
    let C = Number(M.x || 0) * a;
    w > 0 && Math.abs(C - f[w - 1].x) > a * 0.5 && (C += C < f[w - 1].x ? a : -a), f.push({ x: C, y: Number(M.y || 0) * s }), C < g && (g = C), C > y && (y = C);
  }
  function v(w) {
    e.beginPath(), e.moveTo(f[0].x + w, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + w, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, v(0), g < 0 && v(a), y > a && v(-a), e.restore();
}
function Ta(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    ao(e, t, n);
    return;
  }
  const s = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  s >= 0.999 ? Vu(e, t, n) : (ki = Wn(ki, n.width, n.height), ut(ki), Vu(ki.ctx, t, n), e.save(), e.globalAlpha = s, e.drawImage(ki.canvas, 0, 0), e.restore());
}
function vr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ta(e, t, n, r, a, s) {
  const u = r - t, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let y = e.spacingPx - s;
  for (; y <= g; ) {
    const v = y / g;
    Uc(e, t + u * v, n + f * v, 1), y += e.spacingPx;
  }
  return g - y + e.spacingPx;
}
function vo(e, t, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, v = 0, d = f, w = d + g, M = w + y, C = w - d, D = 16;
  let V = s, O = n.x, L = n.y;
  for (let E = 1; E <= D; E++) {
    const A = d + C * E / D, B = ((d - A) * t.x + (A - v) * n.x) / (d - v), te = ((d - A) * t.y + (A - v) * n.y) / (d - v), ae = ((w - A) * n.x + (A - d) * r.x) / (w - d), Q = ((w - A) * n.y + (A - d) * r.y) / (w - d), we = ((M - A) * r.x + (A - w) * a.x) / (M - w), k = ((M - A) * r.y + (A - w) * a.y) / (M - w), fe = ((w - A) * B + (A - v) * ae) / (w - v), ue = ((w - A) * te + (A - v) * Q) / (w - v), le = ((M - A) * ae + (A - d) * we) / (M - d), xe = ((M - A) * Q + (A - d) * k) / (M - d), ie = ((w - A) * fe + (A - d) * le) / (w - d), he = ((w - A) * ue + (A - d) * xe) / (w - d);
    V = ta(e, O, L, ie, he, V), O = ie, L = he;
  }
  return V;
}
function Em(e, t, n, r) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const s = e.descriptor, u = s.width, f = n * s.height, g = e.activeStroke;
  let y = t * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const M = Rd(a, r, s), C = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), D = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), V = String((r == null ? void 0 : r.toolKind) || "") === "eraser", O = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Uc(M, y, f, 1), e.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: C,
      velocityWidthFactor: D,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: O,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const v = (g.prev.x + y) * 0.5, d = (g.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const w = {
    ctx: a,
    stampTex: g.stampTex,
    radiusPx: g.radiusPx,
    spacingPx: g.spacingPx,
    desc: s,
    aspect: g.aspect,
    angle: g.angle,
    stampKind: g.stampKind,
    scatter: g.scatter,
    latitudeCorrection: g.latitudeCorrection
  };
  g.pointCount === 1 ? g.distSinceStamp = ta(w, g.lastMidX, g.lastMidY, v, d, g.distSinceStamp) : g.distSinceStamp = vo(
    w,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: v, y: d },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = v, g.lastMidY = d, g.pointCount++, e.displayDirty = !0;
}
function cc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), s = ei(t, n), u = {
    descriptor: r,
    committedMask: ei(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: ei(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = ei(t, n);
  let y = null, v = "", d = null;
  function w(k) {
    return {
      actionGroupId: k,
      descriptor: r,
      committedPaint: ei(t, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(k) {
    let fe = a.get(k);
    return fe || (fe = w(k), a.set(k, fe)), fe;
  }
  function C(k) {
    return v === "mask" ? u : y ? M(y) : f;
  }
  function D(k) {
    var he;
    const fe = !d || d.length !== k.length || k.some((pe, $) => pe !== d[$]), ue = v === "paint" && ((he = y ? a.get(y) : f) == null ? void 0 : he.activeStroke) || null;
    let le = u.displayDirty || f.displayDirty || fe;
    for (const pe of k) {
      const $ = a.get(pe);
      if ($ != null && $.displayDirty) {
        le = !0;
        break;
      }
    }
    if (ue && (le = !0), !le) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const pe of k) {
      const $ = a.get(pe);
      $ && ($.displayDirty = !1);
    }
    d = [...k];
    const xe = g.ctx;
    ut(g);
    const ie = !!(ue != null && ue.isEraser);
    for (const pe of k) {
      const $ = a.get(pe);
      if (!$) continue;
      const De = y === $.actionGroupId && v === "paint" ? $.activeStroke : null;
      if (ie)
        yt = Wn(yt, t, n), ut(yt), yt.ctx.drawImage($.committedPaint.canvas, 0, 0), vr(yt.ctx, s.canvas), xe.drawImage(yt.canvas, 0, 0);
      else if (xe.drawImage($.committedPaint.canvas, 0, 0), De) {
        const Te = $.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, De.strokeOpacity ?? 1));
        xe.save(), xe.globalAlpha = Te, xe.drawImage(s.canvas, 0, 0), xe.restore();
      }
    }
  }
  function V(k) {
    var ue, le, xe, ie, he;
    for (const pe of a.values())
      ut(pe.committedPaint), ut(pe.currentStroke), pe.activeStroke = null, pe.displayDirty = !0;
    ut(u.committedMask), ut(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, d = null;
    const fe = [
      ...Array.isArray((le = (ue = k == null ? void 0 : k.painting) == null ? void 0 : ue.paint) == null ? void 0 : le.strokes) ? k.painting.paint.strokes : [],
      ...Array.isArray((ie = (xe = k == null ? void 0 : k.painting) == null ? void 0 : xe.mask) == null ? void 0 : ie.strokes) ? k.painting.mask.strokes : []
    ];
    for (const pe of fe) {
      if (((he = pe == null ? void 0 : pe.targetSpace) == null ? void 0 : he.kind) !== "ERP_GLOBAL") continue;
      const $ = String((pe == null ? void 0 : pe.layerKind) || "paint"), De = String((pe == null ? void 0 : pe.toolKind) || "pen") === "eraser";
      if ($ === "mask") {
        const Te = u.descriptor;
        De ? (yt = Wn(yt, Te.width, Te.height), ut(yt), Ta(yt.ctx, pe, Te), vr(u.committedMask.ctx, yt.canvas)) : Ta(u.committedMask.ctx, pe, Te);
        continue;
      }
      if (De) {
        yt = Wn(yt, r.width, r.height), ut(yt), Ta(yt.ctx, pe, r);
        for (const Te of a.values())
          vr(Te.committedPaint.ctx, yt.canvas), Te.displayDirty = !0;
      } else {
        const Te = String((pe == null ? void 0 : pe.actionGroupId) || "__default__"), $e = M(Te), Qe = $e.descriptor;
        Ta($e.committedPaint.ctx, pe, Qe), $e.displayDirty = !0;
      }
    }
    D([...a.keys()]);
  }
  function O(k, fe) {
    v = String((k == null ? void 0 : k.layerKind) || "");
    const ue = String((k == null ? void 0 : k.toolKind) || "") === "eraser";
    if (v === "mask")
      y = null, ut(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const le = ue ? f : M(String((k == null ? void 0 : k.actionGroupId) || "__default__"));
      y = ue ? "" : String((k == null ? void 0 : k.actionGroupId) || "__default__"), ut(le.currentStroke), le.activeStroke = null, le.displayDirty = !0;
    }
  }
  function L(k, fe) {
    var $;
    const ue = String((k == null ? void 0 : k.layerKind) || "paint"), le = String((k == null ? void 0 : k.toolKind) || "") === "eraser", xe = ue === "mask" ? u : le ? f : M(String((k == null ? void 0 : k.actionGroupId) || y || "__default__")), ie = xe.activeStroke, he = xe.descriptor;
    if (ie && ie.pointCount > 1) {
      const be = xe.currentStroke.ctx;
      be.globalCompositeOperation = "source-over";
      const De = {
        ctx: be,
        stampTex: ie.stampTex,
        radiusPx: ie.radiusPx,
        spacingPx: ie.spacingPx,
        desc: he,
        aspect: ie.aspect,
        angle: ie.angle,
        stampKind: ie.stampKind,
        scatter: ie.scatter,
        latitudeCorrection: ie.latitudeCorrection
      };
      ie.pointCount === 2 ? ta(De, ie.lastMidX, ie.lastMidY, ie.prev.x, ie.prev.y, ie.distSinceStamp) : vo(De, ie.pprev, { x: ie.lastMidX, y: ie.lastMidY }, ie.prev, ie.prev, ie.distSinceStamp);
    }
    xe.lassoPreviewActive && (ut(xe.currentStroke), ao(xe.currentStroke.ctx, k, he), xe.lassoPreviewActive = !1);
    const pe = ue === "mask" ? u.committedMask : xe.committedPaint;
    if (le && ue === "paint")
      for (const be of a.values())
        vr(be.committedPaint.ctx, xe.currentStroke.canvas), be.displayDirty = !0;
    else if (le)
      vr(pe.ctx, xe.currentStroke.canvas);
    else {
      const be = Math.max(0, Math.min(1, (ie == null ? void 0 : ie.strokeOpacity) ?? 1));
      pe.ctx.save(), pe.ctx.globalAlpha = be, pe.ctx.drawImage(xe.currentStroke.canvas, 0, 0), pe.ctx.restore();
    }
    vm() && (String((k == null ? void 0 : k.toolKind) || ""), String((he == null ? void 0 : he.kind) || ""), Number((he == null ? void 0 : he.width) || 0), Number((he == null ? void 0 : he.height) || 0), String((($ = k == null ? void 0 : k.targetSpace) == null ? void 0 : $.viewMode) || ""), Number((k == null ? void 0 : k.aspect) ?? 1), Ru(xe.currentStroke.canvas), Ru(pe.canvas), void 0), ut(xe.currentStroke), xe.activeStroke = null, xe.displayDirty = !0, y = null, v = "", D([...a.keys()]);
  }
  function E(k) {
    if (v === "mask")
      ut(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (v === "paint" && !y)
      ut(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const fe = a.get(y);
      fe && (ut(fe.currentStroke), fe.activeStroke = null, fe.lassoPreviewActive = !1, fe.displayDirty = !0);
    }
    y = null, v = "", D([...a.keys()]);
  }
  function A(k, fe) {
    var le;
    if (v = String((k == null ? void 0 : k.layerKind) || ""), String(((le = k == null ? void 0 : k.geometry) == null ? void 0 : le.geometryKind) || "") === "lasso_fill") {
      if (v === "mask")
        ut(u.currentStroke), ao(u.currentStroke.ctx, k, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const xe = String((k == null ? void 0 : k.toolKind) || "") === "eraser", ie = xe ? f : M(String((k == null ? void 0 : k.actionGroupId) || y || "__default__"));
        y = xe ? "" : String((k == null ? void 0 : k.actionGroupId) || y || "__default__"), ut(ie.currentStroke), ao(ie.currentStroke.ctx, k, ie.descriptor), ie.lassoPreviewActive = !0, ie.displayDirty = !0;
      }
      D([...a.keys()]);
    }
  }
  function B(k) {
    return D(k ?? [...a.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function te(k) {
    return a.get(String(k)) ?? null;
  }
  function ae() {
    return [...a.keys()];
  }
  function Q(k) {
    var he;
    const fe = a.get(String(k));
    if (!fe) return null;
    const ue = v === "paint" && y === fe.actionGroupId, le = v === "paint" && ((he = y ? a.get(y) : f) == null ? void 0 : he.activeStroke) || null;
    if (le != null && le.isEraser)
      return Wt = Wn(Wt, t, n), ut(Wt), Wt.ctx.drawImage(fe.committedPaint.canvas, 0, 0), vr(Wt.ctx, s.canvas), Wt.canvas;
    const xe = ue ? fe.activeStroke : null;
    if (!xe) return fe.committedPaint.canvas;
    Wt = Wn(Wt, t, n), ut(Wt), Wt.ctx.drawImage(fe.committedPaint.canvas, 0, 0);
    const ie = fe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, xe.strokeOpacity ?? 1));
    return Wt.ctx.save(), Wt.ctx.globalAlpha = ie, Wt.ctx.drawImage(s.canvas, 0, 0), Wt.ctx.restore(), Wt.canvas;
  }
  function we() {
    return or = Wn(or, t, n), ut(or), Hs(or.ctx, u.committedMask.canvas), v === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (yt = Wn(yt, t, n), ut(yt), yt.ctx.drawImage(u.committedMask.canvas, 0, 0), vr(yt.ctx, s.canvas), ut(or), Hs(or.ctx, yt.canvas)) : Hs(or.ctx, s.canvas)), or.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: O,
    appendStrokePoint: Em,
    updateActiveStroke: A,
    commitActiveStroke: L,
    cancelActiveStroke: E,
    getErpTarget: B,
    ensureTarget: C,
    getGroupTarget: te,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: we,
    getAllGroupIds: ae
  };
}
function G(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zs(e, t, n) {
  const r = Number(e);
  return Number.isFinite(r) ? Math.max(Number(t), Math.min(Number(n), r)) : Number(t);
}
function Lt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Tm(e, t) {
  let n = Lt(t) - Lt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Hu = Math.PI / 180, zu = 0.12, Rm = 3, Lm = 35, Om = 140, Ri = 100, Fm = 20, ju = 0.8;
function Vm(e, t, n) {
  const r = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), s = G(Number(e || Ri), 1, 179) * Hu;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / Hu;
}
function Hm(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Go(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ri })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(O, L = null) {
    f && f(O, L);
  }
  function v(O, L, E = null, A = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(O || 0), g.drag.lastY = Number(L || 0), g.drag.lastTs = Number(A || performance.now()), g.drag.pointerId = E, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: E }), !0;
  }
  function d(O, L, E = "pano", A = performance.now()) {
    if (!g.drag.active) return !1;
    const B = Number(A || performance.now()), te = Number(O), ae = Number(L), Q = te - g.drag.lastX, we = ae - g.drag.lastY;
    g.drag.lastX = te, g.drag.lastY = ae, g.drag.lastTs = B;
    const k = r() || { x: 1, y: 1 }, fe = Number(k.x || 1), ue = Number(k.y || 1), le = { ...t() };
    let xe = 0, ie = 0;
    if (E === "unwrap") {
      const pe = a() || { w: 1, h: 1 }, $ = Math.max(1, Number(pe.w || 1)), be = Math.max(1, Number(pe.h || 1)), De = Q / $, Te = we / be;
      xe = -De * 360 * fe, ie = Te * 180 * ue;
    } else {
      const pe = s() || { w: 0, h: 0 }, $ = Math.max(1, Number(pe.w || 0)), be = Math.max(1, Number(pe.h || 0));
      if ($ > 1 && be > 1) {
        const De = G(Number(le.fov || Ri), 1, 179), Te = G(Vm(De, $, be), 0.1, 179);
        xe = -(Q / $) * De * fe, ie = we / be * Te * ue;
      } else
        xe = -Q * zu * fe, ie = we * zu * ue;
    }
    le.yaw = Lt(Number(le.yaw || 0) + xe), le.pitch = G(Number(le.pitch || 0) + ie, -89.9, 89.9), n(le), g.velHistory.push({ ts: B, yaw: le.yaw, pitch: le.pitch });
    let he = 0;
    for (; he < g.velHistory.length - 1 && g.velHistory[he].ts < B - 100; ) he++;
    return he > 0 && g.velHistory.splice(0, he), g.inertia.active = !1, g.inertia.lastTs = B, u(), y("drag", { phase: "move", dx: Q, dy: we, dYaw: xe, dPitch: ie }), !0;
  }
  function w(O = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const L = Number(O || performance.now());
    g.drag.lastTs = L;
    const E = g.velHistory.filter((B) => L - B.ts <= 80);
    if (E.length >= 2) {
      const B = E[0], te = E.at(-1), ae = Math.max(1e-3, (te.ts - B.ts) / 1e3);
      let Q = te.yaw - B.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), g.inertia.vx = Q / ae, g.inertia.vy = (te.pitch - B.pitch) / ae;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const A = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = A > Fm, g.inertia.lastTs = L, y("drag", { phase: "end", speed: A, inertiaActive: g.inertia.active }), !0;
  }
  function M(O = performance.now()) {
    if (!g.inertia.active) return !1;
    const L = Number(O || performance.now()), E = Math.max(1e-3, (L - (g.inertia.lastTs || L)) / 1e3);
    g.inertia.lastTs = L;
    const A = { ...t() };
    A.yaw = Lt(Number(A.yaw || 0) + g.inertia.vx * E), A.pitch = G(Number(A.pitch || 0) + g.inertia.vy * E, -89.9, 89.9);
    const B = Math.exp(-5.5 * E);
    return g.inertia.vx *= B, g.inertia.vy *= B, Math.abs(g.inertia.vx) < ju && Math.abs(g.inertia.vy) < ju && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(A), u(), g.inertia.active;
  }
  function C(O) {
    const L = Math.sign(Number(O || 0));
    if (!L) return !1;
    const E = { ...t() }, A = Number(E.fov || Ri);
    return E.fov = G(A + L * Rm, Lm, Om), n(E), u(), y("wheel", { deltaSign: L, fovBefore: A, fovAfter: E.fov }), !0;
  }
  function D(O) {
    return C(Math.sign(Hm(O)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: Ri }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: v,
    moveDrag: d,
    endDrag: w,
    stepInertia: M,
    applyWheel: C,
    applyWheelEvent: D,
    resetView: V
  };
}
function lc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const $u = Math.PI / 180;
function Pi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function zm(e) {
  const t = e || {}, n = Pi(t.yaw_deg, 0), r = Pi(t.pitch_deg, 0), a = Pi(t.roll_deg ?? t.rot_deg, 0), s = zs(Pi(t.hFOV_deg, 90), 1, 179), u = zs(Pi(t.vFOV_deg, 60), 1, 179), f = Math.tan(s * $u * 0.5) / Math.max(1e-6, Math.tan(u * $u * 0.5)), g = zs(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
const Ld = 0.28;
function jm(e) {
  const t = e && typeof e == "object" ? e : {}, n = G(Number(t.x0 ?? 0), 0, 1), r = G(Number(t.y0 ?? 0), 0, 1), a = G(Number(t.x1 ?? 1), 0, 1), s = G(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function $m(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), r = e.type === "external_image" || e.source_kind === "external_image", a = n || (r ? String(e.id || "").trim() : ""), s = t.includeHidden === !0, u = e.visible === !1, f = s && r && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: G(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: G(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: jm(e.crop),
    opacity: f ? Ld : G(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: r
  };
}
function Ko(e, t = {}) {
  var s;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.includeHidden === !0;
  return {
    stickers: n.map((u) => $m(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((s = e == null ? void 0 : e.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function Od(e, t, n = {}) {
  if (typeof t != "function") return [];
  const r = n.scene || Ko(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var C;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const v = g ? a[g] : null, d = t(y, v, f);
    if (d instanceof HTMLImageElement && !d.complete) return;
    const w = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.videoWidth) || (d == null ? void 0 : d.width) || 0), M = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.videoHeight) || (d == null ? void 0 : d.height) || 0);
    !d || w <= 0 || M <= 0 || (u.add(y), s.push({
      assetId: y,
      source: d,
      revision: String(((C = n.revisionFor) == null ? void 0 : C.call(n, y, v, d)) ?? [
        y,
        Number(d.naturalWidth || d.videoWidth || d.width || 0),
        Number(d.naturalHeight || d.videoHeight || d.height || 0),
        String(d.currentSrc || d.src || "")
      ].join("|"))
    }));
  }), s;
}
function Gc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Bm(e, t = 360) {
  return Gc(e, t);
}
function ur(e) {
  const t = zm(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: lt } = Ja;
function uc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ja == null ? void 0 : Ja.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Dr = Math.PI / 180, _o = {}, Um = { Nu: 24, Nv: 14 }, Gm = 10, Km = 120;
function Wm() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ci(e) {
  var n, r, a, s, u;
  if (!e) return null;
  const t = (n = e.getBoundingClientRect) == null ? void 0 : n.call(e);
  return {
    tag: String(e.tagName || "").toLowerCase(),
    className: String(e.className || ""),
    clientW: Number(e.clientWidth || 0),
    clientH: Number(e.clientHeight || 0),
    offsetW: Number(e.offsetWidth || 0),
    offsetH: Number(e.offsetHeight || 0),
    rectW: Number((t == null ? void 0 : t.width) || 0),
    rectH: Number((t == null ? void 0 : t.height) || 0),
    styleHeight: String(((r = e.style) == null ? void 0 : r.height) || ""),
    styleWidth: String(((a = e.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((s = e.style) == null ? void 0 : s.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function Ym() {
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
    .pano-node-preview-dom button:active {
      background: rgba(28,28,30,1) !important;
      transform: translateY(1px);
    }
  `, document.head.appendChild(e);
}
function hr(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, a) => {
    const s = Number(r), u = Number(a);
    return !Number.isFinite(s) || !Number.isFinite(u) ? null : [s, u];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const r = n(t[0], t[1]);
      if (r) return r;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const r = n(t.width, t.height);
      if (r) return r;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const r = n(t.w, t.h);
      if (r) return r;
    }
  }
  return null;
}
function qm(e) {
  const t = hr(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Fd(e, t, n) {
  qm(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function fc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Vd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Xm(e) {
  return lc(Vd(e));
}
function Ar(e = null) {
  var s, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = lt == null ? void 0 : lt.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [t, r, n, a].join("|");
}
function Hd(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Ar(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Ar(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Ar(t)
  };
}
const Ui = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Ar(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Ar(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, String(r.__panoStickersPath || "unknown"), this.generation, zd(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function zd(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : Hd(r, e).chosenPath, s = fc(e);
      this.activeBackend = s;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === g) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = g, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      s !== "none" && ui(e, { keepMonitor: r === "stickers" }), Vy(e, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = fc(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ui(e, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      ui(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Zm(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ui(e, t = {}) {
  var r, a, s, u, f;
  if (!e) return;
  wo.unregister(e), Zm(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (a = e.__panoLegacyRestore) == null || a.call(e);
  } catch {
  }
  e.__panoLegacyRestore = null;
  const n = e.__panoDomPreview;
  if (n) {
    try {
      (s = n.state) != null && s.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((g) => {
      if (g === (n == null ? void 0 : n.widget)) return !1;
      const y = String((g == null ? void 0 : g.name) || ""), v = String((g == null ? void 0 : g.type) || ""), d = uc();
      return !(y === d || v === d || y === "pano_preview" || v === "pano_preview" || y === "preview" && v === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || Ui.unregister(e);
}
function Er(e, t, n) {
  return { x: e, y: t, z: n };
}
function Bu(e, t) {
  return Er(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ra(e, t) {
  return Er(e.x * t, e.y * t, e.z * t);
}
function js(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Uu(e, t) {
  return Er(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function La(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Er(e.x / t, e.y / t, e.z / t);
}
function Sr(e, t) {
  const n = e * Dr, r = t * Dr, a = Math.cos(r);
  return Er(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Kc(e, t, n = 0) {
  const r = Sr(e, t), a = Er(0, 1, 0);
  let s = Uu(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Er(1, 0, 0)), s = La(s);
  let u = La(Uu(r, s));
  const f = n * Dr, g = Math.cos(f), y = Math.sin(f), v = Bu(Ra(s, g), Ra(u, y)), d = Bu(Ra(s, -y), Ra(u, g));
  return { fwd: r, right: La(v), up: La(d) };
}
function Jm(e, t = "#00ff00") {
  const n = {
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
  let r = null;
  if (e && typeof e == "object")
    r = e;
  else if (typeof e == "string") {
    const a = e.trim();
    if (!a) return n;
    try {
      r = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = r;
    return !a || typeof a != "object" || Array.isArray(a) ? n : {
      ...n,
      ...a,
      coverage: Number(a.coverage) === 180 ? 180 : 360,
      assets: a.assets && typeof a.assets == "object" ? a.assets : {},
      stickers: Array.isArray(a.stickers) ? a.stickers : [],
      shots: Array.isArray(a.shots) ? a.shots : [],
      active: a.active && typeof a.active == "object" ? a.active : n.active
    };
  } catch {
    return n;
  }
}
function Qm(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = na(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Wc(e) {
  var f, g;
  const t = Qm(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = na(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((g = na(e, "coverage")) == null ? void 0 : g.value) || 360) === 180 ? 180 : 360, s = e.__panoStateCache;
  if (s && s.source === t && s.liveVersion === n && s.bg === r && s.coverage === a)
    return s.parsed;
  const u = Jm(t, r);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: a, parsed: u }, u;
}
function na(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Gu(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function jd(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function ey(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function $d(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Bd(e, t, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = ey(e == null ? void 0 : e.graph, n)), r;
}
function ty(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Yc(e, t = []) {
  const n = ty(e), r = [];
  return t.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : t;
}
function Ku(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function xo(e, t) {
  const n = Ku(e), r = Ku(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ny(e, t = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Yc(e, t).map((y) => n.findIndex((v) => String((v == null ? void 0 : v.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, v) => ({ input: y, idx: v })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const v = Bd(e, y);
    if ((v == null ? void 0 : v.id) != null) {
      f.push(String(v.id));
      continue;
    }
    const d = (g = n[y]) == null ? void 0 : g.link;
    if (d == null) continue;
    const w = jd(e == null ? void 0 : e.graph, d), { originId: M } = $d(w);
    M != null && f.push(String(M));
  }
  return [...new Set(f)];
}
const wo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Jt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var y, v, d, w, M;
        if (!s) return;
        const u = xo(r, s == null ? void 0 : s.id);
        ny(s, ["erp_image", "bg_erp"]).some((C) => xo(r, C)), !(String(s.__panoPreviewMode || "") === "cutout" && !u) && (hc(s), (v = (y = s.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || v.call(y), (d = s.setDirtyCanvas) == null || d.call(s, !0, !0), (M = (w = s.graph) == null ? void 0 : w.setDirtyCanvas) == null || M.call(w, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || ""), void 0);
      });
    }, Jt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Jt) != null && e.removeEventListener) || (Jt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function So(e) {
  var s;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((s = Jt) == null ? void 0 : s.apiURL) == "function" ? Jt.apiURL(a) : a;
}
function ry(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function iy(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function ay(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function oy(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (ry(t)) return [t];
  const { filename: n, subfolder: r } = iy(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((s) => So({
    filename: n,
    subfolder: r,
    type: s
  }));
  return ay([...a, t]);
}
function sy(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? So({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Wu(e) {
  const t = lt == null ? void 0 : lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const a = n;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (xo(s, a)) return t.get(s);
  } else {
    const s = Object.keys(t);
    for (const u of s)
      if (xo(u, a)) return t[u];
  }
  return null;
}
function Zn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Zn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return So({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Zn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : So(e);
}
function cy(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", s = new URL(n, a);
    return t > 0 && s.searchParams.set("pano_rev", String(t)), s.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function ly(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => t.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(e, 0), t;
}
function uy(e, t) {
  try {
    const n = ly(t);
    let r = "";
    for (const a of n)
      if (r = Zn(a), r) break;
    r ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(r || ""), cy(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function fy(e, t = []) {
  var y, v;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Yc(e, t).map((d) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(d))).filter((d) => d >= 0), s = n.map((d, w) => ({ input: d, idx: w })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const d of u) {
    const w = n[d], M = w == null ? void 0 : w.link;
    if (M == null) continue;
    const C = jd(e.graph, M), { originId: D, originSlot: V } = $d(C);
    if (D == null) continue;
    const O = Bd(e, d, D);
    if (!O) continue;
    const L = Number(V || 0), E = Wu((O == null ? void 0 : O.id) ?? D), A = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
    if (A.length) {
      const Q = [];
      L >= 0 && L < A.length && Q.push(A[L]), Q.push(...A);
      for (const we of Q) {
        const k = Zn(we);
        if (k)
          return String((w == null ? void 0 : w.name) || ""), { src: k, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let B = [];
    try {
      B = typeof (lt == null ? void 0 : lt.getNodeImageUrls) == "function" ? lt.getNodeImageUrls(O) || [] : [];
    } catch {
      B = [];
    }
    if (Array.isArray(B) && B.length) {
      const Q = [];
      L >= 0 && L < B.length && Q.push(B[L]), Q.push(...B);
      for (const we of Q) {
        const k = Zn(we);
        if (k)
          return String((w == null ? void 0 : w.name) || ""), { src: k, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const te = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (te.length) {
      const Q = [];
      L >= 0 && L < te.length && Q.push(te[L]), Q.push(...te);
      for (const we of Q) {
        const k = Zn(we);
        if (k)
          return String((w == null ? void 0 : w.name) || ""), { src: k, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const ae = (y = O == null ? void 0 : O.widgets) == null ? void 0 : y.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (ae) {
      let Q = Zn(ae.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (Q = Jt.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`)), Q)
        return String((w == null ? void 0 : w.name) || ""), { src: Q, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const f = Wu(e == null ? void 0 : e.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((v = f == null ? void 0 : f.ui) == null ? void 0 : v.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const d of g) {
      const w = Zn(d);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function dy(e, t = [], n = {}) {
  const r = fy(e, t), a = String((r == null ? void 0 : r.src) || "").trim();
  if (!a) return null;
  const s = oy(a);
  if (!s.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", g = e.__panoLinkedInputImageCache.get(f);
  if (g && g.srcRaw === a && g.img) return g.img;
  if (g && g.pendingSrcRaw === a && g.pendingImg)
    return u && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : g.pendingImg;
  const y = new Image(), v = g || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  v.pendingSrcRaw = a, v.pendingResolvedSrc = "", v.pendingImg = y, e.__panoLinkedInputImageCache.set(f, v);
  let d = -1;
  const w = () => {
    var C, D, V, O;
    if (d += 1, d >= s.length) {
      if (((D = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.get) == null ? void 0 : D.call(C, f)) === v && v.pendingImg === y && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
        try {
          (O = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || O.call(V, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), s.length;
      return;
    }
    const M = s[d];
    v.pendingResolvedSrc = M, y.src = M;
  };
  return y.onload = () => {
    var M, C, D;
    ((C = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : C.call(M, f)) === v && v.pendingImg === y && (v.srcRaw = a, v.resolvedSrc = String(v.pendingResolvedSrc || y.src || ""), v.img = y, v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null), String(v.pendingResolvedSrc || v.resolvedSrc || y.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (D = e.setDirtyCanvas) == null || D.call(e, !0, !0);
  }, y.onerror = (M) => {
    var C, D, V, O;
    if (d + 1 < s.length) {
      w();
      return;
    }
    if (((D = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.get) == null ? void 0 : D.call(C, f)) === v && v.pendingImg === y && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
      try {
        (O = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || O.call(V, f);
      } catch {
      }
    String(v.pendingResolvedSrc || v.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, w(), u && v.img && (v.img.complete || v.img.naturalWidth || v.img.width) ? v.img : y;
}
function dc(e, t = [], n = null, r = {}) {
  const a = dy(e, t, r);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function hc(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoWrappedErpCache = null;
  }
}
function Ud(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function _r(e, t, n = "") {
  const r = Ud(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < Km ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function gc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), s = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), u = n / a, f = r / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function hy(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), s = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), v = r + (s - g) * 0.5, d = a + (u - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(v, d, g, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", v + g * 0.5, d + y * 0.5 + 0.5), e.restore();
}
function Oa(e, t, n = "Open editor and add frame") {
  var a;
  const r = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = t ? "flex" : "none");
}
function gy(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const a = t.find((s) => String((s == null ? void 0 : s.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function Gd(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), r = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), s = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function py(e, t, n, r = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), s = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = Gd(n, a / s);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (e.fillStyle = `rgba(0,0,0,${f})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function my(e, t = null) {
  const r = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return r.forEach((s) => {
    var f;
    if (s === t || !s || s.hidden || s.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof s.computeSize == "function" ? s.computeSize(((f = hr(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function oo(e) {
  const n = my(e) + 2, r = 8, a = hr(e), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function Kd(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(t || "");
  if (!r) return null;
  const a = sy(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return e.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const u = e.__panoPreviewImageCache.get(r);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g, y, v;
    (y = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function yy(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function pc(e, t) {
  return Ko(t, {
    selectedId: null,
    hoveredId: null
  });
}
function mc(e, t, n) {
  return Od(t, (r, a) => Kd(e, r, a), { scene: n });
}
function by(e, t) {
  var u;
  const n = qd(e, t);
  if (!n) return [];
  const r = Xd(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], s = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return r.map((f) => {
    const g = n.getGroupDisplayCanvas(f);
    return g ? {
      id: `paint_group:${f}`,
      source: g,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(s.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function vy(e, t, n, r = 0.45) {
  const a = (e.x + t.x + n.x) / 3, s = (e.y + t.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, v = Math.hypot(g, y) || 1;
    return { x: f.x + g / v * r, y: f.y + y / v * r };
  };
  return [u(e), u(t), u(n)];
}
function Yu(e, t, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, v, d] = vy(s, u, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(v.x, v.y), e.lineTo(d.x, d.y), e.closePath(), e.clip();
  const w = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, M = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, C = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, D = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, V = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, O = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  e.transform(w, D, M, V, C, O), e.drawImage(t, 0, 0), e.restore();
}
function Wd(e, t, n, r) {
  const a = js(e, t.right), s = js(e, t.up), u = js(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, g = a / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Yd(e, t, n, r, a, s, u, f = 12, g = 9) {
  var xe;
  const y = G(Number(u.hFOV_deg || 30), 1, 179) * Dr, v = G(Number(u.vFOV_deg || 30), 1, 179) * Dr, d = Math.tan(y * 0.5), w = Math.tan(v * 0.5), M = u.crop || {}, C = G(Number(M.x0 ?? 0), 0, 1), D = G(Number(M.y0 ?? 0), 0, 1), V = G(Number(M.x1 ?? 1), 0, 1), O = G(Number(M.y1 ?? 1), 0, 1), L = Math.max(1e-4, V - C), E = Math.max(1e-4, O - D), A = Kc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), B = [], te = [], ae = [], Q = [];
  for (let ie = 0; ie <= g; ie++) {
    const he = ie / g, $ = (1 - (D + he * E) * 2) * w;
    for (let be = 0; be <= f; be++) {
      const De = be / f, $e = ((C + De * L) * 2 - 1) * d, Qe = A.fwd.x + A.right.x * $e + A.up.x * $, dt = A.fwd.y + A.right.y * $e + A.up.y * $, Ut = A.fwd.z + A.right.z * $e + A.up.z * $, bt = Math.hypot(Qe, dt, Ut) || 1e-8, Gt = Qe / bt, sn = dt / bt, hn = Ut / bt, m = Gt * r.right.x + sn * r.right.y + hn * r.right.z, Je = Gt * r.up.x + sn * r.up.y + hn * r.up.z, T = Gt * r.fwd.x + sn * r.fwd.y + hn * r.fwd.z;
      if (T <= 1e-4)
        B[ie] || (B[ie] = []), te[ie] || (te[ie] = []), B[ie][be] = null, te[ie][be] = null;
      else {
        const H = Je / T / a, q = m / T / a;
        B[ie] || (B[ie] = []), te[ie] || (te[ie] = []), B[ie][be] = n.x + n.w * 0.5 + q * n.h * 0.5, te[ie][be] = n.y + n.h * 0.5 - H * n.h * 0.5;
      }
      ae[ie] || (ae[ie] = []), Q[ie] || (Q[ie] = []), ae[ie][be] = De, Q[ie][be] = he;
    }
  }
  const we = (xe = s.assets) == null ? void 0 : xe[u.asset_id], k = Kd(t, u.asset_id, we);
  if (!k || !k.complete || !k.naturalWidth) return;
  const fe = Number(k.naturalWidth || k.width || 1), ue = Number(k.naturalHeight || k.height || 1), le = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = le;
  for (let ie = 0; ie < g; ie++)
    for (let he = 0; he < f; he++) {
      const pe = B[ie][he], $ = te[ie][he], be = B[ie][he + 1], De = te[ie][he + 1], Te = B[ie + 1][he], $e = te[ie + 1][he], Qe = B[ie + 1][he + 1], dt = te[ie + 1][he + 1];
      if (pe === null || be === null || Te === null || Qe === null) continue;
      const Ut = ae[ie][he] * fe, bt = Q[ie][he] * ue, Gt = ae[ie][he + 1] * fe, sn = Q[ie][he + 1] * ue, hn = ae[ie + 1][he] * fe, m = Q[ie + 1][he] * ue, Je = ae[ie + 1][he + 1] * fe, T = Q[ie + 1][he + 1] * ue;
      Yu(e, k, { x: Ut, y: bt }, { x: Gt, y: sn }, { x: Je, y: T }, { x: pe, y: $ }, { x: be, y: De }, { x: Qe, y: dt }), Yu(e, k, { x: Ut, y: bt }, { x: Je, y: T }, { x: hn, y: m }, { x: pe, y: $ }, { x: Qe, y: dt }, { x: Te, y: $e });
    }
}
function _y(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const r = Wc(e), a = oo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = Kc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * Dr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = dc(
    e,
    Yc(e, ["erp_image", "bg_erp"]),
    () => {
      var A, B, te;
      (B = (A = e.__panoDomPreview) == null ? void 0 : A.requestDraw) == null || B.call(A), (te = e.setDirtyCanvas) == null || te.call(e, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = Qd(e), v = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, d = y || v, w = _o, M = pc(e, r), C = mc(e, r, M), D = Gc(e.__panoPreviewView, r == null ? void 0 : r.coverage);
  let V = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Ir()), g) {
    const A = Uo({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(C) ? C.map((ae) => `${String((ae == null ? void 0 : ae.assetId) || "")}:${String((ae == null ? void 0 : ae.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
      scene: M,
      textures: C,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), te = e.__panoRuntimeCore.syncState(A) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", D, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    V = !!te, te && t.drawImage(te, a.x, a.y, a.w, a.h);
  }
  const O = d ? 8 : 12, L = d ? 6 : 9, E = yy(e, r);
  if (!g || E.length === 0) {
    const A = gc(t == null ? void 0 : t.canvas, a);
    Zd(t, a, s, u, A);
  }
  !V && g && No(e, t, a, s, u, f, w), !V && E.length > 0 && E.forEach((A) => Yd(t, e, a, s, u, r, A, O, L)), t.restore();
}
function xy(e, t, n, r, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Uo({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(r) ? r.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: u,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: r,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function so(e, t, n, r) {
  var s, u, f, g, y, v;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const d = r.convertEventToCanvasOffset(t);
      if (Array.isArray(d) && d.length >= 2)
        return {
          x: Number(d[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(d[1]) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[1]) || 0)
    };
  const a = Sy(e, t, r);
  return a || null;
}
function wy(e, t) {
  var d, w;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, s = (d = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : d.call(a), u = (t == null ? void 0 : t.ds) || ((w = lt == null ? void 0 : lt.canvas) == null ? void 0 : w.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(g[0] || 0), v = (r - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(v) ? null : { x: y, y: v };
}
function Sy(e, t, n) {
  var a, s;
  const r = wy(t, n || (lt == null ? void 0 : lt.canvas));
  return r ? {
    x: r.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function Fa(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), hr(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", Fd(e, 320, 180), ti(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var w, M;
    const d = t ? t.apply(this, arguments) : void 0;
    try {
      const C = arguments[0];
      C && !((w = this.flags) != null && w.collapsed) && (r.stepInertia(performance.now()) && ((M = this.setDirtyCanvas) == null || M.call(this, !0, !1)), _y(this, C, r));
    } catch {
    }
    return d;
  }, e.onResize = function() {
    var w;
    const d = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Mo(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), eh(this, 220, null), d;
  };
  const r = Go({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (d) => {
      e.__panoPreviewView = d;
    },
    getViewportSize: () => {
      const d = oo(e);
      return {
        w: Math.max(1, Number((d == null ? void 0 : d.w) || 0)),
        h: Math.max(1, Number((d == null ? void 0 : d.h) || 0))
      };
    },
    onInteraction: () => {
      var d;
      Jd(e), (d = e.setDirtyCanvas) == null || d.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(d, w, M) {
    var C;
    try {
      if (!((C = this.flags) != null && C.collapsed)) {
        const D = so(this, d, w, M) || { x: 0, y: 0 }, V = hr(this), O = Number((V == null ? void 0 : V[0]) || 0), L = Number((V == null ? void 0 : V[1]) || 0);
        if (D.x >= O - 20 && D.y >= L - 20)
          return a ? a.apply(this, arguments) : void 0;
        const A = oo(this);
        if (Gu(D.x, D.y, A))
          return (d == null ? void 0 : d.button) === 0 && r.startDrag(D.x, D.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = e.onMouseMove;
  e.onMouseMove = function(d, w, M) {
    try {
      const C = so(this, d, w, M);
      if (r.state.drag.active) {
        if (typeof (d == null ? void 0 : d.buttons) == "number" && (d.buttons & 1) === 0)
          return r.endDrag(), !0;
        const D = C || r.state.drag;
        return r.moveDrag(D.x, D.y, "pano"), !0;
      }
    } catch {
    }
    return s ? s.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return r.state.drag.active ? (r.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = e.onMouseLeave;
  e.onMouseLeave = function() {
    const d = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), d;
  };
  const g = e.onMouseWheel;
  e.onMouseWheel = function(d, w, M) {
    var C, D;
    try {
      if ((C = this.flags) != null && C.collapsed) return g ? g.apply(this, arguments) : void 0;
      const V = so(this, d, w, M), O = oo(this);
      if (!V || !Gu(V.x, V.y, O)) return g ? g.apply(this, arguments) : void 0;
      const L = Number((d == null ? void 0 : d.deltaY) ?? (d == null ? void 0 : d.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return r.applyWheel(Math.sign(L)) && ((D = this.setDirtyCanvas) == null || D.call(this, !0, !1)), typeof (d == null ? void 0 : d.preventDefault) == "function" && d.preventDefault(), typeof (d == null ? void 0 : d.stopPropagation) == "function" && d.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, v = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = s, e.onMouseUp = u, e.onMouseLeave = f, e.onMouseWheel = g, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = v, e.onRemoved = function() {
    return v(), Ui.unregister(this), wo.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function Ny(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function qd(e, t) {
  var y, v, d, w, M, C, D, V, O, L, E, A;
  const n = (v = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : v.strokes, r = (w = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.mask) == null ? void 0 : w.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = Ny(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = cc(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) || null
  };
  return (((D = e.__panoPreviewPaintRevision) == null ? void 0 : D.paint) !== g.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== g.mask || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== g.groups || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.rasterObjects) !== g.rasterObjects) && (e.__panoPreviewPaintRevision = g, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((A = t == null ? void 0 : t.painting) == null ? void 0 : A.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Xd(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function My(e, t) {
  const n = qd(e, t);
  if (!n) return null;
  const r = Xd(t);
  return n.getErpTarget(r).displayPaint.canvas;
}
function ky(e, t, n = null) {
  var f;
  const r = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = Zn(r);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const s = e.__panoPaintingLayerImageCache;
  if (s.img && s.src === a) return s.img;
  const u = new Image();
  return u.onload = () => {
    var g;
    n == null || n(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
  }, u.onerror = () => {
    var g;
    ((g = e.__panoPaintingLayerImageCache) == null ? void 0 : g.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function qu(e, t) {
  var s, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = t == null ? void 0 : t.painting) == null ? void 0 : s.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = ky(e, t, () => {
      var g, y;
      return (y = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = My(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Py(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Cy(e, t, n, r) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, e[t] = a), a;
}
function Ay(e, t, n, r, a, s) {
  if (!t || !n || !(r > 0) || !(a > 0)) return;
  const u = Py(n);
  if (u.width === r && u.height === a) {
    t.drawImage(n, 0, 0, r, a);
    return;
  }
  const g = Cy(e, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    t.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, v = t.getImageData(0, 0, r, a), d = v.data, w = Math.max(0, u.width - 1), M = Math.max(0, u.height - 1);
    for (let C = 0; C < a; C += 1) {
      const D = (C + 0.5) * u.height / a - 0.5, V = G(Math.floor(D), 0, M), O = G(V + 1, 0, M), L = G(D - V, 0, 1);
      for (let E = 0; E < r; E += 1) {
        const A = (E + 0.5) * u.width / r - 0.5, B = G(Math.floor(A), 0, w), te = G(B + 1, 0, w), ae = G(A - B, 0, 1);
        let Q = 0, we = 0, k = 0, fe = 0;
        const ue = (ie, he, pe) => {
          const $ = (he * u.width + ie) * 4, be = (y[$ + 3] || 0) / 255;
          Q += be * pe, we += (y[$] || 0) / 255 * be * pe, k += (y[$ + 1] || 0) / 255 * be * pe, fe += (y[$ + 2] || 0) / 255 * be * pe;
        };
        if (ue(B, V, (1 - ae) * (1 - L)), ue(te, V, ae * (1 - L)), ue(B, O, (1 - ae) * L), ue(te, O, ae * L), Q <= 1e-6) continue;
        const le = (C * r + E) * 4, xe = 1 - Q;
        d[le] = Math.round(G((we + d[le] / 255 * xe) * 255, 0, 255)), d[le + 1] = Math.round(G((k + d[le + 1] / 255 * xe) * 255, 0, 255)), d[le + 2] = Math.round(G((fe + d[le + 2] / 255 * xe) * 255, 0, 255)), d[le + 3] = 255;
      }
    }
    t.putImageData(v, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, r, a);
  }
}
function Xu(e, t, n, r) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), s = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${s}|${r}`;
  let g = e.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, e.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(t, 0, 0, a, s), Ay(e, y, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function Iy(e, t, n, r = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  Ud(e, a);
  const s = Wc(e), u = t.parentElement, f = 1, g = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), v = Math.max(64, Math.round(g * f)), d = Math.max(64, Math.round(y * f)), w = t.getContext("2d");
  if (w)
    if (a === "cutout") {
      const M = gy(s), C = dc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Q, we;
          return (we = (Q = e.__panoDomPreview) == null ? void 0 : Q.requestDraw) == null ? void 0 : we.call(Q);
        },
        { preserveReadyWhilePending: !1 }
      ), D = !!(C && C.complete && (C.naturalWidth || C.width));
      (t.width !== v || t.height !== d) && (t.width = v, t.height = d);
      const V = { x: 0, y: 0, w: v, h: d }, O = D ? G(Number((C.naturalWidth || C.width) / Math.max(1, Number(C.naturalHeight || C.height || 1))), 0.05, 20) : 1, L = M ? ur(M) : null, E = G(Number((L == null ? void 0 : L.aspect) || O || 1), 0.05, 20), A = Gd(V, E);
      gc(t, V), w.setTransform(1, 0, 0, 1, 0, 0), w.fillStyle = "#070707", w.fillRect(0, 0, v, d);
      let B = "none", te = "Open editor and add frame", ae = "";
      if (ae = String((C == null ? void 0 : C.src) || ""), M)
        if (C && !D)
          B = "loading";
        else if (D) {
          const Q = pc(e, s), we = mc(e, s, Q), k = by(e, s), fe = Ti({
            stateRevision: [
              "runtime_cutout_scene",
              String(C.currentSrc || C.src || ""),
              Number(C.naturalWidth || C.width || 0),
              Number(C.naturalHeight || C.height || 0),
              Number((s == null ? void 0 : s.coverage) || 360) === 180 ? 180 : 360,
              String((M == null ? void 0 : M.id) || ""),
              Array.isArray(we) ? we.map((le) => `${String((le == null ? void 0 : le.assetId) || "")}:${String((le == null ? void 0 : le.revision) || "")}`).join(",") : "",
              Array.isArray(k) ? k.map((le) => `${String((le == null ? void 0 : le.id) || "")}:${String((le == null ? void 0 : le.revision) || "")}:${Number((le == null ? void 0 : le.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: C,
            backgroundRevision: String(C.currentSrc || C.src || ""),
            coverageDeg: Number((s == null ? void 0 : s.coverage) || 360) === 180 ? 180 : 360,
            scene: Q,
            textures: we,
            rasterEntries: k,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Ir()), e.__panoRuntimeCore.syncState(fe), e.__panoRuntimeCore.renderToContext(
            w,
            A,
            ur(M),
            { width: A.w, height: A.h, dpr: 1 }
          ) || (B = "empty", te = "Open editor or run node");
        } else
          B = "empty", te = "Connect ERP image";
      else {
        if (D) {
          const Q = qu(e, s), we = Q != null && Q.source ? Xu(e, C, Q.source, Q.revision || "") : C;
          py(w, we, V, 0.44);
        }
        B = "empty", te = "Open editor and add frame";
      }
      B === "loading" ? (Oa(e, !1), _r(e, !0, ae)) : B === "empty" ? (Oa(e, !0, te), _r(e, !1, "")) : (Oa(e, !1), _r(e, !1, ""));
    } else {
      Oa(e, !1), (t.width !== v || t.height !== d) && (t.width = v, t.height = d);
      const M = { x: 0, y: 0, w: v, h: d }, C = gc(t, M);
      w.setTransform(1, 0, 0, 1, 0, 0), w.clearRect(0, 0, v, d), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const D = Kc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * Dr * 0.5), O = dc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ue, le;
          return (le = (ue = e.__panoDomPreview) == null ? void 0 : ue.requestDraw) == null ? void 0 : le.call(ue);
        }
      ), L = !!(O && O.complete && (O.naturalWidth || O.width));
      w.fillStyle = "#1a1a1e", w.fillRect(0, 0, v, d);
      const E = pc(e, s), A = mc(e, s, E), B = Gc(e.__panoPreviewView, s == null ? void 0 : s.coverage), te = qu(e, s), ae = (te == null ? void 0 : te.source) || null, Q = L && ae ? Xu(e, O, ae, (te == null ? void 0 : te.revision) || "") : O, we = Q !== O ? String(Q.__revKey || "") : O ? [
        String(O.currentSrc || O.src || ""),
        Number(O.naturalWidth || O.width || 0),
        Number(O.naturalHeight || O.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Ir());
      let k = !1;
      if (L) {
        const le = e.__panoDomRuntimeCore.syncState(
          xy(Q, s, E, A, "runtime_dom_scene", we)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", B, {
          width: M.w,
          height: M.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        le && (w.drawImage(le, M.x, M.y, M.w, M.h), k = !0);
      }
      const fe = E.stickers;
      if (L && k)
        _r(e, !1, "");
      else if (L)
        No(e, w, M, D, V, Q, _o), _r(e, !1, "");
      else if (ae)
        No(e, w, M, D, V, ae, _o), _r(e, !!O && !L, String((O == null ? void 0 : O.src) || ""));
      else {
        const ue = !!O && !L;
        _r(e, ue, String((O == null ? void 0 : O.src) || "")), ue && hy(w, M, C);
      }
      if ((!L || fe.length === 0) && Zd(w, M, D, V, C), !k && fe.length > 0) {
        const ue = Qd(e), le = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, xe = ue || le, ie = xe ? 8 : 12, he = xe ? 6 : 9;
        fe.forEach((pe) => Yd(w, e, M, D, V, s, pe, ie, he));
      } else if (!O || !L) {
        const ue = Math.max(14, Math.round(16 * C));
        w.fillStyle = "rgba(212,212,216,0.85)", w.font = `600 ${ue}px Plus Jakarta Sans, Geist, sans-serif`, w.textAlign = "center", w.fillText("Open editor to add stickers", v * 0.5, d * 0.5 + 24 * C);
      }
    }
}
function No(e, t, n, r, a, s, u = Um) {
  const f = Wc(e), g = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Ir());
  const y = Uo({
    stateRevision: [
      "runtime_bg_only",
      String((s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || ""),
      Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 0),
      Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 0),
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String((s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || ""),
      Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 0),
      Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 0)
    ].join("|"),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(y)) return;
  const d = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(g.yaw || 0),
    pitchDeg: Number(g.pitch || 0),
    fovDeg: Number(g.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  d && t.drawImage(d, n.x, n.y, n.w, n.h);
}
function Zu(e, t, n, r, a, s, u = 1) {
  let f = !1;
  e.strokeStyle = s, e.lineWidth = u, e.beginPath();
  for (const g of t) {
    const y = Wd(g, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), f = !0);
  }
  e.stroke();
}
function Zd(e, t, n, r, a = 1) {
  e.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const v = [];
    for (let d = -180; d <= 180; d += 15) v.push(Sr(d, y));
    Zu(e, v, n, t, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const v = [];
    for (let d = -89; d <= 89; d += 15) v.push(Sr(y, d));
    Zu(e, v, n, t, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Sr(0, 0) },
    { name: "Right", dir: Sr(90, 0) },
    { name: "Back", dir: Sr(180, 0) },
    { name: "Left", dir: Sr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  e.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((y) => {
    const v = Wd(y.dir, n, t, r);
    v && e.fillText(y.name, v.x, v.y + 20 * a);
  }), e.restore();
}
function Dy(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Jd(e) {
  const t = Dy(e);
  t.dragging = !1, t.hqFrames = Gm;
}
function Mo(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Qd(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function Ey(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Ty(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!r) return !1;
  const a = Number(e.clientX) - Number(r.left || 0), s = Number(e.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function Xr(e, t) {
  return Ty(e, t) ? !1 : (Ey(e), !0);
}
function Ry() {
  var n;
  const e = (n = lt == null ? void 0 : lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Ly(e) {
  var n;
  if (!e) return;
  const t = (n = lt == null ? void 0 : lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Oy(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0) return;
  const r = hr(e), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= t && s >= n) return;
  const u = [Math.max(t, a), Math.max(n, s)];
  try {
    typeof e.setSize == "function" ? e.setSize(u) : e.size = u, e.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function Fy(e, t = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    e.__panoBootMinHeightTimer = null, (s = e == null ? void 0 : e.__panoDomPreview) != null && s.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Ju(e, t = null, n = 0) {
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, Mo(e, 150), t == null || t(), eh(e, 180, t);
    }
  };
}
function eh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ti(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function Vy(e, t = {}) {
  var pe;
  const n = t.__allowStandalone === !0, r = Xm(e);
  if (r && !n) {
    Vd(e);
    return;
  }
  r && Oy(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", wo.register(e);
  const a = e.__panoPreviewMode === "stickers", s = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || Ui.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), g = a ? Hd(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Ar(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (g.chosenPath = f, g.reason = "controller_target_backend");
  const y = a ? g.chosenPath : "dom", v = g.signature || Ar(e);
  if (Number(e.__panoRebindGeneration || 0), fc(e), e == null || e.id, e.__panoPreviewMode, g.reason, g.frontendVersionRaw, e.addDOMWidget, hr(e), e.__panoFrontendSig = v, e.__panoStickersPath = y, a && Ui.register(e), a && y === "legacy_draw") {
    if (s) return;
    ui(e, { keepMonitor: !0 }), Fa(e);
    return;
  }
  if ((pe = e.__panoDomPreview) != null && pe.widget) return;
  if (e.__panoLegacyPreviewHooked && ui(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !s && Fa(e);
    return;
  }
  const d = t.noPreview === !0, w = a || d ? 0 : 56, M = document.createElement("div");
  if (Ym(), M.className = "pano-node-preview-dom", M.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && M.classList.add("pano-node-preview--no-preview"), M.setAttribute("data-capture-wheel", "true"), M.setAttribute("tabindex", "-1"), M.style.cssText = [
    "width:100%",
    d ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), d) {
    const $ = e.addDOMWidget(uc(), "preview", M, Ju(e, null));
    ti(e), e.__panoDomPreview = { widget: $, root: M, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const C = document.createElement("div");
  C.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const D = document.createElement("canvas");
  D.style.cssText = [
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
  const V = document.createElement("div");
  V.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", C.appendChild(D), C.appendChild(V), M.appendChild(C), Fd(e, 120, 120), ti(e);
  let O = null;
  try {
    Fy(e, w, () => {
      var $, be;
      return (be = ($ = e.__panoDomPreview) == null ? void 0 : $.requestDraw) == null ? void 0 : be.call($);
    }), O = e.addDOMWidget(
      uc(),
      "preview",
      M,
      Ju(e, () => {
        var $, be;
        return (be = ($ = e.__panoDomPreview) == null ? void 0 : $.requestDraw) == null ? void 0 : be.call($);
      }, w)
    );
  } catch {
    a && Fa(e);
    return;
  }
  const L = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, E = () => {
    L.needsDraw = !0, L.raf || (L.raf = requestAnimationFrame(te));
  }, A = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Mo(e, 150), E();
  }) : null;
  A == null || A.observe(C);
  const B = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const $ = 3, be = (De) => {
      requestAnimationFrame(() => {
        var $e;
        const Te = !!(M != null && M.isConnected && (C != null && C.isConnected) && (D != null && D.isConnected) && Number(C.clientHeight || 0) > 0 && Number(D.clientHeight || 0) > 0);
        if (!Te && De < $) {
          be(De + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((C == null ? void 0 : C.clientHeight) || 0), Number((D == null ? void 0 : D.clientHeight) || 0), !Te) {
          if (s) {
            e.__panoPreviewMode, Number((C == null ? void 0 : C.clientHeight) || 0), Number((D == null ? void 0 : D.clientHeight) || 0);
            return;
          }
          ui(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Fa(e), ($e = e.setDirtyCanvas) == null || $e.call(e, !0, !0);
        }
      });
    };
    be(1);
  }, te = ($) => {
    var De, Te, $e;
    L.raf = 0;
    const be = ae.stepInertia($);
    (L.needsDraw || be) && (L.needsDraw = !1, (De = e.flags) != null && De.collapsed || Iy(e, D, null, ae), (Te = e.setDirtyCanvas) == null || Te.call(e, !0, !1)), (be || L.needsDraw) && (L.raf = requestAnimationFrame(te)), Wm() && (!e.__panoDebugLastTs || $ - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = $, e.__panoPreviewMode, hr(e), Ci(M), Ci(C), Ci(D), Ci(M.parentElement), Ci(($e = M.parentElement) == null ? void 0 : $e.parentElement), Number(D.width || 0), Number(D.height || 0), void 0);
  }, ae = Go({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: ($) => {
      e.__panoPreviewView = $;
    },
    onInteraction: () => {
      E();
    }
  });
  D.addEventListener("pointerdown", ($) => {
    var be, De;
    Xr($, C) && u && $.button === 0 && ((be = M.focus) == null || be.call(M), (De = D.setPointerCapture) == null || De.call(D, $.pointerId), D.style.cursor = "grabbing", ae.startDrag($.clientX, $.clientY, $.pointerId));
  }), D.addEventListener("pointermove", ($) => {
    !u || !ae.state.drag.active || (Xr($, C), ae.moveDrag($.clientX, $.clientY, "pano"));
  });
  const Q = ($) => {
    var be;
    !u || !ae.state.drag.active || (Xr($, C), (be = D.releasePointerCapture) == null || be.call(D, $.pointerId), D.style.cursor = "grab", ae.endDrag(), Jd(e), E());
  };
  D.addEventListener("pointerup", Q), D.addEventListener("pointercancel", Q), D.addEventListener("pointerleave", ($) => {
    ae.state.drag.active && Q($);
  });
  const we = ($) => {
    var De, Te, $e;
    if (!Xr($, C) || !u) return;
    const be = Ry();
    ae.applyWheelEvent($) && E(), (De = $.preventDefault) == null || De.call($), (Te = $.stopPropagation) == null || Te.call($), ($e = $.stopImmediatePropagation) == null || $e.call($), requestAnimationFrame(() => {
      var Qe, dt;
      Ly(be), (dt = (Qe = lt == null ? void 0 : lt.canvas) == null ? void 0 : Qe.setDirty) == null || dt.call(Qe, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach(($) => {
    C.addEventListener($, we, { passive: !1, capture: !0 }), D.addEventListener($, we, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach(($) => {
    D.addEventListener($, (be) => Xr(be, C)), C.addEventListener($, (be) => Xr(be, C));
  });
  const k = na(e, "state_json");
  if (k && !k.__panoPreviewPatchedCb) {
    k.__panoPreviewPatchedCb = !0;
    const $ = k.callback;
    k.callback = (be) => {
      const De = $ ? $(be) : void 0;
      return E(), De;
    };
  }
  const fe = na(e, "bg_color");
  if (fe && !fe.__panoPreviewPatchedCb) {
    fe.__panoPreviewPatchedCb = !0;
    const $ = fe.callback;
    fe.callback = (be) => {
      const De = $ ? $(be) : void 0;
      return E(), De;
    };
  }
  const ue = e.onRemoved, le = e.onResize, xe = e.onExecuted;
  e.onExecuted = function($) {
    uy(e, $), hc(e), ti(e), E();
    const be = xe ? xe.apply(this, arguments) : void 0;
    return ti(e), be;
  };
  const ie = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return hc(e), ti(e), E(), ie ? ie.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var be;
    const $ = le ? le.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Mo(this, 150), E(), (be = this.setDirtyCanvas) == null || be.call(this, !0, !1), $;
  }, e.onRemoved = function() {
    return he(), Ui.unregister(this), wo.unregister(this), ue ? ue.apply(this, arguments) : void 0;
  };
  const he = () => {
    var $;
    L.raf && cancelAnimationFrame(L.raf), ($ = A == null ? void 0 : A.disconnect) == null || $.call(A), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = le, e.onExecuted = xe, e.onConnectionsChange = ie, e.onRemoved = ue;
  };
  e.__panoDomRestore = he, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: O, root: M, canvas: D, requestDraw: E, state: L, emptyHintEl: V }, B(), E();
}
function Qu(e, t = {}) {
  zd(e).attach({
    ...t,
    mode: "cutout"
  });
}
const ko = Math.PI / 180;
function Tr(e, t, n) {
  return { x: e, y: t, z: n };
}
function ef(e, t) {
  return Tr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Va(e, t) {
  return Tr(e.x * t, e.y * t, e.z * t);
}
function tf(e, t) {
  return Tr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ha(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Tr(e.x / t, e.y / t, e.z / t);
}
function Hy(e, t) {
  const n = e * ko, r = t * ko, a = Math.cos(r);
  return Tr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function zy(e, t, n = 0) {
  const r = Hy(e, t), a = Tr(0, 1, 0);
  let s = tf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Tr(1, 0, 0)), s = Ha(s);
  const u = Ha(tf(r, s)), f = n * ko, g = Math.cos(f), y = Math.sin(f), v = ef(Va(s, g), Va(u, y)), d = ef(Va(s, -y), Va(u, g));
  return { fwd: r, right: Ha(v), up: Ha(d) };
}
const za = 140, jy = 180, nf = 40, $s = 10;
function rf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function af(e, t) {
  const n = rf(e), r = rf(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function of(e) {
  var s;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((s = Jt) == null ? void 0 : s.apiURL) == "function" ? Jt.apiURL(a) : a;
}
function Gi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Gi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return of({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Gi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : of(e);
}
function sf(e) {
  var a;
  const t = (a = un) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (af(s, n)) return t.get(s);
  } else
    for (const s of Object.keys(t))
      if (af(s, n)) return t[s];
  return null;
}
function $y(e, t = "erp_image") {
  var C, D, V, O, L, E, A, B, te, ae, Q, we;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const a = n.find((k) => String((k == null ? void 0 : k.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const k = n.find((fe) => String((fe == null ? void 0 : fe.type) || "").toUpperCase() === "IMAGE" && (fe == null ? void 0 : fe.link) != null);
    (k == null ? void 0 : k.link) != null && (r = k.link);
  }
  if (r == null) return "";
  const s = ((D = (C = e == null ? void 0 : e.graph) == null ? void 0 : C.links) == null ? void 0 : D[r]) || ((L = (O = (V = un) == null ? void 0 : V.graph) == null ? void 0 : O.links) == null ? void 0 : L[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (B = (A = (E = un) == null ? void 0 : E.graph) == null ? void 0 : A.getNodeById) == null ? void 0 : B.call(A, u), g = sf(u), y = sf(e == null ? void 0 : e.id), v = [
    g == null ? void 0 : g.images,
    (te = g == null ? void 0 : g.ui) == null ? void 0 : te.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (ae = y == null ? void 0 : y.ui) == null ? void 0 : ae.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const k of v)
    if (Array.isArray(k))
      for (const fe of k) {
        const ue = Gi(fe);
        if (ue) return ue;
      }
  let d = [];
  try {
    d = typeof ((Q = un) == null ? void 0 : Q.getNodeImageUrls) == "function" ? un.getNodeImageUrls(f) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const k of d) {
      const fe = Gi(k);
      if (fe) return fe;
    }
  if (f) {
    const k = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const fe of k) {
      const ue = Gi(fe);
      if (ue) return ue;
    }
  }
  const w = (we = f == null ? void 0 : f.widgets) == null ? void 0 : we.find((k) => String((k == null ? void 0 : k.name) || "").toLowerCase() === "image"), M = String((w == null ? void 0 : w.value) || "").trim();
  return M ? Jt.apiURL(`/view?filename=${encodeURIComponent(M)}&type=input&subfolder=`) : "";
}
function cf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function lf(e, t, n, r, a, s) {
  var d, w, M;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    cf(t, n, r);
    return;
  }
  const u = zy(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * ko * 0.5), g = Number(((M = (w = (d = e == null ? void 0 : e.widgets) == null ? void 0 : d.find) == null ? void 0 : w.call(d, (C) => (C == null ? void 0 : C.name) === "coverage")) == null ? void 0 : M.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = Ir());
  const y = Uo({
    stateRevision: [
      "standalone_preview_scene",
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0),
      g
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|"),
    coverageDeg: g,
    scene: Ko(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(y) && (() => {
    const C = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Bm(a, g),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return C ? (t.drawImage(C, 0, 0, n, r), !0) : !1;
  })() || (No(e, t, { x: 0, y: 0, w: n, h: r }, u, f, s, _o), cf(t, n, r));
}
function uf(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class By {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Go({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Lt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: G(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: G(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, s, u, f;
        const r = (s = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : s.call(a);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    var r, a, s;
    const t = this;
    this.node.onExecuted = function() {
      const u = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), u;
    }, this.node.onConnectionsChange = function() {
      const u = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), u;
    }, this.node.onResize = function() {
      const u = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), u;
    }, this.node.onRemoved = function() {
      const u = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), u;
    };
    const n = ((s = (a = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : a.find) == null ? void 0 : s.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var s;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (s = this.flags) != null && s.collapsed || !t.errorText) return r;
      const a = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${za}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = document.createElement("canvas"), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return za;
        },
        getHeight() {
          return za;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const s = r ? r(a) || {} : {};
          return {
            ...s,
            minHeight: Math.max(za, Number(s.minHeight || 0)),
            minWidth: Math.max(jy, Number(s.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.onResizeDom(), this.logProbeFrames();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  bindDomInput(t, n) {
    t.addEventListener("pointerdown", (a) => {
      var s, u, f;
      a.button === 0 && ((s = n.focus) == null || s.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a));
    });
    const r = (a) => {
      var s, u;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var s;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a);
    }, { passive: !1, capture: !0 });
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var u;
      const a = t.localPoint(r);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const s = t.getLegacyPreviewRect();
      return uf(a.x, a.y, s) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(r);
      if (!a) return !0;
      const s = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - s.x, a.y - s.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, a) {
      var y, v, d, w, M, C;
      const s = so(this, n, r, a), u = t.getLegacyPreviewRect();
      if (!s || !uf(s.x, s.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = t.view) == null ? void 0 : y.fov) || 100);
      const g = t.controller.applyWheel(Math.sign(f));
      return Number(((v = t.view) == null ? void 0 : v.fov) || 100), g && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (M = n == null ? void 0 : n.stopPropagation) == null || M.call(n), (C = n == null ? void 0 : n.stopImmediatePropagation) == null || C.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const t = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - $s * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - nf - $s);
    return { x: $s, y: nf, w: t, h: n };
  }
  drawLegacy(t) {
    var r, a;
    if (!t || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), lf(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, r = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const t = $y(this.node, this.imageInputName);
    if (!t) {
      this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (t === this.imgSrc && this.img) return;
    this.imgSrc = t;
    const n = new Image();
    n.onload = () => {
      this.imgSrc === t && (this.img = n, this.requestDraw());
    }, n.onerror = () => {
      this.imgSrc === t && (this.img = null, this.requestDraw());
    }, n.src = t;
  }
  requestDraw() {
    var t, n;
    if (this.needsDraw = !0, this.inTick) {
      this.queuedDuringTick = !0;
      return;
    }
    this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (n = (t = this.node).setDirtyCanvas) == null || n.call(t, !0, !1);
  }
  tick(t = performance.now()) {
    var a, s;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (lf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  logProbeFrames() {
    if (!this.root || !this.canvas) return;
    let t = 0;
    const n = () => {
      !this.root || !this.canvas || t >= 3 || (t += 1, requestAnimationFrame(n));
    };
    requestAnimationFrame(n);
  }
  teardown() {
    var n, r, a, s, u, f, g, y, v, d, w;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null;
    try {
      (u = (s = this.root) == null ? void 0 : s.remove) == null || u.call(s);
    } catch {
    }
    if (Array.isArray((f = this.node) == null ? void 0 : f.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((M) => M !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((v = (y = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : y.find) == null ? void 0 : v.call(y, (M) => (M == null ? void 0 : M.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (w = (d = this.node.__panoStandaloneCore) == null ? void 0 : d.dispose) == null || w.call(d), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function Uy(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new By(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Gy(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t)}`;
  if (e[r]) return;
  e[r] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const s = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = s ? s.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const u = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const f = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function th(e) {
  return !!(e != null && e.prototype);
}
function yc(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Ky(e, t = {}) {
  th(e) || Uy(e, {
    ...t,
    onOpen: yc(e, t.onOpen)
  });
}
function Wy(e, t = {}) {
  if (!th(e)) {
    Qu(e, {
      ...t,
      onOpen: yc(e, t.onOpen)
    });
    return;
  }
  Gy(e, "cutout_preview", (n) => {
    Qu(n, {
      ...t,
      onOpen: yc(n, t.onOpen)
    });
  });
}
const nn = {
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
}, Bn = "pen";
function ff(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Yy(e = 80, t = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((d) => {
      r.push(String(d || ""));
    }), !r.length)) return;
    const v = Number(y.index);
    Number.isInteger(v) ? v === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, v)) : a = r.length - 1;
  }
  function g(y) {
    r[a] !== y && (r.splice(a + 1), r.push(y), r.length > s && r.shift(), a = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      g(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = r.length, v = Math.max(0, y - u), d = a >= 0 ? Math.max(0, Math.min(a, v)) : v, w = r.slice(d, d + u), M = a < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, a - d));
      return {
        version: 1,
        entries: w,
        index: M
      };
    },
    hydrate: f
  };
}
function et(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function qy() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Xy(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const s = et(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(s ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function Zy(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Jy(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = et(e.t, 0), r = et(e.widthScale, null), a = et(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const s = et(e.u, null), u = et(e.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (s % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const s = et(e.u, null), u = et(e.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: s,
      v: u,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function ja(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const a of e) {
    const s = Jy(a, t);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function Qy(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = ja(e.points, t, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = ja(e.points, t, 1);
  if (!s) return null;
  const u = ja(e.rawPoints, t, 1), f = ja(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((g) => ({ ...g })),
    processedPoints: f || s.map((g) => ({ ...g }))
  };
}
function eb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Zy(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), a = Qy(e.geometry, n, r, t === "paint");
  if (!a) return null;
  const s = et(e.size, null), u = et(e.opacity, null);
  if (s == null || u == null) return null;
  const f = String(e.id || "").trim(), g = String(e.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = et(e.radiusValue, null), v = String(e.radiusModel || "").trim() || null;
  let d = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    d = {
      r: Math.max(0, Math.min(1, et(w.r, 0))),
      g: Math.max(0, Math.min(1, et(w.g, 0))),
      b: Math.max(0, Math.min(1, et(w.b, 0))),
      a: Math.max(0, Math.min(1, et(w.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: g,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, s),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: et(e.hardness, null),
    flow: et(e.flow, null),
    spacing: et(e.spacing, null),
    createdAt: Math.trunc(et(e.createdAt, 0)),
    color: d,
    radiusModel: v,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function df(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const a = eb(r, t);
    a && n.strokes.push(a);
  }
  return n;
}
function tb(e) {
  if (!e || typeof e != "object") return null;
  const t = et(e.u0, null), n = et(e.v0, null), r = et(e.u1, null), a = et(e.v1, null);
  if (t == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(t), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function nb(e) {
  const t = e || {};
  return {
    du: et(t.du, 0) ?? 0,
    dv: et(t.dv, 0) ?? 0,
    rot_deg: et(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, et(t.scale, 1) ?? 1)
  };
}
function rb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = tb(e.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, et(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: nb(e.transform)
  } : null;
}
function ib(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = rb(r, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Ki(e) {
  const t = qy();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Xy(e.groups),
    paint: df(e.paint, "paint"),
    mask: df(e.mask, "mask"),
    raster_objects: ib(e.raster_objects)
  };
}
function hf(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function ab(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function gf(e = {}, t = 0) {
  var a;
  const n = String((e == null ? void 0 : e.type) || "");
  if (!n) return null;
  const r = {
    id: String((e == null ? void 0 : e.id) || `${n}_${t}`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    zIndex: Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? t)
  };
  return n === "sticker" ? (r.transform = ab((e == null ? void 0 : e.transform) || e), r.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (r.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, r.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), r;
}
function ob(e = {}) {
  var r, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return hi({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: hf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((r = e == null ? void 0 : e.objectPass) == null ? void 0 : r.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((s, u) => gf(s, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = hf((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((s, u) => gf(s, u)).filter(Boolean);
  return hi({
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: t,
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: n
    },
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  });
}
function ra(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Po(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function sb(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Ir((e == null ? void 0 : e.coreOptions) || {});
  let r = null, a = "";
  function s(d) {
    var w;
    return JSON.stringify({
      stateRevision: (d == null ? void 0 : d.stateRevision) || "",
      background: (d == null ? void 0 : d.background) || null,
      objects: Array.isArray((w = d == null ? void 0 : d.objectPass) == null ? void 0 : w.objects) ? d.objectPass.objects.map((M) => ({
        id: (M == null ? void 0 : M.id) || "",
        type: (M == null ? void 0 : M.type) || "",
        revision: (M == null ? void 0 : M.revision) || "",
        visible: (M == null ? void 0 : M.visible) !== !1,
        opacity: Number((M == null ? void 0 : M.opacity) ?? 1),
        zIndex: Number((M == null ? void 0 : M.zIndex) ?? 0),
        transform: (M == null ? void 0 : M.transform) || null,
        params: (M == null ? void 0 : M.params) || null
      })) : [],
      overlay: (d == null ? void 0 : d.overlay) || {}
    });
  }
  function u(d = {}) {
    const w = ob(d), M = s(w);
    return a === M || !n.syncState(w) ? !1 : (r = w, a = M, !0);
  }
  function f(d = {}, w = {}) {
    if (!r) return null;
    const M = ra(d), C = Po(w);
    return n.renderToTarget(t, M, C);
  }
  function g(d, w, M = {}, C = {}) {
    if (!d || !w || !r) return !1;
    const D = ra(M), V = Po({
      ...C,
      width: Number((w == null ? void 0 : w.w) || (C == null ? void 0 : C.width) || 1),
      height: Number((w == null ? void 0 : w.h) || (C == null ? void 0 : C.height) || 1)
    });
    return n.renderToContext(d, w, D, V);
  }
  function y() {
    var d;
    r = null, a = "", (d = n.clearState) == null || d.call(n);
  }
  function v() {
    var d;
    y(), (d = n.dispose) == null || d.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: g,
    snapshotScene: () => r,
    clearScene: y,
    dispose: v
  };
}
function cb(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob((s) => {
      s ? r(s) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function lb(e, t = {}) {
  var g, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = ra((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), r = (t == null ? void 0 : t.output) || ((g = t == null ? void 0 : t.camera) == null ? void 0 : g.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = Po(
    r || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), s = e.renderFrame(n, a);
  if (!s) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return cb(s, u, f);
}
function ub(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const r = document.createElement("canvas");
  r.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), r.style.width = "100%", r.style.height = "100%", r.style.display = "block", t.appendChild(r);
  const a = r.getContext("2d");
  let s = ra((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function g() {
    const w = Number((n == null ? void 0 : n.width) || t.clientWidth || r.clientWidth || 1), M = Number((n == null ? void 0 : n.height) || t.clientHeight || r.clientHeight || 1), C = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), D = Po({ width: w, height: M, dpr: C });
    return r.width = Math.max(1, Math.round(D.width * D.dpr)), r.height = Math.max(1, Math.round(D.height * D.dpr)), r.style.width = `${D.width}px`, r.style.height = `${D.height}px`, D;
  }
  function y() {
    if (u || !a) return !1;
    const w = g();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.width, r.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: r.width, h: r.height },
      s,
      { ...w, width: r.width, height: r.height, dpr: 1 }
    );
  }
  function v() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, y();
    }));
  }
  const d = typeof ResizeObserver == "function" ? new ResizeObserver(() => v()) : null;
  return d == null || d.observe(t), v(), {
    canvas: r,
    setView(w) {
      s = ra(w || {}), v();
    },
    getView() {
      return { ...s };
    },
    present: y,
    requestRender: v,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), d == null || d.disconnect(), r.remove();
    }
  };
}
function fb(e = {}) {
  const t = sb({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, r = {}) {
      return t.renderFrame(ur(n), r);
    },
    renderShotToContext(n, r, a, s = {}) {
      return t.renderToContext(n, r, ur(a), s);
    },
    mount(n, r = {}) {
      const a = r != null && r.shot ? ur(r.shot) : r == null ? void 0 : r.view;
      return ub(t, n, { ...r, view: a });
    },
    exportFrame(n = {}) {
      const r = n != null && n.shot ? { ...n, camera: ur(n.shot) } : n;
      return lb(t, r);
    }
  };
}
function Ai(e, t, n, r) {
  const a = Array.isArray(e) ? e.find((s) => String((s == null ? void 0 : s[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, r);
}
function db(e = {}) {
  const t = String(e.preview_quality || "balanced"), n = [
    { value: "draft", label: "Draft" },
    { value: "balanced", label: "Balanced" },
    { value: "high", label: "High" }
  ];
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y,
    qualityOpen: !1,
    qualityLabel: (n.find((r) => r.value === t) || n[1]).label,
    qualityOptions: n.map((r) => ({ ...r, active: r.value === t }))
  };
}
function hb({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: s,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: g
}) {
  var E, A;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", v = {
    visible: y,
    activePane: y ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: y ? !!n : !1,
    pickerHueColor: r({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (B, te) => ({ index: te, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return v;
  const d = ((E = t.find((B) => a(e.paintColor, B.color))) == null ? void 0 : E.id) || "", w = !d, M = s(e.customPaintColor), C = Math.round(Math.max(0, Math.min(1, Number(((A = e.customPaintColor) == null ? void 0 : A.a) ?? 1))) * 100), D = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[D] ?? 10, O = g(), L = Array.from({ length: 8 }, (B, te) => e.customPaintHistory[te] || null);
  return {
    ...v,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: d,
    customColorActive: w,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...u(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: C,
    alphaText: `${C}%`,
    historyEntries: L.map((B, te) => ({
      index: te,
      color: B ? { cssColor: r(B, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: O,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function gb({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
  return {
    coverage: { value: n(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    visibilityRows: [],
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
function pb({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: s,
  params: u,
  notes: f,
  visibilityRows: g,
  uiSettings: y,
  normalizeCoverageValue: v
}) {
  return {
    coverage: { value: v(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || a === "stroke" || s.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: g,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function mb({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: s,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: g,
  isExternalSticker: y,
  isStickerHidden: v,
  canRestoreSelectedToInitial: d,
  iconSet: w
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let M = [];
  if (n.length > 1)
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (r === "stroke")
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (e === "stickers" || r === "image") {
    if (M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back }
    ], y(t) || (M.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: w.duplicate }), M.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: w.replace_image })), y(t)) {
      const E = d(), A = v(t);
      M.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: E ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !E
      }), M.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: A ? "Show" : "Hide",
        tip: A ? "Show input image" : "Hide input image",
        icon: A ? w.eye : w.eye_dashed
      });
    }
    M.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed }), y(t) || M.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete });
  } else
    M = [
      {
        key: "aspect",
        kind: "aspect",
        icon: w.aspect,
        open: !!g,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((E) => ({ value: E, label: E, active: f === E }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const C = a.corners.map((E) => E.x), D = a.corners.map((E) => E.y), V = Math.min(...C), O = Math.max(...C), L = Math.max(...D);
  return {
    visible: !0,
    left: (V + O) * 0.5,
    top: L + 18,
    items: M,
    anchor: { minX: V, maxX: O, maxY: L }
  };
}
const qe = {
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  // View toggle
  pano: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M1.5 8.2c1.9-2.2 4.1-3.3 6.5-3.3s4.6 1.1 6.5 3.3'/><path d='M2.6 10.9c1.5-1.5 3.3-2.3 5.4-2.3s3.9.8 5.4 2.3'/><circle cx='8' cy='12.2' r='1' fill='currentColor' stroke='none'/></svg>",
  unwrap: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='1.75' y='3' width='12.5' height='10' rx='2'/><path d='M5.9 3v10M10.1 3v10'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Left toolbar
  cursor_tool: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 2.5 12.2 8l-4 1.2 1.8 4.3-1.8.8-1.9-4.3-2.6 2.2z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  palette_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z'/><path d='M7 13.5a2.5 2.5 0 0 0 2.5 2.5H11a2 2 0 0 1 0 4h-1'/><circle cx='7.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/><circle cx='12' cy='6.5' r='.9' fill='currentColor' stroke='none'/><circle cx='16.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  clear: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  undo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 4.3 2.8 7l2.7 2.7'/><path d='M3.1 7h5.3a3.7 3.7 0 1 1 0 7.4'/></svg>",
  redo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m10.5 4.3 2.7 2.7-2.7 2.7'/><path d='M12.9 7H7.6a3.7 3.7 0 1 0 0 7.4'/></svg>",
  // Floating right
  reset: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.2a4.8 4.8 0 1 1-4.8 4.8'/><path d='M3.2 3.2v3.6h3.6'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  // Paint dock
  pencil_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m3 21 3.8-1 10-10a2.1 2.1 0 0 0-3-3L3.8 17z'/><path d='m14.5 6.5 3 3'/></svg>",
  spray_can_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 6h6'/><path d='M12 3h2a2 2 0 0 1 2 2v1'/><path d='M9 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z'/><path d='M5 10h.01'/><path d='M3 14h.01'/><path d='M5 18h.01'/></svg>",
  highlighter_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m14 4 6 6'/><path d='m4 20 4.5-1 9-9-3.5-3.5-9 9z'/><path d='M13 7 17 11'/><path d='M3 21h7'/></svg>",
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  eraser_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m7 13.5 6.8-6.8a2.2 2.2 0 0 1 3.1 0l2.4 2.4a2.2 2.2 0 0 1 0 3.1l-6.8 6.8a2.2 2.2 0 0 1-1.5.6H7.8a2.2 2.2 0 0 1-1.6-.6l-1.5-1.5a2.2 2.2 0 0 1 0-3.1L7 13.5Z'/><path d='M13.5 19.5H21'/></svg>",
  lasso_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M7.2 18.8C4.6 18 3 16.2 3 14c0-3.9 4-7 9-7s9 3.1 9 7-4 7-9 7c-1.1 0-2.2-.1-3.1-.4'/><path d='M7 17c1 0 1.8.8 1.8 1.8S8 20.6 7 20.6s-1.8-.8-1.8-1.8S6 17 7 17Z'/></svg>"
}, Co = {
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
    const t = e, n = Pr(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, a) => (Ce(), pi(L0(e.tag), Md({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value, { innerHTML: e.icon }), null, 16, ["class", "innerHTML"]));
  }
}, yb = { class: "pano-floating-right" }, bb = {
  class: "pano-fov-value",
  "data-fov-value": "",
  "aria-label": "Field of view"
}, vb = ["data-settled"], _b = ["data-ready", "data-settled"], xb = ["aria-label", "data-tip", "innerHTML"], wb = {
  key: 1,
  class: "pano-camera-preview-label"
}, Sb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    fovValue: { type: String, default: "100°" },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ce(), Ee(tt, null, [
      se("div", yb, [
        se("span", bb, kt(e.fovValue), 1),
        (Ce(!0), Ee(tt, null, Zt(e.buttons, (r) => (Ce(), pi(Co, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Tc(se("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        se("div", {
          class: xt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: qt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = se("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Ce(), Ee("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview",
            innerHTML: e.previewToggle.icon
          }, null, 8, xb)) : on("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ce(), Ee("div", wb, kt(e.preview.label || "Preview unavailable"), 1)) : on("", !0)
        ], 14, _b)
      ], 8, vb), [
        [Hc, e.preview.visible]
      ])
    ], 64));
  }
}, Nb = ["aria-label"], Mb = { class: "pano-canvas-confirm-title" }, kb = { class: "pano-canvas-confirm-text" }, Pb = { class: "pano-canvas-confirm-actions" }, Cb = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Ab = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ tc(null), r = /* @__PURE__ */ tc(null);
    let a = null;
    function s() {
      const d = r.value;
      return d ? Array.from(d.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function u(d) {
      const w = r.value;
      if (!w) return;
      const M = w.querySelector(`[data-action='${d}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function f() {
      var D;
      const d = r.value;
      if (!d) return;
      const w = d.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const C = s()[0] || d;
      (D = C == null ? void 0 : C.focus) == null || D.call(C);
    }
    function g() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(d) {
      var O;
      if (d.defaultPrevented) return;
      if (d.key === "Escape") {
        d.preventDefault(), d.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (d.key !== "Tab") return;
      const w = s(), M = r.value;
      if (!w.length) {
        d.preventDefault(), (O = M == null ? void 0 : M.focus) == null || O.call(M);
        return;
      }
      const C = w[0], D = w[w.length - 1], V = document.activeElement;
      if (d.shiftKey) {
        (V === C || V === M || !(M != null && M.contains(V))) && (d.preventDefault(), D.focus());
        return;
      }
      (V === D || !(M != null && M.contains(V))) && (d.preventDefault(), C.focus());
    }
    function v(d) {
      d.target === n.value && u("confirm-cancel");
    }
    return Hi(() => t.model.visible, (d, w) => {
      if (d) {
        a = document.activeElement, Dc(() => {
          f();
        });
        return;
      }
      w && g();
    }, { immediate: !0 }), Lc(() => {
      g();
    }), (d, w) => e.model.visible === !0 ? (Ce(), Ee("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Id(v, ["self"])
    }, [
      se("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        se("div", Mb, kt(e.model.title), 1),
        se("div", kb, kt(e.model.text), 1),
        se("div", Pb, [
          w[0] || (w[0] = se("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          se("button", Cb, kt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Nb)
    ], 512)) : on("", !0);
  }
}, Ib = ["data-paint-pane"], Db = ["hidden"], Eb = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Tb = ["aria-pressed", "disabled"], Rb = ["hidden"], Lb = { class: "pano-paint-color-pop-head" }, Ob = { class: "pano-paint-color-field" }, Fb = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Vb = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Hb = { class: "pano-paint-color-field" }, zb = { class: "pano-paint-alpha-wrap" }, jb = ["value"], $b = { "data-paint-alpha-value": "" }, Bb = ["hidden"], Ub = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Gb = ["data-paint-history-index", "aria-label", "disabled"], Kb = ["data-paint-footer"], Wb = ["data-paint-group"], Yb = ["hidden"], qb = ["value", "disabled"], Xb = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Zb = ["hidden"], Jb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(r) {
      return { "--swatch": String((r == null ? void 0 : r.cssColor) || "") };
    }
    function n(r) {
      return r ? { "--swatch": String(r.cssColor || "") } : {};
    }
    return (r, a) => (Ce(), Ee("div", {
      class: xt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ce(!0), Ee(tt, null, Zt(e.panes, (s) => {
        var u;
        return Ce(), Ee("div", {
          key: s.key,
          class: xt(["pano-paint-pane", { "is-active": e.state.activePane === s.key }]),
          "data-paint-pane": s.key
        }, [
          s.showColorFloat ? (Ce(), Ee("div", {
            key: 0,
            class: xt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ce(!0), Ee(tt, null, Zt(e.paintSwatches, (f) => (Ce(), Ee("button", {
              key: f.id,
              class: xt(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: qt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Eb))), 128)),
            se("button", {
              class: xt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: qt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Tb),
            se("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: qt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              se("div", Lb, [
                se("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: qt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = se("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              se("div", Ob, [
                se("div", Fb, [
                  se("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: qt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                se("div", Vb, [
                  se("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: qt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              se("label", Hb, [
                a[1] || (a[1] = se("span", null, "Opacity", -1)),
                se("div", zb, [
                  se("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, jb),
                  se("span", $b, kt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              se("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                se("div", Ub, [
                  (Ce(!0), Ee(tt, null, Zt(e.state.historyEntries || [], (f) => (Ce(), Ee("button", {
                    key: f.index,
                    class: xt(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: qt(n(f.color))
                  }, null, 14, Gb))), 128))
                ])
              ], 8, Bb)
            ], 12, Rb)
          ], 10, Db)) : on("", !0),
          se("div", {
            class: "pano-paint-footer",
            "data-paint-footer": s.footer
          }, [
            se("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": s.group
            }, [
              (Ce(!0), Ee(tt, null, Zt(s.tools, (f) => {
                var g;
                return Ce(), pi(Co, {
                  key: `${s.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((g = e.state.activeTools) == null ? void 0 : g[s.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Wb),
            se("div", {
              class: xt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              se("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: qt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, qb),
              se("span", Xb, kt(e.state.sizeText || "10"), 1)
            ], 10, Yb),
            se("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[s.key]) ?? !s.clearHidden)
            }, [
              Ct(Co, {
                icon: ri(qe).clear,
                label: s.clearLabel,
                tip: s.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": s.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Zb)
          ], 8, Kb)
        ], 10, Ib);
      }), 128))
    ], 2));
  }
}, Qb = {
  key: 0,
  class: "pano-cutout-menu"
}, ev = ["innerHTML"], tv = ["data-aspect"], nv = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], rv = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ce(), Ee("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: qt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ce(!0), Ee(tt, null, Zt(e.model.items || [], (r) => (Ce(), Ee(tt, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Ce(), Ee("div", Qb, [
          se("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: r.icon
          }, null, 8, ev),
          se("div", {
            class: xt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ce(!0), Ee(tt, null, Zt(r.choices || [], (a) => (Ce(), Ee("button", {
              key: a.value,
              class: xt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, kt(a.label), 11, tv))), 128))
          ], 2)
        ])) : (Ce(), Ee("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0,
          innerHTML: r.icon
        }, null, 8, nv))
      ], 64))), 128))
    ], 4));
  }
}, iv = {
  class: "pano-side",
  "data-side": ""
}, av = { class: "pano-side-head" }, ov = ["innerHTML"], sv = {
  key: 0,
  class: "pano-side-scroll"
}, cv = { class: "pano-inspector" }, lv = { class: "pano-ui-row pano-coverage-row" }, uv = ["data-selected"], fv = ["aria-pressed", "disabled"], dv = ["aria-pressed", "disabled"], hv = {
  key: 0,
  class: "pano-section-title"
}, gv = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, pv = {
  class: "pano-picker",
  "data-picker": "selection"
}, mv = ["disabled"], yv = ["innerHTML"], bv = ["hidden"], vv = ["data-selection-id", "innerHTML"], _v = {
  key: 2,
  class: "pano-state-actions"
}, xv = ["disabled"], wv = ["innerHTML"], Sv = ["data-key"], Nv = ["min", "max", "step", "value", "disabled", "data-param-key"], Mv = ["min", "max", "step", "value", "disabled", "data-param-key"], kv = { class: "pano-visibility-section" }, Pv = { class: "pano-visibility-stack" }, Cv = ["data-visibility-row"], Av = { class: "pano-visibility-name" }, Iv = ["innerHTML"], Dv = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled", "innerHTML"], Ev = ["open"], Tv = ["innerHTML"], Rv = { class: "pano-ui-settings-body" }, Lv = { class: "pano-ui-row" }, Ov = ["data-selected"], Fv = ["aria-pressed"], Vv = ["aria-pressed"], Hv = { class: "pano-ui-row" }, zv = ["data-selected"], jv = ["aria-pressed"], $v = ["aria-pressed"], Bv = { class: "pano-ui-row" }, Uv = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, Gv = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, Kv = { class: "pano-picker-label" }, Wv = ["hidden"], Yv = ["data-quality"], qv = {
  key: 1,
  class: "pano-side-footer"
}, Xv = ["data-action"], Zv = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e;
    function n(f) {
      return String(f || "").replace(/[&<>"']/g, (g) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[g]);
    }
    const r = Pr(() => `<span class="pano-side-title-icon" aria-hidden="true">${qe.globe}</span><span>${n(t.nodeTitle)}</span>`), a = Pr(() => {
      const f = t.model;
      return !f || typeof f != "object" ? !1 : Object.keys(f).length > 0 && !!f.coverage;
    });
    function s(f) {
      return { "--v": `${Number((f == null ? void 0 : f.fillPct) || 0)}%` };
    }
    function u(f, g) {
      return (g == null ? void 0 : g.paramsDisabled) === !0 || (f == null ? void 0 : f.enabled) === !1;
    }
    return (f, g) => {
      var y, v, d, w, M;
      return Ce(), Ee("div", iv, [
        se("div", av, [
          se("div", {
            class: "pano-side-title",
            innerHTML: r.value
          }, null, 8, ov),
          g[0] || (g[0] = se("div", { class: "pano-side-actions" }, null, -1))
        ]),
        g[13] || (g[13] = se("div", { class: "pano-divider" }, null, -1)),
        a.value ? (Ce(), Ee("div", sv, [
          se("div", cv, [
            g[12] || (g[12] = se("div", { class: "pano-section-title" }, [
              se("span", null, "Scene")
            ], -1)),
            se("div", lv, [
              g[1] || (g[1] = se("label", null, "Coverage", -1)),
              se("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((y = e.model.coverage) == null ? void 0 : y.value) === 180 ? "1" : "0"
              }, [
                se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 360 ? "true" : "false",
                  disabled: ((d = e.model.coverage) == null ? void 0 : d.disabled) === !0
                }, "360", 8, fv),
                se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((M = e.model.coverage) == null ? void 0 : M.disabled) === !0
                }, "180", 8, dv)
              ], 8, uv)
            ]),
            e.model.transformTitle !== !1 ? (Ce(), Ee("div", hv, [...g[2] || (g[2] = [
              se("span", null, "Transform", -1)
            ])])) : on("", !0),
            e.model.selectionPicker ? (Ce(), Ee("div", gv, [
              se("label", null, kt(e.model.selectionPicker.label), 1),
              se("div", pv, [
                se("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  se("span", {
                    class: "pano-picker-label",
                    innerHTML: e.model.selectionPicker.currentLabelHtml
                  }, null, 8, yv),
                  g[3] || (g[3] = se("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, mv),
                se("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ce(!0), Ee(tt, null, Zt(e.model.selectionPicker.items || [], (C) => (Ce(), Ee("button", {
                    key: C.id,
                    type: "button",
                    class: xt(["pano-picker-item", { active: C.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": C.id,
                    innerHTML: C.labelHtml
                  }, null, 10, vv))), 128))
                ], 8, bv)
              ])
            ])) : on("", !0),
            e.model.copyStateButton ? (Ce(), Ee("div", _v, [
              se("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                se("span", {
                  innerHTML: ri(qe).copy
                }, null, 8, wv),
                se("span", null, kt(e.model.copyStateButton.label), 1)
              ], 8, xv)
            ])) : on("", !0),
            se("div", {
              class: xt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ce(!0), Ee(tt, { key: 0 }, Zt(e.model.notes, (C) => (Ce(), Ee("div", {
                key: C,
                class: "pano-param-note"
              }, kt(C), 1))), 128)) : (Ce(!0), Ee(tt, { key: 1 }, Zt(e.model.params || [], (C) => (Ce(), Ee("div", {
                key: C.key,
                class: "pano-field",
                "data-key": C.key
              }, [
                se("label", null, kt(C.label), 1),
                se("input", {
                  type: "range",
                  min: C.min,
                  max: C.max,
                  step: C.step,
                  value: C.value,
                  disabled: u(C, e.model),
                  style: qt(s(C)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": C.key
                }, null, 12, Nv),
                se("input", {
                  type: "number",
                  min: C.min,
                  max: C.max,
                  step: C.step,
                  value: C.displayValue,
                  disabled: u(C, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": C.key
                }, null, 8, Mv)
              ], 8, Sv))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Ce(), Ee(tt, { key: 3 }, [
              g[5] || (g[5] = se("div", { class: "pano-divider" }, null, -1)),
              se("div", kv, [
                g[4] || (g[4] = se("div", { class: "pano-section-title" }, [
                  se("span", null, "Layers")
                ], -1)),
                se("div", Pv, [
                  (Ce(!0), Ee(tt, null, Zt(e.model.visibilityRows, (C) => (Ce(), Ee("div", {
                    key: C.key,
                    class: xt(["pano-visibility-row", { "is-hidden": C.visible === !1, "is-disabled": C.enabled === !1 }]),
                    "data-visibility-row": C.key
                  }, [
                    se("span", Av, [
                      se("span", {
                        class: "pano-visibility-name-icon",
                        "aria-hidden": "true",
                        innerHTML: C.icon
                      }, null, 8, Iv),
                      se("span", null, kt(C.label), 1)
                    ]),
                    se("button", {
                      class: xt(["pano-visibility-toggle", { active: C.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": C.key,
                      "aria-label": C.ariaLabel,
                      "aria-pressed": C.visible === !0 ? "true" : "false",
                      "data-tip": C.tip,
                      disabled: C.enabled === !1,
                      innerHTML: C.visible === !0 ? ri(qe).eye : ri(qe).eye_dashed
                    }, null, 10, Dv)
                  ], 10, Cv))), 128))
                ])
              ])
            ], 64)) : on("", !0),
            e.model.uiSettings ? (Ce(), Ee("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              se("summary", null, [
                g[6] || (g[6] = se("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                se("span", {
                  class: "pano-ui-caret",
                  "aria-hidden": "true",
                  innerHTML: ri(qe).chevron
                }, null, 8, Tv)
              ]),
              se("div", Rv, [
                se("div", Lv, [
                  g[7] || (g[7] = se("label", null, "Drag X", -1)),
                  se("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, Fv),
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Vv)
                  ], 8, Ov)
                ]),
                se("div", Hv, [
                  g[8] || (g[8] = se("label", null, "Drag Y", -1)),
                  se("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, jv),
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, $v)
                  ], 8, zv)
                ]),
                se("div", Bv, [
                  g[10] || (g[10] = se("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  se("div", Uv, [
                    se("button", Gv, [
                      se("span", Kv, kt(e.model.uiSettings.qualityLabel), 1),
                      g[9] || (g[9] = se("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    se("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Ce(!0), Ee(tt, null, Zt(e.model.uiSettings.qualityOptions || [], (C) => (Ce(), Ee("button", {
                        key: C.value,
                        type: "button",
                        class: xt(["pano-picker-item", { active: C.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": C.value
                      }, kt(C.label), 11, Yv))), 128))
                    ], 8, Wv)
                  ])
                ]),
                g[11] || (g[11] = se("div", { class: "pano-ui-row" }, [
                  se("span"),
                  se("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Ev)) : on("", !0)
          ])
        ])) : on("", !0),
        (e.model.footerButtons || []).length ? (Ce(), Ee("div", qv, [
          (Ce(!0), Ee(tt, null, Zt(e.model.footerButtons, (C) => (Ce(), Ee("button", {
            key: C.action,
            class: xt(["pano-btn", { "pano-btn-primary": C.primary === !0 }]),
            type: "button",
            "data-action": C.action
          }, kt(C.label), 11, Xv))), 128))
        ])) : on("", !0)
      ]);
    };
  }
}, Jv = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ce(), Ee("div", {
      class: xt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: qt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, kt(e.model.text || ""), 7));
  }
}, Qv = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, e_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ce(), Ee("div", Qv, [
      (Ce(!0), Ee(tt, null, Zt(e.buttons, (r) => Tc((Ce(), pi(Co, {
        key: r.key,
        "extra-class": {
          active: r.active,
          "pano-btn-icon-accent": r.accent
        },
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { [r.attr]: r.value, disabled: r.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [Hc, r.visible !== !1]
      ])), 128))
    ]));
  }
}, t_ = { class: "pano-floating-top" }, n_ = ["data-selected", "data-view-count"], r_ = ["data-view", "aria-pressed", "aria-label", "disabled"], i_ = ["innerHTML"], a_ = { class: "label" }, o_ = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Ce(), Ee("div", t_, [
        se("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ce(!0), Ee(tt, null, Zt(e.buttons, (a) => Tc((Ce(), Ee("button", {
            key: a.key,
            class: xt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            se("span", {
              innerHTML: a.icon
            }, null, 8, i_),
            se("span", a_, kt(a.label), 1)
          ], 10, r_)), [
            [Hc, a.visible !== !1]
          ])), 128))
        ], 8, n_)
      ]);
    };
  }
};
function nh(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: qe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: qe.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: qe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: qe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: qe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: qe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: qe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: qe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: qe.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: qe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: qe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: qe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: qe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: qe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: qe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: qe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: qe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: qe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: qe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: qe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: qe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: qe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: qe.lasso_tool }
        ]
      }
    ]
  };
}
const s_ = ["aria-label"], c_ = { class: "pano-stage-wrap" }, l_ = {
  __name: "PanoModal",
  props: {
    open: { type: Boolean, default: !0 },
    type: { type: String, default: "stickers" },
    readOnly: { type: Boolean, default: !1 },
    hideSidebar: { type: Boolean, default: !1 },
    nodeTitle: { type: String, default: "Panorama Stickers" },
    paintSwatches: { type: Array, default: () => [] },
    shellPreset: { type: Object, default: null },
    uiState: { type: Object, default: () => ({}) }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t;
    let a = "", s = !1, u = null;
    const f = /* @__PURE__ */ tc(null), g = Pr(() => n.readOnly === !0), y = Pr(() => n.shellPreset || nh(n.type)), v = Pr(() => {
      var E;
      const L = Array.isArray((E = y.value) == null ? void 0 : E.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && L.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: qe.fullscreen
      }), L;
    });
    function d() {
      const L = f.value;
      return L ? Array.from(L.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function w() {
      var A;
      const E = d()[0] || f.value;
      (A = E == null ? void 0 : E.focus) == null || A.call(E);
    }
    function M() {
      var L;
      u != null && u.isConnected && ((L = u.focus) == null || L.call(u)), u = null;
    }
    function C(L) {
      var E, A, B, te;
      if (!L.defaultPrevented) {
        if (L.key === "Tab") {
          const ae = d();
          if (!ae.length) {
            L.preventDefault(), (A = (E = f.value) == null ? void 0 : E.focus) == null || A.call(E);
            return;
          }
          const Q = ae[0], we = ae[ae.length - 1], k = document.activeElement;
          if (L.shiftKey) {
            (k === Q || k === f.value || !((B = f.value) != null && B.contains(k))) && (L.preventDefault(), we.focus());
            return;
          }
          (k === we || !((te = f.value) != null && te.contains(k))) && (L.preventDefault(), Q.focus());
          return;
        }
        L.key === "Escape" && r("close");
      }
    }
    function D() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function V() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function O(L) {
      document.removeEventListener("keydown", C), L ? (u || (u = document.activeElement), D(), document.addEventListener("keydown", C), Dc(() => {
        w();
      })) : (V(), M());
    }
    return nd(() => {
      O(n.open);
    }), Lc(() => {
      V(), document.removeEventListener("keydown", C), M();
    }), Hi(() => n.open, (L) => {
      O(L);
    }), (L, E) => e.open ? (Ce(), Ee("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[0] || (E[0] = Id((A) => r("close"), ["self"]))
    }, [
      se("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        se("div", c_, [
          E[1] || (E[1] = h1('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? on("", !0) : (Ce(), Ee(tt, { key: 0 }, [
            Ct(e_, {
              buttons: e.uiState.toolButtons || y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ct(Jb, {
              "paint-swatches": e.paintSwatches,
              panes: y.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ct(o_, {
            buttons: e.uiState.viewButtons || y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ct(Sb, {
            buttons: e.uiState.floatingButtons || v.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ct(rv, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ct(Jv, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ct(Ab, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? on("", !0) : (Ce(), pi(Zv, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, s_)
    ])) : on("", !0);
  }
}, Ao = "state_json", xr = "sticker_image_1", Bs = "external_image", Us = "pano_sticker_input_images", co = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Pt = Math.PI / 180, lr = 180 / Math.PI, Io = 24, u_ = 4, f_ = 4, $a = /* @__PURE__ */ new Map(), pf = /* @__PURE__ */ new Map(), Ba = /* @__PURE__ */ new Map(), Tt = {
  // Source: @geist-ui/icons globe.js (v1.0.2)
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Source: vercel.com/geist/icons
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function Rt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function d_(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function h_(e) {
  return 1 - Math.pow(1 - e, 3);
}
function g_(e) {
  return e * e * e;
}
function Ln(e, t, n) {
  return { x: e, y: t, z: n };
}
function Ua(e, t) {
  return Ln(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ga(e, t) {
  return Ln(e.x * t, e.y * t, e.z * t);
}
function Sn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ka(e, t) {
  return Ln(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Zr(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ln(e.x / t, e.y / t, e.z / t);
}
function Cn(e, t) {
  const n = e * Pt, r = t * Pt, a = Math.cos(r);
  return Ln(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Wa(e) {
  return {
    yaw: Lt(Math.atan2(e.x, e.z) * lr),
    pitch: G(Math.asin(G(e.y, -1, 1)) * lr, -90, 90)
  };
}
function Un(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r++) {
    const s = t[r].x, u = t[r].y, f = t[a].x, g = t[a].y;
    u > e.y != g > e.y && e.x < (f - s) * (e.y - u) / (g - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function sr(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Gs(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), s = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return sr(e, t);
  const g = G((s * r + u * a) / f, 0, 1), y = Number(t.x || 0) + r * g, v = Number(t.y || 0) + a * g, d = Number(e.x || 0) - y, w = Number(e.y || 0) - v;
  return d * d + w * w;
}
function Gn(e, t, n) {
  return e + (t - e) * n;
}
function An(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${G(n, 0, 1)})`;
}
function p_(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ya = { fillStyle: "", url: "" };
function m_(e, t, n) {
  if (Ya.url && Ya.fillStyle === String(e || ""))
    return Ya.url;
  const r = p_(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Io}" height="${Io}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ya = { fillStyle: String(e || ""), url: r }, r;
}
function lo(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function ln(e) {
  return {
    r: G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: G(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Ht(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function y_(e) {
  return co.some((t) => lo(e, t.color));
}
function Ks(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, a = G(Number(t), 0, 1), s = G(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, g = s * (1 - a), y = s * (1 - f * a), v = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: v, b: g };
    case 1:
      return { r: y, g: s, b: g };
    case 2:
      return { r: g, g: s, b: v };
    case 3:
      return { r: g, g: y, b: s };
    case 4:
      return { r: v, g, b: s };
    default:
      return { r: s, g, b: y };
  }
}
function Ws(e) {
  const t = G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, r), s = Math.min(t, n, r), u = a - s;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const g = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: g, v: a };
}
function b_(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function mf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function v_(e, t) {
  const n = mf(e, 1), r = mf(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (d, w) => w ? f(w, d % w) : d, g = f(s, u) || 1, y = Math.max(1, Math.round(s / g)), v = Math.max(1, Math.round(u / g));
  return `${y}:${v}`;
}
function Li(e) {
  const t = G(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Pt, n = G(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Pt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function __(e) {
  const t = Number(e);
  if (!Number.isFinite(t) || t <= 0) return "1:1";
  const n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ], r = 0.015;
  for (const [a, s] of n)
    if (Math.abs(t - s) <= r) return a;
  return "";
}
function Nr(e) {
  const t = Li(e);
  return __(t) || v_(t, 1);
}
function rh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Nr(t), t;
}
function Ii(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Nr(e);
}
let qa = null;
function x_() {
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
    const n = document.createElement("link");
    n.id = "pano-suite-style-link", n.rel = "stylesheet", n.href = new URL("./pano_editor.css", import.meta.url).toString(), n.addEventListener("load", () => {
      n.dataset.loaded = "true", e();
    }, { once: !0 }), n.addEventListener("error", () => e(), { once: !0 }), document.head.appendChild(n);
  }), qa);
}
const ih = "pano_suite.ui_settings.v1", ah = "pano_suite.node_grid_visibility.v1";
let ni = null, In = null, Xa = { text: null, parsed: null };
function Wi(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function w_() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ih)) || "").trim();
    if (!t) return ni ? Wi(ni) : null;
    const n = JSON.parse(t), r = Wi(n);
    return ni = r, r;
  } catch {
    return ni ? Wi(ni) : null;
  }
}
function S_(e) {
  var n;
  const t = Wi(e);
  ni = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(ih, JSON.stringify(t));
  } catch {
  }
  return t;
}
function oh() {
  var e;
  if (In && typeof In == "object")
    return In;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ah)) || "").trim();
    if (!t)
      return In = {}, In;
    const n = JSON.parse(t);
    return In = n && typeof n == "object" ? n : {}, In;
  } catch {
    return In = {}, In;
  }
}
function N_(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = oh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function M_(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = oh();
  r[n] = !!t, In = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(ah, JSON.stringify(r));
  } catch {
  }
}
function k_(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function P_(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function C_(e) {
  var r, a;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function yf(e) {
  const { paintCount: t, maskCount: n } = C_(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, s = 0;
  return r.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? s += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: s,
    totalPaintCount: t + a,
    totalMaskCount: n + s
  };
}
function Jr(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function bf(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function A_(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : rh(t)) : [];
}
function I_(e, t = 2048, n = "#00ff00", r = 360) {
  const a = w_(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Rt(r),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: Ki(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(e || "").trim();
  if (!u) return s;
  try {
    let f = null;
    if (Xa.text === u ? f = Xa.parsed : (f = JSON.parse(u), Xa = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const g = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: k_(f.assets),
      stickers: P_(f.stickers),
      shots: A_(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Ki(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var v;
          const y = String(((v = f.ui_settings) == null ? void 0 : v.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (g.ui_settings = Wi({ ...g.ui_settings, ...a })), g.output_preset = vc(t, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = Rt(r), delete g.editor_history, g;
  } catch {
    return Xa = { text: u, parsed: null }, s;
  }
}
function mn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function qc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = mn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...r) {
    var s, u, f, g, y, v, d, w, M, C;
    const a = n ? n(...r) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (s = e.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (d = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || d.call(v, !0, !0), (C = (M = (w = un) == null ? void 0 : w.canvas) == null ? void 0 : M.setDirty) == null || C.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function D_(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function vf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function E_(e) {
  var M, C, D, V, O;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = mn(e, "coverage"), n = mn(e, "bg_color"), r = mn(e, Ao), a = mn(e, "sticker_state");
  if (!t || !n || !r) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && D_(s) && (vf(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (vf(u))
    try {
      const L = JSON.parse(u);
      y = String(Rt(L == null ? void 0 : L.coverage));
    } catch {
      y = "360";
    }
  const v = s, d = u, w = f;
  t.value = y, (M = t.callback) == null || M.call(t, y), n.value = v, (C = n.callback) == null || C.call(n, v), r.value = d, (D = r.callback) == null || D.call(r, d), a && (a.value = w, (V = a.callback) == null || V.call(a, w)), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function Ys(e) {
  return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function T_(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function R_(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.element) != null && s.style && (r.element.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function bc(e, t, n) {
  var s, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.element) != null && s.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function Za(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function vc(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function sh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function L_(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function ch(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function O_(e, t, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = L_(e == null ? void 0 : e.graph, n)), r;
}
function Do(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = Jt) == null ? void 0 : a.apiURL) == "function" ? Jt.apiURL(r) : r;
}
function F_(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function V_(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function H_(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function lh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (F_(t)) return [t];
  const { filename: n, subfolder: r } = V_(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((s) => Do({
    filename: n,
    subfolder: r,
    type: s
  }));
  return H_([...a, t]);
}
function z_(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Do({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Yi(e) {
  var r;
  const t = (r = un) == null ? void 0 : r.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function gi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return gi(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Do({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = gi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Do(e);
}
function j_(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const r = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (t >= 0 && t < s.length && r.push(s[t]), r.push(...s));
  return r;
}
function qs(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e || []) {
    const a = gi(r);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function $_(e, t, n, r = null) {
  var d;
  const a = Yi(e == null ? void 0 : e.id), s = Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = gi(u);
  if (!f) return null;
  const g = `__ui__${t}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const v = new Image();
  return v.__panoSrc = f, v.onload = () => {
    typeof r == "function" && r(v);
  }, v.src = f, n.set(g, v), v;
}
function B_(e, t) {
  var L, E;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = r.findIndex((A) => String((A == null ? void 0 : A.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = sh(e.graph, u), { originId: g, originSlot: y } = ch(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const v = O_(e, a, g), d = Number(y || 0);
  if (!v) return { src: "", sourceType: "", inputName: n };
  let w = [];
  try {
    w = typeof ((L = un) == null ? void 0 : L.getNodeImageUrls) == "function" ? un.getNodeImageUrls(v) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const A = [];
    d >= 0 && d < w.length && A.push(w[d]), A.push(...w);
    const B = qs(A);
    if (B.length) return { src: B[0], srcCandidates: B, sourceType: "appNodeImageUrls", inputName: n };
  }
  const M = Yi((v == null ? void 0 : v.id) ?? g), C = j_(M, d), D = qs(C);
  if (D.length) return { src: D[0], srcCandidates: D, sourceType: "nodeOutputs", inputName: n };
  const V = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
  if (V.length) {
    const A = [];
    d >= 0 && d < V.length && A.push(V[d]), A.push(...V);
    const B = qs(A);
    if (B.length) return { src: B[0], srcCandidates: B, sourceType: "nodeImgs", inputName: n };
  }
  const O = (E = v == null ? void 0 : v.widgets) == null ? void 0 : E.find((A) => String((A == null ? void 0 : A.name) || "").toLowerCase() === "image");
  if (O) {
    let A = gi(O.value);
    if (A && !A.includes("/") && !A.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (A = Jt.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`)), A) return { src: A, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function U_(e, t, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = lh(a);
  if (!s.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), f = e.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  e.__panoLinkedInputImageCache.set(u, y);
  let v = -1;
  const d = () => {
    var M, C;
    if (v += 1, v >= s.length) {
      try {
        (C = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || C.call(M, u);
      } catch {
      }
      return;
    }
    const w = s[v];
    y.resolvedSrc = w, g.src = w;
  };
  return g.onload = () => {
    var w;
    r == null || r(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, g.onerror = () => {
    var w, M;
    if (v + 1 < s.length) {
      d();
      return;
    }
    try {
      (M = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || M.call(w, u);
    } catch {
    }
  }, d(), g;
}
function G_(e, t, n, r = null) {
  const a = Array.isArray(n) ? n.map((C) => String(C || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(t || "image"), u = a.join(`
`), f = e.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((C) => {
    lh(C).forEach((D) => {
      const V = String(D || "").trim();
      !V || y.has(V) || (y.add(V), g.push(V));
    });
  }), !g.length) return null;
  const v = new Image(), d = { srcRaw: u, resolvedSrc: "", img: v };
  e.__panoLinkedInputImageCache.set(s, d);
  let w = -1;
  const M = () => {
    var D, V;
    if (w += 1, w >= g.length) {
      try {
        (V = (D = e.__panoLinkedInputImageCache) == null ? void 0 : D.delete) == null || V.call(D, s);
      } catch {
      }
      return;
    }
    const C = g[w];
    d.resolvedSrc = C, v.src = C;
  };
  return v.onload = () => {
    var C;
    r == null || r(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0);
  }, v.onerror = () => {
    var C, D;
    if (w + 1 < g.length) {
      M();
      return;
    }
    try {
      (D = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || D.call(C, s);
    } catch {
    }
  }, M(), v;
}
function uh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const r of n) {
    const a = B_(e, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function _f(e, t = [], n = null, r = "") {
  const a = Array.isArray(t) ? t : [t], s = uh(e, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return G_(e, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? U_(e, u, g, n) : null;
}
async function qi(e, t, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = T_(e, t);
  await x_();
  const f = mn(e, "output_preset"), g = mn(e, "coverage"), y = mn(e, "bg_color"), v = mn(e, Ao), d = I_(
    String((v == null ? void 0 : v.value) || ""),
    vc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Rt(g == null ? void 0 : g.value)
  );
  e.__panoLiveStateOverride = d, e.__panoLiveStateVersion = 0, t === "cutout" && (d.shots = Array.isArray(d.shots) ? d.shots.slice(0, 1) : [], d.shots.length || (d.active.selected_shot_id = null));
  const w = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(d.shots) ? d.shots : [], o = String(((c = d == null ? void 0 : d.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === o) || i[0] || null;
  })() : null, M = w ? wl(w, !1) : { width: 220, height: 132 }, C = nh(t), D = /* @__PURE__ */ Vo({
    viewButtons: (C.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (C.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(C.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...s ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Tt.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Tt.fullscreen,
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
      customColorCss: An({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: An({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (i, o) => ({ index: o, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: !1,
      showSizeRow: !0,
      clearVisible: { paint: !0, mask: !0 },
      activeTools: { paint: "pen", mask: "pen" }
    },
    sidePanel: {},
    selectionMenu: { visible: !1, left: 0, top: 0, items: [] },
    tooltip: { visible: !1, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: t === "cutout",
      ready: !1,
      settled: !1,
      expanded: !1,
      width: M.width,
      height: M.height,
      label: w ? "Loading preview" : "Add Frame to preview"
    }
  }), V = document.createElement("div");
  document.body.appendChild(V);
  const O = q1(l_, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: C,
    paintSwatches: co.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: An(i.color, 1)
    })),
    uiState: D,
    onClose: () => {
      Yr();
    }
  });
  try {
    O.mount(V);
  } catch (i) {
    try {
      O.unmount();
    } catch {
    }
    throw V.remove(), i;
  }
  const L = V.querySelector(".pano-modal-overlay"), E = V.querySelector(".pano-modal"), A = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), B = E == null ? void 0 : E.querySelector("[data-stage-background]"), te = E == null ? void 0 : E.querySelector(".pano-stage-wrap");
  if (!L || !E || !A || !B || !te)
    throw O.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ae = document.createElement("div");
  ae.setAttribute("aria-hidden", "true"), ae.style.position = "absolute", ae.style.left = "0", ae.style.top = "0", ae.style.pointerEvents = "none", ae.style.zIndex = "12", ae.style.display = "none", ae.style.willChange = "transform,width,height,background,border-radius", te == null || te.appendChild(ae);
  const Q = document.createElement("div");
  Q.className = "pano-paint-size-preview", Q.setAttribute("aria-hidden", "true");
  const we = document.createElement("div");
  we.className = "pano-paint-size-preview-sample", Q.appendChild(we), te == null || te.appendChild(Q);
  const k = A.getContext("2d"), fe = Ir(), ue = t === "cutout" ? fb({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, le = E.querySelector("[data-side]"), xe = E.querySelector("[data-selection-menu]"), ie = E.querySelector("[data-tooltip]"), he = E.querySelector("[data-camera-preview-host]"), pe = E.querySelector("[data-paint-color-row]"), $ = E.querySelector("[data-paint-color-pop]"), be = E.querySelector("[data-paint-color-sv]"), De = E.querySelector("[data-paint-color-sv-cursor]"), Te = E.querySelector("[data-paint-hue-strip]"), $e = E.querySelector("[data-paint-hue-handle]");
  let Qe = 0, dt = 0;
  te == null || te.removeAttribute("data-stage-ready"), te == null || te.setAttribute("data-stage-loading-kind", "boot"), A.style.opacity = "1", B.style.opacity = "0", a && (le == null || le.remove(), E.classList.add("pano-modal-readonly"));
  const Ut = () => {
    if (!m.customPaintSessionStart) return;
    if (lo(m.customPaintSessionStart, m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    if (y_(m.customPaintColor)) {
      m.customPaintSessionStart = null;
      return;
    }
    const i = [
      ln(m.customPaintColor),
      ...m.customPaintHistory.filter((o) => !lo(o, m.customPaintColor))
    ];
    m.customPaintHistory = i.slice(0, 8), m.customPaintSessionStart = null;
  }, bt = (i = !1) => {
    !$ || $.hidden || (i ? Ut() : m.customPaintSessionStart = null, $.hidden = !0, D.paintDock.colorPopOpen = !1);
  }, Gt = () => {
    $ && ($.hidden && (m.customPaintSessionStart = ln(m.customPaintColor)), $.hidden = !1, D.paintDock.colorPopOpen = !0);
  };
  E.addEventListener("pointerdown", (i) => {
    Pa(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), bt(!0), t === "cutout" && m.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (m.cutoutAspectOpen = !1, m.menuMode = "", m.menuSize.measured = !1, Be(), ve())));
  });
  const sn = t === "stickers" ? d.active.selected_sticker_id : d.active.selected_shot_id, hn = JSON.stringify(bf(d)), m = {
    mode: "pano",
    selectedId: sn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Rt(d.coverage),
    historyController: Yy(80, { entries: [hn], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Bn,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: !1 },
    interaction: null,
    hqFrames: 0,
    viewInertia: { vx: 0, vy: 0, active: !1 },
    menuSize: { w: 220, h: 40, measured: !1 },
    menuMode: "",
    cutoutAspectOpen: !1,
    showGrid: N_(e == null ? void 0 : e.id, !0),
    showPanorama: !0,
    showObjects: !0,
    showMask: !0,
    outputPreviewExpanded: !1,
    outputPreviewAnim: 0,
    outputPreviewAnimFrom: 0,
    outputPreviewAnimTo: 0,
    outputPreviewAnimStartTs: 0,
    outputPreviewAnimDurationMs: 180,
    outputPreviewRect: null,
    frameView: { zoom: 1, panX: 0, panY: 0 },
    paintEngine: cc(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    objectVisualRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: /* @__PURE__ */ new Map(),
    marqueeModifier: !1,
    panelLastValues: null,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  }, Je = ue && he ? ue.mount(he, { shot: null }) : null;
  t === "stickers" && (m.selectedId = null, d.active.selected_sticker_id = null), m.selectedIds = m.selectedId ? [m.selectedId] : [];
  const T = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), I = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, j = {
    timer: 0,
    target: null
  }, W = {
    active: !1,
    depth: 0
  };
  function ne() {
    D.toolButtons.forEach((i) => {
      const o = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", l = i.attr === "data-mask-tool";
      i.active = o ? i.value === m.primaryTool : c ? i.key === m.paintTool : l ? i.key === m.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Z(i) {
    const o = i == null ? void 0 : i.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const c of o.items) {
        if (!c || c.kind !== "file") continue;
        const l = String(c.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((c) => wa(c)) : !1;
  }
  function Y(i) {
    const o = !!i;
    W.active !== o && (W.active = o, te.classList.toggle("drop-active", o));
  }
  function me(i, o, c = m.viewFov, l = 140, h = 620) {
    const p = Tm(m.viewYaw, i), _ = o - m.viewPitch, b = c - m.viewFov, x = Math.hypot(p, _) + Math.abs(b) * 0.6, S = Math.round(G(l + x * 2.2, l, h));
    m.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: m.viewYaw,
      startPitch: m.viewPitch,
      startFov: m.viewFov,
      targetPitch: o,
      targetFov: c,
      deltaYaw: p
    }, m.viewInertia.active = !1, m.viewInertia.vx = 0, m.viewInertia.vy = 0, ve();
  }
  Lh();
  function ce() {
    return t === "stickers" ? d.stickers : d.shots;
  }
  function de() {
    const i = d.painting || (d.painting = Ki(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Me(i = "paint") {
    var h, p;
    const o = Array.isArray((p = (h = d.painting) == null ? void 0 : h[i]) == null ? void 0 : p.strokes) ? d.painting[i].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }
    return c;
  }
  function Ie() {
    return Me("paint");
  }
  function Ae(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function Re(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Oe(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function at(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function ke() {
    var o;
    let i = -1;
    for (const c of Array.isArray(d.stickers) ? d.stickers : [])
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of de())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = d.painting) == null ? void 0 : o.raster_objects) ? d.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function vt(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const l = de();
    let h = l.find((p) => String((p == null ? void 0 : p.actionGroupId) || "") === c);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? ke() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function kn(i) {
    if (!(i != null && i.centerUv)) return [];
    const o = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), l = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: G(c - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: G(c - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: G(c + h, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: G(c + h, 0, 1)
      }
    ];
  }
  function _t() {
    const i = new Set(Ie()), c = de().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      c.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: ke(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), d.painting.groups = c, c;
  }
  function Kt(i, o, c) {
    var z;
    const l = (U) => (Number(U || 0) % 1 + 1) % 1, h = [];
    for (const U of c) {
      const J = U == null ? void 0 : U.geometry, ge = (J == null ? void 0 : J.geometryKind) === "lasso_fill" ? J == null ? void 0 : J.points : (J == null ? void 0 : J.processedPoints) || (J == null ? void 0 : J.rawPoints) || (J == null ? void 0 : J.points) || [];
      Array.isArray(ge) && h.push(...ge);
    }
    if (!h.length) return null;
    const p = l(((z = h[0]) == null ? void 0 : z.u) || 0);
    let _ = 0, b = 0;
    h.forEach((U) => {
      const J = l((U == null ? void 0 : U.u) || 0);
      _ += p + gn(J, p), b += Number((U == null ? void 0 : U.v) || 0);
    });
    const x = (_ / h.length % 1 + 1) % 1;
    let S = 1 / 0, P = -1 / 0, N = 1 / 0, R = -1 / 0;
    h.forEach((U) => {
      const J = l((U == null ? void 0 : U.u) || 0), ge = gn(J, x);
      S = Math.min(S, ge), P = Math.max(P, ge);
      const re = Number((U == null ? void 0 : U.v) || 0);
      N = Math.min(N, re), R = Math.max(R, re);
    });
    const F = c.reduce((U, J) => {
      const ge = ar(String((J == null ? void 0 : J.toolKind) || "pen")), re = nn[ge] || nn[Bn], ye = Math.max(1, Number((J == null ? void 0 : J.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(U, ye);
    }, 0), X = Math.max(35e-4, F / 2048);
    return {
      centerUv: { u: ((x + (S + P) * 0.5) % 1 + 1) % 1, v: G((N + R) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - S) * 0.5 + X,
      halfH: (R - N) * 0.5 + X,
      uvPad: X
    };
  }
  function Nt(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = de().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === l);
    if (!h) return null;
    const p = c || bn(l, o);
    return h.frame = Kt(l, o, p), h.frame;
  }
  function Hn() {
    var l;
    const i = (Array.isArray(d.stickers) ? d.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = _t().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), c = (Array.isArray((l = d.painting) == null ? void 0 : l.raster_objects) ? d.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...o, ...c].sort((h, p) => Number(h.z_index || 0) - Number(p.z_index || 0));
  }
  function Lr(i = !0) {
    var c, l, h, p, _, b;
    const o = Hn().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (i) {
      const x = String(((l = (c = m.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((p = (h = m.interaction) == null ? void 0 : h.stroke) == null ? void 0 : p.layerKind) || "").trim(), P = String(((b = (_ = m.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      x && S === "paint" && P !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function Wo(i = !0) {
    var b, x, S, P, N, R;
    const o = Hn();
    if (!i) return o;
    const c = String(((x = (b = m.interaction) == null ? void 0 : b.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), l = String(((P = (S = m.interaction) == null ? void 0 : S.stroke) == null ? void 0 : P.layerKind) || "").trim(), h = String(((R = (N = m.interaction) == null ? void 0 : N.stroke) == null ? void 0 : R.toolKind) || "").trim();
    if (!c || l !== "paint" || h === "eraser" || o.some((F) => F.type === "strokeGroup" && String(F.actionGroupId || "") === c))
      return o;
    const p = ot();
    let _ = o.reduce((F, X) => Math.max(F, Number((X == null ? void 0 : X.z_index) || 0)), -1) + 1;
    return p && Mt(p) && String(p.actionGroupId || "") === c && (_ = Number(p.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: _,
        item: null
      }
    ].sort((F, X) => Number((F == null ? void 0 : F.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0));
  }
  function fh() {
    return de().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => Fr(Ae("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function dh() {
    var i;
    return (Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => Or(Re((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Xc(i = m.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function hh() {
    var o, c, l, h;
    let i = null;
    try {
      const p = Lr(), _ = ((h = (l = (c = (o = m.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, p)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
      _ && (i = {
        source: _,
        revision: `${Br()}:${sa()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function sa() {
    var h, p, _, b, x, S, P;
    const i = m.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!Xc(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, R = String(((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.layerKind) || ""), F = ((_ = N == null ? void 0 : N.rawPoints) == null ? void 0 : _.length) ?? ((b = N == null ? void 0 : N.points) == null ? void 0 : b.length) ?? 0, X = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${R || "paint"}_${o}_live${X}_${F}_${m.livePaintInteractionRevision}`;
    }
    const c = String(((x = i == null ? void 0 : i.item) == null ? void 0 : x.actionGroupId) || ""), l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.rasterObjectId) || ((P = i == null ? void 0 : i.item) == null ? void 0 : P.id) || "");
    return `_${o}_${c || l || "active"}_${m.livePaintInteractionRevision}`;
  }
  function Yo() {
    const i = Array.isArray(d.shots) ? d.shots : [], o = Array.isArray(d.stickers) ? d.stickers : [];
    return [...i, ...o];
  }
  function cn(i) {
    return !!i && Array.isArray(d.shots) && d.shots.includes(i);
  }
  function pt(i) {
    return !!i && Array.isArray(d.stickers) && d.stickers.includes(i);
  }
  function en() {
    var i;
    return Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : [];
  }
  function Or(i) {
    const o = Oe(i);
    if (!o) return null;
    const c = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: Re(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ot(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = Oe(i.rasterObjectId || i.id || "");
    return !!o && !!Or(Re(o));
  }
  function Fr(i) {
    const o = at(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = de().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: Ae("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Mt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!Fr(Ae(c, o));
  }
  function bn(i, o = null) {
    const c = at(i, o), l = String(c.actionGroupId || "").trim();
    return l ? Kr(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function gh(i, o = "paint") {
    var p, _, b;
    const c = String(i || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${c}:${m.mode}:${_i()}`;
    if (m.mode === "frame") {
      const x = Ge(), S = String((x == null ? void 0 : x.id) || ""), P = x ? Vt(x) : null;
      return `${h}:frame:${S}:${Math.round(Number((P == null ? void 0 : P.x) || 0))}:${Math.round(Number((P == null ? void 0 : P.y) || 0))}:${Math.round(Number((P == null ? void 0 : P.w) || 0))}:${Math.round(Number((P == null ? void 0 : P.h) || 0))}:${Math.round(Number(((p = m.frameView) == null ? void 0 : p.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = m.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = m.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function ca(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: G(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function gn(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function qo(i, o = null, c = null) {
    var S;
    const l = at(i, o), h = Array.isArray(c) ? c : bn(l.actionGroupId, l.layerKind), p = [];
    if (h.forEach((P) => {
      const N = (P == null ? void 0 : P.geometry) || null, R = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(R) && p.push(...R);
    }), !p.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((S = p[0]) == null ? void 0 : S.u) || 0);
    let b = 0, x = 0;
    return p.forEach((P) => {
      b += _ + gn(Number((P == null ? void 0 : P.u) || 0), _), x += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (b / p.length % 1 + 1) % 1,
      v: G(x / p.length, 0, 1)
    };
  }
  function la(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), _ = gn(Number(i.u || 0), h), b = Number(i.v || 0) - p, x = Number(l || 0) * Pt, S = Math.cos(x), P = Math.sin(x), N = Math.max(0.02, Number(c || 1)), R = (_ * S - b * P) * N, F = (_ * P + b * S) * N;
    return {
      ...i,
      u: ((h + R) % 1 + 1) % 1,
      v: G(p + F, 0, 1)
    };
  }
  function Zc(i, o, c, l = null, h = null, p = null) {
    const _ = at(i, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = Kr(_.layerKind), S = Array.isArray(l) ? new Map(l.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let P = !1;
    if (x.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== b) return;
      const R = (S == null ? void 0 : S.get(String((N == null ? void 0 : N.id) || ""))) || N, F = N == null ? void 0 : N.geometry, X = R == null ? void 0 : R.geometry;
      !F || !X || (Array.isArray(X.points) && (F.points = X.points.map((z) => ca(z, o, c)), P = !0), Array.isArray(X.rawPoints) && (F.rawPoints = X.rawPoints.map((z) => ca(z, o, c)), P = !0), Array.isArray(X.processedPoints) && (F.processedPoints = X.processedPoints.map((z) => ca(z, o, c)), P = !0));
    }), P && p) {
      const N = de().find((R) => String((R == null ? void 0 : R.actionGroupId) || "") === b);
      N && (N.frame = null);
    }
    return P;
  }
  function Jc(i, o = 1, c = 0, l = null, h = null, p = null) {
    const _ = at(i, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = Kr(_.layerKind), S = Array.isArray(l) ? l : bn(b, _.layerKind), P = Array.isArray(S) ? new Map(S.map((F) => [String((F == null ? void 0 : F.id) || ""), F])) : null, N = (p == null ? void 0 : p.centerUv) ?? qo(b, _.layerKind, S);
    let R = !1;
    if (x.forEach((F) => {
      if (String((F == null ? void 0 : F.actionGroupId) || "").trim() !== b) return;
      const X = (P == null ? void 0 : P.get(String((F == null ? void 0 : F.id) || ""))) || F, z = F == null ? void 0 : F.geometry, U = X == null ? void 0 : X.geometry;
      !z || !U || (Array.isArray(U.points) && (z.points = U.points.map((J) => la(J, N, o, c)), R = !0), Array.isArray(U.rawPoints) && (z.rawPoints = U.rawPoints.map((J) => la(J, N, o, c)), R = !0), Array.isArray(U.processedPoints) && (z.processedPoints = U.processedPoints.map((J) => la(J, N, o, c)), R = !0));
    }), R && p) {
      const F = de().find((X) => String((X == null ? void 0 : X.actionGroupId) || "") === b);
      F && (F.frame = null);
    }
    return R;
  }
  function Qc(i, o, c, l = null) {
    const h = Oe(i);
    if (!h) return !1;
    const p = en().find((P) => String((P == null ? void 0 : P.id) || "").trim() === h);
    if (!p) return !1;
    const _ = l && typeof l == "object" ? l : p, b = (_ == null ? void 0 : _.transform) || {}, x = Number(b.du || 0) + Number(o || 0), S = G(Number(b.dv || 0) + Number(c || 0), -1, 1);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.du = x, p.transform.dv = S, !0;
  }
  function ph(i, o = 1, c = null) {
    const l = Oe(i);
    if (!l) return !1;
    const h = en().find((S) => String((S == null ? void 0 : S.id) || "").trim() === l);
    if (!h) return !1;
    const p = c && typeof c == "object" ? c : h, _ = (p == null ? void 0 : p.transform) || {}, b = Math.max(0.01, Number(_.scale || 1)), x = G(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = x, !0;
  }
  function ot() {
    const i = String(m.selectedId || "");
    if (!i) return null;
    const o = Fr(i);
    if (o) return o;
    const c = Or(i);
    return c || (t === "cutout" ? Yo().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : ce().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function vn() {
    const i = Array.isArray(m.selectedIds) && m.selectedIds.length ? m.selectedIds : m.selectedId ? [m.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const p = h === String(m.selectedId || "") ? ot() : Fr(h) || Or(h) || (t === "cutout" ? Yo().find((_) => String((_ == null ? void 0 : _.id) || "") === h) : ce().find((_) => String((_ == null ? void 0 : _.id) || "") === h));
      p && o.push(p);
    }), o;
  }
  function Xo(i = null) {
    const o = Array.isArray(i) ? i : vn();
    if (!o || o.length < 2) return null;
    const c = o.map((S) => It(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((S) => S.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), h = c.flatMap((S) => S.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), p = Math.min(...l), _ = Math.max(...l), b = Math.min(...h), x = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (p + _) * 0.5, y: (b + x) * 0.5 },
      corners: [
        { x: p, y: b },
        { x: _, y: b },
        { x: _, y: x },
        { x: p, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (p + _) * 0.5, y: b, a: { x: p, y: b }, b: { x: _, y: b } },
        { edge: "right", x: _, y: (b + x) * 0.5, a: { x: _, y: b }, b: { x: _, y: x } },
        { edge: "bottom", x: (p + _) * 0.5, y: x, a: { x: _, y: x }, b: { x: p, y: x } },
        { edge: "left", x: p, y: (b + x) * 0.5, a: { x: p, y: x }, b: { x: p, y: b } }
      ],
      rotateStemBase: { x: (p + _) * 0.5, y: b },
      rotateHandle: { x: (p + _) * 0.5, y: b - 30 }
    };
  }
  function mh(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(m.selectedIds) && m.selectedIds.includes(o);
  }
  function ua() {
    const i = ot();
    return i ? Mt(i) || Ot(i) ? "stroke" : cn(i) ? "frame" : "image" : null;
  }
  function nr(i) {
    if (!i || typeof i != "object") return !1;
    if (Mt(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = de().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Ot(i)) {
      const o = Oe(i.rasterObjectId || i.id || ""), c = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Zo(i = null) {
    const o = Array.isArray(i) ? i : vn();
    return o.length > 0 && o.every((c) => nr(c));
  }
  function yh(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (Mt(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = de().find((p) => String((p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (Ot(i)) {
      const l = Oe(i.rasterObjectId || i.id || ""), h = en().find((p) => String((p == null ? void 0 : p.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function bh() {
    if (r) return;
    const i = vn();
    if (!i.length) return;
    const o = !Zo(i);
    let c = !1;
    i.forEach((l) => {
      yh(l, o) && (c = !0);
    }), c && (ct(), mt(), Be(), ve());
  }
  function gr(i) {
    m.selectedId = (i == null ? void 0 : i.id) || null, m.selectedIds = i != null && i.id ? [i.id] : [], i && pt(i) ? d.active.selected_sticker_id = i.id || null : d.active.selected_sticker_id = null, i && cn(i) ? d.active.selected_shot_id = i.id || null : i ? cn(i) || (d.active.selected_shot_id = d.active.selected_shot_id) : d.active.selected_shot_id = null;
  }
  function vh(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }), m.selectedIds = c;
    const h = String(o || "").trim();
    m.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const p = ot();
    d.active.selected_sticker_id = p && pt(p) && p.id || null, p && cn(p) ? d.active.selected_shot_id = p.id || null : c.length || (d.active.selected_shot_id = null);
  }
  function el() {
    const i = (Array.isArray(d.shots) ? d.shots : []).map((c, l) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(d.stickers) ? d.stickers : []).map((c, l) => {
      var p, _;
      const h = At(c) ? String(c.id || xr) : String(((_ = (p = d.assets) == null ? void 0 : p[c.asset_id]) == null ? void 0 : _.name) || c.asset_id || c.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...o];
  }
  function _h(i) {
    return i === "frame" ? Tt.camera : i === "stroke" ? Tt.paintbrush_vertical_tool : Tt.image;
  }
  function tl(i) {
    return !i || !i.item ? Ys(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${_h(i.kind)}</span><span>${Ys(String(i.label || ""))}</span>`;
  }
  function nl() {
    return ke();
  }
  function At(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === xr || String(i.source_kind || "") === Bs;
  }
  function Vr(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function xh(i) {
    return At(i) && Vr(i) ? Ld : 1;
  }
  function wh() {
    return m.primaryTool === "mask" ? m.maskTool : m.paintTool;
  }
  function Sh() {
    return String(wh() || "") === "lasso_fill";
  }
  function Nh() {
    if (r) return;
    const i = ot();
    !i || !At(i) || (i.visible = Vr(i), Dt(), ct(), mt(), ze(), Be(), ve());
  }
  function Mh() {
    if (r || t !== "stickers") return;
    const i = ot();
    if (!i || !At(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Jo(Us, () => {
      ve();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = pr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), ct(), mt(), ze(), Be(), ve();
  }
  function kh(i) {
    if (!i || !At(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = Jo(Us, () => {
      ve();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = pr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function Ph() {
    const i = ot();
    if (!i || !At(i)) return !1;
    const o = kh(i);
    if (!o) return !1;
    const c = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function rl(i) {
    var c;
    const o = Yi(e == null ? void 0 : e.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function Ch(i) {
    const o = Yi(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function Ah(i, o = null) {
    var c;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const l = i[0];
      if (l && typeof l == "object" && !Array.isArray(l)) return l;
    }
    if (Array.isArray(o) && o.length > 0) {
      const l = (c = o[0]) == null ? void 0 : c.parsed_state;
      if (l && typeof l == "object" && !Array.isArray(l))
        return {
          yaw_deg: Number(l.yaw_deg || 0),
          pitch_deg: Number(l.pitch_deg || 0),
          hFOV_deg: Number(l.hFOV_deg || 30),
          rot_deg: Number(l.roll_deg || 0)
        };
    }
    return null;
  }
  function Jo(i, o = null) {
    const c = rl(i), l = Array.isArray(c) && c.length ? c[0] : null, h = gi(l);
    if (!h) return null;
    const p = `__ui__${i}`, _ = T.get(p);
    if (_ && _.__panoSrc === h) return _;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof o == "function" ? o(b) : ve();
    }, b.src = h, T.set(p, b), b;
  }
  function il(i = null) {
    const o = _f(e, ["sticker_image"], i, "sticker_image_exact");
    return o || Jo(Us, i);
  }
  function al(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function pr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(c || 1)), p = G(Number(i || 30), 0.1, 179) * Pt, _ = 2 * Math.atan(Math.tan(p * 0.5) * (h / l));
    return G(_ * lr, 0.1, 179);
  }
  function Ih(i) {
    const o = String(i || "").trim();
    if (!o) return null;
    try {
      const c = JSON.parse(o);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const l = c.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
      const p = c.pose;
      if (!p || typeof p != "object") return null;
      const _ = Number(p.yaw_deg), b = Number(p.pitch_deg), x = Number(p.roll_deg), S = Number(p.hFOV_deg);
      if (![_, b, x, S].every((F) => Number.isFinite(F))) return null;
      let P = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const N = {
        yaw_deg: P,
        pitch_deg: G(b, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: G(S, 0.1, 179)
      }, R = Number(c.source_aspect);
      return Number.isFinite(R) && R > 0 && (N.source_aspect = R), N;
    } catch {
      return null;
    }
  }
  function ol(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), p = Li(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Lt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: p
    };
  }
  function Dh(i) {
    var b;
    if (!i || typeof i != "object") return ol(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), p = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(h) && Number.isFinite(p)) {
      const x = G(h, 0.1, 179) * Pt, S = G(p, 0.1, 179) * Pt, P = Math.tan(S * 0.5);
      if (Math.abs(P) > 1e-6) {
        const N = Math.tan(x * 0.5) / P;
        Number.isFinite(N) && N > 0 && (_ = N);
      }
    }
    if (i != null && i.asset_id && ((b = d == null ? void 0 : d.assets) != null && b[i.asset_id])) {
      const x = d.assets[i.asset_id], S = Number((x == null ? void 0 : x.w) || 0), P = Number((x == null ? void 0 : x.h) || 0);
      S > 0 && P > 0 && (_ = S / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Lt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function Eh(i) {
    var l, h, p, _, b;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const x = sh(e.graph, c), { originId: S, originSlot: P } = ch(x), N = Yi(S), R = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (l = N == null ? void 0 : N.data) == null ? void 0 : l.output,
        (h = N == null ? void 0 : N.data) == null ? void 0 : h.result,
        (p = N == null ? void 0 : N.ui) == null ? void 0 : p.output,
        (_ = N == null ? void 0 : N.ui) == null ? void 0 : _.result
      ];
      for (const F of R) {
        if (!Array.isArray(F)) continue;
        const X = Number(P || 0), z = F[X];
        if (typeof z == "string" && z.trim()) return z;
      }
    }
    return String(((b = mn(e, i)) == null ? void 0 : b.value) || "");
  }
  function Th(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Ih(o);
    if (l) {
      const _ = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), b = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: pr(l.hFOV_deg, _, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), p = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(m.viewYaw || 0),
      pitch_deg: Number(m.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: pr(30, h, p),
      rot_deg: 0
    };
  }
  function sl(i = "sync") {
    if (t !== "stickers" || r) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((F) => String((F == null ? void 0 : F.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = il(() => {
      var F;
      (F = e.__panoExternalStickerSync) == null || F.call(e, "image-loaded");
    }), h = Ah(Ch("pano_sticker_input_pose"), null), p = Eh("sticker_state"), _ = al(h && typeof h == "object" ? JSON.stringify(h) : p), b = Array.isArray(d.stickers) ? d.stickers : d.stickers = [], x = b.findIndex((F) => String((F == null ? void 0 : F.id) || "") === xr);
    if (c == null) {
      x >= 0 && (b.splice(x, 1), m.selectedId === xr && (m.selectedId = null, m.selectedIds = [], d.active.selected_sticker_id = null), mt(), ze(), Be(), ve());
      return;
    }
    const S = b.reduce((F, X) => Math.max(F, Number((X == null ? void 0 : X.z_index) || 0)), -1);
    let P = x >= 0 ? b[x] : null;
    const N = !P || Number(P.source_link_id ?? -1) !== Number(c) || String(P.source_state_hash || "") !== _;
    P || (P = {
      id: xr,
      source_kind: Bs
    }, b.push(P)), P.id = xr, P.source_kind = Bs, P.source_link_id = Number(c), P.source_state_hash = _, P.visible = P.visible !== !1;
    let R = !1;
    if (N) {
      const F = Th(h, p, l);
      Object.assign(P, F, {
        initial_pose: { ...F },
        visible: !0,
        z_index: S + 1
      }), R = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const F = pr(
        Number(P.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(P.vFOV_deg || 0) - F) > 1e-6 && (P.vFOV_deg = F, R = !0);
    }
    R && (mt(), ze(), Be()), ve();
  }
  function Hr(i = {}) {
    const c = i.preservePanelValues !== !1 ? ot() : null;
    c && (m.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Ii(c)
    }), m.selectedId = null, m.selectedIds = [], m.cutoutAspectOpen = !1, d.active.selected_sticker_id = null, d.active.selected_shot_id = null;
  }
  function Rh() {
    if (t !== "cutout") return;
    const i = Ge();
    i && gr(i);
  }
  function Qo() {
    if (t !== "cutout") return;
    const i = Ge();
    Ai(D.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Tt.camera : Tt.plus_circle
    });
  }
  function fa() {
    const i = !!Ge();
    m.mode === "frame" && !i && (m.mode = "pano"), m.outputPreviewRect = null, D.viewButtons.forEach((o) => {
      const c = o.key === m.mode;
      o.pressed = c ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !i : !1;
    }), D.outputPreviewToggle.visible = t === "cutout" && !!Ge(), t === "cutout" && D.cameraPreview && (D.cameraPreview.visible = !0, D.cameraPreview.expanded = !!m.outputPreviewExpanded, D.cameraPreview.settled = D.cameraPreview.settled === !0 && I.pendingStableLayoutFrames <= 0 && I.hasPresentedFrame), Ll() ? ht(m.pointerPos) : A.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function Lh() {
    const o = pl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function es() {
    const i = Cn(m.viewYaw, m.viewPitch);
    let o = Ln(0, 1, 0);
    Math.abs(Sn(i, o)) > 0.999 && (o = Ln(0, 0, 1));
    const c = Zr(Ka(o, i)), l = Zr(Ka(i, c));
    return { right: c, up: l, fwd: i };
  }
  function mi(i) {
    const { right: o, up: c, fwd: l } = es(), h = Sn(i, o), p = Sn(i, c), _ = Sn(i, l);
    if (_ <= 1e-5) return null;
    const b = A.width, x = A.height, S = m.viewFov * Pt, P = 2 * Math.atan(Math.tan(S / 2) * (x / b)), N = b / 2 / Math.tan(S / 2), R = x / 2 / Math.tan(P / 2);
    return {
      x: b / 2 + h / _ * N,
      y: x / 2 - p / _ * R,
      z: _
    };
  }
  function ts(i, o) {
    const { right: c, up: l, fwd: h } = es(), p = A.width, _ = A.height, b = m.viewFov * Pt, x = 2 * Math.atan(Math.tan(b / 2) * (_ / p)), S = (i - p / 2) / (p / 2) * Math.tan(b / 2), P = (_ / 2 - o) / (_ / 2) * Math.tan(x / 2), N = Ua(Ua(Ga(c, S), Ga(l, P)), h);
    return Zr(N);
  }
  function rr() {
    const i = A.width, o = A.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const b = o, x = b * c;
      return { x: (i - x) * 0.5, y: 0, w: x, h: b };
    }
    const h = i, p = h / c;
    return { x: 0, y: (o - p) * 0.5, w: h, h: p };
  }
  function cl(i) {
    var _;
    if (i && typeof i == "object" && (At(i) || i.external === !0))
      return il(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = T.get(o);
    if (c) return c;
    const l = (_ = d.assets) == null ? void 0 : _[o], h = z_(l);
    if (!h) return null;
    const p = new Image();
    return p.onload = () => ve(), p.src = h, T.set(o, p), p;
  }
  function ll(i, o = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const l = H.get(c);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = c, H.set(c, h), h;
  }
  function Oh(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = q.get(o);
    if (c) return c.ready ? c : null;
    const l = ll(i, () => {
      const P = q.get(o);
      P && (P.ready = !1), ve({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), p = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || p < 1) return null;
    const _ = document.createElement("canvas");
    _.width = h, _.height = p;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, p), b.drawImage(l, 0, 0, h, p);
    const x = b.getImageData(0, 0, h, p).data, S = { canvas: _, width: h, height: p, alpha: x, ready: !0 };
    return q.set(o, S), S;
  }
  function Fh(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), _ = gn(Number(i.u || 0), h), b = Number(i.v || 0) - p, x = Math.max(0.02, Number(c || 1)), S = Number(l || 0) * Pt, P = Math.cos(S), N = Math.sin(S), R = _ / x, F = b / x, X = R * P + F * N, z = -R * N + F * P;
    return {
      ...i,
      u: ((h + X) % 1 + 1) % 1,
      v: p + z
    };
  }
  function Vh(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, p = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, _ = Fh(
      p,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(c.u1 || 0) - Number(c.u0 || 0), x = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(b > 1e-6) || !(x > 1e-6)) return null;
    const S = gn(Number(_.u || 0), Number(c.u0 || 0)) / b, P = (Number(_.v || 0) - Number(c.v0 || 0)) / x;
    if (S < 0 || S > 1 || P < 0 || P > 1) return 0;
    const N = Oh(i);
    if (!N) return null;
    const R = G(Math.floor(S * N.width), 0, N.width - 1), F = G(Math.floor(P * N.height), 0, N.height - 1);
    return Number(N.alpha[(F * N.width + R) * 4 + 3] || 0);
  }
  function ul(i, o, c, l = null) {
    if (!(o != null && o.visible) || !Un(c, o.corners)) return !1;
    const h = l || xn(c, performance.now()), p = Vh(i, h);
    return p === null ? !0 : p > 8;
  }
  function Hh() {
    var l, h, p, _, b, x, S, P;
    const i = ((h = (l = m.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Lr(!1))) || null, o = Math.max(1, Number(((p = i == null ? void 0 : i.descriptor) == null ? void 0 : p.width) || ((b = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), c = Math.max(1, Number(((x = i == null ? void 0 : i.descriptor) == null ? void 0 : x.height) || ((P = (S = i == null ? void 0 : i.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : P.height) || 1024));
    return { width: o, height: c };
  }
  function zh() {
    var F, X, z;
    const i = m.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const c = jn(), l = `${sa()}:${c.width}:${c.height}`;
    if (((F = m._activePaintEraserPreviewInfo) == null ? void 0 : F.cacheKey) === l)
      return m._activePaintEraserPreviewInfo.value || null;
    const h = Ht(o), p = (h == null ? void 0 : h.geometry) || null;
    if (p && String(p.geometryKind || "") !== "lasso_fill") {
      const U = Array.isArray(p.rawPoints) && p.rawPoints.length ? p.rawPoints : Array.isArray(p.points) ? p.points : [];
      p.processedPoints = us(U, h.targetSpace, !0);
    }
    const _ = vi(c.width, c.height, { readback: !0 });
    if (!Ml(_, h, { w: c.width, h: c.height })) return null;
    const b = ((z = (X = _.ctx) == null ? void 0 : X.getImageData(0, 0, c.width, c.height)) == null ? void 0 : z.data) || null;
    if (!b) return null;
    let x = c.width, S = c.height, P = -1, N = -1;
    for (let U = 0; U < c.height; U += 1)
      for (let J = 0; J < c.width; J += 1)
        b[(U * c.width + J) * 4 + 3] <= 8 || (J < x && (x = J), U < S && (S = U), J > P && (P = J), U > N && (N = U));
    if (P < x || N < S)
      return m._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const R = {
      surface: _,
      bounds: { minX: x, minY: S, maxX: P, maxY: N },
      key: `${l}:${x}:${S}:${P}:${N}`
    };
    return m._activePaintEraserPreviewInfo = { cacheKey: l, value: R }, m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), R;
  }
  function yi() {
    m._activePaintEraserPreviewInfo = null, m._liveEraserPreviewCanvasCache = null;
  }
  function jh(i, o, c) {
    var l, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const p = i.item.bbox, _ = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(p.u0 || 0) + Number(_.du || 0), x = Number(p.u1 || 0) + Number(_.du || 0), S = Number(p.v0 || 0) + Number(_.dv || 0), P = Number(p.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(G(S, 0, 1) * c),
        maxY: Math.ceil(G(P, 0, 1) * c),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    if (i.type === "strokeGroup") {
      const p = bn(i.actionGroupId, "paint"), _ = Nt(i.actionGroupId, "paint", p);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, x = _.centerUv.u + _.halfW, S = _.centerUv.v - _.halfH, P = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(G(S, 0, 1) * c),
        maxY: Math.ceil(G(P, 0, 1) * c),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    return null;
  }
  function $h(i, o, c) {
    if (!i || !o) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: c - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], h = l(i), p = l(o);
    return h.some((_) => p.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function Bh(i, o, c) {
    var ye, Pe, Fe, Se, K, ee, _e;
    if (!i || !o || !((ye = c == null ? void 0 : c.surface) != null && ye.canvas) || o.type !== "rasterObject") return i;
    const l = Number(i.width || c.surface.canvas.width || 0), h = Number(i.height || c.surface.canvas.height || 0);
    if (l < 1 || h < 1) return i;
    const p = jh(o, l, h);
    if (p && !$h(p, c.bounds, l)) return i;
    const _ = String(((Pe = o.item) == null ? void 0 : Pe.id) || o.id || ""), b = ((Fe = o.item) == null ? void 0 : Fe.transform) || {}, x = `${c.key}:${_}:${l}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = m._liveEraserPreviewCanvasCache instanceof Map ? m._liveEraserPreviewCanvasCache : m._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(x)) return S.get(x);
    const P = G(Math.floor(Number(((Se = c.bounds) == null ? void 0 : Se.minX) || 0)), 0, Math.max(0, l - 1)), N = G(Math.floor(Number(((K = c.bounds) == null ? void 0 : K.minY) || 0)), 0, Math.max(0, h - 1)), R = G(Math.ceil(Number(((ee = c.bounds) == null ? void 0 : ee.maxX) || 0)), P, Math.max(0, l - 1)), F = G(Math.ceil(Number(((_e = c.bounds) == null ? void 0 : _e.maxY) || 0)), N, Math.max(0, h - 1)), X = Math.max(1, R - P + 1), z = Math.max(1, F - N + 1), U = vi(l, h, { readback: !0 });
    U.ctx.clearRect(0, 0, l, h), U.ctx.drawImage(i, 0, 0);
    const J = U.ctx.getImageData(P, N, X, z);
    U.ctx.save(), U.ctx.globalCompositeOperation = "destination-out", U.ctx.drawImage(c.surface.canvas, 0, 0), U.ctx.restore();
    const ge = U.ctx.getImageData(P, N, X, z);
    let re = !1;
    for (let Ne = 0; Ne < X * z; Ne += 1) {
      const je = J.data[Ne * 4 + 3], Ve = ge.data[Ne * 4 + 3];
      if (je > Ve) {
        re = !0;
        break;
      }
    }
    return re ? (S.size > 64 && S.clear(), S.set(x, U.canvas), U.canvas) : (S.set(x, i), i);
  }
  function fl(i, o = null) {
    const c = Oe((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const h = ll(i, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: p, height: _ } = Hh(), b = (i == null ? void 0 : i.transform) || {}, x = [
      c,
      p,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      _i()
    ].join(":"), S = oe.get(x);
    if (S) return S;
    oe.size > 64 && oe.clear();
    const P = document.createElement("canvas");
    P.width = p, P.height = _;
    const N = P.getContext("2d");
    if (!N) return null;
    const R = Number(l.u0 || 0) * p, F = Number(l.v0 || 0) * _, X = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * p), z = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), U = R + X * 0.5 + Number(b.du || 0) * p, J = F + z * 0.5 + Number(b.dv || 0) * _, ge = Number(b.rot_deg || 0) * Pt, re = Math.max(0.01, Number(b.scale || 1));
    for (const ye of [-p, 0, p])
      N.save(), N.translate(U + ye, J), N.rotate(ge), N.scale(re, re), N.drawImage(h, -X * 0.5, -z * 0.5, X, z), N.restore();
    return oe.set(x, P), P;
  }
  function Uh() {
    return Ko(d, {
      selectedId: m.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Gh(i) {
    return Od(
      d,
      (o, c, l) => cl(l || o),
      { scene: i }
    );
  }
  function dl(i, o, c, l, h = "modal_object_view") {
    if (!i || !o || !c) return !1;
    String((c == null ? void 0 : c.mode) || "");
    const p = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (vl(o, c))
      return eg(
        o,
        c,
        p && m.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const b = ga(), x = pa(b), S = m.showObjects ? ma() : bi([]), N = Ti({
      stateRevision: [
        h,
        p ? String(l.currentSrc || l.src || "") : "no_bg",
        p ? Number(l.naturalWidth || l.width || 0) : 0,
        p ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(x) ? x.map((z) => `${String((z == null ? void 0 : z.assetId) || "")}:${String((z == null ? void 0 : z.revision) || "")}`).join(",") : "none",
        S.length ? S.map((z) => `${String((z == null ? void 0 : z.id) || "")}:${String((z == null ? void 0 : z.revision) || "")}:${Number((z == null ? void 0 : z.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: p && m.showPanorama ? l : null,
      backgroundRevision: p ? `${h}:bg` : "",
      coverageDeg: Rt(d.coverage),
      scene: b,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), R = fe;
    if (!R.syncState(N)) return !1;
    const X = R.renderToTarget(`${h}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return X ? (i.drawImage(X, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function ns(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await Jt.fetchApi("/upload/image", { method: "POST", body: c });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const h = await l.json(), p = String((h == null ? void 0 : h.name) || "").trim();
    if (!p)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: p,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((i == null ? void 0 : i.name) || o)
    };
  }
  async function rs(i, o) {
    const c = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await Jt.fetchApi("/upload/image", { method: "POST", body: l });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const p = await h.json(), _ = String((p == null ? void 0 : p.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((p == null ? void 0 : p.subfolder) || "panorama_stickers"),
      storage: String((p == null ? void 0 : p.type) || "input")
    };
  }
  let is = null, da = !1;
  function Kh() {
    const i = yf(d.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = d.painting_layer, c = Br();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function hl() {
    const i = String(e.id ?? "0"), o = $a.get(i);
    if (da && o) return o;
    const c = (async () => {
      var p, _, b, x, S, P, N, R, F, X, z, U;
      const l = Br(), h = yf(d.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        d.painting_layer !== null && (d.painting_layer = null, is = l, pn());
        return;
      }
      if (is !== l && !da) {
        da = !0;
        try {
          _a();
          const J = Lr(!1), ge = ((_ = (p = m.paintEngine) == null ? void 0 : p.getErpTarget) == null ? void 0 : _.call(p, J)) || null, re = ((b = ge == null ? void 0 : ge.displayPaint) == null ? void 0 : b.canvas) || null, ye = ((x = ge == null ? void 0 : ge.committedMask) == null ? void 0 : x.canvas) || null, Pe = Math.max(1, Number(((S = ge == null ? void 0 : ge.descriptor) == null ? void 0 : S.width) || (re == null ? void 0 : re.width) || (ye == null ? void 0 : ye.width) || 2048)), Fe = Math.max(1, Number(((P = ge == null ? void 0 : ge.descriptor) == null ? void 0 : P.height) || (re == null ? void 0 : re.height) || (ye == null ? void 0 : ye.height) || 1024));
          (!re && h.totalPaintCount > 0 || !ye && h.totalMaskCount > 0) && ((!m._paintLayerSyncBlankSurface || Number(((N = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Pe || Number(((R = m._paintLayerSyncBlankSurface.canvas) == null ? void 0 : R.height) || 0) !== Fe) && (m._paintLayerSyncBlankSurface = vi(Pe, Fe)), m._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Pe, Fe));
          const Se = re || h.totalPaintCount > 0 && ((F = m._paintLayerSyncBlankSurface) == null ? void 0 : F.canvas) || null, K = ye || h.totalMaskCount > 0 && ((X = m._paintLayerSyncBlankSurface) == null ? void 0 : X.canvas) || null;
          if (!Se && !K) return;
          let ee = null, _e = null;
          const Ne = [];
          if (h.totalPaintCount > 0) {
            ee = await rs(Se, `pano_paint_${i}.png`);
            for (const je of J) {
              const Ve = String(je || "").trim();
              if (!Ve) continue;
              const Ue = ((U = (z = m.paintEngine) == null ? void 0 : z.getGroupDisplayCanvas) == null ? void 0 : U.call(z, Ve)) || null;
              if (!Ue) continue;
              const We = Ve.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ke = await rs(Ue, `pano_group_${i}_${We}.png`);
              Ke && Ne.push({
                id: Ve,
                actionGroupId: Ve,
                image: Ke
              });
            }
          }
          h.totalMaskCount > 0 && (_e = await rs(K, `pano_mask_${i}.png`)), l === Br() && (d.painting_layer = {
            paint: ee,
            mask: _e,
            groups: Ne,
            revision: l
          }, is = l, pn());
        } catch (J) {
          throw J;
        } finally {
          da = !1;
        }
      }
    })();
    return $a.set(i, c), c.finally(() => {
      $a.get(i) === c && $a.delete(i);
    }), c;
  }
  function zr() {
    const i = $_(e, "pano_input_images", T, () => ve());
    if (i) return i;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let h = [];
    return r && (c || l) ? h = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], _f(e, h, () => ve(), `background:${h.join("|")}`);
  }
  function gl(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Wh() {
    if (!I.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (m.showPanorama) {
      const c = zr();
      i = !!c && !gl(c);
    }
    if (m.showObjects) {
      const c = Array.isArray(d.stickers) ? d.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = cl(l);
        if (h && !gl(h)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function jr() {
    const i = new Set(
      (d.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(d.assets || {}).forEach((o) => {
      i.has(o) || (delete d.assets[o], T.delete(o));
    });
  }
  function as(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(G(i.y, -1, 1))
    };
  }
  function os(i, o = null) {
    const { lon: c, lat: l } = as(i), h = rr();
    let p = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const _ = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; p - o > h.w / 2; ) p -= h.w;
      for (; p - o < -h.w / 2; ) p += h.w;
    }
    return { x: p, y: _, z: 1 };
  }
  function ha(i) {
    const o = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Ln(0, 1, 0);
    Math.abs(Sn(o, c)) > 0.999 && (c = Ln(0, 0, 1));
    const l = Zr(Ka(c, o)), h = Zr(Ka(o, l)), p = Math.tan(G(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Pt), _ = Math.tan(G(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Pt), b = Number(i.rot_deg || i.roll_deg || 0) * Pt, x = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: p,
      tanY: _,
      cr: x,
      sr: S
    };
  }
  function ir(i, o, c) {
    const l = o * i.cr - c * i.sr, h = o * i.sr + c * i.cr;
    return Zr(Ua(Ua(i.centerDir, Ga(i.right, l)), Ga(i.up, h)));
  }
  function pl(i) {
    const o = ha(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => ir(o, l * o.tanX, h * o.tanY));
  }
  function ml(i, o, c) {
    const l = ha(i), h = (o * 2 - 1) * l.tanX, p = (1 - c * 2) * l.tanY;
    return ir(l, h, p);
  }
  function yl(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: G((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Yh(i) {
    var x, S, P, N;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.scale) || 1)), h = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.rot_deg) || 0), p = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.du) || 0), _ = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((R) => ca(la(R, c, l, h), p, _));
  }
  function qh(i) {
    const o = Oe((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${o}:${m.mode}:${_i()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (m.mode === "frame") {
      const p = Ge(), _ = p ? Vt(p) : null;
      return `${h}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Xh(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      cn(i) ? "frame" : pt(i) ? "sticker" : "item",
      o,
      m.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Ii(i)
    ].join(":");
    if (m.mode === "frame") {
      const h = Ge(), p = h ? Vt(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((p == null ? void 0 : p.x) || 0))}:${Math.round(Number((p == null ? void 0 : p.y) || 0))}:${Math.round(Number((p == null ? void 0 : p.w) || 0))}:${Math.round(Number((p == null ? void 0 : p.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(m.viewYaw || 0) * 100)}:${Math.round(Number(m.viewPitch || 0) * 100)}:${Math.round(Number(m.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Zh() {
    var o;
    const i = String(((o = d.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? m.hqFrames && m.hqFrames > 0 ? [28, 20] : m.interaction ? [12, 9] : [20, 14] : i === "high" ? m.hqFrames && m.hqFrames > 0 ? [48, 36] : m.interaction ? [20, 14] : [36, 26] : m.hqFrames && m.hqFrames > 0 ? [40, 30] : m.interaction ? [16, 12] : [28, 20];
  }
  function bl() {
    var i;
    return !!B && !!((i = fe == null ? void 0 : fe.isSupported) != null && i.call(fe));
  }
  function vl(i, o) {
    return !bl() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((A == null ? void 0 : A.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((A == null ? void 0 : A.height) || 0));
  }
  function ga() {
    return m.showObjects ? Uh() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function pa(i) {
    return !m.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Gh(i);
  }
  function _l() {
    var i, o;
    return ((o = (i = m.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : o.call(i)) || null;
  }
  function Jh() {
    return _l() ? `${fs()}:mask_display` : "";
  }
  function bi(i) {
    if (!m.showMask) return i;
    const o = _l();
    if (!o) return i;
    const c = Jh(), l = i.reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.zIndex) || 0)), -1), h = (Array.isArray(d.stickers) ? d.stickers : []).reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.z_index) || 0)), -1), p = Math.max(l, h);
    return i.push({
      id: "mask_display",
      source: o,
      revision: c,
      zIndex: p + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function ma() {
    var l, h;
    const i = Wo(!0), o = zh(), c = [];
    for (const p of i) {
      if ((p == null ? void 0 : p.type) === "strokeGroup") {
        const _ = String(p.actionGroupId || p.id || "");
        if (!_) continue;
        const b = ((h = (l = m.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : h.call(l, _)) || null;
        if (!b) continue;
        c.push({
          id: `paint_group:${_}`,
          source: b,
          revision: `${fs()}:${_}`,
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((p == null ? void 0 : p.type) === "rasterObject") {
        const _ = p.item || null, b = Oe((_ == null ? void 0 : _.id) || p.id || "");
        if (!b) continue;
        const x = fl(_, () => ve());
        if (!x) continue;
        const S = Bh(x, p, o), P = (_ == null ? void 0 : _.transform) || {};
        c.push({
          id: `raster:${b}`,
          source: S,
          revision: [
            Br(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return bi(c);
  }
  function Qh(i, o = "modal_bg_gl") {
    const c = ga(), l = pa(c), h = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, p = h ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", _ = m.showObjects ? ma() : bi([]), b = null, x = [
      o,
      p,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((S) => String((S == null ? void 0 : S.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((S) => `${String((S == null ? void 0 : S.assetId) || "")}:${String((S == null ? void 0 : S.revision) || "")}`).join(",") : "none",
      _.length ? _.map((S) => `${String((S == null ? void 0 : S.id) || "")}:${String((S == null ? void 0 : S.revision) || "")}:${Number((S == null ? void 0 : S.zIndex) || 0)}`).join(",") : "paint:none",
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Ti({
        stateRevision: x,
        backgroundSource: h ? i : null,
        backgroundRevision: h ? `${o}:${p}` : "",
        coverageDeg: Rt(d.coverage),
        scene: c,
        textures: l,
        paintSource: b,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || _.length > 0
    };
  }
  function ss() {
    if (!B) return;
    const i = B.getContext("webgl2");
    if (i)
      i.viewport(0, 0, B.width, B.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = B.getContext("2d");
      o && (o.clearRect(0, 0, B.width, B.height), o.fillStyle = "#070707", o.fillRect(0, 0, B.width, B.height));
    }
    I.backgroundWasVisible = !1, I.backgroundDirty = !1;
  }
  function eg(i, o, c, l = "modal_bg_gl") {
    var S;
    if (!vl(i, o)) return !1;
    if (!I.backgroundDirty && I.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: p } = Qh(c, l);
    if (!p || !fe.syncState(h))
      return ss(), !1;
    const b = fe.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (S = B == null ? void 0 : B.getContext) == null ? void 0 : S.call(B, "2d");
    return !b || !x ? (ss(), !1) : (x.clearRect(0, 0, B.width, B.height), x.drawImage(b, 0, 0, B.width, B.height), I.backgroundWasVisible = !0, I.backgroundDirty = !1, !0);
  }
  function tg(i = !1) {
    const o = A.width, c = A.height, l = rr();
    if (k.globalAlpha = 1, k.lineWidth = 1, i || (k.fillStyle = "#070707", k.fillRect(0, 0, o, c), k.fillStyle = "#070707", k.fillRect(l.x, l.y, l.w, l.h)), _a(), dl(
      k,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      zr(),
      "modal_unwrap"
    ), m.showGrid && !m.fullscreen) {
      k.strokeStyle = "#3f3f46";
      for (let p = 0; p <= 16; p += 1) {
        const _ = l.x + l.w * p / 16;
        k.beginPath(), k.moveTo(_, l.y), k.lineTo(_, l.y + l.h), k.stroke();
      }
      for (let p = 0; p <= 8; p += 1) {
        const _ = l.y + l.h * p / 8;
        k.beginPath(), k.moveTo(l.x, _), k.lineTo(l.x + l.w, _), k.stroke();
      }
      k.strokeStyle = "rgba(250, 250, 250, 0.86)", k.lineWidth = 1.2, k.beginPath(), k.moveTo(l.x, l.y + l.h / 2), k.lineTo(l.x + l.w, l.y + l.h / 2), k.stroke(), k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center";
      const h = l.y + l.h * 0.57;
      k.fillText("Left", l.x + l.w * 0.25, h), k.fillText("Front", l.x + l.w * 0.5, h), k.fillText("Right", l.x + l.w * 0.75, h), k.fillText("Back", l.x + 38, h), k.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function xl(i, o, c = 1) {
    let l = !1;
    k.strokeStyle = o, k.lineWidth = c, k.beginPath();
    for (const h of i) {
      const p = mi(h);
      if (!p) {
        l = !1;
        continue;
      }
      l ? k.lineTo(p.x, p.y) : (k.moveTo(p.x, p.y), l = !0);
    }
    k.stroke();
  }
  function ng(i = !1) {
    const o = A.width, c = A.height;
    if (i || (bl() ? k.clearRect(0, 0, o, c) : (k.fillStyle = "#070707", k.fillRect(0, 0, o, c))), _a(), dl(
      k,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: m.viewYaw,
        pitchDeg: m.viewPitch,
        fovDeg: m.viewFov,
        coverageDeg: Rt(d.coverage)
      },
      zr(),
      "modal_pano"
    ), m.showGrid && !m.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const p = [];
        for (let _ = -89; _ <= 89; _ += 4) p.push(Cn(h, _));
        xl(p, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const p = [];
        for (let _ = -180; _ <= 180; _ += 4) p.push(Cn(_, h));
        xl(p, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Cn(-90, 0) },
        { name: "Front", dir: Cn(0, 0) },
        { name: "Right", dir: Cn(90, 0) },
        { name: "Back", dir: Cn(180, 0) }
      ];
      k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center", l.forEach((h) => {
        const p = mi(h.dir);
        p && k.fillText(h.name, p.x, p.y + 24);
      });
    }
  }
  function rg(i, o = null, c = null, l = null) {
    if (m.mode === "frame") {
      const h = o || Ge();
      if (!h) return [];
      const p = c || Vt(h);
      return Hg(i, h, p);
    }
    return kl(i, l);
  }
  function ya(i, o = null, c = null, l = null, h = null) {
    if (!i) return null;
    if (m.mode === "unwrap") {
      const _ = kl([i], h);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const p = $r(i);
    return p ? zn(p, o, c, l) : null;
  }
  function ig(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = bn(c, i.layerKind), h = Nt(c, i.layerKind, l), p = (h == null ? void 0 : h.centerUv) || qo(c, i.layerKind, l), _ = m.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, b = [], x = m.mode === "frame" ? Ge() : null, S = x ? Vt(x) : null;
    for (const re of l) {
      const ye = (re == null ? void 0 : re.geometry) || null, Pe = (ye == null ? void 0 : ye.geometryKind) === "lasso_fill" ? ye == null ? void 0 : ye.points : (ye == null ? void 0 : ye.processedPoints) || (ye == null ? void 0 : ye.rawPoints) || (ye == null ? void 0 : ye.points) || [], Fe = rg(Pe, x, S, _).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y));
      if (!Fe.length) continue;
      const Se = ar(String((re == null ? void 0 : re.toolKind) || "pen")), K = nn[Se] || nn[Bn];
      b.push({
        points: Fe,
        closed: String((ye == null ? void 0 : ye.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((K == null ? void 0 : K.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const P = ya(p, null, x, S, _);
    if (!P) {
      const re = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, re), re;
    }
    const R = kn(h).map((re) => ya(re, P.x, x, S, _)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (R.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return m._strokeGeomCache.set(o, re), re;
    }
    const F = (re, ye) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((ye == null ? void 0 : ye.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((ye == null ? void 0 : ye.y) || 0)) * 0.5,
      a: re,
      b: ye
    }), X = F(R[0], R[1]), z = F(R[1], R[2]), U = F(R[2], R[3]), J = F(R[3], R[0]), ge = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: R,
      edgeMidpoints: [
        { edge: "top", ...X },
        { edge: "right", ...z },
        { edge: "bottom", ...U },
        { edge: "left", ...J }
      ],
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: { x: X.x, y: X.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return m._strokeGeomCache.set(o, ge), ge;
  }
  function ag(i, o) {
    const c = m.mode === "frame" ? Ge() : null, l = c ? Vt(c) : null, h = yl(i), p = m.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, _ = ya(h, null, c, l, p), x = Yh(i).map((R) => ya(R, (_ == null ? void 0 : _.x) ?? null, c, l, p)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y));
    if (!Array.isArray(x) || x.length < 4) {
      const R = { visible: !1, kind: "rasterObject" };
      return m._strokeGeomCache.set(o, R), R;
    }
    const S = x.slice(0, 4).map((R) => ({ x: Number((R == null ? void 0 : R.x) || 0), y: Number((R == null ? void 0 : R.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: S.reduce((R, F) => R + Number(F.x || 0), 0) / S.length,
        y: S.reduce((R, F) => R + Number(F.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return m._strokeGeomCache.set(o, N), N;
  }
  function zn(i, o = null, c = null, l = null) {
    if (m.mode === "frame") {
      const ge = c || Ge(), re = l || Vt(ge);
      if (!ge || !re) return null;
      const ye = ge ? xi(ge, i) : null;
      return ye ? {
        x: Number(re.x || 0) + Number(ye.x || 0) * Number(re.w || 0),
        y: Number(re.y || 0) + Number(ye.y || 0) * Number(re.h || 0),
        z: 1
      } : null;
    }
    if (m.mode === "unwrap") return os(i, o);
    const { right: h, up: p, fwd: _ } = es(), b = Sn(i, h), x = Sn(i, p), S = Sn(i, _), P = A.width, N = A.height, R = m.viewFov * Pt, F = 2 * Math.atan(Math.tan(R / 2) * (N / Math.max(P, 1))), X = P / 2 / Math.tan(R / 2), z = N / 2 / Math.tan(F / 2), U = Math.max(S, 1e-4), J = Math.max(P, N) * 2;
    return {
      x: G(P / 2 + b / U * X, -J, P + J),
      y: G(N / 2 - x / U * z, -J, N + J),
      z: U
    };
  }
  function og(i) {
    const o = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = m.mode === "frame" ? Ge() : null, l = c ? Vt(c) : null, h = zn(o, null, c, l);
    if (!h) return { visible: !1 };
    const p = ha(i), b = pl(i).map((Pe) => zn(Pe, h.x, c, l)).filter((Pe) => Number.isFinite(Pe == null ? void 0 : Pe.x) && Number.isFinite(Pe == null ? void 0 : Pe.y));
    if (b.length < 4) return { visible: !1 };
    const x = ir(p, 0, p.tanY), S = ir(p, 0, p.tanY + Math.max(p.tanY * 0.43, 0.053)), P = zn(x, h.x, c, l);
    if (!P) return { visible: !1 };
    const N = zn(S, (P == null ? void 0 : P.x) ?? h.x, c, l), R = ((N == null ? void 0 : N.x) ?? P.x) - P.x, F = ((N == null ? void 0 : N.y) ?? P.y) - P.y, X = Math.hypot(R, F) || 1, z = {
      x: P.x + R / X * 30,
      y: P.y + F / X * 30
    }, U = zn(ir(p, 0, p.tanY), h.x, c, l), J = zn(ir(p, p.tanX, 0), h.x, c, l), ge = zn(ir(p, 0, -p.tanY), h.x, c, l), re = zn(ir(p, -p.tanX, 0), h.x, c, l);
    if (!U || !J || !ge || !re) return { visible: !1 };
    const ye = [
      {
        edge: "top",
        x: U.x,
        y: U.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: J.x,
        y: J.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: ge.x,
        y: ge.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: re.x,
        y: re.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: b.map((Pe) => ({ x: Pe.x, y: Pe.y })),
      edgeMidpoints: ye,
      rotateStemBase: { x: P.x, y: P.y },
      rotateHandle: z,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function It(i) {
    if (Mt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), p = gh(h, i.layerKind), _ = m._strokeGeomCache.get(p);
      return _ || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), ig(i, p));
    }
    if (Ot(i)) {
      const h = qh(i), p = m._strokeGeomCache.get(h);
      return p || (m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear(), ag(i, h));
    }
    const o = Xh(i), c = m._strokeGeomCache.get(o);
    if (c) return c;
    m._strokeGeomCache.size > 256 && m._strokeGeomCache.clear();
    const l = og(i);
    return m._strokeGeomCache.set(o, l), l;
  }
  function ba(i, o, c, l = null) {
    const h = [];
    for (let p = 0; p <= c; p += 1) {
      const _ = p / c;
      let b = 0, x = 0;
      o === 0 ? (b = _, x = 0) : o === 1 ? (b = 1, x = _) : o === 2 ? (b = 1 - _, x = 1) : (b = 0, x = 1 - _);
      const S = ml(i, b, x), P = m.mode === "unwrap" ? os(S, l) : mi(S);
      P && h.push(P);
    }
    return h;
  }
  function sg(i, o) {
    const c = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = m.mode === "unwrap" ? os(c) : null, h = l ? l.x : null, p = m.mode === "pano" ? 28 : 20, _ = [
      ba(i, 0, p, h),
      ba(i, 1, p, h),
      ba(i, 2, p, h),
      ba(i, 3, p, h)
    ];
    k.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", k.lineWidth = o ? 2 : 1, k.beginPath();
    let b = !1;
    for (const x of _)
      for (const S of x)
        b ? k.lineTo(S.x, S.y) : (k.moveTo(S.x, S.y), b = !0);
    k.closePath(), k.stroke();
  }
  function cg() {
    const i = [...Array.isArray(d.shots) ? d.shots : []], o = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(c.z_index || 0) - Number(l.z_index || 0));
    return [...i, ...o];
  }
  function cs() {
    const i = [...Array.isArray(d.shots) ? d.shots : []];
    return [...[...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(l.z_index || 0) - Number(c.z_index || 0)), ...i];
  }
  function va(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function lg(i, o, c) {
    const l = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (l.length < 4) return;
    const h = c ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", p = c ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", _ = o ? 3.2 : 2.6, b = o ? 4.4 : 3.4, x = o ? 24 : 20;
    va(k, l), k.fillStyle = p, k.fill(), k.strokeStyle = h, k.lineWidth = _, k.stroke(), k.save(), k.strokeStyle = h, k.lineWidth = b, k.lineCap = "round";
    for (let R = 0; R < 4; R += 1) {
      const F = l[R], X = l[(R + 3) % 4], z = l[(R + 1) % 4], U = F.x - X.x, J = F.y - X.y, ge = Math.hypot(U, J) || 1, re = z.x - F.x, ye = z.y - F.y, Pe = Math.hypot(re, ye) || 1;
      k.beginPath(), k.moveTo(F.x, F.y), k.lineTo(F.x - U / ge * x, F.y - J / ge * x), k.moveTo(F.x, F.y), k.lineTo(F.x + re / Pe * x, F.y + ye / Pe * x), k.stroke();
    }
    const S = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], P = {
      x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
      y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
    }, N = o ? 12 : 9;
    S.forEach((R) => {
      const F = P.x - R.x, X = P.y - R.y, z = Math.hypot(F, X) || 1;
      k.beginPath(), k.moveTo(R.x, R.y), k.lineTo(R.x + F / z * N, R.y + X / z * N), k.stroke();
    }), k.restore();
  }
  function ug(i, o, c, l) {
    if (cn(i)) {
      lg(o, c, l);
      return;
    }
    if (pt(i)) {
      const h = k.globalAlpha;
      k.globalAlpha = xh(i), m.mode === "frame" ? (k.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", k.lineWidth = c ? 2 : 1, va(k, o.corners), k.stroke()) : sg(i, c), k.globalAlpha = h;
      return;
    }
    k.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", va(k, o.corners), k.fill(), k.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", k.lineWidth = c ? 2.8 : 1.9, va(k, o.corners), k.stroke();
  }
  function fg(i, o, c) {
    k.fillStyle = c, o.corners.forEach((l) => {
      k.beginPath(), k.arc(l.x, l.y, 6.5, 0, Math.PI * 2), k.fill();
    }), cn(i) && (k.strokeStyle = c, k.lineCap = "round", k.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var P, N, R, F;
      const h = (((P = l.b) == null ? void 0 : P.x) ?? l.x) - (((N = l.a) == null ? void 0 : N.x) ?? l.x), p = (((R = l.b) == null ? void 0 : R.y) ?? l.y) - (((F = l.a) == null ? void 0 : F.y) ?? l.y), _ = Math.hypot(h, p) || 1, b = h / _, x = p / _, S = 10;
      k.beginPath(), k.moveTo(l.x - b * S, l.y - x * S), k.lineTo(l.x + b * S, l.y + x * S), k.stroke();
    }), k.lineCap = "butt"), Mt(i) || (k.strokeStyle = "rgba(250, 250, 250, 0.9)", k.lineWidth = 1.8, k.beginPath(), k.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), k.lineTo(o.rotateHandle.x, o.rotateHandle.y), k.stroke(), k.fillStyle = c, k.beginPath(), k.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), k.fill());
  }
  function dg() {
    var b;
    const [i, o] = Zh(), c = vn(), l = c.length > 1, h = t === "cutout" ? cg() : ce(), p = h.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${cn(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!m._sortedItemsCache || m._sortedItemsCache.src !== h || m._sortedItemsCache.orderKey !== p) && (m._sortedItemsCache = {
      src: h,
      orderKey: p,
      sorted: [...h]
    });
    const _ = m._sortedItemsCache.sorted;
    for (const x of _) {
      const S = !l && mh(x);
      if (m.mode === "frame" && !S || !m.showObjects && !cn(x)) continue;
      const P = pt(x), N = cn(x), R = nr(x);
      if (!P && !N)
        continue;
      const F = It(x);
      if (!(t !== "stickers" && !F.visible) && (ug(x, F, S, R), S && F.visible)) {
        const X = R ? "#ff4d4f" : P && At(x) ? "#f59e0b" : "#0070f3";
        fg(x, F, X);
      }
    }
    if (l) {
      const x = Xo(c);
      if (x != null && x.visible) {
        const S = Zo(c) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(x.corners[0].x, x.corners[0].y);
        for (let P = 1; P < x.corners.length; P += 1) k.lineTo(x.corners[P].x, x.corners[P].y);
        k.closePath(), k.stroke(), k.setLineDash([]), k.fillStyle = S, x.corners.forEach((P) => {
          k.beginPath(), k.arc(P.x, P.y, 6.5, 0, Math.PI * 2), k.fill();
        }), k.restore();
      }
    } else
      c.forEach((x) => {
        if (!Mt(x) && !Ot(x)) return;
        const S = It(x);
        if (!(S != null && S.visible)) return;
        const P = nr(x) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(S.corners[0].x, S.corners[0].y);
        for (let N = 1; N < S.corners.length; N += 1) k.lineTo(S.corners[N].x, S.corners[N].y);
        k.closePath(), k.stroke(), k.setLineDash([]), k.fillStyle = P, S.corners.forEach((N) => {
          k.beginPath(), k.arc(N.x, N.y, 6.5, 0, Math.PI * 2), k.fill();
        }), k.restore();
      });
    if (((b = m.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const x = Vl(m.interaction.start, m.interaction.current);
      k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.9)", k.fillStyle = "rgba(255, 255, 255, 0.08)", k.lineWidth = 1, k.setLineDash([5, 4]), k.beginPath(), k.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), k.fill(), k.stroke(), k.restore();
    }
    m.hqFrames && i >= 40 && o >= 30 && (m.hqFrames -= 1, m.hqFrames > 0 && ve());
  }
  function hg(i) {
    const o = ur(i), c = G(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return c >= 1 ? { width: l, height: Math.max(1, Math.round(l / c)) } : { width: Math.max(1, Math.round(l * c)), height: l };
  }
  function wl(i, o = !1) {
    const c = G(Li(i), 0.05, 20), l = o ? 320 : 220;
    return c >= 1 ? { width: l, height: Math.max(1, Math.round(l / c)) } : { width: Math.max(1, Math.round(l * c)), height: l };
  }
  function gg(i) {
    if (!he || !i) return !1;
    const o = he.closest(".pano-camera-preview");
    if (!o) return !1;
    const c = Math.round(Number(o.clientWidth || he.clientWidth || 0)), l = Math.round(Number(o.clientHeight || he.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(l - Number(i.height || 0)) <= 1;
  }
  function pg() {
    var c;
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = Array.isArray((c = d.painting) == null ? void 0 : c.raster_objects) ? d.painting.raster_objects : [];
    return JSON.stringify({
      stickers: i.map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        asset_id: String((l == null ? void 0 : l.asset_id) || (l == null ? void 0 : l.assetId) || ""),
        source_kind: String((l == null ? void 0 : l.source_kind) || ""),
        source_link_id: Number((l == null ? void 0 : l.source_link_id) ?? -1),
        source_state_hash: String((l == null ? void 0 : l.source_state_hash) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        yaw_deg: Number((l == null ? void 0 : l.yaw_deg) || 0),
        pitch_deg: Number((l == null ? void 0 : l.pitch_deg) || 0),
        hFOV_deg: Number((l == null ? void 0 : l.hFOV_deg) || 0),
        vFOV_deg: Number((l == null ? void 0 : l.vFOV_deg) || 0),
        rot_deg: Number((l == null ? void 0 : l.rot_deg) || 0),
        roll_deg: Number((l == null ? void 0 : l.roll_deg) || 0),
        crop: (l == null ? void 0 : l.crop) || null
      })),
      rasters: o.filter((l) => String((l == null ? void 0 : l.layerKind) || "paint") === "paint").map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        transform: (l == null ? void 0 : l.transform) || null,
        bbox: (l == null ? void 0 : l.bbox) || null
      }))
    });
  }
  function mg(i, o = {}) {
    if (!i) return "";
    const c = zr(), l = c && (c.complete || c.naturalWidth || c.width) ? [
      String(c.currentSrc || c.src || ""),
      Number(c.naturalWidth || c.width || 0),
      Number(c.naturalHeight || c.height || 0)
    ].join("|") : "no_bg", h = hg(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      fs(),
      pg(),
      sa(),
      l,
      m.showPanorama ? "panorama:1" : "panorama:0",
      m.showObjects ? "objects:1" : "objects:0",
      m.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function yg() {
    var R, F, X, z;
    if (m.outputPreviewRect = null, D.outputPreviewToggle.visible = m.mode !== "frame" && !!Ge(), t !== "cutout" || !D.cameraPreview) return;
    if (m.mode === "frame") {
      D.cameraPreview.visible = !1, D.cameraPreview.settled = !1;
      return;
    }
    const i = Ge();
    if (!i) {
      D.cameraPreview.visible = !0, D.cameraPreview.ready = !1, D.cameraPreview.settled = !1, D.cameraPreview.expanded = !!m.outputPreviewExpanded, D.cameraPreview.width = 220, D.cameraPreview.height = 132, D.cameraPreview.label = "Add Frame to preview", (R = ue == null ? void 0 : ue.clearScene) == null || R.call(ue), (F = Je == null ? void 0 : Je.requestRender) == null || F.call(Je);
      return;
    }
    D.cameraPreview.visible = !0;
    const o = zr();
    if (!i || !ue || !Je) {
      D.cameraPreview.ready = !1, D.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", D.cameraPreview.expanded = !!m.outputPreviewExpanded, D.cameraPreview.settled = !1, D.cameraPreview.width = 220, D.cameraPreview.height = 132, (X = ue == null ? void 0 : ue.clearScene) == null || X.call(ue), (z = Je == null ? void 0 : Je.requestRender) == null || z.call(Je);
      return;
    }
    const c = wl(i, !!m.outputPreviewExpanded);
    D.cameraPreview.width = c.width, D.cameraPreview.height = c.height, D.cameraPreview.expanded = !!m.outputPreviewExpanded;
    const l = ga(), h = pa(l), p = !!o && !!o.complete && Number(o.naturalWidth || o.width || 0) > 1 && Number(o.naturalHeight || o.height || 0) > 1, _ = p ? [
      String(o.currentSrc || o.src || ""),
      Number(o.naturalWidth || o.width || 0),
      Number(o.naturalHeight || o.height || 0)
    ].join("|") : "none", b = m.showObjects ? ma() : bi([]), x = Ti({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((U) => String((U == null ? void 0 : U.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((U) => `${String((U == null ? void 0 : U.assetId) || "")}:${String((U == null ? void 0 : U.revision) || "")}`).join(",") : "none",
        b.length ? b.map((U) => `${String((U == null ? void 0 : U.id) || "")}:${String((U == null ? void 0 : U.revision) || "")}:${Number((U == null ? void 0 : U.zIndex) || 0)}`).join(",") : "paint:none",
        m.showPanorama ? "panorama:1" : "panorama:0",
        m.showObjects ? "objects:1" : "objects:0",
        m.showMask ? "showMask:1" : "showMask:0",
        Rt(d.coverage)
      ].join("|"),
      backgroundSource: p && m.showPanorama ? o : null,
      backgroundRevision: p ? `cutout_preview:${_}` : "",
      coverageDeg: Rt(d.coverage),
      scene: l,
      textures: h,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(p || h.length > 0 || b.length > 0)) {
      D.cameraPreview.ready = !1, D.cameraPreview.label = "Connect ERP image", D.cameraPreview.settled = !1, ue.clearScene(), Je.requestRender();
      return;
    }
    if (m.showPanorama && !p && h.length === 0 && b.length === 0) {
      D.cameraPreview.ready = !1, D.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", D.cameraPreview.settled = !1, ue.clearScene(), Je.requestRender();
      return;
    }
    ue.syncScene(x), Je.setView(ur(i));
    const P = gg(c), N = P ? Je.present() : !1;
    P || Je.requestRender(), D.cameraPreview.ready = !0, D.cameraPreview.label = P && N ? "" : "Loading preview", D.cameraPreview.settled = P && N && I.pendingStableLayoutFrames <= 0 && I.hasPresentedFrame;
  }
  function bg(i, o, c, l = {}) {
    if (!ue || !c) return !1;
    const h = zr(), p = ga(), _ = pa(p), b = !!h && !!h.complete && Number(h.naturalWidth || h.width || 0) > 1 && Number(h.naturalHeight || h.height || 0) > 1, x = m.showObjects ? ma() : bi([]);
    return b || _.length > 0 || x.length > 0 ? (ue.syncScene(Ti({
      stateRevision: mg(c, l),
      backgroundSource: b && m.showPanorama ? h : null,
      backgroundRevision: b ? String(h.currentSrc || h.src || "") : "",
      coverageDeg: Rt(d.coverage),
      scene: p,
      textures: _,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), ue.renderShotToContext(i, o, c, l)) : !1;
  }
  function ls(i, o) {
    if (!i || !o) return null;
    const c = Number(o.x || 0), l = Number(o.y || 0);
    return ml(i, c, l);
  }
  function $r(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Ln(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function vg(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function _g(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Ft(i, "widthScale", 1),
      pressureLike: Ft(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function xg(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function us(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (l) {
      let z = null;
      i.forEach((U) => {
        const J = Number((U == null ? void 0 : U.u) || 0), ge = Number((U == null ? void 0 : U.v) || 0), re = (J % 1 + 1) % 1, ye = z == null ? re : z + gn(re, (z % 1 + 1) % 1);
        h.set(U, { x: ye, y: ge }), z = ye;
      });
    }
    const p = (z) => !z || typeof z != "object" ? { x: 0, y: 0 } : h.get(z) || vg(z), _ = (z, U, J, ge = {}) => {
      const re = l ? (Number(U) % 1 + 1) % 1 : Number(U), ye = _g(z, re, J, ge);
      return h.set(ye, { x: Number(U), y: Number(J) }), ye;
    }, b = (z, U, J) => {
      const ge = p(z), re = p(U);
      return _(z, Gn(ge.x, re.x, J), Gn(ge.y, re.y, J), {
        t: Gn(Number((z == null ? void 0 : z.t) || 0), Number((U == null ? void 0 : U.t) || 0), J),
        widthScale: Gn(Ft(z, "widthScale", 1), Ft(U, "widthScale", 1), J),
        pressureLike: Gn(Ft(z, "pressureLike", 1), Ft(U, "pressureLike", 1), J)
      });
    };
    if (i.length === 1) {
      const z = p(i[0]);
      return [_(i[0], z.x, z.y)];
    }
    const x = xg(o, c), S = (z, U) => {
      const J = [0];
      for (let ee = 1; ee < z.length; ee += 1) {
        const _e = p(z[ee - 1]), Ne = p(z[ee]);
        J.push(J[ee - 1] + Math.hypot(Ne.x - _e.x, Ne.y - _e.y));
      }
      const ge = J[J.length - 1] || 0;
      if (ge <= 1e-8) {
        const ee = z[0], _e = p(ee);
        return [_(ee, _e.x, _e.y)];
      }
      const re = [];
      let ye = 0;
      for (let ee = 0; ee <= ge + 1e-9; ee += U) {
        for (; ye < J.length - 2 && J[ye + 1] < ee; ) ye += 1;
        const _e = J[ye], Ne = J[ye + 1], je = Math.max(1e-8, Ne - _e);
        re.push(b(z[ye], z[ye + 1], G((ee - _e) / je, 0, 1)));
      }
      const Pe = z[z.length - 1], Fe = p(Pe), Se = re[re.length - 1], K = Se ? p(Se) : null;
      return (!K || Math.hypot(K.x - Fe.x, K.y - Fe.y) > U * 0.35) && re.push(_(Pe, Fe.x, Fe.y)), re;
    }, P = (z) => {
      if (!Array.isArray(z) || z.length < 3) return z ? z.slice() : [];
      const U = p(z[0]), J = [_(z[0], U.x, U.y)];
      for (let ye = 0; ye < z.length - 1; ye += 1) {
        const Pe = z[ye], Fe = z[ye + 1], Se = p(Pe), K = p(Fe), ee = _(
          Pe,
          Se.x * 0.75 + K.x * 0.25,
          Se.y * 0.75 + K.y * 0.25,
          {
            t: Number(Pe.t || 0) * 0.75 + Number(Fe.t || 0) * 0.25,
            widthScale: Ft(Pe, "widthScale", 1) * 0.75 + Ft(Fe, "widthScale", 1) * 0.25,
            pressureLike: Ft(Pe, "pressureLike", 1) * 0.75 + Ft(Fe, "pressureLike", 1) * 0.25
          }
        ), _e = _(
          Pe,
          Se.x * 0.25 + K.x * 0.75,
          Se.y * 0.25 + K.y * 0.75,
          {
            t: Number(Pe.t || 0) * 0.25 + Number(Fe.t || 0) * 0.75,
            widthScale: Ft(Pe, "widthScale", 1) * 0.25 + Ft(Fe, "widthScale", 1) * 0.75,
            pressureLike: Ft(Pe, "pressureLike", 1) * 0.25 + Ft(Fe, "pressureLike", 1) * 0.75
          }
        );
        J.push(ee, _e);
      }
      const ge = z[z.length - 1], re = p(ge);
      return J.push(_(ge, re.x, re.y)), J;
    }, N = S(i, x);
    if (N.length < 3) return N;
    const R = c ? 2 : 1;
    let F = N.slice();
    for (let z = 0; z < R; z += 1) F = P(F);
    return S(F, Math.max(x * 0.75, 55e-5));
  }
  function Ft(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function wg(i) {
    const o = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const c = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return c === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: c,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function vi(i, o, c = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(i)), l.height = Math.max(1, Math.round(o));
    const h = l.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, l.width, l.height), h.imageSmoothingEnabled = !0), { canvas: l, ctx: h };
  }
  function _i() {
    const i = xa();
    return `${String(m.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Br() {
    const i = xa();
    return `${String(m.paintStrokeRevision)}:${String(m.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function fs() {
    const i = sa(), o = Br();
    return i ? `${o}:${i}` : o;
  }
  function Sg() {
    m.paintStrokeRevision += 1, m.paintCompositeRevision += 1;
  }
  function Ng() {
    m.paintCompositeRevision += 1;
  }
  function Mg() {
    m._sortedItemsCache = null, m._strokeGeomCache.clear();
  }
  function Sl() {
    var i, o;
    m.paintEngineRevisionKey = null, (o = (i = m.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, d), m.paintEngineRevisionKey = _i();
  }
  function Dt() {
    m.objectVisualRevision = Number(m.objectVisualRevision || 0) + 1, Mg(), I.backgroundDirty = !0, I.dirty = !0;
  }
  function _n({ rebuildPaintEngine: i = !1 } = {}) {
    Sg(), Dt(), i && Sl();
  }
  function Ur() {
    Ng(), Dt();
  }
  function _a() {
    var l;
    const i = xa(), o = `${i.width}x${i.height}`;
    m.paintEngineDescriptorKey !== o && (m.paintEngine = cc(i), m.paintEngineDescriptorKey = o, m.paintEngineRevisionKey = "");
    const c = _i();
    m.paintEngineRevisionKey !== c && (m.paintEngineRevisionKey = c, (l = m.paintEngine) == null || l.rebuildCommitted(d));
  }
  function xa() {
    const i = Math.max(1, Number((d == null ? void 0 : d.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function jn() {
    return xa();
  }
  function kg(i, o, c, l, h = null) {
    const p = wg(i), _ = Ft(o, "widthScale", 1) * Ft(o, "pressureLike", 1);
    return p.model === "erp_uv_norm" ? Math.max(0.5, p.value * c * _) : p.model === "world_angle" ? h ? Math.max(0.5, p.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Pt) * c * _) : Math.max(0.5, p.value / (2 * Math.PI) * c * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function Pg(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), p = c.preview === !0, _ = p ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * _ : 1, l === "mask") {
      i.fillStyle = p ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = p ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${x})`;
  }
  function Cg(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function Ag(i, o, c, l, h = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const p = Math.max(l.w, l.h) * 0.25;
    i.save(), Pg(i, c, h);
    const _ = (b) => Cg(i, b, p);
    if (o.length === 1) {
      _(o[0]), i.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const x = o[b], S = o[b + 1];
      if (!x || !S) continue;
      const P = Number(x.x || 0), N = Number(x.y || 0), R = Number(S.x || 0), F = Number(S.y || 0), X = Math.max(0.5, Math.min(p, Number(x.radiusPx || 0.5))), z = Math.max(0.5, Math.min(p, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(N) || !Number.isFinite(R) || !Number.isFinite(F) || !Number.isFinite(X) || !Number.isFinite(z)) continue;
      const U = R - P, J = F - N, ge = Math.hypot(U, J);
      if (!Number.isFinite(ge) || ge < 1e-6) {
        _(x);
        continue;
      }
      if (ge > Math.max(l.w, l.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(X, z)), ye = Math.max(0.35, Math.min(re * 0.4, 2.25)), Pe = Math.max(1, Math.ceil(ge / ye));
      for (let Fe = 0; Fe <= Pe; Fe += 1) {
        const Se = Fe / Pe;
        _({
          x: Gn(P, R, Se),
          y: Gn(N, F, Se),
          radiusPx: Gn(X, z, Se)
        });
      }
    }
    _(o[o.length - 1]), i.restore();
  }
  function Ig(i, o, c, l) {
    Ag(i, o, c, l, { preview: !1 });
  }
  function Dg(i, o, c, l, h) {
    var b, x, S, P;
    if (!i || !Array.isArray(o) || o.length < 3) return;
    const p = "u", _ = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = o[0]) == null ? void 0 : b[p]) || 0) * l.w, Number(((x = o[0]) == null ? void 0 : x[_]) || 0) * l.h);
    for (let N = 1; N < o.length; N += 1)
      i.lineTo(Number(((S = o[N]) == null ? void 0 : S[p]) || 0) * l.w, Number(((P = o[N]) == null ? void 0 : P[_]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Nl(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function Eg(i, o) {
    const c = Nl(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: kg(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function Ml(i, o, c = null) {
    var b, x, S, P;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((x = i.canvas) == null ? void 0 : x.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((P = o == null ? void 0 : o.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return Dg(i.ctx, Nl(h), h, l), !0;
    const _ = Eg(h, l);
    return _.length ? (Ig(i.ctx, _, h, l), !0) : !1;
  }
  function Tg(i, o, c, l = 8) {
    const h = new Uint8Array(o * c), p = [], _ = new Int32Array(o * c), b = new Int32Array(o * c);
    for (let x = 0; x < c; x += 1)
      for (let S = 0; S < o; S += 1) {
        const P = x * o + S;
        if (h[P] || i[P] <= l) continue;
        let N = 0, R = 0;
        _[R] = S, b[R] = x, R += 1, h[P] = 1;
        const F = [];
        let X = S, z = x, U = S, J = x;
        for (; N < R; ) {
          const ge = _[N], re = b[N];
          N += 1, F.push({ x: ge, y: re }), ge < X && (X = ge), re < z && (z = re), ge > U && (U = ge), re > J && (J = re);
          const ye = [
            [(ge - 1 + o) % o, re],
            [(ge + 1) % o, re],
            [ge, re - 1],
            [ge, re + 1]
          ];
          for (const [Pe, Fe] of ye) {
            if (Fe < 0 || Fe >= c) continue;
            const Se = Fe * o + Pe;
            h[Se] || i[Se] <= l || (h[Se] = 1, _[R] = Pe, b[R] = Fe, R += 1);
          }
        }
        p.push({ pixels: F, minX: X, minY: z, maxX: U, maxY: J });
      }
    return p;
  }
  function Rg(i, o) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, S) => x - S);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let l = -1, h = 0;
    for (let x = 0; x < c.length; x += 1) {
      const S = c[x], N = (x === c.length - 1 ? c[0] + o : c[x + 1]) - S - 1;
      N > l && (l = N, h = x);
    }
    const p = (c[(h + 1) % c.length] + o) % o;
    let _ = 1 / 0, b = -1 / 0;
    for (const x of c) {
      const S = (x - p + o) % o;
      _ = Math.min(_, S), b = Math.max(b, S);
    }
    return {
      startX: p,
      widthPx: Math.max(1, b - _ + 1)
    };
  }
  function Lg(i, o, c = {}) {
    var S;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), p = (S = i == null ? void 0 : i.getContext) == null ? void 0 : S.call(i, "2d");
    if (!p || l < 1 || h < 1) return [];
    const _ = p.getImageData(0, 0, l, h), b = new Uint8Array(l * h);
    for (let P = 0; P < b.length; P += 1) b[P] = _.data[P * 4 + 3];
    return Tg(b, l, h, 8).map((P, N) => {
      const R = Rg(P, l);
      if (!R) return null;
      const F = Number(R.widthPx || 0), X = P.maxY - P.minY + 1, z = Number(R.startX || 0), U = document.createElement("canvas");
      U.width = F, U.height = X;
      const J = U.getContext("2d");
      if (!J) return null;
      const ge = J.createImageData(F, X);
      return P.pixels.forEach(({ x: re, y: ye }) => {
        const Pe = (ye * l + re) * 4, Fe = (Number(re || 0) - z + l) % l, Se = ((ye - P.minY) * F + Fe) * 4;
        ge.data[Se + 0] = _.data[Pe + 0], ge.data[Se + 1] = _.data[Pe + 1], ge.data[Se + 2] = _.data[Pe + 2], ge.data[Se + 3] = _.data[Pe + 3];
      }), J.putImageData(ge, 0, 0), {
        id: Jr("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + N * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / h,
          u1: F / l,
          v1: (P.maxY + 1) / h
        },
        rasterDataUrl: U.toDataURL("image/png"),
        transform: {
          du: z / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function xi(i, o) {
    if (!i || !o) return null;
    const c = ha(i), l = Sn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = Sn(o, c.right) / l, p = Sn(o, c.up) / l, _ = h * c.cr + p * c.sr, b = -h * c.sr + p * c.cr;
    return {
      x: (_ / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function Og(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (m.mode === "unwrap") {
      const c = rr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => mi($r(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function kl(i, o = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (m.mode === "unwrap") {
      const l = rr();
      return i.map((h) => {
        const p = (Number(h.u || 0) % 1 + 1) % 1, _ = o == null ? p : Number(o || 0) + gn(p, o);
        return {
          x: l.x + _ * l.w,
          y: l.y + Number(h.v || 0) * l.h
        };
      });
    }
    const c = i.map((l) => mi($r(l))).filter(Boolean);
    return c.every((l) => Number(l.z || 0) > 0) ? c.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Fg(i, o = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const l = i[c], h = i[(c + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function Vg(i, o, c) {
    if (!Array.isArray(i) || i.length < 3 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const p = $r(h), _ = xi(o, p);
      if (!_) return [];
      l.push({
        x: Number(c.x || 0) + Number(_.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(_.y || 0) * Number(c.h || 0)
      });
    }
    return Fg(l, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? l : [];
  }
  function Hg(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const p = $r(h), _ = xi(o, p);
      _ && l.push({
        x: Number(c.x || 0) + Number(_.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(_.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function zg() {
    var h;
    const i = Ge(), o = Vt(i);
    if (!i || !o) return !1;
    k.save(), k.fillStyle = "#050505", k.fillRect(0, 0, A.width, A.height), k.shadowColor = "rgba(0, 0, 0, 0.45)", k.shadowBlur = 24, k.shadowOffsetX = 0, k.shadowOffsetY = 10, k.fillStyle = "rgba(14, 14, 14, 1)", k.fillRect(o.x, o.y, o.w, o.h), k.restore(), k.save(), k.beginPath(), k.rect(o.x, o.y, o.w, o.h), k.clip();
    const c = m.interaction ? "draft" : String(((h = d.ui_settings) == null ? void 0 : h.preview_quality) || "balanced");
    return bg(k, o, i, { quality: c }) === !0 || (k.fillStyle = "rgba(255, 255, 255, 0.03)", k.fillRect(o.x, o.y, o.w, o.h)), k.restore(), k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.12)", k.lineWidth = 1, k.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), k.restore(), !0;
  }
  function jg() {
    var x, S;
    if (((x = m.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const i = m.interaction.stroke, o = (S = i == null ? void 0 : i.geometry) == null ? void 0 : S.points;
    let c;
    if (m.mode === "frame") {
      const P = Ge(), N = Vt(P);
      c = Vg(o, P, N);
    } else
      c = Og(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, p = Math.round(Number(h.r || 0) * 255), _ = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    k.save(), k.beginPath(), k.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let P = 1; P < c.length; P++) k.lineTo(Number(c[P].x || 0), Number(c[P].y || 0));
    k.closePath(), l ? (k.lineWidth = 2, k.setLineDash([6, 6]), k.lineDashOffset = 0, k.strokeStyle = "rgba(0,0,0,0.96)", k.stroke(), k.lineDashOffset = -6, k.strokeStyle = "rgba(255,255,255,0.96)", k.stroke(), k.setLineDash([]), k.lineDashOffset = 0) : (k.lineWidth = 1.5, k.setLineDash([6, 4]), k.strokeStyle = `rgba(${p},${_},${b},1)`, k.stroke(), k.setLineDash([])), k.restore();
  }
  function $g() {
    m.mode === "frame" ? zg() : m.mode === "unwrap" ? tg(!1) : ng(!1), t === "cutout" && yg(), dg(), jg(), D.fovValue = `${Math.round(m.viewFov)}°`, Math.abs(Number(m.outputPreviewAnim || 0) - Number(m.outputPreviewAnimTo || 0)) < 1e-6 && Be(), I.hasPresentedFrame || (I.hasPresentedFrame = !0, B.style.opacity = "1"), t === "cutout" && D.cameraPreview && (D.cameraPreview.settled = I.pendingStableLayoutFrames <= 0 && I.hasPresentedFrame && m.mode !== "frame");
    const i = Wh();
    i ? (te == null || te.removeAttribute("data-stage-ready"), te == null || te.setAttribute("data-stage-loading-kind", i)) : (te == null || te.setAttribute("data-stage-ready", ""), te == null || te.removeAttribute("data-stage-loading-kind"));
  }
  function Bg(i = m.interaction) {
    if (t !== "stickers" || m.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Ug() {
    e.__panoLiveStateOverride = d, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = hh();
  }
  function ve(i = {}) {
    var b, x, S, P, N, R, F, X, z, U;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), h = String(((b = m.interaction) == null ? void 0 : b.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Bg() || !!((x = m.viewTween) != null && x.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (I.backgroundDirty = !0), o && Xc() && (m.livePaintInteractionRevision += 1, I.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (Qo(), fa()), Ug(), c && ((P = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || P.call(S), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), c && !o && ((F = (R = e.graph) == null ? void 0 : R.setDirtyCanvas) == null || F.call(R, !0, !0), (U = (z = (X = un) == null ? void 0 : X.canvas) == null ? void 0 : z.setDirty) == null || U.call(z, !0, !0)), I.dirty = !0;
  }
  function Pl() {
    const i = A.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return A.width !== o || A.height !== c || B.width !== o || B.height !== c ? (A.width = o, A.height = c, B.width = o, B.height = c, I.backgroundDirty = !0, I.dirty = !0, t === "cutout" && (I.pendingStableLayoutFrames = Math.max(Number(I.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function ds(i = performance.now()) {
    var o;
    if (I.running) {
      if (I.lastTickTs = i, m.outputPreviewAnim !== m.outputPreviewAnimTo) {
        const c = Math.max(1, Number(m.outputPreviewAnimDurationMs)), l = G((i - Number(m.outputPreviewAnimStartTs || 0)) / c, 0, 1), p = m.outputPreviewAnimTo > m.outputPreviewAnimFrom ? h_(l) : g_(l);
        m.outputPreviewAnim = Gn(m.outputPreviewAnimFrom, m.outputPreviewAnimTo, p), I.dirty = !0, l >= 1 && (m.outputPreviewAnim = m.outputPreviewAnimTo);
      }
      if ((o = m.viewTween) != null && o.active) {
        const c = m.viewTween, l = G((i - c.startTs) / c.durationMs, 0, 1), h = d_(l);
        m.viewYaw = Lt(c.startYaw + c.deltaYaw * h), m.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * h, m.viewFov = c.startFov + (c.targetFov - c.startFov) * h, I.backgroundDirty = !0, I.dirty = !0, l >= 1 && (m.viewTween = null);
      }
      if (m.viewInertia.vx = Number(Et.state.inertia.vx || 0), m.viewInertia.vy = Number(Et.state.inertia.vy || 0), m.viewInertia.active = !!Et.state.inertia.active, Et.stepInertia(i) && (m.viewInertia.vx = Number(Et.state.inertia.vx || 0), m.viewInertia.vy = Number(Et.state.inertia.vy || 0), m.viewInertia.active = !!Et.state.inertia.active, I.backgroundDirty = !0, I.dirty = !0), (I.dirty || i - I.lastSizeCheckTs >= 220) && (Pl(), I.lastSizeCheckTs = i), I.pendingStableLayoutFrames > 0 && (I.pendingStableLayoutFrames -= 1, I.dirty = !0), I.dirty) {
        if (I.pendingStableLayoutFrames > 0) {
          I.rafId = requestAnimationFrame(ds);
          return;
        }
        I.dirty = !1, $g();
      }
      I.rafId = requestAnimationFrame(ds);
    }
  }
  function Gg() {
    I.running = !1, I.rafId && cancelAnimationFrame(I.rafId), I.rafId = 0;
  }
  function ct() {
    r || (m.historyController.commitActionGroup(JSON.stringify(bf(d))), bs());
  }
  function hs(i) {
    if (r) return;
    const o = i < 0 ? m.historyController.undo() : m.historyController.redo();
    if (bs(), !o) return;
    const c = JSON.parse(o);
    Object.keys(d).forEach((l) => delete d[l]), Object.assign(d, c), m.selectedId = t === "stickers" || t === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, m.selectedIds = m.selectedId ? [m.selectedId] : [], _n(), tn(), ze(), pn(), ve({ cause: "cutout_frame" });
  }
  function Cl() {
    var c, l;
    const i = Array.isArray((c = m.historyController) == null ? void 0 : c.entries) ? m.historyController.entries : [], o = Number((l = m.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function tn() {
    ne();
    const i = hb({
      editor: m,
      swatches: co,
      paintColorPopOpen: $ ? !$.hidden : !1,
      colorToCss: An,
      colorsApproximatelyEqual: lo,
      rgb01ToHsv: Ws,
      hsv01ToRgb: Ks,
      getBrushPresetIdForTool: ar,
      isActiveLassoTool: Sh
    });
    if (Object.assign(D.paintDock, i), !i.visible) {
      $ && ($.hidden = !0);
      return;
    }
    dt && (clearTimeout(dt), dt = 0), pe && (!i.colorEnabled && $ && !$.hidden && (dt = window.setTimeout(() => {
      $.hidden = !0, D.paintDock.colorPopOpen = !1, dt = 0;
    }, 170)), $ && ($.style.setProperty("--picker-hue-color", i.pickerHueColor), $.style.setProperty("--picker-sat", i.pickerSat), $.style.setProperty("--picker-val", i.pickerVal), $.style.setProperty("--picker-hue", i.pickerHue)), De && (De.style.left = i.pickerSvLeft, De.style.top = i.pickerSvTop), $e && ($e.style.left = i.pickerHueLeft));
  }
  function gs() {
    const i = ot();
    i && (m.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Ii(i)
    }, ze());
  }
  function ze() {
    var ye, Pe, Fe, Se;
    if (a) return;
    d.ui_settings = d.ui_settings || {};
    const i = db(d.ui_settings);
    if (s) {
      D.sidePanel = gb({
        coverage: d.coverage,
        uiSettings: i,
        normalizeCoverageValue: Rt
      });
      return;
    }
    const o = ot(), c = vn(), l = ua();
    c.length > 1 && (m.panelLastValues = m.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && l !== "stroke" && (m.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (l === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (l === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: Ii(o)
    });
    const h = m.panelLastValues || (t === "stickers" || l === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = l === "stroke" ? null : o, _ = p || h, b = !!p;
    m.panelWasEnabled = b, Qo();
    let x = null;
    if (t === "stickers" || t === "cutout") {
      const K = [{ id: "", labelHtml: Ys(t === "stickers" ? "No image" : "Nothing selected"), item: null }];
      t === "stickers" ? ce().forEach((Ne, je) => {
        var We, Ke;
        const Ve = At(Ne) ? String(Ne.id || xr) : String(((Ke = (We = d.assets) == null ? void 0 : We[Ne.asset_id]) == null ? void 0 : Ke.name) || Ne.asset_id || Ne.id), Ue = `${je + 1}. ${Ve}${At(Ne) && Vr(Ne) ? " (hidden)" : ""}`;
        K.push({ id: Ne.id, labelHtml: tl({ item: Ne, label: Ue, kind: "image" }), item: Ne, kind: "image" });
      }) : el().forEach((Ne) => {
        K.push({ id: Ne.item.id, labelHtml: tl(Ne), item: Ne.item, kind: Ne.kind });
      });
      const ee = (p == null ? void 0 : p.id) || "", _e = K.find((Ne) => Ne.id === ee) || K[0];
      x = {
        label: "Selection",
        open: !1,
        disabled: K.length <= 1,
        currentLabelHtml: _e.labelHtml,
        items: K.map((Ne) => ({ id: Ne.id, labelHtml: Ne.labelHtml, active: Ne.id === ee }))
      };
    }
    const S = [], P = (K, ee, _e, Ne, je) => {
      const Ve = G(Number(_[K] || 0), _e, Ne);
      S.push({
        key: K,
        label: ee,
        min: _e,
        max: Ne,
        step: je,
        value: Ve,
        displayValue: b_(Ve),
        fillPct: G((Ve - _e) / Math.max(1e-6, Ne - _e) * 100, 0, 100),
        enabled: b && !r
      });
    }, N = [];
    c.length > 1 ? (N.push(`Selected objects: ${c.length}`), N.push("Multi-selection supports z-order and delete.")) : (P("yaw_deg", "Yaw", -180, 180, 0.1), P("pitch_deg", "Pitch", -90, 90, 0.1), P("hFOV_deg", "H FOV", 1, 179, 0.1), P("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || l === "image" ? P("rot_deg", "Rotation", -180, 180, 0.1) : P("roll_deg", "Roll", -180, 180, 0.1));
    const R = Array.isArray((Pe = (ye = d == null ? void 0 : d.painting) == null ? void 0 : ye.paint) == null ? void 0 : Pe.strokes) ? d.painting.paint.strokes.length : 0, F = Array.isArray((Se = (Fe = d == null ? void 0 : d.painting) == null ? void 0 : Fe.mask) == null ? void 0 : Se.strokes) ? d.painting.mask.strokes.length : 0, X = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((K) => String((K == null ? void 0 : K.name) || "")) : [], z = uh(
      e,
      X.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), U = !!String((z == null ? void 0 : z.src) || "").trim() || rl("pano_input_images").length > 0, J = Array.isArray(ce()) && ce().length > 0 || R > 0, ge = F > 0, re = [
      { key: "mask", label: "Mask", icon: Tt.circle_dashed_tool, visible: !!m.showMask, enabled: ge },
      { key: "objects", label: "Paint / Images", icon: Tt.image, visible: !!m.showObjects, enabled: J },
      { key: "panorama", label: "Panorama", icon: Tt.globe, visible: !!m.showPanorama, enabled: U }
    ].map((K) => ({
      ...K,
      ariaLabel: `Toggle ${K.label.toLowerCase()}`,
      tip: K.visible ? "Hide" : "Show"
    }));
    D.sidePanel = pb({
      coverage: d.coverage,
      readOnly: r,
      selectionPicker: x,
      enabled: b,
      selectedKind: l,
      selectedItems: c,
      params: S,
      notes: N,
      visibilityRows: re,
      uiSettings: i,
      normalizeCoverageValue: Rt
    });
  }
  function wa(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function Al(i) {
    if (r || t !== "stickers" && t !== "cutout" || !wa(i)) return;
    const o = Za("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((_, b) => {
        const x = new Image();
        x.onload = () => _(x), x.onerror = () => b(new Error("image load failed")), x.src = c;
      });
      T.set(o, l);
      const h = Za("st");
      d.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: m.viewYaw,
        pitch_deg: m.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: pr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: nl()
      }), gr(d.stickers[d.stickers.length - 1]), ps(), ct(), ze(), Be(), ve();
      const p = (async () => {
        const _ = await ns(i, String(i.name || o));
        (Array.isArray(d.stickers) ? d.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (d.assets[o] = _, jr(), mt(), ze(), Be(), ve());
      })();
      Ba.set(o, p);
      try {
        await p;
      } finally {
        Ba.delete(o);
      }
    } catch {
      delete d.assets[o], T.delete(o);
      const l = Array.isArray(d.stickers) ? d.stickers : [], h = l.filter((p) => String((p == null ? void 0 : p.asset_id) || "") === o);
      h.length && (d.stickers = l.filter((p) => String((p == null ? void 0 : p.asset_id) || "") !== o), h.some((p) => {
        var _;
        return String((p == null ? void 0 : p.id) || "") === String(((_ = m.selection) == null ? void 0 : _.id) || "");
      }) && gr(null), ze(), Be(), ve());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function Il(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function Kg() {
    r || t !== "stickers" && t !== "cutout" || Il((i) => {
      Al(i);
    });
  }
  async function Wg(i) {
    var S;
    if (r || t !== "stickers" && t !== "cutout") return;
    const o = ot();
    if (!o || !pt(o) || At(o) || !wa(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), h = l ? Ht(((S = d.assets) == null ? void 0 : S[l]) || null) : null, p = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = Za("asset"), x = URL.createObjectURL(i);
    try {
      const P = await new Promise((R, F) => {
        const X = new Image();
        X.onload = () => R(X), X.onerror = () => F(new Error("image load failed")), X.src = x;
      });
      T.set(b, P), o.asset_id = b, o.vFOV_deg = pr(
        Number(o.hFOV_deg || 30),
        Number(P.naturalWidth || P.width || 1),
        Number(P.naturalHeight || P.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Dt(), ct(), ze(), Be(), ve();
      const N = (async () => {
        const R = await ns(i, String(i.name || b));
        (Array.isArray(d.stickers) ? d.stickers : []).some((z) => String((z == null ? void 0 : z.id) || "") === c && String((z == null ? void 0 : z.asset_id) || "") === b) && (d.assets[b] = R, jr(), mt(), ze(), Be(), ve());
      })();
      Ba.set(b, N);
      try {
        await N;
      } finally {
        Ba.delete(b);
      }
    } catch {
      delete d.assets[b], T.delete(b);
      const P = (Array.isArray(d.stickers) ? d.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === c) || null;
      P && String(P.asset_id || "") === b && (l && h && (d.assets[l] = h), P.asset_id = l, P.vFOV_deg = p, P.crop = _ ? { ..._ } : null), Dt(), ze(), Be(), ve();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function Yg() {
    if (r) return;
    const i = ot();
    !i || !pt(i) || At(i) || Il((o) => {
      Wg(o);
    });
  }
  async function qg() {
    if (r || t !== "stickers") return;
    const i = d.assets && typeof d.assets == "object" ? d.assets : {}, o = Object.entries(i).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), p = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && p.startsWith("data:image");
    });
    if (!o.length) return;
    let c = !1;
    for (const [l, h] of o)
      try {
        const p = String((h == null ? void 0 : h.value) || "");
        if (!p) continue;
        const _ = await fetch(p).then((N) => N.blob()), b = String(_.type || "image/png").split("/")[1] || "png", x = String((h == null ? void 0 : h.name) || `${l}.${b}`), S = new File([_], x, { type: _.type || "image/png" }), P = await ns(S, x);
        d.assets[l] = {
          ...P,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (mt(), ve());
  }
  function Xg() {
    if (r || t !== "cutout") return;
    const i = Ge();
    if (i) {
      gr(i), m.mode = "pano", me(
        Lt(Number(i.yaw_deg || 0)),
        G(Number(i.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), ze(), Be(), ve({ cause: "cutout_frame" });
      return;
    }
    const o = Math.max(0.1, Number((A == null ? void 0 : A.width) || 1) / Math.max(1, Number((A == null ? void 0 : A.height) || 1))), c = G(Number(m.viewFov || 90), 1, 179), l = G(Math.min(42, c * 0.42), 8, 96), h = G(lr * (2 * Math.atan(Math.tan(l * Pt * 0.5) / Math.max(0.1, o))), 6, 72), p = rh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Lt(Number(m.viewYaw || 0)),
      pitch_deg: G(Number(m.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: l,
      vFOV_deg: h,
      locked: !1
    });
    d.shots = [p], gr(p), ps(), m.mode = "pano", ct(), mt(), ze(), Be(), ve({ cause: "cutout_frame" });
  }
  function Zg() {
    r || t === "cutout" && (d.shots = [], m.selectedId = null, m.selectedIds = [], m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, d.active.selected_shot_id = null, ct(), mt(), ze(), ve());
  }
  function Jg() {
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = [];
    for (const c of i)
      At(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function Dl(i, o, c = "Clear") {
    return new Promise((l) => {
      D.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(o || ""),
        confirmLabel: String(c || "Confirm"),
        resolve: l
      };
    });
  }
  async function Qg() {
    var c, l;
    if (r || !await Dl(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    d.painting = Ki(null), _n();
    const o = Jg();
    t === "stickers" ? (d.stickers = o, d.assets = {}, m.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], d.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, jr()) : (d.stickers = o, d.assets = {}, d.shots = [], m.selectedId = null, m.selectedIds = [], d.active.selected_sticker_id = null, d.active.selected_shot_id = null, m.mode === "frame" && (m.mode = "pano"), m.cutoutAspectOpen = !1, jr()), ct(), mt(), ze(), Be(), ve();
  }
  async function ep(i) {
    var p, _, b, x;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = Kr(o);
    if (!(!l.length && !(((p = m.interaction) == null ? void 0 : p.kind) === "draw" && ((_ = m.interaction) == null ? void 0 : _.layerKind) === o) || !await Dl(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((b = m.interaction) == null ? void 0 : b.kind) === "draw" && ((x = m.interaction) == null ? void 0 : x.layerKind) === o) {
        const S = jn();
        S && m.paintEngine.cancelActiveStroke(S), m.interaction = null;
      }
      l.length = 0, d.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (de().length = 0), _n(), ct(), mt(), ze(), Be(), tn(), ve();
    }
  }
  function tp() {
    if (r) return;
    const i = ot();
    if (!i || !pt(i) || At(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = Za("st"), o.yaw_deg = Lt((o.yaw_deg || 0) + 8), o.z_index = nl(), d.stickers.push(o), d.active.selected_sticker_id = o.id, m.selectedId = o.id, m.selectedIds = [o.id], Dt(), ct(), mt(), Be(), ze(), ve();
  }
  function El() {
    var c, l, h, p, _, b;
    if (r) return;
    const i = vn(), o = ot();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const x = new Set(i.filter((N) => Mt(N)).map((N) => String(N.actionGroupId || N.id || ""))), S = new Set(i.filter((N) => Ot(N)).map((N) => Oe(N.rasterObjectId || N.id || ""))), P = new Set(i.filter(pt).map((N) => String(N.id || "")));
        x.size > 0 && (d.painting.paint.strokes = (Array.isArray((l = (c = d.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? d.painting.paint.strokes : []).filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || ""))), d.painting.groups = de().filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), _n()), S.size > 0 && (d.painting.raster_objects = en().filter((N) => !S.has(String((N == null ? void 0 : N.id) || ""))), Ur()), P.size > 0 && (d.stickers = (Array.isArray(d.stickers) ? d.stickers : []).filter((N) => P.has(String((N == null ? void 0 : N.id) || "")) ? At(N) ? (Vr(N) || (N.visible = !1), !0) : !1 : !0), jr(), Dt()), m.selectedId = null, m.selectedIds = [], ct(), mt(), ze(), Be(), ve();
        return;
      }
      if (Mt(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        d.painting.paint.strokes = (Array.isArray((p = (h = d.painting) == null ? void 0 : h.paint) == null ? void 0 : p.strokes) ? d.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== x), d.painting.groups = de().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== x), _n(), m.selectedId = null, m.selectedIds = [], ct(), mt(), ze(), Be(), ve();
        return;
      }
      if (Ot(o)) {
        const x = Oe(o.rasterObjectId || o.id || "");
        d.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== x), Ur(), m.selectedId = null, m.selectedIds = [], ct(), mt(), ze(), Be(), ve();
        return;
      }
      if (t === "stickers" || pt(o)) {
        if (At(o)) {
          if (Vr(o)) return;
          o.visible = !1, Dt(), ct(), mt(), ze(), Be(), ve();
          return;
        }
        d.stickers = d.stickers.filter((x) => x.id !== o.id), jr(), Dt(), m.selectedId = ((_ = d.stickers[0]) == null ? void 0 : _.id) || null, m.selectedIds = m.selectedId ? [m.selectedId] : [], d.active.selected_sticker_id = ((b = d.stickers[0]) == null ? void 0 : b.id) || null, ct(), mt(), ze(), Be(), ve();
        return;
      }
      Zg();
    }
  }
  function np(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const R = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(R)) {
        const [z, U] = R.split(":").map((J) => Number(J));
        if (Number.isFinite(z) && Number.isFinite(U)) return z >= U;
      }
      const F = Number(i.hFOV_deg || 64), X = Number(i.vFOV_deg || 40);
      return Math.abs(F - X) > 1e-6 ? F >= X : Li(i) >= 1;
    })();
    let [h, p] = c[String(o)] || c["1:1"];
    h >= p !== l && ([h, p] = [p, h]);
    const _ = h / p, b = G(Number(i.hFOV_deg || 64), 1, 179), x = G(Number(i.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * x)), P = G(S * Math.sqrt(_), 1, 179), N = G(S / Math.sqrt(_), 1, 179);
    i.hFOV_deg = P, i.vFOV_deg = N, i.aspect_id = String(o);
  }
  function rp(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = Nr(i);
  }
  function Tl() {
    Hn().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function ip() {
    if (r) return;
    const i = vn();
    if (!ot() || i.length === 0) return;
    Tl();
    const c = Hn(), l = new Set(i.map((b) => pt(b) ? `sticker:${String(b.id || "")}` : Ot(b) ? `rasterObject:${Oe(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], p = [];
    if (c.forEach((b) => {
      var S, P;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? h.push(b) : p.push(b);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...p, ...h].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Dt(), ct(), mt(), Be(), ve();
  }
  function ap() {
    if (r) return;
    const i = vn();
    if (!ot() || i.length === 0) return;
    Tl();
    const c = Hn(), l = new Set(i.map((b) => pt(b) ? `sticker:${String(b.id || "")}` : Ot(b) ? `rasterObject:${Oe(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], p = [];
    if (c.forEach((b) => {
      var S, P;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? h.push(b) : p.push(b);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...p].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Dt(), ct(), mt(), Be(), ve();
  }
  function op() {
    r || (d.projection_model = "pinhole_rectilinear", d.alpha_mode = "straight", f && (d.output_preset = vc(f.value, Number(d.output_preset || 2048))), g && (d.coverage = Rt(g.value)), y && (d.bg_color = String(y.value || d.bg_color || "#00ff00")), pn(), e.setDirtyCanvas(!0, !0));
  }
  function pn() {
    var o;
    if (r) return;
    d.coverage = Rt(d.coverage);
    const i = JSON.stringify(d);
    v && (v.value = i, (o = v.callback) == null || o.call(v, i));
  }
  function Sa() {
    d.ui_settings = S_(d.ui_settings), r || pn();
  }
  function mt() {
    var i;
    r || (pn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function sp() {
    r || Kh() && hl().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function cp(i = {}) {
    var l, h, p, _, b, x, S, P, N, R;
    const o = i.syncPreview !== !1, c = i.syncGraph !== !1;
    o && ((h = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || h.call(l), (_ = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || _.call(p), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), c && ((S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (R = (N = (P = un) == null ? void 0 : P.canvas) == null ? void 0 : N.setDirty) == null || R.call(N, !0, !0));
  }
  function ps() {
    m.primaryTool !== "cursor" && (m.primaryTool = "cursor", tn(), ze());
  }
  function Gr(i) {
    const o = A.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * A.width,
      y: (i.clientY - o.top) / o.height * A.height
    };
  }
  function Na(i) {
    const o = A.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function Rl() {
    return m.mode === "pano" || m.mode === "unwrap";
  }
  function Ge() {
    if (t !== "cutout") return null;
    const i = Array.isArray(d.shots) ? d.shots : [];
    if (!i.length) return null;
    const o = String(d.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === o) || i[0] || null;
  }
  function Vt(i = Ge()) {
    var _, b, x;
    if (!i || !A) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(A.width || 0) - 48),
      h: Math.max(1, Number(A.height || 0) - 48)
    }, c = G(Li(i), 0.1, 10);
    let l = o.w, h = Math.max(1, Math.round(l / c));
    h > o.h && (h = o.h, l = Math.max(1, Math.round(h * c)));
    const p = Math.max(0.1, Number(((_ = m.frameView) == null ? void 0 : _.zoom) || 1));
    return l *= p, h *= p, {
      x: Math.round(o.x + (o.w - l) * 0.5 + Number(((b = m.frameView) == null ? void 0 : b.panX) || 0)),
      y: Math.round(o.y + (o.h - h) * 0.5 + Number(((x = m.frameView) == null ? void 0 : x.panY) || 0)),
      w: Math.max(1, Math.round(l)),
      h: Math.max(1, Math.round(h))
    };
  }
  function ms() {
    return t === "cutout" && !!Ge();
  }
  function xn(i, o = performance.now()) {
    if (m.mode === "unwrap") {
      const p = rr(), _ = (i.x - p.x) / Math.max(1, p.w), b = (i.y - p.y) / Math.max(1, p.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: G(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = ts(i.x, i.y), { lon: l, lat: h } = as(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function wn(i, o, c = performance.now()) {
    const l = Vt(o);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, p = ls(o, h);
    if (!p) return null;
    const { lon: _, lat: b } = as(p);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - b / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function lp(i, o) {
    var S;
    const c = Ge(), l = Vt(c);
    if (!c || !l) return !1;
    const h = Math.max(0.1, Number(((S = m.frameView) == null ? void 0 : S.zoom) || 1)), p = G(h * Number(o), 0.25, 12);
    if (Math.abs(p - h) < 1e-6) return !1;
    const _ = (Number(i.x) - l.x) / Math.max(1e-6, l.w), b = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    m.frameView.zoom = p;
    const x = Vt(c);
    return x ? (m.frameView.panX += Number(i.x) - (x.x + x.w * _), m.frameView.panY += Number(i.y) - (x.y + x.h * b), !0) : !1;
  }
  function up(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function ar(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? Bn : nn[o] ? o : m.activeBrushPresetId || Bn;
  }
  function Ll() {
    return (m.primaryTool === "paint" || m.primaryTool === "mask") && (Rl() || ms());
  }
  function Ol() {
    var i;
    return Ll() && ((i = m.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ma(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = o !== !1, p = m.pointerPos || { x: 0, y: 0, inside: !1 }, _ = p.inside !== h || Math.abs(p.x - c) > 0.01 || Math.abs(p.y - l) > 0.01;
    return m.pointerPos = { x: c, y: l, inside: h }, _;
  }
  function fp() {
    var P, N;
    if (!Ol()) return null;
    const i = m.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? m.maskTool : m.paintTool, c = ar(o), l = nn[c] || nn[Bn], h = Number(m.brushSizes[c] ?? 10), p = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, p * 0.5), b = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : ln(m.paintColor), x = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : G(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : G(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: _,
      fillStyle: An(b, x),
      strokeStyle: An(b, S),
      x: Number(((P = m.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((N = m.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function dp() {
    var R, F, X;
    const i = fp();
    if (!ae) return;
    if (!i) {
      ae.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", h = 0, p = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let P = Number(i.hotspotX ?? o * 0.5), N = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = Io, c = Io, l = "0", _ = "0", b = "none", P = u_, N = f_, p = m_(i.fillStyle, S, x);
    else if (i.layerKind === "mask")
      p = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const z = Math.max(1, Number(((R = i.preset) == null ? void 0 : R.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * z), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, h = Number(((X = (F = i.preset) == null ? void 0 : F.angle) == null ? void 0 : X.value) || 0) * lr;
    } else i.toolKind === "brush" ? p = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (p = "rgba(255,255,255,0.14)");
    ae.style.display = "block", ae.style.width = `${Math.round(o)}px`, ae.style.height = `${Math.round(c)}px`, ae.style.borderRadius = l, ae.style.border = _, ae.style.boxShadow = b, ae.style.background = p, ae.style.backgroundRepeat = "no-repeat", ae.style.backgroundPosition = "center", ae.style.backgroundSize = "contain", ae.style.transform = `translate(${Math.round(i.x - P)}px, ${Math.round(i.y - N)}px) rotate(${h}deg)`;
  }
  function hp() {
    var ge;
    if (!Q || !we) return;
    const i = m.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? m.maskTool : m.paintTool;
    if (o === "lasso_fill") return;
    const c = ar(o), l = nn[c] || nn[Bn], h = Number(m.brushSizes[c] ?? 10), p = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, p * 0.5), b = o === "eraser", x = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : ln(m.paintColor), S = i === "mask" ? An(x, 0.22) : b ? "rgba(255,255,255,0.14)" : An(x, G(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), P = i === "mask" ? An(x, 0.96) : b ? "rgba(255,255,255,0.72)" : An(x, G(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let N = _ * 2, R = _ * 2, F = "999px", X = 0, z = S;
    const U = "rgba(222, 222, 222, 0.72)", J = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const re = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      N = Math.max(16, _ * 2 * re), R = Math.max(10, _ * 2), F = `${Math.min(8, R * 0.42)}px`, X = Number(((ge = l == null ? void 0 : l.angle) == null ? void 0 : ge.value) || 0) * lr;
    } else o === "brush" ? z = `radial-gradient(circle at 50% 50%, ${P} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, _ * 1.8), R = N, z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : b && (z = "rgba(255,255,255,0.12)");
    we.style.width = `${Math.round(N)}px`, we.style.height = `${Math.round(R)}px`, we.style.borderRadius = F, we.style.background = z, we.style.border = `1px solid ${U}`, we.style.boxShadow = `0 0 0 1px ${J}`, we.style.transform = `rotate(${X}deg)`, Qe && (clearTimeout(Qe), Qe = 0), Q.classList.remove("fade-out"), Q.classList.add("show");
  }
  function ka() {
    !Q || !Q.classList.contains("show") || (Q.classList.add("fade-out"), Qe && clearTimeout(Qe), Qe = window.setTimeout(() => {
      Q.classList.remove("show", "fade-out"), Qe = 0;
    }, 180));
  }
  function gp(i, o, c, l) {
    const h = ar(o), p = nn[h] || nn[Bn], _ = m.brushSizes[h] ?? 10, b = Math.max(1, _) * Math.max(0.1, p.sizeScale ?? 1), x = up(l, b), S = c.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), P = {
      id: Jr(i),
      actionGroupId: Jr("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((N) => ({ ...N })),
        points: S.map((N) => ({ ...N }))
      }
    };
    return ff(P, p), Number(p.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function pp(i, o, c, l) {
    const h = c.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), p = ar(o), _ = nn[p] || nn[Bn], b = {
      id: Jr(i),
      actionGroupId: Jr("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(m.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(m.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...m.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((x) => ({ ...x }))
      }
    };
    return ff(b, _), Number(_.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function Kr(i) {
    const o = d.painting || (d.painting = Ki(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function mp(i, o, c = performance.now()) {
    let l;
    if (m.mode === "frame") {
      const S = Ge();
      if (!S) return !1;
      l = wn(o, S, c);
    } else
      l = xn(o, c);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, p = i.stroke.geometry.points, _ = h[h.length - 1];
    if (_) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), P = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (S < 15e-4 && P < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), p.push({ ...b });
    const x = jn();
    if (x) {
      const S = m.paintEngine.ensureTarget(x);
      m.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function yp(i, o, c = performance.now()) {
    var _, b;
    let l;
    if (m.mode === "frame") {
      const x = Ge();
      if (!x) return !1;
      l = wn(o, x, c);
    } else
      l = xn(o, c);
    const h = (b = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(h)) return !1;
    const p = h[h.length - 1];
    if (p) {
      const x = Math.abs(Number(l.u ?? l.x ?? 0) - Number(p.u ?? p.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(p.v ?? p.y ?? 0));
      if (x < 15e-4 && S < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function bp(i) {
    var re, ye, Pe, Fe, Se;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    _a();
    const c = jn(), l = vi(c.width, c.height);
    if (!Ml(l, o, { w: c.width, h: c.height })) return !1;
    const h = ((ye = (re = l.ctx) == null ? void 0 : re.getImageData(0, 0, c.width, c.height)) == null ? void 0 : ye.data) || null;
    if (!h) return !1;
    const p = new Map(de().map((K) => [String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim(), K ? { ...K } : null])), _ = [], b = [], x = [...en().filter((K) => String((K == null ? void 0 : K.layerKind) || "paint") !== "paint")];
    let S = !1, P = Hn().reduce((K, ee) => Math.max(K, Number((ee == null ? void 0 : ee.z_index) || 0)), -1) + 1;
    function N(K, ee, _e, Ne = 8) {
      let je = ee, Ve = _e, Ue = -1, We = -1;
      for (let Ke = 0; Ke < _e; Ke += 1)
        for (let Ye = 0; Ye < ee; Ye += 1)
          K[(Ke * ee + Ye) * 4 + 3] <= Ne || (Ye < je && (je = Ye), Ke < Ve && (Ve = Ke), Ye > Ue && (Ue = Ye), Ke > We && (We = Ke));
      return Ue < je || We < Ve ? null : { minX: je, minY: Ve, maxX: Ue, maxY: We };
    }
    const R = N(h, c.width, c.height, 8);
    if (!R) return !1;
    function F(K, ee) {
      return !K || !ee ? !1 : !(K.maxX < ee.minX || ee.maxX < K.minX || K.maxY < ee.minY || ee.maxY < K.minY);
    }
    function X(K, ee) {
      const _e = Nt((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "", "paint", ee);
      if (!_e) return null;
      const Ne = _e.centerUv.u - _e.halfW, je = _e.centerUv.u + _e.halfW, Ve = _e.centerUv.v - _e.halfH, Ue = _e.centerUv.v + _e.halfH, We = c.width, Ke = c.height;
      return {
        minX: Math.floor((Ne % 1 + 1) % 1 * We),
        maxX: Math.ceil((je % 1 + 1) % 1 * We),
        minY: Math.floor(G(Ve, 0, 1) * Ke),
        maxY: Math.ceil(G(Ue, 0, 1) * Ke),
        wraps: je - Ne >= 1 || Ne < 0 || je > 1
      };
    }
    function z(K) {
      const ee = (K == null ? void 0 : K.bbox) || null;
      if (!ee) return null;
      const _e = (K == null ? void 0 : K.transform) || {}, Ne = c.width, je = c.height, Ve = Number(ee.u0 || 0) + Number(_e.du || 0), Ue = Number(ee.u1 || 0) + Number(_e.du || 0), We = Number(ee.v0 || 0) + Number(_e.dv || 0), Ke = Number(ee.v1 || 0) + Number(_e.dv || 0);
      return {
        minX: Math.floor((Ve % 1 + 1) % 1 * Ne),
        maxX: Math.ceil((Ue % 1 + 1) % 1 * Ne),
        minY: Math.floor(G(We, 0, 1) * je),
        maxY: Math.ceil(G(Ke, 0, 1) * je),
        wraps: Ue - Ve >= 1 || Ve < 0 || Ue > 1
      };
    }
    function U(K) {
      return K ? K.wraps ? F(R, { minX: 0, maxX: K.maxX, minY: K.minY, maxY: K.maxY }) || F(R, { minX: K.minX, maxX: c.width - 1, minY: K.minY, maxY: K.maxY }) : F(R, K) : !0;
    }
    function J(K) {
      if (!K) return { touched: !1, canvas: null };
      const ee = vi(c.width, c.height, { readback: !0 });
      ee.ctx.drawImage(K, 0, 0);
      const _e = ee.ctx.getImageData(0, 0, c.width, c.height);
      ee.ctx.save(), ee.ctx.globalCompositeOperation = "destination-out", ee.ctx.drawImage(l.canvas, 0, 0), ee.ctx.restore();
      const Ne = ee.ctx.getImageData(0, 0, c.width, c.height);
      for (let je = 0; je < c.width * c.height; je += 1) {
        if (h[je * 4 + 3] <= 8) continue;
        const Ue = _e.data[je * 4 + 3], We = Ne.data[je * 4 + 3];
        if (Ue > We)
          return { touched: !0, canvas: ee.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ge(K, ee, _e) {
      const Ne = Number(_e == null ? void 0 : _e.z_index), je = Lg(K, ee, _e).map((Ve, Ue) => ({
        ...Ve,
        z_index: Number.isFinite(Ne) ? Ne + Ue * 1e-3 : P + Ue * 1e-3
      }));
      return je.length && (P = Math.max(P, ...je.map((Ve) => Number((Ve == null ? void 0 : Ve.z_index) || 0))) + 1), je;
    }
    for (const K of de()) {
      const ee = String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim();
      if (!ee) continue;
      const _e = bn(ee, "paint");
      if (!U(X(K, _e))) {
        b.push(K), _.push(..._e);
        continue;
      }
      const Ne = ((Fe = (Pe = m.paintEngine) == null ? void 0 : Pe.getGroupTarget) == null ? void 0 : Fe.call(Pe, ee)) || null, je = ((Se = Ne == null ? void 0 : Ne.committedPaint) == null ? void 0 : Se.canvas) || null;
      if (!je) {
        b.push(K), _.push(..._e);
        continue;
      }
      const Ve = J(je);
      if (!Ve.touched || !Ve.canvas) {
        b.push(K), _.push(..._e);
        continue;
      }
      S = !0;
      const Ue = ge(Ve.canvas, "paint", p.get(ee) || K || {});
      x.push(...Ue);
    }
    for (const K of en().filter((ee) => String((ee == null ? void 0 : ee.layerKind) || "paint") === "paint")) {
      if (!U(z(K))) {
        x.push(K);
        continue;
      }
      const ee = fl(K, null);
      if (!ee) {
        x.push(K);
        continue;
      }
      const _e = J(ee);
      if (!_e.touched || !_e.canvas) {
        x.push(K);
        continue;
      }
      S = !0;
      const Ne = ge(_e.canvas, "paint", K);
      x.push(...Ne);
    }
    return S ? (d.painting.paint.strokes = _, d.painting.groups = b.sort((K, ee) => Number((K == null ? void 0 : K.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0)), d.painting.raster_objects = x.sort((K, ee) => Number((K == null ? void 0 : K.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0)), Hr({ preservePanelValues: !1 }), !0) : !1;
  }
  function vp(i) {
    var p, _, b, x;
    const o = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null;
    if (!o) return !1;
    const c = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = us(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), bp(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && vt((b = i.stroke) == null ? void 0 : b.actionGroupId), Kr(i.layerKind).push(i.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = us(h, i.stroke.targetSpace, !0), l && vt((x = i.stroke) == null ? void 0 : x.actionGroupId), Kr(i.layerKind).push(i.stroke), !0);
  }
  function Fl(i) {
    var c;
    if (t === "cutout" && m.mode === "frame") {
      const l = Ge(), h = Vt(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const _ = wn(i, l, performance.now()), b = _ ? $r(_) : null;
      if (b)
        for (const S of cs()) {
          if (!pt(S)) continue;
          const P = xi(S, b);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const N = It(S);
            if (N != null && N.visible) return { item: S, geom: N };
          }
        }
      const x = Wo(!1).slice().sort((S, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of x) {
        if (S.type === "strokeGroup") {
          const R = Fr(Ae("paint", S.actionGroupId || S.id || ""));
          if (!R) continue;
          const F = It(R);
          if (!(F != null && F.visible)) continue;
          const X = Array.isArray(F.strokePaths) ? F.strokePaths : [];
          for (const z of X) {
            const U = Array.isArray(z == null ? void 0 : z.points) ? z.points : [];
            if (!U.length) continue;
            if (z.closed && U.length >= 3 && Un(i, U)) return { item: R, geom: F };
            const J = Math.max(8, Number((z == null ? void 0 : z.lineWidth) || 0) * 0.5 + 6);
            for (let ge = 0; ge < U.length - 1; ge += 1)
              if (Gs(i, U[ge], U[ge + 1]) <= J * J) return { item: R, geom: F };
            if (U.length === 1 && sr(i, U[0]) <= J * J) return { item: R, geom: F };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const R = Or(Re(((c = S.item) == null ? void 0 : c.id) || S.id || ""));
          if (!R) continue;
          const F = It(R);
          if (ul(R, F, i, _)) return { item: R, geom: F };
          continue;
        }
        const P = S.item;
        if (!P || !pt(P) || !b) continue;
        const N = xi(P, b);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const R = It(P);
          if (R != null && R.visible) return { item: P, geom: R };
        }
      }
      return null;
    }
    const o = [
      ...Wo(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? Fr(Ae("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? Or(Re(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? cs().filter((l) => cn(l)) : []
    ];
    for (const l of o) {
      if (Mt(l)) {
        const p = It(l);
        if (!(p != null && p.visible)) continue;
        const _ = Array.isArray(p.strokePaths) ? p.strokePaths : [];
        for (const b of _) {
          const x = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!x.length) continue;
          if (b.closed && x.length >= 3 && Un(i, x)) return { item: l, geom: p };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < x.length - 1; P += 1)
            if (Gs(i, x[P], x[P + 1]) <= S * S) return { item: l, geom: p };
          if (x.length === 1 && sr(i, x[0]) <= S * S) return { item: l, geom: p };
        }
        continue;
      }
      if (Ot(l)) {
        const p = It(l);
        if (!(p != null && p.visible)) continue;
        if (ul(l, p, i)) return { item: l, geom: p };
        continue;
      }
      const h = It(l);
      if (h.visible && Un(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function ys(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((p) => sr(p, o) <= 121);
      if (l >= 0) {
        const p = i.corners[l], _ = p.x - i.center.x, b = p.y - i.center.y, x = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: x };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const p of h) {
        const _ = Array.isArray(p == null ? void 0 : p.points) ? p.points : [];
        if (p.closed && _.length >= 3 && Un(o, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((p == null ? void 0 : p.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < _.length - 1; x += 1)
          if (Gs(o, _[x], _[x + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return Un(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const l = i.corners.findIndex((h) => sr(h, o) <= 121);
      if (l >= 0) {
        const h = i.corners[l], p = h.x - i.center.x, _ = h.y - i.center.y, b = p * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      return Un(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => sr(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => sr(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], h = l.x - i.center.x, p = l.y - i.center.y, _ = h * p >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: _ };
    }
    return sr(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Un(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: m.mode === "pano" ? "grab" : "default" };
  }
  function Vl(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function _p(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function xp(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => _p(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Un({ x: c, y: l }, o.corners);
  }
  function ht(i) {
    if (dp(), m.interaction) {
      m.interaction.kind === "paint_stroke" || m.interaction.kind === "paint_lasso_fill" ? A.style.cursor = "none" : m.interaction.kind === "view" || m.interaction.kind === "pan_frame" ? A.style.cursor = "grabbing" : m.interaction.kind === "move" || m.interaction.kind === "move_multi" || m.interaction.kind === "move_stroke_group" || m.interaction.kind === "move_raster_object" ? A.style.cursor = "move" : m.interaction.kind === "scale" || m.interaction.kind === "scale_x" || m.interaction.kind === "scale_y" || m.interaction.kind === "scale_raster_object" ? A.style.cursor = m.interaction.cursor || "nwse-resize" : m.interaction.kind === "rotate" ? A.style.cursor = "grabbing" : A.style.cursor = "default";
      return;
    }
    if (Ol()) {
      A.style.cursor = "none";
      return;
    }
    if (m.mode === "frame" && m.primaryTool !== "cursor") {
      A.style.cursor = "default";
      return;
    }
    if (m.primaryTool === "cursor" && m.marqueeModifier) {
      A.style.cursor = "default";
      return;
    }
    const o = ot(), c = o ? It(o) : null, l = o ? nr(o) : !1, h = l ? { kind: "none", cursor: "default" } : ys(c, i);
    if (!l && h.kind !== "none") {
      A.style.cursor = h.cursor;
      return;
    }
    if (m.primaryTool === "cursor" && Fl(i)) {
      A.style.cursor = "default";
      return;
    }
    A.style.cursor = m.mode === "pano" ? "grab" : "default";
  }
  function Be() {
    var h, p;
    if (!xe) return;
    const i = ot(), o = vn();
    if (!i && o.length === 0 || m.interaction) {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = ua(), l = mb({
      type: t,
      selected: i,
      selectedItems: o,
      selectedKind: c,
      geom: o.length > 1 ? Xo(o) : It(i),
      allLocked: Zo(o),
      selectedLocked: nr(i),
      activeAspect: Ii(i),
      cutoutAspectOpen: m.cutoutAspectOpen,
      isExternalSticker: At,
      isStickerHidden: Vr,
      canRestoreSelectedToInitial: Ph,
      iconSet: Tt
    });
    if (!l.visible) {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    D.selectionMenu = {
      visible: !0,
      left: ((h = D.selectionMenu) == null ? void 0 : h.left) ?? l.left ?? 0,
      top: ((p = D.selectionMenu) == null ? void 0 : p.top) ?? l.top ?? 0,
      items: l.items
    }, requestAnimationFrame(() => {
      var R, F, X;
      if (!xe || D.selectionMenu.visible !== !0) return;
      const _ = xe.getBoundingClientRect(), b = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, x = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40, S = 14;
      let P = G((Number(((R = l.anchor) == null ? void 0 : R.minX) || 0) + Number(((F = l.anchor) == null ? void 0 : F.maxX) || 0)) * 0.5 - b * 0.5, S, A.width - b - S), N = Number(((X = l.anchor) == null ? void 0 : X.maxY) || 0) + 18;
      if (!Number.isFinite(P) || !Number.isFinite(N) || N + x > A.height - S) {
        D.selectionMenu.visible = !1;
        return;
      }
      D.selectionMenu.left = P, D.selectionMenu.top = N;
    });
  }
  function Pa() {
    j.timer && (clearTimeout(j.timer), j.timer = 0), j.target = null, D.tooltip.visible = !1, D.tooltip.text = "", D.tooltip.variant = "";
  }
  function wp(i) {
    if (!ie || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    D.tooltip.text = o, D.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var X, z;
      if (j.target !== c || !ie || !(c != null && c.isConnected)) return;
      const l = te.getBoundingClientRect(), h = c.getBoundingClientRect(), p = 8, _ = 12, b = Math.round(Number(((X = ie.getBoundingClientRect()) == null ? void 0 : X.width) || 0)) || 100, x = Math.round(Number(((z = ie.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, S = !!c.closest(".pano-floating-left"), P = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let N = "", R = h.left - l.left + h.width * 0.5 - b * 0.5, F = h.top - l.top - x - _;
      if (S)
        N = "tool-rail", R = h.right - l.left + 10, F = h.top - l.top + h.height * 0.5 - x * 0.5, R = G(R, p, Math.max(p, l.width - b - p)), F = G(F, p, Math.max(p, l.height - x - p));
      else if (P) {
        N = "footer";
        const U = c.closest(".pano-paint-footer"), J = U ? U.getBoundingClientRect() : h;
        R = J.left - l.left + J.width * 0.5 - b * 0.5, F = J.bottom - l.top + 5, R = G(R, p, Math.max(p, l.width - b - p)), F = Math.max(p, F);
      }
      R = G(R, p, Math.max(p, l.width - b - p)), F = Math.max(p, F), D.tooltip.left = R, D.tooltip.top = F, D.tooltip.variant = N, D.tooltip.visible = !0;
    });
  }
  const Et = Go({
    getView: () => ({ yaw: m.viewYaw, pitch: m.viewPitch, fov: m.viewFov }),
    setView: (i) => {
      m.viewYaw = Lt(Number(i.yaw || 0)), m.viewPitch = G(Number(i.pitch || 0), -89.9, 89.9), m.viewFov = G(Number(i.fov || m.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = A.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || A.clientWidth || 0)),
        h: Math.max(1, Number(i.height || A.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, o;
      return {
        x: (i = d.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (o = d.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: rr,
    onInteraction: () => {
      I.backgroundDirty = !0, I.dirty = !0;
    }
  });
  A.onpointerdown = (i) => {
    const o = Gr(i);
    if (Ma(o, !0), m.viewTween = null, Et.state.inertia.active = !1, Et.state.inertia.vx = 0, Et.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), m.mode === "frame")
        m.interaction = { kind: "pan_frame", last: o };
      else {
        const b = m.mode === "unwrap" ? o : Na(i);
        m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Et.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      ht(o), A.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (m.mode === "pano") {
        const b = Na(i);
        m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Et.startDrag(b.x, b.y, i.pointerId, performance.now()), ht(o), A.setPointerCapture(i.pointerId);
      }
      return;
    }
    if ($ && !$.hidden)
      return;
    if ((m.primaryTool === "paint" || m.primaryTool === "mask") && (Rl() || ms())) {
      const b = m.primaryTool === "mask" ? "mask" : "paint", x = m.primaryTool === "mask" ? m.maskTool : m.paintTool, S = m.mode === "frame" && ms() ? Ge() : null, P = { kind: "ERP_GLOBAL" }, N = S ? wn(o, S, performance.now()) : xn(o, performance.now());
      m.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: Jr("live"),
        stroke: x === "lasso_fill" ? pp(b, x, [N], P) : gp(b, x, [N], P)
      }, yi();
      const R = jn();
      if (R)
        if (m.paintEngine.beginStroke(m.interaction.stroke, R), m.interaction.kind === "paint_stroke") {
          const F = m.paintEngine.ensureTarget(R), X = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), z = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          m.paintEngine.appendStrokePoint(F, X, z, m.interaction.stroke);
        } else
          m.paintEngine.updateActiveStroke(m.interaction.stroke, R);
      ht(o), A.setPointerCapture(i.pointerId), ve();
      return;
    }
    const c = vn(), l = ot(), h = c.length > 1 ? Xo(c) : l ? It(l) : null;
    if (m.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      m.interaction = { kind: "marquee_select", start: o, current: o }, ht(o), A.setPointerCapture(i.pointerId), ve({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (h != null && h.visible)) {
      if ((c.some((x) => nr(x)) ? { kind: "none" } : ys(h, o)).kind === "move") {
        m.interaction = {
          kind: "move_multi",
          items: c.map((x) => x),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: c.filter((x) => pt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var P, N;
              const S = It(x);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((x) => Mt(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Ht(bn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Ht(Nt(x.actionGroupId, x.layerKind)),
            center: (() => {
              var P, N;
              const S = It(x);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: qo(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: c.filter((x) => Ot(x)).map((x) => ({
            id: Oe(x.rasterObjectId || x.id || ""),
            snapshot: Ht(en().find((S) => String((S == null ? void 0 : S.id) || "") === Oe(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var P, N;
              const S = It(x);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: yl(x)
          }))
        }, ht(o), A.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const b = nr(l) ? { kind: "none" } : ys(h, o);
      if (b.kind === "scale") {
        m.interaction = Mt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Ht(bn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ht(Nt(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : Ot(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Ht(en().find((x) => String((x == null ? void 0 : x.id) || "") === Oe(l.rasterObjectId || l.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, ht(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        m.interaction = {
          kind: b.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, ht(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        m.interaction = Mt(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Ht(bn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ht(Nt(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ht(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Mt(l)) {
          const x = m.mode === "frame" ? (() => {
            const S = Ge();
            return S ? wn(o, S, performance.now()) : null;
          })() : xn(o, performance.now());
          m.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: x,
            snapshot: Ht(bn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Ht(Nt(l.actionGroupId, l.layerKind))
          }, ht(o), A.setPointerCapture(i.pointerId);
          return;
        }
        if (Ot(l)) {
          const x = m.mode === "frame" ? (() => {
            const S = Ge();
            return S ? wn(o, S, performance.now()) : null;
          })() : xn(o, performance.now());
          m.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: x,
            snapshot: Ht(en().find((S) => String((S == null ? void 0 : S.id) || "") === Oe(l.rasterObjectId || l.id || "")))
          }, ht(o), A.setPointerCapture(i.pointerId);
          return;
        }
        m.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ht(o), A.setPointerCapture(i.pointerId);
        return;
      }
    }
    const p = Fl(o);
    if (p) {
      const b = m.selectedId !== p.item.id;
      if (b && m.selectedId && (ct(), pn()), gr(p.item), t === "cutout" && b && (m.cutoutAspectOpen = !1), b && ze(), Be(), ve(), nr(p.item)) {
        ht(o);
        return;
      }
      m.interaction = {
        kind: Mt(p.item) ? "move_stroke_group" : Ot(p.item) ? "move_raster_object" : "move",
        item: p.item,
        offset: { x: o.x - p.geom.center.x, y: o.y - p.geom.center.y },
        startUv: Mt(p.item) || Ot(p.item) ? m.mode === "frame" ? (() => {
          const x = Ge();
          return x ? wn(o, x, performance.now()) : null;
        })() : xn(o, performance.now()) : null,
        snapshot: Mt(p.item) ? Ht(bn(p.item.actionGroupId, p.item.layerKind)) : Ot(p.item) ? Ht(en().find((x) => String((x == null ? void 0 : x.id) || "") === Oe(p.item.rasterObjectId || p.item.id || ""))) : null,
        frameSnapshot: Mt(p.item) ? Ht(Nt(p.item.actionGroupId, p.item.layerKind)) : null
      }, ht(o), A.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!m.selectedId;
    if (_ && (ct(), pn()), Hr(), _ && ze(), Be(), ve(), m.mode === "pano") {
      const b = Na(i);
      m.interaction = { kind: "view", last: b, lastTs: performance.now() }, Et.startDrag(b.x, b.y, i.pointerId, performance.now()), ht(o), A.setPointerCapture(i.pointerId);
    }
  }, A.onpointermove = (i) => {
    var l, h, p, _, b, x, S, P, N, R, F, X, z, U, J, ge, re, ye, Pe, Fe;
    const o = Gr(i);
    if (Ma(o, !0), !m.interaction) {
      ht(o);
      return;
    }
    ht(o);
    const c = m.interaction;
    if (c.kind === "paint_stroke") {
      const Se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let K = !1;
      Se.forEach((ee) => {
        const _e = Gr(ee);
        mp(c, _e, performance.now()) && (K = !0);
      }), K && ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const Se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let K = !1;
      if (Se.forEach((ee) => {
        const _e = Gr(ee);
        yp(c, _e, performance.now()) && (K = !0);
      }), K) {
        const ee = jn();
        ee && m.paintEngine.updateActiveStroke(c.stroke, ee), ve({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const Se = performance.now(), K = m.mode === "unwrap" ? o : Na(i);
      Et.moveDrag(K.x, K.y, m.mode === "unwrap" ? "unwrap" : "pano", Se), c.lastTs = Se, c.last = K, ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      m.frameView.panX += o.x - c.last.x, m.frameView.panY += o.y - c.last.y, c.last = o, ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const Se = o.x - c.offset.x, K = o.y - c.offset.y;
      if (m.mode === "frame" && t === "cutout") {
        const ee = Ge(), _e = Vt(ee);
        if (!ee || !_e) return;
        const Ne = {
          x: G((Se - _e.x) / Math.max(1, _e.w), 0, 1),
          y: G((K - _e.y) / Math.max(1, _e.h), 0, 1)
        }, je = ls(ee, Ne);
        if (!je) return;
        const Ve = Wa(je);
        c.item.yaw_deg = Ve.yaw, c.item.pitch_deg = Ve.pitch;
      } else if (m.mode === "unwrap") {
        const ee = rr(), _e = G((Se - ee.x) / Math.max(ee.w, 1), 0, 1), Ne = G((K - ee.y) / Math.max(ee.h, 1), 0, 1);
        c.item.yaw_deg = Lt(_e * 360 - 180), c.item.pitch_deg = G(90 - Ne * 180, -90, 90);
      } else {
        const ee = ts(Se, K), _e = Wa(ee);
        c.item.yaw_deg = _e.yaw, c.item.pitch_deg = _e.pitch;
      }
      pt(c.item) && Dt(), ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const Se = m.mode === "frame" ? (() => {
        const _e = Ge();
        return _e ? wn(o, _e, performance.now()) : null;
      })() : xn(o, performance.now());
      if (!Se || !c.startUv) return;
      const K = gn(Number(Se.u || 0), Number(c.startUv.u || 0)), ee = Number(Se.v || 0) - Number(c.startUv.v || 0);
      Zc((l = c.item) == null ? void 0 : l.actionGroupId, K, ee, c.snapshot, (h = c.item) == null ? void 0 : h.layerKind, c.frameSnapshot) && (_n({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const Se = m.mode === "frame" ? (() => {
        const _e = Ge();
        return _e ? wn(o, _e, performance.now()) : null;
      })() : xn(o, performance.now());
      if (!Se || !c.startUv) return;
      const K = gn(Number(Se.u || 0), Number(c.startUv.u || 0)), ee = Number(Se.v || 0) - Number(c.startUv.v || 0);
      Qc(((p = c.item) == null ? void 0 : p.rasterObjectId) || ((_ = c.item) == null ? void 0 : _.id) || "", K, ee, c.snapshot) && (Ur(), ve({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      ph(((b = c.item) == null ? void 0 : b.rasterObjectId) || ((x = c.item) == null ? void 0 : x.id) || "", K, c.snapshot) && (Ur(), ve({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const Se = o.x - Number(((S = c.offset) == null ? void 0 : S.x) || 0), K = o.y - Number(((P = c.offset) == null ? void 0 : P.y) || 0);
      let ee = !1, _e = !1, Ne = !1;
      const je = Se - Number(((N = c.startCenter) == null ? void 0 : N.x) || Se), Ve = K - Number(((R = c.startCenter) == null ? void 0 : R.y) || K);
      for (const Ue of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const We = (t === "cutout" ? Yo() : ce()).find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === String(Ue.id || ""));
        if (!We || !pt(We)) continue;
        const Ke = {
          x: Number(((F = Ue.center) == null ? void 0 : F.x) || 0) + je,
          y: Number(((X = Ue.center) == null ? void 0 : X.y) || 0) + Ve
        };
        if (m.mode === "frame" && t === "cutout") {
          const Ye = Ge(), St = Vt(Ye);
          if (!Ye || !St) continue;
          const mr = {
            x: G((Ke.x - St.x) / Math.max(1, St.w), 0, 1),
            y: G((Ke.y - St.y) / Math.max(1, St.h), 0, 1)
          }, Jl = ls(Ye, mr);
          if (!Jl) continue;
          const Ql = Wa(Jl);
          We.yaw_deg = Ql.yaw, We.pitch_deg = Ql.pitch;
        } else if (m.mode === "unwrap") {
          const Ye = rr(), St = G((Ke.x - Ye.x) / Math.max(Ye.w, 1), 0, 1), mr = G((Ke.y - Ye.y) / Math.max(Ye.h, 1), 0, 1);
          We.yaw_deg = Lt(St * 360 - 180), We.pitch_deg = G(90 - mr * 180, -90, 90);
        } else {
          const Ye = ts(Ke.x, Ke.y), St = Wa(Ye);
          We.yaw_deg = St.yaw, We.pitch_deg = St.pitch;
        }
        ee = !0;
      }
      for (const Ue of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const We = {
          x: Number(((z = Ue.center) == null ? void 0 : z.x) || 0) + je,
          y: Number(((U = Ue.center) == null ? void 0 : U.y) || 0) + Ve
        }, Ke = m.mode === "frame" ? (() => {
          const St = Ge();
          return St ? wn(We, St, performance.now()) : null;
        })() : xn(We, performance.now()), Ye = Ue.centerUv || null;
        if (Ke && Ye) {
          const St = gn(Number(Ke.u || 0), Number(Ye.u || 0)), mr = Number(Ke.v || 0) - Number(Ye.v || 0);
          Zc(Ue.id, St, mr, Ue.snapshot, Ue.layerKind, Ue.frameSnapshot) && (ee = !0, _e = !0);
        }
      }
      for (const Ue of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const We = {
          x: Number(((J = Ue.center) == null ? void 0 : J.x) || 0) + je,
          y: Number(((ge = Ue.center) == null ? void 0 : ge.y) || 0) + Ve
        }, Ke = m.mode === "frame" ? (() => {
          const St = Ge();
          return St ? wn(We, St, performance.now()) : null;
        })() : xn(We, performance.now()), Ye = Ue.centerUv || null;
        if (Ke && Ye) {
          const St = gn(Number(Ke.u || 0), Number(Ye.u || 0)), mr = Number(Ke.v || 0) - Number(Ye.v || 0);
          Qc(Ue.id, St, mr, Ue.snapshot) && (ee = !0, Ne = !0);
        }
      }
      ee && (_e ? _n({ rebuildPaintEngine: !1 }) : Ne ? Ur() : Dt(), ve({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Jc((re = c.item) == null ? void 0 : re.actionGroupId, K, 0, c.snapshot, (ye = c.item) == null ? void 0 : ye.layerKind, c.frameSnapshot) && (_n({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let Se = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * lr;
      i.shiftKey && (Se = Math.round(Se / 45) * 45), Jc((Pe = c.item) == null ? void 0 : Pe.actionGroupId, 1, Se, c.snapshot, (Fe = c.item) == null ? void 0 : Fe.layerKind, c.frameSnapshot) && (_n({ rebuildPaintEngine: !1 }), ve({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = G(c.startHFOV * K, 1, 179), c.item.vFOV_deg = G(c.startVFOV * K, 1, 179), c.item.aspect_id = Nr(c.item), pt(c.item) && Dt(), ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = G(c.startHFOV * K, 1, 179), c.item.aspect_id = Nr(c.item), pt(c.item) && Dt(), ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const K = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = G(c.startVFOV * K, 1, 179), c.item.aspect_id = Nr(c.item), pt(c.item) && Dt(), ve({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let K = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * lr, ee = c.startRot - K;
      i.shiftKey && (ee = Math.round(ee / 45) * 45);
      const _e = pt(c.item) ? "rot_deg" : "roll_deg";
      c.item[_e] = ee, pt(c.item) && Dt(), ve({ localOnly: !0 });
    }
  }, A.onpointerup = () => {
    var o, c, l, h, p, _;
    const i = m.interaction;
    if (((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = m.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (yi(), vp(m.interaction)) {
        _n();
        const b = String(((l = m.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = de().find((P) => String((P == null ? void 0 : P.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const x = jn();
        x && (String(((h = m.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (m.paintEngine.cancelActiveStroke(x), Sl()) : m.paintEngine.commitActiveStroke(m.interaction.stroke, x)), ct(), pn(), ze(), Be(), e.setDirtyCanvas(!0, !0), ve();
      } else {
        const b = jn();
        b && m.paintEngine.cancelActiveStroke(b);
      }
    else if (((p = m.interaction) == null ? void 0 : p.kind) === "marquee_select") {
      const b = Vl(m.interaction.start, m.interaction.current), S = [
        ...t === "cutout" ? cs().filter((P) => !cn(P)) : [...ce()],
        ...fh(),
        ...dh()
      ].filter((P) => xp(b, It(P)));
      vh(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && S.length && (m.cutoutAspectOpen = !1), ze(), Be(), ve();
    } else if (m.interaction && m.interaction.kind !== "view" && m.interaction.kind !== "pan_frame") {
      let b = !1;
      (m.interaction.kind === "move_stroke_group" || m.interaction.kind === "scale_stroke_group" || m.interaction.kind === "rotate_stroke_group") && (b = !0), (m.interaction.kind === "move_raster_object" || m.interaction.kind === "scale_raster_object") && (b = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length && (b = !0), m.interaction.kind === "move_multi" && Array.isArray(m.interaction.rasterSnapshots) && m.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(m.interaction.kind) || m.interaction.kind === "move_multi" && Array.isArray(m.interaction.strokeSnapshots) && m.interaction.strokeSnapshots.length ? _n({ rebuildPaintEngine: !0 }) : Ur()), ct(), pn(), e.setDirtyCanvas(!0, !0), gs(), m.hqFrames = 1, Be(), ve();
    }
    m.interaction = null, yi(), i && i.kind === "view" && Et.endDrag(performance.now()), fa(), Be(), ht(m.pointerPos), ve();
  }, A.onpointercancel = () => {
    var i, o, c;
    if (((i = m.interaction) == null ? void 0 : i.kind) === "view" && Et.endDrag(performance.now()), ((o = m.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = m.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      yi();
      const l = jn();
      l && m.paintEngine.cancelActiveStroke(l);
    }
    m.interaction = null, yi(), fa(), ht(m.pointerPos), ve({ localOnly: !0 });
  }, A.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, A.onmousemove = (i) => {
    const o = Gr(i);
    Ma(o, !0), !m.interaction && ht(o);
  }, A.onmouseleave = () => {
    Ma(m.pointerPos, !1), ht(m.pointerPos);
  }, A.onwheel = (i) => {
    if (m.mode === "frame") {
      const o = Gr(i), c = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      lp(o, c) && ve({ localOnly: !0 }), i.preventDefault();
      return;
    }
    m.mode === "pano" && (Et.applyWheelEvent(i) && ve({ localOnly: !0 }), i.preventDefault());
  }, A.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Y(!0));
  }, A.ondrop = (i) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), W.depth = 0, Y(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => wa(h));
    c && Al(c);
  };
  const Hl = (i) => {
    t !== "stickers" && t !== "cutout" || r || Z(i) && (W.depth += 1, Y(!0), i.preventDefault());
  }, zl = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!W.active && Z(i) && Y(!0), W.active && i.preventDefault());
  }, jl = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !W.active) return;
    W.depth = Math.max(0, W.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (W.depth === 0 || o) && Y(!1);
  }, $l = (i) => {
    t !== "stickers" && t !== "cutout" || r || (W.depth = 0, Y(!1), Z(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Hl, !0), window.addEventListener("dragover", zl, !0), window.addEventListener("dragleave", jl, !0), window.addEventListener("drop", $l, !0);
  function bs() {
    const { canUndo: i, canRedo: o } = Cl();
    Ai(D.toolButtons, "value", "undo", { disabled: !i }), Ai(D.toolButtons, "value", "redo", { disabled: !o });
  }
  const Bl = (i, o, c = !1) => {
    var b;
    const l = ot(), h = ua();
    if (!l || h === "stroke") return;
    const p = (((b = D.sidePanel) == null ? void 0 : b.params) || []).find((x) => x.key === i);
    if (!p || p.enabled === !1) return;
    let _ = Number(o);
    Number.isNaN(_) && (_ = 0), _ = G(_, Number(p.min), Number(p.max)), i === "yaw_deg" && (_ = Lt(_)), l[i] = _, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (l.aspect_id = Nr(l)), ze(), ve(), c && ct();
  };
  le == null || le.addEventListener("click", async (i) => {
    var l, h, p, _, b, x, S, P, N;
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = String(o.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const R = Rt(o.getAttribute("data-coverage"));
      if (R === Rt(d.coverage)) return;
      d.coverage = R, m.coverage = R, g && (g.value = String(R)), s ? I.backgroundDirty = !0 : (pn(), cp({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Be(), ve();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((h = (l = D.sidePanel) == null ? void 0 : l.selectionPicker) != null && h.disabled) return;
      D.sidePanel.selectionPicker.open = !D.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      D.sidePanel.selectionPicker.open = !1;
      const R = String(o.getAttribute("data-selection-id") || "");
      let F = null;
      R && (t === "stickers" ? F = ce().find((X) => String((X == null ? void 0 : X.id) || "") === R) || null : F = ((p = el().find((X) => {
        var z;
        return String(((z = X == null ? void 0 : X.item) == null ? void 0 : z.id) || "") === R;
      })) == null ? void 0 : p.item) || null), gr(F || null), F && !Mt(F) && me(
        Lt(Number(F.yaw_deg || 0)),
        G(Number(F.pitch_deg || 0), -89.9, 89.9),
        m.viewFov
      ), ze(), Be(), ve();
      return;
    }
    if (c === "copy-state-inline") {
      const R = ot(), F = ua();
      if (!R || F === "stroke" || vn().length > 1) return;
      const X = JSON.stringify(t === "cutout" && F !== "image" ? ol(R) : Dh(R));
      try {
        await navigator.clipboard.writeText(X), (_ = D.sidePanel) != null && _.copyStateButton && (D.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var z;
          (z = D.sidePanel) != null && z.copyStateButton && (D.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const R = String(o.getAttribute("data-visibility") || "");
      R === "panorama" ? m.showPanorama = !m.showPanorama : R === "objects" ? m.showObjects = !m.showObjects : R === "mask" && (m.showMask = !m.showMask), ze(), ve();
      return;
    }
    if (c === "set-invert-x") {
      d.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Sa(), ze(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ve();
      return;
    }
    if (c === "set-invert-y") {
      d.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Sa(), ze(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ve();
      return;
    }
    if (c === "toggle-quality-picker") {
      (S = D.sidePanel) != null && S.uiSettings && (D.sidePanel.uiSettings.qualityOpen = !D.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (c === "set-quality") {
      const R = String(o.getAttribute("data-quality") || "balanced");
      d.ui_settings.preview_quality = R === "draft" || R === "high" ? R : "balanced", Sa(), ze(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), ve();
      return;
    }
    if (c === "ui-reset-defaults") {
      d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", Sa(), ze(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), ve();
      return;
    }
    if (c === "close-preview") {
      Yr();
      return;
    }
    if (c === "cancel-close") {
      Yr();
      return;
    }
    c === "save-close" && (op(), Yr());
  }), le == null || le.addEventListener("input", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && Bl(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), le == null || le.addEventListener("change", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && Bl(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const vs = () => {
    const i = !!m.showGrid;
    Ai(D.floatingButtons, "action", "toggle-grid", {
      icon: i ? Tt.eye : Tt.eye_dashed,
      pressed: i ? "true" : "false",
      label: i ? "Hide Grid" : "Show Grid",
      tip: i ? "Hide grid" : "Show grid"
    });
  };
  vs(), E.addEventListener("click", (i) => {
    var b, x, S, P;
    if ((x = (b = i.target) == null ? void 0 : b.matches) != null && x.call(b, "[data-confirm-overlay]")) {
      const N = (S = D.confirmDialog) == null ? void 0 : S.resolve;
      D.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = i.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      m.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && m.mode === "frame" && ot() && cn(ot()) && (Hr({ preservePanelValues: !0 }), ze(), Be()), ps(), fa(), ve();
      return;
    }
    const c = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (c && !r) {
      if (c.matches("[data-tool-mode]")) {
        const N = String(c.getAttribute("data-tool-mode") || "cursor");
        m.primaryTool = N, (N === "paint" || N === "mask") && Hr({ preservePanelValues: !0 }), tn(), ze(), Be(), ve();
        return;
      }
      if (c.matches("[data-tool-ui-action]")) {
        const N = String(c.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && c.disabled) return;
        N === "undo" ? hs(-1) : N === "redo" ? hs(1) : N === "clear" ? Qg() : N === "add" || N === "add-image" ? Kg() : N === "add-or-look" && Xg();
        return;
      }
      if (c.matches("[data-paint-tool]")) {
        m.primaryTool = "paint";
        const N = String(c.getAttribute("data-paint-tool") || "pen");
        m.paintTool = N, Hr({ preservePanelValues: !0 }), nn[N] && (m.activeBrushPresetId = N), tn(), ze(), Be(), ve();
        return;
      }
      if (c.matches("[data-mask-tool]")) {
        m.primaryTool = "mask", m.maskTool = String(c.getAttribute("data-mask-tool") || "pen"), Hr({ preservePanelValues: !0 }), tn(), ze(), Be(), ve();
        return;
      }
      if (c.matches("[data-paint-layer-clear-current]")) {
        const N = String(c.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        ep(N);
        return;
      }
      if (c.matches("[data-paint-color-swatch]")) {
        const N = co.find((R) => R.id === c.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        m.paintColor = ln(N.color), bt(!0), tn();
        return;
      }
      if (c.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), $ && !$.hidden ? bt(!0) : Gt(), tn();
        return;
      }
    }
    const l = String(((P = c == null ? void 0 : c.getAttribute) == null ? void 0 : P.call(c, "data-action")) || "");
    if (!r) {
      if (l === "aspect") {
        m.cutoutAspectOpen = !m.cutoutAspectOpen, m.menuSize.measured = !1, Be(), ve();
        return;
      }
      if (l === "aspect-set") {
        const N = ot();
        if (!N) return;
        const R = String(c.getAttribute("data-aspect") || "1:1");
        np(N, R), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, gs(), ct(), mt(), Be(), ve();
        return;
      }
      if (l === "rotate-90") {
        const N = ot();
        if (!N) return;
        rp(N), m.cutoutAspectOpen = !1, m.menuSize.measured = !1, gs(), ct(), mt(), Be(), ve();
        return;
      }
      if (l === "bring-front") {
        ip();
        return;
      }
      if (l === "send-back") {
        ap();
        return;
      }
      if (l === "duplicate") {
        tp();
        return;
      }
      if (l === "replace-image") {
        Yg();
        return;
      }
      if (l === "toggle-lock") {
        bh();
        return;
      }
      if (l === "back-initial") {
        Mh();
        return;
      }
      if (l === "toggle-visible") {
        Nh();
        return;
      }
      if (l === "delete") {
        El();
        return;
      }
    }
    if (l === "reset-view") {
      me(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      m.showGrid = !m.showGrid, M_(e == null ? void 0 : e.id, m.showGrid), vs(), ve();
      return;
    }
    if (l === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Mp();
      return;
    }
    if (l === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const N = !m.outputPreviewExpanded;
      m.outputPreviewExpanded = N, m.outputPreviewAnimFrom = m.outputPreviewAnim, m.outputPreviewAnimTo = N ? 1 : 0, m.outputPreviewAnimStartTs = performance.now(), Yl(), ve();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const p = Number(h.getAttribute("data-paint-history-index")), _ = m.customPaintHistory[p];
    _ && (m.customPaintColor = ln(_), m.paintColor = ln(_), tn());
  }), E.addEventListener("input", (i) => {
    const o = i.target.closest("[data-paint-size-slider]");
    if (o) {
      if (o.disabled) return;
      const l = Math.max(1, Math.min(120, Math.round(Number(o.value)))), h = ar(m.primaryTool === "paint" ? m.paintTool : m.maskTool);
      m.brushSizes[h] = l, tn(), hp();
      return;
    }
    const c = i.target.closest("[data-paint-alpha-slider]");
    if (c) {
      const l = { ...m.customPaintColor, a: G(Number(c.value) / 100, 0, 1) };
      m.customPaintColor = ln(l), m.paintColor = ln(l), tn();
    }
  }), E.addEventListener("change", (i) => {
    i.target.closest("[data-paint-size-slider]") && ka();
  }), E.addEventListener("pointerup", (i) => {
    i.target.closest("[data-paint-size-slider]") && ka();
  }), E.addEventListener("pointercancel", (i) => {
    i.target.closest("[data-paint-size-slider]") && ka();
  }), E.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && ka();
  }), E.addEventListener("pointerover", (i) => {
    const o = i.target.closest("[data-tip]");
    !o || !E.contains(o) || j.target !== o && (j.target = o, j.timer && clearTimeout(j.timer), j.timer = window.setTimeout(() => {
      j.target === o && wp(o);
    }, 220));
  }), E.addEventListener("pointerout", (i) => {
    var l, h;
    const o = i.target.closest("[data-tip]");
    !o || j.target !== o || (i.relatedTarget instanceof Element ? (h = (l = i.relatedTarget).closest) == null ? void 0 : h.call(l, "[data-tip]") : null) === o || Pa();
  }), E.addEventListener("pointerdown", () => {
    Pa();
  });
  const Sp = (i, o) => {
    var b;
    if (!be) return;
    const c = be.getBoundingClientRect(), l = G((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - G((o - c.top) / Math.max(1, c.height), 0, 1), p = Ws(m.customPaintColor), _ = { ...Ks(p.h, l, h), a: Number(((b = m.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    m.customPaintColor = ln(_), m.paintColor = ln(_), tn();
  }, Np = (i) => {
    var p;
    if (!Te) return;
    const o = Te.getBoundingClientRect(), c = G((i - o.left) / Math.max(1, o.width), 0, 1), l = Ws(m.customPaintColor), h = { ...Ks(c, l.s, l.v), a: Number(((p = m.customPaintColor) == null ? void 0 : p.a) ?? 1) };
    m.customPaintColor = ln(h), m.paintColor = ln(h), tn();
  }, Ul = (i, o) => {
    const c = i.pointerId;
    o(i);
    const l = (p) => {
      p.pointerId === c && o(p);
    }, h = (p) => {
      p.pointerId === c && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  be && (be.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Ul(i, (o) => Sp(o.clientX, o.clientY));
  }), Te && (Te.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Ul(i, (o) => Np(o.clientX));
  }), E.addEventListener("click", (i) => {
    var h;
    const o = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const c = o.getAttribute("data-action") === "confirm-accept", l = (h = D.confirmDialog) == null ? void 0 : h.resolve;
    D.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(c);
  });
  const Gl = () => {
    const i = !!m.fullscreen;
    Ai(D.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Tt.fullscreen_close : Tt.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ca = (i) => {
    const o = !!i;
    m.fullscreen !== o && (m.fullscreen = o, E.classList.toggle("pano-modal-fullscreen", o), o ? (m.fullscreenPrevShowGrid = !!m.showGrid, m.showGrid = !1) : m.fullscreenPrevShowGrid !== null && (m.showGrid = !!m.fullscreenPrevShowGrid, m.fullscreenPrevShowGrid = null), vs(), Gl(), ve());
  }, Kl = () => document.fullscreenElement === L, Mp = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        Ca(!m.fullscreen);
        return;
      }
      Kl() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = L.requestFullscreen) == null ? void 0 : i.call(L));
    } catch {
      Ca(!m.fullscreen);
    }
  }, Wl = () => {
    document.fullscreenEnabled && Ca(Kl());
  };
  document.addEventListener("fullscreenchange", Wl), Gl();
  const Yl = () => {
    const i = !!m.outputPreviewExpanded;
    D.outputPreviewToggle.icon = i ? Tt.fullscreen_close : Tt.fullscreen, D.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", D.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Yl();
  const _s = e.onExecuted, xs = e.onConnectionsChange;
  let ws = null, Ss = null, Ns = null;
  !r && t === "stickers" && (Ns = (i = "sync") => {
    sl(i);
  }, e.__panoExternalStickerSync = Ns, ws = function(...o) {
    var c;
    typeof _s == "function" && _s.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, e.onExecuted = ws, Ss = function(...o) {
    var c;
    typeof xs == "function" && xs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, e.onConnectionsChange = Ss), r || pf.set(String(e.id ?? "0"), () => hl());
  let Wr = null;
  const Yr = async () => Wr || (Wr = (async () => {
    var i, o, c, l, h, p, _, b, x, S, P;
    return pf.delete(String(e.id ?? "0")), r || pn(), document.fullscreenElement === L && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Wl), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (c = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (h = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (b = (_ = (p = un) == null ? void 0 : p.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), Pa(), Gg(), (x = fe == null ? void 0 : fe.dispose) == null || x.call(fe), (S = Je == null ? void 0 : Je.unmount) == null || S.call(Je), (P = ue == null ? void 0 : ue.dispose) == null || P.call(ue), Y(!1), window.removeEventListener("keydown", ql, !0), window.removeEventListener("keydown", Xl, !0), window.removeEventListener("keydown", Aa, !0), window.removeEventListener("keyup", Aa, !0), window.removeEventListener("keydown", Zl, !0), window.removeEventListener("dragenter", Hl, !0), window.removeEventListener("dragover", zl, !0), window.removeEventListener("dragleave", jl, !0), window.removeEventListener("drop", $l, !0), !r && t === "stickers" && (e.onExecuted === ws && (e.onExecuted = _s), e.onConnectionsChange === Ss && (e.onConnectionsChange = xs), e.__panoExternalStickerSync === Ns && (e.__panoExternalStickerSync = null)), O.unmount(), V.remove(), sp(), Wr = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Wr = null, !1)), Wr), ql = (i) => {
    var o, c, l, h;
    if (i.key === "Escape") {
      if (m.fullscreen && document.fullscreenElement === L) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (m.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), Ca(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), Yr();
    }
  }, Xl = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const _ = i.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !ot() || (El(), i.preventDefault(), i.stopPropagation());
  }, Aa = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    m.marqueeModifier !== o && (m.marqueeModifier = o, ht(m.pointerPos));
  }, Zl = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: p, canRedo: _ } = Cl();
    i.shiftKey && !_ || !i.shiftKey && !p || (hs(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", ql, !0), window.addEventListener("keydown", Xl, !0), window.addEventListener("keydown", Aa, !0), window.addEventListener("keyup", Aa, !0), window.addEventListener("keydown", Zl, !0), L.addEventListener("pointerdown", (i) => {
    i.target === L && Yr();
  }), Rh(), !r && t === "stickers" && sl("open"), qg(), ct(), bs(), tn(), ze(), Qo(), Pl(), ht(m.pointerPos), ve(), I.rafId = requestAnimationFrame(ds);
}
function xf(e, t, n, r) {
  if (!(e != null && e.prototype)) return;
  const a = (y) => {
    var v, d;
    try {
      (v = y.__panoDomRestore) == null || v.call(y);
    } catch {
    }
    try {
      (d = y.__panoLegacyRestore) == null || d.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function s(y) {
    var C;
    const v = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === v) return;
    a(y), n === "PanoramaStickers" && E_(y), qc(y), R_(y, Ao);
    const w = mn(y, Ao);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const D = w.callback;
      w.callback = (V) => {
        var L;
        const O = D ? D(V) : void 0;
        return (L = y.setDirtyCanvas) == null || L.call(y, !0, !1), O;
      };
    }
    const M = mn(y, "bg_color");
    if (M && (M.value == null || String(M.value).trim() === "" || String(M.value).toLowerCase() === "#000000") && (M.value = "#00ff00", (C = M.callback) == null || C.call(M, "#00ff00")), n === "PanoramaStickers") {
      bc(y, r, () => qi(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
        return;
      }
    }
    bc(y, r, () => qi(y, "cutout")), Wy(y, {
      buttonText: r,
      onOpen: () => qi(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return s(this), y;
  };
  const f = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
  const g = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const y = g ? g.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
}
function K_(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = n ? n.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = r ? r.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
}
function W_(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const r = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    qc(e), bc(e, "Open Preview", () => qi(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Ky(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => qi(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
un.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && xf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && xf(e, t, "PanoramaCutout", "Open Cutout Editor"), lc(n) && K_(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    qc(e), lc(t) && W_(e);
  }
});
